// 測驗題庫管理系統
import { reactive } from 'vue'

// 測驗題庫
export const quizDatabase = reactive({
  // Level 1 測驗題庫
  level1: {
    'l1-1': [
      {
        id: 'l1-1-q1',
        type: 'multiple-choice',
        question: '波爾多產區位於法國的哪個地理位置？',
        options: ['東北部', '西南部', '東南部', '西北部'],
        correctAnswer: 1,
        explanation: '波爾多位於法國西南部，靠近大西洋海岸，這個位置賦予了它獨特的海洋性氣候。',
        difficulty: 'easy',
        category: 'geography'
      },
      {
        id: 'l1-1-q2',
        type: 'multiple-choice',
        question: '影響波爾多葡萄酒品質的三條主要河流是？',
        options: [
          'Garonne, Dordogne, Gironde',
          'Seine, Loire, Rhône',
          'Rhine, Danube, Elbe',
          'Thames, Severn, Trent'
        ],
        correctAnswer: 0,
        explanation: 'Garonne河和Dordogne河匯合後形成Gironde河，這三條河流將波爾多分為左岸、右岸和兩海間區域。',
        difficulty: 'medium',
        category: 'geography'
      },
      {
        id: 'l1-1-q3',
        type: 'true-false',
        question: '波爾多的氣候類型主要是大陸性氣候。',
        correctAnswer: false,
        explanation: '波爾多屬於海洋性氣候，受大西洋影響，氣候溫和濕潤，有利於葡萄的成熟。',
        difficulty: 'easy',
        category: 'climate'
      },
      {
        id: 'l1-1-q4',
        type: 'drag-drop',
        question: '請將以下產區正確拖放到對應的位置：',
        items: [
          { id: 'medoc', text: 'Médoc', correctZone: 'left-bank' },
          { id: 'pomerol', text: 'Pomerol', correctZone: 'right-bank' },
          { id: 'graves', text: 'Graves', correctZone: 'left-bank' },
          { id: 'st-emilion', text: 'St-Émilion', correctZone: 'right-bank' }
        ],
        zones: [
          { id: 'left-bank', label: '左岸' },
          { id: 'right-bank', label: '右岸' }
        ],
        explanation: '左岸主要包括Médoc和Graves產區，右岸包括Pomerol和St-Émilion產區。',
        difficulty: 'medium',
        category: 'regions'
      }
    ],
    'l1-2': [
      {
        id: 'l1-2-q1',
        type: 'multiple-choice',
        question: '波爾多海洋性氣候的主要特徵是什麼？',
        options: [
          '夏季炎熱乾燥，冬季寒冷',
          '溫差大，降雨少',
          '溫和濕潤，溫差適中',
          '常年高溫多雨'
        ],
        correctAnswer: 2,
        explanation: '海洋性氣候的特點是溫和濕潤，年溫差較小，有利於葡萄的緩慢成熟。',
        difficulty: 'easy',
        category: 'climate'
      }
    ]
  },

  // Level 2 測驗題庫
  level2: {
    'l2-1': [
      {
        id: 'l2-1-q1',
        type: 'multiple-choice',
        question: 'Haut-Médoc與普通Médoc AOC的主要區別是什麼？',
        options: [
          '葡萄品種不同',
          '土壤類型完全不同',
          'Haut-Médoc位於更優質的地理位置',
          '釀造方法不同'
        ],
        correctAnswer: 2,
        explanation: 'Haut-Médoc位於Médoc產區的南部，更靠近Gironde河，擁有更好的礫石土壤和微氣候條件。',
        difficulty: 'medium',
        category: 'appellations'
      },
      {
        id: 'l2-1-q2',
        type: 'matching',
        question: '請將四大名村與其特色進行配對：',
        leftItems: [
          { id: 'margaux', text: 'Margaux' },
          { id: 'pauillac', text: 'Pauillac' },
          { id: 'st-julien', text: 'St-Julien' },
          { id: 'st-estephe', text: 'St-Estèphe' }
        ],
        rightItems: [
          { id: 'elegant', text: '優雅芳香' },
          { id: 'powerful', text: '強勁有力' },
          { id: 'balanced', text: '平衡協調' },
          { id: 'structured', text: '結構緊實' }
        ],
        correctMatches: {
          'margaux': 'elegant',
          'pauillac': 'powerful',
          'st-julien': 'balanced',
          'st-estephe': 'structured'
        },
        explanation: '每個村莊都有其獨特的風土條件，造就了不同的酒款風格特色。',
        difficulty: 'hard',
        category: 'wine-styles'
      }
    ]
  },

  // Level 3 測驗題庫
  level3: {
    'l3-1': [
      {
        id: 'l3-1-q1',
        type: 'multiple-choice',
        question: '波爾多過去50年(1970-2020)的平均氣溫上升了多少？',
        options: ['約0.8°C', '約1.7°C', '約2.5°C', '約3.2°C'],
        correctAnswer: 1,
        explanation: '根據氣象數據，波爾多從1970年的12.8°C上升到2020年的14.5°C，上升約1.7°C。',
        difficulty: 'medium',
        category: 'climate'
      }
    ],
    'l3-2': [
      {
        id: 'l3-2-q1',
        type: 'multiple-choice',
        question: '左岸梅多克的典型土壤"Graves"主要指什麼？',
        options: ['黏土', '砂礫土', '石灰岩', '火山土'],
        correctAnswer: 1,
        explanation: 'Graves在法語中就是"砂礫"的意思。左岸的砂礫土排水性極佳，適合卡本內-蘇維濃的種植。',
        difficulty: 'easy',
        category: 'soil'
      }
    ],
    'l3-14': [
      {
        id: 'l3-14-comprehensive-1',
        type: 'case-study',
        question: '作為投資顧問，為客戶設計10萬歐元的波爾多葡萄酒投資組合，考慮以下因素：年份選擇、酒莊配置、風險分散、預期回報。請提供完整方案。',
        scenario: {
          budget: 100000,
          timeframe: '10-20年',
          riskProfile: '穩健型',
          purpose: '50%收藏自飲，50%投資增值'
        },
        evaluationCriteria: [
          '年份選擇的合理性',
          '酒莊配置的平衡性',
          '風險管理策略',
          '流動性考量',
          '預期回報的現實性'
        ],
        difficulty: 'expert',
        category: 'investment'
      },
      {
        id: 'l3-14-comprehensive-2',
        type: 'case-study',
        question: '為米其林三星餐廳的7道式晚宴設計完整餐酒搭配方案，包括生蠔、鵝肝、龍蝦、乳鴿、牛排、羊肋排和甜點。預算5000歐元。',
        scenario: {
          diners: 6,
          occasion: '商務宴會',
          budget: 5000,
          requirement: '展現專業度，平衡創新與經典'
        },
        evaluationCriteria: [
          '配餐邏輯的科學性',
          '酒款選擇的適配性',
          '服務流程的專業性',
          '預算控制的合理性',
          '整體體驗的和諧性'
        ],
        difficulty: 'expert',
        category: 'pairing'
      }
    ]
  },

  // Level 4 測驗題庫
  level4: {
    'l4-1': [
      {
        id: 'l4-1-q1',
        type: 'case-study',
        question: '分析一個具體的波爾多酒莊，評估其投資價值和市場潛力',
        scenario: '某投資者考慮購買Pauillac產區一個二級酒莊的葡萄酒作為投資...',
        tasks: [
          '分析該產區的市場表現',
          '評估氣候變化的影響',
          '比較與一級酒莊的差距',
          '提出投資建議'
        ],
        difficulty: 'expert',
        category: 'market-analysis'
      }
    ]
  }
})

// 測驗配置
export const quizConfig = {
  // 各等級通過標準
  passingScores: {
    level1: 70, // 70%
    level2: 75, // 75%
    level3: 80, // 80%
    level4: 85  // 85%
  },
  
  // 題目類型配置
  questionTypes: {
    'multiple-choice': {
      name: '選擇題',
      icon: '📝',
      maxTime: 60, // 秒
      points: 1
    },
    'true-false': {
      name: '是非題',
      icon: '✅',
      maxTime: 30,
      points: 1
    },
    'drag-drop': {
      name: '拖放題',
      icon: '🎯',
      maxTime: 120,
      points: 2
    },
    'matching': {
      name: '配對題',
      icon: '🔗',
      maxTime: 90,
      points: 2
    },
    'essay': {
      name: '論述題',
      icon: '✍️',
      maxTime: 600,
      points: 5
    },
    'case-study': {
      name: '案例分析',
      icon: '📊',
      maxTime: 1200,
      points: 10
    }
  },
  
  // 難度等級
  difficultyLevels: {
    easy: { name: '簡單', color: '#4CAF50', multiplier: 1.0 },
    medium: { name: '中等', color: '#FF9800', multiplier: 1.2 },
    hard: { name: '困難', color: '#F44336', multiplier: 1.5 },
    expert: { name: '專家', color: '#9C27B0', multiplier: 2.0 }
  },
  
  // 分類系統
  categories: {
    geography: { name: '地理知識', icon: '🗺️' },
    climate: { name: '氣候條件', icon: '🌤️' },
    regions: { name: '產區認知', icon: '🏞️' },
    appellations: { name: 'AOC法規', icon: '📜' },
    'wine-styles': { name: '酒款風格', icon: '🍷' },
    'terroir-analysis': { name: '風土分析', icon: '🧪' },
    'market-analysis': { name: '市場分析', icon: '📈' },
    'grape-varieties': { name: '葡萄品種', icon: '🍇' },
    'winemaking': { name: '釀造工藝', icon: '🏭' },
    'food-pairing': { name: '餐酒搭配', icon: '🍽️' }
  }
}

// 測驗管理類
export class QuizManager {
  constructor() {
    this.currentQuiz = null
    this.quizState = reactive({
      questions: [],
      currentQuestionIndex: 0,
      answers: [],
      startTime: null,
      endTime: null,
      timeRemaining: 0,
      score: 0,
      isCompleted: false,
      results: null
    })
  }

  // 生成測驗
  generateQuiz(level, lessonId, options = {}) {
    const {
      questionCount = 5,
      includeCategories = [],
      difficulty = 'mixed',
      timeLimit = 300 // 5分鐘
    } = options

    const questionPool = quizDatabase[`level${level}`]?.[lessonId] || []
    
    if (questionPool.length === 0) {
      throw new Error(`No questions found for level ${level}, lesson ${lessonId}`)
    }

    // 篩選符合條件的題目
    let filteredQuestions = questionPool.filter(q => {
      if (includeCategories.length > 0 && !includeCategories.includes(q.category)) {
        return false
      }
      if (difficulty !== 'mixed' && q.difficulty !== difficulty) {
        return false
      }
      return true
    })

    // 隨機選擇題目
    const selectedQuestions = this.shuffleArray(filteredQuestions)
      .slice(0, Math.min(questionCount, filteredQuestions.length))

    // 初始化測驗狀態
    this.quizState.questions = selectedQuestions
    this.quizState.currentQuestionIndex = 0
    this.quizState.answers = Array.from({ length: selectedQuestions.length }, () => null)
    this.quizState.startTime = Date.now()
    this.quizState.timeRemaining = timeLimit
    this.quizState.isCompleted = false
    this.quizState.score = 0
    this.quizState.results = null

    return selectedQuestions
  }

  // 提交答案
  submitAnswer(questionIndex, answer) {
    if (questionIndex >= 0 && questionIndex < this.quizState.answers.length) {
      this.quizState.answers[questionIndex] = answer
    }
  }

  // 下一題
  nextQuestion() {
    if (this.quizState.currentQuestionIndex < this.quizState.questions.length - 1) {
      this.quizState.currentQuestionIndex++
      return true
    }
    return false
  }

  // 上一題
  previousQuestion() {
    if (this.quizState.currentQuestionIndex > 0) {
      this.quizState.currentQuestionIndex--
      return true
    }
    return false
  }

  // 完成測驗
  completeQuiz() {
    this.quizState.endTime = Date.now()
    this.quizState.isCompleted = true
    
    // 計算成績
    const results = this.calculateResults()
    this.quizState.results = results
    this.quizState.score = results.totalScore

    return results
  }

  // 計算成績
  calculateResults() {
    const questions = this.quizState.questions
    const answers = this.quizState.answers
    let totalScore = 0
    let maxScore = 0
    const questionResults = []

    questions.forEach((question, index) => {
      const userAnswer = answers[index]
      const isCorrect = this.checkAnswer(question, userAnswer)
      const points = quizConfig.questionTypes[question.type].points
      const difficulty = quizConfig.difficultyLevels[question.difficulty]
      const questionScore = isCorrect ? points * difficulty.multiplier : 0

      questionResults.push({
        questionIndex: index,
        question: question.question,
        userAnswer,
        correctAnswer: this.getCorrectAnswer(question),
        isCorrect,
        points: questionScore,
        explanation: question.explanation,
        category: question.category,
        difficulty: question.difficulty
      })

      totalScore += questionScore
      maxScore += points * difficulty.multiplier
    })

    const percentage = Math.round((totalScore / maxScore) * 100)
    const timeTaken = (this.quizState.endTime - this.quizState.startTime) / 1000

    return {
      totalScore,
      maxScore,
      percentage,
      timeTaken,
      questionResults,
      isPassed: percentage >= quizConfig.passingScores.level1, // 根據實際level調整
      grade: this.calculateGrade(percentage),
      feedback: this.generateFeedback(percentage, questionResults)
    }
  }

  // 檢查答案
  checkAnswer(question, userAnswer) {
    switch (question.type) {
      case 'multiple-choice':
      case 'true-false':
        return userAnswer === question.correctAnswer

      case 'drag-drop':
        if (!userAnswer || !Array.isArray(userAnswer)) return false
        return userAnswer.every(item => 
          question.items.find(qi => qi.id === item.itemId)?.correctZone === item.zone
        )

      case 'matching':
        if (!userAnswer || typeof userAnswer !== 'object') return false
        return Object.keys(question.correctMatches).every(key => 
          userAnswer[key] === question.correctMatches[key]
        )

      case 'essay':
        // 論述題需要人工評分，這裡返回基本檢查
        return userAnswer && userAnswer.length >= 50

      case 'case-study':
        // 案例分析需要複雜評分邏輯
        return userAnswer && this.evaluateCaseStudy(question, userAnswer)

      default:
        return false
    }
  }

  // 獲取正確答案
  getCorrectAnswer(question) {
    switch (question.type) {
      case 'multiple-choice':
        return question.options[question.correctAnswer]
      case 'true-false':
        return question.correctAnswer
      case 'drag-drop':
        return question.items.map(item => ({ itemId: item.id, zone: item.correctZone }))
      case 'matching':
        return question.correctMatches
      default:
        return question.correctAnswer
    }
  }

  // 計算等級
  calculateGrade(percentage) {
    if (percentage >= 95) return 'A+'
    if (percentage >= 90) return 'A'
    if (percentage >= 85) return 'B+'
    if (percentage >= 80) return 'B'
    if (percentage >= 75) return 'C+'
    if (percentage >= 70) return 'C'
    if (percentage >= 65) return 'D+'
    if (percentage >= 60) return 'D'
    return 'F'
  }

  // 生成反饋
  generateFeedback(percentage, questionResults) {
    const feedback = {
      overall: '',
      strengths: [],
      improvements: [],
      recommendations: []
    }

    if (percentage >= 90) {
      feedback.overall = '優秀！您對波爾多葡萄酒知識掌握得非常好！'
    } else if (percentage >= 75) {
      feedback.overall = '良好！您已經理解了大部分重要概念。'
    } else if (percentage >= 60) {
      feedback.overall = '及格，但還有改進的空間。'
    } else {
      feedback.overall = '需要更多學習，建議重新複習課程內容。'
    }

    // 分析強項和弱項
    const categoryStats = {}
    questionResults.forEach(result => {
      if (!categoryStats[result.category]) {
        categoryStats[result.category] = { correct: 0, total: 0 }
      }
      categoryStats[result.category].total++
      if (result.isCorrect) {
        categoryStats[result.category].correct++
      }
    })

    Object.entries(categoryStats).forEach(([category, stats]) => {
      const rate = stats.correct / stats.total
      const categoryName = quizConfig.categories[category]?.name || category
      
      if (rate >= 0.8) {
        feedback.strengths.push(`${categoryName}：表現優異`)
      } else if (rate < 0.5) {
        feedback.improvements.push(`${categoryName}：需要加強練習`)
      }
    })

    // 生成建議
    if (percentage < 70) {
      feedback.recommendations.push('建議重新學習相關課程內容')
      feedback.recommendations.push('多練習互動練習和地圖探索')
    }

    return feedback
  }

  // 工具方法：隨機排序
  shuffleArray(array) {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // 評估案例分析（簡化版）
  evaluateCaseStudy(question, answer) {
    // 這裡應該實現更複雜的評分邏輯
    // 目前只做基本檢查
    return answer && 
           answer.analysis && 
           answer.analysis.length >= 100 &&
           answer.conclusion && 
           answer.conclusion.length >= 50
  }
}

// 創建全域測驗管理器實例
export const globalQuizManager = new QuizManager()