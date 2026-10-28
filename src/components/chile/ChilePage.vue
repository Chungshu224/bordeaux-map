<template>
  <div class="chile-page" :key="i18n.global.locale.value" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁 -->
    <ChileLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
      @openGames="view = 'game'"
      @openNotebook="view = 'notebook'"
    />

    <!-- 地圖模式 -->
    <ChileMapPage
      v-else-if="view === 'map'"
      @back-to-course="view = 'selector'"
    />

    <!-- 品飲筆記 -->
    <ChileTastingNotebookPage
      v-else-if="view === 'notebook'"
      @back="view = 'selector'"
    />

    <!-- 互動練習 -->
    <ChileGameHubPage
      v-else-if="view === 'game'"
      @back="view = 'selector'"
    />

    <!-- 課程模式 -->
    <ChileLearningSystem
      v-else
      :selectedLevel="selectedLevel"
      @exitLearning="view = 'selector'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { i18n } from '../../locales/index.js'
import ChileLevelSelector from './ChileLevelSelector.vue'
import ChileLearningSystem from './ChileLearningSystem.vue'
import ChileMapPage from './ChileMapPage.vue'
import ChileGameHubPage from './ChileGameHubPage.vue'
import ChileTastingNotebookPage from './notebook/ChileTastingNotebookPage.vue'

const view = ref('selector') // 'selector' | 'map' | 'game' | 'notebook' | 'course'
const selectedLevel = ref(1)

function goToLevel(n) {
  selectedLevel.value = n
  view.value = 'course'
}
</script>

<style scoped>
.chile-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.chile-page.is-selector {
  height: auto;
}
</style>
