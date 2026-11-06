<template>
  <div class="sommelier-page" :key="i18n.global.locale.value" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁 -->
    <SommelierLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
    />

    <!-- 課程模式 -->
    <SommelierLearningSystem
      v-else
      :selectedLevel="selectedLevel"
      @exitLearning="view = 'selector'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { i18n } from '../../locales/index.js'
import SommelierLevelSelector from './SommelierLevelSelector.vue'
import SommelierLearningSystem from './SommelierLearningSystem.vue'

const view = ref('selector') // 'selector' | 'course'
const selectedLevel = ref(1)

function goToLevel(n) {
  selectedLevel.value = n
  view.value = 'course'
}
</script>

<style scoped>
.sommelier-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.sommelier-page.is-selector {
  height: auto;
}
</style>
