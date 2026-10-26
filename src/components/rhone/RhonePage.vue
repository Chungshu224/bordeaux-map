<template>
  <div class="rhone-page" :key="i18n.global.locale.value" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁 -->
    <RhoneLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
      @openGames="view = 'game'"
      @openNotebook="view = 'notebook'"
    />

    <!-- 地圖模式 -->
    <RhoneMapPage
      v-else-if="view === 'map'"
      @back-to-course="view = 'selector'"
    />

    <!-- 品飲筆記 -->
    <RhoneTastingNotebookPage
      v-else-if="view === 'notebook'"
      @back="view = 'selector'"
    />

    <!-- 互動練習 -->
    <RhoneGameHubPage
      v-else-if="view === 'game'"
      @back="view = 'selector'"
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
import RhoneMapPage from './RhoneMapPage.vue'
import RhoneGameHubPage from './RhoneGameHubPage.vue'
import RhoneTastingNotebookPage from './notebook/RhoneTastingNotebookPage.vue'

const view = ref('selector') // 'selector' | 'map' | 'game' | 'notebook' | 'course'
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
