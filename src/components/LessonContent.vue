<template>
  <div class="lesson-content" ref="rootEl">
    <!-- 課程標題區 -->
    <header class="lesson-header">
      <div class="lesson-navigation">
        <button 
          class="nav-btn prev-btn" 
          @click="$emit('previousLesson')"
          :disabled="!hasPreviousLesson"
        >
          ← 上一課
        </button>
        
        <div class="lesson-info">
          <h1 class="lesson-title">{{ lesson?.title || '課程標題' }}</h1>
          <p class="lesson-description">{{ lesson?.description || '' }}</p>
          <div class="lesson-meta">
            <span class="duration">⏱ {{ lesson?.duration || 0 }}分鐘</span>
            <span class="objectives-count">🎯 {{ lesson.objectives?.length || 0 }}個學習目標</span>
          </div>
        </div>

        <button 
          class="nav-btn next-btn" 
          @click="handleNextLesson"
          :disabled="!canProceed"
        >
          {{ isCompleted ? '下一課 →' : '完成課程 →' }}
        </button>
      </div>

      <!-- 學習目標 -->
      <div class="objectives-section" v-if="showObjectives">
        <h3 class="objectives-title">
          <button class="toggle-btn" @click="toggleObjectives">
            {{ objectivesExpanded ? '▼' : '▶' }} 學習目標
          </button>
        </h3>
        <div v-show="objectivesExpanded" class="objectives-list">
          <div 
            v-for="(objective, index) in (lesson.objectives || [])" 
            :key="index"
            :class="['objective-item', { completed: completedObjectives.includes(index) }]"
          >
            <span class="objective-check" @click="toggleObjective(index)">
              {{ completedObjectives.includes(index) ? '✓' : '○' }}
            </span>
            <span class="objective-text">{{ objective }}</span>
          </div>
        </div>
      </div>
    </header>

    <!-- 主要學習內容區域 -->
    <main class="lesson-main">
      <div :class="['content-layout', lesson?.mapFocus ? 'with-map' : 'no-map']">
        <!-- 左側：地圖整合區域 -->
        <section class="map-integration" v-if="lesson?.mapFocus">
          <div class="map-container">
            <h3 class="section-title">互動地圖</h3>
            <div class="map-controls">
              <button 
                v-for="control in mapControls" 
                :key="control.id"
                :class="['map-control-btn', { active: activeMapControl === control.id }]"
                @click="setMapControl(control.id)"
              >
                {{ control.label }}
              </button>
            </div>
            
            <!-- 這裡整合您的現有地圖組件 -->
            <div class="integrated-map">
              <BordeauxMapIntegration 
                :lessonFocus="lesson?.mapFocus"
                :interactiveElements="lesson.interactiveElements || []"
                :levelFeatures="levelData.features || []"
                @mapInteraction="handleMapInteraction"
                @regionSelected="handleRegionSelected"
              />
            </div>

            <!-- 地圖相關提示 -->
            <div class="map-hints" v-if="currentMapHints.length > 0">
              <h4>💡 地圖探索提示</h4>
              <ul class="hints-list">
                <li v-for="hint in currentMapHints" :key="hint.id" class="hint-item">
                  {{ hint.text }}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- 右側：課程內容與活動 -->
        <section class="content-panel">
          <!-- 理論知識區 -->
          <div class="knowledge-section">
            <h3 class="section-title">課程重點</h3>
            
            <!-- 如果有詳細內容，顯示詳細內容 -->
            <div v-if="detailedContent" class="detailed-content">
              <!-- 課程介紹 -->
              <div v-if="detailedContent.introduction" class="introduction-block">
                <div class="introduction-content" v-html="detailedContent.introduction"></div>
              </div>

              <!-- 內容章節 -->
              <div v-if="detailedContent.sections" class="content-sections">
                <div 
                  v-for="(section, index) in detailedContent.sections" 
                  :key="section.id || index"
                  class="content-section"
                >
                  <h4 class="section-title">{{ section.title }}</h4>
                  <div class="section-content" v-html="section.content"></div>
                  
                  <!-- 互動元素 -->
                  <div v-if="section.interactive" class="section-interactive">
                    <button class="interactive-btn" @click="launchInteractive(section.interactive)">
                      🎮 啟動互動元素：{{ getInteractiveTitle(section.interactive) }}
                    </button>
                  </div>
                </div>
              </div>

              <!-- 案例研究 -->
              <div v-if="detailedContent.caseStudies" class="case-studies">
                <h4 class="subsection-title">📚 案例研究</h4>
                <div 
                  v-for="(caseStudy, index) in detailedContent.caseStudies" 
                  :key="index"
                  class="case-study-item"
                >
                  <h5 class="case-title">{{ caseStudy.title }}</h5>
                  <p class="case-description">{{ caseStudy.description }}</p>
                  <div v-if="caseStudy.content" class="case-content" v-html="caseStudy.content"></div>
                </div>
              </div>

              <!-- 實踐應用 -->
              <div v-if="detailedContent.practicalApplications" class="practical-applications">
                <h4 class="subsection-title">🛠️ 實踐應用</h4>
                <div 
                  v-for="(application, index) in detailedContent.practicalApplications" 
                  :key="index"
                  class="application-item"
                >
                  <h5 class="application-title">{{ application.title }}</h5>
                  <p class="application-description">{{ application.description }}</p>
                </div>
              </div>

              <!-- 實踐練習 -->
              <div v-if="detailedContent.practicalExercises" class="practical-exercises">
                <h4 class="subsection-title">✏️ 實踐練習</h4>
                <div 
                  v-for="(exercise, index) in detailedContent.practicalExercises" 
                  :key="index"
                  class="exercise-item"
                >
                  <h5 class="exercise-title">{{ exercise.title }}</h5>
                  <p class="exercise-description">{{ exercise.description }}</p>
                  <button class="exercise-btn" @click="startExercise(exercise)">
                    開始練習
                  </button>
                </div>
              </div>

              <!-- 課程測驗啟動區域 -->
              <div v-if="detailedContent.assessment && detailedContent.assessment.questions" class="quiz-starter-section">
                <div class="quiz-starter-container">
                  <h4 class="quiz-starter-title">🎯 知識檢測</h4>
                  <div v-if="!showQuiz" class="quiz-intro">
                    <p class="quiz-description">
                      完成課程學習後，通過測驗檢驗您的學習成果。
                      <span v-if="detailedContent.assessment.timeLimit">
                        測驗時間：{{ detailedContent.assessment.timeLimit }}分鐘
                      </span>
                      <span v-if="detailedContent.assessment.passingScore">
                        | 及格分數：{{ detailedContent.assessment.passingScore }}分
                      </span>
                    </p>
                    <div class="quiz-stats">
                      <div class="stat-item">
                        <span class="stat-number">{{ detailedContent.assessment.questions.length }}</span>
                        <span class="stat-label">題目</span>
                      </div>
                      <div class="stat-item" v-if="detailedContent.assessment.timeLimit">
                        <span class="stat-number">{{ detailedContent.assessment.timeLimit }}</span>
                        <span class="stat-label">分鐘</span>
                      </div>
                      <div class="stat-item" v-if="detailedContent.assessment.passingScore">
                        <span class="stat-number">{{ detailedContent.assessment.passingScore }}%</span>
                        <span class="stat-label">及格</span>
                      </div>
                    </div>
                    <button class="quiz-start-btn" @click="startQuiz">
                      <span class="btn-icon">🚀</span>
                      開始測驗
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- 如果沒有詳細內容，使用原有的動態內容區塊 -->
            <div v-else class="content-blocks">
              <!-- 動態生成的內容區塊 -->
              <div 
                v-for="(block, index) in contentBlocks" 
                :key="index"
                :class="['content-block', block.type]"
              >
                <!-- 文字內容 -->
                <div v-if="block.type === 'text'" class="text-block">
                  <h4 v-if="block.title">{{ block.title }}</h4>
                  <div class="text-content" v-html="block.content"></div>
                </div>

                <!-- 圖片內容 -->
                <div v-else-if="block.type === 'image'" class="image-block">
                  <img :src="block.src" :alt="block.alt" class="content-image">
                  <p v-if="block.caption" class="image-caption">{{ block.caption }}</p>
                </div>

                <!-- 對比表格 -->
                <div v-else-if="block.type === 'comparison'" class="comparison-block">
                  <h4>{{ block.title }}</h4>
                  <table class="comparison-table">
                    <thead>
                      <tr>
                        <th v-for="header in block.headers" :key="header">{{ header }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(row, rowIndex) in block.data" :key="rowIndex">
                        <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- 重點提示 -->
                <div v-else-if="block.type === 'highlight'" class="highlight-block">
                  <div class="highlight-icon">{{ block.icon || '💡' }}</div>
                  <div class="highlight-content">
                    <h4 v-if="block.title">{{ block.title }}</h4>
                    <p>{{ block.content }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 互動活動區 -->
          <div class="interactive-section" v-if="lesson.interactiveElements?.length > 0">
            <h3 class="section-title">互動練習</h3>
            <div class="activities-container">
              <div 
                v-for="activity in interactiveActivities" 
                :key="activity.id"
                class="activity-card"
              >
                <div class="activity-header">
                  <h4 class="activity-title">{{ activity.title }}</h4>
                  <span class="activity-type">{{ activity.type }}</span>
                </div>
                
                <div class="activity-content">
                  <!-- 地區識別活動 -->
                  <div v-if="activity.type === 'region-identification'" class="identification-activity">
                    <p class="activity-instruction">{{ activity.instruction }}</p>
                    <div class="identification-grid">
                      <div 
                        v-for="option in activity.options" 
                        :key="option.id"
                        :class="['identification-option', { 
                          selected: activity.selectedAnswers.includes(option.id),
                          correct: activity.showResults && option.correct,
                          incorrect: activity.showResults && activity.selectedAnswers.includes(option.id) && !option.correct
                        }]"
                        @click="selectIdentificationOption(activity.id, option.id)"
                      >
                        <div class="option-image">
                          <img :src="option.image" :alt="option.name">
                        </div>
                        <div class="option-name">{{ option.name }}</div>
                      </div>
                    </div>
                    <button 
                      class="check-answer-btn"
                      @click="checkIdentificationAnswer(activity.id)"
                      :disabled="activity.selectedAnswers.length === 0"
                    >
                      檢查答案
                    </button>
                  </div>

                  <!-- 配對活動 -->
                  <div v-else-if="activity.type === 'matching'" class="matching-activity">
                    <p class="activity-instruction">{{ activity.instruction }}</p>
                    <div class="matching-container">
                      <div class="matching-column">
                        <h5>產區</h5>
                        <div 
                          v-for="item in activity.leftItems" 
                          :key="item.id"
                          :class="['matching-item left-item', { 
                            selected: activity.selectedLeft === item.id,
                            matched: activity.matches[item.id]
                          }]"
                          @click="selectMatchingItem('left', activity.id, item.id)"
                        >
                          {{ item.text }}
                        </div>
                      </div>
                      <div class="matching-column">
                        <h5>特色</h5>
                        <div 
                          v-for="item in activity.rightItems" 
                          :key="item.id"
                          :class="['matching-item right-item', { 
                            selected: activity.selectedRight === item.id,
                            matched: Object.values(activity.matches).includes(item.id)
                          }]"
                          @click="selectMatchingItem('right', activity.id, item.id)"
                        >
                          {{ item.text }}
                        </div>
                      </div>
                    </div>
                    <div class="matching-feedback" v-if="activity.feedback">
                      <p>{{ activity.feedback }}</p>
                    </div>
                  </div>

                  <!-- 排序活動 -->
                  <div v-else-if="activity.type === 'sorting'" class="sorting-activity">
                    <p class="activity-instruction">{{ activity.instruction }}</p>
                    <div class="sortable-container">
                      <draggable 
                        v-model="activity.items" 
                        class="sortable-list"
                        @change="handleSortChange(activity.id)"
                      >
                        <div 
                          v-for="item in activity.items" 
                          :key="item.id"
                          class="sortable-item"
                        >
                          <span class="drag-handle">⋮⋮</span>
                          <span class="item-content">{{ item.text }}</span>
                        </div>
                      </draggable>
                    </div>
                    <button 
                      class="check-answer-btn"
                      @click="checkSortingAnswer(activity.id)"
                    >
                      檢查順序
                    </button>
                  </div>
                </div>

                <div class="activity-progress" v-if="activity.completed">
                  <span class="progress-icon">✅</span>
                  <span class="progress-text">已完成</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 知識檢測區 -->
          <div class="quiz-section" v-if="showQuiz && quizQuestions.length > 0">
            <h3 class="section-title">知識檢測</h3>
            <div class="quiz-container">
              <div v-if="!quizCompleted" class="quiz-question">
                <div class="question-progress">
                  <span>問題 {{ currentQuestionIndex + 1 }} / {{ quizQuestions.length }}</span>
                  <div class="progress-bar">
                    <div 
                      class="progress-fill" 
                      :style="{ width: ((currentQuestionIndex + 1) / quizQuestions.length * 100) + '%' }"
                    ></div>
                  </div>
                </div>
                
                <div class="question-content">
                  <h4 class="question-text">{{ currentQuestion.question }}</h4>
                  <div class="answer-options">
                    <button 
                      v-for="(option, index) in currentQuestion.options" 
                      :key="index"
                      :class="['option-btn', { selected: selectedAnswer === index }]"
                      @click="selectAnswer(index)"
                    >
                      <span class="option-letter">{{ String.fromCharCode(65 + index) }}</span>
                      <span class="option-text">{{ option }}</span>
                    </button>
                  </div>
                </div>

                <div class="question-controls">
                  <button 
                    class="quiz-nav-btn"
                    @click="previousQuestion"
                    :disabled="currentQuestionIndex === 0"
                  >
                    上一題
                  </button>
                  <button 
                    class="quiz-nav-btn primary"
                    @click="nextQuestion"
                    :disabled="selectedAnswer === null && selectedAnswer !== 0"
                  >
                    {{ currentQuestionIndex === quizQuestions.length - 1 ? '完成測驗' : '下一題' }}
                  </button>
                </div>
              </div>

              <div v-else class="quiz-results">
                <div class="results-header">
                  <h4>測驗結果</h4>
                  <div class="score-display">
                    <span class="score-number">{{ quizScore }}</span>
                    <span class="score-total">/ {{ quizQuestions.length }}</span>
                  </div>
                </div>
                
                <div class="results-feedback">
                  <p class="feedback-text">{{ getQuizFeedback() }}</p>
                  <div class="score-breakdown">
                    <div class="score-item correct">
                      <span class="score-label">正確</span>
                      <span class="score-count">{{ quizScore }}</span>
                    </div>
                    <div class="score-item incorrect">
                      <span class="score-label">錯誤</span>
                      <span class="score-count">{{ quizQuestions.length - quizScore }}</span>
                    </div>
                  </div>
                </div>

                <div class="results-actions">
                  <button class="quiz-action-btn" @click="retakeQuiz">重新測驗</button>
                  <button class="quiz-action-btn primary" @click="continueToNext">繼續學習</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- 課程完成確認 -->
    <footer class="lesson-footer" v-if="showCompletionSection">
      <div class="completion-summary">
        <h3>課程完成檢查</h3>
        <div class="completion-checklist">
          <div :class="['completion-item', { completed: objectivesCompleted }]">
            <span class="completion-icon">{{ objectivesCompleted ? '✅' : '⭕' }}</span>
            <span>學習目標達成 ({{ completedObjectives.length }}/{{ lesson.objectives?.length || 0 }})</span>
          </div>
          <div :class="['completion-item', { completed: activitiesCompleted }]">
            <span class="completion-icon">{{ activitiesCompleted ? '✅' : '⭕' }}</span>
            <span>互動練習完成 ({{ completedActivities }}/{{ interactiveActivities.length }})</span>
          </div>
          <div :class="['completion-item', { completed: quizPassed }]">
            <span class="completion-icon">{{ quizPassed ? '✅' : '⭕' }}</span>
            <span>知識檢測通過 {{ quizCompleted ? `(${quizScore}/${quizQuestions.length})` : '(未完成)' }}</span>
          </div>
        </div>
        
        <div class="completion-actions">
          <button 
            class="completion-btn"
            @click="markLessonComplete"
            :disabled="!canCompleteLesson"
          >
            {{ canCompleteLesson ? '完成此課程' : '完成所有要求後可結束課程' }}
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import BordeauxMapIntegration from './bordeaux/BordeauxMapIntegration.vue'
import { climateAndEnvironmentContent } from '../data/climateAndEnvironmentLessons.js'
// import draggable from 'vuedraggable'

const props = defineProps({
  lesson: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      objectives: [],
      content: '',
      interactiveElements: [],
      mapFocus: null
    })
  },
  levelData: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['completeLesson', 'nextLesson', 'previousLesson'])

// 組件狀態
const showObjectives = ref(true)
const objectivesExpanded = ref(true)
const completedObjectives = ref([])
const activeMapControl = ref('overview')
const currentMapHints = ref([])
const interactiveActivities = ref([])
const showQuiz = ref(false)
const quizQuestions = ref([])
const currentQuestionIndex = ref(0)
const selectedAnswer = ref(null)
const quizAnswers = ref([])
const quizCompleted = ref(false)
const quizScore = ref(0)
const isCompleted = ref(false)
const showCompletionSection = ref(false)

// 計算屬性
const hasPreviousLesson = computed(() => true) // 實際應該檢查是否有上一課
const canProceed = computed(() => canCompleteLesson.value)

const objectivesCompleted = computed(() => 
  completedObjectives.value.length === (props.lesson.objectives?.length || 0)
)

const activitiesCompleted = computed(() => {
  const completed = interactiveActivities.value.filter(activity => activity.completed).length
  return completed
})

const completedActivities = computed(() => activitiesCompleted.value)

const quizPassed = computed(() => quizCompleted.value && quizScore.value >= Math.ceil(quizQuestions.value.length * 0.7))

const canCompleteLesson = computed(() => 
  objectivesCompleted.value && 
  activitiesCompleted.value === interactiveActivities.value.length &&
  quizPassed.value
)

const currentQuestion = computed(() => 
  quizQuestions.value[currentQuestionIndex.value] || {}
)

// 獲取詳細課程內容
const detailedContent = computed(() => {
  if (!props.lesson?.id) {
    return null
  }
  
  const lessonData = climateAndEnvironmentContent[props.lesson.id]
  return lessonData?.fullContent || null
})

// 動態內容區塊
const contentBlocks = computed(() => {
  if (detailedContent.value) {
    return detailedContent.value
  }
  return generateContentBlocks(props.lesson)
})

// 地圖控制選項
const mapControls = computed(() => [
  { id: 'overview', label: '概覽' },
  { id: 'focus', label: '重點區域' },
  { id: 'compare', label: '對比模式' },
  { id: '3d', label: '3D視圖' }
])

// 方法
const toggleObjectives = () => {
  objectivesExpanded.value = !objectivesExpanded.value
}

const toggleObjective = (index) => {
  if (completedObjectives.value.includes(index)) {
    completedObjectives.value = completedObjectives.value.filter(i => i !== index)
  } else {
    completedObjectives.value.push(index)
  }
}

const setMapControl = (controlId) => {
  activeMapControl.value = controlId
  updateMapHints(controlId)
}

const updateMapHints = (controlId) => {
  const hints = {
    overview: [
      { id: 1, text: '點擊不同產區查看詳細資訊' },
      { id: 2, text: '使用滾輪縮放地圖' }
    ],
    focus: [
      { id: 1, text: '重點區域已高亮顯示' },
      { id: 2, text: '觀察產區的地理位置關係' }
    ],
    compare: [
      { id: 1, text: '左右對比不同產區特色' },
      { id: 2, text: '注意土壤和氣候差異' }
    ],
    '3d': [
      { id: 1, text: '拖拽旋轉查看地形' },
      { id: 2, text: '觀察海拔高度變化' }
    ]
  }
  currentMapHints.value = hints[controlId] || []
}

const handleMapInteraction = (interaction) => {
  console.log('Map interaction:', interaction)
  // 處理地圖互動事件
}

const handleRegionSelected = (region) => {
  console.log('Region selected:', region)
  // 處理產區選擇事件
}

const handleNextLesson = () => {
  if (isCompleted.value) {
    emit('nextLesson')
  } else {
    showCompletionSection.value = true
  }
}

const markLessonComplete = () => {
  isCompleted.value = true
  emit('completeLesson')
  showCompletionSection.value = false
}

// 新增：處理詳細課程內容的方法
const launchInteractive = (interactiveId) => {
  console.log('Launching interactive element:', interactiveId)
  // 這裡可以添加啟動特定互動元素的邏輯
  // 例如打開模擬器、顯示圖表等
}

const getInteractiveTitle = (interactiveId) => {
  const interactiveElements = climateAndEnvironmentContent.interactiveElements || {}
  return interactiveElements[interactiveId]?.title || '互動元素'
}

const startExercise = (exercise) => {
  console.log('Starting exercise:', exercise)
  // 可以在這裡添加啟動特定練習的邏輯
  // 例如顯示練習界面、初始化練習狀態等
}

// 互動活動方法
const selectIdentificationOption = (activityId, optionId) => {
  const activity = interactiveActivities.value.find(a => a.id === activityId)
  if (activity && !activity.showResults) {
    if (activity.selectedAnswers.includes(optionId)) {
      activity.selectedAnswers = activity.selectedAnswers.filter(id => id !== optionId)
    } else {
      activity.selectedAnswers.push(optionId)
    }
  }
}

const checkIdentificationAnswer = (activityId) => {
  const activity = interactiveActivities.value.find(a => a.id === activityId)
  if (activity) {
    activity.showResults = true
    const correctAnswers = activity.options.filter(opt => opt.correct).map(opt => opt.id)
    const isCorrect = activity.selectedAnswers.length === correctAnswers.length &&
                     activity.selectedAnswers.every(id => correctAnswers.includes(id))
    
    if (isCorrect) {
      activity.completed = true
    }
  }
}

const selectMatchingItem = (side, activityId, itemId) => {
  const activity = interactiveActivities.value.find(a => a.id === activityId)
  if (activity) {
    if (side === 'left') {
      activity.selectedLeft = itemId
    } else {
      activity.selectedRight = itemId
    }
    
    // 如果兩側都選擇了，創建配對
    if (activity.selectedLeft && activity.selectedRight) {
      activity.matches[activity.selectedLeft] = activity.selectedRight
      activity.selectedLeft = null
      activity.selectedRight = null
      
      // 檢查是否完成所有配對
      if (Object.keys(activity.matches).length === activity.leftItems.length) {
        activity.completed = true
      }
    }
  }
}

const handleSortChange = (activityId) => {
  const activity = interactiveActivities.value.find(a => a.id === activityId)
  if (activity) {
    // 處理排序變化
  }
}

const checkSortingAnswer = (activityId) => {
  const activity = interactiveActivities.value.find(a => a.id === activityId)
  if (activity) {
    const correctOrder = activity.correctOrder
    const currentOrder = activity.items.map(item => item.id)
    
    if (JSON.stringify(correctOrder) === JSON.stringify(currentOrder)) {
      activity.completed = true
      activity.feedback = '排序正確！'
    } else {
      activity.feedback = '排序不正確，請再試一次。'
    }
  }
}

// 測驗方法
const startQuiz = () => {
  // 從詳細內容中獲取測驗題目
  if (detailedContent.value && detailedContent.value.assessment && detailedContent.value.assessment.questions) {
    quizQuestions.value = detailedContent.value.assessment.questions
    showQuiz.value = true
    quizCompleted.value = false
    currentQuestionIndex.value = 0
    selectedAnswer.value = null
    quizAnswers.value = []
    quizScore.value = 0
    
    // 如果是Level 1綜合評量，記錄開始時間
    if (detailedContent.value.assessment.timeLimit) {
      console.log(`開始測驗 - 時限: ${detailedContent.value.assessment.timeLimit}分鐘`)
    }
  }
}

const selectAnswer = (index) => {
  console.log('選擇答案:', index)
  selectedAnswer.value = index
}

const nextQuestion = () => {
  console.log('下一題 - 當前答案:', selectedAnswer.value)
  // 保存答案
  quizAnswers.value[currentQuestionIndex.value] = selectedAnswer.value
  
  if (currentQuestionIndex.value < quizQuestions.value.length - 1) {
    currentQuestionIndex.value++
    selectedAnswer.value = quizAnswers.value[currentQuestionIndex.value] || null
    console.log('移動到題目:', currentQuestionIndex.value)
  } else {
    console.log('完成測驗')
    completeQuiz()
  }
}

const previousQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    quizAnswers.value[currentQuestionIndex.value] = selectedAnswer.value
    currentQuestionIndex.value--
    selectedAnswer.value = quizAnswers.value[currentQuestionIndex.value] || null
  }
}

const completeQuiz = () => {
  quizAnswers.value[currentQuestionIndex.value] = selectedAnswer.value
  
  // 計算分數
  let score = 0
  quizQuestions.value.forEach((question, index) => {
    if (quizAnswers.value[index] === question.correctAnswer) {
      score++
    }
  })
  
  quizScore.value = score
  quizCompleted.value = true
}

const getQuizFeedback = () => {
  const percentage = (quizScore.value / quizQuestions.value.length) * 100
  if (percentage >= 90) return '優秀！您對這個主題掌握得很好！'
  if (percentage >= 70) return '良好！您已經理解了主要概念。'
  if (percentage >= 60) return '及格，但還有改進空間。'
  return '需要重新學習，建議複習課程內容。'
}

const retakeQuiz = () => {
  currentQuestionIndex.value = 0
  selectedAnswer.value = null
  quizAnswers.value = []
  quizCompleted.value = false
  quizScore.value = 0
}

const continueToNext = () => {
  if (quizPassed.value) {
    showCompletionSection.value = true
  }
}

// 內容生成函數
function generateContentBlocks(lesson) {
  // 根據課程ID生成對應的內容區塊
  const blocks = []
  
  if (lesson?.id === 'l1-1') {
    blocks.push(
      {
        type: 'text',
        title: '波爾多的地理位置',
        content: `
          <p>波爾多位於法國西南部，是世界上最重要的葡萄酒產區之一。這個產區的獨特之處在於其地理環境：</p>
          <ul>
            <li><strong>三條河流</strong>：加龍河（Garonne）、多爾多涅河（Dordogne）和吉隆德河（Gironde）</li>
            <li><strong>海洋性氣候</strong>：受大西洋影響，氣候溫和濕潤</li>
            <li><strong>多樣化土壤</strong>：從沙礫到粘土，提供了豐富的terroir</li>
          </ul>
        `
      },
      {
        type: 'highlight',
        icon: '🌊',
        title: '重要概念：左岸與右岸',
        content: '以吉隆德河為界，波爾多分為左岸（以Cabernet Sauvignon為主）和右岸（以Merlot為主）兩大區域。'
      },
      {
        type: 'comparison',
        title: '左岸 vs 右岸 基本對比',
        headers: ['特徵', '左岸', '右岸'],
        data: [
          ['主要品種', 'Cabernet Sauvignon', 'Merlot'],
          ['土壤類型', '礫石', '黏土、石灰岩'],
          ['酒款風格', '結構強勁', '圓潤優雅'],
          ['著名產區', 'Médoc, Graves', 'Pomerol, St-Émilion']
        ]
      }
    )
  } else if (lesson?.id === 'l1-3') {
    blocks.push(
      {
        type: 'text',
        title: '波爾多主要葡萄品種',
        content: `
          <p>波爾多葡萄酒的卓越品質源於其獨特的品種組合。主要品種包括：</p>
          <ul>
            <li><strong>Cabernet Sauvignon</strong>：左岸之王，提供結構和陳年潛力</li>
            <li><strong>Merlot</strong>：右岸主導，帶來圓潤和早期愉悅感</li>
            <li><strong>Cabernet Franc</strong>：調配中的優雅元素</li>
            <li><strong>Sauvignon Blanc</strong>：白酒中的清香代表</li>
            <li><strong>Sémillon</strong>：甜酒和乾白的重要組成</li>
          </ul>
        `
      },
      {
        type: 'highlight',
        icon: '🍇',
        title: '調配哲學',
        content: '波爾多的偉大之處在於調配藝術，不同品種的組合創造出比單一品種更複雜、和諧的葡萄酒。'
      }
    )
  } else if (lesson?.id === 'l1-4') {
    blocks.push(
      {
        type: 'text',
        title: '左岸與右岸的差異',
        content: `
          <p>波爾多被河流分為兩個不同的世界，各有特色：</p>
          <h4>🏰 左岸特徵</h4>
          <ul>
            <li>礫石土壤，排水良好</li>
            <li>Cabernet Sauvignon主導</li>
            <li>風格強勁，適合長期陳年</li>
            <li>包含Médoc四大名村</li>
          </ul>
          <h4>🌸 右岸特徵</h4>
          <ul>
            <li>黏土和石灰岩土壤</li>
            <li>Merlot為主要品種</li>
            <li>風格優雅，早期可飲</li>
            <li>St-Émilion和Pomerol為代表</li>
          </ul>
        `
      },
      {
        type: 'comparison',
        title: '兩岸風格對比',
        headers: ['特徵', '左岸', '右岸'],
        data: [
          ['主導品種', 'Cabernet Sauvignon (60-70%)', 'Merlot (70-90%)'],
          ['土壤類型', '礫石土', '黏土、石灰岩'],
          ['酒款風格', '強勁、單寧高', '柔順、易於入口'],
          ['陳年潛力', '15-30年', '8-20年'],
          ['典型香氣', '黑醋栗、雪松', '櫻桃、紫羅蘭']
        ]
      }
    )
  } else if (lesson?.id === 'l1-5') {
    blocks.push(
      {
        type: 'text',
        title: '波爾多酒款類型',
        content: `
          <p>波爾多生產多種類型的葡萄酒，每種都有其特色：</p>
          <h4>🍷 紅酒（85%產量）</h4>
          <ul>
            <li>村莊級AOC：Pauillac、Margaux等</li>
            <li>地區級AOC：Haut-Médoc、Graves等</li>
            <li>基礎級AOC：Bordeaux、Bordeaux Supérieur</li>
          </ul>
          <h4>🤍 白酒（10%產量）</h4>
          <ul>
            <li>乾白酒：以Sauvignon Blanc和Sémillon調配</li>
            <li>甜白酒：Sauternes貴腐甜酒世界聞名</li>
          </ul>
          <h4>其他類型</h4>
          <ul>
            <li>🌹 粉紅酒：夏日的清新選擇</li>
            <li>🥂 氣泡酒：Crémant de Bordeaux</li>
          </ul>
        `
      },
      {
        type: 'highlight',
        icon: '🏷️',
        title: '酒標解讀技巧',
        content: '學會解讀波爾多酒標是選酒的關鍵技能。注意產區標示、分級標誌、生產者資訊等關鍵要素。'
      }
    )
  } else if (lesson?.id === 'l1-6') {
    blocks.push(
      {
        type: 'text',
        title: 'AOC系統基礎',
        content: `
          <p>AOC（Appellation d'Origine Contrôlée）是法國葡萄酒品質保證的核心系統：</p>
          <h4>🏛️ 歷史背景</h4>
          <ul>
            <li><strong>1935年創立</strong>：為保護產區免受假酒衝擊</li>
            <li><strong>法律框架</strong>：世界首個完整的原產地保護法</li>
            <li><strong>Terroir概念</strong>：強調土地與傳統的結合</li>
            <li><strong>國際影響</strong>：成為全球分級系統範本</li>
          </ul>
          <h4>🔍 四大支柱</h4>
          <ul>
            <li>地理邊界劃定</li>
            <li>葡萄品種限制</li>
            <li>栽培技術規範</li>
            <li>釀造工藝標準</li>
          </ul>
        `
      },
      {
        type: 'comparison',
        title: '法國葡萄酒分級對比',
        headers: ['等級', '全稱', '特徵', '波爾多例子'],
        data: [
          ['AOC/AOP', 'Appellation d\'Origine Contrôlée', '最嚴格規範', 'Pauillac, Margaux'],
          ['IGP', 'Indication Géographique Protégée', '地區級保護', 'Atlantique IGP'],
          ['Vin de France', 'Vin de France', '國家級標示', '法國餐酒']
        ]
      },
      {
        type: 'highlight',
        icon: '🎯',
        title: '消費者選酒指南',
        content: '利用AOC資訊選酒：村莊級AOC品質最高但價格較貴，地區級AOC性價比較高，適合日常飲用。'
      }
    )
  } else if (lesson?.id === 'l1-7') {
    blocks.push(
      {
        type: 'text',
        title: '品酒感官訓練',
        content: `
          <p>品酒是一門綜合性的感官藝術，需要調動視覺、嗅覺、味覺三重感官：</p>
          <h4>👁️ 視覺觀察要點</h4>
          <ul>
            <li><strong>環境設置：</strong>白色背景、自然光線</li>
            <li><strong>觀察角度：</strong>45度傾斜觀察酒液邊緣</li>
            <li><strong>顏色判讀：</strong>反映年份、品種和釀造工藝</li>
            <li><strong>清澈度：</strong>優質酒應該透明清澈</li>
          </ul>
          
          <h4>👃 香氣識別技巧</h4>
          <ul>
            <li><strong>一級香氣：</strong>來自葡萄品種本身</li>
            <li><strong>二級香氣：</strong>發酵過程產生</li>
            <li><strong>三級香氣：</strong>陳年過程發展</li>
          </ul>
        `
      },
      {
        type: 'visualization',
        title: '味覺分析圖表',
        chartData: {
          categories: ['甜度', '酸度', '單寧', '酒精度', '酒體'],
          values: [3, 8, 6, 7, 7],
          descriptions: ['適中甜味', '清新酸度', '中等單寧', '適中酒精', '中等酒體']
        }
      },
      {
        type: 'table',
        title: '品酒步驟對照表',
        headers: ['步驟', '技巧要點', '評估內容', '注意事項'],
        rows: [
          ['視覺觀察', '45度傾斜', '顏色深淺、清澈度', '白色背景最佳'],
          ['香氣分析', '輕搖酒杯', '果香、花香、橡木香', '避免嗅覺疲勞'],
          ['口感品評', '覆蓋舌面', '甜度、酸度、單寧', '停留10-15秒'],
          ['餘韻評估', '吞嚥後感受', '持久度、變化', '記錄整體印象']
        ]
      },
      {
        type: 'highlight',
        icon: '🎯',
        title: '專業品酒技巧',
        content: '建立個人香氣詞彙庫，進行定期盲品訓練，使用標準化品酒筆記格式，逐步提升感官敏感度。'
      }
    )
  } else if (lesson?.id === 'l1-8') {
    blocks.push(
      {
        type: 'text',
        title: 'Level 1 知識整合',
        content: `
          <p>Level 1綜合評量將測試您在以下領域的學習成果：</p>
          <h4>📚 核心知識領域</h4>
          <ul>
            <li><strong>氣候環境：</strong>波爾多地理氣候特徵與影響因素</li>
            <li><strong>AOC系統：</strong>法國葡萄酒分級制度與波爾多結構</li>
            <li><strong>品嚐技巧：</strong>專業品酒的感官訓練與分析方法</li>
            <li><strong>實務應用：</strong>酒標解讀、選酒建議、品酒活動</li>
          </ul>
          
          <h4>🎯 評量重點</h4>
          <ul>
            <li>基礎概念的理解程度</li>
            <li>知識間的關聯整合</li>
            <li>實際問題的應用能力</li>
            <li>專業表達與溝通技巧</li>
          </ul>
        `
      },
      {
        type: 'table',
        title: 'Level 1 課程回顧對照表',
        headers: ['課程', '重點內容', '實用技能', '評量比重'],
        rows: [
          ['氣候環境基礎', '溫帶海洋性氣候特徵', '環境因素分析', '25%'],
          ['AOC系統入門', '分級制度與產區結構', '酒標解讀能力', '30%'],
          ['品嚐技巧基礎', '感官訓練與品評方法', '專業品酒技巧', '35%'],
          ['綜合應用', '情境分析與問題解決', '實務操作能力', '10%']
        ]
      },
      {
        type: 'visualization',
        title: '學習成果評估',
        chartData: {
          categories: ['理論知識', '實用技能', '應用能力', '表達溝通', '整合思考'],
          values: [85, 80, 75, 78, 82],
          descriptions: ['概念理解', '技能操作', '問題解決', '專業溝通', '知識整合']
        }
      },
      {
        type: 'highlight',
        icon: '🏆',
        title: 'Level 1 認證目標',
        content: '完成綜合評量並達到70分以上，即可獲得Level 1波爾多葡萄酒基礎認證，並解鎖Level 2進階課程。'
      }
    )
  }
  
  // 如果沒有特定內容，添加通用課程說明
  if (blocks.length === 0) {
    blocks.push({
      type: 'text',
      title: '課程內容',
      content: `
        <p>本課程內容正在載入中，請稍候...</p>
        <p>課程ID: ${lesson?.id}</p>
        <p>如果內容持續無法顯示，請檢查數據連接。</p>
      `
    })
  }
  
  return blocks
}

// 初始化
function initializeLesson() {
  // 根據課程類型初始化互動活動
  const activities = []
  
  if (props.lesson.interactiveElements?.includes('region-identification')) {
    activities.push({
      id: 'region-id-1',
      type: 'region-identification',
      title: '識別波爾多主要產區',
      instruction: '請選擇屬於左岸的產區：',
      options: [
        { id: 'medoc', name: 'Médoc', image: '/images/regions/medoc.jpg', correct: true },
        { id: 'pomerol', name: 'Pomerol', image: '/images/regions/pomerol.jpg', correct: false },
        { id: 'graves', name: 'Graves', image: '/images/regions/graves.jpg', correct: true },
        { id: 'st-emilion', name: 'St-Émilion', image: '/images/regions/st-emilion.jpg', correct: false }
      ],
      selectedAnswers: [],
      showResults: false,
      completed: false
    })
  }
  
  if (props.lesson.interactiveElements?.includes('matching')) {
    activities.push({
      id: 'matching-1',
      type: 'matching',
      title: '產區與特色配對',
      instruction: '將產區與其特色進行配對：',
      leftItems: [
        { id: 'margaux', text: 'Margaux' },
        { id: 'pauillac', text: 'Pauillac' },
        { id: 'st-julien', text: 'St-Julien' }
      ],
      rightItems: [
        { id: 'elegant', text: '優雅芳香' },
        { id: 'powerful', text: '強勁有力' },
        { id: 'balanced', text: '平衡協調' }
      ],
      matches: {},
      selectedLeft: null,
      selectedRight: null,
      completed: false,
      feedback: null
    })
  }
  
  interactiveActivities.value = activities
  
  // 初始化測驗題目
  initializeQuiz()
  
  // 設置地圖提示
  updateMapHints('overview')
}

function initializeQuiz() {
  // 根據課程生成測驗題目
  const questions = []
  
  if (props.lesson?.id === 'l1-1') {
    questions.push(
      {
        question: '波爾多產區被哪三條河流劃分？',
        options: [
          'Garonne, Dordogne, Gironde',
          'Seine, Loire, Rhône',
          'Rhine, Danube, Elbe',
          'Thames, Severn, Trent'
        ],
        correctAnswer: 0
      },
      {
        question: '以下哪個是左岸的主要葡萄品種？',
        options: [
          'Merlot',
          'Pinot Noir',
          'Cabernet Sauvignon',
          'Syrah'
        ],
        correctAnswer: 2
      },
      {
        question: '波爾多的氣候類型是？',
        options: [
          '大陸性氣候',
          '海洋性氣候',
          '地中海氣候',
          '熱帶氣候'
        ],
        correctAnswer: 1
      }
    )
  }
  
  quizQuestions.value = questions
  showQuiz.value = questions.length > 0
}

// 生命週期
const rootEl = ref(null)

function optimizeEmbeddedMedia(container) {
  if (!container) return
  const imgs = container.querySelectorAll('img')
  imgs.forEach(img => {
    img.loading = img.loading || 'lazy'
    img.decoding = img.decoding || 'async'
    img.style.maxWidth = img.style.maxWidth || '100%'
    img.style.height = img.style.height || 'auto'
  })
  const videos = container.querySelectorAll('video')
  videos.forEach(v => {
    v.preload = v.preload || 'metadata'
    v.style.maxWidth = v.style.maxWidth || '100%'
    v.style.height = v.style.height || 'auto'
    if (!v.hasAttribute('controls')) v.setAttribute('controls', '')
  })
  const iframes = container.querySelectorAll('iframe')
  iframes.forEach(f => {
    f.style.maxWidth = f.style.maxWidth || '100%'
  })
}

onMounted(() => {
  initializeLesson()
  optimizeEmbeddedMedia(rootEl.value)
})

// 監聽課程變化
watch(() => props.lesson?.id, () => {
  initializeLesson()
  // 重置狀態
  completedObjectives.value = []
  isCompleted.value = false
  showCompletionSection.value = false
  // 課程切換後，最佳化媒體
  requestAnimationFrame(() => optimizeEmbeddedMedia(rootEl.value))
})
</script>

<style scoped>
.lesson-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #f8f9fa;
}

.lesson-header {
  background: white;
  border-bottom: 2px solid #e9ecef;
  padding: 1.5rem 2rem;
}

.lesson-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.nav-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  background: white;
  color: #4CAF50;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.nav-btn:hover:not(:disabled) {
  background: #4CAF50;
  color: white;
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.next-btn.primary {
  background: #4CAF50;
  color: white;
}

.lesson-info {
  flex: 1;
  text-align: center;
  padding: 0 2rem;
}

.lesson-title {
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
  color: #2c3e50;
  font-weight: 700;
}

.lesson-description {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  color: #6c757d;
  line-height: 1.5;
}

.lesson-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 0.9rem;
  color: #868e96;
}

.objectives-section {
  background: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
}

.objectives-title {
  margin: 0;
}

.toggle-btn {
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  color: #495057;
  cursor: pointer;
  padding: 1rem;
  width: 100%;
  text-align: left;
  transition: background-color 0.2s ease;
}

.toggle-btn:hover {
  background: rgba(0, 0, 0, 0.05);
}

.objectives-list {
  padding: 0 1rem 1rem 1rem;
}

.objective-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  transition: all 0.2s ease;
}

.objective-item.completed {
  color: #4CAF50;
}

.objective-check {
  cursor: pointer;
  font-size: 1.2rem;
  color: #4CAF50;
  user-select: none;
}

.objective-text {
  flex: 1;
  line-height: 1.4;
}

.lesson-main {
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
}

.content-layout {
  display: grid;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  /* 動態決定欄位數量 */
  grid-template-columns: var(--layout-columns, 1fr);
}

/* 有地圖時使用兩欄佈局 */
.content-layout.with-map {
  --layout-columns: 1fr 1fr;
}

/* 無地圖時使用單欄佈局，居中顯示 */
.content-layout.no-map {
  --layout-columns: 1fr;
  max-width: 900px;
}

.map-integration {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.section-title {
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
  color: #2c3e50;
  font-weight: 600;
}

.map-controls {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.map-control-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  color: #666;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.map-control-btn.active {
  background: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

.integrated-map {
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}

.map-hints {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}

.map-hints h4 {
  margin: 0 0 0.75rem 0;
  font-size: 1rem;
  color: #495057;
}

.hints-list {
  margin: 0;
  padding-left: 1.25rem;
}

.hint-item {
  margin-bottom: 0.5rem;
  color: #6c757d;
  font-size: 0.9rem;
  line-height: 1.4;
}

.content-panel {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.knowledge-section,
.interactive-section,
.quiz-section {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.content-blocks {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.content-block {
  border-radius: 8px;
  overflow: hidden;
}

.text-block h4 {
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  color: #2c3e50;
}

.text-content {
  line-height: 1.6;
  color: #495057;
}

.text-content ul {
  padding-left: 1.25rem;
}

.text-content li {
  margin-bottom: 0.5rem;
}

.image-block {
  text-align: center;
}

.content-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.image-caption {
  margin: 0.75rem 0 0 0;
  font-size: 0.9rem;
  color: #6c757d;
  font-style: italic;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.comparison-table th,
.comparison-table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #dee2e6;
}

.comparison-table th {
  background: #f8f9fa;
  font-weight: 600;
  color: #495057;
}

.highlight-block {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: #e8f5e8;
  border: 2px solid #4CAF50;
  border-radius: 8px;
}

.highlight-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.highlight-content h4 {
  margin: 0 0 0.5rem 0;
  color: #2e7d32;
}

.highlight-content p {
  margin: 0;
  color: #2e7d32;
}

.activities-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.activity-card {
  border: 2px solid #e9ecef;
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.activity-card:hover {
  border-color: #4CAF50;
}

.activity-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
}

.activity-title {
  margin: 0;
  font-size: 1.1rem;
  color: #2c3e50;
}

.activity-type {
  font-size: 0.8rem;
  color: #6c757d;
  background: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  border: 1px solid #dee2e6;
}

.activity-content {
  padding: 1rem;
}

.activity-instruction {
  margin: 0 0 1rem 0;
  color: #495057;
  font-weight: 500;
}

.identification-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.identification-option {
  border: 2px solid #e9ecef;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.identification-option:hover {
  border-color: #4CAF50;
  transform: translateY(-2px);
}

.identification-option.selected {
  border-color: #4CAF50;
  background: rgba(76, 175, 80, 0.1);
}

.identification-option.correct {
  border-color: #28a745;
  background: rgba(40, 167, 69, 0.1);
}

.identification-option.incorrect {
  border-color: #dc3545;
  background: rgba(220, 53, 69, 0.1);
}

.option-image {
  height: 100px;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.option-name {
  padding: 0.75rem;
  text-align: center;
  font-weight: 500;
  color: #2c3e50;
}

.check-answer-btn {
  padding: 0.75rem 1.5rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.check-answer-btn:hover:not(:disabled) {
  background: #45a049;
}

.check-answer-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.matching-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 1rem;
}

.matching-column h5 {
  margin: 0 0 1rem 0;
  color: #2c3e50;
  text-align: center;
}

.matching-item {
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border: 2px solid #e9ecef;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
}

.matching-item:hover {
  border-color: #4CAF50;
}

.matching-item.selected {
  border-color: #4CAF50;
  background: rgba(76, 175, 80, 0.1);
}

.matching-item.matched {
  border-color: #28a745;
  background: rgba(40, 167, 69, 0.1);
  cursor: default;
}

.matching-feedback {
  padding: 1rem;
  background: #e8f5e8;
  border-radius: 6px;
  color: #2e7d32;
}

.sortable-container {
  border: 2px dashed #dee2e6;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.sortable-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sortable-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  cursor: move;
}

.drag-handle {
  color: #6c757d;
  font-weight: bold;
  user-select: none;
}

.item-content {
  flex: 1;
}

.activity-progress {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(76, 175, 80, 0.1);
  border-top: 1px solid #e9ecef;
  color: #2e7d32;
  font-weight: 500;
}

.quiz-section {
  margin: 2rem 0;
  width: 100%;
}

.quiz-container {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.question-progress {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.progress-bar {
  width: 200px;
  height: 6px;
  background: #e9ecef;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #4CAF50;
  transition: width 0.3s ease;
}

.question-content {
  margin-bottom: 2rem;
}

.question-text {
  margin: 0 0 1.5rem 0;
  font-size: 1.2rem;
  color: #2c3e50;
  font-weight: 600;
}

.answer-options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.option-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.option-btn:hover {
  border-color: #4CAF50;
}

.option-btn.selected {
  border-color: #4CAF50;
  background: rgba(76, 175, 80, 0.1);
}

.option-letter {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e9ecef;
  color: #495057;
  font-weight: bold;
  flex-shrink: 0;
}

.option-btn.selected .option-letter {
  background: #4CAF50;
  color: white;
}

.option-text {
  flex: 1;
  font-size: 1rem;
  line-height: 1.4;
}

.question-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem 0;
  position: relative;
  z-index: 10;
}

.quiz-nav-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid #6c757d;
  border-radius: 6px;
  background: white;
  color: #6c757d;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  z-index: 10;
  min-width: 100px;
}

.quiz-nav-btn:hover:not(:disabled) {
  background: #6c757d;
  color: white;
}

.quiz-nav-btn.primary {
  border-color: #4CAF50;
  background: #4CAF50;
  color: white;
}

.quiz-nav-btn.primary:hover:not(:disabled) {
  background: #45a049;
  border-color: #45a049;
}

.quiz-nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quiz-results {
  text-align: center;
}

.results-header {
  margin-bottom: 2rem;
}

.results-header h4 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: #2c3e50;
}

.score-display {
  font-size: 2rem;
  font-weight: bold;
  color: #4CAF50;
}

.score-total {
  color: #6c757d;
}

.results-feedback {
  margin-bottom: 2rem;
}

.feedback-text {
  margin: 0 0 1.5rem 0;
  font-size: 1.1rem;
  color: #495057;
}

.score-breakdown {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.score-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.score-item.correct {
  color: #28a745;
}

.score-item.incorrect {
  color: #dc3545;
}

.score-label {
  font-size: 0.9rem;
  font-weight: 500;
}

.score-count {
  font-size: 1.5rem;
  font-weight: bold;
}

.results-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.quiz-action-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid #6c757d;
  border-radius: 6px;
  background: white;
  color: #6c757d;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.quiz-action-btn:hover {
  background: #6c757d;
  color: white;
}

.quiz-action-btn.primary {
  border-color: #4CAF50;
  background: #4CAF50;
  color: white;
}

.quiz-action-btn.primary:hover {
  background: #45a049;
  border-color: #45a049;
}

.lesson-footer {
  background: white;
  border-top: 2px solid #e9ecef;
  padding: 2rem;
}

.completion-summary {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.completion-summary h3 {
  margin: 0 0 1.5rem 0;
  font-size: 1.5rem;
  color: #2c3e50;
}

.completion-checklist {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.completion-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: #f8f9fa;
  transition: all 0.3s ease;
}

.completion-item.completed {
  background: rgba(76, 175, 80, 0.1);
  color: #2e7d32;
}

.completion-icon {
  font-size: 1.2rem;
}

.completion-actions {
  display: flex;
  justify-content: center;
}

.completion-btn {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.completion-btn:hover:not(:disabled) {
  background: #45a049;
  transform: translateY(-2px);
}

.completion-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: #6c757d;
}

/* 詳細課程內容樣式 */
.detailed-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.introduction-block {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0.05));
  border-left: 4px solid #4CAF50;
  border-radius: 8px;
  padding: 1.5rem;
}

.introduction-content {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #2c3e50;
}

.content-sections {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.content-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #e9ecef;
}

.content-section h4.section-title {
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #4CAF50;
  padding-bottom: 0.5rem;
}

.section-content {
  line-height: 1.8;
  color: #495057;
}

.section-content h3 {
  color: #2c3e50;
  font-size: 1.2rem;
  margin: 1.5rem 0 1rem 0;
}

.section-content h4 {
  color: #495057;
  font-size: 1.1rem;
  margin: 1rem 0 0.5rem 0;
}

.section-content ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.section-content li {
  margin-bottom: 0.5rem;
}

.section-content strong {
  color: #2c3e50;
  font-weight: 600;
}

.section-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  background: white;
}

.section-content th,
.section-content td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #e9ecef;
}

.section-content th {
  background: #f8f9fa;
  font-weight: 600;
  color: #2c3e50;
}

.section-interactive {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
}

.interactive-btn {
  background: linear-gradient(135deg, #4CAF50, #45a049);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.interactive-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
}

.subsection-title {
  color: #4CAF50;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.case-studies,
.practical-applications,
.practical-exercises {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e9ecef;
}

.case-study-item,
.application-item,
.exercise-item {
  background: white;
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
}

.case-study-item:last-child,
.application-item:last-child,
.exercise-item:last-child {
  margin-bottom: 0;
}

.case-title,
.application-title,
.exercise-title {
  color: #2c3e50;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.case-description,
.application-description,
.exercise-description {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.case-content {
  color: #495057;
  line-height: 1.7;
  font-style: italic;
}

.exercise-btn {
  background: #2196F3;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.exercise-btn:hover {
  background: #1976D2;
}

/* 葡萄品種課程專用樣式 */
.grape-profile {
  background: linear-gradient(135deg, rgba(139, 0, 0, 0.05), rgba(139, 0, 0, 0.02));
  border: 1px solid rgba(139, 0, 0, 0.1);
  border-left: 4px solid #8B0000;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  box-shadow: 0 2px 8px rgba(139, 0, 0, 0.05);
}

.grape-profile h4 {
  color: #8B0000;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1.5rem 0 0.75rem 0;
  border-bottom: 2px solid rgba(139, 0, 0, 0.2);
  padding-bottom: 0.5rem;
}

.grape-profile h4:first-child {
  margin-top: 0;
}

.grape-profile ul {
  margin: 0.75rem 0;
  padding-left: 1.5rem;
}

.grape-profile li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.grape-profile strong {
  color: #8B0000;
  font-weight: 600;
}

.blending-patterns,
.blending-science,
.modern-trends {
  background: rgba(76, 175, 80, 0.05);
  border: 1px solid rgba(76, 175, 80, 0.1);
  border-left: 4px solid #4CAF50;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.blending-patterns h4,
.blending-science h4,
.modern-trends h4 {
  color: #4CAF50;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1rem 0 0.75rem 0;
}

.growth-cycle {
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.1), rgba(255, 193, 7, 0.05));
  border: 1px solid rgba(255, 193, 7, 0.2);
  border-left: 4px solid #FFC107;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.growth-cycle h4 {
  color: #F57C00;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1rem 0 0.75rem 0;
}

.growth-stages {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: 2rem 0;
}

.growth-stages > div {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.growth-stages h4 {
  color: #2c3e50;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
}

.growth-stages p {
  margin: 0.5rem 0;
}

/* 品種對比表格樣式 */
.variety-comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.variety-comparison-table th {
  background: linear-gradient(135deg, #8B0000, #A0000A);
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

.variety-comparison-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e9ecef;
  vertical-align: top;
}

.variety-comparison-table tr:hover {
  background: rgba(139, 0, 0, 0.05);
}

/* 調配模擬器樣式 */
.blending-simulator {
  background: #f8f9fa;
  border: 2px solid #4CAF50;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
}

.blending-simulator h4 {
  color: #4CAF50;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.grape-slider {
  margin: 1rem 0;
  text-align: left;
}

.grape-slider label {
  display: block;
  color: #2c3e50;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.grape-slider input[type="range"] {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #e9ecef;
  outline: none;
}

.grape-slider input[type="range"]::-webkit-slider-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
  border: none;
}

.blend-result {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1.5rem;
}

.blend-result h5 {
  color: #2c3e50;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .grape-profile {
    padding: 1rem;
    margin: 1rem 0;
  }
  
  .blending-patterns,
  .blending-science,
  .modern-trends,
  .growth-cycle {
    padding: 1rem;
    margin: 1rem 0;
  }
  
  .variety-comparison-table {
    font-size: 0.9rem;
  }
  
  .variety-comparison-table th,
  .variety-comparison-table td {
    padding: 0.5rem;
  }
}

@media (max-width: 1200px) {
  .content-layout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .lesson-navigation {
    flex-direction: column;
    gap: 1rem;
  }
  
  .lesson-info {
    padding: 0;
  }
  
  .lesson-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .lesson-title { font-size: 1.5rem; }
  .lesson-description { font-size: 1rem; line-height: 1.6; }
  .section-title { font-size: 1.15rem; }
  .map-integration { padding: 1rem; }
  
  .content-layout {
    grid-template-columns: 1fr !important;
    gap: 1rem;
  }
  
  .quiz-container {
    padding: 1.5rem;
    margin: 0 1rem;
  }
  
  .question-controls {
    flex-direction: column;
    gap: 1rem;
  }
  
  .quiz-nav-btn {
    width: 100%;
  }
  
  .identification-grid {
    grid-template-columns: 1fr;
  }
  
  .matching-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .score-breakdown {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-height: 768px) {
  .lesson-main {
    padding: 1.5rem 1rem;
  }

  .content-layout {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 100%;
  }

  .map-integration,
  .content-panel {
    width: 100%;
  }

  .integrated-map {
    height: 320px;
  }

  .quiz-starter-section,
  .knowledge-section,
  .assessment-panel {
    border-radius: 12px;
  }
}

/* 左岸與右岸課程特殊樣式 */
.bank-definition {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.bank-definition h4 {
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #3498db;
}

.bank-definition ul {
  list-style: none;
  padding: 0;
}

.bank-definition li {
  background: #f8f9fa;
  margin-bottom: 0.8rem;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.climate-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.left-bank-climate,
.right-bank-climate {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.left-bank-climate {
  border-top: 4px solid #e74c3c;
}

.right-bank-climate {
  border-top: 4px solid #9b59b6;
}

.soil-analysis {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 2rem 0;
}

.left-bank-soil,
.right-bank-soil {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.left-bank-soil {
  border: 2px solid #e74c3c;
  background: linear-gradient(135deg, #fff 0%, #ffeaea 100%);
}

.right-bank-soil {
  border: 2px solid #9b59b6;
  background: linear-gradient(135deg, #fff 0%, #f3e5f5 100%);
}

.soil-profile h5 {
  color: #2c3e50;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #ecf0f1;
}

.grape-adaptation {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1.5rem 0;
}

.grape-adaptation h6 {
  color: #27ae60;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.grape-adaptation p {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.8rem;
}

.famous-terroirs {
  background: #ecf0f1;
  padding: 1.5rem;
  border-radius: 10px;
  margin-top: 1.5rem;
}

.famous-terroirs h5 {
  color: #34495e;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.variety-philosophy {
  margin: 2rem 0;
}

.left-bank-varieties,
.right-bank-varieties {
  background: white;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
}

.left-bank-varieties {
  border-left: 6px solid #e74c3c;
}

.right-bank-varieties {
  border-left: 6px solid #9b59b6;
}

.blend-composition,
.style-characteristics,
.representative-châteaux {
  margin-bottom: 2rem;
}

.blend-composition h5,
.style-characteristics h5,
.representative-châteaux h5 {
  color: #2c3e50;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #ecf0f1;
}

.tasting-comparison {
  margin: 2rem 0;
}

.visual-comparison,
.aroma-comparison,
.palate-comparison {
  margin-bottom: 3rem;
}

.color-analysis,
.aroma-profiles,
.structure-analysis {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 1.5rem 0;
}

.left-bank-visual,
.right-bank-visual,
.left-bank-aroma,
.right-bank-aroma,
.left-bank-palate,
.right-bank-palate {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.left-bank-visual,
.left-bank-aroma,
.left-bank-palate {
  border-left: 4px solid #e74c3c;
}

.right-bank-visual,
.right-bank-aroma,
.right-bank-palate {
  border-left: 4px solid #9b59b6;
}

.aroma-category h6 {
  color: #27ae60;
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.aroma-category ul {
  list-style-type: none;
  padding-left: 0;
}

.aroma-category li {
  background: #f8f9fa;
  padding: 0.5rem;
  margin-bottom: 0.3rem;
  border-radius: 5px;
  border-left: 3px solid #3498db;
}

/* 響應式樣式補充 */
@media (max-width: 768px) {
  .bank-definition,
  .climate-comparison,
  .soil-analysis,
  .color-analysis,
  .aroma-profiles,
  .structure-analysis {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .left-bank-soil,
  .right-bank-soil,
  .left-bank-varieties,
  .right-bank-varieties {
    padding: 1.5rem;
  }
}

/* 波爾多酒款類型概覽課程樣式 */
.wine-type-classification {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.classification-levels {
  display: grid;
  gap: 2rem;
  margin-top: 1.5rem;
}

.aoc-level {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-left: 6px solid #3498db;
}

.aoc-level:nth-child(1) {
  border-left-color: #f39c12;
}

.aoc-level:nth-child(2) {
  border-left-color: #e74c3c;
}

.aoc-level:nth-child(3) {
  border-left-color: #95a5a6;
}

.aoc-level h5 {
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.red-wine-styles {
  margin: 2rem 0;
}

.style-categories {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1.5rem;
}

.style-group {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.style-group:first-child {
  border-top: 4px solid #e74c3c;
  background: linear-gradient(135deg, #fff 0%, #ffeaea 100%);
}

.style-group:last-child {
  border-top: 4px solid #9b59b6;
  background: linear-gradient(135deg, #fff 0%, #f3e5f5 100%);
}

.white-wine-types {
  margin: 2rem 0;
}

.dry-whites,
.sweet-whites {
  background: white;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.dry-whites {
  border-left: 6px solid #27ae60;
}

.sweet-whites {
  border-left: 6px solid #f39c12;
}

.flavor-profiles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 1.5rem 0;
}

.young-profile,
.aged-profile {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
}

.young-profile {
  border-left: 4px solid #3498db;
}

.aged-profile {
  border-left: 4px solid #e67e22;
}

.noble-rot-process {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  padding: 2rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  border: 2px solid #fdcb6e;
}

.noble-rot-process h6 {
  color: #8b4513;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.noble-rot-process ol {
  list-style-type: decimal;
  padding-left: 1.5rem;
}

.noble-rot-process li {
  margin-bottom: 0.8rem;
  padding: 0.5rem;
  background: rgba(255,255,255,0.7);
  border-radius: 5px;
}

.sweetness-levels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1.5rem;
}

.moelleux,
.liquoreux {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.moelleux {
  border-top: 4px solid #74b9ff;
}

.liquoreux {
  border-top: 4px solid #fdcb6e;
}

.rose-characteristics {
  margin: 2rem 0;
}

.production-methods {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 1.5rem 0;
}

.saignee-method,
.direct-press {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.saignee-method {
  border-left: 6px solid #e84393;
}

.direct-press {
  border-left: 6px solid #fd79a8;
}

.rose-flavors {
  background: linear-gradient(135deg, #fff 0%, #ffe8e8 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  border: 2px solid #fd79a8;
}

.serving-suggestions {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  margin: 1.5rem 0;
}

.serving-suggestions h5 {
  color: #2c3e50;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.cremant-details {
  margin: 2rem 0;
}

.regulations {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-left: 6px solid #00b894;
  margin: 1.5rem 0;
}

.cremant-flavors {
  background: linear-gradient(135deg, #dfe6e9 0%, #b2bec3 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 1.5rem 0;
}

.market-position {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin: 1.5rem 0;
}

.label-elements {
  margin: 2rem 0;
}

.essential-info {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  margin: 2rem 0;
}

.appellation-info,
.classification-marks {
  margin-bottom: 3rem;
}

.appellation-info h5,
.classification-marks h5 {
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #3498db;
}

.appellation-hierarchy,
.classification-types {
  padding: 1rem;
}

.appellation-hierarchy h6,
.classification-types h6 {
  color: #8b4513;
  font-size: 1.1rem;
  margin: 1.5rem 0 1rem 0;
  background: #f8f9fa;
  padding: 0.8rem;
  border-radius: 8px;
  border-left: 4px solid #e67e22;
}

.additional-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.producer-info,
.technical-info,
.quality-indicators {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #3498db;
}

.reading-tips {
  background: linear-gradient(135deg, #e8f4fd 0%, #c3e9ff 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  border: 2px solid #74b9ff;
}

.selection-strategy h5 {
  color: #2c3e50;
  font-size: 1.1rem;
  margin: 2rem 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #74b9ff;
}

.selection-strategy ul {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.selection-strategy li {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  background: #f8f9fa;
  border-left: 3px solid #74b9ff;
}

/* 響應式調整 */
@media (max-width: 768px) {
  .style-categories,
  .flavor-profiles,
  .sweetness-levels,
  .production-methods {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .additional-info {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .classification-levels {
    gap: 1.5rem;
  }
  
  .aoc-level,
  .dry-whites,
  .sweet-whites,
  .regulations,
  .essential-info {
    padding: 1.5rem;
  }
}

/* L1-6: AOC系統入門課程樣式 */
.lesson-content:has([data-lesson="l1-6"]) {
  .concept-pillars {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }

  .pillar {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
    transition: transform 0.3s ease;
  }

  .pillar:hover {
    transform: translateY(-5px);
  }

  .pillar h4 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: #fff;
    border-bottom: 2px solid rgba(255,255,255,0.3);
    padding-bottom: 0.5rem;
  }

  .pillar p {
    font-size: 0.9rem;
    line-height: 1.6;
    opacity: 0.95;
  }

  .aoc-level {
    background: linear-gradient(45deg, #4a90e2, #7b68ee);
    border-radius: 12px;
    padding: 2rem;
    margin: 1.5rem 0;
    color: white;
    position: relative;
    overflow: hidden;
  }

  .aoc-level::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
    pointer-events: none;
  }

  .aoc-level h5 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .regulation-example,
  .cultivation-standards,
  .winemaking-rules {
    background: #f8f9ff;
    border: 2px solid #e6edff;
    border-radius: 10px;
    padding: 1.5rem;
    margin: 1.5rem 0;
  }

  .regulation-example h5,
  .cultivation-standards h5,
  .winemaking-rules h5 {
    color: #4a90e2;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid #e6edff;
    padding-bottom: 0.5rem;
  }

  .certification-body {
    background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
    color: white;
    padding: 2rem;
    border-radius: 12px;
    margin: 2rem 0;
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
  }

  .certification-body h5 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    text-align: center;
    border-bottom: 2px solid rgba(255,255,255,0.3);
    padding-bottom: 1rem;
  }

  .quality-process {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }

  .stage {
    background: white;
    border: 3px solid #4a90e2;
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.3s ease;
    position: relative;
  }

  .stage::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(45deg, #4a90e2, #7b68ee, #ff6b6b);
    border-radius: 12px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .stage:hover::before {
    opacity: 1;
  }

  .stage h6 {
    color: #4a90e2;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-align: center;
    padding: 0.5rem;
    background: #f0f4ff;
    border-radius: 8px;
  }

  .penalty-system {
    background: linear-gradient(135deg, #fd79a8, #fdcb6e);
    padding: 2rem;
    border-radius: 12px;
    margin: 2rem 0;
  }

  .penalty-system h5 {
    color: #2d3436;
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .quality-guarantee {
    background: linear-gradient(135deg, #00b894, #00cec9);
    color: white;
    padding: 2rem;
    border-radius: 12px;
    margin: 2rem 0;
    box-shadow: 0 8px 25px rgba(0, 184, 148, 0.3);
  }

  .buying-guide {
    background: #fff5f5;
    border: 2px solid #ff7675;
    border-radius: 12px;
    padding: 2rem;
    margin: 2rem 0;
  }

  .buying-guide h5 {
    color: #d63031;
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }

  .buying-guide h6 {
    color: #74b9ff;
    font-size: 1.1rem;
    margin: 1.5rem 0 1rem 0;
    padding: 0.5rem;
    background: #f8f9ff;
    border-radius: 8px;
    border-left: 4px solid #74b9ff;
  }

  .international-comparison {
    background: linear-gradient(135deg, #a29bfe, #6c5ce7);
    color: white;
    padding: 2rem;
    border-radius: 12px;
    margin: 2rem 0;
    box-shadow: 0 8px 25px rgba(162, 155, 254, 0.3);
  }

  .international-comparison h5 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    text-align: center;
    border-bottom: 2px solid rgba(255,255,255,0.3);
    padding-bottom: 1rem;
  }

  /* 響應式設計 */
  @media (max-width: 768px) {
    .concept-pillars,
    .quality-process {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .pillar,
    .aoc-level,
    .stage {
      padding: 1.5rem;
    }

    .regulation-example,
    .cultivation-standards,
    .winemaking-rules {
      padding: 1.25rem;
    }
  }
}

/* L1-7: 品嚐技巧基礎課程樣式 */
.lesson-content:has([data-lesson="l1-7"]) {
  background: linear-gradient(135deg, #ff6b9d, #c44569);
  color: white;
  
  h1, h2, h3, h4, h5 {
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }

  .introduction {
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 15px;
    padding: 2rem;
    margin: 2rem 0;
    box-shadow: 0 8px 32px rgba(255,107,157,0.3);
  }

  .section {
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 12px;
    padding: 2rem;
    margin: 2rem 0;
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  }

  .section h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .color-analysis {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }

  .wine-type {
    background: rgba(255,255,255,0.15);
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 12px;
    padding: 1.5rem;
  }

  .wine-type h5 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid rgba(255,255,255,0.3);
  }

  .aroma-layers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }

  .aroma-level {
    background: rgba(255,255,255,0.15);
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 12px;
    padding: 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .aroma-level:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }

  .aroma-level h5 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid rgba(255,255,255,0.3);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .taste-elements {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .taste-component {
    background: rgba(255,255,255,0.15);
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 12px;
    padding: 1.5rem;
    transition: all 0.3s ease;
  }

  .taste-component:hover {
    transform: translateY(-3px);
    background: rgba(255,255,255,0.2);
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
  }

  .taste-component h5 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid rgba(255,255,255,0.3);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  ol {
    background: rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1rem 0;
  }

  ol li {
    margin: 0.8rem 0;
    padding-left: 0.5rem;
  }

  ol li strong {
    color: #ffe066;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  }

  .practical-applications {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
  }

  .application {
    background: linear-gradient(135deg, #ff9a9e, #fecfef);
    color: #5d4e6b;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 8px 25px rgba(255,154,158,0.4);
    transition: transform 0.3s ease;
  }

  .application:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 35px rgba(255,154,158,0.6);
  }

  .application h4 {
    color: #5d4e6b;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    text-shadow: none;
  }

  .quiz-container {
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 15px;
    padding: 2rem;
    margin: 3rem 0;
  }

  /* 響應式設計 */
  @media (max-width: 768px) {
    .color-analysis,
    .aroma-layers,
    .taste-elements {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .wine-type,
    .aroma-level,
    .taste-component {
      padding: 1.25rem;
    }

    .application {
      padding: 1.5rem;
    }
  }
}

/* L1-8: Level 1 綜合評量課程樣式 */
.lesson-content:has([data-lesson="l1-8"]) {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  
  h1, h2, h3, h4, h5 {
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }

  .introduction {
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 15px;
    padding: 2rem;
    margin: 2rem 0;
    box-shadow: 0 8px 32px rgba(102,126,234,0.3);
  }

  .section {
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 12px;
    padding: 2rem;
    margin: 2rem 0;
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  }

  .section h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .learning-objectives {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }

  .objective-group {
    background: rgba(255,255,255,0.15);
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 12px;
    padding: 1.5rem;
  }

  .objective-group h5 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid rgba(255,255,255,0.3);
  }

  .scenario {
    background: rgba(255,255,255,0.1);
    border: 2px solid rgba(255,255,255,0.2);
    border-radius: 10px;
    padding: 1.5rem;
    margin: 1.5rem 0;
  }

  .scenario p {
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .scenario h5 {
    color: #ffd700;
    font-size: 1.1rem;
    margin: 1rem 0 0.5rem 0;
  }

  .exam-structure {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }

  .exam-section {
    background: rgba(255,255,255,0.15);
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 12px;
    padding: 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .exam-section:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }

  .exam-section h5 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid rgba(255,255,255,0.3);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .practical-applications {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
  }

  .application {
    background: linear-gradient(135deg, #a8edea, #fed6e3);
    color: #5d4e75;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 8px 25px rgba(168,237,234,0.4);
    transition: transform 0.3s ease;
  }

  .application:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 35px rgba(168,237,234,0.6);
  }

  .application h4 {
    color: #5d4e75;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    text-shadow: none;
  }

  .quiz-container {
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 15px;
    padding: 2rem;
    margin: 3rem 0;
  }

  .certification-badge {
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    color: #8b4513;
    border-radius: 20px;
    padding: 2rem;
    margin: 2rem 0;
    text-align: center;
    box-shadow: 0 10px 30px rgba(255,215,0,0.4);
  }

  .certification-badge h4 {
    color: #8b4513;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-shadow: none;
  }

  .progress-indicator {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
    padding: 1rem;
    margin: 2rem 0;
  }

  .progress-step {
    flex: 1;
    text-align: center;
    padding: 1rem;
    border-radius: 8px;
    transition: background-color 0.3s ease;
  }

  .progress-step.completed {
    background: rgba(76,175,80,0.3);
  }

  .progress-step.current {
    background: rgba(255,193,7,0.3);
  }

  /* 響應式設計 */
  @media (max-width: 768px) {
    .learning-objectives,
    .exam-structure {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .objective-group,
    .exam-section {
      padding: 1.25rem;
    }

    .application {
      padding: 1.5rem;
    }
  }
}

/* 測驗啟動區域樣式 */
.quiz-starter-section {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  color: white;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.quiz-starter-container {
  text-align: center;
}

.quiz-starter-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.quiz-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.9);
}

.quiz-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255,255,255,0.15);
  padding: 1rem 1.5rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.8);
  margin-top: 0.5rem;
}

.quiz-start-btn {
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
}

.quiz-start-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.6);
  background: linear-gradient(135deg, #ff5252, #ff7979);
}

.quiz-start-btn:active {
  transform: translateY(-1px);
}

.btn-icon {
  font-size: 1.3rem;
}

@media (max-width: 768px) {
  .quiz-stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .stat-item {
    padding: 0.8rem 1rem;
  }
  
  .quiz-start-btn {
    padding: 0.8rem 1.5rem;
    font-size: 1.1rem;
  }
}
</style>