#!/bin/bash
# Support the existing `sh update_notes.sh` command on systems where sh is not Bash.
[ -n "${BASH_VERSION:-}" ] || exec bash "$0" "$@"
set -euo pipefail

main() {
    cd "$(dirname "$0")"
    saved_stash=''
    lock="$(git rev-parse --git-path update-notes.lock)"
    if ! mkdir "$lock" 2>/dev/null; then
        echo "Another note update is running, or its lock remains: $lock" >&2
        return 1
    fi

    restore_work() {
        if [ -z "$saved_stash" ]; then return 0; fi
        if [ -d "$(git rev-parse --git-path rebase-merge)" ] || [ -d "$(git rev-parse --git-path rebase-apply)" ]; then
            echo "Rebase needs repair. Local work remains in stash $saved_stash." >&2
            return 1
        fi
        if ! git stash apply --index --quiet "$saved_stash" | sed '/^Already up to date\.$/d'; then
            echo "Local work could not be fully restored. Keep stash $saved_stash until conflicts are fixed." >&2
            saved_stash=''
            return 1
        fi
        # Drop only the stash made by this run.
        if [ "$(git rev-parse refs/stash)" = "$saved_stash" ]; then
            git stash drop --quiet
        fi
        saved_stash=''
    }
    cleanup() {
        status=$?
        trap - EXIT
        restore_work || status=1
        rmdir "$lock"
        exit "$status"
    }
    trap cleanup EXIT
    trap 'exit 130' INT
    trap 'exit 143' TERM

    if ! git diff --quiet || ! git diff --cached --quiet || [ -n "$(git ls-files --others --exclude-standard)" ]; then
        git stash push --include-untracked --quiet --message "update_notes auto-stash"
        saved_stash=$(git rev-parse refs/stash)
    fi
    git pull --rebase --quiet
    restore_work
    # Do not overwrite edits to generated files. The user must resolve them first.
    paths=(':(glob)[0-9]*/**/*.md' ':(glob)[0-9]*/Images/**')
    if [ -f library.json ]; then paths+=(library.json); fi
    if ! git diff --quiet -- "${paths[@]}" || ! git diff --cached --quiet -- "${paths[@]}" || [ -n "$(git ls-files --others --exclude-standard -- "${paths[@]}")" ]; then
        echo "Generated files have local changes. No notes were generated or committed." >&2
        return 1
    fi
    python3 update_notes.py "$@"
    # The generator may have created the library for the first time.
    if [ -f library.json ]; then paths+=(library.json); fi
    git add -A -- "${paths[@]}"
    if git diff --cached --quiet -- "${paths[@]}"; then
        # A previous push may have failed after the commit succeeded.
        git push --quiet
        echo "Already up-to-date"
        return
    fi
    git diff --cached --numstat -- "${paths[@]}" | awk -F '\t' '{
        added = ($1 == "-" ? 0 : $1)
        deleted = ($2 == "-" ? 0 : $2)
        print $3 " (+" added " -" deleted ")"
    }'
    git commit --only --quiet -m "update notes" -- "${paths[@]}"
    git push --quiet
    echo "Everything up-to-date"
}

# Keep the full program in memory before it stashes its own file.
main "$@"
