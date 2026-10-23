<template>
  <div class="gr-game-hub">
    <template v-if="!currentGame">
      <SharedGameHub
        title="希臘互動練習"
        subtitle="希臘葡萄酒知識挑戰——選擇遊戲開始！"
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
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SharedGameHub from '../shared/GameHub.vue'
import GreeceRegionQuizPage from './games/GreeceRegionQuizPage.vue'
import GreeceGrapeMatchPage from './games/GreeceGrapeMatchPage.vue'

defineEmits(['back'])

const currentGame = ref(null)

const GAMES = [
  {
    id: 'region', icon: '🗺️', name: '產區速答',
    desc: '看到 33 個 PDO 的名稱與線索，判斷它屬於六大地理區中的哪一區',
    tags: ['快答', '簡單 / 困難', 'Combo 系統'],
    accent: '#0D5EAF', accent2: '#3b8bd6'
  },
  {
    id: 'grape', icon: '🍇', name: '品種配對',
    desc: '從描述判斷品種，或從 PDO 找出核心品種：Assyrtiko、Xinomavro、Agiorgitiko 等',
    tags: ['配對', '多種題型', '錯題回顧'],
    accent: '#B8902A', accent2: '#d9b24a'
  }
]

const BEST_KEYS = ['gr_region_best', 'gr_grape_best']
const stats = computed(() => {
  let played = 0
  let totalBest = 0
  for (const k of BEST_KEYS) {
    let v = 0
    try { v = parseInt(localStorage.getItem(k) || '0') } catch { v = 0 }
    if (v > 0) { played++; totalBest += v }
  }
  return [
    { icon: '🎮', value: played, label: '已挑戰遊戲' },
    { icon: '📊', value: BEST_KEYS.length, label: '全部遊戲' },
    { icon: '🏅', value: totalBest > 0 ? totalBest : '—', label: '累計最高分' }
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
