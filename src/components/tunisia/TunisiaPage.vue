<template>
  <div class="tunisia-page" :key="i18n.global.locale.value" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁 -->
    <TunisiaLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
      @openGames="view = 'game'"
    />

    <!-- 地圖 -->
    <TunisiaMapPage v-else-if="view === 'map'" @back-to-course="view = 'selector'" />

    <!-- 互動練習 -->
    <TunisiaGameHubPage v-else-if="view === 'game'" @back="view = 'selector'" />

    <!-- 課程模式 -->
    <TunisiaLearningSystem
      v-else
      :selectedLevel="selectedLevel"
      @exitLearning="view = 'selector'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { i18n } from '../../locales/index.js'
import TunisiaLevelSelector from './TunisiaLevelSelector.vue'
import TunisiaLearningSystem from './TunisiaLearningSystem.vue'
import TunisiaMapPage from './TunisiaMapPage.vue'
import TunisiaGameHubPage from './TunisiaGameHubPage.vue'

const view = ref('selector') // 'selector' | 'map' | 'game' | 'course'
const selectedLevel = ref(1)

function goToLevel(n) {
  selectedLevel.value = n
  view.value = 'course'
}
</script>

<style scoped>
.tunisia-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.tunisia-page.is-selector {
  height: auto;
}
</style>
