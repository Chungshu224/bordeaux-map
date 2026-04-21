// 羅亞爾河谷成就系統
import { reactive, computed } from 'vue'

// ── 成就定義 ──────────────────────────────────────────────────
export const loireAchievementDefinitions = {

  // ── 學習進度 (progress) ─────────────────────────────────────
  'loire-first-lesson': {
    id: 'loire-first-lesson', title: '河谷初遇',
    description: '完成第一個羅亞爾河谷課程', icon: '🌊',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'loire-level-1': {
    id: 'loire-level-1', title: 'Muscadet 入門者',
    description: '完成 Level 1 南特產區全部課程（7 堂）', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 50,
    condition: s => s.level1Completed
  },
  'loire-level-2': {
    id: 'loire-level-2', title: 'Cabernet Franc 愛好者',
    description: '完成 Level 2 安茹索米爾 + 都漢紅酒（8 堂）', icon: '🥈',
    category: 'progress', rarity: 'rare', points: 100,
    condition: s => s.level2Completed
  },
  'loire-level-3': {
    id: 'loire-level-3', title: 'Chenin Blanc 大師',
    description: '完成 Level 3 白詩南 + 中央產區（11 堂）', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 200,
    condition: s => s.level3Completed
  },
  'loire-level-4': {
    id: 'loire-level-4', title: '羅亞爾專家認證',
    description: '完成 Level 4 奧弗涅 + 進階實務（6 堂）', icon: '🏆',
    category: 'progress', rarity: 'legendary', points: 350,
    condition: s => s.level4Completed
  },
  'loire-half-way': {
    id: 'loire-half-way', title: '河谷中途',
    description: '完成 50% 以上的課程進度', icon: '📖',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.totalProgress >= 50
  },
  'loire-surlie-scholar': {
    id: 'loire-surlie-scholar', title: 'Sur Lie 學者',
    description: '完成所有南特產區課程（Level 1 全部）', icon: '🍶',
    category: 'progress', rarity: 'uncommon', points: 40,
    condition: s => s.level1Completed
  },
  'loire-chenin-master': {
    id: 'loire-chenin-master', title: '白詩南全光譜',
    description: '完成薩弗尼耶爾、萊揚甜酒、伏弗雷三大白詩南課程（L3-2、L3-3、L3-6 所屬 Level 3）', icon: '🍯',
    category: 'progress', rarity: 'rare', points: 80,
    condition: s => s.level3Completed
  },
  'loire-all-complete': {
    id: 'loire-all-complete', title: '花園全覽者',
    description: '完成羅亞爾河谷所有 32 堂課程', icon: '🌹',
    category: 'progress', rarity: 'legendary', points: 500,
    condition: s => s.completedLessons >= 32
  },

  // ── 地圖探索 (exploration) ─────────────────────────────────
  'loire-explore-first': {
    id: 'loire-explore-first', title: '初探花園',
    description: '探索第一個羅亞爾河谷產區', icon: '🌿',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'loire-explore-nantais': {
    id: 'loire-explore-nantais', title: '海洋之門',
    description: '探索南特（Nantais）產區', icon: '🌊',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('nantais')
  },
  'loire-explore-anjou': {
    id: 'loire-explore-anjou', title: '凝灰岩探索',
    description: '探索安茹索米爾（Anjou-Saumur）產區', icon: '🏰',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('anjou')
  },
  'loire-explore-touraine': {
    id: 'loire-explore-touraine', title: '都漢漫遊',
    description: '探索都漢（Touraine）產區', icon: '🏯',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('touraine')
  },
  'loire-explore-centre': {
    id: 'loire-explore-centre', title: '燧石雙雄',
    description: '探索中央產區（Centre）—— Sancerre & Pouilly-Fumé', icon: '💎',
    category: 'exploration', rarity: 'rare', points: 35,
    condition: s => s.exploredRegionsList.includes('centre')
  },
  'loire-explore-massif': {
    id: 'loire-explore-massif', title: '火山之旅',
    description: '探索火山產區（Massif Central）—— 奧弗涅丘', icon: '🌋',
    category: 'exploration', rarity: 'rare', points: 35,
    condition: s => s.exploredRegionsList.includes('massifcentral')
  },
  'loire-explore-all': {
    id: 'loire-explore-all', title: '河谷全覽',
    description: '探索羅亞爾河谷所有五大子產區', icon: '🗺️',
    category: 'exploration', rarity: 'epic', points: 100,
    condition: s => {
      const all = ['nantais', 'anjou', 'touraine', 'centre', 'massifcentral']
      return all.every(r => s.exploredRegionsList.includes(r))
    }
  },

  // ── 測驗挑戰 (quiz) ────────────────────────────────────────
  'loire-perfect-score': {
    id: 'loire-perfect-score', title: '河谷完美',
    description: '任意測驗獲得滿分（100 分）', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 25,
    condition: s => s.perfectScores >= 1
  },
  'loire-quiz-streak': {
    id: 'loire-quiz-streak', title: '連戰連勝',
    description: '同一測驗連續 3 次獲得 90 分以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'loire-quiz-master': {
    id: 'loire-quiz-master', title: '花園達人',
    description: '累計完成 10 次以上測驗', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 40,
    condition: s => s.totalQuizzes >= 10
  },
  'loire-quiz-starter': {
    id: 'loire-quiz-starter', title: '初試啼聲',
    description: '累計完成 5 次以上測驗', icon: '🏅',
    category: 'quiz', rarity: 'common', points: 20,
    condition: s => s.totalQuizzes >= 5
  },
  'loire-sancerre-ace': {
    id: 'loire-sancerre-ace', title: 'Sancerre 達人',
    description: '完成中央產區 Level 3 評量並達 80 分以上', icon: '🎯',
    category: 'quiz', rarity: 'rare', points: 60,
    condition: s => s.bestQuizScore >= 80 && s.level3Completed
  },

  // ── 時間特殊 (time) ────────────────────────────────────────
  'loire-night-owl': {
    id: 'loire-night-owl', title: '深夜研究員',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'loire-early-bird': {
    id: 'loire-early-bird', title: '晨間品酒師',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'loire-streak-7': {
    id: 'loire-streak-7', title: '一週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'loire-streak-30': {
    id: 'loire-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },

  // ── 特殊成就 (special) ─────────────────────────────────────
  'loire-collector': {
    id: 'loire-collector', title: '成就收藏家',
    description: '解鎖 10 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.unlockedCount >= 10
  },
  'loire-diversity': {
    id: 'loire-diversity', title: '多元品種學者',
    description: '探索 3 個以上不同子產區', icon: '🍇',
    category: 'special', rarity: 'uncommon', points: 25,
    condition: s => s.exploredRegions >= 3
  },
  'loire-tasting-notes': {
    id: 'loire-tasting-notes', title: '品飲筆記達人',
    description: '記錄 5 則以上品飲筆記', icon: '📔',
    category: 'special', rarity: 'uncommon', points: 30,
    condition: s => s.tastingNotesCount >= 5
  },
  'loire-marathoner': {
    id: 'loire-marathoner', title: '河谷馬拉松',
    description: '累計完成 20 堂以上課程', icon: '🏃',
    category: 'special', rarity: 'rare', points: 70,
    condition: s => s.completedLessons >= 20
  },
  'loire-sweet-wine-connoisseur': {
    id: 'loire-sweet-wine-connoisseur', title: '貴腐甜酒愛好者',
    description: '完成 Level 2 + Level 3（解鎖甜酒全套知識）', icon: '🍯',
    category: 'special', rarity: 'epic', points: 120,
    condition: s => s.level2Completed && s.level3Completed
  },
  'loire-grand-master': {
    id: 'loire-grand-master', title: '羅亞爾大師',
    description: '解鎖 20 個以上成就', icon: '👑',
    category: 'special', rarity: 'legendary', points: 300,
    condition: s => s.unlockedCount >= 20
  }
}

// ── 狀態 ──────────────────────────────────────────────────────
export const loireAchievementState = reactive({
  unlockedAchievements: [],
  totalPoints: 0,
  newUnlocks: [],
  userStats: {
    completedLessons:    0,
    level1Completed:     false,
    level2Completed:     false,
    level3Completed:     false,
    level4Completed:     false,
    totalProgress:       0,
    averageCourseScore:  0,
    bestQuizScore:       0,
    exploredRegions:     0,
    exploredRegionsList: [],
    perfectScores:       0,
    bestStreak:          0,
    currentStreak:       0,
    lastGameScores:      [],
    totalQuizzes:        0,
    nightTimeStudy:      0,
    earlyMorningStudy:   0,
    consecutiveDays:     0,
    lastStudyDate:       null,
    tastingNotesCount:   0,
    unlockedCount:       0
  }
})

// ── 配置 ──────────────────────────────────────────────────────
export const loireAchievementConfig = {
  rarityColors: {
    common:    '#9E9E9E',
    uncommon:  '#4CAF50',
    rare:      '#2196F3',
    epic:      '#9C27B0',
    legendary: '#FF9800'
  },
  rarityNames: {
    common:    '普通',
    uncommon:  '優良',
    rare:      '稀有',
    epic:      '史詩',
    legendary: '傳說'
  },
  levelThresholds: [
    { level: 1, min: 0,    max: 49,   title: '河谷新芽',        icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: 'Sur Lie 學徒',    icon: '🌊' },
    { level: 3, min: 150,  max: 299,  title: 'Muscadet 愛好者',  icon: '🍷' },
    { level: 4, min: 300,  max: 499,  title: 'Chenin Blanc 探索者', icon: '🍯' },
    { level: 5, min: 500,  max: 799,  title: '品麗珠行家',       icon: '🏰' },
    { level: 6, min: 800,  max: 1199, title: 'Sancerre 達人',    icon: '💎' },
    { level: 7, min: 1200, max: 1999, title: '羅亞爾專家',       icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '花園大師',     icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const loireAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(loireAchievementDefinitions).length
    return total ? Math.round((loireAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(loireAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (loireAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ───────────────────────────────────────────────────
export class LoireAchievementManager {
  constructor() { this._initialized = false }

  init() {
    if (this._initialized) return
    this._initialized = true
    this._load()
  }

  _load() {
    try {
      const raw = localStorage.getItem('loire-wine-academy-achievements')
      if (!raw) return
      const data = JSON.parse(raw)
      loireAchievementState.unlockedAchievements = data.unlocked || []
      loireAchievementState.totalPoints          = data.totalPoints || 0
      loireAchievementState.userStats = { ...loireAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[loire-ach] load error', e) }
  }

  _save() {
    try {
      localStorage.setItem('loire-wine-academy-achievements', JSON.stringify({
        unlocked:    loireAchievementState.unlockedAchievements,
        totalPoints: loireAchievementState.totalPoints,
        userStats:   loireAchievementState.userStats
      }))
    } catch (e) { console.warn('[loire-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(loireAchievementState.userStats, updates)
    loireAchievementState.userStats.unlockedCount = loireAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = loireAchievementState.userStats
    Object.values(loireAchievementDefinitions).forEach(def => {
      if (loireAchievementState.unlockedAchievements.includes(def.id)) return
      try {
        if (def.condition(stats)) {
          loireAchievementState.unlockedAchievements.push(def.id)
          loireAchievementState.totalPoints += def.points
          loireAchievementState.userStats.unlockedCount = loireAchievementState.unlockedAchievements.length
          newlyUnlocked.push(def)
        }
      } catch (_) {}
    })
    if (newlyUnlocked.length) {
      loireAchievementState.newUnlocks.push(...newlyUnlocked)
      this._save()
    }
    return newlyUnlocked
  }

  recordLessonCompleted({ levelId, totalProgress = 0, averageScore = 0 } = {}) {
    const s = loireAchievementState.userStats
    s.completedLessons = (s.completedLessons || 0) + 1
    s.totalProgress = Math.max(s.totalProgress || 0, totalProgress)
    s.averageCourseScore = averageScore
    if (levelId === 1) s.level1Completed = true
    if (levelId === 2) s.level2Completed = true
    if (levelId === 3) s.level3Completed = true
    if (levelId === 4) s.level4Completed = true
    const h = new Date().getHours()
    if (h >= 23 || h < 5) s.nightTimeStudy    = (s.nightTimeStudy    || 0) + 1
    if (h >= 5  && h < 8) s.earlyMorningStudy = (s.earlyMorningStudy || 0) + 1
    const today = new Date().toDateString()
    if (s.lastStudyDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString()
      s.consecutiveDays = (s.lastStudyDate === yesterday) ? (s.consecutiveDays || 0) + 1 : 1
      s.lastStudyDate = today
    }
    return this.updateStats(s)
  }

  recordQuizResult({ score, correctCount, totalQ } = {}) {
    const s = loireAchievementState.userStats
    const accuracy = totalQ ? Math.round((correctCount / totalQ) * 100) : 0
    s.totalQuizzes = (s.totalQuizzes || 0) + 1
    s.bestQuizScore = Math.max(s.bestQuizScore || 0, accuracy)
    if (accuracy === 100) s.perfectScores = (s.perfectScores || 0) + 1
    if (accuracy >= 90) {
      s.lastGameScores = [...(s.lastGameScores || []).slice(-2), accuracy]
      if (s.lastGameScores.length >= 3 && s.lastGameScores.every(x => x >= 90)) {
        s.bestStreak = Math.max(s.bestStreak || 0, 3)
      }
    } else {
      s.lastGameScores = []
    }
    return this.updateStats(s)
  }

  recordRegionExplored(regionId) {
    const s = loireAchievementState.userStats
    if (!s.exploredRegionsList) s.exploredRegionsList = []
    if (!s.exploredRegionsList.includes(regionId)) {
      s.exploredRegionsList = [...s.exploredRegionsList, regionId.toLowerCase()]
      s.exploredRegions = s.exploredRegionsList.length
    }
    return this.updateStats(s)
  }

  recordTastingNote() {
    const s = loireAchievementState.userStats
    s.tastingNotesCount = (s.tastingNotesCount || 0) + 1
    return this.updateStats(s)
  }

  clearNewUnlocks() {
    loireAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts = loireAchievementState.totalPoints
    const thresholds = loireAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return loireAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(loireAchievementDefinitions).map(a => ({
      ...a, unlocked: this.isUnlocked(a.id)
    }))
  }

  getStats() {
    return {
      totalPoints:   loireAchievementState.totalPoints,
      unlockedCount: loireAchievementState.unlockedAchievements.length,
      totalCount:    Object.keys(loireAchievementDefinitions).length,
      completionPct: loireAchievementComputed.completionPercentage.value,
      userLevel:     this.getUserLevel()
    }
  }
}

export const globalLoireAchievementManager = new LoireAchievementManager()
