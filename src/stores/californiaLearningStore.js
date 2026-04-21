// 加州葡萄酒學習系統狀態管理
import { reactive, computed } from 'vue'

// 加州學習進度狀態
export const californiaLearningState = reactive({
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

// 加州學習等級配置
export const californiaLearningLevels = {
  level1: {
    title: 'Level 1 - 加州葡萄酒入門',
    description: '建立加州葡萄酒的基礎知識：歷史、六大產區群、品種與餐酒搭配',
    color: '#8B1A1A',
    modules: [
      { id: 'CA1M1', title: '歷史、地理與氣候', lessonIds: ['ca-l1-1', 'ca-l1-2'] },
      { id: 'CA1M2', title: '北海岸：Napa 與 Sonoma', lessonIds: ['ca-l1-3', 'ca-l1-4'] },
      { id: 'CA1M3', title: 'Central Coast 與其他產區', lessonIds: ['ca-l1-5', 'ca-l1-6'] },
      { id: 'CA1M4', title: '品種、品飲與評量', lessonIds: ['ca-l1-7', 'ca-l1-8'] }
    ],
    lessons: [
      {
        id: 'ca-l1-1',
        title: '認識加州葡萄酒',
        description: '探索全球最具代表性的新世界葡萄酒產地——歷史、地位與「巴黎評判」傳奇',
        duration: 15
      },
      {
        id: 'ca-l1-2',
        title: '加州產區地理與氣候',
        description: '六大產區群全解析：太平洋、海岸山脈與海拔如何塑造加州葡萄酒',
        duration: 16
      },
      {
        id: 'ca-l1-3',
        title: 'Napa Valley 深度探索',
        description: '16 個子 AVA、頂級酒莊（Opus One、Harlan Estate）與 Cabernet Sauvignon 王國',
        duration: 20
      },
      {
        id: 'ca-l1-4',
        title: 'Sonoma County 深度探索',
        description: '19 個 AVA、Russian River Pinot Noir、Dry Creek Zinfandel 與可持續農業革命',
        duration: 18
      },
      {
        id: 'ca-l1-5',
        title: 'Central Coast — Paso Robles 到 Santa Barbara',
        description: 'Rhône 品種的新世界聖地、《Sideways》電影的 Pinot 傳奇、Santa Cruz Mountains 老藤',
        duration: 18
      },
      {
        id: 'ca-l1-6',
        title: '其他產區：Mendocino、Sierra Foothills、Lodi',
        description: '有機農業先鋒 Anderson Valley、金礦時代老藤 Sierra Foothills、Zinfandel 之都 Lodi',
        duration: 16
      },
      {
        id: 'ca-l1-7',
        title: '加州主要葡萄品種',
        description: 'Cabernet、Chardonnay、Pinot Noir、Zinfandel 等 8 大品種的特性、產區與品飲指南',
        duration: 20
      },
      {
        id: 'ca-l1-8',
        title: 'Level 1 品飲與綜合評量',
        description: '系統化品飲技巧、餐酒搭配黃金法則，與 15 題 Level 1 知識綜合評量',
        duration: 25
      }
    ]
  },

  level2: {
    title: 'Level 2 - 加州葡萄酒進階',
    description: '深入頂級酒莊、年份研究、膜拜酒文化與進階釀造技術',
    color: '#c9a84c',
    modules: [
      { id: 'CA2M1', title: 'Napa Valley 進階', lessonIds: ['ca-l2-1', 'ca-l2-2'] },
      { id: 'CA2M2', title: '精品產區深度', lessonIds: ['ca-l2-3', 'ca-l2-4'] },
      { id: 'CA2M3', title: '進階評量', lessonIds: ['ca-l2-5', 'ca-l2-6'] }
    ],
    lessons: [
      {
        id: 'ca-l2-1',
        title: 'Napa 膜拜酒（Cult Wine）文化',
        description: 'Harlan Estate、Screaming Eagle、Colgin 等膜拜酒的歷史、市場與品飲解析',
        duration: 20,
        locked: true
      },
      {
        id: 'ca-l2-2',
        title: 'Napa 年份研究（1990-2020）',
        description: '偉大年份（1994、1997、2013、2016）與困難年份的特性分析',
        duration: 22,
        locked: true
      },
      {
        id: 'ca-l2-3',
        title: 'Russian River Valley Pinot 深探',
        description: 'Williams Selyem、Rochioli 等傳奇酒莊與單一葡萄園解析',
        duration: 20,
        locked: true
      },
      {
        id: 'ca-l2-4',
        title: 'Paso Robles Rhône Rangers 進階',
        description: 'Tablas Creek、Justin、DAOU 等酒莊的 Rhône 混釀藝術深度解析',
        duration: 18,
        locked: true
      },
      {
        id: 'ca-l2-5',
        title: '自然酒與有機農業運動',
        description: '加州自然酒先鋒、Biodynamic 農法與 LODI RULES 可持續認證深度解析',
        duration: 20,
        locked: true
      },
      {
        id: 'ca-l2-6',
        title: 'Level 2 綜合評量',
        description: '測驗加州葡萄酒進階知識，取得 Level 2 認證',
        duration: 30,
        locked: true
      }
    ]
  }
}

// 加州學習操作
export const californiaLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = californiaLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    californiaLearningState.currentLevel = level
    californiaLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = californiaLearningLevels[`level${californiaLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      californiaLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    californiaLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!californiaLearningState.completedLessons.includes(lessonId)) {
      californiaLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 ca-l1-3 → level1, ca-l2-1 → level2）
      const match = lessonId.match(/^ca-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : californiaLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (californiaLearningState.userProgress[levelKey]) {
        californiaLearningState.userProgress[levelKey].completed = Math.min(
          californiaLearningState.userProgress[levelKey].completed + 1,
          californiaLearningState.userProgress[levelKey].total
        )
      }
    }
  },

  // 啟用測試模式
  enableTestMode() {
    californiaLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    californiaLearningState.testMode = false
    californiaLearningState.completedLessons = []
    Object.keys(californiaLearningState.userProgress).forEach(key => {
      californiaLearningState.userProgress[key].completed = 0
    })
  }
}

// 計算屬性：整體進度
export const californiaLearningProgress = computed(() => {
  const total = Object.values(californiaLearningState.userProgress).reduce((s, v) => s + v.total, 0)
  const done = Object.values(californiaLearningState.userProgress).reduce((s, v) => s + v.completed, 0)
  return total > 0 ? Math.round(done / total * 100) : 0
})
