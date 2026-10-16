import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
const code = readFileSync(new URL('../site.js', import.meta.url), 'utf8');
const Search = vm.runInNewContext(code.slice(code.indexOf('class SearchEngine {'), code.indexOf('    class FlashcardMode {')) + '\nSearchEngine');
test('cached search text preserves accents, equations, encoded names and partial matches', () => {
    for (let i=0;i<2;i++) {
        assert.equal(Search.normalizeSearchText('Caf%C3%A9 $\\alpha_{n}$'), 'cafe alpha n');
        assert.equal(Search.normalizeSearchText('a%broken'), 'a%broken');
        assert.equal(Search.wordMatchesText('wv', 'wave'), true);
        assert.equal(Search.allWordsMatch('wave equation', ['wave', 'equation']), true);
        assert.equal(Search.allWordsMatch('wave equation', ['missing']), false);
    }
});
test('search text storage is bounded', () => {
    for(let i=0;i<10010;i++) Search.normalizeSearchText('term '+i);
    assert.ok(Search.normalizedText.size <= 10000);
});
test('a slow index build cannot replace a more recent opened note', async () => {
    let finishSlow;
    const SlowSearch = vm.runInNewContext(code.slice(code.indexOf('class SearchEngine {'), code.indexOf('    class FlashcardMode {')) + '\nSearchEngine', {
        document: {addEventListener() {}},
        NoteLoader: {load: (_folder, file) => file === 'a' ? Promise.resolve('old') : new Promise(resolve => {finishSlow=resolve;})},
        CardParser: {splitSections: text => [text], parseCard: text => ({term:text,definition:''})},
    });
    const search = new SlowSearch({manifestData:{folder:['a','b']}});
    const building = search.buildIndex();
    await new Promise(setImmediate);
    search.updateNote('folder', 'a', 'new');
    finishSlow('slow');
    await building;
    assert.equal(search.index.find(item=>item.file==='a').term, 'new');
});
test('search commands use the same text rules as general search', () => {
    const Parser = vm.runInNewContext(code.slice(code.indexOf('class SearchCommandParser {'), code.indexOf('    class SearchCommandController {')) + '\nSearchCommandParser', {SearchEngine:Search});
    const parsed=Parser.parse('wave \\folder Physics \\term temperature');
    assert.equal(parsed.global, 'wave');
    assert.equal(parsed.commands.folder, 'Physics');
    assert.equal(parsed.commands.term, 'temperature');
    assert.equal(Parser.normalizeSearchText('Caf%C3%A9'), Search.normalizeSearchText('Café'));
});
