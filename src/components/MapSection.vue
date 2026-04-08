<template>
  <section class="map-section">
    <div class="map-header">
      <h1>Bordeaux Wine Region Map</h1>
    </div>
    <div
      class="map-info-bar"
      v-if="activeAOC.aoc"
      :class="{
        collapsed: infoBarCollapsed,
        'mobile-half': isMobile && mobileInfoSheetState === 'half',
        'mobile-full': isMobile && mobileInfoSheetState === 'full'
      }"
    >
      <div
        v-if="isMobile"
        class="mobile-sheet-handle-wrap"
        @touchstart.passive="onInfoSheetTouchStart"
        @touchend="onInfoSheetTouchEnd"
      >
        <div class="mobile-sheet-handle"></div>
      </div>
      <div class="aoc-title-row">
        <span class="aoc-info-title">
          <span class="aoc-dot" :style="{background: aocColor(activeAOC.group)}"></span>
          {{ activeAOC.aoc.replace('_AOC.geojson','').replace(/-/g,' ').replace(/_/g,' ') }}
        </span>
        <div class="title-buttons">
          <button class="btn-collapse-inline" @click.stop="toggleInfoPanel" :title="infoBarCollapsed ? '展開資訊' : '收合資訊'">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline :points="infoBarCollapsed ? '18 15 12 9 6 15' : '6 9 12 15 18 9'"></polyline>
            </svg>
            <span class="btn-text">{{ infoBarCollapsed ? '展開' : '收合' }}</span>
          </button>
          <button class="btn-pronunciation" @click="playPronunciation(activeAOC.aoc)" title="點擊聽發音">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
          </svg>
        </button>
          <button v-if="isMobile" class="btn-reset-icon" @click="resetMap" title="重置地圖">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 3v6h-6"></path>
              <path d="M20.49 15A9 9 0 1 1 21 9"></path>
            </svg>
          </button>
        </div>
      </div>
      <div v-show="!infoBarCollapsed" class="info-details">
        <div class="map-buttons">
        <button v-if="!isMobile" class="btn-reset" @click="resetMap">重置地圖</button>
        <button v-if="hasChateauxFile" class="btn-chateaux" @click="toggleChateauxMarkers">
          {{ showingChateaux ? '隱藏酒莊' : '顯示知名酒莊' }}
        </button>
      </div>
      <div v-if="regionInfo" class="region-info-content">
        <div class="info-header">
          <div>
            <b>{{ regionInfo.name }}</b> <span class="region-type">({{ regionInfo.type }})</span><span v-if="aocComputedHectare || regionInfo.hectare" class="region-hectare"> - {{ aocComputedHectare || regionInfo.hectare }} 公頃</span>
          </div>
          <div class="style-badges">
            <div v-for="style in Array.isArray(regionInfo.style) ? regionInfo.style : [regionInfo.style]" 
                 :key="style" 
                 class="style-badge"
                 :style="{backgroundColor: styleColors[style] || '#999', color: ['白酒', '甜酒'].includes(style) ? '#333' : '#fff'}">
              {{ style }}
            </div>
          </div>
        </div>
        <div v-if="regionInfo.grapes" class="grape-section">
          <div class="grape-title">葡萄品種:</div>
          <div class="grape-badges">
            <div v-for="grape in regionInfo.grapes.split(',').map(g => g.trim())" 
                 :key="grape" 
                 class="grape-badge"
                 :style="{backgroundColor: getGrapeIcon(grape).color, color: getGrapeIcon(grape).color === '#FFFFE0' || getGrapeIcon(grape).color === '#F3E5AB' || getGrapeIcon(grape).color === '#FFFFF0' || getGrapeIcon(grape).color === '#F5F5DC' ? '#333' : '#fff'}">
              <span class="grape-symbol">{{ getGrapeIcon(grape).symbol }}</span>
              {{ grape }}
            </div>
          </div>
        </div>
        <div class="description">{{ regionInfo.description }}</div>
      </div>
      <div v-else class="no-info">無詳細產區資料</div>
      </div>
    </div>
    <div ref="mapContainer" class="map"></div>
    <div class="map-controls" :class="{ 'mobile-open': mobileLayersOpen }">
      <div v-if="isMobile" class="mobile-panel-header">
        <span>圖層與顯示</span>
      </div>
      <button class="btn-3d" @click="toggle3D" v-if="map">
        {{ is3D ? '2D' : '3D' }}
      </button>
      <button class="btn-contours" @click="toggleContours" v-if="map">
        {{ contoursEnabled ? '隱藏等高線' : '顯示等高線' }}
      </button>
      <button class="btn-geology" @click="toggleGeology" v-if="map && !isPhoneDevice">
        {{ geologyEnabled ? '隱藏地質' : '顯示地質' }}
      </button>
      <div v-if="map && geologyEnabled && !isPhoneDevice" class="soil-toggle-panel">
        <div
          v-for="item in geologyLayerConfig"
          :key="item.id"
          class="soil-control-item"
        >
          <button
            class="btn-soil"
            :class="{ active: soilVisibility[item.id] }"
            @click="toggleSoil(item.id)"
          >
            <span class="soil-dot" :style="{ background: item.color }"></span>
            {{ item.label }}
          </button>
          <div class="soil-opacity-row">
            <input
              class="soil-opacity-slider"
              type="range"
              min="0.1"
              max="0.9"
              step="0.05"
              v-model.number="soilOpacity[item.id]"
              @input="applySoilOpacity(item.id)"
            >
            <span class="soil-opacity-label">{{ Math.round(soilOpacity[item.id] * 100) }}%</span>
          </div>
        </div>
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
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as turf from '@turf/turf'
import { 
  getMapboxToken, 
  shouldUseMapbox, 
  getOSMStyle, 
  getMapboxStyleUrl,
  isLikelyDevHost
} from '@/utils/getMapboxToken'
import { supabase } from '@/lib/supabaseClient.js'
import { useDeviceDetection } from '@/utils/deviceDetection.js'

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
  }
})

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
const geologyEnabled = ref(false)
const geologyLoaded = ref(false)
const { isMobile: isPhoneDevice } = useDeviceDetection()
const soilVisibility = ref({
  limestone: true,
  gravel: true,
  clay: true,
  sand: true,
  mixed: true
})
const soilOpacity = ref({
  limestone: 0.55,
  gravel: 0.55,
  clay: 0.55,
  sand: 0.55,
  mixed: 0.55
})
const infoBarCollapsed = ref(false)
const isMobile = ref(false)
const mobileLayersOpen = ref(false)
const mobileInfoSheetState = ref('peek')
const geojsonCache = new Map()
const defaultAOCFillOpacity = 0.1
const activeAocBounds = ref(null)
const aocComputedHectare = ref(null)  // turf.js 計算的精確面積（公頃）
let resizeHandler = null
let infoSheetTouchStartY = 0
let soilPopup = null
let aocClickPopup = null
let geologyClicksRegistered = false
let geologyJustClicked = false  // 旗標：地質圖層剛被點擊，AOC handler 應跳過

const geologyLayerConfig = [
  { id: 'limestone', label: '石灰岩', path: '/geojson/geology/Limestone.geojson', color: '#00E5FF', lineColor: '#007C91' },
  { id: 'gravel', label: '礫石卵石', path: '/geojson/geology/Gravel.geojson', color: '#FF8C00', lineColor: '#8A4C00' },
  { id: 'clay', label: '黏土為主', path: '/geojson/geology/Clay.geojson', color: '#8B4513', lineColor: '#3D1E08' },
  { id: 'sand', label: '砂為主', path: '/geojson/geology/Sand.geojson', color: '#FFD700', lineColor: '#8A7300' },
  { id: 'mixed', label: '混合沉積物', path: '/geojson/geology/Mixed.geojson', color: '#ADFF2F', lineColor: '#4D7A00' }
]

// 土壤類型中文對照（供彈窗使用）
const SOIL_LABELS = {
  limestone: { zh: '石灰岩',    color: '#00E5FF' },
  gravel:    { zh: '礫石/卵石', color: '#FF8C00' },
  clay:      { zh: '黏土',      color: '#8B4513' },
  sand:      { zh: '砂土',      color: '#FFD700' },
  mixed:     { zh: '混合沉積',  color: '#ADFF2F' },
}

// 土壤 × 葡萄品種親和性資料
const GRAPE_AFFINITIES = {
  limestone: {
    grapes: [
      { zh: '梅洛', en: 'Merlot', stars: 3,
        reason: '石灰岩保水性佳，梅洛根系深能吸收深層礦物質，演繹豐腴圓潤帶石灰良液感' },
      { zh: '卡本內弗朗', en: 'Cab. Franc', stars: 2,
        reason: '石灰岩高酸度支架讓品種花香與清展感充分發揮，呈現紅果光輝' }
    ],
    regionNote: '右岸代表土壤 · 聖愛美濃、波美侯'
  },
  gravel: {
    grapes: [
      { zh: '卡本內蘇維濃', en: 'Cab. Sauvignon', stars: 3,
        reason: '礫石排水佳且升溫快，功助卡本內完全成熟，單寧結構強、深色莓果飽滿' },
      { zh: '梅洛', en: 'Merlot', stars: 2,
        reason: '礫石中嵌入黏土夾層賦予豐腴口感，為混釀提供圓潤平衡' }
    ],
    regionNote: '左岸代表土壤 · 梅多克、瑪歌、波雅克'
  },
  clay: {
    grapes: [
      { zh: '梅洛', en: 'Merlot', stars: 3,
        reason: '黏土保水保肥，梅洛早熟特性在此達最佳狀態，酒體豐厚飽滿圓融' },
      { zh: '卡本內弗朗', en: 'Cab. Franc', stars: 2,
        reason: '黏土上展現紅果與辛香，骨架完整且耐陳年' }
    ],
    regionNote: '波美侯藍黏土 · Pétrus 的秘密'
  },
  sand: {
    grapes: [
      { zh: '梅洛', en: 'Merlot', stars: 2,
        reason: '砂土溫暖貧瘠，梅洛早熟特性適應最佳，風格清鮮輕盈' },
      { zh: '卡本內弗朗', en: 'Cab. Franc', stars: 2,
        reason: '砂土上的 Cab Franc 香氣精緻，花果風味突出、酒體嫩滑' }
    ],
    regionNote: '河岸低地 · Côtes 地區'
  },
  mixed: {
    grapes: [
      { zh: '梅洛', en: 'Merlot', stars: 2,
        reason: '礫石黏土交雜，梅洛展現多層次結構與複雜度' },
      { zh: '卡本內蘇維濃', en: 'Cab. Sauvignon', stars: 2,
        reason: '混合土壤平衡熱量與礦物感，支持傳統多品種混釀風格' }
    ],
    regionNote: '複雜地形 · 波爾多混釀傳統'
  }
}

// 生成土壤品種推薦 HTML（同步，無 loading）
const renderGrapeRecommendation = (soilType) => {
  const aff = GRAPE_AFFINITIES[soilType]
  if (!aff) return ''
  const starHtml = (n) =>
    `<span class="grape-stars stars-${n}">${'★'.repeat(n)}${'☆'.repeat(3 - n)}</span>`
  const cards = aff.grapes.map(g => `
    <div class="grape-card">
      <div class="grape-name-row">
        <span class="grape-name-zh">${g.zh}</span>
        <span class="grape-name-en">${g.en}</span>
        ${starHtml(g.stars)}
      </div>
      <div class="grape-reason">${g.reason}</div>
    </div>`).join('')
  return `
    <div class="geology-grape-section">
      <div class="grape-section-title">🍇 最適葡萄品種</div>
      ${cards}
      <div class="grape-region-note">${aff.regionNote}</div>
    </div>`
}

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
          'fill-opacity': geologyEnabled.value ? 0 : [
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
      map.setPaintProperty('aoc-fill', 'fill-opacity', geologyEnabled.value ? 0 : [
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

    if (geologyEnabled.value) {
      updateGeologyFilter()
    }

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
      if (geologyEnabled.value && map) {
        toggleGeology()
      }
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

const setAOCFillTransparent = (isTransparent) => {
  if (!map || !map.getLayer('aoc-fill')) return
  if (isTransparent) {
    map.setPaintProperty('aoc-fill', 'fill-opacity', 0)
    return
  }
  map.setPaintProperty('aoc-fill', 'fill-opacity', [
    'case',
    ['boolean', ['feature-state', 'hover'], false],
    defaultAOCFillOpacity + 0.2,
    defaultAOCFillOpacity
  ])
}

const getGeometryBounds = (coords, bounds = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }) => {
  if (!Array.isArray(coords) || coords.length === 0) return bounds
  if (typeof coords[0] === 'number' && typeof coords[1] === 'number') {
    const x = coords[0]
    const y = coords[1]
    if (x < bounds.minX) bounds.minX = x
    if (x > bounds.maxX) bounds.maxX = x
    if (y < bounds.minY) bounds.minY = y
    if (y > bounds.maxY) bounds.maxY = y
    return bounds
  }
  coords.forEach(c => getGeometryBounds(c, bounds))
  return bounds
}

const addViewportCenterProperty = (geojson) => {
  if (!geojson?.features) return geojson
  geojson.features.forEach(feature => {
    if (!feature.properties) feature.properties = {}
    if (typeof feature.properties._cx === 'number' && typeof feature.properties._cy === 'number') return
    if (!feature.geometry?.coordinates) return
    const b = getGeometryBounds(feature.geometry.coordinates)
    if (!Number.isFinite(b.minX) || !Number.isFinite(b.maxX) || !Number.isFinite(b.minY) || !Number.isFinite(b.maxY)) return
    feature.properties._cx = (b.minX + b.maxX) / 2
    feature.properties._cy = (b.minY + b.maxY) / 2
  })
  return geojson
}

const updateGeologyFilter = () => {
  if (!map || !geologyEnabled.value) return
  const viewBounds = map.getBounds()
  let west = viewBounds.getWest()
  let east = viewBounds.getEast()
  let south = viewBounds.getSouth()
  let north = viewBounds.getNorth()

  if (activeAocBounds.value) {
    west = Math.max(west, activeAocBounds.value.west)
    east = Math.min(east, activeAocBounds.value.east)
    south = Math.max(south, activeAocBounds.value.south)
    north = Math.min(north, activeAocBounds.value.north)
  }

  const hasVisibleArea = west <= east && south <= north

  geologyLayerConfig.forEach(item => {
    const fillId = `geology-${item.id}-fill`
    const lineId = `geology-${item.id}-line`
    const geometryFilter = hasVisibleArea
      ? [
          'all',
          ['>=', ['get', '_cx'], west],
          ['<=', ['get', '_cx'], east],
          ['>=', ['get', '_cy'], south],
          ['<=', ['get', '_cy'], north]
        ]
      : ['==', ['get', '_cx'], -999999]

    if (map.getLayer(fillId)) map.setFilter(fillId, geometryFilter)
    if (map.getLayer(lineId)) map.setFilter(lineId, geometryFilter)
  })
}

const setGeologyVisibility = (isVisible) => {
  if (!map) return
  const visibilityBySoil = (soilId) => (isVisible && soilVisibility.value[soilId] ? 'visible' : 'none')
  geologyLayerConfig.forEach(item => {
    const fillId = `geology-${item.id}-fill`
    const lineId = `geology-${item.id}-line`
    if (map.getLayer(fillId)) map.setLayoutProperty(fillId, 'visibility', visibilityBySoil(item.id))
    if (map.getLayer(lineId)) map.setLayoutProperty(lineId, 'visibility', visibilityBySoil(item.id))
  })

  if (isVisible) updateGeologyFilter()
}

const loadGeologyLayers = async () => {
  if (!map || geologyLoaded.value) return

  for (const item of geologyLayerConfig) {
    const sourceId = `geology-${item.id}`
    const fillId = `geology-${item.id}-fill`
    const lineId = `geology-${item.id}-line`

    let data
    if (geojsonCache.has(item.path)) {
      data = geojsonCache.get(item.path)
    } else {
      const response = await fetch(item.path)
      if (!response.ok) {
        throw new Error(`無法載入地質檔案 ${item.label} (${response.status})`)
      }
      data = addViewportCenterProperty(await response.json())
      geojsonCache.set(item.path, data)
    }

    if (!map.getSource(sourceId)) {
      map.addSource(sourceId, {
        type: 'geojson',
        data
      })
    }

    const insertBefore = map.getLayer('aoc-fill') ? 'aoc-fill' : undefined

    if (!map.getLayer(fillId)) {
      map.addLayer({
        id: fillId,
        type: 'fill',
        source: sourceId,
        layout: {
          visibility: 'none'
        },
        paint: {
          'fill-color': item.color,
          'fill-opacity': soilOpacity.value[item.id]
        }
      }, insertBefore)
    }

    if (!map.getLayer(lineId)) {
      map.addLayer({
        id: lineId,
        type: 'line',
        source: sourceId,
        layout: {
          visibility: 'none'
        },
        paint: {
          'line-color': item.lineColor,
          'line-opacity': 0.75,
          'line-width': 0.8
        }
      }, insertBefore)
    }
  }

  geologyLoaded.value = true
  registerGeologyClickHandlers()
}

// ── 取得當前 AOC 的 geometry JSON 字串（用於 get_soils_in_aoc RPC）──
const getCurrentAOCGeomJSON = () => {
  if (!props.activeAOC?.aoc) return null
  for (const [path, data] of geojsonCache.entries()) {
    if (path.endsWith('/' + props.activeAOC.aoc)) {
      const features = data.features || []
      if (features.length > 0) {
        return JSON.stringify(features[0].geometry)
      }
    }
  }
  return null
}

// ── AOC 地質遮罩：僅顯示 AOC 範圍內的地質層 ──────────────────────
const updateGeologyAOCMask = () => {
  if (!map) return

  if (!geologyEnabled.value || !props.activeAOC?.aoc) {
    if (map.getLayer('geology-aoc-mask')) {
      map.setLayoutProperty('geology-aoc-mask', 'visibility', 'none')
    }
    return
  }

  let aocGeoJSON = null
  for (const [path, data] of geojsonCache.entries()) {
    if (path.endsWith('/' + props.activeAOC.aoc)) {
      aocGeoJSON = data
      break
    }
  }
  if (!aocGeoJSON || !aocGeoJSON.features?.length) return

  let maskData
  try {
    maskData = turf.mask(aocGeoJSON)
  } catch (e) {
    console.warn('[地質遮罩] turf.mask 失敗', e)
    return
  }

  if (map.getSource('geology-aoc-mask-src')) {
    map.getSource('geology-aoc-mask-src').setData(maskData)
    if (map.getLayer('geology-aoc-mask')) {
      map.setLayoutProperty('geology-aoc-mask', 'visibility', 'visible')
    }
  } else {
    map.addSource('geology-aoc-mask-src', { type: 'geojson', data: maskData })
    const insertBefore = map.getLayer('aoc-fill') ? 'aoc-fill' : undefined
    map.addLayer({
      id: 'geology-aoc-mask',
      type: 'fill',
      source: 'geology-aoc-mask-src',
      paint: {
        'fill-color': '#0d0d0d',
        'fill-opacity': 0.85
      }
    }, insertBefore)
  }
}

// ── 地質圖層點擊互動（只註冊一次）──────────────────────────────
const registerGeologyClickHandlers = () => {
  if (!map || geologyClicksRegistered) return

  geologyLayerConfig.forEach(item => {
    const fillId = `geology-${item.id}-fill`
    const soilInfo = SOIL_LABELS[item.id]

    map.on('mouseenter', fillId, () => {
      if (geologyEnabled.value && soilVisibility.value[item.id]) {
        map.getCanvas().style.cursor = 'crosshair'
      }
    })
    map.on('mouseleave', fillId, () => {
      map.getCanvas().style.cursor = ''
    })

    map.on('click', fillId, async (e) => {
      if (!geologyEnabled.value || !soilVisibility.value[item.id]) return
      e.stopPropagation()
      // 設旗標讓通用 map click handler 跳過（Mapbox stopPropagation 不阻止通用事件）
      geologyJustClicked = true
      setTimeout(() => { geologyJustClicked = false }, 0)

      const { lng, lat } = e.lngLat
      const feature = e.features?.[0]
      const props_f = feature?.properties || {}

      // 關閉舊彈窗
      if (soilPopup) { soilPopup.remove(); soilPopup = null }

      // 構建彈窗 DOM
      const popupEl = document.createElement('div')
      popupEl.className = 'geology-popup'
      const notationHtml = props_f.NOTATION
        ? `<span class="geology-popup-notation">${props_f.NOTATION}</span>` : ''
      const descHtml = props_f.DESCR
        ? `<div class="geology-popup-desc">${props_f.DESCR.substring(0, 130)}${props_f.DESCR.length > 130 ? '…' : ''}</div>` : ''
      const hasActiveAOC = !!props.activeAOC?.aoc
      const aocName = hasActiveAOC
        ? props.activeAOC.aoc.replace('_AOC.geojson', '').replace(/_/g, ' ') : ''

      popupEl.innerHTML = `
        <div class="geology-popup-header">
          <span class="soil-type-badge" style="background:${soilInfo.color};color:${['#FFD700','#ADFF2F','#00E5FF'].includes(soilInfo.color)?'#222':'#fff'}">${soilInfo.zh}</span>
          ${notationHtml}
        </div>
        ${descHtml}
        ${renderGrapeRecommendation(item.id)}
        <div class="geology-popup-coords">${lat.toFixed(5)}°N / ${Math.abs(lng).toFixed(5)}°${lng < 0 ? 'W' : 'E'}</div>
        ${hasActiveAOC && supabase ? `<div class="geology-popup-analyze"><button class="btn-analyze-aoc" id="geo-analyze-btn">🔍 分析「${aocName}」土壤分布</button><div id="geo-aoc-result"></div></div>` : ''}
        <div class="geology-popup-supa" id="geo-supa-result"><span class="supa-loading">⏳ 查詢 PostGIS…</span></div>
      `

      soilPopup = new mapboxgl.Popup({ maxWidth: '340px', offset: 10 })
        .setLngLat([lng, lat])
        .setDOMContent(popupEl)
        .addTo(map)

      // ① 非同步：呼叫 get_soil_at_point
      if (supabase) {
        try {
          const { data, error } = await supabase.rpc('get_soil_at_point', { lng, lat })
          const resultEl = popupEl.querySelector('#geo-supa-result')
          if (!resultEl) return
          if (error || !data || data.length === 0) {
            resultEl.innerHTML = '<span class="supa-note">（PostGIS 尚未建立索引，顯示本機資料）</span>'
          } else {
            const rows = data.map(d =>
              `<tr><td style="color:${SOIL_LABELS[d.soil_type]?.color||'#ccc'};font-weight:600">${SOIL_LABELS[d.soil_type]?.zh||d.soil_type}</td><td class="notation-cell">${d.notation||''}</td></tr>`
            ).join('')
            resultEl.innerHTML = `<div class="supa-confirmed">✅ PostGIS 已確認</div><table class="supa-table"><tbody>${rows}</tbody></table>`
          }
        } catch {
          const resultEl = popupEl.querySelector('#geo-supa-result')
          if (resultEl) resultEl.innerHTML = '<span class="supa-note">（無法連線 Supabase）</span>'
        }
      } else {
        const resultEl = popupEl.querySelector('#geo-supa-result')
        if (resultEl) resultEl.innerHTML = '<span class="supa-note">（未設定 Supabase）</span>'
      }

      // ② AOC 土壤分析按鈕（選點查詢）
      const aocBtn = popupEl.querySelector('#geo-analyze-btn')
      if (aocBtn) {
        aocBtn.addEventListener('click', async () => {
          aocBtn.disabled = true
          aocBtn.textContent = '分析中…'
          const resultEl = popupEl.querySelector('#geo-aoc-result')
          try {
            const geomStr = getCurrentAOCGeomJSON()
            if (!geomStr) { aocBtn.textContent = '無法取得 AOC 資料'; return }
            const { data, error } = await supabase.rpc('get_soils_in_aoc', { aoc_geojson: geomStr })
            if (error || !data || data.length === 0) {
              resultEl.innerHTML = '<span class="supa-note">查無資料（PostGIS 尚未匯入）</span>'
              aocBtn.textContent = '查無資料'
            } else {
              aocBtn.style.display = 'none'
              const bars = data.map(d => {
                const col = SOIL_LABELS[d.soil_type]?.color || '#aaa'
                const zh  = SOIL_LABELS[d.soil_type]?.zh || d.soil_type
                return `<div class="aoc-soil-row"><span class="aoc-soil-label" style="background:${col};color:${['#FFD700','#ADFF2F','#00E5FF'].includes(col)?'#222':'#fff'}">${zh}</span><div class="aoc-soil-bar-wrap"><div class="aoc-soil-bar" style="width:${Math.min(d.area_pct,100)}%"></div></div><span class="aoc-soil-pct">${d.area_pct}%</span></div>`
              }).join('')
              resultEl.innerHTML = `<div class="aoc-soil-title">土壤分布：</div><div class="aoc-soil-chart">${bars}</div>`
            }
          } catch {
            aocBtn.textContent = '查詢失敗'
          }
        })
      }
    })
  })
  geologyClicksRegistered = true
}

// ── 地圖點選偵測 AOC（呼叫 PostGIS get_aoc_at_point）────────────
const registerAocClickHandler = () => {
  if (!map || !supabase) return

  map.on('click', async (e) => {
    // 地質圖層剛被點擊 → 跳過，避免同時彈出 AOC popup
    if (geologyJustClicked) return

    const { lng, lat } = e.lngLat

    if (aocClickPopup) { aocClickPopup.remove(); aocClickPopup = null }

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

    // 建立 popup 內容
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

const toggleGeology = async () => {
  if (!map) return

  try {
    if (!geologyLoaded.value) {
      isLoading.value = true
      await loadGeologyLayers()
    }

    geologyEnabled.value = !geologyEnabled.value
    setAOCFillTransparent(geologyEnabled.value)
    setGeologyVisibility(geologyEnabled.value)
    if (geologyEnabled.value) {
      updateGeologyAOCMask()
    } else if (map.getLayer('geology-aoc-mask')) {
      map.setLayoutProperty('geology-aoc-mask', 'visibility', 'none')
    }
    console.log('[地質圖層]', geologyEnabled.value ? '已顯示' : '已隱藏')
  } catch (err) {
    console.error('載入地質圖層失敗:', err)
    mapError.value = `載入地質圖層失敗: ${err.message}`
  } finally {
    isLoading.value = false
  }
}

const toggleSoil = (soilId) => {
  soilVisibility.value[soilId] = !soilVisibility.value[soilId]
  setGeologyVisibility(geologyEnabled.value)
}

const applySoilOpacity = (soilId) => {
  if (!map) return
  const fillId = `geology-${soilId}-fill`
  if (map.getLayer(fillId)) {
    map.setPaintProperty(fillId, 'fill-opacity', soilOpacity.value[soilId])
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

      map.on('moveend', () => {
        if (geologyEnabled.value) {
          updateGeologyFilter()
        }
      })
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
    
    // 添加新標記
    chateaux.forEach(chateau => {
      // 建立標記元素
      const el = document.createElement('div')
      el.className = 'chateau-marker'

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
    if (geologyEnabled.value && map) {
      updateGeologyAOCMask()
    }
  }
}, { deep: true })

// 手機裝置不支援地質圖層，自動關閉
watch(isPhoneDevice, (isPhone) => {
  if (isPhone && geologyEnabled.value && map) {
    toggleGeology()
  }
})

onMounted(async () => {
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
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
    resizeHandler = null
  }
  if (map) {
    map.remove()
    map = null
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
  background: rgba(255, 255, 255, 0.85);
  padding: 8px 20px;
  z-index: 10;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.map-header h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #8B0000;
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

.btn-3d,
.btn-contours,
.btn-geology {
  padding: 8px 15px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
  white-space: nowrap;
  min-width: 110px;
}

.btn-3d {
  background: #4CAF50;
}

.btn-3d:hover {
  background: #388E3C;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.25);
}

.btn-contours {
  background: #9C27B0;
}

.btn-contours:hover {
  background: #7B1FA2;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.25);
}

.btn-geology {
  background: #795548;
}

.btn-geology:hover {
  background: #5D4037;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.25);
}

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
    bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
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
    bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
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
    bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
    left: 50%;
    right: auto;
    width: min(90vw, 560px);
    gap: 8px;
    padding: 12px;
    border-radius: 18px;
    background: #f7f3ee;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.3);
    transform: translateX(-50%) translateY(calc(100% + 18px));
    opacity: 0;
    pointer-events: none;
    transition: transform 0.25s ease, opacity 0.25s ease;
    max-height: min(48vh, 380px);
    overflow-y: auto;
  }

  .map-controls.mobile-open {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .mobile-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #6b1f1f;
    font-weight: 700;
    margin-bottom: 2px;
  }

  .map-controls .btn-3d {
    display: none;
  }

  .btn-contours,
  .btn-geology {
    width: 100%;
    min-width: 0;
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
    bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);
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
    bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
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
    bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
    padding: 12px 10px;
    border-radius: 14px;
    max-height: min(56vh, 420px);
  }

  .map-info-bar.collapsed {
    width: min(94vw, 340px);
    bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
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

/* ── 地質彈窗（Mapbox GL Popup 內容） ───────────────────── */
/* 注意：Mapbox popup 的 DOM 不在 scoped 範圍，改用 :global */
</style>

<style>
/* geology-popup 全域樣式（Mapbox popup DOM） */
.geology-popup {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 13px;
  color: #1a1a2e;
  min-width: 220px;
}
.geology-popup-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}
.soil-type-badge {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 12px;
  white-space: nowrap;
}
.geology-popup-notation {
  font-size: 11px;
  color: #666;
  font-family: monospace;
  background: #f0f0f0;
  padding: 1px 5px;
  border-radius: 4px;
}
.geology-popup-desc {
  font-size: 11px;
  color: #555;
  line-height: 1.5;
  margin-bottom: 6px;
  border-left: 3px solid #ddd;
  padding-left: 6px;
}
.geology-popup-coords {
  font-size: 11px;
  color: #999;
  margin-bottom: 8px;
  font-family: monospace;
}
.geology-popup-supa {
  border-top: 1px solid #eee;
  padding-top: 6px;
  margin-top: 4px;
}
.supa-loading {
  color: #999;
  font-size: 11px;
}
.supa-note {
  color: #aaa;
  font-size: 11px;
  font-style: italic;
}
.supa-confirmed {
  font-size: 11px;
  color: #2d7a2d;
  font-weight: 600;
  margin-bottom: 4px;
}
.supa-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 11px;
}
.supa-table td {
  padding: 2px 4px;
}
.notation-cell {
  font-family: monospace;
  color: #888;
}

/* AOC 土壤分析 */
.geology-popup-analyze {
  margin-top: 8px;
  border-top: 1px dashed #ccc;
  padding-top: 8px;
}
.btn-analyze-aoc {
  background: linear-gradient(135deg, #4a1060, #8b1e3f);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 5px 12px;
  font-size: 12px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 6px;
  transition: opacity 0.2s;
}
.btn-analyze-aoc:hover { opacity: 0.9; }
.btn-analyze-aoc:disabled { opacity: 0.5; cursor: wait; }

.aoc-soil-title {
  font-size: 11px;
  color: #555;
  font-weight: 600;
  margin-bottom: 4px;
}
.aoc-soil-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}
.aoc-soil-label {
  display: inline-block;
  min-width: 64px;
  padding: 1px 6px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
}
.aoc-soil-bar-wrap {
  flex: 1;
  height: 8px;
  background: #eee;
  border-radius: 4px;
  overflow: hidden;
}
.aoc-soil-bar {
  height: 100%;
  background: linear-gradient(90deg, #8b1e3f, #d4527a);
  border-radius: 4px;
  transition: width 0.4s ease;
}
.aoc-soil-pct {
  font-size: 11px;
  color: #555;
  min-width: 36px;
  text-align: right;
}

/* 土壤 × 品種推薦 */
.geology-grape-section {
  background: linear-gradient(135deg, #f9f3e8 0%, #fdf6ee 100%);
  border: 1px solid #e8d5b0;
  border-radius: 10px;
  padding: 8px 10px;
  margin: 6px 0;
}
.grape-section-title {
  font-size: 11px;
  font-weight: 700;
  color: #6b3a10;
  margin-bottom: 6px;
  letter-spacing: 0.03em;
}
.grape-card {
  margin-bottom: 5px;
  padding-bottom: 5px;
  border-bottom: 1px dashed #e0c898;
}
.grape-card:last-of-type {
  margin-bottom: 3px;
  padding-bottom: 0;
  border-bottom: none;
}
.grape-name-row {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 2px;
}
.grape-name-zh {
  font-size: 12px;
  font-weight: 700;
  color: #3d1a00;
}
.grape-name-en {
  font-size: 10px;
  color: #888;
  font-style: italic;
  flex: 1;
}
.grape-stars { font-size: 11px; letter-spacing: -1px; }
.grape-stars.stars-3 { color: #c47f00; }
.grape-stars.stars-2 { color: #a09260; }
.grape-stars.stars-1 { color: #bbb; }
.grape-reason {
  font-size: 10px;
  color: #6b5030;
  line-height: 1.45;
}
.grape-region-note {
  font-size: 10px;
  color: #aaa;
  margin-top: 5px;
  font-style: italic;
  text-align: right;
}

/* AOC 點選偵測 popup */
.aoc-point-popup {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 13px;
  color: #1a1a2e;
  min-width: 200px;
}
.aoc-point-header {
  font-size: 11px;
  font-weight: 700;
  color: #7a1e3f;
  margin-bottom: 8px;
  letter-spacing: 0.03em;
}
.aoc-point-row {
  padding: 4px 0;
  border-bottom: 1px solid #f0e8d5;
}
.aoc-point-row:last-of-type { border-bottom: none; }
.aoc-point-primary .aoc-point-name {
  font-weight: 700;
  color: #8b1e3f;
}
.aoc-point-name {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: #333;
}
.aoc-point-meta {
  display: block;
  font-size: 11px;
  color: #888;
  margin-top: 1px;
}
.aoc-point-coords {
  font-size: 10px;
  color: #bbb;
  margin-top: 8px;
  font-family: monospace;
}
</style>
// oxlint-disable-next-line

