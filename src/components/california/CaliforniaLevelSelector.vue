<template>
  <div class="california-level-selector">
    <!-- 背景動畫 -->
    <div class="background-animation">
      <div class="golden-hills">
        <div v-for="i in 5" :key="`hill-${i}`" class="hill" :style="getHillStyle(i)"></div>
      </div>
      <div class="sun-rays">
        <div v-for="i in 12" :key="`ray-${i}`" class="ray" :style="getRayStyle(i)"></div>
      </div>
    </div>

    <div class="main-container">
      <!-- 品牌頭部 -->
      <header class="brand-header">
        <div class="brand-logo">
          <div class="region-icon">🌟</div>
          <div class="brand-text">
            <h1 class="brand-title">加州葡萄酒</h1>
            <p class="brand-subtitle">California Wine · 陽光、創新與巴黎評判傳奇</p>
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
            <span class="nav-desc">加州互動式產區地圖</span>
          </button>
          <button class="nav-card progress-card" @click="showProgressModal = true">
            <span class="nav-icon">📊</span>
            <span class="nav-title">學習進度</span>
            <span class="nav-desc">{{ totalProgressPct }}% 完成・{{ completedCount }} 課</span>
          </button>
          <button class="nav-card quiz-card">
            <span class="nav-icon">✏️</span>
            <span class="nav-title">隨堂測驗</span>
            <span class="nav-desc">品種、產區、風格快速考察</span>
          </button>
          <button class="nav-card notes-card">
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
            <h2>選擇課程階段</h2>
            <p>循序漸進探索加州葡萄酒的世界，完成 Level 1 即可解鎖進階課程。</p>
          </div>
          <div class="section-actions">
            <button class="section-btn" @click="startJourney">{{ heroButtonText }}</button>
          </div>
        </div>

        <div class="levels-grid">
          <!-- Level 1 -->
          <div
            class="level-card level-1"
            :class="{ 'in-progress': level1Progress > 0 && level1Progress < 100, 'completed': level1Progress >= 100 }"
            @click="emit('startLevel', 1)"
          >
            <div class="card-accent-bar"></div>
            <div class="level-header">
              <div class="level-badge">
                <span class="level-number">1</span>
                <div class="level-icon">🍷</div>
              </div>
              <div class="level-title-group">
                <h3>加州葡萄酒入門</h3>
                <p>Level 1 · 基礎認識</p>
              </div>
            </div>
            <div class="level-content">
              <p class="level-description">
                建立加州葡萄酒的完整基礎：從 1976 年巴黎評判改寫歷史，到六大產區群的地理氣候，再到 Cabernet、Pinot Noir、Zinfandel 等主要品種的完整風格解析。
              </p>
              <div class="level-features">
                <div class="feature-item"><span class="feature-icon">🏆</span><span>巴黎評判傳奇 & AVA 制度解析</span></div>
                <div class="feature-item"><span class="feature-icon">🗺️</span><span>六大產區群深度探索</span></div>
                <div class="feature-item"><span class="feature-icon">🍇</span><span>8 大主要品種風格指南</span></div>
                <div class="feature-item"><span class="feature-icon">🍽️</span><span>餐酒搭配與品飲技巧</span></div>
              </div>
              <div class="level-stats">
                <div class="stat-item">
                  <span class="stat-number">4</span>
                  <span class="stat-label">個模組</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">8</span>
                  <span class="stat-label">堂課程</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ Math.round(level1Progress) }}%</span>
                  <span class="stat-label">完成度</span>
                </div>
              </div>
              <div class="progress-bar-wrap">
                <div class="progress-bar-track">
                  <div class="progress-bar-fill" :style="{ width: `${level1Progress}%` }"></div>
                </div>
              </div>
            </div>
            <div class="level-action">
              <button class="level-btn" @click.stop="emit('startLevel', 1)">
                <template v-if="level1Progress >= 100">重新學習</template>
                <template v-else-if="level1Progress > 0">繼續學習</template>
                <template v-else>開始學習</template>
                <span class="btn-arrow">→</span>
              </button>
            </div>
          </div>

          <!-- Level 2 -->
          <div
            class="level-card level-2"
            :class="{ 'locked': !level2Unlocked, 'in-progress': level2Progress > 0 && level2Progress < 100 }"
            @click="level2Unlocked && emit('startLevel', 2)"
          >
            <div class="card-accent-bar"></div>
            <div class="level-header">
              <div class="level-badge">
                <span class="level-number">2</span>
                <div class="level-icon">🏆</div>
              </div>
              <div class="level-title-group">
                <h3>加州葡萄酒進階</h3>
                <p>Level 2 · 深度研究</p>
              </div>
            </div>
            <div class="level-content">
              <p class="level-description">
                深入 Napa 膜拜酒文化、年份研究、Rhône Rangers 的 Paso Robles 哲學，以及加州自然酒運動的先鋒精神。
              </p>
              <div class="level-features">
                <div class="feature-item"><span class="feature-icon">💎</span><span>Napa 膜拜酒（Cult Wine）深解</span></div>
                <div class="feature-item"><span class="feature-icon">📅</span><span>1990-2020 年份品鑑指南</span></div>
                <div class="feature-item"><span class="feature-icon">🌱</span><span>自然酒 & Biodynamic 農法</span></div>
                <div class="feature-item"><span class="feature-icon">🎨</span><span>Rhône Rangers 運動深度</span></div>
              </div>
              <div class="level-stats">
                <div class="stat-item">
                  <span class="stat-number">3</span>
                  <span class="stat-label">個模組</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">6</span>
                  <span class="stat-label">堂課程</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ level2Unlocked ? Math.round(level2Progress) + '%' : '🔒' }}</span>
                  <span class="stat-label">{{ level2Unlocked ? '完成度' : '鎖定中' }}</span>
                </div>
              </div>
              <div class="progress-bar-wrap" v-if="level2Unlocked">
                <div class="progress-bar-track">
                  <div class="progress-bar-fill l2-fill" :style="{ width: `${level2Progress}%` }"></div>
                </div>
              </div>
            </div>
            <div class="level-action">
              <button class="level-btn" :disabled="!level2Unlocked" @click.stop="level2Unlocked && emit('startLevel', 2)">
                <template v-if="!level2Unlocked">完成 Level 1 後解鎖</template>
                <template v-else-if="level2Progress > 0">繼續學習</template>
                <template v-else>開始學習</template>
                <span v-if="level2Unlocked" class="btn-arrow">→</span>
              </button>
            </div>
            <div v-if="!level2Unlocked" class="lock-overlay">
              <div class="lock-content">
                <span class="lock-icon">🔒</span>
                <p>完成 Level 1 後解鎖</p>
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
            <span>Level 1 + Level 2</span>
          </div>
        </div>
        <div class="highlight-item">
          <span class="hl-icon">🗺️</span>
          <div class="hl-text">
            <strong>6 大產區群</strong>
            <span>North Coast · Central Coast · Sierra Foothills…</span>
          </div>
        </div>
        <div class="highlight-item">
          <span class="hl-icon">🍇</span>
          <div class="hl-text">
            <strong>154+ AVA</strong>
            <span>全美最多 AVA 的葡萄酒州</span>
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

      <div v-if="!authUser" class="sync-hint-bar">
        📍 登入後可將學習進度同步至雲端，跨裝置繼續學習
      </div>
    </div>

    <!-- 學習進度 Modal -->
    <Teleport to="body">
      <div v-if="showProgressModal" class="progress-modal-overlay" @click.self="showProgressModal = false">
        <div class="progress-modal">
          <div class="pm-header">
            <h3>📊 加州葡萄酒學習進度</h3>
            <button class="pm-close" @click="showProgressModal = false">×</button>
          </div>
          <div class="pm-body">
            <div class="progress-detail-grid">
              <div class="pd-item">
                <div class="pd-label">Level 1 進度</div>
                <div class="pd-value">{{ Math.round(level1Progress) }}%</div>
                <div class="pd-bar"><div :style="{ width: level1Progress + '%' }"></div></div>
              </div>
              <div class="pd-item">
                <div class="pd-label">Level 2 進度</div>
                <div class="pd-value">{{ level2Unlocked ? Math.round(level2Progress) + '%' : '🔒 未解鎖' }}</div>
                <div class="pd-bar" v-if="level2Unlocked"><div :style="{ width: level2Progress + '%' }"></div></div>
              </div>
              <div class="pd-item pd-wide">
                <div class="pd-label">已完成課程</div>
                <div class="pd-value">{{ completedCount }} / {{ totalLessonsCount }} 堂</div>
              </div>
            </div>
            <div class="pm-lesson-list">
              <h4>Level 1 課程進度</h4>
              <div v-for="lesson in level1Lessons" :key="lesson.id" class="pm-lesson-row">
                <span class="pm-lesson-status">{{ isCompleted(lesson.id) ? '✅' : '⭕' }}</span>
                <span class="pm-lesson-title">{{ lesson.title }}</span>
                <span class="pm-lesson-time">{{ lesson.duration }}分</span>
              </div>
            </div>
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
import { californiaLearningState, californiaLearningLevels, californiaLearningActions } from '../../stores/californiaLearningStore.js'
import { supabase } from '../../lib/supabaseClient.js'

const router = useRouter()
const emit = defineEmits(['startLevel', 'openMap', 'openQuiz', 'openNotes', 'backToPage'])

const avatarUrl = ref('')
const avatarInitial = ref('我')
const showProgressModal = ref(false)

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

const level1Lessons = computed(() => californiaLearningLevels.level1?.lessons || [])
const level2Lessons = computed(() => californiaLearningLevels.level2?.lessons || [])
const totalLessonsCount = computed(() => level1Lessons.value.length + level2Lessons.value.length)

function isCompleted(id) {
  return californiaLearningState.completedLessons.includes(id)
}

const level1Progress = computed(() => {
  const lessons = level1Lessons.value
  if (!lessons.length) return 0
  const done = lessons.filter(l => isCompleted(l.id)).length
  return (done / lessons.length) * 100
})

const level2Progress = computed(() => {
  const lessons = level2Lessons.value
  if (!lessons.length) return 0
  const done = lessons.filter(l => isCompleted(l.id)).length
  return (done / lessons.length) * 100
})

const level2Unlocked = computed(() => {
  if (californiaLearningState.testMode) return true
  const finalId = californiaLearningActions.getFinalLessonId(1)
  return finalId != null && californiaLearningState.completedLessons.includes(finalId)
})

const completedCount = computed(() => californiaLearningState.completedLessons.length)
const totalProgressPct = computed(() => {
  const total = totalLessonsCount.value
  if (!total) return 0
  return Math.round((completedCount.value / total) * 100)
})

const heroButtonText = computed(() => {
  if (level1Progress.value >= 100) return '繼續 Level 2 學習'
  if (level1Progress.value > 0) return '繼續學習'
  return '開始我的加州葡萄酒之旅'
})

function startJourney() {
  if (level1Progress.value >= 100 && level2Unlocked.value) {
    emit('startLevel', 2)
  } else {
    emit('startLevel', 1)
  }
}

function getHillStyle(i) {
  const positions = [10, 25, 45, 65, 80]
  const heights = [30, 45, 35, 50, 28]
  return {
    left: positions[i - 1] + '%',
    height: heights[i - 1] + '%',
    animationDelay: (i * 0.3) + 's'
  }
}

function getRayStyle(i) {
  return {
    transform: `rotate(${i * 30}deg)`,
    animationDelay: (i * 0.2) + 's'
  }
}
</script>

<style scoped>
.california-level-selector {
  min-height: 100vh;
  background: linear-gradient(160deg, #1a0a00 0%, #3d1a00 30%, #8B1A1A 60%, #c9a84c 100%);
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
  position: relative;
  overflow: hidden;
}

/* 背景動畫 */
.background-animation {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  opacity: 0.15;
}
.golden-hills {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
}
.hill {
  position: absolute;
  bottom: 0;
  width: 40%;
  background: radial-gradient(ellipse at bottom, #c9a84c 0%, transparent 70%);
  border-radius: 50% 50% 0 0;
  animation: hillSway 6s ease-in-out infinite alternate;
}
@keyframes hillSway {
  from { transform: scaleX(1); }
  to { transform: scaleX(1.05); }
}
.sun-rays {
  position: absolute;
  top: -20%;
  right: -10%;
  width: 60%;
  height: 60%;
}
.ray {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 2px;
  background: linear-gradient(to right, rgba(201,168,76,0.6), transparent);
  transform-origin: 0 50%;
  animation: rayPulse 4s ease-in-out infinite alternate;
}
@keyframes rayPulse {
  from { opacity: 0.3; }
  to { opacity: 0.8; }
}

/* 主容器 */
.main-container {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 16px 60px;
}

/* 品牌頭部 */
.brand-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  border: 1px solid rgba(201, 168, 76, 0.3);
  backdrop-filter: blur(8px);
  flex-wrap: wrap;
  gap: 16px;
}
.brand-logo {
  display: flex;
  align-items: center;
  gap: 16px;
}
.region-icon {
  font-size: 2.5rem;
  filter: drop-shadow(0 0 12px rgba(201,168,76,0.8));
}
.brand-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #f9e9c4;
  margin: 0;
}
.brand-subtitle {
  color: rgba(249, 233, 196, 0.75);
  font-size: 0.85rem;
  margin: 2px 0 0;
}

/* 用戶面板 */
.user-panel {
  display: flex;
  align-items: center;
  gap: 12px;
}
.user-avatar { width: 44px; height: 44px; border-radius: 50%; overflow: hidden; border: 2px solid #c9a84c; }
.ls-avatar-img { width: 100%; height: 100%; object-fit: cover; }
.ls-avatar-initial { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #8B1A1A; color: #f9e9c4; font-weight: 700; font-size: 1.1rem; }
.user-name { color: #f9e9c4; font-size: 0.9rem; font-weight: 600; }
.tier-badge { display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; border-radius: 20px; font-size: 0.72rem; background: rgba(201,168,76,0.2); border: 1px solid rgba(201,168,76,0.4); color: #c9a84c; }
.user-btns { display: flex; gap: 6px; margin-top: 4px; }
.user-action-btn { padding: 5px 10px; border-radius: 6px; border: 1px solid rgba(201,168,76,0.5); background: transparent; color: #f9e9c4; font-size: 0.75rem; cursor: pointer; transition: all 0.2s; }
.user-action-btn:hover { background: rgba(201,168,76,0.2); }

/* 快速導航 */
.quick-nav { margin-bottom: 28px; }
.quick-nav-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.nav-card {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(201,168,76,0.25);
  border-radius: 12px;
  padding: 16px 12px;
  display: flex; flex-direction: column; align-items: center;
  gap: 6px; cursor: pointer;
  transition: all 0.2s;
  color: #f9e9c4;
}
.nav-card:hover { background: rgba(201,168,76,0.15); border-color: rgba(201,168,76,0.5); transform: translateY(-2px); }
.nav-icon { font-size: 1.5rem; }
.nav-title { font-size: 0.85rem; font-weight: 600; }
.nav-desc { font-size: 0.72rem; color: rgba(249,233,196,0.65); text-align: center; }

/* 等級選擇區 */
.levels-section { margin-bottom: 28px; }
.section-header {
  display: flex; justify-content: space-between; align-items: flex-start;
  margin-bottom: 20px; flex-wrap: wrap; gap: 12px;
}
.section-header h2 { color: #f9e9c4; font-size: 1.4rem; margin: 0; }
.section-header p { color: rgba(249,233,196,0.7); font-size: 0.88rem; margin: 4px 0 0; }
.section-btn {
  background: linear-gradient(135deg, #8B1A1A 0%, #c9a84c 100%);
  color: white; border: none; padding: 10px 24px; border-radius: 10px;
  font-size: 0.9rem; font-weight: 600; cursor: pointer;
  transition: all 0.2s;
}
.section-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 16px rgba(139,26,26,0.4); }

.levels-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

/* 等級卡片 */
.level-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(201,168,76,0.25);
  border-radius: 16px; overflow: hidden;
  transition: all 0.3s; cursor: pointer; position: relative;
}
.level-card:hover:not(.locked) { transform: translateY(-4px); border-color: rgba(201,168,76,0.6); box-shadow: 0 8px 32px rgba(0,0,0,0.3); }
.level-card.locked { opacity: 0.7; cursor: not-allowed; }
.card-accent-bar { height: 4px; background: linear-gradient(90deg, #8B1A1A, #c9a84c); }
.level-1 .card-accent-bar { background: linear-gradient(90deg, #8B1A1A, #c9580e); }
.level-2 .card-accent-bar { background: linear-gradient(90deg, #c9a84c, #f0d060); }

.level-header { display: flex; align-items: center; gap: 14px; padding: 16px 20px 8px; }
.level-badge {
  width: 52px; height: 52px; background: rgba(139,26,26,0.4); border: 2px solid rgba(201,168,76,0.5);
  border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center;
}
.level-number { font-size: 0.65rem; font-weight: 700; color: #c9a84c; line-height: 1; }
.level-icon { font-size: 1.3rem; }
.level-title-group h3 { color: #f9e9c4; font-size: 1.05rem; margin: 0; }
.level-title-group p { color: rgba(249,233,196,0.6); font-size: 0.78rem; margin: 2px 0 0; }

.level-content { padding: 8px 20px 16px; }
.level-description { color: rgba(249,233,196,0.8); font-size: 0.84rem; line-height: 1.6; margin: 0 0 12px; }
.level-features { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 14px; }
.feature-item { display: flex; align-items: center; gap: 6px; font-size: 0.78rem; color: rgba(249,233,196,0.75); }
.feature-icon { font-size: 0.9rem; }

.level-stats { display: flex; gap: 16px; margin-bottom: 12px; }
.stat-item { text-align: center; }
.stat-number { display: block; font-size: 1.2rem; font-weight: 700; color: #c9a84c; }
.stat-label { display: block; font-size: 0.7rem; color: rgba(249,233,196,0.6); }

.progress-bar-wrap { margin-bottom: 4px; }
.progress-bar-track { height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; }
.progress-bar-fill { height: 100%; background: linear-gradient(90deg, #8B1A1A, #c9a84c); border-radius: 3px; transition: width 0.5s ease; }
.l2-fill { background: linear-gradient(90deg, #c9a84c, #f0d060); }

.level-action { padding: 0 20px 16px; }
.level-btn {
  width: 100%; padding: 10px 16px;
  background: linear-gradient(135deg, #8B1A1A 0%, #c9580e 100%);
  color: white; border: none; border-radius: 10px;
  font-size: 0.88rem; font-weight: 600; cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  transition: all 0.2s;
}
.level-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(139,26,26,0.4); }
.level-btn:disabled { opacity: 0.5; cursor: not-allowed; background: rgba(255,255,255,0.1); }
.btn-arrow { font-size: 1rem; }

/* 鎖定遮罩 */
.lock-overlay {
  position: absolute; inset: 0;
  background: rgba(0,0,0,0.5); backdrop-filter: blur(2px);
  display: flex; align-items: center; justify-content: center; border-radius: 16px;
}
.lock-content { text-align: center; }
.lock-icon { font-size: 2rem; display: block; margin-bottom: 8px; }
.lock-content p { color: rgba(255,255,255,0.8); font-size: 0.85rem; margin: 0; }

/* 亮點橫列 */
.course-highlights {
  display: flex; gap: 16px; flex-wrap: wrap; justify-content: center;
  padding: 20px 0; border-top: 1px solid rgba(201,168,76,0.2);
  margin-bottom: 16px;
}
.highlight-item { display: flex; align-items: center; gap: 10px; }
.hl-icon { font-size: 1.4rem; }
.hl-text strong { display: block; color: #f9e9c4; font-size: 0.9rem; }
.hl-text span { color: rgba(249,233,196,0.6); font-size: 0.78rem; }

/* 登入提示 */
.sync-hint-bar {
  background: rgba(201,168,76,0.15); border: 1px solid rgba(201,168,76,0.3);
  border-radius: 10px; padding: 10px 16px;
  color: rgba(249,233,196,0.85); font-size: 0.82rem; text-align: center;
}

/* Progress Modal */
.progress-modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 1000;
  display: flex; align-items: center; justify-content: center; padding: 16px;
}
.progress-modal {
  background: #1a0a00; border: 1px solid rgba(201,168,76,0.4); border-radius: 16px;
  width: 100%; max-width: 500px; max-height: 80vh; overflow-y: auto;
}
.pm-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 20px; border-bottom: 1px solid rgba(201,168,76,0.2);
}
.pm-header h3 { color: #f9e9c4; margin: 0; font-size: 1rem; }
.pm-close { background: none; border: none; color: rgba(249,233,196,0.7); font-size: 1.3rem; cursor: pointer; }
.pm-body { padding: 16px 20px; }
.progress-detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px; }
.pd-item { background: rgba(255,255,255,0.05); border-radius: 8px; padding: 12px; }
.pd-wide { grid-column: span 2; }
.pd-label { color: rgba(249,233,196,0.6); font-size: 0.75rem; margin-bottom: 4px; }
.pd-value { color: #c9a84c; font-size: 1.1rem; font-weight: 700; margin-bottom: 6px; }
.pd-bar { height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden; }
.pd-bar div { height: 100%; background: linear-gradient(90deg, #8B1A1A, #c9a84c); }
.pm-lesson-list h4 { color: #f9e9c4; font-size: 0.88rem; margin: 0 0 10px; }
.pm-lesson-row { display: flex; align-items: center; gap: 10px; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
.pm-lesson-status { font-size: 0.9rem; }
.pm-lesson-title { flex: 1; color: rgba(249,233,196,0.85); font-size: 0.82rem; }
.pm-lesson-time { color: rgba(249,233,196,0.5); font-size: 0.75rem; }

/* 響應式 */
@media (max-width: 768px) {
  .levels-grid { grid-template-columns: 1fr; }
  .quick-nav-grid { grid-template-columns: repeat(2, 1fr); }
  .brand-header { flex-direction: column; }
  .level-features { grid-template-columns: 1fr; }
}
</style>
