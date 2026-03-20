<template>
  <div class="presentation-lesson">
    <!-- 載入狀態 -->
    <div v-if="isLoading" class="loading-state">
      <div class="loading-spinner"></div>
      <p>載入課程內容中...</p>
    </div>

    <!-- 錯誤狀態 -->
    <div v-else-if="loadError" class="error-state">
      <div class="error-icon">⚠️</div>
      <h3>載入失敗</h3>
      <p>{{ loadError }}</p>
      <button @click="retryLoad" class="retry-btn">重新載入</button>
    </div>

    <!-- 主要內容 -->
    <div v-else class="lesson-content">
      <!-- 課程進度指示器 -->
      <div class="progress-indicator">
        <div class="slide-counter">
          {{ currentSlide + 1 }} / {{ totalSlides }}
        </div>
        <div class="progress-bar">
          <div 
            class="progress-fill" 
            :style="{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }"
          ></div>
        </div>
      </div>

      <!-- 簡報幻燈片 -->
      <div class="slide-container">
        <transition name="slide" mode="out-in">
          <div :key="currentSlide" class="slide">
            <!-- 標題頁 -->
            <div v-if="currentSlide === 0" class="title-slide">
              <h1 class="slide-title">{{ lessonData.title }}</h1>
              <h2 class="slide-subtitle">{{ lessonData.subtitle }}</h2>
              <div class="slide-meta">
                <span class="duration">📚 {{ lessonData.duration }}</span>
                <span class="difficulty">⭐ {{ lessonData.difficulty }}</span>
              </div>
              <div class="objectives-preview">
                <h3>學習目標</h3>
                <ul>
                  <li v-for="objective in lessonData.objectives" :key="objective">
                    {{ objective }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- 內容幻燈片 -->
            <div v-else-if="currentSlideData" class="content-slide">
              <h2 class="slide-heading">{{ currentSlideData.title }}</h2>
              
              <!-- 重點標記 -->
              <div v-if="currentSlideData.highlights" class="highlights-section">
                <div 
                  v-for="highlight in currentSlideData.highlights" 
                  :key="highlight.id"
                  class="highlight-card"
                >
                  <div class="highlight-icon">{{ highlight.icon }}</div>
                  <div class="highlight-content">
                    <h4>{{ highlight.title }}</h4>
                    <p>{{ highlight.content }}</p>
                  </div>
                </div>
              </div>

              <!-- 主要內容 -->
              <div v-if="currentSlideData.content" class="main-content">
                <div v-html="currentSlideData.content"></div>
              </div>

              <!-- 地圖顯示 -->
              <div v-if="currentSlideData.hasMap" class="map-section">
                <button @click="toggleMap" class="map-toggle-btn">
                  {{ showMap ? '隱藏地圖' : '顯示地圖' }}
                </button>
                <div v-if="showMap" class="map-container">
                  <iframe 
                    :src="currentSlideData.mapUrl || '/map-placeholder.html'"
                    class="interactive-map"
                    title="互動地圖"
                  ></iframe>
                </div>
              </div>

              <!-- 測驗區塊 -->
              <div v-if="currentSlideData.quiz" class="quiz-section">
                <h3 class="quiz-title">💡 知識檢測</h3>
                <p class="quiz-question">{{ enhanceText(currentSlideData.quiz.question) }}</p>
                <div class="quiz-options">
                  <button 
                    v-for="(option, index) in currentSlideData.quiz.options"
                    :key="index"
                    @click="selectAnswer(index)"
                    :class="getQuizOptionClass(index)"
                    :disabled="quizAnswered"
                  >
                    {{ enhanceText(option) }}
                  </button>
                </div>
                <div v-if="quizAnswered" class="quiz-feedback">
                  <p :class="['feedback-text', quizCorrect ? 'correct' : 'incorrect']">
                    {{ quizCorrect ? '✅ 答對了！' : '❌ 再想想看' }}
                  </p>
                  <p class="quiz-explanation">{{ enhanceText(currentSlideData.quiz.explanation) }}</p>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- 導航控制 -->
      <div class="navigation-controls">
        <button 
          @click="previousSlide" 
          :disabled="currentSlide === 0"
          class="nav-btn prev-btn"
        >
          ← 上一頁
        </button>

        <div class="slide-indicators">
          <button 
            v-for="(slide, index) in slides" 
            :key="index"
            @click="goToSlide(index)"
            :class="['slide-dot', { active: currentSlide === index }]"
          >
          </button>
        </div>

        <button 
          @click="nextSlide" 
          :disabled="currentSlide === totalSlides - 1"
          class="nav-btn next-btn"
        >
          下一頁 →
        </button>
      </div>

      <!-- 課程完成提示 -->
      <div v-if="currentSlide === totalSlides - 1 && showCompletionCard" class="completion-section">
        <div class="completion-card">
          <button @click="closeCompletionCard" class="close-completion-btn" title="關閉">✕</button>
          <h3>🎉 課程完成！</h3>
          <p>恭喜您完成了「{{ lessonData.title }}」課程</p>
          <div class="completion-actions">
            <button @click="restartLesson" class="restart-btn">🔄 重新開始</button>
            <button @click="nextLesson" class="next-lesson-btn">➡️ 下一課程</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { loadLessonContent } from '../data/lessonManager.js'
import { enhanceText as enhanceTextUtil } from '../utils/textEnhancers.js'

function enhanceText(text) { return enhanceTextUtil(text) }

const props = defineProps({
  lessonId: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['lessonComplete', 'nextLesson'])

// 響應式數據
const currentSlide = ref(0)
const showMap = ref(false)
const quizAnswered = ref(false)
const selectedAnswer = ref(null)
const quizCorrect = ref(false)
const showCompletionCard = ref(true)
const isLoading = ref(false)
const loadError = ref(null)
const lessonContent = ref([])

// 課程數據映射 - 僅包含元數據
const lessonDataMap = {
  // L1 基礎課程
  'l1-1': {
    title: '認識波爾多地理位置',
    subtitle: '了解波爾多產區的地理環境與位置特色',
    duration: '8分鐘',
    difficulty: 'Level 1',
    objectives: [
      '掌握波爾多在法國的地理位置',
      '理解三河匯流的獨特地理環境',
      '認識左岸與右岸的劃分概念',
      '了解主要產區的分佈與特色'
    ]
  },
  'l1-2': {
    title: '波爾多氣候與環境基礎',
    subtitle: '探索影響波爾多葡萄酒品質的自然環境因素',
    duration: '10分鐘',
    difficulty: 'Level 1',
    objectives: [
      '掌握波爾多溫帶海洋性氣候特徵',
      '理解河流系統對氣候的調節作用',
      '認識四季變化對葡萄生長的影響',
      '了解環境因素如何影響葡萄酒品質'
    ]
  },
  'l1-3': {
    title: '主要葡萄品種介紹',
    subtitle: '認識波爾多的經典葡萄品種與風味特色',
    duration: '12分鐘',
    difficulty: 'Level 1',
    objectives: [
      '識別紅葡萄品種：Cabernet Sauvignon、Merlot、Cabernet Franc',
      '了解白葡萄品種：Sauvignon Blanc、Sémillon',
      '學習各品種的風味特徵與種植特性',
      '理解品種在波爾多混釀中的作用'
    ]
  },
  'l1-4': {
    title: '左岸與右岸初探',
    subtitle: '探索波爾多兩岸的地理、土壤與風格差異',
    duration: '15分鐘',
    difficulty: 'Level 1',
    objectives: [
      '識別左岸與右岸的地理位置',
      '了解兩岸主要葡萄品種差異',
      '認識土壤類型的基本概念',
      '理解兩岸酒款風格的不同特色'
    ]
  },
  'l1-5': {
    title: '波爾多酒款類型概覽',
    subtitle: '認識紅酒、白酒、甜酒的多樣世界',
    duration: '14分鐘',
    difficulty: 'Level 1',
    objectives: [
      '區分紅酒、白酒、甜酒的基本特徵',
      '了解各類型酒款的釀造工藝差異',
      '認識酒標上的重要資訊',
      '掌握基本的品鑑與選酒知識'
    ]
  },
  'l1-6': {
    title: 'AOC系統入門',
    subtitle: '理解法國葡萄酒法規與品質保證體系',
    duration: '12分鐘',
    difficulty: 'Level 1',
    objectives: [
      '掌握AOC分級制度的基本概念',
      '了解波爾多AOC層級結構',
      '學習如何閱讀酒標上的AOC資訊',
      '理解AOC對品質控制的意義'
    ]
  },
  'l1-7': {
    title: '品酒基礎技巧',
    subtitle: '掌握專業品酒的基本方法與技巧',
    duration: '18分鐘',
    difficulty: 'Level 1',
    objectives: [
      '學習正確的品酒步驟：觀色、聞香、品味',
      '掌握品酒詞彙與風味描述方法',
      '了解品酒環境與工具的重要性',
      '培養基本的感官分析能力'
    ]
  },
  'l1-8': {
    title: 'Level 1 總結與評估',
    subtitle: '回顧學習成果並進行綜合測驗',
    duration: '20分鐘',
    difficulty: 'Level 1',
    objectives: [
      '總結Level 1所有核心知識點',
      '通過綜合測驗評估學習成效',
      '識別需要強化的知識領域',
      '準備進入Level 2中級課程'
    ]
  },
  
  // L2 中級課程
  'l2-1': {
    title: 'Médoc產區深度探索',
    subtitle: '左岸四大村莊的風土差異與釀酒哲學',
    duration: '35分鐘',
    difficulty: 'Level 2',
    objectives: [
      '深入了解Médoc半島的地理與土壤構成',
      '掌握1855分級制度的歷史背景與現代意義',
      '學習Médoc產區的釀酒工藝與技術演進',
      '理解不同子產區的風土特色與酒款風格'
    ]
  },
  'l2-2': {
    title: 'Margaux - 優雅的香水之鄉',
    subtitle: '最優雅產區的獨特魅力與代表酒莊',
    duration: '30分鐘',
    difficulty: 'Level 2',
    objectives: [
      '探索Margaux產區的獨特砂質土壤特性',
      '深入了解Château Margaux等頂級酒莊',
      '掌握Margaux酒款的優雅風格特徵',
      '學習品鑑Margaux酒款的專業技巧'
    ]
  },
  'l2-3': {
    title: 'Pauillac - 王者風範的產區',
    subtitle: '三大一級酒莊的故鄉與其釀酒傳奇',
    duration: '35分鐘',
    difficulty: 'Level 2',
    objectives: [
      '深入了解Pauillac產區的地理與氣候特色',
      '學習Lafite、Latour、Mouton三大酒莊歷史',
      '掌握Pauillac酒款的強勁風格特徵',
      '理解頂級波爾多酒款的投資與收藏價值'
    ]
  },
  'l2-4': {
    title: 'Saint-Julien - 平衡的典範',
    subtitle: '最均衡產區的風格特色與名莊解析',
    duration: '32分鐘',
    difficulty: 'Level 2',
    objectives: [
      '探索Saint-Julien產區的獨特位置優勢',
      '深入了解Léoville家族酒莊的傳承',
      '掌握Saint-Julien酒款的平衡風格',
      '學習評估酒款平衡性的專業標準'
    ]
  },
  'l2-5': {
    title: 'Saint-Estèphe - 北地之珠',
    subtitle: '風格最獨特產區的現代化轉型',
    duration: '34分鐘',
    difficulty: 'Level 2',
    objectives: [
      '了解Saint-Estèphe產區的北部地理特色',
      '學習黏土土壤對酒款風格的影響',
      '探索傳統與現代釀酒技術的結合',
      '掌握Saint-Estèphe酒款的深邃風格特徵'
    ]
  },
  'l2-6': {
    title: 'Pomerol - 稀世珍寶',
    subtitle: '波爾多最小最精品的頂級產區',
    duration: '32分鐘',
    difficulty: 'Level 2',
    objectives: [
      '探索Pomerol產區的獨特地理環境',
      '深入了解Petrus等傳奇酒莊',
      '掌握Merlot在Pomerol的卓越表現',
      '學習頂級Pomerol酒款的品鑑與收藏'
    ]
  },
  'l2-7': {
    title: '聖愛美濃深度探索',
    subtitle: '右岸明珠的風土傳奇與現代榮光',
    duration: '38分鐘',
    difficulty: 'Level 2',
    objectives: [
      '深入了解Saint-Émilion的地理與歷史背景',
      '掌握Saint-Émilion分級制度與其演變',
      '學習石灰岩高原與沙質平原的土壤差異',
      '探索Saint-Émilion在現代市場的品牌價值與收藏投資潛力'
    ]
  }
}

// 計算屬性
const lessonData = computed(() => {
  return lessonDataMap[props.lessonId] || lessonDataMap['l1-1']
})

const slides = computed(() => {
  return lessonContent.value
})

const totalSlides = computed(() => slides.value.length)

const currentSlideData = computed(() => {
  return slides.value[currentSlide.value] || null
})

const getQuizOptionClass = computed(() => {
  return (index) => {
    if (!quizAnswered.value) return 'quiz-option'
    if (index === selectedAnswer.value) {
      return quizCorrect.value ? 'quiz-option correct' : 'quiz-option incorrect'
    }
    if (index === currentSlideData.value?.quiz?.correct) {
      return 'quiz-option correct'
    }
    return 'quiz-option'
  }
})

// 載入課程內容
const loadLessonContentMethod = async () => {
  if (!props.lessonId) return
  
  isLoading.value = true
  loadError.value = null
  
  try {
    console.log('Loading lesson content for:', props.lessonId)
    const content = await loadLessonContent(props.lessonId)
    
    if (content && Array.isArray(content) && content.length > 0) {
      lessonContent.value = content
      console.log('Lesson content loaded successfully:', content.length, 'slides')
    } else {
      throw new Error('課程內容為空或格式錯誤')
    }
  } catch (error) {
    console.error('載入課程內容失敗:', error)
    loadError.value = error.message || '載入課程內容時發生錯誤'
  } finally {
    isLoading.value = false
  }
}

// 重新載入方法
const retryLoad = () => {
  loadLessonContentMethod()
}

// 導航方法
const nextSlide = () => {
  if (currentSlide.value < totalSlides.value - 1) {
    currentSlide.value++
    resetQuiz()
  }
}

const previousSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
    resetQuiz()
  }
}

const goToSlide = (index) => {
  currentSlide.value = index
  resetQuiz()
}

// 地圖控制
const toggleMap = () => {
  showMap.value = !showMap.value
}

// 測驗方法
const selectAnswer = (index) => {
  if (quizAnswered.value) return
  
  selectedAnswer.value = index
  quizAnswered.value = true
  quizCorrect.value = index === currentSlideData.value?.quiz?.correct
}

const resetQuiz = () => {
  quizAnswered.value = false
  selectedAnswer.value = null
  quizCorrect.value = false
  showMap.value = false
}

// 課程完成控制
const closeCompletionCard = () => {
  showCompletionCard.value = false
}

const restartLesson = () => {
  currentSlide.value = 0
  showCompletionCard.value = true
  resetQuiz()
}

const nextLesson = () => {
  emit('nextLesson')
}

// 生命週期和響應式處理
watch(() => props.lessonId, (newLessonId) => {
  if (newLessonId) {
    currentSlide.value = 0
    resetQuiz()
    loadLessonContentMethod()
  }
}, { immediate: true })

onMounted(() => {
  resetQuiz()
})
</script>

<style scoped>
/* 基礎樣式 */
.presentation-lesson {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  font-family: 'Microsoft JhengHei', 'Arial', sans-serif;
}

/* 載入和錯誤狀態 */
.loading-state, .error-state {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  background: white;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.retry-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 1rem;
  transition: background 0.3s ease;
}

.retry-btn:hover {
  background: #5a6fd8;
}

/* 課程內容區域 */
.lesson-content {
  width: 100%;
}

/* 進度指示器 */
.progress-indicator {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem 2rem;
  border-radius: 25px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.slide-counter {
  font-weight: bold;
  color: #333;
  font-size: 1.1rem;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  margin: 0 2rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 3px;
  transition: width 0.5s ease;
}

/* 幻燈片容器 */
.slide-container {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  min-height: 70vh;
}

.slide {
  height: 100%;
}

/* 標題頁樣式 */
.title-slide {
  text-align: center;
  padding: 2rem 0;
}

.slide-title {
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: bold;
}

.slide-subtitle {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
  font-weight: normal;
}

.slide-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.slide-meta span {
  background: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
}

.objectives-preview {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
}

.objectives-preview h3 {
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
}

.objectives-preview ul {
  list-style: none;
  padding: 0;
}

.objectives-preview li {
  background: white;
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

/* 內容幻燈片樣式 */
.content-slide {
  padding: 1rem 0;
}

.slide-heading {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
}

/* 重點標記區域 */
.highlights-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.highlight-card {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #667eea;
  transition: transform 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.highlight-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.highlight-content h4 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.highlight-content p {
  color: #666;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* 主要內容區域 */
.main-content {
  margin: 2rem 0;
  line-height: 1.6;
  color: #333;
}

/* 地圖區域 */
.map-section {
  margin: 2rem 0;
}

.map-toggle-btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 1rem;
  transition: background 0.3s ease;
}

.map-toggle-btn:hover {
  background: #218838;
}

.map-container {
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.interactive-map {
  width: 100%;
  height: 100%;
  border: none;
}

/* 測驗區域 */
.quiz-section {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.quiz-title {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.quiz-question {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.quiz-options {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.quiz-option {
  background: white;
  border: 2px solid #e9ecef;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.quiz-option:hover:not(:disabled) {
  border-color: #667eea;
  background: #f0f4ff;
}

.quiz-option.correct {
  background: #d4edda;
  border-color: #28a745;
  color: #155724;
}

.quiz-option.incorrect {
  background: #f8d7da;
  border-color: #dc3545;
  color: #721c24;
}

.quiz-option:disabled {
  cursor: not-allowed;
}

.quiz-feedback {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
}

.feedback-text {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.feedback-text.correct {
  color: #28a745;
}

.feedback-text.incorrect {
  color: #dc3545;
}

.quiz-explanation {
  color: #666;
  font-style: italic;
  margin: 0;
}

/* 導航控制 */
.navigation-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem 2rem;
  border-radius: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.nav-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.nav-btn:hover:not(:disabled) {
  background: #5a6fd8;
  transform: translateY(-1px);
}

.nav-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  transform: none;
}

.slide-indicators {
  display: flex;
  gap: 0.5rem;
}

.slide-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #ccc;
  cursor: pointer;
  transition: all 0.3s ease;
}

.slide-dot.active {
  background: #667eea;
  transform: scale(1.2);
}

.slide-dot:hover {
  background: #667eea;
}

/* 課程完成區域 */
.completion-section {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.completion-card {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  position: relative;
  max-width: 500px;
  margin: 2rem;
}

.close-completion-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #999;
  transition: color 0.3s ease;
}

.close-completion-btn:hover {
  color: #333;
}

.completion-card h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.completion-card p {
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.completion-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.restart-btn, .next-lesson-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.restart-btn {
  background: #6c757d;
  color: white;
}

.restart-btn:hover {
  background: #5a6268;
}

.next-lesson-btn {
  background: #28a745;
  color: white;
}

.next-lesson-btn:hover {
  background: #218838;
}

/* 過渡動畫 */
.slide-enter-active, .slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .presentation-lesson {
    padding: 1rem;
  }
  
  .slide-title {
    font-size: 2rem;
  }
  
  .slide-subtitle {
    font-size: 1.2rem;
  }
  
  .slide-heading {
    font-size: 1.8rem;
  }
  
  .slide-container {
    padding: 2rem 1.5rem;
  }
  
  .highlights-section {
    grid-template-columns: 1fr;
  }
  
  .slide-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .navigation-controls {
    padding: 1rem;
  }
  
  .completion-actions {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .slide-title {
    font-size: 1.5rem;
  }
  
  .slide-container {
    padding: 1.5rem 1rem;
  }
  
  .slide-dot {
    width: 8px;
    height: 8px;
  }
  
  .nav-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>