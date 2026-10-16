"""Generate the direct-link fallback and note list from website source files."""
from pathlib import Path
from generate_library import generate_library


def build_site(root):
    root = Path(root)
    source = (root / 'index.html').read_bytes()
    fallback = root / '404.html'
    if not fallback.exists() or fallback.read_bytes() != source:
        fallback.write_bytes(source)
    generate_library(root)


if __name__ == '__main__':
    build_site(Path(__file__).resolve().parent)
