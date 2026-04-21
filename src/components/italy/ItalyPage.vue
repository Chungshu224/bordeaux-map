<script setup>
import { ref } from 'vue'
import ItalyCourseManager from './course/ItalyCourseManager.vue'
import ItalyRegionSelector from './map/ItalyRegionSelector.vue'
import ItalyMapSection from './map/ItalyMapSection.vue'

// 'course' | 'map-selector' | 'map-detail'
const currentMode = ref('course')
const selectedRegion = ref(null)

function switchMode(mode) {
  currentMode.value = mode
  if (mode !== 'map-detail') selectedRegion.value = null
}

function onRegionSelected(region) {
  selectedRegion.value = region
  currentMode.value = 'map-detail'
}
</script>

<template>
  <div class="italy-page">
    <!-- 課程模式 -->
    <div v-if="currentMode === 'course'">
      <ItalyCourseManager @openMap="switchMode('map-selector')" />
    </div>

    <!-- 地圖：選擇產區 -->
    <div v-else-if="currentMode === 'map-selector'">
      <ItalyRegionSelector
        @regionSelected="onRegionSelected"
        @backToCourse="switchMode('course')"
      />
    </div>

    <!-- 地圖：產區詳情 + Leaflet -->
    <div v-else-if="currentMode === 'map-detail' && selectedRegion">
      <ItalyMapSection
        :region="selectedRegion"
        @back="switchMode('map-selector')"
      />
    </div>
  </div>
</template>

<style scoped>
.italy-page {
  min-height: 100vh;
}
</style>
