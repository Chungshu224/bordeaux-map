<template>
  <CourseHomeLayout :theme="theme" region-name="Alsace" breadcrumb-country="歐洲・法國東北">
    <RegionHero
      :icon="theme.icon"
      tagline="阿爾薩斯葡萄酒・法國唯一以品種命名的產區・51 個 Grand Cru"
      title="阿爾薩斯葡萄酒"
      subtitle="Alsace Wine · Riesling · Gewurztraminer · Grand Cru · VT/SGN"
      description="從孚日山雨影效應與逆溫層現象，到 51 個 Grand Cru 的地質分類，再到全法國最嚴格的貴腐甜酒等級——探索這個以品種為名、幾乎只產白酒的獨特產區。"
      :stats="heroStats"
    />

    <ProgressStrip
      headline="開始你的阿爾薩斯葡萄酒之旅"
      subline="從 Level 1 入門開始，逐步深入 Grand Cru 與釀造工藝"
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
      subtitle="4 階段、50 堂課——從入門到大師品鑑。"
      :levels="levelData"
      @enter="(n) => emit('startLevel', `level${n}`)"
    />

    <RegionStoryGrid
      title="為什麼學習阿爾薩斯葡萄酒？"
      :items="overviewItems"
      :cols="3"
    />

    <AchievementModal :open="showAchievements" course-key="alsace" @close="showAchievements = false" />

    <!-- 學習進度彈窗 -->
    <Teleport to="body">
      <div v-if="showProgress" class="al-modal-backdrop" @click.self="showProgress = false">
        <div class="al-progress-modal">
          <div class="al-modal-header">
            <h3>📊 學習進度</h3>
            <button class="al-modal-close" @click="showProgress = false">✕</button>
          </div>
          <div class="al-modal-body">
            <LearningProgressDashboard course-key="alsace" />
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
import { globalAlsaceAchievementManager } from '../../../stores/alsaceAchievementSystem.js'
import { getTotalLessonCount } from '../data/courseLevels.js'
import LearningProgressDashboard from '../../LearningProgressDashboard.vue'

const emit = defineEmits(['startLevel', 'openMap'])

const theme = getTheme('alsace')
const showAchievements = ref(false)
const showProgress = ref(false)

const totalLessonCount = getTotalLessonCount() // 50（16+16+11+7）
const achievementCount = computed(
  () => globalAlsaceAchievementManager?.state?.unlockedAchievements?.length || 0
)

const heroStats = [
  { value: '51',   label: 'Grand Cru' },
  { value: '10',   label: '大品種' },
  { value: '1',    label: '法國唯一品種命名產區' }
]

const quickNavItems = [
  { key: 'map' },
  { key: 'games', enabled: false },
  { key: 'notebook', enabled: false },
  { key: 'achievements' },
  { key: 'progress' }
]
function onQuickNav(key) {
  switch (key) {
    case 'map':           emit('openMap'); break
    case 'achievements':  showAchievements.value = true; break
    case 'progress':      showProgress.value = true; break
  }
}

const levelData = [
  {
    number: 1, title: '阿爾薩斯葡萄酒入門', subtitle: '基礎認識', icon: '🌱',
    description: '地理與行政區劃、氣候與土壤基礎、核心品種光譜、AOC 三層分級架構。',
    tags: ['地理概況', '氣候與土壤', 'Riesling', 'Gewurztraminer', 'AOC 分級'],
    modules: 5, lessons: 16, progress: 0, unlocked: true
  },
  {
    number: 2, title: 'Grand Cru 深度探索', subtitle: '51 個特級園', icon: '🏔️',
    description: '依 Claude Sittler 地質分類系統，深入探索 51 個 Grand Cru 的風土與風格。',
    tags: ['地質分類', 'Kastelberg', 'Rangen', 'Schoenenbourg', 'Cléebourg'],
    modules: 7, lessons: 16, progress: 0, unlocked: true
  },
  {
    number: 3, title: '釀造工藝與特殊酒款', subtitle: 'Crémant 與貴腐甜酒', icon: '🍾',
    description: '葡萄園栽培實務、Crémant d\'Alsace 傳統法、VT／SGN 貴腐甜酒、調配酒與蒸餾酒。',
    tags: ['栽培實務', 'Crémant', 'VT/SGN', 'Edelzwicker', 'Marc d\'Alsace'],
    modules: 5, lessons: 11, progress: 0, unlocked: true
  },
  {
    number: 4, title: '大師品鑑', subtitle: '比較品飲與系統化盲飲', icon: '👑',
    description: 'Alsace vs 德國比較品飲、傳統與現代風格演變、餐酒搭配與系統化盲飲練習。',
    tags: ['Alsace vs 德國', '風格演變', '餐酒搭配', 'WSET 盲品'],
    modules: 4, lessons: 7, progress: 0, unlocked: true
  }
]

const overviewItems = [
  { icon: '🏷️', title: '法國唯一以品種命名', desc: '阿爾薩斯傳統上以葡萄品種命名酒款，與法國多數以產地命名的 AOC 邏輯截然不同。' },
  { icon: '🌡️', title: '逆溫層現象',         desc: '孚日山麓的丘陵坡地比平原更溫暖，是理解 Grand Cru 選址邏輯的關鍵。' },
  { icon: '🪨', title: '十大地質族群',       desc: '51 個 Grand Cru 依地質可分為片岩、花崗岩、石灰岩等十大族群，風土多樣性驚人。' },
  { icon: '🍯', title: '全法門檻最嚴格的甜酒', desc: 'VT 與 SGN 貴腐甜酒的糖度門檻，在全法國 AOC 中僅次於侏羅稻草酒。' },
  { icon: '🥂', title: 'Crémant d\'Alsace',   desc: '法國國內銷量第一的 AOC 氣泡酒，佔阿爾薩斯總產量近兩成。' },
  { icon: '🇩🇪', title: '法德文化交融',        desc: '歷史上多次易主，品種、語言與飲食文化深受德國萊茵地區影響。' }
]
</script>

<style scoped>
.al-modal-backdrop {
  position: fixed; inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}
.al-progress-modal {
  background: white; border-radius: 20px;
  width: 100%; max-width: 1100px; height: 90vh;
  display: flex; flex-direction: column;
  overflow: hidden;
  margin: 0 16px;
}
.al-modal-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 24px; border-bottom: 1px solid #f3f4f6;
  flex-shrink: 0;
}
.al-modal-header h3 { margin: 0; font-size: 1.2rem; color: #111827; }
.al-modal-close {
  background: none; border: 0; font-size: 22px;
  color: #6b7280; cursor: pointer; line-height: 1;
  width: 36px; height: 36px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
}
.al-modal-close:hover { background: #f3f4f6; }
.al-modal-body { flex: 1; overflow-y: auto; padding: 16px 0; }
</style>
