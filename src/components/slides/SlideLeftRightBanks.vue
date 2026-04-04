<template>
  <div class="slide-banks">
    <div class="col left">
      <h2 class="title">{{ title }}</h2>
      <div class="content" v-html="content"></div>
    </div>
    <div class="col right">
      <PresentationMap
        key="left-right-banks-map"
        :focus-type="'bordeaux-regions'"
        :show-bordeaux="true"
        :geojson-paths="geojsonPaths"
        :on-map-ready="onMapReady"
      />
    </div>
  </div>
</template>

<script setup>
import mapboxgl from 'mapbox-gl'
import PresentationMap from '@/components/PresentationMap.vue'

const props = defineProps({
  title: { type: String, required: true },
  content: { type: String, default: '' }
})

// 左岸與右岸主要產區的 GeoJSON 路徑（完整版）
const geojsonPaths = [
  // 左岸產區（深紅色 - Cabernet Sauvignon）
  '/geojson/LeftBank/Medoc/Medoc_AOC.geojson',
  '/geojson/LeftBank/Medoc/Haut-Medoc_AOC.geojson',
  '/geojson/LeftBank/Medoc/Margaux_AOC.geojson',
  '/geojson/LeftBank/Medoc/St-Julien_AOC.geojson',
  '/geojson/LeftBank/Medoc/Pauillac_AOC.geojson',
  '/geojson/LeftBank/Medoc/St-Estephe_AOC.geojson',
  '/geojson/LeftBank/Medoc/Listrac-Medoc_AOC.geojson',
  '/geojson/LeftBank/Medoc/Moulis-en-Medoc_AOC.geojson',
  '/geojson/LeftBank/Graves/Graves_AOC.geojson',
  '/geojson/LeftBank/Graves/Pessac-Leognan_AOC.geojson',

  // 右岸產區（深紫色 - Merlot）
  '/geojson/RightBank/Libournais/St-Emilion_AOC.geojson',
  '/geojson/RightBank/Libournais/St-Emilion-Grand-Cru_AOC.geojson',
  '/geojson/RightBank/Libournais/Pomerol_AOC.geojson',
  '/geojson/RightBank/Libournais/Lalande-de-Pomerol_AOC.geojson',
  '/geojson/RightBank/Libournais/Fronsac_AOC.geojson',
  '/geojson/RightBank/Libournais/Canon-Fronsac_AOC.geojson',
  '/geojson/RightBank/Blaye/Blaye_AOC.geojson',
  '/geojson/RightBank/Blaye/Cotes-de-Bourg_AOC.geojson',
]

// 河流 GeoJSON 路徑
const RIVER_URLS = [
  '/geojson/Rivers/La Gironde.geojson',
  '/geojson/Rivers/La Garonne.geojson',
  '/geojson/Rivers/La Dordogne.geojson',
]

let bankMarkers = []

const onMapReady = async (map) => {
  // 1. 載入河流並畫出藍色線條
  for (const url of RIVER_URLS) {
    try {
      const res = await fetch(url)
      if (!res.ok) continue
      const geo = await res.json()
      const id = 'river-' + url.split('/').pop().replace('.geojson', '').replace(/\s+/g, '-')
      if (!map.getSource(id)) {
        map.addSource(id, { type: 'geojson', data: geo })
        map.addLayer({
          id: id + '-line',
          type: 'line',
          source: id,
          paint: {
            'line-color': '#4A90D9',
            'line-width': 2.5,
            'line-opacity': 0.9
          }
        })
      }
    } catch (e) {
      console.warn('[SlideLeftRightBanks] River load failed:', url, e)
    }
  }

  // 2. 加上「左岸」與「右岸」標籤 marker
  function makeLabelEl(text, subtext, bgColor) {
    const el = document.createElement('div')
    el.innerHTML = `
      <div style="
        background: ${bgColor};
        color: white;
        padding: 6px 11px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 2px 8px rgba(0,0,0,0.55);
        white-space: nowrap;
        text-align: center;
        pointer-events: none;
        line-height: 1.4;
      ">
        ${text}
        <div style="font-size: 10px; font-weight: normal; opacity: 0.9;">${subtext}</div>
      </div>`
    return el
  }

  const leftEl = makeLabelEl('⬅️ 左岸', 'Rive Gauche', '#8B0000')
  const rightEl = makeLabelEl('右岸 ➡️', 'Rive Droite', '#4B0082')

  // 左岸標籤：梅多克半島中段
  const leftMarker = new mapboxgl.Marker({ element: leftEl, anchor: 'center' })
    .setLngLat([-0.9, 45.2])
    .addTo(map)

  // 右岸標籤：聖愛美濃附近
  const rightMarker = new mapboxgl.Marker({ element: rightEl, anchor: 'center' })
    .setLngLat([-0.1, 44.9])
    .addTo(map)

  bankMarkers = [leftMarker, rightMarker]

  // 3. 調整視角完整顯示兩岸
  map.fitBounds(
    [[-1.35, 44.45], [0.25, 45.65]],
    { padding: { top: 40, bottom: 40, left: 30, right: 30 }, duration: 600 }
  )

  // 返回清理函式
  return () => {
    bankMarkers.forEach(m => m.remove())
    bankMarkers = []
  }
}
</script>

<style scoped>
.slide-banks { display: grid; grid-template-columns: 1fr 1.1fr; gap: 24px; align-items: stretch; min-height: 560px; }
.col.left { overflow: auto; }
.col.right { min-height: 560px; }
.title { margin: 0 0 12px; }
.content :deep(p) { margin: 0 0 8px; }
@media (max-width: 1024px) { .slide-banks { grid-template-columns: 1fr; } .col.right { min-height: 420px; } }
</style>
