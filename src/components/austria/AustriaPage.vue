<template>
  <div class="austria-page" :key="i18n.global.locale.value" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁 -->
    <AustriaLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
      @openGames="view = 'game'"
      @openNotebook="view = 'notebook'"
    />

    <!-- 地圖模式 -->
    <AustriaMapPage
      v-else-if="view === 'map'"
      @back-to-course="view = 'selector'"
    />

    <!-- 品飲筆記 -->
    <AustriaTastingNotebookPage
      v-else-if="view === 'notebook'"
      @back="view = 'selector'"
    />

    <!-- 互動練習 -->
    <AustriaGameHubPage
      v-else-if="view === 'game'"
      @back="view = 'selector'"
    />

    <!-- 課程模式 -->
    <AustriaLearningSystem
      v-else
      :selectedLevel="selectedLevel"
      @exitLearning="view = 'selector'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { i18n } from '../../locales/index.js'
import AustriaLevelSelector from './AustriaLevelSelector.vue'
import AustriaLearningSystem from './AustriaLearningSystem.vue'
import AustriaMapPage from './AustriaMapPage.vue'
import AustriaGameHubPage from './AustriaGameHubPage.vue'
import AustriaTastingNotebookPage from './notebook/AustriaTastingNotebookPage.vue'

const view = ref('selector') // 'selector' | 'map' | 'game' | 'notebook' | 'course'
const selectedLevel = ref(1)

function goToLevel(n) {
  selectedLevel.value = n
  view.value = 'course'
}
</script>

<style scoped>
.austria-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.austria-page.is-selector {
  height: auto;
}
</style>
