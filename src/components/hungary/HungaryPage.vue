<template>
  <div class="hungary-page" :class="{ 'is-selector': view === 'selector' }">

    <!-- 課程首頁 -->
    <HungaryLevelSelector
      v-if="view === 'selector'"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
      @openGames="view = 'game'"
      @openNotebook="view = 'notebook'"
      style="min-height: 100vh;"
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
      @exitLearning="router.push('/')"
      @openRegionMap="openRegionMap"
    />

    <!-- 品飲筆記 -->
    <HungaryTastingNotebookPage
      v-else-if="view === 'notebook'"
      @back="view = 'selector'"
    />

    <!-- 互動練習 -->
    <HungaryGameHubPage
      v-else-if="view === 'game'"
      @back="view = 'selector'"
    />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HungaryMapPage from './HungaryMapPage.vue'
import HungaryLearningSystem from './HungaryLearningSystem.vue'
import HungaryLevelSelector from './HungaryLevelSelector.vue'
import HungaryTastingNotebookPage from './notebook/HungaryTastingNotebookPage.vue'
import HungaryGameHubPage from './HungaryGameHubPage.vue'

const router = useRouter()
const view = ref('selector')   // 'selector' | 'map' | 'course' | 'notebook' | 'game'
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

function comingSoon(feature) {
  alert(`「${feature}」功能即將推出，敬請期待！`)
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
.hungary-page.is-selector {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>

