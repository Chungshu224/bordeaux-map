#!/usr/bin/env python3
"""Apply i18n to LevelSelection.vue — bordeaux namespace."""

FILE = 'src/components/bordeaux/LevelSelection.vue'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

fixes = [
    # ── Template: CourseHomeLayout props ────────────────────────────────────────
    (
        '    breadcrumb-country="法國・西南法"',
        '    :breadcrumb-country="$t(\'bordeaux.hero.breadcrumbCountry\')"',
    ),
    # RegionHero props
    (
        '      tagline="法國西南・1855 分級・左右岸傳奇"',
        '      :tagline="$t(\'bordeaux.hero.tagline\')"',
    ),
    (
        '      title="波爾多葡萄酒"',
        '      :title="$t(\'bordeaux.hero.title\')"',
    ),
    (
        '      description="從加倫河左岸的卡本內傳奇，到右岸聖愛美濃與玻美侯的梅洛王國——系統化掌握全球最具代表性的葡萄酒產區。"',
        '      :description="$t(\'bordeaux.hero.description\')"',
    ),
    # LevelTrack props
    (
        '      title="選擇課程階段"',
        '      :title="$t(\'bordeaux.levelTrack.title\')"',
    ),
    (
        '      subtitle="從基礎入門到精英大師，循序漸進地掌握波爾多葡萄酒的完整知識體系。"',
        '      :subtitle="$t(\'bordeaux.levelTrack.subtitle\')"',
    ),
    # RegionStoryGrid prop
    (
        '      title="為什麼學習波爾多葡萄酒？"',
        '      :title="$t(\'bordeaux.storyGrid.title\')"',
    ),
    # Progress modal title
    (
        '          <h2>📊 學習進度</h2>',
        '          <h2>{{ $t(\'bordeaux.progress.modalTitle\') }}</h2>',
    ),
    # Progress modal stats
    (
        '                <span class="pm-lbl">已完成課程</span>',
        '                <span class="pm-lbl">{{ $t(\'bordeaux.progress.modalCompleted\') }}</span>',
    ),
    (
        '                <span class="pm-lbl">總課程數</span>',
        '                <span class="pm-lbl">{{ $t(\'bordeaux.progress.modalTotal\') }}</span>',
    ),
    # Achievement modal title
    (
        '            <h3>🏆 學習成就</h3>',
        '            <h3>{{ $t(\'bordeaux.achievements.modalTitle\') }}</h3>',
    ),
    # ── Script: add useI18n import ───────────────────────────────────────────────
    (
        "import { ref, computed } from 'vue'",
        "import { ref, computed } from 'vue'\nimport { useI18n } from 'vue-i18n'",
    ),
    # Add const { t } after theme line
    (
        "const theme = getTheme('bordeaux')",
        "const theme = getTheme('bordeaux')\nconst { t } = useI18n()",
    ),
    # heroButtonText computed
    (
        "  if (totalProgressPct.value === 0) return '開始學習'\n  if (totalProgressPct.value >= 100) return '重新複習'\n  if (levelProgress(n) > 0) return `繼續 Level ${n}`\n  return `開始 Level ${n}`",
        "  if (totalProgressPct.value === 0) return t('bordeaux.progress.btnStart')\n  if (totalProgressPct.value >= 100) return t('bordeaux.progress.btnReview')\n  if (levelProgress(n) > 0) return t('bordeaux.progress.btnContinue', { n })\n  return t('bordeaux.progress.btnStartLevel', { n })",
    ),
    # progressHeadline computed
    (
        "  if (totalProgressPct.value === 0) return '開始你的波爾多葡萄酒之旅'\n  if (totalProgressPct.value >= 100) return '🎉 已完成全部課程，恭喜成為波爾多葡萄酒達人！'\n  return `已完成 ${totalCompletedCount.value} / ${totalLessonCount.value} 課`",
        "  if (totalProgressPct.value === 0) return t('bordeaux.progress.headlineStart')\n  if (totalProgressPct.value >= 100) return t('bordeaux.progress.headlineComplete')\n  return t('bordeaux.progress.headlineProgress', { done: totalCompletedCount.value, total: totalLessonCount.value })",
    ),
    # progressSubline computed
    (
        "  if (totalProgressPct.value === 0) return '從 Level 1 基礎入門開始'\n  if (totalProgressPct.value >= 100) return ''\n  const n = firstActionableLevel()\n  const titles = { 1: '基礎入門', 2: '中級進階', 3: '高級專業', 4: '精英大師' }\n  return `當前階段：Level ${n} · ${titles[n]}`",
        "  if (totalProgressPct.value === 0) return t('bordeaux.progress.sublineStart')\n  if (totalProgressPct.value >= 100) return ''\n  const n = firstActionableLevel()\n  const titles = t('bordeaux.levels.titles')\n  return t('bordeaux.progress.sublineLevel', { n, title: titles[n] })",
    ),
    # heroStats — change from const to computed
    (
        "const heroStats = [\n  { value: '60+',  label: 'AOC 法定產區' },\n  { value: '1855', label: '列級酒莊分級' },\n  { value: '7000+', label: '酒莊與名家' }\n]",
        "const heroStats = computed(() => t('bordeaux.hero.stats'))",
    ),
    # quickNavItems — update desc strings
    (
        "  { key: 'map',          desc: '互動式波爾多產區地圖・地質・氣候' },\n  { key: 'games',        desc: '產區競答・左右岸・年份溫度・葡萄土壤' },\n  { key: 'achievements', desc: `${achievementCount.value} 個已解鎖徽章` },\n  { key: 'progress',     desc: `${totalProgressPct.value}% 完成・${totalCompletedCount.value} 課` },\n  { key: 'notebook',     desc: '記錄品飲體驗・年份・氣候參考' }",
        "  { key: 'map',          desc: t('bordeaux.quickNav.mapDesc') },\n  { key: 'games',        desc: t('bordeaux.quickNav.gamesDesc') },\n  { key: 'achievements', desc: t('bordeaux.quickNav.achievementsDesc', { count: achievementCount.value }) },\n  { key: 'progress',     desc: t('bordeaux.quickNav.progressDesc', { pct: totalProgressPct.value, count: totalCompletedCount.value }) },\n  { key: 'notebook',     desc: t('bordeaux.quickNav.notebookDesc') }",
    ),
    # levelData — replace Chinese strings
    (
        "    title: '基礎入門',\n    subtitle: 'Level 1',\n    icon: '🌱',\n    description: '建立波爾多葡萄酒的基礎認知，了解地理環境、主要品種與基本釀造工藝。',\n    tags: ['地理位置與氣候', '主要葡萄品種', '左岸右岸差異', '品酒基礎技巧'],",
        "    title: t('bordeaux.levels.l1.title'),\n    subtitle: 'Level 1',\n    icon: '🌱',\n    description: t('bordeaux.levels.l1.desc'),\n    tags: t('bordeaux.levels.l1.tags'),",
    ),
    (
        "    title: '中級進階',\n    subtitle: 'Level 2',\n    icon: '🌿',\n    description: '深入了解波爾多各產區特色與風格差異，掌握專業品鑑與分析技能。',\n    tags: ['左岸四大村莊', '右岸精品產區', '風土條件分析', '投資收藏價值'],",
        "    title: t('bordeaux.levels.l2.title'),\n    subtitle: 'Level 2',\n    icon: '🌿',\n    description: t('bordeaux.levels.l2.desc'),\n    tags: t('bordeaux.levels.l2.tags'),",
    ),
    (
        "    unlockHint: '完成 Level 1 綜合評量後解鎖'",
        "    unlockHint: t('bordeaux.levels.l2.unlockHint')",
    ),
    (
        "    title: '高級專業',\n    subtitle: 'Level 3',\n    icon: '🌳',\n    description: '掌握複雜的風土條件與品質評估，深入理解氣候變遷、土壤科學與市場趨勢。',\n    tags: ['氣候變遷分析', '土壤科學研究', '甜酒專業技術', '市場投資分析'],",
        "    title: t('bordeaux.levels.l3.title'),\n    subtitle: 'Level 3',\n    icon: '🌳',\n    description: t('bordeaux.levels.l3.desc'),\n    tags: t('bordeaux.levels.l3.tags'),",
    ),
    (
        "    unlockHint: '完成 Level 2 綜合評量後解鎖'",
        "    unlockHint: t('bordeaux.levels.l3.unlockHint')",
    ),
    (
        "    title: '精英大師',\n    subtitle: 'Level 4',\n    icon: '🏆',\n    description: '專業分析與綜合評估能力培養，成為波爾多葡萄酒領域的專業顧問。',\n    tags: ['專業論文研究', '商業案例分析', '行業趨勢預測', '國際市場洞察'],",
        "    title: t('bordeaux.levels.l4.title'),\n    subtitle: 'Level 4',\n    icon: '🏆',\n    description: t('bordeaux.levels.l4.desc'),\n    tags: t('bordeaux.levels.l4.tags'),",
    ),
    (
        "    unlockHint: '完成 Level 3 綜合評量後解鎖'",
        "    unlockHint: t('bordeaux.levels.l4.unlockHint')",
    ),
    # overviewItems — replace with computed
    (
        "const overviewItems = [\n  { icon: '🏰', title: '1855 列級酒莊', desc: '拿破崙三世欽定的世界第一個葡萄酒分級系統，五大一級酒莊至今仍是全球收藏指標。' },\n  { icon: '🌊', title: '左右岸雙傳奇', desc: '加倫河將波爾多一分為二：左岸卡本內主導的厚實結構，右岸梅洛王國的圓潤豐美。' },\n  { icon: '🍇', title: '經典混釀美學', desc: 'Cabernet Sauvignon、Merlot、Cabernet Franc 等品種混釀，是波爾多風味平衡的核心精髓。' },\n  { icon: '🍯', title: '貴腐甜酒之王', desc: 'Sauternes 與 Barsac 的貴腐黴菌奇蹟，造就 Château d'Yquem 等百年甜酒傳奇。' }\n]",
        "const overviewItems = computed(() => t('bordeaux.storyGrid.items'))",
    ),
]

ok = 0
miss = 0
for old, new in fixes:
    if old in content:
        content = content.replace(old, new, 1)
        ok += 1
    else:
        print(f'MISS: {repr(old[:70])}')
        miss += 1

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'{FILE}: {ok} ok, {miss} missed')
