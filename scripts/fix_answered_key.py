#!/usr/bin/env python3
"""Fix answered locale key: {correct} → {n} to match template usage."""

fixes = {
    'zh-TW': ("answered:      '{correct}/{total} 答對',", "answered:      '{n}/{total} 答對',"),
    'en':    ("answered:      '{correct}/{total} correct',", "answered:      '{n}/{total} correct',"),
    'ja':    ("answered:      '{correct}/{total} 正解',", "answered:      '{n}/{total} 正解',"),
}
for lang, (old, new) in fixes.items():
    path = f'src/locales/{lang}/bordeaux.js'
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()
    updated = c.replace(old, new, 1)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(updated)
    print(f'{lang}: {"ok" if c != updated else "no change"}')
