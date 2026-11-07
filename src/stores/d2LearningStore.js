// 葡萄酒商業（D2）專論：學習進度（僅管理員；進度只存在本機 localStorage，依帳號區分）
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'
import { d2Levels, D2_LEVEL_KEYS, D2_TOTAL_LESSONS } from '../data/d2/lessons.js'

export { d2Levels }

export const d2LearningState = reactive({
  currentLevel: 1,
  currentLessonId: null,
  completedLessons: []
})

const storageKey = (userId) => `d2_progress_${userId || 'guest'}`

function save() {
  try {
    localStorage.setItem(storageKey(authState.user?.id), JSON.stringify({ completedLessons: d2LearningState.completedLessons }))
  } catch { /* 無痕模式等情況略過 */ }
}

export function d2ReloadFromStorage() {
  d2LearningState.completedLessons = []
  try {
    const raw = localStorage.getItem(storageKey(authState.user?.id))
    if (!raw) return
    const saved = JSON.parse(raw)
    const valid = new Set(D2_LEVEL_KEYS.flatMap(k => d2Levels[k].lessons.map(l => l.id)))
    d2LearningState.completedLessons = (saved.completedLessons || []).filter(id => valid.has(id))
  } catch { /* 損毀的資料忽略 */ }
}
d2ReloadFromStorage()

// 登入／切換帳號時重新載入該帳號自己的進度
watch(() => authState.user?.id, (id, prev) => { if (id !== prev) d2ReloadFromStorage() })

export const d2LevelIds = (n) => (d2Levels[`level${n}`]?.lessons || []).map(l => l.id)

export const d2LearningActions = {
  setLevel(n) { d2LearningState.currentLevel = n; d2LearningState.currentLessonId = null },
  startLesson(id) { d2LearningState.currentLessonId = id },
  exitLesson() { d2LearningState.currentLessonId = null },
  completeLesson(id) {
    if (!d2LearningState.completedLessons.includes(id)) {
      d2LearningState.completedLessons.push(id)
      save()
    }
  },
  uncompleteLesson(id) {
    d2LearningState.completedLessons = d2LearningState.completedLessons.filter(x => x !== id)
    save()
  },
  reset() { d2LearningState.completedLessons = []; save() }
}

export const d2LearningProgress = computed(() =>
  D2_TOTAL_LESSONS ? Math.round((d2LearningState.completedLessons.length / D2_TOTAL_LESSONS) * 100) : 0
)
