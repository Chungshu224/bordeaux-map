<template>
  <CourseHomeLayout :theme="theme" region-name="Georgia" :breadcrumb-country="'喬治亞'">
    <RegionHero
      :icon="theme.icon"
      tagline="葡萄酒的搖籃・WSET Diploma D3 備考"
      title="喬治亞葡萄酒"
      subtitle="Georgia · Six regions · Cantonal AOC"
      description="從八千年前的陶罐釀酒到今日的 PDO 制度：認識 qvevri 與皮渣接觸白酒、本土品種的多樣性，以及東部 Kakheti 與西部各產區的風格差異。"
      :stats="heroStats"
    />

    <ProgressStrip
      :headline="progressHeadline"
      :subline="progressSubline"
      :percent="totalProgressPct"
      :completed-count="completedLessons.length"
      :total-count="GE_TOTAL_LESSONS"
      :streak="0"
      :achievement-count="0"
      :cta-text="heroButtonText"
      @cta="startJourney"
      @open-progress="showProgressModal = true"
    />

    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <LevelTrack
      title="選擇課程階段"
      subtitle="Level 1 認識喬治亞 → Level 2 產區與釀法 → Level 3 Diploma 精修。"
      :levels="levelData"
      :max-columns="3"
      @enter="(n) => emit('enterLevel', n)"
    />

    <RegionStoryGrid title="為什麼學喬治亞？" :items="overviewItems" />

    <p class="geh-admin-note">本課程僅供管理員閱讀，不對外販售。</p>

    <ProgressModal
      :open="showProgressModal"
      :completed-count="completedLessons.length"
      :total-count="GE_TOTAL_LESSONS"
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
import { geLearningState, geLevels, geLevelIds, geLearningProgress } from '../../stores/georgiaLearningStore.js'
import { GE_TOTAL_LESSONS } from '../../data/georgia/lessons.js'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames', 'openNotebook', 'openAchievements'])
const theme = getTheme('georgia')
const showProgressModal = ref(false)

const LEVELS = [1, 2, 3]
const completedLessons = computed(() => geLearningState.completedLessons)
const totalProgressPct = computed(() => geLearningProgress.value)

function levelProgress(n) {
  const ids = geLevelIds(n)
  if (!ids.length) return 0
  return (completedLessons.value.filter(id => ids.includes(id)).length / ids.length) * 100
}
const progressLevels = computed(() => LEVELS.map(n => ({ label: `Level ${n}`, pct: levelProgress(n) })))

const nextLevel = computed(() => LEVELS.find(n => levelProgress(n) < 100) || 1)
const heroButtonText = computed(() => totalProgressPct.value === 0 ? '開始學習' : totalProgressPct.value >= 100 ? '複習課程' : `繼續 Level ${nextLevel.value}`)
const progressHeadline = computed(() => totalProgressPct.value === 0 ? '開始你的喬治亞之旅' : totalProgressPct.value >= 100 ? '🎉 已完成全部課程！' : `已完成 ${completedLessons.value.length} / ${GE_TOTAL_LESSONS} 課`)
const progressSubline = computed(() => totalProgressPct.value === 0 ? '從 Level 1 歷史與地理開始' : totalProgressPct.value >= 100 ? '' : `當前階段：Level ${nextLevel.value}`)
function startJourney() { emit('enterLevel', totalProgressPct.value >= 100 ? 1 : nextLevel.value) }

const heroStats = [
  { value: String(GE_TOTAL_LESSONS), label: '系統課程' },
  { value: '3', label: '學習階段' },
  { value: 'Qvevri', label: '陶罐釀法' }
]

const quickNavItems = computed(() => [
  { key: 'progress', desc: `${totalProgressPct.value}% 完成・${completedLessons.value.length} 課` }
])
function onQuickNav(key) {
  if (key === 'map') emit('openMap')
  else if (key === 'games') emit('openGames')
  else if (key === 'notebook') emit('openNotebook')
  else if (key === 'achievements') emit('openAchievements')
  else if (key === 'progress') showProgressModal.value = true
}

const levelData = computed(() => [
  { number: 1, title: '認識喬治亞葡萄酒', subtitle: '基礎認識', icon: '🏺',
    description: '歷史與酒文化、地理氣候、白與紅本土品種、產區總覽。',
    tags: ['歷史', 'Rkatsiteli', 'Saperavi', '產區總覽'], modules: geLevels.level1.modules.length,
    lessons: geLevelIds(1).length, progress: levelProgress(1), unlocked: true },
  { number: 2, title: '產區與釀法', subtitle: '逐區認識', icon: '🗺️',
    description: 'Qvevri 與皮渣接觸、Kakheti、Kartli、Imereti 與 Racha，以及 PDO 制度。',
    tags: ['Qvevri', 'Kakheti', 'Imereti', 'PDO'], modules: geLevels.level2.modules.length,
    lessons: geLevelIds(2).length, progress: levelProgress(2), unlocked: true },
  { number: 3, title: 'Diploma 精修', subtitle: '備考進階', icon: '🏆',
    description: '栽培釀造深度、風土與品種剖析、橘酒盲品、產業與論述。',
    tags: ['橘酒', '風土', '市場', '論述'], modules: geLevels.level3.modules.length,
    lessons: geLevelIds(3).length, progress: levelProgress(3), unlocked: true }
])

const overviewItems = [
  { icon: '🏺', title: '葡萄酒的搖籃', desc: '考古證據指向約八千年前的陶罐釀酒；qvevri 釀法於 2013 年列入 UNESCO 非物質文化遺產。' },
  { icon: '🍊', title: '皮渣接觸白酒', desc: '白葡萄連皮籽發酵的琥珀色酒，是 Diploma 盲品與論述的重要題材。' },
  { icon: '🧬', title: '本土品種多樣性', desc: '數百種本土品種，與國際品種為主的產區形成對照。' },
  { icon: '📜', title: '非歐盟的原產地制度', desc: '喬治亞自有 PDO 制度，部分名稱受歐盟協定保護，是對照歐盟 PDO／PGI 的好案例。' }
]
</script>

<style scoped>
.geh-admin-note { text-align: center; color: #8a6a5a; font-size: .85rem; margin: 24px 0 8px; }
</style>
