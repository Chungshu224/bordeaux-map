<template>
  <div class="hungary-map-slide">
    <div class="hms-header">
      <h2 class="hms-title">{{ title }}</h2>
      <p v-if="description" class="hms-desc">{{ description }}</p>
    </div>
    <div class="hms-map-wrapper">
      <div ref="mapContainer" class="hms-mapbox"></div>
      <div v-if="loading" class="hms-overlay">
        <div class="hms-spinner"></div>
        <span>地圖載入中…</span>
      </div>
      <div v-if="errorMsg" class="hms-error">
        <span>⚠️ {{ errorMsg }}</span>
      </div>
      <!-- 展開全螢幕地圖按鈕 -->
      <button
        v-if="!loading && !errorMsg && cfg"
        class="hms-fullmap-btn"
        @click="handleOpenFullMap"
        title="開啟完整互動地圖"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        🗺️ 開啟完整互動地圖
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const props = defineProps({
  title:       { type: String, default: '' },
  description: { type: String, default: '' },
  mapRegion:   { type: String, default: 'all' },
})
const emit = defineEmits(['openFullMap'])

// ── 地區設定 ─────────────────────────────────────────────────
const GROUP_COLORS = {
  Tokaj:             '#8B1A1A',
  UpperHungary:      '#1B5AA6',
  NorthTransdanubia: '#2E7D32',
  Balaton:           '#0277BD',
  Pannon:            '#6A1B9A',
  Duna:              '#BF6900',
}

const REGION_CONFIG = {
  'all':                  { file: '/hungary/hungary_wine_regions.geojson', center: [18.5, 47.2], zoom: 6.8, group: null,               folder: null,                label: '匈牙利 22 個法定產區' },
  'Tokaj':                { file: '/hungary/Tokaj/admin.geojson',               center: [21.4, 48.1], zoom: 9,   group: 'Tokaj',             folder: 'Tokaj',             label: 'Tokaj' },
  'Eger':                 { file: '/hungary/Eger/admin.geojson',                center: [20.4, 47.9], zoom: 9,   group: 'UpperHungary',      folder: 'Eger',              label: 'Eger' },
  'Bukk':                 { file: '/hungary/Bukk/admin.geojson',                center: [20.4, 48.0], zoom: 9,   group: 'UpperHungary',      folder: 'Bukk',              label: 'Bükk' },
  'Matra':                { file: '/hungary/Matra/admin.geojson',               center: [20.0, 47.9], zoom: 9,   group: 'UpperHungary',      folder: 'Matra',             label: 'Mátra' },
  'Neszmely':             { file: '/hungary/Neszmely/admin.geojson',            center: [18.0, 47.7], zoom: 10,  group: 'NorthTransdanubia', folder: 'Neszmely',          label: 'Neszmély' },
  'Sopron':               { file: '/hungary/Sopron/admin.geojson',              center: [16.6, 47.7], zoom: 10,  group: 'NorthTransdanubia', folder: 'Sopron',            label: 'Sopron' },
  'Pannonhalma':          { file: '/hungary/Pannonhalma/admin.geojson',         center: [17.8, 47.5], zoom: 10,  group: 'NorthTransdanubia', folder: 'Pannonhalma',       label: 'Pannonhalma' },
  'Etyek-Buda':           { file: '/hungary/Etyek-Buda/admin.geojson',          center: [18.7, 47.5], zoom: 10,  group: 'NorthTransdanubia', folder: 'Etyek-Buda',        label: 'Etyek-Buda' },
  'Mor':                  { file: '/hungary/Mor/admin.geojson',                 center: [18.2, 47.5], zoom: 10,  group: 'NorthTransdanubia', folder: 'Mor',               label: 'Mór' },
  'Somlo':                { file: '/hungary/Somlo/admin.geojson',               center: [17.4, 47.2], zoom: 11,  group: 'Balaton',           folder: 'Somlo',             label: 'Somló' },
  'Badacsony':            { file: '/hungary/Badacsony/admin.geojson',           center: [17.5, 46.8], zoom: 10,  group: 'Balaton',           folder: 'Badacsony',         label: 'Badacsony' },
  'Balatonfured-Csopak':  { file: '/hungary/Balatonfured-Csopak/admin.geojson', center: [17.9, 46.9], zoom: 11,  group: 'Balaton',           folder: 'Balatonfured-Csopak', label: 'Balatonfüred-Csopak' },
  'Balaton-felvidek':     { file: '/hungary/Balaton-felvidek/admin.geojson',    center: [17.7, 46.9], zoom: 10,  group: 'Balaton',           folder: 'Balaton-felvidek',  label: 'Balaton-felvidék' },
  'Balatonboglar':        { file: '/hungary/Balatonboglar/admin.geojson',       center: [17.6, 46.8], zoom: 10,  group: 'Balaton',           folder: 'Balatonboglar',     label: 'Balatonboglár' },
  'Zala':                 { file: '/hungary/Zala/admin.geojson',                center: [16.9, 46.6], zoom: 9,   group: 'Balaton',           folder: 'Zala',              label: 'Zala' },
  'Tolna':                { file: '/hungary/Tolna/admin.geojson',               center: [18.5, 46.5], zoom: 9,   group: 'Pannon',            folder: 'Tolna',             label: 'Tolna' },
  'Szekszard':            { file: '/hungary/Szekszard/admin.geojson',           center: [18.7, 46.3], zoom: 10,  group: 'Pannon',            folder: 'Szekszard',         label: 'Szekszárd' },
  'Pecs':                 { file: '/hungary/Pecs/admin.geojson',                center: [18.3, 46.0], zoom: 10,  group: 'Pannon',            folder: 'Pecs',              label: 'Pécs' },
  'Villany':              { file: '/hungary/Villany/admin.geojson',             center: [18.5, 45.9], zoom: 10,  group: 'Pannon',            folder: 'Villany',           label: 'Villány' },
  'Hajos-Baja':           { file: '/hungary/Hajos-Baja/admin.geojson',          center: [19.1, 46.4], zoom: 10,  group: 'Duna',              folder: 'Hajos-Baja',        label: 'Hajós-Baja' },
  'Kunsag':               { file: '/hungary/Kunsag/admin.geojson',              center: [19.8, 47.0], zoom: 8,   group: 'Duna',              folder: 'Kunsag',            label: 'Kunság' },
  'Csongrad':             { file: '/hungary/Csongrad/admin.geojson',            center: [20.0, 46.3], zoom: 9,   group: 'Duna',              folder: 'Csongrad',          label: 'Csongrád' },
}

const cfg = computed(() => REGION_CONFIG[props.mapRegion] || REGION_CONFIG['all'])

// ── 狀態 ─────────────────────────────────────────────────────
const mapContainer = ref(null)
const loading = ref(true)
const errorMsg = ref(null)
let map = null

// ── GeoJSON bbox 計算 ─────────────────────────────────────────
function getCoords(g, out) {
  if (!g) return
  if (g.type === 'Point') out.push(g.coordinates)
  else if (g.type === 'LineString' || g.type === 'MultiPoint') g.coordinates.forEach(c => out.push(c))
  else if (g.type === 'Polygon' || g.type === 'MultiLineString') g.coordinates.forEach(r => r.forEach(c => out.push(c)))
  else if (g.type === 'MultiPolygon') g.coordinates.forEach(p => p.forEach(r => r.forEach(c => out.push(c))))
  else if (g.type === 'GeometryCollection') g.geometries.forEach(sub => getCoords(sub, out))
}

function calcBbox(gj) {
  const pts = []
  if (gj.type === 'FeatureCollection') gj.features.forEach(f => getCoords(f.geometry, pts))
  else if (gj.type === 'Feature') getCoords(gj.geometry, pts)
  else getCoords(gj, pts)
  if (!pts.length) return null
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  for (const c of pts) {
    if (c[0] < minX) minX = c[0]
    if (c[1] < minY) minY = c[1]
    if (c[0] > maxX) maxX = c[0]
    if (c[1] > maxY) maxY = c[1]
  }
  return [minX, minY, maxX, maxY]
}

// ── 地圖初始化 ────────────────────────────────────────────────
function destroyMap() {
  if (map) { map.remove(); map = null }
}

async function initMap() {
  if (!mapContainer.value) return
  destroyMap()
  loading.value = true
  errorMsg.value = null

  const token = import.meta.env.VITE_MAPBOX_TOKEN
    || (typeof window !== 'undefined' && (window.__MAPBOX_TOKEN || localStorage?.getItem('VITE_MAPBOX_TOKEN')))
  if (!token) {
    errorMsg.value = '未設定 Mapbox Token'
    loading.value = false
    return
  }

  const regionCfg = cfg.value
  const geojsonFile = regionCfg.file
  const fillColor = regionCfg.group ? (GROUP_COLORS[regionCfg.group] || '#2c8c5e') : '#1e5f74'

  mapboxgl.accessToken = token

  const mapInst = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: regionCfg.center,
    zoom: regionCfg.zoom,
    attributionControl: false,
  })
  map = mapInst

  mapInst.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
  mapInst.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right')

  mapInst.on('error', (e) => {
    console.warn('[HungaryMapSlide] map error:', e?.error?.message)
  })

  mapInst.on('load', async () => {
    try {
      const res = await fetch(geojsonFile)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const geojson = await res.json()

      mapInst.addSource('hungary-region', { type: 'geojson', data: geojson })
      mapInst.addLayer({
        id: 'hungary-fill',
        type: 'fill',
        source: 'hungary-region',
        paint: {
          'fill-color': fillColor,
          'fill-opacity': props.mapRegion === 'all' ? 0.25 : 0.4,
        },
      })
      mapInst.addLayer({
        id: 'hungary-outline',
        type: 'line',
        source: 'hungary-region',
        paint: { 'line-color': '#ffffff', 'line-width': 1.8, 'line-opacity': 0.9 },
      })

      // 自動縮放至 bbox
      try {
        const bbox = calcBbox(geojson)
        if (bbox) {
          mapInst.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: 60, duration: 800 })
        }
      } catch (_) { /* 靜默失敗，保持預設中心 */ }

      loading.value = false
    } catch (err) {
      errorMsg.value = `地圖載入失敗：${err.message}`
      loading.value = false
    }
  })
}

function handleOpenFullMap() {
  const regionCfg = cfg.value
  if (!regionCfg) return
  if (regionCfg.group && regionCfg.folder) {
    emit('openFullMap', { group: regionCfg.group, folder: regionCfg.folder })
  } else {
    // 'all' 模式：開啟地圖但不選取特定產區
    emit('openFullMap', { group: null, folder: null })
  }
}

watch(() => props.mapRegion, () => {
  nextTick(() => initMap())
})

onMounted(() => {
  nextTick(() => initMap())
})

onBeforeUnmount(() => {
  destroyMap()
})
</script>

<style scoped>
.hungary-map-slide {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 12px;
}

.hms-header {
  flex-shrink: 0;
}

.hms-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #e8d5a3;
  margin: 0 0 4px;
}

.hms-desc {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.hms-map-wrapper {
  position: relative;
  flex: 1;
  min-height: 300px;
  border-radius: 10px;
  overflow: hidden;
}

.hms-mapbox {
  width: 100%;
  height: 100%;
  min-height: 300px;
}

.hms-overlay {
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

.hms-spinner {
  width: 30px;
  height: 30px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top-color: #e8d5a3;
  border-radius: 50%;
  animation: hms-spin 0.8s linear infinite;
}

@keyframes hms-spin {
  to { transform: rotate(360deg); }
}

.hms-error {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(180, 40, 40, 0.85);
  color: #fff;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.82rem;
  z-index: 5;
}

.hms-fullmap-btn {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: rgba(0, 0, 0, 0.65);
  color: #e8d5a3;
  border: 1px solid rgba(232, 213, 163, 0.35);
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  z-index: 10;
  transition: background 0.18s, color 0.18s;
  backdrop-filter: blur(4px);
}

.hms-fullmap-btn:hover {
  background: rgba(139, 26, 26, 0.85);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.5);
}
</style>
