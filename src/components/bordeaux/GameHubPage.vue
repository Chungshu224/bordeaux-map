<template>
  <div class="game-hub">

    <!-- ══ HUB 總覽 ══ -->
    <template v-if="!currentGame">
      <div class="hub-header">
        <button class="back-btn" @click="$emit('back')">← {{ $t('common.actions.back') }}</button>
        <div class="hub-title-block">
          <h1 class="hub-title">{{ $t('bordeaux.games.hub.title') }}</h1>
          <p class="hub-subtitle">{{ $t('bordeaux.games.hub.subtitle') }}</p>
        </div>
      </div>

      <div class="stats-bar">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <span class="stat-icon">{{ stat.icon }}</span>
          <span class="stat-value">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>

      <div class="hub-grid">
        <div
          v-for="g in GAMES"
          :key="g.id"
          class="game-card"
          :class="{ locked: !canAccess(g.minimumTier) }"
          :style="{ '--accent': g.accent, '--accent2': g.accent2 }"
          @click="handleGameClick(g)"
        >
          <!-- 鎖頭遮罩：Tier 不足時顯示 -->
          <div v-if="!canAccess(g.minimumTier)" class="lock-overlay">
            <span class="lock-icon">🔒</span>
            <span class="lock-label">{{ tierLabel(g.minimumTier) }}</span>
          </div>

          <div class="card-icon">{{ g.icon }}</div>
          <div class="card-body">
            <div class="card-name">{{ g.name }}</div>
            <div class="card-desc">{{ g.desc }}</div>
            <div class="card-tags">
              <span v-for="tag in g.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
          <div class="card-arrow">›</div>
        </div>
      </div>
    </template>

    <!-- ══ 子遊戲 ══ -->
    <MapQuizPage      v-else-if="currentGame === 'map'"     @back="currentGame = null" />
    <BankQuizPage     v-else-if="currentGame === 'bank'"    @back="currentGame = null" />
    <VintageSortPage  v-else-if="currentGame === 'vintage'" @back="currentGame = null" />
    <GrapeSoilMatchPage v-else-if="currentGame === 'grape'" @back="currentGame = null" />
    <LabelQuizPage    v-else-if="currentGame === 'label'"   @back="currentGame = null" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import MapQuizPage       from './MapQuizPage.vue'
import BankQuizPage      from './BankQuizPage.vue'
import VintageSortPage   from './VintageSortPage.vue'
import GrapeSoilMatchPage from './GrapeSoilMatchPage.vue'
import LabelQuizPage      from './LabelQuizPage.vue'
import { authState, authActions } from '../../stores/authStore.js'
import { TIER_WEIGHT } from '../../router/index.js'

defineEmits(['back'])
const { t, tm } = useI18n()

const currentGame = ref(null)

// 使用者目前的訂閱等級
const userTier = () => authActions.getEffectiveTier()

// 檢查是否滿足最低 Tier 要求
const canAccess = (minimumTier) => {
  return TIER_WEIGHT[userTier()] >= TIER_WEIGHT[minimumTier]
}

// 點擊遊戲卡：權限不足時提示，足夠時進入
const handleGameClick = (game) => {
  if (!canAccess(game.minimumTier)) {
    alert(t('bordeaux.games.hub.lockMsg', { name: game.name, tier: tierLabel(game.minimumTier) }))
    return
  }
  currentGame.value = game.id
}

const tierLabel = (tier) => t(`bordeaux.games.tier.${tier}`)

const GAMES = computed(() => [
  { id: 'map',     icon: '🗺️', name: t('bordeaux.games.map.name'),     desc: t('bordeaux.games.map.desc'),     tags: tm('bordeaux.games.map.tags'),     accent: '#f97316', accent2: '#ef4444', minimumTier: 'basic' },
  { id: 'bank',    icon: '⚡',  name: t('bordeaux.games.bank.name'),    desc: t('bordeaux.games.bank.desc'),    tags: tm('bordeaux.games.bank.tags'),    accent: '#0ea5e9', accent2: '#38bdf8', minimumTier: 'basic' },
  { id: 'vintage', icon: '🌡️', name: t('bordeaux.games.vintage.name'), desc: t('bordeaux.games.vintage.desc'), tags: tm('bordeaux.games.vintage.tags'), accent: '#f59e0b', accent2: '#d97706', minimumTier: 'basic' },
  { id: 'grape',   icon: '🍇', name: t('bordeaux.games.grape.name'),   desc: t('bordeaux.games.grape.desc'),   tags: tm('bordeaux.games.grape.tags'),   accent: '#22c55e', accent2: '#15803d', minimumTier: 'basic' },
  { id: 'label',   icon: '🏷️', name: t('bordeaux.games.label.name'),   desc: t('bordeaux.games.label.desc'),   tags: tm('bordeaux.games.label.tags'),   accent: '#c8a96e', accent2: '#92400e', minimumTier: 'basic' },
])

const stats = computed(() => {
  const keys = ['bdx_map_best', 'bdx_bank_best', 'bdx_vintage_best', 'bdx_grape_best', 'bdx_label_best']
  let played = 0, totalBest = 0
  keys.forEach(k => { const v = parseInt(localStorage.getItem(k) || '0'); if (v > 0) { played++; totalBest += v } })
  return [
    { icon: '🎮', value: played,                          label: t('bordeaux.games.hub.statsPlayed') },
    { icon: '📊', value: keys.length,                     label: t('bordeaux.games.hub.statsTotal') },
    { icon: '🏅', value: totalBest > 0 ? totalBest : '—', label: t('bordeaux.games.hub.statsBest') },
  ]
})
</script>

<style scoped>
.game-card.locked {
  opacity: 0.55;
  cursor: not-allowed;
  position: relative;
}

.lock-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(10, 0, 25, 0.55);
  border-radius: inherit;
  z-index: 2;
  gap: 0.4rem;
}

.lock-icon {
  font-size: 1.8rem;
}

.lock-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #e8c97e;
  letter-spacing: 0.05em;
  background: rgba(0,0,0,0.4);
  padding: 2px 10px;
  border-radius: 20px;
}

.game-hub {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #0d1117;
  color: #f0f6fc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* ── Header ──────────────────────────────────────────────── */
.hub-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px 0;
  flex-shrink: 0;
}

.back-btn {
  background: rgba(255,255,255,0.07);
  color: #8b949e;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  padding: 8px 16px;
  font-size: 0.86rem;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.18s;
  flex-shrink: 0;
}
.back-btn:hover { background: rgba(255,255,255,0.14); color: #f0f6fc; }

.hub-title-block { flex: 1; }
.hub-title {
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.1;
}
/* ── Stats Bar ─────────────────────────────────────────────── */
.stats-bar {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  padding: 1.25rem 1.5rem;
  background: rgba(255,255,255,0.04);
  margin: 1.25rem 1.5rem 0;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.07);
}
.stat-item { display: flex; flex-direction: column; align-items: center; gap: 2px; }
.stat-icon { font-size: 1.3rem; }
.stat-value { font-size: 1.4rem; font-weight: 800; color: #FFD700; }
.stat-label { font-size: 0.72rem; color: rgba(255,255,255,0.5); }

/* ── Grid ─────────────────────────────────────────────────── */
.hub-grid {
  flex: 1;
  overflow-y: auto;
  padding: 20px 20px 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.game-card {
  display: flex;
  align-items: center;
  gap: 18px;
  background: rgba(255,255,255,0.04);
  border: 1.5px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 20px 22px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}
.game-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  opacity: 0;
  transition: opacity 0.2s;
}
.game-card:hover::before { opacity: 0.07; }
.game-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(0,0,0,0.3);
}

.card-icon {
  font-size: 2.4rem;
  flex-shrink: 0;
  line-height: 1;
  position: relative;
  z-index: 1;
}

.card-body {
  flex: 1;
  position: relative;
  z-index: 1;
}

.card-name {
  font-size: 1.1rem;
  font-weight: 800;
  color: #f0f6fc;
  margin-bottom: 4px;
}
.card-desc {
  font-size: 0.8rem;
  color: #8b949e;
  line-height: 1.45;
  margin-bottom: 8px;
}
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.tag {
  font-size: 0.7rem;
  padding: 2px 9px;
  border-radius: 10px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  color: #6e7681;
}

.card-arrow {
  font-size: 1.6rem;
  color: rgba(255,255,255,0.15);
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  transition: color 0.2s, transform 0.2s;
}
.game-card:hover .card-arrow {
  color: var(--accent);
  transform: translateX(4px);
}
</style>
