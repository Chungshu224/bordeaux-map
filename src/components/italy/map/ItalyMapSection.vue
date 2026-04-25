<template>
  <section class="italy-map-section">

    <!-- ── 統一頂部導覽列 ── -->
    <RegionMapHeader
      region-name="義大利"
      :title="`${region.name} 葡萄酒產區地圖`"
      :icon="region.icon"
      @back="emit('back')"
    />

    <!-- Mapbox 全螢幕地圖 -->
    <div ref="mapContainer" class="map"></div>

    <!-- ── 桌面側邊工具列（手機隱藏） ── -->
    <div class="desktop-side-toolbar">
      <button
        class="desk-tool-btn"
        :class="{ active: aocListOpen }"
        @click="aocListOpen = !aocListOpen"
        title="產區清單"
      >
        <span class="desk-tool-icon">📋</span>
        <span class="desk-tool-text">產區清單</span>
      </button>
      <button
        class="desk-tool-btn"
        :class="{ active: showLayerPanel }"
        @click="showLayerPanel = !showLayerPanel"
        title="圖層與顯示"
      >
        <span class="desk-tool-icon">🗂</span>
        <span class="desk-tool-text">圖層</span>
      </button>
    </div>

    <!-- ── 統一資訊側欄 ── -->
    <RegionMapInfoPanel
      v-if="activeAOCInfo"
      :info="unifiedInfo"
      :theme-color="region.color"
      :audio-available="audioAvailable"
      :is-playing-audio="isPlayingAudio"
      :collapsed="infoCollapsed"
      @toggle-collapse="infoCollapsed = !infoCollapsed"
      @play-audio="playAudio"
      @reset="resetMap"
    />

    <!-- ── 統一產區清單抽屜 ── -->
    <RegionMapAppellationDrawer
      :open="aocListOpen"
      :region-name="region.name"
      :items="filteredAOCsUnified"
      :type-tabs="typeTabs"
      :type-filter="typeFilter"
      :search="search"
      :active-id="activeAOCInfo?.id || ''"
      @update:open="aocListOpen = $event"
      @update:type-filter="typeFilter = $event"
      @update:search="search = $event"
      @select="selectAOCById"
    />

    <!-- ── 統一圖層面板（手機版浮動） ── -->
    <transition name="slide-up">
      <div v-if="showLayerPanel" class="layer-panel-wrapper">
        <RegionMapLayerPanel
          :is3D="is3D"
          :show-contours="showContours"
          :climate-enabled="climateEnabled"
          :soil-disabled="true"
          @toggle-3d="toggle3D"
          @toggle-contours="toggleContours"
          @toggle-climate="toggleClimate"
          @close="showLayerPanel = false"
        />
      </div>
    </transition>

    <transition name="climate-slide">
      <div v-if="climateEnabled && climateData" class="climate-overlay">
        <div class="cy-indicator-tabs">
          <button
            v-for="ind in CLIMATE_INDICATORS"
            :key="ind.id"
            :class="['cy-ind-btn', { active: climateIndicator === ind.id }]"
            @click="setClimateIndicator(ind.id)"
          >
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
            <span v-if="currentYearValue !== null" class="cy-temp">
              {{ currentYearValue }}{{ currentIndicatorConfig.unit }}
            </span>
            <span
              v-if="currentYearDelta !== null"
              class="cy-delta"
              :class="currentYearDeltaPositive ? 'cy-warm' : 'cy-cool'"
            >
              {{ currentYearDeltaPositive ? '+' : '' }}{{ currentYearDelta }}{{ currentIndicatorConfig.unit }} vs 基準
            </span>
          </div>
          <button class="cy-close" @click="toggleClimate" title="關閉氣候圖層">✕</button>
        </div>

        <input
          class="climate-slider"
          v-model.number="climateYear"
          type="range"
          :min="climateYears[0]"
          :max="climateYears[climateYears.length - 1]"
          step="1"
          @input="onClimateYearChange"
        />

        <div class="climate-year-axis">
          <span>{{ climateYears[0] }}</span>
          <span>{{ climateYears[Math.floor(climateYears.length / 2)] }}</span>
          <span>{{ climateYears[climateYears.length - 1] }}</span>
        </div>

        <div class="climate-legend">
          <div :class="['legend-gradient', `legend-${climateIndicator}`]"></div>
          <div class="legend-labels">
            <span>
              {{ currentGlobalStats ? currentGlobalStats.min.toFixed(0) : '' }}{{ currentIndicatorConfig.unit }} {{ currentIndicatorConfig.lowLabel }}
            </span>
            <span>均值</span>
            <span>
              {{ currentIndicatorConfig.highLabel }} {{ currentGlobalStats ? currentGlobalStats.max.toFixed(0) : '' }}{{ currentIndicatorConfig.unit }}
            </span>
          </div>
        </div>

        <div class="climate-footnote">📊 {{ currentIndicatorConfig.footnote }}</div>
      </div>
    </transition>

    <!-- ── 統一手機底部工具列 ── -->
    <RegionMapMobileToolbar
      v-if="mapReady"
      :aoc-open="aocListOpen"
      :layer-open="showLayerPanel"
      :is3D="is3D"
      :info-open="!!activeAOCInfo && !infoCollapsed"
      :merged-with-info="!!activeAOCInfo && !infoCollapsed"
      @action="handleMobileAction"
    />

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
import 'mapbox-gl/dist/mapbox-gl.css'
import * as turf from '@turf/turf'
import {
  RegionMapHeader,
  RegionMapLayerPanel,
  RegionMapInfoPanel,
  RegionMapAppellationDrawer,
  RegionMapMobileToolbar
} from '../../shared/regionMap/index.js'

const props = defineProps({
  region: { type: Object, required: true }
})
const emit = defineEmits(['back'])
const router = useRouter()

// ── State ──
const mapContainer = ref(null)
const mapReady = ref(false)
const isLoading = ref(false)
const mapError = ref(null)
const is3D = ref(false)
const showContours = ref(false)
const infoCollapsed = ref(true)
const aocListOpen = ref(false)
const showLayerPanel = ref(false)
const search = ref('')
const typeFilter = ref('all')
const activeAOCInfo = ref(null)
const aocData = ref([])
const isPlayingAudio = ref(false)
const audioAvailable = ref(false)
const climateEnabled = ref(false)
const climateYear = ref(2003)
const climateData = ref(null)
const climateStats = ref(null)
const climateStatsSun = ref(null)
const climateStatsRain = ref(null)
const climateYears = ref([])
const climateYearAvg = ref([])
const climateYearSun = ref([])
const climateYearRain = ref([])
const climateIndicator = ref('temp')
let map = null
let audioPlayer = null
let geojsonCache = new Map()
let regionBounds = null  // 儲存產區邊界 bbox，供 resetMap 使用

const REGION_OUTLINE_MAP = {
  abruzzo:    'Abruzzo.geojson',
  basilicata: 'Basilicata.geojson',
  calabria:   'Calabria.geojson',
  campania:   'Campania.geojson',
  emilia:     'Emilia-Romagna.geojson',
  friuli:     'Friuli-Venezia Giulia.geojson',
  lazio:      'Lazio.geojson',
  liguria:    'Liguria.geojson',
  lombardy:   'Lombardy.geojson',
  marche:     'Marche.geojson',
  molise:     'Molise.geojson',
  piedmont:   'Piemonte.geojson',
  puglia:     'Puglia.geojson',
  sardinia:   'Sardegna.geojson',
  sicily:     'Sicily.geojson',
  trentino:   'Trentino.geojson',
  tuscany:    'Toscana.geojson',
  umbria:     'Umbria.geojson',
  "valle d'aosta": "Valle d'Aosta.geojson",
  veneto:     'Veneto.geojson',
}

const typeTabs = [
  { value: 'all',  label: '全部' },
  { value: 'DOCG', label: 'DOCG' },
  { value: 'DOC',  label: 'DOC' },
  { value: 'IGT',  label: 'IGT' },
]

// apulia → puglia 資料夾映射
const FOLDER_MAP = { apulia: 'puglia' }
const regionFolder = (id) => FOLDER_MAP[id] || id

// ── Computed ──
const filteredAOCs = computed(() => {
  let list = aocData.value
  if (typeFilter.value !== 'all') list = list.filter(a => a.type === typeFilter.value)
  if (search.value.trim()) {
    const q = search.value.trim().toLowerCase()
    list = list.filter(a =>
      a.name.toLowerCase().includes(q) ||
      (a.grapes || []).some(g => g.toLowerCase().includes(q))
    )
  }
  return list
})

// ── 統一格式：給共用元件使用 ──
const filteredAOCsUnified = computed(() =>
  filteredAOCs.value.map(a => ({
    id: a.id,
    name: a.name,
    type: a.type,
    styles: Array.isArray(a.style) ? a.style : (a.style ? [a.style] : [])
  }))
)

const unifiedInfo = computed(() => {
  const a = activeAOCInfo.value
  if (!a) return null
  const meta = []
  if (a.province) meta.push({ label: '省份', value: a.province })
  if (a.region) meta.push({ label: '大區', value: a.region })
  if (a.zone) meta.push({ label: '產區範圍', value: a.zone })
  return {
    name: a.name,
    badges: a.type ? [{ label: a.type, type: a.type }] : [],
    meta,
    styles: Array.isArray(a.style) ? a.style : (a.style ? [a.style] : []),
    grapes: a.grapes || [],
    climate: a.details?.climate || '',
    description: a.description || '',
    subregions: a.details?.subregions || null
  }
})

function selectAOCById(item) {
  const found = aocData.value.find(a => a.id === item.id)
  if (found) selectAOC(found)
}

const CLIMATE_INDICATORS = [
  {
    id: 'temp', icon: '🌡', label: '夏季均溫', unit: '°C',
    lowLabel: '涼', highLabel: '熱',
    footnote: '指標：6–8 月日均溫平均值（夏季均溫）｜ 基準：1981–2010',
    dataKey: 'temps', baselineKey: 'baseline', globalKey: 'global', yearAvgKey: 'yearAvg'
  },
  {
    id: 'sun', icon: '☀️', label: '日照時數', unit: 'h',
    lowLabel: '少', highLabel: '多',
    footnote: '指標：6–8 月日照時數總和（小時）｜ 基準：1981–2010',
    dataKey: 'sun', baselineKey: 'baselineSun', globalKey: 'globalSun', yearAvgKey: 'yearSunAvg'
  },
  {
    id: 'rain', icon: '🌧', label: '夏季降雨', unit: 'mm',
    lowLabel: '乾', highLabel: '濕',
    footnote: '指標：6–8 月降雨量總和（毫米）｜ 基準：1981–2010',
    dataKey: 'rain', baselineKey: 'baselineRain', globalKey: 'globalRain', yearAvgKey: 'yearRainAvg'
  }
]

const GOLDEN_VINTAGES = new Set([1982, 1989, 1990, 2000, 2003, 2005, 2009, 2010, 2015, 2016, 2019, 2020])

const currentIndicatorConfig = computed(() =>
  CLIMATE_INDICATORS.find((i) => i.id === climateIndicator.value)
)

const currentGlobalStats = computed(() => {
  if (climateIndicator.value === 'sun') return climateStatsSun.value
  if (climateIndicator.value === 'rain') return climateStatsRain.value
  return climateStats.value
})

const currentYearAvgArr = computed(() => {
  if (climateIndicator.value === 'sun') return climateYearSun.value
  if (climateIndicator.value === 'rain') return climateYearRain.value
  return climateYearAvg.value
})

const isGoldenVintage = computed(() => GOLDEN_VINTAGES.has(climateYear.value))

const climateCurrentAocLabel = computed(() => {
  if (!activeAOCInfo.value?.name) return ''
  return activeAOCInfo.value.name
})

const currentYearValue = computed(() => {
  if (!climateYears.value.length || !currentIndicatorConfig.value) return null
  const idx = climateYears.value.indexOf(climateYear.value)
  if (idx < 0) return null

  if (climateData.value && activeAOCInfo.value?.id) {
    const arr = climateData.value[activeAOCInfo.value.id]?.[currentIndicatorConfig.value.dataKey]
    if (Array.isArray(arr) && arr[idx] != null) {
      return Number(arr[idx].toFixed(climateIndicator.value === 'temp' ? 1 : 0))
    }
  }

  const avgArr = currentYearAvgArr.value
  if (!Array.isArray(avgArr) || avgArr[idx] == null) return null
  return Number(avgArr[idx].toFixed(climateIndicator.value === 'temp' ? 1 : 0))
})

const currentYearDelta = computed(() => {
  if (!climateData.value || !climateYears.value.length || !currentIndicatorConfig.value) return null
  const idx = climateYears.value.indexOf(climateYear.value)
  if (idx < 0) return null

  const cfg = currentIndicatorConfig.value
  if (activeAOCInfo.value?.id) {
    const d = climateData.value[activeAOCInfo.value.id]
    const arr = d?.[cfg.dataKey]
    const baseline = d?.[cfg.baselineKey]
    if (Array.isArray(arr) && arr[idx] != null && Number.isFinite(baseline)) {
      const digits = climateIndicator.value === 'temp' ? 2 : 0
      return Number((arr[idx] - baseline).toFixed(digits))
    }
  }

  const vals = Object.values(climateData.value)
    .map((d) => {
      const arr = d?.[cfg.dataKey]
      const baseline = d?.[cfg.baselineKey]
      if (!Array.isArray(arr) || arr[idx] == null || !Number.isFinite(baseline)) return null
      return arr[idx] - baseline
    })
    .filter((v) => v != null)

  if (!vals.length) return null
  const digits = climateIndicator.value === 'temp' ? 2 : 0
  return Number((vals.reduce((s, v) => s + v, 0) / vals.length).toFixed(digits))
})

const currentYearDeltaPositive = computed(() => (currentYearDelta.value ?? 0) > 0)

// ── Helpers ──
function styleBadgeColor(style) {
  const map = {
    '紅酒': { background: '#8B0000', color: '#fff' },
    '白酒': { background: '#f5e28a', color: '#555' },
    '甜酒': { background: '#FFD700', color: '#333' },
    '氣泡酒': { background: '#667eea', color: '#fff' },
    '粉紅酒': { background: '#ffb6c1', color: '#333' },
    '橘酒': { background: '#e67e22', color: '#fff' },
    '加強酒': { background: '#7b341e', color: '#fff' },
  }
  return map[style] || { background: '#999', color: '#fff' }
}

function geojsonTypeFolder(type) {
  if (type === 'DOCG') return 'DOCG'
  if (type === 'IGT')  return 'IGT'
  return 'DOC'
}

function aocSafeId(id) {
  return String(id || '').replace(/[^a-z0-9]/gi, '_')
}

function clearAllAocLayers() {
  if (!map) return
  const style = map.getStyle()
  ;(style.layers || []).filter((l) => l.id.startsWith('aoc_')).forEach((l) => map.removeLayer(l.id))
  Object.keys(style.sources || {}).filter((s) => s.startsWith('aoc_')).forEach((s) => map.removeSource(s))
}

// ── Data ──
async function loadRegionData() {
  try {
    const folder = regionFolder(props.region.id)
    const url = `/italy/regions/${folder}/${folder}-regions.json`
    const res = await fetch(url)
    if (!res.ok) throw new Error(`無法載入 ${url}`)
    const raw = await res.json()
    // 統一 style 為陣列（部分 JSON 的 style 欄位為字串而非陣列）
    aocData.value = raw
      .filter(item => ['DOCG', 'DOC', 'IGT'].includes(item.type))
      .map(item => ({
        ...item,
        style: Array.isArray(item.style) ? item.style : (item.style ? [item.style] : [])
      }))
  } catch (e) {
    console.error('[ItalyMapSection] loadRegionData:', e)
    aocData.value = []
  }
}

async function loadAllOutlines() {
  if (!map) return
  clearAllAocLayers()

  const folder = regionFolder(props.region.id)
  for (const aoc of aocData.value) {
    const typeFolder = geojsonTypeFolder(aoc.type)
    const fileName = aoc.id.replace(/^(DOCG|DOC|IGT)\//, '')
    const url = `/italy/regions/${folder}/geojson/${typeFolder}/${encodeURIComponent(fileName)}.geojson`
    try {
      let geojson
      if (geojsonCache.has(url)) { geojson = geojsonCache.get(url) }
      else {
        const res = await fetch(url)
        if (!res.ok) continue
        geojson = await res.json()
        geojsonCache.set(url, geojson)
      }
      const safe = aocSafeId(aoc.id)
      const srcId = `aoc_${safe}`
      if (!map.getSource(srcId)) {
        map.addSource(srcId, { type: 'geojson', data: geojson })
        map.addLayer({ id: `aoc_fill_${safe}`, type: 'fill', source: srcId, paint: { 'fill-color': '#fff', 'fill-opacity': 0.08 } })
        map.addLayer({ id: `aoc_line_${safe}`, type: 'line', source: srcId, paint: { 'line-color': '#fff', 'line-width': 1.2, 'line-opacity': 0.7 } })
        const _aoc = aoc
        map.on('click', `aoc_fill_${safe}`, () => selectAOC(_aoc))
        map.on('mouseenter', `aoc_fill_${safe}`, () => { map.getCanvas().style.cursor = 'pointer' })
        map.on('mouseleave', `aoc_fill_${safe}`, () => { map.getCanvas().style.cursor = '' })
      }
    } catch (e) { /* skip */ }
  }
}

function createDemoItalyClimatePayload(items) {
  const years = Array.from({ length: 25 }, (_, i) => 2000 + i)
  const aocs = {}
  const yearSums = new Array(years.length).fill(0)
  const yearSunSums = new Array(years.length).fill(0)
  const yearRainSums = new Array(years.length).fill(0)
  const yearCounts = new Array(years.length).fill(0)
  const allTemps = []
  const allSun = []
  const allRain = []

  for (const item of items) {
    const key = item.id
    let seed = 0
    for (const ch of key) seed += ch.charCodeAt(0)

    const baseline = 19.2 + (seed % 50) * 0.06
    const seasonalAmp = 0.45 + (seed % 10) * 0.03
    const trend = 0.02 + (seed % 3) * 0.005

    const sunBaseline = 720 + (seed % 90)
    const rainBaseline = 170 + (seed % 80)

    const temps = years.map((year, idx) => {
      const oscillation = Math.sin((idx + seed % 7) * 0.55) * seasonalAmp
      const warmShift = (year - years[0]) * trend
      const val = Number((baseline + oscillation + warmShift).toFixed(2))
      allTemps.push(val)
      yearSums[idx] += val
      yearCounts[idx] += 1
      return val
    })

    const sun = years.map((_, idx) => {
      const val = Number((sunBaseline + Math.sin((idx + seed % 5) * 0.5) * 35).toFixed(1))
      allSun.push(val)
      yearSunSums[idx] += val
      return val
    })

    const rain = years.map((_, idx) => {
      const val = Number((rainBaseline + Math.cos((idx + seed % 6) * 0.52) * 28).toFixed(1))
      allRain.push(val)
      yearRainSums[idx] += val
      return val
    })

    aocs[key] = {
      temps,
      sun,
      rain,
      baseline: Number((temps.reduce((s, v) => s + v, 0) / temps.length).toFixed(2)),
      baselineSun: Number((sun.reduce((s, v) => s + v, 0) / sun.length).toFixed(1)),
      baselineRain: Number((rain.reduce((s, v) => s + v, 0) / rain.length).toFixed(1))
    }
  }

  const min = Math.min(...allTemps)
  const max = Math.max(...allTemps)
  const mean = allTemps.reduce((s, v) => s + v, 0) / allTemps.length
  const sunMin = Math.min(...allSun)
  const sunMax = Math.max(...allSun)
  const sunMean = allSun.reduce((s, v) => s + v, 0) / allSun.length
  const rainMin = Math.min(...allRain)
  const rainMax = Math.max(...allRain)
  const rainMean = allRain.reduce((s, v) => s + v, 0) / allRain.length
  const yearAvg = years.map((_, idx) => Number((yearSums[idx] / Math.max(yearCounts[idx], 1)).toFixed(2)))
  const yearSunAvg = years.map((_, idx) => Number((yearSunSums[idx] / Math.max(yearCounts[idx], 1)).toFixed(1)))
  const yearRainAvg = years.map((_, idx) => Number((yearRainSums[idx] / Math.max(yearCounts[idx], 1)).toFixed(1)))

  return {
    aocs,
    global: { min: Number(min.toFixed(2)), max: Number(max.toFixed(2)), mean: Number(mean.toFixed(2)) },
    globalSun: { min: Number(sunMin.toFixed(1)), max: Number(sunMax.toFixed(1)), mean: Number(sunMean.toFixed(1)) },
    globalRain: { min: Number(rainMin.toFixed(1)), max: Number(rainMax.toFixed(1)), mean: Number(rainMean.toFixed(1)) },
    meta: { years, yearAvg, yearSunAvg, yearRainAvg, generated: true }
  }
}

async function loadClimateData() {
  if (climateData.value && climateYears.value.length) return

  const applyPayload = (payload) => {
    climateData.value = payload.aocs || {}
    climateStats.value = payload.global || null
    climateStatsSun.value = payload.globalSun || null
    climateStatsRain.value = payload.globalRain || null
    climateYears.value = payload.meta?.years || []
    climateYearAvg.value = payload.meta?.yearAvg || []
    climateYearSun.value = payload.meta?.yearSunAvg || []
    climateYearRain.value = payload.meta?.yearRainAvg || []
    if (climateYears.value.length) {
      climateYear.value = climateYears.value.includes(2003) ? 2003 : climateYears.value[0]
    }
  }

  try {
    const res = await fetch('/data/italy-climate.json')
    if (res.ok) {
      const json = await res.json()
      applyPayload(json)
      return
    }
  } catch (error) {
    console.warn('[ItalyMapSection] 無法載入 italy-climate.json，改用示範資料。', error)
  }

  const demo = createDemoItalyClimatePayload(aocData.value)
  applyPayload(demo)
}
function valueToClimateColor(v, indicator = climateIndicator.value) {
  let stats = climateStats.value
  let stops = []

  if (indicator === 'sun') {
    stats = climateStatsSun.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [
      [min, [120, 81, 169]],
      [mean, [171, 217, 233]],
      [mean + 20, [254, 224, 72]],
      [max, [253, 141, 60]]
    ]
  } else if (indicator === 'rain') {
    stats = climateStatsRain.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [
      [min, [253, 141, 60]],
      [mean, [255, 255, 191]],
      [mean + 15, [74, 144, 226]],
      [max, [44, 62, 160]]
    ]
  } else {
    stats = climateStats.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [
      [min, [69, 117, 180]],
      [mean - 1, [171, 217, 233]],
      [mean, [255, 255, 191]],
      [mean + 1.5, [252, 141, 89]],
      [max, [215, 48, 39]]
    ]
  }

  const { min, max } = stats
  const t = Math.max(min, Math.min(max, v))

  for (let i = 0; i < stops.length - 1; i++) {
    const [t0, c0] = stops[i]
    const [t1, c1] = stops[i + 1]
    if (t <= t1) {
      const f = (t - t0) / Math.max(t1 - t0, 0.0001)
      const r = Math.round(c0[0] + f * (c1[0] - c0[0]))
      const g = Math.round(c0[1] + f * (c1[1] - c0[1]))
      const b = Math.round(c0[2] + f * (c1[2] - c0[2]))
      return `rgb(${r},${g},${b})`
    }
  }

  const last = stops[stops.length - 1][1]
  return `rgb(${last[0]},${last[1]},${last[2]})`
}

function applyClimateColor(year) {
  if (!map || !climateEnabled.value || !climateData.value || !climateYears.value.length || !currentIndicatorConfig.value) return
  const idx = climateYears.value.indexOf(year)
  if (idx < 0) return
  const cfg = currentIndicatorConfig.value

  for (const aoc of aocData.value) {
    const safe = aocSafeId(aoc.id)
    const fillId = `aoc_fill_${safe}`
    const lineId = `aoc_line_${safe}`
    if (!map.getLayer(fillId)) continue

    const arr = climateData.value[aoc.id]?.[cfg.dataKey]
    const value = Array.isArray(arr) && idx < arr.length ? Number(arr[idx]) : null
    const color = Number.isFinite(value) ? valueToClimateColor(value, cfg.id) : '#f0f0f0'
    const opacity = Number.isFinite(value) ? 0.48 : 0.08

    map.setPaintProperty(fillId, 'fill-color', color)
    map.setPaintProperty(fillId, 'fill-opacity', opacity)
    if (map.getLayer(lineId)) {
      map.setPaintProperty(lineId, 'line-color', '#ffffff')
      map.setPaintProperty(lineId, 'line-opacity', 0.55)
      map.setPaintProperty(lineId, 'line-width', 1.1)
    }
  }
}

function setClimateIndicator(id) {
  climateIndicator.value = id
  applyClimateColor(climateYear.value)
}

async function highlightAOC(aoc) {
  if (!map) return
  if (map.getLayer('highlight_fill')) map.removeLayer('highlight_fill')
  if (map.getLayer('highlight_line')) map.removeLayer('highlight_line')
  if (map.getSource('highlight')) map.removeSource('highlight')

  const folder = regionFolder(props.region.id)
  const typeFolder = geojsonTypeFolder(aoc.type)
  const fileName = aoc.id.replace(/^(DOCG|DOC|IGT)\//, '')
  const url = `/italy/regions/${folder}/geojson/${typeFolder}/${encodeURIComponent(fileName)}.geojson`
  try {
    let geojson
    if (geojsonCache.has(url)) { geojson = geojsonCache.get(url) }
    else {
      const res = await fetch(url)
      if (!res.ok) return
      geojson = await res.json()
      geojsonCache.set(url, geojson)
    }
    map.addSource('highlight', { type: 'geojson', data: geojson })
    map.addLayer({ id: 'highlight_fill', type: 'fill', source: 'highlight', paint: { 'fill-color': props.region.color, 'fill-opacity': 0.35 } })
    map.addLayer({ id: 'highlight_line', type: 'line', source: 'highlight', paint: { 'line-color': '#fff', 'line-width': 2.5 } })
    const bbox = turf.bbox(geojson)
    map.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: 80, duration: 900 })
  } catch (e) { console.error(e) }
}

// ── Audio ──
async function checkAudio(aoc) {
  audioAvailable.value = false
  const url = `/italy/sounds/${encodeURIComponent(aoc.name)}.mp3`
  try {
    const r = await fetch(url, { method: 'HEAD' })
    audioAvailable.value = r.ok
  } catch { /* skip */ }
}

async function playAudio() {
  if (!activeAOCInfo.value) return
  const url = `/italy/sounds/${encodeURIComponent(activeAOCInfo.value.name)}.mp3`
  if (audioPlayer) { audioPlayer.pause(); audioPlayer = null }
  audioPlayer = new Audio(url)
  isPlayingAudio.value = true
  audioPlayer.play().catch(() => { isPlayingAudio.value = false })
  audioPlayer.onended = () => { isPlayingAudio.value = false }
  audioPlayer.onerror = () => { isPlayingAudio.value = false }
}

// ── Region Outline ──
async function loadRegionOutline({ animate = true } = {}) {
  if (!map) return
  const folder = regionFolder(props.region.id)
  const outlineFile = REGION_OUTLINE_MAP[folder]
  if (!outlineFile) return
  const url = `/italy/regions/${folder}/geojson/${encodeURIComponent(outlineFile)}`
  try {
    const res = await fetch(url)
    if (!res.ok) return
    const geojson = await res.json()
    if (map.getLayer('region_outline_line')) map.removeLayer('region_outline_line')
    if (map.getSource('region_outline')) map.removeSource('region_outline')
    map.addSource('region_outline', { type: 'geojson', data: geojson })
    map.addLayer({ id: 'region_outline_line', type: 'line', source: 'region_outline',
      paint: { 'line-color': '#ffffff', 'line-width': 2.5, 'line-opacity': 0.9 } })
    const bbox = turf.bbox(geojson)
    regionBounds = bbox
    if (animate) {
      map.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: 60, duration: 1200 })
    }
  } catch (e) { console.error('[loadRegionOutline]', e) }
}

async function fetchRegionBbox() {
  const folder = regionFolder(props.region.id)
  const outlineFile = REGION_OUTLINE_MAP[folder]
  if (!outlineFile) return null
  const url = `/italy/regions/${folder}/geojson/${encodeURIComponent(outlineFile)}`
  try {
    const res = await fetch(url)
    if (!res.ok) return null
    const geojson = await res.json()
    const bbox = turf.bbox(geojson)
    regionBounds = bbox
    return bbox
  } catch { return null }
}

// ── Map ──
async function initMap() {
  if (!mapContainer.value) return
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

  // 先 fetch outline 取得 bbox，直接用 bounds 初始化地圖
  const bbox = await fetchRegionBbox()
  const mapOptions = {
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    pitch: 0, bearing: 0
  }
  if (bbox) {
    mapOptions.bounds = [[bbox[0], bbox[1]], [bbox[2], bbox[3]]]
    mapOptions.fitBoundsOptions = { padding: 60 }
  } else {
    mapOptions.center = props.region.center
    mapOptions.zoom = props.region.zoom
  }

  map = new mapboxgl.Map(mapOptions)
  map.on('load', async () => {
    map.addControl(new mapboxgl.NavigationControl(), 'top-right')
    map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
    map.addSource('mapbox-dem', { type: 'raster-dem', url: 'mapbox://mapbox.mapbox-terrain-dem-v1', tileSize: 512, maxzoom: 14 })
    map.addSource('contours', { type: 'vector', url: 'mapbox://mapbox.mapbox-terrain-v2' })
    map.addLayer({ id: 'contour-lines', type: 'line', source: 'contours', 'source-layer': 'contour',
      layout: { 'line-join': 'round', 'line-cap': 'round', visibility: 'none' },
      paint: { 'line-color': '#ff6b35', 'line-width': ['interpolate',['linear'],['zoom'],10,0.5,14,1.5], 'line-opacity': 0.8 },
      filter: ['==', ['get', 'index'], 1]
    })
    mapReady.value = true
    // 進入探索地圖時只顯示最大範圍框架（region outline）
    await loadRegionOutline({ animate: false })  // 位置已由 bounds 指定，只畫邊界線
  })
}

// ── Controls ──
function toggle3D() {
  is3D.value = !is3D.value
  if (!map) return
  if (is3D.value) {
    map.easeTo({ pitch: 45, duration: 800 })
    if (map.getSource('mapbox-dem')) {
      map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 })
      if (!map.getLayer('sky')) {
        map.addLayer({ id: 'sky', type: 'sky', paint: { 'sky-type': 'atmosphere', 'sky-atmosphere-sun': [0,90], 'sky-atmosphere-sun-intensity': 15 } })
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

async function toggleClimate() {
  if (!map) return

  if (!climateEnabled.value) {
    try {
      await loadClimateData()
      await loadAllOutlines()
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
  clearAllAocLayers()
}

function onClimateYearChange() {
  applyClimateColor(climateYear.value)
}

function resetMap() {
  if (!map) return
  if (map.getLayer('highlight_fill')) map.removeLayer('highlight_fill')
  if (map.getLayer('highlight_line')) map.removeLayer('highlight_line')
  if (map.getSource('highlight')) map.removeSource('highlight')
  activeAOCInfo.value = null
  if (regionBounds) {
    map.fitBounds([[regionBounds[0], regionBounds[1]], [regionBounds[2], regionBounds[3]]], { padding: 60, duration: 1000 })
  } else {
    map.flyTo({ center: props.region.center, zoom: props.region.zoom, duration: 1000 })
  }
}

async function selectAOC(item) {
  activeAOCInfo.value = item
  aocListOpen.value = false
  await highlightAOC(item)
  await checkAudio(item)
}

function handleMobileAction(action) {
  if (action === 'aoc') {
    showLayerPanel.value = false
    aocListOpen.value = !aocListOpen.value
  } else if (action === 'layer') {
    aocListOpen.value = false
    showLayerPanel.value = !showLayerPanel.value
  } else if (action === '3d') {
    toggle3D()
  } else if (action === 'climate') {
    toggleClimate()
  } else if (action === 'info') {
    if (activeAOCInfo.value) infoCollapsed.value = !infoCollapsed.value
  }
}

// ── Watch region change ──
watch(() => props.region, async (newRegion) => {
  search.value = ''; typeFilter.value = 'all'
  activeAOCInfo.value = null; aocData.value = []
  climateEnabled.value = false
  climateData.value = null
  climateStats.value = null
  climateStatsSun.value = null
  climateStatsRain.value = null
  climateYears.value = []
  climateYearAvg.value = []
  climateYearSun.value = []
  climateYearRain.value = []
  climateIndicator.value = 'temp'
  geojsonCache = new Map()
  regionBounds = null
  await loadRegionData()
  if (map) {
    const style = map.getStyle()
    ;(style.layers || []).forEach(l => { if (l.id.startsWith('aoc_') || l.id.startsWith('highlight') || l.id === 'region_outline_line') map.removeLayer(l.id) })
    Object.keys(style.sources || {}).forEach(s => { if (s.startsWith('aoc_') || s === 'highlight' || s === 'region_outline') map.removeSource(s) })
    // 切換區域時同樣維持只顯示區域框架
    await loadRegionOutline()
  }
}, { deep: true })

onMounted(async () => {
  await loadRegionData()
  await nextTick()
  initMap()
})

onUnmounted(() => {
  if (audioPlayer) { audioPlayer.pause(); audioPlayer = null }
  if (map) { map.remove(); map = null }
})
</script>

<style scoped>
/* ── 基礎 ── */
.italy-map-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.map {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100%; height: 100%;
}

/* ── 統一圖層面板浮動容器 ── */
.layer-panel-wrapper {
  position: absolute;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 45;
}
@media (min-width: 769px) {
  .layer-panel-wrapper {
    bottom: 24px;
    left: 24px;
    transform: none;
  }
}

/* ── 桌面側邊工具列 ── */
.desktop-side-toolbar {
  position: absolute;
  top: 80px;
  right: 16px;
  z-index: 46;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.desk-tool-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.96);
  border: 1.5px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(10px);
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  color: #444;
  transition: all 0.15s;
}
.desk-tool-btn:hover {
  background: #fff;
  transform: translateX(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
}
.desk-tool-btn.active {
  background: #fff8e1;
  border-color: #d4af37;
  color: #8b6f1c;
}
.desk-tool-icon { font-size: 16px; }
@media (max-width: 768px) {
  .desktop-side-toolbar { display: none; }
}

/* ── Header：透明底，左上角導覽按鈕 ── */
.map-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  background: none;
  border: none;
  padding: 12px 16px;
  z-index: 1000;
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
  flex: 1;
  text-align: center;
  font-size: 1.16rem;
  color: #5b1d1d;
  text-shadow: 0 1px 4px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.9);
  pointer-events: none;
  padding-top: 4px;
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

/* ── 資訊卡（布根地 info-header-bar 同款） ── */
.map-info-bar {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: min(90vw, 560px);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  background: linear-gradient(to bottom, white, #fafafa);
  border-radius: 12px;
  max-height: 60vh;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.1);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.08);
}

.info-header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background: linear-gradient(135deg, #8B0000 0%, #660000 100%);
  color: white;
  padding: 12px 16px;
  border-bottom: 2px solid rgba(255,255,255,0.1);
}
.aoc-info-title {
  display: flex;
  align-items: center;
  font-size: 1.15rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
  min-width: 0;
  flex: 1;
}
.aoc-name {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.25;
  max-height: calc(1.25em * 2);
}
.aoc-dot {
  width: 12px; height: 12px;
  border-radius: 50%;
  margin-right: 8px;
  flex-shrink: 0;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.map-action-buttons {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.map-action-btn {
  width: 40px; height: 40px;
  padding: 0; border: none; border-radius: 12px;
  color: white; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 6px 14px rgba(0,0,0,0.18);
  transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
}
.map-action-btn:hover { transform: translateY(-1px); box-shadow: 0 10px 18px rgba(0,0,0,0.22); }
.map-action-btn:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; }
.map-action-btn:disabled:hover { transform: none; }
.btn-collapse { background: linear-gradient(145deg, #222, #0f0f0f); }
.btn-audio-compact { background: linear-gradient(145deg, #8a63cf, #6b46c1); }
.btn-reset { background: linear-gradient(145deg, #f25f57, #dd3f37); }

/* 展開過渡 */
.info-expand-enter-active, .info-expand-leave-active { transition: all 0.3s ease; }
.info-expand-enter-from, .info-expand-leave-to { opacity: 0; max-height: 0; }
.info-expand-enter-to, .info-expand-leave-from { opacity: 1; max-height: 60vh; }

.info-content-wrapper {
  overflow-y: auto;
  flex: 1;
}
.region-info-content {
  padding: 14px 16px;
  font-size: 0.95rem;
  line-height: 1.6;
  background: white;
}
.info-header { margin-bottom: 10px; }
.region-type { font-size: 0.9rem; color: #666; }

/* ── 詳細資料網格 ── */
.details-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 14px;
  margin-top: 10px;
  font-size: 0.9rem;
}
.detail-item { display: contents; }
.detail-item .detail-label { font-weight: 700; color: #8B0000; grid-column: 1/2; font-size: 0.88rem; }
.detail-item .detail-value { grid-column: 2/3; color: #333; font-weight: 500; }
.detail-item.full-width {
  display: block;
  grid-column: 1 / -1;
  margin-top: 8px; padding: 10px;
  background: white; border-radius: 6px;
  border-left: 3px solid #8B0000;
}
.detail-item.full-width .detail-label { display: block; font-weight: 700; color: #8B0000; font-size: 0.88rem; margin-bottom: 4px; }
.detail-item.full-width .detail-value { display: block; color: #444; font-size: 0.88rem; line-height: 1.4; padding-left: 8px; }

/* ── 酒款類型 ── */
.wine-types-section { margin: 12px -16px 0; padding: 14px 16px; background: #fafafa; border-left: 3px solid #8B0000; }
.wine-types-title { font-weight: 700; font-size: 1rem; color: #8B0000; margin-bottom: 10px; }
.wine-types-list { display: flex; flex-wrap: wrap; gap: 8px; }
.wine-type-tag { background: linear-gradient(145deg, #8B0000, #660000); color: #fff; padding: 6px 12px; border-radius: 8px; font-size: 0.85rem; font-weight: 600; }

/* ── 葡萄品種 ── */
.grape-section { margin: 12px -16px 0; padding: 14px 16px; background: #fafafa; border-left: 3px solid #8B0000; }
.grape-title { font-weight: 700; font-size: 1rem; color: #8B0000; margin-bottom: 12px; }
.grape-badges { display: flex; flex-wrap: wrap; gap: 8px; }
.grape-badge { padding: 5px 12px; border-radius: 14px; font-size: 0.84rem; font-weight: 700; background: #f0f7f0; color: #2d7a4a; border: 1.5px solid rgba(45,122,74,0.3); }

/* ── 子產區 ── */
.details-section { display: flex; flex-direction: column; gap: 6px; }

/* ── AOC 產區選擇（波爾多同款居中遮罩） ── */
.aoc-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.34);
  backdrop-filter: blur(4px);
  z-index: 1100;
}
.aoc-drawer {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: calc(env(safe-area-inset-top, 0px) + 6px);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  width: min(90vw, 560px);
  background: #f7f3ee;
  border-radius: 20px 20px 14px 14px;
  box-shadow: 0 -10px 30px rgba(0,0,0,0.24);
  display: flex; flex-direction: column; overflow: hidden;
  z-index: 1101;
  padding-bottom: 10px;
}
.aoc-handle {
  display: block;
  width: 52px; height: 5px;
  border-radius: 999px;
  background: rgba(122, 90, 64, 0.28);
  margin: 10px auto 8px;
  flex-shrink: 0;
}
.drawer-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 16px 12px;
  font-size: 1.05rem; font-weight: 700;
  color: #6b1f1f;
  border-bottom: 1px solid rgba(122, 90, 64, 0.14);
  flex-shrink: 0;
}
.drawer-close { background: none; border: none; cursor: pointer; color: #6b1f1f; font-size: 1.1rem; }
.drawer-search-wrap { display: flex; align-items: center; gap: 8px; padding: 12px 16px 8px; flex-shrink: 0; }
.search-icon { font-size: 1rem; }
.search-input { flex: 1; border: 1px solid rgba(107,31,31,0.16); outline: none; font-size: 1rem; background: rgba(255,255,255,0.95); padding: 8px 12px; border-radius: 12px; font-family: inherit; }
.filter-tabs { display: flex; gap: 4px; padding: 6px 16px 10px; border-bottom: 1px solid rgba(122,90,64,0.1); flex-shrink: 0; }
.filter-tab { flex: 1; padding: 5px; border: none; border-radius: 8px; font-size: 0.78rem; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.05); color: #666; transition: all 0.2s; font-family: inherit; }
.filter-tab.active { background: #8B0000; color: white; }
.appellation-list { flex: 1; overflow-y: auto; padding: 6px 0; }
.app-item { display: flex; align-items: center; gap: 10px; padding: 10px 16px; cursor: pointer; border-bottom: 1px solid rgba(122,90,64,0.08); transition: background 0.15s; }
.app-item:hover { background: rgba(139,0,0,0.05); }
.app-item.active { background: rgba(139,0,0,0.1); border-left: 3px solid #8B0000; padding-left: 13px; }
.app-badge { font-size: 0.68rem; font-weight: 700; padding: 2px 6px; border-radius: 8px; white-space: nowrap; flex-shrink: 0; }
.app-badge.docg { background: #e8f0fe; color: #3b5bdb; }
.app-badge.doc  { background: #fff3e0; color: #e67e22; }
.app-badge.igt  { background: #f3e8ff; color: #7c3aed; }
.app-text { display: flex; flex-direction: column; min-width: 0; }
.app-name { font-size: 1rem; font-weight: 600; color: #2c2c2c; line-height: 1.3; }
.app-styles { font-size: 0.78rem; color: #999; margin-top: 1px; }
.no-results { padding: 20px; text-align: center; color: #bbb; font-size: 0.88rem; }

/* ── 圖層面板（布根地 mobile-layer-panel 同款） ── */
.mobile-layer-panel {
  position: fixed;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1003;
  width: min(90vw, 560px);
  background: rgba(252,248,244,0.98);
  backdrop-filter: blur(12px);
  border-radius: 18px;
  box-shadow: 0 10px 28px rgba(0,0,0,0.3);
  padding: 14px;
  border: 1px solid rgba(0,0,0,0.06);
}
.layers-panel-header {
  display: flex; align-items: center; justify-content: space-between;
  font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em;
  color: #6b1f1f; text-transform: uppercase;
  padding: 0 2px 10px;
  border-bottom: 1px solid rgba(0,0,0,0.08); margin-bottom: 10px;
}
.layers-panel-close { background: none; border: none; cursor: pointer; color: #6b1f1f; font-size: 14px; }
.layer-group { margin-bottom: 8px; }
.layer-group-label { font-size: 0.65rem; font-weight: 700; color: #aaa; text-transform: uppercase; letter-spacing: 0.05em; padding: 0 2px 4px; }
.layer-group-buttons { display: flex; flex-direction: column; gap: 4px; }
.btn-layer { display: flex; align-items: center; gap: 7px; width: 100%; padding: 8px 10px; border: 1.5px solid transparent; border-radius: 10px; cursor: pointer; font-size: 0.84rem; font-weight: 600; background: rgba(0,0,0,0.04); color: #444; transition: all 0.18s; text-align: left; font-family: inherit; }
.btn-layer:hover { background: rgba(0,0,0,0.07); }
.btn-layer.active { background: rgba(139,0,0,0.08); border-color: rgba(139,0,0,0.3); color: #8B0000; }
.lbtn-icon { font-size: 1rem; }
.lbtn-text { flex: 1; }
.lbtn-dot { width: 8px; height: 8px; border-radius: 50%; background: #ccc; flex-shrink: 0; transition: background 0.2s; }
.lbtn-dot.on { background: #8B0000; }

/* ── 底部 4宮格（布根地 mobile-grid-buttons 同款） ── */
.mobile-grid-buttons {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: min(90vw, 560px);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);
  z-index: 1000;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  padding: 8px;
  border-radius: 18px;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
}
.m-grid-btn {
  border-radius: 16px;
  background: linear-gradient(180deg, #faf5ef 0%, #f1e7dd 100%);
  color: #4f3422;
  min-height: 54px;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 3px;
  font-size: 0.76rem; font-weight: 800;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
  border: none; cursor: pointer;
  transition: all 0.2s;
  padding: 8px 4px;
}
.m-grid-btn.active {
  background: linear-gradient(180deg, #7b2424 0%, #5f1717 100%);
  color: #fff;
}
.m-grid-icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 30px; height: 30px; border-radius: 50%;
  background: rgba(107,31,31,0.08);
  font-size: 0.8rem; font-weight: 800; letter-spacing: 0.02em;
}
.m-grid-btn.active .m-grid-icon {
  background: rgba(255,255,255,0.18); color: #fff;
}
.m-grid-text { font-size: 0.76rem; font-weight: 800; }

/* ── Transitions ── */
.sheet-fade-enter-active, .sheet-fade-leave-active { transition: opacity 0.24s ease; }
.sheet-fade-enter-from, .sheet-fade-leave-to { opacity: 0; }
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.25s ease; }
.slide-up-enter-from, .slide-up-leave-to { opacity: 0; transform: translateX(-50%) translateY(12px); }

/* ── 氣候熱力 Overlay ── */
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
.cy-indicator-tabs {
  display: flex;
  gap: 6px;
  margin-bottom: 10px;
}
.cy-ind-btn {
  flex: 1;
  font-size: 0.72rem;
  padding: 5px 4px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.07);
  color: rgba(230,230,255,0.7);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  text-align: center;
}
.cy-ind-btn.active {
  background: #4575b4;
  border-color: #6699cc;
  color: #fff;
  font-weight: 700;
}
.cy-ind-btn:not(.active):hover {
  background: rgba(255,255,255,0.14);
  color: #fff;
}
.climate-header-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
.cy-year-badge {
  display: flex;
  align-items: baseline;
  gap: 6px;
}
.cy-year {
  font-size: 1.5rem;
  font-weight: 700;
  color: #aed6f1;
  line-height: 1;
}
.cy-golden {
  font-size: 0.7rem;
  color: #f39c12;
  font-weight: 600;
  white-space: nowrap;
}
.cy-stats {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.cy-aoc-name {
  font-size: 0.72rem;
  color: rgba(200,220,255,0.85);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 170px;
}
.cy-temp {
  font-size: 1.02rem;
  font-weight: 700;
  color: #f8fbff;
}
.cy-delta {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 1px 6px;
  border-radius: 999px;
  margin-top: 2px;
}
.cy-warm {
  background: rgba(215, 48, 39, 0.22);
  color: #ffc2bb;
}
.cy-cool {
  background: rgba(69, 117, 180, 0.28);
  color: #b8d7ff;
}
.cy-close {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.6);
  cursor: pointer;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  flex-shrink: 0;
}
.cy-close:hover {
  background: rgba(255,255,255,0.2);
  color: #fff;
}
.climate-slider {
  width: 100%;
  height: 4px;
  border-radius: 2px;
  accent-color: #4575b4;
  cursor: pointer;
  margin-bottom: 2px;
}
.climate-year-axis {
  display: flex;
  justify-content: space-between;
  font-size: 0.65rem;
  color: rgba(200,210,255,0.55);
  margin-bottom: 10px;
  padding: 0 2px;
}
.climate-legend {
  margin-bottom: 6px;
}
.legend-gradient {
  height: 8px;
  border-radius: 4px;
  width: 100%;
}
.legend-gradient.legend-temp { background: linear-gradient(to right, #4575b4, #ffffbf, #d73027); }
.legend-gradient.legend-sun  { background: linear-gradient(to right, #7851a9, #ffffbf, #fd8d3c); }
.legend-gradient.legend-rain { background: linear-gradient(to right, #fd8d3c, #ffffbf, #2c3ea0); }
.legend-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.63rem;
  color: rgba(200,210,255,0.6);
  margin-top: 3px;
}
.climate-footnote {
  font-size: 0.63rem;
  color: rgba(180,200,255,0.5);
  margin-top: 4px;
  line-height: 1.4;
}
.climate-slide-enter-active,
.climate-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.climate-slide-enter-from,
.climate-slide-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

/* ── Loading ── */
.loading-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.25);
  display: flex; align-items: center; justify-content: center; z-index: 2000;
}
.loading-spinner {
  width: 44px; height: 44px;
  border: 4px solid rgba(255,255,255,0.3);
  border-top-color: white; border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.map-error {
  position: fixed; bottom: 100px; left: 50%; transform: translateX(-50%);
  background: rgba(139,0,0,0.9); color: white; padding: 10px 18px;
  border-radius: 8px; font-size: 0.9rem; z-index: 2000;
}

/* ── Mobile：抽屜全螢幕 ── */
@media (max-width: 768px) {
  .aoc-drawer { left: 0; right: 0; transform: none; width: 100%; top: calc(env(safe-area-inset-top, 0px) + 2px); border-radius: 20px 20px 14px 14px; }
  .map-info-bar { left: 8px; right: 8px; width: auto; transform: none; }
  .climate-overlay { left: 8px; width: calc(100vw - 16px); }
}
</style>
