<!--
  共用：產區資訊側欄（統一格式）
  依固定順序顯示段落，缺資料的段落自動隱藏。
  支援：發音、收合、重置、自訂額外動作（slot：extra-actions）。

  資訊物件 schema：
  {
    name: string,                          // 主名稱（中）
    originalName?: string,                 // 原文名稱
    badges?: [{ label, type? }],           // 等級徽章（DOCG / DOC / IGT / Cru…）
    meta?: [{ label, value }],             // 基本資料（省份、大區…）
    styles?: string[],                     // 酒款類型
    grapes?: string[],                     // 葡萄品種
    climate?: string,                      // 氣候
    soil?: string,                         // 土壤
    description?: string,                  // 介紹
    subregions?: { [name]: string },       // 子產區
    estates?: [{ name, meta? }]            // 名家／酒莊
  }
-->
<template>
  <div class="rmap-info-bar" :class="{ collapsed }">
    <!-- 頂部列：名稱 + 動作按鈕 -->
    <div class="rmap-info-header" :style="headerStyle">
      <div class="rmap-info-title">
        <span class="rmap-aoc-dot" :style="{ background: themeColor || '#888' }"></span>
        <span class="rmap-aoc-name">{{ info?.name || '—' }}</span>
        <span v-if="info?.originalName" class="rmap-aoc-original">{{ info.originalName }}</span>
      </div>
      <div class="rmap-action-buttons">
        <!-- 收合 -->
        <button class="rmap-action-btn" @click="$emit('toggle-collapse')" :title="collapsed ? '展開資訊' : '收合資訊'">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"
            :style="{ transform: collapsed ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.3s' }">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
        <!-- 發音 -->
        <button class="rmap-action-btn audio" @click="$emit('play-audio')"
          :disabled="!audioAvailable || isPlayingAudio"
          :title="audioAvailable ? '聽發音' : '無發音檔'">
          <svg v-if="!audioAvailable" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
          <svg v-else-if="!isPlayingAudio" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          </svg>
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
        </button>
        <!-- 重置視角 -->
        <button class="rmap-action-btn reset" @click="$emit('reset')" title="↺ 重置視角">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 2v6h6"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/>
          </svg>
        </button>
        <!-- 額外動作（如波爾多酒莊切換） -->
        <slot name="extra-actions" />
      </div>
    </div>

    <!-- 內容（可收合） -->
    <transition name="rmap-info-expand">
      <div v-show="!collapsed" class="rmap-info-content-wrapper">
        <div class="rmap-info-content">
          <!-- 等級徽章 -->
          <div v-if="info?.badges?.length" class="rmap-badges">
            <span v-for="(b, i) in info.badges" :key="i"
              class="rmap-badge"
              :class="b.type ? `rmap-badge-${b.type.toLowerCase()}` : ''">
              {{ b.label }}
            </span>
          </div>

          <!-- 基本資料 (key-value 對) -->
          <div v-if="info?.meta?.length" class="rmap-section rmap-meta-grid">
            <div v-for="(m, i) in info.meta" :key="i" class="rmap-meta-item">
              <span class="rmap-meta-label">{{ m.label }}</span>
              <span class="rmap-meta-value">{{ m.value }}</span>
            </div>
          </div>

          <!-- 酒款類型 -->
          <div v-if="info?.styles?.length" class="rmap-section">
            <div class="rmap-section-title">🍷 酒款類型</div>
            <div class="rmap-tag-list">
              <span v-for="s in info.styles" :key="s" class="rmap-style-tag" :style="styleBadgeColor(s)">{{ s }}</span>
            </div>
          </div>

          <!-- 葡萄品種 -->
          <div v-if="info?.grapes?.length" class="rmap-section">
            <div class="rmap-section-title">🍇 主要葡萄品種</div>
            <div class="rmap-tag-list">
              <span v-for="g in info.grapes" :key="g" class="rmap-grape-tag">{{ g }}</span>
            </div>
          </div>

          <!-- 氣候 -->
          <div v-if="info?.climate" class="rmap-section">
            <div class="rmap-section-title">🌡 氣候</div>
            <div class="rmap-section-text">{{ info.climate }}</div>
          </div>

          <!-- 土壤 -->
          <div v-if="info?.soil" class="rmap-section">
            <div class="rmap-section-title">🪨 土壤結構</div>
            <div class="rmap-section-text">{{ info.soil }}</div>
          </div>

          <!-- 介紹 -->
          <div v-if="info?.description" class="rmap-section">
            <div class="rmap-section-title">📜 介紹</div>
            <div class="rmap-section-text">{{ info.description }}</div>
          </div>

          <!-- 子產區 -->
          <div v-if="hasSubregions" class="rmap-section">
            <div class="rmap-section-title">📍 子產區</div>
            <div v-for="(desc, sub) in info.subregions" :key="sub" class="rmap-subregion">
              <span class="rmap-sub-name">{{ sub }}</span>
              <span class="rmap-sub-desc">{{ desc }}</span>
            </div>
          </div>

          <!-- 名家／酒莊 -->
          <div v-if="info?.estates?.length" class="rmap-section">
            <div class="rmap-section-title">🏆 代表酒莊／名家</div>
            <div class="rmap-estate-list">
              <div v-for="(e, i) in info.estates" :key="i" class="rmap-estate-item">
                <span class="rmap-estate-name">{{ e.name }}</span>
                <span v-if="e.meta" class="rmap-estate-meta">{{ e.meta }}</span>
              </div>
            </div>
          </div>

          <!-- 父層自訂額外內容 -->
          <slot name="extra-content" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  info: { type: Object, default: null },
  themeColor: { type: String, default: '#722f37' },
  audioAvailable: { type: Boolean, default: false },
  isPlayingAudio: { type: Boolean, default: false },
  collapsed: { type: Boolean, default: true }
})
defineEmits(['toggle-collapse', 'play-audio', 'reset'])

const headerStyle = computed(() => ({
  background: `linear-gradient(135deg, ${props.themeColor}, ${shade(props.themeColor, -20)})`
}))

const hasSubregions = computed(() =>
  props.info?.subregions && Object.keys(props.info.subregions).length > 0
)

function shade(hex, amount) {
  // 簡易顏色加深/變淡
  const c = hex.replace('#', '')
  const num = parseInt(c, 16)
  let r = (num >> 16) + amount
  let g = ((num >> 8) & 0xff) + amount
  let b = (num & 0xff) + amount
  r = Math.max(0, Math.min(255, r))
  g = Math.max(0, Math.min(255, g))
  b = Math.max(0, Math.min(255, b))
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')
}

function styleBadgeColor(style) {
  const map = {
    '紅酒': { bg: '#8B0000', color: '#fff' },
    '白酒': { bg: '#C8A44E', color: '#333' },
    '粉紅酒': { bg: '#E8A4B0', color: '#5a2533' },
    '玫瑰紅': { bg: '#E8A4B0', color: '#5a2533' },
    '甜酒': { bg: '#F4D35E', color: '#5a3a00' },
    '貴腐酒': { bg: '#C9A227', color: '#fff' },
    '氣泡酒': { bg: '#B8E0D2', color: '#1a4d3a' },
    '加烈酒': { bg: '#5C2A2A', color: '#fff' }
  }
  const c = map[style] || { bg: '#999', color: '#fff' }
  return { backgroundColor: c.bg, color: c.color }
}
</script>

<style scoped>
.rmap-info-bar {
  position: absolute;
  bottom: 90px;
  left: 16px;
  width: min(380px, calc(100vw - 32px));
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 12px 36px rgba(0,0,0,0.18);
  overflow: hidden;
  z-index: 40;
}
.rmap-info-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 12px;
  color: #fff;
}
.rmap-info-title {
  display: flex; align-items: center; gap: 8px;
  flex: 1; min-width: 0;
}
.rmap-aoc-dot {
  width: 10px; height: 10px; border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,0.7);
  flex-shrink: 0;
}
.rmap-aoc-name {
  font-size: 14px; font-weight: 700;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.rmap-aoc-original {
  font-size: 11px; opacity: 0.85;
  margin-left: 4px;
  font-weight: 500;
}
.rmap-action-buttons {
  display: flex; gap: 4px;
}
.rmap-action-btn {
  width: 30px; height: 30px;
  border-radius: 8px; border: 0;
  background: rgba(255,255,255,0.18);
  color: #fff;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.15s;
}
.rmap-action-btn:hover:not(:disabled) {
  background: rgba(255,255,255,0.32);
}
.rmap-action-btn:disabled {
  opacity: 0.5; cursor: not-allowed;
}
.rmap-action-btn.audio { background: rgba(168,121,200,0.55); }
.rmap-action-btn.audio:hover:not(:disabled) { background: rgba(168,121,200,0.85); }
.rmap-action-btn.reset { background: rgba(213,79,79,0.55); }
.rmap-action-btn.reset:hover { background: rgba(213,79,79,0.85); }

.rmap-info-content-wrapper {
  background: #fff;
  max-height: 50vh;
  overflow-y: auto;
}
.rmap-info-content {
  padding: 12px 14px;
  font-size: 13px; color: #2e2e2e; line-height: 1.55;
}

.rmap-badges {
  display: flex; flex-wrap: wrap; gap: 5px;
  margin-bottom: 10px;
}
.rmap-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 11px; font-weight: 700;
  background: #eee; color: #444;
}
.rmap-badge-docg { background: #b71c1c; color: #fff; }
.rmap-badge-doc  { background: #d84315; color: #fff; }
.rmap-badge-igt  { background: #8d6e63; color: #fff; }
.rmap-badge-aoc  { background: #722f37; color: #fff; }
.rmap-badge-cru, .rmap-badge-grand-cru { background: #6a1b9a; color: #fff; }
.rmap-badge-premier-cru { background: #9c27b0; color: #fff; }

.rmap-section { margin-bottom: 12px; }
.rmap-section:last-child { margin-bottom: 0; }
.rmap-section-title {
  font-size: 11.5px; font-weight: 700;
  color: #888; text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
}
.rmap-section-text {
  color: #333;
}
.rmap-meta-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 6px;
}
.rmap-meta-item {
  background: #f8f8f8;
  padding: 6px 9px;
  border-radius: 8px;
  display: flex; flex-direction: column;
}
.rmap-meta-label {
  font-size: 10.5px; color: #888; font-weight: 600;
  margin-bottom: 1px;
}
.rmap-meta-value { font-size: 12.5px; color: #222; font-weight: 600; }

.rmap-tag-list {
  display: flex; flex-wrap: wrap; gap: 5px;
}
.rmap-style-tag {
  font-size: 11.5px; font-weight: 600;
  padding: 3px 9px; border-radius: 10px;
}
.rmap-grape-tag {
  font-size: 11.5px; font-weight: 600;
  padding: 3px 9px; border-radius: 10px;
  background: #f3e8d8; color: #5e3a1a;
  border: 1px solid #e0c89a;
}

.rmap-subregion {
  background: #f9f9f9;
  padding: 7px 10px; border-radius: 7px;
  margin-bottom: 5px;
  display: flex; flex-direction: column; gap: 2px;
}
.rmap-sub-name { font-size: 12px; font-weight: 700; color: #333; }
.rmap-sub-desc { font-size: 11.5px; color: #555; }

.rmap-estate-list { display: flex; flex-direction: column; gap: 4px; }
.rmap-estate-item {
  display: flex; align-items: baseline; gap: 6px;
  padding: 5px 8px;
  background: #fef9f3; border-radius: 6px;
}
.rmap-estate-name { font-size: 12.5px; font-weight: 700; color: #722f37; }
.rmap-estate-meta { font-size: 11px; color: #888; }

/* 收合動畫 */
.rmap-info-expand-enter-active,
.rmap-info-expand-leave-active {
  transition: max-height 0.3s ease, opacity 0.2s ease;
  overflow: hidden;
}
.rmap-info-expand-enter-from,
.rmap-info-expand-leave-to {
  max-height: 0; opacity: 0;
}
.rmap-info-expand-enter-to,
.rmap-info-expand-leave-from {
  max-height: 60vh; opacity: 1;
}

@media (max-width: 768px) {
  .rmap-info-bar {
    left: 8px; right: 8px; width: auto;
    bottom: 84px;
    border-radius: 16px;
  }
  .rmap-info-header {
    padding: 12px 14px;
  }
  .rmap-aoc-name { font-size: 15px; }
  .rmap-aoc-original { font-size: 12px; }
  .rmap-action-btn { width: 34px; height: 34px; }
  .rmap-info-content-wrapper {
    max-height: 55vh;
  }
  .rmap-info-content {
    padding: 14px 16px;
    font-size: 13.5px;
    line-height: 1.6;
  }
  .rmap-meta-grid { grid-template-columns: 1fr 1fr; gap: 7px; }
  .rmap-meta-item { padding: 7px 10px; }
  .rmap-meta-label { font-size: 11px; }
  .rmap-meta-value { font-size: 13px; }
  .rmap-section-title { font-size: 12px; margin-bottom: 6px; }
  .rmap-style-tag, .rmap-grape-tag {
    font-size: 12px;
    padding: 4px 10px;
  }
  .rmap-section { margin-bottom: 14px; }
  .rmap-subregion { padding: 8px 11px; }
  .rmap-sub-name { font-size: 13px; }
  .rmap-sub-desc { font-size: 12.5px; }
}
</style>
