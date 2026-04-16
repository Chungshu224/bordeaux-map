<template>
  <div class="sgh-page">
    <button class="back-btn" @click="$emit('back')">← 返回</button>

    <!-- 各遊戲頁面 -->
    <SpainRegionQuizPage       v-if="activeGame === 'region'"        @back="activeGame = null" />
    <SpainGrapeMatchPage       v-else-if="activeGame === 'grape'"    @back="activeGame = null" />
    <SpainSherryQuizPage       v-else-if="activeGame === 'sherry'"   @back="activeGame = null" />
    <SpainClassificationQuizPage v-else-if="activeGame === 'classification'" @back="activeGame = null" />
    <SpainVintageSortPage      v-else-if="activeGame === 'vintage'"  @back="activeGame = null" />

    <!-- Hub -->
    <div v-else class="hub">
      <div class="hub-inner">

        <header class="hub-header">
          <div class="hub-icon">🎮</div>
          <h1 class="hub-title">西班牙互動練習</h1>
          <p class="hub-sub">5 種遊戲模式・全面掌握西班牙葡萄酒知識</p>
        </header>

        <div class="games-grid">
          <div
            v-for="g in GAMES"
            :key="g.id"
            class="game-card"
            :style="{ '--accent': g.accent, '--accent2': g.accent2 }"
            @click="activeGame = g.id"
          >
            <div class="gc-accent-bar"></div>
            <div class="gc-icon">{{ g.icon }}</div>
            <div class="gc-name">{{ g.name }}</div>
            <div class="gc-desc">{{ g.desc }}</div>
            <div class="gc-tags">
              <span v-for="tag in g.tags" :key="tag" class="gc-tag">{{ tag }}</span>
            </div>
            <div class="gc-play">開始 →</div>
          </div>
        </div>

        <div class="hub-footer">
          <div class="footer-tip">💡 完成所有練習並上傳成績，可在排行榜上查看排名</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SpainRegionQuizPage          from './SpainRegionQuizPage.vue'
import SpainGrapeMatchPage          from './SpainGrapeMatchPage.vue'
import SpainSherryQuizPage          from './SpainSherryQuizPage.vue'
import SpainClassificationQuizPage  from './SpainClassificationQuizPage.vue'
import SpainVintageSortPage         from './SpainVintageSortPage.vue'

defineEmits(['back'])

const activeGame = ref(null)

const GAMES = [
  {
    id: 'region',
    icon: '🗺️',
    name: '產區歸屬賽',
    desc: '看到 DO 名稱，快速選出所屬的西班牙自治區',
    tags: ['地理', '簡單/困難', '10–15 題'],
    accent: '#f87171',
    accent2: '#c0392b'
  },
  {
    id: 'grape',
    icon: '🍇',
    name: '品種×產區配對',
    desc: '西班牙葡萄品種對應最著名的自治區或 DO',
    tags: ['品種', '配對', '簡單/困難'],
    accent: '#a78bfa',
    accent2: '#7c3aed'
  },
  {
    id: 'sherry',
    icon: '🏺',
    name: '雪莉酒識別賽',
    desc: '閱讀描述，辨識 Fino、Oloroso、PX 等 7 種雪莉',
    tags: ['雪莉', '描述', '西班牙獨有'],
    accent: '#fbbf24',
    accent2: '#b45309'
  },
  {
    id: 'classification',
    icon: '🏷️',
    name: '分級辨識快答',
    desc: 'DO/DOCa/VP 法定分級 + Crianza 陳年制度',
    tags: ['分級', '陳年', '10–15 題'],
    accent: '#34d399',
    accent2: '#047857'
  },
  {
    id: 'vintage',
    icon: '🌡️',
    name: '年份品質排序',
    desc: 'Rioja 或 Ribera del Duero 年份品質由最佳排到最差',
    tags: ['年份', '排序', '5 輪'],
    accent: '#60a5fa',
    accent2: '#1d4ed8'
  },
]
</script>

<style scoped>
.sgh-page {
  width: 100%; min-height: 100vh;
  background: linear-gradient(160deg, #140808 0%, #231212 45%, #141420 100%);
  color: #f0f0f0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif;
}

.back-btn {
  position: fixed; top: 16px; left: 16px; z-index: 100;
  background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.6);
  border: 1px solid rgba(255,255,255,0.12); border-radius: 10px;
  padding: 8px 14px; cursor: pointer; font-size: 0.9rem; transition: all 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.13); color: #fff; }

/* Hub */
.hub { min-height: 100vh; overflow-y: auto; padding: 70px 20px 48px; display: flex; justify-content: center; }
.hub-inner { width: 100%; max-width: 720px; }

.hub-header { text-align: center; margin-bottom: 36px; }
.hub-icon { font-size: 3rem; margin-bottom: 12px; }
.hub-title { font-size: 2rem; font-weight: 900; color: #f87171; margin: 0 0 8px; }
.hub-sub { color: rgba(255,255,255,0.5); font-size: 0.95rem; margin: 0; }

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}

.game-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 18px;
  padding: 0 0 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}
.game-card:hover {
  background: rgba(255,255,255,0.08);
  transform: translateY(-3px);
  box-shadow: 0 10px 32px rgba(0,0,0,0.35);
  border-color: var(--accent, rgba(255,255,255,0.2));
}

.gc-accent-bar {
  height: 4px;
  background: linear-gradient(90deg, var(--accent2, #888), var(--accent, #aaa));
  margin-bottom: 18px;
}
.gc-icon { font-size: 2.2rem; text-align: center; margin-bottom: 8px; padding: 0 20px; }
.gc-name { font-size: 1.15rem; font-weight: 800; color: var(--accent, #fff); text-align: center; margin-bottom: 8px; padding: 0 20px; }
.gc-desc { font-size: 0.83rem; color: rgba(255,255,255,0.5); text-align: center; line-height: 1.55; margin-bottom: 12px; padding: 0 20px; }
.gc-tags { display: flex; flex-wrap: wrap; gap: 5px; justify-content: center; margin-bottom: 14px; padding: 0 16px; }
.gc-tag {
  background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px; padding: 2px 10px; font-size: 0.72rem; color: rgba(255,255,255,0.55);
}
.gc-play {
  text-align: center; font-size: 0.9rem; font-weight: 700;
  color: var(--accent, #fff); padding: 0 20px; letter-spacing: 0.03em;
}

.hub-footer { text-align: center; }
.footer-tip { display: inline-block; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 10px 20px; font-size: 0.82rem; color: rgba(255,255,255,0.4); }

@media (max-width: 500px) {
  .games-grid { grid-template-columns: 1fr; }
  .hub-title { font-size: 1.6rem; }
}
</style>
