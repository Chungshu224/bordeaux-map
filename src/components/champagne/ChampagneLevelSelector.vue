<template>
  <CourseHomeLayout
    :theme="theme"
    region-name="Champagne"
    :breadcrumb-country="gt('法國')"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      :tagline="gt('法國氣泡酒・Diploma 備考')"
      :title="gt('法國香檳產區')"
      subtitle="Champagne · Traditional Method · Chalk Terroir · Échelle des Crus"
      :description="gt('從白堊土壤與北方邊緣氣候，到傳統法釀造、調配與儲備酒，三階段系統化掌握香檳產區、釀造與法規，並以 WSET Diploma D3／D5 與 MW 為備考目標。')"
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

    <!-- 3. Quick Nav（地圖／練習／筆記／成就） -->
    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <!-- 4. Level Track -->
    <LevelTrack
      :title="gt('選擇課程階段')"
      :subtitle="gt('Level 1 建立基礎 → Level 2 四大產區與釀造 → Level 3 Diploma／MW 精修。')"
      :levels="levelData"
      :max-columns="3"
      @enter="(n) => emit('enterLevel', n)"
    />

    <!-- 5. Region Story -->
    <RegionStoryGrid
      :title="gt('為什麼學習香檳？')"
      :items="overviewItems"
    />

    <AchievementModal :open="showAchievementModal" course-key="champagne" @close="showAchievementModal = false" />

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
import { gt } from '../../locales/champagneUi/index.js'
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
import { globalChampagneAchievementManager, champagneAchievementState } from '../../stores/champagneAchievementSystem.js'
import { champagneLearningState, champagneLearningLevels } from '../../stores/champagneLearningStore.js'
import { authActions } from '../../stores/authStore.js'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames', 'openNotebook'])

const theme = getTheme('champagne')

const showAchievementModal = ref(false)
globalChampagneAchievementManager.init()
const achievementCount = computed(() => champagneAchievementState.unlockedAchievements.length)
const showProgressModal = ref(false)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => champagneLearningState.completedLessons)
const LEVEL_LESSON_IDS = Object.fromEntries(
  LEVELS.map(n => [n, (champagneLearningLevels[`level${n}`]?.lessons || []).map(l => l.id)])
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
  if (champagneLearningState.testMode) return true
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
  if (totalProgressPct.value === 0) return gt('開始你的香檳之旅')
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
  { value: '17', label: gt('Grand Cru 村莊（待核對）') },
  { value: '21', label: gt('系統課程') },
  { value: '3',  label: gt('學習階段') }
]

const quickNavItems = computed(() => [
  { key: 'map',      desc: gt('312 個 cru 村莊互動地圖') },
  { key: 'games',    desc: gt('產區速答・品種配對・釀造順序') },
  { key: 'notebook', desc: gt('香檳品飲筆記') },
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
    title: gt('香檳入門'),
    subtitle: gt('基礎認識'),
    icon: '🌱',
    description: gt('歷史、地理氣候與白堊土壤、三大品種，以及傳統法釀造與酒款風格的整體輪廓。'),
    tags: [gt('歷史與神話'), gt('白堊土壤'), 'Pinot Noir', 'Chardonnay', gt('傳統法')],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[1].length,
    progress: levelProgress(1),
    unlocked: true
  },
  {
    number: 2,
    title: gt('香檳產區與法規'),
    subtitle: gt('逐區深入'),
    icon: '🗺️',
    description: gt('AOC 法規與 Échelle des Crus，漢斯山、馬恩河谷、白丘、巴爾丘四大產區，以及釀造與生產者結構。'),
    tags: ['AOC', 'Échelle des Crus', 'Montagne de Reims', 'Côte des Blancs', gt('釀造與生產者')],
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
    description: gt('栽培與氣候變遷、氧化與還原風格、dosage、風土比較、標籤判讀、產業市場與氣泡酒品飲論述。'),
    tags: [gt('氣候變遷'), gt('風格與 dosage'), gt('風土比較'), gt('標籤判讀'), gt('產業與市場')],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[3].length,
    progress: levelProgress(3),
    unlocked: isLevelUnlocked(3),
    unlockHint: gt('完成 Level 2 後解鎖')
  }
])

const overviewItems = [
  { icon: '🪨', title: gt('白堊土壤與北方邊緣氣候'), desc: gt('香檳位於葡萄栽培的北界，白堊提供排水、蓄水與礦物感，是酸度與細緻度的來源。') },
  { icon: '🍾', title: gt('釀造與風土並重'), desc: gt('調配、儲備酒、酒渣陳年與 dosage 決定風格，是 Diploma D5 與 MW 論述的核心。') },
  { icon: '🏘️', title: gt('以村莊為單位的分級'), desc: gt('319 個 cru 村莊、Grand Cru 與 Premier Cru，Échelle des Crus 的歷史與現況是法規重點。') },
  { icon: '📈', title: gt('產業結構與氣候變遷'), desc: gt('Grandes Marques、種植者與合作社的分工、產量上限與採收提早，是 MW 常見的論述素材。') }
]
</script>
