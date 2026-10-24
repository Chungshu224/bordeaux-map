# 🇫🇷 法國隆河（Vallée du Rhône）課程設計（Diploma／MW 備考導向）

> 狀態：**設計稿**（尚未建立程式、路由或內容）。本文件定義課程定位、三階段 21 課大綱、各課重點與查證清單、互動功能與實作階段，供確認後開工。
> 分支：`feat/rhone-course-design`（未合併）
> 課程代號建議：`rhone`；課程 ID 前綴 `rh-l{階段}-{序號}`（與 `gr-l1-1` 同格式）

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
- **已知出入（需定案）**：
  1. Côtes du Rhône 的 Syrah＋Mourvèdre 最低比例（筆記 15%、WineWithSeth 20%）
  2. 各 cru 升格年份與最新 cru 總數（本稿暫用 18＝北 8＋南 10，含 2024 年 Laudun）
  3. 各 AOC 面積與單產（來源年份不一，建議一律標註年份）
  4. Costières de Nîmes 是否納入「隆河」課程範圍

## 8. 已確認的決定（2026-10-25）

1. 範圍：只做 Vallée du Rhône（Ventoux／Luberon／Costières 僅作簡介）。
2. 結構：沿用 3 階段 21 課，北／南在 Level 2 分開教。
3. 流程：照希臘流程，依第 6 節 A→F 階段，每階段新分支、推送、使用者說「合併」才合併；階段之間因未合併，後一階段從前一階段分支切出。
4. 公開：先只給管理員（`ADMIN_ONLY_COURSES` 加入 `rhone`）。
5. 資料：Inter Rhône 2025 數據改用其網頁版（vins-rhone.com），不用教學包 PDF。
6. 排程：各階段以排程任務依序啟動（見使用者端的排程清單）。
