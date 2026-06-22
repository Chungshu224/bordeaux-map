<template>
  <div class="loire-map-slide">
    <!-- 標題列 -->
    <div class="lms-header">
      <h2 class="lms-title">{{ slide.title }}</h2>
      <p v-if="slide.description" class="lms-desc">{{ slide.description }}</p>
    </div>

    <!-- AOC 快速按鈕列 -->
    <div v-if="slide.aocButtons?.length" class="lms-aoc-bar">
      <button
        v-for="btn in slide.aocButtons"
        :key="btn.id"
        class="lms-aoc-btn"
        :class="{ active: selectedAOC?.id === btn.id }"
        :style="selectedAOC?.id === btn.id ? { background: btn.color, borderColor: btn.color } : { borderColor: btn.color, color: btn.color }"
        @click="selectAOC(btn)"
      >{{ btn.short || btn.label }}</button>
    </div>

    <!-- 地圖區 -->
    <div class="lms-map-wrapper">
      <div ref="mapContainer" class="lms-mapbox"></div>

      <!-- 載入中 -->
      <div v-if="loading" class="lms-overlay">
        <div class="lms-spinner"></div>
        <span>地圖載入中…</span>
      </div>

      <!-- 錯誤訊息 -->
      <div v-if="errorMsg" class="lms-error">
        <span>⚠️ {{ errorMsg }}</span>
      </div>

      <!-- Hover tooltip -->
      <div
        v-if="hoveredAOC && !selectedAOC"
        class="lms-tooltip"
        :style="{ left: tooltipX + 'px', top: tooltipY + 'px' }"
      >{{ hoveredAOC }}</div>

      <!-- AOC 詳情面板 -->
      <Transition name="lms-panel">
        <div v-if="selectedAOC" class="lms-aoc-panel" :style="{ borderColor: selectedAOC.color }">
          <button class="lms-panel-close" @click="selectedAOC = null">✕</button>
          <div class="lms-panel-badge" :style="{ background: selectedAOC.color }">{{ selectedAOC.aop }}</div>
          <h3 class="lms-panel-title">{{ selectedAOC.label }}</h3>
          <div class="lms-panel-rows">
            <div class="lms-panel-row">
              <span class="lms-panel-key">🪨 土壤</span>
              <span class="lms-panel-val">{{ selectedAOC.soil }}</span>
            </div>
            <div class="lms-panel-row">
              <span class="lms-panel-key">🍇 品種</span>
              <span class="lms-panel-val">{{ selectedAOC.grapes }}</span>
            </div>
            <div class="lms-panel-row">
              <span class="lms-panel-key">🦠 Sur Lie</span>
              <span class="lms-panel-val">{{ selectedAOC.surLie }}</span>
            </div>
            <div class="lms-panel-row lms-panel-style">
              <span class="lms-panel-key">🍷 風格</span>
              <span class="lms-panel-val">{{ selectedAOC.style }}</span>
            </div>
            <div v-if="selectedAOC.note" class="lms-panel-note">{{ selectedAOC.note }}</div>
          </div>
        </div>
      </Transition>

      <!-- 圖例 -->
      <div v-if="legendItems.length && !selectedAOC" class="lms-legend">
        <div v-for="item in legendItems" :key="item.label" class="lms-legend-item">
          <span class="lms-legend-dot" :style="{ background: item.color }"></span>
          <span class="lms-legend-label">{{ item.label }}</span>
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

// ── 群組預設中心與縮放 ──────────────────────────────────────
const GROUP_CONFIG = {  Regional:      { center: [1.2,  47.5],  zoom: 6.5,  color: '#5A7A5A', label: 'Loire Valley 給街區' },  PayNantes:     { center: [-1.8, 47.1],  zoom: 8.5,  color: '#1B6B8A', label: 'Pays Nantais' },
  AnjouSaumur:   { center: [-0.5, 47.3],  zoom: 8.5,  color: '#7A3B8A', label: 'Anjou-Saumur' },
  Touraine:      { center: [0.7,  47.3],  zoom: 8.5,  color: '#8A5B1B', label: 'Touraine' },
  Centre:        { center: [2.8,  47.2],  zoom: 8.5,  color: '#1B7A4A', label: 'Centre-Loire' },
  MassifCentral: { center: [3.1,  45.8],  zoom: 9.0,  color: '#7A1B1B', label: 'Massif Central' },
  overview:      { center: [1.2,  47.5],  zoom: 6.5,  color: '#5A7A5A', label: 'Loire Valley' },
}

// ── 各群組的 GeoJSON 檔案清單 ─────────────────────────────
const GROUP_FILES = {
  Regional: [
    'Loire-region.geojson',
    'Loire.geojson',
  ],
  PayNantes: [
    'Muscadet.geojson',
    'Muscadet-Sèvre-et-Maine.geojson',
    'Muscadet-Côtes-de-Grandlieu.geojson',
    'Muscadet-Coteaux-de-la-Loire.geojson',
    'Gros-Plant-du-Pays-Nantais.geojson',
    'Coteaux-dAncenis.geojson',
    'Fiefs-Vendéens.geojson',
  ],
  AnjouSaumur: [
    'Anjou.geojson',
    'Anjou-Villages.geojson',
    'Anjou-Brissac.geojson',
    'Cabernet-dAnjou.geojson',
    'Rosé-dAnjou.geojson',
    'Saumur.geojson',
    'Saumur-Champigny.geojson',
    'Savennières.geojson',
    'Coulée-de-Serrant.geojson',
    'Coteaux-du-Layon.geojson',
    'Quarts-de-Chaume.geojson',
    'Bonnezeaux.geojson',
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

const mapContainer = ref(null)
const loading = ref(true)
const errorMsg = ref(null)
const hoveredAOC = ref(null)
const tooltipX = ref(0)
const tooltipY = ref(0)
const selectedAOC = ref(null)
const mapLayersReady = ref(false)
let map = null

function updateLayerVisibility(aoc) {
  if (!map || !mapLayersReady.value) return
  const layers = layersToLoad.value
  layers.forEach((layer, idx) => {
    const fillId = `loire-fill-${idx}`
    const lineId = `loire-line-${idx}`
    if (!map.getLayer(fillId)) return
    if (!aoc) {
      // 還原：所有圖層回到原始顏色
      map.setPaintProperty(fillId, 'fill-color', layer.color)
      map.setPaintProperty(fillId, 'fill-opacity', layer.opacity ?? 0.55)
      map.setPaintProperty(lineId, 'line-color', layer.color)
      map.setPaintProperty(lineId, 'line-opacity', layer.highlight ? 0.9 : 0.6)
      map.setPaintProperty(lineId, 'line-width', layer.highlight ? 2.5 : 1.5)
    } else {
      const fname = layer.file.split('/').pop()
      const isSelected = aoc.file === fname
      const isHighlit = layer.highlight
      if (isSelected) {
        // 選中：強制使用按鈕顏色，避免半透明 baseColor 問題
        map.setPaintProperty(fillId, 'fill-color', aoc.color)
        map.setPaintProperty(fillId, 'fill-opacity', 0.65)
        map.setPaintProperty(lineId, 'line-color', aoc.color)
        map.setPaintProperty(lineId, 'line-opacity', 1)
        map.setPaintProperty(lineId, 'line-width', 3)
      } else if (isHighlit) {
        // 其他 highlight 圖層：隱藏
        map.setPaintProperty(fillId, 'fill-opacity', 0)
        map.setPaintProperty(lineId, 'line-opacity', 0)
      } else {
        // 背景圖層：極淡
        map.setPaintProperty(fillId, 'fill-color', layer.color)
        map.setPaintProperty(fillId, 'fill-opacity', 0.07)
        map.setPaintProperty(lineId, 'line-color', layer.color)
        map.setPaintProperty(lineId, 'line-opacity', 0.12)
        map.setPaintProperty(lineId, 'line-width', 1.5)
      }
    }
  })
}

watch(selectedAOC, (aoc) => { updateLayerVisibility(aoc) })

function selectAOC(btn) {
  if (selectedAOC.value?.id === btn.id) {
    selectedAOC.value = null
    return
  }
  selectedAOC.value = btn
  if (map && btn.center) {
    map.flyTo({ center: btn.center, zoom: btn.zoom ?? 10, duration: 900 })
  }
}

// ── 計算要顯示哪些圖層 ──────────────────────────────────────
const layersToLoad = computed(() => {
  // 直接指定 geojsonFiles 優先（允許跨群組）
  if (props.slide.geojsonFiles && props.slide.geojsonFiles.length) {
    return props.slide.geojsonFiles.map(f => ({
      file: f.file,
      color: f.color || '#c0392b',
      label: f.label || fileToLabel(f.file),
      highlight: !!f.highlight,
    }))
  }

  const group = props.slide.mapGroup
  const cfg = GROUP_CONFIG[group]
  if (!cfg) return []

  const files = GROUP_FILES[group] || []
  const baseColor = cfg.color
  const highlightSet = new Set(props.slide.highlightFiles || [])
  const colorMap = props.slide.highlightColors || {}

  return files.map(f => {
    const isHighlit = highlightSet.has(f)
    const perColor = colorMap[f]
    return {
      file: `/geojson/Loire/${group}/${f}`,
      color: highlightSet.size > 0
        ? (isHighlit ? (perColor || '#f39c12') : baseColor + '44')
        : baseColor,
      label: fileToLabel(f),
      highlight: isHighlit,
      opacity: highlightSet.size > 0 && !isHighlit ? 0.12 : 0.55,
    }
  })
})

// ── 圖例項目 ─────────────────────────────────────────────────
const legendItems = computed(() => {
  if (!props.slide.mapGroup) return []
  const group = props.slide.mapGroup
  const cfg = GROUP_CONFIG[group]
  if (!cfg) return []

  const colorMap = props.slide.highlightColors || {}
  const highlights = props.slide.highlightFiles || []

  if (highlights.length && Object.keys(colorMap).length) {
    // 每個 highlight 獨立圖例
    return [
      { label: cfg.label, color: cfg.color },
      ...highlights.map(f => ({
        label: fileToLabel(f),
        color: colorMap[f] || '#f39c12',
      }))
    ]
  }
  const items = [{ label: cfg.label, color: cfg.color }]
  if (highlights.length) {
    items.push({ label: '重點產區', color: '#f39c12' })
  }
  return items
})

// ── 工具函式：GeoJSON 檔名 → 顯示名稱 ──────────────────────
function fileToLabel(file) {
  const base = file.split('/').pop().replace('.geojson', '')
  return base
    .replace(/-/g, ' ')
    .replace(/«\s*/g, '')
    .replace(/\s*»/g, '')
    .replace(/–/g, '-')
    .trim()
}

// ── 計算 BBox ────────────────────────────────────────────────
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
  mapLayersReady.value = false
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

  // 決定中心與縮放
  const group = props.slide.mapGroup
  const cfg = GROUP_CONFIG[group] || GROUP_CONFIG.overview
  const center = props.slide.center || cfg.center
  const zoom = props.slide.zoom || cfg.zoom

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
    console.warn('[LoireMapSlide] map error:', e?.error?.message)
  })

  mapInst.on('load', async () => {
    const layers = layersToLoad.value
    if (!layers.length) { loading.value = false; return }

    // 收集所有 bbox 以自動 fit
    const allPts = []

    const promises = layers.map(async (layer, idx) => {
      try {
        const res = await fetch(layer.file)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const gj = await res.json()

        const bbox = calcBbox(gj)
        if (bbox) allPts.push(...[[bbox[0], bbox[1]], [bbox[2], bbox[3]]])

        const srcId = `loire-src-${idx}`
        const fillId = `loire-fill-${idx}`
        const lineId = `loire-line-${idx}`

        mapInst.addSource(srcId, { type: 'geojson', data: gj })

        mapInst.addLayer({
          id: fillId,
          type: 'fill',
          source: srcId,
          paint: {
            'fill-color': layer.color,
            'fill-opacity': layer.opacity ?? 0.45,
          },
        })

        mapInst.addLayer({
          id: lineId,
          type: 'line',
          source: srcId,
          paint: {
            'line-color': layer.color,
            'line-width': layer.highlight ? 2.5 : 1.5,
            'line-opacity': 0.9,
          },
        })

        // Hover 互動
        mapInst.on('mousemove', fillId, (e) => {
          mapInst.getCanvas().style.cursor = 'pointer'
          hoveredAOC.value = layer.label
          const rect = mapContainer.value?.getBoundingClientRect()
          if (rect) {
            tooltipX.value = e.originalEvent.clientX - rect.left + 12
            tooltipY.value = e.originalEvent.clientY - rect.top - 10
          }
        })
        mapInst.on('mouseleave', fillId, () => {
          mapInst.getCanvas().style.cursor = ''
          hoveredAOC.value = null
        })
      } catch (err) {
        console.warn('[LoireMapSlide] failed to load', layer.file, err.message)
      }
    })

    await Promise.all(promises)

    // fitBounds 如果有多個產區
    if (props.slide.fitBounds !== false && allPts.length >= 2) {
      const minX = Math.min(...allPts.map(p => p[0]))
      const minY = Math.min(...allPts.map(p => p[1]))
      const maxX = Math.max(...allPts.map(p => p[0]))
      const maxY = Math.max(...allPts.map(p => p[1]))
      mapInst.fitBounds([[minX, minY], [maxX, maxY]], { padding: 40, duration: 500 })
    }

    loading.value = false
    mapLayersReady.value = true
    if (selectedAOC.value) updateLayerVisibility(selectedAOC.value)
  })
}

onMounted(() => { initMap() })
onBeforeUnmount(() => { destroyMap() })

watch(() => props.slide.mapGroup, () => { mapLayersReady.value = false; initMap() })
</script>

<style scoped>
.loire-map-slide {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 420px;
  background: #1a1a2e;
  border-radius: 12px;
  overflow: hidden;
}

.lms-header {
  padding: 14px 20px 10px;
  background: rgba(0,0,0,0.3);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  flex-shrink: 0;
}

.lms-title {
  margin: 0 0 4px;
  font-size: 1.25rem;
  font-weight: 700;
  color: #f0e6d3;
  letter-spacing: 0.02em;
}

.lms-desc {
  margin: 0;
  font-size: 0.9rem;
  color: rgba(240,230,211,0.7);
}

.lms-map-wrapper {
  position: relative;
  flex: 1;
  min-height: 320px;
}

.lms-mapbox {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.lms-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.55);
  color: #f0e6d3;
  gap: 12px;
  font-size: 0.95rem;
  z-index: 10;
}

.lms-spinner {
  width: 36px;
  height: 36px;
  border: 3px solid rgba(255,255,255,0.25);
  border-top-color: #f0e6d3;
  border-radius: 50%;
  animation: lms-spin 0.8s linear infinite;
}

@keyframes lms-spin {
  to { transform: rotate(360deg); }
}

.lms-error {
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

.lms-tooltip {
  position: absolute;
  background: rgba(20,20,40,0.92);
  color: #f0e6d3;
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

.lms-legend {
  position: absolute;
  bottom: 28px;
  left: 12px;
  background: rgba(10,10,25,0.82);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  padding: 8px 12px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.lms-legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.lms-legend-dot {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  flex-shrink: 0;
  border: 1px solid rgba(255,255,255,0.25);
}

.lms-legend-label {
  font-size: 0.8rem;
  color: #f0e6d3;
  white-space: nowrap;
}

/* ── AOC 按鈕列 ───────────────────────────────────────── */
.lms-aoc-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px 14px;
  background: rgba(0,0,0,0.25);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  flex-shrink: 0;
}

.lms-aoc-btn {
  padding: 4px 12px;
  border-radius: 20px;
  border: 1.5px solid currentColor;
  background: transparent;
  color: #f0e6d3;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s ease;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.lms-aoc-btn:hover {
  opacity: 0.85;
  transform: translateY(-1px);
}

.lms-aoc-btn.active {
  color: #fff !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.35);
}

/* ── AOC 詳情面板 ─────────────────────────────────────── */
.lms-aoc-panel {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 260px;
  background: rgba(10, 12, 28, 0.93);
  border: 1.5px solid #666;
  border-radius: 10px;
  padding: 14px 16px 12px;
  z-index: 25;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
}

.lms-panel-close {
  position: absolute;
  top: 8px;
  right: 10px;
  background: none;
  border: none;
  color: rgba(240,230,211,0.6);
  font-size: 0.95rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: color 0.15s;
}

.lms-panel-close:hover {
  color: #f0e6d3;
}

.lms-panel-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 6px;
  letter-spacing: 0.04em;
}

.lms-panel-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #f0e6d3;
  margin: 0 0 10px;
  padding-right: 20px;
  line-height: 1.3;
}

.lms-panel-rows {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.lms-panel-row {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.lms-panel-key {
  font-size: 0.72rem;
  color: rgba(240,230,211,0.55);
  white-space: nowrap;
  flex-shrink: 0;
  padding-top: 1px;
  min-width: 52px;
}

.lms-panel-val {
  font-size: 0.8rem;
  color: #f0e6d3;
  line-height: 1.4;
}

.lms-panel-style .lms-panel-val {
  font-style: italic;
  color: rgba(240,230,211,0.85);
}

.lms-panel-note {
  margin-top: 8px;
  font-size: 0.72rem;
  color: #f39c12;
  background: rgba(243,156,18,0.1);
  border: 1px solid rgba(243,156,18,0.25);
  border-radius: 6px;
  padding: 5px 8px;
  line-height: 1.4;
}

/* ── 面板出入動畫 ─────────────────────────────────────── */
.lms-panel-enter-active,
.lms-panel-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.lms-panel-enter-from,
.lms-panel-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
