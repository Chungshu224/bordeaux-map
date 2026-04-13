/**
 * inject-bourgogne-l3-quiz-m6.mjs
 * 布根地 L3 Quiz 注入 — M6：特級園深度（6 lessons）
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.resolve(__dirname, '..', 'public/bourgogne/data/courses/level3')
const MARKER = '_inject_bourgogne_l3_quiz'

const QUIZ_MAP = {
  'm6-l1': {
    type: 'quiz', title: '🧠 Clos de Vougeot 深度解析知識檢測',
    questions: [
      {
        type: 'single',
        question: 'Clos de Vougeot（50.5 公頃）內有多少個不同莊主，這對品質判斷有何影響？',
        options: ['A. 2 個莊主，品質差異微小', 'B. 約 80 個莊主，同一特級園因地塊位置（北部高坡 vs. 南部低平谷地）和莊主水準，品質差距可能如同村莊級與特級園之別', 'C. 完全只有一個莊主（Monopole）', 'D. 10 個莊主，品質差異不大'],
        correct: 1,
        explanation: 'Clos de Vougeot 是布根地「最複雜的特級園」：80+ 莊主的廣大地塊（50.5 公頃，僅次於 Échézeaux）跨越三個截然不同的地質帶——北部高坡（與 Musigny 相鄰，石灰岩，最佳）、中部（鮞粒石灰岩）、南部低平（泥灰岩保水，容易積水，霜害高）。購買 Clos Vougeot 時，莊主名稱比等級更重要。'
      },
      {
        type: 'single',
        question: '「Clos de Vougeot 的北坡」和「南坡」在品質上為何如此懸殊？',
        options: ['A. 莊主故意讓南坡品質更差', 'B. 北部高坡地質接近 Musigny（薄土、石灰岩），排水佳；南部低坡是古老的渠旁台地（靠近伏舊河），土壤深層泥灰岩保水過多，冷空氣積聚，春霜和病害風險更高', 'C. 兩者品質完全相同', 'D. 南坡因更多日照品質更高'],
        correct: 1,
        explanation: '地理決定品質：Clos 內的北高坡（Vougeot 村的部分，靠近 Musigny）土壤淺薄、排水效率高、霜害風險低——頂尖莊主（如 Méo-Camuzet、Leroy）的持有通常在此；南低坡（伏舊河附近的平地）是中世紀 Cîteaux 修道院建立葡萄園時「填充面積」的地帶，土壤深，保水過多導致葡萄根系過旺，霜害集聚，品質與高坡不可同日而語。'
      },
      {
        type: 'multiple',
        question: 'Clos de Vougeot 在歷史上的特殊地位包括？（多選）',
        options: ['A. 由 Cîteaux 修道院（Cistercian 熙篤會）在 12 世紀開始建立，是中世紀葡萄酒農業組織化的象徵', 'B. 法國軍隊路過時必須行軍禮致敬（傳說）', 'C. 是布根地唯一的 AOC 特級園', 'D. Confrérie des Chevaliers du Tastevin（鬥牌騎士會）的本部設於此城堡'],
        correct: [0, 1, 3],
        explanation: 'Clos 的三重歷史地位：1) 熙篤會修道士 12-18 世紀建立了葡萄酒農業精細管理的基礎，是布根地葡萄酒文化起源的核心象徵；2) 「行軍禮」傳說——拿破崙軍隊路過時必須致敬，有文化傳說依據（無論是否確切史實，在布根地文化中根深蒂固）；3) 鬥牌騎士會（1934年創立的布根地葡萄酒推廣組織）本部確在 Clos de Vougeot 城堡。'
      },
      {
        type: 'single',
        question: '購買 Clos de Vougeot 時，「地塊位置說明（地塊在 Clos 內的哪個部分）」的重要性是？',
        options: ['A. 不重要，所有地塊品質相同', 'B. 最關鍵的判斷依據之一——部分頂尖莊主（如 Méo-Camuzet、Leroy）在標籤或背標上會說明其地塊在北部高坡；而一般商業酒莊可能持有南部低坡地塊，品質差距極大', 'C. 法規要求標示地塊位置', 'D. 地塊位置只影響標籤設計'],
        correct: 1,
        explanation: '識讀 Clos de Vougeot 的關鍵：1) 查詢莊主的地塊位置（Jancis Robinson、Allen Meadows 的詳細記錄）；2) 高坡莊主：Leroy、Méo-Camuzet、Gros Frère et Sœur；3) 混合地塊大莊：通常混合不同位置，性價比和品質均一性較差；4) 完全南坡地塊：品質遠低於特級園應有水準。在 Clos Vougeot 上，莊主比等級更重要。'
      },
      {
        type: 'single',
        question: '「Clos de Vougeot 的城堡（Château du Clos de Vougeot）」現今的用途是？',
        options: ['A. 仍為 DRC 釀酒所用', 'B. 1944 年被鬥牌騎士會（Confrérie des Chevaliers du Tastevin）購入，作為布根地葡萄酒的文化宣傳中心，定期舉辦品酒晚宴和冊封儀式', 'C. 是政府博物館', 'D. 城堡已拆除'],
        correct: 1,
        explanation: '城堡的現代意義：象徵性強過商業性。鬥牌騎士會每年在此舉辦三次「聖-文森特（Saint-Vincent）」等宴會，邀請全球葡萄酒愛好者、業界人士和媒體，是布根地葡萄酒外交的最重要舞台。UNESCO 於 2015 年將布根地 Climat 系統（包括 Clos de Vougeot 城堡）列入世界文化遺產，進一步鞏固了其文化地位。'
      }
    ]
  },

  'm6-l2': {
    type: 'quiz', title: '🧠 Chambertin 家族特級園知識檢測',
    questions: [
      {
        type: 'single',
        question: 'Gevrey-Chambertin 村有幾個以「Chambertin」命名的特級園？各有何主要差異？',
        options: ['A. 只有一個（Chambertin）', 'B. 9 個特級園：Chambertin（13ha）和 Chambertin-Clos de Bèze（15.4ha）地位最高；其餘 7 個（Mazis、Ruchottes、Charmes、Chapelle、Griotte、Latricières、Mazoyères）依土壤和位置各有特色', 'C. 3 個特級園', 'D. 12 個特級園'],
        correct: 1,
        explanation: 'Gevrey 的「特級園家族」共 9 個：頂端雙雄——Chambertin（13公頃）和 Chambertin-Clos de Bèze（15.4公頃，可標示為 Chambertin）；南翼：Chapelle（靠近 Chambertin 中心）、Griotte（最小，約 2.7 公頃，特殊果味）；北翼：Mazis（堅硬結構）、Ruchottes（高酸精緻）；遠端：Latricières、Mazoyères、Charmes（相似地質，有時並列生產）。'
      },
      {
        type: 'single',
        question: '「Chambertin-Clos de Bèze」的特殊法規地位是？',
        options: ['A. 品質低於 Chambertin', 'B. 可以在標籤上只標示「Chambertin」（不含 Clos de Bèze）出售——即 Bèze 的酒可降標為 Chambertin，但 Chambertin 的酒不能反向標示為 Bèze，反映了歷史上對 Bèze 的高度認可', 'C. 兩者可以完全互換標示', 'D. Bèze 不能稱為 Chambertin'],
        correct: 1,
        explanation: 'Clos de Bèze 的「降標特權」是布根地 AOC 法規的獨特案例：657 年 Bèze 修道院獲贈地塊並開始種植葡萄（比 Chambertin 的 Bertin 農夫更早），歷史優先性使 Bèze 可以選擇使用更知名的「Chambertin」品牌名——這是布根地歷史和法規交織的典型案例，Rousseau 通常保持 Bèze 標示以彰顯其特性。'
      },
      {
        type: 'multiple',
        question: '在 Chambertin 九個特級園中，哪些以「特別個性」著稱？（多選）',
        options: ['A. Griotte-Chambertin：以「格里歐（Griotte）」酸甜櫻桃的特殊果味著稱，面積最小（約 2.7 公頃）', 'B. Ruchottes-Chambertin：位置最高（250m+），土壤最淺，以緊緻高酸和礦物感著稱', 'C. Charmes-Chambertin：面積最大（約 31 公頃，含 Mazoyères），以圓潤易飲著稱，是九個中「最早熟」的風格', 'D. Mazis-Chambertin：位於北端，緊粗的男性化結構，需要長時間陳年'],
        correct: [0, 1, 2, 3],
        explanation: '四個特色特級園：Griotte（酸甜果味特殊性）→ Ponsot 是標誌性莊主；Ruchottes（高爽礦物感）→ Rousseau 和 Mugneret-Gibourg 的詮釋最受推崇；Charmes（較早熟圓潤，大地塊平均化）→ Perrot-Minot 等；Mazis（堅硬結構，慢開）→ Faiveley 等。四者確實各有個性，這是全選題的正確答案。'
      },
      {
        type: 'single',
        question: '投資 Chambertin 系列特級園時，為何說「你買的是莊主，不只是地塊」？',
        options: ['A. 因為所有莊主品質相同', 'B. Chambertin（13 公頃）有 13 個莊主，技術水準天差地別——Rousseau 的版本比普通莊主的品質高數個等級，但標籤同樣是「Chambertin Grand Cru」，讓不了解莊主的買家極容易付出高價得到較差體驗', 'C. 法規允許莊主自由提升品質', 'D. 地塊位置比莊主更重要'],
        correct: 1,
        explanation: '「Chambertin 悖論」是布根地最重要的消費者教育：同一個 Grand Cru 標籤下，Rousseau Chambertin（RC 約 80-100 美元/桶批發，零售 500-2000+）vs. 一般小農 Chambertin（可能 200-400 零售）的品質差距可高達一個數量級。布根地複雜性的核心之一：等級是地塊的潛力認證，莊主才是品質的兌現者。'
      },
      {
        type: 'single',
        question: '為何在盲品中辨識「Chambertin vs. Gevrey 一級園（如 Clos Saint-Jacques）」有時難以區分？',
        options: ['A. 兩者味道完全相同', 'B. 頂尖一級園（如 Rousseau 的 Clos Saint-Jacques）的品質在頂尖莊主手中可超越普通莊主的特級園；且土壤相近的地塊位置使「地質特徵」幾乎無差異——這挑戰了AOC 等級「必然」反映品質的假設', 'C. 一級園比特級園顏色更淡', 'D. 特級園永遠在盲品中輕易辨識'],
        correct: 1,
        explanation: '盲品挑戰揭示的真相：Clos Saint-Jacques（一級園）緊鄰 Chambertin（特級園）、土壤幾乎相同，且在頂尖莊主（Rousseau、Bruno Clair）手中品質不輸特級園——多次正式盲品中 CSJ 超越普通莊主 Chambertin 的案例有詳細記錄。這正是布根地 AOC 分級「歷史固化」問題的典型：分級系統創建於特定時期，不能動態反映莊主品質差異。'
      }
    ]
  },

  'm6-l3': {
    type: 'quiz', title: '🧠 Corton 特級園深度知識檢測',
    questions: [
      {
        type: 'single',
        question: 'Corton 特級園的獨特之處在於它是布根地唯一的什麼？',
        options: ['A. 完全 Monopole 的特級園', 'B. 同時擁有頂級紅酒特級園（Corton）和頂級白酒特級園（Corton-Charlemagne）的山丘——是布根地紅白雙重特級園的唯一案例', 'C. 海拔最高的特級園', 'D. 只生產甜酒的特級園'],
        correct: 1,
        explanation: 'Corton 山是布根地南北兩丘的交界象徵：山丘南向和東向的中高坡段（石灰石和鐵質土壤）是 Corton 紅酒（AOC 下有 Le Corton、Les Renardes、Les Bressandes 等多個地塊）；山丘頂部西南坡（白色石灰岩）是 Corton-Charlemagne 白酒——這個紅白分布反映了山丘不同坡向的石灰岩組成和保水特性差異。'
      },
      {
        type: 'single',
        question: 'Corton-Charlemagne 的歷史傳說中，「查理曼大帝（Charlemagne）」與此地塊有何關聯？',
        options: ['A. 查理曼大帝在此建立了第一個酒莊', 'B. 傳說查理曼皇帝因其白鬍子被紅酒染色而讓皇后不悅，因此在 775 年將此地改種白葡萄（Chardonnay 的前身）——這個傳說不可考但成為 Corton-Charlemagne 最廣為流傳的起源故事', 'C. 查理曼大帝是 Corton 第一位莊主', 'D. 查理曼大帝制定了 Corton 的 AOC 規則'],
        correct: 1,
        explanation: '傳說與歷史的交界：雖然查理曼改種理由是「白鬍子故事」的浪漫版本，但有文獻確認查理曼確實在 775 年慷慨地將 Corton 山的葡萄地塊捐贈給奧頓（Autun）的大教堂——因此與此地的歷史連結是確鑿的，只是「換種原因」是傳說而非確鑿史實。這個故事是品酒教育中常被引用的文化典故。'
      },
      {
        type: 'multiple',
        question: 'Corton 紅酒的地塊內差異最主要來自哪些因素？（多選）',
        options: ['A. 山丘的坡面方位（東南、南、西南的不同朝向）', 'B. 不同高度帶的土壤成分（上坡石灰岩 vs. 下坡泥灰岩）', 'C. 所有地塊都在同一水平面，沒有高度差', 'D. 不同地塊的歷史名稱（Le Corton、Les Renardes、Les Bressandes 等）對應不同風格特質'],
        correct: [0, 1, 3],
        explanation: 'Corton 內部差異的三維度：坡面方位（西南朝向的 Bressandes 更圓潤豐厚；更東的 Le Corton 更結構嚴肅）；高度與土壤（高坡石灰岩更礦物緊緻；低坡泥灰岩更果味圓潤）；歷史地塊名稱（雖同為 Corton Grand Cru，各地塊確有可辨認的個性差異，類似 Chambertin 家族）。山丘確實是三維坡面，C 選項明顯錯誤。'
      },
      {
        type: 'single',
        question: '「Corton」紅酒在布根地特級園中的市場定位特殊性是？',
        options: ['A. 是最貴的特級園', 'B. 是伯恩丘唯一的紅酒特級園，但在市場上長期被夜丘的 Chambertin/RC 系列遮蔭，往往提供「接近夜丘特級園品質但更低價格」的性價比', 'C. 是最難取的特級園', 'D. Corton 紅酒比 Corton-Charlemagne 更有名'],
        correct: 1,
        explanation: 'Corton 的市場定位悖論：它是伯恩丘唯一紅酒特級園（理論上稀缺），但由於面積大（124 公頃，布根地最大特級園）、莊主眾多、品質良莠不齊，加上媒體關注度集中在夜丘，使 Corton 在市場上往往比同等品質的夜丘特級園便宜 30-50%——形成了識貨者的「性價比特急」，特別是 Bouchard、Jadot 等大酒商的版本。'
      },
      {
        type: 'single',
        question: 'Corton-Charlemagne 與 Meursault、Montrachet 相比，風格上最顯著的差異是？',
        options: ['A. Corton-Charlemagne 口感更甜', 'B. Corton-Charlemagne 的山頂石灰岩土壤賦予更強烈的礦物緊緻骨架和較少的奶油感，相比 Meursault 偏礦物/奶油平衡，比 Montrachet 偏硬朗緊實——需要更長陳年才充分展現複雜性', 'C. 三者風格完全相同', 'D. Corton-Charlemagne 比 Montrachet 更出名'],
        correct: 1,
        explanation: '伯恩丘白酒風格三角：Meursault（Perrières）= 礦物+奶油平衡，最圓潤；Montrachet = 力量+細膩的全能巔峰；Corton-Charlemagne = 最「男性化」的伯恩丘白酒——山丘頂部的薄層石灰岩賦予高酸的鐵質礦物笔直感，少奶油感，需 10-20 年陳年才發揮最大複雜性，是行家的長線收藏。'
      }
    ]
  },

  'm6-l4': {
    type: 'quiz', title: '🧠 Montrachet 家族特級園知識檢測',
    questions: [
      {
        type: 'single',
        question: 'Montrachet 特級園（8 公頃）在布根地的地位被形容為什麼？',
        options: ['A. 最佳紅酒產地', 'B. 「世界最偉大的干白葡萄酒地塊」——Alexandre Dumas 曾說應「跪著、脫帽，懷著敬畏之心」才能品飲 Montrachet', 'C. 只出名因為最貴', 'D. 是布根地產量最大的 AOC'],
        correct: 1,
        explanation: 'Montrachet 的文化地位：Alexandre Dumas（大仲馬，《三劍客》作者）評價「飲 Montrachet 應跪著」，Jancis Robinson 則稱其為「令任何 Chardonnay 都相形見絀的白葡萄酒」。其地質的獨特性（跨 Puligny 和 Chassagne 兩村的地質過渡帶）+ 超低產量（最佳莊主 15-20 HL/公頃）+ 極少訓練全球最優秀莊主的組合，使其年年成為白酒的絕對標桿。'
      },
      {
        type: 'single',
        question: 'Montrachet「家族」包含哪些相關特級園？',
        options: ['A. 只有 Montrachet 一個', 'B. Montrachet + Chevalier-Montrachet（北坡上方）+ Bâtard-Montrachet（南坡下方）+ Bienvenues-Bâtard-Montrachet（Bâtard 北角）+ Criots-Bâtard-Montrachet（Chassagne 側）', 'C. Montrachet 和 Chablis Grand Cru', 'D. Montrachet 和 Corton-Charlemagne'],
        correct: 1,
        explanation: 'Montrachet 系列的空間排列（南到北，高到低）：Chevalier-Montrachet（騎士，Puligny 高坡，最精緻緊張）→ Montrachet（中心地帶，跨兩村，最複雜豐滿）→ Bâtard-Montrachet（學徒，Puligny/Chassagne 各半，豐厚早熟）→ Bienvenues-Bâtard（面積最小，接近 Bâtard 風格）→ Criots-Bâtard-Montrachet（全在 Chassagne，面積極小，只有 1.57 公頃）。'
      },
      {
        type: 'multiple',
        question: '「Chevalier-Montrachet」和「Bâtard-Montrachet」的主要風格差異是？（多選）',
        options: ['A. Chevalier 位置更高（海拔約 270m），土壤更淺、排水更快，風格更緊張精緻、礦物感更強', 'B. Bâtard 土壤更深（包含伯恩丘典型的泥灰岩），更豐厚圓潤、早熟', 'C. 兩者風格完全相同', 'D. Chevalier 比 Montrachet 貴，Bâtard 比 Montrachet 便宜——反映市場對不同風格的評價'],
        correct: [0, 1, 3],
        explanation: '高低位置的風格印記：Chevalier（高坡薄土）= 精緻鋒銳的礦物感和高酸，年輕時封閉，需要 10+ 年；Bâtard（低坡厚土）= 豐厚多汁，5-8 年即達高峰但也較早消退；Montrachet（中間）= 兩者的完美交匯。市場定價也相應反映：Montrachet 最貴，Chevalier 次之，Bâtard 再次，但頂尖莊主（Leflaive、DRC）的任何一個都是奢侈品。'
      },
      {
        type: 'single',
        question: '在 Puligny-Montrachet 一級園中，被認為品質最接近特級園、有升格呼聲的地塊是？',
        options: ['A. Les Folatières', 'B. Les Pucelles（緊鄰 Bienvenues-Bâtard-Montrachet 北部邊界）和 Les Combettes（緊鄰 Bâtard）——頂尖莊主（Leflaive、Sauzet）的版本在盲品中常超越普通莊主的特級園', 'C. 不存在接近特級園的一級園', 'D. Clos de la Garenne'],
        correct: 1,
        explanation: 'Puligny 的升格遺珠：Les Pucelles（聖女園）緊鄰 Bienvenues-Bâtard 邊界，坡向相同、土壤幾乎連續——Leflaive 的 Pucelles 是每個年份說明「一級園超越特級園」的教科書範例；Les Combettes（靠近 Bâtard）也有類似的升格討論。這些地塊的升格申請在 AOC 系統的保守性下長期擱置，是布根地「等級滯後於現實」的典型案例。'
      },
      {
        type: 'single',
        question: '「Domaine Leflaive」在 Puligny-Montrachet 的地位和轉型歷史是？',
        options: ['A. 是 DRC 的子公司', 'B. 是 Puligny-Montrachet 最重要的白酒莊園，1990 年代由 Anne-Claude Leflaive 推動全面轉向生物動力農法，被認為是催化伯恩丘生物動力運動的關鍵力量', 'C. 主要生產紅酒', 'D. Leflaive 是一位釀酒師的名字，非家族酒莊'],
        correct: 1,
        explanation: 'Anne-Claude Leflaive（1990年代至 2015 年，已故）的遺產：她主持了 Leflaive 從慣行農業向生物動力的全面轉型，是伯恩丘生物動力農法的傳道者——在她的帶動下，包括 DRC、Jadot、Bouchard等都開始嘗試部分地塊生物動力。Leflaive 持有 Chevalier-Montrachet（1.84 公頃，最大單一持有者）+ Bâtard + Bienvenues，是 Montrachet 家族的完整代表性酒莊。'
      }
    ]
  },

  'm6-l5': {
    type: 'quiz', title: '🧠 Musigny vs. Bonnes-Mares 比較知識檢測',
    questions: [
      {
        type: 'single',
        question: 'Musigny 和 Bonnes-Mares 同為 Chambolle-Musigny 的特級園，最核心的風格差異是？',
        options: ['A. 兩者完全相同', 'B. Musigny = 細緻花香、絲滑、「陰性神祕」的終極精緻感；Bonnes-Mares = 更強壯、更豐厚的結構和深果味——被形容為 Chambolle 的「陽性力量」對比 Musigny 的「陰性優雅」', 'C. Bonnes-Mares 比 Musigny 精緻', 'D. 兩者只有面積不同'],
        correct: 1,
        explanation: '同村莊的陰陽對比：Musigny（10.08 公頃，更靠近山頂，石灰岩，與 Clos Vougeot 為鄰）的輕薄土壤賦予其透明、飄逸、玫瑰-紫羅蘭的「陰性」感；Bonnes-Mares（15.06 公頃，跨 Chambolle/Morey 邊界，Chambolle 側石灰泥灰，Morey 側偏紅色黏土）則更深沉厚重，結構更宏大。同一村莊的兩個特級園給予了「布根地 Pinot Noir 全幅度」的完整示範。'
      },
      {
        type: 'single',
        question: 'Bonnes-Mares 橫跨兩個村莊行政區邊界，這對地塊內的風格有何影響？',
        options: ['A. 行政邊界不影響土壤', 'B. Chambolle-Musigny 側（約 1.5 公頃）：石灰質土壤，帶 Chambolle 特有的花香優雅；Morey-Saint-Denis 側（約 13.5 公頃）：更多紅色黏土，更接近 Morey 風格的強健結構——持有不同側的莊主釀出風格可能相差顯著', 'C. 兩側土壤完全相同', 'D. 行政邊界劃分只影響稅率'],
        correct: 1,
        explanation: 'Bonnes-Mares 的「雙面性格」：跨越村莊邊界的地塊在現實中確有不同地質——Chambolle 側薄量石灰岩，更接近 Musigny 的精緻路線；Morey 側紅色黏土，帶來更多礦物力量感。莊主如 Georges Roumier（持有主要在 Chambolle 側）vs. Drouhin（持有跨兩側）的 Bonnes-Mares 呈現出有時令人驚訝的風格差異，是地質在 AOC 邊界之上留下的實物印記。'
      },
      {
        type: 'multiple',
        question: '「Morey-Saint-Denis 特級園群」和 Chambolle 特級園的對比中，Morey 的整體風格特徵是？（多選）',
        options: ['A. Morey 的特級園（Clos de la Roche、Clos Saint-Denis 等）整體風格介於 Gevrey（強健）和 Chambolle（精緻）之間', 'B. Clos de la Roche（Morey 最大、最受推崇特級園）以其火石/礦物的「石板感」著稱，結合 Gevrey 的力量和 Chambolle 的花香', 'C. Morey 沒有任何特級園', 'D. Morey 特級園面積較小，在市場上往往提供更好的性價比'],
        correct: [0, 1, 3],
        explanation: 'Morey-Saint-Denis 的被低估魔力：擁有 5 個特級園（Clos de la Roche 最偉大、Clos Saint-Denis 本村命名來源、Clos des Lambrays、Clos de Tart——Monopole，以及一部分 Bonnes-Mares）但因「夾在 Gevrey 和 Chambolle 之間」而媒體曝光度不足，提供了業界公認的「被忽視的精品地帶」——識貨者在此能以比同等夜丘知名村莊低 20-40% 的價格找到同等品質。'
      },
      {
        type: 'single',
        question: '「Georges Roumier 的 Bonnes-Mares vs. Chambolle-Musigny Les Amoureuses」年份盲品的意義是？',
        options: ['A. 說明特級園永遠優於一級園', 'B. 是反覆被引用的「等級悖論案例」——多次盲品結果顯示 Roumier 的 Les Amoureuses（一級園）與其 Bonnes-Mares（特級園）難以高下，甚至前者常有更細膩的首段香氣，挑戰 AOC 等級作為品質保證的假設', 'C. 說明 Roumier 的較差地塊做靠 Les Amoureuses', 'D. 盲品永遠不能比較不同等級的酒'],
        correct: 1,
        explanation: 'Roumier 的等級辯証：Les Amoureuses（「戀人」，緊鄰 Musigny 的一級園）在 Roumier 手中的極低產量和精確管理，使其多次在盲品中與 Bonnes-Mares 打成平手甚至勝出——前者細緻花香先聲奪人，後者力量和深度在之後顯現。這個比較成為「莊主能力超越等級定義」論點的最有說服力的實例之一。'
      },
      {
        type: 'single',
        question: '在布根地北從 Gevrey-Chambertin 到南到 Nuits-Saint-Georges 的「特級園帶」中，為何 Nuits-Saint-Georges 沒有特級園？',
        options: ['A. Nuits 的品質不足以獲得特級園認定', 'B. 歷史原因：AOC 分級確立時（1930-40 年代），Nuits 的地塊雖有高品質，但法律過程中未能就某一地塊達成「Monopole 或接近 Monopole」的申請方案，分散所有權使協商失敗——Les Saint-Georges 一級園是公認最接近特級園品質的地塊', 'C. Nuits 法規禁止特級園', 'D. Nuits 是白酒村莊'],
        correct: 1,
        explanation: '「Nuits 的遺憾」是布根地 AOC 歷史的著名案例：Les Saint-Georges（一級園頂尖，地塊品質獲業界一致認可為特級園水準）未能升格的主要原因是政治/法律協商失敗——所有者眾多無法達成一致申請；加上 1930 年代確立 AOC 時的地方政治生態複雜性。這是布根地「等級固化、無法動態更新」體制的最典型批評案例。'
      }
    ]
  },

  'm6-l6': {
    type: 'quiz', title: '🧠 特級園投資比較知識檢測',
    questions: [
      {
        type: 'single',
        question: '從「流動性（Liquidity）」角度，哪類布根地特級園在二級市場最容易轉手？',
        options: ['A. 所有特級園流動性相同', 'B. DRC 系列（Romanée-Conti、La Tâche）全球認知度最高，二級市場全年活躍，流動性最高；其他如 Leroy、Rousseau Chambertin 次之；小眾優秀地塊（如 Griotte-Chambertin 小莊）流動性較低', 'C. 流動性最高的是 Chablis Grand Cru', 'D. 一級園的流動性比特級園更好'],
        correct: 1,
        explanation: '布根地投資流動性梯度：DRC（全球拍賣行每場必現）> Leroy、Rousseau 等頂尖莊主（活躍但量少）> 知名莊主一般特級園 > 小眾佳莊（需要更專業買家網絡，流動性受限）。流動性直接影響持有和變現的交易成本——非常稀少量的葡萄酒在需要緊急出手時可能面臨「無人問津或大幅折價」的困境。'
      },
      {
        type: 'single',
        question: '「Liv-ex Fine Wine 100 指數」對布根地投資者有何參考意義？',
        options: ['A. 只追蹤波爾多，與布根地無關', 'B. 追蹤全球頂尖葡萄酒（含布根地）的二級市場價格走勢，提供量化的資本增值數據——是了解布根地長期投資回報率趨勢的客觀工具（儘管過去表現不代表未來）', 'C. Liv-ex 是一個品酒俱樂部', 'D. Liv-ex 只追蹤最新年份'],
        correct: 1,
        explanation: 'Liv-ex（倫敦國際葡萄酒交易所）多項指數中，Burgundy 150 子指數追蹤 150 款主要布根地葡萄酒的市場表現。2015-2022 期間布根地 150 年化回報率約 15-20%，但 2022-2024 年由於市場調整出現顯著回調（約 -30%），說明了「葡萄酒不是無風險資產」的現實。Liv-ex 數據是投資者制定策略的重要客觀工具，但需結合長達 10+ 年的視角解讀。'
      },
      {
        type: 'multiple',
        question: '「特級園 vs. 一級園」的投資考量，支持購買頂尖一級園的論點包括？（多選）',
        options: ['A. 頂尖一級園（如 Vogüé Les Amoureuses、Rousseau Clos Saint-Jacques）的品質在頂尖莊主手中可媲美特級園，但初始成本更低', 'B. 一級園市場市值增值潛力有時高於已高度溢價的特級園（因為起點估值偏低）', 'C. 一級園 AOC 比特級園受更嚴格的法律保護', 'D. 二級市場對頂尖一級園的需求因知識型買家增加而持續上升'],
        correct: [0, 1, 3],
        explanation: '頂尖一級園投資論：1) 品質溢價低估——手藝頂尖的莊主在一級園呈現接近特級園的品質，但標籤等級使初始定價更低；2) 「發現型溢價增值」——市場逐漸認識到這些地塊的真實品質，估值上升；3) 知識型買家（Wine Enthusiast 讀者、侍酒師群體）正在「發現」這些一級園，二級市場需求穩步增加。AOC 法律保護與等級無直接差別（C 為干擾項）。'
      },
      {
        type: 'single',
        question: '「儲存成本（Storage Cost）」在布根地長期投資計算中應如何量化？',
        options: ['A. 儲存成本可以忽略不計', 'B. 專業酒窖儲存費約 1-3 美元/瓶/年，10 年持有期為 10-30 美元/瓶——這對 RC（買入價 5,000+ 美元）佔比微小，但對 Meursault 一級園（買入 100 美元）則佔到 10-30% 的成本，是計算實際投資回報率的必要項目', 'C. 儲存成本全球固定', 'D. 只有特級園需要考慮儲存成本'],
        correct: 1,
        explanation: '投資回報計算的完整公式：實際回報 = 賣出價 - 買入價 - 儲存費 - 保險費 - 交易手續費（拍賣行通常買方手續費 15-25%）。對高價酒（DRC、Leroy）而言，這些成本佔比小；但對中價位布根地（100-500 美元/瓶），儲存費、手續費可能佔總成本的 20-40%——使看似「8% 年化增值」的投資實際回報僅剩 3-5%。精確財務計算是理性投資決策的基礎。'
      },
      {
        type: 'single',
        question: '「假酒風險（Counterfeit Wine Risk）」在布根地頂尖特級園的具體表現和防偽措施是？',
        options: ['A. 布根地頂尖特級園的假酒問題已完全解決', 'B. Rudy Kurniawan 案（2012 年被拆穿）涉及大量偽造布根地老年份；防偽措施：DRC 使用雷射編碼標籤、荒謬頸圈封蠟、獨立標籤認證；購買者應優先選擇「直接出廠（Ex-Cellar）」或有完整 Provenance 文件的個體', 'C. 布根地假酒問題比波爾多更少', 'D. 假酒只出現在極廉價的葡萄酒'],
        correct: 1,
        explanation: '布根地假酒現實：Rudy Kurniawan（「Dr. Conti」）的大規模造假案揭示了頂尖布根地假酒市場的存在和規模——他系統性地在廉價酒瓶中重新填充並偽造頂尖標籤，在拍賣行出售。防偽的最佳實踐：1) 從酒莊直接可追溯的 Provenance；2) DRC 的刻版雷射標（2018 年後）；3) 請專業鑑定（如 Wine Authenticator 科技鑑定）。購買老年份高價布根地必須將假酒風險納入評估。'
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
  ['advanced-m6.json', 'm6-l1'],
  ['advanced-m6.json', 'm6-l2'],
  ['advanced-m6.json', 'm6-l3'],
  ['advanced-m6.json', 'm6-l4'],
  ['advanced-m6.json', 'm6-l5'],
  ['advanced-m6.json', 'm6-l6'],
]

console.log('=== 布根地 L3 Quiz 注入 — M6 特級園深度 ===\n')
let ok = 0
for (const [file, lid] of pairs) {
  if (QUIZ_MAP[lid] && injectQuiz(file, lid, QUIZ_MAP[lid])) ok++
}
console.log(`\n完成：${ok}/${pairs.length} 已注入`)
