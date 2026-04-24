<template>
  <article
    class="level-card"
    :class="[`status-${status}`, { clickable: status !== 'locked' }]"
    @click="onCardClick"
  >
    <div class="lc-status-badge" :class="`badge-${status}`">
      <template v-if="status === 'completed'">✓ 100%</template>
      <template v-else-if="status === 'in-progress'">{{ Math.round(progress) }}%</template>
      <template v-else-if="status === 'locked'">🔒 未解鎖</template>
      <template v-else>新課程</template>
    </div>

    <header class="lc-header">
      <div class="lc-badge">
        <span class="lc-num">{{ level.number }}</span>
      </div>
      <div class="lc-titles">
        <h3 class="lc-title">{{ level.title }}</h3>
        <p class="lc-subtitle">Level {{ level.number }} · {{ level.subtitle }}</p>
      </div>
      <div v-if="level.icon" class="lc-icon">{{ level.icon }}</div>
    </header>

    <p v-if="level.description" class="lc-desc">{{ level.description }}</p>

    <div v-if="level.tags?.length" class="lc-tags">
      <span v-for="t in level.tags.slice(0, 5)" :key="t" class="lc-tag">{{ t }}</span>
    </div>

    <div class="lc-meta">
      <div v-if="level.modules != null" class="lc-meta-item">
        <span class="m-num">{{ level.modules }}</span><span class="m-lbl">模組</span>
      </div>
      <div v-if="level.lessons != null" class="lc-meta-item">
        <span class="m-num">{{ level.lessons }}</span><span class="m-lbl">課</span>
      </div>
      <div v-if="level.duration" class="lc-meta-item">
        <span class="m-num">{{ level.duration }}</span><span class="m-lbl">時長</span>
      </div>
    </div>

    <div class="lc-progress-wrap" v-if="status !== 'locked'">
      <div class="lc-progress-track">
        <div class="lc-progress-fill" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
    <div v-if="status === 'locked' && level.unlockHint" class="lc-unlock-hint">
      🔒 {{ level.unlockHint }}
    </div>

    <button class="lc-btn" :disabled="status === 'locked'" @click.stop="onAction">
      <template v-if="status === 'locked'">{{ level.unlockHint || '完成前一階段解鎖' }}</template>
      <template v-else-if="status === 'completed'">重新學習</template>
      <template v-else-if="status === 'in-progress'">繼續學習</template>
      <template v-else>開始學習</template>
      <span v-if="status !== 'locked'" class="arrow">→</span>
    </button>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // level: { number, title, subtitle, icon, description, tags[], modules, lessons, duration, unlockHint }
  level: { type: Object, required: true },
  progress: { type: Number, default: 0 }, // 0-100
  unlocked: { type: Boolean, default: true }
})

const emit = defineEmits(['enter'])

const status = computed(() => {
  if (!props.unlocked) return 'locked'
  if (props.progress >= 100) return 'completed'
  if (props.progress > 0) return 'in-progress'
  return 'new'
})

function onCardClick() {
  if (status.value === 'locked') return
  emit('enter', props.level.number)
}
function onAction() {
  if (status.value === 'locked') return
  emit('enter', props.level.number)
}
</script>

<style scoped>
.level-card {
  position: relative;
  background: white;
  border-radius: 18px;
  padding: 24px;
  display: flex; flex-direction: column; gap: 14px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease;
}
.level-card.clickable { cursor: pointer; }
.level-card.clickable:hover {
  transform: translateY(-4px);
  border-color: var(--region-primary);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
}
.level-card.status-locked { opacity: 0.7; background: #fafafa; }
.level-card.status-completed { border-color: color-mix(in srgb, var(--region-primary) 30%, white); }

.lc-status-badge {
  position: absolute; top: 16px; right: 16px;
  font-size: 0.75rem; font-weight: 700;
  padding: 4px 10px; border-radius: 20px;
}
.badge-new          { background: #f3f4f6; color: #6b7280; }
.badge-in-progress  { background: color-mix(in srgb, var(--region-accent) 20%, white); color: color-mix(in srgb, var(--region-accent) 60%, #1f2937); }
.badge-completed    { background: var(--region-primary); color: white; }
.badge-locked       { background: #e5e7eb; color: #6b7280; }

.lc-header { display: flex; align-items: center; gap: 14px; padding-right: 80px; }
.lc-badge {
  width: 52px; height: 52px;
  background: linear-gradient(135deg, var(--region-primary), color-mix(in srgb, var(--region-primary) 70%, var(--region-accent)));
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  color: white; font-weight: 800; font-size: 1.6rem;
  flex-shrink: 0;
  box-shadow: 0 4px 12px color-mix(in srgb, var(--region-primary) 30%, transparent);
}
.lc-titles { flex: 1; min-width: 0; }
.lc-title  { margin: 0; font-size: 1.2rem; font-weight: 700; color: #111827; }
.lc-subtitle { margin: 2px 0 0; font-size: 0.82rem; color: #6b7280; }
.lc-icon   { font-size: 28px; opacity: 0.7; }

.lc-desc {
  margin: 0; font-size: 0.92rem; color: #4b5563; line-height: 1.6;
}

.lc-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.lc-tag {
  background: color-mix(in srgb, var(--region-primary) 6%, white);
  color: color-mix(in srgb, var(--region-primary) 85%, #111827);
  border: 1px solid color-mix(in srgb, var(--region-primary) 15%, white);
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.lc-meta { display: flex; gap: 18px; padding: 12px 0; border-top: 1px dashed #e5e7eb; border-bottom: 1px dashed #e5e7eb; }
.lc-meta-item { display: flex; align-items: baseline; gap: 4px; }
.m-num { font-size: 1.05rem; font-weight: 700; color: var(--region-primary); }
.m-lbl { font-size: 0.78rem; color: #6b7280; }

.lc-progress-wrap { }
.lc-progress-track {
  height: 6px; background: #f3f4f6; border-radius: 3px; overflow: hidden;
}
.lc-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--region-primary), var(--region-accent));
  border-radius: 3px;
  transition: width 0.4s ease;
}

.lc-unlock-hint {
  font-size: 0.85rem; color: #6b7280;
  background: #f9fafb; padding: 10px 12px; border-radius: 10px;
  text-align: center;
}

.lc-btn {
  margin-top: 4px;
  background: var(--region-primary); color: white;
  border: 0; padding: 12px 20px; border-radius: 12px;
  font-size: 0.95rem; font-weight: 700; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  transition: filter 0.15s, transform 0.15s;
}
.lc-btn:hover:not(:disabled) { filter: brightness(1.08); transform: translateY(-1px); }
.lc-btn:disabled { background: #e5e7eb; color: #9ca3af; cursor: not-allowed; }
.arrow { transition: transform 0.15s; }
.lc-btn:hover:not(:disabled) .arrow { transform: translateX(3px); }

@media (max-width: 768px) {
  .level-card { padding: 18px; }
  .lc-header { padding-right: 70px; }
  .lc-badge { width: 44px; height: 44px; font-size: 1.3rem; }
  .lc-title { font-size: 1.05rem; }
  .lc-icon { display: none; }
}
</style>
