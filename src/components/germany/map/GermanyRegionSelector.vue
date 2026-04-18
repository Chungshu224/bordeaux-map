<template>
  <div class="region-selector">
    <div class="region-header">
      <div class="flag-icon">🇩🇪</div>
      <h2>德國葡萄酒產區</h2>
      <p class="subtitle">Germany Wine Regions — 13 Anbaugebiete</p>
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
        <p class="region-name-de">{{ region.nameDE }}</p>
        <div class="region-stats">
          <span class="badge ha">{{ region.hectares.toLocaleString() }} ha</span>
          <span class="badge grape">{{ region.grapes[0] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { germanyRegions } from '../data/regions.js'

const emit = defineEmits(['regionSelected'])

const selectedId = ref(null)
const regions = germanyRegions

function select(region) {
  selectedId.value = region.id
  emit('regionSelected', region)
}
</script>

<style scoped>
.region-selector {
  min-height: 100vh;
  padding: 2rem 2rem 4rem;
  background: linear-gradient(135deg, #2c3e50 0%, #3d5a80 30%, #4a7c59 60%, #1a1a2e 100%);
  color: white;
  position: relative;
}

.region-header {
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 2.5rem;
}
.flag-icon { font-size: 3rem; margin-bottom: 0.5rem; }
.region-header h2 {
  font-size: 2.4rem;
  font-weight: 800;
  margin: 0 0 0.4rem;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.4);
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
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  border-radius: 18px;
  padding: 1.4rem 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  border: 3px solid transparent;
  text-align: center;
}
.region-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25);
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
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0 0 0.2rem;
}
.region-name-de {
  font-size: 0.78rem;
  opacity: 0.6;
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
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 20px;
}
.region-card:not(.active) .badge.ha    { background: #e8f0fe; color: #3b5bdb; }
.region-card:not(.active) .badge.grape { background: #f3e8ff; color: #7c3aed; }
.region-card.active .badge { background: rgba(255,255,255,0.25); color: white; }

@media (max-width: 600px) {
  .region-selector { padding: 1.2rem 1rem 3rem; }
  .region-header { padding-top: 1.5rem; }
  .region-header h2 { font-size: 1.7rem; }
  .region-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 0.8rem; }
  .region-card { padding: 1rem; }
}
</style>
