<template>
  <CourseHomeLayout
    :theme="theme"
    region-name="Chile"
    :breadcrumb-country="gt('智利')"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      :tagline="gt('新世界產區・Diploma 備考')"
      :title="gt('智利')"
      subtitle="Chile · Maipo · Colchagua · Casablanca · Carmenère · Costa · Andes"
      :description="gt('從 Maipo、Colchagua 的紅酒到 Casablanca、Leyda 的冷涼白酒，三階段系統化掌握 Carmenère、DO 制度與 Costa／Entre Cordilleras／Andes 分區，以 WSET Diploma D3 與 MW 為備考目標。')"
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

    <!-- 3. Quick Nav（地圖／練習／筆記製作中） -->
    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <!-- 4. Level Track -->
    <LevelTrack
      :title="gt('選擇課程階段')"
      :subtitle="gt('Level 1 建立基礎 → Level 2 逐區深入 → Level 3 Diploma／MW 精修。')"
      :levels="levelData"
      :max-columns="3"
      @enter="(n) => emit('enterLevel', n)"
    />

    <!-- 5. Region Story -->
    <RegionStoryGrid
      :title="gt('為什麼學習智利？')"
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
import { gt } from '../../locales/chileUi/index.js'
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
import { chileLearningState, chileLearningLevels } from '../../stores/chileLearningStore.js'
import { authActions } from '../../stores/authStore.js'

const emit = defineEmits(['enterLevel'])

const theme = getTheme('chile')
const showProgressModal = ref(false)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => chileLearningState.completedLessons)
const LEVEL_LESSON_IDS = Object.fromEntries(
  LEVELS.map(n => [n, (chileLearningLevels[`level${n}`]?.lessons || []).map(l => l.id)])
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

function isLevelUnlocked(n) {
  if (n === 1) return true
  if (authActions.isAdmin()) return true
  if (chileLearningState.testMode) return true
  const finalId = (LEVEL_LESSON_IDS[n - 1] || []).at(-1)
  return finalId != null && completedLessons.value.includes(finalId)
}

// 目前應該繼續的階段：第一個尚未完成且已解鎖的階段
const nextLevel = computed(() => {
  for (const n of LEVELS) {
    if (levelProgress(n) < 100 && isLevelUnlocked(n)) return n
  }
  return 1
})

const heroButtonText = computed(() => {
  if (totalProgressPct.value === 0) return gt('開始學習')
  if (totalProgressPct.value >= 100) return gt('複習課程')
  return gt('繼續 Level {n}', { n: nextLevel.value })
})

const progressHeadline = computed(() => {
  if (totalProgressPct.value === 0) return gt('開始你的智利之旅')
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
  { value: '3', label: gt('主要區域') },
  { value: '14', label: gt('系統課程') },
  { value: '3',  label: gt('學習階段') }
]

// 地圖／遊戲／筆記／成就於階段 E 製作；目前顯示「製作中」並停用
const quickNavItems = computed(() => [
  { key: 'map',      desc: gt('互動地圖（製作中）'), enabled: false },
  { key: 'games',    desc: gt('練習遊戲（製作中）'), enabled: false },
  { key: 'notebook', desc: gt('品飲筆記（製作中）'), enabled: false },
  { key: 'progress', desc: gt('{pct}% 完成・{n} 課', { pct: totalProgressPct.value, n: completedLessons.value.length }) }
])

function onQuickNav(key) {
  if (key === 'progress') showProgressModal.value = true
}

const levelData = computed(() => [
  {
    number: 1,
    title: gt('智利入門'),
    subtitle: gt('基礎認識'),
    icon: '🌱',
    description: gt('歷史、縱向地形與寒流的地理氣候、主要品種，以及 DO 制度與標籤規定。'),
    tags: [gt('歷史'), 'Carmenère', 'Cabernet Sauvignon', 'Humboldt', 'DO'],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[1].length,
    progress: levelProgress(1),
    unlocked: true
  },
  {
    number: 2,
    title: gt('智利產區與法規'),
    subtitle: gt('逐區深入'),
    icon: '🗺️',
    description: gt('Aconcagua、Central Valley，以及北部與南部各產區逐區深入。'),
    tags: ['Casablanca', 'Maipo', 'Colchagua', 'Limarí', 'Itata'],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[2].length,
    progress: levelProgress(2),
    unlocked: isLevelUnlocked(2),
    unlockHint: gt('完成 Level 1 後解鎖')
  },
  {
    number: 3,
    title: gt('Diploma／MW 精修'),
    subtitle: gt('備考進階'),
    icon: '🏆',
    description: gt('栽培與氣候、釀造與風土比較、產業與市場、盲品論述。'),
    tags: [gt('栽培與氣候'), gt('風土比較'), gt('產業與市場'), gt('盲品論述')],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[3].length,
    progress: levelProgress(3),
    unlocked: isLevelUnlocked(3),
    unlockHint: gt('完成 Level 2 後解鎖')
  }
])

const overviewItems = [
  { icon: '🌊', title: gt('寒流與海岸'), desc: gt('Humboldt 寒流與太平洋帶來涼風與海霧，讓靠近海岸的產區成為冷涼白酒與 Pinot Noir 的家。') },
  { icon: '🏔️', title: gt('海岸山脈與安地斯'), desc: gt('海岸山脈與安地斯夾出由西向東的差異，成為智利新分區系統的基礎。') },
  { icon: '🍇', title: gt('Carmenère 與 Cabernet'), desc: gt('Carmenère 是智利的代表品種，而 Maipo 的 Cabernet Sauvignon 是經典風格。') },
  { icon: '🏷️', title: gt('DO 制度'), desc: gt('原產地命名（DO）由大到小分層，標籤上的品種、年份與產地都有最低比例。') }
]
</script>
