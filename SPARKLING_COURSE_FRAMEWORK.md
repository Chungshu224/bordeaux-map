# 🥂 全球氣泡酒（Sparkling Wines）專論課程設計（WSET Diploma D4 備考導向）

> 狀態：**階段 A 設計中**（僅本框架文件，尚無程式碼）。本文件定義課程定位、三階段 21 課大綱、各課重點與查證清單、考試題型設計、互動功能與實作階段。
> 分支：`feat/sparkling-course-framework`（未合併，從 master 切出）
> 課程代號建議：`sparkling`；課程 ID 前綴 `sp-l{階段}-{序號}`（如 `sp-l1-1`），沿用 Greece／Rhône／Champagne 的骨架
> **本課程不販售，僅供管理員閱讀使用**（見第 7 節）

## 1. 定位與設計原則

- **對象**：準備 WSET Diploma 的學習者。WSET Diploma 的三個品飲考試為 D3（Wines of the World）、D4（Sparkling Wines）與 D5（Fortified Wines），所以氣泡酒對應的是 **D4**。⚠ 既有 `CHAMPAGNE_COURSE_FRAMEWORK.md` 把氣泡酒寫成 D5，應以官方單元編號為準，之後另行更正。
- **以 D4 考試為主**：每課附「考點」與「題型」，Level 3 專門訓練 D4 品飲（SAT）與論述答題；測驗題偏重「為什麼」（原因→風格→價格），而非單純記名稱。
- **獨立專論，不連結其他產區課程**：內容全部重新撰寫，包含香檳；不引用、不導向既有的香檳、Cava、Crémant 等零星內容，也不依賴其他課程的進度。課內不出現「請見某某課程」的連結。⚠ 開工前仍要盤點既有程式中的香檳／氣泡酒內容（如 `l3-5.js`、`l4-6.js`、`l4-11.js`），只用於避免互相矛盾，不複製。
- **全球巡禮**：涵蓋傳統法、槽式法、轉移法、祖傳法及其他釀法的主要產區，從法國、義大利、西班牙到德奧瑞、英國，再到新世界。
- **教學主軸：以「釀法」為經、「產區」為緯**：同一個概念（基酒、二次發酵、陳年、dosage）只在 Level 1／3 講一次，Level 2 的每個產區課都用同一組固定問題比較：
  1. 基酒用什麼品種、什麼氣候？
  2. 採用哪種釀法、陳年多久？
  3. 法規如何限制（品種、陳年、甜度、產量）？
  4. 風格與價格定位落在哪裡？
- **事實原則**（沿用）：數字一律標註年份，優先各產區官方組織（如 CIVC、Consorzio、Consejo Regulador）與 EU／各國法規，其次 WSET 官方教材；來源有出入者課內標明、不進測驗。

## 2. 課程結構（3 階段 21 課）

### Level 1 - 氣泡酒原理與釀法（6 課）
- **SP1M1 氣泡酒是什麼**
  - `sp-l1-1` 氣泡酒概論與全球版圖（15 分）
  - `sp-l1-2` 氣泡的科學：二次發酵、壓力與甜度（18 分）
- **SP1M2 基酒與釀法**
  - `sp-l1-3` 基酒：品種、成熟度、酸度與栽培（18 分）
  - `sp-l1-4` 傳統法（瓶內二次發酵）（20 分）
  - `sp-l1-5` 槽式法、轉移法與其他釀法（20 分）
- **SP1M3 評量**
  - `sp-l1-6` Level 1 綜合評量（25 分）

### Level 2 - 全球氣泡酒產區（8 課）
- **SP2M1 法國**
  - `sp-l2-1` 香檳 I：產區、品種與法規（22 分）
  - `sp-l2-2` 香檳 II：釀造、風格與生產者（22 分）
  - `sp-l2-3` 法國其他：Crémant 與傳統氣泡產區（22 分）
- **SP2M2 其他歐洲**
  - `sp-l2-4` 西班牙：Cava、Corpinnat 與其他（20 分）
  - `sp-l2-5` 義大利：Prosecco、Asti、Franciacorta、Trentodoc、Lambrusco 等（24 分）
  - `sp-l2-6` 德國、奧地利、英國與其他歐洲（22 分）
- **SP2M3 新世界與評量**
  - `sp-l2-7` 新世界：南非、澳洲、紐西蘭、美洲（24 分）
  - `sp-l2-8` Level 2 綜合評量（30 分）

### Level 3 - D4 精修與應考（7 課）
- **SP3M1 風格與釀造深度**
  - `sp-l3-1` 風土與風格比較：氣候、土壤與品種（24 分）
  - `sp-l3-2` 釀造深度：酒渣陳年、dosage、封瓶與瓶塞（24 分）
- **SP3M2 法規與產業**
  - `sp-l3-3` 法規與標籤判讀（22 分）
  - `sp-l3-4` 產業、市場與品質價格（20 分）
- **SP3M3 應考與評量**
  - `sp-l3-5` D4 氣泡酒品飲（SAT）與盲品（25 分）
  - `sp-l3-6` D4 論述與簡答題框架（25 分）
  - `sp-l3-7` Level 3 綜合評量（35 分）

## 3. 各課重點、考點與查證清單

> ⚠＝數字或規定須先對照官方來源再寫入；**未定案前不進測驗**。「考點」是該課在 D4 最容易出題的方向。

### Level 1
| 課 | 重點 | 考點與備註 |
|---|---|---|
| sp-l1-1 | 起泡酒的定義；歷史（Merret 1662 的二次發酵紀錄、Dom Pérignon 是「發明」的神話、19 世紀工業化）；全球主要產區地圖與主要釀法對照；氣泡酒在各產區的消費與價格帶 | 考點：用一句話區分釀法與價格帶。⚠ 歷史年代逐項查證；神話與事實分開寫 |
| sp-l1-2 | 二次發酵化學（酵母把糖轉為酒精與 CO₂）；瓶內壓力（傳統法約 5–6 大氣壓，⚠ 核對）與槽內壓力；氣泡品質（mousse）與細緻度的影響因素；甜度分級（Brut Nature 至 Doux）與 g/L 邊界 | 考點：壓力、甜度級別、氣泡細緻度的成因。⚠ 各級別邊界值與 EU 規定的誤差容許 |
| sp-l1-3 | 基酒需求：高酸、低酒精（約 10–11%，⚠）、風味中性；採收較早的取捨；整串壓榨 vs 破皮；栽培選擇（涼爽氣候、剪枝、產量）；品種：Chardonnay、Pinot Noir、Meunier、Glera、Macabeo／Xarel·lo／Parellada、Chenin Blanc 等 | 考點：為什麼起泡酒偏好冷涼氣候與高酸基酒；各產區基酒如何對應釀法 |
| sp-l1-4 | 傳統法步驟：壓榨→一次發酵→調配→裝瓶（tirage）→二次發酵→酒渣陳年→轉瓶→除渣（dégorgement）→ dosage→封瓶；自溶（autolysis）與風味；各步驟的品質決定因素 | 考點：步驟排序、自溶風味與時間、每步驟對風格的影響。⚠ tirage 糖量、轉瓶方式（人工／機械）寫「趨勢」，避免硬數字 |
| sp-l1-5 | 槽式法（Charmat／Martinotti）；轉移法；祖傳法／Pét-Nat（單次發酵，瓶中完成）；Asti 法（一次發酵中止）；氣體注入（carbonation）；各釀法的成本、風格、代表產區 | 考點：用成本與風格說明為何 Prosecco 與傳統法價位不同；各釀法的標籤用語 |
| sp-l1-6 | 8 題綜合評量（及格 60） | 避開有出入的數字 |

### Level 2
| 課 | 重點 | 考點與備註 |
|---|---|---|
| sp-l2-1 | 香檳：位置與北方邊緣氣候、白堊土壤、四大產區、三大品種與少數品種、AOC 法規（產量上限、壓榨規定、最低陳年）、村莊分級概念 | 考點：產區與品種對應、法規數字。⚠ 面積、cru 數、比例以 Comité Champagne 最新年度資料為準，並標註年份；品種比例各來源有出入，不進測驗 |
| sp-l2-2 | 調配與儲備酒、氧化 vs 還原式風格、NV／Vintage／Blanc de Blancs／Blanc de Noirs／Rosé／Prestige；生產者結構（Grandes Marques、種植者、合作社）與標籤代碼 | 考點：風格成因、NV 一致性的技術。⚠ 生產者家數與出貨量逐年變動，標註年份 |
| sp-l2-3 | Crémant（Alsace、Bourgogne、Loire、Limoux、Jura、Die、Bordeaux、Savoie 等）：品種與陳年規定；Blanquette／Crémant de Limoux；Clairette de Die（祖傳法）；Saumur 與 Vouvray 的氣泡酒 | 考點：Crémant 與香檳的規定差異（採收、壓榨、陳年）。⚠ 各 Crémant 的最低陳年與品種規定逐一核對 |
| sp-l2-4 | Cava：Penedès 與其他產區、Macabeo／Xarel·lo／Parellada、Cava de Paraje Calificado 與陳年等級（Reserva、Gran Reserva）；Corpinnat 為何脫離 Cava；Llebeig 等其他 | 考點：Cava 分級與陳年。⚠ 最新分級名稱與最低陳年；Corpinnat 的法規與成員 |
| sp-l2-5 | Prosecco（DOC／DOCG、Glera、槽式法）；Asti 與 Moscato d'Asti；Franciacorta、Trentodoc、Oltrepò Pavese Metodo Classico；Lambrusco 與其他；義大利氣泡酒用語（Spumante、Frizzante） | 考點：Prosecco 各層級（DOC／DOCG／Rive）、Franciacorta 風格分類。⚠ 產區邊界、各風格的最低陳年與壓力規定 |
| sp-l2-6 | 德國：Sekt、Deutscher Sekt、Winzersekt、品種（Riesling、Pinot 家族）；奧地利：Sekt Austria 三級；英國（England 與 Wales）：品種、白堊土、PDO；瑞士、葡萄牙（Bairrada）、匈牙利等 | 考點：Sekt 的層級與用語、英國為何被視為「第二個香檳」。⚠ 英國 PDO 規定與最新產區名稱；各國層級定義逐一核對 |
| sp-l2-7 | 南非 Cap Classique、澳洲（Tasmania、Victoria、Adelaide Hills，起泡紅酒 Sparkling Shiraz）、紐西蘭（Marlborough 傳統法）、美國（California、Oregon）、加拿大、阿根廷、智利、巴西 | 考點：新世界產區的風格與價格定位、起泡紅酒。⚠ 各國法規、陳年規定與主要產區範圍逐項核對 |
| sp-l2-8 | 重點回顧＋10 題綜合評量（及格 60） | 避開有出入的數字 |

### Level 3（D4 精修）
| 課 | 重點 | 考點與備註 |
|---|---|---|
| sp-l3-1 | 氣候、土壤（白堊、石灰岩、火山岩等）與品種如何決定風格；涼爽、溫和與溫暖氣候的氣泡酒比較；氣候變遷對採收與酸度的影響 | 考點：用環境因素解釋風格差異；氣候變遷論述素材 |
| sp-l3-2 | 酒渣陳年長短與風味；氧化 vs 還原；桶發酵；MLF 取捨；dosage 與 zero dosage；封瓶（皇冠蓋與軟木塞）；除渣日期 | 考點：釀造選擇如何改變風格、價格與陳年潛力。⚠ 具體比例以酒莊為準，不寫未經查證的細節 |
| sp-l3-3 | 跨產區法規比較（EU PDO／PGI、品種、陳年、壓力、甜度用語）；標籤判讀：Traditional Method、Méthode Champenoise 的禁用、Vintage 與 NV、甜度用語；常見法規陷阱 | 考點：看標籤判斷釀法與品質。⚠ 各國標籤用語與最新法規 |
| sp-l3-4 | 產業結構（大廠、種植者、合作社）；品質與價格的關係；市場趨勢（低酒精、Zero dosage、英國與新世界崛起、Prosecco 的規模）；出口與關稅 | 考點：價格與釀法成本論述。⚠ 出貨量與市場數字須重查並標註年份與來源 |
| sp-l3-5 | D4 品飲筆記（SAT）氣泡酒版本：外觀（氣泡）、香氣、口感、結論；各釀法的辨識線索（自溶、氧化、果味、甜度）；NV 比較盲品流程；常見誤判 | 題型：盲品與結論（品質、價位、陳年潛力、產區判斷）。⚠ 以 WSET 最新 SAT 規格為準 |
| sp-l3-6 | 論述與簡答範例：「氣候變遷下起泡酒為何仍需 dosage？」「比較傳統法與槽式法的成本與風格」「Crémant 與香檳的規定差異」；答題框架：定義→因素→比較→結論 | 題型：論述題與簡答題。⚠ 考試形式與配分以 WSET 官方最新規格為準 |
| sp-l3-7 | 12 題綜合評量（及格 60） | 避開有出入的數字 |

## 4. 考試題型設計（D4 為主）

- **測驗題型**：單選、多選、配對（產區↔釀法↔品種）、**排序題**（傳統法步驟、甜度級別）、**判讀題**（給一段標籤文字，判斷釀法與等級）。
- **每課固定附三個區塊**：
  1. **考點**：該課最常出題的 3 至 5 點。
  2. **常見錯誤**：例如把 Prosecco 當成傳統法、把「陳年時間」與「酒渣陳年」混淆。
  3. **練習題**：至少一題簡答（附評分重點）。
- **Level 3 的答題框架**：定義→影響因素（環境、釀造、法規）→跨產區比較→結論與價格論述，並附「高分與一般答案」對照。
- ⚠ 考試形式、配分與品飲評分標準以 WSET 官方最新規格為準；課內不寫任何未經查證的「考試機率」。

## 5. 互動功能設計

### 5.1 互動地圖（一個課程、多個國家）
- 與目前「一個課程對應一個座標」的 `GEO` 結構不同，這門課需要**多個座標標記**；已決定做課程專屬地圖頁 `SparklingMapPage`（不動共用的 `CourseWorldMap`），以全球視角顯示各產區標記。
- **標記顏色以釀法區分**（傳統法、槽式法、轉移法、祖傳法、其他）；點選顯示產區、品種、釀法、法規重點與風格。
- 圖層：依釀法篩選；依國家篩選；氣候圖層（沿用 `build-greece-climate.mjs` 的 Open-Meteo 流程，以代表點為主）。
- 邊界資料：有官方 PDO 邊界就用，否則用示意點並標示「非官方邊界」。⚠ 各國資料授權逐一確認。

### 5.2 遊戲（沿用 QuizEngine）
- **釀法配對**：酒款 → 釀法 → 國家／產區。
- **步驟排序**：傳統法、槽式法的流程排序（需引擎支援排序題，否則改多選）。
- **甜度級別**：級別 ↔ g/L。
- **標籤判讀**：標籤用語 → 釀法與等級。
- **盲品線索**：給風味描述，判斷釀法與價位。
- **知識閃問**：取自 Level 1–3 課程測驗，套用 lesson overlay 翻譯。

### 5.3 品飲筆記
- 沿用 `tasting_notes`（`source = 'sparkling'`），需 migration 擴充 `wine_type`：傳統法、槽式法、轉移法、祖傳法、起泡紅酒、甜型起泡、其他。
- 詞彙：氣泡（mousse：細緻度、持久度）、自溶（餅乾、brioche、烤麵包、杏仁）、一級香氣（青蘋果、檸檬、白花）、氧化（堅果、焦糖）；SAT 氣泡結構（甜度、酸度、酒體、氣泡、尾韻）。

### 5.4 成就與詞彙
- 成就：仿 `greeceAchievementSystem.js`（課程完成、環遊氣泡酒世界、遊戲滿分、筆記）。
- 詞彙辭典：加入 `sparkling`；第三語依各國原文（法／西／義／德）處理，需與其他課程共用的詞彙 migration 協調，避免衝突。
- 英日文：全部 UI 與課程內容與既有流程相同。

## 6. 技術落點（比照 Greece／Rhône／Champagne）

- `src/components/sparkling/`：`SparklingPage`、`SparklingLevelSelector`、`SparklingLearningSystem`、`SparklingCourseLayout`、`SparklingMapPage`、`games/*`、`notebook/*`
- `src/data/sparkling/sp-l*.js`（21 課）、`gameData.js`、`tastingData.js`
- `src/stores/sparklingLearningStore.js`、`sparklingAchievementSystem.js`
- 共用接點：`courseProgressSync.js`、`lessonContentLoader.js`、`router/index.js`（`/sparkling`）、`PlatformHome.vue`（`ADMIN_ONLY_COURSES`）、`regionThemes.js`、`useAchievements.js`、詞彙元件、`CourseWorldMap.vue`（多座標支援）
- ⚠ 與其他進行中課程分支會修改相同共用檔案（router、PlatformHome、useAchievements、courseProgressSync、詞彙 migration）；建議一前一後合併，或先抽出共用的「新課程註冊」工具。
- `public/sparkling/*.geojson`、`public/data/sparkling-climate.json`、`scripts/build-sparkling-*.mjs`
- `supabase/migrations/…`：wine_type 擴充、`courses` 新增 `sparkling`（`active=false`、`show_on_home=false`）、詞彙欄位

## 7. 不販售、僅供管理員閱讀

- **永久管理員專屬**：`courses.sparkling` 的 `active=false`、`show_on_home=false` 維持不變，不寫「上線時再改為 true」的 UPDATE；`PlatformHome.vue` 的 `ADMIN_ONLY_COURSES` 加入 `sparkling` 且不再移除。
- **不進入任何販售流程**：
  - 方案頁（`PricingPage.vue`）不顯示單課方案，也**不納入全球產區通行證**。目前管理員預覽區會列出 `courses` 表中所有尚未販售的課程，需在 `SOLD_COURSE_IDS` 之外另加「不販售」清單排除 `sparkling`，避免預覽區出現這門課。
  - `api/_lib/pricing.js`、`ecpay-checkout.js` 的允許名單、`CheckoutCartPage.vue`、`purchaseService.js` 的 `COURSE_PRICING` 一律不加入 `sparkling`。
  - `courses` 資料表的價格欄位若有 NOT NULL 限制，填 0 或沿用佔位值，並在 migration 註解寫明「不販售，價格無意義」。
- **存取控制**：路由與頁面以 `authActions.isAdmin()` 檢查；非管理員直接輸入 `/sparkling` 要導回首頁。免費試讀、優惠碼（`validateCouponPolicy`）也不能套用到這門課。
- **內容可以更完整**：既然不對外，Level 3 可以放入較多備考筆記與延伸閱讀，不必顧慮付費牆的分級。

## 8. 實作階段（建議）

| 階段 | 內容 | 分支 |
|---|---|---|
| A | 框架：頁面、路由、進度、21 課空殼、en/ja 標題；僅管理員可見、存取控制 | `feat/sparkling-course-framework` |
| B | Level 1 內容（6 課）與詞彙 | `feat/sparkling-level1` |
| C | Level 2 內容（8 課）與產區資料調查（邊界、法規） | `feat/sparkling-level2` |
| D | Level 3 內容（7 課）、D4 題型與答題範例 | `feat/sparkling-level3` |
| E | 互動地圖（多座標）、氣候圖層、遊戲、品飲筆記、成就 | `feat/sparkling-interactive` |
| F | en/ja 翻譯、整合測試、migration 準備（由你手動套用） | `feat/sparkling-final` |

> 工作流程沿用：每階段一個分支，僅在你說「合併」時合進 master；migration 只準備、由你手動套用。

## 9. 狀態區塊

- 階段 A：框架文件完成（本文件）。
- **已決定**：
  1. **專屬地圖頁**：不改共用的 `CourseWorldMap`，另做 `SparklingMapPage`（多國標記、依釀法著色）。
  2. **起泡紅酒（Lambrusco、起泡 Shiraz 等）與甜型起泡（Asti、Clairette de Die 等）都算 D4 考點**：Level 2 的產區課與 Level 3 的品飲（SAT）、論述題都要涵蓋；地圖以「起泡紅酒」「甜型起泡」兩個風格標籤篩選。
  3. **既有香檳框架的單元編號已更正**：`CHAMPAGNE_COURSE_FRAMEWORK.md` 內氣泡酒由 D5 改為 D4（D5 為加烈酒）。
- 已完成的程式（見分支 `feat/sparkling-course-framework`）：
  - `src/data/sparkling/regions.js`：24 個產區（法國 6、西班牙 1、義大利 6、德奧英葡 4、新世界 7）、5 種釀法、2 個風格標籤。座標為代表點，內容為教學重點；法規與數字待依 ⚠ 清單查證。
  - `src/components/sparkling/SparklingMapPage.vue`：釀法與風格篩選、全球／歐洲／新世界視角、產區卡片、清單；手機版卡片在地圖下方。
  - 路由 `/sparkling/map`（`requiresAuth` ＋ `requiresAdmin`，非管理員導回首頁）。
- 尚未做：入口連結（待階段 A 的課程首頁）、氣候圖層、官方邊界、遊戲、品飲筆記、en/ja 翻譯。
- 待確認：入口要放在哪裡（目前只能直接輸入 `/sparkling/map`）。
