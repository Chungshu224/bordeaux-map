// 全球氣泡酒專論：學習進度（僅管理員；進度只存在本機 localStorage，依帳號區分）
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'
import { sparklingLevels, SPARKLING_LEVEL_KEYS, SPARKLING_TOTAL_LESSONS } from '../data/sparkling/lessons.js'

export { sparklingLevels }

export const sparklingLearningState = reactive({
  currentLevel: 1,
  currentLessonId: null,
  completedLessons: []
})

const storageKey = (userId) => `sparkling_progress_${userId || 'guest'}`

function save() {
  try {
    localStorage.setItem(storageKey(authState.user?.id), JSON.stringify({ completedLessons: sparklingLearningState.completedLessons }))
  } catch { /* 無痕模式等情況略過 */ }
}

export function sparklingReloadFromStorage() {
  sparklingLearningState.completedLessons = []
  try {
    const raw = localStorage.getItem(storageKey(authState.user?.id))
    if (!raw) return
    const saved = JSON.parse(raw)
    const valid = new Set(SPARKLING_LEVEL_KEYS.flatMap(k => sparklingLevels[k].lessons.map(l => l.id)))
    sparklingLearningState.completedLessons = (saved.completedLessons || []).filter(id => valid.has(id))
  } catch { /* 損毀的資料忽略 */ }
}
sparklingReloadFromStorage()

// 登入／切換帳號時重新載入該帳號自己的進度
watch(() => authState.user?.id, (id, prev) => { if (id !== prev) sparklingReloadFromStorage() })

export const sparklingLevelIds = (n) => (sparklingLevels[`level${n}`]?.lessons || []).map(l => l.id)

export const sparklingLearningActions = {
  setLevel(n) { sparklingLearningState.currentLevel = n; sparklingLearningState.currentLessonId = null },
  startLesson(id) { sparklingLearningState.currentLessonId = id },
  exitLesson() { sparklingLearningState.currentLessonId = null },
  completeLesson(id) {
    if (!sparklingLearningState.completedLessons.includes(id)) {
      sparklingLearningState.completedLessons.push(id)
      save()
    }
  },
  uncompleteLesson(id) {
    sparklingLearningState.completedLessons = sparklingLearningState.completedLessons.filter(x => x !== id)
    save()
  },
  reset() { sparklingLearningState.completedLessons = []; save() }
}

export const sparklingLearningProgress = computed(() =>
  SPARKLING_TOTAL_LESSONS ? Math.round((sparklingLearningState.completedLessons.length / SPARKLING_TOTAL_LESSONS) * 100) : 0
)
