<template>
  <div class="main-layout">
    <!-- 左側AOC清單 -->
    <aside class="aoc-list">
      <h2>Bordeaux AOC 清單</h2>
      <ul>
        <li>（未來自動載入AOC清單，現為範例）</li>
        <li>Bordeaux</li>
      </ul>
    </aside>
    <!-- 右側地圖區 -->
    <section class="map-section">
      <div class="map-header">
        <h1>波爾多葡萄酒產區地圖</h1>
        <p>探索法國波爾多AOC分布與地理</p>
        <button class="btn-3d" @click="toggle3D">{{ is3D ? '2D' : '3D' }} 切換</button>
      </div>
      <div ref="mapContainer" class="map" id="map"></div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const mapContainer = ref(null)
let map = null
const is3D = ref(false)

// 亂數顏色產生器
function randomColor(alpha = 0.3) {
  const r = Math.floor(Math.random() * 200)
  const g = Math.floor(Math.random() * 200)
  const b = Math.floor(Math.random() * 200)
  return `rgba(${r},${g},${b},${alpha})`
}

// 載入 geojson 並加到地圖
const addAOCGeojson = async () => {
  const res = await fetch('/bordeaux_AOC.geojson')
  const geojson = await res.json()
  // 先移除舊圖層
  if (map.getSource('aoc')) map.removeLayer('aoc-fill'), map.removeLayer('aoc-outline'), map.removeSource('aoc')
  map.addSource('aoc', {
    type: 'geojson',
    data: geojson
  })
  // 內部填色（30%透明亂數色）
  map.addLayer({
    id: 'aoc-fill',
    type: 'fill',
    source: 'aoc',
    paint: {
      'fill-color': [
        'case',
        ['has', 'color'],
        ['get', 'color'],
        randomColor(0.3)
      ],
      'fill-opacity': 0.9
    }
  })
  // 外框白色細線
  map.addLayer({
    id: 'aoc-outline',
    type: 'line',
    source: 'aoc',
    paint: {
      'line-color': '#fff',
      'line-width': 1.5,
      'line-opacity': 0.9
    }
  })
}

const initMap = () => {
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: [-0.45, 44.85],
    zoom: 9.5,
    pitch: is3D.value ? 45 : 0,
    bearing: 0
  })
  map.on('load', async () => {
    await addAOCGeojson()
    map.addControl(new mapboxgl.NavigationControl(), 'top-right')
    map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
  })
}

const toggle3D = () => {
  is3D.value = !is3D.value
  if (map) {
    map.easeTo({ pitch: is3D.value ? 45 : 0, duration: 800 })
  }
}

onMounted(() => {
  initMap()
})
onUnmounted(() => {
  if (map) map.remove()
})
</script>

<style scoped>
.main-layout {
  display: flex;
  height: 100vh;
}
.aoc-list {
  width: 320px;
  background: #f8f8f8;
  border-right: 1.5px solid #eee;
  padding: 32px 18px 18px 18px;
  overflow-y: auto;
  box-sizing: border-box;
}
.aoc-list h2 {
  font-size: 1.2rem;
  margin-bottom: 18px;
  color: #8B0000;
}
.aoc-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.aoc-list li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  font-size: 1rem;
}
.map-section {
  flex: 1;
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.map-header {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1000;
  background: rgba(255,255,255,0.95);
  padding: 20px 20px 16px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  max-width: 340px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.map-header h1 {
  margin: 0 0 8px 0;
  font-size: 1.5rem;
  color: #333;
}
.map-header p {
  margin: 0;
  color: #666;
  font-size: 0.95rem;
}
.btn-3d {
  margin-top: 8px;
  padding: 6px 18px;
  border-radius: 6px;
  border: none;
  background: #4169E1;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-3d:hover {
  background: #27408b;
}
.map {
  width: 100%;
  height: 100vh;
}
@media (max-width: 900px) {
  .main-layout {
    flex-direction: column;
  }
  .aoc-list {
    width: 100vw;
    height: 180px;
    border-right: none;
    border-bottom: 1.5px solid #eee;
    padding: 18px 10px 10px 10px;
  }
  .map-section {
    height: calc(100vh - 180px);
  }
  .map {
    height: 100%;
  }
}
</style>

