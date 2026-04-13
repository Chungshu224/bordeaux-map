/**
 * inject-bourgogne-l3-quiz-m5.mjs
 * 布根地 L3 Quiz 注入 — M5：釀造技術（6 lessons）
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.resolve(__dirname, '..', 'public/bourgogne/data/courses/level3')
const MARKER = '_inject_bourgogne_l3_quiz'

const QUIZ_MAP = {
  'm5-l1': {
    type: 'quiz', title: '🧠 整串發酵知識檢測',
    questions: [
      {
        type: 'single',
        question: '「整串發酵（Whole Cluster Fermentation）」中，葡萄梗對發酵的最主要化學貢獻是？',
        options: ['A. 增加更多糖分', 'B. 梗中的鉀離子提高酒液 pH 值，同時半纖維素釋放香辛料化合物（丁香酚、肉桂醛），形成特有的辛香複雜性', 'C. 只增加單寧而不影響香氣', 'D. 梗的主要作用是物理疏鬆果粒'],
        correct: 1,
        explanation: '整串發酵的化學機制：葡萄梗含有豐富的鉀（K⁺），發酵時鉀析出使酒液 pH 升高（酸度略降），同時梗的半纖維素在發酵環境中分解，釋放丁香酚（Eugenol）、肉桂醛等香辛料化合物；碳酸浸漬效應（未破碎果粒的胞內發酵）則增加草莓/覆盆子等新鮮果味——這三者共同構成整串發酵的獨特風格簽名。'
      },
      {
        type: 'single',
        question: '使用高比例整串發酵時，釀酒師最需要謹慎的技術風險是？',
        options: ['A. 發酵速度太快', 'B. 梗中的青酚（Green Stem Characters）——若梗未充分木質化成熟（Lignification），殘留的葉綠素和未成熟化合物帶來生青/植物性澀感', 'C. 整串發酵會使酒變甜', 'D. 梗會導致酒精大量蒸發'],
        correct: 1,
        explanation: '「梗熟」是整串決策的靈魂：只有梗完全木質化（褐色、無青氣、嚼有香料感而非青草味）的年份才適合高整串比例；未成熟的青梗帶來吡嗪（Pyrazines）類青椒/草本風味，破壞 Pinot Noir 的細膩。這也是為何同樣採用整串的莊主，在涼爽年份仍可能降低整串比例。'
      },
      {
        type: 'multiple',
        question: '在布根地盲品中，高整串比例通常帶來哪些可辨識特徵？（多選）',
        options: ['A. 中段呈現香辛料（肉桂、丁香、白胡椒）的複雜香氣', 'B. 相較全去梗酒款，顏色通常更淡（碳酸浸漬效應提取色素較少）', 'C. 酒精感更重', 'D. 單寧質地偏乾澀但有緊緻骨感（梗單寧的特性）'],
        correct: [0, 1, 3],
        explanation: '整串盲品辨識組合：1) 香辛料複雜性（丁香/煙草/鉛筆芯）；2) 顏色偏淡（胞內發酵色素提取效率低）；3) 特定的「梗單寧」——乾澀但不粗糙，帶緊緻線條感。高整串比例不降低酒精（酒精來自果粒糖分），反而有可能通過增添酸感而降低酒精感知度。'
      },
      {
        type: 'single',
        question: '「碳酸浸漬（Carbonic Maceration）」和「部分碳酸浸漬（Semi-Carbonic Maceration）」在整串發酵中的差異是？',
        options: ['A. 兩者完全相同', 'B. 純碳酸浸漬：密封容器充入 CO₂，100% 胞內發酵；部分碳酸（布根地整串常用）：底部果粒被壓破後開始傳統發酵，上層完整果粒同時進行胞內碳酸浸漬——兩種發酵同時進行', 'C. 碳酸浸漬只用於博若萊', 'D. 布根地不允許碳酸浸漬'],
        correct: 1,
        explanation: '布根地整串發酵的實際機制：進桶時不充 CO₂，底部果粒被自重壓破，傳統酵母發酵啟動產生 CO₂；CO₂ 累積後上層整粒果串進入「胞內發酵（Intracellular Fermentation）」——酒精在細胞內部直接形成，提取特殊的果酯。最終是兩种機制共存的「部分碳酸浸漬（Semi-Carbonic）」效果。'
      },
      {
        type: 'single',
        question: '頂尖布根地酒莊決定當年整串比例的最主要依據是？',
        options: ['A. 莊主的個人喜好，每年固定', 'B. 梗的成熟程度（木質化程度）+ 年份特性（需要額外酸度骨架 vs. 足夠自然結構），每年彈性評估', 'C. 市場流行趨勢', 'D. 整串比例只取決於橡木桶數量'],
        correct: 1,
        explanation: '頂尖莊主（Jeremy Seysses/Dujac、Thibault Liger-Belair 等）決策框架：年份偏熱低酸 → 梗的酸緩衝效果有助補充結構 → 提高整串比例；涼爽年份梗未充分木質化 → 整串風險高 → 降低比例甚至全去梗。這種「年份響應式」決策是現代布根地精品釀造的核心柔性，而非固定公式。'
      }
    ]
  },

  'm5-l2': {
    type: 'quiz', title: '🧠 橡木桶陳年藝術知識檢測',
    questions: [
      {
        type: 'single',
        question: '「緊紋橡木（Tight Grain Oak）」和「寬紋橡木（Wide Grain Oak）」對布根地的影響差異是？',
        options: ['A. 只影響外觀，Wine 完全相同', 'B. 緊紋（慢生長木材，年輪密集）釋放香蘭素和丹寧更慢、更細膩，布根地頂尖莊主偏好緊紋 Allier/Vosges 橡木；寬紋（快生長）釋放更快更強烈', 'C. 寬紋橡木更貴', 'D. 緊紋橡木只用於白酒'],
        correct: 1,
        explanation: '橡木紋路=生長速率的記錄：緊紋（Tight Grain，每厘米 8+ 年輪）的橡木多酚和香蘭素釋放慢且柔和，是中庸度的典範，不掩蓋 Pinot Noir 的細膩；寬紋（每厘米 4-5 年輪以下）可能在前 6 個月桶陳期有過強的木桶干預。Allier、Vosges、Tronçais 森林的橡木因慢生長而受頂尖布根地莊主青睞。'
      },
      {
        type: 'single',
        question: '布根地新橡木桶「烘烤程度（Toast Level）」如何影響白酒風格？',
        options: ['A. 烘烤程度只影響顏色', 'B. 輕烤（Light Toast）保留更多木材原始結構，賦予爽脆的木質礦物感；中烤（Medium Toast）平衡香草/焦糖和礦物；重烤/Plus（Heavy Toast+）產生更多胺基甲酸酯和熏烤香，不適合追求礦物感的頂尖白酒', 'C. 所有布根地白酒都用中烤', 'D. 烘烤程度對白酒完全沒有影響'],
        correct: 1,
        explanation: '烘烤程度的化學：木桶在製桶廠通過明火烘烤時，木材表面發生美拉德反應和焦糖化——輕烤 → 木材原有多酚和酚酸為主（礦物/木質感）；中烤 → 香草醛（Vanillin）和丁香酚均衡釋放；重烤 → 糠醛（Furfural）和苯酚化合物增多（咖啡/燻烤）。追求礦物精緻感的 Meursault/Montrachet 通常偏好輕至中烤。'
      },
      {
        type: 'multiple',
        question: '降低新桶比例（趨向 0-20%）的布根地現代趨勢，主要原因包括？（多選）',
        options: ['A. 暖化使果味更豐厚，不需要木桶額外增添圓潤感', 'B. 對礦物純淨風格的追求——橡木桶影響被認為掩蓋地塊特徵', 'C. 新桶成本過高', 'D. 研究發現舊桶陳年有助於更好的微氧化氧化還原管理'],
        correct: [0, 1, 3],
        explanation: '低新桶趨勢的三重邏輯：1) 暖化年份果味已足夠豐厚，不需木桶「加料」圓潤；2) 礦物純淨主義——最細膩的地塊礦物感容易被新桶掩蓋（「讓地塊說話」）；3) 釀造科學進展——舊桶（2-3 年老桶）的微氧化效率更可預測，避免新桶前 3 個月的「木桶衝擊期」。成本固然是考量，但不是主要動機（頂級莊主負擔得起新桶）。'
      },
      {
        type: 'single',
        question: '「橡木桶大小（桶型）」如何影響陳年效果？布根地傳統 228L 標準桶和 500L 大桶的差異？',
        options: ['A. 桶型只影響儲存空間', 'B. 228L 小桶（Pièce Bourguignonne）的木材/酒液比更高，氧化和木材影響更強；500L 大桶（Demi-Muid）木材影響更緩、氧化更微弱，常被追求礦物純淨度的莊主用來降低橡木感', 'C. 大桶更貴，所以品質更高', 'D. 桶型對布根地沒有影響'],
        correct: 1,
        explanation: '桶型物理學：木材/酒液接觸面積比（Surface-to-Volume Ratio）決定影響強度——228L 標準桶比約 21 cm²/L，500L 大桶約 13 cm²/L，600L 更低。追求低木桶干預的莊主（如 Dujac、某些 Leroy 酒款）引入 500-600L 大桶，既保留適當微氧化，又大幅降低木材單寧和香草醛的提取量，讓發酵過程中形成的果味和礦物感更清晰表達。'
      },
      {
        type: 'single',
        question: '布根地頂尖白酒「帶酒泥桶陳（Sur Lie with Barrel Aging）」的技術背後邏輯是？',
        options: ['A. 酒泥使酒更濁，品質更高', 'B. 死酵母細胞（Lees）分解釋放的甘露蛋白和脂肪酸能增加口感豐腴、穩定氧化還原電位，結合桶陳的微氧化，形成白酒的質地複雜性', 'C. Sur Lie 只用於香檳法', 'D. 帶酒泥陳年只影響顏色'],
        correct: 1,
        explanation: 'Sur Lie（帶酒泥）的科學正當性：死酵母細胞的胞溶（Autolysis）分解釋放：1) 甘露蛋白（Mannoproteins）→ 增加口感豐腴度和持久感；2) 多糖（Polysaccharides）→ 柔和酸度尖銳感，增加圓潤；3) 還原性辛酸乙酯等物質 → 穩定還原電位，延遲氧化。頂尖 Meursault 和 Puligny 的「奶油礦物質感」正是此技術的直接成果。'
      }
    ]
  },

  'm5-l3': {
    type: 'quiz', title: '🧠 酒泥管理與攪桶知識檢測',
    questions: [
      {
        type: 'single',
        question: '「攪桶（Bâtonnage）」的操作原理和目的是？',
        options: ['A. 澄清酒液，去除酒泥', 'B. 定期用棒子攪動沉積在桶底的酒泥，使其重新懸浮於酒液中，延長酒泥接觸時間，最大化甘露蛋白和多糖的釋放', 'C. 攪桶只用於紅酒', 'D. 攪桶的目的是強化橡木桶影響'],
        correct: 1,
        explanation: '攪桶（Bâtonnage）字面來自法語「棒子（Bâton）」：傳統用木棒攪動，現代有自動攪桶裝置。核心邏輯：酒泥沉積 → 攪動懸浮 → 延長酒泥-酒液接觸 → 更多甘露蛋白和多糖釋放 → 更豐腴圓潤的口感。但過度攪桶也有風險（酒泥中的酯酶分解香氣成分），頂尖莊主通常逐漸降低攪桶頻率（發酵後每週一次 → 每月一次 → 最後幾個月不攪）。'
      },
      {
        type: 'single',
        question: '「粗酒泥（Gross Lees）」和「細酒泥（Fine Lees）」的區別及管理差異是？',
        options: ['A. 兩者完全相同，可以一起管理', 'B. 粗酒泥（未發酵的果皮碎片、種子等）應在發酵後盡快分離，因其分解產生異味；細酒泥（死酵母細胞）是 Sur Lie 的主角，應保留與酒接觸陳年', 'C. 細酒泥比粗酒泥危險', 'D. 所有酒泥都應立即去除'],
        correct: 1,
        explanation: '酒泥管理的兩段式策略：第一段（發酵後 1-2 週）是「粗酒泥分離」——換桶（Racking）去除大顆粒的果皮碎屑、種子和雜質，這些有機物快速腐敗會產生 H₂S 和其他異味；第二段是「細酒泥保留」——死酵母細胞保留與酒液接觸 6-18 個月，進行 Sur Lie 陳年。精確區分這兩種酒泥是精品布根地白酒釀造的基本功。'
      },
      {
        type: 'multiple',
        question: '「不攪桶（No Bâtonnage）」的採用者提出的理由包括？（多選）',
        options: ['A. 讓沉積的細酒泥自然形成還原性保護層，維持更好的氧化還原電位', 'B. 減少酒泥中的酯酶釋放，保護精細的芳香化合物', 'C. 不攪桶使酒體變薄，更顯礦物感', 'D. 避免每次攪桶引入的少量氧化，對追求還原礦物感的風格尤為重要'],
        correct: [0, 1, 3],
        explanation: '不攪桶哲學（DRC 和部分頂尖莊主採用）的理性：沉積酒泥形成的天然還原層是最佳的「無干預氧化保護」；酯酶（酒泥中含有的脂肪酸酯酶）在攪動時可能釋出並分解精緻香氣（酯類）；每次攪桶的少量充氧會輕微改變還原電位。不攪桶確實可以讓礦物感更清晰，但也可能使酒體偏緊——是風格選擇，非厚薄之分。'
      },
      {
        type: 'single',
        question: '「酒泥保護（Lees Protection）」在白酒陳年中如何影響礦物感的表達？',
        options: ['A. 酒泥保護與礦物感無關', 'B. 酒泥的還原性環境保護了含硫化合物（如 Thiols）不被氧化——這些化合物被認為是「打火石/礦物」香氣的重要來源', 'C. 酒泥使礦物感消失', 'D. 只有紅酒才需要酒泥保護'],
        correct: 1,
        explanation: '礦物感-酒泥科學連結：最新研究（2020s）發現多種含硫揮發性化合物（特別是 Dimethyl Sulfide 和各種 Thiols）與品飲師描述的「石頭/打火石/礦物」感高度相關。這些化合物在還原環境（低 O₂）中穩定存在，一旦氧化即分解。酒泥創造的天然還原層正是保護這些化合物的「礦物感守門員」——解釋了為何 Sur Lie 陳年的白酒礦物感更強。'
      },
      {
        type: 'single',
        question: '「換桶（Racking/Soutirage）」的時機和目的在精品布根地中的考量是？',
        options: ['A. 越多換桶越好', 'B. 換桶次數最少化——每次換桶引入氧化並移除部分保護性酒泥；頂尖莊主在整個桶陳期間可能只換桶 1-2 次，以維持足夠的還原環境和酒泥保護', 'C. 每個月必須換桶一次', 'D. 換桶只能在滿月時進行'],
        correct: 1,
        explanation: '「低換桶（Low Racking）」哲學是現代精品布根地的趨勢：傳統上換桶是為了充氧穩定和去除沉積，但現代釀酒師了解到每次換桶都是「犧牲一部分酒泥保護和引入氧化風險」的取捨。DRC、Leroy 等頂尖莊主傾向最少次換桶（有時整個桶陳期只換一次），最大程度保留還原性保護環境——這也是這些酒款擁有強烈礦物感的技術基礎之一。'
      }
    ]
  },

  'm5-l4': {
    type: 'quiz', title: '🧠 乳酸發酵管理知識檢測',
    questions: [
      {
        type: 'single',
        question: '「蘋果乳酸發酵（Malolactic Fermentation, MLF）」的核心化學變化是？',
        options: ['A. 酒精繼續轉化為更多乙醇', 'B. 酒石酸（Tartaric Acid）轉化為乳酸', 'C. 銳利的蘋果酸（Malic Acid, 二元酸）轉化為柔和的乳酸（Lactic Acid, 一元酸），使pH升高（酸感降低），並副產 CO₂ 和奶油味的二乙醯（Diacetyl）', 'D. 糖分完全轉化為乳酸'],
        correct: 2,
        explanation: 'MLF 方程式：L-蘋果酸（Malic Acid）+ 乳酸菌（LAB）→ L-乳酸（Lactic Acid）+ CO₂。核心效應：1) 酸度降低（蘋果酸二元 → 乳酸一元）；2) pH 升高約 0.1-0.3；3) 產生奶油感二乙醯（Diacetyl）——這正是布根地 Chardonnay 特有「奶油/黃油質」的主要成因；4) 減少微生物不穩定風險（蘋果酸被消耗，減少有害微生物底物）。'
      },
      {
        type: 'single',
        question: '為什麼部分布根地莊主選擇「阻止 MLF（Blocking MLF）」？',
        options: ['A. MLF 使酒顏色變淡', 'B. 阻止 MLF 保留更多蘋果酸，維持更高的天然酸度和礦物張力感——在暖化時代酸度不足的年份，保留部分蘋果酸成為恢復平衡的工具', 'C. MLF 容易引起過敏反應', 'D. 阻止 MLF 可以增加酒精度'],
        correct: 1,
        explanation: '阻止 MLF（通過低溫、SO₂、過濾抑制乳酸菌）的現代邏輯：蘋果酸的尖銳酸感在涼爽氣候是「問題」，但在暖化時代的高熟度年份卻可能是「珍貴的酸度來源」。Chablis 部分莊主在特別暖的年份（如 2018、2020）選擇保留 20-50% 的蘋果酸以維持礦物張力——這是氣候適應策略在MLF管理層面的直接體現。'
      },
      {
        type: 'multiple',
        question: '布根地 Chardonnay 完整 MLF 後的典型風格變化包括？（多選）',
        options: ['A. 從「蘋果/檸檬」向「奶油/榛果/焦糖黃油」轉移', 'B. 口感從尖銳輕盈變為圓潤豐厚', 'C. 顏色從白色變為金黃色', 'D. 「打上升白酒潛力」——MLF 後的白酒更能承受桶陳而不被橡木掩蓋'],
        correct: [0, 1],
        explanation: 'MLF 對 Chardonnay 的風格重塑：A（正確）——蘋果酸 → 乳酸 + 二乙醯副產品，直接帶來「奶油/焦糖」感，是伯恩丘白酒的核心風格基礎；B（正確）——酸度軟化使口感轉圓潤豐厚，提高質地复雜性。顏色主要受橡木影響，與 MLF 無直接關係；C為否；「白酒潛力」不是 MLF 的標準科學描述（D為干擾項）。'
      },
      {
        type: 'single',
        question: '「乳酸菌接種（Inoculated MLF）」vs.「自然 MLF（Spontaneous MLF）」的主要差異是？',
        options: ['A. 兩者完全相同，沒有差異', 'B. 接種：使用商業酒酒球菌（Oenococcus oeni）菌株快速、可預測地完成 MLF；自然：依靠酒中天然乳酸菌完成，速度不可控，但支持者認為多元菌株帶來更複雜的轉化產物（更多二級風味化合物）', 'C. 自然 MLF 更不安全，一律應使用接種', 'D. 接種 MLF 的酒更酸'],
        correct: 1,
        explanation: '接種 vs. 自然的核心取捨：接種商業菌株（如 VP41）確保 MLF 在最佳時機快速完成，避免殘留蘋果酸在裝瓶後繼續發酵（瓶中再發酵危機）；自然 MLF 的多菌株環境在理論上能產出更多元的乳酸中間產物（如琥珀酸等），增加風味複雜性，是 Leroy、DRC 等低干預莊主的選擇——但需要更嚴格的溫控和衛生管理。'
      },
      {
        type: 'single',
        question: '「乳酸菌（LAB）污染（Brett/Brettanomyces vs. LAB）」如何區分，對布根地有何影響？',
        options: ['A. 兩者引起相同問題', 'B. LAB（乳酸菌）負責 MLF，是預期且受控的；Brett（Brettanomyces 酵母）是污染型真菌，產生「馬廄/農場（Barnyard）/膏藥/鼠臭」等缺陷香氣——早年部分布根地老酒的「Brett 特徵」有人喜愛，但主流認為是釀造失控的缺陷', 'C. Brettanomyces 是布根地傳統風味的一部分', 'D. LAB 和 Brett 都是有益的'],
        correct: 1,
        explanation: 'Brett vs. LAB 的根本區別：乳酸菌（LAB）是可控的生化工具（MLF 執行者），是釀酒師有意使用的；Brettanomyces 是污染性酵母，在木桶缺陷和不潔釀酒環境中滋生，產生 4-乙基苯酚（4-EP）和 4-乙基癒創木酚（4-EG）——「馬廄/膏藥/培根脂肪」特徵。低水平時被部分愛好者視為「複雜性添加」，但高水平則是嚴重的釀造衛生問題，是現代精品布根地極力避免的缺陷。'
      }
    ]
  },

  'm5-l5': {
    type: 'quiz', title: '🧠 浸皮萃取技術知識檢測',
    questions: [
      {
        type: 'single',
        question: '布根地紅酒釀造中，「踩皮（Pigeage）」和「淋汁（Remontage）」的核心差異是？',
        options: ['A. 兩者完全相同', 'B. 踩皮：用腳或踩皮工具從上往下將浮起的皮渣帽（Cap）壓入汁液——更溫和，提取顏色和香氣但減少粗澀單寧；淋汁：從底部抽汁泵回噴淋在皮渣帽頂——較強勁，可增加氧化和更多多酚萃取', 'C. 踩皮只用於白酒', 'D. 淋汁是傳統，踩皮是現代發明'],
        correct: 1,
        explanation: '萃取方式的物理-化學差異：踩皮（Pigeage）破壞皮渣帽的結構性而非完全分散，短暫接觸後皮渣回到頂部，萃取溫和偏重花青素和多糖；淋汁（Remontage）汁液反覆穿越皮渣，萃取更強烈，同時充氧更多（有助發酵均勻），但可能萃取更多粗澀單寧。頂尖布根地常以踩皮為主，需要更多結構時交替使用淋汁。'
      },
      {
        type: 'single',
        question: '「發酵前冷浸（Cold Pre-Fermentation Soak, Cold Maceration）」的目的和技術關鍵是？',
        options: ['A. 使發酵速度更快', 'B. 在 0-10°C 低溫下浸皮 3-7 天，此溫度抑制酵母發酵但允許水溶性花青素和香氣前驅物溶出——相比高溫發酵萃取，可獲得更「乾淨」的果味和色素，粗澀單寧提取較少', 'C. 冷浸只用於白酒的發酵前萃取', 'D. 冷浸漬使酒精度降低'],
        correct: 1,
        explanation: 'Henri Jayer 推廣的冷浸漬技術原理：低溫（<10°C）抑制酵母（最佳發酵溫度 20-28°C），但水溶性花青素（色素）和某些香氣分子仍可緩慢從果皮溶入汁液。此「非酒精萃取」避免了酒精高溫萃取粗澀多酚的問題，使最終酒款呈現更純粹的果香和更柔細的口感——是現代精品布根地紅酒的標配技術之一。'
      },
      {
        type: 'multiple',
        question: '影響布根地發酵浸皮長度（Maceration Length）決策的因素包括？（多選）',
        options: ['A. 年份特性（多酚成熟度高的年份可更長浸漬）', 'B. 目標風格（集中/結構型 vs. 輕盈/早飲型）', 'C. 倉儲空間限制', 'D. 橡木桶品質（新桶配短浸漬，舊桶配長浸漬的平衡考量）'],
        correct: [0, 1, 3],
        explanation: '浸漬長度的決策矩陣：年份熟度高（多酚成熟）→ 更長浸漬可提取充分單寧而無青澀感；目標紅酒風格 → 集中型需要 3-4 週，早飲輕盈型可能只需 10-14 天；橡木桶平衡（重要考量）→ 若使用 50%+ 新桶，過长浸漬可能使木桶單寧 + 果皮單寧疊加過重。倉儲空間是現實因素但不是精品決策的主要考量。'
      },
      {
        type: 'single',
        question: '「溫度管理萃取（Temperature-Managed Extraction）」在高溫年份對布根地有何重要性？',
        options: ['A. 只影響發酵速度', 'B. 過高發酵溫度（>32°C）會萃取粗糙種子單寧和焦氧化化合物，低溫（25-28°C）萃取更精細——暖化年份的溫控是防止酒款粗糙的關鍵', 'C. 溫度越高萃取越好', 'D. 布根地發酵溫度不重要'],
        correct: 1,
        explanation: '發酵溫度對萃取品質的影響：花青素（色素）從 20°C 開始提取效率增加；單寧在 28-30°C 提取最快，但高於此溫度會萃取更多聚合程度低的「粗澀單寧」；超過 32°C：種子單寧大量釋出（強烈收斂感）+ 揮發酸風險升高。暖化年份頂尖莊主通過水冷系統嚴格控制發酵峰溫，是品質保障的技術底線。'
      },
      {
        type: 'single',
        question: '「不添加酵母（Spontaneous/Indigenous Yeast Fermentation）」在布根地的支持者認為其對風土有何貢獻？',
        options: ['A. 自然酵母比商業酵母釀出更甜的酒', 'B. 地塊特有的天然酵母菌群（Terroir Yeast）帶來更複雜多元的發酵代謝產物，是風土個性的「微生物層面」的延伸', 'C. 商業酵母完全優於自然酵母', 'D. 自然酵母只在白酒中重要'],
        correct: 1,
        explanation: '「風土酵母（Terroir Yeast）」假說：每個地塊果皮上有獨特的土著酵母群落（Saccharomyces cerevisiae 和其他非薩克酵母），在自然發酵中這些多元菌群的代謝產物（不同比例的甘油、酯類、高級醇）比商業單一菌株更豐富——DRC、Leroy 不接種商業酵母，相信這種微生物多樣性是風土完整表達的一部分。現代分子生物學研究已證實地塊間酵母群落確有顯著差異。'
      }
    ]
  },

  'm5-l6': {
    type: 'quiz', title: '🧠 過濾裝瓶技術知識檢測',
    questions: [
      {
        type: 'single',
        question: '「不過濾裝瓶（Unfiltered Bottling）」的頂尖布根地支持者最主要的技術理由是？',
        options: ['A. 不過濾是為了節省成本', 'B. 過濾（特別是精密冷凍過濾）會移除懸浮的多糖和蛋白質，這些大分子是口感豐潤、質地複雜的關鍵來源之一；不過濾保留完整的「未修剪」分子複雜性', 'C. 不過濾的酒顏色更深', 'D. 法規要求頂尖等級不能過濾'],
        correct: 1,
        explanation: '不過濾哲學的根據：過濾介質（Diatomaceous Earth、Filtration Sheets）在物理上去除微粒時，同時「刮走」懸浮的蛋白質-多糖複合體——這些正是頂尖白酒口感豐腴度和持久收尾的物質基礎。過濾後的酒在技術上更「穩定乾淨」，但往往顯得「空洞一點」。Leroy、DRC、Coche-Dury 不過濾出貨，是這個哲學的代表實踐。'
      },
      {
        type: 'single',
        question: '「冷穩定（Cold Stabilization）」在白酒中針對哪種沉澱問題，及其缺點是？',
        options: ['A. 去除細菌污染', 'B. 在 -4°C 冷卻 2 週，沉澱酒石酸氫鉀（KHT）晶體，防止裝瓶後形成「冰晶」讓消費者誤以為是污染；缺點是同時移除部分風味化合物和口感物質', 'C. 使酒更甜', 'D. 冷穩定只用於紅酒'],
        correct: 1,
        explanation: '冷穩定（Cold Stabilisation）的折衷：酒石酸氫鉀（Wine Diamonds）在低溫下自然沉澱，若不預先穩定，裝瓶後消費者開瓶可能見到白色晶體（無害但外觀不佳）。但 -4°C 冷處理中，同時有部分酒石酸和風味大分子共沉澱。追求未干預的頂尖莊主（如 Coche-Dury）允許酒石酸晶體在瓶中形成，視為天然現象而非缺陷，保全了完整的分子複雜性。'
      },
      {
        type: 'multiple',
        question: '二氧化硫（SO₂）在裝瓶時的使用考量包括？（多選）',
        options: ['A. 作為抗氧化劑保護酒在存放和運輸中的品質', 'B. 抑制裝瓶後的微生物活動（殘留酵母、乳酸菌）', 'C. SO₂ 過多使酒更甜', 'D. 游離 SO₂ 不足（<20 mg/L）使酒在運輸振動後更容易氧化（常見開箱後酒「看起來過老」的原因）'],
        correct: [0, 1, 3],
        explanation: 'SO₂ 裝瓶管理的三維度考量：1) 抗氧化——游離 SO₂ 中和溶解氧；2) 抗微生物——防止裝瓶後殘留菌活化（俗稱「瓶中再發酵」再 MLF）；3) 運輸保護——足夠游離 SO₂ 是跨洲運輸時的最後防線。更低 SO₂ 體現尊重自然，但對運輸冷鏈的要求更高。SO₂ 不影響甜度（C 為干擾項）。'
      },
      {
        type: 'single',
        question: '「瓶差（Bottle Variation）」在精品布根地中如何從技術層面被最小化？',
        options: ['A. 通過重過濾完全消除瓶差', 'B. 整個批次（同一桶）一次性裝瓶（Bottling in One Continuous Run），確保所有瓶子的 SO₂ 含量、溫度和溶氧量在同一狀態；嚴格管控裝瓶速度和氮氣排氧', 'C. 瓶差只能通過使用螺旋蓋消除', 'D. 瓶差無法控制，只能隨機接受'],
        correct: 1,
        explanation: '最小化瓶差的技術手段：1) 同批次一次性裝瓶（避免不同批次 SO₂ 耗損程度不同）；2) 裝瓶前氮氣（N₂）清洗瓶子排除溶氧；3) 裝瓶速度控制（過快易捲入氣泡）；4) 軟木塞選擇（DIAM 技術木塞有更均勻的微氧化速率比天然木塞）。天然軟木塞本身就是瓶差的最大來源，但頂尖布根地文化上不接受螺旋蓋，是技術和傳統之間的真實矛盾。'
      },
      {
        type: 'single',
        question: '「裝瓶衝擊（Bottle Shock）」的物理化學原因是什麼，如何在消費端應對？',
        options: ['A. 裝瓶時的壓力損失葡萄酒風味', 'B. 裝瓶過程的微量充氧和震動打亂了酒液中的氧化還原平衡和香氣分子的分佈狀態，使剛裝瓶的酒短暫封閉——通常 2-6 週後自然恢復，老年份陳年酒在運輸振動後也有類似現象', 'C. 裝瓶衝擊只影響白酒', 'D. 裝瓶衝擊是永久性的'],
        correct: 1,
        explanation: 'Bottle Shock 的科學基礎：裝瓶時不可避免引入的微量氧氣（0.5-1 mg/L）暫時改變了酒中的氧化還原電位（Redox Potential），使原本在還原環境中穩定的香氣分子（特別是含硫香氣）「重組」；同時，震動改變了大分子結構（多糖、蛋白質聚合狀態），使酒款暫時封閉。消費端建議：新進口的酒靜置 2-4 週後再開瓶，老年份長途運輸後靜置至少 1 週。'
      }
    ]
  }
}

function injectQuiz (moduleFile, lessonId, quiz) {
  const filepath = path.join(BASE, moduleFile)
  const raw = fs.readFileSync(filepath, 'utf8')
  const data = JSON.parse(raw)
  const lesson = data.lessons.find(l => l.id === lessonId)
  if (!lesson) { console.log(`⚠️  找不到 lesson ${lessonId} in ${moduleFile}`); return false }
  if (!lesson.slides) lesson.slides = []
  if (lesson.slides.some(s => s._marker === MARKER)) { console.log(`⏭️  ${lessonId} 已注入，跳過`); return false }
  lesson.slides.push({ ...quiz, _marker: MARKER })
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf8')
  console.log(`✅ ${moduleFile}/${lessonId} 注入 ${quiz.questions.length} 題`)
  return true
}

const pairs = [
  ['advanced-m5.json', 'm5-l1'],
  ['advanced-m5.json', 'm5-l2'],
  ['advanced-m5.json', 'm5-l3'],
  ['advanced-m5.json', 'm5-l4'],
  ['advanced-m5.json', 'm5-l5'],
  ['advanced-m5.json', 'm5-l6'],
]

console.log('=== 布根地 L3 Quiz 注入 — M5 釀造技術 ===\n')
let ok = 0
for (const [file, lid] of pairs) {
  if (QUIZ_MAP[lid] && injectQuiz(file, lid, QUIZ_MAP[lid])) ok++
}
console.log(`\n完成：${ok}/${pairs.length} 已注入`)
