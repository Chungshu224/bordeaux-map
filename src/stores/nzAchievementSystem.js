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
}

export const globalNzAchievementManager = new NzAchievementManager()
