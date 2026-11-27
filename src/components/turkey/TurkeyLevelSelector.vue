<template>
  <CourseHomeLayout :theme="theme" region-name="Turkey" :breadcrumb-country="'土耳其'">
    <RegionHero
      :icon="theme.icon"
      tagline="安納托利亞的古老葡萄園・延伸課程（不在 D3 國家清單）"
      title="土耳其葡萄酒"
      subtitle="Aegean · Thrace · Anatolia · Indigenous varieties"
      description="從愛琴海到東南安納托利亞：認識土耳其的慣用分區、本土品種（Öküzgözü、Boğazkere、Kalecik Karası、Narince、Emir）與葡萄酒法規。"
      :stats="heroStats"
    />

    <ProgressStrip
      :headline="progressHeadline"
      :subline="progressSubline"
      :percent="totalProgressPct"
      :completed-count="completedLessons.length"
      :total-count="TR_TOTAL_LESSONS"
      :streak="0"
      :achievement-count="0"
      :cta-text="heroButtonText"
      @cta="startJourney"
      @open-progress="showProgressModal = true"
    />

    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <LevelTrack
      title="選擇課程階段"
      subtitle="Level 1 入門 → Level 2 逐國產區與法規 → Level 3 進階精修。"
      :levels="levelData"
      :max-columns="3"
      @enter="(n) => emit('enterLevel', n)"
    />

    <RegionStoryGrid title="為什麼學土耳其？" :items="overviewItems" />

    <p class="eeh-admin-note">本課程僅供管理員閱讀，不對外販售。</p>

    <ProgressModal
      :open="showProgressModal"
      :completed-count="completedLessons.length"
      :total-count="TR_TOTAL_LESSONS"
      :overall-pct="totalProgressPct"
      :levels="progressLevels"
      :theme-color="theme.primary"
      @close="showProgressModal = false"
    />
  </CourseHomeLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  CourseHomeLayout, RegionHero, ProgressStrip, QuickNavGrid, LevelTrack, RegionStoryGrid, ProgressModal, getTheme
} from '../shared/courseHome/index.js'
import { trLearningState, trLevels, trLevelIds, trLearningProgress } from '../../stores/turkeyLearningStore.js'
import { TR_TOTAL_LESSONS } from '../../data/turkey/lessons.js'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames', 'openNotebook', 'openAchievements'])
const theme = getTheme('turkey')
const showProgressModal = ref(false)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => trLearningState.completedLessons)
const totalProgressPct = computed(() => trLearningProgress.value)

function levelProgress(n) {
  const ids = trLevelIds(n)
  if (!ids.length) return 0
  return (completedLessons.value.filter(id => ids.includes(id)).length / ids.length) * 100
}
const progressLevels = computed(() => LEVELS.map(n => ({ label: `Level ${n}`, pct: levelProgress(n) })))

const nextLevel = computed(() => LEVELS.find(n => levelProgress(n) < 100) || 1)
const heroButtonText = computed(() => totalProgressPct.value === 0 ? '開始學習' : totalProgressPct.value >= 100 ? '複習課程' : `繼續 Level ${nextLevel.value}`)
const progressHeadline = computed(() => totalProgressPct.value === 0 ? '開始你的土耳其之旅' : totalProgressPct.value >= 100 ? '🎉 已完成全部課程！' : `已完成 ${completedLessons.value.length} / ${TR_TOTAL_LESSONS} 課`)
const progressSubline = computed(() => totalProgressPct.value === 0 ? '從 Level 1 歷史與地理開始' : totalProgressPct.value >= 100 ? '' : `當前階段：Level ${nextLevel.value}`)
function startJourney() { emit('enterLevel', totalProgressPct.value >= 100 ? 1 : nextLevel.value) }

const heroStats = [
  { value: String(TR_TOTAL_LESSONS), label: '系統課程' },
  { value: '3', label: '學習階段' },
  { value: '4', label: '慣用分區' }
]

const quickNavItems = computed(() => [
  { key: 'progress', desc: `${totalProgressPct.value}% 完成・${completedLessons.value.length} 課` }
])
function onQuickNav(key) {
  if (key === 'games') emit('openGames')
  else if (key === 'notebook') emit('openNotebook')
  else if (key === 'achievements') emit('openAchievements')
  else if (key === 'progress') showProgressModal.value = true
}

const levelData = computed(() => [
  { number: 1, title: '入門：認識土耳其', subtitle: '基礎認識', icon: '🏺',
    description: '歷史、地理氣候與慣用分區、本土品種。',
    tags: ['歷史', '氣候', 'Öküzgözü', 'Narince'], modules: trLevels.level1.modules.length,
    lessons: trLevelIds(1).length, progress: levelProgress(1), unlocked: true },
  { number: 2, title: '分區與法規', subtitle: '逐區認識', icon: '🗺️',
    description: '愛琴海、馬爾馬拉與色雷斯、安納托利亞內陸與東部；葡萄酒公報與標籤。',
    tags: ['愛琴海', '色雷斯', '安納托利亞', '法規'], modules: trLevels.level2.modules.length,
    lessons: trLevelIds(2).length, progress: levelProgress(2), unlocked: true },
  { number: 3, title: '進階精修', subtitle: '深入論述', icon: '🏆',
    description: '產業與市場、盲品與論述。',
    tags: ['市場', '盲品', '論述'], modules: trLevels.level3.modules.length,
    lessons: trLevelIds(3).length, progress: levelProgress(3), unlocked: true }
])

const overviewItems = [
  { icon: '🏺', title: '古老的葡萄園，小而分散的酒業', desc: '葡萄園面積大，但多數葡萄不是用來釀酒；現代酒廠集中在少數地區。' },
  { icon: '🗺️', title: '慣用分區，非法定產區', desc: '愛琴海、馬爾馬拉與色雷斯、安納托利亞內陸、東部與東南部，是慣用說法；法規有地理標示定義，已登記清單未能核對。' },
  { icon: '🍇', title: '本土品種', desc: 'Öküzgözü、Boğazkere、Kalecik Karası、Narince、Emir 等，與國際品種並存。' },
  { icon: '🧭', title: '延伸課程', desc: '土耳其未必在 WSET D3 範圍內，請以你的教材為準。' }
]
</script>

<style scoped>
.eeh-admin-note { text-align: center; color: #5f6b4a; font-size: .85rem; margin: 24px 0 8px; }
</style>
