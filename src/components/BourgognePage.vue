<script setup>
import { ref, provide } from 'vue'
import { useRouter } from 'vue-router'
import CourseManager from './bourgogne/course/CourseManager.vue'
import BourgogneRegionSelector from './bourgogne/BourgogneRegionSelector.vue'
import BourgogneRegionMap from './bourgogne/BourgogneRegionMap.vue'

const router = useRouter()

const currentRegion = ref(null)
const showRegionSelector = ref(true)
const currentMode = ref('course') // 'course' 主要模式, 'map' 地圖模式

// 提供全域狀態給子組件
provide('currentRegion', currentRegion)

const handleRegionSelected = (region) => {
  if (region) {
    currentRegion.value = region
    showRegionSelector.value = false
  } else {
    currentRegion.value = null
    showRegionSelector.value = true
  }
}

const backToRegionSelector = () => {
  currentRegion.value = null
  showRegionSelector.value = true
}

const switchMode = (mode) => {
  currentMode.value = mode
  if (mode === 'map') {
    showRegionSelector.value = true
    currentRegion.value = null
  }
}

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="bourgogne-page">
    <!-- 頂部導覽列 -->
    <nav class="bourgogne-nav">
      <button class="nav-back-btn" @click="goHome">
        <span>🏠</span> 返回首頁
      </button>
      <div class="nav-title">
        <span class="nav-logo">🍇</span>
        <span>布根地葡萄酒學院</span>
      </div>
      <div class="nav-spacer"></div>
    </nav>

    <!-- 課程模式（預設） -->
    <div v-if="currentMode === 'course'" class="mode-content">
      <CourseManager @openMap="switchMode('map')" />
    </div>

    <!-- 地圖模式 -->
    <div v-else-if="currentMode === 'map'" class="mode-content">
      <BourgogneRegionSelector
        v-if="showRegionSelector"
        @region-selected="handleRegionSelected"
        @request-learning-mode="switchMode('course')"
      />
      <div v-else class="map-view">
        <BourgogneRegionMap
          v-if="currentRegion"
          :region-config="currentRegion"
          @request-learning-mode="switchMode('course')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bourgogne-page {
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
}

.bourgogne-nav {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(135deg, #4a1e5e, #6b2d8b);
  color: #fff;
  gap: 16px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.nav-back-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 7px 14px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
}

.nav-back-btn:hover {
  background: rgba(255, 255, 255, 0.25);
}

.nav-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.nav-logo {
  font-size: 20px;
}

.nav-spacer {
  flex: 1;
}

.mode-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.map-view {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
