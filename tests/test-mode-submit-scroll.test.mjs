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
    assert.notEqual(openBrace, -1, `${className} should have a body in ${filePath}`);

    let depth = 0;
    for (let index = openBrace; index < source.length; index += 1) {
        const char = source[index];
        if (char === '{') depth += 1;
        if (char === '}') depth -= 1;
        if (depth === 0) return source.slice(start, index + 1);
    }

    throw new Error(`Could not extract ${className} from ${filePath}`);
}

class FakeClassList {
    constructor() {
        this.states = new Map();
    }

    toggle(name, force) {
        this.states.set(name, !!force);
    }
}

function createSubmitDom({ inputCount, scrollTop, actionsTop }) {
    const inputs = Array.from({ length: inputCount }, (_unused, index) => ({
        value: `typed answer ${index + 1}`,
        disabled: false,
        classList: new FakeClassList()
    }));
    const retryButton = {
        textContent: 'Submit',
        onclick: null
    };
    const actions = {
        getBoundingClientRect: () => ({ top: actionsTop })
    };
    const summary = {
        style: {},
        innerHTML: ''
    };
    const container = {
        querySelectorAll: selector => (selector === '.test-input' ? inputs : []),
        querySelector: selector => {
            if (selector === '.test-button') return retryButton;
            if (selector === '.test-actions') return actions;
            return null;
        }
    };
    const scrollCalls = [];
    const document = {
        documentElement: { scrollTop },
        body: { scrollTop },
        getElementById: id => {
            if (id === 'test-container') return container;
            if (id === 'test-summary') return summary;
            return null;
        }
    };
    const window = {
        pageYOffset: scrollTop,
        scrollTo: (...args) => {
            scrollCalls.push(args);
        }
    };

    return { document, window, scrollCalls, retryButton };
}

function loadTestMode(filePath, dom) {
    const html = (readFileSync(filePath, 'utf8') + '\n' + readFileSync(resolve(repoRoot, 'site.js'), 'utf8'));
    const source = [
        extractClass(html, 'TestAnswerGrader', filePath),
        extractClass(html, 'TestMode', filePath),
        'this.TestMode = TestMode;'
    ].join('\n');
    const sandbox = {
        document: dom.document,
        window: dom.window,
        MathRenderer: {
            renderToHtml: value => String(value),
            typeset() {}
        },
        ViewManager: {
            scrollToTop() {
                dom.window.scrollTo(0, 0);
            }
        },
        escapeHtml: value => String(value)
    };

    vm.runInNewContext(source, sandbox);
    return sandbox.TestMode;
}

for (const htmlFile of htmlFiles) {
    test(`${htmlFile} submit scrolls directly above the retry button`, () => {
        const filePath = resolve(repoRoot, htmlFile);
        const dom = createSubmitDom({
            inputCount: 49,
            scrollTop: 320,
            actionsTop: 2800
        });
        const TestMode = loadTestMode(filePath, dom);
        let saved = false;
        const app = {
            flashcards: Array.from({ length: 49 }, (_unused, index) => ({
                term: `term ${index + 1}`,
                definition: `definition ${index + 1}`
            })),
            saveLearnProgress() {
                saved = true;
            }
        };

        const mode = new TestMode(app);
        mode.order = app.flashcards.map((_card, index) => index);
        mode.answers = app.flashcards.map(() => 'wrong answer');
        mode.submit();

        assert.equal(dom.retryButton.textContent, 'Retry');
        assert.equal(saved, true);
        assert.equal(dom.scrollCalls.length, 1);
        assert.equal(dom.scrollCalls[0].length, 1);
        assert.equal(dom.scrollCalls[0][0].top, 3104);
        assert.equal(dom.scrollCalls[0][0].behavior, 'auto');
    });
}
