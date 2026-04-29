<template>
  <div class="main-layout">

    <!-- ── 地圖區段（全螢幕，與波爾多格式相同） ────────────────── -->
    <section class="map-section">

      <!-- Header -->
      <RegionMapHeader
        regionName="羅亞爾河"
        title="Loire Valley Wine Region Map"
        icon="🇫🇷"
        @back="$emit('back-to-course')"
      />

      <!-- 資訊卡 -->
      <RegionMapInfoPanel
        v-if="mapReady"
        :info="unifiedInfo"
        theme-color="#1b6b5a"
        :audio-available="!!activeAOC?.aoc"
        :collapsed="infoBarCollapsed"
        @toggle-collapse="infoBarCollapsed = !infoBarCollapsed"
        @play-audio="playPronunciation"
        @reset="resetMap"
      >
        <template #extra-content>
          <div v-if="regionInfo?.nameFr" class="rmap-section">
            <span class="rmap-section-title">法語名稱</span>
            <div style="color:#ddd;font-size:0.85rem;font-style:italic">{{ regionInfo.nameFr }}</div>
          </div>
        </template>
      </RegionMapInfoPanel>

      <!-- Mapbox 地圖容器 -->
      <div ref="mapContainer" class="map"></div>

      <!-- 圖層面板 -->
      <div v-if="mobileLayersOpen" class="layer-panel-wrapper">
        <RegionMapLayerPanel
          :is3D="is3D"
          :brgm-available="true"
          :brgm-enabled="brgmEnabled"
          @toggle-3d="toggle3D"
          @toggle-brgm="toggleBRGM(map)"
          @close="mobileLayersOpen = false"
        />
        <!-- BRGM 地質圖層控制列（BRGM啟用時顯示）-->
        <div v-if="brgmEnabled" class="loire-brgm-inline-panel">
          <div class="loire-brgm-inline-title">🗺️ BRGM 地質圖</div>
          <div class="loire-brgm-inline-row">
            <span class="loire-brgm-inline-lbl">透明度</span>
            <input class="loire-brgm-inline-slider" type="range" min="0.05" max="0.85" step="0.05" v-model.number="brgmOpacity" @input="updateBRGMOpacity(map)">
            <span class="loire-brgm-inline-pct">{{ Math.round(brgmOpacity * 100) }}%</span>
          </div>
          <div class="loire-brgm-inline-footer">
            <span>© BRGM LITHO_1M (Etalab OL)</span>
            <span>點擊地圖查看岩石資訊</span>
          </div>
        </div>
      </div>

      <!-- 底部工具列 -->
      <RegionMapMobileToolbar
        v-if="mapReady"
        :aoc-open="mobileAocDrawerOpen"
        :layer-open="mobileLayersOpen"
        :is3D="is3D"
        :info-open="!!activeAOC?.aoc && !infoBarCollapsed"
        @action="handleMobileAction"
      />

      <!-- 載入中 -->
      <div v-if="isLoading" class="loading-overlay">
        <div class="loading-spinner"></div>
      </div>

      <!-- 錯誤提示 -->
      <div v-if="mapError" class="map-error">{{ mapError }}</div>

    </section>

    <!-- 行動版 AOC 抽屜 -->
    <RegionMapAppellationDrawer
      v-model:open="mobileAocDrawerOpen"
      region-name="Loire Valley"
      :grouped="groupedDrawerUnified"
      :search="search"
      :active-id="activeAOC?.aoc ? `${activeAOC.group}/${activeAOC.aoc}` : null"
      @update:search="search = $event"
      @select="selectById"
    />

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as turf from '@turf/turf'
import { useBRGMGeology, BRGM_POPUP_STYLES } from '@/composables/useBRGMGeology.js'
import {
  RegionMapHeader, RegionMapLayerPanel, RegionMapInfoPanel,
  RegionMapAppellationDrawer, RegionMapMobileToolbar
} from '../shared/regionMap/index.js'

const router = useRouter()

defineProps({ embedded: { type: Boolean, default: false } })
defineEmits(['back-to-course'])

// ── 狀態 ──────────────────────────────────────────────────────
const mapContainer = ref(null)
const mapReady = ref(false)
const mapError = ref(null)
const isLoading = ref(false)
const is3D = ref(false)
const infoBarCollapsed = ref(false)
const mobileAocDrawerOpen = ref(false)
const mobileLayersOpen = ref(false)
const search = ref('')

// ── 土壤圖層狀態 ─────────────────────────────────────────────
// ── BRGM 法國地質圖 ──
const { brgmEnabled, brgmOpacity, toggleBRGM, resetBRGM, updateBRGMOpacity, updateBRGMClip } = useBRGMGeology('loire')

// 當 BRGM 開啟且已有選取的 AOC 時，立即套用遮罩
watch(brgmEnabled, (enabled) => {
  if (!map) return
  if (!enabled) { updateBRGMClip(map, null); return }
  if (!activeAOC.value?.aoc) return
  const path = getGeojsonPath(activeAOC.value.group, activeAOC.value.aoc)
  const geojson = geojsonCache.get(path)
  if (geojson) updateBRGMClip(map, geojson)
})


// ── 地圖樣式 ──────────────────────────────────────────────────
const mapStyles = [
  { id: 'satellite-streets', label: '衛星街道', icon: '🛰️' },
  { id: 'streets',           label: '街道圖',   icon: '🗺️' },
  { id: 'dark',              label: '暗色地圖', icon: '🌑' },
]
const currentMapStyle = ref('satellite-streets')
const MAP_STYLE_URLS = {
  'satellite-streets': 'mapbox://styles/mapbox/satellite-streets-v12',
  'streets':           'mapbox://styles/mapbox/streets-v12',
  'dark':              'mapbox://styles/mapbox/dark-v11',
}
function setMapStyle(styleId) {
  if (!map || currentMapStyle.value === styleId) return
  currentMapStyle.value = styleId
  map.setStyle(MAP_STYLE_URLS[styleId])
  map.once('style.load', () => {
    if (activeAOC.value?.group && activeAOC.value?.aoc) {
      showAOCGeojson(activeAOC.value.group, activeAOC.value.aoc)
    }
  })
}
const activeAOC = ref(null)
const regionInfo = ref(null)
const regionsData = ref([])
let map = null
const geojsonCache = new Map()

// ── 色彩定義 ──────────────────────────────────────────────────
const styleColors = {
  '紅酒': '#8B0000', '白酒': '#C8A44E', '甜酒': '#FFD700',
  '氣泡酒': '#87CEEB', '粉紅酒': '#FFB6C1'
}

const GROUP_COLORS = {
  Regional:      '#5A7A5A',
  PayNantes:     '#1B6B8A',
  AnjouSaumur:   '#7A3B8A',
  Touraine:      '#8A5B1B',
  Centre:        '#1B7A4A',
  MassifCentral: '#7A1B1B',
}

function groupColor(key) { return GROUP_COLORS[key] || '#888' }

// ── 群組標籤 ──────────────────────────────────────────────────
const groupLabels = {
  Regional:      'Regional',
  PayNantes:     'Pays Nantais',
  AnjouSaumur:   'Anjou-Saumur',
  Touraine:      'Touraine',
  Centre:        'Centre',
  MassifCentral: 'Massif Central',
}

// ── 課程 Level → 產區群組對應 ───────────────────────────────
const LEVEL_MAP_GROUPS = {
  1: { key: 'PayNantes',     emoji: '🌊', color: '#1a6b5a', label: '南特' },
  2: { key: 'AnjouSaumur',  emoji: '🏰', color: '#8b2c2c', label: '安茹' },
  3: { key: 'Touraine',     emoji: '🦁', color: '#c19a28', label: '都漢' },
  4: { key: 'Centre',       emoji: '🌿', color: '#2c6e8a', label: '中央' },
  5: { key: 'MassifCentral',emoji: '🌻', color: '#7a5c3a', label: '支流' },
}

const activeLevelFilter = ref(null)

// ── AOC 群組清單 ───────────────────────────────────────────────
const aocGroups = {
  Regional: [
    'Loire-region.geojson',
    'Loire.geojson'
  ],
  PayNantes: [
    'Muscadet.geojson',
    'Muscadet-Sèvre-et-Maine.geojson',
    'Muscadet-Côtes-de-Grandlieu.geojson',
    'Muscadet-Coteaux-de-la-Loire.geojson',
    'Gros-Plant-du-Pays-Nantais.geojson',
    'Coteaux-dAncenis.geojson',
    'Fiefs-Vendéens.geojson',
    'Fiefs-Vendéens-Brem.geojson',
    'Fiefs-Vendéens-Mareuil.geojson',
    'Fiefs-Vendéens-Pissotte.geojson',
    'Fiefs-Vendéens-Chantonnay.geojson',
    'Fiefs-Vendéens-Vix.geojson',
    'Muscadet-Sevre-et-Maine-Goulaine.geojson',
    'Muscadet-Sèvre-Et-Maine-«-Château-Thébaud-».geojson',
    'Muscadet-Sèvre-Et-Maine-«-Monnières-Saint-Fiacre-».geojson',
    'Muscadet-Sèvre-Et-Maine-«-Le-Pallet-».geojson',
    'Muscadet-Sèvre-et-Maine-VALLET.geojson',
    'Muscadet-Sèvre-Et-Maine-«-Mouzillon-–-Tillières-».geojson',
    'Muscadet-Sèvre-Et-Maine-«-Gorges-».geojson',
    'Muscadet-Sèvre-Et-Maine-«-Champtoceaux-».geojson',
    'Muscadet-Sèvre-Et-Maine-«-Clisson-».geojson',
    'Muscadet-VALLET.geojson',
  ],
  AnjouSaumur: [
    'Anjou.geojson',
    'Anjou-Villages.geojson',
    'Anjou-Brissac.geojson',
    'Anjou-Coteaux-de-la-Loire.geojson',
    'Cabernet-dAnjou.geojson',
    'Rosé-dAnjou.geojson',
    'Rosé-de-Loire.geojson',
    'Saumur.geojson',
    'Saumur-Champigny.geojson',
    'Coteaux-de-Saumur.geojson',
    'Savennières.geojson',
    'Savennières-Roche-aux-Moines.geojson',
    'Coulée-de-Serrant.geojson',
    'Coteaux-du-Layon.geojson',
    'Coteaux-du-Layon-premier-cru-Chaume.geojson',
    'Coteaux-du-Layon-Beaulieu-sur-Layon-ou-Beaulieu.geojson',
    'Coteaux-du-Layon-Faye-dAnjou-ou-Faye.geojson',
    'Coteaux-du-Layon-Rablay-sur-Layon-ou-Rablay.geojson',
    'Coteaux-du-Layon-Rochefort-sur-Loire-ou-Rochefort.geojson',
    'Coteaux-du-Layon-Saint-Aubin-de-Luigné-ou-Saint-Aubin.geojson',
    'Coteaux-du-Layon-Saint-Lambert-du-Lattay-ou-Saint-Lambert.geojson',
    'Quarts-de-Chaume.geojson',
    'Bonnezeaux.geojson',
    'Coteaux-de-lAubance.geojson',
    'Crémant-de-Loire.geojson',
    'Haut-Poitou.geojson',
  ],
  Touraine: [
    'Touraine.geojson',
    'Vouvray.geojson',
    'Montlouis-sur-Loire.geojson',
    'Chinon.geojson',
    'Bourgueil.geojson',
    'Saint-Nicolas-de-Bourgueil.geojson',
    'Cheverny.geojson',
    'Cour-Cheverny.geojson',
    'Valençay.geojson',
    'Touraine-Amboise.geojson',
    'Touraine-Noble-Joué.geojson',
    'Touraine-AZAY-LE-RIDEAU.geojson',
    'Touraine-CHENONCEAUX.geojson',
    'Touraine-MESLAND.geojson',
    'Touraine-OISLY.geojson',
    'Coteaux-du-Loir.geojson',
    'Jasnières.geojson',
    'Coteaux-du-Vendômois.geojson',
    'Orléans.geojson',
    'Orléans-Cléry.geojson',
  ],
  Centre: [
    'Sancerre.geojson',
    'Pouilly-Fumé-ou-Blanc-Fumé-de-Pouilly.geojson',
    'Pouilly-sur-Loire.geojson',
    'Menetou-Salon.geojson',
    'Quincy.geojson',
    'Reuilly.geojson',
    'Châteaumeillant.geojson',
    'Coteaux-du-Giennois.geojson',
    'Saint-Pourçain.geojson',
  ],
  MassifCentral: [
    'Côtes-dAuvergne.geojson',
    'Côtes-dAuvergne-Boudes.geojson',
    'Côtes-dAuvergne-Chateaugay.geojson',
    'Côtes-dAuvergne-Corent.geojson',
    'Côtes-dAuvergne-Madargues.geojson',
  ],
}

const expandedGroups = ref({
  Regional: true,
  PayNantes: false,
  AnjouSaumur: false,
  Touraine: false,
  Centre: false,
  MassifCentral: false,
})

function toggleGroup(key) {
  expandedGroups.value[key] = !expandedGroups.value[key]
}

function formatAOCName(aoc) {
  return aoc.replace('.geojson', '').replace(/_/g, ' ').replace(/-/g, ' ')
}

// ── 搜尋過濾 ──────────────────────────────────────────────────
const filteredAocGroups = computed(() => {
  if (!search.value) return aocGroups
  const q = search.value.toLowerCase()
  const result = {}
  for (const [key, list] of Object.entries(aocGroups)) {
    const filtered = list.filter(f => formatAOCName(f).toLowerCase().includes(q))
    if (filtered.length) result[key] = filtered
  }
  return result
})

// ── 葡萄品種色彩 ──────────────────────────────────────────────
const RED_GRAPES = ['Cabernet Franc', 'Cabernet Sauvignon', 'Gamay', 'Pinot Noir', 'Côt', 'Malbec', 'Grolleau', "Pineau d'Aunis", 'Pinot Meunier']
const WHITE_GRAPES = ['Chenin Blanc', 'Sauvignon Blanc', 'Melon de Bourgogne', 'Chardonnay', 'Folle Blanche', 'Romorantin', 'Chasselas', 'Tressallier', 'Malvoisie', 'Pinot Gris']

function getGrapeStyle(grape) {
  if (RED_GRAPES.some(g => grape.includes(g))) return { backgroundColor: '#8B0000', color: '#fff' }
  if (WHITE_GRAPES.some(g => grape.includes(g))) return { backgroundColor: '#C8A44E', color: '#333' }
  return { backgroundColor: '#aaa', color: '#333' }
}

// ── GeoJSON 路徑 ──────────────────────────────────────────────
function getGeojsonPath(group, aocFile) {
  return `/geojson/Loire/${group}/${aocFile}`
}

// ── 選擇產區 ──────────────────────────────────────────────────
async function selectAOC(group, aocFile) {
  activeAOC.value = { group, aoc: aocFile }
  activeLevelFilter.value = null
  infoBarCollapsed.value = false
  const aocId = aocFile.replace('.geojson', '')
  regionInfo.value = regionsData.value.find(r => r.id === aocId) || null
  // 清除群組高亮
  if (map) {
    if (map.getLayer('loire-group-fill')) map.removeLayer('loire-group-fill')
    if (map.getLayer('loire-group-outline')) map.removeLayer('loire-group-outline')
    if (map.getSource('loire-group')) map.removeSource('loire-group')
  }
  await showAOCGeojson(group, aocFile)
}

// ── 課程產區篩選 ──────────────────────────────────────────────
async function selectLevelFilter(n) {
  if (activeLevelFilter.value === n) {
    activeLevelFilter.value = null
    if (map) {
      if (map.getLayer('loire-group-fill')) map.removeLayer('loire-group-fill')
      if (map.getLayer('loire-group-outline')) map.removeLayer('loire-group-outline')
      if (map.getSource('loire-group')) map.removeSource('loire-group')
    }
    return
  }
  activeLevelFilter.value = n
  const groupKey = LEVEL_MAP_GROUPS[n]?.key
  if (groupKey) {
    expandedGroups.value[groupKey] = true
    await highlightGroupOnMap(groupKey)
  }
}

async function highlightGroupOnMap(groupKey) {
  if (!map) return
  const files = aocGroups[groupKey] || []
  isLoading.value = true
  mapError.value = null
  // 清除單一 AOC 圖層
  if (map.getLayer('loire-fill')) map.removeLayer('loire-fill')
  if (map.getLayer('loire-outline')) map.removeLayer('loire-outline')
  if (map.getSource('loire-aoc')) map.removeSource('loire-aoc')
  // 清除舊的群組圖層
  if (map.getLayer('loire-group-fill')) map.removeLayer('loire-group-fill')
  if (map.getLayer('loire-group-outline')) map.removeLayer('loire-group-outline')
  if (map.getSource('loire-group')) map.removeSource('loire-group')
  activeAOC.value = null
  try {
    const maxFiles = Math.min(files.length, 10)
    const features = []
    for (let i = 0; i < maxFiles; i++) {
      const path = getGeojsonPath(groupKey, files[i])
      try {
        let geojson
        if (geojsonCache.has(path)) {
          geojson = geojsonCache.get(path)
        } else {
          const res = await fetch(path)
          if (!res.ok) continue
          geojson = await res.json()
          geojsonCache.set(path, geojson)
        }
        if (geojson.features) features.push(...geojson.features)
        else if (geojson.type === 'Feature') features.push(geojson)
      } catch {}
    }
    if (!features.length) return
    const combined = { type: 'FeatureCollection', features }
    map.addSource('loire-group', { type: 'geojson', data: combined })
    map.addLayer({
      id: 'loire-group-fill',
      type: 'fill',
      source: 'loire-group',
      paint: { 'fill-color': groupColor(groupKey), 'fill-opacity': 0.22 }
    })
    map.addLayer({
      id: 'loire-group-outline',
      type: 'line',
      source: 'loire-group',
      paint: { 'line-color': groupColor(groupKey), 'line-width': 2, 'line-opacity': 0.9 }
    })
    try {
      const bbox = turf.bbox(combined)
      const cam = map.cameraForBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: 60, maxZoom: 9 })
      if (cam) {
        map.flyTo({ ...cam, duration: 1000, essential: true })
      } else {
        const cx = (bbox[0] + bbox[2]) / 2
        const cy = (bbox[1] + bbox[3]) / 2
        map.flyTo({ center: [cx, cy], zoom: 7, duration: 1000, essential: true })
      }
    } catch (e) { console.warn('camera move failed', e) }
  } catch (err) {
    mapError.value = `群組載入失敗：${err.message}`
    setTimeout(() => { mapError.value = null }, 4000)
  } finally {
    isLoading.value = false
  }
}

// ── 顯示 GeoJSON ─────────────────────────────────────────────
async function showAOCGeojson(group, aocFile) {
  if (!map) return
  const path = getGeojsonPath(group, aocFile)
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
    if (map.getLayer('loire-fill')) map.removeLayer('loire-fill')
    if (map.getLayer('loire-outline')) map.removeLayer('loire-outline')
    if (map.getSource('loire-aoc')) map.removeSource('loire-aoc')

    map.addSource('loire-aoc', { type: 'geojson', data: geojson })
    // BRGM 地質圖：更新遡罩為目前選取的 AOC 圖形
    updateBRGMClip(map, geojson)
    map.addLayer({
      id: 'loire-fill',
      type: 'fill',
      source: 'loire-aoc',
      paint: { 'fill-color': groupColor(group), 'fill-opacity': 0.3 }
    })
    map.addLayer({
      id: 'loire-outline',
      type: 'line',
      source: 'loire-aoc',
      paint: { 'line-color': '#fff', 'line-width': 1.8, 'line-opacity': 0.9 }
    })
    try {
      const bbox = turf.bbox(geojson)
      activeAocBounds.value = { west: bbox[0], south: bbox[1], east: bbox[2], north: bbox[3] }
      const cam = map.cameraForBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: 60, maxZoom: 13 })
      if (cam) {
        map.flyTo({ ...cam, duration: 1000, essential: true })
      } else {
        const cx = (bbox[0] + bbox[2]) / 2
        const cy = (bbox[1] + bbox[3]) / 2
        const span = Math.max(bbox[2] - bbox[0], (bbox[3] - bbox[1]) * 1.5)
        const zoom = Math.min(13, Math.max(6, Math.round(Math.log2(5 / span))))
        map.flyTo({ center: [cx, cy], zoom, duration: 1000, essential: true })
      }
    } catch (e) { console.warn('camera move failed', e) }
  } catch (err) {
    mapError.value = `載入失敗：${err.message}`
    setTimeout(() => { mapError.value = null }, 4000)
  } finally {
    isLoading.value = false
  }
}

// ── 播放發音 ──────────────────────────────────────────────────
let currentAudio = null
function playPronunciation() {
  if (!regionInfo.value?.nameFr) return
  if (currentAudio) { currentAudio.pause(); currentAudio = null }
  const audioPath = `/loire/sounds/${encodeURIComponent(regionInfo.value.nameFr)}.mp3`
  currentAudio = new Audio(audioPath)
  currentAudio.play().catch(() => {})
  currentAudio.onended = () => { currentAudio = null }
}

// ── 重置地圖 ──────────────────────────────────────────────────
function resetMap() {
  activeAOC.value = null
  activeLevelFilter.value = null
  regionInfo.value = null
  if (map) {
    if (map.getLayer('loire-fill')) map.removeLayer('loire-fill')
    if (map.getLayer('loire-outline')) map.removeLayer('loire-outline')
    if (map.getSource('loire-aoc')) map.removeSource('loire-aoc')
    if (map.getLayer('loire-group-fill')) map.removeLayer('loire-group-fill')
    if (map.getLayer('loire-group-outline')) map.removeLayer('loire-group-outline')
    if (map.getSource('loire-group')) map.removeSource('loire-group')
    map.flyTo({ center: [1.2, 47.5], zoom: 6.5, duration: 1000 })
    updateBRGMClip(map, null)
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
      center: [1.2, 47.5],
      zoom: 6.5,
      pitch: 0,
      bearing: 0
    })
    map.on('load', () => {
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')
      map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
      mapReady.value = true
      selectAOC('Regional', 'Loire-region.geojson')
    })
    map.on('error', e => { mapError.value = `地圖錯誤: ${e.error?.message || ''}` })
  } catch (err) {
    mapError.value = `初始化失敗: ${err.message}`
  }
}

// ── 載入產區資料 ──────────────────────────────────────────────
async function loadRegionsData() {
  try {
    const res = await fetch('/loire-regions.json')
    if (res.ok) regionsData.value = await res.json()
  } catch (err) {
    console.error('載入 loire-regions.json 失敗:', err)
  }
}

onMounted(async () => {
  if (!document.getElementById('brgm-popup-styles')) {
    const style = document.createElement('style')
    style.id = 'brgm-popup-styles'
    style.textContent = BRGM_POPUP_STYLES
    document.head.appendChild(style)
  }
  await loadRegionsData()
  await initMap()
})

onUnmounted(() => {
  resetBRGM(map)
  if (map) { map.remove(); map = null }
})

// ── 統一 adapters ───────────────────────────────────────────────
const unifiedInfo = computed(() => {
  const a = activeAOC.value
  if (!a?.aoc) return null
  const info = regionInfo.value
  const meta = []
  if (info?.type) meta.push({ label: '類型', value: info.type })
  if (info?.hectare) meta.push({ label: '面積', value: `${info.hectare.toLocaleString()} 公頃` })
  const styles = info?.style
    ? (Array.isArray(info.style) ? info.style : [info.style])
    : []
  return {
    name: formatAOCName(a.aoc),
    badges: styles.map(s => ({ label: s, type: s })),
    meta,
    grapes: info?.grapes ? info.grapes.split(',').map(g => g.trim()) : [],
    description: info?.description || '',
  }
})

const lTypeFilter = ref(null)

const loireTypeTabs = computed(() => [
  { value: null, label: '全部' },
  ...Object.entries(LEVEL_MAP_GROUPS).map(([n, g]) => ({
    value: g.key,
    label: `${g.emoji} Lv.${n}`
  }))
])

function onLoireTypeFilter(val) {
  lTypeFilter.value = val
  if (val) {
    const level = Object.entries(LEVEL_MAP_GROUPS).find(([, g]) => g.key === val)?.[0]
    if (level) selectLevelFilter(Number(level))
  } else {
    activeLevelFilter.value = null
  }
}

const groupedDrawerUnified = computed(() => {
  const q = search.value.trim().toLowerCase()
  const filterKey = lTypeFilter.value
  return Object.entries(filteredAocGroups.value)
    .filter(([key]) => !filterKey || key === filterKey)
    .map(([key, aocs]) => ({
      key,
      label: groupLabels[key] || key,
      items: aocs
        .filter(a => !q || formatAOCName(a).toLowerCase().includes(q))
        .map(a => ({ id: `${key}/${a}`, name: formatAOCName(a), type: key, styles: [] }))
    }))
    .filter(g => g.items.length)
})

function selectById(item) {
  const slashIdx = item.id.indexOf('/')
  const group = item.id.slice(0, slashIdx)
  const aocFile = item.id.slice(slashIdx + 1)
  selectAOC(group, aocFile)
  mobileAocDrawerOpen.value = false
}

function handleMobileAction(action) {
  if (action === 'aoc') { mobileAocDrawerOpen.value = !mobileAocDrawerOpen.value; mobileLayersOpen.value = false }
  else if (action === 'layer') { mobileLayersOpen.value = !mobileLayersOpen.value; mobileAocDrawerOpen.value = false }
  else if (action === '3d') { toggle3D() }
  else if (action === 'info') { infoBarCollapsed.value = !infoBarCollapsed.value }
}
</script>

<style>
/* 全局樣式（同波爾多） */
html, body {
  margin: 0; padding: 0; height: 100%; width: 100%; overflow: hidden;
}
#app { height: 100%; width: 100%; }
</style>

<style scoped>
/* ── 整體佈局（與波爾多 main-layout 完全相同） ─────────────── */
.main-layout {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
}

/* ── 地圖區段（全螢幕） ────────────────────────────────────── */
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
  background: rgba(45,106,79,0.82);
  color: #fff;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  transition: background 0.2s;
  white-space: nowrap;
}
.map-hdr-btn:hover { background: rgba(45,130,90,0.95); }
.map-hdr-btn.ghost {
  background: rgba(255,255,255,0.75);
  border: 1.5px solid rgba(45,106,79,0.5);
  color: #2d6a4f;
}
.map-hdr-btn.ghost:hover { background: rgba(255,255,255,0.92); }
.map-hdr-btn.aoc-open-btn {
  background: rgba(255,255,255,0.82);
  border: 1.5px solid rgba(45,106,79,0.6);
  color: #2d6a4f;
  font-weight: 800;
}
.map-hdr-btn.aoc-open-btn:hover { background: rgba(255,255,255,0.96); border-color: #2d6a4f; }
.map-header h1 {
  margin: 0;
  font-size: 1.3rem;
  color: #2d6a4f;
  text-align: center;
  flex: 1;
  text-shadow: 0 1px 4px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.9);
  padding-top: 4px;
  pointer-events: none;
}

/* ── 拖拉把手 ──────────────────────────────────────────────── */
.info-sheet-handle-wrap {
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  margin-top: -2px;
  cursor: grab;
}
.info-sheet-handle {
  width: 52px; height: 5px;
  border-radius: 999px;
  background: rgba(45,106,79,0.22);
}

/* ── 資訊卡（底部置中，與波爾多格式相同） ───────────────────── */
.map-info-bar {
  position: absolute;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 106px);
  left: 50%;
  transform: translateX(-50%);
  width: min(92vw, 560px);
  background: rgba(255,255,255,0.97);
  padding: 10px 18px 18px;
  border-radius: 18px;
  box-shadow: 0 8px 22px rgba(0,0,0,0.18);
  z-index: 10;
  font-size: 16px;
  transition: all 0.3s ease;
  color: #222;
  max-height: min(60vh, 420px);
  overflow: hidden;
}
.map-info-bar.collapsed {
  padding: 10px 18px 12px;
}

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
}

.title-buttons { display: flex; gap: 8px; align-items: center; }

.btn-collapse-inline {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px; height: 34px;
  background: #1a1a2e;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  flex-shrink: 0;
  transition: background 0.15s;
}
.btn-collapse-inline:hover { background: #2d2d4e; }
.btn-collapse-inline svg { flex-shrink: 0; }
.map-info-bar.collapsed .btn-collapse-inline { background: #2d6a4f; }

.info-details {
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: 1000px;
  opacity: 1;
}
.map-info-bar.collapsed .info-details { max-height: 0; opacity: 0; margin: 0; padding: 0; }

.map-buttons {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}
/* 音效按鈕 */
.btn-pronunciation {
  display: flex; align-items: center; justify-content: center;
  width: 34px; height: 34px;
  background: #4c6ef5;
  border: none; border-radius: 8px;
  color: white; cursor: pointer;
  flex-shrink: 0; transition: background 0.15s;
}
.btn-pronunciation:hover { background: #3b5bdb; }

/* 重置圖示按鈕 */
.btn-reset-icon {
  display: flex; align-items: center; justify-content: center;
  width: 34px; height: 34px;
  background: #e8590c;
  border: none; border-radius: 8px;
  color: white; cursor: pointer;
  flex-shrink: 0; transition: background 0.15s;
}
.btn-reset-icon:hover { background: #c94b08; }

.region-info-content {
  margin-top: 12px;
  font-size: 1.15rem;
  line-height: 1.5;
  color: #222;
}
.info-header { margin-bottom: 8px; }
.info-header b { font-size: 1.25rem; color: #333; }
.region-type { font-size: 1.1rem; color: #666; font-weight: normal; }
.region-hectare { color: #666; font-size: 1.1rem; font-style: italic; margin-left: 5px; }

.style-badges { display: flex; gap: 5px; flex-wrap: wrap; margin-top: 5px; }
.style-badge {
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.grape-section { margin: 8px 0; }
.grape-title { font-size: 1.1rem; color: #555; margin-bottom: 6px; }
.grape-badges { display: flex; flex-wrap: wrap; gap: 5px; }
.grape-badge { padding: 3px 8px; border-radius: 10px; font-size: 0.95rem; white-space: nowrap; }

.description { margin-top: 10px; font-size: 1.1rem; color: #2f2f2f; }
.no-info { margin-top: 10px; color: #888; font-size: 1.1rem; }

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
  border-top: 5px solid #2d6a4f;
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

/* ── 圖層面板 Backdrop + 底部抽屜（波爾多格式） ──────────────── */
.layers-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.4);
  z-index: 1400;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  backdrop-filter: blur(4px);
}
.layers-sheet {
  width: min(90vw, 580px);
  background: white;
  border-radius: 20px 20px 14px 14px;
  padding: 0 0 24px;
  box-shadow: 0 -8px 32px rgba(0,0,0,0.22);
  margin-bottom: 96px;
}
.layers-sheet-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px 14px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a2e;
}
.layers-close-btn {
  width: 32px; height: 32px;
  background: rgba(0,0,0,0.06);
  border: none; border-radius: 50%;
  cursor: pointer; font-size: 1.1rem;
  display: flex; align-items: center; justify-content: center;
  color: #555; transition: background 0.15s;
}
.layers-close-btn:hover { background: rgba(0,0,0,0.12); }

.layer-group { padding: 12px 20px 4px; }
.layer-group-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #999;
  margin-bottom: 8px;
}
.layer-group-buttons { display: flex; flex-direction: column; gap: 6px; }

.btn-layer {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 13px 16px;
  border: 1.5px solid rgba(0,0,0,0.07);
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.88rem;
  font-weight: 600;
  background: rgba(0,0,0,0.02);
  color: #333;
  transition: all 0.15s;
  text-align: left;
  font-family: inherit;
}
.btn-layer:hover { background: rgba(45,106,79,0.06); border-color: rgba(45,106,79,0.2); }
.btn-layer.active {
  background: rgba(45,106,79,0.08);
  border-color: #2d6a4f;
  color: #2d6a4f;
}
.btn-layer.color-3d.active { background: rgba(45,106,79,0.1); border-color: #2d6a4f; }
.lbtn-icon { font-size: 1.1rem; width: 22px; text-align: center; flex-shrink: 0; }
.lbtn-text { flex: 1; }
.lbtn-dot {
  width: 14px; height: 14px;
  border-radius: 50%;
  border: 2px solid #ccc;
  flex-shrink: 0;
  transition: all 0.15s;
}
.lbtn-dot.on { background: #2d6a4f; border-color: #2d6a4f; }

.layers-sheet-fade-enter-active, .layers-sheet-fade-leave-active {
  transition: opacity 0.22s ease;
}
.layers-sheet-fade-enter-active .layers-sheet,
.layers-sheet-fade-leave-active .layers-sheet {
  transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1);
}
.layers-sheet-fade-enter-from, .layers-sheet-fade-leave-to { opacity: 0; }
.layers-sheet-fade-enter-from .layers-sheet,
.layers-sheet-fade-leave-to .layers-sheet { transform: translateY(40px); }

/* ── 底部工具列（桌機 + 手機皆顯示） ──────────────────────── */
.mobile-map-toolbar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: min(90vw, 480px);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 24px);
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
  border: none;
  border-radius: 16px;
  background: linear-gradient(180deg, #f5faf7 0%, #e8f5ee 100%);
  color: #2d6a4f;
  min-height: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  font-size: 0.76rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
  font-family: inherit;
  transition: all 0.15s;
}
.mobile-tool-btn:hover { background: linear-gradient(180deg, #eaf5ef 0%, #d4eddf 100%); }
.mobile-tool-btn.active {
  background: linear-gradient(180deg, #2d6a4f 0%, #1b5438 100%);
  color: #fff;
}
.mobile-tool-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(45, 106, 79, 0.10);
  font-size: 0.8rem;
  font-weight: 800;
}
.mobile-tool-btn.active .mobile-tool-icon { background: rgba(255, 255, 255, 0.18); }

/* ── AOC 抽屜（桌機 + 行動皆可用） ──────────────────────────── */
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
  bottom: calc(env(safe-area-inset-bottom, 0px) + 16px);
  width: min(90vw, 480px);
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
  background: rgba(45,106,79,0.28);
  margin: 10px auto 8px;
}
.mobile-aoc-toolbar-hdr {
  padding: 0 16px 4px;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  margin-bottom: 4px;
}
.mobile-aoc-toolbar-hdr h2 {
  font-size: 1.2rem;
  color: #2d6a4f;
  margin: 0 0 8px;
}

/* ── 課程產區快速導航 ──────────────────────────────────────── */
.course-level-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px 16px 10px;
  border-bottom: 1px solid rgba(0,0,0,0.07);
  margin-bottom: 2px;
}
.clevel-chip {
  padding: 4px 10px;
  border-radius: 20px;
  border: 1.5px solid;
  background: transparent;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  white-space: nowrap;
}
.clevel-chip.active { color: white; }
.clevel-chip:hover { opacity: 0.85; transform: translateY(-1px); }
.mobile-aoc-body {
  flex: 1;
  overflow-y: auto;
  padding: 0 8px;
}

/* ── AOC 清單樣式（抽屜內使用） ─────────────────────────────── */
.aoc-search {
  width: calc(100% - 32px);
  padding: 10px 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1.0rem;
  box-sizing: border-box;
}
.aoc-search:focus { outline: none; border-color: #2d6a4f; }

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
.aoc-item.active { background: rgba(45,106,79,0.12); font-weight: 500; color: #111; }

.aoc-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  margin-right: 8px;
  flex-shrink: 0;
}

/* ── RWD ─────────────────────────────────────────────────────── */
@media (max-width: 9999px) {
  /* 桌機版 info bar 維持 bottom-left */
}

@media (max-width: 768px) {
  .map-info-bar {
    bottom: calc(env(safe-area-inset-bottom, 0px) + 110px);
    width: min(90vw, 560px);
    max-height: min(42vh, 360px);
    padding: 10px 14px 14px;
  }
  .map-info-bar.collapsed {
    bottom: calc(env(safe-area-inset-bottom, 0px) + 110px);
    padding: 10px 12px 12px;
  }
  .info-details { overflow-y: auto; max-height: min(28vh, 220px); }
  .aoc-info-title { font-size: 1rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .btn-text { display: none; }
  .btn-collapse-inline { padding: 6px 8px; }

  .map-header h1 { font-size: 1.08rem; }
  .map-header { padding: 6px 12px; background: rgba(255,255,255,0.72); }

  /* 行動版底部工具列：資訊欄上移留出空間 */
  /* （工具列樣式已在全域定義，此處只調整 info bar 偏移） */

  /* 行動版抽屜調整：底部留空間給工具列 */
  .mobile-aoc-drawer {
    bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  }
}

/* 行動版抽屜動畫 */
.mobile-sheet-fade-enter-active,
.mobile-sheet-fade-leave-active {
  transition: opacity 0.22s ease;
}
.mobile-sheet-fade-enter-active .mobile-aoc-drawer,
.mobile-sheet-fade-leave-active .mobile-aoc-drawer {
  transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1);
}
.mobile-sheet-fade-enter-from,
.mobile-sheet-fade-leave-to { opacity: 0; }
.mobile-sheet-fade-enter-from .mobile-aoc-drawer,
.mobile-sheet-fade-leave-to .mobile-aoc-drawer { transform: translateY(40px); }
/* 統一圖層面板包裝 */
.layer-panel-wrapper {
  position: fixed;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 46;
}
.rmap-section { margin-top: 8px; }
.rmap-section-title { font-size: 11px; color: #999; margin-bottom: 4px; text-transform: uppercase; letter-spacing: .5px; }

/* ── BRGM 地質圖 浮動面板 ────────────────────── */
/* ── BRGM 地質圖層內嵌控制列（圖層面板下方）── */
.loire-brgm-inline-panel {
  background: rgba(255,255,255,0.97);
  border-top: 1px solid #eee;
  border-radius: 0 0 16px 16px;
  padding: 10px 14px;
  width: min(320px, calc(100vw - 32px));
}
.loire-brgm-inline-title { font-size: 13px; font-weight: 700; color: #666; margin-bottom: 10px; }
.loire-brgm-inline-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.loire-brgm-inline-lbl { font-size: 12px; color: #666; white-space: nowrap; }
.loire-brgm-inline-slider { flex: 1; height: 4px; accent-color: #2d6a4f; }
.loire-brgm-inline-pct { font-size: 12px; color: #888; min-width: 32px; text-align: right; }
.loire-brgm-inline-footer {
  display: flex; flex-direction: column; gap: 2px;
  font-size: 10px; color: #aaa;
  border-top: 1px solid #f0f0f0; padding-top: 6px;
}
</style>
