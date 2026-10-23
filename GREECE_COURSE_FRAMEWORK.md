# 🇬🇷 希臘葡萄酒課程框架（Diploma 備考導向）

> 狀態：頁面、路由、進度、21 課大綱已就緒。**Level 1（6 課）、Level 2（8 課）、Level 3（7 課）皆已完成正式內容**（含測驗與 en/ja）。
> 分支：`feat/greece-course-framework`（未合併）

## 結構

### Level 1 - 希臘葡萄酒入門（6 課）
建立希臘葡萄酒基礎：歷史、地理氣候、本土品種與六大產區

- **GR1M1 歷史、地理與栽培**
  - `gr-l1-1` 認識希臘葡萄酒（15 分）
  - `gr-l1-2` 地理、氣候與葡萄栽培（16 分）
- **GR1M2 葡萄品種**
  - `gr-l1-3` 主要白葡萄品種（18 分）
  - `gr-l1-4` 主要紅葡萄品種（16 分）
- **GR1M3 產區總覽與評量**
  - `gr-l1-5` 希臘產區總覽（18 分）
  - `gr-l1-6` Level 1 綜合評量（25 分）

### Level 2 - 希臘產區與法規（8 課）
逐區掌握 PDO／PGI 法規、各產區風格與甜酒傳統

- **GR2M1 分級制度**
  - `gr-l2-1` 分級制度：PDO、PGI 與傳統名稱（20 分）
- **GR2M2 北部與伯羅奔尼撒**
  - `gr-l2-2` 馬其頓與色薩利（20 分）
  - `gr-l2-3` 伯羅奔尼撒（20 分）
- **GR2M3 島嶼產區**
  - `gr-l2-4` 聖托里尼與愛琴海島嶼（22 分）
  - `gr-l2-5` 克里特與愛奧尼亞群島（20 分）
- **GR2M4 其餘產區、甜酒與評量**
  - `gr-l2-6` 伊庇魯斯、中希臘、色雷斯與 Retsina（18 分）
  - `gr-l2-7` 甜酒與傳統酒款（18 分）
  - `gr-l2-8` Level 2 綜合評量（30 分）

### Level 3 - 希臘葡萄酒 Diploma 精修（7 課）
以 WSET Diploma 為目標：栽培釀造深度、風土比較、法規判讀、產業與應考技巧

- **GR3M1 栽培與釀造**
  - `gr-l3-1` 葡萄栽培深度（22 分）
  - `gr-l3-2` 釀造與風格（22 分）
- **GR3M2 風土、品種與法規**
  - `gr-l3-3` 風土比較與品種剖析（24 分）
  - `gr-l3-4` 法規深度與標籤判讀（22 分）
- **GR3M3 產業、應考與評量**
  - `gr-l3-5` 產業、市場與貿易（20 分）
  - `gr-l3-6` Diploma 品飲與論述（25 分）
  - `gr-l3-7` Level 3 綜合評量（35 分）

## 已完成的框架項目
- 路由 `/greece`（`COURSE_ACCESS_RULES`：free）、`PlatformHome` 卡片（預設**未上架**，僅 admin 可見）、主題色、en/ja/zh-TW 文案
- `src/components/greece/`：`GreecePage`、`GreeceLevelSelector`（3 階段）、`GreeceLearningSystem`、`GreeceCourseLayout`
- `greeceLearningStore`（進度存 localStorage，並透過 `courseProgressSync` 同步 Supabase，課程代號 `greece`）
- 21 課資料 `src/data/greece/gr-l*.js`＋en/ja 翻譯 `src/locales/{en,ja}/lessons/greece/`
- 共用 `LevelTrack` 新增選用屬性 `maxColumns`（預設 2，不影響其他課程）

## Level 1 內容說明
- 每課 4 張內容投影片＋知識檢測，gr-l1-6 為 8 題綜合評量（及格 60）
- 事實來源：Wines of Greece（33 PDO／114 PGI）、WineWithSeth（300+ 本土品種、品種與土壤細節）、Drive 筆記；PDO 分區以官方地圖為準（4＋4＋7＋3＋8＋7＝33）
- 刻意未寫入：PDO 100%／PGI 比例、Reserve 陳年月數（留待 Level 2 查證；來源間 PGI 比例有 80%／85% 之別，EU 條文為 85%，仍須對官方文件確認）
- 「六大地理區」為教學分法，非官方行政區

## Level 2 內容說明與查證註記
- 每課 3–4 張內容投影片＋知識檢測；gr-l2-8 為重點回顧＋10 題綜合評量
- PGI 來源比例採 **85%**（WineWithSeth、CMS 一致；Vinepair 寫 80%，視為少數說法）
- ⚠ 來源有出入、**課程內已標明且未納入測驗**：
  - ✅ 已解決：Santorini 乾白 Assyrtiko 最低比例採 **85%**（Wines of Greece 官方 PDO 頁面；CMS 2018 的 75% 視為舊資料），Athiri／Aidani 合計最多 15%
  - Reserve／Grand Reserve 陳年：WineWithSeth 與 CMS 的累計年數一致（白 2／3 年，紅 3／4 年），CMS 另列桶／瓶月數；你 2022 年筆記（白 1 年／紅 2 年等）與上述不同，可能為舊制或不同口徑 → 須以官方法規定稿
  - Naoussa 分級陳年已在 Level 3 寫入（標準 ≥1 年橡木；Reserve 紅 ≥3 年且橡木 ≥6 個月；Grand Reserve ≥48 個月＝24 橡木＋24 瓶陳），與 CMS 紅酒通則一致；仍建議對照官方產品規格
- 其他取自 Wines of Greece／WineWithSeth／CMS：Mantineia ≥85% Moschofilero、Goumenissa Negoska ≥20%、Anchialos ≥80% Roditis、Messenikola ≥70% Mavro Messenikola、Sitia 紅 ≥80% Liatiko／白 ≥70% Vilana、Mavrodaphne of Patras ≥51%、Vinsanto ≥51% Assyrtiko 與 ≥24 個月橡木、Nykteri ≥13.5% 與 ≥3 個月橡木
- Paros 的 Malvasia Paros 依官方 PDO 地圖列入；Wines of Greece 的 Paros 頁只列乾白與乾紅

## Level 3 內容說明與查證註記
- 7 課：栽培深度、釀造與風格、風土比較、法規與標籤判讀、產業與貿易、Diploma 品飲與論述、綜合評量（12 題，及格 60）
- 數字來源：葡萄園面積 64,020 公頃（希臘農業部，2022 年 7 月；取代舊來源的約 9.6 萬公頃）、2022 年產量約 210 萬百升、2023 年出口約 9,970 萬歐元／28,853 公噸／歐盟占 86.6%（Hellenic Statistical Authority 經 To Vima）、散裝約 50%、PDO＋PGI 約三成（KEOSOE，2023）、Santorini Assyrtiko 2,500 → 500 公噸（Reuters，2026 年 6 月）
- D3 考試形式取自 Napa Valley Wine Academy，課內已提醒以 WSET 官方最新規格為準
- 綜合評量刻意避開仍有出入的數字（如 Reserve 月數）

## 互動地圖（33 PDO）
- 資料：Bianchi et al. (2022) *A geospatial inventory of regulatory information for wine protected designations of origin in Europe*, Scientific Data（Figshare，CC0）；取其中 `PDO-GR-*` 共 33 筆，EPSG:3035 → WGS84，簡化約 30 m，輸出 `public/greece/greece_pdo.geojson`（約 380 KB）
- 屬性：英文／希臘文名稱、六大地理區、登記日、範圍面積、酒款、品種、說明（品種與規範數字與 Level 2 一致）
- 33 個與課程分區完全對得上：馬其頓 4、伊庇魯斯與色薩利 4、伯羅奔尼撒 7、愛奧尼亞 3、愛琴海 8、克里特 7
- 範圍完全相同的組合：Lemnos／Muscat of Lemnos、Paros／Malvasia Paros、Sitia／Malvasia Sitia、Candia／Malvasia Candia（點選時顯示「同一範圍另有」；重疊處點擊取面積較小者）
- 元件：`src/components/greece/GreeceMapPage.vue`（Mapbox，共用 regionMap 元件；3D、等高線、搜尋抽屜）；`RegionMapLayerPanel` 新增 `hideClimate` 屬性；課程首頁「地圖」已啟用
- 限制：該資料集為 2021 年前登記的名單，與目前官方名單若有出入以官方為準；邊界為資料集原始範圍，非各 PDO 完整的法定描述；Candia 的規範細節未寫入
- 尚無氣候圖層、地質圖層、發音；地圖頁文字目前僅繁體中文（與匈牙利地圖頁一致）

## 互動遊戲
- 入口：課程首頁「品種配對・產區速答」→ `GreeceGameHubPage`（沿用共用 `GameHub`）
- 共用引擎 `games/GreeceQuizEngine.vue`：計時、連勝加成（×1.5／2／3）、錯題回顧、排行榜；題目格式 `{ stem, tag, hint, options, correct, explain }`
- 產區速答：PDO 名稱＋線索 → 六大地理區；簡單 13 個主要 PDO、4 選項；困難全 33 個、6 選項
- 品種配對：19 個品種；簡單＝品種 → 特徵；困難＝加入特徵 → 品種與 PDO → 核心品種（10 組無歧義配對）
- 題庫 `src/data/greece/gameData.js`，事實只取自課程已查證內容，不含有出入的數字（如 Reserve 月數）
- 排行榜沿用 `game_scores` 表（`game_type`: `gr_region_quiz`／`gr_grape_match`，無需 migration）；最高分存 localStorage（`gr_region_best`／`gr_grape_best`）
- 頁面文字目前僅繁體中文（與匈牙利遊戲一致）

## 尚未做（下一階段）
- 更多遊戲（Hungary 另有分級辨識、知識閃問）、品飲筆記（首頁已顯示「即將推出」）
- 成就系統、詞彙辭典（`WineGlossary`／`AdminGlossary` 尚未加入 greece）
- Supabase `courses` 資料表需新增 `greece` 一列才能在首頁上架
- 地圖與頁面的實機畫面檢查（vite build 已通過；需 `VITE_MAPBOX_TOKEN` 才能在瀏覽器看到底圖）

## 資料來源（Drive）與待查證事項
- `greece.pdf`（Court of Master Sommeliers, 2018）、`希臘酒.pptx`（2022 筆記）、`greeceregs.pdf`（2011 法規）、`193269_map_GREECE PDO.pdf`（33 PDO 官方地圖）
- ⚠ 以上資料多為 2011–2018，**數字與名單須對照現行官方資料（希臘農業部、eAmbrosia）再寫入正式內容**：
  - PDO 數量（地圖列 33）、PGI 數量（舊資料 58）
  - Reserve／Grand Reserve 陳年月數
  - PDO「100% 本區」與 PGI「至少 85%」的比例要求
  - 名稱拼寫差異（如 Amynteo／Amyndeo）
