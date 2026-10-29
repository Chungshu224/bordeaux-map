<template>
  <div class="main-layout">
    <section class="map-section">
      <RegionMapHeader
        :regionName="gt('朗格多克—魯西永')"
        :title="gt('🇫🇷 朗格多克—魯西永葡萄酒產區地圖（{n} 個示意點）', { n: POINT_REF.length })"
        icon="🇫🇷"
        @back="emits('back-to-course')"
      />

      <RegionMapInfoPanel
        v-if="mapReady"
        :info="unifiedInfo"
        :theme-color="activeColor"
        :audio-available="!!audioName"
        :is-playing-audio="isPlayingAudio"
        @play-audio="playPronunciation"
        :collapsed="infoBarCollapsed"
        @toggle-collapse="infoBarCollapsed = !infoBarCollapsed"
        @reset="resetMap"
      />

      <div ref="mapContainer" class="map"></div>

      <div v-if="mapReady && !activePoint && !climateEnabled" class="lg-legend">
        <div class="lg-legend-title">{{ gt('產區群分色') }}</div>
        <div v-for="z in ZONES" :key="z.key" class="lg-legend-item">
          <span class="lg-legend-dot" :style="{ background: z.color }"></span>
          {{ gt(z.label) }}
        </div>
        <label class="lg-tier-row">
          <input type="checkbox" v-model="showPoints" @change="applyTierVisibility" />
          <span class="lg-pt-dot"></span> {{ gt('示意點（{n}）', { n: POINT_REF.length }) }}
        </label>
        <div class="lg-legend-hint">{{ gt('點擊示意點查看資訊。目前沒有可公開使用的 AOC 邊界資料，圓點位置為主要城鎮或村莊的概略座標，不是官方邊界。') }}</div>
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
        :info-open="!!activePoint && !infoBarCollapsed"
        @action="handleMobileAction"
      />

      <transition name="lg-climate-slide">
        <div v-if="climateEnabled && climateData" class="lg-climate">
          <div class="atc-tabs">
            <button v-for="ind in CLIMATE_INDICATORS" :key="ind.id"
              :class="['atc-tab', { active: climateIndicator === ind.id }]"
              @click="setClimateIndicator(ind.id)">{{ ind.icon }} {{ gt(ind.label) }}</button>
          </div>
          <div class="atc-head">
            <span class="atc-year">{{ climateYear }}</span>
            <div class="atc-stats">
              <div v-if="climateActiveLabel" class="atc-name">{{ climateActiveLabel }}</div>
              <span v-if="currentValue !== null" class="atc-val">{{ currentValue }}{{ cfg.unit }}</span>
              <span v-if="currentDelta !== null" :class="['atc-delta', currentDelta >= 0 ? 'warm' : 'cool']">
                {{ currentDelta >= 0 ? '+' : '' }}{{ currentDelta }}{{ cfg.unit }} {{ gt('vs 基準') }}
              </span>
            </div>
            <button class="atc-close" @click="toggleClimate" :title="gt('關閉氣候圖層')">✕</button>
          </div>
          <div v-if="climateNote" class="atc-note">{{ gt(climateNote) }}</div>
          <input class="atc-slider" type="range" v-model.number="climateYear"
            :min="climateYears[0]" :max="climateYears[climateYears.length - 1]" step="1"
            @input="applyClimateColor" />
          <div class="atc-axis">
            <span>{{ climateYears[0] }}</span>
            <span>{{ climateYears[Math.floor(climateYears.length / 2)] }}</span>
            <span>{{ climateYears[climateYears.length - 1] }}</span>
          </div>
          <div class="atc-legend">
            <div :class="['atc-grad', `atc-grad-${climateIndicator}`]"></div>
            <div class="atc-labels">
              <span>{{ currentStats ? currentStats.min.toFixed(0) : '' }}{{ cfg.unit }} {{ gt(cfg.lowLabel) }}</span>
              <span>{{ gt(cfg.highLabel) }} {{ currentStats ? currentStats.max.toFixed(0) : '' }}{{ cfg.unit }}</span>
            </div>
          </div>
          <div class="atc-foot">📊 {{ gt(cfg.footnote) }}</div>
        </div>
      </transition>

      <div v-if="mapError" class="map-error">{{ mapError }}</div>
    </section>

    <RegionMapAppellationDrawer
      v-model:open="drawerOpen"
      :region-name="gt('朗格多克—魯西永')"
      :grouped="groupedDrawer"
      :search="search"
      :active-id="activePoint ? activePoint.id : ''"
      @update:search="search = $event"
      @select="onDrawerSelect"
    />
  </div>
</template>

<script setup>
import { gt } from '../../locales/languedocUi/index.js'
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import {
  RegionMapHeader, RegionMapLayerPanel, RegionMapInfoPanel,
  RegionMapAppellationDrawer, RegionMapMobileToolbar
} from '../shared/regionMap/index.js'
import { globalLanguedocAchievementManager } from '../../stores/languedocAchievementSystem.js'
import { POINT_REF, POINT_NOTES } from '../../data/languedoc/pointRef.js'

const props = defineProps({ initialRegion: { type: Object, default: null } })
const emits = defineEmits(['back-to-course'])

// 四個產區群分色（與課程、遊戲一致）
const ZONES = [
  { key: 'west',       label: '西部（Aude 與 Limoux）',   color: '#B03A3A' },
  { key: 'east',       label: '中東部（Hérault 與沿海）', color: '#2E7DAF' },
  { key: 'roussillon', label: '魯西永（乾型酒）',         color: '#D4812B' },
  { key: 'vdn',        label: '魯西永（VDN）',            color: '#7B3FA0' }
]
const KIND_LABEL = { aoc: 'AOC／AOP', sub: '子區／村莊級／DGC' }
const ZONE_BY_KEY = Object.fromEntries(ZONES.map(z => [z.key, z]))
const HOME_BOUNDS = [[1.9, 42.35], [4.3, 43.95]]

const mapContainer = ref(null)
const mapReady = ref(false)
const mapError = ref(null)
const is3D = ref(false)
const contoursEnabled = ref(false)
const infoBarCollapsed = ref(true)
const drawerOpen = ref(false)
const showLayerPanel = ref(false)
const search = ref('')
const activePoint = ref(null)
const climateEnabled = ref(false)
const climateData = ref(null)
const climateYears = ref([])
const climateYear = ref(2025)
const climateIndicator = ref('temp')
const climateStats = ref({})
const showPoints = ref(true)
let map = null
let contoursInitialized = false

const CLIMATE_INDICATORS = [
  { id: 'temp', icon: '🌡', label: '生長季均溫', unit: '°C', lowLabel: '涼', highLabel: '熱', dataKey: 'temps', baselineKey: 'baseline', statsKey: 'global', digits: 1,
    footnote: '4–10 月（北半球生長季）日均溫平均｜基準 1981–2010｜Open-Meteo（以示意點座標取值，約 10 公里網格；鄰近點常共用同一格，僅供區域比較）' },
  { id: 'sun', icon: '☀️', label: '日照時數', unit: 'h', lowLabel: '少', highLabel: '多', dataKey: 'sun', baselineKey: 'baselineSun', statsKey: 'globalSun', digits: 0,
    footnote: '4–10 月日照時數總和｜基準 1981–2010｜Open-Meteo（示意點取值，僅供區域比較）' },
  { id: 'rain', icon: '🌧', label: '降雨量', unit: 'mm', lowLabel: '乾', highLabel: '濕', dataKey: 'rain', baselineKey: 'baselineRain', statsKey: 'globalRain', digits: 0,
    footnote: '4–10 月降雨量總和｜基準 1981–2010｜Open-Meteo（示意點取值，僅供區域比較）' }
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
  const id = activePoint.value?.id
  if (id) { const v = climateOf(id); return v == null ? null : Number(v.toFixed(cfg.value.digits)) }
  const vals = Object.keys(climateData.value || {}).map(climateOf).filter(v => v != null)
  return vals.length ? Number((vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(cfg.value.digits)) : null
})
const currentDelta = computed(() => {
  const id = activePoint.value?.id
  if (!id) return null
  const v = climateOf(id)
  const base = climateData.value?.[id]?.[cfg.value.baselineKey]
  if (v == null || base == null) return null
  return Number((v - base).toFixed(cfg.value.id === 'temp' ? 2 : 0))
})
const climateActiveLabel = computed(() => activePoint.value ? activePoint.value.name : gt('朗格多克—魯西永 {n} 個示意點平均', { n: Object.keys(climateData.value || {}).length }))
const climateNote = computed(() => '')

function valueToColor(v) {
  const st = currentStats.value
  if (!st) return '#ffffbf'
  const { min, max, mean } = st
  const id = climateIndicator.value
  const span = Math.max(max - min, 0.0001)
  // 以資料自身的範圍分段（各項指標的尺度與其他產區不同，不沿用固定偏移）
  const q = frac => min + span * frac
  const stops = id === 'sun'
    ? [[min, [120, 81, 169]], [q(0.35), [171, 217, 233]], [q(0.7), [254, 224, 72]], [max, [253, 141, 60]]]
    : id === 'rain'
      ? [[min, [253, 141, 60]], [q(0.3), [255, 255, 191]], [q(0.65), [74, 144, 226]], [max, [44, 62, 160]]]
      : [[min, [69, 117, 180]], [q(0.25), [171, 217, 233]], [mean, [255, 255, 191]], [q(0.75), [252, 141, 89]], [max, [215, 48, 39]]]
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
    const res = await fetch('/data/languedoc-climate.json')
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

const zoneColorExpr = () => ['match', ['get', 'zone'], ...ZONES.flatMap(z => [z.key, z.color]), '#888']

function applyClimateColor() {
  if (!map || !map.getLayer('lg-pt-circle')) return
  let expr = zoneColorExpr()
  if (climateEnabled.value && climateData.value) {
    expr = ['match', ['get', 'id']]
    for (const p of POINT_REF) {
      const v = climateOf(p.id)
      expr.push(p.id, v == null ? '#cccccc' : valueToColor(v))
    }
    expr.push('#cccccc')
  }
  map.setPaintProperty('lg-pt-circle', 'circle-color', expr)
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

const activeColor = computed(() => ZONE_BY_KEY[activePoint.value?.zone]?.color || '#9C4A1A')

const unifiedInfo = computed(() => {
  const g = activePoint.value
  if (!g) return null
  return {
    name: g.name,
    originalName: g.parent ? gt('屬於 {p}', { p: gt(g.parent) }) : '',
    badges: [{ label: gt('示意點') }, ...(g.styles || []).map(s => ({ label: gt(s) }))],
    meta: [
      { label: gt('產區群'), value: gt(ZONE_BY_KEY[g.zone]?.label || '') },
      { label: gt('產地層級'), value: gt(KIND_LABEL[g.kind] || '') },
      ...(g.year ? [{ label: gt('年份'), value: g.year }] : []),
      { label: gt('位置'), value: gt('示意點，非官方邊界') }
    ],
    grapes: (g.grapes || []).map(x => gt(x)),
    description: `${gt(g.notes)} ${gt(POINT_NOTES)}`
  }
})

const groupedDrawer = computed(() => {
  const q = search.value.trim().toLowerCase()
  const match = p => !q || p.name.toLowerCase().includes(q)
  const item = p => ({ id: p.id, name: p.name, type: p.zone, styles: p.styles || [] })
  return ZONES
    .map(z => ({
      key: z.key,
      label: gt(z.label),
      items: POINT_REF.filter(p => p.zone === z.key).filter(match).map(item).sort((a, b) => a.name.localeCompare(b.name))
    }))
    .filter(g => g.items.length)
})

function selectPoint(id, fly = true) {
  const g = POINT_REF.find(p => p.id === id)
  if (!g) return
  activePoint.value = g
  infoBarCollapsed.value = false
  globalLanguedocAchievementManager.recordRegionExplored(g.id, g.zone, g.tier)
  if (!map) return
  applyHighlight()
  if (fly) map.flyTo({ center: g.lngLat, zoom: Math.max(map.getZoom(), 10), duration: 900 })
}

function selectById(id, fly = true) {
  selectPoint(id, fly)
}

function onDrawerSelect(item) {
  if (!showPoints.value) { showPoints.value = true; applyTierVisibility() }
  selectById(item.id)
  drawerOpen.value = false
}

function applyHighlight() {
  if (!map || !map.getLayer('lg-pt-circle')) return
  const pid = activePoint.value?.id
  map.setPaintProperty('lg-pt-circle', 'circle-radius', pid ? ['case', ['==', ['get', 'id'], pid], 12, 7] : 8)
}

function applyTierVisibility() {
  if (!map) return
  const pv = showPoints.value ? 'visible' : 'none'
  for (const id of ['lg-pt-circle', 'lg-pt-label']) if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', pv)
}

// ── 播放發音（檔名＝產區名稱，見 /languedoc/sounds）──────────────
// 目前沒有朗格多克—魯西永產區發音檔，不顯示播放鈕（日後補檔後改回 activePoint.value?.name）
const audioName = computed(() => '')
const isPlayingAudio = ref(false)
let currentAudio = null
function playPronunciation() {
  if (!audioName.value) return
  if (currentAudio) { currentAudio.pause(); currentAudio = null }
  currentAudio = new Audio(`/languedoc/sounds/${encodeURIComponent(audioName.value)}.mp3`)
  isPlayingAudio.value = true
  currentAudio.play().catch(() => { isPlayingAudio.value = false })
  currentAudio.onended = () => { isPlayingAudio.value = false; currentAudio = null }
  currentAudio.onerror = () => { isPlayingAudio.value = false; currentAudio = null }
}

function resetMap() {
  activePoint.value = null
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
  map.addSource('lg-contours', { type: 'vector', url: 'mapbox://mapbox.mapbox-terrain-v2' })
  map.addLayer({
    id: 'lg-contours-line', type: 'line', source: 'lg-contours', 'source-layer': 'contour',
    layout: { 'line-join': 'round', 'line-cap': 'round', visibility: 'none' },
    paint: {
      'line-color': ['case', ['==', ['%', ['to-number', ['get', 'ele']], 100], 0], '#FFD700', '#FF9955'],
      'line-width': ['interpolate', ['linear'], ['zoom'], 9, 0.4, 13, 1.2, 16, 2],
      'line-opacity': ['interpolate', ['linear'], ['zoom'], 9, 0.4, 13, 0.8]
    },
    minzoom: 9
  })
  map.addLayer({
    id: 'lg-contour-labels', type: 'symbol', source: 'lg-contours', 'source-layer': 'contour',
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
  for (const id of ['lg-contours-line', 'lg-contour-labels']) {
    if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', vis)
  }
}

function handleMobileAction(action) {
  if (action === 'aoc') { drawerOpen.value = !drawerOpen.value; showLayerPanel.value = false }
  else if (action === 'layer') { showLayerPanel.value = !showLayerPanel.value; drawerOpen.value = false }
  else if (action === '3d') toggle3D()
  else if (action === 'info') infoBarCollapsed.value = !infoBarCollapsed.value
}

function addPointLayers() {
  map.addSource('lg-pt', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: POINT_REF.map(p => ({
        type: 'Feature',
        properties: { id: p.id, name: p.name, kind: p.kind, zone: p.zone },
        geometry: { type: 'Point', coordinates: p.lngLat }
      }))
    }
  })
  map.addLayer({ id: 'lg-pt-circle', type: 'circle', source: 'lg-pt',
    paint: {
      'circle-radius': 8,
      'circle-color': zoneColorExpr(),
      'circle-stroke-color': '#ffffff', 'circle-stroke-width': 2
    } })
  map.addLayer({ id: 'lg-pt-label', type: 'symbol', source: 'lg-pt',
    layout: { 'text-field': ['get', 'name'], 'text-size': 11, 'text-offset': [0, 1.2], 'text-anchor': 'top', 'text-optional': true },
    paint: { 'text-color': '#ffffff', 'text-halo-color': 'rgba(0,0,0,0.85)', 'text-halo-width': 1.5 },
    minzoom: 7 })
  map.on('mouseenter', 'lg-pt-circle', () => { map.getCanvas().style.cursor = 'pointer' })
  map.on('mouseleave', 'lg-pt-circle', () => { map.getCanvas().style.cursor = '' })
  map.on('click', e => {
    if (!showPoints.value) return
    const pts = map.queryRenderedFeatures(e.point, { layers: ['lg-pt-circle'] })
    if (pts.length) selectPoint(pts[0].properties.id, false)
  })
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
      center: [3.0, 43.2],
      zoom: 7
    })
    map.on('load', () => {
      map.resize()
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')
      map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
      map.fitBounds(HOME_BOUNDS, { padding: 30, duration: 0 })
      addPointLayers()
      mapReady.value = true
      if (props.initialRegion?.id) selectById(props.initialRegion.id)
    })
    map.on('error', e => { if (!mapReady.value) mapError.value = gt('地圖錯誤: {m}', { m: e.error?.message || '' }) })
  } catch (err) {
    mapError.value = gt('初始化失敗: {m}', { m: err.message })
  }
}

onMounted(async () => {
  globalLanguedocAchievementManager.init()
  await nextTick()
  await initMap()
})

onUnmounted(() => {
  if (currentAudio) { currentAudio.pause(); currentAudio = null }
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
.lg-legend {
  position: absolute; left: 12px; bottom: 72px; z-index: 5;
  background: rgba(255, 255, 255, 0.92); border-radius: 12px; padding: 10px 12px;
  font-size: 0.78rem; color: #1b2b3a; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: min(260px, calc(100vw - 24px));
}
.lg-legend-item { display: flex; align-items: center; gap: 6px; margin: 2px 0; }
.lg-legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.lg-legend-toggle { display: flex; align-items: center; gap: 6px; margin-top: 6px; cursor: pointer; }
.lg-pt-dot { width: 10px; height: 10px; border-radius: 50%; background: #FFB020; border: 2px solid #fff; box-shadow: 0 0 0 1px #c98100; flex-shrink: 0; }
.lg-legend-hint { margin-top: 6px; font-size: 0.7rem; color: #5b6b7a; line-height: 1.35; }
.layer-panel-wrapper { position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%); z-index: 46; }
.map-error {
  position: absolute; top: 70px; left: 50%; transform: translateX(-50%); z-index: 20;
  background: #b3261e; color: #fff; padding: 8px 14px; border-radius: 10px; font-size: 0.85rem;
}

.lg-climate {
  position: absolute; left: 12px; right: 12px; bottom: 72px; z-index: 6; margin: 0 auto;
  max-width: 460px; background: rgba(255, 255, 255, 0.95); border-radius: 14px; padding: 10px 12px 8px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.28); color: #1b2b3a;
}
.atc-tabs { display: flex; gap: 6px; margin-bottom: 8px; }
.atc-tab { flex: 1; border: 1px solid #c9d6e2; background: #f3f7fb; border-radius: 8px; padding: 5px 4px; font-size: 0.78rem; cursor: pointer; color: #1b2b3a; }
.atc-tab.active { background: #9C4A1A; border-color: #9C4A1A; color: #fff; }
.atc-head { display: flex; align-items: center; gap: 10px; }
.atc-year { font-size: 1.5rem; font-weight: 800; color: #9C4A1A; }
.atc-stats { flex: 1; min-width: 0; display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 8px; }
.atc-name { width: 100%; font-size: 0.78rem; font-weight: 700; }
.atc-val { font-size: 1.05rem; font-weight: 700; }
.atc-delta { font-size: 0.75rem; font-weight: 600; }
.atc-delta.warm { color: #c0392b; }
.atc-delta.cool { color: #2a6fb0; }
.atc-close { border: 0; background: none; font-size: 1rem; cursor: pointer; color: #667; }
.atc-slider { width: 100%; margin: 6px 0 0; accent-color: #9C4A1A; }
.atc-axis { display: flex; justify-content: space-between; font-size: 0.68rem; color: #667; }
.atc-grad { height: 8px; border-radius: 4px; margin-top: 6px; }
.atc-grad-temp { background: linear-gradient(90deg, #4575b4, #abd9e9, #ffffbf, #fc8d59, #d73027); }
.atc-grad-sun { background: linear-gradient(90deg, #7851a9, #abd9e9, #fee048, #fd8d3c); }
.atc-grad-rain { background: linear-gradient(90deg, #fd8d3c, #ffffbf, #4a90e2, #2c3ea0); }
.atc-labels { display: flex; justify-content: space-between; font-size: 0.68rem; color: #445; margin-top: 2px; }
.atc-foot { margin-top: 5px; font-size: 0.64rem; color: #667; line-height: 1.35; }
.lg-climate-slide-enter-active, .lg-climate-slide-leave-active { transition: all 0.25s ease; }
.lg-climate-slide-enter-from, .lg-climate-slide-leave-to { opacity: 0; transform: translateY(12px); }

.lg-tier-row { display: flex; align-items: center; gap: 6px; margin-top: 4px; cursor: pointer; }
.lg-tier-sw { width: 14px; height: 10px; border-radius: 2px; flex-shrink: 0; border: 1px solid rgba(0,0,0,0.25); }
.lg-legend-title { font-weight: 700; margin: 6px 0 2px; font-size: 0.74rem; color: #5C2A0E; }
.atc-note { margin-top: 4px; font-size: 0.7rem; color: #8a5a00; }
</style>
