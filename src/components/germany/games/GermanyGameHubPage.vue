<template>
  <div class="game-hub">

    <!-- ── HUB 總覽 ── -->
    <template v-if="!currentGame">
      <SharedGameHub
        title="德國互動練習"
        subtitle="德國葡萄酒挑戰賽 · 測試你的知識"
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

    <!-- ── 子遊戲 ── -->
    <GermanyRegionQuizPage   v-else-if="currentGame === 'region'"  @back="currentGame = null" />
    <GermanyPradikatQuizPage v-else-if="currentGame === 'pradikat'" @back="currentGame = null" />
    <GermanyGrapeMatchPage   v-else-if="currentGame === 'grape'"    @back="currentGame = null" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SharedGameHub from '../../shared/GameHub.vue'
import GermanyRegionQuizPage   from './GermanyRegionQuizPage.vue'
import GermanyPradikatQuizPage from './GermanyPradikatQuizPage.vue'
import GermanyGrapeMatchPage   from './GermanyGrapeMatchPage.vue'

defineEmits(['back'])

const currentGame = ref(null)

const GAMES = [
  {
    id: 'region',
    icon: '🗺️',
    name: '產區知識快答',
    desc: '看到 Anbaugebiet 的地理特徵描述，快速選出正確的德國產區名稱',
    tags: ['地理', '13 個產區', '簡單 / 困難'],
    accent: '#4ade80', accent2: '#16a34a'
  },
  {
    id: 'pradikat',
    icon: '🏅',
    name: 'Prädikat 分級快答',
    desc: '看到德國葡萄酒描述，選出正確的 Prädikat 等級（Kabinett 到 TBA）',
    tags: ['分級制度', '六大等級', '進階 / 基礎'],
    accent: '#c8a96e', accent2: '#9b6a1f'
  },
  {
    id: 'grape',
    icon: '🍇',
    name: '品種 × 產區配對',
    desc: '看到德國葡萄品種，快速選出最著名的 Anbaugebiet 或相關知識',
    tags: ['品種', '配對', '白葡萄 + 紅葡萄'],
    accent: '#a78bfa', accent2: '#7c3aed'
  }
]

function getBest(gameId) {
  const nameMap = {
    region: '🗺️ 產區知識快答',
    pradikat: '🏅 Prädikat 分級快答',
    grape: '🍇 品種 × 產區配對'
  }
  const key = `germany-quiz-${nameMap[gameId]}-best`
  const v = parseInt(localStorage.getItem(key) || '0')
  return v > 0 ? `${v} 分` : null
}

const stats = computed(() => {
  const ids = ['region', 'pradikat', 'grape']
  const names = ['🗺️ 產區知識快答', '🏅 Prädikat 分級快答', '🍇 品種 × 產區配對']
  let played = 0
  let totalBest = 0
  ids.forEach((id, i) => {
    const v = parseInt(localStorage.getItem(`germany-quiz-${names[i]}-best`) || '0')
    if (v > 0) { played++; totalBest += v }
  })
  return [
    { icon: '🎮', value: played, label: '已挑戰遊戲' },
    { icon: '📊', value: ids.length, label: '全部遊戲' },
    { icon: '🏅', value: totalBest > 0 ? totalBest : '—', label: '累計最高分' }
  ]
})
</script>

<style scoped>
.game-hub {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(160deg, #0a0e27 0%, #1a2a4a 60%, #0d1a30 100%);
  color: #f0f0f0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif;
  display: flex;
  flex-direction: column;
}

.hub-header {
  display: flex; align-items: center; gap: 16px;
  padding: 20px 24px 0; flex-shrink: 0;
}
.back-btn {
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.18);
  color: #ccc; border-radius: 8px; padding: 6px 14px; cursor: pointer; font-size: 0.9rem;
  white-space: nowrap; transition: background 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.18); }
.hub-title { font-size: 1.8rem; font-weight: 800; margin: 0 0 4px; }
.hub-subtitle { margin: 0; color: rgba(255,255,255,0.55); font-size: 0.95rem; }

/* Stats bar */
.stats-bar {
  display: flex; justify-content: center; gap: 2.5rem;
  padding: 1.25rem 1.5rem; background: rgba(255,255,255,0.04);
  margin: 1.25rem 1.5rem 0; border-radius: 16px;
}
.stat-item { display: flex; flex-direction: column; align-items: center; gap: 2px; }
.stat-icon { font-size: 1.3rem; }
.stat-value { font-size: 1.4rem; font-weight: 800; color: #FFD700; }
.stat-label { font-size: 0.72rem; color: rgba(255,255,255,0.5); }

/* Hub grid */
.hub-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1.25rem;
  padding: 1.5rem;
}
.game-card {
  position: relative;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  overflow: hidden;
}
.game-card:hover {
  transform: translateY(-6px);
  border-color: var(--accent);
  box-shadow: 0 12px 32px rgba(0,0,0,0.3), 0 0 20px rgba(var(--accent), 0.15);
  background: rgba(255,255,255,0.1);
}
.card-glow {
  position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  opacity: 0; transition: opacity 0.3s;
}
.game-card:hover .card-glow { opacity: 1; }
.card-icon { font-size: 2.5rem; line-height: 1; }
.card-name { font-size: 1.15rem; font-weight: 800; color: white; }
.card-desc { font-size: 0.85rem; color: rgba(255,255,255,0.65); line-height: 1.5; }
.card-tags { display: flex; gap: 6px; flex-wrap: wrap; }
.tag { font-size: 0.72rem; background: rgba(255,255,255,0.08); border-radius: 12px; padding: 2px 8px; color: rgba(255,255,255,0.6); }
.card-best { }
.best-badge { font-size: 0.78rem; background: rgba(255,215,0,0.15); color: #FFD700; border-radius: 10px; padding: 3px 10px; font-weight: 600; }
.card-arrow { position: absolute; right: 1.5rem; top: 50%; transform: translateY(-50%); font-size: 1.8rem; color: rgba(255,255,255,0.25); transition: color 0.3s; }
.game-card:hover .card-arrow { color: var(--accent); }

/* Tip box */
.tip-box {
  margin: 0 1.5rem 2rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}
.tip-icon { font-size: 1.2rem; flex-shrink: 0; margin-top: 2px; }
.tip-text { font-size: 0.85rem; color: rgba(255,255,255,0.6); line-height: 1.6; }
.tip-text strong { color: rgba(255,255,255,0.85); }

@media (max-width: 640px) {
  .hub-grid { grid-template-columns: 1fr; padding: 1rem; }
  .stats-bar { gap: 1.5rem; margin: 1rem; padding: 1rem; }
}
</style>
