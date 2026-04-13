/**
 * inject-bourgogne-l4-quiz-m8b.mjs
 * 布根地 L4 Quiz 注入 — M8後半：m8-l5~l8 + isFinalExam 標記
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.resolve(__dirname, '..', 'public/bourgogne/data/courses/level4')
const MARKER = '_inject_bourgogne_l4_quiz'

const QUIZ_MAP = JSON.parse(`{
  "m8-l5": {
    "type": "quiz", "title": "🧠 持續專業發展計劃知識檢測",
    "questions": [
      {
        "type": "single",
        "question": "取得 WSET Diploma（DipWSET）後，「持續專業發展（CPD, Continuing Professional Development）」的重要性是？",
        "options": [
          "A. 取得 DipWSET 後不需要繼續學習，已達到葡萄酒知識的頂峰",
          "B. 葡萄酒是動態領域，CPD 是維持專業競爭力（Professional Competitiveness）的終身承諾——氣候變遷每年改變年份表現、新興產區的崛起（如中國大陸/印度葡萄酒）、市場趨勢的演變（自然酒、橘酒、低酒精酒）、法規變化（如布根地 AOC 的新地塊認定）——這些變動使得葡萄酒知識必須持續更新；DipWSET 是認定進入葡萄酒專業圈的門票，但日常的 CPD（品酒、閱讀、行業會議）才是維持真正專業深度的方式",
          "C. CPD 只對侍酒師有必要，對葡萄酒教育者不需要",
          "D. CPD 是浪費時間的活動，DipWSET 已涵蓋所有需要的知識"
        ],
        "correct": 1,
        "explanation": "CPD 在葡萄酒專業的「知識半衰期（Knowledge Half-Life）」問題：葡萄酒知識（特別是年份資訊、新興產區發展、法規修訂）的有效期相對短暫——2020 年學習的「布根地最新年份表現」到 2026 年已是過時資訊；相比之下，分析框架（如 WSET SAT 品評架構、商業分析的 Porter 五力）的有效期更長但也需要隨新案例例適時更新。職業生涯中的 CPD 計劃建議：① 每年參加至少一個重要行業品鑑活動（Burgundy Grand Tasting / Hospices de Beaune）；② 每月閱讀至少 2 篇同儕回顧的葡萄酒學術期刊文章（IVES Technical Reviews / American Journal of Enology）；③ 每年訪問至少 1 個新產區（或深入重訪 1 個熟悉產區更新認知）；④ 維持定期的系統性品評練習（Systematic Tasting Practice），確保 SAT 應用能力不退步。"
      },
      {
        "type": "single",
        "question": "對於準備進一步深造的 DipWSET 持有者，「Master of Wine（MW）考試」的核心挑戰是？",
        "options": [
          "A. MW 考試只測試記憶，只要背誦夠多資料即可通過",
          "B. 在理論、實務、研究三個維度的整合性頂尖表現——MW 考試包含：① 理論考試（Theory Examination）：3 張各 3 小時的論文式試卷（Paper-Based Exam），涵蓋葡萄酒生產、葡萄酒業務/教育、葡萄酒品評，要求展示大師級的批判性分析；② 實務考試（Practical Examination）：36 款盲品（12 款紅/12 款白/12 款其他），需要展示幾乎無誤的系統性品評能力；③ 研究論文（Research Paper）：約 10,000 字，與 DipWSET 論文要求相似但深度顯著更高；三者必須同時通過——全球通過率約 50-60%（已是相當嚴格的篩選），是葡萄酒業最頂尖的資格認證",
          "C. MW 考試只需要通過盲品，無需書面考試",
          "D. MW 和 DipWSET 的難度基本相同，只是名稱不同"
        ],
        "correct": 1,
        "explanation": "MW 的歷史與現狀：Master of Wine 由英國葡萄酒及烈酒教育機構（WSET）在 1953 年創立，目前全球持 MW 頭銜者約 450 人（截至 2024 年）——相比全球數百萬葡萄酒從業者，MW 代表了葡萄酒知識的真正精英頂端。MW vs. Master Sommelier（MS）的區別：MW（Master of Wine）更偏向學術研究和整體葡萄酒業理解，論文研究是重要組成；MS（Master Sommelier, Court of Master Sommeliers）更偏向餐廳服務技術（侍酒服務、酒單設計）和即時口頭回答——兩者均是業界最高端資格，定位互補而非同類比較。DipWSET 持有者的 MW 準備路徑：平均需要 3-7 年的深度準備（每週約 20-30 小時的額外學習和品評練習），多數候選人會加入 MW Study Program（由 MW 學院提供指導）。"
      },
      {
        "type": "multiple",
        "question": "DipWSET 持有者的「職業發展路徑（Career Development Paths）」包括？（多選）",
        "options": [
          "A. 葡萄酒教育（Wine Education）——成為 WSET 授權講師（Approved Programme Provider, APP Educator），教授 WSET Level 1-3",
          "B. 葡萄酒媒體/寫作（Wine Media/Writing）——為葡萄酒雜誌（Decanter/Wine Spectator）或個人部落格、YouTube 頻道撰寫/製作專業內容",
          "C. 葡萄酒貿易（Wine Trade）——進入進口商/經銷商/酒莊擔任商業或技術職位",
          "D. DipWSET 只能讓持有者在餐廳當服務生，沒有其他職業選項"
        ],
        "correct": [0, 1, 2],
        "explanation": "DipWSET 持有者的多元職業生態（A/B/C 正確，D 嚴重低估資格價值）：葡萄酒教育（A）——台灣目前有多個 WSET 授權課程提供商（APP），具備 DipWSET 的講師是稀缺資源（台灣 DipWSET 持有者人數相對有限），市場需求持續增長；葡萄酒媒體（B）——數位時代的葡萄酒內容創作有廣大市場，具備 DipWSET 深度知識的 KOL 在各平台（Instagram/YouTube/Podcast）享有相對稀缺的差異化優勢；葡萄酒貿易（C）——進口商（如台灣的頂尖布根地進口商）通常將 DipWSET 列為採購/商業開發職位的優先條件，知識深度直接影響與酒莊的溝通能力和市場定位敘事。DipWSET 的「複利資質（Compound Credential）」效應：DipWSET 不只是一張證書，而是一個持續產生價值的學習框架——它建立了系統性品評的標準語言，使持有者在所有葡萄酒相關職業中都具備更強的溝通說服力。"
      },
      {
        "type": "single",
        "question": "「葡萄酒教育者（Wine Educator）」的「教學設計（Instructional Design）」核心原則是？",
        "options": [
          "A. 好的葡萄酒教學只需要展示足夠多的知識，不需要設計學習流程",
          "B. 以學習成果（Learning Outcomes）為核心的逆向設計（Backward Design）——從終點（What should students be able to DO after this lesson?）出發設計教學：① 先定義可觀察/可測量的學習成果（Measurable Learning Outcomes）——如「學員能使用 WSET SAT 完整品評並推斷布根地村莊級紅酒的品種和大致年份」；② 再設計評估方式（Assessment Methods）——如何確認學習成果已達到；③ 最後設計教學活動（Teaching Activities）——支撐評估的學習體驗（例：實際品評練習 + 講解對比 + 同伴回饋）",
          "C. 葡萄酒教學只需要照本宣科，講完 WSET 教材即算完成",
          "D. 教學設計對葡萄酒課程不適用，只需要大量品酒實踐"
        ],
        "correct": 1,
        "explanation": "逆向設計（Backward Design, Wiggins & McTighe 的 Understanding by Design 框架）在葡萄酒教育的應用：傳統教學（Forward Design）的失誤：先決定「我要教什麼內容（Content）」→ 再決定「我要怎麼教（Activities）」→ 最後才想到「我要怎麼評估（Assessment）」——結果常是「教了很多但學員學不會」。逆向設計的優勢：以「學員走出課堂後能做什麼（Performance Ability）」為出發點——如「學員能在台灣精品餐廳自信推薦布根地葡萄酒並解釋其特色 / 學員能通過 WSET Level 3 考試 / 學員能系統分析一款陌生葡萄酒的主要特徵」，使教學每一個環節都有清晰的學習成果定位，而非漫無目的地傳遞知識。評估多元化（Assessment Diversity）：最有效的葡萄酒教育評估組合——書面知識測試（Knowledge Test）+品評實踐評估（Practical Tasting Assessment）+口頭解說（Verbal Explanation）三者結合，涵蓋認知（Cognitive）、技能（Psychomotor）、溝通（Communication）三個維度。"
      },
      {
        "type": "single",
        "question": "在葡萄酒專業職涯中，「個人品牌建立（Personal Branding）」的最有效策略是？",
        "options": [
          "A. 個人品牌只需要有豪華的名片，不需要其他策略",
          "B. 一致的專業定位（Consistent Professional Positioning）+ 具體的價值展示（Tangible Value Demonstration）——個人品牌的核心是：「在目標受眾心中，你代表什麼？（What do you stand for in your audience's mind?）」——最有力的個人品牌策略：① 選擇具體的專業利基（Specific Niche）：如「台灣最具深度的布根地分析者」比「葡萄酒通才」更有記憶力；② 持續產出高品質的知識內容（Content Production）：文章/影片/播客，展示真實的知識深度；③ 以具體的學術資歷（DipWSET / MW）和實體驗證（評論家引用、重要品鑑活動出席）為品牌背書",
          "C. 個人品牌和職業能力完全無關，只是行銷包裝",
          "D. 葡萄酒專業人士不需要個人品牌，只需要知識即可"
        ],
        "correct": 1,
        "explanation": "葡萄酒專業人士個人品牌的「利基定位（Niche Positioning）」策略：寬泛定位的問題——「我了解所有葡萄酒」使你在所有潛在雇主/客戶眼中都是普通的；具體定位的威力——「我是台灣對布根地 Côte de Nuits 最深入研究的分析者（特別是 Gevrey-Chambertin 風土與歷史）」，在需要這個具體知識的受眾中，你是不可替代的首選。個人品牌的「一致性（Consistency）」要求：個人品牌不是一時的行銷活動，而是所有公開接觸點（LinkedIn / 品鑑活動發言 / 教學現場 / 媒體發稿）的一致訊息輸出——任何「品牌矛盾（Brand Contradiction）」（如在 LinkedIn 自稱布根地專家，但在公開活動中表現出對布根地地理的不熟悉）都會嚴重損害品牌可信度（Brand Credibility）。"
      }
    ]
  },
  "m8-l6": {
    "type": "quiz", "title": "🧠 大師級品酒筆記撰寫知識檢測",
    "questions": [
      {
        "type": "single",
        "question": "「大師級品酒筆記（Master-Level Tasting Note）」和一般品酒筆記的根本差異是？",
        "options": [
          "A. 大師級品酒筆記只是使用更多形容詞，長度更長",
          "B. 分析性解釋（Analytical Interpretation）vs. 描述性羅列（Descriptive Listing）的根本差異——一般品酒筆記：「此酒呈紅寶石色，有草莓、覆盆子和輕微泥土香，中等酸度，中等單寧，中長收尾。」（停留在感官描述）；大師級品酒筆記：「淡至中等的透明寶石紅（Pale-to-Medium Transparent Ruby），典型冷涼氣候 Pinot Noir 的薄皮特徵——向磚橘轉移的邊緣暗示至少 8-10 年的瓶陳熟成（Bottle Age）；嗅覺呈現成熟的三香主導——松露（Truffle）、皮革（Leather）和醃漬的紅色水果（Preserved Red Fruit），主要一香（Strawberry/Raspberry）已退至底層；口感上中等+的細膩絲滑單寧（Fine-Grained Silky Tannin），和仍然清新的中高酸度構成優雅的張力——整體指向高品質成熟布根地 Pinot Noir，最可能是 Côte de Nuits Village 至 Premier Cru 等級，年份約 2013-2016 年。」第二種筆記完整展示了感官分析→品質推斷→產區推斷→年份推斷的完整邏輯鏈",
          "C. 大師級品酒筆記必須使用英文撰寫才算有效",
          "D. 大師級品酒筆記不包含任何品種推斷，只描述感官"
        ],
        "correct": 1,
        "explanation": "品酒筆記的「分析鏈（Analytical Chain）」結構：每個感官觀察都應連接到一個「解釋/推斷（Interpretation/Inference）」——不只是「What I observe」，而是「What this observation MEANS in terms of grape variety / region / vintage / quality」。頂尖品酒筆記的「多維整合（Multi-Dimensional Integration）」：Allen Meadows（Burghound）的布根地品酒筆記特徵：使用非常具體的地塊術語（「Chambolle 土壤的粉紅花崗岩鹿石（Pink Granite Gravel）賦予的漂浮感（Lift）」）、明確的熟成潛力預測（「此酒將在 2028-2040 年達到飲用頂峰」）；Jancis Robinson 的風格：簡潔精準，用最少的文字傳遞最多的分析性信息（如「Classic Chambolle, with that magical scent of roses and mineral precision that defies logic」）。"
      },
      {
        "type": "single",
        "question": "「品質評估（Quality Assessment）」在品酒筆記中的判斷標準是？",
        "options": [
          "A. 品質評估只是個人喜好，沒有客觀標準",
          "B. 「複雜度（Complexity）+ 均衡感（Balance）+ 長度（Length）+ 典型性（Typicity）」四維客觀框架——WSET 品質評估的核心維度：① 複雜度（Complexity）：是否有多層次的香氣和風味（Primary + Secondary + Tertiary），越複雜越高品質；② 均衡感（Balance）：各結構元素（酸度/單寧/酒精/果味/甜度）是否達到協調的均衡，任何一個元素過度突出都損害整體均衡；③ 長度（Length/Persistence）：香氣和風味在吞咽後在口腔中持續的時間，頂尖布根地 Grand Cru 通常有 45 秒以上的極長收尾（Very Long Finish）；④ 典型性（Typicity）：是否清楚展現品種/產區/年份的典型特徵",
          "C. 只有評論家才能評估品質，普通消費者無法做品質評估",
          "D. 品質只由酒精度決定，高酒精度等於高品質"
        ],
        "correct": 1,
        "explanation": "WSET 品質評估的「Outstanding/Very Good/Good/Acceptable/Faulty」五級標準：Outstanding（傑出）——展示高複雜度、完美均衡、極長收尾、鮮明典型性的酒款；Very Good（非常好）——複雜度和均衡度均高，收尾較長但未達傑出；Good（好）——複雜度中等，結構均衡，無明顯缺陷；Acceptable（可接受）——簡單直接但無缺陷；Faulty（有缺陷）——有明顯的化學缺陷（TCA 軟木塞污染 / 揮發酸過高醋味 / 氧化 / 硫化氫臭雞蛋味）。布根地頂尖 Grand Cru 的「收尾（Finish）」持久性：Romanée-Conti 的極長收尾（45-60 秒以上）幾乎成為識別頂尖布根地的黃金標準之一——Hugh Johnson 的著名描述：「如果這款酒的收尾不能讓你在 1 分鐘後還在感受到它，那不是真正的 Romanée-Conti。」"
      },
      {
        "type": "multiple",
        "question": "「布根地一級園（Premier Cru）品酒筆記的結語（Conclusion）」應包含哪些要素？（多選）",
        "options": [
          "A. 品質等級陳述（Quality Statement）：如「Very Good to Outstanding quality」+ 具體支持理由",
          "B. 飲用適期評估（Drinking Window Assessment）：建議最佳飲用時機（如「Best 2026-2035, peak around 2030」）",
          "C. 整體推斷（Overall Deduction）：含品種、產地（村莊/等級）、大致年份的完整推斷",
          "D. 品酒筆記不需要結語，只需要感官描述即可結束"
        ],
        "correct": [0, 1, 2],
        "explanation": "品酒筆記結語的「完整性（Completeness）」標準（A/B/C 正確，D 缺乏完整性）：品質等級陳述（A）——WSET SAT 的品質評估是考試評分的重要依據，必須使用規範術語（Outstanding / Very Good / Good / Acceptable / Faulty）並提供明確理由（如「複雜的三香+極長收尾+完美均衡支持 Outstanding 評定」）；飲用適期（B）——飲用適期評估展示了評論者對葡萄酒熟成軌跡的理解深度（是否了解不同年份/等級的熟成速度）；整體推斷（C）——一篇沒有最終推斷的品酒筆記在 DipWSET 盲品考試中無法得到完整分數，推斷是品評分析的必然終點，也是考核系統性品評能力的最重要環節。"
      },
      {
        "type": "single",
        "question": "如何在品酒筆記中準確描述「布根地特有的礦物感（Burgundy Minerality）」？",
        "options": [
          "A. 礦物感應直接描述為「嚐起來像石頭」，這樣最準確",
          "B. 使用比較性感官語言（Comparative Sensory Language）+ 脈絡說明（Contextual Explanation）——有效的礦物感描述不是直接說「礦物」，而是描述具體的感官印象（Specific Sensory Impression）：白酒礦物感——「緊緻的石灰岩質感（Taut Limestone Texture）」、「濕打火石（Wet Flint）型的煙燻礦物感」、「白堊粉感（Chalky Powder Feel）」；紅酒礦物感——「鹹鮮的紅色礦物底調（Saline Red Mineral Undercurrent）」、「鐵質大地感（Ferrous Earthiness）」；然後在括號或補充中說明推斷：「這種礦物純粹性（Mineral Purity）是布根地石灰岩-黏土混合土壤（Limestone-Clay Soils）的典型表現」",
          "C. 礦物感在品酒筆記中不應提及，因為沒有科學依據",
          "D. 所有葡萄酒都有完全相同的礦物感，無需在品酒筆記中區分"
        ],
        "correct": 1,
        "explanation": "礦物感（Minerality）的科學爭議與品評實踐的橋接：礦物感是葡萄酒感官科學中最有爭議的術語之一——葡萄酒中的礦物質（鉀/鈣/鎂）本身揮發性極低，不能直接被嗅覺感知；然而，葡萄酒中的某些化合物（如硫醇 Thiols、有機酸 Organic Acids）能在特定環境下產生被人類感知為「礦物感」的印象——這是「感官現實（Sensory Reality）」和「化學現實（Chemical Reality）」之間的落差。在品酒筆記撰寫中，使用「礦物感」是被廣泛接受的感官描述語言（Accepted Sensory Vocabulary），但品評大師通常使用更精準的感官具體詞彙（如「wet stone」「flint」「oyster shell」）而非只說「mineral」，以提高描述的可傳達性（Communicability）和可靠性（Reproducibility）。"
      },
      {
        "type": "single",
        "question": "「布根地年份差異（Vintage Variation in Burgundy）」在品酒筆記中的體現和識別技巧是？",
        "options": [
          "A. 布根地每年的葡萄酒品質和風格完全相同，年份無關緊要",
          "B. 氣候年份（Climatic Vintage）特徵在香氣密度、酸度結構、單寧發展上直接體現——典型年份特徵對比：涼爽年份（如 2013、2014年）：較高酸度（High Acidity）、較低酒精（Lower Alcohol）、更多紅色水果（Red Fruit）和清鮮感（Freshness），需要更長陳年開發複雜度；溫暖年份（如 2015、2018、2020年）：更豐醇的酒體（Fuller Body）、更高酒精（Higher Alcohol 13.5-14.5%）、更多黑色水果（Dark Fruit）、更柔和的單寧結構（Softer Tannin）；品酒筆記中的年份識別：酸度的清鮮感（Freshness）vs. 豐潤感（Richness）的光譜，結合熟成程度，是推斷大致年份區間的主要感官線索",
          "C. 年份差異只影響價格，不影響葡萄酒的感官特徵",
          "D. 只有 Grand Cru 才有年份差異，村莊級以下的酒不受年份影響"
        ],
        "correct": 1,
        "explanation": "布根地年份對比的系統性記憶：涼爽/困難年份（Cool/Difficult）——2011（發黴問題）、2013（晚熟冷涼）、2014（秋季救贖，清雅系）；平衡年份（Balanced）——2012（優秀，尤其 Côte de Nuits）、2016（強霜後存活地塊品質極佳）、2019（近年最佳之一）；溫暖/豐收年份（Warm/Generous）——2015（非常豐醇）、2017（小年份但品質驚人）、2018（溫暖，南布根地尤佳）、2020（極佳，均衡偏豐）。品酒筆記中「年份背景（Vintage Context）」的使用技巧：在筆記的結語中加入年份背景理解——如「本酒酸度的緊緻清鮮感和紅色水果主導的香氣特徵，傾向於較涼爽的年份（2013-2016 年間），而非近年的豐醇風格（2018-2020）」——展示了系統性品評者對年份特徵的整體理解。"
      }
    ]
  },
  "m8-l7": {
    "type": "quiz", "title": "🧠 建立專業網絡知識檢測",
    "questions": [
      {
        "type": "single",
        "question": "葡萄酒專業人士「建立國際行業人脈（International Industry Network）」的最有效場景是？",
        "options": [
          "A. 在社群媒體上大量添加陌生人是最有效的人脈建立方法",
          "B. 專業品鑑活動（Professional Tasting Events）+ 行業年會（Industry Annual Meetings）提供最高密度的有效連結機會——最有效的建立人脈場景：① Hospices de Beaune 拍賣周（11月）：全球頂尖布根地進口商/收藏家/評論家的年度聚集地；② Vinexpo Bordeaux / ProWein Düsseldorf：全球葡萄酒貿易的最大年度展會；③ WSET 同校友網絡（Alumni Network）：DipWSET/MW 持有者社群是高品質且有共同語言的職業人脈圈；在會議中，10 分鐘的深度對話（後續跟進）遠比 100 張名片發送更有人脈效益",
          "C. 人脈建立對葡萄酒職業完全沒有幫助",
          "D. 只有 MW 才能參加重要的行業活動，DipWSET 資格不夠"
        ],
        "correct": 1,
        "explanation": "葡萄酒行業人脈的「強連結（Strong Ties）vs. 弱連結（Weak Ties）」理論（Mark Granovetter, 1973）：強連結（Strong Ties）——深度認識、高互信的緊密人脈，提供深度支持（如推薦信、合作機會）；弱連結（Weak Ties）——淺層認識但信息多樣的廣泛人脈，是獲取「新信息（Novel Information）」和「橋接不同圈子（Bridging Different Circles）」的更有效來源；葡萄酒事業發展的實踐含義：一個在 ProWein 上認識的來自荷蘭的進口商，可能是你在台灣市場永遠找不到的布根地小酒莊聯繫人——弱連結的「遠橋（Long Bridge）」功能，使行業活動的廣泛人脈（即使後來不長期密切聯絡）也有潛在高價值。建立前 10 秒的「電梯簡報（Elevator Pitch）」：準備 30 秒的自我介紹框架——「我是 X（名字），專注於 Y（具體專長），目前在 Z（機構/市場）負責 W（具體工作）」——清晰簡潔地讓對方迅速理解你的專業定位，是行業活動人脈建立的基礎技能。"
      },
      {
        "type": "single",
        "question": "「導師關係（Mentorship Relationship）」在葡萄酒職業發展中的價值是？",
        "options": [
          "A. 導師關係在現代社會已不再重要，自學就足夠了",
          "B. 隱性知識傳遞（Tacit Knowledge Transfer）+ 職業加速（Career Acceleration）的雙重價值——導師（Mentor）擁有大量「書本無法傳遞的隱性知識」：哪個年份被低估？哪個布根地小莊即將崛起？哪家進口商最值得信任？如何在行業中建立個人聲譽？——這些隱性知識（Tacit Knowledge）是任何教材都無法系統性提供的，只能通過「人際關係傳遞（Interpersonal Transmission）」獲得；同時，導師的背書（Mentor Endorsement）在行業中和信任轉移（Trust Transfer）的作用不可低估——被業界知名人士引薦，比自我推薦效率高出數十倍",
          "C. 只有初學者才需要導師，DipWSET 持有者已不需要",
          "D. 導師關係是對等的，雙方互利是不可能的"
        ],
        "correct": 1,
        "explanation": "葡萄酒行業的「網絡信任傳遞（Network Trust Transfer）」：Thomas Keller（美國頂尖主廚）曾說：「葡萄酒世界是一個靠信任運作的世界——你的聲譽就是你的通行證。」在布根地酒莊的實際案例：一個台灣進口商被某位 MW 或業界知名人士背書後，聯絡同一個布根地酒莊的回應率（Response Rate）和取得分配（Allocation）的成功率，遠高於沒有背書的冷聯絡（Cold Contact）。導師關係的「互利設計（Mutual Benefit Design）」：有效的導師關係不是單向的知識輸出，而是雙向的價值創造——被引導者（Mentee）可以為導師提供：新一代消費者的視角（Younger Consumer Perspective）、數字媒體技能（Digital Media Skills）、對新興市場（如台灣/韓國）的在地知識（Local Knowledge），使導師也能從關係中學習和受益。"
      },
      {
        "type": "multiple",
        "question": "「維護長期專業人脈關係（Maintaining Long-Term Professional Relationships）」的有效實踐包括？（多選）",
        "options": [
          "A. 定期有意義的接觸（Regular Meaningful Touch）：分享相關的行業新聞/文章/年份報告，而非只在有所求時才聯絡",
          "B. 及時的感謝與跟進（Timely Follow-Up）：品鑑活動/會議後 48 小時內發送個人化的後續訊息，結合會面的具體細節（顯示真實記憶）",
          "C. 主動提供價值（Proactive Value Delivery）：在不需要回報的情況下幫助聯絡人解決問題或引薦資源",
          "D. 人脈管理只需要在 LinkedIn 上加為好友就完成，不需要後續互動"
        ],
        "correct": [0, 1, 2],
        "explanation": "人脈關係維護的「給予者文化（Giver Culture, Adam Grant）」：Adam Grant 的研究（Give and Take, 2013）確認，長期職業成功者中「給予者（Givers，先給予不索取）」比「索取者（Takers）」有更高的職業頂端比例——在葡萄酒行業，主動分享有價值信息（如「我最近品到一個你可能感興趣的小酒莊，想介紹嗎？」）的人，比只在有所求時才出現的人，長期建立了更牢固的行業信任網絡。定期接觸（A）——有研究顯示，在社群媒體上「即時分享業界相關新聞」比傳統的節日賀卡更有效維護職業關係（更高頻率、更低形式成本、更真實的知識分享）；個人化後續（B）——在行業活動後 48 小時內的跟進很重要，但「個人化（Personalized）」更重要——「很高興認識你」的模板信息 vs. 「你在品鑑會上提到的 2019 Chambolle 讓我印象深刻，我後來查到……」的個人化接觸，後者的回應率通常高出 3-5 倍。"
      },
      {
        "type": "single",
        "question": "「葡萄酒寫作（Wine Writing）」作為建立行業影響力的工具，優質內容的關鍵特質是？",
        "options": [
          "A. 葡萄酒寫作只要夠長、用詞夠華麗就是高品質",
          "B. 清晰度（Clarity）+ 獨特視角（Unique Perspective）+ 分析深度（Analytical Depth）三者兼備——差的葡萄酒寫作：堆砌形容詞（充滿轉義描述但無法讓讀者真正理解葡萄酒）、人云亦云（重複已有共識而無洞見）；優質葡萄酒寫作：① 清晰度（Clarity）：讓非專業讀者也能跟隨思路、讓專業讀者也覺得精準；② 獨特視角（Unique Perspective）：基於深度知識提供讀者以前沒想到的角度（如：「為什麼 2016 的霜害悖論式地造就了存活地塊的超優年份？」）；③ 分析深度（Analytical Depth）：不只描述事實，更解釋原因和含義",
          "C. 葡萄酒寫作越技術化越好，越讓讀者看不懂越顯示專業水準",
          "D. 優質葡萄酒寫作一定需要英文才有影響力，中文寫作沒有市場"
        ],
        "correct": 1,
        "explanation": "優質葡萄酒寫作的「金字塔倒寫（Inverted Pyramid Writing）」技巧：最重要的信息（獨特洞見/核心結論）放在最前面，細節和背景放在後面——這與學術論文的結構（Abstract→Introduction→Method→Result→Conclusion）有所不同，更適合現代數位讀者的注意力模式。葡萄酒寫作的「目標讀者分層（Target Audience Tiering）」：同一個主題（如「布根地 2023 年份報告」可以針對不同受眾用不同寫作策略）：對一般消費者——強調「好喝嗎？現在是否該買？」的實用建議；對葡萄酒愛好者——加入年份氣候背景和感官特徵；對行業專業人士——深入產量統計、釀造師決策分析、與近年份的系統比較。最有影響力的中文葡萄酒寫作（如台灣的葡萄酒雜誌、專業部落格），正是既保持了知識深度又兼顧了語言親切性的「雙層受眾寫作（Dual-Audience Writing）」。"
      },
      {
        "type": "single",
        "question": "在布根地相關的「社群媒體策略（Social Media Strategy）」中，DipWSET 持有者如何建立專業影響力？",
        "options": [
          "A. 只要每天發布美麗的葡萄酒圖片，就能成為頂尖影響者",
          "B. 以知識深度（Knowledge Depth）為核心差異化優勢——DipWSET 持有者的社群媒體特色不應是「外觀吸引力（Visual Appeal）」（這是所有人都能做的），而是「知識深度（Knowledge Depth）」（這是學習了數千小時的獨特優勢）：① 每週發布 1-2 篇深度分析貼文（Deep-Dive Post）——如「3 個你不知道的 Chambolle-Musigny 地質秘密」；② 使用比較性分析（Comparative Analysis）——「2018 vs. 2019 布根地年份的土中差異：為什麼兩者的飲用窗口完全不同？」；③ 分享真實的品評紀錄和推理過程（Real Tasting Notes + Reasoning）——讓讀者跟隨分析過程，而不只是看到結論",
          "C. 社群媒體對專業葡萄酒人士完全不重要",
          "D. 葡萄酒社群媒體只適合用英文，繁體中文市場沒有潛力"
        ],
        "correct": 1,
        "explanation": "「知識型影響者（Knowledge-Based Influencer）」vs. 「美感型影響者（Aesthetic-Based Influencer）」的長期策略差異：美感型影響者（靠好看的圖片和生活風格）面臨的長期問題：高競爭（任何人都能拍美麗的酒瓶）、低壁壘（知識進入壁壘幾乎為零）；知識型影響者（靠深度分析和獨特洞見）的策略優勢：高壁壘（需要真實深度學習），但受眾黏性（Audience Stickiness）和平均受眾品質（Average Audience Quality）顯著更高——即使絕對受眾數（Follower Count）較少，但對精品酒莊/進口商/葡萄酒媒體的「行業影響力（Industry Influence）」通常更強。台灣繁體中文市場的葡萄酒知識內容藍海：台灣的葡萄酒深度內容（特別是布根地）相對稀缺，DipWSET 持有者以中文提供高品質深度分析有相對低競爭的市場空間，是建立台灣本地葡萄酒影響力的有效差異化路徑。"
      }
    ]
  },
  "m8-l8": {
    "type": "quiz", "title": "🧠 最終綜合評估準備知識檢測",
    "questions": [
      {
        "type": "single",
        "question": "L4 布根地大師課程的「最終綜合評估（Final Comprehensive Assessment）」考察哪些能力維度？",
        "options": [
          "A. 最終評估只測試記憶，背誦足夠多的事實即可通過",
          "B. 知識整合（Knowledge Integration）+ 實務應用（Practical Application）+ 批判性分析（Critical Analysis）三維整合能力——最終評估是整個 L4 課程的綜合考核，考察考生能否將八個模組的知識融合運用：① 從 M1 歷史文化的深度脈絡（Deep Historical Context）到 M7-M8 的商業實務和研究能力；② 不只是知道每個知識點——更需要在複雜問題下「系統性地調動跨模組知識（Cross-Module Knowledge Mobilization）」；③ 展示在任何葡萄酒專業情境下都能獨立思考、分析和解決問題的大師級批判能力",
          "C. 最終評估和課程無關，只測試布根地 AOC 地圖記憶",
          "D. 最終評估只需通過其中一個模組的題目，不需要跨模組整合"
        ],
        "correct": 1,
        "explanation": "L4 最終評估的「跨模組整合（Cross-Module Integration）」能力指標：以一道典型的高難度整合題為例：「假設你是布根地 Gevrey-Chambertin 的一個 3 公頃 Premier Cru 地塊擁有者，正計劃將酒莊從傳統 Négociant 合作模式轉型為完全自製 Domaine 模式。請從歷史文化定位（M1）、品種和風土理解（M2）、商業財務規劃（M7）和風險管理（M7-l6）的角度，提出一個 5 年轉型計劃的核心要素。」——這道題考察了至少 4 個模組的知識整合，要求學員展示真正的大師級思維（Master-Level Thinking），而不是分科背誦後的孤立知識點輸出。最終評估的準備策略：建立個人的「跨模組知識地圖（Cross-Module Knowledge Map）」，將 M1-M8 的核心概念相互連接，識別知識的共同底層邏輯，形成真正整合的思維框架。"
      },
      {
        "type": "multiple",
        "question": "準備 L4 最終綜合評估的「最佳複習策略（Optimal Review Strategies）」包括？（多選）",
        "options": [
          "A. 「主題性跨模組複習（Thematic Cross-Module Review）」——以主題（如氣候/風土/商業）而非以模組順序複習，強化跨模組連結",
          "B. 「過去試題模擬（Past Question Practice）」——練習開放式問題，計時作答，培養在壓力下的系統性表達",
          "C. 「系統性盲品練習（Systematic Blind Tasting Drills）」——每週至少 1 次的正式盲品練習，確保實務技能與理論知識並進",
          "D. 最好的複習策略是在考試前一天通宵背誦所有筆記"
        ],
        "correct": [0, 1, 2],
        "explanation": "最終評估複習的「分散學習（Spaced Repetition）+ 間距效應（Spacing Effect）」科學：認知學習科學（Cognitive Learning Science）確認，在考試前分散複習（多次、間隔時間複習）比集中複習（一次突擊）在長期知識留存（Long-Term Retention）上有顯著優勢。具體布根地 L4 複習計劃建議：考前 4 週——對 M1-M8 的每個模組各做一次 30 分鐘的快速回顧，識別個人弱點；考前 3 週——針對弱點模組深化複習；考前 2 週——以跨模組主題（氣候/風土/商業/品評/研究）整合複習；考前 1 週——模擬題練習和系統性盲品練習（至少 2 次正式練習）；考試前一天——輕鬆複習要點，確保充足睡眠（Sleep-Dependent Memory Consolidation）。"
      },
      {
        "type": "single",
        "question": "一位 L4 大師課程畢業生如何體現「布根地大師級思維（Master-Level Burgundy Thinking）」？",
        "options": [
          "A. 大師級思維等於記住最多的葡萄酒事實",
          "B. 從任意問題出發，整合歷史、風土、科學、商業的多維框架進行批判性分析——以「2016 年布根地的惡劣年份最終成為佳釀」為例的大師級分析框架：① 歷史脈絡（M1）：布根地歷史上多個類似的「逆境轉優（Adversity-to-Excellence）」年份（1945、1978），建立歷史模式認知；② 氣候/風土（M2 + M4）：霜害後存活葡萄的集中性（Concentration）+ 夏季理想天氣創造的酸度-成熟度完美均衡解釋品質驚喜；③ 釀造決策（M3）：低產量激發高品質的釀造師應對策略（嚴格篩選、精準採收時間）；④ 商業含義（M7）：逆境年份如何影響市場價格——初期低估（市場預期差）→ 品質確認後的後估值（Re-Evaluation）；大師思維的本質：任何問題都不是孤立的，都需要跨維度的整合分析",
          "C. 大師級思維只需要在盲品時說出正確產區",
          "D. 大師思維和普通思維沒有區別，只是稱謂不同"
        ],
        "correct": 1,
        "explanation": "布根地大師思維的「系統性 vs. 線性（Systemic vs. Linear）」思維差異：線性思維（Linear Thinking）——問題→單一框架→答案；系統性思維（Systemic Thinking）——問題→多個相互影響的框架→複雜但更完整的理解。L4 課程設計的核心目標：讓學員從「知道關於布根地的很多事（Knowing Many Things About Burgundy）」進化到「能夠從布根地的任何一個切入點，系統性地理解整個布根地葡萄酒生態系統（Understanding the Entire Burgundy Wine Ecosystem from Any Entry Point）」——這種能力無法通過死記硬背獲得，只能通過真正理解底層邏輯的連結（Understanding Underlying Logic Connections）後，再配合大量的實踐品評和案例分析才能養成。"
      },
      {
        "type": "single",
        "question": "完成 L4 布根地大師課程後，「知識應用的倫理責任（Ethical Responsibility of Knowledge Application）」是？",
        "options": [
          "A. 知識只是個人財產，不涉及任何倫理責任",
          "B. 大師級知識帶來大師級責任——正確使用影響力（Use Influence Responsibly）+ 誠實溝通（Communicate with Integrity）+ 持續學習（Keep Learning）——具備 L4 大師級知識的專業人士，在消費者、學生、媒體受眾面前具有顯著的知識不對稱優勢（Knowledge Asymmetry Advantage）；這種優勢帶來的責任：① 不利用知識誤導消費者（如刻意隱瞞年份瑕疵以促銷）；② 對「不確定的知識（Uncertain Knowledge）」誠實聲明（如「目前研究對這個問題尚無定論」）；③ 積極回饋社群——分享知識、培育後進，讓葡萄酒教育的生態更豐富（Knowledge Ecosystem Enrichment）",
          "C. 取得 L4 資格後，可以隨意誇大葡萄酒品質進行銷售",
          "D. 知識的倫理責任只適用於學術界，不適用於商業應用"
        ],
        "correct": 1,
        "explanation": "葡萄酒專業知識的「倫理應用（Ethical Application）」案例：葡萄酒評分通貨膨脹（Score Inflation）問題——已有研究（Ashenfelter & Storchmann, 2010）記錄部分酒評人的評分存在與廣告收入相關的正向偏差；這種「知識不誠實（Knowledge Dishonesty）」在長期根本上損害了評論體系的可信度和整個葡萄酒精品市場的信任基礎。台灣市場的具體倫理考量：在台灣精品葡萄酒市場，具備 L4 深度知識的教育者/評論者/進口商，對沒有同等知識的消費者有著極大的信任依賴關係——這種「信任義務（Trust Obligation）」要求知識持有者以「消費者的最大利益（Consumer's Best Interest）」而非「短期銷售利益（Short-Term Sales Interest）」為優先，是葡萄酒專業的核心倫理準則。"
      },
      {
        "type": "single",
        "question": "布根地 L4 課程的「終極學習成果（Ultimate Learning Outcome）」是？",
        "options": [
          "A. 背誦布根地所有 AOC 的名稱和位置",
          "B. 成為能夠在任何職業場景下、以整合性大師思維獨立分析、評估和溝通布根地及全球葡萄酒複雜議題的大師級專業人士——L4 的終極學習成果不是任何單一的知識點，而是一種「系統性思維能力（Systemic Thinking Capacity）」：面對任何新的葡萄酒問題（如新興產區的崛起、氣候變遷的挑戰、市場結構的演變），能夠迅速調動正確的分析框架、整合多個知識維度、得出有深度和說服力的洞見——並以清晰、誠實、具責任感的方式將洞見傳遞給不同受眾",
          "C. 能夠購買到布根地稀缺酒款",
          "D. 取得最多的葡萄酒相關認證數量"
        ],
        "correct": 1,
        "explanation": "L4 課程的整體設計哲學——「從知識者到思考者（From Knower to Thinker）」的轉化：L4 前（L1-L3）學習的是「關於布根地的系統性知識體系（Systematic Knowledge Body）」；L4 的核心目標是「使用知識作為工具（Using Knowledge as a Tool）」——分析複雜問題、做出有說服力的判斷、在不確定性下做出合理決策。這種轉化在布根地葡萄酒的每個面向都有體現：農業決策（面對霜害威脅，如何制定最優的風險-成本方案？）、釀造選擇（面對異常年份氣候，如何調整橡木桶策略？）、商業規劃（面對市場結構演變，如何調整通路策略？）——每個問題都沒有標準答案，只有「有深度的分析框架 + 有說服力的推理 + 有誠實的不確定性承認」才是 L4 大師思維的真正展現。"
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

function markFinalExam (moduleFile, lessonId) {
  const filepath = path.join(BASE, moduleFile)
  const raw = fs.readFileSync(filepath, 'utf8')
  const data = JSON.parse(raw)
  const lesson = data.lessons.find(l => l.id === lessonId)
  if (!lesson) { console.log(`⚠️  找不到 lesson ${lessonId}`); return false }
  if (lesson.isFinalExam) { console.log(`⏭️  ${lessonId} 已標記 isFinalExam，跳過`); return false }
  lesson.isFinalExam = true
  lesson.quizBankPath = '/bourgogne/data/courses/level4/quiz-bank.json'
  lesson.finalExamTitle = '📋 Level 4 布根地大師課程 綜合評量'
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf8')
  console.log(`🎓 ${moduleFile}/${lessonId} 已標記為期末考（isFinalExam）`)
  return true
}

const pairs = [
  ['master-m8.json', 'm8-l5'],
  ['master-m8.json', 'm8-l6'],
  ['master-m8.json', 'm8-l7'],
  ['master-m8.json', 'm8-l8'],
]

console.log('=== 布根地 L4 Quiz 注入 — M8後半：l5-l8 ===\n')
let ok = 0
for (const [file, lid] of pairs) {
  if (QUIZ_MAP[lid] && injectQuiz(file, lid, QUIZ_MAP[lid])) ok++
}
console.log('\n=== 標記 m8-l8 為期末考 ===')
markFinalExam('master-m8.json', 'm8-l8')
console.log(`\n完成：${ok}/${pairs.length} 課已注入`)
