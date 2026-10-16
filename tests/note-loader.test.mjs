import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
const code = readFileSync(new URL('../site.js', import.meta.url), 'utf8');
function loader(fetch) {
    return vm.runInNewContext(code.slice(code.indexOf('class NoteLoader {'), code.indexOf('    class RouteManager {')) + '\nNoteLoader', {
        fetch, RouteManager: {contentUrl: (folder, file) => folder + '/' + file},
    });
}
test('simultaneous reads share a request; later reads get current content', async () => {
    let calls = 0;
    const notes = loader(async (_url, options) => {
        assert.equal(options.cache, 'no-cache');
        calls++;
        return {ok: true, text: async () => String(calls)};
    });
    assert.deepEqual(await Promise.all([notes.load('a', 'b'), notes.load('a', 'b')]), ['1', '1']);
    assert.equal(calls, 1);
    assert.equal(await notes.load('a', 'b'), '2');
});
test('failed requests can be retried and never return an error page as a note', async () => {
    let ok = false;
    const notes = loader(async () => ({ok, status: 404, text: async () => 'note'}));
    await assert.rejects(notes.load('a', 'b'), /404/);
    ok = true;
    assert.equal(await notes.load('a', 'b'), 'note');
});
