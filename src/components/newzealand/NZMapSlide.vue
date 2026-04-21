<template>
  <div class="nz-map-slide">
    <div class="map-slide-header">
      <h2>{{ slide.title || '產區地圖' }}</h2>
      <p v-if="slide.subtitle" class="map-subtitle">{{ slide.subtitle }}</p>
    </div>
    <div ref="mapContainer" class="map-container"></div>
    <div v-if="regionInfoList.length" class="region-legend">
      <div v-for="info in regionInfoList" :key="info.name" class="legend-item">
        <span class="legend-dot" :style="{ background: info.color }"></span>
        <span>{{ info.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import mapboxgl from 'mapbox-gl'

const props = defineProps({
  slide: { type: Object, required: true }
})

const mapContainer = ref(null)
let map = null
let popup = null

// 北島產區顏色（橙黃系）/ 南島產區（藍綠系）
const REGION_COLORS = {
  'Auckland':                    '#FF8C00',
  'Kumeu':                       '#FFA500',
  'Matakana':                    '#FFB732',
  'Waiheke_Island':              '#FFCA60',
  'Northland':                   '#FF7043',
  'Gisborne':                    '#F4A261',
  'Hawkes_Bay':                  '#E76F51',
  'Central_Hawkes_Bay':          '#D62828',
  'Martinborough':               '#C77DFF',
  'Gladstone':                   '#9D4EDD',
  'Marlborough':                 '#2196F3',
  'Nelson':                      '#00BCD4',
  'North_Canterbury':            '#26C6DA',
  'Waipara_Valley':              '#4DD0E1',
  'Central_Otago':               '#1B5E20',
  'Bannockburn':                 '#388E3C',
  'Waitaki_Valley_North_Otago':  '#66BB6A',
}

const DEFAULT_COLOR = '#2196F3'

// 將 GeoJSON 檔名轉為顯示名稱
const toDisplayName = (name) => name.replace(/_/g, ' ')

const regionInfoList = ref([])

const getRegions = () => {
  if (!props.slide.mapRegion) return []
  return props.slide.mapRegion.split('|').map(r => r.trim()).filter(Boolean)
}

const initMap = async () => {
  if (!mapContainer.value) return
  if (map) { map.remove(); map = null }

  const regions = getRegions()
  if (!regions.length) return

  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: [172.5, -41.5],
    zoom: 4.5,
    pitch: 0,
    bearing: 0
  })

  map.addControl(new mapboxgl.NavigationControl(), 'top-right')
  popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false })

  map.on('load', async () => {
    const allBounds = []
    const infoList = []

    for (const region of regions) {
      try {
        const res = await fetch(`/newzealand/geojson/NewZealand/${region}.geojson`)
        if (!res.ok) continue
        const geojson = await res.json()

        const color = REGION_COLORS[region] || DEFAULT_COLOR
        const sourceId = `nz-region-${region}`
        const fillId = `nz-fill-${region}`
        const lineId = `nz-line-${region}`
        const labelId = `nz-label-${region}`

        map.addSource(sourceId, { type: 'geojson', data: geojson })
        map.addLayer({
          id: fillId, type: 'fill', source: sourceId,
          paint: {
            'fill-color': color,
            'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 0.55, 0.30]
          }
        })
        map.addLayer({
          id: lineId, type: 'line', source: sourceId,
          paint: { 'line-color': color, 'line-width': 2 }
        })

        // 計算中心點加文字標籤
        let centroid = [0, 0]
        try {
          const coords = geojson.features?.[0]?.geometry?.coordinates
          const type = geojson.features?.[0]?.geometry?.type
          if (type === 'Polygon' && coords?.[0]) {
            const pts = coords[0]
            centroid = [
              pts.reduce((s, p) => s + p[0], 0) / pts.length,
              pts.reduce((s, p) => s + p[1], 0) / pts.length
            ]
          } else if (type === 'MultiPolygon' && coords?.[0]?.[0]) {
            const pts = coords[0][0]
            centroid = [
              pts.reduce((s, p) => s + p[0], 0) / pts.length,
              pts.reduce((s, p) => s + p[1], 0) / pts.length
            ]
          }
        } catch (_) {}

        map.addSource(`${sourceId}-label`, {
          type: 'geojson',
          data: { type: 'FeatureCollection', features: [{ type: 'Feature', geometry: { type: 'Point', coordinates: centroid }, properties: { name: toDisplayName(region) } }] }
        })
        map.addLayer({
          id: labelId, type: 'symbol', source: `${sourceId}-label`,
          layout: {
            'text-field': ['get', 'name'],
            'text-size': 12,
            'text-anchor': 'center',
            'text-allow-overlap': false,
          },
          paint: { 'text-color': '#ffffff', 'text-halo-color': '#000000', 'text-halo-width': 1.5 }
        })

        // Hover 效果
        let hoveredId = null
        map.on('mousemove', fillId, (e) => {
          map.getCanvas().style.cursor = 'pointer'
          if (hoveredId !== null) map.setFeatureState({ source: sourceId, id: hoveredId }, { hover: false })
          hoveredId = e.features[0].id
          if (hoveredId !== null) map.setFeatureState({ source: sourceId, id: hoveredId }, { hover: true })
          popup.setLngLat(e.lngLat)
            .setHTML(`<strong>${toDisplayName(region)}</strong>`)
            .addTo(map)
        })
        map.on('mouseleave', fillId, () => {
          map.getCanvas().style.cursor = ''
          if (hoveredId !== null) map.setFeatureState({ source: sourceId, id: hoveredId }, { hover: false })
          hoveredId = null
          popup.remove()
        })

        // 計算邊界
        try {
          const allCoords = []
          geojson.features?.forEach(f => {
            const g = f.geometry
            if (g.type === 'Polygon') g.coordinates.forEach(ring => allCoords.push(...ring))
            else if (g.type === 'MultiPolygon') g.coordinates.forEach(poly => poly.forEach(ring => allCoords.push(...ring)))
          })
          if (allCoords.length) allBounds.push(...allCoords)
        } catch (_) {}

        infoList.push({ name: region, label: toDisplayName(region), color })
      } catch (err) {
        console.warn(`NZMapSlide: 無法載入 ${region}`, err)
      }
    }

    regionInfoList.value = infoList

    // 自動 fitBounds
    if (allBounds.length) {
      const lngs = allBounds.map(p => p[0])
      const lats = allBounds.map(p => p[1])
      const sw = [Math.min(...lngs) - 0.3, Math.min(...lats) - 0.3]
      const ne = [Math.max(...lngs) + 0.3, Math.max(...lats) + 0.3]
      map.fitBounds([sw, ne], { padding: 60, duration: 800 })
    }
  })
}

onMounted(() => { initMap() })
onUnmounted(() => {
  if (popup) popup.remove()
  if (map) { map.remove(); map = null }
})

watch(() => props.slide.mapRegion, () => { initMap() })
</script>

<style scoped>
.nz-map-slide {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #0a1628;
  color: #e8e8e8;
}

.map-slide-header {
  padding: 16px 20px 10px;
  text-align: center;
  flex-shrink: 0;
}

.map-slide-header h2 {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 4px;
  color: #ffffff;
}

.map-subtitle {
  font-size: 0.85rem;
  color: #a0b4cc;
  margin: 0;
}

.map-container {
  flex: 1;
  min-height: 0;
  border-radius: 8px;
  margin: 0 12px;
  overflow: hidden;
}

.region-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  padding: 10px 20px;
  flex-shrink: 0;
  justify-content: center;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: #c8d8e8;
}

.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}
</style>
