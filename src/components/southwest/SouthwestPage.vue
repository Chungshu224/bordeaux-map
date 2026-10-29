<template>
  <div class="southwest-page" :key="i18n.global.locale.value" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁 -->
    <SouthwestLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
      @openGames="view = 'game'"
      @openNotebook="view = 'notebook'"
    />

    <!-- 地圖模式 -->
    <SouthwestMapPage
      v-else-if="view === 'map'"
      @back-to-course="view = 'selector'"
    />

    <!-- 品飲筆記 -->
    <SouthwestTastingNotebookPage
      v-else-if="view === 'notebook'"
      @back="view = 'selector'"
    />

    <!-- 互動練習 -->
    <SouthwestGameHubPage
      v-else-if="view === 'game'"
      @back="view = 'selector'"
    />

    <!-- 課程模式 -->
    <SouthwestLearningSystem
      v-else
      :selectedLevel="selectedLevel"
      @exitLearning="view = 'selector'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { i18n } from '../../locales/index.js'
import SouthwestLevelSelector from './SouthwestLevelSelector.vue'
import SouthwestLearningSystem from './SouthwestLearningSystem.vue'
import SouthwestMapPage from './SouthwestMapPage.vue'
import SouthwestGameHubPage from './SouthwestGameHubPage.vue'
import SouthwestTastingNotebookPage from './notebook/SouthwestTastingNotebookPage.vue'

const view = ref('selector') // 'selector' | 'map' | 'game' | 'notebook' | 'course'
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
