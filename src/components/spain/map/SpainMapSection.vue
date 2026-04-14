<template>
  <section class="spain-map-section">

    <!-- 全螢幕地圖 -->
    <div ref="mapContainer" class="map"></div>

    <!-- Header -->
    <div class="map-header">
      <div class="map-header-left">
        <button class="map-hdr-btn" @click="emit('back')">☰ 產區</button>
        <button class="map-hdr-btn ghost" @click="router.push('/')">🏠 首頁</button>
      </div>
      <div class="map-header-title">
        <span class="region-icon">{{ region.icon }}</span>
        <span class="region-name">{{ region.name }}</span>
        <span class="region-sub">{{ region.nameEs }}</span>
      </div>
    </div>

    <!-- 資訊卡 -->
    <div v-if="activeInfo" class="map-info-bar" :class="{ collapsed: infoCollapsed }">
      <div class="info-header-bar">
        <div class="info-title">
          <span class="info-type-dot" :style="{ background: typeColor(activeInfo.typeLabel) }"></span>
          <span class="info-name">{{ activeInfo.calDsNom }}</span>
        </div>
        <div class="info-actions">
          <button class="info-btn" @click="infoCollapsed = !infoCollapsed" title="收合">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"
              :style="{ transform: infoCollapsed ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.3s' }">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
          <button class="info-btn" @click="resetView" title="重置">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 2v6h6"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/>
            </svg>
          </button>
        </div>
      </div>

      <transition name="info-expand">
        <div v-show="!infoCollapsed" class="info-content">
          <!-- 類型標籤 -->
          <div class="info-row">
            <span class="info-type-badge" :class="activeInfo.typeClass">{{ activeInfo.typeLabel }}</span>
            <span v-if="activeInfo.appData?.autonomia" class="info-autonomia">{{ activeInfo.appData.autonomia }}</span>
          </div>

          <!-- 酒款類型 -->
          <div v-if="activeInfo.appData?.styles?.length" class="info-styles">
            <span
              v-for="s in activeInfo.appData.styles"
              :key="s"
              class="style-tag"
              :style="styleTagColor(s)"
            >{{ s }}</span>
          </div>

          <!-- 葡萄品種 -->
          <div v-if="activeInfo.appData?.grapes?.length" class="info-section">
            <div class="info-section-label">主要葡萄品種</div>
            <div class="grape-list">
              <span v-for="g in activeInfo.appData.grapes" :key="g" class="grape-chip">{{ g }}</span>
            </div>
          </div>

          <!-- 描述 -->
          <div v-if="activeInfo.appData?.description" class="info-description">
            {{ activeInfo.appData.description }}
          </div>

          <!-- 無資料時 -->
          <div v-if="!activeInfo.appData" class="info-no-data">
            <span class="info-zon">{{ activeInfo.zonDsNom }}</span>
            <span class="info-type-text">{{ activeInfo.tprDsDes }}</span>
          </div>
        </div>
      </transition>
    </div>

    <!-- 產區清單抽屜 -->
    <transition name="sheet-fade">
      <div v-if="drawerOpen" class="aoc-backdrop" @click.self="drawerOpen = false">
        <div class="aoc-drawer">
          <div class="aoc-handle"></div>
          <div class="drawer-header">
            <span>{{ region.name }} 法定產區 ({{ filteredList.length }})</span>
            <button class="drawer-close" @click="drawerOpen = false">✕</button>
          </div>
          <div class="drawer-search-wrap">
            <span class="search-icon">🔍</span>
            <input v-model="search" class="search-input" placeholder="搜尋產區…" />
          </div>
          <div class="filter-tabs">
            <button
              v-for="tab in typeTabs"
              :key="tab.value"
              class="filter-tab"
              :class="{ active: typeFilter === tab.value }"
              @click="typeFilter = tab.value"
            >{{ tab.label }}</button>
          </div>
          <div class="appellation-list">
            <div
              v-for="item in filteredList"
              :key="item.id"
              class="app-item"
              :class="{ active: activeInfo?.id === item.id }"
              @click="selectFromList(item)"
            >
              <span class="app-type-badge" :class="item.typeClass">{{ item.typeLabel }}</span>
              <div class="app-text">
                <span class="app-name">{{ item.calDsNom }}</span>
                <span class="app-styles">{{ (item.appData?.styles || []).join(' · ') }}</span>
              </div>
            </div>
            <div v-if="filteredList.length === 0" class="no-results">無符合產區</div>
          </div>
        </div>
      </div>
    </transition>

    <!-- 圖例 (左下) -->
    <div v-if="mapReady" class="map-legend">
      <div class="legend-title">產區認證</div>
      <div v-for="t in legendTypes" :key="t.label" class="legend-item">
        <span class="legend-dot" :style="{ background: t.color }"></span>
        <span>{{ t.label }}</span>
      </div>
    </div>

    <!-- 底部工具列 -->
    <div v-if="mapReady" class="mobile-grid-buttons">
      <button class="m-grid-btn" :class="{ active: drawerOpen }" @click="drawerOpen = !drawerOpen">
        <span class="m-grid-icon">產</span>
        <span class="m-grid-text">產區</span>
      </button>
      <button class="m-grid-btn" :class="{ active: showProvinces }" @click="toggleProvinces">
        <span class="m-grid-icon">省</span>
        <span class="m-grid-text">省界</span>
      </button>
      <button class="m-grid-btn" :class="{ active: is3D }" @click="toggle3D">
        <span class="m-grid-icon">3D</span>
        <span class="m-grid-text">{{ is3D ? '2D' : '3D' }}</span>
      </button>
      <button class="m-grid-btn" :class="{ active: activeInfo && !infoCollapsed }" @click="toggleInfo">
        <span class="m-grid-icon">資</span>
        <span class="m-grid-text">資訊</span>
      </button>
    </div>

    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
    <div v-if="mapError" class="map-error">{{ mapError }}</div>

  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const props = defineProps({
  region: { type: Object, required: true }
})
const emit = defineEmits(['back'])
const router = useRouter()

// ── State ───────────────────────────────────────────────────────
const mapContainer = ref(null)
const mapReady = ref(false)
const isLoading = ref(true)
const mapError = ref(null)
const infoCollapsed = ref(false)
const drawerOpen = ref(false)
const showProvinces = ref(true)
const is3D = ref(false)
const search = ref('')
const typeFilter = ref('all')
const activeInfo = ref(null)
const allRegions = ref([])    // all 96 features as normalized objects
const appellations = ref([])  // spain-appellations.json lookup

let map = null
let hoveredId = null
const allRegionsMap = new Map()   // Map<featureIdx → normalizedInfo> ，供 click 查詢用

// ── Type helpers ─────────────────────────────────────────────────
const TYPE_MAP = {
  'Denominación de Origen Calificada':  { label: 'DOCa', cls: 'doca', color: '#e74c3c' },
  'Denominación de Origen':             { label: 'DO',   cls: 'do',   color: '#27ae60' },
  'Denominación de Origen Protegida':   { label: 'DOP',  cls: 'dop',  color: '#e67e22' },
  'Vino de Calidad':                    { label: 'VC',   cls: 'vc',   color: '#3498db' },
  'Vino de Pago':                       { label: 'VP',   cls: 'vp',   color: '#9b59b6' },
}

const legendTypes = [
  { label: 'DOCa', color: '#e74c3c' },
  { label: 'DO',   color: '#27ae60' },
  { label: 'DOP',  color: '#e67e22' },
  { label: 'VC',   color: '#3498db' },
  { label: 'VP',   color: '#9b59b6' },
]
function typeColor(label) {
  return legendTypes.find(t => t.label === label)?.color || '#999'
}

function typeClass(tpr) {
  return TYPE_MAP[tpr]?.cls || 'do'
}

function typeLabel(tpr) {
  return TYPE_MAP[tpr]?.label || 'DO'
}

// ── Style tag colors ──────────────────────────────────────────────
function styleTagColor(style) {
  const map = {
    '紅酒':  { background: '#8B0000', color: '#fff' },
    '白酒':  { background: '#f5e28a', color: '#555' },
    '粉紅酒':{ background: '#ffb6c1', color: '#333' },
    '甜酒':  { background: '#FFD700', color: '#333' },
    '氣泡酒':{ background: '#667eea', color: '#fff' },
    '加強酒':{ background: '#7b341e', color: '#fff' },
    '橘酒':  { background: '#e67e22', color: '#fff' },
  }
  return map[style] || { background: '#999', color: '#fff' }
}

// ── Computed ──────────────────────────────────────────────────────
const typeTabs = [
  { value: 'all',  label: '全部' },
  { value: 'doca', label: 'DOCa' },
  { value: 'do',   label: 'DO' },
  { value: 'dop',  label: 'DOP' },
  { value: 'vc',   label: 'VC' },
  { value: 'vp',   label: 'VP' },
]

const filteredList = computed(() => {
  let list = allRegions.value
  if (typeFilter.value !== 'all') {
    list = list.filter(r => r.typeClass === typeFilter.value)
  }
  if (search.value.trim()) {
    const q = search.value.trim().toLowerCase()
    list = list.filter(r =>
      r.calDsNom.toLowerCase().includes(q) ||
      r.zonDsNom.toLowerCase().includes(q) ||
      (r.appData?.autonomia || '').toLowerCase().includes(q) ||
      (r.appData?.grapes || []).some(g => g.toLowerCase().includes(q))
    )
  }
  return list
})

// ── Data loading ──────────────────────────────────────────────────
async function loadAppellations() {
  const res = await fetch('/spain/spain-appellations.json')
  const data = await res.json()
  appellations.value = data
}

function lookupAppellation(zonDsNom) {
  return appellations.value.find(a => a.zonName === zonDsNom) || null
}

function normalizeFeature(f, idx) {
  const p = f.properties
  const tpr = p.TPR_DS_DES || ''
  return {
    id: idx,
    zonDsNom: p.ZON_DS_NOM || '',
    calDsNom: p.CAL_DS_NOM || p.ZON_DS_NOM || '',
    tprDsDes: tpr,
    typeLabel: typeLabel(tpr),
    typeClass: typeClass(tpr),
    appData: null, // filled after appellations loaded
  }
}

// ── Map init ──────────────────────────────────────────────────────
onMounted(async () => {
  try {
    await nextTick()          // 確保容器 DOM 尺寸就緒
    await loadAppellations()
    await initMap()
  } catch (e) {
    mapError.value = '地圖載入失敗：' + e.message
    isLoading.value = false
  }
})

onUnmounted(() => {
  if (map) { map.remove(); map = null }
})

function initMap() {
  return new Promise((resolve, reject) => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

    const center = props.region.center || [40.0, -3.5]
    const zoom   = props.region.zoom   || 5.5

    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center,
      zoom,
      maxZoom: 14,
      minZoom: 4,
    })

    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    map.on('load', async () => {
      map.resize()  // 確保 canvas 符合容器實際尺寸
      try {
        await addLayers()
      } catch (e) {
        console.error('[SpainMap] addLayers error:', e)
        mapError.value = '圖層載入失敗：' + e.message
      }
      isLoading.value = false
      mapReady.value = true
      resolve()
    })

    map.on('error', (e) => {
      console.error('[SpainMap] map error:', e)
      mapError.value = '地圖錯誤：' + (e.error?.message || '未知錯誤')
      reject(e)
    })
  })
}

async function addLayers() {
  // Load data in parallel
  const [provinceRes, wineRes] = await Promise.all([
    fetch('/spain/spain-provinces.geojson'),
    fetch('/spain/spain-wine-regions.geojson'),
  ])
  const provinceGeo = await provinceRes.json()
  const wineGeo = await wineRes.json()

  // 用 appellations 查出每個 feature 的 autonomiaId，寫回 GeoJSON properties 
  // （這樣 Mapbox filter 才能直接用 ['get', 'AUTONOMIA_ID']）
  allRegionsMap.clear()
  wineGeo.features.forEach((f, i) => {
    const appData = lookupAppellation(f.properties.ZON_DS_NOM)
    f.properties.AUTONOMIA_ID = appData?.autonomiaId || ''
    const n = normalizeFeature(f, i)
    n.appData = appData
    allRegionsMap.set(i, n)
  })

  // 依當前 region 的 filterAutonomiaId 設定抽屜清單
  const filterAuto = props.region.filterAutonomiaId
  if (filterAuto) {
    allRegions.value = [...allRegionsMap.values()].filter(r =>
      r.appData?.autonomiaId === filterAuto
    )
  } else {
    allRegions.value = [...allRegionsMap.values()]
  }

  // ── Province layer（衛星圖上只顯示白色外框）──────────────────
  map.addSource('provinces', {
    type: 'geojson',
    data: provinceGeo,
  })

  map.addLayer({
    id: 'provinces-line',
    type: 'line',
    source: 'provinces',
    paint: {
      'line-color': 'rgba(255,255,255,0.7)',
      'line-width': 1.2,
      'line-dasharray': [3, 2],
    },
  })

  // ── Wine regions layer ──────────────────────────────────────
  map.addSource('wine-regions', {
    type: 'geojson',
    data: wineGeo,
    generateId: true,
  })

  // Fill layer — color by TPR_DS_DES
  map.addLayer({
    id: 'wine-regions-fill',
    type: 'fill',
    source: 'wine-regions',
    paint: {
      'fill-color': [
        'match', ['get', 'TPR_DS_DES'],
        'Denominación de Origen Calificada', '#e74c3c',
        'Denominación de Origen Protegida',  '#e67e22',
        'Vino de Calidad',  '#3498db',
        'Vino de Pago',     '#9b59b6',
        '#27ae60',
      ],
      'fill-opacity': [
        'case',
        ['boolean', ['feature-state', 'hover'], false], 0.75,
        0.55,
      ],
    },
  })

  // Outline layer（移除重複的 line-color key）
  map.addLayer({
    id: 'wine-regions-line',
    type: 'line',
    source: 'wine-regions',
    paint: {
      'line-color': [
        'match', ['get', 'TPR_DS_DES'],
        'Denominación de Origen Calificada', '#ff6b6b',
        'Denominación de Origen Protegida',  '#ffa94d',
        'Vino de Calidad',  '#74c0fc',
        'Vino de Pago',     '#da77f2',
        '#69db7c',
      ],
      'line-width': [
        'case',
        ['boolean', ['feature-state', 'hover'], false], 2.5,
        1.6,
      ],
    },
  })

  // ── 指定自治區：套用圖層 filter ＋ fitBounds ─────────────────
  if (filterAuto) {
    const filterExpr = ['==', ['get', 'AUTONOMIA_ID'], filterAuto]
    map.setFilter('wine-regions-fill', filterExpr)
    map.setFilter('wine-regions-line', filterExpr)

    // 計算該自治區所有 feature 的實際 bbox，然後 fitBounds
    const filtered = wineGeo.features.filter(f =>
      f.properties.AUTONOMIA_ID === filterAuto
    )
    if (filtered.length > 0) {
      const allCoords = filtered.flatMap(f => {
        if (!f.geometry) return []
        if (f.geometry.type === 'Polygon')      return f.geometry.coordinates.flat(1)
        if (f.geometry.type === 'MultiPolygon') return f.geometry.coordinates.flat(2)
        return []
      })
      const lngs = allCoords.map(c => c[0]).filter(v => typeof v === 'number' && isFinite(v))
      const lats = allCoords.map(c => c[1]).filter(v => typeof v === 'number' && isFinite(v))
      if (lngs.length > 0) {
        const minLng = lngs.reduce((a, b) => a < b ? a : b)
        const maxLng = lngs.reduce((a, b) => a > b ? a : b)
        const minLat = lats.reduce((a, b) => a < b ? a : b)
        const maxLat = lats.reduce((a, b) => a > b ? a : b)
        map.fitBounds(
          [[minLng, minLat], [maxLng, maxLat]],
          { padding: 80, maxZoom: 11, duration: 800 }
        )
      }
    }
  }

  // ── Hover interaction ───────────────────────────────────────
  map.on('mousemove', 'wine-regions-fill', (e) => {
    if (e.features.length > 0) {
      if (hoveredId !== null) {
        map.setFeatureState({ source: 'wine-regions', id: hoveredId }, { hover: false })
      }
      hoveredId = e.features[0].id
      map.setFeatureState({ source: 'wine-regions', id: hoveredId }, { hover: true })
      map.getCanvas().style.cursor = 'pointer'
    }
  })

  map.on('mouseleave', 'wine-regions-fill', () => {
    if (hoveredId !== null) {
      map.setFeatureState({ source: 'wine-regions', id: hoveredId }, { hover: false })
    }
    hoveredId = null
    map.getCanvas().style.cursor = ''
  })

  // ── Click interaction ───────────────────────────────────────
  map.on('click', 'wine-regions-fill', (e) => {
    const feat = e.features[0]
    const info = allRegionsMap.get(feat.id)   // 用 Map 查，不依賴 allRegions 陣列 index
    if (info) {
      activeInfo.value = info
      infoCollapsed.value = false
    }
  })

  // click on empty area clears selection
  map.on('click', (e) => {
    const features = map.queryRenderedFeatures(e.point, { layers: ['wine-regions-fill'] })
    if (features.length === 0) activeInfo.value = null
  })
}

// ── Actions ───────────────────────────────────────────────────────
function resetView() {
  if (!map) return
  map.flyTo({
    center: props.region.center || [40.0, -3.5],
    zoom:   props.region.zoom   || 5.5,
    duration: 800,
  })
}

function toggleProvinces() {
  showProvinces.value = !showProvinces.value
  if (!map) return
  const vis = showProvinces.value ? 'visible' : 'none'
  map.setLayoutProperty('provinces-line', 'visibility', vis)
}

function toggle3D() {
  is3D.value = !is3D.value
  if (!map) return
  if (is3D.value) {
    if (!map.getSource('mapbox-dem')) {
      map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 14,
      })
    }
    map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 })
    map.setPitch(45)
  } else {
    map.setTerrain(null)
    map.setPitch(0)
  }
}

function selectFromList(item) {
  activeInfo.value = item
  infoCollapsed.value = false
  drawerOpen.value = false

  // Fly to feature bbox
  if (!map) return
  const src = map.getSource('wine-regions')
  if (!src) return

  const features = map.querySourceFeatures('wine-regions')
  const feat = features.find(f => f.id === item.id)
  if (feat?.geometry) {
    const coords = feat.geometry.type === 'Polygon'
      ? feat.geometry.coordinates[0]
      : feat.geometry.coordinates.flat(2)
    if (coords.length) {
      const lngs = coords.map(c => c[0])
      const lats = coords.map(c => c[1])
      const bounds = [[Math.min(...lngs), Math.min(...lats)], [Math.max(...lngs), Math.max(...lats)]]
      map.fitBounds(bounds, { padding: 80, maxZoom: 12, duration: 800 })
    }
  }
}

function toggleInfo() {
  if (!activeInfo.value) return
  infoCollapsed.value = !infoCollapsed.value
}
</script>

<style scoped>
.spain-map-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #eee;
}

.map {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* ── Header ───────────────────────────────────────────────── */
.map-header {
  position: absolute;
  top: 0; left: 0; right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem 1rem;
  background: rgba(255,255,255,0.88);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0,0,0,0.08);
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
}

.map-header-left {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.map-hdr-btn {
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1.5px solid #d14;
  background: #fff;
  color: #d14;
  cursor: pointer;
  transition: all 0.15s;
}
.map-hdr-btn:hover { background: #d14; color: #fff; }
.map-hdr-btn.ghost { border-color: #888; color: #555; }
.map-hdr-btn.ghost:hover { background: #555; color: #fff; border-color: #555; }

.map-header-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
  overflow: hidden;
}

.region-icon { font-size: 1.3rem; }

.region-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.region-sub {
  font-size: 0.8rem;
  color: #888;
  white-space: nowrap;
}

/* ── Info bar ─────────────────────────────────────────────── */
.map-info-bar {
  position: absolute;
  bottom: 4.5rem;
  left: 1rem;
  right: 1rem;
  max-width: 480px;
  z-index: 20;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.2);
  transition: transform 0.3s;
}

@media (min-width: 768px) {
  .map-info-bar {
    right: auto;
    width: 380px;
  }
}

.info-header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background: linear-gradient(135deg, #c0392b, #8e44ad);
  color: white;
}

.info-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
}

.info-type-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 2px solid rgba(255,255,255,0.6);
}

.info-name {
  font-size: 0.95rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info-actions {
  display: flex;
  gap: 0.3rem;
  flex-shrink: 0;
}

.info-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255,255,255,0.22);
  border: 1px solid rgba(255,255,255,0.4);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}
.info-btn:hover { background: rgba(255,255,255,0.38); }

.info-content {
  padding: 0.9rem 1rem;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-height: 35vh;
  overflow-y: auto;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.info-type-badge {
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
}
.info-type-badge.doca { background: #e74c3c; color: #fff; }
.info-type-badge.do   { background: #27ae60; color: #fff; }
.info-type-badge.dop  { background: #e67e22; color: #fff; }
.info-type-badge.vc   { background: #3498db; color: #fff; }
.info-type-badge.vp   { background: #9b59b6; color: #fff; }

.info-autonomia {
  font-size: 0.82rem;
  color: #666;
}

.info-styles {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.style-tag {
  padding: 0.18rem 0.55rem;
  border-radius: 12px;
  font-size: 0.78rem;
  font-weight: 600;
}

.info-section {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.info-section-label {
  font-size: 0.75rem;
  color: #888;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.grape-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.grape-chip {
  padding: 0.18rem 0.55rem;
  background: #f2f4f8;
  border-radius: 12px;
  font-size: 0.78rem;
  color: #444;
}

.info-description {
  font-size: 0.84rem;
  color: #555;
  line-height: 1.55;
}

.info-no-data {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.info-zon { font-size: 0.9rem; font-weight: 600; color: #333; }
.info-type-text { font-size: 0.82rem; color: #777; }

/* collapsed */
.map-info-bar.collapsed .info-content { display: none; }

/* expand animation */
.info-expand-enter-active, .info-expand-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}
.info-expand-enter-from, .info-expand-leave-to {
  max-height: 0;
  opacity: 0;
}
.info-expand-enter-to, .info-expand-leave-from {
  max-height: 500px;
  opacity: 1;
}

/* ── Drawer ─────────────────────────────────────────────────── */
.aoc-backdrop {
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0,0,0,0.35);
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.aoc-drawer {
  background: white;
  border-radius: 20px 20px 0 0;
  width: 100%;
  max-width: 520px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 -8px 32px rgba(0,0,0,0.2);
}

.aoc-handle {
  width: 40px;
  height: 4px;
  background: #ddd;
  border-radius: 2px;
  margin: 0.6rem auto 0.2rem;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1rem 0;
  font-size: 0.95rem;
  font-weight: 700;
  color: #333;
}

.drawer-close {
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: #888;
  padding: 0.2rem 0.4rem;
  border-radius: 50%;
  transition: background 0.15s;
}
.drawer-close:hover { background: #f0f0f0; color: #333; }

.drawer-search-wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.6rem 1rem;
  padding: 0.5rem 0.8rem;
  background: #f5f5f5;
  border-radius: 10px;
}

.search-icon { font-size: 0.9rem; }
.search-input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  font-size: 0.88rem;
  color: #333;
}

.filter-tabs {
  display: flex;
  gap: 0.4rem;
  padding: 0 1rem 0.5rem;
  overflow-x: auto;
}

.filter-tab {
  padding: 0.25rem 0.7rem;
  border-radius: 20px;
  border: 1.5px solid #ddd;
  background: #fff;
  font-size: 0.8rem;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s;
}
.filter-tab.active {
  border-color: #c0392b;
  background: #c0392b;
  color: #fff;
  font-weight: 700;
}

.appellation-list {
  overflow-y: auto;
  flex: 1;
  padding: 0 0.5rem 1rem;
}

.app-item {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  padding: 0.6rem 0.6rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s;
}
.app-item:hover { background: #f8f8f8; }
.app-item.active { background: #fef0f0; }

.app-type-badge {
  padding: 0.15rem 0.5rem;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 0.1rem;
}
.app-type-badge.doca { background: #e74c3c; color: #fff; }
.app-type-badge.do   { background: #27ae60; color: #fff; }
.app-type-badge.dop  { background: #e67e22; color: #fff; }
.app-type-badge.vc   { background: #3498db; color: #fff; }
.app-type-badge.vp   { background: #9b59b6; color: #fff; }

.app-text { display: flex; flex-direction: column; gap: 0.1rem; }
.app-name { font-size: 0.88rem; font-weight: 600; color: #222; }
.app-styles { font-size: 0.77rem; color: #888; }
.no-results { text-align: center; padding: 2rem; color: #aaa; font-size: 0.9rem; }

/* Sheet fade */
.sheet-fade-enter-active, .sheet-fade-leave-active {
  transition: opacity 0.22s ease;
}
.sheet-fade-enter-from, .sheet-fade-leave-to { opacity: 0; }

/* ── Legend ──────────────────────────────────────────────────── */
.map-legend {
  position: absolute;
  bottom: 4.5rem;
  right: 1rem;
  z-index: 10;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(6px);
  border-radius: 12px;
  padding: 0.6rem 0.8rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
  font-size: 0.78rem;
}

.legend-title {
  font-size: 0.7rem;
  font-weight: 700;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.4rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.15rem 0;
  color: #444;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  flex-shrink: 0;
}

/* ── Bottom toolbar ──────────────────────────────────────────── */
.mobile-grid-buttons {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  z-index: 20;
  display: flex;
  background: rgba(255,255,255,0.94);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0,0,0,0.07);
  padding-bottom: env(safe-area-inset-bottom);
}

.m-grid-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  padding: 0.6rem 0.3rem;
  background: none;
  border: none;
  cursor: pointer;
  border-right: 1px solid rgba(0,0,0,0.06);
  transition: background 0.15s;
}
.m-grid-btn:last-child { border-right: none; }
.m-grid-btn:hover, .m-grid-btn.active { background: rgba(192,57,43,0.08); }
.m-grid-btn.active .m-grid-icon, .m-grid-btn.active .m-grid-text { color: #c0392b; }

.m-grid-icon {
  font-size: 0.9rem;
  font-weight: 800;
  color: #555;
}
.m-grid-text {
  font-size: 0.7rem;
  color: #666;
}

/* ── Loading / Error ─────────────────────────────────────────── */
.loading-overlay {
  position: absolute;
  inset: 0;
  z-index: 100;
  background: rgba(255,255,255,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-spinner {
  width: 44px;
  height: 44px;
  border: 4px solid #eee;
  border-top-color: #c0392b;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.map-error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  color: #c0392b;
  font-weight: 600;
  box-shadow: 0 4px 24px rgba(0,0,0,0.2);
  max-width: 320px;
  text-align: center;
}

/* mapbox-gl overrides */
:deep(.mapboxgl-ctrl-top-right) {
  top: 60px;
}
</style>
