<script setup>
import { ref } from 'vue'
import GermanyRegionSelector from './germany/map/GermanyRegionSelector.vue'
import GermanyMapSection from './germany/map/GermanyMapSection.vue'
import GermanyCourseManager from './germany/course/GermanyCourseManager.vue'

// 'course' | 'map-selector' | 'map-detail'
const currentMode = ref('course')
const selectedRegion = ref(null)
const mapReturnMode = ref('course')

function switchMode(mode) {
  currentMode.value = mode
  if (mode !== 'map-detail') selectedRegion.value = null
}

function onRegionSelected(region) {
  selectedRegion.value = region
  currentMode.value = 'map-detail'
}

function openMap() {
  mapReturnMode.value = currentMode.value
  currentMode.value = 'map-selector'
}

function onMapBack() {
  currentMode.value = mapReturnMode.value || 'course'
  selectedRegion.value = null
}
</script>

<template>
  <div class="germany-page">
    <!-- 課程系統 -->
    <GermanyCourseManager
      v-if="currentMode === 'course'"
      @openMap="openMap"
    />

    <!-- 地圖：選擇產區 -->
    <div v-else-if="currentMode === 'map-selector'">
      <div class="map-header-bar">
        <button class="map-back-btn" @click="onMapBack">← 返回課程</button>
      </div>
      <GermanyRegionSelector
        @regionSelected="onRegionSelected"
      />
    </div>

    <!-- 地圖：產區詳情 -->
    <div v-else-if="currentMode === 'map-detail' && selectedRegion">
      <GermanyMapSection
        :region="selectedRegion"
        @back="switchMode('map-selector')"
      />
    </div>
  </div>
</template>

<style scoped>
.germany-page {
  min-height: 100vh;
}
.map-header-bar {
  background: #1565c0;
  padding: 0.75rem 1.5rem;
}
.map-back-btn {
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.25);
  color: white;
  border-radius: 8px;
  padding: 6px 14px;
  cursor: pointer;
  font-size: 0.9rem;
}
.map-back-btn:hover { background: rgba(255,255,255,0.25); }
</style>
