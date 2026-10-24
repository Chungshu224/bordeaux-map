<template>
  <div class="rhone-page" :key="i18n.global.locale.value" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁（地圖／遊戲／筆記入口在階段 E 前顯示「製作中」，不導向任何頁面） -->
    <RhoneLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
    />

    <!-- 課程模式 -->
    <RhoneLearningSystem
      v-else
      :selectedLevel="selectedLevel"
      @exitLearning="view = 'selector'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { i18n } from '../../locales/index.js'
import RhoneLevelSelector from './RhoneLevelSelector.vue'
import RhoneLearningSystem from './RhoneLearningSystem.vue'

const view = ref('selector') // 'selector' | 'course'（地圖／遊戲／筆記於階段 E 加入）
const selectedLevel = ref(1)

function goToLevel(n) {
  selectedLevel.value = n
  view.value = 'course'
}
</script>

<style scoped>
.rhone-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.rhone-page.is-selector {
  height: auto;
}
</style>
