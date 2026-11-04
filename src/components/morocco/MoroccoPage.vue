<template>
  <div class="morocco-page" :key="i18n.global.locale.value" :class="{ 'is-selector': view === 'selector' }">
    <!-- 課程首頁 -->
    <MoroccoLevelSelector
      v-if="view === 'selector'"
      style="min-height: 100vh;"
      @enterLevel="goToLevel"
      @openMap="view = 'map'"
      @openGames="view = 'game'"
    />

    <!-- 地圖 -->
    <MoroccoMapPage v-else-if="view === 'map'" @back-to-course="view = 'selector'" />

    <!-- 互動練習 -->
    <MoroccoGameHubPage v-else-if="view === 'game'" @back="view = 'selector'" />

    <!-- 課程模式 -->
    <MoroccoLearningSystem
      v-else
      :selectedLevel="selectedLevel"
      @exitLearning="view = 'selector'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { i18n } from '../../locales/index.js'
import MoroccoLevelSelector from './MoroccoLevelSelector.vue'
import MoroccoLearningSystem from './MoroccoLearningSystem.vue'
import MoroccoMapPage from './MoroccoMapPage.vue'
import MoroccoGameHubPage from './MoroccoGameHubPage.vue'

const view = ref('selector') // 'selector' | 'map' | 'game' | 'course'
const selectedLevel = ref(1)

function goToLevel(n) {
  selectedLevel.value = n
  view.value = 'course'
}
</script>

<style scoped>
.morocco-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.morocco-page.is-selector {
  height: auto;
}
</style>
