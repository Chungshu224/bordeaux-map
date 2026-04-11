<template>
  <div class="stats-slide">
    <div class="slide-header">
      <h2>{{ slide.title }}</h2>
    </div>
    <div class="slide-body">
      <p v-if="slide.intro" class="stats-intro">{{ slide.intro }}</p>
      <div class="stats-grid">
        <div
          v-for="(stat, i) in slide.stats"
          :key="i"
          class="stat-card"
        >
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  slide: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.stats-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 48px 56px;
  border-radius: 24px;
}

.slide-header {
  margin-bottom: 28px;
}

.slide-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  border-bottom: 3px solid #c8a96e;
  padding-bottom: 16px;
  line-height: 1.3;
}

.stats-intro {
  color: #555;
  margin-bottom: 24px;
  font-size: 1rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
  flex: 1;
  align-content: start;
}

.stat-card {
  background: #f8f9fa;
  padding: 28px 16px;
  border-radius: 12px;
  text-align: center;
  border-top: 4px solid #c8a96e;
  transition: transform 0.2s;
}

.stat-card:hover {
  transform: translateY(-4px);
}

.stat-value {
  font-size: 2.2rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 8px;
  line-height: 1;
}

.stat-label {
  font-size: 0.9rem;
  color: #7f8c8d;
  font-weight: 500;
}

@media (max-width: 600px) {
  .stats-slide {
    padding: 24px 20px;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .stat-value {
    font-size: 1.6rem;
  }
}
</style>
