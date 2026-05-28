import json
import os
import re
import shutil

INLINE_MATH_PATTERN = re.compile(r"(?<!\\)\$(.+?)(?<!\\)\$")
SINGLE_CHAR_SUBSCRIPT_PATTERN = re.compile(r"(?<!\\)_([A-Za-z0-9])(?![A-Za-z0-9{])")
LEADING_SQUARE_BRACKET_PATTERN = re.compile(r"^(\s*)\[")
IMAGE_FOLDER_NAME = "Images"
IGNORED_VAULT_FOLDERS = {"Templates", "Brain.base"}

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

def write_library_manifest(output, folder_names):
    library = {}
    for folder_name in sorted(folder_names):
        out_folder = os.path.join(output, folder_name)
        files = [
            file_name
            for file_name in sorted(os.listdir(out_folder))
            if file_name.endswith(".md")
        ]
        if files:
            library[folder_name] = files

    with open(os.path.join(output, "library.json"), "w") as library_file:
        json.dump(library, library_file, indent=2)
        library_file.write("\n")

def update_notes():
    input = os.path.expanduser("~") + "/Obsidian/brainTwo/"
    output = os.path.expanduser("~") + "/Github/notes/"
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
                    data = obs.read()
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

    write_library_manifest(output, folder_names)

def main():
    update_notes()

if __name__ == "__main__":
    main()
