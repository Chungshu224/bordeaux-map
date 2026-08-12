# 💰 夏隆內丘與馬貢內產區短視頻教學腳本

## 影片資訊
- **系列**: 布根地單一產區系列 Episode 5（承接總覽篇、CHABLIS、COTE_DE_NUITS、COTE_DE_BEAUNE）
- **目標時長**: 90-110 秒
- **主題**: Côte Chalonnaise & Mâconnais - 金丘的延續，性價比的答案
- **風格**: 輕快、親民，主打「高氣候資料完整度」與「超值選購」角度（本集**沒有**酒莊地塊層可展示，敘事重心因此不同於前三集）
- **目標受眾**: 葡萄酒愛好者、預算有限的初階學習者、想找日常餐酒的觀眾

---

## ⚠️ 製作前必讀：本集與前三集的關鍵差異

前三集（Chablis／Côte de Nuits／Côte de Beaune）都能示範「顯示酒莊」地塊層（點開特級/一級園看到十幾到三十個酒莊地塊）。**這一集完全沒有這個功能可用**——`BourgogneMapSection.vue` 的 `DOMAINE_ZONES` 清單裡，沒有任何一筆屬於夏隆內丘或馬貢內。畫面上**不要**出現「顯示酒莊」按鈕的操作示範。

反過來，這一集氣候資料是全系列最完整的一次：夏隆內丘與馬貢內合計 14 個 AOC，**全部**都有真實氣溫/日照/降雨數值（不像伯恩丘 18 村只有 1 村有資料、夜丘的 Gevrey-Chambertin 是空的）。因此本集腳本把氣候熱力圖段落放到主場，取代前三集的地塊巡禮段落。

---

## 🎬 完整腳本分段

### 【開場：金丘之後的隱藏寶藏 0-15秒】

**視覺關鍵字**:
```
金丘南端漸漸過渡到丘陵地形, 葡萄園色調轉為更明亮的鄉村感,
親民酒標與價格牌意象, 輕快轉場特效
```

**旁白文案**:
"過了伯恩丘，山勢漸緩，價格也親民了起來。夏隆內丘與馬貢內，是金丘風土的延續，卻是布根地裡最容易入門的兩個產區。"

**字幕關鍵詞**:
```
Côte Chalonnaise & Mâconnais | 金丘的延續 💰
高性價比 | 布根地入門首選
```

---

### 【地圖定位：兩個產區、12 個 AOC 15-35秒】

**視覺關鍵字**:
```
互動地圖啟動, 從伯恩丘往南平移至夏隆內丘,
5 個村莊依序高亮：Bouzeron → Rully → Mercurey → Givry → Montagny
繼續往南平移至馬貢內,
7 個 AOC 依序高亮：Mâcon-Villages → Viré-Clessé → Pouilly-Fuissé →
  Pouilly-Vinzelles → Pouilly-Loché → Saint-Véran → Mâcon
```

**操作示範**:
1. 點擊夏隆內丘各村莊 AOC 圖層，5 個村莊依序亮起
2. 平移地圖至馬貢內，7 個 AOC 圖層依序亮起
3. 特別標註 Bouzeron——布根地唯一整村專屬 Aligoté 品種的法定產區

**旁白文案**:
"夏隆內丘 5 個村莊，馬貢內 7 個法定產區——12 塊拼圖，串起金丘與薄酒萊之間的過渡地帶。Bouzeron 更是全布根地唯一一個，整村只釀阿里哥蝶（Aligoté）的法定產區。"

**字幕關鍵詞**:
```
📍 夏隆內丘：Bouzeron／Rully／Mercurey／Givry／Montagny
📍 馬貢內：Mâcon／Pouilly-Fuissé／Viré-Clessé 等 7 個 AOC
🍇 Bouzeron：全布根地唯一 Aligoté 專屬村莊
```

**資料來源**:
- `public/bourgogne/geojson/Cote-Chalonnaise/`（`01Bouzeron` ~ `05Montagny`）
- `public/bourgogne/geojson/Maconnais/`（7 個 AOC 檔案，無村莊子資料夾）

---

### 【一級園版圖：150 座邊界，靜待挖掘 35-55秒】

**視覺關鍵字**:
```
夏隆內丘一級園邊界疊圖展示：
  Rully 1er Cru（24 座命名地塊）
  Mercurey 1er Cru（33 座）
  Givry 1er Cru（36 座）
  Montagny 1er Cru（50 座，四村之最）
色塊密集排列動畫, 數字累加至「150」
```

**操作示範**:
1. 依序點開 Rully、Mercurey、Givry、Montagny 的一級園圖層
2. 觀察 Montagny 一級園數量之多（50 座），密度不輸金丘
3. 提醒：目前僅有邊界圖層，尚無逐一酒莊地塊資料可查詢

**旁白文案**:
"光是 Montagny 一村，一級園就有 50 座——密度不輸金丘任何一個村莊。這裡的名字你可能沒聽過，但風土的精密程度絲毫不打折。"

**字幕關鍵詞**:
```
🧩 Montagny：50 座一級園（四村之最）
📊 夏隆內丘合計 150 個 AOC／一級園邊界
```

**資料來源**:
- `Rully 1er Cru`(24)、`Mercurey 1er Cru`(33)、`Givry 1er Cru`(36)、`Montagny 1er Cru`(50)
- Bouzeron 無一級園（僅產 Aligoté）；馬貢內目前無一級園圖層（Pouilly-Fuissé 2020 年起已有官方一級園分級，但本平台尚未建置對應圖層）

---

### 【氣候熱力圖：全系列資料最完整的一集 55-85秒】

**視覺關鍵字**:
```
氣候熱力圖啟動, 14 個 AOC 色塊同時呈現（夏隆內丘 7 + 馬貢內 7）,
年份滑桿拖曳, 指標切換：氣溫 🌡️ / 日照 ☀️ / 降雨 💧,
南北溫度梯度視覺化（Bouzeron 偏涼 → Mâcon 偏暖）,
Golden Vintage 徽章彈出
```

**操作示範**:
1. 開啟「氣候熱力圖」，14 個 AOC 同時亮起色塊——本系列首次「全村莊都有數據」的完整畫面
2. 拖曳年份滑桿，觀察夏隆內丘到馬貢內的溫度梯度變化
3. 切換氣溫／日照／降雨三指標，示範用於挑選年份的邏輯
4. 停在指標年份，Golden Vintage 徽章彈出

**旁白文案**:
"這是整個系列裡，唯一一次能把所有村莊的氣候資料一次攤開來看的產區。從偏涼的 Bouzeron，到偏暖的 Mâcon，溫度一路遞增——這正是挑選高性價比年份最直接的線索。"

**字幕關鍵詞**:
```
✅ 14／14 AOC 氣候資料齊全，系列唯一「全村滿血」
📈 南北溫度梯度：Bouzeron 偏涼 → Mâcon 偏暖
```

**資料來源**:
- `public/data/bourgogne-climate.json`（`AOC Bouzeron`／`AOC Rully`／`AOC Mercurey`／`AOC Givry`／`AOC Montagny`／`AOC Bourgogne Côte Chalonnaise`／`AOC Bourgogne Côtes du Couchois`／`AOC Mâcon`／`AOC Mâcon-Villages`／`AOC Pouilly-Fuissé`／`AOC Pouilly-Vinzelles`／`AOC Pouilly-Loché`／`AOC Saint-Véran`／`AOC Viré-Clessé`，共 14 筆皆有真實數值）

---

### 【結尾：行動呼籲 85-105秒】

**視覺關鍵字**:
```
回到地圖全景, 夏隆內丘與馬貢內在午後陽光下顯現,
網站介面浮現, 課程卡片「夏隆內丘與馬貢內」展開,
三個子課程標籤浮現：夏隆內丘：金丘的延續 / 馬貢內：親民白酒天堂 / 性價比選購指南,
Logo 淡入：「侍酒師的筆記本」
```

**旁白文案**:
"從 Bouzeron 的獨門 Aligoté，到 Montagny 的 50 座一級園，再到全系列最完整的氣候資料——用『侍酒師的筆記本』，找到布根地裡最划算的那一瓶。"

**字幕關鍵詞**:
```
🎓 課程：夏隆內丘與馬貢內（L1・Module 7，共 40 分鐘）
🗺️ 12 個 AOC + 150 座一級園邊界實測
📈 14／14 AOC 氣候資料全齊全

👉 sommeliernotes.com
```

---

## 📋 拍攝清單 Checklist

### 螢幕錄製部分
- [ ] 地圖從伯恩丘平移至夏隆內丘，5 村莊依序高亮
- [ ] 繼續平移至馬貢內，7 個 AOC 依序高亮
- [ ] Rully／Mercurey／Givry／Montagny 一級園圖層依序展開
- [ ] 一級園數字累加動畫（150）
- [ ] 氣候熱力圖 14 個 AOC 同時點亮
- [ ] 年份滑桿拖曳，南北溫度梯度視覺化
- [ ] 氣溫／日照／降雨三指標切換
- [ ] Golden Vintage 徽章彈出動畫
- [ ] 課程卡片與三個子課程標籤展開動畫

**注意**：不要安排「顯示酒莊」按鈕的操作鏡頭——本集無地塊層資料。

### 實拍/素材部分
- [ ] 夏隆內丘丘陵地形空拍（相對金丘更平緩開闊）
- [ ] Bouzeron 阿里哥蝶葡萄串特寫
- [ ] Mâconnais 石灰岩坡地空拍（Pouilly-Fuissé 一帶）
- [ ] 親民價位酒瓶陳列鏡頭（凸顯「性價比」主題）
- [ ] 日常餐搭場景（家常菜配酒）

### 圖形動畫部分
- [ ] 夏隆內丘 5 村莊 + 馬貢內 7 AOC 地理示意動畫
- [ ] 一級園密度比較圖（Montagny 50 座凸顯）
- [ ] 氣候熱力圖南北溫度梯度動畫
- [ ] 關鍵字浮現動畫

---

## 🎨 視覺風格指南

### 色彩方案
- **主色調**: 明亮麥穗黃 `#E0B84E`、清新綠 `#7A9B6E`（區別於前三集的深沉/貴族感，凸顯「親民」定位）
- **輔助色**: 石灰岩米白 `#EDE6D6`
- **強調色**: Bouzeron 阿里哥蝶青綠 `#8FAE7A`

### 節奏
- 整體節奏比前三集更輕快、明亮，避免過度「厚重風土敘事」與定位衝突
- 氣候熱力圖段落可放慢，讓「14/14 全齊全」的完整度成為視覺與資訊上的高潮

---

## 🔧 技術實現要點

```javascript
// 縮放至夏隆內丘與馬貢內（涵蓋兩產區的中點視角）
map.flyTo({
  center: [4.72, 46.55],
  zoom: 10,
  pitch: 30,
  duration: 2200
});

// 依序疊加一級園圖層（示範：Montagny，50 座命名地塊，僅邊界無地塊細分）
map.addSource('montagny-1er-cru', {
  type: 'geojson',
  data: '/bourgogne/geojson/Cote-Chalonnaise/05Montagny/Montagny 1er Cru/AOC Montagny 1er Cru ...geojson'
});

// 氣候熱力圖：本集可直接展示全部 14 個 AOC（無 null 資料）
const chalonnaiseMaconnaisAocs = [
  'AOC Bouzeron', 'AOC Rully', 'AOC Mercurey', 'AOC Givry', 'AOC Montagny',
  'AOC Bourgogne Côte Chalonnaise', 'AOC Bourgogne Côtes du Couchois',
  'AOC Mâcon', 'AOC Mâcon-Villages', 'AOC Pouilly-Fuissé',
  'AOC Pouilly-Vinzelles', 'AOC Pouilly-Loché', 'AOC Saint-Véran', 'AOC Viré-Clessé'
]
chalonnaiseMaconnaisAocs.forEach(aoc => applyClimateColor(climateYear.value, aoc))
```

---

## 📊 腳本效果預期

### 教育價值
- ✅ 補足觀眾對「布根地＝只有金丘」的認知空缺，建立完整的南北地理輪廓
- ✅ 破解「沒聽過的村莊＝不值得認識」的迷思（Montagny 50 座一級園的反差）
- ✅ 唯一一集能完整示範氣候熱力圖的南北梯度比較功能
- ✅ 呼應課程「性價比選購指南」，提供實用選酒邏輯

### 行銷目標
- ✅ 觸及預算有限、剛入門的新用戶，降低系列整體的「高攀感」
- ✅ 為 Level 1 入門課程導流（相對前三集更偏 Level 2/3/4 進階用戶）
- ✅ 展示氣候資料完整度優勢，替補前三集因資料缺口而無法凸顯的功能

---

## 📝 備註事項（重要，務必核對）

### 資料涵蓋範圍的誠實揭露
- **本集沒有酒莊地塊層（「顯示酒莊」功能）可展示**——`DOMAINE_ZONES` 完全不涵蓋夏隆內丘與馬貢內，不要規劃任何地塊點擊/放大的鏡頭語言，也不要在字幕暗示「可查詢單一酒莊地塊」。
- 馬貢內**沒有一級園圖層**（雖然 Pouilly-Fuissé 自 2020 年份起已有官方一級園分級，但本平台目前只有 AOC 層級邊界，沒有對應的一級園 geojson）——腳本已避開，只在夏隆內丘段落做一級園展示。
- Bouzeron 沒有一級園（法規上就是整村單一等級，只產 Aligoté），這是事實而非資料缺口，可以放心當作趣味知識點使用。
- 氣候資料本集是唯二／唯一「全數已填值」的一集，務必在旁白/字幕中凸顯這個相對優勢，呼應前三集反覆出現的「資料缺口」備註，形成系列敘事上的對照趣味。

### 版權注意
- 地圖資料來源：Mapbox, OpenStreetMap contributors；氣候資料來源：`bourgogne-climate.json`
- 親民酒款陳列畫面避免出現可辨識的特定品牌標籤，或需取得授權

---

## 🎯 成功指標

- 完播率: >58%（輕快定位、資訊負擔較低，預期完播率高於前三集）
- 分享次數: 350+
- 對 Level 1 入門課程導流效果為主要成功指標（非 Level 3/4）

---

**製作日期**: 2026-08-10
**版本**: v1.0（布根地系列 Episode 5）
**製作單位**: 侍酒師的筆記本團隊

---

**準備好挖掘布根地最划算的寶藏了嗎？Let's make it happen! 💰**
