import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import test from 'node:test';
import vm from 'node:vm';

const htmlFiles = ['index.html', '404.html'];
const repoRoot = resolve(new URL('..', import.meta.url).pathname);

function extractClass(source, className, filePath) {
    const start = source.indexOf(`class ${className}`);
    assert.notEqual(start, -1, `${className} should exist in ${filePath}`);

    const openBrace = source.indexOf('{', start);
    let depth = 0;
    for (let index = openBrace; index < source.length; index += 1) {
        if (source[index] === '{') depth += 1;
        if (source[index] === '}') depth -= 1;
        if (depth === 0) return source.slice(start, index + 1);
    }
    throw new Error(`Could not extract ${className} from ${filePath}`);
}

class FakeClassList {
    constructor(initial = []) {
        this.names = new Set(initial);
    }

    add(name) {
        this.names.add(name);
    }

    remove(name) {
        this.names.delete(name);
    }

    contains(name) {
        return this.names.has(name);
    }
}

function createElement(options = {}) {
    return {
        value: options.value || '',
        textContent: options.textContent || '',
        style: { ...(options.style || {}) },
        classList: new FakeClassList(options.classes || []),
    };
}

function createDom() {
    const elements = {
        type: createElement({ value: 'choice' }),
        answer: createElement({ value: 'term' }),
        'shuffle-toggle': createElement(),
        'shuffle-toggle-label': createElement({ textContent: 'Off' }),
        'star-toggle': createElement({ textContent: '☆' }),
        'star-empty-message': createElement(),
        'learn-modal': createElement({ style: { display: 'flex' } }),
    };

    return {
        elements,
        document: {
            getElementById(id) {
                return elements[id] || null;
            },
        },
    };
}

function loadApp(filePath, dom, options = {}) {
    const html = (readFileSync(filePath, 'utf8') + '\n' + readFileSync(resolve(repoRoot, 'site.js'), 'utf8'));
    const source = extractClass(html, 'App', filePath);
    const startedModes = [];
    let fetchCalls = 0;
    const sandbox = {
        document: dom.document,
        setTimeout,
        SearchEngine: class { constructor() {} },
        SearchCommandController: class { constructor() {} },
        SessionSummaryTracker: class { constructor() {} },
        FlashcardMode: class {
            constructor() {}
            start() { startedModes.push('flashcards'); }
        },
        ChoiceMode: class {
            constructor() {}
            start() { startedModes.push('choice'); }
        },
        WriteMode: class {
            constructor() {}
            start() { startedModes.push('write'); }
        },
        TestMode: class {
            constructor() {}
            start() { startedModes.push('test'); }
        },
        ImageFocus: class { constructor() {} },
        SessionManager: {
            saveNavState() {},
            clearProgress() {},
        },
        RouteManager: {
            contentUrl() { return '/cards.md'; },
        },
        StarManager: {
            getIndices() { return options.starredIndices || []; },
        },
        CardParser: {
            parseCards() {
                return [
                    { term: 'term one', definition: 'definition one', cardIndex: 0 },
                    { term: 'term two', definition: 'definition two', cardIndex: 1 },
                ];
            },
        },
        fetch() {
            fetchCalls += 1;
            return Promise.resolve({ text: () => Promise.resolve('cards') });
        },
    };

    vm.runInNewContext(`${source}\nthis.App = App;`, sandbox);
    return {
        app: new sandbox.App(),
        startedModes,
        getFetchCalls: () => fetchCalls,
    };
}

for (const htmlFile of htmlFiles) {
    test(`${htmlFile} star control includes empty-starred feedback slot`, () => {
        const filePath = resolve(repoRoot, htmlFile);
        const html = (readFileSync(filePath, 'utf8') + '\n' + readFileSync(resolve(repoRoot, 'site.js'), 'utf8'));

        assert.match(html, /id="star-empty-message"/);
        assert.match(html, /No starred terms/);
    });

    test(`${htmlFile} toggling star with no starred cards shows a nearby message`, () => {
        const filePath = resolve(repoRoot, htmlFile);
        const dom = createDom();
        const { app } = loadApp(filePath, dom, { starredIndices: [] });
        app.currentFolder = '4 Physics';
        app.currentFile = '11 Gravity.md';

        app.toggleStar();

        assert.equal(dom.elements['star-toggle'].textContent, '★');
        assert.equal(dom.elements['star-toggle'].classList.contains('starred'), true);
        assert.equal(dom.elements['star-empty-message'].textContent, 'No starred terms');
    });

    test(`${htmlFile} start is a no-op when starred-only has no cards`, () => {
        const filePath = resolve(repoRoot, htmlFile);
        const dom = createDom();
        dom.elements['star-toggle'].classList.add('starred');
        dom.elements['star-toggle'].textContent = '★';
        const { app, startedModes, getFetchCalls } = loadApp(filePath, dom, { starredIndices: [] });
        app.currentFolder = '4 Physics';
        app.currentFile = '11 Gravity.md';

        app.startLearning();

        assert.equal(dom.elements['star-empty-message'].textContent, 'No starred terms');
        assert.equal(dom.elements['learn-modal'].style.display, 'flex');
        assert.deepEqual(startedModes, []);
        assert.equal(getFetchCalls(), 0);
    });
}
