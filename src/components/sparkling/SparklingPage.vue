<template>
  <div class="sparkling-page">
    <SparklingLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
    />
    <SparklingMapPage v-else-if="view === 'map'" embedded @back="view = 'selector'" />
    <SparklingLessonList v-else @back="leaveCourse" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SparklingLevelSelector from './SparklingLevelSelector.vue'
import SparklingLessonList from './SparklingLessonList.vue'
import SparklingMapPage from './SparklingMapPage.vue'
import { sparklingLearningActions } from '../../stores/sparklingLearningStore.js'

const view = ref('selector') // 'selector' | 'map' | 'course'

function goToLevel(n) {
  sparklingLearningActions.setLevel(n)
  view.value = 'course'
}
function leaveCourse() {
  sparklingLearningActions.exitLesson()
  view.value = 'selector'
}
</script>
