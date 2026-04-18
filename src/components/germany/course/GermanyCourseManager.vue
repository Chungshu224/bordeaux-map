<template>
  <div class="germany-course-manager">
    <!-- Level Selector -->
    <GermanyLevelSelector
      v-if="view === 'levelSelector'"
      @startLevel="handleSelectLevel"
      @openMap="$emit('openMap')"
      @openGames="view = 'games'"
    />

    <!-- Games Hub -->
    <GermanyGameHubPage
      v-else-if="view === 'games'"
      @back="view = 'levelSelector'"
    />

    <!-- Course Content -->
    <template v-else-if="view === 'courseContent'">
      <!-- Chapter Layout -->
      <GermanyCourseLayout
        v-if="!activeLesson"
        :currentLevelKey="selectedLevelKey"
        :currentLevelDef="currentLevelDef"
        :completedLessons="completedLessonsArray"
        @backToLevelSelector="backToLevelSelector"
        @changeLevel="handleSelectLevel"
        @startLesson="startLesson"
      />

      <!-- Slide Viewer -->
      <GermanySlideViewer
        v-else
        :lesson="activeLesson"
        :isFinalExam="activeLessonMeta?.isFinalExam || false"
        @close="closeLesson"
        @complete="handleComplete"
        @openMap="$emit('openMap')"
      />
    </template>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import GermanyLevelSelector from './GermanyLevelSelector.vue'
import GermanySlideViewer from './GermanySlideViewer.vue'
import GermanyCourseLayout from './GermanyCourseLayout.vue'
import GermanyGameHubPage from '../games/GermanyGameHubPage.vue'
import { courseLevels, getUserProgress, saveProgress } from '../data/courseLevels.js'
import { getLesson } from '../data/lessonSlides.js'

const emit = defineEmits(['openMap'])

const view = ref('levelSelector') // 'levelSelector' | 'courseContent' | 'games'
const selectedLevelKey = ref(null)
const activeLesson = ref(null)
const activeLessonMeta = ref(null)
const completedMap = ref({})

const completedLessonsArray = computed(() =>
  Object.keys(completedMap.value).filter(k => completedMap.value[k])
)

const currentLevelDef = computed(() =>
  selectedLevelKey.value ? courseLevels[selectedLevelKey.value] : null
)

function loadCompleted(levelKey) {
  const progress = getUserProgress(levelKey)
  progress.completedLessons.forEach(id => { completedMap.value[id] = true })
}

function handleSelectLevel(levelKey) {
  selectedLevelKey.value = levelKey
  loadCompleted(levelKey)
  view.value = 'courseContent'
}

function backToLevelSelector() {
  view.value = 'levelSelector'
  selectedLevelKey.value = null
  activeLesson.value = null
}

async function startLesson(lessonMeta) {
  activeLessonMeta.value = lessonMeta
  const data = getLesson(lessonMeta.id)
  if (lessonMeta.mapRegion) data.mapRegion = lessonMeta.mapRegion
  data.levelKey = selectedLevelKey.value
  activeLesson.value = data
  await nextTick()
  window.scrollTo({ top: 0, behavior: 'instant' })
}

function closeLesson() {
  activeLesson.value = null
  activeLessonMeta.value = null
}

function handleComplete(lessonId) {
  if (selectedLevelKey.value && lessonId) {
    saveProgress(selectedLevelKey.value, lessonId)
    completedMap.value[lessonId] = true
  }
  closeLesson()
}
</script>

<style scoped>
.germany-course-manager {
  min-height: 100vh;
}
</style>
