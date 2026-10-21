# 👑 Piemonte 皮埃蒙特短視頻教學腳本

## 影片資訊
- **系列**: 義大利單一產區系列 Episode 2（承接總覽篇）
- **目標時長**: 105-115 秒
- **主題**: Piemonte——Barolo 與 Barbaresco，同一品種的兩種靈魂
- **風格**: 沉穩有層次，用「地圖 → 地質 → 數據」逐步揭曉兩者差異
- **目標受眾**: 想認識義大利頂級紅酒的愛好者、WSET Diploma 備考者
- **對應課程**: Level 1 · Module 2 · Lesson 1（L1M2L1 Piemonte 皮埃蒙特 - 義大利之王）

---

## ⚠️ 製作前必讀

1. **本集沒有酒莊地塊層**。義大利整體沒有「顯示酒莊」功能，畫面以 DOCG 邊界、ISPRA 地質、氣候熱力圖為主。
2. **課程內部有三處說法互相矛盾**，旁白已刻意避開，請勿自行補回（詳見文末「備註」）：
   - Barbaresco 比 Barolo「較涼爽」還是「略溫暖」
   - Barbaresco 土壤是「石灰岩砂質」還是「Tortonian 鈣質泥灰岩」
   - Barolo 的 Tortonian 土壤是「力量型的來源」還是「更優雅」的產區
3. 氣候數據可放心使用：Barolo 與 Barbaresco 在 `italy-climate.json` 中 1980–2024 全年份皆有值。

---

## 🎬 完整腳本分段

### 【開場：十六公里的差距 0-12秒】

**視覺關鍵字**:
```
Piemonte 輪廓從義大利地圖推近, 兩個 DOCG 邊界並排亮起：Barolo／Barbaresco,
中間浮現一條虛線與「16 km」, 兩支酒標左右分屏（Barolo／Barbaresco）
```

**旁白文案**（約 50 字）:
"同一個品種，相距只有十六公里。一個被稱為酒中之王，一個被叫做酒中之后。Barolo 與 Barbaresco，到底差在哪？"

**字幕關鍵詞**:
```
👑 Barolo vs 🌸 Barbaresco
100% Nebbiolo ｜ 相距約 16 km
```

**資料來源**: `L1M2L1`（對照投影片 intro：相距 16 km）

---

### 【定位：山腳下的九大 DOCG 12-35秒】

**視覺關鍵字**:
```
Piemonte 地圖, 三環帶示意（山地 43%／丘陵 30%／平原 27%）,
9 個 DOCG 邊界依序亮起：Barolo → Barbaresco → Barbera d'Asti → Gavi → Roero → Dogliani → Gattinara → Ghemme → Moscato d'Asti,
點開 Barolo、Barbaresco 時播放發音檔
```

**操作示範**:
1. 載入 Piemonte 大區地圖，疊上三環帶示意
2. 依 L1M2L1 的「9 大 DOCG 互動地圖」順序逐一高亮
3. 點選 Barolo、Barbaresco，播放產區發音（`public/italy/regions/piedmont/sounds/Barolo.mp3`、`Barbaresco.mp3`）

**旁白文案**（約 105 字）:
"皮埃蒙特，意思是『山腳下』，三面環山。山地佔四成三，丘陵佔三成，平原只有兩成七——葡萄園，幾乎都在丘陵上。地圖上九個重要的 DOCG，各有主角，而最耀眼的兩個，都在朗格丘陵：Barolo，與 Barbaresco。"

**字幕關鍵詞**:
```
⛰️ 山地 43%｜🌄 丘陵 30%｜🌾 平原 27%
🗺️ 9 大 DOCG
📍 Barolo 與 Barbaresco：朗格（Langhe）丘陵
```

**資料來源**: `L1M2L1`（地形比例；9 大 DOCG 清單）
**素材注意**: Moscato d'Asti 在課程 `docgList` 中沒有獨立的 `geojsonPath`，畫面改用 `Asti DOCG.geojson` 邊界，字幕仍標 Moscato d'Asti。

---

### 【風土：秋霧與兩種土壤 35-60秒】

**視覺關鍵字**:
```
秋日丘陵霧氣空拍或動態素材, 「Nebbia = 霧」大字轉場成「Nebbiolo」,
切入 ISPRA 地質圖層（Barolo 周邊）, 以兩色標示 Barolo 西側與東側地質,
字卡：La Morra／Barolo → Tortonian 泥灰；Serralunga／Monforte → Helvetian 砂質
```

**操作示範**:
1. 在 Piemonte 地圖開啟「ISPRA 地質」圖層
2. 放大到 Barolo DOCG，指出西側（La Morra、Barolo 村）與東側（Serralunga、Monforte）的地質色塊差異
3. 疊上村莊名稱標籤

**旁白文案**（約 105 字）:
"Nebbiolo 來自義大利文的『霧』，秋霧讓它成為最晚採收的品種之一，高單寧、高酸度。Barolo 內部還分兩種風土：西邊 La Morra 與 Barolo 村是 Tortonian 泥灰，較優雅；東邊 Serralunga 與 Monforte 是 Helvetian 砂質，更強勁。"

**字幕關鍵詞**:
```
🌫️ Nebbia（霧）→ Nebbiolo
🪨 西：Tortonian 泥灰｜東：Helvetian 砂質
```

**資料來源**: `L1M2L1`（Nebbiolo 名稱由來；Barolo 土壤與風格說明，取自對照投影片與 9 大 DOCG 地圖說明，二者一致）

---

### 【對決：三個數字看懂差異 60-90秒】

**視覺關鍵字**:
```
分屏對照表（Barolo 左／Barbaresco 右）逐列揭示：
 面積 約 1,300 公頃 ｜ 約 700 公頃
 範圍 11 個市鎮 ｜ 4 個市鎮
 法定陳年 38 個月（含 18 個月木桶） ｜ 26 個月（含 9 個月木桶）
 Riserva 62 個月 ｜ 50 個月
 風格 力量型 ｜ 優雅型
月份條形圖動畫：38 vs 26, 差距 12 個月高亮
```

**操作示範**:
1. 開啟 L1M2L1 的「Barolo vs Barbaresco 互動比較」投影片
2. 由上而下逐列點開，每列停約 3 秒
3. 最後停在 keyDifference 區塊（12 個月差距）

**旁白文案**（約 125 字）:
"第一，規模：Barolo 約一千三百公頃、十一個市鎮；Barbaresco 約七百公頃、四個市鎮。第二，陳年：Barolo 至少三十八個月，木桶十八個月；Barbaresco 二十六個月，木桶九個月。Riserva 是六十二個月，對五十個月。第三，風格：Barolo 強勁，要等十年以上；Barbaresco 優雅，可以早一點開。"

**字幕關鍵詞**:
```
📏 1,300 ha vs 700 ha｜11 vs 4 個市鎮
⏳ 38 個月 vs 26 個月（差 12 個月）
🏷️ Riserva：62 vs 50 個月
💪 力量型 vs 🌸 優雅型
```

**資料來源**: `L1M2L1` docgList 與 appellation-comparison（面積、市鎮數、陳年法規、Riserva、風格）

---

### 【氣候：同樣的夏天，不同的年份 90-105秒】

**視覺關鍵字**:
```
氣候熱力圖啟動, Barolo／Barbaresco 兩個產區同時顯示,
年份滑桿拖曳至 2003：色塊轉為深紅, 數字 25.6°C 對比基準線 21.8°C,
再拖至 2010：色塊轉淺, 21.9°C, Golden Vintage 徽章彈出
```

**操作示範**:
1. 開啟氣候圖層，選「氣溫」指標，點選 Barolo DOCG
2. 滑桿停在 2003，讀數：夏季均溫 25.63°C（基準 21.81°C）
3. 滑桿停在 2010，讀數 21.89°C，徽章彈出（Piemonte 黃金年份集合含 2010）
4. 補一眼 Barbaresco，說明兩者趨勢一致

**旁白文案**（約 70 字）:
"再看氣候。二〇〇三年夏天，Barolo 均溫二十五點六度，比基準高近四度，是公認的過熱年份；二〇一〇年只有二十一點九度，是黃金年份。年份，決定酒的性格。"

**字幕關鍵詞**:
```
🔥 2003：25.6°C（基準 21.8°C，+3.8°C）
⭐ 2010：21.9°C — Golden Vintage
```

**資料來源**: `public/data/italy-climate.json`（`aocs['Barolo DOCG']`：2003 = 25.63、2010 = 21.89、baseline = 21.81）；黃金年份集合：`ItalyMapSection.vue` 的 `GOLDEN_VINTAGES_BY_REGION.piedmont`（含 2010）

**備註**: 旁白不要說 Barbaresco 比較涼或比較暖——近十年兩者均溫同為 23.4°C，課程文字則互相矛盾。

---

### 【結尾：行動呼籲 105-115秒】

**視覺關鍵字**:
```
回到九個 DOCG 全景, Barbera d'Asti／Gavi／Moscato d'Asti 稍微閃爍作為下一步線索,
網站介面浮現, 課程卡片「Piemonte 皮埃蒙特 - 義大利之王」展開,
Logo 淡入：「侍酒師的筆記本」
```

**旁白文案**（約 55 字）:
"王與后，一個靠力量，一個靠優雅。想把九個 DOCG 全部讀懂，到『侍酒師的筆記本』，從地圖、地質到測驗，一次學完。"

**字幕關鍵詞**:
```
🎓 課程：Piemonte 皮埃蒙特（含 9 大 DOCG 互動地圖、Barolo vs Barbaresco 比較、測驗）
👉 wineacademy.vercel.app
```

---

## 📋 拍攝清單 Checklist

### 螢幕錄製部分
- [ ] Piemonte 大區地圖載入、三環帶示意
- [ ] 9 大 DOCG 依序亮起（Barolo → Barbaresco → Barbera d'Asti → Gavi → Roero → Dogliani → Gattinara → Ghemme → Moscato d'Asti）
- [ ] 點 Barolo／Barbaresco 播放發音檔（錄下音訊或後製補上）
- [ ] ISPRA 地質圖層：Barolo 西側／東側色塊
- [ ] 「Barolo vs Barbaresco」互動比較逐列展開
- [ ] 氣候圖層：滑桿 2003 → 2010，Golden Vintage 徽章
- [ ] 課程卡片展開

### 實拍／素材部分
- [ ] 朗格丘陵秋霧鏡頭（Nebbia）
- [ ] Barolo、Barbaresco 酒標特寫（課程已有兩張：`barolo-parusso-2010.jpg`、`barbaresco-gaja-2004.jpg`，使用前確認授權）
- [ ] 白松露燉飯或 Brasato 配餐鏡頭（可選，作為收尾轉場）

### 圖形動畫部分
- [ ] 38 vs 26 個月條形圖（12 個月差距高亮）
- [ ] 2003 vs 基準氣溫對比字卡
- [ ] 地形三環帶示意

**注意**: 不要安排「顯示酒莊」操作；不要在字幕暗示可查詢單一酒莊地塊。

---

## 🎨 視覺風格指南
- **主色調**: Barolo 深酒紅 `#7B1F2A`、Barbaresco 玫瑰紅 `#A8324A`（與課程互動比較投影片一致）
- **輔助色**: 秋霧灰 `#CFCFC8`、象牙白 `#F4EFE6`
- **強調色**: 金 `#C9A227`（Golden Vintage、DOCG 封條）
- **節奏**: 前半以地圖與地質建立背景，中段「三個數字」加快、乾脆，氣候段放慢作為情緒高點

---

## 🔧 技術實現要點

```javascript
// Piemonte 全景
map.flyTo({ center: [7.95, 44.65], zoom: 9.5, pitch: 20, duration: 2000 });

// 9 大 DOCG 邊界（路徑取自 L1M2L1 docgList；Moscato d'Asti 改用 Asti DOCG）
const docgs = [
  'Barolo DOCG', 'Barbaresco DOCG', "Barbera d'Asti DOCG",
  'Cortese di Gavi Gavi DOCG', 'Roero DOCG', 'Dogliani DOCG',
  'Gattinara DOCG', 'Ghemme DOCG', 'Asti DOCG'
];
// 路徑：/italy/regions/piedmont/geojson/DOCG/<name>.geojson

// 聚焦 Barolo
map.flyTo({ center: [7.923, 44.61], zoom: 12 });

// 氣候：italy-climate.json → aocs['Barolo DOCG'].temps[年份索引]
// 年份索引 = year - 1980；2003 → 23，2010 → 30
```

---

## 📝 備註事項（務必核對）

### 課程內部三處矛盾（旁白已避開，建議之後修課程）
1. **氣候**：L1M2L1 第 7 張投影片說 Barbaresco「較涼爽」，互動比較投影片卻說「較 Barolo 略溫暖」。氣候資料顯示 1980–89 年 Barolo 21.0°C、Barbaresco 20.6°C，近十年（2015–24）兩者同為 23.4°C，沒有穩定差異。
2. **Barbaresco 土壤**：第 7 張寫「石灰岩砂質為主」，互動比較寫「Tortonian 鈣質泥灰岩」。
3. **Barolo Tortonian 土壤的性格**：第 7 張寫 Tortoniano 重黏土是「力量型風格的來源」，9 大 DOCG 地圖說明與互動比較卻說 La Morra 一帶的 Tortonian 風格「更優雅芬芳」，Serralunga 的 Helvetian 砂質「更強勁」。本腳本採後兩處（彼此一致，且符合一般教材說法）。

### 數字口徑
- Barolo 約 1,300 公頃、Barbaresco 約 700 公頃、38／26 個月與 Riserva 62／50 個月皆取自課程 JSON。
- 課程另有「Barolo 181 個 MGA、Barbaresco 66 個 MGA」，本集未使用，避免資訊過載；可留給 C1「Barolo vs Barbaresco」主題篇。
- 「公認過熱年份」依據為 `ItalyMapSection.vue` 內對 2003 年的註解與氣候數據（高於基準近 4°C），拍攝時請維持這個說法，不要延伸成對特定酒款品質的判斷。

### 版權注意
- 地圖資料：Mapbox, OpenStreetMap contributors；地質：ISPRA SGI (CC-BY 4.0)；氣候：Open-Meteo Historical Weather API。
- 酒標照片使用前確認授權，或以截圖自課程投影片並標註來源。

---

## 🎯 成功指標
- 完播率 >50%
- 觀看後前往 Level 1 Piemonte 課程的點擊率
- 與總覽篇的連續觀看率

---

**製作日期**: 2026-10-21
**版本**: v1.0（義大利系列 Episode 2）
**製作單位**: 侍酒師的筆記本團隊
