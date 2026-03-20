<template>
  <div class="slide-rivers-banks">
    <div class="col left">
      <h2 class="title">{{ title }}</h2>
      <div class="content" v-html="content"></div>
    </div>
    <div class="col right">
      <PresentationMap
        :focus-type="'bordeaux-regions'"
        :show-bordeaux="true"
        :geojson-paths="geojsonPaths"
        :on-map-ready="onMapReady"
        :access-token="mapboxToken"
      />
    </div>
  </div>
</template>

<script setup>
import PresentationMap from '@/components/PresentationMap.vue'
import mapboxgl from 'mapbox-gl'

const props = defineProps({
  title: { type: String, required: true },
  content: { type: String, default: '' }
})

// Mapbox token
const mapboxToken = (import.meta?.env?.VITE_MAPBOX_TOKEN)
  || (typeof window !== 'undefined' && (window.__MAPBOX_TOKEN || (window.localStorage && window.localStorage.getItem('VITE_MAPBOX_TOKEN'))))
  || ''

// 左岸與右岸主要產區的 GeoJSON 路徑
const geojsonPaths = [
  // 左岸產區（深紅色 - Cabernet Sauvignon）
  '/geojson/LeftBank/Medoc/Medoc_AOC.geojson',              // 梅多克
  '/geojson/LeftBank/Medoc/Haut-Medoc_AOC.geojson',         // 上梅多克
  '/geojson/LeftBank/Graves/Graves_AOC.geojson',            // 格拉夫
  
  // 右岸產區（深紫色 - Merlot）
  '/geojson/RightBank/Libournais/St-Emilion_AOC.geojson',   // 聖愛美濃
  '/geojson/RightBank/Libournais/Pomerol_AOC.geojson',      // 波美侯
  '/geojson/RightBank/Libournais/Fronsac_AOC.geojson'       // 弗朗丘
]

// 追加三河標記與河流名稱標註
const onMapReady = async (map) => {
  try {
    const riversGeoJSON = {
      type: 'FeatureCollection',
      features: [
        // 加龍河 (Garonne)
        {
          type: 'Feature',
          properties: { name: '加龍河 (Garonne)', color: '#1e88e5', width: 3, tip: '左岸邊界的主要河流，帶來良好排水的砂礫土。' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [-0.600, 45.050],
              [-0.595, 45.020],
              [-0.590, 45.000],
              [-0.588, 44.985],
              [-0.585, 44.970],
              [-0.580, 44.955],
              [-0.576, 44.942],
              [-0.572, 44.920],
              [-0.570, 44.900],
              [-0.568, 44.885],
              [-0.565, 44.870],
              [-0.562, 44.855],
              [-0.560, 44.840],
              [-0.558, 44.825],
              [-0.556, 44.810],
              [-0.553, 44.792],
              [-0.550, 44.760],
              [-0.548, 44.745],
              [-0.545, 44.730],
              [-0.540, 44.710],
              [-0.537, 44.700],
              [-0.533, 44.685],
              [-0.528, 44.665],
              [-0.525, 44.650],
              [-0.520, 44.630],
              [-0.516, 44.615],
              [-0.510, 44.585],
              [-0.506, 44.565],
              [-0.503, 44.550],
              [-0.500, 44.520],
              [-0.498, 44.505],
              [-0.495, 44.480],
              [-0.493, 44.465],
              [-0.490, 44.440]
            ]
          }
        },
        // 多爾多涅河 (Dordogne)
        {
          type: 'Feature',
          properties: { name: '多爾多涅河 (Dordogne)', color: '#43a047', width: 3, tip: '右岸邊界的主要河流，石灰岩與黏土風土的關鍵。' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [0.320, 45.110],
              [0.280, 45.090],
              [0.240, 45.075],
              [0.200, 45.050],
              [0.150, 45.030],
              [0.100, 45.010],
              [0.060, 44.998],
              [0.020, 44.990],
              [-0.010, 44.985],
              [-0.040, 44.980],
              [-0.060, 44.975],
              [-0.090, 44.968],
              [-0.120, 44.962],
              [-0.140, 44.960],
              [-0.180, 44.952],
              [-0.220, 44.945],
              [-0.260, 44.938],
              [-0.300, 44.930],
              [-0.340, 44.925],
              [-0.380, 44.920],
              [-0.420, 44.913],
              [-0.460, 44.905],
              [-0.500, 44.900],
              [-0.530, 44.895],
              [-0.550, 44.890]
            ]
          }
        },
        // 吉隆德河口 (Gironde estuary)
        {
          type: 'Feature',
          properties: { name: '吉隆德河 (Gironde)', color: '#6d4c41', width: 4, tip: '歐洲最大河口，直通大西洋，調節產區微氣候。' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [-0.550, 44.900],
              [-0.560, 44.930],
              [-0.580, 44.960],
              [-0.600, 44.995],
              [-0.630, 45.050],
              [-0.660, 45.095],
              [-0.700, 45.150],
              [-0.740, 45.205],
              [-0.780, 45.250],
              [-0.820, 45.290],
              [-0.870, 45.330],
              [-0.910, 45.365],
              [-0.950, 45.400]
            ]
          }
        }
      ]
    }

    if (!map.getSource('rivers')) {
      map.addSource('rivers', { type: 'geojson', data: riversGeoJSON })

      // 光暈/底層線：提升視覺對比
      map.addLayer({
        id: 'rivers-glow',
        type: 'line',
        source: 'rivers',
        filter: ['==', ['geometry-type'], 'LineString'],
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': ['get', 'color'],
          'line-opacity': 0.25,
          'line-blur': 2.0,
          'line-width': [
            'interpolate', ['linear'], ['zoom'],
            6, ['*', ['get', 'width'], 3.0],
            10, ['*', ['get', 'width'], 4.0],
            13, ['*', ['get', 'width'], 5.0]
          ]
        }
      })

      map.addLayer({
        id: 'rivers-lines',
        type: 'line',
        source: 'rivers',
        filter: ['==', ['geometry-type'], 'LineString'],
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': ['get', 'color'],
          'line-width': [
            'interpolate', ['linear'], ['zoom'],
            6, ['get', 'width'],
            10, ['*', ['get', 'width'], 1.6],
            13, ['*', ['get', 'width'], 2.2]
          ],
          'line-opacity': 0.9,
          'line-blur': 0.2
        }
      })

      // 河流名稱標籤 - 使用 symbol-placement: 'line' 讓文字沿著河流線顯示
      map.addLayer({
        id: 'rivers-labels',
        type: 'symbol',
        source: 'rivers',
        filter: ['==', ['geometry-type'], 'LineString'],
        layout: {
          'text-field': ['get', 'name'],
          'text-size': 14,
          'symbol-placement': 'line', // 沿著線段放置文字
          'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
          'text-rotation-alignment': 'map',
          'text-pitch-alignment': 'viewport'
        },
        paint: { 
          'text-color': '#ffffff',
          'text-halo-color': ['get', 'color'],
          'text-halo-width': 2
        }
      })
    }

    // 滑過小知識（僅河流）
    const hoverPopup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false })

    const showPopup = (e, html) => {
      if (!e?.lngLat) return
      hoverPopup.setLngLat(e.lngLat).setHTML(html).addTo(map)
    }
    const clearPopup = () => hoverPopup.remove()

    map.on('mouseenter', 'rivers-lines', (e) => {
      map.getCanvas().style.cursor = 'pointer'
      const name = e.features[0]?.properties?.name
      const tip = e.features[0]?.properties?.tip
      if (name && tip) {
        showPopup(e, `<strong>${name}</strong><br/>${tip}`)
      }
    })

    map.on('mousemove', 'rivers-lines', (e) => {
      if (hoverPopup.isOpen()) {
        hoverPopup.setLngLat(e.lngLat)
      }
    })

    map.on('mouseleave', 'rivers-lines', () => {
      map.getCanvas().style.cursor = ''
      clearPopup()
    })

  } catch (error) {
    console.error('[SlideRiversAndBanks] 載入河流資料失敗:', error)
  }
}
</script>

<style scoped>
.slide-rivers-banks { 
  display: grid; 
  grid-template-columns: 1fr 1.1fr; 
  gap: 24px; 
  align-items: stretch; 
  min-height: 560px; 
}
.col.left { 
  overflow: auto; 
}
.col.right { 
  min-height: 560px; 
}
.title { 
  margin: 0 0 12px; 
}
.content :deep(p) { 
  margin: 0 0 8px; 
}
@media (max-width: 1024px) { 
  .slide-rivers-banks { 
    grid-template-columns: 1fr; 
  } 
  .col.right { 
    min-height: 420px; 
  } 
}
</style>
