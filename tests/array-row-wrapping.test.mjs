import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

for (const file of ['index.html', '404.html']) {
    const html = readFileSync(new URL('../' + file, import.meta.url), 'utf8') + '\n' + readFileSync(new URL('../site.js', import.meta.url), 'utf8');
    const code = html.slice(html.indexOf('    class MathRenderer {'), html.indexOf('    class MarkdownImageRenderer {'));
    const renderer = vm.runInNewContext(code + '\nMathRenderer');

    test(file + ' wraps long lgathered rows', () => {
        const body = '\n\\require{mathtools}\n\\begin{lgathered}\n' +
            String.raw`x=\frac{abcdefgh}{ijklmnop} + \frac{qrstuvwx}{yzabcdef}` +
            '\n\\end{lgathered}\n';
        const result = renderer._wrapDisplayMathBody(body, 40);
        assert.ok(result.split('\n').length > body.split('\n').length);
        assert.ok(result.includes('\\begin{lgathered}'));
        assert.ok(!result.includes('\\begin{aligned}'));
    });

    test(file + ' does not split a fraction', () => {
        const line = String.raw`\frac{abcdefghijklmnopqrstuvwxyz}{abcdefghijklmnopqrstuvwxyz}`;
        assert.equal(renderer._wrapDisplayMathLine(line, 20), line);
    });

    test(file + ' wraps array rows without adding displaystyle', () => {
        const line = String.raw`x=\frac{abcdefgh}{ijklmnop} + \frac{qrstuvwx}{yzabcdef}`;
        const result = renderer._wrapDisplayMathLine(line, 40);
        assert.ok(result.includes('\n'));
        assert.ok(!result.includes('\\displaystyle'));
        assert.equal((result.match(/\\frac/g) || []).length, 2);
    });
}
