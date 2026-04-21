<template>
  <div class="pt-map-slide">
    <div class="ptms-header">
      <h2 class="ptms-title">{{ slide.title }}</h2>
      <p v-if="slide.description" class="ptms-desc">{{ slide.description }}</p>
    </div>
    <div class="ptms-map-wrapper">
      <div ref="mapContainer" class="ptms-mapbox"></div>
      <div v-if="loading" class="ptms-overlay">
        <div class="ptms-spinner"></div>
        <span>地圖載入中…</span>
      </div>
      <div v-if="errorMsg" class="ptms-error">
        <span>⚠️ {{ errorMsg }}</span>
      </div>
      <!-- 開啟完整互動地圖按鈕 -->
      <button
        v-if="!loading && !errorMsg && slide.mapRegion"
        class="ptms-fullmap-btn"
        @click="emit('openFullMap')"
        title="開啟完整互動地圖"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        🗺️ 開啟完整互動地圖
      </button>
      <!-- 產區類型圖例 -->
      <div v-if="regionInfo" class="ptms-badge" :class="regionInfo.region_type === 'DOC' ? 'doc' : 'igp'">
        {{ regionInfo.region_type }}
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
const emit = defineEmits(['openFullMap'])

const mapContainer = ref(null)
const loading = ref(true)
const errorMsg = ref(null)
const regionInfo = ref(null)
let map = null

function getCoords(g, out) {
  if (!g) return
  if (g.type === 'Point') out.push(g.coordinates)
  else if (g.type === 'LineString' || g.type === 'MultiPoint') g.coordinates.forEach(c => out.push(c))
  else if (g.type === 'Polygon' || g.type === 'MultiLineString') g.coordinates.forEach(r => r.forEach(c => out.push(c)))
  else if (g.type === 'MultiPolygon') g.coordinates.forEach(p => p.forEach(r => r.forEach(c => out.push(c))))
  else if (g.type === 'GeometryCollection') g.geometries.forEach(s => getCoords(s, out))
}

function calcBbox(feature) {
  const pts = []
  getCoords(feature.geometry, pts)
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
  regionInfo.value = null
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

  const regionName = props.slide.mapRegion
  if (!regionName) {
    errorMsg.value = '未指定產區名稱'
    loading.value = false
    return
  }

  mapboxgl.accessToken = token

  // 葡萄牙地理中心，作為初始視角
  const mapInst = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: [-8.0, 39.5],
    zoom: 5.5,
    attributionControl: false,
  })
  map = mapInst

  mapInst.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
  mapInst.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right')

  mapInst.on('error', (e) => {
    console.warn('[PortugalRegionMapSlide] map error:', e?.error?.message)
  })

  mapInst.on('load', async () => {
    try {
      // 載入葡萄牙產區 GeoJSON（包含 DOC + IGP）
      const geojsonUrl = props.slide.geojsonUrl || '/portugal/doc_regions.geojson'
      const res = await fetch(geojsonUrl)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const fullGeojson = await res.json()

      // 過濾出指定產區
      const feature = fullGeojson.features.find(
        f => f.properties?.name === regionName
      )
      if (!feature) throw new Error(`找不到產區「${regionName}」`)

      regionInfo.value = feature.properties

      // 建立只含該產區的 FeatureCollection
      const regionGeojson = { type: 'FeatureCollection', features: [feature] }

      const fillColor = feature.properties?.color || '#27ae60'

      mapInst.addSource('pt-region', { type: 'geojson', data: regionGeojson })
      mapInst.addLayer({
        id: 'pt-region-fill',
        type: 'fill',
        source: 'pt-region',
        paint: {
          'fill-color': fillColor,
          'fill-opacity': 0.25,
        },
      })
      mapInst.addLayer({
        id: 'pt-region-line',
        type: 'line',
        source: 'pt-region',
        paint: {
          'line-color': fillColor,
          'line-width': 2.5,
        },
      })

      // 自動縮放至產區範圍
      const bbox = calcBbox(feature)
      if (bbox) {
        // 島嶼產區可能需要更大的 padding
        const isIsland = feature.properties?.island === true
        mapInst.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], {
          padding: isIsland ? 60 : 80,
          maxZoom: 11,
          duration: 1200,
        })
      }
    } catch (e) {
      errorMsg.value = `產區地圖載入失敗（${e.message}）`
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
.pt-map-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 22px 28px 16px;
  box-sizing: border-box;
}

.ptms-header {
  flex-shrink: 0;
  margin-bottom: 12px;
}

.ptms-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 4px;
  border-bottom: 3px solid #006600;
  padding-bottom: 8px;
}

.ptms-desc {
  font-size: 0.88rem;
  color: #666;
  margin: 4px 0 0;
}

.ptms-map-wrapper {
  flex: 1;
  min-height: 0;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: #1a1a2e;
}

.ptms-mapbox {
  width: 100%;
  height: 100%;
}

.ptms-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #fff;
  font-size: 0.9rem;
}

.ptms-spinner {
  width: 36px;
  height: 36px;
  border: 3px solid rgba(255, 255, 255, 0.25);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.ptms-error {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e74c3c;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 16px;
  text-align: center;
}

.ptms-fullmap-btn {
  position: absolute;
  bottom: 12px;
  left: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 20px;
  padding: 7px 14px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #2c3e50;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  transition: background 0.15s, transform 0.1s;
  z-index: 10;
}

.ptms-fullmap-btn:hover {
  background: #fff;
  transform: translateY(-1px);
}

.ptms-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  z-index: 10;
}

.ptms-badge.doc {
  background: #27ae60;
  color: #fff;
}

.ptms-badge.igp {
  background: #3498db;
  color: #fff;
}

@media (max-width: 600px) {
  .pt-map-slide {
    padding: 14px 14px 10px;
  }
  .ptms-title {
    font-size: 1.2rem;
  }
}
</style>
