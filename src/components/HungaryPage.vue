<template>
  <div class="hungary-page">
    <!-- 頂部模式切換 -->
    <div class="mode-switcher" v-if="!showCourse">
      <div class="mode-buttons">
        <button class="mode-btn active">🗺️ 產區地圖</button>
        <button class="mode-btn" @click="showCourse = true">📚 葡萄酒課程</button>
      </div>
    </div>

    <!-- 課程模式 -->
    <HungaryLearningSystem
      v-if="showCourse"
      @exitLearning="showCourse = false"
    />

    <!-- 地圖模式 -->
    <HungaryMapPage
      v-else
      @back-to-course="router.go(-1)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HungaryMapPage from './hungary/HungaryMapPage.vue'
import HungaryLearningSystem from './hungary/HungaryLearningSystem.vue'

const router = useRouter()
const showCourse = ref(false)
</script>

<style scoped>
.hungary-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.mode-switcher {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 500;
  background: white;
  border-radius: 9999px;
  padding: 4px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);
  display: flex;
}

.mode-buttons {
  display: flex;
  gap: 2px;
}

.mode-btn {
  padding: 8px 18px;
  background: transparent;
  border: none;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.mode-btn:hover { background: #f5f5f5; color: #333; }
.mode-btn.active {
  background: linear-gradient(135deg, #c8102e 0%, #8c0b20 100%);
  color: white;
}
</style>

