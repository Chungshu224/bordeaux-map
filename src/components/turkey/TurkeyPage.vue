<template>
  <div class="tr-page">
    <TurkeyLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
    />
    <TurkeyLessonList v-else @back="leaveCourse" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TurkeyLevelSelector from './TurkeyLevelSelector.vue'
import TurkeyLessonList from './TurkeyLessonList.vue'
import { trLearningActions } from '../../stores/turkeyLearningStore.js'

const view = ref('selector') // 'selector' | 'course'

function goToLevel(n) {
  trLearningActions.setLevel(n)
  view.value = 'course'
}
function leaveCourse() {
  trLearningActions.exitLesson()
  view.value = 'selector'
}
</script>
