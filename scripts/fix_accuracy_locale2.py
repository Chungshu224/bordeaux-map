#!/usr/bin/env python3
for lang, old, new in [
    ('en', "accuracy:      'Accuracy {pct}%',", "accuracy:      'Accuracy',"),
    ('ja', "accuracy:      '正解率 {pct}%',",   "accuracy:      '正解率',"),
]:
    path = f'src/locales/{lang}/bordeaux.js'
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    updated = content.replace(old, new, 1)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(updated)
    print(f'{path}: {"ok" if content != updated else "no change"}')
