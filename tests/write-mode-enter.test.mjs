import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

const source = readFileSync(new URL('../site.js', import.meta.url), 'utf8');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const classSource = (name, next) => source.slice(source.indexOf(`    class ${name} {`), source.indexOf(`    class ${next} {`));

function setup(answerType) {
    const elements = new Map();
    const listeners = new Map();
    const timers = new Map();
    let timerId = 0;
    const document = {
        getElementById(id) {
            if (!elements.has(id)) elements.set(id, { style: {}, value: '', innerHTML: '', focus() {} });
            return elements.get(id);
        },
        addEventListener(type, listener) {
            if (!listeners.has(type)) listeners.set(type, new Set());
            listeners.get(type).add(listener);
        },
        removeEventListener(type, listener) {
            listeners.get(type)?.delete(listener);
        }
    };
    const classes = vm.runInNewContext([
        classSource('TestAnswerGrader', 'MathRenderer'),
        classSource('SessionSummaryTracker', 'NoteLoader'),
        classSource('RetryQueue', 'ViewManager'),
        classSource('WriteMode', 'TestMode'),
        '({ WriteMode, SessionSummaryTracker })'
    ].join('\n'), {
        document,
        setTimeout: callback => { timers.set(++timerId, callback); return timerId; },
        clearTimeout: id => timers.delete(id),
        MathRenderer: { renderToHtml: value => value, typeset() {} }
    });
    const app = {
        answerType,
        flashcards: [
            { term: 'first term', definition: 'first definition', cardIndex: 0 },
            { term: 'second term', definition: 'second definition', cardIndex: 1 }
        ],
        summaryTracker: new classes.SessionSummaryTracker(),
        saveLearnProgress() {}
    };
    const mode = new classes.WriteMode(app);
    mode.order = [0, 1];
    document.getElementById('write-view').style.display = 'flex';
    mode.update();
    const input = document.getElementById(answerType === 'term' ? 'write-input-single' : 'write-input-multi');
    const inputId = answerType === 'term' ? 'write-input-single' : 'write-input-multi';
    const handler = html.match(new RegExp(`id="${inputId}"[^>]*onkeydown="([^"]+)"`))[1];
    return {
        mode, input,
        submitWithEnter() {
            vm.runInNewContext(handler, {
                app: { writeMode: mode },
                event: { key: 'Enter', preventDefault() {} }
            });
        },
        flushTimers() {
            const callbacks = [...timers.values()];
            timers.clear();
            callbacks.forEach(callback => callback());
        },
        key(type, repeat = false) {
            for (const listener of [...(listeners.get(type) || [])]) {
                listener({ type, key: 'Enter', code: 'Enter', repeat, preventDefault() {}, stopPropagation() {} });
            }
        },
        click() {
            for (const listener of [...(listeners.get('click') || [])]) listener({ type: 'click' });
        }
    };
}

for (const answerType of ['term', 'definition']) {
    for (const releaseBeforeTimer of [true, false]) {
        test(`${answerType}: one more Enter advances after a correct answer (${releaseBeforeTimer ? 'fast' : 'slow'} release)`, () => {
            const ui = setup(answerType);
            ui.input.value = `first ${answerType}`;
            ui.submitWithEnter();
            if (releaseBeforeTimer) ui.key('keyup');
            ui.flushTimers();
            if (!releaseBeforeTimer) ui.key('keyup');
            assert.equal(ui.mode.currentIndex, 0);
            ui.key('keydown');
            ui.key('keyup');
            assert.equal(ui.mode.currentIndex, 1);
            assert.equal(ui.input.disabled, false);
            assert.equal(ui.input.value, '');
        });
    }

    test(`${answerType}: holding and releasing Enter keeps an incorrect answer visible`, () => {
        const ui = setup(answerType);
        ui.input.value = 'wrong';
        ui.submitWithEnter();
        ui.flushTimers();
        ui.key('keydown', true);
        ui.key('keyup');
        assert.equal(ui.mode.currentIndex, 0);
        assert.equal(ui.mode.answered, true);
        ui.key('keydown');
        ui.key('keyup');
        assert.equal(ui.mode.currentIndex, 1);
    });

    test(`${answerType}: a quick next press works before the click delay and leaves no old listener`, () => {
        const ui = setup(answerType);
        ui.input.value = `first ${answerType}`;
        ui.submitWithEnter();
        ui.key('keydown', true);
        assert.equal(ui.mode.currentIndex, 0);
        ui.key('keyup');
        ui.key('keydown');
        assert.equal(ui.mode.currentIndex, 1);
        ui.flushTimers();
        ui.click();
        assert.equal(ui.mode.currentIndex, 1);
        assert.equal(ui.mode.answered, false);
    });
}
