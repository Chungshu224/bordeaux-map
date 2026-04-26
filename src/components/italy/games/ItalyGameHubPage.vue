<template>
  <div class="game-hub">

    <!-- ══ HUB 總覽 ══ -->
    <template v-if="!currentGame">
      <SharedGameHub
        title="義大利互動練習"
        subtitle="義大利葡萄酒挑戰賽 · 測試你的知識"
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
    <ItalyRegionQuizPage         v-else-if="currentGame === 'region'"         @back="currentGame = null" />
    <ItalyClassificationQuizPage v-else-if="currentGame === 'classification'" @back="currentGame = null" />
    <ItalyGrapeMatchPage         v-else-if="currentGame === 'grape'"          @back="currentGame = null" />
    <ItalyVintageSortPage        v-else-if="currentGame === 'vintage'"        @back="currentGame = null" />
    <ItalyWineDescQuizPage       v-else-if="currentGame === 'desc'"           @back="currentGame = null" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SharedGameHub from '../../shared/GameHub.vue'
import ItalyRegionQuizPage         from './ItalyRegionQuizPage.vue'
import ItalyClassificationQuizPage from './ItalyClassificationQuizPage.vue'
import ItalyGrapeMatchPage         from './ItalyGrapeMatchPage.vue'
import ItalyVintageSortPage        from './ItalyVintageSortPage.vue'
import ItalyWineDescQuizPage       from './ItalyWineDescQuizPage.vue'

defineEmits(['back'])

const currentGame = ref(null)

const GAMES = [
  {
    id: 'region',
    icon: '🗺️',
    name: '產區歸屬賽',
    desc: '看到 DOCG / DOC 名稱，快速選出所屬的義大利大區',
    tags: ['地理', '簡單 / 困難', '10–15 題'],
    accent: '#4ade80', accent2: '#16a34a'
  },
  {
    id: 'classification',
    icon: '🏷️',
    name: '分級辨識快答',
    desc: '義大利法定產區是 DOCG、DOC 還是 IGT？考驗你的記憶',
    tags: ['分級制度', '快答', '10–20 題'],
    accent: '#c8a96e', accent2: '#9b6a1f'
  },
  {
    id: 'grape',
    icon: '🍇',
    name: '品種 × 產區配對',
    desc: '給出義大利葡萄品種，快速選出最著名的產區或 DOCG',
    tags: ['品種', '配對', '簡單 / 困難'],
    accent: '#a78bfa', accent2: '#7c3aed'
  },
  {
    id: 'vintage',
    icon: '🌡️',
    name: '年份品質排序',
    desc: '將義大利重要年份依品質由最佳排到最差，Toscana 或 Piemonte',
    tags: ['年份', '排序', '5 輪'],
    accent: '#f87171', accent2: '#be185d'
  },
  {
    id: 'desc',
    icon: '📖',
    name: '香氣描述競猜',
    desc: '閱讀葡萄酒風格描述，猜出對應的義大利知名酒款',
    tags: ['品飲', '描述', '10–15 題'],
    accent: '#60a5fa', accent2: '#1d4ed8'
  }
]

const stats = computed(() => {
  const keys = ['it_region_best', 'it_class_best', 'it_grape_best', 'it_vintage_best', 'it_desc_best']
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
.game-hub {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(160deg, #1a0a1e 0%, #2d1b3d 45%, #1a2a4a 100%);
  color: #f0f0f0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  color: rgba(255,255,255,0.6);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  padding: 8px 14px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.13); color: #fff; }

.hub-title { font-size: 1.8rem; margin: 0; color: #c8a96e; }
.hub-subtitle { margin: 4px 0 0; color: rgba(255,255,255,0.5); font-size: 0.9rem; }

.hub-grid {
  flex: 1;
  overflow-y: auto;
  padding: 20px 24px 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.game-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.09);
  border-left: 4px solid var(--accent);
  border-radius: 16px;
  padding: 16px 20px;
  cursor: pointer;
  transition: all 0.2s;
}
.game-card:hover {
  background: rgba(255,255,255,0.09);
  transform: translateX(4px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.card-icon  { font-size: 2rem; flex-shrink: 0; }
.card-body  { flex: 1; }
.card-name  { font-size: 1.05rem; font-weight: 700; color: var(--accent); margin-bottom: 4px; }
.card-desc  { font-size: 0.85rem; color: rgba(255,255,255,0.6); line-height: 1.4; }
.card-tags  { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
.tag {
  font-size: 0.72rem;
  padding: 2px 8px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 20px;
  color: rgba(255,255,255,0.45);
}
.card-arrow { font-size: 1.8rem; color: var(--accent); opacity: 0.6; flex-shrink: 0; }

@media (max-width: 600px) {
  .hub-header { padding: 14px 16px 0; }
  .hub-grid   { padding: 16px; }
  .hub-title  { font-size: 1.4rem; }
}
</style>
