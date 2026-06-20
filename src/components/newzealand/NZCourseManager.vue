<template>
  <div class="nz-course-manager">
    <!-- 課程播放標題欄（Loire 風格兩列） -->
    <header v-if="currentLesson" class="nz-learning-header">
      <div class="nz-lh-row nz-lh-row-1">
        <button class="nz-lh-btn nz-lh-back-btn" @click="handleGoBack">
          {{ selectedLevel === 1 ? '← Level 1' : selectedLevel === 2 ? '← Level 2' : selectedLevel === 3 ? '← Level 3' : `← ${$t('common.actions.back')}` }}
        </button>
        <span class="nz-lh-title">{{ currentLesson.title }}</span>
        <button
          v-if="isCurrentLessonCompleted"
          class="nz-lh-btn nz-lh-complete-btn completed"
          disabled
        >✓ {{ $t('common.actions.completed') }}</button>
        <span v-else class="nz-lh-placeholder"></span>
      </div>
      <div class="nz-lh-row nz-lh-row-2" v-if="showSlideControls">
        <button class="nz-lh-btn nz-lh-nav-btn" @click="handlePrevSlide" :disabled="!canPrevSlide">◀ {{ $t('common.actions.prev') }}</button>
        <span class="nz-lh-nav-label">{{ currentSlideNum }} / {{ totalSlides }}</span>
        <button
          v-if="canNextSlide"
          class="nz-lh-btn nz-lh-nav-btn"
          @click="handleNextSlide"
        >{{ $t('common.actions.next') }} ▶</button>
        <button
          v-else-if="!isCurrentLessonCompleted"
          class="nz-lh-btn nz-lh-complete-btn"
          @click="triggerMarkComplete"
        >✓ {{ $t('common.actions.finish') }}</button>
        <button
          v-else
          class="nz-lh-btn nz-lh-complete-btn completed"
          disabled
        >✓ {{ $t('common.actions.completed') }}</button>
      </div>
    </header>

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
      @open-game="$emit('openGame')"
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
import { authState, authInitPromise } from '../../stores/authStore.js'
import { saveNZLesson, loadAndMergeNZProgress } from '../../lib/courseProgressSync.js'

defineEmits(['openMap', 'openNotebook', 'openGame'])

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
const isCurrentLessonCompleted = computed(() => !!currentLesson.value && completedLessons.value.includes(currentLesson.value.id))
const triggerMarkComplete = () => { if (currentLesson.value) handleMarkComplete(currentLesson.value.id) }

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
    const userId = authState.user?.id
    if (userId) saveNZLesson(userId, lessonId)

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
  await authInitPromise
  const userId = authState.user?.id
  if (userId) {
    const merged = await loadAndMergeNZProgress(userId)
    if (merged) completedLessons.value = merged
  }
})
</script>

<style scoped>
.nz-course-manager {
  width: 100%;
  min-height: 100vh;
  background: #f8f9fa;
}
/* ── 課程播放標題欄 ── */
.nz-learning-header {
  background: linear-gradient(135deg, #00533e 0%, #003d2d 100%);
  padding: 8px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 4px 16px rgba(0,83,62,0.35);
  flex-shrink: 0;
}
.nz-lh-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.nz-lh-row-2 {
  justify-content: center;
  gap: 16px;
}
.nz-lh-btn {
  padding: 6px 14px;
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 8px;
  color: white;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
}
.nz-lh-btn:hover:not(:disabled) { background: rgba(255,255,255,0.28); }
.nz-lh-btn:disabled { opacity: 0.38; cursor: not-allowed; }
.nz-lh-title {
  flex: 1;
  text-align: center;
  color: rgba(255,255,255,0.92);
  font-size: 0.92rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 8px;
}
.nz-lh-placeholder { flex-shrink: 0; min-width: 80px; }
.nz-lh-complete-btn {
  background: rgba(72,187,120,0.25);
  border-color: rgba(72,187,120,0.55);
}
.nz-lh-complete-btn:hover:not(:disabled) { background: rgba(72,187,120,0.4); }
.nz-lh-complete-btn.completed { background: rgba(72,187,120,0.18); color: rgba(255,255,255,0.6); }
.nz-lh-nav-btn {
  padding: 6px 18px;
  background: rgba(255,255,255,0.15);
  border-color: rgba(255,255,255,0.3);
}
.nz-lh-nav-label {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.8);
  font-weight: 500;
  min-width: 60px;
  text-align: center;
}
@media (max-width: 600px) {
  .nz-learning-header { padding: 6px 12px; }
  .nz-lh-title { font-size: 0.78rem; }
  .nz-lh-btn { padding: 5px 10px; font-size: 0.75rem; }
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
