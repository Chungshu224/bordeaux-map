# 西南產區（Sud-Ouest）課程框架

> 課程代碼 `southwest`、課程前綴 `sw-`、分支鏈 `feat/southwest-*`。僅管理員可見；migration 只準備不套用。

## 1. 結構（3 階段 16 課）
- **Level 1（5）**：sw-l1-1 歷史、sw-l1-2 地理與氣候、sw-l1-3 品種、sw-l1-4 法規與標籤、sw-l1-5 評量
- **Level 2（6）**：sw-l2-1 Bergerac 與 Dordogne（Bergerac、Pécharmant、Monbazillac、Saussignac、Montravel、Côtes de Duras）、sw-l2-2 Cahors 與 Lot／Garonne 河谷（Cahors、Marcillac、Buzet、Côtes du Marmandais）、sw-l2-3 Gaillac 與 Fronton、sw-l2-4 Gascogne（Madiran、Pacherenc du Vic-Bilh、Saint-Mont、Côtes de Gascogne IGP、Armagnac）、sw-l2-5 比利牛斯山麓（Jurançon、Béarn、Irouléguy）、sw-l2-6 評量
- **Level 3（5）**：sw-l3-1 栽培與氣候、sw-l3-2 釀造與風土深度、sw-l3-3 產業與市場、sw-l3-4 法規演變與 Diploma 論述、sw-l3-5 評量

## 2. 查證原則
- 事實取自 WebSearch／WebFetch 查得的來源（Wine With Seth winewiki、Decanter、Wikipedia、各產區公會等），數字一律標註來源。
- 來源有出入者於課內標明、不進測驗。
- 英文與日文以 overlay 提供；新增字串須有 en／ja。

## 3. 互動功能（階段 E 計畫）
示意點地圖（無授權邊界時）、遊戲、品飲筆記（`sw_*`）、成就、詞彙（region `southwest`）、氣候腳本（北半球 4–10 月）。

## 4. 完成狀態

- 課程內容：16 課（L1 5／L2 6／L3 5），en／ja 完成；有來源衝突的數字僅於課文標註，不入測驗。
- 互動功能：24 個示意點地圖（4 個產區群）、遊戲（產區速答、品種配對、制度辨識、知識閃問）、品飲筆記（11 種酒型 sw_*）、31 項成就、術語表 30 筆、UI 字典 657 條（en／ja）。
- 課程維持僅管理員可見。
- 未套用的遷移檔：`20261103000000_add_southwest_course.sql`、`20261103000100_add_southwest_tasting_types.sql`、`20261103000200_add_southwest_glossary.sql`。
- 待辦：氣候資料 `public/data/southwest-climate.json`（Open-Meteo 額度恢復後執行 `node scripts/build-southwest-climate.mjs --delay=1200 --merge`）。
- 分支鏈：feat/southwest-design → -l1 → -l2 → -l3 → -interactive → -final；尚未合併，等待「合併」指示。
