// 白蘭地（Brandy）學習系統狀態管理
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// 白蘭地學習進度狀態
export const brandyLearningState = reactive({
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

// 白蘭地學習等級配置（大綱以 BRANDY_COURSE_FRAMEWORK.md 為準）
export const brandyLearningLevels = {
  "level1": {
    "title": "Level 1 - 白蘭地入門",
    "description": "建立基礎：定義與歷史、蒸餾原理、葡萄與基酒、橡木熟成與分級",
    "color": "#8A4B14",
    "modules": [
      {
        "id": "BD1M1",
        "title": "歷史與蒸餾",
        "lessonIds": [
          "bd-l1-1",
          "bd-l1-2"
        ]
      },
      {
        "id": "BD1M2",
        "title": "原料與熟成",
        "lessonIds": [
          "bd-l1-3",
          "bd-l1-4"
        ]
      },
      {
        "id": "BD1M3",
        "title": "評量",
        "lessonIds": [
          "bd-l1-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "bd-l1-1",
        "title": "認識白蘭地",
        "description": "定義、名稱由來，以及從荷蘭商人到法國產區的歷史",
        "duration": 15
      },
      {
        "id": "bd-l1-2",
        "title": "蒸餾原理",
        "description": "壺式與連續式蒸餾、酒頭與酒尾、酒精度與切取",
        "duration": 18
      },
      {
        "id": "bd-l1-3",
        "title": "葡萄與基酒",
        "description": "Ugni Blanc、Folle Blanche、Colombard 等品種與高酸低度基酒",
        "duration": 17
      },
      {
        "id": "bd-l1-4",
        "title": "橡木熟成與分級",
        "description": "橡木桶、熟成氣味，以及 VS、VSOP、XO 等年數標示",
        "duration": 18
      },
      {
        "id": "bd-l1-5",
        "title": "Level 1 綜合評量",
        "description": "以綜合測驗檢視 Level 1 的學習成果",
        "duration": 25
      }
    ]
  },
  "level2": {
    "title": "Level 2 - 產區與法規",
    "description": "從 Cognac、Armagnac 到西班牙、義大利、希臘、德國與新世界的葡萄蒸餾酒，逐區深入",
    "color": "#B0702A",
    "modules": [
      {
        "id": "BD2M1",
        "title": "法國產區",
        "lessonIds": [
          "bd-l2-1",
          "bd-l2-2",
          "bd-l2-3"
        ]
      },
      {
        "id": "BD2M2",
        "title": "其他產區",
        "lessonIds": [
          "bd-l2-4",
          "bd-l2-5"
        ]
      },
      {
        "id": "BD2M3",
        "title": "評量",
        "lessonIds": [
          "bd-l2-6"
        ]
      }
    ],
    "lessons": [
      {
        "id": "bd-l2-1",
        "title": "Cognac 的產區與六個 Crus",
        "description": "Charente 的地理、Grande Champagne 到 Bois Ordinaires",
        "duration": 22
      },
      {
        "id": "bd-l2-2",
        "title": "Cognac 的蒸餾與熟成",
        "description": "Charentais 壺式蒸餾、橡木桶、年數等級與 Fine Champagne",
        "duration": 22
      },
      {
        "id": "bd-l2-3",
        "title": "Armagnac 的產區與風格",
        "description": "三個地區、連續蒸餾、品種、年份 Armagnac 與 Bas-Armagnac",
        "duration": 22
      },
      {
        "id": "bd-l2-4",
        "title": "歐洲其他葡萄白蘭地",
        "description": "Brandy de Jerez、Metaxa、德國 Weinbrand、Grappa 與其他",
        "duration": 22
      },
      {
        "id": "bd-l2-5",
        "title": "新世界與其他產區",
        "description": "Pisco、南非與加州白蘭地，以及高加索一帶的白蘭地",
        "duration": 20
      },
      {
        "id": "bd-l2-6",
        "title": "Level 2 綜合評量",
        "description": "重點回顧與綜合測驗",
        "duration": 28
      }
    ]
  },
  "level3": {
    "title": "Level 3 - Diploma／CMS 精修",
    "description": "以 WSET Diploma D5 與 CMS 烈酒為目標：蒸餾與熟成深度、風格與品飲、產業與市場、法規與論述",
    "color": "#4A2408",
    "modules": [
      {
        "id": "BD3M1",
        "title": "蒸餾與風格",
        "lessonIds": [
          "bd-l3-1",
          "bd-l3-2"
        ]
      },
      {
        "id": "BD3M2",
        "title": "產業與應考",
        "lessonIds": [
          "bd-l3-3",
          "bd-l3-4"
        ]
      },
      {
        "id": "BD3M3",
        "title": "評量",
        "lessonIds": [
          "bd-l3-5"
        ]
      }
    ],
    "lessons": [
      {
        "id": "bd-l3-1",
        "title": "蒸餾與熟成深度",
        "description": "酒泥、切取、橡木萃取、氧化與蒸發損耗",
        "duration": 24
      },
      {
        "id": "bd-l3-2",
        "title": "風格與品飲",
        "description": "年輕與老熟風格、Rancio 與品飲描述",
        "duration": 22
      },
      {
        "id": "bd-l3-3",
        "title": "產業與市場",
        "description": "品牌集中度、出口市場、關稅與庫存",
        "duration": 20
      },
      {
        "id": "bd-l3-4",
        "title": "法規與 Diploma／CMS 論述",
        "description": "歐盟烈酒規定、產區法規演變與論述範本",
        "duration": 22
      },
      {
        "id": "bd-l3-5",
        "title": "Level 3 綜合評量",
        "description": "以模擬題整合全部內容，完成 Level 3",
        "duration": 30
      }
    ]
  }
}

// ── localStorage 進度持久化（依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的進度）──
const BRANDY_PROGRESS_KEY = 'brandy-wine-academy-progress'

function progressStorageKey(userId) {
  return `${BRANDY_PROGRESS_KEY}:${userId}`
}

function saveProgressToStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    localStorage.setItem(progressStorageKey(userId), JSON.stringify({
      completedLessons: brandyLearningState.completedLessons,
      userProgress: brandyLearningState.userProgress
    }))
  } catch (e) { console.warn('[brandy-learn] save error', e) }
}

function loadProgressFromStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    const raw = localStorage.getItem(progressStorageKey(userId))
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.completedLessons)) {
      brandyLearningState.completedLessons = data.completedLessons
    }
    if (data.userProgress) {
      Object.keys(data.userProgress).forEach(key => {
        if (brandyLearningState.userProgress[key]) {
          brandyLearningState.userProgress[key].completed = data.userProgress[key].completed || 0
        }
      })
    }
  } catch (e) { console.warn('[brandy-learn] load error', e) }
}

// 供 BrandyLearningSystem 在 Supabase 同步後呼叫，重新載入 store 狀態
export function brandyReloadFromStorage() {
  brandyLearningState.completedLessons = []
  Object.keys(brandyLearningState.userProgress).forEach(k => {
    brandyLearningState.userProgress[k].completed = 0
  })
  loadProgressFromStorage()
}

// 登入／切換帳號時重新載入該帳號自己的進度，避免殘留前一位使用者的資料
watch(() => authState.user?.id, (userId, prevUserId) => {
  if (userId !== prevUserId) brandyReloadFromStorage()
})

// 希臘學習操作
export const brandyLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = brandyLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    brandyLearningState.currentLevel = level
    brandyLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = brandyLearningLevels[`level${brandyLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      brandyLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    brandyLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!brandyLearningState.completedLessons.includes(lessonId)) {
      brandyLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 bd-l1-3 → level1, bd-l2-1 → level2）
      const match = lessonId.match(/^bd-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : brandyLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (brandyLearningState.userProgress[levelKey]) {
        brandyLearningState.userProgress[levelKey].completed = Math.min(
          brandyLearningState.userProgress[levelKey].completed + 1,
          brandyLearningState.userProgress[levelKey].total
        )
      }
      saveProgressToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    brandyLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    brandyLearningState.testMode = false
    brandyLearningState.completedLessons = []
    Object.keys(brandyLearningState.userProgress).forEach(key => {
      brandyLearningState.userProgress[key].completed = 0
    })
    saveProgressToStorage()
  }
}

// 計算屬性：整體進度
export const brandyLearningProgress = computed(() => {
  const levels = Object.values(brandyLearningState.userProgress)
  const totalCompleted = levels.reduce((sum, l) => sum + l.completed, 0)
  const totalLessons = levels.reduce((sum, l) => sum + l.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})
