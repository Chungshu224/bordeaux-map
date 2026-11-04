<template>
  <div class="main-layout">
    <section class="map-section">
      <RegionMapHeader
        :regionName="gt('摩洛哥')"
        :title="gt('🏜️ 摩洛哥產區地圖（{n} 個示意點）', { n: POINT_REF.length })"
        icon="🏜️"
        @back="emits('back-to-course')"
      />

      <RegionMapInfoPanel
        v-if="mapReady"
        :info="unifiedInfo"
        :theme-color="activeColor"
        :collapsed="infoBarCollapsed"
        @toggle-collapse="infoBarCollapsed = !infoBarCollapsed"
        @reset="resetMap"
      />

      <div ref="mapContainer" class="map"></div>

      <div v-if="mapReady && !activePoint" class="ma-legend">
        <div class="ma-legend-title">{{ gt('五個教學分區') }}</div>
        <div v-for="z in ZONES" :key="z.key" class="ma-legend-item">
          <span class="ma-legend-dot" :style="{ background: z.color }"></span>
          {{ tx(z.label) }}
        </div>
        <div class="ma-legend-hint">{{ gt('點擊示意點查看資訊。金色外框是 AOC，空心點在 AOG 之外。位置為估計，不是官方邊界。') }}</div>
      </div>

      <div v-if="showLayerPanel" class="layer-panel-wrapper">
        <RegionMapLayerPanel
          :is3D="is3D"
          :hide-soil="true"
          @toggle-3d="toggle3D"
          @close="showLayerPanel = false"
        />
      </div>

      <RegionMapMobileToolbar
        v-if="mapReady"
        :aoc-open="drawerOpen"
        :layer-open="showLayerPanel"
        :is3D="is3D"
        :info-open="!!activePoint && !infoBarCollapsed"
        @action="handleMobileAction"
      />

      <div v-if="mapError" class="map-error">{{ mapError }}</div>
    </section>

    <RegionMapAppellationDrawer
      v-model:open="drawerOpen"
      :region-name="gt('摩洛哥')"
      :grouped="groupedDrawer"
      :search="search"
      :active-id="activePoint ? activePoint.id : ''"
      @update:search="search = $event"
      @select="onDrawerSelect"
    />
  </div>
</template>

<script setup>
import { gt, tx } from '../../locales/moroccoUi/index.js'
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import {
  RegionMapHeader, RegionMapLayerPanel, RegionMapInfoPanel,
  RegionMapAppellationDrawer, RegionMapMobileToolbar
} from '../shared/regionMap/index.js'
import { POINT_REF, POINT_NOTES, ZONES } from '../../data/morocco/pointRef.js'

const emits = defineEmits(['back-to-course'])

const KIND_LABEL = { aog: 'AOG', aoc: 'AOC', ref: 'AOG 之外' }
const ZONE_BY_KEY = Object.fromEntries(ZONES.map(z => [z.key, z]))
const HOME_BOUNDS = [[-10.5, 31.0], [-1.2, 35.6]]

const mapContainer = ref(null)
const mapReady = ref(false)
const mapError = ref(null)
const is3D = ref(false)
const infoBarCollapsed = ref(true)
const drawerOpen = ref(false)
const showLayerPanel = ref(false)
const search = ref('')
const activePoint = ref(null)
let map = null

const activeColor = computed(() => ZONE_BY_KEY[activePoint.value?.zone]?.color || '#C1272D')

const unifiedInfo = computed(() => {
  const g = activePoint.value
  if (!g) return null
  return {
    name: g.name,
    originalName: g.parent ? gt('位於 {p} 內', { p: g.parent }) : '',
    badges: [{ label: gt(KIND_LABEL[g.kind]) }, { label: gt('示意點') }],
    meta: [
      { label: gt('教學分區'), value: tx(ZONE_BY_KEY[g.zone].label) },
      { label: gt('層級'), value: gt(KIND_LABEL[g.kind]) }
    ],
    grapes: [],
    description: `${tx(g.hint)} ${tx(POINT_NOTES)}`
  }
})

const groupedDrawer = computed(() => {
  const q = search.value.trim().toLowerCase()
  const match = p => !q || p.name.toLowerCase().includes(q)
  return ZONES
    .map(z => ({
      key: z.key,
      label: tx(z.label),
      items: POINT_REF.filter(p => p.zone === z.key).filter(match)
        .map(p => ({ id: p.id, name: p.name, type: p.zone, styles: [] }))
        .sort((a, b) => a.name.localeCompare(b.name))
    }))
    .filter(g => g.items.length)
})

function selectPoint(id, fly = true) {
  const g = POINT_REF.find(p => p.id === id)
  if (!g) return
  activePoint.value = g
  infoBarCollapsed.value = false
  if (!map) return
  applyHighlight()
  if (fly) map.flyTo({ center: g.lngLat, zoom: Math.max(map.getZoom(), 8), duration: 900 })
}

function onDrawerSelect(item) {
  selectPoint(item.id)
  drawerOpen.value = false
}

function applyHighlight() {
  if (!map || !map.getLayer('ma-pt-circle')) return
  const pid = activePoint.value?.id
  map.setPaintProperty('ma-pt-circle', 'circle-radius', pid ? ['case', ['==', ['get', 'id'], pid], 12, 7] : 8)
}

function addPointLayers() {
  const zoneColor = ['match', ['get', 'zone'], ...ZONES.flatMap(z => [z.key, z.color]), '#888']
  map.addSource('ma-pt', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: POINT_REF.map(p => ({
        type: 'Feature',
        geometry: { type: 'Point', coordinates: p.lngLat },
        properties: { id: p.id, name: p.name, zone: p.zone, kind: p.kind }
      }))
    }
  })
  map.addLayer({
    id: 'ma-pt-circle', type: 'circle', source: 'ma-pt',
    paint: {
      'circle-radius': 8,
      'circle-color': ['case', ['==', ['get', 'kind'], 'ref'], '#ffffff', zoneColor],
      'circle-stroke-width': ['case', ['==', ['get', 'kind'], 'aoc'], 4, 2],
      'circle-stroke-color': ['case', ['==', ['get', 'kind'], 'ref'], zoneColor, ['==', ['get', 'kind'], 'aoc'], '#FFD36B', '#ffffff']
    }
  })
  map.addLayer({
    id: 'ma-pt-label', type: 'symbol', source: 'ma-pt',
    layout: {
      'text-field': ['get', 'name'], 'text-size': 12, 'text-offset': [0, 1.2], 'text-anchor': 'top',
      'text-allow-overlap': false
    },
    paint: { 'text-color': '#fff', 'text-halo-color': 'rgba(0,0,0,0.85)', 'text-halo-width': 1.5 }
  })
  map.on('click', 'ma-pt-circle', e => {
    const id = e.features?.[0]?.properties?.id
    if (id) selectPoint(id, false)
  })
  map.on('mouseenter', 'ma-pt-circle', () => { map.getCanvas().style.cursor = 'pointer' })
  map.on('mouseleave', 'ma-pt-circle', () => { map.getCanvas().style.cursor = '' })
}

function resetMap() {
  activePoint.value = null
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

function handleMobileAction(action) {
  if (action === 'aoc') { drawerOpen.value = !drawerOpen.value; showLayerPanel.value = false }
  else if (action === 'layer') { showLayerPanel.value = !showLayerPanel.value; drawerOpen.value = false }
  else if (action === '3d') toggle3D()
  else if (action === 'info') infoBarCollapsed.value = !infoBarCollapsed.value
  else if (action === 'reset') resetMap()
}

async function initMap(retry = 0) {
  try {
    if (!mapboxgl.supported()) {
      mapError.value = gt('您的瀏覽器不支援 WebGL，請更新瀏覽器或開啟硬體加速後重試')
      return
    }
    if (!mapContainer.value) {
      if (retry < 5) { setTimeout(() => initMap(retry + 1), 200); return }
      mapError.value = gt('無法獲取地圖容器')
      return
    }
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [-6, 33.5],
      zoom: 5
    })
    map.on('load', () => {
      map.resize()
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')
      map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
      map.fitBounds(HOME_BOUNDS, { padding: 30, duration: 0 })
      addPointLayers()
      mapReady.value = true
    })
    map.on('error', e => { if (!mapReady.value) mapError.value = gt('地圖錯誤: {m}', { m: e.error?.message || '' }) })
  } catch (err) {
    mapError.value = gt('初始化失敗: {m}', { m: err.message })
  }
}

onMounted(async () => {
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
.ma-legend {
  position: absolute; right: 12px; bottom: 72px; z-index: 5;
  background: rgba(255, 255, 255, 0.92); border-radius: 12px; padding: 10px 12px;
  font-size: 0.78rem; color: #1b2b3a; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: min(260px, calc(100vw - 24px));
}
.ma-legend-title { font-weight: 700; margin-bottom: 4px; }
.ma-legend-item { display: flex; align-items: center; gap: 6px; margin: 2px 0; }
.ma-legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.ma-legend-hint { margin-top: 6px; font-size: 0.7rem; color: #5b6b7a; line-height: 1.35; }
.layer-panel-wrapper { position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%); z-index: 46; }
.map-error {
  position: absolute; top: 70px; left: 50%; transform: translateX(-50%); z-index: 20;
  background: #b3261e; color: #fff; padding: 8px 14px; border-radius: 10px; font-size: 0.85rem;
}
</style>
