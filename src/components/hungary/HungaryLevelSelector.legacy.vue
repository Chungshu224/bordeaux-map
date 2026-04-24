<template>
  <div class="hu-level-selector">
    <!-- 背景動畫 -->
    <div class="bg-anim">
      <div class="wine-waves">
        <div v-for="i in 4" :key="`wave-${i}`" class="wave" :style="getWaveStyle(i)"></div>
      </div>
      <div class="gold-particles">
        <div v-for="i in 20" :key="`p-${i}`" class="particle" :style="getParticleStyle(i)"></div>
      </div>
    </div>

    <div class="main-container">

      <!-- ── 品牌頭部 ── -->
      <header class="brand-header">
        <div class="brand-logo">
          <div class="hu-icon">🇭🇺</div>
          <div class="brand-text">
            <h1 class="brand-title">匈牙利葡萄酒</h1>
            <p class="brand-subtitle">Hungarian Wine · 托卡伊的傳奇，喀爾巴阡的風土</p>
          </div>
        </div>

        <div class="user-panel">
          <template v-if="authUser">
            <div class="user-avatar">
              <img v-if="avatarUrl" :src="avatarUrl" class="avatar-img" />
              <span v-else class="avatar-initial">{{ avatarInitial }}</span>
            </div>
            <div class="user-info">
              <span class="user-name">{{ displayName }}</span>
              <div class="tier-badge" :class="`tier-${userTier}`">
                <span>{{ tierInfo.icon }}</span>
                <span>{{ tierInfo.label }}</span>
              </div>
              <div class="user-btns">
                <button class="u-btn home" @click="router.push('/')">🏠 首頁</button>
                <button class="u-btn logout" @click="handleLogout">登出</button>
              </div>
            </div>
          </template>
          <template v-else>
            <button class="u-btn login" @click="router.push('/login')">🔑 登入</button>
          </template>
        </div>
      </header>

      <!-- ── 快速入口 ── -->
      <section class="quick-nav">
        <div class="quick-grid">
          <button class="nav-card game-card" @click="emit('openGames')">
            <span class="nav-icon">🎮</span>
            <span class="nav-title">互動練習</span>
            <span class="nav-desc">產區競答・品種配對・托卡伊識別</span>
          </button>
          <button class="nav-card map-card" @click="emit('openMap')">
            <span class="nav-icon">🗺️</span>
            <span class="nav-title">探索地圖</span>
            <span class="nav-desc">22 個法定產區互動地圖</span>
          </button>
          <button class="nav-card achievement-card" @click="showAchievementModal = true">
            <span class="nav-icon">🏆</span>
            <span class="nav-title">成就系統</span>
            <span class="nav-desc">查看已解鎖成就與積分等級</span>
          </button>
          <button class="nav-card progress-card" @click="showProgressModal = true">
            <span class="nav-icon">📊</span>
            <span class="nav-title">學習進度</span>
            <span class="nav-desc">{{ totalProgressPct }}% 完成・{{ completedLessons.length }} 課</span>
          </button>
          <button class="nav-card notebook-card" @click="emit('openNotebook')">
            <span class="nav-icon">📔</span>
            <span class="nav-title">品飲筆記</span>
            <span class="nav-desc">記錄品飲體驗・托卡伊風味・年份筆記</span>
          </button>
        </div>
      </section>

      <!-- ── 課程階段 ── -->
      <section class="levels-section">
        <div class="section-header">
          <div class="section-title-group">
            <h2>選擇課程階段</h2>
            <p>從匈牙利葡萄酒入門到深度專業，系統化掌握中歐頂級葡萄酒知識。</p>
          </div>
          <div class="section-actions">
            <button class="section-btn" @click="startJourney">{{ heroButtonText }}</button>
          </div>
        </div>

        <div class="levels-grid">

          <!-- Level 1 -->
          <div
            class="level-card level-1"
            :class="{
              'in-progress': levelProgress(1) > 0 && levelProgress(1) < 100,
              'completed': levelProgress(1) >= 100
            }"
            @click="emit('enterLevel', 1)"
          >
            <div class="card-accent-bar l1-bar"></div>
            <div class="level-header">
              <div class="level-badge l1-badge">
                <span class="level-number">1</span>
                <div class="level-icon">🌱</div>
              </div>
              <div class="level-title-group">
                <h3>匈牙利葡萄酒入門</h3>
                <p>Level 1 · 基礎認識</p>
              </div>
            </div>
            <div class="level-content">
              <p class="level-desc">建立匈牙利葡萄酒的完整基礎：歷史地理、主要品種、五大產區群，以及托卡伊 Aszú 貴腐甜酒的傳奇世界。</p>
              <div class="level-features">
                <div class="feat-item"><span class="feat-icon">🏰</span><span>匈牙利葡萄酒歷史與王室傳說</span></div>
                <div class="feat-item"><span class="feat-icon">🗺️</span><span>喀爾巴阡盆地・22 個法定產區</span></div>
                <div class="feat-item"><span class="feat-icon">🍇</span><span>Furmint・Hárslevelű・Kékfrankos 品種解析</span></div>
                <div class="feat-item"><span class="feat-icon">🍯</span><span>托卡伊 Aszú 貴腐甜酒深度探索</span></div>
              </div>
              <div class="level-stats">
                <div class="stat-item">
                  <span class="stat-num">4</span>
                  <span class="stat-label">個模組</span>
                </div>
                <div class="stat-item">
                  <span class="stat-num">8</span>
                  <span class="stat-label">堂課程</span>
                </div>
                <div class="stat-item">
                  <span class="stat-num">{{ Math.round(levelProgress(1)) }}%</span>
                  <span class="stat-label">完成度</span>
                </div>
              </div>
              <div class="progress-wrap">
                <div class="progress-track">
                  <div class="progress-fill l1-fill" :style="{ width: `${levelProgress(1)}%` }"></div>
                </div>
              </div>
            </div>
            <div class="level-action">
              <button class="level-btn l1-btn" @click.stop="emit('enterLevel', 1)">
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
            :class="{
              'locked': !isLevelUnlocked(2),
              'in-progress': levelProgress(2) > 0 && levelProgress(2) < 100
            }"
            @click="isLevelUnlocked(2) && emit('enterLevel', 2)"
          >
            <div class="card-accent-bar l2-bar"></div>
            <div class="lock-overlay" v-if="!isLevelUnlocked(2)">
              <div class="lock-content">
                <div class="lock-icon">🔒</div>
                <p class="lock-msg">完成 Level 1 後解鎖</p>
              </div>
            </div>
            <div class="level-header">
              <div class="level-badge l2-badge">
                <span class="level-number">2</span>
                <div class="level-icon">🏆</div>
              </div>
              <div class="level-title-group">
                <h3>匈牙利葡萄酒進階</h3>
                <p>Level 2 · 深度探索</p>
              </div>
            </div>
            <div class="level-content">
              <p class="level-desc">深入各產區風土、頂級酒莊與年份差異，托卡伊精品酒莊、維拉尼頂級紅酒，以及盲品匈牙利葡萄酒的專業技巧。</p>
              <div class="level-features">
                <div class="feat-item"><span class="feat-icon">🏯</span><span>托卡伊頂級酒莊 Royal Tokaji / Oremus 解析</span></div>
                <div class="feat-item"><span class="feat-icon">🍷</span><span>維拉尼頂級紅酒與埃格爾公牛血</span></div>
                <div class="feat-item"><span class="feat-icon">📅</span><span>年份差異分析與傳奇年份評鑑</span></div>
                <div class="feat-item"><span class="feat-icon">🎯</span><span>盲品匈牙利葡萄酒的思維框架</span></div>
              </div>
              <div class="level-stats">
                <div class="stat-item">
                  <span class="stat-num">3</span>
                  <span class="stat-label">個模組</span>
                </div>
                <div class="stat-item">
                  <span class="stat-num">6</span>
                  <span class="stat-label">堂課程</span>
                </div>
                <div class="stat-item">
                  <span class="stat-num">{{ Math.round(levelProgress(2)) }}%</span>
                  <span class="stat-label">完成度</span>
                </div>
              </div>
              <div class="progress-wrap">
                <div class="progress-track">
                  <div class="progress-fill l2-fill" :style="{ width: `${levelProgress(2)}%` }"></div>
                </div>
              </div>
            </div>
            <div class="level-action">
              <button class="level-btn l2-btn" :disabled="!isLevelUnlocked(2)" @click.stop="isLevelUnlocked(2) && emit('enterLevel', 2)">
                <template v-if="!isLevelUnlocked(2)">🔒 完成 Level 1 解鎖</template>
                <template v-else-if="levelProgress(2) >= 100">重新學習</template>
                <template v-else-if="levelProgress(2) > 0">繼續學習</template>
                <template v-else>開始學習</template>
                <span v-if="isLevelUnlocked(2)" class="btn-arrow">→</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      <!-- ── 匈牙利葡萄酒概覽 ── -->
      <section class="overview-section">
        <div class="ov-header">
          <h2>為什麼學習匈牙利葡萄酒？</h2>
        </div>
        <div class="ov-grid">
          <div v-for="item in overviewItems" :key="item.title" class="ov-card">
            <div class="ov-icon">{{ item.icon }}</div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </section>

    </div>

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
                  fill="none" stroke="#c8102e" stroke-width="3"
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
                <span class="pm-num">14</span>
                <span class="pm-lbl">總課程數</span>
              </div>
            </div>
          </div>
          <div class="pm-levels">
            <div v-for="lvl in [1, 2]" :key="lvl" class="pm-level-row">
              <div class="pm-level-label">Level {{ lvl }}</div>
              <div class="pm-progress-bar">
                <div class="pm-bar-fill" :style="{ width: `${levelProgress(lvl)}%`, background: lvl === 1 ? '#c8102e' : '#f5a800' }"></div>
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

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { authState, authActions } from '../../stores/authStore.js'
import { hungaryLearningState, hungaryLearningLevels } from '../../stores/hungaryLearningStore.js'
import { supabase } from '../../lib/supabaseClient.js'
import AchievementsDashboard from '../AchievementsDashboard.vue'

const router = useRouter()
const emit = defineEmits(['enterLevel', 'openMap', 'openGames', 'openNotebook'])

// 用戶資訊
const avatarUrl = ref('')
const avatarInitial = ref('我')
const showProgressModal = ref(false)
const showAchievementModal = ref(false)

const authUser = computed(() => authState.user)
const displayName = computed(() => authActions.getDisplayName())

const TIER_INFO = {
  free:    { label: '品飲新手 Explorer',     icon: '🌱' },
  basic:   { label: '進階愛好者 Enthusiast', icon: '🍇' },
  premium: { label: '專業達人 Professional', icon: '🏆' }
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

// 課程進度計算
const completedLessons = computed(() => hungaryLearningState.completedLessons)

const LEVEL_LESSON_IDS = {
  1: (hungaryLearningLevels.level1?.lessons || []).map(l => l.id),
  2: (hungaryLearningLevels.level2?.lessons || []).map(l => l.id),
}

function levelProgress(n) {
  const ids = LEVEL_LESSON_IDS[n] || []
  if (!ids.length) return 0
  const done = completedLessons.value.filter(id => ids.includes(id)).length
  return (done / ids.length) * 100
}

const totalProgressPct = computed(() => {
  const allIds = [...(LEVEL_LESSON_IDS[1] || []), ...(LEVEL_LESSON_IDS[2] || [])]
  if (!allIds.length) return 0
  return Math.round((completedLessons.value.length / allIds.length) * 100)
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

function startJourney() {
  if (levelProgress(1) >= 100 && isLevelUnlocked(2)) {
    emit('enterLevel', 2)
  } else {
    emit('enterLevel', 1)
  }
}

// 概覽卡片
const overviewItems = [
  { icon: '👑', title: '帝國御用美酒', desc: '托卡伊 Aszú 曾是哈布斯堡王朝與法國皇室御用，彼得大帝、腓特烈大帝都是愛好者。' },
  { icon: '🍯', title: '全球最早甜酒分級', desc: '1730 年匈牙利建立世界第一個官方葡萄酒分級系統，比波爾多 1855 年早 125 年。' },
  { icon: '🌋', title: '火山土壤的奇蹟', desc: '托卡伊的流紋岩土壤賦予 Furmint 獨特礦石感，加之貴腐菌造就無與倫比的複雜度。' },
  { icon: '🍷', title: '紅酒的公牛血傳說', desc: '埃格爾的 Bikavér（公牛血）是匈牙利最知名的紅酒，混釀 Kékfrankos 等多個品種。' },
  { icon: '🌿', title: '原生品種的寶庫', desc: '匈牙利擁有 Furmint、Hárslevelű、Olaszrizling 等稀有原生品種，無法在其他地方找到。' },
  { icon: '📈', title: '新世代崛起', desc: '後共產時代的現代化浪潮，年輕一代釀酒師以干型 Furmint 與天然酒重新定義匈牙利葡萄酒形象。' },
]

// 背景動畫
function getWaveStyle(i) {
  const colors = [
    'rgba(200,16,46,0.35)',
    'rgba(180,10,30,0.25)',
    'rgba(160,5,20,0.18)',
    'rgba(140,2,15,0.12)',
  ]
  return {
    background: colors[i - 1],
    animationDelay: `${(i - 1) * 4}s`,
    animationDuration: `${18 + i * 4}s`,
    bottom: `${(i - 1) * 5}%`,
    height: `${25 + i * 6}%`,
  }
}
function getParticleStyle(i) {
  const seed = i * 137.5
  return {
    left: `${(seed * 7.3) % 100}%`,
    top: `${(seed * 3.7) % 80}%`,
    animationDelay: `${(seed % 5).toFixed(1)}s`,
    animationDuration: `${4 + (seed % 4)}s`,
    width: `${2 + (seed % 3)}px`,
    height: `${2 + (seed % 3)}px`,
    opacity: 0.3 + (seed % 5) / 12,
  }
}
</script>

<style scoped>
/* ===============================================
   HungaryLevelSelector — 匈牙利葡萄酒課程首頁
   Colors: 紅 #c8102e / 金 #f5a800 / 深暗背景
   =============================================== */

.hu-level-selector {
  min-height: 100vh;
  background: linear-gradient(160deg,
    #1a0005 0%,
    #2d000a 18%,
    #3d0010 38%,
    #2a0008 58%,
    #1a0005 100%
  );
  position: relative;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
}

/* ── 背景動畫 ── */
.bg-anim { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }

.wine-waves { position: absolute; bottom: 0; left: 0; right: 0; height: 65%; }
.wave {
  position: absolute;
  left: -5%; width: 110%;
  border-radius: 50% 50% 0 0 / 30% 30% 0 0;
  animation: wave-breathe ease-in-out infinite alternate;
}
@keyframes wave-breathe {
  0%   { transform: scaleX(1) translateY(0); }
  100% { transform: scaleX(1.02) translateY(-5px); }
}

.gold-particles { position: absolute; inset: 0; }
.particle {
  position: absolute;
  background: #f5a800;
  border-radius: 50%;
  animation: particle-glow ease-in-out infinite alternate;
}
@keyframes particle-glow {
  0%   { opacity: 0.1; transform: scale(0.8); }
  100% { opacity: 0.7; transform: scale(1.3); }
}

/* ── 主容器 ── */
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

/* ── 品牌頭部 ── */
.brand-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.97);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 2px 8px rgba(200,16,46,0.2);
}
.brand-logo { display: flex; align-items: center; gap: 1.25rem; }
.hu-icon { font-size: 3rem; line-height: 1; filter: drop-shadow(0 4px 8px rgba(200,16,46,0.3)); }
.brand-title {
  font-size: 2rem; font-weight: 800; margin: 0 0 0.2rem;
  background: linear-gradient(135deg, #c8102e, #f5a800);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.brand-subtitle { font-size: 0.88rem; color: #666; margin: 0; }

/* 用戶面板 */
.user-panel   { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; }
.user-avatar  {
  width: 44px; height: 44px; border-radius: 50%;
  border: 2.5px solid rgba(200,16,46,0.4);
  display: flex; align-items: center; justify-content: center; overflow: hidden;
}
.avatar-img { width: 100%; height: 100%; object-fit: cover; display: block; }
.avatar-initial { font-size: 1.2rem; font-weight: 700; color: #c8102e; }
.user-info { display: flex; flex-direction: column; align-items: flex-end; gap: 0.3rem; }
.user-name { font-size: 0.9rem; font-weight: 600; color: #2c3e50; max-width: 130px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tier-badge {
  display: flex; align-items: center; gap: 0.25rem;
  padding: 0.2rem 0.6rem; border-radius: 20px;
  font-size: 0.72rem; font-weight: 700; white-space: nowrap;
  border: 1.5px solid rgba(200,16,46,0.4); color: #c8102e; background: rgba(200,16,46,0.06);
}
.tier-badge.tier-premium { color: #b45309; border-color: rgba(180,83,9,0.4); background: rgba(180,83,9,0.06); }
.tier-badge.tier-basic   { color: #7c3aed; border-color: rgba(124,58,237,0.4); background: rgba(124,58,237,0.06); }
.user-btns { display: flex; gap: 0.4rem; }
.u-btn {
  padding: 0.35rem 0.9rem; border: none; border-radius: 20px;
  font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: inherit;
}
.u-btn.home   { background: rgba(200,16,46,0.07); color: #c8102e; border: 1.5px solid rgba(200,16,46,0.3); }
.u-btn.home:hover { background: rgba(200,16,46,0.15); }
.u-btn.logout { background: rgba(239,68,68,0.07); color: #dc2626; border: 1px solid rgba(239,68,68,0.3); }
.u-btn.logout:hover { background: rgba(239,68,68,0.15); }
.u-btn.login  { background: linear-gradient(135deg, #c8102e, #f5a800); color: white; padding: 0.5rem 1.2rem; }
.u-btn.login:hover { opacity: 0.9; transform: translateY(-1px); }

/* ── 快速入口 ── */
.quick-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.nav-card {
  display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
  padding: 1.2rem 1rem; border: none; border-radius: 16px;
  cursor: pointer; font-family: inherit; transition: all 0.25s; text-align: center;
  backdrop-filter: blur(10px); color: white;
}
.nav-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.25); }
.coming-soon-card {
  background: rgba(255,255,255,0.12) !important;
  opacity: 0.55;
  cursor: default;
  position: relative;
}
.coming-soon-card:hover { transform: none !important; box-shadow: none !important; }
.cs-badge {
  position: absolute;
  top: 6px; right: 8px;
  font-size: 0.6rem; font-weight: 700;
  background: rgba(255,255,255,0.25);
  color: #fff;
  padding: 2px 6px;
  border-radius: 6px;
  letter-spacing: 0.04em;
  pointer-events: none;
}
.map-card        { background: linear-gradient(135deg, rgba(200,16,46,0.75), rgba(140,10,32,0.75)); }
.progress-card   { background: linear-gradient(135deg, rgba(245,168,0,0.75), rgba(180,115,0,0.75)); color: #1a0a00; }
.game-card       { background: linear-gradient(135deg, rgba(67,56,130,0.75), rgba(45,38,90,0.75)); }
.achievement-card{ background: linear-gradient(135deg, rgba(180,83,9,0.75), rgba(120,55,5,0.75)); }
.notebook-card   { background: linear-gradient(135deg, rgba(15,118,110,0.75), rgba(8,80,74,0.75)); }
.tokaji-card     { background: linear-gradient(135deg, rgba(120,60,0,0.75), rgba(80,40,0,0.75)); }
.variety-card    { background: linear-gradient(135deg, rgba(60,100,30,0.75), rgba(40,70,20,0.75)); }
.nav-icon  { font-size: 1.8rem; }
.nav-title { font-size: 0.9rem; font-weight: 800; }
.nav-desc  { font-size: 0.72rem; opacity: 0.85; line-height: 1.4; }

/* ── 課程階段 ── */
.levels-section { display: flex; flex-direction: column; gap: 1.25rem; }

.section-header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 1.25rem 1.75rem;
  background: rgba(255,255,255,0.95); border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}
.section-title-group h2 { font-size: 1.4rem; font-weight: 800; color: #1a0a00; margin: 0 0 0.3rem; }
.section-title-group p  { font-size: 0.88rem; color: #666; margin: 0; }
.section-btn {
  padding: 0.65rem 1.6rem; border: none; border-radius: 12px; cursor: pointer;
  font-size: 0.95rem; font-weight: 700; font-family: inherit;
  background: linear-gradient(135deg, #c8102e, #f5a800); color: white;
  box-shadow: 0 4px 16px rgba(200,16,46,0.35); transition: all 0.2s;
}
.section-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(200,16,46,0.45); }

.levels-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }

/* 課程卡片 */
.level-card {
  background: rgba(255,255,255,0.97);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  transition: all 0.3s ease;
  cursor: pointer;
}
.level-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.22); }
.level-card.locked { cursor: default; opacity: 0.72; }
.level-card.locked:hover { transform: none; box-shadow: 0 8px 32px rgba(0,0,0,0.18); }
.level-card.in-progress { box-shadow: 0 8px 32px rgba(200,16,46,0.25); }
.level-card.completed   { box-shadow: 0 8px 32px rgba(245,168,0,0.3); }

.card-accent-bar { height: 6px; width: 100%; }
.l1-bar { background: linear-gradient(90deg, #c8102e, #e84060); }
.l2-bar { background: linear-gradient(90deg, #f5a800, #ffc940); }

.lock-overlay {
  position: absolute; inset: 0; z-index: 10;
  background: rgba(20,0,5,0.45); display: flex; align-items: center; justify-content: center;
  backdrop-filter: blur(3px);
}
.lock-content { text-align: center; }
.lock-icon { font-size: 2.5rem; margin-bottom: 0.5rem; }
.lock-msg  { color: white; font-size: 1rem; font-weight: 700; text-shadow: 0 2px 8px rgba(0,0,0,0.5); }

.level-header {
  display: flex; align-items: center; gap: 1rem;
  padding: 1.25rem 1.5rem 0.75rem;
}
.level-badge {
  width: 52px; height: 52px; border-radius: 14px; flex-shrink: 0;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  color: white; font-weight: 900;
}
.l1-badge { background: linear-gradient(135deg, #c8102e, #e84060); }
.l2-badge { background: linear-gradient(135deg, #f5a800, #ffc940); color: #1a0a00; }
.level-number { font-size: 1.25rem; line-height: 1; }
.level-icon   { font-size: 0.9rem; }
.level-title-group h3 { font-size: 1.1rem; font-weight: 800; color: #1a0005; margin: 0 0 0.2rem; }
.level-title-group p  { font-size: 0.78rem; color: #888; margin: 0; }

.level-content { padding: 0 1.5rem; }
.level-desc { font-size: 0.88rem; color: #444; line-height: 1.6; margin: 0 0 0.75rem; }
.level-features { display: flex; flex-direction: column; gap: 0.35rem; margin-bottom: 0.75rem; }
.feat-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.83rem; color: #555; }
.feat-icon { font-size: 0.95rem; flex-shrink: 0; }

.level-stats { display: flex; gap: 1.25rem; margin-bottom: 0.6rem; }
.stat-item { text-align: center; }
.stat-num   { display: block; font-size: 1.2rem; font-weight: 900; color: #c8102e; }
.stat-label { font-size: 0.72rem; color: #888; }

.progress-wrap { margin-bottom: 1rem; }
.progress-track {
  height: 6px; background: #f0f0f0; border-radius: 9999px; overflow: hidden;
}
.progress-fill { height: 100%; border-radius: 9999px; transition: width 0.6s ease; }
.l1-fill { background: linear-gradient(90deg, #c8102e, #e84060); }
.l2-fill { background: linear-gradient(90deg, #f5a800, #ffc940); }

.level-action { padding: 0.75rem 1.5rem 1.25rem; }
.level-btn {
  width: 100%; padding: 0.7rem 1.5rem; border: none; border-radius: 12px;
  font-size: 0.92rem; font-weight: 700; cursor: pointer; font-family: inherit;
  display: flex; align-items: center; justify-content: center; gap: 0.5rem;
  transition: all 0.2s; color: white;
}
.l1-btn { background: linear-gradient(135deg, #c8102e, #e84060); }
.l1-btn:hover { box-shadow: 0 6px 20px rgba(200,16,46,0.45); transform: translateY(-1px); }
.l2-btn { background: linear-gradient(135deg, #f5a800, #ffc940); color: #1a0a00; }
.l2-btn:hover:not(:disabled) { box-shadow: 0 6px 20px rgba(245,168,0,0.45); transform: translateY(-1px); }
.l2-btn:disabled { background: #ddd; color: #999; cursor: not-allowed; }
.btn-arrow { font-size: 1rem; transition: transform 0.2s; }
.level-btn:hover:not(:disabled) .btn-arrow { transform: translateX(4px); }

/* ── 概覽區塊 ── */
.overview-section {
  background: rgba(255,255,255,0.95); border-radius: 20px;
  padding: 1.75rem; box-shadow: 0 4px 20px rgba(0,0,0,0.12);
}
.ov-header h2 { font-size: 1.3rem; font-weight: 800; color: #1a0005; margin: 0 0 1.25rem; }
.ov-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;
}
.ov-card {
  padding: 1rem; border-radius: 14px;
  background: linear-gradient(135deg, rgba(200,16,46,0.04), rgba(245,168,0,0.04));
  border: 1px solid rgba(200,16,46,0.12);
}
.ov-icon { font-size: 1.75rem; margin-bottom: 0.5rem; }
.ov-card h4 { font-size: 0.9rem; font-weight: 700; color: #c8102e; margin: 0 0 0.35rem; }
.ov-card p  { font-size: 0.8rem; color: #555; line-height: 1.55; margin: 0; }

/* ── 進度彈窗 ── */
.modal-backdrop {
  position: fixed; inset: 0; background: rgba(0,0,0,0.55);
  display: flex; align-items: center; justify-content: center; z-index: 9999;
}
.progress-modal {
  background: white; border-radius: 20px; padding: 2rem;
  max-width: 420px; width: 90%; position: relative;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}
.modal-close {
  position: absolute; top: 1rem; right: 1rem;
  background: none; border: none; font-size: 1.2rem; cursor: pointer; color: #999;
}
.modal-close:hover { color: #333; }
.progress-modal h2 { font-size: 1.25rem; font-weight: 800; color: #1a0005; margin: 0 0 1.25rem; }
.pm-overall { display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1.5rem; }
.pm-circle  { position: relative; width: 80px; height: 80px; flex-shrink: 0; }
.pm-svg { transform: rotate(-90deg); }
.pm-pct {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; font-weight: 900; color: #c8102e;
}
.pm-summary { display: flex; gap: 1.5rem; }
.pm-stat { text-align: center; }
.pm-num { display: block; font-size: 1.5rem; font-weight: 900; color: #c8102e; }
.pm-lbl { font-size: 0.78rem; color: #888; }
.pm-levels { display: flex; flex-direction: column; gap: 0.75rem; }
.pm-level-row { display: flex; align-items: center; gap: 0.75rem; }
.pm-level-label { font-size: 0.85rem; font-weight: 700; color: #444; width: 52px; }
.pm-progress-bar { flex: 1; height: 8px; background: #f0f0f0; border-radius: 9999px; overflow: hidden; }
.pm-bar-fill { height: 100%; border-radius: 9999px; transition: width 0.6s ease; }
.pm-pct-label { font-size: 0.82rem; font-weight: 700; color: #666; width: 36px; text-align: right; }

/* ── RWD ── */
@media (max-width: 768px) {
  .main-container { padding: 1rem; }
  .brand-header { flex-direction: column; gap: 1rem; align-items: flex-start; }
  .user-panel   { align-self: flex-end; }
  .quick-grid   { grid-template-columns: repeat(2, 1fr); }
  .levels-grid  { grid-template-columns: 1fr; }
  .ov-grid      { grid-template-columns: repeat(2, 1fr); }
  .section-header { flex-direction: column; gap: 0.75rem; align-items: flex-start; }
}
@media (max-width: 480px) {
  .ov-grid    { grid-template-columns: 1fr; }
  .quick-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) {
  /* 成就 modal 改為底部抽屜 */
  .modal-backdrop { padding: 0; align-items: flex-end; }
  .achievement-modal { width: 100%; border-radius: 20px 20px 0 0; max-height: 92vh; }
  .achievement-modal-header { border-radius: 20px 20px 0 0; padding: 0.75rem 1rem; }
}

/* ── 成就彈窗容器 ── */
.achievement-modal {
  background: white;
  width: 92%;
  max-width: 900px;
  max-height: 88vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}
.achievement-modal-header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #eee;
  background: #f8f9fa;
  border-radius: 20px 20px 0 0;
  flex-shrink: 0;
}
.achievement-modal-header h3 { margin: 0; font-size: 1.1rem; color: #1a0005; }
.achievement-modal-body { flex: 1; overflow-y: auto; }
.achievement-modal .modal-close {
  background: none; border: none; font-size: 1.4rem;
  cursor: pointer; color: #666; line-height: 1;
  padding: 0 0.25rem; position: static;
}
.achievement-modal .modal-close:hover { color: #333; }
</style>
