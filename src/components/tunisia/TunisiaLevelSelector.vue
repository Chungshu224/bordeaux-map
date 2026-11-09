<template>
  <CourseHomeLayout
    :theme="theme"
    :region-name="gt('突尼西亞')"
    :breadcrumb-country="gt('北非')"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      :tagline="gt('AOC、蜜思嘉與迦太基・官方法源精讀')"
      :title="gt('突尼西亞葡萄酒')"
      subtitle="Cap Bon · Mornag · Muscat de Kélibia"
      :description="gt('從迦太基的 Mago 到法國保護國，再到 1958 年的第一批 AOC。本課程用 10 課認識突尼西亞的風土、歷史與蜜思嘉，並依官方法源細讀七個 AOC。')"
      :stats="heroStats"
    />

    <!-- 2. Progress Strip -->
    <ProgressStrip
      :headline="progressHeadline"
      :subline="progressSubline"
      :percent="totalProgressPct"
      :completed-count="completedLessons.length"
      :total-count="totalLessonCount"
      :achievement-count="0"
      :streak="0"
      :cta-text="heroButtonText"
      @cta="startJourney"
      @open-progress="showProgressModal = true"
    />

    <!-- 3. Quick Nav -->
    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <!-- 4. Level Track -->
    <LevelTrack
      :title="gt('選擇課程階段')"
      :subtitle="gt('兩個階段循序漸進：先認識突尼西亞，再細讀產區與法規。')"
      :levels="levelData"
      :max-columns="2"
      @enter="(n) => emit('enterLevel', n)"
    />

    <!-- 5. Story -->
    <RegionStoryGrid
      :title="gt('為什麼值得學突尼西亞？')"
      :items="overviewItems"
    />

    <ProgressModal
      :open="showProgressModal"
      :completed-count="completedLessons.length"
      :total-count="totalLessonCount"
      :overall-pct="totalProgressPct"
      :levels="progressLevels"
      :theme-color="theme.primary"
      @close="showProgressModal = false"
    />
  </CourseHomeLayout>
</template>

<script setup>
import { gt } from '../../locales/tunisiaUi/index.js'
import { ref, computed } from 'vue'
import {
  CourseHomeLayout,
  RegionHero,
  ProgressStrip,
  QuickNavGrid,
  LevelTrack,
  RegionStoryGrid,
  ProgressModal,
  getTheme
} from '../shared/courseHome/index.js'
import { tunisiaLearningState, tunisiaLearningLevels } from '../../stores/tunisiaLearningStore.js'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames'])

const theme = getTheme('tunisia')
const showProgressModal = ref(false)

const LEVELS = [1, 2]
const completedLessons = computed(() => tunisiaLearningState.completedLessons)
const LEVEL_LESSON_IDS = Object.fromEntries(
  LEVELS.map(n => [n, (tunisiaLearningLevels[`level${n}`]?.lessons || []).map(l => l.id)])
)
const totalLessonCount = LEVELS.reduce((s, n) => s + LEVEL_LESSON_IDS[n].length, 0)

function levelProgress(n) {
  const ids = LEVEL_LESSON_IDS[n] || []
  if (!ids.length) return 0
  const done = completedLessons.value.filter(id => ids.includes(id)).length
  return (done / ids.length) * 100
}

const totalProgressPct = computed(() => {
  if (!totalLessonCount) return 0
  return Math.round((completedLessons.value.length / totalLessonCount) * 100)
})

const progressLevels = computed(() =>
  LEVELS.map(n => ({ label: `Level ${n}`, pct: levelProgress(n) }))
)

// 目前應該繼續的階段：第一個尚未完成的階段（各階段互不相依）
const nextLevel = computed(() => {
  for (const n of LEVELS) {
    if (levelProgress(n) < 100) return n
  }
  return 1
})

const heroButtonText = computed(() => {
  if (totalProgressPct.value === 0) return gt('開始學習')
  if (totalProgressPct.value >= 100) return gt('複習課程')
  return gt('繼續 Level {n}', { n: nextLevel.value })
})

const progressHeadline = computed(() => {
  if (totalProgressPct.value === 0) return gt('開始你的突尼西亞之旅')
  if (totalProgressPct.value >= 100) return gt('🎉 已完成全部課程！')
  return gt('已完成 {done} / {total} 課', { done: completedLessons.value.length, total: totalLessonCount })
})

const progressSubline = computed(() => {
  if (totalProgressPct.value === 0) return gt('從 Level 1 入門開始')
  if (totalProgressPct.value >= 100) return ''
  return gt('當前階段：Level {n}', { n: nextLevel.value })
})

function startJourney() {
  emit('enterLevel', totalProgressPct.value >= 100 ? 1 : nextLevel.value)
}

const heroStats = [
  { value: '2', label: gt('學習階段') },
  { value: String(totalLessonCount), label: gt('系統課程') },
  { value: '7', label: 'AOC' }
]

const quickNavItems = computed(() => [
  { key: 'map', desc: gt('七個 AOC 示意點地圖') },
  { key: 'games', desc: gt('產區、法規、知識閃問') },
  { key: 'progress', desc: gt('{pct}% 完成・{n} 課', { pct: totalProgressPct.value, n: completedLessons.value.length }) }
])

function onQuickNav(key) {
  if (key === 'map') emit('openMap')
  else if (key === 'games') emit('openGames')
  else if (key === 'progress') showProgressModal.value = true
}

const LEVEL_META = [
  { number: 1, title: '認識突尼西亞', subtitle: '基礎認識', icon: '🌍', description: '地理與風土、從迦太基到國營體系的歷史、品種與蜜思嘉、產業與市場。', tags: ['風土', '歷史', '品種', '蜜思嘉'] },
  { number: 2, title: '產區與法規', subtitle: '官方原文', icon: '📜', description: '法規架構、七個 AOC 與設立年代、產區範圍、酒標與國際保護。', tags: ['AOC', '法規', '里斯本協定'] }
]

const levelData = computed(() => LEVEL_META.map(m => ({
  number: m.number,
  title: gt(m.title),
  subtitle: gt(m.subtitle),
  icon: m.icon,
  description: gt(m.description),
  tags: m.tags.map(x => gt(x)),
  modules: tunisiaLearningLevels[`level${m.number}`]?.modules?.length || 0,
  lessons: LEVEL_LESSON_IDS[m.number].length,
  progress: levelProgress(m.number),
  unlocked: true
})))

const overviewItems = [
  { icon: '🏛️', title: gt('最古老的葡萄酒文獻之一'), desc: gt('迦太基農學家 Mago 的著作被羅馬人翻譯引用，名字至今還在酒標上。') },
  { icon: '📜', title: gt('讀得到的官方法源'), desc: gt('七個 AOC 的設立部令、1999 年的 AOC 法與國際登記，都能直接查證。') },
  { icon: '🌼', title: gt('Kélibia 的蜜思嘉'), desc: gt('亞歷山大蜜思嘉是突尼西亞最早的法定產區，也是最有辨識度的酒。') },
  { icon: '🔎', title: gt('誠實標示來源'), desc: gt('本課程區分官方原文與二手資料，查不到的數字會直接告訴你。') }
]
</script>
