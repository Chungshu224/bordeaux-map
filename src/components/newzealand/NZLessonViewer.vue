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

    <!-- Welcome / Cover Screen（義大利風格） -->
    <div v-else class="nz-level-selection">
      <!-- 背景動畫 -->
      <div class="nz-background-animation">
        <div class="nz-wine-bubbles">
          <div v-for="i in 20" :key="i" class="nz-bubble" :style="getBubbleStyle(i)"></div>
        </div>
      </div>

      <div class="nz-main-container">
        <!-- 頂部品牌區域 -->
        <header class="nz-brand-header">
          <div class="nz-brand-logo">
            <div class="nz-wine-glass-icon">🥝</div>
            <div class="nz-brand-text">
              <h1 class="nz-brand-title">侍酒師的筆記本</h1>
              <p class="nz-brand-subtitle">New Zealand Wine Course</p>
            </div>
          </div>
          <div class="nz-user-panel">
            <template v-if="authUser">
              <div class="nz-user-avatar">
                <img v-if="avatarUrl" :src="avatarUrl" class="nz-avatar-img" />
                <span v-else class="nz-avatar-initial">{{ avatarInitial }}</span>
              </div>
              <div class="nz-user-info">
                <span class="nz-user-name">{{ displayName }}</span>
                <div class="nz-tier-badge" :class="`nz-tier-${userTier}`">
                  <span class="nz-tier-icon">{{ tierInfo.icon }}</span>
                  <span class="nz-tier-label">{{ tierInfo.label }}</span>
                </div>
                <div class="nz-user-btns">
                  <button class="nz-user-action-btn" @click="router.push('/')">🏠 首頁</button>
                  <button class="nz-user-action-btn" @click="router.push('/settings')">⚙️ 設定</button>
                  <button class="nz-user-action-btn nz-logout-btn" @click="handleLogout">登出</button>
                </div>
              </div>
            </template>
            <template v-else>
              <button class="nz-user-action-btn" @click="router.push('/login')">🔑 登入</button>
              <button class="nz-user-action-btn" @click="router.push('/register')">✏️ 註冊</button>
            </template>
          </div>
        </header>

        <!-- 快速功能入口 -->
        <section class="nz-quick-nav">
          <div class="nz-quick-nav-grid">
            <button class="nz-nav-card nz-nav-explore" @click="openMap">
              <span class="nz-nav-icon">🗺️</span>
              <span class="nz-nav-title">探索地圖</span>
              <span class="nz-nav-desc">互動式紐西蘭產區地圖・北島・南島</span>
              <span class="nz-nav-desc">查看已完成課程與學習記錄</span>
            </button>
            <button class="nz-nav-card nz-nav-achievement" @click="showAchievements = true">
              <span class="nz-nav-icon">🏆</span>
              <span class="nz-nav-title">成就系統</span>
              <span class="nz-nav-desc">解鎖成就・累積點數・查看等級</span>
            </button>
            <button class="nz-nav-card nz-nav-progress" @click="showProgress = true">
              <span class="nz-nav-icon">📊</span>
              <span class="nz-nav-title">學習進度</span>
              <span class="nz-nav-desc">正確率・學習時長・各課程詳細記錄</span>
            </button>
          </div>
        </section>

        <!-- 等級選擇卡片 -->
        <section class="nz-level-selection-grid">
          <div class="nz-grid-container">
            <div
              v-for="lvl of levels"
              :key="lvl"
              class="nz-level-card"
              :class="`nz-lv-${lvl}`"
              @click="enterLevel(lvl)"
            >
              <div class="nz-level-header">
                <div class="nz-level-badge-wrap">
                  <span class="nz-level-number">{{ lvl }}</span>
                  <div class="nz-level-icon-wrap">{{ getNZLevelIcon(lvl) }}</div>
                </div>
                <div class="nz-level-title-wrap">
                  <h3>{{ getLevelTitle(lvl) }}</h3>
                  <p>Level {{ lvl }}</p>
                </div>
              </div>
              <div class="nz-level-content">
                <div class="nz-level-description">{{ getLevelDescription(lvl) }}</div>
                <div class="nz-level-features">
                  <div v-for="feat in getNZLevelFeatures(lvl)" :key="feat.text" class="nz-feature-item">
                    <span class="nz-feature-icon">{{ feat.icon }}</span>
                    <span>{{ feat.text }}</span>
                  </div>
                </div>
                <div class="nz-level-stats">
                  <div class="nz-stat-item">
                    <span class="nz-stat-number">{{ statsByLevel[lvl] ? statsByLevel[lvl].lessons : 0 }}</span>
                    <span class="nz-stat-label">個課程</span>
                  </div>
                  <div class="nz-stat-item">
                    <span class="nz-stat-number">{{ statsByLevel[lvl] ? statsByLevel[lvl].hours : 0 }}</span>
                    <span class="nz-stat-label">小時</span>
                  </div>
                  <div class="nz-stat-item">
                    <span class="nz-stat-number">{{ statsByLevel[lvl] ? statsByLevel[lvl].progress : 0 }}%</span>
                    <span class="nz-stat-label">完成度</span>
                  </div>
                </div>
              </div>
              <div class="nz-level-action">
                <button class="nz-level-btn">
                  <span v-if="!statsByLevel[lvl] || statsByLevel[lvl].progress === 0">開始學習</span>
                  <span v-else-if="statsByLevel[lvl].progress === 100">重新學習</span>
                  <span v-else>繼續學習</span>
                  <span class="nz-btn-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- 雲端同步提示 -->
        <div v-if="!authUser" class="nz-sync-hint-bar">
          📍 登入後可將學習進度同步至雲端
        </div>
      </div>

      <!-- 成就彈窗 -->
      <div v-if="showAchievements" class="nz-modal-overlay" @click="showAchievements = false">
        <div class="nz-achievement-modal" @click.stop>
          <div class="nz-modal-header">
            <h3>🏆 學習成就</h3>
            <button class="nz-close-btn" @click="showAchievements = false">×</button>
          </div>
          <div class="nz-modal-content">
            <AchievementsDashboard course-key="newzealand" @back="showAchievements = false" />
          </div>
        </div>
      </div>

      <!-- 進度彈窗 -->
      <div v-if="showProgress" class="nz-modal-overlay" @click="showProgress = false">
        <div class="nz-progress-modal" @click.stop>
          <div class="nz-modal-header">
            <h3>📊 紐西蘭課程學習進度</h3>
            <button class="nz-close-btn" @click="showProgress = false">×</button>
          </div>
          <div class="nz-modal-content">
            <LearningProgressDashboard course-key="newzealand" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { authState, authActions } from '../../stores/authStore.js'
import { supabase } from '../../lib/supabaseClient.js'
import NZMapPage from './NZMapPage.vue'
import NZSlideViewer from './NZSlideViewer.vue'
import NZReviewQuiz from './NZReviewQuiz.vue'
import NZLevelSelector from './NZLevelSelector.vue'
import AchievementsDashboard from '../AchievementsDashboard.vue'
import LearningProgressDashboard from '../LearningProgressDashboard.vue'

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

const router = useRouter()

// ── 首頁狀態 ──
const showProgress = ref(false)
const showAchievements = ref(false)
const avatarUrl = ref('')
const avatarInitial = ref('我')

// ── Auth ──
const authUser = computed(() => authState.user)
const displayName = computed(() => authActions.getDisplayName())
const TIER_INFO = {
  free:    { label: '品飲新手 Explorer',     icon: '🌱' },
  basic:   { label: '進階愛好者 Enthusiast', icon: '🍇' },
  premium: { label: '專業達人 Professional', icon: '🏆' }
}
const userTier = computed(() => authActions.getEffectiveTier())
const tierInfo = computed(() => TIER_INFO[userTier.value] || TIER_INFO.free)

async function handleLogout() {
  await authActions.signOut()
  router.push('/')
}

function getBubbleStyle(index) {
  const seed = index * 137.5
  return {
    left: `${(seed * 7) % 100}%`,
    animationDelay: `${seed % 5}s`,
    animationDuration: `${3 + (seed % 4)}s`,
    width: `${0.5 + (seed % 15) / 10}rem`,
    height: `${0.5 + (seed % 15) / 10}rem`
  }
}

function getNZLevelIcon(lvl) {
  const icons = { 1: '🥝', 2: '🍷', 3: '🏆', 4: '🌿' }
  return icons[lvl] || '🍾'
}

function getNZLevelFeatures(lvl) {
  const map = {
    1: [
      { icon: '🗺️', text: '北島・南島地理概覽' },
      { icon: '🌿', text: 'Sauvignon Blanc 核心品種' },
      { icon: '🌊', text: 'Marlborough 產區特色' },
      { icon: '🍾', text: '清爽風格釀造工藝' },
    ],
    2: [
      { icon: '🏔️', text: 'Central Otago Pinot Noir' },
      { icon: '🌅', text: "Hawke's Bay 紅白佳釀" },
      { icon: '🔬', text: '風土條件深入分析' },
      { icon: '🥂', text: '品鑑技巧與描述' },
    ],
    3: [
      { icon: '🌡️', text: '氣候變遷的影響' },
      { icon: '💎', text: '稀有品種與小產區' },
      { icon: '📈', text: '市場趨勢投資策略' },
      { icon: '🌿', text: '永續農業・有機酒' },
    ],
    4: [
      { icon: '🎯', text: '系統化盲品方法' },
      { icon: '🥂', text: '侍酒師實務技能' },
      { icon: '🌏', text: '國際市場地位' },
      { icon: '🏆', text: '專業鑑評認證' },
    ],
  }
  return map[lvl] || [{ icon: '📚', text: '課程學習' }]
}

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

onMounted(async () => {
  const user = authState.user
  if (user) {
    const fallback = user.user_metadata?.full_name || user.email?.split('@')[0] || '我'
    avatarInitial.value = [...fallback][0] || '我'
    if (supabase) {
      const { data: pd } = await supabase.from('profiles').select('display_name,avatar_url').eq('id', user.id).single()
      if (pd) {
        avatarUrl.value = pd.avatar_url || ''
        if (pd.display_name) avatarInitial.value = [...pd.display_name][0] || avatarInitial.value
      }
    }
  }
})

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

/* ════════════════════════════════════════════════════════════════
   NZ 課程首頁 — 義大利風格
   ════════════════════════════════════════════════════════════════ */
.nz-level-selection {
  min-height: 100vh;
  background: linear-gradient(135deg, #00533e 0%, #1a7a56 25%, #40916c 50%, #1e6091 75%, #023e8a 100%);
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
}

/* 背景動畫 */
.nz-background-animation {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}
.nz-wine-bubbles { position: relative; width: 100%; height: 100%; }
.nz-bubble {
  position: absolute;
  bottom: -2rem;
  background: rgba(255,255,255,0.08);
  border-radius: 50%;
  animation: nz-float-up linear infinite;
  backdrop-filter: blur(2px);
}
@keyframes nz-float-up {
  0%   { transform: translateY(0) scale(1); opacity: 0.5; }
  100% { transform: translateY(-110vh) scale(1.2); opacity: 0; }
}

/* 主容器 */
.nz-main-container {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 2rem 4rem;
}

/* ── 品牌 Header ── */
.nz-brand-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background: rgba(0,0,0,0.22);
  backdrop-filter: blur(16px);
  border-radius: 20px;
  margin-bottom: 2rem;
  border: 1px solid rgba(255,255,255,0.15);
  flex-wrap: wrap;
  gap: 1rem;
}
.nz-brand-logo { display: flex; align-items: center; gap: 1rem; }
.nz-wine-glass-icon { font-size: 3rem; filter: drop-shadow(0 0 12px rgba(255,255,255,0.35)); }
.nz-brand-text { color: white; }
.nz-brand-title { font-size: 1.8rem; font-weight: 800; margin: 0; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); }
.nz-brand-subtitle { font-size: 0.9rem; opacity: 0.8; margin: 0; font-style: italic; }

/* 使用者面板 */
.nz-user-panel { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
.nz-user-avatar {
  width: 52px; height: 52px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
  border: 2px solid rgba(255,255,255,0.4);
  flex-shrink: 0;
}
.nz-avatar-img { width: 100%; height: 100%; object-fit: cover; }
.nz-avatar-initial { color: white; font-size: 1.3rem; font-weight: 700; }
.nz-user-info { display: flex; flex-direction: column; gap: 4px; }
.nz-user-name { color: white; font-weight: 600; font-size: 1rem; }
.nz-tier-badge {
  display: inline-flex; align-items: center; gap: 4px;
  padding: 3px 10px; border-radius: 20px;
  font-size: 0.78rem; font-weight: 600;
  background: rgba(255,255,255,0.2); color: white;
}
.nz-user-btns { display: flex; gap: 6px; flex-wrap: wrap; }
.nz-user-action-btn {
  padding: 5px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.15);
  color: white;
  font-size: 0.82rem;
  cursor: pointer;
  transition: all 0.2s;
  backdrop-filter: blur(4px);
}
.nz-user-action-btn:hover { background: rgba(255,255,255,0.28); transform: translateY(-1px); }
.nz-logout-btn { background: rgba(220,50,50,0.25); border-color: rgba(220,50,50,0.5); }

/* ── 快速入口 ── */
.nz-quick-nav { margin-bottom: 2rem; }
.nz-quick-nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
.nz-nav-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.4rem 1.6rem;
  border-radius: 16px;
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  gap: 6px;
}
.nz-nav-card:hover {
  background: rgba(255,255,255,0.22);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}
.nz-nav-icon { font-size: 1.8rem; }
.nz-nav-title { font-size: 1.05rem; font-weight: 700; }
.nz-nav-desc { font-size: 0.82rem; opacity: 0.75; line-height: 1.4; }
.nz-nav-achievement {
  background: rgba(255, 215, 0, 0.18);
  border-color: rgba(255, 215, 0, 0.4);
}
.nz-nav-achievement:hover {
  background: rgba(255, 215, 0, 0.32);
  box-shadow: 0 8px 24px rgba(255, 215, 0, 0.25);
}

/* ── Level 卡片 ── */
.nz-level-selection-grid { margin-bottom: 2rem; }
.nz-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
.nz-level-card {
  background: rgba(255,255,255,0.96);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}
.nz-level-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0,0,0,0.25);
}
/* Level 漸層顏色 */
.nz-lv-1 .nz-level-header { background: linear-gradient(135deg, #00533e, #40916c); }
.nz-lv-2 .nz-level-header { background: linear-gradient(135deg, #1e6091, #0077b6); }
.nz-lv-3 .nz-level-header { background: linear-gradient(135deg, #7b2d8b, #9d4edd); }
.nz-lv-4 .nz-level-header { background: linear-gradient(135deg, #c77000, #f4a261); }

.nz-level-header {
  padding: 1.4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
}
.nz-level-badge-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 56px; height: 56px;
  background: rgba(255,255,255,0.22);
  border-radius: 50%;
  flex-shrink: 0;
}
.nz-level-number { font-size: 1.1rem; font-weight: 800; line-height: 1; }
.nz-level-icon-wrap { font-size: 1rem; }
.nz-level-title-wrap h3 { margin: 0 0 2px; font-size: 1.15rem; font-weight: 700; }
.nz-level-title-wrap p { margin: 0; font-size: 0.82rem; opacity: 0.8; }

.nz-level-content { padding: 1.2rem 1.4rem; flex: 1; }
.nz-level-description {
  font-size: 0.9rem; color: #4a5568; line-height: 1.6;
  margin-bottom: 1rem;
}
.nz-level-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  margin-bottom: 1rem;
}
.nz-feature-item {
  display: flex; align-items: center; gap: 6px;
  font-size: 0.82rem; color: #4a5568;
}
.nz-feature-icon { font-size: 0.95rem; flex-shrink: 0; }
.nz-level-stats {
  display: flex; gap: 1rem;
  padding: 0.8rem;
  background: #f7fafc; border-radius: 10px;
}
.nz-stat-item { text-align: center; flex: 1; }
.nz-stat-number { display: block; font-size: 1.3rem; font-weight: 700; color: #2d3748; }
.nz-stat-label { font-size: 0.72rem; color: #718096; }

.nz-level-action { padding: 0 1.4rem 1.4rem; }
.nz-level-btn {
  width: 100%;
  padding: 0.8rem 1rem;
  border: none; border-radius: 12px;
  font-size: 0.95rem; font-weight: 600;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 6px;
  transition: all 0.3s;
  background: linear-gradient(135deg, #00533e, #40916c);
  color: white;
}
.nz-level-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 14px rgba(0,83,62,0.35); }
.nz-btn-arrow { font-size: 1rem; }

/* 同步提示 */
.nz-sync-hint-bar {
  text-align: center;
  padding: 0.75rem 1.5rem;
  background: rgba(0,0,0,0.2);
  color: rgba(255,255,255,0.85);
  border-radius: 12px;
  font-size: 0.88rem;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.15);
}

/* 彈窗 */
.nz-modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 9999;
  display: flex; align-items: center; justify-content: center;
  padding: 2rem;
}
.nz-achievement-modal,
.nz-progress-modal {
  background: white;
  border-radius: 20px;
  width: 100%; max-width: 680px;
  max-height: 85vh;
  display: flex; flex-direction: column;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}
.nz-modal-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.2rem 1.6rem;
  border-bottom: 1px solid #e2e8f0;
  flex-shrink: 0;
}
.nz-modal-header h3 { margin: 0; font-size: 1.1rem; font-weight: 700; color: #2d3748; }
.nz-close-btn {
  width: 32px; height: 32px; border-radius: 50%;
  border: none; background: #f7fafc; color: #4a5568;
  font-size: 1.2rem; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s;
}
.nz-close-btn:hover { background: #edf2f7; }
.nz-modal-content { overflow-y: auto; padding: 1.2rem; flex: 1; }

/* RWD */
@media (max-width: 768px) {
  .nz-main-container { padding: 1rem 1rem 3rem; }
  .nz-brand-header { padding: 1rem 1.2rem; flex-direction: column; align-items: flex-start; }
  .nz-brand-title { font-size: 1.3rem; }
  .nz-quick-nav-grid { grid-template-columns: 1fr; }
  .nz-grid-container { grid-template-columns: 1fr; }
  .nz-level-features { grid-template-columns: 1fr; }
}
</style>
