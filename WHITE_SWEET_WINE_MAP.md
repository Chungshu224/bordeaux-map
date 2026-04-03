# 白酒與甜酒產區地圖視覺化

## 📅 更新日期
2025年11月8日

## 🎯 功能說明
為「白酒與甜酒的多樣性」課程頁面實作專屬的地圖視覺化，使用不同顏色區分白酒和甜酒產區。

## 🎨 顏色設計

### 甜酒產區 - 金黃色 (#FFD700)
**象徵意義**: 蜂蜜、液體黃金、貴腐甜酒
**透明度**: 50%
**邊框**: 深金色 (#DAA520)

**包含產區**:
- 🍯 Sauternes (蘇岱) - 世界頂級貴腐甜酒
- 🍯 Barsac (巴薩克) - 清新優雅的貴腐甜酒
- 🍯 Cadillac (卡迪亞克) - 性價比甜酒
- 🍯 Loupiac (盧皮亞克) - 半甜到甜型
- 🍯 Sainte-Croix-du-Mont (聖克魯瓦-迪-蒙) - 傳統甜酒
- 🍯 Cérons (塞龍) - 半甜型白酒

### 白酒產區 - 淡綠色 (#90EE90)
**象徵意義**: 清新、白蘇維濃、優雅
**透明度**: 40%
**邊框**: 鮮綠色 (#32CD32)

**包含產區**:
- 🤍 Pessac-Léognan (佩薩克-雷奧良) - 頂級干白，橡木桶發酵
- 🤍 Graves (格拉夫) - 清新優雅的干白
- 🤍 Entre-Deux-Mers (兩海之間) - 清爽果香的干白

### 外框 - 白色透明 (#FFFFFF)
**透明度**: 20%
**用途**: Bordeaux_AOC.geojson 作為背景

## 📍 載入的 GeoJSON 檔案

```javascript
geojsonPaths: [
  // 白酒主要產區
  '/geojson/LeftBank/Graves/Pessac-Leognan_AOC.geojson',
  '/geojson/LeftBank/Graves/Graves_AOC.geojson',
  '/geojson/Entre-Deux-Mers/Entre-Deux-Mers_AOC.geojson',
  
  // 甜酒產區
  '/geojson/Sauternais/Sauternes_AOC.geojson',
  '/geojson/Sauternais/Barsac_AOC.geojson',
  '/geojson/Sauternais/Cerons_AOC.geojson',
  '/geojson/Entre-Deux-Mers/Cadillac_AOC.geojson',
  '/geojson/Entre-Deux-Mers/Loupiac_AOC.geojson',
  '/geojson/Entre-Deux-Mers/Sainte-Croix-du-Mont_AOC.geojson',
  
  '/Bordeaux_AOC.geojson' // 外框背景
]
```

## 🖱️ 互動功能

### 點擊 Popup 內容

#### 甜酒產區
```
🍯 [AOC 名稱]
產區: 甜酒產區
描述: 
- Sauternes: 世界頂級貴腐甜酒，液體黃金
- Barsac: 清新優雅的貴腐甜酒
- 其他: 半甜到甜型波爾多甜酒
```

#### 白酒產區
```
🤍 [AOC 名稱]
產區: 白酒產區
描述:
- Pessac-Léognan: 頂級干白，橡木桶發酵
- Graves: 清新優雅的干白葡萄酒
- Entre-Deux-Mers: 清爽果香的干白葡萄酒
```

## 🔧 技術實作

### 修改的檔案
1. **`src/data/lessons/l1-5.js`**
   - 添加 `geojsonPaths` 陣列
   - 設定 `showBordeaux: false`

2. **`src/components/PresentationMap.vue`**
   - 更新 `loadMultipleAOC()` 函數
   - 添加甜酒和白酒產區的顏色邏輯
   - 更新 Popup 內容

### 顏色判斷邏輯

```javascript
// 白酒產區判斷
const isWhiteWine = url.includes('Graves') || 
                    url.includes('Pessac-Leognan') || 
                    url.includes('Entre-Deux-Mers')

// 甜酒產區判斷
const isSweetWine = url.includes('Sauternes') || 
                    url.includes('Barsac') || 
                    url.includes('Cadillac') || 
                    url.includes('Loupiac') || 
                    url.includes('Sainte-Croix') || 
                    url.includes('Cerons')
```

## 📊 產區統計

### 白酒產區
- **總數**: 3 個 AOC
- **分布**: 左岸 Graves 區域、兩河之間
- **風格**: 干型白酒為主

### 甜酒產區
- **總數**: 6 個 AOC
- **分布**: Sauternais 區域、Garonne 河沿岸
- **風格**: 貴腐甜酒、半甜型

## 🎓 教學用途

這個視覺化設計用於 **Level 1 - Lesson 5: 白酒與甜酒的多樣性**

### 課程要點
1. 波爾多不只有紅酒，白酒和甜酒同樣出色
2. Sauternes 貴腐甜酒是世界頂級甜酒
3. Graves 和 Pessac-Léognan 生產優質干白
4. Entre-Deux-Mers 提供性價比高的清爽白酒

### 視覺化優勢
- **清晰區分**: 金黃色和淡綠色一目了然
- **符合主題**: 顏色與酒款類型高度相關
- **易於理解**: 學生能快速識別產區類型

## 🌈 顏色選擇理由

### 金黃色 (#FFD700) - 甜酒
- 象徵蜂蜜、貴腐甜酒的金黃色澤
- 代表「液體黃金」的珍貴性
- 視覺上溫暖、甜美

### 淡綠色 (#90EE90) - 白酒
- 象徵白蘇維濃的青草、柑橘香氣
- 代表清新、優雅的酒款風格
- 視覺上清爽、宜人

### 對比效果
- 金黃與淡綠形成明顯對比
- 與紅酒的深紅/深紫形成區隔
- 整體色彩豐富但不混亂

## 🧪 測試檢查清單

- [ ] 甜酒產區顯示為金黃色
- [ ] 白酒產區顯示為淡綠色
- [ ] 外框顯示為白色透明
- [ ] 點擊甜酒產區顯示正確資訊
- [ ] 點擊白酒產區顯示正確資訊
- [ ] 產區名稱正確提取
- [ ] 滑鼠懸停顯示指標

## 📝 使用方法

1. 啟動開發伺服器: `npm run dev`
2. 瀏覽 `http://localhost:5173`
3. 進入 Level 1 課程
4. 找到「白酒與甜酒的多樣性」頁面
5. 查看右側地圖顯示

## 🔮 未來擴展

1. **添加圖例**
   - 在地圖上顯示顏色說明
   - 甜酒、白酒圖示

2. **更多產區資訊**
   - 主要品種比例
   - 典型風味描述
   - 推薦酒款

3. **互動增強**
   - 懸停預覽
   - 產區比較功能
   - 相關酒莊資訊

## 🌟 視覺效果描述

當您查看「白酒與甜酒的多樣性」頁面時，應該看到：

- 左側 Graves 區域顯示為**淡綠色**（白酒）
- Garonne 河南岸的 Sauternes/Barsac 顯示為**金黃色**（甜酒）
- 河的另一側 Cadillac, Loupiac 等也是**金黃色**（甜酒）
- Entre-Deux-Mers 顯示為**淡綠色**（白酒）
- 整體背景是淡淡的白色外框

視覺上形成了一個「白酒在左，甜酒在河邊」的清晰格局。

---

**更新者**: GitHub Copilot  
**日期**: 2025年11月8日  
**版本**: 1.0.0

