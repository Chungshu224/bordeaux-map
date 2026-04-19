<template>
  <section class="australia-map-section">

    <!-- 全螢幕地圖 -->
    <div ref="mapContainer" class="map"></div>

    <!-- 載入中 -->
    <div v-if="isLoading" class="map-loading">
      <div class="loading-spinner"></div>
      <p>載入澳洲產區地圖…</p>
    </div>
    <div v-if="mapError" class="map-error">⚠️ {{ mapError }}</div>

    <!-- Header -->
    <div class="map-header">
      <div class="map-header-left">
        <button class="map-hdr-btn" @click="emit('back')">← 返回</button>
        <button class="map-hdr-btn ghost" @click="router.push('/')">🏠 首頁</button>
      </div>
      <h1>🇦🇺 澳洲葡萄酒產區地圖</h1>
    </div>

    <!-- 州別篩選列 -->
    <div v-if="mapReady" class="state-filter-bar">
      <button
        v-for="s in STATE_TABS"
        :key="s.value"
        class="state-tab"
        :class="{ active: activeState === s.value }"
        :style="activeState === s.value ? { background: s.color, borderColor: s.color } : {}"
        @click="filterByState(s.value)"
      >{{ s.label }}</button>
    </div>

    <!-- 資訊卡 -->
    <div v-if="mapReady" class="map-info-bar" :class="{ collapsed: infoCollapsed }">
      <div class="aoc-title-row">
        <span class="aoc-info-title">
          <span class="aoc-dot" :style="{ background: activeRegion ? activeRegion.color : '#aaa' }"></span>
          {{ activeRegion ? activeRegion.name : '點選地圖產區查看詳情' }}
        </span>
        <div class="title-buttons">
          <button class="btn-collapse-inline" @click="infoCollapsed = !infoCollapsed">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline :points="infoCollapsed ? '18 15 12 9 6 15' : '6 9 12 15 18 9'"></polyline>
            </svg>
            <span class="btn-text">{{ infoCollapsed ? '展開' : '收合' }}</span>
          </button>
          <button class="btn-reset-icon" @click="resetView" title="重置地圖">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 3v6h-6"></path>
              <path d="M20.49 15A9 9 0 1 1 21 9"></path>
            </svg>
          </button>
        </div>
      </div>

      <div v-show="!infoCollapsed" class="info-details">
        <template v-if="activeRegion && activeInfo">
          <div class="region-info-content">
            <div class="info-header">
              <div class="style-badges">
                <span class="info-level-badge" :class="activeRegion.gi_level.toLowerCase().replace('-','')">
                  {{ activeRegion.gi_level }}
                </span>
                <span class="info-state-badge">{{ activeRegion.state }}</span>
                <span v-if="activeRegion.zone" class="info-zone-badge">{{ activeRegion.zone }}</span>
              </div>
            </div>
            <div class="description">{{ activeInfo.description }}</div>
            <div v-if="activeInfo.famous_for" class="famous-for">
              <span class="famous-label">🏆 以…著名：</span>{{ activeInfo.famous_for }}
            </div>
            <div class="climate-soil-row">
              <div v-if="activeInfo.climate" class="cs-item">
                <span class="cs-icon">☁️</span>
                <span class="cs-text">{{ activeInfo.climate }}</span>
              </div>
              <div v-if="activeInfo.soil" class="cs-item">
                <span class="cs-icon">🌱</span>
                <span class="cs-text">{{ activeInfo.soil }}</span>
              </div>
            </div>
            <div v-if="activeInfo.grapes?.length" class="grape-section">
              <div class="grape-title">主要品種：</div>
              <div class="grape-badges">
                <div
                  v-for="g in activeInfo.grapes"
                  :key="g.name"
                  class="grape-badge"
                  :class="g.type"
                >{{ g.name }}</div>
              </div>
            </div>
            <div v-if="activeInfo.styles?.length" class="wine-types-section">
              <div class="wine-types-title">酒款類型：</div>
              <div class="wine-types-list">
                <span
                  v-for="s in activeInfo.styles"
                  :key="s"
                  class="wine-type-tag"
                  :class="styleTagClass(s)"
                >{{ s }}</span>
              </div>
            </div>
          </div>
        </template>
        <div v-else-if="activeRegion && !activeInfo" class="no-info">
          <p><strong>{{ activeRegion.name }}</strong></p>
          <p>{{ activeRegion.state }}・{{ activeRegion.zone || '（無所屬 Zone）' }}</p>
          <p style="color:#aaa;font-size:0.78rem;margin-top:8px;">詳細資料建置中</p>
        </div>
        <div v-else class="no-info">
          <p>點選地圖上的彩色產區即可查看詳細資訊</p>
          <div class="legend-inline">
            <div v-for="s in STATE_TABS.filter(t=>t.value!=='all')" :key="s.value" class="legend-inline-item">
              <span class="legend-dot" :style="{ background: s.color }"></span>
              {{ s.label }}
            </div>
          </div>
          <p class="hint-sub">共 {{ regionCount }} 個 GI 產區</p>
        </div>
      </div>
    </div>

    <!-- 產區抽屜 -->
    <transition name="sheet-fade">
      <div v-if="drawerOpen" class="aoc-backdrop" @click.self="drawerOpen = false">
        <div class="aoc-drawer">
          <div class="aoc-handle"></div>
          <div class="drawer-header">
            <span>澳洲產區列表</span>
            <button class="drawer-close" @click="drawerOpen = false">✕</button>
          </div>
          <div class="drawer-search-wrap">
            <span class="search-icon">🔍</span>
            <input v-model="drawerSearch" class="search-input" placeholder="搜尋產區…" />
          </div>
          <div class="filter-tabs">
            <button
              v-for="tab in STATE_TABS"
              :key="tab.value"
              class="filter-tab"
              :class="{ active: drawerStateTab === tab.value }"
              @click="drawerStateTab = tab.value"
            >{{ tab.label }}</button>
          </div>
          <div class="appellation-list">
            <div
              v-for="r in filteredDrawerList"
              :key="r.name + r.state"
              class="app-item"
              :class="{ active: activeRegion?.name === r.name }"
              @click="selectFromDrawer(r)"
            >
              <span class="app-badge" :style="{ background: stateColor(r.state) }">{{ r.state }}</span>
              <div class="app-text">
                <span class="app-name">{{ r.name }}</span>
                <span class="app-sub">{{ r.gi_level }}</span>
              </div>
            </div>
            <div v-if="filteredDrawerList.length === 0" class="no-results">無符合產區</div>
          </div>
        </div>
      </div>
    </transition>

    <!-- 底部工具列 -->
    <div v-if="mapReady" class="mobile-map-toolbar">
      <button class="mobile-tool-btn" :class="{ active: drawerOpen }" @click="drawerOpen = !drawerOpen">
        <span class="mobile-tool-icon">產</span>
        <span>產區</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: showZones }" @click="toggleZones">
        <span class="mobile-tool-icon">Z</span>
        <span>Zone</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: is3D }" @click="toggle3D">
        <span class="mobile-tool-icon">3D</span>
        <span>{{ is3D ? '2D' : '3D' }}</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: mapReady && !infoCollapsed }" @click="toggleInfo">
        <span class="mobile-tool-icon">資</span>
        <span>資訊</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const emit   = defineEmits(['back'])
const router = useRouter()

// ── State ──────────────────────────────────────────────────────────────────
const mapContainer  = ref(null)
const mapReady      = ref(false)
const isLoading     = ref(true)
const mapError      = ref(null)
const is3D          = ref(false)
const infoCollapsed = ref(false)
const drawerOpen    = ref(false)
const drawerSearch  = ref('')
const drawerStateTab= ref('all')
const activeState   = ref('all')
const showZones     = ref(false)
const activeRegion  = ref(null)

const allRegions    = ref([])   // all feature properties
const appellations  = ref([])   // detailed info from JSON

let map         = null
let hoveredId   = null

const AUSTRALIA_CENTER = [134.0, -26.5]
const AUSTRALIA_ZOOM   = 3.5

// ── State tabs ─────────────────────────────────────────────────────────────
const STATE_TABS = [
  { value: 'all', label: '全部',   color: '#555' },
  { value: 'SA',  label: '南澳 SA', color: '#e67e22' },
  { value: 'VIC', label: '維多利亞 VIC', color: '#8e44ad' },
  { value: 'NSW', label: '新南威爾斯 NSW', color: '#2980b9' },
  { value: 'WA',  label: '西澳 WA',  color: '#f39c12' },
  { value: 'QLD', label: '昆士蘭 QLD', color: '#c0392b' },
  { value: 'TAS', label: '塔斯馬尼亞 TAS', color: '#27ae60' },
]

const STATE_CENTERS = {
  SA:  { center: [138.5, -32], zoom: 5.5 },
  VIC: { center: [145, -37],   zoom: 5.8 },
  NSW: { center: [147, -33],   zoom: 5.2 },
  WA:  { center: [117, -32],   zoom: 5.5 },
  QLD: { center: [151, -28],   zoom: 7 },
  TAS: { center: [146.5, -42], zoom: 6.5 },
}

// ── Computed ───────────────────────────────────────────────────────────────
const regionCount = computed(() => allRegions.value.filter(r => r.gi_level === 'Region').length)

const activeInfo = computed(() => {
  if (!activeRegion.value) return null
  return appellations.value.find(a => a.name === activeRegion.value.name) || null
})

const filteredDrawerList = computed(() => {
  let list = allRegions.value
  if (drawerStateTab.value !== 'all') list = list.filter(r => r.state === drawerStateTab.value)
  if (drawerSearch.value.trim()) {
    const q = drawerSearch.value.toLowerCase()
    list = list.filter(r => r.name.toLowerCase().includes(q))
  }
  return [...list].sort((a, b) => a.name.localeCompare(b.name))
})

// ── Helpers ────────────────────────────────────────────────────────────────
function stateColor(state) {
  return STATE_TABS.find(t => t.value === state)?.color || '#aaa'
}

function styleTagClass(s) {
  if (s.includes('紅')) return 'red'
  if (s.includes('白')) return 'white'
  if (s.includes('氣泡')) return 'sparkling'
  if (s.includes('甜') || s.includes('加強')) return 'sweet'
  return 'default'
}

// ── Reset view ─────────────────────────────────────────────────────────────
function resetView() {
  if (!map) return
  activeState.value = 'all'
  map.flyTo({ center: AUSTRALIA_CENTER, zoom: AUSTRALIA_ZOOM, pitch: 0, bearing: 0, duration: 800 })
  activeRegion.value = null
  if (map.getSource('au-regions')) map.removeFeatureState({ source: 'au-regions' })
  updateStateFilter()
}

// ── Filter by state ────────────────────────────────────────────────────────
function filterByState(state) {
  activeState.value = state
  drawerStateTab.value = state
  updateStateFilter()
  if (state !== 'all' && STATE_CENTERS[state]) {
    const { center, zoom } = STATE_CENTERS[state]
    map.flyTo({ center, zoom, duration: 800 })
  } else {
    map.flyTo({ center: AUSTRALIA_CENTER, zoom: AUSTRALIA_ZOOM, duration: 800 })
  }
}

function updateStateFilter() {
  if (!map || !map.getLayer('region-fill')) return
  const state = activeState.value
  const levelFilter = showZones.value
    ? ['in', ['get', 'gi_level'], ['literal', ['Region', 'Zone', 'Sub-Region']]]
    : ['==', ['get', 'gi_level'], 'Region']

  const stateFilter = state === 'all'
    ? ['literal', true]
    : ['==', ['get', 'state'], state]

  const combined = ['all', levelFilter, stateFilter]
  map.setFilter('region-fill', combined)
  map.setFilter('region-outline', combined)
  map.setFilter('region-labels', combined)
}

// ── Toggle Zone layer ──────────────────────────────────────────────────────
function toggleZones() {
  showZones.value = !showZones.value
  updateStateFilter()
}

// ── Toggle 3D ──────────────────────────────────────────────────────────────
function toggle3D() {
  is3D.value = !is3D.value
  if (!map) return
  map.easeTo({ pitch: is3D.value ? 45 : 0, duration: 600 })
  if (is3D.value) {
    if (!map.getSource('mapbox-dem')) {
      map.addSource('mapbox-dem', { type: 'raster-dem', url: 'mapbox://mapbox.mapbox-terrain-dem-v1', tileSize: 512 })
    }
    map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 })
  } else {
    map.setTerrain(null)
  }
}

// ── Toggle info panel ──────────────────────────────────────────────────────
function toggleInfo() {
  if (activeRegion.value) {
    infoCollapsed.value = !infoCollapsed.value
  } else {
    infoCollapsed.value = false
  }
}

// ── Select from drawer ─────────────────────────────────────────────────────
function selectFromDrawer(r) {
  activeRegion.value  = r
  infoCollapsed.value = false
  drawerOpen.value    = false
  // Fly to region using stateCenter as approximation
  if (STATE_CENTERS[r.state]) {
    const { center, zoom } = STATE_CENTERS[r.state]
    map.flyTo({ center, zoom: zoom + 1, duration: 800 })
  }
}

// ── Map initialization ─────────────────────────────────────────────────────
async function initMap() {
  if (!mapContainer.value) return
  isLoading.value = true
  mapError.value  = null
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

  try {
    const [geoRes, appRes] = await Promise.all([
      fetch('/australia/australia-wine-regions.geojson'),
      fetch('/australia/australia-appellations.json'),
    ])
    if (!geoRes.ok) throw new Error('無法載入澳洲產區地理資料')
    const geoJSON = await geoRes.json()
    appellations.value = appRes.ok ? await appRes.json() : []

    // Build region list for drawer (deduplicate by name+state)
    const seen = new Set()
    for (const f of geoJSON.features) {
      const key = f.properties.name + '|' + f.properties.state
      if (!seen.has(key)) {
        seen.add(key)
        allRegions.value.push(f.properties)
      }
    }

    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: AUSTRALIA_CENTER,
      zoom: AUSTRALIA_ZOOM,
      attributionControl: false,
    })

    map.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-left')
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')

    map.on('load', () => {
      map.addSource('au-regions', {
        type: 'geojson',
        data: geoJSON,
        generateId: true,
      })

      // Fill layer（Region 預設顯示，Zone / Sub-Region 隱藏）
      map.addLayer({
        id: 'region-fill',
        type: 'fill',
        source: 'au-regions',
        filter: ['==', ['get', 'gi_level'], 'Region'],
        paint: {
          'fill-color': ['get', 'color'],
          'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'selected'], false], 0.82,
            ['boolean', ['feature-state', 'hover'], false],    0.60,
            0.42,
          ],
        },
      })

      // Outline
      map.addLayer({
        id: 'region-outline',
        type: 'line',
        source: 'au-regions',
        filter: ['==', ['get', 'gi_level'], 'Region'],
        paint: {
          'line-color': ['case',
            ['boolean', ['feature-state', 'selected'], false], '#fff',
            'rgba(255,255,255,0.7)',
          ],
          'line-width': ['case',
            ['boolean', ['feature-state', 'selected'], false], 2.5, 1.0,
          ],
          'line-opacity': 0.85,
        },
      })

      // Labels
      map.addLayer({
        id: 'region-labels',
        type: 'symbol',
        source: 'au-regions',
        filter: ['==', ['get', 'gi_level'], 'Region'],
        layout: {
          'text-field': ['get', 'name'],
          'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
          'text-size': ['interpolate', ['linear'], ['zoom'], 4, 8, 7, 11, 10, 13],
          'text-max-width': 10,
          'text-allow-overlap': false,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': 'rgba(0,0,0,0.8)',
          'text-halo-width': 1.5,
          'text-opacity': ['interpolate', ['linear'], ['zoom'], 4, 0.3, 5.5, 1],
        },
        minzoom: 4,
      })

      // ── Hover ──
      map.on('mousemove', 'region-fill', (e) => {
        map.getCanvas().style.cursor = 'pointer'
        if (e.features.length > 0) {
          if (hoveredId !== null) map.setFeatureState({ source: 'au-regions', id: hoveredId }, { hover: false })
          hoveredId = e.features[0].id
          map.setFeatureState({ source: 'au-regions', id: hoveredId }, { hover: true })
        }
      })
      map.on('mouseleave', 'region-fill', () => {
        map.getCanvas().style.cursor = ''
        if (hoveredId !== null) map.setFeatureState({ source: 'au-regions', id: hoveredId }, { hover: false })
        hoveredId = null
      })

      // ── Click ──
      map.on('click', 'region-fill', (e) => {
        if (!e.features.length) return
        const feat = e.features[0]
        map.removeFeatureState({ source: 'au-regions' })
        map.setFeatureState({ source: 'au-regions', id: feat.id }, { selected: true, hover: true })
        activeRegion.value  = feat.properties
        infoCollapsed.value = false
        drawerOpen.value    = false
      })

      // Click empty area → deselect
      map.on('click', (e) => {
        const feats = map.queryRenderedFeatures(e.point, { layers: ['region-fill'] })
        if (!feats.length) {
          map.removeFeatureState({ source: 'au-regions' })
          activeRegion.value = null
        }
      })

      mapReady.value  = true
      isLoading.value = false
    })

    map.on('error', (e) => { console.error('[AustraliaMap]', e) })

  } catch (err) {
    console.error('[AustraliaMap] init error:', err)
    mapError.value  = err.message || '地圖載入失敗'
    isLoading.value = false
  }
}

onMounted(initMap)
onUnmounted(() => { if (map) { map.remove(); map = null } })
</script>

<style scoped>
/* ── Layout ───────────────────────────────────────────────────────── */
.australia-map-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-family: 'Noto Sans TC', sans-serif;
}
.map {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.map-loading {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.6);
  color: #fff;
  z-index: 20;
  gap: 16px;
}
.loading-spinner {
  width: 40px; height: 40px;
  border: 4px solid rgba(255,255,255,0.3);
  border-top-color: #c8a951;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg) } }
.map-error {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  background: rgba(200,40,40,0.9);
  color: #fff;
  padding: 16px 24px;
  border-radius: 12px;
  z-index: 20;
}

/* ── Header ───────────────────────────────────────────────────────── */
.map-header {
  position: absolute;
  top: 0; left: 0; right: 0;
  background: none;
  padding: 12px 16px;
  z-index: 10;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  pointer-events: none;
}
.map-header h1 {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 1px 6px rgba(0,0,0,0.7);
  margin: 0;
  padding-top: 4px;
  pointer-events: none;
}
.map-header-left {
  display: flex;
  gap: 8px;
  pointer-events: auto;
  flex-shrink: 0;
}
.map-hdr-btn {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  background: rgba(0,39,78,0.85);
  color: #fff;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  transition: background 0.2s;
  white-space: nowrap;
}
.map-hdr-btn:hover { background: rgba(0,60,120,0.95); }
.map-hdr-btn.ghost {
  background: rgba(255,255,255,0.75);
  border: 1.5px solid rgba(0,39,78,0.5);
  color: #00274e;
}

/* ── State filter bar ─────────────────────────────────────────────── */
.state-filter-bar {
  position: absolute;
  top: 52px; left: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  z-index: 10;
  pointer-events: auto;
}
.state-tab {
  padding: 4px 10px;
  border-radius: 16px;
  font-size: 0.72rem;
  font-weight: 600;
  cursor: pointer;
  border: 1.5px solid rgba(255,255,255,0.5);
  background: rgba(0,0,0,0.5);
  color: #fff;
  backdrop-filter: blur(4px);
  transition: all 0.2s;
  white-space: nowrap;
}
.state-tab:hover { background: rgba(255,255,255,0.2); }
.state-tab.active { color: #fff; opacity: 1; }

/* ── Info bar ─────────────────────────────────────────────────────── */
.map-info-bar {
  position: absolute;
  bottom: 72px; left: 16px;
  width: min(340px, calc(100vw - 32px));
  background: rgba(10,15,25,0.90);
  border-radius: 14px;
  padding: 12px 14px;
  z-index: 10;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(200,169,81,0.3);
  transition: all 0.3s ease;
}
.aoc-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 28px;
}
.aoc-info-title {
  font-size: 0.88rem;
  font-weight: 700;
  color: #c8a951;
  display: flex;
  align-items: center;
  gap: 8px;
}
.aoc-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
.title-buttons { display: flex; gap: 6px; align-items: center; }
.btn-collapse-inline {
  display: flex; align-items: center; gap: 4px;
  background: rgba(255,255,255,0.12);
  border: none; border-radius: 10px;
  color: rgba(255,255,255,0.75);
  font-size: 0.7rem; padding: 3px 8px;
  cursor: pointer; transition: background 0.2s;
}
.btn-collapse-inline:hover { background: rgba(255,255,255,0.22); }
.btn-reset-icon {
  background: rgba(255,255,255,0.12);
  border: none; border-radius: 8px;
  color: rgba(255,255,255,0.7);
  padding: 4px 6px; cursor: pointer;
  display: flex; align-items: center;
  transition: background 0.2s;
}
.btn-reset-icon:hover { background: rgba(255,255,255,0.22); }

.info-details { margin-top: 10px; }
.region-info-content { display: flex; flex-direction: column; gap: 8px; }
.info-header { display: flex; align-items: center; }
.style-badges { display: flex; gap: 6px; flex-wrap: wrap; }

.info-level-badge {
  font-size: 0.68rem; font-weight: 700;
  padding: 2px 8px; border-radius: 10px;
}
.info-level-badge.region    { background: #2980b9; color: #fff; }
.info-level-badge.zone      { background: #7f8c8d; color: #fff; }
.info-level-badge.subregion { background: #95a5a6; color: #fff; }
.info-state-badge {
  font-size: 0.68rem; font-weight: 700;
  padding: 2px 8px; border-radius: 10px;
  background: #c8a951; color: #000;
}
.info-zone-badge {
  font-size: 0.65rem;
  padding: 2px 8px; border-radius: 10px;
  background: rgba(255,255,255,0.15); color: rgba(255,255,255,0.8);
}

.description { font-size: 0.78rem; color: rgba(255,255,255,0.88); line-height: 1.6; }
.famous-for {
  font-size: 0.73rem; color: #c8a951;
  background: rgba(200,169,81,0.12);
  border-radius: 8px; padding: 5px 8px;
  line-height: 1.5;
}
.famous-label { font-weight: 700; }

.climate-soil-row { display: flex; flex-direction: column; gap: 4px; }
.cs-item { display: flex; gap: 6px; align-items: flex-start; font-size: 0.72rem; color: rgba(255,255,255,0.75); }
.cs-icon { flex-shrink: 0; }

.grape-section { display: flex; flex-direction: column; gap: 4px; }
.grape-title { font-size: 0.72rem; color: rgba(255,255,255,0.65); font-weight: 600; }
.grape-badges { display: flex; flex-wrap: wrap; gap: 4px; }
.grape-badge {
  font-size: 0.68rem; font-weight: 600;
  padding: 2px 8px; border-radius: 10px;
}
.grape-badge.red   { background: rgba(180,50,50,0.8); color: #fff; }
.grape-badge.white { background: rgba(220,200,100,0.8); color: #333; }

.wine-types-section { display: flex; flex-direction: column; gap: 4px; }
.wine-types-title { font-size: 0.72rem; color: rgba(255,255,255,0.65); font-weight: 600; }
.wine-types-list { display: flex; flex-wrap: wrap; gap: 4px; }
.wine-type-tag {
  font-size: 0.67rem; padding: 2px 8px; border-radius: 10px; font-weight: 600;
}
.wine-type-tag.red      { background: #c0392b; color: #fff; }
.wine-type-tag.white    { background: #d4ac0d; color: #333; }
.wine-type-tag.sparkling{ background: #2980b9; color: #fff; }
.wine-type-tag.sweet    { background: #8e44ad; color: #fff; }
.wine-type-tag.default  { background: rgba(255,255,255,0.2); color: #fff; }

.no-info { color: rgba(255,255,255,0.65); font-size: 0.8rem; line-height: 1.6; }
.legend-inline { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
.legend-inline-item { display: flex; align-items: center; gap: 4px; font-size: 0.7rem; }
.legend-dot { width: 8px; height: 8px; border-radius: 50%; }
.hint-sub { font-size: 0.7rem; color: rgba(255,255,255,0.45); margin-top: 6px; }

/* ── Drawer ───────────────────────────────────────────────────────── */
.aoc-backdrop {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 30;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.aoc-drawer {
  background: #1a1f2e;
  border-radius: 20px 20px 0 0;
  width: 100%; max-width: 480px;
  max-height: 75vh;
  display: flex; flex-direction: column;
  overflow: hidden;
  padding-bottom: env(safe-area-inset-bottom);
}
.aoc-handle {
  width: 36px; height: 4px;
  background: rgba(255,255,255,0.25);
  border-radius: 2px;
  margin: 10px auto 0;
}
.drawer-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 16px 8px;
  color: #fff; font-weight: 700; font-size: 0.9rem;
}
.drawer-close {
  background: none; border: none; color: rgba(255,255,255,0.6);
  font-size: 1rem; cursor: pointer;
}
.drawer-search-wrap {
  display: flex; align-items: center;
  margin: 0 12px 8px;
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
  padding: 6px 12px; gap: 8px;
}
.search-input {
  flex: 1; background: none; border: none;
  color: #fff; font-size: 0.82rem; outline: none;
}
.search-input::placeholder { color: rgba(255,255,255,0.4); }
.filter-tabs {
  display: flex; flex-wrap: wrap; gap: 4px;
  padding: 0 12px 8px;
}
.filter-tab {
  padding: 3px 10px; border-radius: 14px; font-size: 0.68rem; font-weight: 600;
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.7); cursor: pointer; transition: all 0.15s;
  white-space: nowrap;
}
.filter-tab.active { background: #c8a951; color: #000; border-color: #c8a951; }
.appellation-list {
  flex: 1; overflow-y: auto;
  padding: 0 12px 12px;
}
.app-item {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 10px; border-radius: 10px; cursor: pointer;
  transition: background 0.15s;
}
.app-item:hover { background: rgba(255,255,255,0.08); }
.app-item.active { background: rgba(200,169,81,0.15); }
.app-badge {
  font-size: 0.62rem; font-weight: 700;
  padding: 2px 6px; border-radius: 8px;
  color: #fff; flex-shrink: 0;
}
.app-text { display: flex; flex-direction: column; }
.app-name { color: #fff; font-size: 0.82rem; font-weight: 600; }
.app-sub  { color: rgba(255,255,255,0.45); font-size: 0.68rem; }
.no-results { color: rgba(255,255,255,0.4); text-align: center; padding: 20px; font-size: 0.8rem; }

/* ── Bottom toolbar ───────────────────────────────────────────────── */
.mobile-map-toolbar {
  position: absolute;
  bottom: 12px; left: 50%;
  transform: translateX(-50%);
  display: flex; gap: 6px;
  background: rgba(10,15,25,0.90);
  border-radius: 20px;
  padding: 6px 10px;
  z-index: 10;
  box-shadow: 0 4px 20px rgba(0,0,0,0.35);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(200,169,81,0.25);
}
.mobile-tool-btn {
  display: flex; flex-direction: column;
  align-items: center; gap: 2px;
  padding: 6px 12px; border-radius: 14px;
  background: none; border: none;
  color: rgba(255,255,255,0.65); font-size: 0.62rem;
  cursor: pointer; transition: all 0.2s;
  min-width: 44px;
}
.mobile-tool-btn:hover { background: rgba(255,255,255,0.1); color: #fff; }
.mobile-tool-btn.active { background: rgba(200,169,81,0.2); color: #c8a951; }
.mobile-tool-icon { font-size: 0.75rem; font-weight: 700; }

/* ── Sheet transition ─────────────────────────────────────────────── */
.sheet-fade-enter-active, .sheet-fade-leave-active { transition: opacity 0.2s; }
.sheet-fade-enter-from, .sheet-fade-leave-to { opacity: 0; }
</style>
