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
