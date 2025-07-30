<template>
  <aside class="aoc-list">
    <h2>Bordeaux AOC's</h2>
    <input :value="search" @input="$emit('update:search', $event.target.value)" class="aoc-search" placeholder="搜尋AOC..." />
    <div v-for="(group, groupName) in filteredGroups" :key="groupName" class="aoc-group">
      <div class="group-header" @click="toggleGroup(groupName)">
        <span :class="['arrow', expandedGroups[groupName] ? 'open' : '']">▶</span>
        <span class="group-title">{{ groupName }}</span>
      </div>
      <ul v-show="expandedGroups[groupName]">
        <li v-for="aoc in group" :key="aoc"
            @click="$emit('selectAOC', groupName, aoc)"
            :class="['aoc-item', {active: activeAOC.group === groupName && activeAOC.aoc === aoc}]"
        >
          <span class="aoc-dot" :style="{background: aocColor(groupName)}"></span>
          {{ aoc.replace('_AOC.geojson','').replace(/-/g,' ').replace(/_/g,' ') }}
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
const props = defineProps([
  'search', 'filteredGroups', 'expandedGroups', 'toggleGroup', 'activeAOC', 'aocColor'
])
const emit = defineEmits(['selectAOC'])
</script>

<style scoped>
/* ...可複製原本 .aoc-list 相關 CSS... */
</style>
