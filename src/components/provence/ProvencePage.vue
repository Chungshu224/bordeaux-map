<template>
  <div class="provence-page" :key="i18n.global.locale.value" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁 -->
    <ProvenceLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
      @openGames="view = 'game'"
      @openNotebook="view = 'notebook'"
    />

    <!-- 地圖模式 -->
    <ProvenceMapPage
      v-else-if="view === 'map'"
      @back-to-course="view = 'selector'"
    />

    <!-- 品飲筆記 -->
    <ProvenceTastingNotebookPage
      v-else-if="view === 'notebook'"
      @back="view = 'selector'"
    />

    <!-- 互動練習 -->
    <ProvenceGameHubPage
      v-else-if="view === 'game'"
      @back="view = 'selector'"
    />

    <!-- 課程模式 -->
    <ProvenceLearningSystem
      v-else
      :selectedLevel="selectedLevel"
      @exitLearning="view = 'selector'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { i18n } from '../../locales/index.js'
import ProvenceLevelSelector from './ProvenceLevelSelector.vue'
import ProvenceLearningSystem from './ProvenceLearningSystem.vue'
import ProvenceMapPage from './ProvenceMapPage.vue'
import ProvenceGameHubPage from './ProvenceGameHubPage.vue'
import ProvenceTastingNotebookPage from './notebook/ProvenceTastingNotebookPage.vue'

const view = ref('selector') // 'selector' | 'map' | 'game' | 'notebook' | 'course'
const selectedLevel = ref(1)

function goToLevel(n) {
  selectedLevel.value = n
  view.value = 'course'
}
</script>

<style scoped>
.provence-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.provence-page.is-selector {
  height: auto;
}
</style>
