import re

path = r'src\components\australia\data\lessonSlides.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Unicode smart apostrophes
content = content.replace('\u2018', "'")  # left single quote
content = content.replace('\u2019', "'")  # right single quote

lines = content.split('\n')
fixed = []
count = 0

for line in lines:
    stripped = line.rstrip()
    lstripped = stripped.lstrip()
    leading_ws = len(stripped) - len(lstripped)
    ws = stripped[:leading_ws]
    
    # Check if this is a single-quoted string value that contains a mid-string apostrophe
    # Patterns that indicate apostrophe inside a single-quoted string
    has_apostrophe = ("'s " in lstripped or "'s)" in lstripped or 
                      "d'" in lstripped or "'s," in lstripped)
    is_single_quoted = (lstripped.startswith("'") and 
                        (lstripped.endswith("',") or lstripped.endswith("'")))
    
    if has_apostrophe and is_single_quoted:
        if lstripped.endswith("',"):
            inner = lstripped[1:-2]
            new_line = ws + '"' + inner + '",'
        else:
            inner = lstripped[1:-1]
            new_line = ws + '"' + inner + '"'
        fixed.append(new_line)
        count += 1
    else:
        fixed.append(line)

print(f'Fixed {count} lines')
with open(path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(fixed))

print("Done!")
