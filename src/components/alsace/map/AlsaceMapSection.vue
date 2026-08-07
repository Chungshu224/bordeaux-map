<template>
  <section class="map-section">
    <RegionMapHeader
      regionName="阿爾薩斯"
      title="阿爾薩斯 Grand Cru 探索地圖"
      icon="🍇"
      @back="emit('request-learning-mode')"
    />

    <RegionMapInfoPanel
      v-if="props.activeAOC?.aoc"
      :info="unifiedInfo"
      theme-color="#2d6a4f"
      :audio-available="false"
      :is-playing-audio="false"
      :collapsed="isInfoCollapsed"
      @toggle-collapse="isInfoCollapsed = !isInfoCollapsed"
      @play-audio="() => {}"
      @reset="resetMap"
    >
      <template #extra-actions>
        <button
          v-if="props.regionInfo?.lessonId"
          class="rmap-action-btn"
          title="前往對應課程"
          @click="emit('go-to-lesson', props.regionInfo.lessonId)"
        >
          <span class="rmap-btn-icon">🎓</span>
        </button>
      </template>
    </RegionMapInfoPanel>

    <RegionMapMobileToolbar
      v-if="isMobileView"
      :aoc-open="mobileAOCListOpen"
      :layer-open="false"
      :is3D="false"
      :info-open="!!props.activeAOC?.aoc && !isInfoCollapsed"
      @action="handleMobileAction"
    />

    <div ref="mapContainer" class="map"></div>
    <div v-if="mapError" class="map-error">{{ mapError }}</div>
    <div v-if="isLoading" class="loading-overlay"><div class="loading-spinner"></div></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
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
  RegionMapHeader, RegionMapInfoPanel, RegionMapMobileToolbar
} from '../../shared/regionMap/index.js'

const props = defineProps({
  activeAOC: Object,
  regionInfo: Object,
  mode: { type: String, default: 'geology' },
  indexPath: { type: String, default: '/alsace/geojson/index.json' },
  mobileAOCListOpen: { type: Boolean, default: false }
})

const emit = defineEmits(['resetMap', 'reselect-aoc', 'request-aoc-list', 'request-learning-mode', 'go-to-lesson'])

const REAL_MOBILE_MAX_WIDTH = 768
const isMobileView = ref(typeof window !== 'undefined' && window.innerWidth <= REAL_MOBILE_MAX_WIDTH)
function checkMobile() {
  isMobileView.value = typeof window !== 'undefined' && window.innerWidth <= REAL_MOBILE_MAX_WIDTH
}

const mapContainer = ref(null)
let map = null
const isLoading = ref(false)
const mapError = ref(null)
const isInfoCollapsed = ref(false)
const geojsonCache = new Map()
let hasRetriedWithOsmFallback = false

const ALL_GEOJSON_PATH = '/alsace/geojson/all-grand-crus.geojson'
const GENERAL_GEOJSON_PATH = '/alsace/geojson/hierarchy-general.geojson'
const DENOMINATIONS_GEOJSON_PATH = '/alsace/geojson/hierarchy-denominations.geojson'

const DEFAULT_VIEW = { center: [7.36, 48.15], zoom: 9.3 }

function findGeojsonPathInIndex(indexObj, group, filename) {
  const region = indexObj[group]
  if (region?.files?.includes(filename)) {
    const folder = group.split('｜')[0]
    return `/alsace/geojson/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`
  }
  return null
}

async function fetchJson(path) {
  if (geojsonCache.has(path)) return geojsonCache.get(path)
  const res = await fetch(path)
  if (!res.ok) throw new Error(`無法載入資料 (${res.status})：${path}`)
  const data = await res.json()
  geojsonCache.set(path, data)
  return data
}

const OVERVIEW_LAYER_IDS = [
  'general-fill', 'general-outline',
  'denom-fill', 'denom-outline',
  'overview-fill', 'overview-outline',
]
const OVERVIEW_SOURCE_IDS = ['general', 'denom', 'overview']

function removeOverviewLayers() {
  if (!map) return
  for (const id of OVERVIEW_LAYER_IDS) if (map.getLayer(id)) map.removeLayer(id)
  for (const id of OVERVIEW_SOURCE_IDS) if (map.getSource(id)) map.removeSource(id)
}

function clickToSelect(id) {
  fetchJson(props.indexPath).then((idx) => {
    for (const groupName of Object.keys(idx)) {
      const match = idx[groupName].files.find(f => f.replace('.geojson', '') === id)
      if (match) {
        emit('reselect-aoc', { group: groupName, aoc: match })
        return
      }
    }
  })
}

// 事件監聽器只綁定一次（用穩定的函式參照），避免每次切換模式時 addLayer 重建
// 圖層後重複呼叫 map.on(...) 造成監聽器疊加
const clickableLayerIds = ['denom-fill', 'overview-fill']
const attachedListenerIds = new Set()
function attachInteractionsOnce() {
  if (!map) return
  for (const id of clickableLayerIds) {
    if (attachedListenerIds.has(id)) continue
    map.on('click', id, (e) => { const f = e.features?.[0]; if (f) clickToSelect(f.properties?.id) })
    map.on('mouseenter', id, () => { map.getCanvas().style.cursor = 'pointer' })
    map.on('mouseleave', id, () => { map.getCanvas().style.cursor = '' })
    attachedListenerIds.add(id)
  }
}

async function loadOverviewLayer() {
  if (!map) return
  removeOverviewLayers()

  if (props.mode === 'hierarchy') {
    const [general, denom, grandCru] = await Promise.all([
      fetchJson(GENERAL_GEOJSON_PATH),
      fetchJson(DENOMINATIONS_GEOJSON_PATH),
      fetchJson(ALL_GEOJSON_PATH),
    ])

    // 底層：AOC Alsace 基礎產區（僅外框，避免疊加過暗）
    map.addSource('general', { type: 'geojson', data: general })
    map.addLayer({ id: 'general-outline', type: 'line', source: 'general', paint: { 'line-color': '#7fb3d5', 'line-width': 2, 'line-dasharray': [2, 1.5] } })

    // 中層：13 個補充地理標示
    map.addSource('denom', { type: 'geojson', data: denom })
    map.addLayer({ id: 'denom-fill', type: 'fill', source: 'denom', paint: { 'fill-color': '#16a085', 'fill-opacity': 0.35 } })
    map.addLayer({ id: 'denom-outline', type: 'line', source: 'denom', paint: { 'line-color': '#fff', 'line-width': 1 } })

    // 頂層：51 個 Grand Cru（依地質族群上色）
    map.addSource('overview', { type: 'geojson', data: grandCru })
    map.addLayer({ id: 'overview-fill', type: 'fill', source: 'overview', paint: { 'fill-color': ['get', 'familyColor'], 'fill-opacity': 0.75 } })
    map.addLayer({ id: 'overview-outline', type: 'line', source: 'overview', paint: { 'line-color': '#fff', 'line-width': 1 } })

    attachInteractionsOnce()

    const bbox = turf.bbox(general)
    map.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: 40, duration: 0 })
    return
  }

  // 'geology' 模式：只顯示 51 個 Grand Cru，依地質族群上色
  const geojson = await fetchJson(ALL_GEOJSON_PATH)
  map.addSource('overview', { type: 'geojson', data: geojson })
  map.addLayer({
    id: 'overview-fill',
    type: 'fill',
    source: 'overview',
    paint: {
      'fill-color': ['get', 'familyColor'],
      'fill-opacity': 0.45
    }
  })
  map.addLayer({
    id: 'overview-outline',
    type: 'line',
    source: 'overview',
    paint: { 'line-color': '#fff', 'line-width': 1 }
  })

  attachInteractionsOnce()

  const bbox = turf.bbox(geojson)
  map.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: 40, duration: 0 })
}

async function showAOCGeojson(group, aocFile) {
  if (!map) return
  isLoading.value = true
  mapError.value = null
  try {
    const idx = await fetchJson(props.indexPath)
    const path = findGeojsonPathInIndex(idx, group, aocFile)
    if (!path) throw new Error(`找不到檔案: ${aocFile}`)
    const geojson = await fetchJson(path)

    if (map.getLayer('aoc-fill')) map.removeLayer('aoc-fill')
    if (map.getLayer('aoc-outline')) map.removeLayer('aoc-outline')
    if (map.getSource('aoc')) map.removeSource('aoc')

    map.addSource('aoc', { type: 'geojson', data: geojson })
    map.addLayer({
      id: 'aoc-fill',
      type: 'fill',
      source: 'aoc',
      paint: { 'fill-color': '#ffd700', 'fill-opacity': 0.55 }
    })
    map.addLayer({
      id: 'aoc-outline',
      type: 'line',
      source: 'aoc',
      paint: { 'line-color': '#fff', 'line-width': 3 }
    })

    const bbox = turf.bbox(geojson)
    map.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: 80, duration: 800 })
  } catch (err) {
    console.error('載入 geojson 失敗:', err)
    mapError.value = `載入 geojson 失敗: ${err.message}`
  } finally {
    isLoading.value = false
  }
}

async function resetMap() {
  if (map?.getLayer('aoc-fill')) map.removeLayer('aoc-fill')
  if (map?.getLayer('aoc-outline')) map.removeLayer('aoc-outline')
  if (map?.getSource('aoc')) map.removeSource('aoc')
  isInfoCollapsed.value = false
  if (map) map.easeTo({ center: DEFAULT_VIEW.center, zoom: DEFAULT_VIEW.zoom, duration: 800 })
  emit('resetMap')
}

function handleMobileAction(action) {
  if (action === 'aoc') emit('request-aoc-list', !props.mobileAOCListOpen)
  if (action === 'info') isInfoCollapsed.value = !isInfoCollapsed.value
}

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

    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: chosenStyle,
      center: DEFAULT_VIEW.center,
      zoom: DEFAULT_VIEW.zoom
    })

    map.on('load', async () => {
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')
      map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
      await loadOverviewLayer()
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

const unifiedInfo = computed(() => {
  const aoc = props.activeAOC
  if (!aoc?.aoc) return null
  const r = props.regionInfo
  if (!r) return { name: aoc.aoc.replace('.geojson', '').replace(/-/g, ' '), description: '' }
  const meta = []
  if (r.commune) meta.push({ label: '村莊', value: r.commune })
  if (r.area) meta.push({ label: '面積', value: r.area })
  return {
    name: r.name || aoc.aoc.replace('.geojson', '').replace(/-/g, ' '),
    originalName: r.fullName,
    badges: r.family ? [{ label: r.family }] : [],
    meta,
    grapes: r.grapes || [],
    soil: r.soil || '',
    description: r.description || '',
  }
})

watch(() => props.mode, async () => {
  if (map?.getLayer('aoc-fill')) map.removeLayer('aoc-fill')
  if (map?.getLayer('aoc-outline')) map.removeLayer('aoc-outline')
  if (map?.getSource('aoc')) map.removeSource('aoc')
  await loadOverviewLayer()
})

watch(() => props.activeAOC, (newAOC, oldAOC) => {
  if (newAOC?.aoc) {
    if (newAOC.aoc !== oldAOC?.aoc) showAOCGeojson(newAOC.group, newAOC.aoc)
  } else if (map?.getLayer('aoc-fill')) {
    map.removeLayer('aoc-fill')
    map.removeLayer('aoc-outline')
    map.removeSource('aoc')
    map.flyTo({ center: DEFAULT_VIEW.center, zoom: DEFAULT_VIEW.zoom })
  }
}, { deep: true })

onMounted(async () => {
  window.addEventListener('resize', checkMobile)
  await initMap()
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  if (map) { map.remove(); map = null }
})

defineExpose({ showAOCGeojson })
</script>

<style scoped>
.map-section { flex: 1; position: relative; height: 100%; overflow: hidden; }
@media (max-width: 768px) {
  .map-section { height: 100dvh; min-height: 100svh; overscroll-behavior: none; }
}
.map { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
.map-error {
  position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
  background: rgba(220, 38, 38, 0.95); color: #fff; padding: 10px 18px;
  border-radius: 10px; font-size: 0.85rem; z-index: 60; max-width: 80%;
}
.loading-overlay {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.4); z-index: 55;
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
</style>
