<template>
  <div class="ma-game-hub">
    <SharedGameHub
      v-if="!game"
      :title="gt('摩洛哥互動練習')"
      :subtitle="gt('產區、法規與知識閃問，選擇遊戲開始！')"
      :games="hubGames"
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

    <MoroccoQuizEngine
      v-else
      :key="game.id"
      :game-type="game.gameType"
      :best-key="game.bestKey"
      :title="tx(game.name)"
      :subtitle="tx(game.subtitle)"
      :icon="game.icon"
      :accent="game.accent"
      :difficulties="difficulties"
      :build="game.build"
      @back="currentGame = null"
    />
  </div>
</template>

<script setup>
import { gt, tx } from '../../locales/moroccoUi/index.js'
import { ref, computed } from 'vue'
import SharedGameHub from '../shared/GameHub.vue'
import MoroccoQuizEngine from './games/MoroccoQuizEngine.vue'
import { MOROCCO_GAMES } from '../../data/morocco/gameData.js'

defineEmits(['back'])

const currentGame = ref(null)
const game = computed(() => MOROCCO_GAMES.find(g => g.id === currentGame.value) || null)

const hubGames = computed(() => MOROCCO_GAMES.map(g => ({
  id: g.id, icon: g.icon, name: tx(g.name), desc: tx(g.desc), tags: g.tags.map(tx), accent: g.accent, accent2: g.accent2
})))

const difficulties = computed(() => Object.fromEntries(Object.entries(game.value.difficulties).map(([k, d]) => [k, {
  ...d, name: tx(d.name), desc: tx(d.desc), list: d.list.map(tx)
}])))

// 從遊戲返回時 currentGame 變動，順帶重算最高分
const stats = computed(() => {
  if (currentGame.value) return []
  let played = 0
  let totalBest = 0
  for (const g of MOROCCO_GAMES) {
    let v = 0
    try { v = parseInt(localStorage.getItem(g.bestKey) || '0') } catch { v = 0 }
    if (v > 0) { played++; totalBest += v }
  }
  return [
    { icon: '🎮', value: played, label: gt('已挑戰遊戲') },
    { icon: '📊', value: MOROCCO_GAMES.length, label: gt('全部遊戲') },
    { icon: '🏅', value: totalBest > 0 ? totalBest : '—', label: gt('累計最高分') }
  ]
})
</script>

<style scoped>
.ma-game-hub {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(135deg, #2B0B0D 0%, #0F2A1C 100%);
  color: #FBF4EA;
}
.stats-bar { display: flex; gap: 12px; padding: 16px 24px 0; flex-wrap: wrap; justify-content: center; }
.stat-item {
  display: flex; align-items: center; gap: 8px; padding: 8px 16px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
}
.stat-value { font-weight: 800; color: #F3D9A8; }
.stat-label { font-size: 0.8rem; color: #E5CFA8; }
</style>
