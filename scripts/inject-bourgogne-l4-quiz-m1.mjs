/**
 * inject-bourgogne-l4-quiz-m1.mjs
 * 布根地 L4 Quiz 注入 — M1：歷史文化深度研究（6 lessons）
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.resolve(__dirname, '..', 'public/bourgogne/data/courses/level4')
const MARKER = '_inject_bourgogne_l4_quiz'

const QUIZ_MAP = {
  // m1-l1：羅馬時期到中世紀的葡萄酒文明
  'm1-l1': {
    type: 'quiz', title: '🧠 羅馬與中世紀葡萄酒文明知識檢測',
    questions: [
      {
        type: 'single',
        question: '羅馬人在高盧（現今法國）推廣葡萄酒種植的主要動機是？',
        options: [
          'A. 純粹的宗教儀式需求，與商業無關',
          'B. 羅馬軍團的後勤補給——葡萄酒是士兵日常配給（每人每天約 0.5 升），隨軍事擴張帶動了沿行軍路線的葡萄園開墾；同時，羅馬貴族對高品質高盧葡萄酒的商業需求也推動了系統性種植',
          'C. 羅馬只在義大利本土種植葡萄',
          'D. 高盧原住民要求羅馬人教授種植技術'
        ],
        correct: 1,
        explanation: '羅馬葡萄酒在高盧的雙重驅動：軍事補給（Annona Militaris，軍隊食物配給制度包含固定葡萄酒分配）和商業貿易的協同效應，使羅馬在公元 1-2 世紀系統性開墾了高盧各地的葡萄種植。布根地地區（Côte d\'Or）的早期葡萄記錄可以追溯到公元 2 世紀的羅馬時期——考古證據（葡萄種子、壓榨設施）顯示當時已有組織化生產。'
      },
      {
        type: 'single',
        question: '西多會修道院（Cistercian Abbey，Cîteaux）對布根地葡萄酒發展的最關鍵貢獻是？',
        options: [
          'A. 發明了橡木桶陳年技術',
          'B. 建立了「地塊系統性研究（Terroir Mapping）」的方法論——修道士透過長達幾個世紀的觀察，將 Côte d\'Or 不同地塊的土壤、坡向、排水等特性與葡萄酒品質對應，奠定了布根地「地塊分級」思想的認知基礎（Clos Vougeot 的圍牆建設即其成果之一）',
          'C. 西多會只關注釀造宗教用酒，對分級無貢獻',
          'D. 西多會引進了黑皮諾品種'
        ],
        correct: 1,
        explanation: '西多修道院的「風土科學」先驅地位：成立於 1098 年（Cîteaux，距 Nuits-Saint-Georges 南方 20 公里），修道士的農業勞動（Ora et Labora，祈禱與工作）要求對各地塊土地的精確了解。他們建立「Clos（圍牆葡萄園）」的傳統，其中最著名的 Clos Vougeot（由西多修道院從 12 世紀陸續圍建完成）是世界上第一個有系統記錄的「單一葡萄園（Single Vineyard）」管理案例，也是現代布根地地塊分級制度的歷史原型。'
      },
      {
        type: 'multiple',
        question: '波爾多修道院（Bordeaux Benedictine）和西多修道院（Burgundy Cistercian）在葡萄酒歷史貢獻上的主要差異包括？（多選）',
        options: [
          'A. 西多修道院的葡萄酒哲學更強調「特定地塊的差異表達（Terroir Differentiation）」',
          'B. 本篤會修道院（Benedictine）更傾向於大規模生產酒作為商業貿易品和醫療用途',
          'C. 兩者都在法國大革命中失去了所有葡萄園持有',
          'D. 西多修道院的節儉哲學（Cistercian Austerity）促使他們精耕細作而非擴大產量，形成了「質重於量」的葡萄酒文化'
        ],
        correct: [0, 1, 2, 3],
        explanation: '兩個修道院傳統的對比（全部為有效觀察）：西多（A/D）的「白衣修道士」以苦行自律著稱，在農業上體現為極精細的地塊觀察和去蕪存菁；本篤（B）的「黑衣修道士」（如 Cluny 修道院）管理規模更大，葡萄酒生產有強烈的商業和醫療維度（修道院本身是中世紀最大的「醫院」，葡萄酒是藥方的標準成分）；法國大革命（C）的「宗教財產國有化令（Nationalisation des Biens du Clergé, 1789）」使所有修道院葡萄園被充公拍賣，這直接造成了今日布根地多莊主碎片化的所有權結構。'
      },
      {
        type: 'single',
        question: '中世紀布根地葡萄酒被視為最高品質的「貴族標誌」，特別在 14-15 世紀，這與什麼政治背景直接相關？',
        options: [
          'A. 布根地當時是獨立的帝國，與法國王室無關',
          'B. 勃艮第公爵（Dukes of Burgundy）在 1363-1477 年統治了從荷蘭到布根地的「大勃艮第」政治實體，公爵宮廷（Dijon）是歐洲最重要的文化和奢侈品消費中心之一，布根地葡萄酒通過公爵的政治贈禮外交（如贈送給教皇、神聖羅馬皇帝）建立了國際頂奢品聲譽',
          'C. 中世紀布根地葡萄酒主要出口到英格蘭',
          'D. 天主教廷設立布根地為教會葡萄酒的唯一官方供應地'
        ],
        correct: 1,
        explanation: '公爵外交的品牌建立效應：Valois 王朝的勃艮第公爵（菲利普勇敢公爵、無畏約翰、善良菲利普、大膽查理）將布根地葡萄酒系統性地作為外交禮品——送往羅馬教廷（多個阿維尼翁教皇是布根地酒的著名愛好者）、神聖羅馬帝國皇帝等，等同於今日的「國禮策略」。這個歐洲政治和外交關係網絡建立了「布根地頂級 = 君主/教皇品質」的品牌聯想，文藝復興時期歐洲宮廷以擁有布根地葡萄酒為奢侈地位象徵。'
      },
      {
        type: 'single',
        question: '「Clos Vougeot 壁畫記錄」中的「葡萄酒品質分區（Quality Zoning）」最早出現的時間是？',
        options: [
          'A. 19 世紀才有系統性的品質分區',
          'B. 西多修道院的記錄顯示，至少在 14 世紀中期，Clos Vougeot 內部已有「上坡（高品質）vs. 下坡（較低品質）」的非正式分區，修士對不同地段的葡萄酒區別儲存和用途管理（最佳地段保留贈送貴族，較低地段自用或出售），是世界最早的「地塊內部品質分區記錄」之一',
          'C. 1936 年 AOC 法令才正式建立地塊品質分區',
          'D. 布根地的地塊分區完全是現代營銷發明'
        ],
        correct: 1,
        explanation: 'Clos Vougeot 的內部分區史：歷史文獻（西多修道院的賬簿和葡萄酒管理記錄）顯示了中世紀修士已實踐「地塊內品質差異管理」；現代研究（土壤科學）確認：Clos Vougeot 上坡（Oolitic Limestone 侏羅紀石灰岩，薄土）的酒質確實優於下坡（沖積土，厚重黏土）。這個幾百年前的觀察在今日科學驗證下依然成立，是「傳統農業智慧和現代科學的高度一致」的教科書案例，也是 L4 歷史課程的核心知識點。'
      }
    ]
  },

  // m1-l2：勃艮第公爵與黃金時代
  'm1-l2': {
    type: 'quiz', title: '🧠 勃艮第公爵黃金時代知識檢測',
    questions: [
      {
        type: 'single',
        question: '「善良菲利普（Philippe le Bon）」的 1395 年政令在布根地葡萄酒史上的意義是？',
        options: [
          'A. 建立了第一個 AOC 等級制度',
          'B. 頒布了禁止在布根地種植「Gamay 葡萄（稱為「可恥且不誠實的植物」）」的政令，要求全面改種黑皮諾——這是歐洲最早的「品種管理立法」之一，奠定了布根地以黑皮諾為核心的品種身份認同',
          'C. 善良菲利普允許任何品種的種植',
          'D. 這個政令只影響 Dijon 城附近的葡萄園'
        ],
        correct: 1,
        explanation: '1395 年品種政令的歷史意義：Philippe le Bon 的父親「勇敢菲利普（Philippe le Hardi）」在 1395 年頒布了這個命令——Gamay 被定性為「高產但低品質」的品種（其實可能出於政治控制產量的目的），強制要求種植黑皮諾（Pinot Noir）。這個決定通過法律手段「鎖定」了布根地的品種身份，也是為什麼今日布根地紅酒幾乎 100% 是黑皮諾，而 Gamay 被「流放」到博若萊（Beaujolais）。這是歐洲最早以立法形式確定「品種-產區」對應的案例之一，是現代 AOC 制度的歷史先行。'
      },
      {
        type: 'single',
        question: '「Hospices de Beaune（伯恩濟貧院）」成立於哪年，其最早的葡萄園捐贈有何重要性？',
        options: [
          'A. 成立於 1630 年，是近代慈善機構',
          'B. 成立於 1443 年（由 Nicolas Rolin，勃艮第公爵宮廷大臣創立），初始捐贈包含 Beaune 一級園葡萄地——醫院以出售葡萄酒作為主要財源，每年 11 月的慈善拍賣（自 1859 年起）至今是布根地葡萄酒最重要的年度定價事件',
          'C. Hospices de Beaune 的葡萄園是現代才購入的',
          'D. 年度拍賣只在私下進行，不是公開事件'
        ],
        correct: 1,
        explanation: 'Hospices de Beaune 的歷史角色：Nicolas Rolin（宰相）創立醫院時，多位布根地貴族的土地捐贈建立了酒莊基礎；580 年後的今天，Hospices 擁有約 60 公頃葡萄園（橫跨 Beaune, Meursault, Pommard, Volnay 等優質地塊），每年 11 月第三個週日的慈善拍賣已成為「布根地新年份定價的非官方基準事件」——全球媒體、拍賣行、投資者以拍賣成交價作為當年份布根地市場情緒的晴雨表。捐贈此地的中世紀貴族完全無法預料他們的善舉會建立現代最重要的葡萄酒市場事件之一。'
      },
      {
        type: 'multiple',
        question: '「大勃艮第（Greater Burgundy/Pays Bourguignons）」在14-15世紀的政治版圖對葡萄酒產業的影響包括？（多選）',
        options: [
          'A. 控制了法蘭德斯（現比利時/荷蘭）的絲縞紡織中心，提供了購買力最強的布根地葡萄酒消費市場',
          'B. 公爵外交使布根地葡萄酒進入歐洲最高政治圈（教皇廷、神聖羅馬帝國）作為頂奢禮品',
          'C. 公爵資助酒莊興建使所有葡萄酒歸公爵所有',
          'D. 貿易路線（萊茵河/北海）使布根地葡萄酒可以出口到北歐，拓展了市場地理'
        ],
        correct: [0, 1, 3],
        explanation: '大勃艮第政治地理的葡萄酒貿易效應（ABC3 正確，C 為假）：法蘭德斯（A）是當時西歐最富有的工商業中心，Bruges、Gh根特的商人和市民是頂級布根地葡萄酒的第一個「中產消費群」；外交禮品（B）使布根地酒進入歐洲精英品牌意識；北海/萊茵河路線（D）讓布根地葡萄酒突破了傳統的地中海腹地，建立了向北歐出口的商業路徑——這在當時需要木桶儲運技術的成熟（蓋洛式橡木桶，Gallic Barrel，正是在這個時期由布根地向全歐洲普及的）。C 為假——公爵沒有征用私有葡萄園，而是通過稅收、購買和封賞管理葡萄酒經濟。'
      },
      {
        type: 'single',
        question: '「大膽查理（Charles le Téméraire）」1477 年在南錫戰役陣亡後，勃艮第公爵領地對布根地葡萄酒產業的影響是？',
        options: [
          'A. 布根地葡萄酒產業完全崩潰',
          'B. 公爵死亡後布根地領地被法蘭西王國（路易十一）直接兼併——布根地成為法蘭西的一個省份，從獨立政體的「君主葡萄酒資產」轉變為「法國王室資產」，但葡萄酒的貿易網路和品牌聲譽因建立數百年已具有自主動能，並未消失，反而在法蘭西帝國框架下繼續發展',
          'C. 布根地被哈布斯堡帝國吞併，德語成為官方語言',
          'D. 法蘭西王國禁止布根地葡萄酒出口'
        ],
        correct: 1,
        explanation: '1477 年的政治轉折對葡萄酒的影響：勃艮第公爵領地的終結（1477）是一個政治事件，但其多世紀建立的葡萄酒品牌聲譽（「布根地酒 = 頂級」）已深植於歐洲精英文化，不會因君主更替而消失。法蘭西化後，布根地葡萄酒繼續以「法蘭西王室」背書的形式維持頂奢地位——尤其是路易十四（太陽王）的宮廷對布根地酒的偏好（Chambertin 是他的指定用酒，每餐必備，醫師建議的）使其在君主外交中的品牌價值延續了又一個世紀。'
      },
      {
        type: 'single',
        question: '中世紀和文藝復興時期，布根地葡萄酒的主要儲運方式（在玻璃瓶出現之前）是？',
        options: [
          'A. 陶製雙耳罐（Amphora），和古羅馬時期相同',
          'B. 橡木桶（228 升巴里克桶）——高盧人發明的木桶技術（替代羅馬的雙耳罐）在中世紀成為標準，布根地的 228 升桶容量制度（Pièce）也在此時期標準化；木桶允許較大距離的陸路和水路運輸，在馬格努斯玻璃瓶（17 世紀）出現前是精品葡萄酒的主要儲運形式',
          'C. 布根地中世紀完全以皮袋（Skin Bag）儲存運輸',
          'D. 玻璃瓶在中世紀已廣泛使用'
        ],
        correct: 1,
        explanation: '桶運時代的技術史：高盧人（Gauls）在羅馬時代已開始用木桶替代羅馬的 Amphora（陶罐）儲酒——考古記錄顯示，高盧橡木桶的耐久性、相對輕量和可再用性在長途貿易中具有壓倒性優勢。布根地的「228L Pièce」標準桶（Bordeaux 為 225L Barrique）在中世紀即已形成，反映了地區計量傳統的積累。玻璃瓶的廣泛使用要等到 17-18 世紀（英國煤窯技術革命使強化玻璃瓶成本降低），在此之前所有精品葡萄酒都以桶裝販售，消費者在購買時自備容器分裝。'
      }
    ]
  },

  // m1-l3：法國大革命的產權革命
  'm1-l3': {
    type: 'quiz', title: '🧠 法國大革命產權革命知識檢測',
    questions: [
      {
        type: 'single',
        question: '「宗教財產國有化令（1789）」對布根地葡萄園所有權結構的直接影響是？',
        options: [
          'A. 所有葡萄園由政府接管後統一管理至今',
          'B. 教會和修道院持有的葡萄園（布根地最大、最優質的地塊持有者，如西多修道院的 Clos Vougeot）被充公後以「國家財產（Biens Nationaux）」名義公開拍賣，由大量不同買家購入，直接造成了布根地特有的「多莊主碎片化（Multi-Owner Fragmentation）」所有權結構，這個結構維持至今',
          'C. 拿破崙購入了所有被充公的葡萄園',
          'D. 充公的葡萄園被重新分配給農民，每戶一塊，最低 5 公頃'
        ],
        correct: 1,
        explanation: '革命拍賣的長期結構效應：1789-1793 年的一系列法令將教會、修道院和部分貴族地產充公，在布根地，西多修道院的 Clos Vougeot（近 50 公頃）在 1791 年的一次拍賣中被一位商人整塊購入；但後來的繼承分割法律（Code Napoléon，1804，規定財產必須在所有繼承人間均等分割）使原本整塊購入的大地塊在幾代繼承後再度碎片化。今日 Clos Vougeot 有 83 個不同持有者，是「革命拍賣 + 拿破崙繼承法」雙重效應的直接歷史遺產。'
      },
      {
        type: 'single',
        question: '「拿破崙繼承法（Code Civil / Code Napoléon）」中哪一條款持續深刻影響布根地所有權結構至 21 世紀？',
        options: [
          'A. 禁止任何法國公民持有超過 10 公頃葡萄園',
          'B. 「強制均等繼承原則（Égalité des partages/Equal Division）」——規定子女必須均等繼承遺產，任何偏愛特定繼承人的遺囑在法蘭西法律下受到嚴格限制；此條款使每一代的繼承都進一步細分地塊，解釋了為何布根地平均持有面積每世紀遞減，許多重要地塊持有人有超過 15 個不同莊主',
          'C. Code Civil 允許酒莊購買他人地塊不受任何限制',
          'D. 只有法國公民可以持有布根地葡萄園'
        ],
        correct: 1,
        explanation: '「均等繼承」的長期碎片化機制：假設一個 4 公頃的 Gevrey 一級園在 1810 年由一個家族持有，三代後（假設每代 2 個繼承人）= 8 個人分 4 公頃 = 每人 0.5 公頃。這個數學機制幾代重複後，形成今日布根地特定地塊的持有極度分散——Musigny 特級園（10.86 公頃）有 77 個，Chambertin（28 公頃）有超過 20 個持有者。反例：波爾多（Bordeaux）主要葡萄園以「整體酒莊（Château）」的公司形式持有，繼承不需分割實體地塊，因此波爾多頂尖酒莊的持有者通常非常集中（一個家族或公司）。'
      },
      {
        type: 'multiple',
        question: '法國大革命對布根地葡萄酒文化「正面」的長期影響包括？（多選）',
        options: [
          'A. 打破了貴族和教會對頂尖地塊的壟斷，使中產階級也有機會持有布根地土地',
          'B. 「平等原則」最終推動了「品質而非血統」的消費文化，使布根地葡萄酒評判標準從「誰的地」到「誰種得好」',
          'C. 革命立即提升了布根地所有葡萄酒的品質',
          'D. 多莊主結構實際上增加了「同一地塊不同詮釋」的多樣性，使布根地學習和品飲具有更豐富的比較維度'
        ],
        correct: [0, 1, 3],
        explanation: '革命的「創造性破壞」效應（A/B/D 正確，C 為假）：土地機會平等化（A）使新的「農民莊主（Vigneron）」群體在 19-20 世紀逐步成為布根地的主力生產者；品質導向評估（B）在多莊主環境下強化了——當同一地塊有多個競爭者時，消費者和評論家必須評估「生產者」而非只是「地塊」；多樣性（D）是今日布根地學習最豐富也最複雜的部分——同一 Chambertin 的 Rousseau vs. Trapet vs. Drouhin vs. Rossignol 詮釋，提供了研究布根地釀酒哲學差異的絕佳素材。短期品質立即提升（C）完全不是史實——革命初期土地轉手混亂，整體品質實際上有短期下降。'
      },
      {
        type: 'single',
        question: '拿破崙一世對布根地葡萄酒的個人偏好如何影響了 Chambertin 的歷史地位？',
        options: [
          'A. 拿破崙禁止飲用布根地葡萄酒',
          'B. 拿破崙對 Gevrey 特級園 Chambertin 的著名偏好（遠征期間堅持隨軍攜帶，「永遠比例摻水 1:2」），使 Chambertin 具有了「皇帝指定酒款」的歷史聲望加成，這個「皇帝品牌」至今仍是 Chambertin 的重要文化資本，在市場宣傳和教育中被廣泛引用',
          'C. 拿破崙將 Chambertin 收歸國有',
          'D. 拿破崙偏好波爾多，從不飲用布根地'
        ],
        correct: 1,
        explanation: '拿破崙品牌效應的持久性：這個宮廷偏好的記錄（由拿破崙的侍從和日記確認）在 19 世紀廣泛傳播，使 Chambertin 在「法蘭西帝國擴張時期」的歐洲版圖上建立了超越地塊本身的象徵性地位——「連皇帝都喝的酒」是任何廣告預算都無法買到的品牌背書。更有趣的是，拿破崙「稀釋飲用（1 份酒 + 2 份水）」的習慣在現代葡萄酒品飲觀點下是反常的，但在 19 世紀初高酒精葡萄酒（12-14%）的醫療建議下是標準保健做法——每個時代有其葡萄酒文化。'
      },
      {
        type: 'single',
        question: '革命後布根地「Négociant（酒商）制度」在 19 世紀的崛起原因是？',
        options: [
          'A. Négociant 是在革命前就已主導布根地的傳統力量',
          'B. 土地碎片化後，多數小農莊主缺乏資本、設備和商業網絡直接出售葡萄酒——Négociant（如 Bouchard, Jadot, Drouhin 的前身）作為「整合者」出現，向多個小農購買葡萄或葡萄酒，統一培養和出售，解決了小農主的商業問題，在 19 世紀中至 20 世紀初成為布根地葡萄酒出口的主要力量',
          'C. Négociant 制度是政府政策強制建立的',
          'D. 革命後只有 Négociant 被法律允許持有葡萄園'
        ],
        correct: 1,
        explanation: '革命碎片化催生 Négociant 崛起：這是「需求創造供給」的市場機制——大量缺乏後端基礎設施（酒窖、橡木桶、貿易關係、流動資金）的小農莊主需要商業中介；Négociant 填補了「從葡萄到消費者」整個供應鏈的後半段。19 世紀的布根地因此形成以酒商為主導的「Négociant-Peasant Economy」：小農種葡萄，酒商買葡萄/桶裝酒，進行熟成、調配和出售。這個結構在 20 世紀後期才被「Domaine 獨立裝瓶運動」（特別是 1970s 後 Henri Jayer, DRC 等的成功）逐漸改變。'
      }
    ]
  },

  // m1-l4：根瘤蚜蟲危機與重建
  'm1-l4': {
    type: 'quiz', title: '🧠 根瘤蚜蟲危機與重建知識檢測',
    questions: [
      {
        type: 'single',
        question: '「根瘤蚜蟲（Phylloxera vastatrix）」在 19 世紀摧毀布根地的機制是？',
        options: [
          'A. 一種破壞葡萄葉片的黴菌病',
          'B. 一種原產北美的蚜蟲（Aphid），以葡萄根部為食，在歐洲葡萄（Vitis vinifera，無天然抗性）根系注入毒素，最終導致整株死亡；1868 年抵達法國南部，1877 年蔓延至布根地，在未有機制技術解決方案前 10-15 年內摧毀了 90% 以上的歐洲葡萄園',
          'C. 根瘤蚜蟲只影響較差的葡萄品種，黑皮諾不受影響',
          'D. 根瘤蚜蟲是通過空氣傳播的病毒'
        ],
        correct: 1,
        explanation: '根瘤蚜蟲的生物機制：Daktulosphaira vitifoliae（學名）是葡萄根部寄生蟲，原生於北美洲（美洲原生葡萄種，如 Vitis labrusca，在幾千年共存後發展了天然抵抗能力）；偶然引入歐洲後，對毫無防禦機制的 Vitis vinifera 造成了生態學上的「入侵物種浩劫（Invasive Species Catastrophe）」。布根地的損失尤其慘重——1870s-1880s 的「黃金時代」年份記錄（如 1865、1869、1876 年）在危機後的幾十年完全無法複製，因為大量老藤被毀，需要重新種植後等待 15-20 年才能再次出產優質葡萄。'
      },
      {
        type: 'single',
        question: '「嫁接技術（Grafting）」解決根瘤蚜蟲的原理是？',
        options: [
          'A. 向土壤注射殺蟲劑消滅根瘤蚜蟲',
          'B. 將歐洲葡萄（Vitis vinifera）的茎枝（Scion，負責果實品質）嫁接到美洲原生葡萄根砧（Rootstock，如 Riparia, Rupestris 等，具天然根瘤蚜蟲抵抗力）——美洲根砧負責對蚜蟲的抵禦，歐洲葡萄莖枝負責果實的品種特性，兩者結合後被根瘤蚜蟲攻擊但不死亡',
          'C. 嫁接技術使葡萄酒品質顯著降低',
          'D. 布根地是唯一找到嫁接解決方案的產區'
        ],
        correct: 1,
        explanation: '嫁接方案的生物學基礎：美洲根砧（Rootstock）的天然抵抗力是幾千年共進化（Co-evolution）的結果——美洲葡萄「學會了」忍耐根瘤蚜蟲的攻擊症狀（根部細胞壁結構和化學防禦更強）；嫁接（Grafting）是「借用」這個抗性而不失去果實品質的解決方案。爭議點：少數布根地生產者（如部分 Vosne 老藤地塊）至今保留了少量「未嫁接（Ungrafted/Franc de Pied）」的黑皮諾，認為未嫁接的風土表達更純粹——根系可直接深入石灰岩，不受根砧特性影響。DRC 的 Romanée-Conti 地塊是最著名的「保留未嫁接藤」的案例，直到 1945 年才因病害被迫全部替換。'
      },
      {
        type: 'multiple',
        question: '根瘤蚜蟲危機後布根地重建（1880s-1920s）的主要挑戰包括？（多選）',
        options: [
          'A. 嫁接苗木的培育需要時間，且最初根砧選擇有部分失敗案例（部分根砧在石灰岩土壤中出現黃化病 Chlorosis）',
          'B. 大量農村木工失去生計（與葡萄酒無關），引發社會動盪',
          'C. 重建期間（1880-1920）正值兩次世界大戰前後，人力短缺、軍事徵召、經濟崩潰複合打擊葡萄酒業',
          'D. 重建後新種植的葡萄藤需要 15-20 年才能達到高品質出產，使布根地在國際市場上有一個「品質空白期」'
        ],
        correct: [0, 2, 3],
        explanation: '重建期的三重打擊（A/C/D）：根砧選擇問題（A）——石灰岩土壤需要特定根砧（抗石灰，Calcaire-tolerant，如 SO4 或 41B）；部分農民最初選用不適合的根砧（如 Riparia x Rupestris 3309）在高石灰岩土中出現葉片黃化（Chlorosis，鐵缺乏症），需要再次改植，延長了重建時間；戰爭（C）重創了農業勞動力，特別是一戰（1914-1918）期間布根地的青壯年大量陣亡；藤齡問題（D）是葡萄酒品質的永恆制約——新種植的年輕藤根系淺、產量大、礦物吸收有限，通常需要 15-20 年才能出產有複雜度的果實（30-50 年才達最佳），這使重建後的幾十年布根地整體品質確實難以復現危機前老藤的水準。B（木工失業）和葡萄酒業沒有直接關聯，為假。'
      },
      {
        type: 'single',
        question: '「二硫化碳（CS2）土壤注射法」在根瘤蚜蟲防治史中的角色是？',
        options: [
          'A. 這是最終成功的解決方案，至今沿用',
          'B. 是一種臨時性的化學防治方法——通過向土壤注射二硫化碳（有毒殺蟲劑）可以殺死蚜蟲，費用高昂且危險（易燃易爆，農民中毒事故頻繁），只有少數富裕大莊園能負擔持續使用，不是可廣泛應用的解決方案，最終被嫁接法取代',
          'C. 二硫化碳法在布根地從未被試用',
          'D. 二硫化碳是釀酒時添加的化學物質，與根蚜無關'
        ],
        correct: 1,
        explanation: '根瘤蚜蟲防治的「技術試錯歷史」：被根瘤蚜蟲危機震驚的法國農業界在 1870s 提出了多種方案：1) CS2 土壤注射（暫時有效但危險昂貴）；2) 洪水淹沒法（Flooding，利用蚜蟲不耐水性，但需要平地灌溉設施，布根地坡地無法使用）；3) 嫁接美洲根砧（最終成功的長期解決方案，由 Laliman 和 Planchon 等人研究推廣）。這段「緊急技術研發」史是農業危機應對的經典案例——面對存亡威脅，各地的農業家和科學家在幾年內快速試錯，最終找到了成本可接受的生物學解決方案。'
      },
      {
        type: 'single',
        question: '根瘤蚜蟲危機對「布根地葡萄品種多樣性」的深遠影響是？',
        options: [
          'A. 危機後布根地品種更加多樣化',
          'B. 重建期間，農民面臨選擇：種植哪些品種？實際上高產、易種的品種（如 Gamay、雜交品種 Híbridos productores directs）被大量種植，純正黑皮諾和霞多麗的比例下降；直到 1930s-50s 的 AOC 法規介入，強制限制品種，才使布根地的核心品種重新確立',
          'C. 根瘤蚜蟲只影響白酒品種，黑皮諾完全不受影響',
          'D. 重建後黑皮諾種植面積大幅擴大，超過歷史最高點'
        ],
        correct: 1,
        explanation: '重建期的品種妥協：危機後的重建面對巨大的「短期生存」壓力——種植純正黑皮諾嫁接苗需要等待 15-20 年才有優質产出，而雜交品種（如 Noah、Gamay × Rupestris 的雜交後代）更耐病、更早熟、產量更高，許多農民為了儘快恢復收入而選擇種植。1930s 的 AOC 法規（主要是 1935 年創立的 INAO）設立了品種白名單（Grape Variety Allowances by AOC），強制在特定 AOC 下只允許特定品種（布根地紅酒必需黑皮諾），逐步淘汰了重建期種入的雜交品種，歷時數十年才將布根地品種版圖恢復到以黑皮諾/霞多麗為核心的制度框架。'
      }
    ]
  },

  // m1-l5：AOC系統建立與產區定義
  'm1-l5': {
    type: 'quiz', title: '🧠 AOC 系統建立知識檢測',
    questions: [
      {
        type: 'single',
        question: '「INAO（Institut National des Appellations d\'Origine）」成立的年份和主要動機是？',
        options: [
          'A. 1789 年，法國大革命期間為保護貴族酒莊',
          'B. 1935 年，主要動機是打擊大量流行於 20 世紀初的「偽造地名（Wine Fraud）」行為——非布根地地區的葡萄酒被貼上「Chambertin」「Chablis」等知名地名出售，嚴重損害了正牌生產者的聲譽和收入；AOC 制度通過法律定義了每個地名的邊界、品種、產量和釀造規範',
          'C. INAO 是歐盟 2000 年後才成立的機構',
          'D. INAO 最初只管理香檳區的命名'
        ],
        correct: 1,
        explanation: 'AOC 制度的反欺詐起源：19 世紀末至 20 世紀初，葡萄酒欺詐極其普遍——波爾多以外生產的葡萄酒以「Bordeaux」名義出售，根瘤蚜蟲危機後重建期的葡萄酒品質參差，進口阿爾及利亞（Algeria）濃厚紅酒混入「布根地」並不罕見。1919 年的第一個法定產區法（Appellation d\'Origine）提供了法律框架，1935 年 INAO 的成立（初期主要研究 Cognac 的命名）將酒類地理標誌保護系統化。布根地的地塊等級（Village / Premier Cru / Grand Cru）在 1936-1937 年陸續被正式法典化，結束了幾十年的地名混用亂象。'
      },
      {
        type: 'single',
        question: '布根地 AOC 等級體系的四個層次（由廣到窄）是？',
        options: [
          'A. Grand Cru → Premier Cru → Village → Régionale，越高等級面積越大',
          'B. Régionale（區域 AOC，如 Bourgogne）→ Village（村莊 AOC，如 Gevrey-Chambolle）→ Premier Cru（一級園，如 Les Saint-Jacques）→ Grand Cru（特級園，如 Chambertin）——越往上越精確的地理限定，面積越小，品質標準越嚴格',
          'C. 布根地只有兩個 AOC 等級',
          'D. Grand Cru 是面積最大的等級'
        ],
        correct: 1,
        explanation: '布根地 AOC 四級體系的精確理解：Régionale（33 個，如 Bourgogne Blanc/Rouge，Crémant de Bourgogne）→ Village（44 個村莊 AOC，指定村莊地塊）→ Premier Cru（640+ 個，必須在酒標上標注地塊名）→ Grand Cru（33 個，特級園具有獨立的 AOC 命名權，不需要加上村莊名）。面積與等級成反比：所有 Grand Cru 加起來只約 550 公頃（布根地總面積的不到 2%），而 Régionale 覆蓋全區域大部分土地。這個「地理漏斗」結構是布根地品質保障體系的核心設計邏輯。'
      },
      {
        type: 'multiple',
        question: '「AOC 制度」對布根地生產者的主要約束（可能限制靈活性的規範）包括？（多選）',
        options: [
          'A. 指定允許品種（布根地紅酒必須黑皮諾，白酒必須霞多麗，除少數例外）',
          'B. 最高產量上限（Rendement Maximum Annuel）——超過上限部分不能在 AOC 名稱下出售',
          'C. 強制規定最低零售價格',
          'D. 指定最低天然潛在酒精（Minimum Natural Alcohol，確保葡萄成熟度基準）'
        ],
        correct: [0, 1, 3],
        explanation: 'AOC 約束的合法框架（A/B/D 正確，C 為假）：品種限制（A）是 AOC 制度最根本的質量保障，確保地理命名和品種特性的一致連結；產量上限（B）是防止「稀釋品質」的關鍵手段——過高產量意味著每粒葡萄的礦物/風味濃縮度下降；最低天然酒精（D）確保葡萄充分成熟，防止以「未熟青澀葡萄」冒充法定產區品質；AOC 從不規定最低零售價格（C 為假）——定價完全由市場決定，這也是 DRC 和普通 Bourgogne 村莊可以有 1000 倍價格差距的原因。'
      },
      {
        type: 'single',
        question: '「Bourgogne AOC」和一個具體村莊 AOC（如 Gevrey-Chambertin）對同一生產者的意義差異是？',
        options: [
          'A. 兩者在品質標準上完全相同，只是名稱不同',
          'B. Bourgogne AOC 允許使用布根地全區的葡萄（跨多個村莊混調）；Gevrey-Chambertin AOC 要求 100% 來自該村莊邊界內的地塊；村莊級的地理限定性更強 = 更高的平均品質期待 = 相應更嚴格（更低）的最高產量上限——因此定價也相應更高',
          'C. Bourgogne AOC 只允許 Négociant 使用',
          'D. 村莊 AOC 的要求比 Bourgogne AOC 更寬鬆'
        ],
        correct: 1,
        explanation: 'AOC 地理限定性的品質邏輯：越具體的地理邊界（Régionale → Village → Premier → Grand Cru）理論上代表越精確的風土特性，也對應越嚴格的葡萄品質標準（更低的產量上限、更高的最低糖度）。Bourgogne AOC 的最高產量（黑皮諾紅酒）為 55 hl/ha，Gevrey-Chambertin Village 為 45 hl/ha，Gevrey-Chambertin Premier Cru 為 40 hl/ha，Chambertin Grand Cru 為 35 hl/ha——每向上一個等級，法定產量上限下降，理論品質濃縮度提升。'
      },
      {
        type: 'single',
        question: '「1937 年布根地特級園官方認定」的決定依據是什麼？',
        options: [
          'A. 特級園由拿破崙在 1804 年親自指定',
          'B. INAO 的認定委員會參考了多世紀積累的歷史記錄——包括中世紀修道院文件、19 世紀的分類研究（如 Lavalle 1855 年的布根地葡萄園分級著作《Vignoble de la Côte d\'Or》）、土壤和地質勘察、以及生產者和酒商的市場定價記錄——多維度驗證了傳統上被視為「最佳地塊」的歷史共識',
          'C. 特級園是由葡萄藤的年齡（老藤優先）決定的',
          'D. INAO 通過全國投票決定哪些地塊為特級園'
        ],
        correct: 1,
        explanation: 'INAO 分級的「歷史學科學驗證」方法：1855 年，Jules Lavalle 的著作首次對 Côte d\'Or 所有重要地塊進行系統分類，以歷史市場定價和品質記錄為依據分出四個等級（Têtes de Cuvée / Premières Cuvées / Deuxièmes Cuvées / Troisièmes Cuvées）——這個 1855 分類與 1937 年的 INAO 特級園認定高度吻合，說明歷史積累的地塊聲譽和現代科學土壤分析有強大的一致性。此外，19 世紀初 Nuits-Saint-Georges 市長 Morelot 的地塊報告（1831）也是 INAO 的重要歷史參考資料。'
      }
    ]
  },

  // m1-l6：現代布根地的文化影響力
  'm1-l6': {
    type: 'quiz', title: '🧠 現代布根地文化影響力知識檢測',
    questions: [
      {
        type: 'single',
        question: '「布根地葡萄酒文化」在 2015 年獲得 UNESCO 世界遺產認定，被認定的具體對象是？',
        options: [
          'A. Romanée-Conti 地塊被列為世界遺產',
          'B. 「Climats of the Côte d\'Or（布根地 Côte d\'Or 的氣候/地塊系統）」作為整體「文化景觀（Cultural Landscape）」——強調的不是單一地塊，而是幾個世紀農業文化疊加形成的「地塊-分級制度-生產者社區-文化傳承」整體系統，被認定為人類農業文明的傑出遺產',
          'C. 整個布根地大區均被列為世界遺產',
          'D. UNESCO 只認定了 Beaune 城市歷史區'
        ],
        correct: 1,
        explanation: 'UNESCO 認定的「文化景觀」概念：Côte d\'Or 的「Climat」（地塊名稱系統，上千個歷史積累的地塊名，反映了幾個世紀農業社區的觀察和命名），加上其物理景觀（石牆、石十字架、歷史酒窖）和配套的社會文化（年度 Paulée 慶典、酒商-農民-修道院的歷史關係），共同構成了一個「具有傑出普世價值（Outstanding Universal Value）」的農業文化系統。這個認定強化了布根地作為「農業文明典範」的文化資本，間接支持了其頂奢品牌定位。'
      },
      {
        type: 'single',
        question: '「Henri Jayer（亨利·賈葉，1922-2006）」對現代布根地釀酒哲學的最大貢獻是？',
        options: [
          'A. 發明了現代低溫發酵技術',
          'B. 作為「現代布根地釀酒革命」的代表人物，Jayer 推廣了：低產量（嚴格疏穗）、帶果梗低溫浸皮（Cold Maceration）以提取果香、少用新桶（低橡木風格）、精確的地塊管理（以 Vosne-Romanée Cros Parantoux 一級園為示範）——他的實踐和對學生的傳授（如 Emmanuel Rouget）在 1980-2000 年代重塑了布根地精品釀酒的標準，其酒款現今是全球最昂貴的布根地之一',
          'C. Henri Jayer 主張使用大量新橡木桶強化酒體',
          'D. Jayer 的影響力只在他在世時存在，現在已完全被超越'
        ],
        correct: 1,
        explanation: 'Jayer 的現代布根地革命：Cros Parantoux 一級園（Vosne-Romanée）是 Jayer 最著名的地塊，他在 1950 年代購入後花費數年改良（原是廢棄的耶路撒冷洋薊農地）。Jayer 的技術哲學（低產 + 冷浸提 + 低新桶）和他對釀酒「純粹性（Purity of Expression）」的追求，在 1980-90 年代影響了一整個世代的布根地釀酒師；其去世後（2006），其 Cros Parantoux 由侄子 Emmanuel Rouget 繼承，酒價在拍賣市場繼續創歷史高位，其 1980s 代表作目前成交價接近 DRC 水平——是個人品牌對地塊價值影響力的極端案例。'
      },
      {
        type: 'multiple',
        question: '「葡萄酒電影文化（Wine Cinema）」對布根地形象的推廣作用案例包括？（多選）',
        options: [
          'A. 《Mondovino（2004）》紀錄片批判了全球化對傳統布根地的威脅（Robert Parker 評分標準化 vs. 傳統風土表達的衝突）',
          'B. 《Somm（2012）》系列紀錄片使「Master Sommelier 考試」的布根地盲品挑戰廣為流傳，吸引了大量新一代學習者',
          'C. 《La Guerre des Vins》是一個關於波爾多的電影',
          'D. 《Burgundy: People with a Passion for Wine（BBC 紀錄片）》系列使英語世界的葡萄酒愛好者對布根地產生了深刻的個人情感連結'
        ],
        correct: [0, 1, 3],
        explanation: '影像媒體對布根地知識傳播的效應（A/B/D 正確）：Mondovino（A）由 Jonathan Nossiter 拍攝，以 Leroi、Hubert de Montille 等布根地生產者的「傳統主義」視角，對抗 Parker 評分和 Michel Rolland 顧問的「全球化品味」，成為葡萄酒文化辯論的里程碑；Somm 系列（B）使 Master Sommelier 考試（特別是布根地盲品的難度）成為大眾文化話題，顯著推動了葡萄酒教育消費；不存在以布根地為主題的《La Guerre des Vins》（C，這是個假設選項）。BBC 紀錄片（D）系列（如 Oz Clarke 和 Hugh Johnson 的多個系列）在英語市場對布根地知識普及的影響力難以估量。'
      },
      {
        type: 'single',
        question: '「La Paulée de New York」和「La Paulée de Meursault」的關係是？',
        options: [
          'A. 兩者是競爭對手，互不認可',
          'B. La Paulée de Meursault 是布根地採收後的傳統慶典（每年 11 月第三個週一，Beaune 慶典周的最後一天）；La Paulée de New York（DPJ Foundation 創辦）是以其為靈感、在紐約舉辦的「布根地葡萄酒文化慶典」，邀請布根地頂尖生產者，與會者各自攜帶布根地佳釀分享，是美國布根地愛好者的最重要年度聚會，已成為全球布根地社群的重要連結節點',
          'C. La Paulée 在全球只有布根地本地的一個活動',
          'D. La Paulée 是 INAO 官方認可的葡萄酒評比'
        ],
        correct: 1,
        explanation: 'La Paulée 的文化輸出：「Paulée」原指布根地採收慶典的最後一頓飯（農莊和工人共同享用），是中世紀農業社區傳統。Meursault 的 La Paulée（自 1923 年正式化）是迄今仍保留傳統形式的慶典——主要生產者攜帶珍釀，在 300+ 人的長桌共享。Daniel Johnnes（美國布根地大使級人物）將這個概念移植到紐約，La Paulée de New York 現已成為全球頂尖布根地聚會之一，生產者參與率和活動聲望顯示了布根地文化影響力已完全超越地理界限——成為全球性的「布根地文化社群（Burgundy Community）」凝聚活動。'
      },
      {
        type: 'single',
        question: '「現代布根地的可持續性挑戰（Sustainability Challenge）」中，氣候變遷如何威脅布根地的「歷史定義（Historical Identity）」？',
        options: [
          'A. 氣候變遷對布根地完全沒有影響',
          'B. 布根地的等級制度（AOC 邊界、特級園定義）是基於「歷史氣候條件」下的最佳地塊觀察建立的；隨著氣溫上升，原本「最佳的東南坡向中坡」的優勢可能改變——過去太冷的 Hautes Côtes 在氣候暖化下可能更適合種植，而傳統最佳地塊可能面臨「過熟（Over-Ripening）」問題；這對現有 AOC 邊界的合理性提出了挑戰',
          'C. 布根地計劃將所有地塊向北移動以應對暖化',
          'D. 歷史悠久的 AOC 制度可以保護地塊不受氣候影響'
        ],
        correct: 1,
        explanation: '氣候 vs. 歷史制度的長期矛盾：布根地的 AOC 地塊邊界是 1937 年基於歷史農業觀察確定的「靜態邊界」，但氣候是一個動態系統。2020s 的研究開始探討：如果 Côte d\'Or 的平均溫度再上升 2°C，目前「最佳」的特定坡向/海拔地塊是否仍具最高品質？這超越了單純的農業技術問題，觸及了整個布根地等級體系（其中包含巨大的商業和法律利益）的基礎合理性。正在進行的「氣候適應研究（Climate Adaptation Research）」（包括 BIVB 贊助的研究項目）試圖在「維護歷史品牌完整性」和「對氣候現實作出誠實回應」之間找到平衡。'
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
  ['master-m1.json', 'm1-l1'],
  ['master-m1.json', 'm1-l2'],
  ['master-m1.json', 'm1-l3'],
  ['master-m1.json', 'm1-l4'],
  ['master-m1.json', 'm1-l5'],
  ['master-m1.json', 'm1-l6'],
]

console.log('=== 布根地 L4 Quiz 注入 — M1 歷史文化深度研究 ===\n')
let ok = 0
for (const [file, lid] of pairs) {
  if (QUIZ_MAP[lid] && injectQuiz(file, lid, QUIZ_MAP[lid])) ok++
}
console.log(`\n完成：${ok}/${pairs.length} 已注入`)
