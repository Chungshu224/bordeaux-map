<template>
  <SharedGameHub
    v-if="!currentGame"
    title="加州葡萄酒互動練習"
    subtitle="選擇一個遊戲，鞏固你的加州葡萄酒知識！"
    :games="GAMES"
    @back="emit('back')"
    @select="currentGame = $event"
  />
  <CARegionQuizPage v-else-if="currentGame === 'region'" @back="currentGame = null" />
  <CAGrapeQuizPage  v-else-if="currentGame === 'grape'"  @back="currentGame = null" />
  <CATriviaQuizPage v-else-if="currentGame === 'trivia'" @back="currentGame = null" />
</template>

<script setup>
import { ref } from 'vue'
import SharedGameHub from '../../shared/GameHub.vue'
import CARegionQuizPage from './CARegionQuizPage.vue'
import CAGrapeQuizPage  from './CAGrapeQuizPage.vue'
import CATriviaQuizPage from './CATriviaQuizPage.vue'

const emit = defineEmits(['back'])
const currentGame = ref(null)

const GAMES = [
  {
    id: 'region',
    icon: '🗺️',
    name: 'AVA 產區分類競速',
    desc: '聽到 AVA 名稱，快速判斷它屬於 Napa、Sonoma、Central Coast 還是其他地區！',
    tags: ['⌨️ 鍵盤快捷鍵', '⚡ 競速', '🔥 連勝加分'],
    accent: '#f87171', accent2: '#c0392b'
  },
  {
    id: 'grape',
    icon: '🍇',
    name: '葡萄品種配對',
    desc: '看到 AVA 產區，判斷其最代表性的葡萄品種！從 Cabernet 到 Pinot Noir 全都考！',
    tags: ['🍷 8 種品種', '⏱ 限時', '💡 提示'],
    accent: '#a78bfa', accent2: '#7c3aed'
  },
  {
    id: 'trivia',
    icon: '🏆',
    name: '知識問答',
    desc: '涵蓋巴黎評判、膜拜酒、氣候風土等深度知識。4 選 1，答完可複習錯題！',
    tags: ['🏆 巴黎審判', '💎 膜拜酒', '📝 複習錯題'],
    accent: '#fbbf24', accent2: '#b45309'
  },
]
</script>

<style scoped>
.ca-games-page {
  min-height: 100vh;
  background: linear-gradient(160deg, #0f1a0f 0%, #1a0800 50%, #0a0f1a 100%);
  color: #fff;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.back-btn {
  align-self: flex-start;
  margin: 16px 20px 0;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.18);
  color: #ccc; padding: 7px 16px; border-radius: 8px;
  cursor: pointer; font-size: 0.85rem; transition: background 0.15s;
}
.back-btn:hover { background: rgba(255,255,255,0.15); color: #fff; }

.hub {
  width: 100%; max-width: 640px;
  padding: 16px 20px 40px;
  display: flex; flex-direction: column; align-items: center;
}

.hub-header {
  text-align: center; margin-bottom: 36px;
}
.hub-icon { font-size: 3rem; margin-bottom: 12px; }
h1 { font-size: 1.8rem; font-weight: 800; margin: 0 0 8px; }
p  { color: #aaa; font-size: 0.95rem; margin: 0; }

.game-cards {
  width: 100%;
  display: flex; flex-direction: column; gap: 16px;
  margin-bottom: 24px;
}
.game-card {
  display: flex; align-items: center; gap: 16px;
  background: rgba(255,255,255,0.06);
  border: 1.5px solid rgba(255,255,255,0.12);
  border-radius: 18px; padding: 20px 18px;
  cursor: pointer; transition: all 0.2s;
}
.game-card:hover {
  transform: translateY(-3px);
  background: rgba(139,26,26,0.15);
  border-color: rgba(139,26,26,0.5);
  box-shadow: 0 8px 28px rgba(139,26,26,0.2);
}
.gc-icon {
  font-size: 2.4rem; flex-shrink: 0; width: 52px; text-align: center;
}
.gc-content { flex: 1; }
.gc-title { font-size: 1.05rem; font-weight: 700; color: #fff; margin-bottom: 6px; }
.gc-desc  { font-size: 0.82rem; color: #aaa; line-height: 1.5; margin-bottom: 10px; }
.gc-tags  { display: flex; flex-wrap: wrap; gap: 6px; }
.tag {
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.14);
  border-radius: 12px; padding: 3px 10px; font-size: 0.73rem; color: #bbb;
}
.gc-arrow {
  font-size: 1.3rem; color: #666; transition: transform 0.2s; flex-shrink: 0;
}
.game-card:hover .gc-arrow { color: #e74c3c; transform: translateX(4px); }

.hub-footer {
  font-size: 0.78rem; color: #555; text-align: center;
}

@media (max-width: 480px) {
  .gc-icon { font-size: 1.8rem; width: 36px; }
  h1 { font-size: 1.4rem; }
}
</style>
