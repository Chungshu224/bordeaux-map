<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🗺️ Basilicata 重要 DOCG & DOC 互動地圖' }}</h2>
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
          <div class="legend-row"><span class="legend-dot tier-s"></span>頂級 DOCG（Aglianico del Vulture Superiore）</div>
          <div class="legend-row"><span class="legend-dot tier-a"></span>重要 DOC（Vulture 基本款）</div>
          <div class="legend-row"><span class="legend-dot tier-b"></span>特色 DOC（Matera / Alta Val d'Agri）</div>
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
        <div class="empty-icon">🌋</div>
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
    id: 'adv-superiore',
    name: 'Aglianico del Vulture Superiore DOCG',
    shortName: 'AdV Superiore DOCG',
    emoji: '🌋',
    tier: 's',
    tierLabel: '👑 頂級 DOCG — 南義的 Barolo',
    center: [15.650, 40.950],
    zoom: 10,
    geojsonPath: '/italy/regions/basilicata/geojson/DOCG/Aglianico del Vulture Superiore DOCG.geojson',
    details: [
      { label: '品種', value: 'Aglianico 100%，Monte Vulture（休眠火山）坡面種植' },
      { label: '三個等級', value: '基本款（12個月）/ Superiore（3年，含1年桶）/ Riserva（5年，含2年桶）' },
      { label: '高度', value: '海拔 400-700m，大日夜溫差（15-20°C），保留天然酸度' },
      { label: '土壤', value: '火山凝灰岩、火山灰，礦物質極豐富，是 Aglianico 風味最複雜的產區' },
      { label: 'Parker', value: '最高 97 分，Riserva 頂款可達 20-30 年陳年潛力' }
    ],
    desc: 'Basilicata 唯一 DOCG，是義大利最被低估的頂級紅酒。儘管產量極少（<0.3% 義大利總產量），Parker 97 分的評價讓 Aglianico del Vulture 在國際市場赫赫有名。比 Taurasi 海拔更高，火山土壤更純粹，風格更具礦物張力。Elena Fucci 的 Titolo 和 Basilisco 的 Riserva 是 Vulture 的傳奇酒款。',
    pairing: '烤全羊（Pignata 傳統土鍋燉羊）、野豬燉肉、陳年 Pecorino Lucano 起司、松露料理',
    price: '€15-25（基本）/ €25-45（Superiore）/ €50-120（Riserva）— 性價比遠超 Barolo'
  }
]

const DOC_ZONES = [
  {
    id: 'adv-doc',
    name: 'Aglianico del Vulture DOC',
    shortName: 'AdV DOC',
    emoji: '🍷',
    tier: 'a',
    tierLabel: '🍷 重要 DOC — DOCG 前身基本款',
    center: [15.610, 40.920],
    zoom: 10,
    geojsonPath: '/italy/regions/basilicata/geojson/DOC/Aglianico del Vulture DOC.geojson',
    details: [
      { label: '品種', value: 'Aglianico 85%+，同一地理區，陳年要求較低' },
      { label: '與 DOCG 差異', value: 'DOC 涵蓋更廣的葡萄園範圍，包括 Spumante 氣泡酒版本（DOC 限定）' },
      { label: 'Spumante', value: 'Aglianico del Vulture Spumante DOC 是義大利罕見的紅色氣泡酒，以 Metodo Classico 釀造' },
      { label: '陳年', value: '最少 12 個月，親民易飲，是進入 Vulture Aglianico 的最佳起點' },
      { label: '特點', value: '同一火山風土，比 DOCG 等級更親民，包含白酒、粉紅酒全系列' }
    ],
    desc: '2010 年前的完整 Vulture 產區體系，現在是 DOCG 的補充。最特別的是 Aglianico del Vulture Spumante，用 Metodo Classico（傳統法）將高單寧 Aglianico 釀成氣泡酒，是義大利最罕見的頂級紅色起泡酒，極少流通市面。',
    pairing: '日常義大利麵、烤豬里肌、拼盤料理，或配 Burrata 起司開胃',
    price: '€10-18，Basilicata 最親民的 Aglianico 入門款'
  },
  {
    id: 'matera',
    name: 'Matera DOC',
    shortName: 'Matera',
    emoji: '🪨',
    tier: 'b',
    tierLabel: '💎 特色 DOC — 石窟城市的葡萄酒',
    center: [16.610, 40.670],
    zoom: 10.5,
    geojsonPath: '/italy/regions/basilicata/geojson/DOC/Matera DOC.geojson',
    details: [
      { label: '位置', value: 'Matera 省，以石窟城市（Sassi di Matera，UNESCO 世遺）聞名' },
      { label: '品種', value: 'Primitivo / Merlot / Cabernet（紅）；Greco / Malvasia（白）；Moscato（甜）' },
      { label: '地形', value: 'Bradano 河谷，石灰岩峽谷地形，與火山區 Vulture 完全不同' },
      { label: '風格', value: '多元：紅酒濃郁飽滿（南部陽光）；白酒清爽礦物；Passito 甜酒香濃' },
      { label: '特點', value: 'Matera 是 2019 年「歐洲文化首都」，近年精品化明顯' }
    ],
    desc: 'Basilicata 東部的石灰岩峽谷產區，以 UNESCO 世界遺產石窟城市 Sassi di Matera 聞名全球。與 Vulture 火山風土截然不同，在石灰岩地形上種植 Primitivo、Greco 等多元品種，是發現 Basilicata 另一面的產區。',
    pairing: '烤蔬菜拼盤、Basilicata 辣腸（Lucanica）、Focaccia 配當地起司',
    price: '€8-18，以旅遊配餐酒款為主'
  },
  {
    id: 'alta-val-agri',
    name: "Terre dell'Alta Val d'Agri DOC",
    shortName: "Alta Val d'Agri",
    emoji: '⛰️',
    tier: 'b',
    tierLabel: "💎 特色 DOC — Apennine 高山稀有產區",
    center: [15.928, 40.272],
    zoom: 10.5,
    geojsonPath: "/italy/regions/basilicata/geojson/DOC/Terre dell'Alta Val d'Agri DOC.geojson",
    details: [
      { label: '位置', value: "Agri 河谷上游，Apennine 山區，海拔 600-1000m，接近 Calabria 邊界" },
      { label: '品種', value: 'Merlot 50%+（非傳統），Cabernet Sauvignon；是 Basilicata 最不典型的產區' },
      { label: '特點', value: '高山氣候，年均溫僅 12°C，是義大利南部少見的涼爽高山產區' },
      { label: '產量', value: '產量極少，義大利最小 DOC 之一，幾乎只在當地流通' },
      { label: '風格', value: 'Merlot + Cabernet 的高山版本，比低地款更清爽、更有酸度' }
    ],
    desc: 'Basilicata 最偏遠的高山 DOC，Agri 河谷源頭的壯麗山地葡萄園。罕見地以 Merlot 和 Cabernet 為主角（非本土品種），在 600-1000m 高山氣候下展現出義大利南部最涼爽的國際品種詮釋。產量極稀，幾乎只供當地消費。',
    pairing: '野味料理、山區燉肉、當地 Caciocavallo 起司',
    price: '€10-20，稀有度極高，主要當地消費'
  }
]

const ALL_ZONES = [...DOCG_ZONES, ...DOC_ZONES]

const TIER_STYLE = {
  s: { fill: '#3E0000', line: '#FF6E40', fillOpacity: 0.35, lineWidth: 3.0 },
  a: { fill: '#B71C1C', line: '#EF9A9A', fillOpacity: 0.26, lineWidth: 2.2 },
  b: { fill: '#1A237E', line: '#90CAF9', fillOpacity: 0.22, lineWidth: 1.8 }
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
    const fillId = `fill-${z.id}`
    const lineId = `line-${z.id}`
    const ts = TIER_STYLE[z.tier]
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
  map.flyTo({ center: [15.90, 40.65], zoom: 8.0, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = '未設定 Mapbox Token'; loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [15.90, 40.65],
    zoom: 8.0,
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
.zone-btn.tier-s   { background: #fff0f0; border-color: #3E0000; color: #3E0000; }
.zone-btn.tier-a   { background: #fff5f5; border-color: #B71C1C; color: #B71C1C; }
.zone-btn.tier-b   { background: #f0f0ff; border-color: #1A237E; color: #1A237E; }
.zone-btn.active.tier-s { background: #3E0000; color: #fff; }
.zone-btn.active.tier-a { background: #B71C1C; color: #fff; }
.zone-btn.active.tier-b { background: #1A237E; color: #fff; }
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
.legend-dot.tier-s { background: #3E0000; }
.legend-dot.tier-a { background: #B71C1C; }
.legend-dot.tier-b { background: #1A237E; }

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
.hint-dot.tier-s { background: #3E0000; }
.hint-dot.tier-a { background: #B71C1C; }
.hint-dot.tier-b { background: #1A237E; }

.info-badge {
  display: inline-block; padding: 2px 10px; border-radius: 10px;
  font-size: 0.72rem; font-weight: 700; color: #fff; align-self: flex-start;
}
.info-badge.tier-s { background: #3E0000; }
.info-badge.tier-a { background: #B71C1C; }
.info-badge.tier-b { background: #1A237E; }

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
