<template>
  <div class="pt-game-hub">
    <button class="back-btn" @click="emit('back')">← 返回課程</button>

    <!-- 顯示子遊戲 -->
    <PortugalRegionQuizPage  v-if="currentGame === 'region'"   @back="currentGame = null" />
    <PortugalPortWineQuizPage v-else-if="currentGame === 'portwine'" @back="currentGame = null" />
    <PortugalFlashCardPage   v-else-if="currentGame === 'flashcard'"  @back="currentGame = null" />

    <!-- Hub 介面 -->
    <template v-else>
      <div class="hub-header">
        <div class="hub-flag">🇵🇹</div>
        <h1 class="hub-title">葡萄牙互動練習</h1>
        <p class="hub-sub">選擇一款小遊戲，鞏固你的葡萄牙葡萄酒知識！</p>
      </div>

      <div class="game-grid">
        <div
          v-for="g in GAMES"
          :key="g.id"
          class="game-card"
          @click="currentGame = g.id"
        >
          <div class="gc-icon">{{ g.icon }}</div>
          <div class="gc-body">
            <div class="gc-name">{{ g.name }}</div>
            <div class="gc-desc">{{ g.desc }}</div>
            <div class="gc-meta">
              <span class="meta-tag easy">簡單 {{ g.easyLabel }}</span>
              <span class="meta-tag hard">困難 {{ g.hardLabel }}</span>
            </div>
          </div>
          <div class="gc-arrow">▶</div>
        </div>
      </div>

      <div class="hub-footer">
        <div class="footer-note">🏆 每款遊戲都有計分與最佳紀錄 — 鍵盤 1–6 可快速答題！</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PortugalRegionQuizPage   from './PortugalRegionQuizPage.vue'
import PortugalPortWineQuizPage from './PortugalPortWineQuizPage.vue'
import PortugalFlashCardPage    from './PortugalFlashCardPage.vue'

const emit = defineEmits(['back'])
const currentGame = ref(null)

const GAMES = [
  {
    id: 'region',
    icon: '🗺️',
    name: '產區地理競速',
    desc: '看到 DOC 產區名稱，快速判斷所屬地理區域',
    easyLabel: '3 大區・15 題',
    hardLabel: '6 細區・20 題',
  },
  {
    id: 'portwine',
    icon: '🥃',
    name: '加烈酒分類競速',
    desc: '分辨波特酒類型：Ruby / Tawny / LBV / Vintage / Colheita / White',
    easyLabel: 'Ruby vs Tawny・15 題',
    hardLabel: '6 種類別・18 題',
  },
  {
    id: 'flashcard',
    icon: '🃏',
    name: '產區特色閃卡',
    desc: '根據氣候、土壤、品種提示，推理出正確的葡萄牙產區',
    easyLabel: '12 DOC・4 選項',
    hardLabel: '全 20 DOC・5 秒',
  },
]
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
