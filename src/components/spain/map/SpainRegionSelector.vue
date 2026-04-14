<template>
  <div class="region-selector">
    <div class="selector-header">
      <div class="flag-icon">🇪🇸</div>
      <h2>西班牙葡萄酒產區</h2>
      <p class="subtitle">Spain Wine Regions — DO · DOCa · VP</p>
    </div>

    <!-- 快速進入全圖 -->
    <div class="quick-entry">
      <button class="btn-full-map" @click="select(allSpain)">
        <span class="btn-icon">🗺</span>
        <span class="btn-text">探索全西班牙地圖</span>
        <span class="btn-arrow">→</span>
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
          <span class="badge do">{{ region.doCount }} DO</span>
          <span v-if="region.vpCount" class="badge vp">+{{ region.vpCount }} VP</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits(['regionSelected'])
const router = useRouter()

const allSpain = {
  id: 'all',
  name: '全西班牙',
  nameEs: 'España',
  icon: '🇪🇸',
  color: '#c0392b',
  center: [40.0, -3.5],
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
    center: [42.3, -2.5],
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
    center: [41.5, -4.2],
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
    center: [41.6, 1.5],
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
    center: [42.5, -8.0],
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
    center: [37.4, -4.8],
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
    center: [41.5, -0.7],
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
    center: [42.6, -1.6],
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
    center: [43.0, -2.3],
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
    center: [39.5, -3.0],
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
    center: [39.5, -0.6],
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
    center: [37.9, -1.5],
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
    center: [28.1, -15.4],
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
    center: [39.0, -6.2],
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
    center: [40.4, -3.6],
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
    center: [39.7, 3.0],
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
    center: [43.3, -5.8],
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
}

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

/* Quick entry button */
.quick-entry {
  max-width: 500px;
  margin: 0 auto 2rem;
}

.btn-full-map {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(255,255,255,0.2);
  border: 2px solid rgba(255,255,255,0.5);
  border-radius: 14px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  backdrop-filter: blur(8px);
}

.btn-full-map:hover {
  background: rgba(255,255,255,0.32);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
}

.btn-icon { font-size: 1.4rem; }
.btn-text { flex: 1; text-align: left; }
.btn-arrow { font-size: 1.2rem; opacity: 0.8; }

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
