<!--
  共用：產區地圖頂部導覽列
  左上固定 2 顆按鈕：← 回到 [產區] 課程  /  🏠 首頁
-->
<template>
  <div class="rmap-header">
    <div class="rmap-header-left">
      <button class="rmap-hdr-btn" @click="$emit('back')">
        {{ t('bordeaux.map.header.back', { name: regionName }) }}
      </button>
      <button class="rmap-hdr-btn ghost" @click="goHome">
        {{ t('bordeaux.map.header.home') }}
      </button>
    </div>
    <h1 v-if="title" class="rmap-header-title">
      <span v-if="icon" class="rmap-header-icon">{{ icon }}</span>
      <span>{{ title }}</span>
    </h1>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
  /** 課程名稱（會接在「回到 …… 課程」之後） */
  regionName: { type: String, required: true },
  /** 主標題（顯示於右側／中央） */
  title: { type: String, default: '' },
  /** 主標題前圖示 */
  icon: { type: String, default: '' }
})
defineEmits(['back'])

const router = useRouter()
function goHome() { router.push('/') }
</script>

<style scoped>
.rmap-header {
  position: absolute;
  top: 0; left: 0; right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  pointer-events: none;
}
.rmap-header-left {
  display: flex; gap: 8px; pointer-events: auto;
}
.rmap-hdr-btn {
  background: rgba(255,255,255,0.95);
  color: #1f2937;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 22px;
  padding: 7px 14px;
  font-size: 13px; font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  transition: all 0.15s;
  white-space: nowrap;
}
.rmap-hdr-btn:hover {
  background: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.12);
  transform: translateY(-1px);
}
.rmap-hdr-btn.ghost {
  background: rgba(255,255,255,0.7);
}
.rmap-header-title {
  margin: 0;
  font-size: 15px; font-weight: 700;
  color: #1f2937;
  background: rgba(255,255,255,0.85);
  padding: 6px 14px;
  border-radius: 18px;
  pointer-events: auto;
  display: flex; align-items: center; gap: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}
.rmap-header-icon { font-size: 18px; }

@media (max-width: 768px) {
  .rmap-header {
    padding: 10px 10px;
    flex-wrap: wrap;
  }
  .rmap-hdr-btn {
    font-size: 12px;
    padding: 6px 11px;
    border-radius: 18px;
  }
  .rmap-header-title {
    display: none;
  }
}
</style>
