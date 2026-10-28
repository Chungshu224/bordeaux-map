<template>
  <CourseHomeLayout
    :theme="theme"
    region-name="Argentina"
    :breadcrumb-country="gt('阿根廷')"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      :tagline="gt('新世界產區・Diploma 備考')"
      :title="gt('阿根廷')"
      subtitle="Argentina · Mendoza · Uco Valley · Salta · Patagonia · Malbec · Torrontés"
      :description="gt('從 Mendoza 的 Luján de Cuyo 與 Uco Valley，到北部 Salta 的極端高海拔與南部 Patagonia，三階段系統化掌握 Malbec、Torrontés 與 IG／DOC 制度，以 WSET Diploma D3 與 MW 為備考目標。')"
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

    <!-- 3. Quick Nav -->
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
      :title="gt('為什麼學習阿根廷？')"
      :items="overviewItems"
    />

    <AchievementModal :open="showAchievementModal" course-key="argentina" @close="showAchievementModal = false" />

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
import { gt } from '../../locales/argentinaUi/index.js'
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
import { argentinaLearningState, argentinaLearningLevels } from '../../stores/argentinaLearningStore.js'
import { authActions } from '../../stores/authStore.js'
import { globalArgentinaAchievementManager, argentinaAchievementState } from '../../stores/argentinaAchievementSystem.js'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames', 'openNotebook'])
const showAchievementModal = ref(false)

const theme = getTheme('argentina')
const showProgressModal = ref(false)

globalArgentinaAchievementManager.init()
const achievementCount = computed(() => argentinaAchievementState.unlockedAchievements.length)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => argentinaLearningState.completedLessons)
const LEVEL_LESSON_IDS = Object.fromEntries(
  LEVELS.map(n => [n, (argentinaLearningLevels[`level${n}`]?.lessons || []).map(l => l.id)])
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
  if (argentinaLearningState.testMode) return true
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
  if (totalProgressPct.value === 0) return gt('開始你的阿根廷之旅')
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
  { value: '4', label: gt('主要產區群') },
  { value: '14', label: gt('系統課程') },
  { value: '3',  label: gt('學習階段') }
]

const quickNavItems = computed(() => [
  { key: 'map',      desc: gt('產區示意點互動地圖') },
  { key: 'games',    desc: gt('品種配對・產區速答') },
  { key: 'notebook', desc: gt('阿根廷酒款品飲筆記') },
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
    title: gt('阿根廷入門'),
    subtitle: gt('基礎認識'),
    icon: '🌱',
    description: gt('歷史、安地斯山脈與沙漠灌溉的地理氣候、主要品種，以及 IG／DOC 制度與標籤規定。'),
    tags: [gt('歷史'), 'Malbec', 'Torrontés', gt('高海拔'), 'IG／DOC'],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[1].length,
    progress: levelProgress(1),
    unlocked: true
  },
  {
    number: 2,
    title: gt('阿根廷產區與法規'),
    subtitle: gt('逐區深入'),
    icon: '🗺️',
    description: gt('Mendoza 的 Luján de Cuyo 與 Uco Valley，以及北部、San Juan、Patagonia 等產區逐區深入。'),
    tags: ['Mendoza', 'Uco Valley', 'Luján de Cuyo', 'Salta', 'Patagonia'],
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
  { icon: '⛰️', title: gt('安地斯山腳下的沙漠'), desc: gt('產區位於安地斯山脈東麓的雨影區，年降雨很少，葡萄園依靠融雪灌溉。') },
  { icon: '📏', title: gt('海拔就是風土'), desc: gt('海拔帶來日夜溫差與強烈日照，同一品種在不同海拔呈現截然不同的風格。') },
  { icon: '🍇', title: gt('Malbec 與 Torrontés'), desc: gt('Malbec 是旗艦紅酒，Torrontés 是香氣型白酒，也是阿根廷獨有的特色。') },
  { icon: '🏷️', title: gt('IG 與 DOC 制度'), desc: gt('地理標示（IG）分層級，少數地區更進一步設有 DOC 規範。') }
]
</script>
