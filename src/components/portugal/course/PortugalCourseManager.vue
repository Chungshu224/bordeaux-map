<template>
  <div class="portugal-course-manager">

    <!-- 等級選擇首頁 -->
    <PortugalLevelSelector
      v-if="view === 'levelSelector'"
      :key="progressVersion"
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
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { authState, authInitPromise } from '../../../stores/authStore.js'
import { savePortugalLesson, loadAndMergePortugalProgress } from '../../../lib/courseProgressSync.js'
import PortugalLevelSelector from './PortugalLevelSelector.vue'
import PortugalGameHubPage from '../games/PortugalGameHubPage.vue'
import PortugalTastingNotebookPage from '../notebook/PortugalTastingNotebookPage.vue'
import PortugalCourseLayout from './PortugalCourseLayout.vue'
import PortugalSlideViewer from './PortugalSlideViewer.vue'
import { courseLevels, getUserProgress, saveProgress } from '../data/courseLevels.js'
import { getPortugalLessonSlides } from '../data/lessonSlides.js'
import { applyItalyTranslations } from '../../../data/lessonI18nUtils.js'

// 多語言 overlay：locales/<lang>/lessons/portugal/<lessonId>.json（扁平 key，與 Germany／Italy 同機制）；_levels.json 為課表標題
const PORTUGAL_TRANSLATIONS = import.meta.glob('../../../locales/*/lessons/portugal/*.json')
const { locale } = useI18n()

async function loadOverlay(name) {
  const loc = locale.value
  if (!loc || loc === 'zh-TW') return null
  const key = Object.keys(PORTUGAL_TRANSLATIONS).find(k => k.includes(`/${loc}/`) && k.endsWith(`/${name}.json`))
  if (!key) return null
  try {
    const mod = await PORTUGAL_TRANSLATIONS[key]()
    return mod?.default || mod
  } catch (e) {
    console.warn('[Portugal i18n] overlay 載入失敗:', e?.message || e)
    return null
  }
}

const levelsOverlay = ref(null)
watch(locale, async () => { levelsOverlay.value = await loadOverlay('_levels') }, { immediate: true })

defineEmits(['openMap'])

const view = ref('levelSelector') // 'levelSelector' | 'courseContent' | 'notebook' | 'gameHub'
const selectedLevelKey = ref(null)
const activeLesson = ref(null)
const completedMap = ref({})
const progressVersion = ref(0)

onMounted(async () => {
  await authInitPromise
  const userId = authState.user?.id
  if (userId) {
    const didUpdate = await loadAndMergePortugalProgress(userId)
    if (didUpdate) progressVersion.value++
  }
})

const currentLevelDef = computed(() => {
  const key = selectedLevelKey.value
  if (!key) return null
  const def = courseLevels[key]
  if (!levelsOverlay.value) return def
  return applyItalyTranslations({ [key]: def }, levelsOverlay.value)[key]
})

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

async function startLesson(lesson) {
  let slides = getPortugalLessonSlides(lesson.id)
  const overlay = await loadOverlay(lesson.id)
  if (overlay) slides = applyItalyTranslations({ slides }, overlay).slides
  activeLesson.value = { ...lesson, slides }
}

function closeLesson() {
  activeLesson.value = null
}

function handleComplete(lessonId) {
  completedMap.value[lessonId] = true
  saveProgress(selectedLevelKey.value, lessonId)
  activeLesson.value = null
  const userId = authState.user?.id
  if (userId) savePortugalLesson(userId, lessonId)
}
</script>

<style scoped>
.portugal-course-manager {
  min-height: 100vh;
}
</style>
