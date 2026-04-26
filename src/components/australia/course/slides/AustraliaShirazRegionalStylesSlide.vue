<template>
  <div class="au-shiraz-slide">
    <header class="ash-header">
      <h2 class="ash-title">{{ slide.title || '澳洲 Shiraz 產區風格圖譜' }}</h2>
      <p v-if="slide.subtitle" class="ash-desc">{{ slide.subtitle }}</p>
    </header>

    <!-- 切換光譜 -->
    <nav class="ash-spectrum">
      <span class="ash-spec-end ash-spec-cool">❄️ 涼爽</span>
      <button
        v-for="r in REGIONS"
        :key="r.key"
        class="ash-spec-btn"
        :class="{ active: currentKey === r.key }"
        :style="{ '--accent': r.color, '--temp': r.tempPct + '%' }"
        @click="currentKey = r.key"
      >
        <span class="ash-spec-name">{{ r.name }}</span>
        <span class="ash-spec-state">{{ r.state }}</span>
      </button>
      <span class="ash-spec-end ash-spec-hot">🔥 炎熱</span>
    </nav>

    <article v-if="current" class="ash-card" :style="{ '--accent': current.color }">
      <div class="ash-card-head">
        <h3 class="ash-card-title">
          {{ current.name }} Shiraz
          <span class="ash-card-state">— {{ current.state }} · {{ current.climate }}</span>
        </h3>
        <p class="ash-card-tag">{{ current.tagline }}</p>
      </div>

      <div class="ash-grid">
        <section class="ash-section">
          <h4>🌡️ 風土</h4>
          <ul class="ash-spec-list">
            <li><span class="key">氣候</span><span class="val">{{ current.climate }}</span></li>
            <li><span class="key">海拔</span><span class="val">{{ current.elevation }}</span></li>
            <li><span class="key">土壤</span><span class="val">{{ current.soil }}</span></li>
          </ul>
        </section>

        <section class="ash-section">
          <h4>🍷 風格指標</h4>
          <ul class="ash-spec-list">
            <li><span class="key">酒體</span><span class="val">{{ current.body }}</span></li>
            <li><span class="key">酒精</span><span class="val">{{ current.alcohol }}</span></li>
            <li><span class="key">酸度</span><span class="val">{{ current.acidity }}</span></li>
            <li><span class="key">單寧</span><span class="val">{{ current.tannin }}</span></li>
          </ul>
        </section>

        <section class="ash-section ash-aroma">
          <h4>👃 風味光譜</h4>
          <div class="ash-chips">
            <span v-for="a in current.aromas" :key="a" class="ash-chip">{{ a }}</span>
          </div>
        </section>

        <section class="ash-section">
          <h4>🏛️ 代表酒莊</h4>
          <ul>
            <li v-for="(w, i) in current.wineries" :key="i">
              <strong>{{ w.name }}</strong> — {{ w.note }}
            </li>
          </ul>
        </section>

        <section class="ash-section ash-trivia">
          <h4>💡 知識小檔案</h4>
          <p>{{ current.trivia }}</p>
        </section>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

// 從涼到熱排列
const REGIONS = [
  {
    key: 'grampians',
    name: 'Grampians',
    state: 'VIC',
    climate: '涼爽大陸型',
    color: '#3498db',
    tempPct: 15,
    tagline: '澳洲胡椒風 Shiraz 經典代表 — 細緻、紫羅蘭、白胡椒',
    elevation: '海拔 240–500m',
    soil: '砂岩、黏土、石英',
    body: '中等',
    alcohol: '13.5–14%',
    acidity: '⭐⭐⭐⭐⭐ 高',
    tannin: '中等、細緻、優雅',
    aromas: ['黑醋栗', '紫羅蘭', '白胡椒', '黑橄欖', '紅櫻桃', '雪松', '草本'],
    wineries: [
      { name: 'Mount Langi Ghiran', note: '澳洲最具胡椒風 Shiraz 標竿' },
      { name: 'Best\'s Great Western', note: '1868 年最古老 Shiraz 老藤' },
      { name: 'Seppelt Great Western', note: '頂級氣泡 Shiraz 發源地' }
    ],
    trivia: 'Grampians（含 Sub-Region Great Western）以「rotundone」化合物含量高著稱 — 這正是黑/白胡椒香氣的來源。Mount Langi Ghiran 1969 年的單一園 Shiraz 是澳洲精品 Shiraz 的開山之作。'
  },
  {
    key: 'heathcote',
    name: 'Heathcote',
    state: 'VIC',
    climate: '中度溫暖',
    color: '#9b59b6',
    tempPct: 30,
    tagline: '5 億年 Cambrian 紅土 — 礦物深邃、結構優雅',
    elevation: '海拔 160–320m',
    soil: 'Cambrian 紅土（含鐵）',
    body: '中至飽滿',
    alcohol: '14–14.5%',
    acidity: '⭐⭐⭐⭐ 高',
    tannin: '飽滿、礦物感、絲滑',
    aromas: ['黑莓', '李子', '紫羅蘭', '黑胡椒', '甘草', '可可', '泥土'],
    wineries: [
      { name: 'Jasper Hill', note: 'Georgia\'s Paddock 為傳奇單一園' },
      { name: 'Wild Duck Creek', note: 'Duck Muck 為澳洲最稀有 Shiraz 之一' },
      { name: 'Tellurian', note: '生物動力法精品酒莊' }
    ],
    trivia: 'Heathcote 的 Cambrian 紅土（5 億年地質）是世界最古老土壤之一，富含鐵、礦物質，賦予 Shiraz 獨特礦物深度與結構。雖只有約 50 家酒莊，卻是 Robert Parker 鍾愛的單一園產地之一。'
  },
  {
    key: 'mclaren',
    name: 'McLaren Vale',
    state: 'SA',
    climate: '地中海',
    color: '#e67e22',
    tempPct: 55,
    tagline: '海洋風溫暖 Shiraz — 飽滿圓潤、薄荷尤加利',
    elevation: '海拔 50–250m',
    soil: '黑壤土、礫石、石灰岩',
    body: '飽滿',
    alcohol: '14–15%',
    acidity: '⭐⭐⭐ 中',
    tannin: '柔順圓潤、絲絨感',
    aromas: ['黑莓', '黑李', '薄荷', '尤加利', '巧克力', '甘草', '黑橄欖'],
    wineries: [
      { name: 'd\'Arenberg', note: 'The Dead Arm 為旗艦單一園' },
      { name: 'Wirra Wirra', note: 'RSW Shiraz 經典款' },
      { name: 'Hardys', note: 'Eileen Hardy 旗艦混調' }
    ],
    trivia: 'McLaren Vale 緊鄰海洋（Gulf St. Vincent），下午海風帶來涼爽，平衡了地中海氣候。GSM 混釀（Grenache-Shiraz-Mourvèdre）是此區的招牌風格，源自隆河地區傳統。'
  },
  {
    key: 'barossa',
    name: 'Barossa Valley',
    state: 'SA',
    climate: '熱地中海',
    color: '#c0392b',
    tempPct: 80,
    tagline: '澳洲 Shiraz 之心 — 老藤、濃郁、長陳年潛力',
    elevation: '海拔 230–280m',
    soil: '紅棕壤、黏土、砂土',
    body: '飽滿至厚重',
    alcohol: '14.5–15.5%',
    acidity: '⭐⭐ 低至中',
    tannin: '濃密、甜美、絲絨',
    aromas: ['黑莓', '黑李', '甘草', '巧克力', '香草', '焦糖', '皮革（陳年）'],
    wineries: [
      { name: 'Penfolds', note: 'Grange — 全球最知名 Shiraz' },
      { name: 'Henschke', note: 'Hill of Grace — 1860 年代老藤' },
      { name: 'Torbreck', note: 'RunRig 旗艦 Shiraz-Viognier' },
      { name: 'Rockford', note: 'Basket Press 籃式壓榨經典' }
    ],
    trivia: 'Barossa 擁有全球最古老的連續耕作 Shiraz 老藤（最古 1843 年），因 19 世紀根瘤蚜未侵襲。Penfolds Grange（始於 1951 年）是澳洲首支真正世界級紅酒，年份酒在拍賣會可達 NT$ 30,000+。'
  },
  {
    key: 'hunter',
    name: 'Hunter Valley',
    state: 'NSW',
    climate: '潮濕亞熱帶',
    color: '#a83242',
    tempPct: 95,
    tagline: '世界最獨特 Shiraz — 中等酒體、皮革、土壤、長壽',
    elevation: '海拔 50–150m',
    soil: '紅黏土、玄武岩、砂土',
    body: '中等',
    alcohol: '13–14%',
    acidity: '⭐⭐⭐ 中',
    tannin: '柔順、土壤感',
    aromas: ['紅櫻桃', '李子', '皮革', '泥土', '香料', '咖啡', '陳年蘑菇'],
    wineries: [
      { name: 'Tyrrell\'s', note: 'Vat 9 Shiraz — Hunter 風格教科書' },
      { name: 'Brokenwood', note: 'Graveyard Vineyard 旗艦單一園' },
      { name: 'Mount Pleasant', note: '1880 年代老牌酒莊' }
    ],
    trivia: 'Hunter Valley 是澳洲最古老的葡萄酒產區（1820 年代），氣候潮濕亞熱帶實際上不適合釀酒，但獨特的「Hunter Burgundy」風格 — 中等酒體、土壤味、超長陳年（30+ 年）— 反而成為國際酒評家公認的世界獨特風格。'
  }
]

const currentKey = ref(props.slide?.defaultKey || 'barossa')
const current = computed(() => REGIONS.find(r => r.key === currentKey.value))
</script>

<style scoped>
.au-shiraz-slide {
  display: flex; flex-direction: column; gap: 14px;
  padding: 12px;
  background: #fff;
  border-radius: 14px;
  width: 100%;
  max-width: 100%;
}
.ash-header { text-align: center; }
.ash-title { margin: 0 0 4px; font-size: 1.5rem; color: #2c3e50; }
.ash-desc { margin: 0; color: #5b6b7a; font-size: 0.92rem; }

.ash-spectrum {
  display: flex; align-items: stretch; gap: 4px;
  background: linear-gradient(90deg, #d5e8f7 0%, #f7d5d5 100%);
  border-radius: 999px;
  padding: 6px;
  flex-wrap: wrap;
}
.ash-spec-end {
  display: flex; align-items: center;
  padding: 0 10px;
  font-size: 0.78rem; color: #555; font-weight: 600;
}
.ash-spec-btn {
  flex: 1 1 0;
  min-width: 110px;
  border: 2px solid #fff;
  background: rgba(255,255,255,0.7);
  border-radius: 999px;
  padding: 8px 10px;
  cursor: pointer;
  display: flex; flex-direction: column; align-items: center;
  font-size: 0.85rem; color: var(--accent);
  transition: all .18s ease;
}
.ash-spec-btn:hover { background: #fff; }
.ash-spec-btn.active {
  background: var(--accent); color: #fff; border-color: var(--accent);
  box-shadow: 0 3px 10px color-mix(in srgb, var(--accent) 40%, transparent);
}
.ash-spec-name { font-weight: 700; }
.ash-spec-state { font-size: 0.72rem; opacity: 0.85; }

.ash-card {
  border: 2px solid var(--accent);
  border-radius: 14px;
  padding: 18px 20px;
  background: linear-gradient(180deg, #fff 0%, color-mix(in srgb, var(--accent) 5%, #fff) 100%);
}
.ash-card-head { margin-bottom: 14px; }
.ash-card-title {
  margin: 0; font-size: 1.4rem; color: var(--accent);
  display: flex; flex-wrap: wrap; align-items: baseline; gap: 10px;
}
.ash-card-state { font-size: 0.85rem; color: #889; font-weight: 400; }
.ash-card-tag { margin: 4px 0 0; font-size: 0.95rem; color: #555; font-weight: 500; }

.ash-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 20px;
}
.ash-section h4 { margin: 0 0 6px; font-size: 0.95rem; color: #2c3e50; }
.ash-section ul { margin: 0; padding-left: 18px; font-size: 0.88rem; color: #2c3e50; line-height: 1.55; }
.ash-section ul li { margin: 0 0 3px; }
.ash-section p { margin: 0; font-size: 0.88rem; color: #2c3e50; line-height: 1.55; }

.ash-spec-list { list-style: none !important; padding: 0 !important; }
.ash-spec-list li {
  display: grid; grid-template-columns: 60px 1fr; gap: 6px;
  padding: 3px 0;
  border-bottom: 1px dashed #e2e4ea;
  font-size: 0.88rem;
}
.ash-spec-list .key { color: #666; }
.ash-spec-list .val { color: #2c3e50; font-weight: 500; }

.ash-aroma, .ash-trivia { grid-column: span 2; }
.ash-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.ash-chip {
  background: color-mix(in srgb, var(--accent) 15%, #fff);
  color: var(--accent);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 500;
}
.ash-trivia {
  background: color-mix(in srgb, var(--accent) 7%, #fff);
  border-radius: 8px;
  padding: 10px 12px;
}

@media (max-width: 768px) {
  .ash-grid { grid-template-columns: 1fr; }
  .ash-aroma, .ash-trivia { grid-column: auto; }
  .ash-spec-end { display: none; }
}
</style>
