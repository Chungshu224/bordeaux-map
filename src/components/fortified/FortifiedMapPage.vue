<template>
  <div class="fom-page">
    <header class="fom-head">
      <button class="fom-back" @click="goBack">{{ embedded ? '← 返回課程首頁' : '← 返回' }}</button>
      <h1>🥃 全球強化酒產區地圖</h1>
      <p class="fom-sub">依類型著色・{{ filtered.length }} / {{ REGIONS.length }} 個產區（管理員專屬）</p>
    </header>

    <div class="fom-chips">
      <button :class="['fom-chip', { active: typeFilter === 'all' }]" @click="typeFilter = 'all'">全部類型</button>
      <button v-for="t in TYPES" :key="t.id" :class="['fom-chip', { active: typeFilter === t.id }]"
        :style="{ '--c': t.color }" @click="typeFilter = t.id">
        <span class="fom-dot"></span>{{ t.label }}
      </button>
    </div>
    <div class="fom-chips">
      <button v-for="g in GROUPS" :key="g.id" class="fom-chip view" @click="goView(g.id)">{{ g.label }}</button>
    </div>

    <div class="fom-stage">
      <div ref="el" class="fom-map"></div>
      <div v-if="mapError" class="fom-fallback">無法載入地圖（缺少 Mapbox 金鑰或網路問題）。仍可用下方清單瀏覽各產區。</div>

      <aside v-if="selected" class="fom-card" :style="{ '--c': primaryColor(selected) }">
        <button class="fom-x" @click="closeCard" aria-label="關閉">✕</button>
        <div class="fom-card-hero">
          <div class="fom-card-country">{{ selected.country }}</div>
          <h3>{{ selected.name }}</h3>
        </div>
        <div class="fom-card-body">
          <div class="fom-tags">
            <span class="fom-tag" :style="{ '--c': typeOf(selected.type).color }">{{ typeOf(selected.type).label }}</span>
            <span v-for="st in selected.styles" :key="st" class="fom-tag exam">{{ st }}</span>
          </div>
          <p class="fom-line"><b>品種：</b>{{ selected.grapes.join('、') }}</p>
          <p class="fom-line">{{ selected.note }}</p>
          <p class="fom-boundary">{{ boundaryText(selected.id) }}</p>
        </div>
      </aside>
    </div>

    <div class="fom-strip" role="list">
      <button v-for="r in filtered" :key="r.id" role="listitem"
        :class="['fom-mini', { active: selected?.id === r.id }]" :style="{ '--c': primaryColor(r) }" @click="select(r.id, true)">
        <span class="fom-dot"></span>{{ r.name }}
      </button>
    </div>

    <p class="fom-foot">有邊界者取自站內既有課程資料（已簡化），虛線為近似範圍；其餘僅標示代表點。法規與數字請以各產區官方資料為準。</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRouter } from 'vue-router'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { TYPES, GROUPS, REGIONS } from '../../data/fortified/regions.js'
import { fortifiedExtrasActions } from '../../stores/fortifiedExtrasStore.js'

const props = defineProps({ embedded: { type: Boolean, default: false } })
const emit = defineEmits(['back'])
const router = useRouter()
function goBack() { if (props.embedded) emit('back'); else router.push('/fortified') }
const el = ref(null)
const mapError = ref(false)
const typeFilter = ref('all')
const selectedId = ref(null)
const boundaryMap = ref({}) // id -> 'existing' | 'approx'
let map = null
let markers = []
let bboxes = {}

const typeOf = (id) => TYPES.find(t => t.id === id) || TYPES[TYPES.length - 1]
const primaryColor = (r) => typeOf(r.type).color
const boundaryText = (id) => {
  const b = boundaryMap.value[id]
  if (b === 'existing') return '邊界：取自站內既有課程的邊界資料（已簡化）'
  if (b === 'approx') return '邊界：近似範圍，非該產區的專屬官方邊界'
  return '邊界：尚無資料，地圖上僅標示代表點'
}

function bboxOf(geom) {
  let minX = 180, minY = 90, maxX = -180, maxY = -90
  const walk = (c) => { if (typeof c[0] === 'number') { minX = Math.min(minX, c[0]); maxX = Math.max(maxX, c[0]); minY = Math.min(minY, c[1]); maxY = Math.max(maxY, c[1]) } else c.forEach(walk) }
  walk(geom.coordinates)
  return [[minX, minY], [maxX, maxY]]
}

async function addBoundaries() {
  try {
    const res = await fetch('/fortified/fortified_regions.geojson')
    if (!res.ok) return
    const gj = await res.json()
    const bm = {}
    for (const f of gj.features) {
      const r = REGIONS.find(x => x.id === f.properties.id)
      f.properties.color = r ? primaryColor(r) : '#ffffff'
      bm[f.properties.id] = f.properties.boundary
      bboxes[f.properties.id] = bboxOf(f.geometry)
    }
    boundaryMap.value = bm
    if (!map) return
    map.addSource('fom-regions', { type: 'geojson', data: gj, promoteId: 'id' })
    map.addLayer({
      id: 'fom-fill', type: 'fill', source: 'fom-regions',
      paint: { 'fill-color': ['get', 'color'], 'fill-opacity': ['case', ['boolean', ['feature-state', 'selected'], false], 0.55, 0.28] }
    })
    map.addLayer({
      id: 'fom-line', type: 'line', source: 'fom-regions',
      paint: { 'line-color': ['get', 'color'], 'line-width': 1.6, 'line-opacity': 0.95 }
    })
    map.addLayer({
      id: 'fom-line-approx', type: 'line', source: 'fom-regions', filter: ['==', ['get', 'boundary'], 'approx'],
      paint: { 'line-color': '#ffffff', 'line-width': 1, 'line-dasharray': [2, 2], 'line-opacity': 0.8 }
    })
    applyFilter()
    paint()
  } catch (e) { console.warn('[Fortified] 邊界載入失敗', e) }
}

function applyFilter() {
  if (!map || !map.getLayer('fom-fill')) return
  const f = ['in', ['get', 'id'], ['literal', filtered.value.map(r => r.id)]]
  for (const l of ['fom-fill', 'fom-line']) map.setFilter(l, f)
  map.setFilter('fom-line-approx', ['all', ['==', ['get', 'boundary'], 'approx'], f])
}

const filtered = computed(() => REGIONS.filter(r => typeFilter.value === 'all' || r.type === typeFilter.value))
const selected = computed(() => filtered.value.find(r => r.id === selectedId.value) || null)

function buildMarkers() {
  markers.forEach(m => m.marker.remove()); markers = []
  if (!map) return
  for (const r of filtered.value) {
    const node = document.createElement('button')
    node.className = 'fom-pin'
    node.style.setProperty('--c', primaryColor(r))
    node.setAttribute('aria-label', r.name)
    node.innerHTML = '<span class="fom-pin-dot"></span>'
    node.addEventListener('click', (e) => { e.stopPropagation(); select(r.id, true) })
    const marker = new mapboxgl.Marker({ element: node, anchor: 'center' }).setLngLat(r.ll).addTo(map)
    markers.push({ id: r.id, marker, node })
  }
  paint()
}
let lastSel = null
function paint() {
  markers.forEach(m => m.node.classList.toggle('active', m.id === selectedId.value))
  if (map && map.getSource('fom-regions')) {
    if (lastSel) map.setFeatureState({ source: 'fom-regions', id: lastSel }, { selected: false })
    if (selectedId.value) map.setFeatureState({ source: 'fom-regions', id: selectedId.value }, { selected: true })
    lastSel = selectedId.value
  }
}
function select(id, fly) {
  selectedId.value = id
  fortifiedExtrasActions.visitRegion(id)
  paint()
  const r = REGIONS.find(x => x.id === id)
  if (fly && map && r) {
    const bb = bboxes[id]
    if (bb) map.fitBounds(bb, { padding: 50, maxZoom: 8, duration: 1200, essential: true })
    else map.flyTo({ center: r.ll, zoom: Math.max(map.getZoom(), 5), pitch: 25, duration: 1200, essential: true })
  }
}
function closeCard() { selectedId.value = null; paint() }
function goView(id) {
  const v = GROUPS.find(g => g.id === id)
  closeCard()
  if (map && v) map.flyTo({ center: v.center, zoom: v.zoom, pitch: v.pitch, bearing: 0, duration: 1400, essential: true })
}

watch(filtered, () => {
  if (selectedId.value && !filtered.value.some(r => r.id === selectedId.value)) selectedId.value = null
  buildMarkers()
  applyFilter()
})

onMounted(() => {
  try {
    const token = import.meta.env.VITE_MAPBOX_TOKEN
    if (!token) throw new Error('no token')
    mapboxgl.accessToken = token
    map = new mapboxgl.Map({
      container: el.value,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      projection: 'globe',
      center: GROUPS[0].center, zoom: GROUPS[0].zoom,
      attributionControl: false, cooperativeGestures: true
    })
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
    map.on('style.load', () => {
      map.setFog({ color: 'rgb(20,22,36)', 'high-color': 'rgb(40,50,90)', 'space-color': 'rgb(8,8,18)', 'star-intensity': 0.35 })
    })
    map.on('load', () => { buildMarkers(); addBoundaries() })
    map.on('click', (e) => {
      const hit = map.getLayer('fom-fill') ? map.queryRenderedFeatures(e.point, { layers: ['fom-fill'] }) : []
      if (hit.length) select(hit[0].properties.id, false)
      else closeCard()
    })
    map.on('error', () => { if (!map.loaded() && !markers.length) mapError.value = true })
  } catch { mapError.value = true }
})
onBeforeUnmount(() => { markers.forEach(m => m.marker.remove()); markers = []; map?.remove(); map = null })
</script>

<style scoped>
.fom-page { min-height: 100vh; background: #0f0905; color: #f5f0e8; padding: 16px 16px 32px; box-sizing: border-box; max-width: 980px; margin: 0 auto; width: 100%; min-width: 0; overflow-x: hidden; }
.fom-head { text-align: center; margin-bottom: 12px; }
.fom-head h1 { font-size: 1.35rem; margin: 8px 0 2px; color: #d9a066; }
.fom-sub { margin: 0; font-size: .82rem; color: #9a8878; }
.fom-back { border: 1px solid rgba(255,255,255,.2); background: transparent; color: #c0a888; border-radius: 999px; padding: 6px 14px; font-size: .82rem; cursor: pointer; }
.fom-chips { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 10px; }
.fom-chip { border: 1px solid rgba(255,255,255,.25); background: rgba(255,255,255,.06); color: inherit; border-radius: 999px; padding: 6px 14px; font-size: .85rem; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; }
.fom-chip.active { background: var(--c, #d9a066); border-color: var(--c, #d9a066); color: #1a1205; font-weight: 700; }
.fom-chip.tag.active { background: #7fd69a; border-color: #7fd69a; }
.fom-chip.view { border-style: dashed; }
.fom-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--c, #fff); display: inline-block; flex: 0 0 auto; }
.fom-chip.active .fom-dot { background: #1a1205; }
.fom-stage { position: relative; width: 100%; min-width: 0; border-radius: 18px; overflow: hidden; background: #0b0d18; box-shadow: 0 10px 40px rgba(0,0,0,.45); }
.fom-map { width: 100%; height: min(64vh, 600px); min-height: 380px; }
.fom-fallback { position: absolute; inset: 0; display: grid; place-items: center; text-align: center; padding: 20px; color: #ddd; background: #0b0d18; }

:global(.fom-pin) { border: 0; background: none; padding: 0; cursor: pointer; transition: transform .18s; }
:global(.fom-pin-dot) { display: block; width: 18px; height: 18px; border-radius: 50%; background: var(--c); border: 2.5px solid #fff; box-shadow: 0 2px 8px rgba(0,0,0,.6); }
:global(.fom-pin.active) { transform: scale(1.5); z-index: 5; }

.fom-card { position: absolute; z-index: 8; top: 12px; left: 12px; width: min(320px, calc(100% - 24px)); box-sizing: border-box; background: rgba(18,16,12,.95); color: #f3ead2; border-radius: 16px; overflow: hidden; border: 1px solid color-mix(in srgb, var(--c) 60%, #000); box-shadow: 0 10px 34px rgba(0,0,0,.6); }
.fom-card-hero { padding: 14px 40px 10px 16px; background: linear-gradient(150deg, var(--c), #1a1205 120%); }
.fom-card-country { font-size: .72rem; letter-spacing: .08em; opacity: .9; }
.fom-card h3 { margin: 2px 0 0; font-size: 1.1rem; color: #fff; overflow-wrap: anywhere; }
.fom-x { position: absolute; top: 8px; right: 10px; border: 0; background: rgba(0,0,0,.35); color: #fff; width: 28px; height: 28px; border-radius: 50%; cursor: pointer; }
.fom-card-body { padding: 10px 16px 14px; font-size: .84rem; line-height: 1.55; }
.fom-line { margin: 6px 0 0; overflow-wrap: anywhere; }
.fom-boundary { margin: 8px 0 0; font-size: .74rem; color: #9a8878; }
.fom-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.fom-tag { font-size: .74rem; padding: 2px 10px; border-radius: 999px; background: color-mix(in srgb, var(--c) 30%, transparent); border: 1px solid var(--c); }
.fom-tag.exam { --c: #7fd69a; }

.fom-strip { display: flex; gap: 8px; overflow-x: auto; padding: 12px 2px 4px; scrollbar-width: thin; }
.fom-mini { flex: 0 0 auto; display: inline-flex; align-items: center; gap: 6px; border: 1px solid color-mix(in srgb, var(--c) 70%, transparent); background: color-mix(in srgb, var(--c) 18%, transparent); color: inherit; border-radius: 999px; padding: 5px 12px 5px 8px; font-size: .8rem; cursor: pointer; }
.fom-mini.active { background: var(--c); color: #1a1205; }
.fom-mini.active .fom-dot { background: #1a1205; }
.fom-foot { text-align: center; font-size: .75rem; color: #7a6a5a; margin: 12px 0 0; }

@media (max-width: 640px) {
  .fom-map { height: 50vh; min-height: 320px; }
  /* 手機：預覽卡放在地圖下方，不遮住地圖 */
  .fom-card { position: relative; top: auto; left: auto; width: 100%; border-radius: 0 0 16px 16px; border-width: 1px 0 0; }
}
</style>
