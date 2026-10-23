<template>
  <CourseHomeLayout
    :theme="theme"
    region-name="Greece"
    breadcrumb-country="地中海"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      tagline="地中海葡萄酒・Diploma 備考"
      title="希臘葡萄酒"
      subtitle="Greek Wine · Assyrtiko · Xinomavro · Island Terroir"
      description="從古希臘酒神文化到 Santorini 火山白酒與北部 Xinomavro，三階段系統化掌握希臘產區、品種與法規，並以 WSET Diploma 為備考目標。"
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

    <!-- 3. Quick Nav（地圖／練習／筆記規劃中） -->
    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <!-- 4. Level Track -->
    <LevelTrack
      title="選擇課程階段"
      subtitle="Level 1 建立基礎 → Level 2 逐區深入 → Level 3 Diploma 精修。"
      :levels="levelData"
      :max-columns="3"
      @enter="(n) => emit('enterLevel', n)"
    />

    <!-- 5. Region Story -->
    <RegionStoryGrid
      title="為什麼學習希臘葡萄酒？"
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
import { greeceLearningState, greeceLearningLevels } from '../../stores/greeceLearningStore.js'
import { authActions } from '../../stores/authStore.js'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames', 'openNotebook'])

const theme = getTheme('greece')
const showProgressModal = ref(false)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => greeceLearningState.completedLessons)
const LEVEL_LESSON_IDS = Object.fromEntries(
  LEVELS.map(n => [n, (greeceLearningLevels[`level${n}`]?.lessons || []).map(l => l.id)])
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
  if (greeceLearningState.testMode) return true
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
  if (totalProgressPct.value === 0) return '開始學習'
  if (totalProgressPct.value >= 100) return '複習課程'
  return `繼續 Level ${nextLevel.value}`
})

const progressHeadline = computed(() => {
  if (totalProgressPct.value === 0) return '開始你的希臘葡萄酒之旅'
  if (totalProgressPct.value >= 100) return '🎉 已完成全部課程！'
  return `已完成 ${completedLessons.value.length} / ${totalLessonCount} 課`
})
const progressSubline = computed(() => {
  if (totalProgressPct.value === 0) return '從 Level 1 入門開始'
  if (totalProgressPct.value >= 100) return ''
  return `當前階段：Level ${nextLevel.value}`
})

function startJourney() {
  emit('enterLevel', totalProgressPct.value >= 100 ? 1 : nextLevel.value)
}

const heroStats = [
  { value: '33', label: 'PDO 產區（待核對）' },
  { value: '21', label: '系統課程' },
  { value: '3',  label: '學習階段' }
]

const quickNavItems = computed(() => [
  { key: 'map',      desc: '33 個 PDO 互動地圖' },
  { key: 'games',    desc: '品種配對・產區速答' },
  { key: 'notebook', desc: '希臘酒款品飲筆記' },
  { key: 'progress', desc: `${totalProgressPct.value}% 完成・${completedLessons.value.length} 課` }
])

function onQuickNav(key) {
  if (key === 'map') emit('openMap')
  else if (key === 'games') emit('openGames')
  else if (key === 'notebook') emit('openNotebook')
  else if (key === 'progress') showProgressModal.value = true
}

const levelData = computed(() => [
  {
    number: 1,
    title: '希臘葡萄酒入門',
    subtitle: '基礎認識',
    icon: '🌱',
    description: '歷史、地理氣候、本土白紅品種與六大地理區，建立希臘葡萄酒的整體地圖。',
    tags: ['古希臘與復興', '地中海氣候', 'Assyrtiko', 'Xinomavro', '六大地理區'],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[1].length,
    progress: levelProgress(1),
    unlocked: true
  },
  {
    number: 2,
    title: '希臘產區與法規',
    subtitle: '逐區深入',
    icon: '🗺️',
    description: 'PDO／PGI 法規框架，馬其頓、伯羅奔尼撒、愛琴海島嶼、克里特到 Retsina 與甜酒傳統。',
    tags: ['PDO／PGI', 'Naoussa', 'Nemea', 'Santorini', '甜酒與 Retsina'],
    modules: 4,
    lessons: LEVEL_LESSON_IDS[2].length,
    progress: levelProgress(2),
    unlocked: isLevelUnlocked(2),
    unlockHint: '完成 Level 1 後解鎖'
  },
  {
    number: 3,
    title: 'Diploma 精修',
    subtitle: '備考進階',
    icon: '🏆',
    description: '以 WSET Diploma 為目標：栽培釀造深度、風土與品種比較、法規判讀、產業市場與盲品論述。',
    tags: ['栽培與釀造', '風土比較', '標籤判讀', '產業與市場', '盲品與論述'],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[3].length,
    progress: levelProgress(3),
    unlocked: isLevelUnlocked(3),
    unlockHint: '完成 Level 2 後解鎖'
  }
])

const overviewItems = [
  { icon: '🌋', title: '火山白酒的傳奇', desc: 'Santorini 的 Assyrtiko 以高酸與礦物感聞名，是希臘最具國際辨識度的白酒。' },
  { icon: '🏔️', title: '北部的 Xinomavro', desc: '高酸高單寧、具陳年潛力，常被拿來與 Nebbiolo 對照，是 Diploma 常見比較題。' },
  { icon: '🏝️', title: '島嶼與多樣風土', desc: '從愛琴海諸島、克里特到愛奧尼亞群島，各有獨特品種與甜酒傳統。' },
  { icon: '📜', title: 'PDO／PGI 與傳統名稱', desc: 'Retsina、Verdea 等傳統名稱與新舊制度對照，是備考必須釐清的法規重點。' }
]
</script>
