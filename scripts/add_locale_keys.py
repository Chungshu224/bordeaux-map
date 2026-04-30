#!/usr/bin/env python3
"""Add missing locale keys to all 3 home.js locale files."""

# ─── zh-TW ────────────────────────────────────────────────────────────────────
ZH_COMMON_OLD = "    common: {\n      statusAdmin: '🔓 管理員開放',"
ZH_COMMON_NEW = """    common: {
      satellite: '衛星',
      statusAdmin: '🔓 管理員開放',"""

ZH_LABELS = """
    labels: {
      bordeaux:   '🏰 波爾多',
      bourgogne:  '🍇 布根地',
      loire:      '🌿 羅亞爾',
      italy:      '🇮🇹 義大利',
      spain:      '🇪🇸 西班牙',
      germany:    '🇩🇪 德國',
      portugal:   '🇵🇹 葡萄牙',
      hungary:    '🇭🇺 匈牙利',
      australia:  '🦘 澳洲',
      newzealand: '🥝 紐西蘭',
      california: '🍷 加州',
    },
    groupLabels: {
      france:   '🇫🇷 法國',
      europe:   '🌍 歐洲',
      newworld: '🌏 新世界',
    },"""

ZH_HERO_STUDENT_OLD = "    trust: '免費註冊・無需信用卡・ Level 1 內容全面開放',"
ZH_HERO_STUDENT_NEW = "    trust: '免費註冊・無需信用卡・ Level 1 內容全面開放',\n    studentFallback: '學員',"

# Insert labels+groupLabels before bordeaux block
ZH_BX_OLD = "\n    bordeaux: {"
ZH_BX_NEW = ZH_LABELS + "\n    bordeaux: {"

# ─── en ───────────────────────────────────────────────────────────────────────
EN_COMMON_OLD = "    common: {\n      statusAdmin: '🔓 Admin Access',"
EN_COMMON_NEW = """    common: {
      satellite: 'Sat.',
      statusAdmin: '🔓 Admin Access',"""

EN_LABELS = """
    labels: {
      bordeaux:   '🏰 Bordeaux',
      bourgogne:  '🍇 Burgundy',
      loire:      '🌿 Loire',
      italy:      '🇮🇹 Italy',
      spain:      '🇪🇸 Spain',
      germany:    '🇩🇪 Germany',
      portugal:   '🇵🇹 Portugal',
      hungary:    '🇭🇺 Hungary',
      australia:  '🦘 Australia',
      newzealand: '🥝 New Zealand',
      california: '🍷 California',
    },
    groupLabels: {
      france:   '🇫🇷 France',
      europe:   '🌍 Europe',
      newworld: '🌏 New World',
    },"""

EN_HERO_STUDENT_OLD = "    trust: 'Free sign-up · No credit card · Level 1 fully open',"
EN_HERO_STUDENT_NEW = "    trust: 'Free sign-up · No credit card · Level 1 fully open',\n    studentFallback: 'Student',"

EN_BX_OLD = "\n    bordeaux: {"
EN_BX_NEW = EN_LABELS + "\n    bordeaux: {"

# ─── ja ───────────────────────────────────────────────────────────────────────
JA_COMMON_OLD = "    common: {\n      statusAdmin: '🔓 管理者アクセス',"
JA_COMMON_NEW = """    common: {
      satellite: '衛星',
      statusAdmin: '🔓 管理者アクセス',"""

JA_LABELS = """
    labels: {
      bordeaux:   '🏰 ボルドー',
      bourgogne:  '🍇 ブルゴーニュ',
      loire:      '🌿 ロワール',
      italy:      '🇮🇹 イタリア',
      spain:      '🇪🇸 スペイン',
      germany:    '🇩🇪 ドイツ',
      portugal:   '🇵🇹 ポルトガル',
      hungary:    '🇭🇺 ハンガリー',
      australia:  '🦘 オーストラリア',
      newzealand: '🥝 ニュージーランド',
      california: '🍷 カリフォルニア',
    },
    groupLabels: {
      france:   '🇫🇷 フランス',
      europe:   '🌍 ヨーロッパ',
      newworld: '🌏 新世界',
    },"""

JA_HERO_STUDENT_OLD = "    trust: '無料登録・クレジットカード不要・Level 1 全公開',"
JA_HERO_STUDENT_NEW = "    trust: '無料登録・クレジットカード不要・Level 1 全公開',\n    studentFallback: '受講生',"

JA_BX_OLD = "\n    bordeaux: {"
JA_BX_NEW = JA_LABELS + "\n    bordeaux: {"

PATCHES = [
    ('src/locales/zh-TW/home.js', [
        (ZH_COMMON_OLD, ZH_COMMON_NEW),
        (ZH_HERO_STUDENT_OLD, ZH_HERO_STUDENT_NEW),
        (ZH_BX_OLD, ZH_BX_NEW),
    ]),
    ('src/locales/en/home.js', [
        (EN_COMMON_OLD, EN_COMMON_NEW),
        (EN_HERO_STUDENT_OLD, EN_HERO_STUDENT_NEW),
        (EN_BX_OLD, EN_BX_NEW),
    ]),
    ('src/locales/ja/home.js', [
        (JA_COMMON_OLD, JA_COMMON_NEW),
        (JA_HERO_STUDENT_OLD, JA_HERO_STUDENT_NEW),
        (JA_BX_OLD, JA_BX_NEW),
    ]),
]

for filepath, ops in PATCHES:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    ok = 0
    for old, new in ops:
        if old in content:
            content = content.replace(old, new, 1)
            ok += 1
        else:
            print(f'MISS in {filepath}: {repr(old[:60])}')
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'{filepath}: {ok}/3 ok')
