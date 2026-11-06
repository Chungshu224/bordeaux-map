<template>
  <CourseHomeLayout
    :theme="theme"
    :region-name="gt('摩洛哥')"
    :breadcrumb-country="gt('北非')"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      :tagline="gt('AOG、AOC 與灰酒・官方法規精讀')"
      :title="gt('摩洛哥葡萄酒')"
      subtitle="Meknès · AOG · AOC · Vin Gris"
      :description="gt('摩洛哥是少數可以直接讀到官方部令的新興產區。本課程用 10 課認識它的風土、歷史與灰酒，並細讀 14 個 AOG 與 AOC 的規定。')"
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
      :subtitle="gt('兩個階段循序漸進：先認識摩洛哥，再細讀產區與法規。')"
      :levels="levelData"
      :max-columns="2"
      @enter="(n) => emit('enterLevel', n)"
    />

    <!-- 5. Story -->
    <RegionStoryGrid
      :title="gt('為什麼值得學摩洛哥？')"
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
import { gt } from '../../locales/moroccoUi/index.js'
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
import { moroccoLearningState, moroccoLearningLevels } from '../../stores/moroccoLearningStore.js'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames'])

const theme = getTheme('morocco')
const showProgressModal = ref(false)

const LEVELS = [1, 2]
const completedLessons = computed(() => moroccoLearningState.completedLessons)
const LEVEL_LESSON_IDS = Object.fromEntries(
  LEVELS.map(n => [n, (moroccoLearningLevels[`level${n}`]?.lessons || []).map(l => l.id)])
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
  if (totalProgressPct.value === 0) return gt('開始你的摩洛哥之旅')
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
  { value: '14', label: 'AOG' }
]

const quickNavItems = computed(() => [
  { key: 'map', desc: gt('14 個 AOG 示意點地圖') },
  { key: 'games', desc: gt('產區、法規、知識閃問') },
  { key: 'progress', desc: gt('{pct}% 完成・{n} 課', { pct: totalProgressPct.value, n: completedLessons.value.length }) }
])

function onQuickNav(key) {
  if (key === 'map') emit('openMap')
  else if (key === 'games') emit('openGames')
  else if (key === 'progress') showProgressModal.value = true
}

const LEVEL_META = [
  { number: 1, title: '認識摩洛哥', subtitle: '基礎認識', icon: '🌍', description: '地理與風土、從殖民到復興的歷史、品種與灰酒、產業與市場。', tags: ['風土', '歷史', '品種', '灰酒'] },
  { number: 2, title: '產區與法規', subtitle: '官方原文', icon: '📜', description: 'AOG 制度、14 個 AOG、三個 AOC 的細則與酒標判讀。', tags: ['AOG', 'AOC', '酒標'] }
]

const levelData = computed(() => LEVEL_META.map(m => ({
  number: m.number,
  title: gt(m.title),
  subtitle: gt(m.subtitle),
  icon: m.icon,
  description: gt(m.description),
  tags: m.tags.map(x => gt(x)),
  modules: moroccoLearningLevels[`level${m.number}`]?.modules?.length || 0,
  lessons: LEVEL_LESSON_IDS[m.number].length,
  progress: levelProgress(m.number),
  unlocked: true
})))

const overviewItems = [
  { icon: '📜', title: gt('少見的官方法規'), desc: gt('14 個 AOG 的界線、AOC 的品種與糖度，都能直接從部令讀到。') },
  { icon: '📈', title: gt('市場如何改寫產區'), desc: gt('從法國時期的出口產區到 1990 年代外資復興，是理解產業政策的好案例。') },
  { icon: '🌸', title: gt('灰酒的法定地位'), desc: gt('灰酒被明確寫進 AOC 法規，粉紅與灰酒的產量也遠多於白酒。') },
  { icon: '🔎', title: gt('誠實標示來源'), desc: gt('本課程區分官方原文與二手資料，查不到的數字會直接告訴你。') }
]
</script>
