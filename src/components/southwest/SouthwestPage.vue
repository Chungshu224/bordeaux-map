<template>
  <div class="southwest-page" :key="i18n.global.locale.value" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁 -->
    <SouthwestLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
    />

    <!-- 課程模式 -->
    <SouthwestLearningSystem
      v-else
      :selectedLevel="selectedLevel"
      @exitLearning="view = 'selector'"
    />
    <!-- 互動地圖／遊戲／品飲筆記：階段 E 製作，目前於課程首頁以「製作中」顯示 -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { i18n } from '../../locales/index.js'
import SouthwestLevelSelector from './SouthwestLevelSelector.vue'
import SouthwestLearningSystem from './SouthwestLearningSystem.vue'

const view = ref('selector') // 'selector' | 'course'
const selectedLevel = ref(1)

function goToLevel(n) {
  selectedLevel.value = n
  view.value = 'course'
}
</script>

<style scoped>
.southwest-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.southwest-page.is-selector {
  height: auto;
}
</style>
