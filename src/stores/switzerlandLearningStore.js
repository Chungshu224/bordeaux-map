// 瑞士葡萄酒課程：學習進度（僅管理員；進度只存在本機 localStorage，依帳號區分）
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'
import { swiLevels, SWI_LEVEL_KEYS, SWI_TOTAL_LESSONS } from '../data/switzerland/lessons.js'

export { swiLevels }

export const swiLearningState = reactive({
  currentLevel: 1,
  currentLessonId: null,
  completedLessons: []
})

const storageKey = (userId) => `swi_progress_${userId || 'guest'}`

function save() {
  try {
    localStorage.setItem(storageKey(authState.user?.id), JSON.stringify({ completedLessons: swiLearningState.completedLessons }))
  } catch { /* 無痕模式等情況略過 */ }
}

export function swiReloadFromStorage() {
  swiLearningState.completedLessons = []
  try {
    const raw = localStorage.getItem(storageKey(authState.user?.id))
    if (!raw) return
    const saved = JSON.parse(raw)
    const valid = new Set(SWI_LEVEL_KEYS.flatMap(k => swiLevels[k].lessons.map(l => l.id)))
    swiLearningState.completedLessons = (saved.completedLessons || []).filter(id => valid.has(id))
  } catch { /* 損毀的資料忽略 */ }
}
swiReloadFromStorage()

// 登入／切換帳號時重新載入該帳號自己的進度
watch(() => authState.user?.id, (id, prev) => { if (id !== prev) swiReloadFromStorage() })

export const swiLevelIds = (n) => (swiLevels[`level${n}`]?.lessons || []).map(l => l.id)

export const swiLearningActions = {
  setLevel(n) { swiLearningState.currentLevel = n; swiLearningState.currentLessonId = null },
  startLesson(id) { swiLearningState.currentLessonId = id },
  exitLesson() { swiLearningState.currentLessonId = null },
  completeLesson(id) {
    if (!swiLearningState.completedLessons.includes(id)) {
      swiLearningState.completedLessons.push(id)
      save()
    }
  },
  uncompleteLesson(id) {
    swiLearningState.completedLessons = swiLearningState.completedLessons.filter(x => x !== id)
    save()
  },
  reset() { swiLearningState.completedLessons = []; save() }
}

export const swiLearningProgress = computed(() =>
  SWI_TOTAL_LESSONS ? Math.round((swiLearningState.completedLessons.length / SWI_TOTAL_LESSONS) * 100) : 0
)
