<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || t('italy.slides.abruzzoMap.defaultTitle') }}</h2>
      <p class="slide-subtitle">{{ t('italy.slides.mapCommon.subtitle') }}</p>
    </div>
    <div class="zone-buttons">
      <div class="btn-group" v-for="g in GROUPS" :key="g.key">
        <span class="btn-group-label">{{ t(`italy.slides.abruzzoMap.${g.label}`) }}</span>
        <button
          v-for="z in allZones.filter(z => z.group === g.key)" :key="z.id"
          class="zone-btn" :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <button v-if="selected" class="reset-btn" @click="resetView">{{ t('italy.slides.mapCommon.reset') }}</button>
    </div>
    <div class="map-info-row">
      <div class="map-wrapper">
        <div ref="mapContainer" class="mapbox-container"></div>
        <div v-if="loading" class="map-loading">{{ t('italy.slides.mapCommon.loading') }}</div>
        <div v-if="mapError" class="map-error">{{ mapError }}</div>
        <div class="map-legend">
          <div class="legend-row"><span class="legend-dot tier-s"></span>{{ t('italy.slides.abruzzoMap.legend.s') }}</div>
          <div class="legend-row"><span class="legend-dot tier-a"></span>{{ t('italy.slides.abruzzoMap.legend.a') }}</div>
          <div class="legend-row"><span class="legend-dot tier-b"></span>{{ t('italy.slides.abruzzoMap.legend.b') }}</div>
        </div>
      </div>
      <div class="info-panel" v-if="selectedInfo">
        <div class="info-badge" :class="`tier-${selectedInfo.tier}`">{{ selectedInfo.tierLabel }}</div>
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
        <div class="empty-icon">🏔️</div>
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

// 按鈕分組：key 對應 ZONES 的 group，label 為 italy.slides.abruzzoMap 下的鍵
const GROUPS = [
  { key: 'docg', label: 'groupDocg' },
  { key: 'main', label: 'groupMain' },
  { key: 'small', label: 'groupSmall' }
]

// ── 產區資料 ─────────────────────────────────────────────────
// 此元件用於 L2M2L4，文字放在 locales/*/italy.js 的 italy.slides.abruzzoMap.zones.<id>，
// 這裡只保留地理與樣式資料。rows：資訊面板要顯示的欄位，label 取自 italy.slides.mapCommon.labels.<key>
const ZONES = [
  {
    id: 'colline-teramane', group: 'docg', emoji: '🏆', tier: 's',
    center: [13.780, 42.650], zoom: 10,
    rows: ['established', 'location', 'grape', 'ageing', 'style'],
    geojsonPath: "/italy/regions/abruzzo/geojson/DOCG/Montepulciano d'Abruzzo Colline Teramane DOCG.geojson"
  },
  {
    id: 'tullum', group: 'docg', emoji: '⭐', tier: 's',
    center: [14.318, 42.343], zoom: 12,
    rows: ['established', 'nameOrigin', 'wines', 'location', 'style'],
    geojsonPath: '/italy/regions/abruzzo/geojson/DOCG/Terre Tollesi Tullum DOCG.geojson'
  },
  {
    id: 'montepulciano-doc', group: 'main', emoji: '🍷', tier: 'a',
    center: [13.850, 42.200], zoom: 8.5,
    rows: ['established', 'scope', 'grape', 'tiers', 'feature'],
    geojsonPath: "/italy/regions/abruzzo/geojson/DOC/Montepulciano d'Abruzzo DOC.geojson"
  },
  {
    id: 'cerasuolo', group: 'main', emoji: '🌸', tier: 'a',
    center: [13.820, 42.180], zoom: 8.5,
    rows: ['established', 'nameOrigin', 'grape', 'style', 'feature'],
    geojsonPath: "/italy/regions/abruzzo/geojson/DOC/Cerasuolo d'Abruzzo DOC.geojson"
  },
  {
    id: 'trebbiano', group: 'main', emoji: '⚪', tier: 'a',
    center: [13.870, 42.240], zoom: 8.5,
    rows: ['grape', 'tiers', 'feature', 'producers', 'style'],
    geojsonPath: "/italy/regions/abruzzo/geojson/DOC/Trebbiano d'Abruzzo DOC.geojson"
  },
  {
    id: 'controguerra', group: 'small', emoji: '🌿', tier: 'b',
    center: [13.832, 42.862], zoom: 12,
    rows: ['established', 'location', 'grape', 'feature', 'style'],
    geojsonPath: '/italy/regions/abruzzo/geojson/DOC/Controguerra DOC.geojson'
  },
  {
    id: 'villamagna', group: 'small', emoji: '🍇', tier: 'b',
    center: [14.237, 42.330], zoom: 12,
    rows: ['location', 'grape', 'feature'],
    geojsonPath: '/italy/regions/abruzzo/geojson/DOC/Villamagna DOC.geojson'
  },
  {
    id: 'ortona', group: 'small', emoji: '🌊', tier: 'b',
    center: [14.403, 42.355], zoom: 12,
    rows: ['location', 'grape', 'history'],
    geojsonPath: '/italy/regions/abruzzo/geojson/DOC/Ortona DOC.geojson'
  }
]

// 依目前語系組出含文字的產區資料
const allZones = computed(() => ZONES.map(z => {
  const base = `italy.slides.abruzzoMap.zones.${z.id}`
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

const TIER_STYLE = {
  s: { fill: '#1A237E', line: '#90CAF9', fillOpacity: 0.35, lineWidth: 2.8 },
  a: { fill: '#B71C1C', line: '#EF9A9A', fillOpacity: 0.26, lineWidth: 2.2 },
  b: { fill: '#1B5E20', line: '#A5D6A7', fillOpacity: 0.22, lineWidth: 1.8 }
}

const mapContainer = ref(null)
const loading = ref(true)
const mapError = ref(null)
const selected = ref(null)
let map = null
let markersArr = []

const selectedInfo = computed(() =>
  selected.value ? allZones.value.find(z => z.id === selected.value) : null
)

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

async function highlightAll () {
  if (!map || !map.isStyleLoaded()) return
  const geojsonData = await Promise.all(ZONES.map(z => fetchGeojson(z)))
  ZONES.forEach((z, i) => {
    const gj = geojsonData[i]
    if (!gj) return
    const ts = TIER_STYLE[z.tier]
    const fillId = `fill-${z.id}`
    const lineId = `line-${z.id}`
    if (!map.getSource(z.id)) map.addSource(z.id, { type: 'geojson', data: gj })
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
  ZONES.forEach(z => {
    const el = document.createElement('div')
    el.innerHTML = z.emoji
    el.style.cssText = 'font-size:16px;cursor:pointer;filter:drop-shadow(0 1px 3px rgba(0,0,0,0.5));transition:transform 0.15s;'
    el.addEventListener('mouseenter', () => { el.style.transform = 'scale(1.3)' })
    el.addEventListener('mouseleave', () => { el.style.transform = 'scale(1)' })
    el.addEventListener('click', () => selectZone(z.id))
    markersArr.push(new mapboxgl.Marker({ element: el }).setLngLat(z.center).addTo(map))
  })
}

function selectZone (id) {
  selected.value = id
  const info = ZONES.find(z => z.id === id)
  if (!info || !map) return
  ZONES.forEach(z => {
    const ts = TIER_STYLE[z.tier]
    const active = z.id === id
    if (map.getLayer(`fill-${z.id}`)) {
      map.setPaintProperty(`fill-${z.id}`, 'fill-opacity', active ? ts.fillOpacity * 2.2 : ts.fillOpacity * 0.35)
    }
    if (map.getLayer(`line-${z.id}`)) {
      map.setPaintProperty(`line-${z.id}`, 'line-width', active ? ts.lineWidth * 1.8 : ts.lineWidth * 0.6)
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
  map.flyTo({ center: [13.80, 42.20], zoom: 8.0, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = t('italy.slides.mapCommon.noToken'); loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [13.80, 42.20],
    zoom: 8.0,
    attributionControl: false
  })
  map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
  map.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right')
  map.on('load', async () => { await highlightAll(); loading.value = false })
  map.on('error', e => { mapError.value = t('italy.slides.mapCommon.mapError', { msg: e.error?.message || t('italy.slides.mapCommon.unknownError') }); loading.value = false })
}

onMounted(async () => { await nextTick(); initMap() })
onBeforeUnmount(() => {
  markersArr.forEach(m => m.remove()); markersArr = []
  if (map) { map.remove(); map = null }
})
</script>

<style scoped>
.docg-map-slide {
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
  padding: 18px 26px 14px; box-sizing: border-box; gap: 8px;
}
.slide-header { flex-shrink: 0; }
.slide-header h2 {
  font-size: 1.38rem; font-weight: 700; color: #2c3e50;
  margin: 0 0 3px; border-bottom: 3px solid #c8a96e; padding-bottom: 7px;
}
.slide-subtitle { font-size: 0.8rem; color: #888; margin: 0; }

.zone-buttons {
  display: flex; flex-wrap: wrap; gap: 6px; align-items: center; flex-shrink: 0;
}
.btn-group { display: flex; align-items: center; gap: 5px; flex-wrap: wrap; }
.btn-group-label { font-size: 0.72rem; font-weight: 700; color: #888; white-space: nowrap; }

.zone-btn {
  padding: 4px 10px; border-radius: 16px; border: 1.5px solid transparent;
  font-size: 0.76rem; font-weight: 600; cursor: pointer; transition: all 0.15s; white-space: nowrap;
}
.zone-btn.tier-s   { background: #e8eaf6; border-color: #1A237E; color: #1A237E; }
.zone-btn.tier-a   { background: #fff5f5; border-color: #B71C1C; color: #B71C1C; }
.zone-btn.tier-b   { background: #f1f8e9; border-color: #1B5E20; color: #1B5E20; }
.zone-btn.active.tier-s { background: #1A237E; color: #fff; }
.zone-btn.active.tier-a { background: #B71C1C; color: #fff; }
.zone-btn.active.tier-b { background: #1B5E20; color: #fff; }
.zone-btn:hover:not(.active) { opacity: 0.75; transform: translateY(-1px); }

.reset-btn {
  padding: 4px 10px; border-radius: 14px; border: 1px solid #ccc;
  background: #f5f5f5; color: #666; font-size: 0.74rem; cursor: pointer;
  margin-left: auto; transition: background 0.15s;
}
.reset-btn:hover { background: #e8e8e8; }

.map-info-row { flex: 1; min-height: 0; display: flex; gap: 10px; }
.map-wrapper {
  flex: 1 1 58%; min-height: 0; position: relative;
  border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.12);
}
.mapbox-container { width: 100%; height: 100%; }
.map-loading, .map-error {
  position: absolute; inset: 0; display: flex; align-items: center;
  justify-content: center; font-size: 0.88rem; background: rgba(248,245,240,0.9); z-index: 3;
}
.map-error { color: #c0392b; }

.map-legend {
  position: absolute; bottom: 26px; left: 8px;
  background: rgba(255,255,255,0.93); border-radius: 8px; padding: 6px 9px;
  display: flex; flex-direction: column; gap: 4px;
  font-size: 0.7rem; color: #444; box-shadow: 0 2px 8px rgba(0,0,0,0.12); z-index: 5;
}
.legend-row { display: flex; align-items: center; gap: 5px; }
.legend-dot { width: 11px; height: 11px; border-radius: 3px; flex-shrink: 0; }
.legend-dot.tier-s { background: #1A237E; }
.legend-dot.tier-a { background: #B71C1C; }
.legend-dot.tier-b { background: #1B5E20; }

.info-panel {
  flex: 0 0 40%; overflow-y: auto; background: #fafafa; border-radius: 12px;
  padding: 14px 16px; box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  display: flex; flex-direction: column; gap: 8px; box-sizing: border-box;
}
.info-empty { align-items: center; justify-content: center; text-align: center; color: #aaa; }
.empty-icon { font-size: 2rem; }
.info-empty p { font-size: 0.84rem; line-height: 1.5; margin: 0; }
.empty-hint {
  display: flex; flex-direction: column; gap: 4px;
  text-align: left; margin-top: 8px; font-size: 0.75rem; color: #666;
}
.hint-row { display: flex; align-items: center; gap: 6px; }
.hint-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
.hint-dot.tier-s { background: #1A237E; }
.hint-dot.tier-a { background: #B71C1C; }
.hint-dot.tier-b { background: #1B5E20; }

.info-badge {
  display: inline-block; padding: 2px 10px; border-radius: 10px;
  font-size: 0.72rem; font-weight: 700; color: #fff; align-self: flex-start;
}
.info-badge.tier-s { background: #1A237E; }
.info-badge.tier-a { background: #B71C1C; }
.info-badge.tier-b { background: #1B5E20; }

.info-name { font-size: 1rem; font-weight: 700; color: #2c3e50; margin: 0; }
.info-rows { display: flex; flex-direction: column; gap: 4px; }
.info-row { display: flex; gap: 6px; font-size: 0.77rem; line-height: 1.4; }
.info-label { flex: 0 0 60px; font-weight: 600; color: #888; font-size: 0.72rem; }
.info-val { color: #333; flex: 1; }

.info-desc {
  font-size: 0.77rem; color: #555; line-height: 1.55;
  background: #f0f4f8; border-radius: 7px; padding: 9px 11px;
}
.info-pair, .info-price {
  font-size: 0.76rem; color: #555; border-radius: 7px; padding: 7px 11px; line-height: 1.45;
}
.info-pair { background: #fff8e8; }
.info-price { background: #e8eaf6; }
.pair-label, .price-label { font-weight: 700; margin-right: 4px; }

@media (max-width: 680px) {
  .docg-map-slide { padding: 12px 12px 8px; }
  .map-info-row { flex-direction: column; }
  .map-wrapper { flex: 0 0 190px; }
  .info-panel { flex: 1; }
  .slide-header h2 { font-size: 1.05rem; }
}
</style>
