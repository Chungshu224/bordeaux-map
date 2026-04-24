<template>
  <div class="spain-level-selector">
    <!-- 背景裝飾泡泡 -->
    <div class="bg-bubbles">
      <div v-for="i in 18" :key="i" class="bubble" :style="bubbleStyle(i)"></div>
    </div>

    <div class="main-container">

      <!-- ── 品牌 Header ──────────────────────────────────── -->
      <header class="brand-header">
        <div class="brand-logo">
          <div class="flag-big">🇪🇸</div>
          <div class="brand-text">
            <h1 class="brand-title">侍酒師的筆記本</h1>
            <p class="brand-sub">The Sommelier's Notebook</p>
          </div>
        </div>
        <div class="header-btns">
          <div v-if="authUser" class="user-avatar">
            <img v-if="avatarUrl" :src="avatarUrl" class="ls-avatar-img" />
            <span v-else class="ls-avatar-initial">{{ avatarInitial }}</span>
          </div>
          <button class="hdr-btn ghost" @click="router.push('/')">🏠 首頁</button>
          <button v-if="authUser" class="hdr-btn ghost" @click="handleLogout">登出</button>
        </div>
      </header>

      <!-- ── 快速功能入口 ──────────────────────────────────── -->
      <section class="quick-nav">
        <div class="quick-grid">
          <button class="nav-card games-card" @click="$emit('openGames')">
            <span class="nc-icon">🎮</span>
            <span class="nc-title">互動練習</span>
            <span class="nc-desc">產區歸屬・品種配對・雪莉識別・分級辨識・年份排序</span>
          </button>
          <button class="nav-card map-card" @click="$emit('openMap')">
            <span class="nc-icon">🗺️</span>
            <span class="nc-title">探索地圖</span>
            <span class="nc-desc">互動式衛星地圖・96 個法定產區・DO / DOCa / VP</span>
          </button>
          <button class="nav-card achievement-card" @click="showAchievements = true">
            <span class="nc-icon">🏆</span>
            <span class="nc-title">成就系統</span>
            <span class="nc-desc">查看已解鎖成就與積分等級</span>
          </button>
          <button class="nav-card progress-card" @click="showProgress = true">
            <span class="nc-icon">📊</span>
            <span class="nc-title">學習進度</span>
            <span class="nc-desc">各階段進度、完成分析與學習統計</span>
          </button>
          <button class="nav-card notebook-card" @click="$emit('openNotebook')">
            <span class="nc-icon">📔</span>
            <span class="nc-title">品飲筆記</span>
            <span class="nc-desc">記錄品飲心得･紅白粉紅雪莉･西班牙產區</span>
          </button>
        </div>
      </section>

      <!-- ── 課程等級卡片 ──────────────────────────────────── -->
      <section class="levels-section">
        <div class="levels-header">
          <h2>課程等級</h2>
          <p>從基礎認識西班牙葡萄酒到深入理解各大產區</p>
        </div>

        <div class="levels-grid">
          <div
            v-for="lvl in levels"
            :key="lvl.key"
            class="level-card"
            :class="[lvl.status, { locked: lvl.status === 'coming' }]"
            @click="lvl.status !== 'coming' && $emit('startLevel', lvl.key)"
          >
            <div class="lc-ribbon" v-if="lvl.status === 'coming'">即將推出</div>
            <div class="lc-header" :style="{ background: lvl.gradient }">
              <div class="lc-icon">{{ lvl.icon }}</div>
              <div class="lc-meta">
                <div class="lc-label">{{ lvl.label }}</div>
                <div class="lc-title">{{ lvl.title }}</div>
              </div>
            </div>
            <div class="lc-body">
              <p class="lc-desc">{{ lvl.desc }}</p>
              <div class="lc-topics">
                <span v-for="t in lvl.topics" :key="t" class="topic-tag">{{ t }}</span>
              </div>
              <div class="lc-footer">
                <span class="lc-lessons">{{ lvl.lessons }}</span>
                <button v-if="lvl.status !== 'coming'" class="lc-btn">
                  {{ lvl.status === 'active' ? '開始學習 →' : '繼續學習 →' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 西班牙葡萄酒概覽 ──────────────────────────────── -->
      <section class="overview-section">
        <div class="overview-header">
          <h2>為什麼學習西班牙葡萄酒？</h2>
        </div>
        <div class="overview-grid">
          <div class="ov-card" v-for="item in overviewItems" :key="item.title">
            <div class="ov-icon">{{ item.icon }}</div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </section>
      <!-- ── 學習統計横列 ────────────────── -->
      <LearningStatsMini course-key="spain" @show-details="showProgress = true" />

    </div>

    <!-- ── 成就彈窗 ────────────────── -->
    <div v-if="showAchievements" class="sp-modal-overlay" @click="showAchievements = false">
      <div class="sp-achievement-modal" @click.stop>
        <div class="sp-modal-header">
          <h3>🏆 學習成就</h3>
          <button class="sp-close-btn" @click="showAchievements = false">×</button>
        </div>
        <div class="sp-modal-content">
          <AchievementsDashboard course-key="spain" @back="showAchievements = false" />
        </div>
      </div>
    </div>

    <!-- ── 進度彈窗 ────────────────── -->
    <div v-if="showProgress" class="sp-modal-overlay" @click="showProgress = false">
      <div class="sp-progress-modal" @click.stop>
        <div class="sp-modal-header">
          <h3>📊 西班牙課程學習進度</h3>
          <button class="sp-close-btn" @click="showProgress = false">×</button>
        </div>
        <div class="sp-modal-content">
          <LearningProgressDashboard course-key="spain" />
        </div>
      </div>    </div>

    <!-- ── 品種指南彈窗（佔位） ───────────────────────────── -->
    <div v-if="showGrapeGuide" class="modal-backdrop" @click.self="showGrapeGuide = false">
      <div class="grape-modal">
        <button class="modal-close" @click="showGrapeGuide = false">✕</button>
        <h2>🍇 西班牙主要葡萄品種</h2>
        <div class="grape-grid">
          <div v-for="g in grapes" :key="g.name" class="grape-card" :style="{ '--gc': g.color }">
            <div class="grape-type">{{ g.type }}</div>
            <h4>{{ g.name }}</h4>
            <p class="grape-alias">{{ g.alias }}</p>
            <p class="grape-note">{{ g.note }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { authState, authActions } from '../../../stores/authStore.js'
import { supabase } from '../../../lib/supabaseClient.js'
import { globalSpainAchievementManager } from '../../../stores/spainAchievementSystem.js'
import AchievementsDashboard from '../../AchievementsDashboard.vue'
import LearningStatsMini from '../../LearningStatsMini.vue'
import LearningProgressDashboard from '../../LearningProgressDashboard.vue'

const emit = defineEmits(['openMap', 'openSelector', 'startLevel', 'openNotebook', 'openGames'])
const router = useRouter()
const authUser = authState.user
const showGrapeGuide = ref(false)
const showAchievements = ref(false)
const showProgress = ref(false)
const avatarUrl = ref('')
const avatarInitial = ref('我')

onMounted(async () => {
  globalSpainAchievementManager.init()
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

function handleLogout() {
  authActions.logout()
  router.push('/')
}

function bubbleStyle(i) {
  const size = 20 + (i * 13) % 60
  return {
    width:  size + 'px',
    height: size + 'px',
    left:   ((i * 17 + 5) % 95) + '%',
    top:    ((i * 23 + 10) % 90) + '%',
    animationDelay: (i * 0.3) + 's',
    animationDuration: (4 + (i % 4)) + 's',
  }
}

const levels = [
  {
    key:      'level1',
    label:    'Level 1',
    title:    '西班牙葡萄酒入門',
    icon:     '🌱',
    gradient: 'linear-gradient(135deg, #c0392b, #e74c3c)',
    status:   'active',
    difficulty: '入門',
    desc: '認識西班牙 17 個自治區地理、DO/DOCa/VP 分級制度、五大紅品種五大白品種，以及 Rioja 陳年等級入門',
    topics: ['地理概況', '分級制度', '核心品種', 'Rioja 入門'],
    lessons: '13 個單元・約 2–3 小時',
    modules: 5,
  },
  {
    key:      'level2',
    label:    'Level 2',
    title:    '重點產區深度探索',
    icon:     '🍷',
    gradient: 'linear-gradient(135deg, #8e44ad, #9b59b6)',
    status:   'active',
    difficulty: '進階',
    desc: '深入探索 Ribera del Duero、Rías Baixas、Priorat（DOCa）、Jerez Sherry、Cava 等西班牙頂級產區',
    topics: ['Ribera del Duero', 'Rías Baixas', 'Priorat', 'Canarias 火山'],
    lessons: '18 個單元・約 4–5 小時',
    modules: 5,
  },
  {
    key:      'level3',
    label:    'Level 3',
    title:    '釀造工藝與特殊酒款',
    icon:     '🏺',
    gradient: 'linear-gradient(135deg, #2c3e50, #3498db)',
    status:   'active',
    difficulty: '專業',
    desc: '橡木桶陳年哲學、Cava 傳統法氣泡酒、Sherry 索雷拉系統、Flor 酵母保護與六大 Sherry 風格全解析',
    topics: ['橡木桶哲學', 'Cava 氣泡酒', 'Sherry 索雷拉', '加強甜酒'],
    lessons: '17 個單元・約 4–5 小時',
    modules: 5,
  },
  {
    key:      'level4',
    label:    'Level 4',
    title:    '大師品鑑',
    icon:     '👑',
    gradient: 'linear-gradient(135deg, #f39c12, #e67e22)',
    status:   'active',
    difficulty: '大師',
    desc: '系統盲飲技術（WSET SAT）、年份評鑑指南（2005–2024）、Vega Sicilia・Pingus・Álvaro Palacios 頂級酒莊解析',
    topics: ['WSET 盲品法', '年份指南', '頂級酒莊', '收藏投資'],
    lessons: '14 個單元・約 3–4 小時',
    modules: 5,
  },
]

const overviewItems = [
  {
    icon: '🌍',
    title: '世界第一大種植面積',
    desc: '西班牙是全球葡萄種植面積最大的國家，超過 96 萬公頃，遍及 17 個自治區。',
  },
  {
    icon: '🏅',
    title: '兩大 DOCa 頂級認證',
    desc: 'Rioja 與 Priorat 是西班牙僅有的兩個 DOCa（Denominación de Origen Calificada）認證，代表最高品質標準。',
  },
  {
    icon: '🍾',
    title: '獨特的陳年制度',
    desc: 'Joven、Crianza、Reserva、Gran Reserva 四個等級，嚴格規範橡木桶與瓶中陳年時間。',
  },
  {
    icon: '🌋',
    title: '火山島葡萄酒',
    desc: '加那利群島的火山土壤孕育出世上獨一無二的葡萄酒，許多葡萄更是根瘤蚜蟲災前古藤。',
  },
  {
    icon: '🧊',
    title: 'Sherry 雪莉酒傳奇',
    desc: 'Jerez 的 Flor 酵母、索雷拉熟成系統創造出 Fino 到 PX 的豐富風格譜系，舉世無雙。',
  },
  {
    icon: '💧',
    title: 'Albariño — 海洋白酒',
    desc: 'Rías Baixas 的大西洋海風造就芳香、高酸的 Albariño 白酒，是西班牙最精緻的白酒代表。',
  },
]

const grapes = [
  { name: 'Tempranillo',     alias: '田帕尼優',   type: '紅',  color: '#c0392b', note: '西班牙最重要的紅葡萄品種，Rioja 靈魂，又稱 Tinto Fino、Cencibel、Juan García。' },
  { name: 'Garnacha',        alias: '格那希',     type: '紅',  color: '#e74c3c', note: '原產自阿拉貢，是世界種植面積最大的紅品種之一，老藤 Garnacha 濃郁集中。' },
  { name: 'Albariño',        alias: '阿爾巴利諾', type: '白',  color: '#f1c40f', note: '加利西亞 Rías Baixas 的明星白品種，高酸、花香、桃子果味，是西班牙最精緻的白酒。' },
  { name: 'Cariñena',        alias: '卡利涅納',   type: '紅',  color: '#8e44ad', note: '又名 Mazuelo（在 Rioja），深色水果、高酸高單寧，常用於調配以增加結構。' },
  { name: 'Verdejo',         alias: '韋爾德霍',   type: '白',  color: '#27ae60', note: '卡斯提亞-萊昂 Rueda 的主角，帶有草本、桃子和杏仁風味，口感清爽飽滿。' },
  { name: 'Mencía',          alias: '門西亞',     type: '紅',  color: '#2980b9', note: '加利西亞與萊昂的本地品種，在 Bierzo 和 Ribeira Sacra 板岩土壤中表現優雅。' },
  { name: 'Monastrell',      alias: '慕維得爾',   type: '紅',  color: '#d35400', note: '法文 Mourvèdre，Jumilla 和 Yecla 的主角，老藤濃郁厚重，在炎熱干燥氣候中卓越。' },
  { name: 'Bobal',           alias: '博拔爾',     type: '紅',  color: '#7d3c98', note: 'Utiel-Requena 高原本地品種，深黑色葡萄，老藤可釀出極具魅力的深色水果紅酒與粉紅酒。' },
  { name: 'Palomino',        alias: '帕洛米諾',   type: '白',  color: '#f39c12', note: 'Jerez 雪莉酒的主要品種，低酸中性，在 Flor 酵母保護或氧化陳年下轉化成複雜的加強酒。' },
  { name: 'Pedro Ximénez',   alias: '佩德羅·希梅內斯', type: '甜',  color: '#e67e22', note: '日曬風乾後壓榨，製成西班牙最甜、最濃稠的加強甜酒 PX，Montilla-Moriles 最著名。' },
  { name: 'Macabeo (Viura)', alias: '馬卡貝奧',   type: '白',  color: '#16a085', note: 'Cava 基酒品種之一，在 Rioja 稱 Viura，清淡芳香，是西班牙種植最廣的白品種之一。' },
  { name: 'Xarel·lo',        alias: '薩雷洛',     type: '白',  color: '#1abc9c', note: 'Cava 和 Penedès 的本地白品種，帶有草藥和柑橘風味，賦予 Cava 清爽結構感。' },
]
</script>

<style scoped>
.spain-level-selector {
  min-height: 100vh;
  background: linear-gradient(160deg, #c0392b 0%, #8e44ad 45%, #1a5276 100%);
  color: white;
  position: relative;
}

/* ── 泡泡背景 ─────────────────────────────── */
.bg-bubbles {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}
.bubble {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
  animation: float-up linear infinite;
}
@keyframes float-up {
  0%   { transform: translateY(0) scale(1); opacity: 0.6; }
  100% { transform: translateY(-110vh) scale(1.4); opacity: 0; }
}

.main-container {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem 5rem;
}

/* ── Brand header ──────────────────────────── */
.brand-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0 1rem;
}
.brand-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.flag-big { font-size: 2.8rem; }
.brand-title {
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}
.brand-sub {
  font-size: 0.88rem;
  opacity: 0.8;
  margin: 0;
}
.header-btns { display: flex; align-items: center; gap: 0.5rem; }
.user-avatar {
  width: 38px; height: 38px; border-radius: 50%;
  background: transparent;
  border: 2px solid rgba(255,255,255,0.6);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden; flex-shrink: 0;
}
.ls-avatar-img { width: 100%; height: 100%; object-fit: cover; display: block; background: transparent; }
.ls-avatar-initial { font-size: 1.1rem; font-weight: 700; color: white; line-height: 1; }
.hdr-btn {
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
}
.hdr-btn.ghost {
  background: rgba(255,255,255,0.15);
  border: 1.5px solid rgba(255,255,255,0.4);
  color: white;
}
.hdr-btn.ghost:hover {
  background: rgba(255,255,255,0.28);
}

/* ── Quick nav ─────────────────────────────── */
.quick-nav { margin: 1.5rem 0 2rem; }
.quick-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.9rem;
}
.nav-card {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1.1rem 1.2rem;
  background: rgba(255,255,255,0.13);
  border: 1.5px solid rgba(255,255,255,0.28);
  border-radius: 16px;
  color: white;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;
  backdrop-filter: blur(6px);
  position: relative;
  overflow: hidden;
}
.nav-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0);
  transition: background 0.2s;
}
.nav-card:hover::before { background: rgba(255,255,255,0.08); }
.nav-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.25); }
.games-card       { background: rgba(255,255,255,0.18); border-color: rgba(255,255,255,0.35); }
.achievement-card { background: rgba(220,160,30,0.25); border-color: rgba(220,160,30,0.45); }
.progress-card    { background: rgba(180,30,30,0.25); border-color: rgba(180,30,30,0.45); }
.nc-icon { font-size: 1.6rem; }
.nc-title { font-size: 1rem; font-weight: 700; }
.nc-desc { font-size: 0.78rem; opacity: 0.8; line-height: 1.4; }
.nc-soon {
  display: inline-block;
  margin-top: 0.4rem;
  padding: 0.15rem 0.5rem;
  background: rgba(255,255,255,0.2);
  border-radius: 20px;
  font-size: 0.72rem;
  width: fit-content;
}

/* ── Levels ────────────────────────────────── */
.levels-section { margin-bottom: 3rem; }
.levels-header {
  text-align: center;
  margin-bottom: 1.5rem;
}
.levels-header h2 {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0 0 0.4rem;
}
.levels-header p { font-size: 0.92rem; opacity: 0.8; margin: 0; }

.levels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.2rem;
}

.level-card {
  background: rgba(255,255,255,0.1);
  border-radius: 18px;
  overflow: hidden;
  border: 1.5px solid rgba(255,255,255,0.22);
  backdrop-filter: blur(6px);
  transition: all 0.2s;
  cursor: pointer;
  position: relative;
}
.level-card:not(.locked):hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  border-color: rgba(255,255,255,0.5);
}
.level-card.locked { opacity: 0.6; cursor: default; }

.lc-ribbon {
  position: absolute;
  top: 12px; right: -12px;
  background: rgba(255,255,255,0.25);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.2rem 1.2rem;
  transform: rotate(30deg);
  width: 110px;
  text-align: center;
  z-index: 2;
}

.lc-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.2rem;
}
.lc-icon { font-size: 2rem; }
.lc-label { font-size: 0.72rem; opacity: 0.85; text-transform: uppercase; letter-spacing: 0.06em; }
.lc-title { font-size: 1rem; font-weight: 700; }

.lc-body { padding: 1rem 1.2rem 1.2rem; }
.lc-desc { font-size: 0.84rem; opacity: 0.9; line-height: 1.5; margin: 0 0 0.9rem; }

.lc-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 1rem;
}
.topic-tag {
  padding: 0.2rem 0.55rem;
  background: rgba(255,255,255,0.18);
  border-radius: 20px;
  font-size: 0.75rem;
}

.lc-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}
.lc-lessons { font-size: 0.78rem; opacity: 0.75; }
.lc-btn {
  padding: 0.4rem 0.9rem;
  background: rgba(255,255,255,0.25);
  border: 1.5px solid rgba(255,255,255,0.45);
  border-radius: 20px;
  color: white;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
}
.lc-btn:hover { background: rgba(255,255,255,0.38); }

/* ── Overview ──────────────────────────────── */
.overview-section { margin-bottom: 2rem; }
.overview-header {
  text-align: center;
  margin-bottom: 1.5rem;
}
.overview-header h2 { font-size: 1.5rem; font-weight: 700; margin: 0; }

.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}
.ov-card {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 14px;
  padding: 1.2rem;
  backdrop-filter: blur(6px);
}
.ov-icon { font-size: 1.8rem; margin-bottom: 0.5rem; }
.ov-card h4 { font-size: 0.95rem; font-weight: 700; margin: 0 0 0.4rem; }
.ov-card p { font-size: 0.82rem; opacity: 0.85; line-height: 1.55; margin: 0; }

/* ── Grape guide modal ─────────────────────── */
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0,0,0,0.55);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 1rem;
  overflow-y: auto;
}
.grape-modal {
  background: white;
  color: #333;
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 800px;
  position: relative;
  box-shadow: 0 8px 40px rgba(0,0,0,0.3);
}
.modal-close {
  position: absolute;
  top: 1rem; right: 1rem;
  background: #f0f0f0;
  border: none;
  border-radius: 50%;
  width: 32px; height: 32px;
  font-size: 1rem;
  cursor: pointer;
  color: #555;
  display: flex; align-items: center; justify-content: center;
}
.grape-modal h2 { font-size: 1.4rem; margin: 0 0 1.2rem; }
.grape-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.8rem;
}
.grape-card {
  border-radius: 12px;
  padding: 1rem;
  border-top: 4px solid var(--gc);
  background: #f9f9f9;
}
.grape-type {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--gc);
  letter-spacing: 0.05em;
  margin-bottom: 0.2rem;
}
.grape-card h4 { font-size: 0.95rem; font-weight: 700; margin: 0 0 0.15rem; color: #222; }
.grape-alias { font-size: 0.78rem; color: #888; margin: 0 0 0.4rem; font-style: italic; }
.grape-note { font-size: 0.8rem; color: #555; line-height: 1.5; margin: 0; }

@media (max-width: 600px) {
  .brand-header { flex-wrap: wrap; gap: 0.8rem; }
  .quick-grid { grid-template-columns: 1fr 1fr; }
  .levels-grid { grid-template-columns: 1fr; }
  .overview-grid { grid-template-columns: 1fr; }
  /* 成就/進度 modal 改為底部抽屜 */
  .sp-modal-overlay { padding: 0; align-items: flex-end; }
  .sp-achievement-modal { border-radius: 20px 20px 0 0; max-height: 92vh; }
  .sp-progress-modal { border-radius: 20px 20px 0 0; max-height: 88vh; }
  .sp-modal-header { padding: 0.75rem 1rem; }
}

/* ── 成就 / 進度 Modal ─────────────────────── */
.sp-modal-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.55);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000;
}
.sp-achievement-modal {
  background: white; border-radius: 20px;
  max-width: 920px; width: 94%; max-height: 90vh; overflow: hidden;
  display: flex; flex-direction: column;
}
.sp-achievement-modal .sp-modal-content { flex: 1; overflow-y: auto; padding: 0; }
.sp-progress-modal {
  background: white; border-radius: 20px;
  max-width: 560px; width: 92%; max-height: 82vh; overflow-y: auto;
}
.sp-modal-header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 1.25rem 1.75rem; border-bottom: 1px solid #eee;
  flex-shrink: 0;
}
.sp-modal-header h3 { margin: 0; color: #2c3e50; font-size: 1.1rem; }
.sp-close-btn {
  background: none; border: none; font-size: 1.5rem; cursor: pointer;
  color: #999; width: 30px; height: 30px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%; transition: all 0.2s;
}
.sp-close-btn:hover { background: #f5f5f5; color: #333; }
.sp-modal-content { padding: 1.5rem; }
</style>
