// 統一成就系統組合式函數
// 支援 courseKey: 'bordeaux' | 'bourgogne' | 'italy' | 'spain' | 'greece' | 'rhone' 等
import { computed } from 'vue'
import { gt as greeceGt } from '../locales/greeceUi/index.js'
import { gt as rhoneGt } from '../locales/rhoneUi/index.js'
import { gt as gtChampagne } from '../locales/champagneUi/index.js'
import { gt as gtAustria } from '../locales/austriaUi/index.js'
import { gt as gtSouthAfrica } from '../locales/southafricaUi/index.js'
import { gt as gtLanguedoc } from '../locales/languedocUi/index.js'
import { gt as gtChile } from '../locales/chileUi/index.js'
import { gt as gtUsOther } from '../locales/usotherUi/index.js'
import { gt as gtArgentina } from '../locales/argentinaUi/index.js'
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
import {
  spainAchievementState,
  spainAchievementDefinitions,
  globalSpainAchievementManager
} from '../stores/spainAchievementSystem.js'
import {
  germanyAchievementState,
  germanyAchievementDefinitions,
  globalGermanyAchievementManager
} from '../stores/germanyAchievementSystem.js'
import {
  nzAchievementState,
  nzAchievementDefinitions,
  globalNzAchievementManager
} from '../stores/nzAchievementSystem.js'
import {
  loireAchievementState,
  loireAchievementDefinitions,
  globalLoireAchievementManager
} from '../stores/loireAchievementSystem.js'
import {
  hungaryAchievementState,
  hungaryAchievementDefinitions,
  globalHungaryAchievementManager
} from '../stores/hungaryAchievementSystem.js'
import {
  australiaAchievementState,
  australiaAchievementDefinitions,
  globalAustraliaAchievementManager
} from '../stores/australiaAchievementSystem.js'
import {
  californiaAchievementState,
  californiaAchievementDefinitions,
  globalCaliforniaAchievementManager
} from '../stores/californiaAchievementSystem.js'
import {
  greeceAchievementState,
  greeceAchievementDefinitions,
  globalGreeceAchievementManager
} from '../stores/greeceAchievementSystem.js'
import {
  rhoneAchievementState,
  rhoneAchievementDefinitions,
  globalRhoneAchievementManager
} from '../stores/rhoneAchievementSystem.js'
import {
  alsaceAchievementState,
  alsaceAchievementDefinitions,
  globalAlsaceAchievementManager
} from '../stores/alsaceAchievementSystem.js'
import {
  champagneAchievementState,
  champagneAchievementDefinitions,
  globalChampagneAchievementManager
} from '../stores/champagneAchievementSystem.js'
import {
  austriaAchievementState,
  austriaAchievementDefinitions,
  globalAustriaAchievementManager
} from '../stores/austriaAchievementSystem.js'
import {
  southafricaAchievementState,
  southafricaAchievementDefinitions,
  globalSouthAfricaAchievementManager
} from '../stores/southafricaAchievementSystem.js'
import {
  languedocAchievementState,
  languedocAchievementDefinitions,
  globalLanguedocAchievementManager
} from '../stores/languedocAchievementSystem.js'
import {
  usotherAchievementState,
  usotherAchievementDefinitions,
  globalUsOtherAchievementManager
} from '../stores/usotherAchievementSystem.js'
import {
  argentinaAchievementState,
  argentinaAchievementDefinitions,
  globalArgentinaAchievementManager
} from '../stores/argentinaAchievementSystem.js'
import {
  chileAchievementState,
  chileAchievementDefinitions,
  globalChileAchievementManager
} from '../stores/chileAchievementSystem.js'

// ── 課程標籤 ──────────────────────────────────────────────────
const COURSE_LABELS = {
  bordeaux:    '侍酒師的筆記本',
  bourgogne:   '侍酒師的筆記本',
  italy:       '侍酒師的筆記本',
  germany:     '侍酒師的筆記本',
  spain:       '侍酒師的筆記本',
  newzealand:  '侍酒師的筆記本',
  california:  '侍酒師的筆記本',
  alsace:      '侍酒師的筆記本',
  greece:      '侍酒師的筆記本',
  rhone:       '侍酒師的筆記本',
  champagne:   '侍酒師的筆記本',
  austria:     '侍酒師的筆記本',
  southafrica: '侍酒師的筆記本',
  usother:     '侍酒師的筆記本',
  argentina: '侍酒師的筆記本',
  chile: '侍酒師的筆記本',
  languedoc: '侍酒師的筆記本'
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
  ],
  germany: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'exploration',name: '地圖探索', icon: '🗺️' },
    { id: 'quiz',       name: '測驗挑戰', icon: '🎯' },
    { id: 'time',       name: '時間特殊', icon: '⏰' },
    { id: 'special',    name: '特殊成就', icon: '⭐' }  ],
  spain: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'exploration',name: '地圖探索', icon: '🗺️' },
    { id: 'quiz',       name: '測驗挑戰', icon: '🎯' },
    { id: 'time',       name: '時間特殊', icon: '⏰' },
    { id: 'special',    name: '特殊成就', icon: '⭐' }  ],
  newzealand: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'exploration',name: '地圖探索', icon: '🗺️' },
    { id: 'quiz',       name: '測驗挑戰', icon: '🎯' },
    { id: 'time',       name: '時間特殊', icon: '⏰' },
    { id: 'special',    name: '特殊成就', icon: '⭐' }
  ],
  loire: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'exploration',name: '地圖探索', icon: '🗺️' },
    { id: 'quiz',       name: '測驗挑戰', icon: '🎯' },
    { id: 'time',       name: '時間特殊', icon: '⏰' },
    { id: 'special',    name: '特殊成就', icon: '⭐' }
  ],
  hungary: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'exploration',name: '地圖探索', icon: '🗺️' },
    { id: 'quiz',       name: '測驗挑戰', icon: '🎯' },
    { id: 'time',       name: '時間特殊', icon: '⏰' },
    { id: 'special',    name: '特殊成就', icon: '⭐' }
  ],
  australia: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'exploration',name: '地圖探索', icon: '🗺️' },
    { id: 'quiz',       name: '測驗挑戰', icon: '🎯' },
    { id: 'time',       name: '時間特殊', icon: '⏰' },
    { id: 'special',    name: '特殊成就', icon: '⭐' }
  ],
  california: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'exploration',name: '地圖探索', icon: '🗺️' },
    { id: 'quiz',       name: '測驗挑戰', icon: '🎯' },
    { id: 'time',       name: '時間特殊', icon: '⏰' },
    { id: 'special',    name: '特殊成就', icon: '⭐' }
  ],
  alsace: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'quiz',       name: '測驗挑戰', icon: '🎯' },
    { id: 'time',       name: '時間特殊', icon: '⏰' },
    { id: 'special',    name: '特殊成就', icon: '⭐' }
  ],
  greece: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'exploration',name: '地圖探索', icon: '🗺️' },
    { id: 'quiz',       name: '測驗與遊戲', icon: '🎯' },
    { id: 'time',       name: '時間特殊', icon: '⏰' },
    { id: 'special',    name: '特殊成就', icon: '⭐' }
  ],
  rhone: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'exploration',name: '地圖探索', icon: '🗺️' },
    { id: 'quiz',       name: '測驗與遊戲', icon: '🎯' },
    { id: 'time',       name: '時間特殊', icon: '⏰' },
    { id: 'special',    name: '特殊成就', icon: '⭐' }
  ],
  champagne: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'exploration',name: '地圖探索', icon: '🗺️' },
    { id: 'quiz',       name: '測驗與遊戲', icon: '🎯' },
    { id: 'time',       name: '時間特殊', icon: '⏰' },
    { id: 'special',    name: '特殊成就', icon: '⭐' }
  ],
  austria: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'exploration',name: '地圖探索', icon: '🗺️' },
    { id: 'quiz',       name: '測驗與遊戲', icon: '🎯' },
    { id: 'time',       name: '時間特殊', icon: '⏰' },
    { id: 'special',    name: '特殊成就', icon: '⭐' }
  ],
  argentina: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'exploration',name: '地圖探索', icon: '🗺️' },
    { id: 'quiz',       name: '測驗與遊戲', icon: '🎯' },
    { id: 'time',       name: '時間特殊', icon: '⏰' },
    { id: 'special',    name: '特殊成就', icon: '⭐' }
  ],
  chile: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'exploration',name: '地圖探索', icon: '🗺️' },
    { id: 'quiz',       name: '測驗與遊戲', icon: '🎯' },
    { id: 'time',       name: '時間特殊', icon: '⏰' },
    { id: 'special',    name: '特殊成就', icon: '⭐' }
  ],
  languedoc: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'exploration',name: '地圖探索', icon: '🗺️' },
    { id: 'quiz',       name: '測驗與遊戲', icon: '🎯' },
    { id: 'time',       name: '時間特殊', icon: '⏰' },
    { id: 'special',    name: '特殊成就', icon: '⭐' }
  ],
  southafrica: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'exploration',name: '地圖探索', icon: '🗺️' },
    { id: 'quiz',       name: '測驗與遊戲', icon: '🎯' },
    { id: 'time',       name: '時間特殊', icon: '⏰' },
    { id: 'special',    name: '特殊成就', icon: '⭐' }
  ],
  usother: [
    { id: 'all',         name: '全部',     icon: '🌟' },
    { id: 'progress',   name: '學習進度', icon: '📚' },
    { id: 'exploration',name: '地圖探索', icon: '🗺️' },
    { id: 'quiz',       name: '測驗與遊戲', icon: '🎯' },
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
  const gt = courseKey === 'rhone' ? rhoneGt : greeceGt
  // 香檳與奧地利共用「字典函式」判斷
  const isLocal = courseKey === 'champagne' || courseKey === 'austria' || courseKey === 'southafrica' || courseKey === 'usother' || courseKey === 'argentina' || courseKey === 'chile' || courseKey === 'languedoc'
  const gtX = courseKey === 'languedoc' ? gtLanguedoc : courseKey === 'chile' ? gtChile : courseKey === 'argentina' ? gtArgentina : courseKey === 'usother' ? gtUsOther : courseKey === 'southafrica' ? gtSouthAfrica : courseKey === 'austria' ? gtAustria : gtChampagne
  let state, definitions, manager

  if (courseKey === 'bourgogne') {
    state       = burgAchievementState
    definitions = burgAchievementDefinitions
    manager     = globalBurgAchievementManager
  } else if (courseKey === 'italy') {
    state       = italyAchievementState
    definitions = italyAchievementDefinitions
    manager     = globalItalyAchievementManager
  } else if (courseKey === 'germany') {
    state       = germanyAchievementState
    definitions = germanyAchievementDefinitions
    manager     = globalGermanyAchievementManager
  } else if (courseKey === 'spain') {
    state       = spainAchievementState
    definitions = spainAchievementDefinitions
    manager     = globalSpainAchievementManager
  } else if (courseKey === 'newzealand') {
    state       = nzAchievementState
    definitions = nzAchievementDefinitions
    manager     = globalNzAchievementManager
  } else if (courseKey === 'loire') {
    state       = loireAchievementState
    definitions = loireAchievementDefinitions
    manager     = globalLoireAchievementManager
  } else if (courseKey === 'hungary') {
    state       = hungaryAchievementState
    definitions = hungaryAchievementDefinitions
    manager     = globalHungaryAchievementManager
  } else if (courseKey === 'australia') {
    state       = australiaAchievementState
    definitions = australiaAchievementDefinitions
    manager     = globalAustraliaAchievementManager
  } else if (courseKey === 'california') {
    state       = californiaAchievementState
    definitions = californiaAchievementDefinitions
    manager     = globalCaliforniaAchievementManager
  } else if (courseKey === 'greece') {
    state       = greeceAchievementState
    definitions = greeceAchievementDefinitions
    manager     = globalGreeceAchievementManager
  } else if (courseKey === 'rhone') {
    state       = rhoneAchievementState
    definitions = rhoneAchievementDefinitions
    manager     = globalRhoneAchievementManager
  } else if (courseKey === 'champagne') {
    state       = champagneAchievementState
    definitions = champagneAchievementDefinitions
    manager     = globalChampagneAchievementManager
  } else if (courseKey === 'languedoc') {
    state       = languedocAchievementState
    definitions = languedocAchievementDefinitions
    manager     = globalLanguedocAchievementManager
  } else if (courseKey === 'chile') {
    state       = chileAchievementState
    definitions = chileAchievementDefinitions
    manager     = globalChileAchievementManager
  } else if (courseKey === 'austria') {
    state       = austriaAchievementState
    definitions = austriaAchievementDefinitions
    manager     = globalAustriaAchievementManager
  } else if (courseKey === 'southafrica') {
    state       = southafricaAchievementState
    definitions = southafricaAchievementDefinitions
    manager     = globalSouthAfricaAchievementManager
  } else if (courseKey === 'usother') {
    state       = usotherAchievementState
    definitions = usotherAchievementDefinitions
    manager     = globalUsOtherAchievementManager
  } else if (courseKey === 'argentina') {
    state       = argentinaAchievementState
    definitions = argentinaAchievementDefinitions
    manager     = globalArgentinaAchievementManager
  } else if (courseKey === 'alsace') {
    state       = alsaceAchievementState
    definitions = alsaceAchievementDefinitions
    manager     = globalAlsaceAchievementManager
  } else {
    // default: bordeaux
    state       = achievementState
    definitions = achievementDefinitions
    manager     = globalAchievementManager
  }

  // ── 正規化 computeds ──────────────────────────────────
  const achievements = computed(() =>
    Object.values(definitions).map(a => ({
      ...a,
      // 希臘課程的成就文字經翻譯字典（其他課程查無對應時原樣回傳）
      ...((courseKey === 'greece' || courseKey === 'rhone') ? { title: gt(a.title), description: gt(a.description) } : {}),
      ...(isLocal ? { title: gtX(a.title), description: gtX(a.description) } : {}),
      unlocked: state.unlockedAchievements.includes(a.id)
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
    if (courseKey === 'greece' || courseKey === 'rhone') return { ...raw, title: gt(raw.title) }
    if (isLocal) return { ...raw, title: gtX(raw.title) }
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
    const list = state.newUnlocks || []
    if (isLocal) return list.map(a => ({ ...a, title: gtX(a.title), description: gtX(a.description) }))
    return (courseKey === 'greece' || courseKey === 'rhone') ? list.map(a => ({ ...a, title: gt(a.title), description: gt(a.description) })) : list
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
    categories:   isLocal
      ? COURSE_CATEGORIES[courseKey].map(c => ({ ...c, name: gtX(c.name) }))
      : (courseKey === 'greece' || courseKey === 'rhone')
        ? COURSE_CATEGORIES[courseKey].map(c => ({ ...c, name: gt(c.name) }))
        : (COURSE_CATEGORIES[courseKey] || COURSE_CATEGORIES.bordeaux),
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
