<template>
  <div :class="['california-learning-system', { 'lesson-mode': !!currentLesson }]">
    <!-- 課程首頁（Level Selector） -->
    <!-- 品飲筆記 -->
    <CaliforniaTastingNotebookPage
      v-if="showNotebook"
      @back="showNotebook = false"
    />

    <!-- 互動練習遊戲 -->
    <CaliforniaGamesPage
      v-else-if="showGames"
      @back="showGames = false"
    />

    <CaliforniaLevelSelector
      v-else-if="!currentLesson && showLevelSelector"
      @startLevel="handleStartLevel"
      @openMap="router.push('/california')"
      @openNotes="showNotebook = true"
      @openGames="showGames = true"
    />

    <!-- 課程總覽：已選擇等級、無當前課程時顯示 CaliforniaCourseLayout -->
    <CaliforniaCourseLayout
      v-else-if="!currentLesson && !showLevelSelector"
      :currentLevel="currentLevel"
      :currentLevelData="currentLevelData"
      :completedLessons="californiaLearningState.completedLessons"
      :unlockedLevels="unlockedLevels"
      @backToLevelSelector="showLevelSelector = true"
      @changeLevel="(n) => isLevelUnlocked(n) && californiaLearningActions.setLevel(n)"
      @startLesson="(lesson) => californiaLearningActions.startLesson(lesson.id)"
    />

    <!-- 課程播放頁 -->
    <template v-else>
      <header class="learning-header">
        <div class="lh-row lh-row-1">
          <button class="lh-btn lh-back-btn" @click="handleBackButton">← 返回</button>
          <div class="lh-badges">
            <span class="lh-badge lh-progress-badge">{{ totalProgress }}%</span>
          </div>
        </div>
        <div class="lh-row lh-row-2">
          <button class="lh-btn lh-nav-btn" @click="handlePreviousSlide" :disabled="!canGoPrevious">◀ 上一頁</button>
          <span class="lh-nav-label">{{ currentSlideTitle }}</span>
          <button class="lh-btn lh-nav-btn" @click="handleNextSlide" :disabled="!canGoNext">下一頁 ▶</button>
        </div>
      </header>

      <main class="learning-main">
        <div class="lesson-view">
          <PresentationLesson
            ref="presentationLessonRef"
            :lessonId="currentLesson.id"
            @lessonComplete="completeCurrentLesson"
          />
        </div>
      </main>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import {
  californiaLearningState,
  californiaLearningLevels,
  californiaLearningActions,
  californiaLearningProgress
} from '../../stores/californiaLearningStore.js'
import { authActions } from '../../stores/authStore.js'
import CaliforniaLevelSelector from './CaliforniaLevelSelector.vue'
import CaliforniaCourseLayout from './CaliforniaCourseLayout.vue'
import CaliforniaTastingNotebookPage from './notebook/CaliforniaTastingNotebookPage.vue'
import CaliforniaGamesPage from './games/CaliforniaGamesPage.vue'
import PresentationLesson from '../PresentationLesson.vue'

const emit = defineEmits(['exitLearning'])
const router = useRouter()

const props = defineProps({
  selectedLevel: { type: Number, default: 1 }
})

const presentationLessonRef = ref(null)
const showLevelSelector = ref(true)
const showNotebook = ref(false)
const showGames = ref(false)

function handleStartLevel(levelNum) {
  californiaLearningActions.setLevel(levelNum)
  showLevelSelector.value = false
}

const currentLevel = computed(() => californiaLearningState.currentLevel)
const currentLesson = computed(() => californiaLearningState.currentLesson)
const currentLevelData = computed(() => californiaLearningLevels[`level${currentLevel.value}`])

const totalProgress = computed(() => californiaLearningProgress.value)

const unlockedLevels = computed(() =>
  [1, 2, 3].filter(n => isLevelUnlocked(n))
)

const canGoPrevious = computed(() => {
  if (!presentationLessonRef.value) return false
  const slide = presentationLessonRef.value.currentSlide
  const val = typeof slide === 'number' ? slide : slide?.value
  return val > 0
})

const canGoNext = computed(() => {
  if (!presentationLessonRef.value) return false
  const slide = presentationLessonRef.value.currentSlide
  const total = presentationLessonRef.value.totalSlides
  const currentVal = typeof slide === 'number' ? slide : slide?.value
  const totalVal = typeof total === 'number' ? total : total?.value
  return currentVal < totalVal - 1
})

const currentSlideTitle = computed(() => {
  if (!presentationLessonRef.value) return '投影片導航'
  return presentationLessonRef.value.currentSlideTitle || '投影片導航'
})

function isLevelUnlocked(level) {
  if (californiaLearningState.testMode) return true
  if (authActions.isAdmin()) return true
  if (level === 1) return true
  const finalId = californiaLearningActions.getFinalLessonId(level - 1)
  return finalId != null && californiaLearningState.completedLessons.includes(finalId)
}

function handleBackButton() {
  californiaLearningActions.exitLesson()
}

function handlePreviousSlide() {
  presentationLessonRef.value?.previousSlide()
}

function handleNextSlide() {
  presentationLessonRef.value?.nextSlide()
}

function completeCurrentLesson() {
  const lessonId = currentLesson.value?.id
  if (lessonId) {
    californiaLearningActions.completeLesson(lessonId)
  }
  californiaLearningActions.exitLesson()
}

watch(() => props.selectedLevel, (n) => {
  if (n !== currentLevel.value) {
    californiaLearningActions.setLevel(n)
  }
}, { immediate: true })
</script>

<style scoped>
.california-learning-system {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #1a0800;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
}
.california-learning-system.lesson-mode {
  height: 100vh;
  overflow: hidden;
}

/* 學習標題欄 */
.learning-header {
  background: linear-gradient(135deg, #8B1A1A 0%, #5c0f0f 100%);
  padding: 8px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(201,168,76,0.3);
}

.lh-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.lh-btn {
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.25);
  color: white;
  padding: 5px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.82rem;
  transition: background 0.2s;
}
.lh-btn:hover:not(:disabled) { background: rgba(255,255,255,0.25); }
.lh-btn:disabled { opacity: 0.4; cursor: not-allowed; }

.lh-badges { display: flex; gap: 6px; align-items: center; }
.lh-badge {
  padding: 3px 10px;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 700;
}
.lh-progress-badge { background: rgba(201,168,76,0.25); color: #c9a84c; border: 1px solid rgba(201,168,76,0.4); }

.lh-nav-label {
  flex: 1;
  text-align: center;
  color: rgba(255,255,255,0.85);
  font-size: 0.82rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 8px;
}

/* 主要學習內容 */
.learning-main {
  flex: 1;
  overflow-y: auto;
  background: #1a0800;
}
.lesson-view {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 16px;
}
</style>
