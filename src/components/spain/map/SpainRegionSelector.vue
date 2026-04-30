<template>
  <div class="region-selector">
    <div class="selector-header">
      <button class="back-btn" @click="emit('back')">&#8592; {{ $t('common.actions.backToCourse') }}</button>
      <div class="flag-icon">🇪🇸</div>
      <h2>西班牙葡萄酒產區</h2>
      <p class="subtitle">Spain Wine Regions — DO · DOCa · VP</p>
    </div>

    <!-- 產區搜尋框 -->
    <div class="quick-search">
      <div class="search-box-wrap">
        <span class="search-box-icon">🔍</span>
        <input
          ref="searchInputEl"
          v-model="searchQuery"
          class="search-box-input"
          placeholder="搜尋 DO / DOCa / VC / VP 產區…"
          autocomplete="off"
          @input="onSearchInput"
          @keydown.enter="pickFirst"
          @keydown.escape="closeDropdown"
        />
        <button v-if="searchQuery" class="search-box-clear" @click="clearSearch">✕</button>
      </div>
      <transition name="drop-fade">
        <ul v-if="suggestions.length" class="search-suggestions">
          <li
            v-for="item in suggestions"
            :key="item.zonName"
            class="suggestion-item"
            @click="selectAppellation(item)"
          >
            <span class="sugg-badge" :class="badgeClass(item.classification)">{{ item.classification || 'DO' }}</span>
            <span class="sugg-name">{{ item.zonName }}</span>
            <span class="sugg-auto">{{ item.autonomia }}</span>
          </li>
        </ul>
      </transition>
      <button class="btn-full-map-sm" @click="select(allSpain)">
        <span>🗺</span>
        <span>瀏覽全西班牙地圖</span>
        <span>→</span>
      </button>
    </div>

    <div class="section-label">依自治區瀏覽</div>
    <div class="region-grid">
      <div
        v-for="region in regions"
        :key="region.id"
        class="region-card"
        :style="{ '--accent': region.color }"
        @click="select(region)"
      >
        <div class="region-icon">{{ region.icon }}</div>
        <h3>{{ region.name }}</h3>
        <p class="region-name-es">{{ region.nameEs }}</p>
        <div class="region-stats">
          <span v-if="region.docaCount" class="badge doca">{{ region.docaCount }} DOCa</span>
          <span v-if="region.doCount" class="badge do">{{ region.doCount }} DO</span>
          <span v-if="region.vcCount" class="badge vc">{{ region.vcCount }} VC</span>
          <span v-if="region.vpCount" class="badge vp">{{ region.vpCount }} VP</span>
          <span v-if="!region.docaCount && !region.doCount && !region.vcCount && !region.vpCount" class="badge do">探索中</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits(['regionSelected', 'back'])
const router = useRouter()

// ── 全產區搜尋 ───────────────────────────────────────────────
const searchInputEl = ref(null)
const searchQuery = ref('')
const suggestions = ref([])
let allAppellations = []

onMounted(async () => {
  try {
    const res = await fetch('/spain/spain-appellations.json')
    allAppellations = await res.json()
  } catch (e) {
    console.warn('SpainRegionSelector: failed to load appellations', e)
  }
})

function onSearchInput() {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) { suggestions.value = []; return }
  suggestions.value = allAppellations
    .filter(a => a.zonName?.toLowerCase().includes(q) || a.calDsNom?.toLowerCase().includes(q))
    .slice(0, 10)
}

function pickFirst() {
  if (suggestions.value.length) selectAppellation(suggestions.value[0])
}

function closeDropdown() {
  suggestions.value = []
}

function clearSearch() {
  searchQuery.value = ''
  suggestions.value = []
  searchInputEl.value?.focus()
}

function selectAppellation(item) {
  suggestions.value = []
  searchQuery.value = ''
  // 直接帶 targetZonName 進全圖，由 SpainMapSection 自動聚焦
  emit('regionSelected', { ...allSpain, targetZonName: item.zonName })
}

function badgeClass(cls) {
  const m = { DOCa: 'doca', DO: 'do', DOP: 'dop', VC: 'vc', VP: 'vp' }
  return m[cls] || 'do'
}

const allSpain = {
  id: 'all',
  name: '全西班牙',
  nameEs: 'España',
  icon: '🇪🇸',
  color: '#c0392b',
  center: [-3.5, 40.0],
  zoom: 5.5,
  filterAutonomiaId: null,
}

const regions = [
  {
    id: 'rioja',
    name: '拉里奧哈',
    nameEs: 'La Rioja',
    icon: '🍷',
    color: '#c0392b',
    docaCount: 1,
    doCount: 0,
    vpCount: 0,
    center: [-2.5, 42.3],
    zoom: 9,
    filterAutonomiaId: 'rioja',
  },
  {
    id: 'castilla-leon',
    name: '卡斯提亞-萊昂',
    nameEs: 'Castilla y León',
    icon: '🏰',
    color: '#e67e22',
    docaCount: 0,
    doCount: 9,
    vpCount: 0,
    center: [-4.2, 41.5],
    zoom: 7,
    filterAutonomiaId: 'castilla-leon',
  },
  {
    id: 'catalonia',
    name: '加泰羅尼亞',
    nameEs: 'Cataluña',
    icon: '🌹',
    color: '#e74c3c',
    docaCount: 1,
    doCount: 10,
    vpCount: 0,
    center: [1.5, 41.6],
    zoom: 7.5,
    filterAutonomiaId: 'catalonia',
  },
  {
    id: 'galicia',
    name: '加利西亞',
    nameEs: 'Galicia',
    icon: '🌊',
    color: '#27ae60',
    docaCount: 0,
    doCount: 5,
    vpCount: 0,
    center: [-8.0, 42.5],
    zoom: 8,
    filterAutonomiaId: 'galicia',
  },
  {
    id: 'andalucia',
    name: '安達盧西亞',
    nameEs: 'Andalucía',
    icon: '☀️',
    color: '#f39c12',
    docaCount: 0,
    doCount: 6,
    vpCount: 0,
    center: [-4.8, 37.4],
    zoom: 7,
    filterAutonomiaId: 'andalucia',
  },
  {
    id: 'aragon',
    name: '阿拉貢',
    nameEs: 'Aragón',
    icon: '🦅',
    color: '#8e44ad',
    docaCount: 0,
    doCount: 4,
    vpCount: 1,
    center: [-0.7, 41.5],
    zoom: 7.5,
    filterAutonomiaId: 'aragon',
  },
  {
    id: 'navarra',
    name: '納瓦拉',
    nameEs: 'Navarra',
    icon: '🌿',
    color: '#16a085',
    docaCount: 0,
    doCount: 1,
    vpCount: 2,
    center: [-1.6, 42.6],
    zoom: 8,
    filterAutonomiaId: 'navarra',
  },
  {
    id: 'pais-vasco',
    name: '巴斯克地區',
    nameEs: 'País Vasco',
    icon: '🌿',
    color: '#27ae60',
    docaCount: 0,
    doCount: 3,
    vpCount: 0,
    center: [-2.3, 43.0],
    zoom: 9,
    filterAutonomiaId: 'pais-vasco',
  },
  {
    id: 'castilla-la-mancha',
    name: '卡斯提亞-拉曼恰',
    nameEs: 'Castilla-La Mancha',
    icon: '⚔️',
    color: '#d35400',
    docaCount: 0,
    doCount: 7,
    vpCount: 8,
    center: [-3.0, 39.5],
    zoom: 7,
    filterAutonomiaId: 'castilla-la-mancha',
  },
  {
    id: 'valencia',
    name: '巴倫西亞',
    nameEs: 'Comunidad Valenciana',
    icon: '🍊',
    color: '#e67e22',
    docaCount: 0,
    doCount: 3,
    vpCount: 2,
    center: [-0.6, 39.5],
    zoom: 8,
    filterAutonomiaId: 'valencia',
  },
  {
    id: 'murcia',
    name: '穆爾西亞',
    nameEs: 'Región de Murcia',
    icon: '🌶️',
    color: '#c0392b',
    docaCount: 0,
    doCount: 3,
    vpCount: 0,
    center: [-1.5, 37.9],
    zoom: 8.5,
    filterAutonomiaId: 'murcia',
  },
  {
    id: 'canarias',
    name: '加那利群島',
    nameEs: 'Islas Canarias',
    icon: '🌋',
    color: '#2980b9',
    docaCount: 0,
    doCount: 11,
    vpCount: 0,
    center: [-15.4, 28.1],
    zoom: 7.5,
    filterAutonomiaId: 'canarias',
  },
  {
    id: 'extremadura',
    name: '埃斯特雷馬杜拉',
    nameEs: 'Extremadura',
    icon: '🏕️',
    color: '#7f8c8d',
    docaCount: 0,
    doCount: 1,
    vpCount: 0,
    center: [-6.2, 39.0],
    zoom: 8,
    filterAutonomiaId: 'extremadura',
  },
  {
    id: 'madrid',
    name: '馬德里',
    nameEs: 'Comunidad de Madrid',
    icon: '🏛️',
    color: '#e74c3c',
    docaCount: 0,
    doCount: 1,
    vpCount: 0,
    center: [-3.6, 40.4],
    zoom: 9,
    filterAutonomiaId: 'madrid',
  },
  {
    id: 'baleares',
    name: '巴利亞利群島',
    nameEs: 'Islas Baleares',
    icon: '🏝️',
    color: '#0097a7',
    docaCount: 0,
    doCount: 2,
    vpCount: 0,
    center: [3.0, 39.7],
    zoom: 8.5,
    filterAutonomiaId: 'baleares',
  },
  {
    id: 'asturias',
    name: '阿斯圖里亞斯',
    nameEs: 'Asturias',
    icon: '⛰️',
    color: '#1abc9c',
    docaCount: 0,
    doCount: 0,
    vpCount: 0,
    center: [-5.8, 43.3],
    zoom: 9,
    filterAutonomiaId: 'asturias',
  },
]

function select(region) {
  emit('regionSelected', region)
}
</script>

<style scoped>
.region-selector {
  min-height: 100vh;
  padding: 2rem 1.5rem 5rem;
  background: linear-gradient(160deg, #c0392b 0%, #8e44ad 40%, #2980b9 100%);
  color: white;
}

.selector-header {
  text-align: center;
  padding: 2rem 0 1.5rem;
  position: relative;
}

.back-btn {
  position: absolute;
  left: 1rem;
  top: 2rem;
  padding: 0.4rem 0.9rem;
  background: rgba(255,255,255,0.15);
  border: 1.5px solid rgba(255,255,255,0.35);
  border-radius: 20px;
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
}
.back-btn:hover { background: rgba(255,255,255,0.28); }

.flag-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.selector-header h2 {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.4rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.subtitle {
  font-size: 0.95rem;
  opacity: 0.85;
  margin: 0;
  letter-spacing: 0.03em;
}

/* Search box */
.quick-search {
  max-width: 520px;
  margin: 0 auto 2rem;
  position: relative;
}

.search-box-wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.22);
  border: 2px solid rgba(255,255,255,0.55);
  border-radius: 14px;
  padding: 0.7rem 1rem;
  backdrop-filter: blur(10px);
  transition: border-color 0.2s;
}
.search-box-wrap:focus-within {
  border-color: rgba(255,255,255,0.9);
  background: rgba(255,255,255,0.3);
}
.search-box-icon { font-size: 1.2rem; flex-shrink: 0; }
.search-box-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 1rem;
  font-weight: 500;
}
.search-box-input::placeholder { color: rgba(255,255,255,0.6); }
.search-box-clear {
  background: none;
  border: none;
  color: rgba(255,255,255,0.7);
  font-size: 1rem;
  cursor: pointer;
  padding: 0 0.2rem;
}
.search-box-clear:hover { color: white; }

.search-suggestions {
  position: absolute;
  top: calc(100% + 6px);
  left: 0; right: 0;
  background: rgba(20,10,30,0.92);
  border: 1.5px solid rgba(255,255,255,0.25);
  border-radius: 12px;
  list-style: none;
  margin: 0; padding: 0.4rem 0;
  z-index: 100;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  max-height: 320px;
  overflow-y: auto;
}

.suggestion-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.55rem 1rem;
  cursor: pointer;
  transition: background 0.12s;
}
.suggestion-item:hover { background: rgba(255,255,255,0.1); }
.sugg-badge {
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 20px;
  flex-shrink: 0;
  text-transform: uppercase;
}
.sugg-badge.doca { background: #e74c3c; color: #fff; }
.sugg-badge.do   { background: #27ae60; color: #fff; }
.sugg-badge.dop  { background: #e67e22; color: #fff; }
.sugg-badge.vc   { background: #3498db; color: #fff; }
.sugg-badge.vp   { background: #9b59b6; color: #fff; }
.sugg-name {
  flex: 1;
  color: white;
  font-size: 0.95rem;
  font-weight: 500;
}
.sugg-auto {
  font-size: 0.72rem;
  color: rgba(255,255,255,0.5);
  flex-shrink: 0;
}

/* Drop transition */
.drop-fade-enter-active, .drop-fade-leave-active { transition: opacity 0.15s, transform 0.15s; }
.drop-fade-enter-from, .drop-fade-leave-to { opacity: 0; transform: translateY(-6px); }

/* Full map small button */
.btn-full-map-sm {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  margin-top: 0.6rem;
  padding: 0.55rem 1rem;
  background: rgba(255,255,255,0.1);
  border: 1.5px solid rgba(255,255,255,0.3);
  border-radius: 10px;
  color: rgba(255,255,255,0.8);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-full-map-sm:hover {
  background: rgba(255,255,255,0.2);
  color: white;
}

/* Section label */
.section-label {
  text-align: center;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.7;
  margin-bottom: 1.2rem;
}

/* Grid */
.region-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
}

.region-card {
  background: rgba(255,255,255,0.12);
  border: 2px solid rgba(255,255,255,0.25);
  border-radius: 16px;
  padding: 1.2rem 1rem;
  cursor: pointer;
  transition: all 0.2s;
  backdrop-filter: blur(6px);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.region-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: var(--accent, #fff);
  border-radius: 14px 14px 0 0;
}

.region-card:hover {
  background: rgba(255,255,255,0.22);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  border-color: rgba(255,255,255,0.5);
}

.region-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.region-card h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
}

.region-name-es {
  font-size: 0.78rem;
  opacity: 0.75;
  margin: 0 0 0.8rem;
  font-style: italic;
}

.region-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  justify-content: center;
}

.badge {
  padding: 0.18rem 0.5rem;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 600;
}

.badge.doca {
  background: rgba(231,76,60,0.7);
  color: white;
}
.badge.do {
  background: rgba(39,174,96,0.7);
  color: white;
}
.badge.vc {
  background: rgba(52,152,219,0.7);
  color: white;
}
.badge.vp {
  background: rgba(155,89,182,0.7);
  color: white;
}

@media (max-width: 600px) {
  .region-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .selector-header h2 {
    font-size: 1.5rem;
  }
}
</style>
