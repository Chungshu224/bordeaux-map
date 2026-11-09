<template>
  <CourseHomeLayout :theme="theme" region-name="Eastern Europe" :breadcrumb-country="'東歐與巴爾幹'">
    <RegionHero
      :icon="theme.icon"
      tagline="共產時期之後的重生・延伸課程（不在 D3 國家清單）"
      title="東歐與巴爾幹葡萄酒"
      subtitle="Slovenia · Croatia · Romania · Bulgaria · Moldova"
      description="從共產時期的大規模生產到入歐盟後的品質轉型：認識斯洛維尼亞、克羅埃西亞、羅馬尼亞、保加利亞與摩爾多瓦的產區、本土品種與法規制度。"
      :stats="heroStats"
    />

    <ProgressStrip
      :headline="progressHeadline"
      :subline="progressSubline"
      :percent="totalProgressPct"
      :completed-count="completedLessons.length"
      :total-count="EE_TOTAL_LESSONS"
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

    <RegionStoryGrid title="為什麼學東歐與巴爾幹？" :items="overviewItems" />

    <p class="eeh-admin-note">本課程僅供管理員閱讀，不對外販售。</p>

    <ProgressModal
      :open="showProgressModal"
      :completed-count="completedLessons.length"
      :total-count="EE_TOTAL_LESSONS"
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
import { eeLearningState, eeLevels, eeLevelIds, eeLearningProgress } from '../../stores/easterneuropeLearningStore.js'
import { EE_TOTAL_LESSONS } from '../../data/easterneurope/lessons.js'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames', 'openNotebook', 'openAchievements'])
const theme = getTheme('easterneurope')
const showProgressModal = ref(false)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => eeLearningState.completedLessons)
const totalProgressPct = computed(() => eeLearningProgress.value)

function levelProgress(n) {
  const ids = eeLevelIds(n)
  if (!ids.length) return 0
  return (completedLessons.value.filter(id => ids.includes(id)).length / ids.length) * 100
}
const progressLevels = computed(() => LEVELS.map(n => ({ label: `Level ${n}`, pct: levelProgress(n) })))

const nextLevel = computed(() => LEVELS.find(n => levelProgress(n) < 100) || 1)
const heroButtonText = computed(() => totalProgressPct.value === 0 ? '開始學習' : totalProgressPct.value >= 100 ? '複習課程' : `繼續 Level ${nextLevel.value}`)
const progressHeadline = computed(() => totalProgressPct.value === 0 ? '開始你的東歐之旅' : totalProgressPct.value >= 100 ? '🎉 已完成全部課程！' : `已完成 ${completedLessons.value.length} / ${EE_TOTAL_LESSONS} 課`)
const progressSubline = computed(() => totalProgressPct.value === 0 ? '從 Level 1 歷史與地理開始' : totalProgressPct.value >= 100 ? '' : `當前階段：Level ${nextLevel.value}`)
function startJourney() { emit('enterLevel', totalProgressPct.value >= 100 ? 1 : nextLevel.value) }

const heroStats = [
  { value: String(EE_TOTAL_LESSONS), label: '系統課程' },
  { value: '3', label: '學習階段' },
  { value: '5', label: '國家＋摩爾多瓦' }
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
  { number: 1, title: '入門：認識東歐與巴爾幹', subtitle: '基礎認識', icon: '🏺',
    description: '歷史脈絡、地理氣候、白與紅本土品種、各國總覽。',
    tags: ['歷史', 'Graševina', 'Fetească', '各國總覽'], modules: eeLevels.level1.modules.length,
    lessons: eeLevelIds(1).length, progress: levelProgress(1), unlocked: true },
  { number: 2, title: '逐國產區與法規', subtitle: '逐區認識', icon: '🗺️',
    description: '斯洛維尼亞、克羅埃西亞、羅馬尼亞、保加利亞、摩爾多瓦的產區與法規。',
    tags: ['斯洛維尼亞', '克羅埃西亞', '羅馬尼亞', '保加利亞'], modules: eeLevels.level2.modules.length,
    lessons: eeLevelIds(2).length, progress: levelProgress(2), unlocked: true },
  { number: 3, title: '進階精修', subtitle: '深入論述', icon: '🏆',
    description: '栽培釀造深度、風土與品種比較、法規與標籤、產業與論述。',
    tags: ['風土', '法規', '市場', '論述'], modules: eeLevels.level3.modules.length,
    lessons: eeLevelIds(3).length, progress: levelProgress(3), unlocked: true }
])

const overviewItems = [
  { icon: '🏛️', title: '共產時期之後的轉型', desc: '從大規模生產走向品質與地理標示，是貫穿各國的主線。' },
  { icon: '🇪🇺', title: '歐盟與非歐盟制度對照', desc: '斯洛維尼亞、克羅埃西亞、羅馬尼亞、保加利亞適用歐盟 PDO／PGI；摩爾多瓦自有地理標示制度。' },
  { icon: '🍇', title: '本土品種', desc: 'Graševina、Plavac Mali、Fetească、Mavrud、Gamza 等，與國際品種形成對照。' },
  { icon: '🧭', title: '延伸課程', desc: '這些國家未必在 WSET D3 範圍內，請以你的教材為準。' }
]
</script>

<style scoped>
.eeh-admin-note { text-align: center; color: #5f6b4a; font-size: .85rem; margin: 24px 0 8px; }
</style>
