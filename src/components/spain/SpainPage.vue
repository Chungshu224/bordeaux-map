<script setup>
import { ref } from 'vue'
import SpainCourseManager from './course/SpainCourseManager.vue'
import SpainRegionSelector from './map/SpainRegionSelector.vue'
import SpainMapSection from './map/SpainMapSection.vue'

// 'course' | 'map-selector' | 'map-detail'
const currentMode = ref('course')
const selectedRegion = ref(null)

const allSpain = {
  id: 'all',
  name: '全西班牙',
  nameEs: 'España',
  icon: '🇪🇸',
  color: '#c0392b',
  center: [-3.5, 40.0],
  zoom: 5.5,
  filterAutonomiaId: null,
}

// 從課程主頁 → 探索地圖（先到地區選擇器）
function openMap() {
  currentMode.value = 'map-selector'
}

// 從課程主頁 → 依自治區選擇器
function openSelector() {
  currentMode.value = 'map-selector'
}

// 地區選擇器選了一個地區 → 地圖
function onRegionSelected(region) {
  selectedRegion.value = region
  currentMode.value = 'map-detail'
}

// 地區選擇器選了「探索全西班牙」
function openFullMap() {
  selectedRegion.value = allSpain
  currentMode.value = 'map-detail'
}

// 地圖 → 回到選擇器
function backToSelector() {
  currentMode.value = 'map-selector'
  selectedRegion.value = null
}

// 地區選擇器 → 回到課程主頁
function backToCourse() {
  currentMode.value = 'course'
}
</script>

<template>
  <div class="spain-page">

    <!-- 課程主頁 -->
    <SpainCourseManager
      v-if="currentMode === 'course'"
      @openMap="openMap"
      @openSelector="openSelector"
    />

    <!-- 自治區選擇器 -->
    <SpainRegionSelector
      v-else-if="currentMode === 'map-selector'"
      @regionSelected="onRegionSelected"
      @openFullMap="openFullMap"
      @back="backToCourse"
    />

    <!-- 地圖細節 -->
    <SpainMapSection
      v-else-if="currentMode === 'map-detail' && selectedRegion"
      :region="selectedRegion"
      @back="backToSelector"
    />

  </div>
</template>

<style scoped>
.spain-page {
  min-height: 100vh;
}
</style>
