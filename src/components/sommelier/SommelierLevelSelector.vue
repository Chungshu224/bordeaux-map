<template>
  <CourseHomeLayout
    :theme="theme"
    region-name="Sommelier"
    :breadcrumb-country="gt('實務')"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      :tagline="gt('侍酒服務・烈酒・清酒與啤酒・CMS 備考')"
      :title="gt('侍酒師實務')"
      subtitle="Service · Pairing · Spirits · Sake · Beer"
      :description="gt('CMS 考的不只葡萄酒：侍酒服務、酒單與餐酒搭配、烈酒、清酒與啤酒都在範圍內。本課程補上產區課程沒有涵蓋的部分，並以 CMS 口試與服務情境做模擬練習。')"
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

    <!-- 3. Quick Nav -->
    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <!-- 4. Level Track -->
    <LevelTrack
      :title="gt('選擇課程階段')"
      :subtitle="gt('四個階段各自獨立，可依需要選讀：侍酒服務與餐酒搭配、烈酒、清酒與啤酒，以及 CMS 模擬。')"
      :levels="levelData"
      :max-columns="2"
      @enter="(n) => emit('enterLevel', n)"
    />

    <!-- 5. Story -->
    <RegionStoryGrid
      :title="gt('為什麼需要實務課程？')"
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
import { gt } from '../../locales/sommelierUi/index.js'
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
import { sommelierLearningState, sommelierLearningLevels } from '../../stores/sommelierLearningStore.js'

const emit = defineEmits(['enterLevel'])

const theme = getTheme('sommelier')
const showProgressModal = ref(false)

const LEVELS = [1, 2, 3, 4]
const completedLessons = computed(() => sommelierLearningState.completedLessons)
const LEVEL_LESSON_IDS = Object.fromEntries(
  LEVELS.map(n => [n, (sommelierLearningLevels[`level${n}`]?.lessons || []).map(l => l.id)])
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

// 目前應該繼續的階段：第一個尚未完成的階段（各階段互不相依）
const nextLevel = computed(() => {
  for (const n of LEVELS) {
    if (levelProgress(n) < 100) return n
  }
  return 1
})

const heroButtonText = computed(() => {
  if (totalProgressPct.value === 0) return gt('開始學習')
  if (totalProgressPct.value >= 100) return gt('複習課程')
  return gt('繼續 Level {n}', { n: nextLevel.value })
})

const progressHeadline = computed(() => {
  if (totalProgressPct.value === 0) return gt('開始你的侍酒師之旅')
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
  { value: '4', label: gt('學習階段') },
  { value: String(totalLessonCount), label: gt('系統課程') },
  { value: 'CMS', label: gt('備考目標') }
]

const quickNavItems = computed(() => [
  { key: 'progress', desc: gt('{pct}% 完成・{n} 課', { pct: totalProgressPct.value, n: completedLessons.value.length }) }
])

function onQuickNav(key) {
  if (key === 'progress') showProgressModal.value = true
}

const LEVEL_META = [
  { number: 1, title: '侍酒服務與餐酒搭配', subtitle: '服務實務', icon: '🍽️', description: '侍酒服務流程、溫度與醒酒、酒單設計與定價，以及餐酒搭配原則。', tags: ['服務流程', '醒酒', '酒單', '餐酒搭配'] },
  { number: 2, title: '烈酒', subtitle: 'Spirits', icon: '🥃', description: '蒸餾與熟成原理、威士忌、蘭姆與龍舌蘭、琴酒、伏特加與利口酒。', tags: ['威士忌', '蘭姆', '龍舌蘭', '琴酒', '利口酒'] },
  { number: 3, title: '清酒與啤酒', subtitle: 'Sake & Beer', icon: '🍶', description: '清酒的原料、製程與分級，啤酒的原料、Ale 與 Lager 及主要風格。', tags: ['清酒', '精米步合', '啤酒', 'Ale', 'Lager'] },
  { number: 4, title: 'CMS 模擬', subtitle: '口試與服務情境', icon: '🎤', description: 'CMS 口試式的快問快答與服務情境題，用簡答題練習完整、快速的回答。', tags: ['口試', '服務情境', '簡答'] }
]

const levelData = computed(() => LEVEL_META.map(m => ({
  number: m.number,
  title: gt(m.title),
  subtitle: gt(m.subtitle),
  icon: m.icon,
  description: gt(m.description),
  tags: m.tags.map(x => gt(x)),
  modules: sommelierLearningLevels[`level${m.number}`]?.modules?.length || 0,
  lessons: LEVEL_LESSON_IDS[m.number].length,
  progress: levelProgress(m.number),
  unlocked: true
})))

const overviewItems = [
  { icon: '🍷', title: gt('從知識到服務'), desc: gt('CMS 要求在餐桌旁把知識轉成服務：開瓶、醒酒、溫度與推薦都要流暢。') },
  { icon: '🥃', title: gt('酒單上的其他飲品'), desc: gt('烈酒、清酒與啤酒同樣出現在酒單與考題上，侍酒師必須能說明與推薦。') },
  { icon: '🧀', title: gt('餐酒搭配'), desc: gt('用甜、酸、鹹、鮮、辣與油脂的原則，解釋為什麼某款酒適合某道菜。') },
  { icon: '🎤', title: gt('口試節奏'), desc: gt('快問快答練習讓你在壓力下說出完整、精準的答案。') }
]
</script>
