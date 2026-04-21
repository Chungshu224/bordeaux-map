<template>
  <div class="spain-course-manager">

    <!-- 等級選擇首頁 -->
    <SpainLevelSelector
      v-if="view === 'levelSelector'"
      @openMap="$emit('openMap')"
      @openSelector="$emit('openSelector')"
      @startLevel="handleSelectLevel"
      @openNotebook="view = 'notebook'"
      @openGames="view = 'games'"
    />

    <!-- 品飲筆記 -->
    <SpainTastingNotebookPage
      v-else-if="view === 'notebook'"
      @back="view = 'levelSelector'"
    />

    <!-- 互動練習 -->
    <SpainGameHubPage
      v-else-if="view === 'games'"
      @back="view = 'levelSelector'"
    />

    <!-- 章節列表 -->
    <SpainCourseLayout
      v-else-if="view === 'courseContent' && !activeLesson"
      :currentLevelKey="selectedLevelKey"
      :currentLevelDef="currentLevelDef"
      :completedLessons="completedLessonsArray"
      @backToLevelSelector="backToLevelSelector"
      @changeLevel="handleSelectLevel"
      @startLesson="startLesson"
    />

    <!-- 投影片檢視器 -->
    <SpainSlideViewer
      v-else-if="view === 'courseContent' && activeLesson"
      :lesson="activeLesson"
      :isFinalExam="activeLesson?.isFinalExam || false"
      @close="closeLesson"
      @complete="handleComplete"
      @openRegionMap="(key) => $emit('openRegionMap', key)"
    />

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SpainLevelSelector from './SpainLevelSelector.vue'
import SpainCourseLayout from './SpainCourseLayout.vue'
import SpainSlideViewer from './SpainSlideViewer.vue'
import SpainTastingNotebookPage from '../notebook/SpainTastingNotebookPage.vue'
import SpainGameHubPage from '../games/SpainGameHubPage.vue'
import { courseLevels, getUserProgress, saveProgress, getLevelProgressPercent } from '../data/courseLevels.js'
import { globalSpainAchievementManager } from '../../../stores/spainAchievementSystem.js'

defineEmits(['openMap', 'openSelector', 'openRegionMap'])

const view = ref('levelSelector')
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

  // 觸發成就系統
  const levelNum = parseInt((selectedLevelKey.value || '').replace('level', '')) || 0
  const totalProgress = getLevelProgressPercent(selectedLevelKey.value)
  globalSpainAchievementManager.recordLessonCompleted({
    lessonId,
    levelId: levelNum,
    totalProgress
  })
}
</script>

<style scoped>
.spain-course-manager {
  min-height: 100vh;
}
</style>
