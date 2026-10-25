# 🇫🇷 法國隆河（Vallée du Rhône）課程設計（Diploma／MW 備考導向）

> 本文件定義課程定位、三階段 21 課大綱、各課重點與查證清單、互動功能與實作階段。
> 課程代號：`rhone`；課程 ID 前綴 `rh-l{階段}-{序號}`（與 `gr-l1-1` 同格式）

## 狀態

| 階段 | 內容 | 分支 | 狀態 |
|---|---|---|---|
| 設計 | 本文件 | `feat/rhone-course-design` | ✅ 完成（未合併） |
| A | 框架：頁面、路由、進度、21 課空殼、en/ja 標題；僅管理員可見 | `feat/rhone-course-framework`（從 master 切出並合併設計分支） | ✅ 完成（2026-10-24，未合併；見〈已完成的框架項目〉） |
| B | Level 1 內容（6 課）＋測驗＋en/ja | `feat/rhone-l1`（從 A 切出） | ✅ 完成（2026-10-25，未合併；見第 10 節） |
| C | Level 2 內容（8 課） | `feat/rhone-l2`（從 B 切出） | ✅ 完成（2026-10-25，未合併；見第 11 節） |
| D | Level 3 內容（7 課） | `feat/rhone-l3` | ⏳ |
| E | 互動地圖、遊戲、品飲筆記、成就、詞彙 | `feat/rhone-interactive` | ⏳ |
| F | 全面英日文、migration、價格、公開 | — | ⏳ |

**階段 A 備註**：地圖／遊戲／筆記入口在首頁顯示「製作中」（停用）；成就系統與詞彙辭典尚未建立，首頁不顯示成就數；`courses` migration 只準備檔案、**尚未套用**（`supabase/migrations/20261025000000_add_rhone_course.sql`，active=false、show_on_home=false）。

## 1. 定位與設計原則

- **對象**：準備 WSET Diploma（D3 Wines of the World），並延伸到 MW 論述題的學習者。
- **與既有課程的關係**：沿用希臘課程的「3 階段 × 21 課」骨架（L1 建立地圖、L2 逐區法規、L3 Diploma 精修），共用 `courseHome`、`regionMap`、成就、詞彙、遊戲引擎、品飲筆記等元件，不重寫。
- **隆河的教學主軸**（與希臘不同之處）：
  1. **南北二分**：北隆河（Syrah 與 Viognier／Marsanne／Roussanne、陡坡花崗岩、半大陸性氣候）與南隆河（Grenache 為主的混釀、地中海氣候、Mistral、卵石）幾乎是兩個產區，必須分開教、再對照。
  2. **分級金字塔**：Côtes du Rhône → Côtes du Rhône Villages（含地名）→ 獨立 Crus（一個 cru ＝ 一個 AOC）。這是 Diploma 最常考的結構，也是最容易搞混的部分。
  3. **混釀與品種比例法規**：南隆河的品種比例、教皇新堡 13 個品種、Côte-Rôtie 的 Viognier 共發酵，都是數字題。
  4. **產業結構**：Inter Rhône、négociant（如 Guigal）、合作社與獨立酒莊的比重，是 MW 論述題的素材。
- **事實原則**（沿用希臘做法）：數字一律對照 Inter Rhône 與 INAO 現行產品規格；來源有出入時課內標明，且**不放進測驗**，直到查證定案。

## 2. 課程結構（3 階段 21 課）

### Level 1 - 隆河谷入門（6 課）
建立整體地圖：地理、歷史、氣候土壤、主要品種、分級金字塔

- **RH1M1 地理、歷史與風土**
  - `rh-l1-1` 認識隆河谷（15 分）
  - `rh-l1-2` 氣候、土壤與栽培（16 分）
- **RH1M2 葡萄品種**
  - `rh-l1-3` 主要紅葡萄品種（18 分）
  - `rh-l1-4` 主要白葡萄品種（16 分）
- **RH1M3 產區總覽與評量**
  - `rh-l1-5` 隆河產區總覽與分級金字塔（18 分）
  - `rh-l1-6` Level 1 綜合評量（25 分）

### Level 2 - 隆河產區與法規（8 課）
逐區掌握北隆河各 cru、教皇新堡、南隆河各 cru 與其他名稱

- **RH2M1 分級與區域名稱**
  - `rh-l2-1` Côtes du Rhône 與 Villages 法規（20 分）
- **RH2M2 北隆河**
  - `rh-l2-2` Côte-Rôtie、Condrieu 與 Château-Grillet（22 分）
  - `rh-l2-3` Hermitage、Crozes-Hermitage 與 Saint-Joseph（22 分）
  - `rh-l2-4` Cornas、Saint-Péray 與北隆河邊緣（18 分）
- **RH2M3 南隆河**
  - `rh-l2-5` Châteauneuf-du-Pape（22 分）
  - `rh-l2-6` Gigondas、Vacqueyras 與其他南隆河 crus（22 分）
- **RH2M4 其餘名稱與評量**
  - `rh-l2-7` 粉紅、甜酒、氣泡與外圍產區（18 分）
  - `rh-l2-8` Level 2 綜合評量（30 分）

### Level 3 - 隆河 Diploma／MW 精修（7 課）
栽培釀造深度、風土比較、法規判讀、產業市場與論述

- **RH3M1 栽培與釀造**
  - `rh-l3-1` 葡萄栽培深度與氣候變遷（22 分）
  - `rh-l3-2` 釀造與風格（22 分）
- **RH3M2 風土、品種與法規**
  - `rh-l3-3` 風土比較與品種剖析（24 分）
  - `rh-l3-4` 法規深度與標籤判讀（22 分）
- **RH3M3 產業、應考與評量**
  - `rh-l3-5` 產業、市場與貿易（20 分）
  - `rh-l3-6` Diploma 品飲與論述（25 分）
  - `rh-l3-7` Level 3 綜合評量（35 分）

## 3. 各課重點與查證清單

> ⚠ 標記＝數字或規定須先對照 Inter Rhône／INAO 產品規格再寫入；**未定案前不進測驗**。

### Level 1
| 課 | 重點 | 備註與 ⚠ |
|---|---|---|
| rh-l1-1 | 河谷南北約 200 公里（Vienne 到 Avignon 一帶）；羅馬時代的 Vienne；1309 年教廷遷 Avignon 與教皇新堡的由來；1923 年 Baron Le Roy 與 AOC 制度的先聲；南北二分與「約 95% 的產量來自南部」 | ⚠ 河谷長度與面積以 Inter Rhône 教學包（Kit pédagogique 2025）為準；WineWithSeth 2024 數字：63,307 公頃（不含教皇新堡）、約 216.5 萬百升、紅 75%／粉紅 13%／白 12% |
| rh-l1-2 | 北：半大陸性、陡峭梯田（échalas 高樁式、chaillées 矮石牆）、花崗岩與片麻岩、Mistral 的影響；南：地中海氣候、Mistral、卵石（galets roulés）、砂岩、石灰岩、泥灰；日照與雨量 | ⚠ 土壤分類以產區為單位核對；可直接重用 `build-greece-climate.mjs` 做隆河氣候圖層 |
| rh-l1-3 | Syrah（起源、北隆河旗艦）、Grenache、Mourvèdre、Cinsault、Carignan、Counoise 等；GSM 混釀概念 | ⚠ Syrah 的親本研究（Dureza × Mondeuse Blanche）寫作時註明來源 |
| rh-l1-4 | Viognier（1960 年代近乎絕跡後復興）、Marsanne、Roussanne、Grenache Blanc、Clairette、Bourboulenc、Picpoul | ⚠ 瀕臨絕種年代與面積需查證 |
| rh-l1-5 | 分級金字塔：Côtes du Rhône（約 172 個村莊）→ Villages → 地名 Villages → Crus；北／南 cru 名單（北 8＋南 10＝18 個，2024 年 Laudun 升格）；Grignan-les-Adhémar、Ventoux、Luberon、Costières de Nîmes 等外圍名稱 | ⚠ 最新 cru 數量與升格年份；Costières de Nîmes 的歸屬（Inter Rhône 納入，地理上屬 Languedoc）要說清楚 |
| rh-l1-6 | 8 題綜合評量（及格 60） | 避開仍有出入的數字 |

### Level 2
| 課 | 重點 | 備註與 ⚠ |
|---|---|---|
| rh-l2-1 | Côtes du Rhône 與 Villages 的品種比例（主要／輔助／附屬品種）、酒款類型、Villages 的更嚴產量與酒精度；21 個可加註地名的村莊、前身 Villages 升格為 cru 的名單與年份（Vinsobres、Beaumes-de-Venise、Cairanne、Laudun 等） | ⚠ 用戶 Drive 筆記（2021）與 WineWithSeth 的 Syrah＋Mourvèdre 最低比例不同（15%／20%），Grenache 最低 30%（北方例外）；須對照現行 CDC |
| rh-l2-2 | Côte-Rôtie（Côte Brune／Côte Blonde、Syrah 至少 80% 的比例要求、Viognier 共發酵、AOC 1940）；Condrieu（Viognier 100%、花崗岩梯田、AOC 1940）；Château-Grillet（單一莊園 AOC，面積最小級的 AOC 之一） | ⚠ 各 AOC 面積、Viognier 最高比例（20%）、Château-Grillet 面積 |
| rh-l2-3 | Hermitage（約 136 公頃、丘陵分塊 Les Bessards／Le Méal／L'Ermite 等、Syrah 加最多 15% Marsanne／Roussanne、稻草酒 vin de paille）；Crozes-Hermitage（北隆河最大）；Saint-Joseph（1956 AOC，約 1,415 公頃，86% 紅／14% 白，2022 年單產約 38 hl/ha，2014 年擴界） | Saint-Joseph 數字取自《Bourgogne Aujourd'hui》第 189 期（Drive：`rhone_nord_saintjoseph_saintperay.pdf`）；Hermitage 面積取自 WineWithSeth，⚠ 與官方核對 |
| rh-l2-4 | Cornas（Syrah 100%、1938 AOC、受風影響小的圓形劇場式坡地）；Saint-Péray（1936 AOC，Marsanne／Roussanne，從傳統法氣泡到靜態白酒，2026 年 90 週年）；Brézème（屬 Côtes du Rhône 的一部分，非獨立 AOC）、Seyssuel（IGP）、Diois 的 Clairette de Die 簡介 | Drive 同一份 PDF 提供 Saint-Péray 與 Brézème 資料 |
| rh-l2-5 | 教皇新堡：1936 年建立、13 個品種（含顏色變種計 18）、卵石與 Mistral、Grenache 為主、酒瓶標誌（教皇徽章）、1923 年 Baron Le Roy；白酒（Clairette、Roussanne、Grenache Blanc 等）；酒莊 vs 合作社 | ⚠ 品種名單與各品種最低／最高比例、面積（約 3,000 公頃級）、瓶身浮雕規定 |
| rh-l2-6 | Gigondas（Dentelles de Montmirail）、Vacqueyras、Vinsobres、Cairanne（2016 升格）、Rasteau（乾紅 cru 與 VDN）、Beaumes-de-Venise（紅 cru 與 Muscat VDN）、Laudun（2024）、Lirac、Tavel；各 cru 的品種規定與風格差異 | ⚠ 各 cru 升格年份、品種比例（逐一查產品規格） |
| rh-l2-7 | Tavel（全為粉紅）、Lirac（紅白粉紅）、Rasteau／Beaumes-de-Venise VDN、Clairette de Die／Crémant de Die、Ventoux、Luberon、Grignan-les-Adhémar、Costières de Nîmes、Côtes du Vivarais | ⚠ 哪些屬於「Rhône」廣義範圍要在課內講清楚 |
| rh-l2-8 | 重點回顧＋10 題綜合評量（及格 60） | 刻意避開有出入的數字 |

### Level 3
| 課 | 重點（對應 Diploma／MW） | 備註與 ⚠ |
|---|---|---|
| rh-l3-1 | 北：陡坡手工、支柱栽培（échalas）、梯田維護、坡地經濟；南：Grenache 老藤、缺水與熱浪、Mistral、霜與冰雹；氣候變遷（採收提早、酒精度上升、品種調整：2024 年起允許的適應性品種 Rolle、Carignan Blanc、Vidoc、Floréal，上限 10%）；有機與永續認證 | ⚠ 適應性品種清單與上限需對照 CDC |
| rh-l3-2 | Syrah：全串／去梗、共發酵（Côte-Rôtie）；Grenache：氧化性、橡木 vs 水泥槽 vs 大木桶；GSM 混釀的角色分工；白酒：橡木、葡萄皮接觸、MLF；VDN 的加烈 | 概念層可寫；具體比例以酒莊／規格為準 |
| rh-l3-3 | 風土比較框架：Syrah 北 vs 南 vs 澳洲 Shiraz；Côte-Rôtie vs Cornas vs Hermitage；教皇新堡 vs Gigondas vs Vacqueyras；與勃艮地 Pinot Noir 的對照（連結既有勃艮地課程） | 建立盲品／論述用的比較表 |
| rh-l3-4 | 標籤判讀：Côtes du Rhône 家族的寫法、「Villages＋地名」與 cru 的差異、IGP（Collines Rhodaniennes、Méditerranée 等）、Vin de France；法規數字題 | ⚠ 與 rh-l2-1 同樣的比例問題 |
| rh-l3-5 | Inter Rhône、négociant（Guigal、Jaboulet、Chapoutier、Delas 等）與獨立酒莊、合作社比重、散裝與瓶裝、出口市場與價格階梯、Côtes du Rhône 的品牌角色、近年產量與價格壓力 | ⚠ 數字取最新 Inter Rhône 年度報告；人名／酒莊事實逐項查證 |
| rh-l3-6 | Diploma D3 品飲筆記（SAT）與論述題範本；北隆河 Syrah／南隆河 Grenache 的盲品辨識線索；MW 風格論述示範題（例：氣候變遷下 Grenache 的角色、單一品種 vs 混釀、cru 數量擴張的利弊） | 考試形式提醒「以 WSET 官方最新規格為準」 |
| rh-l3-7 | 12 題綜合評量（及格 60） | 避開有出入的數字 |

## 4. 互動功能設計

### 4.1 互動地圖
- **資料來源**：Bianchi et al. (2022)（Scientific Data，CC0）的歐盟 PDO 資料集（`PDO-FR-*`）；法國的 PDO 範圍也可對照 INAO 公開的產區範圍（data.gouv.fr，開放授權）。⚠ 授權與版本以實際下載頁為準。
- **圖層**：北／南分色；cru 與 Villages 與 Côtes du Rhône 分三層疊加（避免一次載入過多多邊形）；選 cru 顯示品種、比例、土壤、AOC 年份。
- **氣候圖層**：重用 Greece 的 `scripts/build-greece-climate.mjs`（Open-Meteo ERA5：夏季均溫、日照、雨量，基準 1981–2010），輸出 `public/data/rhone-climate.json`。
- **特別題材**：Côte-Rôtie 的 Côte Brune／Côte Blonde、Hermitage 的主要分塊（lieux-dits）若找不到可靠邊界，仿 Greece 的 PGI，用「示意點」而非編造邊界。
- 風險：隆河 cru 面積小、邊界細，行動裝置上的點選容易誤觸 → 提供搜尋抽屜（沿用共用元件）。

### 4.2 遊戲（沿用 `QuizEngine`）
- **產區速答**：cru 名稱＋線索 → 北隆河／南隆河（簡單）；加入主要品種與酒款類型（困難）。
- **品種配對**：cru → 法定品種／比例（只用無歧義項）；品種 → 特徵。
- **分級辨識**：Côtes du Rhône／Villages／Villages＋地名／Cru 的辨識；北 8 ＋ 南 10 cru 名單；白、紅、粉紅規定。
- **知識閃問**：取自 Level 1–3 課程測驗（沿用 `flashData.js` 的 glob 做法，並重用已建立的 lesson overlay 翻譯）。

### 4.3 品飲筆記
- 沿用 `tasting_notes` 表（`source = 'rhone'`，產區存 `aoc_id`）。
- 酒款類型（需 migration 擴充 `wine_type` CHECK，與 Greece 同步驟）：北隆河紅、南隆河紅、白酒、粉紅、甜酒／VDN、氣泡、其他。
- 詞彙：Syrah 的胡椒、橄欖、培根、紫羅蘭；Grenache 的紅莓、香料、酒精感；Viognier 的杏桃、白花；Marsanne 的蜂蜜、杏仁等（每項寫入前翻成 en/ja）。

### 4.4 成就、詞彙、其他
- 成就：仿 `greeceAchievementSystem.js`（課程完成、探索 cru、遊戲滿分、筆記、連續學習）；專屬成就如「北隆朝聖」（探索 8 個北隆 cru）、「南北貫通」。
- 詞彙辭典：`WineGlossary`／`AdminGlossary` 加 `rhone`；第三語為**法文**（需評估 `el` 欄位如何泛化成 `fr`，或另開欄位）。
- 英日文：所有課程 JSON 與 UI 字串與 Greece 同流程；字典機制沿用 `gt()` 的作法。

## 5. 技術落點（比照 `feat(greece): 希臘課程框架`）

新增或修改的檔案（預估，與 Greece 對照）：
- `src/components/rhone/`：`RhonePage`、`RhoneLevelSelector`、`RhoneLearningSystem`、`RhoneCourseLayout`、`RhoneMapPage`、`games/*`、`notebook/*`
- `src/data/rhone/rh-l*.js`（21 課）、`gameData.js`、`tastingData.js`
- `src/stores/rhoneLearningStore.js`、`rhoneAchievementSystem.js`
- `src/lib/courseProgressSync.js`（加課程代號 `rhone`）、`src/data/lessonContentLoader.js`、`src/router/index.js`（`/rhone`，`COURSE_ACCESS_RULES`）、`PlatformHome.vue`（卡片；先加入 `ADMIN_ONLY_COURSES`）、`regionThemes.js`、`useAchievements.js`
- `src/locales/{en,ja,zh-TW}/…` 與 `src/locales/{en,ja}/lessons/rhone/*.json`
- `supabase/migrations/…`：`tasting_notes.wine_type` 擴充、`courses` 新增 `rhone`（預設 `active=false`）、詞彙表欄位
- `public/rhone/rhone_pdo.geojson`、`public/data/rhone-climate.json`、`scripts/build-rhone-*.mjs`

## 6. 實作階段（建議）

| 階段 | 內容 | 分支 |
|---|---|---|
| A | 框架：頁面、路由、進度、21 課空殼＋大綱、en/ja 標題；僅管理員可見 | `feat/rhone-course-framework` |
| B | Level 1 內容（6 課）＋測驗＋en/ja | `feat/rhone-l1` |
| C | Level 2 內容（8 課）＋ Drive 筆記與 Inter Rhône 查證 | `feat/rhone-l2` |
| D | Level 3 內容（7 課）＋論述題範本 | `feat/rhone-l3` |
| E | 互動地圖（含氣候圖層）、遊戲、品飲筆記、成就、詞彙 | `feat/rhone-interactive` |
| F | 全面英日文、migration、價格、公開 | — |

每階段維持：新分支開發 → 推送 → 你說「合併」才合併。

## 7. 資料來源與待查證

- **官方**：Inter Rhône（vins-rhone.com，教學包 Kit pédagogique 2024／2025；2025 版 PDF 本次無法由程式取得，需你下載後提供，或改用網頁版數據）、INAO 各 AOC 產品規格（Cahier des charges）、eAmbrosia。
- **第三方**：WineWithSeth（Rhône 區域頁：2024 年 63,307 公頃、教皇新堡 1936、Côte-Rôtie 1940 等）、Wikipedia 各 AOC 條目（僅作交叉比對）。
- **Drive 既有資料**：
  - `rhone_nord_saintjoseph_saintperay.pdf`（《Bourgogne Aujourd'hui》第 189 期，Saint-Joseph 70 週年、Saint-Péray、Brézème）
  - `29 Southern Rhone CDR And CDR Village`（Côtes du Rhône 與 Villages 問答筆記，2021）
  - `Rhone_香色 2022-08-09.pdf`（進口商資料：Duvernay、Gerin、Roger Perrin 等酒莊說明）
  - `產區省份`、`france` 試算表中的 Rhône 欄位
- **已知出入與查證結論（階段 A，2026-10-24）**：
  1. **Côtes du Rhône 的 Syrah＋Mourvèdre 最低比例**：INAO 現行產品規格（Cahier des charges CDR，2018 年 9 月版，`extranet.inao.gouv.fr`）規定 Syrah＋Mourvèdre **合計至少 20%**，主要品種（Grenache、Syrah、Mourvèdre）合計至少 70%，**Grenache 至少 30%**（蒙特利馬爾 Montélimar 緯線以北的酒莊例外），Caladoc／Couston／Marselan 合計至多 10%，白品種紅酒至多 5%、粉紅至多 20%；**比例以「酒莊整體種植（encépagement）」計算，而非單一酒款**。20% 為分階段導入：2016 年前種植 10%，之後逐步提高，**已投產葡萄樹自 2022 年採收起適用 20%**；至 2023 年採收前國家委員會可個案調降。→ Drive 筆記的 15%、Wikipedia 的 15%／Grenache 40% 是**較早的過渡版本**，WineWithSeth 的 20% 是最終版；三者差異來自年份，不是矛盾。**處理**：課內以 20%／30%、「酒莊整體種植」、「2022 年起」呈現並標註 INAO 2018 版；2021 年有暫時性修改（`modificationstemporaires…`）。**階段 C 定案（2026-10-25）**：對照 INAO 2018 年 9 月版與 2026 年修訂草案（`PNO2026CDCAOPCotesduRhone.pdf`），Grenache ≥30%、Syrah＋Mourvèdre ≥20%（已投產葡萄樹自 2022 年採收起）一致，可進測驗；Villages 則是 Grenache ≥40%、Syrah＋Mourvèdre ≥25%、主要品種 ≥80%（與 Drive 筆記的 40% 一致）。詳見第 11 節。
  2. **cru 總數與升格年份**：**18 個定案**。Inter Rhône《Chiffres clés 2025》（vins-rhone.com）地圖標示 18 個 Côtes du Rhône crus、21 個可加註地名的 Villages、2 個天然甜酒（VDN）；Decanter 報導 **Laudun 於 2024 年 9 月 11 日由 INAO 全國委員會升格，為第 18 個 cru**（2023 年 591 公頃，2024 年為首個 cru 年份）。北隆河 8 個（Côte-Rôtie、Condrieu、Château-Grillet、Saint-Joseph、Hermitage、Crozes-Hermitage、Cornas、Saint-Péray）＋南隆河 10 個（Châteauneuf-du-Pape、Gigondas、Vacqueyras、Lirac、Tavel、Vinsobres、Rasteau、Beaumes-de-Venise、Cairanne、Laudun）＝18。升格年份（WineWithSeth，Decanter 交叉）：Gigondas 1971、Vacqueyras 1990、Beaumes-de-Venise 2005、Vinsobres 2006、Rasteau 2010、**Cairanne 2016**（Decanter 2016 年 2 月報導 INAO 核准、第 17 個 cru；WineWithSeth 記 2016/6/29 公告；2024 年 Decanter 文中寫 2015 為口誤，採 2016）、Laudun 2024。Châteauneuf-du-Pape 與 Tavel 為 1936、Lirac 1947。**階段 C 已逐一對照 INAO**：Gigondas 1971-01-06 ✔、Vacqueyras 1990 ✔（INAO 內文 8 月 9 日與 8 月 15 日兩處，年份一致）、Beaumes-de-Venise 乾紅 2005-10-25 ✔、Vinsobres 2006-02（15 與 17 日兩處）✔、Rasteau 乾紅 2010（VDN 1944-01-05）✔、Laudun 2024-09-11（INAO 全國委員會新聞稿）✔、Cairanne 2016（iDealwine／Decanter 2016-02 報導，INAO 規格不載年份，追溯至 2015 年採收；課內寫、不進測驗）。
  3. **各 AOC 面積與單產**：改以 Inter Rhône《Chiffres clés 2025》（2024 年數據）為準，一律標註年份：河谷總面積 63,307 公頃（不含教皇新堡之各項庫存統計）、2024 年產量 2,165,446 百升（2023 年 2,426,290）、紅 75%／粉紅 13%／白 12%；Côtes du Rhône 28,462 公頃／974,144 百升、Villages 8,007 公頃／247,998 百升；北隆河 crus 合計 4,472 公頃／164,624 百升：Crozes-Hermitage 2,073、**Saint-Joseph 1,415（與 Drive《Bourgogne Aujourd'hui》相符）**、**Hermitage 136（與 WineWithSeth 相符）**、Côte-Rôtie 343、Condrieu 221、Cornas 164、**Château-Grillet 4 公頃（96 百升）**。Wikipedia 的 Côte-Rôtie 224／202 公頃為舊數字，不採用。Viognier 在 Côte-Rôtie 最高 20%（Syrah 至少 80%）、AOC 1940-10-18：**階段 C 已對照 INAO 規格（2023-11-30 版）確認**。教皇新堡：INAO 產品頁「18 個品種、Grenache 為主」，規格全文單產 35 hl/ha、最低天然酒精 12.5%、強制手工採收與分選，**已確認**；面積 INAO 規格頁約 3,200 公頃（2010）、Drive 逾 3,000 公頃，Inter Rhône 2025 統計表不含教皇新堡 → 課內只寫「約 3,000 公頃級」、不進測驗。
  4. **Costières de Nîmes**：地理上位於 Gard 省、鄰近 Languedoc，歷史上隸屬 Languedoc-Roussillon 委員會；INAO 清單自 **2004 年 7 月 19 日版**起改歸 Rhône 委員會（公會 1998 年申請，理由是風格較近隆河），Inter Rhône 統計**已納入**（2024 年 2,540 公頃、110,510 百升）。**決定**：維持原決議，僅在 rh-l1-5／rh-l2-7 作簡介，課內說明「行政上屬 Rhône、地理與風格介於兩者」，不計入 cru 或北／南 cru 名單。
  - 另：**Inter Rhône 教學包（Kit pédagogique 2025）PDF 本次未取用**，依已確認決定改用 vins-rhone.com 網頁版與其公開的《Chiffres clés 2025》PDF（vins-rhone.com 站內文件）。vins-rhone.com 的 crus 頁（`/en/cotes-du-rhone-crus-aoc`）只列顏色與品種（20 筆結果含 2 個 VDN），無面積與年份，面積以 Chiffres clés 為準。

## 8. 已確認的決定（2026-10-25）

1. 範圍：只做 Vallée du Rhône（Ventoux／Luberon／Costières 僅作簡介）。
2. 結構：沿用 3 階段 21 課，北／南在 Level 2 分開教。
3. 流程：照希臘流程，依第 6 節 A→F 階段，每階段新分支、推送、使用者說「合併」才合併；階段之間因未合併，後一階段從前一階段分支切出。
4. 公開：先只給管理員（`ADMIN_ONLY_COURSES` 加入 `rhone`）。
5. 資料：Inter Rhône 2025 數據改用其網頁版（vins-rhone.com），不用教學包 PDF。
6. 排程：各階段以排程任務依序啟動（見使用者端的排程清單）。

## 9. 已完成的框架項目（階段 A，分支 `feat/rhone-course-framework`）

照 `feat(greece): 希臘課程框架` 的結構建立，並沿用其後希臘加入的 `gt()` 字典機制：

- **元件** `src/components/rhone/`：`RhonePage`（課程首頁↔課程模式）、`RhoneLevelSelector`（3 階段課程首頁；QuickNav 的地圖／遊戲／筆記顯示「製作中」並停用，不導向任何頁面）、`RhoneLearningSystem`（課程播放，含進度同步）、`RhoneCourseLayout`（章節總覽）。
- **UI 字典** `src/locales/rhoneUi/`（`index.js`、`en.js`、`ja.js`）：機制同 `greeceUi`（以繁中原文為鍵、`gt()` 查字典、查無退回中文）；通用字串直接疊在 `greeceUi` 字典之上，只在 rhoneUi 補隆河專屬字串，**未改動希臘任何檔案**。
- **Store** `src/stores/rhoneLearningStore.js`：3 階段 21 課大綱（依第 2 節：標題、模組 RH1M1…RH3M3、分鐘數），進度存 `rhone-wine-academy-progress:{userId}`（localStorage）；`src/lib/courseProgressSync.js` 新增 `saveRhoneLesson`／`loadAndMergeRhoneProgress`（課程代號 `rhone`）。
- **課程空殼** `src/data/rhone/rh-l1-1.js … rh-l3-7.js`（21 檔）：一張封面＋一張「本課重點」（3 點，只寫概念、不含未定案數字），並標示「🚧 內容製作中」；已於 `lessonContentLoader.js` 註冊；`src/locales/{en,ja}/lessons/rhone/*.json` 已放標題、重點與製作中提示（鍵值已逐檔驗證與 JS 結構吻合）。
- **接點**：路由 `/rhone`（`/rhone/course` 導回）與 `COURSE_ACCESS_RULES.Rhone`（`courseId: 'rhone'`, `free`）；`PlatformHome` 加入 `rhone`（課程清單、`courseStatuses`／`courseShowHome` 預設 false、`ADMIN_ONLY_COURSES = ['greece','rhone']`、僅 `isAdmin` 可見的卡片與樣式）；`regionThemes.js` 的 `rhone` 主題（Syrah 紫 `#7A2E5C`／金 `#D08C2F`）；`PresentationLesson` 的 `rh-` 封面色與圖示；en／ja／zh-TW 的 `common.js`（地區名）與 `home.js`（課程標籤與卡片文案）。
- **Migration（僅準備、未套用）**：`supabase/migrations/20261025000000_add_rhone_course.sql`，`courses` 新增 `rhone`，`active=false`、`show_on_home=false`，價格暫沿用希臘，並附上公開用的 UPDATE（註解）。
- **尚未做（留給後續階段）**：成就系統（`rhoneAchievementSystem.js`）、詞彙辭典（`WineGlossary`／`AdminGlossary` 加 `rhone`，第三語為法文）、`tasting_notes` 酒款類型 migration、互動地圖、遊戲、品飲筆記，以及 21 課正式內容與測驗。
- **驗證**：`@vue/compiler-sfc` 編譯 `rhone/*.vue`、`PlatformHome.vue`、`PresentationLesson.vue` 通過；`npx vite build` 成功（希臘與其他課程檔案未修改，共用檔案皆為新增而非改動既有邏輯）。

## 10. Level 1 內容說明與查證註記（階段 B，分支 `feat/rhone-l1`）

**結構**：`rh-l1-1 … rh-l1-6` 比照 `gr-l1-*`：封面＋4 張內容投影片＋知識檢測（l1-1～l1-5 各 3～4 題，及格 60）；`rh-l1-6` 為封面＋重點回顧＋8 題綜合評量（及格 60）。en／ja 為 flat-key overlay（`src/locales/{en,ja}/lessons/rhone/*.json`），已逐鍵比對 JS 結構：無缺漏、無多餘鍵、en 無 CJK 殘留。未新增 UI 字串（沿用階段 A 的 rhoneUi）。

**數據來源與年份**（一律標註）：Inter Rhône《Chiffres clés 2025》EN（vins-rhone.com，2026-05 版，2025 年採收；庫存與銷售為 2024–25 年度／2025 日曆年）。2025 年數字：葡萄園約 60,223 公頃、產量 2,012,313 百升（紅 73%／粉紅 14%／白 13%）；Grenache noir 32,379、Syrah 22,189、Carignan 3,563、Mourvèdre 2,749、Cinsault 2,003、Grenache blanc 2,066、Viognier 1,600、Muscat à petits grains 1,360、Clairette 1,336、Roussanne 1,209 公頃；有機／生物動力約 24% 產量、26% 面積；HVE3 約 37% 產量、34% 面積；6,371 個生產單位、366 家貿易商；出口 743,015 百升（33%），比利時、英國、美國居前三；Villages 8,019 公頃、21 個可加註地名；crus 18 個。

**本階段發現的出入（均不進測驗，課內以「概略值」呈現）**
1. **總面積與產量**：同一份 2025 報告內文為 60,223 公頃／2,012,313 百升，封面為 63,931 公頃／2,353,260 百升（範圍口徑未說明）；階段 A 記錄的 2024 年版為 63,307 公頃／2,165,446 百升。→ 課內只說「約 6 萬公頃、約 200 萬百升（2025）」；紅白粉紅比例每年略變（2024 為 75/13/12，2025 為 73/14/13），測驗只考「南隆河占絕大多數」這類大方向。
2. **有機比例**：2025 報告內文 24% 產量／26% 面積，封面寫 25%。→ 課內標「約」，不考。
3. **河谷長度**：常見說法約 200 公里（Vienne–Avignon）；WineWithSeth 為「Lyon 至河口三角洲約 150 英里（約 241 公里）」。→ 課內寫「約 200 公里（概略，起訖點算法不同）」，不考。
4. **南北產量比**：WineWithSeth「南部逾 95%」為單一來源概數 → 課內標「一般說法」，測驗不引用百分比。
5. **Viognier 瀕危時的面積**：WineWithSeth 為 1950 年代 Condrieu 約 12 公頃；坊間另有 8～14 公頃等說法 → 課內寫「約十來公頃（各說法不一）」，不考。
6. **Baron Le Roy 年份**：IWFS 寫 1923 年編纂教皇新堡規範；WineWithSeth 僅說 1930s 推動 AOC，教皇新堡於 1936-05-15 法令認定 → 課內寫「1920 年代（常見說法 1923）」，測驗不考年份。教廷駐 Avignon：1309–1376（IWFS）。
7. **Côtes du Rhône 規模**：172 個村莊／6 個省／2025 年 26,777 公頃、Villages 95 個村莊（限南部四省）為 WineWithSeth 單一來源 → 標註來源、不考；WineWithSeth 頁面另列 3 個 Isère 村莊，省數待 Stage C 對照 INAO。
8. **cru 數量**：Inter Rhône 地圖與文字為 18 個；其產量表列出 19 項（把 Muscat de Beaumes-de-Venise 與 Rasteau VDN 另列），課內說明「18 個 cru＋2 個 VDN」，18 可進測驗。
9. **氣候數字**（Châteauneuf-du-Pape 雨量 <650 mm、日照約 2,800 小時）為 WineWithSeth 單一來源 → 標註、不考。
10. **Syrah 親本**（Dureza × Mondeuse Blanche，1998 年 DNA 研究）、Grenache 可能起源於西班牙：寫作時註明「一般認為／研究顯示」；測驗未考。
- 未取用：Inter Rhône 教學包（Kit pédagogique 2025）網址本次抓取失敗（符合既定決定，改用網頁／Chiffres clés）。Drive 資料本次未使用（Level 1 不需要）。
- Level 2 前待辦：Gigondas 1971、Vacqueyras 1990 等舊升格年份（單一來源）；Côtes du Rhône 的 Syrah＋Mourvèdre 比例（見第 7 節第 1 項）；Villages 地名清單 21 個逐一列出。

## 11. Level 2 內容說明與查證註記（階段 C，分支 `feat/rhone-l2`）

**結構**：`rh-l2-1 … rh-l2-7` 比照 `gr-l2-*`：封面＋3～4 張內容投影片（每張 4 個重點）＋知識檢測 4 題（及格 60）；`rh-l2-8` 為封面＋重點回顧＋10 題綜合評量（`isFinalExam`，及格 60）。en／ja 為 flat-key overlay（`src/locales/{en,ja}/lessons/rhone/rh-l2-*.json`），含測驗題目、選項、解析；已逐鍵驗證：與中文結構零缺漏／零多餘鍵、`applyTranslations` 套回後每鍵皆生效、en 無 CJK 殘留；鍵格式與 L1 一致（含 `componentProps.slide.questions.*`）。未新增 UI 字串。

**數據來源**（優先序：INAO 產品規格 ＞ Inter Rhône 網頁版 ＞ WineWithSeth／CMS／Decanter）：INAO 各 AOC 產品規格（`extranet.inao.gouv.fr` 的 CDC／PNO 文件，多為 2023–2026 年修訂草案，會標明「草案」）、Inter Rhône《Chiffres clés 2025》EN（各 AOC 2025 年採收面積與酒款比例）、INAO 2024-09-11 全國委員會新聞稿、使用者 Drive：`rhone_nord_saintjoseph_saintperay.pdf`（《Bourgogne Aujourd'hui》第 189 期）與 CMS／「29 Southern Rhone CDR And CDR Village」等筆記。

**查證結論（可進測驗者）**
1. **Côtes du Rhône**：AOC 法令 1937-11-19；Grenache ≥30%（Montélimar 緯線以北例外）、Syrah＋Mourvèdre ≥20%（新植 2019 起、投產樹 2022 年採收起）、主要品種 ≥70%，**以酒莊整體種植計算**。→ Drive 筆記的 15% 為過渡版本（第 7 節第 1 項結案）。
2. **Côtes du Rhône Villages**：1966-11-02 法令；南部四省；Grenache ≥40%、Syrah＋Mourvèdre ≥25%、主要品種 ≥80%；**21 個可加註地名的村莊逐一列出**（INAO 清單，其中 Chusclan 僅紅／粉紅，另 10 個僅紅／白）。
3. **北隆河**：Côte-Rôtie（1940-10-18；Syrah ≥80%、Viognier 至多 20% 的 Syrah 地塊樹；40 hl/ha；≥6,000 株/公頃；Côte Blonde＝片麻岩、Côte Brune＝雲母片岩）；Condrieu（1940-04-27；Viognier 100%；7 村莊；41 hl/ha；11.5%）；Château-Grillet（1936-12-08 獲准、JORF 1936-12-11；單一莊園；INAO「<3.5 公頃」、Inter Rhône 4 公頃）；Hermitage（1937-03-04；紅 Syrah ≥85% 酒莊種植；vin de paille 乾燥 ≥45 天、>350 g/L）；Crozes-Hermitage（1937-03-04；11 村莊；Syrah ≥85%；45 hl/ha）；Saint-Joseph（1956-06-15；26 村莊＝Ardèche 23＋Loire 3；Syrah ≥90%；40 hl/ha；1994 年自 6,800 公頃縮至 3,400 公頃）；Cornas（1938-08-05；Syrah；40 hl/ha）；Saint-Péray（1936-12-08；Marsanne／Roussanne；靜態與氣泡）。
4. **教皇新堡**：1936；Vaucluse 5 個村莊；18 個條目（13 個品種）；強制手工採收與分選；35 hl/ha；12.5%；Marsanne、Viognier 不在許可清單。
5. **南隆河 crus**：Gigondas（1971-01-06；Grenache ≥50%；Cinsault＋Mourvèdre＋Syrah ≥15%；2023 年份起可產白酒，INAO 2022-09-08 核准、Clairette ≥70%）；Vacqueyras（1990；Grenache ≥50%、Syrah＋Mourvèdre ≥20%）；Vinsobres（2006-02；Grenache ≥50%、Syrah＋Mourvèdre ≥25%）；Beaumes-de-Venise（乾紅 2005-10-25；Grenache ≥50%）；Rasteau（VDN 1944-01-05，乾紅 2010；乾紅 Grenache ≥50%；VDN 加烈 5–10% 葡萄汁體積、天然糖 ≥252 g/L）；Laudun（2024-09-11）；Lirac（1947-10-14；Grenache ≥40%、Syrah＋Mourvèdre ≥25%）；Tavel（1936-05-15；僅粉紅；Grenache 合計 >30%、<60%，Grenache noir 必在調配中）。
6. **外圍／氣泡／甜酒**：Muscat de Beaumes-de-Venise（1945-06-01，Muscat à petits grains，加烈 5–10%）；Clairette de Die（AOC 1942-12-30，1971-05-25 區分製法；ancestrale 白酒版 Muscat ≥75%、瓶內單次發酵、瓶陳 ≥4 個月；二次瓶內發酵版僅 Clairette、≥9 個月）；Crémant de Die（1993-03-26）；Ventoux（1973-07-27 Côtes du Ventoux，2009-10-17 改名；INAO 53 村莊）；Luberon（1988-02-26 Côtes du Luberon，2009-09-18 改名；INAO 36 村莊）。

**本階段發現的出入（均不進測驗，課內標明）**
1. **Gigondas 的「Syrah＋Mourvèdre ≥15%」**：Drive 舊筆記（2021）漏了 Cinsault；INAO 為 Cinsault＋Mourvèdre＋Syrah 合計 ≥15%（INAO 為準；課內說明）。
2. **多個 AOC 規格是「修訂草案」（國家異議程序中）**：Cairanne 2026 草案把 Grenache 下限 50%→40%、白品種上限 5%→15%；Vinsobres／Beaumes-de-Venise 草案納入白酒；Hermitage／Crozes-Hermitage／Cornas／Condrieu／Gigondas 等亦為草案。課內只採各版本一致的數字；Cairanne 比例、顏色清單不進測驗。
3. **Côtes du Rhône 村莊數與省數**：INAO 2026 草案列 176 村莊／7 省（正文又寫 6 省）；WineWithSeth 172／6 省 → 只寫「約 170 餘個村莊」，不考。單產 51 hl/ha（上限 60）、最低酒精 11%／10.5%（北）出自草案 → 標示、不考。
4. **le râpé（教皇新堡）**：Drive 筆記 2%；協會 2021 年文件只顯示「36 hl/ha 起失去 AOC，若產出 râpé 則 42 起」；INAO 文字未載百分比 → 標明、不考。教皇徽章瓶（浮雕）INAO 規格頁無此規定 → 標明未核對。
5. **各 AOC 面積**：Saint-Joseph 1,415（Drive／Inter Rhône 2024）vs 1,504（Inter Rhône 2025）；Crozes-Hermitage 2,073／2,139／1,700（INAO 2019）；Saint-Péray 116（Drive）vs 128（Inter Rhône 2025）；Laudun 580（INAO 草案）／591（2023）／512（2025）；教皇新堡 3,200（2010）／逾 3,000 → 一律標年份、只用相對關係（如「Crozes 最大、Hermitage 最小」）。
6. **Laudun 與 Cairanne 的酒款顏色**：INAO 規格只列紅與白，但 Inter Rhône 2025 表仍有 Laudun 約 31%、Cairanne 約 7% 粉紅（可能是過渡期或口徑）→ 未能確認，不考顏色。
7. **VDN 殘糖與陳年年限**：Drive 筆記 Rasteau VDN 殘糖 ≥45 g/L、Muscat de Beaumes-de-Venise ≥100 g/L、ambré／tuilé ≥3 年、hors d'âge ≥5 年；本次讀到的 INAO 文字只載葡萄汁天然糖 ≥252 g/L → 殘糖與年限不考。
8. **Vacqueyras／Vinsobres 法令日期**：INAO 同一份文件兩處日期不同（8/9 vs 8/15；2/15 vs 2/17），年份一致 → 只考年份。
9. **Brézème／Seyssuel**：Drive 說 Brézème 為 Côtes du Rhône 的一部分、非獨立 AOC（採用）；Seyssuel 歸 IGP Collines Rhodaniennes 為一般說法，IGP 規格未核對 → 不考。Grignan-les-Adhémar 舊名 Coteaux du Tricastin（改名至 2010 年）僅 Drive 單一來源，課內寫、不作為正確答案。
10. **Saint-Joseph 村莊數**：INAO 為 26 個村莊的劃界範圍；Drive 文章稱「六個村莊」（可能指主要種植村）→ 只用 INAO 的 26、其中 23 在 Ardèche。
11. **Château-Grillet 所有權**：INAO 文件稱同一家族自 1830 年壟斷，Decanter 報導 2011 年 François Pinault 買下 → 課內並列；不考。
- 未取用：Inter Rhône 教學包（依既定決定）；Wine Folly／Jancis Robinson 本階段未查到可補足的條目，風格描述（共發酵目的、Cornas 避風、arzelle／gore 土壤詞彙）標為「一般說法」、不進測驗。
- Level 3 前待辦：INAO 草案轉為正式版後（Cairanne、Vinsobres、Beaumes-de-Venise 白酒等）再核對比例；le râpé 百分比；Seyssuel／IGP 規格。
