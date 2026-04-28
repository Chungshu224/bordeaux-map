<template>
  <section class="australia-map-section">

    <!-- 全螢幕地圖 -->
    <div ref="mapContainer" class="map"></div>

    <!-- 載入中 -->
    <div v-if="isLoading" class="map-loading">
      <div class="loading-spinner"></div>
      <p>載入澳洲產區地圖…</p>
    </div>
    <div v-if="mapError" class="map-error">⚠️ {{ mapError }}</div>

    <!-- ── 統一頂部導覽列 ── -->
    <RegionMapHeader
      region-name="澳洲"
      title="澳洲葡萄酒產區地圖"
      icon="🇦🇺"
      @back="emit('back')"
    />

    <!-- ── 統一資訊側欄 ── -->
    <RegionMapInfoPanel
      v-if="activeRegion"
      :info="unifiedInfo"
      theme-color="#e67e22"
      :audio-available="true"
      :is-playing-audio="isPlayingAudio"
      :collapsed="infoCollapsed"
      @toggle-collapse="infoCollapsed = !infoCollapsed"
      @play-audio="playPronunciation"
      @reset="resetView"
    >
      <template v-if="activeInfo?.famous_for" #extra-content>
        <div class="rmap-section">
          <div class="rmap-section-title">🏆 以…著名</div>
          <p style="font-size:0.82rem;color:#ccc;margin:0">{{ activeInfo.famous_for }}</p>
        </div>
      </template>
    </RegionMapInfoPanel>

    <!-- ── 統一產區清單抽屜 ── -->
    <RegionMapAppellationDrawer
      :open="drawerOpen"
      :region-name="initialCluster ? initialCluster.name + ' 產區' : '澳洲產區'"
      :items="filteredListUnified"
      :search="drawerSearch"
      :active-id="activeRegion?.name || ''"
      @update:open="drawerOpen = $event"
      @update:search="drawerSearch = $event"
      @select="selectById"
    />

    <!-- ASRIS 土壤圖層浮動面板 -->
    <div v-if="showGeology" class="asris-float-panel">
      <div class="asris-float-title">🪨 ASRIS 土壤分類圖</div>
      <div class="asris-float-row">
        <span class="asris-float-label">透明度</span>
        <input class="asris-opacity-slider" type="range" min="0.1" max="1.0" step="0.05"
          v-model.number="asrisOpacity" @input="updateAsrisOpacity" />
        <span class="asris-opacity-pct">{{ Math.round(asrisOpacity * 100) }}%</span>
      </div>
      <div class="asris-float-footer">
        <span>資料來源：CSIRO ASRIS (CC-BY 4.0)</span>
        <span>點擊地圖查看土壤資訊</span>
      </div>
    </div>

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

    <!-- ── 統一圖層面板（含澳洲專用 Zone 層按鈕）── -->
    <transition name="layer-panel">
      <div v-if="showLayerPanel" class="layer-panel-wrapper">
        <RegionMapLayerPanel
          :is3D="is3D"
          :show-contours="showContour"
          :climate-enabled="climateEnabled"
          :soil-disabled="false"
          :soil-enabled="showGeology"
          soil-label="ASRIS 土壤"
          @toggle-3d="toggle3D"
          @toggle-contours="toggleContour"
          @toggle-climate="toggleClimate"
          @toggle-soil="toggleGeology"
          @close="showLayerPanel = false"
        />
        <!-- Zone 層按鈕（澳洲專用）-->
        <div class="au-zone-toggle" @click="toggleZones">
          <span class="au-zone-icon">🗺️</span>
          <span class="au-zone-label">Zone 層</span>
          <span class="au-zone-status">{{ showZones ? '開' : '關' }}</span>
        </div>
      </div>
    </transition>

    <!-- ── 統一工具列 ── -->
    <RegionMapMobileToolbar
      v-if="mapReady"
      :aoc-open="drawerOpen"
      :layer-open="showLayerPanel"
      :is3D="is3D"
      :info-open="!!activeRegion && !infoCollapsed"
      @action="handleMobileAction"
    />

  </section>
</template>


<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  RegionMapHeader, RegionMapLayerPanel, RegionMapInfoPanel,
  RegionMapAppellationDrawer, RegionMapMobileToolbar
} from '../../shared/regionMap/index.js'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as turf from '@turf/turf'
import { getMapboxToken, getMapboxStyleUrl } from '@/utils/getMapboxToken'

const props  = defineProps({
  initialCluster: { type: Object, default: null },
})
const emit   = defineEmits(['back'])
const router = useRouter()

// ── State ──────────────────────────────────────────────────────────────────
const mapContainer  = ref(null)
const mapReady      = ref(false)
const isLoading     = ref(true)
const mapError      = ref(null)
const is3D          = ref(false)
const infoCollapsed = ref(true)
const drawerOpen    = ref(false)
const drawerSearch  = ref('')
const drawerStateTab= ref('all')
const activeState   = ref('all')
const showZones     = ref(false)
const showContour   = ref(false)
const showGeology   = ref(false)
const showLayerPanel = ref(false)
const activeRegion  = ref(null)
const asrisOpacity  = ref(0.78)

// ── Climate state ──────────────────────────────────────────────────────────
const climateEnabled   = ref(false)
const climateYear      = ref(2004)
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
const GOLDEN_VINTAGES_AU = new Set([1990, 1996, 1998, 2004, 2010, 2012, 2014])

// ── Climate computed ──────────────────────────────────────────────────────
const currentIndicatorConfig = computed(() => CLIMATE_INDICATORS.find(i => i.id === climateIndicator.value))
const currentGlobalStats = computed(() => {
  if (climateIndicator.value === 'sun') return climateStatsSun.value
  if (climateIndicator.value === 'rain') return climateStatsRain.value
  return climateStats.value
})
const isGoldenVintage = computed(() => GOLDEN_VINTAGES_AU.has(climateYear.value))
const climateCurrentAocLabel = computed(() => activeRegion.value?.name || '')
const currentYearValue = computed(() => {
  if (!activeRegion.value || !climateData.value || !climateYears.value.length) return null
  const idx = climateYears.value.indexOf(climateYear.value)
  if (idx < 0) return null
  const cfg = currentIndicatorConfig.value
  const arr = climateData.value[activeRegion.value.name]?.[cfg.dataKey]
  if (!Array.isArray(arr) || idx >= arr.length) return null
  return Number(arr[idx]).toFixed(cfg.id === 'rain' ? 0 : 1)
})
const currentYearDelta = computed(() => {
  if (!activeRegion.value || !climateData.value || currentYearValue.value === null) return null
  const cfg = currentIndicatorConfig.value
  const aoc = climateData.value[activeRegion.value.name]
  if (!aoc) return null
  const baseline = aoc[cfg.baselineKey]
  if (baseline == null) return null
  return (Number(currentYearValue.value) - Number(baseline)).toFixed(cfg.id === 'rain' ? 0 : 1)
})
const currentYearDeltaPositive = computed(() => (Number(currentYearDelta.value) || 0) > 0)

const allRegions       = ref([])   // all feature properties
const appellations     = ref([])   // detailed info from JSON
const selectedRegionName = ref(null) // name of single-selected feature

let map         = null
let hoveredId   = null
let asrisPopup  = null
let auRegionsGeoJSON = null  // 儲存全部產區 GeoJSON，用於 turf.mask clip
const featureGeomMap = {}  // name → merged bbox [w, s, e, n] for fitBounds

const AUSTRALIA_CENTER = [134.0, -26.5]
const AUSTRALIA_ZOOM   = 3.5

// ASRIS 澳洲土壤分類 WMS tile URL（透過 /asris proxy 解決 CORS）
const ASRIS_WMS_TILE =
  '/asris/arcgis/services/ASRIS/ASRIS_ASC_MOB/MapServer/WMSServer' +
  '?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap' +
  '&LAYERS=Australian_Soil_Classification54544&STYLES=' +
  '&FORMAT=image%2Fpng&TRANSPARENT=TRUE' +
  '&CRS=EPSG%3A3857&WIDTH=256&HEIGHT=256' +
  '&BBOX={bbox-epsg-3857}'

// ── State tabs ─────────────────────────────────────────────────────────────
const STATE_TABS = [
  { value: 'all', label: '全部',   color: '#555' },
  { value: 'SA',  label: '南澳 SA', color: '#e67e22' },
  { value: 'VIC', label: '維多利亞 VIC', color: '#8e44ad' },
  { value: 'NSW', label: '新南威爾斯 NSW', color: '#2980b9' },
  { value: 'WA',  label: '西澳 WA',  color: '#f39c12' },
  { value: 'QLD', label: '昆士蘭 QLD', color: '#c0392b' },
  { value: 'TAS', label: '塔斯馬尼亞 TAS', color: '#27ae60' },
]

const STATE_CENTERS = {
  SA:  { center: [138.5, -32], zoom: 5.5 },
  VIC: { center: [145, -37],   zoom: 5.8 },
  NSW: { center: [147, -33],   zoom: 5.2 },
  WA:  { center: [117, -32],   zoom: 5.5 },
  QLD: { center: [151, -28],   zoom: 7 },
  TAS: { center: [146.5, -42], zoom: 6.5 },
}

// ── Computed ───────────────────────────────────────────────────────────────
const regionCount = computed(() => allRegions.value.filter(r => r.gi_level === 'Region').length)

const activeInfo = computed(() => {
  if (!activeRegion.value) return null
  return appellations.value.find(a => a.name === activeRegion.value.name) || null
})

// If a cluster is active → filter to that cluster's regions; otherwise use state tab
const filteredDrawerList = computed(() => {
  let list = allRegions.value
  const fc = props.initialCluster?.filterConfig
  if (fc) {
    // SA sub-cluster: match by explicit region names OR by zone (for zone-level polygons)
    list = list.filter(r =>
      r.gi_level === 'Zone'
        ? fc.filterZones.includes(r.zone) || fc.filterZones.includes(r.name)
        : fc.regionNames.some(n => n.toLowerCase() === r.name.toLowerCase())
    )
  } else if (props.initialCluster) {
    // Single-state cluster (VIC/NSW/WA/QLD/TAS): filter by state
    list = list.filter(r => r.state === props.initialCluster.state)
  } else if (drawerStateTab.value !== 'all') {
    list = list.filter(r => r.state === drawerStateTab.value)
  }
  if (drawerSearch.value.trim()) {
    const q = drawerSearch.value.toLowerCase()
    list = list.filter(r => r.name.toLowerCase().includes(q))
  }
  return [...list].sort((a, b) => a.name.localeCompare(b.name))
})

// Group the filtered list by GI level: Zone → Region → Sub-Region
const GI_LEVELS = [
  { level: 'Zone',       icon: '🗂️', label: 'Zone（產區群）' },
  { level: 'Region',     icon: '📍', label: 'Region（產區）' },
  { level: 'Sub-Region', icon: '🔎', label: 'Sub-Region（次產區）' },
]
const groupedDrawerList = computed(() => {
  const all = filteredDrawerList.value
  return GI_LEVELS.map(g => ({
    ...g,
    items: all.filter(r => r.gi_level === g.level),
  })).filter(g => g.items.length > 0)
})

const drawerHasResults = computed(() => groupedDrawerList.value.length > 0)

// ── Helpers ────────────────────────────────────────────────────────────────
function stateColor(state) {
  return STATE_TABS.find(t => t.value === state)?.color || '#aaa'
}

function styleTagClass(s) {
  if (s.includes('紅')) return 'red'
  if (s.includes('白')) return 'white'
  if (s.includes('氣泡')) return 'sparkling'
  if (s.includes('甜') || s.includes('加強')) return 'sweet'
  return 'default'
}

// ── Bbox helper (no external dep) ────────────────────────────────────────
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

// ── Apply single-feature filter (isolate one region) ─────────────────────
function applySingleFeatureFilter(name) {
  if (!map) return
  const f = ['==', ['get', 'name'], name]
  map.setFilter('region-fill',    f)
  map.setFilter('region-outline', f)
  map.setFilter('region-labels',  f)
}

// ── Restore cluster/state filter (deselect) ───────────────────────────────
function restoreFilter() {
  selectedRegionName.value = null
  updateStateFilter()
  updateASRISClip()
}

// ── 播放發音 ─────────────────────────────────────────────────────────────────
const isPlayingAudio = ref(false)
let currentAudio = null
function playPronunciation() {
  if (!activeRegion.value?.name) return
  if (currentAudio) { currentAudio.pause(); currentAudio = null }
  const audioPath = `/australia/sounds/${encodeURIComponent(activeRegion.value.name)}.mp3`
  currentAudio = new Audio(audioPath)
  isPlayingAudio.value = true
  currentAudio.play().catch(() => { isPlayingAudio.value = false })
  currentAudio.onended = () => { isPlayingAudio.value = false; currentAudio = null }
}

// ── Reset view ─────────────────────────────────────────────────────────────
function resetView() {
  if (!map) return
  selectedRegionName.value = null
  activeState.value = props.initialCluster ? props.initialCluster.state : 'all'
  if (!props.initialCluster) {
    map.flyTo({ center: AUSTRALIA_CENTER, zoom: AUSTRALIA_ZOOM, pitch: 0, bearing: 0, duration: 800 })
  } else {
    const { center, zoom } = props.initialCluster
    map.flyTo({ center, zoom, pitch: 0, bearing: 0, duration: 800 })
  }
  activeRegion.value = null
  if (map.getSource('au-regions')) map.removeFeatureState({ source: 'au-regions' })
  updateStateFilter()
  updateASRISClip()
}

// ── Filter by state ────────────────────────────────────────────────────────
function filterByState(state) {
  activeState.value = state
  drawerStateTab.value = state
  updateStateFilter()
  if (state !== 'all' && STATE_CENTERS[state]) {
    const { center, zoom } = STATE_CENTERS[state]
    map.flyTo({ center, zoom, duration: 800 })
  } else {
    map.flyTo({ center: AUSTRALIA_CENTER, zoom: AUSTRALIA_ZOOM, duration: 800 })
  }
}

function updateStateFilter() {
  if (!map || !map.getLayer('region-fill')) return
  const state = activeState.value
  const levelFilter = showZones.value
    ? ['in', ['get', 'gi_level'], ['literal', ['Region', 'Zone', 'Sub-Region']]]
    : ['==', ['get', 'gi_level'], 'Region']

  const fc = props.initialCluster?.filterConfig
  let locationFilter
  if (fc) {
    // SA sub-cluster: Zone polygons filtered by name; Region/Sub-Region filtered by name list
    const zonePolyFilter = ['all',
      ['==', ['get', 'gi_level'], 'Zone'],
      ['in', ['get', 'name'], ['literal', fc.filterZones]],
    ]
    const regionFilter = ['all',
      ['in', ['get', 'gi_level'], ['literal', ['Region', 'Sub-Region']]],
      ['in', ['get', 'name'], ['literal', fc.regionNames]],
    ]
    locationFilter = ['any', zonePolyFilter, regionFilter]
  } else if (props.initialCluster) {
    locationFilter = ['==', ['get', 'state'], props.initialCluster.state]
  } else {
    locationFilter = state === 'all' ? ['literal', true] : ['==', ['get', 'state'], state]
  }

  const combined = ['all', levelFilter, locationFilter]
  map.setFilter('region-fill', combined)
  map.setFilter('region-outline', combined)
  map.setFilter('region-labels', combined)
}

// ── ASRIS popup render ─────────────────────────────────────────────────────
const ASC_INFO = {
  Anthroposols: { zh: '人工土',    icon: '🏭', cat: '人為改造土',    wine: '深度人為改造的土壤，農耕管理影響面大於地質本身。' },
  Calcarosols:  { zh: '石灰土',    icon: '🪨', cat: '突出石灰質',    wine: '富含碳酸鈣，高 pH 幫助維持葡萄的天然酸度，產出細膩清爽的白葡萄酒。' },
  Chromosols:   { zh: '彩色土',    icon: '🌏', cat: '層次強烈彩色',  wine: '表層與底層色彩對比醒目，排水性良，適合樹正生長，克萊島主要土型。' },
  Dermosols:    { zh: '皮層土',    icon: '🟤', cat: '發花結構層',    wine: '結構良好、有機質居中，保水與排水平衡，Piccadilly Valley 等山區常見。' },
  Ferrosols:    { zh: '鐵質土',    icon: '🟠', cat: '鐵性高活性黏土', wine: '鮮紅色含鐵層，保水力極佳，地中海個方亞等臺地產區下層常見的豐潤葡萄園土壤。' },
  Hydrosols:    { zh: '水成土',    icon: '💧', cat: '長期水分飽和',   wine: '常年潮濕，不適大多數葡萄樹，但在高地白葡萄品種如 Riesling 對冷濕潛水有定要求時可見到。' },
  Kandosols:    { zh: '高嶺石土',  icon: '🏜️', cat: '低活性漂石質',  wine: '結構較弱，排水良，廣泛分布於澳內陸丘，大尺度樹部建立需明智統水管理。' },
  Kurosols:     { zh: '黑暗土',    icon: '⚫', cat: '黃淋期層理化',   wine: '表層酸性，子層具道列結構，成熟期長，產出酒結構細致、酸度活潑。' },
  Organosols:   { zh: '有機土',    icon: '🌿', cat: '高有機質層',    wine: '富含有機質，保水力強，多見於塔斯馬尼亞等潤濕山地，不常用於葡萄園。' },
  Podosols:     { zh: '灰化土',    icon: '🦴', cat: '漂名灰化 B 層', wine: '表層沙迥細拔，微酸，不保肥，多見於西澳海岸帶，壓力小的古老葡萄樹可產出獨特的應力感。' },
  Rudosols:     { zh: '原始土',    icon: '🪨', cat: '極少發育度',    wine: '地質國度低，山層或柴灣山頂常見，葡萄樹在此將深根以尋找水分，產出充滿礦物張力的葡萄酒。' },
  Sodosols:     { zh: '鈉質土',    icon: '🔵', cat: '層間高鈉質',    wine: '子層高鈉導致發掌展流失走，管理難度高；部分牛山酒區有驚人的老藤調配表現。' },
  Tenosols:     { zh: '薄土',      icon: '⚪', cat: '弱發育水成層',   wine: '崖山或海岸山丘常見，土層矮，葡萄樹需攔挖、富水流磁產酒多重層次礦物感。' },
  Vertosols:    { zh: '膨脹黏土',  icon: '🔴', cat: '高膨潤發膨脹黏土', wine: '雨季膨脹乾季收縮，保水力極佳，完熟八月，庫納瓦拉 Coonawarra 著名紅土 (Terra Rossa) 下方的基底。' },
}

function renderASRISPopupHTML(text) {
  const obj = {}

  // ── Format A: XML ──
  if (text.trim().startsWith('<')) {
    const fieldRe = /<Field[^>]+name=["']?([A-Z_]+)["']?[^>]+value=["']?([^"'/>]+)/gi
    let m
    while ((m = fieldRe.exec(text)) !== null) obj[m[1].toUpperCase()] = m[2].trim()
    if (!obj['ASC_ORD']) {
      const tagRe = /<(ASC_ORD|ASC_ORDER_NAME)>([^<]+)<\/\1>/gi
      while ((m = tagRe.exec(text)) !== null) obj[m[1].toUpperCase()] = m[2].trim()
    }
  }

  // ── Format B/C: 分號格式（ESRI MapServer text/plain）──
  // 支援兩種情況：header 與 values 在同一行，或分兩行
  if (!obj['ASC_ORD'] && !obj['ASC_ORDER_NAME']) {
    const lines = text.trim().split(/\r?\n/).map(l => l.trim()).filter(Boolean)
    for (let hi = 0; hi < lines.length; hi++) {
      if (!lines[hi].toUpperCase().includes('ASC_ORD')) continue

      const allTokens = lines[hi].split(';').map(t => t.trim())

      // 找 headers 與 values 的分界：第一個純數字 token 是 values 起點
      let boundary = allTokens.length
      for (let k = 1; k < allTokens.length; k++) {
        if (/^\d+$/.test(allTokens[k])) { boundary = k; break }
      }

      const hdrs = allTokens.slice(0, boundary)
        .map(h => h.replace(/^Raster\./i, '').toUpperCase())

      let vals
      if (boundary < allTokens.length) {
        // 同一行就有 values
        vals = allTokens.slice(boundary)
      } else if (lines[hi + 1]) {
        // values 在下一行
        vals = lines[hi + 1].split(';').map(v => v.trim())
      } else {
        continue
      }

      hdrs.forEach((h, i) => { if (h) obj[h] = vals[i] || '' })
      break
    }
  }

  const ascOrd  = obj['ASC_ORD'] || ''
  const ascName = obj['ASC_ORDER_NAME'] || ''

  const info = (ascName && ASC_INFO[ascName]) || AU_GEO_DEFAULT
  const title = info.zh || ascName || '混合沉積土壤'
  return `<div class="asris-geology-popup">
    <div class="asris-popup-header">🗺️ 澳洲土壤</div>
    <div class="asris-popup-row"><span class="asris-popup-label">土壤類型</span><span class="asris-popup-val">${title}</span></div>
    ${info.cat ? `<div class="asris-popup-row"><span class="asris-popup-label">分類</span><span class="asris-popup-val">${info.cat}</span></div>` : ''}
    <div class="asris-popup-wine-block">
      <div class="asris-popup-wine-title">${info.icon || '🌱'} ${title}</div>
      <div class="asris-popup-wine-text">${info.wine || AU_GEO_DEFAULT.wine}</div>
    </div>
  </div>`
}

const AU_GEO_DEFAULT = {
  zh: '混合沉積土壤', icon: '🌱', cat: '',
  wine: '此處為混合型沉積土壤，由風化基岩、河流沖積與細粒沉積物交織而成，排水與保水性介於砂質與黏質之間，能支持多元葡萄品種生長，並賦予葡萄酒柔順的果香與適度的礦物層次。'
}

function renderAUFallbackHTML() {
  const i = AU_GEO_DEFAULT
  return `<div class="asris-geology-popup">
    <div class="asris-popup-header">🗺️ 澳洲土壤</div>
    <div class="asris-popup-row"><span class="asris-popup-label">土壤類型</span><span class="asris-popup-val">${i.zh}</span></div>
    <div class="asris-popup-wine-block">
      <div class="asris-popup-wine-title">${i.icon} ${i.zh}</div>
      <div class="asris-popup-wine-text">${i.wine}</div>
    </div>
  </div>`
}

// ── ASRIS clip helpers ──────────────────────────────────────────────────────
function getClipGeoJSON() {
  if (!auRegionsGeoJSON) return null
  if (selectedRegionName.value) {
    const features = auRegionsGeoJSON.features.filter(
      f => f.properties.name === selectedRegionName.value
    )
    if (features.length > 0) return { type: 'FeatureCollection', features }
  }
  return auRegionsGeoJSON  // 未選取任何產區時，遮罩範圍為澳洲全境
}

function updateASRISClip() {
  if (!map || !showGeology.value) return
  if (map.getLayer('au-soil-clip-overlay')) map.removeLayer('au-soil-clip-overlay')
  if (map.getSource('au-soil-clip-src')) map.removeSource('au-soil-clip-src')
  const clipGeoJSON = getClipGeoJSON()
  if (!clipGeoJSON) return
  try {
    const maskData = turf.mask(clipGeoJSON)
    map.addSource('au-soil-clip-src', { type: 'geojson', data: maskData })
    map.addLayer({
      id: 'au-soil-clip-overlay',
      type: 'fill',
      source: 'au-soil-clip-src',
      paint: { 'fill-color': '#060a10', 'fill-opacity': 0.78 }
    }, map.getLayer('region-fill') ? 'region-fill' : undefined)
  } catch (e) {
    console.warn('[ASRIS] turf.mask clip 失敗:', e)
  }
}

// ── Toggle Geology layer ────────────────────────────────────────────────────
function toggleGeology() {
  if (!map) return
  showGeology.value = !showGeology.value
  if (showGeology.value) {
    addGeologyLayer()
    map.getCanvas().style.cursor = 'crosshair'
  } else {
    if (asrisPopup) { asrisPopup.remove(); asrisPopup = null }
    // 移除 clip overlay 與 WMS 圖層
    if (map.getLayer('au-soil-clip-overlay')) map.removeLayer('au-soil-clip-overlay')
    if (map.getSource('au-soil-clip-src')) map.removeSource('au-soil-clip-src')
    if (map.getLayer('au-soil-layer')) map.removeLayer('au-soil-layer')
    if (map.getSource('asris-wms')) map.removeSource('asris-wms')
    map.getCanvas().style.cursor = ''
  }
}

function addGeologyLayer() {
  if (!map) return
  // 清除舊層
  if (map.getLayer('au-soil-clip-overlay')) map.removeLayer('au-soil-clip-overlay')
  if (map.getSource('au-soil-clip-src')) map.removeSource('au-soil-clip-src')
  if (map.getLayer('au-soil-layer')) map.removeLayer('au-soil-layer')
  if (map.getSource('asris-wms')) map.removeSource('asris-wms')

  map.addSource('asris-wms', {
    type: 'raster',
    tiles: [ASRIS_WMS_TILE],
    tileSize: 256,
    minzoom: 3,
    maxzoom: 14,
    attribution: '© CSIRO ASRIS Australian Soil Classification (CC-BY 4.0)'
  })
  const insertBefore = map.getLayer('region-fill') ? 'region-fill' : undefined
  map.addLayer({
    id: 'au-soil-layer',
    type: 'raster',
    source: 'asris-wms',
    paint: { 'raster-opacity': asrisOpacity.value }
  }, insertBefore)

  // turf.mask clip — 遮罩產區外的土壤圖，僅顯示已選取產區範圍內
  updateASRISClip()
}

// ── ASRIS 透明度調整 ────────────────────────────────────────────────────────
function updateAsrisOpacity() {
  if (!map) return
  if (map.getLayer('au-soil-layer')) {
    map.setPaintProperty('au-soil-layer', 'raster-opacity', asrisOpacity.value)
  }
}

// ── Toggle Zone layer ──────────────────────────────────────────────────────
function toggleZones() {
  showZones.value = !showZones.value
  updateStateFilter()
}

// ── Toggle Contour layer ───────────────────────────────────────────────────
function toggleContour() {
  showContour.value = !showContour.value
  if (!map) return
  if (showContour.value) {
    if (!map.getSource('mapbox-dem')) {
      map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
      })
    }
    if (!map.getSource('contours')) {
      map.addSource('contours', {
        type: 'vector',
        url: 'mapbox://mapbox.mapbox-terrain-v2',
      })
    }
    if (!map.getLayer('contour-major')) {
      map.addLayer({
        id: 'contour-major',
        type: 'line',
        source: 'contours',
        'source-layer': 'contour',
        filter: ['==', ['%', ['get', 'ele'], 100], 0],
        paint: {
          'line-color': 'rgba(255,255,255,0.45)',
          'line-width': 1.2,
        },
        minzoom: 5,
      }, 'region-fill')
    }
    if (!map.getLayer('contour-minor')) {
      map.addLayer({
        id: 'contour-minor',
        type: 'line',
        source: 'contours',
        'source-layer': 'contour',
        filter: ['all', ['!=', ['%', ['get', 'ele'], 100], 0]],
        paint: {
          'line-color': 'rgba(255,255,255,0.22)',
          'line-width': 0.6,
        },
        minzoom: 7,
      }, 'region-fill')
    }
    if (!map.getLayer('contour-labels')) {
      map.addLayer({
        id: 'contour-labels',
        type: 'symbol',
        source: 'contours',
        'source-layer': 'contour',
        layout: {
          'symbol-placement': 'line',
          'symbol-spacing': 200,
          'text-field': ['concat', ['to-string', ['get', 'ele']], 'm'],
          'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
          'text-size': ['case', ['==', ['%', ['get', 'ele'], 100], 0], 11, 9],
        },
        paint: {
          'text-color': 'rgba(255,255,255,0.7)',
          'text-halo-color': 'rgba(0,0,0,0.5)',
          'text-halo-width': 1,
        },
        minzoom: 7,
      }, 'region-fill')
    }
    ;['contour-major', 'contour-minor', 'contour-labels'].forEach(id => {
      if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', 'visible')
    })
  } else {
    ;['contour-major', 'contour-minor', 'contour-labels'].forEach(id => {
      if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', 'none')
    })
  }
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

// ── Toggle info panel ──────────────────────────────────────────────────────
function toggleInfo() {
  if (activeRegion.value) {
    infoCollapsed.value = !infoCollapsed.value
  } else {
    infoCollapsed.value = false
  }
}

// ── Select from drawer ─────────────────────────────────────────────────────
function selectFromDrawer(r) {
  activeRegion.value  = r
  drawerOpen.value    = false
  // Isolate this feature on the map
  selectedRegionName.value = r.name
  applySingleFeatureFilter(r.name)
  updateASRISClip()
  // Fit map to the cached full bounding box
  const bbox = featureGeomMap[r.name]
  if (bbox) {
    const [w, s, e, n] = bbox
    map.fitBounds([[w, s], [e, n]], { padding: 80, maxZoom: 12, duration: 700 })
  } else if (STATE_CENTERS[r.state]) {
    const { center, zoom } = STATE_CENTERS[r.state]
    map.flyTo({ center, zoom: zoom + 1, duration: 800 })
  }
}

// ── Map initialization ─────────────────────────────────────────────────────
async function initMap() {
  if (!mapContainer.value) return
  isLoading.value = true
  mapError.value  = null
  const MAPBOX_TOKEN = getMapboxToken()
  mapboxgl.accessToken = MAPBOX_TOKEN

  try {
    const [geoRes, appRes] = await Promise.all([
      fetch('/australia/australia-wine-regions.geojson'),
      fetch('/australia/australia-appellations.json'),
    ])
    if (!geoRes.ok) throw new Error('無法載入澳洲產區地理資料')
    const geoJSON = await geoRes.json()
    auRegionsGeoJSON = geoJSON  // 儲存供 turf.mask clip 使用
    appellations.value = appRes.ok ? await appRes.json() : []

    // Build region list for drawer (deduplicate by name+state)
    // Also cache full bounding boxes from the complete geometry
    const seen = new Set()
    for (const f of geoJSON.features) {
      const key = f.properties.name + '|' + f.properties.state
      if (!seen.has(key)) {
        seen.add(key)
        allRegions.value.push(f.properties)
      }
      // Merge bbox for all tiles of the same named feature
      if (f.geometry) {
        try {
          const b = featureBbox(f.geometry)
          const name = f.properties.name
          if (featureGeomMap[name]) {
            featureGeomMap[name] = [
              Math.min(featureGeomMap[name][0], b[0]),
              Math.min(featureGeomMap[name][1], b[1]),
              Math.max(featureGeomMap[name][2], b[2]),
              Math.max(featureGeomMap[name][3], b[3]),
            ]
          } else {
            featureGeomMap[name] = b
          }
        } catch (_) {}
      }
    }

    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: getMapboxStyleUrl(MAPBOX_TOKEN, 'satellite-streets-v12'),
      center: AUSTRALIA_CENTER,
      zoom: AUSTRALIA_ZOOM,
      attributionControl: false,
    })

    map.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-left')
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')

    map.on('load', () => {
      map.addSource('au-regions', {
        type: 'geojson',
        data: geoJSON,
        generateId: true,
      })

      // Fill layer（Region 預設顯示，Zone / Sub-Region 隱藏）
      map.addLayer({
        id: 'region-fill',
        type: 'fill',
        source: 'au-regions',
        filter: ['==', ['get', 'gi_level'], 'Region'],
        paint: {
          'fill-color': ['get', 'color'],
          'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'selected'], false], 0.58,
            ['boolean', ['feature-state', 'hover'], false],    0.42,
            0.30,
          ],
        },
      })

      // Outline
      map.addLayer({
        id: 'region-outline',
        type: 'line',
        source: 'au-regions',
        filter: ['==', ['get', 'gi_level'], 'Region'],
        paint: {
          'line-color': ['case',
            ['boolean', ['feature-state', 'selected'], false], '#ffffff',
            ['get', 'color'],
          ],
          'line-width': ['case',
            ['boolean', ['feature-state', 'selected'], false], 3.0, 2.0,
          ],
          'line-opacity': 1.0,
        },
      })

      // Labels
      map.addLayer({
        id: 'region-labels',
        type: 'symbol',
        source: 'au-regions',
        filter: ['==', ['get', 'gi_level'], 'Region'],
        layout: {
          'text-field': ['get', 'name'],
          'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
          'text-size': ['interpolate', ['linear'], ['zoom'], 4, 8, 7, 11, 10, 13],
          'text-max-width': 10,
          'text-allow-overlap': false,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': 'rgba(0,0,0,0.8)',
          'text-halo-width': 1.5,
          'text-opacity': ['interpolate', ['linear'], ['zoom'], 4, 0.3, 5.5, 1],
        },
        minzoom: 4,
      })

      // ── Hover ──
      map.on('mousemove', 'region-fill', (e) => {
        map.getCanvas().style.cursor = 'pointer'
        if (e.features.length > 0) {
          if (hoveredId !== null) map.setFeatureState({ source: 'au-regions', id: hoveredId }, { hover: false })
          hoveredId = e.features[0].id
          map.setFeatureState({ source: 'au-regions', id: hoveredId }, { hover: true })
        }
      })
      map.on('mouseleave', 'region-fill', () => {
        map.getCanvas().style.cursor = ''
        if (hoveredId !== null) map.setFeatureState({ source: 'au-regions', id: hoveredId }, { hover: false })
        hoveredId = null
      })

      // ── Click ──
      map.on('click', 'region-fill', (e) => {
        if (!e.features.length) return
        const feat = e.features[0]
        map.removeFeatureState({ source: 'au-regions' })
        map.setFeatureState({ source: 'au-regions', id: feat.id }, { selected: true, hover: true })
        activeRegion.value  = feat.properties
        drawerOpen.value    = false
        // Isolate this feature on the map
        selectedRegionName.value = feat.properties.name
        applySingleFeatureFilter(feat.properties.name)
        updateASRISClip()
        // Fit map to the cached full bounding box
        const bbox = featureGeomMap[feat.properties.name]
        if (bbox) {
          const [w, s, e2, n] = bbox
          map.fitBounds([[w, s], [e2, n]], { padding: 80, maxZoom: 12, duration: 700 })
        }
      })

      // ASRIS WMS GetFeatureInfo — 土壤模式下點擊查詢土壤分類
      map.on('click', async (e) => {
        if (!showGeology.value) return
        const { lng, lat } = e.lngLat

        // 只在已載入的產區 GeoJSON 內觸發
        const clipGeoJSON = getClipGeoJSON()
        if (clipGeoJSON?.features?.length) {
          try {
            const pt = turf.point([lng, lat])
            const inside = clipGeoJSON.features.some(f =>
              f.geometry && turf.booleanPointInPolygon(pt, f)
            )
            if (!inside) return
          } catch (_) { return }
        }

        map.getCanvas().style.cursor = 'wait'
        try {
          const d = 0.15  // 約 15km 精確查詢範圍
          const bbox = `${lat - d},${lng - d},${lat + d},${lng + d}`
          const base = '/asris/arcgis/services/ASRIS/ASRIS_ASC_MOB/MapServer/WMSServer' +
            '?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetFeatureInfo' +
            '&LAYERS=Australian_Soil_Classification54544' +
            '&QUERY_LAYERS=Australian_Soil_Classification54544' +
            '&CRS=EPSG%3A4326' +
            `&BBOX=${bbox}` +
            '&WIDTH=11&HEIGHT=11&I=5&J=5' +
            '&FEATURE_COUNT=1'

          const formats = ['text/plain', 'text/xml', 'application/vnd.esri.wms_featureinfo_xml']
          let text = ''
          for (const fmt of formats) {
            try {
              const res = await fetch(base + '&INFO_FORMAT=' + encodeURIComponent(fmt))
              if (!res.ok) continue
              const t = await res.text()
              if (t && t.trim().length > 0 && !t.includes('ServiceExceptionReport')) {
                text = t
                break
              }
            } catch (_) {}
          }

          const html = renderASRISPopupHTML(text || '') || renderAUFallbackHTML()
          if (asrisPopup) asrisPopup.remove()
          asrisPopup = new mapboxgl.Popup({ className: 'asris-popup-wrap', maxWidth: '340px', closeButton: true })
            .setLngLat([lng, lat])
            .setHTML(html)
            .addTo(map)
        } catch (err) {
          console.warn('[ASRIS] GetFeatureInfo error:', err)
        } finally {
          map.getCanvas().style.cursor = showGeology.value ? 'crosshair' : ''
        }
      })

      // 土壤模式下游標改為十字準心
      map.on('mousemove', () => {
        if (showGeology.value) map.getCanvas().style.cursor = 'crosshair'
      })

      // Click empty area → deselect (restore cluster filter)
      map.on('click', (e) => {
        const feats = map.queryRenderedFeatures(e.point, { layers: ['region-fill'] })
        if (!feats.length) {
          map.removeFeatureState({ source: 'au-regions' })
          activeRegion.value = null
          restoreFilter()
        }
      })

      mapReady.value  = true
      isLoading.value = false

      // 如果從地區選擇器進入，套用初始 cluster 過濾並飛到該位置
      if (props.initialCluster) {
        const { center, zoom } = props.initialCluster
        // 有 filterConfig（SA sub-cluster）時顯示 Zone 層以呈現完整層級
        if (props.initialCluster.filterConfig) showZones.value = true
        activeState.value = props.initialCluster.state
        drawerStateTab.value = props.initialCluster.state
        updateStateFilter()
        map.flyTo({ center, zoom, duration: 800 })
      }
    })

    map.on('error', (e) => { console.error('[AustraliaMap]', e) })

  } catch (err) {
    console.error('[AustraliaMap] init error:', err)
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
    const key = item.name
    let seed = 0; for (const ch of key) seed += ch.charCodeAt(0)
    const base = 20.0 + (seed % 60) * 0.07
    const amp = 0.5 + (seed % 10) * 0.04
    const trend = 0.02 + (seed % 3) * 0.005
    const sunBase = 800 + (seed % 100)
    const rainBase = 100 + (seed % 80)
    const temps = years.map((y,i) => {
      const v = Number((base + Math.sin((i+seed%7)*0.55)*amp + (y-2000)*trend).toFixed(2))
      allT.push(v); ySums[i]+=v; yCounts[i]+=1; return v
    })
    const sun = years.map((_,i) => {
      const v = Number((sunBase + Math.sin((i+seed%5)*0.5)*50).toFixed(1))
      allS.push(v); ySunSums[i]+=v; return v
    })
    const rain = years.map((_,i) => {
      const v = Number((rainBase + Math.cos((i+seed%6)*0.52)*30).toFixed(1))
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
      climateYear.value = climateYears.value.includes(2004) ? 2004 : climateYears.value[0]
  }
  try {
    const res = await fetch('/data/australia-climate.json')
    if (res.ok) { apply(await res.json()); return }
  } catch (_) {}
  const items = allRegions.value.filter(r => r.gi_level === 'Region')
  apply(createDemoClimatePayload(items))
}

function applyClimateColor(year) {
  if (!map || !climateEnabled.value || !climateData.value || !climateYears.value.length) return
  const idx = climateYears.value.indexOf(year)
  if (idx < 0) return
  const cfg = currentIndicatorConfig.value
  const items = allRegions.value.filter(r => r.gi_level === 'Region')
  const entries = []
  for (const r of items) {
    const arr = climateData.value[r.name]?.[cfg.dataKey]
    const value = Array.isArray(arr) && idx < arr.length ? Number(arr[idx]) : null
    if (Number.isFinite(value)) entries.push(r.name, valueToClimateColor(value, cfg.id))
  }
  if (!map.getLayer('au-climate-fill')) {
    map.addLayer({ id: 'au-climate-fill', type: 'fill', source: 'au-regions',
      filter: ['==', ['get', 'gi_level'], 'Region'],
      paint: { 'fill-color': '#888', 'fill-opacity': 0 } })
  }
  if (entries.length > 0) {
    map.setPaintProperty('au-climate-fill', 'fill-color', ['match', ['get', 'name'], ...entries, '#888888'])
    map.setPaintProperty('au-climate-fill', 'fill-opacity', 0.55)
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
  if (map && map.getLayer('au-climate-fill')) map.removeLayer('au-climate-fill')
}

onMounted(initMap)
onUnmounted(() => { if (map) { map.remove(); map = null } })

// ── 統一 adapters ───────────────────────────────────────────────
const unifiedInfo = computed(() => {
  const r = activeRegion.value
  if (!r) return null
  const data = activeInfo.value || {}
  const meta = []
  if (r.state) meta.push({ label: '州', value: r.state })
  if (r.zone) meta.push({ label: 'Zone', value: r.zone })
  if (r.gi_level) meta.push({ label: '層級', value: r.gi_level })
  return {
    name: r.name,
    badges: r.gi_level ? [{ label: r.gi_level, type: r.gi_level.toLowerCase().replace(/[-\s]/g, '') }] : [],
    meta,
    styles: data.styles || [],
    grapes: (data.grapes || []).map(g => typeof g === 'object' ? g.name : g),
    description: data.description || '',
    climate: data.climate || '',
    soil: data.soil || '',
  }
})

const filteredListUnified = computed(() =>
  filteredDrawerList.value.map(r => ({
    id: r.name,
    name: r.name,
    type: r.state || r.gi_level || '',
    styles: []
  }))
)

function selectById(item) {
  const found = allRegions.value.find(r => r.name === item.id)
  if (found) selectFromDrawer(found)
}

function handleMobileAction(action) {
  if (action === 'aoc') { drawerOpen.value = !drawerOpen.value; showLayerPanel.value = false }
  else if (action === 'layer') { showLayerPanel.value = !showLayerPanel.value; drawerOpen.value = false }
  else if (action === '3d') { toggle3D() }
  else if (action === 'info') { toggleInfo() }
}
</script>

<style scoped>
/* ── Layout ───────────────────────────────────────────────────────── */
.australia-map-section {
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
.map-loading {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.6);
  color: #fff;
  z-index: 20;
  gap: 16px;
}
.loading-spinner {
  width: 40px; height: 40px;
  border: 4px solid rgba(255,255,255,0.3);
  border-top-color: #c8a951;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg) } }
.map-error {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  background: rgba(200,40,40,0.9);
  color: #fff;
  padding: 16px 24px;
  border-radius: 12px;
  z-index: 20;
}

/* ── Header ───────────────────────────────────────────────────────── */
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
.map-header h1 {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 1px 6px rgba(0,0,0,0.7);
  margin: 0;
  padding-top: 4px;
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
  background: rgba(0,39,78,0.85);
  color: #fff;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  transition: background 0.2s;
  white-space: nowrap;
}
.map-hdr-btn:hover { background: rgba(0,60,120,0.95); }
.map-hdr-btn.ghost {
  background: rgba(255,255,255,0.75);
  border: 1.5px solid rgba(0,39,78,0.5);
  color: #00274e;
}
.state-tab.active { color: #fff; opacity: 1; }

/* ── Info bar (Bordeaux/Portugal style: white card) ──────────────── */
.map-info-bar {
  position: absolute;
  bottom: max(calc(env(safe-area-inset-bottom, 0px) + 110px), 158px);
  left: 50%;
  transform: translateX(-50%);
  width: min(90vw, 380px);
  background: rgba(255,255,255,0.97);
  border-radius: 14px;
  padding: 12px 14px;
  z-index: 10;
  color: #222;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}
.aoc-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 28px;
  margin-bottom: 8px;
}
.map-info-bar.collapsed .aoc-title-row { margin-bottom: 0; }
.aoc-info-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #222;
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1; min-width: 0;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.aoc-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
.title-buttons { display: flex; gap: 6px; align-items: center; flex-shrink: 0; }
.btn-collapse-inline {
  display: flex; align-items: center; gap: 4px;
  padding: 6px 10px;
  background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
  border: 1px solid #ccc; border-radius: 6px;
  color: #444; font-size: 0.82rem; font-weight: 600;
  cursor: pointer; transition: all 0.2s;
}
.btn-collapse-inline:hover { background: linear-gradient(135deg, #e8e8e8, #d0d0d0); border-color: #00274e; color: #00274e; }
.btn-text { font-size: 0.85rem; white-space: nowrap; }
.map-info-bar.collapsed .btn-text { display: none; }
.map-info-bar.collapsed .btn-collapse-inline { padding: 6px 8px; }
.btn-pronunciation-icon {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; padding: 6px;
  border: none; border-radius: 10px;
  background: linear-gradient(180deg, #764ba2 0%, #667eea 100%);
  color: #fff; cursor: pointer; transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.16); flex-shrink: 0;
}
.btn-pronunciation-icon:disabled { opacity: 0.6; cursor: not-allowed; }
.btn-pronunciation-icon:not(:disabled):hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(0,0,0,0.22); }
.btn-reset-icon {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; padding: 6px;
  border: none; border-radius: 10px;
  background: linear-gradient(180deg, #ff6f61 0%, #ef4f45 100%);
  color: #fff; cursor: pointer; transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.16); flex-shrink: 0;
}
.btn-reset-icon:hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(0,0,0,0.22); }

.btn-show-all {
  padding: 5px 12px; border: none; border-radius: 10px;
  background: linear-gradient(180deg, #3e8ef7 0%, #2670d4 100%);
  color: #fff; font-size: 0.78rem; font-weight: 700;
  cursor: pointer; transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.16); flex-shrink: 0;
  white-space: nowrap;
}
.btn-show-all:hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(38,112,212,0.35); }

.info-details {
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: 1000px; opacity: 1;
}
.map-info-bar.collapsed .info-details { max-height: 0; opacity: 0; margin: 0; padding: 0; }
.region-info-content { display: flex; flex-direction: column; gap: 8px; margin-top: 8px; }
.info-header { display: flex; align-items: center; }
.style-badges { display: flex; gap: 6px; flex-wrap: wrap; }

.info-level-badge {
  font-size: 0.68rem; font-weight: 700;
  padding: 2px 8px; border-radius: 10px;
}
.info-level-badge.region    { background: rgba(41,128,185,0.12); color: #1a5ea8; border: 1px solid rgba(41,128,185,0.3); }
.info-level-badge.zone      { background: rgba(127,140,141,0.12); color: #555; border: 1px solid #ccc; }
.info-level-badge.subregion { background: rgba(149,165,166,0.12); color: #666; border: 1px solid #ccc; }
.info-state-badge {
  font-size: 0.68rem; font-weight: 700;
  padding: 2px 8px; border-radius: 10px;
  background: rgba(200,169,81,0.15); color: #7a5c00;
  border: 1px solid rgba(200,169,81,0.3);
}
.info-zone-badge {
  font-size: 0.65rem;
  padding: 2px 8px; border-radius: 10px;
  background: #f0f0f0; color: #666;
}

.description { font-size: 0.82rem; color: #333; line-height: 1.6; }
.famous-for {
  font-size: 0.78rem; color: #7a5c00;
  background: rgba(200,169,81,0.08);
  border-radius: 8px; padding: 5px 8px;
  line-height: 1.5;
}
.famous-label { font-weight: 700; }

.climate-soil-row { display: flex; flex-direction: column; gap: 4px; }
.cs-item { display: flex; gap: 6px; align-items: flex-start; font-size: 0.75rem; color: #555; }
.cs-icon { flex-shrink: 0; }

.grape-section { display: flex; flex-direction: column; gap: 4px; }
.grape-title { font-size: 0.75rem; color: #555; font-weight: 600; }
.grape-badges { display: flex; flex-wrap: wrap; gap: 4px; }
.grape-badge {
  font-size: 0.72rem; font-weight: 600;
  padding: 3px 9px; border-radius: 10px;
}
.grape-badge.red   { background: rgba(180,50,50,0.12); color: #8b1a1a; border: 1px solid rgba(180,50,50,0.25); }
.grape-badge.white { background: rgba(200,180,50,0.12); color: #7a5c00; border: 1px solid rgba(200,180,50,0.25); }

.wine-types-section { display: flex; flex-direction: column; gap: 4px; }
.wine-types-title { font-size: 0.75rem; color: #555; font-weight: 600; }
.wine-types-list { display: flex; flex-wrap: wrap; gap: 4px; }
.wine-type-tag {
  font-size: 0.7rem; padding: 2px 8px; border-radius: 10px; font-weight: 600;
}
.wine-type-tag.red      { background: #c0392b; color: #fff; }
.wine-type-tag.white    { background: rgba(212,172,13,0.15); color: #7a5c00; }
.wine-type-tag.sparkling{ background: rgba(41,128,185,0.12); color: #1a5ea8; }
.wine-type-tag.sweet    { background: rgba(142,68,173,0.12); color: #6c2e8a; }
.wine-type-tag.default  { background: #f5f5f5; color: #555; }

.no-info { color: #666; font-size: 0.82rem; line-height: 1.6; }
.legend-inline { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
.legend-inline-item { display: flex; align-items: center; gap: 4px; font-size: 0.72rem; color: #555; }
.legend-dot { width: 8px; height: 8px; border-radius: 50%; }
.hint-sub { font-size: 0.72rem; color: #888; margin-top: 6px; }

/* ── Drawer (warm-light style, matching Portugal) ─────────────────── */
.aoc-backdrop {
  position: fixed; inset: 0;
  background: rgba(15,23,42,0.34);
  backdrop-filter: blur(4px);
  z-index: 30;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.aoc-drawer {
  background: #f7f3ee;
  border-radius: 20px 20px 0 0;
  width: 100%; max-width: 480px;
  max-height: 75vh;
  display: flex; flex-direction: column;
  overflow: hidden;
  padding-bottom: env(safe-area-inset-bottom);
}
.aoc-handle {
  width: 36px; height: 4px;
  background: rgba(122,90,64,0.25);
  border-radius: 2px;
  margin: 10px auto 0;
}
.drawer-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 16px 8px;
  color: #333; font-weight: 700; font-size: 0.9rem;
}
.drawer-close {
  background: none; border: none; color: #888;
  font-size: 1rem; cursor: pointer;
}
.drawer-close:hover { background: #f0f0f0; color: #333; border-radius: 50%; }
.drawer-search-wrap {
  display: flex; align-items: center;
  margin: 0 12px 8px;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 6px 12px; gap: 8px;
}
.search-input {
  flex: 1; background: none; border: none;
  color: #333; font-size: 0.82rem; outline: none;
}
.search-input::placeholder { color: #aaa; }
.filter-tabs {
  display: flex; flex-wrap: wrap; gap: 4px;
  padding: 0 12px 8px;
}
.filter-tab {
  padding: 3px 10px; border-radius: 14px; font-size: 0.68rem; font-weight: 600;
  background: #f0f0f0; border: 1px solid #ddd;
  color: #555; cursor: pointer; transition: all 0.15s;
  white-space: nowrap;
}
.filter-tab.active { background: #00274e; color: #fff; border-color: #00274e; }
.appellation-list {
  flex: 1; overflow-y: auto;
  padding: 0 12px 12px;
}
.app-item {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 10px; border-radius: 10px; cursor: pointer;
  transition: background 0.15s;
}
.app-item:hover { background: #f8f8f8; }
.app-item.active { background: rgba(0,39,78,0.08); }
.app-badge {
  font-size: 0.62rem; font-weight: 700;
  padding: 2px 6px; border-radius: 8px;
  color: #fff; flex-shrink: 0;
}
.app-text { display: flex; flex-direction: column; }
.app-name { color: #222; font-size: 0.82rem; font-weight: 600; }
.app-sub  { color: #888; font-size: 0.68rem; }
.no-results { color: #aaa; text-align: center; padding: 20px; font-size: 0.8rem; }

/* ── Cluster filter tag ─────────────────────────────────────────── */
.cluster-filter-tag {
  display: flex; align-items: center; gap: 8px;
  padding: 6px 12px 8px;
  font-size: 0.78rem; font-weight: 600; color: #444;
}
.cluster-dot {
  width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0;
}
.cluster-count-badge {
  margin-left: auto;
  background: #f0f0f0; border-radius: 10px;
  padding: 1px 7px; font-size: 0.7rem; color: #666;
}

/* ── GI group header ────────────────────────────────────────────── */
.gi-group-header {
  display: flex; align-items: center; gap: 6px;
  padding: 8px 10px 4px;
  font-size: 0.72rem; font-weight: 700; color: #555;
  background: #f5f5f5;
  border-radius: 8px;
  margin: 6px 0 2px;
  letter-spacing: 0.02em;
}
.gi-group-icon { font-size: 0.9rem; }
.gi-group-label { flex: 1; }
.gi-group-count {
  background: #e0e0e0; border-radius: 8px;
  padding: 1px 6px; font-size: 0.68rem; color: #666;
}

/* ── Bottom toolbar (Bordeaux style) ─────────────────────────────── */
.mobile-map-toolbar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: max(calc(env(safe-area-inset-bottom, 0px) + 24px), 72px);
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  padding: 8px;
  border-radius: 18px;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
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
.mobile-tool-btn:hover { background: linear-gradient(180deg, #f5ede0 0%, #eadcc8 100%); }
.mobile-tool-btn.active {
  background: linear-gradient(180deg, #003060 0%, #001f40 100%);
  color: #fff;
}
.mobile-tool-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px; height: 30px;
  border-radius: 50%;
  background: rgba(0,39,78,0.08);
  font-size: 0.8rem;
  font-weight: 800;
}
.mobile-tool-btn.active .mobile-tool-icon { background: rgba(255,255,255,0.18); }

/* ── Layer panel ─────────────────────────────────────────────────── */
.layer-panel {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.22);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 150px;
  z-index: 20;
}
.layer-panel-title {
  font-size: 0.72rem;
  font-weight: 700;
  color: #888;
  text-align: center;
  padding-bottom: 4px;
  border-bottom: 1px solid #eee;
  margin-bottom: 2px;
}
.layer-toggle-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  background: #f5ede0;
  color: #4f3422;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s;
  width: 100%;
  text-align: left;
}
.layer-toggle-btn:hover { background: #eadcc8; }
.layer-toggle-btn.active {
  background: linear-gradient(135deg, #003060, #001f40);
  color: #fff;
}
.layer-toggle-icon { font-size: 1rem; }
.layer-toggle-label { flex: 1; }
.layer-toggle-status {
  font-size: 0.7rem;
  opacity: 0.75;
  background: rgba(0,0,0,0.08);
  border-radius: 6px;
  padding: 1px 6px;
}
.layer-toggle-btn.active .layer-toggle-status { background: rgba(255,255,255,0.18); }

/* ── Layer panel transition ──────────────────────────────────────── */
.layer-panel-enter-active, .layer-panel-leave-active {
  transition: opacity 0.18s, transform 0.18s;
}
.layer-panel-enter-from, .layer-panel-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(6px);
}

/* ── Sheet transition ─────────────────────────────────────────────── */
.sheet-fade-enter-active, .sheet-fade-leave-active { transition: opacity 0.2s; }
.sheet-fade-enter-from, .sheet-fade-leave-to { opacity: 0; }
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
/* ASRIS 浮動面板 */
.asris-float-panel {
  position: absolute;
  bottom: 90px;
  right: 16px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.22);
  padding: 12px 16px;
  min-width: 220px;
  z-index: 30;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.asris-float-title {
  font-size: 13px;
  font-weight: 700;
  color: #7b4b00;
  margin-bottom: 10px;
}
.asris-float-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
.asris-float-label {
  font-size: 12px;
  color: #666;
  white-space: nowrap;
}
.asris-opacity-slider {
  flex: 1;
  height: 4px;
  accent-color: #c97d2e;
}
.asris-opacity-pct {
  font-size: 12px;
  color: #888;
  min-width: 32px;
  text-align: right;
}
.asris-float-footer {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 10px;
  color: #aaa;
  border-top: 1px solid #f0f0f0;
  padding-top: 6px;
}
/* Zone 層澳洲專用按鈕 */
.au-zone-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(30,30,40,0.92);
  border: 1px solid rgba(255,255,255,0.12);
  border-top: none;
  border-radius: 0 0 12px 12px;
  padding: 8px 16px;
  cursor: pointer;
  color: #e0e0e0;
  font-size: 0.82rem;
}
.au-zone-toggle:hover { background: rgba(50,50,60,0.95); }
.au-zone-status { margin-left: auto; font-size: 0.72rem; color: #aaa; }

/* rmap-section for extra-content slot */
.rmap-section { margin-top: 8px; }
.rmap-section-title { font-size: 11px; color: #999; margin-bottom: 4px; text-transform: uppercase; letter-spacing: .5px; }
</style>

<style>
/* ── ASRIS 土壤 Popup（非 scoped，覆蓋 mapboxgl 樣式）— NZ 風格 ── */
.asris-popup-wrap .mapboxgl-popup-content {
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.28);
  min-width: 260px;
  background: linear-gradient(180deg, #1e3a2a 0%, #16291e 100%);
}
.asris-popup-wrap .mapboxgl-popup-close-button {
  color: #d4f5d4;
  font-size: 18px;
  top: 4px; right: 6px;
  background: none; border: none;
  z-index: 2;
}
.asris-geology-popup {
  font-family: 'Noto Sans TC', sans-serif;
  color: #f5f1eb;
  min-width: 240px;
  max-width: 340px;
}
.asris-popup-header {
  background: rgba(0,0,0,0.25);
  padding: 10px 14px;
  font-weight: 700; font-size: 14px;
  color: #fff; letter-spacing: 0.5px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.asris-popup-row {
  display: flex; padding: 8px 14px; gap: 10px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  font-size: 13px;
}
.asris-popup-label { color: #a8d8a8; min-width: 64px; }
.asris-popup-val   { color: #fff; flex: 1; }
.asris-popup-wine-block {
  background: rgba(255,255,255,0.06);
  margin: 10px 12px 12px;
  padding: 10px 12px;
  border-radius: 8px;
  border-left: 3px solid #6fbf73;
}
.asris-popup-wine-title {
  font-weight: 700; font-size: 13px;
  margin-bottom: 6px; color: #c8f0c8;
}
.asris-popup-wine-text {
  font-size: 12px; line-height: 1.6; color: #e8efe8;
}
</style>
