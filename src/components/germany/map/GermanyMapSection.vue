<template>
  <section class="germany-map-section">

    <!-- 全螢幕地圖 -->
    <div ref="mapContainer" class="map"></div>

    <!-- Header (Bordeaux style: transparent, pill buttons) -->
    <div class="map-header">
      <div class="map-header-left">
        <button class="map-hdr-btn" @click="emit('back')">← 返回產區</button>
        <button class="map-hdr-btn ghost" @click="router.push('/')">🏠 首頁</button>
      </div>
      <h1>{{ region.icon }} {{ region.name }} 葡萄酒產區地圖</h1>
    </div>

    <!-- 資訊卡 (Bordeaux style: bottom-left, white card) -->
    <div class="map-info-bar" :class="{ collapsed: infoCollapsed }">
      <div class="aoc-title-row">
        <span class="aoc-info-title">
          <span class="aoc-dot" :style="{ background: region.color }"></span>
          {{ selectedVineyard ? selectedVineyard : region.name }}
        </span>
        <div class="title-buttons">
          <button class="btn-collapse-inline" @click="infoCollapsed = !infoCollapsed"
            :title="infoCollapsed ? '展開資訊' : '收合資訊'">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline :points="infoCollapsed ? '18 15 12 9 6 15' : '6 9 12 15 18 9'"></polyline>
            </svg>
            <span class="btn-text">{{ infoCollapsed ? '展開' : '收合' }}</span>
          </button>
          <button class="btn-reset-icon" @click="resetMap" title="重置地圖">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 3v6h-6"></path>
              <path d="M20.49 15A9 9 0 1 1 21 9"></path>
            </svg>
          </button>
        </div>
      </div>

      <div v-show="!infoCollapsed" class="info-details">

          <!-- 選中葡萄園時顯示 -->
          <div v-if="selectedVineyard" class="vineyard-info">
            <span class="vyd-badge">🍇 葡萄園 Einzellage</span>
            <p class="vyd-region">所屬產區：{{ region.nameDE }}</p>
          </div>

          <!-- 產區概覽 -->
          <template v-else>
            <div class="region-badges">
              <span class="rb ha">{{ region.hectares.toLocaleString() }} 公頃</span>
              <span class="rb climate">{{ region.climate }}</span>
            </div>

            <div class="grape-section">
              <div class="grape-title">主要葡萄品種</div>
              <div class="grape-badges">
                <span v-for="g in region.grapes" :key="g" class="grape-badge">{{ g }}</span>
              </div>
            </div>

            <div class="styles-section">
              <div class="styles-title">酒款類型</div>
              <div class="styles-list">
                <span v-for="s in region.styles" :key="s"
                  class="style-tag" :style="styleTagColor(s)">{{ s }}</span>
              </div>
            </div>

            <div class="soil-section">
              <div class="soil-title">土壤類型</div>
              <div class="soil-list">
                <span v-for="soil in region.soils" :key="soil" class="soil-chip">{{ soil }}</span>
              </div>
            </div>

            <p class="region-desc">{{ region.description }}</p>

            <div v-if="region.villages?.length" class="village-section">
              <div class="village-title">重要村莊</div>
              <div class="village-list">
                <span v-for="v in region.villages" :key="v" class="village-chip">{{ v }}</span>
              </div>
            </div>
          </template>

        </div>
      </div>
    </div>

    <!-- 圖層面板 -->
    <transition name="slide-up">
      <div v-if="showLayerPanel" class="mobile-layer-panel">
        <div class="layers-panel-header">
          <span>圖層與顯示</span>
          <button class="layers-panel-close" @click="showLayerPanel = false">✕</button>
        </div>
        <div class="layer-group">
          <div class="layer-group-label">葡萄園顯示</div>
          <div class="layer-group-buttons">
            <button class="btn-layer" :class="{ active: showVineyards }" @click="toggleVineyards">
              <span class="lbtn-icon">🍇</span>
              <span class="lbtn-text">葡萄園</span>
              <span class="lbtn-dot" :class="{ on: showVineyards }"></span>
            </button>
            <button class="btn-layer" :class="{ active: is3D }" @click="toggle3D">
              <span class="lbtn-icon">🗺</span>
              <span class="lbtn-text">3D 地形</span>
              <span class="lbtn-dot" :class="{ on: is3D }"></span>
            </button>
            <button class="btn-layer" :class="{ active: showContours }" @click="toggleContours">
              <span class="lbtn-icon">〰</span>
              <span class="lbtn-text">等高線</span>
              <span class="lbtn-dot" :class="{ on: showContours }"></span>
            </button>
          </div>
        </div>
        <div class="layer-group" style="margin-top:0.75rem">
          <div class="layer-group-label">🌍 地質土壤（ISRIC SoilGrids）</div>
          <div class="layer-group-buttons">
            <button class="btn-layer" :class="{ active: showGeology }" @click="toggleGeology" :disabled="isGeologyLoading">
              <span class="lbtn-icon">{{ isGeologyLoading ? '⏳' : '🪨' }}</span>
              <span class="lbtn-text">{{ isGeologyLoading ? '載入中…' : '土壤地質圖' }}</span>
              <span class="lbtn-dot" :class="{ on: showGeology }"></span>
            </button>
          </div>
          <div v-if="geologyError" class="geology-error-msg">{{ geologyError }}</div>
          <div v-if="showGeology" class="geology-hint">資料來源：ISRIC SoilGrids · WRB 世界土壤分類系統<br>顏色代表不同 WRB 土壤類型</div>
          <a v-if="showGeology" class="geology-legend-link"
            href="https://maps.isric.org/mapserv?map=/map/wrb.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetLegendGraphic&LAYER=MostProbable&FORMAT=image/png&STYLE=default"
            target="_blank" rel="noopener">查看圖例說明 ↗</a>
        </div>
      </div>
    </transition>

    <!-- 底部工具列 (Bordeaux style: white card, warm colors) -->
    <div v-if="mapReady" class="mobile-map-toolbar">
      <button class="mobile-tool-btn" :class="{ active: showVineyards }" @click="toggleVineyards">
        <span class="mobile-tool-icon">🍇</span>
        <span>葡萄園</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: showGeology }" @click="toggleGeology" :disabled="isGeologyLoading">
        <span class="mobile-tool-icon">{{ isGeologyLoading ? '⏳' : '🪨' }}</span>
        <span>土壤</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: showLayerPanel }" @click="showLayerPanel = !showLayerPanel">
        <span class="mobile-tool-icon">層</span>
        <span>圖層</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: is3D }" @click="toggle3D">
        <span class="mobile-tool-icon">3D</span>
        <span>{{ is3D ? '2D' : '3D' }}</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: !infoCollapsed }" @click="infoCollapsed = !infoCollapsed">
        <span class="mobile-tool-icon">資</span>
        <span>資訊</span>
      </button>
    </div>

    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
    <div v-if="mapError" class="map-error">{{ mapError }}</div>

  </section>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const props = defineProps({
  region: { type: Object, required: true }
})
const emit = defineEmits(['back'])
const router = useRouter()

// ── State ──
const mapContainer = ref(null)
const mapReady = ref(false)
const isLoading = ref(true)
const mapError = ref(null)
const is3D = ref(false)
const showContours = ref(false)
const showVineyards = ref(true)
const infoCollapsed = ref(false)
const showLayerPanel = ref(false)
const selectedVineyard = ref(null)
const showGeology = ref(false)
const isGeologyLoading = ref(false)
const geologyError = ref(null)

// ISRIC SoilGrids WMS — WRB 世界土壤分類
// 開發環境透過 Vite proxy 轉發（解決 localhost CORS）
// 生產環境直連（ISRIC 允許跨域存取）
const isDevProxy = typeof window !== 'undefined' && window.location.hostname === 'localhost'
const ISRIC_BASE = isDevProxy
  ? '/isric-proxy/mapserv?map=/map/wrb.map'
  : 'https://maps.isric.org/mapserv?map=/map/wrb.map'
const ISRIC_WMS_TILE =
  ISRIC_BASE +
  '&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap' +
  '&LAYERS=MostProbable&STYLES=' +
  '&FORMAT=image%2Fpng&TRANSPARENT=TRUE' +
  '&CRS=EPSG%3A3857&WIDTH=256&HEIGHT=256' +
  '&BBOX={bbox-epsg-3857}'

let map = null
let regionBounds = null

// ── Style helpers ──
function styleTagColor(style) {
  const map = {
    'Kabinett':   { background: '#e8f5e9', color: '#2e7d32' },
    'Spätlese':   { background: '#fff3e0', color: '#e65100' },
    'Auslese':    { background: '#fce4ec', color: '#c62828' },
    'TBA':        { background: '#4a148c', color: '#fff' },
    'Eiswein':    { background: '#e3f2fd', color: '#1565c0' },
    'Sekt':       { background: '#f3e5f5', color: '#6a1b9a' },
    'QbA':        { background: '#f5f5f5', color: '#424242' },
    '紅酒 QbA':   { background: '#ffebee', color: '#b71c1c' },
    '紅酒 Spätlese': { background: '#b71c1c', color: '#fff' },
    'Weißherbst': { background: '#fce4ec', color: '#ad1457' },
    'Grauburgunder': { background: '#efebe9', color: '#4e342e' },
  }
  return map[style] || { background: '#eee', color: '#444' }
}

// ── GeoJSON loading ──
async function fetchGeoJSON(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`)
  return res.json()
}

async function mergeGeoJSONFiles(files) {
  const results = await Promise.all(files.map(f => fetchGeoJSON(f)))
  return {
    type: 'FeatureCollection',
    features: results.flatMap(r => r.features || [])
  }
}

function calcBbox(geojson) {
  let minLng = Infinity, minLat = Infinity, maxLng = -Infinity, maxLat = -Infinity
  const processCoords = (coords) => {
    if (!Array.isArray(coords)) return
    if (typeof coords[0] === 'number') {
      minLng = Math.min(minLng, coords[0])
      minLat = Math.min(minLat, coords[1])
      maxLng = Math.max(maxLng, coords[0])
      maxLat = Math.max(maxLat, coords[1])
    } else { coords.forEach(processCoords) }
  }
  ;(geojson.features || []).forEach(f => {
    if (f.geometry?.coordinates) processCoords(f.geometry.coordinates)
  })
  return [minLng, minLat, maxLng, maxLat]
}

// ── Map initialization ──
async function initMap() {
  if (!mapContainer.value) return
  isLoading.value = true
  mapError.value = null
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

  // Load region GeoJSON first to get bounds
  let regionGeoJSON = null
  try {
    const regionFiles = Array.isArray(props.region.regionFile)
      ? props.region.regionFile
      : [props.region.regionFile]
    regionGeoJSON = await mergeGeoJSONFiles(regionFiles)
    const bbox = calcBbox(regionGeoJSON)
    regionBounds = bbox
  } catch (e) {
    console.warn('[GermanyMapSection] region GeoJSON load failed:', e)
  }

  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    pitch: 0,
    bearing: 0,
    ...(regionBounds && regionBounds[0] !== Infinity
      ? {
          bounds: [[regionBounds[0], regionBounds[1]], [regionBounds[2], regionBounds[3]]],
          fitBoundsOptions: { padding: 60 }
        }
      : {
          center: props.region.center,
          zoom: props.region.zoom
        }
    )
  })

  map.on('load', async () => {
    map.addControl(new mapboxgl.NavigationControl(), 'top-right')
    map.addControl(new mapboxgl.FullscreenControl(), 'top-right')

    // DEM + contours
    map.addSource('mapbox-dem', {
      type: 'raster-dem',
      url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
      tileSize: 512, maxzoom: 14
    })
    map.addSource('contours', { type: 'vector', url: 'mapbox://mapbox.mapbox-terrain-v2' })
    map.addLayer({
      id: 'contour-lines', type: 'line', source: 'contours', 'source-layer': 'contour',
      layout: { 'line-join': 'round', 'line-cap': 'round', visibility: 'none' },
      paint: { 'line-color': '#ff6b35', 'line-width': 1, 'line-opacity': 0.75 },
      filter: ['==', ['get', 'index'], 1]
    })

    // Region boundary
    if (regionGeoJSON) {
      map.addSource('region-boundary', { type: 'geojson', data: regionGeoJSON })
      map.addLayer({
        id: 'region-fill', type: 'fill', source: 'region-boundary',
        paint: { 'fill-color': props.region.color, 'fill-opacity': 0.08 }
      })
      map.addLayer({
        id: 'region-line', type: 'line', source: 'region-boundary',
        paint: { 'line-color': props.region.color, 'line-width': 2.5, 'line-opacity': 0.9 }
      })
    }

    // Vineyard layer
    await loadVineyards()

    mapReady.value = true
    isLoading.value = false
  })

  map.on('error', (e) => {
    // tile/source 錯誤有 sourceId — 非致命
    if (e?.sourceId) {
      console.warn('[GermanyMapSection] tile/source error (non-fatal):', e.sourceId, e?.error?.message)
      if (e.sourceId === 'isric-soil-wms' && showGeology.value) {
        geologyError.value = '土壤圖資料載入失敗，請稍後再試'
        showGeology.value = false
        if (map.getLayer('bgr-soil-layer')) map.setLayoutProperty('bgr-soil-layer', 'visibility', 'none')
      }
      return
    }
    const msg = e?.error?.message || ''
    // Mapbox token 在 localhost 爲生的 Unlisted TLDs 錯誤 — 非致命，不顯示全局訊息
    if (
      msg.includes('Unlisted TLDs') ||
      msg.includes('401') ||
      msg.includes('403') ||
      msg.toLowerCase().includes('token') ||
      msg.toLowerCase().includes('unauthorized') ||
      msg.toLowerCase().includes('forbidden')
    ) {
      console.warn('[GermanyMapSection] Mapbox auth warning (non-fatal on localhost):', msg)
      return
    }
    console.error('[GermanyMapSection] fatal map error:', e)
    mapError.value = '地圖載入失敗，請重整頁面'
    isLoading.value = false
  })
}

async function loadVineyards() {
  if (!map) return
  clearVineyardLayers()

  try {
    const vineyardFiles = Array.isArray(props.region.vineyardFile)
      ? props.region.vineyardFile
      : [props.region.vineyardFile]
    const vineyardGeoJSON = await mergeGeoJSONFiles(vineyardFiles)

    map.addSource('vineyards', { type: 'geojson', data: vineyardGeoJSON })
    map.addLayer({
      id: 'vineyard-fill', type: 'fill', source: 'vineyards',
      layout: { visibility: showVineyards.value ? 'visible' : 'none' },
      paint: { 'fill-color': '#4caf50', 'fill-opacity': 0.35 }
    })
    map.addLayer({
      id: 'vineyard-line', type: 'line', source: 'vineyards',
      layout: { visibility: showVineyards.value ? 'visible' : 'none' },
      paint: { 'line-color': '#2e7d32', 'line-width': 1, 'line-opacity': 0.7 }
    })

    // Hover effect
    let hoveredId = null
    map.on('mousemove', 'vineyard-fill', (e) => {
      map.getCanvas().style.cursor = 'pointer'
      if (e.features.length > 0) {
        if (hoveredId !== null) {
          map.setFeatureState({ source: 'vineyards', id: hoveredId }, { hover: false })
        }
        hoveredId = e.features[0].id
        map.setFeatureState({ source: 'vineyards', id: hoveredId }, { hover: true })
      }
    })
    map.on('mouseleave', 'vineyard-fill', () => {
      map.getCanvas().style.cursor = ''
      if (hoveredId !== null) {
        map.setFeatureState({ source: 'vineyards', id: hoveredId }, { hover: false })
        hoveredId = null
      }
    })

    // Click to show name
    map.on('click', 'vineyard-fill', (e) => {
      if (e.features.length > 0) {
        const feat = e.features[0]
        const name = feat.properties?.name || feat.properties?.ref || null
        if (name) {
          selectedVineyard.value = name
          infoCollapsed.value = false
        }
      }
    })
  } catch (e) {
    console.warn('[GermanyMapSection] vineyard load failed:', e)
  }
}

function clearVineyardLayers() {
  if (!map) return
  ;['vineyard-fill', 'vineyard-line'].forEach(id => {
    if (map.getLayer(id)) map.removeLayer(id)
  })
  if (map.getSource('vineyards')) map.removeSource('vineyards')
}

// ── Controls ──
function toggleVineyards() {
  showVineyards.value = !showVineyards.value
  if (!map) return
  ;['vineyard-fill', 'vineyard-line'].forEach(id => {
    if (map.getLayer(id)) {
      map.setLayoutProperty(id, 'visibility', showVineyards.value ? 'visible' : 'none')
    }
  })
}

function toggle3D() {
  is3D.value = !is3D.value
  if (!map) return
  if (is3D.value) {
    map.easeTo({ pitch: 45, duration: 800 })
    if (map.getSource('mapbox-dem')) {
      map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 })
      if (!map.getLayer('sky')) {
        map.addLayer({
          id: 'sky', type: 'sky',
          paint: { 'sky-type': 'atmosphere', 'sky-atmosphere-sun': [0, 90], 'sky-atmosphere-sun-intensity': 15 }
        })
      }
    }
  } else {
    map.easeTo({ pitch: 0, duration: 800 })
    map.setTerrain(null)
    if (map.getLayer('sky')) map.removeLayer('sky')
  }
}

function toggleContours() {
  showContours.value = !showContours.value
  if (!map || !map.getLayer('contour-lines')) return
  map.setLayoutProperty('contour-lines', 'visibility', showContours.value ? 'visible' : 'none')
}

async function toggleGeology() {
  if (!map) return
  showGeology.value = !showGeology.value
  geologyError.value = null

  if (showGeology.value) {
    isGeologyLoading.value = true
    try {
      addGeologyLayer()
    } catch (e) {
      console.warn('[GermanyMapSection] 地質圖層載入失敗:', e)
      geologyError.value = '地質圖服務目前無法連線，請稍後再試'
      showGeology.value = false
    } finally {
      isGeologyLoading.value = false
    }
  } else {
    if (map.getLayer('bgr-soil-layer')) {
      map.setLayoutProperty('bgr-soil-layer', 'visibility', 'none')
    }
  }
}

// 建立地質圖層（每次切換產區時重建，帶產區 bounds 范圍）
function addGeologyLayer() {
  if (!map) return

  // 移除舊層
  if (map.getLayer('bgr-soil-layer')) map.removeLayer('bgr-soil-layer')
  if (map.getSource('isric-soil-wms')) map.removeSource('isric-soil-wms')

  // 產區 bbox 辳加少許個空間，避免邊緣 tile 缺失
  const PAD = 0.3
  const bounds = regionBounds && regionBounds[0] !== Infinity
    ? [regionBounds[0] - PAD, regionBounds[1] - PAD, regionBounds[2] + PAD, regionBounds[3] + PAD]
    : undefined

  map.addSource('isric-soil-wms', {
    type: 'raster',
    tiles: [ISRIC_WMS_TILE],
    tileSize: 256,
    minzoom: 4,
    maxzoom: 14,
    ...(bounds ? { bounds } : {}),
    attribution: '© ISRIC SoilGrids · WRB 土壤分類'
  })

  const insertBefore = map.getLayer('region-fill') ? 'region-fill' : undefined
  map.addLayer({
    id: 'bgr-soil-layer',
    type: 'raster',
    source: 'isric-soil-wms',
    paint: { 'raster-opacity': 0.72 }
  }, insertBefore)
}

function resetMap() {
  if (!map) return
  selectedVineyard.value = null
  if (regionBounds && regionBounds[0] !== Infinity) {
    map.fitBounds([[regionBounds[0], regionBounds[1]], [regionBounds[2], regionBounds[3]]], {
      padding: 60, duration: 1000
    })
  } else {
    map.flyTo({ center: props.region.center, zoom: props.region.zoom, duration: 1000 })
  }
}

// ── Watch region change ──
watch(() => props.region, async () => {
  selectedVineyard.value = null
  infoCollapsed.value = false
  regionBounds = null
  const wasGeologyOn = showGeology.value
  showGeology.value = false
  geologyError.value = null

  if (map) {
    // 移除地質圖層（切換產區時必須依新產區 bounds 重建）
    if (map.getLayer('bgr-soil-layer')) map.removeLayer('bgr-soil-layer')
    if (map.getSource('isric-soil-wms')) map.removeSource('isric-soil-wms')

    // Remove existing layers/sources
    ;['region-fill', 'region-line', 'vineyard-fill', 'vineyard-line'].forEach(id => {
      if (map.getLayer(id)) map.removeLayer(id)
    })
    ;['region-boundary', 'vineyards'].forEach(id => {
      if (map.getSource(id)) map.removeSource(id)
    })

    // Reload for new region
    try {
      const regionFiles = Array.isArray(props.region.regionFile)
        ? props.region.regionFile : [props.region.regionFile]
      const regionGeoJSON = await mergeGeoJSONFiles(regionFiles)
      regionBounds = calcBbox(regionGeoJSON)

      map.addSource('region-boundary', { type: 'geojson', data: regionGeoJSON })
      map.addLayer({ id: 'region-fill', type: 'fill', source: 'region-boundary',
        paint: { 'fill-color': props.region.color, 'fill-opacity': 0.08 } })
      map.addLayer({ id: 'region-line', type: 'line', source: 'region-boundary',
        paint: { 'line-color': props.region.color, 'line-width': 2.5, 'line-opacity': 0.9 } })

      map.fitBounds([[regionBounds[0], regionBounds[1]], [regionBounds[2], regionBounds[3]]], {
        padding: 60, duration: 1200
      })
    } catch (e) {
      map.flyTo({ center: props.region.center, zoom: props.region.zoom, duration: 1200 })
    }

    await loadVineyards()

    // 若切換前地質圖已開啟，自動以新產區 bounds 重建
    if (wasGeologyOn) {
      showGeology.value = true
      addGeologyLayer()
    }
  }
}, { deep: true })

onMounted(async () => {
  await nextTick()
  initMap()
})

onUnmounted(() => {
  if (map) { map.remove(); map = null }
})
</script>

<style scoped>
.germany-map-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-family: 'Noto Sans TC', sans-serif;
}

.map {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* ── Header (Bordeaux style) ── */
.map-header {
  position: absolute;
  top: 0; left: 0; right: 0;
  background: none;
  padding: 12px 16px;
  z-index: 10;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  pointer-events: none;
}
.map-header-left {
  display: flex;
  gap: 8px;
  pointer-events: auto;
  flex-shrink: 0;
}
.map-header h1 {
  margin: 0;
  font-size: 1.3rem;
  color: #8B0000;
  text-align: center;
  flex: 1;
  text-shadow: 0 1px 4px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.9);
  padding-top: 4px;
  pointer-events: none;
}
.map-hdr-btn {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  background: rgba(139,0,0,0.82);
  color: #fff;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  transition: background 0.2s;
  white-space: nowrap;
}
.map-hdr-btn:hover { background: rgba(160,0,0,0.92); }
.map-hdr-btn.ghost {
  background: rgba(255,255,255,0.75);
  border: 1.5px solid rgba(139,0,0,0.5);
  color: #7b1212;
}
.map-hdr-btn.ghost:hover { background: rgba(255,255,255,0.92); }

/* ── Info Bar (Bordeaux style) ── */
.map-info-bar {
  position: absolute;
  bottom: 102px;
  left: 20px;
  background: rgba(255,255,255,0.97);
  padding: 18px;
  border-radius: 8px;
  max-width: 420px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  z-index: 10;
  color: #222;
  transition: all 0.3s ease;
}
.map-info-bar.collapsed { max-width: 350px; padding: 12px 18px; }

.aoc-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  gap: 10px;
  transition: margin 0.3s ease;
}
.map-info-bar.collapsed .aoc-title-row { margin-bottom: 0; }
.aoc-info-title {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: bold;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #222;
}
.aoc-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  flex-shrink: 0;
}
.title-buttons { display: flex; gap: 8px; align-items: center; flex-shrink: 0; }
.btn-collapse-inline {
  display: flex; align-items: center; gap: 4px;
  padding: 6px 10px;
  background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
  border: 1px solid #ccc; border-radius: 6px;
  cursor: pointer; color: #444;
  font-size: 0.82rem; font-weight: 600;
  transition: all 0.2s;
}
.btn-collapse-inline:hover { border-color: #8B0000; color: #8B0000; }
.btn-text { font-size: 0.85rem; white-space: nowrap; }
.map-info-bar.collapsed .btn-text { display: none; }
.map-info-bar.collapsed .btn-collapse-inline { padding: 6px 8px; }
.btn-reset-icon {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px;
  border: none; border-radius: 10px;
  background: linear-gradient(180deg, #ff6f61 0%, #ef4f45 100%);
  color: #fff; cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.16);
  transition: all 0.2s;
  flex-shrink: 0;
}
.btn-reset-icon:hover { transform: translateY(-1px); }
.info-details {
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: 1000px; opacity: 1;
}
.map-info-bar.collapsed .info-details { max-height: 0; opacity: 0; margin: 0; padding: 0; }

/* ── Info content ── */
.vineyard-info { text-align: center; padding: 0.5rem 0; }
.vyd-badge {
  display: inline-block;
  background: #e8f5e9; color: #2e7d32;
  padding: 4px 12px; border-radius: 20px;
  font-size: 0.85rem; font-weight: 700;
  margin-bottom: 0.5rem;
}
.vyd-region { color: #666; font-size: 0.85rem; margin: 0; }

.info-details > .vineyard-info,
.info-details > .region-badges,
.info-details > .grape-section,
.info-details > .styles-section,
.info-details > .soil-section,
.info-details > .village-section,
.info-details > .region-desc,
.info-details > template {
  /* contained within info-details */
}
/* vineyard info */
.region-badges {
  display: flex; flex-wrap: wrap; gap: 8px;
  margin-bottom: 0.8rem;
}
.rb {
  font-size: 0.78rem; font-weight: 700;
  padding: 3px 10px; border-radius: 20px;
}
.rb.ha { background: #e3f2fd; color: #1565c0; }
.rb.climate { background: #f3e5f5; color: #6a1b9a; }

.grape-section, .styles-section, .soil-section, .village-section {
  margin-bottom: 0.75rem;
}
.grape-title, .styles-title, .soil-title, .village-title {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #888;
  margin-bottom: 0.35rem;
}
.grape-badges { display: flex; flex-wrap: wrap; gap: 5px; }
.grape-badge {
  font-size: 0.78rem;
  padding: 3px 9px;
  background: #f3e8ff; color: #7c3aed;
  border-radius: 12px;
  font-weight: 600;
}
.styles-list { display: flex; flex-wrap: wrap; gap: 5px; }
.style-tag {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 3px 9px;
  border-radius: 12px;
}
.soil-list, .village-list { display: flex; flex-wrap: wrap; gap: 5px; }
.soil-chip, .village-chip {
  font-size: 0.75rem;
  padding: 2px 8px;
  background: #f5f5f5; color: #555;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
}
.region-desc {
  font-size: 0.83rem; color: #555;
  line-height: 1.55;
  margin: 0.5rem 0;
}

/* ── Legend (removed, merged into toolbar) ── */

/* ── Layer Panel ── */
.mobile-layer-panel {
  position: absolute;
  bottom: 102px; right: 16px;
  z-index: 20;
  background: rgba(252,248,244,0.98);
  border-radius: 16px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.18);
  padding: 1rem;
  min-width: 230px;
  border: 1px solid rgba(139,0,0,0.1);
}
.layers-panel-header {
  display: flex; align-items: center; justify-content: space-between;
  font-weight: 700; font-size: 0.95rem;
  color: #6b1212;
  margin-bottom: 0.75rem;
}
.layers-panel-close {
  background: none; border: none; cursor: pointer;
  font-size: 1rem; color: #666; padding: 2px;
}
.layer-group-label {
  font-size: 0.72rem; text-transform: uppercase;
  letter-spacing: 0.05em; color: #999;
  margin-bottom: 0.5rem;
}
.layer-group-buttons { display: flex; flex-direction: column; gap: 6px; }
.btn-layer {
  display: flex; align-items: center; gap: 8px;
  background: #f5f5f5; border: none;
  border-radius: 10px; padding: 0.5rem 0.75rem;
  cursor: pointer; font-size: 0.85rem;
  transition: background 0.2s;
}
.btn-layer.active { background: #e8f5e9; }
.btn-layer:hover { background: #eeeeee; }
.lbtn-icon { font-size: 1rem; }
.lbtn-text { flex: 1; font-weight: 500; }
.lbtn-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #ccc;
}
.lbtn-dot.on { background: #8B0000; }

/* ── Bottom toolbar (Bordeaux style) ── */
.mobile-map-toolbar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 24px;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
  padding: 8px;
  border-radius: 18px;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  width: min(94vw, 420px);
}
.mobile-tool-btn {
  border-radius: 16px;
  background: linear-gradient(180deg, #faf5ef 0%, #f1e7dd 100%);
  color: #4f3422;
  min-height: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  font-size: 0.76rem;
  font-weight: 800;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}
.mobile-tool-btn:hover { background: linear-gradient(180deg, #f5ede0 0%, #eadcc8 100%); }
.mobile-tool-btn.active {
  background: linear-gradient(180deg, #7b2424 0%, #5f1717 100%);
  color: #fff;
}
.mobile-tool-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.mobile-tool-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px; height: 30px;
  border-radius: 50%;
  background: rgba(107,31,31,0.08);
  font-size: 0.8rem;
  font-weight: 800;
}
.mobile-tool-btn.active .mobile-tool-icon { background: rgba(255,255,255,0.18); }

/* ── Geology WMS ── */
.geology-error-msg {
  margin-top: 0.4rem; font-size: 0.75rem;
  color: #c62828; background: #ffebee;
  border-radius: 6px; padding: 4px 8px; line-height: 1.4;
}
.geology-hint { margin-top: 0.4rem; font-size: 0.72rem; color: #555; line-height: 1.45; }
.geology-legend-link {
  display: inline-block; margin-top: 0.35rem;
  font-size: 0.72rem; color: #1565c0; text-decoration: underline; cursor: pointer;
}

/* ── Loading & Error ── */
.loading-overlay {
  position: absolute; inset: 0;
  z-index: 50;
  display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.7);
}
.loading-spinner {
  width: 50px; height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #8B0000;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.map-error {
  position: absolute; bottom: 80px; left: 50%; transform: translateX(-50%);
  z-index: 50;
  background: #b71c1c; color: #fff;
  padding: 0.6rem 1.2rem; border-radius: 10px;
  font-size: 0.9rem;
}

/* ── Transitions ── */
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.3s ease; }
.slide-up-enter-from, .slide-up-leave-to { opacity: 0; transform: translateY(16px); }
.info-expand-enter-active, .info-expand-leave-active { transition: all 0.3s ease; overflow: hidden; }
.info-expand-enter-from, .info-expand-leave-to { max-height: 0; opacity: 0; }
.info-expand-enter-to, .info-expand-leave-from { max-height: 500px; opacity: 1; }

@media (max-width: 600px) {
  .map-info-bar {
    left: 50%;
    transform: translateX(-50%);
    width: min(92vw, 420px);
    max-width: none;
    bottom: calc(env(safe-area-inset-bottom, 0px) + 108px);
  }
  .mobile-map-toolbar { bottom: calc(env(safe-area-inset-bottom, 0px) + 24px); }
  .map-header h1 { font-size: 0.9rem; }
}
</style>
