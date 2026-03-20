<template>
  <div class="slide-rivers">
    <div class="col left">
      <h2 class="title">{{ title }}</h2>
      <div class="content" v-html="content"></div>
    </div>
    <div class="col right">
      <PresentationMap
        key="rivers-system-map"
        :focus-type="'bordeaux-regions'"
        :show-bordeaux="true"
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

// 以 script 暴露 token 至模板，避免在 template 直接使用 import.meta
const mapboxToken = (import.meta?.env?.VITE_MAPBOX_TOKEN)
  || (typeof window !== 'undefined' && (window.__MAPBOX_TOKEN || (window.localStorage && window.localStorage.getItem('VITE_MAPBOX_TOKEN'))))
  || ''

// 追加三河簡化線段與河流名稱標註（置於河流線上）
const onMapReady = async (map) => {
  try {
    // 先清理舊的河流圖層（確保不會與其他幻燈片共用）
    const layersToRemove = ['rivers-glow', 'rivers-lines', 'rivers-labels']
    layersToRemove.forEach(layerId => {
      if (map.getLayer(layerId)) {
        map.removeLayer(layerId)
      }
    })
    if (map.getSource('rivers')) {
      map.removeSource('rivers')
    }

    // 河流資料配置：檔案名稱對應到河流屬性
    const riverConfig = {
      'La Garonne.geojson': {
        name: '加龍河 (Garonne)',
        color: '#1e88e5',
        width: 3,
        tip: '左岸邊界的主要河流，帶來良好排水的砂礫土。'
      },
      'La Dordogne.geojson': {
        name: '多爾多涅河 (Dordogne)',
        color: '#43a047',
        width: 3,
        tip: '右岸邊界的主要河流，石灰岩與黏土風土的關鍵。'
      },
      'La Gironde.geojson': {
        name: '吉隆德河 (Gironde)',
        color: '#6d4c41',
        width: 4,
        tip: '歐洲最大河口，直通大西洋，調節產區微氣候。'
      }
    }

    // 載入所有河流 GeoJSON 檔案
    const features = []
    try {
      for (const [filename, properties] of Object.entries(riverConfig)) {
        const response = await fetch(`/geojson/Rivers/${filename}`)
        if (!response.ok) {
          console.warn(`無法載入 ${filename}`)
          continue
        }
        
        const geoData = await response.json()
        
        // 將 MultiLineString 轉換為多個 Feature
        if (geoData.coordinates && geoData.type === 'MultiLineString') {
          geoData.coordinates.forEach((lineCoords) => {
            features.push({
              type: 'Feature',
              properties: { ...properties },
              geometry: {
                type: 'LineString',
                coordinates: lineCoords
              }
            })
          })
        }
      }
    } catch (error) {
      console.error('載入河流 GeoJSON 檔案時發生錯誤:', error)
    }

    const riversGeoJSON = {
      type: 'FeatureCollection',
      features: features
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

    // 河流 hover
    map.on('mousemove', 'rivers-lines', (e) => {
      const f = e?.features?.[0]
      if (!f) return
      map.getCanvas().style.cursor = 'pointer'
      const name = f.properties?.name || '河流'
      const tip = f.properties?.tip || ''
      showPopup(e, `<div><strong>${name}</strong><div style='font-size:12px;color:#555;margin-top:2px;'>${tip}</div></div>`)
    })
    map.on('mouseleave', 'rivers-lines', () => {
      map.getCanvas().style.cursor = ''
      clearPopup()
    })
  } catch (e) {
    console.warn('Add rivers overlay failed:', e)
  }
}
</script>

<style scoped>
.slide-rivers { display: grid; grid-template-columns: 1fr 1.1fr; gap: 24px; align-items: stretch; min-height: 560px; }
.col.left { overflow: auto; }
.col.right { min-height: 560px; }
.title { margin: 0 0 12px; }
.content :deep(p) { margin: 0 0 8px; }
@media (max-width: 1024px) { .slide-rivers { grid-template-columns: 1fr; } .col.right { min-height: 420px; } }
</style>
