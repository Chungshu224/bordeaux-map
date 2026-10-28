<template>
  <div class="usother-page" :key="i18n.global.locale.value" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁 -->
    <UsOtherLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
      @openGames="view = 'game'"
      @openNotebook="view = 'notebook'"
    />

    <!-- 地圖模式 -->
    <UsOtherMapPage
      v-else-if="view === 'map'"
      @back-to-course="view = 'selector'"
    />

    <!-- 品飲筆記 -->
    <UsOtherTastingNotebookPage
      v-else-if="view === 'notebook'"
      @back="view = 'selector'"
    />

    <!-- 互動練習 -->
    <UsOtherGameHubPage
      v-else-if="view === 'game'"
      @back="view = 'selector'"
    />

    <!-- 課程模式 -->
    <UsOtherLearningSystem
      v-else
      :selectedLevel="selectedLevel"
      @exitLearning="view = 'selector'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { i18n } from '../../locales/index.js'
import UsOtherLevelSelector from './UsOtherLevelSelector.vue'
import UsOtherLearningSystem from './UsOtherLearningSystem.vue'
import UsOtherMapPage from './UsOtherMapPage.vue'
import UsOtherGameHubPage from './UsOtherGameHubPage.vue'
import UsOtherTastingNotebookPage from './notebook/UsOtherTastingNotebookPage.vue'

const view = ref('selector') // 'selector' | 'map' | 'game' | 'notebook' | 'course'
const selectedLevel = ref(1)

function goToLevel(n) {
  selectedLevel.value = n
  view.value = 'course'
}
</script>

<style scoped>
.usother-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.usother-page.is-selector {
  height: auto;
}
</style>
