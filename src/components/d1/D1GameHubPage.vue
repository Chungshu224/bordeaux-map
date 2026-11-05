<template>
  <div class="d1-game-hub">
    <SharedGameHub
      v-if="!game"
      title="D1 互動練習"
      subtitle="生長週期、因果配對、病害診斷、釀造選項與情境決策——選擇遊戲開始！"
      :games="D1_GAMES"
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

    <SparklingQuizEngine
      v-else
      :key="game.id"
      :best-key="game.bestKey"
      :title="game.name"
      :subtitle="game.subtitle"
      :icon="game.icon"
      :accent="game.accent"
      :difficulties="game.difficulties"
      :build="game.build"
      @back="currentGame = null"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SharedGameHub from '../shared/GameHub.vue'
import SparklingQuizEngine from '../sparkling/games/SparklingQuizEngine.vue'
import { D1_GAMES } from '../../data/d1/gameData.js'

defineEmits(['back'])

const currentGame = ref(null)
const game = computed(() => D1_GAMES.find(g => g.id === currentGame.value) || null)

function readBest(key) {
  try { return parseInt(localStorage.getItem(key) || '0') } catch { return 0 }
}

// 從遊戲返回時 currentGame 變動，順帶重算最高分
const stats = computed(() => {
  if (currentGame.value) return []
  const bests = D1_GAMES.map(g => readBest(g.bestKey))
  return [
    { icon: '🎮', value: `${bests.filter(Boolean).length} / ${D1_GAMES.length}`, label: '已挑戰遊戲' },
    { icon: '🏅', value: Math.max(0, ...bests), label: '單項最高分' }
  ]
})
</script>

<style scoped>
.stats-bar { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin: 0 auto 20px; padding: 0 16px; }
.stat-item {
  display: flex; align-items: center; gap: 8px; padding: 10px 18px; border-radius: 12px;
  background: rgba(79,111,31,0.1); border: 1px solid rgba(79,111,31,0.3);
}
.stat-icon { font-size: 1.1rem; }
.stat-value { font-weight: 800; }
.stat-label { font-size: 0.8rem; opacity: 0.75; }
</style>
