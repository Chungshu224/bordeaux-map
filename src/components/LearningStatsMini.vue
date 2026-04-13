<template>
  <div class="learning-stats-mini">
    <div class="stats-row">
      <div v-for="stat in miniStats" :key="stat.label" class="stat-item">
        <div class="stat-icon">{{ stat.icon }}</div>
        <div class="stat-details">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <button @click="$emit('show-details')" class="view-details-btn">
      查看詳細統計 →
    </button>
  </div>
</template>

<script setup>
import { useLearningProgress } from '../composables/useLearningProgress.js'

const props = defineProps({
  courseKey: { type: String, default: 'bordeaux' }
})

defineEmits(['show-details'])

const { miniStats } = useLearningProgress(props.courseKey)
</script>

<style scoped>
.learning-stats-mini {
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.stat-icon {
  font-size: 32px;
  opacity: 0.9;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
}

.stat-label {
  font-size: 12px;
  opacity: 0.8;
  margin-top: 4px;
}

.view-details-btn {
  width: 100%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.view-details-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

@media (max-width: 768px) {
  .stats-row {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-item {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
}
</style>
