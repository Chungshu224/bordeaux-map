<!-- 優化後的 PresentationLesson.vue 範例 -->
<template>
  <div class="presentation-lesson">
    <div v-if="loading" class="loading-state">
      <div class="loader"></div>
      <p>載入課程內容中...</p>
    </div>
    
    <div v-else-if="slides.length > 0" class="lesson-content">
      <!-- 原有的課程渲染邏輯 -->
      <!-- ... -->
    </div>
    
    <div v-else class="error-state">
      <p>無法載入課程內容</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'
import { loadLessonContent } from '@/data/lessonManager.js'

export default {
  name: 'PresentationLesson',
  props: {
    lessonId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const loading = ref(false)
    const lessonContent = ref([])
    
    const slides = computed(() => {
      return lessonContent.value || []
    })
    
    const loadContent = async () => {
      loading.value = true
      try {
        lessonContent.value = await loadLessonContent(props.lessonId)
      } catch (error) {
        console.error('Failed to load lesson:', error)
        lessonContent.value = []
      } finally {
        loading.value = false
      }
    }
    
    onMounted(() => {
      loadContent()
    })
    
    watch(() => props.lessonId, () => {
      loadContent()
    })
    
    return {
      loading,
      slides
    }
  }
}
</script>

<style scoped>
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
}

.loader {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-state {
  text-align: center;
  padding: 2rem;
  color: #e74c3c;
}
</style>