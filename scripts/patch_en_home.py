#!/usr/bin/env python3
"""Patch en/home.js and ja/home.js to add missing keys."""

import os

def patch(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    ok = 0
    fail = 0
    for old, new in replacements:
        if old in content:
            content = content.replace(old, new, 1)
            ok += 1
        else:
            print(f'  ❌ MISS in {filepath}: {repr(old[:70])}')
            fail += 1
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'  {filepath}: {ok} ok, {fail} missed')


# ─── en/home.js ───────────────────────────────────────────────────────────────
en_replacements = [
    # Add common block
    (
        "    comingSoon: '📅 Coming Soon',\n\n    bordeaux: {",
        "    comingSoon: '📅 Coming Soon',\n\n    common: {\n      statusAdmin: '🔓 Admin Access',\n      statusActive: '✅ Now Open',\n      statusPlanning: '📅 Coming Soon',\n      enterAdmin: 'Admin Enter',\n      enter: 'Enter Course',\n      explore: 'Explore',\n      comingSoon: '📅 Coming Soon',\n    },\n\n    bordeaux: {"
    ),
    # Add title + status to bordeaux
    (
        "    bordeaux: {\n      desc: 'Comprehensive Bordeaux",
        "    bordeaux: {\n      title: 'Bordeaux Wine',\n      statusActive: '✅ Now Open',\n      statusPlanning: '📅 Coming Soon',\n      desc: 'Comprehensive Bordeaux"
    ),
    # Fix indentation of priceHint etc.
    (
        "    priceHint: 'Full course from NT$290/mo",
        "      priceHint: 'Full course from NT$290/mo"
    ),
    (
        "    startFreeBtn: 'Start Free',\n    viewPlansBtn: 'View Plans →',\n    courseDetailBtn: '📋 Course Details',",
        "      startFreeBtn: 'Start Free',\n      viewPlansBtn: 'View Plans',\n      courseDetailBtn: '📋 Course Details',"
    ),
    # Fix modal compare keys
    (
        "      compareFeature: 'Feature',\n      compareFree: 'Free Trial',\n      compareBasicLabel: 'Full Course ⭐',\n      comparePremiumLabel: 'Premium',\n      priceZero: 'NT$ 0',\n      btnFree: 'Start Free',\n      btnBasicPrice: 'Subscribe Full Course NT$290/mo',\n      btnPremiumPrice: 'Premium Plan NT$590/mo',",
        "      compareFeature: 'Feature',\n      compareFree: 'Free Trial<br><span class=\"cc-price\">NT$ 0</span>',\n      compareBasic: 'Full Course ⭐<br><span class=\"cc-price\">NT$ {price}/mo</span>',\n      comparePremium: 'Premium<br><span class=\"cc-price\">NT$ {price}/mo</span>',\n      btnFree: 'Start Free',\n      btnBasicPrice: 'Subscribe NT${price}/mo',\n      btnPremiumPrice: 'Premium NT${price}/mo',"
    ),
    # Fix levels points → items + add badge
    (
        "        l1: { name: 'Foundations', points: [",
        "        l1: { badge: 'Level 1', name: 'Foundations', items: ["
    ),
    (
        "        l2: { name: 'Intermediate', points: [",
        "        l2: { badge: 'Level 2', name: 'Intermediate', items: ["
    ),
    (
        "        l3: { name: 'Advanced', points: [",
        "        l3: { badge: 'Level 3', name: 'Advanced', items: ["
    ),
    (
        "        l4: { name: 'Master Class', points: [",
        "        l4: { badge: 'Level 4', name: 'Master Class', items: ["
    ),
]

# ─── ja/home.js ───────────────────────────────────────────────────────────────
# First find what the ja file looks like for these keys
ja_file = 'src/locales/ja/home.js'
with open(ja_file, 'r', encoding='utf-8') as f:
    ja_content = f.read()

# Find comingSoon and bordeaux desc
import re
m = re.search(r"comingSoon: '([^']+)'", ja_content)
ja_coming = m.group(1) if m else '📅 近日公開'
m2 = re.search(r"bordeaux: \{\s*desc: '([^']+)'", ja_content)
ja_bx_desc_start = m2.group(1)[:20] if m2 else ''

print(f'ja comingSoon: {repr(ja_coming)}')
print(f'ja bordeaux desc start: {repr(ja_bx_desc_start)}')

patch('src/locales/en/home.js', en_replacements)
