<template>
  <CourseHomeLayout :theme="theme" region-name="California" breadcrumb-country="新世界・北美">
    <RegionHero
      :icon="theme.icon"
      tagline="加州葡萄酒・1976 巴黎評判・154 AVA"
      title="加州葡萄酒"
      subtitle="California Wine · Napa · Sonoma · Cult Wine"
      description="從 1976 巴黎評判改寫歷史，到 Napa 膜拜酒、Sonoma Pinot、Zinfandel 與自然酒運動——掌握新世界葡萄酒的創新典範。"
      :stats="heroStats"
    />

    <ProgressStrip
      :headline="progressHeadline"
      :subline="progressSubline"
      :percent="totalProgressPct"
      :completed-count="completedLessons.length"
      :total-count="totalLessonCount"
      :cta-text="heroButtonText"
      @cta="startJourney"
      @open-progress="showProgress = true"
    />

    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <LevelTrack
      title="選擇課程階段"
      subtitle="3 階段、從入門到 CCSW 永續認證的專業實務。"
      :levels="levelData"
      @enter="(n) => emit('startLevel', n)"
    />

    <ProgressModal
      :open="showProgress"
      :completed-count="completedLessons.length"
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
} from '../shared/courseHome/index.js'
import { californiaLearningState, californiaLearningLevels } from '../../stores/californiaLearningStore.js'
import { authActions } from '../../stores/authStore.js'

const emit = defineEmits(['startLevel', 'openMap', 'openQuiz', 'openNotes', 'openGames', 'backToPage'])

const theme = getTheme('california')
const showProgress = ref(false)

const completedLessons = computed(() => californiaLearningState.completedLessons)

const LEVEL_KEYS = [1, 2, 3]
const LEVEL_LESSON_IDS = LEVEL_KEYS.reduce((acc, n) => {
  const lvl = californiaLearningLevels[`level${n}`]
  // 加州 store 用 modules → lessonIds 或直接 lessons
  const ids = lvl?.lessons
    ? lvl.lessons.map(l => l.id)
    : (lvl?.modules || []).flatMap(m => m.lessonIds || [])
  acc[n] = ids
  return acc
}, {})
const totalLessonCount = computed(() =>
  LEVEL_KEYS.reduce((s, n) => s + LEVEL_LESSON_IDS[n].length, 0)
)
function levelProgress(n) {
  const ids = LEVEL_LESSON_IDS[n] || []
  if (!ids.length) return 0
  const done = completedLessons.value.filter(id => ids.includes(id)).length
  return (done / ids.length) * 100
}
const totalProgressPct = computed(() =>
  totalLessonCount.value
    ? Math.round((completedLessons.value.length / totalLessonCount.value) * 100)
    : 0
)
function isLevelUnlocked(n) {
  if (n === 1) return true
  if (authActions.isAdmin && authActions.isAdmin()) return true
  if (californiaLearningState.testMode) return true
  const finalId = (LEVEL_LESSON_IDS[n - 1] || []).at(-1)
  return finalId != null && completedLessons.value.includes(finalId)
}

const heroButtonText = computed(() => {
  for (const n of LEVEL_KEYS) {
    if (isLevelUnlocked(n) && levelProgress(n) < 100) {
      return levelProgress(n) > 0 ? `繼續 Level ${n}` : `開始 Level ${n}`
    }
  }
  return '重新學習'
})
const progressHeadline = computed(() => {
  if (totalProgressPct.value === 0) return '開始你的加州葡萄酒之旅'
  if (totalProgressPct.value >= 100) return '🎉 已完成全部課程'
  return `已完成 ${completedLessons.value.length} / ${totalLessonCount.value} 課`
})
const progressSubline = computed(() => {
  for (const n of LEVEL_KEYS) {
    if (levelProgress(n) < 100) return `當前階段：Level ${n}`
  }
  return ''
})
function startJourney() {
  for (const n of LEVEL_KEYS) {
    if (isLevelUnlocked(n) && levelProgress(n) < 100) { emit('startLevel', n); return }
  }
  emit('startLevel', 1)
}

const heroStats = [
  { value: '154+', label: 'AVA' },
  { value: '5',    label: '地理區域' },
  { value: '1976', label: '巴黎評判' }
]

const quickNavItems = computed(() => [
  { key: 'map' },
  { key: 'games' },
  { key: 'achievements' },
  { key: 'progress', desc: `${totalProgressPct.value}% 完成・${completedLessons.value.length} 課` },
  { key: 'notebook', icon: '📔', title: '品飲筆記', desc: '記錄品飲體驗' }
])
function onQuickNav(key) {
  switch (key) {
    case 'map':          emit('openMap'); break
    case 'games':        emit('openGames'); break
    case 'achievements': emit('openQuiz'); break
    case 'notebook':     emit('openNotes'); break
    case 'progress':     showProgress.value = true; break
  }
}

const levelData = computed(() => [
  {
    number: 1,
    title: '加州入門', subtitle: '陽光與多樣性', icon: '🍷',
    description: '1976 巴黎評判、六大產區群、8 大主要品種、餐酒搭配與 AVA 制度。',
    tags: ['巴黎評判', '六大產區群', '8 大品種', '餐酒搭配', 'AVA'],
    modules: (californiaLearningLevels.level1?.modules || []).length,
    lessons: LEVEL_LESSON_IDS[1].length,
    progress: levelProgress(1),
    unlocked: true
  },
  {
    number: 2,
    title: '加州進階', subtitle: '膜拜酒與年份', icon: '🏆',
    description: 'Napa 膜拜酒、1990–2020 年份、Rhône Rangers 與自然酒運動。',
    tags: ['Napa 膜拜酒', '年份品鑑', 'Rhône Rangers', '自然酒'],
    modules: (californiaLearningLevels.level2?.modules || []).length,
    lessons: LEVEL_LESSON_IDS[2].length,
    progress: levelProgress(2),
    unlocked: isLevelUnlocked(2),
    unlockHint: '完成 Level 1 後解鎖'
  },
  {
    number: 3,
    title: '專業實務', subtitle: '永續與餐配', icon: '🌱',
    description: '微氣候大師課、CCSW 永續認證、Cult Wine 與高級料理配餐。',
    tags: ['微氣候', 'CCSW', 'Cult Wine', '高級配餐'],
    modules: (californiaLearningLevels.level3?.modules || []).length,
    lessons: LEVEL_LESSON_IDS[3].length,
    progress: levelProgress(3),
    unlocked: isLevelUnlocked(3),
    unlockHint: '完成 Level 2 後解鎖'
  }
])

const modalLevels = computed(() =>
  LEVEL_KEYS.map(n => ({ label: `Level ${n}`, pct: levelProgress(n) }))
)
</script>
