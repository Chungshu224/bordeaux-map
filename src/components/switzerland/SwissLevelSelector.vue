<template>
  <CourseHomeLayout :theme="theme" region-name="Switzerland" :breadcrumb-country="gt('瑞士')">
    <RegionHero
      :icon="theme.icon"
      :tagline="gt('延伸課程・不在 WSET D3 範圍')"
      :title="gt('瑞士葡萄酒')"
      subtitle="Switzerland · Six regions · Cantonal AOC"
      :description="gt('阿爾卑斯、湖泊與焚風之間的小而精產區：從 Chasselas 與 Valais 本土品種，到各州自訂的 AOC 與 Grand Cru，理解為什麼瑞士酒幾乎只在瑞士被喝掉。')"
      :stats="heroStats"
    />

    <ProgressStrip
      :headline="progressHeadline"
      :subline="progressSubline"
      :percent="totalProgressPct"
      :completed-count="completedLessons.length"
      :total-count="SWI_TOTAL_LESSONS"
      :streak="0"
      :achievement-count="0"
      :cta-text="heroButtonText"
      :achievement-unit="gt('成就')"
      :streak-unit="gt('天')"
      :lesson-unit="gt('課')"
      @cta="startJourney"
      @open-progress="showProgressModal = true"
    />

    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <LevelTrack
      :title="gt('選擇課程階段')"
      :subtitle="gt('Level 1 認識瑞士 → Level 2 產區深入 → Level 3 進階主題與論述。')"
      :levels="levelData"
      :max-columns="3"
      @enter="(n) => emit('enterLevel', n)"
    />

    <SwissAchievements />

    <RegionStoryGrid :title="gt('為什麼學瑞士？')" :items="overviewItems" />

    <p class="swih-admin-note">{{ gt('本課程僅供管理員閱讀，不對外販售。') }}</p>

    <ProgressModal
      :open="showProgressModal"
      :completed-count="completedLessons.length"
      :total-count="SWI_TOTAL_LESSONS"
      :overall-pct="totalProgressPct"
      :levels="progressLevels"
      :theme-color="theme.primary"
      :heading="gt('📊 學習進度')"
      :completed-label="gt('已完成')"
      :total-label="gt('總課程')"
      :pct-label="gt('完成度')"
      @close="showProgressModal = false"
    />
  </CourseHomeLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  CourseHomeLayout, RegionHero, ProgressStrip, QuickNavGrid, LevelTrack, RegionStoryGrid, ProgressModal, getTheme
} from '../shared/courseHome/index.js'
import { swiLearningState, swiLevels, swiLevelIds, swiLearningProgress } from '../../stores/switzerlandLearningStore.js'
import SwissAchievements from './SwissAchievements.vue'
import { gt } from '../../locales/swissUi/index.js'
import { SWI_TOTAL_LESSONS } from '../../data/switzerland/lessons.js'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames', 'openNotebook', 'openAchievements'])
const theme = getTheme('switzerland')
const showProgressModal = ref(false)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => swiLearningState.completedLessons)
const totalProgressPct = computed(() => swiLearningProgress.value)

function levelProgress(n) {
  const ids = swiLevelIds(n)
  if (!ids.length) return 0
  return (completedLessons.value.filter(id => ids.includes(id)).length / ids.length) * 100
}
const progressLevels = computed(() => LEVELS.map(n => ({ label: `Level ${n}`, pct: levelProgress(n) })))

const nextLevel = computed(() => LEVELS.find(n => levelProgress(n) < 100) || 1)
const heroButtonText = computed(() => totalProgressPct.value === 0 ? gt('開始學習') : totalProgressPct.value >= 100 ? gt('複習課程') : gt('繼續 Level {n}', { n: nextLevel.value }))
const progressHeadline = computed(() => totalProgressPct.value === 0 ? gt('開始你的瑞士之旅') : totalProgressPct.value >= 100 ? gt('🎉 已完成全部課程！') : gt('已完成 {a} / {b} 課', { a: completedLessons.value.length, b: SWI_TOTAL_LESSONS }))
const progressSubline = computed(() => totalProgressPct.value === 0 ? gt('從 Level 1 歷史與地理開始') : totalProgressPct.value >= 100 ? '' : gt('當前階段：Level {n}', { n: nextLevel.value }))
function startJourney() { emit('enterLevel', totalProgressPct.value >= 100 ? 1 : nextLevel.value) }

const heroStats = computed(() => [
  { value: String(SWI_TOTAL_LESSONS), label: gt('系統課程') },
  { value: '3', label: gt('學習階段') },
  { value: '6', label: gt('官方產區') }
])

const quickNavItems = computed(() => [
  { key: 'map', desc: gt('六大產區的示意點與特色') },
  { key: 'games', desc: gt('4 種練習・產區、別名、排序、因果') },
  { key: 'notebook', desc: gt('論述要點卡與品飲筆記') },
  { key: 'progress', desc: gt('{p}% 完成・{n} 課', { p: totalProgressPct.value, n: completedLessons.value.length }) }
])
function onQuickNav(key) {
  if (key === 'map') emit('openMap')
  else if (key === 'games') emit('openGames')
  else if (key === 'notebook') emit('openNotebook')
  else if (key === 'achievements') emit('openAchievements')
  else if (key === 'progress') showProgressModal.value = true
}

const levelData = computed(() => [
  { number: 1, title: gt('認識瑞士葡萄酒'), subtitle: gt('基礎認識'), icon: '🏔️',
    description: gt('歷史、地理與氣候、六大產區、品種與州級 AOC 制度。'),
    tags: [gt('歷史'), gt('六大產區'), 'Chasselas', gt('州級 AOC')], modules: swiLevels.level1.modules.length,
    lessons: swiLevelIds(1).length, progress: levelProgress(1), unlocked: true },
  { number: 2, title: gt('產區深入'), subtitle: gt('逐區認識'), icon: '🗺️',
    description: gt('Valais、Vaud、Geneva、Three Lakes、Ticino 與德語區。'),
    tags: ['Valais', 'Lavaux', 'Ticino', gt('德語區')], modules: swiLevels.level2.modules.length,
    lessons: swiLevelIds(2).length, progress: levelProgress(2), unlocked: true },
  { number: 3, title: gt('進階主題與論述'), subtitle: gt('備考進階'), icon: '🏆',
    description: gt('陡坡栽培、釀造風格、內銷型市場、法規演變與論述架構。'),
    tags: [gt('英雄式栽培'), gt('風格'), gt('市場'), gt('論述')], modules: swiLevels.level3.modules.length,
    lessons: swiLevelIds(3).length, progress: levelProgress(3), unlocked: true }
])

const overviewItems = computed(() => [
  { icon: '🧩', title: gt('延伸課程'), desc: gt('WSET Diploma D3 的國家清單不含瑞士，本課用於擴充視野與 D6 研究。') },
  { icon: '🏛️', title: gt('州級制度'), desc: gt('AOC 與 Grand Cru 由各州制定，是對照法國、德國集中式制度的好案例。') },
  { icon: '⛰️', title: gt('陡坡與高成本'), desc: gt('梯田、石牆與人工採收，說明小產區為何價格高。') },
  { icon: '🏠', title: gt('內銷型市場'), desc: gt('產量大多在國內被喝掉，是研究「出口悖論」的題材。') }
])
</script>

<style scoped>
.swih-admin-note { text-align: center; color: #8a5a5a; font-size: .85rem; margin: 24px 0 8px; }
</style>
