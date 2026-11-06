<template>
  <div class="sparkling-page">
    <SparklingLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
      @openGames="view = 'games'"
      @openNotebook="view = 'notebook'"
    />
    <SparklingMapPage v-else-if="view === 'map'" embedded @back="view = 'selector'" />
    <SparklingGameHubPage v-else-if="view === 'games'" @back="view = 'selector'" />
    <SparklingNotebookPage v-else-if="view === 'notebook'" @back="view = 'selector'" />
    <SparklingLessonList v-else @back="leaveCourse" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SparklingLevelSelector from './SparklingLevelSelector.vue'
import SparklingLessonList from './SparklingLessonList.vue'
import SparklingMapPage from './SparklingMapPage.vue'
import SparklingGameHubPage from './SparklingGameHubPage.vue'
import SparklingNotebookPage from './SparklingNotebookPage.vue'
import { sparklingLearningActions } from '../../stores/sparklingLearningStore.js'

const view = ref('selector') // 'selector' | 'map' | 'games' | 'notebook' | 'course'

function goToLevel(n) {
  sparklingLearningActions.setLevel(n)
  view.value = 'course'
}
function leaveCourse() {
  sparklingLearningActions.exitLesson()
  view.value = 'selector'
}
</script>
