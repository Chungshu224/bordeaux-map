<template>
  <div class="level-selection">
    <!-- 背景動畫 -->
    <div class="background-animation">
      <div class="wine-bubbles">
        <div v-for="i in 20" :key="i" class="bubble" :style="getBubbleStyle(i)"></div>
      </div>
    </div>

    <!-- 主要內容 -->
    <div class="main-container">
      <!-- 頂部品牌區域 -->
      <header class="brand-header">
        <div class="brand-logo">
          <div class="wine-glass-icon">🍷</div>
          <div class="brand-text">
            <h1 class="brand-title">侍酒師的筆記本</h1>
            <p class="brand-subtitle">The Sommelier's Notebook</p>
          </div>
        </div>
        <!-- 使用者面板 -->
        <div class="user-panel">
          <template v-if="authUser">
            <div class="user-avatar">
              <img v-if="avatarUrl" :src="avatarUrl" class="user-avatar-img" alt="大頭貼" />
              <span v-else class="user-avatar-initial">{{ (displayName || '?')[0] }}</span>
            </div>
            <div class="user-info">
              <span class="user-name">{{ displayName }}</span>
              <div class="tier-badge" :class="`tier-${userTier}`">
                <span class="tier-icon">{{ tierInfo.icon }}</span>
                <span class="tier-label">{{ tierInfo.label }}</span>
              </div>
              <div class="user-btns">
                <button class="user-action-btn home" @click="router.push('/')">🏠 首頁</button>
                <button class="user-action-btn settings" @click="$emit('settings')">⚙️ 設定</button>
                <button class="user-action-btn logout" @click="handleLogout">登出</button>
              </div>
            </div>
          </template>
          <template v-else>
            <button class="user-action-btn login" @click="$emit('login')"><span>🔑</span> 登入</button>
            <button class="user-action-btn register" @click="$emit('register')"><span>✏️</span> 註冊</button>
          </template>
        </div>
      </header>

      <!-- 快速功能入口 -->
      <section class="quick-nav">
        <div class="quick-nav-grid">
          <button class="nav-card game-hub" @click="$emit('gameHubMode')">
            <span class="nav-icon">🎮</span>
            <span class="nav-title">互動練習</span>
            <span class="nav-desc">產區競答・左右岸・年份溫度・葡萄土壤</span>
          </button>
          <button class="nav-card explore" @click="$emit('exploreMode')">
            <span class="nav-icon">🗺️</span>
            <span class="nav-title">探索地圖</span>
            <span class="nav-desc">互動式波爾多產區地圖・地質・氣候</span>
          </button>
          <button class="nav-card achievements" @click="showAchievements = true">
            <span class="nav-icon">🏆</span>
            <span class="nav-title">成就系統</span>
            <span class="nav-desc">查看已解鎖成就與積分等級</span>
          </button>
          <button class="nav-card progress" @click="showProgress = true">
            <span class="nav-icon">📊</span>
            <span class="nav-title">學習進度</span>
            <span class="nav-desc">正確率・學習時長・各單元詳細記錄</span>
          </button>
          <button class="nav-card notebook" @click="$emit('notebookMode')">
            <span class="nav-icon">📔</span>
            <span class="nav-title">品飲筆記</span>
            <span class="nav-desc">記錄品飲體驗・年份・氣候參考</span>
          </button>
        </div>
      </section>

      <!-- 等級選擇卡片 -->
      <section class="level-selection-grid">
        <div class="grid-container">
          <!-- Level 1: 基礎入門 -->
          <div 
            class="level-card level-1"
            :class="{ disabled: !isLevelUnlocked(1) }"
            @click="selectLevel(1)"
          >
            <div class="level-header">
              <div class="level-badge">
                <span class="level-number">1</span>
                <div class="level-icon">🌱</div>
              </div>
              <div class="level-title">
                <h3>基礎入門</h3>
                <p>Level 1</p>
              </div>
            </div>
            
            <div class="level-content">
              <div class="level-description">
                建立波爾多葡萄酒的基礎認知，了解地理環境、主要品種和基本釀造工藝
              </div>
              
              <div class="level-features">
                <div class="feature-item">
                  <span class="feature-icon">📍</span>
                  <span>地理位置與氣候</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">🍇</span>
                  <span>主要葡萄品種</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">⚖️</span>
                  <span>左岸右岸差異</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">👃</span>
                  <span>品酒基礎技巧</span>
                </div>
              </div>
              
              <div class="level-stats">
                <div class="stat-item">
                  <span class="stat-number">8</span>
                  <span class="stat-label">個課程</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">3</span>
                  <span class="stat-label">小時</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ getLevelProgress(1) }}%</span>
                  <span class="stat-label">完成度</span>
                </div>
              </div>
            </div>
            
            <div class="level-action">
              <button class="level-btn" :disabled="!isLevelUnlocked(1)">
                <span v-if="getLevelProgress(1) === 0">開始學習</span>
                <span v-else-if="getLevelProgress(1) === 100">重新學習</span>
                <span v-else>繼續學習</span>
                <span class="btn-arrow">→</span>
              </button>
            </div>
          </div>

          <!-- Level 2: 中級進階 -->
          <div 
            class="level-card level-2"
            :class="{ disabled: !isLevelUnlocked(2) }"
            @click="selectLevel(2)"
          >
            <div class="level-header">
              <div class="level-badge">
                <span class="level-number">2</span>
                <div class="level-icon">🌿</div>
              </div>
              <div class="level-title">
                <h3>中級進階</h3>
                <p>Level 2</p>
              </div>
            </div>
            
            <div class="level-content">
              <div class="level-description">
                深入了解波爾多各產區特色與風格差異，掌握專業品鑑與分析技能
              </div>
              
              <div class="level-features">
                <div class="feature-item">
                  <span class="feature-icon">🏰</span>
                  <span>左岸四大村莊</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">💎</span>
                  <span>右岸精品產區</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">🎯</span>
                  <span>風土條件分析</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">📈</span>
                  <span>投資收藏價值</span>
                </div>
              </div>
              
              <div class="level-stats">
                <div class="stat-item">
                  <span class="stat-number">8</span>
                  <span class="stat-label">個課程</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">4.5</span>
                  <span class="stat-label">小時</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ getLevelProgress(2) }}%</span>
                  <span class="stat-label">完成度</span>
                </div>
              </div>
            </div>
            
            <div class="level-action">
              <button class="level-btn" :disabled="!isLevelUnlocked(2)">
                <span v-if="!isLevelUnlocked(2)">需通過Level 1綜合評量</span>
                <span v-else-if="getLevelProgress(2) === 0">開始學習</span>
                <span v-else-if="getLevelProgress(2) === 100">重新學習</span>
                <span v-else>繼續學習</span>
                <span v-if="isLevelUnlocked(2)" class="btn-arrow">→</span>
              </button>
            </div>
          </div>

          <!-- Level 3: 高級專業 -->
          <div 
            class="level-card level-3"
            :class="{ disabled: !isLevelUnlocked(3) }"
            @click="selectLevel(3)"
          >
            <div class="level-header">
              <div class="level-badge">
                <span class="level-number">3</span>
                <div class="level-icon">🌳</div>
              </div>
              <div class="level-title">
                <h3>高級專業</h3>
                <p>Level 3</p>
              </div>
            </div>
            
            <div class="level-content">
              <div class="level-description">
                掌握複雜的風土條件與品質評估，深入理解氣候變遷和市場趨勢
              </div>
              
              <div class="level-features">
                <div class="feature-item">
                  <span class="feature-icon">🌡️</span>
                  <span>氣候變遷分析</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">🔬</span>
                  <span>土壤科學研究</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">🏺</span>
                  <span>甜酒專業技術</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">📊</span>
                  <span>市場投資分析</span>
                </div>
              </div>
              
              <div class="level-stats">
                <div class="stat-item">
                  <span class="stat-number">15</span>
                  <span class="stat-label">個課程</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">8</span>
                  <span class="stat-label">小時</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ getLevelProgress(3) }}%</span>
                  <span class="stat-label">完成度</span>
                </div>
              </div>
            </div>
            
            <div class="level-action">
              <button class="level-btn" :disabled="!isLevelUnlocked(3)">
                <span v-if="!isLevelUnlocked(3)">需通過Level 2綜合評量</span>
                <span v-else-if="getLevelProgress(3) === 0">開始學習</span>
                <span v-else-if="getLevelProgress(3) === 100">重新學習</span>
                <span v-else>繼續學習</span>
                <span v-if="isLevelUnlocked(3)" class="btn-arrow">→</span>
              </button>
            </div>
          </div>

          <!-- Level 4: 專家認證 -->
          <div 
            class="level-card level-4"
            :class="{ disabled: !isLevelUnlocked(4) }"
            @click="selectLevel(4)"
          >
            <div class="level-header">
              <div class="level-badge">
                <span class="level-number">4</span>
                <div class="level-icon">👑</div>
              </div>
              <div class="level-title">
                <h3>專家認證</h3>
                <p>Level 4</p>
              </div>
            </div>
            
            <div class="level-content">
              <div class="level-description">
                專業分析與綜合評估能力培養，成為波爾多葡萄酒領域的專業顧問
              </div>
              
              <div class="level-features">
                <div class="feature-item">
                  <span class="feature-icon">🎓</span>
                  <span>專業論文研究</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">💼</span>
                  <span>商業案例分析</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">🔥</span>
                  <span>行業趨勢預測</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">🌍</span>
                  <span>國際市場洞察</span>
                </div>
              </div>
              
              <div class="level-stats">
                <div class="stat-item">
                  <span class="stat-number">18</span>
                  <span class="stat-label">個課程</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">12</span>
                  <span class="stat-label">小時</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ getLevelProgress(4) }}%</span>
                  <span class="stat-label">完成度</span>
                </div>
              </div>
            </div>
            
            <div class="level-action">
              <button class="level-btn" :disabled="!isLevelUnlocked(4)">
                <span v-if="!isLevelUnlocked(4)">需通過Level 3綜合評量</span>
                <span v-else-if="getLevelProgress(4) === 0">開始學習</span>
                <span v-else-if="getLevelProgress(4) === 100">重新學習</span>
                <span v-else>繼續學習</span>
                <span v-if="isLevelUnlocked(4)" class="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 雲端同步提示（未登入時顯示） -->
      <div v-if="!authUser" class="sync-hint-bar">
        📍 登入後可學習進度雲端同步
      </div>

      <!-- 學習進度摘要 -->
      <div class="progress-summary-section">
        <LearningStatsMini @show-details="showProgress = true" />
      </div>

    </div>

    <!-- 成就彈窗 -->
    <div v-if="showAchievements" class="modal-overlay" @click="showAchievements = false">
      <div class="achievement-modal" @click.stop>
        <div class="modal-header">
          <h3>🏆 學習成就</h3>
          <button class="close-btn" @click="showAchievements = false">×</button>
        </div>
        <div class="modal-content">
          <!-- 完整的成就儀表板 -->
          <AchievementsDashboard course-key="bordeaux" />
        </div>
      </div>
    </div>

    <!-- 進度彈窗 -->
    <div v-if="showProgress" class="modal-overlay" @click="showProgress = false">
      <div class="progress-modal" @click.stop>
        <div class="modal-header">
          <h3>📊 學習進度</h3>
          <button class="close-btn" @click="showProgress = false">×</button>
        </div>
        <div class="modal-content">
          <!-- 統一學習進度儀表板 -->
          <LearningProgressDashboard course-key="bordeaux" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { learningState, learningActions } from '../../stores/learningStore.js'
import { authState, authActions } from '../../stores/authStore.js'
import { supabase } from '../../lib/supabaseClient.js'
import { useRouter } from 'vue-router'
import LearningStatsMini from '../LearningStatsMini.vue'
import LearningProgressDashboard from '../LearningProgressDashboard.vue'
import AchievementsDashboard from '../AchievementsDashboard.vue'

// Props
const props = defineProps({
  deviceInfo: {
    type: Object,
    default: () => ({
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      layoutConfig: {}
    })
  }
})

// 響應式狀態
const showAchievements = ref(false)
const showProgress = ref(false)

// 事件定義
const emit = defineEmits(['selectLevel', 'exploreMode', 'gameHubMode', 'notebookMode', 'register', 'login', 'settings'])

// 認證狀態
const authUser = computed(() => authState.user)
const displayName = computed(() => authActions.getDisplayName())

// 大頭貼
const avatarUrl = ref('')

async function loadAvatar() {
  if (!authState.user || !supabase) { avatarUrl.value = ''; return }
  const { data } = await supabase
    .from('profiles')
    .select('avatar_url')
    .eq('id', authState.user.id)
    .single()
  avatarUrl.value = data?.avatar_url || ''
}

onMounted(() => { loadAvatar() })
watch(() => authState.user?.id, () => { loadAvatar() })

const TIER_INFO = {
  free:    { label: '品飲新手 Explorer',       icon: '🌱', color: '#6b7280' },
  basic:   { label: '進階愛好者 Enthusiast',    icon: '🍇', color: '#7c3aed' },
  premium: { label: '專業達人 Professional',   icon: '🏆', color: '#b45309' }
}
const userTier = computed(() => authActions.getEffectiveTier())
const tierInfo = computed(() => TIER_INFO[userTier.value])

const router = useRouter()

async function handleLogout() {
  await authActions.signOut()
  router.push('/')
}

// 裝置相關計算屬性
const isMobileLayout = computed(() => props.deviceInfo.isMobile || props.deviceInfo.isSmallScreen)
const shouldUseCompactMode = computed(() => {
  return props.deviceInfo.layoutConfig.showCompactHeader || false
})

// 計算屬性
const isLevelUnlocked = computed(() => {
  return (level) => {
    if (learningState.testMode) return true
    if (authActions.isAdmin()) return true
    if (level === 1) return true

    // 必須通過前一個 Level 的綜合評量（最後一課）才能解鎖
    const prevLevel = level - 1
    const finalLessonId = learningActions.getFinalLessonId(prevLevel)
    return finalLessonId != null && learningState.completedLessons.includes(finalLessonId)
  }
})

const getLevelProgress = computed(() => {
  return (level) => {
    const progress = learningState.userProgress[`level${level}`]
    if (!progress || progress.total === 0) return 0
    return Math.round((progress.completed / progress.total) * 100)
  }
})

// 方法
const selectLevel = (level) => {
  if (isLevelUnlocked.value(level)) {
    emit('selectLevel', level)
  }
}

const getBubbleStyle = (index) => {
  const delay = Math.random() * 5
  const duration = 3 + Math.random() * 4
  const left = Math.random() * 100
  const size = 0.5 + Math.random() * 1.5
  
  return {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    width: `${size}rem`,
    height: `${size}rem`
  }
}
</script>

<style scoped>
.level-selection {
  min-height: 100vh;
  background: linear-gradient(135deg, 
    #667eea 0%, 
    #764ba2 25%, 
    #f093fb 50%, 
    #f5576c 75%, 
    #4facfe 100%
  );
  position: relative;
}

/* 背景動畫 */
.background-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.wine-bubbles {
  position: relative;
  width: 100%;
  height: 100%;
}

.bubble {
  position: absolute;
  bottom: -2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float-up linear infinite;
  backdrop-filter: blur(2px);
}

@keyframes float-up {
  to {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
}

/* 主要容器 */
.main-container {
  position: relative;
  z-index: 1;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch; /* 讓內部區塊寬度一致，避免視覺偏移 */
  justify-content: center;
  min-height: 100vh;
}

/* 品牌頭部 */
.brand-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 3rem auto; /* 置中 */
  padding: 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 1400px; /* 與卡片網格寬度一致 */
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.wine-glass-icon {
  font-size: 3rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

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

.brand-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin: 0.5rem 0 0 0;
}

.certification-badge {
  text-align: right;
}

.academy-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #8e24aa;
  margin-bottom: 0.25rem;
}

.certification-text {
  font-size: 0.9rem;
  color: #777;
}

/* ── 使用者面板 ──────────────────────────────────── */
.user-panel {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.tier-badge {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.6rem;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 700;
  white-space: nowrap;
  border: 1.5px solid currentColor;
  opacity: 0.9;
}
.tier-badge.tier-free    { color: #6b7280; background: rgba(107,114,128,0.1); }
.tier-badge.tier-basic   { color: #7c3aed; background: rgba(124,58,237,0.1); }
.tier-badge.tier-premium { color: #b45309; background: rgba(180,83,9,0.12); }
.tier-icon { font-size: 0.85rem; }

.user-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255,255,255,0.6);
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
.user-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.user-avatar-initial {
  font-size: 1.4rem;
  font-weight: 800;
  color: white;
  line-height: 1;
  text-transform: uppercase;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.3rem;
}

.user-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2c3e50;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.user-action-btn {
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.user-action-btn.logout {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  border: 1px solid rgba(239, 68, 68, 0.3);
}
.user-action-btn.logout:hover {
  background: rgba(239, 68, 68, 0.2);
}

.user-action-btn.home {
  background: rgba(114, 47, 55, 0.08);
  color: #8B0000;
  border: 1.5px solid rgba(114, 47, 55, 0.35);
  font-weight: 700;
}
.user-action-btn.home:hover {
  background: rgba(114, 47, 55, 0.15);
}

.user-action-btn.login {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}
.user-action-btn.login:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.user-action-btn.register {
  background: rgba(102, 126, 234, 0.1);
  color: #5a67d8;
  border: 1px solid rgba(102, 126, 234, 0.3);
}
.user-action-btn.register:hover {
  background: rgba(102, 126, 234, 0.2);
}

.user-action-btn.settings {
  background: rgba(118, 75, 162, 0.1);
  color: #764ba2;
  border: 1px solid rgba(118, 75, 162, 0.3);
}
.user-action-btn.settings:hover {
  background: rgba(118, 75, 162, 0.2);
}

.user-btns {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

/* ── 雲端同步提示 ─────────────────────────────────── */
.sync-hint {
  font-size: 0.78rem;
  color: #888;
  padding: 0.4rem 0.9rem;
  background: rgba(0,0,0,0.04);
  border-radius: 20px;
  border: 1px dashed #ccc;
  white-space: nowrap;
}

/* 學習進度摘要區域 */
.progress-summary-section {
  margin: 0 auto 2rem auto;
  width: 100%;
  max-width: 1400px;
}

/* 成就摘要區域 */
.achievements-summary-section {
  margin: 0 auto 2rem auto;
  width: 100%;
  max-width: 1400px;
}

/* 等級選擇網格 */
.level-selection-grid {
  margin-bottom: 3rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

/* 等級卡片 */
.level-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.level-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, transparent, currentColor, transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.level-card:hover::before {
  opacity: 1;
}

.level-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.level-card.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.level-card.disabled:hover {
  transform: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* 等級頭部 */
.level-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.level-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
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
}

.level-icon {
  position: absolute;
  top: -5px;
  right: -5px;
  font-size: 1.2rem;
}

.level-title h3 {
  font-size: 1.5rem;
  margin: 0 0 0.25rem 0;
  color: #2c3e50;
}

.level-title p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

/* 等級內容 */
.level-content {
  margin-bottom: 2rem;
}

.level-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.level-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #666;
}

.feature-icon {
  font-size: 1rem;
}

.level-stats {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
}

.stat-label {
  font-size: 0.8rem;
  color: #666;
}

/* 等級按鈕 */
.level-action {
  text-align: center;
}

.level-btn {
  width: 100%;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.level-1 .level-btn { background: linear-gradient(135deg, #4CAF50, #66BB6A); color: white; }
.level-2 .level-btn { background: linear-gradient(135deg, #2196F3, #42A5F5); color: white; }
.level-3 .level-btn { background: linear-gradient(135deg, #FF9800, #FFA726); color: white; }
.level-4 .level-btn { background: linear-gradient(135deg, #E91E63, #EC407A); color: white; }

.level-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.level-btn:disabled {
  background: #ddd;
  color: #999;
  cursor: not-allowed;
}

.btn-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.level-btn:hover .btn-arrow {
  transform: translateX(4px);
}

/* 快速功能入口 */
.quick-nav {
  margin-bottom: 2rem;
}

.quick-nav-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  max-width: 1400px;
  margin: 0 auto;
}

.nav-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 1.1rem 1rem;
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
.nav-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0,0,0,0.18);
}

.nav-icon {
  font-size: 2rem;
  line-height: 1;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}
.nav-title {
  font-size: 1rem;
  font-weight: 800;
  color: white;
  letter-spacing: 0.01em;
}
.nav-desc {
  font-size: 0.72rem;
  color: rgba(255,255,255,0.78);
  line-height: 1.4;
}

.nav-card.game-hub {
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
}
.nav-card.explore {
  background: linear-gradient(135deg, #00BCD4, #0097A7);
}
.nav-card.achievements {
  background: linear-gradient(135deg, #FFC107, #F57F17);
}
.nav-card.progress {
  background: linear-gradient(135deg, #9C27B0, #6A1B9A);
}
.nav-card.notebook {
  background: linear-gradient(135deg, #8B0000, #5a0000);
}

/* 雲端同步提示列 */
.sync-hint-bar {
  text-align: center;
  font-size: 0.78rem;
  color: #888;
  padding: 0.5rem 1rem;
  background: rgba(0,0,0,0.04);
  border-radius: 20px;
  border: 1px dashed #ccc;
  margin-bottom: 1.5rem;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}



.system-info {
  text-align: right;
  color: #666;
  font-size: 0.9rem;
}

.version-info {
  margin-bottom: 0.25rem;
}

/* 彈窗樣式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.achievement-modal,
.progress-modal {
  background: white;
  border-radius: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #eee;
}

.modal-header h3 {
  margin: 0;
  color: #2c3e50;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #999;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: #f5f5f5;
  color: #333;
}

.modal-content {
  padding: 2rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .main-container {
    padding: 1rem;
  }
  
  .brand-header {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    padding: 1.25rem 1rem;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .brand-logo {
    width: 100%;
    justify-content: center;
    min-width: 0;
    gap: 0.9rem;
  }

  .brand-text {
    min-width: 0;
  }

  .brand-title {
    white-space: normal;
    overflow-wrap: anywhere;
    line-height: 1.2;
    text-align: center;
    font-size: clamp(1.55rem, 6.2vw, 2rem);
  }
  
  .grid-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .level-features {
    grid-template-columns: 1fr;
  }
  
  .quick-nav-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 手機優化 - 確保所有卡片可見 */
@media (max-width: 640px) {
  .main-container {
    padding: 0.75rem;
  }

  .brand-header {
    padding: 1rem 0.85rem;
  }

  .brand-logo {
    gap: 0.7rem;
  }
  
  .brand-title {
    font-size: clamp(1.3rem, 7vw, 1.65rem);
  }
  
  .brand-subtitle {
    font-size: 0.9rem;
  }
  
  .grid-container {
    grid-template-columns: 1fr !important;
    gap: 1rem;
  }
  
  .level-card {
    padding: 1.25rem;
  }
  
  .level-header {
    margin-bottom: 1rem;
  }
  
  .level-title h3 {
    font-size: 1.2rem;
  }
  
  .level-description {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  
  .level-features {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  
  .feature-item {
    font-size: 0.85rem;
  }
  
  .level-stats {
    gap: 0.75rem;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
  
  .action-btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>
