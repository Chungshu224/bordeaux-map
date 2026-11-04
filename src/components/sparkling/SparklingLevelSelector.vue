<template>
  <CourseHomeLayout :theme="theme" region-name="Sparkling Wines" :breadcrumb-country="'全球'">
    <RegionHero
      :icon="theme.icon"
      tagline="全球・WSET Diploma D4 備考"
      title="全球氣泡酒專論"
      subtitle="Sparkling Wines · Traditional Method · Charmat · Ancestral · Asti"
      description="從二次發酵的科學到香檳、Crémant、Cava、義大利、德奧英與新世界，三階段系統化掌握全球氣泡酒的釀法、產區與法規，並以 WSET Diploma D4 為備考目標（含起泡紅酒與甜型起泡）。"
      :stats="heroStats"
    />

    <ProgressStrip
      :headline="progressHeadline"
      :subline="progressSubline"
      :percent="totalProgressPct"
      :completed-count="completedLessons.length"
      :total-count="SPARKLING_TOTAL_LESSONS"
      :streak="0"
      :achievement-count="0"
      :cta-text="heroButtonText"
      @cta="startJourney"
      @open-progress="showProgressModal = true"
    />

    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <LevelTrack
      title="選擇課程階段"
      subtitle="Level 1 釀法原理 → Level 2 全球產區 → Level 3 D4 精修與應考。"
      :levels="levelData"
      :max-columns="3"
      @enter="(n) => emit('enterLevel', n)"
    />

    <RegionStoryGrid title="為什麼要專門學氣泡酒？" :items="overviewItems" />

    <p class="spk-admin-note">本課程僅供管理員閱讀，不對外販售。內容製作中。</p>

    <ProgressModal
      :open="showProgressModal"
      :completed-count="completedLessons.length"
      :total-count="SPARKLING_TOTAL_LESSONS"
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
import { sparklingLearningState, sparklingLevels, sparklingLevelIds, sparklingLearningProgress } from '../../stores/sparklingLearningStore.js'
import { SPARKLING_TOTAL_LESSONS } from '../../data/sparkling/lessons.js'
import { REGIONS } from '../../data/sparkling/regions.js'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames'])
const theme = getTheme('sparkling')
const showProgressModal = ref(false)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => sparklingLearningState.completedLessons)
const totalProgressPct = computed(() => sparklingLearningProgress.value)

function levelProgress(n) {
  const ids = sparklingLevelIds(n)
  if (!ids.length) return 0
  return (completedLessons.value.filter(id => ids.includes(id)).length / ids.length) * 100
}
const progressLevels = computed(() => LEVELS.map(n => ({ label: `Level ${n}`, pct: levelProgress(n) })))

const nextLevel = computed(() => LEVELS.find(n => levelProgress(n) < 100) || 1)
const heroButtonText = computed(() => totalProgressPct.value === 0 ? '開始學習' : totalProgressPct.value >= 100 ? '複習課程' : `繼續 Level ${nextLevel.value}`)
const progressHeadline = computed(() => totalProgressPct.value === 0 ? '開始你的氣泡酒之旅' : totalProgressPct.value >= 100 ? '🎉 已完成全部課程！' : `已完成 ${completedLessons.value.length} / ${SPARKLING_TOTAL_LESSONS} 課`)
const progressSubline = computed(() => totalProgressPct.value === 0 ? '從 Level 1 釀法原理開始' : totalProgressPct.value >= 100 ? '' : `當前階段：Level ${nextLevel.value}`)
function startJourney() { emit('enterLevel', totalProgressPct.value >= 100 ? 1 : nextLevel.value) }

const heroStats = [
  { value: String(REGIONS.length), label: '全球產區' },
  { value: String(SPARKLING_TOTAL_LESSONS), label: '系統課程' },
  { value: '3', label: '學習階段' }
]

const quickNavItems = computed(() => [
  { key: 'map', desc: `${REGIONS.length} 個產區互動地圖` },
  { key: 'games', desc: '6 種練習・釀法配對到盲品線索' },
  { key: 'notebook', desc: '氣泡酒品飲筆記', enabled: false },
  { key: 'progress', desc: `${totalProgressPct.value}% 完成・${completedLessons.value.length} 課` }
])
function onQuickNav(key) {
  if (key === 'map') emit('openMap')
  else if (key === 'games') emit('openGames')
  else if (key === 'progress') showProgressModal.value = true
}

const levelData = computed(() => [
  { number: 1, title: '氣泡酒原理與釀法', subtitle: '基礎認識', icon: '🌱',
    description: '二次發酵、基酒、傳統法、槽式法、轉移法與祖傳法，建立氣泡酒的釀造地圖。',
    tags: ['二次發酵', '基酒', '傳統法', '槽式法', 'Asti 法'], modules: sparklingLevels.level1.modules.length,
    lessons: sparklingLevelIds(1).length, progress: levelProgress(1), unlocked: true },
  { number: 2, title: '全球氣泡酒產區', subtitle: '逐區深入', icon: '🗺️',
    description: '香檳、Crémant、Cava、義大利、德奧英與新世界，每區用同一組問題比較。',
    tags: ['香檳', 'Crémant', 'Cava', 'Prosecco', 'Franciacorta', '起泡紅酒'], modules: sparklingLevels.level2.modules.length,
    lessons: sparklingLevelIds(2).length, progress: levelProgress(2), unlocked: true },
  { number: 3, title: 'D4 精修與應考', subtitle: '備考進階', icon: '🏆',
    description: '風土比較、釀造深度、法規與標籤、產業，以及 D4 品飲與論述訓練。',
    tags: ['風格比較', '標籤判讀', '產業與價格', 'SAT 品飲', '論述題'], modules: sparklingLevels.level3.modules.length,
    lessons: sparklingLevelIds(3).length, progress: levelProgress(3), unlocked: true }
])

const overviewItems = [
  { icon: '🧪', title: '釀法決定風格', desc: '傳統法、槽式法、轉移法、祖傳法與 Asti 法，風格、成本與價位都不同，是 D4 的核心。' },
  { icon: '🌍', title: '全球巡禮', desc: '從香檳到 Cava、Franciacorta、英國與新世界，用同一組問題比較各產區。' },
  { icon: '🍷', title: '起泡紅酒與甜型起泡', desc: 'Lambrusco、起泡 Shiraz、Asti 與 Clairette de Die 都是考點，不能只學白色乾型。' },
  { icon: '📝', title: 'D4 答題訓練', desc: '以「為什麼」解釋風格，並練習 SAT 品飲與論述題。' }
]
</script>

<style scoped>
.spk-admin-note { text-align: center; color: #8a7a6a; font-size: .85rem; margin: 24px 0 8px; }
</style>
