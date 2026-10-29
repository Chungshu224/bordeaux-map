<template>
  <CourseHomeLayout
    :theme="theme"
    region-name="Brandy"
    :breadcrumb-country="gt('法國')"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      :tagline="gt('葡萄蒸餾酒・Diploma／CMS 備考')"
      :title="gt('白蘭地與葡萄蒸餾酒')"
      subtitle="Brandy · Cognac · Armagnac · Brandy de Jerez · Pisco · Grappa · Metaxa"
      :description="gt('從 Cognac 與 Armagnac 到西班牙、義大利、希臘、德國與新世界的葡萄蒸餾酒，三階段系統化掌握蒸餾、熟成、產區與法規，以 WSET Diploma D5 與 CMS 烈酒為備考目標。')"
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
      :subtitle="gt('Level 1 建立基礎 → Level 2 逐區深入 → Level 3 Diploma／CMS 精修。')"
      :levels="levelData"
      :max-columns="3"
      @enter="(n) => emit('enterLevel', n)"
    />

    <!-- 5. Region Story -->
    <RegionStoryGrid
      :title="gt('為什麼學習白蘭地？')"
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
import { gt } from '../../locales/brandyUi/index.js'
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
import { brandyLearningState, brandyLearningLevels } from '../../stores/brandyLearningStore.js'
import { authActions } from '../../stores/authStore.js'

const emit = defineEmits(['enterLevel'])

const theme = getTheme('brandy')
const showProgressModal = ref(false)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => brandyLearningState.completedLessons)
const LEVEL_LESSON_IDS = Object.fromEntries(
  LEVELS.map(n => [n, (brandyLearningLevels[`level${n}`]?.lessons || []).map(l => l.id)])
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
  if (brandyLearningState.testMode) return true
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
  if (totalProgressPct.value === 0) return gt('開始你的白蘭地之旅')
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
  { value: '6', label: gt('干邑六大 Crus') },
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
    title: gt('白蘭地入門'),
    subtitle: gt('基礎認識'),
    icon: '🌱',
    description: gt('定義與歷史、蒸餾原理、葡萄與基酒，以及橡木熟成與年數分級。'),
    tags: [gt('歷史'), gt('蒸餾'), 'Ugni Blanc', gt('橡木'), 'VSOP'],
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
    description: gt('從 Cognac、Armagnac 到 Brandy de Jerez、Metaxa、Grappa、Pisco 與其他產區，逐區深入。'),
    tags: ['Cognac', 'Armagnac', 'Jerez', 'Pisco', 'Grappa'],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[2].length,
    progress: levelProgress(2),
    unlocked: isLevelUnlocked(2),
    unlockHint: gt('完成 Level 1 後解鎖')
  },
  {
    number: 3,
    title: gt('Diploma／CMS 精修'),
    subtitle: gt('備考進階'),
    icon: '🏆',
    description: gt('蒸餾與熟成深度、風格與品飲、產業與市場、法規與論述。'),
    tags: [gt('蒸餾深度'), gt('風格品飲'), gt('產業與市場'), gt('法規論述')],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[3].length,
    progress: levelProgress(3),
    unlocked: isLevelUnlocked(3),
    unlockHint: gt('完成 Level 2 後解鎖')
  }
])

const overviewItems = [
  { icon: '🍇', title: gt('從葡萄到基酒'), desc: gt('高酸、低酒精的白葡萄酒是蒸餾的好原料；Ugni Blanc、Folle Blanche、Colombard 等品種各有特色。') },
  { icon: '⚗️', title: gt('壺式與連續式'), desc: gt('Cognac 的壺式二次蒸餾與 Armagnac 的連續蒸餾，是兩種風格的根源。') },
  { icon: '🛢️', title: gt('橡木與時間'), desc: gt('橡木桶、熟成年數與 VS、VSOP、XO 等標示，決定白蘭地的色澤、香氣與價格。') },
  { icon: '🌍', title: gt('全球葡萄白蘭地'), desc: gt('從 Jerez、Metaxa、Grappa 到 Pisco 與高加索，各地以自己的原料與法規釀出不同風格。') }
]
</script>
