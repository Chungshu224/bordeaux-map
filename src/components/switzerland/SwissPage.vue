<template>
  <div class="swi-page">
    <SwissLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
    />
    <SwissLessonList v-else @back="leaveCourse" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SwissLevelSelector from './SwissLevelSelector.vue'
import SwissLessonList from './SwissLessonList.vue'
import { swiLearningActions } from '../../stores/switzerlandLearningStore.js'

const view = ref('selector') // 'selector' | 'course'

function goToLevel(n) {
  swiLearningActions.setLevel(n)
  view.value = 'course'
}
function leaveCourse() {
  swiLearningActions.exitLesson()
  view.value = 'selector'
}
</script>
