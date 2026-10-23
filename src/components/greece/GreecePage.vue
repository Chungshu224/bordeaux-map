<template>
  <div class="greece-page" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁 -->
    <GreeceLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
    />

    <!-- 課程模式 -->
    <GreeceLearningSystem
      v-else
      :selectedLevel="selectedLevel"
      @exitLearning="view = 'selector'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GreeceLevelSelector from './GreeceLevelSelector.vue'
import GreeceLearningSystem from './GreeceLearningSystem.vue'

const view = ref('selector') // 'selector' | 'course'
const selectedLevel = ref(1)

function goToLevel(n) {
  selectedLevel.value = n
  view.value = 'course'
}
</script>

<style scoped>
.greece-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.greece-page.is-selector {
  height: auto;
}
</style>
