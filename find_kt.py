import re
for lesson in ['l3-2', 'l3-3', 'l3-4']:
    path = f'src/data/lessons/{lesson}.js'
    content = open(path, encoding='utf-8').read()
    matches = list(re.finditer(r"type:\s*'([^']+)'", content))
    slide_types = [(content[:m.start()].count('\n') + 1, m.group(1)) for m in matches]
    print(lesson)
    for i, (ln, t) in enumerate(slide_types):
        if 'key-takeaways' in t:
            print(f'  slide index {i}: type={t} at line {ln}')
