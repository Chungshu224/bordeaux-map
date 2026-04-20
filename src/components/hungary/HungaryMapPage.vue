<template>
  <div class="main-layout">
    <section class="map-section">

      <!-- ── Header ───────────────────────────────────────────── -->
      <div class="map-header">
        <div class="map-header-left">
          <button class="map-hdr-btn" @click="$emit('back-to-course')">← 返回課程</button>
          <button class="map-hdr-btn ghost" @click="router.push('/')">🏠 首頁</button>
        </div>
        <h1>🇭🇺 匈牙利葡萄酒產區地圖</h1>
      </div>

      <!-- ── 資訊卡（底部置中，與波爾多一致） ─────────────────── -->
      <div
        class="map-info-bar"
        v-if="activeRegion && activeRegion.folder"
        :class="{ collapsed: infoBarCollapsed }"
      >
        <!-- 拖拉把手 -->
        <div class="mobile-sheet-handle-wrap">
          <div class="mobile-sheet-handle"></div>
        </div>

        <!-- 標題列 + 操作按鈕 -->
        <div class="aoc-title-row">
          <span class="aoc-info-title">
            <span class="aoc-dot" :style="{ background: groupColor(activeRegion.group) }"></span>
            {{ regionDisplayName(activeRegion.folder) }}
          </span>
          <div class="title-buttons">
            <!-- 收合按鈕（黑色，與波爾多一致） -->
            <button class="btn-collapse-inline" @click.stop="infoBarCollapsed = !infoBarCollapsed" :title="infoBarCollapsed ? '展開資訊' : '收合資訊'">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline :points="infoBarCollapsed ? '18 15 12 9 6 15' : '6 9 12 15 18 9'"></polyline>
              </svg>
            </button>
            <!-- 重置按鈕（紅色圓形，與波爾多一致） -->
            <button class="btn-reset-icon" @click="resetMap" title="重置地圖">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 3v6h-6"/><path d="M20.49 15A9 9 0 1 1 21 9"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- 收合時隱藏的內容 -->
        <div v-show="!infoBarCollapsed" class="info-details">
          <div v-if="regionInfo" class="region-info-content">
            <div class="info-header">
              <div>
                <b>{{ regionInfo.name }}</b>
                <span class="region-name-hu"> / {{ regionInfo.name_hu }}</span>
                <span v-if="regionInfo.area_ha" class="region-hectare"> — {{ regionInfo.area_ha.toLocaleString() }} 公頃</span>
              </div>
              <div class="style-badges">
                <div
                  v-for="style in regionInfo.styles || []"
                  :key="style"
                  class="style-badge"
                  :style="{ backgroundColor: styleColors[style] || '#999', color: ['白酒', '甜酒', '氣泡酒'].includes(style) ? '#333' : '#fff' }"
                >{{ style }}</div>
              </div>
            </div>
            <div v-if="regionInfo.grapes" class="grape-section">
              <div class="grape-title">主要葡萄品種:</div>
              <div class="grape-badges">
                <div
                  v-for="grape in regionInfo.grapes.split(',').map(g => g.trim())"
                  :key="grape"
                  class="grape-badge"
                  :style="getGrapeStyle(grape)"
                >{{ grape }}</div>
              </div>
            </div>
            <div class="description">{{ regionInfo.notes }}</div>
          </div>
          <div v-else class="no-info">無詳細產區資料</div>
        </div>
      </div>

      <!-- ── Mapbox 地圖容器 ───────────────────────────────────── -->
      <div ref="mapContainer" class="map"></div>

      <!-- ── 底部工具列（永遠顯示，與波爾多一致） ──────────────── -->
      <div v-if="mapReady" class="mobile-map-toolbar">
        <button class="mobile-tool-btn" :class="{ active: mobileAocDrawerOpen }" @click="mobileAocDrawerOpen = true">
          <span class="mobile-tool-icon">產</span>
          <span>產區</span>
        </button>
        <button class="mobile-tool-btn" :class="{ active: is3D }" @click="toggle3D">
          <span class="mobile-tool-icon">3D</span>
          <span>{{ is3D ? '2D' : '3D' }}</span>
        </button>
        <button class="mobile-tool-btn" @click="resetMap">
          <span class="mobile-tool-icon">↺</span>
          <span>重置</span>
        </button>
        <button class="mobile-tool-btn" :class="{ active: activeRegion?.folder && !infoBarCollapsed }" @click="infoBarCollapsed = !infoBarCollapsed">
          <span class="mobile-tool-icon">資</span>
          <span>資訊</span>
        </button>
      </div>

      <!-- 載入中 -->
      <div v-if="isLoading" class="loading-overlay">
        <div class="loading-spinner"></div>
      </div>
      <!-- 錯誤提示 -->
      <div v-if="mapError" class="map-error">{{ mapError }}</div>

    </section>

    <!-- ── 產區抽屜 ─────────────────────────────────────────────── -->
    <transition name="mobile-sheet-fade">
      <div
        v-if="mobileAocDrawerOpen"
        class="mobile-aoc-backdrop"
        @click.self="mobileAocDrawerOpen = false"
      >
        <div class="mobile-aoc-drawer">
          <div class="mobile-aoc-handle"></div>
          <div class="mobile-aoc-toolbar-hdr">
            <h2>🇭🇺 匈牙利產區</h2>
          </div>
          <input
            type="text"
            class="aoc-search"
            placeholder="搜尋產區..."
            v-model="search"
            style="margin: 0 16px 12px;"
          />
          <div class="mobile-aoc-body">
            <div v-for="(folders, group) in filteredRegionGroups" :key="group" class="aoc-group">
              <div class="group-header" @click="toggleGroup(group)">
                <span class="group-icon">{{ expandedGroups[group] ? '▼' : '►' }}</span>
                <span class="group-name" :style="{ color: groupColor(group) }">{{ groupLabels[group] }}</span>
              </div>
              <div v-show="expandedGroups[group]" class="group-content">
                <div
                  v-for="folder in folders"
                  :key="folder"
                  class="aoc-item"
                  :class="{ active: activeRegion?.group === group && activeRegion?.folder === folder }"
                  @click="selectRegion(group, folder); mobileAocDrawerOpen = false"
                >
                  <span class="aoc-dot" :style="{ background: groupColor(group) }"></span>
                  <span>{{ regionDisplayName(folder) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// 手動計算 GeoJSON bbox（替代 @turf/turf）
function geojsonBbox(geojson) {
  const coords = []
  const collect = (c) => {
    if (typeof c[0] === 'number') coords.push(c)
    else c.forEach(collect)
  }
  const features = geojson.features || [geojson]
  for (const f of features) {
    if (f.geometry?.coordinates) collect(f.geometry.coordinates)
  }
  const lngs = coords.map(c => c[0])
  const lats = coords.map(c => c[1])
  return [Math.min(...lngs), Math.min(...lats), Math.max(...lngs), Math.max(...lats)]
}

const router = useRouter()

defineProps({ embedded: { type: Boolean, default: false } })
defineEmits(['back-to-course'])

// ── 狀態 ──────────────────────────────────────────────────────
const mapContainer = ref(null)
const mapReady = ref(false)
const mapError = ref(null)
const isLoading = ref(false)
const is3D = ref(false)
const infoBarCollapsed = ref(true)
const mobileAocDrawerOpen = ref(false)
const search = ref('')
const activeRegion = ref(null)
const regionInfo = ref(null)
const regionsData = ref([])
let map = null
const geojsonCache = new Map()

// ── 色彩定義 ──────────────────────────────────────────────────
const styleColors = {
  '紅酒': '#8B0000',
  '白酒': '#C8A44E',
  '甜酒': '#FFD700',
  '氣泡酒': '#87CEEB',
  '粉紅酒': '#FFB6C1'
}

const GROUP_COLORS = {
  Tokaj:             '#8B1A1A',
  UpperHungary:      '#1B5AA6',
  NorthTransdanubia: '#2E7D32',
  Balaton:           '#0277BD',
  Pannon:            '#6A1B9A',
  Duna:              '#BF6900',
}

function groupColor(key) { return GROUP_COLORS[key] || '#888' }

// ── 群組標籤 ──────────────────────────────────────────────────
const groupLabels = {
  Tokaj:             'Tokaj',
  UpperHungary:      'Észak-Magyarország',
  NorthTransdanubia: 'Észak-Dunántúl',
  Balaton:           'Balaton',
  Pannon:            'Pannon',
  Duna:              'Duna',
}

// ── 產區群組（資料夾名稱） ──────────────────────────────────────
const regionGroups = {
  Tokaj:             ['Tokaj'],
  UpperHungary:      ['Eger', 'Bukk', 'Matra'],
  NorthTransdanubia: ['Neszmely', 'Sopron', 'Pannonhalma', 'Etyek-Buda', 'Mor'],
  Balaton:           ['Somlo', 'Badacsony', 'Balatonfured-Csopak', 'Balaton-felvidek', 'Balatonboglar', 'Zala'],
  Pannon:            ['Tolna', 'Szekszard', 'Pecs', 'Villany'],
  Duna:              ['Hajos-Baja', 'Kunsag', 'Csongrad'],
}

// ── 產區顯示名稱映射 ───────────────────────────────────────────
const DISPLAY_NAMES = {
  Tokaj:                  'Tokaj',
  Eger:                   'Eger',
  Bukk:                   'Bükk',
  Matra:                  'Mátra',
  Neszmely:               'Neszmély',
  Sopron:                 'Sopron',
  Pannonhalma:            'Pannonhalma',
  Somlo:                  'Somló',
  Badacsony:              'Badacsony',
  'Balatonfured-Csopak':  'Balatonfüred-Csopak',
  'Balaton-felvidek':     'Balaton-felvidék',
  Balatonboglar:          'Balatonboglár',
  Zala:                   'Zala',
  'Etyek-Buda':           'Etyek-Buda',
  Mor:                    'Mór',
  Tolna:                  'Tolna',
  Szekszard:              'Szekszárd',
  Pecs:                   'Pécs',
  Villany:                'Villány',
  'Hajos-Baja':           'Hajós-Baja',
  Kunsag:                 'Kunság',
  Csongrad:               'Csongrád',
}

function regionDisplayName(folder) { return DISPLAY_NAMES[folder] || folder }

const expandedGroups = ref({
  Tokaj:             true,
  UpperHungary:      false,
  NorthTransdanubia: false,
  Balaton:           false,
  Pannon:            false,
  Duna:              false,
})

function toggleGroup(key) {
  expandedGroups.value[key] = !expandedGroups.value[key]
}

// ── 搜尋過濾 ──────────────────────────────────────────────────
const filteredRegionGroups = computed(() => {
  if (!search.value) return regionGroups
  const q = search.value.toLowerCase()
  const result = {}
  for (const [key, folders] of Object.entries(regionGroups)) {
    const filtered = folders.filter(f =>
      regionDisplayName(f).toLowerCase().includes(q) ||
      f.toLowerCase().includes(q)
    )
    if (filtered.length) result[key] = filtered
  }
  return result
})

// ── 葡萄品種色彩 ──────────────────────────────────────────────
const RED_GRAPES = ['Kékfrankos', 'Kadarka', 'Cabernet', 'Merlot', 'Pinot Noir', 'Portugieser', 'Bikavér', 'Kövidinka']
const WHITE_GRAPES = ['Furmint', 'Hárslevelű', 'Olaszrizling', 'Rajnai Rizling', 'Juhfark', 'Leányka', 'Chardonnay', 'Sauvignon', 'Ezerjó', 'Tramini', 'Pinot Gris', 'Szürkebarát', 'Müller', 'Muscat', 'Muskotály', 'Kéknyelű', 'Cirfandli', 'Pinot Blanc']

function getGrapeStyle(grape) {
  if (RED_GRAPES.some(g => grape.includes(g))) return { backgroundColor: '#8B0000', color: '#fff' }
  if (WHITE_GRAPES.some(g => grape.includes(g))) return { backgroundColor: '#C8A44E', color: '#333' }
  return { backgroundColor: '#aaa', color: '#333' }
}

// ── 選擇產區 ──────────────────────────────────────────────────
async function selectRegion(group, folder) {
  activeRegion.value = { group, folder }
  infoBarCollapsed.value = false
  regionInfo.value = regionsData.value.find(r => r.id === folder) || null
  await showRegionGeojson(folder)
}

// ── 顯示 GeoJSON ─────────────────────────────────────────────
async function showRegionGeojson(folder) {
  if (!map) return
  const path = `/hungary/${folder}/admin.geojson`
  isLoading.value = true
  mapError.value = null
  try {
    let geojson
    if (geojsonCache.has(path)) {
      geojson = geojsonCache.get(path)
    } else {
      const res = await fetch(path)
      if (!res.ok) throw new Error(`無法載入 (${res.status})`)
      geojson = await res.json()
      geojsonCache.set(path, geojson)
    }
    if (map.getLayer('hungary-fill')) map.removeLayer('hungary-fill')
    if (map.getLayer('hungary-outline')) map.removeLayer('hungary-outline')
    if (map.getSource('hungary-region')) map.removeSource('hungary-region')

    const color = groupColor(activeRegion.value?.group || 'Tokaj')
    map.addSource('hungary-region', { type: 'geojson', data: geojson })
    map.addLayer({
      id: 'hungary-fill',
      type: 'fill',
      source: 'hungary-region',
      paint: { 'fill-color': color, 'fill-opacity': 0.35 }
    })
    map.addLayer({
      id: 'hungary-outline',
      type: 'line',
      source: 'hungary-region',
      paint: { 'line-color': '#fff', 'line-width': 2, 'line-opacity': 0.9 }
    })
    try {
      const bbox = geojsonBbox(geojson)
      map.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: 80, duration: 900 })
    } catch {}
  } catch (err) {
    mapError.value = `載入失敗：${err.message}`
    setTimeout(() => { mapError.value = null }, 4000)
  } finally {
    isLoading.value = false
  }
}

// ── 重置地圖 ──────────────────────────────────────────────────
function resetMap() {
  activeRegion.value = null
  regionInfo.value = null
  if (map) {
    if (map.getLayer('hungary-fill')) map.removeLayer('hungary-fill')
    if (map.getLayer('hungary-outline')) map.removeLayer('hungary-outline')
    if (map.getSource('hungary-region')) map.removeSource('hungary-region')
    map.flyTo({ center: [18.5, 47.2], zoom: 6.8, duration: 1000 })
  }
}

// ── 3D 地形 ───────────────────────────────────────────────────
function toggle3D() {
  is3D.value = !is3D.value
  if (map) map.easeTo({ pitch: is3D.value ? 45 : 0, duration: 800 })
}

// ── 初始化地圖 ────────────────────────────────────────────────
async function initMap(retry = 0) {
  try {
    if (!mapContainer.value) {
      if (retry < 5) { setTimeout(() => initMap(retry + 1), 200); return }
      mapError.value = '無法獲取地圖容器'; return
    }
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [18.5, 47.2],
      zoom: 6.8,
      pitch: 0,
      bearing: 0
    })
    map.on('load', async () => {
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')
      map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
      mapReady.value = true
      // 預設顯示所有產區輪廓
      await loadAllRegionsOverlay()
    })
    map.on('error', e => { mapError.value = `地圖錯誤: ${e.error?.message || ''}` })
  } catch (err) {
    mapError.value = `初始化失敗: ${err.message}`
  }
}

// ── 初始總覽：顯示所有產區輪廓 ──────────────────────────────
async function loadAllRegionsOverlay() {
  if (!map) return
  try {
    const res = await fetch('/hungary/hungary_wine_regions.geojson')
    if (!res.ok) return
    const geojson = await res.json()
    map.addSource('hungary-all', { type: 'geojson', data: geojson })
    map.addLayer({
      id: 'hungary-all-fill',
      type: 'fill',
      source: 'hungary-all',
      paint: { 'fill-color': '#8B6914', 'fill-opacity': 0.15 }
    })
    map.addLayer({
      id: 'hungary-all-outline',
      type: 'line',
      source: 'hungary-all',
      paint: { 'line-color': '#fff', 'line-width': 1.2, 'line-opacity': 0.6 }
    })
  } catch {}
}

// ── 載入產區資料 ──────────────────────────────────────────────
async function loadRegionsData() {
  try {
    const res = await fetch('/hungary-regions.json')
    if (res.ok) regionsData.value = await res.json()
  } catch (err) {
    console.error('載入 hungary-regions.json 失敗:', err)
  }
}

onMounted(async () => {
  await loadRegionsData()
  await initMap()
})

onUnmounted(() => {
  if (map) { map.remove(); map = null }
})
</script>

<style>
html, body {
  margin: 0; padding: 0; height: 100%; width: 100%; overflow: hidden;
}
#app { height: 100%; width: 100%; }
</style>

<style scoped>
/* ── 整體佈局 ─────────────────────────────────────────────── */
.main-layout {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
}
.map-section {
  flex: 1;
  position: relative;
  height: 100%;
  overflow: hidden;
}
.map {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
}

/* ── Header ─────────────────────────────────────────────────── */
.map-header {
  position: absolute;
  top: 0; left: 0; right: 0;
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
  background: rgba(139,26,26,0.82);
  color: #fff;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  transition: background 0.2s;
  white-space: nowrap;
  pointer-events: auto;
}
.map-hdr-btn:hover { background: rgba(160,30,30,0.95); }
.map-hdr-btn.ghost {
  background: rgba(255,255,255,0.75);
  border: 1.5px solid rgba(139,26,26,0.5);
  color: #8B1A1A;
}
.map-hdr-btn.ghost:hover { background: rgba(255,255,255,0.92); }
.map-header h1 {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 700;
  color: #8B1A1A;
  text-align: center;
  flex: 1;
  text-shadow: 0 1px 4px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.9);
  padding-top: 4px;
  pointer-events: none;
}

/* ── 資訊卡（底部置中，與波爾多一致） ──────────────────────── */
.map-info-bar {
  position: absolute;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 110px);
  left: 50%;
  transform: translateX(-50%);
  width: min(92vw, 560px);
  background: white;
  padding: 10px 18px 18px;
  border-radius: 18px;
  box-shadow: 0 8px 22px rgba(0,0,0,0.18);
  z-index: 10;
  font-size: 16px;
  transition: all 0.3s ease;
  color: #222;
  max-height: min(55vh, 420px);
  overflow: hidden;
}
.map-info-bar.collapsed {
  padding: 10px 18px 12px;
}

/* ── 拖拉把手（波爾多風格，預設隱藏，手機顯示） ─────────────── */
.mobile-sheet-handle-wrap {
  display: none;
  justify-content: center;
  padding-bottom: 8px;
  margin-top: -2px;
}
.mobile-sheet-handle {
  width: 52px; height: 5px;
  border-radius: 999px;
  background: rgba(107,31,31,0.22);
}

/* ── 標題列 ─────────────────────────────────────────────────── */
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
  font-size: 1.35rem;
  font-weight: bold;
  flex: 1;
  min-width: 0;
}
.aoc-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  flex-shrink: 0;
}

/* ── 標題列按鈕（波爾多圓形圖示按鈕） ───────────────────────── */
.title-buttons {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
}

/* 黑色收合按鈕（與波爾多手機版一致） */
.btn-collapse-inline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px; height: 40px;
  min-width: 40px;
  padding: 0;
  border: none;
  border-radius: 12px;
  background: linear-gradient(180deg, #121212 0%, #050505 100%);
  color: #fff;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0,0,0,0.28);
  transition: all 0.2s;
  flex-shrink: 0;
}
.btn-collapse-inline:hover {
  background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.35);
}
.btn-collapse-inline svg { transition: transform 0.3s ease; }

/* 紅色重置按鈕（與波爾多手機版一致） */
.btn-reset-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px; height: 40px;
  min-width: 40px;
  padding: 0;
  border: none;
  border-radius: 12px;
  background: linear-gradient(180deg, #ff6f61 0%, #ef4f45 100%);
  color: #fff;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0,0,0,0.2);
  transition: all 0.2s;
  flex-shrink: 0;
}
.btn-reset-icon:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.28);
}

/* ── 收合時隱藏的區塊 ──────────────────────────────────────── */
.info-details {
  overflow-y: auto;
  max-height: min(40vh, 320px);
  transition: all 0.3s ease;
  opacity: 1;
}
.map-info-bar.collapsed .info-details {
  max-height: 0;
  opacity: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

/* ── 產區資訊內容 ────────────────────────────────────────────── */
.region-info-content {
  margin-top: 8px;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #222;
}
.info-header { margin-bottom: 8px; }
.info-header b { font-size: 1.2rem; color: #333; }
.region-name-hu { font-size: 1.0rem; color: #666; font-style: italic; }
.region-hectare { color: #666; font-size: 1.0rem; font-style: italic; margin-left: 4px; }

.style-badges { display: flex; gap: 5px; flex-wrap: wrap; margin-top: 5px; }
.style-badge {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: bold;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.grape-section { margin: 8px 0; }
.grape-title { font-size: 1.0rem; color: #555; margin-bottom: 6px; }
.grape-badges { display: flex; flex-wrap: wrap; gap: 5px; }
.grape-badge { padding: 3px 8px; border-radius: 10px; font-size: 0.9rem; white-space: nowrap; }
.description { margin-top: 10px; font-size: 1.05rem; color: #2f2f2f; line-height: 1.55; }
.no-info { margin-top: 10px; color: #888; font-size: 1.1rem; }

/* ── 底部工具列（懸浮膠囊，與波爾多完全一致） ──────────────── */
.mobile-map-toolbar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: min(90vw, 560px);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 24px);
  z-index: 1300;
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
  border: none;
  min-height: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  font-size: 0.76rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
  transition: all 0.15s;
}
.mobile-tool-btn:hover {
  background: linear-gradient(180deg, #f5ede3 0%, #e8d8c8 100%);
}
.mobile-tool-btn.active {
  background: linear-gradient(180deg, #7b2424 0%, #5f1717 100%);
  color: #fff;
}
.mobile-tool-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px; height: 30px;
  border-radius: 50%;
  background: rgba(107,31,31,0.08);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}
.mobile-tool-btn.active .mobile-tool-icon {
  background: rgba(255,255,255,0.18);
}

/* ── 載入/錯誤 ──────────────────────────────────────────────── */
.loading-overlay {
  position: absolute; inset: 0;
  background: rgba(255,255,255,0.7);
  display: flex; align-items: center; justify-content: center;
  z-index: 20;
}
.loading-spinner {
  width: 50px; height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #8B1A1A;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.map-error {
  position: absolute;
  top: 70px; left: 50%; transform: translateX(-50%);
  background: #f44336;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  z-index: 30;
  max-width: 80%;
  text-align: center;
}

/* ── 產區抽屜 ─────────────────────────────────────────────────── */
.mobile-aoc-backdrop {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(15,23,42,0.34);
  z-index: 1210;
  backdrop-filter: blur(4px);
}
.mobile-aoc-drawer {
  position: absolute;
  left: 50%; right: auto;
  transform: translateX(-50%);
  top: calc(env(safe-area-inset-top, 0px) + 6px);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 100px);
  width: min(90vw, 560px);
  display: flex;
  flex-direction: column;
  background: #f7f3ee;
  border-radius: 20px 20px 14px 14px;
  box-shadow: 0 -10px 30px rgba(0,0,0,0.24);
  overflow: hidden;
  padding-bottom: 10px;
}
.mobile-aoc-handle {
  display: block;
  width: 52px; height: 5px;
  border-radius: 999px;
  background: rgba(139,26,26,0.28);
  margin: 10px auto 8px;
}
.mobile-aoc-toolbar-hdr {
  padding: 0 16px 4px;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  margin-bottom: 4px;
}
.mobile-aoc-toolbar-hdr h2 {
  font-size: 1.2rem;
  color: #8B1A1A;
  margin: 0 0 8px;
}
.mobile-aoc-body {
  flex: 1;
  overflow-y: auto;
  padding: 0 8px;
}

/* ── 產區清單 ────────────────────────────────────────────────── */
.aoc-search {
  width: calc(100% - 32px);
  padding: 10px 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1.0rem;
  box-sizing: border-box;
}
.aoc-search:focus { outline: none; border-color: #8B1A1A; }

.aoc-group { margin-bottom: 12px; }
.group-header {
  display: flex;
  align-items: center;
  padding: 8px 5px;
  cursor: pointer;
  border-radius: 4px;
  color: #222;
}
.group-header:hover { background: rgba(0,0,0,0.05); }
.group-icon { font-size: 0.9rem; margin-right: 8px; color: #444; }
.group-name { font-weight: 600; font-size: 1.0rem; }
.group-content { margin-left: 15px; margin-top: 5px; }
.aoc-item {
  display: flex;
  align-items: center;
  padding: 7px 10px;
  margin: 2px 0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.95rem;
  color: #222;
}
.aoc-item:hover { background: rgba(0,0,0,0.05); }
.aoc-item.active { background: rgba(139,26,26,0.10); font-weight: 600; color: #111; }
.aoc-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  margin-right: 8px;
  flex-shrink: 0;
}

/* ── RWD：手機版額外調整 ────────────────────────────────────── */
@media (max-width: 768px) {
  .mobile-sheet-handle-wrap {
    display: flex;
  }
  .map-info-bar {
    bottom: calc(env(safe-area-inset-bottom, 0px) + 110px);
    width: min(90vw, 560px);
    max-height: min(42vh, 360px);
    padding: 10px 14px 14px;
    border-radius: 18px;
    background: rgba(255,255,255,0.97);
  }
  .map-info-bar.collapsed {
    padding: 10px 12px 12px;
  }
  .info-details { max-height: min(28vh, 220px); }
  .aoc-info-title {
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .map-header h1 { font-size: 1.05rem; }
  .map-header { padding: 6px 10px; background: rgba(255,255,255,0.72); }
}

/* ── 抽屜動畫 ─────────────────────────────────────────────────── */
.mobile-sheet-fade-enter-active,
.mobile-sheet-fade-leave-active { transition: opacity 0.22s ease; }
.mobile-sheet-fade-enter-active .mobile-aoc-drawer,
.mobile-sheet-fade-leave-active .mobile-aoc-drawer {
  transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1);
}
.mobile-sheet-fade-enter-from,
.mobile-sheet-fade-leave-to { opacity: 0; }
.mobile-sheet-fade-enter-from .mobile-aoc-drawer,
.mobile-sheet-fade-leave-to .mobile-aoc-drawer { transform: translateY(40px); }
</style>
