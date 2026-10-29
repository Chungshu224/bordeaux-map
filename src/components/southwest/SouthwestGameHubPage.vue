<template>
  <div class="sw-game-hub">
    <template v-if="!currentGame">
      <SharedGameHub
        :title="gt('西南產區互動練習')"
        :subtitle="gt('西南產區葡萄酒知識挑戰——選擇遊戲開始！')"
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

    <SouthwestRegionQuizPage v-else-if="currentGame === 'region'" @back="currentGame = null" />
    <SouthwestGrapeMatchPage v-else-if="currentGame === 'grape'" @back="currentGame = null" />
    <SouthwestClassificationQuizPage v-else-if="currentGame === 'classification'" @back="currentGame = null" />
    <SouthwestFlashPage v-else-if="currentGame === 'flash'" @back="currentGame = null" />
  </div>
</template>

<script setup>
import { gt } from '../../locales/southwestUi/index.js'
import { ref, computed } from 'vue'
import SharedGameHub from '../shared/GameHub.vue'
import SouthwestRegionQuizPage from './games/SouthwestRegionQuizPage.vue'
import SouthwestGrapeMatchPage from './games/SouthwestGrapeMatchPage.vue'
import SouthwestClassificationQuizPage from './games/SouthwestClassificationQuizPage.vue'
import SouthwestFlashPage from './games/SouthwestFlashPage.vue'

defineEmits(['back'])

const currentGame = ref(null)

const GAMES = [
  {
    id: 'region', icon: '🗺️', name: gt('產區速答'),
    desc: gt('看到產地名稱與線索，判斷它屬於四個產區群的哪一個'),
    tags: [gt('快答'), gt('簡單 / 困難'), gt('Combo 系統')],
    accent: '#4B2E55', accent2: '#8A6A96'
  },
  {
    id: 'grape', icon: '🍇', name: gt('品種配對'),
    desc: gt('從描述判斷品種，或找出產地的代表品種與制度比例：Malbec、Tannat、Négrette、Mauzac 等'),
    tags: [gt('配對'), gt('多種題型'), gt('錯題回顧')],
    accent: '#2B1533', accent2: '#4B2E55'
  },
  {
    id: 'classification', icon: '🏷️', name: gt('制度辨識快答'),
    desc: gt('AOC／IGP 制度、歷史年份與地理氣候：西南產區制度與數字'),
    tags: [gt('分級'), gt('簡單 / 困難'), gt('制度與術語')],
    accent: '#8A6A96', accent2: '#C9B3D1'
  },
  {
    id: 'flash', icon: '⚡', name: gt('西南產區知識閃問'),
    desc: gt('從歷史、風土到法規與產業——直接取自 Level 1–3 課程題庫'),
    tags: [gt('問答'), gt('簡單 / 困難'), gt('課程題庫')],
    accent: '#2B1533', accent2: '#4B2E55'
  }
]

const BEST_KEYS = ['sw_region_best', 'sw_grape_best', 'sw_class_best', 'sw_flash_best']
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
.sw-game-hub {
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
.stat-value { font-weight: 800; color: #C9B3D1; }
.stat-label { font-size: 0.8rem; color: #d9aab0; }
</style>
