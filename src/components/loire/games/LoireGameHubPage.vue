<template>
  <div class="lgh-page">
    <button class="back-btn" @click="emit('back')">← 返回課程</button>

    <div class="hub-header">
      <div class="hub-icon">🎮</div>
      <h1 class="hub-title">羅亞爾河谷 · 互動遊戲</h1>
      <p class="hub-subtitle">透過遊戲強化記憶，挑戰排行榜！</p>
    </div>

    <div class="games-grid">
      <div
        v-for="game in GAMES"
        :key="game.id"
        class="game-card"
        :style="{ '--accent': game.accent }"
        @click="openGame(game.id)"
      >
        <div class="card-icon">{{ game.icon }}</div>
        <div class="card-info">
          <div class="card-title">{{ game.title }}</div>
          <div class="card-desc">{{ game.desc }}</div>
          <div class="card-tags">
            <span v-for="t in game.tags" :key="t" class="tag">{{ t }}</span>
          </div>
        </div>
        <div class="card-arrow">→</div>
      </div>
    </div>

    <!-- 遊戲容器 -->
    <Teleport to="body">
      <Transition name="game-slide">
        <div v-if="activeGame" class="game-overlay">
          <component
            :is="activeComponent"
            @back="closeGame"
          />
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import LoireRegionQuizPage   from './LoireRegionQuizPage.vue'
import LoireMapQuizPage      from './LoireMapQuizPage.vue'
import LoireGrapeMatchPage   from './LoireGrapeMatchPage.vue'
import LoireSweetnessSortPage from './LoireSweetnessSortPage.vue'
import LoireSoilMatchPage    from './LoireSoilMatchPage.vue'
import LoireFoodPairingPage  from './LoireFoodPairingPage.vue'

const emit = defineEmits(['back'])

const GAMES = [
  {
    id: 'region_quiz',
    icon: '🗺️',
    title: '四大產區群競速分類',
    desc: '快速將羅亞爾河 AOC 分入正確的產區群！',
    tags: ['Pays Nantais', 'Anjou-Saumur', 'Touraine', 'Centre'],
    accent: '#3b82f6',
  },
  {
    id: 'map_quiz',
    icon: '📍',
    title: '產區地圖競答',
    desc: '聽到 AOC 名稱，在地圖上點出正確位置！',
    tags: ['地圖互動', 'Mapbox', '位置記憶'],
    accent: '#0ea5e9',
  },
  {
    id: 'grape_match',
    icon: '🍇',
    title: '葡萄品種 × AOC 配對',
    desc: '考驗你對白詩南、長相思、品麗珠分佈的掌握！',
    tags: ['Chenin Blanc', 'Sauvignon Blanc', 'Cabernet Franc'],
    accent: '#8b5cf6',
  },
  {
    id: 'sweetness_sort',
    icon: '🍬',
    title: '甜度光譜排列',
    desc: '將白詩南酒款從最干排到最甜——Sec 到 Liquoreux！',
    tags: ['殘糖量', '甜度排序', '5 輪挑戰'],
    accent: '#f59e0b',
  },
  {
    id: 'soil_match',
    icon: '🪨',
    title: '土壤 × 產區配對',
    desc: '了解每個 AOC 底下的土壤特色！',
    tags: ['Tuffeau', 'Schiste', 'Silex', 'Granite'],
    accent: '#6b7280',
  },
  {
    id: 'food_pairing',
    icon: '🍽️',
    title: '餐酒配對賽',
    desc: '看到法式料理，快速選出最佳搭配酒款！',
    tags: ['配餐', '山羊起司', '龍蝦', '貴腐甜酒'],
    accent: '#22c55e',
  },
]

const COMPONENT_MAP = {
  region_quiz:    LoireRegionQuizPage,
  map_quiz:       LoireMapQuizPage,
  grape_match:    LoireGrapeMatchPage,
  sweetness_sort: LoireSweetnessSortPage,
  soil_match:     LoireSoilMatchPage,
  food_pairing:   LoireFoodPairingPage,
}

const activeGame = ref(null)
const activeComponent = computed(() => activeGame.value ? COMPONENT_MAP[activeGame.value] : null)

function openGame(id) { activeGame.value = id }
function closeGame()  { activeGame.value = null }
</script>

<style scoped>
.lgh-page {
  width: 100%; min-height: 100vh;
  background: linear-gradient(160deg, #0a0e1a 0%, #111827 50%, #0d1120 100%);
  color: #fff;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
  display: flex; flex-direction: column; align-items: center;
  padding: 60px 24px 48px;
  overflow-y: auto;
}

.back-btn {
  position: fixed; top: 12px; left: 16px; z-index: 10;
  padding: 6px 16px; border-radius: 20px; border: none;
  background: rgba(255,255,255,0.12); color: #fff; cursor: pointer;
  font-size: 0.85rem; backdrop-filter: blur(4px); transition: background 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.22); }

.hub-header { text-align: center; margin-bottom: 36px; }
.hub-icon   { font-size: 3.5rem; margin-bottom: 8px; }
.hub-title  { font-size: 1.9rem; font-weight: 800; margin: 0 0 6px; }
.hub-subtitle { color: rgba(255,255,255,0.5); font-size: 0.95rem; margin: 0; }

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  width: 100%;
  max-width: 900px;
}

.game-card {
  display: flex; align-items: center; gap: 16px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px; padding: 20px;
  cursor: pointer; transition: transform 0.15s, background 0.15s, border-color 0.2s;
  border-left: 3px solid var(--accent, #fff);
}
.game-card:hover {
  transform: translateY(-3px);
  background: rgba(255,255,255,0.1);
  border-color: var(--accent, rgba(255,255,255,0.3));
}

.card-icon { font-size: 2.5rem; flex-shrink: 0; }
.card-info { flex: 1; min-width: 0; }
.card-title { font-size: 0.98rem; font-weight: 700; margin-bottom: 4px; }
.card-desc  { font-size: 0.8rem; color: rgba(255,255,255,0.5); margin-bottom: 8px; line-height: 1.4; }
.card-tags  { display: flex; flex-wrap: wrap; gap: 4px; }
.tag {
  padding: 2px 8px; border-radius: 10px;
  background: rgba(255,255,255,0.08);
  font-size: 0.7rem; color: rgba(255,255,255,0.55);
  border: 1px solid rgba(255,255,255,0.1);
}
.card-arrow {
  font-size: 1.2rem; color: var(--accent, rgba(255,255,255,0.4));
  flex-shrink: 0; opacity: 0.7; transition: transform 0.15s;
}
.game-card:hover .card-arrow { transform: translateX(4px); }

/* ── OVERLAY ── */
.game-overlay {
  position: fixed; inset: 0; z-index: 9999;
  background: #000;
  display: flex; flex-direction: column;
  overflow: hidden;
}
.game-slide-enter-active { transition: transform 0.3s ease, opacity 0.3s; }
.game-slide-leave-active { transition: transform 0.2s ease, opacity 0.2s; }
.game-slide-enter-from  { transform: translateX(100%); opacity: 0; }
.game-slide-leave-to    { transform: translateX(100%); opacity: 0; }

@media (max-width: 540px) {
  .games-grid { grid-template-columns: 1fr; }
  .hub-title { font-size: 1.5rem; }
}
</style>
