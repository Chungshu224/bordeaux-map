<template>
  <section class="de-map-section">

    <!-- 全螢幕地圖 -->
    <div ref="mapContainer" class="map"></div>

    <!-- Header（波爾多風格：透明背景 + pill 按鈕）-->
    <div class="map-header">
      <div class="map-header-left">
        <button class="map-hdr-btn" @click="emit('back')">← 返回課程</button>
        <button class="map-hdr-btn ghost" @click="router.push('/')">🏠 首頁</button>
      </div>
      <h1>🇩🇪 德國葡萄酒產區地圖</h1>
    </div>

    <!-- 左側產區列表面板（桌機）-->
    <transition name="panel-slide">
      <div v-if="listPanelOpen" class="region-list-panel">
        <div class="list-panel-header">
          <span class="list-panel-title">13 Anbaugebiete</span>
          <button class="list-panel-close" @click="listPanelOpen = false">✕</button>
        </div>
        <div class="list-item all-item" :class="{ active: !selectedId }" @click="resetView">
          <span class="list-dot" style="background:#4f9cf9"></span>
          <span>🗺 全部產區</span>
        </div>
        <div
          v-for="r in regions"
          :key="r.id"
          class="list-item"
          :class="{ active: selectedId === r.id }"
          @click="selectRegion(r)"
        >
          <span class="list-dot" :style="{ background: r.color }"></span>
          <span class="list-item-name">{{ r.icon }} {{ r.name }}</span>
          <span class="list-item-ha">{{ r.hectares.toLocaleString() }} ha</span>
        </div>
      </div>
    </transition>

    <!-- 面板收合時的展開按鈕 -->
    <button
      v-if="!listPanelOpen && mapReady"
      class="list-reopen-btn"
      @click="listPanelOpen = true"
      title="展開產區列表"
    >☰ 產區</button>

    <!-- 資訊卡（波爾多風格：白色卡片，左下角）-->
    <div
      v-if="activeRegion"
      class="map-info-bar"
      :class="{ collapsed: infoCollapsed }"
    >
      <div class="aoc-title-row">
        <span class="aoc-info-title">
          <span class="aoc-dot" :style="{ background: activeRegion.color }"></span>
          {{ activeRegion.icon }} {{ activeRegion.name }}
        </span>
        <div class="title-buttons">
          <button class="btn-collapse-inline" @click.stop="infoCollapsed = !infoCollapsed"
            :title="infoCollapsed ? '展開資訊' : '收合資訊'">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline :points="infoCollapsed ? '18 15 12 9 6 15' : '6 9 12 15 18 9'"></polyline>
            </svg>
            <span class="btn-text">{{ infoCollapsed ? '展開' : '收合' }}</span>
          </button>
          <button class="btn-reset-icon" @click="resetView" title="重置地圖">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 3v6h-6"></path>
              <path d="M20.49 15A9 9 0 1 1 21 9"></path>
            </svg>
          </button>
        </div>
      </div>
      <div v-show="!infoCollapsed" class="info-details">
        <div class="map-buttons">
          <button class="btn-reset" @click="resetView">重置地圖</button>
        </div>
        <div class="region-info-content">
          <div class="info-header">
            <b>{{ activeRegion.name }}</b>
            <span class="region-type">{{ activeRegion.nameDE }}</span>
            <span class="region-hectare"> — {{ activeRegion.hectares.toLocaleString() }} 公頃</span>
          </div>
          <div class="grape-section">
            <div class="grape-title">主要品種：</div>
            <div class="grape-badges">
              <span v-for="g in activeRegion.grapes" :key="g" class="grape-badge">{{ g }}</span>
            </div>
          </div>
          <div class="styles-section">
            <div class="grape-title">酒款類型：</div>
            <div class="grape-badges">
              <span v-for="s in activeRegion.styles" :key="s" class="style-badge-item">{{ s }}</span>
            </div>
          </div>
          <div class="grape-section">
            <div class="grape-title">土壤類型：</div>
            <div class="grape-badges">
              <span v-for="soil in activeRegion.soils" :key="soil" class="soil-badge">{{ soil }}</span>
            </div>
          </div>
          <div class="description">{{ activeRegion.description }}</div>
          <div v-if="activeRegion.villages && activeRegion.villages.length" class="grape-section">
            <div class="grape-title">重要村莊：</div>
            <div class="grape-badges">
              <span v-for="v in activeRegion.villages" :key="v" class="village-badge">{{ v }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 未選擇產區時的提示卡 -->
    <div v-else-if="mapReady" class="map-info-bar info-hint">
      <div class="aoc-title-row">
        <span class="aoc-info-title">
          <span class="aoc-dot" style="background:#1565c0"></span>
          德國 13 個葡萄酒產區
        </span>
      </div>
      <div class="info-details">
        <div class="description">點擊地圖上的產區或左側列表選擇產區，查看詳細資訊。</div>
      </div>
    </div>

    <!-- 行動版底部工具列（波爾多風格）-->
    <div v-if="mapReady" class="mobile-map-toolbar">
      <button class="mobile-tool-btn" :class="{ active: mobileListOpen }" @click="mobileListOpen = !mobileListOpen">
        <span class="mobile-tool-icon">產</span>
        <span>產區</span>
      </button>
      <button class="mobile-tool-btn reset-tool" @click="resetView">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;margin:0 auto 2px">
          <path d="M21 3v6h-6"/><path d="M20.49 15A9 9 0 1 1 21 9"/>
        </svg>
        <span>重置</span>
      </button>
      <button class="mobile-tool-btn" :class="{ active: activeRegion && !infoCollapsed }"
        @click="infoCollapsed = !infoCollapsed">
        <span class="mobile-tool-icon">資</span>
        <span>資訊</span>
      </button>
    </div>

    <!-- 行動版產區抽屜（從下方彈出）-->
    <transition name="mobile-sheet-fade">
      <div v-if="mobileListOpen" class="mobile-aoc-backdrop" @click.self="mobileListOpen = false">
        <div class="mobile-aoc-drawer">
          <div class="mobile-aoc-handle"></div>
          <div class="mobile-aoc-toolbar-header">
            <h2>選擇產區</h2>
          </div>
          <div class="mobile-region-list">
            <div class="list-item all-item" :class="{ active: !selectedId }"
              @click="resetView(); mobileListOpen = false">
              <span class="list-dot" style="background:#4f9cf9"></span>
              <span>🗺 全部產區</span>
            </div>
            <div v-for="r in regions" :key="r.id" class="list-item"
              :class="{ active: selectedId === r.id }"
              @click="selectRegion(r); mobileListOpen = false">
              <span class="list-dot" :style="{ background: r.color }"></span>
              <span class="list-item-name">{{ r.icon }} {{ r.name }}</span>
              <span class="list-item-ha">{{ r.hectares.toLocaleString() }} ha</span>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Loading / Error -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
    <div v-if="mapError" class="map-error">{{ mapError }}</div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { germanyRegions } from '../data/regions.js'

const emit = defineEmits(['back'])
const router = useRouter()

const mapContainer = ref(null)
const mapReady = ref(false)
const isLoading = ref(true)
const mapError = ref(null)
const selectedId = ref(null)
const activeRegion = ref(null)
const infoCollapsed = ref(false)
const listPanelOpen = ref(true)
const mobileListOpen = ref(false)

const regions = germanyRegions
let map = null

const GERMANY_BOUNDS = [[5.86, 47.27], [15.04, 55.06]]

async function fetchGeoJSON(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`)
  return res.json()
}

async function loadAllRegions() {
  const allFeatures = []
  for (const region of regions) {
    const files = Array.isArray(region.regionFile) ? region.regionFile : [region.regionFile]
    for (const file of files) {
      try {
        const gj = await fetchGeoJSON(file)
        const features = (gj.features || []).map(f => ({
          ...f,
          properties: { ...f.properties, regionId: region.id }
        }))
        allFeatures.push(...features)
      } catch (e) {
        console.warn('[GermanyAllRegionsMap] failed to load:', file, e)
      }
    }
  }
  return { type: 'FeatureCollection', features: allFeatures }
}

function buildColorMatch() {
  const expr = ['match', ['get', 'regionId']]
  for (const r of regions) {
    expr.push(r.id, r.color)
  }
  expr.push('#888888')
  return expr
}

async function initMap() {
  if (!mapContainer.value) return
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    bounds: GERMANY_BOUNDS,
    fitBoundsOptions: { padding: 50 },
    pitch: 0,
    bearing: 0
  })

  map.addControl(new mapboxgl.NavigationControl(), 'top-right')

  map.on('load', async () => {
    try {
      const allGeoJSON = await loadAllRegions()

      // generateId:true is required for feature-state (hover effect)
      map.addSource('de-regions', {
        type: 'geojson',
        data: allGeoJSON,
        generateId: true
      })

      map.addLayer({
        id: 'de-region-fill',
        type: 'fill',
        source: 'de-regions',
        paint: {
          'fill-color': buildColorMatch(),
          'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'hover'], false], 0.50,
            0.22
          ]
        }
      })

      map.addLayer({
        id: 'de-region-line',
        type: 'line',
        source: 'de-regions',
        paint: {
          'line-color': buildColorMatch(),
          'line-width': [
            'case',
            ['boolean', ['feature-state', 'hover'], false], 3, 2
          ],
          'line-opacity': 0.9
        }
      })

      // Hover effect
      let hoveredId = null
      map.on('mousemove', 'de-region-fill', (e) => {
        map.getCanvas().style.cursor = 'pointer'
        if (e.features.length > 0) {
          if (hoveredId !== null) {
            map.setFeatureState({ source: 'de-regions', id: hoveredId }, { hover: false })
          }
          hoveredId = e.features[0].id
          map.setFeatureState({ source: 'de-regions', id: hoveredId }, { hover: true })
        }
      })
      map.on('mouseleave', 'de-region-fill', () => {
        map.getCanvas().style.cursor = ''
        if (hoveredId !== null) {
          map.setFeatureState({ source: 'de-regions', id: hoveredId }, { hover: false })
          hoveredId = null
        }
      })

      // Click to select region
      map.on('click', 'de-region-fill', (e) => {
        if (e.features.length > 0) {
          const rid = e.features[0].properties?.regionId
          if (rid) {
            const region = regions.find(r => r.id === rid)
            if (region) selectRegion(region)
          }
        }
      })

    } catch (e) {
      console.error('[GermanyAllRegionsMap] init error:', e)
    }

    mapReady.value = true
    isLoading.value = false
  })

  map.on('error', (e) => {
    // Ignore tile/source-level non-fatal errors
    if (e?.sourceId) return
    const msg = e?.error?.message || ''
    if (
      msg.includes('Unlisted TLDs') || msg.includes('401') || msg.includes('403') ||
      msg.toLowerCase().includes('token') || msg.toLowerCase().includes('unauthorized')
    ) {
      console.warn('[GermanyAllRegionsMap] non-fatal warning:', msg)
      return
    }
    console.error('[GermanyAllRegionsMap] fatal error:', e)
    mapError.value = '地圖載入失敗，請重整頁面'
    isLoading.value = false
  })
}

function selectRegion(region) {
  if (!map) return
  selectedId.value = region.id
  activeRegion.value = region
  infoCollapsed.value = false

  map.setFilter('de-region-fill', ['==', ['get', 'regionId'], region.id])
  map.setFilter('de-region-line', ['==', ['get', 'regionId'], region.id])

  map.flyTo({ center: region.center, zoom: region.zoom, duration: 900 })
}

function resetView() {
  if (!map) return
  selectedId.value = null
  activeRegion.value = null

  map.setFilter('de-region-fill', null)
  map.setFilter('de-region-line', null)

  map.fitBounds(GERMANY_BOUNDS, { padding: 50, duration: 900 })
}

onMounted(() => { initMap() })
onUnmounted(() => { if (map) { map.remove(); map = null } })
</script>

<style scoped>
/* ── 全版面地圖 ── */
.de-map-section {
  position: fixed;
  inset: 0;
  z-index: 10;
}

.map {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* ══════════════════════════════════════
   Header（完全仿波爾多）
══════════════════════════════════════ */
.map-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: none;
  padding: 12px 16px;
  z-index: 10;
  display: flex;
  align-items: flex-start;
  gap: 12px;
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
  background: rgba(21, 101, 192, 0.88);
  color: #fff;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  transition: background 0.2s;
  white-space: nowrap;
}
.map-hdr-btn:hover { background: rgba(25, 118, 210, 0.95); }
.map-hdr-btn.ghost {
  background: rgba(255,255,255,0.78);
  border: 1.5px solid rgba(21,101,192,0.45);
  color: #1565c0;
}
.map-hdr-btn.ghost:hover { background: rgba(255,255,255,0.95); }

.map-header h1 {
  margin: 0;
  font-size: 1.3rem;
  color: #1565c0;
  text-align: center;
  flex: 1;
  text-shadow: 0 1px 4px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.9);
  padding-top: 4px;
  pointer-events: none;
}

/* ══════════════════════════════════════
   左側產區列表面板（仿波爾多 AOC list）
══════════════════════════════════════ */
.region-list-panel {
  position: absolute;
  top: 52px;
  left: 10px;
  width: 210px;
  max-height: calc(100vh - 140px);
  overflow-y: auto;
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(12px);
  border-radius: 14px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.18);
  padding: 10px 8px;
  z-index: 10;
  border: 1px solid rgba(0,0,0,0.06);
}

.region-list-panel::-webkit-scrollbar { width: 4px; }
.region-list-panel::-webkit-scrollbar-track { background: transparent; }
.region-list-panel::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 2px; }

.list-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #1565c0;
  text-transform: uppercase;
  padding: 0 6px 6px;
  border-bottom: 1px solid rgba(21,101,192,0.15);
  margin-bottom: 6px;
}

.list-panel-close {
  background: none;
  border: none;
  cursor: pointer;
  color: #1565c0;
  font-size: 14px;
  padding: 0 2px;
  line-height: 1;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 7px 8px;
  margin: 2px 0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.84rem;
  color: #222;
  transition: background 0.15s;
}
.list-item:hover { background: rgba(21,101,192,0.07); }
.list-item.active {
  background: rgba(21,101,192,0.12);
  font-weight: 600;
  color: #1565c0;
}
.list-item.all-item { font-weight: 700; }

.list-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.list-item-name { flex: 1; }
.list-item-ha {
  font-size: 0.68rem;
  color: #999;
  white-space: nowrap;
}

/* 展開面板按鈕 */
.list-reopen-btn {
  position: absolute;
  top: 52px;
  left: 10px;
  z-index: 10;
  background: rgba(255,255,255,0.96);
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 10px;
  padding: 6px 12px;
  font-size: 0.78rem;
  font-weight: 700;
  color: #1565c0;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  backdrop-filter: blur(8px);
}
.list-reopen-btn:hover { background: rgba(255,255,255,1); }

/* ══════════════════════════════════════
   資訊卡（完全仿波爾多 map-info-bar）
══════════════════════════════════════ */
.map-info-bar {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: white;
  padding: 18px;
  border-radius: 8px;
  max-width: 420px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  z-index: 10;
  font-size: 16px;
  transition: all 0.3s ease;
  color: #222;
}

.map-info-bar.collapsed {
  max-width: 350px;
  padding: 12px 18px;
}

.map-info-bar.info-hint {
  padding: 12px 16px;
}

.aoc-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  gap: 10px;
  transition: margin 0.3s ease;
}

.map-info-bar.collapsed .aoc-title-row { margin-bottom: 0; }

.aoc-info-title {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: bold;
  flex: 1;
}

.aoc-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  flex-shrink: 0;
}

.title-buttons {
  display: flex;
  gap: 8px;
  align-items: center;
}

.btn-collapse-inline {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: linear-gradient(135deg, #f5f5f5, #e8e8e8);
  color: #555;
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 600;
  transition: all 0.2s;
}
.btn-collapse-inline:hover {
  background: linear-gradient(135deg, #e8e8e8, #d0d0d0);
  border-color: #1565c0;
  color: #1565c0;
}
.btn-collapse-inline svg { transition: transform 0.3s; flex-shrink: 0; }
.btn-collapse-inline .btn-text { font-size: 0.85rem; white-space: nowrap; }

.map-info-bar.collapsed .btn-collapse-inline .btn-text { display: none; }
.map-info-bar.collapsed .btn-collapse-inline { padding: 6px 8px; }

.info-details {
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: 1000px;
  opacity: 1;
}
.map-info-bar.collapsed .info-details { max-height: 0; opacity: 0; margin: 0; padding: 0; }

.btn-reset-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 6px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(180deg, #ff6f61 0%, #ef4f45 100%);
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.16);
  flex-shrink: 0;
}
.btn-reset-icon:hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(0,0,0,0.22); }

.map-buttons { display: flex; gap: 8px; margin-bottom: 8px; }

.btn-reset {
  padding: 8px 14px;
  background: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}
.btn-reset:hover { background: #d32f2f; }

.region-info-content { font-size: 1rem; line-height: 1.5; color: #222; }

.info-header {
  margin-bottom: 8px;
  font-size: 1.05rem;
}
.info-header b { color: #333; }
.region-type { color: #888; font-size: 0.85rem; margin-left: 4px; }
.region-hectare { color: #1565c0; font-size: 0.85rem; }

.grape-section, .styles-section { margin: 6px 0; }
.grape-title { font-size: 0.9rem; color: #555; margin-bottom: 4px; }
.grape-badges { display: flex; flex-wrap: wrap; gap: 4px; }

.grape-badge   { padding: 2px 8px; border-radius: 10px; font-size: 0.82rem; background: #f3e8ff; color: #7c3aed; }
.style-badge-item { padding: 2px 8px; border-radius: 10px; font-size: 0.82rem; background: #fff3e0; color: #c65100; }
.soil-badge    { padding: 2px 8px; border-radius: 10px; font-size: 0.82rem; background: #fef3c7; color: #92400e; }
.village-badge { padding: 2px 8px; border-radius: 10px; font-size: 0.82rem; background: #e0f2fe; color: #0369a1; }

.description {
  margin-top: 8px;
  font-size: 0.92rem;
  color: #444;
  line-height: 1.55;
}

/* ══════════════════════════════════════
   行動版工具列（波爾多風格）
══════════════════════════════════════ */
.mobile-map-toolbar {
  display: none;
}

/* ══════════════════════════════════════
   行動版產區抽屜
══════════════════════════════════════ */
.mobile-aoc-backdrop {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(15,23,42,0.34);
  z-index: 200;
  backdrop-filter: blur(4px);
}

.mobile-aoc-drawer {
  position: absolute;
  left: 50%;
  right: auto;
  transform: translateX(-50%);
  top: calc(env(safe-area-inset-top, 0px) + 6px);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 70px);
  width: min(90vw, 480px);
  display: flex;
  flex-direction: column;
  background: #f7f3ee;
  border-radius: 20px 20px 14px 14px;
  box-shadow: 0 -10px 30px rgba(0,0,0,0.24);
  overflow: hidden;
  padding-bottom: 10px;
}

.mobile-aoc-handle {
  width: 52px;
  height: 5px;
  border-radius: 999px;
  background: rgba(21,101,192,0.25);
  margin: 10px auto 8px;
}

.mobile-aoc-toolbar-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px 12px;
  border-bottom: 1px solid rgba(21,101,192,0.14);
}
.mobile-aoc-toolbar-header h2 {
  margin: 0;
  font-size: 1.05rem;
  color: #1565c0;
}

.mobile-region-list {
  flex: 1;
  overflow-y: auto;
  padding: 10px 12px;
}

/* ══════════════════════════════════════
   面板動畫
══════════════════════════════════════ */
.panel-slide-enter-active, .panel-slide-leave-active { transition: all 0.25s ease; }
.panel-slide-enter-from, .panel-slide-leave-to { opacity: 0; transform: translateX(-12px); }

.mobile-sheet-fade-enter-active, .mobile-sheet-fade-leave-active { transition: opacity 0.24s ease; }
.mobile-sheet-fade-enter-from, .mobile-sheet-fade-leave-to { opacity: 0; }

/* ══════════════════════════════════════
   Loading / Error
══════════════════════════════════════ */
.loading-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10,20,40,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 30;
}
.loading-spinner {
  width: 40px; height: 40px;
  border: 3px solid rgba(255,255,255,0.2);
  border-top-color: #4f9cf9;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.map-error {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(200,30,30,0.92);
  color: white;
  padding: 10px 24px;
  border-radius: 10px;
  z-index: 30;
  font-weight: 600;
  font-size: 0.9rem;
}

/* ══════════════════════════════════════
   行動版 RWD（≤768px）
══════════════════════════════════════ */
@media (max-width: 768px) {
  .region-list-panel { display: none; }
  .list-reopen-btn { display: none; }

  .mobile-map-toolbar {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(255,255,255,0.97);
    border-top: 1px solid rgba(0,0,0,0.07);
    z-index: 100;
    padding: 8px 0 calc(8px + env(safe-area-inset-bottom, 0px));
    gap: 0;
    justify-content: space-around;
  }

  .mobile-tool-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    padding: 6px 12px;
    border: none;
    background: none;
    color: #555;
    font-size: 0.68rem;
    font-weight: 600;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.2s;
    min-width: 52px;
  }
  .mobile-tool-btn.active { color: #1565c0; background: rgba(21,101,192,0.1); }
  .mobile-tool-btn.reset-tool { color: #f44336; }
  .mobile-tool-icon { font-size: 1.1rem; font-weight: 800; }

  .map-info-bar {
    left: 10px;
    right: 10px;
    max-width: none;
    bottom: 68px;
    font-size: 14px;
    padding: 14px;
  }
  .map-info-bar.collapsed { padding: 10px 14px; }

  .map-header h1 { font-size: 1rem; }

  .mobile-aoc-drawer {
    left: 0;
    right: 0;
    transform: none;
    width: 100%;
    top: 2px;
    bottom: calc(env(safe-area-inset-bottom, 0px) + 70px);
    border-radius: 20px 20px 14px 14px;
  }
}
</style>
