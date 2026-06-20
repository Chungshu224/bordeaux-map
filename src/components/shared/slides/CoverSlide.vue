<template>
  <div class="cover-slide" :style="{ background: slide.gradient || defaultGradient }">
    <div class="cover-icon">{{ slide.icon || '🍷' }}</div>
    <h1 class="cover-title">{{ slide.title }}</h1>
    <p v-if="slide.subtitle" class="cover-subtitle">{{ slide.subtitle }}</p>
    <div v-if="slide.points?.length" class="cover-points">
      <div v-for="pt in slide.points" :key="pt.text || pt.label" class="cover-point">
        <span class="cp-icon">{{ pt.icon || '✦' }}</span>
        <div class="cp-content">
          <div v-if="pt.label" class="cp-label">{{ pt.label }}</div>
          <div class="cp-text">{{ pt.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  slide: { type: Object, required: true }
})

const defaultGradient = 'linear-gradient(135deg, #2c3e50 0%, #4a6fa5 100%)'
</script>

<style scoped>
.cover-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 40px;
  border-radius: 24px;
  overflow-y: auto;
  color: #fff;
  text-align: center;
}

.cover-icon {
  font-size: 3.5rem;
  margin-bottom: 20px;
}

.cover-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 12px;
  line-height: 1.25;
  letter-spacing: 0.5px;
}

.cover-subtitle {
  font-size: 1.05rem;
  opacity: 0.88;
  margin: 0 0 32px;
  font-weight: 500;
}

.cover-points {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  max-width: 560px;
  text-align: left;
}

.cover-point {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 12px 16px;
}

.cp-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
  line-height: 1.3;
}

.cp-content {
  flex: 1;
}

.cp-label {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.8;
  margin-bottom: 2px;
}

.cp-text {
  font-size: 0.95rem;
  line-height: 1.5;
  opacity: 0.95;
}

@media (max-width: 768px) {
  .cover-slide {
    padding: 36px 24px;
  }
  .cover-title {
    font-size: 1.7rem;
  }
  .cover-points {
    gap: 10px;
  }
}
</style>
