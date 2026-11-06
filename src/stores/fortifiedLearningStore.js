// 全球強化酒專論：學習進度（僅管理員；進度只存在本機 localStorage，依帳號區分）
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'
import { fortifiedLevels, FORTIFIED_LEVEL_KEYS, FORTIFIED_TOTAL_LESSONS } from '../data/fortified/lessons.js'

export { fortifiedLevels }

export const fortifiedLearningState = reactive({
  currentLevel: 1,
  currentLessonId: null,
  completedLessons: []
})

const storageKey = (userId) => `fortified_progress_${userId || 'guest'}`

function save() {
  try {
    localStorage.setItem(storageKey(authState.user?.id), JSON.stringify({ completedLessons: fortifiedLearningState.completedLessons }))
  } catch { /* 無痕模式等情況略過 */ }
}

export function fortifiedReloadFromStorage() {
  fortifiedLearningState.completedLessons = []
  try {
    const raw = localStorage.getItem(storageKey(authState.user?.id))
    if (!raw) return
    const saved = JSON.parse(raw)
    const valid = new Set(FORTIFIED_LEVEL_KEYS.flatMap(k => fortifiedLevels[k].lessons.map(l => l.id)))
    fortifiedLearningState.completedLessons = (saved.completedLessons || []).filter(id => valid.has(id))
  } catch { /* 損毀的資料忽略 */ }
}
fortifiedReloadFromStorage()

// 登入／切換帳號時重新載入該帳號自己的進度
watch(() => authState.user?.id, (id, prev) => { if (id !== prev) fortifiedReloadFromStorage() })

export const fortifiedLevelIds = (n) => (fortifiedLevels[`level${n}`]?.lessons || []).map(l => l.id)

export const fortifiedLearningActions = {
  setLevel(n) { fortifiedLearningState.currentLevel = n; fortifiedLearningState.currentLessonId = null },
  startLesson(id) { fortifiedLearningState.currentLessonId = id },
  exitLesson() { fortifiedLearningState.currentLessonId = null },
  completeLesson(id) {
    if (!fortifiedLearningState.completedLessons.includes(id)) {
      fortifiedLearningState.completedLessons.push(id)
      save()
    }
  },
  uncompleteLesson(id) {
    fortifiedLearningState.completedLessons = fortifiedLearningState.completedLessons.filter(x => x !== id)
    save()
  },
  reset() { fortifiedLearningState.completedLessons = []; save() }
}

export const fortifiedLearningProgress = computed(() =>
  FORTIFIED_TOTAL_LESSONS ? Math.round((fortifiedLearningState.completedLessons.length / FORTIFIED_TOTAL_LESSONS) * 100) : 0
)
