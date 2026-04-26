<template>
  <CourseHomeLayout :theme="theme" region-name="Italy" breadcrumb-country="歐洲・西南歐">
    <RegionHero
      :icon="theme.icon"
      tagline="義大利葡萄酒・20 個行政區・地中海風土"
      title="義大利葡萄酒"
      subtitle="Italian Wine · DOCG · Nebbiolo · Sangiovese · Sicilia"
      description="從 DOCG 分級制度到南北 20 個行政區、Barolo 與 Brunello 的偉大、Etna 火山與 Sicilia 的新浪潮——系統化掌握義大利葡萄酒。"
      :stats="heroStats"
    />

    <ProgressStrip
      :headline="progressHeadline"
      :subline="progressSubline"
      :percent="totalProgressPct"
      :completed-count="completedTotal"
      :total-count="totalLessonCount"
      :achievement-count="null"
      :cta-text="heroButtonText"
      @cta="startJourney"
      @open-progress="showProgress = true"
    />

    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <LevelTrack
      title="選擇課程階段"
      subtitle="從入門到專家認證，循序掌握 20 個產區與義大利葡萄酒的多樣性。"
      :levels="levelData"
      @enter="onEnterLevel"
    />

    <ProgressModal
      :open="showProgress"
      :completed-count="completedTotal"
      :total-count="totalLessonCount"
      :overall-pct="totalProgressPct"
      :levels="modalLevels"
      :theme-color="theme.primary"
      @close="showProgress = false"
    />
  </CourseHomeLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  CourseHomeLayout, RegionHero, ProgressStrip, QuickNavGrid,
  LevelTrack, ProgressModal, getTheme
} from '../../shared/courseHome/index.js'
import { courseLevels, getLevelProgressPct, getUserProgress } from '../data/courseLevels.js'
import { authActions } from '../../../stores/authStore.js'

const emit = defineEmits(['startLevel', 'openMap', 'openAchievements', 'openNotebook', 'openGames'])

const theme = getTheme('italy')
const showProgress = ref(false)

// Lesson 統計
const LESSON_COUNTS = { level1: 12, level2: 23, level3: 26 }
const totalLessonCount = computed(() =>
  Object.values(LESSON_COUNTS).reduce((s, n) => s + n, 0)
)
const completedTotal = computed(() =>
  Object.entries(LESSON_COUNTS).reduce(
    (s, [k, n]) => s + Math.round(n * getLevelProgressPct(k) / 100), 0
  )
)
const totalProgressPct = computed(() =>
  totalLessonCount.value
    ? Math.round(completedTotal.value / totalLessonCount.value * 100)
    : 0
)

function levelPct(key) { return getLevelProgressPct(key) }

function isLevelUnlocked(key) {
  if (authActions.isAdmin && authActions.isAdmin()) return true
  if (key === 'level1') return true
  if (key === 'level2') return getUserProgress('level1').completedLessons.includes('L1M4L2')
  if (key === 'level3') return getUserProgress('level2').completedLessons.includes('L2FinalExam')
  return false
}

const heroButtonText = computed(() => {
  if (levelPct('level1') >= 100 && isLevelUnlocked('level2')) return '繼續 Level 2'
  if (levelPct('level1') > 0) return '繼續 Level 1'
  return '開始學習'
})
const progressHeadline = computed(() => {
  if (totalProgressPct.value === 0) return '開始你的義大利葡萄酒之旅'
  if (totalProgressPct.value >= 100) return '🎉 已完成全部課程，恭喜成為義大利葡萄酒達人！'
  return `已完成 ${completedTotal.value} / ${totalLessonCount.value} 課`
})
const progressSubline = computed(() => {
  if (levelPct('level1') < 100) return '當前階段：Level 1 · 義大利入門'
  if (levelPct('level2') < 100) return '當前階段：Level 2 · 進階探索'
  return '當前階段：Level 3 · 專家認證'
})

function startJourney() {
  if (levelPct('level1') >= 100 && isLevelUnlocked('level2')) emit('startLevel', 'level2')
  else emit('startLevel', 'level1')
}
function onEnterLevel(n) { emit('startLevel', `level${n}`) }

const heroStats = [
  { value: '20',  label: '行政區' },
  { value: '76',  label: 'DOCG 產區' },
  { value: '350+', label: '原生品種' }
]

const quickNavItems = computed(() => [
  { key: 'map' },
  { key: 'games' },
  { key: 'progress', desc: `${totalProgressPct.value}% 完成・${completedTotal.value} 課` },
  { key: 'notebook' },
  { key: 'achievements' }
])
function onQuickNav(key) {
  switch (key) {
    case 'map':          emit('openMap'); break
    case 'games':         emit('openGames'); break
    case 'achievements':  emit('openAchievements'); break
    case 'notebook':      emit('openNotebook'); break
    case 'progress':      showProgress.value = true; break
  }
}

const levelData = computed(() => [
  {
    number: 1, title: '義大利葡萄酒入門', subtitle: '基礎認識', icon: '🌱',
    description: '建立義大利葡萄酒基礎：DOCG/DOC/IGT 分級、20 個行政區、五大核心品種與餐酒搭配。',
    tags: ['DOCG/DOC/IGT', '20 行政區', '5 大品種', 'Sangiovese', 'Italy 101'],
    modules: 4, lessons: 12,
    progress: levelPct('level1'),
    unlocked: true
  },
  {
    number: 2, title: '進階探索', subtitle: '深度產區', icon: '🍷',
    description: '深入北中南差異、Barolo / Brunello / Etna、Nebbiolo 與 Aglianico 等進階品種。',
    tags: ['北義 Barolo', 'Toscana Brunello', '南義島嶼', 'Nebbiolo', 'Etna'],
    modules: 6, lessons: 23,
    progress: levelPct('level2'),
    unlocked: isLevelUnlocked('level2'),
    unlockHint: '完成 Level 1 後解鎖'
  },
  {
    number: 3, title: '專家認證', subtitle: '盲品與侍酒', icon: '🏆',
    description: '系統盲品方法、稀有品種、侍酒師實務、永續與自然酒運動。',
    tags: ['盲品系統', '稀有品種', '侍酒實務', '自然酒', '永續'],
    modules: 7, lessons: 26,
    progress: levelPct('level3'),
    unlocked: isLevelUnlocked('level3'),
    unlockHint: '完成 Level 2 後解鎖'
  }
])

const modalLevels = computed(() =>
  ['level1', 'level2', 'level3'].map((k, i) => ({
    label: `Level ${i + 1}`,
    pct: levelPct(k)
  }))
)
</script>
