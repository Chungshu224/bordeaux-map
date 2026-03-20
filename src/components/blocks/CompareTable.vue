<template>
  <div class="compare-table" :style="{ '--highlight-color': highlightColor }">
    <table>
      <thead>
        <tr>
          <th v-for="(h, i) in headers" :key="i">{{ h }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rIdx) in rows" :key="rIdx">
          <td v-for="(cell, cIdx) in row" :key="cIdx" v-html="cell"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
const props = defineProps({
  headers: { type: Array, default: () => [] },
  rows: { type: Array, default: () => [] },
  highlightColor: { type: String, default: '#0ea5e9' }
})
</script>
