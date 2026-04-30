#!/usr/bin/env python3
"""Fix last 2 GameHubPage.vue replacements."""

FILE = 'src/components/bordeaux/GameHubPage.vue'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix 1: alert — exact bytes
old1 = 'alert(`\U0001f512 \u300c${game.name}\u300d\u9700\u8981\u300c${TIER_LABEL[game.minimumTier]}\u300d\u65b9\u6848\u624d\u80fd\u4f7f\u7528\\n\\n\u8acb\u5347\u7d1a\u60a8\u7684\u8a02\u95b1\u4ee5\u89e3\u9396\u9019\u500b\u9059\u6232\uff01`)'
new1 = "alert(t('bordeaux.games.hub.lockMsg', { name: game.name, tier: tierLabel(game.minimumTier) }))"
if old1 in content:
    content = content.replace(old1, new1, 1)
    print('alert: ok')
else:
    # Try alternate
    import re
    pattern = r"alert\(`[^`]+`\)"
    match = re.search(pattern, content)
    if match:
        print(f'alert regex found: {repr(match.group())}')
        content = content[:match.start()] + new1 + content[match.end():]
        print('alert: fixed via regex')
    else:
        print('alert: not found')

# Fix 2: stats labels
old2 = "label: '\u5df2\u6311\u6230\u9072\u6232' },\n    { icon: '\U0001f4ca', value: keys.length,                     label: '\u5168\u90e8\u9072\u6232' },\n    { icon: '\U0001f3c5', value: totalBest > 0 ? totalBest : '\u2014', label: '\u7d2f\u8a08\u6700\u9ad8\u5206' }\n  ]"
new2 = "label: t('bordeaux.games.hub.statsPlayed') },\n    { icon: '\U0001f4ca', value: keys.length,                     label: t('bordeaux.games.hub.statsTotal') },\n    { icon: '\U0001f3c5', value: totalBest > 0 ? totalBest : '\u2014', label: t('bordeaux.games.hub.statsBest') },\n  ]"
if old2 in content:
    content = content.replace(old2, new2, 1)
    print('stats: ok')
else:
    # try regex
    import re
    pattern = r"label: '[\u5df2\u5df2\u6311\u6230][^']*' \},.*?label: '[^']*' \}\s*\]"
    m = re.search(pattern, content, re.DOTALL)
    if m:
        print(f'stats regex: {repr(m.group()[:100])}')
    else:
        idx = content.find('\u5df2\u6311\u6230')
        if idx >= 0:
            print(f'stats context: {repr(content[idx-30:idx+200])}')
        else:
            print('stats: not found at all')

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)
