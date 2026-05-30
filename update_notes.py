import os
import re
import shutil
from urllib.parse import quote, unquote

INLINE_MATH_PATTERN = re.compile(r"(?<!\\)\$(.+?)(?<!\\)\$")
SINGLE_CHAR_SUBSCRIPT_PATTERN = re.compile(r"(?<!\\)_([A-Za-z0-9])(?![A-Za-z0-9{])")
LEADING_SQUARE_BRACKET_PATTERN = re.compile(r"^(\s*)\[")
OBSIDIAN_IMAGE_PATTERN = re.compile(r"!\[\[([^|\]\n]+)(?:\|([^\]\n]+))?\]\]")
MARKDOWN_IMAGE_PATTERN = re.compile(r"!\[([^\]\n]*)\]\(([^)\n]+)\)")
REMOTE_IMAGE_PATTERN = re.compile(r"^(?:https?:|data:|blob:)", re.IGNORECASE)
IMAGE_FOLDER_NAME = "Images"
IGNORED_VAULT_FOLDERS = {"Templates", "Brain.base"}
VAULT_ROOT = os.path.join(os.path.expanduser("~"), "Obsidian", "BrainTwo")
OUTPUT_ROOT = os.path.join(os.path.expanduser("~"), "GitHub", "BrainTwo")

def sanitize_math_text(text):
    return SINGLE_CHAR_SUBSCRIPT_PATTERN.sub(r"_{\g<1>}", text)

def protect_mathjax_leading_square_bracket(text):
    return LEADING_SQUARE_BRACKET_PATTERN.sub(r"\1{}[", text, count=1)

def sanitize_inline_math(line):
    return INLINE_MATH_PATTERN.sub(
        lambda match: f"${sanitize_math_text(match.group(1))}$",
        line,
    )

def is_heading_candidate(line):
    stripped = line.strip()
    if not stripped:
        return False

    blocked_prefixes = ("- ", "### ", "$$", "---", "\\")
    return not stripped.startswith(blocked_prefixes)

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
                    data = normalize_image_references(
                        obs.read(),
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

                        in_math_block = False

                        # loop through lines inside file
                        for i in range(len(lines)):
                            next_line = lines[i + 1] if i + 1 < len(lines) else ""
                            stripped_line = lines[i].strip()
                            next_stripped_line = next_line.strip()

                            pattern0 = is_heading_candidate(lines[i]) and next_line.startswith("- ")
                            pattern1 = is_heading_candidate(lines[i]) and next_stripped_line == "$$"
                            pattern2 = next_line.startswith("---")
                            pattern3 = lines[i].startswith("\\")

                            # add hashtags and newlines
                            if pattern0 or pattern1:
                                lines[i] = "### " + lines[i].rstrip("\n") + "\n"

                            # add newlines
                            if pattern2:
                                lines[i] = lines[i].rstrip("\n") + "\n\n"

                            # replace alignment
                            if pattern3:
                                lines[i] = lines[i].replace("align*", "aligned")

                            stripped_line = lines[i].strip()
                            if stripped_line == "$$":
                                in_math_block = not in_math_block
                                continue

                            if in_math_block:
                                lines[i] = protect_mathjax_leading_square_bracket(sanitize_math_text(lines[i]))
                            else:
                                lines[i] = sanitize_inline_math(lines[i])

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
