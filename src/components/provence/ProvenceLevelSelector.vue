<template>
  <CourseHomeLayout
    :theme="theme"
    region-name="Provence"
    :breadcrumb-country="gt('法國')"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      :tagline="gt('地中海產區・Diploma D3 備考')"
      :title="gt('普羅旺斯與科西嘉島')"
      subtitle="Provence · Côtes de Provence · Bandol · Corsica · Patrimonio · Ajaccio"
      :description="gt('從 Côtes de Provence、Bandol 到科西嘉的 Patrimonio 與 Ajaccio，三階段系統化掌握兩個法國地中海產區的歷史、品種、法規與風格，以 WSET Diploma D3 為備考目標。')"
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
      :subtitle="gt('Level 1 建立基礎 → Level 2 逐區深入 → Level 3 Diploma 精修。')"
      :levels="levelData"
      :max-columns="3"
      @enter="(n) => emit('enterLevel', n)"
    />

    <!-- 5. Region Story -->
    <RegionStoryGrid
      :title="gt('為什麼學習普羅旺斯與科西嘉？')"
      :items="overviewItems"
    />

    <AchievementModal :open="showAchievementModal" course-key="provence" @close="showAchievementModal = false" />

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
import { gt } from '../../locales/provenceUi/index.js'
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
import { provenceLearningState, provenceLearningLevels } from '../../stores/provenceLearningStore.js'
import { globalProvenceAchievementManager, provenceAchievementState } from '../../stores/provenceAchievementSystem.js'
import { authActions } from '../../stores/authStore.js'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames', 'openNotebook'])
const showAchievementModal = ref(false)

const theme = getTheme('provence')
const showProgressModal = ref(false)

globalProvenceAchievementManager.init()
const achievementCount = computed(() => provenceAchievementState.unlockedAchievements.length)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => provenceLearningState.completedLessons)
const LEVEL_LESSON_IDS = Object.fromEntries(
  LEVELS.map(n => [n, (provenceLearningLevels[`level${n}`]?.lessons || []).map(l => l.id)])
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
  if (provenceLearningState.testMode) return true
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
  if (totalProgressPct.value === 0) return gt('開始你的地中海之旅')
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
  { value: '2', label: gt('法國地中海產區') },
  { value: '18', label: gt('系統課程') },
  { value: '3',  label: gt('學習階段') }
]

const quickNavItems = computed(() => [
  { key: 'map',      desc: gt('產區示意點互動地圖') },
  { key: 'games',    desc: gt('品種配對・產區速答') },
  { key: 'notebook', desc: gt('普羅旺斯與科西嘉品飲筆記') },
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
    title: gt('地中海入門'),
    subtitle: gt('基礎認識'),
    icon: '🌱',
    description: gt('歷史、地理氣候、品種，以及 AOP／IGP 制度與標示。'),
    tags: [gt('歷史'), gt('氣候'), 'Mourvèdre', 'Niellucciu', 'AOP'],
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
    description: gt('從 Côtes de Provence、Bandol 到科西嘉的 Patrimonio、Ajaccio 與 Muscat du Cap Corse，逐區深入。'),
    tags: ['Côtes de Provence', 'Bandol', 'Bellet', 'Patrimonio', 'Ajaccio'],
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
    tags: [gt('栽培'), gt('玫瑰紅酒'), gt('產業與市場'), gt('法規論述')],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[3].length,
    progress: levelProgress(3),
    unlocked: isLevelUnlocked(3),
    unlockHint: gt('完成 Level 2 後解鎖')
  }
])

const overviewItems = [
  { icon: '☀️', title: gt('地中海的陽光'), desc: gt('充足的日照、乾燥的密斯特拉風與貧瘠土壤，塑造普羅旺斯的葡萄園。') },
  { icon: '🌸', title: gt('玫瑰紅酒之鄉'), desc: gt('普羅旺斯以淡色乾型玫瑰紅酒聞名；CIVP 2025 年統計中，三大 AOP 的收成有 89% 是玫瑰紅酒。') },
  { icon: '🏝️', title: gt('山在海中的島'), desc: gt('科西嘉有高山、花崗岩與片岩，以及 Niellucciu、Sciaccarellu、Vermentinu 等島上品種。') },
  { icon: '🍷', title: gt('兩種地中海紅酒'), desc: gt('Bandol 的 Mourvèdre 與 Patrimonio 的 Niellucciu，各自代表一種地中海風格。') }
]
</script>
