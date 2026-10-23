// 希臘葡萄酒學習系統狀態管理
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// 希臘學習進度狀態
export const greeceLearningState = reactive({
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

// 希臘學習等級配置（框架版：課程內容待補）
export const greeceLearningLevels = {
  "level1": {
    "title": "Level 1 - 希臘葡萄酒入門",
    "description": "建立希臘葡萄酒基礎：歷史、地理氣候、本土品種與六大產區",
    "color": "#0D5EAF",
    "modules": [
      {
        "id": "GR1M1",
        "title": "歷史、地理與栽培",
        "lessonIds": [
          "gr-l1-1",
          "gr-l1-2"
        ]
      },
      {
        "id": "GR1M2",
        "title": "葡萄品種",
        "lessonIds": [
          "gr-l1-3",
          "gr-l1-4"
        ]
      },
      {
        "id": "GR1M3",
        "title": "產區總覽與評量",
        "lessonIds": [
          "gr-l1-5",
          "gr-l1-6"
        ]
      }
    ],
    "lessons": [
      {
        "id": "gr-l1-1",
        "title": "認識希臘葡萄酒",
        "description": "從古希臘酒神文化到 Retsina 的形象，理解希臘酒的歷史脈絡與現代復興",
        "duration": 15
      },
      {
        "id": "gr-l1-2",
        "title": "地理、氣候與葡萄栽培",
        "description": "理解希臘的地形與氣候如何塑造葡萄栽培方式",
        "duration": 16
      },
      {
        "id": "gr-l1-3",
        "title": "主要白葡萄品種",
        "description": "認識希臘最重要的本土白葡萄及其風格",
        "duration": 18
      },
      {
        "id": "gr-l1-4",
        "title": "主要紅葡萄品種",
        "description": "認識希臘最重要的紅葡萄與風格輪廓",
        "duration": 16
      },
      {
        "id": "gr-l1-5",
        "title": "希臘產區總覽",
        "description": "以地理區為單位，建立希臘產區的整體地圖",
        "duration": 18
      },
      {
        "id": "gr-l1-6",
        "title": "Level 1 綜合評量",
        "description": "整合品種、產區與風格，通過 Level 1 測驗",
        "duration": 25
      }
    ]
  },
  "level2": {
    "title": "Level 2 - 希臘產區與法規",
    "description": "逐區掌握 PDO／PGI 法規、各產區風格與甜酒傳統",
    "color": "#1C7C9C",
    "modules": [
      {
        "id": "GR2M1",
        "title": "分級制度",
        "lessonIds": [
          "gr-l2-1"
        ]
      },
      {
        "id": "GR2M2",
        "title": "北部與伯羅奔尼撒",
        "lessonIds": [
          "gr-l2-2",
          "gr-l2-3"
        ]
      },
      {
        "id": "GR2M3",
        "title": "島嶼產區",
        "lessonIds": [
          "gr-l2-4",
          "gr-l2-5"
        ]
      },
      {
        "id": "GR2M4",
        "title": "其餘產區、甜酒與評量",
        "lessonIds": [
          "gr-l2-6",
          "gr-l2-7",
          "gr-l2-8"
        ]
      }
    ],
    "lessons": [
      {
        "id": "gr-l2-1",
        "title": "分級制度：PDO、PGI 與傳統名稱",
        "description": "掌握希臘現行分級架構、新舊制度對照與陳年標示用語",
        "duration": 20
      },
      {
        "id": "gr-l2-2",
        "title": "馬其頓與色薩利",
        "description": "逐一掌握北部各 PDO 的品種、風土與風格",
        "duration": 20
      },
      {
        "id": "gr-l2-3",
        "title": "伯羅奔尼撒",
        "description": "理解伯羅奔尼撒各 PDO 的差異與代表風格",
        "duration": 20
      },
      {
        "id": "gr-l2-4",
        "title": "聖托里尼與愛琴海島嶼",
        "description": "以 Santorini 為核心，延伸到愛琴海各島 PDO",
        "duration": 22
      },
      {
        "id": "gr-l2-5",
        "title": "克里特與愛奧尼亞群島",
        "description": "掌握克里特與愛奧尼亞各 PDO 的品種與風格",
        "duration": 20
      },
      {
        "id": "gr-l2-6",
        "title": "伊庇魯斯、中希臘、色雷斯與 Retsina",
        "description": "補齊其餘產區，並理解 Retsina 的製法與定位",
        "duration": 18
      },
      {
        "id": "gr-l2-7",
        "title": "甜酒與傳統酒款",
        "description": "理解希臘甜酒的類型、製法與品質線索",
        "duration": 18
      },
      {
        "id": "gr-l2-8",
        "title": "Level 2 綜合評量",
        "description": "整合 PDO 清單、品種與風格，通過 Level 2 測驗",
        "duration": 30
      }
    ]
  },
  "level3": {
    "title": "Level 3 - 希臘葡萄酒 Diploma 精修",
    "description": "以 WSET Diploma 為目標：栽培釀造深度、風土比較、法規判讀、產業與應考技巧",
    "color": "#B8902A",
    "modules": [
      {
        "id": "GR3M1",
        "title": "栽培與釀造",
        "lessonIds": [
          "gr-l3-1",
          "gr-l3-2"
        ]
      },
      {
        "id": "GR3M2",
        "title": "風土、品種與法規",
        "lessonIds": [
          "gr-l3-3",
          "gr-l3-4"
        ]
      },
      {
        "id": "GR3M3",
        "title": "產業、應考與評量",
        "lessonIds": [
          "gr-l3-5",
          "gr-l3-6",
          "gr-l3-7"
        ]
      }
    ],
    "lessons": [
      {
        "id": "gr-l3-1",
        "title": "葡萄栽培深度",
        "description": "以 Diploma 考試角度，分析希臘各產區的栽培挑戰與對策",
        "duration": 22
      },
      {
        "id": "gr-l3-2",
        "title": "釀造與風格",
        "description": "分析主要酒款的釀造選擇如何決定風格",
        "duration": 22
      },
      {
        "id": "gr-l3-3",
        "title": "風土比較與品種剖析",
        "description": "建立可用於盲品與論述題的比較框架",
        "duration": 24
      },
      {
        "id": "gr-l3-4",
        "title": "法規深度與標籤判讀",
        "description": "精確掌握法規條文、名稱拼寫與常見混淆點",
        "duration": 22
      },
      {
        "id": "gr-l3-5",
        "title": "產業、市場與貿易",
        "description": "理解希臘酒產業結構與市場定位，用於論述題",
        "duration": 20
      },
      {
        "id": "gr-l3-6",
        "title": "Diploma 品飲與論述",
        "description": "把希臘酒知識轉成可應考的盲品與論述技巧",
        "duration": 25
      },
      {
        "id": "gr-l3-7",
        "title": "Level 3 綜合評量",
        "description": "以模擬題整合全部內容，完成 Level 3",
        "duration": 35
      }
    ]
  }
}

// ── localStorage 進度持久化（依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的進度）──
const GREECE_PROGRESS_KEY = 'greece-wine-academy-progress'

function progressStorageKey(userId) {
  return `${GREECE_PROGRESS_KEY}:${userId}`
}

function saveProgressToStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    localStorage.setItem(progressStorageKey(userId), JSON.stringify({
      completedLessons: greeceLearningState.completedLessons,
      userProgress: greeceLearningState.userProgress
    }))
  } catch (e) { console.warn('[greece-learn] save error', e) }
}

function loadProgressFromStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    const raw = localStorage.getItem(progressStorageKey(userId))
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.completedLessons)) {
      greeceLearningState.completedLessons = data.completedLessons
    }
    if (data.userProgress) {
      Object.keys(data.userProgress).forEach(key => {
        if (greeceLearningState.userProgress[key]) {
          greeceLearningState.userProgress[key].completed = data.userProgress[key].completed || 0
        }
      })
    }
  } catch (e) { console.warn('[greece-learn] load error', e) }
}

// 供 GreeceLearningSystem 在 Supabase 同步後呼叫，重新載入 store 狀態
export function greeceReloadFromStorage() {
  greeceLearningState.completedLessons = []
  Object.keys(greeceLearningState.userProgress).forEach(k => {
    greeceLearningState.userProgress[k].completed = 0
  })
  loadProgressFromStorage()
}

// 登入／切換帳號時重新載入該帳號自己的進度，避免殘留前一位使用者的資料
watch(() => authState.user?.id, (userId, prevUserId) => {
  if (userId !== prevUserId) greeceReloadFromStorage()
})

// 希臘學習操作
export const greeceLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = greeceLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    greeceLearningState.currentLevel = level
    greeceLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = greeceLearningLevels[`level${greeceLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      greeceLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    greeceLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!greeceLearningState.completedLessons.includes(lessonId)) {
      greeceLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 gr-l1-3 → level1, gr-l2-1 → level2）
      const match = lessonId.match(/^gr-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : greeceLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (greeceLearningState.userProgress[levelKey]) {
        greeceLearningState.userProgress[levelKey].completed = Math.min(
          greeceLearningState.userProgress[levelKey].completed + 1,
          greeceLearningState.userProgress[levelKey].total
        )
      }
      saveProgressToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    greeceLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    greeceLearningState.testMode = false
    greeceLearningState.completedLessons = []
    Object.keys(greeceLearningState.userProgress).forEach(key => {
      greeceLearningState.userProgress[key].completed = 0
    })
    saveProgressToStorage()
  }
}

// 計算屬性：整體進度
export const greeceLearningProgress = computed(() => {
  const levels = Object.values(greeceLearningState.userProgress)
  const totalCompleted = levels.reduce((sum, l) => sum + l.completed, 0)
  const totalLessons = levels.reduce((sum, l) => sum + l.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})
