<template>
  <div class="lesson-viewer">
    <!-- Level Overview Page -->
    <div v-if="showLevelOverview" class="level-overview">
      <div class="overview-container">
        <div class="back-to-levels">
          <button class="back-to-levels-btn" @click="$emit('back-to-home')">← 返回 Level 選擇</button>
        </div>
        <div class="overview-header">
          <h1>Level {{ selectedLevel }} - {{ getLevelTitle(selectedLevel) }}</h1>
          <p class="overview-subtitle">{{ getLevelDescription(selectedLevel) }}</p>
          <button class="continue-btn" @click="continueLearning">▶ 繼續學習</button>
          <div class="overview-progress">
            <span>已完成 {{ levelCompletedCount }}/{{ levelTotalLessons }} 課程</span>
          </div>
        </div>

        <div class="course-content-section">
          <h2>課程內容</h2>
          <div class="lessons-grid">
            <div v-for="module in currentLevelModules" :key="module.id" class="module-section">
              <div v-for="lesson in module.lessons" :key="lesson.id"
                   class="lesson-card"
                   :class="{ completed: completedLessons.includes(lesson.id) }"
                   @click="selectLessonFromOverview(lesson)">
                <div class="lesson-card-icon">
                  <span v-if="completedLessons.includes(lesson.id)" class="check-icon">✓</span>
                  <span v-else class="circle-icon">○</span>
                </div>
                <div class="lesson-card-content">
                  <h3>{{ lesson.title }}</h3>
                  <span class="lesson-card-duration">{{ lesson.duration }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="currentLesson" class="lesson-content">
      <!-- Header -->
      <div class="lesson-header">
        <div class="lesson-meta">
          <h1>{{ currentLesson.title }}</h1>
          <div class="lesson-details">
            <span class="duration">⏱️ {{ currentLesson.duration }}</span>
            <span class="type">📚 {{ getLessonTypeText(currentLesson.type) }}</span>
          </div>
        </div>
        <button class="complete-btn" @click="markComplete" :disabled="isCompleted">
          {{ isCompleted ? '✓ 已完成' : '標記完成' }}
        </button>
      </div>

      <!-- Interactive Map Lesson -->
      <div v-if="currentLesson.type === 'interactive-map'" class="map-lesson">
        <div class="map-container">
          <NZMapPage :focusRegion="currentLesson.region" :embedded="true" />
        </div>
      </div>

      <!-- Review Quiz -->
      <div v-else-if="currentLesson.type === 'review'" class="review-lesson">
        <NZReviewQuiz :config="getReviewConfig()" @go-to-level="$emit('go-to-level', $event)" />
      </div>

      <!-- Slide Lesson -->
      <div v-else-if="currentLesson.type !== 'review' && slides.length > 0" class="slide-lesson">
        <NZSlideViewer
          :slides="slides"
          :currentIndex="currentSlideIndex"
          @go-to-level="$emit('go-to-level', $event)"
        />
      </div>

      <!-- Text Lesson -->
      <div v-else class="text-lesson">
        <div class="lesson-body" v-html="lessonContent"></div>
      </div>
    </div>

    <!-- Welcome / Cover Screen: Level cards -->
    <div v-else class="welcome-screen">
      <div class="cover-container">
        <header class="cover-header">
          <div class="cover-title">
            <h1>侍酒師的筆記本</h1>
            <p class="cover-sub">紐西蘭葡萄酒課程 · 依照 Level 分級，搭配互動地圖與課程模組</p>
          </div>
        </header>

        <div class="level-cards">
          <div v-for="lvl of levels" :key="lvl" class="level-card">
            <div class="level-top" :class="`level-top-${lvl}`">
              <div class="level-badge">{{ lvl }}</div>
              <div class="level-info">
                <div class="level-name">{{ getLevelTitle(lvl) }}</div>
                <div class="level-subtitle">Level {{ lvl }}</div>
              </div>
            </div>
            <div class="level-body">
              <p class="level-desc">{{ getLevelDescription(lvl) }}</p>
              <div class="level-stats">
                <div class="stat">
                  <div class="stat-num">{{ statsByLevel[lvl] ? statsByLevel[lvl].lessons : 0 }}</div>
                  <div class="stat-label">堂課</div>
                </div>
                <div class="stat">
                  <div class="stat-num">{{ statsByLevel[lvl] ? statsByLevel[lvl].hours : 0 }}</div>
                  <div class="stat-label">小時</div>
                </div>
                <div class="stat">
                  <div class="stat-num">{{ statsByLevel[lvl] ? statsByLevel[lvl].progress : 0 }}%</div>
                  <div class="stat-label">完成度</div>
                </div>
              </div>
            </div>
            <div class="level-cta">
              <button class="enter-btn" @click="enterLevel(lvl)">開始 Level {{ lvl }}</button>
            </div>
          </div>
        </div>

        <div class="bottom-actions">
          <button class="action-btn explore-map-btn" @click="openMap">🗺️ 探索地圖</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import NZMapPage from './NZMapPage.vue'
import NZSlideViewer from './NZSlideViewer.vue'
import NZReviewQuiz from './NZReviewQuiz.vue'
import NZLevelSelector from './NZLevelSelector.vue'

const props = defineProps({
  currentLesson: { type: Object, default: null },
  modules: { type: Array, default: () => [] },
  completedLessons: { type: Array, default: () => [] },
  focusRegion: { type: String, default: '' },
  selectedLevel: { type: Number, default: 1 },
  levels: { type: Array, default: () => [] },
  slideIndex: { type: Number, default: 0 }
})

const emit = defineEmits(['mark-complete', 'navigate', 'start-course', 'enter-level', 'open-map', 'select-lesson-direct', 'update-slide-info', 'back-to-home', 'go-to-level'])

const showLevelOverview = computed(() => props.selectedLevel && props.selectedLevel !== 0 && !props.currentLesson)
const currentLevelModules = computed(() => props.modules.filter(m => m.level === props.selectedLevel))
const currentSlideIndex = computed(() => props.slideIndex)

const enterLevel = (lvl) => emit('enter-level', lvl)

const continueLearning = () => {
  const levelModules = props.modules.filter(m => m.level === props.selectedLevel)
  for (const module of levelModules) {
    for (const lesson of module.lessons) {
      if (!props.completedLessons.includes(lesson.id)) {
        emit('select-lesson-direct', { moduleId: module.id, lesson })
        return
      }
    }
  }
  if (levelModules.length > 0 && levelModules[0].lessons.length > 0) {
    emit('select-lesson-direct', { moduleId: levelModules[0].id, lesson: levelModules[0].lessons[0] })
  }
}

const selectLessonFromOverview = (lesson) => {
  const module = props.modules.find(m => m.lessons.some(l => l.id === lesson.id))
  if (module) emit('select-lesson-direct', { moduleId: module.id, lesson })
}

const openMap = () => emit('open-map')

const lessonContent = ref('')
const slides = ref([])

const isCompleted = computed(() => props.currentLesson && props.completedLessons.includes(props.currentLesson.id))

const levelTotalLessons = computed(() => {
  if (!props.selectedLevel || props.selectedLevel === 0) return 0
  return props.modules.reduce((sum, m) => m.level === props.selectedLevel ? sum + m.lessons.length : sum, 0)
})

const levelCompletedCount = computed(() => {
  if (!props.selectedLevel || props.selectedLevel === 0) return 0
  const levelLessonIds = new Set()
  for (const m of props.modules) {
    if (m.level === props.selectedLevel) {
      for (const l of m.lessons) levelLessonIds.add(l.id)
    }
  }
  return props.completedLessons.filter(id => levelLessonIds.has(id)).length
})

const getLessonTypeText = (type) => {
  const types = { 'text': '文字課程', 'interactive-map': '互動地圖', 'video': '影片課程', 'quiz': '測驗', 'review': '複習測驗' }
  return types[type] || '課程'
}

const markComplete = () => {
  if (props.currentLesson) emit('mark-complete', props.currentLesson.id)
}

const loadLessonContent = async () => {
  if (!props.currentLesson || props.currentLesson.type === 'interactive-map') {
    lessonContent.value = ''
    slides.value = []
    return
  }
  slides.value = []
  try {
    const slidesResponse = await fetch(`/newzealand/modules/lessons/${props.currentLesson.id}-slides.json`)
    if (slidesResponse.ok) {
      const slidesData = await slidesResponse.json()
      slides.value = slidesData.slides || []
      lessonContent.value = ''
      emit('update-slide-info', { current: 0, total: slides.value.length, hasSlides: true })
      return
    }
  } catch (error) { /* continue to HTML */ }
  emit('update-slide-info', { current: 0, total: 0, hasSlides: false })
  try {
    const response = await fetch(`/newzealand/modules/lessons/${props.currentLesson.id}.html`)
    if (response.ok) {
      lessonContent.value = await response.text()
    } else {
      lessonContent.value = `<div class="placeholder-content"><h2>${props.currentLesson.title}</h2><p>課程內容製作中...</p></div>`
    }
  } catch (error) {
    lessonContent.value = `<div class="placeholder-content"><h2>${props.currentLesson.title}</h2><p>課程內容製作中...</p></div>`
  }
}

watch(() => props.currentLesson, () => { loadLessonContent() }, { immediate: true })

const statsByLevel = computed(() => {
  const map = {}
  for (const lvl of props.levels) {
    const modules = props.modules.filter(m => m.level === lvl)
    const lessons = modules.flatMap(m => m.lessons || [])
    const lessonIds = lessons.map(l => l.id)
    const completed = props.completedLessons.filter(id => lessonIds.includes(id)).length
    const hours = lessons.reduce((s, l) => {
      const num = typeof l.duration === 'number' ? l.duration : (typeof l.duration === 'string' ? parseFloat(l.duration) : NaN)
      return s + (isNaN(num) ? 0.5 : num)
    }, 0)
    map[lvl] = { lessons: lessons.length, hours: Math.round(hours * 10) / 10, progress: lessons.length ? Math.round((completed / lessons.length) * 100) : 0 }
  }
  return map
})

const getLevelTitle = (lvl) => {
  const titles = { 1: '基礎入門', 2: '中級進階', 3: '高級專業', 4: '專家認證' }
  return titles[lvl] || `Level ${lvl}`
}

const getLevelDescription = (lvl) => {
  const descriptions = {
    1: '建立紐西蘭葡萄酒的基礎認知，了解地理環境、主要品種和基本釀造工藝',
    2: '深入了解紐西蘭各產區特色與風格差異，掌握專業品鑑與分析技能',
    3: '掌握複雜的風土條件與品質評估，深入理解氣候變遷和市場趨勢',
    4: '專業分析與綜合評估能力培養，成為紐西蘭葡萄酒領域的專業顧問'
  }
  return descriptions[lvl] || '以該等級相關模組組成的課程，包含基礎到進階主題。'
}

const getReviewConfig = () => {
  if (!props.currentLesson) return {}
  const configs = {
    'lesson-01-review': { bankPath: '/newzealand/modules/lessons/lesson-01-review-questions.json', numQuestions: 10, passingScore: 80, storageKey: 'nz-wine-level1-review', passedKey: 'nz-wine-level1-passed', nextLevel: 2 },
    'lesson-03-review': { bankPath: '/newzealand/modules/lessons/lesson-03-review-questions.json', numQuestions: 15, passingScore: 80, storageKey: 'nz-wine-level2-review', passedKey: 'nz-wine-level2-passed', nextLevel: 3 },
    'lesson-05-review': { bankPath: '/newzealand/modules/lessons/lesson-05-review-questions.json', numQuestions: 20, passingScore: 80, storageKey: 'nz-wine-level3-review', passedKey: 'nz-wine-level3-passed', nextLevel: 4 }
  }
  return configs[props.currentLesson.id] || {
    bankPath: `/newzealand/modules/lessons/${props.currentLesson.id}-questions.json`,
    numQuestions: 10, passingScore: 80
  }
}
</script>

<style scoped>
.lesson-viewer { flex: 1; width: 100%; background: #f8f9fa; display: flex; flex-direction: column; color: #2d3748; padding-bottom: 60px; overflow-y: auto; overflow-x: hidden; }
.lesson-content { max-width: 100%; width: 100%; margin: 0; padding: 0; display: flex; flex-direction: column; box-sizing: border-box; }
.lesson-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px; gap: 20px; padding: 0 40px 24px 40px; border-bottom: 2px solid #e2e8f0; }
.lesson-meta h1 { font-size: 28px; font-weight: 700; margin: 0 0 12px 0; color: #2d3748; }
.lesson-details { display: flex; gap: 16px; flex-wrap: wrap; }
.duration, .type { font-size: 14px; color: #718096; background: #f7fafc; padding: 4px 12px; border-radius: 20px; border: 1px solid #e2e8f0; }
.complete-btn { padding: 12px 24px; background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); color: white; border: none; border-radius: 10px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.3s; white-space: nowrap; }
.complete-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(72,187,120,0.4); }
.complete-btn:disabled { opacity: 0.6; cursor: not-allowed; background: #a0aec0; }
.map-lesson { flex: 1; display: flex; flex-direction: column; }
.map-container { flex: 1; min-height: 600px; }
.slide-lesson { flex: 1; display: flex; flex-direction: column; min-height: 600px; }
.text-lesson { padding: 0 40px; }
.lesson-body { font-size: 18px; line-height: 1.8; color: #4a5568; }
.review-lesson { padding: 0 40px; }
/* Level Overview */
.level-overview { padding: 40px; }
.overview-container { max-width: 1000px; margin: 0 auto; }
.back-to-levels { margin-bottom: 24px; }
.back-to-levels-btn { padding: 10px 20px; background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 8px; cursor: pointer; font-size: 14px; color: #4a5568; transition: all 0.2s; }
.back-to-levels-btn:hover { background: #edf2f7; }
.overview-header { text-align: center; margin-bottom: 40px; }
.overview-header h1 { font-size: 32px; color: #2d3748; margin: 0 0 12px 0; }
.overview-subtitle { font-size: 18px; color: #718096; margin: 0 0 20px 0; }
.continue-btn { padding: 14px 32px; background: linear-gradient(135deg, #006400 0%, #004d00 100%); color: white; border: none; border-radius: 12px; font-size: 16px; font-weight: 600; cursor: pointer; margin-bottom: 16px; transition: all 0.3s; }
.continue-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 15px rgba(0,100,0,0.3); }
.overview-progress { font-size: 15px; color: #718096; }
.course-content-section h2 { font-size: 24px; color: #2d3748; margin-bottom: 20px; }
.lessons-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }
.module-section { display: contents; }
.lesson-card { display: flex; align-items: center; gap: 16px; padding: 16px 20px; background: white; border-radius: 12px; border: 2px solid #e2e8f0; cursor: pointer; transition: all 0.2s; }
.lesson-card:hover { border-color: #006400; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,100,0,0.1); }
.lesson-card.completed { border-color: #48bb78; background: #f0fff4; }
.lesson-card-icon { font-size: 20px; color: #48bb78; flex-shrink: 0; }
.lesson-card-content h3 { margin: 0 0 4px 0; font-size: 16px; color: #2d3748; }
.lesson-card-duration { font-size: 13px; color: #718096; }
/* Welcome screen */
.welcome-screen { flex: 1; display: flex; align-items: center; justify-content: center; padding: 40px; }
.cover-container { width: 100%; max-width: 1000px; }
.cover-header { text-align: center; margin-bottom: 40px; }
.cover-title h1 { font-size: 36px; color: #2d3748; margin: 0 0 8px 0; }
.cover-sub { font-size: 16px; color: #718096; margin: 0; }
.level-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; margin-bottom: 32px; }
.level-card { background: white; border-radius: 16px; overflow: hidden; border: 2px solid #e2e8f0; transition: all 0.3s; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
.level-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.12); border-color: #006400; }
.level-top { padding: 24px; display: flex; align-items: center; gap: 16px; }
.level-top-1 { background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); }
.level-top-2 { background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%); }
.level-top-3 { background: linear-gradient(135deg, #9f7aea 0%, #805ad5 100%); }
.level-top-4 { background: linear-gradient(135deg, #f6ad55 0%, #ed8936 100%); }
.level-badge { width: 48px; height: 48px; background: rgba(255,255,255,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 700; color: white; flex-shrink: 0; }
.level-info { color: white; }
.level-name { font-size: 18px; font-weight: 700; }
.level-subtitle { font-size: 13px; opacity: 0.8; }
.level-body { padding: 20px; }
.level-desc { font-size: 14px; color: #4a5568; line-height: 1.6; margin: 0 0 16px 0; }
.level-stats { display: flex; gap: 16px; }
.stat { text-align: center; flex: 1; }
.stat-num { font-size: 20px; font-weight: 700; color: #2d3748; }
.stat-label { font-size: 12px; color: #718096; }
.level-cta { padding: 0 20px 20px; }
.enter-btn { width: 100%; padding: 12px; background: linear-gradient(135deg, #006400 0%, #004d00 100%); color: white; border: none; border-radius: 10px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.3s; }
.enter-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,100,0,0.3); }
.bottom-actions { display: flex; justify-content: center; gap: 16px; }
.action-btn { padding: 14px 28px; border: none; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.3s; }
.explore-map-btn { background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%); color: white; }
.explore-map-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
@media (max-width: 768px) {
  .lesson-header { padding: 0 16px 16px 16px; flex-direction: column; }
  .text-lesson, .review-lesson { padding: 0 16px; }
  .level-overview { padding: 20px 16px; }
  .welcome-screen { padding: 20px 16px; }
  .level-cards { grid-template-columns: 1fr; }
  .lessons-grid { grid-template-columns: 1fr; }
}
</style>
