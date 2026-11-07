<template>
  <div class="d2-page">
    <D2LevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openPrice="view = 'price'"
      @openGames="view = 'games'"
    />
    <D2PriceChainPage v-else-if="view === 'price'" @back="view = 'selector'" />
    <D2GameHubPage v-else-if="view === 'games'" @back="view = 'selector'" />
    <D2LessonList v-else @back="leaveCourse" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import D2LevelSelector from './D2LevelSelector.vue'
import D2LessonList from './D2LessonList.vue'
import D2PriceChainPage from './D2PriceChainPage.vue'
import D2GameHubPage from './D2GameHubPage.vue'
import { d2LearningActions } from '../../stores/d2LearningStore.js'

const view = ref('selector') // 'selector' | 'price' | 'games' | 'course'

function goToLevel(n) {
  d2LearningActions.setLevel(n)
  view.value = 'course'
}
function leaveCourse() {
  d2LearningActions.exitLesson()
  view.value = 'selector'
}
</script>
