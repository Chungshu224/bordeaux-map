<template>
  <CourseHomeLayout :theme="theme" region-name="Wine Business" :breadcrumb-country="'全球'">
    <RegionHero
      :icon="theme.icon"
      tagline="WSET Diploma D2 備考"
      title="葡萄酒商業專論"
      subtitle="Wine Business · Price · Routes to market · Marketing"
      description="價格如何形成、誰做酒、怎麼送到銷售點、怎麼行銷——用「事實→機制→判斷」的論述骨架，系統化備考 WSET Diploma D2。"
      :stats="heroStats"
    />

    <ProgressStrip
      :headline="progressHeadline"
      :subline="progressSubline"
      :percent="totalProgressPct"
      :completed-count="completedLessons.length"
      :total-count="D2_TOTAL_LESSONS"
      :streak="0"
      :achievement-count="0"
      :cta-text="heroButtonText"
      @cta="startJourney"
      @open-progress="showProgressModal = true"
    />

    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <LevelTrack
      title="選擇課程階段"
      subtitle="Level 1 價格 → Level 2 企業與通路 → Level 3 行銷與應考。"
      :levels="levelData"
      :max-columns="3"
      @enter="(n) => emit('enterLevel', n)"
    />

    <RegionStoryGrid title="D2 怎麼考？" :items="overviewItems" />

    <p class="d2h-admin-note">本課程僅供管理員閱讀，不對外販售。</p>

    <ProgressModal
      :open="showProgressModal"
      :completed-count="completedLessons.length"
      :total-count="D2_TOTAL_LESSONS"
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
import { d2LearningState, d2Levels, d2LevelIds, d2LearningProgress } from '../../stores/d2LearningStore.js'
import { D2_TOTAL_LESSONS } from '../../data/d2/lessons.js'

const emit = defineEmits(['enterLevel', 'openGames', 'openNotebook', 'openPrice'])
const theme = getTheme('d2')
const showProgressModal = ref(false)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => d2LearningState.completedLessons)
const totalProgressPct = computed(() => d2LearningProgress.value)

function levelProgress(n) {
  const ids = d2LevelIds(n)
  if (!ids.length) return 0
  return (completedLessons.value.filter(id => ids.includes(id)).length / ids.length) * 100
}
const progressLevels = computed(() => LEVELS.map(n => ({ label: `Level ${n}`, pct: levelProgress(n) })))

const nextLevel = computed(() => LEVELS.find(n => levelProgress(n) < 100) || 1)
const heroButtonText = computed(() => totalProgressPct.value === 0 ? '開始學習' : totalProgressPct.value >= 100 ? '複習課程' : `繼續 Level ${nextLevel.value}`)
const progressHeadline = computed(() => totalProgressPct.value === 0 ? '開始你的 D2 之旅' : totalProgressPct.value >= 100 ? '🎉 已完成全部課程！' : `已完成 ${completedLessons.value.length} / ${D2_TOTAL_LESSONS} 課`)
const progressSubline = computed(() => totalProgressPct.value === 0 ? '從 Level 1 價格如何形成開始' : totalProgressPct.value >= 100 ? '' : `當前階段：Level ${nextLevel.value}`)
function startJourney() { emit('enterLevel', totalProgressPct.value >= 100 ? 1 : nextLevel.value) }

const heroStats = [
  { value: String(D2_TOTAL_LESSONS), label: '系統課程' },
  { value: '3', label: '學習階段' },
  { value: '10%', label: 'Diploma 占比' }
]

const quickNavItems = computed(() => [
  { key: 'progress', desc: `${totalProgressPct.value}% 完成・${completedLessons.value.length} 課` }
])
function onQuickNav(key) {
  if (key === 'progress') showProgressModal.value = true
}

const levelData = computed(() => [
  { number: 1, title: '價格如何形成', subtitle: '供給、需求、成本', icon: '💹',
    description: '供給與需求因素、成本鏈、稅與關稅、匯率風險。',
    tags: ['供給', '需求', '成本鏈', '關稅', '匯率'], modules: d2Levels.level1.modules.length,
    lessons: d2LevelIds(1).length, progress: levelProgress(1), unlocked: true },
  { number: 2, title: '誰做酒、怎麼送到銷售點', subtitle: '企業與通路', icon: '🏭',
    description: '酒莊、酒商、合作社、虛擬釀酒者與集團；進口、經銷、零售、餐飲與 DTC。',
    tags: ['企業類型', '合作社', '三級制度', 'on-trade', 'DTC'], modules: d2Levels.level2.modules.length,
    lessons: d2LevelIds(2).length, progress: levelProgress(2), unlocked: true },
  { number: 3, title: '行銷與應考', subtitle: '備考進階', icon: '🎯',
    description: '行銷流程、區隔、行銷組合與 explain／evaluate 的作答訓練。',
    tags: ['區隔', '行銷組合', 'explain', 'evaluate'], modules: d2Levels.level3.modules.length,
    lessons: d2LevelIds(3).length, progress: levelProgress(3), unlocked: true }
])

const overviewItems = [
  { icon: '📝', title: '開放式作答', desc: '60 分鐘筆試，重點是解釋原因與評估取捨，不是背清單。' },
  { icon: '🔗', title: '事實→機制→判斷', desc: '每個論點都要有因果，evaluate 題要有結論。' },
  { icon: '🧭', title: '基礎單元', desc: 'D2 占 Diploma 的 10%，在 D1 之後考，無品飲。' },
  { icon: '⚠️', title: '不背市場數字', desc: '稅率、市占等數字變動快，本課用結構與方向作答。' }
]
</script>

<style scoped>
.d2h-admin-note { text-align: center; color: #6a7a55; font-size: .85rem; margin: 24px 0 8px; }
</style>
