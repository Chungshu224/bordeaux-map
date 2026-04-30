#!/usr/bin/env python3
"""Apply i18n to GameHubPage.vue — bordeaux.games.hub namespace."""

FILE = 'src/components/bordeaux/GameHubPage.vue'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

fixes = [
    # Template: hub title/subtitle
    (
        '<h1 class="hub-title">🎮 互動練習</h1>',
        '<h1 class="hub-title">{{ $t(\'bordeaux.games.hub.title\') }}</h1>',
    ),
    (
        '<p class="hub-subtitle">選擇一個遊戲開始挑戰</p>',
        '<p class="hub-subtitle">{{ $t(\'bordeaux.games.hub.subtitle\') }}</p>',
    ),
    # Lock label — combine tier label + 解鎖
    (
        '<span class="lock-label">{{ TIER_LABEL[g.minimumTier] }} 解鎖</span>',
        '<span class="lock-label">{{ tierLabel(g.minimumTier) }}</span>',
    ),
    # v-for loop var conflict with useI18n t
    (
        '<span v-for="t in g.tags" :key="t" class="tag">{{ t }}</span>',
        '<span v-for="tag in g.tags" :key="tag" class="tag">{{ tag }}</span>',
    ),
    # Script: add useI18n import
    (
        "import { ref, computed } from 'vue'",
        "import { ref, computed } from 'vue'\nimport { useI18n } from 'vue-i18n'",
    ),
    # Add const { t } after defineEmits
    (
        "defineEmits(['back'])",
        "defineEmits(['back'])\nconst { t } = useI18n()",
    ),
    # Alert lockMsg
    (
        "alert(`🔒 「${game.name}」需要「${TIER_LABEL[game.minimumTier]}」方案才 能使用\\n\\n請升級您的訂閱以解鎖這個遊戲！`)",
        "alert(t('bordeaux.games.hub.lockMsg', { name: game.name, tier: tierLabel(game.minimumTier) }))",
    ),
    # TIER_LABEL object → computed function
    (
        "const TIER_LABEL = {\n  free: '免費',\n  basic: '初階付費',\n  premium: '進階付費'\n}",
        "const tierLabel = (tier) => t(`bordeaux.games.tier.${tier}`)",
    ),
    # GAMES static array → computed
    (
        "const GAMES = [\n  {\n    id:          'map',\n    icon:        '🗺️',\n    name:        '產區競答',\n    desc:        '點擊地圖上的產區，考驗你對波爾多產區位置的認識',\n    tags:        ['地圖互動', '簡單 / 困難', '15–35 題'],\n    accent:      '#f97316',\n    accent2:     '#ef4444',\n    minimumTier: 'basic'\n  },\n  {\n    id:          'bank',\n    icon:        '⚡',\n    name:        '左右岸競速',\n    desc:        '看到 AOC 名稱立刻分類：左岸、右岸，困難模式還加入兩河之間與索甸甜酒帶',\n    tags:        ['快答', '簡單 / 困難', 'Combo 系統'],\n    accent:      '#0ea5e9',\n    accent2:     '#38bdf8',\n    minimumTier: 'basic'\n  },\n  {\n    id:          'vintage',\n    icon:        '🌡️',\n    name:        '年份溫度排列',\n    desc:        '將波爾多年份依夏季均溫由最熱排到最冷，考驗對偉大年份的記 憶',\n    tags:        ['排序', '簡單 / 困難', '5 輪 × 4-5 張'],\n    accent:      '#f59e0b',\n    accent2:     '#d97706',\n    minimumTier: 'basic'\n  },\n  {\n    id:          'grape',\n    icon:        '🍇',\n    name:        '葡萄 × 土壤配對',\n    desc:        '快速判斷哪個品種最愛哪種土，困難模式加入逆向題（土壤 → 品種）',\n    tags:        ['配對', '簡單 / 困難', '錯題回顧'],\n    accent:      '#22c55e',\n    accent2:     '#15803d',\n    minimumTier: 'basic'\n  },  {\n    id:          'label',\n    icon:        '🏷️',\n    name:        '酒標辨識賽',\n    desc:        '看酒標圖片判斷左右岸、村莊級 AOC、党數等級，三種難度挑戰',\n    tags:        ['圖片辨識', '簡單 / 中 / 困難', '錯題回顾'],\n    accent:      '#c8a96e',\n    accent2:     '#92400e',\n    minimumTier: 'basic'\n  },]",
        """const GAMES = computed(() => [
  { id: 'map',     icon: '🗺️', name: t('bordeaux.games.map.name'),     desc: t('bordeaux.games.map.desc'),     tags: t('bordeaux.games.map.tags'),     accent: '#f97316', accent2: '#ef4444', minimumTier: 'basic' },
  { id: 'bank',    icon: '⚡',  name: t('bordeaux.games.bank.name'),    desc: t('bordeaux.games.bank.desc'),    tags: t('bordeaux.games.bank.tags'),    accent: '#0ea5e9', accent2: '#38bdf8', minimumTier: 'basic' },
  { id: 'vintage', icon: '🌡️', name: t('bordeaux.games.vintage.name'), desc: t('bordeaux.games.vintage.desc'), tags: t('bordeaux.games.vintage.tags'), accent: '#f59e0b', accent2: '#d97706', minimumTier: 'basic' },
  { id: 'grape',   icon: '🍇', name: t('bordeaux.games.grape.name'),   desc: t('bordeaux.games.grape.desc'),   tags: t('bordeaux.games.grape.tags'),   accent: '#22c55e', accent2: '#15803d', minimumTier: 'basic' },
  { id: 'label',   icon: '🏷️', name: t('bordeaux.games.label.name'),   desc: t('bordeaux.games.label.desc'),   tags: t('bordeaux.games.label.tags'),   accent: '#c8a96e', accent2: '#92400e', minimumTier: 'basic' },
])""",
    ),
    # stats labels
    (
        "  return [\n    { icon: '🎮', value: played,                          label: '已挑戰遲 戲' },\n    { icon: '📊', value: keys.length,                     label: '全部遲戲' },\n    { icon: '🏅', value: totalBest > 0 ? totalBest : '—', label: '累計最高 分' }\n  ]",
        "  return [\n    { icon: '🎮', value: played,                          label: t('bordeaux.games.hub.statsPlayed') },\n    { icon: '📊', value: keys.length,                     label: t('bordeaux.games.hub.statsTotal') },\n    { icon: '🏅', value: totalBest > 0 ? totalBest : '—', label: t('bordeaux.games.hub.statsBest') },\n  ]",
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

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'{FILE}: {ok} ok, {miss} missed')
