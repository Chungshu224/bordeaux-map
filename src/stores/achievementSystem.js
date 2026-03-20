// 成就系統管理
import { reactive, computed } from 'vue'

// 成就定義
export const achievementDefinitions = {
  // 學習進度成就
  'first-lesson': {
    id: 'first-lesson',
    title: '初次學習',
    description: '完成第一個課程',
    icon: '🎯',
    category: 'progress',
    rarity: 'common',
    points: 10,
    condition: (stats) => stats.completedLessons >= 1
  },
  
  'level-1-complete': {
    id: 'level-1-complete',
    title: 'Level 1 認證',
    description: '完成所有Level 1課程',
    icon: '🥉',
    category: 'milestone',
    rarity: 'uncommon',
    points: 50,
    condition: (stats) => stats.level1Completed
  },

  'level-2-complete': {
    id: 'level-2-complete',
    title: 'Level 2 認證',
    description: '完成所有Level 2課程',
    icon: '🥈',
    category: 'milestone',
    rarity: 'rare',
    points: 100,
    condition: (stats) => stats.level2Completed
  },

  'level-3-complete': {
    id: 'level-3-complete',
    title: 'Level 3 認證',
    description: '完成所有Level 3課程',
    icon: '🥇',
    category: 'milestone',
    rarity: 'epic',
    points: 200,
    condition: (stats) => stats.level3Completed
  },

  'master-sommelier': {
    id: 'master-sommelier',
    title: '大師級侍酒師',
    description: '完成所有Level 4課程',
    icon: '👑',
    category: 'milestone',
    rarity: 'legendary',
    points: 500,
    condition: (stats) => stats.level4Completed
  },

  // 地圖探索成就
  'first-region': {
    id: 'first-region',
    title: '初次探索',
    description: '探索第一個波爾多產區',
    icon: '🗺️',
    category: 'exploration',
    rarity: 'common',
    points: 5,
    condition: (stats) => stats.exploredRegions >= 1
  },

  'left-bank-explorer': {
    id: 'left-bank-explorer',
    title: '左岸探索者',
    description: '探索所有左岸主要產區',
    icon: '🏰',
    category: 'exploration',
    rarity: 'uncommon',
    points: 30,
    condition: (stats) => {
      const leftBankRegions = ['margaux', 'pauillac', 'st-julien', 'st-estephe', 'graves', 'pessac-leognan']
      return leftBankRegions.every(region => stats.exploredRegionsList.includes(region))
    }
  },

  'right-bank-specialist': {
    id: 'right-bank-specialist',
    title: '右岸專家',
    description: '深度探索右岸產區',
    icon: '🍇',
    category: 'exploration',
    rarity: 'uncommon',
    points: 30,
    condition: (stats) => {
      const rightBankRegions = ['pomerol', 'st-emilion', 'fronsac', 'canon-fronsac']
      return rightBankRegions.every(region => stats.exploredRegionsList.includes(region))
    }
  },

  'complete-explorer': {
    id: 'complete-explorer',
    title: '完美探索者',
    description: '探索所有波爾多產區',
    icon: '🌟',
    category: 'exploration',
    rarity: 'rare',
    points: 75,
    condition: (stats) => stats.exploredRegions >= 30
  },

  // 測驗成就
  'perfect-score': {
    id: 'perfect-score',
    title: '完美得分',
    description: '在任意測驗中獲得100分',
    icon: '💯',
    category: 'quiz',
    rarity: 'rare',
    points: 25,
    condition: (stats) => stats.perfectScores >= 1
  },

  'quiz-master': {
    id: 'quiz-master',
    title: '測驗大師',
    description: '連續10次測驗獲得90分以上',
    icon: '🧠',
    category: 'quiz',
    rarity: 'epic',
    points: 100,
    condition: (stats) => stats.consecutiveHighScores >= 10
  },

  'speed-learner': {
    id: 'speed-learner',
    title: '快速學習者',
    description: '在3分鐘內完成一次測驗並獲得80分以上',
    icon: '⚡',
    category: 'quiz',
    rarity: 'uncommon',
    points: 20,
    condition: (stats) => stats.speedTestCompleted
  },

  // 知識掌握成就
  'grape-expert': {
    id: 'grape-expert',
    title: '葡萄品種專家',
    description: '正確識別所有主要波爾多葡萄品種',
    icon: '🍇',
    category: 'knowledge',
    rarity: 'uncommon',
    points: 40,
    condition: (stats) => stats.grapeVarietiesCorrect >= 8
  },

  'terroir-analyst': {
    id: 'terroir-analyst',
    title: '風土分析師',
    description: '完成10次產區比較分析',
    icon: '🧪',
    category: 'knowledge',
    rarity: 'rare',
    points: 60,
    condition: (stats) => stats.terriorAnalysis >= 10
  },

  'vintage-scholar': {
    id: 'vintage-scholar',
    title: '年份學者',
    description: '掌握波爾多重要年份知識',
    icon: '📚',
    category: 'knowledge',
    rarity: 'epic',
    points: 80,
    condition: (stats) => stats.vintageKnowledge >= 15
  },

  // 互動成就
  'social-learner': {
    id: 'social-learner',
    title: '社交學習者',
    description: '與其他學習者進行5次知識交流',
    icon: '🤝',
    category: 'social',
    rarity: 'uncommon',
    points: 15,
    condition: (stats) => stats.socialInteractions >= 5
  },

  'mentor': {
    id: 'mentor',
    title: '知識導師',
    description: '幫助其他學習者解答問題10次',
    icon: '🎓',
    category: 'social',
    rarity: 'rare',
    points: 50,
    condition: (stats) => stats.helpedOthers >= 10
  },

  // 時間成就
  'night-owl': {
    id: 'night-owl',
    title: '夜貓子學者',
    description: '在深夜時段(23:00-05:00)完成學習',
    icon: '🦉',
    category: 'time',
    rarity: 'uncommon',
    points: 15,
    condition: (stats) => stats.nightTimeStudy >= 5
  },

  'early-bird': {
    id: 'early-bird',
    title: '早起的鳥兒',
    description: '在早晨時段(05:00-08:00)開始學習',
    icon: '🐦',
    category: 'time',
    rarity: 'uncommon',
    points: 15,
    condition: (stats) => stats.earlyMorningStudy >= 5
  },

  'dedication': {
    id: 'dedication',
    title: '堅持不懈',
    description: '連續7天進行學習',
    icon: '📅',
    category: 'time',
    rarity: 'rare',
    points: 35,
    condition: (stats) => stats.consecutiveDays >= 7
  },

  'marathon-learner': {
    id: 'marathon-learner',
    title: '馬拉松學習者',
    description: '單次學習超過3小時',
    icon: '🏃‍♂️',
    category: 'time',
    rarity: 'epic',
    points: 45,
    condition: (stats) => stats.longestSession >= 180 // 分鐘
  },

  // 特殊成就
  'wine-connoisseur': {
    id: 'wine-connoisseur',
    title: '葡萄酒鑑賞家',
    description: '完成所有餐酒搭配練習',
    icon: '🍷',
    category: 'special',
    rarity: 'epic',
    points: 100,
    condition: (stats) => stats.foodPairingCompleted
  },

  'investment-guru': {
    id: 'investment-guru',
    title: '投資大師',
    description: '正確預測5個酒莊的市場趨勢',
    icon: '📈',
    category: 'special',
    rarity: 'legendary',
    points: 150,
    condition: (stats) => stats.correctMarketPredictions >= 5
  },

  'bordeaux-ambassador': {
    id: 'bordeaux-ambassador',
    title: '波爾多大使',
    description: '完成所有課程並保持90%以上平均分',
    icon: '🏆',
    category: 'special',
    rarity: 'legendary',
    points: 300,
    condition: (stats) => stats.allCoursesCompleted && stats.averageScore >= 90
  }
}

// 成就狀態管理
export const achievementState = reactive({
  unlockedAchievements: [],
  totalPoints: 0,
  userStats: {
    // 學習進度統計
    completedLessons: 0,
    level1Completed: false,
    level2Completed: false,
    level3Completed: false,
    level4Completed: false,
    allCoursesCompleted: false,
    averageScore: 0,
    
    // 地圖探索統計
    exploredRegions: 0,
    exploredRegionsList: [],
    
    // 測驗統計
    totalQuizzes: 0,
    perfectScores: 0,
    consecutiveHighScores: 0,
    speedTestCompleted: false,
    
    // 知識掌握統計
    grapeVarietiesCorrect: 0,
    terriorAnalysis: 0,
    vintageKnowledge: 0,
    
    // 社交統計
    socialInteractions: 0,
    helpedOthers: 0,
    
    // 時間統計
    nightTimeStudy: 0,
    earlyMorningStudy: 0,
    consecutiveDays: 0,
    longestSession: 0,
    
    // 特殊統計
    foodPairingCompleted: false,
    correctMarketPredictions: 0
  },
  newAchievements: [], // 新解鎖的成就列表
  displayQueue: []     // 待顯示的成就通知隊列
})

// 成就系統配置
export const achievementConfig = {
  rarityColors: {
    common: '#9E9E9E',
    uncommon: '#4CAF50',
    rare: '#2196F3',
    epic: '#9C27B0',
    legendary: '#FF9800'
  },
  
  rarityNames: {
    common: '普通',
    uncommon: '優良',
    rare: '稀有',
    epic: '史詩',
    legendary: '傳說'
  },
  
  categories: {
    progress: { name: '學習進度', icon: '📚', color: '#4CAF50' },
    milestone: { name: '里程碑', icon: '🏁', color: '#FF9800' },
    exploration: { name: '探索發現', icon: '🗺️', color: '#2196F3' },
    quiz: { name: '測驗表現', icon: '🧠', color: '#9C27B0' },
    knowledge: { name: '知識掌握', icon: '🎓', color: '#607D8B' },
    social: { name: '社交互動', icon: '👥', color: '#E91E63' },
    time: { name: '時間管理', icon: '⏰', color: '#795548' },
    special: { name: '特殊成就', icon: '⭐', color: '#FFD700' }
  },
  
  // 通知設定
  notification: {
    duration: 5000, // 5秒
    maxQueue: 3,    // 最多同時顯示3個通知
    animationDuration: 500 // 動畫持續時間
  }
}

// 計算屬性
export const achievementComputed = {
  // 總成就數量
  totalAchievements: computed(() => Object.keys(achievementDefinitions).length),
  
  // 已解鎖成就數量
  unlockedCount: computed(() => achievementState.unlockedAchievements.length),
  
  // 完成百分比
  completionPercentage: computed(() => {
    return Math.round((achievementComputed.unlockedCount.value / achievementComputed.totalAchievements.value) * 100)
  }),
  
  // 按分類統計
  categoryStats: computed(() => {
    const stats = {}
    Object.values(achievementConfig.categories).forEach(category => {
      stats[category.name] = {
        total: 0,
        unlocked: 0,
        points: 0
      }
    })
    
    Object.values(achievementDefinitions).forEach(achievement => {
      const categoryName = achievementConfig.categories[achievement.category].name
      stats[categoryName].total++
      
      if (achievementState.unlockedAchievements.includes(achievement.id)) {
        stats[categoryName].unlocked++
        stats[categoryName].points += achievement.points
      }
    })
    
    return stats
  }),
  
  // 按稀有度統計
  rarityStats: computed(() => {
    const stats = {}
    Object.keys(achievementConfig.rarityNames).forEach(rarity => {
      stats[rarity] = {
        total: 0,
        unlocked: 0,
        points: 0
      }
    })
    
    Object.values(achievementDefinitions).forEach(achievement => {
      stats[achievement.rarity].total++
      
      if (achievementState.unlockedAchievements.includes(achievement.id)) {
        stats[achievement.rarity].unlocked++
        stats[achievement.rarity].points += achievement.points
      }
    })
    
    return stats
  }),
  
  // 下一個可達成的成就
  nextAchievements: computed(() => {
    return Object.values(achievementDefinitions)
      .filter(achievement => !achievementState.unlockedAchievements.includes(achievement.id))
      .map(achievement => {
        const progress = calculateAchievementProgress(achievement, achievementState.userStats)
        return { ...achievement, progress }
      })
      .sort((a, b) => b.progress - a.progress)
      .slice(0, 5)
  })
}

// 成就管理類
export class AchievementManager {
  constructor() {
    this.checkInterval = null
  }

  // 初始化
  init() {
    this.loadAchievements()
    this.startPeriodicCheck()
  }

  // 載入已解鎖的成就
  loadAchievements() {
    const saved = localStorage.getItem('bordeaux-wine-academy-achievements')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        achievementState.unlockedAchievements = data.unlocked || []
        achievementState.totalPoints = data.totalPoints || 0
        achievementState.userStats = { ...achievementState.userStats, ...data.userStats }
      } catch (error) {
        console.error('Failed to load achievements:', error)
      }
    }
  }

  // 儲存成就資料
  saveAchievements() {
    const data = {
      unlocked: achievementState.unlockedAchievements,
      totalPoints: achievementState.totalPoints,
      userStats: achievementState.userStats
    }
    localStorage.setItem('bordeaux-wine-academy-achievements', JSON.stringify(data))
  }

  // 更新使用者統計
  updateStats(updates) {
    Object.assign(achievementState.userStats, updates)
    this.checkAchievements()
    this.saveAchievements()
  }

  // 檢查成就
  checkAchievements() {
    const newlyUnlocked = []
    
    Object.values(achievementDefinitions).forEach(achievement => {
      if (!achievementState.unlockedAchievements.includes(achievement.id)) {
        if (achievement.condition(achievementState.userStats)) {
          this.unlockAchievement(achievement.id)
          newlyUnlocked.push(achievement.id)
        }
      }
    })
    
    if (newlyUnlocked.length > 0) {
      achievementState.newAchievements = newlyUnlocked
      this.queueNotifications(newlyUnlocked)
    }
  }

  // 解鎖成就
  unlockAchievement(achievementId) {
    const achievement = achievementDefinitions[achievementId]
    if (achievement && !achievementState.unlockedAchievements.includes(achievementId)) {
      achievementState.unlockedAchievements.push(achievementId)
      achievementState.totalPoints += achievement.points
      
      // 觸發解鎖事件
      this.onAchievementUnlocked(achievement)
    }
  }

  // 成就解鎖事件處理
  onAchievementUnlocked(achievement) {
    console.log(`Achievement unlocked: ${achievement.title}`)
    
    // 可以在這裡添加音效、動畫等
    this.playUnlockSound(achievement.rarity)
  }

  // 播放解鎖音效
  playUnlockSound(rarity) {
    // 根據稀有度播放不同音效
    const soundFiles = {
      common: '/sounds/achievement-common.mp3',
      uncommon: '/sounds/achievement-uncommon.mp3',
      rare: '/sounds/achievement-rare.mp3',
      epic: '/sounds/achievement-epic.mp3',
      legendary: '/sounds/achievement-legendary.mp3'
    }
    
    try {
      const audio = new Audio(soundFiles[rarity] || soundFiles.common)
      audio.volume = 0.5
      audio.play().catch(() => {
        // 忽略自動播放限制錯誤
      })
    } catch (error) {
      console.log('Could not play achievement sound:', error)
    }
  }

  // 將通知加入隊列
  queueNotifications(achievementIds) {
    achievementIds.forEach(id => {
      const achievement = achievementDefinitions[id]
      if (achievement) {
        achievementState.displayQueue.push({
          id: achievement.id,
          title: achievement.title,
          description: achievement.description,
          icon: achievement.icon,
          rarity: achievement.rarity,
          points: achievement.points,
          timestamp: Date.now()
        })
      }
    })
    
    this.processNotificationQueue()
  }

  // 處理通知隊列
  processNotificationQueue() {
    const maxDisplay = achievementConfig.notification.maxQueue
    
    if (achievementState.displayQueue.length > 0) {
      // 限制同時顯示的通知數量
      const toShow = achievementState.displayQueue.splice(0, maxDisplay)
      
      toShow.forEach((notification, index) => {
        setTimeout(() => {
          this.showNotification(notification)
        }, index * 200) // 錯開顯示時間
      })
    }
  }

  // 顯示通知
  showNotification(notification) {
    const event = new CustomEvent('achievementNotification', {
      detail: notification
    })
    window.dispatchEvent(event)
    
    // 自動移除通知
    setTimeout(() => {
      this.removeNotification(notification.id)
    }, achievementConfig.notification.duration)
  }

  // 移除通知
  removeNotification(notificationId) {
    const event = new CustomEvent('removeAchievementNotification', {
      detail: { id: notificationId }
    })
    window.dispatchEvent(event)
  }

  // 開始定期檢查
  startPeriodicCheck() {
    // 每30秒檢查一次成就
    this.checkInterval = setInterval(() => {
      this.checkAchievements()
    }, 30000)
  }

  // 停止定期檢查
  stopPeriodicCheck() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval)
      this.checkInterval = null
    }
  }

  // 手動觸發成就檢查
  manualCheck() {
    this.checkAchievements()
  }

  // 重置所有成就（開發用）
  resetAllAchievements() {
    achievementState.unlockedAchievements = []
    achievementState.totalPoints = 0
    achievementState.userStats = {
      completedLessons: 0,
      level1Completed: false,
      level2Completed: false,
      level3Completed: false,
      level4Completed: false,
      allCoursesCompleted: false,
      averageScore: 0,
      exploredRegions: 0,
      exploredRegionsList: [],
      totalQuizzes: 0,
      perfectScores: 0,
      consecutiveHighScores: 0,
      speedTestCompleted: false,
      grapeVarietiesCorrect: 0,
      terriorAnalysis: 0,
      vintageKnowledge: 0,
      socialInteractions: 0,
      helpedOthers: 0,
      nightTimeStudy: 0,
      earlyMorningStudy: 0,
      consecutiveDays: 0,
      longestSession: 0,
      foodPairingCompleted: false,
      correctMarketPredictions: 0
    }
    this.saveAchievements()
  }

  // 獲取成就詳情
  getAchievementDetail(achievementId) {
    return achievementDefinitions[achievementId]
  }

  // 檢查特定成就是否已解鎖
  isAchievementUnlocked(achievementId) {
    return achievementState.unlockedAchievements.includes(achievementId)
  }

  // 獲取用戶排行榜資料
  getLeaderboardData() {
    return {
      totalPoints: achievementState.totalPoints,
      unlockedCount: achievementState.unlockedAchievements.length,
      completionPercentage: achievementComputed.completionPercentage.value,
      level: this.getUserLevel(),
      badges: this.getUserBadges()
    }
  }

  // 計算用戶等級
  getUserLevel() {
    const points = achievementState.totalPoints
    if (points >= 1000) return { level: 10, title: '傳說大師' }
    if (points >= 750) return { level: 9, title: '史詩專家' }
    if (points >= 500) return { level: 8, title: '資深學者' }
    if (points >= 350) return { level: 7, title: '進階學習者' }
    if (points >= 250) return { level: 6, title: '熟練學生' }
    if (points >= 150) return { level: 5, title: '積極學習者' }
    if (points >= 100) return { level: 4, title: '勤奮學生' }
    if (points >= 50) return { level: 3, title: '努力學習者' }
    if (points >= 25) return { level: 2, title: '初級學生' }
    return { level: 1, title: '新手學習者' }
  }

  // 獲取用戶徽章
  getUserBadges() {
    const badges = []
    const stats = achievementState.userStats
    
    if (stats.level4Completed) badges.push({ id: 'master', name: '大師', icon: '👑' })
    if (stats.level3Completed) badges.push({ id: 'expert', name: '專家', icon: '🥇' })
    if (stats.perfectScores >= 5) badges.push({ id: 'perfectionist', name: '完美主義者', icon: '💯' })
    if (stats.exploredRegions >= 20) badges.push({ id: 'explorer', name: '探索家', icon: '🗺️' })
    
    return badges
  }
}

// 工具函數：計算成就進度
function calculateAchievementProgress(achievement, userStats) {
  // 根據不同成就類型計算進度百分比
  const condition = achievement.condition.toString()
  
  // 簡化的進度計算邏輯
  if (condition.includes('completedLessons')) {
    const required = parseInt(condition.match(/\d+/)?.[0]) || 1
    return Math.min((userStats.completedLessons / required) * 100, 100)
  }
  
  if (condition.includes('exploredRegions')) {
    const required = parseInt(condition.match(/\d+/)?.[0]) || 1
    return Math.min((userStats.exploredRegions / required) * 100, 100)
  }
  
  if (condition.includes('perfectScores')) {
    const required = parseInt(condition.match(/\d+/)?.[0]) || 1
    return Math.min((userStats.perfectScores / required) * 100, 100)
  }
  
  // 預設返回0或100（已完成或未完成）
  return achievement.condition(userStats) ? 100 : 0
}

// 創建全域成就管理器實例
export const globalAchievementManager = new AchievementManager()