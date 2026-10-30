<template>
  <CourseHomeLayout
    :theme="theme"
    region-name="Canada"
    :breadcrumb-country="gt('加拿大')"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      :tagline="gt('冷涼氣候產區・Diploma D3 備考')"
      :title="gt('加拿大葡萄酒')"
      subtitle="Canada · Ontario · British Columbia · Nova Scotia · Quebec · VQA · Icewine"
      :description="gt('從 Ontario 的 Niagara、BC 的 Okanagan 到 Nova Scotia 與 Quebec，三階段系統化掌握加拿大葡萄酒的歷史、品種、VQA 制度與冰酒風格，以 WSET Diploma D3 為備考目標。')"
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
      :subtitle="gt('Level 1 建立基礎 → Level 2 逐區深入 → Level 3 Diploma 精修。')"
      :levels="levelData"
      :max-columns="3"
      @enter="(n) => emit('enterLevel', n)"
    />

    <!-- 5. Region Story -->
    <RegionStoryGrid
      :title="gt('為什麼學習加拿大葡萄酒？')"
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
import { gt } from '../../locales/canadaUi/index.js'
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
import { canadaLearningState, canadaLearningLevels } from '../../stores/canadaLearningStore.js'
import { authActions } from '../../stores/authStore.js'

const emit = defineEmits(['enterLevel'])

const theme = getTheme('canada')
const showProgressModal = ref(false)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => canadaLearningState.completedLessons)
const LEVEL_LESSON_IDS = Object.fromEntries(
  LEVELS.map(n => [n, (canadaLearningLevels[`level${n}`]?.lessons || []).map(l => l.id)])
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
  if (canadaLearningState.testMode) return true
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
  if (totalProgressPct.value === 0) return gt('開始你的冷涼氣候之旅')
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
  { value: '2', label: gt('兩大主力產酒省分') },
  { value: '18', label: gt('系統課程') },
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
    title: gt('冷涼氣候入門'),
    subtitle: gt('基礎認識'),
    icon: '🌱',
    description: gt('歷史、地理氣候、品種，以及 VQA 制度與標示。'),
    tags: [gt('歷史'), gt('氣候'), 'Riesling', 'Vidal', 'VQA'],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[1].length,
    progress: levelProgress(1),
    unlocked: true
  },
  {
    number: 2,
    title: gt('產區與法規'),
    subtitle: gt('逐區深入'),
    icon: '🗺️',
    description: gt('從 Ontario 的 Niagara、BC 的 Okanagan，到 Nova Scotia 與 Quebec，逐區深入。'),
    tags: ['Niagara', 'Okanagan', 'Prince Edward County', 'Nova Scotia', 'Quebec'],
    modules: 4,
    lessons: LEVEL_LESSON_IDS[2].length,
    progress: levelProgress(2),
    unlocked: isLevelUnlocked(2),
    unlockHint: gt('完成 Level 1 後解鎖')
  },
  {
    number: 3,
    title: gt('Diploma 精修'),
    subtitle: gt('備考進階'),
    icon: '🏆',
    description: gt('栽培與釀造、產業與市場、法規演變與論述。'),
    tags: [gt('栽培'), gt('冰酒'), gt('產業與市場'), gt('法規論述')],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[3].length,
    progress: levelProgress(3),
    unlocked: isLevelUnlocked(3),
    unlockHint: gt('完成 Level 2 後解鎖')
  }
])

const overviewItems = [
  { icon: '❄️', title: gt('冷涼的葡萄園'), desc: gt('葡萄園集中在南部，冬季嚴寒使寒害、埋藤與風機成為栽培的重點課題。') },
  { icon: '🧊', title: gt('冰酒的故鄉'), desc: gt('冰酒是加拿大的代表風格，葡萄須在天然結冰的狀態下採收，並受 VQA 嚴格規範。') },
  { icon: '🍁', title: gt('兩大主力省分'), desc: gt('Ontario 與 British Columbia 是加拿大最重要的兩個產酒省分，各有自己的 VQA 與次產區制度。') },
  { icon: '🌊', title: gt('從海洋到內陸'), desc: gt('大西洋沿岸的 Nova Scotia、內陸的 Okanagan 與 Niagara，氣候與風格各不相同。') }
]
</script>
