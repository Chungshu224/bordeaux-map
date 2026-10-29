<template>
  <CourseHomeLayout
    :theme="theme"
    region-name="Languedoc-Roussillon"
    :breadcrumb-country="gt('法國')"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      :tagline="gt('法國南部產區・Diploma 備考')"
      :title="gt('朗格多克—魯西永')"
      subtitle="France · Languedoc · Roussillon · Corbières · Minervois · Limoux · Banyuls · Pays d'Oc"
      :description="gt('從 Corbières、Minervois 的地中海紅酒到 Limoux 的氣泡酒與 Roussillon 的天然甜酒，三階段系統化掌握風土、AOC／IGP 制度與 Carignan 老藤，以 WSET Diploma D3 與 MW 為備考目標。')"
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
      :title="gt('為什麼學習朗格多克—魯西永？')"
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
import { gt } from '../../locales/languedocUi/index.js'
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
import { languedocLearningState, languedocLearningLevels } from '../../stores/languedocLearningStore.js'
import { authActions } from '../../stores/authStore.js'

const emit = defineEmits(['enterLevel'])

const theme = getTheme('languedoc')
const showProgressModal = ref(false)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => languedocLearningState.completedLessons)
const LEVEL_LESSON_IDS = Object.fromEntries(
  LEVELS.map(n => [n, (languedocLearningLevels[`level${n}`]?.lessons || []).map(l => l.id)])
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
  if (languedocLearningState.testMode) return true
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
  if (totalProgressPct.value === 0) return gt('開始你的朗格多克—魯西永之旅')
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
  { value: '2', label: gt('主要區域') },
  { value: '16', label: gt('系統課程') },
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
    title: gt('朗格多克—魯西永入門'),
    subtitle: gt('基礎認識'),
    icon: '🌱',
    description: gt('歷史、地中海地理與風、主要品種，以及 AOC／IGP 制度與標籤規定。'),
    tags: [gt('歷史'), 'Carignan', 'Grenache', 'Tramontane', 'IGP'],
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
    description: gt('Languedoc 西部與中東部、Limoux，以及 Roussillon 的干型酒與天然甜酒（VDN）逐區深入。'),
    tags: ['Corbières', 'Minervois', 'Limoux', 'Collioure', 'Banyuls'],
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
  { icon: '🌬️', title: gt('地中海與風'), desc: gt('地中海氣候、Tramontane 等強風與 garrigue 灌木叢，塑造乾燥、日照充足的葡萄園。') },
  { icon: '🍇', title: gt('混調與老藤'), desc: gt('Grenache、Syrah、Mourvèdre 與 Carignan 老藤是紅酒混調的核心。') },
  { icon: '🍾', title: gt('氣泡與甜酒'), desc: gt('Limoux 的氣泡酒與 Roussillon 的天然甜酒（VDN）是區內最具特色的風格。') },
  { icon: '🏷️', title: gt('AOC 與 IGP'), desc: gt('從 Languedoc AOC 到 Pays d\'Oc IGP，多層次的法規讓品質與自由度並存。') }
]
</script>
