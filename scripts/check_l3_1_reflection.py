import json, re

d = json.load(open('src/locales/en/lessons/bordeaux/l3-1.json', encoding='utf-8'))
content = open('src/data/lessons/l3-1.js', encoding='utf-8').read()

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

for idx, start in enumerate(slide_starts):
    chunk = content[start:start+100]
    m = re.search(r"type:\s*'([^']+)'", chunk)
    t = m.group(1) if m else '?'
    if 'reflection' in t:
        print(f'l3-1 slide {idx}: {t}')
        s_keys = {k: v for k, v in d.items() if k.startswith(f'slides.{idx}')}
        print(s_keys)
