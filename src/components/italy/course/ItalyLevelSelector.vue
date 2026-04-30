<template>
  <CourseHomeLayout :theme="theme" region-name="Italy" :breadcrumb-country="$t('italy.selector.breadcrumbCountry')">
    <RegionHero
      :icon="theme.icon"
      :tagline="$t('italy.selector.tagline')"
      :title="$t('italy.selector.title')"
      :subtitle="$t('italy.selector.subtitle')"
      :description="$t('italy.selector.description')"
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
      :title="$t('italy.selector.levelTrackTitle')"
      :subtitle="$t('italy.selector.levelTrackSubtitle')"
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
import { useI18n } from 'vue-i18n'
import {
  CourseHomeLayout, RegionHero, ProgressStrip, QuickNavGrid,
  LevelTrack, ProgressModal, getTheme
} from '../../shared/courseHome/index.js'
import { courseLevels, getLevelProgressPct, getUserProgress } from '../data/courseLevels.js'
import { authActions } from '../../../stores/authStore.js'

const { t } = useI18n()
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
  if (levelPct('level1') >= 100 && isLevelUnlocked('level2')) return t('italy.selector.progress.continueLevel2')
  if (levelPct('level1') > 0) return t('italy.selector.progress.continueLevel1')
  return t('italy.selector.progress.startBtn')
})
const progressHeadline = computed(() => {
  if (totalProgressPct.value === 0) return t('italy.selector.progress.start')
  if (totalProgressPct.value >= 100) return t('italy.selector.progress.complete')
  return t('italy.selector.progress.progressText', { done: completedTotal.value, total: totalLessonCount.value })
})
const progressSubline = computed(() => {
  if (levelPct('level1') < 100) return t('italy.selector.progress.currentStageL1')
  if (levelPct('level2') < 100) return t('italy.selector.progress.currentStageL2')
  return t('italy.selector.progress.currentStageL3')
})

function startJourney() {
  if (levelPct('level1') >= 100 && isLevelUnlocked('level2')) emit('startLevel', 'level2')
  else emit('startLevel', 'level1')
}
function onEnterLevel(n) { emit('startLevel', `level${n}`) }

const heroStats = computed(() => [
  { value: '20',   label: t('italy.selector.heroStats.regions') },
  { value: '76',   label: t('italy.selector.heroStats.docg') },
  { value: '350+', label: t('italy.selector.heroStats.varieties') },
])

const quickNavItems = computed(() => [
  { key: 'map' },
  { key: 'games' },
  { key: 'progress', desc: t('italy.selector.quickNav.progressDesc', { pct: totalProgressPct.value, done: completedTotal.value }) },
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
    number: 1,
    title: t('italy.levels.1.shortTitle'),
    subtitle: t('italy.levels.1.shortSubtitle'),
    icon: '🌱',
    description: t('italy.levels.1.description'),
    tags: t('italy.levels.1.tags'),
    modules: 4, lessons: 12,
    progress: levelPct('level1'),
    unlocked: true
  },
  {
    number: 2,
    title: t('italy.levels.2.shortTitle'),
    subtitle: t('italy.levels.2.shortSubtitle'),
    icon: '🍷',
    description: t('italy.levels.2.description'),
    tags: t('italy.levels.2.tags'),
    modules: 6, lessons: 23,
    progress: levelPct('level2'),
    unlocked: isLevelUnlocked('level2'),
    unlockHint: t('italy.selector.unlockHint.level2')
  },
  {
    number: 3,
    title: t('italy.levels.3.shortTitle'),
    subtitle: t('italy.levels.3.shortSubtitle'),
    icon: '🏆',
    description: t('italy.levels.3.description'),
    tags: t('italy.levels.3.tags'),
    modules: 7, lessons: 26,
    progress: levelPct('level3'),
    unlocked: isLevelUnlocked('level3'),
    unlockHint: t('italy.selector.unlockHint.level3')
  }
])

const modalLevels = computed(() =>
  ['level1', 'level2', 'level3'].map((k, i) => ({
    label: `Level ${i + 1}`,
    pct: levelPct(k)
  }))
)
</script>
