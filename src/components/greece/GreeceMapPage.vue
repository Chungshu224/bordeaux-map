<template>
  <div class="main-layout">
    <section class="map-section">
      <RegionMapHeader
        :regionName="gt('希臘')"
        :title="gt('🇬🇷 希臘葡萄酒產區地圖（33 PDO＋PGI 參考點）')"
        icon="🇬🇷"
        @back="emits('back-to-course')"
      />

      <RegionMapInfoPanel
        v-if="mapReady"
        :info="unifiedInfo"
        :theme-color="activeColor"
        :audio-available="false"
        :collapsed="infoBarCollapsed"
        @toggle-collapse="infoBarCollapsed = !infoBarCollapsed"
        @reset="resetMap"
      />

      <div ref="mapContainer" class="map"></div>

      <div v-if="mapReady && !activeFeature && !activePgi && !climateEnabled" class="gr-legend">
        <div v-for="g in GROUPS" :key="g.key" class="gr-legend-item">
          <span class="gr-legend-dot" :style="{ background: g.color }"></span>
          {{ gt(g.label) }}（{{ countByGroup[g.key] || 0 }}）
        </div>
        <label class="gr-legend-toggle">
          <input type="checkbox" v-model="showPgi" @change="togglePgi" />
          <span class="gr-pgi-dot"></span> {{ gt('PGI 參考點（{n}）', { n: PGI_REF.length }) }}
        </label>
        <div class="gr-legend-hint">{{ gt('點擊產區查看資訊；PDO 邊界為歐盟官方資料（CC0）。PGI 僅為示意位置，非官方邊界；完整 114 個 PGI 請查 eAmbrosia。') }}</div>
        <div class="gr-legend-hint">{{ gt(PGI_RULES) }}</div>
      </div>

      <div v-if="showLayerPanel" class="layer-panel-wrapper">
        <RegionMapLayerPanel
          :is3D="is3D"
          :show-contours="contoursEnabled"
          :climate-enabled="climateEnabled"
          :hide-soil="true"
          @toggle-3d="toggle3D"
          @toggle-contours="toggleContours"
          @toggle-climate="toggleClimate"
          @close="showLayerPanel = false"
        />
      </div>

      <RegionMapMobileToolbar
        v-if="mapReady"
        :aoc-open="drawerOpen"
        :layer-open="showLayerPanel"
        :is3D="is3D"
        :info-open="!!(activeFeature || activePgi) && !infoBarCollapsed"
        @action="handleMobileAction"
      />

      <transition name="gr-climate-slide">
        <div v-if="climateEnabled && climateData" class="gr-climate">
          <div class="grc-tabs">
            <button v-for="ind in CLIMATE_INDICATORS" :key="ind.id"
              :class="['grc-tab', { active: climateIndicator === ind.id }]"
              @click="setClimateIndicator(ind.id)">{{ ind.icon }} {{ gt(ind.label) }}</button>
          </div>
          <div class="grc-head">
            <span class="grc-year">{{ climateYear }}</span>
            <div class="grc-stats">
              <div v-if="climateActiveLabel" class="grc-name">{{ climateActiveLabel }}</div>
              <span v-if="currentValue !== null" class="grc-val">{{ currentValue }}{{ cfg.unit }}</span>
              <span v-if="currentDelta !== null" :class="['grc-delta', currentDelta >= 0 ? 'warm' : 'cool']">
                {{ currentDelta >= 0 ? '+' : '' }}{{ currentDelta }}{{ cfg.unit }} {{ gt('vs 基準') }}
              </span>
            </div>
            <button class="grc-close" @click="toggleClimate" :title="gt('關閉氣候圖層')">✕</button>
          </div>
          <input class="grc-slider" type="range" v-model.number="climateYear"
            :min="climateYears[0]" :max="climateYears[climateYears.length - 1]" step="1"
            @input="applyClimateColor" />
          <div class="grc-axis">
            <span>{{ climateYears[0] }}</span>
            <span>{{ climateYears[Math.floor(climateYears.length / 2)] }}</span>
            <span>{{ climateYears[climateYears.length - 1] }}</span>
          </div>
          <div class="grc-legend">
            <div :class="['grc-grad', `grc-grad-${climateIndicator}`]"></div>
            <div class="grc-labels">
              <span>{{ currentStats ? currentStats.min.toFixed(0) : '' }}{{ cfg.unit }} {{ gt(cfg.lowLabel) }}</span>
              <span>{{ gt(cfg.highLabel) }} {{ currentStats ? currentStats.max.toFixed(0) : '' }}{{ cfg.unit }}</span>
            </div>
          </div>
          <div class="grc-foot">📊 {{ gt(cfg.footnote) }}</div>
        </div>
      </transition>

      <div v-if="mapError" class="map-error">{{ mapError }}</div>
    </section>

    <RegionMapAppellationDrawer
      v-model:open="drawerOpen"
      :region-name="gt('希臘')"
      :grouped="groupedDrawer"
      :search="search"
      :active-id="activePgi ? activePgi.id : (activeFeature ? activeFeature.id : '')"
      @update:search="search = $event"
      @select="onDrawerSelect"
    />
  </div>
</template>

<script setup>
import { gt } from '../../locales/greeceUi/index.js'
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import {
  RegionMapHeader, RegionMapLayerPanel, RegionMapInfoPanel,
  RegionMapAppellationDrawer, RegionMapMobileToolbar
} from '../shared/regionMap/index.js'
import { globalGreeceAchievementManager } from '../../stores/greeceAchievementSystem.js'
import { PGI_REF, PGI_RULES } from '../../data/greece/pgiRef.js'

const props = defineProps({ initialRegion: { type: Object, default: null } })
const emits = defineEmits(['back-to-course'])

// 教學用六大地理區（非官方行政區）；顏色與 PDO 數量與 Level 1 一致
const GROUPS = [
  { key: 'macedonia',       label: gt('馬其頓'),           color: '#B23A48' },
  { key: 'epirus_thessaly', label: gt('伊庇魯斯與色薩利'), color: '#6A4C93' },
  { key: 'peloponnese',     label: gt('伯羅奔尼撒'),       color: '#2E7D32' },
  { key: 'ionian',          label: gt('愛奧尼亞群島'),     color: '#0097A7' },
  { key: 'aegean',          label: gt('愛琴海島嶼'),       color: '#0D5EAF' },
  { key: 'crete',           label: gt('克里特'),           color: '#B8902A' }
]
const GROUP_BY_KEY = Object.fromEntries(GROUPS.map(g => [g.key, g]))
const HOME_BOUNDS = [[19.3, 34.7], [28.4, 41.2]]

const mapContainer = ref(null)
const mapReady = ref(false)
const mapError = ref(null)
const is3D = ref(false)
const contoursEnabled = ref(false)
const infoBarCollapsed = ref(true)
const drawerOpen = ref(false)
const showLayerPanel = ref(false)
const search = ref('')
const features = ref([])
const activeFeature = ref(null)
const activePgi = ref(null)
const climateEnabled = ref(false)
const climateData = ref(null)
const climateYears = ref([])
const climateYear = ref(2024)
const climateIndicator = ref('temp')
const climateStats = ref({})
const showPgi = ref(true)
let map = null
let contoursInitialized = false

const countByGroup = computed(() => {
  const m = {}
  for (const f of features.value) m[f.properties.group] = (m[f.properties.group] || 0) + 1
  return m
})

const CLIMATE_INDICATORS = [
  { id: 'temp', icon: '🌡', label: '夏季均溫', unit: '°C', lowLabel: '涼', highLabel: '熱', dataKey: 'temps', baselineKey: 'baseline', statsKey: 'global', digits: 1,
    footnote: '6–8 月日均溫平均｜基準 1981–2010｜Open-Meteo（以產區範圍的代表點取值，約 10 公里網格，僅供區域比較）' },
  { id: 'sun', icon: '☀️', label: '日照時數', unit: 'h', lowLabel: '少', highLabel: '多', dataKey: 'sun', baselineKey: 'baselineSun', statsKey: 'globalSun', digits: 0,
    footnote: '6–8 月日照時數總和｜基準 1981–2010｜Open-Meteo（代表點取值，僅供區域比較）' },
  { id: 'rain', icon: '🌧', label: '降雨量', unit: 'mm', lowLabel: '乾', highLabel: '濕', dataKey: 'rain', baselineKey: 'baselineRain', statsKey: 'globalRain', digits: 0,
    footnote: '6–8 月降雨量總和｜基準 1981–2010｜Open-Meteo（代表點取值，僅供區域比較）' }
]
const cfg = computed(() => CLIMATE_INDICATORS.find(i => i.id === climateIndicator.value))
const currentStats = computed(() => climateStats.value[cfg.value.statsKey] || null)
const yearIdx = computed(() => climateYears.value.indexOf(climateYear.value))

function climateOf(id) {
  const arr = climateData.value?.[id]?.[cfg.value.dataKey]
  const v = Array.isArray(arr) && yearIdx.value >= 0 ? arr[yearIdx.value] : null
  return v == null ? null : Number(v)
}
const currentValue = computed(() => {
  const id = activeFeature.value?.id
  if (id) { const v = climateOf(id); return v == null ? null : Number(v.toFixed(cfg.value.digits)) }
  const vals = Object.keys(climateData.value || {}).map(climateOf).filter(v => v != null)
  return vals.length ? Number((vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(cfg.value.digits)) : null
})
const currentDelta = computed(() => {
  const id = activeFeature.value?.id
  if (!id) return null
  const v = climateOf(id)
  const base = climateData.value?.[id]?.[cfg.value.baselineKey]
  if (v == null || base == null) return null
  return Number((v - base).toFixed(cfg.value.id === 'temp' ? 2 : 0))
})
const climateActiveLabel = computed(() => activeFeature.value ? activeFeature.value.name : gt('全希臘 33 PDO 平均'))

function valueToColor(v) {
  const st = currentStats.value
  if (!st) return '#ffffbf'
  const { min, max, mean } = st
  const id = climateIndicator.value
  const stops = id === 'sun'
    ? [[min, [120, 81, 169]], [mean, [171, 217, 233]], [mean + 20, [254, 224, 72]], [max, [253, 141, 60]]]
    : id === 'rain'
      ? [[min, [253, 141, 60]], [mean, [255, 255, 191]], [mean + 15, [74, 144, 226]], [max, [44, 62, 160]]]
      : [[min, [69, 117, 180]], [mean - 1, [171, 217, 233]], [mean, [255, 255, 191]], [mean + 1.5, [252, 141, 89]], [max, [215, 48, 39]]]
  const t = Math.max(min, Math.min(max, v))
  for (let i = 0; i < stops.length - 1; i++) {
    const [t0, c0] = stops[i], [t1, c1] = stops[i + 1]
    if (t <= t1) {
      const f = (t - t0) / Math.max(t1 - t0, 0.0001)
      return `rgb(${[0, 1, 2].map(k => Math.round(c0[k] + f * (c1[k] - c0[k]))).join(',')})`
    }
  }
  const l = stops[stops.length - 1][1]
  return `rgb(${l.join(',')})`
}

async function loadClimateData() {
  if (climateData.value) return
  try {
    const res = await fetch('/data/greece-climate.json')
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const p = await res.json()
    climateData.value = p.aocs || {}
    climateYears.value = p.meta?.years || []
    climateStats.value = { global: p.global, globalSun: p.globalSun, globalRain: p.globalRain }
    if (climateYears.value.length && !climateYears.value.includes(climateYear.value)) climateYear.value = climateYears.value[climateYears.value.length - 1]
  } catch (err) {
    mapError.value = gt('氣候資料載入失敗: {m}', { m: err.message })
    climateEnabled.value = false
  }
}

function applyClimateColor() {
  if (!map || !map.getLayer('gr-fill')) return
  if (!climateEnabled.value || !climateData.value) {
    map.setPaintProperty('gr-fill', 'fill-color', ['match', ['get', 'group'], ...GROUPS.flatMap(g => [g.key, g.color]), '#888'])
    applyHighlight()
    return
  }
  const expr = ['match', ['get', 'id']]
  for (const f of features.value) {
    const v = climateOf(f.properties.id)
    expr.push(f.properties.id, v == null ? '#cccccc' : valueToColor(v))
  }
  expr.push('#cccccc')
  map.setPaintProperty('gr-fill', 'fill-color', expr)
  applyHighlight()
}

async function toggleClimate() {
  climateEnabled.value = !climateEnabled.value
  if (climateEnabled.value) await loadClimateData()
  applyClimateColor()
}

function setClimateIndicator(id) {
  climateIndicator.value = id
  applyClimateColor()
}

const activeColor = computed(() =>
  activePgi.value ? '#E07B00' :
  activeFeature.value ? GROUP_BY_KEY[activeFeature.value.group]?.color || '#0D5EAF' : '#0D5EAF')

// 範圍完全相同的 PDO（如 Lemnos 與 Muscat of Lemnos）
function coLocated(f) {
  return features.value
    .map(x => x.properties)
    .filter(p => p.id !== f.id && p.area_km2 === f.area_km2 && p.group === f.group)
}

const unifiedInfo = computed(() => {
  const g = activePgi.value
  if (g) {
    return {
      name: `PGI ${g.name}`,
      originalName: `ΠΓΕ ${g.name_el}`,
      badges: [{ label: 'PGI' }, ...(g.level ? [{ label: gt(g.level) }] : [])],
      meta: [
        { label: gt('地區'), value: gt(g.region) },
        { label: gt('位置'), value: gt('示意點，非官方邊界') }
      ],
      grapes: (g.grapes || []).map(x => gt(x)),
      description: `${gt(g.notes)} ${gt(PGI_RULES)}`
    }
  }
  const f = activeFeature.value
  if (!f) return null
  const others = coLocated(f)
  let description = gt(f.notes || '')
  if (others.length) description += gt(' 同一範圍另有：{list}。', { list: others.map(o => o.name).join(gt('、')) })
  return {
    name: f.name,
    originalName: f.name_el,
    badges: [{ label: 'PDO' }, ...(f.styles || []).map(s => ({ label: gt(s) }))],
    meta: [
      { label: gt('地理區'), value: gt(GROUP_BY_KEY[f.group]?.label || '') },
      { label: gt('登記'), value: f.registered },
      { label: gt('範圍面積'), value: gt('約 {n} km²', { n: f.area_km2.toLocaleString() }) }
    ],
    grapes: (f.grapes || []).map(x => gt(x)),
    description
  }
})

const groupedDrawer = computed(() => {
  const q = search.value.trim().toLowerCase()
  const pgiItems = PGI_REF
    .filter(p => !q || p.name.toLowerCase().includes(q) || p.name_el.toLowerCase().includes(q))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(p => ({ id: p.id, name: `PGI ${p.name}`, type: 'PGI', styles: [] }))
  const pdoGroups = GROUPS.map(g => ({
    key: g.key,
    label: gt(g.label),
    items: features.value
      .map(x => x.properties)
      .filter(p => p.group === g.key)
      .filter(p => !q || p.name.toLowerCase().includes(q) || (p.name_el || '').toLowerCase().includes(q))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(p => ({ id: p.id, name: p.name, type: g.key, styles: p.styles || [] }))
  })).filter(g => g.items.length)
  return pgiItems.length
    ? [...pdoGroups, { key: 'pgi', label: gt('PGI 參考點（示意位置）'), items: pgiItems }]
    : pdoGroups
})

function bboxOf(feature) {
  let minX = 180, minY = 90, maxX = -180, maxY = -90
  const walk = c => {
    if (typeof c[0] === 'number') {
      minX = Math.min(minX, c[0]); maxX = Math.max(maxX, c[0])
      minY = Math.min(minY, c[1]); maxY = Math.max(maxY, c[1])
    } else c.forEach(walk)
  }
  walk(feature.geometry.coordinates)
  return [[minX, minY], [maxX, maxY]]
}

function selectPgi(id, fly = true) {
  const g = PGI_REF.find(p => p.id === id)
  if (!g) return
  activeFeature.value = null
  activePgi.value = g
  infoBarCollapsed.value = false
  if (!map) return
  applyHighlight()
  if (fly) map.flyTo({ center: g.lngLat, zoom: Math.max(map.getZoom(), 8.5), duration: 900 })
}

function selectById(id, fly = true) {
  if (String(id).startsWith('PGI-')) return selectPgi(id, fly)
  activePgi.value = null
  const feat = features.value.find(f => f.properties.id === id)
  if (!feat) return
  activeFeature.value = feat.properties
  infoBarCollapsed.value = false
  globalGreeceAchievementManager.recordRegionExplored(feat.properties.id, feat.properties.group)
  if (!map) return
  applyHighlight()
  if (fly) map.fitBounds(bboxOf(feat), { padding: 70, duration: 900, maxZoom: 11 })
}

function onDrawerSelect(item) {
  selectById(item.id)
  drawerOpen.value = false
}

function applyHighlight() {
  if (!map || !map.getLayer('gr-fill')) return
  const id = activeFeature.value?.id
  const base = climateEnabled.value ? 0.78 : 0.42
  map.setPaintProperty('gr-fill', 'fill-opacity', id
    ? ['case', ['==', ['get', 'id'], id], climateEnabled.value ? 0.9 : 0.6, climateEnabled.value ? 0.45 : 0.12]
    : base)
  map.setPaintProperty('gr-outline', 'line-width', id
    ? ['case', ['==', ['get', 'id'], id], 3, 1]
    : 1.5)
}

function resetMap() {
  activeFeature.value = null
  activePgi.value = null
  infoBarCollapsed.value = true
  drawerOpen.value = false
  is3D.value = false
  if (!map) return
  applyHighlight()
  map.easeTo({ pitch: 0, bearing: 0, duration: 500 })
  map.fitBounds(HOME_BOUNDS, { padding: 30, duration: 900 })
}

function toggle3D() {
  is3D.value = !is3D.value
  if (map) map.easeTo({ pitch: is3D.value ? 55 : 0, duration: 800 })
}

function initContourLayers() {
  if (contoursInitialized || !map) return
  contoursInitialized = true
  map.addSource('gr-contours', { type: 'vector', url: 'mapbox://mapbox.mapbox-terrain-v2' })
  map.addLayer({
    id: 'gr-contours-line', type: 'line', source: 'gr-contours', 'source-layer': 'contour',
    layout: { 'line-join': 'round', 'line-cap': 'round', visibility: 'none' },
    paint: {
      'line-color': ['case', ['==', ['%', ['to-number', ['get', 'ele']], 100], 0], '#FFD700', '#FF9955'],
      'line-width': ['interpolate', ['linear'], ['zoom'], 9, 0.4, 13, 1.2, 16, 2],
      'line-opacity': ['interpolate', ['linear'], ['zoom'], 9, 0.4, 13, 0.8]
    },
    minzoom: 9
  })
  map.addLayer({
    id: 'gr-contour-labels', type: 'symbol', source: 'gr-contours', 'source-layer': 'contour',
    layout: {
      'symbol-placement': 'line',
      'text-field': ['concat', ['to-string', ['get', 'ele']], 'm'],
      'text-size': 11, 'text-padding': 25, visibility: 'none'
    },
    paint: { 'text-color': '#FFD700', 'text-halo-color': 'rgba(0,0,0,0.8)', 'text-halo-width': 2 },
    filter: ['==', ['%', ['to-number', ['get', 'ele']], 100], 0],
    minzoom: 10
  })
}

function toggleContours() {
  if (!map) return
  contoursEnabled.value = !contoursEnabled.value
  if (contoursEnabled.value) initContourLayers()
  const vis = contoursEnabled.value ? 'visible' : 'none'
  for (const id of ['gr-contours-line', 'gr-contour-labels']) {
    if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', vis)
  }
}

function handleMobileAction(action) {
  if (action === 'aoc') { drawerOpen.value = !drawerOpen.value; showLayerPanel.value = false }
  else if (action === 'layer') { showLayerPanel.value = !showLayerPanel.value; drawerOpen.value = false }
  else if (action === '3d') toggle3D()
  else if (action === 'info') infoBarCollapsed.value = !infoBarCollapsed.value
}

function togglePgi() {
  if (!map) return
  const vis = showPgi.value ? 'visible' : 'none'
  for (const id of ['gr-pgi-circle', 'gr-pgi-label']) {
    if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', vis)
  }
}

function addPgiLayers() {
  map.addSource('gr-pgi', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: PGI_REF.map(p => ({
        type: 'Feature',
        properties: { id: p.id, name: `PGI ${p.name}` },
        geometry: { type: 'Point', coordinates: p.lngLat }
      }))
    }
  })
  map.addLayer({ id: 'gr-pgi-circle', type: 'circle', source: 'gr-pgi',
    layout: { visibility: showPgi.value ? 'visible' : 'none' },
    paint: { 'circle-radius': 7, 'circle-color': '#FFB020', 'circle-stroke-color': '#ffffff', 'circle-stroke-width': 2 } })
  map.addLayer({ id: 'gr-pgi-label', type: 'symbol', source: 'gr-pgi',
    layout: { visibility: showPgi.value ? 'visible' : 'none', 'text-field': ['get', 'name'], 'text-size': 11, 'text-offset': [0, 1.2], 'text-anchor': 'top', 'text-optional': true },
    paint: { 'text-color': '#ffffff', 'text-halo-color': 'rgba(0,0,0,0.85)', 'text-halo-width': 1.5 },
    minzoom: 6.5 })
  map.on('click', 'gr-pgi-circle', e => {
    const f = e.features && e.features[0]
    if (f) selectPgi(f.properties.id, false)
  })
  map.on('mouseenter', 'gr-pgi-circle', () => { map.getCanvas().style.cursor = 'pointer' })
  map.on('mouseleave', 'gr-pgi-circle', () => { map.getCanvas().style.cursor = '' })
}

function addPdoLayers(geojson) {
  const colorMatch = ['match', ['get', 'group'],
    ...GROUPS.flatMap(g => [g.key, g.color]), '#888']
  map.addSource('gr-pdo', { type: 'geojson', data: geojson })
  map.addLayer({ id: 'gr-fill', type: 'fill', source: 'gr-pdo',
    paint: { 'fill-color': colorMatch, 'fill-opacity': 0.42 } })
  map.addLayer({ id: 'gr-outline', type: 'line', source: 'gr-pdo',
    paint: { 'line-color': '#ffffff', 'line-width': 1.5, 'line-opacity': 0.9 } })

  map.on('click', 'gr-fill', e => {
    if (map.getLayer('gr-pgi-circle') && map.queryRenderedFeatures(e.point, { layers: ['gr-pgi-circle'] }).length) return
    const hits = e.features || []
    if (!hits.length) return
    // 重疊時選面積最小者（最具體的 PDO）
    const best = hits.reduce((a, b) => (a.properties.area_km2 <= b.properties.area_km2 ? a : b))
    selectById(best.properties.id, false)
  })
  addPgiLayers()
  map.on('mouseenter', 'gr-fill', () => { map.getCanvas().style.cursor = 'pointer' })
  map.on('mouseleave', 'gr-fill', () => { map.getCanvas().style.cursor = '' })
}

async function initMap(retry = 0) {
  try {
    if (!mapboxgl.supported()) {
      mapError.value = gt('您的瀏覽器不支援 WebGL，請更新瀏覽器或開啟硬體加速後重試')
      return
    }
    if (!mapContainer.value) {
      if (retry < 5) { setTimeout(() => initMap(retry + 1), 200); return }
      mapError.value = gt('無法獲取地圖容器')
      return
    }
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [23.5, 38.2],
      zoom: 5.6
    })
    map.on('load', async () => {
      map.resize()
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')
      map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
      map.fitBounds(HOME_BOUNDS, { padding: 30, duration: 0 })
      try {
        const res = await fetch('/greece/greece_pdo.geojson')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const geojson = await res.json()
        features.value = geojson.features
        addPdoLayers(geojson)
      } catch (err) {
        mapError.value = gt('產區邊界載入失敗: {m}', { m: err.message })
      }
      mapReady.value = true
      if (props.initialRegion?.id) selectById(props.initialRegion.id)
    })
    map.on('error', e => { if (!mapReady.value) mapError.value = gt('地圖錯誤: {m}', { m: e.error?.message || '' }) })
  } catch (err) {
    mapError.value = gt('初始化失敗: {m}', { m: err.message })
  }
}

onMounted(async () => {
  globalGreeceAchievementManager.init()
  await nextTick()
  await initMap()
})

onUnmounted(() => {
  if (map) { map.remove(); map = null }
})
</script>

<style scoped>
.main-layout {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
}
.map-section { flex: 1; position: relative; height: 100%; overflow: hidden; }
.map { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
@media (max-width: 768px) {
  .main-layout, .map-section { height: 100dvh; min-height: 100svh; overscroll-behavior: none; }
}
.gr-legend {
  position: absolute; left: 12px; bottom: 72px; z-index: 5;
  background: rgba(255, 255, 255, 0.92); border-radius: 12px; padding: 10px 12px;
  font-size: 0.78rem; color: #1b2b3a; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: min(260px, calc(100vw - 24px));
}
.gr-legend-item { display: flex; align-items: center; gap: 6px; margin: 2px 0; }
.gr-legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.gr-legend-toggle { display: flex; align-items: center; gap: 6px; margin-top: 6px; cursor: pointer; }
.gr-pgi-dot { width: 10px; height: 10px; border-radius: 50%; background: #FFB020; border: 2px solid #fff; box-shadow: 0 0 0 1px #c98100; flex-shrink: 0; }
.gr-legend-hint { margin-top: 6px; font-size: 0.7rem; color: #5b6b7a; line-height: 1.35; }
.layer-panel-wrapper { position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%); z-index: 46; }
.map-error {
  position: absolute; top: 70px; left: 50%; transform: translateX(-50%); z-index: 20;
  background: #b3261e; color: #fff; padding: 8px 14px; border-radius: 10px; font-size: 0.85rem;
}

.gr-climate {
  position: absolute; left: 12px; right: 12px; bottom: 72px; z-index: 6; margin: 0 auto;
  max-width: 460px; background: rgba(255, 255, 255, 0.95); border-radius: 14px; padding: 10px 12px 8px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.28); color: #1b2b3a;
}
.grc-tabs { display: flex; gap: 6px; margin-bottom: 8px; }
.grc-tab { flex: 1; border: 1px solid #c9d6e2; background: #f3f7fb; border-radius: 8px; padding: 5px 4px; font-size: 0.78rem; cursor: pointer; color: #1b2b3a; }
.grc-tab.active { background: #0D5EAF; border-color: #0D5EAF; color: #fff; }
.grc-head { display: flex; align-items: center; gap: 10px; }
.grc-year { font-size: 1.5rem; font-weight: 800; color: #0D5EAF; }
.grc-stats { flex: 1; min-width: 0; display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 8px; }
.grc-name { width: 100%; font-size: 0.78rem; font-weight: 700; }
.grc-val { font-size: 1.05rem; font-weight: 700; }
.grc-delta { font-size: 0.75rem; font-weight: 600; }
.grc-delta.warm { color: #c0392b; }
.grc-delta.cool { color: #2a6fb0; }
.grc-close { border: 0; background: none; font-size: 1rem; cursor: pointer; color: #667; }
.grc-slider { width: 100%; margin: 6px 0 0; accent-color: #0D5EAF; }
.grc-axis { display: flex; justify-content: space-between; font-size: 0.68rem; color: #667; }
.grc-grad { height: 8px; border-radius: 4px; margin-top: 6px; }
.grc-grad-temp { background: linear-gradient(90deg, #4575b4, #abd9e9, #ffffbf, #fc8d59, #d73027); }
.grc-grad-sun { background: linear-gradient(90deg, #7851a9, #abd9e9, #fee048, #fd8d3c); }
.grc-grad-rain { background: linear-gradient(90deg, #fd8d3c, #ffffbf, #4a90e2, #2c3ea0); }
.grc-labels { display: flex; justify-content: space-between; font-size: 0.68rem; color: #445; margin-top: 2px; }
.grc-foot { margin-top: 5px; font-size: 0.64rem; color: #667; line-height: 1.35; }
.gr-climate-slide-enter-active, .gr-climate-slide-leave-active { transition: all 0.25s ease; }
.gr-climate-slide-enter-from, .gr-climate-slide-leave-to { opacity: 0; transform: translateY(12px); }
</style>
