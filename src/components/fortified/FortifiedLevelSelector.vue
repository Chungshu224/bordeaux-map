<template>
  <CourseHomeLayout :theme="theme" region-name="Fortified Wines" :breadcrumb-country="'全球'">
    <RegionHero
      :icon="theme.icon"
      tagline="全球・WSET Diploma D5 備考"
      title="全球強化酒專論"
      subtitle="Fortified Wines · Traditional Method · Charmat · Ancestral · Asti"
      description="從加烈的科學到 Sherry、Port、Madeira、天然甜酒與 Rutherglen，三階段系統化掌握全球強化酒的釀法、產區與法規，並以 WSET Diploma D5 為備考目標。"
      :stats="heroStats"
    />

    <ProgressStrip
      :headline="progressHeadline"
      :subline="progressSubline"
      :percent="totalProgressPct"
      :completed-count="completedLessons.length"
      :total-count="FORTIFIED_TOTAL_LESSONS"
      :streak="0"
      :achievement-count="0"
      :cta-text="heroButtonText"
      @cta="startJourney"
      @open-progress="showProgressModal = true"
    />

    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <LevelTrack
      title="選擇課程階段"
      subtitle="Level 1 釀法原理 → Level 2 全球產區 → Level 3 D5 精修與應考。"
      :levels="levelData"
      :max-columns="3"
      @enter="(n) => emit('enterLevel', n)"
    />

    <RegionStoryGrid title="為什麼要專門學強化酒？" :items="overviewItems" />

    <FortifiedAchievements />

    <p class="fof-admin-note">本課程僅供管理員閱讀，不對外販售。</p>

    <ProgressModal
      :open="showProgressModal"
      :completed-count="completedLessons.length"
      :total-count="FORTIFIED_TOTAL_LESSONS"
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
import { fortifiedLearningState, fortifiedLevels, fortifiedLevelIds, fortifiedLearningProgress } from '../../stores/fortifiedLearningStore.js'
import { FORTIFIED_TOTAL_LESSONS } from '../../data/fortified/lessons.js'
import { REGIONS } from '../../data/fortified/regions.js'
import FortifiedAchievements from './FortifiedAchievements.vue'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames', 'openNotebook'])
const theme = getTheme('fortified')
const showProgressModal = ref(false)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => fortifiedLearningState.completedLessons)
const totalProgressPct = computed(() => fortifiedLearningProgress.value)

function levelProgress(n) {
  const ids = fortifiedLevelIds(n)
  if (!ids.length) return 0
  return (completedLessons.value.filter(id => ids.includes(id)).length / ids.length) * 100
}
const progressLevels = computed(() => LEVELS.map(n => ({ label: `Level ${n}`, pct: levelProgress(n) })))

const nextLevel = computed(() => LEVELS.find(n => levelProgress(n) < 100) || 1)
const heroButtonText = computed(() => totalProgressPct.value === 0 ? '開始學習' : totalProgressPct.value >= 100 ? '複習課程' : `繼續 Level ${nextLevel.value}`)
const progressHeadline = computed(() => totalProgressPct.value === 0 ? '開始你的強化酒之旅' : totalProgressPct.value >= 100 ? '🎉 已完成全部課程！' : `已完成 ${completedLessons.value.length} / ${FORTIFIED_TOTAL_LESSONS} 課`)
const progressSubline = computed(() => totalProgressPct.value === 0 ? '從 Level 1 強化酒原理開始' : totalProgressPct.value >= 100 ? '' : `當前階段：Level ${nextLevel.value}`)
function startJourney() { emit('enterLevel', totalProgressPct.value >= 100 ? 1 : nextLevel.value) }

const heroStats = [
  { value: String(REGIONS.length), label: '全球產區' },
  { value: String(FORTIFIED_TOTAL_LESSONS), label: '系統課程' },
  { value: '3', label: '學習階段' }
]

const quickNavItems = computed(() => [
  { key: 'map', desc: `${REGIONS.length} 個產區互動地圖` },
  { key: 'games', desc: '5 種練習・陳年路線到盲品線索' },
  { key: 'notebook', desc: '強化酒品飲筆記' },
  { key: 'progress', desc: `${totalProgressPct.value}% 完成・${completedLessons.value.length} 課` }
])
function onQuickNav(key) {
  if (key === 'map') emit('openMap')
  else if (key === 'games') emit('openGames')
  else if (key === 'notebook') emit('openNotebook')
  else if (key === 'progress') showProgressModal.value = true
}

const levelData = computed(() => [
  { number: 1, title: '強化酒原理與釀法', subtitle: '基礎認識', icon: '🌱',
    description: '加烈時機、烈酒、生物陳年與氧化陳年、solera 與關鍵選擇，建立強化酒的釀造地圖。',
    tags: ['加烈時機', 'flor', '氧化陳年', 'solera', '關鍵選擇'], modules: fortifiedLevels.level1.modules.length,
    lessons: fortifiedLevelIds(1).length, progress: levelProgress(1), unlocked: true },
  { number: 2, title: '全球強化酒產區', subtitle: '逐區深入', icon: '🗺️',
    description: 'Sherry、Port、Madeira、天然甜酒、Rutherglen 與其他產區，每區用同一組問題比較。',
    tags: ['Sherry', 'Port', 'Madeira', 'VDN', 'Rutherglen', 'Marsala'], modules: fortifiedLevels.level2.modules.length,
    lessons: fortifiedLevelIds(2).length, progress: levelProgress(2), unlocked: true },
  { number: 3, title: 'D5 精修與應考', subtitle: '備考進階', icon: '🏆',
    description: '風格辨識、SAT 品飲、產區比較、法規標示、商業價格與模擬考。',
    tags: ['盲品線索', 'SAT 品飲', '標籤判讀', '價格論述', '模擬考'], modules: fortifiedLevels.level3.modules.length,
    lessons: fortifiedLevelIds(3).length, progress: levelProgress(3), unlocked: true }
])

const overviewItems = [
  { icon: '⚗️', title: '加烈時機決定風格', desc: '發酵前、中、後加烈，決定甜度與風格，是 D5 的核心邏輯。' },
  { icon: '🌍', title: '全球巡禮', desc: '從 Jerez 到杜羅河谷、Madeira、Roussillon 與 Rutherglen，用同一組問題比較。' },
  { icon: '🕰️', title: '陳年與氧化', desc: 'flor、氧化、木桶與年齡聲明，讓同一原料變成截然不同的酒。' },
  { icon: '📝', title: 'D5 答題訓練', desc: '以「為什麼」解釋風格，並練習 SAT 品飲與論述題。' }
]
</script>

<style scoped>
.fof-admin-note { text-align: center; color: #8a7a6a; font-size: .85rem; margin: 24px 0 8px; }
</style>
