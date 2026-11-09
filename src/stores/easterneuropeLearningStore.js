// 東歐與巴爾幹葡萄酒課程：學習進度（僅管理員；進度只存在本機 localStorage，依帳號區分）
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'
import { eeLevels, EE_LEVEL_KEYS, EE_TOTAL_LESSONS } from '../data/easterneurope/lessons.js'

export { eeLevels }

export const eeLearningState = reactive({
  currentLevel: 1,
  currentLessonId: null,
  completedLessons: []
})

const storageKey = (userId) => `ee_progress_${userId || 'guest'}`

function save() {
  try {
    localStorage.setItem(storageKey(authState.user?.id), JSON.stringify({ completedLessons: eeLearningState.completedLessons }))
  } catch { /* 無痕模式等情況略過 */ }
}

export function eeReloadFromStorage() {
  eeLearningState.completedLessons = []
  try {
    const raw = localStorage.getItem(storageKey(authState.user?.id))
    if (!raw) return
    const saved = JSON.parse(raw)
    const valid = new Set(EE_LEVEL_KEYS.flatMap(k => eeLevels[k].lessons.map(l => l.id)))
    eeLearningState.completedLessons = (saved.completedLessons || []).filter(id => valid.has(id))
  } catch { /* 損毀的資料忽略 */ }
}
eeReloadFromStorage()

// 登入／切換帳號時重新載入該帳號自己的進度
watch(() => authState.user?.id, (id, prev) => { if (id !== prev) eeReloadFromStorage() })

export const eeLevelIds = (n) => (eeLevels[`level${n}`]?.lessons || []).map(l => l.id)

export const eeLearningActions = {
  setLevel(n) { eeLearningState.currentLevel = n; eeLearningState.currentLessonId = null },
  startLesson(id) { eeLearningState.currentLessonId = id },
  exitLesson() { eeLearningState.currentLessonId = null },
  completeLesson(id) {
    if (!eeLearningState.completedLessons.includes(id)) {
      eeLearningState.completedLessons.push(id)
      save()
    }
  },
  uncompleteLesson(id) {
    eeLearningState.completedLessons = eeLearningState.completedLessons.filter(x => x !== id)
    save()
  },
  reset() { eeLearningState.completedLessons = []; save() }
}

export const eeLearningProgress = computed(() =>
  EE_TOTAL_LESSONS ? Math.round((eeLearningState.completedLessons.length / EE_TOTAL_LESSONS) * 100) : 0
)
