<template>
  <div class="au-level-selector">
    <!-- 背景裝飾 -->
    <div class="bg-bubbles">
      <div v-for="i in 16" :key="i" class="bubble" :style="bubbleStyle(i)"></div>
    </div>

    <div class="main-container">
      <!-- Brand Header -->
      <header class="brand-header">
        <div class="brand-logo">
          <div class="flag-big">🦘</div>
          <div class="brand-text">
            <h1 class="brand-title">侍酒師的筆記本</h1>
            <p class="brand-sub">The Sommelier's Notebook</p>
          </div>
        </div>
        <div class="header-btns">
          <button class="hdr-btn ghost" @click="router.push('/')">🏠 首頁</button>
        </div>
      </header>

      <!-- 快速入口 -->
      <section class="quick-nav">
        <div class="quick-grid">
          <button class="nav-card game-card" disabled>
            <span class="nc-icon">🎮</span>
            <span class="nc-title">互動練習</span>
            <span class="nc-desc">產區競答・品種配對（即將推出）</span>
          </button>
          <button class="nav-card map-card" @click="$emit('openMap')">
            <span class="nc-icon">🗺️</span>
            <span class="nc-title">探索地圖</span>
            <span class="nc-desc">互動式澳洲產區地圖、65+ GI・六州分布</span>
          </button>
          <button class="nav-card achievement-card" @click="$emit('openAchievements')">
            <span class="nc-icon">🏆</span>
            <span class="nc-title">成就系統</span>
            <span class="nc-desc">查看已解鎖成就與標章收藏</span>
          </button>
          <button class="nav-card progress-card" @click="showProgressModal = true">
            <span class="nc-icon">📊</span>
            <span class="nc-title">學習進度</span>
            <span class="nc-desc">各等級完成狀況與學習統計</span>
          </button>
          <button class="nav-card notebook-card" disabled>
            <span class="nc-icon">📔</span>
            <span class="nc-title">品飲筆記</span>
            <span class="nc-desc">記錄品飲體驗（即將推出）</span>
          </button>
        </div>
      </section>

      <!-- 課程等級 -->
      <section class="levels-section">
        <div class="levels-header">
          <h2>課程等級</h2>
          <p>從基礎認識澳洲葡萄酒地理到深入理解各州產區風土與釀酒工藝</p>
        </div>
        <div class="levels-grid">
          <div
            v-for="lvl in levels" :key="lvl.key"
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
                <button v-if="lvl.status !== 'coming'" class="lc-btn">開始學習 →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 為什麼學澳洲 -->
      <section class="overview-section">
        <div class="overview-header">
          <h2>為什麼學習澳洲葡萄酒？</h2>
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

    <!-- 學習進度 Modal -->
    <Teleport to="body">
      <div v-if="showProgressModal" class="au-prog-overlay" @click.self="showProgressModal = false">
        <div class="au-prog-modal">
          <div class="au-prog-header">
            <h3>📊 澳洲葡萄酒學習進度</h3>
            <button class="au-prog-close" @click="showProgressModal = false">×</button>
          </div>
          <div class="au-prog-body">
            <!-- 整體進度 -->
            <div class="au-overall-box">
              <div class="au-overall-row">
                <span>整體完成度</span>
                <strong>{{ overallProgress }}%</strong>
              </div>
              <div class="au-overall-bar">
                <div class="au-overall-fill" :style="{ width: overallProgress + '%' }"></div>
              </div>
            </div>
            <!-- 各等級 -->
            <div class="au-level-list">
              <div v-for="lv in levelProgress" :key="lv.key" class="au-lv-row">
                <div class="au-lv-top">
                  <span class="au-lv-icon">{{ lv.icon }}</span>
                  <span class="au-lv-title">{{ lv.title }}</span>
                  <span class="au-lv-pct" :style="{ color: lv.color }">{{ lv.pct }}%</span>
                </div>
                <div class="au-lv-bar">
                  <div class="au-lv-fill" :style="{ width: lv.pct + '%', background: lv.color }"></div>
                </div>
                <div class="au-lv-stat">{{ lv.done }} / {{ lv.total }} 課程完成</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { courseLevels, getUserProgress } from '../data/courseLevels.js'

defineEmits(['openMap', 'startLevel', 'openAchievements'])
const router = useRouter()

const showProgressModal = ref(false)

const levelProgress = computed(() => {
  const keys = ['level1', 'level2', 'level3']
  return keys.map(key => {
    const def = courseLevels.find(l => l.key === key)
    if (!def || !def.modules) return { key, title: key, done: 0, total: 0, pct: 0 }
    const allLessons = def.modules.flatMap(m => m.lessons)
    const prog = getUserProgress(key)
    const done = allLessons.filter(l => prog[l.id]).length
    return {
      key,
      title: def.title,
      icon:  def.icon,
      color: def.color,
      done,
      total: allLessons.length,
      pct:   allLessons.length ? Math.round(done / allLessons.length * 100) : 0
    }
  })
})

const overallProgress = computed(() => {
  const all  = levelProgress.value.reduce((s, l) => s + l.total, 0)
  const done = levelProgress.value.reduce((s, l) => s + l.done,  0)
  return all ? Math.round(done / all * 100) : 0
})

function bubbleStyle(i) {
  const size = 20 + (i * 13) % 60
  return {
    width: size + 'px', height: size + 'px',
    left:  ((i * 17 + 5) % 95) + '%',
    top:   ((i * 23 + 10) % 90) + '%',
    animationDelay: (i * 0.3) + 's',
    animationDuration: (4 + (i % 4)) + 's',
  }
}

const levels = [
  {
    key:      'level1',
    label:    'Level 1',
    title:    '澳洲葡萄酒入門',
    icon:     '🌱',
    gradient: 'linear-gradient(135deg, #00274e, #1a4a8a)',
    status:   'active',
    difficulty: '入門',
    desc: '認識澳洲六大州地理、GI 分級制度（Zone/Region/Sub-Region）、五大紅品種五大白品種，以及南澳/維多利亞/西澳/塔斯馬尼亞核心產區',
    topics: ['地理概況', 'GI 制度', '核心品種', '南澳精華'],
    lessons: '17 個單元 + 期末評量',
  },
  {
    key:      'level2',
    label:    'Level 2',
    title:    '重點產區深度探索',
    icon:     '🍷',
    gradient: 'linear-gradient(135deg, #7b1818, #c0392b)',
    status:   'active',
    difficulty: '進階',
    desc: '深入探索 Barossa 老藤文化、Margaret River 波爾多風格、Hunter Valley Semillon 奇蹟、Heathcote 礦石 Shiraz、Yarra Pinot 精品等',
    topics: ['老藤文化', 'Margaret River', 'Hunter Semillon', 'Tasmania 崛起'],
    lessons: '22 個單元・約 4–5 小時',
  },
  {
    key:      'level3',
    label:    'Level 3',
    title:    '風土工藝與品牌哲學',
    icon:     '🔬',
    gradient: 'linear-gradient(135deg, #1a6b9b, #2980b9)',
    status:   'active',
    difficulty: '專業',
    desc: '深入 Penfolds 哲學、南澳老藤 GSM、義大利品種革命、螺旋蓋全球推廣、自然酒與生物動力農法，以及澳洲氣泡酒工藝',
    topics: ['Penfolds 哲學', 'GSM 工藝', '螺旋蓋革命', '自然酒'],
    lessons: '11 個單元・約 3 小時',
  },
  {
    key:      'level4',
    label:    'Level 4',
    title:    '澳洲葡萄酒大師',
    icon:     '🏆',
    gradient: 'linear-gradient(135deg, #B8860B, #DAA520)',
    status:   'coming',
    difficulty: '大師',
    desc: '進階年份分析、盲品策略、國際比較、澳洲葡萄酒投資與收藏，以及頂級酒款垂直品飲解析',
    topics: ['年份分析', '盲品技巧', '陳年潛力', '收藏價值'],
    lessons: '即將推出',
  },
]

const overviewItems = [
  { icon: '🌏', title: '全球第 5 大出口國', desc: '年出口 $18 億澳幣，英國美國中國是最大市場' },
  { icon: '🌿', title: '百年老藤聖地', desc: '全球保存最多百年老藤的國家，根瘤蚜蟲從未侵入 SA' },
  { icon: '🔩', title: '螺旋蓋革命先驅', desc: 'Clare Valley 2000 年帶頭推廣，改變全球葡萄酒瓶蓋觀念' },
  { icon: '🌡️', title: '氣候帶多元', desc: '從塔斯馬尼亞涼爽海洋到 Barossa 炎熱大陸，風格跨度極大' },
  { icon: '🍇', title: 'Shiraz 王者地位', desc: 'Penfolds Grange 是世界最著名 Shiraz，澳洲的「國酒」象徵' },
  { icon: '🧊', title: 'Tasmania 新星崛起', desc: '全澳最冷產區，頂級氣泡酒與精緻 Pinot Noir，近年快速受矚目' },
]
</script>

<style scoped>
.au-level-selector {
  min-height: 100vh;
  background: linear-gradient(135deg, #e8f0ff 0%, #fff8e1 50%, #e8f0ff 100%);
  font-family: 'Noto Sans TC', 'Segoe UI', sans-serif;
  position: relative;
  overflow-x: hidden;
}
.bg-bubbles { position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
.bubble {
  position: absolute; border-radius: 50%;
  background: radial-gradient(circle, rgba(0,39,78,0.07), transparent 70%);
  animation: floatBubble linear infinite;
}
@keyframes floatBubble {
  0%   { transform: translateY(0) scale(1); opacity: 0.6; }
  50%  { transform: translateY(-28px) scale(1.05); opacity: 0.35; }
  100% { transform: translateY(0) scale(1); opacity: 0.6; }
}
.main-container {
  position: relative; z-index: 1;
  max-width: 1100px; margin: 0 auto; padding: 0 20px 48px;
}

/* Header */
.brand-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 24px 0 20px;
}
.brand-logo { display: flex; align-items: center; gap: 14px; }
.flag-big { font-size: 3rem; }
.brand-title { font-size: 1.6rem; font-weight: 800; color: #00274e; margin: 0; }
.brand-sub { font-size: 0.85rem; color: #888; margin: 0; }
.header-btns { display: flex; gap: 8px; }
.hdr-btn {
  padding: 8px 16px; border-radius: 9999px;
  font-size: 0.82rem; font-weight: 700; cursor: pointer; transition: all 0.15s;
}
.hdr-btn.ghost {
  background: transparent; border: 1.5px solid #00274e; color: #00274e;
}
.hdr-btn.ghost:hover { background: #00274e; color: #fff; }

/* Quick nav */
.quick-nav { margin-bottom: 32px; }
.quick-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.nav-card {
  display: flex; flex-direction: column; align-items: flex-start;
  padding: 18px 20px; border-radius: 16px; border: none;
  cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; text-align: left; gap: 4px;
}
.nav-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
.map-card     { background: linear-gradient(135deg, #00274e, #1a4a8a); color: #fff; }
.info-card    { background: linear-gradient(135deg, #c8a951, #d4b86a); color: #00274e; }
.special-card { background: linear-gradient(135deg, #27ae60, #1e8449); color: #fff; }
.nc-icon  { font-size: 1.8rem; }
.nc-title { font-size: 0.92rem; font-weight: 800; }
.nc-desc  { font-size: 0.72rem; opacity: 0.82; line-height: 1.5; }

/* Level cards */
.levels-section { margin-bottom: 36px; }
.levels-header { margin-bottom: 20px; }
.levels-header h2 { font-size: 1.4rem; font-weight: 800; color: #00274e; margin: 0 0 6px; }
.levels-header p  { font-size: 0.85rem; color: #777; margin: 0; }
.levels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}
.level-card {
  border-radius: 18px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 18px rgba(0,0,0,0.09);
  transition: transform 0.25s, box-shadow 0.25s;
  cursor: pointer;
  position: relative;
}
.level-card:hover:not(.locked) { transform: translateY(-5px); box-shadow: 0 12px 30px rgba(0,0,0,0.14); }
.level-card.locked { opacity: 0.68; cursor: default; }
.lc-ribbon {
  position: absolute; top: 12px; right: -8px;
  background: #e74c3c; color: #fff; font-size: 0.68rem; font-weight: 700;
  padding: 3px 16px; border-radius: 3px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
.lc-header {
  padding: 18px 20px; display: flex; align-items: center; gap: 12px; color: #fff;
}
.lc-icon { font-size: 2rem; }
.lc-label { font-size: 0.72rem; opacity: 0.8; font-weight: 600; }
.lc-title-text { font-size: 0.88rem; font-weight: 800; }
.lc-body { padding: 14px 16px 16px; }
.lc-desc { font-size: 0.78rem; color: #555; line-height: 1.6; margin: 0 0 10px; }
.lc-topics { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 14px; }
.topic-tag {
  background: #e8f0ff; color: #00274e; border-radius: 8px;
  padding: 2px 9px; font-size: 0.68rem; font-weight: 600;
}
.lc-footer { display: flex; align-items: center; justify-content: space-between; }
.lc-lessons { font-size: 0.72rem; color: #aaa; }
.lc-btn {
  background: linear-gradient(135deg, #00274e, #1a4a8a);
  color: #c8a951; border: none; border-radius: 10px;
  padding: 7px 16px; font-size: 0.78rem; font-weight: 700; cursor: pointer;
  transition: opacity 0.15s;
}
.lc-btn:hover { opacity: 0.85; }

/* Overview */
.overview-section { margin-bottom: 24px; }
.overview-header { margin-bottom: 16px; }
.overview-header h2 { font-size: 1.3rem; font-weight: 800; color: #00274e; margin: 0; }
.overview-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 14px; }
.ov-card {
  background: #fff; border-radius: 14px;
  padding: 16px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  text-align: center;
}
.ov-icon { font-size: 1.8rem; margin-bottom: 6px; }
.ov-card h4 { font-size: 0.82rem; font-weight: 700; color: #00274e; margin: 0 0 4px; }
.ov-card p  { font-size: 0.72rem; color: #777; margin: 0; line-height: 1.55; }

@media (max-width: 700px) {
  .quick-grid { grid-template-columns: 1fr; }
  .levels-grid { grid-template-columns: 1fr; }
  .brand-title { font-size: 1.2rem; }
}

/* 學習進度 Modal */
.au-prog-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.65);
  z-index: 8888;
  display: flex; align-items: center; justify-content: center;
  padding: 16px;
}
.au-prog-modal {
  background: #fff;
  border-radius: 16px;
  width: 100%; max-width: 520px;
  max-height: 85vh;
  display: flex; flex-direction: column;
  overflow: hidden;
}
.au-prog-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 20px;
  background: linear-gradient(135deg, #00274e 0%, #1a4a8a 100%);
  color: #fff;
}
.au-prog-header h3 { margin: 0; font-size: 1.05rem; }
.au-prog-close {
  background: none; border: none; color: #fff;
  font-size: 1.4rem; cursor: pointer; line-height: 1; padding: 0 4px;
}
.au-prog-close:hover { opacity: 0.75; }
.au-prog-body { flex: 1; overflow-y: auto; padding: 20px; }
.au-overall-box { margin-bottom: 24px; }
.au-overall-row {
  display: flex; justify-content: space-between;
  font-size: 0.9rem; margin-bottom: 8px; color: #444;
}
.au-overall-row strong { color: #00274e; font-size: 1rem; }
.au-overall-bar {
  height: 10px; background: #e0e0e0; border-radius: 9999px; overflow: hidden;
}
.au-overall-fill {
  height: 100%;
  background: linear-gradient(90deg, #00274e, #1a4a8a);
  border-radius: 9999px;
  transition: width 0.6s ease;
}
.au-level-list { display: flex; flex-direction: column; gap: 20px; }
.au-lv-row { background: #f8f9fa; border-radius: 12px; padding: 14px 16px; }
.au-lv-top {
  display: flex; align-items: center; gap: 8px;
  margin-bottom: 8px;
}
.au-lv-icon  { font-size: 1.2rem; }
.au-lv-title { flex: 1; font-size: 0.88rem; font-weight: 700; color: #333; }
.au-lv-pct   { font-size: 1rem; font-weight: 800; }
.au-lv-bar {
  height: 8px; background: #e0e0e0; border-radius: 9999px;
  overflow: hidden; margin-bottom: 6px;
}
.au-lv-fill {
  height: 100%; border-radius: 9999px;
  transition: width 0.6s ease;
}
.au-lv-stat { font-size: 0.75rem; color: #888; }
</style>
