# 🇦🇷 阿根廷葡萄酒課程設計（Diploma D3／MW 備考導向）

> 狀態：設計稿（2026-10-29），分支 `feat/argchile-design`（與智利設計稿共用）（未合併，從 master 切出）。阿根廷與智利為**各自獨立的課程**（使用者決定拆開，2026-10-29）
> 課程代號：`argentina`；課程 ID 前綴 `ar-l{階段}-{序號}`，沿用 Greece／Rhône／Champagne／Austria／South Africa／usother 骨架
> 所有 ⚠ 標記的數字與規定，製作時必須查證，來源有出入者課內標明、不進測驗。

## 1. 定位與設計原則

- **對象**：準備 WSET Diploma（D3）並延伸至 MW 的學習者。
- **教學主軸**：安地斯山脈東麓的高海拔沙漠葡萄栽培（融雪灌溉、日夜溫差、Zonda 風與冰雹）；Mendoza 為中心的 Malbec 風土（Luján de Cuyo、Uco Valley 的海拔與石灰質）；Torrontés 與北部極端高海拔（Salta、Cafayate）；Patagonia 冷涼；IG／DOC 制度。
- 與智利課程互補：山的另一側、同樣的沙漠灌溉邏輯，但制度與品種結構不同；共通概念各課自足，只做簡短連結。

## 2. 課程結構（3 階段 14 課）

### Level 1 - 入門（5 課）
- `ar-l1-1` 阿根廷葡萄酒概覽：歷史（殖民傳入、Pouget 與 Malbec、1990s 現代化）（15 分）
- `ar-l1-2` 地理與氣候：安地斯山脈、海拔、沙漠灌溉、Zonda 風（16 分）
- `ar-l1-3` 品種：Malbec、Bonarda、Cabernet Sauvignon、Torrontés、Chardonnay、Criolla／Cereza 等（16 分）
- `ar-l1-4` 法規與標籤：IG／DOC、品種與年份標示（18 分）
- `ar-l1-5` Level 1 綜合評量（25 分）

### Level 2 - 產區與法規（5 課）
- `ar-l2-1` Mendoza I：概覽、GI 層級、Luján de Cuyo、Maipú（22 分）
- `ar-l2-2` Mendoza II：Uco Valley（Tupungato、Tunuyán、San Carlos；Gualtallary、Paraje Altamira、La Consulta）（22 分）
- `ar-l2-3` 北部：Salta（Cafayate）、Catamarca、La Rioja、Jujuy（20 分）
- `ar-l2-4` San Juan、San Rafael、Patagonia（Río Negro、Neuquén）與其他（20 分）
- `ar-l2-5` Level 2 綜合評量（25 分）

### Level 3 - Diploma／MW 精修（4 課）
- `ar-l3-1` 栽培與氣候：霜害、冰雹、Zonda 風、灌溉權與乾旱、有機與永續（22 分）
- `ar-l3-2` 釀造與風土深度：Malbec 海拔與土壤風格比較、Torrontés、氣泡酒、混調（22 分）
- `ar-l3-3` 產業、市場與 Diploma 品飲論述（盲品線索、MW 論述範本）（22 分）
- `ar-l3-4` Level 3 綜合評量（12 題，及格 60）（25 分）

> 課數比 21 課少是刻意的：單一國家的內容量約 14 課，不灌水。若製作中內容超出，再於該階段增課。

## 3. 各課重點與 ⚠ 查證清單

| 課 | 重點 | ⚠ 必須查證 |
|---|---|---|
| ar-l1-1 | Pouget 1853 引入 Malbec（⚠）、移民潮、1990s 轉型與出口 | 人名與年份 |
| ar-l1-2 | 海拔範圍、年降雨、日夜溫差、融雪灌溉、Zonda 風 | 各產區氣溫、降雨、海拔 |
| ar-l1-3 | 各品種面積與比例 | INV、Wines of Argentina 最新統計 |
| ar-l1-4 | IG／DOC 規則、品種與年份最低比例 | **標示比例與 DOC 清單（INV 法規原文）** |
| ar-l2-1/2 | Mendoza GI 層級（Zone → Department → District）、Luján de Cuyo DOC | 次產區官方名稱與清單 |
| ar-l2-3 | Cafayate 海拔約 1,700–3,100 m | 海拔與面積 |
| ar-l3-1 | 冰雹、Zonda、灌溉權 | 年份與影響（官方或權威媒體） |

## 4. 互動功能設計

- **互動地圖**：阿根廷 GI／Zone／Department／District 邊界。⚠ 來源待查（INV、IGN／IDE Argentina、OpenStreetMap），**授權條款需先確認**；取不到者退回示意點並明標非官方邊界（比照 South Africa）。分區群組：Cuyo、北部、Patagonia。
- **氣候圖層**：Open-Meteo 以代表點產生 1981–2010 基準，與其他課程一致；⚠ 南半球生長季為 10–4 月，沿用 South Africa 做法並於課內標明；海拔另行標示，不做氣溫校正。
- **遊戲**（`game_type` 前綴 `ar_`）：產區速答、品種配對、制度與標籤比例辨識、知識閃問。
- **品飲筆記**：`source='argentina'`，含 Mendoza Malbec、阿根廷其他紅、Torrontés、阿根廷其他白酒、Bordeaux 型混調、氣泡酒、甜酒等。
- **成就、詞彙**：詞彙新增 `argentina`（第三語欄位沿用英文）；成就約 20–25 個。

## 5. 技術落點（比照已完成課程）

- `src/components/argentina/`、`src/data/argentina/ar-l*.js`、`src/stores/argentinaLearningStore.js`、`argentinaAchievementSystem.js`
- 共用接點：`courseProgressSync.js`、`lessonContentLoader.js`、`router/index.js`（`/argentina`，`requiresAdmin`）、`PlatformHome.vue`（`ADMIN_ONLY_COURSES` 加 `'argentina'`）、`regionThemes.js`、`useAchievements.js`、`WineGlossary.vue`、`AdminGlossary.vue`
- UI 字典 `src/locales/argentinaUi/`（`gt()`）、lesson overlay `src/locales/{en,ja}/lessons/argentina/*.json`
- 發音音檔：沿用 master 已啟用的地圖發音機制。
- migration 只準備不套用：`courses` 新增 `argentina`（`active=false`）、wine_type 擴充與詞彙 region CHECK（保留所有既有值）。⚠ 兩門課的 migration 版本號不可重複，且須接在 usother 之後。

## 6. 實作階段（建議）

| 階段 | 內容 | 分支 |
|---|---|---|
| A | 框架 | `feat/argentina-course-framework` |
| B | Level 1 | `feat/argentina-l1` |
| C | Level 2 | `feat/argentina-l2` |
| D | Level 3 | `feat/argentina-l3` |
| E | 地圖、氣候、遊戲、筆記、成就、詞彙 | `feat/argentina-interactive` |
| F | 全面檢查、migration 準備 | `feat/argentina-final` |

## 7. 資料來源與待查證

- INV（inv.gov.ar）、Wines of Argentina、IGN／IDE Argentina、OIV 統計
- ⚠ 已知需交叉確認：標示最低比例、DOC／GI 清單與層級、面積與品種比例、地圖邊界來源與授權
- WSET／CMS 教材、Jancis Robinson、Wine Folly（僅作交叉檢查）；使用者 Google Drive 中的相關筆記（若有）

## 8. 待使用者確認的決定

1. 結構 3 階段 14 課，可嗎？
2. 地圖若找不到官方邊界，可接受示意點嗎？
3. 課程先只給管理員（沿用現行規則）？

## 9. 完成狀態（階段 F）

| 項目 | 狀態 |
|---|---|
| 14 堂課（L1 5、L2 5、L3 4）含 en／ja | 完成；L1 評量 12 題、L3 評量 12 題 |
| 互動地圖 | 完成：23 個示意點（Mendoza 9、San Juan＋San Rafael 4、北部 7、Patagonia 3），**非官方邊界**；邊界資料未取得授權，採示意點 |
| 氣候圖層 | 腳本 `scripts/build-argentina-climate.mjs`（10–4 月生長季、基準 1981–2010）已備；**資料檔 `public/data/argentina-climate.json` 尚未產生**（Open-Meteo 免費額度每日限制，需另行執行） |
| 遊戲 | 產區速答、品種配對、制度辨識快答、知識閃問（取自課程題庫），`game_type` 前綴 `ar_` |
| 品飲筆記 | 11 種酒款類型（`ar_*`），`source='argentina'` |
| 成就、詞彙 | 31 個成就；詞彙 24 條（region `argentina`） |
| 翻譯 | 介面字典 en／ja 663 條，缺漏為 0 |
| 發音 | 尚無 `/argentina/sounds` 音檔，地圖不顯示播放鈕 |

### 尚未套用的 migration（需手動套用，且依序）
1. `20261031000000_add_argentina_course.sql`（課程列，`active=false`、`show_on_home=false`，維持僅管理員）
2. `20261031000100_add_argentina_tasting_types.sql`（wine_type CHECK 含先前全部值，另含 `us_*`）
3. `20261031000200_add_argentina_glossary.sql`（glossary region CHECK 含 `usother`）

⚠ 第 2、3 支重寫 CHECK，已包含美國其他產區（`us_*`、`usother`）的值；若尚未套用美國其他產區的 migration，多出的值無害。Chile 課程的同類 migration 必須再加入 `ar_*`／`argentina`。

### 合併前注意
- `PlatformHome.vue` 的 `ADMIN_ONLY_COURSES` 在 usother／argentina／chile 三條分支各改同一行，合併時會衝突，需手動併成 `[..., 'southafrica', 'usother', 'argentina', 'chile']`。
- `useAchievements.js`、`WineGlossary.vue`、`AdminGlossary.vue`、`regionThemes.js`、`router/index.js`、`lessonContentLoader.js`、`courseProgressSync.js` 亦與其他新課程分支有鄰近行衝突。

### 已查證但來源不一而未列入測驗的項目
Cedrón 首批葡萄地點、Pouget 年份（僅單一來源 1853）、Catena Adrianna 1992／1994、Luján de Cuyo DOC 起始年（1989／1991／1993）、San Rafael DOC（2007 或 1990 年代）、Catamarca 面積 708／747 公頃、Patagonia 緯度 38／39、海拔降溫率 0.6／0.8°C／100 公尺、標示比例（85% 對舊資料 100%／80%）、IG 總數、各項面積與出口數字（年度會變動）。
