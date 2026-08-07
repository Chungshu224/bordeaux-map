<template>
  <SharedGameHub
    v-if="!activeGame"
    title="阿爾薩斯互動練習"
    subtitle="3 種遊戲模式・全面掌握阿爾薩斯葡萄酒知識"
    :games="GAMES"
    @back="$emit('back')"
    @select="activeGame = $event"
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
  <AlsaceGrandCruQuizPage         v-else-if="activeGame === 'grandcru'"       @back="activeGame = null" />
  <AlsaceGrapeQuizPage            v-else-if="activeGame === 'grape'"          @back="activeGame = null" />
  <AlsaceClassificationQuizPage   v-else-if="activeGame === 'classification'" @back="activeGame = null" />
</template>

<script setup>
import { ref, computed } from 'vue'
import SharedGameHub from '../../shared/GameHub.vue'
import AlsaceGrandCruQuizPage       from './AlsaceGrandCruQuizPage.vue'
import AlsaceGrapeQuizPage          from './AlsaceGrapeQuizPage.vue'
import AlsaceClassificationQuizPage from './AlsaceClassificationQuizPage.vue'

defineEmits(['back'])

const activeGame = ref(null)

const GAMES = [
  {
    id: 'grandcru',
    icon: '🏔️',
    name: 'Grand Cru 地質配對',
    desc: '51 個特級園對應十大地質族群與所在村莊',
    tags: ['地質分類', '51 個 Grand Cru', '簡單/困難'],
    accent: '#52b788',
    accent2: '#2d6a4f'
  },
  {
    id: 'grape',
    icon: '🍇',
    name: '品種特性快答',
    desc: '十大品種的關鍵特徵、身世與風格辨識',
    tags: ['品種', '特徵辨識', '簡單/困難'],
    accent: '#c9a227',
    accent2: '#8a6d1f'
  },
  {
    id: 'classification',
    icon: '🏷️',
    name: '分級與規範快答',
    desc: 'AOC 三層架構、VT/SGN 糖度門檻與特殊 AOC',
    tags: ['分級', '規範數字', '10 題'],
    accent: '#7c4a2d',
    accent2: '#40241a'
  },
]

const stats = computed(() => {
  const keys = ['al_grandcru_easy_best', 'al_grape_easy_best', 'al_class_easy_best']
  let played = 0, totalBest = 0
  keys.forEach(k => { const v = parseInt(localStorage.getItem(k) || '0'); if (v > 0) { played++; totalBest += v } })
  return [
    { icon: '🎮', value: played,                          label: '已挑戰遊戲' },
    { icon: '📊', value: keys.length,                     label: '全部遊戲' },
    { icon: '🏅', value: totalBest > 0 ? totalBest : '—', label: '累計最高分' }
  ]
})
</script>
