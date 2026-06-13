<template>
  <CourseHomeLayout :theme="theme" region-name="Loire" :breadcrumb-country="t('loire.selector.breadcrumb')">
    <RegionHero
      :icon="theme.icon"
      :tagline="t('loire.selector.tagline')"
      :title="t('loire.selector.title')"
      :subtitle="t('loire.selector.subtitle')"
      :description="t('loire.selector.description')"
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
      :title="t('loire.selector.levelTrackTitle')"
      :subtitle="t('loire.selector.levelTrackSubtitle')"
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
import { useI18n } from 'vue-i18n'
import {
  CourseHomeLayout, RegionHero, ProgressStrip, QuickNavGrid,
  LevelTrack, ProgressModal, getTheme
} from '../shared/courseHome/index.js'
import { loireLearningState, loireLearningLevels } from '../../stores/loireLearningStore.js'
import { authActions } from '../../stores/authStore.js'

const emit = defineEmits(['startLevel', 'openMap', 'openQuiz', 'openNotes', 'openGames', 'backToPage'])

const { t } = useI18n()
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
      return levelProgress(n) > 0 ? t('loire.selector.progress.continue', { n }) : t('loire.selector.progress.begin', { n })
    }
  }
  return t('loire.selector.progress.restart')
})
const progressHeadline = computed(() => {
  if (totalProgressPct.value === 0) return t('loire.selector.progress.start')
  if (totalProgressPct.value >= 100) return t('loire.selector.progress.complete')
  return t('loire.selector.progress.inProgress', { done: completedLessons.value.length, total: totalLessonCount.value })
})
const progressSubline = computed(() => {
  for (const n of LEVEL_KEYS) {
    if (levelProgress(n) < 100) return t('loire.selector.progress.currentStage', { title: t(`loire.levels.${n}.title`) })
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
  { value: '5',   label: t('loire.selector.stats.subregions') },
  { value: '87',  label: t('loire.selector.stats.aoc') },
  { value: '10+', label: t('loire.selector.stats.varieties') }
]

const quickNavItems = computed(() => [
  { key: 'map' },
  { key: 'games' },
  { key: 'achievements' },
  { key: 'progress', desc: `${totalProgressPct.value}% 完成・${completedLessons.value.length} 課` },
  { key: 'notebook' }
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
    title: t(`loire.levels.${n}.title`).replace(/Level \d+ — /, ''),
    subtitle: t(`loire.levels.${n}.region`),
    icon: def.emoji || '🍇',
    description: t(`loire.levels.${n}.description`),
    tags: (def.keyAOC || []).slice(0, 5),
    modules: (def.modules || []).length,
    lessons: (def.lessons || []).length,
    progress: levelProgress(n),
    unlocked: isLevelUnlocked(n),
    unlockHint: t('loire.selector.unlockHint', { prev: n - 1 })
  }
}))

const modalLevels = computed(() =>
  LEVEL_KEYS.map(n => ({ label: `Level ${n}`, pct: levelProgress(n) }))
)
</script>
