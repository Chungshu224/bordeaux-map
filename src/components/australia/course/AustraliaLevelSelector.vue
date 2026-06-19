<template>
  <CourseHomeLayout :theme="theme" region-name="Australia" breadcrumb-country="新世界・大洋洲">
    <RegionHero
      :icon="theme.icon"
      tagline="澳洲葡萄酒・百年老藤・Shiraz 王國"
      title="澳洲葡萄酒"
      subtitle="Australian Wine · Barossa · Margaret River · Tasmania"
      description="從 Penfolds Grange 與南澳百年老藤，到 Margaret River 波爾多風格、Tasmania 涼爽氣泡——掌握新世界第 5 大出口國的多樣性。"
      :stats="heroStats"
    />

    <ProgressStrip
      :headline="progressHeadline"
      :subline="progressSubline"
      :percent="overallProgress"
      :completed-count="completedTotal"
      :total-count="totalLessonCount"
      :cta-text="heroButtonText"
      @cta="startJourney"
      @open-progress="showProgress = true"
      @open-achievements="emit('openAchievements')"
    />

    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <LevelTrack
      title="選擇課程階段"
      subtitle="4 階段、61 堂課——從入門到大師年份分析。"
      :levels="levelData"
      @enter="(n) => emit('startLevel', `level${n}`)"
    />

    <RegionStoryGrid
      title="為什麼學習澳洲葡萄酒？"
      :items="overviewItems"
      :cols="3"
    />

    <ProgressModal
      :open="showProgress"
      :completed-count="completedTotal"
      :total-count="totalLessonCount"
      :overall-pct="overallProgress"
      :levels="modalLevels"
      :theme-color="theme.primary"
      @close="showProgress = false"
    />
  </CourseHomeLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  CourseHomeLayout, RegionHero, ProgressStrip, QuickNavGrid,
  LevelTrack, RegionStoryGrid, ProgressModal, getTheme
} from '../../shared/courseHome/index.js'
import { courseLevels, getUserProgress } from '../data/courseLevels.js'
import { authActions } from '../../../stores/authStore.js'

const emit = defineEmits(['openMap', 'startLevel', 'openAchievements', 'openNotebook', 'openGameHub'])

const theme = getTheme('australia')
const showProgress = ref(false)

const KEYS = ['level1', 'level2', 'level3']
const stats = computed(() =>
  KEYS.map(key => {
    const def = courseLevels.find(l => l.key === key)
    if (!def || !def.modules) return { key, done: 0, total: 0, pct: 0 }
    const all = def.modules.flatMap(m => m.lessons)
    const prog = getUserProgress(key)
    const done = all.filter(l => prog[l.id]).length
    return { key, done, total: all.length, pct: all.length ? Math.round(done / all.length * 100) : 0 }
  })
)

const completedTotal = computed(() => stats.value.reduce((s, l) => s + l.done, 0))
const totalLessonCount = computed(() => stats.value.reduce((s, l) => s + l.total, 0))
const overallProgress = computed(() =>
  totalLessonCount.value ? Math.round(completedTotal.value / totalLessonCount.value * 100) : 0
)
function pct(key) { return stats.value.find(s => s.key === key)?.pct || 0 }

// 解鎖邏輯：Admin 全開；L2 需完成 A1FinalExam；L3 需完成 L2 全部
const isAdmin = computed(() => authActions.isAdmin && authActions.isAdmin())
const l1ExamDone = computed(() => !!getUserProgress('level1')['A1FinalExam'])
const l2FullDone = computed(() => pct('level2') === 100)

const heroButtonText = computed(() => {
  if (pct('level1') === 0) return '開始學習'
  if (pct('level1') < 100) return '繼續 Level 1'
  if (pct('level2') < 100) return '繼續 Level 2'
  return '繼續 Level 3'
})
const progressHeadline = computed(() => {
  if (overallProgress.value === 0) return '開始你的澳洲葡萄酒之旅'
  if (overallProgress.value >= 100) return '🎉 已完成全部課程'
  return `已完成 ${completedTotal.value} / ${totalLessonCount.value} 課`
})
const progressSubline = computed(() => {
  if (pct('level1') < 100) return '當前階段：Level 1 · 入門'
  if (pct('level2') < 100) return '當前階段：Level 2 · 重點產區'
  return '當前階段：Level 3 · 風土工藝'
})
function startJourney() {
  if (pct('level1') === 0 || pct('level1') < 100) emit('startLevel', 'level1')
  else if (pct('level2') < 100) emit('startLevel', 'level2')
  else emit('startLevel', 'level3')
}

const heroStats = [
  { value: '65+',  label: 'GI 法定產區' },
  { value: '6',    label: '州' },
  { value: '#5',   label: '全球出口' }
]

const quickNavItems = [
  { key: 'map', desc: '65+ GI 互動地圖' },
  { key: 'games' },
  { key: 'achievements' },
  { key: 'notebook' },
  { key: 'progress' }
]
function onQuickNav(key) {
  switch (key) {
    case 'map':          emit('openMap'); break
    case 'games':        emit('openGameHub'); break
    case 'achievements': emit('openAchievements'); break
    case 'notebook':     emit('openNotebook'); break
    case 'progress':     showProgress.value = true; break
  }
}

const levelData = computed(() => [
  {
    number: 1, title: '澳洲葡萄酒入門', subtitle: '基礎認識', icon: '🌱',
    description: '澳洲六州地理、GI 分級制度（Zone/Region/Sub-Region）、五大紅白品種、南澳精華。',
    tags: ['地理概況', 'GI 制度', '核心品種', '南澳精華', 'Shiraz'],
    modules: 5, lessons: 17,
    progress: pct('level1'), unlocked: true
  },
  {
    number: 2, title: '重點產區深度', subtitle: '經典與新銳', icon: '🍷',
    description: 'Barossa 老藤、Margaret River 波爾多風格、Hunter Semillon、Heathcote、Yarra。',
    tags: ['Barossa 老藤', 'Margaret River', 'Hunter Semillon', 'Tasmania', 'Yarra'],
    modules: 6, lessons: 22,
    progress: pct('level2'), unlocked: isAdmin.value || l1ExamDone.value,
    unlockHint: l1ExamDone.value ? '' : '完成 Level 1 期末測驗後解鎖'
  },
  {
    number: 3, title: '風土工藝品牌', subtitle: 'Penfolds 哲學', icon: '🔬',
    description: 'Penfolds 釀造哲學、南澳老藤 GSM、義大利品種革命、螺旋蓋推廣與自然酒。',
    tags: ['Penfolds 哲學', 'GSM 工藝', '螺旋蓋革命', '自然酒'],
    modules: 4, lessons: 11,
    progress: pct('level3'), unlocked: isAdmin.value || l2FullDone.value,
    unlockHint: l2FullDone.value ? '' : '完成 Level 2 全部課程後解鎖'
  },
  {
    number: 4, title: '澳洲大師', subtitle: '盲品與收藏', icon: '🏆',
    description: '進階年份分析、盲品策略、國際比較、投資收藏與垂直品飲。',
    tags: ['年份分析', '盲品技巧', '陳年潛力', '收藏價值'],
    modules: 4, lessons: 0,
    progress: 0, unlocked: false,
    unlockHint: '即將推出'
  }
])

const overviewItems = [
  { icon: '🌏', title: '全球第 5 大出口國', desc: '年出口 18 億澳幣，英美中是最大市場。' },
  { icon: '🌿', title: '百年老藤聖地',     desc: '全球保存最多百年老藤的國家，根瘤蚜未侵入南澳。' },
  { icon: '🔩', title: '螺旋蓋革命先驅',   desc: 'Clare Valley 2000 年帶頭推廣，改變全球瓶蓋觀念。' },
  { icon: '🌡️', title: '氣候帶極多元',    desc: '從 Tasmania 涼爽海洋到 Barossa 炎熱大陸，風格跨度大。' },
  { icon: '🍇', title: 'Shiraz 王者地位',  desc: 'Penfolds Grange 是世界最著名的 Shiraz，澳洲「國酒」象徵。' },
  { icon: '🧊', title: 'Tasmania 新星',    desc: '全澳最冷產區，頂級氣泡酒與精緻 Pinot Noir。' }
]

const modalLevels = computed(() =>
  KEYS.map((k, i) => {
    const def = courseLevels.find(l => l.key === k)
    const prog = getUserProgress(k)
    const modules = (def?.modules || []).map(m => {
      const total = m.lessons.length
      const done = m.lessons.filter(l => prog[l.id]).length
      return { label: m.title, pct: total ? Math.round(done / total * 100) : 0, done, total }
    })
    return { label: `Level ${i + 1}`, pct: pct(k), modules }
  })
)
</script>
