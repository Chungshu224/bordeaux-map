<template>
  <section class="level-track">
    <header class="lt-header">
      <div>
        <h2 class="lt-title">{{ title }}</h2>
        <p v-if="subtitle" class="lt-subtitle">{{ subtitle }}</p>
      </div>
      <button v-if="ctaText" class="lt-cta" @click="$emit('cta')">
        {{ ctaText }} <span>→</span>
      </button>
    </header>

    <div class="lt-grid" :style="{ '--cols': cols }">
      <LevelCard
        v-for="lvl in levels"
        :key="lvl.number"
        :level="lvl"
        :progress="lvl.progress || 0"
        :unlocked="lvl.unlocked !== false"
        @enter="(n) => $emit('enter', n)"
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import LevelCard from './LevelCard.vue'

const props = defineProps({
  title: { type: String, default: '選擇課程階段' },
  subtitle: { type: String, default: '' },
  ctaText: { type: String, default: '' },
  // levels: [{ number, title, subtitle, icon, description, tags, modules, lessons, progress, unlocked, unlockHint }]
  levels: { type: Array, required: true }
})
defineEmits(['enter', 'cta'])

const cols = computed(() => Math.min(props.levels.length, 2))
</script>

<style scoped>
.level-track {
  display: flex; flex-direction: column; gap: 18px;
}
.lt-header {
  display: flex; align-items: flex-end; justify-content: space-between;
  gap: 16px; flex-wrap: wrap;
}
.lt-title { margin: 0; font-size: 1.5rem; font-weight: 800; color: #111827; }
.lt-subtitle { margin: 4px 0 0; color: #6b7280; font-size: 0.95rem; }
.lt-cta {
  background: white; color: var(--region-primary);
  border: 1.5px solid var(--region-primary);
  padding: 10px 20px; border-radius: 24px;
  font-size: 0.9rem; font-weight: 700; cursor: pointer;
  transition: all 0.15s;
}
.lt-cta:hover { background: var(--region-primary); color: white; }

.lt-grid {
  display: grid;
  grid-template-columns: repeat(var(--cols, 2), minmax(0, 1fr));
  gap: 20px;
}

@media (max-width: 900px) {
  .lt-grid { grid-template-columns: 1fr; }
}
</style>
