<template>
  <div class="content-slide">
    <div class="slide-header">
      <h2>{{ slide.title }}</h2>
    </div>
    <div class="slide-body">
      <div class="main-content" v-html="formattedContent"></div>
      <div v-if="slide.keyPoints" class="key-points">
        <div v-for="(point, index) in slide.keyPoints" :key="index" class="point-item">
          {{ point }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  slide: {
    type: Object,
    required: true
  }
})

// 將簡單的 Markdown 轉換為 HTML
const formattedContent = computed(() => {
  if (!props.slide.content) return ''
  
  let html = props.slide.content
    // 轉換 **粗體**
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // 轉換換行
    .replace(/\n/g, '<br>')
  
  return html
})
</script>

<style scoped>
.content-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 48px 56px;
  border-radius: 24px;
}

.slide-header {
  margin-bottom: 32px;
}

.slide-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  border-bottom: 3px solid #667eea;
  padding-bottom: 16px;
  line-height: 1.3;
}

.slide-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 20px;
}

.main-content {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #34495e;
  text-align: left;
  margin-bottom: 24px;
  /* 防止任何子元素溢出 */
  overflow-wrap: break-word;
  word-break: break-word;
  min-width: 0;
  max-width: 100%;
  overflow-x: hidden;
}

/* ── v-html 深層子元素統一規格 ── */
.main-content :deep(*) {
  box-sizing: border-box;
  max-width: 100%;
}

/* 確保 grid / flex 容器不讓子元素溢出 */
.main-content :deep(div) {
  min-width: 0;
}

/* 表格水平捲動 */
.main-content :deep(table) {
  display: block;
  overflow-x: auto;
  white-space: normal;
  width: 100%;
}

/* 圖片不超寬 */
.main-content :deep(img) {
  max-width: 100%;
  height: auto;
}

.main-content :deep(strong),
.main-content strong {
  color: #2c3e50;
  font-weight: 700;
}

.key-points {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 1rem;
  line-height: 1.6;
}

.point-item {
  color: #34495e;
  white-space: pre-wrap;
  text-align: left;
}

.point-item:empty {
  height: 0.5em;
}

@media (max-width: 768px) {
  .content-slide {
    padding: 40px 30px;
  }

  .slide-header h2 {
    font-size: 28px;
  }

  .main-content {
    font-size: 18px;
  }
}
</style>
