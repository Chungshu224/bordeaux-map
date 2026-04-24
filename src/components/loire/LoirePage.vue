<template>
  <div class="loire-page">
    <!-- 遊戲中心 -->
    <LoireGameHubPage
      v-if="view === 'games'"
      @back="view = 'course'"
    />

    <!-- 課程模式 -->
    <LoireLearningSystem
      v-else-if="view === 'course'"
      @exitLearning="view = 'map'"
      @openGames="view = 'games'"
    />

    <!-- 地圖模式 -->
    <LoireMapPage
      v-else
      @back-to-course="view = 'course'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoireMapPage from './LoireMapPage.vue'
import LoireLearningSystem from './LoireLearningSystem.vue'
import LoireGameHubPage from './games/LoireGameHubPage.vue'

const view = ref('course')
</script>

<style scoped>
.loire-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
}
</style>
