<template>
  <div class="fortified-page">
    <FortifiedLevelSelector v-if="view === 'selector'" style="min-height: 100vh;" @enterLevel="goToLevel" />
    <FortifiedLessonList v-else @back="leaveCourse" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FortifiedLevelSelector from './FortifiedLevelSelector.vue'
import FortifiedLessonList from './FortifiedLessonList.vue'
import { fortifiedLearningActions } from '../../stores/fortifiedLearningStore.js'

const view = ref('selector') // 'selector' | 'course'（地圖、遊戲、筆記於階段 E 加入）

function goToLevel(n) {
  fortifiedLearningActions.setLevel(n)
  view.value = 'course'
}
function leaveCourse() {
  fortifiedLearningActions.exitLesson()
  view.value = 'selector'
}
</script>
