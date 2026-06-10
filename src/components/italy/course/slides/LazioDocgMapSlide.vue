<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🗺️ Lazio DOCG & DOC 互動地圖' }}</h2>
      <p class="slide-subtitle">點選按鈕查看各產區位置與詳細資訊</p>
    </div>

    <div class="zone-buttons">
      <div class="btn-group">
        <span class="btn-group-label">🏆 DOCG</span>
        <button
          v-for="z in DOCG_ZONES" :key="z.id"
          class="zone-btn" :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <div class="btn-group">
        <span class="btn-group-label">🍷 重要 DOC</span>
        <button
          v-for="z in MAIN_ZONES" :key="z.id"
          class="zone-btn" :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <div class="btn-group">
        <span class="btn-group-label">💎 特色 DOC</span>
        <button
          v-for="z in SMALL_ZONES" :key="z.id"
          class="zone-btn" :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <button v-if="selected" class="reset-btn" @click="resetView">🔄 全覽</button>
    </div>

    <div class="map-info-row">
      <div class="map-wrapper">
        <div ref="mapContainer" class="mapbox-container"></div>
        <div v-if="loading" class="map-loading">地圖載入中…</div>
        <div v-if="mapError" class="map-error">{{ mapError }}</div>
        <div class="map-legend">
          <div class="legend-row"><span class="legend-dot tier-s"></span>DOCG（Frascati Superiore / Cannellino / Cesanese）</div>
          <div class="legend-row"><span class="legend-dot tier-a"></span>重要 DOC（Est！/ Castelli Romani / Marino）</div>
          <div class="legend-row"><span class="legend-dot tier-b"></span>特色 DOC（Cerveteri / Olevano Romano / Colli Albani）</div>
        </div>
      </div>

      <div class="info-panel" v-if="selectedInfo">
        <div class="info-badge" :class="`tier-${selectedInfo.tier}`">{{ selectedInfo.tierLabel }}</div>
        <h3 class="info-name">{{ selectedInfo.name }}</h3>
        <div class="info-rows">
          <div class="info-row" v-for="row in selectedInfo.details" :key="row.label">
            <span class="info-label">{{ row.label }}</span>
            <span class="info-val">{{ row.value }}</span>
          </div>
        </div>
        <div class="info-desc">{{ selectedInfo.desc }}</div>
        <div class="info-pair" v-if="selectedInfo.pairing">
          <span class="pair-label">🍽️ 配餐</span>{{ selectedInfo.pairing }}
        </div>
        <div class="info-price" v-if="selectedInfo.price">
          <span class="price-label">💶 參考價格</span>{{ selectedInfo.price }}
        </div>
      </div>
      <div class="info-panel info-empty" v-else>
        <div class="empty-icon">🏛️</div>
        <p>點選上方按鈕或地圖上的產區<br>查看位置與詳細資訊</p>
        <div class="empty-hint">
          <div class="hint-row" v-for="z in ALL_ZONES" :key="z.id">
            <span class="hint-dot" :class="`tier-${z.tier}`"></span>
            <span>{{ z.emoji }} {{ z.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

defineProps({ slide: { type: Object, default: () => ({}) } })

const DOCG_ZONES = [
  {
    id: 'frascati-superiore',
    name: 'Frascati Superiore DOCG',
    shortName: 'Frascati Superiore',
    emoji: '🏆',
    tier: 's',
    tierLabel: '👑 頂級 DOCG — Lazio 旗艦白酒',
    center: [12.678, 41.818],
    zoom: 11,
    geojsonPath: '/italy/regions/lazio/geojson/DOCG/Frascati Superiore DOCG.geojson',
    details: [
      { label: 'DOCG 年份', value: '2011 年升格，從 DOC 升為 DOCG' },
      { label: '位置', value: 'Castelli Romani（羅馬丘）火山丘陵，羅馬東南 20km，海拔 200-600m' },
      { label: '品種', value: 'Malvasia Bianca di Candia 或 Malvasia del Lazio 最高 70%，Trebbiano 等' },
      { label: '土壤', value: '火山灰凝灰岩，礦物感豐富，是 Frascati 品質的關鍵' },
      { label: '等級', value: 'Superiore（不甜，酒精 11.5%+）/ Riserva（陳年 1 年以上）' }
    ],
    desc: 'Lazio 最知名的 DOCG，也是羅馬人最愛的白酒。火山丘陵土壤賦予獨特的礦物感和清爽酸度，比 DOC 等級展現更高複雜度。歷史上曾因大量生產品質低落，但 2011 年 DOCG 升格帶動品質革命。Casale Marchese、Villa Simone 是精品代表酒莊。',
    pairing: 'Carbonara（蛋黃醬義大利麵）、Cacio e Pepe（起司胡椒麵）、烤海鮮、炸鱈魚（Baccalà）',
    price: '€8-15 / Riserva €15-25，性價比絕佳的羅馬白酒，配任何義大利麵皆宜'
  },
  {
    id: 'cannellino-frascati',
    name: 'Cannellino di Frascati DOCG',
    shortName: 'Cannellino Frascati',
    emoji: '🍯',
    tier: 's',
    tierLabel: '🍯 甜型 DOCG — 羅馬丘陵晚採收甜白酒',
    center: [12.680, 41.815],
    zoom: 11.5,
    geojsonPath: '/italy/regions/lazio/geojson/DOCG/Cannellino di Frascati DOCG.geojson',
    details: [
      { label: 'DOCG 年份', value: '2011 年與 Frascati Superiore 同時升格為 DOCG' },
      { label: '風格', value: '半甜至甜型，殘糖 30-70g/L，晚採收或貴腐感染的葡萄' },
      { label: '品種', value: 'Malvasia Bianca di Candia 主導，與 Frascati Superiore 相同葡萄園' },
      { label: '香氣', value: '蜂蜜、杏桃、白花、橙花水、略帶貴腐風味' },
      { label: '特色', value: '產量極少，許多遊客從未喝過，是羅馬甜酒的珍稀寶藏' }
    ],
    desc: 'Frascati 同一產區釀造的甜型版本，展現火山丘陵在晚秋的貴腐潛力。蜂蜜和杏桃的甜潤風味，加上足夠的酸度平衡，是義大利中部最被低估的甜白酒之一。年產量極少，幾乎不出口，是走訪羅馬時的獨特發現。',
    pairing: 'Maritozzo 奶油麵包（羅馬傳統甜點）、杏仁餅乾、新鮮 Ricotta 起司配蜂蜜、水果塔',
    price: '€15-28，稀有甜白酒，比同等國際甜酒物超所值'
  },
  {
    id: 'cesanese-piglio',
    name: 'Cesanese del Piglio DOCG',
    shortName: 'Cesanese del Piglio',
    emoji: '🍷',
    tier: 's',
    tierLabel: '🍷 唯一紅酒 DOCG — Lazio 紅酒之冠',
    center: [13.125, 41.832],
    zoom: 11.5,
    geojsonPath: '/italy/regions/lazio/geojson/DOCG/Cesanese del Piglio Piglio DOCG.geojson',
    details: [
      { label: 'DOCG 年份', value: '2008 年升格，Lazio 唯一的紅酒 DOCG' },
      { label: '位置', value: 'Piglio 鎮，羅馬東南約 60km，Frosinone 省 Ciociaria 地區' },
      { label: '品種', value: 'Cesanese（Cesanese di Affile 或 Cesanese Comune）90%+' },
      { label: '風格', value: '乾型（主流）/ 微甜 / 甜型，三種風格皆允許' },
      { label: '香氣', value: '深紅色水果（黑櫻桃、覆盆莓）、紫羅蘭、香料、草本、礦物感' }
    ],
    desc: 'Lazio 唯一的紅酒 DOCG，Cesanese 品種的最高表現。Piglio 鎮位於羅馬以東的古老 Ciociaria 地區，石灰岩和黏土土壤賦予 Cesanese 典雅的礦物感。與 Frascati 的白酒統治地位不同，Cesanese del Piglio 代表 Lazio 被忽視的優質紅酒潛力，近年精品酒莊（Coletti Conti、Antonello Coletti）已引起國際關注。',
    pairing: '烤羊排、野豬肉醬義大利麵、陳年 Pecorino 起司、Coda alla Vaccinara（羅馬燉牛尾）',
    price: '€15-30，Lazio 最具陳年價值的紅酒，5-15 年陳年後風味更迷人'
  }
]

const MAIN_ZONES = [
  {
    id: 'est-montefiascone',
    name: 'Est! Est!! Est!!! di Montefiascone DOC',
    shortName: 'Est! Est!! Est!!!',
    emoji: '📜',
    tier: 'a',
    tierLabel: '📜 傳說 DOC — 12 世紀主教的最愛',
    center: [11.798, 42.541],
    zoom: 12,
    geojsonPath: '/italy/regions/lazio/geojson/DOC/Est! Est!! Est!!! di Montefiascone DOC.geojson',
    details: [
      { label: '傳說', value: '12 世紀僕人 Martin 為主教探路試酒，在 Montefiascone 連寫三個「Est!!!」大讚' },
      { label: '位置', value: 'Bolsena 湖畔，Viterbo 省，Lazio 北部火山丘陵' },
      { label: '品種', value: 'Trebbiano（Procanico）65%+，Malvasia Bianca di Candia，Rossetto' },
      { label: '風格', value: '清爽、輕盈、易飲；檸檬、青蘋果、白花、杏仁香氣' },
      { label: '現況', value: '名字比酒本身更有名，但近年部分生產者致力提升品質' }
    ],
    desc: 'Lazio 最具故事性的 DOC，傳說勝過酒質。12 世紀德國主教 Johann Fugger 命僕人 Martin 在好酒館門口寫「Est（是！）」，Martin 抵達 Montefiascone 後大為驚艷，寫下三個「Est!!!」。主教竟留在此地直到辭世，被埋於當地教堂。傳說讓這款酒成為義大利葡萄酒最佳話題入門。',
    pairing: 'Bolsena 湖魚料理、淡菜、炸鱈魚（Baccalà）、清蒸海鮮',
    price: '€6-12，名字比酒更珍貴，但作為話題酒款和日常白酒性價比高'
  },
  {
    id: 'castelli-romani',
    name: 'Castelli Romani DOC',
    shortName: 'Castelli Romani',
    emoji: '🏰',
    tier: 'a',
    tierLabel: '🏰 旗艦 DOC — 羅馬人的後花園',
    center: [12.728, 41.752],
    zoom: 10.5,
    geojsonPath: '/italy/regions/lazio/geojson/DOC/Castelli Romani DOC.geojson',
    details: [
      { label: '範圍', value: 'Castelli Romani（羅馬丘）廣域 DOC，涵蓋多個村鎮，包括 Frascati 所在的整個火山丘陵' },
      { label: '品種', value: '白：Malvasia + Trebbiano；紅：Cesanese + Montepulciano + Merlot 等' },
      { label: '角色', value: 'Frascati / Marino / Colli Albani 等更具體 DOC 之外的通用傘型 DOC' },
      { label: '土壤', value: '火山灰凝灰岩，礦物感豐富，是整個 Castelli 地區的共同風土特色' },
      { label: '歷史', value: '古羅馬貴族的別墅區（Alban Hills），教皇夏宮 Castel Gandolfo 在此地' }
    ],
    desc: 'Castelli Romani 是羅馬東南的火山丘陵地區，自古以來是羅馬人（從古羅馬到現代）的後花園與避暑勝地。教皇夏宮 Castel Gandolfo 坐落其中。廣域 DOC 涵蓋 Frascati、Marino、Colli Albani 等更具體的子產區外的廣大地帶，是 Lazio 白酒產量最大的地理來源。',
    pairing: 'Porchetta（羅馬烤乳豬）、Cacio e Pepe、烤海鮮、各式羅馬日常料理',
    price: '€5-12，羅馬日常餐桌白酒的主力，親民且品質穩定'
  },
  {
    id: 'marino',
    name: 'Marino DOC',
    shortName: 'Marino',
    emoji: '🫧',
    tier: 'a',
    tierLabel: '🫧 傳統 DOC — 白酒噴泉之城',
    center: [12.660, 41.770],
    zoom: 12.5,
    geojsonPath: '/italy/regions/lazio/geojson/DOC/Marino DOC.geojson',
    details: [
      { label: '傳說', value: '每年 10 月第一個週日舉辦「Sagra dell\'Uva」葡萄節，城市噴泉流出白酒' },
      { label: '位置', value: 'Castelli Romani 地區，羅馬南方 15km，海拔 350m 火山丘陵' },
      { label: '品種', value: 'Malvasia（60%+）+ Trebbiano，與 Frascati 品種相近' },
      { label: '風格', value: '清爽易飲白酒，可秋（不甜）或甜型（Amabile），也可為氣泡酒' },
      { label: '特色', value: '比 Frascati 低調但同樣美味，是當地人的日常首選，不受遊客溢價影響' }
    ],
    desc: 'Marino 最有名的不是酒本身，而是每年葡萄節噴泉流白酒的奇觀。每年 10 月第一個週日，Marino 廣場噴泉改為流出 Marino 白酒，吸引數萬名遊客。酒風清爽、礦物感足，是 Frascati 的優質平替，且因知名度較低，價格更親民。當地居民認為 Marino 比 Frascati 更好喝。',
    pairing: 'Porchetta 三明治、Pizza、炸朝鮮薊（Carciofo alla Giudea）、清淡前菜',
    price: '€5-10，比 Frascati 便宜 20-30%，羅馬人的秘密日常選擇'
  }
]

const SMALL_ZONES = [
  {
    id: 'cerveteri',
    name: 'Cerveteri DOC',
    shortName: 'Cerveteri',
    emoji: '🏺',
    tier: 'b',
    tierLabel: '💎 特色 DOC — 伊特拉斯坎古文明產區',
    center: [12.098, 42.002],
    zoom: 11,
    geojsonPath: '/italy/regions/lazio/geojson/DOC/Cerveteri DOC.geojson',
    details: [
      { label: '歷史', value: '伊特拉斯坎文明（Etruscan）最重要的城市之一，釀酒歷史超過 2700 年' },
      { label: '位置', value: 'Roma 省西北，Tyrrhenian 海岸，羅馬以北約 40km' },
      { label: '品種', value: '紅：Sangiovese 60%+ + Montepulciano；白：Trebbiano + Malvasia' },
      { label: '特色', value: '同時生產紅白酒，海岸性氣候讓酒款帶有海風礦物感' },
      { label: '古蹟', value: 'Cerveteri 考古遺址（Necropoli della Banditaccia）是 UNESCO 世界遺產' }
    ],
    desc: 'Cerveteri 是伊特拉斯坎文明的聖地，UNESCO 世界遺產的考古墓地（Necropoli）挖掘出 2700 年前的釀酒器具，是 Lazio 最古老的釀酒記錄之一。Tyrrhenian 海岸微氣候帶來海風礦物感，同時生產紅白兩種風格，是探索義大利前羅馬釀酒傳統的絕佳切入點。',
    pairing: '烤海鮮、Spaghetti alle Vongole（蛤蠣麵）、烤豬肉、地中海式料理',
    price: '€8-15，歷史深度與性價比並存的 Lazio 北部選擇'
  },
  {
    id: 'cesanese-olevano',
    name: 'Cesanese di Olevano Romano DOC',
    shortName: 'Cesanese Olevano',
    emoji: '🌹',
    tier: 'b',
    tierLabel: '💎 傳統 DOC — Cesanese 的傳統風格',
    center: [13.040, 41.862],
    zoom: 12,
    geojsonPath: '/italy/regions/lazio/geojson/DOC/Cesanese di Olevano Romano Olevano Romano DOC.geojson',
    details: [
      { label: '位置', value: 'Olevano Romano 鎮，羅馬東方約 50km，與 Cesanese del Piglio DOCG 相鄰' },
      { label: '品種', value: 'Cesanese（Affile 或 Comune）85%+' },
      { label: '風格', value: '比 Piglio DOCG 更易飲，可釀成 Secco（不甜）、Amabile（微甜）、Dolce（甜型）' },
      { label: '差異', value: '鄰近 DOCG 產區，同樣土壤，但法規要求略低，更親民' },
      { label: '特色', value: '傳統農村風格，未被精品化商業包裝，代表 Cesanese 的本真面貌' }
    ],
    desc: 'Cesanese 品種的傳統 DOC 表達，比鄰近的 Piglio DOCG 更接地氣。Olevano Romano 是義大利文藝復興以來德國藝術家愛好的景點，多樣風格（乾型到甜型）讓這款酒擁有廣泛配餐靈活性。是探索 Cesanese 品種特色的親民入口，了解 DOCG 之前的低成本嘗試。',
    pairing: '肉醬麵、披薩（乾型）、甜點（甜型）、鄉村起司拼盤',
    price: '€8-16，Lazio 紅酒中性價比最佳的入門選擇'
  },
  {
    id: 'colli-albani',
    name: 'Colli Albani DOC',
    shortName: 'Colli Albani',
    emoji: '🌋',
    tier: 'b',
    tierLabel: '💎 火山 DOC — 教皇夏宮產區',
    center: [12.652, 41.738],
    zoom: 12,
    geojsonPath: '/italy/regions/lazio/geojson/DOC/Colli Albani DOC.geojson',
    details: [
      { label: '位置', value: 'Alban Hills 火山丘陵，Castel Gandolfo（教皇夏宮）就在此產區內' },
      { label: '品種', value: 'Malvasia Bianca di Candia 60%+，Trebbiano，Malvasia del Lazio' },
      { label: '土壤', value: '火山灰凝灰岩（Tufo），是 Lazio 白酒礦物感的主要來源' },
      { label: '風格', value: '乾型（Secco）/ 微甜（Amabile）/ 甜型（Dolce），可為靜態或氣泡' },
      { label: '歷史', value: '古羅馬時期 Alba Longa（傳說中羅馬城前身）就在這片丘陵地帶' }
    ],
    desc: 'Alban Hills 是羅馬貴族和教皇的千年避暑勝地，Castel Gandolfo（教皇夏宮）就在產區內。火山土壤（Tufo）是 Frascati 和 Marino 的共同基礎，Colli Albani 展現同樣的礦物感和清爽風格。傳說這片丘陵正是羅馬城的前身 Alba Longa，是義大利歷史最深厚的葡萄酒產地之一。',
    pairing: 'Porchetta 烤乳豬、朝鮮薊料理（羅馬傳統菜）、海鮮前菜、輕食',
    price: '€6-12，火山丘陵的日常白酒，在地產在地消費，極少出口'
  }
]

const ALL_ZONES = [...DOCG_ZONES, ...MAIN_ZONES, ...SMALL_ZONES]

const TIER_STYLE = {
  s: { fill: '#4A0072', line: '#CE93D8', fillOpacity: 0.35, lineWidth: 2.8 },
  a: { fill: '#BF360C', line: '#FFAB91', fillOpacity: 0.28, lineWidth: 2.2 },
  b: { fill: '#1B5E20', line: '#A5D6A7', fillOpacity: 0.22, lineWidth: 1.8 }
}

const mapContainer = ref(null)
const loading = ref(true)
const mapError = ref(null)
const selected = ref(null)
let map = null
let markersArr = []

const selectedInfo = computed(() =>
  selected.value ? ALL_ZONES.find(z => z.id === selected.value) : null
)

async function fetchGeojson (z) {
  try {
    const res = await fetch(z.geojsonPath)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    if (!data.type || (data.type === 'Feature' && !data.geometry)) throw new Error('empty geometry')
    return data
  } catch (e) {
    console.warn(`Failed to load GeoJSON for ${z.id}:`, e)
    return null
  }
}

async function highlightAll () {
  if (!map || !map.isStyleLoaded()) return
  const geojsonData = await Promise.all(ALL_ZONES.map(z => fetchGeojson(z)))
  ALL_ZONES.forEach((z, i) => {
    const gj = geojsonData[i]
    if (!gj) return
    const ts = TIER_STYLE[z.tier]
    const fillId = `fill-${z.id}`
    const lineId = `line-${z.id}`
    if (!map.getSource(z.id)) map.addSource(z.id, { type: 'geojson', data: gj })
    if (!map.getLayer(fillId)) {
      map.addLayer({ id: fillId, type: 'fill', source: z.id,
        paint: { 'fill-color': ts.fill, 'fill-opacity': ts.fillOpacity } })
    }
    if (!map.getLayer(lineId)) {
      map.addLayer({ id: lineId, type: 'line', source: z.id,
        paint: { 'line-color': ts.line, 'line-width': ts.lineWidth } })
    }
    map.on('click', fillId, () => selectZone(z.id))
    map.on('mouseenter', fillId, () => { map.getCanvas().style.cursor = 'pointer' })
    map.on('mouseleave', fillId, () => { map.getCanvas().style.cursor = '' })
  })
  ALL_ZONES.forEach(z => {
    const el = document.createElement('div')
    el.innerHTML = z.emoji
    el.style.cssText = 'font-size:16px;cursor:pointer;filter:drop-shadow(0 1px 3px rgba(0,0,0,0.5));transition:transform 0.15s;'
    el.addEventListener('mouseenter', () => { el.style.transform = 'scale(1.3)' })
    el.addEventListener('mouseleave', () => { el.style.transform = 'scale(1)' })
    el.addEventListener('click', () => selectZone(z.id))
    markersArr.push(new mapboxgl.Marker({ element: el }).setLngLat(z.center).addTo(map))
  })
}

function selectZone (id) {
  selected.value = id
  const info = ALL_ZONES.find(z => z.id === id)
  if (!info || !map) return
  ALL_ZONES.forEach(z => {
    const ts = TIER_STYLE[z.tier]
    const active = z.id === id
    if (map.getLayer(`fill-${z.id}`)) {
      map.setPaintProperty(`fill-${z.id}`, 'fill-opacity', active ? ts.fillOpacity * 2.2 : ts.fillOpacity * 0.35)
    }
    if (map.getLayer(`line-${z.id}`)) {
      map.setPaintProperty(`line-${z.id}`, 'line-width', active ? ts.lineWidth * 1.8 : ts.lineWidth * 0.6)
    }
  })
  map.flyTo({ center: info.center, zoom: info.zoom, duration: 900, essential: true })
}

function resetView () {
  selected.value = null
  if (!map) return
  ALL_ZONES.forEach(z => {
    const ts = TIER_STYLE[z.tier]
    if (map.getLayer(`fill-${z.id}`)) map.setPaintProperty(`fill-${z.id}`, 'fill-opacity', ts.fillOpacity)
    if (map.getLayer(`line-${z.id}`)) map.setPaintProperty(`line-${z.id}`, 'line-width', ts.lineWidth)
  })
  map.flyTo({ center: [12.50, 41.90], zoom: 7.8, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = '未設定 Mapbox Token'; loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [12.50, 41.90],
    zoom: 7.8,
    attributionControl: false
  })
  map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
  map.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right')
  map.on('load', async () => { await highlightAll(); loading.value = false })
  map.on('error', e => { mapError.value = `地圖錯誤：${e.error?.message || '未知'}`; loading.value = false })
}

onMounted(async () => { await nextTick(); initMap() })
onBeforeUnmount(() => {
  markersArr.forEach(m => m.remove()); markersArr = []
  if (map) { map.remove(); map = null }
})
</script>

<style scoped>
.docg-map-slide {
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
  padding: 18px 26px 14px; box-sizing: border-box; gap: 8px;
}
.slide-header { flex-shrink: 0; }
.slide-header h2 {
  font-size: 1.38rem; font-weight: 700; color: #2c3e50;
  margin: 0 0 3px; border-bottom: 3px solid #c8a96e; padding-bottom: 7px;
}
.slide-subtitle { font-size: 0.8rem; color: #888; margin: 0; }

.zone-buttons {
  display: flex; flex-wrap: wrap; gap: 6px; align-items: center; flex-shrink: 0;
}
.btn-group { display: flex; align-items: center; gap: 5px; flex-wrap: wrap; }
.btn-group-label { font-size: 0.72rem; font-weight: 700; color: #888; white-space: nowrap; }

.zone-btn {
  padding: 4px 10px; border-radius: 16px; border: 1.5px solid transparent;
  font-size: 0.76rem; font-weight: 600; cursor: pointer; transition: all 0.15s; white-space: nowrap;
}
.zone-btn.tier-s   { background: #f3e5f5; border-color: #4A0072; color: #4A0072; }
.zone-btn.tier-a   { background: #fbe9e7; border-color: #BF360C; color: #BF360C; }
.zone-btn.tier-b   { background: #f1f8e9; border-color: #1B5E20; color: #1B5E20; }
.zone-btn.active.tier-s { background: #4A0072; color: #fff; }
.zone-btn.active.tier-a { background: #BF360C; color: #fff; }
.zone-btn.active.tier-b { background: #1B5E20; color: #fff; }
.zone-btn:hover:not(.active) { opacity: 0.75; transform: translateY(-1px); }

.reset-btn {
  padding: 4px 10px; border-radius: 14px; border: 1px solid #ccc;
  background: #f5f5f5; color: #666; font-size: 0.74rem; cursor: pointer;
  margin-left: auto; transition: background 0.15s;
}
.reset-btn:hover { background: #e8e8e8; }

.map-info-row { flex: 1; min-height: 0; display: flex; gap: 10px; }
.map-wrapper {
  flex: 1 1 58%; min-height: 0; position: relative;
  border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.12);
}
.mapbox-container { width: 100%; height: 100%; }
.map-loading, .map-error {
  position: absolute; inset: 0; display: flex; align-items: center;
  justify-content: center; font-size: 0.88rem; background: rgba(248,245,240,0.9); z-index: 3;
}
.map-error { color: #c0392b; }

.map-legend {
  position: absolute; bottom: 26px; left: 8px;
  background: rgba(255,255,255,0.93); border-radius: 8px; padding: 6px 9px;
  display: flex; flex-direction: column; gap: 4px;
  font-size: 0.7rem; color: #444; box-shadow: 0 2px 8px rgba(0,0,0,0.12); z-index: 5;
}
.legend-row { display: flex; align-items: center; gap: 5px; }
.legend-dot { width: 11px; height: 11px; border-radius: 3px; flex-shrink: 0; }
.legend-dot.tier-s { background: #4A0072; }
.legend-dot.tier-a { background: #BF360C; }
.legend-dot.tier-b { background: #1B5E20; }

.info-panel {
  flex: 0 0 40%; overflow-y: auto; background: #fafafa; border-radius: 12px;
  padding: 14px 16px; box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  display: flex; flex-direction: column; gap: 8px; box-sizing: border-box;
}
.info-empty { align-items: center; justify-content: center; text-align: center; color: #aaa; }
.empty-icon { font-size: 2rem; }
.info-empty p { font-size: 0.84rem; line-height: 1.5; margin: 0; }
.empty-hint {
  display: flex; flex-direction: column; gap: 4px;
  text-align: left; margin-top: 8px; font-size: 0.75rem; color: #666;
}
.hint-row { display: flex; align-items: center; gap: 6px; }
.hint-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
.hint-dot.tier-s { background: #4A0072; }
.hint-dot.tier-a { background: #BF360C; }
.hint-dot.tier-b { background: #1B5E20; }

.info-badge {
  display: inline-block; padding: 2px 10px; border-radius: 10px;
  font-size: 0.72rem; font-weight: 700; color: #fff; align-self: flex-start;
}
.info-badge.tier-s { background: #4A0072; }
.info-badge.tier-a { background: #BF360C; }
.info-badge.tier-b { background: #1B5E20; }

.info-name { font-size: 1rem; font-weight: 700; color: #2c3e50; margin: 0; }
.info-rows { display: flex; flex-direction: column; gap: 4px; }
.info-row { display: flex; gap: 6px; font-size: 0.77rem; line-height: 1.4; }
.info-label { flex: 0 0 56px; font-weight: 600; color: #888; font-size: 0.72rem; }
.info-val { color: #333; flex: 1; }

.info-desc {
  font-size: 0.77rem; color: #555; line-height: 1.55;
  background: #f0f4f8; border-radius: 7px; padding: 9px 11px;
}
.info-pair, .info-price {
  font-size: 0.76rem; color: #555; border-radius: 7px; padding: 7px 11px; line-height: 1.45;
}
.info-pair { background: #fff8e8; }
.info-price { background: #f3e5f5; }
.pair-label, .price-label { font-weight: 700; margin-right: 4px; }

@media (max-width: 680px) {
  .docg-map-slide { padding: 12px 12px 8px; }
  .map-info-row { flex-direction: column; }
  .map-wrapper { flex: 0 0 190px; }
  .info-panel { flex: 1; }
  .slide-header h2 { font-size: 1.05rem; }
}
</style>
