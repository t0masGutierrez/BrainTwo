import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
const site = readFileSync(new URL('../site.js', import.meta.url), 'utf8');
test('all note consumers use the shared loader', () => {
    assert.equal((site.match(/NoteLoader\.load\(/g) || []).length, 5);
    assert.equal((site.match(/fetch\(/g) || []).length, 2);
    assert.match(site, /fetch\(RouteManager.assetUrl\('library.json'\), \{ cache: 'no-cache' \}\)/);
});
test('both entry pages load the same site assets and markup', () => {
    const index = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
    assert.equal(index, readFileSync(new URL('../404.html', import.meta.url), 'utf8'));
    for (const asset of ['site.js', 'site.css', 'mathjax-config.js']) assert.ok(index.includes(asset));
});
