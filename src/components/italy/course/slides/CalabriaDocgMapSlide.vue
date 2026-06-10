<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🗺️ Calabria 重要 DOCG & DOC 互動地圖' }}</h2>
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
          <div class="legend-row"><span class="legend-dot tier-s"></span>頂級 DOCG（Cirò — 奧運選手之酒）</div>
          <div class="legend-row"><span class="legend-dot tier-a"></span>重要 DOC（Cirò / Greco di Bianco）</div>
          <div class="legend-row"><span class="legend-dot tier-b"></span>特色 DOC（廣域 / 內陸）</div>
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
        <div class="empty-icon">🌊</div>
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
    id: 'ciro-docg',
    name: 'Cirò DOCG',
    shortName: 'Cirò DOCG',
    emoji: '🏆',
    tier: 's',
    tierLabel: '👑 頂級 DOCG — 奧運選手之酒',
    center: [17.115, 39.367],
    zoom: 10.5,
    geojsonPath: '/italy/regions/calabria/geojson/DOCG/Cirò DOCG.geojson',
    details: [
      { label: '品種', value: 'Rosso/Rosato：Gaglioppo 95%+；Bianco：Greco Bianco 主導' },
      { label: '三款酒', value: 'Rosso（紅）/ Rosato（粉紅）/ Bianco（白），各等級不同陳年要求' },
      { label: '奧運傳說', value: '傳說古希臘奧運選手以 Cremissa（Cirò 前身）慶功，葡萄酒歷史達 2700 年' },
      { label: '位置', value: 'Crotone 省東海岸，Ionian Sea 沿岸，海拔 50-400m' },
      { label: '土壤', value: '黏土、石灰岩，地中海氣候，年日照 2800+ 小時' }
    ],
    desc: 'Calabria 最具歷史意義的產區，義大利最古老的釀酒傳統之一。傳說古希臘奧運冠軍會以此地酒（當時稱 Cremissa）慶功，是 2700 年不間斷的釀酒文明見證。Gaglioppo 釀造的 Cirò Rosso 展現出柔順圓潤、紅果礦物的典型南義風格，Librandi 是最重要的國際知名酒莊。',
    pairing: "烤劍魚（Calabria 海岸特產）、'Nduja 辣腸義大利麵、烤羊排、當地起司",
    price: '€8-18 / Classico Superiore €15-30 / Riserva €25-50，義大利性價比最高頂級紅酒之一'
  }
]

const DOC_ZONES = [
  {
    id: 'ciro-doc',
    name: 'Cirò DOC',
    shortName: 'Cirò DOC',
    emoji: '🍷',
    tier: 'a',
    tierLabel: '🍷 重要 DOC — DOCG 周邊擴展產區',
    center: [17.085, 39.340],
    zoom: 10.5,
    geojsonPath: '/italy/regions/calabria/geojson/DOC/Cirò DOC.geojson',
    details: [
      { label: '範圍', value: '比 DOCG 稍廣的地理範圍，包含 Rossano、Cariati 等周邊鄉鎮' },
      { label: '品種', value: 'Gaglioppo（紅粉）、Greco Bianco（白），與 DOCG 相同品種要求' },
      { label: '差異', value: 'DOC 等級無 Classico 子產區限制，入門款平均價格更親民' },
      { label: '特點', value: '部分精品酒莊選擇在 DOC 等級以外品種（Cabernet 等）做更自由嘗試' },
      { label: '位置', value: 'Crotone 省，與 DOCG 核心區高度重疊' }
    ],
    desc: 'Cirò DOCG 升格前的完整產區版本，現在主要作為擴展區和入門款。Gaglioppo 在此區依然展現出 Ionian 海岸陽光的溫暖個性，是認識 Calabria 葡萄酒最便宜的入口。',
    pairing: '日常義大利麵、Calabria 辣香腸拼盤、披薩',
    price: '€6-15，Calabria 最親民的每日飲用款'
  },
  {
    id: 'greco-bianco',
    name: 'Greco di Bianco DOC',
    shortName: 'Greco di Bianco',
    emoji: '🍯',
    tier: 'a',
    tierLabel: '⭐ 稀有 DOC — 義大利最罕見甜白酒',
    center: [16.098, 38.085],
    zoom: 11.5,
    geojsonPath: '/italy/regions/calabria/geojson/DOC/Greco di Bianco DOC.geojson',
    details: [
      { label: '品種', value: 'Greco Bianco 95%+，古希臘引進的本土白品種' },
      { label: '工藝', value: 'Passito 風乾：葡萄採後日曬 10-15 天至半乾縮，集中糖分與芳香' },
      { label: '風格', value: '橙花蜂蜜、杏桃乾、薑、肉桂、太妃糖，甜潤而爽口，餘韻無窮' },
      { label: '產量', value: '全球年產僅數萬瓶，是義大利最難買到的甜酒之一' },
      { label: '位置', value: 'Reggio Calabria 省 Bianco 鎮，Calabria 最南端，Ionian 海岸' }
    ],
    desc: '義大利最罕見的頂級甜白酒，產量全球僅數萬瓶。Bianco 鎮只有幾十公頃的 Greco Bianco 老藤，日曬風乾後集中成無與倫比的香甜複雜度。Umberto Ceratti 的 Greco di Bianco 是義大利最被低估的偉大甜酒，Robert Parker 曾給出極高評價。',
    pairing: '杏仁餅乾、蜂蜜蛋糕、Fichi Secchi 無花果乾、義大利杏仁糖 (Torrone)',
    price: '€25-60 / 375ml，稀有珍品，遠低於同級國際甜酒'
  },
  {
    id: 'terre-cosenza',
    name: 'Terre di Cosenza DOC',
    shortName: 'Terre di Cosenza',
    emoji: '⛰️',
    tier: 'b',
    tierLabel: '💎 特色 DOC — Calabria 最大廣域產區',
    center: [16.248, 39.302],
    zoom: 9.5,
    geojsonPath: '/italy/regions/calabria/geojson/DOC/Terre di Cosenza DOC.geojson',
    details: [
      { label: '範圍', value: 'Cosenza 省廣大範圍，涵蓋 Apennine 山脈兩側，Calabria 面積最大 DOC' },
      { label: '品種', value: 'Gaglioppo / Greco Nero / Magliocco（紅）；Greco Bianco / Malvasia（白）' },
      { label: '子產區', value: 'Donnici / Pollino / Verbicaro / Esaro 等多個地理子區，各有特色' },
      { label: '高度', value: '部分葡萄園海拔超過 800m，是義大利南部最涼爽的高山產區之一' },
      { label: '特點', value: '包含保護區 Pollino 國家公園（義大利最大國家公園）內的葡萄園' }
    ],
    desc: 'Calabria 面積最大的 DOC，涵蓋 Pollino 國家公園等壯麗山地景觀。Magliocco 是最值得關注的本土品種，在海拔 600-900m 的山地展現出比海岸產區更涼爽、更具礦物感的個性。近年精品莊園開始發掘這片被遺忘的高山風土。',
    pairing: '山區烤肉、野蘑菇燉飯、陳年山羊起司',
    price: '€8-20，Calabria 山地風土的超值發現'
  },
  {
    id: 'lamezia',
    name: 'Lamezia DOC',
    shortName: 'Lamezia',
    emoji: '🌅',
    tier: 'b',
    tierLabel: '💎 特色 DOC — Tyrrhenian 海岸平原',
    center: [16.278, 38.968],
    zoom: 11,
    geojsonPath: '/italy/regions/calabria/geojson/DOC/Lamezia DOC.geojson',
    details: [
      { label: '位置', value: 'Catanzaro 省 Lamezia Terme 平原，Tyrrhenian（第勒尼安）海岸西側' },
      { label: '品種', value: 'Greco Nero / Nerello Mascalese / Gaglioppo（紅）；Greco / Trebbiano（白）' },
      { label: '風格', value: '相較 Ionian 海岸的 Cirò，Lamezia 受西側 Tyrrhenian 海影響，風格略微清爽' },
      { label: '平原', value: 'Calabria 少見的海岸平原地形，是 Calabria 主要農業和柑橘種植區' },
      { label: '特點', value: '交通便利（Lamezia 機場），是遊覽 Calabria 的主要門戶城市' }
    ],
    desc: 'Calabria 西海岸的代表性 DOC，地處 Tyrrhenian 海岸平原。以 Greco Nero 和 Nerello Mascalese 為主要品種，展現出與東岸 Cirò 不同的輕盈細緻風格。近年開始有精品酒莊探索其獨特的本土品種潛力。',
    pairing: '烤劍魚、Tropea 紅洋蔥沙拉、清蒸海鮮、海岸風格料理',
    price: '€8-18，親民的西岸 Calabria 選擇'
  }
]

const ALL_ZONES = [...DOCG_ZONES, ...DOC_ZONES]

const TIER_STYLE = {
  s: { fill: '#004D40', line: '#80CBC4', fillOpacity: 0.32, lineWidth: 2.8 },
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
  map.flyTo({ center: [16.50, 39.00], zoom: 7.5, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = '未設定 Mapbox Token'; loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [16.50, 39.00],
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
.zone-btn.tier-s   { background: #e8f5e9; border-color: #004D40; color: #004D40; }
.zone-btn.tier-a   { background: #fff5f5; border-color: #B71C1C; color: #B71C1C; }
.zone-btn.tier-b   { background: #f0f0ff; border-color: #1A237E; color: #1A237E; }
.zone-btn.active.tier-s { background: #004D40; color: #fff; }
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
.legend-dot.tier-s { background: #004D40; }
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
.hint-dot.tier-s { background: #004D40; }
.hint-dot.tier-a { background: #B71C1C; }
.hint-dot.tier-b { background: #1A237E; }

.info-badge {
  display: inline-block; padding: 2px 10px; border-radius: 10px;
  font-size: 0.72rem; font-weight: 700; color: #fff; align-self: flex-start;
}
.info-badge.tier-s { background: #004D40; }
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
