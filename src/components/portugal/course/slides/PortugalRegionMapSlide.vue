<template>
  <div class="pt-map-slide">
    <div class="ptms-header">
      <h2 class="ptms-title">{{ slide.title }}</h2>
      <p v-if="slide.description" class="ptms-desc">{{ slide.description }}</p>
    </div>
    <div class="ptms-map-wrapper">
      <div ref="mapContainer" class="ptms-mapbox"></div>

      <div v-if="loading" class="ptms-overlay">
        <div class="ptms-spinner"></div>
        <span>地圖載入中…</span>
      </div>

      <div v-if="errorMsg" class="ptms-error">
        <span>⚠️ {{ errorMsg }}</span>
      </div>

      <!-- 開啟完整互動地圖按鈕 -->
      <button
        v-if="!loading && !errorMsg && (slide.mapRegion || slide.mapRegions?.length)"
        class="ptms-fullmap-btn"
        @click="emit('openFullMap')"
        title="開啟完整互動地圖"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        🗺️ 開啟完整互動地圖
      </button>

      <!-- 圖例 -->
      <div v-if="legendItems.length" class="ptms-legend">
        <div v-for="item in legendItems" :key="item.label" class="ptms-legend-item">
          <span class="ptms-legend-dot" :style="{ background: item.color }"></span>
          <span class="ptms-legend-label">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const props = defineProps({
  slide: { type: Object, required: true },
})
const emit = defineEmits(['openFullMap'])

const mapContainer = ref(null)
const loading      = ref(true)
const errorMsg     = ref(null)
let map = null

const HIGHLIGHT_COLOR = '#f39c12'
const CONTEXT_COLOR   = '#7f8c8d'

// 目標產區名稱清單（支援 mapRegion 字串 或 mapRegions 陣列）
const targetNames = computed(() => {
  if (props.slide.mapRegions?.length) return props.slide.mapRegions
  if (props.slide.mapRegion)          return [props.slide.mapRegion]
  return []
})

// 圖例
const legendItems = computed(() => {
  const items = []
  if (targetNames.value.length) {
    items.push({ label: '重點產區', color: HIGHLIGHT_COLOR })
    items.push({ label: '其他葡萄牙產區', color: CONTEXT_COLOR + '80' })
  }
  return items
})

// ── Bbox 工具 ─────────────────────────────────────────────────
function getCoords(g, out) {
  if (!g) return
  if (g.type === 'Point') out.push(g.coordinates)
  else if (g.type === 'LineString' || g.type === 'MultiPoint') g.coordinates.forEach(c => out.push(c))
  else if (g.type === 'Polygon' || g.type === 'MultiLineString') g.coordinates.forEach(r => r.forEach(c => out.push(c)))
  else if (g.type === 'MultiPolygon') g.coordinates.forEach(p => p.forEach(r => r.forEach(c => out.push(c))))
  else if (g.type === 'GeometryCollection') g.geometries.forEach(s => getCoords(s, out))
}

function calcBbox(features) {
  const pts = []
  features.forEach(f => getCoords(f.geometry, pts))
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
    || (typeof window !== 'undefined' && (window.__MAPBOX_TOKEN || localStorage?.getItem('VITE_MAPBOX_TOKEN')))
  if (!token) {
    errorMsg.value = '未設定 Mapbox Token'
    loading.value = false
    return
  }

  const names = targetNames.value
  if (!names.length) {
    errorMsg.value = '未指定產區名稱'
    loading.value = false
    return
  }

  mapboxgl.accessToken = token

  const mapInst = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: [-8.0, 39.5],
    zoom: 5.5,
    attributionControl: false,
  })
  map = mapInst

  mapInst.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
  mapInst.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right')

  mapInst.on('error', e => {
    console.warn('[PortugalRegionMapSlide] map error:', e?.error?.message)
  })

  mapInst.on('load', async () => {
    try {
      // 決定從哪個 GeoJSON 讀取 — 優先自訂，再試 DOC，找不到再試 IGP
      const docUrl = '/portugal/doc_regions.geojson'
      const igpUrl = '/portugal/igp_regions.geojson'
      const customUrl = props.slide.geojsonUrl

      let allFeatures = []

      // 一律載入 DOC + IGP 作為背景脈絡
      const [docRes, igpRes] = await Promise.all([fetch(docUrl), fetch(igpUrl)])
      const docData = docRes.ok ? await docRes.json() : { features: [] }
      const igpData = igpRes.ok ? await igpRes.json() : { features: [] }
      allFeatures = [...(docData.features || []), ...(igpData.features || [])]

      // 如有自訂 URL 額外合併（避免遺漏）
      if (customUrl && customUrl !== docUrl && customUrl !== igpUrl) {
        const customRes = await fetch(customUrl)
        if (customRes.ok) {
          const customData = await customRes.json()
          allFeatures = [...allFeatures, ...(customData.features || [])]
        }
      }

      // 找出要高亮的目標 feature
      const nameSet = new Set(names)
      const targetFeatures  = allFeatures.filter(f => nameSet.has(f.properties?.name))
      const contextFeatures = allFeatures.filter(f => !nameSet.has(f.properties?.name))

      if (!targetFeatures.length) {
        throw new Error(`找不到產區「${names.join('、')}」`)
      }

      // ── 背景脈絡層（全部非目標產區，暗色低透明） ──
      if (contextFeatures.length) {
        mapInst.addSource('pt-context', {
          type: 'geojson',
          data: { type: 'FeatureCollection', features: contextFeatures }
        })
        mapInst.addLayer({
          id: 'pt-context-fill',
          type: 'fill',
          source: 'pt-context',
          paint: { 'fill-color': CONTEXT_COLOR, 'fill-opacity': 0.12 }
        })
        mapInst.addLayer({
          id: 'pt-context-line',
          type: 'line',
          source: 'pt-context',
          paint: { 'line-color': CONTEXT_COLOR, 'line-width': 0.8, 'line-opacity': 0.5 }
        })
      }

      // ── 高亮層（目標產區，橘色）──
      mapInst.addSource('pt-region', {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: targetFeatures }
      })
      mapInst.addLayer({
        id: 'pt-region-fill',
        type: 'fill',
        source: 'pt-region',
        paint: { 'fill-color': HIGHLIGHT_COLOR, 'fill-opacity': 0.4 }
      })
      mapInst.addLayer({
        id: 'pt-region-line',
        type: 'line',
        source: 'pt-region',
        paint: { 'line-color': HIGHLIGHT_COLOR, 'line-width': 2.5, 'line-opacity': 0.95 }
      })

      // fitBounds 至目標產區
      const bbox = calcBbox(targetFeatures)
      if (bbox) {
        const isIsland = targetFeatures.some(f => f.properties?.island === true)
          || names.some(n => ['Madeira', 'Açores', 'Graciosa', 'Biscoitos', 'Pico'].includes(n))
        mapInst.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], {
          padding: isIsland ? 60 : 80,
          maxZoom: 11,
          duration: 1200,
        })
      }
    } catch (e) {
      errorMsg.value = `產區地圖載入失敗（${e.message}）`
      console.error('[PortugalRegionMapSlide]', e)
    } finally {
      loading.value = false
    }
  })
}

onMounted(async () => {
  await nextTick()
  initMap()
})

watch(() => [props.slide.mapRegion, props.slide.mapRegions], () => {
  nextTick(() => initMap())
}, { deep: true })

onBeforeUnmount(() => destroyMap())
</script>

<style scoped>
.pt-map-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 22px 28px 16px;
  box-sizing: border-box;
}

.ptms-header {
  flex-shrink: 0;
  margin-bottom: 12px;
}

.ptms-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 4px;
  border-bottom: 3px solid #006600;
  padding-bottom: 8px;
}

.ptms-desc {
  font-size: 0.88rem;
  color: #666;
  margin: 4px 0 0;
}

.ptms-map-wrapper {
  flex: 1;
  min-height: 0;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: #1a1a2e;
}

.ptms-mapbox {
  width: 100%;
  height: 100%;
}

.ptms-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #fff;
  font-size: 0.9rem;
}

.ptms-spinner {
  width: 36px;
  height: 36px;
  border: 3px solid rgba(255, 255, 255, 0.25);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.ptms-error {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e74c3c;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 16px;
  text-align: center;
}

.ptms-fullmap-btn {
  position: absolute;
  bottom: 12px;
  left: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 20px;
  padding: 7px 14px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #2c3e50;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  transition: background 0.15s, transform 0.1s;
  z-index: 10;
}

.ptms-fullmap-btn:hover {
  background: #fff;
  transform: translateY(-1px);
}

.ptms-legend {
  position: absolute;
  bottom: 46px;
  left: 12px;
  background: rgba(10, 20, 10, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 8px 12px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ptms-legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ptms-legend-dot {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.ptms-legend-label {
  font-size: 0.78rem;
  color: #e8f5e9;
  white-space: nowrap;
}

@media (max-width: 600px) {
  .pt-map-slide {
    padding: 14px 14px 10px;
  }
  .ptms-title {
    font-size: 1.2rem;
  }
}
</style>
