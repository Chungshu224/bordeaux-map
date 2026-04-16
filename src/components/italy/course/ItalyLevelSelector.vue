<template>
  <div class="level-selection">
    <!-- 背景動畫 -->
    <div class="background-animation">
      <div class="wine-bubbles">
        <div v-for="i in 20" :key="i" class="bubble" :style="getBubbleStyle(i)"></div>
      </div>
    </div>

    <div class="main-container">
      <!-- 頂部品牌區域 -->
      <header class="brand-header">
        <div class="brand-logo">
          <div class="wine-glass-icon">🇮🇹</div>
          <div class="brand-text">
            <h1 class="brand-title">Italy Wine Academy</h1>
            <p class="brand-subtitle">義大利葡萄酒學院</p>
          </div>
        </div>
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
                <button class="user-action-btn settings" @click="router.push('/settings')">⚙️ 設定</button>
                <button class="user-action-btn logout" @click="handleLogout">登出</button>
              </div>
            </div>
          </template>
          <template v-else>
            <button class="user-action-btn login" @click="router.push('/login')">🔑 登入</button>
            <button class="user-action-btn register" @click="router.push('/register')">✏️ 註冊</button>
          </template>
        </div>
      </header>

      <!-- 快速功能入口 -->
      <section class="quick-nav">
        <div class="quick-nav-grid">
          <button class="nav-card explore" @click="$emit('openMap')">
            <span class="nav-icon">🗺️</span>
            <span class="nav-title">探索地圖</span>
            <span class="nav-desc">互動式義大利產區地圖・20 個行政區</span>
          </button>
          <button class="nav-card achievements" @click="showAchievements = true">
            <span class="nav-icon">🏆</span>
            <span class="nav-title">學習成就</span>
            <span class="nav-desc">查看已完成課程與學習記錄</span>
          </button>
          <button class="nav-card progress" @click="showProgress = true">
            <span class="nav-icon">📊</span>
            <span class="nav-title">學習進度</span>
            <span class="nav-desc">正確率・學習時長・各單元詳細記錄</span>
          </button>
          <button class="nav-card notebook" @click="$emit('openNotebook')">
            <span class="nav-icon">📔</span>
            <span class="nav-title">品飲筆記</span>
            <span class="nav-desc">記錄品飲心得・紅白氣泡甜酒・350+ 品種</span>
          </button>
          <button class="nav-card games" @click="$emit('openGames')">
            <span class="nav-icon">🎮</span>
            <span class="nav-title">互動練習</span>
            <span class="nav-desc">產區競答・分級辨識・品種配對・年份排序</span>
          </button>
        </div>
      </section>

      <!-- 等級選擇卡片 -->
      <section class="level-selection-grid">
        <div class="grid-container">

          <!-- Level 1: 義大利入門 -->
          <div
            class="level-card level-1"
            :class="{ disabled: !isLevelUnlocked('level1') }"
            @click="selectLevel('level1')"
          >
            <div class="level-header">
              <div class="level-badge">
                <span class="level-number">1</span>
                <div class="level-icon">🌱</div>
              </div>
              <div class="level-title">
                <h3>義大利入門</h3>
                <p>Level 1</p>
              </div>
            </div>
            <div class="level-content">
              <div class="level-description">
                建立義大利葡萄酒的基礎認知，了解 DOCG/DOC 分級、五大產區與核心品種
              </div>
              <div class="level-features">
                <div class="feature-item"><span class="feature-icon">📜</span><span>DOCG/DOC/IGT 分級</span></div>
                <div class="feature-item"><span class="feature-icon">🗺️</span><span>五大核心產區</span></div>
                <div class="feature-item"><span class="feature-icon">🍇</span><span>基礎品種認識</span></div>
                <div class="feature-item"><span class="feature-icon">🍽️</span><span>義式餐酒搭配</span></div>
              </div>
              <div class="level-stats">
                <div class="stat-item">
                  <span class="stat-number">12</span>
                  <span class="stat-label">個課程</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">3-4</span>
                  <span class="stat-label">小時</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ getLevelProgress('level1') }}%</span>
                  <span class="stat-label">完成度</span>
                </div>
              </div>
            </div>
            <div class="level-action">
              <button class="level-btn" :disabled="!isLevelUnlocked('level1')">
                <span v-if="getLevelProgress('level1') === 0">開始學習</span>
                <span v-else-if="getLevelProgress('level1') === 100">重新學習</span>
                <span v-else>繼續學習</span>
                <span class="btn-arrow">→</span>
              </button>
            </div>
          </div>

          <!-- Level 2: 進階探索 -->
          <div
            class="level-card level-2"
            :class="{ disabled: !isLevelUnlocked('level2') }"
            @click="selectLevel('level2')"
          >
            <div class="level-header">
              <div class="level-badge">
                <span class="level-number">2</span>
                <div class="level-icon">🍷</div>
              </div>
              <div class="level-title">
                <h3>進階探索</h3>
                <p>Level 2</p>
              </div>
            </div>
            <div class="level-content">
              <div class="level-description">
                深入 20 個行政區，掌握南北差異、進階品種與收藏投資策略
              </div>
              <div class="level-features">
                <div class="feature-item"><span class="feature-icon">🏔️</span><span>北義產區全覽</span></div>
                <div class="feature-item"><span class="feature-icon">☀️</span><span>南義與島嶼</span></div>
                <div class="feature-item"><span class="feature-icon">🔬</span><span>Nebbiolo 深度解析</span></div>
                <div class="feature-item"><span class="feature-icon">📈</span><span>投資收藏策略</span></div>
              </div>
              <div class="level-stats">
                <div class="stat-item">
                  <span class="stat-number">23</span>
                  <span class="stat-label">個課程</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">6-8</span>
                  <span class="stat-label">小時</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ getLevelProgress('level2') }}%</span>
                  <span class="stat-label">完成度</span>
                </div>
              </div>
            </div>
            <div class="level-action">
              <button class="level-btn" :disabled="!isLevelUnlocked('level2')">
                <span v-if="!isLevelUnlocked('level2')">需完成 Level 1</span>
                <span v-else-if="getLevelProgress('level2') === 0">開始學習</span>
                <span v-else-if="getLevelProgress('level2') === 100">重新學習</span>
                <span v-else>繼續學習</span>
                <span v-if="isLevelUnlocked('level2')" class="btn-arrow">→</span>
              </button>
            </div>
          </div>

          <!-- Level 3: 專家認證 -->
          <div
            class="level-card level-3"
            :class="{ disabled: !isLevelUnlocked('level3') }"
            @click="selectLevel('level3')"
          >
            <div class="level-header">
              <div class="level-badge">
                <span class="level-number">3</span>
                <div class="level-icon">🏆</div>
              </div>
              <div class="level-title">
                <h3>專家認證</h3>
                <p>Level 3</p>
              </div>
            </div>
            <div class="level-content">
              <div class="level-description">
                盲品技巧、稀有品種、侍酒師實務，成為義大利葡萄酒專業顧問
              </div>
              <div class="level-features">
                <div class="feature-item"><span class="feature-icon">🎯</span><span>系統化盲品方法</span></div>
                <div class="feature-item"><span class="feature-icon">💎</span><span>稀有品種與小產區</span></div>
                <div class="feature-item"><span class="feature-icon">🥂</span><span>侍酒師實務技能</span></div>
                <div class="feature-item"><span class="feature-icon">🌿</span><span>永續農業・自然酒</span></div>
              </div>
              <div class="level-stats">
                <div class="stat-item">
                  <span class="stat-number">26</span>
                  <span class="stat-label">個課程</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">10-12</span>
                  <span class="stat-label">小時</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ getLevelProgress('level3') }}%</span>
                  <span class="stat-label">完成度</span>
                </div>
              </div>
            </div>
            <div class="level-action">
              <button class="level-btn" :disabled="!isLevelUnlocked('level3')">
                <span v-if="!isLevelUnlocked('level3')">需完成 Level 2</span>
                <span v-else-if="getLevelProgress('level3') === 0">開始學習</span>
                <span v-else-if="getLevelProgress('level3') === 100">重新學習</span>
                <span v-else>繼續學習</span>
                <span v-if="isLevelUnlocked('level3')" class="btn-arrow">→</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      <!-- 雲端同步提示（未登入時） -->
      <div v-if="!authUser" class="sync-hint-bar">
        📍 登入後可將學習進度同步至雲端
      </div>

      <!-- 學習進度統計橫列 -->
      <LearningStatsMini course-key="italy" @show-details="showProgress = true" />
    </div>

    <!-- 成就彈窗 -->
    <div v-if="showAchievements" class="modal-overlay" @click="showAchievements = false">
      <div class="achievement-modal" @click.stop>
        <div class="modal-header">
          <h3>🏆 學習成就</h3>
          <button class="close-btn" @click="showAchievements = false">×</button>
        </div>
        <div class="modal-content">
          <AchievementsDashboard course-key="italy" @back="showAchievements = false" />
        </div>
      </div>
    </div>

    <!-- 進度彈窗 -->
    <div v-if="showProgress" class="modal-overlay" @click="showProgress = false">
      <div class="progress-modal" @click.stop>
        <div class="modal-header">
          <h3>📊 義大利課程學習進度</h3>
          <button class="close-btn" @click="showProgress = false">×</button>
        </div>
        <div class="modal-content">
          <LearningProgressDashboard course-key="italy" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { authState, authActions } from '../../../stores/authStore.js'
import { courseLevels, getLevelProgressPct, getUserProgress } from '../data/courseLevels.js'
import AchievementsDashboard from '../../AchievementsDashboard.vue'
import LearningStatsMini from '../../LearningStatsMini.vue'
import LearningProgressDashboard from '../../LearningProgressDashboard.vue'

const router = useRouter()
const emit = defineEmits(['startLevel', 'openMap', 'openVarieties', 'openNotebook', 'openGames'])

const showProgress = ref(false)
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

async function handleLogout () {
  await authActions.signOut()
  router.push('/')
}

const levelDefs = {
  level1: { title: '義大利入門', icon: '🌱', lessons: 12 },
  level2: { title: '進階探索',   icon: '🍷', lessons: 23 },
  level3: { title: '專家認證',   icon: '🏆', lessons: 26 }
}

function getLevelProgress (key) {
  return getLevelProgressPct(key)
}

function isLevelUnlocked (key) {
  // 管理員全部解鎖
  if (authActions.isAdmin()) return true
  if (key === 'level1') return true
  if (key === 'level2') return getUserProgress('level1').completedLessons.includes('L1M4L2')
  if (key === 'level3') return getUserProgress('level2').completedLessons.includes('L2FinalExam')
  return false
}

function selectLevel (key) {
  emit('startLevel', key)
}

const miniStats = computed(() => {
  const keys = ['level1', 'level2', 'level3']
  let completed = 0, total = 0
  keys.forEach(k => {
    total += levelDefs[k].lessons
    completed += Math.round(levelDefs[k].lessons * getLevelProgressPct(k) / 100)
  })
  const overall = total > 0 ? Math.round(completed / total * 100) : 0
  return [
    { icon: '📚', value: completed, label: '已完成課程' },
    { icon: '🎯', value: total, label: '全部課程' },
    { icon: '🌟', value: `${overall}%`, label: '總體進度' },
    { icon: '🔥', value: '0', label: '連續天數' }
  ]
})

function getBubbleStyle (index) {
  const seed = index * 137.5
  return {
    left: `${(seed * 7) % 100}%`,
    animationDelay: `${seed % 5}s`,
    animationDuration: `${3 + (seed % 4)}s`,
    width:  `${0.5 + (seed % 15) / 10}rem`,
    height: `${0.5 + (seed % 15) / 10}rem`
  }
}
</script>

<style scoped>
.level-selection {
  min-height: 100vh;
  background: linear-gradient(135deg,
    #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%
  );
  position: relative;
  overflow-x: hidden;
}

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
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  animation: float-up linear infinite;
  backdrop-filter: blur(2px);
}
@keyframes float-up {
  to { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
}

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

/* Brand header */
.brand-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 3rem auto;
  padding: 2rem;
  background: rgba(255,255,255,0.95);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
  width: 100%;
}
.brand-logo { display: flex; align-items: center; gap: 1.5rem; }
.wine-glass-icon { font-size: 3rem; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2)); }
.brand-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin: 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.brand-subtitle { font-size: 1.2rem; color: #666; margin: 0.5rem 0 0 0; }

/* User panel */
.user-panel { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; }
.tier-badge {
  display: flex; align-items: center; gap: 0.25rem;
  padding: 0.25rem 0.6rem; border-radius: 20px;
  font-size: 0.72rem; font-weight: 700; white-space: nowrap;
  border: 1.5px solid currentColor; opacity: 0.9;
}
.tier-badge.tier-free    { color: #6b7280; background: rgba(107,114,128,0.1); }
.tier-badge.tier-basic   { color: #7c3aed; background: rgba(124,58,237,0.1); }
.tier-badge.tier-premium { color: #b45309; background: rgba(180,83,9,0.12); }
.user-avatar { font-size: 1.8rem; line-height: 1; }
.user-info { display: flex; flex-direction: column; align-items: flex-end; gap: 0.3rem; }
.user-name { font-size: 0.9rem; font-weight: 600; color: #2c3e50; max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.user-action-btn {
  padding: 0.4rem 1rem; border: none; border-radius: 20px;
  font-size: 0.8rem; font-weight: 600; cursor: pointer;
  transition: all 0.25s ease;
  display: flex; align-items: center; gap: 0.3rem;
}
.user-action-btn.home    { background: rgba(114,47,55,0.08); color: #8B0000; border: 1.5px solid rgba(114,47,55,0.35); }
.user-action-btn.home:hover { background: rgba(114,47,55,0.15); }
.user-action-btn.settings{ background: rgba(118,75,162,0.1);  color: #764ba2;  border: 1px solid rgba(118,75,162,0.3); }
.user-action-btn.settings:hover { background: rgba(118,75,162,0.2); }
.user-action-btn.logout  { background: rgba(239,68,68,0.1);   color: #dc2626;  border: 1px solid rgba(239,68,68,0.3); }
.user-action-btn.logout:hover { background: rgba(239,68,68,0.2); }
.user-action-btn.login   { background: linear-gradient(135deg, #667eea, #764ba2); color: white; }
.user-action-btn.register{ background: rgba(102,126,234,0.1); color: #5a67d8; border: 1px solid rgba(102,126,234,0.3); }
.user-btns { display: flex; gap: 0.4rem; flex-wrap: wrap; justify-content: flex-end; }

/* Quick nav */
.quick-nav { margin-bottom: 2rem; }
.quick-nav-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  max-width: 1400px;
  margin: 0 auto;
}
.nav-card {
  display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
  padding: 1.1rem 1rem; border: none; border-radius: 18px;
  cursor: pointer; font-family: inherit;
  transition: all 0.25s ease; text-align: center;
  position: relative; overflow: hidden;
}
.nav-card::after {
  content: ''; position: absolute; inset: 0;
  background: rgba(255,255,255,0.12); opacity: 0; transition: opacity 0.2s;
}
.nav-card:hover::after { opacity: 1; }
.nav-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(0,0,0,0.18); }
.nav-icon  { font-size: 2rem; line-height: 1; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2)); }
.nav-title { font-size: 1rem; font-weight: 800; color: white; }
.nav-desc  { font-size: 0.72rem; color: rgba(255,255,255,0.78); line-height: 1.4; }
.nav-card.explore      { background: linear-gradient(135deg, #00BCD4, #0097A7); }
.nav-card.achievements { background: linear-gradient(135deg, #FFC107, #F57F17); }
.nav-card.progress     { background: linear-gradient(135deg, #9C27B0, #6A1B9A); }
.nav-card.varieties    { background: linear-gradient(135deg, #8b5cf6, #6d28d9); }
.nav-card.notebook     { background: linear-gradient(135deg, #6B4F1A, #3D2B08); }
.nav-card.games        { background: linear-gradient(135deg, #1a3a6b, #0d1f4a); }

/* Level cards */
.level-selection-grid { margin-bottom: 3rem; }
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
}
.level-card {
  background: rgba(255,255,255,0.95);
  border-radius: 20px; padding: 2rem;
  cursor: pointer; transition: all 0.4s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
  position: relative; overflow: hidden;
}
.level-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
  background: linear-gradient(90deg, transparent, currentColor, transparent);
  opacity: 0; transition: opacity 0.3s ease;
}
.level-card:hover::before { opacity: 1; }
.level-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(0,0,0,0.15); }
.level-card.disabled { opacity: 0.6; cursor: not-allowed; }
.level-card.disabled:hover { transform: none; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }

.level-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
.level-badge {
  display: flex; align-items: center; justify-content: center;
  width: 60px; height: 60px; border-radius: 50%;
  position: relative; flex-shrink: 0;
}
.level-1 .level-badge { background: linear-gradient(135deg, #4CAF50, #66BB6A); color: white; }
.level-2 .level-badge { background: linear-gradient(135deg, #FF9800, #FFA726); color: white; }
.level-3 .level-badge { background: linear-gradient(135deg, #E91E63, #EC407A); color: white; }
.level-number { font-size: 1.5rem; font-weight: bold; }
.level-icon { position: absolute; top: -5px; right: -5px; font-size: 1.2rem; }
.level-title h3 { font-size: 1.5rem; margin: 0 0 0.25rem 0; color: #2c3e50; }
.level-title p  { margin: 0; color: #666; font-size: 0.9rem; }

.level-content { margin-bottom: 2rem; }
.level-description { color: #555; line-height: 1.6; margin-bottom: 1.5rem; }
.level-features {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 0.75rem; margin-bottom: 1.5rem;
}
.feature-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: #666; }
.feature-icon { font-size: 1rem; }

.level-stats {
  display: flex; justify-content: space-around;
  padding: 1rem; background: #f8f9fa; border-radius: 10px;
}
.stat-item { text-align: center; }
.stat-number { display: block; font-size: 1.5rem; font-weight: bold; color: #2c3e50; }
.stat-label  { font-size: 0.8rem; color: #666; }

.level-action { text-align: center; }
.level-btn {
  width: 100%; padding: 1rem 2rem; border: none; border-radius: 50px;
  font-size: 1.1rem; font-weight: 600; cursor: pointer;
  transition: all 0.3s ease;
  display: flex; align-items: center; justify-content: center; gap: 0.5rem;
}
.level-1 .level-btn { background: linear-gradient(135deg, #4CAF50, #66BB6A); color: white; }
.level-2 .level-btn { background: linear-gradient(135deg, #FF9800, #FFA726); color: white; }
.level-3 .level-btn { background: linear-gradient(135deg, #E91E63, #EC407A); color: white; }
.level-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.2); }
.level-btn:disabled { background: #ddd; color: #999; cursor: not-allowed; }
.btn-arrow { font-size: 1.2rem; transition: transform 0.3s ease; }
.level-btn:hover .btn-arrow { transform: translateX(4px); }

/* Sync hint */
.sync-hint-bar {
  text-align: center; font-size: 0.78rem; color: #888;
  padding: 0.5rem 1rem;
  background: rgba(0,0,0,0.04); border-radius: 20px; border: 1px dashed #ccc;
  margin-bottom: 1.5rem; width: fit-content;
  margin-left: auto; margin-right: auto;
}

/* Stats mini bar */
.progress-summary-section { margin: 0 auto 2rem auto; width: 100%; max-width: 1400px; }
.stats-mini-bar {
  background: rgba(255,255,255,0.95);
  border-radius: 20px; padding: 1.4rem 2rem;
  display: flex; align-items: center; gap: 2.5rem; flex-wrap: wrap;
  box-shadow: 0 6px 24px rgba(0,0,0,0.08);
}
.mini-stat-item { display: flex; align-items: center; gap: 0.75rem; }
.mini-stat-icon { font-size: 1.6rem; }
.mini-stat-detail { display: flex; flex-direction: column; }
.mini-stat-value { font-size: 1.3rem; font-weight: 800; color: #2c3e50; }
.mini-stat-label { font-size: 0.75rem; color: #888; }
.view-detail-btn {
  margin-left: auto;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white; border: none;
  padding: 0.6rem 1.4rem; border-radius: 20px;
  font-size: 0.9rem; font-weight: 600; cursor: pointer;
  transition: opacity 0.2s; white-space: nowrap;
}
.view-detail-btn:hover { opacity: 0.88; }

/* Modal */
.modal-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000;
}
.progress-modal {
  background: white; border-radius: 20px;
  max-width: 560px; width: 90%; max-height: 80vh; overflow-y: auto;
}
.achievement-modal {
  background: white; border-radius: 20px;
  max-width: 900px; width: 94%; max-height: 90vh; overflow: hidden;
  display: flex; flex-direction: column;
}
.achievement-modal .modal-content { flex: 1; overflow-y: auto; padding: 0; }
.modal-header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 1.5rem 2rem; border-bottom: 1px solid #eee;
}
.modal-header h3 { margin: 0; color: #2c3e50; }
.close-btn {
  background: none; border: none; font-size: 1.5rem; cursor: pointer;
  color: #999; padding: 0; width: 30px; height: 30px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%; transition: all 0.3s ease;
}
.close-btn:hover { background: #f5f5f5; color: #333; }
.modal-content { padding: 2rem; }

.pm-levels { display: flex; flex-direction: column; gap: 20px; }
.pm-level-row { display: flex; align-items: center; gap: 12px; }
.pm-level-icon {
  width: 40px; height: 40px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.2rem; flex-shrink: 0;
}
.pm-level1 { background: linear-gradient(135deg, #4CAF50, #66BB6A); }
.pm-level2 { background: linear-gradient(135deg, #FF9800, #FFA726); }
.pm-level3 { background: linear-gradient(135deg, #E91E63, #EC407A); }
.pm-level-info { display: flex; align-items: center; gap: 10px; min-width: 160px; }
.pm-level-name { color: #2c3e50; font-weight: 600; }
.pm-bar-wrap { flex: 1; display: flex; align-items: center; gap: 10px; }
.pm-bar-track { flex: 1; background: #f0f0f0; border-radius: 4px; height: 10px; }
.pm-bar-fill { height: 100%; border-radius: 4px; transition: width 0.5s ease; }
.fill-level1 { background: linear-gradient(90deg, #4CAF50, #66BB6A); }
.fill-level2 { background: linear-gradient(90deg, #FF9800, #FFA726); }
.fill-level3 { background: linear-gradient(90deg, #E91E63, #EC407A); }
.pm-pct { color: #666; font-size: 0.85rem; min-width: 40px; text-align: right; }

/* Responsive */
@media (max-width: 768px) {
  .main-container { padding: 1rem; }
  .brand-header { padding: 1.25rem 1rem; flex-direction: column; gap: 1rem; text-align: center; }
  .brand-logo { justify-content: center; }
  .brand-title { font-size: clamp(1.55rem, 6.2vw, 2rem); }
  .user-info { align-items: center; }
  .quick-nav-grid { grid-template-columns: repeat(3, 1fr); }
  .grid-container { grid-template-columns: 1fr; }
  .level-features { grid-template-columns: 1fr; }
  .stats-mini-bar { gap: 1.5rem; flex-direction: column; align-items: flex-start; }
  .view-detail-btn { margin-left: 0; }
}
@media (max-width: 640px) {
  .quick-nav-grid { grid-template-columns: repeat(2, 1fr); }
  .brand-title { font-size: clamp(1.3rem, 7vw, 1.65rem); }
  .level-card { padding: 1.25rem; }
  .level-features { grid-template-columns: 1fr; gap: 0.5rem; }
}
</style>
