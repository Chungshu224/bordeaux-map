<template>
  <div class="germany-map-slide">
    <div class="gms-header">
      <h2 class="gms-title">{{ slide.title }}</h2>
      <p v-if="slide.description" class="gms-desc">{{ slide.description }}</p>
    </div>

    <div class="gms-map-wrapper">
      <div ref="mapContainer" class="gms-mapbox"></div>

      <div v-if="loading" class="gms-overlay">
        <div class="gms-spinner"></div>
        <span>地圖載入中…</span>
      </div>

      <div v-if="errorMsg" class="gms-error">⚠️ {{ errorMsg }}</div>

      <div
        v-if="hoveredRegion"
        class="gms-tooltip"
        :style="{ left: tooltipX + 'px', top: tooltipY + 'px' }"
      >{{ hoveredRegion }}</div>

      <div v-if="legendItems.length" class="gms-legend">
        <div v-for="item in legendItems" :key="item.label" class="gms-legend-item">
          <span class="gms-legend-dot" :style="{ background: item.color }"></span>
          <span class="gms-legend-label">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const props = defineProps({
  slide: { type: Object, required: true },
})

// ── 各產區中心點與縮放 ────────────────────────────────────────
const REGION_CONFIG = {
  overview:        { center: [10.0, 51.2], zoom: 5.2,  label: '德國 13 個 Anbaugebiete' },
  mosel:           { center: [7.0,  50.0], zoom: 7.5,  label: 'Mosel' },
  rheinhessen:     { center: [8.05, 49.85],zoom: 8.0,  label: 'Rheinhessen' },
  pfalz:           { center: [8.15, 49.4], zoom: 8.0,  label: 'Pfalz' },
  rheingau:        { center: [8.05, 50.0], zoom: 9.0,  label: 'Rheingau' },
  nahe:            { center: [7.8,  49.8], zoom: 9.0,  label: 'Nahe' },
  ahr:             { center: [7.0,  50.52],zoom: 9.5,  label: 'Ahr' },
  mittelrhein:     { center: [7.6,  50.3], zoom: 8.5,  label: 'Mittelrhein' },
  hessische:       { center: [8.65, 49.65],zoom: 10.0, label: 'Hessische Bergstraße' },
  wuerttemberg:    { center: [9.3,  49.0], zoom: 8.0,  label: 'Württemberg' },
  franken:         { center: [10.0, 49.8], zoom: 8.0,  label: 'Franken' },
  'saale-unstrut': { center: [11.5, 51.3], zoom: 9.0,  label: 'Saale-Unstrut' },
  sachsen:         { center: [13.5, 51.1], zoom: 9.5,  label: 'Sachsen' },
  baden:           { center: [7.9,  48.3], zoom: 7.5,  label: 'Baden' },
  rhineCore:       { center: [8.0,  49.9], zoom: 7.0,  label: '萊茵核心產區' },
  eastern:         { center: [12.5, 51.2], zoom: 7.5,  label: '東德產區' },
}

// ── 全部 14 個 region GeoJSON（每次都載入，不同 highlightFiles 決定顯示樣式）
const ALL_REGION_FILES = [
  { file: 'ahr-region.geojson',           label: 'Ahr' },
  { file: 'mittelrhein-region.geojson',   label: 'Mittelrhein' },
  { file: 'mosel-region.geojson',         label: 'Mosel' },
  { file: 'rheingau-region.geojson',      label: 'Rheingau' },
  { file: 'hessische-region.geojson',     label: 'Hessische Bergstraße' },
  { file: 'nahe-region.geojson',          label: 'Nahe' },
  { file: 'rheinhessen-region.geojson',   label: 'Rheinhessen' },
  { file: 'pfalz-region.geojson',         label: 'Pfalz' },
  { file: 'wuerttemberg-region.geojson',  label: 'Württemberg' },
  { file: 'franken-region.geojson',       label: 'Franken' },
  { file: 'saale-unstrut-region.geojson', label: 'Saale-Unstrut' },
  { file: 'sachsen-region.geojson',       label: 'Sachsen' },
  { file: 'baden-freiburg-region.geojson',label: 'Baden（南）' },
  { file: 'baden-karlsruhe-region.geojson', label: 'Baden（北）' },
]

const BASE_COLOR     = '#3d5a80'
const HIGHLIGHT_COLOR = '#f39c12'

const mapContainer = ref(null)
const loading      = ref(true)
const errorMsg     = ref(null)
const hoveredRegion = ref(null)
const tooltipX     = ref(0)
const tooltipY     = ref(0)
let map = null

// ── 計算各圖層的顯示設定 ──────────────────────────────────────
const layersToLoad = computed(() => {
  const highlightSet = new Set(props.slide.highlightFiles || [])
  const hasHighlight = highlightSet.size > 0

  return ALL_REGION_FILES.map(r => ({
    file:      `/germany/geojson/${r.file}`,
    label:     r.label,
    highlight: hasHighlight && highlightSet.has(r.file),
    color: hasHighlight
      ? (highlightSet.has(r.file) ? HIGHLIGHT_COLOR : BASE_COLOR + '40')
      : BASE_COLOR,
    opacity: hasHighlight && !highlightSet.has(r.file) ? 0.18 : 0.45,
    lineWidth: hasHighlight && highlightSet.has(r.file) ? 2.5 : 1.0,
  }))
})

// ── 圖例 ─────────────────────────────────────────────────────
const legendItems = computed(() => {
  const cfg = REGION_CONFIG[props.slide.mapRegion] || REGION_CONFIG.overview
  const items = [{ label: cfg.label, color: BASE_COLOR }]
  if (props.slide.highlightFiles?.length) {
    items.push({ label: '重點產區', color: HIGHLIGHT_COLOR })
  }
  return items
})

// ── BBox 計算 ────────────────────────────────────────────────
function calcBbox(gj) {
  const pts = []
  function collect(g) {
    if (!g) return
    if (g.type === 'Point') pts.push(g.coordinates)
    else if (g.type === 'LineString' || g.type === 'MultiPoint') g.coordinates.forEach(c => pts.push(c))
    else if (g.type === 'Polygon' || g.type === 'MultiLineString') g.coordinates.forEach(r => r.forEach(c => pts.push(c)))
    else if (g.type === 'MultiPolygon') g.coordinates.forEach(p => p.forEach(r => r.forEach(c => pts.push(c))))
    else if (g.type === 'GeometryCollection') g.geometries.forEach(collect)
  }
  if (gj.type === 'FeatureCollection') gj.features.forEach(f => collect(f.geometry))
  else if (gj.type === 'Feature') collect(gj.geometry)
  if (!pts.length) return null
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  for (const c of pts) {
    if (c[0] < minX) minX = c[0]
    if (c[1] < minY) minY = c[1]
    if (c[0] > maxX) maxX = c[0]
    if (c[1] > maxY) maxY = c[1]
  }
  return [minX, minY, maxX, maxY]
}

function destroyMap() {
  if (map) { map.remove(); map = null }
}

async function initMap() {
  if (!mapContainer.value) return
  destroyMap()
  loading.value = true
  errorMsg.value = null

  const token = import.meta.env.VITE_MAPBOX_TOKEN
    || (typeof window !== 'undefined' && (window.__MAPBOX_TOKEN || window.localStorage?.getItem('VITE_MAPBOX_TOKEN')))
  if (!token) {
    errorMsg.value = '未設定 Mapbox Token'
    loading.value = false
    return
  }

  const cfg = REGION_CONFIG[props.slide.mapRegion] || REGION_CONFIG.overview
  const center = props.slide.center || cfg.center
  const zoom   = props.slide.zoom   || cfg.zoom

  mapboxgl.accessToken = token

  const mapInst = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center,
    zoom,
    attributionControl: false,
  })
  map = mapInst

  mapInst.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
  mapInst.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right')

  mapInst.on('error', e => {
    console.warn('[GermanyMapSlide] map error:', e?.error?.message)
  })

  mapInst.on('load', async () => {
    const layers = layersToLoad.value
    const highlightBboxPts = []
    const allBboxPts = []

    const promises = layers.map(async (layer, idx) => {
      try {
        const res = await fetch(layer.file)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const gj = await res.json()

        const bbox = calcBbox(gj)
        if (bbox) {
          const corners = [[bbox[0], bbox[1]], [bbox[2], bbox[3]]]
          allBboxPts.push(...corners)
          if (layer.highlight) highlightBboxPts.push(...corners)
        }

        const srcId  = `de-src-${idx}`
        const fillId = `de-fill-${idx}`
        const lineId = `de-line-${idx}`

        mapInst.addSource(srcId, { type: 'geojson', data: gj })

        mapInst.addLayer({
          id: fillId,
          type: 'fill',
          source: srcId,
          paint: {
            'fill-color':   layer.color,
            'fill-opacity': layer.opacity,
          },
        })

        mapInst.addLayer({
          id: lineId,
          type: 'line',
          source: srcId,
          paint: {
            'line-color':   layer.highlight ? HIGHLIGHT_COLOR : BASE_COLOR,
            'line-width':   layer.lineWidth,
            'line-opacity': 0.9,
          },
        })

        mapInst.on('mousemove', fillId, (e) => {
          mapInst.getCanvas().style.cursor = 'pointer'
          hoveredRegion.value = layer.label
          const rect = mapContainer.value?.getBoundingClientRect()
          if (rect) {
            tooltipX.value = e.originalEvent.clientX - rect.left + 12
            tooltipY.value = e.originalEvent.clientY - rect.top - 10
          }
        })
        mapInst.on('mouseleave', fillId, () => {
          mapInst.getCanvas().style.cursor = ''
          hoveredRegion.value = null
        })
      } catch (err) {
        console.warn('[GermanyMapSlide] failed to load', layer.file, err.message)
      }
    })

    await Promise.all(promises)

    // 有高亮產區時 fitBounds 到高亮範圍；否則用全部產區範圍
    const ptsToFit = highlightBboxPts.length >= 2 ? highlightBboxPts : allBboxPts
    if (props.slide.fitBounds !== false && ptsToFit.length >= 2) {
      const minX = Math.min(...ptsToFit.map(p => p[0]))
      const minY = Math.min(...ptsToFit.map(p => p[1]))
      const maxX = Math.max(...ptsToFit.map(p => p[0]))
      const maxY = Math.max(...ptsToFit.map(p => p[1]))
      mapInst.fitBounds([[minX, minY], [maxX, maxY]], { padding: 60, duration: 500 })
    }

    loading.value = false
  })
}

onMounted(() => { initMap() })
onBeforeUnmount(() => { destroyMap() })

watch(() => props.slide.mapRegion, () => { initMap() })
</script>

<style scoped>
.germany-map-slide {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 420px;
  background: #1a2535;
  border-radius: 12px;
  overflow: hidden;
}

.gms-header {
  padding: 14px 20px 10px;
  background: rgba(0,0,0,0.3);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  flex-shrink: 0;
}

.gms-title {
  margin: 0 0 4px;
  font-size: 1.25rem;
  font-weight: 700;
  color: #e8eef4;
  letter-spacing: 0.02em;
}

.gms-desc {
  margin: 0;
  font-size: 0.9rem;
  color: rgba(232,238,244,0.7);
}

.gms-map-wrapper {
  position: relative;
  flex: 1;
  min-height: 320px;
}

.gms-mapbox {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.gms-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.55);
  color: #e8eef4;
  gap: 12px;
  font-size: 0.95rem;
  z-index: 10;
}

.gms-spinner {
  width: 36px;
  height: 36px;
  border: 3px solid rgba(255,255,255,0.25);
  border-top-color: #e8eef4;
  border-radius: 50%;
  animation: gms-spin 0.8s linear infinite;
}

@keyframes gms-spin {
  to { transform: rotate(360deg); }
}

.gms-error {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(180,40,40,0.9);
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  z-index: 20;
}

.gms-tooltip {
  position: absolute;
  background: rgba(10,18,30,0.92);
  color: #e8eef4;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.82rem;
  pointer-events: none;
  z-index: 30;
  white-space: nowrap;
  border: 1px solid rgba(255,255,255,0.15);
  max-width: 260px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.gms-legend {
  position: absolute;
  bottom: 28px;
  left: 12px;
  background: rgba(10,18,30,0.85);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  padding: 8px 12px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.gms-legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.gms-legend-dot {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  flex-shrink: 0;
  border: 1px solid rgba(255,255,255,0.25);
}

.gms-legend-label {
  font-size: 0.8rem;
  color: #e8eef4;
  white-space: nowrap;
}
</style>
