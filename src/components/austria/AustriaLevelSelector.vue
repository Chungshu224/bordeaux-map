<template>
  <CourseHomeLayout
    :theme="theme"
    region-name="Austria"
    :breadcrumb-country="gt('奧地利')"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      :tagline="gt('中歐白酒與紅酒・Diploma 備考')"
      :title="gt('奧地利葡萄酒')"
      subtitle="Austria · DAC · Ried · Grüner Veltliner · Blaufränkisch"
      :description="gt('從 Danube 與 Pannonian 氣候，到 DAC 制度、Ried 單一園與 Sekt Austria，三階段系統化掌握奧地利產區與法規，並以 WSET Diploma D3 與 MW 為備考目標。')"
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
      :title="gt('為什麼學習奧地利？')"
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
import { gt } from '../../locales/austriaUi/index.js'
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
import { austriaLearningState, austriaLearningLevels } from '../../stores/austriaLearningStore.js'
import { authActions } from '../../stores/authStore.js'

const emit = defineEmits(['enterLevel'])

const theme = getTheme('austria')
const showProgressModal = ref(false)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => austriaLearningState.completedLessons)
const LEVEL_LESSON_IDS = Object.fromEntries(
  LEVELS.map(n => [n, (austriaLearningLevels[`level${n}`]?.lessons || []).map(l => l.id)])
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
  if (austriaLearningState.testMode) return true
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
  if (totalProgressPct.value === 0) return gt('開始你的奧地利之旅')
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
  { value: '17', label: gt('DAC 產區（待核對）') },
  { value: '21', label: gt('系統課程') },
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
    title: gt('奧地利入門'),
    subtitle: gt('基礎認識'),
    icon: '🌱',
    description: gt('歷史與 1985 年醜聞、地理氣候、白紅品種，以及分級與標籤的整體輪廓。'),
    tags: [gt('歷史與醜聞'), 'Grüner Veltliner', 'Riesling', 'Zweigelt', gt('分級與標籤')],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[1].length,
    progress: levelProgress(1),
    unlocked: true
  },
  {
    number: 2,
    title: gt('奧地利產區與法規'),
    subtitle: gt('逐區深入'),
    icon: '🗺️',
    description: gt('DAC、Ried 與 ÖTW 法規，Niederösterreich、Wien、Burgenland、Steiermark 的產區細節。'),
    tags: ['DAC', 'Ried', 'Wachau', 'Burgenland', 'Steiermark'],
    modules: 4,
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
    description: gt('風土深度、甜酒、Sekt Austria、法規與標籤、產業市場與盲品論述。'),
    tags: [gt('風土深度'), gt('甜酒'), 'Sekt Austria', gt('標籤判讀'), gt('產業與市場')],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[3].length,
    progress: levelProgress(3),
    unlocked: isLevelUnlocked(3),
    unlockHint: gt('完成 Level 2 後解鎖')
  }
])

const overviewItems = [
  { icon: '🌊', title: gt('Danube 與 Pannonian 風土'), desc: gt('冷夜暖日的多瑙河谷與 Neusiedler See 周邊的溫暖氣候，造就清爽白酒與濃郁甜酒的兩極。') },
  { icon: '🏷️', title: gt('DAC 與 Ried 的獨特分級'), desc: gt('以產區風格為單位的 DAC，加上單一園 Ried 與 ÖTW 分級，是奧地利法規的核心。') },
  { icon: '🍇', title: gt('白酒與紅酒並重'), desc: gt('Grüner Veltliner 與 Riesling 之外，Zweigelt、Blaufränkisch、St. Laurent 也是 Diploma 常考品種。') },
  { icon: '🍯', title: gt('甜酒與氣泡酒'), desc: gt('Burgenland 的貴腐與 Ausbruch，以及 Sekt Austria 三級制度，是 MW 論述的好素材。') }
]
</script>
