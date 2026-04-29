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
          :soil-enabled="soilEnabled"
          :soil-disabled="false"
          soil-label="地質圖層"
          @toggle-3d="toggle3D"
          @toggle-contours="toggleContours"
          @toggle-climate="toggleClimate"
          @toggle-soil="toggleSoil"
          @close="layersOpen = false"
        />
        <!-- CGS 地質圖層控制列（地質圖層啟用時顯示）-->
        <div v-if="soilEnabled" class="ca-geo-inline-panel">
          <div class="ca-geo-inline-title">🗺️ CGS 地質圖層</div>
          <div class="ca-geo-inline-row">
            <span class="ca-geo-inline-lbl">透明度</span>
            <input type="range" min="0.1" max="1" step="0.05" v-model.number="soilOpacity" class="ca-geo-inline-slider" />
            <span class="ca-geo-inline-pct">{{ Math.round(soilOpacity * 100) }}%</span>
          </div>
          <div class="ca-geo-inline-footer">
            <span>© Macrostrat (CC BY 4.0)</span>
            <span>點擊地圖查看地質資訊</span>
          </div>
        </div>
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
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as turf from '@turf/turf'
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
const drawerOpen      = ref(false)
const layersOpen      = ref(false)
const activeRegion    = ref(null)
const isPlayingAudio  = ref(false)
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
  if (currentAudio) { currentAudio.pause(); currentAudio = null; isPlayingAudio.value = false }
  const audioPath = `/california/sounds/${encodeURIComponent(activeRegion.value.name)}.mp3`
  currentAudio = new Audio(audioPath)
  isPlayingAudio.value = true
  currentAudio.play().catch(() => { isPlayingAudio.value = false })
  currentAudio.onended  = () => { isPlayingAudio.value = false; currentAudio = null }
  currentAudio.onerror  = () => { isPlayingAudio.value = false; currentAudio = null }
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

    caAvaGeoJSON = geoJSON  // 儲存備地質圖層裁切用

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
        if (soilEnabled.value) return   // 地質圖層開啟時不足操作 AVA
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
        if (soilEnabled.value) return   // 地質圖層開啟時不清除選擇
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

// 選中產區變更時，同步更新氣候圖層與地質裁切
watch(activeRegion, () => {
  if (climateEnabled.value) applyClimateColor(climateYear.value)
  if (soilEnabled.value) {
    // 重建 WMS source（套用新產區 bounds）
    if (map && map.getLayer('ca-geology-layer')) {
      map.removeLayer('ca-geology-layer')
      map.removeSource('ca-geology-wms')
      loadCAGeologyLayer()
    } else {
      updateCAGeoClip()
    }
  }
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

// ── CA 地質圖層（CGS WMS + ArcGIS REST）──────────────────────────────────
const soilEnabled  = ref(false)
const soilOpacity  = ref(0.7)
let caGeologyPopup = null
let caGeoClickReg  = false
let caAvaGeoJSON   = null   // 由 initMap 賦值

// California 地質類型 → 葡萄酒產區說明（對應 GENERALIZED_LTYPE / PTYPE 欄位）
const CA_LITHO_CODES = {
  alluvial: {
    zh: '沖積層（Alluvial Deposits）', icon: '🪨',
    wine: 'Napa Valley 谷底及 Sonoma 河道沿岸的沖積礫石，排水極佳，使葡萄根系深扎。Rutherford Bench 與 Oakville Bench 的礫石扇形地更被視為 Napa Cabernet Sauvignon 的精華地帶，賦予酒款「Rutherford Dust」的獨特塵土感礦物風味。',
  },
  marine_sed: {
    zh: '海相沉積岩（Marine Sedimentary）', icon: '🌊',
    wine: 'Paso Robles 的石灰質砂岩與頁岩層厚重，保水性適中且富含鈣質，是該產區 GSM 混調（Grenache、Syrah、Mourvèdre）風格醇厚的重要因素。Santa Barbara 的砂岩更因東西走向山谷導引冷海風，讓 Pinot Noir 與 Chardonnay 發展出細膩酸度。',
  },
  nonmarine_sed: {
    zh: '陸相沉積岩（Nonmarine Sedimentary）', icon: '🏜️',
    wine: 'Central Valley 廣泛的陸相沉積層以深厚黏壤土為主，保水力強，適合大量生產的 Zinfandel 與 Chenin Blanc。Sierra Foothills 丘陵的古老沉積岩風化壤土則孕育出奔放果香的 Old Vine Zinfandel。',
  },
  volcanic: {
    zh: '火山岩（Volcanic Rocks）', icon: '🌋',
    wine: 'Sonoma 北部 Knights Valley 及 Mendocino 的玄武岩與安山岩土壤礦物質豐富。Mt. Veeder 與 Spring Mountain 的火山岩風化紅土，是 Napa 山地 Cabernet 結構複雜、單寧緊實的地質根源。',
  },
  plutonic: {
    zh: '侵入岩／花崗岩（Plutonic Rocks）', icon: '⛰️',
    wine: 'Sierra Foothills 的花崗岩地層酸性貧瘠，逼使葡萄藤低產出且深根，Amador County 等地的 Zinfandel 與 Barbera 在此展現出飽滿、辛辣的特色風格。',
  },
  metamorphic: {
    zh: '變質岩（Metamorphic Rocks）', icon: '💎',
    wine: '加州海岸山脈的片岩與片麻岩帶來良好排水性，在 Mount Harlan（Calera）等高海拔產區，石灰質變質岩孕育出風格接近布根地的 Pinot Noir 與 Chardonnay。',
  },
  ultramafic: {
    zh: '超基性岩（Ultramafic / Serpentinite）', icon: '🟢',
    wine: '加州特有的蛇紋岩（Serpentinite）含高鎂低鈣，土壤生長環境嚴苛，葡萄藤低產量但果實風味濃縮。Lake County 部分 Cabernet Sauvignon 與 Sauvignon Blanc 因此帶有獨特礦物鹹感。',
  },
  limestone: {
    zh: '石灰岩（Limestone）', icon: '🏔️',
    wine: 'Santa Ynez Valley 及 Edna Valley 的石灰質土壤提供充足鈣質，使葡萄藤水分吸收均勻，Pinot Noir 發展出更細膩優雅的果香，與同一品種在礫石土壤的粗獷風格形成鮮明對比。',
  },
  bay_mud: {
    zh: '灣區淤泥（Bay Mud / Clay）', icon: '🟤',
    wine: 'San Francisco Bay 周邊低窪地帶的重黏土保水性強，需精細灌溉管理。Livermore Valley 的礫石黏土混合層（受 Alameda Creek 沖積影響）則是該產區 Chardonnay 與 Petite Sirah 的良好基礎。',
  },
}

function getCALithoInfo(ltype, ptype) {
  const combined = `${(ltype || '')} ${(ptype || '')}`.toLowerCase()
  if (/alluvial|gravel|fluvial|terrace/.test(combined)) return { code: 'alluvial', ...CA_LITHO_CODES.alluvial }
  if (/marine sedimentary|limestone|chalk|calcareous/.test(combined)) return { code: 'limestone', ...CA_LITHO_CODES.limestone }
  if (/nonmarine sedimentary|continental sedim/.test(combined)) return { code: 'nonmarine_sed', ...CA_LITHO_CODES.nonmarine_sed }
  if (/marine sedimentary/.test(combined)) return { code: 'marine_sed', ...CA_LITHO_CODES.marine_sed }
  if (/volcanic|lava|basalt|andesite|rhyolite|tuff/.test(combined)) return { code: 'volcanic', ...CA_LITHO_CODES.volcanic }
  if (/plutonic|granite|granodiorite|diorite|gabbro/.test(combined)) return { code: 'plutonic', ...CA_LITHO_CODES.plutonic }
  if (/metamorphic|schist|gneiss|marble|slate/.test(combined)) return { code: 'metamorphic', ...CA_LITHO_CODES.metamorphic }
  if (/ultramafic|serpentinite|peridotite|dunite/.test(combined)) return { code: 'ultramafic', ...CA_LITHO_CODES.ultramafic }
  if (/sedimentary/.test(combined)) return { code: 'marine_sed', ...CA_LITHO_CODES.marine_sed }
  if (/bay mud|clay|mud/.test(combined)) return { code: 'bay_mud', ...CA_LITHO_CODES.bay_mud }
  return null
}

// ── 地質術語中文對照 ────────────────────────────────────────────────────────
const LITH_ZH = {
  'sandstone': '砂岩', 'shale': '頁岩', 'limestone': '石灰岩', 'mudstone': '泥岩',
  'siltstone': '粉砂岩', 'conglomerate': '礫岩', 'chert': '燧石岩', 'dolostone': '白雲岩',
  'dolomite': '白雲岩', 'marble': '大理岩', 'slate': '板岩', 'schist': '片岩',
  'gneiss': '片麻岩', 'phyllite': '千枚岩', 'quartzite': '石英岩',
  'granite': '花崗岩', 'granodiorite': '花崗閃長岩', 'diorite': '閃長岩',
  'gabbro': '輝長岩', 'tonalite': '英雲閃長岩', 'rhyolite': '流紋岩',
  'andesite': '安山岩', 'basalt': '玄武岩', 'tuff': '凝灰岩',
  'volcanic breccia': '火山角礫岩', 'obsidian': '黑曜岩',
  'serpentinite': '蛇紋岩', 'peridotite': '橄欖岩', 'dunite': '純橄欖岩',
  'ultramafic': '超基性岩',
  'alluvium': '沖積層', 'gravel': '礫石', 'sand': '砂', 'clay': '黏土',
  'silt': '粉砂', 'mud': '淤泥', 'till': '冰磧物',
  'mixed': '混合岩', 'undivided': '未分類', 'not reported': '未記錄',
  'greywacke': '雜砂岩', 'arkose': '長石砂岩', 'turbidite': '濁流岩',
  'melange': '混雜堆積', 'mélange': '混雜堆積',
}
const AGE_ZH = {
  'hadean': '冥古宙', 'archean': '太古宙', 'proterozoic': '元古宙',
  'cambrian': '寒武紀', 'ordovician': '奧陶紀', 'silurian': '志留紀',
  'devonian': '泥盆紀', 'mississippian': '密西西比紀', 'pennsylvanian': '賓夕法尼亞紀',
  'carboniferous': '石炭紀', 'permian': '二疊紀', 'triassic': '三疊紀',
  'jurassic': '侏羅紀', 'cretaceous': '白堊紀', 'paleocene': '古新世',
  'eocene': '始新世', 'oligocene': '漸新世', 'miocene': '中新世',
  'pliocene': '上新世', 'pleistocene': '更新世', 'holocene': '全新世',
  'quaternary': '第四紀', 'neogene': '新近紀', 'paleogene': '古近紀',
  'cenozoic': '新生代', 'mesozoic': '中生代', 'paleozoic': '古生代',
  'precambrian': '前寒武紀',
  'early': '早', 'middle': '中', 'late': '晚', 'upper': '晚', 'lower': '早',
  'turonian': '土侖期', 'campanian': '坎帕期', 'maastrichtian': '馬斯特里赫特期',
  'aptian': '阿普特期', 'albian': '阿爾比期', 'cenomanian': '賽諾曼期',
  'oxfordian': '牛津期', 'kimmeridgian': '金默里奇期', 'tithonian': '提通期',
  'bathonian': '巴通期', 'bajocian': '巴柔期', 'aalenian': '阿連期',
  'toarcian': '托爾期', 'pliensbachian': '普林斯巴期', 'sinemurian': '錫內穆期',
  'hettangian': '赫唐期', 'norian': '諾里期', 'carnian': '卡尼期',
  'ladinian': '拉丁期', 'anisian': '安尼西亞期',
  'ypresian': '伊普雷斯期', 'lutetian': '盧特期', 'bartonian': '巴頓期',
  'priabonian': '普里阿邦期', 'rupelian': '呂珀爾期', 'chattian': '夏特期',
  'aquitanian': '阿基坦期', 'burdigalian': '布爾迪加爾期', 'langhian': '蘭根期',
  'serravallian': '薩拉瓦利安期', 'tortonian': '托爾托納期', 'messinian': '墨西拿期',
  'zanclean': '贊克爾期', 'piacenzian': '皮亞琴察期',
  'gelasian': '傑拉斯期', 'calabrian': '卡拉布里亞期', 'ionian': '愛奧尼亞期',
}

function translateLith(en) {
  if (!en) return ''
  let s = en.trim().toLowerCase()
  for (const [k, v] of Object.entries(LITH_ZH)) {
    s = s.replace(new RegExp(`\\b${k}\\b`, 'gi'), v)
  }
  return s
}

function translateAge(en) {
  if (!en) return ''
  let s = en.trim()
  for (const [k, v] of Object.entries(AGE_ZH)) {
    s = s.replace(new RegExp(`\\b${k}\\b`, 'gi'), v)
  }
  // 移除多餘的 to/and，改為「至」
  s = s.replace(/\s+to\s+/gi, ' 至 ').replace(/\s+and\s+/gi, ' 及 ')
  return s
}

// Franciscan Complex 等加州常見地層固有名詞
const FORMATION_ZH = [
  [/Franciscan (Coastal|Central|Eastern|Coast Ranges?)\s*Belt/gi, '方濟會混雜岩（$1帶）'],
  [/Franciscan Complex/gi, '方濟會混雜岩'],
  [/Franciscan/gi, '方濟會混雜岩'],
  [/Great Valley (Sequence|Group|Complex)/gi, '大峽谷層序'],
  [/Great Valley/gi, '大峽谷層序'],
  [/Salinian (Block|terrane)/gi, '薩利尼安地塊'],
  [/Salinian/gi, '薩利尼安地塊'],
  [/Transverse Ranges/gi, '橫貫山脈'],
  [/Peninsular Ranges/gi, '半島山脈'],
  [/Sierra Nevada (Batholith)?/gi, '內華達山脈花崗岩體'],
  [/Modoc Plateau/gi, '摩多克高原'],
  [/Klamath Mountains?/gi, '克拉馬斯山脈'],
  [/Coast Ranges?/gi, '海岸山脈'],
  [/Central Valley/gi, '中央谷地'],
  [/\bundivided\b/gi, '（未細分）'],
  [/\bnot reported\b/gi, '（未記錄）'],
]

function translateFormation(en) {
  if (!en) return ''
  let s = en.trim()
  for (const [pattern, zh] of FORMATION_ZH) {
    s = s.replace(pattern, zh)
  }
  return s
}

// 預設中文土壤介紹（無對應岩性時的 fallback）
const CA_GEO_DEFAULT = {
  zh: '混合沉積土壤',
  icon: '🌱',
  wine: '此處為混合型沉積土壤，由風化基岩、河流沖積與細粒沉積物交織而成，排水與保水性介於砂質與黏質之間，能支持多元葡萄品種生長，並賦予葡萄酒柔順的果香與適度的礦物層次。'
}

function renderCAGeoPopupHTML(attrs) {
  const ltype   = attrs.lith   || ''
  const age     = attrs.age    || ''
  const info    = getCALithoInfo(ltype, '') || {
    ...CA_GEO_DEFAULT,
    zh: translateLith(ltype) || CA_GEO_DEFAULT.zh,
  }
  const displayType = info.zh
  const displayAge  = translateAge(age)
  return `
    <div class="ca-geo-popup">
      <div class="ca-geo-popup-header">🗺️ 加州地質</div>
      ${displayType  ? `<div class="ca-geo-row"><span class="ca-geo-label">岩石類型</span><span class="ca-geo-val">${displayType}</span></div>`  : ''}
      ${displayAge   ? `<div class="ca-geo-row"><span class="ca-geo-label">地質年代</span><span class="ca-geo-val">${displayAge}</span></div>`    : ''}
      <div class="ca-geo-wine-block">
        <div class="ca-geo-wine-title">${info.icon} ${info.zh}</div>
        <div class="ca-geo-wine-text">${info.wine}</div>
      </div>
    </div>`
}

async function loadCAGeologyLayer() {
  if (!map) return
  // 移除舊圖層
  if (map.getLayer('ca-geo-clip-mask'))  map.removeLayer('ca-geo-clip-mask')
  if (map.getSource('ca-geo-clip-src'))  map.removeSource('ca-geo-clip-src')
  if (map.getLayer('ca-geology-layer'))  map.removeLayer('ca-geology-layer')
  if (map.getSource('ca-geology-wms'))   map.removeSource('ca-geology-wms')

  // 計算所選產區 bounds，限制 Macrostrat 圖磚載入範圍
  let wmsBounds = null
  const activeId = activeRegion.value?.id
  if (activeId && caAvaGeoJSON?.features?.length) {
    const feature = caAvaGeoJSON.features.find(f => f.properties?.ava_id === activeId)
    if (feature) {
      try {
        const bb = turf.bbox(feature)
        const pad = 0.2
        wmsBounds = [bb[0] - pad, bb[1] - pad, bb[2] + pad, bb[3] + pad]
      } catch (_) {}
    }
  }

  // Macrostrat 公開地質向量圖磚（無需 CORS proxy，CC BY 4.0）
  map.addSource('ca-geology-wms', {
    type: 'vector',
    tiles: ['https://tiles.macrostrat.org/carto/{z}/{x}/{y}.mvt'],
    tileSize: 512,
    minzoom: 0,
    maxzoom: 15,
    ...(wmsBounds ? { bounds: wmsBounds } : {}),
    attribution: '© Macrostrat (CC BY 4.0)',
  })
  map.addLayer({
    id: 'ca-geology-layer',
    type: 'fill',
    source: 'ca-geology-wms',
    'source-layer': 'units',
    paint: {
      'fill-color': ['coalesce', ['get', 'color'], '#cccccc'],
      'fill-opacity': soilOpacity.value,
    },
  })

  // 裁切 mask：僅顯示目前開啟的 AVA（輕量裁切，不合並全部）
  updateCAGeoClip()

  // Click handler（Macrostrat vector tile queryRenderedFeatures）
  if (!caGeoClickReg) {
    caGeoClickReg = true
    map.on('click', (e) => {
      if (!soilEnabled.value) return
      // 點擊只限選取的單一 AVA 範圍內
      const activeId = activeRegion.value?.id
      if (!activeId || !caAvaGeoJSON?.features?.length) return
      const regionFeature = caAvaGeoJSON.features.find(f => f.properties?.ava_id === activeId)
      if (!regionFeature) return
      try {
        const pt = turf.point([e.lngLat.lng, e.lngLat.lat])
        if (!turf.booleanPointInPolygon(pt, regionFeature)) return
      } catch (_) { return }
      const features = map.queryRenderedFeatures(e.point, { layers: ['ca-geology-layer'] })
      const attrs = features[0]?.properties || {}
      if (caGeologyPopup) caGeologyPopup.remove()
      caGeologyPopup = new mapboxgl.Popup({ className: 'ca-geology-popup-wrap', maxWidth: '340px', closeButton: true })
        .setLngLat(e.lngLat)
        .setHTML(renderCAGeoPopupHTML(attrs))
        .addTo(map)
    })
  }
}

// 更新裁切 mask 至目前開啟的單一 AVA
function updateCAGeoClip() {
  if (!map || !soilEnabled.value) return
  if (map.getLayer('ca-geo-clip-mask')) map.removeLayer('ca-geo-clip-mask')
  if (map.getSource('ca-geo-clip-src')) map.removeSource('ca-geo-clip-src')
  const activeId = activeRegion.value?.id
  if (!activeId || !caAvaGeoJSON?.features?.length) return
  const feature = caAvaGeoJSON.features.find(f => f.properties?.ava_id === activeId)
  if (!feature) return
  try {
    const maskData = turf.mask(feature)
    map.addSource('ca-geo-clip-src', { type: 'geojson', data: maskData })
    map.addLayer({
      id: 'ca-geo-clip-mask',
      type: 'fill',
      source: 'ca-geo-clip-src',
      paint: { 'fill-color': '#f5f1eb', 'fill-opacity': 0.92 },
    })
  } catch (_) {}
}

function removeCAGeologyLayer() {
  if (!map) return
  if (caGeologyPopup) { caGeologyPopup.remove(); caGeologyPopup = null }
  if (map.getLayer('ca-geo-clip-mask'))  map.removeLayer('ca-geo-clip-mask')
  if (map.getSource('ca-geo-clip-src'))  map.removeSource('ca-geo-clip-src')
  if (map.getLayer('ca-geology-layer'))  map.removeLayer('ca-geology-layer')
  if (map.getSource('ca-geology-wms'))   map.removeSource('ca-geology-wms')
}

async function toggleSoil() {
  if (!map) return
  if (!soilEnabled.value) {
    soilEnabled.value = true
    await loadCAGeologyLayer()
  } else {
    soilEnabled.value = false
    removeCAGeologyLayer()
  }
}

watch(soilOpacity, val => {
  if (map && map.getLayer('ca-geology-layer')) {
    map.setPaintProperty('ca-geology-layer', 'fill-opacity', val)
  }
})

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

/* ── CA 地質內嵌控制列（圖層面板下方）── */
.ca-geo-inline-panel {
  background: rgba(255,255,255,0.97);
  border-top: 1px solid #eee;
  border-radius: 0 0 16px 16px;
  padding: 10px 14px;
  width: min(320px, calc(100vw - 32px));
}
.ca-geo-inline-title { font-size: 13px; font-weight: 700; color: #666; margin-bottom: 10px; }
.ca-geo-inline-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.ca-geo-inline-lbl { font-size: 12px; color: #666; white-space: nowrap; }
.ca-geo-inline-slider { flex: 1; height: 4px; accent-color: #c0392b; }
.ca-geo-inline-pct { font-size: 12px; color: #888; min-width: 32px; text-align: right; }
.ca-geo-inline-footer {
  display: flex; flex-direction: column; gap: 2px;
  font-size: 10px; color: #aaa;
  border-top: 1px solid #f0f0f0; padding-top: 6px;
}

/* ── CA 地質 Popup ──────────────────────────────────────────────── */
:global(.ca-geology-popup-wrap .mapboxgl-popup-content) {
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.28);
  min-width: 260px;
  background: linear-gradient(180deg, #1e3a2a 0%, #16291e 100%);
}
:global(.ca-geology-popup-wrap .mapboxgl-popup-close-button) {
  color: #d4f5d4; font-size: 18px;
  top: 4px; right: 6px;
  background: none; border: none;
}
:global(.ca-geo-popup) {
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
  color: #f5f1eb;
  min-width: 240px; max-width: 340px;
  font-size: 0.85rem;
}
:global(.ca-geo-popup-header) {
  background: rgba(0,0,0,0.25);
  padding: 10px 14px;
  font-weight: 700; font-size: 14px;
  color: #fff; letter-spacing: 0.5px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  text-transform: none; margin-bottom: 0;
}
:global(.ca-geo-row) {
  display: flex; padding: 8px 14px; gap: 10px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  font-size: 13px; margin-bottom: 0; line-height: 1.4;
}
:global(.ca-geo-label) {
  font-size: 13px; font-weight: normal; color: #a8d8a8;
  min-width: 64px; flex-shrink: 0;
}
:global(.ca-geo-val) { color: #fff; font-size: 13px; }
:global(.ca-geo-wine-block) {
  margin: 10px 12px 12px; padding: 10px 12px;
  background: rgba(255,255,255,0.06);
  border-left: 3px solid #6fbf73;
  border-radius: 8px;
}
:global(.ca-geo-wine-title) {
  font-size: 13px; font-weight: 700; color: #c8f0c8; margin-bottom: 6px;
}
:global(.ca-geo-wine-text) {
  font-size: 12px; line-height: 1.6; color: #e8efe8;
}
:global(.ca-geo-credit) {
  margin: 4px 14px 10px; font-size: 10px; color: #6faf6f; text-align: right;
}
</style>
