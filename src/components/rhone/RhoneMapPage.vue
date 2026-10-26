<template>
  <div class="main-layout">
    <section class="map-section">
      <RegionMapHeader
        :regionName="gt('隆河')"
        :title="gt('🇫🇷 法國隆河葡萄酒產區地圖（26 個 AOC＋示意點）')"
        icon="🇫🇷"
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

      <div v-if="mapReady && !activeFeature && !activePoint && !climateEnabled" class="rh-legend">
        <div class="rh-legend-title">{{ gt('北／南分色') }}</div>
        <div v-for="z in ZONES" :key="z.key" class="rh-legend-item">
          <span class="rh-legend-dot" :style="{ background: z.color }"></span>
          {{ gt(z.label) }}
        </div>
        <div class="rh-legend-title">{{ gt('分級層（可疊加開關）') }}</div>
        <label v-for="t in TIERS" :key="t.key" class="rh-tier-row">
          <input type="checkbox" v-model="tierOn[t.key]" @change="applyTierVisibility" />
          <span class="rh-tier-sw" :style="{ background: t.swatch }"></span>
          {{ gt(t.label) }}（{{ countByTier[t.key] || 0 }}）
        </label>
        <label class="rh-tier-row">
          <input type="checkbox" v-model="showPoints" @change="applyTierVisibility" />
          <span class="rh-pt-dot"></span> {{ gt('示意點（{n}）', { n: POINT_REF.length }) }}
        </label>
        <div class="rh-legend-hint">{{ gt('點擊產區查看資訊；AOC 範圍為歐盟官方資料（CC0，2021 年前版本）。示意點僅為概略位置，非官方邊界。') }}</div>
        <div class="rh-legend-hint">{{ gt('範圍面積是法定劃界範圍，不是葡萄園種植面積。') }}</div>
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
        :info-open="!!(activeFeature || activePoint) && !infoBarCollapsed"
        @action="handleMobileAction"
      />

      <transition name="rh-climate-slide">
        <div v-if="climateEnabled && climateData" class="rh-climate">
          <div class="rhc-tabs">
            <button v-for="ind in CLIMATE_INDICATORS" :key="ind.id"
              :class="['rhc-tab', { active: climateIndicator === ind.id }]"
              @click="setClimateIndicator(ind.id)">{{ ind.icon }} {{ gt(ind.label) }}</button>
          </div>
          <div class="rhc-head">
            <span class="rhc-year">{{ climateYear }}</span>
            <div class="rhc-stats">
              <div v-if="climateActiveLabel" class="rhc-name">{{ climateActiveLabel }}</div>
              <span v-if="currentValue !== null" class="rhc-val">{{ currentValue }}{{ cfg.unit }}</span>
              <span v-if="currentDelta !== null" :class="['rhc-delta', currentDelta >= 0 ? 'warm' : 'cool']">
                {{ currentDelta >= 0 ? '+' : '' }}{{ currentDelta }}{{ cfg.unit }} {{ gt('vs 基準') }}
              </span>
            </div>
            <button class="rhc-close" @click="toggleClimate" :title="gt('關閉氣候圖層')">✕</button>
          </div>
          <div v-if="climateNote" class="rhc-note">{{ gt(climateNote) }}</div>
          <input class="rhc-slider" type="range" v-model.number="climateYear"
            :min="climateYears[0]" :max="climateYears[climateYears.length - 1]" step="1"
            @input="applyClimateColor" />
          <div class="rhc-axis">
            <span>{{ climateYears[0] }}</span>
            <span>{{ climateYears[Math.floor(climateYears.length / 2)] }}</span>
            <span>{{ climateYears[climateYears.length - 1] }}</span>
          </div>
          <div class="rhc-legend">
            <div :class="['rhc-grad', `rhc-grad-${climateIndicator}`]"></div>
            <div class="rhc-labels">
              <span>{{ currentStats ? currentStats.min.toFixed(0) : '' }}{{ cfg.unit }} {{ gt(cfg.lowLabel) }}</span>
              <span>{{ gt(cfg.highLabel) }} {{ currentStats ? currentStats.max.toFixed(0) : '' }}{{ cfg.unit }}</span>
            </div>
          </div>
          <div class="rhc-foot">📊 {{ gt(cfg.footnote) }}</div>
        </div>
      </transition>

      <div v-if="mapError" class="map-error">{{ mapError }}</div>
    </section>

    <RegionMapAppellationDrawer
      v-model:open="drawerOpen"
      :region-name="gt('隆河')"
      :grouped="groupedDrawer"
      :search="search"
      :active-id="activePoint ? activePoint.id : (activeFeature ? activeFeature.id : '')"
      @update:search="search = $event"
      @select="onDrawerSelect"
    />
  </div>
</template>

<script setup>
import { gt } from '../../locales/rhoneUi/index.js'
import { ref, reactive, computed, onMounted, onUnmounted, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import {
  RegionMapHeader, RegionMapLayerPanel, RegionMapInfoPanel,
  RegionMapAppellationDrawer, RegionMapMobileToolbar
} from '../shared/regionMap/index.js'
import { globalRhoneAchievementManager } from '../../stores/rhoneAchievementSystem.js'
import { POINT_REF, POINT_NOTES } from '../../data/rhone/pointRef.js'

const props = defineProps({ initialRegion: { type: Object, default: null } })
const emits = defineEmits(['back-to-course'])

// 北／南分色（Côtes du Rhône 跨兩部另用中性金色；其他 AOC 用灰藍）
const ZONES = [
  { key: 'north', label: '北隆河', color: '#7A2E5C' },
  { key: 'south', label: '南隆河（含 Villages）', color: '#D4812B' },
  { key: 'both',  label: 'Côtes du Rhône（跨南北）', color: '#C9A84A' },
  { key: 'outer', label: '其他 AOC（VDN、外圍名稱）', color: '#4F7C99' }
]
const ZONE_BY_KEY = Object.fromEntries(ZONES.map(z => [z.key, z]))
const ZONE_NAME = { north: '北隆河', south: '南隆河', both: '跨南北兩部', outer: '其他（外圍）' }
// 分級金字塔的四層（由大到小；cru 畫在最上面）
const TIERS = [
  { key: 'cru',      label: 'Cru（獨立 AOC）',              opacity: 0.62, line: 1.8, swatch: '#7A2E5C' },
  { key: 'villages', label: 'Côtes du Rhône Villages',      opacity: 0.4,  line: 1.4, swatch: '#D4812B' },
  { key: 'cdr',      label: 'Côtes du Rhône',               opacity: 0.26, line: 1.2, swatch: '#C9A84A' },
  { key: 'other',    label: '其他 AOC（VDN、外圍名稱）',   opacity: 0.45, line: 1.4, swatch: '#4F7C99' }
]
const TIER_BY_KEY = Object.fromEntries(TIERS.map(t => [t.key, t]))
const TIER_ORDER = ['cdr', 'villages', 'other', 'cru'] // 由底到頂
const HOME_BOUNDS = [[4.1, 43.55], [5.85, 45.65]]

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
const activePoint = ref(null)
const climateEnabled = ref(false)
const climateData = ref(null)
const climateYears = ref([])
const climateYear = ref(2025)
const climateIndicator = ref('temp')
const climateStats = ref({})
const tierOn = reactive({ cru: true, villages: true, cdr: true, other: true })
const showPoints = ref(true)
let map = null
let contoursInitialized = false

const countByTier = computed(() => {
  const m = {}
  for (const f of features.value) m[f.properties.tier] = (m[f.properties.tier] || 0) + 1
  return m
})

const CLIMATE_INDICATORS = [
  { id: 'temp', icon: '🌡', label: '夏季均溫', unit: '°C', lowLabel: '涼', highLabel: '熱', dataKey: 'temps', baselineKey: 'baseline', statsKey: 'global', digits: 1,
    footnote: '6–8 月日均溫平均｜基準 1981–2010｜Open-Meteo（以 AOC 範圍的代表點取值，約 10 公里網格；cru 面積小、鄰近範圍常共用同一格，僅供北／南區域比較）' },
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
const climateActiveLabel = computed(() => activeFeature.value ? activeFeature.value.name : gt('隆河 {n} 個 AOC 範圍平均', { n: Object.keys(climateData.value || {}).length }))
const climateNote = computed(() =>
  activeFeature.value?.tier === 'cdr' ? 'Côtes du Rhône 橫跨南北兩部，單一代表點沒有意義，不取氣候值（灰色）。' : '')

function valueToColor(v) {
  const st = currentStats.value
  if (!st) return '#ffffbf'
  const { min, max, mean } = st
  const id = climateIndicator.value
  const span = Math.max(max - min, 0.0001)
  // 以資料自身的範圍分段（隆河南北溫差、日照、雨量尺度與希臘不同，不沿用固定偏移）
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
    const res = await fetch('/data/rhone-climate.json')
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

function tierFillOpacity(tier, highlightId) {
  const base = climateEnabled.value ? 0.78 : TIER_BY_KEY[tier].opacity
  if (!highlightId) return base
  return ['case', ['==', ['get', 'id'], highlightId], climateEnabled.value ? 0.92 : Math.min(0.85, base + 0.25), climateEnabled.value ? 0.45 : base * 0.35]
}

function applyClimateColor() {
  if (!map || !map.getLayer('rh-fill-cru')) return
  let expr = zoneColorExpr()
  if (climateEnabled.value && climateData.value) {
    expr = ['match', ['get', 'id']]
    for (const f of features.value) {
      const v = climateOf(f.properties.id)
      expr.push(f.properties.id, v == null ? '#cccccc' : valueToColor(v))
    }
    expr.push('#cccccc')
  }
  for (const t of TIERS) {
    if (map.getLayer(`rh-fill-${t.key}`)) map.setPaintProperty(`rh-fill-${t.key}`, 'fill-color', expr)
  }
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

const activeColor = computed(() => {
  if (activePoint.value) return ZONE_BY_KEY[activePoint.value.zone]?.color || '#7A2E5C'
  if (activeFeature.value) return ZONE_BY_KEY[activeFeature.value.zone]?.color || '#7A2E5C'
  return '#7A2E5C'
})

// 範圍完全相同的 AOC（如 Clairette de Die 與 Crémant de Die）
function coLocated(f) {
  return features.value
    .map(x => x.properties)
    .filter(p => p.id !== f.id && p.area_km2 === f.area_km2 && p.zone === f.zone && p.tier === f.tier)
}

const unifiedInfo = computed(() => {
  const g = activePoint.value
  if (g) {
    return {
      name: g.name,
      originalName: g.parent ? gt('屬於 {p}', { p: gt(g.parent) }) : '',
      badges: [{ label: gt('示意點') }, ...(g.kind === 'cru' ? [{ label: 'Cru' }] : [])],
      meta: [
        { label: gt('區域'), value: gt(ZONE_NAME[g.zone] || '') },
        ...(g.year ? [{ label: gt('認定年份'), value: g.year }] : []),
        { label: gt('位置'), value: gt('示意點，非官方邊界') }
      ],
      grapes: (g.grapes || []).map(x => gt(x)),
      description: `${gt(g.notes)} ${gt(POINT_NOTES)}`
    }
  }
  const f = activeFeature.value
  if (!f) return null
  const others = coLocated(f)
  let description = gt(f.notes || '')
  if (others.length) description += gt(' 同一範圍另有：{list}。', { list: others.map(o => o.name).join(gt('、')) })
  const official = f.official && f.official !== f.name ? f.official : ''
  return {
    name: f.name,
    originalName: official,
    badges: [{ label: gt(TIER_BY_KEY[f.tier]?.label || '') }, ...(f.styles || []).map(s => ({ label: gt(s) }))],
    meta: [
      { label: gt('區域'), value: gt(ZONE_NAME[f.zone] || '') },
      ...(f.year ? [{ label: gt('認定年份'), value: gt(f.year) }] : []),
      { label: gt('範圍面積'), value: gt('約 {n} km²（法定劃界範圍）', { n: f.area_km2.toLocaleString() }) }
    ],
    grapes: (f.grapes || []).map(x => gt(x)),
    description
  }
})

const groupedDrawer = computed(() => {
  const q = search.value.trim().toLowerCase()
  const match = p => !q || p.name.toLowerCase().includes(q) || (p.official || '').toLowerCase().includes(q)
  const ps = features.value.map(x => x.properties)
  const item = p => ({ id: p.id, name: p.name, type: p.zone, styles: p.styles || [] })
  const pt = POINT_REF.filter(match)
  const groups = [
    { key: 'north', label: gt('北隆河 8 個 cru'), items: ps.filter(p => p.tier === 'cru' && p.zone === 'north').filter(match).sort((a, b) => a.name.localeCompare(b.name)).map(item) },
    { key: 'south', label: gt('南隆河 10 個 cru'), items: [
      ...ps.filter(p => p.tier === 'cru' && p.zone === 'south').filter(match).map(item),
      ...pt.filter(p => p.kind === 'cru').map(p => ({ id: p.id, name: p.name, type: p.zone, styles: p.styles || [] }))
    ].sort((a, b) => a.name.localeCompare(b.name)) },
    { key: 'pyramid', label: gt('金字塔底層（Villages、Côtes du Rhône）'), items: ps.filter(p => p.tier === 'villages' || p.tier === 'cdr').filter(match).map(item) },
    { key: 'other', label: gt('其他 AOC（VDN、外圍名稱）'), items: ps.filter(p => p.tier === 'other').filter(match).sort((a, b) => a.name.localeCompare(b.name)).map(item) },
    { key: 'ref', label: gt('細分區示意點（非官方邊界）'), items: pt.filter(p => p.kind === 'sub').map(p => ({ id: p.id, name: p.name, type: p.zone, styles: [] })) }
  ]
  return groups.filter(g => g.items.length)
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

function selectPoint(id, fly = true) {
  const g = POINT_REF.find(p => p.id === id)
  if (!g) return
  activeFeature.value = null
  activePoint.value = g
  infoBarCollapsed.value = false
  // Laudun 是獨立 cru，計入探索；Côte Blonde／Brune 與 Hermitage 分塊只是細分區，不計入
  if (g.kind === 'cru') globalRhoneAchievementManager.recordRegionExplored(g.id, g.zone, 'cru')
  if (!map) return
  applyHighlight()
  if (fly) map.flyTo({ center: g.lngLat, zoom: Math.max(map.getZoom(), g.kind === 'sub' ? 12 : 10), duration: 900 })
}

function selectById(id, fly = true) {
  if (String(id).startsWith('RH-PT-')) return selectPoint(id, fly)
  activePoint.value = null
  const feat = features.value.find(f => f.properties.id === id)
  if (!feat) return
  activeFeature.value = feat.properties
  infoBarCollapsed.value = false
  globalRhoneAchievementManager.recordRegionExplored(feat.properties.id, feat.properties.zone, feat.properties.tier)
  if (!map) return
  applyHighlight()
  if (fly) map.fitBounds(bboxOf(feat), { padding: 70, duration: 900, maxZoom: 11 })
}

function onDrawerSelect(item) {
  // 選到被關閉的分級層時自動打開，避免「選了卻看不到」
  const f = features.value.find(x => x.properties.id === item.id)
  if (f && !tierOn[f.properties.tier]) { tierOn[f.properties.tier] = true; applyTierVisibility() }
  if (String(item.id).startsWith('RH-PT-') && !showPoints.value) { showPoints.value = true; applyTierVisibility() }
  selectById(item.id)
  drawerOpen.value = false
}

function applyHighlight() {
  if (!map || !map.getLayer('rh-fill-cru')) return
  const id = activeFeature.value?.id
  for (const t of TIERS) {
    if (!map.getLayer(`rh-fill-${t.key}`)) continue
    map.setPaintProperty(`rh-fill-${t.key}`, 'fill-opacity', tierFillOpacity(t.key, id))
    map.setPaintProperty(`rh-line-${t.key}`, 'line-width', id
      ? ['case', ['==', ['get', 'id'], id], 3.5, t.line * 0.7]
      : t.line)
  }
  if (map.getLayer('rh-pt-circle')) {
    const pid = activePoint.value?.id
    map.setPaintProperty('rh-pt-circle', 'circle-radius', pid ? ['case', ['==', ['get', 'id'], pid], 10, 6] : 7)
  }
}

function applyTierVisibility() {
  if (!map) return
  for (const t of TIERS) {
    const vis = tierOn[t.key] ? 'visible' : 'none'
    for (const pre of ['rh-fill-', 'rh-line-']) if (map.getLayer(pre + t.key)) map.setLayoutProperty(pre + t.key, 'visibility', vis)
  }
  const pv = showPoints.value ? 'visible' : 'none'
  for (const id of ['rh-pt-circle', 'rh-pt-label']) if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', pv)
}

function resetMap() {
  activeFeature.value = null
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
  map.addSource('rh-contours', { type: 'vector', url: 'mapbox://mapbox.mapbox-terrain-v2' })
  map.addLayer({
    id: 'rh-contours-line', type: 'line', source: 'rh-contours', 'source-layer': 'contour',
    layout: { 'line-join': 'round', 'line-cap': 'round', visibility: 'none' },
    paint: {
      'line-color': ['case', ['==', ['%', ['to-number', ['get', 'ele']], 100], 0], '#FFD700', '#FF9955'],
      'line-width': ['interpolate', ['linear'], ['zoom'], 9, 0.4, 13, 1.2, 16, 2],
      'line-opacity': ['interpolate', ['linear'], ['zoom'], 9, 0.4, 13, 0.8]
    },
    minzoom: 9
  })
  map.addLayer({
    id: 'rh-contour-labels', type: 'symbol', source: 'rh-contours', 'source-layer': 'contour',
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
  for (const id of ['rh-contours-line', 'rh-contour-labels']) {
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
  map.addSource('rh-pt', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: POINT_REF.map(p => ({
        type: 'Feature',
        properties: { id: p.id, name: p.name, kind: p.kind },
        geometry: { type: 'Point', coordinates: p.lngLat }
      }))
    }
  })
  map.addLayer({ id: 'rh-pt-circle', type: 'circle', source: 'rh-pt',
    paint: {
      'circle-radius': 7,
      'circle-color': ['case', ['==', ['get', 'kind'], 'cru'], '#FFB020', '#ffffff'],
      'circle-stroke-color': '#4A1738', 'circle-stroke-width': 2
    } })
  map.addLayer({ id: 'rh-pt-label', type: 'symbol', source: 'rh-pt',
    layout: { 'text-field': ['get', 'name'], 'text-size': 11, 'text-offset': [0, 1.2], 'text-anchor': 'top', 'text-optional': true },
    paint: { 'text-color': '#ffffff', 'text-halo-color': 'rgba(0,0,0,0.85)', 'text-halo-width': 1.5 },
    minzoom: 7.5 })
  map.on('mouseenter', 'rh-pt-circle', () => { map.getCanvas().style.cursor = 'pointer' })
  map.on('mouseleave', 'rh-pt-circle', () => { map.getCanvas().style.cursor = '' })
}

function addPdoLayers(geojson) {
  map.addSource('rh-pdo', { type: 'geojson', data: geojson })
  for (const key of TIER_ORDER) {
    const t = TIER_BY_KEY[key]
    map.addLayer({ id: `rh-fill-${key}`, type: 'fill', source: 'rh-pdo', filter: ['==', ['get', 'tier'], key],
      paint: { 'fill-color': zoneColorExpr(), 'fill-opacity': t.opacity } })
    map.addLayer({ id: `rh-line-${key}`, type: 'line', source: 'rh-pdo', filter: ['==', ['get', 'tier'], key],
      paint: { 'line-color': '#ffffff', 'line-width': t.line, 'line-opacity': 0.9 } })
  }
  addPointLayers()

  // 單一點擊處理：先看示意點，再看各分級層重疊時面積最小者（最具體的 AOC）
  map.on('click', e => {
    if (showPoints.value) {
      const pts = map.queryRenderedFeatures(e.point, { layers: ['rh-pt-circle'] })
      if (pts.length) return selectPoint(pts[0].properties.id, false)
    }
    const layers = TIERS.filter(t => tierOn[t.key]).map(t => `rh-fill-${t.key}`).filter(id => map.getLayer(id))
    if (!layers.length) return
    const hits = map.queryRenderedFeatures(e.point, { layers })
    if (!hits.length) return
    const best = hits.reduce((a, b) => (a.properties.area_km2 <= b.properties.area_km2 ? a : b))
    selectById(best.properties.id, false)
  })
  for (const t of TIERS) {
    map.on('mouseenter', `rh-fill-${t.key}`, () => { map.getCanvas().style.cursor = 'pointer' })
    map.on('mouseleave', `rh-fill-${t.key}`, () => { map.getCanvas().style.cursor = '' })
  }
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
      center: [4.9, 44.6],
      zoom: 6.6
    })
    map.on('load', async () => {
      map.resize()
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')
      map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
      map.fitBounds(HOME_BOUNDS, { padding: 30, duration: 0 })
      try {
        const res = await fetch('/rhone/rhone_pdo.geojson')
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
  globalRhoneAchievementManager.init()
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
.rh-legend {
  position: absolute; left: 12px; bottom: 72px; z-index: 5;
  background: rgba(255, 255, 255, 0.92); border-radius: 12px; padding: 10px 12px;
  font-size: 0.78rem; color: #1b2b3a; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: min(260px, calc(100vw - 24px));
}
.rh-legend-item { display: flex; align-items: center; gap: 6px; margin: 2px 0; }
.rh-legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.rh-legend-toggle { display: flex; align-items: center; gap: 6px; margin-top: 6px; cursor: pointer; }
.rh-pt-dot { width: 10px; height: 10px; border-radius: 50%; background: #FFB020; border: 2px solid #fff; box-shadow: 0 0 0 1px #c98100; flex-shrink: 0; }
.rh-legend-hint { margin-top: 6px; font-size: 0.7rem; color: #5b6b7a; line-height: 1.35; }
.layer-panel-wrapper { position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%); z-index: 46; }
.map-error {
  position: absolute; top: 70px; left: 50%; transform: translateX(-50%); z-index: 20;
  background: #b3261e; color: #fff; padding: 8px 14px; border-radius: 10px; font-size: 0.85rem;
}

.rh-climate {
  position: absolute; left: 12px; right: 12px; bottom: 72px; z-index: 6; margin: 0 auto;
  max-width: 460px; background: rgba(255, 255, 255, 0.95); border-radius: 14px; padding: 10px 12px 8px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.28); color: #1b2b3a;
}
.rhc-tabs { display: flex; gap: 6px; margin-bottom: 8px; }
.rhc-tab { flex: 1; border: 1px solid #c9d6e2; background: #f3f7fb; border-radius: 8px; padding: 5px 4px; font-size: 0.78rem; cursor: pointer; color: #1b2b3a; }
.rhc-tab.active { background: #7A2E5C; border-color: #7A2E5C; color: #fff; }
.rhc-head { display: flex; align-items: center; gap: 10px; }
.rhc-year { font-size: 1.5rem; font-weight: 800; color: #7A2E5C; }
.rhc-stats { flex: 1; min-width: 0; display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 8px; }
.rhc-name { width: 100%; font-size: 0.78rem; font-weight: 700; }
.rhc-val { font-size: 1.05rem; font-weight: 700; }
.rhc-delta { font-size: 0.75rem; font-weight: 600; }
.rhc-delta.warm { color: #c0392b; }
.rhc-delta.cool { color: #2a6fb0; }
.rhc-close { border: 0; background: none; font-size: 1rem; cursor: pointer; color: #667; }
.rhc-slider { width: 100%; margin: 6px 0 0; accent-color: #7A2E5C; }
.rhc-axis { display: flex; justify-content: space-between; font-size: 0.68rem; color: #667; }
.rhc-grad { height: 8px; border-radius: 4px; margin-top: 6px; }
.rhc-grad-temp { background: linear-gradient(90deg, #4575b4, #abd9e9, #ffffbf, #fc8d59, #d73027); }
.rhc-grad-sun { background: linear-gradient(90deg, #7851a9, #abd9e9, #fee048, #fd8d3c); }
.rhc-grad-rain { background: linear-gradient(90deg, #fd8d3c, #ffffbf, #4a90e2, #2c3ea0); }
.rhc-labels { display: flex; justify-content: space-between; font-size: 0.68rem; color: #445; margin-top: 2px; }
.rhc-foot { margin-top: 5px; font-size: 0.64rem; color: #667; line-height: 1.35; }
.rh-climate-slide-enter-active, .rh-climate-slide-leave-active { transition: all 0.25s ease; }
.rh-climate-slide-enter-from, .rh-climate-slide-leave-to { opacity: 0; transform: translateY(12px); }

.rh-tier-row { display: flex; align-items: center; gap: 6px; margin-top: 4px; cursor: pointer; }
.rh-tier-sw { width: 14px; height: 10px; border-radius: 2px; flex-shrink: 0; border: 1px solid rgba(0,0,0,0.25); }
.rh-legend-title { font-weight: 700; margin: 6px 0 2px; font-size: 0.74rem; color: #4A1738; }
.rhc-note { margin-top: 4px; font-size: 0.7rem; color: #8a5a00; }
</style>
