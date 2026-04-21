<template>
  <div class="au-map-slide">
    <!-- 標題 -->
    <div class="slide-header">
      <h2 class="slide-title">{{ slide.title }}</h2>
      <p v-if="slide.subtitle" class="slide-subtitle">{{ slide.subtitle }}</p>
    </div>

    <!-- 地圖容器 -->
    <div class="map-wrapper">
      <div ref="mapContainer" class="mapbox-container"></div>

      <!-- 載入中 -->
      <div v-if="loading" class="map-overlay">
        <div class="loading-spinner"></div>
        <span>地圖載入中…</span>
      </div>

      <!-- 錯誤 -->
      <div v-if="error" class="map-overlay error">
        <span>⚠️ {{ error }}</span>
      </div>

      <!-- 圖例 -->
      <div v-if="!loading && !error && legendItems.length" class="map-legend">
        <div
          v-for="item in legendItems"
          :key="item.name"
          class="legend-item"
        >
          <span class="legend-dot" :style="{ background: item.color }"></span>
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>

    <!-- 備注 -->
    <p v-if="slide.note" class="slide-note">💡 {{ slide.note }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick, computed } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const props = defineProps({
  slide: { type: Object, required: true },
})

const mapContainer = ref(null)
const loading = ref(false)
const error   = ref(null)
const legendItems = ref([])
let map = null

// ── 州別顏色（與 AustraliaMapSection 一致）───────────────────────────────
const STATE_COLORS = {
  SA:  '#e67e22',
  VIC: '#8e44ad',
  NSW: '#2980b9',
  WA:  '#f39c12',
  QLD: '#c0392b',
  TAS: '#27ae60',
}
const STATE_LABELS = {
  SA:  '南澳 SA',
  VIC: '維多利亞 VIC',
  NSW: '新南威爾斯 NSW',
  WA:  '西澳 WA',
  QLD: '昆士蘭 QLD',
  TAS: '塔斯馬尼亞 TAS',
}
const STATE_CODES = new Set(['SA', 'VIC', 'NSW', 'WA', 'QLD', 'TAS'])

// ── 解析 mapRegion ────────────────────────────────────────────────────────
function parseMapRegion(mapRegion) {
  if (!mapRegion || mapRegion === 'all') return { mode: 'all', values: [] }
  const parts = mapRegion.split('|').map(s => s.trim()).filter(Boolean)
  const states = parts.filter(p => STATE_CODES.has(p))
  const names  = parts.filter(p => !STATE_CODES.has(p))
  if (states.length && !names.length) return { mode: 'state', values: states }
  if (names.length && !states.length) return { mode: 'names', values: names }
  return { mode: 'mixed', states, names }
}

// ── 依條件過濾 features ───────────────────────────────────────────────────
function filterFeatures(features, parsed) {
  if (parsed.mode === 'all') return features
  if (parsed.mode === 'state') return features.filter(f => parsed.values.includes(f.properties.state))
  if (parsed.mode === 'names') {
    const lower = parsed.values.map(n => n.toLowerCase())
    return features.filter(f => lower.some(n => f.properties.name?.toLowerCase() === n))
  }
  if (parsed.mode === 'mixed') {
    const lowerNames = parsed.names.map(n => n.toLowerCase())
    return features.filter(f =>
      parsed.states.includes(f.properties.state) ||
      lowerNames.some(n => f.properties.name?.toLowerCase() === n)
    )
  }
  return features
}

// ── bbox 計算 ─────────────────────────────────────────────────────────────
function collectCoords(geom, out) {
  if (!geom) return
  const t = geom.type
  if (t === 'Point') { out.push(geom.coordinates); return }
  if (t === 'MultiPoint' || t === 'LineString') { geom.coordinates.forEach(c => out.push(c)); return }
  if (t === 'MultiLineString' || t === 'Polygon') { geom.coordinates.forEach(r => r.forEach(c => out.push(c))); return }
  if (t === 'MultiPolygon') { geom.coordinates.forEach(p => p.forEach(r => r.forEach(c => out.push(c)))); return }
  if (t === 'GeometryCollection') { geom.geometries.forEach(g => collectCoords(g, out)) }
}

function calcBbox(features) {
  const coords = []
  features.forEach(f => collectCoords(f.geometry, coords))
  if (!coords.length) return [113, -44, 154, -10]
  let minLng = Infinity, minLat = Infinity, maxLng = -Infinity, maxLat = -Infinity
  for (const [lng, lat] of coords) {
    if (lng < minLng) minLng = lng
    if (lat < minLat) minLat = lat
    if (lng > maxLng) maxLng = lng
    if (lat > maxLat) maxLat = lat
  }
  return [minLng, minLat, maxLng, maxLat]
}

// ── 銷毀地圖 ─────────────────────────────────────────────────────────────
function destroyMap() {
  if (map) { map.remove(); map = null }
}

// ── 初始化地圖 ────────────────────────────────────────────────────────────
async function initMap() {
  if (!mapContainer.value) return
  destroyMap()
  loading.value = true
  error.value   = null
  legendItems.value = []

  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) {
    error.value = '未設定 Mapbox Token'
    loading.value = false
    return
  }

  let geoJSON, appellations
  try {
    const [geoRes, appRes] = await Promise.all([
      fetch('/australia/australia-wine-regions.geojson'),
      fetch('/australia/australia-appellations.json'),
    ])
    if (!geoRes.ok) throw new Error('無法載入 GeoJSON')
    geoJSON = await geoRes.json()
    appellations = appRes.ok ? await appRes.json() : []
  } catch (e) {
    error.value = `資料載入失敗：${e.message}`
    loading.value = false
    return
  }

  const parsed   = parseMapRegion(props.slide.mapRegion)
  const filtered = filterFeatures(geoJSON.features, parsed)

  if (!filtered.length) {
    error.value = '找不到對應產區資料'
    loading.value = false
    return
  }

  // 建立圖例
  const legendMap = {}
  filtered.forEach(f => {
    const state = f.properties.state
    if (!legendMap[state]) {
      legendMap[state] = { name: state, color: STATE_COLORS[state] || '#888', label: STATE_LABELS[state] || state }
    }
  })
  legendItems.value = Object.values(legendMap)

  // 建立地圖
  mapboxgl.accessToken = token
  const mapInst = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: [134, -26.5],
    zoom: 3.5,
    attributionControl: false,
  })
  map = mapInst
  mapInst.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
  mapInst.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-left')

  mapInst.on('load', () => {
    // 依州分組，各建一個 source + layer
    const byState = {}
    filtered.forEach(f => {
      const s = f.properties.state || 'XX'
      if (!byState[s]) byState[s] = []
      byState[s].push(f)
    })

    Object.entries(byState).forEach(([state, feats]) => {
      const color = STATE_COLORS[state] || '#888'
      const fc = { type: 'FeatureCollection', features: feats }
      const sid = `au-${state}`
      mapInst.addSource(sid, { type: 'geojson', data: fc, generateId: true })
      mapInst.addLayer({ id: `fill-${sid}`, type: 'fill', source: sid,
        paint: { 'fill-color': color, 'fill-opacity': 0.35 } })
      mapInst.addLayer({ id: `line-${sid}`, type: 'line', source: sid,
        paint: { 'line-color': color, 'line-width': 2 } })
      mapInst.addLayer({
        id: `label-${sid}`,
        type: 'symbol',
        source: sid,
        filter: ['==', ['get', 'gi_level'], 'Region'],
        layout: {
          'text-field': ['get', 'name'],
          'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
          'text-size': 11,
          'text-max-width': 8,
          'text-allow-overlap': false,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': 'rgba(0,0,0,0.85)',
          'text-halo-width': 1.5,
        },
        minzoom: 4,
      })

      // Hover popup
      const popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false, className: 'au-map-popup' })
      mapInst.on('mousemove', `fill-${sid}`, (e) => {
        mapInst.getCanvas().style.cursor = 'pointer'
        mapInst.setPaintProperty(`fill-${sid}`, 'fill-opacity', 0.6)
        const name = e.features?.[0]?.properties?.name || ''
        const giLevel = e.features?.[0]?.properties?.gi_level || ''
        const app = appellations.find(a => a.name === name)
        const desc = app?.famous_for ? `<div class="popup-famous">${app.famous_for}</div>` : ''
        popup.setLngLat(e.lngLat).setHTML(`
          <div class="popup-inner">
            <strong>${name}</strong>
            <span class="popup-tag">${giLevel}</span>
            ${desc}
          </div>
        `).addTo(mapInst)
      })
      mapInst.on('mouseleave', `fill-${sid}`, () => {
        mapInst.getCanvas().style.cursor = ''
        mapInst.setPaintProperty(`fill-${sid}`, 'fill-opacity', 0.35)
        popup.remove()
      })
    })

    // 自動縮放至產區範圍
    const bbox = calcBbox(filtered)
    const pad = parsed.mode === 'all' ? 20 : 60
    mapInst.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: pad, maxZoom: 11, duration: 800 })

    loading.value = false
  })

  mapInst.on('error', (e) => {
    error.value = `地圖錯誤：${e.error?.message || '未知'}`
    loading.value = false
  })
}

onMounted(async () => {
  await nextTick()
  initMap()
})

watch(() => props.slide.mapRegion, () => {
  initMap()
})

onBeforeUnmount(() => destroyMap())
</script>

<style scoped>
.au-map-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 24px 16px;
  box-sizing: border-box;
  gap: 10px;
}

/* ── 標題 ─────────────────────────────────────────────────────────── */
.slide-header { flex-shrink: 0; }
.slide-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 4px;
  border-bottom: 3px solid #e67e22;
  padding-bottom: 8px;
}
.slide-subtitle {
  font-size: 0.85rem;
  color: #888;
  margin: 4px 0 0;
}

/* ── 地圖包裹 ─────────────────────────────────────────────────────── */
.map-wrapper {
  flex: 1;
  min-height: 0;
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  background: #0e1624;
}
.mapbox-container {
  width: 100%;
  height: 100%;
}

/* ── Overlay (載入 / 錯誤) ────────────────────────────────────────── */
.map-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  gap: 10px;
  font-size: 0.9rem;
  z-index: 5;
}
.map-overlay.error { background: rgba(120, 0, 0, 0.5); }
.loading-spinner {
  width: 32px; height: 32px;
  border: 3px solid rgba(255,255,255,0.25);
  border-top-color: #e67e22;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ── 圖例 ─────────────────────────────────────────────────────────── */
.map-legend {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(6px);
  border-radius: 8px;
  padding: 6px 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 4;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  color: #fff;
  white-space: nowrap;
}
.legend-dot {
  width: 9px; height: 9px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* ── 備注 ─────────────────────────────────────────────────────────── */
.slide-note {
  flex-shrink: 0;
  font-size: 0.8rem;
  color: #7a5c00;
  background: rgba(200,169,81,0.10);
  border-radius: 8px;
  padding: 6px 10px;
  margin: 0;
  line-height: 1.5;
}
</style>

<style>
/* popup 全域樣式（scoped 無法覆蓋 Mapbox DOM）*/
.au-map-popup .mapboxgl-popup-content {
  padding: 8px 12px;
  border-radius: 8px;
  background: rgba(15, 25, 50, 0.92);
  color: #fff;
  font-size: 0.82rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.35);
}
.au-map-popup .mapboxgl-popup-tip { border-top-color: rgba(15,25,50,0.92); }
.popup-inner { display: flex; flex-direction: column; gap: 3px; }
.popup-inner strong { font-size: 0.88rem; }
.popup-tag {
  font-size: 0.68rem;
  background: rgba(255,255,255,0.18);
  border-radius: 4px;
  padding: 1px 5px;
  display: inline-block;
  color: #ccc;
}
.popup-famous { font-size: 0.72rem; color: #f0c060; margin-top: 2px; }
</style>
