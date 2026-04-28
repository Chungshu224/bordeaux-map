<template>
  <section class="map-section">

    <!-- 全螢幕地圖 -->
    <div ref="mapContainer" class="map"></div>

    <!-- Header -->
    <RegionMapHeader
      regionName="紐西蘭"
      title="紐西蘭葡萄酒產區地圖"
      icon="🥝"
      @back="emit('back-to-course')"
    />

    <!-- 資訊卡 -->
    <RegionMapInfoPanel
      v-if="activeAOC?.aoc"
      :info="unifiedInfo"
      theme-color="#1a5c2d"
      :audio-available="true"
      :is-playing-audio="isPlayingAudio"
      :collapsed="infoCollapsed"
      @toggle-collapse="infoCollapsed = !infoCollapsed"
      @play-audio="playPronunciation"
      @reset="emit('resetMap')"
    />

    <!-- 圖層面板 -->
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
    </div>

    <!-- 地質圖層不透明度控制 -->
    <transition name="nz-geo-slide">
      <div v-if="soilEnabled" class="nz-geo-float-panel">
        <div class="nz-geo-panel-row">
          <span class="nz-geo-panel-label">🗺️ 地質圖層</span>
          <span class="nz-geo-panel-credit">GNS Science</span>
          <button class="nz-geo-panel-close" @click="toggleSoil">✕</button>
        </div>
        <div class="nz-geo-opacity-row">
          <span class="nz-geo-opacity-lbl">透明度</span>
          <input type="range" min="0.1" max="1" step="0.05" v-model.number="soilOpacity" class="nz-geo-slider" />
          <span class="nz-geo-opacity-val">{{ Math.round(soilOpacity * 100) }}%</span>
        </div>
        <div class="nz-geo-hint">點擊地圖可查看地質資訊</div>
      </div>
    </transition>

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

    <!-- 底部工具列 -->
    <RegionMapMobileToolbar
      v-if="mapReady"
      :aoc-open="props.drawerOpen"
      :layer-open="layersOpen"
      :is3D="is3D"
      :info-open="!!activeAOC?.aoc && !infoCollapsed"
      @action="handleMobileAction"
    />

    <div v-if="mapError" class="map-error">{{ mapError }}</div>
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
  </section>
</template>

<script setup>
// 葡萄品種分類顏色
const grapeTypeColors = { red: '#8B0000', white: '#F0E68C', aromatic: '#87CEEB', other: '#bbb' }
const redGrapes = ['Pinot Noir', 'Merlot', 'Syrah', 'Cabernet Sauvignon', 'Malbec', 'Pinotage', 'Chambourcin', 'Petit Verdot', 'Cabernet Franc', 'Montepulciano']
const whiteGrapes = ['Chardonnay', 'Sauvignon Blanc', 'Pinot Gris', 'Viognier', 'Grüner Veltliner', 'Riesling', 'Gewurztraminer']
const aromaticGrapes = ['Arneis']

function grapeBadgeStyle(grape) {
  if (redGrapes.includes(grape)) return { backgroundColor: grapeTypeColors.red, color: '#fff', fontWeight: 'bold' }
  if (whiteGrapes.includes(grape)) return { backgroundColor: grapeTypeColors.white, color: '#333', fontWeight: 'bold' }
  if (aromaticGrapes.includes(grape)) return { backgroundColor: grapeTypeColors.aromatic, color: '#333', fontWeight: 'bold' }
  return { backgroundColor: grapeTypeColors.other, color: '#333' }
}

import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as turf from '@turf/turf'
import { getMapboxToken, getMapboxStyleUrl } from '@/utils/getMapboxToken'
import {
  RegionMapHeader, RegionMapLayerPanel, RegionMapInfoPanel,
  RegionMapAppellationDrawer, RegionMapMobileToolbar
} from '../shared/regionMap/index.js'

const router = useRouter()

const props = defineProps({
  activeAOC: Object,
  regionInfo: Object,
  styleColors: { type: Object, default: () => ({}) },
  drawerOpen: { type: Boolean, default: false },
})

const emit = defineEmits(['resetMap', 'back-to-course', 'openDrawer'])

const backToCourse = () => emit('back-to-course')
const resetMap = () => emit('resetMap')

const isLoading = ref(false)
const mapReady = ref(false)
const mapError = ref(null)
const mapContainer = ref(null)
const infoCollapsed = ref(false)
let map = null
const is3D = ref(false)
const layersOpen = ref(false)
const contoursEnabled = ref(false)
const geojsonCache = new Map()
const isPlayingAudio = ref(false)
let currentAudio = null

// ── Climate state ──────────────────────────────────────────────────────────
const climateEnabled   = ref(false)
const climateYear      = ref(2007)
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
const GOLDEN_VINTAGES_NZ = new Set([1998, 2007, 2013, 2019, 2021])

const NZ_REGIONS = [
  { file: 'Auckland.geojson',                     id: 'Auckland' },
  { file: 'Bannockburn.geojson',                  id: 'CentralOtago' },
  { file: 'Central_Hawkes_Bay.geojson',           id: 'HawkesBay' },
  { file: 'Central_Otago.geojson',                id: 'CentralOtago' },
  { file: 'Gisborne.geojson',                     id: 'Gisborne' },
  { file: 'Gladstone.geojson',                    id: 'Wairarapa' },
  { file: 'Hawkes_Bay.geojson',                   id: 'HawkesBay' },
  { file: 'Kumeu.geojson',                        id: 'Auckland' },
  { file: 'Marlborough.geojson',                  id: 'Marlborough' },
  { file: 'Martinborough.geojson',                id: 'Wairarapa' },
  { file: 'Matakana.geojson',                     id: 'Auckland' },
  { file: 'Nelson.geojson',                       id: 'Nelson' },
  { file: 'North_Canterbury.geojson',             id: 'NorthCanterbury' },
  { file: 'Northland.geojson',                    id: 'Northland' },
  { file: 'Waiheke_Island.geojson',               id: 'Auckland' },
  { file: 'Waipara_Valley.geojson',               id: 'NorthCanterbury' },
  { file: 'Waitaki_Valley_North_Otago.geojson',   id: 'WaitakiValley' },
]
const NZ_CLIMATE_ITEMS = [
  { id: 'Auckland' }, { id: 'CentralOtago' }, { id: 'HawkesBay' },
  { id: 'Gisborne' }, { id: 'Wairarapa' },    { id: 'Marlborough' },
  { id: 'Nelson' },   { id: 'NorthCanterbury' }, { id: 'Northland' }, { id: 'WaitakiValley' },
]

// ── Climate computed ──────────────────────────────────────────────────────
const currentIndicatorConfig = computed(() => CLIMATE_INDICATORS.find(i => i.id === climateIndicator.value))
const currentGlobalStats = computed(() => {
  if (climateIndicator.value === 'sun') return climateStatsSun.value
  if (climateIndicator.value === 'rain') return climateStatsRain.value
  return climateStats.value
})
const isGoldenVintage = computed(() => GOLDEN_VINTAGES_NZ.has(climateYear.value))
const climateCurrentAocLabel = computed(() => {
  if (!props.activeAOC?.aoc) return ''
  const r = NZ_REGIONS.find(x => x.file === props.activeAOC.aoc)
  return r ? r.id.replace(/([A-Z])/g, ' $1').trim() : ''
})
const currentYearValue = computed(() => {
  if (!props.activeAOC?.aoc || !climateData.value || !climateYears.value.length) return null
  const r = NZ_REGIONS.find(x => x.file === props.activeAOC.aoc)
  if (!r) return null
  const idx = climateYears.value.indexOf(climateYear.value)
  if (idx < 0) return null
  const cfg = currentIndicatorConfig.value
  const arr = climateData.value[r.id]?.[cfg.dataKey]
  if (!Array.isArray(arr) || idx >= arr.length) return null
  return Number(arr[idx]).toFixed(cfg.id === 'rain' ? 0 : 1)
})
const currentYearDelta = computed(() => {
  if (!props.activeAOC?.aoc || !climateData.value || currentYearValue.value === null) return null
  const r = NZ_REGIONS.find(x => x.file === props.activeAOC.aoc)
  if (!r) return null
  const cfg = currentIndicatorConfig.value
  const aoc = climateData.value[r.id]
  if (!aoc) return null
  const baseline = aoc[cfg.baselineKey]
  if (baseline == null) return null
  return (Number(currentYearValue.value) - Number(baseline)).toFixed(cfg.id === 'rain' ? 0 : 1)
})
const currentYearDeltaPositive = computed(() => (Number(currentYearDelta.value) || 0) > 0)

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
    const key = item.name || item.id
    let seed = 0; for (const ch of key) seed += ch.charCodeAt(0)
    const base = 15.5 + (seed % 60) * 0.05
    const amp = 0.4 + (seed % 10) * 0.03
    const trend = 0.018 + (seed % 3) * 0.004
    const sunBase = 650 + (seed % 100)
    const rainBase = 100 + (seed % 80)
    const temps = years.map((y,i) => {
      const v = Number((base + Math.sin((i+seed%7)*0.55)*amp + (y-2000)*trend).toFixed(2))
      allT.push(v); ySums[i]+=v; yCounts[i]+=1; return v
    })
    const sun = years.map((_,i) => {
      const v = Number((sunBase + Math.sin((i+seed%5)*0.5)*40).toFixed(1))
      allS.push(v); ySunSums[i]+=v; return v
    })
    const rain = years.map((_,i) => {
      const v = Number((rainBase + Math.cos((i+seed%6)*0.52)*25).toFixed(1))
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
      climateYear.value = climateYears.value.includes(2007) ? 2007 : climateYears.value[0]
  }
  try {
    const res = await fetch('/data/newzealand-climate.json')
    if (res.ok) { apply(await res.json()); return }
  } catch (_) {}
  apply(createDemoClimatePayload(NZ_CLIMATE_ITEMS))
}

function clearAllNZClimateLayers() {
  if (!map) return
  for (const r of NZ_REGIONS) {
    const safe = r.file.replace('.geojson','').replace(/[^a-zA-Z0-9]/g,'_')
    if (map.getLayer(`nz_cl_fill_${safe}`)) map.removeLayer(`nz_cl_fill_${safe}`)
    if (map.getLayer(`nz_cl_line_${safe}`)) map.removeLayer(`nz_cl_line_${safe}`)
    if (map.getSource(`nz_cl_${safe}`)) map.removeSource(`nz_cl_${safe}`)
  }
}

async function loadAllNZOutlines() {
  if (!map) return
  clearAllNZClimateLayers()
  for (const region of NZ_REGIONS) {
    const url = `/newzealand/geojson/NewZealand/${region.file}`
    try {
      let geojson
      if (geojsonCache.has(url)) geojson = geojsonCache.get(url)
      else {
        const res = await fetch(url)
        if (!res.ok) continue
        geojson = await res.json()
        geojsonCache.set(url, geojson)
      }
      const safe = region.file.replace('.geojson','').replace(/[^a-zA-Z0-9]/g,'_')
      const srcId = `nz_cl_${safe}`
      if (!map.getSource(srcId)) {
        map.addSource(srcId, { type: 'geojson', data: geojson })
        map.addLayer({ id: `nz_cl_fill_${safe}`, type: 'fill', source: srcId,
          paint: { 'fill-color': '#fff', 'fill-opacity': 0.08 } })
        map.addLayer({ id: `nz_cl_line_${safe}`, type: 'line', source: srcId,
          paint: { 'line-color': '#fff', 'line-width': 1.2, 'line-opacity': 0.7 } })
      }
    } catch (_) {}
  }
}

function applyClimateColor(year) {
  if (!map || !climateEnabled.value || !climateData.value || !climateYears.value.length) return
  const idx = climateYears.value.indexOf(year)
  if (idx < 0) return
  const cfg = currentIndicatorConfig.value
  for (const region of NZ_REGIONS) {
    const safe = region.file.replace('.geojson','').replace(/[^a-zA-Z0-9]/g,'_')
    const fillId = `nz_cl_fill_${safe}`
    const lineId = `nz_cl_line_${safe}`
    if (!map.getLayer(fillId)) continue
    const arr = climateData.value[region.id]?.[cfg.dataKey]
    const value = Array.isArray(arr) && idx < arr.length ? Number(arr[idx]) : null
    const color = Number.isFinite(value) ? valueToClimateColor(value, cfg.id) : '#f0f0f0'
    const opacity = Number.isFinite(value) ? 0.48 : 0.08
    map.setPaintProperty(fillId, 'fill-color', color)
    map.setPaintProperty(fillId, 'fill-opacity', opacity)
    if (map.getLayer(lineId)) {
      map.setPaintProperty(lineId, 'line-color', '#ffffff')
      map.setPaintProperty(lineId, 'line-opacity', 0.55)
    }
  }
}

function setClimateIndicator(id) { climateIndicator.value = id; applyClimateColor(climateYear.value) }
function onClimateYearChange() { applyClimateColor(climateYear.value) }

async function toggleClimate() {
  if (!map) return
  if (!climateEnabled.value) {
    try {
      await loadClimateData()
      await loadAllNZOutlines()
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
  clearAllNZClimateLayers()
}

function aocColor() { return '#006400' }

const showAOCGeojson = async (groupName, aocFile) => {
  if (!map) return
  const geojsonPath = `/newzealand/geojson/NewZealand/${aocFile}`
  isLoading.value = true
  mapError.value = null
  try {
    let geojson
    if (geojsonCache.has(geojsonPath)) {
      geojson = geojsonCache.get(geojsonPath)
    } else {
      const res = await fetch(geojsonPath)
      if (!res.ok) throw new Error(`無法載入 geojson (${res.status})`)
      geojson = await res.json()
      geojsonCache.set(geojsonPath, geojson)
    }
    if (map.getLayer('aoc-fill')) map.removeLayer('aoc-fill')
    if (map.getLayer('aoc-outline')) map.removeLayer('aoc-outline')
    if (map.getSource('aoc')) map.removeSource('aoc')
    map.addSource('aoc', { type: 'geojson', data: geojson })
    map.addLayer({ id: 'aoc-fill', type: 'fill', source: 'aoc', paint: { 'fill-color': aocColor(), 'fill-opacity': 0.10 } })
    map.addLayer({ id: 'aoc-outline', type: 'line', source: 'aoc', paint: { 'line-color': '#fff', 'line-width': 2 } })
    const bbox = turf.bbox(geojson)
    map.fitBounds(bbox, { padding: 40, duration: 800 })
  } catch (err) {
    console.error('載入 geojson 失敗:', err)
    mapError.value = `載入 geojson 失敗: ${err.message}`
  } finally {
    isLoading.value = false
  }
}

const playPronunciation = () => {
  if (!props.activeAOC?.aoc) return
  if (currentAudio) { currentAudio.pause(); currentAudio = null }
  const audioFileName = props.activeAOC.aoc.replace('.geojson', '.mp3')
  const audioPath = `/newzealand/sounds/${audioFileName}`
  currentAudio = new Audio(audioPath)
  isPlayingAudio.value = true
  currentAudio.play().catch(() => { isPlayingAudio.value = false })
  currentAudio.onended = () => { isPlayingAudio.value = false; currentAudio = null }
  currentAudio.onerror = () => { isPlayingAudio.value = false; currentAudio = null }
}

const toggle3D = () => {
  is3D.value = !is3D.value
  if (map) map.easeTo({ pitch: is3D.value ? 45 : 0, duration: 800 })
}

// ── 等高線（NZ：南阿爾卑斯山脈高達3000m，標準100m主線）―――――――――――――――――――――
let nzContoursInit = false
function initNZContourLayers() {
  if (nzContoursInit || !map) return
  nzContoursInit = true
  if (!map.getSource('mapbox-dem')) {
    map.addSource('mapbox-dem', { type: 'raster-dem', url: 'mapbox://mapbox.mapbox-terrain-dem-v1', tileSize: 512, maxzoom: 14 })
  }
  if (!map.getSource('nz-contours')) {
    map.addSource('nz-contours', { type: 'vector', url: 'mapbox://mapbox.mapbox-terrain-v2' })
  }
  if (!map.getLayer('nz-contours-line')) {
    map.addLayer({
      id: 'nz-contours-line', type: 'line',
      source: 'nz-contours', 'source-layer': 'contour',
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
          ['interpolate', ['linear'], ['zoom'], 9, 0.9, 11, 1.6, 13, 2.2, 16, 3],
          ['interpolate', ['linear'], ['zoom'], 9, 0.3, 11, 0.7, 13, 1,   16, 1.5]
        ],
        'line-opacity': ['interpolate', ['linear'], ['zoom'], 9, 0.4, 11, 0.6, 13, 0.8, 16, 0.9]
      },
      minzoom: 9,
    })
  }
  if (!map.getLayer('nz-contour-labels')) {
    map.addLayer({
      id: 'nz-contour-labels', type: 'symbol',
      source: 'nz-contours', 'source-layer': 'contour',
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
  if (contoursEnabled.value) initNZContourLayers()
  const vis = contoursEnabled.value ? 'visible' : 'none'
  if (map.getLayer('nz-contours-line'))  map.setLayoutProperty('nz-contours-line',  'visibility', vis)
  if (map.getLayer('nz-contour-labels')) map.setLayoutProperty('nz-contour-labels', 'visibility', vis)
}

const initMap = async (retry = 0) => {
  try {
    if (!mapContainer.value) {
      if (retry < 5) setTimeout(() => initMap(retry + 1), 200)
      else mapError.value = '無法獲取地圖容器'
      return
    }
    const MAPBOX_TOKEN = getMapboxToken()
    mapboxgl.accessToken = MAPBOX_TOKEN
    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: getMapboxStyleUrl(MAPBOX_TOKEN, 'satellite-streets-v12'),
      center: [174.886, -40.9006],
      zoom: 4,
      pitch: is3D.value ? 45 : 0,
      bearing: 0
    })
    map.on('load', () => {
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')
      map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
      mapReady.value = true
    })
    map.on('error', (err) => {
      mapError.value = `地圖錯誤: ${err.error?.message || '未知錯誤'}`
    })
    mapError.value = null
  } catch (err) {
    mapError.value = `初始化錯誤: ${err.message}`
  }
}

watch(() => props.activeAOC, (newAOC, oldAOC) => {
  if (newAOC?.aoc) {
    if (newAOC.aoc !== oldAOC?.aoc) showAOCGeojson(newAOC.group, newAOC.aoc)
  } else if (map?.getLayer('aoc-fill')) {
    map.removeLayer('aoc-fill')
    map.removeLayer('aoc-outline')
    map.removeSource('aoc')
    map.flyTo({ center: [174.886, -40.9006], zoom: 4 })
  }
})

onMounted(() => initMap())

onUnmounted(() => {
  if (currentAudio) { currentAudio.pause(); currentAudio = null }
  if (map) { map.remove(); map = null }
})

// ── 統一 adapters ────────────────────────────────────────────────
const unifiedInfo = computed(() => {
  const aoc = props.activeAOC
  if (!aoc?.aoc) return null
  const r = props.regionInfo
  const name = r?.name || aoc.aoc.replace('.geojson', '').replace(/_/g, ' ')
  if (!r) return { name, description: '' }
  const meta = []
  if (r.hectare) meta.push({ label: '面積', value: `${r.hectare} 公頃` })
  if (r.type) meta.push({ label: '類型', value: r.type })
  const stylesRaw = Array.isArray(r.style) ? r.style : (r.style ? [r.style] : [])
  const grapesRaw = r.grapes
    ? (Array.isArray(r.grapes) ? r.grapes : r.grapes.split(',').map(g => g.trim()))
    : []
  const climateText = r.details?.climate || ''
  const descParts = [r.description, r.details?.introduction].filter(Boolean)
  return {
    name,
    meta,
    styles: stylesRaw,
    grapes: grapesRaw,
    climate: climateText,
    description: descParts.join(' — '),
    estates: [],
  }
})

// ── NZ 地質圖層（GNS Science WMS）──────────────────────────────────────────
const soilEnabled   = ref(false)
const soilOpacity   = ref(0.6)
let gnsPopup        = null
let gnsClickReg     = false

// 紐西蘭主要地質類型 → 葡萄酒產區說明（對應 GNS NZL_GNS_1M name/type 欄位關鍵字）
const NZ_GEO_DESC = {
  alluvial: {
    zh: '沖積礫石／砂礫地層',
    icon: '🪨',
    wine: 'Marlborough 的 Wairau Valley 及 Hawke\'s Bay 的 Gimblett Gravels 均以深厚的河流礫石層著稱，礫石排水性極佳，逼使葡萄根系深扎，造就濃縮風味的 Sauvignon Blanc 與 Syrah。'
  },
  loess: {
    zh: '黃土層（Loess）',
    icon: '🌾',
    wine: 'Marlborough 台地（Renwick 一帶）覆蓋淺薄黃土，加上底部石礫，形成飽受日照且排水良好的組合，賦予 Sauvignon Blanc 濃烈芬芳與清晰礦物感。'
  },
  schist: {
    zh: '片岩（Schist）',
    icon: '💎',
    wine: 'Central Otago 的片岩地形是紐西蘭最獨特的葡萄酒地質。風化的雲母片岩鬆散易碎，熱容量高，白天儲熱、夜晚釋放，協助 Pinot Noir 達到成熟，同時保留高酸度與細膩礦物風味。'
  },
  limestone: {
    zh: '石灰岩／鈣質岩層',
    icon: '🏔️',
    wine: 'North Canterbury（Waipara Valley）的石灰岩底土帶來豐富鈣質，有助葡萄藤緩慢吸水，Riesling 與 Pinot Noir 在此發展出優雅複雜度，與布根地風格相近。'
  },
  basalt: {
    zh: '玄武岩（火山熔岩）',
    icon: '🌋',
    wine: 'Auckland 火山丘（如 Waiheke Island 及 Kumeu）的玄武岩土壤富含礦物質，排水佳且保溫，適合種植 Cabernet Sauvignon、Merlot 與 Chardonnay，酒款通常飽滿而結構良好。'
  },
  granite: {
    zh: '花崗岩／侵入岩',
    icon: '⛰️',
    wine: '紐西蘭南島西部及 Northland 部分區域存在古老花崗質地層，土壤貧瘠且酸性，礦物質豐富，非常適合生長緩慢的白葡萄品種。'
  },
  sandstone: {
    zh: '砂岩／粉砂岩',
    icon: '🏜️',
    wine: '砂岩在 Marlborough、Hawke\'s Bay 及 Canterbury 廣泛分布，其鬆疏質地提供良好透水性；與黃土或黏土互層時，能平衡水分保留與排水，適合多種葡萄品種。'
  },
  greywacke: {
    zh: '灰瓦克岩（硬砂岩）',
    icon: '🗿',
    wine: 'Greywacke（硬砂岩）是紐西蘭最常見的基岩，構成南阿爾卑斯山的骨架。Marlborough 著名的 Greywacke 酒莊即以此命名。河床上的圓礫多源自此岩，葡萄根系若深達此層，常帶出鮮明礦物鹹感。'
  },
  clay: {
    zh: '黏土／泥岩',
    icon: '🟤',
    wine: '部分 Hawke\'s Bay 及 Gisborne 的黏土土壤雖保水性高，但葡萄需精細水分管理。Gisborne 以黏土重壤區種植 Chardonnay，反而生成豐腴圓潤的酒體，風格獨特。'
  },
  volcanic: {
    zh: '火山灰／火山碎屑岩',
    icon: '🌋',
    wine: 'Northland 及 Auckland 地區的火山灰土壤質地輕鬆、排水佳，富含微量元素。Waiheke Island 的黏土火山土混合地層賦予 Bordeaux 混調酒款深厚複雜度。'
  },
}

function getNZGeoDesc(name, type) {
  if (!name && !type) return null
  const combined = `${(name || '')} ${(type || '')}`.toLowerCase()
  if (/schist|schistose/.test(combined))                        return NZ_GEO_DESC.schist
  if (/loess|loessial/.test(combined))                          return NZ_GEO_DESC.loess
  if (/limestone|calcareous|chalk/.test(combined))              return NZ_GEO_DESC.limestone
  if (/greywacke|graywacke/.test(combined))                     return NZ_GEO_DESC.greywacke
  if (/basalt|basaltic|lava|volcanic rock/.test(combined))      return NZ_GEO_DESC.basalt
  if (/volcanic|tephra|tuff|ignimbrite/.test(combined))         return NZ_GEO_DESC.volcanic
  if (/granite|granodiorite|diorite|gabbro|intrusive/.test(combined)) return NZ_GEO_DESC.granite
  if (/alluvial|gravel|fluvial|outwash/.test(combined))         return NZ_GEO_DESC.alluvial
  if (/sandstone|siltstone|mudstone|argillite/.test(combined))  return NZ_GEO_DESC.sandstone
  if (/clay|clayey|silty/.test(combined))                       return NZ_GEO_DESC.clay
  return null
}

// ── 地質術語中文對照 ──────────────────────────────────────────────────────────
const NZ_LITH_ZH = {
  'sandstone': '砂岩', 'shale': '頁岩', 'limestone': '石灰岩', 'mudstone': '泥岩',
  'siltstone': '粉砂岩', 'conglomerate': '礫岩', 'chert': '燧石岩', 'dolostone': '白雲岩',
  'dolomite': '白雲岩', 'marble': '大理岩', 'slate': '板岩', 'schist': '片岩',
  'gneiss': '片麻岩', 'phyllite': '千枚岩', 'quartzite': '石英岩',
  'granite': '花崗岩', 'granodiorite': '花崗閃長岩', 'diorite': '閃長岩',
  'gabbro': '輝長岩', 'rhyolite': '流紋岩', 'andesite': '安山岩',
  'basalt': '玄武岩', 'tuff': '凝灰岩', 'ignimbrite': '熔結凝灰岩',
  'tephra': '火山碎屑物', 'loess': '黃土',
  'alluvium': '沖積層', 'gravel': '礫石', 'sand': '砂', 'clay': '黏土',
  'silt': '粉砂', 'mud': '淤泥',
  'greywacke': '雜砂岩', 'graywacke': '雜砂岩', 'argillite': '泥質岩',
  'mixed': '混合岩', 'undivided': '未分類', 'not reported': '未記錄',
}
const NZ_AGE_ZH = {
  'cambrian': '寒武紀', 'ordovician': '奧陶紀', 'silurian': '志留紀',
  'devonian': '泥盆紀', 'carboniferous': '石炭紀', 'permian': '二疊紀',
  'triassic': '三疊紀', 'jurassic': '侏羅紀', 'cretaceous': '白堊紀',
  'paleocene': '古新世', 'eocene': '始新世', 'oligocene': '漸新世',
  'miocene': '中新世', 'pliocene': '上新世', 'pleistocene': '更新世',
  'holocene': '全新世', 'quaternary': '第四紀', 'neogene': '新近紀',
  'paleogene': '古近紀', 'cenozoic': '新生代', 'mesozoic': '中生代',
  'paleozoic': '古生代', 'precambrian': '前寒武紀',
  'early': '早', 'middle': '中', 'late': '晚', 'upper': '晚', 'lower': '早',
}
function nzTranslateLith(en) {
  if (!en) return ''
  let s = en.trim().toLowerCase()
  for (const [k, v] of Object.entries(NZ_LITH_ZH)) {
    s = s.replace(new RegExp(`\\b${k}\\b`, 'gi'), v)
  }
  return s
}
function nzTranslateAge(en) {
  if (!en) return ''
  let s = en.trim()
  for (const [k, v] of Object.entries(NZ_AGE_ZH)) {
    s = s.replace(new RegExp(`\\b${k}\\b`, 'gi'), v)
  }
  return s.replace(/\s+to\s+/gi, ' 至 ').replace(/\s+and\s+/gi, ' 及 ')
}

// 預設中文土壤介紹（無對應岩性時的 fallback）
const NZ_GEO_DEFAULT = {
  zh: '混合沉積土壤',
  icon: '🌱',
  wine: '此處為混合型沉積土壤，通常由風化基岩、河流沖積與細粒沉積物交織而成，排水與保水性介於砂質與黏質之間，能支持多元葡萄品種生長，並賦予葡萄酒柔順的果香與適度的礦物層次。'
}

function renderGNSPopupHTML(props) {
  const lith     = props.lith || ''
  const age      = props.age  || ''
  const wineInfo = getNZGeoDesc(lith, '') || {
    ...NZ_GEO_DEFAULT,
    zh: nzTranslateLith(lith) || NZ_GEO_DEFAULT.zh,
  }
  const displayType = wineInfo.zh
  const displayAge  = nzTranslateAge(age)
  return `
    <div class="nz-geo-popup">
      <div class="nz-geo-popup-header">🗺️ 紐西蘭地質</div>
      ${displayType ? `<div class="nz-geo-row"><span class="nz-geo-label">岩石類型</span><span class="nz-geo-val">${displayType}</span></div>` : ''}
      ${displayAge  ? `<div class="nz-geo-row"><span class="nz-geo-label">地質年代</span><span class="nz-geo-val">${displayAge}</span></div>`  : ''}
      <div class="nz-geo-wine-block">
        <div class="nz-geo-wine-title">${wineInfo.icon} ${wineInfo.zh}</div>
        <div class="nz-geo-wine-text">${wineInfo.wine}</div>
      </div>
    </div>`
}

// 目前選取的產區 polygon（用於裁切 mask 與點擊命中測試）
let activeRegionFeature = null

async function getActiveRegionGeoJSON() {
  const aocFile = props.activeAOC?.aoc
  if (!aocFile) return null
  const url = `/newzealand/geojson/NewZealand/${aocFile}`
  let geojson = geojsonCache.get(url)
  if (!geojson) {
    try {
      const r = await fetch(url)
      if (r.ok) { geojson = await r.json(); geojsonCache.set(url, geojson) }
    } catch (_) {}
  }
  if (!geojson) return null
  if (geojson.type === 'FeatureCollection' && geojson.features?.length) {
    let merged = geojson.features[0]
    for (let i = 1; i < geojson.features.length; i++) {
      try { merged = turf.union(turf.featureCollection([merged, geojson.features[i]])) } catch (_) {}
    }
    return merged
  }
  if (geojson.type === 'Feature') return geojson
  return null
}

async function applyActiveRegionMask() {
  if (!map) return
  // 清除舊 mask
  if (map.getLayer('nz-geo-clip-mask'))  map.removeLayer('nz-geo-clip-mask')
  if (map.getSource('nz-geo-clip-src'))  map.removeSource('nz-geo-clip-src')

  activeRegionFeature = await getActiveRegionGeoJSON()
  if (!activeRegionFeature) return

  try {
    const maskData = turf.mask(activeRegionFeature)
    map.addSource('nz-geo-clip-src', { type: 'geojson', data: maskData })
    map.addLayer({
      id: 'nz-geo-clip-mask',
      type: 'fill',
      source: 'nz-geo-clip-src',
      paint: { 'fill-color': '#000', 'fill-opacity': 1 },
    })
  } catch (_) {}
}

async function loadGNSLayer() {
  if (!map) return
  // 移除舊圖層
  if (map.getLayer('nz-geo-clip-mask'))  map.removeLayer('nz-geo-clip-mask')
  if (map.getSource('nz-geo-clip-src'))  map.removeSource('nz-geo-clip-src')
  if (map.getLayer('nz-geology-layer'))  map.removeLayer('nz-geology-layer')
  if (map.getSource('nz-geology-wms'))   map.removeSource('nz-geology-wms')

  // Macrostrat 公開地質向量圖磚（無需 CORS proxy，CC BY 4.0）
  map.addSource('nz-geology-wms', {
    type: 'vector',
    tiles: ['https://tiles.macrostrat.org/carto/{z}/{x}/{y}.mvt'],
    tileSize: 512,
    minzoom: 0,
    maxzoom: 15,
    attribution: '© Macrostrat (CC BY 4.0)',
  })
  map.addLayer({
    id: 'nz-geology-layer',
    type: 'fill',
    source: 'nz-geology-wms',
    'source-layer': 'units',
    paint: {
      'fill-color': ['coalesce', ['get', 'color'], '#cccccc'],
      'fill-opacity': soilOpacity.value,
    },
  })

  // 裁切 mask：僅以目前選取的產區生成（減少載入量）
  await applyActiveRegionMask()

  // Click handler（限制在目前選取的產區範圍內才反應）
  if (!gnsClickReg) {
    gnsClickReg = true
    map.on('click', (e) => {
      if (!soilEnabled.value) return
      if (!activeRegionFeature) return
      // 點擊只限選取產區範圍內
      try {
        const pt = turf.point([e.lngLat.lng, e.lngLat.lat])
        if (!turf.booleanPointInPolygon(pt, activeRegionFeature)) return
      } catch (_) { return }
      const features = map.queryRenderedFeatures(e.point, { layers: ['nz-geology-layer'] })
      const attrs = features[0]?.properties || {}
      if (gnsPopup) gnsPopup.remove()
      gnsPopup = new mapboxgl.Popup({ maxWidth: '340px', className: 'nz-geology-popup-wrap' })
        .setLngLat(e.lngLat)
        .setHTML(renderGNSPopupHTML(attrs))
        .addTo(map)
    })
  }
}

function removeGNSLayer() {
  if (!map) return
  if (map.getLayer('nz-geo-clip-mask'))  map.removeLayer('nz-geo-clip-mask')
  if (map.getSource('nz-geo-clip-src'))  map.removeSource('nz-geo-clip-src')
  if (map.getLayer('nz-geology-layer'))  map.removeLayer('nz-geology-layer')
  if (map.getSource('nz-geology-wms'))   map.removeSource('nz-geology-wms')
  if (gnsPopup) { gnsPopup.remove(); gnsPopup = null }
}

async function toggleSoil() {
  if (!map) return
  if (!soilEnabled.value) {
    soilEnabled.value = true
    await loadGNSLayer()
  } else {
    soilEnabled.value = false
    removeGNSLayer()
  }
}

watch(soilOpacity, val => {
  if (map && map.getLayer('nz-geology-layer')) {
    map.setPaintProperty('nz-geology-layer', 'fill-opacity', val)
  }
})

// 切換選取的產區時：重新生成 mask（地質圖層只顯示新產區範圍內）
watch(() => props.activeAOC?.aoc, async () => {
  if (soilEnabled.value && map?.getLayer('nz-geology-layer')) {
    await applyActiveRegionMask()
  } else {
    activeRegionFeature = await getActiveRegionGeoJSON()
  }
  if (gnsPopup) { gnsPopup.remove(); gnsPopup = null }
})

const handleMobileAction = (action) => {
  if (action === 'aoc') { emit('openDrawer') }
  else if (action === 'layer') { layersOpen.value = !layersOpen.value }
  else if (action === '3d') { toggle3D() }
  else if (action === 'info') { infoCollapsed.value = !infoCollapsed.value }
}
</script>

<style scoped>
/* ── Base ─────────────────────────────────────────────────────── */
.map-section { flex: 1; position: relative; height: 100%; overflow: hidden; }
.map { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }

/* ── Header (Bordeaux style) ──────────────────────────────────── */
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
.map-hdr-btn {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  background: rgba(0,100,0,0.82);
  color: #fff;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  transition: background 0.2s;
  white-space: nowrap;
}
.map-hdr-btn:hover { background: rgba(0,120,0,0.95); }
.map-hdr-btn.ghost {
  background: rgba(255,255,255,0.75);
  border: 1.5px solid rgba(0,100,0,0.5);
  color: #004d00;
}
.map-hdr-btn.ghost:hover { background: rgba(255,255,255,0.92); }
.map-header h1 {
  margin: 0;
  font-size: 1.3rem;
  color: #004d00;
  text-align: center;
  flex: 1;
  text-shadow: 0 1px 4px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.9);
  padding-top: 4px;
  pointer-events: none;
}

/* ── Info bar (Bordeaux style: white card, bottom-left) ────────── */
.map-info-bar {
  position: absolute;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 110px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255,255,255,0.97);
  padding: 18px;
  border-radius: 8px;
  width: min(90vw, 380px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  z-index: 10;
  font-size: 16px;
  transition: all 0.3s ease;
  color: #222;
}
.map-info-bar.collapsed { width: min(90vw, 380px); padding: 12px 18px; }
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
.aoc-dot { width: 10px; height: 10px; border-radius: 50%; margin-right: 8px; flex-shrink: 0; }
.title-buttons { display: flex; gap: 8px; align-items: center; flex-shrink: 0; }
.btn-collapse-inline {
  display: flex; align-items: center; gap: 4px;
  padding: 6px 10px;
  background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  color: #444;
  font-size: 0.82rem;
  font-weight: 600;
  transition: all 0.2s;
}
.btn-collapse-inline:hover { background: linear-gradient(135deg, #e8e8e8, #d0d0d0); border-color: #006400; color: #006400; }
.btn-text { font-size: 0.85rem; white-space: nowrap; }
.map-info-bar.collapsed .btn-text { display: none; }
.map-info-bar.collapsed .btn-collapse-inline { padding: 6px 8px; }
.btn-pronunciation-icon {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px;
  padding: 6px;
  border: none; border-radius: 10px;
  background: linear-gradient(180deg, #764ba2 0%, #667eea 100%);
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.16);
  flex-shrink: 0;
}
.btn-pronunciation-icon:disabled { opacity: 0.6; cursor: not-allowed; }
.btn-pronunciation-icon:not(:disabled):hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(0,0,0,0.22); }
.btn-reset-icon {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px;
  padding: 6px;
  border: none; border-radius: 10px;
  background: linear-gradient(180deg, #ff6f61 0%, #ef4f45 100%);
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.16);
  flex-shrink: 0;
}
.btn-reset-icon:hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(0,0,0,0.22); }
.info-details {
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: 1000px;
  opacity: 1;
}
.map-info-bar.collapsed .info-details { max-height: 0; opacity: 0; margin: 0; padding: 0; }

/* ── Info content ─────────────────────────────────────────────── */
.region-info-content { margin-top: 12px; font-size: 0.95rem; line-height: 1.5; color: #222; overflow-y: auto; max-height: 22vh; padding-right: 6px; }
.info-header { margin-bottom: 10px; }
.region-type, .region-hectare { font-size: 0.9rem; color: #666; }
.style-badges { display: flex; gap: 5px; flex-wrap: wrap; margin-top: 8px; }
.style-badge { padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }
.description { margin-top: 10px; font-size: 0.9rem; }
.details-section { margin-top: 15px; border-top: 1px solid #eee; padding-top: 15px; }
.detail-item { margin-bottom: 10px; }
.detail-title { font-weight: bold; font-size: 1rem; color: #333; margin-bottom: 5px; }
.detail-item p, .detail-item ul { margin: 0; padding-left: 5px; font-size: 0.9rem; }
.detail-item ul { padding-left: 20px; }
.detail-item li { margin-bottom: 5px; }
.grape-section { margin: 12px 0 6px; }
.grape-title { font-weight: 600; font-size: 0.88rem; color: #555; margin-bottom: 8px; }
.grape-badges { display: flex; flex-wrap: wrap; gap: 5px; }
.grape-badge { padding: 3px 9px; border-radius: 10px; font-size: 0.82rem; font-weight: 600; }
.no-info { margin-top: 6px; color: #888; font-size: 0.9rem; }

/* ── Bottom toolbar (Bordeaux style) ─────────────────────────── */
.mobile-map-toolbar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 24px);
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  padding: 8px;
  border-radius: 18px;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  width: min(90vw, 380px);
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
.mobile-tool-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.mobile-tool-btn:not(:disabled):hover { background: linear-gradient(180deg, #f5ede0 0%, #eadcc8 100%); }
.mobile-tool-btn.active {
  background: linear-gradient(180deg, #1a5e1a 0%, #0d3d0d 100%);
  color: #fff;
}
.mobile-tool-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px; height: 30px;
  border-radius: 50%;
  background: rgba(0,80,0,0.08);
  font-size: 0.8rem;
  font-weight: 800;
}
.mobile-tool-btn.active .mobile-tool-icon { background: rgba(255,255,255,0.18); }

/* ── 圖層面板 ─────────────────────────────────────────────────── */
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
  width: min(90vw, 380px);
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
  font-size: 0.72rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.06em;
  color: #999; margin-bottom: 8px;
}
.layer-group-buttons { display: flex; flex-direction: column; gap: 6px; }
.btn-layer {
  display: flex; align-items: center; gap: 10px;
  width: 100%; padding: 13px 16px;
  border: 1.5px solid rgba(0,0,0,0.07);
  border-radius: 12px; cursor: pointer;
  font-size: 0.88rem; font-weight: 600;
  background: rgba(0,0,0,0.02); color: #333;
  transition: all 0.15s; text-align: left; font-family: inherit;
}
.btn-layer:hover { background: rgba(0,100,0,0.06); border-color: rgba(0,100,0,0.2); }
.btn-layer.active { background: rgba(0,100,0,0.08); border-color: #006400; color: #006400; }
.btn-layer.color-contours.active { background: #f3e5f5; border-color: #9C27B0; color: #6a1b9a; }
.btn-layer.color-contours:not(.active):hover { border-color: #ce93d8; }
.btn-layer.color-contours.active .lbtn-dot { background: #9C27B0; border-color: #9C27B0; }
.lbtn-icon { font-size: 1.1rem; width: 22px; text-align: center; flex-shrink: 0; }
.lbtn-text { flex: 1; }
.lbtn-dot {
  width: 14px; height: 14px; border-radius: 50%;
  border: 2px solid #ccc; flex-shrink: 0; transition: all 0.15s;
}
.lbtn-dot.on { background: #006400; border-color: #006400; }
.layers-sheet-fade-enter-active, .layers-sheet-fade-leave-active { transition: opacity 0.22s ease; }
.layers-sheet-fade-enter-from, .layers-sheet-fade-leave-to { opacity: 0; }

/* ── Loading / Error ──────────────────────────────────────────── */
.loading-overlay { position: absolute; inset: 0; background: rgba(255,255,255,0.7); display: flex; align-items: center; justify-content: center; z-index: 20; }
.loading-spinner { width: 44px; height: 44px; border: 4px solid #eee; border-top-color: #006400; border-radius: 50%; animation: spin 0.8s linear infinite; }
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
.map-error { position: absolute; top: 70px; left: 50%; transform: translateX(-50%); background: #f44336; color: white; padding: 10px 20px; border-radius: 8px; z-index: 30; max-width: 80%; text-align: center; }
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
/* ── Responsive ───────────────────────────────────────────────── */
@media (max-width: 600px) {
  .map-info-bar { padding: 12px; }
  .map-header h1 { font-size: 1rem; }
}
/* 統一圖層面板包裝 */
.layer-panel-wrapper {
  position: fixed;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 46;
}

/* ── NZ 地質浮動面板 ──────────────────────────────────────────── */
.nz-geo-float-panel {
  position: fixed;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  right: 16px;
  width: min(280px, calc(100vw - 32px));
  background: rgba(18, 38, 18, 0.92);
  backdrop-filter: blur(12px);
  border-radius: 14px;
  border: 1px solid rgba(100, 200, 100, 0.25);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
  z-index: 1001;
  padding: 12px 14px 10px;
  color: #e0f0e0;
}
.nz-geo-panel-row {
  display: flex; align-items: center; gap: 6px; margin-bottom: 8px;
}
.nz-geo-panel-label {
  font-size: 0.82rem; font-weight: 700; flex: 1; color: #a8e6a8;
}
.nz-geo-panel-credit {
  font-size: 0.68rem; color: #7ab87a; opacity: 0.8;
}
.nz-geo-panel-close {
  width: 22px; height: 22px; background: rgba(255,255,255,0.1);
  border: none; border-radius: 50%; cursor: pointer; font-size: 0.75rem;
  color: #ccc; display: flex; align-items: center; justify-content: center;
}
.nz-geo-panel-close:hover { background: rgba(255,255,255,0.2); }
.nz-geo-opacity-row {
  display: flex; align-items: center; gap: 8px;
}
.nz-geo-opacity-lbl { font-size: 0.75rem; color: #9dcf9d; white-space: nowrap; }
.nz-geo-slider {
  flex: 1; height: 4px; accent-color: #4caf50; cursor: pointer;
}
.nz-geo-opacity-val { font-size: 0.75rem; color: #a8e6a8; min-width: 34px; text-align: right; }
.nz-geo-hint {
  margin-top: 8px; font-size: 0.7rem; color: #7ab87a; text-align: center;
}
.nz-geo-slide-enter-active, .nz-geo-slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.nz-geo-slide-enter-from, .nz-geo-slide-leave-to {
  opacity: 0; transform: translateX(20px);
}

/* ── NZ 地質 Popup ─────────────────────────────────────────────── */
:global(.nz-geology-popup-wrap .mapboxgl-popup-content) {
  padding: 0; background: transparent; box-shadow: none; border-radius: 12px;
}
:global(.nz-geo-popup) {
  background: rgba(18, 38, 18, 0.96);
  border: 1px solid rgba(100, 200, 100, 0.3);
  border-radius: 12px;
  padding: 14px 16px 10px;
  color: #e0f0e0;
  min-width: 220px; max-width: 320px;
  font-size: 0.85rem;
}
:global(.nz-geo-popup-header) {
  font-size: 0.78rem; font-weight: 700; color: #7ac97a;
  text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 10px;
}
:global(.nz-geo-row) {
  display: flex; gap: 8px; margin-bottom: 5px; line-height: 1.4;
}
:global(.nz-geo-label) {
  font-size: 0.72rem; font-weight: 700; color: #9dcf9d;
  min-width: 60px; flex-shrink: 0;
}
:global(.nz-geo-val) { color: #d8f0d8; font-size: 0.82rem; }
:global(.nz-geo-desc) { font-size: 0.78rem; line-height: 1.5; color: #b8e0b8; }
:global(.nz-geo-wine-block) {
  margin-top: 10px; padding: 10px 12px;
  background: rgba(40, 80, 40, 0.5);
  border-left: 3px solid #4caf50;
  border-radius: 0 8px 8px 0;
}
:global(.nz-geo-wine-title) {
  font-size: 0.8rem; font-weight: 700; color: #a8e6a8; margin-bottom: 5px;
}
:global(.nz-geo-wine-text) {
  font-size: 0.78rem; line-height: 1.55; color: #c8e8c8;
}
:global(.nz-geo-credit) {
  margin-top: 8px; font-size: 0.68rem; color: #5a9a5a; text-align: right;
}
</style>

