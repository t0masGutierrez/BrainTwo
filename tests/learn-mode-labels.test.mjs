import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import test from 'node:test';

const htmlFiles = ['index.html', '404.html'];
const repoRoot = resolve(new URL('..', import.meta.url).pathname);

for (const htmlFile of htmlFiles) {
    test(`${htmlFile} learn mode labels use short names without changing values`, () => {
        const html = readFileSync(resolve(repoRoot, htmlFile), 'utf8');

        assert.match(html, /<option value="flashcards">Flash<\/option>/);
        assert.match(html, /<option value="choice">Choose<\/option>/);
        assert.doesNotMatch(html, /<option value="flashcards">Flashcards<\/option>/);
        assert.doesNotMatch(html, /<option value="choice">Choice<\/option>/);
    });
}
