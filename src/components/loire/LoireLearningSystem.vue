<template>
  <div class="loire-learning-system">
    <!-- 品飲筆記 -->
    <LoireTastingNotebookPage
      v-if="showNotebook"
      @back="showNotebook = false"
    />

    <!-- 課程首頁（Level Selector） -->
    <LoireLevelSelector
      v-else-if="!currentLesson && showLevelSelector"
      @startLevel="handleStartLevel"
      @openMap="emit('exitLearning')"
      @openGames="emit('openGames')"
      @openNotes="showNotebook = true"
    />

    <!-- 課程總覽：已選擇等級、無當前課程時顯示 LoireCourseLayout -->
    <LoireCourseLayout
      v-else-if="!currentLesson && !showLevelSelector"
      :currentLevel="currentLevel"
      :currentLevelData="currentLevelData"
      :completedLessons="loireLearningState.completedLessons"
      :unlockedLevels="unlockedLevels"
      @backToLevelSelector="showLevelSelector = true"
      @changeLevel="(n) => isLevelUnlocked(n) && loireLearningActions.setLevel(n)"
      @startLesson="(lesson) => loireLearningActions.startLesson(lesson.id)"
    />

    <!-- 課程播放頁 -->
    <template v-else>
      <header class="learning-header">
        <div class="lh-row lh-row-1">
          <button class="lh-btn lh-back-btn" @click="handleBackButton">← {{ $t('common.actions.back') }}</button>
          <div class="lh-badges">
            <span class="lh-badge lh-progress-badge">{{ totalProgress }}%</span>
            <span class="lh-badge lh-achievement-badge" @click="showAchievementsModal = true" title="成就">
              🏆 {{ achievementCount }}
            </span>
          </div>
        </div>
        <div class="lh-row lh-row-2">
          <button class="lh-btn lh-nav-btn" @click="handlePreviousSlide" :disabled="!canGoPrevious">◀ {{ $t('common.actions.prev') }}</button>
          <span class="lh-nav-label">{{ currentSlideTitle }}</span>
          <button class="lh-btn lh-nav-btn" @click="handleNextSlide" :disabled="!canGoNext">{{ $t('common.actions.next') }} ▶</button>
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

    <!-- 成就通知 -->
    <div v-if="achievementNotification" class="achievement-notification">
      <div class="notification-content">
        <span class="achievement-emoji">🏆</span>
        <div class="achievement-info">
          <strong>{{ achievementNotification.title }}</strong>
        </div>
        <button class="close-notification" @click="achievementNotification = null">×</button>
      </div>
    </div>

    <!-- 成就 Modal -->
    <Teleport to="body">
      <div v-if="showAchievementsModal" class="ls-modal-overlay" @click.self="showAchievementsModal = false">
        <div class="ls-modal">
          <div class="ls-modal-header">
            <h3>🏆 羅亞爾河谷成就系統</h3>
            <button class="ls-modal-close" @click="showAchievementsModal = false">×</button>
          </div>
          <div class="ls-modal-body">
            <AchievementsDashboard course-key="loire" @back="showAchievementsModal = false" />
          </div>
        </div>
      </div>
    </Teleport>
    <WineGlossary region="loire" />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import {
  loireLearningState,
  loireLearningLevels,
  loireLearningActions,
  loireLearningProgress,
  loireReloadFromStorage
} from '../../stores/loireLearningStore.js'
import { authActions, authState, authInitPromise } from '../../stores/authStore.js'
import { saveLoireLesson, loadAndMergeLoireProgress } from '../../lib/courseProgressSync.js'
import LoireLevelSelector from './LoireLevelSelector.vue'
import LoireCourseLayout from './LoireCourseLayout.vue'
import LoireTastingNotebookPage from './notebook/LoireTastingNotebookPage.vue'
import PresentationLesson from '../PresentationLesson.vue'
import AchievementsDashboard from '../AchievementsDashboard.vue'
import { globalLoireAchievementManager, loireAchievementState } from '../../stores/loireAchievementSystem.js'
import WineGlossary from '../WineGlossary.vue'

const emit = defineEmits(['exitLearning', 'openGames'])

const props = defineProps({
  selectedLevel: { type: Number, default: 1 }
})

const presentationLessonRef = ref(null)
const showLevelSelector = ref(true)
const showNotebook = ref(false)
const showAchievementsModal = ref(false)
const achievementNotification = ref(null)

globalLoireAchievementManager.init()

function handleStartLevel(levelNum) {
  loireLearningActions.setLevel(levelNum)
  showLevelSelector.value = false
}

const currentLevel = computed(() => loireLearningState.currentLevel)
const currentLesson = computed(() => loireLearningState.currentLesson)
const currentLevelData = computed(() => loireLearningLevels[`level${currentLevel.value}`])

const totalProgress = computed(() => loireLearningProgress.value)
const achievementCount = computed(() => loireAchievementState.unlockedAchievements.length)

const unlockedLevels = computed(() =>
  [1, 2, 3, 4].filter(n => isLevelUnlocked(n))
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
  if (loireLearningState.testMode) return true
  if (authActions.isAdmin()) return true
  if (level === 1) return true
  const finalId = loireLearningActions.getFinalLessonId(level - 1)
  return finalId != null && loireLearningState.completedLessons.includes(finalId)
}

function handleBackButton() {
  loireLearningActions.exitLesson()
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
    const merged = await loadAndMergeLoireProgress(userId)
    if (merged) loireReloadFromStorage()
  }
})

function completeCurrentLesson() {
  const lessonId = currentLesson.value?.id
  if (lessonId) {
    loireLearningActions.completeLesson(lessonId)
    const userId = authState.user?.id
    if (userId) saveLoireLesson(userId, lessonId)
    // 觸發成就記錄
    const levelId = currentLevel.value
    const levelData = currentLevelData.value
    const lessons = levelData?.lessons || []
    const completedInLevel = lessons.filter(l => loireLearningState.completedLessons.includes(l.id) || l.id === lessonId).length
    const levelTotal = lessons.length
    const isLevelDone = completedInLevel >= levelTotal
    const overallProgress = Math.round((loireLearningState.completedLessons.length + 1) / 32 * 100)
    const newUnlocks = globalLoireAchievementManager.recordLessonCompleted({
      levelId: isLevelDone ? levelId : null,
      totalProgress: overallProgress
    })
    if (newUnlocks.length > 0) {
      achievementNotification.value = newUnlocks[0]
      setTimeout(() => { achievementNotification.value = null }, 4000)
    }
  }
  loireLearningActions.exitLesson()
}

watch(() => props.selectedLevel, (n) => {
  if (n !== currentLevel.value) {
    loireLearningActions.setLevel(n)
  }
}, { immediate: true })
</script>

<style scoped>
.loire-learning-system {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5faf6;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
}

/* 學習標題欄 */
.learning-header {
  background: linear-gradient(135deg, #2e5c3e 0%, #1d3d28 100%);
  padding: 8px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 16px rgba(46, 92, 62, 0.3);
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

.lh-achievement-badge {
  cursor: pointer;
  transition: background 0.2s;
}
.lh-achievement-badge:hover { background: rgba(255, 215, 0, 0.35); }

/* 成就通知 */
.achievement-notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: linear-gradient(135deg, #1d3d28, #2e5c3e);
  color: white;
  border-radius: 12px;
  padding: 14px 18px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
  z-index: 9999;
  animation: slideInRight 0.4s ease;
}
.notification-content { display: flex; align-items: center; gap: 12px; }
.achievement-emoji { font-size: 1.6rem; }
.achievement-info strong { font-size: 0.95rem; }
.close-notification {
  background: none; border: none; color: rgba(255,255,255,0.7);
  font-size: 1.1rem; cursor: pointer; padding: 0 4px;
}
@keyframes slideInRight {
  from { transform: translateX(60px); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
}

/* 成就 Modal */
.ls-modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.55);
  z-index: 1000;
  display: flex; align-items: center; justify-content: center;
  padding: 16px;
}
.ls-modal {
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 860px;
  max-height: 92vh;
  display: flex; flex-direction: column;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0,0,0,0.3);
}
.ls-modal-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 24px;
  border-bottom: 1px solid #e5e7eb;
  background: linear-gradient(135deg, #1d3d28, #2e5c3e);
  color: white;
}
.ls-modal-header h3 { margin: 0; font-size: 1.1rem; font-weight: 700; }
.ls-modal-close {
  background: rgba(255,255,255,0.2); border: none; color: white;
  font-size: 1.2rem; width: 30px; height: 30px; border-radius: 50%;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
}
.ls-modal-body { flex: 1; overflow-y: auto; }

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
