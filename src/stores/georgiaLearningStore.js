// 喬治亞葡萄酒課程：學習進度（僅管理員；進度只存在本機 localStorage，依帳號區分）
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'
import { geLevels, GE_LEVEL_KEYS, GE_TOTAL_LESSONS } from '../data/georgia/lessons.js'

export { geLevels }

export const geLearningState = reactive({
  currentLevel: 1,
  currentLessonId: null,
  completedLessons: []
})

const storageKey = (userId) => `ge_progress_${userId || 'guest'}`

function save() {
  try {
    localStorage.setItem(storageKey(authState.user?.id), JSON.stringify({ completedLessons: geLearningState.completedLessons }))
  } catch { /* 無痕模式等情況略過 */ }
}

export function geReloadFromStorage() {
  geLearningState.completedLessons = []
  try {
    const raw = localStorage.getItem(storageKey(authState.user?.id))
    if (!raw) return
    const saved = JSON.parse(raw)
    const valid = new Set(GE_LEVEL_KEYS.flatMap(k => geLevels[k].lessons.map(l => l.id)))
    geLearningState.completedLessons = (saved.completedLessons || []).filter(id => valid.has(id))
  } catch { /* 損毀的資料忽略 */ }
}
geReloadFromStorage()

// 登入／切換帳號時重新載入該帳號自己的進度
watch(() => authState.user?.id, (id, prev) => { if (id !== prev) geReloadFromStorage() })

export const geLevelIds = (n) => (geLevels[`level${n}`]?.lessons || []).map(l => l.id)

export const geLearningActions = {
  setLevel(n) { geLearningState.currentLevel = n; geLearningState.currentLessonId = null },
  startLesson(id) { geLearningState.currentLessonId = id },
  exitLesson() { geLearningState.currentLessonId = null },
  completeLesson(id) {
    if (!geLearningState.completedLessons.includes(id)) {
      geLearningState.completedLessons.push(id)
      save()
    }
  },
  uncompleteLesson(id) {
    geLearningState.completedLessons = geLearningState.completedLessons.filter(x => x !== id)
    save()
  },
  reset() { geLearningState.completedLessons = []; save() }
}

export const geLearningProgress = computed(() =>
  GE_TOTAL_LESSONS ? Math.round((geLearningState.completedLessons.length / GE_TOTAL_LESSONS) * 100) : 0
)
