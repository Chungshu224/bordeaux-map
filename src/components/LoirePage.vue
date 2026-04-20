<template>
  <div class="loire-page">
    <!-- 課程模式 -->
    <LoireLearningSystem
      v-if="showCourse"
      @exitLearning="showCourse = false"
    />

    <!-- 地圖模式 -->
    <LoireMapPage
      v-else
      @back-to-course="showCourse = true"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LoireMapPage from './loire/LoireMapPage.vue'
import LoireLearningSystem from './loire/LoireLearningSystem.vue'

const router = useRouter()
const showCourse = ref(true)
</script>

<style scoped>
.loire-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
