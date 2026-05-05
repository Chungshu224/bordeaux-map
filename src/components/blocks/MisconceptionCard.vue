<template>
  <div class="misconception-card">
    <strong>{{ t('blocks.misconception') }}</strong>
    <slot>
      <span v-html="content"></span>
    </slot>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps({
  content: { type: String, default: '' }
})
</script>
