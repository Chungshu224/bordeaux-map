// 布根地成就系統
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// localStorage 依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的成就紀錄
function burgAchievementsStorageKey(userId) {
  return `burgundy-wine-academy-achievements:${userId}`
}

// ── 成就定義 ──────────────────────────────────────────────────
export const burgAchievementDefinitions = {

  // ── 學習進度 (progress) ─────────────────────────────────────
  'burg-first-lesson': {
    id: 'burg-first-lesson', title: '葡萄初遇',
    description: '完成第一個布根地課程', icon: '🌱',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'burg-level-1': {
    id: 'burg-level-1', title: '布根地探索者',
    description: '完成 Level 1 全部課程', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 50,
    condition: s => s.level1Completed
  },
  'burg-level-2': {
    id: 'burg-level-2', title: '布根地愛好者',
    description: '完成 Level 2 全部課程', icon: '🥈',
    category: 'progress', rarity: 'rare', points: 100,
    condition: s => s.level2Completed
  },
  'burg-level-3': {
    id: 'burg-level-3', title: '布根地專家',
    description: '完成 Level 3 全部課程', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 200,
    condition: s => s.level3Completed
  },
  'burg-level-4': {
    id: 'burg-level-4', title: '布根地大師',
    description: '完成所有 Level 4 課程', icon: '👑',
    category: 'progress', rarity: 'legendary', points: 500,
    condition: s => s.level4Completed
  },
  'burg-half-way': {
    id: 'burg-half-way', title: '中途衝刺',
    description: '完成 50% 以上的課程進度', icon: '📖',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.totalProgress >= 50
  },

  // ── 遊戲挑戰 (game) ────────────────────────────────────────
  'burg-map-first': {
    id: 'burg-map-first', title: '踏上地圖',
    description: '首次完成布根地產區競答', icon: '🗺️',
    category: 'game', rarity: 'common', points: 10,
    condition: s => s.mapQuizPlayed >= 1
  },
  'burg-map-hard': {
    id: 'burg-map-hard', title: '地圖全知',
    description: '困難模式完成產區競答', icon: '🧠',
    category: 'game', rarity: 'rare', points: 60,
    condition: s => s.mapQuizHardCompleted
  },
  'burg-vintage-first': {
    id: 'burg-vintage-first', title: '時光序列',
    description: '首次完成年份排列', icon: '🌡️',
    category: 'game', rarity: 'common', points: 10,
    condition: s => s.vintageSortPlayed >= 1
  },
  'burg-vintage-ace': {
    id: 'burg-vintage-ace', title: '年份傳奇',
    description: '年份排列困難模式正確率 80% 以上', icon: '🔥',
    category: 'game', rarity: 'rare', points: 60,
    condition: s => s.vintageSortHardAccuracy >= 80
  },
  'burg-grandcru-first': {
    id: 'burg-grandcru-first', title: '初進特級',
    description: '首次完成 Grand Cru 歸村賽', icon: '🍇',
    category: 'game', rarity: 'common', points: 10,
    condition: s => s.grandCruPlayed >= 1
  },
  'burg-grandcru-master': {
    id: 'burg-grandcru-master', title: '公社達人',
    description: 'Grand Cru 歸村賽困難模式正確率 85% 以上', icon: '🏆',
    category: 'game', rarity: 'epic', points: 100,
    condition: s => s.grandCruHardAccuracy >= 85
  },
  'burg-color-first': {
    id: 'burg-color-first', title: '初次快答',
    description: '首次完成紅・白・兩者快答', icon: '🍷',
    category: 'game', rarity: 'common', points: 10,
    condition: s => s.colorQuizPlayed >= 1
  },
  'burg-color-speed': {
    id: 'burg-color-speed', title: '閃電判色',
    description: '紅白快答困難模式獲得 1500 分以上', icon: '⚡',
    category: 'game', rarity: 'rare', points: 50,
    condition: s => s.colorQuizHardBestScore >= 1500
  },
  'burg-all-games': {
    id: 'burg-all-games', title: '全能挑戰者',
    description: '每個遊戲至少完成一次', icon: '🎮',
    category: 'game', rarity: 'uncommon', points: 40,
    condition: s => s.mapQuizPlayed >= 1 && s.vintageSortPlayed >= 1 && s.grandCruPlayed >= 1 && s.colorQuizPlayed >= 1
  },
  'burg-perfect-score': {
    id: 'burg-perfect-score', title: '完美得分',
    description: '任意遊戲獲得滿分（正確率 100%）', icon: '💯',
    category: 'game', rarity: 'rare', points: 25,
    condition: s => s.perfectScores >= 1
  },
  'burg-quiz-streak': {
    id: 'burg-quiz-streak', title: '連勝挑戰',
    description: '同一遊戲連續 3 次獲得 90 分以上', icon: '🔥',
    category: 'game', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },

  // ── 地圖探索 (exploration) ─────────────────────────────────
  'burg-explore-first': {
    id: 'burg-explore-first', title: '初次探索',
    description: '探索第一個布根地產區', icon: '🏘️',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'burg-explore-chablis': {
    id: 'burg-explore-chablis', title: '夏布利初訪',
    description: '探索夏布利產區地圖', icon: '🌊',
    category: 'exploration', rarity: 'common', points: 15,
    condition: s => s.exploredRegionsList.includes('chablis')
  },
  'burg-explore-cote-nuits': {
    id: 'burg-explore-cote-nuits', title: '夜丘之旅',
    description: '探索夜丘所有主要 AOC', icon: '🌙',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => {
      const coteNuits = ['gevrey-chambertin', 'morey-st-denis', 'chambolle-musigny', 'vougeot', 'vosne-romanee', 'nuits-st-georges']
      return coteNuits.every(r => s.exploredRegionsList.includes(r))
    }
  },
  'burg-explore-cote-beaune': {
    id: 'burg-explore-cote-beaune', title: '博納丘巡禮',
    description: '探索博納丘所有主要 AOC', icon: '🌸',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => {
      const coteBeaune = ['beaune', 'pommard', 'volnay', 'meursault', 'puligny-montrachet', 'chassagne-montrachet']
      return coteBeaune.every(r => s.exploredRegionsList.includes(r))
    }
  },
  'burg-explore-all': {
    id: 'burg-explore-all', title: '布根地全覽',
    description: '探索所有布根地主要產區', icon: '🗺️',
    category: 'exploration', rarity: 'rare', points: 80,
    condition: s => s.exploredRegions >= 15
  },

  // ── 時間特殊 (time) ────────────────────────────────────────
  'burg-night-owl': {
    id: 'burg-night-owl', title: '深夜研究員',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'burg-early-bird': {
    id: 'burg-early-bird', title: '晨間侍酒師',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'burg-streak-7': {
    id: 'burg-streak-7', title: '一週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'burg-streak-30': {
    id: 'burg-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },

  // ── 特殊成就 (special) ─────────────────────────────────────
  'burg-collector': {
    id: 'burg-collector', title: '成就收藏家',
    description: '解鎖 15 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.unlockedCount >= 15
  },
  'burg-champion': {
    id: 'burg-champion', title: '布根地競技冠軍',
    description: '所有遊戲皆達到 85% 以上正確率', icon: '🌟',
    category: 'special', rarity: 'legendary', points: 200,
    condition: s => s.mapQuizBestAccuracy >= 85 && s.vintageSortBestAccuracy >= 85 && s.grandCruBestAccuracy >= 85 && s.colorQuizBestAccuracy >= 85
  },
  'burg-ambassador': {
    id: 'burg-ambassador', title: '布根地大使',
    description: '完成所有課程並達到平均 90% 正確率', icon: '🏅',
    category: 'special', rarity: 'legendary', points: 300,
    condition: s => s.level4Completed && s.averageCourseScore >= 90
  }
}

// ── 狀態 ──────────────────────────────────────────────────────
export const burgAchievementState = reactive({
  unlockedAchievements: [],
  totalPoints: 0,
  newUnlocks: [],          // 本次解鎖的成就（用於 toast）
  userStats: {
    // 課程進度
    completedLessons:  0,
    level1Completed:   false,
    level2Completed:   false,
    level3Completed:   false,
    level4Completed:   false,
    totalProgress:     0,
    averageCourseScore: 0,
    // 遊戲
    mapQuizPlayed:          0,
    mapQuizHardCompleted:   false,
    mapQuizBestAccuracy:    0,
    vintageSortPlayed:      0,
    vintageSortHardAccuracy: 0,
    vintageSortBestAccuracy: 0,
    grandCruPlayed:         0,
    grandCruHardAccuracy:   0,
    grandCruBestAccuracy:   0,
    colorQuizPlayed:        0,
    colorQuizHardBestScore: 0,
    colorQuizBestAccuracy:  0,
    perfectScores:          0,
    bestStreak:             0,
    currentStreak:          0,
    lastGameType:           null,
    lastGameScores:         [],   // 最近 3 場以追蹤連勝
    // 地圖探索
    exploredRegions:        0,
    exploredRegionsList:    [],
    // 時間
    nightTimeStudy:   0,
    earlyMorningStudy: 0,
    consecutiveDays:  0,
    lastStudyDate:    null,
    // 特殊
    unlockedCount:    0
  }
})

// 初始狀態快照，切換帳號時用來重置，避免殘留前一位使用者的資料
const DEFAULT_BURG_ACHIEVEMENT_SNAPSHOT = JSON.parse(JSON.stringify({
  unlockedAchievements: burgAchievementState.unlockedAchievements,
  totalPoints: burgAchievementState.totalPoints,
  newUnlocks: burgAchievementState.newUnlocks,
  userStats: burgAchievementState.userStats
}))

// ── 配置 ──────────────────────────────────────────────────────
export const burgAchievementConfig = {
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
    { level: 1, min: 0,    max: 49,   title: '葡萄新芽',   icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: '酒村初探',   icon: '🏘️' },
    { level: 3, min: 150,  max: 299,  title: '風土學徒',   icon: '🍇' },
    { level: 4, min: 300,  max: 499,  title: '産域愛好者', icon: '📚' },
    { level: 5, min: 500,  max: 799,  title: '布根地行家', icon: '🥂' },
    { level: 6, min: 800,  max: 1199, title: '公社達人',   icon: '🌟' },
    { level: 7, min: 1200, max: 1999, title: '特級探索者', icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '布根地大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const burgAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(burgAchievementDefinitions).length
    return total ? Math.round((burgAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(burgAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (burgAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  }),
  nextAchievements: computed(() => {
    return Object.values(burgAchievementDefinitions)
      .filter(a => !burgAchievementState.unlockedAchievements.includes(a.id))
      .slice(0, 3)
      .map(a => ({ ...a, progress: 0 }))
  })
}

// ── Manager ───────────────────────────────────────────────────
export class BurgAchievementManager {
  constructor() { this._initialized = false }

  init() {
    if (this._initialized) return
    this._initialized = true
    this._load()
    // 切換帳號（同瀏覽器登出換登入）時重新載入該帳號自己的成就
    watch(() => authState.user?.id, (userId, prevUserId) => {
      if (userId !== prevUserId) this._load()
    })
  }

  _load() {
    const userId = authState.user?.id
    burgAchievementState.unlockedAchievements = [...DEFAULT_BURG_ACHIEVEMENT_SNAPSHOT.unlockedAchievements]
    burgAchievementState.totalPoints = DEFAULT_BURG_ACHIEVEMENT_SNAPSHOT.totalPoints
    burgAchievementState.userStats = { ...DEFAULT_BURG_ACHIEVEMENT_SNAPSHOT.userStats }
    if (!userId) return
    try {
      const raw = localStorage.getItem(burgAchievementsStorageKey(userId))
      if (!raw) return
      const data = JSON.parse(raw)
      burgAchievementState.unlockedAchievements = data.unlocked || []
      burgAchievementState.totalPoints          = data.totalPoints || 0
      burgAchievementState.userStats = { ...burgAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[burg-ach] load error', e) }
  }

  _save() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      localStorage.setItem(burgAchievementsStorageKey(userId), JSON.stringify({
        unlocked:   burgAchievementState.unlockedAchievements,
        totalPoints: burgAchievementState.totalPoints,
        userStats:   burgAchievementState.userStats
      }))
    } catch (e) { console.warn('[burg-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(burgAchievementState.userStats, updates)
    // 同步 unlockedCount
    burgAchievementState.userStats.unlockedCount = burgAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = burgAchievementState.userStats
    Object.values(burgAchievementDefinitions).forEach(def => {
      if (burgAchievementState.unlockedAchievements.includes(def.id)) return
      try {
        if (def.condition(stats)) {
          burgAchievementState.unlockedAchievements.push(def.id)
          burgAchievementState.totalPoints += def.points
          burgAchievementState.userStats.unlockedCount = burgAchievementState.unlockedAchievements.length
          newlyUnlocked.push(def)
        }
      } catch (_) {}
    })
    if (newlyUnlocked.length) {
      burgAchievementState.newUnlocks.push(...newlyUnlocked)
      this._save()
    }
    return newlyUnlocked
  }

  // 遊戲完成後呼叫
  recordGameResult({ gameType, score, correctCount, totalQ, difficulty }) {
    const s = burgAchievementState.userStats
    const accuracy = totalQ ? Math.round((correctCount / totalQ) * 100) : 0

    // 追蹤連勝（連續 3 次同一遊戲 ≥90 分，轉換成 90%）
    if (s.lastGameType === gameType && accuracy >= 90) {
      s.lastGameScores = [...(s.lastGameScores || []).slice(-2), accuracy]
      if (s.lastGameScores.length >= 3 && s.lastGameScores.every(x => x >= 90)) {
        s.bestStreak = Math.max(s.bestStreak || 0, 3)
      }
    } else {
      s.lastGameScores = accuracy >= 90 ? [accuracy] : []
    }
    s.lastGameType = gameType

    // 完美分數
    if (accuracy === 100) s.perfectScores = (s.perfectScores || 0) + 1

    if (gameType === 'bourgogne_map_quiz') {
      s.mapQuizPlayed = (s.mapQuizPlayed || 0) + 1
      s.mapQuizBestAccuracy = Math.max(s.mapQuizBestAccuracy || 0, accuracy)
      if (difficulty === 'hard') s.mapQuizHardCompleted = true
    }

    if (gameType === 'bourgogne_vintage_sort') {
      s.vintageSortPlayed = (s.vintageSortPlayed || 0) + 1
      s.vintageSortBestAccuracy = Math.max(s.vintageSortBestAccuracy || 0, accuracy)
      if (difficulty === 'hard') s.vintageSortHardAccuracy = Math.max(s.vintageSortHardAccuracy || 0, accuracy)
    }

    if (gameType === 'grand_cru_quiz') {
      s.grandCruPlayed = (s.grandCruPlayed || 0) + 1
      s.grandCruBestAccuracy = Math.max(s.grandCruBestAccuracy || 0, accuracy)
      if (difficulty === 'hard') s.grandCruHardAccuracy = Math.max(s.grandCruHardAccuracy || 0, accuracy)
    }

    if (gameType === 'color_quiz') {
      s.colorQuizPlayed = (s.colorQuizPlayed || 0) + 1
      s.colorQuizBestAccuracy = Math.max(s.colorQuizBestAccuracy || 0, accuracy)
      if (difficulty === 'hard') s.colorQuizHardBestScore = Math.max(s.colorQuizHardBestScore || 0, score)
    }

    return this.updateStats(s)
  }

  // 課程完成後呼叫
  recordLessonCompleted({ levelId, totalProgress = 0, averageScore = 0 } = {}) {
    const s = burgAchievementState.userStats
    s.completedLessons = (s.completedLessons || 0) + 1
    s.totalProgress = Math.max(s.totalProgress || 0, totalProgress)
    s.averageCourseScore = averageScore
    if (levelId === 1) s.level1Completed = true
    if (levelId === 2) s.level2Completed = true
    if (levelId === 3) s.level3Completed = true
    if (levelId === 4) s.level4Completed = true
    // 時間統計
    const h = new Date().getHours()
    if (h >= 23 || h < 5)  s.nightTimeStudy  = (s.nightTimeStudy  || 0) + 1
    if (h >= 5  && h < 8)  s.earlyMorningStudy = (s.earlyMorningStudy || 0) + 1
    // 連續天數
    const today = new Date().toDateString()
    if (s.lastStudyDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString()
      s.consecutiveDays = (s.lastStudyDate === yesterday) ? (s.consecutiveDays || 0) + 1 : 1
      s.lastStudyDate = today
    }
    return this.updateStats(s)
  }

  // 地圖探索後呼叫
  recordRegionExplored(regionId) {
    const s = burgAchievementState.userStats
    if (!s.exploredRegionsList) s.exploredRegionsList = []
    if (!s.exploredRegionsList.includes(regionId)) {
      s.exploredRegionsList = [...s.exploredRegionsList, regionId.toLowerCase()]
      s.exploredRegions = s.exploredRegionsList.length
    }
    return this.updateStats(s)
  }

  // 清除 toast 通知
  clearNewUnlocks() {
    burgAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts = burgAchievementState.totalPoints
    const thresholds = burgAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return burgAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(burgAchievementDefinitions).map(a => ({
      ...a,
      unlocked: this.isUnlocked(a.id)
    }))
  }

  getStats() {
    return {
      totalPoints: burgAchievementState.totalPoints,
      unlockedCount: burgAchievementState.unlockedAchievements.length,
      totalCount: Object.keys(burgAchievementDefinitions).length,
      completionPct: burgAchievementComputed.completionPercentage.value,
      level: this.getUserLevel()
    }
  }
}

export const globalBurgAchievementManager = new BurgAchievementManager()
