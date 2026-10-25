// 香檳（Champagne）學習系統狀態管理
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// 香檳學習進度狀態
export const champagneLearningState = reactive({
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

// 香檳學習等級配置（框架版：課程內容待補；大綱以 CHAMPAGNE_COURSE_FRAMEWORK.md 第 2 節為準）
export const champagneLearningLevels = {
  "level1": {
    "title": "Level 1 - 香檳入門",
    "description": "建立香檳基礎：歷史、地理與白堊土壤、三大品種、傳統法釀造與酒款風格",
    "color": "#A8801C",
    "modules": [
      {
        "id": "CH1M1",
        "title": "歷史、地理與風土",
        "lessonIds": [
          "ch-l1-1",
          "ch-l1-2"
        ]
      },
      {
        "id": "CH1M2",
        "title": "葡萄與釀造",
        "lessonIds": [
          "ch-l1-3",
          "ch-l1-4"
        ]
      },
      {
        "id": "CH1M3",
        "title": "風格與評量",
        "lessonIds": [
          "ch-l1-5",
          "ch-l1-6"
        ]
      }
    ],
    "lessons": [
      {
        "id": "ch-l1-1",
        "title": "認識香檳",
        "description": "歷史脈絡、Dom Pérignon 迷思與事實、UNESCO 世界遺產與香檳的地位",
        "duration": 15
      },
      {
        "id": "ch-l1-2",
        "title": "地理、氣候與白堊土壤",
        "description": "位置、北方邊緣氣候、白堊土壤與四大產區概述",
        "duration": 16
      },
      {
        "id": "ch-l1-3",
        "title": "葡萄品種",
        "description": "Pinot Noir、Meunier、Chardonnay 與其他准許品種的角色",
        "duration": 16
      },
      {
        "id": "ch-l1-4",
        "title": "香檳如何釀成：傳統法概論",
        "description": "傳統法的步驟總覽，以及與其他氣泡酒釀法的差別",
        "duration": 18
      },
      {
        "id": "ch-l1-5",
        "title": "酒款風格、甜度與標籤",
        "description": "NV、Vintage、Blanc de Blancs、Rosé、Prestige Cuvée，甜度等級與標籤基礎",
        "duration": 18
      },
      {
        "id": "ch-l1-6",
        "title": "Level 1 綜合評量",
        "description": "以綜合測驗檢視 Level 1 的學習成果",
        "duration": 25
      }
    ]
  },
  "level2": {
    "title": "Level 2 - 香檳產區與法規",
    "description": "AOC 法規與 Échelle des Crus、四大產區、完整釀造流程與生產者結構",
    "color": "#8F6A12",
    "modules": [
      {
        "id": "CH2M1",
        "title": "法規與分級",
        "lessonIds": [
          "ch-l2-1"
        ]
      },
      {
        "id": "CH2M2",
        "title": "四大產區",
        "lessonIds": [
          "ch-l2-2",
          "ch-l2-3",
          "ch-l2-4"
        ]
      },
      {
        "id": "CH2M3",
        "title": "釀造與生產者",
        "lessonIds": [
          "ch-l2-5",
          "ch-l2-6",
          "ch-l2-7"
        ]
      },
      {
        "id": "CH2M4",
        "title": "評量",
        "lessonIds": [
          "ch-l2-8"
        ]
      }
    ],
    "lessons": [
      {
        "id": "ch-l2-1",
        "title": "AOC 法規與 Échelle des Crus",
        "description": "允許品種、產量上限、壓榨與陳年規定，以及村莊分級量表的歷史與現況",
        "duration": 20
      },
      {
        "id": "ch-l2-2",
        "title": "漢斯山（Montagne de Reims）",
        "description": "以 Pinot Noir 為主的產區、Grand Cru 村莊與北坡 Chardonnay",
        "duration": 20
      },
      {
        "id": "ch-l2-3",
        "title": "馬恩河谷與白丘",
        "description": "Meunier 的河谷與 Chardonnay 的白丘，兩處的 Grand Cru 與風格",
        "duration": 22
      },
      {
        "id": "ch-l2-4",
        "title": "巴爾丘與外圍產區",
        "description": "Aube 的 Pinot Noir、基末里階土壤，以及 Sézanne 等外圍產區與 Rosé des Riceys",
        "duration": 20
      },
      {
        "id": "ch-l2-5",
        "title": "釀造 I：壓榨、一次發酵與調配",
        "description": "採收、壓榨、基酒發酵、調配與儲備酒",
        "duration": 22
      },
      {
        "id": "ch-l2-6",
        "title": "釀造 II：二次發酵、陳年與除渣",
        "description": "tirage、酒渣陳年與自溶、轉瓶、除渣與 dosage",
        "duration": 22
      },
      {
        "id": "ch-l2-7",
        "title": "酒款類型、生產者結構與靜態酒",
        "description": "Prestige、Vintage、Rosé 作法，NM／RM／CM 結構，以及 Coteaux Champenois",
        "duration": 20
      },
      {
        "id": "ch-l2-8",
        "title": "Level 2 綜合評量",
        "description": "重點回顧與綜合測驗",
        "duration": 30
      }
    ]
  },
  "level3": {
    "title": "Level 3 - 香檳 Diploma／MW 精修",
    "description": "以 WSET Diploma（D3、D5）與 MW 為目標：栽培與氣候變遷、風格深度、比較、法規、產業與論述",
    "color": "#6B500F",
    "modules": [
      {
        "id": "CH3M1",
        "title": "栽培與釀造",
        "lessonIds": [
          "ch-l3-1",
          "ch-l3-2"
        ]
      },
      {
        "id": "CH3M2",
        "title": "風土、比較與法規",
        "lessonIds": [
          "ch-l3-3",
          "ch-l3-4"
        ]
      },
      {
        "id": "CH3M3",
        "title": "產業、應考與評量",
        "lessonIds": [
          "ch-l3-5",
          "ch-l3-6",
          "ch-l3-7"
        ]
      }
    ],
    "lessons": [
      {
        "id": "ch-l3-1",
        "title": "葡萄栽培深度與氣候變遷",
        "description": "修剪制度、種植密度、風險、採收提早與可持續栽培",
        "duration": 22
      },
      {
        "id": "ch-l3-2",
        "title": "釀造風格深度：氧化 vs 還原、陳年與 dosage",
        "description": "桶發酵、MLF、儲備酒、酒渣陳年與 dosage 對風格的影響",
        "duration": 24
      },
      {
        "id": "ch-l3-3",
        "title": "風土與風格比較，含其他氣泡酒",
        "description": "四大產區與主要村莊比較，並對照 Cava、Franciacorta、英國氣泡酒與 Crémant",
        "duration": 24
      },
      {
        "id": "ch-l3-4",
        "title": "法規深度與標籤判讀",
        "description": "標籤代碼、甜度用語、Vintage 與 Prestige 用語，以及名稱保護",
        "duration": 22
      },
      {
        "id": "ch-l3-5",
        "title": "產業、市場與貿易",
        "description": "出貨量、庫存、出口、集團結構與葡萄價格機制",
        "duration": 20
      },
      {
        "id": "ch-l3-6",
        "title": "Diploma 氣泡酒品飲與論述",
        "description": "SAT 風格的品飲筆記、盲品線索與 MW 風格論述範例",
        "duration": 25
      },
      {
        "id": "ch-l3-7",
        "title": "Level 3 綜合評量",
        "description": "以模擬題整合全部內容，完成 Level 3",
        "duration": 35
      }
    ]
  }
}

// ── localStorage 進度持久化（依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的進度）──
const CHAMPAGNE_PROGRESS_KEY = 'champagne-wine-academy-progress'

function progressStorageKey(userId) {
  return `${CHAMPAGNE_PROGRESS_KEY}:${userId}`
}

function saveProgressToStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    localStorage.setItem(progressStorageKey(userId), JSON.stringify({
      completedLessons: champagneLearningState.completedLessons,
      userProgress: champagneLearningState.userProgress
    }))
  } catch (e) { console.warn('[champagne-learn] save error', e) }
}

function loadProgressFromStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    const raw = localStorage.getItem(progressStorageKey(userId))
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.completedLessons)) {
      champagneLearningState.completedLessons = data.completedLessons
    }
    if (data.userProgress) {
      Object.keys(data.userProgress).forEach(key => {
        if (champagneLearningState.userProgress[key]) {
          champagneLearningState.userProgress[key].completed = data.userProgress[key].completed || 0
        }
      })
    }
  } catch (e) { console.warn('[champagne-learn] load error', e) }
}

// 供 ChampagneLearningSystem 在 Supabase 同步後呼叫，重新載入 store 狀態
export function champagneReloadFromStorage() {
  champagneLearningState.completedLessons = []
  Object.keys(champagneLearningState.userProgress).forEach(k => {
    champagneLearningState.userProgress[k].completed = 0
  })
  loadProgressFromStorage()
}

// 登入／切換帳號時重新載入該帳號自己的進度，避免殘留前一位使用者的資料
watch(() => authState.user?.id, (userId, prevUserId) => {
  if (userId !== prevUserId) champagneReloadFromStorage()
})

// 希臘學習操作
export const champagneLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = champagneLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    champagneLearningState.currentLevel = level
    champagneLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = champagneLearningLevels[`level${champagneLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      champagneLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    champagneLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!champagneLearningState.completedLessons.includes(lessonId)) {
      champagneLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 ch-l1-3 → level1, ch-l2-1 → level2）
      const match = lessonId.match(/^ch-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : champagneLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (champagneLearningState.userProgress[levelKey]) {
        champagneLearningState.userProgress[levelKey].completed = Math.min(
          champagneLearningState.userProgress[levelKey].completed + 1,
          champagneLearningState.userProgress[levelKey].total
        )
      }
      saveProgressToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    champagneLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    champagneLearningState.testMode = false
    champagneLearningState.completedLessons = []
    Object.keys(champagneLearningState.userProgress).forEach(key => {
      champagneLearningState.userProgress[key].completed = 0
    })
    saveProgressToStorage()
  }
}

// 計算屬性：整體進度
export const champagneLearningProgress = computed(() => {
  const levels = Object.values(champagneLearningState.userProgress)
  const totalCompleted = levels.reduce((sum, l) => sum + l.completed, 0)
  const totalLessons = levels.reduce((sum, l) => sum + l.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})
