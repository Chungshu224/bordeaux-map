<template>
  <CourseHomeLayout
    :theme="theme"
    region-name="South Africa"
    :breadcrumb-country="gt('南非')"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      :tagline="gt('新世界產區・Diploma 備考')"
      :title="gt('南非葡萄酒')"
      subtitle="South Africa · Wine of Origin · Chenin Blanc · Pinotage · Cap Classique"
      :description="gt('從 Benguela 寒流與古老的 Cape 地質，到 Wine of Origin 階層、Chenin Blanc、Pinotage 與 Cap Classique，三階段系統化掌握南非產區與法規，並以 WSET Diploma D3 與 MW 為備考目標。')"
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
      :title="gt('為什麼學習南非？')"
      :items="overviewItems"
    />

    <AchievementModal :open="showAchievementModal" course-key="southafrica" @close="showAchievementModal = false" />

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
import { gt } from '../../locales/southafricaUi/index.js'
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
import { southafricaLearningState, southafricaLearningLevels } from '../../stores/southafricaLearningStore.js'
import { authActions } from '../../stores/authStore.js'
import { globalSouthAfricaAchievementManager, southafricaAchievementState } from '../../stores/southafricaAchievementSystem.js'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames', 'openNotebook'])
const showAchievementModal = ref(false)

globalSouthAfricaAchievementManager.init()
const achievementCount = computed(() => southafricaAchievementState.unlockedAchievements.length)

const theme = getTheme('southafrica')
const showProgressModal = ref(false)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => southafricaLearningState.completedLessons)
const LEVEL_LESSON_IDS = Object.fromEntries(
  LEVELS.map(n => [n, (southafricaLearningLevels[`level${n}`]?.lessons || []).map(l => l.id)])
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
  if (southafricaLearningState.testMode) return true
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
  if (totalProgressPct.value === 0) return gt('開始你的南非之旅')
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
  { value: '5', label: gt('Western Cape 的 Region') },
  { value: '21', label: gt('系統課程') },
  { value: '3',  label: gt('學習階段') }
]

const quickNavItems = computed(() => [
  { key: 'map',      desc: gt('Region・District 示意點互動地圖') },
  { key: 'games',    desc: gt('品種配對・產區速答') },
  { key: 'notebook', desc: gt('南非酒款品飲筆記') },
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
    title: gt('南非入門'),
    subtitle: gt('基礎認識'),
    icon: '🌱',
    description: gt('歷史、海洋影響的氣候、Chenin Blanc 與 Pinotage 等品種，以及 WO 標籤與 Cap Classique 的整體輪廓。'),
    tags: [gt('歷史'), 'Chenin Blanc', 'Pinotage', 'Cape Blend', 'Cap Classique'],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[1].length,
    progress: levelProgress(1),
    unlocked: true
  },
  {
    number: 2,
    title: gt('南非產區與法規'),
    subtitle: gt('逐區深入'),
    icon: '🗺️',
    description: gt('Wine of Origin 階層，Stellenbosch、Swartland、Walker Bay 等產區與老藤制度。'),
    tags: ['Wine of Origin', 'Stellenbosch', 'Swartland', 'Walker Bay', gt('老藤')],
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
    description: gt('氣候與永續、釀造風格、風土、甜酒與加烈酒、產業與社會、盲品論述。'),
    tags: [gt('氣候與永續'), gt('風土深度'), gt('甜酒與加烈酒'), gt('產業與社會')],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[3].length,
    progress: levelProgress(3),
    unlocked: isLevelUnlocked(3),
    unlockHint: gt('完成 Level 2 後解鎖')
  }
])

const overviewItems = [
  { icon: '🌊', title: gt('寒流與海風'), desc: gt('Benguela 寒流與 Cape Doctor 海風讓南非在炎熱緯度仍能釀出涼爽風格。') },
  { icon: '🍇', title: gt('Chenin Blanc 與老藤'), desc: gt('全球最大 Chenin Blanc 種植國之一，Old Vine Project 保存超過 35 年的老藤。') },
  { icon: '🏷️', title: gt('Wine of Origin 階層'), desc: gt('Unit、Region、District、Ward 的層級與標籤規定，是 D3 的法規基礎。') },
  { icon: '🤝', title: gt('歷史與社會脈絡'), desc: gt('KWV 體制、黑人經濟賦權與永續議題，是 MW 論述的重要背景。') }
]
</script>
