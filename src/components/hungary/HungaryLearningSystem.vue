<template>
  <div class="hungary-learning-system">
    <!-- 課程總覽：無當前課程時顯示 HungaryCourseLayout -->
    <HungaryCourseLayout
      v-if="!currentLesson"
      :currentLevel="currentLevel"
      :currentLevelData="currentLevelData"
      :completedLessons="hungaryLearningState.completedLessons"
      :unlockedLevels="unlockedLevels"
      @backToLevelSelector="emit('exitLearning')"
      @changeLevel="(n) => isLevelUnlocked(n) && hungaryLearningActions.setLevel(n)"
      @startLesson="(lesson) => hungaryLearningActions.startLesson(lesson.id)"
    />

    <!-- 課程播放頁 -->
    <template v-else>
      <header class="learning-header">
        <div class="lh-row lh-row-1">
          <button class="lh-btn lh-back-btn" @click="handleBackButton">← 返回</button>
          <div class="lh-badges">
            <span class="lh-badge lh-progress-badge">{{ totalProgress }}%</span>
            <span class="lh-badge lh-achievement-badge" @click="showAchievementsModal = true" title="成就">
              🏆 {{ achievementCount }}
            </span>
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
            @openRegionMap="(info) => emit('openRegionMap', info)"
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
      <div v-if="showAchievementsModal" class="hs-modal-overlay" @click.self="showAchievementsModal = false">
        <div class="hs-modal">
          <div class="hs-modal-header">
            <h3>🏆 匈牙利葡萄酒成就系統</h3>
            <button class="hs-modal-close" @click="showAchievementsModal = false">×</button>
          </div>
          <div class="hs-modal-body">
            <AchievementsDashboard course-key="hungary" @back="showAchievementsModal = false" />
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import {
  hungaryLearningState,
  hungaryLearningLevels,
  hungaryLearningActions,
  hungaryLearningProgress
} from '../../stores/hungaryLearningStore.js'
import { authActions } from '../../stores/authStore.js'
import HungaryCourseLayout from './HungaryCourseLayout.vue'
import PresentationLesson from '../PresentationLesson.vue'
import AchievementsDashboard from '../AchievementsDashboard.vue'
import { globalHungaryAchievementManager, hungaryAchievementState } from '../../stores/hungaryAchievementSystem.js'

const emit = defineEmits(['exitLearning', 'openRegionMap'])

const props = defineProps({
  selectedLevel: { type: Number, default: 1 }
})

const presentationLessonRef = ref(null)
const showAchievementsModal = ref(false)
const achievementNotification = ref(null)

globalHungaryAchievementManager.init()

const currentLevel = computed(() => hungaryLearningState.currentLevel)
const currentLesson = computed(() => hungaryLearningState.currentLesson)
const currentLevelData = computed(() => hungaryLearningLevels[`level${currentLevel.value}`])

const totalProgress = computed(() => hungaryLearningProgress.value)
const achievementCount = computed(() => hungaryAchievementState.unlockedAchievements.length)

const unlockedLevels = computed(() =>
  [1, 2].filter(n => isLevelUnlocked(n))
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
  if (hungaryLearningState.testMode) return true
  if (authActions.isAdmin()) return true
  if (level === 1) return true
  const finalId = hungaryLearningActions.getFinalLessonId(level - 1)
  return finalId != null && hungaryLearningState.completedLessons.includes(finalId)
}

function handleBackButton() {
  hungaryLearningActions.exitLesson()
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
    hungaryLearningActions.completeLesson(lessonId)
    // 觸發成就記錄
    const levelId = currentLevel.value
    const levelData = currentLevelData.value
    const lessons = levelData?.lessons || []
    const completedInLevel = lessons.filter(l =>
      hungaryLearningState.completedLessons.includes(l.id) || l.id === lessonId
    ).length
    const isLevelDone = completedInLevel >= lessons.length
    const totalLessons = 14
    const overallProgress = Math.round(
      (hungaryLearningState.completedLessons.length + 1) / totalLessons * 100
    )
    const newUnlocks = globalHungaryAchievementManager.recordLessonCompleted({
      levelId: isLevelDone ? levelId : null,
      totalProgress: overallProgress
    })
    if (newUnlocks.length > 0) {
      achievementNotification.value = newUnlocks[0]
      setTimeout(() => { achievementNotification.value = null }, 4000)
    }
  }
  hungaryLearningActions.exitLesson()
}

watch(() => props.selectedLevel, (n) => {
  if (n !== currentLevel.value) {
    hungaryLearningActions.setLevel(n)
  }
}, { immediate: true })
</script>

<style scoped>
.hungary-learning-system {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fdf5f6;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
}

/* 學習標題欄 */
.learning-header {
  background: linear-gradient(135deg, #c8102e 0%, #8c0b20 100%);
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

/* 成就徽章 */
.lh-achievement-badge {
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
}
.lh-achievement-badge:hover {
  background: rgba(255, 255, 255, 0.35);
  transform: scale(1.05);
}

/* 成就通知 */
.achievement-notification {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  animation: slideIn 0.4s ease;
}
@keyframes slideIn {
  from { transform: translateX(120%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
}
.notification-content {
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #c8102e 0%, #8c0b20 100%);
  color: white;
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(200, 16, 46, 0.4);
  min-width: 240px;
}
.achievement-emoji { font-size: 1.5rem; }
.achievement-info  { flex: 1; }
.achievement-info strong { font-size: 0.9rem; }
.close-notification {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0.7;
  padding: 0 4px;
}
.close-notification:hover { opacity: 1; }

/* 成就 Modal */
.hs-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 8888;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
.hs-modal {
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 780px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.hs-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: linear-gradient(135deg, #c8102e 0%, #8c0b20 100%);
  color: white;
}
.hs-modal-header h3 { margin: 0; font-size: 1.1rem; }
.hs-modal-close {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1;
  padding: 0 4px;
}
.hs-modal-close:hover { opacity: 0.8; }
.hs-modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 0;
}
</style>
