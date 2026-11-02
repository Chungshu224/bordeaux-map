<template>
  <div class="cwm">
    <div class="cwm-filters">
      <button v-for="v in VIEWS" :key="v.id" :class="['cwm-chip', { active: view === v.id }]" @click="goView(v.id)">
        {{ t('home.courses.map.views.' + v.id) }}
      </button>
    </div>

    <div class="cwm-stage">
      <div ref="el" class="cwm-map"></div>
      <div v-if="mapError" class="cwm-fallback">{{ t('home.courses.map.fallback') }}</div>
      <div v-else-if="!selected" class="cwm-hint">👆 {{ t('home.courses.map.hint') }}</div>

      <transition name="cwm-pop">
        <aside v-if="selected" class="cwm-card" :style="{ '--c': selected.color }">
          <button class="cwm-x" @click="closeCard" :aria-label="t('home.courses.map.close')">✕</button>
          <div class="cwm-card-hero">
            <span class="cwm-card-emoji">{{ selected.emoji }}</span>
            <div class="cwm-card-region">{{ selected.region }}</div>
            <h3>{{ selected.name }}</h3>
          </div>
          <p v-if="selected.desc" class="cwm-card-desc">{{ selected.desc }}</p>
          <div class="cwm-card-status" :class="{ on: selected.active }">
            {{ selected.active ? t('home.courses.common.statusActive') : t('home.courses.common.statusPlanning') }}
          </div>
          <div class="cwm-card-actions">
            <router-link v-if="canEnter" :to="selected.route" class="cwm-btn primary">{{ t('home.courses.common.enter') }} →</router-link>
            <button class="cwm-btn" @click="$emit('detail', selected.id)">{{ t('home.courses.map.detail') }}</button>
            <button class="cwm-btn ghost" @click="$emit('plans')">{{ t('home.courses.common.viewPlansBtn') }}</button>
          </div>
        </aside>
      </transition>
    </div>

    <div class="cwm-strip" role="list">
      <button v-for="c in pins" :key="c.id" role="listitem"
        :class="['cwm-mini', { active: selected?.id === c.id }]" :style="{ '--c': c.color }" @click="select(c.id, true)">
        <span class="cwm-mini-emoji">{{ c.emoji }}</span>
        <span class="cwm-mini-name">{{ c.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const props = defineProps({
  courses: { type: Array, default: () => [] },     // [{id,label,route}]
  statuses: { type: Object, default: () => ({}) }, // id -> active
  isAdmin: { type: Boolean, default: false },
  authed: { type: Boolean, default: false }
})
defineEmits(['detail', 'plans'])

const { t, te } = useI18n()

// 課程標記位置（代表性產區）、主題色
const GEO = {
  bordeaux:   { ll: [-0.58, 44.84], color: '#8B1E3F' },
  bourgogne:  { ll: [4.85, 47.05],  color: '#A83232' },
  loire:      { ll: [0.5, 47.4],    color: '#2E7D5B' },
  rhone:      { ll: [4.8, 44.6],    color: '#B5651D' },
  champagne:  { ll: [3.95, 49.05],  color: '#C9A227' },
  alsace:     { ll: [7.4, 48.3],    color: '#6B8E23' },
  languedoc:  { ll: [3.2, 43.5],    color: '#C0562B' },
  southwest:  { ll: [0.6, 44.2],    color: '#7B3F61' },
  provence:   { ll: [5.9, 43.5],    color: '#B05FA5' },
  brandy:     { ll: [-0.33, 45.7],  color: '#9C6B30' },
  italy:      { ll: [11.2, 43.6],   color: '#2E8B57' },
  spain:      { ll: [-3.0, 41.6],   color: '#D2691E' },
  germany:    { ll: [8.0, 49.9],    color: '#4A7FB5' },
  portugal:   { ll: [-7.8, 41.1],   color: '#2F6F4F' },
  hungary:    { ll: [21.4, 48.1],   color: '#C28E0E' },
  greece:     { ll: [23.0, 38.5],   color: '#1F6FB2' },
  austria:    { ll: [16.5, 48.1],   color: '#C0392B' },
  usother:    { ll: [-122.9, 45.2], color: '#3B6EA5' },
  california: { ll: [-122.4, 38.5], color: '#E08A1E' },
  canada:     { ll: [-119.6, 49.5], color: '#C0272D' },
  argentina:  { ll: [-68.8, -33.3], color: '#4C9BD5' },
  chile:      { ll: [-71.2, -34.5], color: '#B8322F' },
  southafrica:{ ll: [18.8, -33.9],  color: '#3E8E41' },
  australia:  { ll: [139.0, -34.9], color: '#D9822B' },
  newzealand: { ll: [173.8, -41.5], color: '#2A9D8F' }
}
const VIEWS = [
  { id: 'world',    center: [10, 28],    zoom: 1.5, pitch: 0 },
  { id: 'france',   center: [2.8, 46.4], zoom: 5.0, pitch: 25 },
  { id: 'europe',   center: [12, 45.5],  zoom: 3.6, pitch: 15 },
  { id: 'newworld', center: [-30, -5],   zoom: 1.6, pitch: 0 }
]

const splitLabel = (label) => {
  const m = String(label).match(/^(\S+)\s+(.*)$/u)
  return m && !/[A-Za-z0-9一-鿿]/u.test(m[1]) ? { emoji: m[1], name: m[2] } : { emoji: '🍷', name: label }
}
const GROUP_KEY = { france: 'france', europe: 'europe', newworld: 'newworld' }

const pins = computed(() => props.courses.filter(c => GEO[c.id]).map(c => {
  const { emoji, name } = splitLabel(c.label)
  const dKey = `home.courses.${c.id}.desc`
  return {
    id: c.id, emoji, name, route: c.route, color: GEO[c.id].color, ll: GEO[c.id].ll,
    region: t(`home.courses.groupLabels.${GROUP_KEY[c.group] || 'europe'}`),
    desc: te(dKey) ? t(dKey) : '',
    active: props.statuses[c.id] !== false
  }
}))

const el = ref(null)
const mapError = ref(false)
const view = ref('world')
const selectedId = ref(null)
const selected = computed(() => pins.value.find(p => p.id === selectedId.value) || null)
const canEnter = computed(() => !!selected.value && (selected.value.active || props.isAdmin))
let map = null
let markers = []

function buildMarkers() {
  markers.forEach(m => m.marker.remove()); markers = []
  if (!map) return
  for (const p of pins.value) {
    const node = document.createElement('button')
    node.className = 'cwm-pin' + (p.active ? '' : ' planning')
    node.style.setProperty('--c', p.color)
    node.setAttribute('aria-label', p.name)
    node.innerHTML = `<span class="cwm-pin-emoji">${p.emoji}</span><span class="cwm-pin-name">${p.name}</span>`
    node.addEventListener('click', (e) => { e.stopPropagation(); select(p.id, true) })
    const marker = new mapboxgl.Marker({ element: node, anchor: 'bottom' }).setLngLat(p.ll).addTo(map)
    markers.push({ id: p.id, marker, node })
  }
  paintSelection()
}
function paintSelection() {
  markers.forEach(m => m.node.classList.toggle('active', m.id === selectedId.value))
}
function select(id, fly) {
  selectedId.value = id
  paintSelection()
  const p = pins.value.find(x => x.id === id)
  if (fly && map && p) map.flyTo({ center: p.ll, zoom: Math.max(map.getZoom(), 5.4), pitch: 35, padding: { top: 0, bottom: 0, left: window.innerWidth > 640 ? 340 : 0, right: 0 }, duration: 1400, essential: true })
}
function closeCard() { selectedId.value = null; paintSelection() }
function goView(id) {
  view.value = id
  closeCard()
  const v = VIEWS.find(x => x.id === id)
  if (map && v) map.flyTo({ center: v.center, zoom: v.zoom, pitch: v.pitch, bearing: 0, duration: 1500, essential: true })
}

onMounted(() => {
  try {
    const token = import.meta.env.VITE_MAPBOX_TOKEN
    if (!token) throw new Error('no token')
    mapboxgl.accessToken = token
    map = new mapboxgl.Map({
      container: el.value,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      projection: 'globe',
      center: VIEWS[0].center, zoom: VIEWS[0].zoom,
      attributionControl: false, cooperativeGestures: true
    })
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
    map.on('style.load', () => {
      map.setFog({ color: 'rgb(20,22,36)', 'high-color': 'rgb(40,50,90)', 'space-color': 'rgb(8,8,18)', 'star-intensity': 0.35 })
    })
    map.on('load', buildMarkers)
    map.on('click', closeCard)
    map.on('error', (e) => { if (!map.loaded() && !markers.length) mapError.value = true })
  } catch { mapError.value = true }
})
watch(pins, () => buildMarkers(), { deep: false })
onBeforeUnmount(() => { markers.forEach(m => m.marker.remove()); markers = []; map?.remove(); map = null })
</script>

<style scoped>
.cwm { margin: 8px 0 24px; width: 100%; max-width: 100%; min-width: 0; box-sizing: border-box; white-space: normal; overflow-wrap: anywhere; }
.cwm-filters { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-bottom: 12px; }
.cwm-chip { border: 1px solid rgba(255,255,255,.25); background: rgba(255,255,255,.06); color: inherit; border-radius: 999px; padding: 6px 16px; font-size: .9rem; cursor: pointer; }
.cwm-chip.active { background: #c9a227; border-color: #c9a227; color: #1a1205; font-weight: 700; }
.cwm-stage { position: relative; width: 100%; min-width: 0; box-sizing: border-box; border-radius: 18px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,.45); background: #0b0d18; }
.cwm-map { width: 100%; height: min(68vh, 620px); min-height: 420px; }
.cwm-hint { position: absolute; left: 50%; bottom: 14px; transform: translateX(-50%); background: rgba(0,0,0,.6); color: #fff; padding: 6px 14px; border-radius: 999px; font-size: .82rem; pointer-events: none; white-space: nowrap; }
.cwm-fallback { position: absolute; inset: 0; display: grid; place-items: center; color: #ddd; background: #0b0d18; text-align: center; padding: 20px; }

:global(.cwm-pin) { border: 0; background: none; padding: 0; cursor: pointer; display: flex; flex-direction: column; align-items: center; transition: transform .18s; }
:global(.cwm-pin:hover), :global(.cwm-pin.active) { transform: scale(1.18); z-index: 5; }
:global(.cwm-pin-emoji) { width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; font-size: 18px; background: var(--c); border: 2.5px solid #fff; box-shadow: 0 2px 10px rgba(0,0,0,.55); }
:global(.cwm-pin.planning .cwm-pin-emoji) { opacity: .7; border-style: dashed; }
:global(.cwm-pin.active .cwm-pin-emoji) { box-shadow: 0 0 0 5px color-mix(in srgb, var(--c) 45%, transparent), 0 2px 12px rgba(0,0,0,.6); }
:global(.cwm-pin-name) { margin-top: 3px; font-size: 11px; font-weight: 700; color: #fff; text-shadow: 0 1px 3px #000, 0 0 6px #000; white-space: nowrap; }

.cwm-card { box-sizing: border-box; white-space: normal; position: absolute; z-index: 8; top: 14px; left: 14px; width: min(330px, calc(100% - 28px)); background: rgba(18,16,12,.94); color: #f3ead2; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 34px rgba(0,0,0,.6); border: 1px solid color-mix(in srgb, var(--c) 60%, #000); }
.cwm-card-hero { padding: 18px 18px 12px; background: linear-gradient(150deg, var(--c), #1a1205 120%); position: relative; }
.cwm-card-emoji { font-size: 2.2rem; line-height: 1; }
.cwm-card-region { font-size: .72rem; letter-spacing: .08em; opacity: .85; margin-top: 6px; }
.cwm-card h3 { margin: 2px 0 0; font-size: 1.3rem; color: #fff; }
.cwm-x { position: absolute; top: 8px; right: 10px; z-index: 2; border: 0; background: rgba(0,0,0,.35); color: #fff; width: 28px; height: 28px; border-radius: 50%; cursor: pointer; }
.cwm-card-desc { margin: 0; padding: 12px 18px 4px; font-size: .86rem; line-height: 1.55; color: #e4dabd; max-height: 7.5em; overflow: auto; }
.cwm-card-status { padding: 4px 18px 0; font-size: .78rem; color: #e0b44a; }
.cwm-card-status.on { color: #7fd69a; }
.cwm-card-actions { display: flex; flex-wrap: wrap; gap: 8px; padding: 12px 18px 16px; }
.cwm-btn { border: 1px solid rgba(255,255,255,.3); background: transparent; color: #f3ead2; padding: 7px 12px; border-radius: 9px; font-size: .84rem; cursor: pointer; text-decoration: none; }
.cwm-btn.primary { background: #c9a227; border-color: #c9a227; color: #1a1205; font-weight: 700; }
.cwm-btn.ghost { opacity: .8; }
.cwm-pop-enter-active, .cwm-pop-leave-active { transition: all .22s ease; }
.cwm-pop-enter-from, .cwm-pop-leave-to { opacity: 0; transform: translateY(10px); }

.cwm-strip { display: flex; gap: 8px; overflow-x: auto; padding: 12px 2px 4px; scrollbar-width: thin; }
.cwm-mini { flex: 0 0 auto; display: flex; align-items: center; gap: 6px; border: 1px solid color-mix(in srgb, var(--c) 70%, transparent); background: color-mix(in srgb, var(--c) 18%, transparent); color: inherit; border-radius: 999px; padding: 5px 12px 5px 8px; cursor: pointer; font-size: .82rem; }
.cwm-mini.active { background: var(--c); color: #fff; }

@media (max-width: 640px) {
  .cwm-map { height: 52vh; min-height: 340px; }
  /* 手機：預覽卡放在地圖下方，不遮住地圖 */
  .cwm-card { position: static; width: 100%; border-radius: 0 0 16px 16px; border-width: 1px 0 0; }
  .cwm-card-hero { padding: 10px 14px; display: flex; align-items: center; gap: 10px; }
  .cwm-card-emoji { font-size: 1.7rem; }
  .cwm-card-region { margin: 0; }
  .cwm-card h3 { font-size: 1.1rem; margin: 0; }
  .cwm-card-hero { flex-wrap: wrap; }
  .cwm-card-hero > h3 { flex: 1 1 auto; min-width: 0; }
  .cwm-card-desc { padding: 8px 14px 2px; max-height: 4.6em; font-size: .82rem; }
  .cwm-card-status { padding: 2px 14px 0; }
  .cwm-card-actions { padding: 8px 14px 12px; }
  .cwm-btn { flex: 1 1 auto; text-align: center; }
  .cwm-hint { display: none; }
}
</style>
