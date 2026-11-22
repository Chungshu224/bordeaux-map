<template>
  <div class="uruguay-page" :key="i18n.global.locale.value" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁 -->
    <UruguayLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
      @openGames="view = 'game'"
    />

    <!-- 地圖 -->
    <UruguayMapPage v-else-if="view === 'map'" @back-to-course="view = 'selector'" />

    <!-- 互動練習 -->
    <UruguayGameHubPage v-else-if="view === 'game'" @back="view = 'selector'" />

    <!-- 課程模式 -->
    <UruguayLearningSystem
      v-else
      :selectedLevel="selectedLevel"
      @exitLearning="view = 'selector'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { i18n } from '../../locales/index.js'
import UruguayLevelSelector from './UruguayLevelSelector.vue'
import UruguayLearningSystem from './UruguayLearningSystem.vue'
import UruguayMapPage from './UruguayMapPage.vue'
import UruguayGameHubPage from './UruguayGameHubPage.vue'

const view = ref('selector') // 'selector' | 'map' | 'game' | 'course'
const selectedLevel = ref(1)

function goToLevel(n) {
  selectedLevel.value = n
  view.value = 'course'
}
</script>

<style scoped>
.uruguay-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.uruguay-page.is-selector {
  height: auto;
}
</style>
