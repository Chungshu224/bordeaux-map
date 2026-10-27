// 美國其他產區（UsOther）學習系統狀態管理
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// 美國其他產區學習進度狀態
export const usotherLearningState = reactive({
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

// 美國其他產區學習等級配置（框架版：課程內容待補；大綱以 USOTHER_COURSE_FRAMEWORK.md 第 2 節為準）
export const usotherLearningLevels = {
  "level1": {
    "title": "Level 1 - 美國產區入門",
    "description": "建立基礎：歷史、西北與東岸的地理氣候、白紅品種、AVA 制度與標籤",
    "color": "#1F4E79",
    "modules": [
      {
        "id": "US1M1",
        "title": "歷史與地理",
        "lessonIds": [
          "us-l1-1",
          "us-l1-2"
        ]
      },
      {
        "id": "US1M2",
        "title": "葡萄品種",
        "lessonIds": [
          "us-l1-3",
          "us-l1-4"
        ]
      },
      {
        "id": "US1M3",
        "title": "制度與評量",
        "lessonIds": [
          "us-l1-5",
          "us-l1-6"
        ]
      }
    ],
    "lessons": [
      {
        "id": "us-l1-1",
        "title": "認識美國西北與東岸葡萄酒",
        "description": "三州的歷史脈絡與現代發展",
        "duration": 15
      },
      {
        "id": "us-l1-2",
        "title": "地理與氣候",
        "description": "太平洋西北與東岸的緯度、山脈、湖與海",
        "duration": 16
      },
      {
        "id": "us-l1-3",
        "title": "白葡萄品種",
        "description": "Chardonnay、Riesling、Pinot Gris 與其他白品種",
        "duration": 16
      },
      {
        "id": "us-l1-4",
        "title": "紅葡萄品種",
        "description": "Pinot Noir、Cabernet Sauvignon、Merlot、Syrah 與 Cabernet Franc",
        "duration": 16
      },
      {
        "id": "us-l1-5",
        "title": "AVA 制度與標籤",
        "description": "AVA 的定義與產地、品種、年份的標示比例",
        "duration": 18
      },
      {
        "id": "us-l1-6",
        "title": "Level 1 綜合評量",
        "description": "以綜合測驗檢視 Level 1 的學習成果",
        "duration": 25
      }
    ]
  },
  "level2": {
    "title": "Level 2 - 美國產區與法規",
    "description": "Oregon、Washington、New York 的 AVA 逐區深入，含跨州 AVA",
    "color": "#2A6496",
    "modules": [
      {
        "id": "US2M1",
        "title": "Oregon",
        "lessonIds": [
          "us-l2-1",
          "us-l2-2",
          "us-l2-3"
        ]
      },
      {
        "id": "US2M2",
        "title": "Washington",
        "lessonIds": [
          "us-l2-4",
          "us-l2-5"
        ]
      },
      {
        "id": "US2M3",
        "title": "New York 與評量",
        "lessonIds": [
          "us-l2-6",
          "us-l2-7",
          "us-l2-8"
        ]
      }
    ],
    "lessons": [
      {
        "id": "us-l2-1",
        "title": "Oregon I：Willamette Valley",
        "description": "Willamette Valley 概覽與子 AVA",
        "duration": 22
      },
      {
        "id": "us-l2-2",
        "title": "Oregon II：Willamette 的土壤與風格",
        "description": "Jory、Willakenzie、Laurelwood 與風格差異",
        "duration": 22
      },
      {
        "id": "us-l2-3",
        "title": "Oregon III：南部、Columbia Gorge 與跨州 AVA",
        "description": "Southern Oregon、Columbia Gorge、Walla Walla 與 Columbia Valley",
        "duration": 20
      },
      {
        "id": "us-l2-4",
        "title": "Washington I：Columbia Valley",
        "description": "Columbia Valley、Yakima Valley 與 Red Mountain",
        "duration": 22
      },
      {
        "id": "us-l2-5",
        "title": "Washington II：其他 AVA",
        "description": "Walla Walla、Horse Heaven Hills、Wahluke Slope、Ancient Lakes 與 Puget Sound",
        "duration": 22
      },
      {
        "id": "us-l2-6",
        "title": "New York I：Finger Lakes",
        "description": "Seneca、Cayuga、Keuka 等湖區與 Riesling",
        "duration": 22
      },
      {
        "id": "us-l2-7",
        "title": "New York II：Long Island、Hudson River 與其他",
        "description": "Long Island、Hudson River Region、Lake Erie 與 Niagara Escarpment",
        "duration": 20
      },
      {
        "id": "us-l2-8",
        "title": "Level 2 綜合評量",
        "description": "重點回顧與綜合測驗",
        "duration": 25
      }
    ]
  },
  "level3": {
    "title": "Level 3 - 美國產區 Diploma／MW 精修",
    "description": "以 WSET Diploma D3 與 MW 為目標：栽培與氣候、釀造與風土、新興產區、產業與市場、論述",
    "color": "#12304D",
    "modules": [
      {
        "id": "US3M1",
        "title": "栽培與釀造",
        "lessonIds": [
          "us-l3-1",
          "us-l3-2"
        ]
      },
      {
        "id": "US3M2",
        "title": "風土與新興產區",
        "lessonIds": [
          "us-l3-3",
          "us-l3-4"
        ]
      },
      {
        "id": "US3M3",
        "title": "產業、應考與評量",
        "lessonIds": [
          "us-l3-5",
          "us-l3-6",
          "us-l3-7"
        ]
      }
    ],
    "lessons": [
      {
        "id": "us-l3-1",
        "title": "栽培與氣候",
        "description": "凍害、野火煙害、自根苗與永續認證",
        "duration": 22
      },
      {
        "id": "us-l3-2",
        "title": "釀造風格深度",
        "description": "Oregon Pinot Noir、Washington 紅酒、Finger Lakes Riesling 與甜酒",
        "duration": 22
      },
      {
        "id": "us-l3-3",
        "title": "風土深度",
        "description": "Willamette 與 Columbia Valley 子 AVA 比較、湖與海的效應",
        "duration": 22
      },
      {
        "id": "us-l3-4",
        "title": "其他新興產區",
        "description": "Idaho、Virginia 與 Texas 簡述",
        "duration": 18
      },
      {
        "id": "us-l3-5",
        "title": "產業與市場",
        "description": "生產者結構、三級銷售制度、直銷與價格帶",
        "duration": 22
      },
      {
        "id": "us-l3-6",
        "title": "Diploma 品飲與論述",
        "description": "Oregon Pinot、Washington Cabernet 與 Finger Lakes Riesling 的盲品線索，以及 MW 風格論述範例",
        "duration": 25
      },
      {
        "id": "us-l3-7",
        "title": "Level 3 綜合評量",
        "description": "以模擬題整合全部內容，完成 Level 3",
        "duration": 35
      }
    ]
  }
}

// ── localStorage 進度持久化（依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的進度）──
const USOTHER_PROGRESS_KEY = 'usother-wine-academy-progress'

function progressStorageKey(userId) {
  return `${USOTHER_PROGRESS_KEY}:${userId}`
}

function saveProgressToStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    localStorage.setItem(progressStorageKey(userId), JSON.stringify({
      completedLessons: usotherLearningState.completedLessons,
      userProgress: usotherLearningState.userProgress
    }))
  } catch (e) { console.warn('[usother-learn] save error', e) }
}

function loadProgressFromStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    const raw = localStorage.getItem(progressStorageKey(userId))
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.completedLessons)) {
      usotherLearningState.completedLessons = data.completedLessons
    }
    if (data.userProgress) {
      Object.keys(data.userProgress).forEach(key => {
        if (usotherLearningState.userProgress[key]) {
          usotherLearningState.userProgress[key].completed = data.userProgress[key].completed || 0
        }
      })
    }
  } catch (e) { console.warn('[usother-learn] load error', e) }
}

// 供 UsOtherLearningSystem 在 Supabase 同步後呼叫，重新載入 store 狀態
export function usotherReloadFromStorage() {
  usotherLearningState.completedLessons = []
  Object.keys(usotherLearningState.userProgress).forEach(k => {
    usotherLearningState.userProgress[k].completed = 0
  })
  loadProgressFromStorage()
}

// 登入／切換帳號時重新載入該帳號自己的進度，避免殘留前一位使用者的資料
watch(() => authState.user?.id, (userId, prevUserId) => {
  if (userId !== prevUserId) usotherReloadFromStorage()
})

// 希臘學習操作
export const usotherLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = usotherLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    usotherLearningState.currentLevel = level
    usotherLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = usotherLearningLevels[`level${usotherLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      usotherLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    usotherLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!usotherLearningState.completedLessons.includes(lessonId)) {
      usotherLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 us-l1-3 → level1, us-l2-1 → level2）
      const match = lessonId.match(/^us-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : usotherLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (usotherLearningState.userProgress[levelKey]) {
        usotherLearningState.userProgress[levelKey].completed = Math.min(
          usotherLearningState.userProgress[levelKey].completed + 1,
          usotherLearningState.userProgress[levelKey].total
        )
      }
      saveProgressToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    usotherLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    usotherLearningState.testMode = false
    usotherLearningState.completedLessons = []
    Object.keys(usotherLearningState.userProgress).forEach(key => {
      usotherLearningState.userProgress[key].completed = 0
    })
    saveProgressToStorage()
  }
}

// 計算屬性：整體進度
export const usotherLearningProgress = computed(() => {
  const levels = Object.values(usotherLearningState.userProgress)
  const totalCompleted = levels.reduce((sum, l) => sum + l.completed, 0)
  const totalLessons = levels.reduce((sum, l) => sum + l.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})
