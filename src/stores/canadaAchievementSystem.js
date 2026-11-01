// 加拿大成就系統
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// localStorage 依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的成就紀錄
function canadaAchievementsStorageKey(userId) {
  return `canada-wine-academy-achievements:${userId}`
}

// 課程規模（與 canadaLearningStore 一致：L1 5 堂、L2 8 堂、L3 5 堂）
const LEVEL_LESSONS = { 1: 5, 2: 8, 3: 5 }
const TOTAL_LESSONS = 18

// ── 成就定義 ─────────────────────────────────────────────────
// 探索類以示意點 id（CAN-PT-*）記錄，與地圖 pointRef.js 一致；沒有官方邊界資料，全部為示意點。
export const ONTARIO_IDS = ['NIAGARA', 'NOTL', 'ESCARPMENT', 'SHORTHILLS', 'BEAMSVILLE', 'VINEMOUNT', 'LAKEERIE', 'SOUTHISLANDS', 'PEC'].map(x => `CAN-PT-${x}`)
export const BC_IDS = ['OKANAGAN', 'GOLDENMILE', 'NARAMATA', 'OKFALLS', 'SIMILKAMEEN', 'FRASER', 'VANISLAND', 'COWICHAN', 'GULF', 'THOMPSON', 'SHUSWAP', 'LILLOOET', 'KOOTENAYS'].map(x => `CAN-PT-${x}`)
export const EAST_IDS = ['ANNAPOLIS', 'GASPEREAU', 'SOUTHSHORE', 'MALAGASH', 'NOVASCOTIA', 'QUEBEC'].map(x => `CAN-PT-${x}`)
export const BENCH_IDS = ['ESCARPMENT', 'SHORTHILLS', 'BEAMSVILLE'].map(x => `CAN-PT-${x}`)
export const ALL_POINT_IDS = [...ONTARIO_IDS, ...BC_IDS, ...EAST_IDS]
const NIAGARA_ID = 'CAN-PT-NIAGARA'
const OKANAGAN_ID = 'CAN-PT-OKANAGAN'
const PEC_ID = 'CAN-PT-PEC'

const def = (id, title, description, icon, category, rarity, points, condition) =>
  [`canada-${id}`, { id: `canada-${id}`, title, description, icon, category, rarity, points, condition }]

export const canadaAchievementDefinitions = Object.fromEntries([
  def('first-lesson', '加拿大初遇', '完成第一個加拿大課程', '🍁', 'progress', 'common', 10, s => s.completedLessons >= 1),
  def('level-1', '冷涼氣候入門者', '完成 Level 1 全部 5 堂基礎課程', '🥉', 'progress', 'uncommon', 50, s => s.level1Completed),
  def('level-2', '產區行家', '完成 Level 2 全部 8 堂逐區課程', '🥈', 'progress', 'rare', 100, s => s.level2Completed),
  def('level-3', 'Diploma／CMS 精修者', '完成 Level 3 全部 5 堂精修課程', '🥇', 'progress', 'epic', 200, s => s.level3Completed),
  def('half-way', '行過半程', '完成 50% 以上的課程進度', '⛵', 'progress', 'uncommon', 30, s => s.totalProgress >= 50),
  def('all-complete', '加拿大全覽者', '完成全部 18 堂課程', '🏆', 'progress', 'legendary', 400, s => s.completedLessons >= 18),
  def('explore-first', '初探加拿大地圖', '探索第一個示意點', '🗺️', 'exploration', 'common', 5, s => s.exploredRegions >= 1),
  def('explore-5', '五處踏查', '探索 5 個以上示意點', '🧭', 'exploration', 'uncommon', 30, s => s.exploredRegions >= 5),
  def('explore-niagara', 'Niagara 朝聖', '探索 Niagara Peninsula', '🍇', 'exploration', 'uncommon', 20, s => s.exploredRegionsList.includes(NIAGARA_ID)),
  def('explore-okanagan', 'Okanagan 朝聖', '探索 Okanagan Valley', '🏔️', 'exploration', 'uncommon', 20, s => s.exploredRegionsList.includes(OKANAGAN_ID)),
  def('explore-pec', 'Prince Edward County 朝聖', '探索 Ontario 最北的認定產區 Prince Edward County', '❄️', 'exploration', 'uncommon', 20, s => s.exploredRegionsList.includes(PEC_ID)),
  def('three-zones', '三大產區群行腳', '安大略、英屬哥倫比亞、東部與沿海三個產區群各探索至少一個示意點', '🔺', 'exploration', 'rare', 40,
    s => ['ontario', 'bc', 'east'].every(z => (s.exploredGroupsList || []).includes(z))),
  def('escarpment-benches', '斷崖台地巡禮', '探索 Niagara Escarpment 與 Short Hills Bench、Beamsville Bench 三個示意點', '🏷️', 'exploration', 'epic', 80,
    s => BENCH_IDS.every(id => s.exploredRegionsList.includes(id))),
  def('bc-all', 'BC 全覽', '探索 BC 全部 13 個示意點', '🌲', 'exploration', 'epic', 100,
    s => BC_IDS.every(id => s.exploredRegionsList.includes(id))),
  def('explore-all', '示意點集滿', '探索地圖上全部 28 個示意點', '👑', 'exploration', 'legendary', 300,
    s => ALL_POINT_IDS.every(id => s.exploredRegionsList.includes(id))),
  def('perfect-score', '完美一擊', '任意測驗或遊戲獲得滿分', '💯', 'quiz', 'rare', 25, s => s.perfectScores >= 1),
  def('quiz-streak', '連戰連勝', '連續 3 次測驗或遊戲正確率 90% 以上', '🔥', 'quiz', 'epic', 80, s => s.bestStreak >= 3),
  def('quiz-starter', '初試啼聲', '累計完成 5 次以上測驗或遊戲', '🏅', 'quiz', 'common', 20, s => s.totalQuizzes >= 5),
  def('quiz-master', '加拿大達人', '累計完成 15 次以上測驗或遊戲', '🧠', 'quiz', 'uncommon', 40, s => s.totalQuizzes >= 15),
  def('all-games', '全能挑戰者', '四款互動遊戲各玩過至少一次', '🎮', 'quiz', 'rare', 50, s => s.gameTypesPlayed.length >= 4),
  def('diploma-ace', 'Diploma 王牌', '完成 Level 3 且最佳正確率達 80% 以上', '🎯', 'quiz', 'rare', 60, s => s.bestQuizScore >= 80 && s.level3Completed),
  def('night-owl', '深夜研究員', '深夜 23:00–05:00 學習 5 次', '🦉', 'time', 'uncommon', 15, s => s.nightTimeStudy >= 5),
  def('early-bird', '晨間品酒師', '清晨 05:00–08:00 學習 5 次', '🐦', 'time', 'uncommon', 15, s => s.earlyMorningStudy >= 5),
  def('streak-7', '一週不停', '連續 7 天學習', '📅', 'time', 'rare', 50, s => s.consecutiveDays >= 7),
  def('streak-30', '月度達人', '連續 30 天學習', '🗓️', 'time', 'epic', 150, s => s.consecutiveDays >= 30),
  def('first-note', '第一則筆記', '記錄第一則加拿大品飲筆記', '📝', 'special', 'common', 10, s => s.tastingNotesCount >= 1),
  def('tasting-notes', '品飲筆記達人', '記錄 5 則以上品飲筆記', '📔', 'special', 'uncommon', 30, s => s.tastingNotesCount >= 5),
  def('compare-notes', '冰與泡對飲', '各記錄至少一則冰酒與氣泡酒的品飲筆記', '⚖️', 'special', 'rare', 50,
    s => (s.tastingTypesList || []).includes('can_ice') && (s.tastingTypesList || []).includes('can_sparkling')),
  def('law-master', '法規掌握者', '完成 Level 2 並探索至少 6 個示意點', '📜', 'special', 'epic', 100, s => s.level2Completed && s.exploredRegions >= 6),
  def('collector', '成就收藏家', '解鎖 10 個以上成就', '💎', 'special', 'rare', 60, s => s.unlockedCount >= 10),
  def('grand-master', '加拿大大師', '解鎖 20 個以上成就', '🔱', 'special', 'legendary', 300, s => s.unlockedCount >= 20)
])

// ── 狀態 ───────────────────────────────────────────────────
export const canadaAchievementState = reactive({
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
    exploredGroupsList:  [],   // 產區群（ontario／bc／east）
    exploredTiersList:   [],   // 保留欄位（地圖不分層）
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
  unlockedAchievements: canadaAchievementState.unlockedAchievements,
  totalPoints: canadaAchievementState.totalPoints,
  newUnlocks: canadaAchievementState.newUnlocks,
  userStats: canadaAchievementState.userStats
}))

// ── 配置 ───────────────────────────────────────────────────
export const canadaAchievementConfig = {
  rarityColors: {
    common: '#9E9E9E', uncommon: '#4CAF50', rare: '#2196F3', epic: '#9C27B0', legendary: '#FF9800'
  },
  rarityNames: {
    common: '普通', uncommon: '優良', rare: '稀有', epic: '史詩', legendary: '傳說'
  },
  levelThresholds: [
    { level: 1, min: 0,    max: 49,   title: '冷涼氣候新芽',          icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: '冰酒初探者',      icon: '🌹' },
    { level: 3, min: 150,  max: 299,  title: 'Riesling 愛好者',   icon: '🍷' },
    { level: 4, min: 300,  max: 499,  title: '東西岸鑑賞者',    icon: '⛰️' },
    { level: 5, min: 500,  max: 799,  title: '次產區行家',          icon: '🏰' },
    { level: 6, min: 800,  max: 1199, title: '加拿大專家',      icon: '🏛️' },
    { level: 7, min: 1200, max: 1999, title: 'Diploma／CMS 衝刺者', icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '加拿大大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const canadaAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(canadaAchievementDefinitions).length
    return total ? Math.round((canadaAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(canadaAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (canadaAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ──────────────────────────────────────────────────
export class CanadaAchievementManager {
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
      const raw = localStorage.getItem(`canada-wine-academy-progress:${userId}`)
      if (!raw) return
      const data = JSON.parse(raw)
      const completed = data.completedLessons || []
      if (!completed.length) return

      const s = canadaAchievementState.userStats
      const count = n => completed.filter(id => id.startsWith(`can-l${n}-`)).length
      s.completedLessons = Math.max(s.completedLessons || 0, completed.length)
      s.level1Completed = s.level1Completed || count(1) >= LEVEL_LESSONS[1]
      s.level2Completed = s.level2Completed || count(2) >= LEVEL_LESSONS[2]
      s.level3Completed = s.level3Completed || count(3) >= LEVEL_LESSONS[3]
      s.totalProgress = Math.max(s.totalProgress || 0, Math.round(completed.length / TOTAL_LESSONS * 100))
      this._save()
      this._checkAll()
    } catch (e) { console.warn('[canada-ach] syncProgress error', e) }
  }

  _load() {
    const userId = authState.user?.id
    canadaAchievementState.unlockedAchievements = [...DEFAULT_SNAPSHOT.unlockedAchievements]
    canadaAchievementState.totalPoints = DEFAULT_SNAPSHOT.totalPoints
    canadaAchievementState.userStats = JSON.parse(JSON.stringify(DEFAULT_SNAPSHOT.userStats))
    if (!userId) return
    try {
      const raw = localStorage.getItem(canadaAchievementsStorageKey(userId))
      if (!raw) return
      const data = JSON.parse(raw)
      canadaAchievementState.unlockedAchievements = data.unlocked || []
      canadaAchievementState.totalPoints = data.totalPoints || 0
      canadaAchievementState.userStats = { ...canadaAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[canada-ach] load error', e) }
  }

  _save() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      localStorage.setItem(canadaAchievementsStorageKey(userId), JSON.stringify({
        unlocked:    canadaAchievementState.unlockedAchievements,
        totalPoints: canadaAchievementState.totalPoints,
        userStats:   canadaAchievementState.userStats
      }))
    } catch (e) { console.warn('[canada-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(canadaAchievementState.userStats, updates)
    canadaAchievementState.userStats.unlockedCount = canadaAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = canadaAchievementState.userStats
    // 解鎖會推高 unlockedCount，所以迴圈到沒有新解鎖為止
    let changed = true
    while (changed) {
      changed = false
      Object.values(canadaAchievementDefinitions).forEach(def => {
        if (canadaAchievementState.unlockedAchievements.includes(def.id)) return
        try {
          if (def.condition(stats)) {
            canadaAchievementState.unlockedAchievements.push(def.id)
            canadaAchievementState.totalPoints += def.points
            stats.unlockedCount = canadaAchievementState.unlockedAchievements.length
            newlyUnlocked.push(def)
            changed = true
          }
        } catch (_) { /* 條件讀取失敗時略過 */ }
      })
    }
    if (newlyUnlocked.length) {
      canadaAchievementState.newUnlocks.push(...newlyUnlocked)
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
    const s = canadaAchievementState.userStats
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
    const s = canadaAchievementState.userStats
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

  // id：示意點 id（CAN-PT-*）；zone：ontario／bc／east；tier：aoc／sub
  recordRegionExplored(id, zone, tier) {
    if (!id) return []
    const s = canadaAchievementState.userStats
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
    const s = canadaAchievementState.userStats
    const have = s.tastingTypesList || []
    const merged = [...new Set([...have, ...types])]
    if ((s.tastingNotesCount || 0) >= count && merged.length === have.length) return []
    return this.updateStats({ tastingNotesCount: Math.max(s.tastingNotesCount || 0, count), tastingTypesList: merged })
  }

  clearNewUnlocks() {
    canadaAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts = canadaAchievementState.totalPoints
    const thresholds = canadaAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return canadaAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(canadaAchievementDefinitions).map(a => ({ ...a, unlocked: this.isUnlocked(a.id) }))
  }

  getStats() {
    return {
      totalPoints:   canadaAchievementState.totalPoints,
      unlockedCount: canadaAchievementState.unlockedAchievements.length,
      totalCount:    Object.keys(canadaAchievementDefinitions).length,
      completionPct: canadaAchievementComputed.completionPercentage.value,
      userLevel:     this.getUserLevel()
    }
  }
}

export const globalCanadaAchievementManager = new CanadaAchievementManager()
