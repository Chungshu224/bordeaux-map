"""
Audit zh-TW Bordeaux locale files for untranslated content.
"""
import json, os, re

zh_dir = 'src/locales/zh-TW/lessons/bordeaux'
en_dir = 'src/locales/en/lessons/bordeaux'

def has_cjk(s):
    return bool(re.search(r'[\u4e00-\u9fff\u3040-\u30ff]', s))

def is_proper_noun(s):
    """Skip proper nouns: Château names, AOC names, grape varieties, etc."""
    proper_patterns = [
        r'Château',
        r'Ch\.',
        r'^(Cabernet|Merlot|Sauvignon|Blanc|Noir|Petit|Verdot|Franc)',
        r'^(Saint|Pauillac|Médoc|Pomerol|Graves|Sauternes|Barsac|Margaux)',
        r'^(Léoville|Cos|Lynch|Mouton|Latour|Lafite|Haut-Brion|Pichon)',
        r'^\d+[\.\-\d°C%]+$',  # numbers only
    ]
    for p in proper_patterns:
        if re.search(p, s):
            return True
    return False

print('=' * 60)
print('波爾多課程 zh-TW 翻譯審查報告')
print('=' * 60)

categories = {
    'internal_labels': [],    # 內部佔位標題 (L3-5 Part 3A 等)
    'proper_nouns': [],       # 固有名詞 (酒莊/產區/品種)
    'content_untranslated': [], # 真正未翻譯的內容
    'punctuation_diff': [],   # 只有標點符號差異
}

for fname in sorted(os.listdir(zh_dir)):
    if not fname.endswith('.json'):
        continue
    with open(os.path.join(zh_dir, fname), encoding='utf-8') as f:
        zh = json.load(f)
    en_path = os.path.join(en_dir, fname)
    with open(en_path, encoding='utf-8') as f:
        en = json.load(f)

    for key, val in zh.items():
        if not isinstance(val, str):
            continue
        if has_cjk(val):
            continue
        if len(val.strip()) <= 3:
            continue

        en_val = en.get(key, '')
        
        # Internal code labels
        if re.match(r'^L\d+-\d+ Part \d+[A-Z]?$', val):
            categories['internal_labels'].append((fname, key, val, en_val))
            continue
        
        # Proper nouns
        if is_proper_noun(val):
            categories['proper_nouns'].append((fname, key, val))
            continue
        
        # Punctuation-only difference (normalize and compare)
        zh_norm = re.sub(r'[\u2010-\u2015\uff0d]', '-', val)
        en_norm = re.sub(r'[\u2010-\u2015\uff0d]', '-', en_val) if en_val else ''
        if zh_norm.replace('（','(').replace('）',')').replace('、',';') == en_norm:
            categories['punctuation_diff'].append((fname, key, val, en_val))
            continue
        
        # Truly untranslated
        categories['content_untranslated'].append((fname, key, val, en_val))

print()
print('【1】內部佔位標題（需補充正式中文標題）:')
if categories['internal_labels']:
    for fname, key, zh_val, en_val in categories['internal_labels']:
        print(f'  {fname} [{key}]')
        print(f'    現值: {zh_val}  |  EN: {en_val}')
else:
    print('  無')

print()
print('【2】真正未翻譯的內容字串:')
if categories['content_untranslated']:
    for fname, key, zh_val, en_val in categories['content_untranslated']:
        print(f'  {fname} [{key}]')
        print(f'    ZH: {zh_val[:80]}')
        print(f'    EN: {str(en_val)[:80]}')
else:
    print('  無')

print()
print('【3】只有標點符號差異（ZH 用全形/特殊符號，EN 用半形）:')
if categories['punctuation_diff']:
    for fname, key, zh_val, en_val in categories['punctuation_diff']:
        print(f'  {fname} [{key}]')
else:
    print('  無')

print()
print(f'【4】固有名詞（酒莊/產區/葡萄品種，中英日相同，正常）: {len(categories["proper_nouns"])} 項')

print()
print('=' * 60)
print(f'摘要: 需修正項目')
print(f'  內部標題待補: {len(categories["internal_labels"])} 筆')
print(f'  未翻譯內容:   {len(categories["content_untranslated"])} 筆')
print(f'  標點符號差異: {len(categories["punctuation_diff"])} 筆')
print(f'  固有名詞(OK): {len(categories["proper_nouns"])} 筆')
