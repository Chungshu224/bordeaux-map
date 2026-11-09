// 突尼西亞課程學習系統狀態管理
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// 突尼西亞課程學習進度狀態
export const tunisiaLearningState = reactive({
  currentLevel: 1,
  currentLesson: null,
  completedLessons: [],
  testMode: false,
  userProgress: {
    level1: { completed: 0, total: 5 },
    level2: { completed: 0, total: 5 }
  },
  achievements: []
})

// 突尼西亞課程學習等級配置（大綱以 TUNISIA_COURSE_FRAMEWORK.md 為準）
export const tunisiaLearningLevels = {
  "level1": {
    "title": "Level 1 - 認識突尼西亞",
    "description": "地理與風土、從迦太基到國營體系的歷史、品種與蜜思嘉、產業與市場",
    "color": "#B5121B",
    "modules": [
      {
        "id": "TN1M1",
        "title": "風土與歷史",
        "lessonIds": [
          "tn-l1-1",
          "tn-l1-2"
        ]
      },
      {
        "id": "TN1M2",
        "title": "品種與產業",
        "lessonIds": [
          "tn-l1-3",
          "tn-l1-4"
        ]
      },
      {
        "id": "TN1M3",
        "title": "綜合複習",
        "lessonIds": [
          "tn-l1-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "tn-l1-1",
        "title": "葡萄園在哪裡：地理與風土",
        "description": "產區分布、地中海氣候與土壤",
        "duration": 16
      },
      {
        "id": "tn-l1-2",
        "title": "從迦太基到國營體系",
        "description": "Mago、法國保護國時期、第一批法定產區與獨立後",
        "duration": 18
      },
      {
        "id": "tn-l1-3",
        "title": "品種與風格",
        "description": "南法傳統品種、國際品種、亞歷山大蜜思嘉與粉紅酒",
        "duration": 16
      },
      {
        "id": "tn-l1-4",
        "title": "產業結構與市場",
        "description": "規模、合作社與外資、出口與內銷",
        "duration": 15
      },
      {
        "id": "tn-l1-5",
        "title": "Level 1 綜合複習",
        "description": "回顧風土、歷史、品種與產業，完成綜合評量",
        "duration": 15
      }
    ]
  },
  "level2": {
    "title": "Level 2 - 產區與法規",
    "description": "法規架構、七個 AOC 與設立年代、產區範圍、酒標與國際保護",
    "color": "#1E6FA8",
    "modules": [
      {
        "id": "TN2M1",
        "title": "法規與 AOC",
        "lessonIds": [
          "tn-l2-1",
          "tn-l2-2"
        ]
      },
      {
        "id": "TN2M2",
        "title": "範圍與保護",
        "lessonIds": [
          "tn-l2-3",
          "tn-l2-4"
        ]
      },
      {
        "id": "TN2M3",
        "title": "總複習",
        "lessonIds": [
          "tn-l2-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "tn-l2-1",
        "title": "法規架構",
        "description": "1957 年命令、1975 年葡萄酒業法與 1999 年第 99-57 號法",
        "duration": 20
      },
      {
        "id": "tn-l2-2",
        "title": "七個 AOC 與設立年代",
        "description": "從 1958 年的蜜思嘉到 1989 年的 Mornag",
        "duration": 18
      },
      {
        "id": "tn-l2-3",
        "title": "產區範圍：登記冊怎麼寫",
        "description": "依國際登記讀 Kélibia、Sidi Salem、Mornag、Tébourba 與 Thibar 的範圍",
        "duration": 18
      },
      {
        "id": "tn-l2-4",
        "title": "酒標與國際保護",
        "description": "2001 年的區域名稱規定、第 99-57 號法的保護與里斯本協定",
        "duration": 18
      },
      {
        "id": "tn-l2-5",
        "title": "總複習與綜合評量",
        "description": "串起法規、產區與國際保護，完成總評量與簡答",
        "duration": 22
      }
    ]
  }
}

// ── localStorage 進度持久化（依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的進度）──
const DIPLOMA_PROGRESS_KEY = 'tunisia-wine-academy-progress'

function progressStorageKey(userId) {
  return `${DIPLOMA_PROGRESS_KEY}:${userId}`
}

function saveProgressToStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    localStorage.setItem(progressStorageKey(userId), JSON.stringify({
      completedLessons: tunisiaLearningState.completedLessons,
      userProgress: tunisiaLearningState.userProgress
    }))
  } catch (e) { console.warn('[tunisia-learn] save error', e) }
}

function loadProgressFromStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    const raw = localStorage.getItem(progressStorageKey(userId))
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.completedLessons)) {
      tunisiaLearningState.completedLessons = data.completedLessons
    }
    if (data.userProgress) {
      Object.keys(data.userProgress).forEach(key => {
        if (tunisiaLearningState.userProgress[key]) {
          tunisiaLearningState.userProgress[key].completed = data.userProgress[key].completed || 0
        }
      })
    }
  } catch (e) { console.warn('[tunisia-learn] load error', e) }
}

// 供 TunisiaLearningSystem 在 Supabase 同步後呼叫，重新載入 store 狀態
export function tunisiaReloadFromStorage() {
  tunisiaLearningState.completedLessons = []
  Object.keys(tunisiaLearningState.userProgress).forEach(k => {
    tunisiaLearningState.userProgress[k].completed = 0
  })
  loadProgressFromStorage()
}

// 登入／切換帳號時重新載入該帳號自己的進度，避免殘留前一位使用者的資料
watch(() => authState.user?.id, (userId, prevUserId) => {
  if (userId !== prevUserId) tunisiaReloadFromStorage()
})

// 突尼西亞課程學習操作
export const tunisiaLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = tunisiaLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    tunisiaLearningState.currentLevel = level
    tunisiaLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = tunisiaLearningLevels[`level${tunisiaLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      tunisiaLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    tunisiaLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!tunisiaLearningState.completedLessons.includes(lessonId)) {
      tunisiaLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 tn-l1-3 → level1, tn-l2-1 → level2）
      const match = lessonId.match(/^tn-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : tunisiaLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (tunisiaLearningState.userProgress[levelKey]) {
        tunisiaLearningState.userProgress[levelKey].completed = Math.min(
          tunisiaLearningState.userProgress[levelKey].completed + 1,
          tunisiaLearningState.userProgress[levelKey].total
        )
      }
      saveProgressToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    tunisiaLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    tunisiaLearningState.testMode = false
    tunisiaLearningState.completedLessons = []
    Object.keys(tunisiaLearningState.userProgress).forEach(key => {
      tunisiaLearningState.userProgress[key].completed = 0
    })
    saveProgressToStorage()
  }
}

// 計算屬性：整體進度
export const tunisiaLearningProgress = computed(() => {
  const levels = Object.values(tunisiaLearningState.userProgress)
  const totalCompleted = levels.reduce((sum, l) => sum + l.completed, 0)
  const totalLessons = levels.reduce((sum, l) => sum + l.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})
