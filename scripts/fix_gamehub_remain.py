#!/usr/bin/env python3
"""Fix remaining 3 replacements in GameHubPage.vue."""

FILE = 'src/components/bordeaux/GameHubPage.vue'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

fixes = [
    (
        'alert(`\U0001f512 \u300c${game.name}\u300d\u9700\u8981\u300c${TIER_LABEL[game.minimumTier]}\u300d\u65b9\u6848\u624d\u80fd\u4f7f\u7528\\n\\n\u8acb\u5347\u7d1a\u60a8\u7684\u8a02\u95b1\u4ee5\u89e3\u9396\u9019\u500b\u9059\u6232\uff01`)',
        "alert(t('bordeaux.games.hub.lockMsg', { name: game.name, tier: tierLabel(game.minimumTier) }))",
    ),
]

ok = 0
miss = 0
for old, new in fixes:
    if old in content:
        content = content.replace(old, new, 1)
        ok += 1
    else:
        print(f'MISS: {repr(old[:80])}')
        miss += 1

# GAMES array — use regex-like manual detection
games_marker = "const GAMES = [\n  {\n    id:          'map',"
if games_marker in content:
    # Find the block end
    start = content.index(games_marker)
    end = content.index(",]", start) + 2
    old_block = content[start:end]
    new_block = """const GAMES = computed(() => [
  { id: 'map',     icon: '\U0001f5fa\ufe0f', name: t('bordeaux.games.map.name'),     desc: t('bordeaux.games.map.desc'),     tags: t('bordeaux.games.map.tags'),     accent: '#f97316', accent2: '#ef4444', minimumTier: 'basic' },
  { id: 'bank',    icon: '\u26a1',  name: t('bordeaux.games.bank.name'),    desc: t('bordeaux.games.bank.desc'),    tags: t('bordeaux.games.bank.tags'),    accent: '#0ea5e9', accent2: '#38bdf8', minimumTier: 'basic' },
  { id: 'vintage', icon: '\U0001f321\ufe0f', name: t('bordeaux.games.vintage.name'), desc: t('bordeaux.games.vintage.desc'), tags: t('bordeaux.games.vintage.tags'), accent: '#f59e0b', accent2: '#d97706', minimumTier: 'basic' },
  { id: 'grape',   icon: '\U0001f347', name: t('bordeaux.games.grape.name'),   desc: t('bordeaux.games.grape.desc'),   tags: t('bordeaux.games.grape.tags'),   accent: '#22c55e', accent2: '#15803d', minimumTier: 'basic' },
  { id: 'label',   icon: '\U0001f3f7\ufe0f', name: t('bordeaux.games.label.name'),   desc: t('bordeaux.games.label.desc'),   tags: t('bordeaux.games.label.tags'),   accent: '#c8a96e', accent2: '#92400e', minimumTier: 'basic' },
])"""
    content = content[:start] + new_block + content[end:]
    print('GAMES: ok')
    ok += 1
else:
    print('GAMES: miss (marker not found)')
    miss += 1

# stats labels
stats_marker = "{ icon: '\U0001f3ae', value: played,"
if stats_marker in content:
    old_stats = "  return [\n    { icon: '\U0001f3ae', value: played,                          label: '\u5df2 \u6311\u6230\u9072\u6232' },\n    { icon: '\U0001f4ca', value: keys.length,                     label: '\u5168\u90e8\u9072\u6232' },\n    { icon: '\U0001f3c5', value: totalBest > 0 ? totalBest : '\u2014', label: '\u7d2f\u8a08\u6700\u9ad8 \u5206' }\n  ]"
    new_stats = "  return [\n    { icon: '\U0001f3ae', value: played,                          label: t('bordeaux.games.hub.statsPlayed') },\n    { icon: '\U0001f4ca', value: keys.length,                     label: t('bordeaux.games.hub.statsTotal') },\n    { icon: '\U0001f3c5', value: totalBest > 0 ? totalBest : '\u2014', label: t('bordeaux.games.hub.statsBest') },\n  ]"
    if old_stats in content:
        content = content.replace(old_stats, new_stats, 1)
        print('stats: ok')
        ok += 1
    else:
        # find exact
        idx = content.find("{ icon: '\U0001f3ae', value: played,")
        print(f'stats miss, context: {repr(content[idx-4:idx+120])}')
        miss += 1
else:
    print('stats: miss (marker not found)')
    miss += 1

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'\n{FILE}: {ok} ok, {miss} missed')
