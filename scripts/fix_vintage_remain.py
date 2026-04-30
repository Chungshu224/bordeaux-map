#!/usr/bin/env python3
"""Fix remaining VintageSortPage items."""

FILE = 'src/components/bordeaux/VintageSortPage.vue'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

fixes = [
    (' <tr v-if="!lbData.length"><td colspan="4" class="lb-empty">尚無紀錄</td></tr>',
     " <tr v-if=\"!lbData.length\"><td colspan=\"4\" class=\"lb-empty\">{{ $t('bordeaux.games.common.noRecord') }}</td></tr>"),
    ("<span class=\"gsc-chip\">{{ difficulty === 'easy' ? '🍷 簡單' : '🔥 困難' }}</span>\n          <span class=\"gsc-chip\">{{ correctTotal }} / {{ cardCount * 5 }} 正確</span>\n          <span class=\"gsc-chip\">{{ perfectRounds }} 輪完美</span>",
     "<span class=\"gsc-chip\">{{ difficulty === 'easy' ? '🍷 ' + $t('bordeaux.games.common.easy') : '🔥 ' + $t('bordeaux.games.common.hard') }}</span>\n          <span class=\"gsc-chip\">{{ $t('bordeaux.games.common.answered', { n: correctTotal, total: cardCount * 5 }) }}</span>"),
]

ok = miss = 0
for old, new in fixes:
    if old in content:
        content = content.replace(old, new, 1)
        ok += 1
    else:
        print(f'MISS: {repr(old[:80])}')
        miss += 1

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)
print(f'{FILE}: {ok} ok, {miss} missed')
