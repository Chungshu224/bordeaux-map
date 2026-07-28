<template>
  <div class="learning-system">
    <!-- 測試模式指示器 -->
    <div v-if="learningState.testMode" class="test-mode-banner">
      <div class="test-mode-content">
        <span class="test-mode-icon">🧪</span>
        <span class="test-mode-text">{{ $t('bordeaux.system.testBanner') }}</span>
        <div class="test-mode-controls">
          <button class="test-btn" @click="testRandomLesson">{{ $t('bordeaux.system.testRandom') }}</button>
          <button class="test-btn reset" @click="resetToNormalMode">{{ $t('bordeaux.system.testExit') }}</button>
        </div>
      </div>
    </div>

    <!-- 課程內容頁（總覽）：無當前課程時顯示 BordeauxCourseLayout -->
    <BordeauxCourseLayout
      v-if="!currentLesson"
      :currentLevel="currentLevel"
      :currentLevelData="currentLevelData"
      :completedLessons="learningState.completedLessons"
      :unlockedLevels="unlockedLevels"
      @backToLevelSelector="emit('exitLearning')"
      @changeLevel="(n) => isLevelUnlocked(n) && learningActions.setLevel(n)"
      @startLesson="(lesson) => learningActions.startLesson(lesson.id)"
    />

    <!-- 課程播放頁：有當前課程時顯示頂部導航欄 + 簡報內容 -->
    <template v-else>
      <header class="learning-header">
        <!-- Row 1: 返回按鈕 + 進度徽章 -->
        <div class="lh-row lh-row-1">
          <button class="lh-btn lh-back-btn" @click="handleBackButton">← {{ $t('common.actions.back') }}</button>
          <div class="lh-badges">
            <span class="lh-badge lh-progress-badge">{{ totalProgress }}%</span>
            <span class="lh-badge lh-achievement-badge" @click="showAchievements" :title="$t('common.labels.achievements')">
              🏆 {{ achievementCount }}
            </span>
          </div>
        </div>
        <!-- Row 2: 上一頁 / 下一頁 -->
        <div class="lh-row lh-row-2">
          <button class="lh-btn lh-nav-btn" @click="handlePreviousSlide" :disabled="!canGoPrevious" :title="$t('common.actions.prev')">◀ {{ $t('common.actions.prev') }}</button>
          <span class="lh-nav-label">{{ currentSlideTitle }}</span>
          <button class="lh-btn lh-nav-btn" @click="handleNextSlide" :disabled="!canGoNext" :title="$t('common.actions.next')">{{ $t('common.actions.next') }} ▶</button>
        </div>
      </header>

      <!-- 課程簡報主體 -->
      <main class="learning-main">
        <div class="lesson-view">
          <PresentationLesson
            ref="presentationLessonRef"
            :lessonId="resolvedLessonId"
            :lessonTitle="currentLesson?.title || ''"
            @lessonComplete="completeCurrentLesson"
            @nextLesson="handleLessonNext"
          />
        </div>
      </main>
      <WineGlossary region="bordeaux" />
    </template>

    <!-- 成就通知 -->
    <div v-if="achievementNotification" class="achievement-notification">
      <div class="notification-content">
        <span class="achievement-emoji">🏆</span>
        <div class="achievement-info">
          <strong>{{ achievementNotification.title }}</strong>
        </div>
        <button class="close-notification" @click="closeAchievementNotification">×</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { learningState, learningLevels, learningActions, learningProgress } from '../../stores/learningStore.js'
import { authActions } from '../../stores/authStore.js'
import BordeauxCourseLayout from './BordeauxCourseLayout.vue'
import PresentationLesson from '../PresentationLesson.vue'
import WineGlossary from '../WineGlossary.vue'
const { t } = useI18n()

// Emits
const emit = defineEmits(['exitLearning'])

// Props
const props = defineProps({
  selectedLevel: {
    type: Number,
    default: 1
  }
})

// 組件狀態
const achievementNotification = ref(null)
const presentationLessonRef = ref(null)

// 計算屬性
const currentLevel = computed(() => learningState.currentLevel)
const currentLesson = computed(() => learningState.currentLesson)
// 若課程為分段課（有 parts），預設載入第一段；否則載入自身 id
const resolvedLessonId = computed(() => {
  const lesson = learningState.currentLesson
  if (!lesson) return null
  if (Array.isArray(lesson.parts) && lesson.parts.length > 0) {
    return lesson.parts[0]
  }
  return lesson.id
})
const currentLevelData = computed(() => learningLevels[`level${currentLevel.value}`])
const currentLevelProgress = computed(() => learningState.userProgress[`level${currentLevel.value}`])

// 過濾掉 hidden 的課程（例如已合併的 L3-7）
const visibleLessons = computed(() => {
  const data = currentLevelData.value
  if (!data || !Array.isArray(data.lessons)) return []
  return data.lessons.filter(l => !l.hidden)
})
const achievementCount = computed(() => learningState.achievements.length)
const totalAchievements = computed(() => 20) // 總成就數量

const totalProgress = computed(() => {
  const levels = Object.values(learningState.userProgress)
  const totalCompleted = levels.reduce((sum, level) => sum + level.completed, 0)
  const totalLessons = levels.reduce((sum, level) => sum + level.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})

// 課程導航相關計算屬性
const canGoPrevious = computed(() => {
  if (!presentationLessonRef.value) return false
  const slide = presentationLessonRef.value.currentSlide
  return typeof slide === 'number' ? slide > 0 : (slide?.value > 0)
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
  if (!presentationLessonRef.value) return t('bordeaux.system.slideNav')
  return presentationLessonRef.value.currentSlideTitle || t('bordeaux.system.slideNav')
})

const unlockedLevels = computed(() =>
  [1, 2, 3, 4].filter(n => isLevelUnlocked(n))
)

// 方法
const setLevel = (level) => {
  learningActions.setLevel(level)
}

// 課程導航方法
const handlePreviousSlide = () => {
  if (presentationLessonRef.value) {
    presentationLessonRef.value.previousSlide()
  }
}

const handleNextSlide = () => {
  if (presentationLessonRef.value) {
    presentationLessonRef.value.nextSlide()
  }
}

// 監聽selectedLevel變化並設置等級
watch(() => props.selectedLevel, (newLevel) => {
  if (newLevel !== currentLevel.value) {
    setLevel(newLevel)
  }
}, { immediate: true })

const isLevelUnlocked = (level) => {
  // 測試模式或管理員下所有等級都解鎖
  if (learningState.testMode) return true
  if (authActions.isAdmin()) return true
  if (level === 1) return true
  // 必須通過前一個 Level 的綜合評量（最後一課）才能解鎖
  const finalLessonId = learningActions.getFinalLessonId(level - 1)
  return finalLessonId != null && learningState.completedLessons.includes(finalLessonId)
}

const getLevelTitle = (level) => {
  const titles = t('bordeaux.levels.titles')
  return titles[level]
}

const getLevelProgress = (level) => {
  const levelData = learningState.userProgress[`level${level}`]
  return Math.round((levelData.completed / levelData.total) * 100)
}

const isLessonCompleted = (lessonId) => {
  return learningState.completedLessons.includes(lessonId)
}

const isLessonUnlocked = (lessonId, index) => {
  // 測試模式或管理員下所有課程都解鎖
  if (learningState.testMode) return true
  if (authActions.isAdmin()) return true
  // 第一課總是解鎖的
  if (index === 0) return true
  
  // 檢查前一課是否完成
  const previousLessonId = currentLevelData.value.lessons[index - 1].id
  return isLessonCompleted(previousLessonId)
}

// 測試模式相關方法
const testRandomLesson = () => {
  const allLessons = []
  Object.keys(learningLevels).forEach(levelKey => {
    const level = learningLevels[levelKey]
    if (level.lessons) {
      level.lessons.forEach(lesson => {
        allLessons.push(lesson)
      })
    }
  })
  
  if (allLessons.length > 0) {
    const randomLesson = allLessons[Math.floor(Math.random() * allLessons.length)]
    startLesson(randomLesson)
    console.log(`🧪 隨機測試課程：${randomLesson.title}`)
  }
}

const resetToNormalMode = () => {
  if (confirm(t('bordeaux.system.testExitConfirm'))) {
    learningActions.disableTestMode()
  }
}

const selectLesson = (lesson, index) => {
  if (isLessonUnlocked(lesson.id, index)) {
    learningActions.startLesson(lesson.id)
    nextTick(() => {
      const container = document.querySelector('.learning-main')
      if (container) {
        container.scrollTo({ top: 0, behavior: 'instant' })
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    })
  }
}

const startFirstLesson = () => {
  const firstIncompleteLesson = currentLevelData.value.lessons.find(
    lesson => !isLessonCompleted(lesson.id)
  )
  if (firstIncompleteLesson) {
    learningActions.startLesson(firstIncompleteLesson.id)
  }
}

const completeCurrentLesson = () => {
  if (currentLesson.value) {
    learningActions.completeLesson(currentLesson.value.id)
  }
  learningActions.exitLesson()
}

const handleLessonNext = () => {
  completeCurrentLesson()
  goToNextLesson()
}

const goToNextLesson = () => {
  const currentIndex = currentLevelData.value.lessons.findIndex(
    lesson => lesson.id === currentLesson.value.id
  )
  if (currentIndex < currentLevelData.value.lessons.length - 1) {
    const nextLesson = currentLevelData.value.lessons[currentIndex + 1]
    learningActions.startLesson(nextLesson.id)
  }
}

const handleBackButton = () => {
  if (currentLesson.value) {
    // 如果在課程內，返回到該 Level 的簡介頁
    learningActions.exitLesson()
  } else {
    // 如果在 Level 簡介頁，返回到 Level 選擇頁
    emit('exitLearning')
  }
}

const goToPreviousLesson = () => {
  const currentIndex = currentLevelData.value.lessons.findIndex(
    lesson => lesson.id === currentLesson.value.id
  )
  if (currentIndex > 0) {
    const previousLesson = currentLevelData.value.lessons[currentIndex - 1]
    learningActions.startLesson(previousLesson.id)
  }
}

const getCurrentTips = () => {
  // 根據當前課程和進度提供學習提示
  return [
    { id: 1, text: '點擊地圖上的產區可以查看詳細資訊' },
    { id: 2, text: '使用搜尋功能快速找到特定AOC' },
    { id: 3, text: '完成課程後可解鎖測驗功能' }
  ]
}

const showProgress = () => {
  // 顯示詳細進度
  console.log('Show progress modal')
}

const showAchievements = () => {
  // 顯示成就頁面
  console.log('Show achievements modal')
}

const showSettings = () => {
  // 顯示設置頁面
  console.log('Show settings modal')
}

const closeAchievementNotification = () => {
  achievementNotification.value = null
}

// 監聽成就解鎖
watch(() => learningState.achievements, (newAchievements, oldAchievements) => {
  if (newAchievements.length > (oldAchievements?.length || 0)) {
    const newAchievementId = newAchievements[newAchievements.length - 1]
    achievementNotification.value = {
      id: newAchievementId,
      title: `完成了新的成就：${newAchievementId}`
    }
    
    // 5秒後自動關閉
    setTimeout(() => {
      achievementNotification.value = null
    }, 5000)
  }
}, { deep: true })

onMounted(() => {
  // 初始化學習系統
  console.log('Learning system initialized')
})
</script>

<style>
/* 全局滾動修正 */
html, body {
  overflow-y: auto !important;
  -webkit-overflow-scrolling: touch;
}

@keyframes rotateSys { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
</style>

<style scoped>
/* ===== 波爾多課程簡報頁頂部導航欄 ===== */
.learning-system {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
.learning-main {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}
.learning-header {
  background: linear-gradient(135deg, #8B0000 0%, #4a0000 100%);
  padding: 12px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  z-index: 100;
}

.lh-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.lh-row-1 {
  margin-bottom: 10px;
}

.lh-btn {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, opacity 0.2s;
  white-space: nowrap;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lh-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.25);
}

.lh-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.lh-back-btn {
  background: rgba(255, 255, 255, 0.1);
}

.lh-badges {
  display: flex;
  align-items: center;
  gap: 10px;
}

.lh-badge {
  color: #fff;
  font-weight: 700;
  font-size: 0.88rem;
  padding: 4px 10px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
}

.lh-achievement-badge {
  cursor: pointer;
}

.lh-achievement-badge:hover {
  background: rgba(255, 255, 255, 0.25);
}

.lh-nav-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
}
</style>
