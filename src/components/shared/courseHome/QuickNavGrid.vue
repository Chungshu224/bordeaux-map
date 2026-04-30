<template>
  <section class="quick-nav-grid">
    <button
      v-for="item in normalizedItems"
      :key="item.key"
      class="qn-card"
      :class="{ disabled: item.enabled === false }"
      :disabled="item.enabled === false"
      @click="$emit('select', item.key)"
    >
      <span class="qn-icon">{{ item.icon }}</span>
      <span class="qn-title">{{ item.title }}</span>
      <span class="qn-desc">{{ item.desc }}</span>
      <span v-if="item.enabled === false" class="qn-soon">{{ $t('common.quickNav.comingSoon') }}</span>
    </button>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 預設項目庫:父元件以 key 引用即可,可完整覆寫或新增自訂 key
const DEFAULT_ITEMS = computed(() => ({
  map:          { icon: '🗺️', title: t('common.quickNav.map.title'),   desc: t('common.quickNav.map.desc') },
  games:        { icon: '🎮', title: t('common.quickNav.games.title'),  desc: t('common.quickNav.games.desc') },
  notebook:     { icon: '📔', title: t('common.quickNav.notebook.title'), desc: t('common.quickNav.notebook.desc') },
  achievements: { icon: '🏆', title: t('common.quickNav.achievements.title'), desc: t('common.quickNav.achievements.desc') },
  progress:     { icon: '📊', title: t('common.quickNav.progress.title'), desc: t('common.quickNav.progress.desc') },
  varieties:    { icon: '🍇', title: t('common.quickNav.varieties.title'), desc: t('common.quickNav.varieties.desc') },
  selector:     { icon: '🎯', title: t('common.quickNav.selector.title'), desc: t('common.quickNav.selector.desc') },
  port:         { icon: '🍷', title: t('common.quickNav.port.title'),    desc: t('common.quickNav.port.desc') },
}))

const props = defineProps({
  // items: [{ key, icon?, title?, desc?, enabled? }] 順序即顯示順序
  items: { type: Array, default: () => [] }
})
defineEmits(['select'])

const normalizedItems = computed(() => {
  return props.items.map(item => {
    const def = DEFAULT_ITEMS.value[item.key] || {}
    return { ...def, ...item }
  })
})
</script>

<style scoped>
.quick-nav-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
}
.qn-card {
  display: flex; flex-direction: column; align-items: flex-start; gap: 6px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  padding: 18px 16px;
  cursor: pointer;
  transition: all 0.18s ease;
  text-align: left;
  position: relative;
}
.qn-card:hover:not(.disabled) {
  transform: translateY(-3px);
  border-color: var(--region-primary);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}
.qn-card.disabled { opacity: 0.55; cursor: not-allowed; }

.qn-icon {
  width: 40px; height: 40px; border-radius: 10px;
  background: color-mix(in srgb, var(--region-primary) 10%, white);
  display: flex; align-items: center; justify-content: center;
  font-size: 22px;
  margin-bottom: 4px;
}
.qn-title { font-size: 0.95rem; font-weight: 700; color: #111827; }
.qn-desc  { font-size: 0.78rem; color: #6b7280; line-height: 1.4; }

.qn-soon {
  position: absolute; top: 10px; right: 10px;
  font-size: 0.68rem;
  background: #f3f4f6; color: #6b7280;
  padding: 2px 8px; border-radius: 10px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .quick-nav-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .qn-card { padding: 14px 12px; }
  .qn-icon { width: 32px; height: 32px; font-size: 18px; }
  .qn-title { font-size: 0.88rem; }
}
</style>
