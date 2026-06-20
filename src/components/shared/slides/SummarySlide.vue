<template>
  <div class="summary-slide">
    <div class="summary-icon">🎉</div>
    <h2 class="summary-title">{{ slide.title || '課程完成！' }}</h2>
    <p v-if="slide.message" class="summary-message">{{ slide.message }}</p>
    <div v-if="slide.keyPoints?.length" class="summary-key-points">
      <div class="skp-heading">📌 本課重點回顧</div>
      <ul class="skp-list">
        <li v-for="pt in slide.keyPoints" :key="pt">{{ pt }}</li>
      </ul>
    </div>
    <div v-if="slide.nextLesson" class="summary-next">
      下一課：{{ slide.nextLesson }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  slide: { type: Object, required: true }
})
</script>

<style scoped>
.summary-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 40px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  border-radius: 24px;
  color: #fff;
  text-align: center;
  overflow-y: auto;
}

.summary-icon {
  font-size: 3.5rem;
  margin-bottom: 16px;
  animation: bounce 1.5s ease infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.summary-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 12px;
}

.summary-message {
  font-size: 1.05rem;
  opacity: 0.85;
  margin: 0 0 32px;
  max-width: 520px;
  line-height: 1.6;
}

.summary-key-points {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 20px 28px;
  width: 100%;
  max-width: 560px;
  text-align: left;
}

.skp-heading {
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.7;
  margin-bottom: 12px;
}

.skp-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skp-list li {
  font-size: 0.95rem;
  line-height: 1.5;
  opacity: 0.95;
  padding-left: 20px;
  position: relative;
}

.skp-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4ade80;
  font-weight: 700;
}

.summary-next {
  margin-top: 24px;
  font-size: 0.9rem;
  opacity: 0.65;
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
}

@media (max-width: 768px) {
  .summary-slide {
    padding: 36px 24px;
  }
  .summary-title {
    font-size: 1.6rem;
  }
}
</style>
