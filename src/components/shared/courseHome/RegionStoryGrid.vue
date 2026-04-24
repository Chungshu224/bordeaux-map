<template>
  <section class="region-story">
    <header class="rs-header">
      <h2 class="rs-title">{{ title }}</h2>
      <p v-if="subtitle" class="rs-subtitle">{{ subtitle }}</p>
    </header>
    <div class="rs-grid" :style="{ '--cols': cols }">
      <article v-for="item in items" :key="item.title" class="rs-card">
        <div class="rs-icon">{{ item.icon }}</div>
        <h4 class="rs-card-title">{{ item.title }}</h4>
        <p class="rs-card-desc">{{ item.desc }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: '產區亮點' },
  subtitle: { type: String, default: '' },
  items: { type: Array, default: () => [] }, // [{ icon, title, desc }]
  cols: { type: Number, default: 4 }
})
</script>

<style scoped>
.region-story { display: flex; flex-direction: column; gap: 16px; }
.rs-header { text-align: center; }
.rs-title { margin: 0; font-size: 1.5rem; font-weight: 800; color: #111827; }
.rs-subtitle { margin: 6px 0 0; color: #6b7280; font-size: 0.95rem; }

.rs-grid {
  display: grid;
  grid-template-columns: repeat(var(--cols, 4), minmax(0, 1fr));
  gap: 16px;
}
.rs-card {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 24px 20px;
  text-align: center;
  transition: all 0.18s;
}
.rs-card:hover {
  transform: translateY(-3px);
  border-color: var(--region-accent);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}
.rs-icon {
  font-size: 36px; line-height: 1;
  margin-bottom: 12px;
}
.rs-card-title {
  margin: 0 0 6px;
  font-size: 1rem; font-weight: 700; color: #111827;
}
.rs-card-desc {
  margin: 0; font-size: 0.85rem; color: #6b7280; line-height: 1.6;
}

@media (max-width: 900px) {
  .rs-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .rs-grid { grid-template-columns: 1fr; }
}
</style>
