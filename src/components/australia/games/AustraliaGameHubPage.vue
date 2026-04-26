<template>
  <div class="au-game-hub">

    <!-- ══ HUB 總覽 ══ -->
    <template v-if="!currentGame">
      <SharedGameHub
        title="澳洲互動練習"
        subtitle="選擇一個遊戲開始挑戰澳洲葡萄酒知識"
        :games="GAMES"
        @back="$emit('back')"
        @select="currentGame = $event"
      />
    </template>

    <!-- ══ 子遊戲 ══ -->
    <AustraliaStateQuizPage
      v-else-if="currentGame === 'state'"
      @back="currentGame = null"
    />
    <AustraliaVarietyMatchPage
      v-else-if="currentGame === 'variety'"
      @back="currentGame = null"
    />
    <AustraliaFlashCardPage
      v-else-if="currentGame === 'flashcard'"
      @back="currentGame = null"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SharedGameHub from '../../shared/GameHub.vue'
import AustraliaStateQuizPage    from './AustraliaStateQuizPage.vue'
import AustraliaVarietyMatchPage from './AustraliaVarietyMatchPage.vue'
import AustraliaFlashCardPage    from './AustraliaFlashCardPage.vue'

defineEmits(['back'])

const currentGame = ref(null)

const GAMES = [
  {
    id:     'state',
    icon:   '🗺️',
    name:   '州別競速',
    desc:   '看到產區名稱，立刻判斷它屬於哪個州！SA、VIC、NSW、WA…',
    tags:   ['快答', '簡單 / 困難', '15–20 題'],
    accent: '#f97316',
    accent2: '#ef4444',
  },
  {
    id:     'variety',
    icon:   '🍇',
    name:   '品種 × 產區配對',
    desc:   '澳洲哪個品種最能代表哪個產區？雙向配對考驗！',
    tags:   ['配對', '品種 / 產區', '12–18 題'],
    accent: '#8b5cf6',
    accent2: '#7c3aed',
  },
  {
    id:     'flashcard',
    icon:   '🃏',
    name:   '產區特色閃卡',
    desc:   '看到線索（氣候、土壤、品種），快速猜出是哪個產區！',
    tags:   ['推理', '閃卡', '12–16 題'],
    accent: '#10b981',
    accent2: '#059669',
  },
]
</script>

<style scoped>
.au-game-hub {
  min-height: 100vh;
  background: linear-gradient(160deg, #001a33 0%, #003366 100%);
  color: #fff;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hub-header {
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.back-btn {
  background: rgba(255,255,255,0.1);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 0.9rem;
  flex-shrink: 0;
  transition: background 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.2); }

.hub-title-block { flex: 1; }
.hub-title { font-size: clamp(1.6rem, 4vw, 2.2rem); font-weight: 800; margin: 0; }
.hub-subtitle { color: rgba(255,255,255,0.6); margin: 0.25rem 0 0; font-size: 0.95rem; }

/* ── Grid ───────────────────────────────────────────────────────────── */
.hub-grid {
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.game-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 20px;
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
  position: relative;
  overflow: hidden;
}
.game-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  border-radius: 20px 20px 0 0;
}
.game-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.3);
  background: rgba(255,255,255,0.1);
}

.card-icon { font-size: 2.2rem; flex-shrink: 0; }
.card-body { flex: 1; }
.card-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.35rem; }
.card-desc { font-size: 0.85rem; color: rgba(255,255,255,0.65); line-height: 1.4; margin-bottom: 0.6rem; }
.card-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
.tag {
  background: rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 2px 10px;
  font-size: 0.75rem;
  color: rgba(255,255,255,0.7);
}
.card-arrow {
  font-size: 1.5rem;
  color: rgba(255,255,255,0.3);
  align-self: center;
  flex-shrink: 0;
}

.hub-tip {
  background: rgba(200,169,81,0.1);
  border: 1px solid rgba(200,169,81,0.25);
  border-radius: 12px;
  padding: 0.75rem 1.25rem;
  font-size: 0.88rem;
  color: #f0d080;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  max-width: 800px;
  width: 100%;
}
.tip-icon { font-size: 1.2rem; }

@media (max-width: 480px) {
  .hub-grid { grid-template-columns: 1fr; }
}
</style>
