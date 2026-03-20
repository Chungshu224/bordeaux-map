<template>
  <div class="learning-progress-dashboard">
    <!-- 標題 -->
    <div class="dashboard-header">
      <h2>📊 學習進度</h2>
      <div class="header-actions">
        <button @click="showDetailedStats = !showDetailedStats" class="toggle-btn">
          {{ showDetailedStats ? '簡化視圖' : '詳細統計' }}
        </button>
      </div>
    </div>

    <!-- 總體統計卡片 -->
    <div class="stats-cards">
      <div class="stat-card total-time">
        <div class="card-icon">⏱️</div>
        <div class="card-content">
          <div class="card-value">{{ overallStats.totalStudyTime }}</div>
          <div class="card-label">總學習時間</div>
        </div>
      </div>

      <div class="stat-card lessons-count">
        <div class="card-icon">📚</div>
        <div class="card-content">
          <div class="card-value">{{ overallStats.totalLessons }}</div>
          <div class="card-label">已學課程</div>
        </div>
      </div>

      <div class="stat-card quiz-accuracy">
        <div class="card-icon">🎯</div>
        <div class="card-content">
          <div class="card-value">{{ overallStats.quizAccuracy }}%</div>
          <div class="card-label">測驗正確率</div>
        </div>
      </div>

      <div class="stat-card study-streak">
        <div class="card-icon">🔥</div>
        <div class="card-content">
          <div class="card-value">{{ overallStats.studyStreak }}</div>
          <div class="card-label">連續學習天數</div>
        </div>
      </div>
    </div>

    <!-- 學習趨勢圖表 -->
    <div class="progress-section weekly-trend">
      <h3>📈 近7天學習趨勢</h3>
      <div class="trend-chart">
        <div 
          v-for="day in weeklyTrend" 
          :key="day.date"
          class="trend-bar"
          :class="{ 'has-activity': day.studyTime > 0 }"
        >
          <div 
            class="bar-fill" 
            :style="{ height: getBarHeight(day.studyTime) }"
            :title="`${day.studyTime}秒`"
          ></div>
          <div class="bar-label">{{ day.dayName }}</div>
        </div>
      </div>
      <div class="trend-legend">
        <span>每日學習時間分布</span>
      </div>
    </div>

    <!-- 詳細統計（可展開） -->
    <transition name="expand">
      <div v-if="showDetailedStats" class="detailed-stats">
        <!-- 學習模式分析 -->
        <div class="progress-section learning-patterns">
          <h3>🧠 學習模式分析</h3>
          <div class="patterns-grid">
            <div class="pattern-item">
              <span class="pattern-icon">🕐</span>
              <span class="pattern-label">偏好時段</span>
              <span class="pattern-value">{{ learningPatterns.preferredTime || '數據不足' }}</span>
            </div>
            <div class="pattern-item">
              <span class="pattern-icon">⏳</span>
              <span class="pattern-label">平均時長</span>
              <span class="pattern-value">{{ formatDuration(learningPatterns.averageSessionLength) }}</span>
            </div>
            <div class="pattern-item">
              <span class="pattern-icon">📊</span>
              <span class="pattern-label">總會話數</span>
              <span class="pattern-value">{{ overallStats.totalSessions }}</span>
            </div>
          </div>
        </div>

        <!-- 學習建議 -->
        <div v-if="recommendations.length > 0" class="progress-section recommendations">
          <h3>💡 學習建議</h3>
          <div class="recommendations-list">
            <div 
              v-for="(rec, index) in recommendations" 
              :key="index"
              class="recommendation-card"
              :class="`type-${rec.type}`"
            >
              <div class="rec-icon">{{ rec.icon }}</div>
              <div class="rec-content">
                <h4>{{ rec.title }}</h4>
                <p>{{ rec.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 最近學習記錄 -->
        <div class="progress-section recent-sessions">
          <h3>📝 最近學習記錄</h3>
          <div class="sessions-list">
            <div 
              v-for="session in recentSessions" 
              :key="session.id"
              class="session-item"
            >
              <div class="session-info">
                <div class="session-title">{{ session.lessonTitle }}</div>
                <div class="session-meta">
                  <span>{{ formatDate(session.startTime) }}</span>
                  <span>•</span>
                  <span>{{ formatDuration(session.duration) }}</span>
                  <span>•</span>
                  <span>{{ session.slidesViewed }} 投影片</span>
                </div>
              </div>
              <div v-if="session.quizzesAttempted > 0" class="session-quiz">
                <span class="quiz-badge">{{ session.quizAccuracy }}% 正確</span>
              </div>
            </div>
            <div v-if="recentSessions.length === 0" class="no-sessions">
              還沒有學習記錄，開始您的學習之旅吧！
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- 操作按鈕 -->
    <div class="dashboard-actions">
      <button @click="exportProgress" class="action-btn export">
        <span>💾</span> 匯出進度
      </button>
      <button @click="resetProgress" class="action-btn reset">
        <span>🔄</span> 重置進度
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { progressState, progressActions, progressComputed } from '../stores/progressTracker'

const showDetailedStats = ref(false)

// 總體統計
const overallStats = progressComputed.overallStats

// 每週趨勢
const weeklyTrend = progressComputed.weeklyTrend

// 學習模式
const learningPatterns = computed(() => progressState.learningPatterns)

// 學習建議
const recommendations = computed(() => progressActions.getLearningRecommendations())

// 最近的學習會話（最多顯示10個）
const recentSessions = computed(() => {
  return [...progressState.sessions].reverse().slice(0, 10)
})

// 計算柱狀圖高度（百分比）
const getBarHeight = (studyTime) => {
  const maxTime = Math.max(...weeklyTrend.value.map(d => d.studyTime), 1)
  return `${(studyTime / maxTime) * 100}%`
}

// 格式化時長
const formatDuration = (seconds) => {
  return progressActions.formatDuration(seconds)
}

// 格式化日期
const formatDate = (timestamp) => {
  const date = new Date(timestamp)
  const now = new Date()
  const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) return '今天'
  if (diffDays === 1) return '昨天'
  if (diffDays < 7) return `${diffDays}天前`
  
  return date.toLocaleDateString('zh-TW', { month: 'short', day: 'numeric' })
}

// 匯出進度
const exportProgress = () => {
  const data = progressActions.exportProgress()
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `bordeaux-progress-${new Date().toISOString().split('T')[0]}.json`
  a.click()
  URL.revokeObjectURL(url)
}

// 重置進度
const resetProgress = () => {
  if (confirm('確定要重置所有學習進度嗎？此操作無法撤銷。')) {
    progressActions.resetProgress()
  }
}
</script>

<style scoped>
.learning-progress-dashboard {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.dashboard-header h2 {
  margin: 0;
  font-size: 28px;
  color: #1a1a1a;
}

.toggle-btn {
  padding: 8px 16px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.toggle-btn:hover {
  background: #e0e0e0;
}

/* 統計卡片 */
.stats-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}

.stat-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.stat-card:hover {
  transform: translateY(-4px);
}

.stat-card.lessons-count {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.stat-card.quiz-accuracy {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.stat-card.study-streak {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

.card-icon {
  font-size: 36px;
}

.card-value {
  font-size: 28px;
  font-weight: bold;
  line-height: 1;
}

.card-label {
  font-size: 14px;
  opacity: 0.9;
  margin-top: 4px;
}

/* 進度區塊 */
.progress-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.progress-section h3 {
  margin: 0 0 20px 0;
  font-size: 20px;
  color: #333;
}

/* 趨勢圖表 */
.trend-chart {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 200px;
  gap: 8px;
  padding: 0 8px;
  border-bottom: 2px solid #e0e0e0;
}

.trend-bar {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.bar-fill {
  width: 100%;
  background: linear-gradient(to top, #667eea, #764ba2);
  border-radius: 4px 4px 0 0;
  min-height: 4px;
  transition: all 0.3s ease;
  opacity: 0.3;
}

.trend-bar.has-activity .bar-fill {
  opacity: 1;
}

.bar-label {
  font-size: 12px;
  color: #666;
  margin-top: 8px;
}

.trend-legend {
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  color: #666;
}

/* 學習模式 */
.patterns-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.pattern-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  gap: 8px;
}

.pattern-icon {
  font-size: 32px;
}

.pattern-label {
  font-size: 14px;
  color: #666;
}

.pattern-value {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

/* 建議卡片 */
.recommendations-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.recommendation-card {
  display: flex;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid;
  background: #f8f9fa;
}

.recommendation-card.type-duration {
  border-color: #4facfe;
  background: #e3f2fd;
}

.recommendation-card.type-quiz {
  border-color: #f5576c;
  background: #ffebee;
}

.recommendation-card.type-consistency {
  border-color: #fee140;
  background: #fffde7;
}

.rec-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.rec-content h4 {
  margin: 0 0 8px 0;
  font-size: 16px;
  color: #333;
}

.rec-content p {
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

/* 最近學習記錄 */
.sessions-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.session-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: background 0.2s;
}

.session-item:hover {
  background: #e9ecef;
}

.session-title {
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
}

.session-meta {
  font-size: 13px;
  color: #666;
  display: flex;
  gap: 8px;
}

.quiz-badge {
  padding: 4px 12px;
  background: #4caf50;
  color: white;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.no-sessions {
  text-align: center;
  padding: 32px;
  color: #999;
  font-style: italic;
}

/* 操作按鈕 */
.dashboard-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 24px;
}

.action-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}

.action-btn.export {
  background: #4caf50;
  color: white;
}

.action-btn.export:hover {
  background: #45a049;
}

.action-btn.reset {
  background: #f44336;
  color: white;
}

.action-btn.reset:hover {
  background: #da190b;
}

/* 展開動畫 */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  max-height: 2000px;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .learning-progress-dashboard {
    padding: 16px;
  }

  .stats-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .dashboard-header {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  .patterns-grid {
    grid-template-columns: 1fr;
  }
}
</style>
