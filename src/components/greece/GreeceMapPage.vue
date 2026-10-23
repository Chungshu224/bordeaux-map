<template>
  <div class="main-layout">
    <section class="map-section">
      <RegionMapHeader
        regionName="希臘"
        title="🇬🇷 希臘葡萄酒產區地圖（33 PDO＋PGI 參考點）"
        icon="🇬🇷"
        @back="emits('back-to-course')"
      />

      <RegionMapInfoPanel
        v-if="mapReady"
        :info="unifiedInfo"
        :theme-color="activeColor"
        :audio-available="false"
        :collapsed="infoBarCollapsed"
        @toggle-collapse="infoBarCollapsed = !infoBarCollapsed"
        @reset="resetMap"
      />

      <div ref="mapContainer" class="map"></div>

      <div v-if="mapReady && !activeFeature && !activePgi" class="gr-legend">
        <div v-for="g in GROUPS" :key="g.key" class="gr-legend-item">
          <span class="gr-legend-dot" :style="{ background: g.color }"></span>
          {{ g.label }}（{{ countByGroup[g.key] || 0 }}）
        </div>
        <label class="gr-legend-toggle">
          <input type="checkbox" v-model="showPgi" @change="togglePgi" />
          <span class="gr-pgi-dot"></span> PGI 參考點（{{ PGI_REF.length }}）
        </label>
        <div class="gr-legend-hint">點擊產區查看資訊；PDO 邊界為歐盟官方資料（CC0）。PGI 僅為示意位置，非官方邊界；完整 114 個 PGI 請查 eAmbrosia。</div>
        <div class="gr-legend-hint">{{ PGI_RULES }}</div>
      </div>

      <div v-if="showLayerPanel" class="layer-panel-wrapper">
        <RegionMapLayerPanel
          :is3D="is3D"
          :show-contours="contoursEnabled"
          :hide-climate="true"
          :hide-soil="true"
          @toggle-3d="toggle3D"
          @toggle-contours="toggleContours"
          @close="showLayerPanel = false"
        />
      </div>

      <RegionMapMobileToolbar
        v-if="mapReady"
        :aoc-open="drawerOpen"
        :layer-open="showLayerPanel"
        :is3D="is3D"
        :info-open="!!(activeFeature || activePgi) && !infoBarCollapsed"
        @action="handleMobileAction"
      />

      <div v-if="mapError" class="map-error">{{ mapError }}</div>
    </section>

    <RegionMapAppellationDrawer
      v-model:open="drawerOpen"
      region-name="希臘"
      :grouped="groupedDrawer"
      :search="search"
      :active-id="activePgi ? activePgi.id : (activeFeature ? activeFeature.id : '')"
      @update:search="search = $event"
      @select="onDrawerSelect"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import {
  RegionMapHeader, RegionMapLayerPanel, RegionMapInfoPanel,
  RegionMapAppellationDrawer, RegionMapMobileToolbar
} from '../shared/regionMap/index.js'
import { globalGreeceAchievementManager } from '../../stores/greeceAchievementSystem.js'
import { PGI_REF, PGI_RULES } from '../../data/greece/pgiRef.js'

const props = defineProps({ initialRegion: { type: Object, default: null } })
const emits = defineEmits(['back-to-course'])

// 教學用六大地理區（非官方行政區）；顏色與 PDO 數量與 Level 1 一致
const GROUPS = [
  { key: 'macedonia',       label: '馬其頓',           color: '#B23A48' },
  { key: 'epirus_thessaly', label: '伊庇魯斯與色薩利', color: '#6A4C93' },
  { key: 'peloponnese',     label: '伯羅奔尼撒',       color: '#2E7D32' },
  { key: 'ionian',          label: '愛奧尼亞群島',     color: '#0097A7' },
  { key: 'aegean',          label: '愛琴海島嶼',       color: '#0D5EAF' },
  { key: 'crete',           label: '克里特',           color: '#B8902A' }
]
const GROUP_BY_KEY = Object.fromEntries(GROUPS.map(g => [g.key, g]))
const HOME_BOUNDS = [[19.3, 34.7], [28.4, 41.2]]

const mapContainer = ref(null)
const mapReady = ref(false)
const mapError = ref(null)
const is3D = ref(false)
const contoursEnabled = ref(false)
const infoBarCollapsed = ref(true)
const drawerOpen = ref(false)
const showLayerPanel = ref(false)
const search = ref('')
const features = ref([])
const activeFeature = ref(null)
const activePgi = ref(null)
const showPgi = ref(true)
let map = null
let contoursInitialized = false

const countByGroup = computed(() => {
  const m = {}
  for (const f of features.value) m[f.properties.group] = (m[f.properties.group] || 0) + 1
  return m
})

const activeColor = computed(() =>
  activePgi.value ? '#E07B00' :
  activeFeature.value ? GROUP_BY_KEY[activeFeature.value.group]?.color || '#0D5EAF' : '#0D5EAF')

// 範圍完全相同的 PDO（如 Lemnos 與 Muscat of Lemnos）
function coLocated(f) {
  return features.value
    .map(x => x.properties)
    .filter(p => p.id !== f.id && p.area_km2 === f.area_km2 && p.group === f.group)
}

const unifiedInfo = computed(() => {
  const g = activePgi.value
  if (g) {
    return {
      name: `PGI ${g.name}`,
      originalName: `ΠΓΕ ${g.name_el}`,
      badges: [{ label: 'PGI' }, ...(g.level ? [{ label: g.level }] : [])],
      meta: [
        { label: '地區', value: g.region },
        { label: '位置', value: '示意點，非官方邊界' }
      ],
      grapes: g.grapes || [],
      description: `${g.notes} ${PGI_RULES}`
    }
  }
  const f = activeFeature.value
  if (!f) return null
  const others = coLocated(f)
  let description = f.notes || ''
  if (others.length) description += ` 同一範圍另有：${others.map(o => o.name).join('、')}。`
  return {
    name: f.name,
    originalName: f.name_el,
    badges: [{ label: 'PDO' }, ...(f.styles || []).map(s => ({ label: s }))],
    meta: [
      { label: '地理區', value: GROUP_BY_KEY[f.group]?.label || '' },
      { label: '登記', value: f.registered },
      { label: '範圍面積', value: `約 ${f.area_km2.toLocaleString()} km²` }
    ],
    grapes: f.grapes || [],
    description
  }
})

const groupedDrawer = computed(() => {
  const q = search.value.trim().toLowerCase()
  const pgiItems = PGI_REF
    .filter(p => !q || p.name.toLowerCase().includes(q) || p.name_el.toLowerCase().includes(q))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(p => ({ id: p.id, name: `PGI ${p.name}`, type: 'PGI', styles: [] }))
  const pdoGroups = GROUPS.map(g => ({
    key: g.key,
    label: g.label,
    items: features.value
      .map(x => x.properties)
      .filter(p => p.group === g.key)
      .filter(p => !q || p.name.toLowerCase().includes(q) || (p.name_el || '').toLowerCase().includes(q))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(p => ({ id: p.id, name: p.name, type: g.key, styles: p.styles || [] }))
  })).filter(g => g.items.length)
  return pgiItems.length
    ? [...pdoGroups, { key: 'pgi', label: 'PGI 參考點（示意位置）', items: pgiItems }]
    : pdoGroups
})

function bboxOf(feature) {
  let minX = 180, minY = 90, maxX = -180, maxY = -90
  const walk = c => {
    if (typeof c[0] === 'number') {
      minX = Math.min(minX, c[0]); maxX = Math.max(maxX, c[0])
      minY = Math.min(minY, c[1]); maxY = Math.max(maxY, c[1])
    } else c.forEach(walk)
  }
  walk(feature.geometry.coordinates)
  return [[minX, minY], [maxX, maxY]]
}

function selectPgi(id, fly = true) {
  const g = PGI_REF.find(p => p.id === id)
  if (!g) return
  activeFeature.value = null
  activePgi.value = g
  infoBarCollapsed.value = false
  if (!map) return
  applyHighlight()
  if (fly) map.flyTo({ center: g.lngLat, zoom: Math.max(map.getZoom(), 8.5), duration: 900 })
}

function selectById(id, fly = true) {
  if (String(id).startsWith('PGI-')) return selectPgi(id, fly)
  activePgi.value = null
  const feat = features.value.find(f => f.properties.id === id)
  if (!feat) return
  activeFeature.value = feat.properties
  infoBarCollapsed.value = false
  globalGreeceAchievementManager.recordRegionExplored(feat.properties.id, feat.properties.group)
  if (!map) return
  applyHighlight()
  if (fly) map.fitBounds(bboxOf(feat), { padding: 70, duration: 900, maxZoom: 11 })
}

function onDrawerSelect(item) {
  selectById(item.id)
  drawerOpen.value = false
}

function applyHighlight() {
  if (!map || !map.getLayer('gr-fill')) return
  const id = activeFeature.value?.id
  map.setPaintProperty('gr-fill', 'fill-opacity', id
    ? ['case', ['==', ['get', 'id'], id], 0.6, 0.12]
    : 0.42)
  map.setPaintProperty('gr-outline', 'line-width', id
    ? ['case', ['==', ['get', 'id'], id], 3, 1]
    : 1.5)
}

function resetMap() {
  activeFeature.value = null
  activePgi.value = null
  infoBarCollapsed.value = true
  drawerOpen.value = false
  is3D.value = false
  if (!map) return
  applyHighlight()
  map.easeTo({ pitch: 0, bearing: 0, duration: 500 })
  map.fitBounds(HOME_BOUNDS, { padding: 30, duration: 900 })
}

function toggle3D() {
  is3D.value = !is3D.value
  if (map) map.easeTo({ pitch: is3D.value ? 55 : 0, duration: 800 })
}

function initContourLayers() {
  if (contoursInitialized || !map) return
  contoursInitialized = true
  map.addSource('gr-contours', { type: 'vector', url: 'mapbox://mapbox.mapbox-terrain-v2' })
  map.addLayer({
    id: 'gr-contours-line', type: 'line', source: 'gr-contours', 'source-layer': 'contour',
    layout: { 'line-join': 'round', 'line-cap': 'round', visibility: 'none' },
    paint: {
      'line-color': ['case', ['==', ['%', ['to-number', ['get', 'ele']], 100], 0], '#FFD700', '#FF9955'],
      'line-width': ['interpolate', ['linear'], ['zoom'], 9, 0.4, 13, 1.2, 16, 2],
      'line-opacity': ['interpolate', ['linear'], ['zoom'], 9, 0.4, 13, 0.8]
    },
    minzoom: 9
  })
  map.addLayer({
    id: 'gr-contour-labels', type: 'symbol', source: 'gr-contours', 'source-layer': 'contour',
    layout: {
      'symbol-placement': 'line',
      'text-field': ['concat', ['to-string', ['get', 'ele']], 'm'],
      'text-size': 11, 'text-padding': 25, visibility: 'none'
    },
    paint: { 'text-color': '#FFD700', 'text-halo-color': 'rgba(0,0,0,0.8)', 'text-halo-width': 2 },
    filter: ['==', ['%', ['to-number', ['get', 'ele']], 100], 0],
    minzoom: 10
  })
}

function toggleContours() {
  if (!map) return
  contoursEnabled.value = !contoursEnabled.value
  if (contoursEnabled.value) initContourLayers()
  const vis = contoursEnabled.value ? 'visible' : 'none'
  for (const id of ['gr-contours-line', 'gr-contour-labels']) {
    if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', vis)
  }
}

function handleMobileAction(action) {
  if (action === 'aoc') { drawerOpen.value = !drawerOpen.value; showLayerPanel.value = false }
  else if (action === 'layer') { showLayerPanel.value = !showLayerPanel.value; drawerOpen.value = false }
  else if (action === '3d') toggle3D()
  else if (action === 'info') infoBarCollapsed.value = !infoBarCollapsed.value
}

function togglePgi() {
  if (!map) return
  const vis = showPgi.value ? 'visible' : 'none'
  for (const id of ['gr-pgi-circle', 'gr-pgi-label']) {
    if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', vis)
  }
}

function addPgiLayers() {
  map.addSource('gr-pgi', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: PGI_REF.map(p => ({
        type: 'Feature',
        properties: { id: p.id, name: `PGI ${p.name}` },
        geometry: { type: 'Point', coordinates: p.lngLat }
      }))
    }
  })
  map.addLayer({ id: 'gr-pgi-circle', type: 'circle', source: 'gr-pgi',
    layout: { visibility: showPgi.value ? 'visible' : 'none' },
    paint: { 'circle-radius': 7, 'circle-color': '#FFB020', 'circle-stroke-color': '#ffffff', 'circle-stroke-width': 2 } })
  map.addLayer({ id: 'gr-pgi-label', type: 'symbol', source: 'gr-pgi',
    layout: { visibility: showPgi.value ? 'visible' : 'none', 'text-field': ['get', 'name'], 'text-size': 11, 'text-offset': [0, 1.2], 'text-anchor': 'top', 'text-optional': true },
    paint: { 'text-color': '#ffffff', 'text-halo-color': 'rgba(0,0,0,0.85)', 'text-halo-width': 1.5 },
    minzoom: 6.5 })
  map.on('click', 'gr-pgi-circle', e => {
    const f = e.features && e.features[0]
    if (f) selectPgi(f.properties.id, false)
  })
  map.on('mouseenter', 'gr-pgi-circle', () => { map.getCanvas().style.cursor = 'pointer' })
  map.on('mouseleave', 'gr-pgi-circle', () => { map.getCanvas().style.cursor = '' })
}

function addPdoLayers(geojson) {
  const colorMatch = ['match', ['get', 'group'],
    ...GROUPS.flatMap(g => [g.key, g.color]), '#888']
  map.addSource('gr-pdo', { type: 'geojson', data: geojson })
  map.addLayer({ id: 'gr-fill', type: 'fill', source: 'gr-pdo',
    paint: { 'fill-color': colorMatch, 'fill-opacity': 0.42 } })
  map.addLayer({ id: 'gr-outline', type: 'line', source: 'gr-pdo',
    paint: { 'line-color': '#ffffff', 'line-width': 1.5, 'line-opacity': 0.9 } })

  map.on('click', 'gr-fill', e => {
    if (map.getLayer('gr-pgi-circle') && map.queryRenderedFeatures(e.point, { layers: ['gr-pgi-circle'] }).length) return
    const hits = e.features || []
    if (!hits.length) return
    // 重疊時選面積最小者（最具體的 PDO）
    const best = hits.reduce((a, b) => (a.properties.area_km2 <= b.properties.area_km2 ? a : b))
    selectById(best.properties.id, false)
  })
  addPgiLayers()
  map.on('mouseenter', 'gr-fill', () => { map.getCanvas().style.cursor = 'pointer' })
  map.on('mouseleave', 'gr-fill', () => { map.getCanvas().style.cursor = '' })
}

async function initMap(retry = 0) {
  try {
    if (!mapboxgl.supported()) {
      mapError.value = '您的瀏覽器不支援 WebGL，請更新瀏覽器或開啟硬體加速後重試'
      return
    }
    if (!mapContainer.value) {
      if (retry < 5) { setTimeout(() => initMap(retry + 1), 200); return }
      mapError.value = '無法獲取地圖容器'
      return
    }
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [23.5, 38.2],
      zoom: 5.6
    })
    map.on('load', async () => {
      map.resize()
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')
      map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
      map.fitBounds(HOME_BOUNDS, { padding: 30, duration: 0 })
      try {
        const res = await fetch('/greece/greece_pdo.geojson')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const geojson = await res.json()
        features.value = geojson.features
        addPdoLayers(geojson)
      } catch (err) {
        mapError.value = `產區邊界載入失敗: ${err.message}`
      }
      mapReady.value = true
      if (props.initialRegion?.id) selectById(props.initialRegion.id)
    })
    map.on('error', e => { if (!mapReady.value) mapError.value = `地圖錯誤: ${e.error?.message || ''}` })
  } catch (err) {
    mapError.value = `初始化失敗: ${err.message}`
  }
}

onMounted(async () => {
  globalGreeceAchievementManager.init()
  await nextTick()
  await initMap()
})

onUnmounted(() => {
  if (map) { map.remove(); map = null }
})
</script>

<style scoped>
.main-layout {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
}
.map-section { flex: 1; position: relative; height: 100%; overflow: hidden; }
.map { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
@media (max-width: 768px) {
  .main-layout, .map-section { height: 100dvh; min-height: 100svh; overscroll-behavior: none; }
}
.gr-legend {
  position: absolute; left: 12px; bottom: 72px; z-index: 5;
  background: rgba(255, 255, 255, 0.92); border-radius: 12px; padding: 10px 12px;
  font-size: 0.78rem; color: #1b2b3a; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: min(260px, calc(100vw - 24px));
}
.gr-legend-item { display: flex; align-items: center; gap: 6px; margin: 2px 0; }
.gr-legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.gr-legend-toggle { display: flex; align-items: center; gap: 6px; margin-top: 6px; cursor: pointer; }
.gr-pgi-dot { width: 10px; height: 10px; border-radius: 50%; background: #FFB020; border: 2px solid #fff; box-shadow: 0 0 0 1px #c98100; flex-shrink: 0; }
.gr-legend-hint { margin-top: 6px; font-size: 0.7rem; color: #5b6b7a; line-height: 1.35; }
.layer-panel-wrapper { position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%); z-index: 46; }
.map-error {
  position: absolute; top: 70px; left: 50%; transform: translateX(-50%); z-index: 20;
  background: #b3261e; color: #fff; padding: 8px 14px; border-radius: 10px; font-size: 0.85rem;
}
</style>
