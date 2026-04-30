<template>
  <div class="region-selector">
    <button class="back-btn" @click="$emit('back')">← {{ $t('common.actions.back') }}</button>

    <div class="selector-header">
      <div class="header-icon">🍷</div>
      <h2>加州 AVA 葡萄酒產區</h2>
      <p class="subtitle">California Wine Regions — Choose a Region to Explore</p>
    </div>

    <!-- 全部產區 -->
    <div class="all-card" @click="select(null)">
      <span class="all-icon">🗺️</span>
      <div>
        <strong>全部產區</strong>
        <span class="all-sub">顯示加州所有 154 個 AVA 產區</span>
      </div>
      <span class="all-arrow">→</span>
    </div>

    <div class="divider-label">或選擇特定產區群組</div>

    <div class="region-grid">
      <div
        v-for="group in groups"
        :key="group.id"
        class="region-card"
        :style="{ '--accent': group.color }"
        @click="select(group)"
      >
        <div class="region-icon">{{ group.icon }}</div>
        <h3>{{ group.name }}</h3>
        <p class="region-name-en">{{ group.nameEn }}</p>
        <p class="region-desc">{{ group.desc }}</p>
        <div class="region-ava-count">
          <span class="ava-badge">~{{ group.avaCount }} AVA</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['groupSelected', 'back'])

const groups = [
  {
    id: 'Napa Valley',
    name: '納帕谷',
    nameEn: 'Napa Valley',
    icon: '🍷',
    color: '#7B1A1A',
    desc: '世界頂級 Cabernet Sauvignon 產地',
    avaCount: 19,
    center: [-122.3, 38.5],
    zoom: 9,
  },
  {
    id: 'Sonoma County',
    name: '索諾馬郡',
    nameEn: 'Sonoma County',
    icon: '🌹',
    color: '#C0392B',
    desc: '多元地形，精品酒莊雲集',
    avaCount: 18,
    center: [-122.8, 38.5],
    zoom: 9,
  },
  {
    id: 'Mendocino & Lake County',
    name: '門多西諾 & 萊克郡',
    nameEn: 'Mendocino & Lake County',
    icon: '🌿',
    color: '#27AE60',
    desc: '有機農法先驅，清爽風格',
    avaCount: 12,
    center: [-123.2, 39.2],
    zoom: 8,
  },
  {
    id: 'Central Coast',
    name: '中部海岸',
    nameEn: 'Central Coast',
    icon: '🌊',
    color: '#2980B9',
    desc: '加州最長海岸線，Pinot Noir 聖地',
    avaCount: 35,
    center: [-120.5, 35.5],
    zoom: 7,
  },
  {
    id: 'Central Valley',
    name: '中央谷地',
    nameEn: 'Central Valley',
    icon: '🌾',
    color: '#E67E22',
    desc: '高產量主流葡萄酒產地',
    avaCount: 7,
    center: [-120.0, 37.5],
    zoom: 7,
  },
  {
    id: 'Sierra Foothills',
    name: '內華達山麓',
    nameEn: 'Sierra Foothills',
    icon: '⛰️',
    color: '#D35400',
    desc: '淘金時代留存的百年葡萄園',
    avaCount: 12,
    center: [-120.5, 38.7],
    zoom: 8,
  },
  {
    id: 'South Coast',
    name: '南部海岸',
    nameEn: 'South Coast',
    icon: '☀️',
    color: '#8E44AD',
    desc: '洛杉磯周邊精品小產區',
    avaCount: 8,
    center: [-117.0, 33.8],
    zoom: 9,
  },
  {
    id: 'Northern California',
    name: '北加州',
    nameEn: 'Northern California',
    icon: '🌲',
    color: '#16A085',
    desc: '北加州小眾珍稀產區',
    avaCount: 5,
    center: [-122.5, 41.0],
    zoom: 8,
  },
  {
    id: 'North Coast',
    name: '北部海岸',
    nameEn: 'North Coast',
    icon: '🌁',
    color: '#2C3E50',
    desc: '舊金山灣區北方，涼爽海洋氣候',
    avaCount: 10,
    center: [-123.0, 39.0],
    zoom: 8,
  },
  {
    id: 'San Francisco Bay',
    name: '舊金山灣區',
    nameEn: 'San Francisco Bay',
    icon: '🌉',
    color: '#7F8C8D',
    desc: '海灣微氣候影響，多元品種',
    avaCount: 8,
    center: [-122.0, 37.5],
    zoom: 9,
  },
]

function select(group) {
  // group === null means "all regions"
  if (group === null) {
    emit('groupSelected', { id: null, name: '全部產區', center: [-119.5, 37.2], zoom: 5.5 })
  } else {
    emit('groupSelected', group)
  }
}
</script>

<style scoped>
.region-selector {
  min-height: 100vh;
  padding: 1.5rem 1.5rem 4rem;
  background:
    radial-gradient(ellipse at 20% 30%, rgba(123,26,26,0.45) 0%, transparent 55%),
    radial-gradient(ellipse at 80% 70%, rgba(41,128,185,0.3) 0%, transparent 55%),
    linear-gradient(160deg, #0a0a1e 0%, #1a0a0a 50%, #0a101e 100%);
  color: white;
  position: relative;
}

.back-btn {
  position: sticky;
  top: 1rem;
  z-index: 10;
  background: rgba(255,255,255,0.12);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.25);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.88rem;
  transition: background 0.2s;
  backdrop-filter: blur(6px);
  display: inline-block;
  margin-bottom: 1rem;
}
.back-btn:hover { background: rgba(255,255,255,0.22); }

.selector-header {
  text-align: center;
  margin-bottom: 2rem;
}
.header-icon { font-size: 3rem; margin-bottom: 0.5rem; }
.selector-header h2 {
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 0.4rem;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.4);
}
.subtitle {
  font-size: 0.9rem;
  opacity: 0.7;
  font-style: italic;
}

/* 全部產區快速入口 */
.all-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: rgba(255,255,255,0.07);
  border: 1.5px solid rgba(255,255,255,0.18);
  border-radius: 14px;
  padding: 16px 20px;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 1rem;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}
.all-card:hover {
  background: rgba(231,76,60,0.15);
  border-color: rgba(231,76,60,0.5);
  transform: translateY(-2px);
}
.all-icon { font-size: 1.8rem; flex-shrink: 0; }
.all-card strong { display: block; font-size: 1rem; font-weight: 700; margin-bottom: 2px; }
.all-sub { font-size: 0.78rem; color: #aaa; }
.all-arrow { margin-left: auto; font-size: 1.2rem; opacity: 0.5; }

.divider-label {
  text-align: center;
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #666;
  margin: 0.5rem auto 1.2rem;
}

/* 產區卡片格 */
.region-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
}

.region-card {
  background: rgba(255,255,255,0.05);
  border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 1.2rem 1rem;
  cursor: pointer;
  transition: all 0.22s;
  position: relative;
  overflow: hidden;
}
.region-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--accent) 0%, transparent 60%);
  opacity: 0.08;
  transition: opacity 0.22s;
}
.region-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.3), 0 0 0 1px var(--accent);
}
.region-card:hover::before { opacity: 0.18; }

.region-icon {
  font-size: 2rem;
  margin-bottom: 0.6rem;
  position: relative;
}
.region-card h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 2px;
  position: relative;
}
.region-name-en {
  font-size: 0.72rem;
  opacity: 0.6;
  margin: 0 0 6px;
  font-style: italic;
  position: relative;
}
.region-desc {
  font-size: 0.78rem;
  color: #bbb;
  margin: 0 0 10px;
  line-height: 1.4;
  position: relative;
}
.region-ava-count { position: relative; }
.ava-badge {
  display: inline-block;
  background: var(--accent);
  color: #fff;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
  opacity: 0.9;
}

@media (max-width: 600px) {
  .region-grid { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
  .selector-header h2 { font-size: 1.5rem; }
  .region-card { padding: 0.9rem 0.8rem; }
}
@media (max-width: 360px) {
  .region-grid { grid-template-columns: 1fr; }
}
</style>
