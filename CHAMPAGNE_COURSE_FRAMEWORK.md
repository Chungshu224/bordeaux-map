# 🥂 法國香檳產區（Champagne）課程設計（Diploma D3／D5／MW 備考導向）

> 狀態：**階段 A（框架）、階段 B（Level 1 內容）已完成**，分支 `feat/champagne-course-framework`（見文末〈狀態區塊〉）。本文件定義課程定位、三階段 21 課大綱、各課重點與查證清單、互動功能與實作階段。
> 分支：`feat/champagne-course-design`（未合併，從 master 切出）
> 課程代號建議：`champagne`；課程 ID 前綴 `ch-l{階段}-{序號}`（如 `ch-l1-1`），沿用 Greece／Rhône 的骨架

## 1. 定位與設計原則

- **對象**：準備 WSET Diploma 並延伸至 MW 的學習者。香檳在 Diploma 中出現兩次：**D3（Wines of the World，法國香檳產區）**與 **D5（Sparkling Wines，氣泡酒釀造與全球氣泡酒）**，所以本課同時涵蓋「產區」與「傳統法釀造」，並在 Level 3 與其他氣泡酒做比較。
- **與既有課程的關係**：沿用 3 階段 × 21 課的骨架與共用元件（`courseHome`、`regionMap`、遊戲引擎、品飲筆記、成就、詞彙、`gt()` 字典）。既有程式中已有零星香檳內容（`src/data/lessons/l3-5.js`、`l4-6.js`、`l4-11.js`、各國 Cava／Crémant 對照投影片），開工前要先盤點，避免重複或互相矛盾；可連結但不複製。
- **香檳的教學主軸**（與希臘、隆河不同之處）：
  1. **釀造即風土之外的第二主角**：同一個產區，風格差異大半來自調配（assemblage）、儲備酒、二次發酵後的陳年與 dosage——必須把「產區」與「釀造」並重。
  2. **以村莊為單位的分級**：319 個 cru（村莊）、17 個 Grand Cru、42 個 Premier Cru 的 Échelle des Crus 歷史與現況（2010 年廢除量表，但既有村莊可保留稱呼）。
  3. **產業結構與價格機制**：Comité Champagne（CIVC）的年度產量上限、儲備酒制度、葡萄價格、Grandes Marques／種植者（RM）／合作社（CM）的分工與出貨量下滑，是 MW 論述題素材。
  4. **氣候變遷**：採收提早、酸度下降、新准品種（含 2025 年加入的 Chardonnay Rosé），與北方邊緣氣候的本質。
- **事實原則**（沿用）：數字一律標註年份，優先 Comité Champagne／CIVC 官方資料，其次 INAO 產品規格；來源有出入者課內標明、不進測驗。

## 2. 課程結構（3 階段 21 課）

### Level 1 - 香檳入門（6 課）
- **CH1M1 歷史、地理與風土**
  - `ch-l1-1` 認識香檳（15 分）
  - `ch-l1-2` 地理、氣候與白堊土壤（16 分）
- **CH1M2 葡萄與釀造**
  - `ch-l1-3` 葡萄品種（16 分）
  - `ch-l1-4` 香檳如何釀成：傳統法概論（18 分）
- **CH1M3 風格與評量**
  - `ch-l1-5` 酒款風格、甜度與標籤（18 分）
  - `ch-l1-6` Level 1 綜合評量（25 分）

### Level 2 - 香檳產區與法規（8 課）
- **CH2M1 法規與分級**
  - `ch-l2-1` AOC 法規與 Échelle des Crus（20 分）
- **CH2M2 四大產區**
  - `ch-l2-2` 漢斯山（Montagne de Reims）（20 分）
  - `ch-l2-3` 馬恩河谷與白丘（Vallée de la Marne、Côte des Blancs）（22 分）
  - `ch-l2-4` 巴爾丘（Côte des Bar）與外圍產區（20 分）
- **CH2M3 釀造與生產者**
  - `ch-l2-5` 釀造 I：壓榨、一次發酵與調配（22 分）
  - `ch-l2-6` 釀造 II：二次發酵、陳年與除渣（22 分）
  - `ch-l2-7` 酒款類型、生產者結構與靜態酒（20 分）
- **CH2M4 評量**
  - `ch-l2-8` Level 2 綜合評量（30 分）

### Level 3 - 香檳 Diploma／MW 精修（7 課）
- **CH3M1 栽培與釀造**
  - `ch-l3-1` 葡萄栽培深度與氣候變遷（22 分）
  - `ch-l3-2` 釀造風格深度：氧化 vs 還原、陳年與 dosage（24 分）
- **CH3M2 風土、比較與法規**
  - `ch-l3-3` 風土與風格比較，含其他氣泡酒（24 分）
  - `ch-l3-4` 法規深度與標籤判讀（22 分）
- **CH3M3 產業、應考與評量**
  - `ch-l3-5` 產業、市場與貿易（20 分）
  - `ch-l3-6` Diploma 氣泡酒品飲與論述（25 分）
  - `ch-l3-7` Level 3 綜合評量（35 分）

## 3. 各課重點與查證清單

> ⚠＝數字或規定須先對照 Comité Champagne／INAO 產品規格再寫入；**未定案前不進測驗**。

### Level 1
| 課 | 重點 | 備註與 ⚠ |
|---|---|---|
| ch-l1-1 | 羅馬與中世紀的酒、Reims 加冕與酒；Dom Pérignon 迷思（「發明香檳」是後世神話）；氣泡的科學（英國 Merret 1662 的二次發酵紀錄）；19 世紀大廠崛起（Veuve Clicquot 轉瓶等）；1911 暴動；1927 年產區劃界；2015 年 UNESCO「香檳山坡、酒廠與酒窖」；一戰與二戰；出貨量與地位 | ⚠ 歷史年代與人物逐項查證，神話與事實分開寫 |
| ch-l1-2 | 位置（巴黎東北約 150 公里）、北方邊緣氣候（年均溫約 11°C，海拔 90–300 公尺）、白堊（Belemnita 與 Micraster 兩種白堊層）、Marne 66%／Aube 23%／Aisne 10%（Haute-Marne、Seine-et-Marne 其餘）、四大產區概述、白堊窖（crayères）與 UNESCO | ⚠ 比例與面積以 CIVC 最新關鍵數字為準（2023 資料 34,200 公頃，319 個 cru） |
| ch-l1-3 | Pinot Noir、Meunier、Chardonnay 三大品種（比例約 38／31／31，不同年度資料略有出入）；四個「被遺忘」品種 Arbane、Petit Meslier、Pinot Blanc、Pinot Gris 合計約 0.3%；2025 年新增 Chardonnay Rosé；各品種在酒中的角色 | ⚠ 品種比例兩個來源出入（Chardonnay 31%／32%，Meunier 31%／30%），課內標註年份，不進測驗 |
| ch-l1-4 | 傳統法七步：壓榨→一次發酵→調配→裝瓶（tirage）→二次發酵→酒渣陳年→轉瓶／除渣（dégorgement）→ dosage→封瓶；二次發酵產生約 5–6 大氣壓；與 Charmat／轉移法概念對照 | ⚠ 壓力數字、tirage 糖量（約 24 g/L）寫入前核對 |
| ch-l1-5 | 風格：NV、Vintage、Blanc de Blancs、Blanc de Noirs、Rosé、Prestige Cuvée；甜度由 Brut Nature（0–3）到 Doux（>50 g/L）；標籤上的 NM／RM／CM／MA／RC 等代碼；NV 約占八成以上產量 | ⚠ 甜度級別的 g/L 邊界值，以 EU／INAO 規格為準（此處 Brut ≤12、Extra Dry 12–17、Sec 17–32、Demi-Sec 32–50、Doux >50 需核對允許誤差） |
| ch-l1-6 | 8 題綜合評量（及格 60） | 避開有出入的數字 |

### Level 2
| 課 | 重點 | 備註與 ⚠ |
|---|---|---|
| ch-l2-1 | AOC 法規：允許品種、每年由 Comité Champagne 提案與 INAO 核定的產量上限、最低酒精、壓榨規定（4,000 公斤一壓、cuvée 與 taille 的限額）、陳年最低規定（NV 自裝瓶起 ≥15 個月；Vintage ≥36 個月）；Échelle des Crus（80–100%；100% ＝ Grand Cru，90–99% ＝ Premier Cru）、2010 年廢除量表 | ⚠ 壓榨與 cuvée／taille 的數字（歷史上 2,050 公升＋500 公升）；陳年規定「自裝瓶」與「酒渣上」的定義；Premier Cru 村莊數（42） |
| ch-l2-2 | 漢斯山：Pinot Noir 為主；9 個 Grand Cru 村莊（Ambonnay、Beaumont-sur-Vesle、Bouzy、Louvois、Mailly-Champagne、Puisieulx、Sillery、Verzenay、Verzy）；Premier Cru 例；Chardonnay 在北坡（Montagne 的 Villers-Marmery、Trépail 等）；Coteaux Champenois 的 Bouzy 紅酒 | ⚠ Grand Cru 村莊名單逐一核對；各村主要品種 |
| ch-l2-3 | 馬恩河谷：Meunier 為主；Grand Cru 僅 Aÿ（含 Aÿ-Champagne）與 Tours-sur-Marne（Pinot Noir）；Mareuil-sur-Aÿ 等 Premier Cru。白丘：Chardonnay 為主；6 個 Grand Cru（Avize、Chouilly、Cramant、Le Mesnil-sur-Oger、Oger、Oiry）；Chouilly 與 Tours-sur-Marne 的「僅限單一顏色品種」說法 | ⚠ 17 個 Grand Cru 總數（9＋2＋6）與各村限制須對照官方資料 |
| ch-l2-4 | 巴爾丘（Aube）：Pinot Noir 約 83%（約 7,900 公頃、64 村，2022 數據）、基末里階（Kimmeridgian）泥灰岩土壤、與 Chablis 相連；Côte de Sézanne、Vitry-le-François 等外圍；Aisne 與 Haute-Marne、Seine-et-Marne；Rosé des Riceys（靜態粉紅 AOC） | ⚠ 巴爾丘面積／村莊數用最新資料；Rosé des Riceys 規格 |
| ch-l2-5 | 採收（手採規定）；壓榨（Coquard 垂直壓榨機）；一次發酵（不鏽鋼、橡木桶）；MLF 取捨；調配（assemblage）：多品種、多區塊、多年份；儲備酒（réserve）與永續儲備酒（solera／perpetual reserve）；Comité Champagne 的 réserve qualitative | ⚠ 儲備酒制度的上限與使用規則 |
| ch-l2-6 | tirage（酒、糖、酵母、澄清劑）；皇冠蓋 vs 軟木塞；酒渣陳年與自溶（autolysis）風味；轉瓶（remuage、gyropalette）；冷凍頸部除渣；dosage（liqueur d'expédition）；除渣日期標示；上市後的陳年 | ⚠ 自溶時間與風味關係寫「趨勢」，避免硬數字 |
| ch-l2-7 | 酒款類型細節（Prestige、Vintage、Rosé 兩種作法：調配約 5–20% 紅酒，或浸皮）；生產者結構（Grandes Marques／négociant、種植者酒莊 RM、合作社 CM、MA 買家品牌）；代表酒款不列價格；Coteaux Champenois、Ratafia、Fine de la Marne | ⚠ 生產者家數與比例（2023：16,200 種植者、370 酒廠、130 合作社；2025 版：16,460／410／120），標註年份與來源 |
| ch-l2-8 | 重點回顧＋10 題綜合評量（及格 60） | 避開有出入的數字 |

### Level 3
| 課 | 重點（對應 Diploma／MW） | 備註與 ⚠ |
|---|---|---|
| ch-l3-1 | 修剪制度（Taille Chablis、Cordon de Royat、Guyot、Vallée de la Marne）；高密度種植（約 8,000 株／公頃）；霜害、黴病、冰雹；採收期提早與酸度下降；可持續認證（Viticulture Durable en Champagne、HVE）、除草劑與覆蓋作物；新品種／砧木研究 | ⚠ 認證面積比例、除草劑禁令時程須對照現況 |
| ch-l3-2 | 還原式 vs 氧化式風格；桶發酵與桶陳；是否做 MLF；儲備酒比例與 NV 風格穩定；dosage 與 zero dosage 趨勢；除渣日期；酒渣陳年長短與風味；單一葡萄園／單一年份（lieu-dit、clos）新風潮 | 概念層可寫；具體比例以酒莊為準，不寫未經查證的酒莊細節 |
| ch-l3-3 | 風土比較：漢斯山 vs 馬恩河谷 vs 白丘 vs 巴爾丘；Aÿ vs Cramant vs Bouzy；Blanc de Blancs vs Blanc de Noirs 的風格；對照 Cava、Franciacorta／Trentodoc、英國氣泡酒、Crémant、Tasmania；連結 Chablis（同為白堊／石灰質）與勃艮地課程 | 建立盲品／論述用比較表 |
| ch-l3-4 | 標籤判讀：NM／RM／CM／RC／SR／ND／MA；dosage 用語；Vintage／Millésimé 與 Prestige 用語；產區保護範圍（「Champagne」名稱在全球的保護、與「méthode champenoise」用語的禁用）；Comité Champagne 的角色 | ⚠ 標籤代碼全表須對照官方 |
| ch-l3-5 | 年度出貨量（2023：約 2.99 億瓶；2025：約 2.66 億瓶，營收約 57 億歐元，2025 資料，標註來源與年份）；庫存約相當於四年出貨；出口占比；各大集團（LVMH、Vranken-Pommery、Lanson-BCC、Pernod Ricard 等）；葡萄價格與供需；關稅、通膨與市場下滑；MW 題：產量上限政策與品牌 | ⚠ 最新年度數字須重查（2026 年第一季是否已有 2025 全年更新）；公司結構事實逐項核對 |
| ch-l3-6 | Diploma D5 風格的氣泡酒品飲筆記（SAT）示範；NV 比較盲品線索；MW 風格論述範例：「氣候變遷下香檳是否仍需 dosage？」「儲備酒制度對 NV 風格的影響」「種植者酒莊 vs Grandes Marques 的品質與價值」 | 考試形式提醒「以 WSET／IMW 官方最新規格為準」 |
| ch-l3-7 | 12 題綜合評量（及格 60） | 避開有出入的數字 |

## 4. 互動功能設計

### 4.1 互動地圖（香檳的特色：以村莊為單位）
- 香檳的分級單位是**村莊（commune）**，與希臘（PDO 多邊形）、隆河（AOC 多邊形）不同。建議做法：
  1. 取得 319 個 cru 村莊清單（Comité Champagne／INAO 公開資料，含 Échelle 百分比或 Grand Cru／Premier Cru 標記）。⚠ 須確認清單來源與授權。
  2. 村莊邊界使用法國公開行政區資料（IGN Admin Express／data.gouv.fr，開放授權）依 INSEE 代碼合併，產生 `public/champagne/champagne_crus.geojson`。
  3. 圖層：以 Grand Cru（17）／Premier Cru（42）／其餘 cru 三色；可依四大產區（漢斯山／馬恩河谷／白丘／巴爾丘）篩選；點選村莊顯示主要品種、所屬產區、分級、特色。
- 備選：若村莊清單無法取得，退而求其次用 Bianchi et al.（2022，CC0）的 `PDO-FR-*` Champagne 單一多邊形加「示意點」（比照希臘 PGI），明確標示非官方邊界。
- **氣候圖層**：重用 `build-greece-climate.mjs` 的流程（Open-Meteo ERA5：夏季均溫、日照、雨量），以四大產區代表點為主；再加「葡萄生長季均溫趨勢」線，對應氣候變遷教學。
- 白堊土壤層：視資料取得性（BRGM 公開地質圖）作為選配，不阻擋上線。

### 4.2 遊戲（沿用 QuizEngine）
- **產區速答**：村莊 → 四大產區／分級（簡單：17 個 Grand Cru 村莊；困難：加入 Premier Cru）。
- **品種配對**：品種 → 角色與風格；產區 → 主要品種。
- **釀造順序排序**（香檳特有的新題型，若引擎支援排序題；否則改多選）：傳統法步驟排序、dosage 級別對應 g/L。
- **分級辨識**：標籤代碼（NM／RM／CM…）、甜度用語、陳年規定、Échelle 規則。
- **知識閃問**：取自 Level 1–3 課程測驗，套用 lesson overlay 翻譯。

### 4.3 品飲筆記
- 沿用 `tasting_notes`（`source = 'champagne'`，產區存 `aoc_id`），需 migration 擴充 `wine_type`：NV、Vintage、Blanc de Blancs、Blanc de Noirs、Rosé、Prestige、Demi-Sec／Doux、Coteaux Champenois／靜態、其他。
- 詞彙：氣泡（mousse：細緻度、持久度）、自溶（餅乾、brioche、烤麵包、杏仁）、一級香氣（青蘋果、檸檬、白花）、氧化（堅果、焦糖）；SAT 風格結構（甜度、酸度、酒體、氣泡、尾韻）。

### 4.4 成就、詞彙、其他
- 成就：仿 `greeceAchievementSystem.js`（課程完成、探索 17 個 Grand Cru、遊戲滿分、筆記）；專屬成就如「十七座聖殿」（探索全部 Grand Cru 村莊）。
- 詞彙辭典：加入 `champagne`，第三語為法文（與隆河共用 `fr` 欄位方案，兩個課程需協調同一個 migration，避免衝突）。
- 英日文：全部 UI 與課程內容與既有流程相同。

## 5. 技術落點（比照希臘／隆河）

- `src/components/champagne/`：`ChampagnePage`、`ChampagneLevelSelector`、`ChampagneLearningSystem`、`ChampagneCourseLayout`、`ChampagneMapPage`、`games/*`、`notebook/*`
- `src/data/champagne/ch-l*.js`（21 課）、`gameData.js`、`tastingData.js`
- `src/stores/champagneLearningStore.js`、`champagneAchievementSystem.js`
- 共用接點：`courseProgressSync.js`、`lessonContentLoader.js`、`router/index.js`（`/champagne`）、`PlatformHome.vue`（`ADMIN_ONLY_COURSES`）、`regionThemes.js`、`useAchievements.js`、詞彙元件
- ⚠ **與隆河分支的合併衝突**：兩個課程都會修改上述共用檔案（router、PlatformHome、useAchievements、courseProgressSync、詞彙 migration）。建議兩邊各自完成後，一前一後合併，第二個合併時再解衝突，或先抽出共用的「新課程註冊」工具。
- `public/champagne/champagne_crus.geojson`、`public/data/champagne-climate.json`、`scripts/build-champagne-*.mjs`
- `supabase/migrations/…`：wine_type 擴充、courses 新增 `champagne`（`active=false`）、詞彙欄位

## 6. 實作階段（建議，與隆河同步）

| 階段 | 內容 | 分支 |
|---|---|---|
| A | 框架：頁面、路由、進度、21 課空殼、en/ja 標題；僅管理員可見 | `feat/champagne-course-framework` |
| B | Level 1（6 課）＋測驗＋en/ja | `feat/champagne-l1` |
| C | Level 2（8 課）＋查證 | `feat/champagne-l2` |
| D | Level 3（7 課）＋論述題範本 | `feat/champagne-l3` |
| E | 村莊地圖、氣候圖層、遊戲、品飲筆記、成就、詞彙 | `feat/champagne-interactive` |
| F | 全面檢查、migration 準備 | `feat/champagne-final` |

每階段維持：新分支開發 → 推送 → 使用者說「合併」才合併；階段之間因未合併，後一階段從前一階段分支切出。

## 7. 資料來源與待查證

- **官方**：Comité Champagne（champagne.fr、champagne.education 的 Key Figures 與教學資源）、INAO Champagne 產品規格（Cahier des charges）、DGCCRF 標籤指南。
- **第三方**：WineWithSeth（Champagne AOC）、Wikipedia（僅交叉比對）、Difford's Guide（甜度等級）、CMS 教材。
- **使用者 Drive 既有資料**：`Champagne Region Introduction`（簡報）、`06La Vinification du Champagne香檳釀造`（簡報，兩個版本）、`Champagne grand cru`（試算表）、`15 Champagne Prestige Cuvee`（文件）、`CMS Champagne.pdf`、`葡萄酒賞析 香檳釀造&不同類型的氣泡酒`（講義）、`法國乳酪 Bourgogne/Champagne`（餐酒搭配素材）。
- **已知出入（需定案）**：
  1. 品種比例：Chardonnay 31%／32%、Meunier 31%／30%（不同年份資料）
  2. 生產者家數：2023 版（16,200／370／130）與 2025 版（16,460／410／120）
  3. 出貨量：2023 約 2.99 億瓶、2025 約 2.66 億瓶（年度不同，非衝突，但須標註年份）
  4. Grand Cru 每村的品種限制（Chouilly、Tours-sur-Marne、Aÿ 的說法）
  5. 甜度等級邊界值與 EU 允許誤差
  6. Premier Cru 村莊數（42）與 Échelle 退場後的現行用法

## 8. 已確認的決定（2026-10-25）

1. 範圍：只做 Champagne（Crémant／Cava／Franciacorta 僅在 Level 3 作比較課內容）。
2. 結構：沿用 3 階段 21 課，Level 2 以四大產區加釀造分開教。
3. 地圖：採村莊層級（319 村清單＋行政區邊界）；清單取得失敗時自動退回簡易版（單一多邊形＋示意點）。
4. 排程：A→F 六個排程任務，與隆河同一組時段並行（A 對應隆河 B 的時段，F 之後多一個時段）。
5. 公開：先只給管理員（`ADMIN_ONLY_COURSES` 加入 `champagne`）。

## 9. 已完成的框架項目（階段 A，2026-10-25）

- `src/components/champagne/`：`ChampagnePage`、`ChampagneLevelSelector`（3 階段）、`ChampagneLearningSystem`、`ChampagneCourseLayout`（複製自希臘並改寫；地圖／遊戲／筆記／成就／詞彙尚未接上）。
- `src/locales/champagneUi/`（`index.js`、`en.js`、`ja.js`）：獨立的 `gt()` 字典（未動 greeceUi，避免與隆河分支衝突）。
- `src/stores/champagneLearningStore.js`：21 課大綱（依第 2 節）、localStorage 進度（key `champagne-wine-academy-progress:{userId}`）、同步課程代號 `champagne`。
- `src/data/champagne/ch-l1-1.js … ch-l3-7.js`：21 個空殼（封面＋「內容製作中」），`src/locales/{en,ja}/lessons/champagne/*.json` 先放標題與簡介。
- 課程首頁的地圖／遊戲／筆記入口顯示「製作中」（停用）；成就入口暫不顯示。
- `supabase/migrations/20261025000000_add_champagne_course.sql`：courses 新增 champagne（active=false、show_on_home=false），**未套用**。

### 共用檔案改動（解衝突用，皆為純新增條目）

| 檔案 | 改動 |
|---|---|
| `src/router/index.js` | 在 `/greece/course` redirect 之後新增 `/champagne`、`/champagne/course` 路由；`COURSE_ACCESS_RULES` 在 `Greece` 後新增 `Champagne` 一行 |
| `src/components/PlatformHome.vue` | 舊世界卡片區尾端（Greece 卡片之後）新增 champagne 卡片；`courseConfig` 在 greece 後新增一行；`courseStatuses`／`courseShowHome` 各加 `champagne: false`；`ADMIN_ONLY_COURSES = ['greece', 'champagne']`；樣式區在 `/* Greece card */` 前新增 champagne 樣式 |
| `src/components/shared/courseHome/regionThemes.js` | 新增 `champagne` 主題（香檳金 #A8801C） |
| `src/components/PresentationLesson.vue` | `getCourseGradient`／`getCourseIcon` 各新增 `ch-` 一行 |
| `src/data/lessonContentLoader.js` | 在 `gr-l3-7` 後新增 21 行 `ch-l*` 註冊 |
| `src/lib/courseProgressSync.js` | 在 Loire 區塊前新增 `saveChampagneLesson`、`loadAndMergeChampagneProgress` |
| `src/locales/{en,ja,zh-TW}/home.js` | `labels` 新增 `champagne`；`courses` 新增 `champagne` 區塊（australia 之前） |
| `src/locales/{en,ja,zh-TW}/common.js` | 課程名稱表新增 `champagne` |

尚未改動（留待階段 E）：`useAchievements.js`、詞彙元件（`WineGlossary`／`AdminGlossary`）、詞彙與 tasting wine_type migration。

## 10. 第 7 節「已知出入」查證結論（階段 A，來源以 WineWithSeth 彙整 Comité Champagne 資料、champagne.education；官方 PDF 尚待階段 B 補強）

1. **品種比例**：Pinot Noir 38%；Chardonnay 31%（2025 關鍵數字為 32%）、Meunier 31%（2025 為 30%）；Arbane、Petit Meslier、Chardonnay Rosé、Pinot Blanc、Pinot Gris 合計約 0.3%。結論：課內以「約 38／31／31，2025 版 32／30」標年份，**不進測驗**。
2. **生產者家數**：2025 版為種植者 16,460、酒廠 410、合作社 120（與設計稿 2025 版數字一致）；2023 版 16,200／370／130 為較舊年度。結論：以 2025 為準並標年份，不進測驗。
3. **出貨量**：2025 約 2.661 億瓶（酒廠 1.919 億、合作社與種植者 0.742 億），營收約 57 億歐元；2023 約 2.99 億瓶。屬年度差異而非衝突，標註年份。
4. **Grand Cru 品種限制**（Chouilly、Tours-sur-Marne、Aÿ）：查無任何形式的法規限制，僅有「慣例／風格」描述（白丘幾乎全為 Chardonnay；Aÿ 以 Pinot Noir 著稱）。結論：**不在課內寫成法規**，僅寫風格傾向；Grand Cru 總數 17、白丘 6 村、馬恩河谷 2 村（Aÿ、Tours-sur-Marne）與設計稿一致。
5. **甜度邊界**：Brut Nature 0–3、Extra Brut 0–6、Brut <12（至 12）、Extra Dry 12–17、Sec 17–32、Demi-Sec 32–50、Doux >50 g/L；法規容許每級 ±3 g/L，相鄰級別重疊。champagne.education 的 Brut 為「<12」。結論：課內寫邊界值並註明 ±3 g/L 容許誤差與 Brut Nature 無添加糖的差別；邊界數值不進測驗，只考級別順序。
6. **Premier Cru 村莊數**：設計稿為 42，WineWithSeth 寫「約 44」。結論：**來源有出入，課內寫「約 42–44（依來源）」，不進測驗**；階段 C 以 Comité Champagne／INAO 官方清單核對。另：Échelle des Crus 於 2004 起因歐盟競爭法停止作為固定葡萄價格量表，INAO 於 2010 廢除量表，但原有 Grand Cru／Premier Cru 村莊保留稱呼（1952 年 7 月 1 日法令引入）；設計稿「2010 年廢除量表」需註明「價格量表 2004 起停用」。

## 11. 狀態區塊

| 階段 | 狀態 | 分支 |
|---|---|---|
| A 框架 | ✅ 完成（建置驗證通過） | `feat/champagne-course-framework` |
| B Level 1 | ✅ 完成（6 課，建置驗證通過） | `feat/champagne-l1`（從 `feat/champagne-course-framework` 切出） |
| C Level 2 | ⏳ 待做 | `feat/champagne-l2` |
| D Level 3 | ⏳ 待做 | `feat/champagne-l3` |
| E 互動（地圖、遊戲、筆記、成就、詞彙） | ⏳ 待做 | `feat/champagne-interactive` |
| F 全面檢查、migration | ⏳ 待做 | `feat/champagne-final` |

## 12. Level 1 內容說明與查證註記（階段 B，2026-10-25）

**內容**：`ch-l1-1` … `ch-l1-6` 各 4 張內容投影片＋知識檢測（3 題）；`ch-l1-6` 為 8 題綜合評量（及格 60）。en／ja 為 flat-key overlay，已做逐鍵覆蓋率檢查（每課中文原文 vs en／ja：缺漏 0、多餘 0）。測驗正解位置已平均分配。未新增 `champagneUi` 字串（Level 1 內容皆在課程 JSON 內）。

**官方來源（本階段實查）**：Comité Champagne 的 Key Figures（2023、2024、2025 三版 PDF）、champagne.fr「Champagne at a glance」與 FAQ（含甜度級別、最低陳年、5–6 bar、UNESCO 2015-07-04、1927 法律、1936 AOC）。INAO 產品規格全文與官方 PDF 的村莊清單留待階段 C。

**查證結論（更新第 10 節）**
1. **Key Figures 三個版本**：2023 版——種植者 16,200／酒廠 370／合作社 130；2024 版——16,300／390／125，出貨 2.717 億瓶、營收 58 億歐元、出口占 25%；2025 版——16,460／410／120，出貨 2.661 億瓶（2025 採收 2.64 億瓶）。34,200 公頃、319 cru、5 個 département、3 個大區在三版一致。課內標年份，生產者家數與出貨量**不進測驗**。2025 全年營收官方頁面本次未取得，未寫入。
2. **品種比例**：官方 2025 版為 Pinot Noir 38／Chardonnay 32／Meunier 30；較早資料為 38／31／31。四個古老品種：官方 FAQ 寫「不到 0.4%」，較早資料寫約 0.3%——課內寫「不到 0.4%」並註明，不進測驗。
3. **Chardonnay Rosé**：來源日期不一——有寫 2025 年 7 月產區核准，也有寫歐盟 2026 年 6 月確認；另 Wine Spectator 稱它是約 1900 年起在香檳區有紀錄的 Chardonnay 粉紅變異，因行政疏失一度從規格消失、2025 年重新核准；許可品種「共 8 種」。課內不寫確切日期、不進測驗。**Voltis**（抗病品種，2022 年底核准試種，園區上限 5%、單一調配上限 10%）屬「新品種」，與傳統八品種分開，留待 Level 3。
4. **各 département 比例**：官方 Key Figures 未列分項。常見說法 Marne 約 66%／Aube 約 23%／Aisne 約 10%，但 Difford's Guide 寫 Marne 約 75%。課內只教大小順序（Marne 最大），比例不進測驗。
5. **歷史年代**：Comité Champagne FAQ 把 **1911** 寫為村莊價格量表（80–100%）首次官方設立，與 Wikipedia 對「1911 暴動後才有量表」的敘述順序略有出入；暴動（1911 年 1 月，Damery／Hautvillers／Aÿ，逾 4 萬軍隊，Aube 隨後納入）、**1927** 法律定界與品種、**1936** AOC 確認、1952 年起 Grand／Premier Cru 稱呼、**2010** 量表廢除，均在課內標出處。Level 2 法規課需再以 INAO 文件核對「2004 年起價格量表停用」。
6. **Dom Pérignon**：Merret 論文 1662 早於他 1668 到任 Hautvillers；Comité Champagne 明言「香檳不是任何人發明的」。「我在喝星星」被廣泛認為是後世廣告，課內寫「普遍被認為」。
7. **甜度**：Brut Nature 0–3（不加糖）、Extra Brut 0–6、Brut <12、Extra Dry 12–17、Sec 17–32、Demi-Sec 32–50、Doux >50 g/L，±3 g/L 容許；只考順序。
8. **其他仍屬「常見教科書值」而未進測驗**：tirage 糖量約 24 g/L（約 4 g/L 產生 1 bar）、二次發酵增加約 1.2–1.3% 酒精、NV 約占七至八成產量、Rosé 調配紅酒約 5–20%、年均溫約 11°C、海拔 90–300 公尺、巴黎東北約 150 公里。Level 2 對照 INAO 規格後可升級為正式數字。

**與既有課程的盤點**：`l3-5.js`（僅標題提及 Champagne 為挑戰酒款）、`l4-6.js`（Champagne 名稱保護案例：「3,000+ 起仿冒」「市場萎縮 80%」為該課自有數字，本課未引用）、`l4-11.js`（Champagne 50 指數）、`l1-5.js`／`climateAndEnvironmentLessons.js`（Crémant de Bordeaux 傳統法、至少 12 個月酒渣）、`loire/lo-l1-7.js`／`lo-l3-5.js`（Crémant de Loire 對照：NV 15 個月其中 12 個月酒渣、Vintage 3 年）——與本階段內容一致，無矛盾；`ch-l1-4`、`ch-l1-5` 內以文字指引羅亞爾課程，未做超連結。
