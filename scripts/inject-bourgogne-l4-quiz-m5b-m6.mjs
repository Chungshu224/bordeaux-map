/**
 * inject-bourgogne-l4-quiz-m5b-m6.mjs
 * 布根地 L4 Quiz 注入 — Batch 3b
 * M5後半：m5-l5~l7（商業案例與市場策略後半）
 * M6：m6-l1~l5（國際貿易與進出口實務）
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.resolve(__dirname, '..', 'public/bourgogne/data/courses/level4')
const MARKER = '_inject_bourgogne_l4_quiz'

const QUIZ_MAP = {

  // ── M5 後半 ──

  // m5-l5：消費者行為分析
  'm5-l5': {
    type: 'quiz', title: '🧠 葡萄酒消費者行為分析知識檢測',
    questions: [
      {
        type: 'single',
        question: '葡萄酒消費者的「參與度模型（Involvement Model）」如何影響購買決策過程？',
        options: [
          'A. 所有葡萄酒消費者的參與度相同',
          'B. 「高參與度 vs. 低參與度（High vs. Low Involvement）」消費者的購買過程根本不同——高參與度消費者（葡萄酒愛好者/收藏家）會進行「廣泛資訊搜尋（Extended Problem Solving）」：研讀評論、比較年份、分析生產者背景，決策時間長但忠誠度高；低參與度消費者（日常飲用者）走「例行性購買（Routine Problem Solving）」：依賴貨架位置、酒標吸引力、品牌熟悉度做快速決定；針對不同參與度群體需要完全不同的行銷溝通策略',
          'C. 高參與度消費者總是選擇最貴的選項',
          'D. 低參與度消費者對葡萄酒品質沒有任何偏好'
        ],
        correct: 1,
        explanation: '參與度理論在葡萄酒行銷的應用：Howard & Sheth（1969）的消費者行為模型確認，高參與度產品（汽車、豪宅、頂尖葡萄酒）的購買決策路徑遵循「認知→態度→行為（Cognitive→Affective→Conative）」的全過程；低參與度產品則走「認知→行為→態度（Cognitive→Conative→Affective）」——先購買後評估。布根地精品落在高參與度端：消費者在購買前已通過評論（Burghound）、品酒會、同儕討論形成強烈態度；日常地區酒款（Bourgogne Rouge）落在低參與度端：酒標設計（Decoy Effect）和零售位置（上架高度）對銷量的影響遠超任何內容行銷。'
      },
      {
        type: 'single',
        question: '「享樂預測偏差（Affective Forecasting Bias）」如何影響葡萄酒購買決策？',
        options: [
          'A. 消費者永遠能準確預測自己喜歡什麼葡萄酒',
          'B. 消費者系統性地高估「未來享受（Future Enjoyment）」——收藏家常過度購買超出飲用能力的酒窖存量（「窖藏越多越快樂」的誤預期），未考慮飲用節奏/儲存成本/最佳適飲窗口；或在餐廳點「名聲最響但未必最適合當下心情」的酒款（依賴社會認同而非真實偏好），導致「享受預期 vs. 實際享受」的落差；這個偏差被頂尖銷售人員利用為「稀缺感緊迫性訴求（Scarcity + Urgency）」的強化工具',
          'C. 享樂預測偏差只影響葡萄酒專家',
          'D. 高價葡萄酒總是帶來更高的實際享樂感'
        ],
        correct: 1,
        explanation: '享樂預測偏差的「酒窖積累現象（Wine Cellar Accumulation Phenomenon）」：Wilson & Gilbert（2003）的研究確認人們系統性地高估未來情緒體驗的強度和持久性（Duration Neglect）。在葡萄酒脈絡中表現為：① 「囤積偏差（Hoarding Bias）」——收藏家購買量遠超實際消費能力，形成 1,000+ 瓶的酒窖但每年只喝 100 瓶，大量酒款超過適飲窗口才被開瓶；② 「錯誤場合預留（Wrong Occasion Saving）」——購買時心想「留給特別場合」但那個場合永遠被推遲；③ 「品名聲望效應（Name Prestige Effect）」——開一瓶 DRC 時因巨大的期待壓力（「這應該是我喝過最好的酒！」），實際享受感受可能因心理壓力而稀釋。'
      },
      {
        type: 'multiple',
        question: '「千禧世代與 Z 世代（Millennials & Gen Z）」葡萄酒消費者的核心特徵包括？（多選）',
        options: [
          'A. 重視「真實性（Authenticity）與透明度（Transparency）」——有機/生物動力/自然酒的強烈偏好',
          'B. 「體驗型消費（Experiential Consumption）」優先——付費參加品酒課程、酒莊旅遊的意願高於收藏珍貴老年份',
          'C. 「數位原生（Digital Native）」購買行為——Instagram 上的美觀酒標/KOL 推薦比傳統評論家影響力更大',
          'D. 對布根地精品完全不感興趣，只喝新世界葡萄酒'
        ],
        correct: [0, 1, 2],
        explanation: '新世代消費者對葡萄酒市場的「結構性影響（Structural Impact）」（A/B/C 正確，D 過度簡化）：矽谷銀行（SVB）的 State of the Wine Industry 年度報告持續追蹤世代消費變遷，確認年輕世代的三大特徵：① 真實性需求（A）——「不含硫添加（No Added Sulphites）」「有機認證」「生產者直接分享的農耕過程 Instagram 故事」是年輕布根地消費者的高相關內容，與上一代以評分驅動決策不同；② 體驗優先（B）——布根地酒鄉旅遊（Wine Tourism in Côte d\'Or）在 2015-2023 年間遊客量顯著增長，年輕訪客佔比上升（聯合國教科文組織 UNESCO 認定的布根地坡地景觀進一步驅動旅遊體驗）；③ 數位影響（C）——Ruinart「紙質二次包裝/Sustainably Conscious」的 Instagram 行銷成功將一個老牌香檳品牌打入年輕高端市場，是傳統精品酒莊數位轉型的參考案例。'
      },
      {
        type: 'single',
        question: '「酒單心理學（Wine List Psychology）」顯示，餐廳客人在葡萄酒選擇上最常見的行為是？',
        options: [
          'A. 大多數客人選擇酒單上最貴的選項',
          'B. 「第二便宜選項偏好（Second-Cheapest Option Bias）」——消費者通常不選最便宜（感覺吝嗇/品質差）也不選最貴（感覺揮霍），傾向選「第二便宜（Safe Choice）」——這個發現被餐廳廣泛利用：將利潤最高的酒款定位在「第二便宜」位置；另一個常見行為是「酒單位置偏差（Position Bias）」——第一頁/右上角的酒款點選率高於其他位置',
          'C. 所有客人都依評分選酒，不受定價位置影響',
          'D. 年份是最決定性的選酒因素'
        ],
        correct: 1,
        explanation: '餐廳酒單設計的「行為經濟學（Behavioral Economics）」應用：Ariely（2008）的研究確認「第二便宜偏好」的普遍性——客人的認知是「我沒選最差，也沒選最貴，我是明智的選擇者（Smart Chooser）」，但實際上往往落入了餐廳的設計陷阱（第二便宜的瓶子利潤率可能是最高的）。酒單設計的三個核心心理工具：① 錨定（Anchoring）——把一款 NT$8,000 的頂尖布根地放在酒單頂部，使 NT$2,400 的村莊級「顯得划算」；② 位置偏差（Position Bias）——重要推薦款放在右側頁面的視覺焦點區域；③ 「孤立效應（Isolation Effect）」——在一頁相似定價的酒款中放一款顯著不同的選項（如頂尖布根地），吸引注意力（Von Restorff Effect）。'
      },
      {
        type: 'single',
        question: '「葡萄酒品牌忠誠度（Wine Brand Loyalty）」的形成機制是？',
        options: [
          'A. 廣告頻率越高，忠誠度自動越高',
          'B. 「情感記憶錨定（Emotional Memory Anchoring）」——葡萄酒忠誠度通常由「特定場合的情感記憶」觸發：第一次喝到某款布根地是在重要的人生時刻（求婚/紀念日/頂尖餐廳），這個「情感標籤（Emotional Tag）」使消費者在此後對該品牌產生強烈的正面聯想；「社交儀式化（Social Ritualization）」——家庭/朋友圈中固定在某節日開某款酒形成儀式，也是忠誠度的強力錨定機制；這兩種機制均難以被廣告複製，是頂尖酒莊「人口老化戰略（Heritage Strategy）」的基礎',
          'C. 忠誠度只取決於客觀品質，和情感無關',
          'D. 葡萄酒市場沒有真正的品牌忠誠度'
        ],
        correct: 1,
        explanation: '情感記憶錨定的「首次重要場合效應（First Significant Occasion Effect）」：神經科學研究（LeDoux, 1996）確認，帶有強烈情感的記憶比中性記憶更持久、更易喚起——喝到「第一杯讓我感動的布根地」的記憶通常非常清晰（Who was I with? Where was I?），並形成「布根地 = 珍貴人生時刻」的潛意識聯想。酒莊的「遺產保護策略（Heritage Conservation Strategy）」：Chambolle-Musigny 的旅訪計劃、DRC 的極其謹慎媒體曝光（每年只允許少數精選記者/評論家參訪），都在刻意保護「首次體驗 DRC 的神聖感」——過度曝光反而稀釋那個特殊感，破壞情感錨定機制的強度。'
      }
    ]
  },

  // m5-l6：數位行銷與社群經營
  'm5-l6': {
    type: 'quiz', title: '🧠 數位行銷與葡萄酒社群經營知識檢測',
    questions: [
      {
        type: 'single',
        question: '精品布根地酒莊在「社群媒體策略（Social Media Strategy）」上應注意的核心矛盾是？',
        options: [
          'A. 社群媒體對布根地銷售完全沒有幫助',
          'B. 「神秘感 vs. 可及性（Mystique vs. Accessibility）」的根本張力——布根地頂尖品牌的核心競爭力部分來自「難以獲得的神秘感（Inaccessibility Premium）」，過度的社群曝光（每天發 Instagram/Reel）可能稀釋這個稀缺感知，使品牌從「夢想品牌（Aspirational Brand）」降格為「網紅品牌（Influencer Brand）」；成功策略：選擇性、高品質、有敘事深度的內容（每月 2-4 則），聚焦風土故事和農耕哲學，而非追逐演算法流量',
          'C. 所有布根地酒莊都應大量發文以提升知名度',
          'D. 只有年輕酒莊才需要社群媒體，老牌酒莊不需要'
        ],
        correct: 1,
        explanation: '奢侈品牌的「數位策略矛盾（Digital Strategy Paradox）」：Kapferer & Bastien（2012）的奢侈品行銷理論明確警告，「過度可及性（Over-Accessibility）」是奢侈品牌稀缺感的最大威脅——當 Hermès 的每條限量包都在 Instagram 的每個角落出現，它的夢想地位就被稀釋了。布根地頂尖酒莊的數位策略成功案例：Domaine de la Romanée-Conti 幾乎完全不使用官方社群媒體，其神秘感由第三方内容（Wine Spectator 報導、收藏家的開瓶記錄）維持；相比之下，一些布根地中場酒莊（如規模適中的 Gevrey Village 生產者）可以使用 Instagram 分享農耕故事（除草/採收/窖藏），在不造成過度曝光的情況下建立真誠性形象和找到對的目標消費者。'
      },
      {
        type: 'single',
        question: '「內容行銷（Content Marketing）」在葡萄酒業的最有效形式是？',
        options: [
          'A. 純粹產品資訊（成分表/技術規格）效果最佳',
          'B. 「敘事型（Narrative）內容」效果最佳——「一個生產者的農耕哲學故事」遠比「這款酒含有 13.5% 酒精」更能建立情感連結；有效的葡萄酒內容行銷核心要素：① Producer Story（為什麼這個家族選擇這塊地？）；② Terroir Journey（從土壤到瓶中的完整旅程）；③ Vintage Drama（霜害/豐收/艱困年份的克服故事）；④ Food Pairing Narrative（菜餚和葡萄酒的文化交會）',
          'C. 只有視覺內容有效，文字完全無用',
          'D. 葡萄酒內容行銷最有效的是競賽抽獎活動'
        ],
        correct: 1,
        explanation: '葡萄酒「敘事行銷（Narrative Marketing）」的神經科學基礎：Paul Zak（2013）的催產素（Oxytocin）研究確認，「有衝突/解決（Conflict/Resolution）結構的故事」能觸發大腦的催產素分泌，讓聽眾產生信任感和同理心——這就是「好年份過後的艱辛故事比技術規格更能促成購買」的神經機制。布根地天然具有豐富的敘事素材：① 世代傳承（Generational Continuity）——「我祖父在 1930 年代從農民手中買下這塊地」的家族故事；② 自然戲劇（Natural Drama）——「2021 年春霜摧毀了我們 60% 的芽苞，我們在田間哭泣，但倖存下來的果實異常濃縮」；③ 哲學使命（Philosophical Mission）——「我們放棄除草劑不是為了認證標章，而是因為我相信土壤有靈魂」——這類內容的分享率和消費者共鳴度遠超任何促銷廣告。'
      },
      {
        type: 'multiple',
        question: '葡萄酒電商（Wine E-Commerce）的關鍵成功因素包括？（多選）',
        options: [
          'A. 「內容深度（Content Depth）」——每款酒的詳細風土說明、年份筆記、最佳適飲窗口信息',
          'B. 「個人化推薦（Personalized Recommendation）」——基於購買歷史和口味偏好的 AI 推薦引擎',
          'C. 「溫控物流（Temperature-Controlled Logistics）」可靠性——確保配送全程品質',
          'D. 酒的定價越低越好，這是電商唯一的競爭手段'
        ],
        correct: [0, 1, 2],
        explanation: '葡萄酒電商的「三維競爭力（Three-Dimensional Competitiveness）」（A/B/C 正確，D 是低端策略陷阱）：精品葡萄酒電商（如 Millesima、Winebid、台灣的橡木桶）的核心差異化不來自「最低價格」而來自：內容深度（A）——「每款酒的完整敘事（Vintage Report + Producer Story + Aging Curve）」是精品電商的核心信任建立工具，低端超市電商無法複製；個人化（B）——Vivino 的成功正是利用了「用戶品嚐記錄（User Taste Profile）+ 社群評分」作為個人化推薦引擎，成為全球最大的葡萄酒 App（超過 6,000 萬用戶）；溫控物流（C）——精品布根地最大的電商痛點是「到貨品質保障」——夏季常溫快遞可能造成熟化損壞（Wine Heat Damage），是精品酒電商購買障礙的首要顧慮，體現可靠溫控的電商享有明顯溢價。'
      },
      {
        type: 'single',
        question: '「KOL（關鍵意見領袖）行銷」在布根地葡萄酒市場的適當應用是？',
        options: [
          'A. 和任何消費品相同，找粉絲最多的 KOL 就最有效',
          'B. 「垂直型 KOL（Vertical KOL / Micro-Influencer）」比大眾 KOL 更有效——葡萄酒（特別是布根地精品）的目標受眾是高參與度的精品消費者圈，需要的是「葡萄酒知識的可信度（Credibility）」而非「粉絲數量（Follower Count）」；擁有 3-5 萬但高度精準的葡萄酒愛好者追蹤者的 Micro-KOL（如台灣葡萄酒評論人/WSET DipWSET 持有者）比擁有 100 萬泛娛樂追蹤者的 Macro-KOL 更能轉換實際購買',
          'C. 布根地酒莊應完全避免 KOL 合作',
          'D. KOL 粉絲全為年輕族群，和布根地目標客群完全不重疊'
        ],
        correct: 1,
        explanation: '葡萄酒 KOL 的「精準度 vs. 規模（Precision vs. Scale）」取捨：Nielsen（2022）數據確認，Micro-Influencer（1-10 萬追蹤）的平均互動率（Engagement Rate）約 3.86% vs. Mega-Influencer（100 萬+）的 1.21%——在轉換效率上，Micro-KOL 的 ROI 約是 Macro-KOL 的 6-8 倍（精準受眾的購買意圖更高）。台灣布根地市場的 KOL 生態：台灣有數位具公信力的葡萄酒 KOL（WSET Diploma/Master of Wine 候選人、知名侍酒師），其開瓶記錄和年份評測在葡萄酒愛好者圈中影響力遠超泛娛樂 KOL；布根地進口商/酒商與這類 Micro-KOL 的合作（提供試飲樣品換取誠實評論）是低成本高效益的品牌建立工具，但需注意「付費業配的透明度揭露（Sponsored Content Disclosure）」以維護可信度。'
      },
      {
        type: 'single',
        question: '「葡萄酒 App（如 Vivino、CellarTracker）」的數據如何反向影響布根地生產者？',
        options: [
          'A. 葡萄酒 App 數據對生產者沒有任何影響',
          'B. 「民主化評分（Democratized Scoring）」對傳統評論家權威的分散衝擊——Vivino 的 6,000 萬用戶產生的群眾評分正逐漸影響消費者購買決策（「Vivino 評分 4.2 vs. Parker 94 分，我選哪個？」），使布根地生產者不能只依賴傳統評論家的背書；積極面：CellarTracker 的飲用記錄（Tasting Notes）形成了「老年份品質去向資料庫」，讓生產者了解酒款的陳年表現預期；消極面：一星負評（即使由不懂酒的消費者給出）一旦累積可能損害線上聲譽',
          'C. 所有 App 評分都是被操控的，沒有參考價值',
          'D. 只有波爾多生產者需要關注 App 評分'
        ],
        correct: 1,
        explanation: '群眾評分的「民主化悖論（Democratization Paradox）」：Wine 2.0 的數位評分平台帶來了「評分民主化（Score Democratization）」——不再只有 Parker/Burgundy Report 等少數專家能決定市場評價，任何消費者都可以在 Vivino 留下評分，改變了傳統精品葡萄酒市場的「評論家中介（Critic Intermediary）」權力結構。布根地生產者的應對策略：① 主動「聆聽（Social Listening）」——監測 Vivino/CellarTracker 的評論，藉此了解進入市場後的真實消費者反饋（而非只聽進口商轉述）；② 老年份管理——確保過了適飲窗口的酒款不在二手市場大量流通（避免因老化而非品質問題的低評分）；③ 擁抱平台——部分前衛布根地酒莊主動在 Vivino 建立官方頁面，提供「酒莊的正確品飲建議（Serving/Aging Recommendation）」作為消費者教育工具。'
      }
    ]
  },

  // m5-l7：商業案例分析
  'm5-l7': {
    type: 'quiz', title: '🧠 布根地葡萄酒商業案例分析知識檢測',
    questions: [
      {
        type: 'single',
        question: '以「DRC vs. Henri Jayer」為案例，兩者品牌策略的核心差異是？',
        options: [
          'A. 兩者策略完全相同，都依賴酒莊規模擴張',
          'B. 「機構品牌（Institutional Brand）vs. 個人傳奇品牌（Personal Legend Brand）」——DRC 是「機構型傳承（Institutional Continuity）」品牌，通過嚴格的接班制度（Aubert de Villaine + 其繼承者的長期穩定管理）確保風格與哲學的世代一致性；Henri Jayer 則是「個人傳奇（Personal Legend）」品牌，品牌核心是「Henri 本人的釀造技藝與個性」，其去世（2006）後酒款成為「化石收藏品（Fossil Collectible）」，存世數量固定使價格爆發性上漲；兩者代表了「傳承型 vs. 不可複製型」的兩個極端策略',
          'C. Henri Jayer 的酒比 DRC 品質更差',
          'D. DRC 是個人品牌，Henri Jayer 是機構品牌'
        ],
        correct: 1,
        explanation: 'Henri Jayer 「後遺效應（Post-Mortem Effect）」的品牌經濟學：Jayer 的 Richebourg/Cros Parantoux 在其去世後拍賣價格持續攀升，最終使其成為全球最昂貴的布根地之一（Cros Parantoux 1985 拍賣成交超過 USD 200,000/瓶）——這是「存世量有限（Finite Supply）+ 個人神話（Personal Myth）+ 無法再生產（Non-Reproducible）」的三重稀缺疊加效應。DRC 的機構傳承策略的對比優勢：DRC 因為「機構化（Institutionalized）」，使買家不擔心「下一任管理者水準下降」的風險，為長期收藏提供了更穩定的基礎。這個案例是布根地品牌管理的核心教學——個人品牌的頂點可達到超越機構品牌的高度，但其持續性天然受限（Non-Sustainable by Nature）。'
      },
      {
        type: 'single',
        question: '「布根地旅遊（Wine Tourism in Burgundy）」的商業策略價值是？',
        options: [
          'A. 葡萄酒旅遊對布根地酒莊只是附帶收入，無策略重要性',
          'B. 「多層次價值創造（Multi-Layer Value Creation）」：① 直接收入——訪客在酒莊直售（Cellar Door Sales）通常毛利高於批發渠道（無中間商佣金）；② 品牌體驗建立——親身參訪形成「地點情感連結（Place Attachment）」，是最強的長期忠誠度建立工具，訪客成為品牌大使；③ 市場教育——通過試飲體驗（Guided Tasting）轉換「低參與度」訪客為「高參與度」忠實客戶；UNESCO 2015 年將布根地坡地景觀列入世界遺產進一步強化了旅遊吸引力',
          'C. 開放訪客只會消耗酒莊資源，應完全避免',
          'D. 只有小型酒莊才能做葡萄酒旅遊'
        ],
        correct: 1,
        explanation: '布根地酒莊旅遊的「直接銷售溢價（Direct Sales Premium）」：布根地坡地（Clos Vougeot/Chambolle/Gevrey 一帶）是歐洲最受歡迎的葡萄酒旅遊目的地之一，年訪客量數百萬（伯恩旅遊局 Beaune Tourism 數據）。酒莊直銷（Cellar Door）的商業優勢：批發漸道的酒莊端毛利約 30-50%，直銷端毛利 60-80%，差距顯著；但布根地頂尖酒莊（DRC/Leroy）並不開放一般訪客，因為需求遠超供應使「零售後備（Retail Access）」沒有必要，反而是中小型精品莊（如 Village 到 Premier Cru 級）的訪客策略最為積極。UNESCO 世界遺產認定的「間接正外部性（Indirect Positive Externality）」：認定帶來的國際媒體報導和聯合國品牌背書，對整個布根地的旅遊品牌形象有乘數效應。'
      },
      {
        type: 'multiple',
        question: '「Maison Louis Jadot」的商業轉型案例（從傳統 Négociant 到現代 Domaine-Négociant 混合）體現了？（多選）',
        options: [
          'A. 「垂直整合策略（Vertical Integration Strategy）」——積極購置自有地塊（如收購 Domaine Duc de Magenta），減少對外部葡萄採購的依賴，提升品質控制',
          'B. 「地理擴張（Geographic Expansion）」——從伯恩擴展到馬貢（Mâcon）、薄酒萊（Beaujolais）提供完整價格帶產品組合',
          'C. 「品質信號投資（Quality Signal Investment）」——持續聘用頂尖釀酒師（如 Jacques Lardière 的 37 年任期），以「人才穩定性」作為品質一致性的市場信號',
          'D. 放棄葡萄酒業轉向其他行業'
        ],
        correct: [0, 1, 2],
        explanation: 'Jadot 轉型的「三維策略組合（Three-Dimensional Strategy Combination）」（A/B/C 正確，D 明顯錯誤）：垂直整合（A）——Jadot（1985 年由 Kobrand Corporation 美國公司收購控股後獲得擴張資本）在 1990s-2000s 積極購置自有地塊（Clos de la Chapelle、Chapelle-Chambertin 等），使其「頂尖精品系列」的品質控制能力大幅提升，相比純 Négociant 競爭者形成差異化優勢；地理擴張（B）——從 Côte d\'Or 核心向外擴展到 Mâcon 和 Beaujolais（覆蓋 NT$600-60,000+ 的完整價格帶），使 Jadot 能服務不同預算的消費者并形成「入門到頂尖（Entry to Prestige）」的完整漏斗；人才投資（C）——Jacques Lardière 的 37 年釀酒師任期（1970-2012）是 Jadot 品質一致性的最重要品牌資產之一，其退休本身成為業界新聞，証明「釀酒師聲譽（Winemaker Reputation）」可以成為 Négociant 品牌的核心資產。'
      },
      {
        type: 'single',
        question: '「新世代布根地生產者（Next-Gen Burgundy Producers）」面對氣候變遷時的商業策略適應是？',
        options: [
          'A. 氣候變遷對布根地商業無影響',
          'B. 多維適應策略：① 海拔上移（Altitude Migration）——探索 Hautes-Côtes de Nuits/Beaune 的更高海拔地塊（傳統上被認為太冷，但升溫使其開始達到成熟度）作為新品牌資產；② 原生酵母和自然農法（Natural Methods）加強——讓葡萄藤根系更深（應對乾旱），同時符合「氣候友善（Climate-Friendly）」的市場敘事需求；③ 早採（Early Harvest）策略——避免酒精度過高（Climate-Driven Ripeness），維持傳統布根地的清雅風格（Elegance Brand Positioning）',
          'C. 只要繼續現有做法，氣候不會影響品質',
          'D. 應放棄種植黑皮諾，轉向耐熱品種'
        ],
        correct: 1,
        explanation: '氣候變遷的「布根地商業威脅與機會（Threat & Opportunity）」雙面性：全球暖化（布根地過去 30 年平均溫度上升約 1.5°C，比全球平均快）對布根地帶來的不只是威脅，也有機會——Hautes-Côtes de Nuits/Beaune（海拔 300-400 公尺）過去因過冷被視為「二線地塊」，但升溫使其開始能穩定達到黑皮諾的理想成熟度，部分有遠見的生產者（如 Domaine Prieuré Roch 的 Nicolas Rossignol 系等）已開始在此地投資，建立「氣候韌性地塊組合（Climate-Resilient Portfolio）」。早採策略的品牌挑戰：「更低酒精度（12.5% vs.14%+）= 更接近傳統布根地風格」的論述是面向評論家和傳統收藏家的有力敘事，但部分亞洲市場偏好更成熟/飽滿的口感，形成了「市場分眾（Market Segmentation by Palate）」的挑戰。'
      },
      {
        type: 'single',
        question: '「葡萄酒期貨投資（Wine as an Alternative Asset Investment）」的核心風險是？',
        options: [
          'A. 布根地頂酒投資沒有任何風險',
          'B. 「多維風險疊加（Multi-Dimensional Risk Stacking）」：① 流動性風險（Liquidity Risk）——精品酒非即時流動資產，變現需要 3-6 個月；② 儲存風險（Storage Risk）——溫度/濕度/振動的保管疏失可能使酒款品質和市場價值歸零；③ 詐欺風險（Fraud Risk）——假酒問題（見 Rudy Kurniawan 案）；④ 市場集中風險（Concentration Risk）——頂尖布根地的高端市場依賴少數超高淨值買家的持續入場，宏觀經濟衰退可能急速降溫；⑤ 趨味風險（Palate Trend Risk）——如果未來全球精品消費者口味轉移（如自然酒全面主流化），傳統頂尖布根地可能面臨需求重組',
          'C. 只有假酒風險，沒有其他風險',
          'D. 投資布根地的 Return 始終高於股市'
        ],
        correct: 1,
        explanation: '精品葡萄酒投資的「風險矩陣（Risk Matrix）」全貌：與股票市場不同，精品酒投資缺乏標準化的市場機制，每個風險維度都需要主動管理：流動性（A）——Liv-ex 等平台提高了流動性但仍遠低於金融資產；儲存（B）——租用專業酒窖（如英國 Octavian 地下酒窖）每年成本約 NT$500-800/箱，10 年下來的儲存成本會顯著壓縮 ROI；詐欺（C）——Rudy Kurniawan 案後市場建立了更多溯源工具，但風險仍存；市場集中（D）——2020-2021 年的精品酒市場暴漲部分由「超低利率+量化寬鬆（QE）」下的流動性過剩驅動，2022 年後利率上升引發的精品資產回調印證了宏觀風險的真實性；趨味風險（E）——雖然頂尖布根地目前地位牢固，但「下一個 20 年的精品酒市場是否仍由布根地主導？」是理性投資者應考慮的長期問題。'
      }
    ]
  },

  // ── M6：國際貿易與進出口實務 ──

  // m6-l1：葡萄酒進口流程
  'm6-l1': {
    type: 'quiz', title: '🧠 葡萄酒進口流程全解析知識檢測',
    questions: [
      {
        type: 'single',
        question: '將布根地葡萄酒進口到台灣的「正式流程」主要包括哪幾個關鍵環節？',
        options: [
          'A. 只需付款，酒莊自動送達',
          'B. 完整流程：① 選品與合約（品項確認/訂購/付款條件）→ ② 出口文件（法國 EUR.1 優惠關稅原產地證明 + Health Certificate）→ ③ 運輸（海運 FCL/LCL 或空運）→ ④ 台灣報關（進口申報、食品標示前審/後審確認）→ ⑤ 衛生署食品查驗（批次抽驗 or 逐批查驗）→ ⑥ 稅費繳納（關稅+菸酒稅+健康福利捐+加值型營業稅）→ ⑦ 取貨倉儲 → ⑧ 酒標中文標貼（符合台規）→ ⑨ 市場銷售',
          'C. 只需通關就完成，沒有其他步驟',
          'D. 台灣進口布根地完全不需要任何文件'
        ],
        correct: 1,
        explanation: '台灣葡萄酒進口的「完整法規遵循路徑（Full Compliance Pathway）」：台灣的葡萄酒進口受多個機關監管：財政部關務署（關稅）、衛生福利部食品藥物管理署（食品安全查驗）、財政部（菸酒稅）。關鍵文件：EUR.1 或 Form A（GSP）是申請關稅優惠的必要文件（台灣與歐盟的關稅安排）；食品衛生查驗：台灣對特定國家/貨品的葡萄酒有「批批查驗（100% Inspection）」或「加強查驗」要求，新進口商或特定品項常面臨更嚴格的衛生查驗；中文標示要求：進口葡萄酒在台銷售前必須加貼符合台灣《食品安全衛生管理法》要求的中文標籤（品名、成分、原產地、製造日期/最佳賞味期、酒精含量等），是進口商必須管理的重要作業。'
      },
      {
        type: 'single',
        question: '葡萄酒「FOB vs. CIF 貿易條件（Incoterms）」的核心差異是？',
        options: [
          'A. FOB 和 CIF 只影響文件形式，實際風險轉移點相同',
          'B. 「風險與成本轉移點（Risk & Cost Transfer Point）」不同——FOB（Free On Board）：賣方負責到「在裝運港將貨物裝上買方指定的船舶」，之後的運費、保險、風險由買方承擔；CIF（Cost Insurance Freight）：賣方負責支付「運費+保險費」將貨物送至目的港，但貨物裝船後風險轉移給買方；進口商應評估：FOB 對有自主安排物流能力的大型進口商更有利（可掌控物流成本）；CIF 對沒有物流能力的小型進口商更便利',
          'C. 台灣進口葡萄酒只能使用 DDP 條件',
          'D. Incoterms 只適用於海運，空運不適用'
        ],
        correct: 1,
        explanation: 'Incoterms 2020（國際商會官方版本）的「風險轉移時間軸（Risk Transfer Timeline）」：從賣方工廠（EXW）到買方倉庫（DDP）有 11 個 Incoterms 條件，每個條件定義了不同的「成本分界點（Cost Split Point）和風險轉移點（Risk Transfer Point）」。葡萄酒貿易最常用的條件：FOB Bordeaux/Dijon（法國裝船港）是布根地/波爾多酒商最常報價的條件，讓進口商自主安排海運至台灣基隆/高雄各主要港口；CIF Keelung 則是「一站式」交貨，賣方包括運費+保險，適合初入行的小型進口商；DDP（Delivered Duty Paid）是賣方全責到買方倉門，在精品酒貿易中較少見，主要用於部分直接消費者郵寄案例。正確理解 Incoterms 條件是葡萄酒進口商的基礎商業能力。'
      },
      {
        type: 'multiple',
        question: '台灣葡萄酒進口商的「成本結構（Cost Structure）」包括哪些主要項目？（多選）',
        options: [
          'A. 貨款（FOB 或 CIF 購酒成本）+ 國際運費 + 海運保險費',
          'B. 台灣關稅（葡萄酒關稅率）+ 菸酒稅 + 健康福利捐 + 進口加值稅（5%）',
          'C. 食品查驗費用 + 倉儲費用 + 中文標貼加工費 + 通關代理費',
          'D. 只要付貨款，其他費用酒莊全包'
        ],
        correct: [0, 1, 2],
        explanation: '台灣葡萄酒進口的「完整成本計算矩陣（Full Cost Calculation Matrix）」（A/B/C 全為真實成本，D 不現實）：以一箱 12 瓶、每瓶 FOB EUR 50 的布根地村莊級為例：① 貨款 EUR 600/箱 ≈ NT$20,400；② 海運費（共同分攤）約 NT$500-800/箱；③ 關稅（台灣葡萄酒關稅在 WTO/FTA 優惠稅率下，法國酒依一般稅率，2024 年標準稅率 10% + 菸酒稅每公升 NT$7 + 健康福利捐每公升 NT$26，具體計算複雜）；④ 進口加值稅（5% 的 CIF + 關稅後金額）；⑤ 食品查驗費（視批次查驗或逐批）；⑥ 倉儲費（溫控倉每月費用）；⑦ 中文貼標作業費；綜合算下來，進口商的到岸成本通常是 FOB 貨款的 140-170%，最終零售定價通常是到岸成本的 200-300%，形成了葡萄酒的「多層加成結構（Multi-Tier Margin Structure）」。'
      },
      {
        type: 'single',
        question: '「葡萄酒進口商的訂購策略（Ordering Strategy）」——年度訂購 vs. 按需訂購的決策考量是？',
        options: [
          'A. 所有進口商都應現貨隨買隨用',
          'B. 「年度訂購（Annual Purchase）」策略的優勢：① 確保稀缺年份和熱門酒款的配額保障（頂尖布根地配額制，不年年購買會失去資格）；② 與酒莊的長期關係維護（一致的年度訂購顯示承諾，加強分配關係）；③ 批量採物流效率（整貨櫃成本 < 零散小批）；劣勢：資金佔用（庫存資本成本）、倉儲成本、市場需求波動風險；「按需訂購（On-Demand）」策略適合資金緊張或非高需求的常規品項',
          'C. 一次性大量購買 10 年份量是最優策略',
          'D. 只購買現貨，拒絕任何期貨式訂購'
        ],
        correct: 1,
        explanation: '訂購策略的「關係資本 vs. 財務資本（Relationship Capital vs. Financial Capital）」取捨：對於稀缺布根地（DRC/Leroy/MRC/Rousseau），「年度持續訂購（Continuous Annual Order）」的關係維護價值遠超過庫存資金佔用成本——很多頂尖布根地進口商寧願承受較高的資金成本，也要確保每年的配額資格不中斷，因為「一旦放棄一年，可能等待 3-5 年才能恢復配額」（特別是 DRC 的分配制度）。實際作業模式：多數台灣精品布根地進口商的採購節奏是：每年 10-11 月確認新年份（當年採收）訂購意向 → 次年 6-9 月到岸 → 熟成儲存 → 上市銷售，形成約 1-1.5 年的「進貨-銷售循環（Order-to-Sale Cycle）」，需要相應的運營資金規劃。'
      },
      {
        type: 'single',
        question: '「台灣市場的葡萄酒進口許可制度」在哪個條件下需要特別注意？',
        options: [
          'A. 台灣進口葡萄酒完全不需要任何許可',
          'B. 「菸酒進口業許可（Tobacco and Alcohol Import License）」是必要起點——依據《菸酒管理法》，在台從事菸酒進口業務須向財政部申請「菸酒進口業許可」（國內廠商）；合法許可是進口、倉儲、分銷葡萄酒的前提；同時，每批進口酒須向衛福部食藥署辦理食品業者登錄和進口報關，確保食品安全查驗合規；無照進口或規避查驗是違法行為（可面臨高額罰款和刑事責任）',
          'C. 只有酒精度超過 15% 的酒才需要許可',
          'D. 許可只需要向稅務局申請，無其他機關要求'
        ],
        correct: 1,
        explanation: '台灣葡萄酒進口的「多機關法規遵循（Multi-Agency Compliance）」架構：財政部（菸酒進口業許可、菸酒稅）、衛福部食藥署（食品查驗申請、食品業者登錄）、財政部關務署（關稅申報、進口報關）是三個主要監管機關，新進口商必須同時完成三者的法規要求。常見合規陷阱：① 以「個人自用」名義申報大批進口酒，數量超過自用合理範圍可能被海關認定為商業進口而要求補稅；② 未申請菸酒進口業許可就從事商業進口銷售（違法）；③ 中文標籤不符食藥署要求（酒精含量標示、健康警語遺漏等）導致扣押；④ 葡萄酒逐批查驗期間的倉儲成本和延誤風險需要在商業計劃中預留緩衝。'
      }
    ]
  },

  // m6-l2：關稅與稅務規劃
  'm6-l2': {
    type: 'quiz', title: '🧠 關稅與稅務規劃知識檢測',
    questions: [
      {
        type: 'single',
        question: '台灣進口葡萄酒的「菸酒稅（Tobacco and Alcohol Tax）」計算基礎是？',
        options: [
          'A. 菸酒稅以葡萄酒的進口 CIF 價值為計算基礎（ad valorem）',
          'B. 菸酒稅以「容量（每公升）」為計算基礎（specific tax）——台灣《菸酒稅法》規定葡萄酒每公升徵收固定金額菸酒稅（2024 年約 NT$7/公升），不論酒款定價高低均等額徵收；同時徵收健康福利捐（每公升另加 NT$26）；這意味著菸酒稅對低價酒的相對稅負比例（占售價比）高於高價精品酒，形成「累退稅（Regressive Tax）」效果',
          'C. 菸酒稅只針對酒精度超過 20% 的強酒',
          'D. 台灣葡萄酒進口完全免徵菸酒稅'
        ],
        correct: 1,
        explanation: '台灣菸酒稅的「量稅（Specific Tax）vs. 從價稅（Ad Valorem Tax）」認識：量稅（Specific Tax）以數量（公升/公斤）為基礎，每單位固定金額，如台灣菸酒稅；從價稅（Ad Valorem Tax）以價值百分比為基礎，如關稅（10% of CIF value）。量稅對精品酒的影響較低：一瓶 CIF NT$2,000 的 Gevrey-Chambertin，菸酒稅僅約 NT$5.25（0.75L × NT$7/L）= 佔 CIF 的 0.26%，加上健康福利捐約 NT$19.5（NT$26 × 0.75L）= 合計約 NT$25/瓶，對高價精品酒的成本影響微乎其微；但對一瓶 CIF NT$150 的便宜餐酒，同樣 NT$25/瓶的量稅就佔 CIF 的 17%，顯示量稅的累退性質。掌握這個計算原理是進口商成本分析的基礎能力。'
      },
      {
        type: 'single',
        question: '「移轉定價（Transfer Pricing）」在跨國葡萄酒企業集團中的合規風險是？',
        options: [
          'A. 跨國葡萄酒集團的內部交易定價不受稅務機關關注',
          'B. 「常規交易原則（Arm\'s Length Principle，OECD Transfer Pricing Guidelines）」要求跨國集團的關聯企業間交易應按市場正常條件定價——如果法國母公司向台灣子公司以「遠低於市場價」的內部定價供應葡萄酒（人工轉移利潤至低稅地），台灣稅務機關（財政部）有權調整轉移定價，補徵企業所得稅並加罰鍰；大型跨國葡萄酒集團（如 LVMH 旗下的 Moët Hennessy 布根地資產）面臨多國稅務機關的移轉定價審查',
          'C. 移轉定價只影響製造業，不影響葡萄酒業',
          'D. 在台灣子公司虧損時就自動豁免移轉定價規範'
        ],
        correct: 1,
        explanation: 'OECD 移轉定價規則對葡萄酒業的應用：移轉定價（Transfer Pricing）是跨國稅務最重要的議題之一——2015 年 OECD BEPS（Base Erosion and Profit Shifting）行動計畫後，全球各國稅務機關對跨國企業的「利潤轉移（Profit Shifting）」監管顯著加強。葡萄酒業的移轉定價挑戰：精品葡萄酒（如 DRC）無公開交易市場定價，關聯企業間交易的「市場價格（Comparable Uncontrolled Price, CUP）」難以直接比較，使稅務機關需要使用更複雜的方法（再售價格法/成本加成法/利潤分割法）評估；台灣的移轉定價申報要求：年度關聯交易金額超過一定門檻的企業必須備置移轉定價文件，這是台灣葡萄酒進口商/分銷商的合規重點。'
      },
      {
        type: 'multiple',
        question: '葡萄酒進口商進行「稅務規劃（Tax Planning）」時，合法的節稅策略包括？（多選）',
        options: [
          'A. 利用「保稅倉庫（Bonded Warehouse）」延遲繳納關稅和菸酒稅，直到實際提領時才課稅',
          'B. 確保正確申報「優惠關稅 EUR.1 原產地證明（Certificate of Origin）」，享有 WTO 最惠國稅率或 FTA 優惠稅率',
          'C. 通過「進口加工業務（Manufacturing under Bond）」將葡萄酒成本計入製造成本，合法抵扣相關稅費',
          'D. 虛報進口申報價格（Undervaluation）以降低從價關稅基礎'
        ],
        correct: [0, 1, 2],
        explanation: '合法節稅 vs. 非法逃稅的「紅線（Red Line）」（A/B/C 合法，D 違法）：保稅倉庫（A）是台灣海關認可的「關稅遞延工具（Tax Deferral Tool）」——進口商可將進口酒存入保稅倉，暫不繳納關稅和菸酒稅，直到提領銷售時才實際課稅，改善了資金使用效率（特別對需要長期熟成的布根地頂尖酒款）；正確申報原產地（B）是最基本的合規節稅——EUR.1 使法國酒在台灣享有優惠關稅待遇（vs. 一般稅率），錯誤申報或遺漏可能導致多繳關稅，雖非逃稅但屬財務損失；加工業務抵扣（C）適用於在台進行包裝/標貼等加工的進口商；虛報申報價格（D）是「海關欺詐（Customs Fraud）」的刑事犯罪，不是「稅務規劃」而是犯罪行為，一旦被查獲面臨補稅+罰鍰（稅額的 1-3 倍）甚至刑事追訴——進口商必須清楚合法節稅和非法逃稅的法律邊界。'
      },
      {
        type: 'single',
        question: '「增值稅（VAT）」在不同葡萄酒交易環節中的「進銷項抵扣（Input/Output VAT）」機制是？',
        options: [
          'A. 每個環節都需要全額繳納 VAT，無法抵扣',
          'B. 「加值型營業稅（VAT）的中性原則（Neutrality Principle）」——B2B 交易中，進口商支付的 5% 進口 VAT 可作為「進項稅額（Input Tax）」在申報銷售 VAT（出項稅額，Output Tax）時抵扣，企業實際只繳納「加值部分（Value-Added Portion）」的 VAT；最終 VAT 負擔落在無法進行進項抵扣的「終端消費者（Final Consumer）」；因此 VAT 在整個供應鏈是中性工具，不增加 B2B 交易成本',
          'C. 台灣的葡萄酒完全免徵 VAT',
          'D. 進口時的 VAT 無法在後續抵扣，是純粹的成本'
        ],
        correct: 1,
        explanation: 'VAT「稅收中性（Tax Neutrality）」原理的實際應用：台灣的加值型及非加值型營業稅法（VAT Act）規定一般登記의 B2B 企業可以抵扣進項稅額——進口商進口時繳了 5% VAT（約 NT$1,000 for NT$20,000 CIF+關稅後的酒），銷售時向下游（酒商/餐廳）收取 5% 銷售 VAT（約 NT$1,500 for NT$30,000 售價），實際繳給稅局的是差額 NT$500（= 加值 NT$10,000 × 5%）；整個供應鏈只有最終消費者（無 VAT 登記的個人）承擔完整的 5% VAT，B2B 環節均中性。特殊情況：如果進口商銷售給無 VAT 登記資格的消費者（如自己開零售酒吧），則整個銷售端的 VAT 計算方式不同，需要正確區分課稅銷售和免稅銷售。'
      },
      {
        type: 'single',
        question: '「關稅配額（Tariff Rate Quota, TRQ）」制度在全球葡萄酒貿易中的應用是？',
        options: [
          'A. 所有國家對葡萄酒均採用單一關稅率，無配額制度',
          'B. 「關稅配額（TRQ）」允許在配額內以「低稅率（In-Quota Rate）」進口，超過配額則以「高稅率（Out-of-Quota Rate）」計稅——部分葡萄酒進口國（如中國大陸的部分農産品、某些 FTA 協定中的漸進式自由化安排）使用 TRQ 管理進口量；雖然台灣對葡萄酒非主要 TRQ 使用者，但了解此制度對服務有進入複雜市場（如中國大陸、印度、某些東南亞國家）的客戶至關重要',
          'C. TRQ 只適用於農產品，葡萄酒不受此制度約束',
          'D. 台灣葡萄酒進口嚴格採用關稅配額制，超額完全禁止進口'
        ],
        correct: 1,
        explanation: 'TRQ 的「雙軌稅率（Dual-Track Tariff）」機制：WTO 農業協定框架下，TRQ 是重要的市場保護與開放平衡工具——國家承諾在配額內允許低稅率進口（通常是市場開放的底線承諾），但超過配額則維持高保護性稅率。全球葡萄酒市場 TRQ 實例：中國大陸在部分 FTA 協定（如中澳 FTA）對澳洲葡萄酒提供 TRQ 優惠（2020 年發動反傾銷制裁之前，澳洲酒享有 TRQ 框架下的關稅遞減安排）；台灣加入 WTO 後對葡萄酒採用相對一致的一般關稅（沒有重大 TRQ 管理），但台灣出口商服務有業務進入中國市場的布根地酒款時，必須熟悉中法 FTA 條款（目前尚無正式 FTA，以 WTO MFN 稅率為主）和 RCEP 的潛在影響。'
      }
    ]
  },

  // m6-l3：物流與溫控管理
  'm6-l3': {
    type: 'quiz', title: '🧠 物流與溫控管理知識檢測',
    questions: [
      {
        type: 'single',
        question: '布根地精品酒的「適當運輸溫控條件（Ideal Temperature Control During Transport）」是？',
        options: [
          'A. 葡萄酒在常溫卡車中運輸完全沒問題',
          'B. \'理想全程溫控：12-18°C，避免超過 20°C 的持續高溫和低於 0°C 的冰凍——「熱損（Heat Damage）」是精品酒最大的物流品質威脅：持續 25°C 以上 2週+會加速氧化熟化，導致果味散失和酸度崩解（Maderization）；布根地頂尖酒款（Grand Cru）通常要求「全程冷藏（Reefer）」運輸（Reefer Container = 冷藏貨櫃），尤其是夏季或運往熱帶地區時；冷凍（< 0°C）可能造成軟木塞推出（Cork Push）和酒石沉澱過多，也應避免',
          'C. 只需要在台灣倉庫有溫控，運輸期間無需控溫',
          'D. 溫控只影響老年份，新年份可以常溫運輸'
        ],
        correct: 1,
        explanation: '精品酒物流的「冷鏈管理（Cold Chain Management）」標準：葡萄酒「熱損（Heat Damage / Madeirization）」的科學原理：溫度升高會加速所有化學反應速率（Arrhenius 方程式——溫度每升高 10°C，反應速率約加倍），意味著在 30°C 環境中，老化速度是 20°C 的 2 倍。精品布根地黑皮諾的特別脆弱性：Pinot Noir 的花青素（Anthocyanins）和芳香前驅物對熱敏感，長途海運（法國→台灣約 25-35 天）中如果通過赤道熱帶地區（如馬六甲海峽）不使用冷藏櫃，可能造成不可逆品質損失。業界標準實踐：頂尖布根地進口商（如歐洲知名酒商 Farr Vintners/Justerini & Brooks）明確要求 Reefer Container 冷藏運輸，並提供到港後的「熱損檢驗（Heat Damage Inspection）」報告給買家，建立「品質到岸無憂（Quality Assurance upon Arrival）」的服務差異化。'
      },
      {
        type: 'single',
        question: '「FCL vs. LCL（Full Container Load vs. Less than Container Load）」在葡萄酒進口的選擇邏輯是？',
        options: [
          'A. 所有葡萄酒進口都應使用 FCL，LCL 不適用',
          'B. 「訂購量 vs. 成本效率（Volume vs. Cost Efficiency）」決策——FCL（20 呎櫃約 1,200 箱，40 呎約 2,400 箱）：適合月訂購量大的大型進口商，每箱物流成本最低，且溫控 Reefer FCL 服務品質更可控；LCL（拼箱）：適合訂購量小的精品進口商，與其他進口商共用貨櫃分攤運費，每箱成本比 FCL 高 20-50%，但無需整箱最低量；選擇關鍵：① 訂購量（決定 FCL vs. LCL 的成本平衡點）；② 精品酒的溫控要求（LCL 拼箱的溫控一致性較難保障）；③ 海運時效（整批 FCL 到港後通關更快）',
          'C. 精品布根地只能空運，海運完全不適合',
          'D. 所有進口商都只能選擇 LCL，無法申請 FCL'
        ],
        correct: 1,
        explanation: 'FCL vs. LCL 的「成本臨界點（Cost Breakeven Point）」分析：LCL 的收費基礎是「CBM（立方公尺）」，標準葡萄酒箱（12 瓶 × 750ml）約 0.018-0.025 CBM/箱，對應的 LCL 費率（含海運費、目的港費用）通常是 NT$200-400/CBM，換算每箱約 NT$50-100 的海運成本；FCL（20 呎冷藏 Reefer）整體費用（法國→台灣）約 USD 3,000-5,000，分攤到 1,200 箱是每箱約 NT$75-125——當月訂購量超過約 400-500 箱時，FCL 的每箱成本開始低於 LCL，是 FCL 的成本合理切入點。精品酒的溫控差異：Reefer FCL 是完全封閉的冷藏空間（全程 12-15°C），溫控極度可靠；LCL 拼箱的溫控則依賴拼箱中心（Consolidation Warehouse）的環境，品質較難保障，是精品布根地選擇 FCL 的非成本理由。'
      },
      {
        type: 'multiple',
        question: '台灣葡萄酒「倉儲管理（Warehouse Management）」的最佳實踐包括？（多選）',
        options: [
          'A. 溫度維持 12-15°C、濕度 65-75%、避免光線直射和振動',
          'B. 「先進先出（FIFO, First In First Out）」庫存管理，確保適飲窗口內出貨',
          'C. 批次管理（Lot Tracking）——記錄每批進口的裝瓶日期/進口日期/供應商/保質期，支持食藥署查驗和召回需求',
          'D. 所有葡萄酒在常溫倉（40°C 夏季）儲存即可，溫控無必要'
        ],
        correct: [0, 1, 2],
        explanation: '精品葡萄酒倉儲的「ISO/GMP 類管理標準（ISO-like Storage Standards）」（A/B/C 正確，D 危害品質）：溫度（A）——12-15°C 是葡萄酒公認的理想儲存溫度，溫度過高（> 18°C 長期）或劇烈波動（Thermal Cycling）是加速老化的最大殺手；濕度 65-75% 維護軟木塞的密封性（太乾燥使木塞收縮—漏氣/太潮濕使木塞發霉）；避光（UV 光加速氧化）和避振動（影響沉澱和口感）是標準要求；FIFO（B）對普通布根地（適飲 3-8 年）尤其重要，老化超過適飲窗口的酒款可能從「資產（Asset）」變成「負債（Liability）」（無法溢價出清）；批次管理（C）是台灣《食安法》要求的食品追溯系統（Traceability System）的核心，需要能快速提供「哪批酒從哪裡來、現在在哪裡」的資訊——在發生召回（Recall）事件時，正確的 Lot Tracking 可以將影響範圍最小化（只下架問題批次，而非整個品項）。'
      },
      {
        type: 'single',
        question: '「航空運輸 vs. 海運（Air vs. Sea Freight）」在葡萄酒物流的決策框架是？',
        options: [
          'A. 精品布根地應全部使用航空運輸',
          'B. 「時效溢價 vs. 成本」的情境分析——航空（Air Freight）：時效 3-5 天（vs. 海運 30-40 天），成本是海運的 8-15 倍，適用於：① 緊急補貨（市場熱銷缺貨）；② 高單價頂尖年份（每瓶 NT$50,000+，運費成本佔比極低）；③ 對特定活動的精準時間要求；海運（Sea Freight）：絕大多數商業葡萄酒進口的標準選擇，成本效益最佳，配合 Reefer 冷藏可完全保障溫控品質；混合策略（Hybrid）：常規訂單海運，特殊需求空運補貨',
          'C. 布根地所有酒款都適合空運，海運品質一律不佳',
          'D. 台灣法規禁止葡萄酒空運進口'
        ],
        correct: 1,
        explanation: '航空 vs. 海運的「成本情境計算（Scenario-Based Cost Analysis）」：以一瓶 CIF NT$20,000 的頂尖 Chambertin 為例：海運成本分攤約 NT$80-120/瓶（Reefer FCL），佔 CIF 的 0.4-0.6%；空運成本約 NT$800-1,200/瓶（同等重量的空運費率），佔 CIF 的 4-6%——即使是高價頂尖布根地，多出的 NT$1,000/瓶空運成本也需要合理商業理由。實際空運使用案例：① 拍賣行（Sotheby\'s 香港）有時空運特定年份稀缺酒款以確保最快到達並完整保全出處記錄；② 頂尖餐廳（米其林二、三星）緊急補充酒單熱銷酒款；③ 品牌形象活動（布根地酒莊派員帶酒直飛亞洲做品鑑活動）——這些特定情境下，空運的時效價值遠超成本差異。'
      },
      {
        type: 'single',
        question: '「第三方物流（3PL, Third-Party Logistics）」在葡萄酒進口業的應用優勢是？',
        options: [
          'A. 所有葡萄酒進口商都應自建物流倉儲，不使用 3PL',
          'B. \'3PL 的「規模效益外包（Scale Economies via Outsourcing）」優勢——專業葡萄酒 3PL（如 Vinosafe Singapore、Octavian UK、台灣本地溫控倉）提供：① 規模化溫控倉儲（個別進口商無法獨立負擔的專業設施）；② 物流管理系統（WMS, Warehouse Management System）的數位追蹤；③ 彈性擴縮（淡旺季庫存波動可彈性調整租用空間）；④ 批次/序號追蹤/保險管理的專業服務；對中小型進口商：3PL 可將「固定成本（Fixed Cost，自建倉）」轉換為「變動成本（Variable Cost，按量計費）」，顯著降低營運資金需求',
          'C. 3PL 無法提供溫控服務，只能存放常溫商品',
          'D. 使用 3PL 意味著失去對庫存的所有控制'
        ],
        correct: 1,
        explanation: '3PL 的「資本效率（Capital Efficiency）」框架：對中小型精品布根地進口商（月進口量 100-500 箱），自建溫控倉的固定成本（租金/設備/人力）需要相當規模才能攤平——使用 3PL 的「按量計費（Pay-per-Use）」模式，在起步期和淡季可以大幅降低資金佔用。台灣3PL 市場現況：台灣有數家提供葡萄酒溫控倉儲的專業 3PL（部分結合保稅倉庫功能），主要集中在桃園（靠近機場）和台北港/基隆港周邊；評估 3PL 優質指標：① 符合 ISO/HACCP 食品安全管理標準的設施；② 提供 24/7 溫濕度監控並可出具紀錄報告（保險和進口商要求）；③ 具備食藥署合規的批次追蹤系統；④ 有葡萄酒業服務經驗（減少不當操作風險）。'
      }
    ]
  },

  // m6-l4：國際酒展策略
  'm6-l4': {
    type: 'quiz', title: '🧠 國際酒展策略知識檢測',
    questions: [
      {
        type: 'single',
        question: '「Vinexpo、ProWein、Vinitaly」這三大國際酒展各自的定位差異是？',
        options: [
          'A. 三者是完全相同定位的替代選項',
          'B. 各有市場定位差異：① Vinexpo（法國波爾多，雙年展）——全球最具歷史影響力的葡萄酒展，近年分拆為 Vinexpo Paris 等，定位「精品精緻酒（Fine Wine）」買賣和頂尖人脈網絡，亞洲版 Vinexpo Hong Kong 是亞洲最重要的精品酒商業展；② ProWein（德國杜塞爾多夫）——目前業界普遍認為是「全球最重要的葡萄酒貿易 B2B 展」，規模最大（2,000+展商）、買家最多元（零售/餐飲/進口商各層次均有），是布根地中小型酒莊拓展國際通路的最重要場合；③ Vinitaly（義大利維羅納）——義大利酒為主，是進入義大利酒採購的最重要管道',
          'C. 所有國際酒展都只服務零售消費者，無 B2B 功能',
          'D. 只有波爾多酒參加國際酒展，布根地不參加'
        ],
        correct: 1,
        explanation: '國際酒展的「定位矩陣（Positioning Matrix）」策略應用：對布根地生產者和進口商而言，酒展選擇是有限預算下（展位費 + 差旅費通常 EUR 30,000-100,000+/展）的重大策略決策。ProWein 的「通路廣度（Distribution Breadth）」優勢：ProWein 2023 吸引超過 55,000 名專業買家（來自 140+ 國），是單一場合接觸最多國際買家的機會；Vinexpo Hong Kong 的「亞洲精品定位（Asia Fine Wine Hub）」使其對想進入亞洲精品市場的布根地生產者具有不可替代的地位；台灣的「台灣國際葡萄酒美食博覽會（Taipei Wine Exhibition）」和「Wine & Gourmet Japan」（日本）對台日市場的精品布根地銷售也有重要作用——選擇符合「目標市場（Target Market）」的酒展是策略性決策，不是越多越好。'
      },
      {
        type: 'single',
        question: '布根地酒莊在國際酒展的「展示策略（Booth Strategy）」最佳實踐是？',
        options: [
          'A. 酒展展示只要帶越多酒款越好',
          'B. 「策略性聚焦（Strategic Focus）」勝於「大量展示（Mass Display）」——有效的布根地酒展策略：① 聚焦核心展示酒款（3-5 款代表不同地塊/村莊等級的精選，而非 30 款讓訪客困惑）；② 預先篩選邀請目標買家（Pre-Selected Targeted Buyer Invitations）——高質量的 30 分鐘深度交流遠比對不特定訪客的短暫對話有效；③ 準備多語言的「地塊故事（Terroir Narrative）」和「技術資料（Technical Sheets）」；④ 展後跟進計劃（Follow-up Plan）——酒展成功的關鍵在於「回家後的即時跟進（Within 48h Follow-up Email）」，而非展會上的第一印象',
          'C. 參加國際酒展只需站在展位等待訪客上門即可',
          'D. 布根地的名聲確保不需要任何展覽策略'
        ],
        correct: 1,
        explanation: '酒展 ROI（投資回報率）最大化的「轉換漏斗（Conversion Funnel）」管理：國際酒展的直接成本（展位費 EUR 5,000-30,000 + 差旅 + 樣品）是一次可觀的投資，ROI 取決於「接觸的目標買家質量（而非數量）」和「展後轉換率（Conversion Rate）」。研究顯示，酒展當場成交的訂單比例相對較低（多數買家需要回家研究再決定），真正的商業成果往往來自「展後 2-4 週內的跟進（Post-Show Follow-up）」——因此，展會前準備好目標買家名單（Pre-Meeting Scheduling）並在展後 48 小時內發送個人化跟進郵件（包含對談記錄和樣品數據）的酒莊，轉換率通常是「被動等待訪客」酒莊的 3-5 倍。PR 的陷阱：很多布根地小型生產者在酒展上過度接觸媒體（記者/KOL），展示時間佔用大量買家溝通時間——除非明確目標是「媒體知名度（Media Awareness）」而非「立即商業轉換（Immediate Commercial Conversion）」，否則媒體和買家的時間分配需要策略平衡。'
      },
      {
        type: 'multiple',
        question: '參加國際酒展的「評估指標（KPIs for Trade Shows）」包括？（多選）',
        options: [
          'A. 機遇性名片/聯絡人收集數量（Contacts Collected）',
          'B. 展後商業轉換率（Post-Show Conversion Rate）——進入正式商談/成功簽約的買家數',
          'C. 媒體曝光（Media Coverage）——被報導次數/評論家品嚐記錄',
          'D. 展位面積大小（Booth Size），越大越代表成功'
        ],
        correct: [0, 1, 2],
        explanation: '酒展 KPI 的「質量 vs. 規模（Quality vs. Scale）」哲學（A/B/C 有效，D 是虛榮指標）：聯絡人收集（A）是最基礎的 KPI，但「質量勝於數量」——100 張名片裡有 10 個真正的目標進口商比 500 張一般訪客名片更有價值；需要後續 CRM 系統管理才能提升利用率；商業轉換率（B）是最終核心 KPI——通常的行業基準：接觸到的目標買家中，進入正式商談比例約 20-30%，最終成交比例約 5-10%，計算每筆成交的「展會獲客成本（Cost per Acquisition, CPA）」是 ROI 評估的精確方法；媒體曝光（C）對「早期知名度建立（Awareness Building）」的酒莊更重要，對已建立通路的成熟酒莊價值較低但仍是品牌維護工具；展位面積（D）是「信號（Signal）」但也是「空洞信號（Empty Signal）」——大展位可能顯示財務實力，但一個小而精緻的展位（配合出色的酒款）可以接觸到同樣質量的買家，面積本身不決定商業成果。'
      },
      {
        type: 'single',
        question: '「逐虛（Virtuous Circle）」的口碑行銷如何在布根地酒展後持續發酵？',
        options: [
          'A. 酒展結束後行銷活動完全停止',
          'B. 「酒展種子（Trade Show Seed）→ 評論家品鑑→ 買家試飲→ 餐廳/零售上架→ 消費者口碑→ 更多媒體報導→ 下次酒展吸引更多買家」的良性循環——成功的酒展不只是「點（Point-in-Time Event）」而是「線（Continuous Narrative Thread）」的起點：酒展樣品送達評論家後的品鑑筆記發布，引發進口商的主動聯繫；進口商在市場推廣時引用評分/媒體報導，使消費者在購買前已建立品質預期；消費者的正面體驗形成口碑並在社群媒體擴散，構成了下一年份的「需求基礎（Demand Foundation）」',
          'C. 布根地的聲譽完全不需要任何後續行銷活動',
          'D. 口碑行銷對精品布根地無效，只有廣告有效'
        ],
        correct: 1,
        explanation: '「良性循環行銷（Virtuous Circle Marketing）」的複利效應：行銷人員使用「品牌動力飛輪（Brand Momentum Flywheel）」描述這種自我強化的傳播機制——每個觸點（酒展/評論/上架/消費者）都為下一個觸點「增加動力（Add Momentum）」。布根地的良性循環特別強大，因為：① 評論家（Burghound/WS）的品鑑報告具有多年的市場影響力（評分不會「過期」，2019 Chambolle 的 Burghound 評分在 2023 年仍有效指導購買）；② 頂尖餐廳酒單的「背書效應（Endorsement Effect）」——米其林餐廳酒單上的布根地酒款被消費者認為是「最值得信賴的選擇（Most Trusted Choice）」；③ 收藏家的社群分享（Instagram 的開瓶照/CellarTracker 的品飲記錄）持續在精品酒社群中傳播，形成了「免費廣告（Free Advertising）」的持續流動。'
      },
      {
        type: 'single',
        question: '「Vinexpo Hong Kong」對布根地亞洲市場開拓的特殊重要性是？',
        options: [
          'A. Vinexpo Hong Kong 只對本地香港買家有意義',
          'B. 「亞太區精品葡萄酒集散地（Asia-Pacific Fine Wine Hub）」功能——由於香港的自由港地位（零關稅）和作為全球精品酒交易中心（Sotheby\'s/Acker 亞洲拍賣場）的地位，Vinexpo Hong Kong 吸引來自大陸/台灣/日本/韓國/東南亞的精品酒買家；對布根地生產者，Vinexpo Hong Kong 是「一次接觸全亞洲精品買家（All Asia Fine Wine Buyers in One Place）」的最佳機會，成本效益遠優於在每個亞洲市場個別參展；此外，香港的亞洲精品酒媒體（South China Morning Post Wine/Asian Palate 等）的正面報導是進入亞洲市場最重要的媒體敲門磚',
          'C. 香港沒有任何葡萄酒市場意義',
          'D. 布根地在 Vinexpo Hong Kong 完全沒有存在感'
        ],
        correct: 1,
        explanation: '香港作為「亞太精品葡萄酒中樞（Asia-Pacific Fine Wine Hub）」的地緣優勢：2008 年取消葡萄酒關稅後，香港葡萄酒進口量在 5 年內增長超過 5 倍，確立了「亞洲精品葡萄酒交易中心」的地位——全球頂尖拍賣行（Sotheby\'s/Acker/Hart Davis Hart）均在香港設有亞洲分部或定期拍賣場，布根地在香港二手市場的成交量在亞洲城市中最高。Vinexpo Hong Kong 的「輻射效益（Radiation Effect）」：香港展的買家構成包含大量來自大中華（大陸/台灣）、日本、韓國、新加坡的採購決策者，單一展場的「受眾輻射半徑（Audience Radius）」超過任何單一亞洲城市——對預算有限的中型布根地酒莊，Vinexpo Hong Kong 是「最高亞洲市場 ROI（Highest Asia Market ROI）」的單一活動選擇，這也是為什麼大多數認真開拓亞洲市場的布根地生產者都在此有長期展示計劃。'
      }
    ]
  },

  // m6-l5：En Primeur期酒交易
  'm6-l5': {
    type: 'quiz', title: '🧠 En Primeur期酒交易知識檢測',
    questions: [
      {
        type: 'single',
        question: '「En Primeur（期酒）」制度的歷史起源和商業邏輯是？',
        options: [
          'A. En Primeur 是 2000 年代互聯網時代才出現的新商業模式',
          'B. 中世紀發展、20 世紀正式制度化——期酒概念起源於英國酒商（Merchant）向波爾多酒莊提前預付購買「桶中葡萄酒（Wine in Barrel）」的傳統，正式化成為「年度體系（Annual System）」約在 1970 年代（與 Robert Parker 評分制度的崛起同步）；商業邏輯：① 對生產者：提前獲得現金流（Cash Flow Advance），降低財務壓力（特別是困難年份）；② 對酒商：提前鎖定稀缺年份庫存，以低於裝瓶後售價取得潛在升值空間；③ 對終端買家：理論上可以以「較低的釋出價格（Release Price）」提前取得熱門年份，並等待裝瓶後升值',
          'C. En Primeur 只存在於布根地，波爾多沒有此制度',
          'D. 期酒制度使生產者永遠損失，對生產者毫無益處'
        ],
        correct: 1,
        explanation: 'En Primeur 的「三方利益結構（Trilateral Interest Structure）」：期酒之所以能成為成功的商業制度，在於它同時滿足了三方的利益需求——生產者（Cash Flow Security）、酒商（Inventory Reservation + Arbitrage Potential）、終端買家（Access to Scarce Vintages + Potential Price Appreciation）。歷史演變的關鍵時刻：1982 年波爾多期酒（Robert Parker 首次給予接近滿分評分）成為現代 En Primeur 制度的「里程碑年份（Milestone Vintage）」——Parker 的「桶邊評分（Barrel Sample Scores）」引發了全球買家的熱情，使 Château Pétrus、Lafite 等首次出現超額訂購（Oversubscription）。布根地的例外：與波爾多的系統化 En Primeur 不同，布根地頂尖酒莊的超額需求使它們根本不需要依賴期酒制度籌資——DRC 在釋出新年份時早已擁有比產量多得多的訂購需求，財務上完全不依賴期酒的「提前現金流（Advance Cash Flow）」優勢。'
      },
      {
        type: 'single',
        question: '波爾多 En Primeur 體系的「三層渠道（Three-Tier Channel）」是？',
        options: [
          'A. 生產者直接販售給終端消費者，無中間商',
          'B. 「酒莊（Château）→ 酒商中間商（Négociant/Courtier）→ 進口商（Importer）→ 終端買家（End Buyer）」的三層（實際上四層）結構——每層收取 margin：酒商（Négociant）在酒莊價格上加 2-5%；進口商在Négociant 價格上加 15-30%；零售商/拍賣行再加 20-40%；最終消費者購買價可能是 En Primeur 酒莊釋出價的 2-3 倍；這個「成本疊加結構（Cost Stacking Structure）」解釋了為什麼二手市場的裝瓶後現貨（Physical Market）通常高於 En Primeur 釋出價的原因之一',
          'C. En Primeur 沒有中間商，完全 D2C 銷售',
          'D. 布根地和波爾多使用相同的三層渠道結構'
        ],
        correct: 1,
        explanation: '波爾多 Négociant 體系（La Place de Bordeaux）的「市場基礎設施（Market Infrastructure）」：波爾多的「Place de Bordeaux」是全球最重要的精品酒 B2B 集散地——約有 400 個 Négociant（酒商）在此運作，充當酒莊和全球進口商之間的「做市商（Market Maker）」，承擔庫存風險並提供市場流動性。與布根地的渠道架構對比：布根地沒有類似的系統化「Place de Bourgogne」中間商體系，頂尖布根地酒莊通常直接與其認可的國際進口商建立長期關係（更扁平的渠道結構，每層加價較少）——這也是為什麼布根地的「酒莊出廠價 vs. 消費者零售價」的倍數通常低於波爾多（頂尖波爾多酒的最終零售可能是 En Primeur 酒莊釋出價的 3-8 倍，而頂尖布根地的渠道倍數通常 2-4 倍）。'
      },
      {
        type: 'multiple',
        question: '評估「是否參與某年份的 En Primeur 購買」的關鍵決策因素包括？（多選）',
        options: [
          'A. 「年份品質（Vintage Quality）」——是否為真正的品質高年份（高分年份的 En Primeur 升值潛力更高）',
          'B. 「釋出價格（Release Price）的合理性」——En Primeur 釋出價是否相對於預期裝瓶後市場價具有足够折扣',
          'C. 「存儲成本（Storage Cost）」——從 En Primeur 到適飲（10-20 年），存儲成本會顯著壓縮實際回報率',
          'D. 只要是大酒莊就值得購買所有年份的 En Primeur'
        ],
        correct: [0, 1, 2],
        explanation: 'En Primeur 的「三維評估框架（Three-Dimensional Evaluation Framework）」（A/B/C 正確，D 過度簡化）：年份品質（A）——2005/2009/2010/2015/2016 波爾多是被廣泛認定的「偉大年份（Great Vintages）」，其 En Primeur 的長期回報顯著優於一般年份；差年份（如 2011/2013）的 En Primeur 購買通常是失策——20 年後的市場對差年份的精品酒需求有限，難以覆蓋存儲成本；釋出價折扣（B）——關鍵問題是「En Primeur 價格是否真的比 5 年後裝瓶現貨便宜？」；2009/2010 波爾多 En Primeur 的超高釋出價使許多買家持有到裝瓶後仍是帳面虧損（定價過高的 En Primeur 是陷阱）；存儲成本（C）——10 年的倉儲費（INT$600-1,000/case/year）、保險、交易費，累積成本可能達到 En Primeur 購買價的 30-50%，必須計入整體 ROI 分析，若年化回報率低於存儲成本+資金成本，En Primeur 投資是負報酬。'
      },
      {
        type: 'single',
        question: '「釋出後價格表現（Post-Release Price Performance）」的歷史統計顯示哪種模式？',
        options: [
          'A. 所有 En Primeur 在裝瓶後一定大幅升值',
          'B. \'「雙峰模式（Bimodal Pattern）」——頂尖酒莊（DRC/Pétrus/五大酒莊）的偉大年份 En Primeur「大概率升值（High Probability Appreciation）」，但普通酒莊/普通年份的 En Primeur「大概率持平或下跌（High Probability Stagnation/Decline）」；研究（Liv-ex 歷史數據）顯示，在考慮存儲成本後，約 60-70% 的 En Primeur 實際回報率為負或僅微正，只有頂尖 15-20% 的組合在長期跑贏通膨+存儲成本',
          'C. En Primeur 系統的回報模式完全不可預測，沒有規律',
          'D. 中等價位的酒莊普通年份是 En Primeur 最好的投資標的'
        ],
        correct: 1,
        explanation: 'En Primeur 的「冪次分布報酬（Power Law Return Distribution）」：金融市場的「冪次法則（Power Law）」告訴我們，在尾部效應（Fat-Tail Effect）存在的市場中，90% 的回報往往來自 10% 的資產——精品酒 En Primeur 市場的實證數據符合這個模式：Liv-ex 的歷史回測（2000-2020）顯示，DRC/Pétrus/Domaine Leflaive 等頂尖品名在偉大年份（2005/2009/2010/2015）的 En Primeur，在 10 年後的年化報酬率（扣除存儲）多為 8-15%；而中等波爾多酒莊的普通年份 En Primeur，10 年後扣除成本的實際回報率中位數在 0% 附近（考慮流動性溢價後為負）。這個模式的啟示是：En Primeur 不是「廣泛分散投資（Diversification）」的工具，而是需要集中押注「頂尖品名 × 偉大年份」的「高度集中投資（Concentration）」才能產生正報酬。'
      },
      {
        type: 'single',
        question: '「掮客（Courtier）」在布根地葡萄酒交易中扮演的傳統角色是？',
        options: [
          'A. Courtier 只在波爾多存在，布根地沒有此職業',
          'B. \'「資訊中間商（Information Intermediary）+ 交易促成者（Deal Facilitator）」——布根地的 Courtier 是溝通「有葡萄/酒款要出售的酒農（Grower）」和「有資金需要葡萄/酒款的 Négociant/購買者」之間的仲介；他們擁有廣泛的地方人脈（了解哪個村莊哪塊地的農戶有好葡萄卻缺乏釀酒設備，或哪個 Négociant 需要特定地塊的葡萄）；收取約 2-3% 的「仲介費（Courtage Fee）」；在現代精品布根地市場，Courtier 的角色雖有所縮減（很多頂尖酒農已直接與 Négociant 有長期合約），但在布根地的傳統交易生態中仍有不可忽視的地位',
          'C. 現代布根地完全不需要 Courtier',
          'D. Courtier 提供免費的仲介服務，不收取任何費用'
        ],
        correct: 1,
        explanation: '布根地 Courtier 的「信息不對稱套利（Information Asymmetry Arbitrage）」角色：在一個由數千個微型農戶和數十個 Négociant 組成的高度碎片化市場中，「誰認識誰（Who Knows Whom）」是關鍵信息資產。Courtier 的核心競爭力——廣泛的個人人脈網絡（Social Capital）：知道哪個老年份農夫有珍貴的老藤（Old Vine）葡萄想出售，知道哪個 Négociant 這年正在擴大某個特定 AOC 的比例，能快速撮合兩者的交易——這是一種「私人信息（Private Information）」的套利，是任何公開市場機制都無法完全取代的人脈資本。現代技術的衝擊：Wine trading platforms（如 Oeno.com、Cavex）試圖「數位化」這個信息中間商功能，但在布根地高度依賴「信任關係（Trust Relationship）」的市場中，純粹的數字平台難以完全取代基於多年人脈積累的傳統 Courtier——人脈資本的轉變（Transition）是緩慢的。'
      }
    ]
  }
}

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
  // M5 後半
  ['master-m5.json', 'm5-l5'],
  ['master-m5.json', 'm5-l6'],
  ['master-m5.json', 'm5-l7'],
  // M6
  ['master-m6.json', 'm6-l1'],
  ['master-m6.json', 'm6-l2'],
  ['master-m6.json', 'm6-l3'],
  ['master-m6.json', 'm6-l4'],
  ['master-m6.json', 'm6-l5'],
]

console.log('=== 布根地 L4 Quiz 注入 — Batch 3b: M5後半 + M6 ===\n')
let ok = 0
for (const [file, lid] of pairs) {
  if (QUIZ_MAP[lid] && injectQuiz(file, lid, QUIZ_MAP[lid])) ok++
}
console.log(`\n完成：${ok}/${pairs.length} 已注入`)
