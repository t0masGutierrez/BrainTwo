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

    # Commit generated markdown plus copied note image assets.
    # Without the Images path, pasted diagrams make `git pull --rebase` fail next run.
    paths=(':(glob)**/*.md' ':(glob)**/Images/**' library.json)

    # 404.html is the GitHub Pages SPA fallback for direct pretty URLs.
    # Treat index.html as the source of truth, but only regenerate 404.html
    # when index.html itself changed in this run/worktree.
    if ! git diff --quiet -- index.html || ! git diff --cached --quiet -- index.html; then
        cp index.html 404.html
        paths+=(index.html 404.html)
    fi

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
    git push --quiet

    echo "Everything up-to-date"
}

main "$@"
