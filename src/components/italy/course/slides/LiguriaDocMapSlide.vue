<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🗺️ Liguria DOC 互動地圖' }}</h2>
      <p class="slide-subtitle">點選按鈕查看各產區位置與詳細資訊（Liguria 無 DOCG，共 8 個 DOC）</p>
    </div>

    <div class="zone-buttons">
      <div class="btn-group">
        <span class="btn-group-label">⭐ 明星 DOC</span>
        <button
          v-for="z in STAR_ZONES" :key="z.id"
          class="zone-btn" :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <div class="btn-group">
        <span class="btn-group-label">🌿 特色 DOC</span>
        <button
          v-for="z in OTHER_ZONES" :key="z.id"
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
          <div class="legend-row"><span class="legend-dot tier-a"></span>明星 DOC（Cinque Terre / Dolceacqua / Colli di Luni）</div>
          <div class="legend-row"><span class="legend-dot tier-b"></span>特色 DOC（Levanto / Portofino / Ormeasco / Val Polcèvera）</div>
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
        <div class="empty-icon">🏖️</div>
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

const STAR_ZONES = [
  {
    id: 'cinque-terre',
    name: 'Cinque Terre / Sciacchetrà DOC',
    shortName: 'Cinque Terre',
    emoji: '🏔️',
    tier: 'a',
    tierLabel: '🏔️ 明星 DOC — 世界最著名的梯田葡萄酒',
    center: [9.725, 44.120],
    zoom: 11.5,
    geojsonPath: '/italy/regions/liguria/geojson/DOC/Cinque Terre Cinque Terre Sciacchetrà DOC.geojson',
    details: [
      { label: '位置', value: 'La Spezia 省，東 Riviera di Levante，5 個懸崖村莊的陡峭梯田，UNESCO 世界文化遺產' },
      { label: '品種', value: 'Bosco 40%+（主力）+ Albarola + Vermentino，Cinque Terre 三大在地白品種' },
      { label: '靜態酒', value: 'Cinque Terre DOC 白酒：清爽、礦物、海洋鹽感，檸檬、杏仁、白花，最低酒精 11%' },
      { label: 'Sciacchetrà', value: '風乾甜白酒（Passito）：葡萄在梯田上風乾 2-3 個月，產量極稀少，甜中帶苦' },
      { label: '英雄農業', value: '坡度 45-70°，完全手工，勞動成本是平地 5-10 倍，每公頃僅產 30-40 百公升' }
    ],
    desc: 'Cinque Terre 的葡萄酒是液體化的史詩。五個懸崖村莊（Monterosso、Vernazza、Corniglia、Manarola、Riomaggiore）的葡萄梯田建於垂直峭壁上，7000 公里的乾石牆是人類意志的見證。普通 DOC 白酒清爽、帶礦物感，是 Cinque Terre 海鮮的完美搭配；但稀世珍品是 Sciacchetrà——風乾甜白酒每年產量僅數千瓶，蜂蜜、杏桃、苦杏仁在口中交錯，最後一絲苦味如海浪退去，令人難忘。一瓶 Sciacchetrà 代表一個農人在峭壁上半年的心血。',
    pairing: 'DOC 白：烤劍魚、Ligurian 青醬海鮮、炸鰻魚、Cappon Magro（Liguria 傳統海鮮冷盤）；Sciacchetrà：Gorgonzola 藍起司、榛子蛋糕、苦巧克力',
    price: 'DOC 白 €15-30（反映手工成本）/ Sciacchetrà 半瓶 €40-100，世界上最貴的手工農業白酒之一'
  },
  {
    id: 'rossese-dolceacqua',
    name: 'Rossese di Dolceacqua DOC',
    shortName: 'Dolceacqua',
    emoji: '🌹',
    tier: 'a',
    tierLabel: '🌹 明星 DOC — Liguria 最偉大的紅酒',
    center: [7.625, 43.843],
    zoom: 12.5,
    geojsonPath: '/italy/regions/liguria/geojson/DOC/Dolceacqua Rossese di Dolceacqua DOC.geojson',
    details: [
      { label: '位置', value: 'Imperia 省，Nervia 河谷，靠近法國邊境（距摩納哥 20km），西 Riviera di Ponente' },
      { label: '品種', value: 'Rossese 100%（= 法國 Tibouren？），Liguria 最重要的本土紅品種' },
      { label: '風格', value: '輕盈至中等酒體，高優雅度：新鮮紅莓、玫瑰、胡椒、礦物感，單寧絲滑' },
      { label: '比較', value: '酒體輕盈似 Pinot Noir，但更多草本礦物，服侍溫度建議微涼 15-16°C' },
      { label: '歷史', value: '莫內（Claude Monet）曾讚美 Dolceacqua 的景色，同時愛喝這裡的 Rossese' }
    ],
    desc: 'Rossese di Dolceacqua 是 Liguria 最令人驚艷的紅酒——它看起來淺淡如玫瑰，喝進去卻有絲絨般的礦物感和精緻香氣。這個靠近法國 Côte d\'Azur 的產區深受法式文化影響，葡萄酒也帶著南法的輕盈優雅。莫內多次來到 Dolceacqua 寫生（留下了著名的 Dolceacqua 橋畫作），據說也深深愛上了這裡的 Rossese。頂級生產者 Terre Bianche 的 Rossese 被義大利 Gambero Rosso 評為 Tre Bicchieri。',
    pairing: '烤兔肉（Liguria 傳統料理）、Cima alla Genovese（填餡小牛肉）、陳年 Pecorino、松露義大利麵',
    price: '€15-28，Liguria 最被低估的精品紅酒，相同優雅度的 Pinot Noir 要花兩三倍的錢'
  },
  {
    id: 'colli-di-luni',
    name: 'Colli di Luni DOC',
    shortName: 'Colli di Luni',
    emoji: '🌙',
    tier: 'a',
    tierLabel: '🌙 明星 DOC — 月亮山丘的 Vermentino 精品',
    center: [9.980, 44.090],
    zoom: 11,
    geojsonPath: '/italy/regions/liguria/geojson/DOC/Colli di Luni DOC.geojson',
    details: [
      { label: '位置', value: 'Liguria-Tuscany 邊界，La Spezia 省東端，古羅馬 Luna 城（月亮城）周圍' },
      { label: '範圍', value: '橫跨 Liguria 和 Tuscany，是少數跨大區 DOC 之一' },
      { label: '白酒', value: 'Vermentino（主力）：芳香、飽滿、礦物感，杏桃、柑橘皮、白花、杏仁苦味收尾' },
      { label: '紅酒', value: 'Sangiovese 主力混釀：帶 Tuscan 風格，比 Chianti 更輕盈，有更多草本礦物' },
      { label: '名稱', value: '「Luni」源自古羅馬月神 Luna，此地曾是重要的大理石產地（Carrara 大理石故鄉）' }
    ],
    desc: 'Colli di Luni 是 Liguria 和 Tuscany 之間的橋樑產區，以 Vermentino 白酒最令人印象深刻。「月亮山丘」的石灰岩土壤和 Apennine 山脈遮擋的微氣候，讓 Vermentino 發展出比 Sardinia 或 Tuscany 版本更多的礦物感和花香。這裡還是 Carrara 大理石的故鄉，米開朗基羅的大衛雕像用的就是這一帶的石材——土壤的礦物性直接反映在酒中。Lunae Bosoni 是最重要的生產者，代表了 Liguria-Tuscany 邊界最精緻的品質。',
    pairing: 'Vermentino：烤干貝、Liguria 青醬意麵、海鮮沙拉；Sangiovese：Ligurian 燉牛肉、野豬臘腸',
    price: 'Vermentino €12-22 / Sangiovese €10-18，品質超過同等 Tuscany DOC 但價格便宜三成'
  }
]

const OTHER_ZONES = [
  {
    id: 'colline-levanto',
    name: 'Colline di Levanto DOC',
    shortName: 'Levanto',
    emoji: '🌊',
    tier: 'b',
    tierLabel: '🌊 特色 DOC — Cinque Terre 鄰近的海岸白酒',
    center: [9.613, 44.175],
    zoom: 12,
    geojsonPath: '/italy/regions/liguria/geojson/DOC/Colline di Levanto DOC.geojson',
    details: [
      { label: '位置', value: 'La Spezia 省，Levanto 鎮周圍，緊鄰 Cinque Terre 西側，同樣陡峭海岸地形' },
      { label: '品種', value: 'Vermentino + Bosco（白）/ Sangiovese + Ciliegiolo（紅），類似 Cinque Terre 的品種組合' },
      { label: '特色', value: '與 Cinque Terre DOC 相鄰，風格極為相似但知名度低，性價比更高' },
      { label: '地形', value: '同樣的梯田葡萄園，同樣的海洋微氣候，陡坡度 30-50°' },
      { label: '角色', value: 'Cinque Terre 的「平行宇宙」——相同的風土、更低的價格、更少的觀光客溢價' }
    ],
    desc: 'Colline di Levanto 是行家的選擇：與 Cinque Terre 相鄰的梯田葡萄園，同樣的海洋礦物風土，但沒有世界遺產的品牌溢價。如果你覺得 Cinque Terre 的酒太貴，Levanto 是同等品質的替代方案。Levanto 鎮本身也是背包客的秘密天堂，比五漁村更安靜、更在地。',
    pairing: '海鮮義大利麵、烤章魚、炸沙丁魚、Ligurian 海鮮湯（Buridda）',
    price: '€10-20，比 Cinque Terre 便宜 30-50%，是行家選擇的性價比 Liguria 白酒'
  },
  {
    id: 'portofino',
    name: 'Golfo del Tigullio - Portofino DOC',
    shortName: 'Portofino',
    emoji: '⛵',
    tier: 'b',
    tierLabel: '⛵ 特色 DOC — Portofino 富人海灣的優雅白酒',
    center: [9.290, 44.340],
    zoom: 11,
    geojsonPath: '/italy/regions/liguria/geojson/DOC/Golfo del Tigullio - Portofino Portofino DOC.geojson',
    details: [
      { label: '位置', value: 'Genova 省，Portofino 海岬周圍，義大利最貴的海岸度假地之一' },
      { label: '品種', value: 'Bianchetta Genovese + Vermentino（白）/ Ciliegiolo + Dolcetto（紅）' },
      { label: '特色', value: 'Bianchetta Genovese 是 Genova 附近的在地稀有品種，幾乎只在這裡種植' },
      { label: '風格', value: '白酒：輕盈清爽，柑橘、白花，非常適合搭配 Genova 海港餐廳的海鮮' },
      { label: '客群', value: '供應 Portofino、Santa Margherita 等富人度假地的餐廳，出口率極低' }
    ],
    desc: 'Portofino 附近的葡萄酒，如同整個村莊一樣，是義大利最高端的奢侈體驗之一。Bianchetta Genovese 這個幾乎消失的在地品種，在這片面向 Tigullio 海灣的陡坡上保存下來。從 Portofino 山頂的葡萄園俯瞰，深藍的海灣、橙色的豪華遊艇和翡翠色的松林交織成一幅畫。這裡的酒就算味道一般，光是喝酒時的地點體驗也值回票價。',
    pairing: 'Trenette al Pesto（Genova 青醬麵）、烤龍蝦、Condiggion（Liguria 海鮮沙拉）',
    price: '€14-28，因 Portofino 地名溢價，品質中等但體驗無價'
  },
  {
    id: 'ormeasco',
    name: 'Ormeasco di Pornassio DOC',
    shortName: 'Ormeasco',
    emoji: '🍁',
    tier: 'b',
    tierLabel: '🍁 特色 DOC — Dolcetto 在 Liguria 的山區變形',
    center: [7.878, 44.050],
    zoom: 12,
    geojsonPath: '/italy/regions/liguria/geojson/DOC/Ormeasco di Pornassio Pornassio DOC.geojson',
    details: [
      { label: '位置', value: 'Imperia 省內陸，Tanaro 河上游山谷，靠近 Piedmont 邊境，海拔 400-700m' },
      { label: '品種', value: 'Ormeasco 100%（= Dolcetto 的 Liguria 名稱），與 Piedmont 的 Dolcetto 同品種異名' },
      { label: '靜態版', value: 'Ormeasco DOC：比 Piedmont Dolcetto 更輕盈、更多草本礦物，單寧較低' },
      { label: 'Sciac-trà', value: '淡玫瑰氣泡版本（不同於 Cinque Terre 的 Sciacchetrà），輕盈怡人' },
      { label: '稀有', value: '產區極小、知名度極低，在 Liguria 本地幾乎買不到，幾乎全靠在地消費' }
    ],
    desc: 'Ormeasco 是葡萄品種學家的秘密彩蛋——Piedmont 的 Dolcetto 越過 Apennine 山脈進入 Liguria 後，在 Pornassio 山谷裡以「Ormeasco」之名延續。同樣的品種，不同的土地，造就了更輕盈、更多草本氣息的版本。特別珍稀的是 Sciac-trà（注意與 Cinque Terre 的 Sciacchetrà 不同），一款淡玫瑰色的微氣泡 Ormeasco，是 Liguria 最被低估的葡萄酒之一，在 Pornassio 小鎮的餐廳才喝得到。',
    pairing: '烤兔肉、山區蘑菇義大利麵、燉豬肉、臭乾酪（Bra duro）',
    price: '€10-18，Liguria 最難找到但最值得尋找的稀有 DOC，是葡萄酒迷的尋寶目標'
  },
  {
    id: 'val-polcevera',
    name: 'Val Polcèvera DOC',
    shortName: 'Val Polcèvera',
    emoji: '🏙️',
    tier: 'b',
    tierLabel: '🏙️ 特色 DOC — Genova 後花園的城市葡萄酒',
    center: [8.912, 44.472],
    zoom: 12.5,
    geojsonPath: '/italy/regions/liguria/geojson/DOC/Val Polcèvera DOC.geojson',
    details: [
      { label: '位置', value: 'Genova 市後方，Polcèvera 河谷，義大利唯一「城市 DOC」之一' },
      { label: '品種', value: 'Bianchetta Genovese + Vermentino + Pigato（白）/ Ciliegiolo + Sangiovese（紅）' },
      { label: '特色', value: 'Coronata 子產區歷史最悠久，曾是 Genova 貴族的獨家葡萄酒，中世紀文獻即有記載' },
      { label: 'Coronata', value: 'Genova 市內的 Coronata 山頭現存僅數公頃葡萄園，被城市建築包圍的奇景' },
      { label: '角色', value: '一款消失中的城市葡萄酒傳統，供應 Genova 老城區（UNESCO 世界遺產）的 Trattoria' }
    ],
    desc: 'Val Polcèvera 是義大利最獨特的城市 DOC——葡萄園就在 Genova 市後方的山谷，被公寓大樓和工廠包圍。Coronata 子產區特別珍稀，中世紀時這裡曾是 Genova 共和國的御用葡萄酒產地。現在葡萄園面積銳減到幾公頃，是城市化下倖存的農業化石。在 Genova 老城區（Caruggi，义大利最大的中世紀核心）的隱秘 Trattoria 裡喝一杯，是最道地的 Genova 體驗。',
    pairing: 'Pesto alla Genovese 傳統青醬麵、Farinata（鷹嘴豆薄餅）、炸海鮮、Focaccia di Recco',
    price: '€8-15，Genova 老城區 Trattoria 的在地酒，在城市以外幾乎找不到'
  }
]

const ALL_ZONES = [...STAR_ZONES, ...OTHER_ZONES]

const TIER_STYLE = {
  a: { fill: '#0D47A1', line: '#90CAF9', fillOpacity: 0.32, lineWidth: 2.8 },
  b: { fill: '#2E7D32', line: '#A5D6A7', fillOpacity: 0.22, lineWidth: 1.8 }
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
  map.flyTo({ center: [8.90, 44.20], zoom: 8.5, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = '未設定 Mapbox Token'; loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [8.90, 44.20],
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
.zone-btn.tier-a   { background: #e3f2fd; border-color: #0D47A1; color: #0D47A1; }
.zone-btn.tier-b   { background: #f1f8e9; border-color: #2E7D32; color: #2E7D32; }
.zone-btn.active.tier-a { background: #0D47A1; color: #fff; }
.zone-btn.active.tier-b { background: #2E7D32; color: #fff; }
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
.legend-dot.tier-a { background: #0D47A1; }
.legend-dot.tier-b { background: #2E7D32; }

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
.hint-dot.tier-a { background: #0D47A1; }
.hint-dot.tier-b { background: #2E7D32; }

.info-badge {
  display: inline-block; padding: 2px 10px; border-radius: 10px;
  font-size: 0.72rem; font-weight: 700; color: #fff; align-self: flex-start;
}
.info-badge.tier-a { background: #0D47A1; }
.info-badge.tier-b { background: #2E7D32; }

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
.info-price { background: #e3f2fd; }
.pair-label, .price-label { font-weight: 700; margin-right: 4px; }

@media (max-width: 680px) {
  .docg-map-slide { padding: 12px 12px 8px; }
  .map-info-row { flex-direction: column; }
  .map-wrapper { flex: 0 0 190px; }
  .info-panel { flex: 1; }
  .slide-header h2 { font-size: 1.05rem; }
}
</style>
