<template>
  <div class="loire-level-selector">
    <!-- 背景動畫（河流水波） -->
    <div class="background-animation">
      <div class="river-waves">
        <div v-for="i in 6" :key="`wave-${i}`" class="wave" :style="getWaveStyle(i)"></div>
      </div>
      <div class="water-bubbles">
        <div v-for="i in 18" :key="`bubble-${i}`" class="bubble" :style="getBubbleStyle(i)"></div>
      </div>
    </div>

    <div class="main-container">
      <!-- 品牌頭部 -->
      <header class="brand-header">
        <div class="brand-logo">
          <div class="river-icon">🌊</div>
          <div class="brand-text">
            <h1 class="brand-title">羅亞爾河谷葡萄酒</h1>
            <p class="brand-subtitle">Loire Valley Wine · 法國花園的葡萄酒詩篇</p>
          </div>
        </div>

        <!-- 用戶面板 -->
        <div class="user-panel">
          <template v-if="authUser">
            <div class="user-avatar">
              <img v-if="avatarUrl" :src="avatarUrl" class="ls-avatar-img" />
              <span v-else class="ls-avatar-initial">{{ avatarInitial }}</span>
            </div>
            <div class="user-info">
              <span class="user-name">{{ displayName }}</span>
              <div class="tier-badge" :class="`tier-${userTier}`">
                <span class="tier-icon">{{ tierInfo.icon }}</span>
                <span class="tier-label">{{ tierInfo.label }}</span>
              </div>
              <div class="user-btns">
                <button class="user-action-btn home" @click="router.push('/')">🏠 首頁</button>
                <button class="user-action-btn logout" @click="handleLogout">登出</button>
              </div>
            </div>
          </template>
          <template v-else>
            <button class="user-action-btn login" @click="router.push('/login')">🔑 登入</button>
          </template>
        </div>
      </header>

      <!-- 快速功能入口 -->
      <section class="quick-nav">
        <div class="quick-nav-grid">
          <button class="nav-card game-hub" @click="emit('openGames')">
            <span class="nav-icon">🎮</span>
            <span class="nav-title">互動練習</span>
            <span class="nav-desc">產區競答・品種配對・分區辨識</span>
          </button>
          <button class="nav-card map-card" @click="emit('openMap')">
            <span class="nav-icon">🗺️</span>
            <span class="nav-title">探索地圖</span>
            <span class="nav-desc">羅亞爾河谷互動式產區地圖</span>
          </button>
          <button class="nav-card achievement-card" @click="showAchievements = true">
            <span class="nav-icon">🏆</span>
            <span class="nav-title">成就系統</span>
            <span class="nav-desc">查看已解鎖成就與積分等級</span>
          </button>
          <button class="nav-card progress-card" @click="showProgressModal = true">
            <span class="nav-icon">📊</span>
            <span class="nav-title">學習進度</span>
            <span class="nav-desc">{{ totalProgressPct }}% 完成・{{ completedCount }} 課</span>
          </button>
          <button class="nav-card notes-card" @click="emit('openNotes')">
            <span class="nav-icon">📔</span>
            <span class="nav-title">品飲筆記</span>
            <span class="nav-desc">記錄品飲心得與學習摘要</span>
          </button>
        </div>
      </section>

      <!-- 課程階段選擇 -->
      <section class="levels-section">
        <div class="section-header">
          <div class="section-title-group">
            <h2>選擇課程產區</h2>
            <p>依照官網五大子產區循序漸進，完成前一產區的綜合評量即可解鎖下一產區。</p>
          </div>
          <div class="section-actions">
            <button class="section-btn" @click="startJourney">
              {{ heroButtonText }}
            </button>
          </div>
        </div>

        <div class="levels-grid">
          <!-- Level 卡片（動態渲染） -->
          <div
            v-for="n in 4"
            :key="n"
            class="level-card"
            :class="[
              `level-${n}`,
              {
                'in-progress': getLevelProgress(n) > 0 && getLevelProgress(n) < 100,
                'completed': getLevelProgress(n) >= 100,
                'locked': !isLevelUnlocked(n)
              }
            ]"
            @click="isLevelUnlocked(n) && emit('startLevel', n)"
          >
            <div class="card-accent-bar"></div>
            <div class="level-header">
              <div class="level-badge">
                <span class="level-number">{{ n }}</span>
                <div class="level-icon">{{ getLevelData(n).emoji }}</div>
              </div>
              <div class="level-title-group">
                <h3>{{ getLevelData(n).title.replace(/^Level \d+ — /, '') }}</h3>
                <p>Level {{ n }} · {{ getLevelData(n).titleFr }}</p>
              </div>
            </div>
            <div class="level-content">
              <p class="level-description">{{ getLevelData(n).description }}</p>
              <!-- 代表 AOC 標籤 -->
              <div class="aoc-tags">
                <span
                  v-for="aoc in getLevelData(n).keyAOC.slice(0, 3)"
                  :key="aoc"
                  class="aoc-tag"
                >{{ aoc }}</span>
              </div>
              <!-- 品種資訊 -->
              <div class="grape-info">
                <span class="grape-label">品種：</span>
                <span class="grape-value">{{ getLevelData(n).keyGrapes }}</span>
              </div>
              <div class="level-stats">
                <div class="stat-item">
                  <span class="stat-number">{{ getLevelData(n).modules.length }}</span>
                  <span class="stat-label">個模組</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ getLevelData(n).lessons.length }}</span>
                  <span class="stat-label">堂課程</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ isLevelUnlocked(n) ? Math.round(getLevelProgress(n)) + '%' : '🔒' }}</span>
                  <span class="stat-label">{{ isLevelUnlocked(n) ? '完成度' : '鎖定中' }}</span>
                </div>
              </div>
              <div class="progress-bar-wrap" v-if="isLevelUnlocked(n)">
                <div class="progress-bar-track">
                  <div class="progress-bar-fill" :style="{ width: `${getLevelProgress(n)}%`, background: getLevelData(n).color }"></div>
                </div>
              </div>
            </div>
            <div class="level-action">
              <button
                class="level-btn"
                :style="isLevelUnlocked(n) ? { background: `linear-gradient(135deg, ${getLevelData(n).color}, ${getLevelData(n).color}cc)` } : {}"
                :disabled="!isLevelUnlocked(n)"
                @click.stop="isLevelUnlocked(n) && emit('startLevel', n)"
              >
                <template v-if="!isLevelUnlocked(n)">完成上一產區後解鎖</template>
                <template v-else-if="getLevelProgress(n) >= 100">重新學習</template>
                <template v-else-if="getLevelProgress(n) > 0">繼續學習</template>
                <template v-else>開始學習</template>
                <span v-if="isLevelUnlocked(n)" class="btn-arrow">→</span>
              </button>
            </div>
            <!-- 鎖定遮罩 -->
            <div v-if="!isLevelUnlocked(n)" class="lock-overlay">
              <div class="lock-content">
                <span class="lock-icon">🔒</span>
                <p>完成 Level {{ n - 1 }} 後解鎖</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 課程亮點橫列 -->
      <section class="course-highlights">
        <div class="highlight-item">
          <span class="hl-icon">🍷</span>
          <div class="hl-text">
            <strong>{{ totalLessonsCount }} 堂課程</strong>
            <span>橫跨五大子產區</span>
          </div>
        </div>
        <div class="highlight-item">
          <span class="hl-icon">🗺️</span>
          <div class="hl-text">
            <strong>5 大子產區</strong>
            <span>Nantais · Anjou · Touraine · Centre · Loir</span>
          </div>
        </div>
        <div class="highlight-item">
          <span class="hl-icon">🍇</span>
          <div class="hl-text">
            <strong>10+ 個品種</strong>
            <span>Chenin · Muscadet · Sauvignon · Cab Franc…</span>
          </div>
        </div>
        <div class="highlight-item">
          <span class="hl-icon">📈</span>
          <div class="hl-text">
            <strong>{{ totalProgressPct }}% 完成</strong>
            <span>{{ completedCount }}/{{ totalLessonsCount }} 課已學習</span>
          </div>
        </div>
      </section>

    </div><!-- /.main-container -->

    <!-- 學習進度 Modal -->
    <Teleport to="body">
      <div v-if="showProgressModal" class="progress-modal-overlay" @click.self="showProgressModal = false">
        <div class="progress-modal">
          <div class="pm-header">
            <h3>📊 羅亞爾河谷學習進度</h3>
            <button class="pm-close" @click="showProgressModal = false">×</button>
          </div>
          <div class="pm-body">
            <div class="progress-detail-grid">
              <div
                v-for="n in 4"
                :key="n"
                class="pd-item"
              >
                <div class="pd-label">{{ getLevelData(n).emoji }} Level {{ n }} — {{ getLevelData(n).title?.replace(/^Level \d+ — /, '') }}</div>
                <div class="pd-value" :style="{ color: getLevelData(n).color }">
                  {{ isLevelUnlocked(n) ? Math.round(getLevelProgress(n)) + '%' : '🔒 未解鎖' }}
                </div>
                <div class="pd-bar" v-if="isLevelUnlocked(n)">
                  <div :style="{ width: getLevelProgress(n) + '%', background: getLevelData(n).color }"></div>
                </div>
              </div>
              <div class="pd-item pd-wide">
                <div class="pd-label">已完成課程</div>
                <div class="pd-value">{{ completedCount }} / {{ totalLessonsCount }} 堂</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- 成就系統 Modal -->
    <Teleport to="body">
      <div v-if="showAchievements" class="progress-modal-overlay" @click.self="showAchievements = false">
        <div class="progress-modal">
          <div class="pm-header">
            <h3>🏆 羅亞爾河谷成就系統</h3>
            <button class="pm-close" @click="showAchievements = false">×</button>
          </div>
          <div class="pm-body">
            <AchievementsDashboard course-key="loire" @back="showAchievements = false" />
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { authState, authActions } from '../../stores/authStore.js'
import { loireLearningState, loireLearningLevels, loireLearningActions } from '../../stores/loireLearningStore.js'
import { supabase } from '../../lib/supabaseClient.js'
import AchievementsDashboard from '../AchievementsDashboard.vue'

const router = useRouter()
const emit = defineEmits(['startLevel', 'openMap', 'openQuiz', 'openNotes', 'openGames', 'backToPage'])

// 用戶資訊
const avatarUrl = ref('')
const avatarInitial = ref('我')
const showProgressModal = ref(false)
const showAchievements = ref(false)

const authUser = computed(() => authState.user)
const displayName = computed(() => authActions.getDisplayName())

const TIER_INFO = {
  free:    { label: '品飲新手 Explorer',     icon: '🌱', color: '#6b7280' },
  basic:   { label: '進階愛好者 Enthusiast', icon: '🍇', color: '#7c3aed' },
  premium: { label: '專業達人 Professional', icon: '🏆', color: '#b45309' }
}
const userTier = computed(() => authActions.getEffectiveTier())
const tierInfo = computed(() => TIER_INFO[userTier.value] || TIER_INFO.free)

async function handleLogout() {
  await authActions.signOut()
  router.push('/')
}

onMounted(async () => {
  const user = authState.user
  if (!user) return
  const fallback = user.user_metadata?.full_name || user.email?.split('@')[0] || '我'
  avatarInitial.value = [...fallback][0] || '我'
  if (supabase) {
    const { data } = await supabase.from('profiles').select('display_name,avatar_url').eq('id', user.id).single()
    if (data) {
      avatarUrl.value = data.avatar_url || ''
      if (data.display_name) avatarInitial.value = [...data.display_name][0] || avatarInitial.value
    }
  }
})

// ── Level 資料輔助函式 ────────────────────────
function getLevelData(n) {
  return loireLearningLevels[`level${n}`] || {}
}

function isCompleted(id) {
  return loireLearningState.completedLessons.includes(id)
}

function getLevelProgress(n) {
  const data = getLevelData(n)
  const lessons = data.lessons || []
  if (!lessons.length) return 0
  const done = lessons.filter(l => isCompleted(l.id)).length
  return (done / lessons.length) * 100
}

function isLevelUnlocked(n) {
  if (loireLearningState.testMode) return true
  if (authActions.isAdmin()) return true
  if (n === 1) return true
  const prevFinalId = loireLearningActions.getFinalLessonId(n - 1)
  return prevFinalId != null && loireLearningState.completedLessons.includes(prevFinalId)
}

// ── 課程統計 ────────────────────────────────
const totalLessonsCount = computed(() => {
  return [1,2,3,4,5].reduce((sum, n) => sum + (getLevelData(n).lessons?.length || 0), 0)
})

const completedCount = computed(() => loireLearningState.completedLessons.length)

const totalProgressPct = computed(() => {
  const total = totalLessonsCount.value
  if (!total) return 0
  return Math.round((completedCount.value / total) * 100)
})

// ── 首頁按鈕文字 ────────────────────────────
const heroButtonText = computed(() => {
  for (let n = 5; n >= 1; n--) {
    if (isLevelUnlocked(n) && getLevelProgress(n) > 0 && getLevelProgress(n) < 100) {
      return `繼續 Level ${n}`
    }
  }
  if (getLevelProgress(1) >= 100 && isLevelUnlocked(2)) return '開始 Level 2'
  if (getLevelProgress(1) > 0) return '繼續 Level 1'
  return '開始學習'
})

function startJourney() {
  for (let n = 1; n <= 5; n++) {
    if (isLevelUnlocked(n) && getLevelProgress(n) < 100) {
      emit('startLevel', n)
      return
    }
  }
  emit('startLevel', 1)
}

// ── 水波動畫 ────────────────────────────────
function getWaveStyle(i) {
  return {
    animationDelay: `${(i - 1) * 1.2}s`,
    animationDuration: `${8 + i * 2}s`,
    opacity: 0.06 + i * 0.01
  }
}

function getBubbleStyle(i) {
  const seed = i * 113.7
  return {
    left: `${(seed * 6.3) % 100}%`,
    animationDelay: `${(seed % 6).toFixed(1)}s`,
    animationDuration: `${4 + (seed % 5)}s`,
    width: `${0.4 + (seed % 12) / 10}rem`,
    height: `${0.4 + (seed % 12) / 10}rem`
  }
}
</script>

<style scoped>
/* =============================================
   Loire Level Selector — 羅亞爾河谷課程首頁
   Colors: Loire Green #2e5c3e / Gold #c9a84c
   ============================================= */

.loire-level-selector {
  min-height: 100vh;
  background: linear-gradient(160deg,
    #1d3d28 0%,
    #2e5c3e 20%,
    #3d7a54 40%,
    #2e5c3e 60%,
    #1a4a30 80%,
    #0f2d1c 100%
  );
  position: relative;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
}

/* ── 背景動畫 ────────────────────────────── */
.background-animation {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.river-waves {
  position: absolute;
  inset: 0;
}

.wave {
  position: absolute;
  left: -10%;
  width: 120%;
  height: 3px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(201, 168, 76, 0.3) 20%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(201, 168, 76, 0.3) 80%,
    transparent 100%
  );
  border-radius: 50%;
  animation: wave-flow linear infinite;
}

.wave:nth-child(1)  { top: 15%; }
.wave:nth-child(2)  { top: 30%; }
.wave:nth-child(3)  { top: 48%; }
.wave:nth-child(4)  { top: 62%; }
.wave:nth-child(5)  { top: 78%; }
.wave:nth-child(6)  { top: 90%; }

@keyframes wave-flow {
  0%   { transform: translateX(-5%) scaleY(1); }
  50%  { transform: translateX(5%) scaleY(1.5); }
  100% { transform: translateX(-5%) scaleY(1); }
}

.water-bubbles { position: relative; width: 100%; height: 100%; }

.bubble {
  position: absolute;
  bottom: -2rem;
  background: rgba(201, 168, 76, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  animation: bubble-rise linear infinite;
}

@keyframes bubble-rise {
  to { transform: translateY(-100vh); opacity: 0; }
}

/* ── 主容器 ──────────────────────────────── */
.main-container {
  position: relative;
  z-index: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: 100vh;
}

/* ── 品牌頭部 ────────────────────────────── */
.brand-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(201, 168, 76, 0.15);
  backdrop-filter: blur(12px);
}

.brand-logo { display: flex; align-items: center; gap: 1.25rem; }
.river-icon {
  font-size: 3rem;
  filter: drop-shadow(0 4px 8px rgba(46, 92, 62, 0.3));
  line-height: 1;
}
.brand-title {
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 0.2rem;
  background: linear-gradient(135deg, #2e5c3e, #c9a84c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}
.brand-subtitle { font-size: 0.9rem; color: #555; margin: 0; }

/* 用戶面板 */
.user-panel   { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; }
.user-avatar  {
  width: 44px; height: 44px; border-radius: 50%;
  border: 2.5px solid rgba(46, 92, 62, 0.4);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden; flex-shrink: 0;
}
.ls-avatar-img { width: 100%; height: 100%; object-fit: cover; display: block; }
.ls-avatar-initial { font-size: 1.2rem; font-weight: 700; color: #2e5c3e; }

.user-info    { display: flex; flex-direction: column; align-items: flex-end; gap: 0.3rem; }
.user-name    {
  font-size: 0.9rem; font-weight: 600; color: #2c3e50;
  max-width: 130px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.tier-badge   {
  display: flex; align-items: center; gap: 0.25rem;
  padding: 0.2rem 0.6rem; border-radius: 20px;
  font-size: 0.72rem; font-weight: 700; white-space: nowrap;
  border: 1.5px solid currentColor; opacity: 0.85;
}
.tier-badge.tier-free    { color: #6b7280; background: rgba(107,114,128,0.08); }
.tier-badge.tier-basic   { color: #7c3aed; background: rgba(124,58,237,0.08); }
.tier-badge.tier-premium { color: #b45309; background: rgba(180,83,9,0.1); }

.user-btns { display: flex; gap: 0.4rem; flex-wrap: wrap; justify-content: flex-end; }
.user-action-btn {
  padding: 0.35rem 0.9rem; border: none; border-radius: 20px;
  font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.2s;
}
.user-action-btn.home {
  background: rgba(46,92,62,0.08); color: #1d3d28;
  border: 1.5px solid rgba(46,92,62,0.3);
}
.user-action-btn.home:hover { background: rgba(46,92,62,0.16); }
.user-action-btn.logout {
  background: rgba(239,68,68,0.08); color: #dc2626;
  border: 1px solid rgba(239,68,68,0.3);
}
.user-action-btn.logout:hover { background: rgba(239,68,68,0.16); }
.user-action-btn.login {
  background: linear-gradient(135deg, #2e5c3e, #c9a84c); color: white;
  padding: 0.5rem 1.2rem; font-size: 0.9rem;
}
.user-action-btn.login:hover { opacity: 0.9; transform: translateY(-1px); }

/* ── 快速功能入口 ────────────────────────── */
.quick-nav-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.nav-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 1.2rem 1rem;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.25s ease;
  text-align: center;
  backdrop-filter: blur(10px);
  color: white;
}
.nav-card:hover { transform: translateY(-3px); }

.map-card      { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.15); }
.progress-card { background: rgba(201,168,76,0.2);   border: 1px solid rgba(201,168,76,0.3); }
.quiz-card     { background: rgba(255,255,255,0.1);  border: 1px solid rgba(255,255,255,0.12); }
.notes-card    { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.1); }

.nav-card:hover { background: rgba(255,255,255,0.2); }

.nav-icon  { font-size: 2rem; line-height: 1; }
.nav-title { font-size: 0.95rem; font-weight: 700; }
.nav-desc  { font-size: 0.75rem; opacity: 0.8; line-height: 1.3; }

/* ── 課程階段選擇 ────────────────────────── */
.levels-section {}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  gap: 1rem;
}
.section-title-group h2 {
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  margin: 0 0 0.3rem;
}
.section-title-group p {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.7);
  margin: 0;
}
.section-btn {
  padding: 0.7rem 1.8rem;
  background: linear-gradient(135deg, #c9a84c, #e8c76a);
  border: none;
  border-radius: 30px;
  color: #1d3d28;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s;
  box-shadow: 0 4px 16px rgba(201,168,76,0.4);
  white-space: nowrap;
}
.section-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(201,168,76,0.5); }

.levels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

/* 等級卡片 */
.level-card {
  background: rgba(255,255,255,0.97);
  border-radius: 20px;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
}
.level-card:hover:not(.locked) { transform: translateY(-4px); box-shadow: 0 14px 40px rgba(0,0,0,0.25); }

.card-accent-bar {
  height: 5px;
  background: linear-gradient(90deg, #2e5c3e, #c9a84c);
}

.level-1 .card-accent-bar { background: linear-gradient(90deg, #1a6b5a, #2ea882); }
.level-2 .card-accent-bar { background: linear-gradient(90deg, #8b2c2c, #c44b4b); }
.level-3 .card-accent-bar { background: linear-gradient(90deg, #c19a28, #e8c76a); }
.level-4 .card-accent-bar { background: linear-gradient(90deg, #2c6e8a, #4bafc9); }
.level-5 .card-accent-bar { background: linear-gradient(90deg, #7a5c3a, #b38c5a); }

.level-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem 0.75rem;
}
.level-badge {
  width: 60px; height: 60px;
  border-radius: 16px;
  background: linear-gradient(135deg, #1a6b5a, #2ea882);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(26,107,90,0.3);
}
.level-1 .level-badge { background: linear-gradient(135deg, #1a6b5a, #2ea882); }
.level-2 .level-badge { background: linear-gradient(135deg, #8b2c2c, #c44b4b); }
.level-3 .level-badge { background: linear-gradient(135deg, #c19a28, #e8c76a); }
.level-4 .level-badge { background: linear-gradient(135deg, #2c6e8a, #4bafc9); }
.level-5 .level-badge { background: linear-gradient(135deg, #7a5c3a, #b38c5a); }
.level-number { font-size: 1.5rem; font-weight: 900; color: white; line-height: 1; }
.level-icon   { font-size: 0.85rem; margin-top: 1px; }

.level-title-group h3 { font-size: 1.1rem; font-weight: 700; color: #1a1a2e; margin: 0 0 0.2rem; }
.level-title-group p  { font-size: 0.78rem; color: #888; margin: 0; }

.level-content { padding: 0 1.5rem 1rem; flex: 1; }
.level-description { font-size: 0.85rem; color: #555; line-height: 1.6; margin-bottom: 0.75rem; }

/* AOC 標籤 */
.aoc-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.65rem; }
.aoc-tag {
  padding: 0.2rem 0.55rem;
  background: rgba(46,92,62,0.08);
  border: 1px solid rgba(46,92,62,0.2);
  border-radius: 20px;
  font-size: 0.72rem;
  color: #2e5c3e;
  font-weight: 600;
}

/* 品種資訊 */
.grape-info { font-size: 0.78rem; color: #666; margin-bottom: 0.75rem; }
.grape-label { font-weight: 700; color: #444; }
.grape-value { color: #666; }

.level-stats {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 0.75rem;
}
.stat-item { display: flex; flex-direction: column; align-items: center; }
.stat-number { font-size: 1.4rem; font-weight: 800; color: #2e5c3e; }
.level-1 .stat-number { color: #1a6b5a; }
.level-2 .stat-number { color: #8b2c2c; }
.level-3 .stat-number { color: #b8922a; }
.level-4 .stat-number { color: #2c6e8a; }
.level-5 .stat-number { color: #7a5c3a; }
.stat-label  { font-size: 0.72rem; color: #888; }

.progress-bar-wrap { margin-bottom: 0.5rem; }
.progress-bar-track {
  height: 6px;
  background: #e8f5ee;
  border-radius: 3px;
  overflow: hidden;
}
.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #1a6b5a, #2ea882);
  border-radius: 3px;
  transition: width 0.6s ease;
}

.level-action { padding: 0 1.5rem 1.25rem; }
.level-btn {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #2e5c3e, #3d7a54);
  border: none;
  border-radius: 30px;
  color: white;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: inherit;
}
.level-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(46,92,62,0.3); }
.level-btn:disabled {
  background: #e9ecef;
  color: #aaa;
  cursor: not-allowed;
}
.btn-arrow { font-size: 1.1rem; }

/* 鎖定遮罩 */
.lock-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 45, 28, 0.55);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
}
.lock-content { text-align: center; }
.lock-icon { font-size: 3rem; display: block; margin-bottom: 0.5rem; }
.lock-content p { color: rgba(255,255,255,0.9); font-size: 0.9rem; font-weight: 600; margin: 0; }

/* ── 課程亮點橫列 ────────────────────────── */
.course-highlights {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px;
  color: white;
  backdrop-filter: blur(6px);
}
.hl-icon { font-size: 1.6rem; flex-shrink: 0; }
.hl-text { display: flex; flex-direction: column; gap: 0.15rem; }
.hl-text strong { font-size: 0.9rem; font-weight: 700; }
.hl-text span   { font-size: 0.75rem; opacity: 0.75; }

/* ── 未登入提示 ──────────────────────────── */
.sync-hint-bar {
  text-align: center;
  padding: 0.9rem 1.5rem;
  background: rgba(201,168,76,0.15);
  border: 1px solid rgba(201,168,76,0.25);
  border-radius: 12px;
  color: rgba(255,255,255,0.85);
  font-size: 0.85rem;
}

/* ── 學習進度 Modal ──────────────────────── */
.progress-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 9000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}
.progress-modal {
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 580px;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}
.pm-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 2px solid #eaf4ef;
  background: linear-gradient(135deg, #2e5c3e, #3d7a54);
  color: white;
  border-radius: 20px 20px 0 0;
}
.pm-header h3 { margin: 0; font-size: 1.1rem; }
.pm-close {
  background: rgba(255,255,255,0.15); border: none; border-radius: 8px;
  color: white; font-size: 1.2rem; width: 32px; height: 32px;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
}
.pm-body { padding: 1.5rem; overflow-y: auto; }

.progress-detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
.pd-item { padding: 1rem; background: #f5faf6; border-radius: 12px; }
.pd-wide { grid-column: 1 / -1; }
.pd-label { font-size: 0.8rem; color: #666; margin-bottom: 0.25rem; }
.pd-value { font-size: 1.4rem; font-weight: 800; color: #2e5c3e; margin-bottom: 0.5rem; }
.pd-bar { height: 6px; background: #e8e8e8; border-radius: 3px; overflow: hidden; }
.pd-bar div { height: 100%; background: linear-gradient(90deg, #2e5c3e, #5a9e70); border-radius: 3px; }

.pm-lesson-list h4 { font-size: 0.95rem; color: #2e5c3e; margin: 0 0 0.75rem; }
.pm-lesson-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.85rem;
}
.pm-lesson-status { font-size: 1rem; flex-shrink: 0; }
.pm-lesson-title  { flex: 1; color: #333; }
.pm-lesson-time   { color: #888; font-size: 0.78rem; flex-shrink: 0; }

/* ── 響應式 ──────────────────────────────── */
@media (max-width: 768px) {
  .main-container { padding: 1rem; gap: 1rem; }
  .brand-header { flex-direction: column; gap: 1rem; padding: 1.25rem; }
  .brand-title { font-size: 1.5rem; }
  .brand-subtitle { font-size: 0.8rem; }
  .user-info { align-items: flex-start; }
  .quick-nav-grid { grid-template-columns: repeat(2, 1fr); }
  .levels-grid { grid-template-columns: 1fr; }
  .course-highlights { grid-template-columns: repeat(2, 1fr); }
  .section-header { flex-direction: column; align-items: flex-start; }
  .progress-detail-grid { grid-template-columns: 1fr; }
}@media (max-width: 640px) {
  /* 成就/進度 modal 改為底部抽屜 */
  .progress-modal-overlay { padding: 0; align-items: flex-end; }
  .progress-modal { max-width: none; border-radius: 20px 20px 0 0; max-height: 92vh; }
  .pm-header { padding: 0.75rem 1rem; }
}</style>

