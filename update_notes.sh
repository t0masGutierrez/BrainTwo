#!/bin/bash
set -euo pipefail

main() {
    cd "$(dirname "$0")"

    # The site is generated from the Obsidian vault. Image assets are generated too,
    # so local generated image changes should not block the initial pull/rebase.
    # This script is wrapped in main() so bash reads it before any self-stash happens.
    stashed=0
    if ! git diff --quiet || ! git diff --cached --quiet || [ -n "$(git ls-files --others --exclude-standard)" ]; then
        git stash push --include-untracked --quiet --message "update_notes auto-stash"
        stashed=1
    fi

    git pull --rebase --quiet

    if [ "$stashed" -eq 1 ]; then
        git stash pop --quiet
    fi

    python3 update_notes.py

    # Commit generated notes and copied note image assets from numbered note dirs only.
    paths=(':(glob)[0-9]*/**/*.md' ':(glob)[0-9]*/Images/**')

    git add -A -- "${paths[@]}"

    if git diff --cached --quiet -- "${paths[@]}"; then
        echo "Already up to date."
        exit 0
    fi

    git diff --cached --numstat -- "${paths[@]}" | awk -F '\t' '{
        added = ($1 == "-" ? 0 : $1)
        deleted = ($2 == "-" ? 0 : $2)
        print $3 " (+" added " -" deleted ")"
    }'

    git commit --quiet -m "update notes"
    push_with_rebase_retry

    echo "Everything up-to-date"
}

push_with_rebase_retry() {
    local attempt=1
    local max_attempts=3

    while true; do
        if git push --quiet; then
            return 0
        fi

        if [ "$attempt" -ge "$max_attempts" ]; then
            echo "Push failed after $max_attempts attempts. Resolve manually with: git fetch && git rebase @{u} && git push" >&2
            return 1
        fi

        echo "Remote changed before push completed; rebasing and retrying push ($attempt/$max_attempts)." >&2
        git fetch --quiet
        git rebase --quiet @{u}
        attempt=$((attempt + 1))
    done
}

main "$@"
