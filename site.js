if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // =====================================================================
    // UTILITY CLASSES
    // =====================================================================

    class CardTextFormatter {
        static FLASHCARD_LINE_LENGTH = 46;

        static insertLineBreaks(content, maxChars = this.FLASHCARD_LINE_LENGTH) {
            const normalizedMax = Math.max(12, Number(maxChars) || this.FLASHCARD_LINE_LENGTH);
            const { text, mathSpans } = this._protectMath(content);
            const wrapped = text
                .split('\n')
                .map(line => this._wrapLine(line, normalizedMax))
                .join('\n');
            return this._restoreMath(wrapped, mathSpans);
        }

        static _protectMath(content) {
            const mathSpans = [];
            const text = String(content || '').replace(/\$\$[\s\S]+?\$\$|\$(?!\$)(?:\\.|[^\\$\n])+?\$/g, match => {
                mathSpans.push(match);
                return `@@CARD_MATH_${mathSpans.length - 1}@@`;
            });
            return { text, mathSpans };
        }

        static _restoreMath(content, mathSpans) {
            return content.replace(/@@CARD_MATH_(\d+)@@/g, (_match, idx) => mathSpans[Number(idx)]);
        }

        static _wrapLine(line, maxChars) {
            let remaining = line;
            const parts = [];

            while (remaining.length > maxChars) {
                const breakIndex = this._closestSpaceIndex(remaining, maxChars);
                if (breakIndex <= 0 || breakIndex >= remaining.length) break;

                parts.push(remaining.slice(0, breakIndex).trimEnd());
                remaining = remaining.slice(breakIndex + 1).trimStart();
            }

            parts.push(remaining);
            return parts.join('<br>');
        }

        static _closestSpaceIndex(line, target) {
            const before = line.lastIndexOf(' ', target);
            const after = line.indexOf(' ', target);

            if (before === -1) return after;
            if (after === -1) return before;
            return target - before <= after - target ? before : after;
        }
    }

    class TestAnswerGrader {
        static normalizeAnswer(value) {
            return String(value || '')
                .replace(/^#+\s*/gm, '')
                .replace(/^[-*]\s*/gm, '')
                .replace(/[`*_]/g, '')
                .replace(/\s+/g, ' ')
                .trim()
                .toLowerCase();
        }

        static displayTerm(card) {
            return String(card?.term || '').replace(/^#+\s*/, '').trim();
        }

        static gradeTermAnswers(cards, answers, allowAnyOrder) {
            const normalizedCards = cards.map((card, index) => ({
                index,
                term: this.displayTerm(card),
                normalizedTerm: this.normalizeAnswer(this.displayTerm(card)),
                card
            }));
            const cardResults = normalizedCards.map(item => ({
                card: item.card,
                term: item.term,
                definition: item.card.definition,
                isCorrect: false,
                userAnswer: ''
            }));
            const usedCardIndexes = new Set();
            const results = cards.map((_card, inputIndex) => {
                const userAnswer = String(answers[inputIndex] || '').trim();
                const normalizedAnswer = this.normalizeAnswer(userAnswer);
                let matched = null;

                if (allowAnyOrder) {
                    matched = normalizedCards.find(item => (
                        item.normalizedTerm &&
                        item.normalizedTerm === normalizedAnswer &&
                        !usedCardIndexes.has(item.index)
                    )) || null;
                } else {
                    const expected = normalizedCards[inputIndex];
                    if (expected?.normalizedTerm && expected.normalizedTerm === normalizedAnswer) {
                        matched = expected;
                    }
                }

                if (matched) {
                    usedCardIndexes.add(matched.index);
                    cardResults[matched.index].isCorrect = true;
                    cardResults[matched.index].userAnswer = userAnswer;
                }

                return {
                    inputIndex,
                    userAnswer,
                    expectedTerm: normalizedCards[inputIndex]?.term || '',
                    matchedTerm: matched ? matched.term : '',
                    matchedIndex: matched ? matched.index : -1,
                    isCorrect: !!matched
                };
            });

            return {
                total: cards.length,
                correctCount: cardResults.filter(item => item.isCorrect).length,
                results,
                cardResults
            };
        }
    }

    class MathRenderer {
        static SUMMARY_MATH_LINE_LENGTH = 46;

        static extractMathBlocks(md) {
            const mathBlocks = [];
            const regex = /\$\$[\s\S]+?\$\$|\$(?!\$)(?:\\.|[^\\$\n])+?\$/g;
            let out = md.replace(regex, function(match) {
                mathBlocks.push(match);
                return `MATHBLOCKTOKEN${mathBlocks.length - 1}MATHBLOCKTOKEN`;
            });
            return { text: out, mathBlocks };
        }

        static restoreMathBlocks(html, mathBlocks) {
            return html.replace(/MATHBLOCKTOKEN(\d+)MATHBLOCKTOKEN/g, (m, idx) => this.escapeHtml(mathBlocks[parseInt(idx)]));
        }

        static escapeHtml(text) {
            return String(text || '')
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        }

        static wrapDisplayMathLines(content, maxChars = this.SUMMARY_MATH_LINE_LENGTH) {
            return String(content || '').replace(/\$\$([\s\S]+?)\$\$|\$(?!\$)((?:\\.|[^\\$\n])+?)\$/g, (match, displayBody, inlineBody) => {
                if (displayBody !== undefined) {
                    const wrapped = this._wrapDisplayMathBody(displayBody, maxChars);
                    return `$$${wrapped}$$`;
                }
                if (inlineBody.length <= maxChars) return match;
                const wrapped = this._wrapDisplayMathBody(`\n${inlineBody}\n`, maxChars).trim();
                return `$$\n${wrapped}\n$$`;
            });
        }

        static _wrapDisplayMathBody(body, maxChars) {
            const lines = String(body || '').split('\n');
            const containsEnvironment = /\\begin\{[^}]+\}/.test(body);
            const supportedEnvironment = /\\begin\{(?:aligned|gathered|lgathered|array)\}/.test(body);
            if (containsEnvironment && !supportedEnvironment) return body;

            const wrappedLines = lines.map(line => this._wrapDisplayMathLine(line, maxChars));
            if (!containsEnvironment && wrappedLines.some((line, index) => line !== lines[index])) {
                return `\n\\begin{aligned}\n${wrappedLines.join('\n')}\n\\end{aligned}\n`;
            }
            return wrappedLines.join('\n');
        }

        static _wrapDisplayMathLine(line, maxChars) {
            const rawLine = String(line || '');
            if (rawLine.length <= maxChars || /\\(?:begin|end)\{/.test(rawLine)) return rawLine;

            const leading = rawLine.match(/^\s*/)[0];
            const rowBreakMatch = rawLine.match(/^(.*?)(\s*\\\\\s*)$/);
            let remaining = (rowBreakMatch ? rowBreakMatch[1] : rawLine).trim();
            const trailingBreak = rowBreakMatch ? ' \\\\' : '';
            const parts = [];

            while (remaining.length > maxChars) {
                const breakIndex = this._closestTopLevelSpaceIndex(remaining, maxChars);
                if (breakIndex <= 0 || breakIndex >= remaining.length) break;
                parts.push(remaining.slice(0, breakIndex).trimEnd());
                remaining = remaining.slice(breakIndex + 1).trimStart();
            }

            parts.push(remaining);
            if (parts.length === 1) return rawLine;
            return leading + parts.join(` \\\\\n${leading}`) + trailingBreak;
        }

        static _closestTopLevelSpaceIndex(line, target) {
            const spaces = [];
            let braceDepth = 0;
            let parenDepth = 0;
            for (let i = 0; i < line.length; i++) {
                const char = line[i];
                if (char === '{') braceDepth++;
                if (char === '}') braceDepth = Math.max(0, braceDepth - 1);
                if (char === '(') parenDepth++;
                if (char === ')') parenDepth = Math.max(0, parenDepth - 1);
                if (
                    char === ' ' &&
                    braceDepth === 0 &&
                    parenDepth === 0 &&
                    !/[([{]/.test(line[i - 1] || '') &&
                    !/[([{)\]}]/.test(line[i + 1] || '')
                ) {
                    spaces.push(i);
                }
            }
            if (!spaces.length) return -1;
            const score = index => {
                const preferredBonus = this._isPreferredMathBreak(line, index) ? 12 : 0;
                return Math.abs(index - target) - preferredBonus;
            };
            return spaces.reduce((best, index) => score(index) < score(best) ? index : best, spaces[0]);
        }

        static _isPreferredMathBreak(line, index) {
            const before = line.slice(0, index);
            const after = line.slice(index + 1);
            const commandPattern = /\\(?:land|lor|implies|iff|le|ge|neq|equiv|subset|supset|subseteq|supseteq|in|notin|cup|cap|rightarrow|leftarrow|to|mapsto|pm|mp|times|cdot|div|approx|sim|propto)\b/;
            return /[=+\-<>:,]$/.test(before) ||
                /^[=+\-<>:,]/.test(after) ||
                commandPattern.test(before.match(/\\[A-Za-z]+$/)?.[0] || '') ||
                commandPattern.test(after.match(/^\\[A-Za-z]+/)?.[0] || '');
        }

        static renderToHtml(content, replaceAllBackslash = true, wrapLongLines = false, wrapMathLines = false) {
            const displayContent = wrapMathLines ? this.wrapDisplayMathLines(content) : content;
            const { text, mathBlocks } = this.extractMathBlocks(displayContent);
            const displayText = wrapLongLines ? CardTextFormatter.insertLineBreaks(text) : text;
            const processed = replaceAllBackslash
                ? displayText.replace(/\\/g, '<br>')
                : displayText.replace(/\\\\/g, '<br>');
            let html = window.marked.parse(processed);
            return this.restoreMathBlocks(html, mathBlocks);
        }

        static typeset(element) {
            if (window.MathJax && window.MathJax.typesetPromise) {
                return window.MathJax.typesetPromise([element])
                    .then(() => this.fitSummaryMath(element))
                    .catch(() => {});
            }
            this.fitSummaryMath(element);
            return Promise.resolve();
        }

        static fitSummaryMath(element) {
            const root = element || document;
            root.querySelectorAll('.test-summary-definition mjx-container').forEach(math => {
                const definition = math.closest('.test-summary-definition');
                const svg = math.querySelector('svg');
                if (!definition || !svg) return;

                math.classList.remove('summary-math-fit');
                const availableWidth = definition.clientWidth;
                if (!availableWidth) return;

                if (svg.getBoundingClientRect().width > availableWidth + 1) {
                    math.classList.add('summary-math-fit');
                }
            });
        }

        static typesetClear() {
            if (window.MathJax && window.MathJax.typesetClear) {
                window.MathJax.typesetClear();
            }
        }
    }

    class MarkdownImageRenderer {
        static escapeAttr(text) {
            return String(text)
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        }

        static decodePath(path) {
            try {
                return decodeURIComponent(String(path));
            } catch (_error) {
                return String(path);
            }
        }

        static encodePath(path) {
            return path.split('/').map(part => encodeURIComponent(part)).join('/');
        }

        static isNumericSize(value) {
            return /^\d+(?:x\d+)?$/.test(value || '');
        }

        static cleanImagePath(imagePath) {
            return this.decodePath(imagePath).trim().replace(/^\/+/, '').replace(/\|$/, '');
        }

        static imageAlt(imagePath, alias) {
            const cleanPath = this.cleanImagePath(imagePath);
            const label = alias && !this.isNumericSize(alias)
                ? alias
                : cleanPath.split('/').pop().replace(/\.[^.]+$/, '');
            return this.escapeAttr(label.replace(/[-_]+/g, ' ').trim());
        }

        static imageWidth(alias) {
            if (!alias) return '';
            const match = alias.match(/^(\d+)(?:x\d+)?$/);
            return match ? ` width="${match[1]}"` : '';
        }

        static imageSrc(imagePath, folder) {
            const normalized = this.cleanImagePath(imagePath);
            let assetPath;
            if (/^(?:https?:|data:|blob:)/i.test(normalized)) {
                return normalized;
            } else if (normalized.startsWith(`${folder}/`) || normalized.includes('/Images/')) {
                assetPath = normalized;
            } else if (normalized.startsWith('Images/')) {
                assetPath = `${folder}/${normalized}`;
            } else {
                assetPath = `${folder}/Images/${normalized}`;
            }
            const encodedPath = this.encodePath(assetPath);
            if (typeof RouteManager !== 'undefined') {
                return RouteManager.assetUrl(encodedPath);
            }
            return encodedPath;
        }

        static imageTag(imagePath, alias, folder) {
            const cleanImagePath = imagePath.trim();
            const cleanAlias = alias && alias.trim();
            const src = this.escapeAttr(this.imageSrc(cleanImagePath, folder));
            const alt = this.imageAlt(cleanImagePath, cleanAlias);
            const width = this.imageWidth(cleanAlias);
            return `<img class="note-image" src="${src}" alt="${alt}"${width}>`;
        }

        static expandObsidianImages(content, folder) {
            return content
                .replace(/!\[\[([^|\]\n]+)(?:\|([^\]\n]+))?\]\]/g, (_match, imagePath, alias) => {
                    return this.imageTag(imagePath, alias, folder);
                })
                .replace(/!\[([^\]\n]*)\]\(([^)\n]+)\)/g, (_match, alt, imagePath) => {
                    return this.imageTag(imagePath, alt, folder);
                });
        }
    }

    class ImageFocus {
        constructor() {
            this.overlay = null;
            this.focusedImage = null;
            this.lastSourceImage = null;
        }

        init() {
            this.overlay = document.getElementById('image-focus-overlay');
            this.focusedImage = document.getElementById('image-focus-img');
            const content = document.getElementById('file-content');
            if (!this.overlay || !this.focusedImage || !content) return;

            content.addEventListener('click', event => {
                const image = event.target.closest('img.note-image');
                if (!image || !content.contains(image)) return;
                event.preventDefault();
                this.open(image);
            });

            content.addEventListener('keydown', event => {
                const image = event.target.closest('img.note-image');
                if (!image || !content.contains(image)) return;
                if (event.key !== 'Enter' && event.key !== ' ') return;
                event.preventDefault();
                this.open(image);
            });

            this.overlay.addEventListener('click', () => this.close());
            document.addEventListener('keydown', event => {
                if (!this.isOpen() || (event.key !== 'Escape' && event.code !== 'Escape')) return;
                event.preventDefault();
                this.close();
            }, true);
        }

        prepare(root) {
            root.querySelectorAll('img.note-image').forEach(image => {
                image.tabIndex = 0;
                image.setAttribute('role', 'button');
                image.setAttribute('aria-label', `Focus image: ${image.alt || 'image'}`);
            });
        }

        open(sourceImage) {
            this.lastSourceImage = sourceImage;
            this.focusedImage.src = sourceImage.currentSrc || sourceImage.src;
            this.focusedImage.alt = sourceImage.alt || '';
            this.overlay.classList.add('open');
            document.body.classList.add('image-focus-open');
            this.overlay.focus({ preventScroll: true });
        }

        close() {
            if (!this.isOpen()) return;
            this.overlay.classList.remove('open');
            document.body.classList.remove('image-focus-open');
            this.focusedImage.removeAttribute('src');
            if (this.lastSourceImage && this.lastSourceImage.isConnected) {
                this.lastSourceImage.focus({ preventScroll: true });
            }
            this.lastSourceImage = null;
        }

        isOpen() {
            return this.overlay && this.overlay.classList.contains('open');
        }
    }

    class CardParser {
        static splitSections(text) {
            return String(text || '').split(/^\s*---\s*$/m).map(p => p.trim()).filter(Boolean);
        }

        static stripImageEmbeds(text) {
            return text
                .split('\n')
                .filter(line => !/!\[\[[^\]\n]+\]\]/.test(line))
                .filter(line => !/!\[[^\]\n]*\]\([^)\n]+\)/.test(line))
                .join('\n');
        }

        static parseCards(text) {
            text = this.stripImageEmbeds(text);
            const parts = this.splitSections(text);
            const cards = [];
            const sections = parts.length > 1 ? parts : [parts[0]];
            for (let cardIndex = 0; cardIndex < sections.length; cardIndex++) {
                const part = sections[cardIndex];
                const card = this.parseCard(part);
                if (card) {
                    card.cardIndex = cardIndex;
                    cards.push(card);
                }
            }
            return cards;
        }

        static displayTerm(term) {
            return String(term || '').replace(/^#+\s*/, '').trim();
        }

        static parseCard(part) {
            const lines = part.split('\n');
            let term = '';
            let defLines = [];
            let foundTerm = false;
            let foundDef = false;
            let inMathBlock = false;
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();
                if (line === '$$') {
                    if (foundTerm && !foundDef) foundDef = true;
                    if (foundDef) defLines.push(lines[i]);
                    inMathBlock = !inMathBlock;
                    continue;
                }
                if (inMathBlock) {
                    if (foundDef) defLines.push(lines[i]);
                    continue;
                }
                if (!foundTerm && (line && line[0] !== '-' && !line.startsWith('\\'))) {
                    term = line;
                    foundTerm = true;
                    continue;
                }
                if (foundTerm && !foundDef) {
                    if (line.startsWith('-') || line.startsWith('$$')) {
                        foundDef = true;
                    }
                }
                if (foundDef) {
                    defLines.push(lines[i]);
                }
            }
            if (term && defLines.length) {
                return { term, definition: defLines.join('\n') };
            }
            return null;
        }
    }

    function escapeHtml(text) {
        if (!text) return '';
        return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    class SearchCommandParser {
        static COMMANDS = ['folder', 'file', 'term', 'definition'];

        static emptyCommands() {
            return { folder: '', file: '', term: '', definition: '' };
        }

        static parse(rawQuery) {
            const raw = String(rawQuery || '');
            const commands = this.emptyCommands();
            const activeCommands = [];
            const globalParts = [];
            const tokenPattern = /\\(folder|file|term|definition)\b/g;
            const tokens = Array.from(raw.matchAll(tokenPattern));

            if (!tokens.length) {
                const global = raw.trim();
                return {
                    raw,
                    global,
                    commands,
                    activeCommands,
                    hasCommands: false,
                    hasText: !!this.normalizeSearchText(global),
                };
            }

            if (tokens[0].index > 0) {
                globalParts.push(raw.slice(0, tokens[0].index).trim());
            }

            tokens.forEach((token, index) => {
                const name = token[1];
                if (!activeCommands.includes(name)) activeCommands.push(name);
                const start = token.index + token[0].length;
                const end = index + 1 < tokens.length ? tokens[index + 1].index : raw.length;
                const value = raw.slice(start, end).trim();
                if (value) {
                    commands[name] = [commands[name], value].filter(Boolean).join(' ');
                }
            });

            const global = globalParts.filter(Boolean).join(' ');
            const hasCommandText = Object.values(commands).some(value => !!this.normalizeSearchText(value));
            return {
                raw,
                global,
                commands,
                activeCommands,
                hasCommands: true,
                hasText: hasCommandText || !!this.normalizeSearchText(global),
            };
        }

        static normalizeSearchText(text) {
            return SearchEngine.normalizeSearchText(text);
        }

        static words(text) {
            return this.normalizeSearchText(text).split(/\s+/).filter(Boolean);
        }

        static commandPrefixAt(value, caret = null) {
            const raw = String(value || '');
            const cursor = caret === null || caret === undefined ? raw.length : caret;
            const before = raw.slice(0, cursor);
            const match = before.match(/(?:^|\s)(\\[a-zA-Z]*)$/);
            return match ? match[1] : '';
        }

        static hasActiveCommandPrefix(value, caret = null) {
            return !!this.commandPrefixAt(value, caret);
        }
    }

    class SearchCommandController {
        constructor(app) {
            this.app = app;
            this.input = null;
            this.overlay = null;
            this.menu = null;
            this.menuOpen = false;
            this.highlightedIndex = 0;
        }

        init() {
            this.input = document.getElementById('search-input');
            this.overlay = document.getElementById('search-highlight-layer');
            this.menu = document.getElementById('search-command-menu');
            this.renderOverlay();
            this.input.addEventListener('input', () => {
                this.app.searchEngine.selectedIndex = -1;
                this.sync();
                this.openMenuIfCommandPrefix();
                this.app.searchEngine.search();
            });
            this.input.addEventListener('focus', () => {
                this.sync();
                this.app.searchEngine.search();
            });
            this.input.addEventListener('keydown', event => this.handleKeydown(event));
        }

        sync() {
            this.renderOverlay();
        }

        handleKeydown(event) {
            if (this.menuOpen) {
                if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    this.highlightedIndex = Math.min(this.highlightedIndex + 1, SearchCommandParser.COMMANDS.length - 1);
                    this.renderMenu();
                    return;
                }
                if (event.key === 'ArrowUp') {
                    event.preventDefault();
                    this.highlightedIndex = Math.max(this.highlightedIndex - 1, 0);
                    this.renderMenu();
                    return;
                }
                if (event.key === 'Tab' || event.key === 'Enter') {
                    event.preventDefault();
                    this.selectCommand(SearchCommandParser.COMMANDS[this.highlightedIndex]);
                    return;
                }
                if (event.key === 'Escape') {
                    event.preventDefault();
                    this.closeMenu();
                    return;
                }
            }

            if (event.key === 'Backspace' && this.removeCommandNearCaret()) {
                event.preventDefault();
                this.closeMenu();
                this.app.searchEngine.selectedIndex = -1;
                this.app.searchEngine.search();
                return;
            }

            this.app.searchEngine.handleKeydown(event);
        }

        openMenuIfCommandPrefix() {
            const prefix = this.commandPrefixAtCaret();
            if (!prefix) {
                this.closeMenu();
                return;
            }
            const typed = prefix.slice(1).toLowerCase();
            const matchIndex = SearchCommandParser.COMMANDS.findIndex(command => command.startsWith(typed));
            this.highlightedIndex = matchIndex >= 0 ? matchIndex : 0;
            this.openMenu();
        }

        commandPrefixAtCaret() {
            return SearchCommandParser.commandPrefixAt(this.input.value, this.input.selectionStart);
        }

        openMenu() {
            this.menuOpen = true;
            this.renderMenu();
        }

        closeMenu() {
            this.menuOpen = false;
            if (this.menu) this.menu.style.display = 'none';
        }

        renderMenu() {
            if (!this.menu) return;
            this.menu.innerHTML = SearchCommandParser.COMMANDS.map((command, index) => {
                const activeClass = index === this.highlightedIndex ? ' active' : '';
                return `<div class="search-command-item${activeClass}" data-command="${command}">${command}</div>`;
            }).join('');
            Array.from(this.menu.querySelectorAll('.search-command-item')).forEach(item => {
                item.addEventListener('mousedown', event => {
                    event.preventDefault();
                    this.selectCommand(item.dataset.command);
                });
            });
            this.menu.style.display = 'block';
        }

        selectCommand(command) {
            const caret = this.input.selectionStart;
            const value = this.input.value;
            const before = value.slice(0, caret);
            const after = value.slice(caret);
            const prefixMatch = before.match(/(?:^|\s)(\\[a-zA-Z]*)$/);
            const replaceStart = prefixMatch ? caret - prefixMatch[1].length : caret;
            const leadingSpace = replaceStart > 0 && value[replaceStart - 1] !== ' ' ? ' ' : '';
            const commandText = `${leadingSpace}\\${command} `;
            const nextValue = value.slice(0, replaceStart) + commandText + after.replace(/^\s+/, '');
            const nextCaret = replaceStart + commandText.length;

            this.input.value = nextValue;
            this.input.setSelectionRange(nextCaret, nextCaret);
            this.closeMenu();
            this.sync();
            this.app.searchEngine.selectedIndex = -1;
            this.app.searchEngine.search();
        }

        commandRanges(value = this.input.value) {
            const ranges = [];
            const pattern = /\\(folder|file|term|definition)\b/g;
            let match;
            while ((match = pattern.exec(value)) !== null) {
                ranges.push({ start: match.index, end: match.index + match[0].length });
            }
            return ranges;
        }

        removeCommandNearCaret() {
            if (!this.input) return false;
            const value = this.input.value;
            const start = this.input.selectionStart;
            const end = this.input.selectionEnd;
            const ranges = this.commandRanges(value);

            if (start !== end) {
                const selected = ranges.find(range => start === range.start && end === range.end);
                if (!selected) return false;
                this.removeRange(selected.start, selected.end);
                return true;
            }

            const range = ranges.find(item => {
                const afterToken = value.slice(item.end, start);
                return (
                    (start > item.start && start <= item.end) ||
                    start === item.end ||
                    (start > item.end && /^\s*$/.test(afterToken))
                );
            });
            if (!range) return false;
            this.removeRange(range.start, range.end);
            return true;
        }

        removeRange(start, end) {
            const value = this.input.value;
            let removeStart = start;
            let removeEnd = end;
            if (value[removeEnd] === ' ') removeEnd++;
            else if (removeStart > 0 && value[removeStart - 1] === ' ') removeStart--;
            this.input.value = value.slice(0, removeStart) + value.slice(removeEnd);
            this.input.setSelectionRange(removeStart, removeStart);
            this.sync();
        }

        renderOverlay() {
            if (!this.overlay || !this.input) return;
            const value = this.input.value;
            if (!value) {
                this.overlay.innerHTML = '';
                return;
            }
            const html = escapeHtml(value).replace(/\\(folder|file|term|definition)\b/g, (_match, command) => {
                return `<span class="search-command-prefix">\\</span><span class="search-command-token">${command}</span>`;
            });
            this.overlay.innerHTML = html;
        }

        clear() {
            if (this.input) this.input.value = '';
            if (this.overlay) this.overlay.innerHTML = '';
            this.closeMenu();
        }
    }

    // =====================================================================
    // DATA MANAGEMENT
    // =====================================================================

    class StarManager {
        static getKey(folder, file) {
            return `stars:${folder}/${file}`;
        }

        static getIndices(folder, file) {
            try {
                return JSON.parse(localStorage.getItem(this.getKey(folder, file)) || '[]');
            } catch (e) { return []; }
        }

        static setIndices(folder, file, indices) {
            localStorage.setItem(this.getKey(folder, file), JSON.stringify(indices));
        }

        static toggle(folder, file, cardIndex, starEl) {
            let starred = this.getIndices(folder, file);
            if (starred.includes(cardIndex)) {
                starred = starred.filter(i => i !== cardIndex);
                starEl.classList.remove('starred');
                starEl.textContent = '☆';
            } else {
                starred.push(cardIndex);
                starEl.classList.add('starred');
                starEl.textContent = '★';
            }
            this.setIndices(folder, file, starred);
        }
    }

    class SessionManager {
        static saveNavState(view, folder, file, mode, settings) {
            sessionStorage.setItem('navState', JSON.stringify({
                view, folder: folder || '', file: file || '',
                mode: mode || '', settings: settings || null
            }));
        }

        static getNavState() {
            const saved = sessionStorage.getItem('navState');
            if (!saved) return null;
            try { return JSON.parse(saved); }
            catch (e) { return null; }
        }

        static saveLearnProgress(progress) {
            sessionStorage.setItem('learnProgress', JSON.stringify(progress));
        }

        static getLearnProgress() {
            try { return JSON.parse(sessionStorage.getItem('learnProgress') || '{}'); }
            catch (e) { return {}; }
        }

        static clearProgress() {
            sessionStorage.removeItem('learnProgress');
        }
    }

    class SessionSummaryTracker {
        constructor() {
            this.reset({});
        }

        reset(context = {}) {
            this.context = { ...context };
            this.correct = new Map();
            this.retried = new Map();
        }

        keyFor(card) {
            const cardIndex = card && card.cardIndex !== undefined ? card.cardIndex : '';
            const term = card && card.term ? card.term : '';
            return `${this.context.folder || ''}/${this.context.file || ''}/${cardIndex}/${term}`;
        }

        snapshot(card) {
            return {
                folder: this.context.folder || '',
                file: this.context.file || '',
                cardIndex: card && card.cardIndex !== undefined ? card.cardIndex : null,
                term: card && card.term ? card.term : '',
                definition: card && card.definition ? card.definition : '',
            };
        }

        recordCorrect(card) {
            const key = this.keyFor(card);
            if (this.retried.has(key)) return;
            this.correct.set(key, this.snapshot(card));
        }

        recordRetried(card) {
            const key = this.keyFor(card);
            this.correct.delete(key);
            this.retried.set(key, this.snapshot(card));
        }

        overrideCorrect(card) {
            const key = this.keyFor(card);
            this.retried.delete(key);
            this.correct.set(key, this.snapshot(card));
        }

        summary() {
            return {
                context: { ...this.context },
                correct: Array.from(this.correct.values()),
                retried: Array.from(this.retried.values()),
            };
        }

        serialize() {
            return {
                context: { ...this.context },
                correct: Array.from(this.correct.entries()),
                retried: Array.from(this.retried.entries()),
            };
        }

        deserialize(data) {
            if (!data) {
                this.reset({});
                return;
            }
            this.context = { ...(data.context || {}) };
            this.correct = new Map(data.correct || []);
            this.retried = new Map(data.retried || []);
        }
    }

    class NoteLoader {
        static pending = new Map();

        static load(folder, file) {
            const url = RouteManager.contentUrl(folder, file);
            if (!this.pending.has(url)) {
                const request = fetch(url, { cache: 'no-cache' }).then(response => {
                    if (!response.ok) throw new Error(`${url}: ${response.status}`);
                    return response.text();
                }).finally(() => this.pending.delete(url));
                this.pending.set(url, request);
            }
            // Share only active requests. A later read always checks the server.
            return this.pending.get(url);
        }
    }

    class RouteManager {
        static canonicalBasePath() {
            const path = window.location.pathname;
            if (path === '/BrainTwo' || path.startsWith('/BrainTwo/')) return '/BrainTwo/';
            if (path === '/notes' || path.startsWith('/notes/')) return '/BrainTwo/';
            return '/';
        }

        static currentBasePath() {
            const path = window.location.pathname;
            if (path === '/BrainTwo' || path.startsWith('/BrainTwo/')) return '/BrainTwo/';
            if (path === '/notes' || path.startsWith('/notes/')) return '/notes/';
            return this.canonicalBasePath();
        }

        static basePath() {
            return this.canonicalBasePath();
        }

        static assetUrl(path) {
            if (window.location.protocol === 'file:') return path.replace(/^\/+/, '');
            return `${this.basePath()}${path.replace(/^\/+/, '')}`;
        }

        static contentUrl(folder, file) {
            if (window.location.protocol === 'file:') {
                return `${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;
            }
            return `${this.basePath()}${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;
        }

        static displayName(name) {
            return decodeURIComponent(name)
                .replace(/\.md$/i, '')
                .replace(/^\d+\s*/, '')
                .trim();
        }

        static slugify(name) {
            return this.displayName(name)
                .toLowerCase()
                .normalize('NFKD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/&/g, ' and ')
                .replace(/['’]/g, '')
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '');
        }

        static pathFor(view, folder = '', file = '') {
            const base = this.basePath();
            if (view === 'folder' && folder) return `${base}${this.slugify(folder)}`;
            if (view === 'file' && folder && file) return `${base}${this.slugify(folder)}/${this.slugify(file)}`;
            return base;
        }

        static update(view, folder = '', file = '', options = {}) {
            if (options.updateUrl === false) return;
            if (window.location.protocol === 'file:') return;
            const path = this.pathFor(view, folder, file);
            if (window.location.pathname === path && !window.location.search) return;
            const method = options.replaceUrl ? 'replaceState' : 'pushState';
            history[method]({ view, folder: folder || '', file: file || '' }, '', path);
        }

        static currentPath() {
            const base = this.currentBasePath();
            let path = window.location.pathname;
            if (path === base.slice(0, -1)) path = base;
            if (path.startsWith(base)) path = path.slice(base.length);
            else path = path.replace(/^\/+/, '');
            return path
                .replace(/^index\.html\/?/, '')
                .replace(/^\/+|\/+$/g, '');
        }

        static getCurrentRoute(manifestData) {
            const path = this.currentPath();
            const replaceUrl = this.currentBasePath() !== this.basePath();
            if (!path) return { view: 'home', replaceUrl };
            const [folderSlug, fileSlug, ...extraSlugs] = path.split('/').map(part => decodeURIComponent(part));
            const folder = Object.keys(manifestData).find(name => this.slugify(name) === folderSlug);
            if (!folder) return { view: 'home', replaceUrl: true };
            if (!fileSlug) return { view: 'folder', folder, replaceUrl };
            const file = (manifestData[folder] || []).find(name => this.slugify(name) === fileSlug);
            if (!file) return { view: 'folder', folder, replaceUrl: true };
            return { view: 'file', folder, file, replaceUrl: replaceUrl || extraSlugs.length > 0 };
        }
    }

    class RetryQueue {
        constructor(k = 1) {
            this.k = k;
            this.reset();
        }

        reset() {
            this.queue = [];
            this.countdown = 0;
            this.isRetry = false;
            this.correctStreaks = {};
        }

        getCurrentIdx(normalIdx) {
            return this.isRetry ? this.queue[0].idx : normalIdx;
        }

        handleCorrect(idx) {
            if (this.isRetry) {
                this.correctStreaks[idx] = (this.correctStreaks[idx] || 0) + 1;
                if (this.correctStreaks[idx] >= 2) {
                    this.queue.shift();
                    delete this.correctStreaks[idx];
                } else {
                    this.queue.push(this.queue.shift());
                }
            }
        }

        handleWrong(idx) {
            this.correctStreaks[idx] = 0;
            if (this.isRetry) {
                this.queue.push(this.queue.shift());
            } else {
                this.queue.push({ idx });
                if (this.countdown <= 0) this.countdown = this.k + 1;
            }
        }

        advance() {
            if (this.isRetry) {
                this.isRetry = false;
                this.countdown = this.k + 1;
            }
            if (this.countdown > 0) this.countdown--;
        }

        shouldRetry() {
            return this.countdown <= 0 && this.queue.length > 0;
        }

        hasRetries() {
            return this.queue.length > 0;
        }

        override(idx, normalIdx) {
            if (this.isRetry) {
                this.queue.shift();
            } else {
                this.queue = this.queue.filter(item => item.idx !== idx);
            }
            delete this.correctStreaks[idx];
        }

        serialize() {
            return {
                retryQueue: this.queue,
                retryCountdown: this.countdown,
                retryStreaks: this.correctStreaks,
                isRetry: this.isRetry
            };
        }

        deserialize(data) {
            if (data.retryQueue) this.queue = data.retryQueue;
            if (data.retryCountdown !== undefined) this.countdown = data.retryCountdown;
            if (data.retryStreaks) this.correctStreaks = data.retryStreaks;
            if (data.isRetry !== undefined) this.isRetry = data.isRetry;
        }
    }

    // =====================================================================
    // UI MANAGEMENT
    // =====================================================================

    class ViewManager {
        static VIEWS = ['home', 'folder-view', 'file-view', 'flashcard-view', 'choice-view', 'write-view', 'test-view'];
        static FLEX_VIEWS = new Set(['flashcard-view', 'choice-view', 'write-view', 'test-view']);

        static show(viewName) {
            for (const id of this.VIEWS) {
                document.getElementById(id).style.display = 'none';
            }
            const display = this.FLEX_VIEWS.has(viewName) ? 'flex' : 'block';
            document.getElementById(viewName).style.display = display;
        }

        static scrollToTop() {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }
    }

	class SearchEngine {
	    constructor(app) {
	        this.app = app;
	        this.index = [];
            this.indexBuilt = false;
            this.indexPromise = null;
            this.selectedIndex = -1;

            // Close search results when clicking outside
            document.addEventListener('click', (e) => {
                const container = document.querySelector('.search-container');
                if (container && !container.contains(e.target)) {
                    this.clear();
                }
	            });
	        }

        static normalizedText = new Map();

        static normalizeSearchText(text) {
            const key = String(text || '');
            if (this.normalizedText.has(key)) return this.normalizedText.get(key);
            const normalized = this._normalizeSearchText(key);
            if (this.normalizedText.size >= 10000) this.normalizedText.clear();
            this.normalizedText.set(key, normalized);
            return normalized;
        }

        static _normalizeSearchText(text) {
            let decodedText = String(text || '');
            try {
                decodedText = decodeURIComponent(decodedText);
            } catch (_error) {}
            return decodedText
                .normalize('NFKD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/\.md\b/gi, ' ')
                .replace(/!\[\[([^\]\n|]+)(?:\|[^\]\n]+)?\]\]/g, ' $1 ')
                .replace(/!\[([^\]\n]*)\]\(([^)\n]+)\)/g, ' $1 $2 ')
                .replace(/\\([a-zA-Z]+)/g, ' $1 ')
                .replace(/\\./g, ' ')
                .replace(/\\/g, ' ')
                .replace(/&[a-z]+;/gi, ' ')
                .replace(/[#*_`~$^{}\[\](),;:|=+\-<>\/]/g, ' ')
                .replace(/\s+/g, ' ')
                .toLowerCase()
                .trim();
        }

        static searchWords(query) {
            return this.normalizeSearchText(query).split(/\s+/).filter(Boolean);
        }

        static normalizeTitleText(text) {
            return this.normalizeSearchText(text).replace(/^\d+\s*/, '').trim();
        }

        static wordMatchesText(word, text) {
            const normalized = this.normalizeSearchText(text);
            if (normalized.includes(word)) return true;
            const textWords = normalized.split(/\s+/);
            return textWords.some(textWord => {
                let qi = 0;
                for (let ti = 0; ti < textWord.length && qi < word.length; ti++) {
                    if (word[qi] === textWord[ti]) qi++;
                }
                return qi === word.length;
            });
        }

        static allWordsMatch(text, words) {
            return words.every(word => this.wordMatchesText(word, text));
        }

        static scoreSearchField(text, words, weight) {
            const normalized = this.normalizeSearchText(text);
            if (!normalized) return 0;
            const textWords = normalized.split(/\s+/).filter(Boolean);
            const phrase = words.join(' ');
            let score = words.length > 1 && normalized.includes(phrase) ? weight * 4 : 0;

            for (const word of words) {
                if (normalized === word) score += weight * 8;
                else if (textWords.includes(word)) score += weight * 5;
                else if (textWords.some(textWord => textWord.startsWith(word))) score += weight * 4;
                else if (normalized.includes(word)) score += weight * 3;
                else if (this.wordMatchesText(word, normalized)) score += weight;
            }
            return score;
        }

        static scoreSearchResult(result, words) {
            return result.searchFields.reduce((score, field) => {
                return score + this.scoreSearchField(field.text, words, field.weight);
            }, 0);
        }

        static rankSearchResults(results) {
            return results
                .map((result, index) => ({ ...result, _rankIndex: index }))
                .sort((a, b) => {
                    const priorityDiff = (a.priority || 0) - (b.priority || 0);
                    if (priorityDiff !== 0) return priorityDiff;
                    const scoreDiff = (b.score || 0) - (a.score || 0);
                    if (scoreDiff !== 0) return scoreDiff;
                    if (a.type !== b.type) return a.type === 'file' ? -1 : 1;
                    return a._rankIndex - b._rankIndex;
                })
                .map(({ _rankIndex, ...result }) => result);
        }

        static async waitForImages(root) {
            const images = Array.from(root?.querySelectorAll('img') || []).filter(img => !img.complete);
            if (!images.length) return;
            await Promise.all(images.map(img => new Promise(resolve => {
                img.addEventListener('load', resolve, { once: true });
                img.addEventListener('error', resolve, { once: true });
            })));
        }

        updateNote(folder, file, text) {
            this.index = this.index.filter(item => item.folder !== folder || item.file !== file);
            CardParser.splitSections(text).forEach((part, cardIndex) => {
                const card = CardParser.parseCard(part);
                if (card) this.index.push({term: card.term, definition: card.definition, folder, file, cardIndex});
            });
        }

        async buildIndex() {
            if (this.indexBuilt) return;
            if (this.indexPromise) return this.indexPromise;
            this.indexPromise = (async () => {
                await Promise.all(Object.entries(this.app.manifestData).flatMap(([folder, files]) =>
                    files.map(async file => {
                        try {
                            const text = await NoteLoader.load(folder, file);
                            this.updateNote(folder, file, text);
                        } catch (error) {
                            console.warn('Could not index note:', folder, file, error);
                        }
                    })
                ));
                this.indexBuilt = true;
            })();
            try {
                await this.indexPromise;
            } finally {
                this.indexPromise = null;
            }
        }

        handleKeydown(e) {
            const resultsDiv = document.getElementById('search-results');
            const items = resultsDiv.querySelectorAll('.search-result-item');
            if (!items.length || resultsDiv.style.display === 'none') return;
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.selectedIndex = Math.min(this.selectedIndex + 1, items.length - 1);
                this._updateHighlight(items);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
                this._updateHighlight(items);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (this.selectedIndex >= 0 && items[this.selectedIndex]) {
                    items[this.selectedIndex].click();
                }
            } else if (e.key === 'Tab') {
                if (this.selectedIndex >= 0 && items[this.selectedIndex]) {
                    e.preventDefault();
                    this.autocompleteSelectedResult(items[this.selectedIndex]);
                }
            }
        }

        _updateHighlight(items) {
            items.forEach((el, i) => {
                el.classList.toggle('active', i === this.selectedIndex);
            });
            if (items[this.selectedIndex]) {
                items[this.selectedIndex].scrollIntoView({ block: 'nearest' });
            }
        }

        static displayFolder(folder) {
            return String(folder || '').replace(/^\d+\s*/, '');
        }

        static displayFile(file) {
            return decodeURIComponent(file || '').replace(/^\d+\s*/, '').replace(/\.md$/i, '');
        }

        static autocompleteQueryValue(query, autocompleteText, caret = null) {
            const value = String(query || '');
            const text = String(autocompleteText || '').trim();
            if (!text) return value;
            const cursor = caret === null || caret === undefined ? value.length : caret;
            const commandPattern = /\\(folder|file|term|definition)\b/g;
            let activeCommand = null;
            let nextCommandStart = value.length;
            let match;

            while ((match = commandPattern.exec(value)) !== null) {
                if (match.index <= cursor) {
                    activeCommand = {
                        start: match.index,
                        end: match.index + match[0].length,
                    };
                    nextCommandStart = value.length;
                } else {
                    nextCommandStart = match.index;
                    break;
                }
            }

            if (!activeCommand) return `${text} `;

            const before = value.slice(0, activeCommand.end).replace(/\s*$/, '');
            const after = value.slice(nextCommandStart).replace(/^\s+/, '');
            return `${before} ${text} ${after}`.replace(/\s+$/, ' ');
        }

        static wordsMatchField(text, value) {
            const words = SearchEngine.searchWords(value);
            return !words.length || SearchEngine.allWordsMatch(text, words);
        }

        static scopedWords(parsed) {
            const commandWords = {};
            for (const command of SearchCommandParser.COMMANDS) {
                commandWords[command] = SearchEngine.searchWords(parsed.commands[command]);
            }
            return {
                global: SearchEngine.searchWords(parsed.global),
                commands: commandWords,
            };
        }

        static matchesScopedFilter(fields, scoped) {
            const commands = scoped.commands;
            if (commands.folder.length && !SearchEngine.allWordsMatch(fields.folder, commands.folder)) return false;
            if (commands.file.length && !SearchEngine.allWordsMatch(fields.file, commands.file)) return false;
            if (commands.term.length && !SearchEngine.allWordsMatch(fields.term, commands.term)) return false;
            if (commands.definition.length && !SearchEngine.allWordsMatch(fields.definition, commands.definition)) return false;
            if (scoped.global.length) {
                const combined = [fields.folder, fields.file, fields.term, fields.definition].join(' ');
                if (!SearchEngine.allWordsMatch(combined, scoped.global)) return false;
            }
            return true;
        }

        static allScopedWords(scoped) {
            return [
                ...scoped.global,
                ...scoped.commands.folder,
                ...scoped.commands.file,
                ...scoped.commands.term,
                ...scoped.commands.definition,
            ];
        }

        search() {
            const rawQuery = document.getElementById('search-input').value;
            const query = rawQuery.trim();
            const resultsDiv = document.getElementById('search-results');
            if (SearchCommandParser.hasActiveCommandPrefix(rawQuery)) {
                resultsDiv.innerHTML = '';
                resultsDiv.style.display = 'none';
                return;
            }
            const parsed = SearchCommandParser.parse(query);
            if (!parsed.hasText) {
                resultsDiv.style.display = 'none';
                return;
            }
            if (!this.indexBuilt) {
                this.buildIndex().then(() => {
                    const latestQuery = document.getElementById('search-input').value.trim();
                    if (latestQuery === query) {
                        this.selectedIndex = -1;
                        this.search();
                    }
                });
            }

            const words = parsed.hasCommands
                ? SearchEngine.allScopedWords(SearchEngine.scopedWords(parsed))
                : SearchEngine.searchWords(query);
            const normalizedQuery = SearchEngine.normalizeSearchText(query);

            const folderResults = [];
            if (parsed.hasCommands && parsed.activeCommands.includes('folder') && !parsed.activeCommands.includes('file') && !parsed.activeCommands.includes('term') && !parsed.activeCommands.includes('definition')) {
                const scoped = SearchEngine.scopedWords(parsed);
                for (const folder of Object.keys(this.app.manifestData)) {
                    const folderName = SearchEngine.displayFolder(folder);
                    const fields = {
                        folder: folderName,
                        file: '',
                        term: '',
                        definition: '',
                    };
                    if (!SearchEngine.matchesScopedFilter(fields, scoped)) continue;
                    const result = {
                        type: 'folder',
                        folder,
                        priority: SearchEngine.normalizeTitleText(folder) === SearchEngine.normalizeSearchText(parsed.commands.folder) ? 1 : 3,
                        searchFields: [{ text: folderName, weight: 220 }],
                    };
                    result.score = SearchEngine.scoreSearchResult(result, words);
                    folderResults.push(result);
                }
            }

            const fileResults = [];
            const seenFiles = new Set();
            for (const folder of Object.keys(this.app.manifestData)) {
                for (const file of this.app.manifestData[folder]) {
                    const key = folder + '/' + file;
                    if (seenFiles.has(key)) continue;
                    const fileClean = SearchEngine.displayFile(file);
                    const folderClean = SearchEngine.displayFolder(folder);
                    const includeFile = parsed.hasCommands
                        ? this._matchesCommandFileResult(parsed, folderClean, fileClean)
                        : SearchEngine.allWordsMatch(folderClean + ' ' + fileClean, words);
                    if (includeFile) {
                        seenFiles.add(key);
	                        const result = {
	                            type: 'file',
	                            folder,
	                            file,
                                priority: fileClean === normalizedQuery ? 1 : 3,
	                            searchFields: [
	                                { text: fileClean, weight: 220 },
	                                { text: folderClean, weight: 80 },
                            ],
                        };
                        result.score = SearchEngine.scoreSearchResult(result, words);
                        fileResults.push(result);
                    }
                }
            }
            // Term-level results
            const termResults = this.index.map(item => {
                const fileClean = SearchEngine.displayFile(item.file);
                const folderClean = SearchEngine.displayFolder(item.folder);
                const result = {
                    ...item,
                    type: 'term',
	                    searchFields: [
	                        { text: item.term, weight: 100 },
	                        { text: item.definition, weight: 35 },
	                        { text: fileClean, weight: 65 },
	                        { text: folderClean, weight: 45 },
	                    ],
                        priority: SearchEngine.normalizeSearchText(item.term) === normalizedQuery ? 0 : 2,
	                };
                const combined = result.searchFields.map(field => field.text).join(' ');
                const includeTerm = parsed.hasCommands
                    ? this._matchesCommandTermResult(parsed, item, folderClean, fileClean)
                    : SearchEngine.allWordsMatch(combined, words);
                if (!includeTerm) return null;
                result.score = SearchEngine.scoreSearchResult(result, words);
                return result;
            }).filter(Boolean);

            let candidates;
            if (parsed.hasCommands) {
                if (parsed.activeCommands.includes('term') || parsed.activeCommands.includes('definition')) {
                    candidates = termResults;
                } else if (parsed.activeCommands.includes('file')) {
                    candidates = fileResults;
                } else {
                    candidates = folderResults;
                }
            } else {
                candidates = [...fileResults, ...termResults];
            }

            const all = SearchEngine.rankSearchResults(candidates).slice(0, 20);
            if (all.length === 0) {
                resultsDiv.innerHTML = '<div style="padding: 10px 14px; color: #888;">No results</div>';
                resultsDiv.style.display = 'block';
                return;
            }
            resultsDiv.innerHTML = '';
            all.forEach(item => {
                const div = document.createElement('div');
                div.className = 'search-result-item';
                const folderName = SearchEngine.displayFolder(item.folder);
                const fileName = SearchEngine.displayFile(item.file);
                if (item.type === 'folder') {
                    div.dataset.autocomplete = folderName;
                    div.innerHTML = `<div class="search-result-term">${escapeHtml(folderName)}</div><div class="search-result-meta">Folder</div>`;
                    div.onclick = () => { this.clear(); this.app.showFolder(item.folder); };
                } else if (item.type === 'file') {
                    div.dataset.autocomplete = fileName;
                    div.innerHTML = `<div class="search-result-term">${escapeHtml(fileName)}</div><div class="search-result-meta">${escapeHtml(folderName)}</div>`;
                    div.onclick = () => { this.clear(); this.app.showFile(item.folder, item.file); };
                } else {
                    div.dataset.autocomplete = CardParser.displayTerm(item.term);
                    div.innerHTML = `<div class="search-result-term">${escapeHtml(CardParser.displayTerm(item.term))}</div><div class="search-result-meta">${escapeHtml(folderName)} › ${escapeHtml(fileName)}</div>`;
                    div.onclick = () => this.navigateToCard(item.folder, item.file, item.cardIndex, item.term);
                }
                resultsDiv.appendChild(div);
            });
            resultsDiv.style.display = 'block';
        }

        autocompleteSelectedResult(item) {
            const input = document.getElementById('search-input');
            const autocompleteText = item.dataset.autocomplete || item.querySelector('.search-result-term')?.textContent || '';
            input.value = SearchEngine.autocompleteQueryValue(input.value, autocompleteText, input.selectionStart);
            input.setSelectionRange(input.value.length, input.value.length);
            if (this.app.searchCommandController) this.app.searchCommandController.sync();
            this.selectedIndex = -1;
            this.search();
        }

        _matchesCommandFileResult(parsed, folderClean, fileClean) {
            if (parsed.activeCommands.includes('term') || parsed.activeCommands.includes('definition')) return false;
            const scoped = SearchEngine.scopedWords(parsed);
            return SearchEngine.matchesScopedFilter({
                folder: folderClean,
                file: fileClean,
                term: '',
                definition: '',
            }, scoped);
        }

        _matchesCommandTermResult(parsed, item, folderClean, fileClean) {
            const scoped = SearchEngine.scopedWords(parsed);
            return SearchEngine.matchesScopedFilter({
                folder: folderClean,
                file: fileClean,
                term: item.term,
                definition: item.definition,
            }, scoped);
        }

        async navigateToCard(folder, file, cardIndex, term = '') {
            this.clear();
            await this.app.showFile(folder, file, { scrollToTop: false });
            await SearchEngine.waitForImages(document.getElementById('file-content'));
            const cards = Array.from(document.querySelectorAll('#file-content .card-wrapper'));
            const expectedTerm = SearchEngine.normalizeSearchText(CardParser.displayTerm(term));
            let target = cards[cardIndex] || null;
            if (expectedTerm && SearchEngine.normalizeSearchText(target?.dataset.cardTerm || '') !== expectedTerm) {
                target = cards.find(card => SearchEngine.normalizeSearchText(card.dataset.cardTerm || '') === expectedTerm) || target;
            }
            if (target) {
                cards.forEach(card => card.classList.remove('search-highlight'));
                target.classList.add('search-highlight');
                target.scrollIntoView({ behavior: 'auto', block: 'center' });
                setTimeout(() => { target.classList.remove('search-highlight'); }, 1500);
            }
        }

        clear() {
            if (this.app.searchCommandController) {
                this.app.searchCommandController.clear();
            } else {
                document.getElementById('search-input').value = '';
            }
            document.getElementById('search-results').style.display = 'none';
        }
    }

    // =====================================================================
    // MODE CONTROLLERS
    // =====================================================================

    class FlashcardMode {
        constructor(app) {
            this.app = app;
            this.currentIndex = 0;
            this.showingTerm = true;
            this.shuffleOrder = [];
        }

        async start(shuffle, starOnly) {
            try {
                const text = await NoteLoader.load(this.app.currentFolder, this.app.currentFile);
                this.app.flashcards = CardParser.parseCards(text);
                if (starOnly) {
                    const starredIdx = StarManager.getIndices(this.app.currentFolder, this.app.currentFile);
                    this.app.flashcards = this.app.flashcards.filter((c, i) => starredIdx.includes(i));
                }
                if (shuffle) {
                    const combined = this.app.flashcards.map((c, i) => ({ card: c, origIdx: i }));
                    combined.sort(() => Math.random() - 0.5);
                    this.app.flashcards = combined.map(x => x.card);
                    this.shuffleOrder = combined.map(x => x.origIdx);
                } else {
                    this.shuffleOrder = this.app.flashcards.map((c, i) => i);
                }
                this.currentIndex = 0;
                this.showingTerm = true;
                this._showView();
                this.update();
            } catch (error) {
                console.error('error starting flashcards:', error);
            }
        }

        _showView() {
            ViewManager.show('flashcard-view');
            document.getElementById('flashcard-title').textContent =
                decodeURIComponent(this.app.currentFile).replace(/^[0-9]+\s*/, '').replace('.md', '');
        }

        update() {
            this.app.saveLearnProgress();
            const card = this.app.flashcards[this.currentIndex];
            let showFront, showBack;
            if (this.app.answerType === 'term') {
                showFront = card.definition;
                showBack = card.term;
            } else {
                showFront = card.term;
                showBack = card.definition;
            }
            const content = this.showingTerm ? showFront : showBack;
            const flashcardDiv = document.getElementById('flashcard');
            const html = MathRenderer.renderToHtml(content, true, true);

            flashcardDiv.innerHTML = '';
            const contentWrapper = document.createElement('div');
            contentWrapper.className = 'flashcard-content';
            contentWrapper.innerHTML = html;
            flashcardDiv.appendChild(contentWrapper);

            MathRenderer.typesetClear();
            MathRenderer.typeset(flashcardDiv);

            const progress = ((this.currentIndex + 1) / this.app.flashcards.length) * 100;
            document.getElementById('progress-fill').style.width = progress + '%';
            document.getElementById('progress-fill').textContent = '';
            document.getElementById('flashcard-ratio').textContent = `${this.currentIndex + 1} / ${this.app.flashcards.length}`;
        }

        flip() {
            this.showingTerm = !this.showingTerm;
            this.update();
        }

        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.showingTerm = true;
                this.update();
            }
        }

        next() {
            if (this.currentIndex < this.app.flashcards.length - 1) {
                this.currentIndex++;
                this.showingTerm = true;
                this.update();
            } else {
                ViewManager.show('file-view');
                this.app.showLearnModal(true);
            }
        }
    }

    class ChoiceMode {
        constructor(app) {
            this.app = app;
            this.order = [];
            this.currentIndex = 0;
            this.answered = false;
            this.gotWrong = false;
            this.retry = new RetryQueue(1);
        }

        start(shuffle) {
            this.order = [...Array(this.app.flashcards.length).keys()];
            if (shuffle) this.order.sort(() => Math.random() - 0.5);
            this.currentIndex = 0;
            this.gotWrong = false;
            this.retry.reset();
            ViewManager.show('choice-view');
            this.update();
        }

        update() {
            this.app.saveLearnProgress();
            const idx = this.retry.getCurrentIdx(this.order[this.currentIndex]);
            const card = this.app.flashcards[idx];
            this.gotWrong = false;

            const choiceSource = this.app.allFlashcards.length > 0 ? this.app.allFlashcards : this.app.flashcards;
            let question, correct, pool;
            if (this.app.answerType === 'definition') {
                question = card.term;
                correct = card.definition;
                pool = choiceSource.map(c => c.definition).filter(opt => opt !== correct);
            } else {
                question = card.definition;
                correct = card.term;
                pool = choiceSource.map(c => c.term).filter(opt => opt !== correct);
            }
            pool = pool.sort(() => Math.random() - 0.5).slice(0, 3);
            const options = [...pool, correct].sort(() => Math.random() - 0.5);

            const qHtml = MathRenderer.renderToHtml(question);

            document.getElementById('choice-title').textContent = document.getElementById('file-title').textContent;
            if (this.retry.isRetry) {
                document.getElementById('choice-ratio').textContent = 'Retry';
                document.getElementById('choice-ratio').style.cssText = 'color: #fff; background: none; border: none; outline: none; padding: 0;';
            } else {
                document.getElementById('choice-ratio').textContent = `${this.currentIndex + 1} / ${this.app.flashcards.length}`;
                document.getElementById('choice-ratio').style.cssText = '';
            }
            const progress = this.retry.isRetry
                ? (this.currentIndex / this.app.flashcards.length) * 100
                : ((this.currentIndex + 1) / this.app.flashcards.length) * 100;
            document.getElementById('choice-progress-fill').style.width = progress + '%';
            document.getElementById('choice-progress-fill').textContent = '';
            document.getElementById('choice-question').innerHTML = qHtml;

            const optsDiv = document.getElementById('choice-options');
            optsDiv.innerHTML = '';
            options.forEach(opt => {
                const oHtml = MathRenderer.renderToHtml(opt);
                const btn = document.createElement('div');
                btn.className = 'choice-option';
                btn.innerHTML = oHtml;
                btn.setAttribute('data-choice-value', opt.trim());
                btn.onclick = () => this.handleAnswer(btn, correct);
                optsDiv.appendChild(btn);
            });
            this.answered = false;
            MathRenderer.typeset(document.getElementById('choice-question'));
            MathRenderer.typeset(optsDiv);
        }

        handleAnswer(btn, correct) {
            if (btn.classList.contains('correct')) return;
            const opts = document.querySelectorAll('.choice-option');
            const isCorrect = btn.getAttribute('data-choice-value') === correct.trim();
            const idx = this.retry.getCurrentIdx(this.order[this.currentIndex]);
            const card = this.app.flashcards[idx];

            if (isCorrect) {
                opts.forEach(optBtn => {
                    if (optBtn.getAttribute('data-choice-value') === correct.trim()) {
                        optBtn.classList.add('correct');
                    }
                    optBtn.style.pointerEvents = 'none';
                });
                if (this.gotWrong) {
                    this.retry.handleWrong(idx);
                    this.app.summaryTracker.recordRetried(card);
                } else if (this.retry.isRetry) {
                    this.retry.handleCorrect(idx);
                } else {
                    this.app.summaryTracker.recordCorrect(card);
                }
                this.app.saveLearnProgress();
                const self = this;
                function proceedNext(e) {
                    document.removeEventListener('keydown', proceedNext);
                    document.removeEventListener('mousedown', proceedNext);
                    self.next();
                }
                setTimeout(() => {
                    document.addEventListener('keydown', proceedNext);
                    document.addEventListener('mousedown', proceedNext);
                }, 100);
                this.answered = true;
            } else {
                btn.classList.add('incorrect');
                btn.style.pointerEvents = 'none';
                this.gotWrong = true;
                this.app.summaryTracker.recordRetried(card);
                this.app.saveLearnProgress();
            }
        }

        next() {
            const wasRetry = this.retry.isRetry;
            this.retry.advance();
            if (!wasRetry) {
                this.currentIndex++;
            }
            let hasMoreNormal = this.currentIndex < this.order.length;
            if (this.retry.shouldRetry()) {
                this.retry.isRetry = true;
                this.update();
                return;
            }
            if (hasMoreNormal) {
                this.update();
            } else if (this.retry.hasRetries()) {
                this.retry.isRetry = true;
                this.update();
            } else {
                this.app.showSessionSummary();
            }
        }
    }

    class WriteMode {
        constructor(app) {
            this.app = app;
            this.order = [];
            this.currentIndex = 0;
            this.answered = false;
            this.retry = new RetryQueue(1);
            this._submittedWithEnter = false;
        }

        _getInput() {
            return this.app.answerType === 'definition'
                ? document.getElementById('write-input-multi')
                : document.getElementById('write-input-single');
        }

        _setActionButtons(state) {
            const overrideBtn = document.getElementById('write-override-btn');
            const skipBtn = document.getElementById('write-skip-btn');
            const submitBtn = document.getElementById('write-submit-btn');

            if (state === 'incorrect') {
                overrideBtn.style.display = 'inline-block';
                overrideBtn.disabled = false;
                skipBtn.style.display = 'none';
                submitBtn.style.display = 'none';
                skipBtn.disabled = true;
                submitBtn.disabled = true;
                return;
            }

            overrideBtn.style.display = 'none';
            skipBtn.style.display = 'inline-block';
            submitBtn.style.display = 'inline-block';
            skipBtn.disabled = false;
            submitBtn.disabled = false;
        }

        start(shuffle) {
            this.order = [...Array(this.app.flashcards.length).keys()];
            if (shuffle) this.order.sort(() => Math.random() - 0.5);
            this.currentIndex = 0;
            this.retry.reset();
            if (this.app.answerType === 'definition') {
                document.getElementById('write-input-single').style.display = 'none';
                document.getElementById('write-input-multi').style.display = '';
            } else {
                document.getElementById('write-input-single').style.display = '';
                document.getElementById('write-input-multi').style.display = 'none';
            }
            ViewManager.show('write-view');
            this.update();
        }

        update() {
            this.app.saveLearnProgress();
            const feedbackBox = document.getElementById('write-feedback');
            feedbackBox.innerHTML = '';
            const idx = this.retry.getCurrentIdx(this.order[this.currentIndex]);
            const card = this.app.flashcards[idx];

            let question;
            if (this.app.answerType === 'definition') {
                question = card.term;
            } else {
                question = card.definition;
            }

            const qHtml = MathRenderer.renderToHtml(question);

            document.getElementById('write-title').textContent = document.getElementById('file-title').textContent;
            if (this.retry.isRetry) {
                document.getElementById('write-ratio').textContent = 'Retry';
                document.getElementById('write-ratio').style.cssText = 'color: #fff; background: none; border: none; outline: none; padding: 0;';
            } else {
                document.getElementById('write-ratio').textContent = `${this.currentIndex + 1} / ${this.app.flashcards.length}`;
                document.getElementById('write-ratio').style.cssText = '';
            }
            const progress = this.retry.isRetry
                ? (this.currentIndex / this.app.flashcards.length) * 100
                : ((this.currentIndex + 1) / this.app.flashcards.length) * 100;
            document.getElementById('write-progress-fill').style.width = progress + '%';
            document.getElementById('write-progress-fill').textContent = '';
            document.getElementById('write-question').innerHTML = qHtml;

            const input = this._getInput();
            input.value = '';
            input.disabled = false;
            input.style.borderColor = '#555';
            this._setActionButtons('question');
            this.answered = false;
            input.focus();
            MathRenderer.typeset(document.getElementById('write-question'));
        }

        submit() {
            const feedbackBox = document.getElementById('write-feedback');
            feedbackBox.innerHTML = '';
            if (this.answered) return;

            const idx = this.retry.getCurrentIdx(this.order[this.currentIndex]);
            const card = this.app.flashcards[idx];
            const correct = this.app.answerType === 'definition' ? card.definition : card.term;
            const userInput = this._getInput().value.trim();

            const isCorrect = TestAnswerGrader.normalizeAnswer(userInput) === TestAnswerGrader.normalizeAnswer(correct);

            this._getInput().disabled = true;
            document.getElementById('write-skip-btn').disabled = true;
            document.getElementById('write-submit-btn').disabled = true;

            if (isCorrect) {
                this._getInput().style.borderColor = '#4caf50';
                feedbackBox.innerHTML = '';
                this.answered = true;
                if (this.retry.isRetry) {
                    this.retry.handleCorrect(idx);
                } else {
                    this.app.summaryTracker.recordCorrect(card);
                }
                this.app.saveLearnProgress();
                let submittedWithEnter = !!this._submittedWithEnter;
                this._submittedWithEnter = false;
                const self = this;
                function proceedNext(e) {
                    if (document.getElementById('write-view').style.display !== 'flex') {
                        document.removeEventListener('keyup', proceedNext);
                        document.removeEventListener('click', proceedNext);
                        return;
                    }
                    if (submittedWithEnter && e.type === 'keyup' && (e.key === 'Enter' || e.code === 'Enter')) {
                        submittedWithEnter = false;
                        return;
                    }
                    document.removeEventListener('keyup', proceedNext);
                    document.removeEventListener('click', proceedNext);
                    self.next();
                }
                setTimeout(() => {
                    document.addEventListener('keyup', proceedNext);
                    document.addEventListener('click', proceedNext);
                }, 0);
            } else {
                this._getInput().style.borderColor = '#f44336';
                this.retry.handleWrong(idx);
                this.app.summaryTracker.recordRetried(card);
                this.app.saveLearnProgress();
                this._showCorrectAnswer(feedbackBox, correct);
                this._setActionButtons('incorrect');
                this.answered = true;
                const self = this;
                function proceedNext(e) {
                    if (document.getElementById('write-view').style.display !== 'flex') {
                        document.removeEventListener('keyup', proceedNext);
                        document.removeEventListener('click', proceedNext);
                        return;
                    }
                    document.removeEventListener('keyup', proceedNext);
                    document.removeEventListener('click', proceedNext);
                    self.next();
                }
                setTimeout(() => {
                    document.addEventListener('keyup', proceedNext);
                    document.addEventListener('click', proceedNext);
                }, 100);
                MathRenderer.typeset(feedbackBox);
            }
        }

        skip() {
            const feedbackBox = document.getElementById('write-feedback');
            feedbackBox.innerHTML = '';
            if (this.answered) return;

            const idx = this.retry.getCurrentIdx(this.order[this.currentIndex]);
            const card = this.app.flashcards[idx];
            const correct = this.app.answerType === 'definition' ? card.definition : card.term;

            this._getInput().disabled = true;
            document.getElementById('write-skip-btn').disabled = true;
            document.getElementById('write-submit-btn').disabled = true;
            this._getInput().style.borderColor = '#555';
            this.retry.handleWrong(idx);
            this.app.summaryTracker.recordRetried(card);
            this.app.saveLearnProgress();
            this._showCorrectAnswer(feedbackBox, correct);
            this.answered = true;

            const self = this;
            function proceedNext(e) {
                if (document.getElementById('write-view').style.display !== 'flex') {
                    document.removeEventListener('keyup', proceedNext);
                    document.removeEventListener('click', proceedNext);
                    return;
                }
                document.removeEventListener('keyup', proceedNext);
                document.removeEventListener('click', proceedNext);
                self.next();
            }
            setTimeout(() => {
                document.addEventListener('keyup', proceedNext);
                document.addEventListener('click', proceedNext);
            }, 100);
            MathRenderer.typeset(feedbackBox);
        }

        _showCorrectAnswer(feedbackBox, correct) {
            const correctHtml = MathRenderer.renderToHtml(correct);
            feedbackBox.innerHTML = `<div style="margin-top: 18px; background: #183d1a; color: #4caf50; font-size: 1.2em; border: 2px solid #4caf50; border-radius: 0; padding: 18px 22px; display: block; font-weight: 500;">${correctHtml}</div>`;
            feedbackBox.style.display = 'block';
        }

        next() {
            const wasRetry = this.retry.isRetry;
            this.retry.advance();
            if (!wasRetry) {
                this.currentIndex++;
            }
            let hasMoreNormal = this.currentIndex < this.order.length;
            if (this.retry.shouldRetry()) {
                this.retry.isRetry = true;
                document.getElementById('write-feedback').innerHTML = '';
                this.update();
                return;
            }
            if (hasMoreNormal) {
                document.getElementById('write-feedback').innerHTML = '';
                this.update();
            } else if (this.retry.hasRetries()) {
                this.retry.isRetry = true;
                document.getElementById('write-feedback').innerHTML = '';
                this.update();
            } else {
                this.app.showSessionSummary();
            }
        }

        override() {
            const idx = this.retry.getCurrentIdx(this.order[this.currentIndex]);
            const card = this.app.flashcards[idx];
            this.retry.override(idx);
            this.app.summaryTracker.overrideCorrect(card);
            this.app.saveLearnProgress();
            document.getElementById('write-override-btn').style.display = 'none';
            this._getInput().style.borderColor = '#4caf50';
        }
    }

    class TestMode {
        constructor(app) {
            this.app = app;
            this.order = [];
            this.answers = [];
            this.shuffle = false;
            this.grade = null;
        }

        start(shuffle) {
            this.shuffle = !!shuffle;
            this.answers = [];
            this.grade = null;
            this.order = [...Array(this.app.flashcards.length).keys()];
            if (this.shuffle) this.order.sort(() => Math.random() - 0.5);
            ViewManager.show('test-view');
            this.update();
        }

        update() {
            document.getElementById('test-title').textContent = document.getElementById('file-title').textContent;

            const container = document.getElementById('test-container');
            container.innerHTML = '';

            this.order.forEach((cardIndex, displayIndex) => {
                const item = document.createElement('div');
                item.className = 'test-item';
                item.dataset.cardIndex = String(cardIndex);

                const number = document.createElement('span');
                number.className = 'test-number';
                number.textContent = `${displayIndex + 1}.`;
                item.appendChild(number);

                const input = document.createElement('input');
                input.className = 'test-input';
                input.type = 'text';
                input.autocomplete = 'off';
                input.placeholder = 'Term';
                input.dataset.displayIndex = String(displayIndex);
                input.value = this.answers[displayIndex] || '';
                input.addEventListener('input', () => {
                    this.answers[displayIndex] = input.value;
                    this.app.saveLearnProgress();
                });
                item.appendChild(input);

                container.appendChild(item);
            });

            const actions = document.createElement('div');
            actions.className = 'test-actions';

            const submit = document.createElement('button');
            submit.type = 'button';
            submit.className = 'test-button';
            submit.textContent = 'Submit';
            submit.onclick = () => this.submit();
            actions.appendChild(submit);
            container.appendChild(actions);

            const summary = document.createElement('div');
            summary.id = 'test-summary';
            summary.className = 'test-summary';
            container.appendChild(summary);

            const firstInput = container.querySelector('.test-input');
            if (firstInput) firstInput.focus();
            MathRenderer.typeset(container);
        }

        getAnswers() {
            const container = document.getElementById('test-container');
            const inputs = container ? Array.from(container.querySelectorAll('.test-input')) : [];
            if (inputs.length === this.order.length) {
                this.answers = inputs.map(input => input.value);
            }
            return [...this.answers];
        }

        restoreProgress(progress = {}) {
            if (Array.isArray(progress.order) && progress.order.length === this.app.flashcards.length) {
                this.order = progress.order;
            }
            if (Array.isArray(progress.answers)) {
                this.answers = progress.answers;
            }
            this.update();
        }

        submit() {
            const container = document.getElementById('test-container');
            const inputs = Array.from(container.querySelectorAll('.test-input'));
            const orderedCards = this.order.map(index => this.app.flashcards[index]);
            const answers = this.getAnswers();
            this.grade = TestAnswerGrader.gradeTermAnswers(orderedCards, answers, this.shuffle);

            inputs.forEach((input, index) => {
                input.disabled = true;
                input.classList.toggle('correct', !!this.grade.results[index]?.isCorrect);
                input.classList.toggle('incorrect', !this.grade.results[index]?.isCorrect);
            });

            this._renderSummary();
            const submit = container.querySelector('.test-button');
            if (submit) {
                submit.textContent = 'Retry';
                submit.onclick = () => this.retry();
            }
            this.app.saveLearnProgress();
            this._scrollToRetryButton();
        }

        _scrollToRetryButton() {
            const container = document.getElementById('test-container');
            const actions = container ? container.querySelector('.test-actions') : null;
            if (!actions) {
                ViewManager.scrollToTop();
                return;
            }

            const currentScrollY = window.pageYOffset
                || document.documentElement.scrollTop
                || document.body.scrollTop
                || 0;
            const targetTop = Math.max(0, currentScrollY + actions.getBoundingClientRect().top - 16);
            window.scrollTo({ top: targetTop, behavior: 'auto' });
        }

        retry() {
            this.start(this.shuffle);
            this.app.saveLearnProgress();
        }

        _renderSummary() {
            const summary = document.getElementById('test-summary');
            const correctCards = this.grade.cardResults.filter(item => item.isCorrect);
            const incorrectCards = this.grade.cardResults.filter(item => !item.isCorrect);

            summary.style.display = 'block';
            summary.innerHTML = `
                <div class="test-summary-columns">
                    <div class="test-summary-section">
                        <div class="test-summary-title">Correct: ${correctCards.length}</div>
                        ${this._summaryCardsHtml(correctCards)}
                    </div>
                    <div class="test-summary-section">
                        <div class="test-summary-title">Incorrect: ${incorrectCards.length}</div>
                        ${this._summaryCardsHtml(incorrectCards)}
                    </div>
                </div>
            `;
            MathRenderer.typeset(summary);
        }

        _summaryCardsHtml(items) {
            if (!items.length) return '<div class="test-empty-state">None</div>';
            return items.map(item => {
                const term = escapeHtml(item.term);
                const definition = MathRenderer.renderToHtml(item.definition, true, true, true);
                return `
                    <div class="test-summary-card">
                        <div class="test-summary-term">${term}</div>
                        <div class="test-summary-definition">${definition}</div>
                    </div>
                `;
            }).join('');
        }
    }

    // =====================================================================
    // APPLICATION
    // =====================================================================

    class App {
        constructor() {
            this.currentFolder = '';
            this.currentFile = '';
            this.flashcards = [];
            this.allFlashcards = [];
            this.answerType = 'term';
            this.manifestData = {};
            this.lastLearnSettings = { type: 'flashcards', answer: 'term', shuffle: false };
            this.reviewCardsOverride = null;

            this.searchEngine = new SearchEngine(this);
            this.searchCommandController = new SearchCommandController(this);
            this.summaryTracker = new SessionSummaryTracker();
            this.flashcardMode = new FlashcardMode(this);
                this.choiceMode = new ChoiceMode(this);
                this.writeMode = new WriteMode(this);
                this.testMode = new TestMode(this);
                this.imageFocus = new ImageFocus();
            }

        async init() {
            this._initSearchInput();
            await this.loadFolders();
            this._initRouteListeners();
            const initialSearch = this._getInitialSearchQuery();
            const initialRoute = RouteManager.getCurrentRoute(this.manifestData);
            const savedState = SessionManager.getNavState();
            if (initialSearch) {
                await this.showSearchResults(initialSearch);
            } else if (this._shouldRestoreLearningRoute(initialRoute, savedState)) {
                await this._restoreSession();
            } else if (initialRoute.view !== 'home' || initialRoute.replaceUrl) {
                await this._showRoute(initialRoute, {
                    updateUrl: initialRoute.replaceUrl,
                    replaceUrl: initialRoute.replaceUrl
                });
            } else {
                await this._restoreSession();
            }
            this._initScrollButton();
            this._initKeyboardListeners();
            this.imageFocus.init();
        }

        _shouldRestoreLearningRoute(route, state) {
            return !!(
                route && state &&
                route.view === 'file' &&
                state.view === 'file' &&
                state.mode &&
                route.folder === state.folder &&
                route.file === state.file
            );
        }

        _initSearchInput() {
            this.searchCommandController.init();
        }

        _initRouteListeners() {
            window.addEventListener('popstate', async () => {
                const route = RouteManager.getCurrentRoute(this.manifestData);
                await this._showRoute(route, {
                    updateUrl: route.replaceUrl,
                    replaceUrl: route.replaceUrl
                });
            });
        }

        async _showRoute(route, options = {}) {
            if (route.view === 'file') {
                await this.showFile(route.folder, route.file, options);
            } else if (route.view === 'folder') {
                this.showFolder(route.folder, options);
            } else {
                this.showHome(options);
            }
        }

        _getInitialSearchQuery() {
            const params = new URLSearchParams(window.location.search);
            return (params.get('q') || params.get('search') || params.get('query') || '').trim();
        }

        async showSearchResults(query) {
            ViewManager.show('home');
            document.getElementById('learn-modal').style.display = 'none';
            document.getElementById('session-summary-modal').style.display = 'none';
            this.currentFolder = '';
            this.currentFile = '';
            SessionManager.saveNavState('home');
            SessionManager.clearProgress();
            await this.searchEngine.buildIndex();
            const input = document.getElementById('search-input');
            input.value = query;
            this.searchCommandController.sync();
            this.searchEngine.selectedIndex = -1;
            this.searchEngine.search();
            input.focus();
            ViewManager.scrollToTop();
        }

        // --- Navigation ---

        async _loadLibraryManifest() {
            const response = await fetch(RouteManager.assetUrl('library.json'), { cache: 'no-cache' });
            if (!response.ok) throw new Error(`library.json ${response.status}`);
            return await response.json();
        }

        async loadFolders() {
            try {
                this.manifestData = await this._loadLibraryManifest();
                const folders = Object.keys(this.manifestData).sort((a, b) => {
                    const numA = parseInt(a.match(/^\d+/));
                    const numB = parseInt(b.match(/^\d+/));
                    return numB - numA;
                });
                const folderList = document.getElementById('folder-list');
                folderList.innerHTML = '';
                folders.forEach(name => {
                    const folderDiv = document.createElement('div');
                    folderDiv.className = 'folder';
                    folderDiv.textContent = name.replace(/^\d+\s*/, '');
                    folderDiv.onclick = () => this.showFolder(name);
                    folderList.appendChild(folderDiv);
                });
            } catch (e) {
                document.getElementById('folder-list').innerHTML = '<div style="color: #f66">Could not load library.json.</div>';
            }
            this.searchEngine.buildIndex();
        }

        showHome(options = {}) {
            RouteManager.update('home', '', '', options);
            ViewManager.scrollToTop();
            ViewManager.show('home');
            this.searchEngine.clear();
            document.getElementById('session-summary-modal').style.display = 'none';
            this.currentFolder = '';
            this.currentFile = '';
            SessionManager.saveNavState('home');
            SessionManager.clearProgress();
            ViewManager.scrollToTop();
        }

        showFolder(folder, options = {}) {
            RouteManager.update('folder', folder, '', options);
            ViewManager.scrollToTop();
            this.currentFolder = folder;
            ViewManager.show('folder-view');
            document.getElementById('learn-modal').style.display = 'none';
            document.getElementById('session-summary-modal').style.display = 'none';
            document.getElementById('folder-title').textContent = folder.replace(/^\d+\s*/, '');
            this._loadFiles(folder);
            SessionManager.saveNavState('folder', folder);
            ViewManager.scrollToTop();
        }

        async _loadFiles(folder) {
            const fileList = document.getElementById('file-list');
            fileList.innerHTML = '';
            if (!this.manifestData[folder]) {
                fileList.innerHTML = '<div style="color: #f66">No files found in manifest.</div>';
                return;
            }
            const mdFiles = this.manifestData[folder].slice().sort((a, b) => {
                const getNum = s => {
                    const m = decodeURIComponent(s).match(/^\d+/);
                    return m ? parseInt(m[0]) : 9999;
                };
                return getNum(b) - getNum(a);
            });
            mdFiles.forEach(name => {
                const fileDiv = document.createElement('div');
                fileDiv.className = 'file';
                fileDiv.textContent = decodeURIComponent(name).replace(/^\d+\s*/, '').replace('.md', '');
                fileDiv.onclick = () => this.showFile(folder, name);
                fileList.appendChild(fileDiv);
            });
        }

        async showFile(folder, file, options = {}) {
            RouteManager.update('file', folder, file, options);
            if (options.scrollToTop !== false) {
                ViewManager.scrollToTop();
            }
            this.currentFolder = folder;
            this.currentFile = file;
            ViewManager.show('file-view');
            document.getElementById('session-summary-modal').style.display = 'none';
            const fileTitle = document.getElementById('file-title');
            fileTitle.textContent = decodeURIComponent(file).replace(/^[0-9]+\s*/, '').replace('.md', '');
            fileTitle.style.textAlign = 'center';
            document.getElementById('file-content').textContent = 'Loading note…';
            await this._loadFileContent(folder, file);
            if (this.currentFolder !== folder || this.currentFile !== file) return;
            if (options.saveNavState !== false) {
                SessionManager.saveNavState('file', folder, file);
            }
            if (options.scrollToTop !== false) {
                ViewManager.scrollToTop();
            }
        }

        async _loadFileContent(folder, file) {
            try {
                const text = await NoteLoader.load(folder, file);
                if (this.currentFolder !== folder || this.currentFile !== file) return;
                this.searchEngine.updateNote(folder, file, text);
                const fileViewerText = MarkdownImageRenderer.expandObsidianImages(text, folder);
                const contentDiv = document.getElementById('file-content');
                const cards = CardParser.splitSections(fileViewerText);
                const starred = StarManager.getIndices(folder, file);
                contentDiv.innerHTML = '';
                cards.forEach((cardText, i) => {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'card-wrapper';
                    const parsedCard = CardParser.parseCard(cardText);
                    if (parsedCard) {
                        wrapper.dataset.cardTerm = CardParser.displayTerm(parsedCard.term);
                    }
                    const star = document.createElement('button');
                    star.className = 'card-star' + (starred.includes(i) ? ' starred' : '');
                    star.textContent = starred.includes(i) ? '★' : '☆';
                    star.onclick = () => StarManager.toggle(folder, file, i, star);
                    wrapper.appendChild(star);
	                    const cardDiv = document.createElement('div');
	                    // File content uses double-backslash replacement only
	                    cardDiv.innerHTML = MathRenderer.renderToHtml(cardText, false);
	                    wrapper.appendChild(cardDiv);
	                    contentDiv.appendChild(wrapper);
	                });
	                this.imageFocus.prepare(contentDiv);
	                await MathRenderer.typeset(contentDiv);
            } catch (error) {
                if (this.currentFolder === folder && this.currentFile === file) {
                    document.getElementById('file-content').textContent = 'Could not load this note. Please try again.';
                }
                console.error('error loading file content:', error);
            }
        }

        // --- Learn Modal ---

        showLearnModal(preserve = false) {
            const modal = document.getElementById('learn-modal');
            modal.style.display = 'flex';
            SessionManager.saveNavState('file', this.currentFolder, this.currentFile, 'learn-modal');
            setTimeout(() => {
                if (preserve && this.lastLearnSettings) {
                    document.getElementById('type').value = this.lastLearnSettings.type;
                    document.getElementById('answer').value = this.lastLearnSettings.answer;
                    this.setShuffleState(this.lastLearnSettings.shuffle);
                    this.setStarState(this.lastLearnSettings.starOnly || false);
                } else {
                    document.getElementById('answer').value = 'term';
                    this.setShuffleState(false);
                    this.setStarState(false);
                }
            }, 0);
        }

        closeModal() {
            document.getElementById('learn-modal').style.display = 'none';
            setTimeout(() => {
                document.getElementById('answer').value = 'term';
                this.setShuffleState(false);
                this.setStarState(false);
            }, 200);
            SessionManager.saveNavState('file', this.currentFolder, this.currentFile);
            SessionManager.clearProgress();
        }

        goBackToLearnModal() {
            ViewManager.show('file-view');
            this.showLearnModal(true);
            SessionManager.saveNavState('file', this.currentFolder, this.currentFile, 'learn-modal');
        }

        startLearning() {
            const type = document.getElementById('type').value;
            const shuffle = this.getShuffleState();
            const starOnly = this.getStarState();
            if (!this.validateStarredSelection()) return;
            this.answerType = document.getElementById('answer').value;
            if (type === 'test' && this.answerType !== 'term') {
                this.answerType = 'term';
                document.getElementById('answer').value = 'term';
            }
            this.lastLearnSettings = { type, answer: this.answerType, shuffle, starOnly };
            const learnSettings = { type, answer: this.answerType, shuffle, starOnly };
            const reviewCards = this.reviewCardsOverride;
            this.reviewCardsOverride = null;

            if (type === 'flashcards') {
                this.flashcardMode.start(shuffle, starOnly);
                this.closeModal();
                SessionManager.saveNavState('file', this.currentFolder, this.currentFile, 'flashcards', learnSettings);
            } else if (type === 'choice' || type === 'write' || type === 'test') {
                NoteLoader.load(this.currentFolder, this.currentFile)
                    .then(text => {
                        const parsedCards = CardParser.parseCards(text);
                        this.allFlashcards = [...parsedCards];
                        let sessionCards = [...parsedCards];
                        if (starOnly) {
                            const starredIdx = StarManager.getIndices(this.currentFolder, this.currentFile);
                            sessionCards = sessionCards.filter(c => starredIdx.includes(c.cardIndex));
                        }
                        if (reviewCards && reviewCards.length) {
                            const reviewKeys = new Set(reviewCards.map(card => String(card.cardIndex)));
                            sessionCards = sessionCards.filter(card => reviewKeys.has(String(card.cardIndex)));
                        }
                        this.flashcards = sessionCards;
                        this.summaryTracker.reset({
                            folder: this.currentFolder,
                            file: this.currentFile,
                            mode: type,
                            settings: learnSettings,
                        });
                        if (type === 'choice') {
                            this.choiceMode.start(shuffle);
                        } else if (type === 'write') {
                            this.writeMode.start(shuffle);
                        } else {
                            this.testMode.start(shuffle);
                        }
                        this.closeModal();
                        SessionManager.saveNavState('file', this.currentFolder, this.currentFile, type, learnSettings);
                    });
            } else {
                this.closeModal();
            }
        }

        showSessionSummary() {
            const summary = this.summaryTracker.summary();
            const settings = summary.context.settings || this.lastLearnSettings;
            this.lastLearnSettings = settings;
            ViewManager.show('file-view');
            document.getElementById('learn-modal').style.display = 'none';
            this.renderSummaryList('summary-correct-list', 'Correct', summary.correct);
            this.renderSummaryList('summary-retried-list', 'Retried', summary.retried);
            const reviewButton = document.getElementById('summary-review-btn');
            reviewButton.style.display = summary.retried.length ? 'inline-block' : 'none';
            reviewButton.disabled = summary.retried.length === 0;
            const modal = document.getElementById('session-summary-modal');
            modal.style.display = 'flex';
            this.resetSummaryScroll();
            MathRenderer.typeset(modal).then(() => this.resetSummaryScroll());
            SessionManager.saveNavState('file', this.currentFolder, this.currentFile, 'summary', settings);
            this.saveLearnProgress();
        }

        renderSummaryList(id, title, items) {
            const list = document.getElementById(id);
            const header = title === 'Correct' ? `Correct: ${items.length}` : `Retried: ${items.length}`;
            list.innerHTML = `<div class="summary-list-title">${escapeHtml(header)}</div>`;
            if (!items.length) {
                list.innerHTML += '<div class="summary-empty">None</div>';
                return;
            }
            list.innerHTML += items.map(item => {
                const term = escapeHtml(CardParser.displayTerm(item.term));
                const definition = MathRenderer.renderToHtml(item.definition, true, true, true);
                return `
                    <div class="test-summary-card">
                        <div class="test-summary-term">${term}</div>
                        <div class="test-summary-definition">${definition}</div>
                    </div>
                `;
            }).join('');
        }

        resetSummaryScroll() {
            const modal = document.getElementById('session-summary-modal');
            if (!modal) return;
            const targets = [
                modal,
                modal.querySelector('.summary-columns'),
                ...modal.querySelectorAll('.summary-list')
            ].filter(Boolean);
            const scrollToTop = () => {
                targets.forEach(target => {
                    target.scrollTop = 0;
                });
            };
            scrollToTop();
            requestAnimationFrame(() => {
                scrollToTop();
            });
        }

        async openSummaryCard(folder, file, cardIndex, term) {
            document.getElementById('session-summary-modal').style.display = 'none';
            await this.searchEngine.navigateToCard(folder, file, cardIndex, term);
        }

        applySummarySettings(settings) {
            const nextSettings = settings || this.lastLearnSettings;
            document.getElementById('type').value = nextSettings.type || 'choice';
            document.getElementById('answer').value = nextSettings.answer || 'term';
            this.setShuffleState(!!nextSettings.shuffle);
            this.setStarState(!!nextSettings.starOnly);
        }

        reviewRetriedSummary() {
            const summary = this.summaryTracker.summary();
            if (!summary.retried.length) return;
            this.currentFolder = summary.context.folder || this.currentFolder;
            this.currentFile = summary.context.file || this.currentFile;
            this.reviewCardsOverride = summary.retried;
            document.getElementById('session-summary-modal').style.display = 'none';
            this.applySummarySettings(summary.context.settings);
            this.startLearning();
        }

        restartSummarySession() {
            const summary = this.summaryTracker.summary();
            this.currentFolder = summary.context.folder || this.currentFolder;
            this.currentFile = summary.context.file || this.currentFile;
            document.getElementById('session-summary-modal').style.display = 'none';
            this.applySummarySettings(summary.context.settings);
            this.startLearning();
        }

        finishSummary() {
            const summary = this.summaryTracker.summary();
            this.lastLearnSettings = summary.context.settings || this.lastLearnSettings;
            document.getElementById('session-summary-modal').style.display = 'none';
            ViewManager.show('file-view');
            this.showLearnModal(true);
        }

        // --- Toggle Controls ---

        toggleShuffle() {
            const toggle = document.getElementById('shuffle-toggle');
            const label = document.getElementById('shuffle-toggle-label');
            if (toggle.classList.contains('active')) {
                toggle.classList.remove('active');
                label.textContent = 'Off';
            } else {
                toggle.classList.add('active');
                label.textContent = 'On';
            }
        }

        getShuffleState() {
            const toggle = document.getElementById('shuffle-toggle');
            return toggle && toggle.classList.contains('active');
        }

        setShuffleState(val) {
            const toggle = document.getElementById('shuffle-toggle');
            const label = document.getElementById('shuffle-toggle-label');
            if (!toggle || !label) return;
            if (val) {
                toggle.classList.add('active');
                label.textContent = 'On';
            } else {
                toggle.classList.remove('active');
                label.textContent = 'Off';
            }
        }

        toggleStar() {
            const toggle = document.getElementById('star-toggle');
            if (toggle.classList.contains('starred')) {
                toggle.classList.remove('starred');
                toggle.textContent = '☆';
            } else {
                toggle.classList.add('starred');
                toggle.textContent = '★';
            }
            this.validateStarredSelection();
        }

        getStarState() {
            const toggle = document.getElementById('star-toggle');
            return toggle && toggle.classList.contains('starred');
        }

        setStarState(val) {
            const toggle = document.getElementById('star-toggle');
            if (!toggle) return;
            if (val) {
                toggle.classList.add('starred');
                toggle.textContent = '★';
            } else {
                toggle.classList.remove('starred');
                toggle.textContent = '☆';
            }
            this.validateStarredSelection();
        }

        hasStarredTerms() {
            return StarManager.getIndices(this.currentFolder, this.currentFile).length > 0;
        }

        setStarEmptyMessage(message = '') {
            const messageEl = document.getElementById('star-empty-message');
            if (messageEl) messageEl.textContent = message;
        }

        validateStarredSelection() {
            if (this.getStarState() && !this.hasStarredTerms()) {
                this.setStarEmptyMessage('No starred terms');
                return false;
            }
            this.setStarEmptyMessage('');
            return true;
        }

        // --- Progress Persistence ---

        saveLearnProgress() {
            const state = SessionManager.getNavState();
            if (!state || !state.mode || state.mode === 'learn-modal') return;
            let progress = {};
            if (state.mode === 'flashcards') {
                progress = {
                    cardIndex: this.flashcardMode.currentIndex,
                    order: this.flashcardMode.shuffleOrder
                };
            } else if (state.mode === 'choice') {
                progress = {
                    cardIndex: this.choiceMode.currentIndex,
                    order: this.choiceMode.order,
                    ...this.choiceMode.retry.serialize(),
                    summary: this.summaryTracker.serialize()
                };
            } else if (state.mode === 'write') {
                progress = {
                    cardIndex: this.writeMode.currentIndex,
                    order: this.writeMode.order,
                    ...this.writeMode.retry.serialize(),
                    summary: this.summaryTracker.serialize()
                };
            } else if (state.mode === 'test') {
                progress = {
                    order: this.testMode.order,
                    answers: this.testMode.getAnswers()
                };
            } else if (state.mode === 'summary') {
                progress = {
                    summary: this.summaryTracker.serialize()
                };
            }
            SessionManager.saveLearnProgress(progress);
        }

        // --- Session Restore ---

        async _restoreSession() {
            const state = SessionManager.getNavState();
            if (!state) return;
            const savedProgress = SessionManager.getLearnProgress();
            try {
                if (state.view === 'file' && state.folder && state.file) {
                    await this.showFile(state.folder, state.file, { saveNavState: false });
                    if (state.mode === 'learn-modal') {
                        this.showLearnModal();
                    } else if (state.mode === 'summary') {
                        this.answerType = state.settings?.answer || 'term';
                        this.lastLearnSettings = state.settings || this.lastLearnSettings;
                        this.summaryTracker.deserialize(savedProgress.summary);
                        this.showSessionSummary();
                    } else if (state.mode && state.settings) {
                        this.answerType = state.settings.answer || 'term';
                        this.lastLearnSettings = state.settings;
                        if (state.mode === 'flashcards') {
                            await this.flashcardMode.start(false);
                            const fp = savedProgress;
                            if (fp.order && fp.order.length === this.flashcards.length) {
                                const original = [...this.flashcards];
                                this.flashcards = fp.order.map(i => original[i]);
                                if (fp.cardIndex !== undefined) this.flashcardMode.currentIndex = fp.cardIndex;
                                this.flashcardMode.update();
                            }
                            SessionManager.saveNavState('file', state.folder, state.file, 'flashcards', state.settings);
                        } else if (state.mode === 'choice' || state.mode === 'write' || state.mode === 'test') {
                            const text = await NoteLoader.load(state.folder, state.file);
                            const parsedCards = CardParser.parseCards(text);
                            this.allFlashcards = [...parsedCards];
                            this.flashcards = [...parsedCards];
                            if (state.settings.starOnly) {
                                const starredIdx = StarManager.getIndices(state.folder, state.file);
                                this.flashcards = this.flashcards.filter(c => starredIdx.includes(c.cardIndex));
                            }
                            this.summaryTracker.deserialize(savedProgress.summary);
                            if (state.mode === 'choice') {
                                this.choiceMode.start(false);
                                const cp = savedProgress;
                                if (cp.order) this.choiceMode.order = cp.order;
                                if (cp.cardIndex !== undefined) this.choiceMode.currentIndex = cp.cardIndex;
                                this.choiceMode.retry.deserialize(cp);
                                this.summaryTracker.deserialize(cp.summary);
                                this.choiceMode.update();
                            } else if (state.mode === 'write') {
                                this.writeMode.start(false);
                                const wp = savedProgress;
                                if (wp.order) this.writeMode.order = wp.order;
                                if (wp.cardIndex !== undefined) this.writeMode.currentIndex = wp.cardIndex;
                                this.writeMode.retry.deserialize(wp);
                                this.summaryTracker.deserialize(wp.summary);
                                this.writeMode.update();
                            } else {
                                this.testMode.start(!!state.settings.shuffle);
                                const tp = savedProgress;
                                this.testMode.restoreProgress(tp);
                            }
                            SessionManager.saveNavState('file', state.folder, state.file, state.mode, state.settings);
                        }
                    }
                } else if (state.view === 'folder' && state.folder) {
                    this.showFolder(state.folder);
                }
            } catch (e) { console.error('restore error', e); }
        }

        _initScrollButton() {
            const scrollBtn = document.getElementById('scroll-top-btn');
            window.addEventListener('scroll', function() {
                scrollBtn.style.display = window.scrollY > 200 ? 'flex' : 'none';
            });
            scrollBtn.onclick = function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };
        }

        _initKeyboardListeners() {
            const self = this;
            document.addEventListener('keydown', function(event) {
                const learnModal = document.getElementById('learn-modal');
                if ((event.key === 'Escape' || event.code === 'Escape') && learnModal.style.display === 'flex') {
                    event.preventDefault();
                    self.closeModal();
                    return;
                }
                if (document.getElementById('flashcard-view').style.display === 'flex') {
                    if (event.code === 'ArrowLeft') self.flashcardMode.prev();
                    else if (event.code === 'ArrowRight') self.flashcardMode.next();
                    else if (event.code === 'Space') { event.preventDefault(); self.flashcardMode.flip(); }
                }
            });
        }
    }

    // =====================================================================
    // INITIALIZATION
    // =====================================================================

    const app = new App();
    window.app = app;
    window.onload = () => app.init();
