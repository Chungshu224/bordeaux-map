<template>
  <div class="germany-course-manager">
    <!-- Level Selector -->
    <GermanyLevelSelector
      v-if="view === 'levelSelector'"
      :key="progressVersion"
      @startLevel="handleSelectLevel"
      @openMap="$emit('openMap')"
      @openGames="view = 'games'"
      @openNotebook="view = 'notebook'"
    />

    <!-- Games Hub -->
    <GermanyGameHubPage
      v-else-if="view === 'games'"
      @back="view = 'levelSelector'"
    />

    <!-- 品飲筆記 -->
    <GermanyTastingNotebookPage
      v-else-if="view === 'notebook'"
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
import { ref, computed, nextTick, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { authState, authInitPromise } from '../../../stores/authStore.js'
import { saveGermanyLesson, loadAndMergeGermanyProgress } from '../../../lib/courseProgressSync.js'
import GermanyLevelSelector from './GermanyLevelSelector.vue'
import GermanySlideViewer from './GermanySlideViewer.vue'
import GermanyCourseLayout from './GermanyCourseLayout.vue'
import GermanyGameHubPage from '../games/GermanyGameHubPage.vue'
import GermanyTastingNotebookPage from '../notebook/GermanyTastingNotebookPage.vue'
import { courseLevels, getUserProgress, saveProgress, getLevelProgressPct } from '../data/courseLevels.js'
import { getLesson } from '../data/lessonSlides.js'
import { applyItalyTranslations } from '../../../data/lessonI18nUtils.js'
import { globalGermanyAchievementManager } from '../../../stores/germanyAchievementSystem.js'

// 自動掃描所有 germany lesson overlay（en/ja）
const GERMANY_TRANSLATIONS = import.meta.glob('../../../locales/*/lessons/germany/*.json')

const { locale } = useI18n()

const emit = defineEmits(['openMap'])

onMounted(async () => {
  globalGermanyAchievementManager.init()
  await authInitPromise
  const userId = authState.user?.id
  if (userId) {
    const didUpdate = await loadAndMergeGermanyProgress(userId)
    if (didUpdate) progressVersion.value++
  }
})

const view = ref('levelSelector') // 'levelSelector' | 'courseContent' | 'games' | 'notebook'
const selectedLevelKey = ref(null)
const activeLesson = ref(null)
const activeLessonMeta = ref(null)
const completedMap = ref({})
const progressVersion = ref(0)  // 同步後遞增，強制 LevelSelector remount

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
  let data = getLesson(lessonMeta.id)
  // getLesson 回傳的是模組共用物件，先 deep-clone 避免 overlay 污染原始資料
  data = JSON.parse(JSON.stringify(data))
  if (lessonMeta.mapRegion) data.mapRegion = lessonMeta.mapRegion
  data.levelKey = selectedLevelKey.value

  // 多語言 overlay：locale !== zh-TW 時嘗試載入並套用
  const currentLocale = locale.value
  if (currentLocale && currentLocale !== 'zh-TW') {
    const overlayKey = Object.keys(GERMANY_TRANSLATIONS).find(k =>
      k.includes(`/${currentLocale}/`) && k.endsWith(`/${lessonMeta.id}.json`)
    )
    if (overlayKey) {
      try {
        const mod = await GERMANY_TRANSLATIONS[overlayKey]()
        const flat = mod?.default || mod
        if (flat && typeof flat === 'object') {
          data = applyItalyTranslations(data, flat)
        }
      } catch (e) {
        console.warn('[Germany i18n] overlay 載入失敗:', e?.message || e)
      }
    }
  }

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
    const userId = authState.user?.id
    if (userId) saveGermanyLesson(userId, lessonId)

    // 記錄到成就系統
    const levelNum = selectedLevelKey.value === 'level1' ? 1
      : selectedLevelKey.value === 'level2' ? 2 : 3
    const totalProgress = Math.round(
      (getLevelProgressPct('level1') + getLevelProgressPct('level2') + getLevelProgressPct('level3')) / 3
    )
    globalGermanyAchievementManager.recordLessonCompleted({
      levelId: levelNum,
      totalProgress
    })
  }
  closeLesson()
}
</script>

<style scoped>
.germany-course-manager {
  min-height: 100vh;
}
</style>
