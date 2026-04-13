<template>
  <div class="map-slide">
    <div class="slide-header">
      <h2>{{ slide.title }}</h2>
    </div>
    <div class="map-wrapper">
      <div v-if="!mapRegion" class="map-fallback">
        <span class="map-icon">🗺️</span>
        <p>{{ slide.content }}</p>
        <button class="map-btn" @click="$emit('openMap')">前往地圖探索</button>
      </div>
      <div v-else ref="mapContainer" class="mapbox-container"></div>
      <!-- 全覽圖例 -->
      <div v-if="mapRegion === 'all' && !loading && !error" class="map-legend">
        <div class="legend-item"><span class="legend-dot" style="background:#4e79a7"></span>北部</div>
        <div class="legend-item"><span class="legend-dot" style="background:#c8a96e"></span>中部</div>
        <div class="legend-item"><span class="legend-dot" style="background:#e15759"></span>南部及島嶼</div>
      </div>
      <div v-if="mapRegion && loading" class="map-loading">
        <span>地圖載入中…</span>
      </div>
      <div v-if="mapRegion && error" class="map-error">
        <p>地圖載入失敗：{{ error }}</p>
        <button class="map-btn" @click="$emit('openMap')">前往地圖探索</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const props = defineProps({
  slide:     { type: Object,  required: true },
  mapRegion: { type: String,  default: null }
})
defineEmits(['openMap'])

const mapContainer = ref(null)
const loading = ref(false)
const error   = ref(null)
let map = null

const REGION_OUTLINE_MAP = {
  abruzzo:         'Abruzzo.geojson',
  basilicata:      'Basilicata.geojson',
  calabria:        'Calabria.geojson',
  campania:        'Campania.geojson',
  emilia:          'Emilia-Romagna.geojson',
  friuli:          'Friuli-Venezia Giulia.geojson',
  lazio:           'Lazio.geojson',
  liguria:         'Liguria.geojson',
  lombardy:        'Lombardy.geojson',
  marche:          'Marche.geojson',
  molise:          'Molise.geojson',
  piedmont:        'Piemonte.geojson',
  puglia:          'Puglia.geojson',
  sardinia:        'Sardegna.geojson',
  sicily:          'Sicily.geojson',
  trentino:        'Trentino.geojson',
  tuscany:         'Toscana.geojson',
  umbria:          'Umbria.geojson',
  "valle d'aosta": "Valle d'Aosta.geojson",
  veneto:          'Veneto.geojson',
}

// 各產區中文名稱與色彩（北/中/南分色）
const REGION_META = {
  piedmont:        { label: '皮埃蒙特 Piemonte',          color: '#4e79a7', zone: 'north' },
  lombardy:        { label: '倫巴第 Lombardy',             color: '#4e79a7', zone: 'north' },
  trentino:        { label: '特倫蒂諾 Trentino',           color: '#4e79a7', zone: 'north' },
  "valle d'aosta": { label: "瓦萊達奧斯塔 Valle d'Aosta",  color: '#4e79a7', zone: 'north' },
  liguria:         { label: '利古里亞 Liguria',             color: '#4e79a7', zone: 'north' },
  veneto:          { label: '威尼托 Veneto',                color: '#4e79a7', zone: 'north' },
  friuli:          { label: '弗留利 Friuli',                color: '#4e79a7', zone: 'north' },
  emilia:          { label: '艾米利亞 Emilia-Romagna',      color: '#4e79a7', zone: 'north' },
  tuscany:         { label: '托斯卡納 Tuscany',             color: '#c8a96e', zone: 'center' },
  marche:          { label: '馬爾凱 Marche',                color: '#c8a96e', zone: 'center' },
  umbria:          { label: '翁布里亞 Umbria',              color: '#c8a96e', zone: 'center' },
  lazio:           { label: '拉齊奧 Lazio',                 color: '#c8a96e', zone: 'center' },
  abruzzo:         { label: '阿布魯佐 Abruzzo',             color: '#c8a96e', zone: 'center' },
  molise:          { label: '莫利塞 Molise',                color: '#c8a96e', zone: 'center' },
  campania:        { label: '坎帕尼亞 Campania',            color: '#e15759', zone: 'south'  },
  puglia:          { label: '普利亞 Puglia',                color: '#e15759', zone: 'south'  },
  basilicata:      { label: '巴西利卡塔 Basilicata',        color: '#e15759', zone: 'south'  },
  calabria:        { label: '卡拉布里亞 Calabria',          color: '#e15759', zone: 'south'  },
  sicily:          { label: '西西里 Sicily',                color: '#e15759', zone: 'south'  },
  sardinia:        { label: '薩丁尼亞 Sardinia',            color: '#e15759', zone: 'south'  },
}

const ZONE_COLORS = { north: '#4e79a7', center: '#c8a96e', south: '#e15759' }

function getCoords (g, out) {
  if (!g) return
  if (g.type === 'Point') { out.push(g.coordinates) }
  else if (g.type === 'MultiPoint' || g.type === 'LineString') g.coordinates.forEach(c => out.push(c))
  else if (g.type === 'MultiLineString' || g.type === 'Polygon') g.coordinates.forEach(r => r.forEach(c => out.push(c)))
  else if (g.type === 'MultiPolygon') g.coordinates.forEach(p => p.forEach(r => r.forEach(c => out.push(c))))
  else if (g.type === 'GeometryCollection') g.geometries.forEach(sub => getCoords(sub, out))
}

function calcBbox (geojsonList) {
  const coords = []
  geojsonList.forEach(gj => {
    if (!gj) return
    if (gj.type === 'FeatureCollection') gj.features.forEach(f => getCoords(f.geometry, coords))
    else if (gj.type === 'Feature') getCoords(gj.geometry, coords)
    else getCoords(gj, coords)
  })
  if (!coords.length) return [6, 36, 19, 48]
  let minLng = Infinity, minLat = Infinity, maxLng = -Infinity, maxLat = -Infinity
  for (const c of coords) {
    if (c[0] < minLng) minLng = c[0]
    if (c[1] < minLat) minLat = c[1]
    if (c[0] > maxLng) maxLng = c[0]
    if (c[1] > maxLat) maxLat = c[1]
  }
  return [minLng, minLat, maxLng, maxLat]
}

function destroyMap () {
  if (map) { map.remove(); map = null }
}

async function initMapAll (mapInst) {
  const regions = Object.keys(REGION_OUTLINE_MAP)
  const results = await Promise.allSettled(
    regions.map(async (r) => {
      const file = REGION_OUTLINE_MAP[r]
      const res = await fetch(`/italy/regions/${r}/geojson/${encodeURIComponent(file)}`)
      if (!res.ok) throw new Error(`${r}: HTTP ${res.status}`)
      const gj = await res.json()
      // 在每個 feature 上標記 regionId
      if (gj.type === 'FeatureCollection') {
        gj.features.forEach(f => { if (f.properties == null) f.properties = {}; f.properties._regionId = r })
      } else if (gj.type === 'Feature') {
        if (gj.properties == null) gj.properties = {}; gj.properties._regionId = r
      }
      return { id: r, gj }
    })
  )

  const loaded = results.filter(r => r.status === 'fulfilled').map(r => r.value)

  // 每個產區獨立加 source + layer，依 zone 上色
  loaded.forEach(({ id, gj }) => {
    const meta = REGION_META[id] || { color: '#888', zone: 'north' }
    const color = meta.color
    mapInst.addSource(`region-${id}`, { type: 'geojson', data: gj })
    mapInst.addLayer({
      id: `fill-${id}`,
      type: 'fill',
      source: `region-${id}`,
      paint: { 'fill-color': color, 'fill-opacity': 0.18 }
    })
    mapInst.addLayer({
      id: `line-${id}`,
      type: 'line',
      source: `region-${id}`,
      paint: { 'line-color': color, 'line-width': 1.8 }
    })
    // hover 高亮
    mapInst.addLayer({
      id: `fill-${id}-hover`,
      type: 'fill',
      source: `region-${id}`,
      paint: { 'fill-color': color, 'fill-opacity': 0 }
    })

    const popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false })
    mapInst.on('mousemove', `fill-${id}`, (e) => {
      mapInst.setPaintProperty(`fill-${id}-hover`, 'fill-opacity', 0.38)
      mapInst.getCanvas().style.cursor = 'pointer'
      const label = REGION_META[id]?.label || id
      popup.setLngLat(e.lngLat).setHTML(`<strong>${label}</strong>`).addTo(mapInst)
    })
    mapInst.on('mouseleave', `fill-${id}`, () => {
      mapInst.setPaintProperty(`fill-${id}-hover`, 'fill-opacity', 0)
      mapInst.getCanvas().style.cursor = ''
      popup.remove()
    })
  })

  const bbox = calcBbox(loaded.map(l => l.gj))
  mapInst.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: 30, maxZoom: 7, duration: 800 })
}

async function initMap (region) {
  if (!region || !mapContainer.value) return
  destroyMap()
  loading.value = true
  error.value   = null

  const token = import.meta.env.VITE_MAPBOX_TOKEN
    || (typeof window !== 'undefined' && (window.__MAPBOX_TOKEN || window.localStorage?.getItem('VITE_MAPBOX_TOKEN')))
  if (!token) {
    error.value = '未設定 Mapbox Token'
    loading.value = false
    return
  }

  mapboxgl.accessToken = token
  const mapInst = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [12.5, 42],
    zoom: 4.5,
    attributionControl: false
  })
  map = mapInst

  mapInst.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
  mapInst.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right')

  mapInst.on('load', async () => {
    try {
      if (region === 'all') {
        await initMapAll(mapInst)
      } else {
        const fileName = REGION_OUTLINE_MAP[region]
        if (!fileName) throw new Error(`找不到產區：${region}`)
        const res = await fetch(`/italy/regions/${region}/geojson/${encodeURIComponent(fileName)}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const geojson = await res.json()
        const bbox = calcBbox([geojson])
        mapInst.addSource('region', { type: 'geojson', data: geojson })
        mapInst.addLayer({ id: 'region-fill', type: 'fill', source: 'region',
          paint: { 'fill-color': '#c8a96e', 'fill-opacity': 0.25 } })
        mapInst.addLayer({ id: 'region-line', type: 'line', source: 'region',
          paint: { 'line-color': '#9b6a1f', 'line-width': 2.5 } })
        mapInst.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: 40, maxZoom: 10, duration: 800 })
      }
    } catch (e) {
      error.value = `GeoJSON 載入失敗（${e.message}）`
    } finally {
      loading.value = false
    }
  })

  mapInst.on('error', (e) => {
    error.value = `地圖錯誤：${e.error?.message || '未知'}`
    loading.value = false
  })
}

onMounted(async () => {
  if (props.mapRegion) {
    await nextTick()
    initMap(props.mapRegion)
  }
})

watch(() => props.mapRegion, (val) => {
  if (val) initMap(val)
})

onBeforeUnmount(() => destroyMap())
</script>

<style scoped>
.map-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 28px 36px 20px;
  border-radius: 22px;
  box-sizing: border-box;
}
.slide-header {
  margin-bottom: 14px;
  flex-shrink: 0;
}
.slide-header h2 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  border-bottom: 3px solid #c8a96e;
  padding-bottom: 10px;
}
.map-wrapper {
  flex: 1;
  min-height: 0;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: #f8f5f0;
}
.mapbox-container {
  width: 100%;
  height: 100%;
}
.map-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
  padding: 24px;
  box-sizing: border-box;
}
.map-loading {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(248,245,240,0.85);
  font-size: 1rem;
  color: #666;
  z-index: 2;
}
.map-error {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: #f8f5f0;
  color: #c0392b;
  text-align: center;
  padding: 24px;
  z-index: 2;
}
.map-icon { font-size: 4rem; opacity: 0.65; }
.map-fallback p, .map-error p {
  color: #555;
  font-size: 1rem;
  max-width: 400px;
  line-height: 1.6;
}
.map-btn {
  background: linear-gradient(135deg, #c8a96e, #9b6a1f);
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: 20px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}
.map-btn:hover { opacity: 0.88; }

.map-legend {
  position: absolute;
  bottom: 28px;
  left: 12px;
  background: rgba(255,255,255,0.9);
  border-radius: 8px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.78rem;
  color: #333;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  z-index: 5;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
}
.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  flex-shrink: 0;
}

:global(.mapboxgl-popup-content) {
  padding: 6px 10px;
  font-size: 0.82rem;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
</style>
