# 🇦🇹 奧地利（Österreich）葡萄酒課程設計（Diploma D3／MW 備考導向）

> 狀態：設計稿（2026-10-27），分支 `feat/austria-southafrica-design`（未合併，從 master 切出）
> 課程代號：`austria`；課程 ID 前綴 `at-l{階段}-{序號}`（如 `at-l1-1`），沿用 Greece／Rhône／Champagne 骨架
> 所有 ⚠ 標記的數字與規定，製作時必須查證（優先 Österreich Wein Marketing／ÖWM、Austrian Wine 官網、Weingesetz／DAC 規章），來源有出入者課內標明、不進測驗。

## 1. 定位與設計原則

- **對象**：準備 WSET Diploma（D3）並延伸至 MW 的學習者。奧地利是 D3 常考的「小而精」產區：白酒（Grüner Veltliner、Riesling）、紅酒（Zweigelt、Blaufränkisch、St. Laurent）、貴腐甜酒（Neusiedlersee）、氣泡酒（Sekt Austria）都會出題。
- **教學主軸**：
  1. **分級制度的獨特性**：不是 AOC 式的村莊／園區分級，而是 **DAC（以產區風格為單位）＋ Ried（單一園）＋ ÖTW Erste／Große Lage** 三層；與德國 Prädikat 制度的相似與差異（Kabinett 在奧地利為糖度下限而非德國的風格）。
  2. **Wachau 的自訂制度**：Vinea Wachau 的 Steinfeder／Federspiel／Smaragd 三級（以酒精／採收糖度分級）；Wachau 另自 2020 年份起成為 DAC（Wikipedia、wein.plus 彙整，階段 C 再以官方規章確認兩套制度如何並存）。
  3. **風土多樣**：Danube 氣候（冷夜、暖日）、Pannonian 氣候（Burgenland，Neusiedler See 影響）、東南部火山與石灰岩（Steiermark）。
  4. **歷史與品質革命**：1985 乙二醇醜聞 → 1985 年酒法大幅收緊 → 今日的高品質與低產量。
- **與既有課程的關係**：連結德國（Prädikat、Riesling）、匈牙利（Tokaj／Neusiedler See 兩岸的貴腐）、香檳（Sekt 傳統法）；不複製大段文字。

## 2. 課程結構（3 階段 21 課）

### Level 1 - 奧地利入門（6 課）
- `at-l1-1` 認識奧地利葡萄酒：歷史、1985 醜聞與復興（15 分）
- `at-l1-2` 地理、氣候與四大葡萄酒區域（16 分）
- `at-l1-3` 白葡萄品種：Grüner Veltliner、Riesling、Welschriesling 等（16 分）
- `at-l1-4` 紅葡萄品種：Zweigelt、Blaufränkisch、St. Laurent 等（16 分）
- `at-l1-5` 酒款風格、分級與標籤閱讀（18 分）
- `at-l1-6` Level 1 綜合評量（25 分）

### Level 2 - 奧地利產區與法規（8 課）
- `at-l2-1` 法規體系：Qualitätswein、Prädikat、DAC、Ried 與 ÖTW（20 分）
- `at-l2-2` Niederösterreich I：Wachau（Vinea Wachau 三級）（22 分）
- `at-l2-3` Niederösterreich II：Kremstal、Kamptal、Traisental（22 分）
- `at-l2-4` Niederösterreich III：Weinviertel、Wagram、Carnuntum、Thermenregion（22 分）
- `at-l2-5` Wien：Wiener Gemischter Satz DAC（18 分）
- `at-l2-6` Burgenland：Neusiedlersee、Leithaberg、Mittelburgenland、Eisenberg、Rosalia（22 分）
- `at-l2-7` Steiermark：Südsteiermark、Vulkanland、Weststeiermark（Schilcher）（20 分）
- `at-l2-8` Level 2 綜合評量（25 分）

### Level 3 - 奧地利 Diploma／MW 精修（7 課）
- `at-l3-1` 栽培與釀造：Danube 與 Pannonian 風土、有機／永續、Sekt Austria 三級（22 分）
- `at-l3-2` 風土深度：Wachau 片麻岩／黃土、Kamptal Heiligenstein、Leithaberg 石灰岩（22 分）
- `at-l3-3` 甜酒：Beerenauslese、Trockenbeerenauslese、Ausbruch、Strohwein／Schilfwein（20 分）
- `at-l3-4` 法規深度與標籤判讀（DAC Klassik vs Reserve、Ried 標示、Wachau Codex）（20 分）
- `at-l3-5` 產業與市場：出口結構、生產者類型、合作社、價格帶（20 分）
- `at-l3-6` Diploma 品飲與論述：Grüner vs Riesling 盲品線索、MW 風格論述範本（25 分）
- `at-l3-7` Level 3 綜合評量（12 題，及格 60）（25 分）

## 3. 各課重點與 ⚠ 查證清單

| 課 | 重點 | ⚠ 必須查證 |
|---|---|---|
| at-l1-1 | 羅馬起源、中世紀修道院、Maria Theresia、1985 乙二醇事件與 1985 新酒法 | 事件年份、處置細節 |
| at-l1-2 | 位置（北緯 46–49°）、Danube 與 Pannonian 氣候、四大區域 | 產區數量與名稱、種植面積 |
| at-l1-3/4 | 品種比例（白約 2/3）、各品種特徵、雜交種（Zweigelt＝Blaufränkisch×St. Laurent） | 最新品種面積比例（Grüner Veltliner 約三成？） |
| at-l2-1 | DAC 區域數與各區許可品種、Klassik／Reserve 差異、Ried 標示規定 | **DAC 總數（2023 年後可能為 17 或更多）**、各 DAC 年份 |
| at-l2-2 | Wachau 三級的酒精／葡萄汁重量門檻、Vinea Wachau 會員制、梯田與 Riede | Federspiel／Smaragd 門檻（Oechsle 或 KMW） |
| at-l2-3/4 | 各區 DAC 規格、Kamptal／Kremstal 的 Ried 名單、Wagram（2021 年份）與 Thermenregion（2023 年份）DAC | 新 DAC 年份（Wikipedia：Wagram 2021、Thermenregion 2023、Wachau 2020）、許可品種 |
| at-l2-5 | Wiener Gemischter Satz DAC（2013）：必須同園混植混釀、至少 3 個品種、單一品種不超過 50% | 規格數字 |
| at-l2-6 | Neusiedlersee DAC（Zweigelt 紅酒與甜酒）、Leithaberg（石灰岩、Blaufränkisch、Chardonnay 等）、Ruster Ausbruch | Neusiedlersee 甜酒是否為 DAC；Ausbruch 規定 |
| at-l2-7 | Steiermark 三個 DAC（Südsteiermark、Vulkanland、Weststeiermark）、Schilcher（Blauer Wildbacher 玫瑰酒） | DAC 年份（約 2018） |
| at-l3-1 | Sekt Austria Klassik／Reserve／Große Reserve（2015 起）規定與陳年時間 | 三級陳年月數、產區限制 |
| at-l3-3 | Prädikat 糖度下限（KMW 制，與德國 Oechsle 不同） | 各級 KMW 門檻 |
| at-l3-4 | ÖTW Erste Lage／Große Lage 區域與採用情況 | 涵蓋 DAC、Große Lage 名單範圍 |
| at-l3-5 | 出口市場（德國為最大）、出口值、生產者數量 | 最新 ÖWM 年度數字 |

## 4. 互動功能設計

- **互動地圖**：以 DAC／產區為單位的多邊形（不是村莊）；第二層顯示 Wachau 的主要村莊（Spitz、Weißenkirchen、Dürnstein、Loiben 等）與重要 Ried。邊界資料優先找 Bianchi et al.（CC0）或 ÖWM 開放資料；取不到則退回簡易版（示意點＋明標非官方）。
- **氣候圖層**：比照希臘／香檳，Open-Meteo 以主要產區代表點產生 1981–2010 基準與近年差異。
- **遊戲**（沿用 QuizEngine，`game_type` 前綴 `at_`）：產區速答、DAC 與許可品種配對、分級辨識（Federspiel／Smaragd、Klassik／Reserve、Sekt 三級）、知識閃問。
- **品飲筆記**：`source='austria'`，酒款類型含 Grüner Veltliner、Riesling、Gemischter Satz、Zweigelt／Blaufränkisch／St. Laurent、Sekt、Prädikat 甜酒；詞彙含德語欄位。
- **成就**：「十七條 DAC」之類收集成就（數量以查證結果為準）。
- **詞彙**：新增 `austria` 區域（第三語為德語）；與德國詞彙共用條目時避免重複。

## 5. 技術落點（比照 Rhône／Champagne，已合併進 master 的實作）

- `src/components/austria/`、`src/data/austria/at-l*.js`、`src/stores/austriaLearningStore.js`、`austriaAchievementSystem.js`
- 共用接點：`courseProgressSync.js`、`lessonContentLoader.js`、`router/index.js`（`/austria`）、`PlatformHome.vue`（`ADMIN_ONLY_COURSES` 加 `'austria'`）、`regionThemes.js`、`useAchievements.js`、詞彙元件
- UI 字典 `src/locales/austriaUi/`（`gt()` 機制）、lesson overlay `src/locales/{en,ja}/lessons/austria/*.json`
- ⚠ 與南非課程同時製作時會改動相同共用檔案：兩者各自從 master 切分支，合併時第二個解衝突；改動盡量為純新增條目並記錄於文件。
- migration 只準備不套用：`courses` 新增 `austria`（`active=false`）、wine_type 擴充、詞彙欄位。

## 6. 實作階段（建議）

| 階段 | 內容 | 分支 |
|---|---|---|
| A | 框架：頁面、路由、進度、21 課空殼、en/ja 標題；僅管理員可見 | `feat/austria-course-framework` |
| B | Level 1（6 課）＋測驗＋en/ja | `feat/austria-l1` |
| C | Level 2（8 課）＋查證 | `feat/austria-l2` |
| D | Level 3（7 課）＋論述題範本 | `feat/austria-l3` |
| E | 地圖、氣候圖層、遊戲、品飲筆記、成就、詞彙 | `feat/austria-interactive` |
| F | 全面檢查、migration 準備 | `feat/austria-final` |

## 7. 資料來源與待查證

- ÖWM（austrianwine.com）：產區、DAC 規章、Key Facts、出口與面積統計；Weingesetz／DAC-Verordnungen（RIS）
- Vinea Wachau（Codex）、ÖTW（Österreichische Traditionsweingüter）
- WineWithSeth、CMS、Jancis Robinson、Wine Folly 等第三方彙整（僅作交叉檢查）
- 使用者 Google Drive 中的奧地利／德國筆記（若有）
- ⚠ 已知需交叉確認：DAC 總數與新增年份、品種面積比例、Sekt Austria 陳年月數、Prädikat KMW 門檻、Wachau 三級門檻

## 8. 待使用者確認的決定

1. 範圍：全奧地利（含 Weinland／Bergland／Steiermark／Wien），還是先聚焦 Niederösterreich＋Burgenland？
2. 結構是否沿用 3 階段 21 課？
3. 地圖層級：DAC＋Wachau 村莊（建議），取不到資料時退回簡易版。
4. 課程先只給管理員？

## 9. 已完成的框架項目（階段 A，2026-10-27）

- 頁面與元件：`src/components/austria/`（Page、LevelSelector、LearningSystem、CourseLayout），UI 字典 `src/locales/austriaUi/`（en/ja，117 條，已用腳本檢查 gt() 全覆蓋、en 無殘留中文）
- 學習 store：`src/stores/austriaLearningStore.js`（3 階段 21 課大綱，進度存 localStorage 並同步，課程代號 `austria`）
- 21 個課程空殼 `src/data/austria/at-l*.js`（「內容製作中」），en/ja overlay 已含標題與簡介
- 共用檔案改動（皆為純新增條目，解衝突用）：`router/index.js`（`/austria` 路由＋ `COURSE_ACCESS_RULES`）、`PlatformHome.vue`（Old World 區卡片、導覽項、`courseStatuses`／`courseShowHome`、`ADMIN_ONLY_COURSES`、CSS）、`lessonContentLoader.js`、`courseProgressSync.js`、`regionThemes.js`、`PresentationLesson.vue`（封面漸層與圖示）、`locales/{zh-TW,en,ja}/{common,home}.js`
- 路由 `/austria` 設 `requiresAdmin`，首頁卡片僅管理員可見
- migration 已準備未套用：`20261027000000_add_austria_course.sql`（`active=false`、`show_on_home=false`）
- 地圖／遊戲／筆記入口顯示「製作中」（階段 E 製作）
- 驗證：SFC 編譯、字典覆蓋、`vite build` 通過

## 10. Level 1 內容說明與查證註記（階段 B，2026-10-27）

- 分支 `feat/austria-l1`（從 `feat/austria-course-framework` 切出）；6 課正式內容（`at-l1-1`…`at-l1-6`），每課 3–4 張內容投影片＋知識檢測（L1-6 為 8 題綜合評量，及格 60），en/ja overlay 逐鍵檢查通過
- **第 2 課由「四大區域」改為「產區結構」**：資料來源對區域的分法不同（wein.plus 與 Wikipedia 為 Weinland／Steirerland／Bergland 三區，Wien 隸屬 Weinland；部分資料把 Wien 單列），因此課內不把「幾個區域」放進測驗
- **查證結論**
  - DAC 共 18 個（Burgenland 6、Niederösterreich 8、Wien 1、Steiermark 3；wein.plus 與 Wikipedia 一致），Wachau DAC 自 2020 年份起——**修正設計稿原先「Wachau 不屬 DAC」的說法**；Wagram DAC 為 2021 年份（原稿寫 2022）
  - Grüner Veltliner 32.3%、Zweigelt 13.4%、Welschriesling 6.3%、Blaufränkisch 5.8%（2025 年，農林部／ÖWM 經 Advantage Austria）；葡萄園約 44,210 公頃（2024／2025）；紅葡萄約 32%（2022，wein.plus）與「約 30%」（Wikipedia）略有差異，課內只用「約三分之一」
  - KMW 門檻：Qualitätswein 15、Kabinett 17、Spätlese 19、Auslese 21、BA／Eiswein／Strohwein 25、TBA 30（Wikipedia 彙整）；**Ausbruch 下限各來源不同，不放進課內**（階段 C 以酒法為準）；Kabinett 屬 Qualitätswein 而非 Prädikat，且不可加糖
  - 1985 事件的日期與數字（6 月 27 日分析、7 月 9 日警告、8 月 29 日新酒法、出口 4,500 萬公升 → 440 萬公升、2001 年恢復）取自 Wikipedia 彙整，課內標明為彙整數字、不進測驗
- **仍需官方來源確認（階段 C／D）**：Ausbruch 與 Ruster Ausbruch DAC 規格、Wachau DAC 與 Vinea Wachau 三級並存關係、Sekt Austria 各級陳年月數、官方封條與檢驗編號細節（課內為一般性描述）
- 既有程式中的奧地利內容（階段 C 實際 grep 後更正）：奧地利／Kabinett 於 `src/data/lessons/l3-4.js`、匈牙利 `hu-l*`、`ca-l3-2`、`lo-l3-2` 及 `src/components/germany/data/regions.js` 皆有提及（德國資料以 Kabinett 作為 Prädikat 風格）；Level 1 課內已標明奧地利 Kabinett 屬 Qualitätswein、為糖度下限且不可加糖。原先「德國課程曾提及 Prädikat」一句未經查證即寫入，現已改為上述實際清單

## 11. Level 2 內容說明與查證註記（階段 C，2026-10-27）

- 分支 `feat/austria-l2`（從 `feat/austria-l1` 切出）；8 課（`at-l2-1`…`at-l2-8`），L2-8 為 10 題綜合評量（及格 60）；en/ja overlay 逐鍵檢查與 vite build 通過
- **來源**：Wikipedia（Districtus Austriae Controllatus）、WineWithSeth（DAC 與 Wachau DAC）、wein.plus 與 Winewisdom（ÖTW 報導）
- **DAC 年份（課內採用）**：Weinviertel 2002（2003 核准）、Mittelburgenland 2005、Traisental 2006、Kamptal 2008、Leithaberg 紅 2008／白 2009、Neusiedlersee Reserve 2010／Klassik 2011／甜型 2020、Wiener Gemischter Satz 2013、Rosalia 2017、Steiermark 三 DAC 2018、Carnuntum 2019、Wachau 2020（強制，2021 年 8 月核准）、Ruster Ausbruch 2020、Wagram 2021、Thermenregion 2023
- **出入／未解決（不進測驗）**：Kremstal DAC 年份（Wikipedia 2006；設計稿原寫 2007）、Ruster Ausbruch 最低 KMW（來源不一，課內不列門檻）、Eisenberg 年份未查到
- **ÖTW**：1992 年由多瑙河酒莊成立；Erste Lage 針對乾型 Grüner Veltliner 與 Riesling（Kamptal、Kremstal、Traisental、Wagram，後加入 Wien 與 Carnuntum）；Große Lage 的數量與細節未查到，課內不論述；ÖTW 屬民間協會、非法定分級
- **未逐項查證的描述性內容**：Kamptal／Kremstal 著名 Ried（Heiligenstein、Gaisberg、Steiner Hund、Pfaffenberg）、Roter Veltliner 為 Wagram 特色、Südsteiermark／Vulkanland 品種描述；課內已標註、不進測驗，階段 F 前建議以 ÖWM 或 ÖTW 官方網站補查
- **Wachau**：Vinea Wachau（1983 成立，商標自 1984）Steinfeder ≤11.5%、Federspiel 11.5–12.5% 且殘糖 ≤4 g/L、Smaragd ≥12.5% 且 ≥18.5 °KMW、不早於次年 5 月 1 日上市；DAC 三層（Gebietswein 17 品種、Ortswein 9 白品種、Riedenwein 僅 GV／Riesling、157 個 Ried）

## 12. Level 3 內容說明與查證註記（階段 D，2026-10-27）

- 分支 `feat/austria-l3`（從 `feat/austria-l2` 切出）；7 課（`at-l3-1`…`at-l3-7`），L3-7 為 12 題綜合評量（及格 60）；en/ja overlay 與 vite build 通過
- **重大查證結果：Ausbruch**——依 § 11 Weingesetz（jusline.at），Ausbruch 不是獨立類別；符合 Trockenbeerenauslese 條件且產自 Rust 的酒才可標示 Ruster Ausbruch，其他酒不得使用該詞。這解釋了 Level 2 中各來源門檻不一的原因（已在 L3-3 說明）
- **Prädikat 法條（§ 11）**：Spätlese 19、Auslese 21、BA 25、TBA 30（揮發酸 ≤2.4 g/L）、Eiswein 25、Strohwein／Schilfwein 25（至少 3 個月風乾；2 個月且達 30 KMW 可提早）；不得加糖或增糖；須 Mostwäger 證明；Spätlese／Auslese 次年 1 月 1 日、其他次年 4 月 1 日前不得申請檢驗號碼
- **Sekt Austria**：Klassik 9 個月、Reserve 18 個月（傳統法、單一邦）、Grosse Reserve 30 個月（單一酒村、採收三年後上市）；2015 里程碑、2016 年以條例立法、Sekt 委員會 2013 年成立（Starwinelist、WineAlign）。**設計稿原先「15 個月」的猜測已捨棄**
- **永續**：Sustainable Austria 2015 年推出，約 11,925 公頃（27%）、655 酒莊（2025 年 1 月報導）；有機約 25%（2024 年 11 月初步數）
- **出口（2024）**：6,420 萬公升、2.333 億歐元；德國量 60.2%、值 42.3%；美國 8.5%（金額）升為第二（Statistik Austria 暫定數，ÖWM 新聞）。2025 年數字見 Level 1
- **刻意不寫**：生產者類型、合作社與價格帶（無可靠官方統計）；Wachau Codex 與 DAC 並存的細節；盲品線索與論述範本屬一般性指引，已標明、不進法規測驗

## 13. 階段 E：互動功能（地圖、遊戲、品飲筆記、成就、詞彙）

- 地圖：`public/austria/austria_pdo.geojson` 由 `scripts/build-austria-geojson.py` 從歐盟 PDO 資料集（CC0，2021 年前版本）產生，共 16 個 DAC 範圍；Rosalia（2017）與 Ruster Ausbruch（2020）為示意點（`pointRef.js`），尚不在歐盟資料集內。
- 氣候資料 `public/data/austria-climate.json`：Open-Meteo 當日額度用完，**尚未產生**；以 `scripts/build-austria-climate.mjs` 補跑（已排程提醒）。未產生前地圖氣候圖層無資料。
- 遊戲：產區（DAC→邦／線索→DAC）、品種配對、分級制度、閃問；題庫內不放有出入的資料（Kremstal DAC 年份 2006/2007、Eisenberg 年份）。
- 品飲筆記：9 種酒款類型 `at_*`；資料庫 CHECK 約束由 `20261028000100_add_austria_tasting_types.sql` 擴充（僅準備，未套用）。
- 成就：20 項（課程、探索 DAC、品飲、法規）；詞彙：`20261028000200_add_austria_glossary.sql`（20 條，含德文）。
- 翻譯：`austriaUi` 字典 685 條（en／ja），檢查腳本回報缺漏 0；建置通過。
