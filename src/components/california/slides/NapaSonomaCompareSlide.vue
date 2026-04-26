<template>
  <div class="napa-sonoma-slide">
    <header class="ns-header">
      <h2 class="ns-title">{{ slide.title || 'Napa vs Sonoma — 加州雙雄對比' }}</h2>
      <p v-if="slide.description" class="ns-desc">{{ slide.description }}</p>
    </header>

    <!-- 切換 -->
    <nav class="ns-tabs">
      <button
        v-for="t in TABS"
        :key="t.key"
        class="ns-tab"
        :class="{ active: currentTab === t.key }"
        @click="currentTab = t.key"
      >
        <span class="ns-tab-emoji">{{ t.emoji }}</span>
        {{ t.label }}
      </button>
    </nav>

    <!-- 對照表 -->
    <div v-if="currentTab === 'compare'" class="ns-compare">
      <div class="ns-col ns-col-napa">
        <h3>🍷 Napa Valley</h3>
        <p class="ns-tagline">頂級 Cabernet Sauvignon 朝聖地</p>
      </div>
      <div class="ns-col ns-col-sonoma">
        <h3>🌲 Sonoma County</h3>
        <p class="ns-tagline">多元風土 + Pinot Noir 王國</p>
      </div>
      <template v-for="row in COMPARE_ROWS" :key="row.label">
        <div class="ns-row-label">{{ row.label }}</div>
        <div class="ns-cell ns-cell-napa">{{ row.napa }}</div>
        <div class="ns-cell ns-cell-sonoma">{{ row.sonoma }}</div>
      </template>
    </div>

    <!-- 子 AVA -->
    <div v-else-if="currentTab === 'ava'" class="ns-ava">
      <div class="ns-ava-side">
        <h3>🍷 Napa Valley — 16 個子 AVA</h3>
        <p class="ns-ava-note">由南向北氣候逐漸變熱（Carneros 最涼，Calistoga 最熱）</p>
        <ul class="ns-ava-list">
          <li v-for="a in NAPA_AVAS" :key="a.name">
            <span class="ns-ava-name">{{ a.name }}</span>
            <span class="ns-ava-sub">{{ a.sub }}</span>
          </li>
        </ul>
      </div>
      <div class="ns-ava-side">
        <h3>🌲 Sonoma — 19 個 AVA（精選 8）</h3>
        <p class="ns-ava-note">太平洋海風主導；西部冷涼、東部溫暖</p>
        <ul class="ns-ava-list">
          <li v-for="a in SONOMA_AVAS" :key="a.name">
            <span class="ns-ava-name">{{ a.name }}</span>
            <span class="ns-ava-sub">{{ a.sub }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 代表酒莊 -->
    <div v-else-if="currentTab === 'wineries'" class="ns-wineries">
      <div class="ns-w-side">
        <h3>🍷 Napa 代表酒莊</h3>
        <ul>
          <li v-for="w in NAPA_WINERIES" :key="w.name">
            <strong>{{ w.name }}</strong>
            <span class="ns-w-meta">{{ w.region }} · {{ w.style }}</span>
          </li>
        </ul>
      </div>
      <div class="ns-w-side">
        <h3>🌲 Sonoma 代表酒莊</h3>
        <ul>
          <li v-for="w in SONOMA_WINERIES" :key="w.name">
            <strong>{{ w.name }}</strong>
            <span class="ns-w-meta">{{ w.region }} · {{ w.style }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 風格小結 -->
    <div v-else-if="currentTab === 'summary'" class="ns-summary">
      <div class="ns-sum-card ns-sum-napa">
        <h3>🍷 Napa Valley 一句話</h3>
        <p class="ns-sum-quote">「集中、結構、橡木 — 為陳年而生的 Cabernet 產區」</p>
        <ul>
          <li>面積僅 18,000 公頃，但產值占加州 30%</li>
          <li>Cabernet Sauvignon 占種植面積 40%+</li>
          <li>Cult Wine 文化發源地（Screaming Eagle、Harlan、Scarecrow）</li>
          <li>1976 巴黎審判 Stag's Leap S.L.V. Cabernet 擊敗法國一級酒莊</li>
        </ul>
      </div>
      <div class="ns-sum-card ns-sum-sonoma">
        <h3>🌲 Sonoma County 一句話</h3>
        <p class="ns-sum-quote">「多元、清新、永續 — 加州最具風土多樣性的產區」</p>
        <ul>
          <li>面積 60,000 公頃，是 Napa 三倍以上</li>
          <li>Pinot Noir + Chardonnay 為主，但種有 60+ 個品種</li>
          <li>全美永續認證酒莊比例最高（99% 酒莊符合認證）</li>
          <li>Russian River Valley、Sonoma Coast 為頂級涼爽 Pinot 產區</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const TABS = [
  { key: 'compare', label: '一覽對比', emoji: '⚖️' },
  { key: 'ava', label: '子 AVA 分布', emoji: '🗺️' },
  { key: 'wineries', label: '代表酒莊', emoji: '🏛️' },
  { key: 'summary', label: '風格總結', emoji: '🎯' }
]
const currentTab = ref(props.slide?.defaultTab || 'compare')

const COMPARE_ROWS = [
  { label: '面積', napa: '約 18,000 公頃', sonoma: '約 60,000 公頃（3 倍 Napa）' },
  { label: '氣候帶', napa: '溫暖至炎熱（南涼北熱）', sonoma: '冷涼至溫暖（西涼東暖）' },
  { label: '海風影響', napa: '經 Carneros 入南部，北部山谷較少受影響', sonoma: '太平洋直接吹拂，受 Petaluma Gap 與河谷風主導' },
  { label: '主力品種', napa: 'Cabernet Sauvignon（40%）、Chardonnay、Merlot', sonoma: 'Pinot Noir、Chardonnay、Cabernet Sauvignon、Zinfandel' },
  { label: '頂級風格', napa: '濃郁、結構嚴謹、橡木桶顯著、長陳年潛力', sonoma: '多元優雅、酸度活潑、純淨果味' },
  { label: '子 AVA 數', napa: '16 個（Napa Valley 為母 AVA）', sonoma: '19 個（含 Sonoma Coast、Russian River 等）' },
  { label: '酒莊數', napa: '約 475 家（許多 Cult Wine）', sonoma: '約 425 家（家族酒莊比例高）' },
  { label: '價格定位', napa: 'NT$ 2,500 起，頂級 NT$ 15,000+', sonoma: 'NT$ 1,500 起，頂級 NT$ 8,000+' },
  { label: '永續認證', napa: '約 50% 酒莊', sonoma: '99% 酒莊（全美最高）' },
  { label: '歷史時刻', napa: '1976 巴黎審判紅酒組冠軍', sonoma: '1976 巴黎審判白酒組冠軍（Chateau Montelena）' }
]

const NAPA_AVAS = [
  { name: 'Carneros', sub: '南部最涼，Pinot/Chard/氣泡酒' },
  { name: 'Coombsville', sub: '東南，新興涼爽 Cabernet' },
  { name: 'Yountville', sub: '中谷，平衡風格' },
  { name: 'Oakville', sub: '中谷核心，Screaming Eagle、Opus One' },
  { name: 'Rutherford', sub: '「Rutherford Dust」單寧質感' },
  { name: 'St. Helena', sub: '溫暖，飽滿厚實' },
  { name: 'Calistoga', sub: '最北最熱，濃郁強勁' },
  { name: 'Howell Mountain', sub: '東山高海拔，緊密單寧' },
  { name: 'Stags Leap District', sub: '紫羅蘭、絲滑單寧' },
  { name: 'Spring Mountain', sub: '西山，礦物與紅果' }
]
const SONOMA_AVAS = [
  { name: 'Russian River Valley', sub: 'Pinot Noir + Chardonnay 王國' },
  { name: 'Sonoma Coast', sub: '極涼海岸，極致清新' },
  { name: 'Dry Creek Valley', sub: 'Old Vine Zinfandel 故鄉' },
  { name: 'Alexander Valley', sub: '溫暖，Cabernet 主力' },
  { name: 'Sonoma Valley', sub: '加州最古老產區（1857）' },
  { name: 'Knights Valley', sub: '溫暖山谷，飽滿 Cabernet' },
  { name: 'Carneros (Sonoma)', sub: '與 Napa 共享，氣泡酒' },
  { name: 'Petaluma Gap', sub: '海風通道，Pinot 與 Syrah' }
]

const NAPA_WINERIES = [
  { name: 'Screaming Eagle', region: 'Oakville', style: 'Cult Wine 之王，配額制' },
  { name: 'Opus One', region: 'Oakville', style: 'Mondavi × Rothschild 合作' },
  { name: 'Harlan Estate', region: 'Oakville', style: '頂級 Hillside Cabernet' },
  { name: 'Stag\'s Leap Wine Cellars', region: 'Stags Leap', style: '巴黎審判紅酒冠軍' },
  { name: 'Chateau Montelena', region: 'Calistoga', style: '巴黎審判白酒冠軍' },
  { name: 'Robert Mondavi', region: 'Oakville', style: '加州葡萄酒現代化推手' },
  { name: 'Caymus', region: 'Rutherford', style: 'Special Selection 經典' }
]
const SONOMA_WINERIES = [
  { name: 'Williams Selyem', region: 'Russian River', style: '頂級單一園 Pinot Noir' },
  { name: 'Kistler', region: 'Sonoma Coast', style: '布根地風格 Chardonnay' },
  { name: 'Ridge Vineyards', region: 'Sonoma + Santa Cruz', style: 'Old Vine Zinfandel 大師' },
  { name: 'Kosta Browne', region: 'Russian River', style: '飽滿果味 Pinot' },
  { name: 'Marcassin', region: 'Sonoma Coast', style: 'Helen Turley 經典' },
  { name: 'Iron Horse', region: 'Green Valley', style: '頂級氣泡酒' },
  { name: 'Jordan', region: 'Alexander Valley', style: '波爾多風格 Cabernet' }
]
</script>

<style scoped>
.napa-sonoma-slide {
  display: flex; flex-direction: column; gap: 14px;
  padding: 8px 4px;
}
.ns-header { text-align: center; }
.ns-title { margin: 0 0 4px; font-size: 1.55rem; color: #2c3e50; }
.ns-desc { margin: 0; color: #5b6b7a; font-size: 0.92rem; }

.ns-tabs { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.ns-tab {
  border: 2px solid #d8dde4; background: #fff;
  border-radius: 999px; padding: 8px 14px;
  cursor: pointer; font-size: 0.9rem; color: #444;
  display: flex; align-items: center; gap: 6px;
  transition: all .18s ease;
}
.ns-tab:hover { border-color: #b85c2c; color: #b85c2c; }
.ns-tab.active { background: #b85c2c; color: #fff; border-color: #b85c2c; }
.ns-tab-emoji { font-size: 1.05rem; }

/* ====== Compare ====== */
.ns-compare {
  display: grid;
  grid-template-columns: 130px 1fr 1fr;
  gap: 6px 10px;
  background: #fff;
  border-radius: 12px;
  padding: 14px;
  border: 1px solid #e2e4ea;
}
.ns-col { grid-column: span 1; padding: 8px; text-align: center; }
.ns-col-napa { grid-column: 2; background: #fbeae0; border-radius: 8px; }
.ns-col-sonoma { grid-column: 3; background: #e6f0e2; border-radius: 8px; }
.ns-col h3 { margin: 0 0 4px; font-size: 1.05rem; }
.ns-col-napa h3 { color: #b85c2c; }
.ns-col-sonoma h3 { color: #4a7c3c; }
.ns-tagline { margin: 0; font-size: 0.78rem; color: #555; font-weight: 500; }

.ns-row-label {
  background: #f5f6f8;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 0.85rem; color: #2c3e50; font-weight: 600;
  display: flex; align-items: center;
}
.ns-cell {
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 0.85rem; line-height: 1.5; color: #2c3e50;
}
.ns-cell-napa { background: #fdf5ee; }
.ns-cell-sonoma { background: #f1f7ee; }

/* ====== AVA ====== */
.ns-ava { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.ns-ava-side {
  border: 1px solid #e2e4ea;
  border-radius: 12px; padding: 14px; background: #fff;
}
.ns-ava-side:first-child { border-top: 4px solid #b85c2c; }
.ns-ava-side:last-child { border-top: 4px solid #4a7c3c; }
.ns-ava-side h3 { margin: 0 0 4px; font-size: 1.05rem; }
.ns-ava-side:first-child h3 { color: #b85c2c; }
.ns-ava-side:last-child h3 { color: #4a7c3c; }
.ns-ava-note { margin: 0 0 10px; font-size: 0.78rem; color: #777; font-style: italic; }
.ns-ava-list { list-style: none; padding: 0; margin: 0; }
.ns-ava-list li {
  padding: 6px 0; border-bottom: 1px dashed #e8eaef;
  display: flex; justify-content: space-between; gap: 10px;
  font-size: 0.85rem;
}
.ns-ava-name { font-weight: 600; color: #2c3e50; }
.ns-ava-sub { color: #666; font-size: 0.8rem; text-align: right; }

/* ====== Wineries ====== */
.ns-wineries { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.ns-w-side {
  border: 1px solid #e2e4ea;
  border-radius: 12px; padding: 14px; background: #fff;
}
.ns-w-side:first-child { border-top: 4px solid #b85c2c; }
.ns-w-side:last-child { border-top: 4px solid #4a7c3c; }
.ns-w-side h3 { margin: 0 0 10px; font-size: 1.05rem; }
.ns-w-side:first-child h3 { color: #b85c2c; }
.ns-w-side:last-child h3 { color: #4a7c3c; }
.ns-w-side ul { list-style: none; padding: 0; margin: 0; }
.ns-w-side li {
  padding: 6px 0; border-bottom: 1px dashed #e8eaef;
  font-size: 0.85rem;
}
.ns-w-side strong { color: #2c3e50; display: block; }
.ns-w-meta { color: #666; font-size: 0.78rem; }

/* ====== Summary ====== */
.ns-summary { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.ns-sum-card {
  border-radius: 12px; padding: 16px;
  background: #fff; border: 2px solid;
}
.ns-sum-napa { border-color: #b85c2c; background: linear-gradient(180deg, #fdf5ee 0%, #fff 100%); }
.ns-sum-sonoma { border-color: #4a7c3c; background: linear-gradient(180deg, #f1f7ee 0%, #fff 100%); }
.ns-sum-card h3 { margin: 0 0 8px; font-size: 1.1rem; }
.ns-sum-napa h3 { color: #b85c2c; }
.ns-sum-sonoma h3 { color: #4a7c3c; }
.ns-sum-quote {
  margin: 0 0 10px; font-size: 1rem; font-weight: 600; color: #2c3e50;
  padding: 8px 10px; background: rgba(255,255,255,.7); border-radius: 6px;
}
.ns-sum-card ul { margin: 0; padding-left: 20px; font-size: 0.88rem; color: #2c3e50; line-height: 1.6; }

@media (max-width: 768px) {
  .ns-compare { grid-template-columns: 110px 1fr 1fr; font-size: 0.78rem; }
  .ns-ava, .ns-wineries, .ns-summary { grid-template-columns: 1fr; }
}
</style>
