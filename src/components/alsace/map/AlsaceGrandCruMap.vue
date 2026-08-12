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
          :climate-enabled="climateEnabled"
          :hide-soil="true"
          :brgm-available="true"
          :brgm-enabled="brgmEnabled"
          @toggle-3d="toggle3D"
          @toggle-contours="toggleContours"
          @toggle-climate="toggleClimate"
          @toggle-brgm="toggleBRGM(map)"
          @close="showLayerPanel = false"
        />
        <!-- BRGM 地質圖層控制列（啟用時顯示） -->
        <div v-if="brgmEnabled" class="brgm-inline-panel">
          <div class="brgm-inline-title">🗺️ BRGM 地質圖</div>
          <div class="brgm-inline-row">
            <span class="brgm-inline-lbl">透明度</span>
            <input class="brgm-inline-slider" type="range" min="0.05" max="0.85" step="0.05" v-model.number="brgmOpacity" @input="updateBRGMOpacity(map)">
            <span class="brgm-inline-pct">{{ Math.round(brgmOpacity * 100) }}%</span>
          </div>
          <div class="brgm-inline-footer">
            <span>© BRGM LITHO_1M (Etalab OL)</span>
            <span>請先選取地塊，再點擊地圖查看岩石資訊</span>
          </div>
        </div>
      </div>
    </transition>

    <!-- 氣候熱力（示範資料，需先選取一個地塊） -->
    <transition name="climate-slide">
      <div v-if="climateEnabled && climateData" class="climate-overlay">
        <div class="cy-indicator-tabs">
          <button
            v-for="ind in CLIMATE_INDICATORS" :key="ind.id"
            :class="['cy-ind-btn', { active: climateIndicator === ind.id }]"
            @click="setClimateIndicator(ind.id)"
          >{{ ind.icon }} {{ ind.label }}</button>
        </div>

        <div class="climate-header-row">
          <div class="cy-year-badge">
            <span class="cy-year">{{ climateYear }}</span>
            <span v-if="isWarmVintage" class="cy-golden">🌞 相對溫暖年份</span>
          </div>
          <div class="cy-stats">
            <div v-if="climateAocLabel" class="cy-aoc-name">{{ climateAocLabel }}</div>
            <span v-if="currentYearValue !== null" class="cy-temp">{{ currentYearValue }}{{ currentIndicatorConfig.unit }}</span>
            <span v-if="currentYearDelta !== null" class="cy-delta" :class="currentYearDelta > 0 ? 'cy-warm' : 'cy-cool'">
              {{ currentYearDelta > 0 ? '+' : '' }}{{ currentYearDelta }}{{ currentIndicatorConfig.unit }} vs 該地塊均值
            </span>
          </div>
          <button class="cy-close" title="關閉氣候圖層" @click="toggleClimate">✕</button>
        </div>

        <input
          class="climate-slider" type="range"
          v-model.number="climateYear"
          :min="climateYears[0]" :max="climateYears[climateYears.length - 1]" step="1"
          @input="onClimateYearChange"
        />
        <div class="climate-year-axis">
          <span>{{ climateYears[0] }}</span>
          <span>{{ climateYears[Math.floor(climateYears.length / 2)] }}</span>
          <span>{{ climateYears[climateYears.length - 1] }}</span>
        </div>

        <div class="climate-legend">
          <div :class="['legend-gradient', `legend-${climateIndicator}`]"></div>
          <div class="legend-labels">
            <span>{{ currentGlobalStats ? currentGlobalStats.min.toFixed(0) : '' }}{{ currentIndicatorConfig.unit }} {{ currentIndicatorConfig.lowLabel }}</span>
            <span>均值</span>
            <span>{{ currentIndicatorConfig.highLabel }} {{ currentGlobalStats ? currentGlobalStats.max.toFixed(0) : '' }}{{ currentIndicatorConfig.unit }}</span>
          </div>
        </div>
        <div class="climate-footnote">
          <template v-if="climateIsDemo">🧪 示範資料，依地塊 ID 演算生成，非阿爾薩斯官方實測氣象紀錄｜請先於「產區」清單選取一個地塊</template>
          <template v-else>📊 {{ currentIndicatorConfig.footnote }}</template>
        </div>
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
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as turf from '@turf/turf'
import {
  getMapboxToken,
  shouldUseMapbox,
  getOSMStyle,
  getMapboxStyleUrl
} from '@/utils/getMapboxToken'
import { useBRGMGeology, BRGM_POPUP_STYLES } from '@/composables/useBRGMGeology.js'
import {
  RegionMapHeader, RegionMapInfoPanel, RegionMapLayerPanel,
  RegionMapAppellationDrawer, RegionMapMobileToolbar
} from '../../shared/regionMap/index.js'

const emit = defineEmits(['request-learning-mode', 'go-to-lesson'])

const { brgmEnabled, brgmOpacity, toggleBRGM, resetBRGM, updateBRGMOpacity, updateBRGMClip } = useBRGMGeology('alsace')

// BRGM 開啟時，若已有選取地塊，立即套用裁切遮罩
watch(brgmEnabled, (enabled) => {
  if (!map) return
  if (!enabled) { updateBRGMClip(map, null); return }
  const src = map.getSource('highlight')
  if (src?._data) updateBRGMClip(map, src._data)
})

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

// 氣候熱力（優先載入 Open-Meteo 實測資料，失敗才退回示範資料）
const climateEnabled = ref(false)
const climateYear = ref(2012)
const climateData = ref(null)
const climateIsDemo = ref(false)
const climateStats = ref(null)
const climateStatsSun = ref(null)
const climateStatsRain = ref(null)
const climateYears = ref([])
const climateYearAvg = ref([])
const climateYearSun = ref([])
const climateYearRain = ref([])
const climateIndicator = ref('temp')

const CLIMATE_INDICATORS = [
  {
    id: 'temp', icon: '🌡', label: '夏季均溫', unit: '°C', lowLabel: '涼', highLabel: '熱',
    dataKey: 'temps', baselineKey: 'baseline',
    footnote: '指標：6–8 月日均溫平均值（夏季均溫）｜ 基準：1981–2010｜資料來源：Open-Meteo Historical Weather API',
  },
  {
    id: 'sun', icon: '☀️', label: '日照時數', unit: 'h', lowLabel: '少', highLabel: '多',
    dataKey: 'sun', baselineKey: 'baselineSun',
    footnote: '指標：6–8 月日照時數總和（小時）｜ 基準：1981–2010｜資料來源：Open-Meteo Historical Weather API',
  },
  {
    id: 'rain', icon: '🌧', label: '夏季降雨', unit: 'mm', lowLabel: '乾', highLabel: '濕',
    dataKey: 'rain', baselineKey: 'baselineRain',
    footnote: '指標：6–8 月降雨量總和（毫米）｜ 基準：1981–2010｜資料來源：Open-Meteo Historical Weather API',
  },
]

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

const currentIndicatorConfig = computed(() => CLIMATE_INDICATORS.find(i => i.id === climateIndicator.value))
const currentGlobalStats = computed(() => {
  if (climateIndicator.value === 'sun') return climateStatsSun.value
  if (climateIndicator.value === 'rain') return climateStatsRain.value
  return climateStats.value
})
const climateAocLabel = computed(() => activeInfo.value?.name || '')

const currentYearValue = computed(() => {
  if (!climateYears.value.length || !currentIndicatorConfig.value || !activeInfo.value) return null
  const idx = climateYears.value.indexOf(climateYear.value)
  if (idx < 0) return null
  const arr = climateData.value?.[activeInfo.value.id]?.[currentIndicatorConfig.value.dataKey]
  if (!Array.isArray(arr) || arr[idx] == null) return null
  return Number(arr[idx].toFixed(climateIndicator.value === 'temp' ? 1 : 0))
})

const currentYearDelta = computed(() => {
  if (!activeInfo.value || !climateYears.value.length || !currentIndicatorConfig.value) return null
  const idx = climateYears.value.indexOf(climateYear.value)
  if (idx < 0) return null
  const cfg = currentIndicatorConfig.value
  const d = climateData.value?.[activeInfo.value.id]
  const arr = d?.[cfg.dataKey]
  const baseline = d?.[cfg.baselineKey]
  if (!Array.isArray(arr) || arr[idx] == null || !Number.isFinite(baseline)) return null
  const digits = climateIndicator.value === 'temp' ? 2 : 0
  return Number((arr[idx] - baseline).toFixed(digits))
})

const isWarmVintage = computed(() => {
  if (!activeInfo.value || climateIndicator.value !== 'temp') return false
  const arr = climateData.value?.[activeInfo.value.id]?.temps
  const idx = climateYears.value.indexOf(climateYear.value)
  if (!Array.isArray(arr) || idx < 0) return false
  const sorted = [...arr].sort((a, b) => b - a)
  return sorted.slice(0, Math.max(1, Math.round(arr.length * 0.2))).includes(arr[idx])
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
  updateBRGMClip(map, null)
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
  if (climateEnabled.value) applyClimateColor(climateYear.value)
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
    if (brgmEnabled.value) updateBRGMClip(map, geojson)

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
  updateBRGMClip(map, null)
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

// ── 氣候熱力（示範資料，依地塊 id 演算生成，非官方實測紀錄）──────
function createDemoClimatePayload(items) {
  const years = Array.from({ length: 25 }, (_, i) => 2000 + i)
  const aocs = {}
  const allTemps = [], allSun = [], allRain = []

  for (const item of items) {
    let seed = 0
    for (const ch of item.id) seed += ch.charCodeAt(0)

    // 阿爾薩斯夏季（6-8月）氣候基準：均溫約 19.5°C、日照約 620h、降雨約 165mm
    const tempBaseline = 19.5 + (seed % 50) * 0.05
    const seasonalAmp = 0.4 + (seed % 10) * 0.03
    const trend = 0.018 + (seed % 3) * 0.004
    const sunBaseline = 620 + (seed % 90)
    const rainBaseline = 165 + (seed % 70)

    const temps = years.map((year, idx) => {
      const val = Number((tempBaseline + Math.sin((idx + seed % 7) * 0.55) * seasonalAmp + (year - years[0]) * trend).toFixed(2))
      allTemps.push(val)
      return val
    })
    const sun = years.map((_, idx) => {
      const val = Number((sunBaseline + Math.sin((idx + seed % 5) * 0.5) * 30).toFixed(1))
      allSun.push(val)
      return val
    })
    const rain = years.map((_, idx) => {
      const val = Number((rainBaseline + Math.cos((idx + seed % 6) * 0.52) * 24).toFixed(1))
      allRain.push(val)
      return val
    })

    aocs[item.id] = {
      temps, sun, rain,
      baseline: Number((temps.reduce((s, v) => s + v, 0) / temps.length).toFixed(2)),
      baselineSun: Number((sun.reduce((s, v) => s + v, 0) / sun.length).toFixed(1)),
      baselineRain: Number((rain.reduce((s, v) => s + v, 0) / rain.length).toFixed(1)),
    }
  }

  const stats = (arr) => ({ min: Number(Math.min(...arr).toFixed(2)), max: Number(Math.max(...arr).toFixed(2)), mean: Number((arr.reduce((s, v) => s + v, 0) / arr.length).toFixed(2)) })
  return {
    aocs,
    global: stats(allTemps),
    globalSun: stats(allSun),
    globalRain: stats(allRain),
    meta: { years },
  }
}

async function loadClimateData() {
  if (climateData.value && climateYears.value.length) return

  const applyPayload = (payload, isDemo) => {
    climateData.value = payload.aocs || {}
    climateStats.value = payload.global || null
    climateStatsSun.value = payload.globalSun || null
    climateStatsRain.value = payload.globalRain || null
    climateYears.value = payload.meta?.years || []
    climateYearAvg.value = payload.meta?.yearAvg || []
    climateYearSun.value = payload.meta?.yearSunAvg || []
    climateYearRain.value = payload.meta?.yearRainAvg || []
    climateIsDemo.value = isDemo
    if (climateYears.value.length) {
      climateYear.value = climateYears.value.includes(2012) ? 2012 : climateYears.value[0]
    }
  }

  try {
    const res = await fetch('/data/alsace-climate.json')
    if (res.ok) {
      const json = await res.json()
      applyPayload(json, false)
      return
    }
  } catch (error) {
    console.warn('[AlsaceGrandCruMap] 無法載入 alsace-climate.json，改用示範資料。', error)
  }

  const demo = createDemoClimatePayload(metaList.value.filter(m => GEOLOGY_ORDER.includes(m.folder)))
  applyPayload(demo, true)
}

function valueToClimateColor(v, indicator = climateIndicator.value) {
  let stats, stops
  if (indicator === 'sun') {
    stats = climateStatsSun.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [[min, [120, 81, 169]], [mean, [171, 217, 233]], [mean + 20, [254, 224, 72]], [max, [253, 141, 60]]]
  } else if (indicator === 'rain') {
    stats = climateStatsRain.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [[min, [253, 141, 60]], [mean, [255, 255, 191]], [mean + 15, [74, 144, 226]], [max, [44, 62, 160]]]
  } else {
    stats = climateStats.value
    if (!stats) return '#ffffbf'
    const { min, max, mean } = stats
    stops = [[min, [69, 117, 180]], [mean - 1, [171, 217, 233]], [mean, [255, 255, 191]], [mean + 1.5, [252, 141, 89]], [max, [215, 48, 39]]]
  }
  const { min, max } = stats
  const t = Math.max(min, Math.min(max, v))
  for (let i = 0; i < stops.length - 1; i++) {
    const [t0, c0] = stops[i]
    const [t1, c1] = stops[i + 1]
    if (t <= t1) {
      const f = (t - t0) / Math.max(t1 - t0, 0.0001)
      const r = Math.round(c0[0] + f * (c1[0] - c0[0]))
      const g = Math.round(c0[1] + f * (c1[1] - c0[1]))
      const b = Math.round(c0[2] + f * (c1[2] - c0[2]))
      return `rgb(${r},${g},${b})`
    }
  }
  const last = stops[stops.length - 1][1]
  return `rgb(${last[0]},${last[1]},${last[2]})`
}

function applyClimateColor(year) {
  if (!map || !climateEnabled.value || !climateData.value || !climateYears.value.length || !currentIndicatorConfig.value) return
  if (!map.getLayer('highlight-fill') || !activeInfo.value) return
  const idx = climateYears.value.indexOf(year)
  if (idx < 0) return
  const cfg = currentIndicatorConfig.value
  const arr = climateData.value[activeInfo.value.id]?.[cfg.dataKey]
  const value = Array.isArray(arr) && idx < arr.length ? Number(arr[idx]) : null
  const color = Number.isFinite(value) ? valueToClimateColor(value, cfg.id) : '#f0f0f0'
  map.setPaintProperty('highlight-fill', 'fill-color', color)
  map.setPaintProperty('highlight-fill', 'fill-opacity', Number.isFinite(value) ? 0.72 : 0.2)
}

function resetClimateFill() {
  if (!map || !map.getLayer('highlight-fill')) return
  map.setPaintProperty('highlight-fill', 'fill-color', '#ffd700')
  map.setPaintProperty('highlight-fill', 'fill-opacity', 0.55)
}

function setClimateIndicator(id) {
  climateIndicator.value = id
  applyClimateColor(climateYear.value)
}

function onClimateYearChange() {
  applyClimateColor(climateYear.value)
}

async function toggleClimate() {
  if (!map) return
  if (!climateEnabled.value) {
    try {
      await loadClimateData()
      climateEnabled.value = true
      applyClimateColor(climateYear.value)
      mapError.value = null
      infoCollapsed.value = true
    } catch (err) {
      mapError.value = `氣候資料載入失敗: ${err.message}`
      climateEnabled.value = false
    }
    return
  }
  climateEnabled.value = false
  resetClimateFill()
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
  if (!document.getElementById('brgm-popup-styles')) {
    const style = document.createElement('style')
    style.id = 'brgm-popup-styles'
    style.textContent = BRGM_POPUP_STYLES
    document.head.appendChild(style)
  }
  await loadMeta()
  await nextTick()
  initMap()
})

onUnmounted(() => {
  resetBRGM(map)
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

/* ── 氣候熱力 ── */
.climate-overlay {
  position: absolute;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  left: 20px;
  width: min(380px, calc(100vw - 44px));
  background: rgba(20, 30, 48, 0.93);
  backdrop-filter: blur(16px);
  border-radius: 16px;
  box-shadow: 0 6px 28px rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.12);
  z-index: 50;
  padding: 14px 16px 12px;
  color: #e8eaf6;
}
.cy-indicator-tabs { display: flex; gap: 6px; margin-bottom: 10px; }
.cy-ind-btn {
  flex: 1; font-size: 0.72rem; padding: 5px 4px; border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.07);
  color: rgba(230,230,255,0.7); cursor: pointer; transition: background 0.2s, color 0.2s; text-align: center;
}
.cy-ind-btn.active { background: #2d6a4f; border-color: #52b788; color: #fff; font-weight: 700; }
.cy-ind-btn:not(.active):hover { background: rgba(255,255,255,0.14); color: #fff; }
.climate-header-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.cy-year-badge { display: flex; align-items: baseline; gap: 6px; }
.cy-year { font-size: 1.5rem; font-weight: 700; color: #9fd8bb; line-height: 1; }
.cy-golden { font-size: 0.7rem; color: #c9a227; font-weight: 600; white-space: nowrap; }
.cy-stats { flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: flex-end; }
.cy-aoc-name { font-size: 0.72rem; color: rgba(200,230,210,0.85); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 170px; }
.cy-temp { font-size: 1.02rem; font-weight: 700; color: #f8fbff; }
.cy-delta { font-size: 0.72rem; font-weight: 600; padding: 1px 6px; border-radius: 999px; margin-top: 2px; }
.cy-warm { background: rgba(215, 48, 39, 0.22); color: #ffc2bb; }
.cy-cool { background: rgba(69, 117, 180, 0.28); color: #b8d7ff; }
.cy-close {
  width: 26px; height: 26px; border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.6); cursor: pointer; font-size: 0.8rem;
  display: flex; align-items: center; justify-content: center; transition: background 0.2s; flex-shrink: 0;
}
.cy-close:hover { background: rgba(255,255,255,0.2); color: #fff; }
.climate-slider { width: 100%; height: 4px; border-radius: 2px; accent-color: #2d6a4f; cursor: pointer; margin-bottom: 2px; }
.climate-year-axis { display: flex; justify-content: space-between; font-size: 0.65rem; color: rgba(200,220,210,0.55); margin-bottom: 10px; padding: 0 2px; }
.climate-legend { margin-bottom: 6px; }
.legend-gradient { height: 8px; border-radius: 4px; width: 100%; }
.legend-gradient.legend-temp { background: linear-gradient(to right, #4575b4, #ffffbf, #d73027); }
.legend-gradient.legend-sun  { background: linear-gradient(to right, #7851a9, #ffffbf, #fd8d3c); }
.legend-gradient.legend-rain { background: linear-gradient(to right, #fd8d3c, #ffffbf, #2c3ea0); }
.legend-labels { display: flex; justify-content: space-between; font-size: 0.63rem; color: rgba(200,220,210,0.6); margin-top: 3px; }
.climate-footnote { font-size: 0.63rem; color: rgba(180,210,200,0.55); margin-top: 4px; line-height: 1.4; }
.climate-slide-enter-active, .climate-slide-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.climate-slide-enter-from, .climate-slide-leave-to { opacity: 0; transform: translateY(12px); }

@media (max-width: 768px) {
  .climate-overlay { left: 8px; width: calc(100vw - 16px); }
}

/* ── BRGM 地質圖層內嵌控制列（圖層面板下方） ── */
.brgm-inline-panel {
  background: rgba(255,255,255,0.97);
  border-top: 1px solid #eee;
  border-radius: 0 0 16px 16px;
  padding: 10px 14px;
  width: min(320px, calc(100vw - 32px));
}
.brgm-inline-title { font-size: 13px; font-weight: 700; color: #666; margin-bottom: 10px; }
.brgm-inline-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.brgm-inline-lbl { font-size: 12px; color: #666; white-space: nowrap; }
.brgm-inline-slider { flex: 1; height: 4px; accent-color: #2d6a4f; }
.brgm-inline-pct { font-size: 12px; color: #888; min-width: 32px; text-align: right; }
.brgm-inline-footer {
  display: flex; flex-direction: column; gap: 2px;
  font-size: 10px; color: #aaa;
  border-top: 1px solid #f0f0f0; padding-top: 6px;
}
</style>
