<script setup>
import { ref } from 'vue'
import NZCourseManager from './NZCourseManager.vue'
import NZMapPage from './NZMapPage.vue'
import NZTastingNotebookPage from './notebook/NZTastingNotebookPage.vue'
import NZGameHubPage from './NZGameHubPage.vue'

const currentMode = ref('course')

function openMap() { currentMode.value = 'map' }
function backToCourse() { currentMode.value = 'course' }
</script>

<template>
  <div class="newzealand-page">
    <NZCourseManager
      v-if="currentMode === 'course'"
      @openMap="openMap"
      @openNotebook="currentMode = 'notebook'"
      @openGame="currentMode = 'game'"
    />
    <NZMapPage
      v-else-if="currentMode === 'map'"
      @back-to-course="backToCourse"
    />
    <NZTastingNotebookPage
      v-else-if="currentMode === 'notebook'"
      @back="currentMode = 'course'"
    />
    <NZGameHubPage
      v-else-if="currentMode === 'game'"
      @back="currentMode = 'course'"
    />
  </div>
</template>

<style scoped>
.newzealand-page {
  width: 100%;
  min-height: 100vh;
}
</style>
