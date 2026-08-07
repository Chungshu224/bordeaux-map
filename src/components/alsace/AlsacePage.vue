<script setup>
import { ref } from 'vue'
import AlsaceCourseManager from './course/AlsaceCourseManager.vue'
import AlsaceGrandCruMap from './map/AlsaceGrandCruMap.vue'

const mode = ref('course') // 'course' | 'map'
const pendingLessonId = ref(null)

function openMap() {
  pendingLessonId.value = null
  mode.value = 'map'
}
function backToCourse() {
  mode.value = 'course'
}
function goToLesson(lessonId) {
  pendingLessonId.value = lessonId
  mode.value = 'course'
}
</script>

<template>
  <div class="alsace-page">
    <AlsaceCourseManager
      v-if="mode === 'course'"
      :open-lesson-id="pendingLessonId"
      @openMap="openMap"
    />
    <AlsaceGrandCruMap
      v-else-if="mode === 'map'"
      @request-learning-mode="backToCourse"
      @go-to-lesson="goToLesson"
    />
  </div>
</template>

<style scoped>
.alsace-page {
  min-height: 100vh;
}
</style>
