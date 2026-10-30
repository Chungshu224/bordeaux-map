# 加拿大葡萄酒課程框架

> 課程代碼 `canada`、課程前綴 `can-`（避開 `ca-`＝California、`cl-`＝Chile）、分支鏈 `feat/canada-*`。僅管理員可見；migration 只準備不套用。對應 WSET Diploma D3（Wines of the World）。

## 1. 結構（3 階段 18 課）
- **Level 1（5）**：can-l1-1 認識加拿大葡萄酒（歷史）、can-l1-2 地理、氣候與土壤、can-l1-3 品種、can-l1-4 VQA 與標示制度、can-l1-5 評量
- **Level 2（8）**：can-l2-1 Ontario 總覽、can-l2-2 Niagara Peninsula 次產區、can-l2-3 Okanagan Valley、can-l2-4 BC 的其他產區、can-l2-5 Nova Scotia、can-l2-6 Quebec 與其他省分、can-l2-7 冰酒、氣泡酒與風格、can-l2-8 評量
- **Level 3（5）**：can-l3-1 栽培與氣候變遷、can-l3-2 冰酒與釀造工藝、can-l3-3 產業與市場、can-l3-4 法規演變與 Diploma 論述、can-l3-5 評量

## 2. 目前狀態與查證原則
- 本階段（設計）只建立框架：頁面、路由、18 課空殼、首頁卡片（僅管理員）、en／ja 介面字典。**尚未做資料查證，課程空殼內不含任何事實性數字。**
- 事實與數字於各階段製作課程時，以 WebSearch／WebFetch 查官方來源（VQA Ontario、BC Wine Authority、Wine Growers Canada、Statistics Canada 等）後才寫入，並標註來源；來源有出入者於課內標明、不進測驗。
- 英文與日文以 overlay 提供；新增字串須有 en／ja。
- 範圍界線：美國 Washington／Oregon 等屬美國課程；本課只談加拿大。

## 3. 技術備註
- 資料：`src/data/canada/`、`src/locales/{en,ja}/lessons/canada/`；store：`src/stores/canadaLearningStore.js`；UI 字典：`src/locales/canadaUi/`。
- 進度同步：`courseProgressSync.js` 的 `saveCanadaLesson`／`loadAndMergeCanadaProgress`（course id `canada`）。
- Migration：`supabase/migrations/20261106000000_add_canada_course.sql`（active=false、show_on_home=false；**由使用者自行套用**）。
- 公開時：移除路由 `requiresAdmin`、PlatformHome 的 `ADMIN_ONLY_COURSES` 移除 `canada`、執行 migration 末尾註解的 UPDATE。
- 後續階段：Level 1 → Level 2 → Level 3 → 互動（地圖、遊戲、品飲、成就、詞彙）→ 總結。
