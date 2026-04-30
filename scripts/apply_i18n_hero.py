#!/usr/bin/env python3
"""Apply i18n replacements to PlatformHome.vue – hero/courses sections."""
import re

FILE = 'src/components/PlatformHome.vue'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    # trust line
    (
        '          <p class="cta-trust">免費註冊・無需信用卡・ Level 1 內容全面開放</p>',
        "          <p class=\"cta-trust\">{{ $t('home.hero.trust') }}</p>"
    ),
    # courses section header
    (
        '          <h2>探索世界產區</h2>\n          <p>每個產區獨立課程，結合互動衛星地圖・分級測驗・品飲筆記，系統化建立葡萄酒知識</p>',
        "          <h2>{{ $t('home.courses.sectionTitle') }}</h2>\n          <p>{{ $t('home.courses.sectionDesc') }}</p>"
    ),
]

for old, new in replacements:
    if old in content:
        content = content.replace(old, new, 1)
        print(f'✅  replaced: {repr(old[:50])}')
    else:
        print(f'❌  NOT FOUND: {repr(old[:50])}')

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)
print('Done.')
