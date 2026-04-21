<script setup>
import { ref } from 'vue'
import PortugalCourseManager from './course/PortugalCourseManager.vue'
import PortugalMapSection from './map/PortugalMapSection.vue'

// 'course' | 'map'
const currentMode = ref('course')

function openMap() {
  currentMode.value = 'map'
}
function backToCourse() {
  currentMode.value = 'course'
}
</script>

<template>
  <div class="portugal-page">

    <!-- 課程主頁 -->
    <PortugalCourseManager
      v-if="currentMode === 'course'"
      @openMap="openMap"
    />

    <!-- 產區地圖 -->
    <PortugalMapSection
      v-else-if="currentMode === 'map'"
      @back="backToCourse"
    />

  </div>
</template>

<style scoped>
.portugal-page {
  width: 100%;
  min-height: 100vh;
}
</style>
