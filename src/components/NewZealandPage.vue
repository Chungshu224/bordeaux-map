<script setup>
import { ref } from 'vue'
import NZCourseManager from './newzealand/NZCourseManager.vue'
import NZMapPage from './newzealand/NZMapPage.vue'

const currentMode = ref('course')

function openMap() { currentMode.value = 'map' }
function backToCourse() { currentMode.value = 'course' }
</script>

<template>
  <div class="newzealand-page">
    <NZCourseManager
      v-if="currentMode === 'course'"
      @openMap="openMap"
    />
    <NZMapPage
      v-else-if="currentMode === 'map'"
      @back-to-course="backToCourse"
    />
  </div>
</template>

<style scoped>
.newzealand-page {
  width: 100%;
  min-height: 100vh;
}
</style>
