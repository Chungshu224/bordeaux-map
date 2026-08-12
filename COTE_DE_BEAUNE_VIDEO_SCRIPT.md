# 🥂 伯恩丘產區短視頻教學腳本（v2.0・十八村巡禮版）

## 影片資訊
- **系列**: 布根地單一產區系列 Episode 4（承接 BOURGOGNE_VIDEO_SCRIPT.md 總覽篇、CHABLIS_VIDEO_SCRIPT.md、COTE_DE_NUITS_VIDEO_SCRIPT.md v2.0）
- **目標時長**: 220-250 秒（18 村莊，比夜丘 v2.0 更長；11 村有完整介紹、7 村因平台目前無專屬文字改採「並列快閃」處理）
- **主題**: Côte de Beaune - 18 個村莊，紅白並存，夏多內的世界之巔
- **風格**: 明亮、精緻，逐村建立個性，紅酒村與白酒村用色調區隔
- **目標受眾**: 葡萄酒愛好者、侍酒師學習者、白酒愛好者
- **模組化提示**: 沿用夜丘 v2.0 的做法，每村（或每組）段落可獨立成短片；11 個「完整介紹村」特別適合單獨剪成 Reels

---

## ⚠️ v2.0 改版重點與資料誠實度說明

v1.0 把「18 村莊長廊」和「特級園巡禮」拆成兩段快速掃過，村莊本身沒有個性。這版比照夜丘 v2.0，**把村莊風格與特級/一級園介紹合併，逐村講**。

但伯恩丘和夜丘不一樣：查證平台課程內容（`beginner-m4.json`／`intermediate-m2.json`）後發現，**18 村之中只有 11 村有平台自己寫好的風格描述文字**，另外 7 村（Pernand-Vergelesses、Ladoix、Savigny-lès-Beaune、Chorey-lès-Beaune、Monthélie、Blagny、Maranges）目前只有地圖上的名字，沒有風格敘述。這版**不會為這 7 村捏造風格形容詞**，而是把它們處理成「同丘共享」或「快閃並列」的過場段落，只講事實（地理位置、隸屬關係、法規身分），不臆測風味。

---

## 🎬 完整腳本分段

### 【開場：紅白並存的產區 0-14秒】

**視覺關鍵字**:
```
伯恩丘（Côte de Beaune）南段山坡空拍,
北段 Corton 紅土丘特寫 → 南段 Montrachet 白堊坡地轉場,
明亮暖色調轉場特效
```

**旁白文案**:
"夜丘幾乎只釀紅酒，但再往南走，伯恩丘卻紅白並存——18 個村莊，從北邊唯一雙棲的 Corton，一路走到南邊夏多內公認的世界之巔。一村一村，走過去看。"

**字幕關鍵詞**:
```
Côte de Beaune | 紅白並存的產區 🥂
18 大村莊，布根地最長的一段山坡
```

---

### 【村莊 1-3：Pernand-Vergelesses・Ladoix・Aloxe-Corton — 同丘紅白雙棲 14-32秒】

**視覺關鍵字**:
```
北段三村同框空拍（同一座 Corton 山丘）,
Corton Grand Cru（紅）與 Corton-Charlemagne（白）分色標註,
點擊「顯示酒莊」：Corton Grand Cru（Aloxe 側）地塊圖層展開（22 塊）,
Ladoix 小標籤浮現：「氣候資料全平台最完整的村莊」
```

**操作示範**:
1. 地圖同時圈出 Pernand-Vergelesses、Ladoix、Aloxe-Corton 三村邊界，說明三村共享同一座 Corton 山丘
2. 標註查理曼大帝曾擁有此地葡萄園的歷史彩蛋
3. 點擊 Corton Grand Cru（Aloxe 側），「顯示酒莊」，22 個酒莊地塊點亮
4. 小彩蛋字卡：Ladoix 是全平台 18 村裡唯一氣候資料（均溫／日照／降雨）齊全的一村

**旁白文案**:
"Pernand-Vergelesses、Ladoix、Aloxe-Corton，三個村莊共享同一座山丘——Corton 釀紅酒，強勁有力；Corton-Charlemagne 釀白酒，礦物感強、優雅複雜。這是金丘唯一的紅白雙棲特級園。Pernand 和 Ladoix 名氣不如 Aloxe，但 Ladoix 有個小彩蛋：它是我們資料庫裡，氣候紀錄最完整的一個村莊。"

**字幕關鍵詞**:
```
👑 同丘雙棲：Corton（紅）／Corton-Charlemagne（白）
🏛️ 查理曼大帝曾擁有此地葡萄園
🌡️ Ladoix：全村氣候資料最完整的彩蛋村莊
```

**資料來源**:
- `beginner-m4.json`：「伯恩丘唯一同時擁有紅白特級園的村莊」「查理曼大帝曾擁有此地葡萄園」
- ✅「顯示酒莊」地塊層：`Corton Grand Cru`（Aloxe 側，22 個酒莊地塊）
- ⚠️ Pernand-Vergelesses、Ladoix 兩村平台目前**沒有獨立風格文字**，本段刻意只講兩村與 Corton 山丘的地理/歷史關係，不描述風味
- 🌡️ `bourgogne-climate.json`：18 村中僅 `AOC Ladoix Village` 有真實數值（均溫 19.2°C、日照 626.48 小時、降雨 181.11mm）

---

### 【村莊 4-5：Savigny-lès-Beaune・Chorey-lès-Beaune — 快閃過場 32-40秒】

**視覺關鍵字**:
```
兩村邊界快速帶過, Beaune 城鎮輪廓浮現在畫面邊緣（地理定位用）
```

**操作示範**:
1. 地圖快速掃過 Savigny-lès-Beaune、Chorey-lès-Beaune 邊界，標註「Beaune 近郊村莊」
2. 不停留，直接轉場至 Beaune

**旁白文案**:
"再往南，Savigny-lès-Beaune 與 Chorey-lès-Beaune，是伯恩鎮周邊的兩個小村——地圖上找得到，故事留給下一站。"

**字幕關鍵詞**:
```
📍 Beaune 近郊兩村，快閃通過
```

**資料來源**:
- ⚠️ 平台目前對這兩村**完全沒有風格描述文字**，僅作地圖圖層存在。本段刻意設計為 6-8 秒的快閃過場，不編造風味或特色，誠實反映資料現況

---

### 【村莊 6：Beaune — 伯恩丘的心臟，性價比之王 40-56秒】

**視覺關鍵字**:
```
伯恩鎮空拍（歷史城牆、彩色琉璃瓦屋頂 Hospices de Beaune 意象）,
42 座一級園邊界密集疊圖, 「面積伯恩丘最大」數字動畫（400+ 公頃）
```

**操作示範**:
1. 地圖定位 Beaune，42 座一級園邊界疊圖展示（全布根地一級園面積最大的村莊）
2. 標註 Hospices de Beaune 慈善拍賣會的歷史地標
3. 標註「目前無酒莊地塊層可查」

**旁白文案**:
"Beaune 是伯恩丘的心臟，也是整個布根地面積最大的一級園村莊——42 座一級園，紅酒為主，優雅易飲，果味純淨。這裡是性價比之王，也是每年 Hospices de Beaune 慈善拍賣會的舞台。"

**字幕關鍵詞**:
```
🏛️ 400+ 公頃，布根地一級園面積最大村莊
🍷 42 座一級園，性價比之王
```

**資料來源**:
- `beginner-m4.json`：「伯恩丘最大村莊，42個一級園數量驚人，性價比極高的日常飲用之選」「Hospices de Beaune 慈善拍賣會」
- ⚠️ Beaune 本身**沒有**「顯示酒莊」地塊層——雖是地理與歷史中心，鏡頭不要停在這裡示範點地塊（呼應 v1.0 已標註的 Beaune Clos des Mouches 只有邊界、無地塊子資料夾）

---

### 【村莊 7：Pommard — 男性化紅酒代表 56-72秒】

**視覺關鍵字**:
```
深色調轉場（黑色水果、皮革、香料意象）,
點擊「顯示酒莊」：4 座一級園地塊層依序切換
  Les Rugiens Hauts（17）／Les Rugiens Bas（15）／
  Les Grands Epenots（10）／Les Petits Epenots（13）
累計數字：Pommard 單村合計 55 個酒莊地塊，全系列單村最多
```

**操作示範**:
1. 地圖定位 Pommard，標註「只產紅酒，無特級園」
2. 依序點擊四座一級園，「顯示酒莊」地塊圖層切換展示
3. 畫面角落數字累加至「55」

**旁白文案**:
"Pommard 只產紅酒，強勁、男性化，單寧厚實、結構緊繃，還帶點野味香氣。沒有特級園，但光是四座一級園，我們就實測了 55 個酒莊地塊——這是整個系列裡，單一村莊資料量最大的一站。"

**字幕關鍵詞**:
```
💪 只產紅酒，強勁男性化風格
🧩 4 座一級園，合計 55 個酒莊地塊（單村最多）
```

**資料來源**:
- `beginner-m4.json`／`intermediate-m2.json`：「以強勁、男性化的風格著稱」「單寧厚實、結構強勁、野味香氣」
- ✅「顯示酒莊」地塊層：Les Rugiens Hauts(17)、Les Rugiens Bas(15)、Les Grands Epenots(10)、Les Petits Epenots(13)

---

### 【村莊 8：Volnay — 紅酒中的女性 72-86秒】

**視覺關鍵字**:
```
柔和轉場（紫羅蘭、櫻桃、草莓意象，與 Pommard 深色調形成對比）,
點擊「顯示酒莊」：1er Cru Les Caillerets 地塊圖層展開（23 塊）
```

**操作示範**:
1. 地圖定位 Volnay，與 Pommard 並列對比（風格相反的鄰居）
2. 點擊 1er Cru Les Caillerets，「顯示酒莊」，23 個酒莊地塊點亮

**旁白文案**:
"隔壁的 Volnay，風格完全相反——絲滑細膩、花香四溢，被稱為『紅酒中的女性』。同樣沒有特級園，Les Caillerets 一級園裡，23 個酒莊各自守著自己的絲綢質地。"

**字幕關鍵詞**:
```
🌸 絲滑細膩，「紅酒中的女性」
🧩 Les Caillerets：23 個酒莊地塊
```

**資料來源**:
- `beginner-m4.json`：「風格與 Pommard 截然相反，以絲滑細膩、花香四溢聞名，被稱為『紅酒中的女性』」
- ✅「顯示酒莊」地塊層：`1er Cru Les Caillerets`（23）

---

### 【村莊 9-10：Monthélie・Saint-Romain — 性價比雙生村 86-98秒】

**視覺關鍵字**:
```
兩村並列標註, 價格標籤意象（€15-30，明顯低於鄰近名村）,
清爽柑橘／檸檬色調轉場
```

**操作示範**:
1. 地圖定位 Saint-Romain（西側山谷、海拔較高），Monthélie 並列標註
2. 標註「平台歸類為伯恩丘性價比村莊」

**旁白文案**:
"Monthélie 和 Saint-Romain，知名度比不上 Pommard 或 Volnay，價格卻親民得多。Saint-Romain 地勢較高，白酒清爽礦物、帶檸檬柑橘調，紅酒果味純淨、單寧柔和——是道地布根地風格的入門好選擇。"

**字幕關鍵詞**:
```
💰 性價比村莊：€15-30
🍋 Saint-Romain：清爽礦物、檸檬柑橘
```

**資料來源**:
- `intermediate-m2.json`：「Monthélie 和 Saint-Romain 屬於伯恩丘的『性價比村莊』，知名度不如 Pommard 或 Volnay」
- `beginner-m4.json`（Saint-Romain）：「白酒：清爽礦物、檸檬柑橘、酸度活潑…價格：€15-30（極具性價比）」
- ⚠️ Monthélie 本身無獨立風格文字，僅有與 Saint-Romain 並列的這段描述，本段依此如實處理為雙生村，不單獨為 Monthélie 編寫風味形容

---

### 【村莊 11：Auxey-Duresses — Meursault 的替代品 98-108秒】

**視覺關鍵字**:
```
與 Meursault 疊圖對比（風土相似、價格減半意象）,
奶油榛果色調延續
```

**操作示範**:
1. 地圖定位 Auxey-Duresses（Meursault 西側）
2. 疊圖標註與 Meursault 的地理相鄰關係與價差

**旁白文案**:
"Auxey-Duresses 就在 Meursault 西側，風土相似，白酒一樣有奶油榛果香、圓潤飽滿——但價格只要 Meursault 的一半，是預算有限、又想嘗鮮的最佳替代品。"

**字幕關鍵詞**:
```
🥐 「Meursault 的替代品」
💰 價格僅 Meursault 一半
```

**資料來源**:
- `beginner-m4.json`：「Auxey-Duresses（歐塞迪雷斯）- Meursault 的替代品」「白酒：奶油榛果香氣、圓潤飽滿，接近 Meursault 風格」

---

### 【村莊 12：Meursault — 布根地最大白酒村 108-124秒】

**視覺關鍵字**:
```
金黃色調轉場（陳年白酒色澤）, 
點擊「顯示酒莊」：1er Cru Genevrières 地塊圖層展開（27 塊）,
與 Puligny-Montrachet 風格對比表浮現（圓潤 vs 精緻）
```

**操作示範**:
1. 地圖定位 Meursault，標註「無特級園，但一級園品質極高」
2. 點擊 1er Cru Genevrières，「顯示酒莊」，27 個酒莊地塊點亮
3. 彈出 Meursault vs Puligny-Montrachet 風格對比小卡

**旁白文案**:
"Meursault 是伯恩丘最大的白酒村莊，深金黃色澤，奶油、榛果、烤杏仁香氣，口感豐滿圓潤——是『黃金布根地』的代表。27 個酒莊，在 Genevrières 一級園裡各自詮釋這份圓潤。"

**字幕關鍵詞**:
```
🥇 伯恩丘最大白酒村，「黃金布根地」代表
🧩 Genevrières：27 個酒莊地塊
```

**資料來源**:
- `intermediate-m2.json`：「梅索雖然沒有特級園，但擁有眾多頂級一級園…以奶油般的質地、榛果香氣與豐滿口感著稱」
- ✅「顯示酒莊」地塊層：`1er Cru Genevrières`（27）
- 地質引用：`useBRGMGeology.js` `REGION_DESCR_OVERRIDE.bourgogne['黏土']`：「Meursault 部分 Premier Cru…夏多內則展現奶油與榛果風味」

---

### 【村莊 13：Blagny — 一座山坡，兩個身分 124-132秒】

**視覺關鍵字**:
```
Meursault／Puligny-Montrachet 交界處地圖標註,
「同一塊地，兩種酒標」示意（依品種決定掛哪個 AOC 名字）
```

**操作示範**:
1. 地圖定位 Blagny（Meursault 與 Puligny-Montrachet 交界的小聚落）
2. 標註其特殊身分：紅酒掛 Blagny 之名、白酒則掛 Meursault 或 Puligny-Montrachet 之名

**旁白文案**:
"Blagny 很小，小到它自己沒有明確的風格標籤——它是 Meursault 與 Puligny-Montrachet 交界的一個聚落，同一塊地，紅酒用 Blagny 掛牌，白酒卻要借用鄰居的名字。"

**字幕關鍵詞**:
```
🗺️ Meursault／Puligny 交界的特殊聚落
```

**資料來源**:
- `beginner-m4.json`：Blagny 僅以「Meursault 一級園上段地塊」的身分出現在資料中
- ⚠️ 本段刻意只講法規/地理事實，不臆測風味描述

---

### 【村莊 14：Puligny-Montrachet — 全球最精緻的夏多內 132-148秒】

**視覺關鍵字**:
```
「白酒金三角」風格光譜圖浮現（Meursault／Puligny／Chassagne 三村對比）,
4 座特級園標註, 點擊「顯示酒莊」：
  Chevalier-Montrachet（12 塊）／Bâtard-Montrachet Puligny 側（15 塊）
```

**操作示範**:
1. 地圖定位 Puligny-Montrachet，4 座特級園標註
2. 點擊 Chevalier-Montrachet，「顯示酒莊」，12 個酒莊地塊點亮
3. 切換至 Bâtard-Montrachet（Puligny 側），15 個酒莊地塊點亮

**旁白文案**:
"Puligny-Montrachet 擁有 4 座特級園，是全球公認最精緻的夏多內產地——礦物感強、酸度活潑，陳年潛力驚人。和隔壁 Meursault 的圓潤奶油比起來，這裡走的是纖細優雅的路線。"

**字幕關鍵詞**:
```
💎 4 座特級園，全球最精緻的夏多內
🧩 Chevalier-Montrachet（12）＋ Bâtard-Montrachet（15）
```

**資料來源**:
- `beginner-m4.json`：「擁有4個特級園，是全球最精緻的夏多內產地。礦物感強、酸度活潑、陳年潛力驚人」
- ✅「顯示酒莊」地塊層：`Chevalier-Montrachet`（12）、`Bâtard-Montrachet`（Puligny 側，15）
- 視覺資產參考：`/bourgogne/images/Lesson/golden-triangle-whites.svg`「伯恩丘白酒金三角」，對比 Meursault／Puligny／Chassagne 三村的純淨／圓潤／雄渾三種面向，建議正式製作時調用此既有素材

---

### 【村莊 15：Chassagne-Montrachet — 紅白兼產的蒙哈榭鄰居 148-164秒】

**視覺關鍵字**:
```
紅白並排意象（50% 紅酒／50% 白酒）,
點擊「顯示酒莊」：Bâtard-Montrachet（Chassagne 側）地塊圖層展開（30 塊，全系列單一地塊數最多）
```

**操作示範**:
1. 地圖定位 Chassagne-Montrachet，標註「共享 3 座特級園、紅白各半」
2. 點擊 Bâtard-Montrachet（Chassagne 側），「顯示酒莊」，30 個酒莊地塊逐一點亮

**旁白文案**:
"Chassagne-Montrachet 紅白兼產，白酒一樣礦物優雅，比 Puligny 更圓潤一點；紅酒單寧細膩、果味純淨，同樣值得陳年。Bâtard-Montrachet 這一側，30 個酒莊各自守著自己的幾分地——這是整個系列裡，單一特級園地塊數最多的一座。"

**字幕關鍵詞**:
```
⚖️ 50% 紅酒、50% 白酒
🧩 Bâtard-Montrachet：30 個地塊，系列單園之最
```

**資料來源**:
- `beginner-m4.json`：「紅白兼產，白酒優雅礦物，紅酒也有高水準。共享3個特級園」
- ✅「顯示酒莊」地塊層：`Bâtard-Montrachet`（Chassagne 側，30）

---

### 【村莊 16：Saint-Aubin — 隱藏版礦物白酒 164-176秒】

**視覺關鍵字**:
```
Puligny／Chassagne 西側山谷地形, 價格對比意象（Puligny 三分之一）,
點擊「顯示酒莊」：1er Cru Les Murgers des Dents de Chien 地塊圖層展開（23 塊）
```

**操作示範**:
1. 地圖定位 Saint-Aubin，標註「知名度較低，風土條件優越」
2. 點擊 1er Cru Les Murgers des Dents de Chien，「顯示酒莊」，23 個酒莊地塊點亮

**旁白文案**:
"Saint-Aubin 就在 Puligny 和 Chassagne 西側，風格接近，礦物感強、酸度活潑——但價格只要 Puligny 的三分之一，是懂行人才知道的隱藏版礦物白酒。"

**字幕關鍵詞**:
```
🔍 隱藏版礦物白酒，價格僅 Puligny 三分之一
🧩 Les Murgers des Dents de Chien：23 個酒莊地塊
```

**資料來源**:
- `beginner-m4.json`：「風土條件優越但知名度較低。價格：€20-40（Puligny 的三分之一價格）」
- ✅「顯示酒莊」地塊層：`1er Cru Les Murgers des Dents de Chien`（23）

---

### 【村莊 17-18：Santenay・Maranges — 南端收尾 176-188秒】

**視覺關鍵字**:
```
伯恩丘最南端空拍, 紅酒為主的果香色調,
Maranges 作為終點標記淡出
```

**操作示範**:
1. 地圖定位 Santenay，標註「果味豐富、單寧柔和、易飲易配餐」
2. 平移至 Maranges，標註「伯恩丘最南端終點村」，不延伸風味描述

**旁白文案**:
"Santenay，伯恩丘最南端，果味豐富、單寧柔和，是餐桌上的百搭紅酒；再往南，Maranges，18 村巡禮，在這裡畫下句點。"

**字幕關鍵詞**:
```
🍒 Santenay：果味豐富、易飲易配餐
🏁 Maranges：伯恩丘最南端
```

**資料來源**:
- `beginner-m4.json`（Santenay）：「紅酒：果味豐富、單寧柔和、易飲易配餐；白酒：清新礦物、價格實惠」
- ⚠️ Maranges 平台目前**沒有獨立風格文字**，本段只做「終點村」的地理事實標註，不編造風味描述

---

### 【結尾：行動呼籲 188-205秒】

**視覺關鍵字**:
```
十八村地圖全景回顧（快速掃過剛才所有標記點，北 → 南）,
伯恩丘山坡在午後陽光下顯現,
網站介面浮現, 課程卡片「伯恩丘探索」「伯恩丘白酒聖地」展開,
Logo 淡入：「侍酒師的筆記本」
```

**旁白文案**:
"從 Corton 的紅白雙棲，到 Pommard 的男性化與 Volnay 的女性化，再到 Montrachet 家族的世界之巔——18 個村莊，用『侍酒師的筆記本』，一村一村，讀懂布根地資料最豐富的一段山坡。"

**字幕關鍵詞**:
```
🎓 課程：伯恩丘探索（L1）／伯恩丘白酒聖地（L2）
🗺️ 7 村、11 座特級/一級園地塊實測，合計 207 個酒莊地塊
🥂 系列資料量最大的一集

👉 sommeliernotes.com
```

---

## 📋 拍攝清單 Checklist

### 螢幕錄製部分（依 18 村順序）
- [ ] Pernand-Vergelesses／Ladoix／Aloxe-Corton：Corton 同丘紅白標註 + Corton Grand Cru「顯示酒莊」（22 塊）+ Ladoix 氣候彩蛋
- [ ] Savigny-lès-Beaune／Chorey-lès-Beaune：快閃邊界帶過（不停留）
- [ ] Beaune：42 座一級園疊圖 + Hospices de Beaune 標註（**不**示範地塊層）
- [ ] Pommard：4 座一級園「顯示酒莊」依序切換（17/15/10/13 塊，累加至 55）
- [ ] Volnay：Les Caillerets「顯示酒莊」（23 塊）
- [ ] Monthélie／Saint-Romain：性價比雙生村並列標註
- [ ] Auxey-Duresses：與 Meursault 疊圖對比
- [ ] Meursault：Genevrières「顯示酒莊」（27 塊）+ 與 Puligny 風格對比卡
- [ ] Blagny：Meursault／Puligny 交界身分標註
- [ ] Puligny-Montrachet：白酒金三角光譜圖 + Chevalier-Montrachet（12）／Bâtard-Montrachet Puligny 側（15）
- [ ] Chassagne-Montrachet：Bâtard-Montrachet Chassagne 側「顯示酒莊」（30 塊）
- [ ] Saint-Aubin：Les Murgers des Dents de Chien「顯示酒莊」（23 塊）
- [ ] Santenay／Maranges：南端收尾快閃
- [ ] 十八村地圖全景回顧動畫
- [ ] 課程卡片展開動畫

### 實拍/素材部分
- [ ] Corton 紅土丘與 Montrachet 白堊坡地對比空拍
- [ ] Beaune 古城與 Hospices de Beaune 彩色琉璃瓦屋頂（如有授權素材）
- [ ] Pommard／Volnay 對比鏡頭（深色調 vs 柔和色調）
- [ ] Meursault 黏土土壤近拍
- [ ] 白酒橡木桶陳年酒窖鏡頭
- [ ] 布根地紅白酒瓶型與酒標特寫（示範用，避免特定商標）
- [ ] 搖杯、觀色動作鏡頭（凸顯白酒金黃色澤／紅酒寶石紅）

### 圖形動畫部分
- [ ] 18 村莊長廊示意動畫（開場與結尾各用一次）
- [ ] Corton／Corton-Charlemagne 同丘紅白示意圖
- [ ] Pommard vs Volnay「男性化／女性化」對比動畫
- [ ] 白酒金三角風格光譜圖（Meursault／Puligny／Chassagne）
- [ ] 各村「顯示酒莊」地塊圖層動畫
- [ ] 地塊累計數字動畫（207）
- [ ] 關鍵字浮現動畫

---

## 🎨 視覺風格指南

### 色彩方案
- **主色調**: 香檳金 `#D9B85C`（延續布根地總覽篇伯恩丘強調色）、白堊石灰岩白 `#EDE6D6`
- **輔助色**: Corton／Pommard 紅酒段落用深紅棕 `#8C4A3B`；Volnay／Meursault／Puligny 等優雅段落用柔金 `#E3C87A`
- **強調色**: Montrachet 家族紫金 `#B8935A`
- **快閃過場村莊**（Savigny-lès-Beaune／Chorey-lès-Beaune／Blagny／Maranges）：統一用低飽和灰金 `#C9BBA0`，視覺上與「完整介紹村」的高飽和用色區隔，暗示資訊量較少

### 節奏
- 延續系列規範（Playfair Display + Inter／思源字體）
- 11 個完整介紹村節奏一致（每村約 14-16 秒），4 組快閃過場（Savigny/Chorey、Monthélie/Saint-Romain 雙生村除外——它算完整介紹）壓在 6-8 秒
- 紅酒村（Pommard／Beaune）與白酒村（Meursault／Puligny／Chassagne）之間安排明顯的色調轉場，強化「紅白並存」主題

---

## 🔧 技術實現要點

```javascript
// 依序飛越 18 個村莊（快閃村莊 duration 縮短，完整介紹村莊拉長停留）
const villages = [
  { key: 'Pernand-Vergelesses', center: [4.78, 47.08], dwell: 2200, group: 'corton-trio' },
  { key: 'Ladoix', center: [4.85, 47.06], dwell: 2200, group: 'corton-trio' },
  { key: 'Aloxe-Corton', center: [4.86, 47.07], dwell: 3200, group: 'corton-trio' },
  { key: 'Savigny-lès-Beaune', center: [4.83, 47.06], dwell: 1400, group: 'flyby' },
  { key: 'Chorey-lès-Beaune', center: [4.85, 47.05], dwell: 1400, group: 'flyby' },
  { key: 'Beaune', center: [4.84, 47.02], dwell: 3200 },
  { key: 'Pommard', center: [4.80, 46.99], dwell: 3600, domaineZones: 4 },
  { key: 'Volnay', center: [4.77, 46.97], dwell: 2800, domaineZones: 1 },
  { key: 'Monthélie', center: [4.75, 46.96], dwell: 1600, group: 'value-pair' },
  { key: 'Saint-Romain', center: [4.71, 46.96], dwell: 1600, group: 'value-pair' },
  { key: 'Auxey-Duresses', center: [4.73, 46.97], dwell: 2000 },
  { key: 'Meursault', center: [4.77, 46.97], dwell: 3200, domaineZones: 1 },
  { key: 'Blagny', center: [4.75, 46.96], dwell: 1600 },
  { key: 'Puligny-Montrachet', center: [4.74, 46.96], dwell: 3200, domaineZones: 2 },
  { key: 'Chassagne-Montrachet', center: [4.73, 46.94], dwell: 3200, domaineZones: 1 },
  { key: 'Saint-Aubin', center: [4.72, 46.95], dwell: 2400, domaineZones: 1 },
  { key: 'Santenay', center: [4.71, 46.90], dwell: 1600, group: 'south-end' },
  { key: 'Maranges', center: [4.69, 46.88], dwell: 1400, group: 'south-end' }
];

// 各村「顯示酒莊」地塊層對照表（僅 7 村可用，合計 207 個地塊）
const domaineByVillage = {
  'Aloxe-Corton': ['corton-grand-cru-domaines.json'],                      // 22
  'Pommard': [
    'rugiens-hauts-domaines.json',   // 17
    'rugiens-bas-domaines.json',     // 15
    'grands-epenots-domaines.json',  // 10
    'petits-epenots-domaines.json'   // 13
  ],
  'Volnay': ['les-caillerets-domaines.json'],                               // 23
  'Meursault': ['genevrieres-domaines.json'],                               // 27
  'Puligny-Montrachet': [
    'chevalier-montrachet-domaines.json',     // 12
    'batard-montrachet-puligny-domaines.json' // 15
  ],
  'Chassagne-Montrachet': ['batard-montrachet-chassagne-domaines.json'],    // 30
  'Saint-Aubin': ['murgers-des-dents-de-chien-domaines.json']               // 23
  // 實際檔名以專案內對應檔案為準；其餘 11 村無對應檔案
};

// 氣候熱力圖：本集僅 Ladoix 有真實數值，作為「彩蛋」使用，不做完整氣候段落
applyClimateColor(climateYear.value) // 對應 AOC 'AOC Ladoix Village'
```

---

## 📝 備註事項（重要，務必核對）

### 資料涵蓋範圍的誠實揭露
- **11 座特級/一級園**分布在 **7 個村莊**（Aloxe-Corton、Pommard、Volnay、Meursault、Puligny-Montrachet、Chassagne-Montrachet、Saint-Aubin），有完整「顯示酒莊」地塊層，合計 207 個酒莊地塊。**其餘 11 村（含 Beaune 本身）完全沒有地塊層可示範**，鏡頭掃過這些村莊時不要安排「顯示酒莊」操作。
- 明確**沒有**地塊層的三個對照組（v1.0 已標註，本版沿用）：
  - **Corton Les Bressandes**：僅 21 個 `.kmz` 檔案，無 `.geojson` 酒莊地塊
  - **Meursault Perrières**：只有邊界檔案，無地塊子資料夾
  - **Beaune Clos des Mouches**：只有邊界檔案，無地塊子資料夾
- **⚠️ 村莊風格文字覆蓋率**：18 村中，**11 村**（Aloxe-Corton、Beaune、Pommard、Volnay、Saint-Romain、Auxey-Duresses、Meursault、Puligny-Montrachet、Chassagne-Montrachet、Saint-Aubin、Santenay）在 `beginner-m4.json`／`intermediate-m2.json` 有平台自己撰寫的風格描述文字；**7 村**（Pernand-Vergelesses、Ladoix、Savigny-lès-Beaune、Chorey-lès-Beaune、Monthélie、Blagny、Maranges）**沒有獨立風格文字**（Monthélie 有與 Saint-Romain 並列的一句話，Pernand/Ladoix 只透過 Corton 山丘的地理/歷史脈絡帶到）。本版腳本已將這 7 村處理為「同丘」「雙生」「快閃過場」「交界身分」等不需要風味形容詞的呈現方式，**沒有為任何一村杜撰品飲描述**。若未來平台補上這 7 村的課程內容，可以個別擴充成完整段落。
- **⚠️ 氣候熱力圖依然不做完整段落**：18 村中僅 `AOC Ladoix Village` 有真實數值，其餘 17 村（含所有主力村莊）皆為 `null`。本版把這個限制轉化為 Ladoix 段落裡的一個「彩蛋」小知識，而不是安排一整段氣候熱力圖示範。
- **地質圖層僅 Meursault 有專屬文字**：`useBRGMGeology.js` 只有黏土條目點名 Meursault，本版沿用 v1.0 的作法，只在 Meursault 段落引用這段文字，不替其他村莊杜撰地質描述。

### 版權注意
- Corton／Montrachet／Beaune 古城具體建築照片需獲得授權或使用 Creative Commons 素材
- 提及 Montrachet 家族、Hospices de Beaune 等名稱僅作教育性地理/歷史標註，避免暗示合作/背書關係
- 地圖資料來源：Mapbox, OpenStreetMap contributors；氣候資料來源：`bourgogne-climate.json`；村莊風格文字來源：平台既有課程內容（`beginner-m4.json`／`intermediate-m2.json`）

---

## 🎯 成功指標

- 完播率: >45%（18 村、220-250 秒是系列最長的一集，完播率預期低於夜丘版，建議搭配「11 村完整版」單獨剪輯的 Reels 分流承接流量）
- 分享次數: 500+（Pommard vs Volnay「男性化／女性化」對比、Montrachet 家族稀有性、Beaune 性價比之王等多個話題點）
- 額外指標：11 支完整介紹村短片與 4 段快閃過場的個別數據，建議分開追蹤，快閃過場若完播率明顯偏低，可考慮下個版本直接刪減合併

---

**製作日期**: 2026-08-10
**版本**: v2.0（布根地系列 Episode 4・十八村巡禮版，取代 v1.0 的村莊長廊/特級園分離結構）
**製作單位**: 侍酒師的筆記本團隊

---

**準備好一村一村，走完布根地資料最豐富的一段山坡了嗎？Let's make it happen! 🥂**
