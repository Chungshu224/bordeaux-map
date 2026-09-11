# 學習進度追蹤系統使用指南

## 📋 概述

學習進度追蹤系統為波爾多葡萄酒學院提供全面的學習數據追蹤、分析和視覺化功能。

## 🎯 功能特性

### 1. 細粒度進度追蹤
- ✅ 課程內投影片瀏覽進度
- ✅ 每個投影片的瀏覽狀態
- ✅ 課程完成百分比計算
- ✅ 測驗答案記錄與統計

### 2. 學習時間統計
- ✅ 自動計時功能
- ✅ 每個課程的學習時長
- ✅ 總學習時間統計
- ✅ 暫停/恢復支持

### 3. 學習會話管理
- ✅ 自動開始/結束會話
- ✅ 會話歷史記錄
- ✅ 投影片瀏覽追蹤
- ✅ 測驗表現記錄

### 4. 學習模式分析
- ✅ 偏好學習時段識別
- ✅ 平均學習時長計算
- ✅ 測驗正確率分析
- ✅ 學習連續天數追蹤

### 5. 智能學習建議
- ✅ 基於時間的建議
- ✅ 基於正確率的建議
- ✅ 基於學習規律的建議

### 6. 數據持久化
- ✅ 自動保存到 localStorage
- ✅ 數據匯入/匯出功能
- ✅ 跨會話數據保存

## 📦 組件結構

```
src/
├── stores/
│   └── progressTracker.js          # 核心進度追蹤邏輯
├── components/
│   ├── LearningProgress.vue        # 完整進度儀表板
│   ├── LessonProgressIndicator.vue # 課程內進度指示器
│   └── LearningStatsMini.vue       # 簡化進度卡片
```

## 🔧 使用方法

### 1. 在課程組件中整合

```vue
<template>
  <div>
    <!-- 進度指示器 -->
    <LessonProgressIndicator
      :lessonId="lessonId"
      :currentSlide="currentSlide"
      :totalSlides="totalSlides"
      :showTimer="true"
    />
    
    <!-- 課程內容 -->
    <div>...</div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { progressActions } from '@/stores/progressTracker'
import LessonProgressIndicator from '@/components/LessonProgressIndicator.vue'

const props = defineProps({
  lessonId: String,
  lessonTitle: String
})

// 開始學習會話
onMounted(() => {
  progressActions.startSession(props.lessonId, props.lessonTitle)
})

// 結束學習會話
onUnmounted(() => {
  progressActions.endSession()
})

// 追蹤投影片瀏覽
watch(currentSlide, (newSlide) => {
  progressActions.recordSlideView(
    props.lessonId, 
    newSlide, 
    totalSlides.value
  )
})

// 記錄測驗答案
const handleQuizAnswer = (slideIndex, isCorrect) => {
  progressActions.recordQuizAnswer(
    props.lessonId, 
    slideIndex, 
    isCorrect
  )
}
</script>
```

### 2. 顯示進度儀表板

```vue
<template>
  <div>
    <!-- 簡化版進度 -->
    <LearningStatsMini @show-details="showFullProgress = true" />
    
    <!-- 完整進度儀表板（Modal） -->
    <div v-if="showFullProgress" class="modal">
      <LearningProgress />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LearningStatsMini from '@/components/LearningStatsMini.vue'
import LearningProgress from '@/components/LearningProgress.vue'

const showFullProgress = ref(false)
</script>
```

### 3. 程式化使用

```javascript
import { progressActions, progressState, progressComputed } from '@/stores/progressTracker'

// 獲取課程進度
const progress = progressActions.getLessonProgress('l1-1')
console.log(`課程進度: ${progress}%`)

// 獲取學習時間
const studyTime = progressActions.getStudyTime('l1-1')
console.log(`學習時間: ${studyTime}`)

// 獲取測驗統計
const quizStats = progressActions.getQuizStats('l1-1')
console.log(`測驗統計:`, quizStats)

// 獲取學習建議
const recommendations = progressActions.getLearningRecommendations()
recommendations.forEach(rec => {
  console.log(`${rec.icon} ${rec.title}: ${rec.description}`)
})

// 獲取總體統計
const overall = progressComputed.overallStats.value
console.log('總學習時間:', overall.totalStudyTime)
console.log('已學課程:', overall.totalLessons)
console.log('測驗正確率:', overall.quizAccuracy + '%')
console.log('連續學習天數:', overall.studyStreak)

// 獲取每週趨勢
const trend = progressComputed.weeklyTrend.value
trend.forEach(day => {
  console.log(`${day.dayName}: ${day.studyTime}秒`)
})
```

## 📊 數據結構

### 課程進度對象
```javascript
{
  slideIndex: 5,           // 當前投影片索引
  totalSlides: 20,         // 總投影片數
  completedSlides: Set([0, 1, 2, 3, 4, 5]), // 已瀏覽的投影片
  lastVisited: 1640995200000,  // 最後瀏覽時間
  firstVisited: 1640908800000  // 首次瀏覽時間
}
```

### 學習會話對象
```javascript
{
  id: "session-1640995200000",
  lessonId: "l1-1",
  lessonTitle: "認識波爾多地理位置",
  startTime: 1640995200000,
  endTime: 1640998800000,
  duration: 3600,          // 秒
  slidesViewed: 15,
  quizzesAttempted: 3,
  quizzesCorrect: 2,
  quizAccuracy: "66.7"     // 百分比字串
}
```

### 每日統計對象
```javascript
{
  date: "2025-12-29",
  totalStudyTime: 7200,    // 秒
  sessionsCount: 2,
  lessonsStudied: Set(['l1-1', 'l1-2']),
  slidesViewed: 45,
  quizzesAttempted: 10,
  quizzesCorrect: 8
}
```

## 🎨 視覺化組件

### LearningProgress.vue
完整的學習進度儀表板，包含:
- 總體統計卡片（學習時間、課程數、正確率、連續天數）
- 近7天學習趨勢圖表
- 學習模式分析
- 智能學習建議
- 最近學習記錄
- 匯出/重置功能

### LessonProgressIndicator.vue
課程內輕量級進度指示器，包含:
- 投影片進度條
- 當前投影片/總投影片數
- 進度百分比
- 學習計時器
- 測驗統計（如有）

### LearningStatsMini.vue
簡化版進度卡片，適合在主頁顯示:
- 已完成課程數
- 總學習時長
- 測驗正確率
- 連續學習天數

## 🔄 成就系統整合

進度追蹤系統會自動觸發成就檢查:

```javascript
// 在會話結束時自動檢查
progressActions.endSession()  // → 觸發成就檢查

// 手動觸發成就檢查
await progressActions.checkAchievements()
```

系統會將以下數據傳遞給成就系統:
- `totalStudyTime`: 總學習時間
- `totalLessons`: 已學課程數
- `totalQuizzes`: 測驗總數
- `quizAccuracy`: 測驗正確率
- `studyStreak`: 連續學習天數
- `totalSessions`: 學習會話總數

## 💾 數據管理

### 自動保存
系統會自動將進度保存到 `localStorage`:
- 鍵名: `bordeaux-progress`
- 保存觸發: 狀態變更時自動保存
- 載入時機: 頁面加載時自動載入

### 匯出數據
```javascript
const data = progressActions.exportProgress()
// 生成 JSON 文件下載
```

### 匯入數據
```javascript
progressActions.importProgress(jsonData)
```

### 重置進度
```javascript
progressActions.resetProgress()
// 清空所有進度數據
```

## 🎯 最佳實踐

1. **會話管理**
   - 始終在組件 `onMounted` 時開始會話
   - 始終在組件 `onUnmounted` 時結束會話
   - 避免嵌套會話

2. **投影片追蹤**
   - 使用 `watch` 監聽投影片變化
   - 確保傳入正確的 `totalSlides`

3. **測驗記錄**
   - 在用戶提交答案時立即記錄
   - 傳入準確的 `isCorrect` 值

4. **性能優化**
   - 進度數據使用 `localStorage` 持久化
   - Computed 屬性用於複雜計算
   - 避免頻繁觸發成就檢查

## 🐛 故障排除

### 進度沒有保存
- 檢查瀏覽器 localStorage 是否啟用
- 檢查控制台是否有錯誤
- 確認會話正確結束

### 計時器不準確
- 確保會話正確開始/結束
- 檢查是否有未處理的暫停狀態
- 避免多個計時器同時運行

### 統計數據不正確
- 檢查數據格式是否正確
- 確認所有操作使用 `progressActions`
- 重置並重新測試

## 📝 開發路線圖

### 已完成 ✅
- [x] 細粒度進度追蹤
- [x] 學習時間統計
- [x] 學習會話管理
- [x] 學習模式分析
- [x] 智能學習建議
- [x] 視覺化組件
- [x] 數據持久化
- [x] 成就系統整合

### 計劃中 🚀
- [ ] 學習路徑建議演算法
- [ ] 複習提醒機制
- [ ] 社交排行榜
- [ ] 學習報告生成
- [ ] 多設備同步
- [ ] 學習分析圖表增強

## 🤝 貢獻

如需添加新功能或修復 bug，請遵循以下步驟:
1. 更新 `progressTracker.js` 核心邏輯
2. 更新或創建相應的視覺化組件
3. 更新此文檔
4. 添加測試用例

## 📄 授權

MIT License
