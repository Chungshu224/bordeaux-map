/**
 * inject-bourgogne-l4-quiz-m8a.mjs
 * 布根地 L4 Quiz 注入 — M8前半：專家論文與綜合評估 m8-l1~l4
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.resolve(__dirname, '..', 'public/bourgogne/data/courses/level4')
const MARKER = '_inject_bourgogne_l4_quiz'

const QUIZ_MAP = JSON.parse(`{
  "m8-l1": {
    "type": "quiz", "title": "🧠 專業論文撰寫指南知識檢測",
    "questions": [
      {
        "type": "single",
        "question": "WSET Level 4 Diploma（DipWSET）的「研究論文（Dissertation）」要求考生展示哪種核心能力？",
        "options": [
          "A. 考生只需背誦教材內容，不需要原創研究",
          "B. 獨立批判性研究能力（Independent Critical Research）——DipWSET 論文要求考生就自選的葡萄酒、烈酒或飲料相關主題，進行獨立的研究設計、文獻回顧（Literature Review）、方法論選擇（Methodology）、數據蒐集與分析，最終提出有根據的論點（Argument）和結論（Conclusion）；論文字數通常 6,000-10,000 字（依規定），核心在於「批判性思維（Critical Thinking）+ 佐證論點的研究設計（Research Design）」，而非單純描述事實",
          "C. 論文主題必須是布根地，不能選擇其他地區",
          "D. WSET Diploma 論文不需要引用任何參考文獻"
        ],
        "correct": 1,
        "explanation": "DipWSET 論文的評分維度（Assessment Criteria）：① 研究能力（Research Skills）——是否有從多元可靠來源蒐集數據的能力（Primary Research：問卷/訪談/盲品；Secondary Research：學術期刊/行業報告/官方統計）；② 批判性分析（Critical Analysis）——是否能評估不同觀點的論據強度，而非單方面陳述；③ 論點連貫性（Argument Coherence）——研究問題（Research Question）→文獻→方法→發現→結論是否形成一致的邏輯鏈；④ 學術寫作規範（Academic Writing Standards）——引用格式（Harvard Referencing / APA）、語言清晰度、圖表使用。WSET 論文的典型常見失誤：研究問題過於寬泛（如「布根地葡萄酒的品質」——無法在一篇論文中充分回答）；缺乏對方法論侷限（Methodology Limitations）的自我批判性討論。"
      },
      {
        "type": "single",
        "question": "撰寫 WSET Diploma 論文時，「研究問題（Research Question）」的設計原則是？",
        "options": [
          "A. 研究問題越廣泛越好，以顯示研究的宏大視野",
          "B. SMART 原則——具體可研究（Specific & Researchable）：研究問題應足夠聚焦，讓考生能在字數限制（6,000-10,000字）和時間限制（通常 6-8 個月）內充分回答；避免「為什麼布根地的酒比波爾多更好？」（主觀、無法量化）；推薦： 「氣候變遷是否影響了 Puligny-Montrachet 的採收時間及酸度特徵（1990-2020）？」——具體可量化、有明確時間和地理範圍",
          "C. 論文研究問題必須由 WSET 指定，考生沒有選擇權",
          "D. 研究問題在論文開始後不能修改，必須一開始就確定完美版本"
        ],
        "correct": 1,
        "explanation": "高品質研究問題的「SMART 篩選（Specific, Measurable, Achievable, Relevant, Time-bound）」示範：差的研究問題——「自然葡萄酒受歡迎嗎？」（過於寬泛、缺乏量化標準）；好的研究問題——「2015-2023 年間，台灣市場的自然葡萄酒（Natural Wine）進口量與消費者認知（Consumer Awareness）之間是否存在正相關關係？」——可量化（進口數字 + 消費者問卷）、有時間範圍、聚焦特定市場。研究問題的「反覆精修（Iterative Refinement）」過程：多數成功的 DipWSET 論文都在研究開始後 1-2 個月內，對原始研究問題進行一次精修——隨著文獻閱讀的深入，考生才真正了解什麼是「可回答的問題（Answerable Question）」；論文導師（Tutor）的監督面談（Tutorial Session）是精修研究問題的關鍵機會。"
      },
      {
        "type": "multiple",
        "question": "DipWSET 論文的「方法論（Methodology）」章節應包含哪些要素？（多選）",
        "options": [
          "A. 研究設計說明（Research Design）——定性（Qualitative）/定量（Quantitative）/混合（Mixed Methods）的選擇理由",
          "B. 數據蒐集方法（Data Collection Methods）——初級研究（Primary）或次級研究（Secondary）的工具說明",
          "C. 方法論侷限（Methodology Limitations）——承認研究設計的局限性（如樣本數不足、受訪者偏見）",
          "D. 方法論章節應假裝研究沒有任何侷限性，以顯示完美"
        ],
        "correct": [0, 1, 2],
        "explanation": "方法論章節的三要素（A/B/C 正確，D 是錯誤學術態度）：研究設計說明（A）——定性研究（如深度訪談釀酒師的感知）適合探索複雜的主觀現象；定量研究（如分析 20 年的採收數據）適合可測量的客觀現象；混合方法（問卷量化 + 訪談深化）通常能提供最完整的論據支持；數據蒐集方法（B）——初級研究（Primary Research）：自行設計問卷（Questionnaire）、盲品實驗（Tasting Experiment）、半結構式訪談（Semi-Structured Interview），提供原創數據；次級研究（Secondary Research）：BIVB 官方數據、Decanter 報告、學術期刊（American Journal of Enology and Viticulture, IVES Technical Reviews），提供背景和比較基準；方法論侷限（C）——誠實討論研究限制（如「本研究的問卷樣本局限於台北市的 WSET 持證消費者，結論不能代表全台灣」）是高品質論文與初階論文的重要區別。"
      },
      {
        "type": "single",
        "question": "論文的「文獻回顧（Literature Review）」章節的核心功能是？",
        "options": [
          "A. 文獻回顧只是把找到的所有文章列一個清單",
          "B. 建立知識空白（Knowledge Gap）和研究定位（Research Positioning）——文獻回顧的目的不是「展示讀了很多書」，而是：① 整合現有知識：梳理並比較前人研究（Existing Research）的主要論點和發現；② 識別知識空白（Gap in Literature）：指出現有研究缺乏、矛盾或未充分探討的面向；③ 定位自己的研究：清楚說明「本研究如何填補這個知識空白（How This Study Contributes）」——三步驟完成後，讀者/評分者能清晰了解「為什麼這個研究有必要存在（Why This Study Matters）」",
          "C. 文獻回顧應只引用 WSET 官方教材，其他來源不算",
          "D. 文獻回顧必須包含所有找到的文獻，不能有取捨"
        ],
        "correct": 1,
        "explanation": "高品質文獻回顧的「批判性整合（Critical Synthesis）」vs. 描述性列舉（Descriptive Listing）的關鍵差異：差的文獻回顧——「Smith (2018) 說 X，Jones (2020) 說 Y，Brown (2022) 說 Z」（只是列舉，無整合）；好的文獻回顧——「關於布根地採收時間的研究存在兩種主要觀點：Lewin (2010) 和 Asimov (2015) 均認為（觀點A），這與 Jefford (2018) 和 Coates (2019) 的（觀點B）形成對比。然而，上述研究均缺乏台灣消費者視角，本研究旨在填補此空白。」WSET 論文的可靠來源金字塔：① 最頂層：同儕審閱的學術期刊（Peer-Reviewed Academic Journals）；② 中層：WSET、BIVB、Wine Australia 等機構官方報告；③ 底層：品質良好的行業媒體（Decanter、The World of Fine Wine）；④ 不可使用：維基百科、無作者的網路文章。"
      },
      {
        "type": "single",
        "question": "論文寫作的「引用格式（Citation Format）」的重要性以及常見錯誤是？",
        "options": [
          "A. 引用格式只是形式，不影響論文品質評分",
          "B. 學術誠信（Academic Integrity）的核心要求——正確引用的重要性：① 避免抄襲（Plagiarism）：引用格式是區分自己的論點和他人的思想/數據的唯一手段，錯誤引用可被認定為學術不誠實（Academic Dishonesty）；② WSET 要求統一格式（通常 Harvard Referencing System）：作者（Author）、出版年份（Year）、標題（Title）、出版者（Publisher）；常見錯誤：忘記頁碼（Page Number）、缺少原始出版年份（使用翻譯版而非原版）、網路資源未記錄存取日期（Access Date）",
          "C. 引用格式只需列在論文末尾，文中不需要標注",
          "D. 只有使用英文的論文才需要引用格式，中文論文不需要"
        ],
        "correct": 1,
        "explanation": "Academic Integrity 的現實後果：WSET 論文的抄襲（Plagiarism）檢查採用 Turnitin 或類似工具，相似度超過門檻（通常 20%）會觸發審查；DipWSET 的學術不誠實認定可能導致失格（Disqualification）或全科重考。Harvard Referencing 的實際操作示範：書籍引用——Coates, C. (1997) Côte d'Or: A Celebration of the Great Wines of Burgundy. London: Weidenfeld and Nicolson；網路資料——BIVB (2023) Bourgogne Wines Statistics 2022 [Online]. Available at: www.bourgogne-wines.com [Accessed: 10 March 2023]。行內引用（In-Text Citation）——直接引述用引號 + 頁碼：（Coates, 1997: 45）；間接引述（Paraphrase）只需作者姓 + 年份：（Coates, 1997）。"
      }
    ]
  },
  "m8-l2": {
    "type": "quiz", "title": "🧠 綜合盲品測試訓練知識檢測",
    "questions": [
      {
        "type": "single",
        "question": "WSET Level 4 Diploma（DipWSET）的「盲品考試（Unit 1 Wines of the World Systematic Tasting）」要求什麼？",
        "options": [
          "A. 盲品考試只要說出喜不喜歡就可以，不需要分析架構",
          "B. 使用 WSET 系統性品評法（SAT, Systematic Approach to Tasting）進行完整的外觀、嗅覺、口感和結論分析，並基於分析得出有說服力的品種/產區/年份推斷——DipWSET Unit 1 的盲品考試通常要求在規定時間（約 25-30 分鐘）內品評 2 款酒，每款提供完整的書面 SAT 分析報告，最終推斷（Deduction）涵蓋：葡萄品種（Grape Variety）、大概產地（General Region/Country）、大致年份（Approximate Vintage），並提供推斷理由（Reasoning）",
          "C. 只需要識別葡萄品種，不需要分析結構",
          "D. DipWSET 考試不包含盲品單元"
        ],
        "correct": 1,
        "explanation": "DipWSET Unit 1 盲品考試的評分重點：正確的推斷（Correct Deduction）固然重要，但評分者更注重「推斷過程的邏輯一致性（Logical Consistency of Deduction）」——即使最終品種推斷錯誤，若分析到的線索（如高酸度+低單寧+淡色+草本香氣）完整支持了推斷（如 Sauvignon Blanc），仍可以得到部分分數。高分盲品報告的結構：① 外觀（Appearance）：清晰度、顏色深淺、顏色色調→品種/年份暗示；② 嗅覺（Nose）：香氣強度、香氣特徵（一香/二香/三香）→品種/釀造/熟成線索；③ 口感（Palate）：甜度、酸度、單寧、酒精、酒體、果味、其他特徵、收尾→產區/年份線索；④ 結論（Conclusions）：品質評估（Outstanding/Very Good/Good/Acceptable/Faulty）+ 完整推斷 + 理由說明。"
      },
      {
        "type": "single",
        "question": "「系統性盲品（Systematic Blind Tasting）」中，從外觀識別葡萄酒特征的關鍵線索是？",
        "options": [
          "A. 外觀分析無法提供任何有用的品種或產區資訊",
          "B. 顏色深淺（Color Depth）+ 顏色色調（Color Hue）+ 清晰度（Clarity）的三維分析——紅酒顏色深淺：深紫黑色（如 Syrah/Malbec）vs. 淡寶石紅（如 Pinot Noir）；紅酒色調：紅紫色移向磚橘色為熟成信號（Tertiary Development）；白酒顏色深淺：深金黃（如Burgundy Grand Cru 熟成白酒/Sauternes）vs. 淡黃白（如 Muscadet）；白酒色調：略帶綠色（年輕清爽型）vs. 深金黃（Oak-aged/甜酒/熟成）；清晰度：混濁（Hazy）可能提示未過濾（Unfiltered）/自然酒或品質問題",
          "C. 所有葡萄品種的外觀完全相同，無法區分",
          "D. 外觀分析只能告訴我們酒的顏色，沒有其他資訊"
        ],
        "correct": 1,
        "explanation": "布根地盲品的外觀診斷應用：① 黑皮諾（Pinot Noir）的色澤特徵——通常是所有紅酒中顏色最淡的主流紅酒品種（薄皮、低花青素），透過玻璃杯可見手指；布根地村莊級/一級園的色澤：中等淡寶石紅（Medium Ruby），無深紫黑色（Deep Purple）；② 夏多內（Chardonnay）的色澤范圍——未過桶/Chablis 風格：淡黃白（Pale Lemon）；過桶村莊/一級/特級：中等金黃（Medium Gold）；Meursault 熟成酒款：深金黃至琥珀（Deep Gold to Amber）；③ 白酒的氣泡（Mousse）評估——若有氣泡：細膩持久的小氣泡是高品質 Crémant de Bourgogne 的特徵；粗糙快散是低品質起泡信號。"
      },
      {
        "type": "multiple",
        "question": "盲品 Gevrey-Chambertin Grand Cru（Chambertin）的「嗅覺和口感線索（Aromatic and Palate Clues）」有哪些典型特徵？（多選）",
        "options": [
          "A. 典型的紅色漿果香（Strawberry/Raspberry）+ 玫瑰花香（Rose）+ 淡淡泥土氣息（Forest Floor/Humus）——黑皮諾在 Gevrey 地區熱成的一香特徵",
          "B. 熟成後發展出的三香特徵：皮革（Leather）、動物氣息（Animal/Gamey）、松露（Truffle）+ 蘑菇（Mushroom）、菸草（Tobacco）",
          "C. 口感上：中等+酸度（Medium+ Acidity）、中等+單寧（Medium+ Tannin，絲滑質地 Silky Texture）、長收尾（Long Finish）、複雜的礦物感（Mineral Complexity）",
          "D. Chambertin 的特徵是濃厚甜美的香草/椰子（Vanilla/Coconut）和熱帶水果（Tropical Fruit）——與 Cabernet Sauvignon 相同"
        ],
        "correct": [0, 1, 2],
        "explanation": "Chambertin Grand Cru 的系統性品評特徵（A/B/C 正確，D 描述的是錯誤品種特徵）：一香（Primary Aromas）——新鮮採摘的紅色漿果（Strawberry, Raspberry, Cherry）+ 花香（Violet, Rose）；二香（Secondary Aromas，釀造影響）——若有使用橡木：香草（Vanilla）、丁香（Clove）、菸草（Tobacco）、烘烤（Toast）；三香（Tertiary Aromas，熟成影響）——陳年 Chambertin（10-15年）發展出：皮革（Leather）、野味（Gamey）、松露（Truffle）、蘑菇（Mushroom）、潮濕泥土（Wet Earth）；口感結構：布根地頂尖 Grand Cru 黑皮諾的單寧雖然有存在感，但質感細膩絲滑（Fine-Grained Silky Tannin），與波爾多或南隆河的口腔乾澀粗砂質單寧完全不同——這個質感差異是識別頂尖 Côte de Nuits 的關鍵口感線索。"
      },
      {
        "type": "single",
        "question": "盲品中面對「不確定（Uncertainty）」時的最佳策略是？",
        "options": [
          "A. 遇到不確定時，直接放棄推斷，寫不清楚",
          "B. 基於線索的條件式推斷（Conditional Deduction）——高分回答不是偽裝成確定的（Pretending Certainty）；而是清楚展示推斷邏輯：「基於以下線索：淺色澤（A）、高酸度（B）、低單寧（C）、紅色漿果和花香（D），最可能的推斷是 Pinot Noir，最有可能來自冷涼氣候產區（如布根地或奧勒岡），若為布根地則年份可能在 2016-2020 年之間。」——條件式推斷（Conditional Deduction）展示了系統性思維，評分者能評估推斷邏輯的品質，即使最終品種錯誤也有部分分數",
          "C. 盲品中必須完全確定才能寫推斷，不確定就跳過",
          "D. 在盲品考試中，猜測具體年份是扣分行為，應完全避免"
        ],
        "correct": 1,
        "explanation": "盲品推斷的「線索到推斷鏈（Clue-to-Deduction Chain）」練習方法：把每個觀察到的感官特征（Sensory Clue）映射到可能的解釋（Possible Interpretation）：線索「中高顏色深度（Medium-Deep Color）+ 清晰的薄荷/胡椒香（Black Pepper）+ 高單寧（High Tannin）+ 高酸度（High Acidity）+ 中高酒精（Medium-High Alcohol）」→ 推斷：北隆河 Syrah（Syrah from Northern Rhône）的典型組合。相反，「淡色（Pale）+ 低單寧（Low Tannin）+ 高酸度（High Acidity）+ 紅色水果（Red Fruit）+ 輕微礦物感（Mineral）」→ 推斷：冷涼氣候的 Pinot Noir（布根地/Alsace/Champagne 基酒等）。WSET DipWSET 盲品的高分陷阱：很多考生在評估口感結構時，把「單寧細膩（Fine-Grained）」錯誤判斷為「單寧低（Low Tannin）」——布根地頂尖 Grand Cru 黑皮諾的單寧雖然細膩，但濃縮度（Concentration）和長度（Length on Palate）是相當的，正確描述應是 Medium- to Medium+ Tannin（Fine-Grained Texture）而非 Low Tannin。"
      },
      {
        "type": "single",
        "question": "「布根地白酒（White Burgundy）vs. 其他產區夏多內（Chardonnay）」的盲品識別關鍵差異是？",
        "options": [
          "A. 布根地白酒和其他夏多內在盲品中完全無法區分",
          "B. 礦物感（Minerality）+ 酸度結構（Acid Structure）+ 橡木整合度（Oak Integration）的組合分析——布根地頂尖白酒（如 Meursault/Puligny/Chassagne Premier-Cru+）的特徵：①  克制而精準的橡木（Restrained Oak）：新桶香草/奶油整合後不壓過果香（Oak-Integrated Not Oak-Dominated）；② 高酸度支撐（High Acidity Backbone）：使整體清爽而不是甜重；③ 礦物感（Wet Stone, Flint, Chalk）：頂尖布根地白酒的礦物氣息是識別關鍵；對比新世界夏多內（如加州/澳洲）：橡木更明顯外露（新桶香草、奶油、烤面包 Primary Oak）、酸度偏低（熱帶氣候）、較少礦物感",
          "C. 只要是夏多內就都有同樣的礦物感，無法區分布根地和新世界",
          "D. 布根地白酒一定比其他夏多內顏色更淺"
        ],
        "correct": 1,
        "explanation": "布根地白酒盲品的「礦物感（Minerality）」理解：礦物感是布根地白酒最常被提及但也最常被誤解的特徵——用科學語言描述礦物感很困難（礦物質本身無法氣化被人嗅到），但感官上通常描述為：濕石頭（Wet Stone）、火石（Flint, 類似打火石的煙燻礦物氣息）、粉筆（Chalk）、青蘋果皮（Green Apple Skin）的清鮮感和低揮發酸環境下的精準感。具體產區盲品差異：Chablis——更尖銳的酸度（Higher Acidity）+ 更明顯的青蘋果和柑橘（Green Apple + Citrus）+ 海鮮礦物感（Oyster Shell Minerality）；Meursault——更豐腴的口感（Rounder Body）+ 榛果（Hazelnut）和黃油（Butter）的二香特徵；Puligny-Montrachet——介於 Chablis 的精準和 Meursault 的豐潤之間，是公認最優雅而完整的布根地白酒風格。"
      }
    ]
  },
  "m8-l3": {
    "type": "quiz", "title": "🧠 口試模擬與應對技巧知識檢測",
    "questions": [
      {
        "type": "single",
        "question": "WSET Level 4 Diploma 的「口試（Oral Examination / Viva Voce）」主要評估什麼能力？",
        "options": [
          "A. 口試只測試記憶力，背誦事實就能通過",
          "B. 在壓力下的即時批判性思維（Under-Pressure Critical Thinking）+ 口語清晰表達（Clear Oral Communication）——口試評審員（Examiner）會針對考生的論文（Dissertation）或指定主題提問，考察：① 深度理解（Deep Understanding）：不只知道「是什麼（What）」，更要解釋「為什麼（Why）」和「如何（How）」；② 批判性防禦（Critical Defense）：能夠在評審提出反例（Counter-Evidence）或挑戰（Challenge）時，有說服力地維護或修正自己的觀點；③ 學術誠實（Intellectual Honesty）：承認論文的侷限性（Limitations），顯示成熟的學術態度",
          "C. 口試只是走形式，不影響最終成績",
          "D. 口試要求考生在 5 分鐘內正確說出 100 道酒款知識問題"
        ],
        "correct": 1,
        "explanation": "DipWSET 口試的「防禦論文（Defending the Dissertation）」典型互動模式：評審問：「您在研究中說 2016 年霜害顯著影響了布根地 Chablis 的酸度——但也有研究（如 Lewin, 2018）認為酸度差異更多來自釀造選擇，您如何回應？」高分回答範式：「Lewin 的觀點指出了酸度測量中的一個重要變量——感謝您提出這個反例。我的研究主要聚焦於田間數據（葡萄成熟時的 pH 值演變），Lewin 的研究則更聚焦於釀造介入。我認為兩者並不互相矛盾——霜害影響了收穫時的葡萄酸度水平，而釀造師的後續選擇可以進一步調整（但不能完全消除）田間酸度的基礎差異。」這種回答展示了：接受挑戰（不防禦性抵制）、整合不同觀點、堅持原始論點的合理基礎。"
      },
      {
        "type": "single",
        "question": "口試中面對「不知道答案」的情況時，最恰當的應對方式是？",
        "options": [
          "A. 不知道就立刻說不知道並停止，等待下一個問題",
          "B. 誠實承認局限 + 展示推理框架（Show Framework Even Without Answer）——「我目前不確定這個具體數據，但基於我對這個主題的了解，我的推斷方向是：[理由A] + [理由B]，所以我猜測答案可能是 [X]，但我需要查閱 [具體資料來源] 來確認」——展示推理框架比強裝已知更重要；口試評審員最不喜歡的是：編造不確定的事實（Fabricating Facts），這比直接說不知道更傷成績",
          "C. 迅速改變話題，讓評審忘記這個問題",
          "D. 重複問題以爭取更多時間，但不需要真的思考"
        ],
        "correct": 1,
        "explanation": "口試的「知識邊界（Knowledge Boundary）」誠實管理策略：評審員通常清楚知道哪些問題考生不一定了解——提問超綱問題的目的是觀察考生在「知識邊界」上的處理方式，而不是陷阱。「我不確定但我的推斷框架是……」的回答結構展示了：① 知道自己知道什麼（Metacognition）；② 能夠在不完整信息下使用已知框架（Framework Application）；③ 學術誠實（Academic Honesty）——不編造假答案，是高度重要的職業素質。口試準備的「模擬壓力練習（Simulated Pressure Practice）」：與同學或導師進行模擬口試（Mock Viva），讓對方故意提出反例或挑戰，是口試準備的最高效訓練——在安全環境下模擬真實口試壓力，讓回答變成「肌肉記憶（Muscle Memory）」。"
      },
      {
        "type": "multiple",
        "question": "「有效的口試準備策略（Effective Viva Voce Preparation）」包括？（多選）",
        "options": [
          "A. 重新通讀論文全文（Re-read Full Dissertation）並列出每個章節的主要論點和潛在弱點（Potential Weaknesses）",
          "B. 預測高機率問題（Predict High-Probability Questions）：研究方法的合理性、數據的侷限、結論的推論邊界",
          "C. 練習「口頭 SAT 結構（Verbal SAT Structure）」——清楚、分段、邏輯連貫的口語表達",
          "D. 口試只需要在考試前一天準備 30 分鐘即可，不需要系統性準備"
        ],
        "correct": [0, 1, 2],
        "explanation": "口試準備的「三層次框架（Three-Level Preparation Framework）」（A/B/C 正確，D 嚴重低估準備需求）：重讀論文（A）——很多考生在論文提交和口試之間相隔數月，需要重新熟悉自己的研究細節；重讀時特別標記：哪些結論的支持論據最弱（Most Vulnerable Points），哪些方法論選擇易受質疑；預測問題（B）——高機率問題模板：「為什麼選擇這個方法論而不是定量方法？」「您的樣本數為 50，是否足以支持您的結論？」「如果重做這個研究，您會改變什麼？」；口語表達（C）——口語表達的清晰度（Clarity）+ 節奏控制（Pacing）是口試特有的挑戰：說話過快（Nervousness）使評審難以抓住論點，練習的目標是在保持智識深度的同時，以清楚、有結構的語言表達（Clear & Structured Verbal Communication）。"
      },
      {
        "type": "single",
        "question": "口試中被問到「您的論文在哪裡最薄弱？（What is the weakest part of your dissertation?）」時，最佳策略是？",
        "options": [
          "A. 說論文完美無缺，沒有任何弱點",
          "B. 主動識別真實弱點 + 解釋改善方向（Identify Weakness + Explain Potential Improvement）——如：「我認為本研究最大的限制是樣本規模——問卷的 50 個受訪者主要來自台北市的 WSET 課程學習者，這限制了結論的外部效度（External Validity）；若時間資源允許，未來的研究應增加到至少 200 個受訪者並覆蓋不同地區，以提高結論的代表性（Representativeness）」——主動識別弱點展示批判性自我評估（Critical Self-Assessment），是學術成熟度的表現",
          "C. 把弱點歸因於考試制度或時間限制，而非研究設計本身",
          "D. 說所有研究都有弱點，無法具體說出自己論文的弱點"
        ],
        "correct": 1,
        "explanation": "自我批判性評估（Critical Self-Assessment）的學術成熟度信號：說「我的論文完美無缺」是嚴重警示——任何研究都有侷限性，承認侷限不是弱點的表現，而是「研究者的科學素養（Scientific Literacy）」的展現。評審員最希望看到的回答結構：① 具體說出弱點（Specific Weakness）；② 解釋為何這個弱點在本研究中無法完全避免（Contextual Explanation）；③ 說明未來如何改善（Improvement Direction）——三部分構成一個「成熟的學術反思（Mature Academic Reflection）」，使評審員看到考生的分析深度而不只是記憶力。"
      },
      {
        "type": "single",
        "question": "「壓力管理（Stress Management）」在口試表現中的重要性和技巧是？",
        "options": [
          "A. 緊張對口試表現沒有任何影響",
          "B. 適度壓力是表現催化劑（Performance Catalyst），但過高壓力是表現殺手（Performance Killer）——科學上，「耶克斯-多德森定律（Yerkes-Dodson Law）」說明最優表現發生在中等喚醒水平（Medium Arousal Level）；口試緊張的具體技術管理：① 呼吸控制（Breathing Control）：4-7-8 呼吸法（吸氣4秒、屏息7秒、呼出8秒）在等候室使用；② 思維重框（Cognitive Reframing）：把「口試是評判我的考試」重框為「這是展示我研究深度的機會（Showcase Opportunity）」；③ 回答前停頓2秒（Deliberate Pause Before Answering）：讓大腦組織思路，避免緊張性快速亂說",
          "C. 口試時完全不能顯示任何緊張，否則立即失格",
          "D. 最好的方式是在口試前不做任何準備，以保持自然狀態"
        ],
        "correct": 1,
        "explanation": "Yerkes-Dodson 定律在口試表現中的應用：完全不緊張（Underaroused）→ 表現鬆散、回答不夠深入；適度緊張（Optimal Arousal）→ 思維清晰、回答有力度；過度緊張（Overaroused）→ 思維停頓、記憶空白（Blocking）、語無倫次。口試到場前的「正念準備（Mindfulness Preparation）」：WSET 考官和學術研究均確認，評審員完全預期並接受考生會有一定程度的緊張——評審員在口試開始時的暖場問題（Warm-Up Question，通常是開放性簡單問題）正是為了讓考生降低初始緊張水平；「第一個問題回答後，大腦通常就能進入正常運作狀態」——明白這個心理機制，有助於考前提高心理韌性（Psychological Resilience）。"
      }
    ]
  },
  "m8-l4": {
    "type": "quiz", "title": "🧠 案例研究分析知識檢測",
    "questions": [
      {
        "type": "single",
        "question": "「案例研究法（Case Study Methodology）」在葡萄酒研究中的優勢和限制是？",
        "options": [
          "A. 案例研究法是最差的研究方法，應完全避免使用",
          "B. 深度脈絡理解（Contextual Depth）優勢 vs. 代表性（Representativeness）的固有侷限——優勢：案例研究允許對特定酒莊/地區/年份的深度探究，捕捉「脈絡豐富性（Contextual Richness）」——如 DRC 的 Romanée-Conti 年份差異案例，無法用大樣本統計方法完整呈現；侷限：單一案例（Single Case）的結論難以推廣（Generalize）到更大的群體——「DRC 的經驗無法直接代表所有布根地 Grand Cru」；多案例研究（Multiple Case Study）透過比較（Cross-Case Comparison）可以提高外部效度，但仍不及真正的統計隨機樣本",
          "C. 案例研究法需要 1,000 個以上的樣本才能進行",
          "D. 案例研究法只適用於財務數據分析"
        ],
        "correct": 1,
        "explanation": "案例研究法的「選擇正當性（Selection Justification）」在 DipWSET 論文中的應用：若選擇案例研究設計，論文方法論章節必須說明：① 為什麼選擇這個案例（Case Selection Rationale）——是否具代表性（Typical Case）、特殊性（Extreme/Deviant Case）、還是理論闡釋性（Theory-Building Case）？② 數據蒐集來源——訪談、酒莊記錄、官方統計、評論家評分等；③ 侷限的誠實聲明——「本研究的結論基於 Domaine X 的特定環境，可能不適用所有類似規模的布根地精品酒莊」。對比強項：案例研究 vs. 統計研究的最重要區別——案例研究的目標是「分析性推廣（Analytic Generalization）」（理論的驗證或建立），而不是「統計推廣（Statistical Generalization）」（樣本代表群體）。"
      },
      {
        "type": "single",
        "question": "對布根地酒莊進行「SWOT 分析（Strengths, Weaknesses, Opportunities, Threats）」時，典型的「外部威脅（Threats）」是？",
        "options": [
          "A. 布根地酒莊沒有任何外部威脅，只有優勢",
          "B. 氣候變遷（Climate Change）+ 假酒市場（Counterfeit Market）+ 競爭性供給（Competitive Supply）三大威脅——① 氣候變遷：春霜頻率增加、熱浪、乾旱威脅到農業生產穩定性，長期影響布根地風土特色（Terroir Character）；② 假酒/仿冒（Counterfeit Wines）：布根地頂尖酒款（尤其 DRC、Leroy）是全球假酒最嚴重的受害者之一，Rudy Kurniawan 案件（偽造 Ponsot 等酒款，造成數百萬美元損失）顯示假酒風險的財務和聲譽破壞；③ 競爭性供給：全球高品質 Pinot Noir（奧勒岡、布根地外的新興產區）提供性價比替代品，可能壓縮布根地非頂尖層級的市場空間",
          "C. 布根地酒莊的唯一威脅是橡木桶價格上漲",
          "D. 假酒問題只影響波爾多，布根地完全不受假酒威脅"
        ],
        "correct": 1,
        "explanation": "布根地 SWOT 分析的完整框架補充：優勢（Strengths）——UNESCO 世界遺產背書、DRC 等頂尖品牌的全球溢價效應（Premium Effect）、成熟的 AOC 分級系統為品質提供制度保證、黑皮諾和夏多內的全球人氣；劣勢（Weaknesses）——土地極度碎片化（Fragmentation）導致細碎的小批次生產（Small-Batch Production）、土地成本高使新創門檻極高、氣候脆弱性（Frost/Hail Vulnerability）；機會（Opportunities）——亞洲精品市場的持續增長（特別是台灣和日本的成熟收藏家群體）、生物動力農業的市場溢價、酒莊旅遊與體驗式經濟（Experience Economy）；威脅（Threats）——如上述三大威脅。SWOT 在論文中的使用注意：SWOT 是描述性分析工具，需結合「TOWS 矩陣（Threats-Opportunities-Weaknesses-Strengths Matrix）」或 Porter 五力模型（Porter's Five Forces）提出「策略性因應（Strategic Responses）」才能構成高品質的案例分析。"
      },
      {
        "type": "multiple",
        "question": "「Porter 五力模型（Porter's Five Forces）」應用於布根地酒莊的競爭分析時，個別力量的評估結論包括？（多選）",
        "options": [
          "A. 供應商議價能力（Supplier Power）：頂尖布根地的核心供應商是土地本身，一旦頂尖地塊確立，供應商（地主）具有極高議價力（Grand Cru 土地基本上是固定的，無法增加供給）",
          "B. 買家議價能力（Buyer Power）：布根地頂尖 Grand Cru 買家的議價能力極低——酒莊掌控分配名單（Allocation List），等待買家比現有供給多，是典型的賣方市場（Seller's Market）",
          "C. 新進入威脅（Threat of New Entrants）：頂尖 Grand Cru 市場的新進入威脅極低——土地壁壘（Physical Land Barrier）+ 高資本壁壘（Capital Barrier）+ 品牌歷史壁壘（Brand History Barrier）三重防護",
          "D. 布根地 Grand Cru 市場的競爭強度（Rivalry Among Competitors）是五力模型中最強的力量"
        ],
        "correct": [0, 1, 2],
        "explanation": "Porter 五力在布根地頂尖 Grand Cru 市場的特殊結論（A/B/C 正確，D 結論相反——競爭強度反而是最弱的力量）：在頂尖 Grand Cru 市場，五力配置極度有利於生產者：① 供應商（土地）議價力高（A）但大型家族莊通常已擁有土地，此力量對已建立莊的影響力有限；② 買家議價力低（B）——這是新世界精品酒莊最羨慕的布根地頂尖特徵，是布根地「賣方市場（Seller's Market）」的核心邏輯；③ 新進入威脅低（C）——三重壁壘使頂尖布根地市場是極少數真正接近「完全競爭壁壘（Perfect Barrier）」的商業環境之一；替代品威脅（Threat of Substitutes）——中等偏弱：世界上沒有「一樣的」Romanée-Conti，但收藏家在有限預算下可能選擇高品質奧勒岡 Pinot Noir 替代村莊級布根地（不能替代頂尖 Grand Cru，但在村莊級可以形成一定替代壓力）；競爭強度（Rivalry）——實際上相當低：布根地頂尖生產者之間更多是「相互提升（Collective Elevation）」的正向關係，而非惡性競爭，這種合作競爭（Coopetition）是保持整體產區品牌價值的重要機制。"
      },
      {
        "type": "single",
        "question": "「DRC（Domaine de la Romanée-Conti）作為布根地案例研究」的最重要策略學習點是？",
        "options": [
          "A. DRC 的策略只有一個：擁有最好的地塊，沒有其他值得學習之處",
          "B. 極端稀缺性管理（Extreme Scarcity Management）+ 分配制度（Allocation System）的完美結合——DRC 每年的 Romanée-Conti 產量約 5,000-6,000 瓶（1.81 公頃 × 約 3,000 瓶/公頃），供給完全固定且不可增加；DRC 透過：① 全球性分配系統（Global Allocation Network）——由指定進口商/經銷商管理等待名單；② 捆綁銷售（Bundle Purchase）——購買 Romanée-Conti 必須同時購買其他款式，確保其他產品也得到分配；③ 完全不使用廣告（Zero Advertising）——品質和稀缺性自己說話。策略本質：稀缺性不只是地理事實（Geographical Fact），更是被積極管理（Actively Managed）的競爭優勢",
          "C. DRC 的成功秘訣是降低定價讓更多人購買",
          "D. DRC 的策略完全適用於所有布根地酒莊，沒有應用侷限"
        ],
        "correct": 1,
        "explanation": "DRC 稀缺性策略的「戰略複製侷限（Strategic Non-Transferability）」分析：DRC 的稀缺性策略之所以有效，是因為其稀缺性是「真實不可複製的（Genuinely Non-Replicable）」——只有一個 Romanée-Conti Monopole，無論 DRC 採取任何行動都不能增加其地塊面積；這與刻意限制生產（Artificial Scarcity）的策略完全不同。捆綁銷售（Bundle Purchase）的市場功能：DRC 銷售系統中，購買 Romanée-Conti 分配的買家必須同時購買一定比例的其他款式（如 Echézeaux、Vosne-Romanée 1er）——這個機制確保了「非頂端款式也得到優質分配（Non-Top SKUs Also Get Quality Distribution）」，使整個 Domaine 的品牌生態保持完整。DRC 案例的可轉移教訓（Transferable Lessons）：「分配名單管理（Allocation Management）」和「無廣告策略（Zero Advertising Strategy）」的底層邏輯（品質 + 稀缺性創造自發需求）可以被其他精品酒莊學習，即使地塊稀缺性不及 DRC，建立「更多需求者（Demand）> 供應量（Supply）」的分配名單動態，仍是精品布根地品牌管理的有效策略。"
      },
      {
        "type": "single",
        "question": "在布根地酒莊的「商業案例分析（Business Case Analysis）」中，「財務模型（Financial Model）」的核心假設是？",
        "options": [
          "A. 財務模型只需要計算最好的情景，不需要分析風險",
          "B. 「三情景財務模型（Three-Scenario Financial Model）」——高品質的商業財務分析必須包含：① 基礎情景（Base Case）：基於歷史平均表現和合理預期的主要假設；② 樂觀情景（Upside Case）：若年份出色、市場超預期、分配名單擴大等有利條件下的財務結果；③ 悲觀/壓力情景（Downside/Stress Case）：若發生嚴重霜害（減產 60%）、主力市場需求萎縮（如亞洲市場政策突變）、關鍵人才離職等不利情境下的財務結果——三情景模型使決策者能評估「最差情況下的生存能力（Worst-Case Survival）」",
          "C. 布根地酒莊不需要財務模型，直覺決策就足夠",
          "D. 財務模型中的所有假設數字必須精確到小數點後三位才有效"
        ],
        "correct": 1,
        "explanation": "三情景財務模型在布根地酒莊的應用範例：以一個 5 公頃的 Gevrey-Chambertin Village 級酒莊為例—— 基礎情景（Base Case）：年產量 25,000 瓶（50 hl/ha × 5ha × 0.667 瓶/升）× 平均出廠價 EUR 25/瓶 = EUR 625,000 年收入；樂觀情景（Upside Case）：年份出色（評分 97+）使出廠價提升至 EUR 35/瓶、亞洲市場新開拓（銷量 +15%）= EUR 900,000 年收入；悲觀情景（Downside/Stress Case）：嚴重霜害減產 60%（10,000 瓶存貨）+ 市場疲軟使出廠價下降至 EUR 22/瓶 = EUR 220,000 收入（低於固定成本 EUR 280,000）→ 需要動用財務緩衝（Financial Buffer）EUR 60,000 才能維持營運。壓力情景分析的最終目的：確定「最低財務安全邊際（Minimum Financial Safety Margin）」——本例需要至少 1 年的固定成本緩衝（EUR 280,000 的現金储備），才能在最壞情景下存活而不被迫出售或削減核心業務。"
      }
    ]
  }
}`)

function injectQuiz (moduleFile, lessonId, quiz) {
  const filepath = path.join(BASE, moduleFile)
  const raw = fs.readFileSync(filepath, 'utf8')
  const data = JSON.parse(raw)
  const lesson = data.lessons.find(l => l.id === lessonId)
  if (!lesson) { console.log(`⚠️  找不到 lesson ${lessonId}`); return false }
  if (!lesson.slides) lesson.slides = []
  if (lesson.slides.some(s => s._marker === MARKER)) { console.log(`⏭️  ${lessonId} 已注入，跳過`); return false }
  lesson.slides.push({ ...quiz, _marker: MARKER })
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf8')
  console.log(`✅ ${moduleFile}/${lessonId} 注入 ${quiz.questions.length} 題`)
  return true
}

const pairs = [
  ['master-m8.json', 'm8-l1'],
  ['master-m8.json', 'm8-l2'],
  ['master-m8.json', 'm8-l3'],
  ['master-m8.json', 'm8-l4'],
]

console.log('=== 布根地 L4 Quiz 注入 — M8前半：專家論文與綜合評估 l1-l4 ===\n')
let ok = 0
for (const [file, lid] of pairs) {
  if (QUIZ_MAP[lid] && injectQuiz(file, lid, QUIZ_MAP[lid])) ok++
}
console.log(`\n完成：${ok}/${pairs.length} 已注入`)
