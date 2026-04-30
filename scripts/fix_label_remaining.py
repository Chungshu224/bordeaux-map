#!/usr/bin/env python3
"""Fix remaining 2 missed items in LabelQuizPage"""
path = 'src/components/bordeaux/LabelQuizPage.vue'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    (
        "            <span class=\"fb-chip\">{{ currentQ.bank === 'left' ? '左岸' : '右岸' }}</span>",
        "            <span class=\"fb-chip\">{{ currentQ.bank === 'left' ? $t('bordeaux.games.common.leftBank') : $t('bordeaux.games.common.rightBank') }}</span>"
    ),
    (
        "                  <span class=\"wr-chip\">{{ w.bank === 'left' ? '🔵 左岸' : '🔴 右岸' }}</span>",
        "                  <span class=\"wr-chip\">{{ w.bank === 'left' ? `🔵 ${$t('bordeaux.games.common.leftBank')}` : `🔴 ${$t('bordeaux.games.common.rightBank')}` }}</span>"
    ),
]

ok = 0
for old, new in replacements:
    if old in content:
        content = content.replace(old, new, 1)
        ok += 1
    else:
        print(f'MISS: {repr(old[:70])}')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print(f'Done: {ok} replaced')
