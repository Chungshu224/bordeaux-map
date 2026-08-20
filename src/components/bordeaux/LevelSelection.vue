<template>
  <CourseHomeLayout
    :theme="theme"
    region-name="Bordeaux"
    :breadcrumb-country="$t('bordeaux.hero.breadcrumbCountry')"
  >
    <!-- 1. Hero -->
    <RegionHero
      :icon="theme.icon"
      :tagline="$t('bordeaux.hero.tagline')"
      :title="$t('bordeaux.hero.title')"
      subtitle="Bordeaux · Médoc · Saint-Émilion · Pomerol"
      :description="$t('bordeaux.hero.description')"
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
      :title="$t('bordeaux.levelTrack.title')"
      :subtitle="$t('bordeaux.levelTrack.subtitle')"
      :levels="levelData"
      @enter="(n) => emit('selectLevel', n)"
    />

    <!-- 5. Region Story -->
    <RegionStoryGrid
      :title="$t('bordeaux.storyGrid.title')"
      :items="overviewItems"
    />

    <!-- ── 進度彈窗 ── -->
    <Teleport to="body">
      <div v-if="showProgressModal" class="modal-backdrop" @click.self="showProgressModal = false">
        <div class="progress-modal">
          <button class="modal-close" @click="showProgressModal = false">✕</button>
          <h2>{{ $t('bordeaux.progress.modalTitle') }}</h2>
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
                <span class="pm-lbl">{{ $t('bordeaux.progress.modalCompleted') }}</span>
              </div>
              <div class="pm-stat">
                <span class="pm-num">{{ totalLessonCount }}</span>
                <span class="pm-lbl">{{ $t('bordeaux.progress.modalTotal') }}</span>
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
            <h3>{{ $t('bordeaux.achievements.modalTitle') }}</h3>
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
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
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
import { authActions, authState } from '../../stores/authStore.js'
import { getCourseAccess } from '../../lib/purchaseService.js'
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
const { t, tm } = useI18n()

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

// Level 2 以上需要 basic 訂閱；Level 1 永久免費（見 router/index.js 的 Tier Access Map）
const courseTier = ref('free')
onMounted(async () => {
  if (authActions.isAdmin && authActions.isAdmin()) {
    courseTier.value = 'premium'
  } else if (authState.user) {
    courseTier.value = await getCourseAccess(authState.user.id, 'bordeaux')
  }
})

function isLevelUnlocked(n) {
  if (n === 1) return true
  if (learningState.testMode) return true
  if (authActions.isAdmin && authActions.isAdmin()) return true
  if (courseTier.value === 'free') return false
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
  if (totalProgressPct.value === 0) return t('bordeaux.progress.btnStart')
  if (totalProgressPct.value >= 100) return t('bordeaux.progress.btnReview')
  if (levelProgress(n) > 0) return t('bordeaux.progress.btnContinue', { n })
  return t('bordeaux.progress.btnStartLevel', { n })
})

const progressHeadline = computed(() => {
  if (totalProgressPct.value === 0) return t('bordeaux.progress.headlineStart')
  if (totalProgressPct.value >= 100) return t('bordeaux.progress.headlineComplete')
  return t('bordeaux.progress.headlineProgress', { done: totalCompletedCount.value, total: totalLessonCount.value })
})

const progressSubline = computed(() => {
  if (totalProgressPct.value === 0) return t('bordeaux.progress.sublineStart')
  if (totalProgressPct.value >= 100) return ''
  const n = firstActionableLevel()
  const titles = tm('bordeaux.levels.titles')
  return t('bordeaux.progress.sublineLevel', { n, title: titles[n] })
})

function startJourney() {
  emit('selectLevel', firstActionableLevel())
}

// ── 成就 / 連續學習 ─────────────────────────────
const achievementCount = computed(() => achievementState?.unlockedAchievements?.length || 0)
const currentStreak = computed(() => achievementState?.userStats?.currentStreak || 0)

// ── Hero stats ──────────────────────────────────
const heroStats = computed(() => tm('bordeaux.hero.stats'))

// ── Quick Nav 自訂 ──────────────────────────────
const quickNavItems = computed(() => [
  { key: 'map',          desc: t('bordeaux.quickNav.mapDesc') },
  { key: 'games',        desc: t('bordeaux.quickNav.gamesDesc') },
  { key: 'achievements', desc: t('bordeaux.quickNav.achievementsDesc', { count: achievementCount.value }) },
  { key: 'progress',     desc: t('bordeaux.quickNav.progressDesc', { pct: totalProgressPct.value, count: totalCompletedCount.value }) },
  { key: 'notebook',     desc: t('bordeaux.quickNav.notebookDesc') }
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
    title: t('bordeaux.levels.l1.title'),
    subtitle: 'Level 1',
    icon: '🌱',
    description: t('bordeaux.levels.l1.desc'),
    tags: tm('bordeaux.levels.l1.tags'),
    modules: learningActions._modulesCount?.(1) || 4,
    lessons: learningState.userProgress?.level1?.total || 8,
    progress: levelProgress(1),
    unlocked: isLevelUnlocked(1)
  },
  {
    number: 2,
    title: t('bordeaux.levels.l2.title'),
    subtitle: 'Level 2',
    icon: '🌿',
    description: t('bordeaux.levels.l2.desc'),
    tags: tm('bordeaux.levels.l2.tags'),
    modules: 4,
    lessons: learningState.userProgress?.level2?.total || 9,
    progress: levelProgress(2),
    unlocked: isLevelUnlocked(2),
    unlockHint: t('bordeaux.levels.l2.unlockHint')
  },
  {
    number: 3,
    title: t('bordeaux.levels.l3.title'),
    subtitle: 'Level 3',
    icon: '🌳',
    description: t('bordeaux.levels.l3.desc'),
    tags: tm('bordeaux.levels.l3.tags'),
    modules: 5,
    lessons: learningState.userProgress?.level3?.total || 15,
    progress: levelProgress(3),
    unlocked: isLevelUnlocked(3),
    unlockHint: t('bordeaux.levels.l3.unlockHint')
  },
  {
    number: 4,
    title: t('bordeaux.levels.l4.title'),
    subtitle: 'Level 4',
    icon: '🏆',
    description: t('bordeaux.levels.l4.desc'),
    tags: tm('bordeaux.levels.l4.tags'),
    modules: 4,
    lessons: learningState.userProgress?.level4?.total || 12,
    progress: levelProgress(4),
    unlocked: isLevelUnlocked(4),
    unlockHint: t('bordeaux.levels.l4.unlockHint')
  }
])

// ── 概覽卡片 ────────────────────────────────────
const overviewItems = computed(() => tm('bordeaux.storyGrid.items'))
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
