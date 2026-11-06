# 瑞士葡萄酒課程框架

> 課程代碼 `switzerland`、課程前綴 `swi-`（避開 `sw-`＝Southwest、`ch-`＝Chile、`sm-`＝Sommelier）、路由 `/switzerland`、分支鏈 `feat/swiss-*`。僅管理員可見、不對外販售；migration 只準備不套用。
> **定位**：延伸課程。WSET Diploma D3 的範圍不含瑞士（見 `SWISS_FACT_CHECK.md` A），本課用於擴充視野、D6 研究與論述對照（小產區、高成本、內銷型市場、本土品種保存）。

## 1. 結構（3 階段 18 課）
- **Level 1（5）**：swi-l1-1 認識瑞士葡萄酒（歷史）、swi-l1-2 地理、氣候與六大產區、swi-l1-3 品種總覽（Chasselas、Pinot Noir、Gamay、Merlot、本土品種）、swi-l1-4 州級 AOC／AOP 制度與標示、swi-l1-5 評量
- **Level 2（8）**：swi-l2-1 Valais 總覽、swi-l2-2 Valais 的 Grand Cru 與本土品種（Petite Arvine、Amigne、Humagne、Cornalin、Heida、Rèze）、swi-l2-3 Vaud：Lavaux、Dézaley 與 Calamin、swi-l2-4 Vaud 的 La Côte、Chablais 與北部、swi-l2-5 Geneva 與 Three Lakes、swi-l2-6 Ticino 與 Merlot、swi-l2-7 德語區（Graubünden、Zürich、Schaffhausen 等）、swi-l2-8 評量
- **Level 3（5）**：swi-l3-1 栽培：陡坡、石牆梯田與氣候、swi-l3-2 釀造與風格（Chasselas 風格、Dôle、Œil-de-Perdrix、Vin des Glaciers、甜酒）、swi-l3-3 市場：內銷型產業與出口悖論、swi-l3-4 法規演變與 Diploma 論述、swi-l3-5 綜合評量

## 2. 目前狀態與查證原則
- 本階段（設計）只建立框架與查證表：**不含程式、頁面、migration**；程式與課程內容於各階段製作。
- 事實與數字於各階段以官方來源查證後才寫入（swisswine.com、OFAG、各州 AOC 規章、UNESCO、Decanter／GuildSomm 等）；來源有出入者課內標明、不進測驗；數字類一律不出題（見查證表 F）。
- 範圍界線：Alsace、德國 Baden 等鄰近產區屬各自課程；本課只談瑞士，鄰國僅作對照。
- 英文與日文以 overlay 提供。

## 3. 技術備註（沿用 Canada 模板）
- 資料：`src/data/switzerland/`（lessons.js、content.js、level{1,2,3}Content.js、gameData.js、mapData）；`src/locales/{en,ja}/lessons/switzerland/`；UI 字典 `src/locales/switzerlandUi/`。
- Store：`src/stores/switzerlandLearningStore.js`；進度同步：`courseProgressSync.js` 新增 `saveSwitzerlandLesson`／`loadAndMergeSwitzerlandProgress`（course id `switzerland`）。
- 路由 `/switzerland`（requiresAuth＋requiresAdmin）；PlatformHome `ADMIN_ONLY_COURSES` 加入 `switzerland`；`PricingPage.vue` `NOT_FOR_SALE_IDS` 加入 `switzerland`；`regionThemes.js` 新增主題（以白／紅的阿爾卑斯色系）。
- Migration（只準備）：`add_switzerland_course.sql`（active=false、show_on_home=false、price 0）；`tasting_notes` wine_type／`wine_glossary` region 的 CHECK 重寫須包含所有既有值（含 canada、sparkling、fortified、d1）；**由使用者比對線上 CHECK 後自行套用**。
- 公開時：移除路由 `requiresAdmin`、`ADMIN_ONLY_COURSES`、`NOT_FOR_SALE_IDS` 的 `switzerland`，並執行 migration 末尾註解的 UPDATE。

## 4. 互動階段（後續）
- 階段 A：Level 1 課程內容＋框架核對；B：Level 2；C：Level 3；D：互動（Mapbox 地圖：六大產區／Valais Grand Cru／Lavaux；遊戲：產區配對、本土品種辨識、制度排序）；E：品飲筆記本、成就、詞彙；F：整合、smoke test、en／ja。
- 完成狀態：設計階段完成（框架＋查證表）；其餘階段待指令。

## 5. 風險與待決
- Valais Grand Cru 數目（10 或 12）、Lavaux 次產區計法：來源不一致，課內標明。
- 瑞士統計（面積、品種占比、出口比例）隨年度變動：只講結構與趨勢。
- 不確定的 DNA／親緣說法（Gamaret／Garanoir 親本、Humagne Rouge＝Cornalin d'Aoste）：製作時以 Wine Grapes／VIVC 核對。
