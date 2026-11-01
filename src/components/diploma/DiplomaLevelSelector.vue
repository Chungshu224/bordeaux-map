<template>
  <CourseHomeLayout
    :theme="theme"
    region-name="Diploma"
    :breadcrumb-country="gt('通論')"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      :tagline="gt('跨產區通論・Diploma／CMS 備考')"
      :title="gt('Diploma 通論')"
      subtitle="Viticulture · Vinification · Business · Sparkling · Fortified"
      :description="gt('把各產區課程裡分散的知識串成通論：葡萄栽培與釀造、葡萄酒商業、全球氣泡酒與全球加烈酒，對應 WSET Diploma 的 D1、D2、D4、D5 單元，也是 CMS 理論的共同基礎。')"
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
      :subtitle="gt('五個階段各自獨立，可依需要選讀：栽培與釀造、葡萄酒商業、全球氣泡酒、全球加烈酒，以及簡答與盲品的應考訓練。')"
      :levels="levelData"
      :max-columns="2"
      @enter="(n) => emit('enterLevel', n)"
    />

    <!-- 5. Story -->
    <RegionStoryGrid
      :title="gt('為什麼需要通論？')"
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
import { gt } from '../../locales/diplomaUi/index.js'
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
import { diplomaLearningState, diplomaLearningLevels } from '../../stores/diplomaLearningStore.js'

const emit = defineEmits(['enterLevel'])

const theme = getTheme('diploma')
const showProgressModal = ref(false)

const LEVELS = [1, 2, 3, 4, 5]
const completedLessons = computed(() => diplomaLearningState.completedLessons)
const LEVEL_LESSON_IDS = Object.fromEntries(
  LEVELS.map(n => [n, (diplomaLearningLevels[`level${n}`]?.lessons || []).map(l => l.id)])
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
  if (totalProgressPct.value === 0) return gt('開始你的通論之旅')
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
  { value: '5', label: gt('學習階段') },
  { value: String(totalLessonCount), label: gt('系統課程') },
  { value: 'D1–D5', label: gt('對應單元') }
]

const quickNavItems = computed(() => [
  { key: 'progress', desc: gt('{pct}% 完成・{n} 課', { pct: totalProgressPct.value, n: completedLessons.value.length }) }
])

function onQuickNav(key) {
  if (key === 'progress') showProgressModal.value = true
}

const LEVEL_META = [
  { number: 1, title: '葡萄栽培與釀造', subtitle: 'D1 通論', icon: '🌱', description: '葡萄藤的生長週期、氣候與土壤、栽培管理與病蟲害，以及白酒、紅酒、粉紅酒的釀造決策與熟成、澄清、裝瓶。', tags: ['生長週期', '葉幕管理', '病蟲害', '發酵', '熟成'] },
  { number: 2, title: '葡萄酒商業', subtitle: 'D2 通論', icon: '📊', description: '成本與定價、通路與市場結構、品牌與行銷，以及全球市場趨勢與論述寫法。', tags: ['成本', '定價', '通路', '品牌', '市場'] },
  { number: 3, title: '全球氣泡酒', subtitle: 'D4 通論', icon: '🥂', description: '氣泡酒的原料與氣候、四種製法、全球傳統法產區，以及槽式法與芳香型氣泡酒。', tags: ['傳統法', '槽式法', 'Cava', 'Franciacorta', '英格蘭'] },
  { number: 4, title: '全球加烈酒', subtitle: 'D5 通論', icon: '🍷', description: '加烈的原理與時機、Sherry、Port、Madeira，以及 VDN、Rutherglen Muscat、Marsala 等其他加烈酒。', tags: ['Sherry', 'Port', 'Madeira', 'VDN', 'Rutherglen'] },
  { number: 5, title: '應考訓練', subtitle: '簡答與盲品', icon: '✍️', description: '簡答與論述的寫法、WSET SAT 與 CMS 演繹式盲品格式、白酒與紅酒盲品論述練習，以及綜合模擬考。', tags: ['簡答', '論述', 'SAT', 'CMS', '模擬考'] }
]

const levelData = computed(() => LEVEL_META.map(m => ({
  number: m.number,
  title: gt(m.title),
  subtitle: gt(m.subtitle),
  icon: m.icon,
  description: gt(m.description),
  tags: m.tags.map(x => gt(x)),
  modules: diplomaLearningLevels[`level${m.number}`]?.modules?.length || 0,
  lessons: LEVEL_LESSON_IDS[m.number].length,
  progress: levelProgress(m.number),
  unlocked: true
})))

const overviewItems = [
  { icon: '🧩', title: gt('把知識串起來'), desc: gt('各產區課程教「這裡怎麼做」，通論教「為什麼這樣做」，讓你在任何產區都能套用同一套因果邏輯。') },
  { icon: '🌿', title: gt('栽培與釀造'), desc: gt('從氣候、土壤到葉幕與病害，再到發酵與熟成，每個決策都對應一個風格結果。') },
  { icon: '💼', title: gt('商業視角'), desc: gt('成本、通路、品牌與市場，是 Diploma 論述與 MW 思考的必備語言。') },
  { icon: '🍾', title: gt('氣泡與加烈'), desc: gt('兩大特殊類型的製法與全球比較，一次整理。') }
]
</script>
