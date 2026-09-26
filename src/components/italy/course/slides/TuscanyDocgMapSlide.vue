<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || t('italy.slides.tuscanyMap.defaultTitle') }}</h2>
      <p class="slide-subtitle">{{ t('italy.slides.mapCommon.subtitle') }}</p>
    </div>

    <!-- 分類按鈕列 -->
    <div class="zone-buttons">
      <div class="btn-group">
        <span class="btn-group-label">{{ t('italy.slides.tuscanyMap.groupDocg') }}</span>
        <button
          v-for="z in docgZones"
          :key="z.id"
          class="zone-btn"
          :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <div class="btn-group">
        <span class="btn-group-label">{{ t('italy.slides.tuscanyMap.groupDoc') }}</span>
        <button
          v-for="z in docZones"
          :key="z.id"
          class="zone-btn"
          :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <button v-if="selected" class="reset-btn" @click="resetView">{{ t('italy.slides.mapCommon.reset') }}</button>
    </div>

    <!-- 地圖 + 資訊 -->
    <div class="map-info-row">
      <div class="map-wrapper">
        <div ref="mapContainer" class="mapbox-container"></div>
        <div v-if="loading" class="map-loading">{{ t('italy.slides.mapCommon.loading') }}</div>
        <div v-if="mapError" class="map-error">{{ mapError }}</div>
        <div class="map-legend">
          <div class="legend-row"><span class="legend-dot tier-s"></span>{{ t('italy.slides.tuscanyMap.legend.s') }}</div>
          <div class="legend-row"><span class="legend-dot tier-a"></span>{{ t('italy.slides.tuscanyMap.legend.a') }}</div>
          <div class="legend-row"><span class="legend-dot tier-b"></span>{{ t('italy.slides.tuscanyMap.legend.b') }}</div>
          <div class="legend-row"><span class="legend-dot tier-doc"></span>{{ t('italy.slides.tuscanyMap.legend.doc') }}</div>
        </div>
      </div>

      <!-- 資訊面板 -->
      <div class="info-panel" v-if="selectedInfo">
        <div class="info-badge" :class="`tier-${selectedInfo.tier}`">
          {{ selectedInfo.tierLabel }}
        </div>
        <h3 class="info-name">{{ selectedInfo.name }}</h3>
        <div class="info-rows">
          <div class="info-row" v-for="row in selectedInfo.details" :key="row.key">
            <span class="info-label">{{ row.label }}</span>
            <span class="info-val">{{ row.value }}</span>
          </div>
        </div>
        <div class="info-desc">{{ selectedInfo.desc }}</div>
        <div class="info-pair" v-if="selectedInfo.pairing">
          <span class="pair-label">{{ t('italy.slides.mapCommon.pairing') }}</span>{{ selectedInfo.pairing }}
        </div>
        <div class="info-price" v-if="selectedInfo.price">
          <span class="price-label">{{ t('italy.slides.mapCommon.price') }}</span>{{ selectedInfo.price }}
        </div>
      </div>
      <div class="info-panel info-empty" v-else>
        <div class="empty-icon">👆</div>
        <p>{{ t('italy.slides.mapCommon.emptyLine1') }}<br>{{ t('italy.slides.mapCommon.emptyLine2') }}</p>
        <div class="empty-hint">
          <div class="hint-row" v-for="z in allZones" :key="z.id">
            <span class="hint-dot" :class="`tier-${z.tier}`"></span>
            <span>{{ z.emoji }} {{ z.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

defineProps({ slide: { type: Object, default: () => ({}) } })

const { t } = useI18n()

// ── 產區資料 ─────────────────────────────────────────────────
// 此元件同時用於 L1M2L2、L2M6L2、L3M3L2，因此文字（名稱、細節、描述、配餐、價格）
// 放在 locales/*/italy.js 的 italy.slides.tuscanyMap.zones.<id>，這裡只保留地理與樣式資料。
// rows：資訊面板要顯示的欄位，label 取自 italy.slides.mapCommon.labels.<key>
const ZONES = [
  {
    id: 'brunello',
    group: 'docg',
    emoji: '👑',
    tier: 's',
    center: [11.490, 42.986],
    zoom: 11.5,
    color: '#8B0000',
    rows: ['grape', 'area', 'ageing', 'style', 'location'],
    geojsonPath: '/italy/regions/tuscany/geojson/DOCG/Brunello di Montalcino DOCG.geojson'
  },
  {
    id: 'chianti-classico',
    group: 'docg',
    emoji: '🐓',
    tier: 'a',
    center: [11.290, 43.545],
    zoom: 10,
    color: '#1B5E20',
    rows: ['grape', 'area', 'tiers', 'style', 'location'],
    geojsonPath: '/italy/regions/tuscany/geojson/DOCG/Chianti Classico DOCG.geojson'
  },
  {
    id: 'vino-nobile',
    group: 'docg',
    emoji: '🏛️',
    tier: 'a',
    center: [11.775, 43.098],
    zoom: 12,
    color: '#4A148C',
    rows: ['grape', 'area', 'ageing', 'style', 'location'],
    geojsonPath: '/italy/regions/tuscany/geojson/DOCG/Vino Nobile di Montepulciano DOCG.geojson'
  },
  {
    id: 'morellino',
    group: 'docg',
    emoji: '🌊',
    tier: 'b',
    center: [11.348, 42.688],
    zoom: 11,
    color: '#00695C',
    rows: ['grape', 'area', 'ageing', 'style', 'location'],
    geojsonPath: '/italy/regions/tuscany/geojson/DOCG/Morellino di Scansano DOCG.geojson'
  },
  {
    id: 'vernaccia',
    group: 'docg',
    emoji: '🏰',
    tier: 'b',
    center: [11.042, 43.468],
    zoom: 12.5,
    color: '#F57F17',
    rows: ['grape', 'area', 'ageing', 'style', 'location'],
    geojsonPath: '/italy/regions/tuscany/geojson/DOCG/Vernaccia di San Gimignano DOCG.geojson'
  },
  {
    id: 'rosso-montalcino',
    group: 'doc',
    emoji: '🍷',
    tier: 'doc',
    center: [11.490, 42.986],
    zoom: 11.5,
    color: '#B71C1C',
    rows: ['grape', 'area', 'ageing', 'style', 'position'],
    geojsonPath: '/italy/regions/tuscany/geojson/DOC/Rosso di Montalcino DOC.geojson'
  },
  {
    id: 'bolgheri',
    group: 'doc',
    emoji: '🌊',
    tier: 'doc',
    center: [10.575, 43.228],
    zoom: 12,
    color: '#1565C0',
    rows: ['grape', 'area', 'ageing', 'style', 'location'],
    geojsonPath: '/italy/regions/tuscany/geojson/DOC/Bolgheri DOC.geojson'
  }
]

// 依目前語系組出含文字的產區資料
const allZones = computed(() => ZONES.map(z => {
  const base = `italy.slides.tuscanyMap.zones.${z.id}`
  return {
    ...z,
    name: t(`${base}.name`),
    shortName: t(`${base}.shortName`),
    tierLabel: t(`${base}.tierLabel`),
    details: z.rows.map(key => ({
      key,
      label: t(`italy.slides.mapCommon.labels.${key}`),
      value: t(`${base}.${key}`)
    })),
    desc: t(`${base}.desc`),
    pairing: t(`${base}.pairing`),
    price: t(`${base}.price`)
  }
}))
const docgZones = computed(() => allZones.value.filter(z => z.group === 'docg'))
const docZones = computed(() => allZones.value.filter(z => z.group === 'doc'))

const TIER_STYLE = {
  s:   { fill: '#8B0000', line: '#EF5350', fillOpacity: 0.28, lineWidth: 2.5 },
  a:   { fill: '#1B5E20', line: '#66BB6A', fillOpacity: 0.25, lineWidth: 2.2 },
  b:   { fill: '#4A148C', line: '#CE93D8', fillOpacity: 0.25, lineWidth: 2 },
  doc: { fill: '#1565C0', line: '#64B5F6', fillOpacity: 0.22, lineWidth: 1.8 }
}

// ── 狀態 ─────────────────────────────────────────────────────
const mapContainer = ref(null)
const loading = ref(true)
const mapError = ref(null)
const selected = ref(null)
let map = null
let markersArr = []

const selectedInfo = computed(() =>
  selected.value ? allZones.value.find(z => z.id === selected.value) : null
)

// ── GeoJSON 非同步載入 ────────────────────────────────────────
async function fetchGeojson (z) {
  try {
    const res = await fetch(z.geojsonPath)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    if (!data.type || (data.type === 'Feature' && !data.geometry)) throw new Error('empty geometry')
    return data
  } catch (e) {
    console.warn(`Failed to load GeoJSON for ${z.id}:`, e)
    return null
  }
}

// ── 地圖操作 ─────────────────────────────────────────────────
async function highlightAll () {
  if (!map || !map.isStyleLoaded()) return

  const geojsonData = await Promise.all(ZONES.map(z => fetchGeojson(z)))

  ZONES.forEach((z, i) => {
    const gj = geojsonData[i]
    if (!gj) return

    const fillId = `fill-${z.id}`
    const lineId = `line-${z.id}`
    const ts = TIER_STYLE[z.tier]

    if (!map.getSource(z.id)) {
      map.addSource(z.id, { type: 'geojson', data: gj })
    }
    if (!map.getLayer(fillId)) {
      map.addLayer({ id: fillId, type: 'fill', source: z.id,
        paint: { 'fill-color': ts.fill, 'fill-opacity': ts.fillOpacity } })
    }
    if (!map.getLayer(lineId)) {
      map.addLayer({ id: lineId, type: 'line', source: z.id,
        paint: { 'line-color': ts.line, 'line-width': ts.lineWidth } })
    }
    map.on('click', fillId, () => selectZone(z.id))
    map.on('mouseenter', fillId, () => { map.getCanvas().style.cursor = 'pointer' })
    map.on('mouseleave', fillId, () => { map.getCanvas().style.cursor = '' })
  })

  // 數字標記
  ZONES.forEach((z, i) => {
    const el = document.createElement('div')
    el.innerHTML = z.emoji
    el.style.cssText = `font-size:16px;cursor:pointer;filter:drop-shadow(0 1px 3px rgba(0,0,0,0.5));transition:transform 0.15s;`
    el.addEventListener('mouseenter', () => { el.style.transform = 'scale(1.3)' })
    el.addEventListener('mouseleave', () => { el.style.transform = 'scale(1)' })
    el.addEventListener('click', () => selectZone(z.id))
    const m = new mapboxgl.Marker({ element: el })
      .setLngLat(z.center)
      .addTo(map)
    markersArr.push(m)
  })
}

function selectZone (id) {
  selected.value = id
  const info = ZONES.find(z => z.id === id)
  if (!info || !map) return

  ZONES.forEach(z => {
    const ts = TIER_STYLE[z.tier]
    const isActive = z.id === id
    if (map.getLayer(`fill-${z.id}`)) {
      map.setPaintProperty(`fill-${z.id}`, 'fill-opacity', isActive ? ts.fillOpacity * 2.2 : ts.fillOpacity * 0.35)
    }
    if (map.getLayer(`line-${z.id}`)) {
      map.setPaintProperty(`line-${z.id}`, 'line-width', isActive ? ts.lineWidth * 1.8 : ts.lineWidth * 0.7)
    }
  })

  map.flyTo({ center: info.center, zoom: info.zoom, duration: 900, essential: true })
}

function resetView () {
  selected.value = null
  if (!map) return
  ZONES.forEach(z => {
    const ts = TIER_STYLE[z.tier]
    if (map.getLayer(`fill-${z.id}`)) map.setPaintProperty(`fill-${z.id}`, 'fill-opacity', ts.fillOpacity)
    if (map.getLayer(`line-${z.id}`)) map.setPaintProperty(`line-${z.id}`, 'line-width', ts.lineWidth)
  })
  map.flyTo({ center: [11.15, 43.28], zoom: 7.8, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = t('italy.slides.mapCommon.noToken'); loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [11.15, 43.28],
    zoom: 7.8,
    attributionControl: false
  })
  map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
  map.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right')
  map.on('load', async () => { await highlightAll(); loading.value = false })
  map.on('error', e => { mapError.value = t('italy.slides.mapCommon.mapError', { msg: e.error?.message || t('italy.slides.mapCommon.unknownError') }); loading.value = false })
}

onMounted(async () => { await nextTick(); initMap() })
onBeforeUnmount(() => {
  markersArr.forEach(m => m.remove())
  markersArr = []
  if (map) { map.remove(); map = null }
})
</script>

<style scoped>
.docg-map-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 18px 26px 14px;
  box-sizing: border-box;
  gap: 8px;
}

/* ── 標題 ── */
.slide-header { flex-shrink: 0; }
.slide-header h2 {
  font-size: 1.38rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 3px;
  border-bottom: 3px solid #c8a96e;
  padding-bottom: 7px;
}
.slide-subtitle { font-size: 0.8rem; color: #888; margin: 0; }

/* ── 按鈕列 ── */
.zone-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  flex-shrink: 0;
}
.btn-group {
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
}
.btn-group-label {
  font-size: 0.72rem;
  font-weight: 700;
  color: #888;
  white-space: nowrap;
}
.zone-btn {
  padding: 4px 10px;
  border-radius: 16px;
  border: 1.5px solid transparent;
  font-size: 0.76rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
}
.zone-btn.tier-s   { background: #fdf0f0; border-color: #8B0000; color: #8B0000; }
.zone-btn.tier-a   { background: #f0fdf4; border-color: #1B5E20; color: #1B5E20; }
.zone-btn.tier-b   { background: #f5f0ff; border-color: #6A1B9A; color: #6A1B9A; }
.zone-btn.tier-doc { background: #f0f4ff; border-color: #1565C0; color: #1565C0; }
.zone-btn.active.tier-s   { background: #8B0000; color: #fff; }
.zone-btn.active.tier-a   { background: #1B5E20; color: #fff; }
.zone-btn.active.tier-b   { background: #6A1B9A; color: #fff; }
.zone-btn.active.tier-doc { background: #1565C0; color: #fff; }
.zone-btn:hover:not(.active) { opacity: 0.75; transform: translateY(-1px); }
.reset-btn {
  padding: 4px 10px;
  border-radius: 14px;
  border: 1px solid #ccc;
  background: #f5f5f5;
  color: #666;
  font-size: 0.74rem;
  cursor: pointer;
  margin-left: auto;
  transition: background 0.15s;
}
.reset-btn:hover { background: #e8e8e8; }

/* ── 主要區域 ── */
.map-info-row {
  flex: 1;
  min-height: 0;
  display: flex;
  gap: 10px;
}
.map-wrapper {
  flex: 1 1 58%;
  min-height: 0;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
}
.mapbox-container { width: 100%; height: 100%; }
.map-loading, .map-error {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.88rem;
  background: rgba(248,245,240,0.9);
  z-index: 3;
}
.map-error { color: #c0392b; }

.map-legend {
  position: absolute;
  bottom: 26px;
  left: 8px;
  background: rgba(255,255,255,0.93);
  border-radius: 8px;
  padding: 6px 9px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.7rem;
  color: #444;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  z-index: 5;
}
.legend-row { display: flex; align-items: center; gap: 5px; }
.legend-dot {
  width: 11px; height: 11px; border-radius: 3px; flex-shrink: 0;
}
.legend-dot.tier-s   { background: #8B0000; }
.legend-dot.tier-a   { background: #1B5E20; }
.legend-dot.tier-b   { background: #6A1B9A; }
.legend-dot.tier-doc { background: #1565C0; }

/* ── 資訊面板 ── */
.info-panel {
  flex: 0 0 40%;
  overflow-y: auto;
  background: #fafafa;
  border-radius: 12px;
  padding: 14px 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
}
.info-empty {
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #aaa;
}
.empty-icon { font-size: 2rem; }
.info-empty p { font-size: 0.84rem; line-height: 1.5; margin: 0; }
.empty-hint {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  margin-top: 8px;
  font-size: 0.75rem;
  color: #666;
}
.hint-row { display: flex; align-items: center; gap: 6px; }
.hint-dot {
  width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0;
}
.hint-dot.tier-s   { background: #8B0000; }
.hint-dot.tier-a   { background: #1B5E20; }
.hint-dot.tier-b   { background: #6A1B9A; }
.hint-dot.tier-doc { background: #1565C0; }

.info-badge {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 10px;
  font-size: 0.72rem;
  font-weight: 700;
  color: #fff;
  align-self: flex-start;
}
.info-badge.tier-s   { background: #8B0000; }
.info-badge.tier-a   { background: #1B5E20; }
.info-badge.tier-b   { background: #6A1B9A; }
.info-badge.tier-doc { background: #1565C0; }

.info-name { font-size: 1rem; font-weight: 700; color: #2c3e50; margin: 0; }

.info-rows { display: flex; flex-direction: column; gap: 4px; }
.info-row { display: flex; gap: 6px; font-size: 0.77rem; line-height: 1.4; }
.info-label { flex: 0 0 54px; font-weight: 600; color: #888; font-size: 0.72rem; }
.info-val { color: #333; flex: 1; }

.info-desc {
  font-size: 0.77rem;
  color: #555;
  line-height: 1.55;
  background: #f0f4f8;
  border-radius: 7px;
  padding: 9px 11px;
}
.info-pair, .info-price {
  font-size: 0.76rem;
  color: #555;
  border-radius: 7px;
  padding: 7px 11px;
  line-height: 1.45;
}
.info-pair { background: #fff8e8; }
.info-price { background: #e8f5e9; }
.pair-label, .price-label { font-weight: 700; margin-right: 4px; }

@media (max-width: 680px) {
  .docg-map-slide { padding: 12px 12px 8px; }
  .map-info-row { flex-direction: column; }
  .map-wrapper { flex: 0 0 190px; }
  .info-panel { flex: 1; }
  .slide-header h2 { font-size: 1.05rem; }
}
</style>
