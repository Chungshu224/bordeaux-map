<template>
  <CourseHomeLayout :theme="theme" region-name="Loire" breadcrumb-country="法國・羅亞爾河">
    <RegionHero
      :icon="theme.icon"
      tagline="羅亞爾河谷・法國花園・五大子產區"
      title="羅亞爾河谷葡萄酒"
      subtitle="Loire Valley · Sancerre · Vouvray · Muscadet · Chinon"
      description="從南特碘香 Muscadet、安茹白詩南、都漢氣泡，到中央產區的桑塞爾雙雄——掌握法國最多元的葡萄酒河谷。"
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
      subtitle="4 階段、由西向東遊歷羅亞爾河谷各子產區。"
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
import { loireLearningState, loireLearningLevels } from '../../stores/loireLearningStore.js'
import { authActions } from '../../stores/authStore.js'

const emit = defineEmits(['startLevel', 'openMap', 'openQuiz', 'openNotes', 'openGames', 'backToPage'])

const theme = getTheme('loire')
const showProgress = ref(false)

const completedLessons = computed(() => loireLearningState.completedLessons)

const LEVEL_KEYS = [1, 2, 3, 4]
const LEVEL_LESSON_IDS = LEVEL_KEYS.reduce((acc, n) => {
  acc[n] = (loireLearningLevels[`level${n}`]?.lessons || []).map(l => l.id)
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
  if (loireLearningState.testMode) return true
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
  if (totalProgressPct.value === 0) return '開始你的羅亞爾河谷之旅'
  if (totalProgressPct.value >= 100) return '🎉 已遊歷羅亞爾河谷全部 AOC'
  return `已完成 ${completedLessons.value.length} / ${totalLessonCount.value} 課`
})
const progressSubline = computed(() => {
  for (const n of LEVEL_KEYS) {
    if (levelProgress(n) < 100) return `當前階段：${loireLearningLevels[`level${n}`]?.title || ''}`
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
  { value: '5',   label: '子產區' },
  { value: '87',  label: 'AOC 法定產區' },
  { value: '10+', label: '主要品種' }
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

const levelData = computed(() => LEVEL_KEYS.map(n => {
  const def = loireLearningLevels[`level${n}`] || {}
  return {
    number: n,
    title: def.title?.replace(/Level \d+ — /, '') || `Level ${n}`,
    subtitle: def.region || '',
    icon: def.emoji || '🍇',
    description: def.description || '',
    tags: (def.keyAOC || []).slice(0, 5),
    modules: (def.modules || []).length,
    lessons: (def.lessons || []).length,
    progress: levelProgress(n),
    unlocked: isLevelUnlocked(n),
    unlockHint: `完成 Level ${n - 1} 後解鎖`
  }
}))

const modalLevels = computed(() =>
  LEVEL_KEYS.map(n => ({ label: `Level ${n}`, pct: levelProgress(n) }))
)
</script>
