import os
import re
import shutil
from urllib.parse import quote, unquote

INLINE_MATH_PATTERN = re.compile(r"(?<!\\)\$(.+?)(?<!\\)\$")
MATH_ENVIRONMENT_LINE_PATTERN = re.compile(r"^(\s*)\\(begin|end)\{([^}]*)\}(\s*)$")
LINE_ENDING_PATTERN = re.compile(r"(\r?\n)$")
LEADING_SQUARE_BRACKET_PATTERN = re.compile(r"^(\s*)\[")
OBSIDIAN_IMAGE_PATTERN = re.compile(r"!\[\[([^|\]\n]+)(?:\|([^\]\n]+))?\]\]")
MARKDOWN_IMAGE_PATTERN = re.compile(r"!\[([^\]\n]*)\]\(([^)\n]+)\)")
REMOTE_IMAGE_PATTERN = re.compile(r"^(?:https?:|data:|blob:)", re.IGNORECASE)
IMAGE_FOLDER_NAME = "Images"
IGNORED_VAULT_FOLDERS = {"Templates", "BrainTwo.base"}
TEXT_ARGUMENT_COMMANDS = {"\\operatorname", "\\text"}
VAULT_ROOT = os.path.join(os.path.expanduser("~"), "Obsidian", "BrainTwo")
OUTPUT_ROOT = os.path.join(os.path.expanduser("~"), "GitHub", "BrainTwo")

def sanitize_math_text(text):
    line_ending_match = LINE_ENDING_PATTERN.search(text)
    line_ending = line_ending_match.group(1) if line_ending_match else ""
    body = text[: -len(line_ending)] if line_ending else text

    environment_match = MATH_ENVIRONMENT_LINE_PATTERN.match(body)
    if environment_match:
        return body + line_ending

    leading_match = re.match(r"\s*", body)
    leading = leading_match.group(0)
    stripped_body = body.strip()
    if not stripped_body:
        return text

    return leading + compact_math_tokens(stripped_body) + line_ending

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
                    parts.append(f"{{{normalize_text_argument(argument)}}}")
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
    lines = text.splitlines(keepends=True)
    in_math_block = False

    for i in range(len(lines)):
        stripped_line = lines[i].strip()
        if stripped_line == "$$":
            in_math_block = not in_math_block
            continue

        if in_math_block:
            lines[i] = sanitize_math_text(lines[i])
            if protect_leading_square_brackets:
                lines[i] = protect_mathjax_leading_square_bracket(lines[i])
        else:
            lines[i] = sanitize_inline_math(lines[i])

    return "".join(lines)

def is_heading_candidate(line):
    stripped = line.strip()
    if not stripped:
        return False

    blocked_prefixes = ("- ", "### ", "$$", "---", "\\")
    return not stripped.startswith(blocked_prefixes)

def format_generated_markdown_lines(lines):
    formatted_lines = list(lines)
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
        pattern3 = formatted_lines[i].startswith("\\")

        # add hashtags and newlines
        if pattern0 or pattern1:
            formatted_lines[i] = "### " + formatted_lines[i].rstrip("\n") + "\n"

        # replace alignment
        if pattern3:
            formatted_lines[i] = formatted_lines[i].replace("align*", "aligned")

        if in_math_block:
            formatted_lines[i] = protect_mathjax_leading_square_bracket(sanitize_math_text(formatted_lines[i]))
        else:
            formatted_lines[i] = sanitize_inline_math(formatted_lines[i])

    return formatted_lines

def is_vault_note_folder(root, folder_name):
    return (
        not folder_name.startswith(".")
        and folder_name not in IGNORED_VAULT_FOLDERS
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

def has_generated_note_content(folder_path):
    if not os.path.isdir(folder_path):
        return False

    return any(
        file_name.endswith(".md")
        or (
            file_name == IMAGE_FOLDER_NAME
            and os.path.isdir(os.path.join(folder_path, file_name))
        )
        for file_name in os.listdir(folder_path)
    )

def update_notes():
    input = VAULT_ROOT
    output = OUTPUT_ROOT
    folder_names = list_vault_note_folders(input)
    input_folders = set(folder_names)
    dirs = {}

    # loop through folders inside obsidian
    for dir in folder_names:
        folder_name = dir
        folder_path = os.path.join(input, folder_name)
        dirs[folder_name] = {}

        # loop through files inside obsidian folder
        for file in os.listdir(folder_path):
            if file.endswith(".md"):
                file_path = os.path.join(folder_path, file)
                file_name = os.path.basename(file)[:-3] # remove suffix ".md"
                dirs[folder_name][file_name] = file_path

                # read from obsidian files
                with open(file_path, "r") as obs:
                    raw_source_data = obs.read()

                source_data = sanitize_markdown_math(raw_source_data)
                if source_data != raw_source_data:
                    with open(file_path, "w") as obs:
                        obs.write(source_data)

                # write source math spacing plus generated-only edits to github files
                data = normalize_image_references(
                    source_data,
                    folder_name,
                    folder_names,
                )
                os.makedirs(os.path.join(output, folder_name), exist_ok=True)

                # write to github files
                out_file = os.path.join(output, folder_name, file_name + ".md")
                with open(out_file, "w") as git:
                    git.write(data)

                # read from github files
                with open(out_file, "r") as git:
                    lines = git.readlines()

                    lines = format_generated_markdown_lines(lines)

                    # write to github files
                    with open(out_file, "w") as git:
                        git.writelines(lines)

    # remove renamed/deleted files
    for folder_name in os.listdir(output):
        out_folder = os.path.join(output, folder_name)
        in_folder = os.path.join(input, folder_name)
        if not os.path.isdir(out_folder) or folder_name.startswith("."):
            continue
        if folder_name not in input_folders:
            if has_generated_note_content(out_folder):
                shutil.rmtree(out_folder)
            continue
        if os.path.isdir(in_folder):
            obsidian_files = set(f for f in os.listdir(in_folder) if f.endswith('.md'))
            github_files = set(f for f in os.listdir(out_folder) if f.endswith('.md'))
            for file in github_files:
                if file not in obsidian_files:
                    os.remove(os.path.join(out_folder, file))

    # copy image asset folders for file-view rendering
    for folder_name in folder_names:
        in_folder = os.path.join(input, folder_name)
        in_images = os.path.join(in_folder, IMAGE_FOLDER_NAME)
        out_images = os.path.join(output, folder_name, IMAGE_FOLDER_NAME)
        if os.path.isdir(in_images):
            if os.path.exists(out_images):
                shutil.rmtree(out_images)
            os.makedirs(os.path.dirname(out_images), exist_ok=True)
            shutil.copytree(in_images, out_images)
        elif os.path.isdir(out_images):
            shutil.rmtree(out_images)

def main():
    update_notes()

if __name__ == "__main__":
    main()
