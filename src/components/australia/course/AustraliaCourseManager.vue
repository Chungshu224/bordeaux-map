<template>
  <div class="au-course-manager">
    <!-- 等級選擇首頁 -->
    <AustraliaLevelSelector
      v-if="view === 'levelSelector'"
      @openMap="$emit('openMap')"
      @startLevel="handleSelectLevel"
    />

    <!-- 章節列表 -->
    <AustraliaCourseLayout
      v-else-if="view === 'courseContent' && !activeLesson"
      :currentLevelKey="selectedLevelKey"
      :currentLevelDef="currentLevelDef"
      :completedLessons="completedLessonsArray"
      @backToLevelSelector="backToLevelSelector"
      @changeLevel="handleSelectLevel"
      @startLesson="startLesson"
    />

    <!-- 投影片檢視器 -->
    <AustraliaSlideViewer
      v-else-if="view === 'courseContent' && activeLesson"
      :lesson="activeLesson"
      :isFinalExam="activeLesson?.isFinalExam || false"
      @close="closeLesson"
      @complete="handleComplete"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AustraliaLevelSelector  from './AustraliaLevelSelector.vue'
import AustraliaCourseLayout   from './AustraliaCourseLayout.vue'
import AustraliaSlideViewer    from './AustraliaSlideViewer.vue'
import { courseLevels, getUserProgress, saveProgress } from '../data/courseLevels.js'

defineEmits(['openMap'])

const view             = ref('levelSelector')
const selectedLevelKey = ref(null)
const activeLesson     = ref(null)
const completedMap     = ref({})

const currentLevelDef = computed(() =>
  selectedLevelKey.value ? courseLevels[selectedLevelKey.value] : null
)
const completedLessonsArray = computed(() =>
  Object.keys(completedMap.value).filter(k => completedMap.value[k])
)

function loadCompleted(levelKey) {
  completedMap.value = {}
  const prog = getUserProgress(levelKey)
  prog.completedLessons.forEach(id => { completedMap.value[id] = true })
}

function handleSelectLevel(levelKey) {
  selectedLevelKey.value = levelKey
  view.value = 'courseContent'
  activeLesson.value = null
  loadCompleted(levelKey)
}

function backToLevelSelector() {
  view.value = 'levelSelector'
  selectedLevelKey.value = null
  activeLesson.value = null
}

function startLesson(lesson) {
  activeLesson.value = lesson
}

function closeLesson() {
  activeLesson.value = null
}

function handleComplete(lessonId) {
  if (selectedLevelKey.value) {
    saveProgress(selectedLevelKey.value, lessonId)
    completedMap.value[lessonId] = true
  }
  activeLesson.value = null
}
</script>

<style scoped>
.au-course-manager {
  width: 100%;
  min-height: 100vh;
}
</style>
