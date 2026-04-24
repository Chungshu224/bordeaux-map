<template>
  <CourseHomeLayout :theme="theme" region-name="Portugal" breadcrumb-country="歐洲・伊比利半島">
    <RegionHero
      :icon="theme.icon"
      tagline="葡萄牙葡萄酒・Porto 與 Madeira 加烈傳奇"
      title="葡萄牙葡萄酒"
      subtitle="Portuguese Wine · Porto · Madeira · Vinho Verde · Douro"
      description="從 1756 年世界最早法定產區 Douro，到 250+ 原生品種、Porto 與 Madeira 不朽加烈酒——掌握大西洋氣候下的葡萄酒傳奇。"
      :stats="heroStats"
    />

    <ProgressStrip
      headline="開始你的葡萄牙葡萄酒之旅"
      subline="從 Level 1 入門開始"
      :percent="0"
      :completed-count="0"
      :total-count="totalLessonCount"
      cta-text="開始學習"
      @cta="emit('startLevel', 'level1')"
    />

    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <LevelTrack
      title="選擇課程階段"
      subtitle="4 階段、62 堂課——從入門到大師加烈酒工藝。"
      :levels="levelData"
      @enter="(n) => emit('startLevel', `level${n}`)"
    />

    <RegionStoryGrid
      title="為什麼學習葡萄牙葡萄酒？"
      :items="overviewItems"
      :cols="3"
    />

    <!-- ── 成就彈窗 ── -->
    <Teleport to="body">
      <div v-if="showAchievement" class="pt-modal-backdrop" @click.self="showAchievement = false">
        <div class="pt-achievement-modal">
          <div class="pt-modal-header">
            <h3>🏆 學習成就</h3>
            <button class="pt-modal-close" @click="showAchievement = false">✕</button>
          </div>
          <div class="pt-modal-body">
            <AchievementsDashboard course-key="portugal" @back="showAchievement = false" />
          </div>
        </div>
      </div>
    </Teleport>

    <!-- ── 進度彈窗 ── -->
    <Teleport to="body">
      <div v-if="showProgress" class="pt-modal-backdrop" @click.self="showProgress = false">
        <div class="pt-progress-modal">
          <div class="pt-modal-header">
            <h3>📊 學習進度</h3>
            <button class="pt-modal-close" @click="showProgress = false">✕</button>
          </div>
          <div class="pt-modal-body">
            <LearningProgressDashboard course-key="portugal" />
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
  LevelTrack, RegionStoryGrid, getTheme
} from '../../shared/courseHome/index.js'
import AchievementsDashboard from '../../AchievementsDashboard.vue'
import LearningProgressDashboard from '../../LearningProgressDashboard.vue'

const emit = defineEmits(['openMap', 'openGrapes', 'startLevel', 'openNotebook', 'openGameHub'])

const theme = getTheme('portugal')

const showAchievement = ref(false)
const showProgress = ref(false)

const totalLessonCount = 62 // 13 + 22 + 15 + 12

const heroStats = [
  { value: '14',   label: '法定產區' },
  { value: '250+', label: '原生品種' },
  { value: '1756', label: 'Douro DOC 元年' }
]

const quickNavItems = [
  { key: 'map',          desc: '14 大產區互動地圖' },
  { key: 'games' },
  { key: 'achievements' },
  { key: 'progress' },
  { key: 'notebook' }
]
function onQuickNav(key) {
  switch (key) {
    case 'map':          emit('openMap'); break
    case 'games':        emit('openGameHub'); break
    case 'notebook':     emit('openNotebook'); break
    case 'achievements': showAchievement.value = true; break
    case 'progress':     showProgress.value = true; break
  }
}

const levelData = [
  {
    number: 1, title: '葡萄牙葡萄酒入門', subtitle: '基礎認識', icon: '🌱',
    description: '14 大產區地理、DOC / IGP 分級、五大紅白品種、Douro / Vinho Verde / Alentejo。',
    tags: ['地理概況', 'DOC / IGP', '核心品種', '三大產區', 'Touriga Nacional'],
    modules: 4, lessons: 13, progress: 0, unlocked: true
  },
  {
    number: 2, title: '重點產區深度', subtitle: '產區精華', icon: '🍷',
    description: 'Douro 三子產區、Porto 波特類型、Vinho Verde 9 子產區、Dão / Bairrada / Alentejo。',
    tags: ['Douro 深度', 'Porto 類型', 'Madeira', 'Açores', 'Vinho Verde'],
    modules: 6, lessons: 22, progress: 0, unlocked: true
  },
  {
    number: 3, title: '加烈酒工藝', subtitle: '加烈與氣泡', icon: '🥃',
    description: 'Porto 全類型、Madeira 加熱工藝、葡萄牙 Espumante 氣泡酒、Moscatel 甜酒。',
    tags: ['Porto 全類型', 'Madeira', 'Espumante', 'Moscatel'],
    modules: 4, lessons: 15, progress: 0, unlocked: true
  },
  {
    number: 4, title: '葡萄牙大師', subtitle: '盲品與收藏', icon: '🏆',
    description: '進階品鑑技巧、年份分析、盲品策略、投資與收藏。',
    tags: ['年份分析', '盲品技巧', '陳年潛力', '收藏價值'],
    modules: 4, lessons: 12, progress: 0, unlocked: true
  }
]

const overviewItems = [
  { icon: '🏛️', title: '全球最早法定產區', desc: '1756 年龐巴爾侯爵劃定 Douro，比世界任何國家的法定產區都早。' },
  { icon: '🍇', title: '250+ 原生品種',     desc: '全球最高的原生品種密度，多數只在葡萄牙才能找到。' },
  { icon: '🥃', title: 'Porto 傳奇',        desc: '全球最著名的加烈甜酒，頂級 Vintage Port 可陳年逾 50 年。' },
  { icon: '🏝️', title: 'Madeira 不朽',      desc: '大西洋火山島氧化加烈酒，陳年實力可超過百年。' },
  { icon: '🌊', title: 'Vinho Verde 清爽',  desc: '大西洋氣候清新白酒，Alvarinho 享譽全球。' },
  { icon: '☀️', title: 'Alentejo 現代',     desc: '近代崛起最快的產區，豐腴圓潤、性價比高。' }
]
</script>
<style scoped>
.pt-modal-backdrop {
  position: fixed; inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000; padding: 20px;
  backdrop-filter: blur(4px);
}
.pt-modal-close {
  background: none; border: 0; font-size: 22px;
  color: #6b7280; cursor: pointer; line-height: 1;
  width: 36px; height: 36px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}
.pt-modal-close:hover { background: #f3f4f6; }
.pt-modal-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 24px; border-bottom: 1px solid #f3f4f6;
}
.pt-modal-header h3 { margin: 0; font-size: 1.2rem; color: #111827; }
.pt-modal-body { flex: 1; overflow-y: auto; padding: 16px 0; }
.pt-achievement-modal,
.pt-progress-modal {
  background: white; border-radius: 20px;
  width: 100%; max-width: 1100px; height: 90vh;
  display: flex; flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
</style>