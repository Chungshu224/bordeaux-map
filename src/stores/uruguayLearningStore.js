// 烏拉圭課程學習系統狀態管理
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// 烏拉圭課程學習進度狀態
export const uruguayLearningState = reactive({
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

// 烏拉圭課程學習等級配置（大綱以 URUGUAY_COURSE_FRAMEWORK.md 為準）
export const uruguayLearningLevels = {
  "level1": {
    "title": "Level 1 - 認識烏拉圭",
    "description": "地理與氣候、移民先驅與 INAVI、Tannat 與其他品種、產業與市場",
    "color": "#1F5FA8",
    "modules": [
      {
        "id": "UY1M1",
        "title": "風土與歷史",
        "lessonIds": [
          "uy-l1-1",
          "uy-l1-2"
        ]
      },
      {
        "id": "UY1M2",
        "title": "品種與產業",
        "lessonIds": [
          "uy-l1-3",
          "uy-l1-4"
        ]
      },
      {
        "id": "UY1M3",
        "title": "綜合複習",
        "lessonIds": [
          "uy-l1-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "uy-l1-1",
        "title": "平地、河口與大西洋：地理與氣候",
        "description": "位置與地形、海洋調節、生長季雨水與年份差異",
        "duration": 16
      },
      {
        "id": "uy-l1-2",
        "title": "從移民先驅到國家飲料",
        "description": "Harriague 與 Vidiella、1903 年的母法、INAVI 與國家飲料",
        "duration": 18
      },
      {
        "id": "uy-l1-3",
        "title": "品種與風格",
        "description": "Tannat、漢堡蜜思嘉、波爾多品種與 Albariño",
        "duration": 16
      },
      {
        "id": "uy-l1-4",
        "title": "產業結構與市場",
        "description": "面積與分布、葡萄最低價、出口與內銷",
        "duration": 15
      },
      {
        "id": "uy-l1-5",
        "title": "Level 1 綜合複習",
        "description": "回顧風土、歷史、品種與產業，完成綜合評量",
        "duration": 15
      }
    ]
  },
  "level2": {
    "title": "Level 2 - 法規與產區",
    "description": "法規架構、VCP 與酒標、地理標示、INAVI 的葡萄酒區域",
    "color": "#B8902A",
    "modules": [
      {
        "id": "UY2M1",
        "title": "法規與酒標",
        "lessonIds": [
          "uy-l2-1",
          "uy-l2-2"
        ]
      },
      {
        "id": "UY2M2",
        "title": "地名與區域",
        "lessonIds": [
          "uy-l2-3",
          "uy-l2-4"
        ]
      },
      {
        "id": "UY2M3",
        "title": "總複習",
        "lessonIds": [
          "uy-l2-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "uy-l2-1",
        "title": "法規架構",
        "description": "第 2.856 號法、第 15.903 號法與第 18.462 號法",
        "duration": 18
      },
      {
        "id": "uy-l2-2",
        "title": "VCP 與酒標",
        "description": "第 283/993 號命令：VCP 的標準、品種與年份標示",
        "duration": 18
      },
      {
        "id": "uy-l2-3",
        "title": "地理標示：酒標上的地名",
        "description": "第 283/993 號命令第四章與第 17.011 號法",
        "duration": 18
      },
      {
        "id": "uy-l2-4",
        "title": "葡萄酒區域",
        "description": "INAVI 介紹的區域、所屬省份與特色",
        "duration": 18
      },
      {
        "id": "uy-l2-5",
        "title": "總複習與綜合評量",
        "description": "串起法律、VCP、地理標示與區域，完成總評量與簡答",
        "duration": 22
      }
    ]
  }
}

// ── localStorage 進度持久化（依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的進度）──
const DIPLOMA_PROGRESS_KEY = 'uruguay-wine-academy-progress'

function progressStorageKey(userId) {
  return `${DIPLOMA_PROGRESS_KEY}:${userId}`
}

function saveProgressToStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    localStorage.setItem(progressStorageKey(userId), JSON.stringify({
      completedLessons: uruguayLearningState.completedLessons,
      userProgress: uruguayLearningState.userProgress
    }))
  } catch (e) { console.warn('[uruguay-learn] save error', e) }
}

function loadProgressFromStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    const raw = localStorage.getItem(progressStorageKey(userId))
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.completedLessons)) {
      uruguayLearningState.completedLessons = data.completedLessons
    }
    if (data.userProgress) {
      Object.keys(data.userProgress).forEach(key => {
        if (uruguayLearningState.userProgress[key]) {
          uruguayLearningState.userProgress[key].completed = data.userProgress[key].completed || 0
        }
      })
    }
  } catch (e) { console.warn('[uruguay-learn] load error', e) }
}

// 供 UruguayLearningSystem 在 Supabase 同步後呼叫，重新載入 store 狀態
export function uruguayReloadFromStorage() {
  uruguayLearningState.completedLessons = []
  Object.keys(uruguayLearningState.userProgress).forEach(k => {
    uruguayLearningState.userProgress[k].completed = 0
  })
  loadProgressFromStorage()
}

// 登入／切換帳號時重新載入該帳號自己的進度，避免殘留前一位使用者的資料
watch(() => authState.user?.id, (userId, prevUserId) => {
  if (userId !== prevUserId) uruguayReloadFromStorage()
})

// 烏拉圭課程學習操作
export const uruguayLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = uruguayLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    uruguayLearningState.currentLevel = level
    uruguayLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = uruguayLearningLevels[`level${uruguayLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      uruguayLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    uruguayLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!uruguayLearningState.completedLessons.includes(lessonId)) {
      uruguayLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 uy-l1-3 → level1, uy-l2-1 → level2）
      const match = lessonId.match(/^uy-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : uruguayLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (uruguayLearningState.userProgress[levelKey]) {
        uruguayLearningState.userProgress[levelKey].completed = Math.min(
          uruguayLearningState.userProgress[levelKey].completed + 1,
          uruguayLearningState.userProgress[levelKey].total
        )
      }
      saveProgressToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    uruguayLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    uruguayLearningState.testMode = false
    uruguayLearningState.completedLessons = []
    Object.keys(uruguayLearningState.userProgress).forEach(key => {
      uruguayLearningState.userProgress[key].completed = 0
    })
    saveProgressToStorage()
  }
}

// 計算屬性：整體進度
export const uruguayLearningProgress = computed(() => {
  const levels = Object.values(uruguayLearningState.userProgress)
  const totalCompleted = levels.reduce((sum, l) => sum + l.completed, 0)
  const totalLessons = levels.reduce((sum, l) => sum + l.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})
