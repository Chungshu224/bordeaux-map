<template>
  <div class="aoc-list">
    <div class="list-header">
      <h2 class="list-title">🍇 51 個 Grand Cru</h2>
      <p class="list-subtitle">依 Claude Sittler 十大地質族群分組</p>
    </div>

    <div class="search-container">
      <span class="search-icon">🔍</span>
      <input
        type="text"
        class="aoc-search"
        placeholder="搜尋 Grand Cru 或村莊..."
        v-model="searchModel"
      />
    </div>

    <div v-for="(group, groupName) in filteredTree" :key="groupName">
      <div class="group-header" @click="toggleGroup(groupName)">
        <span class="group-icon">{{ expandedGroups[groupName] ? '▼' : '▶' }}</span>
        <span class="group-dot" :style="{ background: familyColor(groupName) }"></span>
        <span class="group-name">{{ familyLabel(groupName) }}</span>
        <span class="group-count">{{ group.files.length }}</span>
      </div>
      <div v-show="expandedGroups[groupName]" class="region-group">
        <div
          v-for="file in group.files"
          :key="file"
          class="aoc-item"
          :class="{ active: isActive(groupName, file) }"
          @click="$emit('selectAOC', groupName, file)"
        >
          <span class="aoc-dot" :style="{ background: familyColor(groupName) }"></span>
          <span class="aoc-name">{{ formatName(file) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  search: String,
  activeAOC: Object,
  indexPath: {
    type: String,
    default: '/alsace/geojson/index.json'
  }
})

const emit = defineEmits(['update:search', 'selectAOC'])

const tree = ref({})
const expandedGroups = ref({})

const searchModel = computed({
  get: () => props.search,
  set: (val) => emit('update:search', val)
})

function familyLabel(groupName) {
  const idx = groupName.indexOf('｜')
  return idx >= 0 ? groupName.slice(idx + 1) : groupName
}

const FAMILY_COLORS = {
  '01-Schiste': '#2d3436',
  '02-Volcano-sedimentaire': '#c0392b',
  '03-Gres': '#d35400',
  '04-Granite': '#7f8c8d',
  '05-Calcaire': '#bdc3c7',
  '06-Calcaro-greseux': '#f39c12',
  '07-Marno-greseux': '#e67e22',
  '08-Marno-calcaro-greseux': '#e74c3c',
  '09-Marno-calcaire': '#8e44ad',
  '10-Argilo-marneux': '#2980b9',
  '11-Kaefferkopf': '#c9a227',
}
function familyColor(groupName) {
  const idx = groupName.indexOf('｜')
  const folder = idx >= 0 ? groupName.slice(0, idx) : groupName
  return FAMILY_COLORS[folder] || '#888'
}

const filteredTree = computed(() => {
  if (!searchModel.value) return tree.value
  const q = searchModel.value.toLowerCase()
  const result = {}
  for (const groupName in tree.value) {
    const files = tree.value[groupName].files.filter(f => formatName(f).toLowerCase().includes(q))
    if (files.length) result[groupName] = { files }
  }
  return result
})

function toggleGroup(groupName) {
  expandedGroups.value[groupName] = !expandedGroups.value[groupName]
}

function formatName(file) {
  return file
    .replace('AOC-Alsace-Grand-Cru-', '')
    .replace('.geojson', '')
    .replace(/-/g, ' ')
}

function isActive(group, aoc) {
  return props.activeAOC?.group === group && props.activeAOC?.aoc === aoc
}

onMounted(async () => {
  try {
    const res = await fetch(props.indexPath)
    if (!res.ok) throw new Error(`無法載入 index (${res.status})`)
    tree.value = await res.json()
    // 預設展開第一個族群
    const firstKey = Object.keys(tree.value)[0]
    if (firstKey) expandedGroups.value[firstKey] = true
  } catch (err) {
    console.error('載入 Alsace geojson index 失敗:', err)
  }
})
</script>

<style scoped>
.aoc-list {
  width: 320px;
  min-width: 320px;
  height: 100%;
  background: #fff;
  border-right: 1px solid #e5e7eb;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.list-header {
  padding: 16px 16px 10px;
  border-bottom: 1px solid #f0f0f0;
}
.list-title { margin: 0; font-size: 1.1rem; color: #1b4332; }
.list-subtitle { margin: 4px 0 0; font-size: 0.75rem; color: #6b7280; }
.search-container {
  position: relative;
  padding: 10px 16px;
}
.search-icon {
  position: absolute; left: 26px; top: 50%; transform: translateY(-50%);
  font-size: 0.85rem; color: #9ca3af;
}
.aoc-search {
  width: 100%; padding: 8px 10px 8px 30px;
  border: 1px solid #e5e7eb; border-radius: 8px;
  font-size: 0.85rem;
  box-sizing: border-box;
}
.group-header {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 16px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.85rem;
  color: #1f2937;
  user-select: none;
}
.group-header:hover { background: #f9fafb; }
.group-icon { font-size: 0.7rem; color: #9ca3af; width: 10px; }
.group-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.group-name { flex: 1; }
.group-count {
  font-size: 0.7rem; color: #9ca3af;
  background: #f3f4f6; padding: 1px 7px; border-radius: 10px;
}
.region-group { padding-bottom: 4px; }
.aoc-item {
  display: flex; align-items: center; gap: 8px;
  padding: 7px 16px 7px 34px;
  cursor: pointer;
  font-size: 0.82rem;
  color: #374151;
}
.aoc-item:hover { background: #f3f9f4; }
.aoc-item.active { background: #e6f4ea; color: #1b4332; font-weight: 700; }
.aoc-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
.aoc-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
</style>
