"""Build the public note list from numbered note folders only."""
import json
from pathlib import Path
import re


def generate_library(root):
    root = Path(root)
    library = {
        folder.name: sorted(note.name for note in folder.glob('*.md') if note.is_file())
        for folder in sorted(root.iterdir())
        if folder.is_dir() and re.match(r'^\d+ ', folder.name)
    }
    library = {folder: notes for folder, notes in library.items() if notes}
    data = json.dumps(library, indent=2) + '\n'
    path = root / 'library.json'
    if not path.exists() or path.read_text(encoding='utf-8') != data:
        temporary = path.with_suffix('.json.tmp')
        temporary.write_text(data, encoding='utf-8')
        temporary.replace(path)
    return library


if __name__ == '__main__':
    generate_library(Path(__file__).resolve().parent)
