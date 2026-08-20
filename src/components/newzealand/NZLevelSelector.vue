<template>
  <CourseHomeLayout :theme="theme" region-name="New Zealand" breadcrumb-country="新世界・大洋洲">
    <RegionHero
      :icon="theme.icon"
      tagline="紐西蘭葡萄酒・南半球純淨葡萄酒聖地"
      title="紐西蘭葡萄酒"
      subtitle="New Zealand Wine · Marlborough · Central Otago · Hawke's Bay"
      description="從 Marlborough Sauvignon Blanc 到 Central Otago 全球最南 Pinot Noir、永續農業與生物動力——掌握南半球純淨之國的葡萄酒。"
      :stats="heroStats"
    />

    <ProgressStrip
      :headline="progressHeadline"
      :subline="progressSubline"
      :percent="totalProgressPct"
      :completed-count="completedCount"
      :total-count="totalLessonsCount"
      :cta-text="heroButtonText"
      @cta="startJourney"
      @open-progress="showProgress = true"
      @open-achievements="showAchievement = true"
    />

    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <LevelTrack
      title="選擇課程階段"
      subtitle="3 階段、由入門到專業認證的紐西蘭葡萄酒之旅。"
      :levels="levelData"
      @enter="(n) => emit('enterLevel', n)"
    />

    <ProgressModal
      :open="showProgress"
      :completed-count="completedCount"
      :total-count="totalLessonsCount"
      :overall-pct="totalProgressPct"
      :levels="modalLevels"
      :theme-color="theme.primary"
      @close="showProgress = false"
    />
    <AchievementModal :open="showAchievement" course-key="newzealand" @close="showAchievement = false" />
  </CourseHomeLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  CourseHomeLayout, RegionHero, ProgressStrip, QuickNavGrid,
  LevelTrack, ProgressModal, AchievementModal, getTheme
} from '../shared/courseHome/index.js'
import { authActions, authState } from '../../stores/authStore.js'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames', 'openNotebook'])

const props = defineProps({
  modules:          { type: Array, default: () => [] },
  completedLessons: { type: Array, default: () => [] },
  levels:           { type: Array, default: () => [1, 2, 3] }
})

const theme = getTheme('newzealand')
const showProgress = ref(false)
const showAchievement = ref(false)

const statsByLevel = computed(() => {
  const map = {}
  const lvls = [...new Set(props.modules.map(m => m.level))]
  for (const n of lvls) {
    const mods = props.modules.filter(m => m.level === n)
    const lessons = mods.flatMap(m => m.lessons || [])
    const ids = lessons.map(l => l.id)
    map[n] = { modules: mods.length, lessons: lessons.length, ids }
  }
  return map
})

const totalLessonsCount = computed(() =>
  props.modules.reduce((s, m) => s + (m.lessons?.length || 0), 0)
)
const completedCount = computed(() => props.completedLessons.length)
const totalProgressPct = computed(() =>
  totalLessonsCount.value
    ? Math.round((completedCount.value / totalLessonsCount.value) * 100)
    : 0
)

function levelProgress(n) {
  const s = statsByLevel.value[n]
  if (!s || !s.lessons) return 0
  const done = props.completedLessons.filter(id => s.ids.includes(id)).length
  return (done / s.lessons) * 100
}
function isLevelUnlocked(n) {
  if (n === 1) return true
  if (authActions.isAdmin && authActions.isAdmin()) return true
  try {
    const userId = authState.user?.id
    if (userId && localStorage.getItem(`nz-wine-level${n - 1}-passed:${userId}`) === 'true') return true
  } catch {}
  return levelProgress(n - 1) >= 100
}

const heroButtonText = computed(() => {
  if (levelProgress(1) >= 100 && isLevelUnlocked(2)) return '繼續 Level 2'
  if (levelProgress(1) > 0) return '繼續 Level 1'
  return '開始學習'
})
const progressHeadline = computed(() => {
  if (totalProgressPct.value === 0) return '開始你的紐西蘭葡萄酒之旅'
  if (totalProgressPct.value >= 100) return '🎉 已完成全部課程'
  return `已完成 ${completedCount.value} / ${totalLessonsCount.value} 課`
})
const progressSubline = computed(() => {
  if (levelProgress(1) < 100) return '當前階段：Level 1 · 入門'
  if (levelProgress(2) < 100) return '當前階段：Level 2 · 南北兩島探索'
  return '當前階段：Level 3 · 深度專業'
})
function startJourney() {
  if (levelProgress(1) >= 100 && isLevelUnlocked(2)) emit('enterLevel', 2)
  else emit('enterLevel', 1)
}

const heroStats = [
  { value: '17', label: 'GI 法定產區' },
  { value: '4',  label: '主要品種' },
  { value: '🥝', label: '南北兩島' }
]

const quickNavItems = computed(() => [
  { key: 'map', desc: '17 GI 互動地圖' },
  { key: 'games' },
  { key: 'achievements' },
  { key: 'progress', desc: `${totalProgressPct.value}% 完成・${completedCount.value} 課` },
  { key: 'notebook' }
])
function onQuickNav(key) {
  switch (key) {
    case 'map':          emit('openMap'); break
    case 'games':        emit('openGames'); break
    case 'achievements': showAchievement.value = true; break
    case 'notebook':     emit('openNotebook'); break
    case 'progress':     showProgress.value = true; break
  }
}

const LEVEL_INFO = {
  1: {
    title: '紐西蘭入門', subtitle: '基礎認識', icon: '🌱',
    description: '地理環境、氣候特性、Sauvignon Blanc / Pinot Noir 旗艦品種與產業法規。',
    tags: ['紐西蘭簡史', '氣候與地理', 'SB 旗艦', 'PN 珍寶']
  },
  2: {
    title: '南北兩島探索', subtitle: '經典產區', icon: '🗺️',
    description: '北島 Hawke\'s Bay、Wairarapa；南島 Marlborough、Central Otago 風土深度。',
    tags: ['Marlborough', 'Central Otago', 'Hawke\'s Bay', 'Martinborough']
  },
  3: {
    title: '深度專業進修', subtitle: '永續與品鑑', icon: '🏆',
    description: '葡萄栽培、永續與生物動力、精釀工藝、市場定位與專業品鑑。',
    tags: ['永續農園', '精釀工藝', '市場定位', '專業品鑑']
  }
}

const levelData = computed(() => props.levels.map(n => {
  const info = LEVEL_INFO[n] || { title: `Level ${n}`, subtitle: '', icon: '🍇', description: '', tags: [] }
  const s = statsByLevel.value[n] || { modules: 0, lessons: 0 }
  return {
    number: n, ...info,
    modules: s.modules, lessons: s.lessons,
    progress: levelProgress(n),
    unlocked: isLevelUnlocked(n),
    unlockHint: `完成 Level ${n - 1} 後解鎖`
  }
}))

const modalLevels = computed(() =>
  props.levels.map(n => ({ label: `Level ${n}`, pct: levelProgress(n) }))
)
</script>
