<template>
  <div class="gr-game-hub">
    <template v-if="!currentGame">
      <SharedGameHub
        :title="gt('希臘互動練習')"
        :subtitle="gt('希臘葡萄酒知識挑戰——選擇遊戲開始！')"
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

    <GreeceRegionQuizPage v-else-if="currentGame === 'region'" @back="currentGame = null" />
    <GreeceGrapeMatchPage v-else-if="currentGame === 'grape'" @back="currentGame = null" />
    <GreeceClassificationQuizPage v-else-if="currentGame === 'classification'" @back="currentGame = null" />
    <GreeceFlashPage v-else-if="currentGame === 'flash'" @back="currentGame = null" />
  </div>
</template>

<script setup>
import { gt } from '../../locales/greeceUi/index.js'
import { ref, computed } from 'vue'
import SharedGameHub from '../shared/GameHub.vue'
import GreeceRegionQuizPage from './games/GreeceRegionQuizPage.vue'
import GreeceGrapeMatchPage from './games/GreeceGrapeMatchPage.vue'
import GreeceClassificationQuizPage from './games/GreeceClassificationQuizPage.vue'
import GreeceFlashPage from './games/GreeceFlashPage.vue'

defineEmits(['back'])

const currentGame = ref(null)

const GAMES = [
  {
    id: 'region', icon: '🗺️', name: gt('產區速答'),
    desc: gt('看到 33 個 PDO 的名稱與線索，判斷它屬於六大地理區中的哪一區'),
    tags: [gt('快答'), gt('簡單 / 困難'), gt('Combo 系統')],
    accent: '#0D5EAF', accent2: '#3b8bd6'
  },
  {
    id: 'grape', icon: '🍇', name: gt('品種配對'),
    desc: gt('從描述判斷品種，或從 PDO 找出核心品種：Assyrtiko、Xinomavro、Agiorgitiko 等'),
    tags: [gt('配對'), gt('多種題型'), gt('錯題回顧')],
    accent: '#B8902A', accent2: '#d9b24a'
  },
  {
    id: 'classification', icon: '🏷️', name: gt('分級辨識快答'),
    desc: gt('PDO／PGI、OPAP／OPE、Retsina 與 Verdea，以及 PGI 的三個層級'),
    tags: [gt('分級'), gt('簡單 / 困難'), gt('制度與術語')],
    accent: '#6A4C93', accent2: '#8d6bb8'
  },
  {
    id: 'flash', icon: '⚡', name: gt('希臘知識閃問'),
    desc: gt('從歷史、風土到法規與產業——直接取自 Level 1–3 課程題庫'),
    tags: [gt('問答'), gt('簡單 / 困難'), gt('85+ 題')],
    accent: '#2E7D32', accent2: '#4caf50'
  }
]

const BEST_KEYS = ['gr_region_best', 'gr_grape_best', 'gr_class_best', 'gr_flash_best']
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
.gr-game-hub {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(135deg, #061a30 0%, #0a2c52 100%);
  color: #e8f0f8;
}
.stats-bar { display: flex; gap: 12px; padding: 16px 24px 0; flex-wrap: wrap; justify-content: center; }
.stat-item {
  display: flex; align-items: center; gap: 8px; padding: 8px 16px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
}
.stat-value { font-weight: 800; color: #e0b64a; }
.stat-label { font-size: 0.8rem; color: #9db4cc; }
</style>
