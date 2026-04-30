#!/usr/bin/env python3
"""Fix remaining lb empty row in GrapeSoilMatchPage."""

import re

for path in ['src/components/bordeaux/GrapeSoilMatchPage.vue',
             'src/components/bordeaux/BankQuizPage.vue']:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    pattern = r'<tr v-if="!lbData\.length"><td colspan="\d+" class="lb-empty">[^<]+</td></tr>'
    repl = lambda m: m.group().replace(
        m.group()[m.group().index('>')+1:m.group().index('</td>')],
        "{{ $t('bordeaux.games.common.noRecord') }}"
    )
    new_content, n = re.subn(pattern, repl, content)
    if n:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'{path}: {n} fixed')
    else:
        print(f'{path}: no match')
