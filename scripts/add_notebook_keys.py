#!/usr/bin/env python3
"""Add missing notebook locale keys and fix template references."""

# Add tabNotes, tabCollection, tabProfile, filterAll, shareText, shareBtn, shareCardLogo to all 3 locales
additions = {
    'zh-TW': {
        'after': "    wishlist:     '♡ 想喝',",
        'add': """    shareBtn:     '📤 分享',
    shareCardLogo:'侍酒師的筆記本',
    shareText:    '我的品飲筆記：{name}',
    tabNotes:     '筆記',
    tabCollection:'集章',
    tabProfile:   '品味',
    filterAll:    '全部',
    tannin:       '單寧',"""
    },
    'en': {
        'after': "    wishlist:     '♡ Wishlist',",
        'add': """    shareBtn:     '📤 Share',
    shareCardLogo:"Sommelier's Notebook",
    shareText:    'My tasting note: {name}',
    tabNotes:     'Notes',
    tabCollection:'Collection',
    tabProfile:   'Profile',
    filterAll:    'All',
    tannin:       'Tannin',"""
    },
    'ja': {
        'after': "    wishlist:     '♡ 飲みたい',",
        'add': """    shareBtn:     '📤 シェア',
    shareCardLogo:'ソムリエのノート',
    shareText:    '私のテイスティングノート：{name}',
    tabNotes:     'ノート',
    tabCollection:'コレクション',
    tabProfile:   'プロフィール',
    filterAll:    'すべて',
    tannin:       'タンニン',"""
    },
}

for lang, data in additions.items():
    path = f'src/locales/{lang}/bordeaux.js'
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    after = data['after']
    add = data['add']
    if 'tabNotes' not in content:
        updated = content.replace(after, after + '\n' + add, 1)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(updated)
        print(f'{lang}: ok' if content != updated else f'{lang}: no change')
    else:
        print(f'{lang}: already exists')
