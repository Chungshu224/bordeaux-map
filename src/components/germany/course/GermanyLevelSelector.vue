<template>
  <CourseHomeLayout :theme="theme" region-name="Germany" breadcrumb-country="歐洲・中歐">
    <RegionHero
      :icon="theme.icon"
      tagline="德國葡萄酒・Riesling 王國・冷涼氣候"
      title="德國葡萄酒"
      subtitle="German Wine · Riesling · Mosel · VDP"
      description="從 13 個 Anbaugebiete 法定產區、Prädikat 分級到 VDP 莊園分級——掌握 Riesling 王國的優雅與礦物表現。"
      :stats="heroStats"
    />

    <ProgressStrip
      :headline="progressHeadline"
      :subline="progressSubline"
      :percent="totalProgressPct"
      :completed-count="completedTotal"
      :total-count="totalLessonCount"
      :cta-text="heroButtonText"
      @cta="startJourney"
      @open-progress="showProgress = true"
    />

    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <LevelTrack
      title="選擇課程階段"
      subtitle="從入門到 VDP 專家認證，循序掌握德國葡萄酒的優雅。"
      :levels="levelData"
      @enter="(n) => emit('startLevel', `level${n}`)"
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
    <AchievementModal :open="showAchievement" course-key="germany" @close="showAchievement = false" />
  </CourseHomeLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  CourseHomeLayout, RegionHero, ProgressStrip, QuickNavGrid,
  LevelTrack, ProgressModal, AchievementModal, getTheme
} from '../../shared/courseHome/index.js'
import { getLevelProgressPct, getUserProgress } from '../data/courseLevels.js'
import { authActions } from '../../../stores/authStore.js'

const emit = defineEmits(['startLevel', 'openMap', 'openGames', 'openNotebook'])

const theme = getTheme('germany')
const showProgress = ref(false)
const showAchievement = ref(false)

const LESSON_COUNTS = { level1: 11, level2: 17, level3: 9 }
const totalLessonCount = computed(() => Object.values(LESSON_COUNTS).reduce((s, n) => s + n, 0))
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
  if (key === 'level2') return getUserProgress('level1').completedLessons.includes('G1FinalExam')
  if (key === 'level3') return getUserProgress('level2').completedLessons.includes('G2FinalExam')
  return false
}

const heroButtonText = computed(() => {
  if (levelPct('level1') >= 100 && isLevelUnlocked('level2')) return '繼續 Level 2'
  if (levelPct('level1') > 0) return '繼續 Level 1'
  return '開始學習'
})
const progressHeadline = computed(() => {
  if (totalProgressPct.value === 0) return '開始你的德國葡萄酒之旅'
  if (totalProgressPct.value >= 100) return '🎉 已完成全部課程，恭喜成為德國葡萄酒達人！'
  return `已完成 ${completedTotal.value} / ${totalLessonCount.value} 課`
})
const progressSubline = computed(() => {
  if (levelPct('level1') < 100) return '當前階段：Level 1 · 入門'
  if (levelPct('level2') < 100) return '當前階段：Level 2 · 進階產區'
  return '當前階段：Level 3 · 專家認證'
})

function startJourney() {
  if (levelPct('level1') >= 100 && isLevelUnlocked('level2')) emit('startLevel', 'level2')
  else emit('startLevel', 'level1')
}

const heroStats = [
  { value: '13',   label: 'Anbaugebiete' },
  { value: '370+', label: 'Einzellage' },
  { value: 'VDP',  label: '莊園分級' }
]

const quickNavItems = computed(() => [
  { key: 'map' },
  { key: 'games' },
  { key: 'achievements' },
  { key: 'progress', desc: `${totalProgressPct.value}% 完成・${completedTotal.value} 課` },
  { key: 'notebook' }
])
function onQuickNav(key) {
  switch (key) {
    case 'map':          emit('openMap'); break
    case 'games':        emit('openGames'); break
    case 'notebook':     emit('openNotebook'); break
    case 'achievements': showAchievement.value = true; break
    case 'progress':     showProgress.value = true; break
  }
}

const levelData = computed(() => [
  {
    number: 1, title: '德國葡萄酒入門', subtitle: '基礎認識', icon: '🌱',
    description: '德國葡萄酒歷史與文化、QbA / Prädikat 分級制度、Riesling 與主要品種，建立扎實基礎。',
    tags: ['歷史與文化', 'QbA / Prädikat', 'Riesling', '酒標解讀', '冷涼氣候'],
    modules: 4, lessons: 11,
    progress: levelPct('level1'),
    unlocked: true
  },
  {
    number: 2, title: '進階產區探索', subtitle: '13 大產區', icon: '🍷',
    description: '深入 13 個 Anbaugebiete、地質風土、頂級葡萄園 Einzellage 與名莊年份。',
    tags: ['13 產區', 'Mosel 板岩', 'Rheingau', '頂級葡萄園', '名莊年份'],
    modules: 6, lessons: 17,
    progress: levelPct('level2'),
    unlocked: isLevelUnlocked('level2'),
    unlockHint: '完成 Level 1 後解鎖'
  },
  {
    number: 3, title: '專家認證', subtitle: 'VDP 與盲品', icon: '🏆',
    description: 'VDP 四級分級系統、盲品技巧、侍酒師實務、投資與收藏指引。',
    tags: ['VDP 四級', '盲品方法', '餐酒進階', '投資指引'],
    modules: 4, lessons: 9,
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
