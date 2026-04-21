<template>
  <div class="nz-level-selector">
    <!-- 背景動畫（山丘起伏） -->
    <div class="background-animation">
      <div class="mountain-layers">
        <div v-for="i in 5" :key="`mtn-${i}`" class="mountain-layer" :style="getMountainStyle(i)"></div>
      </div>
      <div class="sky-stars">
        <div v-for="i in 24" :key="`star-${i}`" class="star" :style="getStarStyle(i)"></div>
      </div>
    </div>

    <div class="main-container">
      <!-- 品牌頭部 -->
      <header class="brand-header">
        <div class="brand-logo">
          <div class="nz-icon">🥝</div>
          <div class="brand-text">
            <h1 class="brand-title">紐西蘭葡萄酒</h1>
            <p class="brand-subtitle">New Zealand Wine · 南半球的純淨葡萄酒聖地</p>
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
          <button class="nav-card map-card" @click="emit('openMap')">
            <span class="nav-icon">🗺️</span>
            <span class="nav-title">探索地圖</span>
            <span class="nav-desc">紐西蘭 17 產區互動地圖</span>
          </button>
          <button class="nav-card progress-card" @click="showProgressModal = true">
            <span class="nav-icon">📊</span>
            <span class="nav-title">學習進度</span>
            <span class="nav-desc">{{ totalProgressPct }}% 完成・{{ completedCount }} 課</span>
          </button>
          <button class="nav-card achievement-card" @click="showAchievementModal = true">
            <span class="nav-icon">🏆</span>
            <span class="nav-title">學習成就</span>
            <span class="nav-desc">解鎖成就・累積點數</span>
          </button>
          <button class="nav-card region-card">
            <span class="nav-icon">🏔️</span>
            <span class="nav-title">南北兩島</span>
            <span class="nav-desc">北島 · 南島產區對比</span>
          </button>
        </div>
      </section>

      <!-- 課程階段選擇 -->
      <section class="levels-section">
        <div class="section-header">
          <div class="section-title-group">
            <h2>選擇課程階段</h2>
            <p>從基礎入門到深度專業，系統化掌握紐西蘭葡萄酒知識。</p>
          </div>
          <div class="section-actions">
            <button class="section-btn" @click="startJourney">{{ heroButtonText }}</button>
          </div>
        </div>

        <div class="levels-grid">
          <!-- Level 1 -->
          <div
            class="level-card level-1"
            :class="{ 'in-progress': levelProgress(1) > 0 && levelProgress(1) < 100, 'completed': levelProgress(1) >= 100 }"
            @click="emit('enterLevel', 1)"
          >
            <div class="card-accent-bar"></div>
            <div class="level-header">
              <div class="level-badge">
                <span class="level-number">1</span>
                <div class="level-icon">🌱</div>
              </div>
              <div class="level-title-group">
                <h3>紐西蘭葡萄酒入門</h3>
                <p>Level 1 · 基礎認識</p>
              </div>
            </div>
            <div class="level-content">
              <p class="level-description">
                建立紐西蘭葡萄酒的完整基礎：從地理環境、氣候特性，到 Sauvignon Blanc、Pinot Noir 等主要品種，以及產業法規與全球地位。
              </p>
              <div class="level-features">
                <div class="feature-item"><span class="feature-icon">🍾</span><span>紐西蘭葡萄酒簡史與全球地位</span></div>
                <div class="feature-item"><span class="feature-icon">🌡️</span><span>南北兩島氣候與地理特徵</span></div>
                <div class="feature-item"><span class="feature-icon">🍇</span><span>Sauvignon Blanc 旗艦品種深度解析</span></div>
                <div class="feature-item"><span class="feature-icon">🔴</span><span>Pinot Noir 優雅的紅色珍寶</span></div>
              </div>
              <div class="level-stats">
                <div class="stat-item">
                  <span class="stat-number">{{ statsByLevel[1]?.modules ?? 2 }}</span>
                  <span class="stat-label">個模組</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ statsByLevel[1]?.lessons ?? 7 }}</span>
                  <span class="stat-label">堂課程</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ Math.round(levelProgress(1)) }}%</span>
                  <span class="stat-label">完成度</span>
                </div>
              </div>
              <div class="progress-bar-wrap">
                <div class="progress-bar-track">
                  <div class="progress-bar-fill" :style="{ width: `${levelProgress(1)}%` }"></div>
                </div>
              </div>
            </div>
            <div class="level-action">
              <button class="level-btn" @click.stop="emit('enterLevel', 1)">
                <template v-if="levelProgress(1) >= 100">重新學習</template>
                <template v-else-if="levelProgress(1) > 0">繼續學習</template>
                <template v-else>開始學習</template>
                <span class="btn-arrow">→</span>
              </button>
            </div>
          </div>

          <!-- Level 2 -->
          <div
            class="level-card level-2"
            :class="{ 'locked': !isLevelUnlocked(2), 'in-progress': levelProgress(2) > 0 && levelProgress(2) < 100 }"
            @click="isLevelUnlocked(2) && emit('enterLevel', 2)"
          >
            <div class="card-accent-bar"></div>
            <div class="level-header">
              <div class="level-badge">
                <span class="level-number">2</span>
                <div class="level-icon">🗺️</div>
              </div>
              <div class="level-title-group">
                <h3>南北兩島產區探索</h3>
                <p>Level 2 · 產區深度研究</p>
              </div>
            </div>
            <div class="level-content">
              <p class="level-description">
                深入探索北島 Hawke's Bay、Wairarapa 與南島 Marlborough、Central Otago 各大產區的風土特色，理解各地葡萄酒風格的形成。
              </p>
              <div class="level-features">
                <div class="feature-item"><span class="feature-icon">🌊</span><span>Marlborough — SB 白酒之都</span></div>
                <div class="feature-item"><span class="feature-icon">🏔️</span><span>Central Otago — 世界最南端產區</span></div>
                <div class="feature-item"><span class="feature-icon">🌿</span><span>Hawke's Bay 紅酒重鎮風土解析</span></div>
                <div class="feature-item"><span class="feature-icon">💎</span><span>Martinborough 的 Pinot Noir 魅力</span></div>
              </div>
              <div class="level-stats">
                <div class="stat-item">
                  <span class="stat-number">{{ statsByLevel[2]?.modules ?? 2 }}</span>
                  <span class="stat-label">個模組</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ statsByLevel[2]?.lessons ?? 14 }}</span>
                  <span class="stat-label">堂課程</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ isLevelUnlocked(2) ? Math.round(levelProgress(2)) + '%' : '🔒' }}</span>
                  <span class="stat-label">{{ isLevelUnlocked(2) ? '完成度' : '鎖定中' }}</span>
                </div>
              </div>
              <div class="progress-bar-wrap" v-if="isLevelUnlocked(2)">
                <div class="progress-bar-track">
                  <div class="progress-bar-fill l2-fill" :style="{ width: `${levelProgress(2)}%` }"></div>
                </div>
              </div>
            </div>
            <div class="level-action">
              <button class="level-btn" :disabled="!isLevelUnlocked(2)" @click.stop="isLevelUnlocked(2) && emit('enterLevel', 2)">
                <template v-if="!isLevelUnlocked(2)">完成 Level 1 後解鎖</template>
                <template v-else-if="levelProgress(2) > 0">繼續學習</template>
                <template v-else>開始學習</template>
                <span v-if="isLevelUnlocked(2)" class="btn-arrow">→</span>
              </button>
            </div>
            <!-- 鎖定遮罩 -->
            <div v-if="!isLevelUnlocked(2)" class="lock-overlay">
              <div class="lock-content">
                <span class="lock-icon">🔒</span>
                <p>完成 Level 1 後解鎖</p>
              </div>
            </div>
          </div>

          <!-- Level 3 -->
          <div
            v-if="hasLevel(3)"
            class="level-card level-3"
            :class="{ 'locked': !isLevelUnlocked(3), 'in-progress': levelProgress(3) > 0 && levelProgress(3) < 100 }"
            @click="isLevelUnlocked(3) && emit('enterLevel', 3)"
          >
            <div class="card-accent-bar"></div>
            <div class="level-header">
              <div class="level-badge">
                <span class="level-number">3</span>
                <div class="level-icon">🏆</div>
              </div>
              <div class="level-title-group">
                <h3>深度專業進修</h3>
                <p>Level 3 · 高級專業認證</p>
              </div>
            </div>
            <div class="level-content">
              <p class="level-description">
                深入葡萄栽培技術與釀造工藝，掌握永續農業、生物動力法、品鑑技術與市場趨勢，成為紐西蘭葡萄酒專業顧問。
              </p>
              <div class="level-features">
                <div class="feature-item"><span class="feature-icon">🌱</span><span>永續葡萄園管理與生物動力農法</span></div>
                <div class="feature-item"><span class="feature-icon">🔬</span><span>精釀工藝與風格解析</span></div>
                <div class="feature-item"><span class="feature-icon">📊</span><span>國際市場定位與出口策略</span></div>
                <div class="feature-item"><span class="feature-icon">🥂</span><span>專業品鑑與盲飲技術</span></div>
              </div>
              <div class="level-stats">
                <div class="stat-item">
                  <span class="stat-number">{{ statsByLevel[3]?.modules ?? 2 }}</span>
                  <span class="stat-label">個模組</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ statsByLevel[3]?.lessons ?? 8 }}</span>
                  <span class="stat-label">堂課程</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ isLevelUnlocked(3) ? Math.round(levelProgress(3)) + '%' : '🔒' }}</span>
                  <span class="stat-label">{{ isLevelUnlocked(3) ? '完成度' : '鎖定中' }}</span>
                </div>
              </div>
              <div class="progress-bar-wrap" v-if="isLevelUnlocked(3)">
                <div class="progress-bar-track">
                  <div class="progress-bar-fill l3-fill" :style="{ width: `${levelProgress(3)}%` }"></div>
                </div>
              </div>
            </div>
            <div class="level-action">
              <button class="level-btn" :disabled="!isLevelUnlocked(3)" @click.stop="isLevelUnlocked(3) && emit('enterLevel', 3)">
                <template v-if="!isLevelUnlocked(3)">完成 Level 2 後解鎖</template>
                <template v-else-if="levelProgress(3) > 0">繼續學習</template>
                <template v-else>開始學習</template>
                <span v-if="isLevelUnlocked(3)" class="btn-arrow">→</span>
              </button>
            </div>
            <!-- 鎖定遮罩 -->
            <div v-if="!isLevelUnlocked(3)" class="lock-overlay">
              <div class="lock-content">
                <span class="lock-icon">🔒</span>
                <p>完成 Level 2 後解鎖</p>
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
            <span>Level 1 ~ 3 全系列</span>
          </div>
        </div>
        <div class="highlight-item">
          <span class="hl-icon">🗺️</span>
          <div class="hl-text">
            <strong>17 個產區</strong>
            <span>Marlborough · Central Otago…</span>
          </div>
        </div>
        <div class="highlight-item">
          <span class="hl-icon">🍇</span>
          <div class="hl-text">
            <strong>4 大品種</strong>
            <span>SB · Pinot Noir · Chardonnay · PG</span>
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

      <!-- 未登入提示 -->
      <div v-if="!authUser" class="sync-hint-bar">
        📍 登入後可將學習進度同步至雲端，跨裝置繼續學習
      </div>
    </div>

    <!-- 學習進度 Modal -->
    <Teleport to="body">
      <div v-if="showProgressModal" class="progress-modal-overlay" @click.self="showProgressModal = false">
        <div class="progress-modal">
          <div class="pm-header">
            <h3>📊 紐西蘭葡萄酒學習進度</h3>
            <button class="pm-close" @click="showProgressModal = false">×</button>
          </div>
          <div class="pm-body">
            <div class="progress-detail-grid">
              <div class="pd-item">
                <div class="pd-label">Level 1 進度</div>
                <div class="pd-value">{{ Math.round(levelProgress(1)) }}%</div>
                <div class="pd-bar"><div :style="{ width: levelProgress(1) + '%' }"></div></div>
              </div>
              <div class="pd-item">
                <div class="pd-label">Level 2 進度</div>
                <div class="pd-value">{{ isLevelUnlocked(2) ? Math.round(levelProgress(2)) + '%' : '🔒 未解鎖' }}</div>
                <div class="pd-bar" v-if="isLevelUnlocked(2)"><div :style="{ width: levelProgress(2) + '%' }"></div></div>
              </div>
              <div v-if="hasLevel(3)" class="pd-item">
                <div class="pd-label">Level 3 進度</div>
                <div class="pd-value">{{ isLevelUnlocked(3) ? Math.round(levelProgress(3)) + '%' : '🔒 未解鎖' }}</div>
                <div class="pd-bar" v-if="isLevelUnlocked(3)"><div :style="{ width: levelProgress(3) + '%' }"></div></div>
              </div>
              <div class="pd-item pd-wide">
                <div class="pd-label">已完成課程</div>
                <div class="pd-value">{{ completedCount }} / {{ totalLessonsCount }} 堂</div>
              </div>
            </div>
            <div class="pm-lesson-list">
              <h4>Level 1 課程進度</h4>
              <div
                v-for="lesson in level1Lessons"
                :key="lesson.id"
                class="pm-lesson-row"
              >
                <span class="pm-lesson-status">{{ completedLessons.includes(lesson.id) ? '✅' : '⭕' }}</span>
                <span class="pm-lesson-title">{{ lesson.title }}</span>
                <span class="pm-lesson-time">{{ lesson.duration }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- 學習成就 Modal -->
    <Teleport to="body">
      <div v-if="showAchievementModal" class="achievement-modal-overlay" @click.self="showAchievementModal = false">
        <div class="achievement-modal">
          <div class="am-header">
            <h3>🏆 學習成就</h3>
            <button class="am-close" @click="showAchievementModal = false">×</button>
          </div>
          <div class="am-body">
            <AchievementsDashboard course-key="newzealand" @back="showAchievementModal = false" />
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
import { supabase } from '../../lib/supabaseClient.js'
import AchievementsDashboard from '../AchievementsDashboard.vue'

const router = useRouter()
const emit = defineEmits(['enterLevel', 'openMap'])

const props = defineProps({
  modules:          { type: Array, default: () => [] },
  completedLessons: { type: Array, default: () => [] },
  levels:           { type: Array, default: () => [1, 2, 3] }
})

// 用戶資訊
const avatarUrl = ref('')
const avatarInitial = ref('我')
const showProgressModal = ref(false)
const showAchievementModal = ref(false)

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

// 課程資料計算
const statsByLevel = computed(() => {
  const map = {}
  const uniqueLevels = [...new Set(props.modules.map(m => m.level))]
  for (const lvl of uniqueLevels) {
    const mods = props.modules.filter(m => m.level === lvl)
    const lessons = mods.flatMap(m => m.lessons || [])
    const lessonIds = lessons.map(l => l.id)
    const completed = props.completedLessons.filter(id => lessonIds.includes(id)).length
    map[lvl] = {
      modules: mods.length,
      lessons: lessons.length,
      lessonIds,
      progress: lessons.length ? Math.round((completed / lessons.length) * 100) : 0
    }
  }
  return map
})

const level1Lessons = computed(() =>
  props.modules.filter(m => m.level === 1).flatMap(m => m.lessons || [])
)

const totalLessonsCount = computed(() =>
  props.modules.reduce((sum, m) => sum + (m.lessons?.length || 0), 0)
)

const completedCount = computed(() => props.completedLessons.length)

const totalProgressPct = computed(() => {
  const total = totalLessonsCount.value
  if (!total) return 0
  return Math.round((completedCount.value / total) * 100)
})

function hasLevel(n) {
  return props.levels.includes(n) || props.modules.some(m => m.level === n)
}

function levelProgress(n) {
  const s = statsByLevel.value[n]
  if (!s || !s.lessons) return 0
  const done = props.completedLessons.filter(id => s.lessonIds.includes(id)).length
  return (done / s.lessons) * 100
}

// 解鎖邏輯：检查 localStorage（NZ課程的已通過狀態）或所有前一等級課程完成
function isLevelUnlocked(n) {
  if (n === 1) return true; if (authActions.isAdmin()) return true  // 先检查 localStorage 的 passed 標記
  const passedKey = `nz-wine-level${n - 1}-passed`
  try {
    if (localStorage.getItem(passedKey) === 'true') return true
  } catch (e) { /* ignore */ }
  // 備援：前一等級所有課程完成
  return levelProgress(n - 1) >= 100
}

// 首頁按鈕文字
const heroButtonText = computed(() => {
  if (levelProgress(1) >= 100 && isLevelUnlocked(2)) return '開始 Level 2'
  if (levelProgress(1) > 0) return '繼續 Level 1'
  return '開始學習'
})

function startJourney() {
  if (levelProgress(1) >= 100 && isLevelUnlocked(2)) {
    emit('enterLevel', 2)
  } else {
    emit('enterLevel', 1)
  }
}

// 山丘動畫
function getMountainStyle(i) {
  const heights = [30, 45, 55, 38, 25]
  const colors = [
    'rgba(0,80,0,0.55)',
    'rgba(0,64,0,0.45)',
    'rgba(0,100,0,0.35)',
    'rgba(20,100,40,0.28)',
    'rgba(0,60,20,0.2)'
  ]
  return {
    height: `${heights[i - 1]}%`,
    background: colors[i - 1],
    animationDelay: `${(i - 1) * 3}s`,
    animationDuration: `${20 + i * 5}s`,
    bottom: `${(i - 1) * 4}%`
  }
}

// 星空動畫
function getStarStyle(i) {
  const seed = i * 137.5
  return {
    left: `${(seed * 7.3) % 100}%`,
    top: `${(seed * 3.7) % 50}%`,
    animationDelay: `${(seed % 4).toFixed(1)}s`,
    animationDuration: `${3 + (seed % 4)}s`,
    width: `${1 + (seed % 3)}px`,
    height: `${1 + (seed % 3)}px`,
    opacity: 0.4 + (seed % 6) / 10
  }
}
</script>

<style scoped>
/* =============================================
   NZ Level Selector — 紐西蘭葡萄酒課程首頁
   Colors: NZ Green #006400 / Sky #e0f0ff / Silver
   ============================================= */

.nz-level-selector {
  min-height: 100vh;
  background: linear-gradient(160deg,
    #001a0a 0%,
    #003310 18%,
    #004d18 38%,
    #003d14 58%,
    #00260d 78%,
    #001208 100%
  );
  position: relative;
  overflow-x: hidden;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
}

/* ── 背景動畫 ────────────────────────────── */
.background-animation {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.mountain-layers {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;
}

.mountain-layer {
  position: absolute;
  left: -5%;
  width: 110%;
  border-radius: 50% 50% 0 0 / 30% 30% 0 0;
  animation: mountain-breathe ease-in-out infinite alternate;
}

.mountain-layer:nth-child(1) { bottom: 0; }
.mountain-layer:nth-child(2) { bottom: 2%; }
.mountain-layer:nth-child(3) { bottom: 4%; }
.mountain-layer:nth-child(4) { bottom: 6%; }
.mountain-layer:nth-child(5) { bottom: 8%; }

@keyframes mountain-breathe {
  0%   { transform: scaleX(1) translateY(0); }
  100% { transform: scaleX(1.02) translateY(-4px); }
}

.sky-stars { position: absolute; inset: 0; }

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: star-twinkle ease-in-out infinite alternate;
}

@keyframes star-twinkle {
  0%   { opacity: 0.2; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1.2); }
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
  background: rgba(255, 255, 255, 0.97);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 100, 0, 0.15);
  backdrop-filter: blur(12px);
}

.brand-logo { display: flex; align-items: center; gap: 1.25rem; }
.nz-icon {
  font-size: 3rem;
  filter: drop-shadow(0 4px 8px rgba(0, 100, 0, 0.3));
  line-height: 1;
}
.brand-title {
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 0.2rem;
  background: linear-gradient(135deg, #004d18, #38a169);
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
  border: 2.5px solid rgba(0, 100, 0, 0.4);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden; flex-shrink: 0;
}
.ls-avatar-img { width: 100%; height: 100%; object-fit: cover; display: block; }
.ls-avatar-initial { font-size: 1.2rem; font-weight: 700; color: #006400; }

.user-info    { display: flex; flex-direction: column; align-items: flex-end; gap: 0.3rem; }
.user-name    {
  font-size: 0.9rem; font-weight: 600; color: #2c3e50;
  max-width: 130px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.tier-badge {
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
  background: rgba(0,100,0,0.08); color: #004d18;
  border: 1.5px solid rgba(0,100,0,0.3);
}
.user-action-btn.home:hover { background: rgba(0,100,0,0.16); }
.user-action-btn.logout {
  background: rgba(239,68,68,0.08); color: #dc2626;
  border: 1px solid rgba(239,68,68,0.3);
}
.user-action-btn.logout:hover { background: rgba(239,68,68,0.16); }
.user-action-btn.login {
  background: linear-gradient(135deg, #006400, #38a169); color: white;
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
.nav-card:hover { transform: translateY(-3px); background: rgba(255,255,255,0.22) !important; }

.map-card      { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.15); }
.progress-card { background: rgba(56,161,105,0.25);  border: 1px solid rgba(56,161,105,0.4); }
.region-card      { background: rgba(255,255,255,0.1);  border: 1px solid rgba(255,255,255,0.12); }
.variety-card     { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.1); }
.achievement-card { background: rgba(255,215,0,0.12);  border: 1px solid rgba(255,215,0,0.3); }

.nav-icon  { font-size: 2rem; line-height: 1; }
.nav-title { font-size: 0.95rem; font-weight: 700; }
.nav-desc  { font-size: 0.75rem; opacity: 0.8; line-height: 1.3; }

/* ── 課程階段選擇 ────────────────────────── */
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
  background: linear-gradient(135deg, #38a169, #68d391);
  border: none;
  border-radius: 30px;
  color: #001a0a;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s;
  box-shadow: 0 4px 16px rgba(56,161,105,0.4);
  white-space: nowrap;
}
.section-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(56,161,105,0.5); }

/* 三欄佈局 */
.levels-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
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

.card-accent-bar { height: 5px; }
.level-1 .card-accent-bar { background: linear-gradient(90deg, #006400, #38a169); }
.level-2 .card-accent-bar { background: linear-gradient(90deg, #2b6cb0, #4299e1); }
.level-3 .card-accent-bar { background: linear-gradient(90deg, #805ad5, #b794f4); }

.level-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem 0.75rem;
}
.level-badge {
  width: 60px; height: 60px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.level-1 .level-badge { background: linear-gradient(135deg, #006400, #38a169); }
.level-2 .level-badge { background: linear-gradient(135deg, #2b6cb0, #4299e1); }
.level-3 .level-badge { background: linear-gradient(135deg, #805ad5, #b794f4); }

.level-number { font-size: 1.5rem; font-weight: 900; color: white; line-height: 1; }
.level-icon   { font-size: 0.85rem; margin-top: 1px; }

.level-title-group h3 { font-size: 1.05rem; font-weight: 700; color: #1a1a2e; margin: 0 0 0.2rem; }
.level-title-group p  { font-size: 0.78rem; color: #888; margin: 0; }

.level-content { padding: 0 1.5rem 1rem; flex: 1; }
.level-description { font-size: 0.83rem; color: #555; line-height: 1.6; margin-bottom: 1rem; }

.level-features { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1rem; }
.feature-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: #444; }
.feature-icon { font-size: 0.9rem; flex-shrink: 0; }

.level-stats { display: flex; gap: 1.2rem; margin-bottom: 0.75rem; }
.stat-item { display: flex; flex-direction: column; align-items: center; }
.stat-number { font-size: 1.35rem; font-weight: 800; color: #006400; }
.level-2 .stat-number { color: #2b6cb0; }
.level-3 .stat-number { color: #805ad5; }
.stat-label  { font-size: 0.72rem; color: #888; }

.progress-bar-wrap { margin-bottom: 0.5rem; }
.progress-bar-track { height: 6px; background: #e8f5ee; border-radius: 3px; overflow: hidden; }
.progress-bar-fill { height: 100%; background: linear-gradient(90deg, #006400, #38a169); border-radius: 3px; transition: width 0.6s ease; }
.l2-fill { background: linear-gradient(90deg, #2b6cb0, #4299e1); }
.l3-fill { background: linear-gradient(90deg, #805ad5, #b794f4); }

.level-action { padding: 0 1.5rem 1.25rem; }
.level-btn {
  width: 100%;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 30px;
  color: white;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: inherit;
}
.level-1 .level-btn { background: linear-gradient(135deg, #006400, #38a169); }
.level-2 .level-btn:not(:disabled) { background: linear-gradient(135deg, #2b6cb0, #4299e1); }
.level-3 .level-btn:not(:disabled) { background: linear-gradient(135deg, #805ad5, #b794f4); }
.level-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
.level-btn:disabled { background: #e9ecef; color: #aaa; cursor: not-allowed; }
.btn-arrow { font-size: 1.1rem; }

/* 鎖定遮罩 */
.lock-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 26, 10, 0.55);
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
  background: rgba(56,161,105,0.15);
  border: 1px solid rgba(56,161,105,0.25);
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
  border-bottom: 2px solid #e8f5ee;
  background: linear-gradient(135deg, #006400, #38a169);
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
.pd-item { padding: 1rem; background: #f0fff4; border-radius: 12px; }
.pd-wide { grid-column: 1 / -1; }
.pd-label { font-size: 0.8rem; color: #666; margin-bottom: 0.25rem; }
.pd-value { font-size: 1.4rem; font-weight: 800; color: #006400; margin-bottom: 0.5rem; }
.pd-bar { height: 6px; background: #e8e8e8; border-radius: 3px; overflow: hidden; }
.pd-bar div { height: 100%; background: linear-gradient(90deg, #006400, #38a169); border-radius: 3px; }

.pm-lesson-list h4 { font-size: 0.95rem; color: #006400; margin: 0 0 0.75rem; }
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

/* ── 學習成就 Modal ──────────────────────── */
.achievement-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 9000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}
.achievement-modal {
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 720px;
  max-height: 85vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}
.am-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 2px solid #fff8e1;
  background: linear-gradient(135deg, #b8860b, #ffd700);
  color: white;
  border-radius: 20px 20px 0 0;
}
.am-header h3 { margin: 0; font-size: 1.1rem; }
.am-close {
  background: rgba(255,255,255,0.15); border: none; border-radius: 8px;
  color: white; font-size: 1.2rem; width: 32px; height: 32px;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
}
.am-body { overflow-y: auto; flex: 1; }

/* ── 響應式 ──────────────────────────────── */
@media (max-width: 900px) {
  .levels-grid { grid-template-columns: 1fr; }
}
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
}
</style>
