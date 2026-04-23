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
          <button class="nav-card info-card" @click="showGrapeGuide = true">
            <span class="nc-icon">🍇</span>
            <span class="nc-title">品種指南</span>
            <span class="nc-desc">250+ 原生品種・Touriga Nacional・Alvarinho・Baga</span>
          </button>
          <button class="nav-card port-card" @click="showPortGuide = true">
            <span class="nc-icon">🥃</span>
            <span class="nc-title">波特酒專題</span>
            <span class="nc-desc">Ruby・Tawny・LBV・Vintage・Colheita 全類型</span>
          </button>
          <button class="nav-card game-card" @click="$emit('openGameHub')">
            <span class="nc-icon">🎮</span>
            <span class="nc-title">互動練習</span>
            <span class="nc-desc">產區競速・波特酒分類・產區閪卡</span>
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

    <!-- ── 品種指南彈窗 ──────────────────────────────────── -->
    <div v-if="showGrapeGuide" class="modal-backdrop" @click.self="showGrapeGuide = false">
      <div class="grape-modal">
        <div class="grape-modal-header">
          <h2>🍇 葡萄牙主要葡萄品種</h2>
          <button class="modal-close" @click="showGrapeGuide = false">✕</button>
        </div>
        <div class="grape-modal-tabs">
          <button :class="['g-tab', grapeTab === 'red' && 'active']" @click="grapeTab = 'red'">🔴 紅品種</button>
          <button :class="['g-tab', grapeTab === 'white' && 'active']" @click="grapeTab = 'white'">🟡 白品種</button>
        </div>
        <div class="grape-grid">
          <div
            v-for="g in (grapeTab === 'red' ? redGrapes : whiteGrapes)"
            :key="g.name"
            class="grape-card"
            :style="{ '--gc': g.color }"
          >
            <div class="grape-type-badge">{{ g.type }}</div>
            <h4>{{ g.name }}</h4>
            <p class="grape-alias">{{ g.alias }}</p>
            <p class="grape-note">{{ g.note }}</p>
            <div class="grape-regions">
              <span v-for="r in g.regions" :key="r" class="grape-region-tag">{{ r }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── 波特酒專題彈窗 ──────────────────────────────────── -->
    <div v-if="showPortGuide" class="modal-backdrop" @click.self="showPortGuide = false">
      <div class="port-modal">
        <div class="port-modal-header">
          <h2>🥃 波特酒全類型指南</h2>
          <button class="modal-close" @click="showPortGuide = false">✕</button>
        </div>
        <p class="port-modal-sub">波特酒（Porto/Port Wine）是葡萄牙 Douro 河谷的加烈甜酒，以高酒精（19–22%）和豐富果味著稱，可分為 Ruby 和 Tawny 兩大系列。</p>
        <div class="port-grid">
          <div v-for="p in portTypes" :key="p.name" class="port-card-item" :style="{ '--pc': p.color }">
            <div class="port-series-badge">{{ p.series }}</div>
            <h4>{{ p.name }}</h4>
            <p class="port-desc">{{ p.desc }}</p>
            <div class="port-tags">
              <span class="port-tag">{{ p.aging }}</span>
              <span class="port-tag">{{ p.style }}</span>
            </div>
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

const emit = defineEmits(['openMap', 'openGrapes', 'startLevel', 'openNotebook', 'openGameHub'])
const router = useRouter()
const authUser = authState.user
const avatarUrl = ref('')
const avatarInitial = ref('我')
const showGrapeGuide = ref(false)
const showPortGuide = ref(false)
const grapeTab = ref('red')

const redGrapes = [
  { name: 'Touriga Nacional', alias: '葡萄牙之王', type: '🔴 紅', color: '#5B0F1E',
    note: '葡萄牙最著名紅品種，高單寧、濃郁紫羅蘭花香，是波特酒和 Douro 頂級餐酒的核心。',
    regions: ['Douro', 'Dão', 'Lisboa'] },
  { name: 'Touriga Franca', alias: 'Touriga Francesa', type: '🔴 紅', color: '#7B1A2A',
    note: '波特酒混釀中比例最高的品種，豐滿果味，單寧柔順，提供成熟紅果和花香。',
    regions: ['Douro', 'Porto'] },
  { name: 'Tinta Roriz', alias: 'Tempranillo（西班牙名）', type: '🔴 紅', color: '#8B2020',
    note: '葡萄牙版的 Tempranillo，帶有紅莓果香和香料感，適應力強，廣泛種植。',
    regions: ['Douro', 'Dão', 'Alentejo'] },
  { name: 'Trincadeira', alias: 'Tinta Amarela', type: '🔴 紅', color: '#6B1A1A',
    note: '南部代表品種，溫暖氣候下表現出熟果和香料特性，高酒精、豐滿酒體。',
    regions: ['Alentejo', 'Tejo', 'Ribatejo'] },
  { name: 'Baga', alias: '高酸高單寧傳奇', type: '🔴 紅', color: '#4A1530',
    note: 'Bairrada 的靈魂品種，世界頂級酸度和單寧，年輕時緊澀，陳年後展現驚人的細膩複雜度。',
    regions: ['Bairrada', 'Beira Litoral'] },
  { name: 'Castelão', alias: 'Periquita', type: '🔴 紅', color: '#7A3010',
    note: '南部和里斯本地區的重要品種，酒體中等，帶有紅果、泥土和香料香氣。',
    regions: ['Setúbal', 'Tejo', 'Alentejo'] },
]

const whiteGrapes = [
  { name: 'Alvarinho', alias: 'Albariño（西班牙名）', type: '🟡 白', color: '#8B6914',
    note: 'Vinho Verde 最優雅的子產區 Monção e Melgaço 的代表，高酸、果香馥郁，享譽國際。',
    regions: ['Vinho Verde', 'Monção e Melgaço'] },
  { name: 'Arinto', alias: 'Pedernã', type: '🟡 白', color: '#6B8B00',
    note: '葡萄牙分布最廣的白品種，保留良好酸度，結構清晰，可釀造陳年型白酒。',
    regions: ['Bucelas', 'Lisboa', 'Alentejo'] },
  { name: 'Encruzado', alias: 'Dão 之后', type: '🟡 白', color: '#9B7A00',
    note: 'Dão 產區最重要的白品種，複雜度高，帶有礦物感和白花香，陳年後更顯優雅。',
    regions: ['Dão'] },
  { name: 'Fernão Pires', alias: 'Maria Gomes', type: '🟡 白', color: '#7A9B20',
    note: '葡萄牙種植面積最廣的白品種，芬芳花香，釀造清新易飲的日常白酒。',
    regions: ['Bairrada', 'Tejo', 'Lisboa'] },
  { name: 'Loureiro', alias: '月桂葉香', type: '🟡 白', color: '#5A8B00',
    note: 'Vinho Verde 北部的芬芳品種，以月桂葉和白花香著稱，清爽輕盈，極具特色。',
    regions: ['Vinho Verde', 'Braga', 'Lima'] },
  { name: 'Verdelho', alias: 'Gouveio（大陸版）', type: '🟡 白', color: '#8B9B10',
    note: 'Madeira 馬德拉的核心品種之一，釀造中干型加烈酒；在 Douro 也作為白餐酒品種。',
    regions: ['Madeira', 'Douro', 'Açores'] },
]

const portTypes = [
  { name: 'Ruby Port', series: 'Ruby 系列', color: '#8B1A1A',
    desc: '最基礎的波特酒類型，短期桶陳（3–5 年），保留鮮艷紅寶石色和新鮮紅果香氣，甜美易飲。',
    aging: '3–5 年桶陳', style: '甜・果香濃郁' },
  { name: 'LBV（Late Bottled Vintage）', series: 'Ruby 系列', color: '#6B0F0F',
    desc: '單一年份、桶陳 4–6 年後裝瓶，分 Filtered（易飲）和 Unfiltered（需醒酒）兩種風格。',
    aging: '4–6 年桶陳', style: '年份標示・適合即飲' },
  { name: 'Vintage Port', series: 'Ruby 系列', color: '#4A0A0A',
    desc: '頂級波特酒，只在最佳年份宣布，桶陳僅 2 年後裝瓶，需 15–25 年瓶中熟成。',
    aging: '2 年桶陳 + 長期瓶中', style: '最高品質・需陳年' },
  { name: 'Single Quinta Vintage', series: 'Ruby 系列', color: '#5A1010',
    desc: '單一酒莊的年份波特，非「宣告年份」也可出產，是物超所值的收藏選擇。',
    aging: '2 年桶陳', style: '單一產區・年份特色' },
  { name: 'Tawny Port', series: 'Tawny 系列', color: '#9B5A00',
    desc: '多年調配的氧化風格，呈現琥珀棕色，帶有堅果、焦糖、橙皮香氣。標示 10/20/30/40 年為調配平均年齡。',
    aging: '多年橡木桶氧化', style: '甜・堅果・焦糖' },
  { name: 'Colheita', series: 'Tawny 系列', color: '#8B4500',
    desc: '單一年份的 Tawny，桶陳至少 7 年，同時擁有 Tawny 的氧化風格和年份的獨特個性。',
    aging: '最少 7 年桶陳', style: '單一年份・氧化複雜' },
  { name: 'White Port', series: '白波特', color: '#C4A217',
    desc: '以白葡萄釀造，從干型到甜型皆有，加冰塊或加通寧水是夏季流行喝法（Port & Tonic）。',
    aging: '短期桶陳', style: '干型至甜型' },
  { name: 'Rosé Port', series: '粉紅波特', color: '#D4607A',
    desc: '2008 年推出的新類型，短暫浸皮，呈現草莓和水果香氣，加冰塊飲用，年輕消費者最愛。',
    aging: '短期桶陳', style: '甜・果香・現代風' },
]

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
    status:   'active',
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
  grid-template-columns: repeat(4, 1fr);
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
.game-card { background: linear-gradient(135deg, #e8e8ff, #c8c8f8); color: #1a1a8B; }
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
  .quick-grid { grid-template-columns: repeat(2, 1fr); }
  .levels-grid { grid-template-columns: 1fr; }
  .overview-grid { grid-template-columns: repeat(2, 1fr); }
  .brand-title { font-size: 1.2rem; }
  .flag-big { font-size: 2.2rem; }
}

/* ── Modal Backdrop ──────────────────── */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  z-index: 9000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

/* ── Grape Guide Modal ───────────────── */
.grape-modal {
  background: white;
  border-radius: 20px;
  max-width: 680px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}
.grape-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 0;
}
.grape-modal-header h2 { font-size: 1.2rem; font-weight: 800; color: #2c3e50; margin: 0; }
.modal-close {
  background: #f0f0f0;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-close:hover { background: #e0e0e0; }
.grape-modal-tabs {
  display: flex;
  gap: 8px;
  padding: 14px 24px;
  border-bottom: 1px solid #eee;
}
.g-tab {
  padding: 6px 18px;
  border-radius: 9999px;
  border: 2px solid #ccc;
  background: white;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
}
.g-tab.active { background: #006600; border-color: #006600; color: white; }
.grape-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  padding: 16px 24px 24px;
}
.grape-card {
  border-radius: 14px;
  padding: 14px;
  background: color-mix(in srgb, var(--gc) 8%, white);
  border-left: 4px solid var(--gc);
}
.grape-type-badge {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--gc);
  margin-bottom: 4px;
}
.grape-card h4 { font-size: 0.95rem; font-weight: 800; color: #2c3e50; margin: 0 0 2px; }
.grape-alias { font-size: 0.75rem; color: #888; margin: 0 0 6px; font-style: italic; }
.grape-note { font-size: 0.78rem; color: #555; line-height: 1.45; margin: 0 0 8px; }
.grape-regions { display: flex; flex-wrap: wrap; gap: 4px; }
.grape-region-tag {
  background: color-mix(in srgb, var(--gc) 15%, white);
  color: var(--gc);
  border-radius: 9999px;
  padding: 2px 8px;
  font-size: 0.68rem;
  font-weight: 600;
}

/* ── Port Guide Modal ────────────────── */
.port-modal {
  background: white;
  border-radius: 20px;
  max-width: 720px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}
.port-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 0;
}
.port-modal-header h2 { font-size: 1.2rem; font-weight: 800; color: #2c3e50; margin: 0; }
.port-modal-sub {
  font-size: 0.82rem;
  color: #666;
  line-height: 1.5;
  padding: 10px 24px 4px;
  margin: 0;
}
.port-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  padding: 12px 24px 24px;
}
.port-card-item {
  border-radius: 14px;
  padding: 14px;
  background: color-mix(in srgb, var(--pc) 8%, white);
  border-left: 4px solid var(--pc);
}
.port-series-badge {
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--pc);
  margin-bottom: 4px;
}
.port-card-item h4 { font-size: 0.9rem; font-weight: 800; color: #2c3e50; margin: 0 0 6px; }
.port-desc { font-size: 0.78rem; color: #555; line-height: 1.45; margin: 0 0 8px; }
.port-tags { display: flex; flex-wrap: wrap; gap: 4px; }
.port-tag {
  background: color-mix(in srgb, var(--pc) 15%, white);
  color: var(--pc);
  border-radius: 9999px;
  padding: 2px 8px;
  font-size: 0.68rem;
  font-weight: 600;
}
</style>
