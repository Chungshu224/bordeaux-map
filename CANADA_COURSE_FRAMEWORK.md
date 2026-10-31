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

## 4. Level 1 查證資料與來源衝突
**來源**：The Canadian Encyclopedia（Wine Industry）、Wine With Seth（Canada、British Columbia、Okanagan Valley）、VQA Ontario（Wine Categories and Labelling）、AWRI Niagara、Winealign（Inniskillin）、Wikipedia（Cellared in Canada）、Grape Growers of Ontario Fact Sheet 2024。

**已採用的事實**
- 歷史：1811 Schiller（Credit River）；1866 Pelee Island 30 英畝 Catawba；1890 年 41 家商業酒廠（35 家在 Ontario）；禁酒 1916–1927 期間釀酒仍合法；1975 Inniskillin；VQA 1988 年由 Ontario 酒廠設立、1990 年引入 BC；Vintners Quality Alliance Act, 1999 於 2000-06-29 公布，首款 VQA 酒 2000-07-10；BC 1988–1990 拔樹約 65%；BC Wines of Marked Quality Regulation 2005-08 生效。
- 氣候：Vineland 43°11'N、PEC 44°N、LENS 約 42°N、BC 約 49–50°N；Okanagan 約 175 公里、雨量北約 400 mm→Osoyoos 約 250–300 mm；寒害與春霜為主要限制。
- 品種：Ontario VQA 2025-26 年度體積比例（Chardonnay 13%、Riesling 12%、Cabernet Franc 12%、Merlot 11%…）；Vidal 冰酒 388,970／468,752 L；BC 最多紅品種 Pinot Noir。
- 制度：Ontario 100%／區域 >85%／次產區 100%／年份 85%；BC 100%／區域 95%／年份 85%／品種 85%；Ontario 冰酒 ≤ -8°C、≥35°Brix；BC 冰酒殘糖 ≥100 g/L；Cellared in Canada（BC 100% 外國成分、Ontario ≤60%、2014-04-01 起 pre-1993 酒廠 ≤75%）。

**來源有出入（課內標明、不進測驗）**
- Inniskillin 執照：Winealign 寫「自 1929 年以來第一張」，常見說法為「自禁酒時期以來」。
- Niagara Escarpment 高度：AWRI 60–100 m 山脊；Wine With Seth 最高約 177 m。
- BC 最多種植的白品種：BC 頁寫 Pinot Gris，Okanagan 頁列 Chardonnay。
- BC 的 GI 與次 GI 數目（9 或 10 個 GI；11 或 12 個次 GI）——留待 Level 2 查證。
- 面積與產量數字（2025 年全加拿大 13,290 公頃、Ontario 約 17,000 英畝、BC 約 4,500 公頃等）各年度、各來源不同，只作背景。

## 5. Level 2 查證資料與來源衝突
**來源**：VQA Ontario（Niagara Peninsula／Escarpment／West Niagara 頁面）、Wine With Seth（Ontario、Okanagan、Similkameen、Nova Scotia）、Wikipedia（Ontario wine、Nova Scotia wine、Quebec wine）、GuildSomm（BC Geographical Indications）、BC 政府新聞稿（2022-06-28）、Wine Industry Advisor（Cowichan 2020-07-10）、Wine Growers Nova Scotia（Tidal Bay）、Vins du Québec 2023 報告、Luxe Magazine Ottawa、MyWinePal。

**已採用的事實**
- Ontario：三個認定產區（Niagara Peninsula、Lake Erie North Shore、Prince Edward County 2007）；Niagara 3 個區域產區＋10 個次產區（Escarpment 3＋Niagara-on-the-Lake 4＋West Niagara 3）；Lake Erie North Shore 的 South Islands；PEC 奧陶紀石灰岩、冬季可低於 -24°C 並培土埋藤。
- BC：9 個 GI、12 個次 GI（Okanagan 11＋Cowichan）；Okanagan GI 1990；Golden Mile Bench 2015 為首個次 GI；2022-06-28 新增六個 Okanagan 次 GI；Cowichan 2020-07-10；次 GI 須 ≥95% 來自該地。
- Nova Scotia：Tidal Bay 2012-06、100% NS 葡萄、≤11% 酒精、每年盲飲審核；1979 Grand Pré 起算商業生產。
- Quebec：Champlain 1608；1919 禁酒但葡萄酒除外；SAQ 壟斷；Vin du Québec PGI 2018 起保證 100% Quebec 葡萄；vinifera <10%。
- 風格：Late Harvest／Select／Special Select／Icewine ≥22／26／30／35°Brix；Sparkling ≥300 kPa；Skin Fermented White ≥10 天；Appassimento ≥85% 風乾葡萄。

**來源有出入（課內標明、不進測驗）**
- West Niagara：VQA 頁面列出六個（含 Escarpment 的三個），與總數 10 不合；課內採 3＋4＋3，由 Wine With Seth 的 Escarpment 與 Niagara-on-the-Lake 列法推得，West Niagara 的三個（Lincoln Lakeshore、Creek Shores、Vinemount Ridge）為推論。
- Niagara Escarpment 高度（60–100 m 或最高約 177 m）；Okanagan 的酒廠數與面積（226／10,920 英畝 vs 186／9,617 英畝）；Similkameen 面積與主要品種；Nova Scotia 面積（404／256／400／530 公頃）；Quebec 的產區數（6／7／9）、面積與酒廠數。
- 首批冰酒：1983（Wikipedia）或 1984（Winealign）；Ontario 冰酒殘糖 180–320 g/L 為單一來源。
- Tidal Bay 品種細則：Wikipedia 稱 L'Acadie Blanc 等四品種合計 ≥51%、另可用 16 個品種；官方頁面的清單為圖片，無法核對。
- Golden Mile Slopes 的指定年份各來源未說明。
- 單一來源的數字（GuildSomm 各 GI 的酒廠數、面積與品種比例；MyWinePal 的 Naramata Bench 品種比例）只作背景、不出題。
- 尚未涵蓋：New Brunswick 等其他省分（本課標題的「其他省分」目前只含 Quebec 與各省規模比較）。
