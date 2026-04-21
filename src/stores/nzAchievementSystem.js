// 紐西蘭成就系統
import { reactive, computed } from 'vue'

// ── 成就定義 ──────────────────────────────────────────────────
export const nzAchievementDefinitions = {

  // ── 學習進度 (progress) ─────────────────────────────────────
  'nz-first-lesson': {
    id: 'nz-first-lesson', title: '奇異鳥初探',
    description: '完成第一個紐西蘭課程', icon: '🥝',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'nz-level-1': {
    id: 'nz-level-1', title: '紐西蘭入門者',
    description: '完成 Level 1 全部課程', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 50,
    condition: s => s.level1Completed
  },
  'nz-level-2': {
    id: 'nz-level-2', title: '南北兩島探索者',
    description: '完成 Level 2 全部課程', icon: '🥈',
    category: 'progress', rarity: 'rare', points: 100,
    condition: s => s.level2Completed
  },
  'nz-level-3': {
    id: 'nz-level-3', title: '紐西蘭葡萄酒專家',
    description: '完成 Level 3 全部課程', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 200,
    condition: s => s.level3Completed
  },
  'nz-half-way': {
    id: 'nz-half-way', title: '半程衝刺',
    description: '完成 50% 以上的課程進度', icon: '📖',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.totalProgress >= 50
  },
  'nz-ten-lessons': {
    id: 'nz-ten-lessons', title: '十課里程碑',
    description: '累計完成 10 堂課程', icon: '📚',
    category: 'progress', rarity: 'uncommon', points: 35,
    condition: s => s.completedLessons >= 10
  },

  // ── 地圖探索 (exploration) ─────────────────────────────────
  'nz-explore-first': {
    id: 'nz-explore-first', title: '初探純淨大地',
    description: '探索第一個紐西蘭產區', icon: '🗺️',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'nz-explore-marlborough': {
    id: 'nz-explore-marlborough', title: 'SB 白酒之都',
    description: '深度探索 Marlborough 產區', icon: '🌿',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('marlborough')
  },
  'nz-explore-central-otago': {
    id: 'nz-explore-central-otago', title: '世界最南端',
    description: '深度探索 Central Otago 產區', icon: '🏔️',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('centralotago')
  },
  'nz-explore-north-island': {
    id: 'nz-explore-north-island', title: '北島巡禮',
    description: '探索北島主要產區：Hawke\'s Bay・Wairarapa・Auckland・Gisborne', icon: '🌺',
    category: 'exploration', rarity: 'uncommon', points: 35,
    condition: s => {
      const north = ['hawkesbay', 'wairarapa', 'auckland', 'gisborne']
      return north.every(r => s.exploredRegionsList.includes(r))
    }
  },
  'nz-explore-south-island': {
    id: 'nz-explore-south-island', title: '南島全覽',
    description: '探索南島主要產區：Marlborough・Central Otago・Nelson・North Canterbury', icon: '⛰️',
    category: 'exploration', rarity: 'uncommon', points: 35,
    condition: s => {
      const south = ['marlborough', 'centralotago', 'nelson', 'northcanterbury']
      return south.every(r => s.exploredRegionsList.includes(r))
    }
  },
  'nz-explore-all': {
    id: 'nz-explore-all', title: '紐西蘭全覽',
    description: '探索所有紐西蘭主要產區（10個以上）', icon: '🌏',
    category: 'exploration', rarity: 'rare', points: 80,
    condition: s => s.exploredRegions >= 10
  },

  // ── 測驗挑戰 (quiz) ────────────────────────────────────────
  'nz-perfect-score': {
    id: 'nz-perfect-score', title: '純淨完美',
    description: '任意測驗獲得滿分（100分）', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 25,
    condition: s => s.perfectScores >= 1
  },
  'nz-quiz-streak': {
    id: 'nz-quiz-streak', title: '連戰連勝',
    description: '同一測驗連續 3 次獲得 90 分以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'nz-quiz-master': {
    id: 'nz-quiz-master', title: '紐西蘭達人',
    description: '累計完成 10 次以上測驗', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 40,
    condition: s => s.totalQuizzes >= 10
  },

  // ── 時間特殊 (time) ────────────────────────────────────────
  'nz-night-owl': {
    id: 'nz-night-owl', title: '星空研究員',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'nz-early-bird': {
    id: 'nz-early-bird', title: '晨間品酒師',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'nz-streak-7': {
    id: 'nz-streak-7', title: '一週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'nz-streak-30': {
    id: 'nz-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },

  // ── 特殊成就 (special) ─────────────────────────────────────
  'nz-collector': {
    id: 'nz-collector', title: '成就收藏家',
    description: '解鎖 10 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.unlockedCount >= 10
  },
  'nz-sb-lover': {
    id: 'nz-sb-lover', title: 'Sauvignon Blanc 愛好者',
    description: '完成所有 Sauvignon Blanc 相關課程', icon: '🍾',
    category: 'special', rarity: 'uncommon', points: 40,
    condition: s => s.sbCompleted
  },
  'nz-pinot-expert': {
    id: 'nz-pinot-expert', title: 'Pinot Noir 行家',
    description: '完成所有 Pinot Noir 相關課程', icon: '🍷',
    category: 'special', rarity: 'uncommon', points: 40,
    condition: s => s.pinotCompleted
  },
  'nz-ambassador': {
    id: 'nz-ambassador', title: '紐西蘭大使',
    description: '完成所有課程並達到平均 90% 正確率', icon: '🏅',
    category: 'special', rarity: 'legendary', points: 300,
    condition: s => s.level3Completed && s.averageCourseScore >= 90
  }
}

// ── 狀態 ──────────────────────────────────────────────────────
export const nzAchievementState = reactive({
  unlockedAchievements: [],
  totalPoints: 0,
  newUnlocks: [],
  userStats: {
    completedLessons:    0,
    level1Completed:     false,
    level2Completed:     false,
    level3Completed:     false,
    totalProgress:       0,
    averageCourseScore:  0,
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
    sbCompleted:         false,
    pinotCompleted:      false,
    unlockedCount:       0
  }
})

// ── 配置 ──────────────────────────────────────────────────────
export const nzAchievementConfig = {
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
    { level: 1, min: 0,    max: 49,   title: '奇異鳥新芽',   icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: '純淨探索者',   icon: '🥝' },
    { level: 3, min: 150,  max: 299,  title: '南島學徒',     icon: '🍷' },
    { level: 4, min: 300,  max: 499,  title: 'SB 愛好者',    icon: '📚' },
    { level: 5, min: 500,  max: 799,  title: '紐西蘭行家',   icon: '🥂' },
    { level: 6, min: 800,  max: 1199, title: '兩島達人',     icon: '🌟' },
    { level: 7, min: 1200, max: 1999, title: '產區探索大師', icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '紐西蘭大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const nzAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(nzAchievementDefinitions).length
    return total ? Math.round((nzAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(nzAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (nzAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ───────────────────────────────────────────────────
export class NzAchievementManager {
  constructor() { this._initialized = false }

  init() {
    if (this._initialized) return
    this._initialized = true
    this._load()
  }

  _load() {
    try {
      const raw = localStorage.getItem('nz-wine-academy-achievements')
      if (!raw) return
      const data = JSON.parse(raw)
      nzAchievementState.unlockedAchievements = data.unlocked || []
      nzAchievementState.totalPoints          = data.totalPoints || 0
      nzAchievementState.userStats = { ...nzAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[nz-ach] load error', e) }
  }

  _save() {
    try {
      localStorage.setItem('nz-wine-academy-achievements', JSON.stringify({
        unlocked:    nzAchievementState.unlockedAchievements,
        totalPoints: nzAchievementState.totalPoints,
        userStats:   nzAchievementState.userStats
      }))
    } catch (e) { console.warn('[nz-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(nzAchievementState.userStats, updates)
    nzAchievementState.userStats.unlockedCount = nzAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = nzAchievementState.userStats
    Object.values(nzAchievementDefinitions).forEach(def => {
      if (nzAchievementState.unlockedAchievements.includes(def.id)) return
      try {
        if (def.condition(stats)) {
          nzAchievementState.unlockedAchievements.push(def.id)
          nzAchievementState.totalPoints += def.points
          nzAchievementState.userStats.unlockedCount = nzAchievementState.unlockedAchievements.length
          newlyUnlocked.push(def)
        }
      } catch (_) {}
    })
    if (newlyUnlocked.length) {
      nzAchievementState.newUnlocks = newlyUnlocked
      this._save()
    }
    return newlyUnlocked
  }

  clearNewUnlocks() {
    nzAchievementState.newUnlocks = []
  }

  /**
   * 完成一節課時呼叫
   * @param {object} opts
   * @param {number} opts.levelNum      - 等級數字 (1/2/3)
   * @param {number} opts.totalProgress - 整體完成百分比 0~100
   * @param {boolean} opts.levelCompleted - 是否剛完成整個等級
   * @param {boolean} opts.sbLesson     - 是否為 SB 相關課程
   * @param {boolean} opts.pinotLesson  - 是否為 Pinot 相關課程
   */
  recordLessonCompleted({ levelNum = 0, totalProgress = 0, levelCompleted = false, sbLesson = false, pinotLesson = false } = {}) {
    const s = nzAchievementState.userStats
    s.completedLessons = (s.completedLessons || 0) + 1
    s.totalProgress    = Math.max(s.totalProgress || 0, totalProgress)

    if (levelCompleted) {
      if (levelNum === 1) s.level1Completed = true
      if (levelNum === 2) s.level2Completed = true
      if (levelNum === 3) s.level3Completed = true
    }
    if (sbLesson)    s.sbCompleted    = true
    if (pinotLesson) s.pinotCompleted = true

    const h = new Date().getHours()
    if (h >= 23 || h < 5) s.nightTimeStudy    = (s.nightTimeStudy    || 0) + 1
    if (h >= 5  && h < 8) s.earlyMorningStudy = (s.earlyMorningStudy || 0) + 1

    const today     = new Date().toDateString()
    const yesterday = new Date(Date.now() - 86400000).toDateString()
    if (s.lastStudyDate !== today) {
      s.consecutiveDays = (s.lastStudyDate === yesterday) ? (s.consecutiveDays || 0) + 1 : 1
      s.lastStudyDate   = today
    }
    return this.updateStats(s)
  }

  recordQuizResult({ score, correctCount, totalQ } = {}) {
    const s   = nzAchievementState.userStats
    const pct = totalQ ? Math.round((correctCount / totalQ) * 100) : (score || 0)
    s.totalQuizzes  = (s.totalQuizzes  || 0) + 1
    s.bestQuizScore = Math.max(s.bestQuizScore || 0, pct)
    if (pct === 100) s.perfectScores = (s.perfectScores || 0) + 1
    if (pct >= 90) {
      s.lastGameScores = [...(s.lastGameScores || []).slice(-2), pct]
      if (s.lastGameScores.length >= 3 && s.lastGameScores.every(x => x >= 90))
        s.bestStreak = Math.max(s.bestStreak || 0, 3)
    } else {
      s.lastGameScores = []
    }
    return this.updateStats(s)
  }

  recordRegionExplored(regionId) {
    const s = nzAchievementState.userStats
    if (!s.exploredRegionsList) s.exploredRegionsList = []
    const key = regionId.toLowerCase().replace(/[\s'-]/g, '')
    if (!s.exploredRegionsList.includes(key)) {
      s.exploredRegionsList = [...s.exploredRegionsList, key]
      s.exploredRegions     = s.exploredRegionsList.length
    }
    return this.updateStats(s)
  }

  recordTastingNote() {
    const s = nzAchievementState.userStats
    s.tastingNotesCount = (s.tastingNotesCount || 0) + 1
    return this.updateStats(s)
  }

  getUserLevel() {
    const pts        = nzAchievementState.totalPoints
    const thresholds = nzAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return nzAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(nzAchievementDefinitions).map(a => ({
      ...a, unlocked: this.isUnlocked(a.id)
    }))
  }

  getStats() {
    return {
      totalPoints:   nzAchievementState.totalPoints,
      unlockedCount: nzAchievementState.unlockedAchievements.length,
      totalCount:    Object.keys(nzAchievementDefinitions).length,
      userLevel:     this.getUserLevel()
    }
  }
}

export const globalNzAchievementManager = new NzAchievementManager()
