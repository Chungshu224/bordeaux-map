<script setup>
import { ref } from 'vue'
import AustraliaCourseManager from './australia/course/AustraliaCourseManager.vue'
import AustraliaMapSection    from './australia/map/AustraliaMapSection.vue'

const currentMode = ref('course')

function openMap()      { currentMode.value = 'map' }
function backToCourse() { currentMode.value = 'course' }
</script>

<template>
  <div class="australia-page">
    <AustraliaCourseManager
      v-if="currentMode === 'course'"
      @openMap="openMap"
    />
    <AustraliaMapSection
      v-else-if="currentMode === 'map'"
      @back="backToCourse"
    />
  </div>
</template>

<style scoped>
.australia-page {
  width: 100%;
  min-height: 100vh;
}
</style>
