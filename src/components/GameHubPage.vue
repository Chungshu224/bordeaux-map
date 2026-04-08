<template>
  <div class="game-hub">

    <!-- ══ HUB 總覽 ══ -->
    <template v-if="!currentGame">
      <div class="hub-header">
        <button class="back-btn" @click="$emit('back')">← 返回</button>
        <div class="hub-title-block">
          <h1 class="hub-title">🎮 互動練習</h1>
          <p class="hub-subtitle">選擇一個遊戲開始挑戰</p>
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
    <MapQuizPage      v-else-if="currentGame === 'map'"     @back="currentGame = null" />
    <BankQuizPage     v-else-if="currentGame === 'bank'"    @back="currentGame = null" />
    <VintageSortPage  v-else-if="currentGame === 'vintage'" @back="currentGame = null" />
    <GrapeSoilMatchPage v-else-if="currentGame === 'grape'" @back="currentGame = null" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MapQuizPage       from './MapQuizPage.vue'
import BankQuizPage      from './BankQuizPage.vue'
import VintageSortPage   from './VintageSortPage.vue'
import GrapeSoilMatchPage from './GrapeSoilMatchPage.vue'

defineEmits(['back'])

const currentGame = ref(null)

const GAMES = [
  {
    id:     'map',
    icon:   '🗺️',
    name:   '產區競答',
    desc:   '點擊地圖上的產區，考驗你對波爾多產區位置的認識',
    tags:   ['地圖互動', '簡單 / 困難', '15–35 題'],
    accent: '#f97316',
    accent2:'#ef4444',
  },
  {
    id:     'bank',
    icon:   '⚡',
    name:   '左右岸競速',
    desc:   '看到 AOC 名稱立刻分類：左岸、右岸，困難模式還加入兩河之間與索甸甜酒帶',
    tags:   ['快答', '簡單 / 困難', 'Combo 系統'],
    accent: '#0ea5e9',
    accent2:'#38bdf8',
  },
  {
    id:     'vintage',
    icon:   '🌡️',
    name:   '年份溫度排列',
    desc:   '將波爾多年份依夏季均溫由最熱排到最冷，考驗對偉大年份的記憶',
    tags:   ['排序', '簡單 / 困難', '5 輪 × 4-5 張'],
    accent: '#f59e0b',
    accent2:'#d97706',
  },
  {
    id:     'grape',
    icon:   '🍇',
    name:   '葡萄 × 土壤配對',
    desc:   '快速判斷哪個品種最愛哪種土，困難模式加入逆向題（土壤 → 品種）',
    tags:   ['配對', '簡單 / 困難', '錯題回顧'],
    accent: '#22c55e',
    accent2:'#15803d',
  },
]
</script>

<style scoped>
.game-hub {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #0d1117;
  color: #f0f6fc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* ── Header ──────────────────────────────────────────────── */
.hub-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px 0;
  flex-shrink: 0;
}

.back-btn {
  background: rgba(255,255,255,0.07);
  color: #8b949e;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  padding: 8px 16px;
  font-size: 0.86rem;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.18s;
  flex-shrink: 0;
}
.back-btn:hover { background: rgba(255,255,255,0.14); color: #f0f6fc; }

.hub-title-block { flex: 1; }
.hub-title {
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.1;
}
.hub-subtitle {
  color: #6e7681;
  font-size: 0.85rem;
  margin: 3px 0 0;
}

/* ── Grid ─────────────────────────────────────────────────── */
.hub-grid {
  flex: 1;
  overflow-y: auto;
  padding: 20px 20px 32px;
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
  padding: 20px 22px;
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
  box-shadow: 0 12px 28px rgba(0,0,0,0.3);
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

.card-name {
  font-size: 1.1rem;
  font-weight: 800;
  color: #f0f6fc;
  margin-bottom: 4px;
}
.card-desc {
  font-size: 0.8rem;
  color: #8b949e;
  line-height: 1.45;
  margin-bottom: 8px;
}
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.tag {
  font-size: 0.7rem;
  padding: 2px 9px;
  border-radius: 10px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  color: #6e7681;
}

.card-arrow {
  font-size: 1.6rem;
  color: rgba(255,255,255,0.15);
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  transition: color 0.2s, transform 0.2s;
}
.game-card:hover .card-arrow {
  color: var(--accent);
  transform: translateX(4px);
}
</style>
