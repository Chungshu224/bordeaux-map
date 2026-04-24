<template>
  <div class="level-selector">
    <!-- 背景動畫 -->
    <div class="background-animation">
      <div class="wine-bubbles">
        <div v-for="i in 20" :key="i" class="bubble" :style="getBubbleStyle(i)"></div>
      </div>
    </div>

    <div class="main-container">
      <!-- 品牌頭部 -->
      <header class="brand-header">
        <div class="brand-logo">
          <div class="wine-glass-icon">🍇</div>
          <div class="brand-text">
            <h1 class="brand-title">侍酒師的筆記本</h1>
            <p class="brand-subtitle">The Sommelier's Notebook</p>
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

      <!-- 快速功能入口（與波爾多相同） -->
      <section class="quick-nav">
        <div class="quick-nav-grid">
          <button class="nav-card game-hub" @click="emit('openGameHub')">
            <span class="nav-icon">🎮</span>
            <span class="nav-title">互動練習</span>
            <span class="nav-desc">產區競答・年份排列・Grand Cru 歸村賽・紅白快答</span>
          </button>
          <button class="nav-card explore" @click="emit('openMap')">
            <span class="nav-icon">🗺️</span>
            <span class="nav-title">探索地圖</span>
            <span class="nav-desc">互動式布根地產區地圖・產區分佈</span>
          </button>
          <button class="nav-card achievements" @click="showAchievements">
            <span class="nav-icon">🏆</span>
            <span class="nav-title">成就系統</span>
            <span class="nav-desc">查看已解鎖成就與積分等級</span>
          </button>
          <button class="nav-card progress" @click="showProgress = true">
            <span class="nav-icon">📊</span>
            <span class="nav-title">學習進度</span>
            <span class="nav-desc">正確率・學習時長・各單元詳細記錄</span>
          </button>
          <button class="nav-card note-hub" @click="emit('openNotebook')">
            <span class="nav-icon">📔</span>
            <span class="nav-title">品飲筆記</span>
            <span class="nav-desc">記錄品飲體驗・年份・產區收藏</span>
          </button>
        </div>
      </section>

      <!-- 等級選擇區 -->
      <section class="levels-section">
        <div class="section-header">
          <div class="section-title-group">
            <h2>選擇課程階段</h2>
            <p>依照學習路徑循序漸進掌握布根地的風土、產區與品種，完成挑戰即可解鎖下一階段。</p>
          </div>
          <div class="section-actions">
            <button class="section-btn" @click="startJourney">立即開始</button>
          </div>
        </div>

        <div class="levels-grid">
          <div
            v-for="level in levels"
            :key="level.id"
            class="level-card"
            :class="{
              disabled: !level.unlocked,
              [`level-${level.id}`]: true
            }"
            @click="level.unlocked && startLevel(level)"
          >
            <!-- 卡片頂部彩色裝飾線（波爾多風格） -->
            <div class="card-accent-bar"></div>

            <!-- 標頭：標章 + 標題 -->
            <div class="level-header">
              <div class="level-badge">
                <span class="level-number">{{ level.id }}</span>
                <div class="level-icon">{{ level.icon }}</div>
              </div>
              <div class="level-title">
                <h3>{{ level.name }}</h3>
                <p>Level {{ level.id }}</p>
              </div>
            </div>

            <!-- 內容區 -->
            <div class="level-content">
              <p class="level-description">{{ level.description }}</p>

              <div class="level-features">
                <div v-for="(feature, index) in level.features" :key="index" class="feature-item">
                  <span class="feature-icon">{{ feature.icon }}</span>
                  <span>{{ feature.text }}</span>
                </div>
              </div>

              <div class="level-stats">
                <div class="stat-item">
                  <span class="stat-number">{{ level.modules }}</span>
                  <span class="stat-label">個模組</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ level.hours }}</span>
                  <span class="stat-label">小時</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ Math.round(getProgress(level.id)) }}%</span>
                  <span class="stat-label">完成度</span>
                </div>
              </div>

              <!-- 進度條 -->
              <div class="progress-bar-wrap">
                <div class="progress-bar-track">
                  <div class="progress-bar-fill" :style="{ width: `${getProgress(level.id)}%` }"></div>
                </div>
              </div>
            </div>

            <!-- 操作按鈕 -->
            <div class="level-action">
              <button
                class="level-btn"
                :disabled="!level.unlocked"
                @click.stop="level.unlocked && startLevel(level)"
              >
                <template v-if="!level.unlocked">需完成前一階段</template>
                <template v-else-if="getProgress(level.id) >= 100">重新學習</template>
                <template v-else-if="isInProgress(level.id)">繼續學習</template>
                <template v-else>開始學習</template>
                <span v-if="level.unlocked" class="btn-arrow">→</span>
              </button>
            </div>

            <!-- 鎖定遮罩 -->
            <div v-if="!level.unlocked" class="lock-overlay">
              <div class="lock-icon">🔒</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 學習進度統計橫列 -->
      <LearningStatsMini course-key="bourgogne" @show-details="showProgress = true" />

      <!-- 未登入提示列 -->
      <div v-if="!authUser" class="sync-hint-bar">
        📍 登入後可將學習進度同步至雲端
      </div>
    </div>
  </div>

  <!-- 學習進度 Modal -->
  <Teleport to="body">
    <div v-if="showProgress" class="modal-overlay" @click.self="showProgress = false">
      <div class="progress-modal">
        <div class="pm-header">
          <h3 class="pm-title">📊 學習進度報告</h3>
          <button class="pm-close" @click="showProgress = false">×</button>
        </div>
        <div class="pm-body">
          <LearningProgressDashboard course-key="bourgogne" />
        </div>
      </div>
    </div>
  </Teleport>

  <!-- 成就系統 Modal -->
  <Teleport to="body">
    <Transition name="ach-overlay">
      <div v-if="showAchievementDashboard" class="ach-modal-overlay" @click.self="showAchievementDashboard = false">
        <div class="ach-modal-card" @click.stop>
          <div class="ach-modal-header">
            <h3>🏆 學習成就</h3>
            <button class="ach-modal-close" @click="showAchievementDashboard = false">×</button>
          </div>
          <div class="ach-modal-body">
            <AchievementsDashboard course-key="bourgogne" @back="showAchievementDashboard = false" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProgress } from '../composables/useProgress.js'
import { authState, authActions } from '../../../stores/authStore.js'
import { useRouter } from 'vue-router'
import AchievementsDashboard from '../../AchievementsDashboard.vue'
import LearningStatsMini from '../../LearningStatsMini.vue'
import LearningProgressDashboard from '../../LearningProgressDashboard.vue'
import { globalBurgAchievementManager } from '../../../stores/bourgogneAchievementSystem.js'
import { supabase } from '../../../lib/supabaseClient.js'

const progressStore = useProgress()
const router = useRouter()

const avatarUrl = ref('')
const avatarInitial = ref('我')
const levels = ref([])
const userProgress = ref({
  1: { completed: false, progress: 0, score: 0 },
  2: { completed: false, progress: 0, score: 0 },
  3: { completed: false, progress: 0, score: 0 },
  4: { completed: false, progress: 0, score: 0 }
})

const emit = defineEmits(['startLevel', 'openMap', 'openGameHub', 'openNotebook'])

// 認證狀態（與波爾多相同）
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

// 泡泡動畫樣式（與波爾多相同）
const getBubbleStyle = (index) => {
  const seed = index * 137.5
  const delay = (seed % 5)
  const duration = 3 + (seed % 4)
  const left = (seed * 7) % 100
  const size = 0.5 + (seed % 15) / 10
  return {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    width: `${size}rem`,
    height: `${size}rem`
  }
}

onMounted(async () => {
  const response = await fetch('/bourgogne/data/courses/levels.json')
  const data = await response.json()
  levels.value = data.levels
  loadUserProgress()
  updateLevelLocks()
  // 載入大頭貼
  const user = authState.user
  if (user) {
    const fallback = user.user_metadata?.full_name || user.email?.split('@')[0] || '我'
    avatarInitial.value = [...fallback][0] || '我'
    if (supabase) {
      const { data: pd } = await supabase.from('profiles').select('display_name,avatar_url').eq('id', user.id).single()
      if (pd) {
        avatarUrl.value = pd.avatar_url || ''
        if (pd.display_name) avatarInitial.value = [...pd.display_name][0] || avatarInitial.value
      }
    }
  }
})

const loadUserProgress = () => {
  const saved = localStorage.getItem('burgundy-course-progress')
  if (saved) {
    userProgress.value = JSON.parse(saved)
  }
}

const updateLevelLocks = () => {
  // 管理員或管理常模式：全部解鎖
  if (authActions.isAdmin() || authActions.getEffectiveTier() === 'admin') {
    levels.value.forEach(level => { level.unlocked = true })
    return
  }
  // L1 永遠開放
  levels.value[0].unlocked = true
  // L2 ：需完成 beginner-m8 的最後一課（lesson3）
  const l1Done = progressStore.getCompletedLessons('beginner-m8').includes('lesson3')
  levels.value[1].unlocked = l1Done
  // L3 ：需完成 intermediate-m8 的最後一課（m8-l3）
  const l2Done = progressStore.getCompletedLessons('intermediate-m8').includes('m8-l3')
  levels.value[2].unlocked = l2Done
  // L4 ：需完成 advanced-m15 的最後一課（m15-l5）
  const l3Done = progressStore.getCompletedLessons('advanced-m15').includes('m15-l5')
  levels.value[3].unlocked = l3Done
}

const isInProgress = (levelId) => {
  const progress = userProgress.value[levelId]?.progress || 0
  return progress > 0 && progress < 100
}

const getProgress = (levelId) => {
  return userProgress.value[levelId]?.progress || 0
}

const completedLevels = computed(() => {
  return Object.values(userProgress.value).filter(p => p.completed).length
})

const totalProgress = computed(() => {
  const total = Object.values(userProgress.value).reduce((sum, p) => sum + p.progress, 0)
  return Math.round(total / 4)
})

const studyTime = computed(() => {
  return Math.round(totalProgress.value * 0.5)
})

const earnedCertificates = computed(() => {
  return completedLevels.value
})

// 學習統計面板數據（波爾多同款）
const showProgress = ref(false)

const burgMiniStats = computed(() => {
  let completedCount = 0
  let totalMinutes = 0
  let totalScore = 0
  let scoreCount = 0
  for (let levelId = 1; levelId <= 4; levelId++) {
    const levelProg = progressStore.getLevelProgress(levelId)
    for (const [moduleId, md] of Object.entries(levelProg)) {
      if (md.completed) completedCount++
      totalMinutes += progressStore.getLearningTime(moduleId)
      if (md.quizScore > 0) { totalScore += md.quizScore; scoreCount++ }
    }
  }
  const hours = Math.floor(totalMinutes / 60)
  const mins = totalMinutes % 60
  const timeStr = totalMinutes === 0
    ? '0分鐘'
    : hours > 0
      ? (mins > 0 ? `${hours}小時${mins}分鐘` : `${hours}小時`)
      : `${totalMinutes}分鐘`
  return {
    completedLessons: completedCount,
    studyTime: timeStr,
    quizAccuracy: scoreCount > 0 ? Math.round(totalScore / scoreCount) : 0,
    studyStreak: 0
  }
})

const startLevel = (level) => {
  emit('startLevel', level)
}

const nextAvailableLevel = computed(() => {
  return levels.value.find(level => level.unlocked)
})

const heroButtonText = computed(() => {
  if (!nextAvailableLevel.value) {
    return '查看課程'
  }
  const target = nextAvailableLevel.value
  return isInProgress(target.id) ? `繼續 Level ${target.id}` : `開始 Level ${target.id}`
})

const startJourney = () => {
  if (nextAvailableLevel.value) {
    emit('startLevel', nextAvailableLevel.value)
  }
}

// 成就系統功能
const showAchievementDashboard = ref(false)
const showAchievements = () => {
  globalBurgAchievementManager.init()
  showAchievementDashboard.value = true
}

// 學習進度詳情
const showDetailedProgress = async () => {
  // 讀取所有階段的詳細進度
  let progressMessage = '📊 學習進度報告\n' + '='.repeat(35) + '\n\n'
  
  // 總體統計
  progressMessage += `🌟 總體進度：${totalProgress.value}%\n`
  progressMessage += `✅ 完成層級：${completedLevels.value} / 4\n`
  progressMessage += `⏱️ 累計時長：${studyTime.value} 小時\n`
  progressMessage += `🎓 獲得證書：${earnedCertificates.value}\n\n`
  
  // 各階段詳細進度
  for (const level of levels.value) {
    const levelId = level.id
    const progress = getProgress(levelId)
    const levelProgress = progressStore.getLevelProgress(levelId)
    
    let completedModules = 0
    let avgScore = 0
    
    if (Object.keys(levelProgress).length > 0) {
      completedModules = Object.keys(levelProgress).filter(key => levelProgress[key].completed).length
      const scores = Object.values(levelProgress).map(p => p.quizScore || 0).filter(s => s > 0)
      if (scores.length > 0) {
        avgScore = Math.round(scores.reduce((sum, s) => sum + s, 0) / scores.length)
      }
    }
    
    const statusIcon = progress >= 100 ? '✅' : progress > 0 ? '🟡' : '⚪'
    progressMessage += `${statusIcon} Level ${levelId}: ${level.name}\n`
    progressMessage += `   進度: ${Math.round(progress)}% | 模組: ${completedModules}/${level.modules} | 分數: ${avgScore}\n\n`
  }
  
  // 證書資訊
  const certificates = progressStore.getCertificates()
  if (certificates.length > 0) {
    progressMessage += '\n🎓 證書記錄\n' + '-'.repeat(35) + '\n'
    certificates.forEach((cert, index) => {
      progressMessage += `${index + 1}. Level ${cert.level} - ${cert.completedModules}/${cert.totalModules} 模組 (${cert.averageScore}分)\n`
    })
  }
  
  alert(progressMessage)
}
</script>

<style scoped>
/* ── 整體背景 ──────────────────────────────────────────────── */
.level-selector {
  min-height: 100vh;
  background: linear-gradient(135deg,
    #667eea 0%,
    #764ba2 25%,
    #f093fb 50%,
    #f5576c 75%,
    #4facfe 100%
  );
  position: relative;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
}

/* ── 泡泡動畫 ──────────────────────────────────────────────── */
.background-animation {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  overflow: hidden;
}
.wine-bubbles { position: relative; width: 100%; height: 100%; }
.bubble {
  position: absolute;
  bottom: -2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float-up linear infinite;
  backdrop-filter: blur(2px);
}
@keyframes float-up {
  to { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
}

/* ── 主容器 ────────────────────────────────────────────────── */
.main-container {
  position: relative;
  z-index: 1;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
}

/* ── 品牌頭部 ──────────────────────────────────────────────── */
.brand-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 2rem;
  padding: 1.75rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}
.brand-logo   { display: flex; align-items: center; gap: 1.25rem; }
.wine-glass-icon {
  font-size: 3rem;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
}
.brand-title {
  font-size: 2.2rem;
  font-weight: bold;
  margin: 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.brand-subtitle { font-size: 1rem; color: #666; margin: 0.3rem 0 0; }

/* ── 用戶面板 ──────────────────────────────────────────────── */
.user-panel   { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; }
.user-avatar  {
  width: 44px; height: 44px; border-radius: 50%;
  background: transparent;
  border: 2.5px solid rgba(114,47,55,0.4);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden; flex-shrink: 0;
}
.ls-avatar-img { width: 100%; height: 100%; object-fit: cover; display: block; background: transparent; }
.ls-avatar-initial { font-size: 1.2rem; font-weight: 700; color: #722f37; line-height: 1; }
.user-info    { display: flex; flex-direction: column; align-items: flex-end; gap: 0.3rem; }
.user-name {
  font-size: 0.9rem; font-weight: 600; color: #2c3e50;
  max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.tier-badge {
  display: flex; align-items: center; gap: 0.25rem;
  padding: 0.25rem 0.6rem; border-radius: 20px;
  font-size: 0.72rem; font-weight: 700; white-space: nowrap;
  border: 1.5px solid currentColor; opacity: 0.9;
}
.tier-badge.tier-free    { color: #6b7280; background: rgba(107,114,128,0.1); }
.tier-badge.tier-basic   { color: #7c3aed; background: rgba(124,58,237,0.1); }
.tier-badge.tier-premium { color: #b45309; background: rgba(180,83,9,0.12); }
.tier-icon { font-size: 0.85rem; }
.user-btns { display: flex; gap: 0.4rem; flex-wrap: wrap; justify-content: flex-end; }
.user-action-btn {
  padding: 0.4rem 1rem; border: none; border-radius: 20px;
  font-size: 0.8rem; font-weight: 600; cursor: pointer;
  transition: all 0.25s ease; display: flex; align-items: center; gap: 0.3rem;
}
.user-action-btn.home {
  background: rgba(102,126,234,0.08); color: #4a3a8a;
  border: 1.5px solid rgba(102,126,234,0.35); font-weight: 700;
}
.user-action-btn.home:hover { background: rgba(102,126,234,0.15); }
.user-action-btn.logout {
  background: rgba(239,68,68,0.1); color: #dc2626;
  border: 1px solid rgba(239,68,68,0.3);
}
.user-action-btn.logout:hover { background: rgba(239,68,68,0.2); }
.user-action-btn.login {
  background: linear-gradient(135deg, #667eea, #764ba2); color: white;
}
.user-action-btn.login:hover { opacity: 0.9; transform: translateY(-1px); }

/* ── 快速功能入口 ──────────────────────────────────────────── */
.quick-nav {
  margin-bottom: 1.5rem;
}
.quick-nav-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}
.nav-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 1.2rem 1rem;
  border: none;
  border-radius: 18px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.25s ease;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.nav-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.12);
  opacity: 0;
  transition: opacity 0.2s;
}
.nav-card:hover::after { opacity: 1; }
.nav-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(0,0,0,0.2); }
.nav-icon  { font-size: 2rem; line-height: 1; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2)); }
.nav-title { font-size: 1rem; font-weight: 800; color: white; letter-spacing: 0.01em; }
.nav-desc  { font-size: 0.72rem; color: rgba(255,255,255,0.78); line-height: 1.4; }

.nav-card.explore {
  background: linear-gradient(135deg, #00BCD4, #0097A7);
}
.nav-card.achievements {
  background: linear-gradient(135deg, #FFC107, #F57F17);
}
.nav-card.progress {
  background: linear-gradient(135deg, #9C27B0, #6A1B9A);
}
.nav-card.game-hub {
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
}
.nav-card.note-hub {
  background: linear-gradient(135deg, #e07b54, #c0392b);
}

/* ── 進度 Modal ───────────────────────────────────────────── */
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(4px);
  z-index: 9000;
  display: flex; align-items: center; justify-content: center;
  padding: 1rem;
}
.progress-modal {
  background: #fff;
  border-radius: 20px;
  width: 100%; max-width: 560px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}
.pm-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #f0f0f0;
}
.pm-title { font-size: 1.15rem; font-weight: 700; color: #1f2937; margin: 0; }
.pm-close {
  width: 32px; height: 32px; border-radius: 50%; border: none;
  background: #f3f4f6; color: #6b7280; font-size: 1.2rem;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: background 0.2s;
}
.pm-close:hover { background: #e5e7eb; }
.pm-body { padding: 1.5rem; }
.pm-overview {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 12px; margin-bottom: 1.5rem;
}
.pm-stat-card {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}
.pm-stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}
.pm-stat-icon { font-size: 2rem; flex-shrink: 0; line-height: 1; }
.pm-stat-content { flex: 1; }
.pm-stat-val { display: block; font-size: 1.75rem; font-weight: 700; color: #1f2937; line-height: 1.2; }
.pm-stat-lbl { display: block; font-size: 0.8rem; color: #6b7280; margin-top: 5px; }
.pm-levels { display: flex; flex-direction: column; gap: 1rem; }
.pm-level-row { display: flex; align-items: center; gap: 12px; }
.pm-level-info { display: flex; align-items: center; gap: 8px; min-width: 130px; }
.pm-level-badge {
  padding: 3px 9px; border-radius: 8px;
  font-size: 0.8rem; font-weight: 700; color: white;
}
.pm-l1 { background: linear-gradient(135deg, #4CAF50, #66BB6A); }
.pm-l2 { background: linear-gradient(135deg, #2196F3, #42A5F5); }
.pm-l3 { background: linear-gradient(135deg, #FF9800, #FFA726); }
.pm-l4 { background: linear-gradient(135deg, #E91E63, #EC407A); }
.pm-level-name { font-size: 0.85rem; font-weight: 600; color: #374151; }
.pm-level-bar-wrap { flex: 1; display: flex; align-items: center; gap: 10px; }
.pm-level-bar-track {
  flex: 1; height: 8px; background: #e5e7eb; border-radius: 999px; overflow: hidden;
}
.pm-level-bar-fill {
  height: 100%; border-radius: 999px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: width 0.4s ease;
}
.pm-level-bar-fill.pm-l2 { background: linear-gradient(90deg, #2196F3, #42A5F5); }
.pm-level-bar-fill.pm-l3 { background: linear-gradient(90deg, #FF9800, #FFA726); }
.pm-level-bar-fill.pm-l4 { background: linear-gradient(90deg, #E91E63, #EC407A); }
.pm-level-pct { font-size: 0.85rem; font-weight: 600; color: #6b7280; min-width: 36px; text-align: right; }

/* ── 學習統計面板（波爾多同款） ─────────────────────────────── */
.burg-stats-mini {
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
  margin-bottom: 1.5rem;
}
.burg-stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
}
.burg-stat-item {
  display: flex;
  align-items: center;
  gap: 12px;
}
.burg-stat-icon { font-size: 32px; opacity: 0.9; }
.burg-stat-value { font-size: 24px; font-weight: bold; line-height: 1; }
.burg-stat-label { font-size: 12px; opacity: 0.8; margin-top: 4px; }
.burg-view-details-btn {
  width: 100%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  font-family: inherit;
}
.burg-view-details-btn:hover { background: rgba(255, 255, 255, 0.3); }
@media (max-width: 768px) {
  .burg-stats-row { grid-template-columns: repeat(2, 1fr); }
  .burg-stat-item { flex-direction: column; text-align: center; gap: 8px; }
}

/* ── 課程階段選擇 ───────────────────────────────────────────── */
.levels-section {
  background: rgba(255,255,255,0.95);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
  margin-bottom: 1.5rem;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 28px;
}
.section-title-group h2 {
  font-size: 1.75rem; color: #1f2937; margin: 0 0 8px; font-weight: 700;
}
.section-title-group p { font-size: 0.9rem; color: #6b7280; margin: 0; line-height: 1.6; }
.section-btn {
  padding: 12px 24px; border-radius: 12px; border: none;
  background: #1f2937; color: white; font-size: 14px; font-weight: 700;
  cursor: pointer; transition: all 0.3s; white-space: nowrap; flex-shrink: 0;
}
.section-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(17,24,39,0.2); }

.levels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

/* ── 等級卡片（波爾多風格） ────────────────────────────────── */
.level-card {
  background: rgba(255,255,255,0.98);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f0f0;
}
.level-card:hover:not(.disabled) {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.18);
}
.level-card.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.level-card.disabled:hover { transform: none; box-shadow: 0 8px 24px rgba(0,0,0,0.1); }

/* 卡片頂部彩色裝飾線 */
.card-accent-bar {
  height: 5px;
  width: 100%;
  flex-shrink: 0;
}
.level-1 .card-accent-bar { background: linear-gradient(90deg, #4CAF50, #66BB6A); }
.level-2 .card-accent-bar { background: linear-gradient(90deg, #2196F3, #42A5F5); }
.level-3 .card-accent-bar { background: linear-gradient(90deg, #FF9800, #FFA726); }
.level-4 .card-accent-bar { background: linear-gradient(90deg, #E91E63, #EC407A); }

/* 卡片標頭 */
.level-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1.5rem 0;
  margin-bottom: 1.25rem;
}
.level-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px; height: 60px;
  border-radius: 50%;
  position: relative;
  flex-shrink: 0;
}
.level-1 .level-badge { background: linear-gradient(135deg, #4CAF50, #66BB6A); color: white; }
.level-2 .level-badge { background: linear-gradient(135deg, #2196F3, #42A5F5); color: white; }
.level-3 .level-badge { background: linear-gradient(135deg, #FF9800, #FFA726); color: white; }
.level-4 .level-badge { background: linear-gradient(135deg, #E91E63, #EC407A); color: white; }

.level-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}
.level-icon {
  position: absolute;
  top: -4px; right: -4px;
  font-size: 1.1rem;
}
.level-title h3 { font-size: 1.4rem; margin: 0 0 0.25rem; color: #2c3e50; font-weight: 700; }
.level-title p  { margin: 0; color: #9ca3af; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px; }

/* 卡片內容 */
.level-content {
  padding: 0 1.5rem;
  flex: 1;
}
.level-description {
  font-size: 0.875rem;
  color: #555;
  line-height: 1.65;
  margin-bottom: 1.25rem;
}
.level-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  margin-bottom: 1.25rem;
}
.feature-item {
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 0.85rem; color: #555;
}
.feature-icon { font-size: 1rem; }

.level-stats {
  display: flex;
  justify-content: space-around;
  padding: 0.9rem;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 1rem;
}
.stat-item   { text-align: center; }
.stat-number { display: block; font-size: 1.4rem; font-weight: 700; color: #2c3e50; }
.stat-label  { font-size: 0.75rem; color: #9ca3af; }

/* 進度條 */
.progress-bar-wrap { margin-bottom: 1rem; }
.progress-bar-track {
  height: 6px;
  background: #e5e7eb;
  border-radius: 999px;
  overflow: hidden;
}
.progress-bar-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: width 0.5s ease;
}
.level-2 .progress-bar-fill { background: linear-gradient(90deg, #2196F3, #42A5F5); }
.level-3 .progress-bar-fill { background: linear-gradient(90deg, #FF9800, #FFA726); }
.level-4 .progress-bar-fill { background: linear-gradient(90deg, #E91E63, #EC407A); }

/* 操作按鈕 */
.level-action { padding: 0 1.5rem 1.5rem; }
.level-btn {
  width: 100%;
  padding: 0.9rem 1.5rem;
  border: none; border-radius: 12px;
  font-size: 1rem; font-weight: 600; cursor: pointer;
  transition: all 0.3s ease;
  display: flex; align-items: center; justify-content: center; gap: 0.5rem;
}
.level-1 .level-btn { background: linear-gradient(135deg, #4CAF50, #66BB6A); color: white; }
.level-2 .level-btn { background: linear-gradient(135deg, #2196F3, #42A5F5); color: white; }
.level-3 .level-btn { background: linear-gradient(135deg, #FF9800, #FFA726); color: white; }
.level-4 .level-btn { background: linear-gradient(135deg, #E91E63, #EC407A); color: white; }
.level-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
.level-btn:disabled { background: #e5e7eb; color: #9ca3af; cursor: not-allowed; }
.btn-arrow { font-size: 1.1rem; transition: transform 0.3s; }
.level-btn:hover .btn-arrow { transform: translateX(4px); }

/* 鎖定遮罩 */
.lock-overlay {
  position: absolute; inset: 0;
  background: rgba(255,255,255,0.92);
  border-radius: 20px;
  display: flex; align-items: center; justify-content: center;
  z-index: 10; backdrop-filter: blur(4px);
}
.lock-icon { font-size: 50px; opacity: 0.5; }

/* ── 成就 Modal ────────────────────────────────────────── */
.ach-modal-overlay {
  position: fixed; inset: 0; z-index: 1000;
  background: rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
}
.ach-modal-card {
  background: white; border-radius: 20px;
  width: 90%; max-width: 900px; max-height: 88vh;
  display: flex; flex-direction: column;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.25);
}
.ach-modal-header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 20px 28px;
  border-bottom: 1px solid #ede9fe;
  flex-shrink: 0;
}
.ach-modal-header h3 { margin: 0; font-size: 1.2rem; color: #1f2937; font-weight: 700; }
.ach-modal-close {
  background: none; border: none; font-size: 1.5rem; cursor: pointer;
  color: #9ca3af; width: 32px; height: 32px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.15s;
}
.ach-modal-close:hover { background: #f3f4f6; color: #374151; }
.ach-modal-body { flex: 1; overflow-y: auto; }

.ach-overlay-enter-from, .ach-overlay-leave-to { opacity: 0; }
.ach-overlay-enter-active, .ach-overlay-leave-active { transition: opacity 0.22s ease; }
.ach-overlay-enter-from .ach-modal-card { transform: scale(0.96) translateY(12px); }
.ach-overlay-enter-active .ach-modal-card { transition: transform 0.22s ease; }

/* ── 未登入提示 ────────────────────────────────────────────── */
.sync-hint-bar {
  text-align: center;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.8);
  padding: 0.5rem 1rem;
  background: rgba(255,255,255,0.12);
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.25);
  margin-bottom: 1.5rem;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  backdrop-filter: blur(4px);
}

/* ── RWD ───────────────────────────────────────────────────── */
@media (max-width: 1200px) {
  .quick-nav-grid { grid-template-columns: repeat(5, 1fr); }
}
@media (max-width: 1024px) {
  .quick-nav-grid { grid-template-columns: repeat(3, 1fr); }
  .stats-row-inner { flex-wrap: wrap; gap: 12px; }
  .stat-sep { display: none; }
  .stats-actions { width: 100%; text-align: center; margin-left: 0; }
  .pm-overview { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .main-container { padding: 1rem; }
  .brand-header { flex-direction: column; gap: 1rem; align-items: flex-start; }
  .quick-nav-grid { grid-template-columns: repeat(2, 1fr); }
  .levels-grid { grid-template-columns: 1fr; }
  .levels-section { padding: 1.5rem; }
  .level-features { grid-template-columns: 1fr; }
  .hero-start-btn { width: 100%; justify-content: center; }
}
@media (max-width: 640px) {
  /* 成就 modal 改為底部抽屜 */
  .ach-modal-overlay { padding: 0; align-items: flex-end; }
  .ach-modal-card { width: 100%; border-radius: 20px 20px 0 0; max-height: 92vh; }
  .ach-modal-header { padding: 0.75rem 1rem; }
}
@media (max-width: 480px) {
  .quick-nav-grid { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
  .brand-title { font-size: 1.6rem; }
}
</style>
