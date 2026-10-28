# 🇨🇱 智利葡萄酒課程設計（Diploma D3／MW 備考導向）

> 狀態：設計稿（2026-10-29），分支 `feat/argchile-design`（與阿根廷設計稿共用）（未合併，從 master 切出）。智利與阿根廷為**各自獨立的課程**（使用者決定拆開，2026-10-29）
> 課程代號：`chile`；課程 ID 前綴 `cl-l{階段}-{序號}`，沿用 Greece／Rhône／Champagne／Austria／South Africa／usother 骨架
> 所有 ⚠ 標記的數字與規定，製作時必須查證，來源有出入者課內標明、不進測驗。

## 1. 定位與設計原則

- **對象**：準備 WSET Diploma（D3）並延伸至 MW 的學習者。
- **教學主軸**：縱向長條地形與 Humboldt 寒流；海岸山脈與安地斯夾出的 Costa／Entre Cordilleras／Andes 新分區；Cabernet Sauvignon（Maipo）、Carmenère 的重新發現（1994）、Carignan／VIGNO 老藤；Casablanca／Leyda／Limarí 的冷涼白酒與 Pinot Noir；DO 制度。
- 與阿根廷課程互補：山的另一側；共通概念各課自足，只做簡短連結。

## 2. 課程結構（3 階段 14 課）

### Level 1 - 入門（5 課）
- `cl-l1-1` 智利葡萄酒概覽：歷史（殖民傳入、19 世紀法國品種、Carmenère 1994 確認）（15 分）
- `cl-l1-2` 地理與氣候：縱向地形、安地斯與海岸山脈、Humboldt 寒流、灌溉（16 分）
- `cl-l1-3` 品種：Cabernet Sauvignon、Carmenère、Merlot、País、Carignan、Sauvignon Blanc、Chardonnay、Pinot Noir（16 分）
- `cl-l1-4` 法規與標籤：DO 層級與 Costa／Entre Cordilleras／Andes（18 分）
- `cl-l1-5` Level 1 綜合評量（25 分）

### Level 2 - 產區與法規（5 課）
- `cl-l2-1` Aconcagua 區：Aconcagua Valley、Casablanca、San Antonio／Leyda（22 分）
- `cl-l2-2` Central Valley I：Maipo、Cachapoal（22 分）
- `cl-l2-3` Central Valley II：Colchagua（Apalta）、Curicó、Maule（22 分）
- `cl-l2-4` 北部與南部：Elqui、Limarí、Choapa；Itata、Bío-Bío、Malleco（20 分）
- `cl-l2-5` Level 2 綜合評量（25 分）

### Level 3 - Diploma／MW 精修（4 課）
- `cl-l3-1` 栽培與氣候：自根苗、乾旱與灌溉權、地震、野火、有機與永續（22 分）
- `cl-l3-2` 釀造與風土深度：Carmenère 成熟度、Maipo Cabernet、VIGNO／Carignan、Costa vs Andes（22 分）
- `cl-l3-3` 產業、市場與 Diploma 品飲論述（盲品線索、MW 論述範本）（22 分）
- `cl-l3-4` Level 3 綜合評量（12 題，及格 60）（25 分）

> 課數比 21 課少是刻意的：單一國家的內容量約 14 課，不灌水。若製作中內容超出，再於該階段增課。

## 3. 各課重點與 ⚠ 查證清單

| 課 | 重點 | ⚠ 必須查證 |
|---|---|---|
| cl-l1-1 | 19 世紀引入、Carmenère 誤認為 Merlot 至 1994 確認 | 人名與年份 |
| cl-l1-2 | Humboldt 寒流、海岸山脈雨影、灌溉 | 各產區氣溫與降雨 |
| cl-l1-3 | 各品種面積與比例 | SAG、Wines of Chile 最新統計 |
| cl-l1-4 | DO 層級（Región → Subregión → Zona → Área）、Costa／Entre Cordilleras／Andes、標示 75% 規則 | **DO 清單、新分區法規地位、標示比例（法規原文）** |
| cl-l2-1–2-4 | 各 DO 範圍與代表次產區 | DO 官方清單 |
| cl-l3-1 | 自根苗現況、野火與地震年份影響 | 年份與影響（官方或權威媒體） |
| cl-l3-2 | VIGNO 規則（Carignan 比例、年齡、乾燥栽培） | 協會規則原文 |

## 4. 互動功能設計

- **互動地圖**：智利 DO（Región／Subregión／Zona／Área）邊界。⚠ 來源待查（IDE Chile、ODEPA／SAG、OpenStreetMap），**授權條款需先確認**；取不到者退回示意點並明標非官方邊界（比照 South Africa）。分區群組：北部、中部、南部；Costa／Entre Cordilleras／Andes 可作為篩選。
- **氣候圖層**：Open-Meteo 以代表點產生 1981–2010 基準，與其他課程一致；⚠ 南半球生長季為 10–4 月，沿用 South Africa 做法並於課內標明；海拔另行標示，不做氣溫校正。
- **遊戲**（`game_type` 前綴 `cl_`）：產區速答、品種配對、制度與標籤比例辨識、知識閃問。
- **品飲筆記**：`source='chile'`，含 Maipo／Colchagua Cabernet、Carmenère、智利其他紅、Casablanca／Leyda 白酒、智利其他白酒、智利 Pinot Noir、氣泡酒、甜酒等。
- **成就、詞彙**：詞彙新增 `chile`（第三語欄位沿用英文）；成就約 20–25 個。

## 5. 技術落點（比照已完成課程）

- `src/components/chile/`、`src/data/chile/cl-l*.js`、`src/stores/chileLearningStore.js`、`chileAchievementSystem.js`
- 共用接點：`courseProgressSync.js`、`lessonContentLoader.js`、`router/index.js`（`/chile`，`requiresAdmin`）、`PlatformHome.vue`（`ADMIN_ONLY_COURSES` 加 `'chile'`）、`regionThemes.js`、`useAchievements.js`、`WineGlossary.vue`、`AdminGlossary.vue`
- UI 字典 `src/locales/chileUi/`（`gt()`）、lesson overlay `src/locales/{en,ja}/lessons/chile/*.json`
- 發音音檔：沿用 master 已啟用的地圖發音機制。
- migration 只準備不套用：`courses` 新增 `chile`（`active=false`）、wine_type 擴充與詞彙 region CHECK（保留所有既有值）。⚠ 兩門課的 migration 版本號不可重複，且須接在 usother 之後。

## 6. 實作階段（建議）

| 階段 | 內容 | 分支 |
|---|---|---|
| A | 框架 | `feat/chile-course-framework` |
| B | Level 1 | `feat/chile-l1` |
| C | Level 2 | `feat/chile-l2` |
| D | Level 3 | `feat/chile-l3` |
| E | 地圖、氣候、遊戲、筆記、成就、詞彙 | `feat/chile-interactive` |
| F | 全面檢查、migration 準備 | `feat/chile-final` |

## 7. 資料來源與待查證

- SAG、ODEPA、Wines of Chile、IDE Chile、OIV 統計
- ⚠ 已知需交叉確認：DO 清單與層級、新分區法規地位、標示最低比例、VIGNO 規則、面積與品種比例、地圖邊界來源與授權
- WSET／CMS 教材、Jancis Robinson、Wine Folly（僅作交叉檢查）；使用者 Google Drive 中的相關筆記（若有）

## 8. 待使用者確認的決定

1. 結構 3 階段 14 課，可嗎？
2. 地圖若找不到官方邊界，可接受示意點嗎？
3. 課程先只給管理員（沿用現行規則）？
