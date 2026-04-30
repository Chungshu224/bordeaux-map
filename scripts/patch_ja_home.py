#!/usr/bin/env python3
"""Patch ja/home.js to add missing keys."""

FILE = 'src/locales/ja/home.js'
with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    # Add common block
    (
        "    comingSoon: '📅 近日公開',\n\n    bordeaux: {",
        "    comingSoon: '📅 近日公開',\n\n    common: {\n      statusAdmin: '🔓 管理者アクセス',\n      statusActive: '✅ 公開中',\n      statusPlanning: '📅 近日公開',\n      enterAdmin: '管理者として入る',\n      enter: 'コースへ進む',\n      explore: '探索する',\n      comingSoon: '📅 近日公開',\n    },\n\n    bordeaux: {"
    ),
    # Add title + status to bordeaux
    (
        "    bordeaux: {\n      desc: 'ボルドーの総合的な学習",
        "    bordeaux: {\n      title: 'ボルドーワイン',\n      statusActive: '✅ 今すぐ開講',\n      statusPlanning: '📅 近日公開',\n      desc: 'ボルドーの総合的な学習"
    ),
    # Fix indentation of priceHint etc.
    (
        "    priceHint: '完全コース NT$290/月",
        "      priceHint: '完全コース NT$290/月"
    ),
    (
        "    startFreeBtn: '無料で始める',\n    viewPlansBtn: 'プランを見る →',\n    courseDetailBtn: '📋 コース詳細',",
        "      startFreeBtn: '無料で始める',\n      viewPlansBtn: 'プランを見る',\n      courseDetailBtn: '📋 コース詳細',"
    ),
    # Fix modal compare keys
    (
        "      compareFeature: '機能',\n      compareFree: '無料体験',\n      compareBasicLabel: '完全コース ⭐',\n      comparePremiumLabel: 'プレミアム',\n      priceZero: 'NT$ 0',\n      btnFree: '無料体験を始める',\n      btnBasicPrice: '完全コース NT$290/月 を購読',\n      btnPremiumPrice: 'プレミアムプラン NT$590/月',",
        "      compareFeature: '機能',\n      compareFree: '無料体験<br><span class=\"cc-price\">NT$ 0</span>',\n      compareBasic: '完全コース ⭐<br><span class=\"cc-price\">NT$ {price}/月</span>',\n      comparePremium: 'プレミアム<br><span class=\"cc-price\">NT$ {price}/月</span>',\n      btnFree: '無料体験を始める',\n      btnBasicPrice: '購読 NT${price}/月',\n      btnPremiumPrice: 'プレミアム NT${price}/月',"
    ),
    # Fix levels points → items + add badge
    (
        "        l1: { name: '基礎入門', points: [",
        "        l1: { badge: 'Level 1', name: '基礎入門', items: ["
    ),
    (
        "        l2: { name: '中級学習', points: [",
        "        l2: { badge: 'Level 2', name: '中級学習', items: ["
    ),
    (
        "        l3: { name: '上級探索', points: [",
        "        l3: { badge: 'Level 3', name: '上級探索', items: ["
    ),
    (
        "        l4: { name: 'マスタークラス', points: [",
        "        l4: { badge: 'Level 4', name: 'マスタークラス', items: ["
    ),
]

ok = 0
fail = 0
for old, new in replacements:
    if old in content:
        content = content.replace(old, new, 1)
        ok += 1
    else:
        print(f'  ❌ MISS: {repr(old[:70])}')
        fail += 1

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)
print(f'Done: {ok} ok, {fail} missed.')
