<template>
  <section class="de-map-section">

    <!-- 全螢幕地圖 -->
    <div ref="mapContainer" class="map"></div>

    <!-- Header（波爾多風格：透明背景 + pill 按鈕）-->
    <div class="map-header">
      <div class="map-header-left">
        <button class="map-hdr-btn" @click="emit('back')">← 返回課程</button>
        <button class="map-hdr-btn ghost" @click="router.push('/')">🏠 首頁</button>
      </div>
      <h1>🇩🇪 德國葡萄酒產區地圖</h1>
    </div>

    <!-- 資訊面板（工具列上方，波爾多風格）-->
    <div
      v-if="mapReady"
      class="map-info-bar"
      :class="{ collapsed: infoCollapsed || !activeRegion }"
    >
      <div class="aoc-title-row">
        <span class="aoc-info-title">
          <span class="aoc-dot" :style="{ background: activeRegion ? activeRegion.color : '#1565c0' }"></span>
          {{ activeRegion ? activeRegion.name : '德國 13 個葡萄酒產區' }}
        </span>
        <div class="title-buttons" v-if="activeRegion">
          <button class="btn-pronunciation" @click="playPronunciation(activeRegion.name)" title="點擊聽發音">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            </svg>
          </button>
          <button class="btn-collapse-inline" @click.stop="infoCollapsed = !infoCollapsed"
            :title="infoCollapsed ? '展開資訊' : '收合資訊'">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline :points="infoCollapsed ? '18 15 12 9 6 15' : '6 9 12 15 18 9'"></polyline>
            </svg>
            <span class="btn-text">{{ infoCollapsed ? '展開' : '收合' }}</span>
          </button>
          <button class="btn-reset-icon" @click="resetView" title="重置地圖">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 3v6h-6"></path>
              <path d="M20.49 15A9 9 0 1 1 21 9"></path>
            </svg>
          </button>
        </div>
      </div>
      <div v-show="activeRegion && !infoCollapsed" class="info-details">
        <div class="region-info-content">
          <div class="info-header">
            <b>{{ activeRegion?.name }}</b>
            <span class="region-type">{{ activeRegion?.nameDE }}</span>
            <span class="region-hectare"> — {{ activeRegion?.hectares.toLocaleString() }} 公頃</span>
          </div>
          <div class="grape-section">
            <div class="grape-title">主要品種：</div>
            <div class="grape-badges">
              <span v-for="g in activeRegion?.grapes" :key="g" class="grape-badge">{{ g }}</span>
            </div>
          </div>
          <div class="styles-section">
            <div class="grape-title">酒款類型：</div>
            <div class="grape-badges">
              <span v-for="s in activeRegion?.styles" :key="s" class="style-badge-item">{{ s }}</span>
            </div>
          </div>
          <div class="grape-section">
            <div class="grape-title">土壤類型：</div>
            <div class="grape-badges">
              <span v-for="soil in activeRegion?.soils" :key="soil" class="soil-badge">{{ soil }}</span>
            </div>
          </div>
          <div class="description">{{ activeRegion?.description }}</div>
          <div v-if="activeRegion?.villages?.length" class="grape-section">
            <div class="grape-title">重要村莊：</div>
            <div class="grape-badges">
              <span v-for="v in activeRegion.villages" :key="v" class="village-badge">{{ v }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部工具列（波爾多風格，4 個按鈕）-->
    <div v-if="mapReady" class="map-toolbar">
      <button class="tool-btn" :class="{ active: aocDrawerOpen }" @click="toggleTool('aoc')">
        <span class="tool-icon">產</span>
        <span class="tool-label">產區</span>
      </button>
      <button class="tool-btn" :class="{ active: layersPanelOpen }" @click="toggleTool('layers')">
        <span class="tool-icon">層</span>
        <span class="tool-label">圖層</span>
      </button>
      <button class="tool-btn" :class="{ active: is3D }" @click="toggle3D">
        <span class="tool-icon">3D</span>
        <span class="tool-label">{{ is3D ? '2D' : '3D' }}</span>
      </button>
      <button class="tool-btn" :class="{ active: activeRegion && !infoCollapsed }" @click="toggleTool('info')">
        <span class="tool-icon">資</span>
        <span class="tool-label">資訊</span>
      </button>
    </div>

    <!-- 產區抽屜（從下方彈出）-->
    <transition name="mobile-sheet-fade">
      <div v-if="aocDrawerOpen" class="mobile-aoc-backdrop" @click.self="aocDrawerOpen = false">
        <div class="mobile-aoc-drawer">
          <div class="mobile-aoc-handle"></div>
          <div class="mobile-aoc-toolbar-header">
            <h2>13 Anbaugebiete</h2>
          </div>
          <div class="mobile-region-list">
            <div class="list-item all-item" :class="{ active: !selectedId }"
              @click="resetView(); aocDrawerOpen = false">
              <span class="list-dot" style="background:#4f9cf9"></span>
              <span>🗺 全部產區</span>
            </div>
            <div v-for="r in regions" :key="r.id" class="list-item"
              :class="{ active: selectedId === r.id }"
              @click="selectRegion(r); aocDrawerOpen = false">
              <span class="list-dot" :style="{ background: r.color }"></span>
              <span class="list-item-name">{{ r.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- 圖層面板（從下方彈出）-->
    <transition name="mobile-sheet-fade">
      <div v-if="layersPanelOpen" class="mobile-aoc-backdrop" @click.self="layersPanelOpen = false">
        <div class="mobile-aoc-drawer layers-drawer">
          <div class="mobile-aoc-handle"></div>
          <div class="mobile-aoc-toolbar-header">
            <h2>圖層</h2>
          </div>
          <div class="layers-panel-content">
            <div class="layer-group-label">資料圖層</div>
            <div class="layer-btn-row">
              <button class="layer-opt-btn" :class="{ active: vineyardEnabled }" @click="toggleVineyard">
                <span class="lopt-icon">🍇</span>
                <span class="lopt-text">葡萄園</span>
                <span class="lopt-dot" :class="{ on: vineyardEnabled }"></span>
              </button>
              <button class="layer-opt-btn" :class="{ active: contoursEnabled, 'contours-btn': true }" @click="toggleContours">
                <span class="lopt-icon">〰️</span>
                <span class="lopt-text">等高線</span>
                <span class="lopt-dot" :class="{ on: contoursEnabled }"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Loading / Error -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
    <div v-if="mapError" class="map-error">{{ mapError }}</div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { germanyRegions } from '../data/regions.js'

const emit = defineEmits(['back'])
const router = useRouter()

const mapContainer = ref(null)
const mapReady = ref(false)
const isLoading = ref(true)
const mapError = ref(null)
const selectedId = ref(null)
const activeRegion = ref(null)
const infoCollapsed = ref(true)
const aocDrawerOpen = ref(false)
const layersPanelOpen = ref(false)
const is3D = ref(false)
const vineyardEnabled = ref(false)
const contoursEnabled = ref(false)

const regions = germanyRegions
let map = null

const GERMANY_BOUNDS = [[5.86, 47.27], [15.04, 55.06]]

async function fetchGeoJSON(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`)
  return res.json()
}

async function loadAllRegions() {
  const allFeatures = []
  for (const region of regions) {
    const files = Array.isArray(region.regionFile) ? region.regionFile : [region.regionFile]
    for (const file of files) {
      try {
        const gj = await fetchGeoJSON(file)
        const features = (gj.features || []).map(f => ({
          ...f,
          properties: { ...f.properties, regionId: region.id }
        }))
        allFeatures.push(...features)
      } catch (e) {
        console.warn('[GermanyAllRegionsMap] failed to load:', file, e)
      }
    }
  }
  return { type: 'FeatureCollection', features: allFeatures }
}

function buildColorMatch() {
  const expr = ['match', ['get', 'regionId']]
  for (const r of regions) {
    expr.push(r.id, r.color)
  }
  expr.push('#888888')
  return expr
}

async function addRegionLayers(geoJSON) {
  if (!map.getSource('de-regions')) {
    map.addSource('de-regions', {
      type: 'geojson',
      data: geoJSON,
      generateId: true
    })
  }

  if (!map.getLayer('de-region-fill')) {
    map.addLayer({
      id: 'de-region-fill',
      type: 'fill',
      source: 'de-regions',
      paint: {
        'fill-color': buildColorMatch(),
        'fill-opacity': [
          'case',
          ['boolean', ['feature-state', 'hover'], false], 0.15,
          0.10
        ]
      }
    })
  }

  if (!map.getLayer('de-region-line')) {
    map.addLayer({
      id: 'de-region-line',
      type: 'line',
      source: 'de-regions',
      paint: {
        'line-color': buildColorMatch(),
        'line-width': [
          'case',
          ['boolean', ['feature-state', 'hover'], false], 3, 2
        ],
        'line-opacity': 0.9
      }
    })
  }
}

async function initMap() {
  if (!mapContainer.value) return
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    bounds: GERMANY_BOUNDS,
    fitBoundsOptions: { padding: 50 },
    pitch: 0,
    bearing: 0
  })

  map.addControl(new mapboxgl.NavigationControl(), 'top-right')

  map.on('load', async () => {
    try {
      const allGeoJSON = await loadAllRegions()
      await addRegionLayers(allGeoJSON)

      // Hover effect
      let hoveredId = null
      map.on('mousemove', 'de-region-fill', (e) => {
        map.getCanvas().style.cursor = 'pointer'
        if (e.features.length > 0) {
          if (hoveredId !== null) {
            map.setFeatureState({ source: 'de-regions', id: hoveredId }, { hover: false })
          }
          hoveredId = e.features[0].id
          map.setFeatureState({ source: 'de-regions', id: hoveredId }, { hover: true })
        }
      })
      map.on('mouseleave', 'de-region-fill', () => {
        map.getCanvas().style.cursor = ''
        if (hoveredId !== null) {
          map.setFeatureState({ source: 'de-regions', id: hoveredId }, { hover: false })
          hoveredId = null
        }
      })

      // Click to select region
      map.on('click', 'de-region-fill', (e) => {
        if (e.features.length > 0) {
          const rid = e.features[0].properties?.regionId
          if (rid) {
            const region = regions.find(r => r.id === rid)
            if (region) selectRegion(region)
          }
        }
      })

    } catch (e) {
      console.error('[GermanyAllRegionsMap] init error:', e)
    }

    mapReady.value = true
    isLoading.value = false
  })

  map.on('error', (e) => {
    if (e?.sourceId) return
    const msg = e?.error?.message || ''
    if (
      msg.includes('Unlisted TLDs') || msg.includes('401') || msg.includes('403') ||
      msg.toLowerCase().includes('token') || msg.toLowerCase().includes('unauthorized')
    ) {
      console.warn('[GermanyAllRegionsMap] non-fatal warning:', msg)
      return
    }
    console.error('[GermanyAllRegionsMap] fatal error:', e)
    mapError.value = '地圖載入失敗，請重整頁面'
    isLoading.value = false
  })
}

function selectRegion(region) {
  if (!map) return
  selectedId.value = region.id
  activeRegion.value = region
  infoCollapsed.value = false

  map.setFilter('de-region-fill', ['==', ['get', 'regionId'], region.id])
  map.setFilter('de-region-line', ['==', ['get', 'regionId'], region.id])

  map.flyTo({ center: region.center, zoom: region.zoom, duration: 900 })

  if (vineyardEnabled.value) loadVineyardForRegion(region)
}

function resetView() {
  if (!map) return
  selectedId.value = null
  activeRegion.value = null
  infoCollapsed.value = true

  map.setFilter('de-region-fill', null)
  map.setFilter('de-region-line', null)

  // 重置時清空葡萄園圖層
  if (map.getSource('de-vineyards')) {
    map.getSource('de-vineyards').setData({ type: 'FeatureCollection', features: [] })
  }

  map.fitBounds(GERMANY_BOUNDS, { padding: 50, duration: 900 })
}

function toggleTool(type) {
  if (type === 'aoc') {
    layersPanelOpen.value = false
    aocDrawerOpen.value = !aocDrawerOpen.value
  } else if (type === 'layers') {
    aocDrawerOpen.value = false
    layersPanelOpen.value = !layersPanelOpen.value
  } else if (type === 'info') {
    aocDrawerOpen.value = false
    layersPanelOpen.value = false
    if (activeRegion.value) {
      infoCollapsed.value = !infoCollapsed.value
    } else {
      aocDrawerOpen.value = true
    }
  }
}

function toggle3D() {
  if (!map) return
  is3D.value = !is3D.value
  map.easeTo({ pitch: is3D.value ? 45 : 0, duration: 600 })

  if (is3D.value) {
    if (!map.getSource('mapbox-dem')) {
      map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 14
      })
    }
    map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 })
  } else {
    map.setTerrain(null)
  }
}

async function loadVineyardForRegion(region) {
  if (!map || !region) return
  const files = !region.vineyardFile ? []
    : Array.isArray(region.vineyardFile) ? region.vineyardFile : [region.vineyardFile]

  const allFeatures = []
  for (const file of files) {
    try {
      const gj = await fetchGeoJSON(file)
      allFeatures.push(...(gj.features || []))
    } catch (e) {
      console.warn('[GermanyMap] vineyard load failed:', file, e)
    }
  }
  const data = { type: 'FeatureCollection', features: allFeatures }

  if (!map.getSource('de-vineyards')) {
    map.addSource('de-vineyards', { type: 'geojson', data })
  } else {
    map.getSource('de-vineyards').setData(data)
  }

  if (!map.getLayer('de-vineyard-fill')) {
    map.addLayer({
      id: 'de-vineyard-fill',
      type: 'fill',
      source: 'de-vineyards',
      paint: { 'fill-color': region.color, 'fill-opacity': 0.6 }
    }, 'de-region-fill')
  } else {
    map.setLayoutProperty('de-vineyard-fill', 'visibility', 'visible')
    map.setPaintProperty('de-vineyard-fill', 'fill-color', region.color)
  }
}

async function toggleVineyard() {
  if (!map) return
  vineyardEnabled.value = !vineyardEnabled.value

  if (vineyardEnabled.value) {
    if (activeRegion.value) {
      await loadVineyardForRegion(activeRegion.value)
    }
    // 尚未選擇產區時不顯示任何葡萄園
  } else {
    if (map.getLayer('de-vineyard-fill')) {
      map.setLayoutProperty('de-vineyard-fill', 'visibility', 'none')
    }
  }
}

// ── 等高線（德國：緩坡為主，莫塞爾50-300m，minzoom 8早發現）――――――――――――――――――――
let deContoursInit = false
function initDEContourLayers() {
  if (deContoursInit || !map) return
  deContoursInit = true
  if (!map.getSource('mapbox-dem')) {
    map.addSource('mapbox-dem', { type: 'raster-dem', url: 'mapbox://mapbox.mapbox-terrain-dem-v1', tileSize: 512, maxzoom: 14 })
  }
  if (!map.getSource('de-all-contours')) {
    map.addSource('de-all-contours', { type: 'vector', url: 'mapbox://mapbox.mapbox-terrain-v2' })
  }
  if (!map.getLayer('de-all-contours-line')) {
    map.addLayer({
      id: 'de-all-contours-line', type: 'line',
      source: 'de-all-contours', 'source-layer': 'contour',
      layout: { 'line-join': 'round', 'line-cap': 'round', visibility: 'none' },
      paint: {
        'line-color': [
          'case',
          ['==', ['%', ['to-number', ['get', 'ele']], 100], 0], '#FFD700',
          ['==', ['%', ['to-number', ['get', 'ele']], 50],  0], '#FFAA00',
          '#FF7733'
        ],
        'line-width': [
          'case',
          ['==', ['%', ['to-number', ['get', 'ele']], 50], 0],
          ['interpolate', ['linear'], ['zoom'], 8, 0.7, 10, 1.2, 13, 2.0, 16, 2.8],
          ['interpolate', ['linear'], ['zoom'], 8, 0.2, 10, 0.5, 13, 0.9, 16, 1.4]
        ],
        'line-opacity': ['interpolate', ['linear'], ['zoom'], 8, 0.35, 10, 0.55, 13, 0.8, 16, 0.95]
      },
      minzoom: 8,  // 德國緩坡地形，zoom 8起即可看到等高線
    })
  }
  if (!map.getLayer('de-all-contour-labels')) {
    map.addLayer({
      id: 'de-all-contour-labels', type: 'symbol',
      source: 'de-all-contours', 'source-layer': 'contour',
      layout: {
        'symbol-placement': 'line',
        'text-field': ['concat', ['to-string', ['get', 'ele']], 'm'],
        'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
        'text-size': ['interpolate', ['linear'], ['zoom'], 9, 9, 12, 11, 15, 13],
        'text-padding': 20, visibility: 'none',
      },
      paint: {
        'text-color': '#FFD700',
        'text-halo-color': 'rgba(0,0,0,0.85)',
        'text-halo-width': 2,
        'text-opacity': ['interpolate', ['linear'], ['zoom'], 9, 0.5, 11, 0.8, 13, 1]
      },
      filter: ['==', ['%', ['to-number', ['get', 'ele']], 25], 0],  // 每25m新標籤（緩坡地形適用）
      minzoom: 9,
    })
  }
}
function toggleContours() {
  if (!map) return
  contoursEnabled.value = !contoursEnabled.value
  if (contoursEnabled.value) initDEContourLayers()
  const vis = contoursEnabled.value ? 'visible' : 'none'
  if (map.getLayer('de-all-contours-line'))  map.setLayoutProperty('de-all-contours-line',  'visibility', vis)
  if (map.getLayer('de-all-contour-labels')) map.setLayoutProperty('de-all-contour-labels', 'visibility', vis)
}

let currentAudio = null

function playPronunciation(regionName) {
  if (currentAudio) {
    currentAudio.pause()
    currentAudio = null
  }
  const soundName = activeRegion.value?.soundName || regionName
  const audioPath = `/germany/sounds/${soundName}.mp3`
  currentAudio = new Audio(audioPath)
  currentAudio.play().catch(err => {
    console.warn('[GermanyMap] 播放發音失敗:', err)
  })
}

onMounted(() => { initMap() })
onUnmounted(() => { if (map) { map.remove(); map = null } })
</script>

<style scoped>
/* ── 全版面地圖 ── */
.de-map-section {
  position: fixed;
  inset: 0;
  z-index: 10;
}

.map {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* ══ Header ══ */
.map-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
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

.map-hdr-btn {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  background: rgba(21, 101, 192, 0.88);
  color: #fff;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  transition: background 0.2s;
  white-space: nowrap;
}
.map-hdr-btn:hover { background: rgba(25, 118, 210, 0.95); }
.map-hdr-btn.ghost {
  background: rgba(255,255,255,0.78);
  border: 1.5px solid rgba(21,101,192,0.45);
  color: #1565c0;
}
.map-hdr-btn.ghost:hover { background: rgba(255,255,255,0.95); }

.map-header h1 {
  margin: 0;
  font-size: 1.3rem;
  color: #1565c0;
  text-align: center;
  flex: 1;
  text-shadow: 0 1px 4px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.9);
  padding-top: 4px;
  pointer-events: none;
}

/* ══════════════════════════════════════
   底部工具列（波爾多風格，常駐顯示）
══════════════════════════════════════ */
.map-toolbar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 18px);
  z-index: 200;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  padding: 8px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  width: min(90vw, 480px);
  border: 1px solid rgba(0,0,0,0.06);
}

.tool-btn {
  border-radius: 14px;
  background: linear-gradient(180deg, #f0f6ff 0%, #e0ecff 100%);
  color: #1a3a6b;
  min-height: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  font-size: 0.76rem;
  font-weight: 800;
  border: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.15s;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
}
.tool-btn:hover { background: linear-gradient(180deg, #ddeeff 0%, #c8dfff 100%); }
.tool-btn.active {
  background: linear-gradient(180deg, #1565c0 0%, #0d47a1 100%);
  color: #fff;
}

.tool-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(21, 101, 192, 0.10);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}
.tool-btn.active .tool-icon {
  background: rgba(255, 255, 255, 0.18);
}

.tool-label {
  font-size: 0.72rem;
  font-weight: 700;
}

/* ══════════════════════════════════════
   資訊面板（工具列正上方）
══════════════════════════════════════ */
.map-info-bar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  width: min(90vw, 480px);
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(12px);
  padding: 14px 18px;
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.18);
  z-index: 150;
  border: 1px solid rgba(0,0,0,0.06);
  transition: all 0.3s ease;
  max-height: min(50vh, 400px);
  overflow: hidden;
}

/* 收合狀態：無產區時只顯示標題列 */
.map-info-bar.collapsed {
  padding: 10px 16px;
  max-height: 52px;
  overflow: hidden;
}

.map-info-bar.collapsed .aoc-title-row {
  margin-bottom: 0;
}

.aoc-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  gap: 10px;
  transition: margin 0.3s ease;
}

.aoc-info-title {
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;
}

.aoc-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  flex-shrink: 0;
}

.title-buttons {
  display: flex;
  gap: 6px;
  align-items: center;
  flex-shrink: 0;
}

.btn-collapse-inline {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: linear-gradient(135deg, #f5f5f5, #e8e8e8);
  color: #555;
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 600;
  transition: all 0.2s;
}
.btn-collapse-inline:hover {
  background: linear-gradient(135deg, #e8e8e8, #d0d0d0);
  border-color: #1565c0;
  color: #1565c0;
}
.btn-collapse-inline svg { transition: transform 0.3s; flex-shrink: 0; }
.btn-collapse-inline .btn-text { font-size: 0.82rem; white-space: nowrap; }

.btn-reset-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 6px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(180deg, #ff6f61 0%, #ef4f45 100%);
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.16);
  flex-shrink: 0;
}
.btn-reset-icon:hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(0,0,0,0.22); }

.btn-pronunciation {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 6px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(102,126,234,0.35);
  flex-shrink: 0;
}
.btn-pronunciation:hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(102,126,234,0.45); }
.btn-pronunciation:active { transform: scale(0.95); }

.info-details {
  overflow-y: auto;
  max-height: min(38vh, 310px);
  transition: all 0.3s ease;
  padding-right: 2px;
}
.info-details::-webkit-scrollbar { width: 4px; }
.info-details::-webkit-scrollbar-track { background: transparent; }
.info-details::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.14); border-radius: 2px; }

.region-info-content { font-size: 0.95rem; line-height: 1.5; color: #222; }

.info-header { margin-bottom: 8px; font-size: 1rem; }
.info-header b { color: #333; }
.region-type { color: #888; font-size: 0.82rem; margin-left: 4px; }
.region-hectare { color: #1565c0; font-size: 0.82rem; }

.grape-section, .styles-section { margin: 6px 0; }
.grape-title { font-size: 0.87rem; color: #555; margin-bottom: 4px; }
.grape-badges { display: flex; flex-wrap: wrap; gap: 4px; }

.grape-badge    { padding: 2px 8px; border-radius: 10px; font-size: 0.8rem; background: #f3e8ff; color: #7c3aed; }
.style-badge-item { padding: 2px 8px; border-radius: 10px; font-size: 0.8rem; background: #fff3e0; color: #c65100; }
.soil-badge     { padding: 2px 8px; border-radius: 10px; font-size: 0.8rem; background: #fef3c7; color: #92400e; }
.village-badge  { padding: 2px 8px; border-radius: 10px; font-size: 0.8rem; background: #e0f2fe; color: #0369a1; }

.description { margin-top: 8px; font-size: 0.9rem; color: #444; line-height: 1.55; }

/* ══════════════════════════════════════
   產區/圖層 抽屜（從下方彈出）
══════════════════════════════════════ */
.mobile-aoc-backdrop {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(15,23,42,0.34);
  z-index: 300;
  backdrop-filter: blur(4px);
}

.mobile-aoc-drawer {
  position: absolute;
  left: 50%;
  right: auto;
  transform: translateX(-50%);
  top: calc(env(safe-area-inset-top, 0px) + 6px);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 90px);
  width: min(90vw, 480px);
  display: flex;
  flex-direction: column;
  background: #f7f3ee;
  border-radius: 20px 20px 14px 14px;
  box-shadow: 0 -10px 30px rgba(0,0,0,0.24);
  overflow: hidden;
  padding-bottom: 10px;
}

.mobile-aoc-handle {
  width: 52px;
  height: 5px;
  border-radius: 999px;
  background: rgba(21,101,192,0.25);
  margin: 10px auto 8px;
  flex-shrink: 0;
}

.mobile-aoc-toolbar-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px 12px;
  border-bottom: 1px solid rgba(21,101,192,0.14);
  flex-shrink: 0;
}
.mobile-aoc-toolbar-header h2 {
  margin: 0;
  font-size: 1rem;
  color: #1565c0;
  font-weight: 700;
}

.mobile-region-list {
  flex: 1;
  overflow-y: auto;
  padding: 10px 12px;
}
.mobile-region-list::-webkit-scrollbar { width: 4px; }
.mobile-region-list::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 2px; }

.list-item {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 10px;
  margin: 2px 0;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.88rem;
  color: #222;
  transition: background 0.15s;
}
.list-item:hover { background: rgba(21,101,192,0.07); }
.list-item.active {
  background: rgba(21,101,192,0.12);
  font-weight: 600;
  color: #1565c0;
}
.list-item.all-item { font-weight: 700; }

.list-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.list-item-name { flex: 1; }
.list-item-ha { font-size: 0.68rem; color: #999; white-space: nowrap; }

/* ══ 圖層抽屜專屬 ══ */
.layers-drawer .layers-panel-content {
  flex: 1;
  overflow-y: auto;
  padding: 14px 16px;
}

.layer-group-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #999;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.layer-btn-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.layer-opt-btn {
  flex: 1;
  min-width: 100px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border: 1.5px solid rgba(0,0,0,0.1);
  border-radius: 12px;
  background: rgba(0,0,0,0.03);
  color: #444;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.18s;
}
.layer-opt-btn:hover { background: rgba(21,101,192,0.07); border-color: rgba(21,101,192,0.3); }
.layer-opt-btn.active {
  background: #e8f0fe;
  border-color: #1565c0;
  color: #1565c0;
}
.layer-opt-btn.contours-btn.active {
  background: #f3e5f5;
  border-color: #9C27B0;
  color: #6a1b9a;
}
.layer-opt-btn.contours-btn.active .lopt-dot { background: #9C27B0; }

.lopt-icon { font-size: 1.1rem; }
.lopt-text { flex: 1; }
.lopt-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #ddd;
  transition: background 0.2s;
}
.lopt-dot.on { background: #1565c0; }

/* ══ 動畫 ══ */
.mobile-sheet-fade-enter-active, .mobile-sheet-fade-leave-active { transition: opacity 0.24s ease; }
.mobile-sheet-fade-enter-from, .mobile-sheet-fade-leave-to { opacity: 0; }

/* ══ Loading / Error ══ */
.loading-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10,20,40,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 30;
}
.loading-spinner {
  width: 40px; height: 40px;
  border: 3px solid rgba(255,255,255,0.2);
  border-top-color: #4f9cf9;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.map-error {
  position: absolute;
  bottom: 110px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(200,30,30,0.92);
  color: white;
  padding: 10px 24px;
  border-radius: 10px;
  z-index: 30;
  font-weight: 600;
  font-size: 0.9rem;
}

/* ══ 手機尺寸微調 ══ */
@media (max-width: 480px) {
  .map-toolbar { width: min(96vw, 380px); gap: 5px; padding: 6px; }
  .tool-btn { min-height: 48px; }
  .map-info-bar { width: min(96vw, 380px); }
  .mobile-aoc-drawer { width: 100%; left: 0; transform: none; border-radius: 18px 18px 0 0; }
  .map-header h1 { font-size: 1rem; }
}
</style>
