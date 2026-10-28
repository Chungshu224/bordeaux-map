<template>
  <div class="cl-game-hub">
    <template v-if="!currentGame">
      <SharedGameHub
        :title="gt('智利互動練習')"
        :subtitle="gt('智利葡萄酒知識挑戰——選擇遊戲開始！')"
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

    <ChileRegionQuizPage v-else-if="currentGame === 'region'" @back="currentGame = null" />
    <ChileGrapeMatchPage v-else-if="currentGame === 'grape'" @back="currentGame = null" />
    <ChileClassificationQuizPage v-else-if="currentGame === 'classification'" @back="currentGame = null" />
    <ChileFlashPage v-else-if="currentGame === 'flash'" @back="currentGame = null" />
  </div>
</template>

<script setup>
import { gt } from '../../locales/chileUi/index.js'
import { ref, computed } from 'vue'
import SharedGameHub from '../shared/GameHub.vue'
import ChileRegionQuizPage from './games/ChileRegionQuizPage.vue'
import ChileGrapeMatchPage from './games/ChileGrapeMatchPage.vue'
import ChileClassificationQuizPage from './games/ChileClassificationQuizPage.vue'
import ChileFlashPage from './games/ChileFlashPage.vue'

defineEmits(['back'])

const currentGame = ref(null)

const GAMES = [
  {
    id: 'region', icon: '🗺️', name: gt('產區速答'),
    desc: gt('看到產地名稱與線索，判斷它屬於四個產區群的哪一個'),
    tags: [gt('快答'), gt('簡單 / 困難'), gt('Combo 系統')],
    accent: '#A4343A', accent2: '#C4585E'
  },
  {
    id: 'grape', icon: '🍇', name: gt('品種配對'),
    desc: gt('從描述判斷品種，或找出產地的代表品種與制度比例：Cabernet、Carmenère、País 等'),
    tags: [gt('配對'), gt('多種題型'), gt('錯題回顧')],
    accent: '#5E1B20', accent2: '#A4343A'
  },
  {
    id: 'classification', icon: '🏷️', name: gt('制度辨識快答'),
    desc: gt('DO 原產地制度、歷史年份與地理氣候：智利制度與數字'),
    tags: [gt('分級'), gt('簡單 / 困難'), gt('制度與術語')],
    accent: '#C4585E', accent2: '#F0CFD1'
  },
  {
    id: 'flash', icon: '⚡', name: gt('智利知識閃問'),
    desc: gt('從歷史、風土到法規與產業——直接取自 Level 1–3 課程題庫'),
    tags: [gt('問答'), gt('簡單 / 困難'), gt('課程題庫')],
    accent: '#5E1B20', accent2: '#A4343A'
  }
]

const BEST_KEYS = ['cl_region_best', 'cl_grape_best', 'cl_class_best', 'cl_flash_best']
const stats = computed(() => {
  let played = 0
  let totalBest = 0
  for (const k of BEST_KEYS) {
    let v = 0
    try { v = parseInt(localStorage.getItem(k) || '0') } catch { v = 0 }
    if (v > 0) { played++; totalBest += v }
  }
  return [
    { icon: '🎮', value: played, label: gt('已挑戰遊戲') },
    { icon: '📊', value: BEST_KEYS.length, label: gt('全部遊戲') },
    { icon: '🏅', value: totalBest > 0 ? totalBest : '—', label: gt('累計最高分') }
  ]
})
</script>

<style scoped>
.cl-game-hub {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(135deg, #2a0f10 0%, #4a1c1e 100%);
  color: #f7e9ea;
}
.stats-bar { display: flex; gap: 12px; padding: 16px 24px 0; flex-wrap: wrap; justify-content: center; }
.stat-item {
  display: flex; align-items: center; gap: 8px; padding: 8px 16px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
}
.stat-value { font-weight: 800; color: #F0CFD1; }
.stat-label { font-size: 0.8rem; color: #d9aab0; }
</style>
