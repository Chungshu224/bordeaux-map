<template>
  <CourseHomeLayout :theme="theme" region-name="Spain" breadcrumb-country="歐洲・伊比利半島">
    <RegionHero
      :icon="theme.icon"
      tagline="西班牙葡萄酒・全球種植第一・96 法定產區"
      title="西班牙葡萄酒"
      subtitle="Spanish Wine · Rioja · Priorat · Sherry · Cava"
      description="從 Rioja、Ribera del Duero 兩大紅酒指標，到 Sherry 的 Flor 與索雷拉、Cava 氣泡與加那利火山——掌握全球種植面積最大的葡萄酒國度。"
      :stats="heroStats"
    />

    <ProgressStrip
      headline="開始你的西班牙葡萄酒之旅"
      subline="從 Level 1 入門開始，依興趣自由選擇進階方向"
      :percent="0"
      :completed-count="0"
      :total-count="totalLessonCount"
      :achievement-count="achievementCount"
      cta-text="開始學習"
      @cta="emit('startLevel', 'level1')"
      @open-achievements="showAchievements = true"
    />

    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <LevelTrack
      title="選擇課程階段"
      subtitle="4 階段、62 堂課、5 大模組——從入門到大師品鑑。"
      :levels="levelData"
      @enter="(n) => emit('startLevel', `level${n}`)"
    />

    <RegionStoryGrid
      title="為什麼學習西班牙葡萄酒？"
      :items="overviewItems"
      :cols="3"
    />

    <AchievementModal :open="showAchievements" course-key="spain" @close="showAchievements = false" />

    <!-- 學習進度彈窗 -->
    <Teleport to="body">
      <div v-if="showProgress" class="sp-modal-backdrop" @click.self="showProgress = false">
        <div class="sp-progress-modal">
          <div class="sp-modal-header">
            <h3>📊 學習進度</h3>
            <button class="sp-modal-close" @click="showProgress = false">✕</button>
          </div>
          <div class="sp-modal-body">
            <LearningProgressDashboard course-key="spain" />
          </div>
        </div>
      </div>
    </Teleport>
  </CourseHomeLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  CourseHomeLayout, RegionHero, ProgressStrip, QuickNavGrid,
  LevelTrack, RegionStoryGrid, AchievementModal, getTheme
} from '../../shared/courseHome/index.js'
import { globalSpainAchievementManager } from '../../../stores/spainAchievementSystem.js'
import LearningProgressDashboard from '../../LearningProgressDashboard.vue'

const emit = defineEmits(['openMap', 'openSelector', 'startLevel', 'openNotebook', 'openGames'])

const theme = getTheme('spain')
const showAchievements = ref(false)
const showProgress = ref(false)

const totalLessonCount = 62 // 13 + 18 + 17 + 14
const achievementCount = computed(
  () => globalSpainAchievementManager?.state?.unlockedAchievements?.length || 0
)

const heroStats = [
  { value: '96',   label: '法定產區' },
  { value: '17',   label: '自治區' },
  { value: '#1',   label: '全球種植面積' }
]

const quickNavItems = [
  { key: 'map', desc: '96 個法定產區地圖' },
  { key: 'games' },
  { key: 'achievements' },
  { key: 'notebook' },
  { key: 'progress' }
]
function onQuickNav(key) {
  switch (key) {
    case 'map':          emit('openMap'); break
    case 'games':        emit('openGames'); break
    case 'notebook':     emit('openNotebook'); break
    case 'achievements': showAchievements.value = true; break
    case 'progress':     showProgress.value = true; break
  }
}

const levelData = [
  {
    number: 1, title: '西班牙葡萄酒入門', subtitle: '基礎認識', icon: '🌱',
    description: '17 自治區地理、DO / DOCa / VP 分級制度、五大紅白品種與 Rioja 入門。',
    tags: ['地理概況', 'DO / DOCa', '核心品種', 'Rioja 入門', 'Tempranillo'],
    modules: 5, lessons: 13, progress: 0, unlocked: true
  },
  {
    number: 2, title: '重點產區深度', subtitle: '8 大產區', icon: '🍷',
    description: 'Ribera del Duero、Rías Baixas、Priorat、Jerez Sherry、Cava 等頂級產區深度解析。',
    tags: ['Ribera del Duero', 'Rías Baixas', 'Priorat', 'Jerez', 'Canarias'],
    modules: 5, lessons: 18, progress: 0, unlocked: true
  },
  {
    number: 3, title: '釀造工藝特殊酒', subtitle: '橡木與索雷拉', icon: '🏺',
    description: '橡木桶陳年哲學、Cava 傳統法、Sherry 索雷拉系統、Flor 酵母與加強甜酒。',
    tags: ['橡木桶哲學', 'Cava 氣泡', 'Sherry 索雷拉', 'Flor 酵母', '加強甜酒'],
    modules: 5, lessons: 17, progress: 0, unlocked: true
  },
  {
    number: 4, title: '大師品鑑', subtitle: 'WSET 與盲品', icon: '👑',
    description: 'WSET 系統盲飲方法、年份評鑑（2005–2024）、頂級酒莊與收藏投資。',
    tags: ['WSET 盲品', '年份指南', '頂級酒莊', '收藏投資'],
    modules: 5, lessons: 14, progress: 0, unlocked: true
  }
]

const overviewItems = [
  { icon: '🌍', title: '全球第一大種植面積', desc: '西班牙是全球葡萄種植面積最大的國家，超過 96 萬公頃。' },
  { icon: '🏅', title: '兩大 DOCa 頂級認證', desc: 'Rioja 與 Priorat 是僅有的兩個 DOCa 認證，代表最高品質。' },
  { icon: '🍾', title: '獨特陳年制度',       desc: 'Joven、Crianza、Reserva、Gran Reserva 四級嚴格規範陳年時間。' },
  { icon: '🌋', title: '火山島葡萄酒',       desc: '加那利群島火山土壤孕育獨一無二葡萄酒，許多老藤前根瘤蚜古藤。' },
  { icon: '🧊', title: 'Sherry 雪莉酒傳奇',  desc: 'Jerez 的 Flor 酵母、索雷拉系統創造豐富的乾型與甜型風格。' },
  { icon: '💧', title: 'Albariño 海洋白酒',  desc: 'Rías Baixas 大西洋海風造就芳香高酸的旗艦白酒品種。' }
]
</script>

<style scoped>
.sp-modal-backdrop {
  position: fixed; inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}
.sp-progress-modal {
  background: white; border-radius: 20px;
  width: 100%; max-width: 1100px; height: 90vh;
  display: flex; flex-direction: column;
  overflow: hidden;
  margin: 0 16px;
}
.sp-modal-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 24px; border-bottom: 1px solid #f3f4f6;
  flex-shrink: 0;
}
.sp-modal-header h3 { margin: 0; font-size: 1.2rem; color: #111827; }
.sp-modal-close {
  background: none; border: 0; font-size: 22px;
  color: #6b7280; cursor: pointer; line-height: 1;
  width: 36px; height: 36px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
}
.sp-modal-close:hover { background: #f3f4f6; }
.sp-modal-body { flex: 1; overflow-y: auto; padding: 16px 0; }
</style>
