<template>
  <div class="slide-blocks">
    <component
      v-for="(blk, i) in blocks"
      :is="resolve(blk)"
      :key="i"
      v-bind="computeProps(blk)"
    >
      <!-- 只有 Expandable 使用 slot 內容，其餘型別由 props 供給 -->
      <template v-if="isExpand(blk)" #default>
        <div v-html="blk.content"></div>
      </template>
    </component>
  </div>
  
</template>
<script setup>
import InfoCard from './blocks/InfoCard.vue'
import MisconceptionCard from './blocks/MisconceptionCard.vue'
import CompareTable from './blocks/CompareTable.vue'
import StepsBlock from './blocks/StepsBlock.vue'
import Expandable from './blocks/Expandable.vue'

const props = defineProps({
  blocks: { type: Array, default: () => [] }
})

function resolve(blk) {
  const t = (blk?.type || '').toString()
  switch (t) {
    case 'info':
    case 'InfoCard':
      return InfoCard
    case 'misconception':
    case 'MisconceptionCard':
      return MisconceptionCard
    case 'compare':
    case 'CompareTable':
      return CompareTable
    case 'steps':
    case 'StepsBlock':
      return StepsBlock
    case 'expand':
    case 'Expandable':
      return Expandable
    default:
      return InfoCard
  }
}

function computeProps(blk) {
  const base = blk && blk.props ? { ...blk.props } : {}
  const t = (blk?.type || '').toString()
  // 對常見型別做容錯，把頂層欄位映射到元件 props
  if (t === 'info' || t === 'InfoCard' || t === 'misconception' || t === 'MisconceptionCard') {
    if (blk.title && base.title == null) base.title = blk.title
    if (blk.content && base.content == null) base.content = blk.content
  }
  if (t === 'steps' || t === 'StepsBlock') {
    const steps = base.steps || blk.steps || []
    base.steps = steps.map(s => typeof s === 'string' ? { text: s } : s)
    if (blk.title && base.title == null) base.title = blk.title
  }
  if (t === 'compare' || t === 'CompareTable') {
    if (blk.rows && base.rows == null) base.rows = blk.rows
    if (blk.columns && base.columns == null) base.columns = blk.columns
    if (blk.title && base.title == null) base.title = blk.title
  }
  if (t === 'expand' || t === 'Expandable') {
    if (blk.label && base.label == null) base.label = blk.label
    if (blk.defaultOpen != null && base.defaultOpen == null) base.defaultOpen = blk.defaultOpen
  }
  return base
}

function isExpand(blk) {
  const t = (blk?.type || '').toString()
  return t === 'expand' || t === 'Expandable'
}
</script>
