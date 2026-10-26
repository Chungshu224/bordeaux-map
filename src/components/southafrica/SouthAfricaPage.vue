<template>
  <div class="southafrica-page" :key="i18n.global.locale.value" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁 -->
    <SouthAfricaLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
      @openGames="view = 'game'"
      @openNotebook="view = 'notebook'"
    />

    <!-- 地圖模式 -->
    <SouthAfricaMapPage
      v-else-if="view === 'map'"
      @back-to-course="view = 'selector'"
    />

    <!-- 品飲筆記 -->
    <SouthAfricaTastingNotebookPage
      v-else-if="view === 'notebook'"
      @back="view = 'selector'"
    />

    <!-- 互動練習 -->
    <SouthAfricaGameHubPage
      v-else-if="view === 'game'"
      @back="view = 'selector'"
    />

    <!-- 課程模式 -->
    <SouthAfricaLearningSystem
      v-else
      :selectedLevel="selectedLevel"
      @exitLearning="view = 'selector'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { i18n } from '../../locales/index.js'
import SouthAfricaLevelSelector from './SouthAfricaLevelSelector.vue'
import SouthAfricaLearningSystem from './SouthAfricaLearningSystem.vue'
import SouthAfricaMapPage from './SouthAfricaMapPage.vue'
import SouthAfricaGameHubPage from './SouthAfricaGameHubPage.vue'
import SouthAfricaTastingNotebookPage from './notebook/SouthAfricaTastingNotebookPage.vue'

const view = ref('selector') // 'selector' | 'map' | 'game' | 'notebook' | 'course'
const selectedLevel = ref(1)

function goToLevel(n) {
  selectedLevel.value = n
  view.value = 'course'
}
</script>

<style scoped>
.southafrica-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.southafrica-page.is-selector {
  height: auto;
}
</style>
