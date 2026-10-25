<template>
  <div class="rh-game-hub">
    <template v-if="!currentGame">
      <SharedGameHub
        :title="gt('隆河互動練習')"
        :subtitle="gt('隆河葡萄酒知識挑戰——選擇遊戲開始！')"
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

    <RhoneRegionQuizPage v-else-if="currentGame === 'region'" @back="currentGame = null" />
    <RhoneGrapeMatchPage v-else-if="currentGame === 'grape'" @back="currentGame = null" />
    <RhoneClassificationQuizPage v-else-if="currentGame === 'classification'" @back="currentGame = null" />
    <RhoneFlashPage v-else-if="currentGame === 'flash'" @back="currentGame = null" />
  </div>
</template>

<script setup>
import { gt } from '../../locales/rhoneUi/index.js'
import { ref, computed } from 'vue'
import SharedGameHub from '../shared/GameHub.vue'
import RhoneRegionQuizPage from './games/RhoneRegionQuizPage.vue'
import RhoneGrapeMatchPage from './games/RhoneGrapeMatchPage.vue'
import RhoneClassificationQuizPage from './games/RhoneClassificationQuizPage.vue'
import RhoneFlashPage from './games/RhoneFlashPage.vue'

defineEmits(['back'])

const currentGame = ref(null)

const GAMES = [
  {
    id: 'region', icon: '🗺️', name: gt('產區速答'),
    desc: gt('看到 18 個 cru 的名稱與線索，判斷它在北隆河還是南隆河'),
    tags: [gt('快答'), gt('簡單 / 困難'), gt('Combo 系統')],
    accent: '#7A2E5C', accent2: '#a4528a'
  },
  {
    id: 'grape', icon: '🍇', name: gt('品種配對'),
    desc: gt('從描述判斷品種，或從 cru 找出核心品種與法定比例：Syrah、Grenache、Viognier 等'),
    tags: [gt('配對'), gt('多種題型'), gt('錯題回顧')],
    accent: '#B5502E', accent2: '#d9784f'
  },
  {
    id: 'classification', icon: '🏷️', name: gt('分級辨識快答'),
    desc: gt('Côtes du Rhône、Villages、加註地名與 Cru：分級金字塔與數字規範'),
    tags: [gt('分級'), gt('簡單 / 困難'), gt('制度與術語')],
    accent: '#D08C2F', accent2: '#e3ab5a'
  },
  {
    id: 'flash', icon: '⚡', name: gt('隆河知識閃問'),
    desc: gt('從歷史、風土到法規與產業——直接取自 Level 1–3 課程題庫'),
    tags: [gt('問答'), gt('簡單 / 困難'), gt('課程題庫')],
    accent: '#4A1738', accent2: '#7A2E5C'
  }
]

const BEST_KEYS = ['rh_region_best', 'rh_grape_best', 'rh_class_best', 'rh_flash_best']
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
.rh-game-hub {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(135deg, #1f0a18 0%, #3a1230 100%);
  color: #f3e8ef;
}
.stats-bar { display: flex; gap: 12px; padding: 16px 24px 0; flex-wrap: wrap; justify-content: center; }
.stat-item {
  display: flex; align-items: center; gap: 8px; padding: 8px 16px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
}
.stat-value { font-weight: 800; color: #e3ab5a; }
.stat-label { font-size: 0.8rem; color: #c9a9bd; }
</style>
