<template>
  <section class="map-section">
    <div class="map-header">
      <h1>波爾多葡萄酒產區地圖</h1>
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
            <b>{{ regionInfo.name }}</b> <span class="region-type">({{ regionInfo.type }})</span><span v-if="regionInfo.hectare" class="region-hectare"> - {{ regionInfo.hectare }} 公頃</span>
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
        <button class="mobile-panel-close" @click="mobileLayersOpen = false">完成</button>
      </div>
      <button class="btn-3d" @click="toggle3D" v-if="map">
        {{ is3D ? '2D' : '3D' }}
      </button>
      <button class="btn-contours" @click="toggleContours" v-if="map">
        {{ contoursEnabled ? '隱藏等高線' : '顯示等高線' }}
      </button>
      <button class="btn-geology" @click="toggleGeology" v-if="map">
        {{ geologyEnabled ? '隱藏地質' : '顯示地質' }}
      </button>
      <div v-if="map && geologyEnabled" class="soil-toggle-panel">
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
      <button class="btn-legend" @click="toggleLegend" v-if="map">
        {{ legendVisible ? '隱藏圖例' : '顯示圖例' }}
      </button>
      <div v-if="isMobile && legendVisible" class="mobile-legend-summary">
        <div class="mobile-legend-chip"><span class="chip-dot left-bank"></span>左岸</div>
        <div class="mobile-legend-chip"><span class="chip-dot right-bank"></span>右岸</div>
        <div class="mobile-legend-chip"><span class="chip-dot sweet"></span>甜酒</div>
        <div class="mobile-legend-chip"><span class="chip-dot entre"></span>兩河之間</div>
        <div class="mobile-legend-chip"><span class="chip-dot regional"></span>波爾多 AOC</div>
      </div>
    </div>

    <div v-if="map" class="mobile-map-toolbar">
      <button class="mobile-tool-btn" @click="emit('openAOCList')">
        <span class="mobile-tool-icon">產</span>
        <span>產區</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: mobileLayersOpen }" @click="toggleMobileLayers">
        <span class="mobile-tool-icon">層</span>
        <span>圖層</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: is3D }" @click="toggle3D">
        <span class="mobile-tool-icon">3D</span>
        <span>{{ is3D ? '2D' : '3D' }}</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: !infoBarCollapsed }" @click="toggleMobileInfo">
        <span class="mobile-tool-icon">資</span>
        <span>資訊</span>
      </button>
    </div>
    
    <!-- 圖例組件 -->
    <div v-if="legendVisible && !isMobile" class="map-legend">
      <div class="legend-title">產區分類</div>
      <div class="legend-items">
        <div class="legend-item">
          <div class="legend-color" style="background: #DC143C;"></div>
          <span>左岸產區</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background: #4169E1;"></div>
          <span>右岸產區</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background: #FFD700;"></div>
          <span>Sauternais</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background: #2E8B57;"></div>
          <span>Entre-Deux-Mers</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background: #8B5C2A;"></div>
          <span>其他產區</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background: #8B0000;"></div>
          <span>波爾多 AOC</span>
        </div>
        <template v-if="geologyEnabled">
          <div class="legend-item" v-if="soilVisibility.limestone">
            <div class="legend-color" style="background: #00E5FF;"></div>
            <span>石灰岩</span>
          </div>
          <div class="legend-item" v-if="soilVisibility.gravel">
            <div class="legend-color" style="background: #FF8C00;"></div>
            <span>礫石卵石</span>
          </div>
          <div class="legend-item" v-if="soilVisibility.clay">
            <div class="legend-color" style="background: #8B4513;"></div>
            <span>黏土為主</span>
          </div>
          <div class="legend-item" v-if="soilVisibility.sand">
            <div class="legend-color" style="background: #FFD700;"></div>
            <span>砂為主</span>
          </div>
          <div class="legend-item" v-if="soilVisibility.mixed">
            <div class="legend-color" style="background: #ADFF2F;"></div>
            <span>混合沉積物</span>
          </div>
        </template>
      </div>
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

// 接收來自父組件的屬性
const props = defineProps({
  activeAOC: Object,
  regionInfo: Object,
  filteredGroups: Object,
  expandedGroups: Object,
  regionsData: Object,
  styleColors: Object,
  aocGroups: Object,
  search: String
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
const legendVisible = ref(true) // 圖例顯示開關
const isMobile = ref(false)
const mobileLayersOpen = ref(false)
const mobileInfoSheetState = ref('peek')
const geojsonCache = new Map()
const defaultAOCFillOpacity = 0.1
const activeAocBounds = ref(null)
let resizeHandler = null
let infoSheetTouchStartY = 0

const geologyLayerConfig = [
  { id: 'limestone', label: '石灰岩', path: '/geojson/geology/Limestone.geojson', color: '#00E5FF', lineColor: '#007C91' },
  { id: 'gravel', label: '礫石卵石', path: '/geojson/geology/Gravel.geojson', color: '#FF8C00', lineColor: '#8A4C00' },
  { id: 'clay', label: '黏土為主', path: '/geojson/geology/Clay.geojson', color: '#8B4513', lineColor: '#3D1E08' },
  { id: 'sand', label: '砂為主', path: '/geojson/geology/Sand.geojson', color: '#FFD700', lineColor: '#8A7300' },
  { id: 'mixed', label: '混合沉積物', path: '/geojson/geology/Mixed.geojson', color: '#ADFF2F', lineColor: '#4D7A00' }
]

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
    console.log('[等高線] 💡 等高線會隨縮放級別自動調整密度')
    console.log('[等高線] 💡 橙色=一般等高線，亮黃橙=5米間隔，金黃色=10米間隔')
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

// 切換圖例顯示
const toggleLegend = () => {
  legendVisible.value = !legendVisible.value
  console.log('[圖例]', legendVisible.value ? '已顯示' : '已隱藏')
}

const syncResponsiveLayout = () => {
  const nextIsMobile = window.innerWidth <= 768
  const changed = nextIsMobile !== isMobile.value
  isMobile.value = nextIsMobile

  if (changed) {
    mobileLayersOpen.value = false
    if (nextIsMobile) {
      mobileInfoSheetState.value = 'peek'
      infoBarCollapsed.value = true
      legendVisible.value = false
    } else {
      mobileInfoSheetState.value = 'full'
      infoBarCollapsed.value = false
      legendVisible.value = true
    }
  }
}

const toggleMobileLayers = () => {
  mobileLayersOpen.value = !mobileLayersOpen.value
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
              'step',
              ['get', 'index'],
              '#FF6B00', // 主要等高線（橙色）
              5, '#FFAA00',  // 每5條主線（亮黃橙）
              10, '#FFD700'  // 每10條特別標記（金黃色）
            ],
            'line-width': [
              'interpolate',
              ['linear'],
              ['zoom'],
              9, 0.5,
              11, 1,
              13, 1.5,
              16, 2.5
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
          'filter': ['>=', ['get', 'index'], 5], // 只顯示每5米及以上的標籤
          'minzoom': 11 // 標籤在zoom 11以上顯示
        })
        console.log('[等高線] ✅ contour-labels 圖層已添加 (minzoom: 11, 默認隱藏)')
        console.log('[等高線] ====================================')
      }
      
      // 預設顯示波爾多整體
      await showAOCGeojson('Regional', 'Bordeaux_AOC.geojson')

      map.on('moveend', () => {
        if (geologyEnabled.value) {
          updateGeologyFilter()
        }
      })
    })
    
    map.on('error', (err) => {
      console.error('地圖錯誤:', err)
      mapError.value = `地圖錯誤: ${err.error?.message || '未知錯誤'}`
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
watch(() => props.activeAOC, (newAOC, oldAOC) => {
  if (newAOC.aoc !== oldAOC?.aoc) {
    showAOCGeojson(newAOC.group, newAOC.aoc)
  }
}, { deep: true })

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
.btn-geology,
.btn-legend {
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

.btn-legend {
  background: #2196F3;
}

.btn-legend:hover {
  background: #1976D2;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.25);
}

.mobile-legend-summary {
  display: none;
}

.mobile-legend-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 0.85rem;
}

.chip-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.chip-dot.left-bank {
  background: #DC143C;
}

.chip-dot.right-bank {
  background: #4169E1;
}

.chip-dot.sweet {
  background: #FFD700;
}

.chip-dot.entre {
  background: #2E8B57;
}

.chip-dot.regional {
  background: #8B0000;
}

/* 圖例樣式 */
.map-legend {
  position: absolute;
  bottom: 30px;
  right: 20px;
  background: rgba(255, 255, 255, 0.95);
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  z-index: 999;
  min-width: 180px;
  backdrop-filter: blur(10px);
  animation: slideInRight 0.3s ease;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.legend-title {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 12px;
  color: #333;
  border-bottom: 2px solid #ccc;
  padding-bottom: 8px;
}

.legend-items {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
}

.legend-color {
  width: 30px;
  height: 20px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.legend-item span {
  color: #555;
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
@media (max-width: 768px) {
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
    left: 12px;
    right: 12px;
    bottom: calc(env(safe-area-inset-bottom, 0px) + 78px);
    max-width: none;
    width: auto;
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
    left: 12px;
    right: 12px;
    bottom: calc(env(safe-area-inset-bottom, 0px) + 78px);
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
    bottom: calc(env(safe-area-inset-bottom, 0px) + 72px);
    left: 12px;
    right: 12px;
    gap: 8px;
    padding: 12px;
    border-radius: 18px;
    background: rgba(29, 24, 20, 0.94);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.3);
    transform: translateY(calc(100% + 18px));
    opacity: 0;
    pointer-events: none;
    transition: transform 0.25s ease, opacity 0.25s ease;
    max-height: min(48vh, 380px);
    overflow-y: auto;
  }

  .map-controls.mobile-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .mobile-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    font-weight: 700;
    margin-bottom: 2px;
  }

  .map-controls .btn-3d {
    display: none;
  }

  .btn-contours,
  .btn-geology,
  .btn-legend {
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

  .mobile-legend-summary {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 2px;
  }

  .mobile-map-toolbar {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: min(92vw, 360px);
    bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);
    z-index: 1300;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
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
    font-size: 0.95rem;
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

  .map-legend {
    display: none;
  }
}

@media (max-width: 420px) {
  .map-header {
    padding: 5px 10px;
    min-height: 34px;
  }

  .map-header h1 {
    font-size: 0.88rem;
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
    bottom: calc(env(safe-area-inset-bottom, 0px) + 66px);
    border-radius: 16px;
    max-height: min(52vh, 360px);
  }

  .map-info-bar {
    left: 10px;
    right: 10px;
    bottom: calc(env(safe-area-inset-bottom, 0px) + 74px);
    padding: 12px 10px;
    border-radius: 14px;
    max-height: min(56vh, 420px);
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
    bottom: calc(env(safe-area-inset-bottom, 0px) + 70px);
    padding: 10px 9px;
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
