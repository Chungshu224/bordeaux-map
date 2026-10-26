<template>
  <CourseHomeLayout
    :theme="theme"
    region-name="Rhône"
    :breadcrumb-country="gt('法國')"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      :tagline="gt('法國・Diploma／MW 備考')"
      :title="gt('法國隆河葡萄酒')"
      subtitle="Vallée du Rhône · Syrah · Grenache · Northern & Southern Rhône"
      :description="gt('從北隆河的陡坡 Syrah 到南隆河的 Grenache 混釀與教皇新堡，三階段系統化掌握隆河產區、品種與分級法規，並以 WSET Diploma 與 MW 為備考目標。')"
      :stats="heroStats"
    />

    <!-- 2. Progress Strip -->
    <ProgressStrip
      :headline="progressHeadline"
      :subline="progressSubline"
      :percent="totalProgressPct"
      :completed-count="completedLessons.length"
      :total-count="totalLessonCount"
      :streak="0"
      :achievement-count="achievementCount"
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
      :title="gt('為什麼學習隆河葡萄酒？')"
      :items="overviewItems"
    />

    <AchievementModal :open="showAchievementModal" course-key="rhone" @close="showAchievementModal = false" />

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
import { gt } from '../../locales/rhoneUi/index.js'
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
import { rhoneLearningState, rhoneLearningLevels } from '../../stores/rhoneLearningStore.js'
import { authActions } from '../../stores/authStore.js'
import { globalRhoneAchievementManager, rhoneAchievementState } from '../../stores/rhoneAchievementSystem.js'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames', 'openNotebook'])

const theme = getTheme('rhone')
const showProgressModal = ref(false)
const showAchievementModal = ref(false)

globalRhoneAchievementManager.init()
const achievementCount = computed(() => rhoneAchievementState.unlockedAchievements.length)


const LEVELS = [1, 2, 3]
const completedLessons = computed(() => rhoneLearningState.completedLessons)
const LEVEL_LESSON_IDS = Object.fromEntries(
  LEVELS.map(n => [n, (rhoneLearningLevels[`level${n}`]?.lessons || []).map(l => l.id)])
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
  if (rhoneLearningState.testMode) return true
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
  if (totalProgressPct.value === 0) return gt('開始你的隆河葡萄酒之旅')
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
  { value: '18', label: gt('獨立 Crus') },
  { value: '21', label: gt('系統課程') },
  { value: '3',  label: gt('學習階段') }
]

const quickNavItems = computed(() => [
  { key: 'map',      desc: gt('26 個 AOC 互動地圖') },
  { key: 'games',    desc: gt('品種配對・產區速答') },
  { key: 'notebook', desc: gt('隆河酒款品飲筆記') },
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
    title: gt('隆河谷入門'),
    subtitle: gt('基礎認識'),
    icon: '🌱',
    description: gt('地理歷史、南北二分的氣候與土壤、主要紅白品種與分級金字塔，建立隆河谷的整體地圖。'),
    tags: [gt('南北二分'), gt('地中海與半大陸性氣候'), 'Syrah', 'Grenache', gt('分級金字塔')],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[1].length,
    progress: levelProgress(1),
    unlocked: true
  },
  {
    number: 2,
    title: gt('隆河產區與法規'),
    subtitle: gt('逐區深入'),
    icon: '🗺️',
    description: gt('Côtes du Rhône 與 Villages 法規，北隆河各 cru、教皇新堡、南隆河各 cru，以及粉紅、甜酒與外圍名稱。'),
    tags: ['Côte-Rôtie', 'Hermitage', 'Châteauneuf-du-Pape', 'Gigondas', gt('Tavel 與 VDN')],
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
    description: gt('以 WSET Diploma 並延伸至 MW 為目標：栽培釀造深度、風土比較、法規判讀、產業市場與盲品論述。'),
    tags: [gt('栽培與釀造'), gt('風土比較'), gt('標籤判讀'), gt('產業與市場'), gt('盲品與論述')],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[3].length,
    progress: levelProgress(3),
    unlocked: isLevelUnlocked(3),
    unlockHint: gt('完成 Level 2 後解鎖')
  }
])

const overviewItems = [
  { icon: '⛰️', title: gt('南北二分的兩個世界'), desc: gt('北隆河是陡坡花崗岩上的 Syrah，南隆河是卵石與 Mistral 下的 Grenache 混釀，必須分開教、再對照。') },
  { icon: '🔺', title: gt('分級金字塔'), desc: gt('Côtes du Rhône → Villages → 獨立 Crus，是 Diploma 最常考、也最容易搞混的結構。') },
  { icon: '🧪', title: gt('混釀與品種比例'), desc: gt('教皇新堡的 13 個品種、Côte-Rôtie 的 Viognier 共發酵與各 AOC 的比例規定，都是數字題。') },
  { icon: '🏭', title: gt('產業結構與 MW 論述'), desc: gt('Inter Rhône、négociant、合作社與獨立酒莊的比重，是 MW 論述題的素材。') }
]
</script>
