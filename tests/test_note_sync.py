from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch
import update_notes

class NoteSyncTest(unittest.TestCase):
    def test_source_is_formatted_and_unchanged_files_are_not_rewritten(self):
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
                self.assertEqual(note.read_text(), 'Speed\n- Use $1m$ and $x_{\\text{abc}}$.\n')
                generated = output / '1 Test' / note.name
                self.assertIn('$1m$', generated.read_text())
                self.assertIn(r'$x_{\text{abc}}$', generated.read_text())
                before = generated.stat().st_mtime_ns
                source_before = note.stat().st_mtime_ns
                update_notes.update_notes()
                self.assertEqual(generated.stat().st_mtime_ns, before)
                self.assertEqual(note.stat().st_mtime_ns, source_before)
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

    def test_invalid_math_stops_before_source_or_output_changes(self):
        with tempfile.TemporaryDirectory() as tmp:
            source, output = Path(tmp) / 'source', Path(tmp) / 'output'
            folder = source / '1 Test'
            folder.mkdir(parents=True)
            first = folder / '1 Valid.md'
            last = folder / '2 Invalid.md'
            first.write_text('Value $x_{max} = 2$\n')
            last.write_text(r'$\frac{}{2}$')
            old = output / '1 Test' / 'old.md'
            old.parent.mkdir(parents=True)
            old.write_text('keep')
            with patch.object(update_notes, 'VAULT_ROOT', str(source)), patch.object(update_notes, 'OUTPUT_ROOT', str(output)):
                with self.assertRaisesRegex(ValueError, 'empty numerator'):
                    update_notes.update_notes()
            self.assertEqual(first.read_text(), 'Value $x_{max} = 2$\n')
            self.assertEqual(last.read_text(), r'$\frac{}{2}$')
            self.assertEqual(old.read_text(), 'keep')
            self.assertFalse((old.parent / first.name).exists())

    def test_source_math_changes_do_not_include_website_only_edits(self):
        with tempfile.TemporaryDirectory() as tmp:
            source, output = Path(tmp) / 'source', Path(tmp) / 'output'
            folder = source / '1 Test'
            folder.mkdir(parents=True)
            note = folder / '1 Note.md'
            note.write_text('Equation  \n$$\n\\begin{align}\nx_{max} &= 2 \\\\ \n\\text{two words} &= y\n\\end{align}\n$$\n![[Images/a b.png]]\n')
            with patch.object(update_notes, 'VAULT_ROOT', str(source)), patch.object(update_notes, 'OUTPUT_ROOT', str(output)):
                update_notes.update_notes()
            expected = 'Equation\n$$\n\\begin{lgathered}\nx_{\\text{max}}=2\\\\\n\\text{two words}=y\n\\end{lgathered}\n$$\n![[Images/a b.png]]\n'
            self.assertEqual(note.read_text(), expected)
            self.assertEqual((output / '1 Test' / note.name).read_text(), '### ' + expected)
