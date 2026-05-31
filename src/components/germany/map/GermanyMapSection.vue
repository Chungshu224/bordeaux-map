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
    <transition name="layer-panel">
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
        <!-- 葡萄園圖層開關 -->
        <div class="de-vine-inline-panel" :class="{ 'is-last': !showGeology }">
          <button class="de-vine-btn" :class="{ active: showVineyards }" @click="toggleVineyards">
            <span class="de-vine-icon">🍇</span>
            <span class="de-vine-text">葡萄園地塊</span>
            <span class="de-vine-dot" :class="{ on: showVineyards }"></span>
          </button>
        </div>
        <!-- BGR 土壤透明度控制列（土壤圖層啟用時顯示）-->
        <div v-if="showGeology" class="de-soil-inline-panel">
          <div class="de-soil-inline-title">🇩🇪 BGR BUEK200 土壤圖</div>
          <div class="de-soil-inline-row">
            <span class="de-soil-inline-lbl">透明度</span>
            <input class="de-soil-inline-slider" type="range" min="0.1" max="1.0" step="0.05"
              v-model.number="soilOpacity">
            <span class="de-soil-inline-pct">{{ Math.round(soilOpacity * 100) }}%</span>
          </div>
          <div class="de-soil-inline-footer">
            <span>資料來源：BGR BÖK200 (CC-BY 4.0)</span>
            <span>點擊地圖查看土壤資訊</span>
          </div>
        </div>
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

    <!-- 底部工具列（共用元件）-->
    <RegionMapMobileToolbar
      v-if="mapReady"
      :aoc-open="drawerOpen"
      :layer-open="showLayerPanel"
      :is3D="is3D"
      :info-open="!infoCollapsed"
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
const drawerOpen     = ref(false)
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
let soilClickRegistered = false
let soilPopup = null

// ── BGR BUEK200 土壤類型翻譯 ────────────────────────────────────────────────
const BGR_ALL_LAYERS = Array.from({ length: 55 }, (_, i) => i).join(',')

const BGR_SOIL_MAP = [
  { de: 'Parabraunerde',   zh: '準棕壤',       icon: '🟧', wine: '由棕壤進一步淡溦而成，黏土向下遷移形成明顯層次，排水良好，根系可深扎，有助於釀造結構緊實、具陳年潛力的 Riesling 與 Spätburgunder。' },
  { de: 'Pseudogley',      zh: '假潛育土',     icon: '🔵', wine: '季節性滞水形成的特殊土壤，兼具乾濕循環，根系受壓力刺激可提升果實濃縮度，版筆酒帶有獨特的土壤矿物感與韵味。' },
  { de: 'Braunerde',       zh: '棕壤',         icon: '🌿', wine: '德國葡萄酒產區最廣泛的土壤，由森林腐殖質分解形成，保水性佳且矿物質豐富，利於 Riesling 保留細致酸度，赦予葡萄酒清新果香與矿物感。' },
  { de: 'Rendzina',        zh: '石灰性淣土',   icon: '⚪️', wine: '形成於石灰岩之上，淣薄而含大量活性石灰，排水極佳能減慢葡萄生長節奏，使 Riesling 表現出精絻酸度與貝殼般的石灰矿物韵味。' },
  { de: 'Ranker',          zh: '矽質淣土',     icon: '⛰️', wine: '薄層土覆蓋在矽質岩石之上，保熱能力強，日夜溫差大，能凝聚葡萄中的精油與香氣，赦予酒體辛香與強烈個性。' },
  { de: 'Regosol',         zh: '粗骨土',       icon: '🪨', wine: '由砂櫾或岩石碎屑組成的疏鬆土層，排水迅速保熱佳，葡萄根系深入基岩獲取矿物，釀造出的葡萄酒帶有清晰的矿物感與優雅酸度。' },
  { de: 'Kolluvium',       zh: '坡積土',       icon: '⛰', wine: '山坡侵蝕物堆積形成的坡積土，混合多種母質，矿物來源多元，層次豐富，能赦予葡萄酒複雜而具深度的矿物口感。' },
  { de: 'Auenboden',       zh: '沖積河岸土',   icon: '💧', wine: '河流沖積形成的濕潤土壤，有機質豐富，保水性強，葡萄在此生長水分穩定，酒體豐满圓潤，果香充沛。' },
  { de: 'Pelosol',         zh: '膨縮黏土',     icon: '🟤', wine: '富含膨行性黏土矿物，乾濕交替時明顯收縮膨張，葡萄根系深入裂縮同吸取矿物，赦予葡萄酒獨特的土質風味與豐滿酒體。' },
  { de: 'Schwarzerde',     zh: '黑土',         icon: '⬛', wine: '有機質豐富的黑色土層，保水保肥能力極強，支持葡萄均衡生長，釀出果味豐盈、結構飽滿的紅白葡萄酒。' },
  { de: 'Gley',            zh: '潛育土',       icon: '📘', wine: '地下水位高形成的還原性土壤，有機質豐富保水性強，提供穩定的水分供應，有助於維持葡萄酒的新鮮果味與清爽酸度。' },
  { de: 'Podsol',          zh: '灰化土',       icon: '⬜', wine: '強烈淡溦作用形成的酸性土壤，養分貧乏但排水良好，促使葡萄根系深扎，在貧省中蓄取矿物，造就骨架清晰、矿物感鮮明的葡萄酒。' },
  { de: 'Terra fusca',     zh: '褐色岩溦土',   icon: '🟧', wine: '石灰岩不溦殘率積聚形成的紅棕色土壤，矽鄩氧化物豐富，排水佳酸度適中，有助於釀造具有複雜矿物感的精品白酒。' },
]

const BGR_BGL_MAP = {
  '1': '海岸與河口地景', '2': '北德低地', '3': '西北低地',
  '4': '東北低地', '5': '中德丘陵', '6': '西南丘陵',
  '7': '阿爾卒斯山前地', '8': '阿爾卒斯山區',
  '9': '萊茨河谷', '10': '中德高地', '11': '黑森林/萊茨谷地',
}

function translateBGRSoil(legendentext) {
  if (!legendentext) return null
  for (const entry of BGR_SOIL_MAP) {
    if (legendentext.includes(entry.de)) return entry
  }
  return null
}

function parseBGRXML(xmlText) {
  if (!xmlText) return null
  try {
    const parser = new DOMParser()
    const doc = parser.parseFromString(xmlText, 'text/xml')
    const fields = doc.querySelector('FIELDS')
    if (!fields) return null
    return {
      legendentext: fields.getAttribute('Legendentext') || '',
      legende:      fields.getAttribute('Legende') || '',
      nrkart:       fields.getAttribute('NRKART') || '',
      bgl:          fields.getAttribute('BGL') || '',
      profile:      fields.getAttribute('Profile') || '',
    }
  } catch (_) { return null }
}

function renderBGRSoilPopupHTML(data) {
  if (!data || !data.legendentext) {
    return `<div class="de-soil-popup"><div class="dsoil-header"><span class="dsoil-flag">🇩🇪</span><span class="dsoil-title">德國土壤資訊</span></div><div class="dsoil-empty">此位置無土壤資料，請嘗試其他位置。</div></div>`
  }
  const soil = translateBGRSoil(data.legendentext)
  const soilZh = soil?.zh || '混合土壤'
  const soilIcon = soil?.icon || '🌱'
  const soilWine = soil?.wine || '此處土壤由多種矿物質混合組成，反映德國複雜的地質多樣性，赦予葡萄酒獨特的風土個性。'
  const bglKey = String(data.bgl).split('.')[0]
  const bglZh = BGR_BGL_MAP[bglKey] || (data.bgl ? `土壤地景 ${data.bgl}` : '')
  const legende = data.legende.length > 55 ? data.legende.slice(0, 55) + '…' : data.legende
  return `
    <div class="de-soil-popup">
      <div class="dsoil-header">
        <span class="dsoil-flag">🇩🇪</span>
        <span class="dsoil-title">德國土壤資訊</span>
      </div>
      <div class="dsoil-body">
        <div class="dsoil-row"><span class="dsoil-lbl">土壤類型</span><span class="dsoil-val">${soilIcon} ${soilZh}</span></div>
        ${bglZh ? `<div class="dsoil-row"><span class="dsoil-lbl">地景分區</span><span class="dsoil-val">${bglZh}</span></div>` : ''}
        ${legende ? `<div class="dsoil-row"><span class="dsoil-lbl">圖例代號</span><span class="dsoil-val dsoil-mono">${legende}</span></div>` : ''}
      </div>
      <div class="dsoil-wine">
        <div class="dsoil-wine-head">${soilIcon}&ensp;<strong>${soilZh}</strong></div>
        <p class="dsoil-wine-text">${soilWine}</p>
        ${data.profile ? `<a class="dsoil-profile-link" href="${data.profile}" target="_blank" rel="noopener">查看土壤剖面 →</a>` : ''}
      </div>
    </div>
  `
}

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
      if (showGeology.value) return
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

function handleMobileAction(action) {
  if (action === 'layer') showLayerPanel.value = !showLayerPanel.value
  else if (action === '3d') toggle3D()
  else if (action === 'info') infoCollapsed.value = !infoCollapsed.value
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
    if (soilPopup) { soilPopup.remove(); soilPopup = null }
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
  // 計算產區 bounds 以限制圖磚載入
  const pad = 0.2
  const bgrBounds = (regionBounds && regionBounds[0] !== Infinity)
    ? [regionBounds[0] - pad, regionBounds[1] - pad, regionBounds[2] + pad, regionBounds[3] + pad]
    : null
  map.addSource('bgr-soil-wms', {
    type: 'raster',
    tiles: [BGR_WMS_TILE],
    tileSize: 256,
    minzoom: 4,
    maxzoom: 14,
    ...(bgrBounds ? { bounds: bgrBounds } : {}),
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
  // 建立點擊查詢 handler（只註冊一次）
  if (!soilClickRegistered) {
    map.on('click', async (e) => {
      if (!showGeology.value) return
      const { lng, lat } = e.lngLat
      // 點擊只限產區範圍內（支援 FeatureCollection 與單一 Feature）
      if (regionBoundaryGeoJSON) {
        try {
          const pt = turf.point([lng, lat])
          let inBounds = false
          if (regionBoundaryGeoJSON.type === 'FeatureCollection') {
            inBounds = regionBoundaryGeoJSON.features.some(f => {
              try { return turf.booleanPointInPolygon(pt, f) } catch (_) { return false }
            })
          } else {
            inBounds = turf.booleanPointInPolygon(pt, regionBoundaryGeoJSON)
          }
          if (!inBounds) return
        } catch (_) { return }
      }
      // 轉換座標至 EPSG:3857 并構建 GetFeatureInfo 請求
      const mx = lng * 20037508.34 / 180
      const myRad = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180)
      const my = myRad * 20037508.34 / 180
      const delta = 3000
      const bbox = `${mx - delta},${my - delta},${mx + delta},${my + delta}`
      let xmlData = null
      try {
        const url = `/bgr/wms/boden/buek200/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetFeatureInfo` +
          `&LAYERS=${BGR_ALL_LAYERS}&QUERY_LAYERS=${BGR_ALL_LAYERS}` +
          `&CRS=EPSG:3857&BBOX=${bbox}&WIDTH=256&HEIGHT=256&I=128&J=128` +
          `&INFO_FORMAT=text/xml`
        const res = await fetch(url)
        if (res.ok) xmlData = await res.text()
      } catch (err) {
        console.warn('[GermanyMap] BGR GetFeatureInfo error:', err)
      }
      const parsed = parseBGRXML(xmlData)
      const html = renderBGRSoilPopupHTML(parsed)
      if (soilPopup) soilPopup.remove()
      soilPopup = new mapboxgl.Popup({ className: 'de-soil-popup-wrap', maxWidth: '340px', closeButton: true })
        .setLngLat([lng, lat])
        .setHTML(html)
        .addTo(map)
    })
    soilClickRegistered = true
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
  infoCollapsed.value = true
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

function resetMapOverlayState() {
  showGeology.value = false
  climateEnabled.value = false
  climateIndicator.value = 'temp'
  geologyError.value = null
  if (soilPopup) { soilPopup.remove(); soilPopup = null }
}

onMounted(async () => {
  resetMapOverlayState()
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

<!-- BGR 土壤 popup 全域樣式（mapboxgl popup 容器不支援 scoped）-->
<style>
.de-soil-popup-wrap .mapboxgl-popup-content {
  padding: 0;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 6px 28px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.08);
  min-width: 270px;
  max-width: 340px;
  background: #fff;
}
.de-soil-popup-wrap .mapboxgl-popup-tip { border-top-color: #2d5016 !important; }
.de-soil-popup-wrap .mapboxgl-popup-close-button {
  color: rgba(255,255,255,0.9);
  font-size: 20px;
  line-height: 1;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 6px;
  top: 6px;
  background: rgba(0,0,0,0.18);
  border: none;
  border-radius: 50%;
  cursor: pointer;
}
.de-soil-popup-wrap .mapboxgl-popup-close-button:hover {
  background: rgba(0,0,0,0.35);
  color: #fff;
}
/* ── popup 內容樣式 ── */
.de-soil-popup { font-family: 'Noto Sans TC', -apple-system, sans-serif; }
.dsoil-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 40px 12px 16px;
  background: linear-gradient(120deg, #2d5016 0%, #4a7c2d 100%);
  color: #fff;
}
.dsoil-flag { font-size: 18px; line-height: 1; }
.dsoil-title { font-size: 14px; font-weight: 700; letter-spacing: 0.4px; }
.dsoil-body { padding: 4px 0; border-bottom: 1px solid #f0ebe3; }
.dsoil-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 7px 16px;
  border-bottom: 1px solid #faf5f0;
}
.dsoil-row:last-child { border-bottom: none; }
.dsoil-lbl {
  font-size: 11px;
  font-weight: 600;
  color: #3a6b1a;
  white-space: nowrap;
  min-width: 56px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}
.dsoil-val { font-size: 13px; color: #2d1a1a; flex: 1; line-height: 1.4; }
.dsoil-mono { font-size: 11px; font-family: monospace; color: #555; word-break: break-all; }
.dsoil-wine {
  margin: 10px 12px 12px;
  background: #f4faf0;
  border-left: 3px solid #4a7c2d;
  border-radius: 0 8px 8px 0;
  padding: 10px 12px;
}
.dsoil-wine-head {
  font-size: 13px;
  font-weight: 700;
  color: #2d5016;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
}
.dsoil-wine-text { margin: 0; font-size: 12px; line-height: 1.7; color: #3a4a2a; }
.dsoil-empty { padding: 14px 16px; font-size: 13px; color: #999; text-align: center; }
.dsoil-profile-link {
  display: inline-block;
  margin-top: 6px;
  font-size: 11px;
  color: #4a7c2d;
  text-decoration: none;
}
.dsoil-profile-link:hover { text-decoration: underline; }
</style>

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

/* ── 圖層面板過渡動畫 ── */
.layer-panel-enter-active, .layer-panel-leave-active {
  transition: opacity 0.18s, transform 0.18s;
}
.layer-panel-enter-from, .layer-panel-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(6px);
}

/* ── 葡萄園圖層內嵌開關（圖層面板中段）── */
.de-vine-inline-panel {
  background: rgba(255,255,255,0.97);
  border-top: 1px solid #eee;
  padding: 8px 10px;
  width: min(320px, calc(100vw - 32px));
}
.de-vine-inline-panel.is-last {
  border-radius: 0 0 16px 16px;
}
.de-vine-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #f7f7f7;
  border: 1.5px solid transparent;
  border-radius: 10px;
  padding: 9px 10px;
  font-size: 13px;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  width: 100%;
  transition: all 0.15s;
}
.de-vine-btn:hover:not(.active) { background: #efefef; border-color: #ddd; }
.de-vine-btn.active {
  background: #fff8e1;
  border-color: #d4af37;
  color: #8b6f1c;
}
.de-vine-icon { font-size: 14px; }
.de-vine-text { flex: 1; text-align: left; }
.de-vine-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #ccc; flex-shrink: 0;
}
.de-vine-dot.on { background: #43a047; }

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

/* BGR 土壤圖層內嵌控制列（圖層面板下方）*/
.de-soil-inline-panel {
  background: rgba(255,255,255,0.97);
  border-top: 1px solid #eee;
  border-radius: 0 0 16px 16px;
  padding: 10px 14px;
  width: min(320px, calc(100vw - 32px));
}
.de-soil-inline-title { font-size: 13px; font-weight: 700; color: #555; margin-bottom: 10px; }
.de-soil-inline-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.de-soil-inline-lbl { font-size: 12px; color: #666; white-space: nowrap; }
.de-soil-inline-slider { flex: 1; height: 4px; accent-color: #4caf50; }
.de-soil-inline-pct { font-size: 12px; color: #888; min-width: 32px; text-align: right; }
.de-soil-inline-footer {
  font-size: 10px; color: #aaa;
  border-top: 1px solid #f0f0f0; padding-top: 6px;
}
</style>
