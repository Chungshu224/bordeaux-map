// 羅亞爾河谷葡萄酒學習系統狀態管理
import { reactive, computed } from 'vue'

// 羅亞爾學習進度狀態
export const loireLearningState = reactive({
  currentLevel: 1,
  currentLesson: null,
  completedLessons: [],
  testMode: false,
  userProgress: {
    level1: { completed: 0, total: 8 },
    level2: { completed: 0, total: 6 }
  },
  achievements: []
})

// 羅亞爾學習等級配置
export const loireLearningLevels = {
  level1: {
    title: 'Level 1 - 羅亞爾河谷葡萄酒入門',
    description: '建立羅亞爾河谷葡萄酒的基礎知識：歷史地理、品種、四大產區與代表酒款',
    color: '#2e5c3e',
    modules: [
      { id: 'LO1M1', title: '歷史、地理與氣候', lessonIds: ['lo-l1-1', 'lo-l1-2'] },
      { id: 'LO1M2', title: '白葡萄品種全覽', lessonIds: ['lo-l1-3', 'lo-l1-4'] },
      { id: 'LO1M3', title: '紅葡萄品種與四大產區', lessonIds: ['lo-l1-5', 'lo-l1-6'] },
      { id: 'LO1M4', title: '酒款類型與品飲', lessonIds: ['lo-l1-7', 'lo-l1-8'] }
    ],
    lessons: [
      {
        id: 'lo-l1-1',
        title: '認識羅亞爾河谷葡萄酒',
        description: '探索法國最長河流孕育的葡萄酒王國——歷史、多樣性與全球地位',
        duration: 15
      },
      {
        id: 'lo-l1-2',
        title: '地理環境與氣候',
        description: '了解 800 公里的葡萄酒旅程：四大子產區、五種土壤與氣候過渡',
        duration: 16
      },
      {
        id: 'lo-l1-3',
        title: 'Chenin Blanc — 羅亞爾河的靈魂',
        description: '深入認識最重要的白葡萄：從干型 Savennières 到甜酒 Grand Cru',
        duration: 20
      },
      {
        id: 'lo-l1-4',
        title: '其他主要白葡萄品種',
        description: 'Melon de Bourgogne（Muscadet）、Sauvignon Blanc（Sancerre/Pouilly-Fumé）與其他白品種',
        duration: 18
      },
      {
        id: 'lo-l1-5',
        title: '紅葡萄品種',
        description: '認識 Cabernet Franc、Gamay、Côt（Malbec）、Pineau d\'Aunis 與羅亞爾紅酒哲學',
        duration: 16
      },
      {
        id: 'lo-l1-6',
        title: '四大產區深度探索',
        description: '從 Pays Nantais 到 Centre-Loire，完成 800 公里的葡萄酒旅程',
        duration: 20
      },
      {
        id: 'lo-l1-7',
        title: '酒款類型與風格',
        description: '氣泡酒、干型白酒光譜、甜酒金字塔、紅酒與粉紅酒的完整風格地圖',
        duration: 18
      },
      {
        id: 'lo-l1-8',
        title: 'Level 1 品飲與綜合評量',
        description: '掌握品飲技巧、餐酒搭配黃金法則，並通過 Level 1 知識測驗',
        duration: 25
      }
    ]
  },

  level2: {
    title: 'Level 2 - 羅亞爾河谷葡萄酒進階',
    description: '深入各產區頂級酒莊、年份研究與進階釀造技術，提升品飲和鑑別能力',
    color: '#c9a84c',
    modules: [
      { id: 'LO2M1', title: 'Chenin Blanc 進階', lessonIds: ['lo-l2-1', 'lo-l2-2'] },
      { id: 'LO2M2', title: '頂級產區深度', lessonIds: ['lo-l2-3', 'lo-l2-4'] },
      { id: 'LO2M3', title: '進階評量', lessonIds: ['lo-l2-5', 'lo-l2-6'] }
    ],
    lessons: [
      {
        id: 'lo-l2-1',
        title: 'Quarts de Chaume — Grand Cru 解析',
        description: '深入探索羅亞爾唯一 Grand Cru 甜酒：土壤、年份與頂級生產者',
        duration: 20,
        locked: true
      },
      {
        id: 'lo-l2-2',
        title: 'Savennières 頂級地塊研究',
        description: 'Coulée de Serrant、Roche aux Moines 與片岩土壤對 Chenin 的影響',
        duration: 18,
        locked: true
      },
      {
        id: 'lo-l2-3',
        title: 'Sancerre 與 Pouilly-Fumé 進階',
        description: '三種土壤的詳細分析、頂級生產者與年份品鑑指南',
        duration: 20,
        locked: true
      },
      {
        id: 'lo-l2-4',
        title: 'Chinon 老藤凝灰石款深探',
        description: '凝灰石 vs 礫石的風格對比，Bernard Baudry、Philippe Alliet 等頂級酒莊解析',
        duration: 18,
        locked: true
      },
      {
        id: 'lo-l2-5',
        title: '自然酒運動與羅亞爾',
        description: '羅亞爾為何成為法國自然酒運動的搖籃？核心生產者與哲學',
        duration: 22,
        locked: true
      },
      {
        id: 'lo-l2-6',
        title: 'Level 2 綜合評量',
        description: '測驗羅亞爾河谷葡萄酒進階知識，取得 Level 2 認證',
        duration: 30,
        locked: true
      }
    ]
  }
}

// 羅亞爾學習操作
export const loireLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = loireLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    loireLearningState.currentLevel = level
    loireLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = loireLearningLevels[`level${loireLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      loireLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    loireLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!loireLearningState.completedLessons.includes(lessonId)) {
      loireLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 lo-l1-3 → level1, lo-l2-1 → level2）
      const match = lessonId.match(/^lo-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : loireLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (loireLearningState.userProgress[levelKey]) {
        loireLearningState.userProgress[levelKey].completed = Math.min(
          loireLearningState.userProgress[levelKey].completed + 1,
          loireLearningState.userProgress[levelKey].total
        )
      }
    }
  },

  // 啟用測試模式
  enableTestMode() {
    loireLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    loireLearningState.testMode = false
    loireLearningState.completedLessons = []
    Object.keys(loireLearningState.userProgress).forEach(key => {
      loireLearningState.userProgress[key].completed = 0
    })
  }
}

// 計算屬性：整體進度
export const loireLearningProgress = computed(() => {
  const total = Object.values(loireLearningState.userProgress).reduce((s, v) => s + v.total, 0)
  const done = Object.values(loireLearningState.userProgress).reduce((s, v) => s + v.completed, 0)
  return total > 0 ? Math.round(done / total * 100) : 0
})
