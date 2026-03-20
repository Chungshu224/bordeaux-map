# 波爾多左岸右岸地圖視覺化更新

## 📅 更新日期
2025年11月8日

## 🎯 更新目標
實現波爾多 AOC 地圖的視覺化改進，包括：
1. 白色外框與透明填充
2. 左岸右岸顏色區分
3. 點擊顯示 AOC 名稱

## ✅ 完成項目

### 1. Bordeaux_AOC.geojson 外框樣式
- **外框邊界**: 白色 `#FFFFFF`，線寬 2px
- **填充**: 白色 20% 透明度 (`fill-opacity: 0.2`)
- **用途**: 作為背景層顯示整個波爾多產區範圍

### 2. 左岸產區 (Left Bank) - 深紅色
**顏色**: `#8B0000` (深紅色)
**填充透明度**: 40%
**線寬**: 1.5px
**代表意義**: Cabernet Sauvignon 主導產區

**包含 AOC**:
- **Médoc 產區** (8 個 AOC):
  - Listrac-Médoc
  - Haut-Médoc
  - Margaux
  - Pauillac
  - Moulis-en-Médoc
  - Médoc
  - St-Julien
  - St-Estèphe

- **Graves 產區** (3 個 AOC):
  - Pessac-Léognan
  - Graves
  - Graves-Supérieures

### 3. 右岸產區 (Right Bank) - 深紫色
**顏色**: `#4B0082` (靛藍色/深紫色)
**填充透明度**: 40%
**線寬**: 1.5px
**代表意義**: Merlot 主導產區

**包含 AOC**:
- **Libournais 產區** (11 個 AOC):
  - St-Georges-St-Émilion
  - St-Émilion
  - St-Émilion-Grand-Cru
  - Puisseguin-St-Émilion
  - Pomerol
  - Montagne-St-Émilion
  - Lussac-St-Émilion
  - Lalande-de-Pomerol
  - Fronsac
  - Castillon-Côtes-de-Bordeaux
  - Canon-Fronsac

- **Blaye 產區** (5 個 AOC):
  - Côtes-de-Bordeaux
  - Côtes-de-Bordeaux-Blaye
  - Côtes de Blaye
  - Côtes-de-Bourg
  - Blaye

### 4. 互動功能

#### 點擊事件
- 點擊任何 AOC 區域會顯示 Popup
- Popup 內容包括:
  - 🍷 AOC 名稱（從 GeoJSON 屬性提取）
  - 產區位置（左岸或右岸）
  - 主要葡萄品種

#### 滑鼠效果
- 滑鼠移到 AOC 區域時顯示 `pointer` 游標
- 離開時恢復正常游標

## 🔧 技術實作

### 修改的檔案
1. **`src/components/PresentationMap.vue`**
   - 修改 `loadBordeauxAOC()` 函數
   - 修改 `loadMultipleAOC()` 函數

### 核心邏輯

#### loadBordeauxAOC() 函數
```javascript
// 1. 載入白色外框
// 2. 載入所有左岸 AOC (深紅色)
// 3. 載入所有右岸 AOC (深紫色)
// 4. 為每個圖層添加點擊事件
```

#### loadMultipleAOC() 函數
```javascript
// 根據 URL 路徑判斷顏色
const isLeftBank = url.includes('/LeftBank/')
const isRightBank = url.includes('/RightBank/')
const isBordeauxOuter = url.includes('Bordeaux_AOC.geojson')

// 應用對應的顏色樣式
if (isBordeauxOuter) {
  // 白色 20% 透明
} else if (isLeftBank) {
  // 深紅色
} else if (isRightBank) {
  // 深紫色
}
```

### AOC 名稱提取
從 GeoJSON 的以下屬性按順序提取:
1. `geojson.name` (檔案層級名稱)
2. `feature.properties.appellatio`
3. `feature.properties.denominati`
4. 檔名 (最後備用)

## 📊 統計資料
- **總共載入**: 27 個 AOC GeoJSON 檔案
  - 左岸: 11 個
  - 右岸: 16 個
  - 外框: 1 個 (Bordeaux_AOC.geojson)

## 🎨 顏色選擇理由

### 左岸 - 深紅色 (#8B0000)
- 象徵 Cabernet Sauvignon 的深沉、結構化特質
- 視覺上代表左岸酒款的強勁單寧和陳年潛力

### 右岸 - 深紫色 (#4B0082)
- 象徵 Merlot 的柔順、果香特質
- 視覺上區分右岸酒款的優雅、圓潤風格
- 紫色與紅色形成良好對比，易於辨識

### 外框 - 白色透明 (#FFFFFF, 20%)
- 作為背景層不干擾主要產區顯示
- 清晰標示波爾多產區總體範圍
- 白色與深色 AOC 形成良好對比

## 🧪 測試方法

### 1. 開發環境測試
```bash
npm run dev
```
瀏覽 `http://localhost:5173`

### 2. 使用測試頁面
開啟 `map-banks-test.html`

### 3. 檢查項目
- [ ] 外框顯示為白色半透明
- [ ] 左岸 AOC 顯示為深紅色
- [ ] 右岸 AOC 顯示為深紫色
- [ ] 點擊任何 AOC 顯示正確名稱
- [ ] 產區資訊正確（左岸/右岸）
- [ ] 滑鼠懸停顯示指標游標

## 📝 使用案例

### Level 1 - Lesson 5: 紅酒類型與產區分布
此課程使用 `geojsonPaths` 載入多個 AOC:
```javascript
geojsonPaths: [
  '/geojson/LeftBank/Medoc/Medoc_AOC.geojson',
  '/geojson/LeftBank/Graves/Graves_AOC.geojson',
  '/geojson/RightBank/Libournais/St-Emilion_AOC.geojson',
  '/geojson/RightBank/Libournais/Pomerol_AOC.geojson',
  '/geojson/RightBank/Libournais/Fronsac_AOC.geojson',
  '/Bordeaux_AOC.geojson'
]
```

現在會正確顯示:
- Bordeaux_AOC.geojson: 白色透明外框
- Médoc & Graves: 深紅色
- St-Émilion, Pomerol, Fronsac: 深紫色

## 🚀 未來改進建議

1. **動態圖例**
   - 在地圖上顯示顏色圖例
   - 說明左岸/右岸的含義

2. **更多互動功能**
   - 懸停時高亮顯示
   - 顯示更詳細的 AOC 資訊（葡萄品種比例、土壤類型等）

3. **效能優化**
   - 考慮將多個小 AOC 合併為單一圖層
   - 使用 Mapbox 的 data-driven styling

4. **響應式設計**
   - 根據縮放級別調整填充透明度
   - 小螢幕上的 Popup 優化

## 📚 相關文件
- `map-banks-test.html` - 測試頁面
- `src/components/PresentationMap.vue` - 地圖組件
- `src/data/lessons/l1-5.js` - 使用此功能的課程範例

## ✨ 視覺效果
- **外框**: 淡淡的白色底色，不搶眼
- **左岸**: 鮮明的深紅色，象徵經典波爾多
- **右岸**: 優雅的深紫色，形成對比
- **整體**: 清晰的視覺層次，易於理解產區分布

---

**更新者**: GitHub Copilot  
**日期**: 2025年11月8日  
**版本**: 1.0.0
