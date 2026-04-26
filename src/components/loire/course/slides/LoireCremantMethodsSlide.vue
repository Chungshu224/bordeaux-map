<template>
  <div class="cremant-slide">
    <div class="slide-header">
      <h2>{{ slide?.title || '🥂 Loire 氣泡酒四大 AOC 對比' }}</h2>
      <p class="slide-desc">{{ slide?.description || 'Loire 是法國香檳區外最大的氣泡酒產地（年產 6,000 萬瓶）。Crémant、Saumur、Vouvray、Touraine 看似相似，工法、品種、Dosage 卻各有規範。' }}</p>
    </div>

    <!-- 4 大 AOC tabs -->
    <div class="aoc-tabs">
      <button
        v-for="(a, i) in aocs"
        :key="i"
        class="aoc-tab"
        :class="{ active: activeIdx === i }"
        :style="{ borderColor: activeIdx === i ? a.color : 'transparent' }"
        @click="activeIdx = i"
      >
        <span class="tab-flag">{{ a.icon }}</span>
        <span class="tab-name">{{ a.name }}</span>
        <span class="tab-meta">{{ a.method }}</span>
      </button>
    </div>

    <!-- Active AOC detail -->
    <div class="aoc-detail" :style="{ borderTopColor: active.color }">
      <div class="detail-header" :style="{ background: `linear-gradient(135deg, ${active.color}, ${active.colorEnd})` }">
        <div>
          <h3>{{ active.name }} <span class="detail-fr">{{ active.fr }}</span></h3>
          <span class="detail-tagline">{{ active.tagline }}</span>
        </div>
        <div class="detail-stats">
          <div class="stat"><strong>{{ active.production }}</strong><span>年產量</span></div>
        </div>
      </div>
      <div class="detail-body">
        <div class="metrics-grid">
          <div class="metric"><div class="m-label">釀造法</div><div class="m-value">{{ active.method }}</div></div>
          <div class="metric"><div class="m-label">主要品種</div><div class="m-value">{{ active.grapes }}</div></div>
          <div class="metric"><div class="m-label">最低瓶陳</div><div class="m-value">{{ active.aging }}</div></div>
          <div class="metric"><div class="m-label">壓力（bar）</div><div class="m-value">{{ active.pressure }}</div></div>
          <div class="metric"><div class="m-label">產區範圍</div><div class="m-value">{{ active.area }}</div></div>
          <div class="metric"><div class="m-label">價格</div><div class="m-value">{{ active.price }}</div></div>
        </div>
        <div class="info-row style-row"><strong>🎯 風格特色：</strong>{{ active.style }}</div>
        <div class="info-row pairing-row"><strong>🍽️ 配餐：</strong>{{ active.pairing }}</div>
        <div class="info-row producer-row"><strong>🏛️ 代表酒莊：</strong>{{ active.producers }}</div>
      </div>
    </div>

    <!-- 釀造法視覺對比：Méthode Traditionnelle vs Pétillant Naturel -->
    <div class="method-section">
      <h3>🔬 兩種主要工法對照</h3>
      <div class="method-cards">
        <div class="method-card traditional">
          <div class="method-header">📜 Méthode Traditionnelle（傳統法 / 香檳法）</div>
          <ol>
            <li><strong>第一次發酵</strong>：基酒在不鏽鋼槽完成乾型發酵</li>
            <li><strong>裝瓶 + Tirage</strong>：加入糖漿與酵母混合液後封瓶</li>
            <li><strong>第二次發酵</strong>：在瓶中發酵產生 6 bar 壓力</li>
            <li><strong>瓶陳</strong>：與酵母渣 (sur lattes) 接觸 9-24 個月，發展自溶風味（麵包、餅乾）</li>
            <li><strong>除渣</strong>：Remuage（搖瓶）+ Dégorgement（凍頸除渣）</li>
            <li><strong>補液 + Dosage</strong>：加入劑量決定甜度（Brut Nature → Demi-Sec）</li>
          </ol>
          <div class="method-footnote">✅ Crémant de Loire / Saumur Brut / Vouvray Mousseux / Touraine Mousseux 均採用</div>
        </div>
        <div class="method-card petnat">
          <div class="method-header">🌱 Méthode Ancestrale（Pétillant Naturel）</div>
          <ol>
            <li><strong>單次發酵</strong>：葡萄汁開始發酵後直接裝瓶</li>
            <li><strong>瓶內完成</strong>：剩餘糖分在瓶中由酵母繼續發酵產氣</li>
            <li><strong>無 Tirage、無 Dosage</strong>：壓力較低（3-4 bar）</li>
            <li><strong>不一定除渣</strong>：很多 Pét-Nat 保留酵母渣，呈混濁狀</li>
            <li><strong>風格野性</strong>：天然甜度殘留、果香奔放、酵母感強</li>
            <li><strong>標籤需註明</strong>：Vouvray Pétillant 為其代表類別</li>
          </ol>
          <div class="method-footnote">⚡ Vouvray Pétillant / 自然酒 Pét-Nat 採用</div>
        </div>
      </div>
    </div>

    <!-- 甜度光譜 -->
    <div class="dosage-section">
      <h3>🍬 Dosage 甜度等級（每升殘糖 g/L）</h3>
      <div class="dosage-bar">
        <div v-for="(d, i) in dosages" :key="i" class="dosage-step" :style="{ background: d.color }">
          <div class="dosage-name">{{ d.name }}</div>
          <div class="dosage-range">{{ d.range }}</div>
        </div>
      </div>
      <p class="dosage-note">💡 Loire 氣泡酒主流仍以 <strong>Brut</strong>（&lt; 12 g/L）為主，Crémant de Loire 法定要求 Tirage Cuvée 必須符合 Brut/Extra Brut/Brut Nature 等級。</p>
    </div>

    <div class="key-insight">
      <h4>💡 一張表記住四大差異</h4>
      <p><strong>Crémant de Loire</strong>=最廣泛區域、12 個月瓶陳法定（CIVC 標準）；<strong>Saumur Brut</strong>=Tuffeau 地下酒窖、9 個月最少瓶陳、性價比之王；<strong>Vouvray Mousseux/Pétillant</strong>=100% Chenin Blanc、可甜可干、Pét-Nat 天堂；<strong>Touraine Mousseux</strong>=最便宜、品種最自由、入門級。</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const activeIdx = ref(0)

const aocs = [
  {
    name: 'Crémant de Loire',
    fr: '羅亞爾克雷芒',
    icon: '🥇',
    color: '#2874a6',
    colorEnd: '#3498db',
    method: '傳統法（Méthode Traditionnelle）',
    grapes: 'Chenin Blanc 主導 + Cabernet Franc / Chardonnay / Pinot Noir',
    aging: '12 個月（瓶陳 9 + 上市 3）',
    pressure: '6+ bar',
    area: 'Anjou / Saumur / Touraine 跨產區',
    price: '€10–€25',
    production: '~ 2,000 萬瓶',
    tagline: 'Loire 氣泡酒的標準典範',
    style: '清新柑橘、白花、烤麵包香、酸度活潑、整體優雅平衡。被視為「香檳替代品」的高 CP 選擇。',
    pairing: '前菜、海鮮、生蠔、台式涼拌菜、刺身',
    producers: 'Bouvet-Ladubay、Langlois-Château、Ackerman、Gratien & Meyer、De Chanceny'
  },
  {
    name: 'Saumur Brut',
    fr: '索米爾氣泡',
    icon: '🥈',
    color: '#16a085',
    colorEnd: '#1abc9c',
    method: '傳統法（Méthode Traditionnelle）',
    grapes: 'Chenin Blanc 60% + Chardonnay + Cabernet Franc（粉紅）',
    aging: '9 個月（最低）',
    pressure: '6+ bar',
    area: 'Saumur 鎮周邊 14 個村莊',
    price: '€8–€18',
    production: '~ 1,200 萬瓶',
    tagline: 'Tuffeau 地下酒窖的傳統工藝',
    style: '比 Crémant 更直接果香，礦物感清晰，酸度緊實。Saumur Tuffeau 凝灰岩酒窖（恆溫 12°C、98% 濕度）是最大優勢。',
    pairing: '炸魚薯條、雞肉沙拉、奶油起司、台式滷味',
    producers: 'Bouvet-Ladubay（同樣強）、Ackerman 1811、Veuve Amiot、Langlois-Château'
  },
  {
    name: 'Vouvray Mousseux / Pétillant',
    fr: '伏弗雷氣泡',
    icon: '🥉',
    color: '#d4af37',
    colorEnd: '#e8b952',
    method: '傳統法 + Pétillant Naturel（祖傳法）',
    grapes: 'Chenin Blanc 100%（強制單一品種）',
    aging: '9 個月（Mousseux）/ 無強制（Pétillant）',
    pressure: 'Mousseux 6 bar / Pétillant 3-4 bar',
    area: 'Vouvray AOC（8 村）',
    price: '€12–€40',
    production: '~ 600 萬瓶',
    tagline: 'Chenin Blanc 純粹氣泡的標竿',
    style: '蘋果、蜜糖、燧石、鹹礦物。Mousseux 風格緊實正式；Pétillant 風格奔放、酵母感強、可帶 Demi-Sec 甜度。',
    pairing: '亞洲香料菜、咖喱、川菜麻辣、藍紋起司（甜款）',
    producers: 'Domaine Huet（傳奇）、François Pinon、Champalou、Vincent Carême、Gaston Huet 後人'
  },
  {
    name: 'Touraine Mousseux',
    fr: '都漢氣泡',
    icon: '🌱',
    color: '#7B1F2A',
    colorEnd: '#A8324A',
    method: '傳統法',
    grapes: 'Chenin Blanc + Cabernet Franc + Chardonnay + Pinot Noir + Gamay',
    aging: '9 個月',
    pressure: '6+ bar',
    area: 'Touraine 大區（最廣泛）',
    price: '€7–€15',
    production: '~ 200 萬瓶',
    tagline: '入門級 + 品種最自由',
    style: '果香主導、輕盈簡單、酸度明亮，是 Loire 氣泡酒系統中最便宜入門的選擇。',
    pairing: '日常聚會、開胃小點、火腿、簡單海鮮',
    producers: 'Cave de Saint-Verny、Marcel Richard、各合作社'
  }
]

const active = computed(() => aocs[activeIdx.value])

const dosages = [
  { name: 'Brut Nature', range: '0–3 g/L', color: 'linear-gradient(135deg, #16a085, #1abc9c)' },
  { name: 'Extra Brut', range: '0–6 g/L', color: 'linear-gradient(135deg, #2874a6, #3498db)' },
  { name: 'Brut', range: '0–12 g/L', color: 'linear-gradient(135deg, #5D2A8E, #7B3FA8)' },
  { name: 'Extra Sec', range: '12–17 g/L', color: 'linear-gradient(135deg, #d4af37, #e8b952)' },
  { name: 'Sec', range: '17–32 g/L', color: 'linear-gradient(135deg, #e67e22, #f39c12)' },
  { name: 'Demi-Sec', range: '32–50 g/L', color: 'linear-gradient(135deg, #c0392b, #e74c3c)' },
  { name: 'Doux', range: '> 50 g/L', color: 'linear-gradient(135deg, #7B1F2A, #A8324A)' }
]
</script>

<style scoped>
.cremant-slide {
  padding: 24px;
  max-width: 1100px;
  margin: 0 auto;
  color: #2c3e50;
}
.slide-header h2 {
  margin: 0 0 8px;
  font-size: 1.8rem;
  color: #2874a6;
  text-align: center;
}
.slide-desc {
  text-align: center;
  color: #555;
  margin: 0 0 22px;
  line-height: 1.7;
}

.aoc-tabs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-bottom: 18px;
}
.aoc-tab {
  background: #fff;
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 12px 8px;
  cursor: pointer;
  transition: all 0.25s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.aoc-tab:hover { transform: translateY(-2px); }
.aoc-tab.active { box-shadow: 0 6px 18px rgba(0,0,0,0.12); }
.tab-flag { font-size: 1.4rem; }
.tab-name { font-weight: 700; font-size: 0.9rem; text-align: center; line-height: 1.3; }
.tab-meta { font-size: 0.7rem; color: #888; text-align: center; }

.aoc-detail {
  background: #fff;
  border-radius: 12px;
  border-top: 5px solid #999;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  margin-bottom: 22px;
}
.detail-header {
  padding: 14px 20px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
.detail-header h3 { margin: 0; font-size: 1.4rem; }
.detail-fr { font-size: 0.95rem; opacity: 0.9; font-weight: 400; margin-left: 8px; }
.detail-tagline { font-size: 0.88rem; opacity: 0.9; }
.detail-stats { display: flex; gap: 12px; }
.stat { text-align: right; }
.stat strong { display: block; font-size: 1.2rem; font-weight: 700; }
.stat span { font-size: 0.78rem; opacity: 0.85; }
.detail-body { padding: 16px 20px; }
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 14px;
}
.metric {
  background: #fafafa;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}
.m-label { font-size: 0.74rem; color: #888; font-weight: 700; margin-bottom: 4px; }
.m-value { font-size: 0.85rem; font-weight: 700; color: #2c3e50; line-height: 1.4; }
.info-row {
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 0.92rem;
  line-height: 1.7;
  margin-top: 8px;
}
.style-row { background: #ebf5fb; border-left: 3px solid #2874a6; }
.pairing-row { background: #fff8e6; border-left: 3px solid #d4af37; }
.producer-row { background: #f0f5ee; border-left: 3px solid #16a085; }

.method-section { margin-bottom: 22px; }
.method-section h3 {
  color: #2874a6;
  font-size: 1.2rem;
  margin: 0 0 14px;
}
.method-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.method-card {
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.method-card.traditional { border-top: 4px solid #2874a6; }
.method-card.petnat { border-top: 4px solid #16a085; }
.method-header {
  font-weight: 700;
  font-size: 1rem;
  color: #2c3e50;
  margin-bottom: 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid #eee;
}
.method-card ol { margin: 0 0 10px; padding-left: 22px; }
.method-card li {
  font-size: 0.86rem;
  line-height: 1.7;
  margin-bottom: 4px;
}
.method-footnote {
  font-size: 0.82rem;
  font-weight: 700;
  padding: 8px 10px;
  border-radius: 6px;
}
.method-card.traditional .method-footnote { background: #ebf5fb; color: #2874a6; }
.method-card.petnat .method-footnote { background: #d5f5e3; color: #16a085; }

.dosage-section {
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  margin-bottom: 22px;
}
.dosage-section h3 {
  color: #2874a6;
  font-size: 1.1rem;
  margin: 0 0 12px;
}
.dosage-bar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 10px;
}
.dosage-step {
  padding: 10px 6px;
  border-radius: 8px;
  text-align: center;
  color: #fff;
}
.dosage-name {
  font-size: 0.78rem;
  font-weight: 700;
  margin-bottom: 2px;
}
.dosage-range {
  font-size: 0.7rem;
  opacity: 0.9;
}
.dosage-note {
  margin: 0;
  padding: 10px 12px;
  background: #fff8e6;
  border-radius: 8px;
  font-size: 0.88rem;
  line-height: 1.7;
  color: #6B4500;
}

.key-insight {
  background: linear-gradient(135deg, #2874a6, #16a085);
  color: #fff;
  border-radius: 12px;
  padding: 18px 20px;
}
.key-insight h4 { margin: 0 0 8px; font-size: 1.1rem; }
.key-insight p { margin: 0; line-height: 1.8; font-size: 0.95rem; }

@media (max-width: 768px) {
  .aoc-tabs { grid-template-columns: repeat(2, 1fr); }
  .metrics-grid { grid-template-columns: repeat(2, 1fr); }
  .method-cards { grid-template-columns: 1fr; }
  .dosage-bar { grid-template-columns: repeat(2, 1fr); }
  .detail-header { flex-direction: column; align-items: flex-start; }
  .detail-stats { width: 100%; justify-content: flex-start; }
  .stat { text-align: left; }
}
</style>
