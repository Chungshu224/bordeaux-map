<template>
  <CourseHomeLayout
    :theme="theme"
    region-name="South-West France"
    :breadcrumb-country="gt('法國')"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      :tagline="gt('法國西南部・Diploma 備考')"
      :title="gt('西南產區')"
      subtitle="France · Sud-Ouest · Bergerac · Cahors · Gaillac · Madiran · Jurançon · Armagnac"
      :description="gt('從 Bergerac 與 Cahors 的波爾多近鄰，到 Madiran 的 Tannat、Jurançon 的甜白酒與 Armagnac，三階段系統化掌握西南產區的本土品種、AOC／IGP 制度與多元風土，以 WSET Diploma D3 與 MW 為備考目標。')"
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
      :title="gt('為什麼學習西南產區？')"
      :items="overviewItems"
    />

    <AchievementModal :open="showAchievementModal" course-key="southwest" @close="showAchievementModal = false" />

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
import { gt } from '../../locales/southwestUi/index.js'
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
import { southwestLearningState, southwestLearningLevels } from '../../stores/southwestLearningStore.js'
import { globalSouthwestAchievementManager, southwestAchievementState } from '../../stores/southwestAchievementSystem.js'
import { authActions } from '../../stores/authStore.js'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames', 'openNotebook'])
const showAchievementModal = ref(false)

const theme = getTheme('southwest')
const showProgressModal = ref(false)

globalSouthwestAchievementManager.init()
const achievementCount = computed(() => southwestAchievementState.unlockedAchievements.length)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => southwestLearningState.completedLessons)
const LEVEL_LESSON_IDS = Object.fromEntries(
  LEVELS.map(n => [n, (southwestLearningLevels[`level${n}`]?.lessons || []).map(l => l.id)])
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
  if (southwestLearningState.testMode) return true
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
  if (totalProgressPct.value === 0) return gt('開始你的西南產區之旅')
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
  { value: '16', label: gt('系統課程') },
  { value: '3',  label: gt('學習階段') }
]

const quickNavItems = computed(() => [
  { key: 'map',      desc: gt('產區示意點互動地圖') },
  { key: 'games',    desc: gt('品種配對・產區速答') },
  { key: 'notebook', desc: gt('西南產區酒款品飲筆記') },
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
    title: gt('西南產區入門'),
    subtitle: gt('基礎認識'),
    icon: '🌱',
    description: gt('歷史、大西洋與比利牛斯的地理氣候、本土品種，以及 AOC／IGP 制度與標籤規定。'),
    tags: [gt('歷史'), 'Malbec', 'Tannat', 'Négrette', 'IGP'],
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
    description: gt('從 Bergerac、Cahors 到 Gaillac、Madiran、Jurançon 與 Armagnac，逐區深入西南產區。'),
    tags: ['Bergerac', 'Cahors', 'Gaillac', 'Madiran', 'Jurançon'],
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
    description: gt('栽培與氣候、釀造與風土、產業與市場、法規演變與論述。'),
    tags: [gt('栽培與氣候'), gt('風土比較'), gt('產業與市場'), gt('盲品論述')],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[3].length,
    progress: levelProgress(3),
    unlocked: isLevelUnlocked(3),
    unlockHint: gt('完成 Level 2 後解鎖')
  }
])

const overviewItems = [
  { icon: '🌊', title: gt('大西洋與比利牛斯'), desc: gt('海洋性氣候向內陸漸趨大陸性，Garonne、Dordogne、Lot、Tarn 等河谷與比利牛斯山麓造就多樣風土。') },
  { icon: '🍇', title: gt('本土品種'), desc: gt('Malbec、Tannat、Négrette、Fer Servadou、Manseng 與 Mauzac，是西南產區有別於波爾多的特色。') },
  { icon: '🍯', title: gt('甜酒與烈酒'), desc: gt('Monbazillac、Jurançon 的甜白酒與 Armagnac，構成區內最具辨識度的風格。') },
  { icon: '🏷️', title: gt('AOC 與 IGP'), desc: gt('從各河谷的 AOC 到 Côtes de Gascogne 等 IGP，多層次的法規讓品質與自由度並存。') }
]
</script>
