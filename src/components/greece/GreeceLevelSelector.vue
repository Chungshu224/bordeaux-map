<template>
  <CourseHomeLayout
    :theme="theme"
    region-name="Greece"
    :breadcrumb-country="gt('地中海')"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      :tagline="gt('地中海葡萄酒・Diploma 備考')"
      :title="gt('希臘葡萄酒')"
      subtitle="Greek Wine · Assyrtiko · Xinomavro · Island Terroir"
      :description="gt('從古希臘酒神文化到 Santorini 火山白酒與北部 Xinomavro，三階段系統化掌握希臘產區、品種與法規，並以 WSET Diploma 為備考目標。')"
      :stats="heroStats"
    />

    <!-- 2. Progress Strip -->
    <ProgressStrip
      :headline="progressHeadline"
      :subline="progressSubline"
      :percent="totalProgressPct"
      :completed-count="completedLessons.length"
      :total-count="totalLessonCount"
      :achievement-count="achievementCount"
      :streak="0"
      :cta-text="heroButtonText"
      @cta="startJourney"
      @open-progress="showProgressModal = true"
      @open-achievements="showAchievementModal = true"
    />

    <!-- 3. Quick Nav（地圖／練習／筆記規劃中） -->
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
      :title="gt('為什麼學習希臘葡萄酒？')"
      :items="overviewItems"
    />

    <AchievementModal :open="showAchievementModal" course-key="greece" @close="showAchievementModal = false" />

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
import { gt } from '../../locales/greeceUi/index.js'
import { ref, computed } from 'vue'
import {
  CourseHomeLayout,
  RegionHero,
  ProgressStrip,
  QuickNavGrid,
  LevelTrack,
  RegionStoryGrid,
  ProgressModal,
  AchievementModal,
  getTheme
} from '../shared/courseHome/index.js'
import { greeceLearningState, greeceLearningLevels } from '../../stores/greeceLearningStore.js'
import { authActions } from '../../stores/authStore.js'
import { globalGreeceAchievementManager, greeceAchievementState } from '../../stores/greeceAchievementSystem.js'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames', 'openNotebook'])

const theme = getTheme('greece')
const showProgressModal = ref(false)
const showAchievementModal = ref(false)

globalGreeceAchievementManager.init()
const achievementCount = computed(() => greeceAchievementState.unlockedAchievements.length)

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
  if (totalProgressPct.value === 0) return gt('開始學習')
  if (totalProgressPct.value >= 100) return gt('複習課程')
  return gt('繼續 Level {n}', { n: nextLevel.value })
})

const progressHeadline = computed(() => {
  if (totalProgressPct.value === 0) return gt('開始你的希臘葡萄酒之旅')
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
  { value: '33', label: gt('PDO 產區（待核對）') },
  { value: '21', label: gt('系統課程') },
  { value: '3',  label: gt('學習階段') }
]

const quickNavItems = computed(() => [
  { key: 'map',      desc: gt('33 個 PDO 互動地圖') },
  { key: 'games',    desc: gt('品種配對・產區速答') },
  { key: 'notebook', desc: gt('希臘酒款品飲筆記') },
  { key: 'achievements', desc: gt('{n} 個已解鎖徽章', { n: achievementCount.value }) },
  { key: 'progress', desc: gt('{pct}% 完成・{n} 課', { pct: totalProgressPct.value, n: completedLessons.value.length }) }
])

function onQuickNav(key) {
  if (key === 'map') emit('openMap')
  else if (key === 'games') emit('openGames')
  else if (key === 'notebook') emit('openNotebook')
  else if (key === 'achievements') showAchievementModal.value = true
  else if (key === 'progress') showProgressModal.value = true
}

const levelData = computed(() => [
  {
    number: 1,
    title: gt('希臘葡萄酒入門'),
    subtitle: gt('基礎認識'),
    icon: '🌱',
    description: gt('歷史、地理氣候、本土白紅品種與六大地理區，建立希臘葡萄酒的整體地圖。'),
    tags: [gt('古希臘與復興'), gt('地中海氣候'), 'Assyrtiko', 'Xinomavro', gt('六大地理區')],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[1].length,
    progress: levelProgress(1),
    unlocked: true
  },
  {
    number: 2,
    title: gt('希臘產區與法規'),
    subtitle: gt('逐區深入'),
    icon: '🗺️',
    description: gt('PDO／PGI 法規框架，馬其頓、伯羅奔尼撒、愛琴海島嶼、克里特到 Retsina 與甜酒傳統。'),
    tags: ['PDO／PGI', 'Naoussa', 'Nemea', 'Santorini', gt('甜酒與 Retsina')],
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
    description: gt('以 WSET Diploma 為目標：栽培釀造深度、風土與品種比較、法規判讀、產業市場與盲品論述。'),
    tags: [gt('栽培與釀造'), gt('風土比較'), gt('標籤判讀'), gt('產業與市場'), gt('盲品與論述')],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[3].length,
    progress: levelProgress(3),
    unlocked: isLevelUnlocked(3),
    unlockHint: gt('完成 Level 2 後解鎖')
  }
])

const overviewItems = [
  { icon: '🌋', title: gt('火山白酒的傳奇'), desc: gt('Santorini 的 Assyrtiko 以高酸與礦物感聞名，是希臘最具國際辨識度的白酒。') },
  { icon: '🏔️', title: gt('北部的 Xinomavro'), desc: gt('高酸高單寧、具陳年潛力，常被拿來與 Nebbiolo 對照，是 Diploma 常見比較題。') },
  { icon: '🏝️', title: gt('島嶼與多樣風土'), desc: gt('從愛琴海諸島、克里特到愛奧尼亞群島，各有獨特品種與甜酒傳統。') },
  { icon: '📜', title: gt('PDO／PGI 與傳統名稱'), desc: gt('Retsina、Verdea 等傳統名稱與新舊制度對照，是備考必須釐清的法規重點。') }
]
</script>
