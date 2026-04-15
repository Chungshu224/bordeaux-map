<template>
  <section class="spain-map-section">

    <!-- 全螢幕地圖 -->
    <div ref="mapContainer" class="map"></div>

    <!-- Header -->
    <div class="map-header">
      <div class="map-header-left">
        <button class="map-hdr-btn" @click="emit('back')">← 返回自治區</button>
        <button class="map-hdr-btn ghost" @click="router.push('/')">🏠 首頁</button>
      </div>
      <h1>{{ region.icon }} {{ region.name }} 產區地圖</h1>
    </div>

    <!-- 省份指示 -->
    <transition name="fade-down">
      <div v-if="selectedProvince" class="province-indicator">
        <span>📍 {{ selectedProvince }}</span>
        <button class="province-close" @click="clearSelectedProvince">✕</button>
      </div>
    </transition>

    <!-- 資訊卡 -->
    <div v-if="activeInfo" class="map-info-bar" :class="{ collapsed: infoCollapsed }">
      <div class="info-header-bar">
        <div class="info-title">
          <span class="info-type-dot" :style="{ background: typeColor(activeInfo.typeLabel) }"></span>
          <span class="info-name">{{ activeInfo.calDsNom }}</span>
        </div>
        <div class="info-actions">
          <button class="info-btn" @click="infoCollapsed = !infoCollapsed" title="收合">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"
              :style="{ transform: infoCollapsed ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.3s' }">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
          <button class="info-btn" @click="resetView" title="重置">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 2v6h6"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/>
            </svg>
          </button>
        </div>
      </div>

      <transition name="info-expand">
        <div v-show="!infoCollapsed" class="info-content">
          <!-- 類型標籤 -->
          <div class="info-row">
            <span class="info-type-badge" :class="activeInfo.typeClass">{{ activeInfo.typeLabel }}</span>
            <span v-if="activeInfo.appData?.autonomia" class="info-autonomia">{{ activeInfo.appData.autonomia }}</span>
          </div>

          <!-- 酒款類型 -->
          <div v-if="activeInfo.appData?.styles?.length" class="info-styles">
            <span
              v-for="s in activeInfo.appData.styles"
              :key="s"
              class="style-tag"
              :style="styleTagColor(s)"
            >{{ s }}</span>
          </div>

          <!-- 葡萄品種 -->
          <div v-if="activeInfo.appData?.grapes?.length" class="info-section">
            <div class="info-section-label">主要葡萄品種</div>
            <div class="grape-list">
              <span v-for="g in activeInfo.appData.grapes" :key="g" class="grape-chip">{{ g }}</span>
            </div>
          </div>

          <!-- 描述 -->
          <div v-if="activeInfo.appData?.description" class="info-description">
            {{ activeInfo.appData.description }}
          </div>

          <!-- 所在省份 -->
          <div v-if="activeInfo.appData?.provinces?.length" class="info-section">
            <div class="info-section-label">📍 所在省份</div>
            <div class="province-list">
              <button
                v-for="p in activeInfo.appData.provinces"
                :key="p"
                class="province-chip"
                :class="{ active: selectedProvince === p }"
                @click="highlightProvince(p)"
              >{{ p }}</button>
            </div>
          </div>

          <!-- 無資料時 -->
          <div v-if="!activeInfo.appData" class="info-no-data">
            <span class="info-zon">{{ activeInfo.zonDsNom }}</span>
            <span class="info-type-text">{{ activeInfo.tprDsDes }}</span>
          </div>
        </div>
      </transition>
    </div>

    <!-- 產區清單抽屜 -->
    <transition name="sheet-fade">
      <div v-if="drawerOpen" class="aoc-backdrop" @click.self="drawerOpen = false">
        <div class="aoc-drawer">
          <div class="aoc-handle"></div>
          <div class="drawer-header">
            <span>{{ region.name }} 法定產區 ({{ filteredList.length }})</span>
            <button class="drawer-close" @click="drawerOpen = false">✕</button>
          </div>
          <div class="drawer-search-wrap">
            <span class="search-icon">🔍</span>
            <input v-model="search" class="search-input" placeholder="搜尋產區…" />
          </div>
          <div class="filter-tabs">
            <button
              v-for="tab in typeTabs"
              :key="tab.value"
              class="filter-tab"
              :class="{ active: typeFilter === tab.value }"
              @click="typeFilter = tab.value"
            >{{ tab.label }}</button>
          </div>
          <div class="appellation-list">
            <div
              v-for="item in filteredList"
              :key="item.id"
              class="app-item"
              :class="{ active: activeInfo?.id === item.id }"
              @click="selectFromList(item)"
            >
              <span class="app-type-badge" :class="item.typeClass">{{ item.typeLabel }}</span>
              <div class="app-text">
                <span class="app-name">{{ item.calDsNom }}</span>
                <span class="app-styles">{{ (item.appData?.styles || []).join(' · ') }}</span>
              </div>
            </div>
            <div v-if="filteredList.length === 0" class="no-results">無符合產區</div>
          </div>
        </div>
      </div>
    </transition>

    <!-- 圖例 (左下) -->
    <div v-if="mapReady" class="map-legend">
      <div class="legend-title">產區認證</div>
      <div v-for="t in legendTypes" :key="t.label" class="legend-item">
        <span class="legend-dot" :style="{ background: t.color }"></span>
        <span>{{ t.label }}</span>
      </div>
    </div>

    <!-- 圖層面板浮動按鈕 (右側) -->
    <div v-if="mapReady" class="sp-layers-panel">
      <div class="sp-layers-title">圖層</div>
      <!-- 等高線 -->
      <button
        class="sp-layer-btn"
        :class="{ active: contoursEnabled && canAccessTier('premium'), locked: !canAccessTier('premium') }"
        @click="canAccessTier('premium') ? toggleContours() : alertUpgrade('等高線', 'premium')"
        title="等高線"
      >
        <span class="sp-lbtn-icon">〰</span>
        <span class="sp-lbtn-text">等高線</span>
        <span v-if="!canAccessTier('premium')" class="sp-lbtn-lock">🔒</span>
        <span v-else class="sp-lbtn-dot" :class="{ on: contoursEnabled }"></span>
      </button>
      <!-- 氣候熱力 -->
      <button
        class="sp-layer-btn"
        :class="{ active: climateEnabled && canAccessTier('premium'), locked: !canAccessTier('premium') }"
        @click="canAccessTier('premium') ? toggleClimate() : alertUpgrade('氣候熱力', 'premium')"
        title="氣候熱力"
      >
        <span class="sp-lbtn-icon">🌡</span>
        <span class="sp-lbtn-text">氣候熱力</span>
        <span v-if="!canAccessTier('premium')" class="sp-lbtn-lock">🔒</span>
        <span v-else class="sp-lbtn-dot" :class="{ on: climateEnabled }"></span>
      </button>
    </div>

    <!-- 氣候熱力圖控制列 -->
    <transition name="sp-climate-slide">
    <div v-if="climateEnabled && climateData" class="sp-climate-overlay">
      <!-- 指標切換 -->
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
      <input
        type="range"
        class="sp-climate-slider"
        v-model.number="climateYear"
        min="1980" max="2024" step="1"
        @input="onClimateYearChange"
      >
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

    <!-- 底部工具列 -->
    <div v-if="mapReady" class="mobile-grid-buttons mobile-grid-5">
      <button class="m-grid-btn" :class="{ active: drawerOpen }" @click="drawerOpen = !drawerOpen">
        <span class="m-grid-icon">產</span>
        <span class="m-grid-text">產區</span>
      </button>
      <button class="m-grid-btn" :class="{ active: is3D }" @click="toggle3D">
        <span class="m-grid-icon">3D</span>
        <span class="m-grid-text">{{ is3D ? '2D' : '3D' }}</span>
      </button>
      <button class="m-grid-btn"
        :class="{ active: contoursEnabled, locked: !canAccessTier('premium') }"
        @click="canAccessTier('premium') ? toggleContours() : alertUpgrade('等高線', 'premium')">
        <span class="m-grid-icon">〰</span>
        <span class="m-grid-text">等高線<span v-if="!canAccessTier('premium')">🔒</span></span>
      </button>
      <button class="m-grid-btn"
        :class="{ active: climateEnabled, locked: !canAccessTier('premium') }"
        @click="canAccessTier('premium') ? toggleClimate() : alertUpgrade('氣候熱力', 'premium')">
        <span class="m-grid-icon">🌡</span>
        <span class="m-grid-text">氣候<span v-if="!canAccessTier('premium')">🔒</span></span>
      </button>
      <button class="m-grid-btn" :class="{ active: activeInfo && !infoCollapsed }" @click="toggleInfo">
        <span class="m-grid-icon">資</span>
        <span class="m-grid-text">資訊</span>
      </button>
    </div>

    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
    <div v-if="mapError" class="map-error">{{ mapError }}</div>

  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { authActions } from '@/stores/authStore.js'
import { TIER_WEIGHT } from '@/router/index.js'

const props = defineProps({
  region: { type: Object, required: true }
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
const infoCollapsed = ref(false)
const drawerOpen = ref(false)
const showProvinces = ref(true)
const is3D = ref(false)
const search = ref('')
const typeFilter = ref('all')
const activeInfo = ref(null)
const allRegions = ref([])    // all 96 features as normalized objects
const appellations = ref([])  // spain-appellations.json lookup
const selectedProvince = ref(null)

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
let hoveredId = null
let selectedProvinceId = null
let hoveredProvinceId = null
let initialBounds = null    // 起始畫面的 bounds，供重置使用
let baseFilter = null       // addLayers 套用的初始 filter，重置時恢復
let selectedRegionId = null // 目前選取的 wine-region feature id
const allRegionsMap = new Map()   // Map<featureIdx → normalizedInfo> ，供 click 查詢用

// ── Type helpers ─────────────────────────────────────────────────
const TYPE_MAP = {
  'Denominación de Origen Calificada':  { label: 'DOCa', cls: 'doca', color: '#e74c3c' },
  'Denominación de Origen':             { label: 'DO',   cls: 'do',   color: '#27ae60' },
  'Denominación de Origen Protegida':   { label: 'DOP',  cls: 'dop',  color: '#e67e22' },
  'Vino de Calidad':                    { label: 'VC',   cls: 'vc',   color: '#3498db' },
  'Vino de Pago':                       { label: 'VP',   cls: 'vp',   color: '#9b59b6' },
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

function toggleContours() {
  if (!map) return
  contoursEnabled.value = !contoursEnabled.value
  const vis = contoursEnabled.value ? 'visible' : 'none'
  if (map.getLayer('sp-contours')) map.setLayoutProperty('sp-contours', 'visibility', vis)
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
  map.setPaintProperty('wine-regions-fill', 'fill-opacity', 0.30)
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

      // ── Mapbox DEM + 等高線來源（供 3D 地形 & 等高線使用）──
      if (!map.getSource('mapbox-dem')) {
        map.addSource('mapbox-dem', {
          type: 'raster-dem',
          url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
          tileSize: 512,
          maxzoom: 14,
        })
      }
      if (!map.getSource('sp-contours')) {
        map.addSource('sp-contours', {
          type: 'vector',
          url: 'mapbox://mapbox.mapbox-terrain-v2',
        })
      }
      // 等高線線條圖層（預設隱藏）
      map.addLayer({
        id: 'sp-contours',
        type: 'line',
        source: 'sp-contours',
        'source-layer': 'contour',
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
      // 等高線標籤圖層（預設隱藏）
      map.addLayer({
        id: 'sp-contour-labels',
        type: 'symbol',
        source: 'sp-contours',
        'source-layer': 'contour',
        layout: {
          'symbol-placement': 'line',
          'text-field': ['concat', ['to-string', ['get', 'ele']], 'm'],
          'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
          'text-size': ['interpolate', ['linear'], ['zoom'], 10, 9, 13, 11, 16, 13],
          'text-padding': 25,
          visibility: 'none',
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

      try {
        await addLayers()
      } catch (e) {
        console.error('[SpainMap] addLayers error:', e)
        mapError.value = '圖層載入失敗：' + e.message
      }
      isLoading.value = false
      mapReady.value = true
      resolve()
    })

    map.on('error', (e) => {
      console.error('[SpainMap] map error:', e)
      mapError.value = '地圖錯誤：' + (e.error?.message || '未知錯誤')
      reject(e)
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
  wineGeo.features.forEach((f, i) => {
    const appData = lookupAppellation(f.properties.ZON_DS_NOM)
    f.properties.AUTONOMIA_ID = appData?.autonomiaId || ''
    const n = normalizeFeature(f, i)
    n.appData = appData
    allRegionsMap.set(i, n)
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
      'fill-opacity': 0.30,
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
      // 只有在沒有 wine region 的區域才顯示 crosshair
      const wine = map.queryRenderedFeatures(e.point, { layers: ['wine-regions-fill'] })
      if (!wine.length) map.getCanvas().style.cursor = 'crosshair'
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
    const feat = e.features[0]
    const info = allRegionsMap.get(feat.id)
    if (info) {
      activeInfo.value = info
      infoCollapsed.value = false
      // 只顯示選中的產區，其他隱藏
      selectedRegionId = feat.id
      map.setFilter('wine-regions-fill', ['==', ['id'], feat.id])
      map.setFilter('wine-regions-line', ['==', ['id'], feat.id])
    }
    e.originalEvent._spainWineClicked = true
  })

  // 點擊省份（未蓋住 wine region 的區域）或清除選取
  map.on('click', (e) => {
    if (e.originalEvent._spainWineClicked) return
    const provFeat = map.queryRenderedFeatures(e.point, { layers: ['provinces-fill'] })
    if (provFeat.length > 0) {
      selectProvinceByFeature(provFeat[0])
    } else {
      activeInfo.value = null
    }
  })
}

// ── Actions ───────────────────────────────────────────────────────
function resetView() {
  if (!map) return
  // 恢復所有產區顯示（還原為初始 filter 或清除 filter）
  if (selectedRegionId !== null) {
    map.setFilter('wine-regions-fill', baseFilter)
    map.setFilter('wine-regions-line', baseFilter)
    selectedRegionId = null
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

function selectProvinceByFeature(feat) {
  if (!map) return
  const name = feat.properties.province || feat.properties.name
  if (selectedProvinceId !== null) {
    map.setFeatureState({ source: 'provinces', id: selectedProvinceId }, { selected: false })
  }
  selectedProvinceId = feat.id
  map.setFeatureState({ source: 'provinces', id: selectedProvinceId }, { selected: true })
  selectedProvince.value = name
  // fitBounds 至省份範圍
  const coords = feat.geometry.type === 'MultiPolygon'
    ? feat.geometry.coordinates.flat(2)
    : feat.geometry.coordinates.flat(1)
  const lngs = coords.map(c => c[0])
  const lats = coords.map(c => c[1])
  map.fitBounds(
    [[Math.min(...lngs), Math.min(...lats)], [Math.max(...lngs), Math.max(...lats)]],
    { padding: 60, maxZoom: 10, duration: 700 }
  )
}

function highlightProvince(name) {
  if (!map) return
  const features = map.querySourceFeatures('provinces')
  const feat = features.find(f => (f.properties.province || f.properties.name) === name)
  if (feat) selectProvinceByFeature(feat)
}

function clearSelectedProvince() {
  if (!map || selectedProvinceId === null) return
  map.setFeatureState({ source: 'provinces', id: selectedProvinceId }, { selected: false })
  selectedProvinceId = null
  selectedProvince.value = null
}

function toggle3D() {
  is3D.value = !is3D.value
  if (!map) return
  if (is3D.value) {
    // mapbox-dem 已在 map.on('load') 加入，直接使用
    map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 })
    map.setPitch(45)
  } else {
    map.setTerrain(null)
    map.setPitch(0)
  }
}

function selectFromList(item) {
  activeInfo.value = item
  infoCollapsed.value = false
  drawerOpen.value = false

  // Fly to feature bbox
  if (!map) return
  const src = map.getSource('wine-regions')
  if (!src) return

  const features = map.querySourceFeatures('wine-regions')
  const feat = features.find(f => f.id === item.id)
  if (feat?.geometry) {
    const coords = feat.geometry.type === 'Polygon'
      ? feat.geometry.coordinates[0]
      : feat.geometry.coordinates.flat(2)
    if (coords.length) {
      const lngs = coords.map(c => c[0])
      const lats = coords.map(c => c[1])
      const bounds = [[Math.min(...lngs), Math.min(...lats)], [Math.max(...lngs), Math.max(...lats)]]
      map.fitBounds(bounds, { padding: 80, maxZoom: 12, duration: 800 })
    }
  }
}

function toggleInfo() {
  if (!activeInfo.value) return
  infoCollapsed.value = !infoCollapsed.value
}
</script>

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

.info-actions {
  display: flex;
  gap: 0.3rem;
  flex-shrink: 0;
}

.info-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255,255,255,0.22);
  border: 1px solid rgba(255,255,255,0.4);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}
.info-btn:hover { background: rgba(255,255,255,0.38); }

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

/* ── Bottom toolbar ──────────────────────────────────────────── */
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
.mobile-grid-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.m-grid-btn {
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
.m-grid-btn:hover { opacity: 0.85; }
.m-grid-btn.active {
  background: linear-gradient(180deg, #a93226 0%, #7b241c 100%);
  color: #fff;
  box-shadow: none;
}

.m-grid-icon {
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
.m-grid-btn.active .m-grid-icon { background: rgba(255,255,255,0.18); color: #fff; }

.m-grid-text {
  font-size: 0.76rem;
  font-weight: 800;
}

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

/* ── 5-grid toolbar ─────────────────────────────────────────── */
.mobile-grid-5 {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
.m-grid-btn.locked {
  opacity: 0.65;
}

/* ── 圖層面板 (右側浮動, 桌面版) ───────────────────────────── */
.sp-layers-panel {
  position: fixed;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1001;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(8px);
  border-radius: 14px;
  padding: 10px 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.16);
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 78px;
}
@media (max-width: 640px) {
  .sp-layers-panel { display: none; }
}

.sp-layers-title {
  font-size: 0.68rem;
  font-weight: 800;
  color: #888;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding-bottom: 4px;
  border-bottom: 1px solid #eee;
}

.sp-layer-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 8px 6px;
  border-radius: 10px;
  border: 1.5px solid transparent;
  background: rgba(0,0,0,0.04);
  cursor: pointer;
  transition: all 0.15s;
  color: #34495e;
}
.sp-layer-btn:hover { background: rgba(0,0,0,0.08); }
.sp-layer-btn.active {
  background: linear-gradient(135deg, #c0392b, #7b241c);
  color: #fff;
  border-color: transparent;
}
.sp-layer-btn.locked { opacity: 0.65; }

.sp-lbtn-icon { font-size: 1.15rem; }
.sp-lbtn-text { font-size: 0.65rem; font-weight: 700; }
.sp-lbtn-lock { font-size: 0.7rem; }
.sp-lbtn-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #ccc;
  border: 1.5px solid #aaa;
}
.sp-lbtn-dot.on { background: #2ecc71; border-color: #27ae60; }

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
</style>
