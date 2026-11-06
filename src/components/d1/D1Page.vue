<template>
  <div class="d1-page">
    <D1LevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openCycle="view = 'cycle'"
      @openGames="view = 'games'"
      @openNotebook="view = 'notebook'"
    />
    <D1CyclePage v-else-if="view === 'cycle'" @back="view = 'selector'" />
    <D1GameHubPage v-else-if="view === 'games'" @back="view = 'selector'" />
    <D1NotebookPage v-else-if="view === 'notebook'" @back="view = 'selector'" />
    <D1LessonList v-else @back="leaveCourse" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import D1LevelSelector from './D1LevelSelector.vue'
import D1LessonList from './D1LessonList.vue'
import D1CyclePage from './D1CyclePage.vue'
import D1GameHubPage from './D1GameHubPage.vue'
import D1NotebookPage from './D1NotebookPage.vue'
import { d1LearningActions } from '../../stores/d1LearningStore.js'

const view = ref('selector') // 'selector' | 'cycle' | 'games' | 'notebook' | 'course'

function goToLevel(n) {
  d1LearningActions.setLevel(n)
  view.value = 'course'
}
function leaveCourse() {
  d1LearningActions.exitLesson()
  view.value = 'selector'
}
</script>
