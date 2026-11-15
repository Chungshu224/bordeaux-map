// 土耳其葡萄酒課程：學習進度（僅管理員；進度只存在本機 localStorage，依帳號區分）
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'
import { trLevels, TR_LEVEL_KEYS, TR_TOTAL_LESSONS } from '../data/turkey/lessons.js'

export { trLevels }

export const trLearningState = reactive({
  currentLevel: 1,
  currentLessonId: null,
  completedLessons: []
})

const storageKey = (userId) => `tr_progress_${userId || 'guest'}`

function save() {
  try {
    localStorage.setItem(storageKey(authState.user?.id), JSON.stringify({ completedLessons: trLearningState.completedLessons }))
  } catch { /* 無痕模式等情況略過 */ }
}

export function eeReloadFromStorage() {
  trLearningState.completedLessons = []
  try {
    const raw = localStorage.getItem(storageKey(authState.user?.id))
    if (!raw) return
    const saved = JSON.parse(raw)
    const valid = new Set(TR_LEVEL_KEYS.flatMap(k => trLevels[k].lessons.map(l => l.id)))
    trLearningState.completedLessons = (saved.completedLessons || []).filter(id => valid.has(id))
  } catch { /* 損毀的資料忽略 */ }
}
eeReloadFromStorage()

// 登入／切換帳號時重新載入該帳號自己的進度
watch(() => authState.user?.id, (id, prev) => { if (id !== prev) eeReloadFromStorage() })

export const trLevelIds = (n) => (trLevels[`level${n}`]?.lessons || []).map(l => l.id)

export const trLearningActions = {
  setLevel(n) { trLearningState.currentLevel = n; trLearningState.currentLessonId = null },
  startLesson(id) { trLearningState.currentLessonId = id },
  exitLesson() { trLearningState.currentLessonId = null },
  completeLesson(id) {
    if (!trLearningState.completedLessons.includes(id)) {
      trLearningState.completedLessons.push(id)
      save()
    }
  },
  uncompleteLesson(id) {
    trLearningState.completedLessons = trLearningState.completedLessons.filter(x => x !== id)
    save()
  },
  reset() { trLearningState.completedLessons = []; save() }
}

export const trLearningProgress = computed(() =>
  TR_TOTAL_LESSONS ? Math.round((trLearningState.completedLessons.length / TR_TOTAL_LESSONS) * 100) : 0
)
