<template>
  <div class="d1-page">
    <D1LevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
    />
    <D1LessonList v-else @back="leaveCourse" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import D1LevelSelector from './D1LevelSelector.vue'
import D1LessonList from './D1LessonList.vue'
import { d1LearningActions } from '../../stores/d1LearningStore.js'

const view = ref('selector') // 階段 E 會加入 'cycle' | 'games' | 'notebook'

function goToLevel(n) {
  d1LearningActions.setLevel(n)
  view.value = 'course'
}
function leaveCourse() {
  d1LearningActions.exitLesson()
  view.value = 'selector'
}
</script>
