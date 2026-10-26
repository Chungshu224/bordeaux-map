<template>
  <div class="at-game-hub">
    <template v-if="!currentGame">
      <SharedGameHub
        :title="gt('奧地利互動練習')"
        :subtitle="gt('奧地利葡萄酒知識挑戰——選擇遊戲開始！')"
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

    <AustriaRegionQuizPage v-else-if="currentGame === 'region'" @back="currentGame = null" />
    <AustriaGrapeMatchPage v-else-if="currentGame === 'grape'" @back="currentGame = null" />
    <AustriaClassificationQuizPage v-else-if="currentGame === 'classification'" @back="currentGame = null" />
    <AustriaFlashPage v-else-if="currentGame === 'flash'" @back="currentGame = null" />
  </div>
</template>

<script setup>
import { gt } from '../../locales/austriaUi/index.js'
import { ref, computed } from 'vue'
import SharedGameHub from '../shared/GameHub.vue'
import AustriaRegionQuizPage from './games/AustriaRegionQuizPage.vue'
import AustriaGrapeMatchPage from './games/AustriaGrapeMatchPage.vue'
import AustriaClassificationQuizPage from './games/AustriaClassificationQuizPage.vue'
import AustriaFlashPage from './games/AustriaFlashPage.vue'

defineEmits(['back'])

const currentGame = ref(null)

const GAMES = [
  {
    id: 'region', icon: '🗺️', name: gt('產區速答'),
    desc: gt('看到 18 個 DAC 的名稱與線索，判斷它屬於哪一個葡萄酒邦'),
    tags: [gt('快答'), gt('簡單 / 困難'), gt('Combo 系統')],
    accent: '#B3202E', accent2: '#C94452'
  },
  {
    id: 'grape', icon: '🍇', name: gt('品種配對'),
    desc: gt('從描述判斷品種，或找出 DAC 的核心品種與法定比例：Grüner Veltliner、Zweigelt、Blaufränkisch 等'),
    tags: [gt('配對'), gt('多種題型'), gt('錯題回顧')],
    accent: '#7A1520', accent2: '#B3202E'
  },
  {
    id: 'classification', icon: '🏷️', name: gt('分級辨識快答'),
    desc: gt('Wachau 三級、Prädikat 的 KMW、Sekt Austria 與產地金字塔：分級制度與數字規範'),
    tags: [gt('分級'), gt('簡單 / 困難'), gt('制度與術語')],
    accent: '#C94452', accent2: '#F0B8BE'
  },
  {
    id: 'flash', icon: '⚡', name: gt('奧地利知識閃問'),
    desc: gt('從歷史、風土到法規與產業——直接取自 Level 1–3 課程題庫'),
    tags: [gt('問答'), gt('簡單 / 困難'), gt('課程題庫')],
    accent: '#7A1520', accent2: '#B3202E'
  }
]

const BEST_KEYS = ['at_region_best', 'at_grape_best', 'at_class_best', 'at_flash_best']
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
.at-game-hub {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(135deg, #2a0a10 0%, #4a1018 100%);
  color: #f7e9ea;
}
.stats-bar { display: flex; gap: 12px; padding: 16px 24px 0; flex-wrap: wrap; justify-content: center; }
.stat-item {
  display: flex; align-items: center; gap: 8px; padding: 8px 16px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
}
.stat-value { font-weight: 800; color: #F0B8BE; }
.stat-label { font-size: 0.8rem; color: #d9aab0; }
</style>
