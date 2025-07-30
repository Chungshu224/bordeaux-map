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
    <MapSection
      ref="mapSectionRef"
      :activeAOC="activeAOC"
      :regionInfo="regionInfo"
      :aocColor="aocColor"
      :resetMap="resetMap"
      :toggle3D="toggle3D"
      :is3D="is3D"
    />
  </div>
</template>

<script setup>
import AOCList from './AOCList.vue'
import MapSection from './MapSection.vue'
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as turf from '@turf/turf'
// 改用 fetch 載入 regionsData
const regionsData = ref([])

const mapSectionRef = ref(null)
let map = null
const is3D = ref(false)
const search = ref('')
const activeAOC = ref({ group: 'Regional', aoc: 'Bordeaux_AOC.geojson' })
const regionInfo = ref(null)
// 色彩對應
function aocColor(groupName) {
  if (groupName.includes('LeftBank')) return '#8B0000';
  if (groupName.includes('RightBank')) return '#4169E1';
  if (groupName === 'Sauternais') return '#FFD700';
  if (groupName === 'Regional') return '#8B5C2A';
  if (groupName === 'Entre-Deux-Mers') return '#2E8B57';
  return '#aaa';
}

// 搜尋過濾
const filteredGroups = computed(() => {
  if (!search.value) return aocGroups.value;
  const result = {};
  for (const [group, arr] of Object.entries(aocGroups.value)) {
    const filtered = arr.filter(aoc => aoc.toLowerCase().includes(search.value.toLowerCase()));
    if (filtered.length) result[group] = filtered;
  }
  return result;
});

watch(filteredGroups, (val) => {
  for (const key in expandedGroups.value) {
    expandedGroups.value[key] = !!val[key];
  }
});

// AOC清單分組
const aocGroups = ref({})
// 展開/收合狀態
const expandedGroups = ref({})
const toggleGroup = (groupName) => {
  // 只展開一個群組
  for (const key in expandedGroups.value) {
    expandedGroups.value[key] = false
  }
  expandedGroups.value[groupName] = true
}

// 載入 geojson 資料夾結構
const loadAOCList = async () => {
  // 分組對應資料夾
  const groups = {
    'Entre-Deux-Mers': [
      '1er-Côtes-de-Bordeaux_AOC.geojson',
      'Bordeaux Haut-Benauge_AOC.geojson',
      'Cadillac_AOC.geojson',
      'Cotes-de-Bordeaux-St-Macaire_AOC.geojson',
      'Côtes-de-Bordeaux-Cadillac_AOC.geojson',
      'Côtes-de-Bordeaux-Francs_AOC.geojson',
      'Entre-deux-Mers-Haut-Benauge_AOC.geojson',
      'Entre-Deux-Mers_AOC.geojson',
      'Graves-of-Vayres_AOC.geojson',
      'Loupiac_AOC.geojson',
      'Sainte-Croix-du-Mont_AOC.geojson',
      'St-Foy-Bordeaux_AOC.geojson',
    ],
    'LeftBank-Graves': [
      'Graves-Superieures_AOC.geojson',
      'Graves_AOC.geojson',
      'Pessac-Leognan_AOC.geojson',
    ],
    'LeftBank-Medoc': [
      'Haut-Medoc_AOC.geojson',
      'Listrac-Medoc_AOC.geojson',
      'Margaux_AOC.geojson',
      'Medoc_AOC.geojson',
      'Moulis-en-Medoc_AOC.geojson',
      'Pauillac_AOC.geojson',
      'St-Estephe_AOC.geojson',
      'St-Julien_AOC.geojson',
    ],
    'Regional': [
      'Bordeaux-Superior_AOC.geojson',
      'Bordeaux_AOC.geojson',
      'Cotes-de-Bordeaux_AOC.geojson',
      'Cremant-de-Bordeaux_AOC.geojson',
    ],
    'RightBank-Blaye': [
      'Blaye_AOC.geojson',
      'Cotes-de-Bourg_AOC.geojson',
      'Côtes de Blaye_AOC.geojson',
      'Côtes-de-Bordeaux-Blaye_AOC.geojson',
      'Côtes-de-Bordeaux_AOC.geojson',
    ],
    'RightBank-Libournais': [
      'Canon-Fronsac_AOC.geojson',
      'Castillon-Cotes-de-Bordeaux_AOC.geojson',
      'Fronsac_AOC.geojson',
      'Lalande-de-Pomerol_AOC.geojson',
      'Lussac-St-Emilion_AOC.geojson',
      'Montagne-St-Emilion_AOC.geojson',
      'Pomerol_AOC.geojson',
      'Puisseguin-St-Emilion_AOC.geojson',
      'St-Emilion-Grand-Cru_AOC.geojson',
      'St-Emilion_AOC.geojson',
      'St-Georges-St-Emilion_AOC.geojson',
    ],
    'Sauternais': [
      'Barsac_AOC.geojson',
      'Cerons_AOC.geojson',
      'Sauternes_AOC.geojson',
    ]
  }
  aocGroups.value = groups
  // 預設全部收合
  for (const key in groups) expandedGroups.value[key] = false
}

// 亂數顏色產生器
function randomColor(alpha = 0.3) {
  const r = Math.floor(Math.random() * 200)
  const g = Math.floor(Math.random() * 200)
  const b = Math.floor(Math.random() * 200)
  return `rgba(${r},${g},${b},${alpha})`
}

const geojsonCache = new Map();

// 載入 geojson 並加到地圖，groupName 對應資料夾
const showAOCGeojson = async (groupName, aocFile) => {
  if (!map) return; // 防止 map 尚未初始化
  activeAOC.value = { group: groupName, aoc: aocFile }
  // 顯示 regionInfo
  const aocId = aocFile.replace('.geojson', '').replace(/-/g, '_');
  if (Array.isArray(regionsData.value) && regionsData.value.length > 0) {
    regionInfo.value = regionsData.value.find(r => r.id && aocId.startsWith(r.id)) || null;
  } else {
    regionInfo.value = null;
  }
  // 決定 geojson 路徑
  let url = ''
  if (groupName === 'Regional' && aocFile === 'Bordeaux_AOC.geojson') {
    url = `/${aocFile}` // 起始 geojson 在 public 根目錄
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
  console.log('fetching:', url)
  let geojson;
  try {
    if (geojsonCache.has(url)) {
      geojson = geojsonCache.get(url);
    } else {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      geojson = await res.json()
      geojsonCache.set(url, geojson);
    }
    // 先移除舊圖層
    if (map.getLayer('aoc-fill')) map.removeLayer('aoc-fill');
    if (map.getLayer('aoc-outline')) map.removeLayer('aoc-outline');
    if (map.getSource('aoc')) map.removeSource('aoc');
    map.addSource('aoc', {
      type: 'geojson',
      data: geojson
    })
    // 內部填色（30%透明亂數色）
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
    // 外框白色細線
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
    // 自動縮放至該AOC範圍
    const bbox = turf.bbox(geojson)
    map.fitBounds(bbox, { padding: 40, duration: 1200 })
  } catch (err) {
    console.error('GeoJSON 載入失敗:', err)
    alert(`GeoJSON 載入失敗: ${err.message}`)
  }
}

const resetMap = () => {
  showAOCGeojson('Regional', 'Bordeaux_AOC.geojson')
}

const initMap = async () => {
  await nextTick()
  const mapContainer = mapSectionRef.value?.mapContainer?.value
  if (!mapContainer) return
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
  map = new mapboxgl.Map({
    container: mapContainer,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: [-0.45, 44.85],
    zoom: 9.5,
    pitch: is3D.value ? 45 : 0,
    bearing: 0
  })
  map.on('load', async () => {
    // 預設顯示 Bordeaux
    await showAOCGeojson('Regional', 'Bordeaux_AOC.geojson')
    map.addControl(new mapboxgl.NavigationControl(), 'top-right')
    map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
  })
}

const toggle3D = () => {
  is3D.value = !is3D.value
  if (map) {
    map.easeTo({ pitch: is3D.value ? 45 : 0, duration: 800 })
  }
}

onMounted(async () => {
  loadAOCList()
  initMap()
  // 載入 regionsData
  try {
    const res = await fetch('/bordeaux-regions.json')
    if (res.ok) {
      regionsData.value = await res.json()
    }
  } catch (e) {
    regionsData.value = []
  }
  if (!Array.isArray(regionsData.value)) regionsData.value = [];
})

onUnmounted(() => {
  if (map) {
    map.remove();
    map = null;
  }
});
</script>

<style scoped>
/* 主版面調整為左20%右80% */
.main-layout {
  display: flex;
  height: 100vh;
  align-items: stretch;
}
.aoc-list {
  width: 20%;
  min-width: 200px;
  max-width: 340px;
  background: #f8f8f8;
  border-right: 1.5px solid #eee;
  padding: 32px 18px 18px 18px;
  overflow-y: auto;
  box-sizing: border-box;
  position: relative;
  left: 0;
  top: 0;
  z-index: 1200;
}
.map-section {
  flex: 1 1 80%;
  width: 80%;
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.aoc-list h2 {
  font-size: 1.2rem;
  margin-bottom: 12px;
  color: #8B0000;
  letter-spacing: 1px;
}
.aoc-search {
  width: 100%;
  padding: 7px 12px;
  border-radius: 6px;
  border: 1.5px solid #ccc;
  margin-bottom: 12px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
}
.aoc-search:focus {
  border: 1.5px solid #4169E1;
}
.aoc-group {
  margin-bottom: 10px;
}
.group-header {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.08rem;
  padding: 6px 0 2px 0;
  user-select: none;
}
.arrow {
  display: inline-block;
  transition: transform 0.2s;
  margin-right: 6px;
}
.arrow.open {
  transform: rotate(90deg);
}
.group-title {
  color: #4169E1;
}
.aoc-list ul {
  list-style: none;
  padding: 0 0 0 18px;
  margin: 0;
}
.aoc-list li {
  padding: 6px 0 6px 0;
  border-bottom: 1px solid #eee;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  border-left: 3px solid transparent;
  transition: background 0.18s, border-color 0.18s;
}
.aoc-list li:hover {
  background: #f0f6ff;
  border-left: 3px solid #4169E1;
}
.aoc-list li.active {
  background: #e6e6fa;
  border-left: 3px solid #8B0000;
  font-weight: bold;
}
.aoc-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 2px;
  border: 1.5px solid #fff;
  box-shadow: 0 0 2px #aaa;
}
.map-section {
  flex: 1;
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.map-header {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1000;
  background: rgba(255,255,255,0.97);
  padding: 20px 20px 16px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.13);
  max-width: 340px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.map-info-bar {
  position: absolute;
  top: 90px;
  left: 30px;
  z-index: 1001;
  background: rgba(255,255,255,0.98);
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  padding: 10px 18px 10px 12px;
  display: flex;
  align-items: center;
  gap: 18px;
  min-width: 180px;
  font-size: 1.08rem;
}
.aoc-info-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  color: #8B0000;
}
.btn-reset {
  background: #fff;
  border: 1.5px solid #4169E1;
  color: #4169E1;
  border-radius: 5px;
  padding: 4px 14px;
  font-size: 0.98rem;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
}
.btn-reset:hover {
  background: #4169E1;
  color: #fff;
}
.map-shadow {
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  border-radius: 12px;
}
.btn-3d-float {
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 1100;
  background: #fff;
  border: 1.5px solid #FFD700;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  cursor: pointer;
  transition: background 0.18s, border 0.18s;
}
.btn-3d-float:hover {
  background: #FFF8DC;
  border: 1.5px solid #8B0000;
}
.map-header h1 {
  margin: 0 0 8px 0;
  font-size: 1.5rem;
  color: #333;
}
.map-header p {
  margin: 0;
  color: #666;
  font-size: 0.95rem;
}
.btn-3d {
  margin-top: 8px;
  padding: 6px 18px;
  border-radius: 6px;
  border: none;
  background: #4169E1;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-3d:hover {
  background: #27408b;
}
.map {
  width: 100%;
  height: 100vh;
}
@media (max-width: 900px) {
  .main-layout {
    flex-direction: column;
  }
  .aoc-list {
    width: 100vw;
    min-width: 0;
    max-width: none;
    height: 180px;
    border-right: none;
    border-bottom: 1.5px solid #eee;
    padding: 18px 10px 10px 10px;
  }
  .map-section {
    width: 100vw;
    height: calc(100vh - 180px);
  }
  .map {
    height: 100%;
  }
}
</style>


