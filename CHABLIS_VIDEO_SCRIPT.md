# 🦪 夏布利產區短視頻教學腳本

## 影片資訊
- **系列**: 布根地單一產區系列 Episode 2（承接 BOURGOGNE_VIDEO_SCRIPT.md 總覽篇）
- **目標時長**: 90-110 秒
- **主題**: Chablis - 一億五千萬年前的海洋，長成今天的酸度
- **風格**: 冷冽、純淨、地質感強烈
- **目標受眾**: 葡萄酒愛好者、侍酒師學習者、夏多內愛好者

---

## 🎬 完整腳本分段

### 【開場：法國最北的布根地 0-15秒】

**視覺關鍵字**:
```
塞蘵河（Serein）河谷晨霧航拍, 葡萄園沿緩坡展開,
夜間蠟燭防霜畫面（冬季/晚春果園燭火點點）, 
冷色調轉場特效
```

**旁白文案**:
"這裡是布根地最北、也最冷的角落——夏布利。離巴黎只有 150 公里，近到春天一場霜凍就能讓整年收成歸零。也正是這份寒冷，造就了全世界最純淨銳利的夏多內。"

**字幕關鍵詞**:
```
Chablis | 布根地最北的白酒聖地 🦪
北緯 47.8° | 100% Chardonnay
```

---

### 【地圖定位：塞蘵河谷 15-30秒】

**視覺關鍵字**:
```
互動地圖啟動, 從布根地全境縮放至夏布利,
塞蘵河（Serein）河谷地形浮現,
Petit Chablis → Chablis → 1er Cru → Grand Cru
四層 AOC 邊界依序高亮（由外而內、由淺至深金色）
```

**操作示範**:
1. 點擊「AOC Chablis」圖層，村莊等級邊界亮起
2. 縮放至河谷北岸，Grand Cru 圖層疊加顯示
3. 地圖標註：巴黎 150 公里、TGV 1.5 小時車程

**旁白文案**:
"夏布利坐落在塞蘵河谷，河的兩岸溫度、坡向都不一樣——南面向陽的河岸，正是七座特級園所在之處。"

**字幕關鍵詞**:
```
📍 北緯 47.8°，塞蘵河谷
🚄 巴黎 1.5 小時車程
```

**資料來源**:
- `public/bourgogne/geojson/Chablis/AOC Chablis.geojson`、`AOC Petit Chablis.geojson`

---

### 【四級分級制度：一條河谷、四種身分 30-50秒】

**視覺關鍵字**:
```
分級金字塔動畫（由下而上）：
  Petit Chablis（最外圍台地）
  Chablis（河谷主體）
  Chablis Premier Cru（10 個命名 Climat，河南岸為主）
  Chablis Grand Cru（7 個特級園，唯一連續帶狀分布）
地圖對應四種顏色圖層疊加展示
```

**操作示範**:
1. 依序點亮四個等級圖層，觀察面積由大到小的金字塔結構
2. 點擊一級園區塊，10 個命名 Climat 逐一標註（Fourchaume、Vaucoupin、Mont de Milieu 等）
3. 點擊特級園區塊，7 個 Climat 一次全亮：Blanchot、Bougros、Grenouilles、Les Clos、Preuses、Valmur、Vaudésir

**旁白文案**:
"夏布利只有一個葡萄品種——夏多內，卻切出四種身分。從外圍的 Petit Chablis，到河谷主體的 Chablis，再到南岸的十座一級園，最後是唯一連成一片山坡的七座特級園。"

**字幕關鍵詞**:
```
🍇 唯一品種：Chardonnay
🏔️ 4 級制：Petit Chablis → Chablis → 1er Cru → Grand Cru
👑 7 大特級園：唯一連續帶狀分布
```

---

### 【Climat 巡禮：走進 Les Clos 60-80秒】

**視覺關鍵字**:
```
鏡頭聚焦 Les Clos（夏布利最大、最負盛名的特級園）,
點擊「顯示酒莊」，30 塊酒莊地塊逐一點亮（金色描邊）,
放大鏡效果：同一片山坡上 30 個家族並存,
酒莊資訊卡彈出示範
```

**操作示範**:
1. 進入 Chablis Grand Cru Les Clos，點擊「顯示酒莊」（🏰）
2. 30 個地塊逐一點亮（本平台目前地塊資料最完整的夏布利特級園）
3. 點擊任一地塊，彈出酒莊資訊卡
4. 快速帶過另外三座已建置地塊的特級園：Preuses（14 家）、Vaudésir（19 家）、Valmur（12 家）

**旁白文案**:
"Les Clos 是夏布利面積最大、名氣最響亮的特級園，山坡上同時住著 30 個釀酒家族。每一塊地，坡度差幾度、日照多幾小時，風格就完全不同。"

**字幕關鍵詞**:
```
🧩 Les Clos：30 個地塊並存
🏆 夏布利最大特級園
```

**資料來源**:
- `public/bourgogne/geojson/Chablis/Chablis Grand Cru/AOC Chablis Grand Cru Les Clos/`（30 個酒莊地塊檔案）
- 其餘已建置地塊層：Preuses（14）、Vaudésir（19）、Valmur（12）

---

### 【地質圖層：一億五千萬年前的海洋 80-100秒】

**視覺關鍵字**:
```
切換至地質圖層（BRGM 官方地質資料）,
啟莫里奇石灰岩（Kimmeridgian）色塊覆蓋七座特級園,
牡蠣化石特寫動畫（Exogyra virgula 螺旋牡蠣化石）,
土層剖面：表土 → 石灰岩 → 化石層
```

**操作示範**:
1. 開啟「地質圖層」，透明度滑桿示範
2. 點擊特級園區域，彈窗顯示「啟莫里奇石灰岩」中文解說
3. 化石特寫疊圖：說明此地曾是侏羅紀淺海

**旁白文案**:
"一億五千萬年前，這裡還是一片淺海。海底堆積的牡蠣與貝殼，如今變成了啟莫里奇石灰岩——夏多內的根系穿過這層化石岩床，喝進了海洋留下的礦物與鹹鮮。這就是夏布利招牌的『燧石感』從何而來。"

**字幕關鍵詞**:
```
🦪 啟莫里奇石灰岩（Kimmeridgian）
🐚 侏羅紀海洋化石層
⚡ 燧石感 + 海鹽感的由來
```

**技術提示**:
- 資料來源：BRGM 法國地質調查局 WMS/WFS（`LITHO_1M_SIMPLIFIEE`, Etalab Open License）
- 中文解說：`useBRGMGeology.js` `REGION_DESCR_OVERRIDE.bourgogne['石灰岩']`

---

### 【結尾：行動呼籲 100-110秒】

**視覺關鍵字**:
```
回到地圖全景, 夏布利河谷在夕陽下顯現,
網站介面浮現, 課程卡片「夏布利深入探索」展開,
Logo 淡入：「侍酒師的筆記本」
```

**旁白文案**:
"從四級分級到七大特級園地塊，從防霜蠟燭到一億五千萬年前的化石岩床——用『侍酒師的筆記本』，讀懂夏布利最純淨的酸度是怎麼長出來的。"

**字幕關鍵詞**:
```
🎓 課程：夏布利深入探索（Level 1・Module 5）
🗺️ 4 座特級園地塊實測：Les Clos / Preuses / Vaudésir / Valmur
🦪 地質 × 分級 × 地塊 三重解析

👉 sommeliernotes.com
```

---

## 📋 拍攝清單 Checklist

### 螢幕錄製部分
- [ ] 地圖從布根地縮放至夏布利，塞蘵河谷浮現
- [ ] 四級分級圖層依序疊加（Petit Chablis → Chablis → 1er Cru → Grand Cru）
- [ ] 一級園 10 個命名 Climat 標註展示
- [ ] 特級園 7 個 Climat 全亮展示
- [ ] Les Clos「顯示酒莊」地塊圖層展開（30 塊）
- [ ] 酒莊地塊點擊彈出資訊卡
- [ ] Preuses / Vaudésir / Valmur 地塊層快速帶過
- [ ] 地質圖層切換與透明度調整
- [ ] 岩性點擊彈窗展示

### 實拍/素材部分
- [ ] 塞蘵河谷晨霧空拍
- [ ] 春季防霜蠟燭/風扇夜景（極具視覺張力，建議作為開場或轉場亮點）
- [ ] 啟莫里奇石灰岩土壤近拍
- [ ] 牡蠣化石（Exogyra virgula）標本或插畫素材
- [ ] 夏布利瓶型（勃根地瓶）與酒標特寫
- [ ] 冷藏/侍酒溫度展示（夏布利適飲溫度 10-12°C）

### 圖形動畫部分
- [ ] 四級分級金字塔動畫
- [ ] 七大特級園地圖標註動畫
- [ ] 侏羅紀海洋 → 石灰岩沉積過程示意動畫
- [ ] 關鍵字浮現動畫

---

## 🎨 視覺風格指南

### 色彩方案（延續布根地總覽篇的夏布利強調色，並展開為獨立主色調）
- **主色調**: 冷冽藍灰 `#7A93A0`、啟莫里奇石灰岩白 `#EDE6D6`
- **輔助色**: 化石牡蠣灰 `#B9BCB0`、深海藍 `#2E4457`
- **強調色**: 燭光暖橘 `#E8A33D`（防霜蠟燭段落專用，與整體冷色調形成戲劇性對比）

### 字體與節奏
- 標題／正文延續布根地總覽篇規範（Playfair Display + Inter／思源字體）
- 整體節奏比總覽篇更「冷靜克制」，地質段落可放慢至 0.8x 速度強調化石細節

---

## 🔧 技術實現要點

```javascript
// 縮放至夏布利核心
map.flyTo({
  center: [3.8002, 47.8166], // AOC Chablis centroid
  zoom: 12,
  pitch: 40,
  duration: 2000
});

// 載入 Les Clos 酒莊地塊圖層
const domaineFiles = await fetch(
  '/bourgogne/data/les-clos-domaines.json'
).then(r => r.json()); // 30 筆

map.addSource('domaine-src', {
  type: 'geojson',
  data: `/bourgogne/geojson/Chablis/Chablis Grand Cru/AOC Chablis Grand Cru Les Clos/${domaineFiles[0]}`
});
map.addLayer({
  id: 'domaine-fill',
  type: 'fill',
  source: 'domaine-src',
  paint: { 'fill-color': '#FFD700', 'fill-opacity': 0.5 }
});

// BRGM 地質圖層
const { toggleBRGM, updateBRGMClip } = useBRGMGeology('bourgogne')
toggleBRGM(map)
updateBRGMClip(map, chablisGrandCruGeojson, 'Chablis Grand Cru')
```

---

## 📝 備註事項（重要，務必核對）

### 資料涵蓋範圍的誠實揭露
- **7 座特級園**皆有邊界 geojson（Blanchot、Bougros、Grenouilles、Les Clos、Preuses、Valmur、Vaudésir），但**只有 4 座**（Les Clos、Preuses、Valmur、Vaudésir）有「顯示酒莊」地塊層資料。Blanchot、Bougros、Grenouilles **目前只有邊界、沒有酒莊地塊**，腳本與畫面不應暗示這三座也能點開酒莊地塊。
- **10 座一級園**（Fourchaume、Vaucoupin、Mont de Milieu 等）皆為**邊界圖層**，沒有酒莊地塊資料——不要在畫面中示範點擊一級園叫出酒莊地塊。
- **⚠️ 氣候熱力圖目前不可用於本集**：`bourgogne-climate.json` 雖然有 `AOC Chablis` / `AOC Petit Chablis` 兩筆條目，但氣溫/日照/降雨數值全部是 `null`（資料結構存在、內容未填），與布根地總覽篇金丘段落能正常顯示的狀況不同。**本集腳本刻意不使用氣候熱力圖橋段**，待資料補齊後再製作對應段落。
- 酒莊資訊卡（成立年份、面積、風格特色）目前僅 Preuses 有完整的 `preuses-domaines-info.json`；Les Clos/Vaudésir/Valmur 的地塊層只有酒莊名稱（來自檔名），沒有額外資訊卡欄位。若要在 Les Clos 段落示範「點擊彈出資訊卡」，需先確認實際畫面是否有資訊卡內容，或改為僅展示地塊輪廓與名稱。

### 版權注意
- 化石標本圖片需確認授權來源（博物館/開放素材庫），或改用插畫示意
- 地質資料來源：BRGM Géologie（Etalab Open License）

---

## 🎯 成功指標

- 完播率: >55%
- 分享次數: 300+（地質/化石題材具科普傳播潛力，可望在知識型社群獲得額外曝光）

---

**製作日期**: 2026-08-10
**版本**: v1.0（布根地系列 Episode 2）
**製作單位**: 侍酒師的筆記本團隊

---

**準備好潛入一億五千萬年前的海洋了嗎？Let's make it happen! 🦪**
