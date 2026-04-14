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

    <!-- ── 分享按鈕 ── -->
    <div class="lpd-share-wrap">
      <button class="lpd-share-btn" :disabled="sharing" @click="shareCard">
        {{ sharing ? '⏳ 產生中…' : '🖼️ 分享學習進度' }}
      </button>
    </div>

    <!-- ── 隱藏分享卡（供截圖） ── -->
    <div ref="shareEl" class="lpd-share-card" aria-hidden="true">
      <!-- 標頭 -->
      <div class="lpd-sc-header">
        <span class="lpd-sc-logo">{{ COURSE_LABEL[courseKey] || '🍷 葡萄酒學院' }}</span>
        <span class="lpd-sc-tag">學習進度</span>
      </div>

      <!-- 使用者個人資訊 -->
      <div class="lpd-sc-user">
        <div class="lpd-sc-avatar-wrap">
          <img v-if="userProfile.avatarUrl" :src="userProfile.avatarUrl" crossorigin="anonymous" class="lpd-sc-avatar-img" />
          <div v-else class="lpd-sc-avatar-initial">{{ userProfile.initial }}</div>
        </div>
        <div class="lpd-sc-user-info">
          <div class="lpd-sc-user-name">{{ userProfile.displayName }}</div>
          <div v-if="userProfile.bio" class="lpd-sc-user-bio">{{ userProfile.bio }}</div>
        </div>
      </div>

      <!-- 統計數據 -->
      <div class="lpd-sc-stats">
        <div v-for="stat in topStats" :key="stat.label" class="lpd-sc-stat">
          <div class="lpd-sc-stat-icon">{{ stat.icon }}</div>
          <div class="lpd-sc-stat-val">{{ stat.value }}</div>
          <div class="lpd-sc-stat-lbl">{{ stat.label }}</div>
        </div>
      </div>

      <!-- 各階段進度 -->
      <div class="lpd-sc-levels">
        <div v-for="lv in levelProg" :key="lv.id" class="lpd-sc-level-row">
          <span class="lpd-sc-lv-icon">{{ lv.icon }}</span>
          <span class="lpd-sc-lv-name">{{ lv.name }}</span>
          <div class="lpd-sc-lv-bar">
            <div class="lpd-sc-lv-fill" :style="{ width: lv.progress + '%' }"></div>
          </div>
          <span class="lpd-sc-lv-pct">{{ lv.progress }}%</span>
        </div>
      </div>

      <!-- 頁尾 -->
      <div class="lpd-sc-footer">bordeaux-wine.academy &middot; {{ new Date().toLocaleDateString('zh-TW') }}</div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useLearningProgress } from '../composables/useLearningProgress.js'
import { authState } from '../stores/authStore.js'
import { supabase } from '../lib/supabaseClient.js'

const props = defineProps({
  courseKey: { type: String, default: 'bordeaux' }
})

const { topStats, levelProg, weeklyTrend, hasWeeklyTrend } = useLearningProgress(props.courseKey)

const COURSE_LABEL = { bordeaux: '🍷 波爾多葡萄酒學院', bourgogne: '🍇 布根地葡萄酒學院', italy: '🍾 義大利葡萄酒學院' }

function barHeight (studyTime) {
  if (!weeklyTrend?.value) return '4px'
  const maxTime = Math.max(...weeklyTrend.value.map(d => d.studyTime), 1)
  return `${Math.max((studyTime / maxTime) * 100, 2)}%`
}

// ── 使用者個人資料（分享卡用）────────────────────────────────
const userProfile = ref({ displayName: '', bio: '', avatarUrl: '', initial: '？' })
const sharing     = ref(false)
const shareEl     = ref(null)

async function loadUserProfile() {
  const user = authState.user
  if (!user) {
    userProfile.value = { displayName: '訪客', bio: '', avatarUrl: '', initial: '訪' }
    return
  }
  const fallbackName = user.user_metadata?.full_name || user.email?.split('@')[0] || '學員'
  userProfile.value.displayName = fallbackName
  userProfile.value.initial = [...fallbackName][0] || '？'
  if (supabase) {
    const { data } = await supabase
      .from('profiles')
      .select('display_name, bio, avatar_url')
      .eq('id', user.id)
      .single()
    if (data) {
      if (data.display_name) userProfile.value.displayName = data.display_name
      userProfile.value.bio       = data.bio || ''
      userProfile.value.avatarUrl = data.avatar_url || ''
      userProfile.value.initial   = [...userProfile.value.displayName][0] || '？'
    }
  }
}

onMounted(() => { loadUserProfile() })

async function shareCard() {
  sharing.value = true
  try {
    const html2canvas = (await import('html2canvas')).default
    const canvas = await html2canvas(shareEl.value, {
      scale: 2, useCORS: true, backgroundColor: '#f8f6ff',
      logging: false, scrollX: 0, scrollY: 0
    })
    const blob = await new Promise(r => canvas.toBlob(r, 'image/png'))
    const file = new File([blob], 'learning-progress.png', { type: 'image/png' })
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({
        title: '我的學習進度',
        text: `我在${COURSE_LABEL[props.courseKey] || '葡萄酒學院'}的學習進度！`,
        files: [file]
      })
    } else {
      const url = URL.createObjectURL(blob)
      const a = Object.assign(document.createElement('a'), { href: url, download: 'learning-progress.png' })
      document.body.appendChild(a); a.click(); document.body.removeChild(a)
      setTimeout(() => URL.revokeObjectURL(url), 3000)
    }
  } catch (e) {
    if (e?.name !== 'AbortError') console.error(e)
  } finally {
    sharing.value = false
  }
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

/* ── 分享按鈕 ───────────────────────────────── */
.lpd-share-wrap { padding: 4px 0 8px; }
.lpd-share-btn {
  padding: 12px 24px; border-radius: 10px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white; border: none; cursor: pointer;
  font-size: 0.9rem; font-weight: 600;
  box-shadow: 0 4px 12px rgba(118, 75, 162, 0.3);
  transition: all 0.2s;
}
.lpd-share-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(118, 75, 162, 0.4); }
.lpd-share-btn:disabled { opacity: 0.6; cursor: not-allowed; }

/* ── 隱藏分享卡 ─────────────────────────────── */
.lpd-share-card {
  position: fixed; left: -9999px; top: 0;
  width: 520px; background: #f8f6ff;
  padding: 28px; border-radius: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.lpd-sc-header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 16px; font-size: 0.85rem;
}
.lpd-sc-logo { font-weight: 700; color: #4c1d95; font-size: 0.95rem; }
.lpd-sc-tag  { color: #9ca3af; }

/* 使用者區 */
.lpd-sc-user {
  display: flex; align-items: center; gap: 14px;
  padding: 12px 0 14px;
  border-bottom: 1px solid #e5e0f8;
  margin-bottom: 16px;
}
.lpd-sc-avatar-wrap {
  width: 52px; height: 52px; border-radius: 50%;
  overflow: hidden; flex-shrink: 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
}
.lpd-sc-avatar-img { width: 100%; height: 100%; object-fit: cover; display: block; }
.lpd-sc-avatar-initial {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem; font-weight: 800; color: white;
}
.lpd-sc-user-info { flex: 1; min-width: 0; }
.lpd-sc-user-name {
  font-size: 1.05rem; font-weight: 800; color: #1f2937;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.lpd-sc-user-bio {
  font-size: 0.74rem; color: #6b7280; margin-top: 3px;
  display: -webkit-box; -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; overflow: hidden;
}

/* 統計數據 */
.lpd-sc-stats {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 10px; margin-bottom: 18px;
}
.lpd-sc-stat {
  text-align: center; background: white;
  border-radius: 10px; padding: 10px 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.07);
}
.lpd-sc-stat-icon { font-size: 1.2rem; margin-bottom: 4px; }
.lpd-sc-stat-val  { font-size: 1.1rem; font-weight: 800; color: #1f2937; }
.lpd-sc-stat-lbl  { font-size: 0.65rem; color: #9ca3af; margin-top: 2px; }

/* 各階段進度 */
.lpd-sc-levels { margin-bottom: 18px; }
.lpd-sc-level-row {
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 10px;
}
.lpd-sc-lv-icon  { font-size: 1.1rem; flex-shrink: 0; }
.lpd-sc-lv-name  { font-size: 0.8rem; color: #444; font-weight: 500; min-width: 90px; flex-shrink: 0; }
.lpd-sc-lv-bar   {
  flex: 1; height: 8px; background: #e8e4f8;
  border-radius: 4px; overflow: hidden;
}
.lpd-sc-lv-fill  {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 4px;
}
.lpd-sc-lv-pct   { font-size: 0.75rem; font-weight: 700; color: #555; min-width: 36px; text-align: right; }

/* 頁尾 */
.lpd-sc-footer { font-size: 0.68rem; color: #9ca3af; text-align: right; }
</style>
