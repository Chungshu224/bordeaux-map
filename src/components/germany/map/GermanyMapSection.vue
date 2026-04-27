<template>
  <section class="germany-map-section">

    <!-- 全螢幕地圖 -->
    <div ref="mapContainer" class="map"></div>

    <!-- Header -->
    <RegionMapHeader
      :regionName="region.name"
      :title="`${region.icon} ${region.name} 葡萄酒產區地圖`"
      icon="🇩🇪"
      @back="emit('back')"
    />

    <!-- 資訊卡 -->
    <RegionMapInfoPanel
      :info="unifiedInfo"
      :theme-color="region.color || '#2d5016'"
      :audio-available="true"
      :is-playing-audio="isPlayingAudio"
      :collapsed="infoCollapsed"
      @toggle-collapse="infoCollapsed = !infoCollapsed"
      @play-audio="playPronunciation"
      @reset="resetMap"
    />

    <!-- 圖層面板 -->
    <div v-if="showLayerPanel" class="layer-panel-wrapper">
      <RegionMapLayerPanel
        :is3D="is3D"
        :show-contours="showContours"
        :climate-enabled="climateEnabled"
        :soil-disabled="false"
        :soil-label="'BGR 土壤'"
        :soil-enabled="showGeology"
        @toggle-3d="toggle3D"
        @toggle-contours="toggleContours"
        @toggle-climate="toggleClimate"
        @toggle-soil="toggleGeology"
        @close="showLayerPanel = false"
      />
    </div>

    <transition name="climate-slide">
      <div v-if="climateEnabled && climateData" class="climate-overlay">
        <div class="cy-indicator-tabs">
          <button v-for="ind in CLIMATE_INDICATORS" :key="ind.id"
            :class="['cy-ind-btn', { active: climateIndicator === ind.id }]"
            @click="setClimateIndicator(ind.id)">
            {{ ind.icon }} {{ ind.label }}
          </button>
        </div>
        <div class="climate-header-row">
          <div class="cy-year-badge">
            <span class="cy-year">{{ climateYear }}</span>
            <span v-if="isGoldenVintage" class="cy-golden">🏆 黃金年份</span>
          </div>
          <div class="cy-stats">
            <div v-if="climateCurrentAocLabel" class="cy-aoc-name">{{ climateCurrentAocLabel }}</div>
            <span v-if="currentYearValue !== null" class="cy-temp">{{ currentYearValue }}{{ currentIndicatorConfig.unit }}</span>
            <span v-if="currentYearDelta !== null" class="cy-delta" :class="currentYearDeltaPositive ? 'cy-warm' : 'cy-cool'">
              {{ currentYearDeltaPositive ? '+' : '' }}{{ currentYearDelta }}{{ currentIndicatorConfig.unit }} vs 基準
            </span>
          </div>
          <button class="cy-close" @click="toggleClimate" title="關閉氣候圖層">✕</button>
        </div>
        <input class="climate-slider" v-model.number="climateYear" type="range"
          :min="climateYears[0]" :max="climateYears[climateYears.length - 1]" step="1"
          @input="onClimateYearChange" />
        <div class="climate-year-axis">
          <span>{{ climateYears[0] }}</span>
          <span>{{ climateYears[Math.floor(climateYears.length / 2)] }}</span>
          <span>{{ climateYears[climateYears.length - 1] }}</span>
        </div>
        <div class="climate-legend">
          <div :class="['legend-gradient', `legend-${climateIndicator}`]"></div>
          <div class="legend-labels">
            <span>{{ currentGlobalStats ? currentGlobalStats.min.toFixed(0) : '' }}{{ currentIndicatorConfig.unit }} {{ currentIndicatorConfig.lowLabel }}</span>
            <span>均值</span>
            <span>{{ currentIndicatorConfig.highLabel }} {{ currentGlobalStats ? currentGlobalStats.max.toFixed(0) : '' }}{{ currentIndicatorConfig.unit }}</span>
          </div>
        </div>
        <div class="climate-footnote">📊 {{ currentIndicatorConfig.footnote }}</div>
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

    <!-- BGR 土壤圖浮動面板（右側） -->
    <div v-if="showGeology" class="de-soil-float-panel">
      <div class="de-soil-title">🌱 BGR BUEK200 土壤圖 1:200,000</div>
      <div class="de-soil-row">
        <span class="de-soil-label">透明度</span>
        <input class="de-soil-slider" type="range" min="0.1" max="1.0" step="0.05"
          v-model.number="soilOpacity">
        <span class="de-soil-pct">{{ Math.round(soilOpacity * 100) }}%</span>
      </div>
      <div class="de-soil-hint">© BGR Bodenübersichtskarte 1:200,000 (CC-BY 4.0)</div>
    </div>

    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
    <div v-if="mapError" class="map-error">{{ mapError }}</div>

  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import * as turf from '@turf/turf'
import 'mapbox-gl/dist/mapbox-gl.css'
import {
  RegionMapHeader, RegionMapLayerPanel, RegionMapInfoPanel,
  RegionMapAppellationDrawer, RegionMapMobileToolbar
} from '../../shared/regionMap/index.js'

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
const infoCollapsed = ref(true)
const showLayerPanel = ref(false)
const selectedVineyard = ref(null)
const showGeology = ref(false)
const isGeologyLoading = ref(false)
const geologyError = ref(null)
const soilOpacity = ref(0.8)

// BGR BUEK200 土壤圖 WMS — 開發環境透過 Vite proxy 轉發（解決 localhost CORS）
const BGR_LAYERS = Array.from({ length: 55 }, (_, i) => i).join(',')
const BGR_WMS_TILE =
  '/bgr/wms/boden/buek200/' +
  '?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap' +
  `&LAYERS=${BGR_LAYERS}&STYLES=` +
  '&FORMAT=image%2Fpng&TRANSPARENT=TRUE' +
  '&CRS=EPSG%3A3857&WIDTH=256&HEIGHT=256' +
  '&BBOX={bbox-epsg-3857}'

let map = null
let regionBounds = null
let regionBoundaryGeoJSON = null  // 供土壤圖 clip mask 使用

// ── Climate state ──────────────────────────────────────────────────────────
const climateEnabled   = ref(false)
const climateYear      = ref(2003)
const climateData      = ref(null)
const climateStats     = ref(null)
const climateStatsSun  = ref(null)
const climateStatsRain = ref(null)
const climateYears     = ref([])
const climateYearAvg   = ref([])
const climateYearSun   = ref([])
const climateYearRain  = ref([])
const climateIndicator = ref('temp')

const CLIMATE_INDICATORS = [
  { id: 'temp', icon: '🌡', label: '夏季均溫', unit: '°C', lowLabel: '涼', highLabel: '熱',
    footnote: '指標：6–8 月日均溫平均值 | 基準：1981–2010', dataKey: 'temps', baselineKey: 'baseline' },
  { id: 'sun',  icon: '☀️', label: '日照時數',  unit: 'h',  lowLabel: '少', highLabel: '多',
    footnote: '指標：6–8 月日照時數總和（小時）| 基準：1981–2010', dataKey: 'sun', baselineKey: 'baselineSun' },
  { id: 'rain', icon: '🌧', label: '夏季降雨', unit: 'mm', lowLabel: '乾', highLabel: '濕',
    footnote: '指標：6–8 月降雨量總和（毫米）| 基準：1981–2010', dataKey: 'rain', baselineKey: 'baselineRain' },
]
const GOLDEN_VINTAGES_DE = new Set([1971, 1976, 1990, 2003, 2007, 2009, 2011, 2015, 2018])

const DE_REGIONS = [
  'Mosel', 'Rheingau', 'Rheinhessen', 'Pfalz', 'Baden',
  'Württemberg', 'Ahr', 'Nahe', 'Mittelrhein', 'Franken',
  'Hessische Bergstrasse', 'Saale-Unstrut', 'Sachsen',
]

// ── Climate computed ──────────────────────────────────────────────────────
const currentIndicatorConfig = computed(() => CLIMATE_INDICATORS.find(i => i.id === climateIndicator.value))
const currentGlobalStats = computed(() => {
  if (climateIndicator.value === 'sun') return climateStatsSun.value
  if (climateIndicator.value === 'rain') return climateStatsRain.value
  return climateStats.value
})
const isGoldenVintage = computed(() => GOLDEN_VINTAGES_DE.has(climateYear.value))
const climateCurrentAocLabel = computed(() => props.region.name || '')
const currentYearValue = computed(() => {
  if (!climateData.value || !climateYears.value.length) return null
  const idx = climateYears.value.indexOf(climateYear.value)
  if (idx < 0) return null
  const cfg = currentIndicatorConfig.value
  const arr = climateData.value[props.region.name]?.[cfg.dataKey]
  if (!Array.isArray(arr) || idx >= arr.length) return null
  return Number(arr[idx]).toFixed(cfg.id === 'rain' ? 0 : 1)
})
const currentYearDelta = computed(() => {
  if (!climateData.value || currentYearValue.value === null) return null
  const cfg = currentIndicatorConfig.value
  const aoc = climateData.value[props.region.name]
  if (!aoc) return null
  const baseline = aoc[cfg.baselineKey]
  if (baseline == null) return null
  return (Number(currentYearValue.value) - Number(baseline)).toFixed(cfg.id === 'rain' ? 0 : 1)
})
const currentYearDeltaPositive = computed(() => (Number(currentYearDelta.value) || 0) > 0)

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
    regionBoundaryGeoJSON = await mergeGeoJSONFiles(regionFiles)
    const bbox = calcBbox(regionBoundaryGeoJSON)
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
    if (regionBoundaryGeoJSON) {
      map.addSource('region-boundary', { type: 'geojson', data: regionBoundaryGeoJSON })
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
      if (e.sourceId === 'bgr-soil-wms' && showGeology.value) {
        geologyError.value = '土壤圖資料載入失敗，請稍後再試'
        showGeology.value = false
        if (map.getLayer('de-soil-clip-overlay')) map.removeLayer('de-soil-clip-overlay')
        if (map.getSource('de-soil-clip-src')) map.removeSource('de-soil-clip-src')
        if (map.getLayer('bgr-soil-layer')) map.removeLayer('bgr-soil-layer')
        if (map.getSource('bgr-soil-wms')) map.removeSource('bgr-soil-wms')
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
          // Fit map to this vineyard parcel
          const b = calcBbox({ features: [feat] })
          if (b[0] !== Infinity) {
            map.fitBounds([[b[0], b[1]], [b[2], b[3]]], { padding: 80, maxZoom: 14, duration: 700 })
          }
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
      console.warn('[GermanyMapSection] 土壤圖層載入失敗:', e)
      geologyError.value = '土壤圖服務目前無法連線，請稍後再試'
      showGeology.value = false
    } finally {
      isGeologyLoading.value = false
    }
  } else {
    // 移除土壤圖層、clip 遮罩
    if (map.getLayer('de-soil-clip-overlay')) map.removeLayer('de-soil-clip-overlay')
    if (map.getSource('de-soil-clip-src')) map.removeSource('de-soil-clip-src')
    if (map.getLayer('bgr-soil-layer')) map.removeLayer('bgr-soil-layer')
    if (map.getSource('bgr-soil-wms')) map.removeSource('bgr-soil-wms')
  }
}

// 建立 BGR BUEK200 土壤圖層 + turf.mask clip（僅顯示產區內）
function addGeologyLayer() {
  if (!map) return

  // 移除舊層
  if (map.getLayer('de-soil-clip-overlay')) map.removeLayer('de-soil-clip-overlay')
  if (map.getSource('de-soil-clip-src')) map.removeSource('de-soil-clip-src')
  if (map.getLayer('bgr-soil-layer')) map.removeLayer('bgr-soil-layer')
  if (map.getSource('bgr-soil-wms')) map.removeSource('bgr-soil-wms')

  // BGR BUEK200 WMS raster source（透過 /bgr proxy 解決 CORS）
  map.addSource('bgr-soil-wms', {
    type: 'raster',
    tiles: [BGR_WMS_TILE],
    tileSize: 256,
    minzoom: 4,
    maxzoom: 14,
    attribution: '© BGR Bodenübersichtskarte 1:200,000 (CC-BY 4.0)'
  })

  // 土壤圖層插入 region-fill 之下，保持產區輪廓在最上層
  const insertBefore = map.getLayer('region-fill') ? 'region-fill' : undefined
  map.addLayer({
    id: 'bgr-soil-layer',
    type: 'raster',
    source: 'bgr-soil-wms',
    paint: { 'raster-opacity': soilOpacity.value }
  }, insertBefore)

  // turf.mask clip — 遮罩產區外的土壤圖
  if (regionBoundaryGeoJSON) {
    try {
      const maskData = turf.mask(regionBoundaryGeoJSON)
      map.addSource('de-soil-clip-src', { type: 'geojson', data: maskData })
      map.addLayer({
        id: 'de-soil-clip-overlay',
        type: 'fill',
        source: 'de-soil-clip-src',
        paint: { 'fill-color': '#060a10', 'fill-opacity': 0.72 }
      })
    } catch (e) {
      console.warn('[GermanyMapSection] clip mask failed:', e)
    }
  }
}

watch(soilOpacity, (val) => {
  if (map && map.getLayer('bgr-soil-layer')) {
    map.setPaintProperty('bgr-soil-layer', 'raster-opacity', val)
  }
})

// ── 播放發音 ─────────────────────────────────────────────────────────────
const isPlayingAudio = ref(false)
let currentAudio = null
function playPronunciation() {
  if (!props.region?.name) return
  if (currentAudio) { currentAudio.pause(); currentAudio = null }
  const audioPath = `/germany/sounds/${encodeURIComponent(props.region.name)}.mp3`
  currentAudio = new Audio(audioPath)
  isPlayingAudio.value = true
  currentAudio.play().catch(() => { isPlayingAudio.value = false })
  currentAudio.onended = () => { isPlayingAudio.value = false; currentAudio = null }
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

// ── Climate functions ──────────────────────────────────────────────────────
function valueToClimateColor(v, indicator) {
  let stats, stops
  if (indicator === 'sun') {
    stats = climateStatsSun.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [[min,[120,81,169]],[mean,[171,217,233]],[mean+20,[254,224,72]],[max,[253,141,60]]]
  } else if (indicator === 'rain') {
    stats = climateStatsRain.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [[min,[253,141,60]],[mean,[255,255,191]],[mean+15,[74,144,226]],[max,[44,62,160]]]
  } else {
    stats = climateStats.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [[min,[69,117,180]],[mean-1,[171,217,233]],[mean,[255,255,191]],[mean+1.5,[252,141,89]],[max,[215,48,39]]]
  }
  const { min, max } = stats
  const t = Math.max(min, Math.min(max, v))
  for (let i = 0; i < stops.length - 1; i++) {
    const [t0,c0] = stops[i]; const [t1,c1] = stops[i+1]
    if (t <= t1) {
      const f = (t-t0)/Math.max(t1-t0,0.0001)
      return `rgb(${Math.round(c0[0]+f*(c1[0]-c0[0]))},${Math.round(c0[1]+f*(c1[1]-c0[1]))},${Math.round(c0[2]+f*(c1[2]-c0[2]))})`
    }
  }
  const last = stops[stops.length-1][1]
  return `rgb(${last[0]},${last[1]},${last[2]})`
}

function createDemoClimatePayload(names) {
  const years = Array.from({ length: 25 }, (_, i) => 2000 + i)
  const aocs = {}
  const ySums=[],ySunSums=[],yRainSums=[],yCounts=[],allT=[],allS=[],allR=[]
  years.forEach(()=>{ ySums.push(0);ySunSums.push(0);yRainSums.push(0);yCounts.push(0) })
  for (const name of names) {
    let seed = 0; for (const ch of name) seed += ch.charCodeAt(0)
    const base = 17.5 + (seed % 60) * 0.05
    const amp = 0.4 + (seed % 10) * 0.03
    const trend = 0.018 + (seed % 3) * 0.004
    const sunBase = 680 + (seed % 100)
    const rainBase = 130 + (seed % 80)
    const temps = years.map((y,i) => {
      const v = Number((base + Math.sin((i+seed%7)*0.55)*amp + (y-2000)*trend).toFixed(2))
      allT.push(v); ySums[i]+=v; yCounts[i]+=1; return v
    })
    const sun = years.map((_,i) => {
      const v = Number((sunBase + Math.sin((i+seed%5)*0.5)*40).toFixed(1))
      allS.push(v); ySunSums[i]+=v; return v
    })
    const rain = years.map((_,i) => {
      const v = Number((rainBase + Math.cos((i+seed%6)*0.52)*28).toFixed(1))
      allR.push(v); yRainSums[i]+=v; return v
    })
    aocs[name] = {
      temps, sun, rain,
      baseline: Number((temps.reduce((s,v)=>s+v,0)/temps.length).toFixed(2)),
      baselineSun: Number((sun.reduce((s,v)=>s+v,0)/sun.length).toFixed(1)),
      baselineRain: Number((rain.reduce((s,v)=>s+v,0)/rain.length).toFixed(1))
    }
  }
  const gMin=v=>Math.min(...v), gMax=v=>Math.max(...v), gMean=v=>v.reduce((s,x)=>s+x,0)/v.length
  return {
    aocs,
    global: { min:Number(gMin(allT).toFixed(2)), max:Number(gMax(allT).toFixed(2)), mean:Number(gMean(allT).toFixed(2)) },
    globalSun: { min:Number(gMin(allS).toFixed(1)), max:Number(gMax(allS).toFixed(1)), mean:Number(gMean(allS).toFixed(1)) },
    globalRain: { min:Number(gMin(allR).toFixed(1)), max:Number(gMax(allR).toFixed(1)), mean:Number(gMean(allR).toFixed(1)) },
    meta: { years, yearAvg: years.map((_,i)=>Number((ySums[i]/Math.max(yCounts[i],1)).toFixed(2))),
      yearSunAvg: years.map((_,i)=>Number((ySunSums[i]/Math.max(yCounts[i],1)).toFixed(1))),
      yearRainAvg: years.map((_,i)=>Number((yRainSums[i]/Math.max(yCounts[i],1)).toFixed(1))), generated:true }
  }
}

async function loadClimateData() {
  if (climateData.value && climateYears.value.length) return
  const apply = (payload) => {
    climateData.value = payload.aocs || {}
    climateStats.value = payload.global || null
    climateStatsSun.value = payload.globalSun || null
    climateStatsRain.value = payload.globalRain || null
    climateYears.value = payload.meta?.years || []
    climateYearAvg.value = payload.meta?.yearAvg || []
    climateYearSun.value = payload.meta?.yearSunAvg || []
    climateYearRain.value = payload.meta?.yearRainAvg || []
    if (climateYears.value.length)
      climateYear.value = climateYears.value.includes(2003) ? 2003 : climateYears.value[0]
  }
  try {
    const res = await fetch('/data/germany-climate.json')
    if (res.ok) { apply(await res.json()); return }
  } catch (_) {}
  apply(createDemoClimatePayload(DE_REGIONS))
}

function applyClimateColor(year) {
  if (!map || !climateEnabled.value || !climateData.value || !climateYears.value.length) return
  const idx = climateYears.value.indexOf(year)
  if (idx < 0) return
  const cfg = currentIndicatorConfig.value
  const arr = climateData.value[props.region.name]?.[cfg.dataKey]
  const value = Array.isArray(arr) && idx < arr.length ? Number(arr[idx]) : null
  const color = Number.isFinite(value) ? valueToClimateColor(value, cfg.id) : '#f0f0f0'
  const opacity = Number.isFinite(value) ? 0.5 : 0.15
  if (map.getLayer('region-fill')) {
    map.setPaintProperty('region-fill', 'fill-color', color)
    map.setPaintProperty('region-fill', 'fill-opacity', opacity)
  }
}

function setClimateIndicator(id) { climateIndicator.value = id; applyClimateColor(climateYear.value) }
function onClimateYearChange() { applyClimateColor(climateYear.value) }

async function toggleClimate() {
  if (!map) return
  if (!climateEnabled.value) {
    try {
      await loadClimateData()
      climateEnabled.value = true
      applyClimateColor(climateYear.value)
      mapError.value = null
    } catch (err) {
      mapError.value = `氣候資料載入失敗: ${err.message}`
      climateEnabled.value = false
    }
    return
  }
  climateEnabled.value = false
  if (map && map.getLayer('region-fill')) {
    map.setPaintProperty('region-fill', 'fill-color', props.region.color)
    map.setPaintProperty('region-fill', 'fill-opacity', 0.08)
  }
}

// ── Watch region change ──
watch(() => props.region, async () => {
  selectedVineyard.value = null
  regionBounds = null
  const wasGeologyOn = showGeology.value
  showGeology.value = false
  geologyError.value = null
  // Reset climate when region changes
  climateEnabled.value = false
  climateData.value = null
  climateYears.value = []

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

// ── 統一 adapters ────────────────────────────────────────────────
const unifiedInfo = computed(() => {
  const r = props.region
  if (!r) return null
  const name = selectedVineyard.value ? selectedVineyard.value : r.name
  const meta = []
  if (r.hectares) meta.push({ label: '面積', value: `${r.hectares.toLocaleString()} 公頃` })
  if (r.climate) meta.push({ label: '氣候', value: r.climate })
  return {
    name,
    meta,
    grapes: r.grapes || [],
    styles: r.styles || [],
    description: selectedVineyard.value
      ? `所屬產區：${r.nameDE || r.name}`
      : (r.description || ''),
    estates: [],
  }
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
  bottom: calc(env(safe-area-inset-bottom, 0px) + 102px);
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
.btn-pronunciation-icon {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px;
  border: none; border-radius: 10px;
  background: linear-gradient(180deg, #764ba2 0%, #667eea 100%);
  color: #fff; cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.16);
  transition: all 0.2s; flex-shrink: 0;
}
.btn-pronunciation-icon:disabled { opacity: 0.6; cursor: not-allowed; }
.btn-pronunciation-icon:not(:disabled):hover { transform: translateY(-1px); }
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
  position: fixed;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  right: 16px;
  z-index: 20;
  background: rgba(252,248,244,0.98);
  border-radius: 16px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.18);
  padding: 1rem;
  min-width: 230px;
  max-height: 60vh;
  overflow-y: auto;
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
  bottom: calc(env(safe-area-inset-bottom, 0px) + 24px);
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

/* ── Climate Overlay ─────────────────────────────────────────────── */
.climate-overlay {
  position: fixed;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  left: 20px;
  width: min(380px, calc(100vw - 44px));
  background: rgba(20, 30, 48, 0.93);
  backdrop-filter: blur(16px);
  border-radius: 16px;
  box-shadow: 0 6px 28px rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.12);
  z-index: 1002;
  padding: 14px 16px 12px;
  color: #e8eaf6;
}
.cy-indicator-tabs { display: flex; gap: 6px; margin-bottom: 10px; }
.cy-ind-btn {
  flex: 1; font-size: 0.72rem; padding: 5px 4px; border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.07);
  color: rgba(230,230,255,0.7); cursor: pointer; transition: background 0.2s, color 0.2s; text-align: center;
}
.cy-ind-btn.active { background: #4575b4; border-color: #6699cc; color: #fff; font-weight: 700; }
.cy-ind-btn:not(.active):hover { background: rgba(255,255,255,0.14); color: #fff; }
.climate-header-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.cy-year-badge { display: flex; align-items: baseline; gap: 6px; }
.cy-year { font-size: 1.5rem; font-weight: 700; color: #aed6f1; line-height: 1; }
.cy-golden { font-size: 0.7rem; color: #f39c12; font-weight: 600; white-space: nowrap; }
.cy-stats { flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: flex-end; }
.cy-aoc-name { font-size: 0.72rem; color: rgba(200,220,255,0.85); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 170px; }
.cy-temp { font-size: 1.02rem; font-weight: 700; color: #f8fbff; }
.cy-delta { font-size: 0.72rem; font-weight: 600; padding: 1px 6px; border-radius: 999px; margin-top: 2px; }
.cy-warm { background: rgba(215,48,39,0.22); color: #ffc2bb; }
.cy-cool { background: rgba(69,117,180,0.28); color: #b8d7ff; }
.cy-close {
  width: 26px; height: 26px; border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.6); cursor: pointer; font-size: 0.8rem;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.2s; flex-shrink: 0;
}
.cy-close:hover { background: rgba(255,255,255,0.2); color: #fff; }
.climate-slider { width: 100%; height: 4px; border-radius: 2px; accent-color: #4575b4; cursor: pointer; margin-bottom: 2px; }
.climate-year-axis { display: flex; justify-content: space-between; font-size: 0.65rem; color: rgba(200,210,255,0.55); margin-bottom: 10px; padding: 0 2px; }
.climate-legend { margin-bottom: 6px; }
.legend-gradient { height: 8px; border-radius: 4px; width: 100%; }
.legend-gradient.legend-temp { background: linear-gradient(to right, #4575b4, #ffffbf, #d73027); }
.legend-gradient.legend-sun  { background: linear-gradient(to right, #7851a9, #ffffbf, #fd8d3c); }
.legend-gradient.legend-rain { background: linear-gradient(to right, #fd8d3c, #ffffbf, #2c3ea0); }
.legend-labels { display: flex; justify-content: space-between; font-size: 0.63rem; color: rgba(200,210,255,0.6); margin-top: 3px; }
.climate-footnote { font-size: 0.63rem; color: rgba(180,200,255,0.5); margin-top: 4px; line-height: 1.4; }
.climate-slide-enter-active, .climate-slide-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.climate-slide-enter-from, .climate-slide-leave-to { opacity: 0; transform: translateY(12px); }
@media (max-width: 768px) { .climate-overlay { left: 8px; width: calc(100vw - 16px); } }

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
/* 統一圖層面板包裝 */
.layer-panel-wrapper {
  position: fixed;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 46;
}

/* BGR 土壤圖浮動面板（右側）*/
.de-soil-float-panel {
  position: fixed;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  right: 20px;
  z-index: 45;
  background: rgba(15, 20, 30, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 12px 16px;
  min-width: 240px;
  color: #e8e8e8;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
}
.de-soil-title {
  font-size: 0.78rem;
  font-weight: 600;
  color: #a8d8a8;
  margin-bottom: 8px;
  letter-spacing: 0.02em;
}
.de-soil-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}
.de-soil-label {
  font-size: 0.72rem;
  color: #aaa;
  white-space: nowrap;
}
.de-soil-slider {
  flex: 1;
  accent-color: #4caf50;
  height: 4px;
  cursor: pointer;
}
.de-soil-pct {
  font-size: 0.72rem;
  color: #ccc;
  min-width: 32px;
  text-align: right;
}
.de-soil-hint {
  font-size: 0.65rem;
  color: #777;
  margin-top: 4px;
}
</style>
