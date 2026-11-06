<template>
  <CourseHomeLayout :theme="theme" region-name="Wine Production" :breadcrumb-country="'全球'">
    <RegionHero
      :icon="theme.icon"
      tagline="WSET Diploma D1 備考"
      title="葡萄酒生產專論"
      subtitle="Wine Production · Viticulture · Vinification"
      description="從葡萄樹與生長環境、葡萄園管理，到釀造選項與完成包裝，用「選擇→效果→風格、品質、價格」的因果鏈，系統化備考 WSET Diploma D1。"
      :stats="heroStats"
    />

    <ProgressStrip
      :headline="progressHeadline"
      :subline="progressSubline"
      :percent="totalProgressPct"
      :completed-count="completedLessons.length"
      :total-count="D1_TOTAL_LESSONS"
      :streak="0"
      :achievement-count="0"
      :cta-text="heroButtonText"
      @cta="startJourney"
      @open-progress="showProgressModal = true"
    />

    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <LevelTrack
      title="選擇課程階段"
      subtitle="Level 1 葡萄園與環境 → Level 2 管理與釀造 → Level 3 特殊酒款與應考。"
      :levels="levelData"
      :max-columns="3"
      @enter="(n) => emit('enterLevel', n)"
    />

    <RegionStoryGrid title="D1 怎麼考？" :items="overviewItems" />

    <D1Achievements />

    <p class="d1h-admin-note">本課程僅供管理員閱讀，不對外販售。</p>

    <ProgressModal
      :open="showProgressModal"
      :completed-count="completedLessons.length"
      :total-count="D1_TOTAL_LESSONS"
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
import { d1LearningState, d1Levels, d1LevelIds, d1LearningProgress } from '../../stores/d1LearningStore.js'
import { D1_TOTAL_LESSONS } from '../../data/d1/lessons.js'
import D1Achievements from './D1Achievements.vue'

const emit = defineEmits(['enterLevel', 'openCycle', 'openGames', 'openNotebook'])
const theme = getTheme('d1')
const showProgressModal = ref(false)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => d1LearningState.completedLessons)
const totalProgressPct = computed(() => d1LearningProgress.value)

function levelProgress(n) {
  const ids = d1LevelIds(n)
  if (!ids.length) return 0
  return (completedLessons.value.filter(id => ids.includes(id)).length / ids.length) * 100
}
const progressLevels = computed(() => LEVELS.map(n => ({ label: `Level ${n}`, pct: levelProgress(n) })))

const nextLevel = computed(() => LEVELS.find(n => levelProgress(n) < 100) || 1)
const heroButtonText = computed(() => totalProgressPct.value === 0 ? '開始學習' : totalProgressPct.value >= 100 ? '複習課程' : `繼續 Level ${nextLevel.value}`)
const progressHeadline = computed(() => totalProgressPct.value === 0 ? '開始你的 D1 之旅' : totalProgressPct.value >= 100 ? '🎉 已完成全部課程！' : `已完成 ${completedLessons.value.length} / ${D1_TOTAL_LESSONS} 課`)
const progressSubline = computed(() => totalProgressPct.value === 0 ? '從 Level 1 葡萄樹與環境開始' : totalProgressPct.value >= 100 ? '' : `當前階段：Level ${nextLevel.value}`)
function startJourney() { emit('enterLevel', totalProgressPct.value >= 100 ? 1 : nextLevel.value) }

const heroStats = [
  { value: String(D1_TOTAL_LESSONS), label: '系統課程' },
  { value: '3', label: '學習階段' },
  { value: '20%', label: 'Diploma 占比' }
]

const quickNavItems = computed(() => [
  { key: 'cycle', icon: '🔄', title: '年度週期圖', desc: '六個階段的風險與管理' },
  { key: 'games', desc: '5 種練習・排序到情境決策' },
  { key: 'notebook', desc: '答題要點卡與決策鏈筆記' },
  { key: 'progress', desc: `${totalProgressPct.value}% 完成・${completedLessons.value.length} 課` }
])
function onQuickNav(key) {
  if (key === 'cycle') emit('openCycle')
  else if (key === 'games') emit('openGames')
  else if (key === 'notebook') emit('openNotebook')
  else if (key === 'progress') showProgressModal.value = true
}

const levelData = computed(() => [
  { number: 1, title: '葡萄園：葡萄樹與環境', subtitle: '基礎認識', icon: '🌱',
    description: '葡萄樹構造、生長週期、氣候與土壤、種植方式與建園選擇。',
    tags: ['生長週期', '氣候', '土壤', '種植方式', '砧木'], modules: d1Levels.level1.modules.length,
    lessons: d1LevelIds(1).length, progress: levelProgress(1), unlocked: true },
  { number: 2, title: '葡萄園管理與釀造', subtitle: '逐項深入', icon: '⚙️',
    description: '土壤水分、葉幕、病蟲害、採收，以及酒體成分與紅白粉紅釀造選項。',
    tags: ['葉幕', '病蟲害', '採收', 'MLF', '萃取'], modules: d1Levels.level2.modules.length,
    lessons: d1LevelIds(2).length, progress: levelProgress(2), unlocked: true },
  { number: 3, title: '特殊酒款、完成與應考', subtitle: '備考進階', icon: '🏆',
    description: '甜酒、氣泡酒、強化酒製法概覽、澄清與包裝、風格—品質—價格取捨與模擬考。',
    tags: ['澄清穩定', '封瓶', '取捨論述', '模擬考'], modules: d1Levels.level3.modules.length,
    lessons: d1LevelIds(3).length, progress: levelProgress(3), unlocked: true }
])

const overviewItems = [
  { icon: '📝', title: '開放式作答', desc: '90 分鐘閉卷筆試，以開放式作答為主，重點是解釋原因。' },
  { icon: '🔗', title: '選擇→效果→風格', desc: '每個葡萄園與酒窖選擇，都要連到風格、品質與價格。' },
  { icon: '🧭', title: '基礎單元', desc: 'D1 占 Diploma 的 20%，且須最先考。' },
  { icon: '⚠️', title: '數字先查證', desc: '溫度、用量等數字須對教材確認，才會進題庫。' }
]
</script>

<style scoped>
.d1h-admin-note { text-align: center; color: #6a7a55; font-size: .85rem; margin: 24px 0 8px; }
</style>
