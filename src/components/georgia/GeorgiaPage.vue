<template>
  <div class="ge-page">
    <GeorgiaLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
    />
    <GeorgiaMapPage v-else-if="view === 'map'" @back="view = 'selector'" />
    <GeorgiaLessonList v-else @back="leaveCourse" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GeorgiaLevelSelector from './GeorgiaLevelSelector.vue'
import GeorgiaLessonList from './GeorgiaLessonList.vue'
import GeorgiaMapPage from './GeorgiaMapPage.vue'
import { geLearningActions } from '../../stores/georgiaLearningStore.js'

const view = ref('selector') // 'selector' | 'map' | 'course'

function goToLevel(n) {
  geLearningActions.setLevel(n)
  view.value = 'course'
}
function leaveCourse() {
  geLearningActions.exitLesson()
  view.value = 'selector'
}
</script>
