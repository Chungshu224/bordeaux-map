<script setup>
import { ref } from 'vue'
import NZCourseManager from './NZCourseManager.vue'
import NZMapPage from './NZMapPage.vue'
import NZTastingNotebookPage from './notebook/NZTastingNotebookPage.vue'

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
    />
    <NZMapPage
      v-else-if="currentMode === 'map'"
      @back-to-course="backToCourse"
    />
    <NZTastingNotebookPage
      v-else-if="currentMode === 'notebook'"
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
