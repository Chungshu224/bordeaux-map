<template>
  <section class="map-section">

    <!-- Header -->
    <RegionMapHeader
      regionName="波爾多"
      title="Bordeaux Wine Region Map"
      icon="🍷"
      @back="router.push('/bordeaux')"
    />

    <!-- 資訊卡 -->
    <RegionMapInfoPanel
      v-if="activeAOC.aoc && (isMobile || (!layersPanelOpen && !climateEnabled))"
      :info="unifiedInfo"
      theme-color="#8B0000"
      :audio-available="true"
      :is-playing-audio="false"
      :collapsed="infoBarCollapsed"
      @toggle-collapse="toggleInfoPanel"
      @play-audio="playPronunciation(activeAOC.aoc)"
      @reset="resetMap"
    >
      <template #extra-actions>
        <button
          v-if="hasChateauxFile"
          class="btn-chateaux"
          :class="{ 'btn-locked': !canAccessTier('premium') }"
          @click="canAccessTier('premium') ? toggleChateauxMarkers() : alertUpgrade('顯示知名酒莊', 'premium')"
        >
          <span v-if="!canAccessTier('premium')" class="lock-inline">🔒</span>
          {{ showingChateaux ? '隱藏酒莊' : '顯示知名酒莊' }}
        </button>
      </template>
    </RegionMapInfoPanel>
    <div ref="mapContainer" class="map"></div>
    <!-- 圖層面板收合時的重新展開按鈕 -->
    <button
      v-if="!isMobile && !layersPanelOpen"
      class="layers-reopen-btn"
      @click="layersPanelOpen = true"
      title="展開圖層面板"
    >⊞ 圖層</button>

    <div v-show="isMobile || layersPanelOpen" class="map-controls" :class="{ 'mobile-open': mobileLayersOpen }">
      <!-- 面板標題（桌機 + 行動） -->
      <div class="layers-panel-header">
        <span>圖層與顯示</span>
        <button class="layers-panel-close" @click="isMobile ? mobileLayersOpen = false : layersPanelOpen = false" aria-label="收合">✕</button>
      </div>

      <!-- ── 視角 ── -->
      <div class="layer-group" v-if="map">
        <div class="layer-group-label">視角</div>
        <div class="layer-group-buttons">
          <button class="btn-layer" :class="{ active: is3D, 'color-3d': true }" @click="toggle3D">
            <span class="lbtn-icon">🗺</span>
            <span class="lbtn-text">3D 地形</span>
            <span class="lbtn-dot" :class="{ on: is3D }"></span>
          </button>
          <!-- 等高線：premium 以上 -->
          <button
            class="btn-layer"
            :class="{ active: contoursEnabled && canAccessTier('premium'), 'color-contours': true, 'btn-layer-locked': !canAccessTier('premium') }"
            @click="canAccessTier('premium') ? toggleContours() : alertUpgrade('等高線', 'premium')"
          >
            <span class="lbtn-icon">〰</span>
            <span class="lbtn-text">等高線</span>
            <span v-if="!canAccessTier('premium')" class="lbtn-lock">🔒</span>
            <span v-else class="lbtn-dot" :class="{ on: contoursEnabled }"></span>
          </button>
        </div>
      </div>

      <!-- ── 資料圖層 ── -->
      <div class="layer-group" v-if="map && !isPhoneDevice">
        <div class="layer-group-label">資料圖層</div>
        <div class="layer-group-buttons">
          <!-- 氣候熱力：premium 以上 -->
          <button
            class="btn-layer"
            :class="{ active: climateEnabled && canAccessTier('premium'), 'color-climate': true, 'btn-layer-locked': !canAccessTier('premium') }"
            @click="canAccessTier('premium') ? toggleClimate() : alertUpgrade('氣候熱力', 'premium')"
          >
            <span class="lbtn-icon">🌡</span>
            <span class="lbtn-text">氣候熱力</span>
            <span v-if="!canAccessTier('premium')" class="lbtn-lock">🔒</span>
            <span v-else class="lbtn-dot" :class="{ on: climateEnabled }"></span>
          </button>
          <!-- BRGM 法國官方地質圖 -->
          <button
            class="btn-layer"
            :class="{ active: brgmEnabled, 'color-brgm': true }"
            @click="toggleBRGM(map)"
          >
            <span class="lbtn-icon">🗺️</span>
            <span class="lbtn-text">BRGM 地質</span>
            <span class="lbtn-dot" :class="{ on: brgmEnabled }"></span>
          </button>
        </div>
      </div>

    </div>

    
    <!-- BRGM 地質浮動面板 -->
    <div v-show="brgmEnabled && !isPhoneDevice" class="brgm-float-panel">
      <div class="brgm-float-title">🗺️ BRGM 地質圖</div>
      <div class="brgm-float-row">
        <span class="brgm-float-label">透明度</span>
        <input class="soil-opacity-slider" type="range" min="0.05" max="0.85" step="0.05"
          v-model.number="brgmOpacity" @input="updateBRGMOpacity(map)">
        <span class="soil-opacity-pct">{{ Math.round(brgmOpacity * 100) }}%</span>
      </div>
      <div class="brgm-float-legend">
        <span class="brgm-float-src">資料來源：BRGM LITHO_1M (Etalab OL)</span>
        <span class="brgm-float-hint">點擊地圖查看岩石資訊</span>
      </div>
    </div>

    <div v-if="map" class="mobile-map-toolbar">
      <button class="mobile-tool-btn" :class="{ active: mobileAocDrawerOpen }" @click="toggleMobileTool('aoc')">
        <span class="mobile-tool-icon">產</span>
        <span>產區</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: mobileLayersOpen }" @click="toggleMobileTool('layers')">
        <span class="mobile-tool-icon">層</span>
        <span>圖層</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: is3D }" @click="toggleMobileTool('3d')">
        <span class="mobile-tool-icon">3D</span>
        <span>{{ is3D ? '2D' : '3D' }}</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: mobileInfoSheetState !== 'peek' }" @click="toggleMobileTool('info')">
        <span class="mobile-tool-icon">資</span>
        <span>資訊</span>
      </button>
    </div>
    

    <div v-if="mapError" class="map-error">
      {{ mapError }}
    </div>
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>

    <!-- 氣候熱力圖 控制列 -->
    <transition name="climate-slide">
    <div v-if="climateEnabled && climateData && !isPhoneDevice" class="climate-overlay">
      <!-- 指標切換 -->
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
          <span v-if="currentYearValue !== null" class="cy-temp">
            {{ currentYearValue }}{{ currentIndicatorConfig.unit }}
          </span>
          <span v-if="currentYearDelta !== null" class="cy-delta"
            :class="currentYearDeltaPositive ? 'cy-warm' : 'cy-cool'">
            {{ currentYearDeltaPositive ? '+' : '' }}{{ currentYearDelta }}{{ currentIndicatorConfig.unit }} vs 基準
          </span>
        </div>
        <button class="cy-close" @click="toggleClimate" title="關閉氣候圖層">✕</button>
      </div>
      <input
        type="range"
        class="climate-slider"
        v-model.number="climateYear"
        min="1980" max="2024" step="1"
        @input="onClimateYearChange"
      >
      <div class="climate-year-axis">
        <span>1980</span><span>1990</span><span>2000</span><span>2010</span><span>2020</span><span>2024</span>
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
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as turf from '@turf/turf'
import { useBRGMGeology, BRGM_POPUP_STYLES } from '@/composables/useBRGMGeology.js'
import { 
  getMapboxToken, 
  shouldUseMapbox, 
  getOSMStyle, 
  getMapboxStyleUrl,
  isLikelyDevHost
} from '@/utils/getMapboxToken'
import { supabase } from '@/lib/supabaseClient.js'
import { authState, authActions } from '@/stores/authStore.js'
import { useDeviceDetection } from '@/utils/deviceDetection.js'
import { TIER_WEIGHT } from '@/router/index.js'
import {
  RegionMapHeader, RegionMapLayerPanel, RegionMapInfoPanel,
  RegionMapAppellationDrawer, RegionMapMobileToolbar
} from './shared/regionMap/index.js'

const router = useRouter()

// 接收來自父組件的屬性
const props = defineProps({
  activeAOC: Object,
  regionInfo: Object,
  filteredGroups: Object,
  expandedGroups: Object,
  regionsData: Object,
  styleColors: Object,
  aocGroups: Object,
  search: String,
  mobileAocDrawerOpen: {
    type: Boolean,
    default: false
  },
  // 由 BordeauxMap 傳入的訂閱等級；若未傳則自行計算
  userTier: {
    type: String,
    default: null
  }
})

// ── 訂閱等級工具 ──
const resolvedTier = computed(() => {
  if (props.userTier) return props.userTier
  return authActions.getEffectiveTier()
})
const canAccessTier = (minimumTier) => TIER_WEIGHT[resolvedTier.value] >= TIER_WEIGHT[minimumTier]

// 點擊鎖定功能時的統一提示
const alertUpgrade = (featureName, requiredTier) => {
  const labels = { basic: '初階付費', premium: '進階付費' }
  alert(`🔒 「${featureName}」需要「${labels[requiredTier]}」方案才能使用\n\n請升級您的訂閱以解鎖此功能！`)
}

// 定義要發送到父組件的事件
const emit = defineEmits(['showAOC', 'resetMap', 'toggle3D', 'openAOCList'])

// 狀態管理
const isLoading = ref(false)
const mapError = ref(null)
const mapContainer = ref(null)
let map = null
const is3D = ref(false)
const terrainEnabled = ref(false)
const contoursEnabled = ref(false)
const { isMobile: isPhoneDevice } = useDeviceDetection()

const infoBarCollapsed = ref(false)
const isMobile = ref(false)
const mobileLayersOpen = ref(false)
const layersPanelOpen = ref(true)
const mobileInfoSheetState = ref('peek')
const geojsonCache = new Map()
const defaultAOCFillOpacity = 0.1
const activeAocBounds = ref(null)
const aocComputedHectare = ref(null)  // turf.js 計算的精確面積（公頃）
let resizeHandler = null
let infoSheetTouchStartY = 0

// ── BRGM 法國地質圖 ──
const { brgmEnabled, brgmOpacity, toggleBRGM, resetBRGM, updateBRGMOpacity, updateBRGMClip } = useBRGMGeology()
watch(brgmOpacity, () => updateBRGMOpacity(map))

// 當選取的 AOC 變更或 BRGM 開關時，更新地質圖設罩
watch([brgmEnabled, () => props.activeAOC?.aoc], () => {
  if (!brgmEnabled.value || !props.activeAOC?.aoc) {
    updateBRGMClip(map, null)
    return
  }
  let geojson = null
  for (const [path, data] of geojsonCache.entries()) {
    if (path.endsWith('/' + props.activeAOC.aoc)) { geojson = data; break }
  }
  updateBRGMClip(map, geojson)
})
let aocClickPopup = null
let chateauMarkerJustClicked = false  // 旗標：酒莊 marker 剛被點擊，AOC handler 應跳過

// ── 氣候熱力圖 ───────────────────────────────────────────
const climateEnabled  = ref(false)
const climateYear     = ref(2003)   // 預設顯示 2003 熱浪年
const climateData     = ref(null)   // { aoc_id: { group, centroid, temps[], sun[], rain[], baseline, baselineSun, baselineRain } }
const climateStats    = ref(null)   // { min, max, mean }  (溫度)
const climateStatsSun = ref(null)   // { min, max, mean }  (日照)
const climateStatsRain= ref(null)   // { min, max, mean }  (降雨)
const climateYears    = ref([])     // [1980..2024]
const climateYearAvg  = ref([])     // 各年波爾多均溫
const climateYearSun  = ref([])     // 各年夏季日照
const climateYearRain = ref([])     // 各年夏季降雨
const climateIndicator= ref('temp') // 'temp' | 'sun' | 'rain'

const CLIMATE_INDICATORS = [
  {
    id: 'temp', icon: '🌡', label: '夏季均溫', unit: '°C',
    lowLabel: '涼', highLabel: '熱',
    footnote: '指標：6–8 月日均溫平均值（夏季均溫）｜ 基準：1981–2010',
    dataKey: 'temps', baselineKey: 'baseline',
    globalKey: 'global', yearAvgKey: 'yearAvg',
  },
  {
    id: 'sun', icon: '☀️', label: '日照時數', unit: 'h',
    lowLabel: '少', highLabel: '多',
    footnote: '指標：6–8 月日照時數總和（小時）｜ 基準：1981–2010',
    dataKey: 'sun', baselineKey: 'baselineSun',
    globalKey: 'globalSun', yearAvgKey: 'yearSunAvg',
  },
  {
    id: 'rain', icon: '🌧', label: '夏季降雨', unit: 'mm',
    lowLabel: '乾', highLabel: '濕',
    footnote: '指標：6–8 月降雨量總和（毫米）｜ 基準：1981–2010',
    dataKey: 'rain', baselineKey: 'baselineRain',
    globalKey: 'globalRain', yearAvgKey: 'yearRainAvg',
  },
]

const currentIndicatorConfig = computed(() =>
  CLIMATE_INDICATORS.find(i => i.id === climateIndicator.value)
)
const currentGlobalStats = computed(() => {
  const cfg = currentIndicatorConfig.value
  if (!cfg) return null
  if (cfg.id === 'temp') return climateStats.value
  if (cfg.id === 'sun')  return climateStatsSun.value
  if (cfg.id === 'rain') return climateStatsRain.value
  return null
})
const currentYearAvgArr = computed(() => {
  const cfg = currentIndicatorConfig.value
  if (!cfg) return climateYearAvg.value
  if (cfg.id === 'sun')  return climateYearSun.value
  if (cfg.id === 'rain') return climateYearRain.value
  return climateYearAvg.value
})

const GOLDEN_VINTAGES = new Set([1982, 1989, 1990, 2000, 2003, 2005, 2009, 2010, 2015, 2016, 2019, 2020])

const isGoldenVintage = computed(() => GOLDEN_VINTAGES.has(climateYear.value))

// 目前 AOC 的名稱標籤
const climateCurrentAocLabel = computed(() => {
  if (!props.activeAOC?.aoc) return ''
  return props.activeAOC.aoc
    .replace('_AOC.geojson', '').replace('.geojson', '')
    .replace(/-/g, ' ').replace(/_/g, ' ')
})

// 目前 AOC 在選取年份的數值
const currentYearValue = computed(() => {
  if (!climateYears.value.length) return null
  const cfg = currentIndicatorConfig.value
  const idx = climateYears.value.indexOf(climateYear.value)
  if (idx < 0) return null
  if (climateData.value && props.activeAOC?.aoc) {
    const aocId = props.activeAOC.aoc.replace('.geojson', '')
    const arr = climateData.value[aocId]?.[cfg.dataKey]
    if (arr?.[idx] != null) return +arr[idx].toFixed(cfg.id === 'temp' ? 1 : 0)
  }
  const arr = currentYearAvgArr.value
  return arr[idx] != null ? +arr[idx].toFixed(cfg.id === 'temp' ? 1 : 0) : null
})

// 舊名稱保留 backward compat
const currentYearAvgTemp = currentYearValue

// 目前 AOC 與基準線的差值
const currentYearDelta = computed(() => {
  if (!climateData.value || !climateYears.value.length) return null
  const cfg = currentIndicatorConfig.value
  const idx = climateYears.value.indexOf(climateYear.value)
  if (idx < 0) return null
  if (props.activeAOC?.aoc) {
    const aocId = props.activeAOC.aoc.replace('.geojson', '')
    const d = climateData.value[aocId]
    const arr = d?.[cfg.dataKey]
    const baseline = d?.[cfg.baselineKey]
    if (arr?.[idx] != null && baseline) {
      const dec = cfg.id === 'temp' ? 2 : 0
      return +(arr[idx] - baseline).toFixed(dec)
    }
  }
  // 全域 delta
  const vals = Object.values(climateData.value)
    .map(d => {
      const arr = d[cfg.dataKey]
      const baseline = d[cfg.baselineKey]
      return (arr?.[idx] != null && baseline) ? arr[idx] - baseline : null
    }).filter(v => v != null)
  return vals.length ? +(vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(cfg.id === 'temp' ? 2 : 0) : null
})
const currentYearBaselineDelta = currentYearDelta  // backward compat

// 對於溫度：暖=正，日照：多=正，降雨：正也顯示橙（濕）
const currentYearDeltaPositive = computed(() => {
  if (currentYearDelta.value === null) return false
  return currentYearDelta.value > 0
})

// 酒莊相關狀態
const currentMarkers = ref([])
const showingChateaux = ref(false)
const hasChateauxFile = ref(false)
const chateauxDataCache = new Map()

// 音頻播放器
let currentAudio = null

// 播放 AOC 發音
const playPronunciation = (aocFileName) => {
  // 停止當前播放的音頻
  if (currentAudio) {
    currentAudio.pause()
    currentAudio = null
  }
  
  // 從 wine_list.csv 映射中獲取對應的 mp3 文件名
  // 將 .geojson 替換為 .mp3
  const mp3FileName = aocFileName.replace('.geojson', '.mp3')
  const audioPath = `/sounds/AOC/${mp3FileName}`
  
  // 創建並播放音頻
  currentAudio = new Audio(audioPath)
  currentAudio.play().catch(err => {
    console.warn('播放發音失敗:', err)
    alert('發音文件尚未準備，請稍後再試')
  })
}

// 播放酒莊發音
const playChateauPronunciation = (chateauName) => {
  // 停止當前播放的音頻
  if (currentAudio) {
    currentAudio.pause()
    currentAudio = null
  }
  
  const audioPath = `/sounds/Chateaux/${chateauName}.mp3`
  
  // 創建並播放音頻
  currentAudio = new Audio(audioPath)
  currentAudio.play().catch(err => {
    console.warn('播放酒莊發音失敗:', err)
    alert('發音文件尚未準備，請稍後再試')
  })
}

// 色彩對應
function aocColor(groupName) {
  if (groupName.includes('LeftBank')) return '#8B0000'
  if (groupName.includes('RightBank')) return '#4169E1'
  if (groupName === 'Sauternais') return '#FFD700'
  if (groupName === 'Regional') return '#8B5C2A'
  if (groupName === 'Entre-Deux-Mers') return '#2E8B57'
  return '#aaa'
}

// 葡萄品種圖示
const grapeIcons = {
  'Cabernet Sauvignon': {color: '#660033', symbol: 'CS'},
  'Merlot': {color: '#990000', symbol: 'M'},
  'Cabernet Franc': {color: '#800020', symbol: 'CF'},
  'Petit Verdot': {color: '#4B0082', symbol: 'PV'},
  'Malbec': {color: '#5C0120', symbol: 'Ma'},
  'Sémillon': {color: '#F3E5AB', symbol: 'Sm'},
  'Sauvignon Blanc': {color: '#FFFFE0', symbol: 'SB'},
  'Muscadelle': {color: '#FFFFF0', symbol: 'Mu'},
  'Sauvignon Gris': {color: '#E6E6FA', symbol: 'SG'},
  'Ugni Blanc': {color: '#F5F5DC', symbol: 'UB'}
}

// 葡萄酒風格顏色映射
const styleColors = {
  '紅酒': '#8B0000',    // 深紅色
  '白酒': '#F0E68C',    // 淡黃色
  '甜酒': '#FFD700',    // 金黃色
  '氣泡酒': '#87CEEB',  // 淡藍色
  '粉紅酒': '#FFB6C1'   // 粉紅色
}

// 調試模式開關
const debug = true

// 獲取葡萄品種圖示
const getGrapeIcon = (grapeName) => {
  for (const [grape, icon] of Object.entries(grapeIcons)) {
    if (grapeName.includes(grape)) {
      return icon
    }
  }
  return {color: '#888', symbol: '?'}
}

// 顯示 AOC 地圖
const showAOCGeojson = async (groupName, aocFile) => {
  // 初始化酒莊狀態
  hasChateauxFile.value = false
  removeChateauxMarkers()
  showingChateaux.value = false
  aocComputedHectare.value = null  // 重置面積，等 GeoJSON 載入後重算

  if (!map) return

  // 1. 構建 geojson 路徑
  let geojsonPath = ''
  if (groupName === 'Regional') {
    geojsonPath = `/geojson/Regional/${aocFile}`
  } else if (groupName.includes('LeftBank')) {
    if (groupName.includes('Graves')) {
      geojsonPath = `/geojson/LeftBank/Graves/${aocFile}`
    } else if (groupName.includes('Medoc') || aocFile.includes('Medoc') || aocFile.includes('Margaux') || aocFile.includes('Pauillac') || aocFile.includes('Saint') || aocFile.includes('Moulis') || aocFile.includes('Listrac')) {
      geojsonPath = `/geojson/LeftBank/Medoc/${aocFile}`
    } else {
      geojsonPath = `/geojson/LeftBank/${aocFile}`
    }
  } else if (groupName.includes('RightBank')) {
    if (groupName.includes('Blaye') || aocFile.includes('Blaye') || aocFile.includes('Bourg')) {
      geojsonPath = `/geojson/RightBank/Blaye/${aocFile}`
    } else if (groupName.includes('Libournais') || aocFile.includes('Fronsac') || aocFile.includes('Pomerol') || aocFile.includes('Saint_emilion') || aocFile.includes('Castillon')) {
      geojsonPath = `/geojson/RightBank/Libournais/${aocFile}`
    } else {
      geojsonPath = `/geojson/RightBank/${aocFile}`
    }
  } else if (groupName === 'Entre-Deux-Mers') {
    geojsonPath = `/geojson/Entre-Deux-Mers/${aocFile}`
  } else if (groupName === 'Sauternais') {
    geojsonPath = `/geojson/Sauternais/${aocFile}`
  } else {
    geojsonPath = `/geojson/${aocFile}`
  }

  isLoading.value = true
  mapError.value = null

  try {
    // 2. 取得 geojson
    let geojson
    if (geojsonCache.has(geojsonPath)) {
      geojson = geojsonCache.get(geojsonPath)
    } else {
      const res = await fetch(geojsonPath)
      if (!res.ok) throw new Error(`無法載入 geojson (${res.status})`)
      geojson = await res.json()
      
      // 為每個 feature 分配唯一 ID 和名稱（支援 feature-state 和標籤顯示）
      const aocName = aocFile.replace('_AOC.geojson', '').replace('.geojson', '').replace(/-/g, ' ').replace(/_/g, ' ')
      if (geojson.features) {
        geojson.features.forEach((feature, index) => {
          if (!feature.id) {
            feature.id = index
          }
          // 添加名稱屬性供標籤使用
          if (!feature.properties) {
            feature.properties = {}
          }
          if (!feature.properties.name) {
            feature.properties.name = aocName
          }
        })
      }
      
      geojsonCache.set(geojsonPath, geojson)
    }

    // 計算精確面積（turf.js，公頃）
    try {
      const areaSqm = turf.area(geojson) // 平方公尺
      // 轉換公頃並取整至 10 公頃
      aocComputedHectare.value = (Math.round(areaSqm / 100000) * 10).toLocaleString('zh-TW')
    } catch (e) {
      aocComputedHectare.value = null
    }

    // 3. 優化圖層處理 - 圖層復用
    // 判斷是否為初始 Bordeaux_AOC.geojson
    const isBordeauxAOC = (groupName === 'Regional' && aocFile === 'Bordeaux_AOC.geojson')
    
    // 根據產區分組決定顏色（改進的顏色分級系統）
    let fillColor
    if (isBordeauxAOC) {
      fillColor = '#8B0000' // Bordeaux整體區域保持深紅色
    } else if (groupName.includes('LeftBank')) {
      fillColor = '#DC143C' // 左岸：Crimson紅色
    } else if (groupName.includes('RightBank')) {
      fillColor = '#4169E1' // 右岸：Royal Blue藍色
    } else if (groupName === 'Sauternais') {
      fillColor = '#FFD700' // Sauternais：金黃色
    } else if (groupName === 'Entre-Deux-Mers') {
      fillColor = '#2E8B57' // Entre-Deux-Mers：海綠色
    } else {
      fillColor = '#8B5C2A' // 其他區域：棕色
    }
    
    const fillOpacity = 0.1 // 統一透明度 10%（懸停時會增加到 30%）
    
    // 如果source已存在，只更新數據；否則創建新的
    if (map.getSource('aoc')) {
      map.getSource('aoc').setData(geojson)
    } else {
      map.addSource('aoc', {
        type: 'geojson',
        data: geojson,
        promoteId: 'id' // 支援 feature-state 功能
      })
    }
    
    // 4. 新增/更新圖層（帶平滑過渡動畫）
    if (!map.getLayer('aoc-fill')) {
      map.addLayer({
        id: 'aoc-fill',
        type: 'fill',
        source: 'aoc',
        paint: {
          'fill-color': fillColor,
          'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            fillOpacity + 0.2, // 懸停時提高不透明度
            fillOpacity
          ],
          'fill-opacity-transition': {
            duration: 300,
            delay: 0
          }
        }
      })
    } else {
      // 更新現有圖層的顏色和透明度
      map.setPaintProperty('aoc-fill', 'fill-color', fillColor)
      map.setPaintProperty('aoc-fill', 'fill-opacity', [
        'case',
        ['boolean', ['feature-state', 'hover'], false],
        fillOpacity + 0.2,
        fillOpacity
      ])
    }
    
    if (!map.getLayer('aoc-outline')) {
      map.addLayer({
        id: 'aoc-outline',
        type: 'line',
        source: 'aoc',
        paint: {
          'line-color': '#FFFFFF',
          'line-width': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            3, // 懸停時加粗線條
            2
          ],
          'line-opacity': 0.95,
          'line-width-transition': {
            duration: 300,
            delay: 0
          }
        }
      })
    }

    // 5. 添加懸停高亮效果和工具提示（使用feature-state）
    let hoveredFeatureId = null
    
    map.off('mousemove', 'aoc-fill') // 移除舊的監聽器
    map.on('mousemove', 'aoc-fill', (e) => {
      if (e.features.length > 0) {
        // 重置之前的懸停狀態
        if (hoveredFeatureId !== null) {
          map.setFeatureState(
            { source: 'aoc', id: hoveredFeatureId },
            { hover: false }
          )
        }
        // 設置新的懸停狀態
        hoveredFeatureId = e.features[0].id
        map.setFeatureState(
          { source: 'aoc', id: hoveredFeatureId },
          { hover: true }
        )
      }
    })
    
    map.off('mouseleave', 'aoc-fill')
    map.on('mouseleave', 'aoc-fill', () => {
      if (hoveredFeatureId !== null) {
        map.setFeatureState(
          { source: 'aoc', id: hoveredFeatureId },
          { hover: false }
        )
      }
      hoveredFeatureId = null
      map.getCanvas().style.cursor = ''
    })
    
    // 6. 添加鼠標指針效果
    map.off('mouseenter', 'aoc-fill')
    map.on('mouseenter', 'aoc-fill', () => {
      map.getCanvas().style.cursor = 'pointer'
    })

    // 8. fitBounds（平滑過渡，使用緩動函數）
    const bbox = turf.bbox(geojson)
    activeAocBounds.value = {
      west: bbox[0],
      south: bbox[1],
      east: bbox[2],
      north: bbox[3]
    }
    map.fitBounds(bbox, { 
      padding: 40, 
      duration: 1000, 
      easing: t => t * (2 - t) // easeOutQuad緩動效果
    })


    // 9. 檢查酒莊檔案（僅對非 Bordeaux_AOC 的區域檢查）
    const aocId = aocFile.replace('.geojson', '')
    // Bordeaux_AOC 是整體大區，沒有特定酒莊檔案，跳過檢查
    if (!isBordeauxAOC && aocId !== 'Bordeaux_AOC') {
      hasChateauxFile.value = await checkChateauxFile(aocId)
    } else {
      hasChateauxFile.value = false
    }
  } catch (err) {
    console.error('載入 geojson 失敗:', err)
    mapError.value = `載入 geojson 失敗: ${err.message}`
  } finally {
    isLoading.value = false
  }
}

// 重置地圖
const resetMap = () => {
  emit('resetMap')
}

// 切換 3D 模式（僅控制地形，保持產區平面顯示）
const toggle3D = () => {
  if (!map) return
  
  is3D.value = !is3D.value
  terrainEnabled.value = is3D.value // 同步地形狀態
  
  if (is3D.value) {
    // 啟用 3D 視角和地形
    map.setTerrain({
      source: 'mapbox-dem',
      exaggeration: 1.5
    })
    map.easeTo({ pitch: 60, duration: 800 })
    
    console.log('[3D] 已開啟 3D 視角和地形')
  } else {
    // 關閉 3D 視角和地形
    map.setTerrain(null)
    map.easeTo({ pitch: 0, duration: 800 })
    
    if (map.getLayer('aoc-fill')) {
      map.setLayoutProperty('aoc-fill', 'visibility', 'visible')
    }
    
    console.log('[3D] 已關閉 3D 視角和地形')
  }
}

// 切換等高線
const toggleContours = () => {
  if (!map) {
    console.error('[等高線] 地圖尚未初始化')
    return
  }
  
  contoursEnabled.value = !contoursEnabled.value
  
  console.log('[等高線] ========== 等高線切換 ==========')
  console.log('[等高線] 目標狀態:', contoursEnabled.value ? '開啟' : '關閉')
  console.log('[等高線] 當前縮放級別:', map.getZoom().toFixed(2))
  console.log('[等高線] 當前中心點:', map.getCenter())
  console.log('[等高線] 地圖樣式已載入:', map.isStyleLoaded())
  
  // 檢查數據源是否存在
  const source = map.getSource('contours')
  console.log('[等高線] 數據源存在:', !!source)
  if (source) {
    console.log('[等高線] 數據源類型:', source.type)
  }
  
  // 檢查圖層是否存在
  const contoursLayer = map.getLayer('contours')
  const labelsLayer = map.getLayer('contour-labels')
  console.log('[等高線] contours 圖層存在:', !!contoursLayer)
  console.log('[等高線] contour-labels 圖層存在:', !!labelsLayer)
  
  if (contoursLayer) {
    const visibility = map.getLayoutProperty('contours', 'visibility')
    console.log('[等高線] contours 當前visibility:', visibility)
  }
  
  if (contoursEnabled.value) {
    // 顯示等高線圖層
    if (contoursLayer) {
      map.setLayoutProperty('contours', 'visibility', 'visible')
      console.log('[等高線] ✅ contours 圖層已設為可見')
      
      // 確認設置成功
      setTimeout(() => {
        const newVisibility = map.getLayoutProperty('contours', 'visibility')
        console.log('[等高線] 設置後的visibility:', newVisibility)
      }, 100)
    } else {
      console.error('[等高線] ❌ contours 圖層不存在，無法顯示')
      console.log('[等高線] 💡 這可能是因為：')
      console.log('[等高線]    1. Mapbox Token 無效或缺失')
      console.log('[等高線]    2. Token 沒有 Terrain 數據權限')
      console.log('[等高線]    3. 使用 OSM 底圖（不支援等高線）')
    }
    
    if (labelsLayer) {
      map.setLayoutProperty('contour-labels', 'visibility', 'visible')
      console.log('[等高線] ✅ contour-labels 圖層已設為可見')
    } else {
      console.error('[等高線] ❌ contour-labels 圖層不存在')
    }
    
    console.log('[等高線] 💡 提示: 請放大到 zoom 9 以上查看等高線')
    console.log('[等高線] 💡 金黃=100m倍數，橙黃=50m倍數，橙色=其餘；每10公尺標示高度（公尺）')
  } else {
    // 隱藏等高線圖層
    if (contoursLayer) {
      map.setLayoutProperty('contours', 'visibility', 'none')
      console.log('[等高線] contours 圖層已隱藏')
    }
    if (labelsLayer) {
      map.setLayoutProperty('contour-labels', 'visibility', 'none')
      console.log('[等高線] contour-labels 圖層已隱藏')
    }
  }
  console.log('[等高線] ====================================')
}

const syncResponsiveLayout = () => {
    const nextIsMobile = window.innerWidth <= 9999
    const changed = nextIsMobile !== isMobile.value
    isMobile.value = nextIsMobile

  if (changed) {
    mobileLayersOpen.value = false
    if (nextIsMobile) {
      mobileInfoSheetState.value = 'peek'
      infoBarCollapsed.value = true
    } else {
      mobileInfoSheetState.value = 'full'
      infoBarCollapsed.value = false
    }
  }
}

const toggleMobileLayers = () => {
  mobileLayersOpen.value = !mobileLayersOpen.value
}

const closeMobileToolsExcept = (tool) => {
  if (tool !== 'aoc' && props.mobileAocDrawerOpen) {
    emit('openAOCList', false)
  }

  if (tool !== 'layers') {
    mobileLayersOpen.value = false
  }

  if (tool !== 'info' && mobileInfoSheetState.value !== 'peek') {
    setInfoSheetState('peek')
  }

  if (tool !== '3d' && is3D.value) {
    toggle3D()
  }
}

const toggleMobileTool = (tool) => {
  if (!isMobile.value) return

  const activeMap = {
    aoc: props.mobileAocDrawerOpen,
    layers: mobileLayersOpen.value,
    '3d': is3D.value,
    info: mobileInfoSheetState.value !== 'peek'
  }

  const isActive = !!activeMap[tool]

  if (isActive) {
    closeMobileToolsExcept(null)
    return
  }

  closeMobileToolsExcept(tool)

  if (tool === 'aoc') {
    emit('openAOCList', true)
    return
  }

  if (tool === 'layers') {
    mobileLayersOpen.value = true
    return
  }

  if (tool === '3d') {
    if (!is3D.value) toggle3D()
    return
  }

  if (tool === 'info') {
    setInfoSheetState('half')
  }
}

const setInfoSheetState = (state) => {
  mobileInfoSheetState.value = state
  infoBarCollapsed.value = state === 'peek'
}

const cycleInfoSheetState = (direction) => {
  const order = ['peek', 'half', 'full']
  const currentIndex = order.indexOf(mobileInfoSheetState.value)
  const nextIndex = Math.min(order.length - 1, Math.max(0, currentIndex + direction))
  setInfoSheetState(order[nextIndex])
}

const onInfoSheetTouchStart = (event) => {
  const touch = event.touches?.[0]
  if (!touch) return
  infoSheetTouchStartY = touch.clientY
}

const onInfoSheetTouchEnd = (event) => {
  const touch = event.changedTouches?.[0]
  if (!touch) return
  const deltaY = touch.clientY - infoSheetTouchStartY
  if (Math.abs(deltaY) < 28) return
  if (deltaY < 0) {
    cycleInfoSheetState(1)
  } else {
    cycleInfoSheetState(-1)
  }
}

const toggleInfoPanel = () => {
  if (!isMobile.value) {
    infoBarCollapsed.value = !infoBarCollapsed.value
    return
  }
  if (mobileInfoSheetState.value === 'peek') {
    setInfoSheetState('half')
  } else {
    setInfoSheetState('peek')
  }
}

const toggleMobileInfo = () => {
  if (mobileInfoSheetState.value === 'peek') {
    setInfoSheetState('half')
  } else if (mobileInfoSheetState.value === 'half') {
    setInfoSheetState('full')
  } else {
    setInfoSheetState('peek')
  }
}

// ── 地圖點選偵測（AOC 或土壤，視地質模式而定）──────────────────
const registerAocClickHandler = () => {
  if (!map || !supabase) return

  map.on('click', async (e) => {
    // 地質圖層或酒莊 marker 已攔截 → 跳過
    if (chateauMarkerJustClicked) return

    const { lng, lat } = e.lngLat

    // 關閉舊 popup
    if (aocClickPopup) { aocClickPopup.remove(); aocClickPopup = null }

    // ── 地質模式開啟：優先嘗試 PostGIS 土壤查詢 ──────────────────
    // 處理「點擊落在地質多邊形間隙」的情況（圖層事件不觸發）
    // ── 顯示 AOC 點選 popup ─────────────────────────
    let data, error
    try {
      ;({ data, error } = await supabase.rpc('get_aoc_at_point', {
        p_lng: lng,
        p_lat: lat
      }))
    } catch {
      return
    }

    if (error || !data || data.length === 0) return

    const rows = data.map((d, i) => {
      const aocLabel = d.aoc_id
        .replace('_AOC', '')
        .replace(/-/g, ' ')
        .replace(/_/g, ' ')
      const areaText = d.area_ha
        ? `${d.area_ha.toLocaleString('zh-TW')} 公頃`
        : ''
      const groupLabel = d.group_name.replace('-', ' / ')
      const isSmallest = i === 0
      return `<div class="aoc-point-row${isSmallest ? ' aoc-point-primary' : ''}">
        <span class="aoc-point-name">${aocLabel}</span>
        <span class="aoc-point-meta">${groupLabel}${areaText ? ' · ' + areaText : ''}</span>
      </div>`
    }).join('')

    const popupEl = document.createElement('div')
    popupEl.className = 'aoc-point-popup'
    popupEl.innerHTML = `
      <div class="aoc-point-header">📍 點選位置所在 AOC</div>
      ${rows}
      <div class="aoc-point-coords">${lat.toFixed(5)}°N / ${Math.abs(lng).toFixed(5)}°${lng < 0 ? 'W' : 'E'}</div>
    `

    aocClickPopup = new mapboxgl.Popup({ maxWidth: '320px', offset: 10, closeButton: true })
      .setLngLat([lng, lat])
      .setDOMContent(popupEl)
      .addTo(map)
  })
}

// ══════════════════════════════════════════════════════════════
//  氣候熱力圖（僅對當前載入的 AOC GeoJSON 圖層著色）
// ══════════════════════════════════════════════════════════════

const loadClimateData = async () => {
  if (climateData.value) return  // 已載入
  const res = await fetch('/data/bordeaux-climate.json')
  if (!res.ok) throw new Error('無法載入氣候資料')
  const json = await res.json()
  climateData.value     = json.aocs
  climateStats.value    = json.global
  climateStatsSun.value = json.globalSun  || null
  climateStatsRain.value= json.globalRain || null
  climateYears.value    = json.meta.years
  climateYearAvg.value  = json.meta.yearAvg
  climateYearSun.value  = json.meta.yearSunAvg  || []
  climateYearRain.value = json.meta.yearRainAvg || []
}

// 數值 → 顏色（共用，支援 temp / sun / rain）
const valueToClimateColor = (val, indicator) => {
  let stats, stops
  if (indicator === 'sun') {
    stats = climateStatsSun.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    // 日照：藍(少) → 淡黃 → 橙黃(多)
    stops = [
      [min,        [120, 81, 169]],   // 深紫（陰雨）
      [mean - 20,  [145, 191, 219]],
      [mean,       [255, 255, 191]],
      [mean + 20,  [254, 224,  72]],
      [max,        [253, 141,  60]],  // 橙（豔陽）
    ]
  } else if (indicator === 'rain') {
    stats = climateStatsRain.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    // 降雨：橙紅(乾) → 淡黃 → 藍(濕)
    stops = [
      [min,        [253, 174,  97]],  // 乾燥橙
      [mean - 15,  [255, 255, 191]],
      [mean,       [171, 217, 233]],
      [mean + 15,  [ 74, 144, 226]],
      [max,        [ 44,  62, 160]],  // 深藍（濕）
    ]
  } else {
    // temp（原有邏輯）
    stats = climateStats.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [
      [min,        [69,  117, 180]],
      [mean - 1.5, [145, 191, 219]],
      [mean,       [255, 255, 191]],
      [mean + 1.5, [252, 141,  89]],
      [max,        [215,  48,  39]],
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
  return `rgb(${stops[stops.length-1][1].join(',')})`
}

// 舊函式別名（保留，避免其他地方呼叫失敗）
const tempToClimateColor = (temp) => valueToClimateColor(temp, 'temp')

// 將目前指標顏色套用到 aoc-fill 圖層
const applyClimateColor = (year) => {
  if (!map || !climateData.value) return
  if (!map.getLayer('aoc-fill')) return
  const cfg     = currentIndicatorConfig.value
  const aocFile = props.activeAOC?.aoc || ''
  const aocId   = aocFile.replace('.geojson', '')
  const idx     = climateYears.value.indexOf(year)
  const aocInfo = climateData.value[aocId]
  const stats   = currentGlobalStats.value

  let value
  if (aocInfo?.[cfg.dataKey]?.[idx] != null) {
    value = aocInfo[cfg.dataKey][idx]
  } else {
    value = currentYearAvgArr.value[idx] ?? (stats?.mean ?? 20)
  }
  const color = valueToClimateColor(value, cfg.id)
  map.setPaintProperty('aoc-fill', 'fill-color', color)
  map.setPaintProperty('aoc-fill', 'fill-opacity', 0.75)
}

const setClimateIndicator = (id) => {
  climateIndicator.value = id
  applyClimateColor(climateYear.value)
}

// 還原 aoc-fill 為預設的 group 顏色
const restoreAocFillColor = () => {
  if (!map || !map.getLayer('aoc-fill')) return
  const group = props.activeAOC?.group || ''
  const aoc   = props.activeAOC?.aoc   || ''
  let fill = '#8B0000'
  if (group === 'Regional' && aoc !== 'Bordeaux_AOC.geojson') fill = '#8B5C2A'
  else if (group.includes('LeftBank'))  fill = '#DC143C'
  else if (group.includes('RightBank')) fill = '#4169E1'
  else if (group === 'Sauternais')      fill = '#FFD700'
  else if (group === 'Entre-Deux-Mers') fill = '#2E8B57'
  map.setPaintProperty('aoc-fill', 'fill-color', fill)
  map.setPaintProperty('aoc-fill', 'fill-opacity', [
    'case', ['boolean', ['feature-state', 'hover'], false], 0.35, 0.1
  ])
}

const onClimateYearChange = () => { applyClimateColor(climateYear.value) }

const toggleClimate = async () => {
  if (!map) return
  // 自動收合圖層面板
  layersPanelOpen.value = false
  mobileLayersOpen.value = false

  if (!climateEnabled.value) {
    // ── 開啟 ──
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
    // ── 關閉 ──
    climateEnabled.value = false
    restoreAocFillColor()
  }
}


// 亂數顏色產生器
function randomColor(alpha = 0.3) {
  const r = Math.floor(Math.random() * 200)
  const g = Math.floor(Math.random() * 200)
  const b = Math.floor(Math.random() * 200)
  return `rgba(${r},${g},${b},${alpha})`
}

// 初始化地圖
const initMap = async (retry = 0) => {
  try {
    if (!mapContainer.value) {
      if (retry < 5) {
        console.log(`嘗試初始化地圖 (${retry + 1}/5)...`)
        setTimeout(() => initMap(retry + 1), 200)
      } else {
        console.error('無法獲取地圖容器')
        mapError.value = '無法獲取地圖容器'
      }
      return
    }

    // 使用統一的 Token 取得邏輯
    const MAPBOX_TOKEN = getMapboxToken()
    console.log('[MapSection] MAPBOX_TOKEN:', MAPBOX_TOKEN ? `${MAPBOX_TOKEN.substring(0, 20)}...` : '未取得')

    let chosenStyle
    const useMapbox = shouldUseMapbox(MAPBOX_TOKEN)
    console.log('[MapSection] useMapbox =', useMapbox)
    
    if (useMapbox) {
      // 使用 Mapbox 樣式
      mapboxgl.accessToken = MAPBOX_TOKEN
      try { 
        if (typeof mapboxgl.setTelemetryEnabled === 'function') {
          mapboxgl.setTelemetryEnabled(false) 
        }
      } catch {}
      chosenStyle = getMapboxStyleUrl(MAPBOX_TOKEN, 'satellite-streets-v12')
      if (debug) console.log('[Mapbox] 使用 Mapbox 樣式 (satellite-streets-v12)')
    } else {
      // 退回 OSM Raster
      // 設置一個假的 token 以避免 Mapbox GL 驗證錯誤（使用 OSM 樣式時不會實際用到）
      mapboxgl.accessToken = 'pk.notarealtoken'
      // 在設置樣式前就禁用遙測，避免發送到 events.mapbox.com
      try { 
        if (typeof mapboxgl.setTelemetryEnabled === 'function') {
          mapboxgl.setTelemetryEnabled(false) 
        }
      } catch {}
      chosenStyle = getOSMStyle()
      if (!MAPBOX_TOKEN) {
        console.warn('[Mapbox] 未偵測到 VITE_MAPBOX_TOKEN，已暫用 OSM 背景。')
      }
    }

    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: chosenStyle,
      center: [-0.57, 44.84],
      zoom: 9,
      pitch: is3D.value ? 45 : 0,
      bearing: 0,
      // 明確禁用所有遙測和追蹤
      trackResize: true,
      preserveDrawingBuffer: false,
      refreshExpiredTiles: true,
      maxBounds: undefined,
      // 禁用 hash 和 attribution 中的追蹤
      hash: false
    })
    
    map.on('load', async () => {
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')
      map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
      
      // 添加Mapbox DEM（數字高程模型）數據源用於3D地形
      if (useMapbox) {
        map.addSource('mapbox-dem', {
          type: 'raster-dem',
          url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
          tileSize: 512,
          maxzoom: 14
        })
        
        // 添加天空圖層使3D效果更逼真
        map.addLayer({
          'id': 'sky',
          'type': 'sky',
          'paint': {
            'sky-type': 'atmosphere',
            'sky-atmosphere-sun': [0.0, 90.0],
            'sky-atmosphere-sun-intensity': 15
          }
        })
        
        // 添加等高線數據源和圖層
        map.addSource('contours', {
          type: 'vector',
          url: 'mapbox://mapbox.mapbox-terrain-v2'
        })
        
        console.log('[等高線] ========== 等高線初始化 ==========')
        console.log('[等高線] 數據源已添加: mapbox://mapbox.mapbox-terrain-v2')
        
        // 添加等高線圖層
        map.addLayer({
          'id': 'contours',
          'type': 'line',
          'source': 'contours',
          'source-layer': 'contour',
          'layout': {
            'line-join': 'round',
            'line-cap': 'round',
            'visibility': 'none' // 預設隱藏
          },
          'paint': {
            'line-color': [
              'case',
              ['==', ['%', ['to-number', ['get', 'ele']], 100], 0], '#FFD700',
              ['==', ['%', ['to-number', ['get', 'ele']], 50], 0], '#FFAA00',
              '#FF7733'
            ],
            'line-width': [
              'case',
              ['==', ['%', ['to-number', ['get', 'ele']], 50], 0],
              ['interpolate', ['linear'], ['zoom'], 9, 0.9, 11, 1.6, 13, 2.2, 16, 3],
              ['interpolate', ['linear'], ['zoom'], 9, 0.3, 11, 0.7, 13, 1, 16, 1.5]
            ],
            'line-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              9, 0.4,
              11, 0.6,
              13, 0.8,
              16, 0.9
            ]
          },
          'minzoom': 9 // 降低最小縮放級別
        })
        console.log('[等高線] ✅ contours 圖層已添加 (minzoom: 9, 默認隱藏)')
        console.log('[等高線] 配置: 橙色線條, 透明度隨zoom調整, 無filter限制')
        
        // 添加等高線標籤圖層（顯示高度數字）
        map.addLayer({
          'id': 'contour-labels',
          'type': 'symbol',
          'source': 'contours',
          'source-layer': 'contour',
          'layout': {
            'symbol-placement': 'line',
            'text-field': ['concat', ['to-string', ['get', 'ele']], 'm'],
            'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
            'text-size': [
              'interpolate',
              ['linear'],
              ['zoom'],
              10, 9,
              13, 11,
              16, 13
            ],
            'text-padding': 25,
            'visibility': 'none' // 預設隱藏
          },
          'paint': {
            'text-color': '#FFD700', // 金黃色，更清晰
            'text-halo-color': 'rgba(0,0,0,0.8)', // 黑色光暈
            'text-halo-width': 2,
            'text-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              10, 0.5,
              12, 0.8,
              14, 1
            ]
          },
          'filter': ['==', ['%', ['to-number', ['get', 'ele']], 10], 0], // 每10公尺顯示標籤
          'minzoom': 10 // 標籤在zoom 10以上顯示
        })
        console.log('[等高線] ✅ contour-labels 圖層已添加 (minzoom: 10, 每10m顯示標籤+公尺單位)')
        console.log('[等高線] ====================================')
      }
      
      // 預設顯示波爾多整體
      await showAOCGeojson('Regional', 'Bordeaux_AOC.geojson')

      // 註冊 AOC 點選偵測（PostGIS get_aoc_at_point）
      registerAocClickHandler()


    })
    
    map.on('error', (err) => {
      console.error('地圖錯誤:', err)
      console.log("Ignored Mapbox Error:", err.error?.message || err)
    })
    
    mapError.value = null
  } catch (err) {
    console.error('地圖初始化錯誤:', err)
    mapError.value = `初始化錯誤: ${err.message}`
  }
}

// 取得並驗證酒莊資料
const loadChateauxData = async (aocId) => {
  const chateauFilePath = `/chateaux/coordinates_${aocId}.json`
  const response = await fetch(chateauFilePath, {
    headers: { 'Accept': 'application/json' },
    cache: 'no-store'
  })

  if (!response.ok) {
    throw new Error(`無法載入酒莊資料 (${response.status})`)
  }

  const contentType = (response.headers.get('content-type') || '').toLowerCase()
  if (!contentType.includes('application/json')) {
    throw new Error('酒莊資料格式錯誤')
  }

  const raw = await response.text()
  let parsed
  try {
    parsed = JSON.parse(raw)
  } catch {
    throw new Error('酒莊資料 JSON 解析失敗')
  }

  if (!Array.isArray(parsed)) {
    throw new Error('酒莊資料格式錯誤')
  }

  return parsed
}

// 檢查是否有酒莊文件
const checkChateauxFile = async (aocId) => {
  try {
    const chateaux = await loadChateauxData(aocId)
    chateauxDataCache.set(aocId, chateaux)

    const hasData = chateaux.length > 0
    if (debug) console.log('酒莊文件檢查結果:', hasData, `(${aocId})`)

    return hasData
  } catch (err) {
    if (debug) console.warn('檢查酒莊文件時出錯:', aocId, err.message)
    chateauxDataCache.delete(aocId)
    return false
  }
}

// 顯示/隱藏酒莊標記
const toggleChateauxMarkers = async () => {
  if (showingChateaux.value) {
    removeChateauxMarkers()
    showingChateaux.value = false
  } else {
    await showChateauxMarkers()
    showingChateaux.value = true
  }
}

// 讀取當前用戶在某 AOC 的品飲筆記，回傳 Map<chateau_name, {id, status}>
const loadTastingNotesForAOC = async (aocId) => {
  if (!supabase || !authState.user) return new Map()
  const { data, error } = await supabase
    .from('tasting_notes')
    .select('id, chateau_name, status')
    .eq('user_id', authState.user.id)
    .eq('aoc_id', aocId)
  if (error) { console.warn('載入品飲筆記失敗:', error.message); return new Map() }
  return new Map(data.map(r => [r.chateau_name, { id: r.id, status: r.status }]))
}

// 新增/更新 品飲筆記（地圖 popup 快速標記，vintage = null）
const upsertTastingNote = async (aocId, chateauName, status) => {
  if (!supabase || !authState.user) return null
  // 先查是否已有 null-vintage 的筆記（partial index 不支援 Supabase upsert API）
  const { data: existing } = await supabase
    .from('tasting_notes')
    .select('id, status')
    .eq('user_id', authState.user.id)
    .eq('aoc_id', aocId)
    .eq('chateau_name', chateauName)
    .is('vintage', null)
    .maybeSingle()
  if (existing) {
    const { data, error } = await supabase
      .from('tasting_notes')
      .update({ status })
      .eq('id', existing.id)
      .select('id, status')
      .single()
    if (error) { console.warn('更新品飲筆記失敗:', error.message); return null }
    return data
  } else {
    const { data, error } = await supabase
      .from('tasting_notes')
      .insert({ user_id: authState.user.id, aoc_id: aocId, chateau_name: chateauName, status })
      .select('id, status')
      .single()
    if (error) { console.warn('新增品飲筆記失敗:', error.message); return null }
    return data
  }
}

const deleteTastingNote = async (id) => {
  if (!supabase) return
  const { error } = await supabase.from('tasting_notes').delete().eq('id', id)
  if (error) console.warn('刪除品飲筆記失敗:', error.message)
}

// 顯示酒莊標記
const showChateauxMarkers = async () => {
  if (!map) return
  
  const aocId = props.activeAOC.aoc.replace('.geojson', '')
  
  try {
    const chateaux = chateauxDataCache.has(aocId)
      ? chateauxDataCache.get(aocId)
      : await loadChateauxData(aocId)

    if (!Array.isArray(chateaux) || chateaux.length === 0) {
      throw new Error('此產區尚無酒莊資料')
    }
    
    // 移除所有現有標記
    removeChateauxMarkers()

    // 批次讀取此 AOC 的品飲筆記
    const tastingMap = await loadTastingNotesForAOC(aocId)
    
    // 添加新標記
    chateaux.forEach(chateau => {
      // 建立標記元素
      const el = document.createElement('div')
      el.className = 'chateau-marker'
      el.addEventListener('click', () => {
        chateauMarkerJustClicked = true
        setTimeout(() => { chateauMarkerJustClicked = false }, 0)
      })

      // 創建彈窗內容 DOM
      const popupContainer = document.createElement('div')
      popupContainer.className = 'chateau-popup'
      
      // 標題和發音按鈕容器
      const headerDiv = document.createElement('div')
      headerDiv.className = 'chateau-popup-header'
      
      const titleDiv = document.createElement('h3')
      titleDiv.textContent = chateau.name
      
      const pronunciationBtn = document.createElement('button')
      pronunciationBtn.className = 'pronunciation-btn chateau-pronunciation-btn'
      pronunciationBtn.title = '點擊聽發音'
      pronunciationBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
        </svg>
      `
      pronunciationBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        playChateauPronunciation(chateau.name)
      })
      
      headerDiv.appendChild(titleDiv)
      headerDiv.appendChild(pronunciationBtn)
      popupContainer.appendChild(headerDiv)
      
      // 圖片
      if (chateau.image) {
        const img = document.createElement('img')
        img.src = chateau.image
        img.className = 'chateau-img'
        img.alt = chateau.name
        popupContainer.appendChild(img)
      }
      
      // 等級
      if (chateau.rank) {
        const rankDiv = document.createElement('div')
        rankDiv.className = 'rank'
        rankDiv.textContent = chateau.rank
        popupContainer.appendChild(rankDiv)
      }
      
      // 簡介
      if (chateau.description) {
        const descDiv = document.createElement('div')
        descDiv.className = 'desc'
        descDiv.textContent = chateau.description
        popupContainer.appendChild(descDiv)
      }
      
      // 評級
      if (chateau.rating) {
        const ratingP = document.createElement('p')
        ratingP.className = 'rating'
        ratingP.textContent = chateau.rating
        popupContainer.appendChild(ratingP)
      }
      
      // 網站
      if (chateau.website) {
        const websiteLink = document.createElement('a')
        websiteLink.href = chateau.website
        websiteLink.target = '_blank'
        websiteLink.textContent = '官方網站'
        popupContainer.appendChild(websiteLink)
      }

      // 品飲筆記快速按鈕（僅登入用戶可見）
      if (authState.user) {
        const note = tastingMap.get(chateau.name) // { id, status } | undefined
        let noteState = note ? note : null // 本地追蹤狀態

        const actionsDiv = document.createElement('div')
        actionsDiv.className = 'tasting-actions'

        const triedBtn = document.createElement('button')
        triedBtn.className = 'tasting-btn tried' + (noteState?.status === 'tried' ? ' active' : '')
        triedBtn.textContent = '✓ 我喝過'

        const wishBtn = document.createElement('button')
        wishBtn.className = 'tasting-btn wish' + (noteState?.status === 'wishlist' ? ' active' : '')
        wishBtn.textContent = '♡ 想喝'

        const updateBtnStates = () => {
          triedBtn.className = 'tasting-btn tried' + (noteState?.status === 'tried' ? ' active' : '')
          wishBtn.className = 'tasting-btn wish' + (noteState?.status === 'wishlist' ? ' active' : '')
        }

        triedBtn.addEventListener('click', async (e) => {
          e.stopPropagation()
          triedBtn.disabled = true; wishBtn.disabled = true
          if (noteState?.status === 'tried') {
            // 已是 tried → 取消
            await deleteTastingNote(noteState.id)
            noteState = null
          } else {
            const result = await upsertTastingNote(aocId, chateau.name, 'tried')
            noteState = result
          }
          updateBtnStates()
          triedBtn.disabled = false; wishBtn.disabled = false
        })

        wishBtn.addEventListener('click', async (e) => {
          e.stopPropagation()
          triedBtn.disabled = true; wishBtn.disabled = true
          if (noteState?.status === 'wishlist') {
            // 已是 wishlist → 取消
            await deleteTastingNote(noteState.id)
            noteState = null
          } else {
            const result = await upsertTastingNote(aocId, chateau.name, 'wishlist')
            noteState = result
          }
          updateBtnStates()
          triedBtn.disabled = false; wishBtn.disabled = false
        })

        actionsDiv.appendChild(triedBtn)
        actionsDiv.appendChild(wishBtn)
        popupContainer.appendChild(actionsDiv)
      }

      // 建立彈出視窗
      const popup = new mapboxgl.Popup({ offset: 25, maxWidth: '350px' })
        .setDOMContent(popupContainer)

      // 添加標記到地圖
      const marker = new mapboxgl.Marker(el)
        .setLngLat(chateau.coordinates)
        .setPopup(popup)
        .addTo(map)

      // 保存標記引用以便稍後移除
      currentMarkers.value.push(marker)
    })
  } catch (err) {
    console.error('顯示酒莊標記失敗:', err)
    mapError.value = `無法顯示酒莊標記: ${err.message}`
  }
}

// 移除酒莊標記
const removeChateauxMarkers = () => {
  currentMarkers.value.forEach(marker => marker.remove())
  currentMarkers.value = []
}

// 監聽 AOC 變更
watch(() => props.activeAOC, async (newAOC, oldAOC) => {
  if (newAOC.aoc !== oldAOC?.aoc) {
    await showAOCGeojson(newAOC.group, newAOC.aoc)
    // 若氣候模式開啟，重新套用當前 AOC 的溫度顏色
    if (climateEnabled.value && map) {
      applyClimateColor(climateYear.value)
    }
  }
}, { deep: true })

// 手機裝置不支援地質圖層，自動關閉
watch(isPhoneDevice, (isPhone) => {
})

onMounted(async () => {
  // 注入 BRGM popup 全域樣式
  if (!document.getElementById('brgm-popup-styles')) {
    const style = document.createElement('style')
    style.id = 'brgm-popup-styles'
    style.textContent = BRGM_POPUP_STYLES
    document.head.appendChild(style)
  }
  // 確保 DOM 已渲染
  await nextTick()
  syncResponsiveLayout()
  resizeHandler = () => syncResponsiveLayout()
  window.addEventListener('resize', resizeHandler)
  setTimeout(async () => {
    await initMap()
  }, 100)
})

onUnmounted(() => {
  resetBRGM(map)
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
    resizeHandler = null
  }
  if (map) {
    map.remove()
    map = null
  }
})

// ── 統一 adapters ────────────────────────────────────────────────
const unifiedInfo = computed(() => {
  const aoc = props.activeAOC
  if (!aoc?.aoc) return null
  const r = props.regionInfo
  const name = aoc.aoc.replace('_AOC.geojson', '').replace(/-/g, ' ').replace(/_/g, ' ')
  if (!r) return { name, description: '' }
  const meta = []
  const hectare = aocComputedHectare.value || r.hectare
  if (hectare) meta.push({ label: '面積', value: `${hectare} 公頃` })
  if (r.type) meta.push({ label: '類型', value: r.type })
  const stylesRaw = Array.isArray(r.style) ? r.style : (r.style ? [r.style] : [])
  const grapesRaw = r.grapes ? r.grapes.split(',').map(g => g.trim()) : []
  return {
    name: r.name || name,
    meta,
    styles: stylesRaw,
    grapes: grapesRaw,
    description: r.description || '',
    estates: [],
  }
})
</script>

<style scoped>
/* MapSection.vue 內的樣式 */
.map-section {
  flex: 1;
  position: relative;
  height: 100%;
  overflow: hidden;
}

.map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.map-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
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

.map-header h1 {
  margin: 0;
  font-size: 1.3rem;
  color: #8B0000;
  text-align: center;
  flex: 1;
  text-shadow: 0 1px 4px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.9);
  padding-top: 4px;
}

.map-info-bar {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: white;
  padding: 18px;
  border-radius: 8px;
  max-width: 420px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 10;
  font-size: 16px;
  transition: all 0.3s ease;
  color: #222;
}

.mobile-sheet-handle-wrap {
  display: none;
}

.mobile-sheet-handle {
  width: 52px;
  height: 5px;
  border-radius: 999px;
  background: rgba(107, 31, 31, 0.22);
}

.map-info-bar.collapsed {
  max-width: 350px;
  padding: 12px 18px;
}

.title-buttons {
  display: flex;
  gap: 8px;
  align-items: center;
}

.btn-collapse-inline:hover {
  background: linear-gradient(135deg, #e8e8e8, #d0d0d0);
  border-color: #8B0000;
  color: #8B0000;
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.btn-collapse-inline svg {
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.btn-collapse-inline .btn-text {
  font-size: 0.85rem;
  white-space: nowrap;
}

.map-info-bar.collapsed .btn-collapse-inline .btn-text {
  display: none;
}

.map-info-bar.collapsed .btn-collapse-inline {
  padding: 6px 8px;
  min-width: auto;
}

.info-details {
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: 1000px;
  opacity: 1;
}

.map-info-bar.collapsed .info-details {
  max-height: 0;
  opacity: 0;
  margin: 0;
  padding: 0;
}

.aoc-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  gap: 10px;
  transition: margin 0.3s ease;
}

.map-info-bar.collapsed .aoc-title-row {
  margin-bottom: 0;
}

.info-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.aoc-info-title {
  display: flex;
  align-items: center;
  font-size: 1.35rem;
  font-weight: bold;
  flex: 1;
}

.btn-pronunciation {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 6px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
}

.btn-pronunciation:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

.btn-pronunciation:active {
  transform: scale(0.95);
}

.btn-pronunciation svg {
  width: 20px;
  height: 20px;
}

.btn-reset-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 6px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(180deg, #ff6f61 0%, #ef4f45 100%);
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
  flex-shrink: 0;
}

.btn-reset-icon:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.22);
}

.btn-reset-icon:active {
    transform: translateY(0);
}

.aoc-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
}

.map-buttons {
  display: flex;
  gap: 8px;
}

.btn-reset {
  position: static; 
  padding: 8px 14px;
  background: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.btn-reset:hover {
  background: #d32f2f;
}

.btn-chateaux {
  background-color: #8B0000;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 14px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-chateaux:hover {
  background-color: #A52A2A;
}

.btn-chateaux.btn-locked {
  background-color: #555;
  cursor: not-allowed;
  opacity: 0.7;
}

.lock-inline {
  margin-right: 4px;
  font-size: 0.9em;
}

/* 圖層面板中的鎖定按鈕 */
.btn-layer-locked {
  opacity: 0.55;
  cursor: not-allowed;
}

.lbtn-lock {
  font-size: 0.85rem;
  margin-left: auto;
}

/* free 用戶的 AOC 升級提示 */
.aoc-upgrade-hint {
  margin: 12px 16px;
  padding: 10px 14px;
  background: rgba(139, 92, 42, 0.12);
  border: 1px solid rgba(139, 92, 42, 0.3);
  border-radius: 8px;
  font-size: 0.82rem;
  color: #7a5520;
  text-align: center;
}

.region-info-content {
  margin-top: 12px;
  font-size: 1.15rem;
  line-height: 1.5;
  text-align: left;
  color: #222;
}

.info-header {
  margin-bottom: 8px;
}

.info-header b {
  font-size: 1.25rem;
  color: #333;
}

.description {
  margin-top: 10px;
  font-size: 1.1rem;
  text-align: left;
  color: #2f2f2f;
}

.grape-section {
  margin: 8px 0;
  text-align: left;
}

.grape-title {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 6px;
  text-align: left;
}

.grape-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  text-align: left;
}

.grape-badge {
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.grape-symbol {
  font-weight: bold;
  margin-right: 4px;
  font-size: 0.9rem;
}

.no-info {
  margin-top: 10px;
  color: #888;
  font-size: 1.1rem;
}

.map-controls {
  position: absolute;
  top: 135px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 999;
}

.mobile-panel-header,
.mobile-map-toolbar {
  display: none;
}

.mobile-panel-close {
  border: none;
  border-radius: 999px;
  background: #6b1f1f;
  color: #fff;
  font-weight: 700;
  padding: 8px 14px;
}

/* ══════════════════════════════════════════════
   圖層面板 卡片容器
══════════════════════════════════════════════ */
.map-controls {
  position: absolute;
  top: 135px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 0;
  z-index: 999;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(12px);
  border-radius: 14px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.18);
  padding: 10px;
  min-width: 152px;
  border: 1px solid rgba(0,0,0,0.06);
}

/* 面板標題列 */
.layers-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #8a6a50;
  text-transform: uppercase;
  padding: 0 2px 6px;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  margin-bottom: 8px;
}

.layers-panel-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(138,106,80,0.1);
  border: none;
  cursor: pointer;
  color: #8a6a50;
  font-size: 13px;
  padding: 0;
  line-height: 1;
  transition: background 0.15s;
}
.layers-panel-close:hover {
  background: rgba(138,106,80,0.22);
  color: #5c3a1e;
}

/* 分群組 */
.layer-group {
  margin-bottom: 8px;
}

.layer-group-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #aaa;
  text-transform: uppercase;
  padding: 0 2px 4px;
}

.layer-group-buttons {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* ── 圖層切換按鈕 ── */
.btn-layer {
  display: flex;
  align-items: center;
  gap: 7px;
  width: 100%;
  padding: 7px 10px;
  border: 1.5px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 600;
  background: rgba(0,0,0,0.04);
  color: #444;
  transition: background 0.18s, border-color 0.18s, color 0.18s;
  text-align: left;
}

.btn-layer:hover {
  background: rgba(0,0,0,0.08);
}

.lbtn-icon {
  font-size: 1rem;
  flex-shrink: 0;
  width: 20px;
  text-align: center;
}

.lbtn-text {
  flex: 1;
  white-space: nowrap;
}

/* 狀態指示圓點 */
.lbtn-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  background: #ddd;
  transition: background 0.2s;
}

.lbtn-dot.on {
  background: currentColor;
  box-shadow: 0 0 0 2px rgba(currentColor, 0.25);
}

/* 各圖層色彩主題 */
.btn-layer.color-3d.active         { background: #e8f5e9; border-color: #4CAF50; color: #2e7d32; }
.btn-layer.color-3d:not(.active):hover { border-color: #a5d6a7; }
.btn-layer.color-3d .lbtn-dot.on   { background: #4CAF50; }

.btn-layer.color-contours.active         { background: #f3e5f5; border-color: #9C27B0; color: #6a1b9a; }
.btn-layer.color-contours:not(.active):hover { border-color: #ce93d8; }
.btn-layer.color-contours .lbtn-dot.on   { background: #9C27B0; }

.btn-layer.color-climate.active         { background: #e3f0ff; border-color: #4575b4; color: #1a3a6b; }
.btn-layer.color-climate:not(.active):hover { border-color: #90b8e8; }
.btn-layer.color-climate .lbtn-dot.on   {
  background: linear-gradient(135deg, #4575b4, #d73027);
  background: #d73027;
}

/* 土壤子面板標題 */
.soil-panel-title {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #aaa;
  text-transform: uppercase;
  padding: 2px 2px 6px;
  border-top: 1px solid rgba(0,0,0,0.08);
  margin-top: 2px;
}

/* 土壤折疊動畫 */
.soil-expand-enter-active,
.soil-expand-leave-active {
  transition: max-height 0.25s ease, opacity 0.2s ease;
  overflow: hidden;
  max-height: 400px;
}
.soil-expand-enter-from,
.soil-expand-leave-to {
  max-height: 0;
  opacity: 0;
}

/* ══ 圖層面板收合 — 展開按鈕 ══ */
.layers-reopen-btn {
  position: absolute;
  top: 135px;
  left: 10px;
  z-index: 999;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0,0,0,0.12);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.14);
  padding: 7px 12px;
  font-size: 0.82rem;
  color: #444;
  cursor: pointer;
  white-space: nowrap;
}
.layers-reopen-btn:hover {
  background: rgba(240,240,245,0.98);
  color: #222;
}

/* ══ BRGM 地質圖 浮動面板 ══ */
.brgm-float-panel {
  position: absolute;
  bottom: 80px;
  left: 20px;
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(12px);
  border-radius: 14px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.16);
  border: 1px solid rgba(0,0,0,0.06);
  padding: 10px 14px;
  z-index: 998;
  min-width: 260px;
}
.brgm-float-title {
  font-size: 0.78rem;
  font-weight: 700;
  color: #2d5a27;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(0,0,0,0.08);
}
.brgm-float-label {
  font-size: 0.78rem;
  color: #555;
  min-width: 48px;
}
.brgm-float-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 0 6px;
}
.brgm-float-legend {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 4px;
  border-top: 1px solid rgba(0,0,0,0.07);
}
.brgm-float-src {
  font-size: 0.68rem;
  color: #aaa;
}
.brgm-float-hint {
  font-size: 0.72rem;
  color: #777;
  font-style: italic;
}
.btn-layer.color-brgm.active         { background: #e8f5e9; border-color: #2d5a27; color: #1b5e20; }
.btn-layer.color-brgm:not(.active):hover { border-color: #81c784; }
.btn-layer.color-brgm .lbtn-dot.on   { background: #2d5a27; }

/* ══ 氣候熱力圖 overlay ══ */
.climate-overlay {
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: min(400px, calc(100vw - 44px));
  background: rgba(15, 20, 35, 0.88);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 12px;
  padding: 14px 18px 12px;
  z-index: 999;
  color: #f0f0f0;
  font-family: sans-serif;
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

.climate-footnote {
  font-size: 0.68rem;
  color: rgba(255,255,255,0.45);
  text-align: center;
  margin-top: 8px;
  padding-top: 6px;
  border-top: 1px solid rgba(255,255,255,0.1);
  line-height: 1.4;
}

/* 指標切換分頁 */
.cy-indicator-tabs {
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
}
.cy-ind-btn {
  flex: 1;
  padding: 4px 6px;
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 8px;
  background: rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.7);
  font-size: 0.72rem;
  cursor: pointer;
  text-align: center;
  transition: background 0.15s, color 0.15s;
  white-space: nowrap;
}
.cy-ind-btn:hover { background: rgba(255,255,255,0.16); color: #fff; }
.cy-ind-btn.active {
  background: rgba(255,255,255,0.25);
  color: #fff;
  font-weight: 600;
  border-color: rgba(255,255,255,0.5);
}

.climate-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
}

.cy-close {
  flex-shrink: 0;
  margin-left: auto;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.7);
  border-radius: 50%;
  width: 26px;
  height: 26px;
  font-size: 13px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;
  padding: 0;
}
.cy-close:hover {
  background: rgba(215,48,39,0.6);
  color: #fff;
  border-color: transparent;
}

.cy-year-badge {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cy-year {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ffe082;
}

.cy-golden {
  font-size: 0.78rem;
  background: gold;
  color: #333;
  border-radius: 8px;
  padding: 2px 7px;
  font-weight: 600;
}

.cy-stats {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3px;
}

.cy-aoc-name {
  font-size: 0.72rem;
  color: rgba(255,255,255,0.55);
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
}

.cy-temp {
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
}

.cy-delta {
  font-size: 0.82rem;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 6px;
}

.cy-warm { background: rgba(215,48,39,0.35); color: #ff9999; }
.cy-cool { background: rgba(69,117,180,0.35); color: #99c9ff; }

.climate-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(to right, #4575b4, #ffffbf 50%, #d73027);
  outline: none;
  cursor: pointer;
}
.climate-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid #ffe082;
  box-shadow: 0 1px 4px rgba(0,0,0,0.4);
  cursor: pointer;
}

.climate-year-axis {
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  color: rgba(255,255,255,0.5);
  margin-top: 3px;
  margin-bottom: 12px;
}

.climate-legend {
  margin-top: 4px;
}

.legend-gradient {
  height: 10px;
  border-radius: 5px;
  background: linear-gradient(to right, #4575b4, #91bfdb, #ffffbf, #fc8d59, #d73027);
}
/* 日照：灰紫(陰) → 淡黃 → 橙(豔陽) */
.legend-gradient.legend-sun {
  background: linear-gradient(to right, #785ba9, #91bfdb, #ffffbf, #fde048, #fd8d3c);
}
/* 降雨：橙(乾) → 淡黃 → 藍(濕) */
.legend-gradient.legend-rain {
  background: linear-gradient(to right, #fdb96a, #ffffbf, #abdfe7, #4a90e2, #2c3ea0);
}

.legend-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  color: rgba(255,255,255,0.6);
  margin-top: 3px;
}

/* hover popup from mapbox */
.chp-popup {
  font-family: sans-serif;
  font-size: 13px;
  line-height: 1.5;
  padding: 2px 4px;
}
.chp-name { font-weight: 700; font-size: 14px; margin-bottom: 3px; }
.chp-base { font-size: 11px; color: #aaa; }
.chp-delta { display: inline-block; margin-top: 3px; padding: 1px 6px; border-radius: 4px; font-weight: 600; font-size: 12px; }
.chp-warm { background: rgba(215,48,39,0.2); color: #cc2200; }
.chp-cool { background: rgba(69,117,180,0.2); color: #1a55a0; }
.chp-golden { display: inline-block; margin-top: 4px; font-size: 12px; }

.soil-toggle-panel {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.soil-control-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
}

.btn-soil {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: rgba(30, 30, 30, 0.82);
  color: #eee;
  min-width: 108px;
  width: 108px;
  font-size: 0.85rem;
  text-align: left;
}

.btn-soil:hover {
  background: rgba(0, 0, 0, 0.86);
}

.btn-soil.active {
  color: #111;
  background: #f2f2f2;
  font-weight: 700;
}

.soil-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.35);
  flex-shrink: 0;
}

.soil-opacity-row {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.9);
  padding: 3px 6px;
  border-radius: 4px;
  height: 30px;
}

.soil-opacity-slider {
  width: 72px;
}

.soil-opacity-label {
  font-size: 0.78rem;
  color: #333;
  min-width: 34px;
  text-align: right;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.map-error {
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  background: #f44336;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  z-index: 30;
  max-width: 80%;
  text-align: center;
}

/* 酒莊標記樣式 */
:global(.chateau-marker) {
  width: 15px;
  height: 15px;
  background-color: #8B0000;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

:global(.chateau-popup) {
  padding: 10px;
  min-width: 250px;
  font-size: 1rem;
}

:global(.chateau-popup-header) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 2px solid #e5e7eb;
}

:global(.chateau-popup-header h3) {
  margin: 0;
  color: #8B0000;
  font-size: 1.15rem;
  font-weight: 600;
  flex: 1;
}

:global(.chateau-pronunciation-btn) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 6px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
}

:global(.chateau-pronunciation-btn:hover) {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

:global(.chateau-pronunciation-btn:active) {
  transform: scale(0.95);
}

:global(.chateau-pronunciation-btn svg) {
  width: 18px;
  height: 18px;
}

:global(.chateau-img) {
  display: block;
  max-width: 200px;
  max-height: 140px;
  width: auto;
  height: auto;
  margin: 10px auto 8px auto;
  border-radius: 6px;
  object-fit: contain;
  box-shadow: 0 1px 4px rgba(0,0,0,0.12);
}

:global(.chateau-popup h3) {
  margin: 0 0 5px 0;
  color: #8B0000;
  font-size: 1rem;
}

:global(.chateau-popup .rank) {
  margin: 8px 0;
  padding: 4px 10px;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: #333;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 4px;
  display: inline-block;
}

:global(.chateau-popup .desc) {
  margin: 10px 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
}

:global(.chateau-popup .rating) {
  margin: 8px 0;
  font-size: 1rem;
  font-style: italic;
  color: #666;
}

:global(.chateau-popup a) {
  color: #4169E1;
  text-decoration: none;
  font-size: 1rem;
  display: inline-block;
  margin-top: 8px;
  font-weight: 500;
}

:global(.chateau-popup a:hover) {
  text-decoration: underline;
}

:global(.tasting-actions) {
  display: flex;
  gap: 8px;
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid #e5e7eb;
}

:global(.tasting-btn) {
  flex: 1;
  padding: 6px 10px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #f3f4f6;
  color: #555;
}

:global(.tasting-btn.tried) {
  border-color: #16a34a;
  color: #16a34a;
}

:global(.tasting-btn.tried.active) {
  background: #16a34a;
  color: #fff;
}

:global(.tasting-btn.wish) {
  border-color: #dc2626;
  color: #dc2626;
}

:global(.tasting-btn.wish.active) {
  background: #dc2626;
  color: #fff;
}

:global(.tasting-btn:hover:not(:disabled)) {
  opacity: 0.85;
  transform: translateY(-1px);
}

:global(.tasting-btn:disabled) {
  opacity: 0.5;
  cursor: wait;
}

/* 修改 style-badge 相關樣式以支援多個風格標籤 */
.style-badges {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}

.style-badge {
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  display: inline-block;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.region-type {
  font-size: 1.1rem;
  color: #666;
  font-weight: normal;
}

/* 響應式設計 */
@media (max-width: 9999px) {
  .map-info-bar,
  .map-info-bar .region-info-content,
  .map-info-bar .description,
  .map-info-bar .grape-title,
  .map-info-bar .info-header,
  .map-info-bar .region-type,
  .map-info-bar .region-hectare,
  .map-info-bar .no-info {
    color: #1f1f1f;
  }

  .map-section {
    padding-top: 0;
  }

  .map-info-bar {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    width: min(90vw, 560px);
    bottom: calc(env(safe-area-inset-bottom, 0px) + 110px);
    max-width: none;
    padding: 14px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.97);
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.18);
    max-height: min(42vh, 360px);
    overflow: hidden;
  }

  .mobile-sheet-handle-wrap {
    display: flex;
    justify-content: center;
    padding-bottom: 8px;
    margin-top: -2px;
  }

  .map-info-bar.collapsed {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    width: min(90vw, 560px);
    bottom: calc(env(safe-area-inset-bottom, 0px) + 110px);
    max-width: none;
    padding: 10px 12px;
  }

  .map-info-bar.mobile-half {
    max-height: min(42vh, 360px);
  }

  .map-info-bar.mobile-full {
    max-height: min(62vh, 520px);
  }

  .info-details {
    overflow-y: auto;
    max-height: min(28vh, 220px);
    padding-right: 4px;
  }

  .map-info-bar.mobile-half .info-details {
    max-height: min(28vh, 220px);
  }

  .map-info-bar.mobile-full .info-details {
    max-height: min(48vh, 400px);
  }

  .aoc-title-row {
    gap: 8px;
  }

  .aoc-info-title {
    font-size: 1rem;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .title-buttons {
    flex-shrink: 0;
    gap: 6px;
  }

  .btn-collapse-inline,
  .btn-pronunciation,
  .btn-reset-icon {
    width: 40px;
    height: 40px;
    min-width: 40px;
    padding: 0;
    border-radius: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .btn-collapse-inline {
    background: linear-gradient(180deg, #121212 0%, #050505 100%);
    border: none;
    color: #fff;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.28);
  }

  .btn-collapse-inline .btn-text {
    display: none;
  }

  .btn-collapse-inline svg {
    width: 17px;
    height: 17px;
  }

  .btn-pronunciation {
    border-radius: 12px;
    box-shadow: 0 3px 8px rgba(83, 44, 145, 0.34);
  }

  .map-buttons {
    flex-wrap: wrap;
  }

  .btn-reset,
  .btn-chateaux {
    flex: 1 1 140px;
    font-size: 0.95rem;
  }

  .map-controls {
    top: auto;
    bottom: calc(env(safe-area-inset-bottom, 0px) + 110px);
    left: 50%;
    right: auto;
    width: min(90vw, 560px);
    min-width: 0;
    padding: 14px;
    border-radius: 18px;
    background: rgba(252, 248, 244, 0.98);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.3);
    transform: translateX(-50%) translateY(calc(100% + 18px));
    opacity: 0;
    pointer-events: none;
    transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.22s ease;
    max-height: min(52vh, 420px);
    overflow-y: auto;
  }

  .map-controls.mobile-open {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  /* 行動版面板標題調整 */
  .layers-panel-header {
    font-size: 0.78rem;
    padding-bottom: 10px;
    margin-bottom: 10px;
    color: #6b1f1f;
  }

  .layers-panel-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(107,31,31,0.1);
    color: #6b1f1f;
    font-size: 13px;
    cursor: pointer;
    border: none;
  }

  /* 行動版 layer-group: 2 欄並排 */
  .layer-group-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }

  .btn-layer {
    font-size: 0.8rem;
    padding: 10px 8px;
    border-radius: 10px;
  }

  .soil-control-item {
    flex-direction: column;
    align-items: stretch;
    gap: 6px;
  }

  .btn-soil,
  .soil-opacity-row {
    width: 100%;
    min-width: 0;
  }

  .soil-opacity-slider {
    width: 100%;
  }

  .mobile-map-toolbar {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: min(90vw, 560px);
    bottom: calc(env(safe-area-inset-bottom, 0px) + 24px);
    z-index: 1300;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    transition: grid-template-columns 0.2s ease;
    gap: 8px;
    padding: 8px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
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
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
  }

  .mobile-tool-btn.active {
    background: linear-gradient(180deg, #7b2424 0%, #5f1717 100%);
    color: #fff;
  }

  .mobile-tool-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgba(107, 31, 31, 0.08);
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.02em;
  }

  .mobile-tool-btn.active .mobile-tool-icon {
    background: rgba(255, 255, 255, 0.18);
  }
  
  .map-header h1 {
    width: 100%;
    text-align: center;
    font-size: 1.08rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .map-header {
    padding: 6px 12px;
    min-height: 38px;
    background: rgba(255, 255, 255, 0.72);
  }

}

@media (max-width: 768px) {
  .map-info-bar {
    width: min(92vw, 360px);
  }

  .map-info-bar.collapsed {
    width: min(92vw, 360px);
  }

  .mobile-map-toolbar {
    width: min(92vw, 360px);
  }

  .map-controls {
    width: min(92vw, 360px);
  }
}

@media (max-width: 420px) {
  .map-header {
    padding: 5px 10px;
    min-height: 34px;
  }

  .map-header h1 {
    font-size: 1rem;
  }

  .mobile-map-toolbar {
    width: min(94vw, 340px);
    gap: 6px;
    padding: 6px;
    border-radius: 16px;
  }

  .mobile-tool-btn {
    min-height: 50px;
    border-radius: 13px;
    font-size: 0.72rem;
  }

  .mobile-tool-icon {
    width: 26px;
    height: 26px;
    font-size: 0.74rem;
  }

  .map-controls {
    left: 10px;
    right: 10px;
    width: auto;
    transform: translateY(calc(100% + 18px));
    bottom: calc(env(safe-area-inset-bottom, 0px) + 110px);
    border-radius: 16px;
    max-height: min(52vh, 360px);
  }

  .map-controls.mobile-open {
    transform: translateY(0);
  }

  .map-info-bar {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    width: min(94vw, 340px);
    bottom: calc(env(safe-area-inset-bottom, 0px) + 110px);
    padding: 12px 10px;
    border-radius: 14px;
    max-height: min(56vh, 420px);
  }

  .map-info-bar.collapsed {
    width: min(94vw, 340px);
    bottom: calc(env(safe-area-inset-bottom, 0px) + 110px);
  }

  .map-info-bar.mobile-full {
    max-height: min(66vh, 500px);
  }

  .aoc-info-title {
    font-size: 0.92rem;
  }

  .btn-collapse-inline {
    padding: 5px 8px;
  }

  .btn-pronunciation {
    width: 32px;
    height: 32px;
  }

  .btn-reset-icon {
    width: 32px;
    height: 32px;
    border-radius: 10px;
  }

  .region-info-content,
  .description,
  .grape-title,
  .region-type,
  .region-hectare {
    font-size: 0.95rem;
  }
}

@media (max-width: 360px) {
  .mobile-map-toolbar {
    width: min(96vw, 320px);
    gap: 5px;
    padding: 5px;
  }

  .mobile-tool-btn {
    min-height: 46px;
    font-size: 0.68rem;
  }

  .mobile-tool-icon {
    width: 24px;
    height: 24px;
    font-size: 0.68rem;
  }

  .map-info-bar {
    width: min(96vw, 320px);
    bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
    padding: 10px 9px;
  }

  .map-info-bar.collapsed {
    width: min(96vw, 320px);
    bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  }

  .info-details {
    max-height: min(26vh, 180px);
  }

  .map-info-bar.mobile-full .info-details {
    max-height: min(44vh, 320px);
  }
}

.region-hectare {
  color: #666;
  font-size: 1.1rem;
  font-style: italic;
  margin-left: 5px;
}
</style>

// oxlint-disable-next-line

