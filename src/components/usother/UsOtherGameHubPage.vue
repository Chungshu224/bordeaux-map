<template>
  <div class="us-game-hub">
    <template v-if="!currentGame">
      <SharedGameHub
        :title="gt('美國其他產區互動練習')"
        :subtitle="gt('Oregon、Washington、New York 葡萄酒知識挑戰——選擇遊戲開始！')"
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

    <UsOtherRegionQuizPage v-else-if="currentGame === 'region'" @back="currentGame = null" />
    <UsOtherGrapeMatchPage v-else-if="currentGame === 'grape'" @back="currentGame = null" />
    <UsOtherClassificationQuizPage v-else-if="currentGame === 'classification'" @back="currentGame = null" />
    <UsOtherFlashPage v-else-if="currentGame === 'flash'" @back="currentGame = null" />
  </div>
</template>

<script setup>
import { gt } from '../../locales/usotherUi/index.js'
import { ref, computed } from 'vue'
import SharedGameHub from '../shared/GameHub.vue'
import UsOtherRegionQuizPage from './games/UsOtherRegionQuizPage.vue'
import UsOtherGrapeMatchPage from './games/UsOtherGrapeMatchPage.vue'
import UsOtherClassificationQuizPage from './games/UsOtherClassificationQuizPage.vue'
import UsOtherFlashPage from './games/UsOtherFlashPage.vue'

defineEmits(['back'])

const currentGame = ref(null)

const GAMES = [
  {
    id: 'region', icon: '🗺️', name: gt('產區速答'),
    desc: gt('看到 AVA 名稱與線索，判斷它屬於哪一個州'),
    tags: [gt('快答'), gt('簡單 / 困難'), gt('Combo 系統')],
    accent: '#C2571A', accent2: '#D9742F'
  },
  {
    id: 'grape', icon: '🍇', name: gt('品種配對'),
    desc: gt('從描述判斷品種，或找出產地的代表品種與制度比例：Pinot Noir、Riesling、Cabernet Sauvignon 等'),
    tags: [gt('配對'), gt('多種題型'), gt('錯題回顧')],
    accent: '#7F3510', accent2: '#C2571A'
  },
  {
    id: 'classification', icon: '🏷️', name: gt('制度辨識快答'),
    desc: gt('AVA 制度、州與跨州、重要年份與產業規範：美國產區制度與數字'),
    tags: [gt('分級'), gt('簡單 / 困難'), gt('制度與術語')],
    accent: '#D9742F', accent2: '#F2C7A3'
  },
  {
    id: 'flash', icon: '⚡', name: gt('美國其他產區知識閃問'),
    desc: gt('從歷史、風土到法規與產業——直接取自 Level 1–3 課程題庫'),
    tags: [gt('問答'), gt('簡單 / 困難'), gt('課程題庫')],
    accent: '#7F3510', accent2: '#C2571A'
  }
]

const BEST_KEYS = ['us_region_best', 'us_grape_best', 'us_class_best', 'us_flash_best']
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
.us-game-hub {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(135deg, #2a1408 0%, #4a2210 100%);
  color: #f7e9ea;
}
.stats-bar { display: flex; gap: 12px; padding: 16px 24px 0; flex-wrap: wrap; justify-content: center; }
.stat-item {
  display: flex; align-items: center; gap: 8px; padding: 8px 16px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
}
.stat-value { font-weight: 800; color: #F2C7A3; }
.stat-label { font-size: 0.8rem; color: #d9aab0; }
</style>
