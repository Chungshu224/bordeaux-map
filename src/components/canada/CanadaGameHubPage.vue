<template>
  <div class="can-game-hub">
    <template v-if="!currentGame">
      <SharedGameHub
        :title="gt('加拿大互動練習')"
        :subtitle="gt('加拿大知識挑戰——選擇遊戲開始！')"
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

    <CanadaRegionQuizPage v-else-if="currentGame === 'region'" @back="currentGame = null" />
    <CanadaGrapeMatchPage v-else-if="currentGame === 'grape'" @back="currentGame = null" />
    <CanadaClassificationQuizPage v-else-if="currentGame === 'classification'" @back="currentGame = null" />
    <CanadaFlashPage v-else-if="currentGame === 'flash'" @back="currentGame = null" />
  </div>
</template>

<script setup>
import { gt } from '../../locales/canadaUi/index.js'
import { ref, computed } from 'vue'
import SharedGameHub from '../shared/GameHub.vue'
import CanadaRegionQuizPage from './games/CanadaRegionQuizPage.vue'
import CanadaGrapeMatchPage from './games/CanadaGrapeMatchPage.vue'
import CanadaClassificationQuizPage from './games/CanadaClassificationQuizPage.vue'
import CanadaFlashPage from './games/CanadaFlashPage.vue'

defineEmits(['back'])

const currentGame = ref(null)

const GAMES = [
  {
    id: 'region', icon: '🗺️', name: gt('產區速答'),
    desc: gt('看到產地名稱與線索，判斷它屬於三個產區群的哪一個'),
    tags: [gt('快答'), gt('簡單 / 困難'), gt('Combo 系統')],
    accent: '#C8102E', accent2: '#E0414F'
  },
  {
    id: 'grape', icon: '🍇', name: gt('品種配對'),
    desc: gt('從描述判斷品種，或找出產地的代表品種與制度比例：Vidal、Riesling、L\'Acadie Blanc、Frontenac 等'),
    tags: [gt('配對'), gt('多種題型'), gt('錯題回顧')],
    accent: '#7A0A1C', accent2: '#C8102E'
  },
  {
    id: 'classification', icon: '🏷️', name: gt('制度辨識快答'),
    desc: gt('法規與規格、歷史年份、栽培與釀造、市場與產業：加拿大的制度與數字'),
    tags: [gt('分級'), gt('簡單 / 困難'), gt('制度與術語')],
    accent: '#E0414F', accent2: '#F6D3D7'
  },
  {
    id: 'flash', icon: '⚡', name: gt('加拿大知識閃問'),
    desc: gt('從歷史、風土到法規與產業——直接取自 Level 1–3 課程題庫'),
    tags: [gt('問答'), gt('簡單 / 困難'), gt('課程題庫')],
    accent: '#7A0A1C', accent2: '#C8102E'
  }
]

const BEST_KEYS = ['can_region_best', 'can_grape_best', 'can_class_best', 'can_flash_best']
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
.can-game-hub {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(135deg, #3A0A10 0%, #4A0A14 100%);
  color: #FDF3F4;
}
.stats-bar { display: flex; gap: 12px; padding: 16px 24px 0; flex-wrap: wrap; justify-content: center; }
.stat-item {
  display: flex; align-items: center; gap: 8px; padding: 8px 16px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
}
.stat-value { font-weight: 800; color: #F6D3D7; }
.stat-label { font-size: 0.8rem; color: #F0B6BD; }
</style>
