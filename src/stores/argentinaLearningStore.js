// 阿根廷（Argentina）學習系統狀態管理
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// 阿根廷學習進度狀態
export const argentinaLearningState = reactive({
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

// 阿根廷學習等級配置（框架版：課程內容待補；大綱以 ARGENTINA_COURSE_FRAMEWORK.md 第 2 節為準）
export const argentinaLearningLevels = {
  "level1": {
    "title": "Level 1 - 阿根廷入門",
    "description": "建立基礎：歷史、安地斯的地理氣候、主要品種、IG／DOC 制度與標籤",
    "color": "#6A2C5E",
    "modules": [
      {
        "id": "AR1M1",
        "title": "歷史與地理",
        "lessonIds": [
          "ar-l1-1",
          "ar-l1-2"
        ]
      },
      {
        "id": "AR1M2",
        "title": "葡萄品種",
        "lessonIds": [
          "ar-l1-3"
        ]
      },
      {
        "id": "AR1M3",
        "title": "制度與評量",
        "lessonIds": [
          "ar-l1-4",
          "ar-l1-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "ar-l1-1",
        "title": "認識阿根廷葡萄酒",
        "description": "殖民傳入、Malbec 的故事與 1990 年代後的現代化",
        "duration": 15
      },
      {
        "id": "ar-l1-2",
        "title": "地理與氣候",
        "description": "安地斯山脈、海拔、沙漠灌溉與 Zonda 風",
        "duration": 16
      },
      {
        "id": "ar-l1-3",
        "title": "葡萄品種",
        "description": "Malbec、Bonarda、Cabernet Sauvignon、Torrontés、Chardonnay 與 Criolla 系品種",
        "duration": 16
      },
      {
        "id": "ar-l1-4",
        "title": "法規與標籤",
        "description": "IG／DOC 制度與品種、年份的標示規定",
        "duration": 18
      },
      {
        "id": "ar-l1-5",
        "title": "Level 1 綜合評量",
        "description": "以綜合測驗檢視 Level 1 的學習成果",
        "duration": 25
      }
    ]
  },
  "level2": {
    "title": "Level 2 - 阿根廷產區與法規",
    "description": "Mendoza 的 Luján de Cuyo 與 Uco Valley，以及北部、San Juan、Patagonia 等產區逐區深入",
    "color": "#84407A",
    "modules": [
      {
        "id": "AR2M1",
        "title": "Mendoza",
        "lessonIds": [
          "ar-l2-1",
          "ar-l2-2"
        ]
      },
      {
        "id": "AR2M2",
        "title": "其他產區",
        "lessonIds": [
          "ar-l2-3",
          "ar-l2-4"
        ]
      },
      {
        "id": "AR2M3",
        "title": "評量",
        "lessonIds": [
          "ar-l2-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "ar-l2-1",
        "title": "Mendoza I：概覽、Luján de Cuyo 與 Maipú",
        "description": "Mendoza 的地理標示層級與傳統核心產區",
        "duration": 22
      },
      {
        "id": "ar-l2-2",
        "title": "Mendoza II：Uco Valley",
        "description": "Tupungato、Tunuyán、San Carlos 與 Gualtallary、Paraje Altamira、La Consulta",
        "duration": 22
      },
      {
        "id": "ar-l2-3",
        "title": "北部：Salta、Catamarca、La Rioja 與 Jujuy",
        "description": "Cafayate 的極端高海拔與 Torrontés",
        "duration": 20
      },
      {
        "id": "ar-l2-4",
        "title": "San Juan、San Rafael 與 Patagonia",
        "description": "San Juan、San Rafael，以及 Río Negro 與 Neuquén 的涼爽產區",
        "duration": 20
      },
      {
        "id": "ar-l2-5",
        "title": "Level 2 綜合評量",
        "description": "重點回顧與綜合測驗",
        "duration": 25
      }
    ]
  },
  "level3": {
    "title": "Level 3 - 阿根廷 Diploma／MW 精修",
    "description": "以 WSET Diploma D3 與 MW 為目標：栽培與氣候、釀造與風土、產業與市場、論述",
    "color": "#3F1738",
    "modules": [
      {
        "id": "AR3M1",
        "title": "栽培與風土",
        "lessonIds": [
          "ar-l3-1",
          "ar-l3-2"
        ]
      },
      {
        "id": "AR3M2",
        "title": "產業與應考",
        "lessonIds": [
          "ar-l3-3"
        ]
      },
      {
        "id": "AR3M3",
        "title": "評量",
        "lessonIds": [
          "ar-l3-4"
        ]
      }
    ],
    "lessons": [
      {
        "id": "ar-l3-1",
        "title": "栽培與氣候",
        "description": "霜害、冰雹、Zonda 風、灌溉權與乾旱、有機與永續",
        "duration": 22
      },
      {
        "id": "ar-l3-2",
        "title": "釀造與風土深度",
        "description": "Malbec 的海拔與土壤風格比較、Torrontés、氣泡酒與混調",
        "duration": 22
      },
      {
        "id": "ar-l3-3",
        "title": "產業、市場與 Diploma 論述",
        "description": "生產者結構、出口與價格帶，以及盲品線索與 MW 論述範例",
        "duration": 22
      },
      {
        "id": "ar-l3-4",
        "title": "Level 3 綜合評量",
        "description": "以模擬題整合全部內容，完成 Level 3",
        "duration": 30
      }
    ]
  }
}

// ── localStorage 進度持久化（依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的進度）──
const ARGENTINA_PROGRESS_KEY = 'argentina-wine-academy-progress'

function progressStorageKey(userId) {
  return `${ARGENTINA_PROGRESS_KEY}:${userId}`
}

function saveProgressToStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    localStorage.setItem(progressStorageKey(userId), JSON.stringify({
      completedLessons: argentinaLearningState.completedLessons,
      userProgress: argentinaLearningState.userProgress
    }))
  } catch (e) { console.warn('[argentina-learn] save error', e) }
}

function loadProgressFromStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    const raw = localStorage.getItem(progressStorageKey(userId))
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.completedLessons)) {
      argentinaLearningState.completedLessons = data.completedLessons
    }
    if (data.userProgress) {
      Object.keys(data.userProgress).forEach(key => {
        if (argentinaLearningState.userProgress[key]) {
          argentinaLearningState.userProgress[key].completed = data.userProgress[key].completed || 0
        }
      })
    }
  } catch (e) { console.warn('[argentina-learn] load error', e) }
}

// 供 ArgentinaLearningSystem 在 Supabase 同步後呼叫，重新載入 store 狀態
export function argentinaReloadFromStorage() {
  argentinaLearningState.completedLessons = []
  Object.keys(argentinaLearningState.userProgress).forEach(k => {
    argentinaLearningState.userProgress[k].completed = 0
  })
  loadProgressFromStorage()
}

// 登入／切換帳號時重新載入該帳號自己的進度，避免殘留前一位使用者的資料
watch(() => authState.user?.id, (userId, prevUserId) => {
  if (userId !== prevUserId) argentinaReloadFromStorage()
})

// 希臘學習操作
export const argentinaLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = argentinaLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    argentinaLearningState.currentLevel = level
    argentinaLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = argentinaLearningLevels[`level${argentinaLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      argentinaLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    argentinaLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!argentinaLearningState.completedLessons.includes(lessonId)) {
      argentinaLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 ar-l1-3 → level1, ar-l2-1 → level2）
      const match = lessonId.match(/^ar-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : argentinaLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (argentinaLearningState.userProgress[levelKey]) {
        argentinaLearningState.userProgress[levelKey].completed = Math.min(
          argentinaLearningState.userProgress[levelKey].completed + 1,
          argentinaLearningState.userProgress[levelKey].total
        )
      }
      saveProgressToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    argentinaLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    argentinaLearningState.testMode = false
    argentinaLearningState.completedLessons = []
    Object.keys(argentinaLearningState.userProgress).forEach(key => {
      argentinaLearningState.userProgress[key].completed = 0
    })
    saveProgressToStorage()
  }
}

// 計算屬性：整體進度
export const argentinaLearningProgress = computed(() => {
  const levels = Object.values(argentinaLearningState.userProgress)
  const totalCompleted = levels.reduce((sum, l) => sum + l.completed, 0)
  const totalLessons = levels.reduce((sum, l) => sum + l.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})
