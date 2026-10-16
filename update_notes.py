import os
import re
import argparse
from pathlib import Path
from generate_library import generate_library
from urllib.parse import quote, unquote

INLINE_MATH_PATTERN = re.compile(r"(?<!\\)\$(.+?)(?<!\\)\$")
MULTI_LETTER_SUBSCRIPT_PATTERN = re.compile(r"(?<!\\)_\{([A-Za-z]{2,})\}")
EMPTY_FRACTION_PATTERN = re.compile(r"\\frac\s*\{\s*\}")
MATH_ENVIRONMENT_LINE_PATTERN = re.compile(r"^(\s*)\\(begin|end)\{([^}]*)\}(\s*)$")
ALIGN_ENVIRONMENT_LINE_PATTERN = re.compile(r"^(\s*)\\(begin|end)\{align\}(\s*)$")
LINE_ENDING_PATTERN = re.compile(r"(\r?\n)$")
LEADING_SQUARE_BRACKET_PATTERN = re.compile(r"^(\s*)\[")
TEXT_ARGUMENT_COMMANDS = {"\\operatorname", "\\text"}

OBSIDIAN_IMAGE_PATTERN = re.compile(r"!\[\[([^|\]\n]+)(?:\|([^\]\n]+))?\]\]")
MARKDOWN_IMAGE_PATTERN = re.compile(r"!\[([^\]\n]*)\]\(([^)\n]+)\)")
REMOTE_IMAGE_PATTERN = re.compile(r"^(?:https?:|data:|blob:)", re.IGNORECASE)
IMAGE_FOLDER_NAME = "Images"
VAULT_ROOT = os.path.join(os.path.expanduser("~"), "Obsidian", "BrainTwo")
OUTPUT_ROOT = os.path.join(os.path.expanduser("~"), "GitHub", "BrainTwo")

LATEX_STRUCTURE_PATTERN = re.compile(
    r"%[^\n]*|\\(?P<direction>begin|end)\{(?P<environment>[^}]+)\}"
    r"|\\\\\*?(?:[ \t]*\[[^\]\n]*\])?|\\[A-Za-z]+|\\.|[{}&]"
)

def convert_align_environments(text):
    """Use lgathered for outer align and single left-column display blocks.

    One outer alignment marker per row can be removed for the single column.
    Blocks with multiple outer markers per row are left for manual review.
    """
    def convert_display(match):
        body = match.group(1)
        stack = []
        brace_depth = 0
        active = None
        edits = []
        for token in LATEX_STRUCTURE_PATTERN.finditer(body):
            value = token.group()
            if value.startswith('%'):
                continue
            direction = token.group('direction')
            environment = token.group('environment')
            if direction == 'begin':
                if not stack and brace_depth == 0:
                    column = re.match(r'\s*\{l\}', body[token.end():]) if environment == 'array' else None
                    if environment in {'align', 'align*', 'aligned'} or column:
                        active = {'begin': token, 'begin_end': token.end() + (column.end() if column else 0),
                                  'array': environment == 'array', 'markers': [], 'row_markers': 0, 'columns': False}
                stack.append(environment)
            elif direction == 'end':
                if not stack or stack[-1] != environment:
                    return match.group(0)
                if active and len(stack) == 1:
                    if not active['columns'] and brace_depth == 0:
                        edits.append((active['begin'].start(), active['begin_end'], r'\begin{lgathered}'))
                        edits.append((token.start(), token.end(), r'\end{lgathered}'))
                        edits.extend((start, end, '') for start, end in active['markers'])
                    active = None
                stack.pop()
            elif value == '{':
                brace_depth += 1
            elif value == '}':
                brace_depth -= 1
                if brace_depth < 0:
                    return match.group(0)
            elif active and len(stack) == 1 and brace_depth == 0:
                if value == '&':
                    active['markers'].append((token.start(), token.end()))
                    active['row_markers'] += 1
                    if active['array'] or active['row_markers'] > 1:
                        active['columns'] = True
                elif value.startswith('\\\\'):
                    active['row_markers'] = 0
        if stack or brace_depth:
            return match.group(0)
        for start, end, replacement in sorted(edits, reverse=True):
            body = body[:start] + replacement + body[end:]
        # A first-row interval can be read as lgathered's optional position.
        body = delimit_first_row_interval(body)
        return '$$' + body + '$$'

    return re.sub(r'\$\$([\s\S]*?)\$\$', convert_display, text)

def delimit_first_row_interval(body):
    """Pair first-row brackets without crossing a row or an environment boundary."""
    starts = list(re.finditer(r'\\begin\{lgathered\}\s*(?P<interval>(?:\{\})?\[)', body))
    for start in reversed(starts):
        bracket_depth = 1
        brace_depth = 0
        for token in re.finditer(r'%[^\n]*|\\[A-Za-z]+|\\.|[{}\[\]]', body[start.end():]):
            value = token.group()
            if value.startswith('%'):
                continue
            if value in {r'\\', r'\begin', r'\end'}:
                break
            if value == '{':
                brace_depth += 1
            elif value == '}':
                brace_depth -= 1
            elif brace_depth == 0:
                if value == '[':
                    bracket_depth += 1
                elif value == ']':
                    bracket_depth -= 1
                    if bracket_depth == 0:
                        end = start.end() + token.start()
                        body = (body[:start.start('interval')] + r'\left[' +
                                body[start.end():end] + r'\right]' + body[end + 1:])
                        break
    return body

def sanitize_math_text(text):
    line_ending_match = LINE_ENDING_PATTERN.search(text)
    line_ending = line_ending_match.group(1) if line_ending_match else ""
    body = text[: -len(line_ending)] if line_ending else text

    environment_match = MATH_ENVIRONMENT_LINE_PATTERN.match(body)
    if environment_match:
        body = normalize_align_environment_line(body)
        return body + line_ending

    leading_match = re.match(r"\s*", body)
    leading = leading_match.group(0)
    stripped_body = body.strip()
    if not stripped_body:
        return text

    normalized_body = normalize_multichar_subscripts(stripped_body)
    normalized_body = compact_math_tokens(normalized_body)
    validate_latex_fragment(normalized_body)
    return leading + normalized_body + line_ending

def trim_trailing_whitespace(text):
    line_ending_match = LINE_ENDING_PATTERN.search(text)
    line_ending = line_ending_match.group(1) if line_ending_match else ""
    body = text[: -len(line_ending)] if line_ending else text
    return body.rstrip(" \t") + line_ending

def normalize_align_environment_line(text):
    return ALIGN_ENVIRONMENT_LINE_PATTERN.sub(
        lambda match: f"{match.group(1)}\\{match.group(2)}{{align*}}{match.group(3)}",
        text,
    )

def compact_math_tokens(text):
    parts = []
    i = 0

    while i < len(text):
        char = text[i]
        if char.isspace():
            i += 1
            continue

        if char == "\\":
            command, i = read_latex_command(text, i)
            parts.append(command)
            next_i = skip_spaces(text, i)

            if command in TEXT_ARGUMENT_COMMANDS:
                if next_i < len(text) and text[next_i] == "{":
                    argument, end_i = read_braced_argument(text, next_i)
                    normalized_argument = argument if command == "\\text" else normalize_text_argument(argument)
                    parts.append(f"{{{normalized_argument}}}")
                    i = end_i
                    continue

            if needs_latex_command_separator(command, text, next_i):
                parts.append(" ")
            continue

        if char == "{":
            argument, i = read_braced_argument(text, i)
            parts.append(f"{{{compact_math_tokens(argument)}}}")
            continue

        if char.isdigit():
            number, i = read_number(text, i)
            parts.append(number)
            continue

        parts.append(char)
        i += 1

    return "".join(parts)

def needs_latex_command_separator(command, text, next_i):
    return (
        is_latex_word_command(command)
        and next_i < len(text)
        and text[next_i].isalpha()
    )

def is_latex_word_command(command):
    return len(command) > 1 and command[1:].isalpha()

def read_latex_command(text, start):
    if start + 1 < len(text) and text[start + 1] == "\\":
        return "\\\\", start + 2

    i = start + 1
    while i < len(text) and text[i].isalpha():
        i += 1

    if i == start + 1 and i < len(text):
        i += 1
    return text[start:i], i

def skip_spaces(text, start):
    while start < len(text) and text[start].isspace():
        start += 1
    return start

def read_braced_argument(text, start):
    depth = 0
    i = start
    content_start = start + 1

    while i < len(text):
        char = text[i]
        if char == "\\":
            i += 2
            continue
        if char == "{":
            depth += 1
        elif char == "}":
            depth -= 1
            if depth == 0:
                return text[content_start:i], i + 1
        i += 1

    return text[content_start:], len(text)

def normalize_text_argument(text):
    return re.sub(r"\s+", " ", text.strip())

def normalize_multichar_subscripts(text):
    """Wrap plain multi-letter subscript names with the LaTeX text command."""
    return MULTI_LETTER_SUBSCRIPT_PATTERN.sub(
        lambda match: r"_{\text{" + match.group(1) + "}}",
        text,
    )

def validate_latex_fragment(text):
    if EMPTY_FRACTION_PATTERN.search(text):
        raise ValueError(
            r"Invalid LaTeX: \\frac{} has an empty numerator. "
            "Keep both fraction arguments on the same align line."
        )

def read_number(text, start):
    i = start
    while i < len(text) and text[i].isdigit():
        i += 1
    if i < len(text) and text[i] == "." and i + 1 < len(text) and text[i + 1].isdigit():
        i += 1
        while i < len(text) and text[i].isdigit():
            i += 1
    return text[start:i], i

def protect_mathjax_leading_square_bracket(text):
    return LEADING_SQUARE_BRACKET_PATTERN.sub(r"\1{}[", text, count=1)

def sanitize_inline_math(line):
    return INLINE_MATH_PATTERN.sub(
        lambda match: f"${sanitize_math_text(match.group(1))}$",
        line,
    )

def sanitize_markdown_math(text, protect_leading_square_brackets=False):
    text = convert_align_environments(text)
    lines = text.splitlines(keepends=True)
    in_math_block = False

    for i in range(len(lines)):
        stripped_line = lines[i].strip()
        if stripped_line == "$$":
            in_math_block = not in_math_block
            lines[i] = trim_trailing_whitespace(lines[i])
            continue

        if in_math_block:
            lines[i] = sanitize_math_text(lines[i])
            if protect_leading_square_brackets:
                lines[i] = protect_mathjax_leading_square_bracket(lines[i])
        else:
            lines[i] = sanitize_inline_math(lines[i])
        lines[i] = trim_trailing_whitespace(lines[i])

    return "".join(lines)

def is_heading_candidate(line):
    stripped = line.strip()
    if not stripped:
        return False

    blocked_prefixes = ("- ", "### ", "$$", "---", "\\")
    return not stripped.startswith(blocked_prefixes)

def format_generated_markdown_lines(lines):
    formatted_lines = convert_align_environments(''.join(lines)).splitlines(keepends=True)
    in_math_block = False

    for i in range(len(formatted_lines)):
        next_line = formatted_lines[i + 1] if i + 1 < len(formatted_lines) else ""
        stripped_line = formatted_lines[i].strip()

        # add newlines
        if next_line.startswith("---"):
            formatted_lines[i] = formatted_lines[i].rstrip("\n") + "\n\n"
            stripped_line = formatted_lines[i].strip()

        if stripped_line == "$$":
            in_math_block = not in_math_block
            continue

        next_stripped_line = next_line.strip()
        pattern0 = (
            not in_math_block
            and is_heading_candidate(formatted_lines[i])
            and next_line.startswith("- ")
        )
        pattern1 = (
            not in_math_block
            and is_heading_candidate(formatted_lines[i])
            and next_stripped_line == "$$"
        )

        # add hashtags and newlines
        if pattern0 or pattern1:
            formatted_lines[i] = "### " + formatted_lines[i].rstrip("\n") + "\n"

    return formatted_lines

def is_vault_note_folder(root, folder_name):
    return (
        bool(re.match(r"^\d+ ", folder_name))
        and os.path.isdir(os.path.join(root, folder_name))
    )

def list_vault_note_folders(root):
    return [
        folder_name
        for folder_name in os.listdir(root)
        if is_vault_note_folder(root, folder_name)
    ]

def folder_label(folder_name):
    return re.sub(r"^\d+\s*", "", folder_name).strip().lower()

def current_folder_name(folder_name, folder_names):
    decoded_folder = unquote(folder_name).strip()
    label = folder_label(decoded_folder)
    for current_folder in folder_names:
        if current_folder == decoded_folder or folder_label(current_folder) == label:
            return current_folder
    return decoded_folder

def normalize_image_path(image_path, folder_name, folder_names, encode_path=False):
    stripped_path = image_path.strip()
    if REMOTE_IMAGE_PATTERN.match(stripped_path):
        return stripped_path

    decoded_path = unquote(stripped_path).strip().lstrip("/").rstrip("|")
    parts = decoded_path.split("/")
    if IMAGE_FOLDER_NAME not in parts:
        normalized_path = decoded_path
    else:
        images_index = parts.index(IMAGE_FOLDER_NAME)
        if images_index == 0:
            normalized_path = decoded_path
        else:
            image_folder = current_folder_name("/".join(parts[:images_index]), folder_names)
            image_path_parts = "/".join(parts[images_index:])
            normalized_path = f"{image_folder}/{image_path_parts}"

    if encode_path:
        return quote(normalized_path, safe="/")
    return normalized_path

def normalize_image_references(text, folder_name, folder_names):
    def replace_obsidian_image(match):
        image_path = normalize_image_path(match.group(1), folder_name, folder_names)
        alias = match.group(2)
        if alias is None:
            return f"![[{image_path}]]"
        return f"![[{image_path}|{alias}]]"

    def replace_markdown_image(match):
        alt_text = match.group(1)
        image_path = normalize_image_path(
            match.group(2),
            folder_name,
            folder_names,
            encode_path=True,
        )
        return f"![{alt_text}]({image_path})"

    text = OBSIDIAN_IMAGE_PATTERN.sub(replace_obsidian_image, text)
    return MARKDOWN_IMAGE_PATTERN.sub(replace_markdown_image, text)

def write_if_changed(path, data):
    """Replace a complete file only when its bytes change."""
    if path.is_file() and path.read_bytes() == data:
        return False
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_name(path.name + '.tmp')
    try:
        temporary.write_bytes(data)
        temporary.replace(path)
    finally:
        temporary.unlink(missing_ok=True)
    return True


def update_notes():
    source, output = Path(VAULT_ROOT), Path(OUTPUT_ROOT)
    if source.resolve() == output.resolve() or source.resolve() in output.resolve().parents or output.resolve() in source.resolve().parents:
        raise ValueError('Source and output folders must be separate.')
    folder_names = sorted(list_vault_note_folders(source))
    if not folder_names:
        raise ValueError('No numbered source note folders found; output was not changed.')

    # Check every note before changing source notes or website files.
    expected = {}
    source_updates = {}
    for folder_name in folder_names:
        folder = source / folder_name
        for note in sorted(folder.glob('*.md')):
            source_text = sanitize_markdown_math(note.read_text(encoding='utf-8'))
            source_updates[note] = source_text.encode('utf-8')
            text = normalize_image_references(source_text, folder_name, folder_names)
            text = ''.join(format_generated_markdown_lines(text.splitlines(keepends=True)))
            expected[Path(folder_name) / note.name] = text.encode('utf-8')
        images = folder / IMAGE_FOLDER_NAME
        if images.is_dir():
            for image in sorted(images.rglob('*')):
                if image.is_file() and not any(part.startswith('.') for part in image.relative_to(images).parts):
                    expected[image.relative_to(source)] = image.read_bytes()

    for note, data in source_updates.items():
        write_if_changed(note, data)

    output.mkdir(parents=True, exist_ok=True)
    for relative, data in expected.items():
        write_if_changed(output / relative, data)

    # Only numbered note folders and their image assets belong to this generator.
    for folder_name in list_vault_note_folders(output):
        folder = output / folder_name
        candidates = list(folder.glob('*.md'))
        images = folder / IMAGE_FOLDER_NAME
        if images.is_dir():
            candidates.extend(path for path in images.rglob('*') if path.is_file())
        for path in candidates:
            if path.relative_to(output) not in expected:
                path.unlink()
    generate_library(output)


def main():
    global VAULT_ROOT, OUTPUT_ROOT
    parser = argparse.ArgumentParser(description='Format source note math and generate website notes.')
    parser.add_argument('--source', default=VAULT_ROOT)
    parser.add_argument('--output', default=str(Path(__file__).resolve().parent))
    args = parser.parse_args()
    VAULT_ROOT, OUTPUT_ROOT = args.source, args.output
    update_notes()


if __name__ == '__main__':
    main()
