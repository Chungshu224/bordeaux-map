<template>
  <div class="learning-system">
    <!-- 測試模式指示器 -->
    <div v-if="learningState.testMode" class="test-mode-banner">
      <div class="test-mode-content">
        <span class="test-mode-icon">🧪</span>
        <span class="test-mode-text">測試模式已啟用 - 所有功能已解鎖</span>
        <div class="test-mode-controls">
          <button class="test-btn" @click="testRandomLesson">隨機測試課程</button>
          <button class="test-btn reset" @click="resetToNormalMode">退出測試模式</button>
        </div>
      </div>
    </div>

    <!-- 頂部導航 - 簡化版 -->
    <header class="learning-header">
      <div class="header-content">
        <div class="header-left">
          <h1 class="system-title">🍷 波爾多葡萄酒學院</h1>
          <button 
            class="back-btn" 
            @click="handleBackButton" 
            :title="currentLesson ? '返回課程簡介' : '返回 Level 選擇'"
          >
            ← {{ currentLesson ? '返回課程簡介' : '返回 Level 選擇' }}
          </button>
        </div>
        
        <!-- 課程導航按鈕：僅在有課程時顯示 -->
        <div v-if="currentLesson" class="lesson-nav-btns">
          <button 
            class="nav-btn prev-btn"
            @click="handlePreviousSlide"
            :disabled="!canGoPrevious"
            title="上一頁"
          >
            ← 上一頁
          </button>
          <button 
            class="nav-btn next-btn"
            @click="handleNextSlide"
            :disabled="!canGoNext"
            title="下一頁"
          >
            下一頁 →
          </button>
        </div>
        
        <!-- Level 選擇器：只在未選擇課程時顯示 -->
        <div v-if="!currentLesson" class="level-selector">
          <button 
            v-for="level in [1,2,3,4]" 
            :key="level"
            :class="['level-tab', { active: currentLevel === level, locked: !isLevelUnlocked(level) }]"
            :disabled="!isLevelUnlocked(level)"
            @click="setLevel(level)"
            :title="getLevelTitle(level)"
          >
            Level {{ level }}
            <span v-if="getLevelProgress(level) === 100" class="check-mark">✓</span>
          </button>
        </div>

        <div class="header-right">
          <div class="progress-badge">{{ totalProgress }}%</div>
          <div class="achievement-badge" @click="showAchievements" title="成就">
            🏆 {{ achievementCount }}
          </div>
        </div>
      </div>
    </header>

    <!-- 主要內容區域 -->
    <main class="learning-main">
      <!-- 主要學習區域 -->
      <section class="learning-content">
        <!-- 歡迎頁面 - 簡化版 -->
        <div v-if="!currentLesson" class="welcome-screen">
          <div class="welcome-content">
            <h2>{{ currentLevelData.title }}</h2>
            <p class="level-description">{{ currentLevelData.description }}</p>
            
            <div class="quick-start">
              <button 
                class="start-btn"
                @click="startFirstLesson"
              >
                {{ currentLevelProgress.completed === 0 ? '🚀 開始學習' : '▶ 繼續學習' }}
              </button>
              <p class="progress-hint">已完成 {{ currentLevelProgress.completed }}/{{ currentLevelProgress.total }} 課程</p>
            </div>

            <!-- 課程列表 - 整合到簡介頁面 -->
            <div class="intro-lessons-list">
              <h3 class="lessons-list-title">課程內容</h3>
              <div class="intro-lessons-grid">
                <div 
                  v-for="(lesson, index) in visibleLessons" 
                  :key="lesson.id"
                  :class="['intro-lesson-card', { 
                    completed: isLessonCompleted(lesson.id),
                    locked: !isLessonUnlocked(lesson.id, index)
                  }]"
                  @click="selectLesson(lesson, index)"
                >
                  <div class="intro-lesson-number">
                    <span v-if="isLessonCompleted(lesson.id)">✓</span>
                    <span v-else-if="!isLessonUnlocked(lesson.id, index)">🔒</span>
                    <span v-else>{{ index + 1 }}</span>
                  </div>
                  <div class="intro-lesson-info">
                    <h4 class="intro-lesson-title">{{ lesson.title }}</h4>
                    <span class="intro-lesson-duration">{{ lesson.duration }}分</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 課程內容 -->
        <div v-else class="lesson-view">
          <!-- 簡報模式 -->
          <PresentationLesson
            ref="presentationLessonRef"
            :lessonId="resolvedLessonId"
            @lessonComplete="completeCurrentLesson"
            @nextLesson="handleLessonNext"
          />
        </div>
      </section>
    </main>

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
import { learningState, learningLevels, learningActions, learningProgress } from '../stores/learningStore.js'
import { authActions } from '../stores/authStore.js'
import PresentationLesson from './PresentationLesson.vue'

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
  const previousLevel = learningState.userProgress[`level${level - 1}`]
  return previousLevel.completed === previousLevel.total
}

const getLevelTitle = (level) => {
  const titles = {
    1: '基礎入門',
    2: '中級進階', 
    3: '高級專業',
    4: '專家認證'
  }
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
  if (confirm('確定要退出測試模式嗎？所有進度將被重置。')) {
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
</style>

<style scoped>
/* === 簡化版樣式 === */
.learning-system {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f5f7fa;
  width: 100%;
  overflow: hidden;
}

/* 測試模式橫幅 */
.test-mode-banner {
  position: sticky !important;
  top: 0 !important;
  z-index: 1001 !important;
  background: linear-gradient(135deg, #FF6B6B, #FF8E53);
  color: white;
  padding: 0.75rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.test-mode-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  max-width: 1600px;
  margin: 0 auto;
}

.test-mode-controls {
  display: flex;
  gap: 0.5rem;
}

.test-btn {
  padding: 0.4rem 1rem;
  background: rgba(255,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-size: 0.85rem;
}

.test-btn:hover { background: rgba(255,255,255,0.3); }
.test-btn.reset { background: rgba(0,0,0,0.2); }

/* 頂部導航 */
.learning-header {
  position: sticky !important;
  top: 0 !important;
  z-index: 1000 !important;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1600px;
  margin: 0 auto;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.system-title {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  white-space: nowrap;
}

.back-btn {
  padding: 0.5rem 1rem;
  background: rgba(255,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.back-btn:hover { background: rgba(255,255,255,0.3); }

.level-selector {
  display: flex;
  gap: 0.5rem;
}

/* 課程導航按鈕 */
.lesson-nav-btns {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.lesson-nav-btns .nav-btn {
  padding: 0.5rem 1rem;
  background: rgba(255,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s;
  white-space: nowrap;
}

.lesson-nav-btns .nav-btn:hover:not(:disabled) {
  background: rgba(255,255,255,0.3);
  transform: translateY(-1px);
}

.lesson-nav-btns .nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.level-tab {
  padding: 0.6rem 1.2rem;
  background: rgba(255,255,255,0.15);
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
  position: relative;
}

.level-tab:hover:not(:disabled) {
  background: rgba(255,255,255,0.25);
}

.level-tab.active {
  background: white;
  color: #667eea;
}

.level-tab.locked {
  opacity: 0.5;
  cursor: not-allowed;
}

.level-tab .check-mark {
  margin-left: 0.3rem;
  color: #4CAF50;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.progress-badge,
.achievement-badge {
  padding: 0.5rem 1rem;
  background: rgba(255,255,255,0.2);
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}

.achievement-badge {
  cursor: pointer;
  transition: all 0.2s;
}

.achievement-badge:hover {
  background: rgba(255,255,255,0.3);
}

/* 主要內容 */
.learning-main {
  display: flex;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}

/* 側邊欄 */
.lesson-sidebar {
  width: 280px;
  background: #fafbfc; /* 統一背景色 */
  border-right: 1px solid #e1e8ed;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 8px rgba(0,0,0,0.05);
  height: 100%; /* 確保填滿整個高度 */
  overflow: hidden; /* 防止整體滾動 */
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e1e8ed;
  background: #f8f9fa;
  flex-shrink: 0; /* 防止被壓縮 */
}

.current-level-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
}

.level-progress-text {
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
}

.lessons-container {
  flex: 1;
  overflow-y: auto;
  padding: 0.75rem;
  min-height: 0;
  /* 不設置背景,繼承父元素的背景 */
}

.lessons-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 1rem;
  /* 不設置 min-height,讓內容自然流動 */
}

.lesson-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  background: #f8f9fa;
  border: 2px solid transparent;
}

.lesson-item:hover:not(.locked) {
  background: #e8f5e9;
  border-color: #4CAF50;
}

.lesson-item.active {
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  border-color: #4CAF50;
}

.lesson-item.completed {
  background: #f1f8f4;
}

.lesson-item.locked {
  opacity: 0.5;
  cursor: not-allowed;
}

.lesson-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e3f2fd;
  color: #1976d2;
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.lesson-item.completed .lesson-number {
  background: #4CAF50;
  color: white;
}

.lesson-item.locked .lesson-number {
  background: #e0e0e0;
  color: #999;
}

.lesson-info {
  flex: 1;
  min-width: 0;
}

.lesson-title {
  margin: 0 0 0.25rem 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: #2c3e50;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.lesson-duration {
  font-size: 0.75rem;
  color: #888;
}

/* 學習內容區 */
.learning-content {
  flex: 1;
  width: 100%;
  background: white;
  padding: 1.5rem;
}

/* 歡迎畫面 */
.welcome-screen {
  display: flex;
  justify-content: center;
  padding: 2rem;
  width: 100%;
}

.welcome-content {
  max-width: 1000px;
  width: 100%;
  text-align: center;
}

.welcome-content h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.level-description {
  font-size: 1.05rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.quick-start {
  margin-top: 2rem;
}

.start-btn {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  transition: all 0.3s;
}

.start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.progress-hint {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #888;
}

/* 簡介頁面課程列表 */
.intro-lessons-list {
  margin-top: 3rem;
  width: 100%;
  max-width: 900px;
}

.lessons-list-title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: left;
  font-weight: 600;
}

.intro-lessons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  text-align: left;
}

.intro-lesson-card {
  background: white;
  border: 2px solid #e1e8ed;
  border-radius: 12px;
  padding: 1.25rem;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.intro-lesson-card:hover:not(.locked) {
  border-color: #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
  transform: translateY(-2px);
}

.intro-lesson-card.completed {
  background: #f0f9ff;
  border-color: #4ade80;
}

.intro-lesson-card.locked {
  opacity: 0.5;
  cursor: not-allowed;
}

.intro-lesson-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.intro-lesson-card.completed .intro-lesson-number {
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
}

.intro-lesson-card.locked .intro-lesson-number {
  background: #cbd5e1;
}

.intro-lesson-info {
  flex: 1;
}

.intro-lesson-title {
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
  color: #2c3e50;
  font-weight: 600;
}

.intro-lesson-duration {
  font-size: 0.85rem;
  color: #666;
}

.lesson-view {
  width: 100%;
  height: 100%;
}

/* 成就通知 */
.achievement-notification {
  position: fixed;
  top: 6rem;
  right: 2rem;
  z-index: 1001;
  background: linear-gradient(135deg, #FFD700, #FFA000);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(255, 215, 0, 0.4);
  animation: slideIn 0.4s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(120%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.notification-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.achievement-emoji {
  font-size: 1.8rem;
}

.achievement-info strong {
  font-size: 1rem;
}

.close-notification {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0 0 0 0.5rem;
  opacity: 0.8;
}

.close-notification:hover {
  opacity: 1;
}

/* 響應式 */
@media (max-width: 900px) {
  .learning-main {
    flex-direction: column;
  }
  
  .lesson-sidebar {
    width: 100%;
    max-height: 200px;
    border-right: none;
    border-bottom: 1px solid #e1e8ed;
  }
  
  .header-content {
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .system-title {
    font-size: 1.2rem;
  }
  
  .lesson-nav-btns .nav-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 768px) {
  .learning-header {
    position: sticky !important;
    top: 0 !important;
    z-index: 1000 !important;
    padding: 0.75rem 1rem;
  }
  
  .header-left .back-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }
  
  .level-tab {
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
  }
  
  .progress-badge,
  .achievement-badge {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }
  
  .lesson-nav-btns {
    order: 3;
    width: 100%;
    justify-content: center;
  }
}

/* 手機優化 - 進一步精簡 */
@media (max-width: 640px) {
  /* 頁首極致精簡 */
  .learning-header {
    position: sticky !important;
    top: 0 !important;
    z-index: 1000 !important;
    padding: 0.5rem 0.75rem;
  }
  
  .header-content {
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
  }
  
  .header-left {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .system-title {
    font-size: 1rem;
    flex: 1;
  }
  
  .back-btn {
    padding: 0.35rem 0.7rem;
    font-size: 0.8rem;
  }
  
  /* Level 選擇器改為緊湊橫向滾動 */
  .level-selector {
    display: flex;
    gap: 0.4rem;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 0.25rem;
  }
  
  .level-tab {
    padding: 0.4rem 0.7rem;
    font-size: 0.8rem;
    white-space: nowrap;
    flex-shrink: 0;
  }
  
  /* 進度徽章堆疊並縮小 */
  .header-right {
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
    font-size: 0.75rem;
  }
  
  .progress-badge,
  .achievement-badge {
    padding: 0.35rem 0.7rem;
    font-size: 0.75rem;
    flex: 1;
    text-align: center;
  }
  
  /* 側邊欄緊湊化 */
  .lesson-sidebar {
    max-height: 160px;
  }
  
  .sidebar-header {
    padding: 0.6rem 0.75rem;
  }
  
  .current-level-title {
    font-size: 0.9rem;
  }
  
  .level-progress-text {
    font-size: 0.75rem;
  }
  
  .lessons-container {
    padding: 0.5rem;
  }
  
  .lessons-list {
    gap: 0.4rem;
  }
  
  .lesson-item {
    gap: 0.5rem;
    padding: 0.5rem;
  }
  
  .lesson-number {
    width: 28px;
    height: 28px;
    font-size: 0.75rem;
  }
  
  .lesson-title {
    font-size: 0.85rem;
  }
  
  .lesson-duration {
    font-size: 0.7rem;
  }
  
  /* 內容區減少留白 */
  .learning-content {
    padding: 0.75rem;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .welcome-screen {
    padding: 1rem;
  }
  
  .welcome-content h2 {
    font-size: 1.5rem;
  }
  
  .level-description {
    font-size: 0.95rem;
  }
  
  .start-btn {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
  
  /* 課程列表手機優化 */
  .intro-lessons-list {
    margin-top: 2rem;
  }
  
  .intro-lessons-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .intro-lesson-card {
    padding: 1rem;
  }
  
  .intro-lesson-number {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
  
  .intro-lesson-title {
    font-size: 0.9rem;
  }
  
  .intro-lesson-duration {
    font-size: 0.75rem;
  }
  
  /* 成就通知調整 */
  .achievement-notification {
    top: 4rem;
    right: 0.75rem;
    left: 0.75rem;
    padding: 0.75rem 1rem;
  }
  
  .achievement-emoji {
    font-size: 1.5rem;
  }
  
  .achievement-info strong {
    font-size: 0.9rem;
  }
}

@media (max-height: 768px) {
  .lesson-sidebar {
    max-height: 180px;
  }
}

@media (max-height: 640px) {
  .lesson-sidebar {
    max-height: 140px;
  }
}


</style>
