// 摩洛哥課程學習系統狀態管理
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// 摩洛哥課程學習進度狀態
export const moroccoLearningState = reactive({
  currentLevel: 1,
  currentLesson: null,
  completedLessons: [],
  testMode: false,
  userProgress: {
    level1: { completed: 0, total: 5 },
    level2: { completed: 0, total: 5 }
  },
  achievements: []
})

// 摩洛哥課程學習等級配置（大綱以 MOROCCO_COURSE_FRAMEWORK.md 為準）
export const moroccoLearningLevels = {
  "level1": {
    "title": "Level 1 - 認識摩洛哥",
    "description": "地理與風土、從殖民到復興的歷史、品種與灰酒、產業與市場",
    "color": "#C1272D",
    "modules": [
      {
        "id": "MA1M1",
        "title": "風土與歷史",
        "lessonIds": [
          "ma-l1-1",
          "ma-l1-2"
        ]
      },
      {
        "id": "MA1M2",
        "title": "品種與產業",
        "lessonIds": [
          "ma-l1-3",
          "ma-l1-4"
        ]
      },
      {
        "id": "MA1M3",
        "title": "綜合複習",
        "lessonIds": [
          "ma-l1-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "ma-l1-1",
        "title": "葡萄園在哪裡：地理與風土",
        "description": "產區分布、氣候、海拔與土壤",
        "duration": 18
      },
      {
        "id": "ma-l1-2",
        "title": "從殖民葡萄園到外資復興",
        "description": "法國時期、獨立後的衰退與 1990 年代的復興",
        "duration": 18
      },
      {
        "id": "ma-l1-3",
        "title": "品種與風格",
        "description": "法定品種、南法傳統品種、國際品種與灰酒",
        "duration": 18
      },
      {
        "id": "ma-l1-4",
        "title": "產業結構與市場",
        "description": "規模、主要酒廠、內銷市場與伊斯蘭社會的環境",
        "duration": 18
      },
      {
        "id": "ma-l1-5",
        "title": "Level 1 綜合複習",
        "description": "回顧風土、歷史、品種與產業，完成綜合評量",
        "duration": 15
      }
    ]
  },
  "level2": {
    "title": "Level 2 - 產區與法規",
    "description": "AOG 制度、14 個 AOG、三個 AOC 的細則與酒標判讀",
    "color": "#006233",
    "modules": [
      {
        "id": "MA2M1",
        "title": "AOG",
        "lessonIds": [
          "ma-l2-1",
          "ma-l2-2"
        ]
      },
      {
        "id": "MA2M2",
        "title": "AOC 與酒標",
        "lessonIds": [
          "ma-l2-3",
          "ma-l2-4"
        ]
      },
      {
        "id": "MA2M3",
        "title": "總複習",
        "lessonIds": [
          "ma-l2-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "ma-l2-1",
        "title": "AOG 制度",
        "description": "1977 年的法規基礎與取得 AOG 的條件",
        "duration": 20
      },
      {
        "id": "ma-l2-2",
        "title": "14 個 AOG 一次看懂",
        "description": "由東到西認識每個 AOG 的位置",
        "duration": 22
      },
      {
        "id": "ma-l2-3",
        "title": "AOC：三個法定細則",
        "description": "AOC 一般規定、Coteaux de l'Atlas、Crémant de l'Atlas 與 Côtes de Rommani",
        "duration": 22
      },
      {
        "id": "ma-l2-4",
        "title": "酒標判讀",
        "description": "必要標示、選擇性標示與禁止用語",
        "duration": 18
      },
      {
        "id": "ma-l2-5",
        "title": "總複習與綜合評量",
        "description": "串起產區、法規與市場，完成總評量與簡答",
        "duration": 20
      }
    ]
  }
}

// ── localStorage 進度持久化（依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的進度）──
const DIPLOMA_PROGRESS_KEY = 'morocco-wine-academy-progress'

function progressStorageKey(userId) {
  return `${DIPLOMA_PROGRESS_KEY}:${userId}`
}

function saveProgressToStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    localStorage.setItem(progressStorageKey(userId), JSON.stringify({
      completedLessons: moroccoLearningState.completedLessons,
      userProgress: moroccoLearningState.userProgress
    }))
  } catch (e) { console.warn('[morocco-learn] save error', e) }
}

function loadProgressFromStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    const raw = localStorage.getItem(progressStorageKey(userId))
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.completedLessons)) {
      moroccoLearningState.completedLessons = data.completedLessons
    }
    if (data.userProgress) {
      Object.keys(data.userProgress).forEach(key => {
        if (moroccoLearningState.userProgress[key]) {
          moroccoLearningState.userProgress[key].completed = data.userProgress[key].completed || 0
        }
      })
    }
  } catch (e) { console.warn('[morocco-learn] load error', e) }
}

// 供 MoroccoLearningSystem 在 Supabase 同步後呼叫，重新載入 store 狀態
export function moroccoReloadFromStorage() {
  moroccoLearningState.completedLessons = []
  Object.keys(moroccoLearningState.userProgress).forEach(k => {
    moroccoLearningState.userProgress[k].completed = 0
  })
  loadProgressFromStorage()
}

// 登入／切換帳號時重新載入該帳號自己的進度，避免殘留前一位使用者的資料
watch(() => authState.user?.id, (userId, prevUserId) => {
  if (userId !== prevUserId) moroccoReloadFromStorage()
})

// 摩洛哥課程學習操作
export const moroccoLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = moroccoLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    moroccoLearningState.currentLevel = level
    moroccoLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = moroccoLearningLevels[`level${moroccoLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      moroccoLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    moroccoLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!moroccoLearningState.completedLessons.includes(lessonId)) {
      moroccoLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 ma-l1-3 → level1, ma-l2-1 → level2）
      const match = lessonId.match(/^ma-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : moroccoLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (moroccoLearningState.userProgress[levelKey]) {
        moroccoLearningState.userProgress[levelKey].completed = Math.min(
          moroccoLearningState.userProgress[levelKey].completed + 1,
          moroccoLearningState.userProgress[levelKey].total
        )
      }
      saveProgressToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    moroccoLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    moroccoLearningState.testMode = false
    moroccoLearningState.completedLessons = []
    Object.keys(moroccoLearningState.userProgress).forEach(key => {
      moroccoLearningState.userProgress[key].completed = 0
    })
    saveProgressToStorage()
  }
}

// 計算屬性：整體進度
export const moroccoLearningProgress = computed(() => {
  const levels = Object.values(moroccoLearningState.userProgress)
  const totalCompleted = levels.reduce((sum, l) => sum + l.completed, 0)
  const totalLessons = levels.reduce((sum, l) => sum + l.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})
