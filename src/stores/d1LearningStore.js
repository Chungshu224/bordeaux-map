// 全球強化酒專論：學習進度（僅管理員；進度只存在本機 localStorage，依帳號區分）
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'
import { d1Levels, D1_LEVEL_KEYS, D1_TOTAL_LESSONS } from '../data/d1/lessons.js'

export { d1Levels }

export const d1LearningState = reactive({
  currentLevel: 1,
  currentLessonId: null,
  completedLessons: []
})

const storageKey = (userId) => `d1_progress_${userId || 'guest'}`

function save() {
  try {
    localStorage.setItem(storageKey(authState.user?.id), JSON.stringify({ completedLessons: d1LearningState.completedLessons }))
  } catch { /* 無痕模式等情況略過 */ }
}

export function d1ReloadFromStorage() {
  d1LearningState.completedLessons = []
  try {
    const raw = localStorage.getItem(storageKey(authState.user?.id))
    if (!raw) return
    const saved = JSON.parse(raw)
    const valid = new Set(D1_LEVEL_KEYS.flatMap(k => d1Levels[k].lessons.map(l => l.id)))
    d1LearningState.completedLessons = (saved.completedLessons || []).filter(id => valid.has(id))
  } catch { /* 損毀的資料忽略 */ }
}
d1ReloadFromStorage()

// 登入／切換帳號時重新載入該帳號自己的進度
watch(() => authState.user?.id, (id, prev) => { if (id !== prev) d1ReloadFromStorage() })

export const d1LevelIds = (n) => (d1Levels[`level${n}`]?.lessons || []).map(l => l.id)

export const d1LearningActions = {
  setLevel(n) { d1LearningState.currentLevel = n; d1LearningState.currentLessonId = null },
  startLesson(id) { d1LearningState.currentLessonId = id },
  exitLesson() { d1LearningState.currentLessonId = null },
  completeLesson(id) {
    if (!d1LearningState.completedLessons.includes(id)) {
      d1LearningState.completedLessons.push(id)
      save()
    }
  },
  uncompleteLesson(id) {
    d1LearningState.completedLessons = d1LearningState.completedLessons.filter(x => x !== id)
    save()
  },
  reset() { d1LearningState.completedLessons = []; save() }
}

export const d1LearningProgress = computed(() =>
  D1_TOTAL_LESSONS ? Math.round((d1LearningState.completedLessons.length / D1_TOTAL_LESSONS) * 100) : 0
)
