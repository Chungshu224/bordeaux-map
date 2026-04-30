<template>
  <CourseHomeLayout :theme="theme" region-name="California" :breadcrumb-country="$t('california.selector.breadcrumbCountry')">
    <RegionHero
      :icon="theme.icon"
      :tagline="$t('california.selector.tagline')"
      :title="$t('california.selector.title')"
      :subtitle="$t('california.selector.subtitle')"
      :description="$t('california.selector.description')"
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
      :title="$t('california.selector.levelTrackTitle')"
      :subtitle="$t('california.selector.levelTrackSubtitle')"
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
import { californiaLearningState, californiaLearningLevels, getLocalizedCaliforniaLevels } from '../../stores/californiaLearningStore.js'
import { authActions } from '../../stores/authStore.js'

const emit = defineEmits(['startLevel', 'openMap', 'openQuiz', 'openNotes', 'openGames', 'backToPage'])

const { t, te, tm } = useI18n()
const theme = getTheme('california')
const showProgress = ref(false)

const completedLessons = computed(() => californiaLearningState.completedLessons)
const localizedLevels = computed(() => getLocalizedCaliforniaLevels(t, te))

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
      return levelProgress(n) > 0
        ? t('california.selector.progress.continueLevel', { n })
        : t('california.selector.progress.startLevel', { n })
    }
  }
  return t('california.selector.progress.restart')
})
const progressHeadline = computed(() => {
  if (totalProgressPct.value === 0) return t('california.selector.progress.start')
  if (totalProgressPct.value >= 100) return t('california.selector.progress.complete')
  return t('california.selector.progress.progressText', {
    done: completedLessons.value.length,
    total: totalLessonCount.value,
  })
})
const progressSubline = computed(() => {
  for (const n of LEVEL_KEYS) {
    if (levelProgress(n) < 100) return t('california.selector.progress.currentStage', { n })
  }
  return ''
})
function startJourney() {
  for (const n of LEVEL_KEYS) {
    if (isLevelUnlocked(n) && levelProgress(n) < 100) { emit('startLevel', n); return }
  }
  emit('startLevel', 1)
}

const heroStats = computed(() => [
  { value: '154+', label: t('california.selector.heroStats.ava') },
  { value: '5',    label: t('california.selector.heroStats.regions') },
  { value: '1976', label: t('california.selector.heroStats.paris') }
])

const quickNavItems = computed(() => [
  { key: 'map' },
  { key: 'games' },
  { key: 'achievements' },
  {
    key: 'progress',
    desc: t('california.selector.quickNav.progressDesc', {
      pct: totalProgressPct.value,
      done: completedLessons.value.length,
    }),
  },
  {
    key: 'notebook',
    icon: '📔',
    title: t('california.selector.quickNav.notebookTitle'),
    desc: t('california.selector.quickNav.notebookDesc'),
  }
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

const levelData = computed(() => {
  const lv1 = localizedLevels.value.level1 || {}
  const lv2 = localizedLevels.value.level2 || {}
  const lv3 = localizedLevels.value.level3 || {}
  return [
    {
      number: 1,
      title: t('california.levels.1.shortTitle'),
      subtitle: t('california.levels.1.shortSubtitle'),
      icon: '🍷',
      description: t('california.levels.1.shortDesc'),
      tags: tm('california.levels.1.tags'),
      modules: (lv1.modules || []).length,
      lessons: LEVEL_LESSON_IDS[1].length,
      progress: levelProgress(1),
      unlocked: true
    },
    {
      number: 2,
      title: t('california.levels.2.shortTitle'),
      subtitle: t('california.levels.2.shortSubtitle'),
      icon: '🏆',
      description: t('california.levels.2.shortDesc'),
      tags: tm('california.levels.2.tags'),
      modules: (lv2.modules || []).length,
      lessons: LEVEL_LESSON_IDS[2].length,
      progress: levelProgress(2),
      unlocked: isLevelUnlocked(2),
      unlockHint: t('california.selector.unlockHint.level2')
    },
    {
      number: 3,
      title: t('california.levels.3.shortTitle'),
      subtitle: t('california.levels.3.shortSubtitle'),
      icon: '🌱',
      description: t('california.levels.3.shortDesc'),
      tags: tm('california.levels.3.tags'),
      modules: (lv3.modules || []).length,
      lessons: LEVEL_LESSON_IDS[3].length,
      progress: levelProgress(3),
      unlocked: isLevelUnlocked(3),
      unlockHint: t('california.selector.unlockHint.level3')
    }
  ]
})

const modalLevels = computed(() =>
  LEVEL_KEYS.map(n => ({ label: `Level ${n}`, pct: levelProgress(n) }))
)
</script>
