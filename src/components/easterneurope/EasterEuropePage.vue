<template>
  <div class="ee-page">
    <EasterEuropeLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
    />
    <EasterEuropeLessonList v-else @back="leaveCourse" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EasterEuropeLevelSelector from './EasterEuropeLevelSelector.vue'
import EasterEuropeLessonList from './EasterEuropeLessonList.vue'
import { eeLearningActions } from '../../stores/easterneuropeLearningStore.js'

const view = ref('selector') // 'selector' | 'course'

function goToLevel(n) {
  eeLearningActions.setLevel(n)
  view.value = 'course'
}
function leaveCourse() {
  eeLearningActions.exitLesson()
  view.value = 'selector'
}
</script>
