# L1 & L2 Quiz Integration Complete

## 修改日期
2024年

## 修改目標
將 L1 和 L2 課程中內嵌的 quiz 物件提取並顯示為獨立的 quiz 投影片，使學習者能夠在學習內容後立即進行知識檢測。

## 修改內容

### 1. PresentationLesson.vue
在 `normalizeSlide` 函數末尾（第 1369 行之前）添加了 quiz 提取邏輯：

```javascript
// ✨ 檢查是否有內嵌 quiz，若有則額外產生一張 quiz 投影片
if (s.quiz && typeof s.quiz === 'object') {
  const quizSlide = {
    title: `${slide.title || '知識檢測'}`,
    highlights: undefined,
    content: '',
    hasMap: false,
    mapUrl: undefined,
    quiz: {
      question: s.quiz.question || '',
      options: Array.isArray(s.quiz.options) ? s.quiz.options : [],
      correct: s.quiz.correct ?? 0,
      explanation: s.quiz.explanation || ''
    }
  }
  return [slide, quizSlide]
}

return slide
```

### 2. 工作原理
- **檢測**：在處理完每個內容物件後，檢查是否存在 `quiz` 屬性
- **提取**：若存在，將 quiz 資料提取為獨立的投影片物件
- **返回**：返回包含兩張投影片的陣列 [內容投影片, quiz 投影片]
- **整合**：`slides` computed 使用 `flatMap` 自動展開陣列

### 3. 影響範圍

#### L1 課程（8 個課程，24 個 quiz）
- ✅ L1-1: 波爾多的地理位置（3 個 quiz）
- ✅ L1-2: 氣候特徵（3 個 quiz）
- ✅ L1-3: 主要葡萄品種（3 個 quiz）
- ✅ L1-4: 釀造方法（3 個 quiz）
- ✅ L1-5: 左岸產區（3 個 quiz）
- ✅ L1-6: 右岸產區（3 個 quiz）
- ✅ L1-7: 白酒與甜酒產區（3 個 quiz）
- ✅ L1-8: 分級制度（3 個 quiz）

**預期效果**：每個課程從 3 張投影片變為 6 張（3 個內容 + 3 個 quiz）

#### L2 課程（8 個課程，56+ quiz）
- ✅ L2-1: Médoc 產區概述（約 8 個 quiz）
- ✅ L2-2: Haut-Médoc 與村莊級 AOC（約 8 個 quiz）
- ✅ L2-3: Pauillac（約 8 個 quiz）
- ✅ L2-4: St-Julien（約 7 個 quiz）
- ✅ L2-5: Margaux（約 7 個 quiz）
- ✅ L2-6: St-Estèphe（約 7 個 quiz）
- ✅ L2-7: Pessac-Léognan 詳解（7 個 quiz）
- ✅ L2-8: Sauternes & Barsac 甜酒專論（7 個 quiz）

**預期效果**：每個課程的投影片數量增加對應的 quiz 數量（約翻倍）

#### L3 課程
目前 L3 課程沒有內嵌 quiz，不受此次修改影響。

#### L4 課程
L4 使用 `makeL4Lesson` helper，quiz 已經是獨立的投影片類型（`type: 'interactive-quiz'`），不受此次修改影響。

## 技術細節

### Quiz 資料結構
```javascript
{
  question: string,      // 問題文字
  options: string[],     // 選項陣列
  correct: number,       // 正確答案索引（0-based）
  explanation: string    // 答案解析
}
```

### 投影片流程範例（L1-1）
1. 標題投影片: "波爾多的地理位置"
2. 內容投影片: "波爾多在法國的位置"
3. **Quiz 投影片**: "波爾多距離大西洋約多少公里？"
4. 內容投影片: "三河匯流的獨特地理"
5. **Quiz 投影片**: "波爾多的三條主要河流作用為何？"
6. 內容投影片: "左岸與右岸的劃分"
7. **Quiz 投影片**: "左岸與右岸主要以哪條河流劃分？"

## 測試驗證

### 測試文件
創建了 `l1-quiz-integration-test.html` 用於測試所有 L1 課程的 quiz 整合情況。

### 測試重點
1. ✅ Quiz 是否被正確提取為獨立投影片
2. ✅ Quiz 投影片是否緊接在對應的內容投影片後
3. ✅ Quiz 問題、選項、正確答案、解析是否完整顯示
4. ✅ Quiz 互動功能是否正常（選擇答案、顯示解析）
5. ✅ 投影片導航是否正常

### 建置結果
```bash
npm run build
✓ 486 modules transformed.
✓ built in 8.26s
```
無錯誤，建置成功。

## 優勢

### 1. 學習體驗提升
- **即時檢測**：學習完每個概念後立即測試，加深記憶
- **互動性**：從被動閱讀變為主動參與
- **反饋即時**：選擇答案後立即看到正確答案和解析

### 2. 教學設計優化
- **結構清晰**：內容 → Quiz → 內容 → Quiz 的節奏感
- **重點強化**：Quiz 題目對應內容重點，幫助學習者聚焦
- **進度可視**：投影片數量增加，讓學習進度更明確

### 3. 技術實現簡潔
- **非侵入式**：不需修改課程資料檔案
- **向後兼容**：沒有 quiz 的內容正常顯示
- **自動化**：一次修改，所有 L1/L2 課程自動生效

## 後續規劃

### L3 課程 Quiz 創建
由於 L3 目前沒有內嵌 quiz，建議：
1. 參考 L1/L2 的 quiz 格式
2. 為每個 L3 課程創建對應的 quiz
3. 確保 quiz 難度符合 L3 學習深度

### Quiz 統計功能
可考慮添加：
- 正確率追蹤
- 錯題重溫
- 學習進度儀表板

### Quiz 類型擴展
未來可支援：
- 多選題
- 填空題
- 配對題
- 排序題

## 參考資料
- L1 課程檔案：`src/data/lessons/l1-*.js`
- L2 課程檔案：`src/data/lessons/l2-*.js`
- 元件檔案：`src/components/PresentationLesson.vue`
- 測試檔案：`l1-quiz-integration-test.html`
