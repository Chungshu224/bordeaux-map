// Diploma 通論學習系統狀態管理
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// Diploma 通論學習進度狀態
export const diplomaLearningState = reactive({
  currentLevel: 1,
  currentLesson: null,
  completedLessons: [],
  testMode: false,
  userProgress: {
    level1: { completed: 0, total: 6 },
    level2: { completed: 0, total: 5 },
    level3: { completed: 0, total: 1 },
    level4: { completed: 0, total: 5 },
    level5: { completed: 0, total: 6 }
  },
  achievements: []
})

// Diploma 通論學習等級配置（大綱以 DIPLOMA_FOUNDATIONS_FRAMEWORK.md 為準）
export const diplomaLearningLevels = {
  "level1": {
    "title": "Level 1 - 葡萄栽培與釀造",
    "description": "D1 通論：葡萄藤、氣候與土壤、栽培管理與病害、白酒、粉紅酒與紅酒的釀造",
    "color": "#2F4858",
    "modules": [
      {
        "id": "DP1M1",
        "title": "葡萄園",
        "lessonIds": [
          "dp-l1-1",
          "dp-l1-2",
          "dp-l1-3"
        ]
      },
      {
        "id": "DP1M2",
        "title": "釀造",
        "lessonIds": [
          "dp-l1-4",
          "dp-l1-5"
        ]
      },
      {
        "id": "DP1M3",
        "title": "評量",
        "lessonIds": [
          "dp-l1-6"
        ]
      }
    ],
    "lessons": [
      {
        "id": "dp-l1-1",
        "title": "葡萄藤與生長週期",
        "description": "葡萄藤的構造、年度生長週期與成熟時果實的變化",
        "duration": 20
      },
      {
        "id": "dp-l1-2",
        "title": "氣候、土壤與葡萄園選址",
        "description": "氣候類型、影響溫度的地理因素、土壤與水分，以及「風土」的論述方式",
        "duration": 22
      },
      {
        "id": "dp-l1-3",
        "title": "栽培管理與病蟲害",
        "description": "整枝與修剪、葉幕管理、產量、砧木與根瘤蚜、主要病害，以及有機與生物動力",
        "duration": 24
      },
      {
        "id": "dp-l1-4",
        "title": "白酒與粉紅酒的釀造",
        "description": "採收與壓榨、澄清與發酵、乳酸發酵與酒渣、橡木，以及四種粉紅酒做法",
        "duration": 22
      },
      {
        "id": "dp-l1-5",
        "title": "紅酒釀造、熟成與裝瓶",
        "description": "萃取的方法與控制、整串與二氧化碳浸皮、熟成容器與氧氣，以及澄清、穩定與封瓶",
        "duration": 24
      },
      {
        "id": "dp-l1-6",
        "title": "Level 1 綜合評量",
        "description": "回顧栽培與釀造的因果鏈，完成綜合測驗",
        "duration": 25
      }
    ]
  },
  "level2": {
    "title": "Level 2 - 葡萄酒商業",
    "description": "D2 通論：成本與定價、通路與市場結構、品牌與消費者、市場分析與論述",
    "color": "#3A5A6E",
    "modules": [
      {
        "id": "DP2M1",
        "title": "成本、價格與通路",
        "lessonIds": [
          "dp-l2-1",
          "dp-l2-2"
        ]
      },
      {
        "id": "DP2M2",
        "title": "品牌與市場",
        "lessonIds": [
          "dp-l2-3",
          "dp-l2-4"
        ]
      },
      {
        "id": "DP2M3",
        "title": "評量",
        "lessonIds": [
          "dp-l2-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "dp-l2-1",
        "title": "成本結構與定價",
        "description": "一瓶酒的成本從哪裡來、價格鏈上的加成，以及常見的定價策略",
        "duration": 22
      },
      {
        "id": "dp-l2-2",
        "title": "通路與市場結構",
        "description": "進口商、批發與零售、餐飲與零售通路、專賣制度、美國三級制度、直銷與 Bordeaux 的 La Place",
        "duration": 22
      },
      {
        "id": "dp-l2-3",
        "title": "品牌、行銷與消費者",
        "description": "品牌與產區名稱、評分與媒體、包裝創新、永續訴求，以及低酒精趨勢",
        "duration": 22
      },
      {
        "id": "dp-l2-4",
        "title": "全球市場分析與論述寫法",
        "description": "用 SWOT 與因果鏈分析產區或企業、常見題型，以及評估題的寫法",
        "duration": 24
      },
      {
        "id": "dp-l2-5",
        "title": "Level 2 綜合評量",
        "description": "回顧成本、通路、品牌與市場，完成綜合測驗",
        "duration": 25
      }
    ]
  },
  "level3": {
    "title": "Level 3 - 全球氣泡酒導讀",
    "description": "D4 導讀：基酒與主要製法的核心邏輯，以及如何使用全球氣泡酒專論",
    "color": "#4F6B7D",
    "modules": [
      {
        "id": "DP3M1",
        "title": "導讀",
        "lessonIds": [
          "dp-l3-1"
        ]
      }
    ],
    "lessons": [
      {
        "id": "dp-l3-1",
        "title": "全球氣泡酒導讀",
        "description": "基酒與氣候、主要製法的差異，以及如何使用全球氣泡酒專論",
        "duration": 15
      }
    ]
  },
  "level4": {
    "title": "Level 4 - 全球加烈酒",
    "description": "D5 通論：加烈原理與熟成、Sherry、Port 與 Madeira、VDN、Rutherglen 與 Marsala",
    "color": "#5E7A8C",
    "modules": [
      {
        "id": "DP4M1",
        "title": "原理",
        "lessonIds": [
          "dp-l4-1"
        ]
      },
      {
        "id": "DP4M2",
        "title": "全球加烈酒",
        "lessonIds": [
          "dp-l4-2",
          "dp-l4-3",
          "dp-l4-4"
        ]
      },
      {
        "id": "DP4M3",
        "title": "評量",
        "lessonIds": [
          "dp-l4-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "dp-l4-1",
        "title": "加烈的原理與熟成方式",
        "description": "加烈的時機如何決定甜度、還原式與氧化式熟成，以及 solera 與加熱熟成",
        "duration": 20
      },
      {
        "id": "dp-l4-2",
        "title": "Sherry",
        "description": "Jerez 三角地帶的風土、Palomino 與 PX、flor 與氧化熟成的風格譜系，以及年份標示",
        "duration": 24
      },
      {
        "id": "dp-l4-3",
        "title": "Port 與 Madeira",
        "description": "Douro 的風土與品種、Ruby 與 Tawny 兩大家族，以及 Madeira 的品種風格與加熱熟成",
        "duration": 24
      },
      {
        "id": "dp-l4-4",
        "title": "其他加烈酒：VDN、Rutherglen 與 Marsala",
        "description": "法國天然甜酒、澳洲 Rutherglen Muscat 的四級分類，以及 Marsala 的顏色與熟成分級",
        "duration": 20
      },
      {
        "id": "dp-l4-5",
        "title": "Level 4 綜合評量",
        "description": "回顧加烈原理與全球加烈酒，完成綜合測驗",
        "duration": 25
      }
    ]
  },
  "level5": {
    "title": "Level 5 - 應考訓練",
    "description": "簡答與論述寫法、WSET SAT 與 CMS 盲品格式、白酒與紅酒盲品論述練習、綜合模擬考",
    "color": "#6D8798",
    "modules": [
      {
        "id": "DP5M1",
        "title": "寫作與品飲方法",
        "lessonIds": [
          "dp-l5-1",
          "dp-l5-2",
          "dp-l5-3"
        ]
      },
      {
        "id": "DP5M2",
        "title": "盲品論述練習",
        "lessonIds": [
          "dp-l5-4",
          "dp-l5-5"
        ]
      },
      {
        "id": "DP5M3",
        "title": "模擬考",
        "lessonIds": [
          "dp-l5-6"
        ]
      }
    ],
    "lessons": [
      {
        "id": "dp-l5-1",
        "title": "理論考試：簡答與論述的寫法",
        "description": "指令詞的意思、答案結構、時間分配，以及兩題簡答練習",
        "duration": 25
      },
      {
        "id": "dp-l5-2",
        "title": "WSET 系統性品飲（SAT）框架",
        "description": "外觀、香氣、口感與結論的描述順序，品質判斷（BLIC）與適飲性，以及如何為辨識結論提出理由",
        "duration": 22
      },
      {
        "id": "dp-l5-3",
        "title": "CMS 演繹式盲品格式",
        "description": "外觀、香氣、口感、初步結論與最終結論的流程，關鍵判斷點，以及各級考試形式",
        "duration": 22
      },
      {
        "id": "dp-l5-4",
        "title": "白酒盲品論述練習",
        "description": "從文字品飲描述推論品種與產區，並寫出理由；三題練習附評分要點",
        "duration": 25
      },
      {
        "id": "dp-l5-5",
        "title": "紅酒盲品論述練習",
        "description": "從文字品飲描述推論紅酒的品種與產區，並寫出理由；三題練習附評分要點",
        "duration": 25
      },
      {
        "id": "dp-l5-6",
        "title": "綜合模擬考",
        "description": "結合選擇題與簡答題，橫跨栽培、商業、氣泡酒、加烈酒與盲品",
        "duration": 30
      }
    ]
  }
}

// ── localStorage 進度持久化（依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的進度）──
const DIPLOMA_PROGRESS_KEY = 'diploma-wine-academy-progress'

function progressStorageKey(userId) {
  return `${DIPLOMA_PROGRESS_KEY}:${userId}`
}

function saveProgressToStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    localStorage.setItem(progressStorageKey(userId), JSON.stringify({
      completedLessons: diplomaLearningState.completedLessons,
      userProgress: diplomaLearningState.userProgress
    }))
  } catch (e) { console.warn('[diploma-learn] save error', e) }
}

function loadProgressFromStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    const raw = localStorage.getItem(progressStorageKey(userId))
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.completedLessons)) {
      diplomaLearningState.completedLessons = data.completedLessons
    }
    if (data.userProgress) {
      Object.keys(data.userProgress).forEach(key => {
        if (diplomaLearningState.userProgress[key]) {
          diplomaLearningState.userProgress[key].completed = data.userProgress[key].completed || 0
        }
      })
    }
  } catch (e) { console.warn('[diploma-learn] load error', e) }
}

// 供 DiplomaLearningSystem 在 Supabase 同步後呼叫，重新載入 store 狀態
export function diplomaReloadFromStorage() {
  diplomaLearningState.completedLessons = []
  Object.keys(diplomaLearningState.userProgress).forEach(k => {
    diplomaLearningState.userProgress[k].completed = 0
  })
  loadProgressFromStorage()
}

// 登入／切換帳號時重新載入該帳號自己的進度，避免殘留前一位使用者的資料
watch(() => authState.user?.id, (userId, prevUserId) => {
  if (userId !== prevUserId) diplomaReloadFromStorage()
})

// Diploma 通論學習操作
export const diplomaLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = diplomaLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    diplomaLearningState.currentLevel = level
    diplomaLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = diplomaLearningLevels[`level${diplomaLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      diplomaLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    diplomaLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!diplomaLearningState.completedLessons.includes(lessonId)) {
      diplomaLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 dp-l1-3 → level1, dp-l2-1 → level2）
      const match = lessonId.match(/^dp-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : diplomaLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (diplomaLearningState.userProgress[levelKey]) {
        diplomaLearningState.userProgress[levelKey].completed = Math.min(
          diplomaLearningState.userProgress[levelKey].completed + 1,
          diplomaLearningState.userProgress[levelKey].total
        )
      }
      saveProgressToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    diplomaLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    diplomaLearningState.testMode = false
    diplomaLearningState.completedLessons = []
    Object.keys(diplomaLearningState.userProgress).forEach(key => {
      diplomaLearningState.userProgress[key].completed = 0
    })
    saveProgressToStorage()
  }
}

// 計算屬性：整體進度
export const diplomaLearningProgress = computed(() => {
  const levels = Object.values(diplomaLearningState.userProgress)
  const totalCompleted = levels.reduce((sum, l) => sum + l.completed, 0)
  const totalLessons = levels.reduce((sum, l) => sum + l.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})
