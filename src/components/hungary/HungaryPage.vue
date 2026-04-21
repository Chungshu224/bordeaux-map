<template>
  <div class="hungary-page">

    <!-- 課程首頁 -->
    <HungaryLevelSelector
      v-if="view === 'selector'"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
    />

    <!-- 地圖模式 -->
    <HungaryMapPage
      v-else-if="view === 'map'"
      :initialRegion="pendingMapRegion"
      @back-to-course="handleMapBack"
    />

    <!-- 課程模式 -->
    <HungaryLearningSystem
      v-else-if="view === 'course'"
      :selectedLevel="selectedLevel"
      @exitLearning="view = 'selector'"
      @openRegionMap="openRegionMap"
    />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import HungaryMapPage from './HungaryMapPage.vue'
import HungaryLearningSystem from './HungaryLearningSystem.vue'
import HungaryLevelSelector from './HungaryLevelSelector.vue'

const view = ref('selector')   // 'selector' | 'map' | 'course'
const selectedLevel = ref(1)
const pendingMapRegion = ref(null)   // { group, folder } or null
const mapOpenedFromCourse = ref(false)

function goToLevel(n) {
  selectedLevel.value = n
  view.value = 'course'
}

function openRegionMap(info) {
  pendingMapRegion.value = info
  mapOpenedFromCourse.value = true
  view.value = 'map'
}

function handleMapBack() {
  if (mapOpenedFromCourse.value) {
    mapOpenedFromCourse.value = false
    pendingMapRegion.value = null
    view.value = 'course'
  } else {
    pendingMapRegion.value = null
    view.value = 'selector'
  }
}
</script>

<style scoped>
.hungary-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>

