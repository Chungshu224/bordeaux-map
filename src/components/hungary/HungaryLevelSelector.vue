<template>
  <CourseHomeLayout
    :theme="theme"
    region-name="Hungary"
    breadcrumb-country="中歐"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      tagline="中歐葡萄酒・托卡伊傳奇"
      title="匈牙利葡萄酒"
      subtitle="Hungarian Wine · Tokaj Aszú · Carpathian Terroir"
      description="從哈布斯堡王朝御用甜酒，到喀爾巴阡盆地的火山土壤、原生品種與貴腐傳奇——系統化掌握中歐頂級葡萄酒知識。"
      :stats="heroStats"
    />

    <!-- 2. Progress Strip -->
    <ProgressStrip
      :headline="progressHeadline"
      :subline="progressSubline"
      :percent="totalProgressPct"
      :completed-count="completedLessons.length"
      :total-count="totalLessonCount"
      :achievement-count="achievementCount"
      :streak="currentStreak"
      :cta-text="heroButtonText"
      @cta="startJourney"
      @open-achievements="showAchievementModal = true"
      @open-progress="showProgressModal = true"
    />

    <!-- 3. Quick Nav -->
    <QuickNavGrid :items="quickNavItems" @select="onQuickNav" />

    <!-- 4. Level Track -->
    <LevelTrack
      title="選擇課程階段"
      subtitle="從匈牙利葡萄酒入門到深度專業，系統化掌握中歐頂級葡萄酒知識。"
      :levels="levelData"
      @enter="(n) => emit('enterLevel', n)"
    />

    <!-- 5. Region Story -->
    <RegionStoryGrid
      title="為什麼學習匈牙利葡萄酒？"
      :items="overviewItems"
    />

    <!-- ── 進度彈窗 ── -->
    <Teleport to="body">
      <div v-if="showProgressModal" class="modal-backdrop" @click.self="showProgressModal = false">
        <div class="progress-modal">
          <button class="modal-close" @click="showProgressModal = false">✕</button>
          <h2>📊 學習進度</h2>
          <div class="pm-overall">
            <div class="pm-circle">
              <svg viewBox="0 0 36 36" class="pm-svg">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none" stroke="#e8e8e8" stroke-width="3" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none" :stroke="theme.primary" stroke-width="3"
                  :stroke-dasharray="`${totalProgressPct}, 100`" />
              </svg>
              <div class="pm-pct">{{ totalProgressPct }}%</div>
            </div>
            <div class="pm-summary">
              <div class="pm-stat">
                <span class="pm-num">{{ completedLessons.length }}</span>
                <span class="pm-lbl">已完成課程</span>
              </div>
              <div class="pm-stat">
                <span class="pm-num">{{ totalLessonCount }}</span>
                <span class="pm-lbl">總課程數</span>
              </div>
            </div>
          </div>
          <div class="pm-levels">
            <div v-for="lvl in [1, 2]" :key="lvl" class="pm-level-row">
              <div class="pm-level-label">Level {{ lvl }}</div>
              <div class="pm-progress-bar">
                <div
                  class="pm-bar-fill"
                  :style="{ width: `${levelProgress(lvl)}%`, background: lvl === 1 ? theme.primary : theme.accent }"
                ></div>
              </div>
              <div class="pm-pct-label">{{ Math.round(levelProgress(lvl)) }}%</div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- ── 成就彈窗 ── -->
    <Teleport to="body">
      <div v-if="showAchievementModal" class="modal-backdrop" @click.self="showAchievementModal = false">
        <div class="achievement-modal">
          <div class="achievement-modal-header">
            <h3>🏆 學習成就</h3>
            <button class="modal-close" @click="showAchievementModal = false">✕</button>
          </div>
          <div class="achievement-modal-body">
            <AchievementsDashboard course-key="hungary" @back="showAchievementModal = false" />
          </div>
        </div>
      </div>
    </Teleport>
  </CourseHomeLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  CourseHomeLayout,
  RegionHero,
  ProgressStrip,
  QuickNavGrid,
  LevelTrack,
  RegionStoryGrid,
  getTheme
} from '../shared/courseHome/index.js'
import { hungaryLearningState, hungaryLearningLevels } from '../../stores/hungaryLearningStore.js'
import { hungaryAchievementState } from '../../stores/hungaryAchievementSystem.js'
import { authActions } from '../../stores/authStore.js'
import AchievementsDashboard from '../AchievementsDashboard.vue'

const emit = defineEmits(['enterLevel', 'openMap', 'openGames', 'openNotebook'])

// ── 主題 ──────────────────────────────────────
const theme = getTheme('hungary')

// ── Modal 狀態 ─────────────────────────────────
const showProgressModal = ref(false)
const showAchievementModal = ref(false)

// ── 課程 / 進度 ────────────────────────────────
const completedLessons = computed(() => hungaryLearningState.completedLessons)

const LEVEL_LESSON_IDS = {
  1: (hungaryLearningLevels.level1?.lessons || []).map(l => l.id),
  2: (hungaryLearningLevels.level2?.lessons || []).map(l => l.id)
}
const totalLessonCount = computed(
  () => LEVEL_LESSON_IDS[1].length + LEVEL_LESSON_IDS[2].length
)

function levelProgress(n) {
  const ids = LEVEL_LESSON_IDS[n] || []
  if (!ids.length) return 0
  const done = completedLessons.value.filter(id => ids.includes(id)).length
  return (done / ids.length) * 100
}

const totalProgressPct = computed(() => {
  if (!totalLessonCount.value) return 0
  return Math.round((completedLessons.value.length / totalLessonCount.value) * 100)
})

function isLevelUnlocked(n) {
  if (n === 1) return true
  if (authActions.isAdmin()) return true
  if (hungaryLearningState.testMode) return true
  const finalId = (LEVEL_LESSON_IDS[n - 1] || []).at(-1)
  return finalId != null && completedLessons.value.includes(finalId)
}

const heroButtonText = computed(() => {
  if (levelProgress(1) >= 100 && isLevelUnlocked(2)) return '開始 Level 2'
  if (levelProgress(1) > 0) return '繼續 Level 1'
  return '開始學習'
})

const progressHeadline = computed(() => {
  if (totalProgressPct.value === 0) return '開始你的匈牙利葡萄酒之旅'
  if (totalProgressPct.value >= 100) return '🎉 已完成全部課程，恭喜成為匈牙利葡萄酒達人！'
  return `已完成 ${completedLessons.value.length} / ${totalLessonCount.value} 課`
})
const progressSubline = computed(() => {
  if (totalProgressPct.value === 0) return '從 Level 1 入門開始'
  if (levelProgress(1) < 100) return '當前階段：Level 1 · 基礎認識'
  if (isLevelUnlocked(2) && levelProgress(2) < 100) return '當前階段：Level 2 · 深度探索'
  return ''
})

function startJourney() {
  if (levelProgress(1) >= 100 && isLevelUnlocked(2)) emit('enterLevel', 2)
  else emit('enterLevel', 1)
}

// ── 成就 / 連續學習 ────────────────────────────
const achievementCount = computed(() => hungaryAchievementState.unlockedAchievements.length)
const currentStreak = computed(() => hungaryAchievementState.userStats.currentStreak || 0)

// ── Hero stats ─────────────────────────────────
const heroStats = [
  { value: '22',  label: '法定產區' },
  { value: '14',  label: '系統課程' },
  { value: '10+', label: '原生品種' }
]

// ── Quick Nav 自訂 ─────────────────────────────
const quickNavItems = computed(() => [
  { key: 'map',          desc: '22 個法定產區互動地圖' },
  { key: 'games',        desc: '產區競答・品種配對・托卡伊識別' },
  { key: 'achievements', desc: `${achievementCount.value} 個已解鎖徽章` },
  { key: 'progress',     desc: `${totalProgressPct.value}% 完成・${completedLessons.value.length} 課` },
  { key: 'notebook',     desc: '記錄品飲體驗・年份筆記' }
])

function onQuickNav(key) {
  switch (key) {
    case 'map':          emit('openMap'); break
    case 'games':        emit('openGames'); break
    case 'notebook':     emit('openNotebook'); break
    case 'achievements': showAchievementModal.value = true; break
    case 'progress':     showProgressModal.value = true; break
  }
}

// ── Level cards 資料 ───────────────────────────
const levelData = computed(() => [
  {
    number: 1,
    title: '匈牙利葡萄酒入門',
    subtitle: '基礎認識',
    icon: '🌱',
    description: '建立匈牙利葡萄酒的完整基礎：歷史地理、主要品種、五大產區群，以及托卡伊 Aszú 貴腐甜酒的傳奇世界。',
    tags: ['歷史與王室', '喀爾巴阡盆地', 'Furmint 品種', '托卡伊 Aszú', '22 法定產區'],
    modules: 4,
    lessons: 8,
    progress: levelProgress(1),
    unlocked: true
  },
  {
    number: 2,
    title: '匈牙利葡萄酒進階',
    subtitle: '深度探索',
    icon: '🏆',
    description: '深入各產區風土、頂級酒莊與年份差異，托卡伊精品酒莊、維拉尼頂級紅酒，以及盲品匈牙利葡萄酒的專業技巧。',
    tags: ['Royal Tokaji', '維拉尼紅酒', '公牛血', '年份分析', '盲品技巧'],
    modules: 3,
    lessons: 6,
    progress: levelProgress(2),
    unlocked: isLevelUnlocked(2) && !hungaryLearningLevels.level2?.comingSoon,
    unlockHint: hungaryLearningLevels.level2?.comingSoon ? '🚧 課程開發中，敬請期待' : '完成 Level 1 後解鎖'
  }
])

// ── 概覽卡片 ───────────────────────────────────
const overviewItems = [
  { icon: '👑', title: '帝國御用美酒',     desc: '托卡伊 Aszú 曾是哈布斯堡王朝與法國皇室御用，彼得大帝、腓特烈大帝都是愛好者。' },
  { icon: '🍯', title: '全球最早甜酒分級', desc: '1730 年匈牙利建立世界第一個官方葡萄酒分級系統，比波爾多 1855 年早 125 年。' },
  { icon: '🌋', title: '火山土壤的奇蹟',   desc: '托卡伊的流紋岩土壤賦予 Furmint 獨特礦石感，加之貴腐菌造就無與倫比的複雜度。' },
  { icon: '🍷', title: '紅酒的公牛血傳說', desc: '埃格爾的 Bikavér（公牛血）是匈牙利最知名的紅酒，混釀 Kékfrankos 等多個品種。' }
]
</script>

<style scoped>
/* ── 通用彈窗 ─────────────────────────────────── */
.modal-backdrop {
  position: fixed; inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000; padding: 20px;
  backdrop-filter: blur(4px);
}
.modal-close {
  position: absolute; top: 12px; right: 12px;
  background: none; border: 0; font-size: 22px;
  color: #6b7280; cursor: pointer; line-height: 1;
  width: 36px; height: 36px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}
.modal-close:hover { background: #f3f4f6; }

/* ── 進度彈窗 ─────────────────────────────────── */
.progress-modal {
  position: relative;
  background: white; border-radius: 20px;
  padding: 32px; max-width: 480px; width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}
.progress-modal h2 { margin: 0 0 24px; font-size: 1.4rem; color: #111827; }

.pm-overall { display: flex; align-items: center; gap: 24px; margin-bottom: 24px; }
.pm-circle { position: relative; width: 110px; height: 110px; flex-shrink: 0; }
.pm-svg { transform: rotate(-90deg); width: 100%; height: 100%; }
.pm-pct {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem; font-weight: 800; color: #c8102e;
}
.pm-summary { display: flex; flex-direction: column; gap: 12px; flex: 1; }
.pm-stat { display: flex; flex-direction: column; }
.pm-num { font-size: 1.4rem; font-weight: 700; color: #111827; }
.pm-lbl { font-size: 0.82rem; color: #6b7280; }

.pm-levels { display: flex; flex-direction: column; gap: 12px; }
.pm-level-row { display: grid; grid-template-columns: 70px 1fr 50px; align-items: center; gap: 10px; }
.pm-level-label { font-size: 0.88rem; font-weight: 600; color: #4b5563; }
.pm-progress-bar { height: 8px; background: #f3f4f6; border-radius: 4px; overflow: hidden; }
.pm-bar-fill { height: 100%; border-radius: 4px; transition: width 0.4s ease; }
.pm-pct-label { font-size: 0.85rem; font-weight: 700; color: #c8102e; text-align: right; }

/* ── 成就彈窗 ─────────────────────────────────── */
.achievement-modal {
  background: white; border-radius: 20px;
  width: 100%; max-width: 1100px; height: 90vh;
  display: flex; flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
.achievement-modal-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 24px; border-bottom: 1px solid #f3f4f6;
}
.achievement-modal-header h3 { margin: 0; font-size: 1.2rem; color: #111827; }
.achievement-modal-header .modal-close { position: static; }
.achievement-modal-body { flex: 1; overflow-y: auto; padding: 16px 0; }
</style>
