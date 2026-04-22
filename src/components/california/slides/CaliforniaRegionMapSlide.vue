<template>
  <div class="ca-map-slide">
    <!-- 標題列 -->
    <div class="cms-header">
      <h2 class="cms-title">{{ slide.title }}</h2>
      <p v-if="slide.description" class="cms-desc">{{ slide.description }}</p>
    </div>

    <!-- 地圖區 -->
    <div class="cms-map-wrapper">
      <div ref="mapContainer" class="cms-mapbox"></div>

      <!-- 載入中 -->
      <div v-if="loading" class="cms-overlay">
        <div class="cms-spinner"></div>
        <span>地圖載入中…</span>
      </div>

      <!-- 錯誤 -->
      <div v-if="errorMsg" class="cms-error">
        <span>⚠️ {{ errorMsg }}</span>
      </div>

      <!-- Hover tooltip -->
      <div
        v-if="hoveredAVA"
        class="cms-tooltip"
        :style="{ left: tooltipX + 'px', top: tooltipY + 'px' }"
      >{{ hoveredAVA }}</div>

      <!-- 圖例 -->
      <div v-if="legendItems.length" class="cms-legend">
        <div v-for="item in legendItems" :key="item.label" class="cms-legend-item">
          <span class="cms-legend-dot" :style="{ background: item.color }"></span>
          <span class="cms-legend-label">{{ item.label }}</span>
        </div>
      </div>

      <!-- 開啟完整地圖 -->
      <button class="cms-fullmap-btn" @click="openFullMap" title="開啟完整互動地圖">
        🗺️ 開啟完整 AVA 地圖
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const props = defineProps({
  slide: { type: Object, required: true },
})

const router = useRouter()
const mapContainer = ref(null)
const loading = ref(true)
const errorMsg = ref(null)
const hoveredAVA = ref(null)
const tooltipX = ref(0)
const tooltipY = ref(0)
let map = null

// ── 群組顏色對照 ───────────────────────────────────────────
const GROUP_COLORS = {
  'Napa Valley':       '#7B1A1A',
  'Sonoma County':     '#C0392B',
  'Central Coast':     '#2980B9',
  'Mendocino & Lake':  '#27AE60',
  'Central Valley':    '#E67E22',
  'Sierra Foothills':  '#D35400',
  'South Coast':       '#8E44AD',
  'Northern CA':       '#16A085',
}

const GROUP_CENTERS = {
  'Napa Valley':      { center: [-122.35, 38.5],   zoom: 9.5  },
  'Sonoma County':    { center: [-122.8,  38.5],   zoom: 9.0  },
  'Central Coast':    { center: [-120.8,  35.8],   zoom: 7.5  },
  'Mendocino & Lake': { center: [-123.1,  39.3],   zoom: 8.5  },
  'Central Valley':   { center: [-120.0,  37.5],   zoom: 7.0  },
  'Sierra Foothills': { center: [-120.5,  38.5],   zoom: 8.0  },
  'South Coast':      { center: [-117.3,  34.0],   zoom: 8.0  },
  'Northern CA':      { center: [-122.5,  41.0],   zoom: 7.5  },
  'overview':         { center: [-120.5,  37.5],   zoom: 5.8  },
}

const legendItems = computed(() => {
  const items = []
  const group = props.slide.mapGroup
  if (group && group !== 'overview') {
    const color = GROUP_COLORS[group] || '#8B1A1A'
    items.push({ label: group, color })
    if (props.slide.highlightAVAs?.length) {
      items.push({ label: '重點 AVA', color: '#f39c12' })
    }
  } else {
    // overview: show all groups
    Object.entries(GROUP_COLORS).forEach(([label, color]) => {
      items.push({ label, color })
    })
  }
  return items
})

// ── BBox 計算 ────────────────────────────────────────────────
function calcBboxFromFeatures(features) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  function walk(g) {
    if (!g) return
    if (g.type === 'Point') { minX = Math.min(minX, g.coordinates[0]); minY = Math.min(minY, g.coordinates[1]); maxX = Math.max(maxX, g.coordinates[0]); maxY = Math.max(maxY, g.coordinates[1]) }
    else if (g.type === 'LineString' || g.type === 'MultiPoint') g.coordinates.forEach(c => { minX=Math.min(minX,c[0]); minY=Math.min(minY,c[1]); maxX=Math.max(maxX,c[0]); maxY=Math.max(maxY,c[1]) })
    else if (g.type === 'Polygon' || g.type === 'MultiLineString') g.coordinates.forEach(r => r.forEach(c => { minX=Math.min(minX,c[0]); minY=Math.min(minY,c[1]); maxX=Math.max(maxX,c[0]); maxY=Math.max(maxY,c[1]) }))
    else if (g.type === 'MultiPolygon') g.coordinates.forEach(p => p.forEach(r => r.forEach(c => { minX=Math.min(minX,c[0]); minY=Math.min(minY,c[1]); maxX=Math.max(maxX,c[0]); maxY=Math.max(maxY,c[1]) })))
    else if (g.type === 'GeometryCollection') g.geometries.forEach(walk)
  }
  features.forEach(f => walk(f.geometry))
  if (!isFinite(minX)) return null
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

  mapboxgl.accessToken = token
  const group = props.slide.mapGroup || 'overview'
  const cfg = GROUP_CENTERS[group] || GROUP_CENTERS['overview']

  const mapInst = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: cfg.center,
    zoom: cfg.zoom,
    attributionControl: false,
  })
  map = mapInst

  mapInst.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
  mapInst.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right')
  mapInst.on('error', (e) => console.warn('[CaliforniaRegionMapSlide] error:', e?.error?.message))

  mapInst.on('load', async () => {
    try {
      const res = await fetch('/california/california-ava-regions.geojson')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const fullGeojson = await res.json()

      const highlightSet = new Set(props.slide.highlightAVAs || [])

      // 如果指定群組，只顯示該群組的 features
      const groupFeatures = group === 'overview'
        ? fullGeojson.features
        : fullGeojson.features.filter(f => f.properties.group === group)

      if (!groupFeatures.length) throw new Error(`找不到「${group}」群組的產區資料`)

      // 分層：highlighted vs. normal
      const normalFeatures = groupFeatures.filter(f =>
        !highlightSet.size || !highlightSet.has(f.properties.name)
      )
      const highlightedFeatures = groupFeatures.filter(f =>
        highlightSet.has(f.properties.name)
      )

      const getColor = (feature) => {
        const g = feature.properties.group
        return GROUP_COLORS[g] || '#8B1A1A'
      }

      // 一般 features
      if (normalFeatures.length) {
        const normalGJ = { type: 'FeatureCollection', features: normalFeatures }
        mapInst.addSource('ca-normal', { type: 'geojson', data: normalGJ })
        mapInst.addLayer({
          id: 'ca-normal-fill',
          type: 'fill',
          source: 'ca-normal',
          paint: {
            'fill-color': [
              'match', ['get', 'group'],
              ...Object.entries(GROUP_COLORS).flat(),
              '#8B1A1A'
            ],
            'fill-opacity': highlightSet.size ? 0.15 : 0.3,
          },
        })
        mapInst.addLayer({
          id: 'ca-normal-line',
          type: 'line',
          source: 'ca-normal',
          paint: {
            'line-color': [
              'match', ['get', 'group'],
              ...Object.entries(GROUP_COLORS).flat(),
              '#8B1A1A'
            ],
            'line-width': 1.2,
            'line-opacity': highlightSet.size ? 0.4 : 0.8,
          },
        })
      }

      // 高亮 features
      if (highlightedFeatures.length) {
        const hlGJ = { type: 'FeatureCollection', features: highlightedFeatures }
        mapInst.addSource('ca-highlight', { type: 'geojson', data: hlGJ })
        mapInst.addLayer({
          id: 'ca-highlight-fill',
          type: 'fill',
          source: 'ca-highlight',
          paint: { 'fill-color': '#f39c12', 'fill-opacity': 0.45 },
        })
        mapInst.addLayer({
          id: 'ca-highlight-line',
          type: 'line',
          source: 'ca-highlight',
          paint: { 'line-color': '#e67e22', 'line-width': 2.5 },
        })
      }

      // Hover interaction (use all features source)
      const allSources = []
      if (normalFeatures.length) allSources.push('ca-normal-fill')
      if (highlightedFeatures.length) allSources.push('ca-highlight-fill')

      allSources.forEach(layerId => {
        mapInst.on('mousemove', layerId, (e) => {
          mapInst.getCanvas().style.cursor = 'pointer'
          hoveredAVA.value = e.features[0]?.properties?.name || null
          const rect = mapContainer.value?.getBoundingClientRect()
          if (rect) {
            tooltipX.value = e.originalEvent.clientX - rect.left + 12
            tooltipY.value = e.originalEvent.clientY - rect.top - 28
          }
        })
        mapInst.on('mouseleave', layerId, () => {
          mapInst.getCanvas().style.cursor = ''
          hoveredAVA.value = null
        })
      })

      // 自動縮放至群組範圍（若非 overview）
      if (group !== 'overview') {
        const targetFeatures = highlightedFeatures.length ? highlightedFeatures : groupFeatures
        const bbox = calcBboxFromFeatures(targetFeatures)
        if (bbox) {
          mapInst.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], {
            padding: 60, maxZoom: 11, duration: 1000,
          })
        }
      }
    } catch (e) {
      errorMsg.value = `地圖載入失敗（${e.message}）`
    } finally {
      loading.value = false
    }
  })
}

function openFullMap() {
  router.push('/california')
}

onMounted(async () => {
  await nextTick()
  initMap()
})

watch(() => [props.slide.mapGroup, props.slide.highlightAVAs], () => {
  nextTick(() => initMap())
})

onBeforeUnmount(() => destroyMap())
</script>

<style scoped>
.ca-map-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 20px 12px;
  box-sizing: border-box;
}

.cms-header {
  margin-bottom: 10px;
  flex-shrink: 0;
}
.cms-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 4px;
}
.cms-desc {
  font-size: 0.82rem;
  color: #555;
  margin: 0;
  line-height: 1.4;
}

.cms-map-wrapper {
  flex: 1;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  min-height: 300px;
}

.cms-mapbox {
  width: 100%;
  height: 100%;
  min-height: 300px;
}

.cms-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.85);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 0.9rem;
  color: #555;
  z-index: 5;
}
.cms-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #ddd;
  border-top-color: #8B1A1A;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.cms-error {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.9);
  color: #c0392b;
  font-size: 0.88rem;
  z-index: 5;
}

.cms-tooltip {
  position: absolute;
  background: rgba(0,0,0,0.78);
  color: white;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.78rem;
  pointer-events: none;
  z-index: 10;
  white-space: nowrap;
  max-width: 240px;
}

.cms-legend {
  position: absolute;
  bottom: 40px;
  left: 10px;
  background: rgba(255,255,255,0.92);
  border-radius: 8px;
  padding: 8px 12px;
  z-index: 4;
  max-height: 180px;
  overflow-y: auto;
}
.cms-legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  color: #333;
  margin-bottom: 3px;
}
.cms-legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.cms-fullmap-btn {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(139,26,26,0.9);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  z-index: 4;
  transition: background 0.15s;
}
.cms-fullmap-btn:hover {
  background: rgba(139,26,26,1);
}
</style>
