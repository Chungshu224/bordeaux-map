<template>
  <div class="diploma-page" :key="i18n.global.locale.value" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁 -->
    <DiplomaLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
    />

    <!-- 課程模式 -->
    <DiplomaLearningSystem
      v-else
      :selectedLevel="selectedLevel"
      @exitLearning="view = 'selector'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { i18n } from '../../locales/index.js'
import DiplomaLevelSelector from './DiplomaLevelSelector.vue'
import DiplomaLearningSystem from './DiplomaLearningSystem.vue'

const view = ref('selector') // 'selector' | 'course'
const selectedLevel = ref(1)

function goToLevel(n) {
  selectedLevel.value = n
  view.value = 'course'
}
</script>

<style scoped>
.diploma-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.diploma-page.is-selector {
  height: auto;
}
</style>
