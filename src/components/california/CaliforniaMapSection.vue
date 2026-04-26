<template>
  <section class="california-map-section">

    <!-- 全螢幕地圖 -->
    <div ref="mapContainer" class="map"></div>

    <!-- 載入中 -->
    <div v-if="isLoading" class="map-loading">
      <div class="loading-spinner"></div>
      <p>載入加州 AVA 產區地圖…</p>
    </div>
    <div v-if="mapError" class="map-error">⚠️ {{ mapError }}</div>

    <!-- ── 統一頂部導覽列 ── -->
    <RegionMapHeader
      region-name="加州"
      title="加州 AVA 葡萄酒產區地圖"
      icon="🍷"
      @back="emit('back')"
    />

    <!-- ── 統一資訊側欄 ── -->
    <RegionMapInfoPanel
      v-if="activeRegion"
      :info="unifiedInfo"
      :theme-color="activeRegion ? groupColor(activeRegion.group) : '#c0392b'"
      :audio-available="true"
      :is-playing-audio="isPlayingAudio"
      :collapsed="infoCollapsed"
      @toggle-collapse="infoCollapsed = !infoCollapsed"
      @play-audio="playPronunciation"
      @reset="resetView"
    >
      <template v-if="activeRegion?.contains" #extra-content>
        <div class="rmap-section">
          <div class="rmap-section-title">🗂 包含子產區</div>
          <div class="sub-ava-list">
            <span
              v-for="sub in activeRegion.contains.split('|').map(s => s.trim()).filter(Boolean)"
              :key="sub"
              class="sub-ava-tag"
            >{{ sub }}</span>
          </div>
        </div>
      </template>
    </RegionMapInfoPanel>

    <!-- ── 統一產區清單抽屜 ── -->
    <RegionMapAppellationDrawer
      :open="drawerOpen"
      region-name="加州"
      :grouped="groupedDrawerUnified"
      :search="drawerSearch"
      :active-id="activeRegion?.id || ''"
      @update:open="drawerOpen = $event"
      @update:search="drawerSearch = $event"
      @select="selectById"
    />

    <!-- 氣候熱力圖控制列 -->
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

    <!-- ── 統一圖層面板 ── -->
    <transition name="layers-sheet-fade">
      <div v-if="layersOpen" class="layer-panel-wrapper">
        <RegionMapLayerPanel
          :is3D="is3D"
          :show-contours="contoursEnabled"
          :climate-enabled="climateEnabled"
          :soil-disabled="true"
          @toggle-3d="toggle3D"
          @toggle-contours="toggleContours"
          @toggle-climate="toggleClimate"
          @close="layersOpen = false"
        />
      </div>
    </transition>

    <!-- ── 統一工具列 ── -->
    <RegionMapMobileToolbar
      v-if="mapReady"
      :aoc-open="drawerOpen"
      :layer-open="layersOpen"
      :is3D="is3D"
      :info-open="!!activeRegion && !infoCollapsed"
      @action="handleMobileAction"
    />

  </section>
</template>


<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import {
  RegionMapHeader, RegionMapLayerPanel, RegionMapInfoPanel,
  RegionMapAppellationDrawer, RegionMapMobileToolbar
} from '../shared/regionMap/index.js'

const props  = defineProps({
  selectedGroup: { type: Object, default: null },
})
const emit   = defineEmits(['back'])
const router = useRouter()

// ── Unit conversion helpers ──────────────────────────────────────────────
function acresToHectares(acres) {
  return Math.round(acres * 0.404686).toLocaleString()
}
function feetToMeters(elevation) {
  return String(elevation).split('–').map(v => Math.round(Number(v) * 0.3048)).join('–')
}

// ── State ──────────────────────────────────────────────────────────────────
const mapContainer  = ref(null)
const mapReady      = ref(false)
const isLoading     = ref(true)
const mapError      = ref(null)
const is3D             = ref(false)
const infoCollapsed    = ref(true)
const contoursEnabled  = ref(false)
const drawerOpen    = ref(false)
const layersOpen    = ref(false)
const activeRegion  = ref(null)
const allRegions    = ref([])

// ── Climate state ──────────────────────────────────────────────────────────
const climateEnabled   = ref(false)
const climateYear      = ref(2002)
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
const GOLDEN_VINTAGES_CA = new Set([1974, 1985, 1991, 1994, 1997, 2001, 2002, 2007, 2012, 2013])

// ── Climate computed ──────────────────────────────────────────────────────
const currentIndicatorConfig = computed(() => CLIMATE_INDICATORS.find(i => i.id === climateIndicator.value))
const currentGlobalStats = computed(() => {
  if (climateIndicator.value === 'sun') return climateStatsSun.value
  if (climateIndicator.value === 'rain') return climateStatsRain.value
  return climateStats.value
})
const isGoldenVintage = computed(() => GOLDEN_VINTAGES_CA.has(climateYear.value))
const climateCurrentAocLabel = computed(() => activeRegion.value?.name || '')
const currentYearValue = computed(() => {
  if (!activeRegion.value || !climateData.value || !climateYears.value.length) return null
  const idx = climateYears.value.indexOf(climateYear.value)
  if (idx < 0) return null
  const cfg = currentIndicatorConfig.value
  const arr = climateData.value[activeRegion.value.id]?.[cfg.dataKey]
  if (!Array.isArray(arr) || idx >= arr.length) return null
  return Number(arr[idx]).toFixed(cfg.id === 'rain' ? 0 : 1)
})
const currentYearDelta = computed(() => {
  if (!activeRegion.value || !climateData.value || currentYearValue.value === null) return null
  const cfg = currentIndicatorConfig.value
  const aoc = climateData.value[activeRegion.value.id]
  if (!aoc) return null
  const baseline = aoc[cfg.baselineKey]
  if (baseline == null) return null
  return (Number(currentYearValue.value) - Number(baseline)).toFixed(cfg.id === 'rain' ? 0 : 1)
})
const currentYearDeltaPositive = computed(() => (Number(currentYearDelta.value) || 0) > 0)

let map       = null
let hoveredId = null
const featureGeomMap = {}

const CA_CENTER = [-119.5, 37.2]
const CA_ZOOM   = 5.5

// ── Group definition ───────────────────────────────────────────────────────
const GROUP_LIST = [
  { name: 'Napa Valley',           color: '#7B1A1A' },
  { name: 'Sonoma County',         color: '#C0392B' },
  { name: 'Mendocino & Lake County', color: '#27AE60' },
  { name: 'Central Coast',         color: '#2980B9' },
  { name: 'Central Valley',        color: '#E67E22' },
  { name: 'Sierra Foothills',      color: '#D35400' },
  { name: 'South Coast',           color: '#8E44AD' },
  { name: 'Northern California',   color: '#16A085' },
  { name: 'North Coast',           color: '#2C3E50' },
  { name: 'San Francisco Bay',     color: '#7F8C8D' },
  { name: 'Other',                 color: '#95A5A6' },
]

const GROUP_COLOR_MAP = Object.fromEntries(GROUP_LIST.map(g => [g.name, g.color]))

function groupColor(groupName) {
  return GROUP_COLOR_MAP[groupName] || '#95A5A6'
}

// ── Computed ───────────────────────────────────────────────────────────────
const groupedDrawerList = computed(() => {
  let list = allRegions.value
  // Filter to the pre-selected group (skip if id is null = all regions)
  if (props.selectedGroup?.id) {
    list = list.filter(r => r.group === props.selectedGroup.id)
  }
  list = [...list].sort((a, b) => a.name.localeCompare(b.name))
  const byGroup = {}
  for (const r of list) {
    if (!byGroup[r.group]) byGroup[r.group] = []
    byGroup[r.group].push(r)
  }
  return GROUP_LIST
    .filter(g => byGroup[g.name]?.length)
    .map(g => ({ ...g, items: byGroup[g.name] }))
})

// ── Bbox helper ────────────────────────────────────────────────────────────
function featureBbox(geometry) {
  const coords = []
  const collect = (c) => {
    if (typeof c[0] === 'number') coords.push(c)
    else c.forEach(collect)
  }
  collect(geometry.coordinates)
  const lngs = coords.map(c => c[0])
  const lats = coords.map(c => c[1])
  return [Math.min(...lngs), Math.min(...lats), Math.max(...lngs), Math.max(...lats)]
}

// ── Reset ──────────────────────────────────────────────────────────────────
function clearSelection() {
  activeRegion.value = null
  if (!map) return
  // 回到大區 filter（若有選定大區），否則顯示全部
  const groupFilter = props.selectedGroup?.id
    ? ['==', ['get', 'group'], props.selectedGroup.id]
    : null
  map.setFilter('ava-fill', groupFilter)
  map.setFilter('ava-outline', groupFilter)
  map.setFilter('ava-labels', groupFilter)
  if (map.getSource('ca-avas')) map.removeFeatureState({ source: 'ca-avas' })
}

function resetView() {
  activeRegion.value = null
  if (!map) return
  // 重置：移除所有 filter，回到完整加州視圖
  map.setFilter('ava-fill', null)
  map.setFilter('ava-outline', null)
  map.setFilter('ava-labels', null)
  if (map.getSource('ca-avas')) map.removeFeatureState({ source: 'ca-avas' })
  map.flyTo({ center: CA_CENTER, zoom: CA_ZOOM, pitch: 0, bearing: 0, duration: 800 })
}

// ── Toggle 3D ──────────────────────────────────────────────────────────────
function toggle3D() {
  is3D.value = !is3D.value
  if (!map) return
  map.easeTo({ pitch: is3D.value ? 45 : 0, duration: 600 })
  if (is3D.value) {
    if (!map.getSource('mapbox-dem')) {
      map.addSource('mapbox-dem', { type: 'raster-dem', url: 'mapbox://mapbox.mapbox-terrain-dem-v1', tileSize: 512 })
    }
    map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 })
  } else {
    map.setTerrain(null)
  }
}

// ── 等高線（加州：山地多、最高0-1500m，200m主線/100m次線）―――――――――――――――――――――――――
let contoursInitialized = false
function initContourLayers() {
  if (contoursInitialized || !map) return
  contoursInitialized = true
  if (!map.getSource('mapbox-dem')) {
    map.addSource('mapbox-dem', { type: 'raster-dem', url: 'mapbox://mapbox.mapbox-terrain-dem-v1', tileSize: 512, maxzoom: 14 })
  }
  if (!map.getSource('ca-contours')) {
    map.addSource('ca-contours', { type: 'vector', url: 'mapbox://mapbox.mapbox-terrain-v2' })
  }
  if (!map.getLayer('ca-contours-line')) {
    map.addLayer({
      id: 'ca-contours-line', type: 'line',
      source: 'ca-contours', 'source-layer': 'contour',
      layout: { 'line-join': 'round', 'line-cap': 'round', visibility: 'none' },
      paint: {
        'line-color': [
          'case',
          ['==', ['%', ['to-number', ['get', 'ele']], 200], 0], '#FFD700',
          ['==', ['%', ['to-number', ['get', 'ele']], 100], 0], '#FFAA00',
          '#FF7733'
        ],
        'line-width': [
          'case',
          ['==', ['%', ['to-number', ['get', 'ele']], 100], 0],
          ['interpolate', ['linear'], ['zoom'], 9, 0.9, 11, 1.6, 13, 2.4, 16, 3.2],
          ['interpolate', ['linear'], ['zoom'], 9, 0.3, 11, 0.7, 13, 1.1, 16, 1.6]
        ],
        'line-opacity': ['interpolate', ['linear'], ['zoom'], 9, 0.4, 11, 0.6, 13, 0.85, 16, 0.95]
      },
      minzoom: 9,
    })
  }
  if (!map.getLayer('ca-contour-labels')) {
    map.addLayer({
      id: 'ca-contour-labels', type: 'symbol',
      source: 'ca-contours', 'source-layer': 'contour',
      layout: {
        'symbol-placement': 'line',
        'text-field': ['concat', ['to-string', ['get', 'ele']], 'm'],
        'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
        'text-size': ['interpolate', ['linear'], ['zoom'], 10, 9, 13, 11, 16, 13],
        'text-padding': 25, visibility: 'none',
      },
      paint: {
        'text-color': '#FFD700',
        'text-halo-color': 'rgba(0,0,0,0.8)',
        'text-halo-width': 2,
        'text-opacity': ['interpolate', ['linear'], ['zoom'], 10, 0.5, 12, 0.8, 14, 1]
      },
      filter: ['==', ['%', ['to-number', ['get', 'ele']], 50], 0],  // 每50m新標籤
      minzoom: 10,
    })
  }
}
function toggleContours() {
  if (!map) return
  contoursEnabled.value = !contoursEnabled.value
  if (contoursEnabled.value) initContourLayers()
  const vis = contoursEnabled.value ? 'visible' : 'none'
  if (map.getLayer('ca-contours-line'))  map.setLayoutProperty('ca-contours-line',  'visibility', vis)
  if (map.getLayer('ca-contour-labels')) map.setLayoutProperty('ca-contour-labels', 'visibility', vis)
}

// ── Toggle info panel ─────────────────────────────────────────────────────
function toggleInfo() {
  infoCollapsed.value = !infoCollapsed.value
}

// ── 播放發音 ────────────────────────────────────────────────────────────────
let currentAudio = null
function playPronunciation() {
  if (!activeRegion.value?.name) return
  if (currentAudio) { currentAudio.pause(); currentAudio = null }
  const audioPath = `/california/sounds/${encodeURIComponent(activeRegion.value.name)}.mp3`
  currentAudio = new Audio(audioPath)
  currentAudio.play().catch(() => {})
  currentAudio.onended = () => { currentAudio = null }
}

// ── Select from drawer ─────────────────────────────────────────────────────
function selectFromDrawer(r) {
  activeRegion.value  = r
  infoCollapsed.value = false
  drawerOpen.value    = false
  if (!map) return

  // Isolate this feature
  const f = ['==', ['get', 'ava_id'], r.id]
  map.setFilter('ava-fill', f)
  map.setFilter('ava-outline', f)
  map.setFilter('ava-labels', f)

  const bbox = featureGeomMap[r.id]
  if (bbox) {
    const [w, s, e, n] = bbox
    map.fitBounds([[w, s], [e, n]], { padding: 80, maxZoom: 12, duration: 700 })
  }
}

// ── Map initialization ─────────────────────────────────────────────────────
async function initMap() {
  if (!mapContainer.value) return
  isLoading.value = true
  mapError.value  = null
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

  try {
    const [geoRes, regRes, detailRes] = await Promise.all([
      fetch('/california/california-ava-regions.geojson'),
      fetch('/california/california-regions.json'),
      fetch('/california/california-ava-details.json'),
    ])
    if (!geoRes.ok) throw new Error('無法載入加州 AVA 地理資料')
    const geoJSON = await geoRes.json()
    const detailMap = detailRes.ok ? await detailRes.json() : {}
    const baseRegions = regRes.ok ? await regRes.json() : []
    allRegions.value = baseRegions.map(r => ({ ...r, ...(detailMap[r.id] || {}) }))

    // Cache bounding boxes
    for (const f of geoJSON.features) {
      if (f.geometry && f.properties?.ava_id) {
        try {
          featureGeomMap[f.properties.ava_id] = featureBbox(f.geometry)
        } catch (_) {}
      }
    }

    const initCenter = props.selectedGroup?.center ?? CA_CENTER
    const initZoom   = props.selectedGroup?.zoom   ?? CA_ZOOM

    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: initCenter,
      zoom: initZoom,
      minZoom: 4,
      maxZoom: 16,
    })

    map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), 'top-right')

    map.on('load', () => {
      // Add source
      map.addSource('ca-avas', {
        type: 'geojson',
        data: geoJSON,
        generateId: true,
      })

      // Fill layer (grouped color)
      map.addLayer({
        id: 'ava-fill',
        type: 'fill',
        source: 'ca-avas',
        paint: {
          'fill-color': [
            'match', ['get', 'group'],
            'Napa Valley',             '#7B1A1A',
            'Sonoma County',           '#C0392B',
            'Mendocino & Lake County', '#27AE60',
            'Central Coast',           '#2980B9',
            'Central Valley',          '#E67E22',
            'Sierra Foothills',        '#D35400',
            'South Coast',             '#8E44AD',
            'Northern California',     '#16A085',
            'North Coast',             '#2C3E50',
            'San Francisco Bay',       '#7F8C8D',
            /* default */ '#95A5A6'
          ],
          'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'hover'], false], 0.15,
            0.10
          ],
        },
      })

      // Outline layer
      map.addLayer({
        id: 'ava-outline',
        type: 'line',
        source: 'ca-avas',
        paint: {
          'line-color': [
            'case',
            ['boolean', ['feature-state', 'hover'], false], '#fff',
            'rgba(255,255,255,0.53)'
          ],
          'line-width': [
            'case',
            ['boolean', ['feature-state', 'hover'], false], 2,
            0.8
          ],
        },
      })

      // Label layer
      map.addLayer({
        id: 'ava-labels',
        type: 'symbol',
        source: 'ca-avas',
        layout: {
          'text-field': ['get', 'name'],
          'text-size': ['interpolate', ['linear'], ['zoom'], 6, 9, 10, 13],
          'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
          'text-max-width': 8,
          'text-anchor': 'center',
          'symbol-placement': 'point',
          'symbol-avoid-edges': true,
        },
        paint: {
          'text-color': '#fff',
          'text-halo-color': 'rgba(0,0,0,0.53)',
          'text-halo-width': 1.5,
        },
        minzoom: 6,
      })

      // Hover interaction
      map.on('mousemove', 'ava-fill', (e) => {
        if (e.features.length > 0) {
          if (hoveredId !== null) {
            map.setFeatureState({ source: 'ca-avas', id: hoveredId }, { hover: false })
          }
          hoveredId = e.features[0].id
          map.setFeatureState({ source: 'ca-avas', id: hoveredId }, { hover: true })
          map.getCanvas().style.cursor = 'pointer'
        }
      })

      map.on('mouseleave', 'ava-fill', () => {
        if (hoveredId !== null) {
          map.setFeatureState({ source: 'ca-avas', id: hoveredId }, { hover: false })
        }
        hoveredId = null
        map.getCanvas().style.cursor = ''
      })

      // Click interaction
      map.on('click', 'ava-fill', (e) => {
        if (!e.features.length) return
        const props = e.features[0].properties
        const reg = allRegions.value.find(r => r.id === props.ava_id)
        if (reg) {
          activeRegion.value  = reg
          infoCollapsed.value = false

          // Isolate selected feature
          const f = ['==', ['get', 'ava_id'], props.ava_id]
          map.setFilter('ava-fill', f)
          map.setFilter('ava-outline', f)
          map.setFilter('ava-labels', f)

          const bbox = featureGeomMap[props.ava_id]
          if (bbox) {
            const [w, s, e2, n] = bbox
            map.fitBounds([[w, s], [e2, n]], { padding: 80, maxZoom: 12, duration: 600 })
          }
        }
      })

      map.on('click', (e) => {
        const features = map.queryRenderedFeatures(e.point, { layers: ['ava-fill'] })
        if (!features.length && activeRegion.value) {
          clearSelection()
        }
      })

      // 初始只顯示選定大區的 AVA
      if (props.selectedGroup?.id) {
        const gf = ['==', ['get', 'group'], props.selectedGroup.id]
        map.setFilter('ava-fill', gf)
        map.setFilter('ava-outline', gf)
        map.setFilter('ava-labels', gf)
      }

      mapReady.value  = true
      isLoading.value = false
    })

    map.on('error', (e) => {
      console.error('Mapbox error:', e)
      if (!mapReady.value) {
        mapError.value  = '地圖載入失敗：' + (e.error?.message || '未知錯誤')
        isLoading.value = false
      }
    })
  } catch (err) {
    mapError.value  = err.message || '地圖載入失敗'
    isLoading.value = false
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

function createDemoClimatePayload(items) {
  const years = Array.from({ length: 25 }, (_, i) => 2000 + i)
  const aocs = {}
  const ySums=[],ySunSums=[],yRainSums=[],yCounts=[],allT=[],allS=[],allR=[]
  years.forEach(()=>{ ySums.push(0);ySunSums.push(0);yRainSums.push(0);yCounts.push(0) })
  for (const item of items) {
    const key = item.id
    let seed = 0; for (const ch of key) seed += ch.charCodeAt(0)
    const base = 20.0 + (seed % 60) * 0.06
    const amp = 0.5 + (seed % 10) * 0.04
    const trend = 0.02 + (seed % 3) * 0.005
    const sunBase = 780 + (seed % 100)
    const rainBase = 80 + (seed % 100)
    const temps = years.map((y,i) => {
      const v = Number((base + Math.sin((i+seed%7)*0.55)*amp + (y-2000)*trend).toFixed(2))
      allT.push(v); ySums[i]+=v; yCounts[i]+=1; return v
    })
    const sun = years.map((_,i) => {
      const v = Number((sunBase + Math.sin((i+seed%5)*0.5)*45).toFixed(1))
      allS.push(v); ySunSums[i]+=v; return v
    })
    const rain = years.map((_,i) => {
      const v = Number((rainBase + Math.cos((i+seed%6)*0.52)*28).toFixed(1))
      allR.push(v); yRainSums[i]+=v; return v
    })
    aocs[key] = {
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
      climateYear.value = climateYears.value.includes(2002) ? 2002 : climateYears.value[0]
  }
  try {
    const res = await fetch('/data/california-climate.json')
    if (res.ok) { apply(await res.json()); return }
  } catch (_) {}
  apply(createDemoClimatePayload(allRegions.value))
}

function applyClimateColor(year) {
  if (!map || !climateEnabled.value || !climateData.value || !climateYears.value.length) return
  const idx = climateYears.value.indexOf(year)
  if (idx < 0) return
  const cfg = currentIndicatorConfig.value

  // 只上色目前可見的產區
  let visibleRegions = allRegions.value
  let climateFilter = null
  if (activeRegion.value) {
    visibleRegions = [activeRegion.value]
    climateFilter = ['==', ['get', 'ava_id'], activeRegion.value.id]
  } else if (props.selectedGroup?.id) {
    visibleRegions = allRegions.value.filter(r => r.group === props.selectedGroup.id)
    climateFilter = ['==', ['get', 'group'], props.selectedGroup.id]
  }

  const entries = []
  for (const r of visibleRegions) {
    const arr = climateData.value[r.id]?.[cfg.dataKey]
    const value = Array.isArray(arr) && idx < arr.length ? Number(arr[idx]) : null
    if (Number.isFinite(value)) entries.push(r.id, valueToClimateColor(value, cfg.id))
  }
  if (!map.getLayer('ava-climate-fill')) {
    map.addLayer({ id: 'ava-climate-fill', type: 'fill', source: 'ca-avas',
      paint: { 'fill-color': '#888', 'fill-opacity': 0 } })
  }
  map.setFilter('ava-climate-fill', climateFilter)
  if (entries.length > 0) {
    map.setPaintProperty('ava-climate-fill', 'fill-color', ['match', ['get', 'ava_id'], ...entries, '#888888'])
    map.setPaintProperty('ava-climate-fill', 'fill-opacity', 0.55)
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
  if (map && map.getLayer('ava-climate-fill')) map.removeLayer('ava-climate-fill')
}

// 選中產區變更時，同步更新氣候圖層
watch(activeRegion, () => {
  if (climateEnabled.value) applyClimateColor(climateYear.value)
})

onMounted(initMap)

onUnmounted(() => {
  if (map) {
    map.remove()
    map = null
  }
})

// ── 統一 adapters ───────────────────────────────────────────────
const drawerSearch = ref('')

const unifiedInfo = computed(() => {
  const r = activeRegion.value
  if (!r) return null
  const meta = []
  if (r.county) meta.push({ label: '郡', value: r.county })
  if (r.created) meta.push({ label: '成立', value: r.created.split('-')[0] })
  if (r.acres) meta.push({ label: '面積', value: `${acresToHectares(r.acres)} 公頃` })
  if (r.elevation) meta.push({ label: '海拔', value: r.elevation })
  if (r.within) meta.push({ label: '所屬產區', value: r.within })
  return {
    name: r.name,
    badges: r.group ? [{ label: r.group, type: r.group.toLowerCase().replace(/\s+/g, '') }] : [],
    meta,
    description: r.description || '',
    grapes: r.grapes || [],
    climate: r.climate || '',
  }
})

const groupedDrawerUnified = computed(() => {
  const q = drawerSearch.value.trim().toLowerCase()
  return groupedDrawerList.value
    .map(g => ({
      key: g.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      label: g.name,
      items: g.items
        .filter(r => !q || r.name.toLowerCase().includes(q) || (r.county || '').toLowerCase().includes(q))
        .map(r => ({ id: r.id, name: r.name, type: r.group, styles: [] }))
    }))
    .filter(g => g.items.length > 0)
})

function selectById(item) {
  const found = allRegions.value.find(r => r.id === item.id)
  if (found) selectFromDrawer(found)
}

function handleMobileAction(action) {
  if (action === 'aoc') { drawerOpen.value = !drawerOpen.value; layersOpen.value = false }
  else if (action === 'layer') { layersOpen.value = !layersOpen.value; drawerOpen.value = false }
  else if (action === '3d') { toggle3D() }
  else if (action === 'info') { toggleInfo() }
}
</script>

<style scoped>
.california-map-section {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #1a1a2e;
  overflow: hidden;
}

/* ── Map ── */
.map {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* ── Loading / Error ── */
.map-loading {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(10, 10, 30, 0.85);
  z-index: 20;
  color: #ccc;
  gap: 12px;
}
.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255,255,255,0.2);
  border-top-color: #e74c3c;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.map-error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(200,50,50,0.9);
  color: #fff;
  padding: 12px 20px;
  border-radius: 8px;
  z-index: 25;
  font-size: 0.9rem;
  max-width: 80%;
  text-align: center;
}

/* ── Header ── */
.map-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background: linear-gradient(180deg, rgba(10,10,30,0.9) 0%, rgba(10,10,30,0) 100%);
  pointer-events: none;
}
.map-header-left {
  display: flex;
  gap: 8px;
  pointer-events: all;
}
.map-header h1 {
  flex: 1;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 1px 4px rgba(0,0,0,0.7);
}
.map-hdr-btn {
  padding: 5px 12px;
  border-radius: 6px;
  border: 1px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.12);
  color: #fff;
  cursor: pointer;
  font-size: 0.82rem;
  transition: background 0.15s;
  pointer-events: all;
  backdrop-filter: blur(4px);
}
.map-hdr-btn:hover { background: rgba(255,255,255,0.22); }
.map-hdr-btn.ghost { opacity: 0.75; }
.map-hdr-btn.ava-list-btn {
  background: rgba(231,76,60,0.28);
  border-color: rgba(231,76,60,0.6);
  font-weight: 700;
}
.map-hdr-btn.ava-list-btn:hover {
  background: rgba(231,76,60,0.5);
  border-color: #e74c3c;
}

/* ── Info Bar ── */
.map-info-bar {
  position: absolute;
  left: 50%;
  right: auto;
  transform: translateX(-50%);
  width: min(90vw, 560px);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 170px);
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(12px);
  border: none;
  border-radius: 18px;
  z-index: 10;
  padding: 14px;
  color: #1f1f1f;
  max-height: min(42vh, 360px);
  overflow: hidden;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.18);
  transition: all 0.3s ease;
}
.map-info-bar.collapsed {
  padding: 10px 12px;
  max-height: none;
  overflow: visible;
}
.aoc-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
  margin-bottom: 4px;
}
.map-info-bar.collapsed .aoc-title-row { margin-bottom: 0; }
.aoc-info-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  font-size: 1rem;
  color: #1f1f1f;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.aoc-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
.title-buttons {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
}
.btn-show-all {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 5px 10px;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,0.15);
  background: rgba(0,0,0,0.06);
  color: #444;
  cursor: pointer;
  font-size: 0.78rem;
  transition: background 0.15s;
}
.btn-show-all:hover { background: rgba(0,0,0,0.12); color: #111; }
.btn-collapse-inline {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px;
  background: #1a1a2e;
  border: none; border-radius: 50%;
  cursor: pointer; color: white;
  flex-shrink: 0; transition: background 0.15s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
}
.btn-collapse-inline:hover { background: #2d2d4e; }
.btn-collapse-inline svg { flex-shrink: 0; }
.btn-pronunciation {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none; border-radius: 50%;
  color: white; cursor: pointer;
  flex-shrink: 0; transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
}
.btn-pronunciation:hover { transform: scale(1.08); }
.btn-reset-icon {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px;
  background: linear-gradient(180deg, #ff6f61 0%, #ef4f45 100%);
  border: none; border-radius: 10px;
  color: white; cursor: pointer;
  flex-shrink: 0; transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
}
.btn-reset-icon:hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(0,0,0,0.22); }
.info-details {
  margin-top: 10px;
  overflow-y: auto;
  max-height: min(28vh, 220px);
}
.map-info-bar.collapsed .info-details { display: none; }
.style-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 8px;
}
.info-group-badge {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 12px;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
}
.info-county-badge {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 12px;
  background: rgba(0,0,0,0.07);
  color: #555;
  font-size: 0.75rem;
}
.info-year-badge {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 12px;
  background: rgba(41,128,185,0.12);
  color: #2980b9;
  font-size: 0.75rem;
  font-weight: 600;
}
.info-description {
  font-size: 0.84rem;
  color: #333;
  line-height: 1.55;
  margin: 6px 0 10px;
  border-left: 3px solid #e2e2e2;
  padding-left: 10px;
}
.grapes-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 2px;
}
.grape-tag {
  background: rgba(118,75,162,0.1);
  border: 1px solid rgba(118,75,162,0.25);
  border-radius: 12px;
  padding: 2px 9px;
  font-size: 0.73rem;
  color: #5a3891;
  font-weight: 500;
}
.info-stats-row {
  display: flex;
  gap: 16px;
  margin: 6px 0 8px;
  flex-wrap: wrap;
}
.info-stat {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(0,0,0,0.04);
  border-radius: 10px;
  padding: 6px 12px;
  min-width: 90px;
}
.info-stat-icon { font-size: 1.1rem; line-height: 1; }
.info-stat-value {
  font-size: 0.88rem;
  font-weight: 700;
  color: #1a1a2e;
  line-height: 1;
}
.info-stat-label {
  font-size: 0.68rem;
  color: #888;
  line-height: 1.2;
  margin-top: 1px;
}
.climate-row { flex-wrap: wrap; }
.info-value-wrap { color: #444; font-size: 0.83rem; flex: 1; }
.info-row {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-size: 0.85rem;
  color: #333;
  margin-bottom: 6px;
  line-height: 1.4;
}
.info-label { color: #777; flex-shrink: 0; }
.info-value { color: #222; }
.sub-avas { flex-direction: column; }
.sub-ava-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
}
.sub-ava-tag {
  background: rgba(0,0,0,0.06);
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 4px;
  padding: 1px 6px;
  font-size: 0.72rem;
  color: #555;
}
.no-info { color: #888; font-size: 0.85rem; line-height: 1.5; }
.hint-sub { color: #aaa; font-size: 0.78rem; margin-top: 8px; }

/* Legend */
.legend-inline {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 10px;
  margin-top: 8px;
}
.legend-inline-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.78rem;
  color: #555;
}
.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* ── Drawer ── */
.aoc-backdrop {
  position: absolute;
  inset: 0;
  z-index: 1210;
  background: rgba(15, 23, 42, 0.34);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  backdrop-filter: blur(4px);
}
.aoc-drawer {
  position: absolute;
  left: 50%;
  right: auto;
  transform: translateX(-50%);
  top: calc(env(safe-area-inset-top, 0px) + 6px);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  width: min(90vw, 560px);
  display: flex;
  flex-direction: column;
  background: #f7f3ee;
  border-radius: 20px 20px 14px 14px;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.24);
  overflow: hidden;
  padding-bottom: 10px;
}
.aoc-handle {
  display: block;
  width: 52px;
  height: 5px;
  border-radius: 999px;
  background: rgba(122, 90, 64, 0.28);
  margin: 10px auto 8px;
  flex-shrink: 0;
}
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px 12px;
  border-bottom: 1px solid rgba(122, 90, 64, 0.14);
  color: #6b1f1f;
  font-weight: 700;
  font-size: 1.05rem;
  flex-shrink: 0;
}
.drawer-header > span {
  display: flex;
  align-items: center;
  gap: 7px;
}
.drawer-group-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
.drawer-close {
  background: rgba(107,31,31,0.08);
  border: none;
  color: #6b1f1f;
  cursor: pointer;
  font-size: 1rem;
  padding: 4px 8px;
  border-radius: 8px;
  transition: background 0.15s;
}
.drawer-close:hover { background: rgba(107,31,31,0.18); }
.drawer-search-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-bottom: 1px solid rgba(122, 90, 64, 0.1);
  flex-shrink: 0;
}
.search-icon { font-size: 0.9rem; color: #999; }
.search-input {
  flex: 1;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(107, 31, 31, 0.16);
  border-radius: 12px;
  padding: 7px 12px;
  color: #333;
  font-size: 0.9rem;
  outline: none;
}
.search-input::placeholder { color: #aaa; }
.search-input:focus { border-color: rgba(107, 31, 31, 0.4); }
.filter-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 10px 16px;
  border-bottom: 1px solid rgba(122, 90, 64, 0.1);
  flex-shrink: 0;
}
.filter-tab {
  padding: 4px 10px;
  border-radius: 12px;
  border: 1px solid rgba(107,31,31,0.18);
  background: transparent;
  color: #7a4a2a;
  cursor: pointer;
  font-size: 0.74rem;
  font-weight: 600;
  transition: all 0.15s;
}
.filter-tab.active {
  background: #6b1f1f;
  border-color: #6b1f1f;
  color: #fff;
}
.filter-tab:hover:not(.active) {
  background: rgba(107,31,31,0.1);
  border-color: rgba(107,31,31,0.35);
}
.appellation-list {
  flex: 1;
  overflow-y: auto;
  padding: 4px 0;
}
.gi-group-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px 4px;
  font-size: 0.78rem;
  font-weight: 700;
  color: #7a5030;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: rgba(122,90,64,0.05);
  border-top: 1px solid rgba(122,90,64,0.1);
}
.gi-group-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.gi-group-count {
  margin-left: auto;
  background: rgba(107,31,31,0.1);
  border-radius: 10px;
  padding: 1px 7px;
  font-size: 0.7rem;
  color: #7a4a2a;
}
.app-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background 0.1s;
  border-bottom: 1px solid rgba(0,0,0,0.04);
}
.app-item:hover { background: rgba(107,31,31,0.05); }
.app-item.active { background: rgba(107,31,31,0.1); border-left: 3px solid #6b1f1f; padding-left: 13px; }
.app-badge {
  display: inline-block;
  width: 46px;
  padding: 2px 4px;
  border-radius: 5px;
  color: #fff;
  font-size: 0.65rem;
  font-weight: 700;
  text-align: center;
  flex-shrink: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.app-text { display: flex; flex-direction: column; min-width: 0; }
.app-name { color: #222; font-size: 0.9rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.app-sub { color: #999; font-size: 0.74rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.no-results { color: #aaa; text-align: center; padding: 20px; font-size: 0.85rem; }

/* ── Mobile toolbar ── */
.mobile-map-toolbar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: min(90vw, 560px);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 84px);
  z-index: 1300;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  padding: 8px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
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
  border: none;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
  transition: all 0.15s;
}
.mobile-tool-btn:hover { opacity: 0.9; }
.mobile-tool-btn.active {
  background: linear-gradient(180deg, #8B1a1a 0%, #6b0f0f 100%);
  color: #fff;
}
.mobile-tool-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(139,26,26,0.08);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}
.mobile-tool-btn.active .mobile-tool-icon {
  background: rgba(255, 255, 255, 0.18);
}

/* ── 圖層 Backdrop + Sheet ── */
.layers-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.35);
  z-index: 1400;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  backdrop-filter: blur(4px);
}
.layers-sheet {
  width: min(90vw, 580px);
  background: white;
  border-radius: 20px 20px 14px 14px;
  padding: 0 0 24px;
  box-shadow: 0 -8px 32px rgba(0,0,0,0.22);
  margin-bottom: 96px;
  color: #222;
}
.layers-sheet-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px 14px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
}
.layers-close-btn {
  width: 32px; height: 32px;
  background: rgba(0,0,0,0.06);
  border: none; border-radius: 50%;
  cursor: pointer; font-size: 1.1rem;
  display: flex; align-items: center; justify-content: center;
  color: #555; transition: background 0.15s;
}
.layers-close-btn:hover { background: rgba(0,0,0,0.12); }
.layer-group { padding: 12px 20px 4px; }
.layer-group-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #999;
  margin-bottom: 8px;
}
.layer-group-buttons { display: flex; flex-direction: column; gap: 6px; }
.btn-layer {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 13px 16px;
  border: 1.5px solid rgba(0,0,0,0.07);
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.88rem;
  font-weight: 600;
  background: rgba(0,0,0,0.02);
  color: #333;
  transition: all 0.15s;
  text-align: left;
  font-family: inherit;
}
.btn-layer:hover { background: rgba(139,26,26,0.06); border-color: rgba(139,26,26,0.2); }
.btn-layer.active { background: rgba(139,26,26,0.08); border-color: #8B1a1a; color: #8B1a1a; }
.btn-layer.color-contours.active { background: #f3e5f5; border-color: #9C27B0; color: #6a1b9a; }
.btn-layer.color-contours:not(.active):hover { border-color: #ce93d8; }
.btn-layer.color-contours.active .lbtn-dot { background: #9C27B0; border-color: #9C27B0; }
.lbtn-icon { font-size: 1.1rem; width: 22px; text-align: center; flex-shrink: 0; }
.lbtn-text { flex: 1; }
.lbtn-dot {
  width: 14px; height: 14px;
  border-radius: 50%;
  border: 2px solid #ccc;
  flex-shrink: 0;
  transition: all 0.15s;
}
.lbtn-dot.on { background: #8B1a1a; border-color: #8B1a1a; }
.layers-sheet-fade-enter-active, .layers-sheet-fade-leave-active { transition: opacity 0.22s ease; }
.layers-sheet-fade-enter-from, .layers-sheet-fade-leave-to { opacity: 0; }

/* ── Transitions ── */
.sheet-fade-enter-active, .sheet-fade-leave-active { transition: opacity 0.25s; }
.sheet-fade-enter-from, .sheet-fade-leave-to { opacity: 0; }

/* ── Responsive ── */
@media (max-width: 600px) {
  .map-header h1 { font-size: 0.9rem; }
  .mobile-map-toolbar {
    width: min(94vw, 340px);
    gap: 6px;
    padding: 6px;
    border-radius: 16px;
  }
  .mobile-tool-btn {
    min-height: 50px;
    border-radius: 13px;
    font-size: 0.72rem;
  }
  .map-info-bar {
    width: min(94vw, 340px);
    bottom: calc(env(safe-area-inset-bottom, 0px) + 160px);
  }
  .aoc-drawer {
    left: 0;
    right: 0;
    transform: none;
    width: 100%;
    border-radius: 20px 20px 14px 14px;
  }
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

/* 統一圖層面板包裝 */
.layer-panel-wrapper {
  position: fixed;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 46;
}
/* rmap-section for extra-content slot */
.rmap-section { margin-top: 8px; }
.rmap-section-title { font-size: 11px; color: #999; margin-bottom: 4px; text-transform: uppercase; letter-spacing: .5px; }
</style>
