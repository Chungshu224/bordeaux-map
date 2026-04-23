<template>
  <section class="map-section">

    <!-- 全螢幕地圖 -->
    <div ref="mapContainer" class="map"></div>

    <!-- Header (Bordeaux style: transparent, pill buttons) -->
    <div class="map-header">
      <div class="map-header-left">
        <button class="map-hdr-btn" @click="backToCourse">← 返回課程</button>
        <button class="map-hdr-btn ghost" @click="router.push('/')">🏠 首頁</button>
      </div>
      <h1>紐西蘭葡萄酒產區地圖</h1>
    </div>

    <!-- 資訊卡 (Bordeaux style) -->
    <div class="map-info-bar" v-if="activeAOC && activeAOC.aoc" :class="{ collapsed: infoCollapsed }">
      <div class="aoc-title-row">
        <span class="aoc-info-title">
          <span class="aoc-dot" :style="{ background: aocColor(activeAOC.group) }"></span>
          {{ activeAOC.aoc.replace('.geojson','').replace(/_/g,' ') }}
        </span>
        <div class="title-buttons">
          <button class="btn-collapse-inline" @click="infoCollapsed = !infoCollapsed" :title="infoCollapsed ? '展開資訊' : '收合資訊'">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline :points="infoCollapsed ? '18 15 12 9 6 15' : '6 9 12 15 18 9'"></polyline>
            </svg>
            <span class="btn-text">{{ infoCollapsed ? '展開' : '收合' }}</span>
          </button>
          <button class="btn-pronunciation-icon" @click="playPronunciation" :disabled="isPlayingAudio" title="聽發音">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            </svg>
          </button>
          <button class="btn-reset-icon" @click="resetMap" title="重置地圖">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 3v6h-6"></path>
              <path d="M20.49 15A9 9 0 1 1 21 9"></path>
            </svg>
          </button>
        </div>
      </div>

      <div v-show="!infoCollapsed" class="info-details">
      
      <div v-if="regionInfo" class="region-info-content">
        <div class="info-header">
          <div>
            <b>{{ regionInfo.name }}</b> 
            <span class="region-type">({{ regionInfo.type }})</span>
            <span v-if="regionInfo.hectare" class="region-hectare"> - {{ regionInfo.hectare }} 公頃</span>
          </div>
          <div class="style-badges">
            <div v-for="style in Array.isArray(regionInfo.style) ? regionInfo.style : [regionInfo.style]" 
                 :key="style" 
                 class="style-badge"
                 :style="{ backgroundColor: styleColors[style] || '#999', color: ['白酒', '甜酒'].includes(style) ? '#333' : '#fff' }">
              {{ style }}
            </div>
          </div>
        </div>

        <div class="description">{{ regionInfo.description }}</div>

        <div v-if="regionInfo.details" class="details-section">
          <div v-if="regionInfo.details.introduction" class="detail-item">
            <div class="detail-title">產區介紹:</div>
            <p>{{ regionInfo.details.introduction }}</p>
          </div>
          <div v-if="regionInfo.details.climate" class="detail-item">
            <div class="detail-title">氣候:</div>
            <p>{{ regionInfo.details.climate }}</p>
          </div>
          <div v-if="regionInfo.details.subregions && Object.keys(regionInfo.details.subregions).length > 0" class="detail-item">
            <div class="detail-title">子產區:</div>
            <ul>
              <li v-for="(desc, subregion) in regionInfo.details.subregions" :key="subregion">
                <strong>{{ subregion }}:</strong> {{ desc }}
              </li>
            </ul>
          </div>
        </div>

        <div v-if="regionInfo.grapes" class="grape-section">
          <div class="grape-title">主要葡萄品種:</div>
          <div class="grape-badges">
            <div v-for="grape in Array.isArray(regionInfo.grapes) ? regionInfo.grapes : regionInfo.grapes.split(',').map(g => g.trim())"
                 :key="grape"
                 class="grape-badge"
                 :style="grapeBadgeStyle(grape)">
              {{ grape }}
            </div>
          </div>
        </div>
      </div>
      <div v-else class="no-info">無詳細產區資料</div>
      </div>
    </div>

    <!-- 圖層面板 -->
    <transition name="layers-sheet-fade">
      <div v-if="layersOpen" class="layers-backdrop" @click.self="layersOpen = false">
        <div class="layers-sheet">
          <div class="layers-sheet-header">
            <span>圖層與顯示</span>
            <button class="layers-close-btn" @click="layersOpen = false">×</button>
          </div>
          <div class="layer-group">
            <div class="layer-group-label">視角</div>
            <div class="layer-group-buttons">
              <button class="btn-layer" :class="{ active: is3D }" @click="toggle3D; layersOpen = false">
                <span class="lbtn-icon">🗺️</span>
                <span class="lbtn-text">3D 地形</span>
                <span class="lbtn-dot" :class="{ on: is3D }"></span>
              </button>
              <button class="btn-layer" :class="{ active: contoursEnabled, 'color-contours': true }" @click="toggleContours">
                <span class="lbtn-icon">〰️</span>
                <span class="lbtn-text">等高線</span>
                <span class="lbtn-dot" :class="{ on: contoursEnabled }"></span>
              </button>
            </div>
          </div>
          <div class="layer-group">
            <div class="layer-group-label">工具</div>
            <div class="layer-group-buttons">
              <button class="btn-layer" @click="emit('resetMap'); layersOpen = false">
                <span class="lbtn-icon">↺</span>
                <span class="lbtn-text">重置地圖</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- 底部工具列 (Bordeaux style) -->
    <div v-if="mapReady" class="mobile-map-toolbar">
      <button class="mobile-tool-btn" :class="{ active: props.drawerOpen }" @click="emit('openDrawer')">
        <span class="mobile-tool-icon">產</span>
        <span>產區</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: layersOpen }" @click="layersOpen = !layersOpen">
        <span class="mobile-tool-icon">層</span>
        <span>圖層</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: is3D }" @click="toggle3D">
        <span class="mobile-tool-icon">3D</span>
        <span>{{ is3D ? '2D' : '3D' }}</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: activeAOC && activeAOC.aoc && !infoCollapsed }" @click="infoCollapsed = !infoCollapsed">
        <span class="mobile-tool-icon">資</span>
        <span>資訊</span>
      </button>
    </div>

    <div v-if="mapError" class="map-error">{{ mapError }}</div>
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
  </section>
</template>

<script setup>
// 葡萄品種分類顏色
const grapeTypeColors = { red: '#8B0000', white: '#F0E68C', aromatic: '#87CEEB', other: '#bbb' }
const redGrapes = ['Pinot Noir', 'Merlot', 'Syrah', 'Cabernet Sauvignon', 'Malbec', 'Pinotage', 'Chambourcin', 'Petit Verdot', 'Cabernet Franc', 'Montepulciano']
const whiteGrapes = ['Chardonnay', 'Sauvignon Blanc', 'Pinot Gris', 'Viognier', 'Grüner Veltliner', 'Riesling', 'Gewurztraminer']
const aromaticGrapes = ['Arneis']

function grapeBadgeStyle(grape) {
  if (redGrapes.includes(grape)) return { backgroundColor: grapeTypeColors.red, color: '#fff', fontWeight: 'bold' }
  if (whiteGrapes.includes(grape)) return { backgroundColor: grapeTypeColors.white, color: '#333', fontWeight: 'bold' }
  if (aromaticGrapes.includes(grape)) return { backgroundColor: grapeTypeColors.aromatic, color: '#333', fontWeight: 'bold' }
  return { backgroundColor: grapeTypeColors.other, color: '#333' }
}

import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as turf from '@turf/turf'

const router = useRouter()

const props = defineProps({
  activeAOC: Object,
  regionInfo: Object,
  styleColors: { type: Object, default: () => ({}) },
  drawerOpen: { type: Boolean, default: false },
})

const emit = defineEmits(['resetMap', 'back-to-course', 'openDrawer'])

const backToCourse = () => emit('back-to-course')
const resetMap = () => emit('resetMap')

const isLoading = ref(false)
const mapReady = ref(false)
const mapError = ref(null)
const mapContainer = ref(null)
const infoCollapsed = ref(false)
let map = null
const is3D = ref(false)
const layersOpen = ref(false)
const contoursEnabled = ref(false)
const geojsonCache = new Map()
const isPlayingAudio = ref(false)
let currentAudio = null

function aocColor() { return '#006400' }

const showAOCGeojson = async (groupName, aocFile) => {
  if (!map) return
  const geojsonPath = `/newzealand/geojson/NewZealand/${aocFile}`
  isLoading.value = true
  mapError.value = null
  try {
    let geojson
    if (geojsonCache.has(geojsonPath)) {
      geojson = geojsonCache.get(geojsonPath)
    } else {
      const res = await fetch(geojsonPath)
      if (!res.ok) throw new Error(`無法載入 geojson (${res.status})`)
      geojson = await res.json()
      geojsonCache.set(geojsonPath, geojson)
    }
    if (map.getLayer('aoc-fill')) map.removeLayer('aoc-fill')
    if (map.getLayer('aoc-outline')) map.removeLayer('aoc-outline')
    if (map.getSource('aoc')) map.removeSource('aoc')
    map.addSource('aoc', { type: 'geojson', data: geojson })
    map.addLayer({ id: 'aoc-fill', type: 'fill', source: 'aoc', paint: { 'fill-color': aocColor(), 'fill-opacity': 0.10 } })
    map.addLayer({ id: 'aoc-outline', type: 'line', source: 'aoc', paint: { 'line-color': '#fff', 'line-width': 2 } })
    const bbox = turf.bbox(geojson)
    map.fitBounds(bbox, { padding: 40, duration: 800 })
  } catch (err) {
    console.error('載入 geojson 失敗:', err)
    mapError.value = `載入 geojson 失敗: ${err.message}`
  } finally {
    isLoading.value = false
  }
}

const playPronunciation = () => {
  if (!props.activeAOC?.aoc) return
  if (currentAudio) { currentAudio.pause(); currentAudio = null }
  const audioFileName = props.activeAOC.aoc.replace('.geojson', '.mp3')
  const audioPath = `/newzealand/sounds/${audioFileName}`
  currentAudio = new Audio(audioPath)
  isPlayingAudio.value = true
  currentAudio.play().catch(() => { isPlayingAudio.value = false })
  currentAudio.onended = () => { isPlayingAudio.value = false; currentAudio = null }
  currentAudio.onerror = () => { isPlayingAudio.value = false; currentAudio = null }
}

const toggle3D = () => {
  is3D.value = !is3D.value
  if (map) map.easeTo({ pitch: is3D.value ? 45 : 0, duration: 800 })
}

// ── 等高線（NZ：南阿爾卑斯山脈高達3000m，標準100m主線）―――――――――――――――――――――
let nzContoursInit = false
function initNZContourLayers() {
  if (nzContoursInit || !map) return
  nzContoursInit = true
  if (!map.getSource('mapbox-dem')) {
    map.addSource('mapbox-dem', { type: 'raster-dem', url: 'mapbox://mapbox.mapbox-terrain-dem-v1', tileSize: 512, maxzoom: 14 })
  }
  if (!map.getSource('nz-contours')) {
    map.addSource('nz-contours', { type: 'vector', url: 'mapbox://mapbox.mapbox-terrain-v2' })
  }
  if (!map.getLayer('nz-contours-line')) {
    map.addLayer({
      id: 'nz-contours-line', type: 'line',
      source: 'nz-contours', 'source-layer': 'contour',
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
  }
  if (!map.getLayer('nz-contour-labels')) {
    map.addLayer({
      id: 'nz-contour-labels', type: 'symbol',
      source: 'nz-contours', 'source-layer': 'contour',
      layout: {
        'symbol-placement': 'line',
        'text-field': ['concat', ['to-string', ['get', 'ele']], 'm'],
        'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
        'text-size': ['interpolate', ['linear'], ['zoom'], 10, 9, 13, 11, 16, 13],
        'text-padding': 25, visibility: 'none',
      },
      paint: {
        'text-color': '#FFD700',
        'text-halo-color': 'rgba(0,0,0,0.8)',
        'text-halo-width': 2,
        'text-opacity': ['interpolate', ['linear'], ['zoom'], 10, 0.5, 12, 0.8, 14, 1]
      },
      filter: ['==', ['%', ['to-number', ['get', 'ele']], 50], 0],  // 每50m新標籤
      minzoom: 10,
    })
  }
}
function toggleContours() {
  if (!map) return
  contoursEnabled.value = !contoursEnabled.value
  if (contoursEnabled.value) initNZContourLayers()
  const vis = contoursEnabled.value ? 'visible' : 'none'
  if (map.getLayer('nz-contours-line'))  map.setLayoutProperty('nz-contours-line',  'visibility', vis)
  if (map.getLayer('nz-contour-labels')) map.setLayoutProperty('nz-contour-labels', 'visibility', vis)
}

const initMap = async (retry = 0) => {
  try {
    if (!mapContainer.value) {
      if (retry < 5) setTimeout(() => initMap(retry + 1), 200)
      else mapError.value = '無法獲取地圖容器'
      return
    }
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [174.886, -40.9006],
      zoom: 4,
      pitch: is3D.value ? 45 : 0,
      bearing: 0
    })
    map.on('load', () => {
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')
      map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
      mapReady.value = true
    })
    map.on('error', (err) => {
      mapError.value = `地圖錯誤: ${err.error?.message || '未知錯誤'}`
    })
    mapError.value = null
  } catch (err) {
    mapError.value = `初始化錯誤: ${err.message}`
  }
}

watch(() => props.activeAOC, (newAOC, oldAOC) => {
  if (newAOC?.aoc) {
    if (newAOC.aoc !== oldAOC?.aoc) showAOCGeojson(newAOC.group, newAOC.aoc)
  } else if (map?.getLayer('aoc-fill')) {
    map.removeLayer('aoc-fill')
    map.removeLayer('aoc-outline')
    map.removeSource('aoc')
    map.flyTo({ center: [174.886, -40.9006], zoom: 4 })
  }
})

onMounted(() => initMap())

onUnmounted(() => {
  if (currentAudio) { currentAudio.pause(); currentAudio = null }
  if (map) { map.remove(); map = null }
})
</script>

<style scoped>
/* ── Base ─────────────────────────────────────────────────────── */
.map-section { flex: 1; position: relative; height: 100%; overflow: hidden; }
.map { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }

/* ── Header (Bordeaux style) ──────────────────────────────────── */
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
  background: rgba(0,100,0,0.82);
  color: #fff;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  transition: background 0.2s;
  white-space: nowrap;
}
.map-hdr-btn:hover { background: rgba(0,120,0,0.95); }
.map-hdr-btn.ghost {
  background: rgba(255,255,255,0.75);
  border: 1.5px solid rgba(0,100,0,0.5);
  color: #004d00;
}
.map-hdr-btn.ghost:hover { background: rgba(255,255,255,0.92); }
.map-header h1 {
  margin: 0;
  font-size: 1.3rem;
  color: #004d00;
  text-align: center;
  flex: 1;
  text-shadow: 0 1px 4px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.9);
  padding-top: 4px;
  pointer-events: none;
}

/* ── Info bar (Bordeaux style: white card, bottom-left) ────────── */
.map-info-bar {
  position: absolute;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 110px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255,255,255,0.97);
  padding: 18px;
  border-radius: 8px;
  width: min(90vw, 380px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  z-index: 10;
  font-size: 16px;
  transition: all 0.3s ease;
  color: #222;
}
.map-info-bar.collapsed { width: min(90vw, 380px); padding: 12px 18px; }
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
  font-size: 1.1rem;
  font-weight: bold;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #222;
}
.aoc-dot { width: 10px; height: 10px; border-radius: 50%; margin-right: 8px; flex-shrink: 0; }
.title-buttons { display: flex; gap: 8px; align-items: center; flex-shrink: 0; }
.btn-collapse-inline {
  display: flex; align-items: center; gap: 4px;
  padding: 6px 10px;
  background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  color: #444;
  font-size: 0.82rem;
  font-weight: 600;
  transition: all 0.2s;
}
.btn-collapse-inline:hover { background: linear-gradient(135deg, #e8e8e8, #d0d0d0); border-color: #006400; color: #006400; }
.btn-text { font-size: 0.85rem; white-space: nowrap; }
.map-info-bar.collapsed .btn-text { display: none; }
.map-info-bar.collapsed .btn-collapse-inline { padding: 6px 8px; }
.btn-pronunciation-icon {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px;
  padding: 6px;
  border: none; border-radius: 10px;
  background: linear-gradient(180deg, #764ba2 0%, #667eea 100%);
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.16);
  flex-shrink: 0;
}
.btn-pronunciation-icon:disabled { opacity: 0.6; cursor: not-allowed; }
.btn-pronunciation-icon:not(:disabled):hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(0,0,0,0.22); }
.btn-reset-icon {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px;
  padding: 6px;
  border: none; border-radius: 10px;
  background: linear-gradient(180deg, #ff6f61 0%, #ef4f45 100%);
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.16);
  flex-shrink: 0;
}
.btn-reset-icon:hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(0,0,0,0.22); }
.info-details {
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: 1000px;
  opacity: 1;
}
.map-info-bar.collapsed .info-details { max-height: 0; opacity: 0; margin: 0; padding: 0; }

/* ── Info content ─────────────────────────────────────────────── */
.region-info-content { margin-top: 12px; font-size: 0.95rem; line-height: 1.5; color: #222; overflow-y: auto; max-height: 22vh; padding-right: 6px; }
.info-header { margin-bottom: 10px; }
.region-type, .region-hectare { font-size: 0.9rem; color: #666; }
.style-badges { display: flex; gap: 5px; flex-wrap: wrap; margin-top: 8px; }
.style-badge { padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }
.description { margin-top: 10px; font-size: 0.9rem; }
.details-section { margin-top: 15px; border-top: 1px solid #eee; padding-top: 15px; }
.detail-item { margin-bottom: 10px; }
.detail-title { font-weight: bold; font-size: 1rem; color: #333; margin-bottom: 5px; }
.detail-item p, .detail-item ul { margin: 0; padding-left: 5px; font-size: 0.9rem; }
.detail-item ul { padding-left: 20px; }
.detail-item li { margin-bottom: 5px; }
.grape-section { margin: 12px 0 6px; }
.grape-title { font-weight: 600; font-size: 0.88rem; color: #555; margin-bottom: 8px; }
.grape-badges { display: flex; flex-wrap: wrap; gap: 5px; }
.grape-badge { padding: 3px 9px; border-radius: 10px; font-size: 0.82rem; font-weight: 600; }
.no-info { margin-top: 6px; color: #888; font-size: 0.9rem; }

/* ── Bottom toolbar (Bordeaux style) ─────────────────────────── */
.mobile-map-toolbar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 24px);
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  padding: 8px;
  border-radius: 18px;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  width: min(90vw, 380px);
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
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}
.mobile-tool-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.mobile-tool-btn:not(:disabled):hover { background: linear-gradient(180deg, #f5ede0 0%, #eadcc8 100%); }
.mobile-tool-btn.active {
  background: linear-gradient(180deg, #1a5e1a 0%, #0d3d0d 100%);
  color: #fff;
}
.mobile-tool-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px; height: 30px;
  border-radius: 50%;
  background: rgba(0,80,0,0.08);
  font-size: 0.8rem;
  font-weight: 800;
}
.mobile-tool-btn.active .mobile-tool-icon { background: rgba(255,255,255,0.18); }

/* ── 圖層面板 ─────────────────────────────────────────────────── */
.layers-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.35);
  z-index: 1400;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  backdrop-filter: blur(4px);
}
.layers-sheet {
  width: min(90vw, 380px);
  background: white;
  border-radius: 20px 20px 14px 14px;
  padding: 0 0 24px;
  box-shadow: 0 -8px 32px rgba(0,0,0,0.22);
  margin-bottom: 96px;
  color: #222;
}
.layers-sheet-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px 14px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
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
  font-size: 0.72rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.06em;
  color: #999; margin-bottom: 8px;
}
.layer-group-buttons { display: flex; flex-direction: column; gap: 6px; }
.btn-layer {
  display: flex; align-items: center; gap: 10px;
  width: 100%; padding: 13px 16px;
  border: 1.5px solid rgba(0,0,0,0.07);
  border-radius: 12px; cursor: pointer;
  font-size: 0.88rem; font-weight: 600;
  background: rgba(0,0,0,0.02); color: #333;
  transition: all 0.15s; text-align: left; font-family: inherit;
}
.btn-layer:hover { background: rgba(0,100,0,0.06); border-color: rgba(0,100,0,0.2); }
.btn-layer.active { background: rgba(0,100,0,0.08); border-color: #006400; color: #006400; }
.btn-layer.color-contours.active { background: #f3e5f5; border-color: #9C27B0; color: #6a1b9a; }
.btn-layer.color-contours:not(.active):hover { border-color: #ce93d8; }
.btn-layer.color-contours.active .lbtn-dot { background: #9C27B0; border-color: #9C27B0; }
.lbtn-icon { font-size: 1.1rem; width: 22px; text-align: center; flex-shrink: 0; }
.lbtn-text { flex: 1; }
.lbtn-dot {
  width: 14px; height: 14px; border-radius: 50%;
  border: 2px solid #ccc; flex-shrink: 0; transition: all 0.15s;
}
.lbtn-dot.on { background: #006400; border-color: #006400; }
.layers-sheet-fade-enter-active, .layers-sheet-fade-leave-active { transition: opacity 0.22s ease; }
.layers-sheet-fade-enter-from, .layers-sheet-fade-leave-to { opacity: 0; }

/* ── Loading / Error ──────────────────────────────────────────── */
.loading-overlay { position: absolute; inset: 0; background: rgba(255,255,255,0.7); display: flex; align-items: center; justify-content: center; z-index: 20; }
.loading-spinner { width: 44px; height: 44px; border: 4px solid #eee; border-top-color: #006400; border-radius: 50%; animation: spin 0.8s linear infinite; }
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
.map-error { position: absolute; top: 70px; left: 50%; transform: translateX(-50%); background: #f44336; color: white; padding: 10px 20px; border-radius: 8px; z-index: 30; max-width: 80%; text-align: center; }

/* ── Responsive ───────────────────────────────────────────────── */
@media (max-width: 600px) {
  .map-info-bar { padding: 12px; }
  .map-header h1 { font-size: 1rem; }
}
</style>

