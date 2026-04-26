<template>
  <div class="mosel-trio-slide">
    <div class="slide-header">
      <h2>{{ slide?.title || '🌊 Mosel 三大河流域對決' }}</h2>
      <p class="slide-desc">{{ slide?.description || 'Mosel 產區包含三條河流域：Mittelmosel（主軸）× Saar（最涼峭）× Ruwer（最細膩）。同樣是藍板岩上的 Riesling，卻因微氣候不同，發展出截然三種個性。' }}</p>
    </div>

    <!-- 三河流域 tabs -->
    <div class="river-tabs">
      <button
        v-for="(r, i) in rivers"
        :key="i"
        class="river-tab"
        :class="{ active: activeIdx === i }"
        :style="{ borderColor: activeIdx === i ? r.color : 'transparent' }"
        @click="activeIdx = i"
      >
        <span class="tab-icon">{{ r.icon }}</span>
        <span class="tab-name">{{ r.name }}</span>
        <span class="tab-tag">{{ r.tag }}</span>
      </button>
    </div>

    <!-- Active river detail -->
    <div class="river-detail" :style="{ borderTopColor: active.color }">
      <div class="detail-header" :style="{ background: `linear-gradient(135deg, ${active.color}, ${active.colorEnd})` }">
        <div>
          <h3>{{ active.icon }} {{ active.name }}</h3>
          <span class="detail-tagline">{{ active.tagline }}</span>
        </div>
        <div class="detail-badge">{{ active.badge }}</div>
      </div>
      <div class="detail-body">
        <div class="metrics-grid">
          <div class="metric"><div class="m-label">面積</div><div class="m-value">{{ active.area }}</div></div>
          <div class="metric"><div class="m-label">最陡坡度</div><div class="m-value">{{ active.slope }}</div></div>
          <div class="metric"><div class="m-label">土壤</div><div class="m-value">{{ active.soil }}</div></div>
          <div class="metric"><div class="m-label">夏季平均溫</div><div class="m-value">{{ active.summerTemp }}</div></div>
          <div class="metric"><div class="m-label">Riesling 比例</div><div class="m-value">{{ active.rieslingPct }}</div></div>
          <div class="metric"><div class="m-label">典型酒精</div><div class="m-value">{{ active.abv }}</div></div>
        </div>
        <div class="info-row style-row"><strong>🎯 風格特色：</strong>{{ active.style }}</div>
        <div class="info-row vineyard-row"><strong>🏆 頂級葡萄園（Grosse Lage）：</strong>{{ active.vineyards }}</div>
        <div class="info-row estate-row"><strong>🏛️ 頂級酒莊：</strong>{{ active.estates }}</div>
        <div class="info-row year-row"><strong>📅 優秀年份（近年）：</strong>{{ active.vintages }}</div>
      </div>
    </div>

    <!-- 三流域風格比較表 -->
    <div class="comparison-section">
      <h3>⚖️ 三大河流域 Riesling 風格對比</h3>
      <div class="comp-table">
        <div class="comp-header">
          <div class="comp-col-label"></div>
          <div v-for="(r, i) in rivers" :key="i" class="comp-col-head" :style="{ color: r.color }">{{ r.icon }} {{ r.name }}</div>
        </div>
        <div v-for="(row, i) in compRows" :key="i" class="comp-row" :class="{ alt: i % 2 === 1 }">
          <div class="comp-row-label">{{ row.label }}</div>
          <div v-for="(v, j) in row.values" :key="j" class="comp-cell" :class="{ highlight: activeIdx === j }">{{ v }}</div>
        </div>
      </div>
    </div>

    <!-- 板岩土壤解說 -->
    <div class="slate-section">
      <h3>🪨 Mosel 三種板岩：顏色 × 風味差異</h3>
      <div class="slate-cards">
        <div v-for="(s, i) in slates" :key="i" class="slate-card" :style="{ borderLeftColor: s.color }">
          <div class="slate-icon" :style="{ background: s.bg }">{{ s.icon }}</div>
          <div class="slate-info">
            <h4>{{ s.name }}</h4>
            <p class="slate-where"><strong>主要河流域：</strong>{{ s.where }}</p>
            <p class="slate-flavor"><strong>風味影響：</strong>{{ s.flavor }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="key-insight">
      <h4>💡 品飲區分三流域的捷徑</h4>
      <p><strong>Mittelmosel</strong>（如 Wehlener Sonnenuhr）= 桃子 + 礦物 + 優雅均衡，最易親近；<strong>Saar</strong>（如 Scharzhofberg）= 鋒利鹹礦物 + 刺激高酸 + 青蘋果，需好年份才開放，被視為「Riesling 終極修行」；<strong>Ruwer</strong>（如 Maximin Grünhaus）= 最細膩花香 + 煙燻石墨 + 近乎透明的輕盈感，產量少、難尋、拍賣天價。三條河流的板岩顏色不同（藍/灰/紅砂岩混合），造就三種截然不同的礦物個性。</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

defineProps({
  slide: { type: Object, default: () => ({}) }
})

const activeIdx = ref(0)

const rivers = [
  {
    name: 'Mittelmosel',
    icon: '🌊',
    color: '#2874a6',
    colorEnd: '#3498db',
    tag: '精華核心',
    badge: '最大 · 最知名',
    tagline: '頂級葡萄園的密集地帶',
    area: '約 7,800 公頃（Mosel 主體）',
    slope: '最高 70°（Bremmer Calmont）',
    soil: '藍板岩（Blauschiefer）為主',
    summerTemp: '~17.5°C',
    rieslingPct: '約 65%',
    abv: '7.5–10%（Kabinett）',
    style: '藍板岩賦予清晰礦物感與精緻桃子香；河流彎道南向坡充分日照；平衡高酸與精緻果香；從輕盈 Kabinett 到濃郁 TBA 全系列皆優秀。',
    vineyards: 'Bernkasteler Doctor（最著名）、Wehlener Sonnenuhr（J.J. Prüm）、Ürziger Würzgarten（紅砂岩）、Graacher Himmelreich、Erdener Treppchen',
    estates: 'J.J. Prüm（傳奇）、Dr. Loosen、Markus Molitor、Heymann-Löwenstein、Weingut Willi Schaefer',
    vintages: '2019、2015、2011（TBA 年份）、2009、2005（甜酒經典）'
  },
  {
    name: 'Saar',
    icon: '❄️',
    color: '#1a3a5c',
    colorEnd: '#2c5282',
    tag: '最涼峭酸利',
    badge: '涼爽 · 礦物最強',
    tagline: '低溫鋒利的礦物王國',
    area: '約 800 公頃',
    slope: '最高 60°（Wiltingen 周邊）',
    soil: '灰板岩（Grauschiefer）+ 石英岩',
    summerTemp: '~16.5°C（比 Mittelmosel 低 1°C）',
    rieslingPct: '約 90%（幾乎純 Riesling）',
    abv: '7–8.5%（最低酒精）',
    style: '涼爽氣候使葡萄保留極高酸度；灰板岩與石英礦物帶來鹹礦物 + 煙燻 + 石板香；壞年份偏瘦，好年份（2003/2009/2019）可達 TBA 巔峰。被稱為「Riesling 最極端的表達」。',
    vineyards: 'Scharzhofberg（Wiltingen，德國最偉大葡萄園之一）、Ockfener Bockstein、Ayl Kupp、Wiltinger Braune Kupp、Kanzemer Altenberg',
    estates: 'Egon Müller（Scharzhofberg，世界最昂貴德國酒）、Van Volxem、Weingut Zilliken（Forstmeister Geltz）、Peter Lauer',
    vintages: '2003（例外溫暖）、2009、2015、2019（近年最佳）'
  },
  {
    name: 'Ruwer',
    icon: '💎',
    color: '#4a154b',
    colorEnd: '#7b2d8b',
    tag: '最細膩稀珍',
    badge: '稀有 · 最優雅',
    tagline: '花香石墨的透明之美',
    area: '約 200 公頃（最小）',
    slope: '30–50°',
    soil: '板岩 + 礫石（比 Saar 更細碎）',
    summerTemp: '~16°C（最涼）',
    rieslingPct: '約 85%',
    abv: '7–9%',
    style: '最涼的支流，葡萄成熟最緩。Riesling 在此展現最細緻的花香（白花、茉莉）+ 煙燻石墨 + 透明輕盈感；酸度如琴弦般緊繃；Auslese/TBA 年份稀少且珍貴，二手市場價格高昂。',
    vineyards: 'Maximin Grünhäuser Abtsberg / Herrenberg（最著名）、Karthaüserhofberg（Eitelsbach）',
    estates: 'Von Schubert（Maximin Grünhaus，傳奇家族）、Karthäuserhof（Christoph Tyrell）',
    vintages: '2001（Ruwer TBA 傳說）、2009、2011、2015、2018'
  }
]

const active = computed(() => rivers[activeIdx.value])

const compRows = [
  { label: '面積', values: ['~7,800 ha（主體）', '~800 ha', '~200 ha（最小）'] },
  { label: '氣候', values: ['溫和，河灣保護', '最涼，支流朝北', '最涼，最北方'] },
  { label: '板岩類型', values: ['藍板岩（主）', '灰板岩 + 石英', '碎板岩 + 礫石'] },
  { label: '酸度水平', values: ['高', '極高', '最高（如琴弦）'] },
  { label: '典型 Kabinett ABV', values: ['8–9%', '7–8.5%', '7–8%'] },
  { label: '好年份需求', values: ['大多年份穩定', '需好年份才開放', '最挑剔年份'] },
  { label: '風格核心', values: ['桃子 + 礦物 + 均衡', '鹹礦物 + 鋒利酸度', '花香 + 石墨 + 透明'] },
  { label: '稀有度', values: ['易取得', '頂級難求', '極度稀珍'] },
  { label: '價格（頂級 TBA）', values: ['€200–€1,500', '€500–€35,000（Egon Müller）', '€500–€5,000'] }
]

const slates = [
  {
    name: '藍板岩（Blauschiefer）',
    icon: '🔵',
    color: '#2874a6',
    bg: 'linear-gradient(135deg, #1a3a5c, #2874a6)',
    where: 'Mittelmosel 主體（Bernkastel、Wehlen、Piesport）',
    flavor: '優雅礦物感、鹹石頭、桃子蜜糖；最平衡的風土表達'
  },
  {
    name: '灰板岩（Grauschiefer）',
    icon: '⚪',
    color: '#555',
    bg: 'linear-gradient(135deg, #333, #666)',
    where: 'Saar（Wiltingen、Ayl、Ockfen）',
    flavor: '煙燻板岩 + 鋒利礦物 + 高酸；最緊縮、最需陳年'
  },
  {
    name: '紅砂岩（Roter Sandstein）',
    icon: '🔴',
    color: '#c0392b',
    bg: 'linear-gradient(135deg, #7B1F2A, #c0392b)',
    where: 'Ürziger Würzgarten、Erdener Treppchen（Mittelmosel 中段）',
    flavor: '獨特辛香料（肉桂、丁香）+ 礦物；與藍板岩鄰地段截然不同'
  }
]
</script>

<style scoped>
.mosel-trio-slide {
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

.river-tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 18px;
}
.river-tab {
  background: #fff;
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 14px 10px;
  cursor: pointer;
  transition: all 0.25s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.river-tab:hover { transform: translateY(-2px); }
.river-tab.active { box-shadow: 0 6px 18px rgba(0,0,0,0.14); }
.tab-icon { font-size: 1.8rem; }
.tab-name { font-weight: 700; font-size: 1rem; }
.tab-tag { font-size: 0.75rem; color: #888; }

.river-detail {
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
.detail-header h3 { margin: 0; font-size: 1.5rem; }
.detail-tagline { font-size: 0.88rem; opacity: 0.9; margin-top: 4px; display: block; }
.detail-badge {
  background: rgba(255,255,255,0.25);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
}
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
  font-size: 0.9rem;
  line-height: 1.7;
  margin-top: 8px;
}
.style-row { background: #ebf5fb; border-left: 3px solid #2874a6; }
.vineyard-row { background: #d5f5e3; border-left: 3px solid #16a085; }
.estate-row { background: #f4ecf7; border-left: 3px solid #8e44ad; }
.year-row { background: #fff8e6; border-left: 3px solid #d4af37; }

.comparison-section { margin-bottom: 22px; }
.comparison-section h3 {
  color: #2874a6;
  font-size: 1.2rem;
  margin: 0 0 14px;
}
.comp-table {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.comp-header {
  display: grid;
  grid-template-columns: 140px repeat(3, 1fr);
  background: #2c3e50;
  padding: 10px 14px;
  gap: 8px;
}
.comp-col-head {
  font-weight: 700;
  font-size: 0.88rem;
  text-align: center;
  color: #fff !important;
}
.comp-row {
  display: grid;
  grid-template-columns: 140px repeat(3, 1fr);
  padding: 8px 14px;
  gap: 8px;
  border-bottom: 1px solid #eee;
  align-items: center;
}
.comp-row.alt { background: #fafafa; }
.comp-row:last-child { border-bottom: none; }
.comp-row-label {
  font-weight: 700;
  font-size: 0.82rem;
  color: #555;
}
.comp-cell {
  font-size: 0.82rem;
  text-align: center;
  line-height: 1.5;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.2s;
}
.comp-cell.highlight { background: #ebf5fb; font-weight: 700; }

.slate-section { margin-bottom: 22px; }
.slate-section h3 {
  color: #2874a6;
  font-size: 1.2rem;
  margin: 0 0 14px;
}
.slate-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
.slate-card {
  background: #fff;
  border-left: 5px solid #999;
  border-radius: 10px;
  padding: 12px 16px;
  display: flex;
  gap: 14px;
  align-items: flex-start;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.slate-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}
.slate-info h4 { margin: 0 0 6px; color: #2c3e50; font-size: 1rem; }
.slate-where, .slate-flavor { font-size: 0.85rem; margin: 3px 0; line-height: 1.6; }

.key-insight {
  background: linear-gradient(135deg, #1a3a5c, #2874a6);
  color: #fff;
  border-radius: 12px;
  padding: 18px 20px;
}
.key-insight h4 { margin: 0 0 8px; font-size: 1.1rem; }
.key-insight p { margin: 0; line-height: 1.8; font-size: 0.95rem; }

@media (max-width: 768px) {
  .river-tabs { grid-template-columns: 1fr; }
  .metrics-grid { grid-template-columns: repeat(2, 1fr); }
  .comp-header, .comp-row { grid-template-columns: 90px repeat(3, 1fr); }
  .detail-header { flex-direction: column; align-items: flex-start; }
}
</style>
