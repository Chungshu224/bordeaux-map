<template>
  <CourseHomeLayout
    :theme="theme"
    :region-name="gt('烏拉圭')"
    :breadcrumb-country="gt('南美洲')"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      :tagline="gt('Tannat、INAVI 與 VCP・官方法源精讀')"
      :title="gt('烏拉圭葡萄酒')"
      subtitle="Canelones · Maldonado · Tannat"
      :description="gt('從 Harriague 在 Salto 種下的 Tannat，到 INAVI 與 VCP 制度。本課程用 10 課認識烏拉圭的氣候、歷史與品種，並依法律與命令原文細讀酒標、地理標示與葡萄酒區域。')"
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
      :subtitle="gt('兩個階段循序漸進：先認識烏拉圭，再細讀法規與產區。')"
      :levels="levelData"
      :max-columns="2"
      @enter="(n) => emit('enterLevel', n)"
    />

    <!-- 5. Story -->
    <RegionStoryGrid
      :title="gt('為什麼值得學烏拉圭？')"
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
import { gt } from '../../locales/uruguayUi/index.js'
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
import { uruguayLearningState, uruguayLearningLevels } from '../../stores/uruguayLearningStore.js'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames'])

const theme = getTheme('uruguay')
const showProgressModal = ref(false)

const LEVELS = [1, 2]
const completedLessons = computed(() => uruguayLearningState.completedLessons)
const LEVEL_LESSON_IDS = Object.fromEntries(
  LEVELS.map(n => [n, (uruguayLearningLevels[`level${n}`]?.lessons || []).map(l => l.id)])
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
  if (totalProgressPct.value === 0) return gt('開始你的烏拉圭之旅')
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
  { value: '2', label: gt('學習階段') },
  { value: String(totalLessonCount), label: gt('系統課程') },
  { value: '26.5%', label: 'Tannat' }
]

const quickNavItems = computed(() => [
  { key: 'map', desc: gt('各省與葡萄酒區域示意點地圖') },
  { key: 'games', desc: gt('區域、法規、知識閃問') },
  { key: 'progress', desc: gt('{pct}% 完成・{n} 課', { pct: totalProgressPct.value, n: completedLessons.value.length }) }
])

function onQuickNav(key) {
  if (key === 'map') emit('openMap')
  else if (key === 'games') emit('openGames')
  else if (key === 'progress') showProgressModal.value = true
}

const LEVEL_META = [
  { number: 1, title: '認識烏拉圭', subtitle: '基礎認識', icon: '🌍', description: '地理與氣候、移民先驅與 INAVI、Tannat 與其他品種、產業與市場。', tags: ['風土', '歷史', '品種', 'Tannat'] },
  { number: 2, title: '法規與產區', subtitle: '官方原文', icon: '📜', description: '法規架構、VCP 與酒標、地理標示、INAVI 的葡萄酒區域。', tags: ['VCP', '法規', '地理標示'] }
]

const levelData = computed(() => LEVEL_META.map(m => ({
  number: m.number,
  title: gt(m.title),
  subtitle: gt(m.subtitle),
  icon: m.icon,
  description: gt(m.description),
  tags: m.tags.map(x => gt(x)),
  modules: uruguayLearningLevels[`level${m.number}`]?.modules?.length || 0,
  lessons: LEVEL_LESSON_IDS[m.number].length,
  progress: levelProgress(m.number),
  unlocked: true
})))

const overviewItems = [
  { icon: '🍇', title: gt('Tannat 的第二故鄉'), desc: gt('來自法國西南部的 Tannat 占全國葡萄園約四分之一，產量已超過原產地。') },
  { icon: '🌊', title: gt('河口與大西洋'), desc: gt('沒有高山，靠拉布拉他河口與大西洋調節；生長季也下雨，年份差異大。') },
  { icon: '📜', title: gt('讀得到的官方法源'), desc: gt('INAVI 的法律、VCP 命令與地理標示條文都能直接查證，年報數字也公開。') },
  { icon: '🔎', title: gt('誠實標示來源'), desc: gt('本課程區分官方原文與二手資料，查不到的數字會直接告訴你。') }
]
</script>
