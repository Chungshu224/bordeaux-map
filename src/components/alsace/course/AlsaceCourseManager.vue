<template>
  <div class="alsace-course-manager">

    <!-- 等級選擇首頁 -->
    <AlsaceLevelSelector
      v-if="view === 'levelSelector'"
      :key="progressVersion"
      @startLevel="handleSelectLevel"
      @openMap="emit('openMap')"
    />

    <!-- 章節列表 -->
    <AlsaceCourseLayout
      v-else-if="view === 'courseContent' && !activeLesson"
      :currentLevelKey="selectedLevelKey"
      :currentLevelDef="currentLevelDef"
      :completedLessons="completedLessonsArray"
      @backToLevelSelector="backToLevelSelector"
      @changeLevel="handleSelectLevel"
      @startLesson="startLesson"
    />

    <!-- 投影片檢視器 -->
    <AlsaceSlideViewer
      v-else-if="view === 'courseContent' && activeLesson"
      :lesson="activeLesson"
      :isFinalExam="activeLesson?.isFinalExam || false"
      @close="closeLesson"
      @complete="handleComplete"
    />

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { authState, authInitPromise } from '../../../stores/authStore.js'
import { saveAlsaceLesson, loadAndMergeAlsaceProgress } from '../../../lib/courseProgressSync.js'
import AlsaceLevelSelector from './AlsaceLevelSelector.vue'
import AlsaceCourseLayout from './AlsaceCourseLayout.vue'
import AlsaceSlideViewer from './AlsaceSlideViewer.vue'
import { courseLevels, getUserProgress, saveProgress, getLevelProgressPercent } from '../data/courseLevels.js'
import { globalAlsaceAchievementManager } from '../../../stores/alsaceAchievementSystem.js'

const props = defineProps({
  openLessonId: { type: String, default: null }
})
const emit = defineEmits(['openMap'])

const view = ref('levelSelector')
const selectedLevelKey = ref(null)
const activeLesson = ref(null)
const completedMap = ref({})
const progressVersion = ref(0)

function findLessonById(lessonId) {
  for (const levelKey of Object.keys(courseLevels)) {
    for (const mod of courseLevels[levelKey].modules) {
      const lesson = mod.lessons.find(l => l.id === lessonId)
      if (lesson) return { levelKey, lesson }
    }
  }
  return null
}

function openLessonById(lessonId) {
  const found = findLessonById(lessonId)
  if (!found) return
  selectedLevelKey.value = found.levelKey
  loadCompleted(found.levelKey)
  view.value = 'courseContent'
  activeLesson.value = found.lesson
}

onMounted(async () => {
  globalAlsaceAchievementManager.init()
  await authInitPromise
  const userId = authState.user?.id
  if (userId) {
    const didUpdate = await loadAndMergeAlsaceProgress(userId)
    if (didUpdate) progressVersion.value++
  }
  if (props.openLessonId) openLessonById(props.openLessonId)
})

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
  const userId = authState.user?.id
  if (userId) saveAlsaceLesson(userId, lessonId)

  // 觸發成就系統
  const levelNum = parseInt((selectedLevelKey.value || '').replace('level', '')) || 0
  const totalProgress = getLevelProgressPercent(selectedLevelKey.value)
  globalAlsaceAchievementManager.recordLessonCompleted({
    lessonId,
    levelId: levelNum,
    totalProgress
  })
}
</script>

<style scoped>
.alsace-course-manager {
  min-height: 100vh;
}
</style>
