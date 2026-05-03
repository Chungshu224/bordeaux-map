"""
Audit ja (Japanese) Bordeaux locale files for untranslated content.
"""
import json, os, re

zh_dir = 'src/locales/zh-TW/lessons/bordeaux'
ja_dir = 'src/locales/ja/lessons/bordeaux'
en_dir = 'src/locales/en/lessons/bordeaux'

def has_japanese(s):
    return bool(re.search(r'[\u3040-\u30ff\u4e00-\u9fff]', s))

def is_proper_noun(s):
    return bool(re.search(
        r'(Ch\u00e2teau|Ch\.|Cabernet|Merlot|Sauvignon|Blanc|Noir|Petit|Verdot|Franc|'
        r'Saint|Pauillac|M\u00e9doc|Pomerol|Graves|Sauternes|Barsac|Margaux|L\u00e9oville|'
        r'Cos |Lynch|Mouton|Latour|Lafite|Haut-Brion|Pichon|CRISP-DM|Prophet|XGBoost|'
        r'Gompertz|LSTM|Liv-ex)', s))

zh_files = sorted(f for f in os.listdir(zh_dir) if f.endswith('.json'))
ja_files = set(f for f in os.listdir(ja_dir) if f.endswith('.json')) if os.path.exists(ja_dir) else set()

missing_files = [f for f in zh_files if f not in ja_files]
present_files = [f for f in zh_files if f in ja_files]

print('=' * 60)
print('波爾多課程 ja 翻譯審查報告')
print('=' * 60)

print()
print('【1】日文版完全缺少的課程檔案 (' + str(len(missing_files)) + ' 個):')
for f in missing_files:
    print('  ' + f)

print()
print('【2】現有日文檔案中的未翻譯內容:')
total_untranslated = 0
file_issues = {}

for fname in present_files:
    with open(os.path.join(ja_dir, fname), encoding='utf-8') as f:
        ja = json.load(f)
    with open(os.path.join(en_dir, fname), encoding='utf-8') as f:
        en = json.load(f)

    untranslated = []
    for key, val in ja.items():
        if not isinstance(val, str): continue
        if has_japanese(val): continue
        if len(val.strip()) <= 5: continue
        if is_proper_noun(val): continue
        en_val = en.get(key, '')
        # Only flag if identical to EN (definitely not translated)
        if val == en_val:
            untranslated.append((key, val))

    if untranslated:
        total_untranslated += len(untranslated)
        file_issues[fname] = untranslated
        print()
        print('  ' + fname + ' (' + str(len(untranslated)) + ' 筆):')
        for key, val in untranslated:
            print('    [' + key + '] ' + val[:80])

if not file_issues:
    print('  現有日文檔案翻譯完整，無明顯未翻譯內容。')

print()
print('=' * 60)
print('摘要')
print('  完全缺少的檔案: ' + str(len(missing_files)) + ' 個')
# Group missing files by level
l1 = [f for f in missing_files if f.startswith('l1')]
l2 = [f for f in missing_files if f.startswith('l2')]
l3 = [f for f in missing_files if f.startswith('l3')]
l4 = [f for f in missing_files if f.startswith('l4')]
if l1: print('    L1: ' + ', '.join(l1))
if l2: print('    L2: ' + ', '.join(l2))
if l3: print('    L3: ' + ', '.join(l3))
if l4: print('    L4: ' + ', '.join(l4))
print('  現有檔案未翻譯筆數: ' + str(total_untranslated))
print('  現有日文檔案數: ' + str(len(present_files)) + ' / ' + str(len(zh_files)))
