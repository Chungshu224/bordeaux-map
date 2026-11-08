<template>
  <div class="gem">
    <header class="gem-head">
      <button class="gem-back" @click="emit('back')">← 返回課程首頁</button>
      <h1 class="gem-title">🏺 喬治亞 PDO 近似範圍</h1>
    </header>

    <div ref="mapContainer" class="gem-map"></div>
    <p v-if="mapError" class="gem-err">{{ mapError }}（仍可使用下方清單）</p>

    <p class="gem-note">
      <strong>這不是法定邊界。</strong>喬治亞 PDO 規格以「市鎮」或「村莊清單」界定範圍，並無公開的 GIS 邊界。
      色塊是規格寫明的市鎮（OSM 行政區），圓點是規格列出的村莊位置，村莊之間不連線也不填色。
      地理資料 © OpenStreetMap contributors（ODbL）。
    </p>
    <p v-if="missing.length" class="gem-note">規格列出但在 OSM 找不到位置的村莊（未顯示）：{{ missing.join('、') }}。</p>

    <section class="gem-legend">
      <button v-for="p in PDOS" :key="p.key" class="gem-chip" :class="{ off: hidden.has(p.key) }" @click="toggle(p.key)">
        <span class="gem-dot" :style="{ background: p.color }"></span>{{ p.label }}
      </button>
    </section>

    <section v-if="info" class="gem-card">
      <h2>{{ info.label }}</h2>
      <p class="gem-sub">{{ info.region }}</p>
      <p>{{ info.desc }}</p>
      <p class="gem-prec">範圍依據：{{ info.basis }}</p>
    </section>

    <section class="gem-list">
      <button v-for="p in PDOS" :key="p.key" class="gem-item" :class="{ on: active === p.key }" @click="select(p.key)">
        <span class="gem-dot" :style="{ background: p.color }"></span>
        <span>{{ p.label }}</span>
      </button>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const emit = defineEmits(['back'])

// 說明只用 Level 2 已依官方規格核對的事實
const PDOS = [
  { key: 'kakheti', label: 'Kakheti（Kakhuri）', color: '#A64B2A', region: '東部・Kakheti', basis: '規格列出八個市鎮（色塊）',
    desc: '涵蓋 Akhmeta、Telavi、Gurjaani、Sighnaghi、Dedoplistskaro、Kvareli、Lagodekhi、Sagarejo 八個市鎮的大區 PDO；白、紅、粉紅與琥珀酒皆可。' },
  { key: 'kindzmarauli', label: 'Kindzmarauli', color: '#5C2A7A', region: '東部・Kvareli 市鎮', basis: '規格寫範圍在 Kvareli 市鎮行政邊界內（色塊；實際微型區較小）',
    desc: 'Saperavi 與 Saperavi Budeshuri 的半甜紅，殘糖 18–45 g/L；高加索支脈南坡，海拔 250–550 m。' },
  { key: 'tsinandali', label: 'Tsinandali', color: '#C9A227', region: '東部・Telavi 市鎮', basis: '規格列出 15 個村莊（圓點）',
    desc: 'Alazani 右岸的微型區；白酒至少 85% Rkatsiteli、至多 15% Kakhuri Mtsvane，紅酒僅 Saperavi，皆為乾型。' },
  { key: 'mukuzani', label: 'Mukuzani', color: '#8B1E3F', region: '東部・Alazani 右岸', basis: '規格列出 10 個村莊（圓點）',
    desc: 'Saperavi 100% 的乾紅；陳年為選擇性，若陳年須在木桶至少 6 個月。' },
  { key: 'atenuri', label: 'Atenuri（Ateni）', color: '#2E7D5B', region: '中部・Inner Kartli', basis: '規格列出 7 個村莊（圓點）',
    desc: 'Chinuri、Goruli Mtsvane 及／或 Aligoté；乾白，另有氣泡與微氣泡酒。' },
  { key: 'sviri', label: 'Sviri', color: '#3B6EA5', region: '西部・Outer Imereti', basis: '規格列出 3 處地名（圓點）',
    desc: 'Tsolikouri、Tsitska 及／或 Krakhuna 的乾白，殘糖不超過 4 g/L。' },
  { key: 'tvishi', label: 'Tvishi', color: '#7B3F61', region: '西北部・Lechkhumi', basis: '規格列出 2 個村莊（圓點）',
    desc: 'Tsolikouri；主要為半甜白，另有乾型琥珀酒與白色強化酒。' },
  { key: 'khvanchkara', label: 'Khvanchkara', color: '#B5651D', region: '西北部・Racha', basis: '規格列出 8 個村莊（圓點）',
    desc: 'Aleksandrouli 與 Mujuretuli 的天然半甜紅，殘糖 30–45 g/L。' }
]
const BY = Object.fromEntries(PDOS.map(p => [p.key, p]))

const mapContainer = ref(null)
const mapError = ref('')
const active = ref(null)
const hidden = ref(new Set())
let map = null
let data = null

const missing = ref([])
const info = computed(() => (active.value ? BY[active.value] : null))

function filtered() {
  return { type: 'FeatureCollection', features: (data?.features || []).filter(f => !hidden.value.has(f.properties.pdo)).map(f => ({ ...f, properties: { ...f.properties, color: BY[f.properties.pdo]?.color || '#888' } })) }
}
function refresh() { map?.getSource('ge-areas')?.setData(filtered()) }
function toggle(k) {
  const s = new Set(hidden.value); s.has(k) ? s.delete(k) : s.add(k); hidden.value = s
  if (active.value && s.has(active.value)) active.value = null
  refresh()
}
function select(k) {
  active.value = k
  if (!map || !data) return
  const pts = data.features.filter(f => f.properties.pdo === k)
  const b = new mapboxgl.LngLatBounds()
  const add = (c) => (typeof c[0] === 'number' ? b.extend(c) : c.forEach(add))
  pts.forEach(f => add(f.geometry.coordinates))
  if (!b.isEmpty()) map.fitBounds(b, { padding: 50, maxZoom: 11, duration: 800 })
}

async function initMap() {
  try {
    const res = await fetch('/georgia/georgia_pdo_areas.geojson')
    if (res.ok) { data = await res.json(); missing.value = (data.properties?.misses || []).map(m => m.split(':')[1] || m) }
    else mapError.value = '範圍資料載入失敗'
    if (!import.meta.env.VITE_MAPBOX_TOKEN) { mapError.value = '尚未設定地圖金鑰'; return }
    if (!mapboxgl.supported()) { mapError.value = '您的瀏覽器不支援 WebGL'; return }
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
    map = new mapboxgl.Map({ container: mapContainer.value, style: 'mapbox://styles/mapbox/satellite-streets-v12', center: [44.5, 42.0], zoom: 6.2 })
    map.on('load', () => {
      map.resize()
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')
      map.addSource('ge-areas', { type: 'geojson', data: filtered() })
      map.addLayer({ id: 'ge-fill', type: 'fill', source: 'ge-areas', filter: ['==', ['get', 'precision'], 'municipality'], paint: { 'fill-color': ['get', 'color'], 'fill-opacity': 0.28 } })
      map.addLayer({ id: 'ge-line', type: 'line', source: 'ge-areas', filter: ['==', ['get', 'precision'], 'municipality'], paint: { 'line-color': ['get', 'color'], 'line-width': 1.5 } })
      map.addLayer({ id: 'ge-pt', type: 'circle', source: 'ge-areas', filter: ['==', ['get', 'precision'], 'village'], paint: { 'circle-radius': 6, 'circle-color': ['get', 'color'], 'circle-stroke-width': 2, 'circle-stroke-color': '#fff' } })
      map.on('click', 'ge-pt', e => { const f = e.features?.[0]; if (f) select(f.properties.pdo) })
      map.on('click', 'ge-fill', e => { const f = e.features?.[0]; if (f) select(f.properties.pdo) })
      map.on('mouseenter', 'ge-pt', () => { map.getCanvas().style.cursor = 'pointer' })
      map.on('mouseleave', 'ge-pt', () => { map.getCanvas().style.cursor = '' })
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
.gem { min-height: 100vh; background: #fbf4f0; color: #2a2118; width: 100%; box-sizing: border-box; overflow-x: hidden; }
.gem-head { display: flex; flex-direction: column; gap: 6px; padding: 12px 14px; background: linear-gradient(135deg, #A64B2A, #6E2E18); color: #fff; }
.gem-back { align-self: flex-start; border: 1px solid rgba(255,255,255,.3); background: rgba(255,255,255,.18); color: #fff; border-radius: 10px; padding: 6px 14px; cursor: pointer; }
.gem-title { margin: 0; font-size: 1.05rem; }
.gem-map { width: 100%; height: 340px; background: #dfe7ee; }
.gem-err { margin: 8px 14px 0; color: #8a3a3a; font-size: .85rem; }
.gem-note { margin: 8px 14px; font-size: .78rem; color: #6E2E18; line-height: 1.6; }
.gem-legend, .gem-list { display: flex; flex-wrap: wrap; gap: 6px; padding: 0 14px; }
.gem-list { padding: 12px 14px 40px; }
.gem-chip, .gem-item { display: inline-flex; align-items: center; gap: 6px; border: 1px solid rgba(0,0,0,.12); background: #fff; border-radius: 999px; padding: 5px 12px; font-size: .8rem; cursor: pointer; color: inherit; }
.gem-chip.off { opacity: .45; }
.gem-item.on { border-color: #A64B2A; background: #f8e8e0; }
.gem-dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; flex: 0 0 auto; }
.gem-card { margin: 12px 14px 0; background: #fff; border: 1px solid rgba(0,0,0,.08); border-radius: 14px; padding: 12px 16px; }
.gem-card h2 { margin: 0 0 2px; font-size: 1rem; color: #6E2E18; }
.gem-sub { margin: 0 0 6px; font-size: .78rem; color: #8a6a5a; }
.gem-card p { margin: 0 0 4px; line-height: 1.6; font-size: .9rem; overflow-wrap: anywhere; }
.gem-prec { font-size: .78rem !important; color: #8a6a5a; }
</style>
