/**
 * inject-bourgogne-l3-quiz-m1.mjs
 * 布根地 L3 Quiz 注入 — M1：風土（Terroir）科學（6 lessons）
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.resolve(__dirname, '..', 'public/bourgogne/data/courses/level3')
const MARKER = '_inject_bourgogne_l3_quiz'

const QUIZ_MAP = {
  'm1-l1': {
    type: 'quiz', title: '🧠 風土科學定義知識檢測',
    questions: [
      {
        type: 'single',
        question: '布根地「風土（Terroir）」的現代科學定義中，最難以量化的因素是？',
        options: ['A. 土壤的礦物組成', 'B. 年均降雨量', 'C. 人文歷史與莊主代代相傳的地塊知識', 'D. 坡度角度'],
        correct: 2,
        explanation: '現代風土科學能精確測量土壤成分、坡度、日照時數，但「人文因素」——修道士數百年的農耕智慧、莊主對特定地塊的直覺解讀——至今仍是最難被量化和複製的風土核心，也是為何同一 Climat 不同莊主出現巨大品質差異。'
      },
      {
        type: 'single',
        question: '「表達性風土（Expressive Terroir）」和「中性風土（Neutral Terroir）」的主要差異在於？',
        options: ['A. 表達性風土只出現在特級園', 'B. 表達性風土指地塊特徵能清晰顯現在酒款風格中，而非被橡木桶或釀造手法掩蓋', 'C. 中性風土代表品質差的地塊', 'D. 兩者差異只在酒精濃度'],
        correct: 1,
        explanation: '「表達性風土」是指葡萄酒能明確反映其生長地塊的地質、氣候和位置特徵，讓品飲者能識別「此酒來自何處」。這需要低干預釀造——過多新桶、過度萃取都會「說蓋」地塊的細膩表達。'
      },
      {
        type: 'multiple',
        question: '現代風土科學已能測量或影響的因素有哪些？（多選）',
        options: ['A. 土壤中的微生物群落（Microbiome）', 'B. 根系深度與礦物質吸收效率', 'C. 葡萄藤的基因記憶與神秘感官', 'D. 不同土壤層的水分保留與釋放節律'],
        correct: [0, 1, 3],
        explanation: '現代土壤科學能分析微生物群落多樣性（與葡萄酒香氣直接相關）、根系行為模型，以及不同深度土層的水文動態。「葡萄藤神秘感官」是文學描述，不屬於科學可測量範疇。'
      },
      {
        type: 'single',
        question: '為何布根地強調「地塊等級（Climat）」而非「莊主聲望」作為定價基準？',
        options: ['A. 因為所有莊主水準相同', 'B. 因為法律規定', 'C. 因為地塊的自然條件是不可移動的資產，而莊主可能更替，風土才是最持久的品質基礎', 'D. 因為莊主聲望難以評估'],
        correct: 2,
        explanation: '布根地「地塊優先」哲學的邏輯：DRC 的 Romanée-Conti 地塊在 300 年後依然存在，但莊主會更替。風土的稀缺性與不可複製性是最持久的價值來源。但實踐中，頂尖莊主仍能為同一地塊增添額外溢價。'
      },
      {
        type: 'single',
        question: '「同質效應（Homogenization）」在全球葡萄酒中對風土表達的威脅是？',
        options: ['A. 過多不同風土使消費者困惑', 'B. 國際釀造顧問推廣標準化技術、相似橡木桶使用，使不同地塊的酒款趨於相似、失去地域特色', 'C. 氣候暖化使各地溫度一致', 'D. 風土差異在現代釀造技術下已不重要'],
        correct: 1,
        explanation: '1990-2010年代「飛行釀酒師（Flying Winemaker）」風潮帶來了相似的橡木桶使用量、相似的萃取強度和相似的風格，被批評者稱為「全球化」或「Parker化」——抹平了各產區最珍貴的獨特風土表達。'
      }
    ]
  },

  'm1-l2': {
    type: 'quiz', title: '🧠 坡向與海拔影響知識檢測',
    questions: [
      {
        type: 'single',
        question: '布根地金丘（Côte d\'Or）東南坡在「清晨日照角度」上有何優勢？',
        options: ['A. 清晨陽光垂直照射，強度最大', 'B. 清晨斜射的低角度日光使葡萄緩慢升溫，避免熱衝擊，同時啟動光合反應', 'C. 清晨無日照，有助葡萄保留酸度', 'D. 清晨日照與西坡沒有差異'],
        correct: 1,
        explanation: '東南坡的清晨日照角度低（斜射），使地面和葡萄藤緩慢、均勻地升溫——這比西坡的午後強烈日照更有利，後者可能導致葡萄過熱。斜射光還能最大化植株光合作用的受光面積。'
      },
      {
        type: 'single',
        question: '「海拔梯度（Altitudinal Gradient）」在布根地山坡的具體作用是？',
        options: ['A. 海拔越高，溫度越高', 'B. 每上升 100 米溫度約下降 0.6°C，但在布根地金丘的尺度（50-100m差）主要影響霜害風險和冷空氣積聚', 'C. 海拔只影響降雨量', 'D. 海拔對布根地影響可忽略不計'],
        correct: 1,
        explanation: '布根地金丘的海拔差異不大（230-400m），但關鍵在於：低海拔谷地是冷空氣「積聚池」，春霜風險最高（大區等級）；中坡段暖空氣循環最佳（特級園和一級園）；頂部風大過冷（Village 或 Hautes Côtes）。'
      },
      {
        type: 'multiple',
        question: '決定布根地特定地塊「熱量積累（Heat Accumulation）」的因素有哪些？（多選）',
        options: ['A. 坡面角度（坡越陡，接收日照密度越高）', 'B. 石灰岩吸熱和夜間輻射散熱', 'C. 葡萄品種的葉片顏色', 'D. 斜坡方位（東南、南、東）和周圍遮擋物'],
        correct: [0, 1, 3],
        explanation: '熱量積累組合：坡面角度（越垂直於太陽軌跡越高效）+ 石灰石的蓄熱效應（白色反光 + 白天吸熱夜晚放熱）+ 坡面方位（東南最佳）。葡萄葉顏色對此影響微乎其微。'
      },
      {
        type: 'single',
        question: '為什麼金丘「坡地中段（mi-côte）」的特級園和一級園土壤通常比坡頂更淺？',
        options: ['A. 人工強行去除了部分土壤', 'B. 歷史上坡頂土壤在侵蝕過程中向下移動，中坡段反而是侵蝕的「中途站」，土層相對較薄但礦物豐富', 'C. 坡頂土壤更深厚，中段較淺', 'D. 降雨沖刷使中坡段土壤流失最多'],
        correct: 1,
        explanation: '金丘的土壤演化：坡頂的石灰岩基岩外露，土壤最薄最貧瘠；侵蝕作用使土壤顆粒向下搬運，在中坡段形成「適中深度」的薄土——對葡萄藤來說剛好夠根系深入但不過度肥沃，是最理想的「壓力平衡點」。'
      },
      {
        type: 'single',
        question: '「Combe（山谷缺口）」對布根地相鄰葡萄園的微氣候有何特殊影響？',
        options: ['A. 提供更多降雨，使葡萄汁液被稀釋', 'B. 形成冷風通道，帶來涼爽空氣，有助於緊鄰的葡萄園保留酸度和延遲成熟', 'C. Combe 完全沒有微氣候效應', 'D. 使鄰近葡萄園溫度均勻化'],
        correct: 1,
        explanation: 'Combe（從山脊延伸下來的山谷缺口）是布根地特有的地貌——它們形成冷空氣通道，從高地引入涼爽空氣。緊鄰 Combe 的葡萄園（如 Gevrey-Chambertin 附近的 Combe Grisard）往往保留更佳的酸度，但也有更高的春霜風險。'
      }
    ]
  },

  'm1-l3': {
    type: 'quiz', title: '🧠 石灰岩與泥灰岩知識檢測',
    questions: [
      {
        type: 'single',
        question: '「Kimmeridgian 石灰岩」在夏布利的特殊意義是？',
        options: ['A. 使夏布利的酒呈橙色', 'B. 含有大量侏羅紀牡蠣化石，賦予夏布利其標誌性的牡蠣殼礦物感和鹹鮮質地', 'C. 是世界上最古老的岩石類型', 'D. 只出現在夏布利，金丘完全沒有'],
        correct: 1,
        explanation: 'Kimmeridgian 石灰岩（約 1.55 億年前）富含牡蠣等海洋生物的化石碳酸鈣，這些有機礦物質溶入土壤後，被認為是夏布利 Chardonnay 特有的「牡蠣殼」礦物香氣（碘、海鹽）的主要成因。'
      },
      {
        type: 'single',
        question: '金丘「泥灰岩（Marne）」的物理特性對葡萄藤有何特別貢獻？',
        options: ['A. 阻止根系深入，使葡萄更高產', 'B. 泥灰岩的黏土成分具有高保水性，在乾旱年份保持水分，石灰質成分提供礦物質補充', 'C. 泥灰岩使土壤過鹼，呈現苦味', 'D. 泥灰岩只出現在低等級的大區 AOC'],
        correct: 1,
        explanation: '泥灰岩（石灰岩+黏土的混合岩）是布根地最「全能」的土壤介質：黏土成分在夏季保持水分緩解乾旱壓迫，石灰質提供鈣和其他礦物質，而整體結構使根系能深入並分岔，最大化礦物吸收。'
      },
      {
        type: 'multiple',
        question: '以下哪些是布根地金丘最重要的地質岩層？（多選）',
        options: ['A. Bathonian 石灰岩（Comblanchien、Premeaux）', 'B. Bajocian 鮞粒石灰岩（Oolitic Limestone）', 'C. 花崗岩基岩（如博若萊）', 'D. Callovian 泥灰岩（Marne）'],
        correct: [0, 1, 3],
        explanation: '金丘地質三層樓：頂部 Bathonian（白色硬質石灰岩，Comblanchien 採石場）、中部 Bajocian 鮞粒石灰岩（特級園常見）、底部 Callovian 泥灰岩（保水性強）。花崗岩是博若萊的基岩，金丘無此地質。'
      },
      {
        type: 'single',
        question: '為什麼夜丘和伯恩丘雖相鄰，葡萄酒風格卻差異顯著？',
        options: ['A. 因為使用不同品種', 'B. 兩丘的地質岩層組合和比例不同：夜丘更多紅色鐵質石灰岩（賦予強勁）；伯恩丘更多白色石灰岩和泥灰岩（賦予白酒細膩）', 'C. 兩丘海拔差異超過 500 米，氣候完全不同', 'D. 伯恩丘土壤更古老'],
        correct: 1,
        explanation: '夜丘（夜黑山丘）土壤含更多鐵質紅色石灰岩（Ferruginous Limestone），使 Pinot Noir 更深色、更強勁；伯恩丘白色鮞粒石灰岩比例更高，更適合 Chardonnay 的礦物精緻感。這是同一山脊南北兩段的地質差異造成的。'
      },
      {
        type: 'single',
        question: '「活性石灰（Active Lime）」過高對葡萄藤有何負面影響？',
        options: ['A. 葡萄藤過快生長，難以控制', 'B. 造成鐵元素吸收障礙（黃葉病/葉綠素缺乏症），嚴重影響光合作用', 'C. 使葡萄酒顏色過淡', 'D. 活性石灰只有正面影響'],
        correct: 1,
        explanation: '活性石灰過高（高 pH）會導致土壤鐵元素以不可吸收的 Fe³⁺ 形式存在，葡萄藤無法獲得足夠鐵質，葉片變黃（Chlorosis/葉綠素缺乏）。布根地農夫選用對石灰有耐受性的砧木（如 41B）是應對此問題的主要策略。'
      }
    ]
  },

  'm1-l4': {
    type: 'quiz', title: '🧠 微氣候精密調控知識檢測',
    questions: [
      {
        type: 'single',
        question: '布根地「霜凍防護系統（Anti-frost System）」中，噴水結冰法（Aspersion）的原理是？',
        options: ['A. 冷水降溫，保護嫩芽', 'B. 水結冰時釋放潛熱（0°C時），使嫩芽周圍溫度保持在 0°C 而非更低', 'C. 水的導熱性保護葡萄', 'D. 完全無效，只是農夫的傳統信仰'],
        correct: 1,
        explanation: '噴水結冰法利用物理原理：液態水轉變為固態冰時，釋放「結晶潛熱」（每公克 334 焦耳），使嫩芽被包覆在冰殼內，周圍溫度維持在 0°C——只要持續噴水補充熱量，就能在外部氣溫降至 -5°C 時保護嫩芽。'
      },
      {
        type: 'single',
        question: '「背風坡效應（Foehn Effect）」如何影響布根地的微氣候？',
        options: ['A. 完全沒有影響', 'B. 當氣流越過法國中央高地下沉至布根地時，氣溫升高且乾燥，在某些年份提供關鍵的採收前暖化', 'C. 使布根地比法國其他地區更涼爽', 'D. 只影響夏布利，不影響金丘'],
        correct: 1,
        explanation: '布根地位於法國中央高地（Massif Central）的東側背風坡。當濕潤西風越過山脊下沉時，受絕熱壓縮升溫（乾燥焚風效應），在關鍵的採收前秋季帶來乾燥暖氣，有助於快速提高葡萄成熟度，是某些偉大年份形成的自然機制。'
      },
      {
        type: 'multiple',
        question: '布根地葡萄農在微氣候管理上能採取的積極措施包括？（多選）',
        options: ['A. 調整整枝高度以避開低溫冷空氣層', 'B. 使用加熱蠟燭或電力加熱器抵抗春霜', 'C. 完全改變坡向微氣候', 'D. 風機（Wind Machine）打散霜凍冷空氣層'],
        correct: [0, 1, 3],
        explanation: '人工微氣候管理：1) 提高整枝高度（Guyot Simple 等）使嫩芽高於最危險的冷空氣層；2) 蠟燭/加熱器直接提高周圍溫度；3) 大型風機打散積聚冷空氣。坡向是天然條件，人工無法改變。'
      },
      {
        type: 'single',
        question: '「溫度逆轉現象（Temperature Inversion）」在布根地山坡是否有利？',
        options: ['A. 完全不利，應盡量避免', 'B. 在春夜，冷空氣下沉到谷地，而山坡中段反而比谷地溫暖，這是頂級葡萄園位於半山腰的微氣候依據之一', 'C. 只出現在冬季，對葡萄無關', 'D. 溫度逆轉只出現在熱帶氣候'],
        correct: 1,
        explanation: '春夜溫度逆轉：冷空氣（重）下沉積聚在谷地，而山坡中段反而比谷底暖 2-5°C。這個現象是布根地傳統農業智慧的核心之一——特級園選址在山腰，不只是為了排水和日照，更是規避春霜的「溫暖島嶼」。'
      },
      {
        type: 'single',
        question: '「葉幕管理（Canopy Management）」如何通過微氣候調控影響葡萄酒品質？',
        options: ['A. 葉幕只影響葡萄的外觀顏色', 'B. 適當疏葉（去葉）可提高果實日照、降低濕度（減少黴菌）、改善空氣流通，但過度去葉在熱年份會導致日灼', 'C. 葉幕越茂密越好', 'D. 葉幕管理只對白酒有影響'],
        correct: 1,
        explanation: '葉幕管理的精確平衡：適當去除果串周圍的葉片提高光合效率和通風（減少病害），特別在潮濕年份至關重要；但在暖化加劇的現在，保留更多葉幕遮蔭以防日灼正成為新趨勢——這是微氣候管理年年不同的複雜藝術。'
      }
    ]
  },

  'm1-l5': {
    type: 'quiz', title: '🧠 風土與品種配對知識檢測',
    questions: [
      {
        type: 'single',
        question: '為何 Pinot Noir 被認為是表達布根地風土「最理想的媒介品種」？',
        options: ['A. Pinot Noir 沒有自身強烈香氣，因此風土有最大空間表現', 'B. Pinot Noir 皮薄、高敏感性，能精確「翻譯」土壤和氣候的微小差異，如同透明薄膜', 'C. Pinot Noir 是世界上最古老的品種', 'D. Pinot Noir 比其他品種更容易種植'],
        correct: 1,
        explanation: 'Pinot Noir 的「高敏感性」是把雙刃劍：它比 Cabernet 更難種植、更脆弱，但正是這種極端敏感性使它能夠像精密儀器一樣記錄和表達每個地塊的微小差異。同一克隆在 Romanée-Conti 和 Bourgogne 大區地塊就會呈現截然不同的特性。'
      },
      {
        type: 'single',
        question: '「老藤（Old Vines/Vieilles Vignes）」對風土表達有何科學支持的影響？',
        options: ['A. 僅是行銷概念，無實際影響', 'B. 老藤根系更深廣，能探索更多土壤層的礦物質水分，且產量自然降低，使果實濃縮度提高', 'C. 老藤只影響葡萄酒顏色', 'D. 老藤 = 樹齡超過 10 年的葡萄藤'],
        correct: 1,
        explanation: '老藤（通常指 30 年以上，但頂尖莊主保留 50-100 年藤）的科學優勢：深根系（達地下 10-20 米）避開地表乾旱、存取更深層礦物；自然低產（每公頃幾百公升 vs 年輕藤的數千公升）；更穩定的年份間品質表現。'
      },
      {
        type: 'multiple',
        question: '以下哪些因素說明 Chardonnay 特別適合伯恩丘的石灰岩土壤？（多選）',
        options: ['A. Chardonnay 能從高鈣石灰岩中吸收並轉化為獨特礦物感', 'B. 石灰岩的高 pH 值抑制 Chardonnay 的過度生長，使果實濃縮', 'C. Chardonnay 的黃色果皮與石灰岩顏色相配', 'D. 石灰岩良好排水性防止 Chardonnay 葡萄吸水膨脹'],
        correct: [0, 1, 3],
        explanation: 'Chardonnay-石灰岩的完美配對：石灰岩給予充足鈣質和礦物質供潛在的礦物感表達；高 pH 土壤使葡萄藤自我調節生長速率（非過旺）；良好排水性（Chardonnay 對澇害敏感）是穩定品質的基礎。果皮顏色與土壤顏色無科學關聯。'
      },
      {
        type: 'single',
        question: '「克隆選擇（Clone Selection）」對布根地風土表達有何影響？',
        options: ['A. 同一地塊不同 Pinot Noir 克隆的表現完全相同', 'B. 不同基因克隆的香氣輪廓和風土敏感度不同，有些克隆在特定土壤的表現優於其他', 'C. 克隆選擇只影響產量，不影響風味', 'D. 布根地只有一種官方認可的 Pinot Noir 克隆'],
        correct: 1,
        explanation: '布根地 Pinot Noir 有超過 1,000 個克隆，不同克隆對土壤、氣候的反應截然不同。頂尖莊主如 Leroy、DRC 保留「馬薩爾篩選（Massal Selection）」——從自有老藤中取枝，保留多樣性，而非使用統一的商業克隆，正是為了讓風土通過多元基因得到最豐富的表達。'
      },
      {
        type: 'single',
        question: '布根地「土地觀察（Sol Observation）」中，莊主親自品嚐土壤的傳統意義是？',
        options: ['A. 是一種表演給遊客看的儀式', 'B. 體驗土壤的礦物組成和有機質水平，建立農夫對地塊直覺理解，無法被儀器完全取代', 'C. 只是為了確認土壤沒有污染', 'D. 現代科技已使此傳統完全過時'],
        correct: 1,
        explanation: '頂尖布根地農夫（Lalou Bize-Leroy 等）的「品土」傳統體現了從身體感知到釀酒決策的直接連結。土壤儀器分析提供數據，但農夫的感知整合（土壤的鬆緊、濕度、氣息）是現代儀器難以完整量化的整體認知，兩者互補而非對立。'
      }
    ]
  },

  'm1-l6': {
    type: 'quiz', title: '🧠 氣候變遷對風土影響知識檢測',
    questions: [
      {
        type: 'single',
        question: '氣候暖化如何改變布根地「風土的邊界（Terroir Boundaries）」？',
        options: ['A. 風土邊界完全不變', 'B. 原本過冷、品質不穩定的北端或高海拔地塊，隨暖化逐漸進入產出優質葡萄酒的適宜範圍', 'C. 所有地塊品質均等下降', 'D. 風土邊界只取決於行政區劃，與氣候無關'],
        correct: 1,
        explanation: '氣候暖化正在「重新繪製」布根地的優質風土地圖：Hautes Côtes 過去常在寒冷年份無法充分成熟，現在正成為頂尖莊主的新投資熱點；北坡和東北坡的地塊價值上升；而傳統最熱的南坡反而需要更多涼爽管理。'
      },
      {
        type: 'single',
        question: '「採收日期提前（Earlier Harvest）」對布根地傳統風土表達的最大威脅是？',
        options: ['A. 採收更早代表品質永遠更高', 'B. 果實未達到足夠的「多酚成熟（Phenolic Ripeness）」，即使有足夠糖分，單寧和顏色物質仍是生澀的——破壞了傳統的酸度-果味平衡', 'C. 提前採收只影響白酒', 'D. 採收日期提前主要節省勞動力成本'],
        correct: 1,
        explanation: '「糖分成熟」和「多酚成熟」的分離是暖化布根地的新挑戰：葡萄糖分快速積累（採收可行），但皮中的花青素、單寧的充分發展需要更多時間。過早採收的后果是高酒精+生澀單寧+少香氣——失去布根地最重要的細膩平衡。'
      },
      {
        type: 'multiple',
        question: '莊主應對氣候暖化保護風土表達的策略包括？（多選）',
        options: ['A. 恢復或探索更高海拔和北坡地塊', 'B. 提早夏季修剪以延緩反季節生長', 'C. 選育更耐熱的新克隆', 'D. 保留更多葉幕遮蔭果串（防日灼）'],
        correct: [0, 1, 2, 3],
        explanation: '所有四項都是實際採用的策略：1) 探索高海拔/北坡新地塊；2) 提早修剪改變生長節律；3) 耐熱克隆選擇（Pinot Noir 某些克隆在高溫下保留酸度更好）；4) 增加葉幕遮陰——這些措施組合使用，是應對暖化的綜合方案。'
      },
      {
        type: 'single',
        question: '「酸化（Acidification）」在布根地現代釀造中的爭議是什麼？',
        options: ['A. 酒精濃度過低', 'B. 暖化引起的酸度不足，部分莊主人工添加酒石酸（Tartaric Acid）修正，但傳統主義者認為這破壞了風土真實性', 'C. 布根地完全禁止酸化', 'D. 酸化只允許用於氣泡酒'],
        correct: 1,
        explanation: '暖化使越來越多布根地年份酸度偏低，引發人工酸化（添加酒石酸）的爭議：實用派認為這只是恢復「理應存在」的酸度；傳統派（Leroy、DRC 等）堅持不干預，認為添加酒石酸改變了風土的真實紀錄，是對年份特性的偽造。'
      },
      {
        type: 'single',
        question: '未來布根地因暖化可能消失的最重要風土特質是？',
        options: ['A. 果味濃縮度', 'B. 天然高酸度和涼爽年份賦予的礦物精緻感——這是布根地 vs. 其他溫暖產區的最核心差異化', 'C. 葡萄皮的顏色', 'D. 酒莊建築風格'],
        correct: 1,
        explanation: '布根地的終極差異化特質是「涼爽氣候的優雅」——天然高酸、礦物精緻感和低酒精的平衡。隨著氣溫上升，若無積極因應，布根地頂尖 Pinot Noir 可能趨向「南布根地化」，失去與新世界或南隆河的差異，這是業界最憂慮的長期風土危機。'
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
  ['advanced-m1.json', 'm1-l1'],
  ['advanced-m1.json', 'm1-l2'],
  ['advanced-m1.json', 'm1-l3'],
  ['advanced-m1.json', 'm1-l4'],
  ['advanced-m1.json', 'm1-l5'],
  ['advanced-m1.json', 'm1-l6'],
]

console.log('=== 布根地 L3 Quiz 注入 — M1 風土科學 ===\n')
let ok = 0
for (const [file, lid] of pairs) {
  if (QUIZ_MAP[lid] && injectQuiz(file, lid, QUIZ_MAP[lid])) ok++
}
console.log(`\n完成：${ok}/${pairs.length} 已注入`)
