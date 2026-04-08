<template>
  <div class="achievements-dashboard">
    <!-- 標題與統計摘要 -->
    <div class="dashboard-header">
      <div class="header-content">
        <h2>🏆 成就系統</h2>
        <p class="subtitle">追蹤您的學習里程碑</p>
      </div>
      <div class="level-badge" :class="`level-${userLevel.level}`">
        <div class="badge-icon">👑</div>
        <div class="badge-info">
          <div class="badge-level">Lv.{{ userLevel.level }}</div>
          <div class="badge-title">{{ userLevel.title }}</div>
        </div>
      </div>
    </div>

    <!-- 總體統計卡片 -->
    <div class="stats-overview">
      <div class="stat-card total-achievements">
        <div class="stat-icon">🎯</div>
        <div class="stat-content">
          <div class="stat-value">{{ unlockedCount }} / {{ totalCount }}</div>
          <div class="stat-label">已解鎖成就</div>
          <div class="stat-progress">
            <div class="progress-bar">
              <div 
                class="progress-fill" 
                :style="{ width: completionPercentage + '%' }"
              ></div>
            </div>
            <div class="progress-text">{{ completionPercentage }}%</div>
          </div>
        </div>
      </div>

      <div class="stat-card total-points">
        <div class="stat-icon">⭐</div>
        <div class="stat-content">
          <div class="stat-value">{{ totalPoints }}</div>
          <div class="stat-label">總成就點數</div>
        </div>
      </div>

      <div class="stat-card rarity-stats">
        <div class="stat-icon">💎</div>
        <div class="stat-content">
          <div class="stat-label">稀有度分布</div>
          <div class="rarity-bars">
            <div 
              v-for="(data, rarity) in rarityStats" 
              :key="rarity"
              class="rarity-bar"
              :class="`rarity-${rarity}`"
            >
              <span class="rarity-name">{{ rarityNames[rarity] }}</span>
              <span class="rarity-count">{{ data.unlocked }}/{{ data.total }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 分類過濾 -->
    <div class="category-filters">
      <button
        v-for="category in categories"
        :key="category.id"
        @click="selectedCategory = category.id"
        :class="['category-btn', { active: selectedCategory === category.id }]"
      >
        <span class="category-icon">{{ category.icon }}</span>
        <span class="category-name">{{ category.name }}</span>
      </button>
    </div>

    <!-- 成就網格 -->
    <div class="achievements-section">
      <div class="section-header">
        <h3>
          {{ selectedCategory === 'all' ? '所有成就' : categories.find(c => c.id === selectedCategory)?.name }}
        </h3>
        <div class="view-toggle">
          <button 
            @click="viewMode = 'grid'" 
            :class="{ active: viewMode === 'grid' }"
            aria-label="網格視圖"
          >
            ▦
          </button>
          <button 
            @click="viewMode = 'list'" 
            :class="{ active: viewMode === 'list' }"
            aria-label="列表視圖"
          >
            ☰
          </button>
        </div>
      </div>

      <div :class="['achievements-container', `view-${viewMode}`]">
        <div
          v-for="achievement in filteredAchievements"
          :key="achievement.id"
          :class="[
            'achievement-card',
            `rarity-${achievement.rarity}`,
            { unlocked: isUnlocked(achievement.id), locked: !isUnlocked(achievement.id) }
          ]"
          @click="showDetails(achievement)"
        >
          <div class="card-glow"></div>
          <div class="card-content">
            <div class="achievement-icon">{{ achievement.icon }}</div>
            <div class="achievement-info">
              <div class="achievement-header">
                <h4 class="achievement-title">{{ achievement.title }}</h4>
                <div class="achievement-rarity" :class="`rarity-${achievement.rarity}`">
                  {{ rarityNames[achievement.rarity] }}
                </div>
              </div>
              <p class="achievement-description">{{ achievement.description }}</p>
              <div class="achievement-footer">
                <div class="achievement-points">
                  <span class="points-icon">⭐</span>
                  <span>{{ achievement.points }} 點</span>
                </div>
                <div v-if="!isUnlocked(achievement.id)" class="achievement-progress">
                  <div class="progress-bar mini">
                    <div 
                      class="progress-fill" 
                      :style="{ width: getAchievementProgress(achievement) + '%' }"
                    ></div>
                  </div>
                  <span class="progress-text">{{ getAchievementProgress(achievement) }}%</span>
                </div>
                <div v-else class="unlocked-badge">
                  <span>✓</span> 已解鎖
                </div>
              </div>
            </div>
          </div>
          <div v-if="isUnlocked(achievement.id)" class="unlock-shine"></div>
        </div>
      </div>

      <!-- 空狀態 -->
      <div v-if="filteredAchievements.length === 0" class="empty-state">
        <div class="empty-icon">🔍</div>
        <p>此分類暫無成就</p>
      </div>
    </div>

    <!-- 即將達成的成就 -->
    <div v-if="nextAchievements.length > 0" class="next-achievements-section">
      <h3>🎯 即將達成</h3>
      <div class="next-achievements-list">
        <div
          v-for="achievement in nextAchievements"
          :key="achievement.id"
          class="next-achievement-item"
          @click="showDetails(achievement)"
        >
          <div class="item-icon">{{ achievement.icon }}</div>
          <div class="item-info">
            <div class="item-title">{{ achievement.title }}</div>
            <div class="item-progress-bar">
              <div 
                class="progress-fill" 
                :style="{ width: achievement.progress + '%' }"
              ></div>
            </div>
          </div>
          <div class="item-percentage">{{ Math.round(achievement.progress) }}%</div>
        </div>
      </div>
    </div>

    <!-- 成就詳情彈窗 -->
    <transition name="modal">
      <div v-if="selectedAchievement" class="modal-overlay" @click="closeDetails">
        <div class="achievement-modal" :class="`rarity-${selectedAchievement.rarity}`" @click.stop>
          <button class="modal-close" @click="closeDetails">×</button>
          
          <div class="modal-header">
            <div class="modal-icon">{{ selectedAchievement.icon }}</div>
            <h3>{{ selectedAchievement.title }}</h3>
            <div class="modal-rarity" :class="`rarity-${selectedAchievement.rarity}`">
              {{ rarityNames[selectedAchievement.rarity] }}
            </div>
          </div>

          <div class="modal-body">
            <p class="modal-description">{{ selectedAchievement.description }}</p>
            
            <div class="modal-stats">
              <div class="modal-stat">
                <span class="stat-label">分類</span>
                <span class="stat-value">{{ categoryNames[selectedAchievement.category] }}</span>
              </div>
              <div class="modal-stat">
                <span class="stat-label">點數</span>
                <span class="stat-value">{{ selectedAchievement.points }}</span>
              </div>
              <div class="modal-stat">
                <span class="stat-label">狀態</span>
                <span class="stat-value" :class="{ unlocked: isUnlocked(selectedAchievement.id) }">
                  {{ isUnlocked(selectedAchievement.id) ? '已解鎖 ✓' : '未解鎖' }}
                </span>
              </div>
            </div>

            <div v-if="!isUnlocked(selectedAchievement.id)" class="modal-progress">
              <div class="progress-label">完成進度</div>
              <div class="progress-bar">
                <div 
                  class="progress-fill" 
                  :style="{ width: getAchievementProgress(selectedAchievement) + '%' }"
                ></div>
              </div>
              <div class="progress-percentage">{{ getAchievementProgress(selectedAchievement) }}%</div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- 分享按鈕 -->
    <div class="share-fab-wrap">
      <button class="share-fab" :disabled="sharingAch" @click="shareAchievements">
        {{ sharingAch ? '⏳' : '🖼️ 分享成就卡' }}
      </button>
    </div>

    <!-- 成就分享卡 (隱藏，供截圖用) -->
    <div ref="achShareEl" class="ach-share-card">
      <div class="asc-header">
        <span class="asc-logo">🍷 波爾多葡萄酒學院</span>
        <span class="asc-sub">成就報告</span>
      </div>
      <div class="asc-level">
        <span class="asc-level-icon">👑</span>
        <div>
          <div class="asc-level-lv">Lv.{{ userLevel.level }}</div>
          <div class="asc-level-title">{{ userLevel.title }}</div>
        </div>
      </div>
      <div class="asc-stats">
        <div class="asc-stat">
          <div class="asc-stat-val">{{ unlockedCount }}/{{ totalCount }}</div>
          <div class="asc-stat-lbl">解鎖成就</div>
        </div>
        <div class="asc-stat">
          <div class="asc-stat-val">{{ totalPoints }}</div>
          <div class="asc-stat-lbl">成就點數</div>
        </div>
        <div class="asc-stat">
          <div class="asc-stat-val">{{ completionPercentage }}%</div>
          <div class="asc-stat-lbl">完成度</div>
        </div>
      </div>
      <div class="asc-badges">
        <span
          v-for="ach in unlockedAchievementList.slice(0, 18)"
          :key="ach.id"
          :title="ach.title"
          class="asc-badge">{{ ach.icon }}</span>
      </div>
      <div class="asc-footer">bordeaux-wine.academy · {{ new Date().toLocaleDateString('zh-TW') }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  achievementDefinitions, 
  achievementState, 
  achievementComputed,
  achievementConfig,
  globalAchievementManager
} from '../stores/achievementSystem'

// 響應式狀態
const selectedCategory = ref('all')
const viewMode = ref('grid')
const selectedAchievement = ref(null)

// ── Achievement share ──────────────────────────────────────────────
const achShareEl  = ref(null)
const sharingAch  = ref(false)

const shareAchievements = async () => {
  sharingAch.value = true
  try {
    const html2canvas = (await import('html2canvas')).default
    const canvas = await html2canvas(achShareEl.value, {
      scale: 2, useCORS: true, backgroundColor: '#FFF8F5', logging: false, scrollX: 0, scrollY: 0,
    })
    const blob = await new Promise(r => canvas.toBlob(r, 'image/png'))
    const file = new File([blob], 'achievements.png', { type: 'image/png' })
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ title: '我的成就報告', text: `我在波爾多葡萄酒學院解鎖了 ${unlockedCount.value} 個成就！`, files: [file] })
    } else {
      const url = URL.createObjectURL(blob)
      const a = Object.assign(document.createElement('a'), { href: url, download: 'achievements.png' })
      document.body.appendChild(a); a.click(); document.body.removeChild(a)
      setTimeout(() => URL.revokeObjectURL(url), 3000)
    }
  } catch(e) { if (e?.name !== 'AbortError') console.error(e) }
  finally { sharingAch.value = false }
}

// 分類定義
const categories = [
  { id: 'all', name: '全部', icon: '🌟' },
  { id: 'progress', name: '學習進度', icon: '📚' },
  { id: 'milestone', name: '里程碑', icon: '🏆' },
  { id: 'exploration', name: '地圖探索', icon: '🗺️' },
  { id: 'quiz', name: '測驗挑戰', icon: '🎯' },
  { id: 'knowledge', name: '知識掌握', icon: '🧠' },
  { id: 'social', name: '社交互動', icon: '🤝' },
  { id: 'special', name: '特殊成就', icon: '⭐' }
]

const categoryNames = {
  progress: '學習進度',
  milestone: '里程碑',
  exploration: '地圖探索',
  quiz: '測驗挑戰',
  knowledge: '知識掌握',
  social: '社交互動',
  special: '特殊成就'
}

// 稀有度名稱
const rarityNames = achievementConfig.rarityNames

// 計算屬性
const totalCount = computed(() => Object.keys(achievementDefinitions).length)
const unlockedCount = computed(() => achievementState.unlockedAchievements.length)
const totalPoints = computed(() => achievementState.totalPoints)
const completionPercentage = computed(() => achievementComputed.completionPercentage.value)
const rarityStats = computed(() => achievementComputed.rarityStats.value)
const nextAchievements = computed(() => achievementComputed.nextAchievements.value)

const userLevel = computed(() => globalAchievementManager.getUserLevel())

// 過濾成就
const filteredAchievements = computed(() => {
  const achievements = Object.values(achievementDefinitions)
  if (selectedCategory.value === 'all') {
    return achievements
  }
  return achievements.filter(a => a.category === selectedCategory.value)
})

const unlockedAchievementList = computed(() =>
  Object.values(achievementDefinitions).filter(a => achievementState.unlockedAchievements.includes(a.id))
)

// 方法
const isUnlocked = (achievementId) => {
  return achievementState.unlockedAchievements.includes(achievementId)
}

const getAchievementProgress = (achievement) => {
  // 使用 achievementSystem 中的計算函數
  const condition = achievement.condition.toString()
  
  if (condition.includes('completedLessons')) {
    const required = parseInt(condition.match(/\d+/)?.[0]) || 1
    return Math.min(Math.round((achievementState.userStats.completedLessons / required) * 100), 100)
  }
  
  if (condition.includes('exploredRegions')) {
    const required = parseInt(condition.match(/\d+/)?.[0]) || 1
    return Math.min(Math.round((achievementState.userStats.exploredRegions / required) * 100), 100)
  }
  
  return achievement.condition(achievementState.userStats) ? 100 : 0
}

const showDetails = (achievement) => {
  selectedAchievement.value = achievement
}

const closeDetails = () => {
  selectedAchievement.value = null
}
</script>

<style scoped>
.achievements-dashboard {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

/* 標題區域 */
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.header-content h2 {
  margin: 0;
  font-size: 32px;
  color: #1a1a1a;
}

.subtitle {
  margin: 4px 0 0;
  font-size: 16px;
  color: #666;
}

.level-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50px;
  color: white;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.badge-icon {
  font-size: 32px;
}

.badge-level {
  font-size: 18px;
  font-weight: bold;
}

.badge-title {
  font-size: 14px;
  opacity: 0.9;
}

/* 統計卡片 */
.stats-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 16px;
  align-items: flex-start;
  transition: transform 0.2s, box-shadow 0.2s;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.stat-icon {
  font-size: 40px;
  flex-shrink: 0;
}

.stat-content {
  flex: 1;
}

.stat-value {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
}

.stat-progress {
  margin-top: 12px;
}

.progress-bar {
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 4px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 12px;
  color: #999;
  text-align: right;
  display: block;
}

/* 稀有度條 */
.rarity-bars {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}

.rarity-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.rarity-bar.rarity-common { background: #f5f5f5; color: #757575; }
.rarity-bar.rarity-uncommon { background: #e8f5e9; color: #388e3c; }
.rarity-bar.rarity-rare { background: #e3f2fd; color: #1976d2; }
.rarity-bar.rarity-epic { background: #f3e5f5; color: #7b1fa2; }
.rarity-bar.rarity-legendary { background: #fff3e0; color: #f57c00; font-weight: bold; }

/* 分類過濾 */
.category-filters {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.category-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  transition: all 0.2s;
}

.category-btn:hover {
  border-color: #667eea;
  color: #667eea;
}

.category-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: #667eea;
  color: white;
}

.category-icon {
  font-size: 18px;
}

/* 成就區域 */
.achievements-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 32px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-header h3 {
  margin: 0;
  font-size: 20px;
  color: #333;
}

.view-toggle {
  display: flex;
  gap: 4px;
  background: #f5f5f5;
  border-radius: 6px;
  padding: 4px;
}

.view-toggle button {
  padding: 6px 12px;
  background: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  color: #666;
  transition: all 0.2s;
}

.view-toggle button.active {
  background: white;
  color: #667eea;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 成就網格 */
.achievements-container.view-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}

.achievements-container.view-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.achievement-card {
  position: relative;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s;
  overflow: hidden;
}

.achievement-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.achievement-card.locked {
  opacity: 0.6;
  filter: grayscale(50%);
}

.achievement-card.unlocked {
  border-color: #4caf50;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: #e0e0e0;
}

.achievement-card.rarity-common .card-glow { background: linear-gradient(90deg, #9e9e9e, #757575); }
.achievement-card.rarity-uncommon .card-glow { background: linear-gradient(90deg, #4caf50, #388e3c); }
.achievement-card.rarity-rare .card-glow { background: linear-gradient(90deg, #2196f3, #1976d2); }
.achievement-card.rarity-epic .card-glow { background: linear-gradient(90deg, #9c27b0, #7b1fa2); }
.achievement-card.rarity-legendary .card-glow { background: linear-gradient(90deg, #ff9800, #f57c00); }

.card-content {
  display: flex;
  gap: 16px;
}

.achievement-icon {
  font-size: 48px;
  flex-shrink: 0;
}

.achievement-info {
  flex: 1;
  min-width: 0;
}

.achievement-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 8px;
}

.achievement-title {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.achievement-rarity {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.achievement-rarity.rarity-common { background: #f5f5f5; color: #757575; }
.achievement-rarity.rarity-uncommon { background: #e8f5e9; color: #388e3c; }
.achievement-rarity.rarity-rare { background: #e3f2fd; color: #1976d2; }
.achievement-rarity.rarity-epic { background: #f3e5f5; color: #7b1fa2; }
.achievement-rarity.rarity-legendary { background: #fff3e0; color: #f57c00; }

.achievement-description {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}

.achievement-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.achievement-points {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 600;
  color: #4caf50;
}

.achievement-progress {
  display: flex;
  align-items: center;
  gap: 8px;
}

.progress-bar.mini {
  width: 80px;
  height: 6px;
}

.unlocked-badge {
  font-size: 12px;
  font-weight: 600;
  color: #4caf50;
  padding: 4px 12px;
  background: #e8f5e9;
  border-radius: 12px;
}

.unlock-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
  animation: shine 3s infinite;
}

@keyframes shine {
  to {
    left: 100%;
  }
}

/* 空狀態 */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #999;
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

/* 即將達成 */
.next-achievements-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.next-achievements-section h3 {
  margin: 0 0 16px 0;
  font-size: 20px;
  color: #333;
}

.next-achievements-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.next-achievement-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.next-achievement-item:hover {
  background: #e9ecef;
  transform: translateX(4px);
}

.item-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.item-info {
  flex: 1;
  min-width: 0;
}

.item-title {
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.item-progress-bar {
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  overflow: hidden;
}

.item-progress-bar .progress-fill {
  background: linear-gradient(90deg, #667eea, #764ba2);
}

.item-percentage {
  font-size: 16px;
  font-weight: bold;
  color: #667eea;
}

/* 彈窗 */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.achievement-modal {
  background: white;
  border-radius: 16px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  color: #666;
  transition: all 0.2s;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.2);
  transform: rotate(90deg);
}

.modal-header {
  padding: 40px 32px 24px;
  text-align: center;
  border-bottom: 2px solid #f0f0f0;
}

.modal-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.modal-header h3 {
  margin: 0 0 12px 0;
  font-size: 24px;
  color: #333;
}

.modal-rarity {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.modal-body {
  padding: 24px 32px 32px;
}

.modal-description {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin: 0 0 24px 0;
}

.modal-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.modal-stat {
  text-align: center;
}

.modal-stat .stat-label {
  display: block;
  font-size: 12px;
  color: #999;
  margin-bottom: 8px;
}

.modal-stat .stat-value {
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.modal-stat .stat-value.unlocked {
  color: #4caf50;
}

.modal-progress {
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
}

.progress-label {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
}

.modal-progress .progress-bar {
  height: 12px;
  margin-bottom: 8px;
}

.progress-percentage {
  text-align: right;
  font-size: 14px;
  font-weight: 600;
  color: #667eea;
}

/* 動畫 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter-active .achievement-modal,
.modal-leave-active .achievement-modal {
  transition: transform 0.3s, opacity 0.3s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .achievement-modal {
  transform: scale(0.9);
  opacity: 0;
}

.modal-leave-to .achievement-modal {
  transform: scale(0.9);
  opacity: 0;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .achievements-dashboard {
    padding: 16px;
  }

  .dashboard-header {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .stats-overview {
    grid-template-columns: 1fr;
  }

  .achievements-container.view-grid {
    grid-template-columns: 1fr;
  }

  .modal-stats {
    grid-template-columns: 1fr;
  }
}

/* ── Achievement share FAB & card ─────────────────────────────── */
.share-fab-wrap {
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 0.5rem;
}
.share-fab {
  padding: 0.6rem 1.5rem;
  background: linear-gradient(135deg, #c8a96e, #8b6914);
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 3px 12px rgba(200,169,110,0.35);
  transition: transform 0.15s, box-shadow 0.15s;
}
.share-fab:hover { transform: translateY(-2px); box-shadow: 0 5px 16px rgba(200,169,110,0.45); }
.share-fab:disabled { opacity: 0.6; cursor: default; transform: none; }

.ach-share-card {
  position: fixed; left: -9999px; top: 0; z-index: -1;
  width: 340px;
  background: linear-gradient(145deg, #1a0a2e, #2d1a0e);
  border-radius: 20px;
  padding: 1.4rem 1.2rem;
  font-family: 'Noto Serif TC', serif;
  color: white;
}
.asc-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
.asc-logo { font-size: 0.7rem; color: #c8a96e; font-weight: 600; }
.asc-sub { font-size: 0.65rem; color: rgba(255,255,255,0.5); }
.asc-level { display: flex; align-items: center; gap: 0.7rem; margin-bottom: 1rem; background: rgba(255,255,255,0.07); border-radius: 12px; padding: 0.7rem 0.9rem; }
.asc-level-icon { font-size: 1.8rem; }
.asc-level-lv { font-size: 1.2rem; font-weight: 700; color: #c8a96e; }
.asc-level-title { font-size: 0.75rem; color: rgba(255,255,255,0.6); }
.asc-stats { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
.asc-stat { flex: 1; text-align: center; background: rgba(255,255,255,0.07); border-radius: 10px; padding: 0.5rem 0; }
.asc-stat-val { font-size: 1.1rem; font-weight: 700; color: #c8a96e; }
.asc-stat-lbl { font-size: 0.62rem; color: rgba(255,255,255,0.5); }
.asc-badges { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.8rem; }
.asc-badge { font-size: 1.5rem; }
.asc-footer { text-align: center; font-size: 0.6rem; color: rgba(255,255,255,0.3); }
</style>
