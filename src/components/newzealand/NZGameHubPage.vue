<template>
  <div class="nz-game-hub">
    <template v-if="!currentGame">
      <SharedGameHub
        title="紐西蘭互動練習"
        subtitle="紐西蘭葡萄酒知識挑戰——選擇遊戲開始！"
        :games="GAMES"
        @back="$emit('back')"
        @select="currentGame = $event"
      >
        <template #extra>
          <div class="stats-bar">
            <div v-for="stat in stats" :key="stat.label" class="stat-item">
              <span class="stat-icon">{{ stat.icon }}</span>
              <span class="stat-value">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </template>
      </SharedGameHub>
    </template>

    <!-- ══ 子遊戲 ══ -->
    <NZIslandClassifierPage v-else-if="currentGame === 'island'" @back="currentGame = null" />
    <NZGrapeRegionMatchPage v-else-if="currentGame === 'grape'"  @back="currentGame = null" />
    <NZStyleFlashPage       v-else-if="currentGame === 'style'"  @back="currentGame = null" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SharedGameHub from '../shared/GameHub.vue'
import NZIslandClassifierPage from './NZIslandClassifierPage.vue'
import NZGrapeRegionMatchPage from './NZGrapeRegionMatchPage.vue'
import NZStyleFlashPage       from './NZStyleFlashPage.vue'

defineEmits(['back'])

const currentGame = ref(null)

const GAMES = [
  {
    id:     'island',
    icon:   '🗺️',
    name:   '北島 / 南島 競速分類',
    desc:   '看到產區名稱立刻判斷屬於北島還是南島，困難模式加入子產區',
    tags:   ['快答', '簡單 / 困難', 'Combo 系統'],
    accent:  '#16a34a',
    accent2: '#4ade80',
  },
  {
    id:     'grape',
    icon:   '🍇',
    name:   '品種 × 產區配對',
    desc:   '快速判斷哪個品種在哪個產區大放異彩，困難模式加入逆向題',
    tags:   ['配對', '簡單 / 困難', '錯題回顧'],
    accent:  '#f97316',
    accent2: '#fb923c',
  },
  {
    id:     'style',
    icon:   '⚡',
    name:   '紐西蘭風格閃問',
    desc:   '針對紐西蘭產區、品種、釀造風格的快速問答，測試你的葡萄酒知識',
    tags:   ['問答', '簡單 / 困難', '35+ 題庫'],
    accent:  '#8b5cf6',
    accent2: '#a78bfa',
  },
]

const stats = computed(() => {
  const keys = ['nz_island_best', 'nz_grape_best', 'nz_style_best']
  let played = 0, totalBest = 0
  keys.forEach(k => { const v = parseInt(localStorage.getItem(k) || '0'); if (v > 0) { played++; totalBest += v } })
  return [
    { icon: '🎮', value: played,                          label: '已挑戰遊戲' },
    { icon: '📊', value: keys.length,                     label: '全部遊戲' },
    { icon: '🏅', value: totalBest > 0 ? totalBest : '—', label: '累計最高分' }
  ]
})
</script>

<style scoped>
.nz-game-hub {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #0d1117;
  color: #f0f6fc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  display: flex;
  flex-direction: column;
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
.hub-title { font-size: 1.6rem; font-weight: 800; margin: 0; line-height: 1.1; }
.hub-subtitle { color: #6e7681; font-size: 0.85rem; margin: 3px 0 0; }

/* ── Grid ─────────────────────────────────────────────────── */
.hub-grid {
  flex: 1;
  padding: 24px 20px 40px;
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
  padding: 22px 22px;
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

.card-name { font-size: 1.1rem; font-weight: 800; color: #f0f6fc; margin-bottom: 4px; }
.card-desc { font-size: 0.84rem; color: #8b949e; line-height: 1.4; margin-bottom: 8px; }

.card-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.tag {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 3px 10px;
  font-size: 0.76rem;
  color: #6e7681;
}

.card-arrow {
  font-size: 1.6rem;
  color: #374151;
  position: relative;
  z-index: 1;
  transition: color 0.2s, transform 0.2s;
}
.game-card:hover .card-arrow { color: var(--accent); transform: translateX(3px); }
</style>
