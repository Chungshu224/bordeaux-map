/**
 * 統一學習進度 Composable
 * 支援 courseKey: 'bordeaux' | 'bourgogne' | 'italy' | 'spain'
 * 返回: topStats, miniStats, levelProg, weeklyTrend, hasWeeklyTrend
 */
import { computed } from 'vue'
import { progressComputed } from '../stores/progressTracker.js'
import { learningState } from '../stores/learningStore.js'
import { useProgress as useBurgProgress } from './bourgogne/useProgress.js'
import { getLevelProgressPct } from '../components/italy/data/courseLevels.js'
import { getLevelProgressPercent as getSpainLevelPct } from '../components/spain/data/courseLevels.js'
import { getLevelProgressPct as getGermanyLevelProgressPct } from '../components/germany/data/courseLevels.js'

// ── 靜態階段定義 ──────────────────────────────────────────────────────────

const BORDEAUX_LEVELS = [
  { id: 1, name: '入門基礎', icon: '🌱' },
  { id: 2, name: '中級進階', icon: '🌿' },
  { id: 3, name: '高級專業', icon: '🌳' },
  { id: 4, name: '精英大師', icon: '🏆' }
]

const BOURGOGNE_LEVELS = [
  { id: 1, name: '基礎入門', icon: '🍇' },
  { id: 2, name: '中級進階', icon: '🍷' },
  { id: 3, name: '高級專業', icon: '🏆' },
  { id: 4, name: '專家認證', icon: '👨‍🏫' }
]

const ITALY_LEVELS = [
  { key: 'level1', name: '義大利入門', icon: '🌱', totalLessons: 12 },
  { key: 'level2', name: '進階探索',   icon: '🍷', totalLessons: 23 },
  { key: 'level3', name: '專家認證',   icon: '🏆', totalLessons: 26 }
]

const GERMANY_LEVELS = [
  { key: 'level1', name: '德國葡萄酒入門', icon: '🌱', totalLessons: 11 },
  { key: 'level2', name: '產區深度探索',   icon: '🍷', totalLessons: 17 },
  { key: 'level3', name: '品飲鑑賞',       icon: '🏆', totalLessons: 9 }
]

const SPAIN_LEVELS = [
  { key: 'level1', name: '西班牙入門', icon: '🌱' },
  { key: 'level2', name: '產區深度探索', icon: '🍷' },
  { key: 'level3', name: '釀造工藝與特殊酒款', icon: '🏺' },
  { key: 'level4', name: '大師品鑑', icon: '👑' }
]

// ── 工具函式 ─────────────────────────────────────────────────────────────

function formatMinutes (totalMinutes) {
  if (totalMinutes === 0) return '0 分鐘'
  const h = Math.floor(totalMinutes / 60)
  const m = totalMinutes % 60
  if (h > 0 && m > 0) return `${h} 小時 ${m} 分鐘`
  if (h > 0) return `${h} 小時`
  return `${totalMinutes} 分鐘`
}

// ── 主 Composable ─────────────────────────────────────────────────────────

export function useLearningProgress (courseKey) {

  // ===== 波爾多 =====
  if (courseKey === 'bordeaux') {
    const overall = progressComputed.overallStats
    const weeklyTrend = progressComputed.weeklyTrend

    const topStats = computed(() => {
      const s = overall.value
      const pct = s.totalLessons > 0
        ? Math.round(s.completedLessons / s.totalLessons * 100)
        : 0
      return [
        { icon: '🌟', value: `${pct}%`,              label: '總體進度',   colorClass: 'col-overall' },
        { icon: '📚', value: `${s.completedLessons}`, label: '完成課程',   colorClass: 'col-lessons' },
        { icon: '⏱️', value: s.totalStudyTime,        label: '累計時長',   colorClass: 'col-time'    },
        { icon: '🎯', value: `${s.quizAccuracy}%`,    label: '測驗正確率', colorClass: 'col-quiz'    }
      ]
    })

    const miniStats = computed(() => {
      const s = overall.value
      return [
        { icon: '📚', value: s.completedLessons,       label: '已完成'   },
        { icon: '⏱️', value: s.totalStudyTime,          label: '學習時長' },
        { icon: '🎯', value: `${s.quizAccuracy}%`,      label: '正確率'   },
        { icon: '🔥', value: s.studyStreak,             label: '連續天數' }
      ]
    })

    const levelProg = computed(() => {
      return BORDEAUX_LEVELS.map(lv => {
        const p = learningState.userProgress[`level${lv.id}`]
        const pct = p && p.total > 0 ? Math.round(p.completed / p.total * 100) : 0
        return { id: `bx-${lv.id}`, name: `Level ${lv.id} · ${lv.name}`, icon: lv.icon, progress: pct }
      })
    })

    return { topStats, miniStats, levelProg, weeklyTrend, hasWeeklyTrend: true }
  }

  // ===== 布根地 =====
  if (courseKey === 'bourgogne') {
    const burgProgress = useBurgProgress()

    /** 計算各模組層級的累積統計 */
    const _stats = () => {
      let completedCount = 0
      let totalMinutes = 0
      let totalScore = 0
      let scoreCount = 0
      for (let levelId = 1; levelId <= 4; levelId++) {
        const lp = burgProgress.getLevelProgress(levelId)
        for (const [moduleId, md] of Object.entries(lp)) {
          if (md.completed) completedCount++
          totalMinutes += burgProgress.getLearningTime(moduleId)
          if (md.quizScore > 0) { totalScore += md.quizScore; scoreCount++ }
        }
      }
      return {
        completedCount,
        totalMinutes,
        quizAccuracy: scoreCount > 0 ? Math.round(totalScore / scoreCount) : 0
      }
    }

    /** 讀取 burgundy-course-progress localStorage */
    const _levelSaved = () =>
      JSON.parse(localStorage.getItem('burgundy-course-progress') || '{}')

    const topStats = computed(() => {
      const { completedCount, totalMinutes, quizAccuracy } = _stats()
      const saved = _levelSaved()
      const vals = Object.values(saved)
      const completedLevels = vals.filter(p => p.completed).length
      const totalProgress = vals.length > 0
        ? Math.round(vals.reduce((s, p) => s + (p.progress || 0), 0) / 4)
        : 0
      return [
        { icon: '🌟', value: `${totalProgress}%`,       label: '總體進度',   colorClass: 'col-overall' },
        { icon: '✅', value: `${completedLevels}/4`,     label: '完成階段',   colorClass: 'col-levels'  },
        { icon: '⏱️', value: formatMinutes(totalMinutes), label: '累計時長',  colorClass: 'col-time'    },
        { icon: '🎯', value: `${quizAccuracy}%`,         label: '測驗正確率', colorClass: 'col-quiz'    }
      ]
    })

    const miniStats = computed(() => {
      const { completedCount, totalMinutes, quizAccuracy } = _stats()
      return [
        { icon: '📚', value: completedCount,             label: '已完成'   },
        { icon: '⏱️', value: formatMinutes(totalMinutes), label: '學習時長' },
        { icon: '🎯', value: `${quizAccuracy}%`,          label: '正確率'   },
        { icon: '🔥', value: 0,                           label: '連續天數' }
      ]
    })

    const levelProg = computed(() => {
      const saved = _levelSaved()
      return BOURGOGNE_LEVELS.map(lv => {
        const prog = saved[lv.id]
        return {
          id:       `bg-${lv.id}`,
          name:     `Level ${lv.id} · ${lv.name}`,
          icon:     lv.icon,
          progress: prog?.progress || 0
        }
      })
    })

    return { topStats, miniStats, levelProg, weeklyTrend: null, hasWeeklyTrend: false }
  }

  // ===== 義大利 =====
  if (courseKey === 'italy') {
    const topStats = computed(() => {
      let completed = 0
      let total = 0
      ITALY_LEVELS.forEach(lv => {
        total += lv.totalLessons
        completed += Math.round(lv.totalLessons * getLevelProgressPct(lv.key) / 100)
      })
      const pct = total > 0 ? Math.round(completed / total * 100) : 0
      return [
        { icon: '🌟', value: `${pct}%`,        label: '總體進度',   colorClass: 'col-overall' },
        { icon: '📚', value: `${completed}`,   label: '完成課程',   colorClass: 'col-lessons' },
        { icon: '⏱️', value: '--',             label: '累計時長',   colorClass: 'col-time'    },
        { icon: '🎯', value: '--',             label: '測驗正確率', colorClass: 'col-quiz'    }
      ]
    })

    const miniStats = computed(() => {
      let completed = 0
      let total = 0
      ITALY_LEVELS.forEach(lv => {
        total += lv.totalLessons
        completed += Math.round(lv.totalLessons * getLevelProgressPct(lv.key) / 100)
      })
      const overall = total > 0 ? Math.round(completed / total * 100) : 0
      return [
        { icon: '📚', value: completed,        label: '已完成'   },
        { icon: '🎯', value: total,            label: '全部課程' },
        { icon: '🌟', value: `${overall}%`,    label: '總體進度' },
        { icon: '🔥', value: 0,               label: '連續天數' }
      ]
    })

    const levelProg = computed(() => {
      return ITALY_LEVELS.map(lv => ({
        id:       lv.key,
        name:     lv.name,
        icon:     lv.icon,
        progress: getLevelProgressPct(lv.key)
      }))
    })

    return { topStats, miniStats, levelProg, weeklyTrend: null, hasWeeklyTrend: false }
  }

  // ===== 德國 =====
  if (courseKey === 'germany') {
    const topStats = computed(() => {
      let completed = 0
      let total = 0
      GERMANY_LEVELS.forEach(lv => {
        total += lv.totalLessons
        completed += Math.round(lv.totalLessons * getGermanyLevelProgressPct(lv.key) / 100)
      })
      const pct = total > 0 ? Math.round(completed / total * 100) : 0
      return [
        { icon: '🌟', value: `${pct}%`,        label: '總體進度',   colorClass: 'col-overall' },
        { icon: '📚', value: `${completed}`,   label: '完成課程',   colorClass: 'col-lessons' },
        { icon: '⏱️', value: '--',             label: '累計時長',   colorClass: 'col-time'    },
        { icon: '🎯', value: '--',             label: '測驗正確率', colorClass: 'col-quiz'    }
      ]
    })

    const miniStats = computed(() => {
      let completed = 0
      let total = 0
      GERMANY_LEVELS.forEach(lv => {
        total += lv.totalLessons
        completed += Math.round(lv.totalLessons * getGermanyLevelProgressPct(lv.key) / 100)
      })
      const overall = total > 0 ? Math.round(completed / total * 100) : 0
      return [
        { icon: '📚', value: completed,        label: '已完成'   },
        { icon: '🎯', value: total,            label: '全部課程' },
        { icon: '🌟', value: `${overall}%`,    label: '總體進度' },
        { icon: '🔥', value: 0,               label: '連續天數' }
      ]
    })

    const levelProg = computed(() => {
      return GERMANY_LEVELS.map(lv => ({
        id:       lv.key,
        name:     lv.name,
        icon:     lv.icon,
        progress: getGermanyLevelProgressPct(lv.key)
      }))
    })

    return { topStats, miniStats, levelProg, weeklyTrend: null, hasWeeklyTrend: false }
  }

  // ===== 西班牙 =====
  if (courseKey === 'spain') {
    const topStats = computed(() => {
      const progs = SPAIN_LEVELS.map(lv => getSpainLevelPct(lv.key))
      const overall = Math.round(progs.reduce((s, p) => s + p, 0) / progs.length)
      // 估算已完成課程數（各級進度 × 各級比重）
      const completed = Math.round(progs.reduce((s, p) => s + p, 0) / 100)
      return [
        { icon: '🌟', value: `${overall}%`, label: '總體進度',   colorClass: 'col-overall' },
        { icon: '📚', value: `${progs.filter(p => p > 0).length}/${SPAIN_LEVELS.length}`, label: '進行中階段', colorClass: 'col-lessons' },
        { icon: '⏱️', value: '--',          label: '累計時長',   colorClass: 'col-time'    },
        { icon: '🎯', value: '--',          label: '測驗正確率', colorClass: 'col-quiz'    }
      ]
    })

    const miniStats = computed(() => {
      const progs = SPAIN_LEVELS.map(lv => getSpainLevelPct(lv.key))
      const overall = Math.round(progs.reduce((s, p) => s + p, 0) / progs.length)
      const doneLevels = progs.filter(p => p === 100).length
      return [
        { icon: '📚', value: doneLevels,       label: '已完成階段' },
        { icon: '🎯', value: SPAIN_LEVELS.length, label: '全部階段' },
        { icon: '🌟', value: `${overall}%`,    label: '總體進度' },
        { icon: '🔥', value: 0,               label: '連續天數' }
      ]
    })

    const levelProg = computed(() =>
      SPAIN_LEVELS.map(lv => ({
        id:       lv.key,
        name:     lv.name,
        icon:     lv.icon,
        progress: getSpainLevelPct(lv.key)
      }))
    )

    return { topStats, miniStats, levelProg, weeklyTrend: null, hasWeeklyTrend: false }
  }

  // 回退
  return {
    topStats:       computed(() => []),
    miniStats:      computed(() => []),
    levelProg:      computed(() => []),
    weeklyTrend:    null,
    hasWeeklyTrend: false
  }
}
