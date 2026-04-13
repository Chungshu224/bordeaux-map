<template>
  <div class="italy-course-manager">
    <!-- Level Selector -->
    <ItalyLevelSelector
      v-if="view === 'levelSelector'"
      @startLevel="handleSelectLevel"
      @openMap="$emit('openMap')"
    />

    <!-- Course Content -->
    <template v-else-if="view === 'courseContent'">
      <!-- Italy Course Layout（章節導航）-->
      <ItalyCourseLayout
        v-if="!activeLesson"
        :currentLevelKey="selectedLevelKey"
        :currentLevelDef="currentLevelDef"
        :completedLessons="completedLessonsArray"
        @backToLevelSelector="backToLevelSelector"
        @changeLevel="handleSelectLevel"
        @startLesson="startLesson"
      />

      <!-- Slide Viewer -->
      <ItalySlideViewer
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
import { ref, computed } from 'vue'
import ItalyLevelSelector from './ItalyLevelSelector.vue'
import ItalySlideViewer from './ItalySlideViewer.vue'
import ItalyCourseLayout from './ItalyCourseLayout.vue'
import { courseLevels, getUserProgress, saveProgress } from '../data/courseLevels.js'

const emit = defineEmits(['openMap'])

const view = ref('levelSelector')
const selectedLevelKey = ref(null)
const activeLesson = ref(null)
const activeLessonMeta = ref(null)

// 已完成課程清單（從 localStorage）
const completedMap = ref({})

const completedLessonsArray = computed(() =>
  Object.keys(completedMap.value).filter(k => completedMap.value[k])
)

function loadCompleted (levelKey) {
  const progress = getUserProgress(levelKey)
  progress.completedLessons.forEach(id => { completedMap.value[id] = true })
}

function isCompleted (lessonId) {
  return !!completedMap.value[lessonId]
}

const currentLevelDef = computed(() => {
  return selectedLevelKey.value ? courseLevels[selectedLevelKey.value] : null
})

function handleSelectLevel (levelKey) {
  selectedLevelKey.value = levelKey
  loadCompleted(levelKey)
  view.value = 'courseContent'
}

function backToLevelSelector () {
  view.value = 'levelSelector'
  selectedLevelKey.value = null
  activeLesson.value = null
}

async function startLesson (lessonMeta) {
  activeLessonMeta.value = lessonMeta
  try {
    const levelKey = selectedLevelKey.value
    const res = await fetch(`/italy/courses/${levelKey}/${lessonMeta.id}.json`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    if (lessonMeta.mapRegion) data.mapRegion = lessonMeta.mapRegion
    // 注入 levelKey 供綜合評量題庫載入使用
    data.levelKey = levelKey
    activeLesson.value = data
  } catch (e) {
    console.error('載入課程失敗:', e)
    activeLesson.value = {
      lessonId: lessonMeta.id,
      title: lessonMeta.title,
      mapRegion: lessonMeta.mapRegion || null,
      levelKey: selectedLevelKey.value,
      slides: [{ type: 'content', title: lessonMeta.title, content: '課程內容載入中，請稍後再試。' }]
    }
  }
}

function closeLesson () {
  activeLesson.value = null
  activeLessonMeta.value = null
}

function handleComplete (lessonId) {
  if (selectedLevelKey.value && lessonId) {
    saveProgress(selectedLevelKey.value, lessonId)
    completedMap.value[lessonId] = true
  }
  activeLesson.value = null
}
</script>

<style scoped>
.italy-course-manager {
  min-height: 100vh;
}
</style>
