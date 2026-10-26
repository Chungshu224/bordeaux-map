// 奧地利（Austria）學習系統狀態管理
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// 奧地利學習進度狀態
export const austriaLearningState = reactive({
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

// 奧地利學習等級配置（框架版：課程內容待補；大綱以 AUSTRIA_COURSE_FRAMEWORK.md 第 2 節為準）
export const austriaLearningLevels = {
  "level1": {
    "title": "Level 1 - 奧地利入門",
    "description": "建立奧地利基礎：歷史與 1985 年醜聞、地理氣候、白紅品種、分級與標籤",
    "color": "#B3202E",
    "modules": [
      {
        "id": "AT1M1",
        "title": "歷史與地理",
        "lessonIds": [
          "at-l1-1",
          "at-l1-2"
        ]
      },
      {
        "id": "AT1M2",
        "title": "葡萄品種",
        "lessonIds": [
          "at-l1-3",
          "at-l1-4"
        ]
      },
      {
        "id": "AT1M3",
        "title": "風格與評量",
        "lessonIds": [
          "at-l1-5",
          "at-l1-6"
        ]
      }
    ],
    "lessons": [
      {
        "id": "at-l1-1",
        "title": "認識奧地利葡萄酒",
        "description": "歷史、1985 年醜聞與復興、現代奧地利葡萄酒的定位",
        "duration": 15
      },
      {
        "id": "at-l1-2",
        "title": "地理、氣候與四大葡萄酒區域",
        "description": "位置、Danube 與 Pannonian 氣候、Weinland／Bergland／Steiermark／Wien",
        "duration": 16
      },
      {
        "id": "at-l1-3",
        "title": "白葡萄品種",
        "description": "Grüner Veltliner、Riesling、Welschriesling 與其他白品種的角色",
        "duration": 16
      },
      {
        "id": "at-l1-4",
        "title": "紅葡萄品種",
        "description": "Zweigelt、Blaufränkisch、St. Laurent 與其他紅品種的特徵",
        "duration": 16
      },
      {
        "id": "at-l1-5",
        "title": "酒款風格、分級與標籤",
        "description": "乾型與甜型風格、Qualitätswein 與 Prädikat、標籤閱讀基礎",
        "duration": 18
      },
      {
        "id": "at-l1-6",
        "title": "Level 1 綜合評量",
        "description": "以綜合測驗檢視 Level 1 的學習成果",
        "duration": 25
      }
    ]
  },
  "level2": {
    "title": "Level 2 - 奧地利產區與法規",
    "description": "DAC、Ried 與 ÖTW 法規，Niederösterreich、Wien、Burgenland、Steiermark 逐區深入",
    "color": "#96192A",
    "modules": [
      {
        "id": "AT2M1",
        "title": "法規與分級",
        "lessonIds": [
          "at-l2-1"
        ]
      },
      {
        "id": "AT2M2",
        "title": "Niederösterreich",
        "lessonIds": [
          "at-l2-2",
          "at-l2-3",
          "at-l2-4"
        ]
      },
      {
        "id": "AT2M3",
        "title": "Wien 與 Burgenland",
        "lessonIds": [
          "at-l2-5",
          "at-l2-6"
        ]
      },
      {
        "id": "AT2M4",
        "title": "Steiermark 與評量",
        "lessonIds": [
          "at-l2-7",
          "at-l2-8"
        ]
      }
    ],
    "lessons": [
      {
        "id": "at-l2-1",
        "title": "法規體系：DAC、Ried 與 ÖTW",
        "description": "Qualitätswein、Prädikat、DAC 制度、Ried 標示與 ÖTW Erste／Große Lage",
        "duration": 20
      },
      {
        "id": "at-l2-2",
        "title": "Wachau",
        "description": "Vinea Wachau 的 Steinfeder／Federspiel／Smaragd 三級、梯田與主要村莊",
        "duration": 22
      },
      {
        "id": "at-l2-3",
        "title": "Kremstal、Kamptal 與 Traisental",
        "description": "三個 Danube 支流 DAC 的風格、土壤與著名 Ried",
        "duration": 22
      },
      {
        "id": "at-l2-4",
        "title": "Weinviertel、Wagram、Carnuntum 與 Thermenregion",
        "description": "其餘 Niederösterreich DAC 的特色、品種與風格",
        "duration": 22
      },
      {
        "id": "at-l2-5",
        "title": "Wien 與 Wiener Gemischter Satz",
        "description": "首都的城市葡萄園與 Wiener Gemischter Satz DAC 的混植混釀規定",
        "duration": 18
      },
      {
        "id": "at-l2-6",
        "title": "Burgenland",
        "description": "Neusiedlersee、Leithaberg、Mittelburgenland、Eisenberg、Rosalia 與甜酒",
        "duration": 22
      },
      {
        "id": "at-l2-7",
        "title": "Steiermark",
        "description": "Südsteiermark、Vulkanland、Weststeiermark 與 Schilcher",
        "duration": 20
      },
      {
        "id": "at-l2-8",
        "title": "Level 2 綜合評量",
        "description": "重點回顧與綜合測驗",
        "duration": 25
      }
    ]
  },
  "level3": {
    "title": "Level 3 - 奧地利 Diploma／MW 精修",
    "description": "以 WSET Diploma D3 與 MW 為目標：栽培與風土、甜酒、法規、產業與論述",
    "color": "#7A1520",
    "modules": [
      {
        "id": "AT3M1",
        "title": "栽培與風土",
        "lessonIds": [
          "at-l3-1",
          "at-l3-2"
        ]
      },
      {
        "id": "AT3M2",
        "title": "甜酒與法規",
        "lessonIds": [
          "at-l3-3",
          "at-l3-4"
        ]
      },
      {
        "id": "AT3M3",
        "title": "產業、應考與評量",
        "lessonIds": [
          "at-l3-5",
          "at-l3-6",
          "at-l3-7"
        ]
      }
    ],
    "lessons": [
      {
        "id": "at-l3-1",
        "title": "栽培、釀造與 Sekt Austria",
        "description": "Danube 與 Pannonian 風土、有機與永續、Sekt Austria 三級",
        "duration": 22
      },
      {
        "id": "at-l3-2",
        "title": "風土深度",
        "description": "Wachau 片麻岩與黃土、Heiligenstein、Leithaberg 石灰岩",
        "duration": 22
      },
      {
        "id": "at-l3-3",
        "title": "甜酒",
        "description": "Beerenauslese、Trockenbeerenauslese、Ausbruch、Strohwein 與 Eiswein",
        "duration": 20
      },
      {
        "id": "at-l3-4",
        "title": "法規深度與標籤判讀",
        "description": "DAC Klassik 與 Reserve、Ried 標示與 Wachau Codex",
        "duration": 20
      },
      {
        "id": "at-l3-5",
        "title": "產業與市場",
        "description": "出口結構、生產者類型、合作社與價格帶",
        "duration": 20
      },
      {
        "id": "at-l3-6",
        "title": "Diploma 品飲與論述",
        "description": "Grüner Veltliner 與 Riesling 的盲品線索，以及 MW 風格論述範例",
        "duration": 25
      },
      {
        "id": "at-l3-7",
        "title": "Level 3 綜合評量",
        "description": "以模擬題整合全部內容，完成 Level 3",
        "duration": 35
      }
    ]
  }
}

// ── localStorage 進度持久化（依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的進度）──
const AUSTRIA_PROGRESS_KEY = 'austria-wine-academy-progress'

function progressStorageKey(userId) {
  return `${AUSTRIA_PROGRESS_KEY}:${userId}`
}

function saveProgressToStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    localStorage.setItem(progressStorageKey(userId), JSON.stringify({
      completedLessons: austriaLearningState.completedLessons,
      userProgress: austriaLearningState.userProgress
    }))
  } catch (e) { console.warn('[austria-learn] save error', e) }
}

function loadProgressFromStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    const raw = localStorage.getItem(progressStorageKey(userId))
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.completedLessons)) {
      austriaLearningState.completedLessons = data.completedLessons
    }
    if (data.userProgress) {
      Object.keys(data.userProgress).forEach(key => {
        if (austriaLearningState.userProgress[key]) {
          austriaLearningState.userProgress[key].completed = data.userProgress[key].completed || 0
        }
      })
    }
  } catch (e) { console.warn('[austria-learn] load error', e) }
}

// 供 AustriaLearningSystem 在 Supabase 同步後呼叫，重新載入 store 狀態
export function austriaReloadFromStorage() {
  austriaLearningState.completedLessons = []
  Object.keys(austriaLearningState.userProgress).forEach(k => {
    austriaLearningState.userProgress[k].completed = 0
  })
  loadProgressFromStorage()
}

// 登入／切換帳號時重新載入該帳號自己的進度，避免殘留前一位使用者的資料
watch(() => authState.user?.id, (userId, prevUserId) => {
  if (userId !== prevUserId) austriaReloadFromStorage()
})

// 希臘學習操作
export const austriaLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = austriaLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    austriaLearningState.currentLevel = level
    austriaLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = austriaLearningLevels[`level${austriaLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      austriaLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    austriaLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!austriaLearningState.completedLessons.includes(lessonId)) {
      austriaLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 at-l1-3 → level1, at-l2-1 → level2）
      const match = lessonId.match(/^at-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : austriaLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (austriaLearningState.userProgress[levelKey]) {
        austriaLearningState.userProgress[levelKey].completed = Math.min(
          austriaLearningState.userProgress[levelKey].completed + 1,
          austriaLearningState.userProgress[levelKey].total
        )
      }
      saveProgressToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    austriaLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    austriaLearningState.testMode = false
    austriaLearningState.completedLessons = []
    Object.keys(austriaLearningState.userProgress).forEach(key => {
      austriaLearningState.userProgress[key].completed = 0
    })
    saveProgressToStorage()
  }
}

// 計算屬性：整體進度
export const austriaLearningProgress = computed(() => {
  const levels = Object.values(austriaLearningState.userProgress)
  const totalCompleted = levels.reduce((sum, l) => sum + l.completed, 0)
  const totalLessons = levels.reduce((sum, l) => sum + l.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})
