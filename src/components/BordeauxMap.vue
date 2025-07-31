<template>
  <div class="main-layout">
    <AOCList
      v-model:search="search"
      :filteredGroups="filteredGroups"
      :expandedGroups="expandedGroups"
      :toggleGroup="toggleGroup"
      :activeAOC="activeAOC"
      :aocColor="aocColor"
      @selectAOC="showAOCGeojson"
    />
    <div class="map-section">
      <div class="map-header">
        <h1>波爾多葡萄酒產區地圖</h1>
      </div>
      
      <div class="map-info-bar" v-if="activeAOC.aoc">
        <span class="aoc-info-title">
          <span class="aoc-dot" :style="{background: aocColor(activeAOC.group)}"></span>
          {{ activeAOC.aoc.replace('.geojson','').replace(/-/g,' ').replace(/_/g,' ') }}
        </span>
        <button class="btn-reset" @click="resetMap">重置地圖</button>
        <div v-if="regionInfo">
          <div class="region-info-content">
            <b>{{ regionInfo.name }}</b> <span class="region-type">({{ regionInfo.type }})</span><br>
            <span class="grapes">葡萄品種：{{ regionInfo.grapes }}</span><br>
            <span class="description">{{ regionInfo.description }}</span>
          </div>
        </div>
        <div v-else class="no-info">無詳細產區資料</div>
      </div>
      
      <div ref="mapContainer" class="map"></div>
      
      <button class="btn-3d" @click="toggle3D">
        {{ is3D ? '2D' : '3D' }}
      </button>
      
      <div v-if="mapError" class="map-error">
        {{ mapError }}
      </div>
      <div v-if="isLoading" class="loading-overlay">
        <div class="loading-spinner"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as turf from '@turf/turf'
import AOCList from './AOCList.vue'

// 狀態管理
const isLoading = ref(false)
const mapError = ref(null)
const mapContainer = ref(null)
let map = null
const is3D = ref(false)
const search = ref('')
const activeAOC = ref({ group: 'Regional', aoc: 'Bordeaux_AOC.geojson' })
const regionInfo = ref(null)
const regionsData = ref([])
const geojsonCache = new Map()

// 展開/收合狀態
const expandedGroups = ref({
  'Regional': true,
  'LeftBank-Medoc': false,
  'LeftBank-Graves': false,
  'RightBank-Libournais': false,
  'RightBank-Blaye': false,
  'Entre-Deux-Mers': false,
  'Sauternais': false
})

const toggleGroup = (groupName) => {
  expandedGroups.value[groupName] = !expandedGroups.value[groupName]
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

// 搜尋過濾
const aocGroups = ref({
  'Regional': [
    'Bordeaux_AOC.geojson',
    'Bordeaux-Superior_AOC.geojson',
    'Cotes-de-Bordeaux_AOC.geojson',
    'Cremant-de-Bordeaux_AOC.geojson'
  ],
  'LeftBank-Medoc': [
    'Medoc_AOC.geojson',
    'Haut-Medoc_AOC.geojson',
    'Margaux_AOC.geojson',
    'Pauillac_AOC.geojson',
    'St-Julien_AOC.geojson',
    'St-Estephe_AOC.geojson',
    'Listrac-Medoc_AOC.geojson',
    'Moulis-en-Medoc_AOC.geojson'
  ],
  'LeftBank-Graves': [
    'Graves_AOC.geojson',
    'Pessac-Leognan_AOC.geojson',
    'Graves-Superieures_AOC.geojson'
  ],
  'RightBank-Libournais': [
    'Pomerol_AOC.geojson',
    'St-Emilion_AOC.geojson',
    'St-Emilion-Grand-Cru_AOC.geojson',
    'Fronsac_AOC.geojson',
    'Canon-Fronsac_AOC.geojson',
    'Lalande-de-Pomerol_AOC.geojson',
    'Lussac-St-Emilion_AOC.geojson',
    'Montagne-St-Emilion_AOC.geojson',
    'Puisseguin-St-Emilion_AOC.geojson',
    'St-Georges-St-Emilion_AOC.geojson',
    'Castillon-Cotes-de-Bordeaux_AOC.geojson'
  ],
  'RightBank-Blaye': [
    'Blaye_AOC.geojson',
    'Cotes-de-Bourg_AOC.geojson',
    'Côtes de Blaye_AOC.geojson',
    'Côtes-de-Bordeaux-Blaye_AOC.geojson',
    'Côtes-de-Bordeaux_AOC.geojson'
  ],
  'Entre-Deux-Mers': [
    'Entre-Deux-Mers_AOC.geojson',
    'Cadillac_AOC.geojson',
    'Loupiac_AOC.geojson',
    'Sainte-Croix-du-Mont_AOC.geojson',
    'Entre-deux-Mers-Haut-Benauge_AOC.geojson',
    'Graves-of-Vayres_AOC.geojson',
    'St-Foy-Bordeaux_AOC.geojson',
    'Bordeaux Haut-Benauge_AOC.geojson',
    'Côtes-de-Bordeaux-Cadillac_AOC.geojson',
    'Côtes-de-Bordeaux-Francs_AOC.geojson',
    '1er-Côtes-de-Bordeaux_AOC.geojson',
    'Cotes-de-Bordeaux-St-Macaire_AOC.geojson'
  ],
  'Sauternais': [
    'Sauternes_AOC.geojson',
    'Barsac_AOC.geojson',
    'Cerons_AOC.geojson'
  ]
})

const filteredGroups = computed(() => {
  if (!search.value) return aocGroups.value
  
  const result = {}
  for (const [group, aocs] of Object.entries(aocGroups.value)) {
    const filtered = aocs.filter(aoc => 
      aoc.toLowerCase().includes(search.value.toLowerCase())
    )
    if (filtered.length) result[group] = filtered
  }
  
  return result
})

watch(filteredGroups, (val) => {
  // 有搜尋結果時，自動展開該群組
  for (const key in expandedGroups.value) {
    expandedGroups.value[key] = !!val[key]
  }
})

// 亂數顏色產生器
function randomColor(alpha = 0.3) {
  const r = Math.floor(Math.random() * 200)
  const g = Math.floor(Math.random() * 200)
  const b = Math.floor(Math.random() * 200)
  return `rgba(${r},${g},${b},${alpha})`
}

// 顯示 AOC 地圖
const showAOCGeojson = async (groupName, aocFile) => {
  if (!map) {
    mapError.value = '地圖尚未初始化'
    return
  }
  
  isLoading.value = true
  activeAOC.value = { group: groupName, aoc: aocFile }
  
  try {
    // 查找產區資訊
    const aocId = aocFile.replace('.geojson', '')
    regionInfo.value = Array.isArray(regionsData.value) ? 
      regionsData.value.find(r => r.id === aocId) || null : null
    
    // 決定 geojson 路徑
    let url = ''
    if (groupName === 'Regional') {
      url = `/geojson/Regional/${aocFile}`
    } else {
      let folder = groupName
      if (groupName.startsWith('RightBank-')) {
        folder = 'RightBank/' + groupName.split('-')[1]
      } else if (groupName.startsWith('LeftBank-')) {
        folder = 'LeftBank/' + groupName.split('-')[1]
      } else if (groupName === 'Regional') {
        folder = 'Regional'
      } else if (groupName === 'Entre-Deux-Mers' || groupName === 'Sauternais') {
        folder = groupName
      }
      url = `/geojson/${folder}/${aocFile}`
    }
    
    // 從快取或載入 geojson
    let geojson
    if (geojsonCache.has(url)) {
      geojson = geojsonCache.get(url)
    } else {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      geojson = await res.json()
      geojsonCache.set(url, geojson)
    }
    
    // 移除舊圖層
    if (map.getLayer('aoc-fill')) map.removeLayer('aoc-fill')
    if (map.getLayer('aoc-outline')) map.removeLayer('aoc-outline')
    if (map.getSource('aoc')) map.removeSource('aoc')
    
    // 添加新圖層
    map.addSource('aoc', {
      type: 'geojson',
      data: geojson
    })
    
    // 添加填色圖層
    map.addLayer({
      id: 'aoc-fill',
      type: 'fill',
      source: 'aoc',
      paint: {
        'fill-color': [
          'case',
          ['has', 'color'],
          ['get', 'color'],
          randomColor(0.3)
        ],
        'fill-opacity': 0.9
      }
    })
    
    // 添加輪廓線
    map.addLayer({
      id: 'aoc-outline',
      type: 'line',
      source: 'aoc',
      paint: {
        'line-color': '#fff',
        'line-width': 1.5,
        'line-opacity': 0.9
      }
    })
    
    // 縮放到範圍
    const bbox = turf.bbox(geojson)
    map.fitBounds(bbox, { padding: 40, duration: 1200 })
    
    mapError.value = null
  } catch (err) {
    console.error('GeoJSON 載入失敗:', err)
    mapError.value = `載入失敗: ${err.message}`
  } finally {
    isLoading.value = false
  }
}

const resetMap = () => {
  showAOCGeojson('Regional', 'Bordeaux_AOC.geojson')
}

const toggle3D = () => {
  is3D.value = !is3D.value
  if (map) {
    map.easeTo({ pitch: is3D.value ? 45 : 0, duration: 800 })
  }
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
    
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2h1bmdzaHVsZWUiLCJhIjoiY21kcTZqbHU1MDNnODJsczZ5NXBtNms2NCJ9.UThWFp3_47qETAMZWhdrTg'
    
    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [-0.57, 44.84],
      zoom: 9,
      pitch: is3D.value ? 45 : 0,
      bearing: 0
    })
    
    map.on('load', async () => {
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')
      map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
      
      // 預設顯示波爾多整體
      await showAOCGeojson('Regional', 'Bordeaux_AOC.geojson')
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

// 預載常用 geojson
const preloadGeojson = async () => {
  try {
    const commonAOCs = [
      { group: 'Regional', file: 'Bordeaux_AOC.geojson' },
      { group: 'LeftBank-Medoc', file: 'Medoc_AOC.geojson' }
    ]
    
    for (const { group, file } of commonAOCs) {
      let url = ''
      if (group === 'Regional') {
        url = `/geojson/Regional/${file}`
      } else if (group.startsWith('LeftBank-')) {
        url = `/geojson/LeftBank/${group.split('-')[1]}/${file}`
      }
      
      if (!geojsonCache.has(url)) {
        const res = await fetch(url)
        if (res.ok) {
          const data = await res.json()
          geojsonCache.set(url, data)
        }
      }
    }
  } catch (err) {
    console.warn('預載 GeoJSON 失敗:', err)
  }
}

// 載入產區資訊
const loadRegionsData = async () => {
  try {
    const res = await fetch('/bordeaux-regions.json')
    if (res.ok) {
      regionsData.value = await res.json()
    } else {
      throw new Error(`HTTP ${res.status}`)
    }
  } catch (err) {
    console.error('載入產區資料失敗:', err)
    regionsData.value = []
  }
}

onMounted(async () => {
  // 先載入產區資料
  await loadRegionsData()
  
  // 確保 DOM 已渲染
  await nextTick()
  setTimeout(async () => {
    await initMap()
    await preloadGeojson()
  }, 100)
})

onUnmounted(() => {
  if (map) {
    map.remove()
    map = null
  }
})
</script>

<style>
/* 在 App.vue 中添加這些全局樣式 */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

#app {
  height: 100%;
  width: 100%;
}
</style>

<style scoped>
/* BordeauxMap.vue 內的樣式 */
.main-layout {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

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
  padding: 15px;
  border-radius: 8px;
  max-width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.aoc-info-title {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.aoc-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
}

.region-info-content {
  margin-top: 10px;
  font-size: 0.95rem;
  line-height: 1.5;
}

.region-type {
  color: #777;
  font-size: 0.9rem;
}

.grapes {
  color: #555;
  font-size: 0.9rem;
}

.description {
  display: block;
  margin-top: 5px;
}

.no-info {
  margin-top: 10px;
  color: #888;
  font-size: 0.9rem;
  font-style: italic;
}

.btn-reset {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 6px 12px;
  background: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
}

.btn-reset:hover {
  background: #d32f2f;
}

.btn-3d {
  position: absolute;
  top: 80px;
  right: 10px;
  padding: 8px 15px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  z-index: 10;
  font-weight: bold;
}

.btn-3d:hover {
  background: #388E3C;
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

/* 響應式設計 */
@media (max-width: 768px) {
  .main-layout {
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  
  /* AOCList 組件樣式修改建議 */
  :deep(.aoc-list) {
    height: 30%;
    width: 100%;
    overflow-y: auto;
    flex-shrink: 0;
  }
  
  .map-section {
    height: 70%;
    width: 100%;
  }
  
  .map-info-bar {
    max-width: calc(100% - 40px);
    width: auto;
  }
  
  .map-header h1 {
    font-size: 1.2rem;
  }
}
</style>


