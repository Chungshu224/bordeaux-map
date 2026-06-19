// 匈牙利葡萄酒學習系統狀態管理
import { reactive, computed } from 'vue'

// 匈牙利學習進度狀態
export const hungaryLearningState = reactive({
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

// 匈牙利學習等級配置
export const hungaryLearningLevels = {
  level1: {
    title: 'Level 1 - 匈牙利葡萄酒入門',
    description: '建立匈牙利葡萄酒的基礎知識：歷史地理、品種、產區與代表酒款',
    color: '#c8102e',
    modules: [
      { id: 'HU1M1', title: '歷史、地理與氣候', lessonIds: ['hu-l1-1', 'hu-l1-2'] },
      { id: 'HU1M2', title: '葡萄品種全覽', lessonIds: ['hu-l1-3', 'hu-l1-4'] },
      { id: 'HU1M3', title: '主要產區群', lessonIds: ['hu-l1-5', 'hu-l1-6'] },
      { id: 'HU1M4', title: '酒款類型與品飲', lessonIds: ['hu-l1-7', 'hu-l1-8'] }
    ],
    lessons: [
      {
        id: 'hu-l1-1',
        title: '認識匈牙利葡萄酒',
        description: '探索匈牙利葡萄酒的歷史傳奇、文化地位與全球影響力',
        duration: 15
      },
      {
        id: 'hu-l1-2',
        title: '地理環境與氣候',
        description: '了解喀爾巴阡盆地、22 個法定產區和五大產區群的分布',
        duration: 16
      },
      {
        id: 'hu-l1-3',
        title: '主要白葡萄品種',
        description: '深入認識 Furmint、Hárslevelű、Olaszrizling 等原生白葡萄',
        duration: 18
      },
      {
        id: 'hu-l1-4',
        title: '主要紅葡萄品種',
        description: '探索 Kékfrankos、Kadarka、Cabernet Franc 等匈牙利重要紅葡萄',
        duration: 16
      },
      {
        id: 'hu-l1-5',
        title: '五大產區群介紹',
        description: '從托卡伊到維拉尼，認識匈牙利葡萄酒的五大地理版圖',
        duration: 18
      },
      {
        id: 'hu-l1-6',
        title: '托卡伊深度探索',
        description: '解密 Aszú 貴腐甜酒制度、Puttonyos 分級與干型 Furmint 革命',
        duration: 20
      },
      {
        id: 'hu-l1-7',
        title: '葡萄酒類型與風格',
        description: '了解 Tokaji Aszú、Egri Bikavér、Villányi Franc 等代表酒款',
        duration: 18
      },
      {
        id: 'hu-l1-8',
        title: 'Level 1 品飲與綜合評量',
        description: '掌握品飲技巧、餐酒搭配，並通過 Level 1 知識測驗',
        duration: 25
      }
    ]
  },

  level2: {
    title: 'Level 2 - 匈牙利葡萄酒進階',
    description: '深入各產區風土、頂級酒莊與年份差異，提升品飲和鑑別能力',
    color: '#477050',
    modules: [
      { id: 'HU2M1', title: '托卡伊深度', lessonIds: ['hu-l2-1', 'hu-l2-2'] },
      { id: 'HU2M2', title: '頂級紅酒產區', lessonIds: ['hu-l2-3', 'hu-l2-4'] },
      { id: 'HU2M3', title: '進階評量', lessonIds: ['hu-l2-5', 'hu-l2-6'] }
    ],
    lessons: [
      {
        id: 'hu-l2-1',
        title: '托卡伊頂級酒莊解析',
        description: '深入了解 Royal Tokaji、Oremus、Disznókő 等頂級酒莊',
        duration: 20,
        locked: true
      },
      {
        id: 'hu-l2-2',
        title: '托卡伊年份差異',
        description: '分析傳奇年份與普通年份的關鍵差異，學習年份評分',
        duration: 18,
        locked: true
      },
      {
        id: 'hu-l2-3',
        title: '維拉尼頂級酒莊',
        description: '探索 Gere、Bock、Malatinszky 等知名維拉尼酒莊',
        duration: 20,
        locked: true
      },
      {
        id: 'hu-l2-4',
        title: '埃格爾與北匈牙利',
        description: '公牛血的深度解析：頂級 Bikavér Superior 酒莊與風格',
        duration: 18,
        locked: true
      },
      {
        id: 'hu-l2-5',
        title: '進階品飲技術',
        description: '盲品匈牙利葡萄酒的思維框架與專業分析技巧',
        duration: 22,
        locked: true
      },
      {
        id: 'hu-l2-6',
        title: 'Level 2 綜合評量',
        description: '測驗匈牙利葡萄酒進階知識，取得 Level 2 認證',
        duration: 30,
        locked: true
      }
    ]
  }
}

// ── localStorage 進度持久化 ───────────────────────────────────
const HUNGARY_PROGRESS_KEY = 'hungary-wine-academy-progress'

function saveProgressToStorage() {
  try {
    localStorage.setItem(HUNGARY_PROGRESS_KEY, JSON.stringify({
      completedLessons: hungaryLearningState.completedLessons,
      userProgress: hungaryLearningState.userProgress
    }))
  } catch (e) { console.warn('[hungary-learn] save error', e) }
}

function loadProgressFromStorage() {
  try {
    const raw = localStorage.getItem(HUNGARY_PROGRESS_KEY)
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.completedLessons)) {
      hungaryLearningState.completedLessons = data.completedLessons
    }
    if (data.userProgress) {
      Object.keys(data.userProgress).forEach(key => {
        if (hungaryLearningState.userProgress[key]) {
          hungaryLearningState.userProgress[key].completed = data.userProgress[key].completed || 0
        }
      })
    }
  } catch (e) { console.warn('[hungary-learn] load error', e) }
}

// 模組載入時立即恢復進度
loadProgressFromStorage()

// 供 HungaryLearningSystem 在 Supabase 同步後呼叫，重新載入 store 狀態
export function hungaryReloadFromStorage() {
  hungaryLearningState.completedLessons = []
  Object.keys(hungaryLearningState.userProgress).forEach(k => {
    hungaryLearningState.userProgress[k].completed = 0
  })
  loadProgressFromStorage()
}

// 匈牙利學習操作
export const hungaryLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = hungaryLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    hungaryLearningState.currentLevel = level
    hungaryLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = hungaryLearningLevels[`level${hungaryLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      hungaryLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    hungaryLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!hungaryLearningState.completedLessons.includes(lessonId)) {
      hungaryLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 hu-l1-3 → level1, hu-l2-1 → level2）
      const match = lessonId.match(/^hu-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : hungaryLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (hungaryLearningState.userProgress[levelKey]) {
        hungaryLearningState.userProgress[levelKey].completed = Math.min(
          hungaryLearningState.userProgress[levelKey].completed + 1,
          hungaryLearningState.userProgress[levelKey].total
        )
      }
      saveProgressToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    hungaryLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    hungaryLearningState.testMode = false
    hungaryLearningState.completedLessons = []
    Object.keys(hungaryLearningState.userProgress).forEach(key => {
      hungaryLearningState.userProgress[key].completed = 0
    })
    saveProgressToStorage()
  }
}

// 計算屬性：整體進度
export const hungaryLearningProgress = computed(() => {
  const levels = Object.values(hungaryLearningState.userProgress)
  const totalCompleted = levels.reduce((sum, l) => sum + l.completed, 0)
  const totalLessons = levels.reduce((sum, l) => sum + l.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})
