// 南非（SouthAfrica）學習系統狀態管理
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// 南非學習進度狀態
export const southafricaLearningState = reactive({
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

// 南非學習等級配置（框架版：課程內容待補；大綱以 SOUTHAFRICA_COURSE_FRAMEWORK.md 第 2 節為準）
export const southafricaLearningLevels = {
  "level1": {
    "title": "Level 1 - 南非入門",
    "description": "建立南非基礎：歷史、地理氣候、白紅品種、風格與 WO 標籤",
    "color": "#C2571A",
    "modules": [
      {
        "id": "ZA1M1",
        "title": "歷史與地理",
        "lessonIds": [
          "za-l1-1",
          "za-l1-2"
        ]
      },
      {
        "id": "ZA1M2",
        "title": "葡萄品種",
        "lessonIds": [
          "za-l1-3",
          "za-l1-4"
        ]
      },
      {
        "id": "ZA1M3",
        "title": "風格與評量",
        "lessonIds": [
          "za-l1-5",
          "za-l1-6"
        ]
      }
    ],
    "lessons": [
      {
        "id": "za-l1-1",
        "title": "認識南非葡萄酒",
        "description": "開普殖民、Huguenot、Constantia 與現代復興",
        "duration": 15
      },
      {
        "id": "za-l1-2",
        "title": "地理、氣候與海洋影響",
        "description": "位置、Benguela 寒流、Cape Doctor 與地質",
        "duration": 16
      },
      {
        "id": "za-l1-3",
        "title": "白葡萄品種",
        "description": "Chenin Blanc、Sauvignon Blanc、Chardonnay 與其他白品種",
        "duration": 16
      },
      {
        "id": "za-l1-4",
        "title": "紅葡萄品種與 Cape Blend",
        "description": "Pinotage、Cinsault、Syrah、Cabernet Sauvignon 與 Cape Blend",
        "duration": 16
      },
      {
        "id": "za-l1-5",
        "title": "酒款風格、WO 標籤與 Cap Classique",
        "description": "風格光譜、WO 封條與標示規定、傳統法氣泡酒",
        "duration": 18
      },
      {
        "id": "za-l1-6",
        "title": "Level 1 綜合評量",
        "description": "以綜合測驗檢視 Level 1 的學習成果",
        "duration": 25
      }
    ]
  },
  "level2": {
    "title": "Level 2 - 南非產區與法規",
    "description": "Wine of Origin 階層，Coastal Region、Swartland、南海岸與內陸產區逐區深入",
    "color": "#A34614",
    "modules": [
      {
        "id": "ZA2M1",
        "title": "法規與階層",
        "lessonIds": [
          "za-l2-1"
        ]
      },
      {
        "id": "ZA2M2",
        "title": "Coastal Region",
        "lessonIds": [
          "za-l2-2",
          "za-l2-3"
        ]
      },
      {
        "id": "ZA2M3",
        "title": "Swartland 與南海岸",
        "lessonIds": [
          "za-l2-4",
          "za-l2-5"
        ]
      },
      {
        "id": "ZA2M4",
        "title": "內陸、老藤與評量",
        "lessonIds": [
          "za-l2-6",
          "za-l2-7",
          "za-l2-8"
        ]
      }
    ],
    "lessons": [
      {
        "id": "za-l2-1",
        "title": "Wine of Origin 體系",
        "description": "Geographical Unit、Region、District、Ward 的階層與標示",
        "duration": 20
      },
      {
        "id": "za-l2-2",
        "title": "Stellenbosch",
        "description": "Stellenbosch 的山區 Ward、Cabernet 與 Cape Blend",
        "duration": 22
      },
      {
        "id": "za-l2-3",
        "title": "Paarl、Franschhoek、Constantia 與 Durbanville",
        "description": "Coastal Region 其他地區的風格與歷史",
        "duration": 22
      },
      {
        "id": "za-l2-4",
        "title": "Swartland 與 Tulbagh",
        "description": "新浪潮、老藤 Chenin、Syrah 與 Grenache",
        "duration": 22
      },
      {
        "id": "za-l2-5",
        "title": "Cape South Coast",
        "description": "Walker Bay／Hemel-en-Aarde、Elgin、Elim 與 Overberg",
        "duration": 22
      },
      {
        "id": "za-l2-6",
        "title": "Breede River Valley 與內陸",
        "description": "Robertson、Worcester、Breedekloof、Klein Karoo、Olifants River 與 Orange River",
        "duration": 20
      },
      {
        "id": "za-l2-7",
        "title": "老藤與特殊制度",
        "description": "Old Vine Project 與 Certified Heritage Vineyards",
        "duration": 18
      },
      {
        "id": "za-l2-8",
        "title": "Level 2 綜合評量",
        "description": "重點回顧與綜合測驗",
        "duration": 25
      }
    ]
  },
  "level3": {
    "title": "Level 3 - 南非 Diploma／MW 精修",
    "description": "以 WSET Diploma D3 與 MW 為目標：氣候與永續、釀造與風土、甜酒、產業與社會、論述",
    "color": "#7F3510",
    "modules": [
      {
        "id": "ZA3M1",
        "title": "栽培與釀造",
        "lessonIds": [
          "za-l3-1",
          "za-l3-2"
        ]
      },
      {
        "id": "ZA3M2",
        "title": "風土與甜酒",
        "lessonIds": [
          "za-l3-3",
          "za-l3-4"
        ]
      },
      {
        "id": "ZA3M3",
        "title": "產業、應考與評量",
        "lessonIds": [
          "za-l3-5",
          "za-l3-6",
          "za-l3-7"
        ]
      }
    ],
    "lessons": [
      {
        "id": "za-l3-1",
        "title": "氣候、水資源與永續",
        "description": "乾旱、野火、病蟲害，以及 IPW 與 BWI",
        "duration": 22
      },
      {
        "id": "za-l3-2",
        "title": "釀造風格深度",
        "description": "Chenin Blanc 風格光譜、Pinotage 釀法與 Cap Classique 規定",
        "duration": 22
      },
      {
        "id": "za-l3-3",
        "title": "風土深度",
        "description": "Stellenbosch 山區、Swartland 花崗岩與頁岩、Hemel-en-Aarde 的 Ward 差異",
        "duration": 22
      },
      {
        "id": "za-l3-4",
        "title": "甜酒與加烈酒",
        "description": "Vin de Constance、Muscat 類、Jerepigo 與 Cape Port",
        "duration": 18
      },
      {
        "id": "za-l3-5",
        "title": "產業與社會",
        "description": "KWV 歷史、合作社與酒莊、BEE、出口與散裝酒",
        "duration": 22
      },
      {
        "id": "za-l3-6",
        "title": "Diploma 品飲與論述",
        "description": "Chenin、Pinotage 與 Cape Blend 的盲品線索，以及 MW 風格論述範例",
        "duration": 25
      },
      {
        "id": "za-l3-7",
        "title": "Level 3 綜合評量",
        "description": "以模擬題整合全部內容，完成 Level 3",
        "duration": 35
      }
    ]
  }
}

// ── localStorage 進度持久化（依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的進度）──
const SOUTHAFRICA_PROGRESS_KEY = 'southafrica-wine-academy-progress'

function progressStorageKey(userId) {
  return `${SOUTHAFRICA_PROGRESS_KEY}:${userId}`
}

function saveProgressToStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    localStorage.setItem(progressStorageKey(userId), JSON.stringify({
      completedLessons: southafricaLearningState.completedLessons,
      userProgress: southafricaLearningState.userProgress
    }))
  } catch (e) { console.warn('[southafrica-learn] save error', e) }
}

function loadProgressFromStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    const raw = localStorage.getItem(progressStorageKey(userId))
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.completedLessons)) {
      southafricaLearningState.completedLessons = data.completedLessons
    }
    if (data.userProgress) {
      Object.keys(data.userProgress).forEach(key => {
        if (southafricaLearningState.userProgress[key]) {
          southafricaLearningState.userProgress[key].completed = data.userProgress[key].completed || 0
        }
      })
    }
  } catch (e) { console.warn('[southafrica-learn] load error', e) }
}

// 供 SouthAfricaLearningSystem 在 Supabase 同步後呼叫，重新載入 store 狀態
export function southafricaReloadFromStorage() {
  southafricaLearningState.completedLessons = []
  Object.keys(southafricaLearningState.userProgress).forEach(k => {
    southafricaLearningState.userProgress[k].completed = 0
  })
  loadProgressFromStorage()
}

// 登入／切換帳號時重新載入該帳號自己的進度，避免殘留前一位使用者的資料
watch(() => authState.user?.id, (userId, prevUserId) => {
  if (userId !== prevUserId) southafricaReloadFromStorage()
})

// 希臘學習操作
export const southafricaLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = southafricaLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    southafricaLearningState.currentLevel = level
    southafricaLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = southafricaLearningLevels[`level${southafricaLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      southafricaLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    southafricaLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!southafricaLearningState.completedLessons.includes(lessonId)) {
      southafricaLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 za-l1-3 → level1, za-l2-1 → level2）
      const match = lessonId.match(/^za-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : southafricaLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (southafricaLearningState.userProgress[levelKey]) {
        southafricaLearningState.userProgress[levelKey].completed = Math.min(
          southafricaLearningState.userProgress[levelKey].completed + 1,
          southafricaLearningState.userProgress[levelKey].total
        )
      }
      saveProgressToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    southafricaLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    southafricaLearningState.testMode = false
    southafricaLearningState.completedLessons = []
    Object.keys(southafricaLearningState.userProgress).forEach(key => {
      southafricaLearningState.userProgress[key].completed = 0
    })
    saveProgressToStorage()
  }
}

// 計算屬性：整體進度
export const southafricaLearningProgress = computed(() => {
  const levels = Object.values(southafricaLearningState.userProgress)
  const totalCompleted = levels.reduce((sum, l) => sum + l.completed, 0)
  const totalLessons = levels.reduce((sum, l) => sum + l.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})
