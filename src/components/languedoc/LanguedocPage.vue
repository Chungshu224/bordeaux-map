<template>
  <div class="languedoc-page" :key="i18n.global.locale.value" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁 -->
    <LanguedocLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
      @openGames="view = 'game'"
      @openNotebook="view = 'notebook'"
    />

    <!-- 地圖模式 -->
    <LanguedocMapPage
      v-else-if="view === 'map'"
      @back-to-course="view = 'selector'"
    />

    <!-- 品飲筆記 -->
    <LanguedocTastingNotebookPage
      v-else-if="view === 'notebook'"
      @back="view = 'selector'"
    />

    <!-- 互動練習 -->
    <LanguedocGameHubPage
      v-else-if="view === 'game'"
      @back="view = 'selector'"
    />

    <!-- 課程模式 -->
    <LanguedocLearningSystem
      v-else
      :selectedLevel="selectedLevel"
      @exitLearning="view = 'selector'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { i18n } from '../../locales/index.js'
import LanguedocLevelSelector from './LanguedocLevelSelector.vue'
import LanguedocLearningSystem from './LanguedocLearningSystem.vue'
import LanguedocMapPage from './LanguedocMapPage.vue'
import LanguedocGameHubPage from './LanguedocGameHubPage.vue'
import LanguedocTastingNotebookPage from './notebook/LanguedocTastingNotebookPage.vue'

const view = ref('selector') // 'selector' | 'map' | 'game' | 'notebook' | 'course'
const selectedLevel = ref(1)

function goToLevel(n) {
  selectedLevel.value = n
  view.value = 'course'
}
</script>

<style scoped>
.languedoc-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.languedoc-page.is-selector {
  height: auto;
}
</style>
