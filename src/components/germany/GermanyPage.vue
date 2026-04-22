<script setup>
import { ref } from 'vue'
import GermanyAllRegionsMap from './map/GermanyAllRegionsMap.vue'
import GermanyCourseManager from './course/GermanyCourseManager.vue'

// 'course' | 'map'
const currentMode = ref('course')

function openMap() {
  currentMode.value = 'map'
}

function onMapBack() {
  currentMode.value = 'course'
}
</script>

<template>
  <div class="germany-page">
    <!-- 課程系統 -->
    <GermanyCourseManager
      v-if="currentMode === 'course'"
      @openMap="openMap"
    />

    <!-- 探索地圖：全部產區 -->
    <GermanyAllRegionsMap
      v-else-if="currentMode === 'map'"
      @back="onMapBack"
    />
  </div>
</template>

<style scoped>
.germany-page {
  min-height: 100vh;
}
</style>
