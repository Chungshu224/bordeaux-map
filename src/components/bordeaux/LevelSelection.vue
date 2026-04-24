<template>
  <CourseHomeLayout
    :theme="theme"
    region-name="Bordeaux"
    breadcrumb-country="法國・西南法"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      tagline="法國西南・1855 分級・左右岸傳奇"
      title="波爾多葡萄酒"
      subtitle="Bordeaux · Médoc · Saint-Émilion · Pomerol"
      description="從加倫河左岸的卡本內傳奇，到右岸聖愛美濃與玻美侯的梅洛王國——系統化掌握全球最具代表性的葡萄酒產區。"
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
      subtitle="從基礎入門到精英大師，循序漸進地掌握波爾多葡萄酒的完整知識體系。"
      :levels="levelData"
      @enter="(n) => emit('selectLevel', n)"
    />

    <!-- 5. Region Story -->
    <RegionStoryGrid
      title="為什麼學習波爾多葡萄酒？"
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
              <div class="pm-pct" :style="{ color: theme.primary }">{{ totalProgressPct }}%</div>
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
            <div v-for="lvl in [1, 2, 3, 4]" :key="lvl" class="pm-level-row">
              <div class="pm-level-label">Level {{ lvl }}</div>
              <div class="pm-progress-bar">
                <div
                  class="pm-bar-fill"
                  :style="{ width: `${levelProgress(lvl)}%`, background: lvl % 2 === 1 ? theme.primary : theme.accent }"
                ></div>
              </div>
              <div class="pm-pct-label" :style="{ color: theme.primary }">{{ Math.round(levelProgress(lvl)) }}%</div>
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
            <AchievementsDashboard course-key="bordeaux" @back="showAchievementModal = false" />
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
import { learningState, learningActions } from '../../stores/learningStore.js'
import { achievementState } from '../../stores/achievementSystem.js'
import { authActions } from '../../stores/authStore.js'
import AchievementsDashboard from '../AchievementsDashboard.vue'

// Props（保留 deviceInfo 以便父層傳入時不報錯）
defineProps({
  deviceInfo: {
    type: Object,
    default: () => ({ isMobile: false, isTablet: false, isDesktop: true, layoutConfig: {} })
  }
})

// Emits — 與 App.vue 既有監聽事件名稱對齊
const emit = defineEmits(['selectLevel', 'exploreMode', 'gameHubMode', 'notebookMode', 'settings'])

// ── 主題 ────────────────────────────────────────
const theme = getTheme('bordeaux')

// ── Modal 狀態 ──────────────────────────────────
const showProgressModal = ref(false)
const showAchievementModal = ref(false)

// ── 課程 / 進度 ─────────────────────────────────
const completedLessons = computed(() => learningState.completedLessons || [])

const LEVEL_KEYS = [1, 2, 3, 4]

const totalLessonCount = computed(() => {
  return LEVEL_KEYS.reduce((sum, n) => {
    const p = learningState.userProgress?.[`level${n}`]
    return sum + (p?.total || 0)
  }, 0)
})

function levelProgress(n) {
  const p = learningState.userProgress?.[`level${n}`]
  if (!p || !p.total) return 0
  return (p.completed / p.total) * 100
}

const totalCompletedCount = computed(() => {
  return LEVEL_KEYS.reduce((sum, n) => {
    const p = learningState.userProgress?.[`level${n}`]
    return sum + (p?.completed || 0)
  }, 0)
})

const totalProgressPct = computed(() => {
  if (!totalLessonCount.value) return 0
  return Math.round((totalCompletedCount.value / totalLessonCount.value) * 100)
})

function isLevelUnlocked(n) {
  if (n === 1) return true
  if (learningState.testMode) return true
  if (authActions.isAdmin && authActions.isAdmin()) return true
  const finalId = learningActions.getFinalLessonId(n - 1)
  return finalId != null && completedLessons.value.includes(finalId)
}

// 找出第一個尚未完成且已解鎖的 Level
function firstActionableLevel() {
  for (const n of LEVEL_KEYS) {
    if (isLevelUnlocked(n) && levelProgress(n) < 100) return n
  }
  return 1
}

const heroButtonText = computed(() => {
  const n = firstActionableLevel()
  if (totalProgressPct.value === 0) return '開始學習'
  if (totalProgressPct.value >= 100) return '重新複習'
  if (levelProgress(n) > 0) return `繼續 Level ${n}`
  return `開始 Level ${n}`
})

const progressHeadline = computed(() => {
  if (totalProgressPct.value === 0) return '開始你的波爾多葡萄酒之旅'
  if (totalProgressPct.value >= 100) return '🎉 已完成全部課程，恭喜成為波爾多葡萄酒達人！'
  return `已完成 ${totalCompletedCount.value} / ${totalLessonCount.value} 課`
})

const progressSubline = computed(() => {
  if (totalProgressPct.value === 0) return '從 Level 1 基礎入門開始'
  if (totalProgressPct.value >= 100) return ''
  const n = firstActionableLevel()
  const titles = { 1: '基礎入門', 2: '中級進階', 3: '高級專業', 4: '精英大師' }
  return `當前階段：Level ${n} · ${titles[n]}`
})

function startJourney() {
  emit('selectLevel', firstActionableLevel())
}

// ── 成就 / 連續學習 ─────────────────────────────
const achievementCount = computed(() => achievementState?.unlockedAchievements?.length || 0)
const currentStreak = computed(() => achievementState?.userStats?.currentStreak || 0)

// ── Hero stats ──────────────────────────────────
const heroStats = [
  { value: '60+',  label: 'AOC 法定產區' },
  { value: '1855', label: '列級酒莊分級' },
  { value: '7000+', label: '酒莊與名家' }
]

// ── Quick Nav 自訂 ──────────────────────────────
const quickNavItems = computed(() => [
  { key: 'map',          desc: '互動式波爾多產區地圖・地質・氣候' },
  { key: 'games',        desc: '產區競答・左右岸・年份溫度・葡萄土壤' },
  { key: 'achievements', desc: `${achievementCount.value} 個已解鎖徽章` },
  { key: 'progress',     desc: `${totalProgressPct.value}% 完成・${totalCompletedCount.value} 課` },
  { key: 'notebook',     desc: '記錄品飲體驗・年份・氣候參考' }
])

function onQuickNav(key) {
  switch (key) {
    case 'map':          emit('exploreMode'); break
    case 'games':        emit('gameHubMode'); break
    case 'notebook':     emit('notebookMode'); break
    case 'achievements': showAchievementModal.value = true; break
    case 'progress':     showProgressModal.value = true; break
  }
}

// ── Level cards 資料 ────────────────────────────
const levelData = computed(() => [
  {
    number: 1,
    title: '基礎入門',
    subtitle: 'Level 1',
    icon: '🌱',
    description: '建立波爾多葡萄酒的基礎認知，了解地理環境、主要品種與基本釀造工藝。',
    tags: ['地理位置與氣候', '主要葡萄品種', '左岸右岸差異', '品酒基礎技巧'],
    modules: learningActions._modulesCount?.(1) || 4,
    lessons: learningState.userProgress?.level1?.total || 8,
    progress: levelProgress(1),
    unlocked: isLevelUnlocked(1)
  },
  {
    number: 2,
    title: '中級進階',
    subtitle: 'Level 2',
    icon: '🌿',
    description: '深入了解波爾多各產區特色與風格差異，掌握專業品鑑與分析技能。',
    tags: ['左岸四大村莊', '右岸精品產區', '風土條件分析', '投資收藏價值'],
    modules: 4,
    lessons: learningState.userProgress?.level2?.total || 9,
    progress: levelProgress(2),
    unlocked: isLevelUnlocked(2),
    unlockHint: '完成 Level 1 綜合評量後解鎖'
  },
  {
    number: 3,
    title: '高級專業',
    subtitle: 'Level 3',
    icon: '🌳',
    description: '掌握複雜的風土條件與品質評估，深入理解氣候變遷、土壤科學與市場趨勢。',
    tags: ['氣候變遷分析', '土壤科學研究', '甜酒專業技術', '市場投資分析'],
    modules: 5,
    lessons: learningState.userProgress?.level3?.total || 15,
    progress: levelProgress(3),
    unlocked: isLevelUnlocked(3),
    unlockHint: '完成 Level 2 綜合評量後解鎖'
  },
  {
    number: 4,
    title: '精英大師',
    subtitle: 'Level 4',
    icon: '🏆',
    description: '專業分析與綜合評估能力培養，成為波爾多葡萄酒領域的專業顧問。',
    tags: ['專業論文研究', '商業案例分析', '行業趨勢預測', '國際市場洞察'],
    modules: 4,
    lessons: learningState.userProgress?.level4?.total || 12,
    progress: levelProgress(4),
    unlocked: isLevelUnlocked(4),
    unlockHint: '完成 Level 3 綜合評量後解鎖'
  }
])

// ── 概覽卡片 ────────────────────────────────────
const overviewItems = [
  { icon: '🏰', title: '1855 列級酒莊', desc: '拿破崙三世欽定的世界第一個葡萄酒分級系統，五大一級酒莊至今仍是全球收藏指標。' },
  { icon: '🌊', title: '左右岸雙傳奇', desc: '加倫河將波爾多一分為二：左岸卡本內主導的厚實結構，右岸梅洛王國的圓潤豐美。' },
  { icon: '🍇', title: '經典混釀美學', desc: 'Cabernet Sauvignon、Merlot、Cabernet Franc 等品種混釀，是波爾多風味平衡的核心精髓。' },
  { icon: '🍯', title: '貴腐甜酒之王', desc: 'Sauternes 與 Barsac 的貴腐黴菌奇蹟，造就 Château d’Yquem 等百年甜酒傳奇。' }
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
  font-size: 1.4rem; font-weight: 800;
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
.pm-pct-label { font-size: 0.85rem; font-weight: 700; text-align: right; }

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
