// 朗格多克—魯西永（Languedoc）學習系統狀態管理
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// 朗格多克—魯西永學習進度狀態
export const languedocLearningState = reactive({
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

// 朗格多克—魯西永學習等級配置（框架版：課程內容待補；大綱以 LANGUEDOC_COURSE_FRAMEWORK.md 第 2 節為準）
export const languedocLearningLevels = {
  "level1": {
    "title": "Level 1 - 朗格多克—魯西永入門",
    "description": "建立基礎：歷史、地中海地理與風、主要品種、AOC／IGP 制度與標籤",
    "color": "#9C4A1A",
    "modules": [
      {
        "id": "LG1M1",
        "title": "歷史與地理",
        "lessonIds": [
          "lg-l1-1",
          "lg-l1-2"
        ]
      },
      {
        "id": "LG1M2",
        "title": "葡萄品種",
        "lessonIds": [
          "lg-l1-3"
        ]
      },
      {
        "id": "LG1M3",
        "title": "制度與評量",
        "lessonIds": [
          "lg-l1-4",
          "lg-l1-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "lg-l1-1",
        "title": "認識朗格多克—魯西永",
        "description": "從羅馬時代到大量生產，再到品質轉型",
        "duration": 15
      },
      {
        "id": "lg-l1-2",
        "title": "地理與氣候",
        "description": "地中海氣候、山脈、風與土壤",
        "duration": 16
      },
      {
        "id": "lg-l1-3",
        "title": "葡萄品種",
        "description": "Grenache、Syrah、Mourvèdre、Carignan、Cinsault 與白葡萄",
        "duration": 16
      },
      {
        "id": "lg-l1-4",
        "title": "法規與標籤",
        "description": "AOC、IGP 與 Vin de France",
        "duration": 18
      },
      {
        "id": "lg-l1-5",
        "title": "Level 1 綜合評量",
        "description": "以綜合測驗檢視 Level 1 的學習成果",
        "duration": 25
      }
    ]
  },
  "level2": {
    "title": "Level 2 - 產區與法規",
    "description": "Languedoc 西部與中東部、Limoux，以及 Roussillon 的干型酒與天然甜酒逐區深入",
    "color": "#B8622D",
    "modules": [
      {
        "id": "LG2M1",
        "title": "Languedoc",
        "lessonIds": [
          "lg-l2-1",
          "lg-l2-2",
          "lg-l2-3"
        ]
      },
      {
        "id": "LG2M2",
        "title": "Roussillon",
        "lessonIds": [
          "lg-l2-4",
          "lg-l2-5"
        ]
      },
      {
        "id": "LG2M3",
        "title": "評量",
        "lessonIds": [
          "lg-l2-6"
        ]
      }
    ],
    "lessons": [
      {
        "id": "lg-l2-1",
        "title": "Languedoc 西部：Corbières、Minervois、Fitou",
        "description": "Corbières、Minervois、Fitou、Cabardès 與 Malepère",
        "duration": 22
      },
      {
        "id": "lg-l2-2",
        "title": "Limoux、Saint-Chinian 與 Faugères",
        "description": "Limoux 的氣泡與靜態酒，以及 Saint-Chinian、Faugères 的片岩",
        "duration": 22
      },
      {
        "id": "lg-l2-3",
        "title": "Languedoc 中東部",
        "description": "Pic Saint-Loup、Terrasses du Larzac、La Clape、Picpoul de Pinet 與 Muscat",
        "duration": 22
      },
      {
        "id": "lg-l2-4",
        "title": "Roussillon 的干型酒",
        "description": "Côtes du Roussillon、Collioure 與 Côtes Catalanes",
        "duration": 22
      },
      {
        "id": "lg-l2-5",
        "title": "Roussillon 天然甜酒（VDN）",
        "description": "Banyuls、Maury、Rivesaltes 與 Muscat de Rivesaltes",
        "duration": 22
      },
      {
        "id": "lg-l2-6",
        "title": "Level 2 綜合評量",
        "description": "重點回顧與綜合測驗",
        "duration": 25
      }
    ]
  },
  "level3": {
    "title": "Level 3 - Diploma／MW 精修",
    "description": "以 WSET Diploma D3 與 MW 為目標：栽培與氣候、釀造與風土、產業與市場、法規演變與論述",
    "color": "#5C2A0E",
    "modules": [
      {
        "id": "LG3M1",
        "title": "栽培與風土",
        "lessonIds": [
          "lg-l3-1",
          "lg-l3-2"
        ]
      },
      {
        "id": "LG3M2",
        "title": "產業與應考",
        "lessonIds": [
          "lg-l3-3",
          "lg-l3-4"
        ]
      },
      {
        "id": "LG3M3",
        "title": "評量",
        "lessonIds": [
          "lg-l3-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "lg-l3-1",
        "title": "栽培與氣候",
        "description": "Carignan 老藤、乾旱、野火、冰雹與有機",
        "duration": 22
      },
      {
        "id": "lg-l3-2",
        "title": "釀造與風土深度",
        "description": "混調、碳酸浸漬、氧化式甜酒與 Limoux 氣泡",
        "duration": 22
      },
      {
        "id": "lg-l3-3",
        "title": "產業與市場",
        "description": "Pays d'Oc IGP、合作社、散裝與出口",
        "duration": 22
      },
      {
        "id": "lg-l3-4",
        "title": "法規演變與 Diploma 論述",
        "description": "產區階層調整與盲品論述範本",
        "duration": 22
      },
      {
        "id": "lg-l3-5",
        "title": "Level 3 綜合評量",
        "description": "以模擬題整合全部內容，完成 Level 3",
        "duration": 30
      }
    ]
  }
}

// ── localStorage 進度持久化（依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的進度）──
const LANGUEDOC_PROGRESS_KEY = 'languedoc-wine-academy-progress'

function progressStorageKey(userId) {
  return `${LANGUEDOC_PROGRESS_KEY}:${userId}`
}

function saveProgressToStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    localStorage.setItem(progressStorageKey(userId), JSON.stringify({
      completedLessons: languedocLearningState.completedLessons,
      userProgress: languedocLearningState.userProgress
    }))
  } catch (e) { console.warn('[languedoc-learn] save error', e) }
}

function loadProgressFromStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    const raw = localStorage.getItem(progressStorageKey(userId))
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.completedLessons)) {
      languedocLearningState.completedLessons = data.completedLessons
    }
    if (data.userProgress) {
      Object.keys(data.userProgress).forEach(key => {
        if (languedocLearningState.userProgress[key]) {
          languedocLearningState.userProgress[key].completed = data.userProgress[key].completed || 0
        }
      })
    }
  } catch (e) { console.warn('[languedoc-learn] load error', e) }
}

// 供 LanguedocLearningSystem 在 Supabase 同步後呼叫，重新載入 store 狀態
export function languedocReloadFromStorage() {
  languedocLearningState.completedLessons = []
  Object.keys(languedocLearningState.userProgress).forEach(k => {
    languedocLearningState.userProgress[k].completed = 0
  })
  loadProgressFromStorage()
}

// 登入／切換帳號時重新載入該帳號自己的進度，避免殘留前一位使用者的資料
watch(() => authState.user?.id, (userId, prevUserId) => {
  if (userId !== prevUserId) languedocReloadFromStorage()
})

// 希臘學習操作
export const languedocLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = languedocLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    languedocLearningState.currentLevel = level
    languedocLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = languedocLearningLevels[`level${languedocLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      languedocLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    languedocLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!languedocLearningState.completedLessons.includes(lessonId)) {
      languedocLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 lg-l1-3 → level1, lg-l2-1 → level2）
      const match = lessonId.match(/^lg-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : languedocLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (languedocLearningState.userProgress[levelKey]) {
        languedocLearningState.userProgress[levelKey].completed = Math.min(
          languedocLearningState.userProgress[levelKey].completed + 1,
          languedocLearningState.userProgress[levelKey].total
        )
      }
      saveProgressToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    languedocLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    languedocLearningState.testMode = false
    languedocLearningState.completedLessons = []
    Object.keys(languedocLearningState.userProgress).forEach(key => {
      languedocLearningState.userProgress[key].completed = 0
    })
    saveProgressToStorage()
  }
}

// 計算屬性：整體進度
export const languedocLearningProgress = computed(() => {
  const levels = Object.values(languedocLearningState.userProgress)
  const totalCompleted = levels.reduce((sum, l) => sum + l.completed, 0)
  const totalLessons = levels.reduce((sum, l) => sum + l.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})
