# 朗格多克—魯西永（Languedoc-Roussillon）課程框架

> 課程代碼 `languedoc`、課程前綴 `lg-`、分支鏈 `feat/languedoc-*`。僅管理員可見；migration 只準備不套用。

## 1. 結構（3 階段 16 課）
- **Level 1（5）**：lg-l1-1 歷史、lg-l1-2 地理與氣候、lg-l1-3 品種、lg-l1-4 法規與標籤、lg-l1-5 評量
- **Level 2（6）**：lg-l2-1 Languedoc 西部（Corbières、Minervois、Fitou、Cabardès、Malepère）、lg-l2-2 Limoux／Saint-Chinian／Faugères、lg-l2-3 Languedoc 中東部、lg-l2-4 Roussillon 干型酒、lg-l2-5 Roussillon VDN、lg-l2-6 評量
- **Level 3（5）**：lg-l3-1 栽培與氣候、lg-l3-2 釀造與風土深度、lg-l3-3 產業與市場、lg-l3-4 法規演變與 Diploma 論述、lg-l3-5 評量

## 2. 查證原則
- 事實取自 WebSearch／WebFetch 查得的來源（Wine With Seth winewiki、Decanter、Wikipedia、產區官方網站等），數字一律標註來源。
- 來源有出入者於課內標明、不進測驗。
- 英文與日文以 overlay 提供；新增字串須有 en／ja。

## 3. 互動功能（階段 E 計畫）
示意點地圖（無授權邊界時）、4 款遊戲、品飲筆記（`lg_*`）、成就、詞彙（region `languedoc`）、氣候腳本（北半球 4–10 月）。

## 4. 完成狀態

- 課程內容：16 課（L1 5／L2 6／L3 5），en／ja 完成；有來源衝突的數字僅於課文標註，不入測驗。
- 互動功能：22 個示意點地圖、遊戲（產區速答、制度比例、分類）、品飲筆記（12 種酒型）、31 項成就、術語表 31 筆、UI 字典 683 條（en／ja）。
- 課程維持僅管理員可見。
- 未套用的遷移檔：`20261102000000_add_languedoc_course.sql`、`20261102000100_add_languedoc_tasting_types.sql`、`20261102000200_add_languedoc_glossary.sql`。
- 待辦：氣候資料 `public/data/languedoc-climate.json`（Open-Meteo 額度恢復後執行 `node scripts/build-languedoc-climate.mjs --delay=1200 --merge`）。
