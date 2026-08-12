# 🍇 布根地產區短視頻教學腳本

## 影片資訊
- **目標時長**: 90-120 秒
- **主題**: Bourgogne - 一座山坡、上千種風土的國度
- **風格**: 專業、細膩、人文感（相對 Pauillac 版本更強調「地塊碎片化」與「風土精密度」）
- **目標受眾**: 葡萄酒愛好者、侍酒師學習者、對「Climat（風土地塊）」概念好奇的人

---

## 🎬 完整腳本分段

### 【開場：一座山坡的秘密 0-15秒】

**視覺關鍵字**:
```
勃根地金丘（Côte d'Or）航拍, 狹長葡萄園帶沿山坡延展,
晨霧繚繞葡萄藤, 石牆分割地塊特寫, 優雅轉場特效
```

**旁白文案**:
"在法國中部，有一條僅 2 公里寬、60 公里長的山坡，卻被切割成超過 1,200 塊風土——這就是布根地，一個用『公尺』計算價值的產區。"

**字幕關鍵詞**:
```
Bourgogne | 風土的顯微鏡 🔬
5 大產區 | 33 座特級園 | 1,200+ Climats
```

---

### 【地圖展示：五大產區定位 15-35秒】

**視覺關鍵字**:
```
互動地圖啟動, 從法國全境縮放至布根地,
五大產區依序高亮（金色光圈）：
  夏布利 Chablis（北，孤立飛地）
  夜丘 Côte de Nuits（紅酒核心）
  伯恩丘 Côte de Beaune（白酒聖地）
  夏隆內丘 Côte Chalonnaise
  馬貢內 Mâconnais（南，接薄酒萊）
手指觸控操作, 地圖平移展示狹長帶狀地形
```

**操作示範**:
1. 點擊各產區 AOC 圖層，邊界依序亮起（Chablis / Côte-de-Nuits / Côte-de-Beaune / Côte-Chalonnaise / Mâconnais / Beaujolais）
2. 縮放至金丘（Côte d'Or）核心地帶
3. 開啟「顯示等高線」，帶狀山坡地形浮現

**旁白文案**:
"從北邊孤立的夏布利，到金丘的夜丘與伯恩丘，再到南邊的夏隆內丘與馬貢內——布根地不是一整塊產區，而是五段風格迥異的山坡。"

**字幕關鍵詞**:
```
📍 夏布利：燧石與海洋
🍷 夜丘：黑皮諾的殿堂
🥂 伯恩丘：夏多內的聖地
```

---

### 【Climat 地塊革命：一座村莊、上百種風土 35-60秒】

**視覺關鍵字**:
```
地圖切換至 3D 地形模式, 等高線疊加,
金丘坡面清晰可見（東向緩坡, 排水絕佳）,
點擊「顯示酒莊」，地塊圖層展開：
  Chambertin Grand Cru 地塊逐一亮起
  Richebourg Grand Cru 地塊描邊
  Chevalier-Montrachet / Bâtard-Montrachet 並列比對
每塊地產以金色（#FFD700）多邊形描邊, 逐格點亮動畫,
放大鏡效果：同一村莊內數十個地塊並存
```

**操作示範**:
1. 進入 Gevrey-Chambertin，點擊「顯示酒莊」按鈕（🏰）
2. Chambertin Grand Cru 內各家酒莊地塊依序點亮
3. 切換至 Puligny/Chassagne-Montrachet，比較 Chevalier-Montrachet 與 Bâtard-Montrachet 兩塊特級園的地塊分佈
4. 點擊單一地塊，彈出酒莊資訊卡（成立年份、面積、風格、特色）

**旁白文案**:
"這裡沒有『一座酒莊、一片莊園』的概念。同一座 Chambertin 特級園，可能被十幾個家族分持，每一小塊地——他們稱之為 Climat——都因為坡度、排水與微氣候的一寸之差，釀出截然不同的酒。這是全世界最精密的風土分級系統，2015 年被聯合國教科文組織列為世界遺產。"

**字幕關鍵詞**:
```
🧩 Climat：風土的最小單位
🏆 33 座特級園、超過 600 座一級園
🌍 2015 UNESCO 世界遺產
```

**資料來源**:
- 地塊圖層：`public/bourgogne/geojson/**`（21 個特級園/一級園已建置酒莊地塊）
- 涵蓋範例：Chambertin、Richebourg、Chevalier-Montrachet、Bâtard-Montrachet、Pommard 1er Cru Les Rugiens、Meursault 1er Cru Genevrières 等

---

### 【地質圖層：三種風土密碼 60-85秒】

**視覺關鍵字**:
```
切換至地質圖層, 不同岩性以色塊區分（BRGM 法國官方地質資料）：
  夏布利：啟莫里奇石灰岩（Kimmeridgian，灰藍色）— 富含牡蠣化石
  金丘：泥灰岩與石灰岩互層（Marno-calcaire，米黃色）
  薄酒萊：花崗岩與片岩（Granite/Schiste，紫灰色）
分屏對比三種岩性剖面, 點擊各區塊彈出岩性說明卡
```

**操作示範**:
1. 開啟「地質圖層」（🗺️），透明度滑桿示範 30%-85%
2. 點擊夏布利區域：彈窗顯示「啟莫里奇石灰岩」與牡蠣化石說明
3. 點擊金丘伯恩丘：彈窗顯示「泥灰岩」與 Lieu-dit 精度說明
4. 切換至薄酒萊：彈窗顯示「花崗岩」與加美（Gamay）品種特性

**旁白文案**:
"夏布利的啟莫里奇石灰岩，藏著一億五千萬年前的海洋化石，賦予夏多內標誌性的燧石鹹鮮；金丘的泥灰岩與石灰岩互層，讓黑皮諾展現精緻酸度與礦物骨感；南邊薄酒萊的花崗岩，則讓加美長出剛健的礦石感。三種岩石，三種截然不同的布根地。"

**字幕關鍵詞**:
```
🪨 夏布利：啟莫里奇石灰岩 + 牡蠣化石
⛰️ 金丘：泥灰岩互層 → 精緻酸度
🗿 薄酒萊：花崗岩 → 剛健礦石感
```

**技術提示**:
- 資料來源：BRGM 法國地質調查局 WMS/WFS（`LITHO_1M_SIMPLIFIEE`, Etalab Open License）
- 中文岩性對照與風土解說：`useBRGMGeology.js` `REGION_DESCR_OVERRIDE.bourgogne`

---

### 【年份氣候：解讀 Golden Vintage 85-105秒】

**視覺關鍵字**:
```
氣候熱力圖啟動, 年份滑桿拖曳（近 40 年資料）,
指標切換：氣溫 🌡️ / 日照 ☀️ / 降雨 💧,
金色年份徽章「Golden Vintage」跳出動畫,
色塊隨年份變化（藍→黃→紅漸層）,
村莊溫度數值即時更新
```

**操作示範**:
1. 開啟「氣候熱力圖」，拖曳年份滑桿
2. 停在指標年份，「Golden Vintage」金色徽章彈出
3. 切換氣溫／日照／降雨三種指標，觀察同一年份的不同面向
4. 對比金丘不同村莊在同一年份的溫度差異

**旁白文案**:
"布根地的黑皮諾對氣候極度敏感，一個好年份能讓整條金丘同時綻放。用氣候熱力圖，你可以親手滑過近 40 年的氣溫、日照與降雨紀錄，找出屬於自己的 Golden Vintage。"

**字幕關鍵詞**:
```
📈 近 40 年氣候資料
🌡️ 氣溫 / ☀️ 日照 / 💧 降雨 三指標
🏅 Golden Vintage 自動標註
```

**資料來源**:
- `public/data/bourgogne-climate.json`

---

### 【結尾：行動呼籲 105-120秒】

**視覺關鍵字**:
```
回到地圖全景, 鏡頭緩慢拉遠，金丘全貌在夕陽下顯現,
網站介面浮現, 滑鼠游標點擊「開始學習」,
課程等級卡片展開：Level 1 入門 → Level 4 大師,
學習進度條啟動, 成就徽章解鎖,
Logo 淡入：「侍酒師的筆記本」,
網站 URL 顯示
```

**旁白文案**:
"從五大產區到單一地塊，從岩性密碼到年份氣候——用『侍酒師的筆記本』，親手拆解布根地最精密的風土地圖。馬上開始你的布根地學習之旅！"

**字幕關鍵詞**:
```
🎓 4 大等級課程：入門 → 進階 → 高階 → 大師
🗺️ 互動地圖：21 座特級/一級園地塊實測
🏔️ 地質 × 氣候 × 地塊 三重風土解析
💾 雲端同步：隨時隨地學習

👉 sommeliernotes.com
```

---

## 📋 拍攝清單 Checklist

### 螢幕錄製部分
- [ ] 地圖從法國全境縮放至布根地五大產區
- [ ] AOC 圖層逐一高亮展示（Chablis / Côte-de-Nuits / Côte-de-Beaune / Côte-Chalonnaise / Mâconnais / Beaujolais）
- [ ] 3D 地形 + 等高線開啟動畫
- [ ] 「顯示酒莊」地塊圖層展開（Chambertin / Montrachet 家族 / Richebourg）
- [ ] 地塊點擊彈出酒莊資訊卡
- [ ] 地質圖層切換與透明度調整
- [ ] 三種岩性區塊點擊彈窗展示
- [ ] 氣候熱力圖年份滑桿拖曳
- [ ] Golden Vintage 徽章彈出動畫
- [ ] 課程等級卡片與成就解鎖動畫

### 實拍/素材部分
- [ ] 金丘（Côte d'Or）山坡航拍鏡頭
- [ ] 石牆分割地塊近拍（Clos 圍牆）
- [ ] 夏布利牡蠣化石/白堊土近拍
- [ ] 葡萄藤與晨霧鏡頭
- [ ] 布根地酒瓶（勃根地瓶型特寫）與酒標
- [ ] 倒酒、搖杯動作鏡頭

### 圖形動畫部分
- [ ] 五大產區地理位置示意圖動畫
- [ ] Climat 地塊拼圖動畫（同村莊多地塊示意）
- [ ] 三種岩性剖面對比圖
- [ ] 氣候年份曲線動畫
- [ ] 關鍵字浮現動畫
- [ ] Logo 動畫

---

## 🎨 視覺風格指南

### 色彩方案
- **主色調**: 勃根地紅 `#722F37`、秋葉金 `#C9A227`
- **輔助色**: 石灰岩米白 `#EDE6D6`、深棕橡木 `#3d2817`
- **強調色**（依產區區分）:
  - 夏布利: 冷冽藍灰 `#7A93A0`（燧石／海洋感）
  - 夜丘: 深勃根地紅 `#5C1A2B`
  - 伯恩丘: 香檳金 `#D9B85C`
  - 薄酒萊: 花崗岩紫灰 `#8A7A94`

### 字體建議
- **標題**: Playfair Display / 思源宋體（優雅襯線）
- **正文**: Inter / 思源黑體（現代無襯線）
- **強調**: Cinzel（古典風格，用於 Climat/Grand Cru 標籤）

### 動畫節奏
- **轉場時長**: 0.8-1.2 秒
- **地塊逐格點亮**: 每塊 0.15-0.2 秒間隔（呈現「碎片化」節奏感）
- **地圖操作**: 流暢 60fps
- **整體節奏**: 比 Pauillac 版本略慢，強調「細膩、需要湊近看」的氛圍

---

## 🔧 技術實現要點

### 地圖功能展示
```javascript
// 1. 縮放至金丘核心（伯恩 Beaune 為地理中心參考點）
map.flyTo({
  center: [4.8393, 47.0206],
  zoom: 11,
  pitch: 45,
  duration: 2000
});

// 2. 高亮單一 AOC 邊界（示範：Chambertin）
map.setLayoutProperty('gevrey-chambertin-boundary', 'visibility', 'visible');

// 3. 啟用 3D 地形 + 等高線
map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 });
map.setLayoutProperty('contour-lines', 'visibility', 'visible');

// 4. 載入酒莊地塊圖層（Chambertin Grand Cru 範例）
const domaineFiles = await fetch(
  '/bourgogne/data/chambertin-domaines.json'
).then(r => r.json());

map.addSource('domaine-src', {
  type: 'geojson',
  data: `/bourgogne/geojson/Cote-de-Nuits/.../${domaineFiles[0]}`
});
map.addLayer({
  id: 'domaine-fill',
  type: 'fill',
  source: 'domaine-src',
  paint: { 'fill-color': '#FFD700', 'fill-opacity': 0.5 }
});
```

### 地質圖層設置
```javascript
// BRGM WMS 法國地質圖（見 useBRGMGeology.js）
const { toggleBRGM, updateBRGMClip } = useBRGMGeology('bourgogne')
toggleBRGM(map)
updateBRGMClip(map, chablisGeojson, 'Chablis_AOC')
// 點擊地圖 → GetFeatureInfo 查詢岩性 → 對應中文風土解說彈窗
```

---

## 📊 腳本效果預期

### 教育價值
- ✅ 釐清「布根地五大產區」的地理輪廓，破解「布根地=一個產區」的常見誤解
- ✅ 具體演繹 Climat（地塊）概念，這是布根地與波爾多最大的風土哲學差異
- ✅ 視覺化三種岩性（石灰岩／泥灰岩／花崗岩）如何對應三種產區風格
- ✅ 引導觀眾親手操作氣候熱力圖理解年份差異

### 技術展示
- ✅ 3D 互動地圖 + 等高線
- ✅ 地塊級（parcel-level）GeoJSON 圖層，精細度超越一般產區地圖
- ✅ BRGM 官方地質資料整合
- ✅ 近 40 年氣候資料視覺化

### 行銷目標
- ✅ 凸顯本平台在「精細地塊資料」上的獨特性（21 座特級/一級園已建置）
- ✅ 吸引進階葡萄酒愛好者與侍酒師考生
- ✅ 為後續「單一產區系列」（夏布利、夜丘、伯恩丘…）鋪路
- ✅ 提高 Level 3/4 高階課程轉換率

---

## 📝 備註事項

### 版權注意
- 金丘航拍與實景素材需獲得授權或使用 Creative Commons 素材
- 地圖資料來源：Mapbox, OpenStreetMap contributors
- 地質資料來源：BRGM Géologie（Etalab Open License），需標註出處
- 酒莊地塊資訊僅涵蓋目前已建置的 21 座特級/一級園，其餘（如 Clos des Mouches、Chambertin-Clos de Bèze、Corton Les Bressandes、Meursault Perrières）尚無地塊資料，腳本與素材皆不應暗示已涵蓋全產區

### 多語言版本
- 中文版（繁體）: 主要版本
- 英文版: 國際市場
- 日文版: 亞洲市場（可選，課程本身已有 zh-TW/en/ja 三語系）

### 發布渠道
- YouTube（完整版 120 秒）
- Instagram Reels（精簡版 60 秒，建議聚焦 Climat 地塊段落）
- Facebook（完整版 + 字幕）
- 官網首頁嵌入

---

## 🎯 成功指標

### 觀看數據
- 目標觀看次數: 10,000+（首月）
- 完播率: >55%（Climat 概念較抽象，預期略低於 Pauillac 版本）
- 互動率: >5%

### 轉換目標
- 網站訪問量提升: +25%
- Level 3/4 高階課程註冊量提升: +15%
- 分享次數: 400+

---

**製作日期**: 2026-08-09
**版本**: v1.0
**製作單位**: 侍酒師的筆記本團隊

---

## 💡 額外創意建議

### 進階版本擴充（系列短視頻）
1. Episode 1: Bourgogne 總覽（本腳本）
2. Episode 2: Chablis — 燧石與海洋
3. Episode 3: Côte de Nuits — 黑皮諾的殿堂
4. Episode 4: Côte de Beaune — 夏多內的聖地
5. Episode 5: Beaujolais — 花崗岩上的加美

### 互動功能
- 影片中標註可點擊熱點，對應網站地塊圖層
- 掃描 QR Code 直接進入對應 Level 課程模組

### 季節性版本
- **春季**: 葡萄萌芽、Côte d'Or 霜害預防（風扇/蠟燭）
- **夏季**: 轉色期、地塊排水差異視覺化
- **秋季**: 採收季，不同村莊採收時序差異
- **冬季**: 修剪、Climat 地塊間的休眠期地貌

---

**準備好拆解布根地最精密的風土地圖了嗎？Let's make it happen! 🍇**
