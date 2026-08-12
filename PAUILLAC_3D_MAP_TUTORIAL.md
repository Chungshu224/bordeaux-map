# 🗺️ Pauillac 3D 地圖操作完整教學

## 📚 目錄
1. [網站實際操作](#網站實際操作)
2. [螢幕錄製教學](#螢幕錄製教學)
3. [後期動畫製作](#後期動畫製作)
4. [常見問題解答](#常見問題解答)

---

## 🌐 網站實際操作

### 前置準備

1. **打開網站**
   - 訪問：https://sommeliernotes.com
   - 或本地開發環境：http://localhost:5173

2. **進入波爾多地圖**
   - 點擊首頁「波爾多」課程
   - 選擇「互動地圖」或「探索地圖」

3. **定位到 Pauillac**
   - 在地圖上找到 Médoc 區域
   - 或使用搜尋功能輸入 "Pauillac"

---

## 🎮 步驟 1：啟動 3D 視圖

### 方法 A：使用現有按鈕（如果網站已實作）

```
位置：地圖右上角控制面板
按鈕名稱：「3D」或「3D 視圖」
圖示：🗻 或 立方體圖標
```

**操作步驟**：
1. 將滑鼠移至地圖右上角
2. 找到控制面板（通常有多個按鈕）
3. 點擊「3D」按鈕
4. 地圖會平滑過渡到 3D 視角（pitch 角度從 0° → 60°）

**預期效果**：
- 地圖從平面逐漸傾斜
- 建築物和地形開始顯示立體效果
- 過渡動畫約 1-2 秒

---

### 方法 B：使用鍵盤快捷鍵

如果網站支援 Mapbox 預設快捷鍵：

```
【Ctrl + 滑鼠拖曳】或【右鍵拖曳】
↓ 拖曳 = 增加 pitch（傾斜角度）
↑ 拖曳 = 減少 pitch
```

**操作步驟**：
1. 按住 Ctrl 鍵（Windows）或 Command 鍵（Mac）
2. 同時按住滑鼠左鍵
3. 向下拖曳 = 地圖傾斜（3D 效果）
4. 向上拖曳 = 地圖回到平面

---

### 方法 C：使用瀏覽器控制台（開發者模式）

如果網站尚未實作 3D 按鈕，可以手動執行：

1. **打開瀏覽器開發者工具**
   - Windows: `F12` 或 `Ctrl + Shift + I`
   - Mac: `Cmd + Option + I`

2. **切換到 Console（控制台）分頁**

3. **輸入以下指令**：

```javascript
// 啟用 3D 地形
map.setTerrain({ 
  source: 'mapbox-dem', 
  exaggeration: 1.5  // 地形誇張係數
});

// 調整視角為 3D
map.easeTo({
  pitch: 60,        // 傾斜角度（0-85°）
  bearing: 0,       // 旋轉角度
  duration: 2000    // 動畫時間（毫秒）
});
```

4. **按 Enter 執行**

---

## 🏔️ 步驟 2：顯示等高線

### 方法 A：使用網站按鈕

```
位置：地圖控制面板
按鈕名稱：「等高線」或「顯示等高線」
圖示：📊 或波浪線圖標
```

**操作步驟**：
1. 確保已進入 3D 視圖
2. 找到「等高線」按鈕（可能在圖層選單中）
3. 點擊開啟
4. 等高線會逐漸浮現在地圖上

**預期效果**：
- 褐色或深棕色線條出現
- 線條沿著地形起伏分布
- 每條線代表相同海拔高度

---

### 方法 B：使用開發者控制台

如果沒有按鈕，手動添加等高線圖層：

```javascript
// 添加等高線圖層
map.addLayer({
  'id': 'contour-lines',
  'type': 'line',
  'source': {
    'type': 'vector',
    'url': 'mapbox://mapbox.mapbox-terrain-v2'
  },
  'source-layer': 'contour',
  'layout': {},
  'paint': {
    'line-color': '#8B4513',      // 深棕色
    'line-width': 1.5,            // 線條寬度
    'line-opacity': 0.8           // 透明度
  }
});

// 平滑顯示動畫
setTimeout(() => {
  map.setPaintProperty('contour-lines', 'line-opacity', 1);
}, 100);
```

---

### 等高線樣式自訂

```javascript
// 更進階的等高線設定
map.addLayer({
  'id': 'contour-lines',
  'type': 'line',
  'source': {
    'type': 'vector',
    'url': 'mapbox://mapbox.mapbox-terrain-v2'
  },
  'source-layer': 'contour',
  'paint': {
    'line-color': [
      'step',
      ['get', 'ele'],    // 根據海拔高度變色
      '#D2691E',         // 低海拔：淺棕色
      20, '#8B4513',     // 中海拔：深棕色
      50, '#654321'      // 高海拔：更深棕色
    ],
    'line-width': [
      'case',
      ['==', ['%', ['get', 'ele'], 10], 0],  // 每 10 米加粗
      2.5,
      1
    ]
  }
});
```

---

## 🔄 步驟 3：旋轉視角

### 方法 A：滑鼠拖曳旋轉

**操作步驟**：
1. 按住 `Shift` 鍵
2. 同時按住滑鼠左鍵
3. 左右拖曳 = 旋轉地圖
4. 或使用滑鼠右鍵直接拖曳

**360° 環繞展示**：
- 從北方（bearing: 0°）開始
- 順時針旋轉一圈
- 速度：約 10 秒完成 360°

---

### 方法 B：自動旋轉動畫

**使用控制台執行自動旋轉**：

```javascript
// 360° 平滑旋轉動畫（10 秒）
function rotate360() {
  map.rotateTo(360, {
    duration: 10000,    // 10 秒
    easing: t => t      // 線性速度
  });
}

// 執行旋轉
rotate360();
```

**無限循環旋轉**：

```javascript
// 持續旋轉（用於展示）
let bearing = 0;
function rotateCamera() {
  bearing += 0.5;  // 每幀旋轉角度
  if (bearing >= 360) bearing = 0;
  
  map.setBearing(bearing);
  requestAnimationFrame(rotateCamera);
}

// 開始旋轉
rotateCamera();

// 停止旋轉：重新整理頁面或執行
// cancelAnimationFrame(rotateCamera);
```

---

### 方法 C：預設旋轉路徑

**多角度切換展示**：

```javascript
// 定義四個關鍵視角
const viewAngles = [
  { bearing: 0,   pitch: 60, name: '北方視角' },
  { bearing: 90,  pitch: 60, name: '東方視角' },
  { bearing: 180, pitch: 60, name: '南方視角' },
  { bearing: 270, pitch: 60, name: '西方視角' }
];

// 依序展示每個角度
let currentAngle = 0;
function rotateToNextAngle() {
  const angle = viewAngles[currentAngle];
  
  map.flyTo({
    bearing: angle.bearing,
    pitch: angle.pitch,
    duration: 2000
  });
  
  console.log(`切換至：${angle.name}`);
  currentAngle = (currentAngle + 1) % viewAngles.length;
}

// 每 3 秒切換一次視角
setInterval(rotateToNextAngle, 3000);
```

---

## 🪨 步驟 4：土層剖面動畫

> **重要說明**：土層剖面圖通常需要後期製作，因為 Mapbox 本身不提供土壤剖面視覺化。以下提供兩種方案：

---

### 方案 A：後期製作（推薦用於影片）

#### 使用 Adobe After Effects

**步驟 1：準備素材**

1. **匯出靜態地圖**
   - 在網站上截圖 Pauillac 區域
   - 解析度：1920x1080 或更高
   - 格式：PNG（透明背景）

2. **繪製剖面圖**
   - 使用 Illustrator 或 Figma
   - 根據地質資料繪製土層

**剖面圖結構**：
```
┌─────────────────────────┐  ← 地表（0m）
│   深厚砂礫層 (Gunz)     │  
│   顏色：#8B4513         │  0-10m
│   質地：粗顆粒圖案      │
├─────────────────────────┤
│   排水層                │  
│   顏色：#A0826D         │  10-15m
│   質地：中顆粒圖案      │
├─────────────────────────┤
│   次級砂礫層            │  
│   顏色：#8B7355         │  15-20m
│   質地：混合圖案        │
├─────────────────────────┤
│   黏土底層 (保水層)     │  
│   顏色：#708090         │  20m+
│   質地：細密質地        │
└─────────────────────────┘
```

---

**步驟 2：After Effects 動畫製作**

1. **新建合成**
   - 尺寸：1920x1080
   - 幀率：30fps
   - 持續時間：5 秒

2. **匯入素材**
   - 地圖截圖（背景）
   - 土層剖面圖（分層匯入）

3. **設置圖層**
   ```
   時間軸結構：
   - 地圖背景（最底層）
   - 黏土層（第 1 層）
   - 砂礫層（第 2 層）
   - 排水層（第 3 層）
   - 表層（第 4 層）
   - 標註文字（最上層）
   ```

4. **動畫關鍵幀**

   **地層浮現動畫**：
   ```
   0:00s - 所有圖層 Opacity: 0%
   0:00s - 地圖背景淡入（Opacity: 0% → 100%）
   
   1:00s - 表層浮現
          Position: Y +50px → 0px
          Opacity: 0% → 100%
   
   1:50s - 排水層浮現
          Position: Y +50px → 0px
          Opacity: 0% → 100%
   
   2:50s - 砂礫層浮現
          Position: Y +50px → 0px
          Opacity: 0% → 100%
   
   3:50s - 黏土層浮現
          Position: Y +50px → 0px
          Opacity: 0% → 100%
   ```

5. **添加標註動畫**

   ```
   每層文字標註：
   - 延遲 0.3 秒後出現
   - 效果：打字機效果或淡入
   - 包含資訊：
     * 土層名稱
     * 深度範圍
     * 主要成分
     * 功能說明
   ```

---

**步驟 3：熱循環動畫（進階）**

```
白天吸熱（向下箭頭）：
- 太陽圖標在上方
- 橙色箭頭從地表向下
- 溫度漸層效果（紅→橙→黃）

夜晚釋放（向上箭頭）：
- 月亮圖標在上方
- 藍色箭頭從深層向上
- 冷卻效果（黃→橙→紅）

循環動畫：
- 2 秒白天 → 2 秒夜晚
- 無限循環或播放 2-3 次
```

---

### 方案 B：網頁內嵌動畫（技術實作）

如果要在網站上實現互動剖面圖：

#### 使用 D3.js 或 Canvas

**HTML 結構**：

```html
<!-- 土層剖面容器 -->
<div id="soil-profile" class="soil-profile-container">
  <svg width="400" height="600" id="profile-svg"></svg>
</div>
```

**JavaScript 實作**：

```javascript
// 土層資料
const soilLayers = [
  { 
    name: '表層砂礫', 
    depth: [0, 10], 
    color: '#8B4513',
    composition: '砂礫 85% + 黏土 10% + 沙 5%',
    function: '優異排水、熱儲存'
  },
  { 
    name: '排水層', 
    depth: [10, 15], 
    color: '#A0826D',
    composition: '粗砂 60% + 細礫 30% + 黏土 10%',
    function: '快速排水、防止積水'
  },
  { 
    name: '深層砂礫', 
    depth: [15, 20], 
    color: '#8B7355',
    composition: '古老礫石 70% + 黏土 20% + 其他 10%',
    function: '礦物質吸收、根系延伸'
  },
  { 
    name: '黏土基底', 
    depth: [20, 30], 
    color: '#708090',
    composition: '黏土 80% + 石灰岩 20%',
    function: '保水、提供礦物質'
  }
];

// 繪製剖面圖
function drawSoilProfile() {
  const svg = d3.select('#profile-svg');
  const width = 400;
  const height = 600;
  const scale = 20; // 每米 20px
  
  // 繪製每層土壤
  soilLayers.forEach((layer, index) => {
    const y1 = layer.depth[0] * scale;
    const y2 = layer.depth[1] * scale;
    const layerHeight = y2 - y1;
    
    // 土層矩形
    svg.append('rect')
      .attr('x', 50)
      .attr('y', y1)
      .attr('width', 200)
      .attr('height', 0)  // 初始高度 0
      .attr('fill', layer.color)
      .attr('stroke', '#000')
      .attr('stroke-width', 1)
      .transition()
      .delay(index * 500)  // 依序展開
      .duration(1000)
      .attr('height', layerHeight);
    
    // 土層標註
    svg.append('text')
      .attr('x', 270)
      .attr('y', y1 + layerHeight / 2)
      .attr('opacity', 0)
      .text(`${layer.name} (${layer.depth[0]}-${layer.depth[1]}m)`)
      .transition()
      .delay(index * 500 + 500)
      .duration(500)
      .attr('opacity', 1);
  });
  
  // 深度刻度
  for (let i = 0; i <= 30; i += 5) {
    svg.append('line')
      .attr('x1', 40)
      .attr('y1', i * scale)
      .attr('x2', 50)
      .attr('y2', i * scale)
      .attr('stroke', '#333');
    
    svg.append('text')
      .attr('x', 30)
      .attr('y', i * scale + 5)
      .attr('text-anchor', 'end')
      .attr('font-size', '12px')
      .text(`${i}m`);
  }
}

// 啟動動畫
drawSoilProfile();
```

---

**添加互動功能**：

```javascript
// 點擊土層顯示詳細資訊
svg.selectAll('rect')
  .on('click', function(event, d) {
    const layer = soilLayers[d];
    showLayerInfo(layer);
  })
  .on('mouseover', function() {
    d3.select(this)
      .transition()
      .duration(200)
      .attr('opacity', 0.7);
  })
  .on('mouseout', function() {
    d3.select(this)
      .transition()
      .duration(200)
      .attr('opacity', 1);
  });

// 顯示圖層詳細資訊
function showLayerInfo(layer) {
  const infoBox = d3.select('#layer-info');
  infoBox.html(`
    <h3>${layer.name}</h3>
    <p><strong>深度：</strong>${layer.depth[0]}-${layer.depth[1]} 米</p>
    <p><strong>組成：</strong>${layer.composition}</p>
    <p><strong>功能：</strong>${layer.function}</p>
  `);
}
```

---

## 📹 螢幕錄製完整流程

### 推薦軟體

1. **OBS Studio**（免費）
   - 下載：https://obsproject.com/
   - 優點：免費、功能強大、支援高幀率

2. **ScreenFlow**（Mac，付費）
   - 優點：操作簡單、內建編輯功能

3. **Camtasia**（Windows/Mac，付費）
   - 優點：專業、內建動畫庫

---

### OBS Studio 設置教學

#### 步驟 1：安裝與基本設置

1. **下載並安裝 OBS**
   - 前往 https://obsproject.com/download
   - 下載適合你系統的版本

2. **首次啟動設定精靈**
   - 選擇「優化錄製」
   - 解析度：1920x1080
   - FPS：60（流暢）或 30（標準）

3. **進階設置**
   ```
   設定 → 輸出 → 錄影
   - 錄影品質：高品質，檔案大小中等
   - 錄影格式：mp4
   - 編碼器：x264
   - 位元率：8000-12000 Kbps
   ```

---

#### 步驟 2：新增來源

1. **點擊「來源」區域的 ＋ 號**

2. **選擇「顯示器擷取」**
   - 命名：瀏覽器視窗
   - 選擇要錄製的螢幕

3. **調整框選區域**
   - 只框選瀏覽器視窗
   - 去除多餘的瀏覽器工具列

---

#### 步驟 3：優化錄製效果

**隱藏干擾元素**：
```
瀏覽器設定：
- F11 進入全螢幕模式
- 隱藏書籤列
- 隱藏通知
- 關閉其他分頁
```

**滑鼠游標特效**：
```
安裝 Kolorowy Cursor（Windows）
或使用 OBS 插件：
- 游標放大至 150%
- 點擊時顯示波紋效果
- 顏色：醒目但不刺眼（如金色）
```

---

#### 步驟 4：錄製操作

**錄製前檢查清單**：
- [ ] 清空桌面
- [ ] 關閉通知
- [ ] 瀏覽器全螢幕
- [ ] 地圖已定位到 Pauillac
- [ ] 音量調整適中（如有旁白）

**開始錄製**：
1. 點擊 OBS 的「開始錄影」
2. 倒數 3 秒後開始操作
3. 按照腳本依序執行：
   - 縮放地圖
   - 點擊 3D 按鈕
   - 開啟等高線
   - 旋轉視角
4. 結束後停頓 2 秒
5. 點擊「停止錄影」

---

### 錄製技巧

**操作節奏**：
```
✅ 慢速、清晰、刻意
❌ 快速、隨意、抖動

每個動作之間停頓 0.5-1 秒
讓觀眾看清楚發生什麼
```

**滑鼠移動**：
```
✅ 平滑、直線、目標明確
❌ 晃動、繞圈、猶豫

移動路徑：起點 → 終點（直線）
點擊位置：按鈕中心（精準）
```

**錄製多個版本**：
```
Take 1：熟悉流程
Take 2：正式錄製
Take 3：備用版本（以防 Take 2 有瑕疵）

選擇最流暢的版本進後期
```

---

## 🎨 後期剪輯技巧

### Adobe Premiere Pro

**匯入素材**：
1. 將錄製的影片拖入 Premiere
2. 新建序列（1920x1080, 30fps）

**剪輯重點**：

1. **加速平淡片段**
   - 選取地圖移動片段
   - 右鍵 → 速度/持續時間
   - 調整為 150%（稍快）

2. **慢動作關鍵動作**
   - 3D 啟動瞬間：80%（稍慢）
   - 等高線浮現：60%（慢動作）
   - 強調視覺效果

3. **添加過渡效果**
   - 場景切換：Cross Dissolve（0.5 秒）
   - 圖層切換：Dip to White（0.3 秒）

---

### 添加文字標註

**使用 Premiere 基本圖形**：

```
範例：「點擊 3D 視圖按鈕」

位置：按鈕旁邊（箭頭指向）
字體：思源黑體 Medium
大小：48pt
顏色：白色 + 黑色描邊（3px）
動畫：從左滑入（0.3 秒）
持續：與操作同步（約 2 秒）
```

**關鍵詞高亮**：

```
「3D 地形」→ 金色背景
「等高線」→ 褐色背景
「20 米」→ 放大強調
```

---

### 音效添加

**建議音效**：

| 動作 | 音效 | 音量 |
|------|------|------|
| 按鈕點擊 | UI Click | -18dB |
| 3D 啟動 | Whoosh | -12dB |
| 等高線浮現 | Shimmer | -16dB |
| 地圖旋轉 | Swoosh | -14dB |
| 土層展開 | Layer Pop | -15dB |

**音效來源**：
- Freesound.org（免費）
- Epidemic Sound（訂閱制）
- BBC Sound Effects（部分免費）

---

## ❓ 常見問題解答

### Q1: 我的網站沒有 3D 按鈕怎麼辦？

**方案 1**：使用開發者控制台手動啟用（見上方教學）

**方案 2**：在程式碼中添加 3D 按鈕

找到地圖元件檔案（如 `BordeauxMapIntegration.vue`），添加：

```vue
<template>
  <div class="map-controls">
    <!-- 其他按鈕... -->
    
    <!-- 新增 3D 按鈕 -->
    <button 
      class="control-btn" 
      @click="toggle3D"
      :class="{ active: is3D }"
    >
      <span>{{ is3D ? '2D' : '3D' }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const is3D = ref(false)

function toggle3D() {
  is3D.value = !is3D.value
  
  if (is3D.value) {
    // 啟用 3D
    map.value.easeTo({
      pitch: 60,
      duration: 1500
    })
    
    map.value.setTerrain({ 
      source: 'mapbox-dem', 
      exaggeration: 1.5 
    })
  } else {
    // 關閉 3D
    map.value.easeTo({
      pitch: 0,
      duration: 1500
    })
    
    map.value.setTerrain(null)
  }
}
</script>
```

---

### Q2: 等高線不顯示怎麼辦？

**可能原因**：
1. Mapbox token 權限不足
2. 地形資料來源未設置
3. Zoom level 太低（需要 > 10）

**解決方法**：

確保已添加 Mapbox DEM 來源：

```javascript
map.addSource('mapbox-dem', {
  'type': 'raster-dem',
  'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
  'tileSize': 512,
  'maxzoom': 14
});

// 設置地形
map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
```

---

### Q3: 土層剖面圖資料從哪裡來？

**資料來源**：

1. **學術文獻**
   - INRA（法國國家農業研究院）
   - Bordeaux 葡萄酒學會出版品

2. **實地調查**
   - 酒莊官網的技術資料
   - 地質調查報告

3. **簡化示意**
   - 為教學目的可簡化
   - 標註「示意圖」
   - 重點在於概念而非精確數值

**Pauillac 土壤參考資料**：
```
表層（0-2m）：粗砂礫（Gunz 礫石）
中層（2-10m）：砂礫混黏土
深層（10-20m）：古老砂礫層
基底（20m+）：黏土、石灰岩
```

---

### Q4: 錄製時地圖卡頓怎麼辦？

**優化方法**：

1. **降低地圖品質**（錄製時）
   ```javascript
   // 臨時降低畫質
   map.setRenderWorldCopies(false);
   map.setMaxPitch(60);  // 限制最大傾斜
   ```

2. **關閉其他應用程式**
   - 只保留瀏覽器和 OBS
   - 關閉 Slack、Teams 等通訊軟體

3. **降低 OBS 錄製設定**
   - 從 60fps 降到 30fps
   - 位元率從 12000 降到 8000

4. **分段錄製**
   - 不要一次錄完 2 分鐘
   - 分成 4-5 個片段
   - 後期再組合

---

### Q5: 如何讓動畫更流暢？

**技巧**：

1. **使用緩動函數（Easing）**
   ```javascript
   map.easeTo({
     pitch: 60,
     duration: 2000,
     easing: t => t * (2 - t)  // ease-out
   });
   ```

2. **延遲執行**
   ```javascript
   // 依序執行多個動畫
   setTimeout(() => {
     // 第一個動畫
     map.easeTo({ pitch: 60 });
   }, 0);
   
   setTimeout(() => {
     // 第二個動畫
     addContourLayer();
   }, 2000);
   
   setTimeout(() => {
     // 第三個動畫
     rotateMap();
   }, 4000);
   ```

3. **後期時間重映射**
   - 在 Premiere 使用 Time Remapping
   - 關鍵幀控制速度變化
   - 創造更專業的節奏感

---

## 📚 延伸學習資源

### Mapbox 官方文檔

- **3D Terrain**：https://docs.mapbox.com/mapbox-gl-js/example/3d-terrain/
- **Add 3D buildings**：https://docs.mapbox.com/mapbox-gl-js/example/3d-buildings/
- **Contour lines**：https://docs.mapbox.com/mapbox-gl-js/example/vector-source/

### 教學影片

- **Mapbox GL JS Tutorial**：YouTube 搜尋
- **OBS Studio 完整教學**：YouTube 搜尋
- **After Effects 地圖動畫**：Motion Design School

### 範例專案

查看本專案中的地圖元件：
- `src/components/bordeaux/BordeauxMapIntegration.vue`
- `src/components/bourgogne/BourgogneMapSection.vue`

這些檔案包含完整的 3D 地圖實作程式碼。

---

## ✅ 操作檢查清單

### 錄製前
- [ ] 網站已在本地或線上正常運行
- [ ] 瀏覽器已進入全螢幕模式（F11）
- [ ] 地圖已定位到 Pauillac 產區
- [ ] OBS 已設置並測試
- [ ] 滑鼠游標已優化（大小、特效）
- [ ] 桌面已清空，通知已關閉

### 錄製中
- [ ] 操作緩慢、清晰、刻意
- [ ] 每個動作之間有停頓
- [ ] 滑鼠移動平滑、直線
- [ ] 避免不必要的點擊或晃動

### 錄製後
- [ ] 立即檢查錄製檔案
- [ ] 確認沒有掉幀或卡頓
- [ ] 確認音訊（如有）清晰
- [ ] 備份原始檔案
- [ ] 準備進入後期剪輯

---

## 🎬 完整操作腳本範例

```
時間：0:00-0:05
動作：將地圖縮放至 Pauillac
操作：雙指縮放或滾輪
注意：動作要平滑，不要突然跳躍

時間：0:05-0:08
動作：滑鼠移至「3D 視圖」按鈕
操作：平滑移動，停留 0.5 秒
注意：按鈕要高亮顯示（hover 效果）

時間：0:08-0:09
動作：點擊「3D 視圖」按鈕
操作：單擊
注意：點擊瞬間可有視覺反饋

時間：0:09-0:11
效果：地圖從平面立體化
操作：無（自動動畫）
注意：等待動畫完成，不要干擾

時間：0:11-0:14
動作：滑鼠移至「等高線」按鈕
操作：平滑移動
注意：按鈕位置可能在圖層選單中

時間：0:14-0:15
動作：點擊「等高線」按鈕
操作：單擊
注意：等高線開始浮現

時間：0:15-0:18
效果：等高線逐漸顯示
操作：無（自動動畫）
注意：觀察等高線如何沿地形分布

時間：0:18-0:28
動作：360° 旋轉視角
操作：Shift + 滑鼠拖曳 或 自動旋轉腳本
注意：速度均勻，約 10 秒完成一圈

時間：0:28-0:30
動作：停止旋轉，回到初始視角
操作：釋放滑鼠或停止腳本
注意：平滑停止，不要突然剎車
```

---

**製作日期**：2026-08-09  
**版本**：v1.0  
**適用於**：Pauillac 短視頻製作

有任何問題歡迎詢問！🗺️✨
