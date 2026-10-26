<template>
  <div class="ch-game-hub">
    <template v-if="!currentGame">
      <SharedGameHub
        :title="gt('香檳互動練習')"
        :subtitle="gt('香檳知識挑戰——選擇遊戲開始！')"
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

    <ChampagneRegionQuizPage v-else-if="currentGame === 'region'" @back="currentGame = null" />
    <ChampagneGrapeMatchPage v-else-if="currentGame === 'grape'" @back="currentGame = null" />
    <ChampagneClassificationQuizPage v-else-if="currentGame === 'classification'" @back="currentGame = null" />
    <ChampagneProcessQuizPage v-else-if="currentGame === 'process'" @back="currentGame = null" />
    <ChampagneFlashPage v-else-if="currentGame === 'flash'" @back="currentGame = null" />
  </div>
</template>

<script setup>
import { gt } from '../../locales/champagneUi/index.js'
import { ref, computed } from 'vue'
import SharedGameHub from '../shared/GameHub.vue'
import ChampagneRegionQuizPage from './games/ChampagneRegionQuizPage.vue'
import ChampagneGrapeMatchPage from './games/ChampagneGrapeMatchPage.vue'
import ChampagneClassificationQuizPage from './games/ChampagneClassificationQuizPage.vue'
import ChampagneProcessQuizPage from './games/ChampagneProcessQuizPage.vue'
import ChampagneFlashPage from './games/ChampagneFlashPage.vue'

defineEmits(['back'])

const currentGame = ref(null)

const GAMES = [
  {
    id: 'region', icon: '🗺️', name: gt('產區速答'),
    desc: gt('看到村莊名稱，判斷它屬於哪個產區或哪個分級（Grand Cru／Premier Cru）'),
    tags: [gt('快答'), gt('簡單 / 困難'), gt('Combo 系統')],
    accent: '#A8801C', accent2: '#c9a24a'
  },
  {
    id: 'grape', icon: '🍇', name: gt('品種配對'),
    desc: gt('從描述判斷品種與角色，或從產區找出主要品種：Pinot Noir、Meunier、Chardonnay 等'),
    tags: [gt('配對'), gt('多種題型'), gt('錯題回顧')],
    accent: '#8E6B1F', accent2: '#d9b24a'
  },
  {
    id: 'classification', icon: '🏷️', name: gt('分級辨識快答'),
    desc: gt('標籤代碼（NM／RM／CM…）、甜度用語與 g/L、陳年規定與 Échelle des Crus 規則'),
    tags: [gt('分級'), gt('簡單 / 困難'), gt('制度與術語')],
    accent: '#6A4C93', accent2: '#8d6bb8'
  },
  {
    id: 'process', icon: '🍾', name: gt('釀造順序'),
    desc: gt('傳統法的步驟先後、釀造概念，以及哪個步驟決定甜度'),
    tags: [gt('順序'), gt('簡單 / 困難'), gt('傳統法')],
    accent: '#8E6B1F', accent2: '#c9a24a'
  },
  {
    id: 'flash', icon: '⚡', name: gt('香檳知識閃問'),
    desc: gt('從歷史、風土到法規與產業——直接取自 Level 1–3 課程題庫'),
    tags: [gt('問答'), gt('簡單 / 困難'), gt('85 題')],
    accent: '#2E7D32', accent2: '#4caf50'
  }
]

const BEST_KEYS = ['ch_region_best', 'ch_grape_best', 'ch_class_best', 'ch_process_best', 'ch_flash_best']
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
.ch-game-hub {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(135deg, #1d1606 0%, #33260a 100%);
  color: #f6efdc;
}
.stats-bar { display: flex; gap: 12px; padding: 16px 24px 0; flex-wrap: wrap; justify-content: center; }
.stat-item {
  display: flex; align-items: center; gap: 8px; padding: 8px 16px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
}
.stat-value { font-weight: 800; color: #e0b64a; }
.stat-label { font-size: 0.8rem; color: #c9bb94; }
</style>
