<template>
  <div class="map-placeholder-slide">
    <div class="slide-header">
      <h2>{{ slide.title }}</h2>
    </div>
    <div class="slide-body">
      <div class="map-icon">🗺️</div>
      <p class="map-msg">{{ slide.content }}</p>
      <button class="map-btn" @click="$emit('openMap')">前往地圖探索</button>
    </div>
  </div>
</template>

<script setup>
defineProps({ slide: { type: Object, required: true } })
defineEmits(['openMap'])
</script>

<style scoped>
.map-placeholder-slide {
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
}
.slide-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
}
.map-icon {
  font-size: 5rem;
  opacity: 0.7;
}
.map-msg {
  color: #555;
  font-size: 1.1rem;
  max-width: 480px;
  line-height: 1.6;
}
.map-btn {
  background: linear-gradient(135deg, #c8a96e, #9b6a1f);
  color: #fff;
  border: none;
  padding: 12px 28px;
  border-radius: 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}
.map-btn:hover { opacity: 0.88; }
</style>
