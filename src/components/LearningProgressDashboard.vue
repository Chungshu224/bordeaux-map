<template>
  <div class="lpd">

    <!-- ── 4 個統計卡片 ── -->
    <div class="lpd-stat-cards">
      <div
        v-for="stat in topStats"
        :key="stat.label"
        class="lpd-card"
        :class="stat.colorClass"
      >
        <div class="lpd-card-icon">{{ stat.icon }}</div>
        <div class="lpd-card-body">
          <div class="lpd-card-value">{{ stat.value }}</div>
          <div class="lpd-card-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- ── 各階段進度 ── -->
    <div class="lpd-levels-section">
      <h3 class="lpd-section-title">📊 各階段進度</h3>
      <div
        v-for="lv in levelProg"
        :key="lv.id"
        class="lpd-level-row"
      >
        <div class="lpd-level-info">
          <span class="lpd-level-icon">{{ lv.icon }}</span>
          <span class="lpd-level-name">{{ lv.name }}</span>
        </div>
        <div class="lpd-bar-wrap">
          <div class="lpd-bar-track">
            <div
              class="lpd-bar-fill"
              :style="{ width: `${lv.progress}%` }"
            ></div>
          </div>
          <span class="lpd-bar-pct">{{ lv.progress }}%</span>
        </div>
      </div>
    </div>

    <!-- ── 最近7天趨勢（僅波爾多有資料） ── -->
    <template v-if="hasWeeklyTrend && weeklyTrend">
      <div class="lpd-weekly-section">
        <h3 class="lpd-section-title">📈 最近 7 天學習趨勢</h3>
        <div class="lpd-trend-chart">
          <div
            v-for="day in weeklyTrend"
            :key="day.date"
            class="lpd-trend-col"
          >
            <div class="lpd-trend-bar-wrap">
              <div
                class="lpd-trend-bar-fill"
                :style="{ height: barHeight(day.studyTime) }"
              ></div>
            </div>
            <div class="lpd-trend-day">{{ day.dayName }}</div>
          </div>
        </div>
      </div>
    </template>

  </div>
</template>

<script setup>
import { useLearningProgress } from '../composables/useLearningProgress.js'

const props = defineProps({
  courseKey: { type: String, default: 'bordeaux' }
})

const { topStats, levelProg, weeklyTrend, hasWeeklyTrend } = useLearningProgress(props.courseKey)

function barHeight (studyTime) {
  if (!weeklyTrend?.value) return '4px'
  const maxTime = Math.max(...weeklyTrend.value.map(d => d.studyTime), 1)
  return `${Math.max((studyTime / maxTime) * 100, 2)}%`
}
</script>

<style scoped>
.lpd {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* ── 統計卡片 ───────────────────────────────── */
.lpd-stat-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 14px;
}

.lpd-card {
  border-radius: 12px;
  padding: 18px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  transition: transform 0.2s;
}
.lpd-card:hover { transform: translateY(-3px); }

.lpd-card-icon { font-size: 32px; flex-shrink: 0; }
.lpd-card-value { font-size: 26px; font-weight: 700; line-height: 1; }
.lpd-card-label { font-size: 12px; opacity: 0.88; margin-top: 4px; }

/* 卡片顏色 */
.col-overall { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.col-lessons { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.col-levels  { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: #1a4a33; }
.col-time    { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: #0b3a4f; }
.col-quiz    { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); color: #4a2a0b; }

/* ── 各階段進度 ──────────────────────────────── */
.lpd-levels-section {
  background: #fff;
  border-radius: 12px;
  padding: 20px 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
}

.lpd-section-title {
  margin: 0 0 16px 0;
  font-size: 17px;
  color: #333;
  font-weight: 600;
}

.lpd-level-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}
.lpd-level-row:last-child { margin-bottom: 0; }

.lpd-level-info {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 170px;
  flex-shrink: 0;
}
.lpd-level-icon { font-size: 20px; }
.lpd-level-name { font-size: 14px; color: #444; font-weight: 500; }

.lpd-bar-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
}

.lpd-bar-track {
  flex: 1;
  height: 10px;
  background: #e8e8ee;
  border-radius: 5px;
  overflow: hidden;
}

.lpd-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 5px;
  transition: width 0.5s ease;
  min-width: 2px;
}

.lpd-bar-pct {
  font-size: 13px;
  font-weight: 600;
  color: #555;
  min-width: 40px;
  text-align: right;
}

/* ── 週趨勢圖 ────────────────────────────────── */
.lpd-weekly-section {
  background: #fff;
  border-radius: 12px;
  padding: 20px 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
}

.lpd-trend-chart {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 120px;
  gap: 6px;
  border-bottom: 2px solid #eee;
  padding-bottom: 4px;
}

.lpd-trend-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  height: 100%;
  justify-content: flex-end;
}

.lpd-trend-bar-wrap {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-end;
}

.lpd-trend-bar-fill {
  width: 70%;
  margin: 0 auto;
  background: linear-gradient(to top, #667eea, #764ba2);
  border-radius: 3px 3px 0 0;
  min-height: 4px;
  transition: height 0.3s ease;
}

.lpd-trend-day {
  font-size: 11px;
  color: #888;
  padding-top: 6px;
}

/* ── 響應式 ─────────────────────────────────── */
@media (max-width: 600px) {
  .lpd { padding: 16px; gap: 16px; }
  .lpd-stat-cards { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .lpd-card { padding: 14px 12px; }
  .lpd-card-value { font-size: 22px; }
  .lpd-level-info { min-width: 130px; }
  .lpd-level-name { font-size: 12px; }
}
</style>
