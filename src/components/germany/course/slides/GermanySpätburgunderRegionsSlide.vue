<template>
  <div class="spatburgunder-slide">
    <div class="slide-header">
      <h2>{{ slide?.title || '🍷 Spätburgunder 四大產區風土對決' }}</h2>
      <p class="slide-desc">{{ slide?.description || 'Spätburgunder（黑皮諾）佔德國紅酒 11.5%，卻分散在四大截然不同的產區——每個產區的土壤、氣候、釀造風格都讓這個品種展現出不同面貌。' }}</p>
    </div>

    <!-- 四大產區 tabs -->
    <div class="region-tabs">
      <button
        v-for="(r, i) in regions"
        :key="i"
        class="region-tab"
        :class="{ active: activeIdx === i }"
        :style="{ '--border-color': r.color }"
        @click="activeIdx = i"
      >
        <span class="tab-icon">{{ r.icon }}</span>
        <span class="tab-name">{{ r.name }}</span>
        <span class="tab-rank">{{ r.rank }}</span>
      </button>
    </div>

    <!-- Active region detail -->
    <div class="region-detail" :style="{ borderTopColor: active.color }">
      <div class="detail-header" :style="{ background: `linear-gradient(135deg, ${active.color}, ${active.colorEnd})` }">
        <div>
          <h3>{{ active.icon }} {{ active.name }}</h3>
          <span class="detail-sub">{{ active.subtitle }}</span>
        </div>
        <div class="detail-stars">
          <span v-for="i in active.stars" :key="i">⭐</span>
          <span class="star-label">{{ active.starLabel }}</span>
        </div>
      </div>
      <div class="detail-body">
        <div class="metrics-grid">
          <div class="metric"><div class="m-label">緯度</div><div class="m-value">{{ active.latitude }}</div></div>
          <div class="metric"><div class="m-label">土壤</div><div class="m-value">{{ active.soil }}</div></div>
          <div class="metric"><div class="m-label">年均溫</div><div class="m-value">{{ active.temp }}</div></div>
          <div class="metric"><div class="m-label">Spätburgunder 比例</div><div class="m-value">{{ active.pct }}</div></div>
          <div class="metric"><div class="m-label">典型酒精</div><div class="m-value">{{ active.abv }}</div></div>
          <div class="metric"><div class="m-label">釀造風格傾向</div><div class="m-value">{{ active.winemaking }}</div></div>
        </div>
        <div class="info-row profile-row"><strong>🎯 風格特色：</strong>{{ active.profile }}</div>
        <div class="info-row vineyard-row"><strong>🏆 頂級葡萄園：</strong>{{ active.vineyards }}</div>
        <div class="info-row estate-row"><strong>🏛️ 代表酒莊：</strong>{{ active.estates }}</div>
        <div class="info-row comparison-row"><strong>🥂 與勃根地相比：</strong>{{ active.vsBourgogne }}</div>
      </div>
    </div>

    <!-- 風格光譜 -->
    <div class="spectrum-section">
      <h3>🎨 Spätburgunder 風格光譜</h3>
      <div class="spectrum-bar-wrap">
        <div class="spectrum-labels-top">
          <span>輕盈優雅</span>
          <span>均衡</span>
          <span>豐滿厚重</span>
        </div>
        <div class="spectrum-bar">
          <div
            v-for="(r, i) in regions"
            :key="i"
            class="spectrum-marker"
            :style="{ left: r.spectrumPos + '%', borderColor: r.color, background: activeIdx === i ? r.color : '#fff', color: activeIdx === i ? '#fff' : r.color }"
            @click="activeIdx = i"
          >{{ r.icon }}</div>
        </div>
        <div class="spectrum-legend">
          <div v-for="(r, i) in regions" :key="i" class="legend-item" :style="{ color: r.color }">
            <span class="legend-dot" :style="{ background: r.color }"></span>
            {{ r.icon }} {{ r.name }} — {{ r.spectrumDesc }}
          </div>
        </div>
      </div>
    </div>

    <!-- 比較表 -->
    <div class="comparison-section">
      <h3>📊 四大產區 Spätburgunder 快速比較</h3>
      <div class="comp-table">
        <div class="comp-header">
          <div class="comp-col-label"></div>
          <div v-for="(r, i) in regions" :key="i" class="comp-col-head" :style="{ color: r.color }">{{ r.icon }} {{ r.name }}</div>
        </div>
        <div v-for="(row, i) in compRows" :key="i" class="comp-row" :class="{ alt: i % 2 === 1 }">
          <div class="comp-row-label">{{ row.label }}</div>
          <div v-for="(v, j) in row.values" :key="j" class="comp-cell" :class="{ highlight: activeIdx === j }">{{ v }}</div>
        </div>
      </div>
    </div>

    <!-- 大師之聲 -->
    <div class="master-quotes">
      <h3>🗣️ 酒評大師如何評價德國 Spätburgunder？</h3>
      <div class="quotes-grid">
        <div v-for="(q, i) in quotes" :key="i" class="quote-card">
          <div class="quote-text">"{{ q.text }}"</div>
          <div class="quote-author">— {{ q.author }}</div>
        </div>
      </div>
    </div>

    <div class="key-insight">
      <h4>💡 如何在盲品中辨識德國 Spätburgunder？</h4>
      <p>德國 Spätburgunder（尤其是 Ahr 和 Baden）比勃根地紅酒通常<strong>顏色更淺</strong>（因涼爽氣候），但<strong>香氣更直接</strong>（鮮紅莓果、紫羅蘭）。Ahr 款式帶有明顯的<strong>火山板岩礦物感</strong>；Baden 則更<strong>豐滿圓潤</strong>（接近勃根地 Côte de Nuits）。注意<strong>高酸低單寧</strong>是德國 Spätburgunder 的共同特徵，德語標籤上的「GG（Grosses Gewächs）」= 德國頂級 Spätburgunder 的認證符號。</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

defineProps({
  slide: { type: Object, default: () => ({}) }
})

const activeIdx = ref(0)

const regions = [
  {
    name: 'Ahr',
    icon: '🌋',
    color: '#8B1A1A',
    colorEnd: '#c0392b',
    rank: '紅酒聖地',
    subtitle: '最北紅酒產區，火山板岩上的奇蹟',
    stars: 5,
    starLabel: '全球頂級',
    latitude: '北緯 50.5°（全德最北紅酒區）',
    soil: '火山板岩 + 玄武岩礫石',
    temp: '9.5°C（但河谷微氣候 +3°C）',
    pct: '約 67% 全為 Spätburgunder',
    abv: '12.5–14%',
    winemaking: '整串發酵、舊桶熟成，強調純淨',
    profile: '顏色如透明紅寶石；鮮紅莓果（草莓、覆盆子）+ 紫羅蘭 + 火山板岩礦物感；單寧細緻如絲，酸度鮮明；最頂級的可與勃根地 Premier Cru 抗衡。',
    vineyards: 'Dernauer Pfarrwingert、Recher Herrenberg、Walporzheimer Kräuterberg、Neuenahrer Sonnenberg、Heimersheimer Landskrone',
    estates: 'Meyer-Näkel（傳奇，Jean Meyer）、Jean Stodden、Deutzerhof、Nelles、Weingut Adeneuer、Kreuzberg',
    vsBourgogne: '與 Chambolle-Musigny 最相似：同樣輕柔優雅，礦物感強；但 Ahr 帶有獨特火山板岩礦物，比 Chambolle 更透明、更早可飲。',
    spectrumPos: 15,
    spectrumDesc: '最輕盈、最礦物'
  },
  {
    name: 'Baden',
    icon: '☀️',
    color: '#E8760A',
    colorEnd: '#d68910',
    rank: '溫暖南境',
    subtitle: '最溫暖產區，最接近布根地風格',
    stars: 4,
    starLabel: '國際知名',
    latitude: '北緯 47.5–48.5°（最南）',
    soil: '火山岩（Kaiserstuhl）/ 石灰岩 + 黏土（北 Baden）',
    temp: '11.5°C（德國最暖）',
    pct: '約 35% 為 Spätburgunder（最高絕對量）',
    abv: '13–14.5%',
    winemaking: '全棄梗、法國新橡木桶，仿效 Côte d\'Or',
    profile: '更豐潤圓滿；深紅色澤；黑莓、黑醋栗、甘草；橡木桶影響明顯（部分）；單寧結構更扎實；最接近勃根地 Côte de Nuits 的德國版本。',
    vineyards: 'Kaiserstuhl 火山熔岩圓丘（世界無雙）、Oberbergen Bassgeige GG、Spätburgunder Ihringen Winklerberg',
    estates: 'Bernhard Huber（傳奇，Malterdingen）、Salwey、Dreissigacker、Ziereisen、Dr. Heger（Kaiserstuhl）',
    vsBourgogne: '與 Gevrey-Chambertin 或 Nuits-Saint-Georges 相似：更厚重的單寧、深果香、明顯橡木；仿效風格，但 Kaiserstuhl 火山土壤帶有獨特辛香。',
    spectrumPos: 75,
    spectrumDesc: '最豐滿、最厚重'
  },
  {
    name: 'Pfalz',
    icon: '🌿',
    color: '#1e7a3a',
    colorEnd: '#27ae60',
    rank: '溫暖多元',
    subtitle: '中等溫暖，紅白均衡發展',
    stars: 3,
    starLabel: '優秀',
    latitude: '北緯 49–49.5°',
    soil: '沙岩 + 黃土 + 石灰岩混合',
    temp: '11°C',
    pct: '約 15% 為 Spätburgunder（但量大）',
    abv: '12.5–14%',
    winemaking: '現代潔淨風格為主，少新桶',
    profile: '介於 Ahr 輕盈與 Baden 豐潤之間；紅莓 + 植物香 + 少許辛香料；單寧中等偏軟；適口易飲，性價比高；缺乏頂級 Ahr/Baden 的複雜度，但日常飲用佳選。',
    vineyards: 'Forster Jesuitengarten、Ruppertsberger Reiterpfad（Spätburgunder 為輔）',
    estates: 'Becker（Schweigen）、Knipser（Laumersheim）、Friedrich Becker',
    vsBourgogne: '類似 Côte Chalonnaise 風格：友好易飲，單寧輕柔，果香直接；不如 Ahr 複雜，但物超所值。',
    spectrumPos: 50,
    spectrumDesc: '中等均衡'
  },
  {
    name: 'Württemberg',
    icon: '🏚️',
    color: '#6d3b2f',
    colorEnd: '#935A4A',
    rank: '傳統紅酒鄉',
    subtitle: 'Stuttgart 周邊，德國傳統紅酒大本營',
    stars: 3,
    starLabel: '優秀（進步中）',
    latitude: '北緯 48.5–49°',
    soil: '貝殼石灰岩（Muschelkalk）+ 彩色砂岩',
    temp: '10.5°C',
    pct: '約 18% 為 Spätburgunder（但 Lemberger/Trollinger 更多）',
    abv: '12–13.5%',
    winemaking: '傳統大桶熟成（Stück）+ 現代整串發酵',
    profile: '通常比 Ahr 顏色更深，果香更深沉（黑莓、李子）；Muschelkalk 賦予白堊礦物感；傳統風格較龐雜，但頂尖酒莊（Aldinger、Haidle）已接近 Ahr 水準。',
    vineyards: 'Stuttgart Mörikestraße（市區葡萄園）、Untertürkheimer Gips GG',
    estates: 'Aldinger（Fellbach）、Haidle、Wachtstetter、Rainer Schnaitmann',
    vsBourgogne: '介於 Mâcon 和 Côte Chalonnaise 之間：深色但不如 Ahr 精細；Muschelkalk 土壤帶來獨特白堊礦物，是德國 Spätburgunder 中最「德式」的風格。',
    spectrumPos: 60,
    spectrumDesc: '中等偏濃郁'
  }
]

const active = computed(() => regions[activeIdx.value])

const compRows = [
  { label: '典型顏色', values: ['透明紅寶石', '深紅石榴石', '中深紅', '深紅紫'] },
  { label: '主要土壤', values: ['火山板岩', '火山岩/石灰', '沙岩/黃土', '貝殼石灰岩'] },
  { label: '果香類型', values: ['紅莓+紫羅蘭', '黑莓+甘草', '紅莓+草本', '黑莓+李子'] },
  { label: '礦物感', values: ['★★★★★', '★★★（火山）', '★★', '★★★（白堊）'] },
  { label: '單寧強度', values: ['最輕細', '中等至強', '輕到中等', '中等'] },
  { label: '橡木桶影響', values: ['最少（純淨）', '明顯（新桶）', '輕微', '傳統大桶'] },
  { label: 'VDP GG 頂級', values: ['是（多款）', '是（多款）', '是（少）', '是（新興）'] },
  { label: '國際知名度', values: ['★★★★★', '★★★★', '★★★', '★★★'] }
]

const quotes = [
  {
    text: 'Ahr 的頂級 Spätburgunder 令我震驚——在如此北緯度，竟能有如此成熟而精細的紅酒，完全顛覆我對德國紅酒的想像。',
    author: 'Jancis Robinson MW，2019 年德國巡訪筆記'
  },
  {
    text: '如果你喜歡 Chambolle-Musigny 的絲滑，去找一瓶 Ahr GG；如果你偏愛 Gevrey 的力度，Baden 的 Huber 或 Salwey 就是你的選擇。',
    author: 'Wine Spectator 德國專題，2021'
  }
]
</script>

<style scoped>
.spatburgunder-slide {
  padding: 24px;
  max-width: 1100px;
  margin: 0 auto;
  color: #2c3e50;
}
.slide-header h2 {
  margin: 0 0 8px;
  font-size: 1.8rem;
  color: #8B1A1A;
  text-align: center;
}
.slide-desc {
  text-align: center;
  color: #555;
  margin: 0 0 22px;
  line-height: 1.7;
}

.region-tabs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-bottom: 18px;
}
.region-tab {
  background: #fff;
  border: 2px solid var(--border-color, transparent);
  border-radius: 12px;
  padding: 12px 8px;
  cursor: pointer;
  transition: all 0.25s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.region-tab:hover { transform: translateY(-2px); }
.region-tab.active { box-shadow: 0 6px 18px rgba(0,0,0,0.14); }
.tab-icon { font-size: 1.7rem; }
.tab-name { font-weight: 700; font-size: 0.95rem; }
.tab-rank { font-size: 0.72rem; color: #888; }

.region-detail {
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
.detail-sub { font-size: 0.85rem; opacity: 0.9; margin-top: 4px; display: block; }
.detail-stars {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-direction: column;
  font-size: 0.8rem;
}
.star-label { opacity: 0.9; }
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
.m-label { font-size: 0.72rem; color: #888; font-weight: 700; margin-bottom: 4px; }
.m-value { font-size: 0.82rem; font-weight: 700; color: #2c3e50; line-height: 1.4; }

.info-row {
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 0.88rem;
  line-height: 1.7;
  margin-top: 8px;
}
.profile-row { background: #fdf2f8; border-left: 3px solid #8B1A1A; }
.vineyard-row { background: #d5f5e3; border-left: 3px solid #16a085; }
.estate-row { background: #f4ecf7; border-left: 3px solid #8e44ad; }
.comparison-row { background: #fef9e7; border-left: 3px solid #d4af37; }

.spectrum-section {
  margin-bottom: 22px;
}
.spectrum-section h3 {
  color: #8B1A1A;
  font-size: 1.2rem;
  margin: 0 0 14px;
}
.spectrum-bar-wrap { position: relative; }
.spectrum-labels-top {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 6px;
}
.spectrum-bar {
  position: relative;
  height: 14px;
  background: linear-gradient(to right, #f5cba7, #922b21);
  border-radius: 7px;
  margin-bottom: 18px;
}
.spectrum-marker {
  position: absolute;
  top: -10px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 3px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
  transform: translateX(-50%);
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
.spectrum-legend {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
}
.legend-item {
  font-size: 0.82rem;
  display: flex;
  align-items: center;
  gap: 6px;
}
.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.comparison-section { margin-bottom: 22px; }
.comparison-section h3 {
  color: #8B1A1A;
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
  grid-template-columns: 120px repeat(4, 1fr);
  background: #2c3e50;
  padding: 10px 14px;
  gap: 6px;
}
.comp-col-head {
  font-weight: 700;
  font-size: 0.82rem;
  text-align: center;
  color: #fff !important;
}
.comp-row {
  display: grid;
  grid-template-columns: 120px repeat(4, 1fr);
  padding: 7px 14px;
  gap: 6px;
  border-bottom: 1px solid #eee;
  align-items: center;
}
.comp-row.alt { background: #fafafa; }
.comp-row:last-child { border-bottom: none; }
.comp-row-label {
  font-weight: 700;
  font-size: 0.8rem;
  color: #555;
}
.comp-cell {
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.5;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.2s;
}
.comp-cell.highlight { background: #fdf2f8; font-weight: 700; }

.master-quotes { margin-bottom: 22px; }
.master-quotes h3 {
  color: #8B1A1A;
  font-size: 1.2rem;
  margin: 0 0 14px;
}
.quotes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
.quote-card {
  background: #fdf2f8;
  border-radius: 10px;
  padding: 14px 16px;
  border-left: 4px solid #8B1A1A;
}
.quote-text {
  font-style: italic;
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 8px;
}
.quote-author {
  font-size: 0.8rem;
  color: #888;
  font-weight: 700;
}

.key-insight {
  background: linear-gradient(135deg, #6d1a1a, #8B1A1A);
  color: #fff;
  border-radius: 12px;
  padding: 18px 20px;
}
.key-insight h4 { margin: 0 0 8px; font-size: 1.1rem; }
.key-insight p { margin: 0; line-height: 1.8; font-size: 0.95rem; }

@media (max-width: 768px) {
  .region-tabs { grid-template-columns: repeat(2, 1fr); }
  .metrics-grid { grid-template-columns: repeat(2, 1fr); }
  .comp-header, .comp-row { grid-template-columns: 80px repeat(4, 1fr); }
  .quotes-grid { grid-template-columns: 1fr; }
  .spectrum-legend { grid-template-columns: 1fr; }
}
</style>
