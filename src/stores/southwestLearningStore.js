// 西南產區（Southwest）學習系統狀態管理
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// 西南產區學習進度狀態
export const southwestLearningState = reactive({
  currentLevel: 1,
  currentLesson: null,
  completedLessons: [],
  testMode: false,
  userProgress: {
    level1: { completed: 0, total: 5 },
    level2: { completed: 0, total: 6 },
    level3: { completed: 0, total: 5 }
  },
  achievements: []
})

// 西南產區學習等級配置（大綱以 SOUTHWEST_COURSE_FRAMEWORK.md 為準）
export const southwestLearningLevels = {
  "level1": {
    "title": "Level 1 - 西南產區入門",
    "description": "建立基礎：歷史、大西洋與比利牛斯的地理氣候、本土品種、AOC／IGP 制度與標籤",
    "color": "#4B2E55",
    "modules": [
      {
        "id": "SW1M1",
        "title": "歷史與地理",
        "lessonIds": [
          "sw-l1-1",
          "sw-l1-2"
        ]
      },
      {
        "id": "SW1M2",
        "title": "葡萄品種",
        "lessonIds": [
          "sw-l1-3"
        ]
      },
      {
        "id": "SW1M3",
        "title": "制度與評量",
        "lessonIds": [
          "sw-l1-4",
          "sw-l1-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "sw-l1-1",
        "title": "認識西南產區",
        "description": "從羅馬與中世紀英國時代，到被波爾多壓制、再靠本土品種復興",
        "duration": 15
      },
      {
        "id": "sw-l1-2",
        "title": "地理與氣候",
        "description": "大西洋與比利牛斯山、河谷與土壤",
        "duration": 16
      },
      {
        "id": "sw-l1-3",
        "title": "葡萄品種",
        "description": "Malbec、Tannat、Négrette、Fer Servadou、Manseng 與 Mauzac 等本土品種",
        "duration": 17
      },
      {
        "id": "sw-l1-4",
        "title": "法規與標籤",
        "description": "AOC、IGP 與 Vin de France",
        "duration": 18
      },
      {
        "id": "sw-l1-5",
        "title": "Level 1 綜合評量",
        "description": "以綜合測驗檢視 Level 1 的學習成果",
        "duration": 25
      }
    ]
  },
  "level2": {
    "title": "Level 2 - 產區與法規",
    "description": "從 Bergerac、Cahors 到 Gaillac、Madiran、Jurançon 與 Armagnac，逐區深入西南產區",
    "color": "#6B4A78",
    "modules": [
      {
        "id": "SW2M1",
        "title": "Dordogne 與 Lot／Garonne 河谷",
        "lessonIds": [
          "sw-l2-1",
          "sw-l2-2"
        ]
      },
      {
        "id": "SW2M2",
        "title": "Tarn、Gascogne 與比利牛斯",
        "lessonIds": [
          "sw-l2-3",
          "sw-l2-4",
          "sw-l2-5"
        ]
      },
      {
        "id": "SW2M3",
        "title": "評量",
        "lessonIds": [
          "sw-l2-6"
        ]
      }
    ],
    "lessons": [
      {
        "id": "sw-l2-1",
        "title": "Bergerac 與 Dordogne",
        "description": "Bergerac、Pécharmant、Monbazillac、Saussignac、Montravel 與 Côtes de Duras",
        "duration": 22
      },
      {
        "id": "sw-l2-2",
        "title": "Cahors 與 Lot、Garonne 河谷",
        "description": "Cahors 的 Malbec、Marcillac、Buzet 與 Côtes du Marmandais",
        "duration": 22
      },
      {
        "id": "sw-l2-3",
        "title": "Gaillac 與 Fronton",
        "description": "Gaillac 的品種多樣性與 Fronton 的 Négrette",
        "duration": 20
      },
      {
        "id": "sw-l2-4",
        "title": "Gascogne：Madiran、Saint-Mont 與 Armagnac",
        "description": "Tannat、Pacherenc du Vic-Bilh、Côtes de Gascogne IGP 與 Armagnac",
        "duration": 22
      },
      {
        "id": "sw-l2-5",
        "title": "比利牛斯山麓：Jurançon、Béarn 與 Irouléguy",
        "description": "Petit／Gros Manseng 的甜白酒與巴斯克地區的紅酒",
        "duration": 20
      },
      {
        "id": "sw-l2-6",
        "title": "Level 2 綜合評量",
        "description": "重點回顧與綜合測驗",
        "duration": 28
      }
    ]
  },
  "level3": {
    "title": "Level 3 - Diploma／MW 精修",
    "description": "以 WSET Diploma D3 與 MW 為目標：栽培與氣候、釀造與風土、產業與市場、法規演變與論述",
    "color": "#2B1533",
    "modules": [
      {
        "id": "SW3M1",
        "title": "栽培與風土",
        "lessonIds": [
          "sw-l3-1",
          "sw-l3-2"
        ]
      },
      {
        "id": "SW3M2",
        "title": "產業與應考",
        "lessonIds": [
          "sw-l3-3",
          "sw-l3-4"
        ]
      },
      {
        "id": "SW3M3",
        "title": "評量",
        "lessonIds": [
          "sw-l3-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "sw-l3-1",
        "title": "栽培與氣候",
        "description": "大西洋與大陸影響、霜害、冰雹、黴病壓力與有機",
        "duration": 22
      },
      {
        "id": "sw-l3-2",
        "title": "釀造與風土深度",
        "description": "Malbec 與 Tannat 的單寧管理、貴腐與風乾甜酒、烈酒蒸餾",
        "duration": 24
      },
      {
        "id": "sw-l3-3",
        "title": "產業與市場",
        "description": "合作社、Côtes de Gascogne IGP、出口與市場定位",
        "duration": 20
      },
      {
        "id": "sw-l3-4",
        "title": "法規演變與 Diploma 論述",
        "description": "產區階層調整與盲品論述範本",
        "duration": 22
      },
      {
        "id": "sw-l3-5",
        "title": "Level 3 綜合評量",
        "description": "以模擬題整合全部內容，完成 Level 3",
        "duration": 30
      }
    ]
  }
}

// ── localStorage 進度持久化（依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的進度）──
const SOUTHWEST_PROGRESS_KEY = 'southwest-wine-academy-progress'

function progressStorageKey(userId) {
  return `${SOUTHWEST_PROGRESS_KEY}:${userId}`
}

function saveProgressToStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    localStorage.setItem(progressStorageKey(userId), JSON.stringify({
      completedLessons: southwestLearningState.completedLessons,
      userProgress: southwestLearningState.userProgress
    }))
  } catch (e) { console.warn('[southwest-learn] save error', e) }
}

function loadProgressFromStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    const raw = localStorage.getItem(progressStorageKey(userId))
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.completedLessons)) {
      southwestLearningState.completedLessons = data.completedLessons
    }
    if (data.userProgress) {
      Object.keys(data.userProgress).forEach(key => {
        if (southwestLearningState.userProgress[key]) {
          southwestLearningState.userProgress[key].completed = data.userProgress[key].completed || 0
        }
      })
    }
  } catch (e) { console.warn('[southwest-learn] load error', e) }
}

// 供 SouthwestLearningSystem 在 Supabase 同步後呼叫，重新載入 store 狀態
export function southwestReloadFromStorage() {
  southwestLearningState.completedLessons = []
  Object.keys(southwestLearningState.userProgress).forEach(k => {
    southwestLearningState.userProgress[k].completed = 0
  })
  loadProgressFromStorage()
}

// 登入／切換帳號時重新載入該帳號自己的進度，避免殘留前一位使用者的資料
watch(() => authState.user?.id, (userId, prevUserId) => {
  if (userId !== prevUserId) southwestReloadFromStorage()
})

// 希臘學習操作
export const southwestLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = southwestLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    southwestLearningState.currentLevel = level
    southwestLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = southwestLearningLevels[`level${southwestLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      southwestLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    southwestLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!southwestLearningState.completedLessons.includes(lessonId)) {
      southwestLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 sw-l1-3 → level1, sw-l2-1 → level2）
      const match = lessonId.match(/^sw-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : southwestLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (southwestLearningState.userProgress[levelKey]) {
        southwestLearningState.userProgress[levelKey].completed = Math.min(
          southwestLearningState.userProgress[levelKey].completed + 1,
          southwestLearningState.userProgress[levelKey].total
        )
      }
      saveProgressToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    southwestLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    southwestLearningState.testMode = false
    southwestLearningState.completedLessons = []
    Object.keys(southwestLearningState.userProgress).forEach(key => {
      southwestLearningState.userProgress[key].completed = 0
    })
    saveProgressToStorage()
  }
}

// 計算屬性：整體進度
export const southwestLearningProgress = computed(() => {
  const levels = Object.values(southwestLearningState.userProgress)
  const totalCompleted = levels.reduce((sum, l) => sum + l.completed, 0)
  const totalLessons = levels.reduce((sum, l) => sum + l.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})
