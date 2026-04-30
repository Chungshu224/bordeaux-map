<template>
  <div class="shared-game-hub">

    <!-- Header -->
    <div class="sgh-header">
      <button class="sgh-back" @click="emit('back')">← {{ $t('common.actions.back') }}</button>
      <div class="sgh-title-block">
        <h1 class="sgh-title">🎮 {{ title }}</h1>
        <p class="sgh-subtitle">{{ subtitle }}</p>
      </div>
    </div>

    <!-- 額外區塊（例如統計列）-->
    <slot name="extra" />

    <!-- 遊戲卡片格 -->
    <div class="sgh-grid">
      <div
        v-for="g in games"
        :key="g.id"
        class="sgh-card"
        :style="{ '--accent': g.accent, '--accent2': g.accent2 || g.accent }"
        @click="emit('select', g.id)"
      >
        <div class="sgh-card-glow"></div>
        <div class="sgh-card-icon">{{ g.icon }}</div>
        <div class="sgh-card-body">
          <div class="sgh-card-name">{{ g.name }}</div>
          <div class="sgh-card-desc">{{ g.desc }}</div>
          <div class="sgh-card-tags">
            <span v-for="t in g.tags" :key="t" class="sgh-tag">{{ t }}</span>
          </div>
        </div>
        <div class="sgh-card-arrow">›</div>
      </div>
    </div>

    <!-- 頁腳（可替換）-->
    <slot name="footer">
      <div class="sgh-tip">
        <span class="sgh-tip-icon">💡</span>
        <span>建議先完成課程學習再來練習，效果更好！鍵盤 1–4 可快速選擇選項。</span>
      </div>
    </slot>

  </div>
</template>

<script setup>
defineProps({
  title:    { type: String, required: true },
  subtitle: { type: String, default: '' },
  games:    { type: Array,  required: true }
})
const emit = defineEmits(['back', 'select'])
</script>

<style scoped>
.shared-game-hub {
  width: 100%;
  min-height: 100vh;
  background: #0f0f1e;
  padding: 0 0 40px;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}

/* ── Header ── */
.sgh-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px 16px;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}
.sgh-back {
  flex-shrink: 0;
  padding: 8px 16px;
  background: rgba(255,255,255,0.08);
  color: #ccc;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 8px;
  font-size: 0.88rem;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.sgh-back:hover { background: rgba(255,255,255,0.15); color: #fff; }
.sgh-title-block { flex: 1; }
.sgh-title {
  font-size: 1.55rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 4px;
}
.sgh-subtitle {
  font-size: 0.88rem;
  color: #999;
  margin: 0;
}

/* ── Grid ── */
.sgh-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  padding: 24px 24px 8px;
}

/* ── Card ── */
.sgh-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 16px;
  background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.1);
  border-left: 4px solid var(--accent, #888);
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;
  overflow: hidden;
}
.sgh-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(0,0,0,0.45), 0 0 0 1px var(--accent, #888);
}
.sgh-card-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 20% 50%, var(--accent, transparent) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
}
.sgh-card:hover .sgh-card-glow { opacity: 0.08; }

.sgh-card-icon {
  font-size: 2.2rem;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 6px rgba(0,0,0,0.4));
}
.sgh-card-body { flex: 1; min-width: 0; }
.sgh-card-name {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
}
.sgh-card-desc {
  font-size: 0.82rem;
  color: #aaa;
  line-height: 1.5;
  margin-bottom: 8px;
}
.sgh-card-tags { display: flex; flex-wrap: wrap; gap: 4px; }
.sgh-tag {
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 10px;
  background: rgba(255,255,255,0.08);
  color: #bbb;
  border: 1px solid rgba(255,255,255,0.1);
}
.sgh-card-arrow {
  font-size: 1.6rem;
  color: var(--accent, #888);
  flex-shrink: 0;
  font-weight: 300;
  transition: transform 0.15s;
}
.sgh-card:hover .sgh-card-arrow { transform: translateX(4px); }

/* ── Tip ── */
.sgh-tip {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 12px 24px 0;
  padding: 12px 16px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px;
  font-size: 0.82rem;
  color: #999;
  line-height: 1.55;
}
.sgh-tip-icon { font-size: 1rem; flex-shrink: 0; margin-top: 1px; }

/* ── Stats bar（slotted via #extra）── */
:slotted(.stats-bar) {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  padding: 1.25rem 1.5rem;
  background: rgba(255,255,255,0.04);
  margin: 1.25rem 1.5rem 0;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.07);
}
:slotted(.stat-item) {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
:slotted(.stat-icon) { font-size: 1.3rem; }
:slotted(.stat-value) { font-size: 1.4rem; font-weight: 800; color: #FFD700; }
:slotted(.stat-label) { font-size: 0.72rem; color: rgba(255,255,255,0.5); }
@media (max-width: 480px) {
  :slotted(.stats-bar) { gap: 1.5rem; padding: 1rem; margin: 1rem 1rem 0; }
  :slotted(.stat-value) { font-size: 1.2rem; }
}

/* ── 響應式 ── */
@media (max-width: 640px) {
  .sgh-grid { grid-template-columns: 1fr; padding: 16px; }
  .sgh-title { font-size: 1.25rem; }
  .sgh-header { padding: 16px; }
}
</style>
