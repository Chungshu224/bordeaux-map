<template>
  <section class="spain-map-section">

    <!-- 全螢幕地圖 -->
    <div ref="mapContainer" class="map"></div>

    <!-- ── 統一頂部導覽列 ── -->
    <RegionMapHeader
      region-name="西班牙"
      :title="`${region.name} 產區地圖`"
      :icon="region.icon"
      @back="emit('back')"
    />

    <!-- ── 統一資訊側欄 ── -->
    <RegionMapInfoPanel
      v-if="activeInfo"
      :info="unifiedInfo"
      :theme-color="region.color || '#c0392b'"
      :audio-available="true"
      :is-playing-audio="isPlayingAudio"
      :collapsed="infoCollapsed"
      @toggle-collapse="infoCollapsed = !infoCollapsed"
      @play-audio="playPronunciation"
      @reset="resetView"
    >

    </RegionMapInfoPanel>

    <!-- ── 統一產區清單抽屜 ── -->
    <RegionMapAppellationDrawer
      :open="drawerOpen"
      :region-name="region.name"
      :items="filteredListUnified"
      :type-tabs="typeTabs"
      :type-filter="typeFilter"
      :search="search"
      :active-id="activeInfo?.id || ''"
      @update:open="drawerOpen = $event"
      @update:type-filter="typeFilter = $event"
      @update:search="search = $event"
      @select="selectById"
    />

    <!-- 圖例 (左下) -->
    <div v-if="mapReady" class="map-legend">
      <div class="legend-title">產區認證</div>
      <div v-for="t in legendTypes" :key="t.label" class="legend-item">
        <span class="legend-dot" :style="{ background: t.color }"></span>
        <span>{{ t.label }}</span>
      </div>
    </div>

    <!-- 氣候熱力圖控制列 -->
    <transition name="sp-climate-slide">
    <div v-if="climateEnabled && climateData" class="sp-climate-overlay">
      <div class="sp-cy-indicator-tabs">
        <button v-for="ind in CLIMATE_INDICATORS" :key="ind.id"
          :class="['sp-cy-ind-btn', { active: climateIndicator === ind.id }]"
          @click="setClimateIndicator(ind.id)">
          {{ ind.icon }} {{ ind.label }}
        </button>
      </div>
      <div class="sp-climate-header-row">
        <div class="sp-cy-year-badge">
          <span class="sp-cy-year">{{ climateYear }}</span>
          <span v-if="isSpainGoldenVintage" class="sp-cy-golden">🏆 黃金年份</span>
        </div>
        <div class="sp-cy-stats">
          <div v-if="activeInfo" class="sp-cy-aoc-name">{{ activeInfo.calDsNom }}</div>
          <span v-if="spCurrentYearValue !== null" class="sp-cy-temp">
            {{ spCurrentYearValue }}{{ spCurrentIndicatorConfig.unit }}
          </span>
          <span v-if="spCurrentYearDelta !== null" class="sp-cy-delta"
            :class="spCurrentYearDeltaPositive ? 'sp-cy-warm' : 'sp-cy-cool'">
            {{ spCurrentYearDeltaPositive ? '+' : '' }}{{ spCurrentYearDelta }}{{ spCurrentIndicatorConfig.unit }} vs 基準
          </span>
        </div>
        <button class="sp-cy-close" @click="toggleClimate" title="關閉氣候圖層">✕</button>
      </div>
      <input type="range" class="sp-climate-slider" v-model.number="climateYear"
        min="1980" max="2024" step="1" @input="onClimateYearChange">
      <div class="sp-climate-year-axis">
        <span>1980</span><span>1990</span><span>2000</span><span>2010</span><span>2020</span><span>2024</span>
      </div>
      <div class="sp-climate-legend">
        <div :class="['sp-legend-gradient', `sp-legend-${climateIndicator}`]"></div>
        <div class="sp-legend-labels">
          <span>{{ spCurrentGlobalStats ? spCurrentGlobalStats.min.toFixed(0) : '' }}{{ spCurrentIndicatorConfig.unit }} {{ spCurrentIndicatorConfig.lowLabel }}</span>
          <span>均值</span>
          <span>{{ spCurrentIndicatorConfig.highLabel }} {{ spCurrentGlobalStats ? spCurrentGlobalStats.max.toFixed(0) : '' }}{{ spCurrentIndicatorConfig.unit }}</span>
        </div>
      </div>
      <div class="sp-climate-footnote">📊 {{ spCurrentIndicatorConfig.footnote }}</div>
    </div>
    </transition>

    <!-- ── 統一圖層面板 ── -->
    <transition name="slide-up">
      <div v-if="showLayerPanel" class="layer-panel-wrapper">
        <RegionMapLayerPanel
          :is3D="is3D"
          :show-contours="contoursEnabled"
          :climate-enabled="climateEnabled"
          :soil-disabled="false"
          :soil-label="'IGME 地質'"
          :soil-enabled="soilEnabled"
          @toggle-3d="toggle3D"
          @toggle-contours="canAccessTier('premium') ? toggleContours() : alertUpgrade('等高線', 'premium')"
          @toggle-climate="canAccessTier('premium') ? toggleClimate() : alertUpgrade('氣候熱力', 'premium')"
          @toggle-soil="toggleSoil"
          @close="showLayerPanel = false"
        />
        <!-- IGME 地質圖層控制列（地質圖層啟用時顯示）-->
        <div v-if="soilEnabled" class="spain-geo-inline-panel">
          <div class="spain-geo-inline-title">🗺️ IGME 地質圖 1:200,000</div>
          <div class="spain-geo-inline-row">
            <span class="spain-geo-inline-lbl">透明度</span>
            <input class="spain-geo-inline-slider" type="range" min="0.1" max="1.0" step="0.05" v-model.number="soilOpacity">
            <span class="spain-geo-inline-pct">{{ Math.round(soilOpacity * 100) }}%</span>
          </div>
          <div class="spain-geo-inline-footer">
            <span>© IGME Mapa Geológico 1:200,000 (CC-BY 4.0)</span>
            <span>點擊地圖查看地質資訊</span>
          </div>
        </div>
      </div>
    </transition>

    <!-- ── 統一工具列 ── -->
    <RegionMapMobileToolbar
      v-if="mapReady"
      :aoc-open="drawerOpen"
      :layer-open="showLayerPanel"
      :is3D="is3D"
      :info-open="!!activeInfo && !infoCollapsed"
      @action="handleMobileAction"
    />

    <div v-if="isLoading" class="loading-overlay"><div class="loading-spinner"></div></div>
    <div v-if="mapError" class="map-error">{{ mapError }}</div>

  </section>
</template>



<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import * as turf from '@turf/turf'
import 'mapbox-gl/dist/mapbox-gl.css'
import { authActions } from '@/stores/authStore.js'
import { TIER_WEIGHT } from '@/router/index.js'
import {
  RegionMapHeader, RegionMapLayerPanel, RegionMapInfoPanel,
  RegionMapAppellationDrawer, RegionMapMobileToolbar
} from '../../shared/regionMap/index.js'

const props = defineProps({
  region: { type: Object, required: true },
  backLabel: { type: String, default: '返回自治區' },
})
const emit = defineEmits(['back'])
const router = useRouter()

// ── 訂閱等級工具 ──────────────────────────────────────────────────
const resolvedTier = computed(() => authActions.getEffectiveTier())
const canAccessTier = (minimumTier) => TIER_WEIGHT[resolvedTier.value] >= TIER_WEIGHT[minimumTier]
const alertUpgrade = (featureName, requiredTier) => {
  const labels = { basic: '初階付費', premium: '進階付費' }
  alert(`🔒 「${featureName}」需要「${labels[requiredTier]}」方案才能使用\n\n請升級您的訂閱以解鎖此功能！`)
}

// ── State ───────────────────────────────────────────────────────
const mapContainer = ref(null)
const mapReady = ref(false)
const isLoading = ref(true)
const mapError = ref(null)
const infoCollapsed = ref(true)
const drawerOpen = ref(false)
const showProvinces = ref(true)
const showLayerPanel = ref(false)
const is3D = ref(false)
const search = ref('')
const typeFilter = ref('all')
const activeInfo = ref(null)
const allRegions = ref([])    // all 96 features as normalized objects
const appellations = ref([])  // spain-appellations.json lookup
// ── 等高線 / 氣候熱力狀態 ──────────────────────────────────────
const contoursEnabled  = ref(false)
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
  {
    id: 'temp', icon: '🌡', label: '夏季均溫', unit: '°C',
    lowLabel: '涼', highLabel: '熱',
    footnote: '指標：6–8 月日均溫平均值（夏季均溫）｜ 基準：1981–2010',
    dataKey: 'temps', baselineKey: 'baseline',
  },
  {
    id: 'sun', icon: '☀️', label: '日照時數', unit: 'h',
    lowLabel: '少', highLabel: '多',
    footnote: '指標：6–8 月日照時數總和（小時）｜ 基準：1981–2010',
    dataKey: 'sun', baselineKey: 'baselineSun',
  },
  {
    id: 'rain', icon: '🌧', label: '夏季降雨', unit: 'mm',
    lowLabel: '乾', highLabel: '濕',
    footnote: '指標：6–8 月降雨量總和（毫米）｜ 基準：1981–2010',
    dataKey: 'rain', baselineKey: 'baselineRain',
  },
]

const SPAIN_GOLDEN_VINTAGES = new Set([1989, 1994, 1995, 2001, 2004, 2005, 2010, 2015, 2016, 2018, 2021])

// ── IGME 地質圖狀態 ──────────────────────────────────────────────
const soilEnabled = ref(false)
const soilOpacity = ref(0.8)

const spCurrentIndicatorConfig = computed(() =>
  CLIMATE_INDICATORS.find(i => i.id === climateIndicator.value)
)
const spCurrentGlobalStats = computed(() => {
  const id = climateIndicator.value
  if (id === 'sun')  return climateStatsSun.value
  if (id === 'rain') return climateStatsRain.value
  return climateStats.value
})
const spCurrentYearAvgArr = computed(() => {
  const id = climateIndicator.value
  if (id === 'sun')  return climateYearSun.value
  if (id === 'rain') return climateYearRain.value
  return climateYearAvg.value
})
const isSpainGoldenVintage = computed(() => SPAIN_GOLDEN_VINTAGES.has(climateYear.value))

const spCurrentYearValue = computed(() => {
  if (!climateYears.value.length) return null
  const cfg = spCurrentIndicatorConfig.value
  const idx = climateYears.value.indexOf(climateYear.value)
  if (idx < 0) return null
  if (climateData.value && activeInfo.value?.zonDsNom) {
    const d = climateData.value[activeInfo.value.zonDsNom]
    if (d?.[cfg.dataKey]?.[idx] != null) {
      return +(d[cfg.dataKey][idx]).toFixed(cfg.id === 'temp' ? 1 : 0)
    }
  }
  const arr = spCurrentYearAvgArr.value
  return arr[idx] != null ? +(arr[idx]).toFixed(cfg.id === 'temp' ? 1 : 0) : null
})

const spCurrentYearDelta = computed(() => {
  if (!climateData.value || !climateYears.value.length) return null
  const cfg = spCurrentIndicatorConfig.value
  const idx = climateYears.value.indexOf(climateYear.value)
  if (idx < 0) return null
  if (activeInfo.value?.zonDsNom) {
    const d = climateData.value[activeInfo.value.zonDsNom]
    if (d?.[cfg.dataKey]?.[idx] != null && d[cfg.baselineKey]) {
      const dec = cfg.id === 'temp' ? 2 : 0
      return +(d[cfg.dataKey][idx] - d[cfg.baselineKey]).toFixed(dec)
    }
  }
  const vals = Object.values(climateData.value)
    .map(d => {
      const arr = d[cfg.dataKey]
      const bl = d[cfg.baselineKey]
      return arr?.[idx] != null && bl ? arr[idx] - bl : null
    }).filter(v => v != null)
  return vals.length ? +(vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(cfg.id==='temp'?2:0) : null
})
const spCurrentYearDeltaPositive = computed(() => (spCurrentYearDelta.value ?? 0) > 0)

let map = null
let geologyPopup = null
let geologyClickRegistered = false
let regionOutlineGeoJSON = null
let hoveredId = null
let hoveredProvinceId = null
let initialBounds = null    // 起始畫面的 bounds，供重置使用
let baseFilter = null       // addLayers 套用的初始 filter，重置時恢復
let selectedRegionId = null // 目前選取的 wine-region feature id
const allRegionsMap = new Map()   // Map<featureIdx → normalizedInfo> ，供 click 查詢用
const featureBboxMap = new Map()  // Map<featureIdx → [[minLng,minLat],[maxLng,maxLat]]>

// ── Type helpers ─────────────────────────────────────────────────
const TYPE_MAP = {
  'Denominación de Origen Calificada':  { label: 'DOCa', cls: 'doca', color: '#e74c3c' },
  'Denominación de Origen':             { label: 'DO',   cls: 'do',   color: '#27ae60' },
  'Denominación de Origen Protegida':   { label: 'DOP',  cls: 'dop',  color: '#e67e22' },
  'Vino de Calidad':                    { label: 'VC',   cls: 'vc',   color: '#3498db' },
  'Vino de Pago':                       { label: 'VP',   cls: 'vp',   color: '#9b59b6' },
}

// typeFilter tab value → GeoJSON TPR_DS_DES 字串
const CLS_TO_TPR = {
  doca: 'Denominación de Origen Calificada',
  do:   'Denominación de Origen',
  dop:  'Denominación de Origen Protegida',
  vc:   'Vino de Calidad',
  vp:   'Vino de Pago',
}

const legendTypes = [
  { label: 'DOCa', color: '#e74c3c' },
  { label: 'DO',   color: '#27ae60' },
  { label: 'DOP',  color: '#e67e22' },
  { label: 'VC',   color: '#3498db' },
  { label: 'VP',   color: '#9b59b6' },
]
function typeColor(label) {
  return legendTypes.find(t => t.label === label)?.color || '#999'
}

function typeClass(tpr) {
  return TYPE_MAP[tpr]?.cls || 'do'
}

function typeLabel(tpr) {
  return TYPE_MAP[tpr]?.label || 'DO'
}

// ── Style tag colors ──────────────────────────────────────────────
// ── 葡萄品種紅白分類 ──────────────────────────────────────────────
const RED_GRAPE_KEYWORDS = ['tinta', 'tinto', 'tintorera', 'negro', 'negra', 'noir', 'beltza']
const WHITE_GRAPE_KEYWORDS = ['blanca', 'blanco', 'blanc', 'zuri', 'gris']
const RED_GRAPES_CORE = new Set([
  'garnacha', 'tempranillo', 'monastrell', 'bobal', 'cariñena', 'mazuelo',
  'mencía', 'mencia', 'graciano', 'malbec', 'merlot', 'cabernet sauvignon',
  'syrah', 'pinot noir', 'garnatxa', 'callet', 'carrasquín', 'carrasquin',
  'brancellao', 'espadeiro', 'sousón', 'souson', 'sumoll', 'trepat',
  'juan garcía', 'juan garcia', 'juan ibáñez', 'juan ibanez',
  'moristel', 'parraleta', 'prieto picudo', 'rufete', 'merenzao',
  'bruñal', 'brunal', 'baboso negro', 'ferrón', 'ferron', 'fogoneu',
  'caiño', 'caino', 'tintilla', 'negramoll', 'listán negro', 'vijariego negro',
  'albarín tinto', 'loureira tinta',
])
const WHITE_GRAPES_CORE = new Set([
  'albariño', 'albarino', 'verdejo', 'viura', 'macabeo', 'xarel·lo', 'xarello',
  'parellada', 'chardonnay', 'sauvignon blanc', 'riesling', 'gewürztraminer',
  'godello', 'treixadura', 'loureira', 'airén', 'airen', 'palomino',
  'pedro ximénez', 'pedro ximenez', 'moscatel', 'malvasía', 'malvasia',
  'albillo', 'verdelho', 'torrontés', 'torrontes', 'albarello', 'alcañón',
  'cayetana blanca', 'merseguera', 'malvar', 'doña blanca', 'dona blanca',
  'hondarrabi zuri', 'lado', 'picapoll', 'moll', 'garnacha blanca',
  'forastera', 'listán blanco', 'vijariego', 'vijiriega', 'verijadiego',
  'zalema', 'gomera', 'palomino fino', 'pansà blanca',
])
function grapeTypeCls(name) {
  const n = name.toLowerCase()
  // 中文標記
  if (n.includes('紅') || n.includes('紅品種')) return 'red'
  if (n.includes('白品種') || n.includes('白葡萄')) return 'white'
  // 西班牙語/加泰語/巴斯克語關鍵字
  if (RED_GRAPE_KEYWORDS.some(k => n.includes(k))) return 'red'
  if (WHITE_GRAPE_KEYWORDS.some(k => n.includes(k))) return 'white'
  // 核心品種查找（取括號前的基本名稱比對）
  const base = n.split(/[（(]/)[0].trim()
  if (RED_GRAPES_CORE.has(base)) return 'red'
  if (WHITE_GRAPES_CORE.has(base)) return 'white'
  // 部分前綴比對
  for (const r of RED_GRAPES_CORE) { if (base.startsWith(r) || r.startsWith(base)) return 'red' }
  for (const w of WHITE_GRAPES_CORE) { if (base.startsWith(w) || w.startsWith(base)) return 'white' }
  return ''
}

function styleTagColor(style) {
  const map = {
    '紅酒':  { background: '#8B0000', color: '#fff' },
    '白酒':  { background: '#f5e28a', color: '#555' },
    '粉紅酒':{ background: '#ffb6c1', color: '#333' },
    '甜酒':  { background: '#FFD700', color: '#333' },
    '氣泡酒':{ background: '#667eea', color: '#fff' },
    '加強酒':{ background: '#7b341e', color: '#fff' },
    '橘酒':  { background: '#e67e22', color: '#fff' },
  }
  return map[style] || { background: '#999', color: '#fff' }
}

// ── Computed ──────────────────────────────────────────────────────
const typeTabs = [
  { value: 'all',  label: '全部' },
  { value: 'doca', label: 'DOCa' },
  { value: 'do',   label: 'DO' },
  { value: 'dop',  label: 'DOP' },
  { value: 'vc',   label: 'VC' },
  { value: 'vp',   label: 'VP' },
]

const filteredList = computed(() => {
  let list = allRegions.value
  if (typeFilter.value !== 'all') {
    list = list.filter(r => r.typeClass === typeFilter.value)
  }
  if (search.value.trim()) {
    const q = search.value.trim().toLowerCase()
    list = list.filter(r =>
      r.calDsNom.toLowerCase().includes(q) ||
      r.zonDsNom.toLowerCase().includes(q) ||
      (r.appData?.autonomia || '').toLowerCase().includes(q) ||
      (r.appData?.grapes || []).some(g => g.toLowerCase().includes(q))
    )
  }
  return list
})

// ── Data loading ──────────────────────────────────────────────────
async function loadAppellations() {
  const res = await fetch('/spain/spain-appellations.json')
  const data = await res.json()
  appellations.value = data
}

function lookupAppellation(zonDsNom) {
  return appellations.value.find(a => a.zonName === zonDsNom) || null
}

function normalizeFeature(f, idx) {
  const p = f.properties
  const tpr = p.TPR_DS_DES || ''
  return {
    id: idx,
    zonDsNom: p.ZON_DS_NOM || '',
    calDsNom: p.CAL_DS_NOM || p.ZON_DS_NOM || '',
    tprDsDes: tpr,
    typeLabel: typeLabel(tpr),
    typeClass: typeClass(tpr),
    appData: null, // filled after appellations loaded
  }
}

// ── 等高線 / 氣候熱力圖函數 ───────────────────────────────────────

let contoursInitialized = false

function initContourLayers() {
  if (contoursInitialized || !map) return
  contoursInitialized = true

  if (!map.getSource('mapbox-dem')) {
    map.addSource('mapbox-dem', {
      type: 'raster-dem',
      url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
      tileSize: 512, maxzoom: 14,
    })
  }
  if (!map.getSource('sp-contours')) {
    map.addSource('sp-contours', {
      type: 'vector',
      url: 'mapbox://mapbox.mapbox-terrain-v2',
    })
  }
  if (!map.getLayer('sp-contours-line')) {
    map.addLayer({
      id: 'sp-contours-line', type: 'line',
      source: 'sp-contours', 'source-layer': 'contour',
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
  if (!map.getLayer('sp-contour-labels')) {
    map.addLayer({
      id: 'sp-contour-labels', type: 'symbol',
      source: 'sp-contours', 'source-layer': 'contour',
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
      filter: ['==', ['%', ['to-number', ['get', 'ele']], 10], 0],
      minzoom: 10,
    })
  }
}

function toggleContours() {
  if (!map) return
  contoursEnabled.value = !contoursEnabled.value
  if (contoursEnabled.value) {
    initContourLayers()  // 延遲初始化
  }
  const vis = contoursEnabled.value ? 'visible' : 'none'
  if (map.getLayer('sp-contours-line')) map.setLayoutProperty('sp-contours-line', 'visibility', vis)
  if (map.getLayer('sp-contour-labels')) map.setLayoutProperty('sp-contour-labels', 'visibility', vis)
}

const loadClimateData = async () => {
  if (climateData.value) return
  const res = await fetch('/data/spain-climate.json')
  if (!res.ok) throw new Error('無法載入西班牙氣候資料')
  const json = await res.json()
  climateData.value      = json.aocs
  climateStats.value     = json.global
  climateStatsSun.value  = json.globalSun  || null
  climateStatsRain.value = json.globalRain || null
  climateYears.value     = json.meta.years
  climateYearAvg.value   = json.meta.yearAvg
  climateYearSun.value   = json.meta.yearSunAvg  || []
  climateYearRain.value  = json.meta.yearRainAvg || []
}

const valueToClimateColor = (val, indicator) => {
  let stats, stops
  if (indicator === 'sun') {
    stats = climateStatsSun.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [
      [min,       [120,  81, 169]],
      [mean - 30, [145, 191, 219]],
      [mean,      [255, 255, 191]],
      [mean + 30, [254, 224,  72]],
      [max,       [253, 141,  60]],
    ]
  } else if (indicator === 'rain') {
    stats = climateStatsRain.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [
      [min,       [253, 174,  97]],
      [mean - 20, [255, 255, 191]],
      [mean,      [171, 217, 233]],
      [mean + 20, [ 74, 144, 226]],
      [max,       [ 44,  62, 160]],
    ]
  } else {
    stats = climateStats.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [
      [min,       [ 69, 117, 180]],
      [mean - 2,  [145, 191, 219]],
      [mean,      [255, 255, 191]],
      [mean + 2,  [252, 141,  89]],
      [max,       [215,  48,  39]],
    ]
  }
  const { min, max } = stats
  const t = Math.max(min, Math.min(max, val))
  for (let i = 0; i < stops.length - 1; i++) {
    const [t0, c0] = stops[i]
    const [t1, c1] = stops[i + 1]
    if (t <= t1) {
      const f = (t - t0) / (t1 - t0)
      const r = Math.round(c0[0] + f * (c1[0] - c0[0]))
      const g = Math.round(c0[1] + f * (c1[1] - c0[1]))
      const b = Math.round(c0[2] + f * (c1[2] - c0[2]))
      return `rgb(${r},${g},${b})`
    }
  }
  const last = stops[stops.length - 1][1]
  return `rgb(${last.join(',')})`
}

const applyClimateColor = (year) => {
  if (!map || !climateData.value) return
  if (!map.getLayer('wine-regions-fill')) return
  const cfg = spCurrentIndicatorConfig.value
  const idx = climateYears.value.indexOf(year)
  if (idx < 0) return
  const stats = spCurrentGlobalStats.value
  if (!stats) return

  // Build a match expression to color each region individually
  const matchExpr = ['match', ['get', 'ZON_DS_NOM']]
  for (const [zonName, d] of Object.entries(climateData.value)) {
    const arr = d[cfg.dataKey]
    if (arr?.[idx] != null) {
      matchExpr.push(zonName)
      matchExpr.push(valueToClimateColor(arr[idx], cfg.id))
    }
  }
  // Default: global average color
  const globalAvg = spCurrentYearAvgArr.value[idx] ?? stats.mean
  matchExpr.push(valueToClimateColor(globalAvg, cfg.id))

  map.setPaintProperty('wine-regions-fill', 'fill-color', matchExpr)
  map.setPaintProperty('wine-regions-fill', 'fill-opacity', 0.80)
}

const restoreRegionColors = () => {
  if (!map || !map.getLayer('wine-regions-fill')) return
  map.setPaintProperty('wine-regions-fill', 'fill-color', [
    'match', ['get', 'TPR_DS_DES'],
    'Denominación de Origen Calificada', '#f1948a',
    'Denominación de Origen Protegida',  '#f0b27a',
    'Vino de Calidad',  '#85c1e9',
    'Vino de Pago',     '#c39bd3',
    '#82e0aa',
  ])
  map.setPaintProperty('wine-regions-fill', 'fill-opacity', 0.10)
}

const setClimateIndicator = (id) => {
  climateIndicator.value = id
  applyClimateColor(climateYear.value)
}

const onClimateYearChange = () => { applyClimateColor(climateYear.value) }

const toggleClimate = async () => {
  if (!map) return
  if (!climateEnabled.value) {
    isLoading.value = true
    try {
      await loadClimateData()
      climateEnabled.value = true
      applyClimateColor(climateYear.value)
    } catch (err) {
      mapError.value = `氣候資料載入失敗: ${err.message}`
    } finally {
      isLoading.value = false
    }
  } else {
    climateEnabled.value = false
    restoreRegionColors()
  }
}

// ── Type filter helpers ──────────────────────────────────────────
function buildTypeFilter() {
  const val = typeFilter.value
  if (val === 'all') return baseFilter
  const typeExpr = ['==', ['get', 'TPR_DS_DES'], CLS_TO_TPR[val]]
  return baseFilter ? ['all', baseFilter, typeExpr] : typeExpr
}

function applyTypeFilter() {
  if (!map || !map.getLayer('wine-regions-fill')) return
  const f = buildTypeFilter()
  map.setFilter('wine-regions-fill', f)
  map.setFilter('wine-regions-line', f)
}

watch(typeFilter, () => {
  if (!mapReady.value) return
  // 切換分類時清除已選取的產區
  if (selectedRegionId !== null) {
    selectedRegionId = null
    activeInfo.value = null
  }
  applyTypeFilter()
})

async function loadRegionOutline() {
  const filterAuto = props.region.filterAutonomiaId
  if (!filterAuto) return
  try {
    const res = await fetch(`/spain/geojson/${filterAuto}.geojson`)
    if (!res.ok) return
    regionOutlineGeoJSON = await res.json()
  } catch (e) {
    console.warn('[SpainMap] loadRegionOutline failed:', e)
  }
}

// ── IGME 西班牙地質圖 ──────────────────────────────────────────────
const IGME_LITO_MAP = [
  { match: ['caliza', 'calizas', 'calcarenita', 'dolomía', 'dolomías', 'dolomita'],
    zh: '石灰岩/白雲岩', icon: '🪨', cat: '碳酸鹽岩',
    wine: '石灰岩賦予葡萄酒天然酸度與礦物張力，是里奧哈、卡斯提亞的核心底質。' },
  { match: ['marga', 'margas', 'margosa'],
    zh: '泥灰岩', icon: '🟤', cat: '泥灰岩質',
    wine: '泥灰岩兼具石灰岩與黏土特性，保水性適中，杜埃羅河岸的丹魄在此表現出色。' },
  { match: ['granito', 'granitos', 'granodiorita', 'granodioritas'],
    zh: '花崗岩', icon: '🗿', cat: '深成岩',
    wine: '花崗岩排水良好、礦物豐富，賦予葡萄酒礦石感與結構感，加利西亞阿爾巴利諾的理想底質。' },
  { match: ['gneis', 'gneises', 'migmatita'],
    zh: '片麻岩', icon: '🪶', cat: '變質岩',
    wine: '片麻岩礦物組成多樣，賦予葡萄酒精緻礦物感，加利西亞山區常見。' },
  { match: ['pizarra', 'pizarras', 'esquistos', 'esquisto', 'filita', 'filitas'],
    zh: '板岩/片岩', icon: '🪶', cat: '變質岩',
    wine: '板岩吸熱保溫，賦予葡萄酒礦石感，下海灣地產（Bierzo）的年輕板岩是門西亞的優質底質。' },
  { match: ['cuarcita', 'cuarcitas', 'cuarzo'],
    zh: '石英岩', icon: '🔷', cat: '砂質岩',
    wine: '石英岩極度貧瘠，迫使葡萄根深入，釀出礦物張力極高的葡萄酒。' },
  { match: ['arenisca', 'areniscas'],
    zh: '砂岩', icon: '🏜️', cat: '砂岩',
    wine: '砂岩排水快速，賦予葡萄酒輕盈感，納瓦拉、索蒙塔諾的常見底質。' },
  { match: ['arcilla', 'arcillas', 'arcilloso'],
    zh: '黏土', icon: '🟫', cat: '黏土質',
    wine: '黏土保水性強，有助乾燥年份維持水分，適合丹魄等品種。' },
  { match: ['lutita', 'lutitas'],
    zh: '泥板岩', icon: '🟫', cat: '細粒沉積岩',
    wine: '泥板岩細粒緻密，多見於海相沉積地層，保水性佳。' },
  { match: ['conglomerado', 'conglomerados', 'brecha', 'brechas'],
    zh: '礫岩/角礫岩', icon: '⚪', cat: '碎屑岩',
    wine: '礫岩排水迅速，白天吸熱夜間散熱，有助葡萄均勻成熟。' },
  { match: ['basalto', 'basaltos', 'basaltico', 'volcánico', 'volcanico', 'toba', 'tobas', 'traquita'],
    zh: '玄武岩/火山岩', icon: '🌋', cat: '火山岩',
    wine: '火山岩礦物質豐富，賦予葡萄酒獨特的礦石與煙燻感，加那利群島的核心底質。' },
  { match: ['aluvial', 'aluviales', 'aluvión', 'terraza', 'terrazas'],
    zh: '沖積層', icon: '💧', cat: '沖積物',
    wine: '河流沖積層礦物多樣，杜埃羅河谷底部常見，土質肥沃。' },
  { match: ['yeso', 'yesos', 'evaporita', 'evaporitas', 'sal', 'sales'],
    zh: '蒸發岩/石膏', icon: '🟡', cat: '蒸發岩',
    wine: '蒸發岩地層土壤礦物含量高，乾旱地區常見，卡斯提亞-拉曼查內陸產區可見。' },
  { match: ['limo', 'limos', 'loes', 'loess'],
    zh: '黃土/粉砂', icon: '🟡', cat: '細粒沉積',
    wine: '黃土保水性佳，適合多種品種生長。' },
  { match: ['arena', 'arenas'],
    zh: '砂土', icon: '🏜️', cat: '砂質',
    wine: '砂土排水快，賦予葡萄酒輕盈礦物感。' },
]

const IGME_EDAD_MAP = [
  ['holoceno', '全新世（第四紀）'],
  ['pleistoceno', '更新世（第四紀）'],
  ['cuaternario', '第四紀'],
  ['plioceno', '上新世（新近紀）'],
  ['mioceno', '中新世（新近紀）'],
  ['oligoceno', '漸新世（古近紀）'],
  ['eoceno', '始新世（古近紀）'],
  ['paleoceno', '古新世（古近紀）'],
  ['neógeno', '新近紀'],
  ['paleógeno', '古近紀'],
  ['terciario', '第三紀'],
  ['cretácico', '白堊紀'],
  ['cretáceo', '白堊紀'],
  ['jurásico', '侏羅紀'],
  ['triásico', '三疊紀'],
  ['pérmico', '二疊紀'],
  ['carbonífero', '石炭紀'],
  ['devónico', '泥盆紀'],
  ['silúrico', '志留紀'],
  ['ordovícico', '奧陶紀'],
  ['cámbrico', '寒武紀'],
  ['precámbrico', '前寒武紀'],
]

function translateIGME(lito) {
  const t = (lito || '').toLowerCase()
  for (const entry of IGME_LITO_MAP) {
    if (entry.match.some(k => t.includes(k))) return entry
  }
  return { zh: lito || '地質岩層', icon: '🗺️', cat: '', wine: '' }
}

// COEDAD 是數值型（年 × 1000，e.g. 5020000000 ≈ 5.02Ma × 1000 = 5,020,000,000）
function coedadToAge(val) {
  const n = Number(val)
  if (isNaN(n) || n <= 0) return ''
  // 先用精確邊界對照
  const approxMa = n / 1000000
  if (approxMa >= 541) return '前寒武紀'
  if (approxMa >= 485) return '寒武紀'
  if (approxMa >= 444) return '奧陶紀'
  if (approxMa >= 419) return '志留紀'
  if (approxMa >= 359) return '泥盆紀'
  if (approxMa >= 299) return '石炭紀'
  if (approxMa >= 252) return '二疊紀'
  if (approxMa >= 201) return '三疊紀'
  if (approxMa >= 145) return '侏羅紀'
  if (approxMa >= 66) return '白堊紀'
  if (approxMa >= 23) return '古近紀'
  if (approxMa >= 2.6) return '新近紀'
  return '第四紀'
}

function translateEdad(edad) {
  // 若是數值（COEDAD 欄位），用數值對照表
  if (typeof edad === 'number' || (typeof edad === 'string' && /^\d+$/.test(edad.trim()))) {
    return coedadToAge(edad)
  }
  const t = (edad || '').toLowerCase()
  for (const [es, zh] of IGME_EDAD_MAP) {
    if (t.includes(es)) return zh
  }
  return edad
}

// WGS84 → UTM30N (EPSG:23030) 坐標轉換
function toUTM30N(lng, lat) {
  const k0 = 0.9996
  const a = 6378137.0
  const e2 = 0.00669437999014
  const lng0 = -3 * Math.PI / 180  // UTM zone 30N 中央子午線 -3°
  const phi = lat * Math.PI / 180
  const lambda = lng * Math.PI / 180
  const e4 = e2 * e2
  const e6 = e4 * e2
  const N = a / Math.sqrt(1 - e2 * Math.sin(phi) ** 2)
  const T = Math.tan(phi) ** 2
  const C = e2 / (1 - e2) * Math.cos(phi) ** 2
  const A = Math.cos(phi) * (lambda - lng0)
  const M = a * (
    (1 - e2/4 - 3*e4/64 - 5*e6/256) * phi
    - (3*e2/8 + 3*e4/32 + 45*e6/1024) * Math.sin(2*phi)
    + (15*e4/256 + 45*e6/1024) * Math.sin(4*phi)
    - (35*e6/3072) * Math.sin(6*phi)
  )
  const easting = k0 * N * (A + (1-T+C)*A**3/6 + (5-18*T+T**2+72*C-58*(e2/(1-e2)))*A**5/120) + 500000
  const northing = k0 * (M + N*Math.tan(phi)*(
    A**2/2 + (5-T+9*C+4*C**2)*A**4/24
    + (61-58*T+T**2+600*C-330*(e2/(1-e2)))*A**6/720
  ))
  return { x: Math.round(easting), y: Math.round(northing) }
}

function renderSpainGeologyPopupHTML(attrs) {
  const lito = attrs.DLO || attrs.LITOLOGIA || attrs.litologia || ''
  const edad = attrs.COEDAD

  const SPAIN_GEO_DEFAULT = {
    zh: '混合沉積土壤', icon: '🌱',
    wine: '此處為混合型沉積土壤，由風化基岩、河流沖積與細粒沉積物交織而成，排水與保水性介於砂質與黏質之間，能支持多元葡萄品種生長，並賦予葡萄酒柔順的果香與適度的礦物層次。'
  }

  let info = translateIGME(lito)
  if (!info?.wine) info = { ...SPAIN_GEO_DEFAULT, zh: info?.zh || SPAIN_GEO_DEFAULT.zh }
  const edadZh = translateEdad(edad)

  return `
    <div class="spain-geology-popup">
      <div class="geology-popup-header">🗺️ 西班牙地質</div>
      <div class="geology-popup-row"><span class="geology-popup-label">岩石類型</span><span class="geology-popup-val">${info.zh}</span></div>
      ${edadZh ? `<div class="geology-popup-row"><span class="geology-popup-label">地質年代</span><span class="geology-popup-val">${edadZh}</span></div>` : ''}
      <div class="geology-popup-wine-block">
        <div class="geology-popup-wine-title">${info.icon} ${info.zh}</div>
        <div class="geology-popup-wine-text">${info.wine}</div>
      </div>
    </div>
  `
}

async function loadSpainGeologyLayer() {
  if (!map) return
  if (map.getLayer('spain-geology-layer')) return
  if (!map.getSource('spain-geology-wms')) {
    // IGME WMS 不支援 EPSG:3857，改用 ArcGIS REST export endpoint（支援 bboxSR=3857）
    // 計算產區 bounds 以限制圖磚載入
    let wmsBounds
    if (regionOutlineGeoJSON) {
      try {
        const bb = turf.bbox(regionOutlineGeoJSON)
        const pad = 0.3
        wmsBounds = [bb[0] - pad, bb[1] - pad, bb[2] + pad, bb[3] + pad]
      } catch (_) {}
    }
    map.addSource('spain-geology-wms', {
      type: 'raster',
      tiles: [
        '/igme/gis/rest/services/Cartografia_Geologica/IGME_Geologico_200/MapServer/export' +
        '?bbox={bbox-epsg-3857}&bboxSR=3857&size=256,256&imageSR=3857' +
        '&format=png32&transparent=true&f=image&layers=show:0'
      ],
      tileSize: 256,
      ...(wmsBounds ? { bounds: wmsBounds } : {}),
      attribution: '© IGME Mapa Geológico 1:200,000 (CC-BY 4.0)'
    })
  }
  // 將地質圖插入 provinces-fill 之下，使 DO 填色圖層顯示於地質之上（視覺更清晰）
  const beforeLayerId = map.getLayer('provinces-fill') ? 'provinces-fill' : undefined
  map.addLayer({
    id: 'spain-geology-layer',
    type: 'raster',
    source: 'spain-geology-wms',
    paint: { 'raster-opacity': soilOpacity.value }
  }, beforeLayerId)
  // 建立自治區邊界裁切遮罩（僅顯示選取自治區內的地質圖；overlay 置於所有圖層之上）
  if (regionOutlineGeoJSON) {
    try {
      const maskData = turf.mask(regionOutlineGeoJSON)
      if (map.getSource('spain-geo-clip-src')) {
        map.getSource('spain-geo-clip-src').setData(maskData)
        if (map.getLayer('spain-geo-clip-overlay')) map.setLayoutProperty('spain-geo-clip-overlay', 'visibility', 'visible')
      } else {
        map.addSource('spain-geo-clip-src', { type: 'geojson', data: maskData })
        map.addLayer({
          id: 'spain-geo-clip-overlay',
          type: 'fill',
          source: 'spain-geo-clip-src',
          paint: { 'fill-color': '#060a10', 'fill-opacity': 0.72 }
        })
      }
    } catch (e) { console.warn('[SpainMap] clip mask failed:', e) }
  }
  if (!geologyClickRegistered) {
    map.on('click', async (e) => {
      if (!soilEnabled.value) return
      const { lng, lat } = e.lngLat
      // 點擊只限選取產區範圍內
      if (regionOutlineGeoJSON) {
        try {
          const pt = turf.point([lng, lat])
          if (!turf.booleanPointInPolygon(pt, regionOutlineGeoJSON)) return
        } catch (_) { return }
      }
      let attrs = {}
      try {
        const { x, y } = toUTM30N(lng, lat)
        const margin = 2000
        const url =
          '/igme/gis/rest/services/Cartografia_Geologica/IGME_Geologico_200/MapServer/9/query' +
          `?geometry=${x-margin},${y-margin},${x+margin},${y+margin}` +
          '&geometryType=esriGeometryEnvelope' +
          '&spatialRel=esriSpatialRelIntersects&outFields=DLO,COEDAD,TRAMA_C&returnGeometry=false&f=json'
        const res = await fetch(url)
        if (res.ok) {
          const data = await res.json()
          const features = data.features || []
          if (features.length) attrs = features[0].attributes || {}
        }
      } catch (err) {
        console.warn('[SpainMap] geology identify error:', err)
      }
      const html = renderSpainGeologyPopupHTML(attrs)
      if (geologyPopup) geologyPopup.remove()
      geologyPopup = new mapboxgl.Popup({ className: 'geology-popup-wrap', maxWidth: '340px', closeButton: true })
        .setLngLat([lng, lat])
        .setHTML(html)
        .addTo(map)
    })
    geologyClickRegistered = true
  }
}

async function toggleSoil() {
  if (!map) return
  if (!soilEnabled.value) {
    soilEnabled.value = true
    map.getCanvas().style.cursor = 'crosshair'
    await loadSpainGeologyLayer()
  } else {
    soilEnabled.value = false
    map.getCanvas().style.cursor = ''
    if (geologyPopup) { geologyPopup.remove(); geologyPopup = null }
    if (map.getLayer('spain-geo-clip-overlay')) map.removeLayer('spain-geo-clip-overlay')
    if (map.getSource('spain-geo-clip-src')) map.removeSource('spain-geo-clip-src')
    if (map.getLayer('spain-geology-layer')) map.removeLayer('spain-geology-layer')
    if (map.getSource('spain-geology-wms')) map.removeSource('spain-geology-wms')
  }
}

watch(soilOpacity, (val) => {
  if (map && map.getLayer('spain-geology-layer')) {
    map.setPaintProperty('spain-geology-layer', 'raster-opacity', val)
  }
})

// ── Map init ──────────────────────────────────────────────────────
onMounted(async () => {
  try {
    await nextTick()          // 確保容器 DOM 尺寸就緒
    await loadAppellations()
    await initMap()
  } catch (e) {
    mapError.value = '地圖載入失敗：' + e.message
    isLoading.value = false
  }
})

onUnmounted(() => {
  if (map) { map.remove(); map = null }
})

function initMap() {
  return new Promise((resolve, reject) => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

    const center = props.region.center || [-3.5, 40.0]
    const zoom   = props.region.zoom   || 5.5

    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center,
      zoom,
      maxZoom: 14,
      minZoom: 4,
    })

    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    map.on('load', async () => {
      map.resize()  // 確保 canvas 符合容器實際尺寸
      try {
        await addLayers()
      } catch (e) {
        console.error('[SpainMap] addLayers error:', e)
        mapError.value = '圖層載入失敗：' + (e?.message || String(e))
      }
      isLoading.value = false
      mapReady.value = true
      // 預載自治區邊界供地質裁切使用
      await loadRegionOutline()
      // 若從搜尋傳入 targetZonName，自動聚焦該產區
      if (props.region.targetZonName) {
        const target = [...allRegionsMap.values()].find(
          r => r.zonDsNom === props.region.targetZonName
        )
        if (target) selectFromList(target)
      }
      resolve()
    })

    map.on('error', (e) => {
      // 只記錄，不中斷地圖初始化（tile 載入失敗屬非致命錯誤）
      console.warn('[SpainMap] map error:', e.error?.message || e)
    })
  })
}

async function addLayers() {
  // 依 filterAutonomiaId 決定要載入哪個 GeoJSON（分拆小檔 or 全量）
  const filterAuto  = props.region.filterAutonomiaId
  const wineGeoUrl     = filterAuto
    ? `/spain/geojson/${filterAuto}.geojson`
    : '/spain/spain-wine-regions.geojson'
  const provinceGeoUrl = filterAuto
    ? `/spain/provinces/${filterAuto}.geojson`
    : '/spain/spain-provinces.geojson'

  // Load data in parallel — province file may not exist for all autonomia IDs
  const EMPTY_FC = { type: 'FeatureCollection', features: [] }
  const [provinceResult, wineRes] = await Promise.all([
    fetch(provinceGeoUrl).then(r => r.ok ? r.json() : EMPTY_FC).catch(() => EMPTY_FC),
    fetch(wineGeoUrl),
  ])
  const provinceGeo = provinceResult
  const wineGeo = await wineRes.json()

  // 用 appellations 查出每個 feature 的 autonomiaId，寫回 GeoJSON properties 
  // （這樣 Mapbox filter 才能直接用 ['get', 'AUTONOMIA_ID']）
  allRegionsMap.clear()
  featureBboxMap.clear()
  wineGeo.features.forEach((f, i) => {
    const appData = lookupAppellation(f.properties.ZON_DS_NOM)
    f.properties.AUTONOMIA_ID = appData?.autonomiaId || ''
    const n = normalizeFeature(f, i)
    n.appData = appData
    allRegionsMap.set(i, n)
    // 預存 bbox 供縮放使用
    if (f.geometry) {
      const coords = f.geometry.type === 'Polygon'
        ? f.geometry.coordinates.flat(1)
        : f.geometry.coordinates.flat(2)
      const lngs = coords.map(c => c[0]).filter(v => isFinite(v))
      const lats = coords.map(c => c[1]).filter(v => isFinite(v))
      if (lngs.length) {
        featureBboxMap.set(i, [
          [Math.min(...lngs), Math.min(...lats)],
          [Math.max(...lngs), Math.max(...lats)],
        ])
      }
    }
  })

  // 依當前 region 的 filterAutonomiaId 設定抽屜清單
  if (filterAuto) {
    allRegions.value = [...allRegionsMap.values()].filter(r =>
      r.appData?.autonomiaId === filterAuto
    )
  } else {
    allRegions.value = [...allRegionsMap.values()]
  }

  // ── Province layer（衛星圖上只顯示白色外框 + 點擊高亮）────────
  map.addSource('provinces', {
    type: 'geojson',
    data: provinceGeo,
    generateId: true,
  })

  // 透明填充層：供點擊偵測 + feature-state 高亮
  map.addLayer({
    id: 'provinces-fill',
    type: 'fill',
    source: 'provinces',
    paint: {
      'fill-color': '#f5b942',
      'fill-opacity': [
        'case',
        ['boolean', ['feature-state', 'selected'], false], 0.15,
        ['case', ['boolean', ['feature-state', 'hover'], false], 0.10, 0],
      ],
    },
  })

  map.addLayer({
    id: 'provinces-line',
    type: 'line',
    source: 'provinces',
    paint: {
      'line-color': 'rgba(255,255,255,0.7)',
      'line-width': 1.2,
      'line-dasharray': [3, 2],
    },
  })

  // ── Wine regions layer ──────────────────────────────────────
  map.addSource('wine-regions', {
    type: 'geojson',
    data: wineGeo,
    generateId: true,
  })

  // Fill layer — color by TPR_DS_DES
  map.addLayer({
    id: 'wine-regions-fill',
    type: 'fill',
    source: 'wine-regions',
    paint: {
      'fill-color': [
        'match', ['get', 'TPR_DS_DES'],
        'Denominación de Origen Calificada', '#f1948a',
        'Denominación de Origen Protegida',  '#f0b27a',
        'Vino de Calidad',  '#85c1e9',
        'Vino de Pago',     '#c39bd3',
        '#82e0aa',
      ],
      'fill-opacity': 0.10,
    },
  })

  // Outline layer（移除重複的 line-color key）
  map.addLayer({
    id: 'wine-regions-line',
    type: 'line',
    source: 'wine-regions',
    paint: {
      'line-color': [
        'match', ['get', 'TPR_DS_DES'],
        'Denominación de Origen Calificada', '#ff6b6b',
        'Denominación de Origen Protegida',  '#ffa94d',
        'Vino de Calidad',  '#74c0fc',
        'Vino de Pago',     '#da77f2',
        '#69db7c',
      ],
      'line-width': 1.6,
    },
  })

  // ── 指定自治區：套用圖層 filter ＋ fitBounds ─────────────────
  if (filterAuto) {
    const filterExpr = ['==', ['get', 'AUTONOMIA_ID'], filterAuto]
    baseFilter = filterExpr  // 記住初始 filter 供重置恢復
    map.setFilter('wine-regions-fill', filterExpr)
    map.setFilter('wine-regions-line', filterExpr)

    // 計算所有 feature 的實際 bbox（per-auto 檔案已只含該自治區資料）
    // 備用：若 AUTONOMIA_ID 符合的少，仍用全部 features
    const byAutoId = wineGeo.features.filter(f => f.properties.AUTONOMIA_ID === filterAuto)
    const filtered = byAutoId.length > 0 ? byAutoId : wineGeo.features
    if (filtered.length > 0) {
      const allCoords = filtered.flatMap(f => {
        if (!f.geometry) return []
        if (f.geometry.type === 'Polygon')      return f.geometry.coordinates.flat(1)
        if (f.geometry.type === 'MultiPolygon') return f.geometry.coordinates.flat(2)
        return []
      })
      const lngs = allCoords.map(c => c[0]).filter(v => typeof v === 'number' && isFinite(v))
      const lats = allCoords.map(c => c[1]).filter(v => typeof v === 'number' && isFinite(v))
      if (lngs.length > 0) {
        const minLng = lngs.reduce((a, b) => a < b ? a : b)
        const maxLng = lngs.reduce((a, b) => a > b ? a : b)
        const minLat = lats.reduce((a, b) => a < b ? a : b)
        const maxLat = lats.reduce((a, b) => a > b ? a : b)
        initialBounds = [[minLng, minLat], [maxLng, maxLat]]
        map.fitBounds(
          initialBounds,
          { padding: 80, maxZoom: 11, duration: 800 }
        )
      }
    }
  }

  // ── Hover cursor (no highlight) ─────────────────────────────
  map.on('mousemove', 'wine-regions-fill', () => {
    map.getCanvas().style.cursor = 'pointer'
  })

  map.on('mouseleave', 'wine-regions-fill', () => {
    map.getCanvas().style.cursor = ''
  })

  // ── Province hover ────────────────────────────────────────────
  map.on('mousemove', 'provinces-fill', (e) => {
    if (e.features.length > 0) {
      if (hoveredProvinceId !== null) {
        map.setFeatureState({ source: 'provinces', id: hoveredProvinceId }, { hover: false })
      }
      hoveredProvinceId = e.features[0].id
      map.setFeatureState({ source: 'provinces', id: hoveredProvinceId }, { hover: true })
    }
  })

  map.on('mouseleave', 'provinces-fill', () => {
    if (hoveredProvinceId !== null) {
      map.setFeatureState({ source: 'provinces', id: hoveredProvinceId }, { hover: false })
    }
    hoveredProvinceId = null
  })

  // ── Click interaction ───────────────────────────────────────
  map.on('click', 'wine-regions-fill', (e) => {
    // 土壤模式下點擊交由地質查詢處理，不開啟產區資訊
    if (soilEnabled.value) return
    const feat = e.features[0]
    const info = allRegionsMap.get(feat.id)
    if (info) {
      activeInfo.value = info
      infoCollapsed.value = false
      selectedRegionId = feat.id
      // Fill：只顯示選中產區（其他產區顏色消失）
      map.setFilter('wine-regions-fill', ['==', ['id'], feat.id])
      // Outline：保留所有產區輪廓（地理脈絡仍可見）
      map.setFilter('wine-regions-line', baseFilter || null)
      // 縮放到選中產區的合適大小
      const bbox = featureBboxMap.get(feat.id)
      if (bbox) map.fitBounds(bbox, { padding: 80, maxZoom: 12, duration: 800 })
    }
    e.originalEvent._spainWineClicked = true
  })

  // 點擊空白處清除選取（土壤模式下不清除）
  map.on('click', (e) => {
    if (soilEnabled.value) return
    if (e.originalEvent._spainWineClicked) return
    activeInfo.value = null
  })
}

// ── 播放發音 ──────────────────────────────────────────────────────
const isPlayingAudio = ref(false)
let currentAudio = null
function playPronunciation() {
  if (!activeInfo.value?.zonDsNom) return
  if (currentAudio) { currentAudio.pause(); currentAudio = null }
  const audioPath = `/spain/sounds/${encodeURIComponent(activeInfo.value.zonDsNom)}.mp3`
  currentAudio = new Audio(audioPath)
  isPlayingAudio.value = true
  currentAudio.play().catch(() => { isPlayingAudio.value = false })
  currentAudio.onended = () => { isPlayingAudio.value = false; currentAudio = null }
}

// ── Actions ───────────────────────────────────────────────────────
function resetView() {
  if (!map) return
  // 恢復所有產區顯示（還原為初始 filter 或清除 filter）
  if (selectedRegionId !== null) {
    selectedRegionId = null
    applyTypeFilter()  // 恢復至含 typeFilter 的篩選（而非直接清除）
  }
  activeInfo.value = null
  // 回到起始畫面
  if (initialBounds) {
    map.fitBounds(initialBounds, { padding: 80, maxZoom: 11, duration: 800 })
  } else {
    map.flyTo({ center: [-3.5, 40.0], zoom: 5.5, duration: 800 })
  }
}

function toggleProvinces() {
  showProvinces.value = !showProvinces.value
  if (!map) return
  const vis = showProvinces.value ? 'visible' : 'none'
  map.setLayoutProperty('provinces-line', 'visibility', vis)
  map.setLayoutProperty('provinces-fill', 'visibility', vis)
}

function toggle3D() {
  is3D.value = !is3D.value
  if (!map) return
  if (is3D.value) {
    initContourLayers()  // 確保 mapbox-dem source 已就緒
    map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 })
    map.setPitch(45)
  } else {
    map.setTerrain(null)
    map.setPitch(0)
  }
}

function selectFromList(item) {
  activeInfo.value = item
  drawerOpen.value = false
  if (!map) return

  selectedRegionId = item.id
  // Fill：只顯示選中產區（其他產區顏色消失）
  map.setFilter('wine-regions-fill', ['==', ['id'], item.id])
  // Outline：保留所有產區輪廓
  map.setFilter('wine-regions-line', baseFilter || null)
  // 縮放到選中產區
  const bbox = featureBboxMap.get(item.id)
  if (bbox) map.fitBounds(bbox, { padding: 80, maxZoom: 12, duration: 800 })
}

function toggleInfo() {
  if (!activeInfo.value) return
  infoCollapsed.value = !infoCollapsed.value
}

// ── 統一 adapters ───────────────────────────────────────────────
const unifiedInfo = computed(() => {
  const a = activeInfo.value
  if (!a) return null
  const meta = []
  if (a.appData?.autonomia) meta.push({ label: '自治區', value: a.appData.autonomia })
  return {
    name: a.calDsNom,
    badges: a.typeLabel ? [{ label: a.typeLabel, type: a.typeLabel.toLowerCase().replace(/[^a-z]/g, '') }] : [],
    meta,
    styles: a.appData?.styles || [],
    grapes: a.appData?.grapes || [],
    description: a.appData?.description || '',
  }
})

const filteredListUnified = computed(() =>
  filteredList.value.map(a => ({
    id: a.id,
    name: a.calDsNom,
    type: a.typeLabel,
    styles: a.appData?.styles || []
  }))
)

function selectById(item) {
  const found = allRegions.value.find(a => a.id === item.id)
  if (found) selectFromList(found)
}

function handleMobileAction(action) {
  if (action === 'aoc') { drawerOpen.value = !drawerOpen.value; showLayerPanel.value = false }
  else if (action === 'layer') { showLayerPanel.value = !showLayerPanel.value; drawerOpen.value = false }
  else if (action === '3d') { toggle3D() }
  else if (action === 'info') { toggleInfo() }
}
</script>

<!-- IGME popup 全域樣式（mapboxgl popup 容器不支援 scoped）— NZ 風格 -->
<style>
.geology-popup-wrap .mapboxgl-popup-content {
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.28);
  min-width: 260px;
  background: linear-gradient(180deg, #1e3a2a 0%, #16291e 100%);
}
.geology-popup-wrap .mapboxgl-popup-close-button {
  color: #d4f5d4;
  font-size: 18px;
  padding: 4px 8px;
  right: 2px;
  top: 2px;
  background: none;
  border: none;
}
.geology-popup-wrap .mapboxgl-popup-close-button:hover {
  color: #fff;
  background: rgba(255,255,255,0.1);
  border-radius: 4px;
}
</style>

<style scoped>
.spain-map-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #eee;
}

.map {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* ── Header ───────────────────────────────────────────────── */
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

.map-hdr-btn {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  border: none;
  background: rgba(192,57,43,0.85);
  color: #fff;
  cursor: pointer;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  transition: all 0.15s;
  pointer-events: auto;
}
.map-hdr-btn:hover { background: rgba(192,57,43,1); }
.map-hdr-btn.ghost {
  background: rgba(255,255,255,0.82);
  border: 1.5px solid rgba(192,57,43,0.5);
  color: #7b241c;
}
.map-hdr-btn.ghost:hover { background: rgba(255,255,255,0.95); }

.map-header h1 {
  margin: 0;
  flex: 1;
  text-align: center;
  font-size: 1.1rem;
  color: #5b1d1d;
  text-shadow: 0 1px 4px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.9);
  pointer-events: none;
  padding-top: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ── Info bar ─────────────────────────────────────────────── */
.map-info-bar {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: min(90vw, 560px);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  z-index: 1001;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  background: linear-gradient(to bottom, white, #fafafa);
  display: flex;
  flex-direction: column;
  max-height: 60vh;
}

.info-header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: linear-gradient(135deg, #c0392b 0%, #7b241c 100%);
  color: white;
}

.info-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
}

.info-type-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 2px solid rgba(255,255,255,0.6);
}

.info-name {
  font-size: 0.95rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
.btn-collapse { background: linear-gradient(145deg, #222, #0f0f0f); }
.btn-audio    { background: linear-gradient(145deg, #764ba2, #667eea); }
.btn-audio:disabled { opacity: 0.6; cursor: not-allowed; }
.btn-reset    { background: linear-gradient(145deg, #f25f57, #dd3f37); }

.info-content {
  padding: 0.9rem 1rem;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-height: 35vh;
  overflow-y: auto;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.info-type-badge {
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
}
.info-type-badge.doca { background: #e74c3c; color: #fff; }
.info-type-badge.do   { background: #27ae60; color: #fff; }
.info-type-badge.dop  { background: #e67e22; color: #fff; }
.info-type-badge.vc   { background: #3498db; color: #fff; }
.info-type-badge.vp   { background: #9b59b6; color: #fff; }

.info-autonomia {
  font-size: 0.82rem;
  color: #666;
}

.info-styles {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.style-tag {
  padding: 0.18rem 0.55rem;
  border-radius: 12px;
  font-size: 0.78rem;
  font-weight: 600;
}

.info-section {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.info-section-label {
  font-size: 0.75rem;
  color: #888;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.grape-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.grape-chip {
  padding: 0.18rem 0.55rem;
  background: #f2f4f8;
  border-radius: 12px;
  font-size: 0.78rem;
  color: #444;
}

/* ── 酒款類型（Italy 尌款） ── */
.sp-wine-types-section { margin: 12px -16px 0; padding: 14px 16px; background: #fafafa; border-left: 3px solid #8B0000; }
.sp-wine-types-title { font-weight: 700; font-size: 1rem; color: #8B0000; margin-bottom: 10px; }
.sp-wine-types-list { display: flex; flex-wrap: wrap; gap: 8px; }
.sp-wine-type-tag { padding: 6px 12px; border-radius: 8px; font-size: 0.85rem; font-weight: 600; }

/* ── 葡萄品種（Italy 尌款） ── */
.sp-grape-section { margin: 12px -16px 0; padding: 14px 16px; background: #fafafa; border-left: 3px solid #8B0000; }
.sp-grape-title { font-weight: 700; font-size: 1rem; color: #8B0000; margin-bottom: 12px; }
.sp-grape-badges { display: flex; flex-wrap: wrap; gap: 8px; }
.sp-grape-badge { padding: 5px 12px; border-radius: 14px; font-size: 0.84rem; font-weight: 700; background: #f0f7f0; color: #2d7a4a; border: 1.5px solid rgba(45,122,74,0.3); }
.sp-grape-badge.red   { background: #fdf0f2; color: #9b2335; border-color: rgba(155,35,53,0.3); }
.sp-grape-badge.white { background: #fdfaf0; color: #7a6800; border-color: rgba(122,104,0,0.3); }

.info-description {
  font-size: 0.84rem;
  color: #555;
  line-height: 1.55;
}

.info-no-data {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.info-zon { font-size: 0.9rem; font-weight: 600; color: #333; }
.info-type-text { font-size: 0.82rem; color: #777; }

/* collapsed */
.map-info-bar.collapsed .info-content { display: none; }

/* expand animation */
.info-expand-enter-active, .info-expand-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}
.info-expand-enter-from, .info-expand-leave-to {
  max-height: 0;
  opacity: 0;
}
.info-expand-enter-to, .info-expand-leave-from {
  max-height: 500px;
  opacity: 1;
}

/* ── Drawer ─────────────────────────────────────────────────── */
.aoc-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15,23,42,0.34);
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
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1101;
}

.aoc-handle {
  width: 40px;
  height: 4px;
  background: #ddd;
  border-radius: 2px;
  margin: 0.6rem auto 0.2rem;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1rem 0;
  font-size: 0.95rem;
  font-weight: 700;
  color: #333;
}

.drawer-close {
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: #888;
  padding: 0.2rem 0.4rem;
  border-radius: 50%;
  transition: background 0.15s;
}
.drawer-close:hover { background: #f0f0f0; color: #333; }

.drawer-search-wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.6rem 1rem;
  padding: 0.5rem 0.8rem;
  background: #f5f5f5;
  border-radius: 10px;
}

.search-icon { font-size: 0.9rem; }
.search-input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  font-size: 0.88rem;
  color: #333;
}

.filter-tabs {
  display: flex;
  gap: 0.4rem;
  padding: 0 1rem 0.5rem;
  overflow-x: auto;
}

.filter-tab {
  padding: 0.25rem 0.7rem;
  border-radius: 20px;
  border: 1.5px solid #ddd;
  background: #fff;
  color: #444;
  font-size: 0.8rem;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s;
}
.filter-tab.active {
  border-color: #c0392b;
  background: #c0392b;
  color: #fff;
  font-weight: 700;
}

.appellation-list {
  overflow-y: auto;
  flex: 1;
  padding: 0 0.5rem 1rem;
}

.app-item {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  padding: 0.6rem 0.6rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s;
}
.app-item:hover { background: #f8f8f8; }
.app-item.active { background: #fef0f0; }

.app-type-badge {
  padding: 0.15rem 0.5rem;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 0.1rem;
}
.app-type-badge.doca { background: #e74c3c; color: #fff; }
.app-type-badge.do   { background: #27ae60; color: #fff; }
.app-type-badge.dop  { background: #e67e22; color: #fff; }
.app-type-badge.vc   { background: #3498db; color: #fff; }
.app-type-badge.vp   { background: #9b59b6; color: #fff; }

.app-text { display: flex; flex-direction: column; gap: 0.1rem; }
.app-name { font-size: 0.88rem; font-weight: 600; color: #222; }
.app-styles { font-size: 0.77rem; color: #888; }
.no-results { text-align: center; padding: 2rem; color: #aaa; font-size: 0.9rem; }

/* Sheet fade */
.sheet-fade-enter-active, .sheet-fade-leave-active {
  transition: opacity 0.22s ease;
}
.sheet-fade-enter-from, .sheet-fade-leave-to { opacity: 0; }

/* ── Province indicator ───────────────────────────────────────── */
.province-indicator {
  position: fixed;
  top: calc(env(safe-area-inset-top, 0px) + 52px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(230, 126, 34, 0.92);
  color: white;
  padding: 5px 12px 5px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  pointer-events: auto;
  white-space: nowrap;
}

.province-close {
  background: rgba(255,255,255,0.28);
  border: none;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.65rem;
  color: white;
  line-height: 1;
  padding: 0;
  transition: background 0.15s;
}
.province-close:hover { background: rgba(255,255,255,0.45); }

/* ── Province chips in info card ──────────────────────────────── */
.province-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.province-chip {
  padding: 0.2rem 0.65rem;
  background: #fff3e0;
  border: 1.5px solid #e67e22;
  border-radius: 12px;
  font-size: 0.77rem;
  color: #e67e22;
  cursor: pointer;
  transition: all 0.15s;
}
.province-chip:hover,
.province-chip.active {
  background: #e67e22;
  color: #fff;
}

/* Fade-down for province indicator */
.fade-down-enter-active, .fade-down-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-down-enter-from, .fade-down-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-6px);
}
.fade-down-enter-to, .fade-down-leave-from {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* ── Legend ──────────────────────────────────────────────────── */
.map-legend {
  position: fixed;
  right: 1rem;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  z-index: 999;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(6px);
  border-radius: 12px;
  padding: 0.6rem 0.8rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
  font-size: 0.78rem;
}

.legend-title {
  font-size: 0.7rem;
  font-weight: 700;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.4rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.15rem 0;
  color: #444;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  flex-shrink: 0;
}

/* ── Bottom toolbar (Bordeaux style) ─────────────────────────── */
.mobile-map-toolbar {
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

.mobile-tool-btn {
  border-radius: 16px;
  background: linear-gradient(180deg, #faf5ef 0%, #f1e7dd 100%);
  color: #4f3422;
  min-height: 54px;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  font-size: 0.76rem;
  font-weight: 800;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
  transition: all 0.15s;
}
.mobile-tool-btn:hover { opacity: 0.85; }
.mobile-tool-btn.active {
  background: linear-gradient(180deg, #a93226 0%, #7b241c 100%);
  color: #fff;
  box-shadow: none;
}

.mobile-tool-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(107,31,31,0.08);
  font-size: 0.8rem;
  font-weight: 800;
}
.mobile-tool-btn.active .mobile-tool-icon { background: rgba(255,255,255,0.18); color: #fff; }

/* ── Loading / Error ─────────────────────────────────────────── */
.loading-overlay {
  position: absolute;
  inset: 0;
  z-index: 100;
  background: rgba(255,255,255,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-spinner {
  width: 44px;
  height: 44px;
  border: 4px solid #eee;
  border-top-color: #c0392b;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.map-error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  color: #c0392b;
  font-weight: 600;
  box-shadow: 0 4px 24px rgba(0,0,0,0.2);
  max-width: 320px;
  text-align: center;
}

/* mapbox-gl overrides */
:deep(.mapboxgl-ctrl-top-right) {
  top: 52px;
}

/* ── 圖層面板 ─────────────────────────────────────────── */
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
  color: #7b241c; text-transform: uppercase;
  padding: 0 2px 10px;
  border-bottom: 1px solid rgba(0,0,0,0.08); margin-bottom: 10px;
}
.layers-panel-close { background: none; border: none; cursor: pointer; color: #7b241c; font-size: 14px; }
.layer-group { margin-bottom: 4px; }
.layer-group-label { font-size: 0.65rem; font-weight: 700; color: #aaa; text-transform: uppercase; letter-spacing: 0.05em; padding: 0 2px 4px; }
.layer-group-buttons { display: flex; flex-direction: column; gap: 4px; }
.btn-layer {
  display: flex; align-items: center; gap: 7px; width: 100%;
  padding: 8px 10px; border: 1.5px solid transparent; border-radius: 10px;
  cursor: pointer; font-size: 0.84rem; font-weight: 600;
  background: rgba(0,0,0,0.04); color: #444;
  transition: all 0.18s; text-align: left; font-family: inherit;
}
.btn-layer:hover { background: rgba(0,0,0,0.07); }
.btn-layer.active { background: rgba(192,57,43,0.08); border-color: rgba(192,57,43,0.3); color: #c0392b; }
.btn-layer.locked { opacity: 0.65; }
.lbtn-icon { font-size: 1rem; }
.lbtn-text { flex: 1; }
.lbtn-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #ccc; flex-shrink: 0; transition: background 0.2s;
}
.lbtn-dot.on { background: #c0392b; }

/* slide-up transition */
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.25s ease; }
.slide-up-enter-from, .slide-up-leave-to { opacity: 0; transform: translateX(-50%) translateY(12px); }

/* ── 氣候熱力控制列 ─────────────────────────────────────────── */
.sp-climate-overlay {
  position: fixed;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 80px);
  left: 50%;
  transform: translateX(-50%);
  width: min(96vw, 560px);
  z-index: 1002;
  background: rgba(15, 20, 35, 0.92);
  backdrop-filter: blur(12px);
  border-radius: 14px;
  padding: 10px 14px 8px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.35);
  color: #fff;
}
.sp-cy-indicator-tabs {
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
}
.sp-cy-ind-btn {
  flex: 1;
  padding: 4px 0;
  border-radius: 8px;
  border: 1.5px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.7);
  font-size: 0.72rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
}
.sp-cy-ind-btn.active {
  background: rgba(255,255,255,0.22);
  border-color: rgba(255,255,255,0.5);
  color: #fff;
}
.sp-climate-header-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
}
.sp-cy-year-badge { display: flex; align-items: center; gap: 5px; }
.sp-cy-year { font-size: 1.3rem; font-weight: 800; color: #ffd700; }
.sp-cy-golden { font-size: 0.7rem; background: rgba(255,215,0,0.25); padding: 1px 6px; border-radius: 8px; }
.sp-cy-stats { flex: 1; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.sp-cy-aoc-name { font-size: 0.75rem; color: rgba(255,255,255,0.7); }
.sp-cy-temp { font-size: 1.1rem; font-weight: 800; color: #fff; }
.sp-cy-delta { font-size: 0.78rem; font-weight: 700; padding: 1px 6px; border-radius: 6px; }
.sp-cy-warm { background: rgba(252,141,89,0.35); color: #ffb07c; }
.sp-cy-cool { background: rgba(145,191,219,0.35); color: #a8d0e6; }
.sp-cy-close {
  width: 26px; height: 26px; border-radius: 50%;
  background: rgba(255,255,255,0.15); border: none; color: #fff;
  cursor: pointer; font-size: 0.85rem;
  display: flex; align-items: center; justify-content: center;
}
.sp-cy-close:hover { background: rgba(255,255,255,0.28); }
.sp-climate-slider {
  width: 100%;
  accent-color: #ffd700;
  margin: 2px 0 0;
}
.sp-climate-year-axis {
  display: flex;
  justify-content: space-between;
  font-size: 0.62rem;
  color: rgba(255,255,255,0.45);
  margin: 1px 0 6px;
}
.sp-climate-legend { margin: 4px 0 2px; }
.sp-legend-gradient {
  height: 8px;
  border-radius: 4px;
  margin-bottom: 3px;
}
.sp-legend-temp {
  background: linear-gradient(to right, rgb(69,117,180), rgb(145,191,219), rgb(255,255,191), rgb(252,141,89), rgb(215,48,39));
}
.sp-legend-sun {
  background: linear-gradient(to right, rgb(120,81,169), rgb(145,191,219), rgb(255,255,191), rgb(254,224,72), rgb(253,141,60));
}
.sp-legend-rain {
  background: linear-gradient(to right, rgb(253,174,97), rgb(255,255,191), rgb(171,217,233), rgb(74,144,226), rgb(44,62,160));
}
.sp-legend-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.62rem;
  color: rgba(255,255,255,0.55);
}
.sp-climate-footnote { font-size: 0.62rem; color: rgba(255,255,255,0.4); margin-top: 3px; }

/* Climate slide transition */
.sp-climate-slide-enter-active,
.sp-climate-slide-leave-active {
  transition: all 0.3s ease;
}
.sp-climate-slide-enter-from,
.sp-climate-slide-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}

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
.rmap-section-title { font-size: 11px; color: #999; margin-bottom: 6px; text-transform: uppercase; letter-spacing: .5px; }

/* IGME 地質圖層內嵌控制列（圖層面板下方）*/
.spain-geo-inline-panel {
  background: rgba(255,255,255,0.97);
  border-top: 1px solid #eee;
  border-radius: 0 0 16px 16px;
  padding: 10px 14px;
  width: min(320px, calc(100vw - 32px));
}
.spain-geo-inline-title {
  font-size: 13px; font-weight: 700; color: #666; margin-bottom: 10px;
}
.spain-geo-inline-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.spain-geo-inline-lbl { font-size: 12px; color: #666; white-space: nowrap; }
.spain-geo-inline-slider { flex: 1; height: 4px; accent-color: #c0392b; }
.spain-geo-inline-pct { font-size: 12px; color: #888; min-width: 32px; text-align: right; }
.spain-geo-inline-footer {
  display: flex; flex-direction: column; gap: 2px;
  font-size: 10px; color: #aaa;
  border-top: 1px solid #f0f0f0; padding-top: 6px;
}

/* IGME 地質 popup — NZ 風格 */
.spain-geology-popup {
  font-family: 'Noto Sans TC', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 13px;
  color: #f5f1eb;
  background: transparent;
  border-radius: 12px;
  overflow: hidden;
}
.spain-geology-popup .geology-popup-header {
  background: rgba(0,0,0,0.25);
  padding: 10px 14px;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  letter-spacing: 0.5px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.spain-geology-popup .geology-popup-row {
  display: flex; padding: 8px 14px; gap: 10px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  font-size: 13px;
}
.spain-geology-popup .geology-popup-label { color: #a8d8a8; min-width: 64px; }
.spain-geology-popup .geology-popup-val   { color: #fff; flex: 1; }
.spain-geology-popup .geology-popup-wine-block {
  background: rgba(255,255,255,0.06);
  margin: 10px 12px 12px;
  padding: 10px 12px;
  border-radius: 8px;
  border-left: 3px solid #6fbf73;
}
.spain-geology-popup .geology-popup-wine-title {
  font-weight: 700; font-size: 13px;
  margin-bottom: 6px; color: #c8f0c8;
}
.spain-geology-popup .geology-popup-wine-text {
  font-size: 12px; line-height: 1.6; color: #e8efe8;
}
</style>
