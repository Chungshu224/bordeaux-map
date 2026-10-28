<template>
  <div class="argentina-page" :key="i18n.global.locale.value" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁 -->
    <ArgentinaLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
      @openGames="view = 'game'"
      @openNotebook="view = 'notebook'"
    />

    <!-- 地圖模式 -->
    <ArgentinaMapPage
      v-else-if="view === 'map'"
      @back-to-course="view = 'selector'"
    />

    <!-- 品飲筆記 -->
    <ArgentinaTastingNotebookPage
      v-else-if="view === 'notebook'"
      @back="view = 'selector'"
    />

    <!-- 互動練習 -->
    <ArgentinaGameHubPage
      v-else-if="view === 'game'"
      @back="view = 'selector'"
    />

    <!-- 課程模式 -->
    <ArgentinaLearningSystem
      v-else
      :selectedLevel="selectedLevel"
      @exitLearning="view = 'selector'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { i18n } from '../../locales/index.js'
import ArgentinaLevelSelector from './ArgentinaLevelSelector.vue'
import ArgentinaLearningSystem from './ArgentinaLearningSystem.vue'
import ArgentinaMapPage from './ArgentinaMapPage.vue'
import ArgentinaGameHubPage from './ArgentinaGameHubPage.vue'
import ArgentinaTastingNotebookPage from './notebook/ArgentinaTastingNotebookPage.vue'

const view = ref('selector') // 'selector' | 'map' | 'game' | 'notebook' | 'course'
const selectedLevel = ref(1)

function goToLevel(n) {
  selectedLevel.value = n
  view.value = 'course'
}
</script>

<style scoped>
.argentina-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.argentina-page.is-selector {
  height: auto;
}
</style>
