/**
 * inject-bourgogne-l4-quiz-m3a.mjs
 * 布根地 L4 Quiz 注入 — M3 前半：侍酒師專業技能訓練 m3-l1~l4
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.resolve(__dirname, '..', 'public/bourgogne/data/courses/level4')
const MARKER = '_inject_bourgogne_l4_quiz'

const QUIZ_MAP = {
  // m3-l1：侍酒服務技術與儀式
  'm3-l1': {
    type: 'quiz', title: '🧠 侍酒服務技術知識檢測',
    questions: [
      {
        type: 'single',
        question: '布根地頂級紅酒在餐廳服務時，「醒酒（Decanting）」的主要目的是？',
        options: [
          'A. 只是為了展示給賓客看的儀式，無實際功能',
          'B. 雙重功能：① 氧化接觸（Aeration）——讓封閉的香氣揮發物開始揮發，單寧與氧接觸後軟化，年輕布根地（3-8年）通常可受益；② 分離沉澱（Decanting for Sediment）——老年份布根地（12年+）放置後會形成酒石酸鉀（Tartrate Crystals）和色素沉澱（Pigmented Tannin Deposits），換瓶分離沉澱是老酒服務的標準程序',
          'C. 醒酒只適合波爾多，布根地不需要',
          'D. 醒酒主要是為了降低酒的酒精度'
        ],
        correct: 1,
        explanation: '布根地醒酒的「兩種情境」分離：年輕布根地的醒酒判斷很複雜——部分釀酒師（如 DRC）建議即使頂尖年輕布根地也不應醒酒太長（可能損失精緻香氣），更推薦大號杯「杯中醒酒」；老年份布根地幾乎必須換瓶（沉澱分離），但應儘量快速完成（使用蠟燭燭光輔助觀察沉澱）並立即服務（老酒一旦大量接觸氧氣可能迅速氧化崩潰）。侍酒師的決策核心：「年輕緊閉 = 考慮適度醒酒；老年精緻 = 快速換瓶但減少氧接觸」。'
      },
      {
        type: 'single',
        question: '布根地頂級白酒（如特級園霞多麗）的最佳服務溫度是？',
        options: [
          'A. 4-6°C（接近冰水溫度）',
          'B. 10-13°C——過冷（<8°C）會抑制香氣揮發，使複雜的礦石感和橡木陳年香消失；過熱（>15°C）會使酒精感突出、新鮮感喪失、酸度感知下降。布根地頂尖白酒（Montrachet 等）建議從冰桶取出後靜置 5-8 分鐘再倒入大號白酒杯（Burgundy White Glass），讓其自然回升至最佳溫度',
          'C. 18-20°C（與紅酒相同溫度）',
          'D. 服務溫度對布根地白酒沒有影響'
        ],
        correct: 1,
        explanation: '服務溫度的「香氣門控」原理：溫度決定揮發性有機化合物（VOC）的揮發速率——過低溫度使香氣「鎖定（Locked）」在液體中難以感知；過高溫度使揮發過快而喪失複雜度（高沸點的礦石/土壤化合物可能無法充分釋放）。布根地白酒的最佳感知溫度窗口（10-13°C）是多個感官維度的平衡點：酸度清晰感知（偏低溫）、礦石香氣充分釋放（偏高溫）、橡木奶油感整合（中溫）。實際服務技巧：冰桶 + 計時（通常冰桶冰到瓶的溫度，再回溫幾分鐘），而非「完全不冰」或「完全不回溫」。'
      },
      {
        type: 'multiple',
        question: '在高端餐廳開啟一瓶老年份布根地（20年+）的正確服務程序包括？（多選）',
        options: [
          'A. 提前 1-2 天直立存放，使沉澱沉到瓶底',
          'B. 開瓶時使用蝴蝶開瓶器（Waiter\'s Friend with Foil Cutter），避免震動破壞沉澱層',
          'C. 借助燭光（Candle/Flashlight）在換瓶時觀察沉澱位置',
          'D. 立刻將整瓶酒迅速倒入醒酒器，不必擔心震動'
        ],
        correct: [0, 1, 2],
        explanation: '老年份布根地服務的「沉澱管理三步驟」（A/B/C 正確，D 錯誤）：提前直立（A）——側放存儲的老酒需提前直立讓沉澱受重力沉到瓶底，時間視沉澱量而定（輕沉澱 1 小時即可，重沉澱需過夜）；避免震動（B）——任何震動都會重新懸浮已沉積的顆粒，污染清澈酒液；燭光（C）——傳統侍酒的「瓶頸觀察法」：緩慢傾倒時在瓶頸處背光觀察，第一個沉澱渾濁物出現時立即停止倒酒，可精準保留最多清澈酒液；迅速大量倒入（D）絕對錯誤，這會用動力擾動沉澱、帶入大量氧氣，使老酒迅速氧化。'
      },
      {
        type: 'single',
        question: '「Riedel Burgundy Grand Cru 杯（布根地特大杯）」設計的功能依據是？',
        options: [
          'A. 特大杯型只是裝飾效果，無功能差異',
          'B. 大口徑球形杯設計原理：① 大杯容（>700ml）允許大幅度搖杯而不溢出，增加氧接觸面積；② 寬杯口（Wide Aperture）讓多層香氣同時抵達鼻腔，適合黑皮諾複雜的多層次香氣架構；③ 杯口向內收窄（Narrowing Rim）集中香氣於鼻尖前方；④ 薄杯壁減少體熱傳導，避免手握加溫',
          'C. 所有紅酒應使用相同標準杯型',
          'D. Riedel 杯只是行銷，科學上沒有依據'
        ],
        correct: 1,
        explanation: 'Riedel 功能設計的感官科學背書：布根地杯的球形體積（vs. 波爾多的高直桶型）對應了黑皮諾的「多層次飄逸香氣」需求——黑皮諾的特徵香氣化合物（β-Damascenone 玫瑰酮、Linalool 沉香醇、土壤萜烯）需要較大的「香氣積累空間（Headspace Volume）」才能充分集中到鼻腔；波爾多杯的較窄形狀適合赤霞珠的「集中直接香氣（Focused Aroma Profile）」，但對黑皮諾的飄逸多層次香氣反而會「壓縮」感知。盲品研究（包括 Riedel 自己委託的研究和獨立品飲研究）一致確認：杯型對黑皮諾的感官感知有可量化差異，布根地球形杯在香氣複雜度評分上優於其他杯型。'
      },
      {
        type: 'single',
        question: '客人點了一瓶 1990 年 Gevrey-Chambertin Premier Cru，侍酒師應如何正確展示和服務？',
        options: [
          'A. 直接在餐桌倒酒，不需展示酒標',
          'B. ① 先呈上酒標（Wine Presentation）——右手持瓶展示給點酒人確認品名/年份/生產者；② 點酒人確認後使用侍者之友（Waiter\'s Friend）謹慎開瓶；③ 倒少量酒給點酒人確認（Host Tasting）——先聞後品，確認無問題；④ 按照女士優先/長幼順序（或依點酒人指示）依序沿桌服務；⑤ 點酒人最後再次酌量',
          'C. 不需要讓客人試酒，直接倒滿所有人的杯子',
          'D. 客人試酒後若說喜歡，就重新開另一瓶讓大家比較'
        ],
        correct: 1,
        explanation: '完整侍酒服務流程的「目的性」：每個步驟都有邏輯依據——展示酒標（確認客人收到正確訂單 + 帶出「珍貴品質感知」的體驗設計）；謹慎開瓶（避免震動 = 沉澱管理）；主人試酒（Host Tasting）是「品質確認儀式」而非「客人選酒喜好測試」——客人試酒的判斷標準是「酒是否有缺陷（軟木塞污染/過度氧化）」而非「個人是否喜歡這款酒的風格」，不喜歡風格≠可以退換；服務順序（女士/長幼/主賓）反映了餐飲服務的基本禮儀框架。老年份服務還需考慮換瓶的時機決策（本題中 1990 年應提前評估是否需要換瓶）。'
      }
    ]
  },

  // m3-l2：餐酒搭配原則與實踐
  'm3-l2': {
    type: 'quiz', title: '🧠 餐酒搭配原則知識檢測',
    questions: [
      {
        type: 'single',
        question: '「餐酒搭配（Food and Wine Pairing）」的核心科學原則是？',
        options: [
          'A. 只有「紅酒配紅肉、白酒配魚」一條規則',
          'B. 感官互補與對比（Sensory Complementarity and Contrast）——搭配的目標是食物和酒在風味、質地、強度上達到「1+1>2」的協同效果（Synergy）；核心原則：① 強度匹配（Match Intensity）——精緻菜配精緻酒；② 成分互補（Complement Components）——酸性菜配高酸酒；③ 質地對比（Contrast Texture）——油脂感菜配高酸/單寧酒；④ 地域搭配（Regional Pairing）——當地菜配當地酒往往最和諧',
          'C. 餐酒搭配只是個人偏好，沒有任何客觀規則',
          'D. 高酒精度的酒與任何食物都不搭配'
        ],
        correct: 1,
        explanation: '餐酒搭配的「感官科學框架」：感官研究（Flavor Interaction Studies）確認了幾個可重複的原則：酸度對比（Acidity Contrast）——酸性酒（如Chablis）搭配牡蠣，酸性清潔了油脂/鐵腥感，使兩者都更清爽；單寧-蛋白質結合（Tannin-Protein Binding）——單寧與紅肉中的蛋白質結合後單寧澀感消失，肉感更柔和；甜度-辛辣平衡（Sweet-Spicy Balance）——略帶甜度的酒（如 Gewürztraminer Vendange Tardive）能「滅火」麻辣食物；地域搭配原則的科學基礎是「相似環境造就的化合物親和感」——當地葡萄酒和當地食材在風土上共享的礦物/植物化合物往往有天然親和性。'
      },
      {
        type: 'single',
        question: '布根地頂級黑皮諾搭配「勃根地紅酒燉牛肉（Boeuf Bourguignon）」的搭配原理是？',
        options: [
          'A. 兩者都是法國食品，沒有其他關聯',
          'B. 多維度協同：① 地域搭配（Regional Harmony）——布根地酒 + 布根地食譜，共享風土風味語境；② 風味鏡像（Flavor Mirroring）——燉牛肉的蘑菇/百里香/月桂風味與成熟布根地的「二次/三次香（蘑菇/泥土/森林底層）」形成鏡像共鳴；③ 質地協同——長時燉煮的牛肉膠原蛋白帶出豐厚質地，與頂尖布根地的絲滑單寧在口感上「共同提升（Co-elevation）」；④ 酸度清潔——布根地的高酸度在較油潤的燉肉醬汁中提供清潔感',
          'C. 純屬巧合，布根地酒不適合燉牛肉',
          'D. 勃根地燉牛肉只能搭配波爾多'
        ],
        correct: 1,
        explanation: '地域搭配的「風土鏡像（Terroir Mirroring）」假說：法國各產區傳統菜餚往往與當地葡萄酒在幾百年的共同演化中達到了無意識的感官和諧——布根地人使用當地黑皮諾燉牛肉（Boeuf Bourguignon），食物和酒都因相同風土環境發展出相似的酸/鮮/泥土/蘑菇風味化合物（如 Dimethyl Sulfide 二甲硫，常見於「Earthy/Mushroom」的感官描述，在布根地泥土土壤和蘑菇中共存）。這個「地域搭配」原則（Regional Pairing/Somme Terroir Pairing）在布根地、薄酒萊、阿爾薩斯、隆河等法國產區普遍有效。'
      },
      {
        type: 'multiple',
        question: '布根地白酒（頂級霞多麗）的最佳餐搭類型包括？（多選）',
        options: [
          'A. 奶油醬汁龍蝦（Lobster with Butter Sauce）——奶油酸度協同',
          'B. 白松露燉飯（White Truffle Risotto）——土壤共鳴',
          'C. 油脂豐富的白魚（如 Turbot/比目魚）——帶出礦石感',
          'D. 白布根地最好搭配大塊紅牛排'
        ],
        correct: [0, 1, 2],
        explanation: '頂級布根地白酒的「鏡像搭配三角形」（A/B/C 正確，D 不當）：奶油龍蝦（A）——現代法餐的經典「奶油與白布根地（Butter Sauce Chardonnay）」搭配，基礎是「奶油質地 + 橡木奶油感」的成分鏡像，龍蝦甜味 + 霞多麗的果甜感的平衡，酸度清潔奶油油膩感；白松露燉飯（B）——白松露（White Truffle）的土壤/地下香氣化合物（bis-methylthiomethane 等硫醚類）與頂級白布根地的礦石/泥土/Sous-bois 感形成深層風味共鳴，被許多侍酒師視為「天生的搭配（Born Pairing）」；比目魚（C）——油脂豐厚的扁魚（Flatfish）的脂肪酸（Fatty Acids）在高礦物感霞多麗的高酸環境中被清潔，同時互相強調對方的礦石/海洋鮮味。紅牛排（D）與白酒的「重量/單寧/蛋白質」關係不對稱（牛排需要單寧清潔，白酒沒有單寧），是典型的「強度不匹配（Intensity Mismatch）」。'
      },
      {
        type: 'single',
        question: '為什麼高單寧紅酒搭配海鮮通常是不良配對？',
        options: [
          'A. 只是文化傳統，沒有感官依據',
          'B. 化學反應問題：海鮮（魚貝類）中的 Polyunsaturated Fatty Acids（多不飽和脂肪酸，PUFA）在高單寧的澀感刺激下會誘發「金屬腥味（Metallic/Fishy Finish）」——單寧中的多酚（Polyphenols）氧化催化 PUFA 的氧化反應，產生揮發性醛類（Aliphatic Aldehydes）帶來金屬腥感。輕單寧酒（如布根地黑皮諾）搭配某些海鮮尚可接受，重單寧酒（卡本內蘇維翁）搭配魚類是被感官研究確認的「化學衝突配對」',
          'C. 所有紅酒都可以搭配海鮮',
          'D. 問題只在於顏色（紅色配海鮮不好看）'
        ],
        correct: 1,
        explanation: '「紅酒配魚 = 腥臭（Red Wine with Fish = Fishy）」的化學機制：Gonzalez-Manzano 等研究（2007）確認了該反應的化學路徑——紅酒多酚（單寧 + 花青素）作用為催化劑，在口腔中觸發魚類 PUFA 的脂質氧化（Lipid Oxidation），生成 Aliphatic Aldehydes（己醛 Hexanal 等）和 Polyenylaldehydes，帶來「金屬/鐵鏽/腥臭感（Metallic-Fishy Sensation）」。輕單寧黑皮諾（如 Sancerre Rouge 或輕盈布根地村莊級）搭配鮭魚/鮪魚（富含油脂使衝突降低）尚屬可接受範疇，但高單寧卡本內搭配白身魚幾乎是感官「化學災難」的確認案例。'
      },
      {
        type: 'single',
        question: '「侍酒師在餐廳為客人推薦餐酒搭配」時，最重要的溝通原則是？',
        options: [
          'A. 直接告訴客人哪款酒是唯一正確選擇',
          'B. 以「開放式探索（Open Exploration）」引導：① 先了解菜單選擇（Main Course 和整體菜色方向）；② 詢問飲用偏好（如偏好白/紅、輕/重、何種預算範圍）；③ 根據菜色強度+客人偏好提供 2-3 個選項（而非只有一個）；④ 用簡短感官語言描述每個選項的特徵和搭配優勢——讓客人做最終決定，侍酒師角色是「引導最佳體驗的顧問（Experience Consultant）」而非「強制販售者」',
          'C. 只推薦最貴的酒',
          'D. 不做任何建議，讓客人自己選擇'
        ],
        correct: 1,
        explanation: '侍酒師的「諮詢者角色（Consultant Role）」設計：高端餐飲業的客戶體驗研究（Hospitality Customer Experience Research）一致確認，「被賦予選擇感（Sense of Agency）」的客人對用餐體驗的滿意度和消費意願都更高；侍酒師提供選項（而非唯一答案）和簡短描述的溝通方式，在「展示專業知識的同時不讓客人感到被評判（不懂酒 = 自卑）」——這個「引導式選擇（Guided Choice Architecture）」是高端服務業的基本溝通技巧，在侍酒師實際工作中遠比熟記所有地塊細節更重要。'
      }
    ]
  },

  // m3-l3：酒單建構與葡萄酒選購
  'm3-l3': {
    type: 'quiz', title: '🧠 酒單建構與葡萄酒選購知識檢測',
    questions: [
      {
        type: 'single',
        question: '高端餐廳「酒單建構（Wine List Curation）」的首要商業原則是？',
        options: [
          'A. 盡量收錄最多種類的葡萄酒（越多越好）',
          'B. 「形象（Prestige）+ 商業（Commercial）+ 探索（Discovery）」三角平衡：① 形象酒款（Prestige/Trophy Wines）——如 DRC、Petrus，吸引高端客群、建立餐廳威望，通常低庫存高定價；② 商業主力（Commercial Backbone）——中等價位高周轉率的酒款，佔銷量主體、提供穩定現金流；③ 探索性酒款（Discovery Section）——新興產區、自然酒、性價比高酒款，體現侍酒師品味、吸引葡萄酒愛好者，同時保持酒單的「活力感（Freshness）」',
          'C. 酒單只需要當地酒款',
          'D. 酒單越貴越好，只選最高端的酒款'
        ],
        correct: 1,
        explanation: '酒單的「三層結構商業邏輯」：形象層（Prestige Tier）建立聲望但通常毛利率偏低（大客戶知道市價，要求合理加成）；商業層（Commercial Tier）是實際利潤核心（客人對中等價位酒的市價認知較模糊，加成比例可稍高）；探索層（Discovery Tier）是差異化競爭的關鍵（無法在其他地方輕易找到 = 獨特性 = 吸引回頭客）。一流餐廳的酒單設計（如 Eleven Madison Park、Noma）被認為是「反映餐廳世界觀的藝術品」——酒單的選款邏輯（只選有機/生物動力、只選某一哲學流派）本身就是餐廳品牌身份（Brand Identity）的表達。'
      },
      {
        type: 'single',
        question: '侍酒師採購葡萄酒時「評估酒莊品質和可靠性」的關鍵指標是？',
        options: [
          'A. 只看酒評家給的分數',
          'B. 多維度評估：① 年份一致性（Vintage Consistency）——頂尖酒莊即使在差年份仍能生產品質相對穩定的酒；② 種植和釀造哲學的完整性（Philosophy Integrity）——生物動力/有機認證、低干預理念的一致性；③ 市場行為（Market Behavior）——酒莊是否刻意控制供應維護品質（而非追求最大產量）；④ 次級市場表現（Secondary Market Performance）——老年份的二手市場溢價反映了長期品質的市場共識',
          'C. 只看酒莊的歷史年份',
          'D. 只看酒莊每年的產量'
        ],
        correct: 1,
        explanation: '採購評估的「多維度盡職調查（Due Diligence）」：布根地精品市場的採購複雜性遠高於波爾多——布根地沒有酒莊分級系統（地塊分級但不是酒莊分級），意味著「同一特級園，不同生產者品質可能天差地遠（如 Clos Vougeot 的 83 個莊主）」；侍酒師必須對每個生產者做獨立評估。年份一致性（Vintage Consistency）是最重要的「可靠性」指標——Domaine de la Romanée-Conti 在 1994/2001/2004 等被認為是「差年份」的年份依然生產了業界公認有品質的酒，是頂尖莊園可靠性的最高標準；次級市場溢價則提供了「時間維度的市場共識信號（Market Time-Stamp）」。'
      },
      {
        type: 'multiple',
        question: '建構「布根地主題」酒單時，應包含哪些多樣性維度？（多選）',
        options: [
          'A. 等級多樣性：從 Bourgogne Régionale 到 Grand Cru，涵蓋不同預算層次',
          'B. 風格多樣性：北部 Chablis（礦石/鋼鐵感）vs. 夜丘（豐滿紅果）vs. 伯恩丘（優雅紅果）vs. 南部薄酒萊',
          'C. 年份多樣性：同一酒款的不同年份（垂直組合）讓客人探索氣候影響',
          'D. 所有酒款必須同一生產者'
        ],
        correct: [0, 1, 2],
        explanation: '布根地酒單多樣性的三個設計維度（A/B/C 正確，D 限制性假設）：等級多樣性（A）——讓不同預算的客人都能參與布根地體驗，入門 Regional 酒（Bourgogne AOC）作為「進入布根地世界的門票」；風格多樣性（B）——布根地的地理跨度（從 Chablis 到 Mâcon 長達 200km）提供了從鋼鐵礦石到絲絨水果的完整感官光譜；年份多樣性（C）——「垂直陳列（Vertical Display）」是教育性最強的酒單設計，讓客人在同一莊園的不同年份中感知氣候變化對葡萄酒的影響（對葡萄酒好奇的客人最愛此類選擇）。D（限制單一生產者）是錯誤的多樣性方向，一個完整布根地酒單應涵蓋 Domaine（莊主裝瓶）和 Négociant（酒商裝瓶）的不同採購哲學。'
      },
      {
        type: 'single',
        question: '「葡萄酒庫存管理（Wine Inventory Management）」在餐廳中的關鍵挑戰是？',
        options: [
          'A. 只需要訂足夠多的酒就沒問題',
          'B. 「存儲成本 vs. 陳年收益（Storage Cost vs. Aging Premium Trade-off）」的持續平衡：① 老年份陳年布根地的服務體驗和溢價能力遠高於年輕酒，但需要佔用庫存空間和資金（機會成本）數年；② 過度採購導致流動性問題（現金流佔用）；③ 預測哪些酒款「值得陳年投資」需要高水準的年份預測和品質判斷能力；④ 最佳策略通常是「分批採購（Staggered Purchasing）」——同一款酒多個年份分批入庫',
          'C. 所有酒都應盡快賣出',
          'D. 餐廳庫存管理和零售業沒有任何差別'
        ],
        correct: 1,
        explanation: '餐廳葡萄酒庫存的「時間金融」概念：布根地精品酒的「陳年溢價（Aging Premium）」是業界公認的——購入 5 年後提供的頂尖布根地，其體驗品質和可收費價格都遠高於即時服務。但這個「陳年策略」需要：① 資金耐心（現金被鎖定在庫存中 3-10 年）；② 存儲設施投資（恆溫恆濕酒窖成本）；③ 預測能力（正確識別哪個年份/酒莊值得陳年）。Noma、Eleven Madison Park 等世界頂尖餐廳的酒單「老年份密度（Vintage Depth）」是其服務差異化的核心資產之一——這個資產的建立需要帶帶積累，無法短期複製，形成了商業護城河（Business Moat）。'
      },
      {
        type: 'single',
        question: '「以杯計酒（Wines by the Glass）」在餐廳酒單中的商業和體驗邏輯是？',
        options: [
          'A. 提供杯裝酒只是因為客人喝不完整瓶',
          'B. 雙重價值：① 商業角度——杯裝酒毛利率通常是整瓶酒的 2-3 倍（1 瓶酒 5 杯 = 每杯 1/5 瓶成本，按每杯 40-60% 售出即可回收整瓶投資，其餘全為利潤）；② 體驗角度——允許獨飲的客人（或不同人點不同菜的餐桌）獲得餐酒搭配體驗，同時讓客人在不購整瓶的情況下「試探」新品種/產區，是酒單的「體驗入口門票」；頂尖餐廳的杯裝酒選款本身是展示侍酒師品味的重要展示窗口',
          'C. 杯裝酒品質永遠比整瓶酒低',
          'D. 提供杯裝酒對餐廳沒有任何商業價值'
        ],
        correct: 1,
        explanation: '「杯裝酒數學（By-the-Glass Math）」的商業可行性：標準 750ml 瓶裝酒可倒出 5 個 150ml 標準份，或 6 個 125ml（英式標準）。若整瓶採購成本為 50 元，每杯定價 25 元，則 5 杯收入 = 125 元（毛利率 60%），而整瓶定價可能 150 元（毛利率 67%）——但杯裝的「單次消費門檻（Entry Threshold）」更低，帶來更多嘗試性購買（Trial Purchase）。對高端布根地的「杯裝挑戰」：開瓶後 24 小時內品質保持，超過後氧化降質，需快速售罄（因此不應提供銷售速度慢的老年份布根地作為杯裝酒）。Coravin 技術（氬氣保護抽取系統）可解決「開瓶後品質維護」問題，使頂端老年份也可提供杯裝服務。'
      }
    ]
  },

  // m3-l4：品酒術語與專業描述
  'm3-l4': {
    type: 'quiz', title: '🧠 品酒術語與專業描述知識檢測',
    questions: [
      {
        type: 'single',
        question: '「WSET 系統性品酒法（SAT，Systematic Approach to Tasting）」的評估順序是？',
        options: [
          'A. 先嘗味道，再看顏色，最後聞香氣',
          'B. 外觀（Appearance）→ 鼻腔（Nose）→ 口腔（Palate）→ 結論（Conclusions）；每個階段包含標準化的評估維度（如外觀：清澈度/顏色深度/顏色/其他觀察；鼻腔：乾淨/香氣濃度/香氣特徵；口腔：甜度/酸度/單寧/酒精/酒體/風味濃度/風味特徵/收尾長度）；系統性框架使品酒描述可重複、可比較，是職業品酒師的標準工作語言',
          'C. 只需描述是否喜歡這款酒',
          'D. 先評估價格，再描述感官'
        ],
        correct: 1,
        explanation: 'SAT 框架的「認知錨定（Cognitive Anchoring）」設計：先「看」再「聞」再「嘗」的順序有神經認知依據——視覺資訊（顏色/清澈度）啟動了嗅覺期待（Olfactory Priming），使隨後的香氣感知更精準；口感評估在視覺+嗅覺已建立框架後進行，能更精確地識別「口腔香氣（Retro-nasal Aroma）」的細節。SAT 的「標準化語彙」價值：使全球葡萄酒專業人士能以相同語言溝通；WSET 的 SAT 和 CMS（Court of Master Sommeliers）的 GSA（Grid for Systematic Analysis）是目前最廣泛使用的兩套標準框架，在邏輯上高度一致，只在術語表達上有部分差異。'
      },
      {
        type: 'single',
        question: '品酒術語中「礦石感（Minerality）」的正確理解是？',
        options: [
          'A. 礦石感確認是葡萄酒中含有可嚐到的礦物質成分',
          'B. 礦石感是一個「感官描述詞（Sensory Descriptor）」而非化學成分確認——感官研究確認葡萄酒中並不存在可直接嘗到的礦物質，「礦石感」的感知可能來自：① 高揮發性酸（如醋酸乙酯低濃度下的「鋼鐵感」）；② 還原性化合物（Reduced Sulfur Compounds，如 DMS 二甲硫化物在低濃度時的礦石感）；③ 高酸度本身的「石灰感」；④ 特定萜烯（Terpenes）的「石頭/矽酸鹽感」——重要的是：「礦石感」是有效的感官溝通詞彙，即使其化學機制仍未完全解明',
          'C. 礦石感只存在於布根地葡萄酒',
          'D. 礦石感是一種缺陷'
        ],
        correct: 1,
        explanation: '「礦石感」的科學與實踐二重性：Maltman（2013）等地質學家的研究確認了「葡萄酒中找不到可品嚐濃度的礦物質，土壤礦物不能直接轉移到葡萄酒風味」——這個科學發現顛覆了傳統的「土壤礦物直接影響論（Direct Mineral Transfer Hypothesis）」。但從感官溝通角度，「礦石感（Minerality）」仍是業界使用最廣泛的描述詞之一，其感知的多種化學成因（還原性硫化物、特定萜烯、酸度感知等）解釋了為什麼某些產區的酒普遍被感知為「有礦石感」。職業侍酒師應理解：使用「礦石感」是有效的感官溝通，使用它描述「土壤礦物質直接滲入」則是科學上不準確的。'
      },
      {
        type: 'multiple',
        question: '描述布根地頂級黑皮諾的「口感（Palate）」時，下列哪些術語使用正確？（多選）',
        options: [
          'A. 「天鵝絨般的單寧（Velvety Tannins）」——描述細緻、絲滑、無澀感的單寧質地',
          'B. 「活潑的酸度（Vibrant Acidity）」——描述清脆、清新、有活力感的酸度（相對於「尖銳（Sharp）」或「平板（Flat）」）',
          'C. 「長尾收尾（Persistent/Long Finish）」——描述吞咽後香氣在口中持續 30 秒以上',
          'D. 「甜如蜂蜜（Sweet as Honey）」——描述頂尖布根地紅酒的甜度'
        ],
        correct: [0, 1, 2],
        explanation: '正確術語使用（A/B/C 正確，D 用詞不當）：天鵝絨單寧（A）是業界標準術語，對應 WSET 的「絲滑（Silky）」或「圓潤（Round）」單寧描述；活潑酸度（B）對應 WSET 的「Fresh/Crisp」酸度描述，比「尖銳酸（Sharp）」更中性正面；長收尾（C）是頂尖黑皮諾品質評估的核心指標，WSET 以「Short/Medium/Long/Very Long」量化；蜂蜜甜感（D）是描述甜型白酒（Sauternes/Beerenauslese）的術語，不適用於干型頂尖黑皮諾——布根地頂尖紅酒是「干型（Dry，殘留糖分 <4g/L）」，不應描述為「甜如蜂蜜」（雖然成熟果甜感可以說「帶成熟果蜜感」，但不等同於實際甜度）。'
      },
      {
        type: 'single',
        question: '「葡萄酒缺陷（Wine Faults）」中，「軟木塞污染（Cork Taint/TCA）」的感官識別特徵是？',
        options: [
          'A. 軟木塞污染使葡萄酒顏色變深',
          'B. TCA（2,4,6-三氯苯甲醚，Trichloroanisole）以及相關的氯苯甲醚類化合物（Chloroanisoles）帶來「濕紙板/霉臭（Musty/Damp Cardboard）」氣味，同時壓制其他香氣（嗅覺遮罩效應，Olfactory Masking），使原本複雜的香氣「消音（Truncated）」——輕度 TCA 污染最難識別（香氣被壓制但無明顯霉味），重度污染則有明顯的「陳年地下室/濕狗（Wet Dog）」氣味',
          'C. 軟木塞污染使葡萄酒甜度增加',
          'D. 軟木塞污染只影響口感，不影響香氣'
        ],
        correct: 1,
        explanation: 'TCA 的「嗅覺遮罩（Olfactory Masking）」效應是其最難被識別的症狀：TCA 的嗅覺閾值極低（約 2-5 ng/L，即每公升幾十億分之幾克）；輕度污染時，酒的香氣不是「變臭」而是「消失」——一款本應有豐富果香和礦石感的老布根地呈現出「平板（Flat）、無趣（Dull）」的狀態，讓品飲者懷疑是個人嗅覺問題而非酒的問題；重度污染才有明顯的「濕狗/報紙/霉 Cheese 」氣味。侍酒師服務時若主人試酒（Host Tasting）時表示「香氣似乎很少/很平」，這往往是輕度 TCA 的信號，需要及時識別並建議換瓶。'
      },
      {
        type: 'single',
        question: '如何用「感官語言」向普通客人（非葡萄酒專業人士）介紹一款頂尖布根地黑皮諾？',
        options: [
          'A. 使用最多的技術術語，顯示自己的專業深度',
          'B. 翻譯成「可識別的感官圖像（Recognizable Sensory Images）」：如「這款酒有新鮮草莓和乾燥玫瑰花的香氣，口感像絲綢一樣柔順，最後帶著一點大地和蘑菇的氣息，越聞越有細節」——避免術語壁壘，用普通人已有的感官記憶（草莓/玫瑰/絲綢）作為橋樑，同時保留真實的感官描述',
          'C. 只說「這是很貴的酒，品質非常好」',
          'D. 告訴客人他們的味覺不夠成熟，需要學習才能欣賞'
        ],
        correct: 1,
        explanation: '「感官翻譯（Sensory Translation）」的溝通技巧：葡萄酒術語系統（TCA/Terroir/Polyphenols/Retro-nasal）對非專業人士是「外語」——其功能是精確的同行溝通，而非客人服務語言。最佳侍酒師的溝通藝術在於「雙語能力」：能在技術層面（與採購/生產者溝通）和普通語言（客人溝通）之間自如切換。「絲綢般柔順」比「天鵝絨單寧」更直接可感；「陳年大地氣息」比「三次香土壤萜烯」更有畫面感；精確性讓位於共鳴性（Resonance over Precision），是服務場景的溝通第一原則。'
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
  ['master-m3.json', 'm3-l1'],
  ['master-m3.json', 'm3-l2'],
  ['master-m3.json', 'm3-l3'],
  ['master-m3.json', 'm3-l4'],
]

console.log('=== 布根地 L4 Quiz 注入 — M3 前半：侍酒師專業技能訓練 ===\n')
let ok = 0
for (const [file, lid] of pairs) {
  if (QUIZ_MAP[lid] && injectQuiz(file, lid, QUIZ_MAP[lid])) ok++
}
console.log(`\n完成：${ok}/${pairs.length} 已注入`)
