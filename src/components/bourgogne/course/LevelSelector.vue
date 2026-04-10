<template>
  <div class="level-selector">
    <!-- 背景動畫 ——與波爱多相同 -->
    <div class="background-animation">
      <div class="wine-bubbles">
        <div v-for="i in 20" :key="i" class="bubble" :style="getBubbleStyle(i)"></div>
      </div>
    </div>

    <div class="main-container">
      <!-- 品牌額頭（包含 logo + 用戶面版） -->
      <header class="brand-header">
        <div class="brand-logo">
          <div class="wine-glass-icon">🍇</div>
          <div class="brand-text">
            <h1 class="brand-title">Burgundy Wine Academy</h1>
            <p class="brand-subtitle">布根地葡萄酒學院</p>
          </div>
        </div>
        <!-- 用戶面版 -->
        <div class="user-panel">
          <template v-if="authUser">
            <div class="user-avatar">👤</div>
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

      <!-- hero 區塊（進度統計卡） -->
      <div class="hero-section">
        <div class="hero-grid">
          <div class="hero-text">
            <p class="hero-tagline">追隨布根地的香氣足跡，從入門到大師的完整學習旅程。</p>
            <div class="hero-actions">
              <button class="hero-btn primary" @click="startJourney">
                <span class="btn-icon">▶</span>
                {{ heroButtonText }}
              </button>
              <button class="hero-btn secondary" @click="emit('openMap')">
                <span class="btn-icon">🗺️</span>
                探索地圖
              </button>
            </div>
          </div>
          <div class="hero-stats">
            <div class="stats-card">
              <div class="stat-item">
                <span class="stat-label">總體進度</span>
                <span class="stat-value">{{ totalProgress }}%</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <span class="stat-label">完成模組</span>
                <span class="stat-value">{{ completedLevels }}</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <span class="stat-label">累積時數</span>
                <span class="stat-value">{{ studyTime }} 小時</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <span class="stat-label">獲得證書</span>
                <span class="stat-value">{{ earnedCertificates }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 等級選擇區 -->
      <div class="levels-section">
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
              locked: !level.unlocked,
              'level-1': level.id === 1,
              'level-2': level.id === 2,
              'level-3': level.id === 3,
              'level-4': level.id === 4
            }"
            @click="level.unlocked && startLevel(level)"
          >
            <div class="level-number">{{ level.id }}</div>
            <div class="card-title">
              <h2>{{ level.name }}</h2>
              <p class="level-label">Level {{ level.id }}</p>
            </div>
            <p class="card-description">{{ level.description }}</p>
            <div class="features-list">
              <div v-for="(feature, index) in level.features" :key="index" class="feature-item">
                <span class="feature-icon">{{ feature.icon }}</span>
                <span class="feature-text">{{ feature.text }}</span>
              </div>
            </div>
            <div class="stats-row">
              <div class="stat-box">
                <div class="stat-value">{{ level.modules }}</div>
                <div class="stat-label">個模組</div>
              </div>
              <div class="stat-box">
                <div class="stat-value">{{ level.hours }}</div>
                <div class="stat-label">小時</div>
              </div>
              <div class="stat-box">
                <div class="stat-value">{{ Math.round(getProgress(level.id)) }}%</div>
                <div class="stat-label">完成度</div>
              </div>
            </div>
            <button v-if="level.unlocked" class="action-btn" @click.stop="startLevel(level)">
              {{ isInProgress(level.id) ? '繼續學習' : '開始學習' }} →
            </button>
            <button v-else class="action-btn locked-btn" disabled>開始學習 →</button>
            <div v-if="!level.unlocked" class="lock-overlay">
              <div class="lock-icon">🔒</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部功能列 -->
      <div class="bottom-actions">
        <button class="action-button explore-map" @click="emit('openMap')">
          <span class="btn-icon">🗺️</span>探索地圖
        </button>
        <button class="action-button achievements" @click="showAchievements">
          <span class="btn-icon">🏆</span>成就系統
        </button>
        <button class="action-button learning-progress" @click="showDetailedProgress">
          <span class="btn-icon">📊</span>學習進度
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProgress } from '../composables/useProgress.js'
import { authState, authActions } from '../../../stores/authStore.js'
import { useRouter } from 'vue-router'

const progressStore = useProgress()
const router = useRouter()
const levels = ref([])
const userProgress = ref({
  1: { completed: false, progress: 0, score: 0 },
  2: { completed: false, progress: 0, score: 0 },
  3: { completed: false, progress: 0, score: 0 },
  4: { completed: false, progress: 0, score: 0 }
})

const emit = defineEmits(['startLevel', 'openMap'])

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
})

const loadUserProgress = () => {
  const saved = localStorage.getItem('burgundy-course-progress')
  if (saved) {
    userProgress.value = JSON.parse(saved)
  }
}

const updateLevelLocks = () => {
  const TEST_MODE = true
  if (TEST_MODE) {
    levels.value.forEach(level => {
      level.unlocked = true
    })
  } else {
    levels.value[0].unlocked = true
    if (userProgress.value[1].progress >= 100) {
      levels.value[1].unlocked = true
    }
    if (userProgress.value[2].progress >= 85) {
      levels.value[2].unlocked = true
    }
    if (userProgress.value[3].progress >= 85) {
      levels.value[3].unlocked = true
    }
  }
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

// 成就系統功能（即將推出）
const showAchievements = () => {
  alert('🏆 成就系統即將推出！\n\n敬請期待更多精彩功能：\n• 解鎖成就徽章\n• 關鍵節點獎勵\n• 學習里程碟記錄\n• 排行榜與挑戰賽事')
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
/* ── 整體背景（與波爾多完全一致） ──────────────────────────── */
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
  overflow-x: hidden;
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
  margin: 0 0 2rem 0;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}
.brand-logo { display: flex; align-items: center; gap: 1.2rem; }
.wine-glass-icon { font-size: 2.8rem; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2)); }
.brand-title {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.brand-subtitle { font-size: 1rem; color: #666; margin: 0.3rem 0 0 0; }

/* ── 用戶面板 ──────────────────────────────────────────────── */
.user-panel { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; }
.user-avatar { font-size: 1.8rem; line-height: 1; }
.user-info { display: flex; flex-direction: column; align-items: flex-end; gap: 0.3rem; }
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
  font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.25s ease;
  display: flex; align-items: center; gap: 0.3rem;
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

/* ── Hero 統計區 ───────────────────────────────────────────── */
.hero-section {
  margin: 0 0 2rem;
  padding: 2rem;
  background: rgba(255,255,255,0.95);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
}
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}
.hero-text {
  display: flex; flex-direction: column; gap: 20px;
  align-items: flex-start; text-align: left;
}
.hero-tagline { font-size: 1rem; color: #4b5563; line-height: 1.7; margin: 0; }
.hero-actions { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
.hero-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 24px; border-radius: 12px; font-size: 0.95rem; font-weight: 600;
  border: none; cursor: pointer; transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
}
.hero-btn.primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white; box-shadow: 0 16px 40px rgba(102,126,234,0.35);
}
.hero-btn.primary:hover { transform: translateY(-3px); box-shadow: 0 22px 50px rgba(102,126,234,0.45); }
.hero-btn.secondary {
  background: white; color: #4b5563;
  border: 1px solid rgba(102,126,234,0.35);
}
.hero-btn.secondary:hover { border-color: rgba(102,126,234,0.6); }
.btn-icon { font-size: 1.1rem; }

.hero-stats { display: flex; justify-content: flex-end; }
.stats-card {
  background: linear-gradient(135deg, #667eea, #764ba2);
  padding: 28px; border-radius: 20px; color: white;
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: 20px; align-items: center;
  box-shadow: 0 20px 50px rgba(102,126,234,0.45);
  width: 100%;
}
.stat-item { display: flex; flex-direction: column; gap: 4px; }
.stat-item .stat-label { font-size: 0.85rem; opacity: 0.85; font-weight: 500; }
.stat-item .stat-value { font-size: 1.8rem; font-weight: 700; line-height: 1.2; }
.stat-divider { width: 1px; height: 40px; background: rgba(255,255,255,0.3); }

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
  display: flex; justify-content: space-between;
  align-items: flex-end; gap: 24px; margin-bottom: 28px;
}
.section-title-group h2 {
  font-size: 1.75rem; color: #1f2937; margin: 0 0 8px; font-weight: 700;
}
.section-title-group p { font-size: 0.9rem; color: #6b7280; margin: 0; line-height: 1.6; }
.section-btn {
  padding: 12px 24px; border-radius: 12px; border: none;
  background: #1f2937; color: white; font-size: 14px; font-weight: 700;
  cursor: pointer; transition: all 0.3s; white-space: nowrap;
}
.section-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(17,24,39,0.2); }
.section-actions { flex-shrink: 0; }

.levels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 20px;
}

/* ── 等級卡片 ───────────────────────────────────────────────── */
.level-card {
  background: white; border-radius: 20px; padding: 24px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  position: relative; overflow: hidden;
  border: 1px solid #e5e7eb; cursor: pointer;
}
.level-card:hover:not(.locked) {
  transform: translateY(-8px); box-shadow: 0 16px 48px rgba(0,0,0,0.18);
}
.level-card.locked { opacity: 0.65; cursor: default; }

.level-number {
  width: 48px; height: 48px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem; font-weight: 700; color: white; margin-bottom: 16px;
}
.level-1 .level-number { background: linear-gradient(135deg, #667eea, #764ba2); }
.level-2 .level-number { background: linear-gradient(135deg, #f093fb, #f5576c); }
.level-3 .level-number { background: linear-gradient(135deg, #4facfe, #00f2fe); }
.level-4 .level-number { background: linear-gradient(135deg, #fa709a, #fee140); }

.card-title h2 {
  font-size: 1.25rem; font-weight: 600; color: #1f2937; margin: 0 0 4px; line-height: 1.3;
}
.level-label {
  font-size: 0.75rem; color: #9ca3af; margin: 0 0 12px;
  font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;
}
.card-description {
  font-size: 0.85rem; line-height: 1.6; color: #4b5563; margin-bottom: 18px; min-height: 55px;
}
.features-list {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 20px;
}
.feature-item { display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: #374151; }
.feature-icon { font-size: 0.95rem; flex-shrink: 0; }
.feature-text { font-weight: 500; line-height: 1.4; }

.stats-row {
  display: flex; justify-content: space-around;
  padding: 14px 0; margin-bottom: 16px;
  border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;
}
.stat-box { text-align: center; }
.stat-box .stat-value { font-size: 1.4rem; font-weight: 700; color: #1f2937; line-height: 1.2; }
.stat-box .stat-label {
  font-size: 0.65rem; color: #94a3b8; text-transform: uppercase;
  letter-spacing: 0.8px; margin-top: 3px; display: block;
}

.action-btn {
  width: 100%; padding: 12px 0; border: none; border-radius: 10px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white; font-size: 0.9rem; font-weight: 600; cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
  box-shadow: 0 4px 14px rgba(102,126,234,0.3);
}
.action-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(102,126,234,0.35); }
.locked-btn { background: #e5e7eb; color: #9ca3af; box-shadow: none; cursor: default; }
.locked-btn:hover { transform: none; box-shadow: none; }

.lock-overlay {
  position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(255,255,255,0.92); border-radius: 20px;
  display: flex; align-items: center; justify-content: center;
  z-index: 10; backdrop-filter: blur(4px);
}
.lock-icon { font-size: 50px; opacity: 0.6; }

/* ── 底部操作列 ────────────────────────────────────────────── */
.bottom-actions {
  background: rgba(255,255,255,0.95); border-radius: 20px;
  padding: 18px 28px; display: flex; justify-content: center;
  align-items: center; gap: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  flex-wrap: wrap; backdrop-filter: blur(10px);
}
.action-button {
  display: flex; align-items: center; gap: 10px;
  padding: 14px 28px; border: none; border-radius: 12px;
  font-size: 15px; font-weight: 600; cursor: pointer;
  transition: all 0.3s; box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.explore-map    { background: linear-gradient(135deg, #06b6d4, #0891b2); color: white; }
.achievements   { background: linear-gradient(135deg, #fbbf24, #f59e0b); color: white; }
.learning-progress { background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white; }
.action-button:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(0,0,0,0.2); }

/* ── RWD ───────────────────────────────────────────────────── */
@media (max-width: 1024px) {
  .hero-grid { grid-template-columns: 1fr; gap: 24px; }
  .hero-text { align-items: center; text-align: center; }
  .hero-stats { justify-content: center; }
}
@media (max-width: 768px) {
  .main-container { padding: 1rem; }
  .hero-actions { flex-direction: column; width: 100%; }
  .levels-grid { grid-template-columns: 1fr; }
  .levels-section { padding: 1.5rem; }
  .brand-header { flex-direction: column; gap: 1rem; align-items: flex-start; }
  .bottom-actions { flex-direction: column; padding: 16px; }
}
</style>
