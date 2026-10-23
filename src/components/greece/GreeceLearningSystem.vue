<template>
  <div class="greece-learning-system">
    <!-- 課程總覽：無當前課程時顯示 GreeceCourseLayout -->
    <GreeceCourseLayout
      v-if="!currentLesson"
      :currentLevel="currentLevel"
      :currentLevelData="currentLevelData"
      :completedLessons="greeceLearningState.completedLessons"
      :unlockedLevels="unlockedLevels"
      @backToLevelSelector="emit('exitLearning')"
      @changeLevel="(n) => isLevelUnlocked(n) && greeceLearningActions.setLevel(n)"
      @startLesson="(lesson) => greeceLearningActions.startLesson(lesson.id)"
    />

    <!-- 課程播放頁 -->
    <template v-else>
      <header class="learning-header">
        <div class="lh-row lh-row-1">
          <button class="lh-btn lh-back-btn" @click="handleBackButton">← {{ $t('common.actions.back') }}</button>
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
            :lessonTitle="currentLesson?.title || ''"
            @lessonComplete="completeCurrentLesson"
            @openRegionMap="(info) => emit('openRegionMap', info)"
          />
        </div>
      </main>
    </template>
    <WineGlossary region="greece" />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import {
  greeceLearningState,
  greeceLearningLevels,
  greeceLearningActions,
  greeceLearningProgress,
  greeceReloadFromStorage
} from '../../stores/greeceLearningStore.js'
import { authActions, authState, authInitPromise } from '../../stores/authStore.js'
import { globalGreeceAchievementManager } from '../../stores/greeceAchievementSystem.js'
import { saveGreeceLesson, loadAndMergeGreeceProgress } from '../../lib/courseProgressSync.js'
import GreeceCourseLayout from './GreeceCourseLayout.vue'
import PresentationLesson from '../PresentationLesson.vue'
import WineGlossary from '../WineGlossary.vue'

const emit = defineEmits(['exitLearning', 'openRegionMap'])

const props = defineProps({
  selectedLevel: { type: Number, default: 1 }
})

const presentationLessonRef = ref(null)

globalGreeceAchievementManager.init()

const currentLevel = computed(() => greeceLearningState.currentLevel)
const currentLesson = computed(() => greeceLearningState.currentLesson)
const currentLevelData = computed(() => greeceLearningLevels[`level${currentLevel.value}`])

const totalProgress = computed(() => greeceLearningProgress.value)

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
  if (greeceLearningState.testMode) return true
  if (authActions.isAdmin()) return true
  if (level === 1) return true
  const finalId = greeceLearningActions.getFinalLessonId(level - 1)
  return finalId != null && greeceLearningState.completedLessons.includes(finalId)
}

function handleBackButton() {
  greeceLearningActions.exitLesson()
}

function handlePreviousSlide() {
  presentationLessonRef.value?.previousSlide()
}

function handleNextSlide() {
  presentationLessonRef.value?.nextSlide()
}

onMounted(async () => {
  await authInitPromise
  const userId = authState.user?.id
  if (userId) {
    const didUpdate = await loadAndMergeGreeceProgress(userId)
    if (didUpdate) greeceReloadFromStorage()
  }
})

function completeCurrentLesson() {
  const lessonId = currentLesson.value?.id
  if (lessonId) {
    const alreadyDone = greeceLearningState.completedLessons.includes(lessonId)
    greeceLearningActions.completeLesson(lessonId)
    const userId = authState.user?.id
    if (userId) saveGreeceLesson(userId, lessonId)
    // 成就記錄（重複完成同一課不重複計算）
    if (!alreadyDone) {
      const lessons = currentLevelData.value?.lessons || []
      const isLevelDone = lessons.length > 0 &&
        lessons.every(l => greeceLearningState.completedLessons.includes(l.id))
      globalGreeceAchievementManager.recordLessonCompleted({
        levelId: isLevelDone ? currentLevel.value : null,
        totalProgress: greeceLearningProgress.value
      })
    }
  }
  greeceLearningActions.exitLesson()
}

watch(() => props.selectedLevel, (n) => {
  if (n !== currentLevel.value) {
    greeceLearningActions.setLevel(n)
  }
}, { immediate: true })
</script>

<style scoped>
.greece-learning-system {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fdf5f6;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
}

/* 學習標題欄 */
.learning-header {
  background: linear-gradient(135deg, #0D5EAF 0%, #073a73 100%);
  padding: 8px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 16px rgba(200, 16, 46, 0.3);
  flex-shrink: 0;
}

.lh-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.lh-row-2 {
  justify-content: center;
  gap: 16px;
}

.lh-btn {
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 8px;
  color: white;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
}
.lh-btn:hover:not(:disabled) { background: rgba(255, 255, 255, 0.28); }
.lh-btn:disabled { opacity: 0.35; cursor: not-allowed; }

.lh-badges { display: flex; gap: 8px; align-items: center; }
.lh-badge {
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.lh-nav-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  text-align: center;
  flex: 1;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 主要學習區域 */
.learning-main {
  flex: 1;
  overflow-y: auto;
  display: flex;
  align-items: stretch;
}

.lesson-view {
  flex: 1;
  min-width: 0;
}
</style>
