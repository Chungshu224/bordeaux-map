<template>
  <div class="main-layout">
    <section class="map-section">
      <RegionMapHeader
        :regionName="gt('香檳')"
        :title="gt('🥂 香檳村莊地圖（Grand Cru／Premier Cru）')"
        icon="🥂"
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

      <div v-if="mapReady && !activeFeature && !climateEnabled" class="ch-legend">
        <div v-for="g in GRADES" :key="g.key" class="ch-legend-item">
          <span class="ch-legend-dot" :style="{ background: g.color }"></span>
          {{ gt(g.label) }}（{{ countByGrade[g.key] || 0 }}）
        </div>
        <div class="ch-legend-chips">
          <button v-for="t in SUB_TABS" :key="t.value" :class="['ch-chip', { active: subFilter === t.value }]"
            @click="setSubFilter(t.value)">{{ gt(t.label) }}</button>
        </div>
        <div v-if="simpleMode" class="ch-legend-hint ch-warn">{{ gt('簡易版：村莊邊界或清單取得失敗，目前只顯示香檳 AOC 的示意範圍與 Grand Cru 示意點，非官方邊界。') }}</div>
        <div v-else class="ch-legend-hint">{{ gt('點擊村莊查看資訊。分級依 INAO 規格（17 個 Grand Cru＋42 個 Premier Cru）；其餘村莊官方未公布 Échelle 百分比。邊界為 IGN Admin Express 衍生資料；產區歸類為近似分法，非 AOC 法定分區。') }}</div>
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
        :info-open="!!activeFeature && !infoBarCollapsed"
        @action="handleMobileAction"
      />

      <transition name="ch-climate-slide">
        <div v-if="climateEnabled && climateData" class="ch-climate">
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
          <div class="grc-foot">{{ gt('氣候圖層只著色四大產區（Aube 全部視為巴爾丘）；外圍村莊無資料，顯示灰色。') }}</div>
        </div>
      </transition>

      <div v-if="mapError" class="map-error">{{ mapError }}</div>
    </section>

    <RegionMapAppellationDrawer
      v-model:open="drawerOpen"
      :region-name="gt('香檳')"
      :grouped="groupedDrawer"
      :type-tabs="SUB_TABS.map(t => ({ value: t.value, label: gt(t.label) }))"
      :type-filter="subFilter"
      :search="search"
      :active-id="activeFeature ? activeFeature.id : ''"
      @update:search="search = $event"
      @update:type-filter="setSubFilter"
      @select="onDrawerSelect"
    />
  </div>
</template>

<script setup>
import { gt } from '../../locales/champagneUi/index.js'
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import {
  RegionMapHeader, RegionMapLayerPanel, RegionMapInfoPanel,
  RegionMapAppellationDrawer, RegionMapMobileToolbar
} from '../shared/regionMap/index.js'
import { globalChampagneAchievementManager } from '../../stores/champagneAchievementSystem.js'

const props = defineProps({ initialRegion: { type: Object, default: null } })
const emits = defineEmits(['back-to-course'])

// 三色：Grand Cru／Premier Cru／其餘 cru 村莊
const GRADES = [
  { key: 'grand_cru',  label: 'Grand Cru',      color: '#F2B705', opacity: 0.72 },
  { key: 'premier_cru', label: 'Premier Cru',   color: '#2BB3A3', opacity: 0.6 },
  { key: 'ungraded',   label: '未分級 cru 村莊', color: '#8FA3B5', opacity: 0.32 }
]
const GRADE_BY_KEY = Object.fromEntries(GRADES.map(g => [g.key, g]))

// 教學用四大產區＋外圍（近似分法，非 AOC 法定分區）；顏色同 Level 2
const SUBS = {
  montagne: { label: '漢斯山（Montagne de Reims）', color: '#B23A48' },
  vallee:   { label: '馬恩河谷（Vallée de la Marne）', color: '#2E7D32' },
  blancs:   { label: '白丘（Côte des Blancs）', color: '#C9A24A' },
  bar:      { label: '巴爾丘（Côte des Bar）', color: '#6A4C93' },
  other:    { label: '外圍與未歸類', color: '#6B7280' }
}
const SUB_NOTES = {
  montagne: '以 Pinot Noir 為主；9 個 Grand Cru 村莊集中在這一區。',
  vallee: 'Meunier 為主，越往西越占優勢；Grand Cru 只有 Aÿ 與 Tours-sur-Marne。',
  blancs: '以 Chardonnay 為主；有 6 個 Grand Cru 村莊。',
  bar: '位於 Aube 省，以 Pinot Noir 為主；規格列出的 Grand／Premier Cru 村莊全部在 Marne 省，巴爾丘沒有。',
  other: '離四大產區的 Grand Cru 村莊較遠或無法歸類的村莊（含塞扎訥丘、西部馬恩河谷、Aisne、Haute-Marne、Seine-et-Marne 等）；歸類為近似，僅供篩選。'
}
const SUB_TABS = [
  { value: 'all', label: '全部' },
  { value: 'montagne', label: '漢斯山' },
  { value: 'vallee', label: '馬恩河谷' },
  { value: 'blancs', label: '白丘' },
  { value: 'bar', label: '巴爾丘' },
  { value: 'other', label: '外圍' }
]
const HOME_BOUNDS = [[3.1, 47.8], [5.1, 49.5]]

const slug = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const mapContainer = ref(null)
const mapReady = ref(false)
const mapError = ref(null)
const simpleMode = ref(false)
const is3D = ref(false)
const contoursEnabled = ref(false)
const infoBarCollapsed = ref(true)
const drawerOpen = ref(false)
const showLayerPanel = ref(false)
const search = ref('')
const subFilter = ref('all')
const features = ref([])
const activeFeature = ref(null)
const climateEnabled = ref(false)
const climateData = ref(null)
const climateYears = ref([])
const climateYear = ref(2024)
const climateIndicator = ref('temp')
const climateStats = ref({})
let map = null
let contoursInitialized = false
let simplePoints = []

const countByGrade = computed(() => {
  const m = {}
  for (const f of features.value) {
    if (subFilter.value !== 'all' && f.properties.sub !== subFilter.value) continue
    m[f.properties.grade] = (m[f.properties.grade] || 0) + 1
  }
  return m
})

const CLIMATE_INDICATORS = [
  { id: 'temp', icon: '🌡', label: '生長季均溫', unit: '°C', lowLabel: '涼', highLabel: '暖', dataKey: 'temps', baselineKey: 'baseline', statsKey: 'global', digits: 1,
    footnote: '4–10 月日均溫平均｜基準 1981–2010｜Open-Meteo ERA5-Land（以各產區代表村莊的重心取值，約 9 公里網格，僅供區域比較）' },
  { id: 'sun', icon: '☀️', label: '日照時數', unit: 'h', lowLabel: '少', highLabel: '多', dataKey: 'sun', baselineKey: 'baselineSun', statsKey: 'globalSun', digits: 0,
    footnote: '4–10 月日照時數總和｜基準 1981–2010｜Open-Meteo ERA5（約 25 公里網格，相鄰產區可能落在同一格，僅供區域比較）' },
  { id: 'rain', icon: '🌧', label: '降雨量', unit: 'mm', lowLabel: '乾', highLabel: '濕', dataKey: 'rain', baselineKey: 'baselineRain', statsKey: 'globalRain', digits: 0,
    footnote: '4–10 月降雨量總和｜基準 1981–2010｜Open-Meteo ERA5（約 25 公里網格，僅供區域比較）' }
]
const cfg = computed(() => CLIMATE_INDICATORS.find(i => i.id === climateIndicator.value))
const currentStats = computed(() => climateStats.value[cfg.value.statsKey] || null)
const yearIdx = computed(() => climateYears.value.indexOf(climateYear.value))

function climateOf(sub) {
  const arr = climateData.value?.[sub]?.[cfg.value.dataKey]
  const v = Array.isArray(arr) && yearIdx.value >= 0 ? arr[yearIdx.value] : null
  return v == null ? null : Number(v)
}
const activeClimateSub = computed(() => (activeFeature.value && climateData.value?.[activeFeature.value.sub] ? activeFeature.value.sub : null))
const currentValue = computed(() => {
  const sub = activeClimateSub.value
  if (sub) { const v = climateOf(sub); return v == null ? null : Number(v.toFixed(cfg.value.digits)) }
  const vals = Object.keys(climateData.value || {}).map(climateOf).filter(v => v != null)
  return vals.length ? Number((vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(cfg.value.digits)) : null
})
const currentDelta = computed(() => {
  const sub = activeClimateSub.value
  if (!sub) return null
  const v = climateOf(sub)
  const base = climateData.value?.[sub]?.[cfg.value.baselineKey]
  if (v == null || base == null) return null
  return Number((v - base).toFixed(cfg.value.id === 'temp' ? 2 : 0))
})
const climateActiveLabel = computed(() => activeClimateSub.value ? gt(SUBS[activeClimateSub.value].label) : gt('四大產區平均'))

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
  return `rgb(${stops[stops.length - 1][1].join(',')})`
}

async function loadClimateData() {
  if (climateData.value) return
  try {
    const res = await fetch('/data/champagne-climate.json')
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

function gradeColorExpr() {
  return ['match', ['get', 'grade'], ...GRADES.flatMap(g => [g.key, g.color]), '#888']
}
function gradeOpacityExpr(scale = 1) {
  return ['match', ['get', 'grade'], ...GRADES.flatMap(g => [g.key, g.opacity * scale]), 0.4]
}

function applyClimateColor() {
  if (!map || !map.getLayer('ch-fill')) return
  if (!climateEnabled.value || !climateData.value) {
    map.setPaintProperty('ch-fill', 'fill-color', gradeColorExpr())
    applyHighlight()
    return
  }
  const expr = ['match', ['get', 'sub']]
  for (const sub of Object.keys(climateData.value)) {
    const v = climateOf(sub)
    expr.push(sub, v == null ? '#cccccc' : valueToColor(v))
  }
  expr.push('#cccccc')
  map.setPaintProperty('ch-fill', 'fill-color', expr)
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
  activeFeature.value ? (GRADE_BY_KEY[activeFeature.value.grade]?.color || '#A8801C') : '#A8801C')

const unifiedInfo = computed(() => {
  const f = activeFeature.value
  if (!f) return null
  if (f.kind === 'point') {
    return {
      name: f.name,
      originalName: 'Grand Cru',
      badges: [{ label: 'Grand Cru' }, { label: gt('示意點') }],
      meta: [
        { label: gt('產區'), value: gt(SUBS[f.sub]?.label || '') },
        { label: gt('位置'), value: gt('示意點，非官方邊界') }
      ],
      description: gt('簡易版只顯示 Grand Cru 村莊的示意位置；村莊邊界取得後即可看到完整的村莊層級地圖。')
    }
  }
  const grade = f.grade
  const members = Array.isArray(f.members) ? f.members : []
  const merged = members.length > 1 || (members.length === 1 && slug(members[0].name) !== slug(f.name))
  let description
  if (grade === 'grand_cru') description = gt('INAO 規格列為 Grand Cru 的村莊（舊價格量表為 100%）。')
  else if (grade === 'premier_cru') description = gt('INAO 規格列為 Premier Cru 的村莊（舊價格量表為 90–99%，各村百分比官方未公布）。')
  else description = gt('位於香檳 AOC 範圍內的 cru 村莊；INAO 規格未列為 Grand Cru 或 Premier Cru，官方也不公布其 Échelle 百分比。')
  if (merged) {
    description += ' ' + gt('此行政區由合併新鎮組成，內含：{list}。', {
      list: members.map(m => `${m.name}（${m.grade === 'grand_cru' ? 'Grand Cru' : 'Premier Cru'}）`).join(gt('、'))
    })
  }
  description += ' ' + gt(SUB_NOTES[f.sub] || '')
  return {
    name: f.name,
    originalName: `INSEE ${f.insee}`,
    badges: [
      { label: gt(GRADE_BY_KEY[grade]?.label || '') },
      ...(f.echelle ? [{ label: `Échelle ${f.echelle}%` }] : [])
    ],
    meta: [
      { label: gt('產區'), value: gt(SUBS[f.sub]?.label || '') },
      { label: gt('省份'), value: f.dept },
      { label: gt('面積'), value: gt('約 {n} km²', { n: f.area_km2 }) }
    ],
    grapes: (f.grapes || []).map(x => x),
    description
  }
})

const groupedDrawer = computed(() => {
  const q = search.value.trim().toLowerCase()
  const norm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  const nq = norm(q)
  if (simpleMode.value) {
    const items = simplePoints
      .filter(p => (subFilter.value === 'all' || p.sub === subFilter.value) && (!nq || norm(p.name).includes(nq)))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(p => ({ id: p.id, name: p.name, type: 'Grand Cru', styles: [] }))
    return items.length ? [{ key: 'grand_cru', label: gt('Grand Cru 示意點'), items }] : []
  }
  return GRADES.map(g => ({
    key: g.key,
    label: gt(g.label),
    items: features.value
      .map(x => x.properties)
      .filter(p => p.grade === g.key)
      .filter(p => subFilter.value === 'all' || p.sub === subFilter.value)
      .filter(p => !nq || norm(p.name).includes(nq) || (p.members || []).some(m => norm(m.name).includes(nq)))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(p => ({ id: p.id, name: p.name, type: g.key === 'grand_cru' ? 'GC' : g.key === 'premier_cru' ? 'PC' : '', styles: [gt(SUBS[p.sub]?.label.split('（')[0] || '')] }))
  })).filter(g => g.items.length)
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

function setSubFilter(v) {
  subFilter.value = v
  if (!map) return
  const filter = v === 'all' ? null : ['==', ['get', 'sub'], v]
  for (const id of ['ch-fill', 'ch-outline']) if (map.getLayer(id)) map.setFilter(id, filter)
  for (const id of ['ch-pt-circle', 'ch-pt-label']) if (map.getLayer(id)) map.setFilter(id, filter)
  if (v !== 'all' && !simpleMode.value) {
    const subs = features.value.filter(f => f.properties.sub === v)
    if (subs.length) {
      const all = subs.map(bboxOf)
      const b = [[Math.min(...all.map(x => x[0][0])), Math.min(...all.map(x => x[0][1]))], [Math.max(...all.map(x => x[1][0])), Math.max(...all.map(x => x[1][1]))]]
      map.fitBounds(b, { padding: 60, duration: 800, maxZoom: 11 })
    }
  } else if (v === 'all') {
    map.fitBounds(HOME_BOUNDS, { padding: 30, duration: 800 })
  }
}

function selectById(id, fly = true) {
  if (simpleMode.value) {
    const p = simplePoints.find(x => x.id === id)
    if (!p) return
    activeFeature.value = { kind: 'point', id: p.id, name: p.name, sub: p.sub, grade: 'grand_cru' }
    infoBarCollapsed.value = false
    if (map && fly) map.flyTo({ center: p.lngLat, zoom: Math.max(map.getZoom(), 10), duration: 900 })
    return
  }
  const feat = features.value.find(f => f.properties.id === id)
  if (!feat) return
  activeFeature.value = feat.properties
  infoBarCollapsed.value = false
  const members = (feat.properties.members || []).map(m => ({ slug: slug(m.name), grade: m.grade }))
  globalChampagneAchievementManager.recordVillageExplored({ id: feat.properties.id, sub: feat.properties.sub === 'other' ? null : feat.properties.sub, members })
  if (!map) return
  applyHighlight()
  if (fly) map.fitBounds(bboxOf(feat), { padding: 90, duration: 900, maxZoom: 12 })
}

function onDrawerSelect(item) {
  selectById(item.id)
  drawerOpen.value = false
}

function applyHighlight() {
  if (!map || !map.getLayer('ch-fill')) return
  const id = activeFeature.value?.id
  const scale = climateEnabled.value ? 1.9 : 1
  const base = climateEnabled.value ? 0.78 : gradeOpacityExpr()
  map.setPaintProperty('ch-fill', 'fill-opacity', id
    ? ['case', ['==', ['get', 'id'], id], 0.9, climateEnabled.value ? 0.45 : gradeOpacityExpr(0.45 / scale)]
    : base)
  map.setPaintProperty('ch-outline', 'line-width', id
    ? ['case', ['==', ['get', 'id'], id], 3, 0.7]
    : 0.7)
}

function resetMap() {
  activeFeature.value = null
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
  map.addSource('ch-contours', { type: 'vector', url: 'mapbox://mapbox.mapbox-terrain-v2' })
  map.addLayer({
    id: 'ch-contours-line', type: 'line', source: 'ch-contours', 'source-layer': 'contour',
    layout: { 'line-join': 'round', 'line-cap': 'round', visibility: 'none' },
    paint: {
      'line-color': ['case', ['==', ['%', ['to-number', ['get', 'ele']], 100], 0], '#FFD700', '#FF9955'],
      'line-width': ['interpolate', ['linear'], ['zoom'], 9, 0.4, 13, 1.2, 16, 2],
      'line-opacity': ['interpolate', ['linear'], ['zoom'], 9, 0.4, 13, 0.8]
    },
    minzoom: 9
  })
  map.addLayer({
    id: 'ch-contour-labels', type: 'symbol', source: 'ch-contours', 'source-layer': 'contour',
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
  for (const id of ['ch-contours-line', 'ch-contour-labels']) {
    if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', vis)
  }
}

function handleMobileAction(action) {
  if (action === 'aoc') { drawerOpen.value = !drawerOpen.value; showLayerPanel.value = false }
  else if (action === 'layer') { showLayerPanel.value = !showLayerPanel.value; drawerOpen.value = false }
  else if (action === '3d') toggle3D()
  else if (action === 'info') infoBarCollapsed.value = !infoBarCollapsed.value
}

function addVillageLayers(geojson) {
  map.addSource('ch-crus', { type: 'geojson', data: geojson })
  map.addLayer({ id: 'ch-fill', type: 'fill', source: 'ch-crus',
    paint: { 'fill-color': gradeColorExpr(), 'fill-opacity': gradeOpacityExpr() } })
  map.addLayer({ id: 'ch-outline', type: 'line', source: 'ch-crus',
    paint: { 'line-color': '#ffffff', 'line-width': 0.7, 'line-opacity': 0.85 } })
  map.addLayer({ id: 'ch-label', type: 'symbol', source: 'ch-crus',
    filter: ['!=', ['get', 'grade'], 'ungraded'],
    layout: { 'text-field': ['get', 'name'], 'text-size': 11, 'text-optional': true },
    paint: { 'text-color': '#ffffff', 'text-halo-color': 'rgba(0,0,0,0.85)', 'text-halo-width': 1.5 },
    minzoom: 9.5 })
  map.on('click', 'ch-fill', e => {
    const hits = e.features || []
    if (!hits.length) return
    const best = hits.reduce((a, b) => (a.properties.area_km2 <= b.properties.area_km2 ? a : b))
    // mapbox 會把巢狀屬性序列化為字串，這裡以 id 回查原始 feature
    selectById(best.properties.id, false)
  })
  map.on('mouseenter', 'ch-fill', () => { map.getCanvas().style.cursor = 'pointer' })
  map.on('mouseleave', 'ch-fill', () => { map.getCanvas().style.cursor = '' })
}

function addSimpleLayers(geojson) {
  const pdo = geojson.features.find(f => f.properties.kind === 'pdo')
  const pts = geojson.features.filter(f => f.properties.kind === 'point')
  simplePoints = pts.map(p => ({ id: `PT-${slug(p.properties.name)}`, name: p.properties.name, sub: p.properties.sub, lngLat: p.geometry.coordinates }))
  map.addSource('ch-pdo', { type: 'geojson', data: { type: 'FeatureCollection', features: [pdo] } })
  map.addLayer({ id: 'ch-fill', type: 'fill', source: 'ch-pdo', paint: { 'fill-color': '#A8801C', 'fill-opacity': 0.3 } })
  map.addLayer({ id: 'ch-outline', type: 'line', source: 'ch-pdo', paint: { 'line-color': '#ffffff', 'line-width': 1.5 } })
  map.addSource('ch-pt', {
    type: 'geojson',
    data: { type: 'FeatureCollection', features: simplePoints.map(p => ({ type: 'Feature', properties: { id: p.id, name: p.name, sub: p.sub }, geometry: { type: 'Point', coordinates: p.lngLat } })) }
  })
  map.addLayer({ id: 'ch-pt-circle', type: 'circle', source: 'ch-pt',
    paint: { 'circle-radius': 7, 'circle-color': '#F2B705', 'circle-stroke-color': '#ffffff', 'circle-stroke-width': 2 } })
  map.addLayer({ id: 'ch-pt-label', type: 'symbol', source: 'ch-pt',
    layout: { 'text-field': ['get', 'name'], 'text-size': 11, 'text-offset': [0, 1.2], 'text-anchor': 'top', 'text-optional': true },
    paint: { 'text-color': '#ffffff', 'text-halo-color': 'rgba(0,0,0,0.85)', 'text-halo-width': 1.5 }, minzoom: 8 })
  map.on('click', 'ch-pt-circle', e => {
    const f = e.features && e.features[0]
    if (f) selectById(f.properties.id, false)
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
      center: [4.1, 48.9],
      zoom: 7.4
    })
    map.on('load', async () => {
      map.resize()
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')
      map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
      map.fitBounds(HOME_BOUNDS, { padding: 30, duration: 0 })
      try {
        const res = await fetch('/champagne/champagne_crus.geojson')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const geojson = await res.json()
        if (!geojson.features?.length) throw new Error('empty')
        features.value = geojson.features
        addVillageLayers(geojson)
      } catch (err) {
        // 退回簡易版：香檳 AOC 示意範圍＋ Grand Cru 示意點（非官方邊界）
        try {
          const res = await fetch('/champagne/champagne_pdo_outline.geojson')
          if (!res.ok) throw new Error(`HTTP ${res.status}`)
          simpleMode.value = true
          addSimpleLayers(await res.json())
        } catch (err2) {
          mapError.value = gt('產區邊界載入失敗: {m}', { m: err2.message })
        }
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
  globalChampagneAchievementManager.init()
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
.ch-legend {
  position: absolute; left: 12px; bottom: 72px; z-index: 5;
  background: rgba(255, 255, 255, 0.92); border-radius: 12px; padding: 10px 12px;
  font-size: 0.78rem; color: #2a1f08; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: min(280px, calc(100vw - 24px));
}
.ch-legend-item { display: flex; align-items: center; gap: 6px; margin: 2px 0; }
.ch-legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.ch-legend-chips { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 8px; }
.ch-chip { border: 1px solid #d8c796; background: #fbf5e3; border-radius: 12px; padding: 2px 9px; font-size: 0.72rem; cursor: pointer; color: #2a1f08; }
.ch-chip.active { background: #A8801C; border-color: #A8801C; color: #fff; }
.ch-legend-hint { margin-top: 6px; font-size: 0.7rem; color: #6b5a30; line-height: 1.35; }
.ch-warn { color: #9a3412; font-weight: 600; }
.layer-panel-wrapper { position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%); z-index: 46; }
.map-error {
  position: absolute; top: 70px; left: 50%; transform: translateX(-50%); z-index: 20;
  background: #b3261e; color: #fff; padding: 8px 14px; border-radius: 10px; font-size: 0.85rem;
}

.ch-climate {
  position: absolute; left: 12px; right: 12px; bottom: 72px; z-index: 6; margin: 0 auto;
  max-width: 460px; background: rgba(255, 255, 255, 0.95); border-radius: 14px; padding: 10px 12px 8px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.28); color: #2a1f08;
}
.grc-tabs { display: flex; gap: 6px; margin-bottom: 8px; }
.grc-tab { flex: 1; border: 1px solid #d8c796; background: #fbf5e3; border-radius: 8px; padding: 5px 4px; font-size: 0.78rem; cursor: pointer; color: #2a1f08; }
.grc-tab.active { background: #A8801C; border-color: #A8801C; color: #fff; }
.grc-head { display: flex; align-items: center; gap: 10px; }
.grc-year { font-size: 1.5rem; font-weight: 800; color: #A8801C; }
.grc-stats { flex: 1; min-width: 0; display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 8px; }
.grc-name { width: 100%; font-size: 0.78rem; font-weight: 700; }
.grc-val { font-size: 1.05rem; font-weight: 700; }
.grc-delta { font-size: 0.75rem; font-weight: 600; }
.grc-delta.warm { color: #c0392b; }
.grc-delta.cool { color: #2a6fb0; }
.grc-close { border: 0; background: none; font-size: 1rem; cursor: pointer; color: #667; }
.grc-slider { width: 100%; margin: 6px 0 0; accent-color: #A8801C; }
.grc-axis { display: flex; justify-content: space-between; font-size: 0.68rem; color: #667; }
.grc-grad { height: 8px; border-radius: 4px; margin-top: 6px; }
.grc-grad-temp { background: linear-gradient(90deg, #4575b4, #abd9e9, #ffffbf, #fc8d59, #d73027); }
.grc-grad-sun { background: linear-gradient(90deg, #7851a9, #abd9e9, #fee048, #fd8d3c); }
.grc-grad-rain { background: linear-gradient(90deg, #fd8d3c, #ffffbf, #4a90e2, #2c3ea0); }
.grc-labels { display: flex; justify-content: space-between; font-size: 0.68rem; color: #445; margin-top: 2px; }
.grc-foot { margin-top: 5px; font-size: 0.64rem; color: #667; line-height: 1.35; }
.ch-climate-slide-enter-active, .ch-climate-slide-leave-active { transition: all 0.25s ease; }
.ch-climate-slide-enter-from, .ch-climate-slide-leave-to { opacity: 0; transform: translateY(12px); }
</style>
