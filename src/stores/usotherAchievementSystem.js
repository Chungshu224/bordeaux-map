// 美國其他產區成就系統
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'
import { POINT_REF } from '../data/usother/pointRef.js'

// localStorage 依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的成就紀錄
function usotherAchievementsStorageKey(userId) {
  return `usother-wine-academy-achievements:${userId}`
}

// 課程規模（與 usotherLearningStore 一致）
const LEVEL_LESSONS = { 1: 6, 2: 8, 3: 7 }
const TOTAL_LESSONS = 21

// ── 成就定義 ─────────────────────────────────────────────────
// 探索類以 AVA id（US-AVA-*）記錄，與地圖 pointRef.js 一致；跨州 AVA 在各州分組都算探索。
const ids = list => list.map(x => `US-AVA-${x}`)
export const WILLAMETTE_SUB_IDS = POINT_REF.filter(p => p.parent === 'Willamette Valley').map(p => p.id)
export const NEWYORK_IDS = POINT_REF.filter(p => p.groups.includes('newyork')).map(p => p.id)
export const CROSS_STATE_IDS = ids(['COLUMBIA-GORGE', 'WALLA-WALLA', 'COLUMBIA-VALLEY'])
export const SMALL_STATE_IDS = ids(['SNAKE-RIVER', 'MONTICELLO', 'TX-HIGH-PLAINS'])
export const ALL_POINT_IDS = POINT_REF.map(p => p.id)
const WILLAMETTE_ID = 'US-AVA-WILLAMETTE'
const REDMOUNTAIN_ID = 'US-AVA-RED-MOUNTAIN'
const FINGERLAKES_ID = 'US-AVA-FINGER-LAKES'

export const usotherAchievementDefinitions = {
  'usother-first-lesson': {
    id: 'usother-first-lesson', title: '美國產區初遇',
    description: '完成第一個美國其他產區課程', icon: '🍇',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'usother-level-1': {
    id: 'usother-level-1', title: '美國產區入門者',
    description: '完成 Level 1 全部 6 堂基礎課程', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 50,
    condition: s => s.level1Completed
  },
  'usother-level-2': {
    id: 'usother-level-2', title: '產區行家',
    description: '完成 Level 2 全部 8 堂逐區課程', icon: '🥈',
    category: 'progress', rarity: 'rare', points: 100,
    condition: s => s.level2Completed
  },
  'usother-level-3': {
    id: 'usother-level-3', title: 'Diploma／MW 精修者',
    description: '完成 Level 3 全部 7 堂精修課程', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 200,
    condition: s => s.level3Completed
  },
  'usother-half-way': {
    id: 'usother-half-way', title: '過半里程',
    description: '完成 50% 以上的課程進度', icon: '🛤️',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.totalProgress >= 50
  },
  'usother-all-complete': {
    id: 'usother-all-complete', title: '美國產區全覽者',
    description: '完成美國其他產區全部 21 堂課程', icon: '🏆',
    category: 'progress', rarity: 'legendary', points: 400,
    condition: s => s.completedLessons >= 21
  },
  'usother-explore-first': {
    id: 'usother-explore-first', title: '初探 AVA',
    description: '探索第一個美國 AVA', icon: '🗺️',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'usother-explore-5': {
    id: 'usother-explore-5', title: '五處踏查',
    description: '探索 5 個以上 AVA', icon: '🧭',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => s.exploredRegions >= 5
  },
  'usother-explore-willamette': {
    id: 'usother-explore-willamette', title: 'Willamette 朝聖',
    description: '探索 Willamette Valley', icon: '🌲',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes(WILLAMETTE_ID)
  },
  'usother-explore-redmountain': {
    id: 'usother-explore-redmountain', title: 'Red Mountain 朝聖',
    description: '探索 Red Mountain', icon: '🏜️',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes(REDMOUNTAIN_ID)
  },
  'usother-explore-fingerlakes': {
    id: 'usother-explore-fingerlakes', title: 'Finger Lakes 朝聖',
    description: '探索 Finger Lakes', icon: '💧',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes(FINGERLAKES_ID)
  },
  'usother-three-states': {
    id: 'usother-three-states', title: '三州巡禮',
    description: 'Oregon、Washington、New York 各探索至少一個 AVA', icon: '🔺',
    category: 'exploration', rarity: 'rare', points: 40,
    condition: s => ['oregon', 'washington', 'newyork'].every(z => (s.exploredGroupsList || []).includes(z))
  },
  'usother-cross-state': {
    id: 'usother-cross-state', title: '跨州旅人',
    description: '探索 Columbia Gorge、Walla Walla Valley 與 Columbia Valley 三個跨州 AVA', icon: '🌉',
    category: 'exploration', rarity: 'rare', points: 40,
    condition: s => CROSS_STATE_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'usother-small-states': {
    id: 'usother-small-states', title: '小州見聞',
    description: '探索 Snake River Valley（Idaho）、Monticello（Virginia）與 Texas High Plains', icon: '🧳',
    category: 'exploration', rarity: 'rare', points: 40,
    condition: s => SMALL_STATE_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'usother-willamette-pilgrim': {
    id: 'usother-willamette-pilgrim', title: 'Willamette 子 AVA 全覽',
    description: '探索 Willamette Valley 的全部子 AVA', icon: '⛰️',
    category: 'exploration', rarity: 'epic', points: 100,
    condition: s => WILLAMETTE_SUB_IDS.length > 0 && WILLAMETTE_SUB_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'usother-newyork-pilgrim': {
    id: 'usother-newyork-pilgrim', title: '紐約產區全覽',
    description: '探索地圖上所有 New York 的 AVA', icon: '🗽',
    category: 'exploration', rarity: 'epic', points: 80,
    condition: s => NEWYORK_IDS.length > 0 && NEWYORK_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'usother-explore-all': {
    id: 'usother-explore-all', title: 'AVA 集滿',
    description: '探索地圖上全部 AVA', icon: '👑',
    category: 'exploration', rarity: 'legendary', points: 300,
    condition: s => ALL_POINT_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'usother-perfect-score': {
    id: 'usother-perfect-score', title: '完美一擊',
    description: '任意測驗或遊戲獲得滿分', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 25,
    condition: s => s.perfectScores >= 1
  },
  'usother-quiz-streak': {
    id: 'usother-quiz-streak', title: '連戰連勝',
    description: '連續 3 次測驗或遊戲正確率 90% 以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'usother-quiz-starter': {
    id: 'usother-quiz-starter', title: '初試啼聲',
    description: '累計完成 5 次以上測驗或遊戲', icon: '🏅',
    category: 'quiz', rarity: 'common', points: 20,
    condition: s => s.totalQuizzes >= 5
  },
  'usother-quiz-master': {
    id: 'usother-quiz-master', title: '美國產區達人',
    description: '累計完成 15 次以上測驗或遊戲', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 40,
    condition: s => s.totalQuizzes >= 15
  },
  'usother-all-games': {
    id: 'usother-all-games', title: '全能挑戰者',
    description: '四款互動遊戲各玩過至少一次', icon: '🎮',
    category: 'quiz', rarity: 'rare', points: 50,
    condition: s => s.gameTypesPlayed.length >= 4
  },
  'usother-diploma-ace': {
    id: 'usother-diploma-ace', title: 'Diploma 王牌',
    description: '完成 Level 3 且最佳正確率達 80% 以上', icon: '🎯',
    category: 'quiz', rarity: 'rare', points: 60,
    condition: s => s.bestQuizScore >= 80 && s.level3Completed
  },
  'usother-night-owl': {
    id: 'usother-night-owl', title: '深夜研究員',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'usother-early-bird': {
    id: 'usother-early-bird', title: '晨間品酒師',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'usother-streak-7': {
    id: 'usother-streak-7', title: '一週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'usother-streak-30': {
    id: 'usother-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },
  'usother-first-note': {
    id: 'usother-first-note', title: '第一則筆記',
    description: '記錄第一則美國其他產區品飲筆記', icon: '📝',
    category: 'special', rarity: 'common', points: 10,
    condition: s => s.tastingNotesCount >= 1
  },
  'usother-tasting-notes': {
    id: 'usother-tasting-notes', title: '品飲筆記達人',
    description: '記錄 5 則以上品飲筆記', icon: '📔',
    category: 'special', rarity: 'uncommon', points: 30,
    condition: s => s.tastingNotesCount >= 5
  },
  'usother-compare-notes': {
    id: 'usother-compare-notes', title: '西北雙雄',
    description: '各記錄至少一則 Oregon Pinot Noir 與 Cabernet／Merlot 的品飲筆記', icon: '⚖️',
    category: 'special', rarity: 'rare', points: 50,
    condition: s => (s.tastingTypesList || []).includes('us_pinot') && (s.tastingTypesList || []).includes('us_bordeaux')
  },
  'usother-law-master': {
    id: 'usother-law-master', title: '制度掌握者',
    description: '完成 Level 2 並探索至少 6 個 AVA', icon: '⚖️',
    category: 'special', rarity: 'epic', points: 100,
    condition: s => s.level2Completed && s.exploredRegions >= 6
  },
  'usother-collector': {
    id: 'usother-collector', title: '成就收藏家',
    description: '解鎖 10 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.unlockedCount >= 10
  },
  'usother-grand-master': {
    id: 'usother-grand-master', title: '美國產區大師',
    description: '解鎖 20 個以上成就', icon: '🔱',
    category: 'special', rarity: 'legendary', points: 300,
    condition: s => s.unlockedCount >= 20
  }
}

// ── 狀態 ───────────────────────────────────────────────────
export const usotherAchievementState = reactive({
  unlockedAchievements: [],
  totalPoints: 0,
  newUnlocks: [],
  userStats: {
    completedLessons:    0,
    level1Completed:     false,
    level2Completed:     false,
    level3Completed:     false,
    totalProgress:       0,
    bestQuizScore:       0,
    exploredRegions:     0,
    exploredRegionsList: [],
    exploredGroupsList:  [],   // 州分組（oregon／washington／newyork／other）
    exploredTiersList:   [],   // 保留欄位（美國地圖不分層）
    tastingTypesList:    [],
    perfectScores:       0,
    bestStreak:          0,
    currentStreak:       0,
    lastGameScores:      [],
    totalQuizzes:        0,
    gameTypesPlayed:     [],
    nightTimeStudy:      0,
    earlyMorningStudy:   0,
    consecutiveDays:     0,
    lastStudyDate:       null,
    tastingNotesCount:   0,
    unlockedCount:       0
  }
})

// 初始狀態快照，切換帳號時用來重置，避免殘留前一位使用者的資料
const DEFAULT_SNAPSHOT = JSON.parse(JSON.stringify({
  unlockedAchievements: usotherAchievementState.unlockedAchievements,
  totalPoints: usotherAchievementState.totalPoints,
  newUnlocks: usotherAchievementState.newUnlocks,
  userStats: usotherAchievementState.userStats
}))

// ── 配置 ───────────────────────────────────────────────────
export const usotherAchievementConfig = {
  rarityColors: {
    common: '#9E9E9E', uncommon: '#4CAF50', rare: '#2196F3', epic: '#9C27B0', legendary: '#FF9800'
  },
  rarityNames: {
    common: '普通', uncommon: '優良', rare: '稀有', epic: '史詩', legendary: '傳說'
  },
  levelThresholds: [
    { level: 1, min: 0,    max: 49,   title: '美國產區新芽',          icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: 'Syrah 初探者',      icon: '🍇' },
    { level: 3, min: 150,  max: 299,  title: 'Grenache 愛好者',   icon: '🍷' },
    { level: 4, min: 300,  max: 499,  title: '南北對照鑑賞者',    icon: '⛰️' },
    { level: 5, min: 500,  max: 799,  title: 'Cru 行家',          icon: '🏰' },
    { level: 6, min: 800,  max: 1199, title: '美國產區專家',      icon: '🏛️' },
    { level: 7, min: 1200, max: 1999, title: 'Diploma／MW 衝刺者', icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '美國產區大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const usotherAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(usotherAchievementDefinitions).length
    return total ? Math.round((usotherAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(usotherAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (usotherAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ──────────────────────────────────────────────────
export class UsOtherAchievementManager {
  constructor() { this._initialized = false }

  init() {
    if (this._initialized) return
    this._initialized = true
    this._load()
    this._syncWithCourseProgress()
    // 切換帳號（同瀏覽器登出換登入）時重新載入該帳號自己的成就與課程進度
    watch(() => authState.user?.id, (userId, prevUserId) => {
      if (userId !== prevUserId) {
        this._load()
        this._syncWithCourseProgress()
      }
    })
  }

  _syncWithCourseProgress() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      const raw = localStorage.getItem(`usother-wine-academy-progress:${userId}`)
      if (!raw) return
      const data = JSON.parse(raw)
      const completed = data.completedLessons || []
      if (!completed.length) return

      const s = usotherAchievementState.userStats
      const count = n => completed.filter(id => id.startsWith(`us-l${n}-`)).length
      s.completedLessons = Math.max(s.completedLessons || 0, completed.length)
      s.level1Completed = s.level1Completed || count(1) >= LEVEL_LESSONS[1]
      s.level2Completed = s.level2Completed || count(2) >= LEVEL_LESSONS[2]
      s.level3Completed = s.level3Completed || count(3) >= LEVEL_LESSONS[3]
      s.totalProgress = Math.max(s.totalProgress || 0, Math.round(completed.length / TOTAL_LESSONS * 100))
      this._save()
      this._checkAll()
    } catch (e) { console.warn('[usother-ach] syncProgress error', e) }
  }

  _load() {
    const userId = authState.user?.id
    usotherAchievementState.unlockedAchievements = [...DEFAULT_SNAPSHOT.unlockedAchievements]
    usotherAchievementState.totalPoints = DEFAULT_SNAPSHOT.totalPoints
    usotherAchievementState.userStats = JSON.parse(JSON.stringify(DEFAULT_SNAPSHOT.userStats))
    if (!userId) return
    try {
      const raw = localStorage.getItem(usotherAchievementsStorageKey(userId))
      if (!raw) return
      const data = JSON.parse(raw)
      usotherAchievementState.unlockedAchievements = data.unlocked || []
      usotherAchievementState.totalPoints = data.totalPoints || 0
      usotherAchievementState.userStats = { ...usotherAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[usother-ach] load error', e) }
  }

  _save() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      localStorage.setItem(usotherAchievementsStorageKey(userId), JSON.stringify({
        unlocked:    usotherAchievementState.unlockedAchievements,
        totalPoints: usotherAchievementState.totalPoints,
        userStats:   usotherAchievementState.userStats
      }))
    } catch (e) { console.warn('[usother-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(usotherAchievementState.userStats, updates)
    usotherAchievementState.userStats.unlockedCount = usotherAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = usotherAchievementState.userStats
    // 解鎖會推高 unlockedCount，所以迴圈到沒有新解鎖為止
    let changed = true
    while (changed) {
      changed = false
      Object.values(usotherAchievementDefinitions).forEach(def => {
        if (usotherAchievementState.unlockedAchievements.includes(def.id)) return
        try {
          if (def.condition(stats)) {
            usotherAchievementState.unlockedAchievements.push(def.id)
            usotherAchievementState.totalPoints += def.points
            stats.unlockedCount = usotherAchievementState.unlockedAchievements.length
            newlyUnlocked.push(def)
            changed = true
          }
        } catch (_) { /* 條件讀取失敗時略過 */ }
      })
    }
    if (newlyUnlocked.length) {
      usotherAchievementState.newUnlocks.push(...newlyUnlocked)
      this._save()
      this._notify(newlyUnlocked)
    }
    return newlyUnlocked
  }

  // 沿用全站的成就彈窗（App.vue 的 AchievementNotificationsContainer 監聽此事件）
  _notify(list) {
    if (typeof window === 'undefined' || !authState.user?.id) return
    list.forEach((def, i) => {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('achievementNotification', {
          detail: { ...def, timestamp: Date.now() }
        }))
      }, i * 250)
    })
  }

  recordLessonCompleted({ levelId, totalProgress = 0 } = {}) {
    const s = usotherAchievementState.userStats
    s.completedLessons = (s.completedLessons || 0) + 1
    s.totalProgress = Math.max(s.totalProgress || 0, totalProgress)
    if (levelId === 1) s.level1Completed = true
    if (levelId === 2) s.level2Completed = true
    if (levelId === 3) s.level3Completed = true
    const h = new Date().getHours()
    if (h >= 23 || h < 5) s.nightTimeStudy = (s.nightTimeStudy || 0) + 1
    if (h >= 5 && h < 8) s.earlyMorningStudy = (s.earlyMorningStudy || 0) + 1
    const today = new Date().toDateString()
    if (s.lastStudyDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString()
      s.consecutiveDays = (s.lastStudyDate === yesterday) ? (s.consecutiveDays || 0) + 1 : 1
      s.lastStudyDate = today
    }
    return this.updateStats(s)
  }

  // 測驗與遊戲共用：{ correctCount, totalQ, gameType? }
  recordQuizResult({ correctCount, totalQ, gameType } = {}) {
    const s = usotherAchievementState.userStats
    const accuracy = totalQ ? Math.round((correctCount / totalQ) * 100) : 0
    s.totalQuizzes = (s.totalQuizzes || 0) + 1
    s.bestQuizScore = Math.max(s.bestQuizScore || 0, accuracy)
    if (accuracy === 100) s.perfectScores = (s.perfectScores || 0) + 1
    if (accuracy >= 90) {
      s.currentStreak = (s.currentStreak || 0) + 1
      s.bestStreak = Math.max(s.bestStreak || 0, s.currentStreak)
    } else {
      s.currentStreak = 0
    }
    if (gameType && !(s.gameTypesPlayed || []).includes(gameType)) {
      s.gameTypesPlayed = [...(s.gameTypesPlayed || []), gameType]
    }
    return this.updateStats(s)
  }

  // id：AVA id（US-AVA-*）；zone：oregon／washington／newyork／other；tier：ava 或 sub
  recordRegionExplored(id, zone, tier) {
    if (!id) return []
    const s = usotherAchievementState.userStats
    const list = s.exploredRegionsList || []
    const zones = s.exploredGroupsList || []
    const tiers = s.exploredTiersList || []
    const hasZone = !zone || zones.includes(zone)
    const hasTier = !tier || tiers.includes(tier)
    if (list.includes(id) && hasZone && hasTier) return []
    if (!list.includes(id)) s.exploredRegionsList = [...list, id]
    if (zone && !hasZone) s.exploredGroupsList = [...zones, zone]
    if (tier && !hasTier) s.exploredTiersList = [...tiers, tier]
    s.exploredRegions = s.exploredRegionsList.length
    return this.updateStats(s)
  }

  // 以目前筆記總數與出現過的酒款類型為準（可重複呼叫，不會重複累計）
  syncTastingNotes(count, types = []) {
    const s = usotherAchievementState.userStats
    const have = s.tastingTypesList || []
    const merged = [...new Set([...have, ...types])]
    if ((s.tastingNotesCount || 0) >= count && merged.length === have.length) return []
    return this.updateStats({ tastingNotesCount: Math.max(s.tastingNotesCount || 0, count), tastingTypesList: merged })
  }

  clearNewUnlocks() {
    usotherAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts = usotherAchievementState.totalPoints
    const thresholds = usotherAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return usotherAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(usotherAchievementDefinitions).map(a => ({ ...a, unlocked: this.isUnlocked(a.id) }))
  }

  getStats() {
    return {
      totalPoints:   usotherAchievementState.totalPoints,
      unlockedCount: usotherAchievementState.unlockedAchievements.length,
      totalCount:    Object.keys(usotherAchievementDefinitions).length,
      completionPct: usotherAchievementComputed.completionPercentage.value,
      userLevel:     this.getUserLevel()
    }
  }
}

export const globalUsOtherAchievementManager = new UsOtherAchievementManager()
