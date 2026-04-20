// 統一成就系統組合式函數
// 支援 courseKey: 'bordeaux' | 'bourgogne' | 'italy'
import { computed } from 'vue'
import {
  achievementState,
  achievementDefinitions,
  globalAchievementManager
} from '../stores/achievementSystem.js'
import {
  burgAchievementState,
  burgAchievementDefinitions,
  globalBurgAchievementManager
} from '../stores/bourgogneAchievementSystem.js'
import {
  italyAchievementState,
  italyAchievementDefinitions,
  globalItalyAchievementManager
} from '../stores/italyAchievementSystem.js'

// ── 課程標籤 ──────────────────────────────────────────────────
const COURSE_LABELS = {
  bordeaux:  '侍酒師的筆記本',
  bourgogne: '侍酒師的筆記本',
  italy:     '侍酒師的筆記本'
}

// ── 各課程分類定義 ────────────────────────────────────────────
const COURSE_CATEGORIES = {
  bordeaux: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'milestone',  name: '里程碑',   icon: '🏁' },
    { id: 'exploration',name: '地圖探索', icon: '🗺️' },
    { id: 'quiz',       name: '測驗挑戰', icon: '🎯' },
    { id: 'knowledge',  name: '知識掌握', icon: '🧠' },
    { id: 'time',       name: '時間特殊', icon: '⏰' },
    { id: 'special',    name: '特殊成就', icon: '⭐' },
    { id: 'tasting',    name: '品飲筆記', icon: '📔' }
  ],
  bourgogne: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'game',       name: '遊戲挑戰', icon: '🎮' },
    { id: 'exploration',name: '地圖探索', icon: '🗺️' },
    { id: 'time',       name: '時間特殊', icon: '⏰' },
    { id: 'special',    name: '特殊成就', icon: '⭐' }
  ],
  italy: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'exploration',name: '地圖探索', icon: '🗺️' },
    { id: 'quiz',       name: '測驗挑戰', icon: '🎯' },
    { id: 'time',       name: '時間特殊', icon: '⏰' },
    { id: 'special',    name: '特殊成就', icon: '⭐' }
  ]
}

// 波爾多等級圖示補充（原始 manager 沒有 icon 欄位）
const BORDEAUX_LEVEL_ICONS = {
  1: '🌱', 2: '📚', 3: '📖', 4: '🎓', 5: '🏅',
  6: '🥂', 7: '🏆', 8: '🌟', 9: '💎', 10: '👑'
}

// ── 進度計算輔助 ──────────────────────────────────────────────
function calcProgress(achievement, stats) {
  const cStr = achievement.condition.toString()
  // 跳過含陣列 every/includes 的複合條件
  if (cStr.includes('.every(') || cStr.includes('exploredRegionsList.includes')) return 0
  // 提取 stats.fieldName >= number 模式
  const m = cStr.match(/(?:stats|s)\.(\w+)\s*>=\s*(\d+)/)
  if (m) {
    const req = parseInt(m[2])
    const val = stats[m[1]] || 0
    return Math.min(Math.round((val / req) * 100), 99)
  }
  // 布林條件：嘗試直接求值
  try { return achievement.condition(stats) ? 100 : 0 } catch { return 0 }
}

// ── 主要 composable ───────────────────────────────────────────
export function useAchievements(courseKey) {
  let state, definitions, manager

  if (courseKey === 'bourgogne') {
    state       = burgAchievementState
    definitions = burgAchievementDefinitions
    manager     = globalBurgAchievementManager
  } else if (courseKey === 'italy') {
    state       = italyAchievementState
    definitions = italyAchievementDefinitions
    manager     = globalItalyAchievementManager
  } else {
    // default: bordeaux
    state       = achievementState
    definitions = achievementDefinitions
    manager     = globalAchievementManager
  }

  // ── 正規化 computeds ──────────────────────────────────
  const achievements = computed(() =>
    Object.values(definitions).map(a => ({
      ...a, unlocked: state.unlockedAchievements.includes(a.id)
    }))
  )

  const unlockedCount  = computed(() => state.unlockedAchievements.length)
  const totalCount     = computed(() => Object.keys(definitions).length)
  const totalPoints    = computed(() => state.totalPoints)
  const completionPct  = computed(() =>
    totalCount.value ? Math.round((unlockedCount.value / totalCount.value) * 100) : 0
  )

  const rarityStats = computed(() => {
    const res = {}
    Object.values(definitions).forEach(a => {
      if (!res[a.rarity]) res[a.rarity] = { total: 0, unlocked: 0 }
      res[a.rarity].total++
      if (state.unlockedAchievements.includes(a.id)) res[a.rarity].unlocked++
    })
    return res
  })

  const userLevel = computed(() => {
    const raw = manager.getUserLevel()
    // Bordeaux manager 的等級物件缺少 icon — 補充
    if (courseKey === 'bordeaux' && !raw.icon) {
      return { ...raw, icon: BORDEAUX_LEVEL_ICONS[raw.level] || '🎓' }
    }
    return raw
  })

  const levelRarity = computed(() => {
    const lv = userLevel.value.level
    if (lv <= 2) return 'common'
    if (lv <= 3) return 'uncommon'
    if (lv <= 5) return 'rare'
    if (lv <= 6) return 'epic'
    return 'legendary'
  })

  // 即將達成的成就（進度 > 0，且尚未解鎖，取 top 3）
  const nearAchs = computed(() =>
    achievements.value
      .filter(a => !a.unlocked)
      .map(a => ({ ...a, progress: calcProgress(a, state.userStats) }))
      .filter(a => a.progress > 0)
      .sort((a, b) => b.progress - a.progress)
      .slice(0, 3)
  )

  // 新解鎖佇列（跨系統正規化：Bordeaux 使用 newAchievements ID 陣列）
  const newUnlocks = computed(() => {
    if (courseKey === 'bordeaux') {
      return (state.newAchievements || [])
        .map(id => definitions[id])
        .filter(Boolean)
    }
    return state.newUnlocks || []
  })

  const clearNewUnlocks = () => {
    if (courseKey === 'bordeaux') {
      state.newAchievements = []
    } else {
      state.newUnlocks = []
    }
  }

  return {
    state,
    definitions,
    manager,
    courseLabel:  COURSE_LABELS[courseKey] || '侍酒師的筆記本',
    categories:   COURSE_CATEGORIES[courseKey] || COURSE_CATEGORIES.bordeaux,
    achievements,
    unlockedCount,
    totalCount,
    totalPoints,
    completionPct,
    rarityStats,
    userLevel,
    levelRarity,
    nearAchs,
    newUnlocks,
    clearNewUnlocks
  }
}
