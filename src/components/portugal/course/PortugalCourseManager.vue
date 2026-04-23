<template>
  <div class="portugal-course-manager">

    <!-- 等級選擇首頁 -->
    <PortugalLevelSelector
      v-if="view === 'levelSelector'"
      @openMap="$emit('openMap')"
      @startLevel="handleSelectLevel"
      @openNotebook="view = 'notebook'"
      @openGameHub="view = 'gameHub'"
    />

    <!-- 互動練習遊戲中心 -->
    <PortugalGameHubPage
      v-else-if="view === 'gameHub'"
      @back="view = 'levelSelector'"
    />

    <!-- 品飲筆記 -->
    <PortugalTastingNotebookPage
      v-else-if="view === 'notebook'"
      @back="view = 'levelSelector'"
    />

    <!-- 章節列表 -->
    <PortugalCourseLayout
      v-else-if="view === 'courseContent' && !activeLesson"
      :currentLevelKey="selectedLevelKey"
      :currentLevelDef="currentLevelDef"
      :completedLessons="completedLessonsArray"
      @backToLevelSelector="backToLevelSelector"
      @changeLevel="handleSelectLevel"
      @startLesson="startLesson"
    />

    <!-- 投影片檢視器 -->
    <PortugalSlideViewer
      v-else-if="view === 'courseContent' && activeLesson"
      :lesson="activeLesson"
      :isFinalExam="activeLesson?.isFinalExam || false"
      @close="closeLesson"
      @complete="handleComplete"
      @openFullMap="$emit('openMap')"
    />

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PortugalLevelSelector from './PortugalLevelSelector.vue'
import PortugalGameHubPage from '../games/PortugalGameHubPage.vue'
import PortugalTastingNotebookPage from '../notebook/PortugalTastingNotebookPage.vue'
import PortugalCourseLayout from './PortugalCourseLayout.vue'
import PortugalSlideViewer from './PortugalSlideViewer.vue'
import { courseLevels, getUserProgress, saveProgress } from '../data/courseLevels.js'

defineEmits(['openMap'])

const view = ref('levelSelector') // 'levelSelector' | 'courseContent' | 'notebook' | 'gameHub'
const selectedLevelKey = ref(null)
const activeLesson = ref(null)
const completedMap = ref({})

const currentLevelDef = computed(() =>
  selectedLevelKey.value ? courseLevels[selectedLevelKey.value] : null
)

const completedLessonsArray = computed(() =>
  Object.keys(completedMap.value).filter(k => completedMap.value[k])
)

function loadCompleted(levelKey) {
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
  completedMap.value[lessonId] = true
  saveProgress(selectedLevelKey.value, lessonId)
  activeLesson.value = null
}
</script>

<style scoped>
.portugal-course-manager {
  min-height: 100vh;
}
</style>
