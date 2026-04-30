#!/usr/bin/env python3
"""Patch zh-TW/home.js to add missing keys and align modal key names."""

FILE = 'src/locales/zh-TW/home.js'
with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    # 1. Add courses.common block before bordeaux
    (
        "    comingSoon: '📅 即將開放',\n\n    bordeaux: {",
        "    comingSoon: '📅 即將開放',\n\n    common: {\n      statusAdmin: '🔓 管理員開放',\n      statusActive: '✅ 開放中',\n      statusPlanning: '📅 課程規劃中',\n      enterAdmin: '管理員進入',\n      enter: '進入課程',\n      explore: '進入探索',\n      comingSoon: '📅 即將開放',\n    },\n\n    bordeaux: {"
    ),
    # 2. Add title and status to bordeaux
    (
        "    bordeaux: {\n      desc: '全方位波爾多產區學習",
        "    bordeaux: {\n      title: '波爾多葡萄酒',\n      statusActive: '✅ 現已開放',\n      statusPlanning: '📅 課程規劃中',\n      desc: '全方位波爾多產區學習"
    ),
    # 3. Fix bordeaux priceHint/startFreeBtn indentation (they were at courses level, not bordeaux)
    (
        "    priceHint: '完整課程 NT$290/月起",
        "      priceHint: '完整課程 NT$290/月起"
    ),
    (
        "    startFreeBtn: '免費開始',\n    viewPlansBtn: '查看訂閱方案 →',\n    courseDetailBtn: '📋 課程說明',",
        "      startFreeBtn: '免費開始',\n      viewPlansBtn: '查看訂閱方案',\n      courseDetailBtn: '📋 課程說明',"
    ),
    # 4. Fix modal compareRow / btn keys
    (
        "      compareFeature: '功能',\n      compareFree: '免費體驗',\n      compareBasicLabel: '完整課程 ⭐',\n      comparePremiumLabel: '頂級方案',\n      priceZero: 'NT$ 0',\n      btnFree: '免費開始體驗',\n      btnBasicPrice: '訂閱完整課程 NT$290/月',\n      btnPremiumPrice: '頂級方案 NT$590/月',",
        "      compareFeature: '功能',\n      compareFree: '免費體驗<br><span class=\"cc-price\">NT$ 0</span>',\n      compareBasic: '完整課程 ⭐<br><span class=\"cc-price\">NT$ {price}/月</span>',\n      comparePremium: '頂級方案<br><span class=\"cc-price\">NT$ {price}/月</span>',\n      btnFree: '免費開始體驗',\n      btnBasicPrice: '訂閱完整課程 NT${price}/月',\n      btnPremiumPrice: '頂級方案 NT${price}/月',"
    ),
    # 5. Fix levels key: points → items, add badge
    (
        "        l1: { name: '基礎入門', points: ['葡萄酒世界地理', '波爾多產區介紹', '主要葡萄品種', '基礎釀造流程', '波爾多分級制度'] },",
        "        l1: { badge: 'Level 1', name: '基礎入門', items: ['葡萄酒世界地理', '波爾多產區介紹', '主要葡萄品種', '基礎釀造流程', '波爾多分級制度'] },"
    ),
    (
        "        l2: { name: '進階學習', points: ['左岸產區深度剖析', '美多克六大村莊', '格拉夫與貝沙克', '土壤與風土關係', '年份差異解析'] },",
        "        l2: { badge: 'Level 2', name: '進階學習', items: ['左岸產區深度剖析', '美多克六大村莊', '格拉夫與貝沙克', '土壤與風土關係', '年份差異解析'] },"
    ),
    (
        "        l3: { name: '深度探索', points: ['右岸聖愛美濃與波美侯', '知名酒莊歷史故事', '地質科學深入分析', '氣候與年份評分', '甜白酒索甸與巴薩克'] },",
        "        l3: { badge: 'Level 3', name: '深度探索', items: ['右岸聖愛美濃與波美侯', '知名酒莊歷史故事', '地質科學深入分析', '氣候與年份評分', '甜白酒索甸與巴薩克'] },"
    ),
    (
        "        l4: { name: '大師課程', points: ['頂級酒莊品飲評析', '波爾多投資與收藏', '餐酒搭配專業指南', '期酒制度 En Primeur', '侍酒師考試準備'] },",
        "        l4: { badge: 'Level 4', name: '大師課程', items: ['頂級酒莊品飲評析', '波爾多投資與收藏', '餐酒搭配專業指南', '期酒制度 En Primeur', '侍酒師考試準備'] },"
    ),
]

ok = 0
fail = 0
for old, new in replacements:
    if old in content:
        content = content.replace(old, new, 1)
        ok += 1
    else:
        print(f'❌ MISS: {repr(old[:70])}')
        fail += 1

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)
print(f'Done: {ok} ok, {fail} missed.')
