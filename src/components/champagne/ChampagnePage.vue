<template>
  <div class="champagne-page" :key="i18n.global.locale.value" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁 -->
    <ChampagneLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
    />

    <!-- 課程模式 -->
    <ChampagneLearningSystem
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
import ChampagneLevelSelector from './ChampagneLevelSelector.vue'
import ChampagneLearningSystem from './ChampagneLearningSystem.vue'

const view = ref('selector') // 'selector' | 'course'
const selectedLevel = ref(1)

function goToLevel(n) {
  selectedLevel.value = n
  view.value = 'course'
}
</script>

<style scoped>
.champagne-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.champagne-page.is-selector {
  height: auto;
}
</style>
