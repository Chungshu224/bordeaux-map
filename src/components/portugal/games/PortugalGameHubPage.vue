<template>
  <SharedGameHub
    v-if="!currentGame"
    title="葡萄牙互動練習"
    subtitle="選擇一款小遊戲，鞏固你的葡萄牙葡萄酒知識！"
    :games="GAMES"
    @back="emit('back')"
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
  <PortugalRegionQuizPage         v-else-if="currentGame === 'region'"         @back="currentGame = null" />
  <PortugalPortWineQuizPage       v-else-if="currentGame === 'portwine'"       @back="currentGame = null" />
  <PortugalFlashCardPage          v-else-if="currentGame === 'flashcard'"      @back="currentGame = null" />
  <PortugalClassificationQuizPage v-else-if="currentGame === 'classification'" @back="currentGame = null" />
</template>

<script setup>
import { ref, computed } from 'vue'
import SharedGameHub from '../../shared/GameHub.vue'
import PortugalRegionQuizPage         from './PortugalRegionQuizPage.vue'
import PortugalPortWineQuizPage       from './PortugalPortWineQuizPage.vue'
import PortugalFlashCardPage          from './PortugalFlashCardPage.vue'
import PortugalClassificationQuizPage from './PortugalClassificationQuizPage.vue'

const emit = defineEmits(['back'])
const currentGame = ref(null)

const GAMES = [
  {
    id: 'region',
    icon: '🗺️',
    name: '產區地理競速',
    desc: '看到 DOC 產區名稱，快速判斷所屬地理區域',
    tags: ['地理', '3大區·15題', '6細區·20題'],
    accent: '#4ade80', accent2: '#16a34a'
  },
  {
    id: 'portwine',
    icon: '🥃',
    name: '加烈酒分類競速',
    desc: '分辨波特酒類型：Ruby / Tawny / LBV / Vintage / Colheita / White',
    tags: ['波特酒', 'Ruby vs Tawny', '6 種類別'],
    accent: '#f59e0b', accent2: '#b45309'
  },
  {
    id: 'flashcard',
    icon: '🃏',
    name: '產區特色閃卡',
    desc: '根據氣候、土壤、品種提示，推理出正確的葡萄牙產區',
    tags: ['閃卡', '12 DOC', '全 20 DOC'],
    accent: '#60a5fa', accent2: '#1d4ed8'
  },
  {
    id: 'classification',
    icon: '🏷️',
    name: '分級辨識快答',
    desc: 'Port 6 種類別辨識 + Tawny 10/20/30/40 年陳年等級 + DOC 制度',
    tags: ['分級', '簡單 / 困難', 'Port + DOC'],
    accent: '#f97316', accent2: '#c2410c'
  },
]

const stats = computed(() => {
  const keys = ['pt_region_quiz_best', 'pt_portwine_best', 'pt_flashcard_best', 'pt_class_best']
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
.pt-game-hub {
  min-height: 100vh;
  background: linear-gradient(160deg, #003300 0%, #006600 60%, #004d00 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}
.back-btn {
  align-self: flex-start;
  background: rgba(255,255,255,0.1); color: #fff;
  border: 1px solid rgba(255,255,255,0.2); border-radius: 8px;
  padding: 8px 16px; cursor: pointer; font-size: 0.9rem; margin-bottom: 1.5rem;
  transition: background 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.2); }

.hub-header {
  text-align: center; margin-bottom: 2rem;
  display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
}
.hub-flag  { font-size: 3.5rem; }
.hub-title { font-size: clamp(1.6rem, 4vw, 2.4rem); font-weight: 800; margin: 0; }
.hub-sub   { color: rgba(255,255,255,0.65); margin: 0; }

.game-grid {
  width: 100%; max-width: 660px;
  display: flex; flex-direction: column; gap: 1rem;
}
.game-card {
  display: flex; align-items: center; gap: 1.2rem;
  background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 18px; padding: 1.2rem 1.4rem; cursor: pointer;
  transition: transform 0.2s, background 0.2s, box-shadow 0.2s;
}
.game-card:hover {
  background: rgba(255,255,255,0.14);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
}
.gc-icon { font-size: 2.6rem; flex-shrink: 0; }
.gc-body { flex: 1; }
.gc-name { font-size: 1.15rem; font-weight: 700; }
.gc-desc { font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-top: 0.2rem; }
.gc-meta { display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap; }
.meta-tag {
  font-size: 0.75rem; padding: 2px 10px; border-radius: 12px;
}
.meta-tag.easy { background: rgba(34,197,94,0.2);  color: #4ade80;  border: 1px solid rgba(34,197,94,0.3); }
.meta-tag.hard { background: rgba(239,68,68,0.2);  color: #f87171;  border: 1px solid rgba(239,68,68,0.3); }
.gc-arrow { font-size: 1.2rem; color: rgba(255,255,255,0.35); flex-shrink: 0; }

.hub-footer { margin-top: 2rem; text-align: center; }
.footer-note { font-size: 0.82rem; color: rgba(255,255,255,0.4); }
</style>
