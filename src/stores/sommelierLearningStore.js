// 侍酒師實務學習系統狀態管理
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// 侍酒師實務學習進度狀態
export const sommelierLearningState = reactive({
  currentLevel: 1,
  currentLesson: null,
  completedLessons: [],
  testMode: false,
  userProgress: {
    level1: { completed: 0, total: 5 },
    level2: { completed: 0, total: 5 },
    level3: { completed: 0, total: 4 },
    level4: { completed: 0, total: 3 }
  },
  achievements: []
})

// 侍酒師實務學習等級配置（大綱以 SOMMELIER_PRACTICE_FRAMEWORK.md 為準）
export const sommelierLearningLevels = {
  "level1": {
    "title": "Level 1 - 侍酒服務與餐酒搭配",
    "description": "侍酒服務流程、溫度與醒酒、酒單設計與定價、餐酒搭配原則",
    "color": "#6B2D3C",
    "modules": [
      {
        "id": "SM1M1",
        "title": "服務",
        "lessonIds": [
          "sm-l1-1",
          "sm-l1-2"
        ]
      },
      {
        "id": "SM1M2",
        "title": "酒單與搭配",
        "lessonIds": [
          "sm-l1-3",
          "sm-l1-4"
        ]
      },
      {
        "id": "SM1M3",
        "title": "評量",
        "lessonIds": [
          "sm-l1-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "sm-l1-1",
        "title": "侍酒服務流程",
        "description": "點酒、展示酒標、開瓶與倒酒的標準流程，以及氣泡酒的安全開瓶",
        "duration": 20
      },
      {
        "id": "sm-l1-2",
        "title": "適飲溫度、醒酒與杯具",
        "description": "各類酒款的適飲溫度、醒酒的兩個目的，以及杯具與儲存條件",
        "duration": 20
      },
      {
        "id": "sm-l1-3",
        "title": "酒單設計與定價",
        "description": "酒單的結構、杯賣的經濟學、定價策略與庫存管理",
        "duration": 22
      },
      {
        "id": "sm-l1-4",
        "title": "餐酒搭配原則",
        "description": "甜、鮮、鹹、酸、苦、辣與油脂對葡萄酒的影響，以及經典搭配的理由",
        "duration": 22
      },
      {
        "id": "sm-l1-5",
        "title": "Level 1 綜合評量",
        "description": "回顧侍酒服務、溫度與醒酒、酒單與餐酒搭配，完成綜合測驗",
        "duration": 25
      }
    ]
  },
  "level2": {
    "title": "Level 2 - 烈酒",
    "description": "蒸餾與熟成原理、威士忌、蘭姆與龍舌蘭、琴酒、伏特加與利口酒",
    "color": "#7E3A4A",
    "modules": [
      {
        "id": "SM2M1",
        "title": "原理",
        "lessonIds": [
          "sm-l2-1"
        ]
      },
      {
        "id": "SM2M2",
        "title": "主要烈酒",
        "lessonIds": [
          "sm-l2-2",
          "sm-l2-3",
          "sm-l2-4"
        ]
      },
      {
        "id": "SM2M3",
        "title": "評量",
        "lessonIds": [
          "sm-l2-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "sm-l2-1",
        "title": "蒸餾與熟成原理",
        "description": "壺式與連續式蒸餾、酒頭酒心酒尾的切取、橡木熟成與年份標示",
        "duration": 20
      },
      {
        "id": "sm-l2-2",
        "title": "威士忌",
        "description": "蘇格蘭、愛爾蘭、美國與日本威士忌的原料、蒸餾與法規重點",
        "duration": 24
      },
      {
        "id": "sm-l2-3",
        "title": "蘭姆、龍舌蘭與梅斯卡爾",
        "description": "蘭姆的原料與風格、龍舌蘭的原料、分類與熟成等級，以及梅斯卡爾的煙燻特色",
        "duration": 22
      },
      {
        "id": "sm-l2-4",
        "title": "琴酒、伏特加與利口酒",
        "description": "琴酒與 London Dry 的規定、伏特加的定義，以及利口酒的含糖要求與主要類型",
        "duration": 20
      },
      {
        "id": "sm-l2-5",
        "title": "Level 2 綜合評量",
        "description": "回顧蒸餾原理與主要烈酒，完成綜合測驗",
        "duration": 25
      }
    ]
  },
  "level3": {
    "title": "Level 3 - 清酒與啤酒",
    "description": "清酒的原料、製程、分級與侍飲，啤酒的原料、Ale 與 Lager 及主要風格",
    "color": "#8E4757",
    "modules": [
      {
        "id": "SM3M1",
        "title": "清酒",
        "lessonIds": [
          "sm-l3-1",
          "sm-l3-2"
        ]
      },
      {
        "id": "SM3M2",
        "title": "啤酒",
        "lessonIds": [
          "sm-l3-3"
        ]
      },
      {
        "id": "SM3M3",
        "title": "評量",
        "lessonIds": [
          "sm-l3-4"
        ]
      }
    ],
    "lessons": [
      {
        "id": "sm-l3-1",
        "title": "清酒的原料與製程",
        "description": "米、麴、水與酵母，精米步合，以及並行複式發酵",
        "duration": 22
      },
      {
        "id": "sm-l3-2",
        "title": "清酒的分級、風格與侍飲",
        "description": "特定名稱酒的分級、純米與本釀造、常見風格，以及溫度與搭配",
        "duration": 22
      },
      {
        "id": "sm-l3-3",
        "title": "啤酒",
        "description": "原料、Ale 與 Lager 的差別、主要風格，以及侍飲溫度與杯具",
        "duration": 22
      },
      {
        "id": "sm-l3-4",
        "title": "Level 3 綜合評量",
        "description": "回顧清酒與啤酒，完成綜合測驗",
        "duration": 25
      }
    ]
  },
  "level4": {
    "title": "Level 4 - CMS 模擬",
    "description": "CMS 口試式快問快答、服務情境題與綜合模擬考",
    "color": "#A0566A",
    "modules": [
      {
        "id": "SM4M1",
        "title": "口試與情境",
        "lessonIds": [
          "sm-l4-1",
          "sm-l4-2"
        ]
      },
      {
        "id": "SM4M2",
        "title": "模擬考",
        "lessonIds": [
          "sm-l4-3"
        ]
      }
    ],
    "lessons": [
      {
        "id": "sm-l4-1",
        "title": "CMS 口試快問快答",
        "description": "CMS 理論口試的答題節奏，以及跨葡萄酒、烈酒、清酒與啤酒的簡答練習",
        "duration": 25
      },
      {
        "id": "sm-l4-2",
        "title": "服務情境題",
        "description": "以真實餐桌情境練習推薦、搭配與危機處理，用簡答題寫出完整的服務回應",
        "duration": 25
      },
      {
        "id": "sm-l4-3",
        "title": "CMS 綜合模擬",
        "description": "結合選擇題與簡答題，橫跨服務、搭配、烈酒、清酒與啤酒",
        "duration": 30
      }
    ]
  }
}

// ── localStorage 進度持久化（依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的進度）──
const DIPLOMA_PROGRESS_KEY = 'sommelier-wine-academy-progress'

function progressStorageKey(userId) {
  return `${DIPLOMA_PROGRESS_KEY}:${userId}`
}

function saveProgressToStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    localStorage.setItem(progressStorageKey(userId), JSON.stringify({
      completedLessons: sommelierLearningState.completedLessons,
      userProgress: sommelierLearningState.userProgress
    }))
  } catch (e) { console.warn('[sommelier-learn] save error', e) }
}

function loadProgressFromStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    const raw = localStorage.getItem(progressStorageKey(userId))
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.completedLessons)) {
      sommelierLearningState.completedLessons = data.completedLessons
    }
    if (data.userProgress) {
      Object.keys(data.userProgress).forEach(key => {
        if (sommelierLearningState.userProgress[key]) {
          sommelierLearningState.userProgress[key].completed = data.userProgress[key].completed || 0
        }
      })
    }
  } catch (e) { console.warn('[sommelier-learn] load error', e) }
}

// 供 SommelierLearningSystem 在 Supabase 同步後呼叫，重新載入 store 狀態
export function sommelierReloadFromStorage() {
  sommelierLearningState.completedLessons = []
  Object.keys(sommelierLearningState.userProgress).forEach(k => {
    sommelierLearningState.userProgress[k].completed = 0
  })
  loadProgressFromStorage()
}

// 登入／切換帳號時重新載入該帳號自己的進度，避免殘留前一位使用者的資料
watch(() => authState.user?.id, (userId, prevUserId) => {
  if (userId !== prevUserId) sommelierReloadFromStorage()
})

// 侍酒師實務學習操作
export const sommelierLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = sommelierLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    sommelierLearningState.currentLevel = level
    sommelierLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = sommelierLearningLevels[`level${sommelierLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      sommelierLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    sommelierLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!sommelierLearningState.completedLessons.includes(lessonId)) {
      sommelierLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 sm-l1-3 → level1, sm-l2-1 → level2）
      const match = lessonId.match(/^sm-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : sommelierLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (sommelierLearningState.userProgress[levelKey]) {
        sommelierLearningState.userProgress[levelKey].completed = Math.min(
          sommelierLearningState.userProgress[levelKey].completed + 1,
          sommelierLearningState.userProgress[levelKey].total
        )
      }
      saveProgressToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    sommelierLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    sommelierLearningState.testMode = false
    sommelierLearningState.completedLessons = []
    Object.keys(sommelierLearningState.userProgress).forEach(key => {
      sommelierLearningState.userProgress[key].completed = 0
    })
    saveProgressToStorage()
  }
}

// 計算屬性：整體進度
export const sommelierLearningProgress = computed(() => {
  const levels = Object.values(sommelierLearningState.userProgress)
  const totalCompleted = levels.reduce((sum, l) => sum + l.completed, 0)
  const totalLessons = levels.reduce((sum, l) => sum + l.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})
