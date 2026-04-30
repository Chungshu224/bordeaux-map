<template>
  <div class="region-selector">
    <button class="back-course-btn" @click="$emit('backToCourse')">
      ← {{ $t('common.actions.backToCourse') }}
    </button>

    <div class="region-header">
      <div class="flag-icon">🇮🇹</div>
      <h2>義大利葡萄酒產區</h2>
      <p class="subtitle">Italy Wine Regions — DOC &amp; DOCG</p>
    </div>

    <div class="region-grid">
      <div
        v-for="region in regions"
        :key="region.id"
        class="region-card"
        :class="{ active: selectedId === region.id }"
        :style="{ '--accent': region.color }"
        @click="select(region)"
      >
        <div class="region-icon">{{ region.icon }}</div>
        <h3>{{ region.name }}</h3>
        <p class="region-name-it">{{ region.nameIt }}</p>
        <div class="region-stats">
          <span class="badge docg">{{ region.docgCount }} DOCG</span>
          <span class="badge doc">{{ region.docCount }} DOC/IGT</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['regionSelected', 'backToCourse'])

const selectedId = ref(null)

const regions = [
  { id: 'tuscany',    name: '托斯卡納',   nameIt: 'Toscana',                icon: '🌹', color: '#e74c3c', docgCount: 11, docCount: 3, center: [43.5, 11.1], zoom: 9 },
  { id: 'piedmont',   name: '皮埃蒙特',   nameIt: 'Piemonte',               icon: '🍇', color: '#8e44ad', docgCount: 17, docCount: 2, center: [44.8,  7.9], zoom: 9 },
  { id: 'veneto',     name: '威尼托',     nameIt: 'Veneto',                  icon: '🥂', color: '#2980b9', docgCount: 14, docCount: 2, center: [45.5, 11.8], zoom: 9 },
  { id: 'lombardy',   name: '倫巴底',     nameIt: 'Lombardia',               icon: '🏔️', color: '#27ae60', docgCount: 5,  docCount: 2, center: [45.6,  9.8], zoom: 9 },
  { id: 'trentino',   name: '特倫蒂諾',   nameIt: 'Trentino-Alto Adige',    icon: '⛰️', color: '#1abc9c', docgCount: 1,  docCount: 4, center: [46.4, 11.1], zoom: 9 },
  { id: 'friuli',     name: '弗留利',     nameIt: 'Friuli-Venezia Giulia',  icon: '🌿', color: '#16a085', docgCount: 3,  docCount: 2, center: [46.1, 13.2], zoom: 9 },
  { id: 'emilia',     name: '艾米利亞',   nameIt: 'Emilia-Romagna',         icon: '🍝', color: '#c0392b', docgCount: 2,  docCount: 3, center: [44.5, 11.3], zoom: 9 },
  { id: 'campania',   name: '坎帕尼亞',   nameIt: 'Campania',                icon: '🌞', color: '#e67e22', docgCount: 4,  docCount: 1, center: [40.8, 14.8], zoom: 9 },
  { id: 'sicily',     name: '西西里',     nameIt: 'Sicilia',                 icon: '🌋', color: '#f39c12', docgCount: 1,  docCount: 4, center: [37.5, 14.0], zoom: 8 },
  { id: 'sardinia',   name: '薩丁尼亞',   nameIt: 'Sardegna',               icon: '🏝️', color: '#d35400', docgCount: 1,  docCount: 3, center: [40.1,  9.1], zoom: 8 },
  { id: 'lazio',      name: '拉齊奧',     nameIt: 'Lazio',                   icon: '🏛️', color: '#f1c40f', docgCount: 3,  docCount: 1, center: [41.8, 12.8], zoom: 9 },
  { id: 'marche',     name: '馬爾凱',     nameIt: 'Marche',                  icon: '🌊', color: '#0984e3', docgCount: 5,  docCount: 1, center: [43.6, 13.2], zoom: 9 },
  { id: 'abruzzo',    name: '阿布魯佐',   nameIt: 'Abruzzo',                 icon: '🏕️', color: '#6c5ce7', docgCount: 3,  docCount: 1, center: [42.2, 13.8], zoom: 9 },
  { id: 'apulia',     name: '普利亞',     nameIt: 'Puglia',                  icon: '🫒', color: '#2c3e50', docgCount: 4,  docCount: 1, center: [40.8, 16.5], zoom: 9 },
  { id: 'umbria',     name: '翁布里亞',   nameIt: 'Umbria',                  icon: '🌾', color: '#6c5ce7', docgCount: 2,  docCount: 1, center: [42.9, 12.6], zoom: 9 },
  { id: 'liguria',    name: '利古里亞',   nameIt: 'Liguria',                 icon: '⚓', color: '#0097a7', docgCount: 1,  docCount: 1, center: [44.2,  8.0], zoom: 9 },
  { id: 'calabria',   name: '卡拉布里亞', nameIt: 'Calabria',                icon: '🌶️', color: '#c0392b', docgCount: 1,  docCount: 2, center: [38.9, 16.3], zoom: 9 },
  { id: 'basilicata', name: '巴西利卡塔', nameIt: 'Basilicata',              icon: '🏔️', color: '#a29bfe', docgCount: 1,  docCount: 2, center: [40.5, 16.0], zoom: 9 },
  { id: 'molise',     name: '莫利塞',     nameIt: 'Molise',                  icon: '🌻', color: '#fdcb6e', docgCount: 0,  docCount: 2, center: [41.7, 14.5], zoom: 9 },
]

function select(region) {
  selectedId.value = region.id
  emit('regionSelected', region)
}
</script>

<style scoped>
.region-selector {
  min-height: 100vh;
  padding: 2rem 2rem 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
  color: white;
  position: relative;
}

.back-course-btn {
  position: absolute;
  top: 1.2rem;
  left: 1.5rem;
  background: rgba(255,255,255,0.2);
  color: white;
  border: 1px solid rgba(255,255,255,0.4);
  padding: 0.55rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background 0.2s, transform 0.2s;
  backdrop-filter: blur(4px);
  z-index: 10;
}
.back-course-btn:hover {
  background: rgba(255,255,255,0.3);
  transform: translateY(-2px);
}

.region-header {
  text-align: center;
  padding-top: 3.5rem;
  margin-bottom: 2.5rem;
}
.flag-icon { font-size: 3rem; margin-bottom: 0.5rem; }
.region-header h2 {
  font-size: 2.4rem;
  font-weight: 800;
  margin: 0 0 0.4rem;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
}
.subtitle {
  font-size: 1.05rem;
  opacity: 0.85;
  font-style: italic;
}

.region-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.region-card {
  background: rgba(255,255,255,0.95);
  color: #333;
  border-radius: 18px;
  padding: 1.4rem 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border: 3px solid transparent;
  text-align: center;
}
.region-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(0,0,0,0.18);
  border-color: var(--accent);
}
.region-card.active {
  background: var(--accent);
  color: white;
  border-color: white;
  transform: scale(1.04);
}

.region-icon { font-size: 2rem; margin-bottom: 0.5rem; }

.region-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
}
.region-name-it {
  font-size: 0.78rem;
  opacity: 0.65;
  margin: 0 0 0.8rem;
  font-style: italic;
}

.region-stats {
  display: flex;
  gap: 6px;
  justify-content: center;
  flex-wrap: wrap;
}
.badge {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 20px;
}
.region-card:not(.active) .badge.docg { background: #e8f0fe; color: #3b5bdb; }
.region-card:not(.active) .badge.doc  { background: #fff3e0; color: #e67e22; }
.region-card.active .badge { background: rgba(255,255,255,0.25); color: white; }

@media (max-width: 600px) {
  .region-selector { padding: 1.2rem 1rem 3rem; }
  .region-header { padding-top: 3rem; }
  .region-header h2 { font-size: 1.7rem; }
  .region-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 0.8rem; }
  .region-card { padding: 1rem; }
}
</style>
