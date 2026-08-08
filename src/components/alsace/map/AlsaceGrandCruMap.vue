<template>
  <section class="alsace-map-section">
    <RegionMapHeader
      region-name="阿爾薩斯"
      title="阿爾薩斯葡萄酒探索地圖"
      icon="🍇"
      @back="emit('request-learning-mode')"
    />

    <!-- 分類模式切換：地質分類 / 產區位階 -->
    <div class="mode-toggle-float">
      <button class="mode-btn" :class="{ active: mode === 'geology' }" @click="setMode('geology')">🪨 地質分類</button>
      <button class="mode-btn" :class="{ active: mode === 'hierarchy' }" @click="setMode('hierarchy')">🗺️ 產區位階</button>
    </div>

    <div ref="mapContainer" class="map"></div>

    <RegionMapInfoPanel
      v-if="activeInfo"
      :info="unifiedInfo"
      theme-color="#2d6a4f"
      :audio-available="audioAvailable"
      :is-playing-audio="isPlayingAudio"
      :collapsed="infoCollapsed"
      @toggle-collapse="infoCollapsed = !infoCollapsed"
      @play-audio="playAudio"
      @reset="resetMap"
    >
      <template #extra-actions>
        <button
          v-if="activeInfo?.lessonId"
          class="rmap-action-btn"
          title="前往對應課程"
          @click="emit('go-to-lesson', activeInfo.lessonId)"
        >
          <span class="rmap-btn-icon">🎓</span>
        </button>
      </template>
    </RegionMapInfoPanel>

    <RegionMapAppellationDrawer
      :open="drawerOpen"
      region-name="阿爾薩斯"
      :grouped="groupedItems"
      :active-id="activeInfo?.id || ''"
      :search="search"
      @update:open="drawerOpen = $event"
      @update:search="search = $event"
      @select="selectById"
    />

    <transition name="slide-up">
      <div v-if="showLayerPanel" class="layer-panel-wrapper">
        <RegionMapLayerPanel
          :is3D="is3D"
          :show-contours="showContours"
          :climate-enabled="false"
          soil-label="BRGM 地質"
          :soil-disabled="true"
          @toggle-3d="toggle3D"
          @toggle-contours="toggleContours"
          @toggle-climate="onLayerComingSoon"
          @close="showLayerPanel = false"
        />
      </div>
    </transition>

    <RegionMapMobileToolbar
      v-if="mapReady"
      :aoc-open="drawerOpen"
      :layer-open="showLayerPanel"
      :is3D="is3D"
      :info-open="!!activeInfo && !infoCollapsed"
      @action="handleToolbarAction"
    />

    <div v-if="mapError" class="map-error">{{ mapError }}</div>
    <div v-if="isLoading" class="loading-overlay"><div class="loading-spinner"></div></div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as turf from '@turf/turf'
import {
  getMapboxToken,
  shouldUseMapbox,
  getOSMStyle,
  getMapboxStyleUrl
} from '@/utils/getMapboxToken'
import {
  RegionMapHeader, RegionMapInfoPanel, RegionMapLayerPanel,
  RegionMapAppellationDrawer, RegionMapMobileToolbar
} from '../../shared/regionMap/index.js'

const emit = defineEmits(['request-learning-mode', 'go-to-lesson'])

const DEFAULT_VIEW = { center: [7.36, 48.15], zoom: 9.3 }

const FAMILY_LABELS = {
  '00-AOC-Alsace': 'AOC Alsace 基礎產區',
  '12-Denominations': '補充地理標示',
  '01-Schiste': '片岩',
  '02-Volcano-sedimentaire': '火山沉積岩',
  '03-Gres': '砂岩',
  '04-Granite': '花崗岩',
  '05-Calcaire': '石灰岩',
  '06-Calcaro-greseux': '灰砂岩',
  '07-Marno-greseux': '泥灰砂岩',
  '08-Marno-calcaro-greseux': '泥灰石灰砂岩',
  '09-Marno-calcaire': '泥灰石灰岩',
  '10-Argilo-marneux': '黏土泥灰岩',
  '11-Kaefferkopf': '混釀特例',
  '13-Cremant': "Crémant d'Alsace",
}
const GEOLOGY_ORDER = [
  '01-Schiste', '02-Volcano-sedimentaire', '03-Gres', '04-Granite', '05-Calcaire',
  '06-Calcaro-greseux', '07-Marno-greseux', '08-Marno-calcaro-greseux',
  '09-Marno-calcaire', '10-Argilo-marneux', '11-Kaefferkopf',
]

// ── State ──────────────────────────────────────────────────────
const mapContainer = ref(null)
let map = null
const mapReady = ref(false)
const isLoading = ref(false)
const mapError = ref(null)
const is3D = ref(false)
const showContours = ref(false)
const mapSupportsTerrain = ref(false)
const infoCollapsed = ref(false)
const drawerOpen = ref(false)
const showLayerPanel = ref(false)
const search = ref('')
const activeInfo = ref(null)
const isPlayingAudio = ref(false)
const audioAvailable = ref(false)
const metaList = ref([])
const mode = ref('geology')
let audioPlayer = null
let hasRetriedWithOsmFallback = false
let regionBounds = null
const geojsonCache = new Map()

const MODE_LAYER_IDS = ['denom-fill', 'denom-outline', 'overview-fill', 'overview-outline']
const MODE_SOURCE_IDS = ['denom', 'overview']

// ── Computed ───────────────────────────────────────────────────
const groupedItems = computed(() => {
  let list = metaList.value
  if (search.value.trim()) {
    const q = search.value.trim().toLowerCase()
    list = list.filter(m => m.name.toLowerCase().includes(q) || (m.commune || '').toLowerCase().includes(q))
  }

  const toItems = (arr) => arr.slice().sort((a, b) => a.name.localeCompare(b.name)).map(m => ({ id: m.id, name: m.name }))

  if (mode.value === 'hierarchy') {
    // 產區位階模式：AOC Alsace → 補充地理標示 → Grand Cru（單一群組，不再依地質細分）→ Crémant
    const tiers = { '00-AOC-Alsace': [], '12-Denominations': [], 'grand-cru': [], '13-Cremant': [] }
    for (const m of list) {
      if (m.folder === '00-AOC-Alsace') tiers['00-AOC-Alsace'].push(m)
      else if (m.folder === '12-Denominations') tiers['12-Denominations'].push(m)
      else if (m.folder === '13-Cremant') tiers['13-Cremant'].push(m)
      else if (GEOLOGY_ORDER.includes(m.folder)) tiers['grand-cru'].push(m)
    }
    const tierLabels = {
      '00-AOC-Alsace': 'AOC Alsace 基礎產區',
      '12-Denominations': '補充地理標示',
      'grand-cru': 'Grand Cru 特級園',
      '13-Cremant': "Crémant d'Alsace",
    }
    return ['00-AOC-Alsace', '12-Denominations', 'grand-cru', '13-Cremant']
      .filter(k => tiers[k].length)
      .map(k => ({ key: k, label: `${tierLabels[k]}（${tiers[k].length}）`, items: toItems(tiers[k]) }))
  }

  // 地質分類模式：十大地質族群（僅 Grand Cru）
  const byFolder = {}
  for (const m of list) {
    if (!GEOLOGY_ORDER.includes(m.folder)) continue
    ;(byFolder[m.folder] ||= []).push(m)
  }
  return GEOLOGY_ORDER.filter(f => byFolder[f]?.length).map(f => ({
    key: f,
    label: `${FAMILY_LABELS[f]}（${byFolder[f].length}）`,
    items: toItems(byFolder[f]),
  }))
})

const unifiedInfo = computed(() => {
  const r = activeInfo.value
  if (!r) return null
  const meta = []
  if (r.commune) meta.push({ label: '村莊', value: r.commune })
  if (r.area) meta.push({ label: '面積', value: r.area })
  return {
    name: r.name,
    originalName: r.fullName,
    badges: r.family ? [{ label: r.family }] : [],
    meta,
    grapes: r.grapes || [],
    soil: r.soil || '',
    description: r.description || '',
  }
})

// ── Data loading ───────────────────────────────────────────────
async function loadMeta() {
  if (metaList.value.length) return metaList.value
  const res = await fetch('/alsace/data/Grand-Cru.json')
  metaList.value = res.ok ? await res.json() : []
  return metaList.value
}

async function fetchJson(path) {
  if (geojsonCache.has(path)) return geojsonCache.get(path)
  const res = await fetch(path)
  if (!res.ok) throw new Error(`無法載入資料 (${res.status})：${path}`)
  const data = await res.json()
  geojsonCache.set(path, data)
  return data
}

// ── Region outline (permanent context, loaded once) ─────────────
async function loadRegionOutline() {
  if (!map || map.getSource('region-outline')) return
  const geojson = await fetchJson('/alsace/geojson/hierarchy-general.geojson')
  map.addSource('region-outline', { type: 'geojson', data: geojson })
  map.addLayer({ id: 'region-outline-line', type: 'line', source: 'region-outline', paint: { 'line-color': '#ffffff', 'line-width': 2, 'line-opacity': 0.85 } })
  regionBounds = turf.bbox(geojson)
}

// ── Mode-dependent overview layers ──────────────────────────────
function removeModeLayers() {
  if (!map) return
  for (const id of MODE_LAYER_IDS) if (map.getLayer(id)) map.removeLayer(id)
  for (const id of MODE_SOURCE_IDS) if (map.getSource(id)) map.removeSource(id)
}

function setOverviewVisibility(visible) {
  if (!map) return
  const vis = visible ? 'visible' : 'none'
  for (const id of MODE_LAYER_IDS) if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', vis)
  // 選取單一地塊時，連同整個阿爾薩斯基礎產區外框線也一併隱藏，避免視覺干擾
  if (map.getLayer('region-outline-line')) map.setLayoutProperty('region-outline-line', 'visibility', vis)
}

const clickableLayerIds = ['denom-fill', 'overview-fill']
const attachedListenerIds = new Set()
function attachInteractionsOnce() {
  if (!map) return
  for (const id of clickableLayerIds) {
    if (attachedListenerIds.has(id)) continue
    map.on('click', id, (e) => { const f = e.features?.[0]; if (f?.properties?.id) selectById({ id: f.properties.id }) })
    map.on('mouseenter', id, () => { map.getCanvas().style.cursor = 'pointer' })
    map.on('mouseleave', id, () => { map.getCanvas().style.cursor = '' })
    attachedListenerIds.add(id)
  }
}

async function loadOverviewLayer() {
  if (!map) return
  removeModeLayers()

  if (mode.value === 'hierarchy') {
    const [denom, grandCru] = await Promise.all([
      fetchJson('/alsace/geojson/hierarchy-denominations.geojson'),
      fetchJson('/alsace/geojson/all-grand-crus.geojson'),
    ])
    map.addSource('denom', { type: 'geojson', data: denom })
    map.addLayer({ id: 'denom-fill', type: 'fill', source: 'denom', paint: { 'fill-color': '#16a085', 'fill-opacity': 0.35 } })
    map.addLayer({ id: 'denom-outline', type: 'line', source: 'denom', paint: { 'line-color': '#fff', 'line-width': 1 } })

    map.addSource('overview', { type: 'geojson', data: grandCru })
    map.addLayer({ id: 'overview-fill', type: 'fill', source: 'overview', paint: { 'fill-color': '#c9a227', 'fill-opacity': 0.75 } })
    map.addLayer({ id: 'overview-outline', type: 'line', source: 'overview', paint: { 'line-color': '#fff', 'line-width': 1 } })
  } else {
    const grandCru = await fetchJson('/alsace/geojson/all-grand-crus.geojson')
    map.addSource('overview', { type: 'geojson', data: grandCru })
    map.addLayer({
      id: 'overview-fill', type: 'fill', source: 'overview',
      paint: { 'fill-color': ['get', 'familyColor'], 'fill-opacity': 0.45 },
    })
    map.addLayer({ id: 'overview-outline', type: 'line', source: 'overview', paint: { 'line-color': '#fff', 'line-width': 1 } })
  }
  attachInteractionsOnce()
}

async function setMode(next) {
  if (mode.value === next) return
  mode.value = next
  if (map?.getLayer('highlight-fill')) map.removeLayer('highlight-fill')
  if (map?.getLayer('highlight-line')) map.removeLayer('highlight-line')
  if (map?.getSource('highlight')) map.removeSource('highlight')
  activeInfo.value = null
  infoCollapsed.value = false
  await loadOverviewLayer()
  if (map?.getLayer('region-outline-line')) map.setLayoutProperty('region-outline-line', 'visibility', 'visible')
  if (regionBounds) map.fitBounds([[regionBounds[0], regionBounds[1]], [regionBounds[2], regionBounds[3]]], { padding: 60, duration: 600 })
}

// ── Selection ────────────────────────────────────────────────────
function selectById(item) {
  const found = metaList.value.find(m => m.id === item.id)
  if (found) selectItem(found)
}

async function selectItem(m) {
  activeInfo.value = m
  drawerOpen.value = false
  await highlightItem(m)
  await checkAudio(m)
}

async function highlightItem(m) {
  if (!map) return
  isLoading.value = true
  mapError.value = null
  try {
    const geojson = await fetchJson(`/alsace/geojson/${m.folder}/${m.file}`)

    if (map.getLayer('highlight-fill')) map.removeLayer('highlight-fill')
    if (map.getLayer('highlight-line')) map.removeLayer('highlight-line')
    if (map.getSource('highlight')) map.removeSource('highlight')

    setOverviewVisibility(false)

    map.addSource('highlight', { type: 'geojson', data: geojson })
    map.addLayer({ id: 'highlight-fill', type: 'fill', source: 'highlight', paint: { 'fill-color': '#ffd700', 'fill-opacity': 0.55 } })
    map.addLayer({ id: 'highlight-line', type: 'line', source: 'highlight', paint: { 'line-color': '#fff', 'line-width': 3 } })

    const bbox = turf.bbox(geojson)
    map.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: 80, duration: 800 })
  } catch (err) {
    console.error('載入地塊失敗:', err)
    mapError.value = `載入失敗：${err.message}`
  } finally {
    isLoading.value = false
  }
}

function resetMap() {
  if (map?.getLayer('highlight-fill')) map.removeLayer('highlight-fill')
  if (map?.getLayer('highlight-line')) map.removeLayer('highlight-line')
  if (map?.getSource('highlight')) map.removeSource('highlight')
  setOverviewVisibility(true)
  activeInfo.value = null
  infoCollapsed.value = false
  if (map && regionBounds) map.fitBounds([[regionBounds[0], regionBounds[1]], [regionBounds[2], regionBounds[3]]], { padding: 60, duration: 900 })
}

// ── Audio ──────────────────────────────────────────────────────
async function checkAudio(m) {
  audioAvailable.value = false
  try {
    const r = await fetch(`/alsace/sounds/${m.id}.mp3`, { method: 'HEAD' })
    audioAvailable.value = r.ok
  } catch { /* no audio yet */ }
}

function playAudio() {
  if (!activeInfo.value) return
  if (audioPlayer) { audioPlayer.pause(); audioPlayer = null }
  audioPlayer = new Audio(`/alsace/sounds/${activeInfo.value.id}.mp3`)
  isPlayingAudio.value = true
  audioPlayer.play().catch(() => { isPlayingAudio.value = false })
  audioPlayer.onended = () => { isPlayingAudio.value = false }
  audioPlayer.onerror = () => { isPlayingAudio.value = false }
}

// ── Layer panel: 3D / contours / (climate placeholder) ──────────
function toggle3D() {
  if (!mapSupportsTerrain.value) { is3D.value = false; return }
  is3D.value = !is3D.value
  if (!map) return
  if (is3D.value) {
    map.easeTo({ pitch: 45, duration: 800 })
    if (map.getSource('mapbox-dem')) {
      map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 })
      if (!map.getLayer('sky')) {
        map.addLayer({ id: 'sky', type: 'sky', paint: { 'sky-type': 'atmosphere', 'sky-atmosphere-sun': [0, 90], 'sky-atmosphere-sun-intensity': 15 } })
      }
    }
  } else {
    map.easeTo({ pitch: 0, duration: 800 })
    map.setTerrain(null)
    if (map.getLayer('sky')) map.removeLayer('sky')
  }
}

function toggleContours() {
  if (!mapSupportsTerrain.value) { showContours.value = false; return }
  showContours.value = !showContours.value
  if (!map || !map.getLayer('contour-lines')) return
  const vis = showContours.value ? 'visible' : 'none'
  map.setLayoutProperty('contour-lines', 'visibility', vis)
  if (map.getLayer('contour-labels')) map.setLayoutProperty('contour-labels', 'visibility', vis)
}

function onLayerComingSoon() {
  mapError.value = '🚧 氣候熱力／BRGM 地質圖層即將推出，敬請期待'
  setTimeout(() => {
    if (mapError.value === '🚧 氣候熱力／BRGM 地質圖層即將推出，敬請期待') mapError.value = null
  }, 2200)
}

function handleToolbarAction(action) {
  if (action === 'aoc') {
    showLayerPanel.value = false
    drawerOpen.value = !drawerOpen.value
  } else if (action === 'layer') {
    drawerOpen.value = false
    showLayerPanel.value = !showLayerPanel.value
  } else if (action === '3d') {
    toggle3D()
  } else if (action === 'info') {
    if (activeInfo.value) infoCollapsed.value = !infoCollapsed.value
  }
}

// ── Map init ─────────────────────────────────────────────────────
const extractMapErrorMessage = (err) => (typeof err === 'string' ? err : err?.error?.message || err?.message || '未知錯誤')
const isMapboxAuthError = (err) => {
  const message = extractMapErrorMessage(err).toLowerCase()
  const status = Number(err?.error?.status || err?.status || 0)
  return status === 401 || status === 403 || message.includes('401') || message.includes('403') ||
    message.includes('forbidden') || message.includes('unauthorized') || message.includes('access token')
}

async function initMap(retry = 0) {
  try {
    if (!mapContainer.value) {
      if (retry < 5) { setTimeout(() => initMap(retry + 1), 200); return }
      mapError.value = '無法獲取地圖容器'
      return
    }
    const MAPBOX_TOKEN = getMapboxToken()
    const useMapbox = !hasRetriedWithOsmFallback && shouldUseMapbox(MAPBOX_TOKEN)
    let chosenStyle
    if (useMapbox) {
      mapboxgl.accessToken = MAPBOX_TOKEN
      chosenStyle = getMapboxStyleUrl(MAPBOX_TOKEN, 'satellite-streets-v12')
    } else {
      mapboxgl.accessToken = 'pk.notarealtoken'
      chosenStyle = getOSMStyle()
    }
    mapSupportsTerrain.value = useMapbox
    if (!useMapbox) { is3D.value = false; showContours.value = false }

    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: chosenStyle,
      center: DEFAULT_VIEW.center,
      zoom: DEFAULT_VIEW.zoom,
    })

    map.on('load', async () => {
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')
      map.addControl(new mapboxgl.FullscreenControl(), 'top-right')

      if (mapSupportsTerrain.value) {
        map.addSource('mapbox-dem', { type: 'raster-dem', url: 'mapbox://mapbox.mapbox-terrain-dem-v1', tileSize: 512, maxzoom: 14 })
        map.addSource('contours', { type: 'vector', url: 'mapbox://mapbox.mapbox-terrain-v2' })
        map.addLayer({
          id: 'contour-lines', type: 'line', source: 'contours', 'source-layer': 'contour',
          layout: { 'line-join': 'round', 'line-cap': 'round', visibility: 'none' },
          paint: { 'line-color': '#ff6b35', 'line-width': ['interpolate', ['linear'], ['zoom'], 10, 0.5, 14, 1.5], 'line-opacity': 0.8 },
          filter: ['==', ['get', 'index'], 1],
        })
        map.addLayer({
          id: 'contour-labels', type: 'symbol', source: 'contours', 'source-layer': 'contour',
          layout: {
            visibility: 'none', 'symbol-placement': 'line',
            'text-field': ['concat', ['to-string', ['get', 'ele']], 'm'],
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Regular'],
            'text-size': ['interpolate', ['linear'], ['zoom'], 10, 9, 14, 12],
            'text-offset': [0, -0.5], 'text-max-angle': 30, 'symbol-spacing': 300,
          },
          paint: { 'text-color': '#ff6b35', 'text-halo-color': 'rgba(255,255,255,0.85)', 'text-halo-width': 1.5 },
          filter: ['==', ['get', 'index'], 1],
        })
      }

      await loadRegionOutline()
      await loadOverviewLayer()
      if (regionBounds) map.fitBounds([[regionBounds[0], regionBounds[1]], [regionBounds[2], regionBounds[3]]], { padding: 60, duration: 0 })
      mapReady.value = true
    })

    map.on('error', async (err) => {
      const errorMessage = extractMapErrorMessage(err)
      if (isMapboxAuthError(err) && !hasRetriedWithOsmFallback) {
        hasRetriedWithOsmFallback = true
        mapError.value = null
        if (map) { map.remove(); map = null }
        await initMap(0)
        return
      }
      console.error('地圖錯誤:', err)
      mapError.value = `地圖錯誤: ${errorMessage}`
    })
  } catch (err) {
    console.error('地圖初始化錯誤:', err)
    mapError.value = `初始化錯誤: ${err.message}`
  }
}

onMounted(async () => {
  await loadMeta()
  await nextTick()
  initMap()
})

onUnmounted(() => {
  if (audioPlayer) { audioPlayer.pause(); audioPlayer = null }
  if (map) { map.remove(); map = null }
})
</script>

<style scoped>
.alsace-map-section {
  width: 100%;
  height: 100dvh;
  position: fixed;
  top: 0; left: 0; right: 0;
  overflow: hidden;
}
.map { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }

.mode-toggle-float {
  position: absolute;
  top: 64px; left: 50%; transform: translateX(-50%);
  z-index: 45;
  display: flex; gap: 6px;
  background: rgba(255,255,255,0.95);
  padding: 5px; border-radius: 20px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.15);
}
.mode-btn {
  padding: 6px 14px; border: none; border-radius: 16px;
  background: transparent; color: #4b5563;
  font-size: 0.78rem; font-weight: 700; cursor: pointer;
  transition: all 0.15s; white-space: nowrap;
}
.mode-btn.active { background: #1b4332; color: #fff; }
.mode-btn:hover:not(.active) { background: #f3f9f4; }

@media (max-width: 768px) {
  .mode-toggle-float { top: 12px; }
}

.map-error {
  position: absolute; bottom: 110px; left: 50%; transform: translateX(-50%);
  background: rgba(220, 38, 38, 0.95); color: #fff; padding: 10px 18px;
  border-radius: 10px; font-size: 0.85rem; z-index: 60; max-width: 80%;
  text-align: center;
}
.loading-overlay {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.3); z-index: 55; pointer-events: none;
}
.loading-spinner {
  width: 40px; height: 40px; border-radius: 50%;
  border: 4px solid #e6f4ea; border-top-color: #2d6a4f;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.rmap-action-btn {
  width: 34px; height: 34px; border: none; border-radius: 8px;
  background: rgba(0,0,0,0.08); cursor: pointer; display: flex; align-items: center; justify-content: center;
  font-size: 15px;
}
.rmap-action-btn:hover { background: rgba(0,0,0,0.16); }

.layer-panel-wrapper {
  position: absolute;
  bottom: 96px; left: 50%; transform: translateX(-50%);
  z-index: 50;
}
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.2s ease; }
.slide-up-enter-from, .slide-up-leave-to { opacity: 0; transform: translate(-50%, 12px); }
</style>
