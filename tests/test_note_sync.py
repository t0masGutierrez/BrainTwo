from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch
import update_notes

class NoteSyncTest(unittest.TestCase):
    def test_source_is_read_only_and_unchanged_files_are_not_rewritten(self):
        with tempfile.TemporaryDirectory() as tmp:
            source, output = Path(tmp) / 'source', Path(tmp) / 'output'
            folder = source / '1 Test'
            folder.mkdir(parents=True)
            output.mkdir()
            note = folder / '1 Note.md'
            raw = 'Speed\n- Use $1 m$ and $x_{abc}$.\n'
            note.write_text(raw)
            guide = output / 'guides' / 'guide.md'
            guide.parent.mkdir()
            guide.write_text('keep this guide')
            with patch.object(update_notes, 'VAULT_ROOT', str(source)), patch.object(update_notes, 'OUTPUT_ROOT', str(output)):
                update_notes.update_notes()
                self.assertEqual(note.read_text(), raw)
                generated = output / '1 Test' / note.name
                self.assertIn('$1 m$', generated.read_text())
                self.assertIn('$x_{abc}$', generated.read_text())
                before = generated.stat().st_mtime_ns
                update_notes.update_notes()
                self.assertEqual(generated.stat().st_mtime_ns, before)
                self.assertEqual(guide.read_text(), 'keep this guide')

    def test_empty_source_cannot_delete_output(self):
        with tempfile.TemporaryDirectory() as tmp:
            source, output = Path(tmp) / 'source', Path(tmp) / 'output'
            source.mkdir()
            note = output / '1 Test' / 'note.md'
            note.parent.mkdir(parents=True)
            note.write_text('keep')
            with patch.object(update_notes, 'VAULT_ROOT', str(source)), patch.object(update_notes, 'OUTPUT_ROOT', str(output)):
                with self.assertRaises(ValueError):
                    update_notes.update_notes()
            self.assertEqual(note.read_text(), 'keep')

    def test_deleted_notes_and_images_are_removed_but_guides_survive(self):
        with tempfile.TemporaryDirectory() as tmp:
            source, output = Path(tmp) / 'source', Path(tmp) / 'output'
            (source / '1 Test').mkdir(parents=True)
            folder = output / '1 Test'
            (folder / 'Images').mkdir(parents=True)
            (folder / 'old.md').write_text('old')
            (folder / 'guide.txt').write_text('keep')
            (folder / 'Images' / 'old.png').write_bytes(b'old')
            with patch.object(update_notes, 'VAULT_ROOT', str(source)), patch.object(update_notes, 'OUTPUT_ROOT', str(output)):
                update_notes.update_notes()
            self.assertFalse((folder / 'old.md').exists())
            self.assertFalse((folder / 'Images' / 'old.png').exists())
            self.assertEqual((folder / 'guide.txt').read_text(), 'keep')
