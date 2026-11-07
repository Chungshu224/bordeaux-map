<template>
  <div class="swi-game-hub">
    <SharedGameHub
      v-if="!game"
      :title="gt('瑞士互動練習')"
      :subtitle="gt('產區配對、品種別名、歷史與因果排序、因果配對——選擇遊戲開始！')"
      :games="games"
      :tip="gt('建議先完成課程學習再來練習，效果更好！鍵盤 1–4 可快速選擇選項。')"
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
      :t="gt"
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
import { SWISS_GAMES } from '../../data/switzerland/gameData.js'
import { gt, gtDeep } from '../../locales/swissUi/index.js'

defineEmits(['back'])

const currentGame = ref(null)
// 題庫維持中文原文；選單文字依語言轉換，題目在開局（build）時再轉換，正解索引不受影響
const games = computed(() => SWISS_GAMES.map(g => gtDeep(g)))
const game = computed(() => {
  const g = games.value.find(x => x.id === currentGame.value)
  const src = SWISS_GAMES.find(x => x.id === currentGame.value)
  return g && src ? { ...g, build: (diff) => gtDeep(src.build(diff, gt)) } : null
})

function readBest(key) {
  try { return parseInt(localStorage.getItem(key) || '0') } catch { return 0 }
}

// 從遊戲返回時 currentGame 變動，順帶重算最高分
const stats = computed(() => {
  if (currentGame.value) return []
  const bests = SWISS_GAMES.map(g => readBest(g.bestKey))
  return [
    { icon: '🎮', value: `${bests.filter(Boolean).length} / ${SWISS_GAMES.length}`, label: gt('已挑戰遊戲') },
    { icon: '🏅', value: Math.max(0, ...bests), label: gt('單項最高分') }
  ]
})
</script>

<style scoped>
.stats-bar { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin: 0 auto 20px; padding: 0 16px; }
.stat-item {
  display: flex; align-items: center; gap: 8px; padding: 10px 18px; border-radius: 12px;
  background: rgba(179,32,46,0.1); border: 1px solid rgba(179,32,46,0.3);
}
.stat-icon { font-size: 1.1rem; }
.stat-value { font-weight: 800; }
.stat-label { font-size: 0.8rem; opacity: 0.75; }
</style>
