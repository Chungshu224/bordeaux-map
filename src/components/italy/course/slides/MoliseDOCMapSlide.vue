<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🗺️ Molise DOC 互動地圖' }}</h2>
      <p class="slide-subtitle">點選按鈕查看各產區位置與詳細資訊（Molise 無 DOCG，全為 DOC 等級）</p>
    </div>

    <div class="zone-buttons">
      <div class="btn-group">
        <span class="btn-group-label">⭐ 旗艦 DOC</span>
        <button
          v-for="z in STAR_ZONES" :key="z.id"
          class="zone-btn" :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <div class="btn-group">
        <span class="btn-group-label">🍷 其他 DOC</span>
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
          <div class="legend-row"><span class="legend-dot tier-a"></span>旗艦 DOC（Tintilia / Biferno）</div>
          <div class="legend-row"><span class="legend-dot tier-b"></span>其他 DOC（Pentro / Molise）</div>
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
        <div class="empty-icon">🔍</div>
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
    id: 'tintilia-molise',
    name: 'Tintilia del Molise DOC',
    shortName: 'Tintilia del Molise',
    emoji: '🌿',
    tier: 'a',
    tierLabel: '🌿 旗艦 DOC — Molise 靈魂品種',
    center: [14.638, 41.555],
    zoom: 9.5,
    geojsonPath: '/italy/regions/molise/geojson/DOC/Tintilia del Molise DOC.geojson',
    details: [
      { label: 'DOC 年份', value: '2011 年升格，Molise 最重要的 DOC，也是最新建立的' },
      { label: '品種', value: 'Tintilia 95%+，Molise 獨有本土紅品種，名稱源自西班牙語「Tinto」（紅色）' },
      { label: '歷史', value: '西班牙統治（1442-1707）引入，1980-90 年代瀕臨消失，近 20 年成功復興' },
      { label: '等級', value: 'Rosso / Rosato / Riserva（陳年 24 個月，含 6 個月橡木桶）' },
      { label: '範圍', value: 'Molise 全區（Campobasso + Isernia 兩省），海拔 200-800m 山地' }
    ],
    desc: 'Molise 最具代表性的 DOC，守護一個曾幾乎消失的本土靈魂品種。Tintilia 在 1980-90 年代被大量拔除換種更商業化的品種，瀕臨滅絕。過去 20 年，以 Di Majo Norante 為首的生產者重新發掘老藤、申請 DOC 認證，讓這個深紫紅色、柔順果香的品種重見天日。',
    pairing: 'Cavatelli 手工貝殼麵配羊肉醬、炭烤羊腿（Agnello alla Brace）、Caciocavallo Molisano 起司',
    price: '€10-20 / Riserva €18-35，Molise 最具收藏價值、最能代表產區個性的選擇'
  },
  {
    id: 'biferno',
    name: 'Biferno DOC',
    shortName: 'Biferno',
    emoji: '🏔️',
    tier: 'a',
    tierLabel: '🏔️ 旗艦 DOC — Molise 第一個 DOC',
    center: [14.820, 41.580],
    zoom: 10,
    geojsonPath: '/italy/regions/molise/geojson/DOC/Biferno DOC.geojson',
    details: [
      { label: 'DOC 年份', value: '1983 年，Molise 第一個 DOC，以 Biferno 河命名' },
      { label: '範圍', value: 'Campobasso 省 Biferno 河流域，從內陸山地延伸至 Adriatic 海岸' },
      { label: '紅酒', value: 'Montepulciano 70-80% + Aglianico，類似 Abruzzo 但更輕盈清爽' },
      { label: '白酒', value: 'Trebbiano 65-70% + Bombino Bianco，清爽易飲的海岸風格' },
      { label: '特色', value: '橫跨山地到 Adriatic 海岸（Termoli 城），地形多元，風土組合豐富' }
    ],
    desc: 'Molise 第一個也是最大的 DOC，以 Biferno 河為名。以 Montepulciano 為主力紅品種，風格比鄰近的 Abruzzo 稍微輕盈清爽，同時在 Termoli 海岸出產適合搭配海鮮的白酒。Di Majo Norante 是全 Molise 最重要的優質酒莊，其 Biferno Rosso Riserva 是全區指標。',
    pairing: 'Brodetto alla Termolese 海鮮湯（白酒配）、烤鯛魚、Cavatelli 配番茄醬（紅酒配）',
    price: '€8-18 / Riserva €15-28，親民而有品質的 Molise 入門款'
  }
]

const OTHER_ZONES = [
  {
    id: 'pentro-isernia',
    name: 'Pentro di Isernia DOC',
    shortName: 'Pentro di Isernia',
    emoji: '⛰️',
    tier: 'b',
    tierLabel: '💎 山地 DOC — 古代部落遺名',
    center: [14.228, 41.595],
    zoom: 10.5,
    geojsonPath: '/italy/regions/molise/geojson/DOC/Pentro di Isernia DOC.geojson',
    details: [
      { label: 'DOC 年份', value: '1983 年，與 Biferno DOC 同年建立' },
      { label: '名稱', value: '「Pentro」源自古代 Samnite 部落（Pentri）的名稱，保留了前羅馬時代記憶' },
      { label: '位置', value: 'Isernia 省，Molise 西部山區，Apennine 山脈高地，海拔較高' },
      { label: '品種', value: 'Montepulciano + Sangiovese（各約 45-55%）；白：Trebbiano + Bombino Bianco' },
      { label: '特色', value: '產量極小，幾乎只在當地市場流通，幾乎無出口，是義大利最難找的 DOC 之一' }
    ],
    desc: '義大利最罕見、最難買到的 DOC 之一。以古代山區部落「Pentri」命名，位於 Isernia 省西部高地，冬季嚴寒、夏季清爽的山地氣候讓葡萄酒保有獨特的清新酸度。年產量極少，幾乎從未出現在義大利以外的市場，是葡萄酒探索者的聖杯級秘境。',
    pairing: '烤羊肉、山區燉野豬、Caciocavallo 硬質起司、手工義大利麵',
    price: '€8-15，如果能找到，絕對是 Molise 最物超所值的珍稀選擇'
  },
  {
    id: 'molise-doc',
    name: 'Molise DOC',
    shortName: 'Molise DOC',
    emoji: '🌾',
    tier: 'b',
    tierLabel: '💎 通用 DOC — Molise 全區',
    center: [14.700, 41.555],
    zoom: 9.5,
    geojsonPath: '/italy/regions/molise/geojson/DOC/Molise del Molise DOC.geojson',
    details: [
      { label: 'DOC 年份', value: '2014 年建立，Molise 最新的 DOC，也是最靈活的' },
      { label: '範圍', value: 'Molise 全大區（Campobasso + Isernia 兩省），是通用大傘型 DOC' },
      { label: '品種', value: 'Montepulciano、Aglianico、Tintilia、Falanghina、Greco Bianco 等多品種皆允許' },
      { label: '目的', value: '讓生產者有更大彈性試驗不同品種和釀造風格，同時保有法定認證' },
      { label: '特色', value: '同一個酒莊可同時申請 Tintilia del Molise DOC 和 Molise DOC，靈活運用不同許可品種' }
    ],
    desc: 'Molise 最年輕的 DOC（2014），設計初衷是讓生產者能在通用 DOC 框架下靈活試驗各種品種和風格。可使用 Falanghina、Greco Bianco 釀白酒，或以 Aglianico 釀濃郁紅酒，為 Molise 這個小產區提供更寬廣的品種表達空間。',
    pairing: '配餐視品種而定：Falanghina 配海鮮、Aglianico 配羊肉、Greco 配輕食',
    price: '€8-15，Molise 葡萄酒風格多元探索的起點'
  }
]

const ALL_ZONES = [...STAR_ZONES, ...OTHER_ZONES]

const TIER_STYLE = {
  a: { fill: '#4A148C', line: '#CE93D8', fillOpacity: 0.32, lineWidth: 2.5 },
  b: { fill: '#1B5E20', line: '#A5D6A7', fillOpacity: 0.24, lineWidth: 1.8 }
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
  map.flyTo({ center: [14.60, 41.56], zoom: 8.5, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = '未設定 Mapbox Token'; loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [14.60, 41.56],
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
.zone-btn.tier-a   { background: #f3e5f5; border-color: #4A148C; color: #4A148C; }
.zone-btn.tier-b   { background: #f1f8e9; border-color: #1B5E20; color: #1B5E20; }
.zone-btn.active.tier-a { background: #4A148C; color: #fff; }
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
.legend-dot.tier-a { background: #4A148C; }
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
.hint-dot.tier-a { background: #4A148C; }
.hint-dot.tier-b { background: #1B5E20; }

.info-badge {
  display: inline-block; padding: 2px 10px; border-radius: 10px;
  font-size: 0.72rem; font-weight: 700; color: #fff; align-self: flex-start;
}
.info-badge.tier-a { background: #4A148C; }
.info-badge.tier-b { background: #1B5E20; }

.info-name { font-size: 1rem; font-weight: 700; color: #2c3e50; margin: 0; }
.info-rows { display: flex; flex-direction: column; gap: 4px; }
.info-row { display: flex; gap: 6px; font-size: 0.77rem; line-height: 1.4; }
.info-label { flex: 0 0 60px; font-weight: 600; color: #888; font-size: 0.72rem; }
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
