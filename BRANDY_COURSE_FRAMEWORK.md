# 白蘭地與葡萄蒸餾酒課程框架

> 課程代碼 `brandy`、課程前綴 `bd-`、分支鏈 `feat/brandy-*`。僅管理員可見；migration 只準備不套用。對應 WSET Diploma D5（Spirits）與 CMS 烈酒。

## 1. 結構（3 階段 16 課）
- **Level 1（5）**：bd-l1-1 認識白蘭地、bd-l1-2 蒸餾原理、bd-l1-3 葡萄與基酒、bd-l1-4 橡木熟成與分級、bd-l1-5 評量
- **Level 2（6）**：bd-l2-1 Cognac 的產區與六個 Crus、bd-l2-2 Cognac 的蒸餾與熟成、bd-l2-3 Armagnac 的產區與風格、bd-l2-4 歐洲其他葡萄白蘭地（Brandy de Jerez、Metaxa、Weinbrand、Grappa 等）、bd-l2-5 新世界與其他產區（Pisco、南非、加州、高加索等）、bd-l2-6 評量
- **Level 3（5）**：bd-l3-1 蒸餾與熟成深度、bd-l3-2 風格與品飲、bd-l3-3 產業與市場、bd-l3-4 法規與 Diploma／CMS 論述、bd-l3-5 評量

## 2. 查證原則
- 事實取自 WebSearch／WebFetch 查得的來源（BNIC、BNIA、Wine With Seth／相關百科、Wikipedia、Decanter、各公會與官方規格等），數字一律標註來源。
- 來源有出入者於課內標明、不進測驗。
- 英文與日文以 overlay 提供；新增字串須有 en／ja。
- 注意：Calvados、水果白蘭地不在範圍內（本課聚焦葡萄蒸餾酒）。

## 3. 互動功能（階段 E 計畫）
示意點地圖（無授權邊界時；Cognac 六大 Crus、Armagnac 三區、其他產地）、遊戲、品飲筆記（`bd_*`）、成就、詞彙（region `brandy`）、氣候腳本（北半球 4–10 月，僅適用主要產區）。

## 4. 完成狀態

- 課程內容：16 課（L1 5／L2 6／L3 5），en／ja 完成；有來源衝突的數字（各 cru 公頃數、Ugni Blanc 占比、Armagnac XO 年數、哪些酒廠帶酒泥蒸餾、獲豁免的酒廠名單、喬治亞等高加索細節）僅於課文標註或不收錄，不入測驗。
- 互動功能：20 個示意點地圖（Cognac 7、Armagnac 3、歐洲其他 5、新世界 5）、4 款遊戲（產區速答、品種配對、制度辨識、知識閃問）、品飲筆記（7 種酒型 bd_*）、成就系統、術語表 28 條（region `brandy`）、UI 字典 en／ja 各 620 條，0 缺漏。
- 課程維持僅管理員可見。
- 未套用的遷移檔：`20261104000000_add_brandy_course.sql`、`20261104000100_add_brandy_tasting_types.sql`（CHECK 清單同時保留 sw_* 與 bd_*）、`20261104000200_add_brandy_glossary.sql`（region CHECK 同時保留 southwest 與 brandy）。
- 待辦：氣候資料 `public/data/brandy-climate.json`（`node scripts/build-brandy-climate.mjs --delay=1200 --merge`；腳本只處理北半球的點，Ica、Pisco Elqui、Paarl、Klein Karoo 在南半球生長季不同，不納入）。
- 時效提醒：Level 3 的 2024 年出口與 2025 年中國終裁數字會過時，更新課程時請重新查證。
- 分支鏈：feat/brandy-design → -l1 → -l2 → -l3 → -interactive → -final；尚未合併，等待「合併」指示。
