<template>
  <div class="hu-game-hub">

    <!-- ══ HUB 總覽 ══ -->
    <template v-if="!currentGame">
      <SharedGameHub
        title="匈牙利互動練習"
        subtitle="匈牙利葡萄酒知識挑戰——選擇遊戲開始！"
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

    <!-- ══ 子遊戲 ══ -->
    <HungaryRegionClassifierPage  v-else-if="currentGame === 'region'"         @back="currentGame = null" />
    <HungaryGrapeMatchPage        v-else-if="currentGame === 'grape'"          @back="currentGame = null" />
    <HungaryTokajFlashPage        v-else-if="currentGame === 'tokaj'"          @back="currentGame = null" />
    <HungaryClassificationQuizPage v-else-if="currentGame === 'classification'" @back="currentGame = null" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SharedGameHub from '../shared/GameHub.vue'
import HungaryRegionClassifierPage  from './HungaryRegionClassifierPage.vue'
import HungaryGrapeMatchPage        from './HungaryGrapeMatchPage.vue'
import HungaryTokajFlashPage        from './HungaryTokajFlashPage.vue'
import HungaryClassificationQuizPage from './HungaryClassificationQuizPage.vue'

defineEmits(['back'])

const currentGame = ref(null)

const GAMES = [
  {
    id:      'region',
    icon:    '🏰',
    name:    '產區群速答',
    desc:    '看到產區名稱立刻分類：托卡伊、紅酒名區或白酒/其他，考驗產區地理直覺',
    tags:    ['快答', '簡單 / 困難', 'Combo 系統'],
    accent:  '#c8102e',
    accent2: '#e83a5a',
  },
  {
    id:      'grape',
    icon:    '🍇',
    name:    '品種知識配對',
    desc:    '從描述判斷品種，或從品種找出正確特徵，掌握 Furmint・Kékfrankos 等核心品種',
    tags:    ['配對', '雙向挑戰', '錯題回顧'],
    accent:  '#BF6900',
    accent2: '#e88f00',
  },
  {
    id:      'tokaj',
    icon:    '🍯',
    name:    '托卡伊知識閃問',
    desc:    '托卡伊 Aszú・Puttonyos・公牛血傳奇——全面測試匈牙利葡萄酒知識',
    tags:    ['問答', '簡單 / 困難', '35+ 題庫'],
    accent:  '#7b1fa2',
    accent2: '#9c27b0',
  },
  {
    id:      'classification',
    icon:    '🏷️',
    name:    '分級辨識快答',
    desc:    '匈牙利經典酒款辨識 + Tokaji Aszú 3-6 Puttonyos 殘糖等級',
    tags:    ['分級', '簡單 / 困難', 'Tokaji 等級'],
    accent:  '#c084fc',
    accent2: '#9333ea',
  },
]

const stats = computed(() => {
  const keys = ['hu_region_best', 'hu_grape_best', 'hu_tokaj_best', 'hu_class_best']
  let played = 0, totalBest = 0
  keys.forEach(k => { const v = parseInt(localStorage.getItem(k) || '0'); if (v > 0) { played++; totalBest += v } })
  return [
    { icon: '🎮', value: played,                          label: '已挑戰遲戲' },
    { icon: '📊', value: keys.length,                     label: '全部遲戲' },
    { icon: '🏅', value: totalBest > 0 ? totalBest : '—', label: '累計最高分' }
  ]
})
</script>

<style scoped>
.hu-game-hub {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(135deg, #12060a 0%, #1e0c12 100%);
  color: #f0e6d3;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  display: flex;
  flex-direction: column;
}

.hub-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px 0;
  flex-shrink: 0;
}

.back-btn {
  background: rgba(255,255,255,0.07);
  color: #9a8070;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  padding: 8px 16px;
  font-size: 0.86rem;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.18s;
  flex-shrink: 0;
}
.back-btn:hover { background: rgba(255,255,255,0.14); color: #f0e6d3; }

.hub-title-block { flex: 1; }
.hub-title { font-size: 1.6rem; font-weight: 800; margin: 0; line-height: 1.1; }
.hub-subtitle { color: #6b5040; font-size: 0.85rem; margin: 3px 0 0; }

.hub-grid {
  flex: 1;
  padding: 24px 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.game-card {
  display: flex;
  align-items: center;
  gap: 18px;
  background: rgba(255,255,255,0.04);
  border: 1.5px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 22px 22px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}
.game-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  opacity: 0;
  transition: opacity 0.2s;
}
.game-card:hover::before { opacity: 0.07; }
.game-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(0,0,0,0.4);
}

.card-icon {
  font-size: 2.4rem;
  flex-shrink: 0;
  line-height: 1;
  position: relative;
  z-index: 1;
}

.card-body {
  flex: 1;
  position: relative;
  z-index: 1;
}

.card-name { font-size: 1.1rem; font-weight: 800; color: #f0e6d3; margin-bottom: 4px; }
.card-desc { font-size: 0.84rem; color: #9a8070; line-height: 1.4; margin-bottom: 8px; }

.card-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.tag {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 3px 10px;
  font-size: 0.76rem;
  color: #6b5040;
}

.card-arrow {
  font-size: 1.6rem;
  color: #4a3020;
  position: relative;
  z-index: 1;
  transition: color 0.2s, transform 0.2s;
}
.game-card:hover .card-arrow { color: var(--accent); transform: translateX(3px); }
</style>
