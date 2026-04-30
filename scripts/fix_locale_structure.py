#!/usr/bin/env python3
"""Fix structure in all 3 home.js locale files:
Move priceHint/startFreeBtn/viewPlansBtn/courseDetailBtn into bordeaux block,
and remove stray top-level enterCourse/enterExplore/adminEnter/comingSoon.
"""

import os

FILES = [
    'src/locales/zh-TW/home.js',
    'src/locales/en/home.js',
    'src/locales/ja/home.js',
]

ZH = {
    'stray_block': (
        "    },\n"
        "      priceHint: '完整課程 NT$290/月起・免費體驗 Level 1・全通行證 NT$590/月解鎖 8 大產區',\n"
        "      startFreeBtn: '免費開始',\n"
        "      viewPlansBtn: '查看訂閱方案',\n"
        "      courseDetailBtn: '📋 課程說明',\n"
        "    enterCourse: '進入課程',\n"
        "    enterExplore: '進入探索',\n"
        "    adminEnter: '管理員進入',\n"
        "    comingSoon: '📅 即將開放',\n"
    ),
    'bx_open': "    bordeaux: {\n      title: '波爾多葡萄酒',\n",
    'replacement_stray': "    },\n    enterCourse: '進入課程',\n    enterExplore: '進入探索',\n    adminEnter: '管理員進入',\n    comingSoon: '📅 即將開放',\n",
    'replacement_bx': (
        "    bordeaux: {\n"
        "      title: '波爾多葡萄酒',\n"
        "      priceHint: '完整課程 NT$290/月起・免費體驗 Level 1・全通行證 NT$590/月解鎖 8 大產區',\n"
        "      startFreeBtn: '免費開始',\n"
        "      viewPlansBtn: '查看訂閱方案',\n"
        "      courseDetailBtn: '📋 課程說明',\n"
    ),
}

EN = {
    'stray_block': (
        "    },\n"
        "      priceHint: 'Full course from NT$290/mo · Free Level 1 · All-access NT$590/mo for 8 regions',\n"
        "      startFreeBtn: 'Start Free',\n"
        "      viewPlansBtn: 'View Plans',\n"
        "      courseDetailBtn: '📋 Course Details',\n"
        "    enterCourse: 'Enter Course',\n"
        "    enterExplore: 'Explore',\n"
        "    adminEnter: 'Admin Enter',\n"
        "    comingSoon: '📅 Coming Soon',\n"
    ),
    'bx_open': "    bordeaux: {\n      title: 'Bordeaux Wine',\n",
    'replacement_stray': "    },\n    enterCourse: 'Enter Course',\n    enterExplore: 'Explore',\n    adminEnter: 'Admin Enter',\n    comingSoon: '📅 Coming Soon',\n",
    'replacement_bx': (
        "    bordeaux: {\n"
        "      title: 'Bordeaux Wine',\n"
        "      priceHint: 'Full course from NT$290/mo · Free Level 1 · All-access NT$590/mo for 8 regions',\n"
        "      startFreeBtn: 'Start Free',\n"
        "      viewPlansBtn: 'View Plans',\n"
        "      courseDetailBtn: '📋 Course Details',\n"
    ),
}

JA = {
    'stray_block': (
        "    },\n"
        "      priceHint: '完全コース NT$290/月〜・Level 1 無料体験・全アクセス NT$590/月で8産地解錠',\n"
        "      startFreeBtn: '無料で始める',\n"
        "      viewPlansBtn: 'プランを見る',\n"
        "      courseDetailBtn: '📋 コース詳細',\n"
        "    enterCourse: 'コースへ進む',\n"
        "    enterExplore: '探索する',\n"
        "    adminEnter: '管理者として入る',\n"
        "    comingSoon: '📅 近日公開',\n"
    ),
    'bx_open': "    bordeaux: {\n      title: 'ボルドーワイン',\n",
    'replacement_stray': "    },\n    enterCourse: 'コースへ進む',\n    enterExplore: '探索する',\n    adminEnter: '管理者として入る',\n    comingSoon: '📅 近日公開',\n",
    'replacement_bx': (
        "    bordeaux: {\n"
        "      title: 'ボルドーワイン',\n"
        "      priceHint: '完全コース NT$290/月〜・Level 1 無料体験・全アクセス NT$590/月で8産地解錠',\n"
        "      startFreeBtn: '無料で始める',\n"
        "      viewPlansBtn: 'プランを見る',\n"
        "      courseDetailBtn: '📋 コース詳細',\n"
    ),
}

PATCHES = {
    'src/locales/zh-TW/home.js': ZH,
    'src/locales/en/home.js': EN,
    'src/locales/ja/home.js': JA,
}

for filepath, p in PATCHES.items():
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if p['stray_block'] in content:
        content = content.replace(p['stray_block'], p['replacement_stray'], 1)
        content = content.replace(p['bx_open'], p['replacement_bx'], 1)
        print(f'✅ Fixed {filepath}')
    else:
        print(f'❌ stray_block not found in {filepath}')
        # Debug: look for priceHint
        import re
        m = re.search(r'priceHint.*', content)
        if m:
            print(f'   priceHint line: {repr(m.group()[:80])}')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print('Done.')
