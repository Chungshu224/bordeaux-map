import re
path = 'src/data/lessons/l2-9.js'
content = open(path, encoding='utf-8').read()

depth = 0
slide_starts = []
i = 0
in_string = False
string_char = None
while i < len(content):
    c = content[i]
    if in_string:
        if c == '\\':
            i += 2
            continue
        if c == string_char:
            in_string = False
    else:
        if c in ('"', "'", '`'):
            in_string = True
            string_char = c
        elif c == '{':
            depth += 1
            if depth == 1:
                slide_starts.append(i)
        elif c == '}':
            depth -= 1
    i += 1

print(f'Total slides: {len(slide_starts)}')
for idx, start in enumerate(slide_starts):
    chunk = content[start:start+100]
    m = re.search(r"type:\s*'([^']+)'", chunk)
    t = m.group(1) if m else '?'
    print(f'  {idx}: {t}')
