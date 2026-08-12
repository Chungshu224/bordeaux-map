# 🍷 夜丘產區短視頻教學腳本（v2.0・九村巡禮版）

## 影片資訊
- **系列**: 布根地單一產區系列 Episode 3（承接 BOURGOGNE_VIDEO_SCRIPT.md 總覽篇、CHABLIS_VIDEO_SCRIPT.md）
- **目標時長**: 150-175 秒（比 v1.0 長，因為這版把畫面重心平均分給 9 個村莊；若要剪短版，可挑其中 4-5 村刪減）
- **主題**: Côte de Nuits - 9 個村莊、24 座特級園，全世界黑皮諾的終極考場
- **風格**: 深沉、莊重，逐村建立個性，避免「一片特級園金光閃過」的平面感
- **目標受眾**: 葡萄酒愛好者、侍酒師學習者、黑皮諾收藏者
- **模組化提示**: 每個村莊段落都寫成可獨立成立的小單元（有自己的視覺/旁白/字幕），除了剪成一支長片，也可以直接切成 9 支 Reels／Shorts，各自搭配「風格光譜」小圖作為系列辨識度

---

## ⚠️ v2.0 改版重點

v1.0 把「9 村莊定位」和「24 座特級園巡禮」拆成兩個獨立段落，村莊本身沒有個性，只有名字閃過。這版把兩者合併：**每個村莊一個小節，村莊風格 + 特級/一級園，一次講完**。

村莊風格文字全部取自平台既有課程內容（`beginner-m3.json`／`intermediate-m1.json`），不是重新編寫的行銷字——這樣旁白和使用者之後在課程裡讀到的敘述會是一致的。

---

## 🎬 完整腳本分段

### 【開場：黑皮諾的聖殿 0-12秒】

**視覺關鍵字**:
```
夜丘（Côte de Nuits）南北狹長山坡空拍, 秋季葡萄葉轉紅畫面,
古老石造酒窖大門特寫, 莊重轉場特效
```

**旁白文案**:
"從 Marsannay 到 Nuits-Saint-Georges，短短 20 公里的山坡上，串著 9 個村莊、24 座特級園——這裡是夜丘，全世界黑皮諾的終極考場。接下來，一村一村走進去看。"

**字幕關鍵詞**:
```
Côte de Nuits | 黑皮諾的終極考場 🍷
9 大村莊 | 24 座特級園
```

---

### 【村莊 1/9：Marsannay — 夜丘唯一的三色酒村 12-24秒】

**視覺關鍵字**:
```
夜丘最北端空拍, 紅／白／粉紅三種酒色並排意象,
粉紅酒特寫（草莓色澤）, 風格光譜小圖浮現（親民、易飲端）
```

**操作示範**:
1. 地圖定位 Marsannay，AOC 邊界亮起
2. 標註「無特級園」，村莊級／一級園圖層帶過
3. 彈窗顯示粉紅酒風格關鍵字

**旁白文案**:
"Marsannay 是夜丘最北的村莊，也是唯一能同時釀紅、白、粉紅三色酒的產區——沒有特級園，卻以草莓、覆盆子香氣的粉紅酒聞名，清新活潑，是夜丘裡最平易近人的入口。"

**字幕關鍵詞**:
```
🍓 唯一三色酒村莊
🌸 粉紅酒：草莓／覆盆子／玫瑰，清新礦物感
```

**資料來源**:
- `public/bourgogne/data/courses/level1/beginner-m3.json`；`intermediate-m1.json`（粉紅酒風格描述）
- ⚠️ 無「顯示酒莊」地塊層可示範

---

### 【村莊 2/9：Fixin — Gevrey 的低調鄰居 24-36秒】

**視覺關鍵字**:
```
地圖平移至 Fixin, 石灰岩坡地與 Gevrey-Chambertin 相似地形疊圖對比,
5 座一級園邊界標註, 價格對比意象（相近風格、親民標價）
```

**操作示範**:
1. 地圖定位 Fixin，5 座一級園依序標註
2. 疊圖對比 Fixin 與 Gevrey-Chambertin 的土壤相似性
3. 標註「無特級園」

**旁白文案**:
"Fixin 緊鄰 Gevrey-Chambertin，土壤相似、風格也接近——強勁、結構緊實、單寧明顯，需要陳年才能展開。但因為少了特級園的光環，價格親民得多，是懂行人的口袋名單。"

**字幕關鍵詞**:
```
💪 風格接近 Gevrey，價格親民得多
🏔️ 5 座一級園，強勁結構、需陳年
```

**資料來源**:
- `intermediate-m1.json`：「風格接近 Gevrey-Chambertin（強勁、單寧高）但價格親切得多」
- ⚠️ 無「顯示酒莊」地塊層可示範

---

### 【村莊 3/9：Gevrey-Chambertin — 夜丘之王 36-52秒】

**視覺關鍵字**:
```
村莊全景空拍, 9 座 Chambertin 家族特級園依序點亮（金色描邊）,
點擊 Chambertin Grand Cru，「顯示酒莊」地塊圖層展開（19 塊）,
深色調轉場（黑櫻桃／甘草／皮革意象）
```

**操作示範**:
1. 地圖定位 Gevrey-Chambertin，9 座特級園逐一標註（Chambertin、Clos de Bèze、Chapelle、Charmes、Griotte、Latricières、Mazis、Mazoyères、Ruchottes）
2. 點擊 Chambertin Grand Cru，「顯示酒莊」（🏰），19 個酒莊地塊逐一點亮
3. 風格光譜小圖：標記在「強勁」端

**旁白文案**:
"Gevrey-Chambertin 是夜丘最大、最富盛名的村莊，9 座 Chambertin 家族特級園全部在此——顏色深邃近乎不透光，黑櫻桃、甘草、皮革氣息，單寧緊實，要 10 到 30 年才能完全展開。這是布根地紅酒力量的典範。"

**字幕關鍵詞**:
```
👑 9 座 Chambertin 家族特級園
🖤 陳年 10-30 年才完全展開
```

**資料來源**:
- `beginner-m3.json`／`intermediate-m1.json`（村莊風格與陳年潛力描述）
- ✅ 「顯示酒莊」地塊層：`Chambertin Grand Cru`（19 個酒莊地塊）

---

### 【村莊 4/9：Morey-Saint-Denis — 被低估的平衡點 52-66秒】

**視覺關鍵字**:
```
地圖平移, 5 座特級園依序標註：
  Clos de la Roche / Clos de Tart / Clos des Lambrays / Clos Saint-Denis / Bonnes-Mares（跨界）
村莊夾在 Gevrey 與 Chambolle 之間的地理位置示意
```

**操作示範**:
1. 地圖定位 Morey-Saint-Denis，5 座特級園邊界標註
2. 標註 Bonnes-Mares 橫跨 Morey-Saint-Denis 與 Chambolle-Musigny 兩村邊界（下一村會實測地塊層）
3. 風格光譜小圖：標記在「中間，力量與優雅並存」

**旁白文案**:
"Morey-Saint-Denis 有 5 座特級園，知名度卻遠不如兩側的 Gevrey 和 Chambolle。這裡的酒剛好卡在中間——既有力量、又不失優雅，是懂酒的人才知道的行家首選。"

**字幕關鍵詞**:
```
⚖️ 力量與優雅的完美平衡
💎 5 座特級園：Clos de la Roche／Clos de Tart 等
```

**資料來源**:
- `beginner-m3.json`：「這裡的酒介於兩者之間，既有力量又不失優雅，是行家最愛」
- ⚠️ Morey-Saint-Denis 本身無獨立可示範地塊層（Bonnes-Mares 地塊層在下一村示範）

---

### 【村莊 5/9：Chambolle-Musigny — 夜丘最女性化的優雅 66-82秒】

**視覺關鍵字**:
```
柔和轉場（紫羅蘭／玫瑰色調）, Musigny 特級園標註,
點擊「顯示酒莊」：1er Cru Les Amoureuses 地塊圖層展開（14 塊）,
Bonnes-Mares 地塊層同步標註（25 塊，跨村莊）
```

**操作示範**:
1. 地圖定位 Chambolle-Musigny，Musigny 特級園標註
2. 點擊 1er Cru Les Amoureuses，「顯示酒莊」，14 個酒莊地塊點亮
3. 切回 Bonnes-Mares，展示 25 個跨村莊地塊（本系列地塊數最多的一座）
4. 風格光譜小圖：標記在「優雅」端

**旁白文案**:
"Chambolle-Musigny 以『女性化』風格聞名——絲綢般質地、紫羅蘭與玫瑰香氣，是夜丘最精緻細膩的一站。Musigny 特級園之外，橫跨兩村的 Bonnes-Mares 更藏著 25 個酒莊地塊，是我們目前實測資料最完整的一座特級園。"

**字幕關鍵詞**:
```
🌸 夜丘最具女性氣質的紅酒
🧩 Bonnes-Mares：25 個地塊，本系列最多
```

**資料來源**:
- `intermediate-m1.json`：「特色：夜丘中最具女性氣質的紅酒」
- ✅「顯示酒莊」地塊層：`1er Cru Les Amoureuses`（14）、`Bonnes-Mares`（25，跨 Morey-Saint-Denis／Chambolle-Musigny）

---

### 【村莊 6/9：Vougeot — 一座園、一個村 82-94秒】

**視覺關鍵字**:
```
Clos de Vougeot 城牆莊園空拍（布根地最大特級園,50公頃）,
上坡／中坡／下坡三段分色標註, 生產者標籤示意（強調「看酒莊、不只看園名」）
```

**操作示範**:
1. 地圖定位 Vougeot，Clos de Vougeot 巨大範圍與其餘袖珍特級園面積對比
2. 依高度分色標註上坡／中坡／下坡三段風格差異
3. 標註「目前無酒莊地塊層可查」

**旁白文案**:
"Vougeot 幾乎等於 Clos de Vougeot 一座園——布根地最大的特級園，50 公頃、城牆圍起。但同一座園裡，上坡優雅複雜、中坡均衡、下坡較簡單，風格因地塊位置差異極大。在這裡，生產者比園名更重要。"

**字幕關鍵詞**:
```
🏰 Clos de Vougeot：布根地最大特級園（50 公頃）
📍 上坡／中坡／下坡，風格差異極大
```

**資料來源**:
- `beginner-m3.json`：「風格：因地塊位置差異極大；上坡：優雅複雜｜中坡：均衡｜下坡：較簡單；重點：生產者比園名更重要」
- ⚠️ Clos de Vougeot **沒有**「顯示酒莊」地塊層——不要示範點開地塊

---

### 【村莊 7/9：Flagey-Échézeaux — 沒有村莊級酒標的產區 94-104秒】

**視覺關鍵字**:
```
小村莊範圍標註, Échézeaux／Grands Échézeaux 兩座特級園標註,
點擊「顯示酒莊」：Grands-Échézeaux 地塊圖層展開（14 塊）
```

**操作示範**:
1. 地圖定位 Flagey-Échézeaux，標註「無村莊級，酒標借用 Vosne-Romanée」
2. Échézeaux、Grands Échézeaux 兩座特級園邊界標註
3. 點擊 Grands-Échézeaux，「顯示酒莊」，14 個酒莊地塊點亮

**旁白文案**:
"Flagey-Échézeaux 甚至沒有自己的村莊級酒標，村莊級酒都借用 Vosne-Romanée 的名字——但它有兩座特級園，Grands Échézeaux 面積大、地塊多，品質差異也明顯，14 個酒莊在此各自表述。"

**字幕關鍵詞**:
```
🏷️ 沒有村莊級酒標，借用 Vosne-Romanée 之名
💎 2 座特級園：Échézeaux／Grands Échézeaux
```

**資料來源**:
- `beginner-m3.json`：「2個特級園，無村莊級」「Flagey-Échézeaux 無村莊級，酒標使用 Vosne-Romanée」
- ✅「顯示酒莊」地塊層：`Grands-Échézeaux Grand Cru`（14 個酒莊地塊）

---

### 【村莊 8/9：Vosne-Romanée — 傳奇的濃度最高之處 104-122秒】

**視覺關鍵字**:
```
8 座特級園依序點亮（含 Romanée-Conti、La Tâche、Richebourg、
La Romanée、La Grande Rue、Romanée-Saint-Vivant）,
點擊「顯示酒莊」：Richebourg（11 塊）與 1er Cru Les Suchots（23 塊）雙圖層切換,
奢華、松露／玫瑰／香料意象轉場
```

**操作示範**:
1. 地圖定位 Vosne-Romanée，8 座特級園逐一標註
2. 點擊 Richebourg，「顯示酒莊」，11 個酒莊地塊點亮
3. 切換至 1er Cru Les Suchots，23 個酒莊地塊點亮（本村兩座地塊層合計 34 個）
4. 風格光譜小圖：標記為「力量與優雅完美平衡」

**旁白文案**:
"小小的 Vosne-Romanée，卻藏著全世界最貴的名字——Romanée-Conti、La Tâche、Richebourg。玫瑰、紫羅蘭、香料、松露，層層疊疊，是夜丘裡把力量與優雅平衡得最完美的一村。"

**字幕關鍵詞**:
```
💎 8 座特級園，含 Romanée-Conti
🍷 力量與優雅完美平衡
```

**資料來源**:
- `intermediate-m1.json`：「完美平衡力量與優雅…香氣極其複雜：玫瑰、紫羅蘭、櫻桃、香料、松露」
- ✅「顯示酒莊」地塊層：`Richebourg Grand Cru`（11）、`1er Cru Les Suchots`（23）

---

### 【村莊 9/9：Nuits-Saint-Georges — 沒有特級園也稱王 122-136秒】

**視覺關鍵字**:
```
村莊南端空拍, 41 座一級園密集邊界疊圖,
點擊「顯示酒莊」：1er Cru Les Vaucrains 地塊圖層展開（10 塊）,
野味、黑色水果、皮革意象
```

**操作示範**:
1. 地圖定位 Nuits-Saint-Georges，標註「無特級園」，41 座一級園邊界疊加展示
2. 點擊 1er Cru Les Vaucrains，「顯示酒莊」，10 個酒莊地塊點亮
3. 風格光譜小圖：標記在「強勁」端，接近 Gevrey-Chambertin

**旁白文案**:
"Nuits-Saint-Georges 沒有一座特級園，卻有 41 座一級園撐場——強健有力、野味香氣明顯，黑色水果、動物皮革、松露，陳年 15 到 30 年。九村巡禮，從最北的粉紅酒村，走到最南的野性收尾。"

**字幕關鍵詞**:
```
🏔️ 無特級園，但 41 座一級園
🦌 野味香氣、強健有力，陳年 15-30 年
```

**資料來源**:
- `beginner-m3.json`：「雖然沒有特級園，但擁有41個一級園，品質極高」
- ✅「顯示酒莊」地塊層：`1er Cru Les Vaucrains`（10 個酒莊地塊）

---

### 【氣候熱力圖：9 村莊的溫差密碼 136-156秒】

**視覺關鍵字**:
```
氣候熱力圖啟動, 年份滑桿拖曳,
9 村莊溫度色塊同時呈現（由北 Marsannay 至南 Nuits-Saint-Georges 漸層變化）,
點擊 Vosne-Romanée／Nuits-Saint-Georges 顯示實測均溫,
Golden Vintage 徽章彈出
```

**操作示範**:
1. 開啟「氣候熱力圖」，拖曳年份滑桿
2. 點擊 Nuits-Saint-Georges（均溫全夜丘最高，19.16°C），對比 Fixin（18.42°C，全夜丘最低）
3. 停在指標年份，Golden Vintage 徽章彈出

**旁白文案**:
"剛剛走過的 9 個村莊，就算同在一條山坡上，最北的 Fixin 和最南的 Nuits-Saint-Georges，均溫也差了將近 1 度。這一點點溫差，就是村莊個性差異的起點。"

**字幕關鍵詞**:
```
🌡️ 北 Fixin 18.42°C → 南 Nuits-Saint-Georges 19.16°C
📈 8 個村莊實測氣候資料
```

**資料來源**:
- `public/data/bourgogne-climate.json`（Marsannay／Fixin／Morey-Saint-Denis／Chambolle-Musigny／Flagey-Échézeaux／Vosne-Romanée／Vougeot／Nuits-Saint-Georges 共 8 村莊有實測數值）

---

### 【結尾：行動呼籲 156-172秒】

**視覺關鍵字**:
```
九村地圖全景回顧（快速掃過剛才 9 個標記點）,
夜丘山坡在暮色中顯現,
網站介面浮現, 課程卡片「夜丘探索」「夜丘產區深度解析」展開,
Logo 淡入：「侍酒師的筆記本」
```

**旁白文案**:
"從 Marsannay 的三色酒，到 Nuits-Saint-Georges 的野性收尾——9 個村莊，9 種個性，24 座特級園。用『侍酒師的筆記本』，走進全世界最偉大的黑皮諾產區。"

**字幕關鍵詞**:
```
🎓 課程：夜丘探索（L1）／夜丘產區深度解析（L2）
🗺️ 6 座村莊、7 座特級/一級園地塊實測，共 116 個酒莊地塊
🌡️ 8 村莊氣候實測資料

👉 sommeliernotes.com
```

---

## 📋 拍攝清單 Checklist

### 螢幕錄製部分（依 9 村莊順序）
- [ ] Marsannay：AOC 邊界 + 粉紅酒風格彈窗
- [ ] Fixin：5 座一級園標註 + Gevrey 疊圖對比
- [ ] Gevrey-Chambertin：9 座特級園標註 + Chambertin「顯示酒莊」（19 塊）
- [ ] Morey-Saint-Denis：5 座特級園標註 + Bonnes-Mares 跨界示意
- [ ] Chambolle-Musigny：Musigny 標註 + Les Amoureuses（14 塊）+ Bonnes-Mares（25 塊）
- [ ] Vougeot：Clos de Vougeot 面積對比 + 上中下坡分色（**不**示範地塊層）
- [ ] Flagey-Échézeaux：2 座特級園標註 + Grands-Échézeaux「顯示酒莊」（14 塊）
- [ ] Vosne-Romanée：8 座特級園標註 + Richebourg（11 塊）+ Les Suchots（23 塊）
- [ ] Nuits-Saint-Georges：41 座一級園疊圖 + Les Vaucrains「顯示酒莊」（10 塊）
- [ ] 氣候熱力圖年份滑桿拖曳 + Golden Vintage 徽章
- [ ] 九村地圖全景回顧動畫

### 實拍/素材部分
- [ ] 夜丘山坡秋季空拍（葡萄葉轉紅）
- [ ] Clos de Vougeot 城牆莊園實景（如有授權素材）
- [ ] 石造酒窖大門/地窖特寫
- [ ] 黑皮諾葡萄串特寫（可依村莊分段落使用不同色調濾鏡呼應風格光譜）
- [ ] 布根地紅酒瓶型與酒標特寫（示範：非特定酒莊，避免商標爭議）
- [ ] 粉紅酒（Marsannay）與深色酒（Gevrey/Nuits）並列對比鏡頭

### 圖形動畫部分
- [ ] 風格光譜小圖（優雅 ↔ 強勁），9 村莊各自標記位置，每村段落重複出現建立視覺記憶點
- [ ] 9 村莊項鍊狀排列示意動畫（開場與結尾各用一次）
- [ ] 每村特級/一級園分布地圖動畫
- [ ] Bonnes-Mares／地塊數字疊加動畫
- [ ] 村莊溫差曲線動畫
- [ ] 關鍵字浮現動畫

---

## 🎨 視覺風格指南

### 色彩方案
- **主色調**: 深勃根地紅 `#5C1A2B`（延續布根地總覽篇夜丘強調色）、暮色紫灰 `#4A3B47`
- **輔助色**: 石灰岩米白 `#EDE6D6`、橡木桶棕 `#3d2817`
- **強調色**: 特級園金 `#C9A227`（特級園標註與地塊描邊）
- **村莊個性色（風格光譜用，僅供畫面提示，非資料視覺化用色）**:
  - 優雅端（Chambolle-Musigny）：柔粉紫 `#B98CA8`
  - 強勁端（Gevrey-Chambertin／Nuits-Saint-Georges）：深酒紅 `#7A1F30`
  - 平衡／居中（Morey-Saint-Denis／Vosne-Romanée）：中間色 `#8A5468`

### 節奏
- 延續系列規範（Playfair Display + Inter／思源字體）
- 9 個村莊段落節奏盡量一致（每村 10-16 秒），避免頭重腳輕；有地塊層的村莊可以多留 2-3 秒讓「顯示酒莊」動畫跑完
- 風格光譜小圖建議做成固定版位的常駐 UI 元素（例如畫面右下角），村莊一換，光標位置跟著移動，強化「巡禮」的連續感

---

## 🔧 技術實現要點

```javascript
// 依序飛越 9 個村莊（示意，實際座標建議抓各村 AOC centroid）
const villages = [
  { key: 'Marsannay', center: [5.03, 47.27] },
  { key: 'Fixin', center: [4.99, 47.24] },
  { key: 'Gevrey-Chambertin', center: [4.97, 47.22] },
  { key: 'Morey-Saint-Denis', center: [4.96, 47.20] },
  { key: 'Chambolle-Musigny', center: [4.95, 47.19] },
  { key: 'Vougeot', center: [4.95, 47.17] },
  { key: 'Flagey-Échézeaux', center: [4.96, 47.17] },
  { key: 'Vosne-Romanée', center: [4.95, 47.16] },
  { key: 'Nuits-Saint-Georges', center: [4.95, 47.13] }
];

async function flyThroughVillages(map) {
  for (const v of villages) {
    map.flyTo({ center: v.center, zoom: 13.5, pitch: 45, duration: 1600 });
    await wait(1600 + 400); // 停留鏡頭
  }
}

// 各村「顯示酒莊」地塊層對照表（僅 6 村可用）
const domaineByVillage = {
  'Gevrey-Chambertin': ['chambertin-domaines.json'],           // 19
  'Chambolle-Musigny': ['les-amoureuses-domaines.json',        // 14
                         'bonnes-mares-domaines.json'],        // 25（跨 Morey-Saint-Denis）
  'Flagey-Échézeaux': ['grands-echezeaux-domaines.json'],       // 14
  'Vosne-Romanée': ['richebourg-domaines.json',                 // 11
                     'les-suchots-domaines.json'],              // 23
  'Nuits-Saint-Georges': ['les-vaucrains-domaines.json']        // 10
  // 實際檔名以專案內對應檔案為準；Marsannay／Fixin／Vougeot 無對應檔案
};

// 氣候熱力圖：示範用 Nuits-Saint-Georges（有實測數值，避免用 Gevrey-Chambertin）
applyClimateColor(climateYear.value) // 對應 AOC 'AOC Nuits-Saint-Georges'
```

---

## 📝 備註事項（重要，務必核對）

### 資料涵蓋範圍的誠實揭露
- **24 座特級園**全部都有邊界 geojson，但**只有 7 座**（Bonnes-Mares、Chambertin、Chambolle-Musigny 1er Cru Les Amoureuses、Grands-Échézeaux、Nuits-Saint-Georges 1er Cru Les Vaucrains、Richebourg、Vosne-Romanée 1er Cru Les Suchots）有「顯示酒莊」地塊層，分布在 **6 個村莊**（Gevrey-Chambertin、Morey-Saint-Denis／Chambolle-Musigny 共用 Bonnes-Mares、Chambolle-Musigny、Flagey-Échézeaux、Vosne-Romanée、Nuits-Saint-Georges）。**Marsannay、Fixin、Vougeot 三村完全沒有地塊層可示範**——包含大名鼎鼎的 Clos de Vougeot 在內，拍攝時這三村只能標註邊界與名稱，不要安排「顯示酒莊」操作鏡頭。
- **⚠️ 氣候熱力圖有一個關鍵缺口：Gevrey-Chambertin 自己的氣候資料是空的**（`AOC Gevrey-Chambertin (Gevrey-Chambertin)` 條目 `temps`/`sun`/`rain`/`baseline` 全為 `null`）。氣候段落刻意選用 Nuits-Saint-Georges／Fixin 等有實測數據的村莊做示範，**不要把攝影機停在 Gevrey-Chambertin 拉氣候熱力圖**。
- **地質圖層沒有夜丘專屬的中文解說**：`useBRGMGeology.js` 的 `REGION_DESCR_OVERRIDE.bourgogne` 只有「金丘」籠統描述，沒有針對 Gevrey/Vosne/Morey 等個別村莊的專屬文字，本集依然不安排地質圖層深度段落。
- **村莊風格文字來源**：9 村的旁白描述全部改寫自 `public/bourgogne/data/courses/level1/beginner-m3.json` 與 `level2/intermediate-m1.json`（以及對應的 `src/locales/zh-TW/lessons/bourgogne/` 版本），確保與課程本身用語一致。片中提到的「風格光譜」概念呼應課程既有的 `/bourgogne/images/Lesson/cote-de-nuits-style-axis.svg` 對比圖——**正式製作時建議直接調用這張既有 SVG 素材，或請設計師依此圖重繪動畫版**，本腳本未取得該圖確切的九村數值座標，因此各村在光譜上的位置僅依文字描述做「質性」標示（優雅／強勁／平衡），不是精確評分，若要標出精確分數需先確認該 SVG 或對應圖表資料。

### 版權注意
- Clos de Vougeot 城堡等具體酒莊建築照片需獲得授權或使用 Creative Commons 素材
- 提及 Romanée-Conti 等品牌名稱僅作教育性地理標註，避免暗示合作/背書關係
- 地圖資料來源：Mapbox, OpenStreetMap contributors；氣候資料來源：`bourgogne-climate.json`；村莊風格文字來源：平台既有課程內容

---

## 🎯 成功指標

- 完播率: >50%（時長拉長至 150-175 秒，完播率預期略低於 v1.0，但單村片段可另做短版 Reels 彌補流量）
- 分享次數: 500+（Romanée-Conti／Chambertin 等高辨識度名稱具備天然話題性）
- 額外指標：若切成 9 支村莊短片，個別短片的完播率與互動率建議另立報表追蹤

---

**製作日期**: 2026-08-10
**版本**: v2.0（布根地系列 Episode 3・九村巡禮版，取代 v1.0 的村莊/特級園分離結構）
**製作單位**: 侍酒師的筆記本團隊

---

**準備好一村一村，走進黑皮諾的終極考場了嗎？Let's make it happen! 🍷**
