#!/usr/bin/env python3
"""Fix accuracy locale value and answered/maxStreak interpolation keys."""

import json

# Fix zh-TW, en, ja locale files
for lang, acc_val, answered_val, maxStreak_val in [
    ('zh-TW', '正確率', '{n}/{total} 答對', '最高連勝 {n}'),
    ('en',    'Accuracy', '{n}/{total} correct', 'Best streak {n}'),
    ('ja',    '正答率',   '{n}/{total} 正解',    '最高連続 {n}'),
]:
    path = f'src/locales/{lang}/bordeaux.js'
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix accuracy (remove {pct}%)
    for old, new in [
        ("accuracy:      '正確率 {pct}%',", f"accuracy:      '{acc_val}',"),
        ("accuracy:   'Accuracy {pct}%',",  f"accuracy:   '{acc_val}',"),
        ("accuracy:   '正答率 {pct}%',",    f"accuracy:   '{acc_val}',"),
    ]:
        if old in content:
            content = content.replace(old, new, 1)
            print(f'{path}: fixed accuracy')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print('Done')
