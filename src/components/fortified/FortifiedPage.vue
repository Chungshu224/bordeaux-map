<template>
  <div class="fortified-page">
    <FortifiedLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
      @openGames="view = 'games'"
      @openNotebook="view = 'notebook'"
    />
    <FortifiedMapPage v-else-if="view === 'map'" embedded @back="view = 'selector'" />
    <FortifiedGameHubPage v-else-if="view === 'games'" @back="view = 'selector'" />
    <FortifiedNotebookPage v-else-if="view === 'notebook'" @back="view = 'selector'" />
    <FortifiedLessonList v-else @back="leaveCourse" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FortifiedLevelSelector from './FortifiedLevelSelector.vue'
import FortifiedLessonList from './FortifiedLessonList.vue'
import FortifiedMapPage from './FortifiedMapPage.vue'
import FortifiedGameHubPage from './FortifiedGameHubPage.vue'
import FortifiedNotebookPage from './FortifiedNotebookPage.vue'
import { fortifiedLearningActions } from '../../stores/fortifiedLearningStore.js'

const view = ref('selector') // 'selector' | 'map' | 'games' | 'notebook' | 'course'

function goToLevel(n) {
  fortifiedLearningActions.setLevel(n)
  view.value = 'course'
}
function leaveCourse() {
  fortifiedLearningActions.exitLesson()
  view.value = 'selector'
}
</script>
