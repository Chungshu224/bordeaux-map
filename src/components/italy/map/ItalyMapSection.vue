<template>
  <section class="italy-map-section">

    <!-- Header：透明底，左上角導覽按鈕 -->
    <div class="map-header">
      <div class="map-header-left">
        <button class="map-hdr-btn" @click="emit('back')">← 返回課程</button>
        <button class="map-hdr-btn ghost" @click="router.push('/')">🏠 首頁</button>
      </div>
      <h1>{{ region.icon }} {{ region.name }} 葡萄酒產區地圖</h1>
    </div>

    <!-- Mapbox 全螢幕地圖 -->
    <div ref="mapContainer" class="map"></div>

    <!-- 資訊卡（布根地 info-header-bar 深紅漸層 + 白底內容） -->
    <div v-if="activeAOCInfo" class="map-info-bar" :class="{ collapsed: infoCollapsed }">
      <div class="info-header-bar">
        <div class="aoc-info-title">
          <span class="aoc-dot" :style="{ background: region.color }"></span>
          <span class="aoc-name">{{ activeAOCInfo.name }}</span>
        </div>
        <div class="map-action-buttons">
          <!-- 收合 -->
          <button class="map-action-btn btn-collapse" @click="infoCollapsed = !infoCollapsed" :title="infoCollapsed ? '展開資訊' : '收合資訊'">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" :style="{ transform: infoCollapsed ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.3s' }">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
          <!-- 發音 -->
          <button class="map-action-btn btn-audio-compact" @click="playAudio"
            :disabled="!audioAvailable || isPlayingAudio" :title="audioAvailable ? '聽發音' : '無發音檔'">
            <svg v-if="!audioAvailable" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
            <svg v-else-if="!isPlayingAudio" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            </svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
          </button>
          <!-- 重置 -->
          <button class="map-action-btn btn-reset" @click="resetMap" title="重置地圖">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 2v6h6"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/>
            </svg>
          </button>
        </div>
      </div>

      <transition name="info-expand">
        <div v-show="!infoCollapsed" class="info-content-wrapper">
          <div class="region-info-content">

            <!-- 額頭：名稱 + 分級類型 -->
            <div class="info-header">
              <div>
                <b>{{ activeAOCInfo.name }}</b>
                <span class="region-type" v-if="activeAOCInfo.type"> ({{ activeAOCInfo.type }})</span>
              </div>
            </div>

            <!-- 基本資料網格 -->
            <div class="details-grid">
              <div v-if="activeAOCInfo.province" class="detail-item">
                <span class="detail-label">省份:</span>
                <span class="detail-value">{{ activeAOCInfo.province }}</span>
              </div>
              <div v-if="activeAOCInfo.region" class="detail-item">
                <span class="detail-label">大區:</span>
                <span class="detail-value">{{ activeAOCInfo.region }}</span>
              </div>
              <div v-if="activeAOCInfo.zone" class="detail-item full-width">
                <span class="detail-label">產區範圍:</span>
                <span class="detail-value">{{ activeAOCInfo.zone }}</span>
              </div>
            </div>

            <!-- 酒款類型 -->
            <div v-if="activeAOCInfo.style?.length" class="wine-types-section">
              <div class="wine-types-title">酒款類型</div>
              <div class="wine-types-list">
                <span v-for="s in (Array.isArray(activeAOCInfo.style) ? activeAOCInfo.style : activeAOCInfo.style ? [activeAOCInfo.style] : [])" :key="s" class="wine-type-tag" :style="styleBadgeColor(s)">{{ s }}</span>
              </div>
            </div>

            <!-- 葡萄品種 -->
            <div v-if="activeAOCInfo.grapes?.length" class="grape-section">
              <div class="grape-title">主要葡萄品種</div>
              <div class="grape-badges">
                <span v-for="g in activeAOCInfo.grapes" :key="g" class="grape-badge">{{ g }}</span>
              </div>
            </div>

            <!-- 描述 -->
            <div v-if="activeAOCInfo.description" class="detail-item full-width">
              <span class="detail-label">簡介:</span>
              <span class="detail-value">{{ activeAOCInfo.description }}</span>
            </div>

            <!-- 氣候 -->
            <div v-if="activeAOCInfo.details?.climate" class="detail-item full-width">
              <span class="detail-label">氣候:</span>
              <span class="detail-value">{{ activeAOCInfo.details.climate }}</span>
            </div>

            <!-- 小產區 -->
            <div v-if="activeAOCInfo.details?.subregions && Object.keys(activeAOCInfo.details.subregions).length" class="details-section">
              <div class="detail-item full-width" v-for="(desc, sub) in activeAOCInfo.details.subregions" :key="sub">
                <span class="detail-label">{{ sub }}:</span>
                <span class="detail-value">{{ desc }}</span>
              </div>
            </div>

          </div>
        </div>
      </transition>
    </div>

    <!-- AOC 產區選擇（波爾多同款居中遮罩） -->
    <transition name="sheet-fade">
      <div v-if="aocListOpen" class="aoc-backdrop" @click.self="aocListOpen = false">
        <div class="aoc-drawer">
          <div class="aoc-handle"></div>
          <div class="drawer-header">
            <span>{{ region.name }} 法定產區</span>
            <button class="drawer-close" @click="aocListOpen = false">✕</button>
          </div>
          <div class="drawer-search-wrap">
            <span class="search-icon">🔍</span>
            <input v-model="search" class="search-input" placeholder="搜尋產區…" />
          </div>
          <div class="filter-tabs">
            <button v-for="tab in typeTabs" :key="tab.value"
              class="filter-tab" :class="{ active: typeFilter === tab.value }"
              @click="typeFilter = tab.value">{{ tab.label }}</button>
          </div>
          <div class="appellation-list">
            <div v-for="item in filteredAOCs" :key="item.id"
              class="app-item" :class="{ active: activeAOCInfo?.id === item.id }"
              @click="selectAOC(item)">
              <span class="app-badge" :class="item.type?.toLowerCase()">{{ item.type }}</span>
              <div class="app-text">
                <span class="app-name">{{ item.name }}</span>
                <span class="app-styles">{{ (item.style || []).join(' · ') }}</span>
              </div>
            </div>
            <div v-if="filteredAOCs.length === 0" class="no-results">無符合產區</div>
          </div>
        </div>
      </div>
    </transition>

    <!-- 圖層面板──手機版浮動 -->
    <transition name="slide-up">
      <div v-if="showLayerPanel" class="mobile-layer-panel">
        <div class="layers-panel-header">
          <span>圖層與顯示</span>
          <button class="layers-panel-close" @click="showLayerPanel = false">✕</button>
        </div>
        <div class="layer-group">
          <div class="layer-group-label">視角</div>
          <div class="layer-group-buttons">
            <button class="btn-layer" :class="{ active: is3D }" @click="toggle3D">
              <span class="lbtn-icon">🗺</span>
              <span class="lbtn-text">3D 地形</span>
              <span class="lbtn-dot" :class="{ on: is3D }"></span>
            </button>
            <button class="btn-layer" :class="{ active: showContours }" @click="toggleContours">
              <span class="lbtn-icon">〰</span>
              <span class="lbtn-text">等高線</span>
              <span class="lbtn-dot" :class="{ on: showContours }"></span>
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- 底部 4宮格工具列（布根地 mobile-grid-buttons 同款） -->
    <div v-if="mapReady" class="mobile-grid-buttons" :class="{ 'merged-with-info': activeAOCInfo && !infoCollapsed }">
      <button class="m-grid-btn" :class="{ active: aocListOpen }" @click="handleMobileAction('aoc')">
        <span class="m-grid-icon">產</span>
        <span class="m-grid-text">產區</span>
      </button>
      <button class="m-grid-btn" :class="{ active: showLayerPanel }" @click="handleMobileAction('layer')">
        <span class="m-grid-icon">層</span>
        <span class="m-grid-text">圖層</span>
      </button>
      <button class="m-grid-btn" :class="{ active: is3D }" @click="handleMobileAction('3d')">
        <span class="m-grid-icon">3D</span>
        <span class="m-grid-text">{{ is3D ? '2D' : '3D' }}</span>
      </button>
      <button class="m-grid-btn" :class="{ active: activeAOCInfo && !infoCollapsed }" @click="handleMobileAction('info')">
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
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as turf from '@turf/turf'

const props = defineProps({
  region: { type: Object, required: true }
})
const emit = defineEmits(['back'])
const router = useRouter()

// ── State ──
const mapContainer = ref(null)
const mapReady = ref(false)
const isLoading = ref(false)
const mapError = ref(null)
const is3D = ref(false)
const showContours = ref(false)
const infoCollapsed = ref(false)
const aocListOpen = ref(false)
const showLayerPanel = ref(false)
const search = ref('')
const typeFilter = ref('all')
const activeAOCInfo = ref(null)
const aocData = ref([])
const isPlayingAudio = ref(false)
const audioAvailable = ref(false)
let map = null
let audioPlayer = null
let geojsonCache = new Map()
let regionBounds = null  // 儲存產區邊界 bbox，供 resetMap 使用

const REGION_OUTLINE_MAP = {
  abruzzo:    'Abruzzo.geojson',
  basilicata: 'Basilicata.geojson',
  calabria:   'Calabria.geojson',
  campania:   'Campania.geojson',
  emilia:     'Emilia-Romagna.geojson',
  friuli:     'Friuli-Venezia Giulia.geojson',
  lazio:      'Lazio.geojson',
  liguria:    'Liguria.geojson',
  lombardy:   'Lombardy.geojson',
  marche:     'Marche.geojson',
  molise:     'Molise.geojson',
  piedmont:   'Piemonte.geojson',
  puglia:     'Puglia.geojson',
  sardinia:   'Sardegna.geojson',
  sicily:     'Sicily.geojson',
  trentino:   'Trentino.geojson',
  tuscany:    'Toscana.geojson',
  umbria:     'Umbria.geojson',
  "valle d'aosta": "Valle d'Aosta.geojson",
  veneto:     'Veneto.geojson',
}

const typeTabs = [
  { value: 'all',  label: '全部' },
  { value: 'DOCG', label: 'DOCG' },
  { value: 'DOC',  label: 'DOC' },
  { value: 'IGT',  label: 'IGT' },
]

// apulia → puglia 資料夾映射
const FOLDER_MAP = { apulia: 'puglia' }
const regionFolder = (id) => FOLDER_MAP[id] || id

// ── Computed ──
const filteredAOCs = computed(() => {
  let list = aocData.value
  if (typeFilter.value !== 'all') list = list.filter(a => a.type === typeFilter.value)
  if (search.value.trim()) {
    const q = search.value.trim().toLowerCase()
    list = list.filter(a =>
      a.name.toLowerCase().includes(q) ||
      (a.grapes || []).some(g => g.toLowerCase().includes(q))
    )
  }
  return list
})

// ── Helpers ──
function styleBadgeColor(style) {
  const map = {
    '紅酒': { background: '#8B0000', color: '#fff' },
    '白酒': { background: '#f5e28a', color: '#555' },
    '甜酒': { background: '#FFD700', color: '#333' },
    '氣泡酒': { background: '#667eea', color: '#fff' },
    '粉紅酒': { background: '#ffb6c1', color: '#333' },
    '橘酒': { background: '#e67e22', color: '#fff' },
    '加強酒': { background: '#7b341e', color: '#fff' },
  }
  return map[style] || { background: '#999', color: '#fff' }
}

function geojsonTypeFolder(type) {
  if (type === 'DOCG') return 'DOCG'
  if (type === 'IGT')  return 'IGT'
  return 'DOC'
}

// ── Data ──
async function loadRegionData() {
  try {
    const folder = regionFolder(props.region.id)
    const url = `/italy/regions/${folder}/${folder}-regions.json`
    const res = await fetch(url)
    if (!res.ok) throw new Error(`無法載入 ${url}`)
    const raw = await res.json()
    // 統一 style 為陣列（部分 JSON 的 style 欄位為字串而非陣列）
    aocData.value = raw
      .filter(item => ['DOCG', 'DOC', 'IGT'].includes(item.type))
      .map(item => ({
        ...item,
        style: Array.isArray(item.style) ? item.style : (item.style ? [item.style] : [])
      }))
  } catch (e) {
    console.error('[ItalyMapSection] loadRegionData:', e)
    aocData.value = []
  }
}

async function loadAllOutlines() {
  if (!map) return
  // 清除舊 outline
  const style = map.getStyle()
  ;(style.layers || []).filter(l => l.id.startsWith('aoc_')).forEach(l => map.removeLayer(l.id))
  Object.keys(style.sources || {}).filter(s => s.startsWith('aoc_')).forEach(s => map.removeSource(s))

  const folder = regionFolder(props.region.id)
  for (const aoc of aocData.value) {
    const typeFolder = geojsonTypeFolder(aoc.type)
    const fileName = aoc.id.replace(/^(DOCG|DOC|IGT)\//, '')
    const url = `/italy/regions/${folder}/geojson/${typeFolder}/${encodeURIComponent(fileName)}.geojson`
    try {
      let geojson
      if (geojsonCache.has(url)) { geojson = geojsonCache.get(url) }
      else {
        const res = await fetch(url)
        if (!res.ok) continue
        geojson = await res.json()
        geojsonCache.set(url, geojson)
      }
      const safe = aoc.id.replace(/[^a-z0-9]/gi, '_')
      const srcId = `aoc_${safe}`
      if (!map.getSource(srcId)) {
        map.addSource(srcId, { type: 'geojson', data: geojson })
        map.addLayer({ id: `aoc_fill_${safe}`, type: 'fill', source: srcId, paint: { 'fill-color': '#fff', 'fill-opacity': 0.08 } })
        map.addLayer({ id: `aoc_line_${safe}`, type: 'line', source: srcId, paint: { 'line-color': '#fff', 'line-width': 1.2, 'line-opacity': 0.7 } })
        const _aoc = aoc
        map.on('click', `aoc_fill_${safe}`, () => selectAOC(_aoc))
        map.on('mouseenter', `aoc_fill_${safe}`, () => { map.getCanvas().style.cursor = 'pointer' })
        map.on('mouseleave', `aoc_fill_${safe}`, () => { map.getCanvas().style.cursor = '' })
      }
    } catch (e) { /* skip */ }
  }
}

async function highlightAOC(aoc) {
  if (!map) return
  if (map.getLayer('highlight_fill')) map.removeLayer('highlight_fill')
  if (map.getLayer('highlight_line')) map.removeLayer('highlight_line')
  if (map.getSource('highlight')) map.removeSource('highlight')

  const folder = regionFolder(props.region.id)
  const typeFolder = geojsonTypeFolder(aoc.type)
  const fileName = aoc.id.replace(/^(DOCG|DOC|IGT)\//, '')
  const url = `/italy/regions/${folder}/geojson/${typeFolder}/${encodeURIComponent(fileName)}.geojson`
  try {
    let geojson
    if (geojsonCache.has(url)) { geojson = geojsonCache.get(url) }
    else {
      const res = await fetch(url)
      if (!res.ok) return
      geojson = await res.json()
      geojsonCache.set(url, geojson)
    }
    map.addSource('highlight', { type: 'geojson', data: geojson })
    map.addLayer({ id: 'highlight_fill', type: 'fill', source: 'highlight', paint: { 'fill-color': props.region.color, 'fill-opacity': 0.35 } })
    map.addLayer({ id: 'highlight_line', type: 'line', source: 'highlight', paint: { 'line-color': '#fff', 'line-width': 2.5 } })
    const bbox = turf.bbox(geojson)
    map.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: 80, duration: 900 })
  } catch (e) { console.error(e) }
}

// ── Audio ──
async function checkAudio(aoc) {
  audioAvailable.value = false
  const folder = regionFolder(props.region.id)
  const url = `/italy/regions/${folder}/sounds/${encodeURIComponent(aoc.name)}.mp3`
  try {
    const r = await fetch(url, { method: 'HEAD' })
    audioAvailable.value = r.ok
  } catch { /* skip */ }
}

async function playAudio() {
  if (!activeAOCInfo.value) return
  const folder = regionFolder(props.region.id)
  const url = `/italy/regions/${folder}/sounds/${encodeURIComponent(activeAOCInfo.value.name)}.mp3`
  if (audioPlayer) { audioPlayer.pause(); audioPlayer = null }
  audioPlayer = new Audio(url)
  isPlayingAudio.value = true
  audioPlayer.play().catch(() => { isPlayingAudio.value = false })
  audioPlayer.onended = () => { isPlayingAudio.value = false }
  audioPlayer.onerror = () => { isPlayingAudio.value = false }
}

// ── Region Outline ──
async function loadRegionOutline({ animate = true } = {}) {
  if (!map) return
  const folder = regionFolder(props.region.id)
  const outlineFile = REGION_OUTLINE_MAP[folder]
  if (!outlineFile) return
  const url = `/italy/regions/${folder}/geojson/${encodeURIComponent(outlineFile)}`
  try {
    const res = await fetch(url)
    if (!res.ok) return
    const geojson = await res.json()
    if (map.getLayer('region_outline_line')) map.removeLayer('region_outline_line')
    if (map.getSource('region_outline')) map.removeSource('region_outline')
    map.addSource('region_outline', { type: 'geojson', data: geojson })
    map.addLayer({ id: 'region_outline_line', type: 'line', source: 'region_outline',
      paint: { 'line-color': '#ffffff', 'line-width': 2.5, 'line-opacity': 0.9 } })
    const bbox = turf.bbox(geojson)
    regionBounds = bbox
    if (animate) {
      map.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: 60, duration: 1200 })
    }
  } catch (e) { console.error('[loadRegionOutline]', e) }
}

async function fetchRegionBbox() {
  const folder = regionFolder(props.region.id)
  const outlineFile = REGION_OUTLINE_MAP[folder]
  if (!outlineFile) return null
  const url = `/italy/regions/${folder}/geojson/${encodeURIComponent(outlineFile)}`
  try {
    const res = await fetch(url)
    if (!res.ok) return null
    const geojson = await res.json()
    const bbox = turf.bbox(geojson)
    regionBounds = bbox
    return bbox
  } catch { return null }
}

// ── Map ──
async function initMap() {
  if (!mapContainer.value) return
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

  // 先 fetch outline 取得 bbox，直接用 bounds 初始化地圖
  const bbox = await fetchRegionBbox()
  const mapOptions = {
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    pitch: 0, bearing: 0
  }
  if (bbox) {
    mapOptions.bounds = [[bbox[0], bbox[1]], [bbox[2], bbox[3]]]
    mapOptions.fitBoundsOptions = { padding: 60 }
  } else {
    mapOptions.center = props.region.center
    mapOptions.zoom = props.region.zoom
  }

  map = new mapboxgl.Map(mapOptions)
  map.on('load', async () => {
    map.addControl(new mapboxgl.NavigationControl(), 'top-right')
    map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
    map.addSource('mapbox-dem', { type: 'raster-dem', url: 'mapbox://mapbox.mapbox-terrain-dem-v1', tileSize: 512, maxzoom: 14 })
    map.addSource('contours', { type: 'vector', url: 'mapbox://mapbox.mapbox-terrain-v2' })
    map.addLayer({ id: 'contour-lines', type: 'line', source: 'contours', 'source-layer': 'contour',
      layout: { 'line-join': 'round', 'line-cap': 'round', visibility: 'none' },
      paint: { 'line-color': '#ff6b35', 'line-width': ['interpolate',['linear'],['zoom'],10,0.5,14,1.5], 'line-opacity': 0.8 },
      filter: ['==', ['get', 'index'], 1]
    })
    mapReady.value = true
    await loadAllOutlines()
    await loadRegionOutline({ animate: false })  // 位置已由 bounds 指定，只畫邊界線
  })
}

// ── Controls ──
function toggle3D() {
  is3D.value = !is3D.value
  if (!map) return
  if (is3D.value) {
    map.easeTo({ pitch: 45, duration: 800 })
    if (map.getSource('mapbox-dem')) {
      map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 })
      if (!map.getLayer('sky')) {
        map.addLayer({ id: 'sky', type: 'sky', paint: { 'sky-type': 'atmosphere', 'sky-atmosphere-sun': [0,90], 'sky-atmosphere-sun-intensity': 15 } })
      }
    }
  } else {
    map.easeTo({ pitch: 0, duration: 800 })
    map.setTerrain(null)
    if (map.getLayer('sky')) map.removeLayer('sky')
  }
}

function toggleContours() {
  showContours.value = !showContours.value
  if (!map || !map.getLayer('contour-lines')) return
  map.setLayoutProperty('contour-lines', 'visibility', showContours.value ? 'visible' : 'none')
}

function resetMap() {
  if (!map) return
  if (map.getLayer('highlight_fill')) map.removeLayer('highlight_fill')
  if (map.getLayer('highlight_line')) map.removeLayer('highlight_line')
  if (map.getSource('highlight')) map.removeSource('highlight')
  activeAOCInfo.value = null
  if (regionBounds) {
    map.fitBounds([[regionBounds[0], regionBounds[1]], [regionBounds[2], regionBounds[3]]], { padding: 60, duration: 1000 })
  } else {
    map.flyTo({ center: props.region.center, zoom: props.region.zoom, duration: 1000 })
  }
}

async function selectAOC(item) {
  activeAOCInfo.value = item
  infoCollapsed.value = false
  aocListOpen.value = false
  await highlightAOC(item)
  await checkAudio(item)
}

function handleMobileAction(action) {
  if (action === 'aoc') {
    showLayerPanel.value = false
    aocListOpen.value = !aocListOpen.value
  } else if (action === 'layer') {
    aocListOpen.value = false
    showLayerPanel.value = !showLayerPanel.value
  } else if (action === '3d') {
    toggle3D()
  } else if (action === 'info') {
    if (activeAOCInfo.value) infoCollapsed.value = !infoCollapsed.value
  }
}

// ── Watch region change ──
watch(() => props.region, async (newRegion) => {
  search.value = ''; typeFilter.value = 'all'
  activeAOCInfo.value = null; aocData.value = []
  geojsonCache = new Map()
  regionBounds = null
  await loadRegionData()
  if (map) {
    const style = map.getStyle()
    ;(style.layers || []).forEach(l => { if (l.id.startsWith('aoc_') || l.id.startsWith('highlight') || l.id === 'region_outline_line') map.removeLayer(l.id) })
    Object.keys(style.sources || {}).forEach(s => { if (s.startsWith('aoc_') || s === 'highlight' || s === 'region_outline') map.removeSource(s) })
    await loadAllOutlines()
    await loadRegionOutline()
  }
}, { deep: true })

onMounted(async () => {
  await loadRegionData()
  await nextTick()
  initMap()
})

onUnmounted(() => {
  if (audioPlayer) { audioPlayer.pause(); audioPlayer = null }
  if (map) { map.remove(); map = null }
})
</script>

<style scoped>
/* ── 基礎 ── */
.italy-map-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.map {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100%; height: 100%;
}

/* ── Header：透明底，左上角導覽按鈕 ── */
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
.map-header h1 {
  margin: 0;
  flex: 1;
  text-align: center;
  font-size: 1.16rem;
  color: #5b1d1d;
  text-shadow: 0 1px 4px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.9);
  pointer-events: none;
  padding-top: 4px;
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

/* ── 資訊卡（布根地 info-header-bar 同款） ── */
.map-info-bar {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: min(90vw, 560px);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  background: linear-gradient(to bottom, white, #fafafa);
  border-radius: 12px;
  max-height: 60vh;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.1);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.08);
}

.info-header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background: linear-gradient(135deg, #8B0000 0%, #660000 100%);
  color: white;
  padding: 12px 16px;
  border-bottom: 2px solid rgba(255,255,255,0.1);
}
.aoc-info-title {
  display: flex;
  align-items: center;
  font-size: 1.15rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
  min-width: 0;
  flex: 1;
}
.aoc-name {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.25;
  max-height: calc(1.25em * 2);
}
.aoc-dot {
  width: 12px; height: 12px;
  border-radius: 50%;
  margin-right: 8px;
  flex-shrink: 0;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
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
.map-action-btn:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; }
.map-action-btn:disabled:hover { transform: none; }
.btn-collapse { background: linear-gradient(145deg, #222, #0f0f0f); }
.btn-audio-compact { background: linear-gradient(145deg, #8a63cf, #6b46c1); }
.btn-reset { background: linear-gradient(145deg, #f25f57, #dd3f37); }

/* 展開過渡 */
.info-expand-enter-active, .info-expand-leave-active { transition: all 0.3s ease; }
.info-expand-enter-from, .info-expand-leave-to { opacity: 0; max-height: 0; }
.info-expand-enter-to, .info-expand-leave-from { opacity: 1; max-height: 60vh; }

.info-content-wrapper {
  overflow-y: auto;
  flex: 1;
}
.region-info-content {
  padding: 14px 16px;
  font-size: 0.95rem;
  line-height: 1.6;
  background: white;
}
.info-header { margin-bottom: 10px; }
.region-type { font-size: 0.9rem; color: #666; }

/* ── 詳細資料網格 ── */
.details-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 14px;
  margin-top: 10px;
  font-size: 0.9rem;
}
.detail-item { display: contents; }
.detail-item .detail-label { font-weight: 700; color: #8B0000; grid-column: 1/2; font-size: 0.88rem; }
.detail-item .detail-value { grid-column: 2/3; color: #333; font-weight: 500; }
.detail-item.full-width {
  display: block;
  grid-column: 1 / -1;
  margin-top: 8px; padding: 10px;
  background: white; border-radius: 6px;
  border-left: 3px solid #8B0000;
}
.detail-item.full-width .detail-label { display: block; font-weight: 700; color: #8B0000; font-size: 0.88rem; margin-bottom: 4px; }
.detail-item.full-width .detail-value { display: block; color: #444; font-size: 0.88rem; line-height: 1.4; padding-left: 8px; }

/* ── 酒款類型 ── */
.wine-types-section { margin: 12px -16px 0; padding: 14px 16px; background: #fafafa; border-left: 3px solid #8B0000; }
.wine-types-title { font-weight: 700; font-size: 1rem; color: #8B0000; margin-bottom: 10px; }
.wine-types-list { display: flex; flex-wrap: wrap; gap: 8px; }
.wine-type-tag { background: linear-gradient(145deg, #8B0000, #660000); color: #fff; padding: 6px 12px; border-radius: 8px; font-size: 0.85rem; font-weight: 600; }

/* ── 葡萄品種 ── */
.grape-section { margin: 12px -16px 0; padding: 14px 16px; background: #fafafa; border-left: 3px solid #8B0000; }
.grape-title { font-weight: 700; font-size: 1rem; color: #8B0000; margin-bottom: 12px; }
.grape-badges { display: flex; flex-wrap: wrap; gap: 8px; }
.grape-badge { padding: 5px 12px; border-radius: 14px; font-size: 0.84rem; font-weight: 700; background: #f0f7f0; color: #2d7a4a; border: 1.5px solid rgba(45,122,74,0.3); }

/* ── 子產區 ── */
.details-section { display: flex; flex-direction: column; gap: 6px; }

/* ── AOC 產區選擇（波爾多同款居中遮罩） ── */
.aoc-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.34);
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
  display: flex; flex-direction: column; overflow: hidden;
  z-index: 1101;
  padding-bottom: 10px;
}
.aoc-handle {
  display: block;
  width: 52px; height: 5px;
  border-radius: 999px;
  background: rgba(122, 90, 64, 0.28);
  margin: 10px auto 8px;
  flex-shrink: 0;
}
.drawer-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 16px 12px;
  font-size: 1.05rem; font-weight: 700;
  color: #6b1f1f;
  border-bottom: 1px solid rgba(122, 90, 64, 0.14);
  flex-shrink: 0;
}
.drawer-close { background: none; border: none; cursor: pointer; color: #6b1f1f; font-size: 1.1rem; }
.drawer-search-wrap { display: flex; align-items: center; gap: 8px; padding: 12px 16px 8px; flex-shrink: 0; }
.search-icon { font-size: 1rem; }
.search-input { flex: 1; border: 1px solid rgba(107,31,31,0.16); outline: none; font-size: 1rem; background: rgba(255,255,255,0.95); padding: 8px 12px; border-radius: 12px; font-family: inherit; }
.filter-tabs { display: flex; gap: 4px; padding: 6px 16px 10px; border-bottom: 1px solid rgba(122,90,64,0.1); flex-shrink: 0; }
.filter-tab { flex: 1; padding: 5px; border: none; border-radius: 8px; font-size: 0.78rem; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.05); color: #666; transition: all 0.2s; font-family: inherit; }
.filter-tab.active { background: #8B0000; color: white; }
.appellation-list { flex: 1; overflow-y: auto; padding: 6px 0; }
.app-item { display: flex; align-items: center; gap: 10px; padding: 10px 16px; cursor: pointer; border-bottom: 1px solid rgba(122,90,64,0.08); transition: background 0.15s; }
.app-item:hover { background: rgba(139,0,0,0.05); }
.app-item.active { background: rgba(139,0,0,0.1); border-left: 3px solid #8B0000; padding-left: 13px; }
.app-badge { font-size: 0.68rem; font-weight: 700; padding: 2px 6px; border-radius: 8px; white-space: nowrap; flex-shrink: 0; }
.app-badge.docg { background: #e8f0fe; color: #3b5bdb; }
.app-badge.doc  { background: #fff3e0; color: #e67e22; }
.app-badge.igt  { background: #f3e8ff; color: #7c3aed; }
.app-text { display: flex; flex-direction: column; min-width: 0; }
.app-name { font-size: 1rem; font-weight: 600; color: #2c2c2c; line-height: 1.3; }
.app-styles { font-size: 0.78rem; color: #999; margin-top: 1px; }
.no-results { padding: 20px; text-align: center; color: #bbb; font-size: 0.88rem; }

/* ── 圖層面板（布根地 mobile-layer-panel 同款） ── */
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
  color: #6b1f1f; text-transform: uppercase;
  padding: 0 2px 10px;
  border-bottom: 1px solid rgba(0,0,0,0.08); margin-bottom: 10px;
}
.layers-panel-close { background: none; border: none; cursor: pointer; color: #6b1f1f; font-size: 14px; }
.layer-group { margin-bottom: 8px; }
.layer-group-label { font-size: 0.65rem; font-weight: 700; color: #aaa; text-transform: uppercase; letter-spacing: 0.05em; padding: 0 2px 4px; }
.layer-group-buttons { display: flex; flex-direction: column; gap: 4px; }
.btn-layer { display: flex; align-items: center; gap: 7px; width: 100%; padding: 8px 10px; border: 1.5px solid transparent; border-radius: 10px; cursor: pointer; font-size: 0.84rem; font-weight: 600; background: rgba(0,0,0,0.04); color: #444; transition: all 0.18s; text-align: left; font-family: inherit; }
.btn-layer:hover { background: rgba(0,0,0,0.07); }
.btn-layer.active { background: rgba(139,0,0,0.08); border-color: rgba(139,0,0,0.3); color: #8B0000; }
.lbtn-icon { font-size: 1rem; }
.lbtn-text { flex: 1; }
.lbtn-dot { width: 8px; height: 8px; border-radius: 50%; background: #ccc; flex-shrink: 0; transition: background 0.2s; }
.lbtn-dot.on { background: #8B0000; }

/* ── 底部 4宮格（布根地 mobile-grid-buttons 同款） ── */
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
.m-grid-btn {
  border-radius: 16px;
  background: linear-gradient(180deg, #faf5ef 0%, #f1e7dd 100%);
  color: #4f3422;
  min-height: 54px;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 3px;
  font-size: 0.76rem; font-weight: 800;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
  border: none; cursor: pointer;
  transition: all 0.2s;
  padding: 8px 4px;
}
.m-grid-btn.active {
  background: linear-gradient(180deg, #7b2424 0%, #5f1717 100%);
  color: #fff;
}
.m-grid-icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 30px; height: 30px; border-radius: 50%;
  background: rgba(107,31,31,0.08);
  font-size: 0.8rem; font-weight: 800; letter-spacing: 0.02em;
}
.m-grid-btn.active .m-grid-icon {
  background: rgba(255,255,255,0.18); color: #fff;
}
.m-grid-text { font-size: 0.76rem; font-weight: 800; }

/* ── Transitions ── */
.sheet-fade-enter-active, .sheet-fade-leave-active { transition: opacity 0.24s ease; }
.sheet-fade-enter-from, .sheet-fade-leave-to { opacity: 0; }
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.25s ease; }
.slide-up-enter-from, .slide-up-leave-to { opacity: 0; transform: translateX(-50%) translateY(12px); }

/* ── Loading ── */
.loading-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.25);
  display: flex; align-items: center; justify-content: center; z-index: 2000;
}
.loading-spinner {
  width: 44px; height: 44px;
  border: 4px solid rgba(255,255,255,0.3);
  border-top-color: white; border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.map-error {
  position: fixed; bottom: 100px; left: 50%; transform: translateX(-50%);
  background: rgba(139,0,0,0.9); color: white; padding: 10px 18px;
  border-radius: 8px; font-size: 0.9rem; z-index: 2000;
}

/* ── Mobile：抽屜全螢幕 ── */
@media (max-width: 768px) {
  .aoc-drawer { left: 0; right: 0; transform: none; width: 100%; top: calc(env(safe-area-inset-top, 0px) + 2px); border-radius: 20px 20px 14px 14px; }
  .map-info-bar { left: 8px; right: 8px; width: auto; transform: none; }
}
</style>
