<template>
  <CourseHomeLayout :theme="theme" region-name="Bourgogne" breadcrumb-country="法國・布根地">
    <RegionHero
      :icon="theme.icon"
      tagline="布根地・Climats・1247 個風土地塊"
      title="布根地葡萄酒"
      subtitle="Bourgogne · Pinot Noir · Chardonnay · Climats"
      description="從金丘 Côte d'Or 到夏布利、馬貢內、薄酒萊——透過 Climats 風土系統認識世界最複雜的葡萄酒拼圖。"
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
      title="選擇課程階段"
      subtitle="4 階段、從基礎入門到 Climats 專家認證。"
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
import {
  CourseHomeLayout, RegionHero, ProgressStrip, QuickNavGrid,
  LevelTrack, ProgressModal, AchievementModal, getTheme
} from '../../shared/courseHome/index.js'
import { useProgress } from '../composables/useProgress.js'
import { authActions } from '../../../stores/authStore.js'

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
  if (!next) return '重新探索'
  return getProgress(next.id) > 0 ? `繼續 Level ${next.id}` : `開始 Level ${next.id}`
})
const progressHeadline = computed(() => {
  if (totalProgress.value === 0) return '開始你的布根地 Climats 之旅'
  if (totalProgress.value >= 100) return '🎉 已完成全部布根地課程'
  return `已完成 ${completedLevels.value} / 4 階段`
})
const progressSubline = computed(() => {
  const next = levels.value.find(l => l.unlocked && getProgress(l.id) < 100)
  return next ? `當前階段：${next.name}` : ''
})
function startJourney() {
  const next = levels.value.find(l => l.unlocked && getProgress(l.id) < 100) || levels.value[0]
  if (next) emit('startLevel', next.id)
}

const heroStats = [
  { value: '84',   label: 'AOCs' },
  { value: '1247', label: 'Climats' },
  { value: '4',    label: '階段' }
]

const quickNavItems = computed(() => [
  { key: 'map', desc: 'Climats 風土地圖' },
  { key: 'games' },
  { key: 'achievements' },
  { key: 'progress', desc: `${totalProgress.value}% 完成・${completedLevels.value}/4 階段` },
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
  title: l.name,
  subtitle: l.nameEn || `Level ${l.id}`,
  icon: l.icon || '🍇',
  description: l.description || '',
  tags: (l.features || []).slice(0, 5).map(f => f.text),
  modules: l.modules ?? 0,
  lessons: l.hours ? `${l.hours}h` : 0,
  progress: getProgress(l.id),
  unlocked: !!l.unlocked,
  unlockHint: l.prerequisite || `完成 Level ${l.id - 1} 後解鎖`
})))

const modalLevels = computed(() =>
  levels.value.map(l => ({ label: `L${l.id} ${l.name}`, pct: getProgress(l.id) }))
)
</script>
