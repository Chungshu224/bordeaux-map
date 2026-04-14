<template>
  <div class="game-hub">

    <!-- ══ HUB 總覽 ══ -->
    <template v-if="!currentGame">
      <div class="hub-header">
        <button class="back-btn" @click="$emit('back')">← 返回</button>
        <div class="hub-title-block">
          <h1 class="hub-title">🎮 互動練習</h1>
          <p class="hub-subtitle">義大利葡萄酒挑戰賽 · 測試你的知識</p>
        </div>
      </div>

      <div class="hub-grid">
        <div
          v-for="g in GAMES"
          :key="g.id"
          class="game-card"
          :style="{ '--accent': g.accent, '--accent2': g.accent2 }"
          @click="currentGame = g.id"
        >
          <div class="card-icon">{{ g.icon }}</div>
          <div class="card-body">
            <div class="card-name">{{ g.name }}</div>
            <div class="card-desc">{{ g.desc }}</div>
            <div class="card-tags">
              <span v-for="t in g.tags" :key="t" class="tag">{{ t }}</span>
            </div>
          </div>
          <div class="card-arrow">›</div>
        </div>
      </div>
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
import { ref } from 'vue'
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
