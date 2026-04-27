<!--
  共用：產區清單抽屜
  支援：搜尋、類型篩選 tab、階層折疊（第一層預設展開、其他收合）
-->
<template>
  <transition name="rmap-sheet-fade">
    <div v-if="open" class="rmap-aoc-backdrop" @click.self="$emit('update:open', false)">
      <div class="rmap-aoc-drawer">
        <div class="rmap-aoc-handle"></div>
        <div class="rmap-drawer-header">
          <span>{{ regionName }} 法定產區</span>
          <button class="rmap-drawer-close" @click="$emit('update:open', false)">✕</button>
        </div>

        <!-- 類型篩選 tab（置於搜尋欄上方） -->
        <div v-if="typeTabs?.length" class="rmap-filter-tabs">
          <button v-for="tab in typeTabs" :key="tab.value"
            class="rmap-filter-tab"
            :class="['rmap-filter-tab--' + tab.value, { active: typeFilter === tab.value }]"
            @click="$emit('update:type-filter', tab.value)">
            {{ tab.label }}
          </button>
        </div>

        <!-- 搜尋 -->
        <div class="rmap-search-wrap">
          <span class="rmap-search-icon">🔍</span>
          <input
            class="rmap-search-input"
            :value="search"
            @input="$emit('update:search', $event.target.value)"
            placeholder="搜尋產區…" />
        </div>

        <!-- 清單（支援階層） -->
        <div class="rmap-app-list">
          <template v-if="grouped">
            <div v-for="g in grouped" :key="g.key" class="rmap-app-group">
              <button class="rmap-app-group-header"
                @click="toggleGroup(g.key)">
                <span class="rmap-group-arrow" :class="{ open: isExpanded(g.key) }">▶</span>
                <span class="rmap-group-name">{{ g.label }}</span>
                <span class="rmap-group-count">{{ g.items.length }}</span>
              </button>
              <transition name="rmap-collapse">
                <div v-show="isExpanded(g.key)" class="rmap-app-group-body">
                  <div v-for="item in g.items" :key="item.id"
                    class="rmap-app-item"
                    :class="{ active: activeId === item.id }"
                    @click="$emit('select', item)">
                    <span v-if="item.type" class="rmap-app-badge" :class="badgeClass(item.type)">{{ item.type }}</span>
                    <div class="rmap-app-text">
                      <span class="rmap-app-name">{{ item.name }}</span>
                      <span v-if="item.styles?.length" class="rmap-app-styles">{{ item.styles.join(' · ') }}</span>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </template>

          <template v-else>
            <div v-for="item in items" :key="item.id"
              class="rmap-app-item"
              :class="{ active: activeId === item.id }"
              @click="$emit('select', item)">
              <span v-if="item.type" class="rmap-app-badge" :class="badgeClass(item.type)">{{ item.type }}</span>
              <div class="rmap-app-text">
                <span class="rmap-app-name">{{ item.name }}</span>
                <span v-if="item.styles?.length" class="rmap-app-styles">{{ item.styles.join(' · ') }}</span>
              </div>
            </div>
          </template>

          <div v-if="!items?.length && !grouped?.length" class="rmap-no-results">
            無符合產區
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  regionName: { type: String, default: '' },
  /** 平鋪清單 [{ id, name, type, styles[] }] */
  items: { type: Array, default: () => [] },
  /** 階層分組 [{ key, label, items: [...] }]；若提供則優先使用 */
  grouped: { type: Array, default: null },
  typeTabs: { type: Array, default: () => [] },
  typeFilter: { type: String, default: 'all' },
  search: { type: String, default: '' },
  activeId: { type: String, default: '' }
})
defineEmits(['update:open', 'update:search', 'update:type-filter', 'select'])

// 預設第一個分組展開、其他收合
const expandedGroups = ref(new Set())
watch(() => props.grouped, (g) => {
  if (g && g.length) {
    expandedGroups.value = new Set([g[0].key])
  }
}, { immediate: true })

function isExpanded(key) { return expandedGroups.value.has(key) }
function toggleGroup(key) {
  const next = new Set(expandedGroups.value)
  if (next.has(key)) next.delete(key); else next.add(key)
  expandedGroups.value = next
}

function badgeClass(type) {
  const t = String(type).toLowerCase().replace(/\s+/g, '-')
  return `rmap-badge-${t}`
}
</script>

<style scoped>
.rmap-aoc-backdrop {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(4px);
  z-index: 200;
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
}
.rmap-aoc-drawer {
  width: min(440px, 100%);
  max-height: 80vh;
  background: #fff;
  border-radius: 16px;
  display: flex; flex-direction: column;
  box-shadow: 0 16px 48px rgba(0,0,0,0.3);
  overflow: hidden;
}
.rmap-aoc-handle {
  width: 40px; height: 4px; background: #ddd; border-radius: 2px;
  margin: 8px auto 4px;
}
.rmap-drawer-header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 8px 16px 12px;
  font-size: 15px; font-weight: 700; color: #2e2e2e;
  border-bottom: 1px solid #f0f0f0;
}
.rmap-drawer-close {
  background: none; border: 0; font-size: 18px; color: #999;
  cursor: pointer;
}
.rmap-drawer-close:hover { color: #333; }

.rmap-search-wrap {
  position: relative;
  margin: 4px 16px 10px;
}
.rmap-search-icon {
  position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
  font-size: 14px; color: #999;
}
.rmap-search-input {
  width: 100%;
  padding: 9px 12px 9px 34px;
  border: 1px solid #ddd; border-radius: 10px;
  font-size: 13px;
  outline: none;
  transition: border-color 0.15s;
}
.rmap-search-input:focus { border-color: #722f37; }

.rmap-filter-tabs {
  display: flex; gap: 8px;
  padding: 10px 16px 6px;
  overflow-x: auto;
  flex-shrink: 0;
}
.rmap-filter-tab {
  padding: 7px 18px;
  font-size: 13px; font-weight: 700;
  background: #f0f0f0; color: #555;
  border: 2px solid transparent;
  border-radius: 20px;
  cursor: pointer; white-space: nowrap;
  transition: all 0.18s;
  letter-spacing: 0.02em;
}
.rmap-filter-tab:hover {
  background: #e8e8e8;
  border-color: #ccc;
}
/* DOC — 橘紅色 */
.rmap-filter-tab--doc.active,
.rmap-filter-tab--DOC.active {
  background: #d84315; color: #fff;
  border-color: #d84315;
}
/* IGP — 藍綠色 */
.rmap-filter-tab--igp.active,
.rmap-filter-tab--IGP.active {
  background: #00796b; color: #fff;
  border-color: #00796b;
}
/* 通用 active fallback */
.rmap-filter-tab.active {
  background: #722f37; color: #fff;
  border-color: #722f37;
}

.rmap-app-list {
  flex: 1; overflow-y: auto;
  padding: 4px 12px 12px;
}

.rmap-app-group {
  border-bottom: 1px solid #f5f5f5;
}
.rmap-app-group:last-child { border-bottom: 0; }
.rmap-app-group-header {
  display: flex; align-items: center; gap: 8px;
  width: 100%;
  padding: 10px 4px;
  background: none; border: 0;
  font-size: 13.5px; font-weight: 700; color: #333;
  cursor: pointer;
  text-align: left;
}
.rmap-group-arrow {
  display: inline-block;
  transition: transform 0.2s;
  font-size: 10px; color: #888;
}
.rmap-group-arrow.open { transform: rotate(90deg); }
.rmap-group-name { flex: 1; }
.rmap-group-count {
  font-size: 11px; color: #888;
  background: #f0f0f0;
  padding: 1px 7px; border-radius: 8px;
}
.rmap-app-group-body {
  padding-left: 16px;
  padding-bottom: 6px;
}

.rmap-app-item {
  display: flex; align-items: center; gap: 8px;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.12s;
}
.rmap-app-item:hover { background: #f7f3ee; }
.rmap-app-item.active { background: #fdecef; }
.rmap-app-badge {
  display: inline-block;
  padding: 2px 7px;
  font-size: 10.5px; font-weight: 700;
  border-radius: 8px;
  background: #999; color: #fff;
  flex-shrink: 0;
}
.rmap-badge-docg { background: #b71c1c; }
.rmap-badge-doc { background: #d84315; }
.rmap-badge-igt { background: #8d6e63; }
.rmap-badge-aoc { background: #722f37; }

.rmap-app-text {
  display: flex; flex-direction: column; min-width: 0; flex: 1;
}
.rmap-app-name {
  font-size: 13px; font-weight: 600; color: #2e2e2e;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.rmap-app-styles {
  font-size: 11px; color: #888;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.rmap-no-results {
  text-align: center; color: #999;
  padding: 30px 0; font-size: 13px;
}

/* transitions */
.rmap-sheet-fade-enter-active, .rmap-sheet-fade-leave-active {
  transition: opacity 0.2s;
}
.rmap-sheet-fade-enter-from, .rmap-sheet-fade-leave-to { opacity: 0; }

.rmap-collapse-enter-active, .rmap-collapse-leave-active {
  transition: max-height 0.25s ease, opacity 0.2s ease;
  overflow: hidden;
}
.rmap-collapse-enter-from, .rmap-collapse-leave-to {
  max-height: 0; opacity: 0;
}
.rmap-collapse-enter-to, .rmap-collapse-leave-from {
  max-height: 800px; opacity: 1;
}

@media (max-width: 768px) {
  .rmap-aoc-backdrop { padding: 0; align-items: flex-end; }
  .rmap-aoc-drawer {
    width: 100%; max-height: 90vh;
    border-radius: 16px 16px 0 0;
  }
}
</style>
