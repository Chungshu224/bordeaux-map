<template>
  <div class="champagne-page" :key="i18n.global.locale.value" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁 -->
    <ChampagneLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
      @openGames="view = 'game'"
      @openNotebook="view = 'notebook'"
    />

    <ChampagneMapPage v-else-if="view === 'map'" @back-to-course="view = 'selector'" />
    <ChampagneTastingNotebookPage v-else-if="view === 'notebook'" @back="view = 'selector'" />
    <ChampagneGameHubPage v-else-if="view === 'game'" @back="view = 'selector'" />

    <!-- 課程模式 -->
    <ChampagneLearningSystem
      v-else
      :selectedLevel="selectedLevel"
      @exitLearning="view = 'selector'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { i18n } from '../../locales/index.js'
import ChampagneLevelSelector from './ChampagneLevelSelector.vue'
import ChampagneLearningSystem from './ChampagneLearningSystem.vue'
import ChampagneMapPage from './ChampagneMapPage.vue'
import ChampagneGameHubPage from './ChampagneGameHubPage.vue'
import ChampagneTastingNotebookPage from './notebook/ChampagneTastingNotebookPage.vue'

const view = ref('selector') // 'selector' | 'map' | 'game' | 'notebook' | 'course'
const selectedLevel = ref(1)

function goToLevel(n) {
  selectedLevel.value = n
  view.value = 'course'
}
</script>

<style scoped>
.champagne-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.champagne-page.is-selector {
  height: auto;
}
</style>
