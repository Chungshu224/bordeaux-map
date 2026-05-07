<template>
  <CourseHomeLayout :theme="theme" region-name="Bourgogne" :breadcrumb-country="$t('bourgogne.selector.breadcrumbCountry')">
    <RegionHero
      :icon="theme.icon"
      :tagline="$t('bourgogne.selector.tagline')"
      :title="$t('bourgogne.selector.title')"
      :subtitle="$t('bourgogne.selector.subtitle')"
      :description="$t('bourgogne.selector.description')"
      :stats="heroStats"
    />

    <ProgressStrip
      :headline="progressHeadline"
      :subline="progressSubline"
      :percent="totalProgress"
      :completed-count="completedLevels"
      :total-count="4"
      :cta-text="heroButtonText"
      @cta="startJourney"
      @open-progress="showProgress = true"
      @open-achievements="showAchievement = true"
    />

    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <LevelTrack
      :title="$t('bourgogne.selector.levelTrackTitle')"
      :subtitle="$t('bourgogne.selector.levelTrackSubtitle')"
      :levels="levelData"
      @enter="(n) => emit('startLevel', n)"
    />

    <ProgressModal
      :open="showProgress"
      :completed-count="completedLevels"
      :total-count="4"
      :overall-pct="totalProgress"
      :levels="modalLevels"
      :theme-color="theme.primary"
      @close="showProgress = false"
    />
    <AchievementModal :open="showAchievement" course-key="bourgogne" @close="showAchievement = false" />
  </CourseHomeLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  CourseHomeLayout, RegionHero, ProgressStrip, QuickNavGrid,
  LevelTrack, ProgressModal, AchievementModal, getTheme
} from '../../shared/courseHome/index.js'
import { useProgress } from '../composables/useProgress.js'
import { authActions } from '../../../stores/authStore.js'

const { t } = useI18n()

const emit = defineEmits(['startLevel', 'openMap', 'openGameHub', 'openNotebook'])

const theme = getTheme('bourgogne')
const progressStore = useProgress()
const showProgress = ref(false)
const showAchievement = ref(false)

const levels = ref([])
const userProgress = ref({
  1: { completed: false, progress: 0 },
  2: { completed: false, progress: 0 },
  3: { completed: false, progress: 0 },
  4: { completed: false, progress: 0 }
})

onMounted(async () => {
  try {
    const res = await fetch('/bourgogne/data/courses/levels.json')
    const data = await res.json()
    levels.value = data.levels
    updateLevelLocks()
  } catch (e) { console.warn('[Bourgogne] levels.json load failed', e) }

  const saved = localStorage.getItem('burgundy-course-progress')
  if (saved) {
    try { userProgress.value = JSON.parse(saved) } catch {}
  }
})

function updateLevelLocks() {
  if (!levels.value.length) return
  if (authActions.isAdmin && authActions.isAdmin()) {
    levels.value.forEach(l => { l.unlocked = true })
    return
  }
  levels.value[0].unlocked = true
  if (levels.value[1]) levels.value[1].unlocked = progressStore.getCompletedLessons('beginner-m8').includes('lesson3')
  if (levels.value[2]) levels.value[2].unlocked = progressStore.getCompletedLessons('intermediate-m8').includes('m8-l3')
  if (levels.value[3]) levels.value[3].unlocked = progressStore.getCompletedLessons('advanced-m15').includes('m15-l5')
}

const completedLevels = computed(() =>
  Object.values(userProgress.value).filter(p => p.completed).length
)
const totalProgress = computed(() => {
  const sum = Object.values(userProgress.value).reduce((s, p) => s + (p.progress || 0), 0)
  return Math.round(sum / 4)
})
function getProgress(id) { return userProgress.value[id]?.progress || 0 }
function isUnlocked(id) {
  const lvl = levels.value.find(l => l.id === id)
  return !!lvl?.unlocked
}

const heroButtonText = computed(() => {
  const next = levels.value.find(l => l.unlocked && getProgress(l.id) < 100)
  if (!next) return t('bourgogne.selector.progress.restart')
  return getProgress(next.id) > 0
    ? t('bourgogne.selector.progress.continueLevel', { n: next.id })
    : t('bourgogne.selector.progress.startLevel', { n: next.id })
})
const progressHeadline = computed(() => {
  if (totalProgress.value === 0) return t('bourgogne.selector.progress.start')
  if (totalProgress.value >= 100) return t('bourgogne.selector.progress.complete')
  return t('bourgogne.selector.progress.done', { done: completedLevels.value })
})
const progressSubline = computed(() => {
  const next = levels.value.find(l => l.unlocked && getProgress(l.id) < 100)
  return next ? t('bourgogne.selector.progress.currentStage', { name: next.name }) : ''
})
function startJourney() {
  const next = levels.value.find(l => l.unlocked && getProgress(l.id) < 100) || levels.value[0]
  if (next) emit('startLevel', next.id)
}

const heroStats = computed(() => [
  { value: '84',   label: t('bourgogne.selector.heroStats.aocs') },
  { value: '1247', label: t('bourgogne.selector.heroStats.climats') },
  { value: '4',    label: t('bourgogne.selector.heroStats.stages') },
])

const quickNavItems = computed(() => [
  { key: 'map', desc: t('bourgogne.selector.quickNav.mapDesc') },
  { key: 'games' },
  { key: 'achievements' },
  { key: 'progress', desc: t('bourgogne.selector.quickNav.progressDesc', { pct: totalProgress.value, done: completedLevels.value }) },
  { key: 'notebook' }
])
function onQuickNav(key) {
  switch (key) {
    case 'map':          emit('openMap'); break
    case 'games':        emit('openGameHub'); break
    case 'achievements': showAchievement.value = true; break
    case 'notebook':     emit('openNotebook'); break
    case 'progress':     showProgress.value = true; break
  }
}

const levelData = computed(() => levels.value.map(l => ({
  number: l.id,
  title: t(`bourgogne.levels.${l.id}.title`),
  subtitle: t(`bourgogne.levels.${l.id}.subtitle`),
  icon: l.icon || '🍇',
  description: t(`bourgogne.levels.${l.id}.description`),
  tags: t(`bourgogne.levels.${l.id}.tags`),
  modules: l.modules ?? 0,
  lessons: l.hours ? `${l.hours}h` : 0,
  progress: getProgress(l.id),
  unlocked: !!l.unlocked,
  unlockHint: l.id === 1 ? '' : t(`bourgogne.selector.unlockHint.level${l.id}`)
})))

const modalLevels = computed(() =>
  levels.value.map(l => ({ label: `L${l.id} ${l.name}`, pct: getProgress(l.id) }))
)
</script>
