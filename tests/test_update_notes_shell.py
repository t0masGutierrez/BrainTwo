import os
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest


SCRIPT = Path(__file__).resolve().parents[1] / 'update_notes.sh'


class UpdateNotesShellTest(unittest.TestCase):
    def check_run(self, change, staged=False, fail=False, generated=False, updater_fail=False, push_fail=False, conflict=False, shell="sh"):
        with tempfile.TemporaryDirectory(prefix='braintwo-shell-test-') as directory:
            root = Path(directory)
            remote = root / 'remote.git'
            repo = root / 'repo'
            env = dict(os.environ, GIT_CONFIG_NOSYSTEM='1', GIT_CONFIG_GLOBAL=os.devnull,
                       GIT_AUTHOR_NAME='Test', GIT_AUTHOR_EMAIL='test@example.invalid',
                       GIT_COMMITTER_NAME='Test', GIT_COMMITTER_EMAIL='test@example.invalid')

            def git(*args, cwd=root):
                return subprocess.run(['git', *args], cwd=cwd, env=env,
                                      capture_output=True, text=True, check=True)

            git('init', '--bare', '-q', str(remote))
            git('clone', '-q', str(remote), str(repo))
            shutil.copy2(SCRIPT, repo / 'update_notes.sh')
            note = repo / '1 Test' / '1 Note.md'
            note.parent.mkdir()
            note.write_text('before\n')
            (note.parent / 'Images').mkdir()
            (note.parent / 'Images' / 'example.svg').write_text('<svg/>\n')
            (repo / 'update_notes.py').write_text(
                "from pathlib import Path\nPath('1 Test/1 Note.md').write_text('after\\n')\n"
                if change else 'pass\n')
            (repo / 'local.txt').write_text('original\n')
            git('add', '.', cwd=repo)
            git('commit', '-qm', 'initial', cwd=repo)
            git('push', '-qu', 'origin', 'HEAD', cwd=repo)
            if staged:
                (repo / 'local.txt').write_text('local work\n')
                git('add', 'local.txt', cwd=repo)
            if fail:
                remote.rename(root / 'unavailable.git')
            if generated:
                note.write_text('local note edit\n')
            if updater_fail:
                (repo / 'update_notes.py').write_text('raise SystemExit(2)\n')
            if push_fail:
                hook = remote / 'hooks' / 'pre-receive'
                hook.write_text('#!/bin/sh\nexit 1\n')
                hook.chmod(0o755)
            if conflict:
                other = root / 'other'
                git('clone', '-q', str(remote), str(other))
                (other / 'local.txt').write_text('remote work\n')
                git('add', 'local.txt', cwd=other)
                git('commit', '-qm', 'remote edit', cwd=other)
                git('push', '-q', cwd=other)
            untracked = repo / '__pycache__' / 'sample.pyc'
            untracked.parent.mkdir()
            untracked.write_bytes(b'preserve this file')

            result = subprocess.run([shell, str(repo / 'update_notes.sh')], cwd=root,
                                    env=env, capture_output=True, text=True)
            self.assertEqual(result.returncode == 0, not (fail or generated or updater_fail or push_fail or conflict), result.stdout + result.stderr)
            if conflict:
                self.assertIn('update_notes auto-stash', git('stash', 'list', cwd=repo).stdout)
                self.assertIn('could not be fully restored', result.stderr)
                self.assertEqual(note.read_text(), 'before\n')
                self.assertEqual(git('show', 'stash@{0}^3:__pycache__/sample.pyc', cwd=repo).stdout, 'preserve this file')
                self.assertEqual(git('show', 'stash@{0}^2:local.txt', cwd=repo).stdout, 'local work\n')
                return result.stdout, note.read_text()
            self.assertEqual(untracked.read_bytes(), b'preserve this file')
            self.assertEqual(git('stash', 'list', cwd=repo).stdout, '')
            if staged:
                self.assertEqual(git('show', 'HEAD:local.txt', cwd=repo).stdout, 'original\n')
                self.assertEqual(git('diff', '--cached', '--name-only', cwd=repo).stdout, 'local.txt\n')
                self.assertEqual((repo / 'local.txt').read_text(), 'local work\n')
            if generated:
                self.assertEqual(note.read_text(), 'local note edit\n')
            if updater_fail:
                self.assertEqual(note.read_text(), 'before\n')
            if push_fail:
                self.assertNotIn('Notes committed and pushed.', result.stdout)
                hook.unlink()
                (repo / 'update_notes.py').write_text('pass\n')
                retry = subprocess.run([shell, str(repo / 'update_notes.sh')], cwd=root, env=env, capture_output=True, text=True)
                self.assertEqual(retry.returncode, 0, retry.stdout + retry.stderr)
                self.assertEqual(git('rev-parse', 'HEAD', cwd=repo).stdout, git('rev-parse', '@{upstream}', cwd=repo).stdout)
            return result.stdout, note.read_text()

    def test_untracked_restore_does_not_report_no_changes_before_update(self):
        output, note = self.check_run(change=True)
        self.assertEqual(output, '1 Test/1 Note.md (+1 -1)\nNotes committed and pushed.\n')
        self.assertEqual(note, 'after\n')

    def test_unrelated_staged_work_is_not_committed(self):
        self.check_run(change=True, staged=True)

    def test_pull_failure_restores_local_work(self):
        self.check_run(change=False, staged=True, fail=True)

    def test_generated_local_edits_are_preserved(self):
        self.check_run(change=True, generated=True)

    def test_updater_failure_does_not_commit(self):
        self.check_run(change=True, updater_fail=True, staged=True)

    def test_failed_push_can_be_retried_without_new_note_changes(self):
        self.check_run(change=True, push_fail=True)

    def test_restore_conflict_keeps_stash_and_stops_generation(self):
        self.check_run(change=True, staged=True, conflict=True)

    @unittest.skipUnless(shutil.which('dash'), 'dash is not installed')
    def test_dash_restarts_script_with_bash(self):
        self.check_run(change=True, shell='dash')

    def test_no_change_is_reported_once_after_updater(self):
        output, note = self.check_run(change=False)
        self.assertEqual(output, 'Already up to date.\n')
        self.assertEqual(note, 'before\n')


if __name__ == '__main__':
    unittest.main()
