<template>
  <div class="portugal-level-selector">
    <!-- 背景裝飾 -->
    <div class="bg-bubbles">
      <div v-for="i in 18" :key="i" class="bubble" :style="bubbleStyle(i)"></div>
    </div>

    <div class="main-container">

      <!-- ── 品牌 Header ──────────────────────────────────── -->
      <header class="brand-header">
        <div class="brand-logo">
          <div class="flag-big">🇵🇹</div>
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

      <!-- ── 快速入口 ──────────────────────────────────── -->
      <section class="quick-nav">
        <div class="quick-grid">
          <button class="nav-card map-card" @click="$emit('openMap')">
            <span class="nc-icon">🗺️</span>
            <span class="nc-title">探索地圖</span>
            <span class="nc-desc">互動式葡萄牙產區地圖・DOC 分布・氣候帶</span>
          </button>
          <button class="nav-card info-card" @click="$emit('openGrapes')">
            <span class="nc-icon">🍇</span>
            <span class="nc-title">品種指南</span>
            <span class="nc-desc">250+ 原生品種・Touriga Nacional・Alvarinho・Baga</span>
          </button>
          <button class="nav-card port-card">
            <span class="nc-icon">🥃</span>
            <span class="nc-title">波特酒專題</span>
            <span class="nc-desc">Ruby・Tawny・LBV・Vintage・Colheita 全類型</span>
          </button>
        </div>
      </section>

      <!-- ── 課程等級卡片 ──────────────────────────────────── -->
      <section class="levels-section">
        <div class="levels-header">
          <h2>課程等級</h2>
          <p>從基礎認識葡萄牙葡萄酒到深入理解各大產區與加烈酒工藝</p>
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
                <div class="lc-title-text">{{ lvl.title }}</div>
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
                  開始學習 →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 葡萄牙葡萄酒概覽 ──────────────────────────────── -->
      <section class="overview-section">
        <div class="overview-header">
          <h2>為什麼學習葡萄牙葡萄酒？</h2>
        </div>
        <div class="overview-grid">
          <div class="ov-card" v-for="item in overviewItems" :key="item.title">
            <div class="ov-icon">{{ item.icon }}</div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { authState, authActions } from '../../../stores/authStore.js'
import { supabase } from '../../../lib/supabaseClient.js'

const emit = defineEmits(['openMap', 'openGrapes', 'startLevel'])
const router = useRouter()
const authUser = authState.user
const avatarUrl = ref('')
const avatarInitial = ref('我')

onMounted(async () => {
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
    title:    '葡萄牙葡萄酒入門',
    icon:     '🌱',
    gradient: 'linear-gradient(135deg, #006600, #1a9b1a)',
    status:   'active',
    difficulty: '入門',
    desc: '認識葡萄牙 14 大官方產區地理、DOC/IGP 分級制度、五大紅品種五大白品種，以及 Douro・Vinho Verde・Alentejo 入門',
    topics: ['地理概況', '分級制度', '核心品種', '三大產區'],
    lessons: '13 個單元・約 2–3 小時',
  },
  {
    key:      'level2',
    label:    'Level 2',
    title:    '重點產區深度探索',
    icon:     '🍷',
    gradient: 'linear-gradient(135deg, #8B0000, #c0392b)',
    status:   'active',
    difficulty: '進階',
    desc: '深入探索 Douro 三大子產區、Porto 波特酒類型、Vinho Verde 9 個子產區、Dão・Bairrada・Alentejo・Madeira・Açores',
    topics: ['Douro 深度', 'Porto 波特酒', 'Madeira 馬德拉', 'Açores 亞速爾'],
    lessons: '22 個單元・約 4–5 小時',
  },
  {
    key:      'level3',
    label:    'Level 3',
    title:    '加烈酒工藝與特殊酒款',
    icon:     '🥃',
    gradient: 'linear-gradient(135deg, #1a6b9b, #2980b9)',
    status:   'active',
    difficulty: '專業',
    desc: '深入理解 Porto 全類型、Madeira 工藝、葡萄牙氣泡酒、Moscatel 甜酒，以及風土分析與橡木桶陳年',
    topics: ['Porto 全類型', 'Madeira 工藝', 'Espumante 氣泡', 'Moscatel'],
    lessons: '15 個單元・約 3–4 小時',
  },
  {
    key:      'level4',
    label:    'Level 4',
    title:    '葡萄牙葡萄酒大師',
    icon:     '🏆',
    gradient: 'linear-gradient(135deg, #B8860B, #DAA520)',
    status:   'coming',
    difficulty: '大師',
    desc: '進階品鑑技巧、年份分析、盲品策略、與世界頂級葡萄酒的比較，以及葡萄牙葡萄酒的投資與收藏',
    topics: ['年份分析', '盲品技巧', '陳年潛力', '收藏價值'],
    lessons: '12 個單元・即將推出',
  },
]

const overviewItems = [
  { icon: '🏛️', title: '全球最早法定產區', desc: '1756 年龐巴爾侯爵劃定 Douro，比任何其他國家都早' },
  { icon: '🍇', title: '250+ 原生品種', desc: '全球最高原生品種密度之一，大多數只在葡萄牙才能找到' },
  { icon: '🥃', title: 'Porto 傳奇', desc: '全球最著名的加烈甜酒，可陳年逾 50 年的 Vintage Port' },
  { icon: '🏝️', title: 'Madeira 不朽', desc: '大西洋火山島的氧化加烈酒，陳年可超過百年' },
  { icon: '🌊', title: 'Vinho Verde 清爽', desc: '大西洋氣候的清新白酒，Alvarinho 享譽全球' },
  { icon: '☀️', title: 'Alentejo 現代', desc: '近代崛起最快的產區，豐腴圓潤，性價比極高' },
]
</script>

<style scoped>
.portugal-level-selector {
  min-height: 100vh;
  background: linear-gradient(135deg, #e8f5e8 0%, #fff5f5 50%, #e8f5e8 100%);
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
  position: relative;
  overflow-x: hidden;
}

/* 背景氣泡 */
.bg-bubbles { position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
.bubble {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,102,0,0.08), transparent 70%);
  animation: floatBubble linear infinite;
}
@keyframes floatBubble {
  0%   { transform: translateY(0) scale(1); opacity: 0.6; }
  50%  { transform: translateY(-30px) scale(1.05); opacity: 0.4; }
  100% { transform: translateY(0) scale(1); opacity: 0.6; }
}

.main-container {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px 40px;
}

/* ── Brand Header ─────────────────── */
.brand-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0 20px;
}
.brand-logo { display: flex; align-items: center; gap: 14px; }
.flag-big { font-size: 3rem; }
.brand-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: #006600;
  margin: 0;
}
.brand-sub { font-size: 0.85rem; color: #888; margin: 0; }
.header-btns { display: flex; align-items: center; gap: 8px; }
.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #006600;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e6f2e6;
}
.ls-avatar-img { width: 100%; height: 100%; object-fit: cover; }
.ls-avatar-initial { font-size: 0.9rem; font-weight: 700; color: #006600; }
.hdr-btn {
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
}
.hdr-btn.ghost {
  background: transparent;
  border: 1.5px solid #006600;
  color: #006600;
}
.hdr-btn.ghost:hover { background: #006600; color: white; }

/* ── Quick Nav ─────────────────────── */
.quick-nav { margin-bottom: 32px; }
.quick-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.nav-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 18px 20px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: all 0.2s;
  box-shadow: 0 2px 10px rgba(0,0,0,0.07);
}
.nav-card:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(0,0,0,0.12); }
.map-card  { background: linear-gradient(135deg, #e8f8e8, #c8f0c8); color: #006600; }
.info-card { background: linear-gradient(135deg, #fff5e8, #ffe8c0); color: #8B4513; }
.port-card { background: linear-gradient(135deg, #fff0f0, #ffd0d0); color: #8B0000; }
.nc-icon  { font-size: 1.8rem; margin-bottom: 6px; }
.nc-title { font-size: 0.95rem; font-weight: 800; margin-bottom: 4px; }
.nc-desc  { font-size: 0.75rem; opacity: 0.8; line-height: 1.4; }

/* ── Levels Section ─────────────────── */
.levels-section { margin-bottom: 36px; }
.levels-header { text-align: center; margin-bottom: 24px; }
.levels-header h2 { font-size: 1.5rem; font-weight: 800; color: #2c3e50; margin: 0 0 6px; }
.levels-header p  { color: #888; font-size: 0.9rem; margin: 0; }

.levels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}
.level-card {
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 3px 12px rgba(0,0,0,0.09);
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}
.level-card:hover:not(.locked) { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.14); }
.level-card.locked { opacity: 0.6; cursor: default; }
.lc-ribbon {
  position: absolute;
  top: 12px;
  right: -22px;
  background: #f39c12;
  color: white;
  padding: 4px 30px;
  font-size: 0.7rem;
  font-weight: 700;
  transform: rotate(35deg);
  z-index: 10;
}
.lc-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  color: white;
}
.lc-icon { font-size: 2rem; }
.lc-label { font-size: 0.75rem; opacity: 0.85; font-weight: 600; }
.lc-title-text { font-size: 0.95rem; font-weight: 800; }
.lc-body { padding: 16px 20px; }
.lc-desc { font-size: 0.82rem; color: #555; line-height: 1.5; margin: 0 0 12px; }
.lc-topics { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 12px; }
.topic-tag {
  background: #e6f2e6;
  color: #006600;
  padding: 3px 9px;
  border-radius: 9999px;
  font-size: 0.72rem;
  font-weight: 600;
}
.lc-footer { display: flex; align-items: center; justify-content: space-between; }
.lc-lessons { font-size: 0.75rem; color: #999; }
.lc-btn {
  background: #006600;
  color: white;
  border: none;
  padding: 7px 16px;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s;
}
.lc-btn:hover { background: #004d00; }

/* ── Overview Section ─────────────────── */
.overview-section { }
.overview-header { text-align: center; margin-bottom: 20px; }
.overview-header h2 { font-size: 1.3rem; font-weight: 800; color: #2c3e50; margin: 0; }
.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 14px;
}
.ov-card {
  background: white;
  border-radius: 14px;
  padding: 18px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  border-top: 3px solid #006600;
}
.ov-icon { font-size: 1.8rem; margin-bottom: 8px; }
.ov-card h4 { font-size: 0.88rem; font-weight: 700; color: #2c3e50; margin: 0 0 6px; }
.ov-card p  { font-size: 0.78rem; color: #666; margin: 0; line-height: 1.4; }

/* ── Mobile ──────────────────────────── */
@media (max-width: 768px) {
  .quick-grid { grid-template-columns: 1fr; }
  .levels-grid { grid-template-columns: 1fr; }
  .overview-grid { grid-template-columns: repeat(2, 1fr); }
  .brand-title { font-size: 1.2rem; }
  .flag-big { font-size: 2.2rem; }
}
</style>
