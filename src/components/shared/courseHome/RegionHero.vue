<template>
  <section class="region-hero">
    <div class="rh-text">
      <div class="rh-tag">
        <span>{{ icon }}</span>
        <span>{{ tagline }}</span>
      </div>
      <h1 class="rh-title">{{ title }}</h1>
      <p v-if="subtitle" class="rh-subtitle">{{ subtitle }}</p>
      <p class="rh-desc">{{ description }}</p>
      <div v-if="stats?.length" class="rh-stats">
        <div v-for="s in stats" :key="s.label" class="rh-stat">
          <div class="rh-stat-num">{{ s.value }}</div>
          <div class="rh-stat-label">{{ s.label }}</div>
        </div>
      </div>
    </div>
    <div class="rh-visual" aria-hidden="true">
      <div class="rh-icon-large">{{ icon }}</div>
      <div class="rh-bg-shape"></div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  icon: { type: String, default: '🍷' },
  tagline: { type: String, default: '' },        // e.g. '中歐葡萄酒・托卡伊傳奇'
  title: { type: String, required: true },        // e.g. '匈牙利葡萄酒'
  subtitle: { type: String, default: '' },        // 英文副標
  description: { type: String, default: '' },     // 一句話介紹
  stats: { type: Array, default: () => [] }       // [{ value, label }]
})
</script>

<style scoped>
.region-hero {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  align-items: center;
  background: white;
  border-radius: 20px;
  padding: 40px 48px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.04);
  position: relative;
  overflow: hidden;
}

.rh-text { min-width: 0; }

.rh-tag {
  display: inline-flex; align-items: center; gap: 6px;
  background: color-mix(in srgb, var(--region-primary) 8%, white);
  color: var(--region-primary);
  padding: 6px 12px; border-radius: 20px;
  font-size: 13px; font-weight: 600;
  margin-bottom: 16px;
}

.rh-title {
  margin: 0 0 4px;
  font-size: 2.4rem;
  font-weight: 800;
  color: #111827;
  letter-spacing: -0.5px;
}

.rh-subtitle {
  margin: 0 0 12px;
  font-size: 0.95rem;
  color: #9ca3af;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.rh-desc {
  margin: 0 0 24px;
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.7;
  max-width: 560px;
}

.rh-stats {
  display: flex; gap: 24px;
  flex-wrap: wrap;
}
.rh-stat {
  display: flex; flex-direction: column; gap: 2px;
  padding-right: 24px;
  border-right: 1px solid #e5e7eb;
}
.rh-stat:last-child { border-right: 0; padding-right: 0; }
.rh-stat-num {
  font-size: 1.5rem; font-weight: 800;
  color: var(--region-primary);
  line-height: 1.2;
}
.rh-stat-label {
  font-size: 0.78rem; color: #6b7280;
}

/* 視覺裝飾 */
.rh-visual {
  position: relative;
  width: 180px; height: 180px;
  display: flex; align-items: center; justify-content: center;
}
.rh-icon-large {
  font-size: 96px; line-height: 1;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15));
  position: relative; z-index: 2;
}
.rh-bg-shape {
  position: absolute; inset: 0;
  background: radial-gradient(circle, color-mix(in srgb, var(--region-accent) 25%, transparent) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
}

@media (max-width: 768px) {
  .region-hero {
    grid-template-columns: 1fr;
    padding: 24px 20px;
    gap: 16px;
    text-align: center;
  }
  .rh-visual { width: 120px; height: 120px; margin: 0 auto; order: -1; }
  .rh-icon-large { font-size: 64px; }
  .rh-title { font-size: 1.8rem; }
  .rh-desc { font-size: 0.92rem; max-width: none; }
  .rh-stats { justify-content: center; gap: 16px; }
  .rh-stat { padding-right: 16px; }
  .rh-stat-num { font-size: 1.25rem; }
}
</style>
