<template>
  <div class="geo-slide">
    <!-- Header -->
    <div class="slide-top">
      <div class="title-group">
        <h2>{{ c.ui.title }}</h2>
        <p class="hint">{{ c.ui.hint }}</p>
      </div>
      <div class="layer-tabs">
        <button
          v-for="lay in LAYERS" :key="lay.key"
          class="layer-btn"
          :class="{ active: activeLayer === lay.key }"
          :style="activeLayer === lay.key ? { background: lay.color, color: '#fff', borderColor: lay.color } : {}"
          @click="switchLayer(lay.key)"
        >
          {{ lay.icon }} {{ lay.label }}
        </button>
      </div>
    </div>

    <div class="slide-body">
      <!-- Mapbox Map Panel -->
      <div class="map-panel">
        <div ref="mapContainer" class="mapbox-container"></div>

        <div v-if="loading" class="map-overlay">
          <div class="loading-spinner"></div>
          <span>{{ c.ui.loading }}</span>
        </div>
        <div v-if="mapError" class="map-overlay error-overlay">
          <span>⚠️ {{ mapError }}</span>
        </div>

        <div v-if="!loading && !mapError" class="map-legend">
          <div
            v-for="z in ZONES" :key="z.id"
            class="legend-item"
            :class="{ active: activeZone === z.id }"
            @click="selectZone(z.id)"
          >
            <span class="legend-dot" :style="{ background: zoneColor(z.id) }"></span>
            <span>{{ z.label }}</span>
          </div>
        </div>
      </div>

      <!-- Info Panel -->
      <div class="info-panel">
        <!-- Zone detail (when zone selected) -->
        <template v-if="activeZone && currentDetail">
          <div class="detail-header" :style="{ borderColor: currentLayer.color }">
            <div class="detail-badge" :style="{ background: zoneColor(activeZone) }">
              {{ currentDetail.icon }}
            </div>
            <div>
              <h3 class="detail-title">{{ currentDetail.title }}</h3>
              <p class="detail-subtitle">{{ currentDetail.subtitle }}</p>
            </div>
          </div>
          <p class="detail-summary">{{ currentDetail.summary }}</p>
          <div class="detail-points">
            <div v-for="pt in currentDetail.points" :key="pt" class="detail-point">
              <span class="point-bullet" :style="{ color: currentLayer.color }">▸</span>
              {{ pt }}
            </div>
          </div>
          <div v-if="currentDetail.regions?.length" class="region-tags-wrap">
            <h4 class="region-tags-title">{{ c.ui.regionsTitle }}</h4>
            <div class="region-tags">
              <span v-for="r in currentDetail.regions" :key="r" class="region-tag"
                    :style="{ borderColor: currentLayer.color, color: currentLayer.color }">
                {{ r }}
              </span>
            </div>
          </div>
        </template>

        <!-- Layer overview (no zone selected) -->
        <template v-else>
          <div class="overview-header">
            <span class="overview-icon">{{ currentLayer.icon }}</span>
            <div>
              <h3>{{ currentLayer.label }}</h3>
              <p class="overview-sub">{{ currentLayer.desc }}</p>
            </div>
          </div>
          <div class="overview-cards">
            <div
              v-for="z in ZONES" :key="z.id"
              class="overview-card"
              :style="{ borderLeftColor: zoneColor(z.id) }"
              @click="selectZone(z.id)"
            >
              <div class="ov-card-top">
                <span class="ov-icon" :style="{ background: zoneColor(z.id) }">
                  {{ layerZone(z.id).icon }}
                </span>
                <div>
                  <div class="ov-title">{{ layerZone(z.id).title }}</div>
                  <div class="ov-sub">{{ layerZone(z.id).subtitle }}</div>
                </div>
              </div>
            </div>
          </div>
          <p class="overview-hint">{{ c.ui.overviewHint }}</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useI18n } from 'vue-i18n'
import { GEO_CLIMATE_CONTENT } from './data/italyGeoClimate.js'

defineProps({ slide: { type: Object, default: () => ({}) } })

const mapContainer = ref(null)
const loading = ref(true)
const mapError = ref(null)
const activeLayer = ref('geo')
const activeZone = ref(null)
let map = null

const { locale } = useI18n()
const c = computed(() => GEO_CLIMATE_CONTENT[locale.value] || GEO_CLIMATE_CONTENT['zh-TW'])

const ZONE_IDS = ['north', 'center', 'south', 'islands']
const ZONES = computed(() => ZONE_IDS.map(id => ({ id, label: c.value.zones[id] })))
const LAYERS = computed(() => c.value.layers)

function layerObj () { return LAYERS.value.find(l => l.key === activeLayer.value) }
const currentLayer = computed(() => layerObj())
function layerZone (zoneId) { return layerObj()?.zones[zoneId] || {} }
function zoneColor (zoneId) { return layerZone(zoneId).color || '#aaa' }
const currentDetail = computed(() => activeZone.value ? layerZone(activeZone.value) : null)

function getZoneColorMap () {
  return Object.fromEntries(ZONE_IDS.map(id => ({ id })).map(z => [z.id, zoneColor(z.id)]))
}

function updateMapColors () {
  if (!map) return
  const colors = getZoneColorMap()
  ZONE_IDS.forEach(id => { const z = { id }
    if (map.getLayer(`fill-${z.id}`)) {
      map.setPaintProperty(`fill-${z.id}`, 'fill-color', colors[z.id])
      map.setPaintProperty(`line-${z.id}`, 'line-color', colors[z.id])
    }
  })
}

function applyZoneHighlight (zoneId) {
  if (!map) return
  ZONE_IDS.forEach(id => { const z = { id }
    if (!map.getLayer(`fill-${z.id}`)) return
    const opacity = zoneId ? (z.id === zoneId ? 0.6 : 0.15) : 0.35
    map.setPaintProperty(`fill-${z.id}`, 'fill-opacity', opacity)
  })
}

function selectZone (zoneId) {
  activeZone.value = activeZone.value === zoneId ? null : zoneId
}

function switchLayer (layerKey) {
  activeLayer.value = layerKey
  activeZone.value = null
  updateMapColors()
  applyZoneHighlight(null)
}

async function initMap () {
  await nextTick()
  if (!mapContainer.value) return

  loading.value = true
  mapError.value = null

  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) {
    mapError.value = c.value.ui.noToken
    loading.value = false
    return
  }

  let zonesGeoJSON
  try {
    const res = await fetch('/italy/italy-zones.geojson')
    if (!res.ok) throw new Error(c.value.ui.loadFail)
    zonesGeoJSON = await res.json()
  } catch (e) {
    mapError.value = e.message
    loading.value = false
    return
  }

  mapboxgl.accessToken = token
  const mapInst = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: [12.5, 42.5],
    zoom: 4.8,
    attributionControl: false,
  })
  map = mapInst

  mapInst.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
  mapInst.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-left')

  mapInst.on('load', () => {
    const colors = getZoneColorMap()

    zonesGeoJSON.features.forEach(feature => {
      const zoneId = feature.properties.zone
      const color = colors[zoneId] || '#888'

      mapInst.addSource(`zone-${zoneId}`, {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: [feature] },
      })

      mapInst.addLayer({
        id: `fill-${zoneId}`,
        type: 'fill',
        source: `zone-${zoneId}`,
        paint: { 'fill-color': color, 'fill-opacity': 0.35 },
      })

      mapInst.addLayer({
        id: `line-${zoneId}`,
        type: 'line',
        source: `zone-${zoneId}`,
        paint: { 'line-color': color, 'line-width': 2, 'line-opacity': 0.8 },
      })

      mapInst.on('click', `fill-${zoneId}`, () => selectZone(zoneId))
      mapInst.on('mouseenter', `fill-${zoneId}`, () => { mapInst.getCanvas().style.cursor = 'pointer' })
      mapInst.on('mouseleave', `fill-${zoneId}`, () => { mapInst.getCanvas().style.cursor = '' })
    })

    loading.value = false
  })

  mapInst.on('error', e => {
    mapError.value = `${c.value.ui.mapError}${e.error?.message || c.value.ui.unknown}`
    loading.value = false
  })
}

function destroyMap () {
  if (map) { map.remove(); map = null }
}

watch(activeZone, newZone => applyZoneHighlight(newZone))

onMounted(() => initMap())
onBeforeUnmount(() => destroyMap())
</script>

<style scoped>
.geo-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #fef9f5 0%, #f5e8d8 100%);
  color: #2d1a0f;
  overflow: hidden;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
}

/* ── Header ── */
.slide-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.6rem 0.6rem;
  gap: 1rem;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(123, 31, 42, 0.1);
}
.title-group h2 {
  font-size: 1.4rem;
  font-weight: 800;
  color: #7B1F2A;
  margin: 0 0 0.15rem;
}
.hint {
  font-size: 0.76rem;
  color: #9a7058;
  margin: 0;
}
.layer-tabs {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}
.layer-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 7px 14px;
  border: 2px solid #d0b090;
  border-radius: 20px;
  background: white;
  color: #5a3828;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.layer-btn:hover { background: #f5e8d8; }
.layer-btn.active { box-shadow: 0 4px 12px rgba(0,0,0,0.18); }

/* ── Body ── */
.slide-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
  flex: 1;
  min-height: 0;
  padding: 0.8rem 1rem;
  overflow: hidden;
}

/* ── Map Panel ── */
.map-panel {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: #0e1624;
  min-height: 0;
}

.mapbox-container {
  width: 100%;
  height: 100%;
}

/* overlays */
.map-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  gap: 10px;
  font-size: 0.88rem;
  z-index: 5;
}
.error-overlay { background: rgba(120, 0, 0, 0.55); }

.loading-spinner {
  width: 30px;
  height: 30px;
  border: 3px solid rgba(255, 255, 255, 0.25);
  border-top-color: #c8a96e;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* legend overlay */
.map-legend {
  position: absolute;
  bottom: 32px;
  left: 10px;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(6px);
  border-radius: 8px;
  padding: 6px 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 4;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  color: #fff;
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 4px;
  transition: background 0.15s;
  white-space: nowrap;
}
.legend-item:hover, .legend-item.active { background: rgba(255,255,255,0.15); }
.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* ── Info Panel ── */
.info-panel {
  background: white;
  border-radius: 12px;
  padding: 1rem 1.2rem;
  box-shadow: 0 4px 16px rgba(123, 31, 42, 0.1);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  min-height: 0;
}

.detail-header {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  padding-bottom: 0.7rem;
  border-bottom: 2px solid;
}
.detail-badge {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
}
.detail-title {
  font-size: 1.05rem;
  font-weight: 800;
  color: #2d1a0f;
  margin: 0 0 0.15rem;
}
.detail-subtitle {
  font-size: 0.78rem;
  color: #7a6048;
  margin: 0;
  font-style: italic;
}
.detail-summary {
  font-size: 0.82rem;
  color: #4a3826;
  line-height: 1.6;
  padding: 0.6rem 0.8rem;
  background: #faf3e8;
  border-radius: 6px;
  border-left: 3px solid #c9a84c;
  margin: 0;
}
.detail-points {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.detail-point {
  font-size: 0.8rem;
  color: #4a3826;
  display: flex;
  gap: 6px;
  line-height: 1.4;
}
.point-bullet { font-weight: 800; flex-shrink: 0; margin-top: 1px; }
.region-tags-wrap { margin-top: 0.2rem; }
.region-tags-title {
  font-size: 0.8rem;
  color: #7B1F2A;
  margin: 0 0 0.4rem;
  font-weight: 700;
}
.region-tags { display: flex; flex-wrap: wrap; gap: 5px; }
.region-tag {
  padding: 3px 9px;
  border-radius: 12px;
  border: 1.5px solid;
  font-size: 0.72rem;
  font-weight: 600;
  background: white;
}

/* Overview (no zone selected) */
.overview-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding-bottom: 0.7rem;
  border-bottom: 1px solid #f0e8e0;
}
.overview-icon { font-size: 2rem; }
.overview-header h3 { margin: 0 0 0.2rem; font-size: 1.1rem; color: #2d1a0f; }
.overview-sub { font-size: 0.78rem; color: #7a6048; margin: 0; }
.overview-cards { display: flex; flex-direction: column; gap: 0.5rem; }
.overview-card {
  padding: 0.7rem 0.9rem;
  background: #faf3e8;
  border-radius: 8px;
  border-left: 4px solid;
  cursor: pointer;
  transition: all 0.15s;
}
.overview-card:hover { transform: translateX(3px); background: #f5e8d0; }
.ov-card-top { display: flex; align-items: center; gap: 0.7rem; }
.ov-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}
.ov-title { font-size: 0.88rem; font-weight: 700; color: #2d1a0f; }
.ov-sub { font-size: 0.74rem; color: #7a6048; margin-top: 1px; }
.overview-hint {
  font-size: 0.74rem;
  color: #9a7058;
  text-align: center;
  margin: 0;
  padding-top: 0.3rem;
}

@media (max-width: 700px) {
  .slide-body { grid-template-columns: 1fr; }
  .slide-top { flex-direction: column; align-items: flex-start; }
}
</style>

<style>
/* Mapbox attribution override (must be global) */
.mapboxgl-ctrl-bottom-left .mapboxgl-ctrl-attrib {
  font-size: 0.6rem;
}
</style>
