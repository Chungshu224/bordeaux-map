<template>
  <div class="spain-map-slide">
    <div class="sms-header">
      <h2 class="sms-title">{{ slide.title }}</h2>
      <p v-if="slide.description" class="sms-desc">{{ slide.description }}</p>
    </div>
    <div class="sms-map-wrapper">
      <div ref="mapContainer" class="sms-mapbox"></div>
      <div v-if="loading" class="sms-overlay">
        <div class="sms-spinner"></div>
        <span>地圖載入中…</span>
      </div>
      <div v-if="errorMsg" class="sms-error">
        <span>⚠️ {{ errorMsg }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const props = defineProps({
  slide: { type: Object, required: true },
})

const mapContainer = ref(null)
const loading = ref(true)
const errorMsg = ref(null)
let map = null

// 每個 mapRegion key 對應 GeoJSON 路徑 + 預設中心（fallback if fitBounds fails）
const REGION_CONFIG = {
  // 使用西班牙全國概覽
  'all':             { file: '/spain/spain-wine-regions.geojson', center: [-3.7, 40.0], zoom: 5.5, label: '西班牙全國葡萄酒產區' },
  // 各自治區
  'rioja':           { file: '/spain/geojson/rioja.geojson',           center: [-2.5, 42.3], zoom: 9,   label: '拉里奧哈 La Rioja' },
  'castilla-leon':   { file: '/spain/geojson/castilla-leon.geojson',   center: [-4.5, 41.5], zoom: 7,   label: '卡斯提亞-萊昂 Castilla y León' },
  'castilla-la-mancha': { file: '/spain/geojson/castilla-la-mancha.geojson', center: [-3.0, 39.5], zoom: 7, label: '卡斯提亞-拉曼恰 Castilla-La Mancha' },
  'galicia':         { file: '/spain/geojson/galicia.geojson',         center: [-8.0, 42.6], zoom: 8,   label: '加利西亞 Galicia' },
  'catalonia':       { file: '/spain/geojson/catalonia.geojson',       center: [1.5,  41.5], zoom: 7.5, label: '加泰羅尼亞 Catalunya' },
  'andalucia':       { file: '/spain/geojson/andalucia.geojson',       center: [-5.0, 37.5], zoom: 7,   label: '安達盧西亞 Andalucía' },
  'navarra':         { file: '/spain/geojson/navarra.geojson',         center: [-1.7, 42.7], zoom: 9,   label: '納瓦拉 Navarra' },
  'aragon':          { file: '/spain/geojson/aragon.geojson',          center: [-0.8, 41.5], zoom: 7.5, label: '阿拉貢 Aragón' },
  'murcia':          { file: '/spain/geojson/murcia.geojson',          center: [-1.5, 37.9], zoom: 9,   label: '穆爾西亞 Murcia' },
  'canarias':        { file: '/spain/geojson/canarias.geojson',        center: [-15.5, 28.5], zoom: 6.5, label: '加那利群島 Islas Canarias' },
  'pais-vasco':      { file: '/spain/geojson/pais-vasco.geojson',      center: [-2.5, 43.0], zoom: 9,   label: '巴斯克 País Vasco' },
  'valencia':        { file: '/spain/geojson/valencia.geojson',        center: [-0.5, 39.5], zoom: 8,   label: '巴倫西亞 Comunitat Valenciana' },
  'madrid':          { file: '/spain/geojson/madrid.geojson',          center: [-3.7, 40.4], zoom: 9,   label: '馬德里 Madrid' },
  'extremadura':     { file: '/spain/geojson/extremadura.geojson',     center: [-6.0, 39.0], zoom: 7.5, label: '埃斯特雷馬杜拉 Extremadura' },
  'baleares':        { file: '/spain/geojson/baleares.geojson',        center: [2.9,  39.6], zoom: 8,   label: '巴利亞利群島 Illes Balears' },
  'asturias':        { file: '/spain/geojson/asturias.geojson',        center: [-6.0, 43.3], zoom: 9,   label: '阿斯圖里亞斯 Asturias' },
}

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

  const regionKey = props.slide.mapRegion || 'all'
  const cfg = REGION_CONFIG[regionKey] || REGION_CONFIG['all']

  mapboxgl.accessToken = token

  const mapInst = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: cfg.center,
    zoom: cfg.zoom,
    attributionControl: false,
  })
  map = mapInst

  mapInst.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
  mapInst.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right')

  mapInst.on('error', (e) => {
    console.warn('[SpainMapSlide] map error:', e?.error?.message)
  })

  mapInst.on('load', async () => {
    try {
      const res = await fetch(cfg.file)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const geojson = await res.json()

      // 畫產區邊界
      mapInst.addSource('spain-region', { type: 'geojson', data: geojson })
      mapInst.addLayer({
        id: 'spain-region-fill',
        type: 'fill',
        source: 'spain-region',
        paint: { 'fill-color': '#c0392b', 'fill-opacity': 0.18 },
      })
      mapInst.addLayer({
        id: 'spain-region-line',
        type: 'line',
        source: 'spain-region',
        paint: { 'line-color': '#c0392b', 'line-width': 2.5 },
      })

      // 自動縮放至邊界
      const bbox = calcBbox(geojson)
      if (bbox) {
        mapInst.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], {
          padding: 40,
          maxZoom: 12,
          duration: 1000,
        })
      }
    } catch (e) {
      errorMsg.value = `產區邊界載入失敗（${e.message}）`
    } finally {
      loading.value = false
    }
  })
}

onMounted(async () => {
  await nextTick()
  initMap()
})

watch(() => props.slide.mapRegion, () => {
  nextTick(() => initMap())
})

onBeforeUnmount(() => destroyMap())
</script>

<style scoped>
.spain-map-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 22px 28px 16px;
  box-sizing: border-box;
}

.sms-header {
  flex-shrink: 0;
  margin-bottom: 12px;
}

.sms-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 4px;
  border-bottom: 3px solid #c0392b;
  padding-bottom: 8px;
}

.sms-desc {
  font-size: 0.88rem;
  color: #666;
  margin: 4px 0 0;
}

.sms-map-wrapper {
  flex: 1;
  min-height: 0;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: #1a1a2e;
}

.sms-mapbox {
  width: 100%;
  height: 100%;
}

.sms-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.55);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #fff;
  font-size: 0.9rem;
}

.sms-spinner {
  width: 36px;
  height: 36px;
  border: 3px solid rgba(255,255,255,0.25);
  border-top-color: #c0392b;
  border-radius: 50%;
  animation: sms-spin 0.75s linear infinite;
}

@keyframes sms-spin {
  to { transform: rotate(360deg); }
}

.sms-error {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(192,57,43,0.85);
  color: #fff;
  padding: 6px 16px;
  border-radius: 8px;
  font-size: 0.82rem;
  white-space: nowrap;
}
</style>
