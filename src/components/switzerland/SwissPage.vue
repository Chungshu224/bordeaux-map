<template>
  <div class="swi-page">
    <SwissLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
      @openGames="view = 'games'"
    />
    <SwissMapPage v-else-if="view === 'map'" @back="view = 'selector'" />
    <SwissGameHubPage v-else-if="view === 'games'" @back="view = 'selector'" />
    <SwissLessonList v-else @back="leaveCourse" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SwissLevelSelector from './SwissLevelSelector.vue'
import SwissLessonList from './SwissLessonList.vue'
import SwissMapPage from './SwissMapPage.vue'
import SwissGameHubPage from './SwissGameHubPage.vue'
import { swiLearningActions } from '../../stores/switzerlandLearningStore.js'

const view = ref('selector') // 'selector' | 'map' | 'games' | 'course'

function goToLevel(n) {
  swiLearningActions.setLevel(n)
  view.value = 'course'
}
function leaveCourse() {
  swiLearningActions.exitLesson()
  view.value = 'selector'
}
</script>
