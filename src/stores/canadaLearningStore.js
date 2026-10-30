// 加拿大（Canada）學習系統狀態管理
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// 學習進度狀態
export const canadaLearningState = reactive({
  currentLevel: 1,
  currentLesson: null,
  completedLessons: [],
  testMode: false,
  userProgress: {
    level1: { completed: 0, total: 5 },
    level2: { completed: 0, total: 8 },
    level3: { completed: 0, total: 5 }
  },
  achievements: []
})

// 學習等級配置（大綱以 PROVENCE_COURSE_FRAMEWORK.md 為準）
export const canadaLearningLevels = {
  "level1": {
    "title": "Level 1 - 冷涼氣候入門",
    "description": "建立基礎：加拿大葡萄酒的歷史、地理氣候、品種與 VQA 制度",
    "color": "#C8102E",
    "modules": [
      {
        "id": "CAN1M1",
        "title": "歷史與地理",
        "lessonIds": [
          "can-l1-1",
          "can-l1-2"
        ]
      },
      {
        "id": "CAN1M2",
        "title": "品種與制度",
        "lessonIds": [
          "can-l1-3",
          "can-l1-4"
        ]
      },
      {
        "id": "CAN1M3",
        "title": "評量",
        "lessonIds": [
          "can-l1-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "can-l1-1",
        "title": "認識加拿大葡萄酒",
        "description": "從早期的美洲種與雜交種，到 vinifera 與現代酒廠的興起，加拿大葡萄酒的歷史",
        "duration": 16
      },
      {
        "id": "can-l1-2",
        "title": "地理、氣候與土壤",
        "description": "湖泊效應、冬季低溫、Okanagan 的乾燥氣候與冰河沉積土",
        "duration": 18
      },
      {
        "id": "can-l1-3",
        "title": "品種",
        "description": "Riesling、Chardonnay、Pinot Noir、Cabernet Franc、Vidal 與其他雜交品種",
        "duration": 18
      },
      {
        "id": "can-l1-4",
        "title": "VQA 與標示制度",
        "description": "省級 VQA、Product of Canada 與 Cellared in Canada、冰酒規範",
        "duration": 18
      },
      {
        "id": "can-l1-5",
        "title": "Level 1 綜合評量",
        "description": "以綜合測驗檢視 Level 1 的學習成果",
        "duration": 25
      }
    ]
  },
  "level2": {
    "title": "Level 2 - 產區與法規",
    "description": "從 Ontario 的 Niagara、BC 的 Okanagan，到 Nova Scotia 與 Quebec，逐區深入",
    "color": "#E0414F",
    "modules": [
      {
        "id": "CAN2M1",
        "title": "Ontario",
        "lessonIds": [
          "can-l2-1",
          "can-l2-2"
        ]
      },
      {
        "id": "CAN2M2",
        "title": "British Columbia",
        "lessonIds": [
          "can-l2-3",
          "can-l2-4"
        ]
      },
      {
        "id": "CAN2M3",
        "title": "東部與大西洋沿岸",
        "lessonIds": [
          "can-l2-5",
          "can-l2-6"
        ]
      },
      {
        "id": "CAN2M4",
        "title": "風格與評量",
        "lessonIds": [
          "can-l2-7",
          "can-l2-8"
        ]
      }
    ],
    "lessons": [
      {
        "id": "can-l2-1",
        "title": "Ontario 總覽",
        "description": "Niagara Peninsula、Lake Erie North Shore、Prince Edward County 與 VQA 地理標示層級",
        "duration": 22
      },
      {
        "id": "can-l2-2",
        "title": "Niagara Peninsula 次產區",
        "description": "Niagara Escarpment 與 Niagara-on-the-Lake 的次產區、土壤與風格",
        "duration": 22
      },
      {
        "id": "can-l2-3",
        "title": "Okanagan Valley",
        "description": "Okanagan 的次產區、品種與從北到南的氣候變化",
        "duration": 22
      },
      {
        "id": "can-l2-4",
        "title": "BC 的其他產區",
        "description": "Similkameen、Fraser Valley、Vancouver Island、Gulf Islands 與 Thompson-Shuswap",
        "duration": 20
      },
      {
        "id": "can-l2-5",
        "title": "Nova Scotia",
        "description": "Annapolis Valley 與 Tidal Bay：海洋氣候下的 L'Acadie Blanc",
        "duration": 20
      },
      {
        "id": "can-l2-6",
        "title": "Quebec 與其他省分",
        "description": "Quebec 的耐寒品種與埋藤，以及 New Brunswick 等新興產區",
        "duration": 20
      },
      {
        "id": "can-l2-7",
        "title": "冰酒、氣泡酒與風格",
        "description": "Icewine 的法規與風格、氣泡酒、品飲重點",
        "duration": 22
      },
      {
        "id": "can-l2-8",
        "title": "Level 2 綜合評量",
        "description": "重點回顧與綜合測驗",
        "duration": 25
      }
    ]
  },
  "level3": {
    "title": "Level 3 - Diploma 精修",
    "description": "以 WSET Diploma D3 為目標：栽培與氣候、冰酒工藝、產業與市場、法規演變與論述",
    "color": "#7A0A1C",
    "modules": [
      {
        "id": "CAN3M1",
        "title": "栽培與釀造",
        "lessonIds": [
          "can-l3-1",
          "can-l3-2"
        ]
      },
      {
        "id": "CAN3M2",
        "title": "產業與論述",
        "lessonIds": [
          "can-l3-3",
          "can-l3-4"
        ]
      },
      {
        "id": "CAN3M3",
        "title": "評量",
        "lessonIds": [
          "can-l3-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "can-l3-1",
        "title": "栽培與氣候變遷",
        "description": "冬季寒害、埋藤與風機、野火煙霾、氣候變遷與極端天氣",
        "duration": 22
      },
      {
        "id": "can-l3-2",
        "title": "冰酒與釀造工藝",
        "description": "冰酒的採收、壓榨與發酵，以及氣泡酒與其他風格的研究",
        "duration": 22
      },
      {
        "id": "can-l3-3",
        "title": "產業與市場",
        "description": "產量與規模、省際貿易、出口、酒莊與品牌",
        "duration": 22
      },
      {
        "id": "can-l3-4",
        "title": "法規演變與 Diploma 論述",
        "description": "VQA 的演進、次產區制度、BC 與 Ontario 的管理機構、論述範本",
        "duration": 22
      },
      {
        "id": "can-l3-5",
        "title": "Level 3 綜合評量",
        "description": "以模擬題整合全部內容，完成 Level 3",
        "duration": 30
      }
    ]
  }
}

// ── localStorage 進度持久化（依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的進度）──
const CANADA_PROGRESS_KEY = 'canada-wine-academy-progress'

function progressStorageKey(userId) {
  return `${CANADA_PROGRESS_KEY}:${userId}`
}

function saveProgressToStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    localStorage.setItem(progressStorageKey(userId), JSON.stringify({
      completedLessons: canadaLearningState.completedLessons,
      userProgress: canadaLearningState.userProgress
    }))
  } catch (e) { console.warn('[canada-learn] save error', e) }
}

function loadProgressFromStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    const raw = localStorage.getItem(progressStorageKey(userId))
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.completedLessons)) {
      canadaLearningState.completedLessons = data.completedLessons
    }
    if (data.userProgress) {
      Object.keys(data.userProgress).forEach(key => {
        if (canadaLearningState.userProgress[key]) {
          canadaLearningState.userProgress[key].completed = data.userProgress[key].completed || 0
        }
      })
    }
  } catch (e) { console.warn('[canada-learn] load error', e) }
}

// 供 CanadaLearningSystem 在 Supabase 同步後呼叫，重新載入 store 狀態
export function canadaReloadFromStorage() {
  canadaLearningState.completedLessons = []
  Object.keys(canadaLearningState.userProgress).forEach(k => {
    canadaLearningState.userProgress[k].completed = 0
  })
  loadProgressFromStorage()
}

// 登入／切換帳號時重新載入該帳號自己的進度，避免殘留前一位使用者的資料
watch(() => authState.user?.id, (userId, prevUserId) => {
  if (userId !== prevUserId) canadaReloadFromStorage()
})

// 希臘學習操作
export const canadaLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = canadaLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    canadaLearningState.currentLevel = level
    canadaLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = canadaLearningLevels[`level${canadaLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      canadaLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    canadaLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!canadaLearningState.completedLessons.includes(lessonId)) {
      canadaLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 can-l1-3 → level1, can-l2-1 → level2）
      const match = lessonId.match(/^can-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : canadaLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (canadaLearningState.userProgress[levelKey]) {
        canadaLearningState.userProgress[levelKey].completed = Math.min(
          canadaLearningState.userProgress[levelKey].completed + 1,
          canadaLearningState.userProgress[levelKey].total
        )
      }
      saveProgressToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    canadaLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    canadaLearningState.testMode = false
    canadaLearningState.completedLessons = []
    Object.keys(canadaLearningState.userProgress).forEach(key => {
      canadaLearningState.userProgress[key].completed = 0
    })
    saveProgressToStorage()
  }
}

// 計算屬性：整體進度
export const canadaLearningProgress = computed(() => {
  const levels = Object.values(canadaLearningState.userProgress)
  const totalCompleted = levels.reduce((sum, l) => sum + l.completed, 0)
  const totalLessons = levels.reduce((sum, l) => sum + l.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})
