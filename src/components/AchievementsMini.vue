<template>
  <div class="achievements-mini">
    <div class="mini-header">
      <h4>🏆 最近成就</h4>
      <button @click="$emit('show-all')" class="view-all-btn">查看全部 →</button>
    </div>

    <!-- 最近解鎖的成就 -->
    <div v-if="recentUnlocked.length > 0" class="recent-achievements">
      <div
        v-for="achievement in recentUnlocked"
        :key="achievement.id"
        class="achievement-mini-card"
        :class="`rarity-${achievement.rarity}`"
      >
        <div class="card-icon">{{ achievement.icon }}</div>
        <div class="card-info">
          <div class="card-title">{{ achievement.title }}</div>
          <div class="card-points">+{{ achievement.points }} 點</div>
        </div>
        <div class="unlock-badge">✓</div>
      </div>
    </div>

    <!-- 進度摘要 -->
    <div class="progress-summary">
      <div class="summary-item">
        <div class="summary-icon">🎯</div>
        <div class="summary-info">
          <div class="summary-value">{{ unlockedCount }}/{{ totalCount }}</div>
          <div class="summary-label">成就</div>
        </div>
      </div>

      <div class="summary-item">
        <div class="summary-icon">⭐</div>
        <div class="summary-info">
          <div class="summary-value">{{ totalPoints }}</div>
          <div class="summary-label">點數</div>
        </div>
      </div>

      <div class="summary-item">
        <div class="summary-icon">👑</div>
        <div class="summary-info">
          <div class="summary-value">Lv.{{ userLevel }}</div>
          <div class="summary-label">等級</div>
        </div>
      </div>
    </div>

    <!-- 即將解鎖 -->
    <div v-if="nextToUnlock" class="next-unlock">
      <div class="next-icon">{{ nextToUnlock.icon }}</div>
      <div class="next-info">
        <div class="next-title">即將解鎖</div>
        <div class="next-achievement">{{ nextToUnlock.title }}</div>
        <div class="next-progress">
          <div class="progress-bar">
            <div 
              class="progress-fill" 
              :style="{ width: nextToUnlock.progress + '%' }"
            ></div>
          </div>
          <span class="progress-text">{{ Math.round(nextToUnlock.progress) }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { 
  achievementDefinitions,
  achievementState,
  achievementComputed,
  globalAchievementManager
} from '../stores/achievementSystem'

defineEmits(['show-all'])

// 計算屬性
const totalCount = computed(() => Object.keys(achievementDefinitions).length)
const unlockedCount = computed(() => achievementState.unlockedAchievements.length)
const totalPoints = computed(() => achievementState.totalPoints)
const userLevel = computed(() => globalAchievementManager.getUserLevel().level)

// 最近解鎖的成就（最多3個）
const recentUnlocked = computed(() => {
  return achievementState.unlockedAchievements
    .slice(-3)
    .reverse()
    .map(id => achievementDefinitions[id])
    .filter(Boolean)
})

// 下一個最接近解鎖的成就
const nextToUnlock = computed(() => {
  const next = achievementComputed.nextAchievements.value
  return next && next.length > 0 ? next[0] : null
})
</script>

<style scoped>
.achievements-mini {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 20px;
  color: white;
}

.mini-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.mini-header h4 {
  margin: 0;
  font-size: 18px;
}

.view-all-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
}

.view-all-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* 最近成就 */
.recent-achievements {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}

.achievement-mini-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.15);
  padding: 12px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  border-left: 4px solid;
  transition: all 0.2s;
}

.achievement-mini-card:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateX(4px);
}

.achievement-mini-card.rarity-common { border-left-color: #9e9e9e; }
.achievement-mini-card.rarity-uncommon { border-left-color: #4caf50; }
.achievement-mini-card.rarity-rare { border-left-color: #2196f3; }
.achievement-mini-card.rarity-epic { border-left-color: #9c27b0; }
.achievement-mini-card.rarity-legendary { border-left-color: #ff9800; }

.card-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.card-info {
  flex: 1;
  min-width: 0;
}

.card-title {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-points {
  font-size: 12px;
  opacity: 0.9;
}

.unlock-badge {
  font-size: 18px;
  opacity: 0.8;
}

/* 進度摘要 */
.progress-summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 16px;
}

.summary-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 12px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.summary-icon {
  font-size: 28px;
  margin-bottom: 8px;
}

.summary-value {
  font-size: 20px;
  font-weight: bold;
  line-height: 1;
}

.summary-label {
  font-size: 12px;
  opacity: 0.9;
  margin-top: 4px;
}

/* 即將解鎖 */
.next-unlock {
  display: flex;
  gap: 12px;
  background: rgba(255, 255, 255, 0.2);
  padding: 16px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.next-icon {
  font-size: 40px;
  flex-shrink: 0;
  opacity: 0.6;
  filter: grayscale(50%);
}

.next-info {
  flex: 1;
  min-width: 0;
}

.next-title {
  font-size: 12px;
  opacity: 0.8;
  margin-bottom: 4px;
}

.next-achievement {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

.next-progress {
  display: flex;
  align-items: center;
  gap: 8px;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: white;
  border-radius: 3px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 12px;
  font-weight: 600;
  min-width: 35px;
  text-align: right;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .progress-summary {
    grid-template-columns: 1fr;
  }
}
</style>
