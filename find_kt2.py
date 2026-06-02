import re, json

# For each lesson, parse the JS file properly to find top-level slide types
for lesson in ['l3-2', 'l3-3', 'l3-4']:
    path = f'src/data/lessons/{lesson}.js'
    content = open(path, encoding='utf-8').read()
    
    # Find the main export array - look for all { type: '...' at brace depth 1
    # Count opening/closing braces to determine depth
    # Find all top-level object starts containing type
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
                if depth == 1:  # Top-level objects inside the array (export = [...])
                    slide_starts.append(i)
            elif c == '}':
                depth -= 1
        i += 1
    
    # For each slide start, find the type
    print(f'\n{lesson}: {len(slide_starts)} slides')
    for idx, start in enumerate(slide_starts):
        chunk = content[start:start+100]
        m = re.search(r"type:\s*'([^']+)'", chunk)
        t = m.group(1) if m else '?'
        if t == 'key-takeaways':
            print(f'  slide {idx}: type={t}')
