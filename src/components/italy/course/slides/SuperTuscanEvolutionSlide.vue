<template>
  <div class="super-tuscan-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🌟 Super Tuscan 進化史' }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
      <p v-else class="slide-desc">從 1968 年 Sassicaia 突破傳統，到 2013 年 Bolgheri Sassicaia DOC，Super Tuscan 走過 45 年的法律與品味革命。</p>
    </div>

    <!-- 法律演進時間軸 -->
    <div class="legal-timeline">
      <h3>⚖️ 法律演進關鍵節點</h3>
      <div class="timeline">
        <div v-for="(ev, i) in timeline" :key="i" class="timeline-item">
          <div class="timeline-year">{{ ev.year }}</div>
          <div class="timeline-content" :style="{ borderLeftColor: ev.color }">
            <div class="event-title">{{ ev.title }}</div>
            <div class="event-desc">{{ ev.desc }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 五大旗艦酒 Tab -->
    <div class="wines-section">
      <h3>🍷 五大旗艦酒款</h3>
      <div class="wine-tabs">
        <button
          v-for="(w, i) in wines"
          :key="i"
          class="wine-tab"
          :class="{ active: activeIdx === i }"
          :style="{ borderColor: activeIdx === i ? w.color : 'transparent' }"
          @click="activeIdx = i"
        >
          <span class="wine-tab-name">{{ w.name }}</span>
          <span class="wine-tab-year">{{ w.firstVintage }}</span>
        </button>
      </div>

      <div class="wine-detail" :style="{ borderTopColor: activeWine.color }">
        <div class="wine-header" :style="{ background: `linear-gradient(135deg, ${activeWine.color}, ${activeWine.colorEnd})` }">
          <div class="wine-header-text">
            <h4>{{ activeWine.name }}</h4>
            <span class="wine-tagline">{{ activeWine.tagline }}</span>
          </div>
          <img :src="`/images/italy/bottle-${activeWine.name.toLowerCase()}.svg`" class="super-tuscan-bottle" :alt="activeWine.name" />
        </div>
        <div class="wine-body">
          <div class="wine-row">
            <div class="row-label">🏛 酒莊</div>
            <div class="row-value">{{ activeWine.estate }}</div>
          </div>
          <div class="wine-row">
            <div class="row-label">📅 首年份</div>
            <div class="row-value">{{ activeWine.firstVintage }}</div>
          </div>
          <div class="wine-row">
            <div class="row-label">🍇 混釀</div>
            <div class="row-value">{{ activeWine.blend }}</div>
          </div>
          <div class="wine-row">
            <div class="row-label">📍 產區</div>
            <div class="row-value">{{ activeWine.region }}</div>
          </div>
          <div class="wine-row">
            <div class="row-label">🎯 風格</div>
            <div class="row-value">{{ activeWine.style }}</div>
          </div>
          <div class="wine-row">
            <div class="row-label">💰 價格</div>
            <div class="row-value">{{ activeWine.price }}</div>
          </div>
          <div class="wine-story">
            <strong>📖 故事：</strong>{{ activeWine.story }}
          </div>
        </div>
      </div>
    </div>

    <!-- 風格定位圖 -->
    <div class="style-map">
      <h3>🗺️ 風格定位（Sangiovese 主導 ↔ Bordeaux 國際派）</h3>
      <div class="spectrum">
        <div class="spectrum-axis">
          <span class="axis-left">🇮🇹 Sangiovese 傳統</span>
          <span class="axis-right">🇫🇷 Bordeaux 國際</span>
        </div>
        <div class="spectrum-track">
          <div
            v-for="(w, i) in wines"
            :key="'sp-' + i"
            class="spectrum-dot"
            :class="{ active: activeIdx === i }"
            :style="{ left: w.spectrum + '%', backgroundColor: w.color }"
            @click="activeIdx = i"
            :title="w.name"
          >
            <span class="dot-label">{{ w.shortName }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="key-insight">
      <h4>💡 關鍵洞察</h4>
      <p>Super Tuscan 的真正革命不在「加 Cabernet」，而在<strong>挑戰 DOCG 法規桎梏 → 創造 IGT 等級 → 推動 Bolgheri DOC 誕生</strong>。1992 年「Goria 法」承認 IGT 後，這些酒款從「叛逆 Vino da Tavola」變為合法且價格屢創新高。</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const activeIdx = ref(0)

const timeline = [
  { year: '1968', title: 'Sassicaia 首釀', desc: 'Marchese Incisa della Rocchetta 在 Bolgheri 海岸種植 Cabernet Sauvignon，開啟超托時代。', color: '#8e44ad' },
  { year: '1971', title: 'Tignanello 誕生', desc: 'Antinori 家族首次在 Sangiovese 中加入 Cabernet 並使用 Barrique 小橡木桶，違反 Chianti 法規。', color: '#c0392b' },
  { year: '1978', title: 'Solaia 問世', desc: '以 Cabernet 主導（75%）+ Sangiovese 配角，更激進的國際化嘗試。', color: '#d4af37' },
  { year: '1985-86', title: 'Ornellaia / Masseto', desc: 'Lodovico Antinori 在 Bolgheri 推出波爾多風格旗艦；Masseto 100% Merlot 確立「義大利的 Petrus」地位。', color: '#16a085' },
  { year: '1992', title: 'Goria 法案 → IGT 等級', desc: '農業部長 Giovanni Goria 推動法律改革，新增 IGT（Indicazione Geografica Tipica）等級，承認超托合法地位。', color: '#3498db' },
  { year: '1994', title: 'Bolgheri DOC', desc: '專為 Cabernet/Merlot 等國際品種設立的 DOC，超托從「叛逆」變為「制度內精品」。', color: '#27ae60' },
  { year: '2013', title: 'Bolgheri Sassicaia DOC', desc: '全義大利唯一單一酒款專屬 DOC，Sassicaia 從 IGT 升格為自有 DOC。', color: '#e67e22' }
]

const defaultWines = [
  {
    name: 'Sassicaia',
    shortName: 'Sassicaia',
    firstVintage: '1968',
    estate: 'Tenuta San Guido',
    blend: '85% Cabernet Sauvignon + 15% Cabernet Franc',
    region: 'Bolgheri Sassicaia DOC（海岸礫石）',
    style: '優雅、波爾多左岸風格、雪松與黑醋栗',
    price: '€200–€400',
    tagline: '義大利的 Lafite',
    story: 'Marchese Incisa 將法國 Cabernet 引入 Bolgheri，發現此地礫石土壤類似波爾多左岸，造就義大利第一支國際風格頂級紅酒。',
    color: '#5D2A8E',
    colorEnd: '#7B3FA8',
    spectrum: 92
  },
  {
    name: 'Tignanello',
    shortName: 'Tigna',
    firstVintage: '1971',
    estate: 'Marchesi Antinori',
    blend: '80% Sangiovese + 15% Cabernet Sauvignon + 5% Cabernet Franc',
    region: 'Toscana IGT（Chianti Classico 區內）',
    style: 'Sangiovese 主導、國際品種增添結構、平衡優雅',
    price: '€100–€200',
    tagline: 'Antinori 經典革命',
    story: '第一款不使用白葡萄、採用 Barrique 小橡木桶陳年的 Sangiovese，違反當時 Chianti DOC 規範，被迫降級為 Vino da Tavola。',
    color: '#A8324A',
    colorEnd: '#C84B66',
    spectrum: 35
  },
  {
    name: 'Solaia',
    shortName: 'Solaia',
    firstVintage: '1978',
    estate: 'Marchesi Antinori',
    blend: '75% Cabernet Sauvignon + 20% Sangiovese + 5% Cabernet Franc',
    region: 'Toscana IGT（Tignanello 鄰園）',
    style: 'Cabernet 主導、強勁結構、長陳年潛力',
    price: '€200–€400',
    tagline: '向陽之地',
    story: 'Antinori 旗艦酒款，與 Tignanello 為鄰園卻反向操作——以 Cabernet 為主體、Sangiovese 為輔，2000 年成為《Wine Spectator》年度第一。',
    color: '#D4A037',
    colorEnd: '#E8B952',
    spectrum: 82
  },
  {
    name: 'Ornellaia',
    shortName: 'Ornellaia',
    firstVintage: '1985',
    estate: 'Tenuta dell\'Ornellaia（Frescobaldi）',
    blend: '50% Cabernet Sauvignon + 25% Merlot + 20% Cabernet Franc + 5% Petit Verdot',
    region: 'Bolgheri Superiore DOC',
    style: '豐滿、奢華、強勁、波爾多風格',
    price: '€150–€300',
    tagline: 'Bolgheri 經典波爾多混釀',
    story: 'Lodovico Antinori（Piero 之弟）創立，與 Sassicaia 為鄰，採用完整波爾多五大品種，現由 Frescobaldi 家族經營。',
    color: '#16886A',
    colorEnd: '#1FA682',
    spectrum: 88
  },
  {
    name: 'Masseto',
    shortName: 'Masseto',
    firstVintage: '1986',
    estate: 'Masseto Estate（原 Ornellaia 旗下）',
    blend: '100% Merlot',
    region: 'Toscana IGT（Bolgheri 內 7 ha 黏土）',
    style: '極致濃郁、天鵝絨般質地、頂級 Merlot',
    price: '€500–€1,000+',
    tagline: '義大利的 Petrus',
    story: 'Ornellaia 莊園內一塊獨特藍灰黏土地塊（類似 Pomerol），單獨釀造為 100% Merlot 旗艦。2012 年起獨立成為自有酒莊。',
    color: '#6B1A1A',
    colorEnd: '#8B2A2A',
    spectrum: 96
  }
]

const wines = computed(() => {
  if (Array.isArray(props.slide?.wines) && props.slide.wines.length) return props.slide.wines
  return defaultWines
})

const activeWine = computed(() => wines.value[activeIdx.value] || wines.value[0])
</script>

<style scoped>
.super-tuscan-slide {
  padding: 24px;
  max-width: 1100px;
  margin: 0 auto;
  color: #2c3e50;
}
.slide-header h2 {
  margin: 0 0 8px;
  font-size: 1.8rem;
  color: #6B1A1A;
  text-align: center;
}
.slide-desc {
  text-align: center;
  color: #555;
  margin: 0 0 24px;
  line-height: 1.7;
}

/* Timeline */
.legal-timeline {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  margin-bottom: 24px;
}
.legal-timeline h3 {
  margin: 0 0 16px;
  color: #c0392b;
  font-size: 1.2rem;
}
.timeline {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.timeline-item {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 14px;
  align-items: stretch;
}
.timeline-year {
  background: linear-gradient(135deg, #6B1A1A, #A8324A);
  color: #fff;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  font-weight: 700;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.timeline-content {
  background: #fafafa;
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 4px solid #999;
}
.event-title {
  font-weight: 700;
  margin-bottom: 4px;
  color: #2c3e50;
}
.event-desc {
  font-size: 0.93rem;
  color: #555;
  line-height: 1.6;
}

/* Wine tabs */
.wines-section {
  margin-bottom: 24px;
}
.wines-section h3 {
  margin: 0 0 14px;
  color: #6B1A1A;
  font-size: 1.2rem;
}
.wine-tabs {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  margin-bottom: 16px;
}
.wine-tab {
  background: #fff;
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 10px 6px;
  cursor: pointer;
  transition: all 0.25s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.wine-tab:hover {
  transform: translateY(-2px);
}
.wine-tab.active {
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
}
.wine-tab-name {
  font-weight: 700;
  font-size: 0.95rem;
}
.wine-tab-year {
  font-size: 0.78rem;
  color: #888;
}
.wine-detail {
  background: #fff;
  border-radius: 12px;
  border-top: 5px solid #999;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
}
.wine-header {
  padding: 16px 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.wine-header-text { flex: 1; min-width: 0; }
.wine-header h4 {
  margin: 0;
  font-size: 1.4rem;
}
.wine-tagline {
  font-size: 0.9rem;
  opacity: 0.9;
}
.super-tuscan-bottle {
  width: 60px;
  height: 110px;
  object-fit: contain;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 6px rgba(0,0,0,0.4));
}
.wine-body {
  padding: 16px 20px;
}
.wine-row {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  font-size: 0.93rem;
}
.wine-row:last-of-type {
  border-bottom: none;
}
.row-label {
  font-weight: 700;
  color: #666;
}
.row-value {
  color: #2c3e50;
  line-height: 1.6;
}
.wine-story {
  margin-top: 12px;
  padding: 12px;
  background: #fff8e6;
  border-radius: 8px;
  font-size: 0.93rem;
  line-height: 1.7;
  color: #6B4500;
  border-left: 3px solid #d4af37;
}

/* Spectrum */
.style-map {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  margin-bottom: 20px;
}
.style-map h3 {
  margin: 0 0 16px;
  color: #6B1A1A;
  font-size: 1.1rem;
}
.spectrum-axis {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 8px;
}
.spectrum-track {
  position: relative;
  height: 56px;
  background: linear-gradient(90deg, #A8324A 0%, #d4af37 50%, #5D2A8E 100%);
  border-radius: 28px;
  margin: 0 12px;
}
.spectrum-dot {
  position: absolute;
  top: 50%;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 3px solid #fff;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: all 0.25s;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
}
.spectrum-dot.active {
  width: 30px;
  height: 30px;
  box-shadow: 0 0 0 4px rgba(255,255,255,0.5), 0 4px 12px rgba(0,0,0,0.4);
}
.dot-label {
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.72rem;
  color: #2c3e50;
  white-space: nowrap;
  font-weight: 700;
}

/* Insight */
.key-insight {
  background: linear-gradient(135deg, #6B1A1A, #A8324A);
  color: #fff;
  border-radius: 12px;
  padding: 18px 20px;
}
.key-insight h4 {
  margin: 0 0 8px;
  font-size: 1.1rem;
}
.key-insight p {
  margin: 0;
  line-height: 1.8;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .wine-tabs { grid-template-columns: repeat(2, 1fr); }
  .timeline-item { grid-template-columns: 80px 1fr; }
}
</style>
