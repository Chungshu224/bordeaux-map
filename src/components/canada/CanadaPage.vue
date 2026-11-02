<template>
  <div class="canada-page" :key="i18n.global.locale.value" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁 -->
    <CanadaLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
      @openGames="view = 'game'"
      @openNotebook="view = 'notebook'"
    />

    <!-- 地圖模式 -->
    <CanadaMapPage
      v-else-if="view === 'map'"
      @back-to-course="view = 'selector'"
    />

    <!-- 品飲筆記 -->
    <CanadaTastingNotebookPage
      v-else-if="view === 'notebook'"
      @back="view = 'selector'"
    />

    <!-- 互動練習 -->
    <CanadaGameHubPage
      v-else-if="view === 'game'"
      @back="view = 'selector'"
    />

    <!-- 課程模式 -->
    <CanadaLearningSystem
      v-else
      :selectedLevel="selectedLevel"
      @exitLearning="view = 'selector'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { i18n } from '../../locales/index.js'
import CanadaLevelSelector from './CanadaLevelSelector.vue'
import CanadaLearningSystem from './CanadaLearningSystem.vue'
import CanadaMapPage from './CanadaMapPage.vue'
import CanadaGameHubPage from './CanadaGameHubPage.vue'
import CanadaTastingNotebookPage from './notebook/CanadaTastingNotebookPage.vue'

const view = ref('selector') // 'selector' | 'map' | 'game' | 'notebook' | 'course'
const selectedLevel = ref(1)

function goToLevel(n) {
  selectedLevel.value = n
  view.value = 'course'
}
</script>

<style scoped>
.canada-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.canada-page.is-selector {
  height: auto;
}
</style>
