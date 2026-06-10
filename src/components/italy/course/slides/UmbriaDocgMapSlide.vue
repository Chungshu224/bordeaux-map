<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🗺️ Umbria DOCG & DOC 互動地圖' }}</h2>
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
          <div class="legend-row"><span class="legend-dot tier-s"></span>DOCG（Sagrantino / Torgiano Riserva）</div>
          <div class="legend-row"><span class="legend-dot tier-a"></span>重要 DOC（Montefalco / Orvieto / Torgiano）</div>
          <div class="legend-row"><span class="legend-dot tier-b"></span>特色 DOC（Assisi / Spoleto / Trasimeno）</div>
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
        <div class="empty-icon">💚</div>
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
    id: 'sagrantino-montefalco',
    name: 'Montefalco Sagrantino DOCG',
    shortName: 'Sagrantino Montefalco',
    emoji: '🏆',
    tier: 's',
    tierLabel: '👑 頂級 DOCG — 世界單寧之王',
    center: [12.650, 42.890],
    zoom: 11,
    geojsonPath: '/italy/regions/umbria/geojson/DOCG/Montefalco Sagrantino DOCG.geojson',
    details: [
      { label: 'DOCG 年份', value: '1992 年升格，Umbria 最重要的 DOCG' },
      { label: '品種', value: 'Sagrantino 100%，Umbria 獨有本土品種，全球單寧含量最高之一' },
      { label: '單寧', value: '5000-6000 mg/L，超越 Nebbiolo（3000-4000）和 Cabernet（2500-3000）' },
      { label: '陳年', value: '法規最低 33 個月（含 12 個月橡木桶），Riserva 更長' },
      { label: '風格', value: 'Secco（不甜乾型）/ Passito（風乾甜型），酒精 14-16%，陳年潛力 15-30 年' }
    ],
    desc: '全義大利單寧含量最高的 DOCG，Sagrantino 是 Montefalco 小鎮的專屬品種。「Sagrantino」名稱可能源自拉丁語「Sacramentum」（神聖），傳說最初用於宗教儀式的甜型 Passito 版本。現代乾型版本展現驚人的黑色水果、皮革、巧克力複雜度，是義大利頂級收藏紅酒。Arnaldo Caprai、Paolo Bea 是世界級酒莊。',
    pairing: '野豬燉肉（Cinghiale）、烤鴿子、陳年 Pecorino Umbro 起司、黑松露料理（Umbria 特產）',
    price: '€25-55 / Riserva €45-100，陳年 8-10 年後開瓶，義大利頂級紅酒中性價比最高之一'
  },
  {
    id: 'torgiano-riserva',
    name: 'Torgiano Rosso Riserva DOCG',
    shortName: 'Torgiano Riserva',
    emoji: '⭐',
    tier: 's',
    tierLabel: '⭐ 精英 DOCG — 單一酒莊傳奇',
    center: [12.432, 43.028],
    zoom: 12.5,
    geojsonPath: '/italy/regions/umbria/geojson/DOCG/Torgiano Rosso Riserva DOCG.geojson',
    details: [
      { label: 'DOCG 年份', value: '1990 年升格，Umbria 第一個 DOCG' },
      { label: '特殊性', value: '義大利少見的「單一酒莊 DOCG」——Lungarotti 家族是主要生產者' },
      { label: '品種', value: 'Sangiovese 70%+ + Canaiolo，Riserva 陳年最少 36 個月' },
      { label: '位置', value: 'Torgiano 鎮，Perugia 省，Tiber 河谷，海拔 200-250m' },
      { label: '代表', value: 'Lungarotti「Rubesco Riserva Vigna Monticchio」是 Umbria 最具聲望的紅酒之一' }
    ],
    desc: 'Umbria 第一個 DOCG，主要由 Lungarotti 家族一手建立。Giorgio Lungarotti 在 1960-70 年代幾乎以一人之力將 Umbria 葡萄酒推向國際，其「Rubesco Riserva Vigna Monticchio」至今仍是 Umbria 頂級紅酒的代表作。以 Sangiovese 為基底，展現出比 Tuscany 更柔和圓潤的個性，搭配黑松露尤為出色。',
    pairing: '黑松露義大利麵（Umbria 特產）、烤牛排、野味燉肉、陳年 Umbrian 起司',
    price: '€25-50 / Lungarotti Vigna Monticchio €45-80，Umbria 最優雅的頂級紅酒'
  }
]

const MAIN_ZONES = [
  {
    id: 'montefalco-doc',
    name: 'Montefalco DOC',
    shortName: 'Montefalco DOC',
    emoji: '🍷',
    tier: 'a',
    tierLabel: '🍷 旗艦 DOC — Sagrantino 的入門版',
    center: [12.650, 42.888],
    zoom: 11,
    geojsonPath: '/italy/regions/umbria/geojson/DOC/Montefalco DOC.geojson',
    details: [
      { label: '品種', value: '紅：Sangiovese 60-70% + Sagrantino 10-15% + 其他；白：Grechetto 等' },
      { label: '角色', value: 'Montefalco Rosso：比 DOCG 更易飲、更早開瓶，是認識 Sagrantino 的最佳入口' },
      { label: '陳年', value: 'Montefalco Rosso 陳年最少 18 個月（Riserva 30 個月），遠低於 DOCG 要求' },
      { label: '風格', value: '果香更豐富、單寧更柔順，黑莓、李子、紫羅蘭、香料，酒精 12.5-13.5%' },
      { label: '價值', value: '同樣的 Montefalco 風土，但價格只有 DOCG 的三分之一，CP 值極高' }
    ],
    desc: 'Montefalco 小鎮被稱為「Umbria 的陽台」（Balcone dell\'Umbria），俯瞰全 Umbria 最美的丘陵風景。Montefalco DOC 是比 Sagrantino DOCG 更親民的入門選擇，保留了 Montefalco 風土的精髓，但以 Sangiovese 為主體，單寧更柔順，3-5 年即可欣賞其魅力。Caprai 的 Montefalco Rosso 是性價比標竿。',
    pairing: '烤羊肉、肉醬麵、Umbrian 燉肉、黑松露薄片、Pecorino 起司',
    price: '€10-20 / Riserva €18-35，DOCG 風土的三分之一價格，Umbria 紅酒最佳性價比'
  },
  {
    id: 'orvieto',
    name: 'Orvieto DOC',
    shortName: 'Orvieto',
    emoji: '⚪',
    tier: 'a',
    tierLabel: '⚪ 旗艦 DOC — Umbria 白酒女王',
    center: [12.108, 42.718],
    zoom: 11.5,
    geojsonPath: '/italy/regions/umbria/geojson/DOC/Orvieto DOC.geojson',
    details: [
      { label: '位置', value: 'Umbria 西南角，Terni 省，建於凝灰岩台地上的中世紀古城' },
      { label: '品種', value: 'Grechetto 40-60%（主導），Trebbiano Toscano，其他白品種最多 20%' },
      { label: '風格', value: '乾型（Secco，主流）/ 半甜（Abboccato）/ 甜型（Amabile / Dolce）' },
      { label: '貴腐', value: '特殊年份可產出「Muffa Nobile」（義大利版 Sauternes），極稀有珍品' },
      { label: '跨界', value: '產區橫跨 Umbria 與 Lazio 兩個大區，是義大利少數跨界 DOC' }
    ],
    desc: 'Orvieto 古城建於海拔 325m 的火山凝灰岩台地上，是中世紀義大利最壯麗的城市之一。其同名白酒是 Umbria 最知名的出口品，以 Grechetto 為靈魂品種，清爽的柑橘花香和杏仁礦物感是典型風格。特殊年份在凝灰岩洞窟中釀造的 Muffa Nobile 甜酒堪稱義大利版 Sauternes，是難得一見的珍品。',
    pairing: '新鮮 Umbrian 起司（Ricotta / Pecorino 嫩）、白肉料理、淡水魚（Trasimeno 湖魚）、朝鮮薊',
    price: '€7-15，Umbria 最親民的白酒，Muffa Nobile 版本 €30-60 每 375ml'
  },
  {
    id: 'torgiano-doc',
    name: 'Torgiano DOC',
    shortName: 'Torgiano DOC',
    emoji: '🏺',
    tier: 'a',
    tierLabel: '🏺 旗艦 DOC — Lungarotti 的舞台',
    center: [12.432, 43.030],
    zoom: 12,
    geojsonPath: '/italy/regions/umbria/geojson/DOC/Torgiano DOC.geojson',
    details: [
      { label: '品種', value: '紅：Sangiovese 50-70% + Canaiolo；白：Trebbiano 50-70% + Grechetto' },
      { label: '角色', value: 'DOCG Riserva 之外的通用 DOC，包含紅、白、粉紅、氣泡多種類型' },
      { label: '特色', value: 'Lungarotti「Rubesco」是 Torgiano Rosso DOC 最有名的代表，是 Umbria 現代葡萄酒起點' },
      { label: '博物館', value: 'Lungarotti 家族在 Torgiano 建立義大利最完整的葡萄酒博物館（Museo del Vino）' },
      { label: '土壤', value: 'Tiber 河沖積土 + 黏土石灰岩，在海拔 200-250m 丘陵上種植' }
    ],
    desc: 'Torgiano 的葡萄酒史幾乎等同於 Lungarotti 家族的歷史。1960 年代 Giorgio Lungarotti 在此釀出讓義大利葡萄酒界刮目相看的「Rubesco」，成為 Umbria 現代精品葡萄酒的起點。Torgiano 葡萄酒博物館是義大利最值得參觀的葡萄酒文化殿堂，收藏從伊特拉斯坎時期至今的完整歷史。',
    pairing: '黑松露義大利麵、烤豬排、陳年起司拼盤、Umbrian 燉肉',
    price: '€12-22 / Rubesco Riserva €35-60，Umbria 最一致且最具歷史深度的紅酒品牌'
  }
]

const SMALL_ZONES = [
  {
    id: 'assisi',
    name: 'Assisi DOC',
    shortName: 'Assisi',
    emoji: '⛪',
    tier: 'b',
    tierLabel: '💎 聖城 DOC — 聖方濟各的故鄉',
    center: [12.618, 43.070],
    zoom: 12,
    geojsonPath: '/italy/regions/umbria/geojson/DOC/Assisi DOC.geojson',
    details: [
      { label: '位置', value: 'Assisi 聖城周邊，Perugia 省，Monte Subasio 山麓，UNESCO 世界遺產所在地' },
      { label: '品種', value: '紅：Sangiovese 50%+ + Merlot；白：Trebbiano + Grechetto + Chardonnay' },
      { label: '特色', value: '同時生產紅、白、粉紅三種類型，Grechetto 白酒清爽宜人' },
      { label: '朝聖', value: '每年數百萬名遊客造訪聖方濟各（San Francesco）聖地，帶動當地葡萄酒旅遊' },
      { label: '特產', value: 'Assisi 周邊是 Umbria 黑松露重要產區之一，葡萄酒與松露是絕配' }
    ],
    desc: '聖方濟各（San Francesco d\'Assisi）的故鄉，義大利最重要的宗教朝聖地之一。Assisi DOC 在這片靈性土地上釀出清爽宜人的 Grechetto 白酒，與當地松露料理、橄欖油、Umbrian 起司完美搭配。參觀著名的聖方濟各大殿後，在城牆內的小酒館品嚐一杯 Assisi DOC，是最道地的 Umbrian 體驗。',
    pairing: '黑松露起司（Cacio e Tartufo）、Umbrian 橄欖油烤蔬菜、白豆燉湯、烤雞',
    price: '€8-15，比旅遊名氣低，但值得在 Assisi 當地尋找的品質選擇'
  },
  {
    id: 'spoleto',
    name: 'Spoleto DOC',
    shortName: 'Spoleto',
    emoji: '🌿',
    tier: 'b',
    tierLabel: '💎 新星 DOC — Trebbiano Spoletino 的崛起',
    center: [12.738, 42.734],
    zoom: 12,
    geojsonPath: '/italy/regions/umbria/geojson/DOC/Spoleto DOC.geojson',
    details: [
      { label: 'DOC 年份', value: '2011 年建立，Umbria 最新的 DOC 之一' },
      { label: '主角', value: 'Trebbiano Spoletino（白）— 與普通 Trebbiano 不同的獨立品種，近年被重新發掘' },
      { label: '風格', value: '白酒：芳香型，桃子、白花、蜂蠟、礦物，酸度清爽；可橡木桶陳年' },
      { label: '位置', value: 'Spoleto 古城周邊，Umbrian Valley，海拔 250-350m' },
      { label: '新興', value: 'Spoletino 被義大利酒評家視為最值得關注的新興本土白品種之一' }
    ],
    desc: 'Spoleto 是義大利最美麗的中世紀城市之一，每年舉辦著名的 Festival dei Due Mondi 音樂節。其 DOC 最大亮點是 Trebbiano Spoletino 的復興——這個被誤認為普通 Trebbiano 的獨立品種，近年 DNA 分析確認其特殊性，展現出遠超一般 Trebbiano 的芳香複雜度。Paolo Bea 等精品酒莊的 Spoletino 已成為義大利白酒愛好者的必嚐選擇。',
    pairing: 'Umbrian 白松露（比黑松露更罕見）、新鮮 Ricotta 起司、清蒸淡水魚',
    price: '€10-20 / 精品酒莊版本 €20-40，Umbria 最值得關注的新興白酒'
  },
  {
    id: 'trasimeno',
    name: 'Colli del Trasimeno DOC',
    shortName: 'Trasimeno',
    emoji: '🏞️',
    tier: 'b',
    tierLabel: '💎 湖畔 DOC — Trasimeno 湖畔風土',
    center: [12.118, 43.148],
    zoom: 11,
    geojsonPath: '/italy/regions/umbria/geojson/DOC/Colli del Trasimeno  Trasimeno DOC.geojson',
    details: [
      { label: '位置', value: 'Trasimeno 湖（義大利中部最大湖）周邊丘陵，Perugia 省西部' },
      { label: '品種', value: '紅：Gamay del Trasimeno（= Grenache 克隆！）+ Sangiovese；白：Grechetto + Trebbiano' },
      { label: '特色', value: 'Gamay del Trasimeno 是此地特有的 Grenache 克隆，展現比法國 Gamay 更濃郁的個性' },
      { label: '歷史', value: '公元前 217 年漢尼拔在此擊敗羅馬軍隊（Trasimeno 湖戰役），義大利史上最大軍事失敗' },
      { label: '湖鮮', value: 'Trasimeno 湖盛產淡水魚（鱸魚、鯉魚、鰻魚），是當地白酒最佳配餐來源' }
    ],
    desc: 'Trasimeno 湖是義大利中部最大的湖泊，其柔和的湖邊微氣候創造出 Umbria 最獨特的風土之一。最有趣的是 Gamay del Trasimeno——這個名字讓人以為是法國 Beaujolais 的 Gamay，但 DNA 確認它其實是 Grenache 的一個克隆，展現出比 Gamay 更飽滿濃郁的果香。湖畔美景配上清爽白酒和新鮮湖魚，是 Umbria 最愉悅的鄉村體驗。',
    pairing: '烤 Regina di Lago 鱸魚（湖鮮）、鱸魚清湯、烤鰻魚、淡水淡菜',
    price: '€8-16，Umbria 最被忽視的湖畔 DOC，自然環境搭配 Gamay del Trasimeno 是獨特體驗'
  }
]

const ALL_ZONES = [...DOCG_ZONES, ...MAIN_ZONES, ...SMALL_ZONES]

const TIER_STYLE = {
  s: { fill: '#1A237E', line: '#90CAF9', fillOpacity: 0.35, lineWidth: 2.8 },
  a: { fill: '#B71C1C', line: '#EF9A9A', fillOpacity: 0.28, lineWidth: 2.2 },
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
  map.flyTo({ center: [12.50, 43.00], zoom: 8.5, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = '未設定 Mapbox Token'; loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [12.50, 43.00],
    zoom: 8.5,
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
.zone-btn.tier-s   { background: #e8eaf6; border-color: #1A237E; color: #1A237E; }
.zone-btn.tier-a   { background: #fff5f5; border-color: #B71C1C; color: #B71C1C; }
.zone-btn.tier-b   { background: #f1f8e9; border-color: #1B5E20; color: #1B5E20; }
.zone-btn.active.tier-s { background: #1A237E; color: #fff; }
.zone-btn.active.tier-a { background: #B71C1C; color: #fff; }
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
.legend-dot.tier-s { background: #1A237E; }
.legend-dot.tier-a { background: #B71C1C; }
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
.hint-dot.tier-s { background: #1A237E; }
.hint-dot.tier-a { background: #B71C1C; }
.hint-dot.tier-b { background: #1B5E20; }

.info-badge {
  display: inline-block; padding: 2px 10px; border-radius: 10px;
  font-size: 0.72rem; font-weight: 700; color: #fff; align-self: flex-start;
}
.info-badge.tier-s { background: #1A237E; }
.info-badge.tier-a { background: #B71C1C; }
.info-badge.tier-b { background: #1B5E20; }

.info-name { font-size: 1rem; font-weight: 700; color: #2c3e50; margin: 0; }
.info-rows { display: flex; flex-direction: column; gap: 4px; }
.info-row { display: flex; gap: 6px; font-size: 0.77rem; line-height: 1.4; }
.info-label { flex: 0 0 54px; font-weight: 600; color: #888; font-size: 0.72rem; }
.info-val { color: #333; flex: 1; }

.info-desc {
  font-size: 0.77rem; color: #555; line-height: 1.55;
  background: #f0f4f8; border-radius: 7px; padding: 9px 11px;
}
.info-pair, .info-price {
  font-size: 0.76rem; color: #555; border-radius: 7px; padding: 7px 11px; line-height: 1.45;
}
.info-pair { background: #fff8e8; }
.info-price { background: #e8eaf6; }
.pair-label, .price-label { font-weight: 700; margin-right: 4px; }

@media (max-width: 680px) {
  .docg-map-slide { padding: 12px 12px 8px; }
  .map-info-row { flex-direction: column; }
  .map-wrapper { flex: 0 0 190px; }
  .info-panel { flex: 1; }
  .slide-header h2 { font-size: 1.05rem; }
}
</style>
