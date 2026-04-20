<template>
  <div class="ach-page" @keydown.esc="$emit('back')">
    <!-- 標頭 -->
    <div class="ach-header">

      <div class="header-center">
        <h1 class="ach-title">🏆 成就系統</h1>
        <p class="ach-sub">侍酒師的筆記本・學習里程碼</p>
      </div>
      <!-- 用戶等級卡 -->
      <div class="level-pill" :class="`lv-rarity-${levelRarity}`">
        <span class="lv-icon">{{ userLevel.icon }}</span>
        <div>
          <div class="lv-num">Lv.{{ userLevel.level }}</div>
          <div class="lv-title">{{ userLevel.title }}</div>
        </div>
      </div>
    </div>

    <!-- 統計橫列 -->
    <div class="stats-bar">
      <div class="stat-item">
        <div class="stat-val">{{ unlockedCount }} / {{ totalCount }}</div>
        <div class="stat-lbl">已解鎖</div>
        <div class="mini-prog">
          <div class="mini-fill" :style="{ width: completionPct + '%' }"></div>
        </div>
        <div class="stat-pct">{{ completionPct }}%</div>
      </div>
      <div class="stat-sep"></div>
      <div class="stat-item">
        <div class="stat-val">{{ totalPoints }}</div>
        <div class="stat-lbl">成就點數</div>
      </div>
      <div class="stat-sep"></div>
      <div class="stat-item rarity-grid">
        <div v-for="(data, rarity) in rarityStats" :key="rarity"
          class="rarity-row" :class="`r-${rarity}`">
          <span>{{ rarityNames[rarity] }}</span>
          <span>{{ data.unlocked }}/{{ data.total }}</span>
        </div>
      </div>
    </div>

    <!-- 分類 Tabs -->
    <div class="cat-tabs">
      <button
        v-for="cat in CATEGORIES" :key="cat.id"
        :class="['cat-tab', { active: selectedCat === cat.id }]"
        @click="selectedCat = cat.id"
      >
        <span>{{ cat.icon }}</span>{{ cat.name }}
        <span class="cat-count">{{ catCounts[cat.id] }}</span>
      </button>
    </div>

    <!-- 成就網格 -->
    <div class="ach-grid-wrap">
      <div class="ach-grid">
        <div
          v-for="ach in filteredAchievements"
          :key="ach.id"
          :class="['ach-card', `r-${ach.rarity}`, { unlocked: ach.unlocked }]"
          @click="selectedAch = ach"
        >
          <div class="ach-glow"></div>
          <div class="ach-icon">{{ ach.icon }}</div>
          <div class="ach-body">
            <div class="ach-name">{{ ach.title }}</div>
            <div class="ach-desc">{{ ach.description }}</div>
            <div class="ach-foot">
              <span class="rarity-badge" :class="`r-${ach.rarity}`">{{ rarityNames[ach.rarity] }}</span>
              <span class="pts-badge">⭐ {{ ach.points }}</span>
              <span v-if="ach.unlocked" class="unlocked-tick">✓ 已解鎖</span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="filteredAchievements.length === 0" class="empty-state">
        <div>🔍</div><p>此分類暫無成就</p>
      </div>
    </div>

    <!-- 詳情彈窗 -->
    <Transition name="modal">
      <div v-if="selectedAch" class="modal-overlay" @click.self="selectedAch = null">
        <div class="modal-box" :class="`r-${selectedAch.rarity}`">
          <button class="modal-close" @click="selectedAch = null">×</button>
          <div class="modal-icon">{{ selectedAch.icon }}</div>
          <h3>{{ selectedAch.title }}</h3>
          <span class="rarity-badge lg" :class="`r-${selectedAch.rarity}`">{{ rarityNames[selectedAch.rarity] }}</span>
          <p class="modal-desc">{{ selectedAch.description }}</p>
          <div class="modal-stats-row">
            <div class="modal-stat"><span>分類</span><strong>{{ categoryName(selectedAch.category) }}</strong></div>
            <div class="modal-stat"><span>點數</span><strong>⭐ {{ selectedAch.points }}</strong></div>
            <div class="modal-stat"><span>狀態</span><strong :class="{ ok: selectedAch.unlocked }">{{ selectedAch.unlocked ? '✓ 已解鎖' : '未解鎖' }}</strong></div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Toast 通知（新解鎖） -->
    <Transition name="toast">
      <div v-if="toastAch" class="toast-ach" :class="`r-${toastAch.rarity}`">
        <div class="toast-icon">{{ toastAch.icon }}</div>
        <div>
          <div class="toast-label">🎉 成就解鎖！</div>
          <div class="toast-name">{{ toastAch.title }}</div>
          <div class="toast-pts">+{{ toastAch.points }} 點</div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import {
  burgAchievementDefinitions,
  burgAchievementState,
  burgAchievementComputed,
  burgAchievementConfig,
  globalBurgAchievementManager
} from '../stores/bourgogneAchievementSystem.js'

defineEmits(['back'])

onMounted(() => { globalBurgAchievementManager.init() })

const selectedCat = ref('all')
const selectedAch = ref(null)
const toastAch    = ref(null)

// ── Toast 監聽 ─────────────────────────────────────────────
watch(() => burgAchievementState.newUnlocks.length, (n) => {
  if (n > 0) {
    toastAch.value = burgAchievementState.newUnlocks[0]
    setTimeout(() => {
      toastAch.value = null
      globalBurgAchievementManager.clearNewUnlocks()
    }, 3500)
  }
})

// ── 分類 ───────────────────────────────────────────────────
const CATEGORIES = [
  { id: 'all',         name: '全部',     icon: '🌟' },
  { id: 'progress',   name: '學習進度', icon: '📚' },
  { id: 'game',       name: '遊戲挑戰', icon: '🎮' },
  { id: 'exploration',name: '地圖探索', icon: '🗺️' },
  { id: 'time',       name: '時間特殊', icon: '⏰' },
  { id: 'special',    name: '特殊成就', icon: '⭐' }
]

const CATEGORY_NAMES = {
  progress:    '學習進度',
  game:        '遊戲挑戰',
  exploration: '地圖探索',
  time:        '時間特殊',
  special:     '特殊成就'
}

const categoryName = id => CATEGORY_NAMES[id] || id

const rarityNames = burgAchievementConfig.rarityNames

// ── Computed ───────────────────────────────────────────────
const allAchievements = computed(() =>
  Object.values(burgAchievementDefinitions).map(a => ({
    ...a, unlocked: globalBurgAchievementManager.isUnlocked(a.id)
  }))
)

const filteredAchievements = computed(() =>
  selectedCat.value === 'all'
    ? allAchievements.value
    : allAchievements.value.filter(a => a.category === selectedCat.value)
)

const catCounts = computed(() => {
  const counts = { all: allAchievements.value.length }
  CATEGORIES.forEach(c => {
    if (c.id !== 'all') counts[c.id] = allAchievements.value.filter(a => a.category === c.id).length
  })
  return counts
})

const unlockedCount    = computed(() => burgAchievementState.unlockedAchievements.length)
const totalCount       = computed(() => Object.keys(burgAchievementDefinitions).length)
const totalPoints      = computed(() => burgAchievementState.totalPoints)
const completionPct    = computed(() => burgAchievementComputed.completionPercentage.value)
const rarityStats      = computed(() => burgAchievementComputed.rarityStats.value)
const userLevel        = computed(() => globalBurgAchievementManager.getUserLevel())
const levelRarity      = computed(() => {
  const lv = userLevel.value.level
  if (lv <= 2) return 'common'
  if (lv <= 4) return 'uncommon'
  if (lv <= 5) return 'rare'
  if (lv <= 6) return 'epic'
  return 'legendary'
})
</script>

<style scoped>
/* ── 整體背景 ───────────────────────────────────────────── */
.ach-page {
  width: 100%;
  background: linear-gradient(160deg, #f9f0ff 0%, #fff4f8 50%, #faf5ff 100%);
  color: #1f2937;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  display: flex; flex-direction: column;
  min-height: 600px;
}

/* ── 標頭 ───────────────────────────────────────────── */
.ach-header {
  display: flex; align-items: center; gap: 14px;
  padding: 20px 28px 18px;
  background: white;
  border-bottom: 1px solid #ede9fe;
  box-shadow: 0 2px 8px rgba(74,30,94,0.07);
  flex-shrink: 0;
}
/* back-btn 已由 Modal 的 × 按鈕取代 */
.header-center { flex: 1 }
.ach-title { margin: 0; font-size: 1.6rem; font-weight: 800; color: #1f2937; }
.ach-sub   { margin: 3px 0 0; font-size: 0.78rem; color: #9ca3af; }

.level-pill {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 16px; border-radius: 50px;
  flex-shrink: 0; border: 2px solid transparent;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.level-pill.lv-rarity-common    { background: #f5f5f5;    border-color: #9E9E9E; color: #616161; }
.level-pill.lv-rarity-uncommon  { background: #e8f5e9;    border-color: #4CAF50; color: #2e7d32; }
.level-pill.lv-rarity-rare      { background: #e3f2fd;    border-color: #2196F3; color: #1565c0; }
.level-pill.lv-rarity-epic      { background: #f3e5f5;    border-color: #9C27B0; color: #6a1b9a; }
.level-pill.lv-rarity-legendary { background: #fff3e0;    border-color: #FF9800; color: #e65100; }
.lv-icon  { font-size: 1.8rem; line-height: 1 }
.lv-num   { font-size: 1.05rem; font-weight: 900; color: #1f2937; }
.lv-title { font-size: 0.7rem; color: #6b7280; }

/* ── 統計橫列（改為卡片式，同波爾多） ──────────────────── */
.stats-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 20px 28px;
  background: transparent;
  flex-shrink: 0;
}
.stat-sep { display: none; }
.stat-item {
  background: white;
  border-radius: 12px;
  padding: 18px 20px;
  box-shadow: 0 2px 8px rgba(74,30,94,0.08);
  display: flex; flex-direction: column; gap: 4px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.stat-item:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(74,30,94,0.14); }
.stat-val  { font-size: 1.6rem; font-weight: 800; color: #1f2937; }
.stat-lbl  { font-size: 0.75rem; color: #6b7280; font-weight: 500; }
.stat-pct  { font-size: 0.7rem; color: #9ca3af; }
.mini-prog {
  height: 6px; background: #ede9fe; border-radius: 3px; width: 100%; overflow: hidden;
  margin-top: 4px;
}
.mini-fill { height: 100%; background: linear-gradient(90deg, #4a1e5e, #6d28d9); border-radius: 3px; transition: width .4s; }

.rarity-grid { gap: 5px; }
.rarity-row  {
  display: flex; justify-content: space-between; gap: 12px;
  font-size: 0.72rem; padding: 3px 8px; border-radius: 4px; font-weight: 600;
}
.rarity-row.r-common    { background: #f5f5f5;   color: #757575; }
.rarity-row.r-uncommon  { background: #e8f5e9;   color: #388e3c; }
.rarity-row.r-rare      { background: #e3f2fd;   color: #1976d2; }
.rarity-row.r-epic      { background: #f3e5f5;   color: #7b1fa2; }
.rarity-row.r-legendary { background: #fff3e0;   color: #f57c00; font-weight: 700; }

/* ── 分類 Tabs ───────────────────────────────────────────── */
.cat-tabs {
  display: flex; gap: 10px; padding: 0 28px 16px;
  overflow-x: auto; flex-shrink: 0;
  scrollbar-width: none;
}
.cat-tabs::-webkit-scrollbar { display: none; }
.cat-tab {
  display: flex; align-items: center; gap: 6px; white-space: nowrap;
  padding: 9px 16px; border-radius: 8px;
  background: white; border: 2px solid #e5e7eb;
  color: #6b7280; cursor: pointer; font-size: 0.82rem; font-weight: 600;
  transition: all 0.18s;
}
.cat-tab:hover { border-color: #6d28d9; color: #4a1e5e; }
.cat-tab.active {
  background: linear-gradient(135deg, #4a1e5e, #6d28d9);
  border-color: #6d28d9; color: white;
}
.cat-count {
  background: rgba(0,0,0,0.08); border-radius: 10px;
  padding: 1px 7px; font-size: 0.7rem; font-weight: 700;
}
.cat-tab.active .cat-count { background: rgba(255,255,255,0.22); color: white; }

/* ── 成就網格 ───────────────────────────────────────────── */
.ach-grid-wrap {
  flex: 1; overflow-y: auto; padding: 4px 28px 40px;
}
.ach-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 14px;
}

.ach-card {
  display: flex; align-items: flex-start; gap: 14px;
  padding: 18px; border-radius: 12px; cursor: pointer;
  position: relative; overflow: hidden;
  background: white;
  border: 1.5px solid #f0f0f0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  transition: all 0.2s;
  opacity: 0.55; filter: grayscale(0.4);
}
.ach-card.unlocked { opacity: 1; filter: none; }
.ach-card.unlocked.r-common    { border-color: #bdbdbd; }
.ach-card.unlocked.r-uncommon  { border-color: #81c784; }
.ach-card.unlocked.r-rare      { border-color: #64b5f6; }
.ach-card.unlocked.r-epic      { border-color: #ce93d8; }
.ach-card.unlocked.r-legendary { border-color: #ffcc02; border-width: 2px; }
.ach-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(74,30,94,0.14);
}
.ach-card.unlocked:hover { border-color: #6d28d9; }

.ach-glow {
  position: absolute; inset: 0; border-radius: 12px;
  opacity: 0; transition: opacity 0.2s;
  background: radial-gradient(circle at 50% 0%, rgba(109,40,217,0.06), transparent 70%);
}
.ach-card:hover .ach-glow { opacity: 1; }

.ach-icon { font-size: 2.2rem; line-height: 1; flex-shrink: 0; position: relative; z-index: 1; }
.ach-body { flex: 1; position: relative; z-index: 1; }
.ach-name { font-size: 0.95rem; font-weight: 700; color: #1f2937; margin-bottom: 3px; }
.ach-desc { font-size: 0.75rem; color: #6b7280; line-height: 1.5; margin-bottom: 8px; }
.ach-foot { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }

.rarity-badge {
  font-size: 0.65rem; font-weight: 700; padding: 2px 8px; border-radius: 10px;
}
.rarity-badge.r-common    { background: #f5f5f5;   color: #757575; }
.rarity-badge.r-uncommon  { background: #e8f5e9;   color: #388e3c; }
.rarity-badge.r-rare      { background: #e3f2fd;   color: #1976d2; }
.rarity-badge.r-epic      { background: #f3e5f5;   color: #7b1fa2; }
.rarity-badge.r-legendary { background: #fff3e0;   color: #f57c00; font-weight: 800; }
.rarity-badge.lg { font-size: 0.8rem; padding: 4px 12px; }

.pts-badge    { font-size: 0.7rem; color: #9ca3af; }
.unlocked-tick { font-size: 0.7rem; color: #15803d; font-weight: 700; }

.empty-state { text-align: center; padding: 60px 0; color: #9ca3af; }
.empty-state div { font-size: 2.5rem; }

/* ── 詳情彈窗 ───────────────────────────────────────────── */
.modal-overlay {
  position: fixed; inset: 0; z-index: 100;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(3px);
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
}
.modal-box {
  position: relative;
  background: white; border-radius: 20px;
  padding: 36px 30px 28px; max-width: 420px; width: 100%;
  text-align: center; border-top: 6px solid;
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);
}
.modal-box.r-common    { border-top-color: #9E9E9E; }
.modal-box.r-uncommon  { border-top-color: #4CAF50; }
.modal-box.r-rare      { border-top-color: #2196F3; }
.modal-box.r-epic      { border-top-color: #9C27B0; }
.modal-box.r-legendary { border-top-color: #FF9800; }
.modal-close {
  position: absolute; top: 12px; right: 14px;
  background: #f3f4f6; border: none; color: #6b7280;
  font-size: 1.2rem; width: 30px; height: 30px;
  border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: background 0.15s;
}
.modal-close:hover { background: #e5e7eb; }
.modal-icon { font-size: 3.5rem; margin-bottom: 10px; }
.modal-box h3 { margin: 0 0 10px; font-size: 1.35rem; font-weight: 800; color: #1f2937; }
.modal-desc { color: #6b7280; font-size: 0.9rem; line-height: 1.6; margin: 14px 0 18px; }
.modal-stats-row { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
.modal-stat { display: flex; flex-direction: column; align-items: center; gap: 3px; }
.modal-stat span { font-size: 0.7rem; color: #9ca3af; }
.modal-stat strong { font-size: 0.95rem; color: #1f2937; }
.modal-stat strong.ok { color: #15803d; }

/* ── Toast ────────────────────────────────────────────────── */
.toast-ach {
  position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
  display: flex; align-items: center; gap: 14px;
  padding: 14px 22px; border-radius: 16px;
  background: white; border-top: 4px solid;
  box-shadow: 0 12px 40px rgba(0,0,0,0.18);
  z-index: 200; min-width: 260px;
}
.toast-ach.r-common    { border-top-color: #9E9E9E; }
.toast-ach.r-uncommon  { border-top-color: #4CAF50; }
.toast-ach.r-rare      { border-top-color: #2196F3; }
.toast-ach.r-epic      { border-top-color: #9C27B0; }
.toast-ach.r-legendary { border-top-color: #FF9800; }
.toast-icon  { font-size: 2.2rem; }
.toast-label { font-size: 0.72rem; color: #9ca3af; margin-bottom: 2px; }
.toast-name  { font-size: 1rem; font-weight: 800; color: #1f2937; }
.toast-pts   { font-size: 0.78rem; color: #7c3aed; font-weight: 700; margin-top: 2px; }

/* ── Transitions ───────────────────────────────────────────── */
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-active, .modal-leave-active { transition: opacity 0.22s; }
.modal-enter-from .modal-box { transform: scale(0.9) translateY(10px); }
.modal-enter-active .modal-box { transition: transform 0.22s; }

.toast-enter-from { opacity: 0; transform: translateX(-50%) translateY(20px); }
.toast-leave-to   { opacity: 0; transform: translateX(-50%) translateY(20px); }
.toast-enter-active, .toast-leave-active { transition: all 0.35s ease; }

/* ── Mobile ───────────────────────────────────────────────── */
@media (max-width: 768px) {
  .ach-header  { padding: 14px 16px 12px; }
  .stats-bar   { grid-template-columns: 1fr 1fr; padding: 14px 16px; gap: 10px; }
  .cat-tabs    { padding: 0 12px 12px; }
  .ach-grid    { grid-template-columns: 1fr; }
  .ach-grid-wrap { padding: 4px 12px 28px; }
  .level-pill  { display: none; }
}
@media (max-width: 450px) {
  .stats-bar { grid-template-columns: 1fr; }
}
</style>
