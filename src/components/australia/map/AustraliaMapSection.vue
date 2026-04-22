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

    <!-- 資訊卡 -->
    <div v-if="mapReady" class="map-info-bar" :class="{ collapsed: infoCollapsed }">
      <div class="aoc-title-row">
        <span class="aoc-info-title">
          <span class="aoc-dot" :style="{ background: activeRegion ? activeRegion.color : '#aaa' }"></span>
          {{ activeRegion ? activeRegion.name : '點選地圖產區查看詳情' }}
        </span>
        <div class="title-buttons">
          <button
            v-if="selectedRegionName"
            class="btn-show-all"
            @click="activeRegion = null; restoreFilter()"
            title="顯示全部產區"
          >← 全部</button>
          <button class="btn-collapse-inline" @click="infoCollapsed = !infoCollapsed">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline :points="infoCollapsed ? '18 15 12 9 6 15' : '6 9 12 15 18 9'"></polyline>
            </svg>
            <span class="btn-text">{{ infoCollapsed ? '展開' : '收合' }}</span>
          </button>
          <button v-if="activeRegion" class="btn-pronunciation-icon" @click="playPronunciation" :disabled="isPlayingAudio" title="聽發音">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            </svg>
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
            <span>{{ initialCluster ? initialCluster.name + ' 產區' : '澳洲產區列表' }}</span>
            <button class="drawer-close" @click="drawerOpen = false">✕</button>
          </div>
          <div class="drawer-search-wrap">
            <span class="search-icon">🔍</span>
            <input v-model="drawerSearch" class="search-input" placeholder="搜尋產區…" />
          </div>
          <!-- Cluster 模式：顯示 cluster 標示；否則顯示州篩選 tabs -->
          <div v-if="initialCluster" class="cluster-filter-tag">
            <span class="cluster-dot" :style="{ background: initialCluster.color }"></span>
            <span>{{ initialCluster.waCluster }}</span>
            <span class="cluster-count-badge">{{ filteredDrawerList.length }}</span>
          </div>
          <div v-else class="filter-tabs">
            <button
              v-for="tab in STATE_TABS"
              :key="tab.value"
              class="filter-tab"
              :class="{ active: drawerStateTab === tab.value }"
              @click="drawerStateTab = tab.value"
            >{{ tab.label }}</button>
          </div>
          <!-- 分組列表：Zone → Region → Sub-Region -->
          <div class="appellation-list">
            <template v-for="group in groupedDrawerList" :key="group.level">
              <div class="gi-group-header">
                <span class="gi-group-icon">{{ group.icon }}</span>
                <span class="gi-group-label">{{ group.label }}</span>
                <span class="gi-group-count">{{ group.items.length }}</span>
              </div>
              <div
                v-for="r in group.items"
                :key="r.name + r.state"
                class="app-item"
                :class="{ active: activeRegion?.name === r.name }"
                @click="selectFromDrawer(r)"
              >
                <span class="app-badge" :style="{ background: stateColor(r.state) }">{{ r.state }}</span>
                <div class="app-text">
                  <span class="app-name">{{ r.name }}</span>
                  <span v-if="r.zone" class="app-sub">{{ r.zone }}</span>
                </div>
              </div>
            </template>
            <div v-if="!drawerHasResults" class="no-results">無符合產區</div>
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
      <button class="mobile-tool-btn" :class="{ active: showLayerPanel || showZones || showContour }" @click="showLayerPanel = !showLayerPanel">
        <span class="mobile-tool-icon">🗂</span>
        <span>圖層</span>
      </button>

      <!-- 圖層面板 -->
      <Transition name="layer-panel">
        <div v-if="showLayerPanel" class="layer-panel" @click.stop>
          <div class="layer-panel-title">圖層選擇</div>
          <button class="layer-toggle-btn" :class="{ active: showZones }" @click="toggleZones">
            <span class="layer-toggle-icon">🗺️</span>
            <span class="layer-toggle-label">Zone 層</span>
            <span class="layer-toggle-status">{{ showZones ? '開' : '關' }}</span>
          </button>
          <button class="layer-toggle-btn" :class="{ active: showContour }" @click="toggleContour">
            <span class="layer-toggle-icon">🌄</span>
            <span class="layer-toggle-label">等高線</span>
            <span class="layer-toggle-status">{{ showContour ? '開' : '關' }}</span>
          </button>
        </div>
      </Transition>
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

const props  = defineProps({
  initialCluster: { type: Object, default: null },
})
const emit   = defineEmits(['back'])
const router = useRouter()

// ── State ──────────────────────────────────────────────────────────────────
const mapContainer  = ref(null)
const mapReady      = ref(false)
const isLoading     = ref(true)
const mapError      = ref(null)
const is3D          = ref(false)
const infoCollapsed = ref(true)
const drawerOpen    = ref(false)
const drawerSearch  = ref('')
const drawerStateTab= ref('all')
const activeState   = ref('all')
const showZones     = ref(false)
const showContour   = ref(false)
const showLayerPanel = ref(false)
const activeRegion  = ref(null)

const allRegions       = ref([])   // all feature properties
const appellations     = ref([])   // detailed info from JSON
const selectedRegionName = ref(null) // name of single-selected feature

let map         = null
let hoveredId   = null
const featureGeomMap = {}  // name → merged bbox [w, s, e, n] for fitBounds

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

// If a cluster is active → filter to that cluster's regions; otherwise use state tab
const filteredDrawerList = computed(() => {
  let list = allRegions.value
  const fc = props.initialCluster?.filterConfig
  if (fc) {
    // SA sub-cluster: match by explicit region names OR by zone (for zone-level polygons)
    list = list.filter(r =>
      r.gi_level === 'Zone'
        ? fc.filterZones.includes(r.zone) || fc.filterZones.includes(r.name)
        : fc.regionNames.some(n => n.toLowerCase() === r.name.toLowerCase())
    )
  } else if (props.initialCluster) {
    // Single-state cluster (VIC/NSW/WA/QLD/TAS): filter by state
    list = list.filter(r => r.state === props.initialCluster.state)
  } else if (drawerStateTab.value !== 'all') {
    list = list.filter(r => r.state === drawerStateTab.value)
  }
  if (drawerSearch.value.trim()) {
    const q = drawerSearch.value.toLowerCase()
    list = list.filter(r => r.name.toLowerCase().includes(q))
  }
  return [...list].sort((a, b) => a.name.localeCompare(b.name))
})

// Group the filtered list by GI level: Zone → Region → Sub-Region
const GI_LEVELS = [
  { level: 'Zone',       icon: '🗂️', label: 'Zone（產區群）' },
  { level: 'Region',     icon: '📍', label: 'Region（產區）' },
  { level: 'Sub-Region', icon: '🔎', label: 'Sub-Region（次產區）' },
]
const groupedDrawerList = computed(() => {
  const all = filteredDrawerList.value
  return GI_LEVELS.map(g => ({
    ...g,
    items: all.filter(r => r.gi_level === g.level),
  })).filter(g => g.items.length > 0)
})

const drawerHasResults = computed(() => groupedDrawerList.value.length > 0)

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

// ── Bbox helper (no external dep) ────────────────────────────────────────
function featureBbox(geometry) {
  const coords = []
  const collect = (c) => {
    if (typeof c[0] === 'number') coords.push(c)
    else c.forEach(collect)
  }
  collect(geometry.coordinates)
  const lngs = coords.map(c => c[0])
  const lats = coords.map(c => c[1])
  return [Math.min(...lngs), Math.min(...lats), Math.max(...lngs), Math.max(...lats)]
}

// ── Apply single-feature filter (isolate one region) ─────────────────────
function applySingleFeatureFilter(name) {
  if (!map) return
  const f = ['==', ['get', 'name'], name]
  map.setFilter('region-fill',    f)
  map.setFilter('region-outline', f)
  map.setFilter('region-labels',  f)
}

// ── Restore cluster/state filter (deselect) ───────────────────────────────
function restoreFilter() {
  selectedRegionName.value = null
  updateStateFilter()
}

// ── 播放發音 ─────────────────────────────────────────────────────────────────
const isPlayingAudio = ref(false)
let currentAudio = null
function playPronunciation() {
  if (!activeRegion.value?.name) return
  if (currentAudio) { currentAudio.pause(); currentAudio = null }
  const audioPath = `/australia/sounds/${encodeURIComponent(activeRegion.value.name)}.mp3`
  currentAudio = new Audio(audioPath)
  isPlayingAudio.value = true
  currentAudio.play().catch(() => { isPlayingAudio.value = false })
  currentAudio.onended = () => { isPlayingAudio.value = false; currentAudio = null }
}

// ── Reset view ─────────────────────────────────────────────────────────────
function resetView() {
  if (!map) return
  selectedRegionName.value = null
  activeState.value = props.initialCluster ? props.initialCluster.state : 'all'
  if (!props.initialCluster) {
    map.flyTo({ center: AUSTRALIA_CENTER, zoom: AUSTRALIA_ZOOM, pitch: 0, bearing: 0, duration: 800 })
  } else {
    const { center, zoom } = props.initialCluster
    map.flyTo({ center, zoom, pitch: 0, bearing: 0, duration: 800 })
  }
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

  const fc = props.initialCluster?.filterConfig
  let locationFilter
  if (fc) {
    // SA sub-cluster: Zone polygons filtered by name; Region/Sub-Region filtered by name list
    const zonePolyFilter = ['all',
      ['==', ['get', 'gi_level'], 'Zone'],
      ['in', ['get', 'name'], ['literal', fc.filterZones]],
    ]
    const regionFilter = ['all',
      ['in', ['get', 'gi_level'], ['literal', ['Region', 'Sub-Region']]],
      ['in', ['get', 'name'], ['literal', fc.regionNames]],
    ]
    locationFilter = ['any', zonePolyFilter, regionFilter]
  } else if (props.initialCluster) {
    locationFilter = ['==', ['get', 'state'], props.initialCluster.state]
  } else {
    locationFilter = state === 'all' ? ['literal', true] : ['==', ['get', 'state'], state]
  }

  const combined = ['all', levelFilter, locationFilter]
  map.setFilter('region-fill', combined)
  map.setFilter('region-outline', combined)
  map.setFilter('region-labels', combined)
}

// ── Toggle Zone layer ──────────────────────────────────────────────────────
function toggleZones() {
  showZones.value = !showZones.value
  updateStateFilter()
}

// ── Toggle Contour layer ───────────────────────────────────────────────────
function toggleContour() {
  showContour.value = !showContour.value
  if (!map) return
  if (showContour.value) {
    if (!map.getSource('mapbox-dem')) {
      map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
      })
    }
    if (!map.getSource('contours')) {
      map.addSource('contours', {
        type: 'vector',
        url: 'mapbox://mapbox.mapbox-terrain-v2',
      })
    }
    if (!map.getLayer('contour-major')) {
      map.addLayer({
        id: 'contour-major',
        type: 'line',
        source: 'contours',
        'source-layer': 'contour',
        filter: ['==', ['%', ['get', 'ele'], 100], 0],
        paint: {
          'line-color': 'rgba(255,255,255,0.45)',
          'line-width': 1.2,
        },
        minzoom: 5,
      }, 'region-fill')
    }
    if (!map.getLayer('contour-minor')) {
      map.addLayer({
        id: 'contour-minor',
        type: 'line',
        source: 'contours',
        'source-layer': 'contour',
        filter: ['all', ['!=', ['%', ['get', 'ele'], 100], 0]],
        paint: {
          'line-color': 'rgba(255,255,255,0.22)',
          'line-width': 0.6,
        },
        minzoom: 7,
      }, 'region-fill')
    }
    if (!map.getLayer('contour-labels')) {
      map.addLayer({
        id: 'contour-labels',
        type: 'symbol',
        source: 'contours',
        'source-layer': 'contour',
        layout: {
          'symbol-placement': 'line',
          'symbol-spacing': 200,
          'text-field': ['concat', ['to-string', ['get', 'ele']], 'm'],
          'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
          'text-size': ['case', ['==', ['%', ['get', 'ele'], 100], 0], 11, 9],
        },
        paint: {
          'text-color': 'rgba(255,255,255,0.7)',
          'text-halo-color': 'rgba(0,0,0,0.5)',
          'text-halo-width': 1,
        },
        minzoom: 7,
      }, 'region-fill')
    }
    ;['contour-major', 'contour-minor', 'contour-labels'].forEach(id => {
      if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', 'visible')
    })
  } else {
    ;['contour-major', 'contour-minor', 'contour-labels'].forEach(id => {
      if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', 'none')
    })
  }
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
  drawerOpen.value    = false
  // Isolate this feature on the map
  selectedRegionName.value = r.name
  applySingleFeatureFilter(r.name)
  // Fit map to the cached full bounding box
  const bbox = featureGeomMap[r.name]
  if (bbox) {
    const [w, s, e, n] = bbox
    map.fitBounds([[w, s], [e, n]], { padding: 80, maxZoom: 12, duration: 700 })
  } else if (STATE_CENTERS[r.state]) {
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
    // Also cache full bounding boxes from the complete geometry
    const seen = new Set()
    for (const f of geoJSON.features) {
      const key = f.properties.name + '|' + f.properties.state
      if (!seen.has(key)) {
        seen.add(key)
        allRegions.value.push(f.properties)
      }
      // Merge bbox for all tiles of the same named feature
      if (f.geometry) {
        try {
          const b = featureBbox(f.geometry)
          const name = f.properties.name
          if (featureGeomMap[name]) {
            featureGeomMap[name] = [
              Math.min(featureGeomMap[name][0], b[0]),
              Math.min(featureGeomMap[name][1], b[1]),
              Math.max(featureGeomMap[name][2], b[2]),
              Math.max(featureGeomMap[name][3], b[3]),
            ]
          } else {
            featureGeomMap[name] = b
          }
        } catch (_) {}
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
            ['boolean', ['feature-state', 'selected'], false], 0.18,
            ['boolean', ['feature-state', 'hover'], false],    0.14,
            0.10,
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
        drawerOpen.value    = false
        // Isolate this feature on the map
        selectedRegionName.value = feat.properties.name
        applySingleFeatureFilter(feat.properties.name)
        // Fit map to the cached full bounding box
        const bbox = featureGeomMap[feat.properties.name]
        if (bbox) {
          const [w, s, e2, n] = bbox
          map.fitBounds([[w, s], [e2, n]], { padding: 80, maxZoom: 12, duration: 700 })
        }
      })

      // Click empty area → deselect (restore cluster filter)
      map.on('click', (e) => {
        const feats = map.queryRenderedFeatures(e.point, { layers: ['region-fill'] })
        if (!feats.length) {
          map.removeFeatureState({ source: 'au-regions' })
          activeRegion.value = null
          restoreFilter()
        }
      })

      mapReady.value  = true
      isLoading.value = false

      // 如果從地區選擇器進入，套用初始 cluster 過濾並飛到該位置
      if (props.initialCluster) {
        const { center, zoom } = props.initialCluster
        // 有 filterConfig（SA sub-cluster）時顯示 Zone 層以呈現完整層級
        if (props.initialCluster.filterConfig) showZones.value = true
        activeState.value = props.initialCluster.state
        drawerStateTab.value = props.initialCluster.state
        updateStateFilter()
        map.flyTo({ center, zoom, duration: 800 })
      }
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
.state-tab.active { color: #fff; opacity: 1; }

/* ── Info bar (Bordeaux/Portugal style: white card) ──────────────── */
.map-info-bar {
  position: absolute;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 110px);
  left: 50%;
  transform: translateX(-50%);
  width: min(90vw, 380px);
  background: rgba(255,255,255,0.97);
  border-radius: 14px;
  padding: 12px 14px;
  z-index: 10;
  color: #222;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}
.aoc-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 28px;
  margin-bottom: 8px;
}
.map-info-bar.collapsed .aoc-title-row { margin-bottom: 0; }
.aoc-info-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #222;
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1; min-width: 0;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.aoc-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
.title-buttons { display: flex; gap: 6px; align-items: center; flex-shrink: 0; }
.btn-collapse-inline {
  display: flex; align-items: center; gap: 4px;
  padding: 6px 10px;
  background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
  border: 1px solid #ccc; border-radius: 6px;
  color: #444; font-size: 0.82rem; font-weight: 600;
  cursor: pointer; transition: all 0.2s;
}
.btn-collapse-inline:hover { background: linear-gradient(135deg, #e8e8e8, #d0d0d0); border-color: #00274e; color: #00274e; }
.btn-text { font-size: 0.85rem; white-space: nowrap; }
.map-info-bar.collapsed .btn-text { display: none; }
.map-info-bar.collapsed .btn-collapse-inline { padding: 6px 8px; }
.btn-pronunciation-icon {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; padding: 6px;
  border: none; border-radius: 10px;
  background: linear-gradient(180deg, #764ba2 0%, #667eea 100%);
  color: #fff; cursor: pointer; transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.16); flex-shrink: 0;
}
.btn-pronunciation-icon:disabled { opacity: 0.6; cursor: not-allowed; }
.btn-pronunciation-icon:not(:disabled):hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(0,0,0,0.22); }
.btn-reset-icon {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; padding: 6px;
  border: none; border-radius: 10px;
  background: linear-gradient(180deg, #ff6f61 0%, #ef4f45 100%);
  color: #fff; cursor: pointer; transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.16); flex-shrink: 0;
}
.btn-reset-icon:hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(0,0,0,0.22); }

.btn-show-all {
  padding: 5px 12px; border: none; border-radius: 10px;
  background: linear-gradient(180deg, #3e8ef7 0%, #2670d4 100%);
  color: #fff; font-size: 0.78rem; font-weight: 700;
  cursor: pointer; transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.16); flex-shrink: 0;
  white-space: nowrap;
}
.btn-show-all:hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(38,112,212,0.35); }

.info-details {
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: 1000px; opacity: 1;
}
.map-info-bar.collapsed .info-details { max-height: 0; opacity: 0; margin: 0; padding: 0; }
.region-info-content { display: flex; flex-direction: column; gap: 8px; margin-top: 8px; }
.info-header { display: flex; align-items: center; }
.style-badges { display: flex; gap: 6px; flex-wrap: wrap; }

.info-level-badge {
  font-size: 0.68rem; font-weight: 700;
  padding: 2px 8px; border-radius: 10px;
}
.info-level-badge.region    { background: rgba(41,128,185,0.12); color: #1a5ea8; border: 1px solid rgba(41,128,185,0.3); }
.info-level-badge.zone      { background: rgba(127,140,141,0.12); color: #555; border: 1px solid #ccc; }
.info-level-badge.subregion { background: rgba(149,165,166,0.12); color: #666; border: 1px solid #ccc; }
.info-state-badge {
  font-size: 0.68rem; font-weight: 700;
  padding: 2px 8px; border-radius: 10px;
  background: rgba(200,169,81,0.15); color: #7a5c00;
  border: 1px solid rgba(200,169,81,0.3);
}
.info-zone-badge {
  font-size: 0.65rem;
  padding: 2px 8px; border-radius: 10px;
  background: #f0f0f0; color: #666;
}

.description { font-size: 0.82rem; color: #333; line-height: 1.6; }
.famous-for {
  font-size: 0.78rem; color: #7a5c00;
  background: rgba(200,169,81,0.08);
  border-radius: 8px; padding: 5px 8px;
  line-height: 1.5;
}
.famous-label { font-weight: 700; }

.climate-soil-row { display: flex; flex-direction: column; gap: 4px; }
.cs-item { display: flex; gap: 6px; align-items: flex-start; font-size: 0.75rem; color: #555; }
.cs-icon { flex-shrink: 0; }

.grape-section { display: flex; flex-direction: column; gap: 4px; }
.grape-title { font-size: 0.75rem; color: #555; font-weight: 600; }
.grape-badges { display: flex; flex-wrap: wrap; gap: 4px; }
.grape-badge {
  font-size: 0.72rem; font-weight: 600;
  padding: 3px 9px; border-radius: 10px;
}
.grape-badge.red   { background: rgba(180,50,50,0.12); color: #8b1a1a; border: 1px solid rgba(180,50,50,0.25); }
.grape-badge.white { background: rgba(200,180,50,0.12); color: #7a5c00; border: 1px solid rgba(200,180,50,0.25); }

.wine-types-section { display: flex; flex-direction: column; gap: 4px; }
.wine-types-title { font-size: 0.75rem; color: #555; font-weight: 600; }
.wine-types-list { display: flex; flex-wrap: wrap; gap: 4px; }
.wine-type-tag {
  font-size: 0.7rem; padding: 2px 8px; border-radius: 10px; font-weight: 600;
}
.wine-type-tag.red      { background: #c0392b; color: #fff; }
.wine-type-tag.white    { background: rgba(212,172,13,0.15); color: #7a5c00; }
.wine-type-tag.sparkling{ background: rgba(41,128,185,0.12); color: #1a5ea8; }
.wine-type-tag.sweet    { background: rgba(142,68,173,0.12); color: #6c2e8a; }
.wine-type-tag.default  { background: #f5f5f5; color: #555; }

.no-info { color: #666; font-size: 0.82rem; line-height: 1.6; }
.legend-inline { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
.legend-inline-item { display: flex; align-items: center; gap: 4px; font-size: 0.72rem; color: #555; }
.legend-dot { width: 8px; height: 8px; border-radius: 50%; }
.hint-sub { font-size: 0.72rem; color: #888; margin-top: 6px; }

/* ── Drawer (warm-light style, matching Portugal) ─────────────────── */
.aoc-backdrop {
  position: fixed; inset: 0;
  background: rgba(15,23,42,0.34);
  backdrop-filter: blur(4px);
  z-index: 30;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.aoc-drawer {
  background: #f7f3ee;
  border-radius: 20px 20px 0 0;
  width: 100%; max-width: 480px;
  max-height: 75vh;
  display: flex; flex-direction: column;
  overflow: hidden;
  padding-bottom: env(safe-area-inset-bottom);
}
.aoc-handle {
  width: 36px; height: 4px;
  background: rgba(122,90,64,0.25);
  border-radius: 2px;
  margin: 10px auto 0;
}
.drawer-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 16px 8px;
  color: #333; font-weight: 700; font-size: 0.9rem;
}
.drawer-close {
  background: none; border: none; color: #888;
  font-size: 1rem; cursor: pointer;
}
.drawer-close:hover { background: #f0f0f0; color: #333; border-radius: 50%; }
.drawer-search-wrap {
  display: flex; align-items: center;
  margin: 0 12px 8px;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 6px 12px; gap: 8px;
}
.search-input {
  flex: 1; background: none; border: none;
  color: #333; font-size: 0.82rem; outline: none;
}
.search-input::placeholder { color: #aaa; }
.filter-tabs {
  display: flex; flex-wrap: wrap; gap: 4px;
  padding: 0 12px 8px;
}
.filter-tab {
  padding: 3px 10px; border-radius: 14px; font-size: 0.68rem; font-weight: 600;
  background: #f0f0f0; border: 1px solid #ddd;
  color: #555; cursor: pointer; transition: all 0.15s;
  white-space: nowrap;
}
.filter-tab.active { background: #00274e; color: #fff; border-color: #00274e; }
.appellation-list {
  flex: 1; overflow-y: auto;
  padding: 0 12px 12px;
}
.app-item {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 10px; border-radius: 10px; cursor: pointer;
  transition: background 0.15s;
}
.app-item:hover { background: #f8f8f8; }
.app-item.active { background: rgba(0,39,78,0.08); }
.app-badge {
  font-size: 0.62rem; font-weight: 700;
  padding: 2px 6px; border-radius: 8px;
  color: #fff; flex-shrink: 0;
}
.app-text { display: flex; flex-direction: column; }
.app-name { color: #222; font-size: 0.82rem; font-weight: 600; }
.app-sub  { color: #888; font-size: 0.68rem; }
.no-results { color: #aaa; text-align: center; padding: 20px; font-size: 0.8rem; }

/* ── Cluster filter tag ─────────────────────────────────────────── */
.cluster-filter-tag {
  display: flex; align-items: center; gap: 8px;
  padding: 6px 12px 8px;
  font-size: 0.78rem; font-weight: 600; color: #444;
}
.cluster-dot {
  width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0;
}
.cluster-count-badge {
  margin-left: auto;
  background: #f0f0f0; border-radius: 10px;
  padding: 1px 7px; font-size: 0.7rem; color: #666;
}

/* ── GI group header ────────────────────────────────────────────── */
.gi-group-header {
  display: flex; align-items: center; gap: 6px;
  padding: 8px 10px 4px;
  font-size: 0.72rem; font-weight: 700; color: #555;
  background: #f5f5f5;
  border-radius: 8px;
  margin: 6px 0 2px;
  letter-spacing: 0.02em;
}
.gi-group-icon { font-size: 0.9rem; }
.gi-group-label { flex: 1; }
.gi-group-count {
  background: #e0e0e0; border-radius: 8px;
  padding: 1px 6px; font-size: 0.68rem; color: #666;
}

/* ── Bottom toolbar (Bordeaux style) ─────────────────────────────── */
.mobile-map-toolbar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 24px);
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  padding: 8px;
  border-radius: 18px;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  width: min(90vw, 380px);
}
.mobile-tool-btn {
  border-radius: 16px;
  background: linear-gradient(180deg, #faf5ef 0%, #f1e7dd 100%);
  color: #4f3422;
  min-height: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  font-size: 0.76rem;
  font-weight: 800;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}
.mobile-tool-btn:hover { background: linear-gradient(180deg, #f5ede0 0%, #eadcc8 100%); }
.mobile-tool-btn.active {
  background: linear-gradient(180deg, #003060 0%, #001f40 100%);
  color: #fff;
}
.mobile-tool-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px; height: 30px;
  border-radius: 50%;
  background: rgba(0,39,78,0.08);
  font-size: 0.8rem;
  font-weight: 800;
}
.mobile-tool-btn.active .mobile-tool-icon { background: rgba(255,255,255,0.18); }

/* ── Layer panel ─────────────────────────────────────────────────── */
.layer-panel {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.22);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 150px;
  z-index: 20;
}
.layer-panel-title {
  font-size: 0.72rem;
  font-weight: 700;
  color: #888;
  text-align: center;
  padding-bottom: 4px;
  border-bottom: 1px solid #eee;
  margin-bottom: 2px;
}
.layer-toggle-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  background: #f5ede0;
  color: #4f3422;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s;
  width: 100%;
  text-align: left;
}
.layer-toggle-btn:hover { background: #eadcc8; }
.layer-toggle-btn.active {
  background: linear-gradient(135deg, #003060, #001f40);
  color: #fff;
}
.layer-toggle-icon { font-size: 1rem; }
.layer-toggle-label { flex: 1; }
.layer-toggle-status {
  font-size: 0.7rem;
  opacity: 0.75;
  background: rgba(0,0,0,0.08);
  border-radius: 6px;
  padding: 1px 6px;
}
.layer-toggle-btn.active .layer-toggle-status { background: rgba(255,255,255,0.18); }

/* ── Layer panel transition ──────────────────────────────────────── */
.layer-panel-enter-active, .layer-panel-leave-active {
  transition: opacity 0.18s, transform 0.18s;
}
.layer-panel-enter-from, .layer-panel-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(6px);
}

/* ── Sheet transition ─────────────────────────────────────────────── */
.sheet-fade-enter-active, .sheet-fade-leave-active { transition: opacity 0.2s; }
.sheet-fade-enter-from, .sheet-fade-leave-to { opacity: 0; }
</style>
