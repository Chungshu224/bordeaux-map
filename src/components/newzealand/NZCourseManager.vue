<template>
  <div class="nz-course-manager">
    <!-- Top utility bar -->
    <div v-if="currentLesson" class="utility-bar">
      <button class="util-btn" @click="handleGoBack">
        {{ selectedLevel === 1 ? '← 返回Level1課程' : selectedLevel === 2 ? '← 返回Level2課程' : selectedLevel === 3 ? '← 返回Level3課程' : '← 返回課程選擇' }}
      </button>
      <div class="slide-nav-controls" v-if="showSlideControls">
        <button class="slide-nav-btn" @click="handlePrevSlide" :disabled="!canPrevSlide">← 上一頁</button>
        <span class="slide-progress">{{ currentSlideNum }} / {{ totalSlides }}</span>
        <button class="slide-nav-btn" @click="handleNextSlide" :disabled="!canNextSlide">下一頁 →</button>
      </div>
      <div v-else class="util-spacer"></div>
    </div>

    <NZLessonViewer
      :currentLesson="currentLesson"
      :modules="courseModules"
      :completedLessons="completedLessons"
      :selectedLevel="selectedLevel"
      :levels="levels"
      :slideIndex="slideInfo.current"
      @mark-complete="handleMarkComplete"
      @navigate="handleNavigate"
      @enter-level="handleEnterLevel"
      @open-map="$emit('openMap')"
      @open-notebook="$emit('openNotebook')"
      @select-lesson-direct="handleSelectLessonDirect"
      @update-slide-info="updateSlideInfo"
      @back-to-home="handleBackToHome"
      @go-to-level="handleEnterLevel"
    />

    <!-- 成就通知 Toast -->
    <div v-if="achievementNotification" class="nz-achievement-toast">
      <div class="nz-toast-content">
        <span class="nz-toast-emoji">🏆</span>
        <div class="nz-toast-info">
          <strong>成就解鎖！{{ achievementNotification.title }}</strong>
          <span>+{{ achievementNotification.points }} 點</span>
        </div>
        <button class="nz-toast-close" @click="achievementNotification = null">×</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import NZLessonViewer from './NZLessonViewer.vue'
import {
  globalNzAchievementManager,
  nzAchievementState
} from '../../stores/nzAchievementSystem.js'

defineEmits(['openMap', 'openNotebook'])

globalNzAchievementManager.init()

const achievementNotification = ref(null)

const selectedLevel = ref(0)
const courseModules = ref([])
const currentLesson = ref(null)
const completedLessons = ref([])
const slideInfo = ref({ current: 0, total: 0, hasSlides: false })

const showSlideControls = computed(() => slideInfo.value.hasSlides)
const currentSlideNum = computed(() => slideInfo.value.current + 1)
const totalSlides = computed(() => slideInfo.value.total)
const canPrevSlide = computed(() => slideInfo.value.current > 0)
const canNextSlide = computed(() => slideInfo.value.current < slideInfo.value.total - 1)

const levels = computed(() => {
  const set = new Set(courseModules.value.map(m => m.level).filter(l => typeof l !== 'undefined'))
  return Array.from(set).sort((a, b) => a - b)
})

const loadCourseStructure = async () => {
  try {
    const response = await fetch('/newzealand/modules/course-structure.json')
    if (response.ok) {
      courseModules.value = await response.json()
    }
  } catch (error) {
    console.error('載入課程結構失敗:', error)
  }
}

const loadProgress = () => {
  try {
    const saved = localStorage.getItem('nz-wine-progress')
    if (saved) completedLessons.value = JSON.parse(saved)
  } catch (e) {
    completedLessons.value = []
  }
}

const handleEnterLevel = (level) => {
  selectedLevel.value = level
  currentLesson.value = null
  slideInfo.value = { current: 0, total: 0, hasSlides: false }
}

const handleSelectLessonDirect = ({ lesson }) => {
  currentLesson.value = lesson
}

const handleMarkComplete = (lessonId) => {
  if (!completedLessons.value.includes(lessonId)) {
    completedLessons.value.push(lessonId)
    try { localStorage.setItem('nz-wine-progress', JSON.stringify(completedLessons.value)) } catch (e) {}

    // 計算進度並觸發成就
    const allModules   = courseModules.value
    const allLessons   = allModules.flatMap(m => m.lessons || [])
    const totalCount   = allLessons.length
    const doneCount    = completedLessons.value.length
    const totalProgress = totalCount ? Math.round(doneCount / totalCount * 100) : 0

    // 判斷更新的是屬於哪個 level
    const lessonMod = allModules.find(m => (m.lessons || []).some(l => l.id === lessonId))
    const levelNum  = lessonMod?.level || selectedLevel.value

    // 檢查該等級是否剛完成
    const levelLessons = allModules.filter(m => m.level === levelNum).flatMap(m => m.lessons || [])
    const levelDone    = levelLessons.filter(l => completedLessons.value.includes(l.id) || l.id === lessonId)
    const levelCompleted = levelDone.length >= levelLessons.length

    // SB / Pinot 判斷（從課程 ID 或標題小寫匹配）
    const lesson = allLessons.find(l => l.id === lessonId)
    const titleLower = (lesson?.title || '').toLowerCase()
    const sbLesson    = titleLower.includes('sauvignon') || titleLower.includes('sb')
    const pinotLesson = titleLower.includes('pinot')

    const newUnlocks = globalNzAchievementManager.recordLessonCompleted({
      levelNum, totalProgress, levelCompleted, sbLesson, pinotLesson
    })

    if (newUnlocks.length > 0) {
      achievementNotification.value = newUnlocks[0]
      setTimeout(() => { achievementNotification.value = null }, 4000)
    }
  }
}

const handleNavigate = (direction) => {
  if (!currentLesson.value) return
  const allLessons = courseModules.value.flatMap(m => m.lessons)
  const currentIndex = allLessons.findIndex(l => l.id === currentLesson.value.id)
  if (direction === 'next' && currentIndex < allLessons.length - 1) currentLesson.value = allLessons[currentIndex + 1]
  else if (direction === 'previous' && currentIndex > 0) currentLesson.value = allLessons[currentIndex - 1]
}

const handleBackToHome = () => {
  currentLesson.value = null
  selectedLevel.value = 0
  slideInfo.value = { current: 0, total: 0, hasSlides: false }
}

const handleGoBack = () => {
  currentLesson.value = null
  slideInfo.value = { current: 0, total: 0, hasSlides: false }
}

const handlePrevSlide = () => {
  if (canPrevSlide.value) {
    slideInfo.value = { ...slideInfo.value, current: slideInfo.value.current - 1 }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const handleNextSlide = () => {
  if (canNextSlide.value) {
    slideInfo.value = { ...slideInfo.value, current: slideInfo.value.current + 1 }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const updateSlideInfo = (info) => {
  slideInfo.value = info
}

onMounted(async () => {
  await loadCourseStructure()
  loadProgress()
})
</script>

<style scoped>
.nz-course-manager {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
}
.utility-bar {
  display: flex;
  gap: 10px;
  padding: 12px 20px;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.util-btn {
  padding: 8px 16px;
  border-radius: 8px;
  background: #f7fafc;
  color: #4a5568;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
  white-space: nowrap;
}
.util-btn:hover { background: #edf2f7; border-color: #cbd5e0; }
.util-spacer { flex: 1; }
.slide-nav-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}
.slide-nav-btn {
  padding: 8px 20px;
  background: linear-gradient(135deg, #006400 0%, #004d00 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 6px rgba(0,100,0,0.3);
}
.slide-nav-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 4px 10px rgba(0,100,0,0.4); }
.slide-nav-btn:disabled { opacity: 0.4; cursor: not-allowed; box-shadow: none; }
.slide-progress { font-size: 15px; font-weight: 600; color: #4a5568; padding: 6px 16px; background: #f7fafc; border-radius: 14px; border: 1px solid #e2e8f0; }
@media (max-width: 768px) {
  .utility-bar { padding: 10px 12px; gap: 8px; }
  .slide-nav-btn { padding: 7px 12px; font-size: 13px; }
}

/* 成就 Toast 通知 */
.nz-achievement-toast {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  animation: nzSlideIn 0.4s ease;
}
@keyframes nzSlideIn {
  from { transform: translateX(120%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
}
.nz-toast-content {
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #006400 0%, #004d00 100%);
  color: white;
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 100, 0, 0.4);
  min-width: 260px;
}
.nz-toast-emoji { font-size: 1.5rem; }
.nz-toast-info  { flex: 1; display: flex; flex-direction: column; gap: 2px; }
.nz-toast-info strong { font-size: 0.88rem; }
.nz-toast-info span   { font-size: 0.75rem; opacity: 0.85; }
.nz-toast-close {
  background: none; border: none; color: white;
  font-size: 1.2rem; cursor: pointer; opacity: 0.7; padding: 0 4px;
}
.nz-toast-close:hover { opacity: 1; }
</style>
