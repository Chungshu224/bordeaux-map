// 智利（Chile）學習系統狀態管理
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// 智利學習進度狀態
export const chileLearningState = reactive({
  currentLevel: 1,
  currentLesson: null,
  completedLessons: [],
  testMode: false,
  userProgress: {
    level1: { completed: 0, total: 6 },
    level2: { completed: 0, total: 8 },
    level3: { completed: 0, total: 7 }
  },
  achievements: []
})

// 智利學習等級配置（框架版：課程內容待補；大綱以 CHILE_COURSE_FRAMEWORK.md 第 2 節為準）
export const chileLearningLevels = {
  "level1": {
    "title": "Level 1 - 智利入門",
    "description": "建立基礎：歷史、縱向地形與寒流的地理氣候、主要品種、DO 制度與標籤",
    "color": "#A4343A",
    "modules": [
      {
        "id": "CL1M1",
        "title": "歷史與地理",
        "lessonIds": [
          "cl-l1-1",
          "cl-l1-2"
        ]
      },
      {
        "id": "CL1M2",
        "title": "葡萄品種",
        "lessonIds": [
          "cl-l1-3"
        ]
      },
      {
        "id": "CL1M3",
        "title": "制度與評量",
        "lessonIds": [
          "cl-l1-4",
          "cl-l1-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "cl-l1-1",
        "title": "認識智利葡萄酒",
        "description": "殖民傳入、法國品種與 Carmenère 的重新發現",
        "duration": 15
      },
      {
        "id": "cl-l1-2",
        "title": "地理與氣候",
        "description": "縱向地形、安地斯與海岸山脈、Humboldt 寒流與灌溉",
        "duration": 16
      },
      {
        "id": "cl-l1-3",
        "title": "葡萄品種",
        "description": "Cabernet Sauvignon、Carmenère、Merlot、País、Carignan、Sauvignon Blanc、Chardonnay 與 Pinot Noir",
        "duration": 16
      },
      {
        "id": "cl-l1-4",
        "title": "法規與標籤",
        "description": "DO 層級與 Costa／Entre Cordilleras／Andes",
        "duration": 18
      },
      {
        "id": "cl-l1-5",
        "title": "Level 1 綜合評量",
        "description": "以綜合測驗檢視 Level 1 的學習成果",
        "duration": 25
      }
    ]
  },
  "level2": {
    "title": "Level 2 - 智利產區與法規",
    "description": "Aconcagua、Central Valley，以及北部與南部各產區逐區深入",
    "color": "#B84A50",
    "modules": [
      {
        "id": "CL2M1",
        "title": "Aconcagua 與 Central Valley",
        "lessonIds": [
          "cl-l2-1",
          "cl-l2-2",
          "cl-l2-3"
        ]
      },
      {
        "id": "CL2M2",
        "title": "北部與南部",
        "lessonIds": [
          "cl-l2-4"
        ]
      },
      {
        "id": "CL2M3",
        "title": "評量",
        "lessonIds": [
          "cl-l2-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "cl-l2-1",
        "title": "Aconcagua 區：Aconcagua、Casablanca 與 San Antonio",
        "description": "Aconcagua Valley、Casablanca Valley 與 San Antonio／Leyda",
        "duration": 22
      },
      {
        "id": "cl-l2-2",
        "title": "Central Valley I：Maipo 與 Cachapoal",
        "description": "Maipo Valley 與 Cachapoal Valley",
        "duration": 22
      },
      {
        "id": "cl-l2-3",
        "title": "Central Valley II：Colchagua、Curicó 與 Maule",
        "description": "Colchagua（Apalta）、Curicó Valley 與 Maule Valley",
        "duration": 22
      },
      {
        "id": "cl-l2-4",
        "title": "北部與南部產區",
        "description": "Elqui、Limarí、Choapa 與 Itata、Bío-Bío、Malleco",
        "duration": 20
      },
      {
        "id": "cl-l2-5",
        "title": "Level 2 綜合評量",
        "description": "重點回顧與綜合測驗",
        "duration": 25
      }
    ]
  },
  "level3": {
    "title": "Level 3 - 智利 Diploma／MW 精修",
    "description": "以 WSET Diploma D3 與 MW 為目標：栽培與氣候、釀造與風土、產業與市場、論述",
    "color": "#5E1B20",
    "modules": [
      {
        "id": "CL3M1",
        "title": "栽培與風土",
        "lessonIds": [
          "cl-l3-1",
          "cl-l3-2"
        ]
      },
      {
        "id": "CL3M2",
        "title": "產業與應考",
        "lessonIds": [
          "cl-l3-3"
        ]
      },
      {
        "id": "CL3M3",
        "title": "評量",
        "lessonIds": [
          "cl-l3-4"
        ]
      }
    ],
    "lessons": [
      {
        "id": "cl-l3-1",
        "title": "栽培與氣候",
        "description": "自根苗、乾旱與灌溉權、地震、野火、有機與永續",
        "duration": 22
      },
      {
        "id": "cl-l3-2",
        "title": "釀造與風土深度",
        "description": "Carmenère 成熟度、Maipo Cabernet、VIGNO 與 Costa vs Andes",
        "duration": 22
      },
      {
        "id": "cl-l3-3",
        "title": "產業、市場與 Diploma 論述",
        "description": "生產者結構、出口與價格帶，以及盲品線索與 MW 論述範例",
        "duration": 22
      },
      {
        "id": "cl-l3-4",
        "title": "Level 3 綜合評量",
        "description": "以模擬題整合全部內容，完成 Level 3",
        "duration": 30
      }
    ]
  }
}

// ── localStorage 進度持久化（依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的進度）──
const CHILE_PROGRESS_KEY = 'chile-wine-academy-progress'

function progressStorageKey(userId) {
  return `${CHILE_PROGRESS_KEY}:${userId}`
}

function saveProgressToStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    localStorage.setItem(progressStorageKey(userId), JSON.stringify({
      completedLessons: chileLearningState.completedLessons,
      userProgress: chileLearningState.userProgress
    }))
  } catch (e) { console.warn('[chile-learn] save error', e) }
}

function loadProgressFromStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    const raw = localStorage.getItem(progressStorageKey(userId))
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.completedLessons)) {
      chileLearningState.completedLessons = data.completedLessons
    }
    if (data.userProgress) {
      Object.keys(data.userProgress).forEach(key => {
        if (chileLearningState.userProgress[key]) {
          chileLearningState.userProgress[key].completed = data.userProgress[key].completed || 0
        }
      })
    }
  } catch (e) { console.warn('[chile-learn] load error', e) }
}

// 供 ChileLearningSystem 在 Supabase 同步後呼叫，重新載入 store 狀態
export function chileReloadFromStorage() {
  chileLearningState.completedLessons = []
  Object.keys(chileLearningState.userProgress).forEach(k => {
    chileLearningState.userProgress[k].completed = 0
  })
  loadProgressFromStorage()
}

// 登入／切換帳號時重新載入該帳號自己的進度，避免殘留前一位使用者的資料
watch(() => authState.user?.id, (userId, prevUserId) => {
  if (userId !== prevUserId) chileReloadFromStorage()
})

// 希臘學習操作
export const chileLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = chileLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    chileLearningState.currentLevel = level
    chileLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = chileLearningLevels[`level${chileLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      chileLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    chileLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!chileLearningState.completedLessons.includes(lessonId)) {
      chileLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 cl-l1-3 → level1, cl-l2-1 → level2）
      const match = lessonId.match(/^cl-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : chileLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (chileLearningState.userProgress[levelKey]) {
        chileLearningState.userProgress[levelKey].completed = Math.min(
          chileLearningState.userProgress[levelKey].completed + 1,
          chileLearningState.userProgress[levelKey].total
        )
      }
      saveProgressToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    chileLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    chileLearningState.testMode = false
    chileLearningState.completedLessons = []
    Object.keys(chileLearningState.userProgress).forEach(key => {
      chileLearningState.userProgress[key].completed = 0
    })
    saveProgressToStorage()
  }
}

// 計算屬性：整體進度
export const chileLearningProgress = computed(() => {
  const levels = Object.values(chileLearningState.userProgress)
  const totalCompleted = levels.reduce((sum, l) => sum + l.completed, 0)
  const totalLessons = levels.reduce((sum, l) => sum + l.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})
