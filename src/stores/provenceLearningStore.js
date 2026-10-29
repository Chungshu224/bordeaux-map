// 普羅旺斯與科西嘉（Provence）學習系統狀態管理
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// 學習進度狀態
export const provenceLearningState = reactive({
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
export const provenceLearningLevels = {
  "level1": {
    "title": "Level 1 - 地中海入門",
    "description": "建立基礎：兩個法國地中海產區的歷史、地理氣候、品種與制度",
    "color": "#6F5AA8",
    "modules": [
      {
        "id": "PV1M1",
        "title": "歷史與地理",
        "lessonIds": [
          "pv-l1-1",
          "pv-l1-2"
        ]
      },
      {
        "id": "PV1M2",
        "title": "品種與制度",
        "lessonIds": [
          "pv-l1-3",
          "pv-l1-4"
        ]
      },
      {
        "id": "PV1M3",
        "title": "評量",
        "lessonIds": [
          "pv-l1-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "pv-l1-1",
        "title": "認識普羅旺斯與科西嘉",
        "description": "從古希臘人建立馬賽到法國統治，兩個地中海產區的歷史",
        "duration": 16
      },
      {
        "id": "pv-l1-2",
        "title": "地理、氣候與土壤",
        "description": "密斯特拉風、日照、石灰岩與結晶岩，以及山在海中的科西嘉",
        "duration": 18
      },
      {
        "id": "pv-l1-3",
        "title": "品種",
        "description": "Grenache、Cinsault、Mourvèdre、Tibouren，以及 Niellucciu、Sciaccarellu、Vermentinu",
        "duration": 18
      },
      {
        "id": "pv-l1-4",
        "title": "法規與標籤",
        "description": "AOP 與 IGP 體系、普羅旺斯 Crus Classés、顏色分類與標示",
        "duration": 18
      },
      {
        "id": "pv-l1-5",
        "title": "Level 1 綜合評量",
        "description": "以綜合測驗檢視 Level 1 的學習成果",
        "duration": 25
      }
    ]
  },
  "level2": {
    "title": "Level 2 - 產區與法規",
    "description": "從 Côtes de Provence、Bandol 到科西嘉的 Patrimonio、Ajaccio，逐區深入",
    "color": "#8A76BE",
    "modules": [
      {
        "id": "PV2M1",
        "title": "普羅旺斯主要產區",
        "lessonIds": [
          "pv-l2-1",
          "pv-l2-2",
          "pv-l2-3"
        ]
      },
      {
        "id": "PV2M2",
        "title": "小型 AOC",
        "lessonIds": [
          "pv-l2-4"
        ]
      },
      {
        "id": "PV2M3",
        "title": "科西嘉",
        "lessonIds": [
          "pv-l2-5",
          "pv-l2-6"
        ]
      },
      {
        "id": "PV2M4",
        "title": "風格與評量",
        "lessonIds": [
          "pv-l2-7",
          "pv-l2-8"
        ]
      }
    ],
    "lessons": [
      {
        "id": "pv-l2-1",
        "title": "Côtes de Provence 與五個地名",
        "description": "最大的 AOC、Sainte-Victoire、Fréjus、La Londe、Pierrefeu 與 Notre-Dame des Anges",
        "duration": 22
      },
      {
        "id": "pv-l2-2",
        "title": "Coteaux d'Aix、Les Baux 與 Coteaux Varois",
        "description": "西部的 Coteaux d'Aix-en-Provence、Alpilles 的 Les Baux-de-Provence 與內陸的 Coteaux Varois",
        "duration": 22
      },
      {
        "id": "pv-l2-3",
        "title": "Bandol",
        "description": "Mourvèdre 的故鄉：梯田、紅酒熟成規定與玫瑰紅酒",
        "duration": 22
      },
      {
        "id": "pv-l2-4",
        "title": "Cassis、Palette、Bellet 與 Pierrevert",
        "description": "小型 AOC：白酒的 Cassis、Château Simone 的 Palette、尼斯的 Bellet 與 Pierrevert",
        "duration": 20
      },
      {
        "id": "pv-l2-5",
        "title": "科西嘉北部",
        "description": "Patrimonio、Coteaux du Cap Corse、Muscat du Cap Corse 與 Calvi",
        "duration": 22
      },
      {
        "id": "pv-l2-6",
        "title": "科西嘉西部與南部",
        "description": "Ajaccio、Sartène、Figari、Porto-Vecchio 與 Vin de Corse",
        "duration": 22
      },
      {
        "id": "pv-l2-7",
        "title": "風格與品飲",
        "description": "淡色玫瑰紅酒、Bandol 紅酒、Vermentino 白酒與 Muscat 甜酒的品飲重點",
        "duration": 20
      },
      {
        "id": "pv-l2-8",
        "title": "Level 2 綜合評量",
        "description": "重點回顧與綜合測驗",
        "duration": 25
      }
    ]
  },
  "level3": {
    "title": "Level 3 - Diploma 精修",
    "description": "以 WSET Diploma D3 為目標：栽培與釀造、產業與市場、法規演變與論述",
    "color": "#3E3166",
    "modules": [
      {
        "id": "PV3M1",
        "title": "栽培與釀造",
        "lessonIds": [
          "pv-l3-1",
          "pv-l3-2"
        ]
      },
      {
        "id": "PV3M2",
        "title": "產業與論述",
        "lessonIds": [
          "pv-l3-3",
          "pv-l3-4"
        ]
      },
      {
        "id": "PV3M3",
        "title": "評量",
        "lessonIds": [
          "pv-l3-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "pv-l3-1",
        "title": "栽培與氣候",
        "description": "密斯特拉風、乾旱與野火、灌溉規定、有機與氣候變遷的影響",
        "duration": 22
      },
      {
        "id": "pv-l3-2",
        "title": "釀造與玫瑰紅酒工藝",
        "description": "直接壓榨、短時間浸皮、色度控制與 Provence 玫瑰紅酒的研究",
        "duration": 22
      },
      {
        "id": "pv-l3-3",
        "title": "產業與市場",
        "description": "CIVP 與 CIV Corse 的數字、出口市場、合作社與品牌",
        "duration": 22
      },
      {
        "id": "pv-l3-4",
        "title": "法規演變與 Diploma 論述",
        "description": "AOC 升格、地名制度、有機規定與論述範本",
        "duration": 22
      },
      {
        "id": "pv-l3-5",
        "title": "Level 3 綜合評量",
        "description": "以模擬題整合全部內容，完成 Level 3",
        "duration": 30
      }
    ]
  }
}

// ── localStorage 進度持久化（依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的進度）──
const PROVENCE_PROGRESS_KEY = 'provence-wine-academy-progress'

function progressStorageKey(userId) {
  return `${PROVENCE_PROGRESS_KEY}:${userId}`
}

function saveProgressToStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    localStorage.setItem(progressStorageKey(userId), JSON.stringify({
      completedLessons: provenceLearningState.completedLessons,
      userProgress: provenceLearningState.userProgress
    }))
  } catch (e) { console.warn('[provence-learn] save error', e) }
}

function loadProgressFromStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    const raw = localStorage.getItem(progressStorageKey(userId))
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.completedLessons)) {
      provenceLearningState.completedLessons = data.completedLessons
    }
    if (data.userProgress) {
      Object.keys(data.userProgress).forEach(key => {
        if (provenceLearningState.userProgress[key]) {
          provenceLearningState.userProgress[key].completed = data.userProgress[key].completed || 0
        }
      })
    }
  } catch (e) { console.warn('[provence-learn] load error', e) }
}

// 供 ProvenceLearningSystem 在 Supabase 同步後呼叫，重新載入 store 狀態
export function provenceReloadFromStorage() {
  provenceLearningState.completedLessons = []
  Object.keys(provenceLearningState.userProgress).forEach(k => {
    provenceLearningState.userProgress[k].completed = 0
  })
  loadProgressFromStorage()
}

// 登入／切換帳號時重新載入該帳號自己的進度，避免殘留前一位使用者的資料
watch(() => authState.user?.id, (userId, prevUserId) => {
  if (userId !== prevUserId) provenceReloadFromStorage()
})

// 希臘學習操作
export const provenceLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = provenceLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    provenceLearningState.currentLevel = level
    provenceLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = provenceLearningLevels[`level${provenceLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      provenceLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    provenceLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!provenceLearningState.completedLessons.includes(lessonId)) {
      provenceLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 pv-l1-3 → level1, pv-l2-1 → level2）
      const match = lessonId.match(/^pv-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : provenceLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (provenceLearningState.userProgress[levelKey]) {
        provenceLearningState.userProgress[levelKey].completed = Math.min(
          provenceLearningState.userProgress[levelKey].completed + 1,
          provenceLearningState.userProgress[levelKey].total
        )
      }
      saveProgressToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    provenceLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    provenceLearningState.testMode = false
    provenceLearningState.completedLessons = []
    Object.keys(provenceLearningState.userProgress).forEach(key => {
      provenceLearningState.userProgress[key].completed = 0
    })
    saveProgressToStorage()
  }
}

// 計算屬性：整體進度
export const provenceLearningProgress = computed(() => {
  const levels = Object.values(provenceLearningState.userProgress)
  const totalCompleted = levels.reduce((sum, l) => sum + l.completed, 0)
  const totalLessons = levels.reduce((sum, l) => sum + l.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})
