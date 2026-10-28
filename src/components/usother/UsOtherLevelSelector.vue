<template>
  <CourseHomeLayout
    :theme="theme"
    region-name="US Other Regions"
    :breadcrumb-country="gt('美國')"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      :tagline="gt('新世界產區・Diploma 備考')"
      :title="gt('美國其他產區')"
      subtitle="USA · Oregon · Washington · New York · AVA · Pinot Noir · Riesling"
      :description="gt('從太平洋西北的 Willamette Valley 與 Columbia Valley，到東岸的 Finger Lakes 與 Long Island，三階段系統化掌握 AVA 制度與各州風格，並簡述 Idaho、Virginia、Texas，以 WSET Diploma D3 與 MW 為備考目標。')"
      :stats="heroStats"
    />

    <!-- 2. Progress Strip -->
    <ProgressStrip
      :headline="progressHeadline"
      :subline="progressSubline"
      :percent="totalProgressPct"
      :completed-count="completedLessons.length"
      :total-count="totalLessonCount"
      :achievement-count="achievementCount"
      :streak="0"
      :cta-text="heroButtonText"
      @cta="startJourney"
      @open-progress="showProgressModal = true"
      @open-achievements="showAchievementModal = true"
    />

    <!-- 3. Quick Nav（地圖／練習／筆記製作中） -->
    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <!-- 4. Level Track -->
    <LevelTrack
      :title="gt('選擇課程階段')"
      :subtitle="gt('Level 1 建立基礎 → Level 2 逐州深入 → Level 3 Diploma／MW 精修。')"
      :levels="levelData"
      :max-columns="3"
      @enter="(n) => emit('enterLevel', n)"
    />

    <!-- 5. Region Story -->
    <RegionStoryGrid
      :title="gt('為什麼學習美國其他產區？')"
      :items="overviewItems"
    />

    <AchievementModal :open="showAchievementModal" course-key="usother" @close="showAchievementModal = false" />

    <ProgressModal
      :open="showProgressModal"
      :completed-count="completedLessons.length"
      :total-count="totalLessonCount"
      :overall-pct="totalProgressPct"
      :levels="progressLevels"
      :theme-color="theme.primary"
      @close="showProgressModal = false"
    />
  </CourseHomeLayout>
</template>

<script setup>
import { gt } from '../../locales/usotherUi/index.js'
import { ref, computed } from 'vue'
import {
  CourseHomeLayout,
  RegionHero,
  ProgressStrip,
  QuickNavGrid,
  LevelTrack,
  RegionStoryGrid,
  ProgressModal,
  AchievementModal,
  getTheme
} from '../shared/courseHome/index.js'
import { usotherLearningState, usotherLearningLevels } from '../../stores/usotherLearningStore.js'
import { authActions } from '../../stores/authStore.js'

import { globalUsOtherAchievementManager, usotherAchievementState } from '../../stores/usotherAchievementSystem.js'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames', 'openNotebook'])
const showAchievementModal = ref(false)

globalUsOtherAchievementManager.init()
const achievementCount = computed(() => usotherAchievementState.unlockedAchievements.length)

const theme = getTheme('usother')
const showProgressModal = ref(false)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => usotherLearningState.completedLessons)
const LEVEL_LESSON_IDS = Object.fromEntries(
  LEVELS.map(n => [n, (usotherLearningLevels[`level${n}`]?.lessons || []).map(l => l.id)])
)
const totalLessonCount = LEVELS.reduce((s, n) => s + LEVEL_LESSON_IDS[n].length, 0)

function levelProgress(n) {
  const ids = LEVEL_LESSON_IDS[n] || []
  if (!ids.length) return 0
  const done = completedLessons.value.filter(id => ids.includes(id)).length
  return (done / ids.length) * 100
}

const totalProgressPct = computed(() => {
  if (!totalLessonCount) return 0
  return Math.round((completedLessons.value.length / totalLessonCount) * 100)
})

const progressLevels = computed(() =>
  LEVELS.map(n => ({ label: `Level ${n}`, pct: levelProgress(n) }))
)

function isLevelUnlocked(n) {
  if (n === 1) return true
  if (authActions.isAdmin()) return true
  if (usotherLearningState.testMode) return true
  const finalId = (LEVEL_LESSON_IDS[n - 1] || []).at(-1)
  return finalId != null && completedLessons.value.includes(finalId)
}

// 目前應該繼續的階段：第一個尚未完成且已解鎖的階段
const nextLevel = computed(() => {
  for (const n of LEVELS) {
    if (levelProgress(n) < 100 && isLevelUnlocked(n)) return n
  }
  return 1
})

const heroButtonText = computed(() => {
  if (totalProgressPct.value === 0) return gt('開始學習')
  if (totalProgressPct.value >= 100) return gt('複習課程')
  return gt('繼續 Level {n}', { n: nextLevel.value })
})

const progressHeadline = computed(() => {
  if (totalProgressPct.value === 0) return gt('開始你的美國產區之旅')
  if (totalProgressPct.value >= 100) return gt('🎉 已完成全部課程！')
  return gt('已完成 {done} / {total} 課', { done: completedLessons.value.length, total: totalLessonCount })
})
const progressSubline = computed(() => {
  if (totalProgressPct.value === 0) return gt('從 Level 1 入門開始')
  if (totalProgressPct.value >= 100) return ''
  return gt('當前階段：Level {n}', { n: nextLevel.value })
})

function startJourney() {
  emit('enterLevel', totalProgressPct.value >= 100 ? 1 : nextLevel.value)
}

const heroStats = [
  { value: '3', label: gt('主要州') },
  { value: '21', label: gt('系統課程') },
  { value: '3',  label: gt('學習階段') }
]

const quickNavItems = computed(() => [
  { key: 'map',      desc: gt('AVA 示意點互動地圖') },
  { key: 'games',    desc: gt('品種配對・產區速答') },
  { key: 'notebook', desc: gt('美國其他產區酒款品飲筆記') },
  { key: 'achievements', desc: gt('{n} 個已解鎖徽章', { n: achievementCount.value }) },
  { key: 'progress', desc: gt('{pct}% 完成・{n} 課', { pct: totalProgressPct.value, n: completedLessons.value.length }) }
])

function onQuickNav(key) {
  if (key === 'map') emit('openMap')
  else if (key === 'games') emit('openGames')
  else if (key === 'notebook') emit('openNotebook')
  else if (key === 'achievements') showAchievementModal.value = true
  else if (key === 'progress') showProgressModal.value = true
}

const levelData = computed(() => [
  {
    number: 1,
    title: gt('美國產區入門'),
    subtitle: gt('基礎認識'),
    icon: '🌱',
    description: gt('歷史、西北與東岸的氣候地理、主要品種，以及 AVA 制度與標籤規定的整體輪廓。'),
    tags: [gt('歷史'), 'AVA', 'Pinot Noir', 'Riesling', gt('標籤規則')],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[1].length,
    progress: levelProgress(1),
    unlocked: true
  },
  {
    number: 2,
    title: gt('美國產區與法規'),
    subtitle: gt('逐區深入'),
    icon: '🗺️',
    description: gt('Oregon、Washington、New York 的 AVA 逐區深入，含跨州 AVA。'),
    tags: ['Willamette Valley', 'Columbia Valley', 'Finger Lakes', 'Long Island', gt('跨州 AVA')],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[2].length,
    progress: levelProgress(2),
    unlocked: isLevelUnlocked(2),
    unlockHint: gt('完成 Level 1 後解鎖')
  },
  {
    number: 3,
    title: gt('Diploma／MW 精修'),
    subtitle: gt('備考進階'),
    icon: '🏆',
    description: gt('栽培與氣候、釀造風格、風土比較、新興產區、產業與市場、盲品論述。'),
    tags: [gt('栽培與氣候'), gt('風土比較'), gt('新興產區'), gt('產業與市場')],
    modules: 3,
    lessons: LEVEL_LESSON_IDS[3].length,
    progress: levelProgress(3),
    unlocked: isLevelUnlocked(3),
    unlockHint: gt('完成 Level 2 後解鎖')
  }
])

const overviewItems = [
  { icon: '🌲', title: gt('太平洋西北'), desc: gt('Oregon 與 Washington 位於高緯度，Cascades 山脈把產區分成濕潤的西側與乾燥的東側。') },
  { icon: '💧', title: gt('東岸的湖與海'), desc: gt('Finger Lakes 的湖泊與 Long Island 的大西洋緩和冬夏極端，造就冷涼風格。') },
  { icon: '🏷️', title: gt('AVA 制度'), desc: gt('AVA 只規範地理範圍，不限品種與釀法；標示比例由聯邦與州法共同決定。') },
  { icon: '🍇', title: gt('多樣的風格'), desc: gt('Pinot Noir、Bordeaux 型紅酒、Syrah 與 Riesling，在同一個國家展現截然不同的面貌。') }
]
</script>
