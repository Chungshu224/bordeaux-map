<template>
  <details class="expander" :open="defaultOpen">
    <summary class="expander-summary">
      <span class="label">{{ label }}</span>
      <span class="chev">▾</span>
    </summary>
    <div class="expander-body">
      <slot />
    </div>
  </details>
</template>
<script setup>
const props = defineProps({
  label: { type: String, default: '展開詳解' },
  defaultOpen: { type: Boolean, default: false }
})
</script>
<style scoped>
.expander { border: 1px solid #e5e7eb; border-radius: 10px; padding: 6px 10px; background: #fff; }
.expander-summary { display:flex; align-items:center; justify-content: space-between; cursor:pointer; list-style:none; }
.expander-summary::-webkit-details-marker { display:none; }
.expander-body { padding: 6px 2px 2px; }
</style>
