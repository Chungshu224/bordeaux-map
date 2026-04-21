<template>
  <div class="aoc-list">
    <h2>Bordeaux Region List</h2>
    
    <input
      type="text"
      class="aoc-search"
      placeholder="Search regions..."
      v-model="searchModel"
    />
    
    <div v-for="(aocs, group) in filteredGroups" :key="group" class="aoc-group">
      <div class="group-header" @click="toggleGroup(group)">
        <span class="group-icon">{{ expandedGroups[group] ? '▼' : '►' }}</span>
        <span class="group-name" :style="{ color: aocColor(group) }">
          {{ formatGroupName(group) }}
        </span>
      </div>
      
      <div v-show="expandedGroups[group]" class="group-content">
        <div
          v-for="aoc in aocs"
          :key="aoc"
          class="aoc-item"
          :class="{ active: isActive(group, aoc) }"
          @click="$emit('selectAOC', group, aoc)"
        >
          <span class="aoc-dot" :style="{ background: aocColor(group) }"></span>
          <span>{{ formatAOCName(aoc) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  search: String,
  filteredGroups: Object,
  expandedGroups: Object,
  toggleGroup: Function,
  activeAOC: Object,
  aocColor: Function
})

const emit = defineEmits(['update:search', 'selectAOC'])

// 處理搜尋輸入雙向綁定
const searchModel = computed({
  get: () => props.search,
  set: (val) => emit('update:search', val)
})

// 格式化群組名稱
const formatGroupName = (group) => {
  if (group.includes('LeftBank-Medoc')) return 'Left Bank - Medoc'
  if (group.includes('LeftBank-Graves')) return 'Left Bank - Graves'
  if (group.includes('RightBank-Libournais')) return 'Right Bank - Libournais'
  if (group.includes('RightBank-Blaye')) return 'Right Bank - Blaye'
  if (group === 'Entre-Deux-Mers') return 'Entre-Deux-Mers'
  if (group === 'Sauternais') return 'Sauternais'
  if (group === 'Regional') return 'Regional'
  return group
}

// 格式化 AOC 名稱
const formatAOCName = (aoc) => {
  return aoc
    .replace('.geojson', '')
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
}

// 檢查是否為當前選中項
const isActive = (group, aoc) => {
  return props.activeAOC?.group === group && props.activeAOC?.aoc === aoc
}
</script>

<style scoped>
.aoc-list {
  flex: 0 0 320px; /* 固定寬度但不會縮小 */
  height: 100%;
  overflow-y: auto;
  background: #f8f8f8;
  border-right: 1px solid #ddd;
  padding: 20px 15px;
  box-sizing: border-box;
  color: #222;
}

h2 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #8B0000;
  letter-spacing: 1px;
  font-size: 1.6rem;
}

.aoc-search {
  width: 100%;
  padding: 10px 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.aoc-search:focus {
  outline: none;
  border-color: #4169E1;
}

.aoc-group {
  margin-bottom: 12px;
}

.group-header {
  display: flex;
  align-items: center;
  padding: 8px 5px;
  cursor: pointer;
  border-radius: 4px;
  color: #222;
}

.group-header:hover {
  background: rgba(0, 0, 0, 0.05);
}

.group-icon {
  font-size: 0.9rem;
  margin-right: 8px;
  color: #444;
}

.group-name {
  font-weight: 600;
  font-size: 1.15rem;
}

.group-content {
  margin-left: 15px;
  margin-top: 5px;
}

.aoc-item {
  display: flex;
  align-items: center;
  padding: 7px 10px;
  margin: 2px 0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;
  color: #222;
}

.aoc-item:hover {
  background: rgba(0, 0, 0, 0.05);
}

.aoc-item.active {
  background: rgba(0, 0, 0, 0.08);
  font-weight: 500;
  color: #111;
}

.aoc-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 8px;
  flex-shrink: 0;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .aoc-list {
    width: 100%;
    height: auto;
    flex: 0 0 auto;
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
}
</style>
