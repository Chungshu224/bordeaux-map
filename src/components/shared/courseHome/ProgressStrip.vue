<template>
  <section class="progress-strip" :class="{ 'with-cta': !!ctaText }">
    <div class="ps-left">
      <div class="ps-icon">📚</div>
      <div class="ps-text">
        <div class="ps-title">{{ headline }}</div>
        <div v-if="subline" class="ps-sub">{{ subline }}</div>
      </div>
    </div>

    <div class="ps-meta">
      <div class="ps-bar-wrap">
        <div class="ps-bar-track">
          <div class="ps-bar-fill" :style="{ width: percent + '%' }"></div>
        </div>
        <div class="ps-percent">{{ percent }}%</div>
      </div>
      <div class="ps-chips">
        <div v-if="achievementCount != null" class="ps-chip" @click="$emit('openAchievements')">
          <span>🏆</span><span>{{ achievementCount }} 成就</span>
        </div>
        <div v-if="streak != null" class="ps-chip">
          <span>🔥</span><span>{{ streak }} 天</span>
        </div>
        <div class="ps-chip ps-chip-stat" @click="$emit('openProgress')">
          <span>📊</span><span>{{ completedCount }}/{{ totalCount }} 課</span>
        </div>
      </div>
    </div>

    <button v-if="ctaText" class="ps-cta" @click="$emit('cta')">
      {{ ctaText }} <span class="arrow">→</span>
    </button>
  </section>
</template>

<script setup>
defineProps({
  headline: { type: String, default: '開始你的學習旅程' },
  subline: { type: String, default: '' },
  percent: { type: Number, default: 0 },
  completedCount: { type: Number, default: 0 },
  totalCount: { type: Number, default: 0 },
  achievementCount: { type: Number, default: null },
  streak: { type: Number, default: null },
  ctaText: { type: String, default: '' }
})
defineEmits(['cta', 'openAchievements', 'openProgress'])
</script>

<style scoped>
.progress-strip {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: center;
  background: white;
  border-radius: 16px;
  padding: 20px 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-left: 4px solid var(--region-primary);
}
.progress-strip.with-cta { grid-template-columns: 1fr auto auto; }

.ps-left { display: flex; align-items: center; gap: 14px; min-width: 0; }
.ps-icon {
  width: 44px; height: 44px; border-radius: 12px;
  background: color-mix(in srgb, var(--region-primary) 12%, white);
  display: flex; align-items: center; justify-content: center;
  font-size: 22px;
}
.ps-text { min-width: 0; }
.ps-title { font-weight: 700; color: #111827; font-size: 0.98rem; }
.ps-sub { color: #6b7280; font-size: 0.85rem; margin-top: 2px; }

.ps-meta { display: flex; flex-direction: column; gap: 10px; min-width: 280px; }
.ps-bar-wrap { display: flex; align-items: center; gap: 10px; }
.ps-bar-track {
  flex: 1; height: 8px; background: #f3f4f6;
  border-radius: 4px; overflow: hidden;
}
.ps-bar-fill {
  height: 100%; background: linear-gradient(90deg, var(--region-primary), var(--region-accent));
  border-radius: 4px; transition: width 0.4s ease;
}
.ps-percent { font-size: 0.85rem; color: var(--region-primary); font-weight: 700; min-width: 40px; text-align: right; }

.ps-chips { display: flex; gap: 8px; flex-wrap: wrap; }
.ps-chip {
  display: inline-flex; align-items: center; gap: 4px;
  background: #f9fafb; border: 1px solid #e5e7eb;
  padding: 4px 10px; border-radius: 12px;
  font-size: 0.78rem; color: #4b5563;
  cursor: pointer; transition: all 0.15s;
}
.ps-chip:hover { background: color-mix(in srgb, var(--region-primary) 8%, white); border-color: var(--region-primary); color: var(--region-primary); }

.ps-cta {
  background: var(--region-primary); color: white;
  border: 0; padding: 12px 24px; border-radius: 12px;
  cursor: pointer; font-size: 0.95rem; font-weight: 700;
  display: inline-flex; align-items: center; gap: 8px;
  transition: filter 0.15s, transform 0.15s;
  white-space: nowrap;
}
.ps-cta:hover { filter: brightness(1.08); transform: translateX(2px); }
.ps-cta .arrow { transition: transform 0.15s; }
.ps-cta:hover .arrow { transform: translateX(3px); }

@media (max-width: 768px) {
  .progress-strip,
  .progress-strip.with-cta { grid-template-columns: 1fr; padding: 16px; gap: 12px; }
  .ps-meta { min-width: 0; }
  .ps-cta { width: 100%; justify-content: center; }
}
</style>
