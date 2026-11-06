<template>
  <div class="swm">
    <header class="swm-head">
      <button class="swm-back" @click="emit('back')">← 返回課程首頁</button>
      <h1 class="swm-title">🏔️ 瑞士葡萄酒地圖（{{ SWISS_POINTS.length }} 個示意點）</h1>
    </header>

    <div ref="mapContainer" class="swm-map"></div>
    <p v-if="mapError" class="swm-err">{{ mapError }}（仍可使用下方清單）</p>
    <p class="swm-note">圓點位置為各地中心或代表城鎮的概略座標，不是官方產區邊界。</p>

    <section class="swm-legend">
      <button v-for="z in SWISS_ZONES" :key="z.key" class="swm-chip" :class="{ off: hidden.has(z.key) }" @click="toggleZone(z.key)">
        <span class="swm-dot" :style="{ background: z.color }"></span>{{ z.label }}
      </button>
    </section>

    <section v-if="active" class="swm-card">
      <h2>{{ active.name }}</h2>
      <p class="swm-zone">{{ zoneLabel(active.zone) }}</p>
      <p>{{ active.desc }}</p>
    </section>

    <section class="swm-list">
      <button v-for="p in visiblePoints" :key="p.id" class="swm-item" :class="{ on: active?.id === p.id }" @click="select(p.id)">
        <span class="swm-dot" :style="{ background: zoneColor(p.zone) }"></span>
        <span class="swm-item-name">{{ p.name }}</span>
      </button>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { SWISS_POINTS, SWISS_ZONES, SWISS_BOUNDS } from '../../data/switzerland/mapData.js'

const emit = defineEmits(['back'])
const mapContainer = ref(null)
const mapError = ref('')
const activeId = ref(null)
const hidden = ref(new Set())
let map = null

const zoneColor = (k) => SWISS_ZONES.find(z => z.key === k)?.color || '#888'
const zoneLabel = (k) => SWISS_ZONES.find(z => z.key === k)?.label || ''
const active = computed(() => SWISS_POINTS.find(p => p.id === activeId.value) || null)
const visiblePoints = computed(() => SWISS_POINTS.filter(p => !hidden.value.has(p.zone)))

function toGeoJSON() {
  return {
    type: 'FeatureCollection',
    features: visiblePoints.value.map(p => ({
      type: 'Feature', properties: { id: p.id, color: zoneColor(p.zone) },
      geometry: { type: 'Point', coordinates: [p.lng, p.lat] }
    }))
  }
}
function refreshSource() { map?.getSource('swi-pts')?.setData(toGeoJSON()) }
function toggleZone(k) {
  const s = new Set(hidden.value)
  s.has(k) ? s.delete(k) : s.add(k)
  hidden.value = s
  if (active.value && s.has(active.value.zone)) activeId.value = null
  refreshSource()
}
function select(id) {
  activeId.value = id
  const p = SWISS_POINTS.find(x => x.id === id)
  if (p && map) map.flyTo({ center: [p.lng, p.lat], zoom: 9.5, duration: 800 })
}

async function initMap() {
  try {
    if (!import.meta.env.VITE_MAPBOX_TOKEN) { mapError.value = '尚未設定地圖金鑰'; return }
    if (!mapboxgl.supported()) { mapError.value = '您的瀏覽器不支援 WebGL'; return }
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
    map = new mapboxgl.Map({ container: mapContainer.value, style: 'mapbox://styles/mapbox/satellite-streets-v12', center: [8.2, 46.8], zoom: 6 })
    map.on('load', () => {
      map.resize()
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')
      map.fitBounds(SWISS_BOUNDS, { padding: 30, duration: 0 })
      map.addSource('swi-pts', { type: 'geojson', data: toGeoJSON() })
      map.addLayer({ id: 'swi-pt-circle', type: 'circle', source: 'swi-pts', paint: { 'circle-radius': 8, 'circle-color': ['get', 'color'], 'circle-stroke-width': 2, 'circle-stroke-color': '#fff' } })
      map.on('click', 'swi-pt-circle', e => { const f = e.features?.[0]; if (f) select(f.properties.id) })
      map.on('mouseenter', 'swi-pt-circle', () => { map.getCanvas().style.cursor = 'pointer' })
      map.on('mouseleave', 'swi-pt-circle', () => { map.getCanvas().style.cursor = '' })
    })
    map.on('error', e => { mapError.value = `地圖錯誤：${e.error?.message || ''}` })
  } catch (err) {
    mapError.value = `初始化失敗：${err.message}`
  }
}

onMounted(async () => { await nextTick(); initMap() })
onBeforeUnmount(() => { map?.remove(); map = null })
</script>

<style scoped>
.swm { min-height: 100vh; background: #fdf5f5; color: #2a2118; width: 100%; box-sizing: border-box; overflow-x: hidden; }
.swm-head { display: flex; flex-direction: column; gap: 6px; padding: 12px 14px; background: linear-gradient(135deg, #B3202E, #7A1520); color: #fff; }
.swm-back { align-self: flex-start; border: 1px solid rgba(255,255,255,.3); background: rgba(255,255,255,.18); color: #fff; border-radius: 10px; padding: 6px 14px; cursor: pointer; }
.swm-title { margin: 0; font-size: 1.05rem; }
.swm-map { width: 100%; height: 340px; background: #dfe7ee; }
.swm-err { margin: 8px 14px 0; color: #8a3a3a; font-size: .85rem; }
.swm-note { margin: 8px 14px; font-size: .78rem; color: #8a5a5a; line-height: 1.5; }
.swm-legend { display: flex; flex-wrap: wrap; gap: 6px; padding: 0 14px; }
.swm-chip { display: inline-flex; align-items: center; gap: 6px; border: 1px solid rgba(0,0,0,.12); background: #fff; border-radius: 999px; padding: 5px 12px; font-size: .8rem; cursor: pointer; }
.swm-chip.off { opacity: .45; }
.swm-dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; flex: 0 0 auto; }
.swm-card { margin: 12px 14px 0; background: #fff; border: 1px solid rgba(0,0,0,.08); border-radius: 14px; padding: 12px 16px; }
.swm-card h2 { margin: 0 0 2px; font-size: 1rem; color: #7A1520; }
.swm-zone { margin: 0 0 6px; font-size: .78rem; color: #8a5a5a; }
.swm-card p { margin: 0; line-height: 1.6; font-size: .9rem; overflow-wrap: anywhere; }
.swm-list { display: flex; flex-wrap: wrap; gap: 6px; padding: 12px 14px 40px; }
.swm-item { display: inline-flex; align-items: center; gap: 6px; border: 1px solid rgba(0,0,0,.1); background: #fff; border-radius: 10px; padding: 6px 10px; font-size: .82rem; cursor: pointer; color: inherit; }
.swm-item.on { border-color: #B3202E; background: #fbeaec; }
.swm-item-name { overflow-wrap: anywhere; }
</style>
