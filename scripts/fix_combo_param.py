#!/usr/bin/env python3
files = ['src/components/bordeaux/BankQuizPage.vue',
         'src/components/bordeaux/GrapeSoilMatchPage.vue']
for path in files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    old = "{ n: streak, mult: comboMult }"
    new = "{ streak: streak, mult: comboMult }"
    updated = content.replace(old, new)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(updated)
    print(f'{path}: {"updated" if content != updated else "no change"}')
