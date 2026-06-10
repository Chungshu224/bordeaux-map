<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🗺️ Sardinia DOCG & DOC 互動地圖' }}</h2>
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
          v-for="z in DOC_ZONES" :key="z.id"
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
          <div class="legend-row"><span class="legend-dot tier-s"></span>唯一 DOCG（Vermentino di Gallura）</div>
          <div class="legend-row"><span class="legend-dot tier-a"></span>旗艦 DOC（Cannonau / Carignano / Vernaccia）</div>
          <div class="legend-row"><span class="legend-dot tier-b"></span>特色 DOC（Alghero / Malvasia / Mandrolisai）</div>
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
        <div class="empty-icon">🏝️</div>
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
    id: 'vermentino-gallura-docg',
    name: 'Vermentino di Gallura DOCG',
    shortName: 'Vermentino Gallura',
    emoji: '🏆',
    tier: 's',
    tierLabel: '👑 唯一 DOCG — Sardinia 白酒之冠',
    center: [9.285, 41.012],
    zoom: 10,
    geojsonPath: '/italy/regions/sardinia/geojson/DOCG/Vermentino di Gallura DOCG.geojson',
    details: [
      { label: '升格年份', value: '1996 年升為 DOCG，是 Sardinia 至今唯一的 DOCG 產區' },
      { label: '品種', value: 'Vermentino 95%+，Gallura 東北角花崗岩土壤專屬' },
      { label: '土壤', value: '100% 花崗岩，礦物感極強，是 DOCG 和 DOC 最大差異所在' },
      { label: '等級', value: '基礎款（Vermentino）/ Superiore（陳年 1 年，最低 13%）' },
      { label: '位置', value: 'Olbia-Tempio 省，Sardinia 東北角，Costa Smeralda 奢華海岸後方' }
    ],
    desc: 'Sardinia 唯一的 DOCG，代表島嶼白酒的最高成就。Gallura 的花崗岩土壤賦予 Vermentino 獨特的礦物感和活潑酸度，遠超全島 DOC 等級的同品種。Costa Smeralda（翡翠海岸）讓這款酒在國際頂級渡假市場享有極高知名度。Capichera 和 Surrau 是旗艦酒莊。',
    pairing: '龍蝦、Bottarga 鯔魚卵義大利麵、生蠔、烤海鮮、Pecorino Sardo 嫩起司',
    price: '€12-20 / Superiore €20-35，Sardinia 最具代表性白酒，媲美義大利北部頂級白酒'
  }
]

const DOC_ZONES = [
  {
    id: 'cannonau-sardegna',
    name: 'Cannonau di Sardegna DOC',
    shortName: 'Cannonau',
    emoji: '🍷',
    tier: 'a',
    tierLabel: '🍷 旗艦 DOC — Sardinia 紅酒之王',
    center: [9.100, 40.050],
    zoom: 7.8,
    geojsonPath: '/italy/regions/sardinia/geojson/DOC/Cannonau di Sardegna DOC.geojson',
    details: [
      { label: '品種', value: 'Cannonau（= Grenache = Garnacha）85%+，DNA 完全相同但風格各異' },
      { label: '分布', value: '全島廣域產區（整個 Sardinia），酒精 13.5-15.5%，義大利最高' },
      { label: '子產區', value: 'Jerzu（東部山地）/ Capo Ferrato / Nepente di Oliena 三個特殊子產區' },
      { label: '風格', value: '紅莓果醬、草莓、乾燥香料、甘草、礦物，口感飽滿圓潤' },
      { label: '百歲研究', value: 'Sardinia 百歲人瑞密度全球最高，科學家認為 Cannonau 高多酚含量是原因之一' }
    ],
    desc: 'Sardinia 的靈魂品種，與 Grenache/Garnacha 是同一品種，但炙烈日照和花崗岩土壤造就截然不同的高酒精濃郁個性。傳說 Cannonau 可能是 Grenache 的「原產地」（早於西班牙記載），但學術上仍有爭議。Argiolas、Sella & Mosca、Cantina Sociale di Jerzu 是重要酒莊。',
    pairing: "Porceddu 烤乳豬、Pecorino Maturo 硬質起司、烤羊腿、野豬燉肉、'Nduja 辣腸",
    price: '€8-15 / Riserva €15-30，Sardinia 日常紅酒首選，高 CP 值且有益健康的爭議加持'
  },
  {
    id: 'carignano-sulcis',
    name: 'Carignano del Sulcis DOC',
    shortName: 'Carignano Sulcis',
    emoji: '🌿',
    tier: 'a',
    tierLabel: '⭐ 旗艦 DOC — 百年自根老藤奇蹟',
    center: [8.500, 39.085],
    zoom: 10,
    geojsonPath: '/italy/regions/sardinia/geojson/DOC/Carignano del Sulcis DOC.geojson',
    details: [
      { label: '品種', value: 'Carignano（= Carignan）85%+，西班牙起源，Sardinia 自根老藤版本' },
      { label: '老藤傳奇', value: '85-95% 沙質土壤抗根瘤蚜蟲，保留全球罕見的 100+ 年 ungrafted 自根老藤' },
      { label: '位置', value: 'Sardinia 西南角 Sulcis 半島，Iglesiente 地區，夾在兩海之間' },
      { label: '土壤', value: '沙質土壤（根瘤蚜無法在沙中存活），讓 19 世紀葡萄植株完整保存至今' },
      { label: '頂峰', value: 'Cantina Santadi「Terre Brune」被評為義大利最偉大紅酒之一' }
    ],
    desc: '全球葡萄酒史上的「根瘤蚜奇蹟」——沙質土壤保護了大批 19 世紀前未嫁接的原始老藤。這些百年自根老藤低產而集中，釀出深邃複雜的黑果、礦物、香料風味。Cantina Santadi 的「Terre Brune」媲美義大利任何一款頂級紅酒，但價格只有 Barolo 的三分之一。',
    pairing: '烤羊肉、Sardinia 野豬燉肉、陳年 Pecorino Sardo、炭烤肋排',
    price: '€15-25 / Superiore €20-35 / Terre Brune Riserva €40-55，義大利性價比最高老藤紅酒之一'
  },
  {
    id: 'vernaccia-oristano',
    name: 'Vernaccia di Oristano DOC',
    shortName: 'Vernaccia Oristano',
    emoji: '🍯',
    tier: 'a',
    tierLabel: '⭐ 旗艦 DOC — 義大利版 Sherry',
    center: [8.715, 39.900],
    zoom: 11,
    geojsonPath: '/italy/regions/sardinia/geojson/DOC/Vernaccia di Oristano DOC.geojson',
    details: [
      { label: '品種', value: 'Vernaccia di Oristano（Sardinia 本土品種，與 Vernaccia di San Gimignano 無關）' },
      { label: '釀造', value: '氧化陳年（flor 花膜酵母），Solera 系統，類似 Sherry 的 Fino / Amontillado 風格' },
      { label: '風格', value: '金黃琥珀色，杏仁、核桃、蜂蠟、鹽味、榛果，令人驚艷的複雜氧化香氣' },
      { label: '等級', value: 'Superiore（陳年 3 年）/ Riserva（陳年 4 年），酒精 15-18%' },
      { label: '位置', value: 'Oristano 省 Tirso 河谷，Sardinia 西岸，沖積平原土壤' }
    ],
    desc: '義大利版 Sherry，Sardinia 最獨特的本土白酒風格。在舊木桶中氧化陳年，表面生長 flor 花膜酵母，逐漸發展出類似西班牙 Amontillado 的複雜氧化風味。這是 Sardinia 西班牙統治遺留下來的珍貴釀酒傳統，產量稀少，知者甚少，是葡萄酒愛好者的寶藏發現。',
    pairing: 'Bottarga 鯔魚卵（完美配對）、烤杏仁、火腿、Sardinia 陳年起司、海鮮湯',
    price: '€12-20 / Superiore €20-35，被嚴重低估的義大利頂級氧化白酒，僅需 Sherry 三分之一價格'
  },
  {
    id: 'alghero',
    name: 'Alghero DOC',
    shortName: 'Alghero',
    emoji: '🏰',
    tier: 'b',
    tierLabel: '💎 特色 DOC — 西班牙文化飛地',
    center: [8.295, 40.560],
    zoom: 11,
    geojsonPath: '/italy/regions/sardinia/geojson/DOC/Alghero DOC.geojson',
    details: [
      { label: '文化', value: 'Alghero 城居民至今說加泰隆尼亞語（Català），是義大利最特殊的語言飛地' },
      { label: '品種', value: 'Torbato（白，稀有）/ Cagnulari（紅）/ Cannonau + 國際品種（Cabernet、Sangiovese 等）' },
      { label: '代表', value: 'Sella & Mosca 酒莊的「Terre Rare Torbato」是最知名的 Alghero DOC 白酒' },
      { label: '位置', value: 'Sassari 省西北海岸，珊瑚礁海岸，中世紀古城牆保存完整' },
      { label: '特色', value: '義大利最靈活 DOC 之一，允許多種本土和國際品種，風格多元' }
    ],
    desc: '圍繞著有「小巴塞隆納」之稱的 Alghero 古城，居民至今講加泰隆尼亞語。Sella & Mosca 是 Sardinia 最大精品酒莊，以 Alghero DOC 為基地，用 Torbato（罕見白品種）釀造的「Terre Rare」展現出清爽礦物感和芬芳花香，是認識 Sardinia 白酒的絕佳入口。',
    pairing: '烤龍蝦（Alghero 招牌料理）、奶油海鮮、Pecorino Fresco 新鮮起司、生魚片',
    price: '€8-18，Sardinia 最親民的精品 DOC 入門款'
  },
  {
    id: 'malvasia-bosa',
    name: 'Malvasia di Bosa DOC',
    shortName: 'Malvasia di Bosa',
    emoji: '🌸',
    tier: 'b',
    tierLabel: '💎 稀有 DOC — Sardinia 最珍貴甜白酒',
    center: [8.520, 40.298],
    zoom: 12,
    geojsonPath: '/italy/regions/sardinia/geojson/DOC/Malvasia di Bosa DOC.geojson',
    details: [
      { label: '品種', value: 'Malvasia di Sardegna（本土品種，非義大利大陸的 Malvasia）' },
      { label: '風格', value: '乾型 / 半甜 / 甜型三種風格，可氧化陳年或新鮮果味風格' },
      { label: '稀有', value: '全球年產量僅數萬瓶，葡萄園面積不足 50 公頃，瀕危品種' },
      { label: '香氣', value: '蜂蜜、杏桃、橙花、香草、月桂葉，甜型帶烤榛果和焦糖' },
      { label: '位置', value: 'Nuoro / Oristano 省交界，Bosa 彩色小城周邊，Temo 河谷' }
    ],
    desc: 'Sardinia 最瀕危、最珍貴的甜白酒。Bosa 是一座彩色的中世紀小城，周邊不足 50 公頃的 Malvasia 老藤釀出的甜酒複雜而芬芳。如果說 Greco di Bianco 是 Calabria 的甜酒寶藏，Malvasia di Bosa 就是 Sardinia 的。每年尋找它的旅程本身就是一場探索。',
    pairing: 'Seadas 炸起司餅（Sardinia 甜點）、蜂蜜蛋糕、義大利杏仁糖、陳年起司配蜂蜜',
    price: '€15-35（稀有珍品），偶見於島上精品酒窖，值得不惜任何代價尋找'
  },
  {
    id: 'mandrolisai',
    name: 'Mandrolisai DOC',
    shortName: 'Mandrolisai',
    emoji: '⛰️',
    tier: 'b',
    tierLabel: '💎 特色 DOC — 中央高地混釀',
    center: [9.048, 40.072],
    zoom: 11,
    geojsonPath: '/italy/regions/sardinia/geojson/DOC/Mandrolisai DOC.geojson',
    details: [
      { label: '品種', value: 'Bovale Sardo 35%+、Cannonau 20-35%、Monica 20-35%，三品種混釀' },
      { label: '位置', value: 'Nuoro 省中央高地，Barbagia 山區，海拔 500-800m' },
      { label: '風格', value: '中等酒體，紅莓果、香料、草本，礦物感強，酸度清爽宜人' },
      { label: '特色', value: '全義大利最具地方個性的傳統混釀方式之一，使用罕見的 Bovale Sardo 品種' },
      { label: '老藤', value: '山區保留不少百年老藤，傳統種植方式（Alberello 矮叢型）' }
    ],
    desc: 'Sardinia 中央山地的寶藏產區，以義大利最罕見的混釀方式結合三個本土品種。Barbagia 高地是 Sardinia 文化最保守的地區，傳統習俗（包括釀酒）保存最完整。低調而不失個性的 Mandrolisai 紅酒是探索 Sardinia 本土風味的終極選擇。',
    pairing: '烤 Salsiccia 香腸、羊肉燉鷹嘴豆、Pecorino Romano 起司、野菜燉肉',
    price: '€8-18，Sardinia 最被低估、最值得探索的山地 DOC'
  }
]

const ALL_ZONES = [...DOCG_ZONES, ...DOC_ZONES]

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
  map.flyTo({ center: [9.10, 40.00], zoom: 7.5, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = '未設定 Mapbox Token'; loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [9.10, 40.00],
    zoom: 7.5,
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
.info-label { flex: 0 0 58px; font-weight: 600; color: #888; font-size: 0.72rem; }
.info-val { color: #333; flex: 1; }

.info-desc {
  font-size: 0.77rem; color: #555; line-height: 1.55;
  background: #f0f4f8; border-radius: 7px; padding: 9px 11px;
}
.info-pair, .info-price {
  font-size: 0.76rem; color: #555; border-radius: 7px; padding: 7px 11px; line-height: 1.45;
}
.info-pair { background: #fff8e8; }
.info-price { background: #e8f5e9; }
.pair-label, .price-label { font-weight: 700; margin-right: 4px; }

@media (max-width: 680px) {
  .docg-map-slide { padding: 12px 12px 8px; }
  .map-info-row { flex-direction: column; }
  .map-wrapper { flex: 0 0 190px; }
  .info-panel { flex: 1; }
  .slide-header h2 { font-size: 1.05rem; }
}
</style>
