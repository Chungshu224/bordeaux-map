/**
 * inject-bourgogne-l3-quiz-m15-final.mjs
 * Batch 4b：M15 綜合案例（5 lessons）+ quiz-bank.json（30題）+ m15-l5 期末考標記
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.resolve(__dirname, '..', 'public/bourgogne/data/courses/level3')
const MARKER = '_inject_bourgogne_l3_quiz'

// ── M15 各課 Quiz ──────────────────────────────────────────
const QUIZ_MAP = {
  'm15-l1': {
    type: 'quiz', title: '🧠 酒莊參訪規劃知識檢測',
    questions: [
      {
        type: 'single',
        question: '規劃布根地酒莊參訪的最佳時機（時令）是？',
        options: ['A. 一月嚴冬——葡萄園景色最美', 'B. 採收前（8月底~9月）或春季發芽期（4月）是最常被推薦的兩個時機——採收前可見葡萄飽滿狀態並感受採收準備氛圍；春季展望新年份、酒莊員工相對有更多時間接待業界訪客；11月則是新酒發布季，有 Paulée 等傳統慶典', 'C. 聖誕節期間是最佳拜訪時機', 'D. 任何時間拜訪效果完全相同'],
        correct: 1,
        explanation: '時令規劃的現實考量：採收期（9月下旬~10月）酒莊最忙，不適合正式拜訪；春季（3-4月）酒莊剛完成桶中培養前期工作，莊主相對有時間接待，且能試桶；11月的 Beaune 拍賣週（第三個週末）配套活動：Hospices de Beaune 拍賣（日）+ La Paulée（一）是最集中的布根地社交和品鑑事件。提前 6-12 個月預約頂尖酒莊（如 DRC、Leflaive、Comtes Lafon）是業界標準做法。'
      },
      {
        type: 'single',
        question: '「預約參訪（Appointment Only Visit）」是布根地大多數頂尖酒莊的要求，正確的聯繫禮節是？',
        options: ['A. 直接到訪不需提前聯繫', 'B. 以書面（電子郵件，法文或英文均可）方式自我介紹、說明拜訪目的（收藏家/專業學習/業界採購）、提出希望的日期（給 2-3 個備選）並估計參訪人數——回覆可能需要 2-8 週；切勿在採收季（9-10月）提出首次硬請求', 'C. 電話即時預約是最有效方式', 'D. 只需透過旅遊業者統一安排'],
        correct: 1,
        explanation: '布根地酒莊拜訪的文化禮節：頂尖布根地（DRC、Rousseau、Leroy）接受訪客的比例極低且完全依賴長期商業/個人關係；「冷拜訪（Cold Visit）」幾乎不可能。務實路徑：1) 透過已有關係的進口商或精品酒商引薦（最有效）；2) 通過 BIVB（Bourgogne Wine Trade Board）推薦的參訪計劃；3) 參加布根地業界活動（Vinexpo、ProWein）建立聯繫後轉換為拜訪邀請；4) 小型精品酒莊（非頂尖）通常更易於直接聯繫。'
      },
      {
        type: 'multiple',
        question: '成功的布根地酒莊參訪「品桶/試飲（Barrel/Cellar Tasting）」中的專業行為包括？（多選）',
        options: ['A. 準備具體而有深度的問題（風土差異、年份判斷、地塊管理哲學）', 'B. 攜帶品鑑筆記本並即時記錄印象和數據（桶號/葡萄園/年份）', 'C. 拍攝大量旁邊酒瓶的照片並立即發布社交媒體', 'D. 尊重試飲禮節（試後吐入吐桶，不長時間佔用每桶酒）'],
        correct: [0, 1, 3],
        explanation: '品桶禮節的核心：D（即時記錄）是職業品鑑者的基本功；A（深度問題）顯示你的準備程度，區分「有意義的訪客」和「觀光客」——莊主更願意花時間和準備充分者深入討論；D（吐酒禮節）——品桶通常 20-40 款酒，不吐酒會嚴重影響後段的感知準確性。C（即時社交媒體發布）在許多酒莊是明確禁止的行為——未發布酒款的桶樣圖片在業界是不尊重的行為，且部分莊主不希望年份信息早於官方發布傳出。'
      },
      {
        type: 'single',
        question: '計劃 5 天的布根地深度葡萄酒之旅，最佳的地域路線順序是？',
        options: ['A. 每天隨機選擇不同地區', 'B. 建議以地理為核心劃分：D1 Chablis → D2 夜丘北段（Marsannay/Fixin/Gevrey/Morey）→ D3 夜丘南段（Chambolle/Vougeot/Vosne/Nuits-St-Georges）→ D4 伯恩丘（Pernand/Corton/Beaune/Pommard/Volnay）→ D5 夜丘精選回訪/Mâconnais 白酒——按地理集中安排最大化單日風土比較效率', 'C. 從南到北：先去 Mâcon 再去 Chablis', 'D. 只集中在伯恩市區'],
        correct: 1,
        explanation: '地理集中路線的效率原則：同一天的東西比較（Gevrey 的石灰岩土 vs. Chambolle 的黏土表土）在相鄰時間品嚐才有最清晰的風土辨識效果——如果今天 Gevrey、三天後再回到 Chambolle，記憶已衰退就失去「即時比較參照」。此外，布根地道路窄、停車場地有限，集中地域的排程也大幅減少移動時間（特別是 Grands Crus 林道沿線，如 D122 夜丘特級園之路，步行即可覆蓋多個特級園）。'
      }
    ]
  },

  'm15-l2': {
    type: 'quiz', title: '🧠 收藏組合構建策略知識檢測',
    questions: [
      {
        type: 'single',
        question: '「飲用 vs. 投資」的個人收藏定位如何影響選酒策略？',
        options: ['A. 投資收藏和飲用收藏選酒策略完全相同', 'B. 飲用導向：注重個人口味偏好、多樣性和性價比（包含村莊級/一級園的「日飲酒」）；投資導向：集中稀缺度高、市場需求穩定的特級園/頂尖生產者（DRC/Leroy/Rousseau）、關注 Liv-ex 流動性；多數藏家採取混合策略（80% 飲用 + 20% 投資），或隨資產增加逐步提高投資比例', 'C. 純投資收藏不需要了解葡萄酒品質', 'D. 飲用收藏只買便宜酒'],
        correct: 1,
        explanation: '個人收藏定位的實踐框架：「飲用窗口寬度」是飲用導向的關鍵考量——選擇不需要等 20 年的酒（村莊級/易飲年份）確保近期愉快飲用；「Liv-ex 流動性」是投資導向的核心指標——能在 Liv-ex 或主要拍賣行快速出售、有明確的二手市場定價。常見錯誤：純粹因「聽說是好投資」而購買自己完全無興趣的酒款，結果忽視儲存維護、不追蹤市場，最終錯過最佳出售時機。個人對酒的了解和持續關注是維持投資紀律的基礎。'
      },
      {
        type: 'single',
        question: '建立個人布根地收藏的「垂直深度 vs. 水平廣度」策略選擇是？',
        options: ['A. 永遠選擇水平廣度（越多酒莊越好）', 'B. 垂直深度（Vertical Depth）：同一生產者多個年份——優勢是能追蹤酒莊/年份演化，品飲體驗具研究深度；水平廣度（Horizontal Breadth）：同一年份多個生產者/地塊——優勢是同年份風土比較，品質基準建立；多數嚴肅藏家的最終收藏是兩者的層次結合（2-3個深度酒莊 + 廣泛的年份/地塊探索）', 'C. 只買一款酒的垂直是最佳策略', 'D. 水平廣度永遠勝過垂直深度'],
        correct: 1,
        explanation: '收藏哲學的實踐智慧：「垂直」的樂趣在於見證一個地塊如何跨越氣候變化表達自我——追蹤同一款酒 10 個年份，你能看到黑皮諾的「年份個性」；「水平」的樂趣在於「同一年份的地質辯證」——為什麼 2015 的 Chambertin 和 Chapelle-Chambertin（相鄰 200 公尺）有完全不同的氣質？通常的演化路徑：入門期（廣泛探索 Horizontal）→ 成長期（找到偏好生產者 + 地塊，建立 Vertical）→ 成熟期（深度 Vertical + 稀缺廣度兼顧）。'
      },
      {
        type: 'multiple',
        question: '「性價比高的布根地收藏發現策略」包括？（多選）',
        options: ['A. 關注「二線村莊（Secondary Village）」如 Marsannay、Fixin——有頂尖夜丘風土但低知名度，性價比高', 'B. 尋找「傑出生產者的村莊級（Village Level from Outstanding Domaine）」——如 Armand Rousseau 的 Gevrey-Chambolle 村莊級，具名莊品質但非特級園價格', 'C. 只買 DRC 才算收藏', 'D. 探索年輕新興生產者（Emerging Producer）——2010年代後涌現的新世代布根地釀造師（如 Benjamin Leroux、Chanterêves）品質高但知名度尚未完全反映在價格'],
        correct: [0, 1, 3],
        explanation: '「Price-Quality Gap」發現的三條路徑（全部正確）：二線村莊（A）是最成熟的性價比策略——Marsannay 的頂尖紅酒（如 Sylvain Pataille）在同年份 vs. 夜丘村莊級的盲品中常有出色表現，但價格差 30-50%；名莊村莊級（B）是「品牌背書的地塊探索」——名莊的 AOC Bourgogne 通常使用年輕樹齡或次要地塊的葡萄，但釀造工藝完全相同，是「入門名莊最實惠」的路徑；新興生產者（D）是「早期發現溢價」機會——在市場還未廣泛認知時建立關係和庫存，但風險在於年輕生產者品質的可靠性尚未有長期驗證記錄。'
      },
      {
        type: 'single',
        question: '個人酒窖的「旋轉饋入（Cellar Rotation）」管理原則是？',
        options: ['A. 所有酒都儲存到最長可能年份再喝', 'B. 根據每款酒的估計「飲用窗口（Drinking Window）」設定「提醒品嚐日期」——在窗口開始前 1 年先試一瓶確認進度；窗口期到達時應有計劃地飲用，避免在頂峰之後才開瓶（過了飲用高峰的布根地通常迅速走下坡）', 'C. 隨機選擇開瓶時機', 'D. 越陳年的酒永遠越好喝'],
        correct: 1,
        explanation: '飲用窗口管理的現實：布根地頂尖紅酒的「飲用窗口」通常是開放的——例如 Rousseau Chambertin 2010 的預估窗口是 2022-2045，在此期間會持續演化。「過熟（Over the Hill）」的布根地喝起來：果香消失、酸度主導但失去平衡支撐、口感空洞——這是無法補救的損失，浪費了多年的儲存成本和等待。現代的解決方案：Cellar Tracker（最主流的藏酒管理軟體）允許設定「提醒日期」和記錄每次品嚐（包其他藏家筆記），是個人酒窖旋轉管理的最有效工具。'
      }
    ]
  },

  'm15-l3': {
    type: 'quiz', title: '🧠 餐廳酒單設計知識檢測',
    questions: [
      {
        type: 'single',
        question: '米其林餐廳布根地酒單的「深度 vs. 廣度」設計邏輯是？',
        options: ['A. 只選最貴的酒', 'B. 以「深度布根地（特級園垂直系列）」作為聲望錨點吸引核心藏家/美食者，同時配置「廣度布根地（各地塊代表款）」提供入門到進階的完整體驗，並確保各價格段都有布根地選項（村莊級作為性價比選項，一級/特級作為晚宴選擇）', 'C. 米其林餐廳不需要布根地', 'D. 酒單越短越好'],
        correct: 1,
        explanation: '高端餐廳酒單設計的布根地策略：「錨點酒款（Anchor Bottles）」如 DRC RC 或 Leroy Musigny 的出現本身就是酒單聲望的宣示——即使很少有客人實際點（因價格），其存在升高了整份酒單的感知品質；「廣度」保障了「入門布根地藏家」有合理選項（不只是一瓶幾千歐元的選擇）；「每酒杯（By-the-Glass）布根地」（通常是村莊級）讓隨時嘗試布根地的新客人有低風險入口。結合主廚菜單（Tasting Menu）搭配的「侍酒師推薦套餐」是最當代米其林餐廳的推廣方式。'
      },
      {
        type: 'single',
        question: '「酒單標注（Wine List Notation）」的關鍵資訊包括什麼？',
        options: ['A. 只需標注酒名', 'B. 標準高端酒單應包括：酒莊名稱、AOC（地塊等級）、年份、酒點數量（瓶/半瓶/Magnum 等選項）、描述性簡介（3-5 行風土/風格說明）；對布根地還應標注「地塊位置」（村莊/一級園名/特級園）因為對知情買家，地塊本身是價值的核心指標', 'C. 年份不需標注', 'D. 酒單不需要任何描述'],
        correct: 1,
        explanation: '布根地酒單標注的信息完整性：布根地的「AOC 等級體系」對不熟悉的客人可能是複雜的迷宮，但對知情藏家是精確的價值索引——「Gevrey-Chambertin Premier Cru Les Saint-Jacques, Armand Rousseau, 2015」包含的每個信息片段都在傳遞具體的質量和地位信號。現代高端餐廳會在酒單 app 或電子酒單中提供更豐富的地塊地圖和背景介紹，紙質酒單則更精簡但必須保有核心標注要素。侍酒師的口頭補充（VIu verbal）是完成信息傳遞的最靈活工具。'
      },
      {
        type: 'multiple',
        question: '設計布根地白酒與菜單搭配的核心原則包括？（多選）',
        options: ['A. 頂尖 Meursault/Puligny 的「氧化還原潛力（Reductive/Oxidative Style）」需考量，影響配牛油/魚/奶油醬菜的搭配效果', 'B. Chablis 的高酸/礦石感特別適合生蠔/海鮮/酸性鮮味菜', 'C. 布根地白酒只能配法式料理', 'D. Bâtard-Montrachet 的飽滿酒體可支撐龍蝦/白松露等濃郁料理'],
        correct: [0, 1, 3],
        explanation: '布根地白酒配餐的風格差異應用：Chablis（B）——高酸+礦石感+無橡木，是海鮮的「經典搭配科學」——食物中的碘鮮味被酸度清潔，礦石感提供和諧共鳴；Meursault/Puligny 的釀造風格差異（A）——Lamy 或 Roulot 的還原型（Reductive）帶榛果感的更適合奶油醬汁，Coche-Dury 的氧化培養感則可配烤魚；Bâtard（D）——作為特級園，其 13.5%+ 和深厚酒體可承擔最濃郁的菜式。C（只能配法式料理）是不正確的文化限制——台灣的粵式白切雞搭配 Puligny 一級是著名的「跨文化美食配對成功案例」。'
      },
      {
        type: 'single',
        question: '「半瓶（Half Bottle/375ml）」在高端布根地酒單的戰略價值是？',
        options: ['A. 半瓶只是節省成本的選項', 'B. 半瓶允許一頓晚餐品嚐更多不同酒款（無需喝完整瓶）——對多道菜搭配不同酒款的品鑑晚宴設計非常重要；頂尖布根地（DRC/Leroy）的半瓶在二手市場有時比全瓶溢價，因供給稀缺', 'C. 半瓶在布根地不被接受', 'D. 半瓶陳年速度和全瓶完全相同'],
        correct: 1,
        explanation: '半瓶的多重維度：品鑑靈活性（B記述）是最直接的餐廳策略價值；陳年速度差異：半瓶的氧化速度約是全瓶的 1.5-2 倍（因為酒液體積/空間比更高），因此在存儲布根地時，半瓶需要更早飲用；稀缺溢價：頂尖布根地的「半瓶裝（37.5cl）」產量本就比全瓶少得多（部分酒莊甚至不生產），這使它們在二手市場具有特殊的稀缺性吸引力。餐廳購入半瓶進行存倉時需注意：在飲用窗口比全瓶提前 2-4 年開瓶。'
      }
    ]
  },

  'm15-l4': {
    type: 'quiz', title: '🧠 Level 3 綜合複習知識檢測',
    questions: [
      {
        type: 'single',
        question: '布根地葡萄酒體系中「風土（Terroir）」的最精準定義是？',
        options: ['A. 風土只指土壤類型', 'B. 風土是「地塊的所有物理環境因素之綜合」——土壤（地質結構/礦物組成/排水性）、地形（坡度/坡向/海拔）、氣候（區域氣候/中氣候/微氣候）、葡萄根系與下層土壤的互動——所有因素協同創造了地塊不可複製的「地理特徵表達（Sense of Place）」', 'C. 風土只包含氣候', 'D. 風土是行銷術語，無科學基礎'],
        correct: 1,
        explanation: '風土的科學綜合性：L3 的核心觀念是「風土不是單一維度」——任何試圖將布根地差異歸因於單一因素（只是土壤、只是氣候）的簡化都是不準確的。土壤（Kimmeridgian 灰岩/紅色氧化鐵土/粘土石灰岩混合）、坡度（最佳 3-8%，排水不積水）、坡向（東南向最大早晨陽光）、高度（200-300m 最佳）的協同效應創造了同在夜丘的 Chambertin 和 Latricières-Chambertin 在品質上的可量化差距——儘管它們的實際距離只有 300 公尺。'
      },
      {
        type: 'multiple',
        question: '「DRC（Domaine de la Romanée-Conti）」作為布根地頂點的綜合原因包括？（多選）',
        options: ['A. 獨占特級園的地理集中性（RC、La Tâche 均為壟佔地塊 Monopole）', 'B. 生物動力農耕堅持和低產量（每公頃產量刻意低於法規上限 50-60%）', 'C. 全球最多市場廣告投入', 'D. 一致的極致現時定義品質標準（超過 200 年的品質記錄和傳承）'],
        correct: [0, 1, 3],
        explanation: 'DRC 神話的結構性支撐（廣告 C 為假因素）：壟佔地塊（A）——RC 和 La Tâche 作為法定壟佔地（Monopole），唯一生產者確保了無論市場需求多強，供量永遠固定，稀缺性是制度性的；低產量（B）——大量刪除結果（Green Harvest）和老樹的低天然產量，確保每公升葡萄汁帶有最高的風土濃縮表達；品質記錄（D）——Lalou Bize-Leroy（的管理期）和 Aubert de Villaine（50 年管理）建立的一致頂點品質「歷史記錄」是信任的最終基礎——買家知道 DRC 過去 50 年的品質水平，大幅降低了未來年份的購買不確定性。DRC 幾乎不做廣告（C 為假），其聲望依靠品質口碑自然建立。'
      },
      {
        type: 'single',
        question: '綜合布根地 L3 全程學習，「布根地學習者」最應避免的系統性認知誤區是？',
        options: ['A. 深入了解各地塊的歷史背景', 'B. 「等級越高 = 品質越好」的簡化思維——在布根地，一個傑出生產者的村莊級（如 Rousseau Gevrey Village）往往比一個平庸生產者的特級園（同地塊不同生產者）品質更高；「誰種」的生產者因素在布根地往往比「在哪種」的地塊等級更重要，兩者的協同才是最高品質的保障', 'C. 學習生物動力農耕理論', 'D. 研究年份報告'],
        correct: 1,
        explanation: '「等級 ≠ 品質保證」的布根地根本教訓：L3 的所有模組都在用不同角度強調同一個真理：品質是生產者技能 × 地塊潛力 × 年份條件的函數，沒有一個因素可以單獨決定品質。實例：Clos Vougeot 特級園有 83 個持有者，最好的（Méo-Camuzet, Anne Gros）和最差的品質差距可以有兩個等級；而 Nicolas Rossignol 的 Volnay 一級園 Taillepieds 在盲品中常被評為高出「名義上更高等」的特級園水平。最重要的學習工具：生產者評估（Producer Evaluation）是任何嚴肅布根地購買決策的前置步驟。'
      },
      {
        type: 'single',
        question: '「布根地 vs. 其他黑皮諾產區（奧勒岡/布根地/新西蘭/加州）」盲品識別的最可靠指標是？',
        options: ['A. 顏色深淺（布根地永遠最淡）', 'B. 組合判斷：酸度水平（布根地通常更高）+ 單寧質地（更絲滑/顆粒細緻）+ 風土礦石感（更明顯的地下地質表達）+ 酒精度（布根地頂尖通常 13-13.5%，新世界往往 14-15%）+ 三次香氣比例（優質老年份布根地的泥土/腐葉/蘑菇感比新世界陳年快）', 'C. 只看顏色就能識別', 'D. 新世界黑皮諾永遠比布根地品質差'],
        correct: 1,
        explanation: '黑皮諾產區盲品的「多指標組合」：沒有任何單一指標能 100% 識別布根地，組合判斷是正確方法。酸度（高酸傾向布根地，但冷涼奧勒岡也高酸）；酒精（低酒精布根地，但這是氣候/採收時間差異）；礦石感（難以偽造的地質風土表達，特別是 Chambolle/Vosne 的石灰岩礦石）；三次香氣速度（布根地沙石土地塊的成熟曲線和新世界不同）；單寧質地（布根地頂尖的「絲絨感」來自完整/均質的多酚聚合，新世界在陳年前常較「顆粒感更明顯」）。'
      }
    ]
  },

  'm15-l5': {
    type: 'quiz', title: '🧠 認證考試準備知識檢測',
    questions: [
      {
        type: 'single',
        question: '準備布根地相關葡萄酒認證考試（如 WSET L4 Diploma 或 CMS Sommelier）的最有效策略是？',
        options: ['A. 只閱讀教科書，不實際品嚐', 'B. 理論與實踐並進的整合學習：大量結構化品嚐（系統性覆蓋不同地塊/生產者/年份）+ 理論知識（地質圖/法規/生產者史）+ 模擬考（Timed Practice Tasting + Multiple Choice）+ 同儕品鑑討論組（Tasting Group）——任何一項單獨都不足以應對頂尖認證', 'C. 認證考試不需要實際品嚐', 'D. 只背誦生產者名稱就足夠通過考試'],
        correct: 1,
        explanation: 'WSET/CMS 的布根地考核重點：WSET L4 Diploma 的「D2 Wine Production」和「D3 Wines of the World」模塊都有大量布根地題型；CMS 高級考試（Advanced 和 Master Sommelier）以盲品為核心——在 25 分鐘內完成 6 款葡萄酒盲品（含布根地）的「系統性感官分析＋結論評估＋侍酒建議」，要求感知和語言表達的雙重準確性。研究顯示：只閱讀理論通過盲品考試的成功率極低（感知技能必須經過大量實踐訓練），而只注重品嚐忽略理論的考生在「解釋性題目」（為什麼這款酒展現特定特征？）中失分嚴重。'
      },
      {
        type: 'multiple',
        question: '面對布根地認證考試的盲品題目，系統性答題結構應包括？（多選）',
        options: ['A. 外觀（顏色/深淺/清澈度）', 'B. 香氣（強度/一次/二次/三次香氣描述）', 'C. 口感（酸度/單寧/酒體/收尾長度/複雜度）', 'D. 評估結論（品質評級/陳年潛力/飲用建議/產區/品種/年份推論）'],
        correct: [0, 1, 2, 3],
        explanation: 'SAT（Systematic Approach to Tasting）四大支柱（全部必要）：WSET 的 SAT 框架是業界標準，四個維度缺一不可——目的是讓所有品鑑語言可以被「去語境化理解（Context-Independent）」：外觀（A）提供初步線索（顏色=年齡/品種）；香氣（B）是最豐富的風土信息來源；口感（C）確認香氣線索並提供結構分析；結論（D）整合全部觀察，做出推論判斷，是「分析轉化為行動」的最後一步。缺少任何一項，答案樣板完整性就不符合評分標準——即使其中某一項你的描述很精彩，也無法彌補缺失項的失分。'
      },
      {
        type: 'single',
        question: '布根地 Level 3 學習旅程中，區分「初級知識（L1）→ 中級（L2）→ 高級（L3）」的本質躍升是？',
        options: ['A. 只是記憶更多名字', 'B. L1：識別（認識布根地的存在和基本地理）→ L2：理解（理解等級體系/主要品種/代表生產者）→ L3：整合分析（能針對特定情境做多維度的判斷——投資/配餐/收藏/風土比較），知識從「記憶」到「應用」到「創造性綜合」的認知層次躍升', 'C. L3 只是 L2 的重複', 'D. 每個等級只多學習幾個酒莊'],
        correct: 1,
        explanation: 'Bloom 認知層次在葡萄酒學習的體現：L1（識別/記憶 Remembering）→ L2（理解/分析 Understanding/Analyzing）→ L3（評估/創造 Evaluating/Creating）符合 Bloom 教育分類法的認知發展模型。L3 的「創造性綜合」展現在本課程的所有模組中：不只是「Chambertin 是特級園」（L1），也不只是「Chambertin 由石灰岩土形成」（L2），而是「對投資者而言，在當下市場環境下，Chambertin 的特定生產者 A vs. B，分別在哪個年份、以何種倉儲條件購入，能在未來 10 年實現最優的飲用和流動性平衡」（L3）。這種「情境適應性判斷能力」是 L3 的核心能力培養目標。'
      },
      {
        type: 'single',
        question: '完成 Bourgogne Level 3 課程後，持續精進布根地知識的長效學習路徑是？',
        options: ['A. Level 3 畢業後不需要繼續學習', 'B. 多維度持續精進：① 定期品鑑（每月至少 4-6 款，有意識地做記錄）② 追蹤年份進展（Burghound/Vinous 的年度報告）③ 訂閱 BIVB 資訊（官方年份/市場更新）④ 建立品鑑社群（同儕、Tasting Group）⑤ 定期拜訪布根地（實地驗証理論）⑥ 針對感興趣的模塊深化（如特定地塊歷史、生物動力實踐）——葡萄酒知識是「活的系統」，每年都有新年份/新生產者/市場變化需要更新', 'C. 只需等待下一個 Level 課程開始', 'D. 閱讀所有書籍即可完成布根地學習'],
        correct: 1,
        explanation: '葡萄酒知識的「持續更新性」：布根地不是靜態知識體系——每年的新年份都在更新「哪個生產者在哪個地塊因何原因展現最佳狀態」的記錄；氣候變遷（M12 的主題）使過去 30 年有效的「年份判斷指標」在 2010s 後需要重新校準；新興生產者（M15-l2 提到）的出現意味著固定的「必知清單」需要持續補充。葡萄酒頂尖從業者（MS/MW、頂尖侍酒師）的共同特點：他們在完成所有認證多年後，仍維持每週系統性品嚐的習慣——因為感知技能和品質判斷精準度只在持續使用中維持，否則快速退步。'
      }
    ]
  }
}

// ── 注入 M15 課程 Quiz ──────────────────────────────────────
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
  ['advanced-m15.json', 'm15-l1'],
  ['advanced-m15.json', 'm15-l2'],
  ['advanced-m15.json', 'm15-l3'],
  ['advanced-m15.json', 'm15-l4'],
  ['advanced-m15.json', 'm15-l5'],
]

console.log('=== 布根地 L3 Quiz 注入 — M15 綜合案例 ===\n')
let ok = 0
for (const [file, lid] of pairs) {
  if (QUIZ_MAP[lid] && injectQuiz(file, lid, QUIZ_MAP[lid])) ok++
}
console.log(`\n完成：${ok}/${pairs.length} 課程 Quiz 已注入`)

// ── 標記 m15-l5 為期末考 ──────────────────────────────────
console.log('\n=== 標記 m15-l5 為期末考 ===\n')
const m15path = path.join(BASE, 'advanced-m15.json')
const m15data = JSON.parse(fs.readFileSync(m15path, 'utf8'))
const l5 = m15data.lessons.find(l => l.id === 'm15-l5')
if (l5) {
  l5.isFinalExam = true
  l5.quizBankPath = '/bourgogne/data/courses/level3/quiz-bank.json'
  l5.finalExamTitle = '📋 Level 3 綜合評量'
  fs.writeFileSync(m15path, JSON.stringify(m15data, null, 2), 'utf8')
  console.log('✅ m15-l5 isFinalExam 標記完成')
} else {
  console.log('⚠️  找不到 m15-l5')
}

// ── 建立 quiz-bank.json（30 題，跨 M1–M15）──────────────────
console.log('\n=== 建立 quiz-bank.json（30 題）===\n')
const quizBank = {
  title: 'Bourgogne Level 3 綜合評量',
  description: '涵蓋 M1–M15 全模組，共 30 題',
  passingScore: 70,
  questions: [
    // M1 風土科學
    {
      id: 'qb-m1-1', source: 'M1', type: 'single',
      question: '布根地「Côte d\'Or（黃金丘）」的地質基盤主要由什麼岩石構成？',
      options: ['A. 花崗岩', 'B. 侏羅紀石灰岩（Jurassic Limestone）和泥灰岩（Marl）', 'C. 玄武岩', 'D. 砂岩'],
      correct: 1,
      explanation: '侏羅紀石灰岩（約 1.5 億年前的海洋沉積，富含礦物質）是布根地風土獨特性的地質基礎，其礦物滲透性和根系互動為葡萄藤提供獨特的礦石感特徵。'
    },
    {
      id: 'qb-m1-2', source: 'M1', type: 'single',
      question: '夜丘（Côte de Nuits）相比伯恩丘（Côte de Beaune）在風土上最大的差異是？',
      options: ['A. 夜丘完全沒有白酒生產', 'B. 夜丘的特級園幾乎全以黑皮諾為主（15 個特級園），土壤以深色黏土-石灰岩混合為特色，有助於黑皮諾的結構和陳年潛力；伯恩丘特級園包含多個白酒特級園（Montrachet 系列）', 'C. 兩者地質完全相同', 'D. 伯恩丘只生產紅酒'],
      correct: 1,
      explanation: '夜丘 vs. 伯恩丘的品種/風土分工是布根地地理的核心知識點，解釋了為何布根地最偉大的紅酒均來自夜丘（Chambertin、Musigny、Romanée-Conti），而最偉大的白酒均來自伯恩丘南端（Montrachet、Bâtard、Corton-Charlemagne）。'
    },
    // M2 名莊解析
    {
      id: 'qb-m2-1', source: 'M2', type: 'single',
      question: '「DRC（Domaine de la Romanée-Conti）」擁有兩個壟佔特級園（Monopole），分別是？',
      options: ['A. Chambertin 和 Musigny', 'B. Romanée-Conti（1.81 公頃）和 La Tâche（6.06 公頃）', 'C. Richebourg 和 Échézeaux', 'D. Corton 和 Montrachet'],
      correct: 1,
      explanation: 'DRC 的兩個壟佔特級園是布根地二手市場最核心的稀缺資產：RC（1.81 ha, 年產約 5,000 瓶）和 La Tâche（6.06 ha, 年產約 18,000 瓶）只有 DRC 這一個生產者，稀缺性是制度性的，與市場需求無關。'
    },
    {
      id: 'qb-m2-2', source: 'M2', type: 'single',
      question: '「Maison Leroy（勒華酒莊）」在布根地的雙重身份是？',
      options: ['A. 只是一個 Négociant', 'B. 同時是：① Négociant（酒商，購買葡萄或葡萄酒進行培養）② Domaine Leroy（自有生物動力葡萄園，1988 年 Lalou Bize-Leroy 從 DRC 退出後建立），其村莊級（如 Chambolle Village）因極低產量和完美品質，定價常超過其他酒莊的特級園', 'C. 只是一個農民酒莊', 'D. Leroy 是政府機構'],
      correct: 1,
      explanation: 'Leroy 的雙身份反映了布根地「酒商 vs. 酒莊」界限的典型模糊案例——Lalou Bize-Leroy 建立 Domaine Leroy 後，採用生物動力農耕和極低產量（每公頃 12-18 百升，為法規上限的 25-30%），使即使是村莊級的品質達到業界頂尖。'
    },
    // M3 年份評估
    {
      id: 'qb-m3-1', source: 'M3', type: 'single',
      question: '「2015 布根地年份」在業界評分中的定位是？',
      options: ['A. 2015 是近年最差年份', 'B. 2015 是近 20 年布根地最受讚譽的「偉大年份」之一——溫暖乾燥的季節帶來完美成熟度，黑皮諾呈現深厚果香 + 精緻酸度平衡，陳年潛力極佳，被 Burghound 和 Vinous 廣泛評為 96-99 分', 'C. 2015 是普通年份', 'D. 2015 的布根地已全數售罄，無法評估'],
      correct: 1,
      explanation: '2015 布根地的特徵：充足的陽光（葡萄酚類完全成熟）+ 有效的酸度保留（7-8 月的涼夜）= 理想的「成熟度與活力平衡」；對投資者：2015 的頂尖布根地已在全球市場快速升值，仍持有者處於有利的 Hold 位置；對飲用者：頂尖款 2026-2030 才進入最佳飲用窗口。'
    },
    {
      id: 'qb-m3-2', source: 'M3', type: 'single',
      question: '「霜凍（Frost）」對布根地的威脅主要發生在哪個月份，後果是？',
      options: ['A. 12 月，影響儲存', 'B. 4-5 月（春季芽吐時期）——若晚霜在芽後拂晨摧毀新生嫩芽，可造成該年份最多 60-90% 的產量損失（2016、2021 年均有嚴重霜凍事件），是布根地產量最不可預測的自然風險', 'C. 8 月，只發生在海拔高地區', 'D. 霜凍在布根地不是問題'],
      correct: 1,
      explanation: '春季霜凍的破壞機制：黑皮諾和霞多麗是早萌品種（相比Cabernet更早），在4-5月的「芽吐窗口」內部分新嫩芽對低溫极其敏感（-2°C 即可凍死）；霜凍後果：部分藤株需用「次生芽（Secondary Bud）」替補，產量大幅減少而果實成熟度通常較低；近年3月底/4月初的氣候暖化使葡萄提前萌芽，而春季霜凍頻率並未同步減少，形成雙重風險提升。'
    },
    // M4 地質土壤
    {
      id: 'qb-m4-1', source: 'M4', type: 'single',
      question: '「Chambolle-Musigny 的土壤特徵」如何影響其黑皮諾的風格？',
      options: ['A. 幾乎沒有影響', 'B. Chambolle 含有相對較高的磁性石灰岩和薄層黏土，排水良好，成就了「精緻、花香為主（Floral-Forward）、單寧絲滑」的風格——被稱為布根地最「女性化」的村莊；相比鄰近的 Gevrey（更深厚黑色黏土）風格更輕盈優雅', 'C. Chambolle 的土壤和 Gevrey 完全相同', 'D. Chambolle 以白酒著名'],
      correct: 1,
      explanation: 'Chambolle vs. Gevrey 的地質風格對比是布根地風土課程的典型教學案例：Chambolle 的淺薄白色石灰岩土讓 Les Amoureuses（一級）和 Musigny（特級）展現了布根地最精緻的黑皮諾表達；Gevrey 的深色富含有機質黏土為 Chambertin 提供了更雄渾的骨架。地質決定品種表達，這是布根地風土論的核心命題。'
    },
    {
      id: 'qb-m4-2', source: 'M4', type: 'single',
      question: '「坡向（Aspect/Orientation）」如何在布根地影響葡萄成熟度？',
      options: ['A. 坡向在布根地沒有重要性', 'B. Côte d\'Or 的最佳地塊主要為「東南坡向（East to Southeast-Facing）」——最大化接受早晨（8-12 時）的陽光，避免下午過度高溫（緯度 47°N，中午後的直射也有相當強度），同時保護葡萄不受北風使地塊管理精細化的能力', 'C. 西向坡向在布根地最優', 'D. 坡向只影響白酒生產'],
      correct: 1,
      explanation: '東南向坡的成熟策略：布根地緯度高（47°N），太陽輻射角度較低，早晨陽光的有效熱量積累時間更長；東南向坡在 8-14 時提供最高光照強度（太陽弧線的最佳覆蓋），避免了西向坡的「午後烤曬」（過熱 + 蒸散損失）。特級園和最佳一級園的坡向分析確認：Chambertin、Musigny、Montrachet 均位於最佳東至東南向的中坡位置，這不是巧合，而是幾百年農業選擇的自然篩選結果。'
    },
    // M5 釀造技術
    {
      id: 'qb-m5-1', source: 'M5', type: 'single',
      question: '「整串發酵（Whole Cluster Fermentation）」在布根地的爭議性是？',
      options: ['A. 整串發酵在布根地從不使用', 'B. 整串（保留梗，含木質素完整葡萄一起發酵）可增加酒的結構感、清新度和自然酸度（梗帶來植物性單寧）；部分布根地傳統派（Dujac, Rousseau 部分）支持使用，認為豐富複雜度；反對派認為梗增加不必要的苦澀感；使用比例（0-100% 整串）因年份、地塊、生產者哲學而差異極大', 'C. 整串發酵強制帶來負面效果', 'D. 只有大型酒商使用整串'],
      correct: 1,
      explanation: '整串 vs. 去梗（Destemming）的現代辯論：整串的香氣特徵（花香更複雜、香料感更豐富）和結構特性（天然單寧骨架、清新酸度）符合部分傳統布根地美學；但梗的成熟度必須達標（未熟梗 = 強烈的草本苦澀），因此高比例整串需要非常成熟、健康梗才能成功。這也是為什麼同一生產者在不同年份可能使用不同整串比例——氣候決定梗的成熟度，成熟度決定整串的可用比例。'
    },
    {
      id: 'qb-m5-2', source: 'M5', type: 'single',
      question: '「巴里克（Barriques，228 升橡木桶）」在布根地黑皮諾培養中的標準使用方式是？',
      options: ['A. 全部使用 100% 新桶', 'B. 頂尖布根地通常使用「分比例混合（Combination）」：特級園 30-50% 新桶（其餘二手；三手桶），村莊級 0-15% 新桶——新桶比例越高，橡木影響越強（香草/烤麵包感）；傳統派傾向低新桶比例（10-20%）以保留風土純粹性', 'C. 所有布根地都使用法國橡木以外的其他桶種', 'D. 布根地不使用橡木桶培養'],
      correct: 1,
      explanation: '新桶比例的布根地哲學：Burgundy 221 的「地塊第一」原則要求橡木感後退為服務性配角，而非主角——過度的橡木感（>50% 新桶）遮蔽了精緻地塊風土的細節。對比：波爾多名莊通常 100% 新桶，橡木感是「品質標誌」之一；頂尖布根地的橡木克制（低新桶）反映了「風土表達優先」的核心美學價值觀。新桶的另一功能：微氧化（Micro-oxygenation），穩定顏色、柔化單寧——因此哪怕是低新桶比例，也要確保桶的品質（良好桶商和適當烘焙程度）。'
    },
    // M6 特級園深度
    {
      id: 'qb-m6-1', source: 'M6', type: 'single',
      question: '「Chambertin（香貝坦）」和「Chambertin Clos de Bèze（香貝坦貝日莊）」的關係是？',
      options: ['A. 完全相同的地塊', 'B. Clos de Bèze（15.4 ha）是 Chambertin（28.1 ha）的北鄰特級園，兩者風格相近但不同；Clos de Bèze 的酒可以選擇標注為「Chambertin Clos de Bèze」（保留完整稱呼）或單純標注「Chambertin」（降格稱呼），但 Chambertin 的酒不能標注為 Clos de Bèze', 'C. 兩個地塊在不同村莊', 'D. Clos de Bèze 是 Chambertin 的一部分'],
      correct: 1,
      explanation: '這個不對稱標注關係反映了歷史上 Clos de Bèze 的更高聲望（12世紀西多修道院早期種植，歷史優先性）：Clos de Bèze 在中世紀比 Chambertin 更先聞名，因此反向降格（Clos de Bèze → Chambertin）被允許作為合理的「聲望讓渡」；而 Chambertin（名字來自 Champ de Bertin，12 世紀農民 Bertin 的田地）後來居上，兩者現在市場地位並列頂尖（拿破崙特別偏愛 Chambertin）。'
    },
    {
      id: 'qb-m6-2', source: 'M6', type: 'single',
      question: '「Montrachet（蒙哈榭）」特級園為何被認為是世界最偉大的白酒地塊之一？',
      options: ['A. 因為它是最大的白酒特級園', 'B. Montrachet（7.99 ha）橫跨 Puligny 和 Chassagne 兩個村莊，坐落於最佳的石灰岩中坡位置，土壤礦物豐富度、坡度和排水條件創造了霞多麗的「完美表達條件」——在最佳生產者（DRC/Domaine Leflaive 等）手中，以複雜礦石感、陳年能力（30-50 年）和絕對的密度著稱', 'C. 因為它的面積最小', 'D. Montrachet 只在特定年份是特級園'],
      correct: 1,
      explanation: 'Montrachet 的物理條件分析：位於 Puligny-Montrachet 和 Chassagne-Montrachet 之間的中坡（Midslope），石灰岩母岩接近地表（排水近完美），Kimmeridgian 白色石灰岩（礦物質最豐富），坡度適中（東南向 7°）——此四重物理完美的疊加是少有地塊能複製的。DRC 的 Montrachet（0.68 ha，約 2,900 瓶）更以加入之後保持的釀造標準成為其白酒系列的頂點。'
    },
    // M7 投資市場
    {
      id: 'qb-m7-1', source: 'M7', type: 'single',
      question: '「Liv-ex Burgundy 150 指數」追蹤什麼？',
      options: ['A. 布根地葡萄農的收入', 'B. 150 個頂尖布根地酒款在 Liv-ex 交易平台上的成交價格走勢，提供市場整體的「可量化投資回報指標」；類似股市的大盤指數，是機構投資者和葡萄酒基金用來跟蹤布根地二手市場的核心工具', 'C. 布根地的葡萄種植面積', 'D. 布根地的旅遊人數'],
      correct: 1,
      explanation: 'Liv-ex Burgundy 150 的投資工具角色：該指數 2008-2024 年的表現顯示，布根地精品葡萄酒長期年化回報約 12-18%（不同計算期間），在可替代投資資產中表現突出；但需注意流動性（交易成本）和儲存費用對實際回報的侵蝕（通常 1.5-2% 年化）。指數的「成份酒款更新」（定期調整追蹤的 150 個酒款）也是觀察市場焦點演變的重要信號。'
    },
    {
      id: 'qb-m7-2', source: 'M7', type: 'single',
      question: '「葡萄酒投資的流動性風險（Liquidity Risk）」是什麼？',
      options: ['A. 葡萄酒可能喝完', 'B. 不像股票可以在任何時間以市價即時出售，精品布根地的出售需要：找到買家（等待拍賣時機/聯繫酒商）、支付手續費（15-25% 買方傭金）、等待付款——在短期資金需求時可能無法以理想價格快速變現，是實物葡萄酒投資的核心非金融風險', 'C. 流動性風險指葡萄酒液體可能外漏', 'D. 流動性風險在布根地市場中不存在'],
      correct: 1,
      explanation: '流動性風險的實際案例：若持有 $100,000 的頂尖布根地，在需要迅速套現時，最快的路徑（私下轉讓給酒商）通常以市價 20-30% 折讓成交；等待主要拍賣場次可能需要 3-6 個月；若市場恰好下行（如 2023 年布根地市場出現的 15-20% 調整），時間壓力更使折讓加深。布根地投資最適合「5-10 年以上視野」的長期資本配置，不適合需要隨時流動的資金。'
    },
    // M8 酒窖管理
    {
      id: 'qb-m8-1', source: 'M8', type: 'single',
      question: '布根地精品紅酒的理想長期儲存條件是？',
      options: ['A. 冰箱（2-4°C）最佳', 'B. 恆溫 10-14°C（±1°C），濕度 60-75%（防止軟木塞乾燥），無光線（UV 會導致光氧化），無振動（干擾沉澱物形成和酒的靜態發展），側放（保持軟木塞濕潤）——這五個條件共同確保布根地的最長陳年潛力', 'C. 室溫 25°C，方便隨時取用', 'D. 高濕度（95%+）是最重要的條件'],
      correct: 1,
      explanation: '五合一儲存條件的科學基礎：溫度恆定（避免熱脹冷縮對軟木塞的反覆擠壓）；濕度（軟木塞在乾燥環境會收縮，空氣進入 = 氧化風險）；無光（UV 分解 SO₂ 等保護成分，破壞芳香物質）；無振動（干擾正在形成的沉澱晶體，破壞老酒的靜態化學反應）；側放（液體接觸軟木塞使其保持膨脹密封）。其中「溫度恆定」比「低溫」更重要——長期 16°C 恆定 > 不恆定的 10-20°C 波動。'
    },
    {
      id: 'qb-m8-2', source: 'M8', type: 'single',
      question: '「酒標損壞（Label Damage）」對布根地瓶裝酒二手市場價值的影響是？',
      options: ['A. 標籤損壞完全不影響市場價值', 'B. 酒標是 Provenance（來源鑑定）和收藏完整性的重要指標：輕微划痕/少量污損折讓 5-10%；嚴重撕裂/大面積污損折讓 20-40%；標籤完全缺失折讓 50%+（且難以通過主要拍賣行上拍）——因為標籤狀態部分反映了整體儲存條件的謹慎程度', 'C. 酒標越舊越破代表陳年越長，所以溢價', 'D. 標籤損壞只影響外觀，不被考慮'],
      correct: 1,
      explanation: '標籤狀態的「代理信號」功能：在無法直接開瓶驗證的二手市場，標籤狀態是最容易被眼睛評估的「藏家謹慎度指標」——愛惜存倉的藏家通常標籤保存也更好（避免潮濕、避免撕扯）；雖然相關性不是完美的，但整體上「標籤完好 = 儘職存倉可能性更高」的購買者直覺在市場上形成了定價差距。頂尖拍賣行（Sotheby\'s/Christie\'s）有標準化的「標籤狀態描述量表（Label Condition Scale）」，是目錄中的固定欄位。'
    },
    // M9 盲品技術
    {
      id: 'qb-m9-1', source: 'M9', type: 'single',
      question: '「布根地頂尖黑皮諾」在盲品中最具識別性的嗅覺特徵組合是？',
      options: ['A. 黑醋栗 + 覆盆子 + 新橡木', 'B. 紅果（覆盆子/草莓/紅醋栗） + 花香（紫羅蘭/玫瑰） + 土地感（腐葉/蘑菇/地下室泥土） + 礦石感（鐵/燧石）——這個特定組合是布根地黑皮諾不同於新世界黑皮諾的核心嗅覺身份', 'C. 薄荷 + 桉樹 + 黑橄欖', 'D. 椰子 + 香草 + 奶油橡木'],
      correct: 1,
      explanation: '布根地黑皮諾的嗅覺「基因組」：典型如 Vosne-Romanée 的「玫瑰 + 鐵礦 + 覆盆子」三位一體是全球黑皮諾中最獨特的；Gevrey 偏向「泥土 + 黑色水果 + 甘草」；Chambolle 偏向「鮮花 + 紅果」——理解這個村莊內部的差異是識別布根地盲品地塊的第一步。相比之下，新世界黑皮諾更常見的是「新鮮草莓醬 + 新橡木（香草/丁香）+ 更圓潤飽滿的酒體」，缺少布根地的礦石/土地三次香。'
    },
    {
      id: 'qb-m9-2', source: 'M9', type: 'single',
      question: '「系統性盲品技術（Systematic Blind Tasting Approach）」的核心流程是？',
      options: ['A. 先猜年份再觀察', 'B. 先觀察（顏色/深淺）→ 嗅覺（強度/香氣類型/一次/二次/三次）→ 口感（酸度/單寧/酒體/收尾）→ 初步評估（品質/陳年潛力）→ 最後推論（品種/產地/年份/生產者）——先「描述」再「推論」的順序避免先入為主的心理偏差', 'C. 只需要鑽研氣味，不需要看顏色', 'D. 系統性技術不適合布根地'],
      correct: 1,
      explanation: '「先描述後推論」原則的認知科學基礎：若先有生產者/年份的先入假設，大腦會啟動「確認偏誤（Confirmation Bias）」——傾向將感知到的特徵解釋為符合既有預設，而非客觀分析。先建立「無先驗的感知記錄」再做推論，能最大化盲品準確率。這也是 WSET SAT 和 CMS 評分標準要求「系統性記錄」的核認知邏輯——評分者看的是你的「推理過程」而非只是「最終答案」，即使最後結論錯誤，系統性推理過程也能得到部分分數。'
    },
    // M10 餐酒搭配
    {
      id: 'qb-m10-1', source: 'M10', type: 'single',
      question: '布根地紅酒（黑皮諾）與食物搭配的「經典配對」是？',
      options: ['A. 配烤羊排（紅肉）是最佳搭配', 'B. 「Coq au Vin（布根地紅酒燉雞）」是傳統的「酒食地域搭配」——家禽（適中蛋白質）+醬汁（葡萄酒為基礎的酸性）+蘑菇（土地感共鳴）與黑皮諾的輕盈酒體/高酸/絲滑單寧形成完美的重量匹配和風味和諧', 'C. 布根地紅酒只能配素食', 'D. 布根地紅酒最適合配海鮮'],
      correct: 1,
      explanation: '地域搭配（Regional Pairing）的邏輯：同一地域發展出的食物和葡萄酒往往具有天然和諧性——布根地的家禽/小牛肉（Veau）料理和黑皮諾並行發展了幾百年，蘑菇（在布根地森林和葡萄園附近天然生長）和黑皮諾的「土地感共鳴（Terroir Resonance）」是感官上可量化的一致性。此外，黑皮諾的「比波爾多更輕盈的酒體」使其可以搭配更廣泛的食物——包括三文魚（少見和紅酒搭配，但黑皮諾因單寧低、鐵礦感和魚是良好組合）。'
    },
    {
      id: 'qb-m10-2', source: 'M10', type: 'single',
      question: '「Meursault（默爾索）」村莊級霞多麗最適合搭配什麼風格的食物？',
      options: ['A. 因為高酸，最適合生蠔', 'B. Meursault 以「豐滿酒體 + 低酸（相比 Puligny）+ 奶油/榛果感 + 礦石」著稱，最適合搭配：奶油白醬魚料理（Beurre Blanc, Sole Meunière）、龍蝦奶油、奶油蘑菇義大利麵——食物的奶油圓潤感和酒的榛果奶油感形成「質地共鳴」', 'C. 因為甜美，最適合甜點', 'D. 完全不適合任何海鮮'],
      correct: 1,
      explanation: '質地共鳴（Textural Resonance）的配餐邏輯：Meursault 的「奶油榛果風格」（較高 bâtonnage/酒泥攪拌使酒更圓潤）和奶油醬汁的「口感質地」在口腔中形成了「相似質感的和諧感（Like-with-Like）」；同時，Meursault 的礦石感「切穿（Cut-Through）」奶油醬汁的油膩感，扮演了「清潔劑（Palate Cleanser）」的功能——這是評酒搭配中最受讚揚的配對動態之一。相比 Chablis 的高酸配海鮮是「對比配對（Contrast Pairing）」，Meursault+奶油是「和諧配對（Complete Pairing）」。'
    },
    // M11 生物動力
    {
      id: 'qb-m11-1', source: 'M11', type: 'single',
      question: '「生物動力農耕（Biodynamic Agriculture）」的根本哲學是？',
      options: ['A. 生物動力只是有機農業的另一個名字', 'B. Rudolf Steiner (1924) 的「農業課程（Agricultural Course）」奠基：農場是一個「自我滋養的有機體（Self-sustaining Organism）」，需要通過特定製劑（如 BD500 牛角糞肥）和農曆種植曆（Lunar Calendar）加強土壤生命力和植物與宇宙力量的連結，目標是恢復並強化土壤的「生命活力（Life Forces）」', 'C. 生物動力是現代科技發明的農法', 'D. 生物動力農耕禁止任何形式的施肥'],
      correct: 1,
      explanation: '生物動力的「系統性整體論（Systemic Holism）」：與有機農業（主要聚焦「不使用化學農藥/肥料」）不同，生物動力還包含積極的「促進活力」措施——BD500（牛角黃糞，增強土壤微生物）、BD501（石英粉，增強光合作用和果實芳香前驅物），以及嚴格按照種植曆（Root Day/Leaf Day/Flower Day/Fruit Day）安排農事和品鑑活動。在布根地，Domaine Leroy、Domaine de la Romanée-Conti（部分）、Leflaive 等頂尖酒莊採用生物動力農耕，為其品質哲學的核心部分。'
    },
    {
      id: 'qb-m11-2', source: 'M11', type: 'single',
      question: '生物動力農耕的實踐對布根地葡萄酒風味的假設影響是？',
      options: ['A. 科學完全確認生物動力提升品質', 'B. 嚴格的科學對照研究尚無定論，但實踐者（Leroy、DRC）的一致報告是：更活躍的土壤微生物群落（Microbiome）富集了更多土壤礦物質的植物風土表達，使最終酒款展現「更深刻的地塊特定性（Place-Specificity）」，在盲品中更易識別其具體地塊——尤其在繁複的礦石感和土地感上比慣行農耕更突出', 'C. 生物動力農耕被科學完全否定', 'D. 生物動力農耕只影響白酒'],
      correct: 1,
      explanation: '生物動力「風味提升」的科學爭議：2024 年現有最佳的「有效根據（Best Evidence）」是：生物動力農耕確實可測量地增加土壤微生物多樣性（Mycorrhizal fungi, bacterial richness），這在理論上支持了「礦物質 uptake 複雜性增加」的假設，但從土壤到杯中的直接因果鏈仍難以嚴格分離（有機農耕也有類似效果，很難只歸因於生物動力製劑）。最誠實的結論：生物動力農耕的頂尖推行者常產出布根地最被讚揚的酒款，相關性很高，但因果性 ongoing debate。'
    },
    // M12 氣候變遷
    {
      id: 'qb-m12-1', source: 'M12', type: 'single',
      question: '氣候暖化對布根地「採收時機（Harvest Timing）」的影響是？',
      options: ['A. 採收時機沒有明顯改變', 'B. 1970-2024 年的數據顯示，布根地平均採收日期提前約 3-4 週——1970s 的 10 月初採收，2010s-2020s 普遍 9 月初甚至 8 月底採收；最早記錄（2003 年，歷史性熱浪）是 8 月 18 日開始，遠超傳統窗口；提前採收趨勢直接改變了成熟度管理策略和標誌性年份模式', 'C. 布根地採收只發生在 11 月', 'D. 氣候暖化使布根地採收更安全'],
      correct: 1,
      explanation: '採收提前的複合影響：1) 採收決策窗口縮短——需要更精準地監測成熟度（糖分、酸度、酚類成熟）並更快速決策；2) 早採收 = 更少的蒸散水分流失，果串健康度通常更高；3) 傳統上「晚採收 = 更好濃縮度」的規則在暖年不適用（晚採 = 過熟 + 酸度崩潰）；4) 年份對比：1988/1990/1996 的「晚採」理想和 2015/2018 的「早採且優秀」顯示了年份特徵的系統性轉移，舊的年份判斷規則需要調整。'
    },
    {
      id: 'qb-m12-2', source: 'M12', type: 'single',
      question: '「海拔植種（Altitude Planting）」被視為布根地應對氣候暖化的策略之一，原因是？',
      options: ['A. 高海拔不影響溫度', 'B. 海拔每上升 100 公尺，氣溫約下降 0.65°C（絕熱遞減率）——在傳統農耕高度（200-300m）的 Côte d\'Or 之外，向北坡和更高位置（Hautes Côtes，300-450m）擴展種植可以補償暖化帶來的溫度上升，維持黑皮諾所需的充足生長季溫差', 'C. 高海拔只適合霞多麗', 'D. 海拔提升在布根地法規下不允許'],
      correct: 1,
      explanation: '海拔應對策略的地理限制：Côte d\'Or 的特殊地形限制了「向上移動」的可能性——最佳中坡（200-350m）已充分開發；Hautes Côtes de Beaune/Nuits 在高海拔（300-450m）確有冷涼特質，2013 年後因全球暖化而受到更多關注和投資（部分過去太冷的地塊現在達到成熟窗口）；更根本的地理挑戰：傳統的 Côte d\'Or 特級/一級園已完全種植，後退山頂的選項只適用於新開發地塊，不解決現有老樹的問題。'
    },
    // M13 拍賣行
    {
      id: 'qb-m13-1', source: 'M13', type: 'single',
      question: '「買方手續費（Buyer\'s Premium）」在葡萄酒拍賣中的典型比率是？',
      options: ['A. 1-3%，幾乎可忽略', 'B. 主要國際拍賣行（Sotheby\'s、Christie\'s）通常為成交落槌價的 15-25%（按累退制計算），加上可能的稅收，使買家的「全含成本」遠高於落槌價——應納入任何拍賣競標的「心理預算」', 'C. 買方無需支付任何手續費', 'D. 手續費只由賣家支付'],
      correct: 1,
      explanation: '累退制手續費的實際計算舉例：若落槌價為 $10,000，Sotheby\'s 的標準結構（以美國市場為例）：$0-$2,000 累進檔 25%，$2,001-$500,000 累進檔 20% → 此例的手續費約 $2,000；買家最終支出 $12,000，有效手續費率 20%。對高價布根地（落槌 $50,000+），累退制使手續費比率降至 18-19%。賣方另支付 10-15% 賣方傭金（不同行費率不同），因此拍賣行從一筆交易中賺取買賣雙方合計 25-40% 的佣金。'
    },
    {
      id: 'qb-m13-2', source: 'M13', type: 'single',
      question: '「Provenance（來源記錄）」在布根地二手交易中為什麼是核心文件要求？',
      options: ['A. Provenance 只是形式要求，對品質無影響', 'B. 完整的 Provenance（原始購買發票/倉儲溫度記錄/所有前持有者的委托文件）是識別「假酒（Counterfeit Wine）」和確認「良好儲存條件」的最主要防護文件——Rudy Kurniawan 假酒事件（2012年）後，主要拍賣行和頂尖藏家對 Provenance 的要求大幅提高', 'C. Provenance 文件只在歐洲市場需要', 'D. 只有 DRC 酒款需要 Provenance'],
      correct: 1,
      explanation: 'Post-Kurniawan 的 Provenance 要求升級：Rudy Kurniawan 的假酒案揭示了一個脆弱的信任漏洞——當時市場對「聲望收藏家背書」的信任過度依賴，缺乏更基礎的文件驗證。他通過偽造標籤、重填不好年份的酒入名貴年份瓶中，欺騙了業界最頂尖的買家超過 $35 million。Provenance 要求的現代標準：最初購買收據（酒莊/進口商直接開立）+ 所有中間轉手的書面記錄（完整的 Chain of Custody） = 最完整的真偽保護。'
    },
    // M14 品鑑術語
    {
      id: 'qb-m14-1', source: 'M14', type: 'single',
      question: '「Allen Meadows（Burghound）」在布根地評分生態中的特殊地位是？',
      options: ['A. Burghound 主要評分波爾多', 'B. Allen Meadows 是目前布根地專業評分社群中最受尊重的「布根地專家評論者」——其布根地垂直數據庫（包含 20,000+ 款的跨年份評分記錄）、評分風格（更重視「傳統布根地美學：精緻性/地塊特異性」而非「濃縮度/豐厚感」）使其成為嚴肅布根地藏家的首要評分參考', 'C. Burghound 已停止運營', 'D. Allen Meadows 使用 100 分制'],
      correct: 1,
      explanation: 'Burghound 的市場影響力基礎：Allen Meadows 於 2000 年創立 Burghound.com，是葡萄酒評分界最早的「布根地專門平台」之一；其訂閱制（非免費）反而強化了讀者群的「專業認真度」——訂閱者大多是認真的布根地藏家或業界人士，使其評分對「目標市場」（頂尖布根地購買者）的影響力超過覆蓋面更廣但布根地專注度更低的 Wine Spectator。Burghound 使用 100 分制，但等效換算：95 分 = 業界「傑出（Outstanding）」等級，對市場有顯著提價效應。'
    },
    {
      id: 'qb-m14-2', source: 'M14', type: 'single',
      question: '布根地品鑑中「礦石感（Minerality）」的精確感官描述是什麼？',
      options: ['A. 礦石感是一種甜味', 'B. 礦石感在嗅覺上表現為：火石/燧石（Flint，擊打石頭的煙燻氣息）、濕石板（Wet Slate）、鐵礦/血腥感（Iron/Metallic）；在口感上表現為：口腔特定部位的「電傳感（Electric Tingle）」、收縮感（不同於單寧）和「生唾液（Salivation）」刺激——綜合是一種「地質存在感（Geological Presence）」', 'C. 礦石感是橡木桶培養的結果', 'D. 礦石感只在白酒中存在'],
      correct: 1,
      explanation: '礦石感的感官科學：「礦石感」是葡萄酒描述中最受科學爭議的術語之一——感官研究者已識別多個可能的化學貢獻者（吡啶類化合物、微量金屬離子、含硫化合物如二甲基硫化物），但沒有單一分子被確認為「礦物感的源泉」。在布根地，Chablis 的礦石感（Kimmeridgian 石灰岩海洋化石土）和 Meursault 的礦石感（更深厚泥灰岩，表現為不同的礦物溫度感）是兩個最教學性的對比案例。礦石感在兩種顏色均可能存在（D 為假）——Chambolle 特級 Musigny 的礦石感是業界最著名的布根地紅酒礦石表達。'
    },
    // M15 綜合案例
    {
      id: 'qb-m15-1', source: 'M15', type: 'single',
      question: '「Gevrey-Chambertin」村莊以外最值得深入了解的布根地村莊（白酒）是？',
      options: ['A. AOC Beaune 村莊白酒', 'B. 「Puligny-Montrachet（普里尼-蒙哈榭）」因擁有全球最偉大的白酒特級園群（Montrachet/Chevalier/Bâtard 的主要面積均在其境內），一級園系統（Les Pucelles/Combettes/Caillerets）全球最完整的白酒地塊分層系統，是學習布根地白酒必研究的核心村莊', 'C. Chablis 是最重要的布根地白酒村莊', 'D. 沙布利和 Puligny 沒有差別'],
      correct: 1,
      explanation: 'Puligny-Montrachet 的白酒聖地地位：4 個白酒特級園有 3 個主要坐落在 Puligny 境內（Montrachet 的北半、Chevalier-Montrachet、Bienvenues-Bâtard-Montrachet、部分 Bâtard）；1 級園 Les Pucelles 是 Leflaive 和 Etienne Sauzet 的旗艦，全球 Chardonnay 愛好者的「必嚐清單」；Puligny 風格：礦石精緻、清澈的柑橘和石頭感（對比 Meursault 的奶油豐滿）是學習霞多麗風格分化的最佳對照教材。'
    },
    {
      id: 'qb-m15-2', source: 'M15', type: 'single',
      question: '完成布根地 Level 3 後，選擇繼續精進的最佳「下一步」認證路徑是？',
      options: ['A. 立即重新開始 Level 1', 'B. 依個人目標：業界職業發展 → WSET Level 4 Diploma（全面涵蓋釀造/商業/產區）或 CMS Advanced Sommelier（盲品導向）；深度布根地學習 → 布根地品鑑社群（Tasting Group）+ Burghound 訂閱 + 定期參訪（無標準化認證可完全替代實踐知識積累）', 'C. 沒有 Level 3 之後的布根地深造路徑', 'D. 只有 Master of Wine（MW）才是合適的下一步'],
      correct: 1,
      explanation: '不同目標的路徑設計：WSET Diploma（Level 4）是業界最通認的「專業通才認證」，覆蓋所有產區和酒類；兩年課程提供比本課程更廣（雖可能較淺）的全球覆蓋。CMS Advanced/Master Sommelier 是服務業向（餐廳侍酒師）的最高認證，以盲品和服務技術為核心。MW（Master of Wine）是全球最嚴格的葡萄酒認證（350+ 人持有中），需要研究論文和頂尖盲品能力，適合有志於葡萄酒學術/業界最高層的人士。對熱情藏家：所有認證路徑都不能替代「大量系統性品嚐 + 定期拜訪布根地」的實踐知識積累。'
    }
  ]
}

const qbPath = path.join(BASE, 'quiz-bank.json')
fs.writeFileSync(qbPath, JSON.stringify(quizBank, null, 2), 'utf8')
console.log(`✅ quiz-bank.json 建立完成（${quizBank.questions.length} 題，覆蓋 M1-M15）`)

console.log('\n=== 全部完成 ===')
console.log('M15 課程 Quiz 注入：5/5')
console.log('m15-l5 期末考標記：完成')
console.log(`quiz-bank.json：${quizBank.questions.length} 題`)
