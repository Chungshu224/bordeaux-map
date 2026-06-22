<template>
  <div class="cover-slide" :style="{ background: slide.gradient || slide.background || defaultGradient }">
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
  padding: 28px 36px;
  border-radius: 24px;
  overflow-y: auto;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
}

.cover-icon {
  font-size: 2.6rem;
  margin-bottom: 10px;
  line-height: 1;
}

.cover-title {
  font-size: 1.9rem;
  font-weight: 700;
  margin: 0 0 6px;
  line-height: 1.2;
  letter-spacing: 0.5px;
}

.cover-subtitle {
  font-size: 0.95rem;
  opacity: 0.88;
  margin: 0 0 18px;
  font-weight: 500;
}

.cover-points {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 560px;
  text-align: left;
}

.cover-point {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  padding: 9px 14px;
}

.cp-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
  line-height: 1;
}

.cp-content {
  flex: 1;
}

.cp-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.8;
  margin-bottom: 1px;
}

.cp-text {
  font-size: 0.88rem;
  line-height: 1.4;
  opacity: 0.95;
}

@media (max-width: 768px) {
  .cover-slide {
    padding: 22px 20px;
  }
  .cover-title {
    font-size: 1.5rem;
  }
  .cover-icon {
    font-size: 2rem;
  }
  .cover-points {
    gap: 6px;
  }
  .cover-point {
    padding: 8px 12px;
  }
}
</style>
