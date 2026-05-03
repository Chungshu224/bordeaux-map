<template>
  <div class="presentation-map">
    <div ref="mapContainer" class="map-container"></div>
    <button
      v-if="hasGeologyControls && isMobile"
      class="mobile-geology-trigger"
      :class="{ active: mobileControlsOpen }"
      @click="mobileControlsOpen = !mobileControlsOpen"
    >
      {{ mobileControlsOpen ? $t('common.lesson.map.closeLayers') : $t('common.lesson.map.layers') }}
    </button>
    <div v-if="hasGeologyControls" class="geology-controls" :class="{ 'mobile-open': mobileControlsOpen, 'mobile-layout': isMobile }">
      <div v-if="isMobile" class="geology-mobile-header">
        <span>{{ $t('common.lesson.map.layers') }}</span>
        <button class="geology-mobile-close" @click="mobileControlsOpen = false">{{ $t('common.lesson.map.done') }}</button>
      </div>
      <button class="btn-geology" @click="toggleGeology">
        {{ geologyEnabled ? $t('common.lesson.map.hideGeology') : $t('common.lesson.map.showGeology') }}
      </button>
      <div v-if="geologyEnabled" class="soil-toggle-panel">
        <div
          v-for="item in availableGeologyLayers"
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
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <p>{{ $t('common.lesson.map.loading') }}</p>
    </div>
    <div v-else-if="!map" class="error-message">
      {{ $t('common.lesson.map.loadFailed') }}
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { 
  getMapboxToken, 
  shouldUseMapbox, 
  getOSMStyle, 
  getPlainStyle,
  getMapboxStyleUrl
} from '@/utils/getMapboxToken'
import { bbox as turfBbox } from '@turf/turf'

const props = defineProps({
  focusType: {
    type: String,
    default: 'france-overview' // france-overview, bordeaux-regions
  },
  showBordeaux: {
    type: Boolean,
    default: true
  },
  // 供父層在地圖載入後追加自訂圖層/互動
  onMapReady: {
    type: Function,
    default: null
  },
  // 可選：直接傳入 Mapbox access token（臨時需求用）
  accessToken: {
    type: String,
    default: ''
  },
  // 自定義 GeoJSON 路徑
  geojsonPath: {
    type: String,
    default: ''
  },
  // 多個 GeoJSON 路徑（可同時載入多個 AOC 疊層）
  geojsonPaths: {
    type: Array,
    default: () => []
  },
  // 地圖配置（中心點、縮放級別等）
  mapConfig: {
    type: Object,
    default: null
  }
})

const mapContainer = ref(null)
const isLoading = ref(true)
let map = null
let unhandledRejectionHandler = null
let transitionEndHandler = null
let onMapReadyCleanup = null
const geologyEnabled = ref(false)
const isMobile = ref(false)
const mobileControlsOpen = ref(false)
const activeAocBounds = ref(null)
const soilVisibility = ref({
  limestone: true,
  gravel: true,
  clay: true,
  sand: true,
  mixed: true
})
const soilOpacity = ref({
  limestone: 0.78,
  gravel: 0.78,
  clay: 0.72,
  sand: 0.78,
  mixed: 0.72
})

const geologyLayerConfig = [
  { id: 'limestone', label: '石灰岩', path: '/geojson/geology/Limestone.geojson', fileName: 'Limestone.geojson', color: '#00E5FF', lineColor: '#007C91' },
  { id: 'gravel', label: '礫石卵石', path: '/geojson/geology/Gravel.geojson', fileName: 'Gravel.geojson', color: '#FF8C00', lineColor: '#8A4C00' },
  { id: 'clay', label: '黏土為主', path: '/geojson/geology/Clay.geojson', fileName: 'Clay.geojson', color: '#8B4513', lineColor: '#3D1E08' },
  { id: 'sand', label: '砂為主', path: '/geojson/geology/Sand.geojson', fileName: 'Sand.geojson', color: '#FFD700', lineColor: '#8A7300' },
  { id: 'mixed', label: '混合沉積物', path: '/geojson/geology/Mixed.geojson', fileName: 'Mixed.geojson', color: '#ADFF2F', lineColor: '#4D7A00' }
]

const allGeojsonPaths = computed(() => {
  const paths = []
  if (props.geojsonPath) paths.push(props.geojsonPath)
  if (Array.isArray(props.geojsonPaths)) paths.push(...props.geojsonPaths)
  return paths
})

const availableGeologyLayers = computed(() => geologyLayerConfig.filter(item => allGeojsonPaths.value.some(path => path.includes(item.fileName))))
const hasGeologyControls = computed(() => availableGeologyLayers.value.length > 0)
let resizeHandler = null

// 使用統一的 Token 取得邏輯
const MAPBOX_TOKEN = getMapboxToken(props.accessToken)

function setAOCOpacityByContext() {
  if (!map) return
  const style = map.getStyle()
  if (!style?.layers) return
  style.layers.forEach(layer => {
    if (!layer.id.startsWith('aoc-fill-')) return
    const isGeologyLayer = availableGeologyLayers.value.some(item => layer.id === `aoc-fill-${item.id}`)
    if (isGeologyLayer) return
    const isVisible = map.getLayoutProperty(layer.id, 'visibility') !== 'none'
    map.setPaintProperty(layer.id, 'fill-opacity', geologyEnabled.value && isVisible ? 0.04 : 0.4)
  })
}

function getGeometryBounds(coords, bounds = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }) {
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
  coords.forEach(item => getGeometryBounds(item, bounds))
  return bounds
}

function addViewportCenterProperty(geojson) {
  if (!geojson?.features) return geojson
  geojson.features.forEach(feature => {
    if (!feature.properties) feature.properties = {}
    if (
      typeof feature.properties._cx === 'number' &&
      typeof feature.properties._cy === 'number' &&
      typeof feature.properties._minX === 'number' &&
      typeof feature.properties._minY === 'number' &&
      typeof feature.properties._maxX === 'number' &&
      typeof feature.properties._maxY === 'number'
    ) return
    const coords = feature.geometry?.coordinates
    if (!coords) return
    const bounds = getGeometryBounds(coords)
    if (!Number.isFinite(bounds.minX) || !Number.isFinite(bounds.maxX)) return
    feature.properties._cx = (bounds.minX + bounds.maxX) / 2
    feature.properties._cy = (bounds.minY + bounds.maxY) / 2
    feature.properties._minX = bounds.minX
    feature.properties._minY = bounds.minY
    feature.properties._maxX = bounds.maxX
    feature.properties._maxY = bounds.maxY
  })
  return geojson
}

function updateGeologyFilter() {
  if (!map) return
  const bounds = activeAocBounds.value
  const hasVisibleArea = bounds && bounds.west <= bounds.east && bounds.south <= bounds.north
  availableGeologyLayers.value.forEach(item => {
    const fillId = `aoc-fill-${item.id}`
    const outlineId = `aoc-outline-${item.id}`
    const filter = hasVisibleArea
      ? [
          'all',
          ['>=', ['get', '_maxX'], bounds.west],
          ['<=', ['get', '_minX'], bounds.east],
          ['>=', ['get', '_maxY'], bounds.south],
          ['<=', ['get', '_minY'], bounds.north]
        ]
      : ['==', ['get', '_minX'], -999999]
    if (map.getLayer(fillId)) map.setFilter(fillId, filter)
    if (map.getLayer(outlineId)) map.setFilter(outlineId, filter)
  })
}

function setGeologyVisibility() {
  if (!map) return
  availableGeologyLayers.value.forEach(item => {
    const visibility = geologyEnabled.value && soilVisibility.value[item.id] ? 'visible' : 'none'
    const fillId = `aoc-fill-${item.id}`
    const outlineId = `aoc-outline-${item.id}`
    if (map.getLayer(fillId)) map.setLayoutProperty(fillId, 'visibility', visibility)
    if (map.getLayer(outlineId)) map.setLayoutProperty(outlineId, 'visibility', visibility)
  })
  setAOCOpacityByContext()
  updateGeologyFilter()
}

function toggleGeology() {
  geologyEnabled.value = !geologyEnabled.value
  setGeologyVisibility()
}

function toggleSoil(soilId) {
  soilVisibility.value[soilId] = !soilVisibility.value[soilId]
  setGeologyVisibility()
}

function applySoilOpacity(soilId) {
  if (!map) return
  const fillId = `aoc-fill-${soilId}`
  if (map.getLayer(fillId)) {
    map.setPaintProperty(fillId, 'fill-opacity', soilOpacity.value[soilId])
  }
}

function syncResponsiveLayout() {
  const nextIsMobile = window.innerWidth <= 768
  const changed = nextIsMobile !== isMobile.value
  isMobile.value = nextIsMobile
  if (changed && !nextIsMobile) {
    mobileControlsOpen.value = false
  }
}

onMounted(async () => {
  console.log('PresentationMap mounted', {
    focusType: props.focusType,
    showBordeaux: props.showBordeaux,
    containerRef: mapContainer.value
  })
  
  // 等待 DOM 完全渲染
  await new Promise(resolve => setTimeout(resolve, 100))
  syncResponsiveLayout()
  resizeHandler = () => syncResponsiveLayout()
  window.addEventListener('resize', resizeHandler)
  
  try {
    isLoading.value = true
    
    if (!mapContainer.value) {
      console.error('Map container not found')
      isLoading.value = false
      return
    }
    
    console.log('Container dimensions:', {
      width: mapContainer.value.offsetWidth,
      height: mapContainer.value.offsetHeight,
      clientWidth: mapContainer.value.clientWidth,
      clientHeight: mapContainer.value.clientHeight
    })
    
    // 初始化地圖
    let chosenStyle
    const useMapbox = shouldUseMapbox(MAPBOX_TOKEN)
    
    if (useMapbox) {
      // 使用 Mapbox 樣式
      mapboxgl.accessToken = MAPBOX_TOKEN
      try { 
        if (typeof mapboxgl.setTelemetryEnabled === 'function') {
          mapboxgl.setTelemetryEnabled(false) 
        }
      } catch {}
      chosenStyle = getMapboxStyleUrl(MAPBOX_TOKEN, 'satellite-streets-v12')
      console.log('[Mapbox] 使用 Mapbox 樣式 (satellite-streets-v12)')
    } else {
      // 無 Token 時退回 OSM raster
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
        console.warn('[Mapbox] 未偵測到 VITE_MAPBOX_TOKEN，暫以 OSM Raster 顯示。請在 .env 設定 VITE_MAPBOX_TOKEN 以啟用 Mapbox 樣式。')
      } else {
        console.warn('[Mapbox] 偵測到開發主機（無 TLD / 測試 TLD / IPv4），為避免「Unlisted TLDs」錯誤，預設改用 OSM Raster。若需強制使用 Mapbox，請將當前網址加入 Token 允許清單或移除 URL 限制。')
      }
    }
    
    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: chosenStyle,
      center: props.focusType === 'france-overview' ? [2.2137, 46.2276] : [-0.5792, 44.8378],
      zoom: props.focusType === 'france-overview' ? 5 : 9,
      pitch: 0,
      bearing: 0,
      attributionControl: true,
      // 明確禁用所有遙測和追蹤
      trackResize: true,
      preserveDrawingBuffer: false,
      refreshExpiredTiles: true,
      maxBounds: undefined,
      // 禁用 hash 和 attribution 中的追蹤
      hash: false
    })
    
    console.log('Map initialized', map)

    // 為了解決幻燈片過渡時地圖尺寸計算錯誤，監聽父層 slide 的 transitionend
    try {
      const parentSlide = mapContainer.value && mapContainer.value.closest && mapContainer.value.closest('.slide')
      if (parentSlide) {
        transitionEndHandler = (ev) => {
          // 只在 transform/opacity 或 all 過渡完成時重新計算尺寸
          const prop = (ev && ev.propertyName) || ''
          if (!prop || /(transform|opacity|all)/i.test(prop)) {
            try { if (map && typeof map.resize === 'function') map.resize() } catch (e) { /* ignore */ }
          }
        }
        parentSlide.addEventListener('transitionend', transitionEndHandler)
      }
    } catch (err) {
      // ignore
    }

    // 盡早掛上錯誤處理，攔截 Mapbox「Unlisted TLDs」等早期錯誤並回退
    const handleMapError = (e) => {
      try {
        const msg = e?.error?.message || e?.message || ''
        console.error('Map error:', e)
        const shouldFallbackToOSM = (
          msg.includes('Unlisted TLDs') ||
          msg.toLowerCase().includes('unauthorized') ||
          msg.toLowerCase().includes('forbidden') ||
          msg.toLowerCase().includes('token') ||
          msg.includes('401') ||
          msg.includes('403')
        )
        const shouldFallbackToPlain = (
          msg.includes('429') ||
          msg.includes('404') ||
          msg.toLowerCase().includes('cors') ||
          msg.toLowerCase().includes('failed to load') ||
          msg.toLowerCase().includes('net::err')
        )
        if (shouldFallbackToOSM) {
          console.warn('[Mapbox] 偵測到 Unlisted TLDs/授權錯誤，切換為 OSM Raster。')
          try {
            map.setStyle(getOSMStyle())
            map.once('style.load', async () => {
              if (props.focusType === 'france-overview') {
                addFranceOverlay()
                addBordeauxMarker()
              }
              if (props.geojsonPath) {
                await loadBordeauxAOC()
              } else if (props.showBordeaux) {
                await loadBordeauxAOC()
              }
              try {
                if (typeof props.onMapReady === 'function') {
                  const maybeCleanup = await props.onMapReady(map)
                  if (typeof maybeCleanup === 'function') onMapReadyCleanup = maybeCleanup
                }
              } catch {}
            })
          } catch (err) {
            console.error('切換 OSM 樣式時發生錯誤:', err)
          }
        } else if (shouldFallbackToPlain) {
          console.warn('[Map] OSM 圖磚讀取失敗，切換為純色背景樣式。')
          try {
            map.setStyle(getPlainStyle())
            map.once('style.load', async () => {
              if (props.focusType === 'france-overview') {
                addFranceOverlay()
                addBordeauxMarker()
              }
              if (props.geojsonPath) {
                await loadBordeauxAOC()
              } else if (props.showBordeaux) {
                await loadBordeauxAOC()
              }
              try {
                if (typeof props.onMapReady === 'function') {
                  const maybeCleanup = await props.onMapReady(map)
                  if (typeof maybeCleanup === 'function') onMapReadyCleanup = maybeCleanup
                }
              } catch {}
              const banner = document.createElement('div')
              banner.style.cssText = 'position:absolute;bottom:8px;left:8px;background:rgba(255,255,0,.9);color:#000;padding:6px 10px;border-radius:6px;font-size:12px;z-index:1000;'
              banner.textContent = '提示：OSM 圖磚無法讀取，已改用純色背景；本地 AOC 疊層仍可使用。'
              map.getContainer().appendChild(banner)
            })
          } catch (err) {
            console.error('切換純色背景樣式時發生錯誤:', err)
          }
        }
        isLoading.value = false
      } catch {
        // ignore
      }
    }
    map.on('error', handleMapError)
    // 開發環境常見：Unlisted TLDs 透過未捕獲的 Promise 拋出，這裡窄化攔截避免噪音
    unhandledRejectionHandler = (event) => {
      const reason = event?.reason
      const msg = (reason && (reason.message || reason.toString())) || ''
      if (typeof msg === 'string' && msg.includes('Unlisted TLDs')) {
        event.preventDefault()
        console.warn('[Mapbox] 已攔截 Unlisted TLDs 拋錯並回退樣式。')
      }
    }
    window.addEventListener('unhandledrejection', unhandledRejectionHandler)
    window.addEventListener('unhandledrejection', unhandledRejectionHandler)

    // 添加導航控件
  map.addControl(new mapboxgl.NavigationControl(), 'top-right')
  // 全螢幕切換（Mapbox 內建控制）
  try { map.addControl(new mapboxgl.FullscreenControl(), 'top-right') } catch {}

    map.on('load', async () => {
      console.log('Map loaded successfully')
      if (!MAPBOX_TOKEN) {
        // 在畫面角落提示目前為暫時 OSM 模式
        const banner = document.createElement('div')
        banner.style.cssText = 'position:absolute;bottom:8px;left:8px;background:rgba(255,255,0,.9);color:#000;padding:6px 10px;border-radius:6px;font-size:12px;z-index:1000;'
        banner.textContent = '提示：未設定 VITE_MAPBOX_TOKEN，已暫用 OSM 背景。'
        map.getContainer().appendChild(banner)
      }
      
      // 如果是法國全圖，添加波爾多標記
      if (props.focusType === 'france-overview') {
        addFranceOverlay()
        addBordeauxMarker()
      }
      
      // 載入 GeoJSON 資料
      // 1) 若 showBordeaux 為 true，先載入 Bordeaux AOC 白色外框
      // 2) 然後載入其他 GeoJSON（單一或多個）
      console.log('[Map] GeoJSON loading decision:', {
        geojsonPaths: props.geojsonPaths,
        geojsonPath: props.geojsonPath,
        showBordeaux: props.showBordeaux
      })
      
      // 優先載入 Bordeaux AOC 外框（如果 showBordeaux 為 true）
      if (props.showBordeaux) {
        console.log('[Map] Loading Bordeaux_AOC.geojson (white border)')
        await loadBordeauxAOC()
      }
      
      // 然後載入其他 GeoJSON
      // 如果有 mapConfig 或 onMapReady,跳過自動 fitBounds
      const skipFitBounds = !!(props.mapConfig || props.onMapReady)
      if (Array.isArray(props.geojsonPaths) && props.geojsonPaths.length > 0) {
        console.log('[Map] Loading multiple GeoJSON:', props.geojsonPaths)
        await loadMultipleAOC(props.geojsonPaths, skipFitBounds)
      } else if (props.geojsonPath) {
        console.log('[Map] Loading single GeoJSON:', props.geojsonPath)
        // 載入單一 GeoJSON
        await loadMultipleAOC([props.geojsonPath], skipFitBounds)
      }
      
      // 應用自定義地圖配置（中心點、縮放等）
      if (props.mapConfig) {
        console.log('[Map] Applying mapConfig:', props.mapConfig)
        const { center, zoom, pitch, bearing } = props.mapConfig
        
        // 使用 jumpTo 立即定位，不使用動畫，避免標記飄移
        map.jumpTo({
          center: center || map.getCenter(),
          zoom: zoom !== undefined ? zoom : map.getZoom(),
          pitch: pitch !== undefined ? pitch : map.getPitch(),
          bearing: bearing !== undefined ? bearing : map.getBearing()
        })
        
        console.log('[Map] Map positioned immediately with jumpTo')
      }

      // 通知父層 map 已可用，供自訂疊層
      try {
        if (typeof props.onMapReady === 'function') {
          try {
            const maybeCleanup = await props.onMapReady(map)
            if (typeof maybeCleanup === 'function') onMapReadyCleanup = maybeCleanup
          } catch (e) {
            console.warn('onMapReady callback failed:', e)
          }
        }
      } catch (e) {
        console.warn('onMapReady callback failed:', e)
      }
      
      isLoading.value = false
      console.log('Map setup complete')
    })
    
    // 注意：錯誤處理已提前註冊於 map 初始化之後

  } catch (error) {
    console.error('地圖初始化失敗:', error)
    isLoading.value = false
  }
})
onUnmounted(() => {
  try {
    if (resizeHandler) {
      window.removeEventListener('resize', resizeHandler)
      resizeHandler = null
    }
    if (unhandledRejectionHandler) {
      window.removeEventListener('unhandledrejection', unhandledRejectionHandler)
      unhandledRejectionHandler = null
    }
    // 移除 transitionend 監聽器（如果有的話）
    try {
      if (transitionEndHandler && mapContainer.value && mapContainer.value.closest) {
        const parent = mapContainer.value.closest('.slide')
        if (parent) parent.removeEventListener('transitionend', transitionEndHandler)
      }
      transitionEndHandler = null
    } catch (e) {
      // ignore
    }
  } catch {}
  if (map) {
    // 清理所有自定義圖層和資料源，防止圖層洩漏
    try {
      const style = map.getStyle()
      if (style && style.layers) {
        // 移除所有自定義圖層（AOC、rivers等）
        const customLayerPrefixes = ['aoc-', 'rivers-', 'bordeaux-', 'geology-']
        style.layers.forEach(layer => {
          const isCustomLayer = customLayerPrefixes.some(prefix => layer.id.startsWith(prefix))
          if (isCustomLayer) {
            try {
              map.removeLayer(layer.id)
            } catch (e) {
              // 圖層可能已被移除
            }
          }
        })
      }
      
      // 移除所有自定義資料源
      if (style && style.sources) {
        const customSourcePrefixes = ['aoc-', 'rivers', 'bordeaux-', 'geology-']
        Object.keys(style.sources).forEach(sourceId => {
          const isCustomSource = customSourcePrefixes.some(prefix => sourceId.startsWith(prefix))
          if (isCustomSource) {
            try {
              map.removeSource(sourceId)
            } catch (e) {
              // 資料源可能已被移除
            }
          }
        })
      }
    } catch (e) {
      console.warn('[PresentationMap] 清理自定義圖層時發生錯誤:', e)
    }
    
    // 如果 onMapReady 提供了清理函式，先執行它以移除由回呼建立的 markers/popups
    try {
      if (typeof onMapReadyCleanup === 'function') {
        try { onMapReadyCleanup() } catch (e) { /* ignore */ }
        onMapReadyCleanup = null
      }
    } catch {}

    map.remove()
    map = null
  }
})

// 添加法國邊界（可選）
function addFranceOverlay() {
  // 使用簡單的圓形標記波爾多位置
  // 可以後續添加更詳細的法國邊界 GeoJSON
}

// 添加波爾多城市標記
function addBordeauxMarker() {
  const el = document.createElement('div')
  el.className = 'bordeaux-marker'
  el.innerHTML = '🍷'
  el.style.fontSize = '32px'
  el.style.cursor = 'pointer'
  
  const popup = new mapboxgl.Popup({ offset: 25 })
    .setHTML(`
      <div class="bordeaux-popup">
        <h3>🍷 波爾多</h3>
        <p><strong>位置:</strong> 法國西南部</p>
        <p><strong>緯度:</strong> 北緯44°50'</p>
        <p><strong>距大西洋:</strong> 約60公里</p>
        <p><strong>葡萄園面積:</strong> 120,000公頃</p>
      </div>
    `)
  
  new mapboxgl.Marker(el)
    .setLngLat([-0.5792, 44.8378])
    .setPopup(popup)
    .addTo(map)
    
  // 添加文字標籤
  const labelEl = document.createElement('div')
  labelEl.className = 'bordeaux-label'
  labelEl.textContent = 'Bordeaux'
  labelEl.style.cssText = `
    background: rgba(139, 0, 0, 0.9);
    color: white;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: bold;
    pointer-events: none;
  `
  
  new mapboxgl.Marker(labelEl, { offset: [0, -40] })
    .setLngLat([-0.5792, 44.8378])
    .addTo(map)
}

// 載入波爾多 AOC 資料
async function loadBordeauxAOC() {
  if (!map) return
  
  try {
    // 只載入 Bordeaux AOC 外框 (白色邊界 + 20% 白色透明填充)
    const responseOuter = await fetch('/Bordeaux_AOC.geojson')
    const geojsonOuter = await responseOuter.json()
    
    // 移除舊的外框圖層
    if (map.getLayer('bordeaux-aoc-fill')) map.removeLayer('bordeaux-aoc-fill')
    if (map.getLayer('bordeaux-aoc-outline')) map.removeLayer('bordeaux-aoc-outline')
    if (map.getSource('bordeaux-aoc')) map.removeSource('bordeaux-aoc')
    if (map.getLayer('bordeaux-aoc-outer-fill')) map.removeLayer('bordeaux-aoc-outer-fill')
    if (map.getLayer('bordeaux-aoc-outer-outline')) map.removeLayer('bordeaux-aoc-outer-outline')
    if (map.getSource('bordeaux-aoc-outer')) map.removeSource('bordeaux-aoc-outer')
    
    // 添加外框資料源
    map.addSource('bordeaux-aoc-outer', {
      type: 'geojson',
      data: geojsonOuter
    })
    
    // 外框填充層 (白色 20% 透明)
    map.addLayer({
      id: 'bordeaux-aoc-outer-fill',
      type: 'fill',
      source: 'bordeaux-aoc-outer',
      paint: {
        'fill-color': '#FFFFFF',
        'fill-opacity': 0.2
      }
    })
    
    // 外框邊界層 (白色)
    map.addLayer({
      id: 'bordeaux-aoc-outer-outline',
      type: 'line',
      source: 'bordeaux-aoc-outer',
      paint: {
        'line-color': '#FFFFFF',
        'line-width': 2
      }
    })
    
    console.log('波爾多 AOC 外框載入完成')
    
  } catch (error) {
    console.error('載入波爾多 AOC 失敗:', error)
  }
}

// 載入多個 AOC GeoJSON（同時疊加多個區塊，並自動 fit 至合併邊界）
async function loadMultipleAOC(urls = [], skipFitBounds = false) {
  if (!map || !Array.isArray(urls) || urls.length === 0) return

  console.log('[Map] loadMultipleAOC called with:', urls, 'skipFitBounds:', skipFitBounds)
  const loadedGeojsons = []
  const activeRegionGeojsons = []
  const hasGeologyContext = urls.some(u => u.includes('/geojson/geology/'))

  for (const url of urls) {
    try {
      console.log('[Map] Fetching:', url)
      const response = await fetch(url)
      if (!response.ok) throw new Error(`Failed to load ${url}: ${response.status}`)
      const rawGeo = await response.json()
      const geo = url.includes('/geojson/geology/') ? addViewportCenterProperty(rawGeo) : rawGeo
      loadedGeojsons.push(geo)

      const matchedGeologyConfig = geologyLayerConfig.find(item => url.includes(item.fileName))
      const idBase = matchedGeologyConfig
        ? matchedGeologyConfig.id
        : (url.split('/').pop() || 'layer').replace(/\.geojson$/i, '')
      const sourceId = `aoc-${idBase}`
      const fillId = `aoc-fill-${idBase}`
      const outlineId = `aoc-outline-${idBase}`

      console.log('[Map] Adding layers:', { sourceId, fillId, outlineId })

      if (map.getLayer(fillId)) map.removeLayer(fillId)
      if (map.getLayer(outlineId)) map.removeLayer(outlineId)
      if (map.getSource(sourceId)) map.removeSource(sourceId)

      map.addSource(sourceId, { type: 'geojson', data: geo })

      // 判斷產區類型
      const isBordeauxOuter = url.includes('Bordeaux_AOC.geojson') && !url.includes('/LeftBank/') && !url.includes('/RightBank/')
      const isGeology = url.includes('/geojson/geology/')
      const isLimestone = isGeology && url.includes('Limestone.geojson')
      const isGravel = isGeology && url.includes('Gravel.geojson')
      const isClay = isGeology && url.includes('Clay.geojson')
      const isSand = isGeology && url.includes('Sand.geojson')
      const isMixed = isGeology && url.includes('Mixed.geojson')
      
      // 優先判斷甜酒產區（Sauternes, Barsac, Cadillac, Loupiac, Sainte-Croix, Cérons）
      const isSweetWine = url.includes('Sauternes') || url.includes('Barsac') || 
                          url.includes('Cadillac') || url.includes('Loupiac') || 
                          url.includes('Sainte-Croix') || url.includes('Cerons')
      
      // 白酒產區（Pessac-Léognan, Graves, Entre-Deux-Mers）
      // 注意：當 Graves 與 Pessac-Léognan 或 Entre-Deux-Mers 一起出現時，視為白酒產區
      // 當 Graves 單獨出現或與左岸紅酒產區一起出現時，視為左岸紅酒產區
      const hasWhiteWineContext = urls.some(u => 
        u.includes('Pessac-Leognan') || u.includes('Entre-Deux-Mers') || u.includes('Sauternes') || u.includes('Barsac')
      )
      const isWhiteWine = url.includes('Pessac-Leognan') || url.includes('Entre-Deux-Mers') || 
                          (url.includes('Graves_AOC') && hasWhiteWineContext)
      
      // 左岸和右岸（紅酒產區）
      const isLeftBank = url.includes('/LeftBank/') && !isWhiteWine
      const isRightBank = url.includes('/RightBank/')
      const isMainAOC = !isGeology && !isBordeauxOuter

      if (isMainAOC) {
        activeRegionGeojsons.push(geo)
      }
      
      let fillColor, fillOpacity, lineColor, lineWidth, regionType
      
      if (isBordeauxOuter) {
        // 外框：白色 20% 透明
        fillColor = '#FFFFFF'
        fillOpacity = 0.2
        lineColor = '#FFFFFF'
        lineWidth = 2
        regionType = 'outer'
      } else if (isLimestone) {
        fillColor = '#00E5FF'
        fillOpacity = 0.78
        lineColor = '#007C91'
        lineWidth = 1.6
        regionType = 'geology-limestone'
      } else if (isGravel) {
        fillColor = '#FF8C00'
        fillOpacity = 0.78
        lineColor = '#8A4C00'
        lineWidth = 1.6
        regionType = 'geology-gravel'
      } else if (isClay) {
        fillColor = '#8B4513'
        fillOpacity = 0.72
        lineColor = '#3D1E08'
        lineWidth = 1.6
        regionType = 'geology-clay'
      } else if (isSand) {
        fillColor = '#FFD700'
        fillOpacity = 0.78
        lineColor = '#8A7300'
        lineWidth = 1.6
        regionType = 'geology-sand'
      } else if (isMixed) {
        fillColor = '#ADFF2F'
        fillOpacity = 0.72
        lineColor = '#4D7A00'
        lineWidth = 1.6
        regionType = 'geology-mixed'
      } else if (isSweetWine) {
        // 甜酒產區：金黃色（代表蜂蜜、液體黃金）
        fillColor = '#FFD700'
        fillOpacity = hasGeologyContext ? 0.2 : 0.5
        lineColor = '#DAA520'
        lineWidth = 1.5
        regionType = 'sweet'
      } else if (isWhiteWine) {
        // 白酒產區：淡綠色（代表清新、白蘇維濃）
        fillColor = '#90EE90'
        fillOpacity = hasGeologyContext ? 0.18 : 0.4
        lineColor = '#32CD32'
        lineWidth = 1.5
        regionType = 'white'
      } else if (isLeftBank) {
        // 左岸紅酒：深紅色
        fillColor = '#8B0000'
        fillOpacity = hasGeologyContext ? 0.18 : 0.4
        lineColor = '#8B0000'
        lineWidth = 1.5
        regionType = 'left-red'
      } else if (isRightBank) {
        // 右岸紅酒：酒紅色，降低透明度避免遮蓋標記
        fillColor = '#C2185B'
        fillOpacity = hasGeologyContext ? 0.12 : 0.22
        lineColor = '#880E4F'
        lineWidth = 1.5
        regionType = 'right-red'
      } else {
        // 默認樣式（其他檔案）
        fillColor = '#8B0000'
        fillOpacity = 0.25
        lineColor = '#8B0000'
        lineWidth = 2
        regionType = 'default'
      }

      const geologyBeforeLayerId = isGeology
        ? map.getStyle()?.layers?.find(layer => layer.id.startsWith('aoc-outline-') && !availableGeologyLayers.value.some(item => layer.id === `aoc-outline-${item.id}`))?.id
        : undefined

      map.addLayer({
        id: fillId,
        type: 'fill',
        source: sourceId,
        layout: {
          visibility: isGeology ? 'none' : 'visible'
        },
        paint: {
          'fill-color': fillColor,
          'fill-opacity': isGeology ? soilOpacity.value[idBase] || fillOpacity : fillOpacity
        }
      }, geologyBeforeLayerId)

      map.addLayer({
        id: outlineId,
        type: 'line',
        source: sourceId,
        layout: {
          visibility: isGeology ? 'none' : 'visible'
        },
        paint: {
          'line-color': lineColor,
          'line-width': lineWidth
        }
      }, geologyBeforeLayerId)
      
      // 添加點擊事件 - 顯示 AOC 名稱（除了外框）
      // 已停用 - 避免與自定義 marker 衝突
      /*
      if (!isBordeauxOuter) {
        map.on('click', fillId, (e) => {
          const feature = e.features[0]
          const coordinates = e.lngLat
          const aocName = geo.name || feature.properties?.appellatio || feature.properties?.denominati || idBase
          
          let regionLabel, icon, description
          
          if (isSweetWine) {
            regionLabel = '甜酒產區'
            icon = '🍯'
            if (aocName.includes('Sauternes')) {
              description = '世界頂級貴腐甜酒，液體黃金'
            } else if (aocName.includes('Barsac')) {
              description = '清新優雅的貴腐甜酒'
            } else {
              description = '半甜到甜型波爾多甜酒'
            }
          } else if (isWhiteWine) {
            regionLabel = '白酒產區'
            icon = '🤍'
            if (aocName.includes('Pessac-Leognan')) {
              description = '頂級干白，橡木桶發酵'
            } else if (aocName.includes('Graves')) {
              description = '清新優雅的干白葡萄酒'
            } else {
              description = '清爽果香的干白葡萄酒'
            }
          } else if (isLeftBank) {
            regionLabel = '左岸 (Left Bank)'
            icon = '🍷'
            description = '以卡本內蘇維濃 (Cabernet Sauvignon) 為主'
          } else if (isRightBank) {
            regionLabel = '右岸 (Right Bank)'
            icon = '🍷'
            description = '以梅洛 (Merlot) 為主'
          } else {
            regionLabel = '波爾多產區'
            icon = '🍷'
            description = ''
          }
          
          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(`
              <div class="region-popup">
                <h4>${icon} ${aocName}</h4>
                <p><strong>產區:</strong> ${regionLabel}</p>
                ${description ? `<p class="description">${description}</p>` : ''}
              </div>
            `)
            .addTo(map)
        })
        
        // 滑鼠效果
        map.on('mouseenter', fillId, () => {
          map.getCanvas().style.cursor = 'pointer'
        })
        map.on('mouseleave', fillId, () => {
          map.getCanvas().style.cursor = ''
        })
      }
      */
      
      console.log('[Map] Successfully loaded:', url, { 
        type: regionType,
        color: fillColor,
        name: idBase 
      })
    } catch (e) {
      console.error('[Map] 載入多重 AOC 失敗：', url, e)
    }
  }

  // 自動 fit 到所有疊層的聯集邊界（如果沒有被跳過）
  if (activeRegionGeojsons.length > 0) {
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
    for (const g of activeRegionGeojsons) {
      const [x1, y1, x2, y2] = turfBbox(g)
      if (x1 < minX) minX = x1
      if (y1 < minY) minY = y1
      if (x2 > maxX) maxX = x2
      if (y2 > maxY) maxY = y2
    }
    if (isFinite(minX) && isFinite(minY) && isFinite(maxX) && isFinite(maxY)) {
      activeAocBounds.value = { west: minX, south: minY, east: maxX, north: maxY }
    }
  } else {
    activeAocBounds.value = null
  }

  setGeologyVisibility()

  if (!skipFitBounds) {
    try {
      if (loadedGeojsons.length > 0) {
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
        for (const g of loadedGeojsons) {
          const [x1, y1, x2, y2] = turfBbox(g)
          if (x1 < minX) minX = x1
          if (y1 < minY) minY = y1
          if (x2 > maxX) maxX = x2
          if (y2 > maxY) maxY = y2
        }
        if (isFinite(minX) && isFinite(minY) && isFinite(maxX) && isFinite(maxY)) {
          console.log('[Map] Fitting bounds to GeoJSON data')
          map.fitBounds([[minX, minY], [maxX, maxY]], { padding: 40, duration: 800 })
        }
      }
    } catch (e) {
      console.warn('[Map] 合併邊界 fitBounds 失敗：', e)
    }
  } else {
    console.log('[Map] Skipping fitBounds (skipFitBounds=true)')
  }
}

// 添加波爾多產區（舊版，保留以防需要）
function addBordeauxRegions() {
  if (!bordeauxRegionsData || !map) return
  
  // 創建 GeoJSON 特徵集合
  const features = bordeauxRegionsData
    .filter(region => region.coordinates && region.coordinates.length > 0)
    .map(region => {
      // 檢查是否為多邊形座標格式
      const coordinates = region.coordinates
      
      return {
        type: 'Feature',
        properties: {
          name: region.name,
          type: region.type,
          style: region.style,
          description: region.description
        },
        geometry: {
          type: 'Polygon',
          coordinates: [coordinates] // Polygon 需要額外的數組層級
        }
      }
    })
  
  const geojson = {
    type: 'FeatureCollection',
    features: features
  }
  
  // 添加資料源
  if (!map.getSource('bordeaux-regions')) {
    map.addSource('bordeaux-regions', {
      type: 'geojson',
      data: geojson
    })
    
    // 添加填充層
    map.addLayer({
      id: 'bordeaux-regions-fill',
      type: 'fill',
      source: 'bordeaux-regions',
      paint: {
        'fill-color': [
          'match',
          ['get', 'style'],
          '紅酒', '#8B0000',
          '白酒', '#FFD700',
          '甜酒', '#FFA500',
          '粉紅酒', '#FFB6C1',
          '#666666'
        ],
        'fill-opacity': 0.3
      }
    })
    
    // 添加邊界層
    map.addLayer({
      id: 'bordeaux-regions-outline',
      type: 'line',
      source: 'bordeaux-regions',
      paint: {
        'line-color': [
          'match',
          ['get', 'style'],
          '紅酒', '#8B0000',
          '白酒', '#DAA520',
          '甜酒', '#FF8C00',
          '粉紅酒', '#FF69B4',
          '#333333'
        ],
        'line-width': 2
      }
    })
    
    // 添加滑鼠互動
    map.on('mouseenter', 'bordeaux-regions-fill', () => {
      map.getCanvas().style.cursor = 'pointer'
    })
    
    map.on('mouseleave', 'bordeaux-regions-fill', () => {
      map.getCanvas().style.cursor = ''
    })
    
    // 點擊顯示資訊
    map.on('click', 'bordeaux-regions-fill', (e) => {
      const feature = e.features[0]
      const coordinates = e.lngLat
      
      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(`
          <div class="region-popup">
            <h4>${feature.properties.name}</h4>
            <p><strong>類型:</strong> ${feature.properties.type}</p>
            <p><strong>風格:</strong> ${feature.properties.style}</p>
            <p class="description">${feature.properties.description || ''}</p>
          </div>
        `)
        .addTo(map)
    })
  }
}

// 清理所有 AOC 圖層與資料源
function removeAllAOCLayers() {
  if (!map) return
  
  // 移除預設 bordeaux-aoc 圖層
  if (map.getLayer('bordeaux-aoc-fill')) map.removeLayer('bordeaux-aoc-fill')
  if (map.getLayer('bordeaux-aoc-outline')) map.removeLayer('bordeaux-aoc-outline')
  if (map.getSource('bordeaux-aoc')) map.removeSource('bordeaux-aoc')
  activeAocBounds.value = null
  
  // 移除所有 aoc-* 開頭的圖層（多重疊層）
  const style = map.getStyle()
  if (style && style.layers) {
    style.layers.forEach(layer => {
      if (layer.id.startsWith('aoc-fill-') || layer.id.startsWith('aoc-outline-')) {
        try {
          map.removeLayer(layer.id)
        } catch (e) {
          console.warn('[Map] 移除圖層失敗:', layer.id, e)
        }
      }
    })
  }
  
  // 移除所有 aoc-* 開頭的資料源
  if (style && style.sources) {
    Object.keys(style.sources).forEach(sourceId => {
      if (sourceId.startsWith('aoc-')) {
        try {
          map.removeSource(sourceId)
        } catch (e) {
          console.warn('[Map] 移除資料源失敗:', sourceId, e)
        }
      }
    })
  }
}

// 監聽 geojsonPath 變化（單一 GeoJSON）
watch(() => props.geojsonPath, async (newPath, oldPath) => {
  if (!map || newPath === oldPath) return
  
  console.log('[Map] geojsonPath changed:', oldPath, '→', newPath)
  geologyEnabled.value = false
  removeAllAOCLayers()
  
  if (newPath) {
    await loadBordeauxAOC()
  }
})

// 監聽 geojsonPaths 變化（多個 GeoJSON）
watch(() => props.geojsonPaths, async (newPaths, oldPaths) => {
  if (!map) return
  
  // 深度比較陣列內容是否真的改變
  const changed = JSON.stringify(newPaths) !== JSON.stringify(oldPaths)
  if (!changed) return
  
  console.log('[Map] geojsonPaths changed:', oldPaths, '→', newPaths)
  geologyEnabled.value = false
  removeAllAOCLayers()
  
  if (Array.isArray(newPaths) && newPaths.length > 0) {
    await loadMultipleAOC(newPaths)
  }
}, { deep: true })

// 監聽焦點變化
watch(() => props.focusType, (newFocus) => {
  if (!map) return
  
  if (newFocus === 'france-overview') {
    map.flyTo({
      center: [2.2137, 46.2276],
      zoom: 5,
      pitch: 0,
      bearing: 0,
      duration: 2000
    })
  } else if (newFocus === 'bordeaux-regions') {
    map.flyTo({
      center: [-0.5792, 44.8378],
      zoom: 9,
      pitch: 0,
      bearing: 0,
      duration: 2000
    })
  }
})
</script>

<style scoped>
.presentation-map {
  position: relative;
  width: 100% !important;
  height: 100% !important;
  min-height: 500px !important;
  background: transparent;
  border: none;
  box-sizing: border-box;
}

.map-container {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100% !important;
  height: 100% !important;
  border-radius: 8px;
  overflow: hidden;
  background: #f5f5f5;
}

.geology-controls {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 240px;
}

.mobile-geology-trigger,
.geology-mobile-header {
  display: none;
}

.geology-mobile-close {
  border: none;
  border-radius: 999px;
  background: #6b1f1f;
  color: #fff;
  font-weight: 700;
  padding: 8px 14px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.btn-geology {
  padding: 8px 12px;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700;
  background: #795548;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}

.btn-geology:hover {
  background: #5D4037;
}

.soil-toggle-panel {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.soil-control-item {
  display: flex;
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
  width: 108px;
  font-size: 0.85rem;
  text-align: left;
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
  background: rgba(255, 255, 255, 0.92);
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

@media (max-width: 768px) {
  .mobile-geology-trigger {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);
    z-index: 1002;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    border: none;
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(250, 245, 239, 0.98) 0%, rgba(241, 231, 221, 0.96) 100%);
    color: #4f3422;
    font-weight: 800;
    letter-spacing: 0.02em;
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
  }

  .mobile-geology-trigger.active {
    background: linear-gradient(180deg, #7b2424 0%, #5f1717 100%);
    color: #fff;
  }

  .geology-controls.mobile-layout {
    top: auto;
    left: 12px;
    right: 12px;
    bottom: calc(env(safe-area-inset-bottom, 0px) + 66px);
    max-width: none;
    padding: 12px;
    border-radius: 18px;
    background: rgba(29, 24, 20, 0.94);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.3);
    transform: translateY(calc(100% + 18px));
    opacity: 0;
    pointer-events: none;
    transition: transform 0.25s ease, opacity 0.25s ease;
    max-height: min(52vh, 380px);
    overflow-y: auto;
  }

  .geology-controls.mobile-layout.mobile-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .geology-mobile-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    font-weight: 700;
    margin-bottom: 6px;
  }

  .geology-controls.mobile-layout .btn-geology {
    width: 100%;
    min-height: 46px;
    border-radius: 14px;
  }

  .geology-controls.mobile-layout .soil-control-item {
    flex-direction: column;
    align-items: stretch;
    gap: 6px;
  }

  .geology-controls.mobile-layout .btn-soil,
  .geology-controls.mobile-layout .soil-opacity-row {
    width: 100%;
  }

  .geology-controls.mobile-layout .btn-soil {
    min-height: 42px;
    border-radius: 12px;
  }

  .geology-controls.mobile-layout .soil-opacity-row {
    border-radius: 12px;
    min-height: 38px;
  }

  .geology-controls.mobile-layout .soil-opacity-slider {
    width: 100%;
  }
}

/* Mapbox 控制角落間距與安全區支援 */
:deep(.mapboxgl-ctrl-top-right) {
  margin-top: calc(env(safe-area-inset-top, 0px) + 12px);
  margin-right: calc(env(safe-area-inset-right, 0px) + 12px);
}
:deep(.mapboxgl-ctrl-bottom-right) {
  margin-bottom: calc(env(safe-area-inset-bottom, 0px) + 12px);
  margin-right: calc(env(safe-area-inset-right, 0px) + 12px);
}
:deep(.mapboxgl-ctrl-top-left) {
  margin-top: calc(env(safe-area-inset-top, 0px) + 12px);
  margin-left: calc(env(safe-area-inset-left, 0px) + 12px);
}
:deep(.mapboxgl-ctrl-bottom-left) {
  margin-bottom: calc(env(safe-area-inset-bottom, 0px) + 12px);
  margin-left: calc(env(safe-area-inset-left, 0px) + 12px);
}

.error-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fee;
  color: #c00;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #fcc;
  z-index: 1000;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  z-index: 10;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #8B0000;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 12px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-overlay p {
  color: #666;
  font-size: 14px;
}

/* Mapbox 彈出視窗樣式 */
:deep(.mapboxgl-popup-content) {
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

:deep(.bordeaux-popup h3) {
  margin: 0 0 8px 0;
  color: #8B0000;
  font-size: 18px;
}

:deep(.bordeaux-popup p) {
  margin: 4px 0;
  font-size: 13px;
  color: #333;
}

:deep(.region-popup h4) {
  margin: 0 0 8px 0;
  color: #8B0000;
  font-size: 16px;
}

:deep(.region-popup p) {
  margin: 4px 0;
  font-size: 12px;
}

:deep(.region-popup .description) {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid #eee;
  color: #666;
  font-size: 12px;
  line-height: 1.4;
}

/* 波爾多標記動畫 */
:deep(.bordeaux-marker) {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
</style>


