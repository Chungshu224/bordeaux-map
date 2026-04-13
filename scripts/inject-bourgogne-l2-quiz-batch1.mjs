/**
 * inject-bourgogne-l2-quiz-batch1.mjs
 * 布根地 L2 Quiz 注入 — 第一批：intermediate-m1 ~ intermediate-m4
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.resolve(__dirname, '..', 'public/bourgogne/data/courses/level2')
const MARKER = '_inject_bourgogne_l2_quiz'

const QUIZ_MAP = {

  // ══════════════════════════════════════════════
  // M1 夜丘產區深度解析
  // ══════════════════════════════════════════════
  'm1-l1': {
    type: 'quiz', title: '🧠 夜丘產區總覽知識檢測',
    questions: [
      { type: 'single', question: '夜丘（Côte de Nuits）主要以哪種葡萄酒著稱？', options: ['A. 白酒為主', 'B. 紅酒為主，以 Pinot Noir 著名', 'C. 氣泡酒', 'D. 粉紅酒'], correct: 1, explanation: '夜丘是布根地紅酒的心臟地帶，沿著金丘山坡分布，主要以 Pinot Noir 紅酒著稱，集中了布根地幾乎所有最偉大的紅酒特級園。' },
      { type: 'single', question: '夜丘（Côte de Nuits）從北到南的大致範圍是？', options: ['A. 從第戎（Dijon）到努伊-聖喬治（Nuits-Saint-Georges）', 'B. 從沙隆（Chalon）到第戎（Dijon）', 'C. 從伯恩（Beaune）到馬貢（Mâcon）', 'D. 從歐塞爾（Auxerre）到第戎（Dijon）'], correct: 0, explanation: '夜丘從北邊第戎（Dijon）南側延伸至努伊-聖喬治（Nuits-Saint-Georges），長約 20 公里，是布根地紅酒最精華的產區地帶。' },
      { type: 'single', question: '夜丘最著名的葡萄園坡地稱為什麼？', options: ['A. 伯恩山（Montagne de Beaune）', 'B. 夜山（Montagne de Nuit）', 'C. 金丘山坡（Côte d\'Or）', 'D. 黑丘（Côte Noire）'], correct: 2, explanation: '「金丘（Côte d\'Or）」是夜丘和伯恩丘共用的稱謂，意指「黃金山丘」，其東南朝向的石灰岩山坡是布根地最頂級葡萄園的所在地。' },
      { type: 'multiple', question: '以下哪些村莊位於夜丘？（多選）', options: ['A. Gevrey-Chambertin 熱夫雷-香貝丹', 'B. Meursault 默爾索', 'C. Vosne-Romanée 馮內-羅曼尼', 'D. Chambolle-Musigny 香波-慕西尼'], correct: [0, 2, 3], explanation: 'Gevrey-Chambertin、Vosne-Romanée、Chambolle-Musigny 都是夜丘的村莊。Meursault 位於伯恩丘，是著名的白酒產區。' },
      { type: 'single', question: '夜丘「特級園（Grand Cru）」幾乎全部集中在哪個海拔區間？', options: ['A. 山頂高地，海拔 400 米以上', 'B. 山坡中段，約 250-300 米', 'C. 谷地低處，最靠近河流', 'D. 隨機分布，無特定海拔偏好'], correct: 1, explanation: '布根地特級園通常位於山坡中段（約 250-300 米），享有最佳排水性、坡向和土壤條件。山頂太冷太乾，谷地太濕太肥沃，中腰是最佳的「中間地帶」。' }
    ]
  },

  'm1-l2': {
    type: 'quiz', title: '🧠 熱夫雷-香貝丹知識檢測',
    questions: [
      { type: 'single', question: '熱夫雷-香貝丹（Gevrey-Chambertin）共有多少個特級園？', options: ['A. 2 個', 'B. 5 個', 'C. 9 個', 'D. 15 個'], correct: 2, explanation: '熱夫雷-香貝丹是布根地擁有最多特級園的村莊，共有 9 個 Grand Cru，包括 Chambertin、Chambertin-Clos de Bèze、Mazis-Chambertin 等。' },
      { type: 'single', question: '熱夫雷-香貝丹最著名的特級園「Chambertin」被拿破崙偏好，其風格特徵是？', options: ['A. 輕盈花香，適合年輕飲用', 'B. 強勁、深色、單寧飽滿，陳年潛力極強', 'C. 清爽礦物感，類似白酒風格', 'D. 甜潤流暢，低單寧'], correct: 1, explanation: 'Chambertin 以其強勁的酒體、深色果味、飽滿單寧和超凡陳年潛力著稱，常被描述為「葡萄酒之王」，拿破崙每次出征都帶著 Chambertin，認為其賦予力量。' },
      { type: 'single', question: '「Gevrey-Chambertin Village AOC」和「Gevrey-Chambertin Premier Cru」的主要差異是？', options: ['A. Premier Cru 只用 Chardonnay 釀造', 'B. Premier Cru 來自特定優質地塊，產量限制更嚴', 'C. Village 酒比 Premier Cru 更貴', 'D. 兩者完全相同，只是行銷用詞'], correct: 1, explanation: 'Premier Cru 來自官方認定的特優地塊（Climat），酒標可標示該地塊名稱，產量限制比 Village 更嚴格，品質通常更高，價格也更貴。' },
      { type: 'multiple', question: '以下哪些是熱夫雷-香貝丹的著名一級園（Premier Cru）？（多選）', options: ['A. Clos Saint-Jacques', 'B. Les Cazetiers', 'C. Les Amoureuses', 'D. Lavaux Saint-Jacques'], correct: [0, 1, 3], explanation: 'Clos Saint-Jacques、Les Cazetiers 和 Lavaux Saint-Jacques 都是 Gevrey-Chambertin 著名的一級園，品質接近特級園。Les Amoureuses 屬於 Chambolle-Musigny 村。' },
      { type: 'single', question: '為什麼熱夫雷-香貝丹的土壤特別適合陳年型 Pinot Noir？', options: ['A. 沙質土壤排水太快，使葡萄早熟', 'B. 紅色石灰泥土（贊霍斯土）富含鐵和礦物質，賦予酒款結構', 'C. 黑色火山土壤，提供獨特煙燻感', 'D. 純白石灰岩，無有機質'], correct: 1, explanation: '熱夫雷-香貝丹北側村莊土壤含有紅色貢侏羅紀河石灰岩（Comblanchien）和泥灰岩，提供豐富礦物質；特級園土壤較淺、排水好，讓根系向深部延伸，形成陳年酒款的骨幹。' }
    ]
  },

  'm1-l3': {
    type: 'quiz', title: '🧠 香波-慕西尼與莫雷-聖丹尼知識檢測',
    questions: [
      { type: 'single', question: '香波-慕西尼（Chambolle-Musigny）的葡萄酒風格最常被描述為？', options: ['A. 強勁、濃郁、高單寧', 'B. 優雅、精緻、帶花香', 'C. 清爽、高酸、礦物感', 'D. 厚實圓潤、適合年輕飲用'], correct: 1, explanation: '「La Musigny」以其非凡的優雅感著稱，整個 Chambolle-Musigny 村都以花香（玫瑰、紫羅蘭）和輕盈精緻的口感聞名，被稱為布根地「最女性化」的村莊。' },
      { type: 'single', question: '「Musigny」特級園最獨特的地方是什麼？', options: ['A. 全球最大的布根地特級園', 'B. 是極少數允許種植 Chardonnay 的夜丘特級園', 'C. 完全由一位莊主獨有（Monopole）', 'D. 位於地下洞窟內的葡萄園'], correct: 1, explanation: 'Le Musigny 特級園極為罕見地允許少量種植 Chardonnay（白酒），但 DRC 等莊主主要還是以 Pinot Noir 為主。這是夜丘特級園中極少見的白酒授權。' },
      { type: 'single', question: '莫雷-聖丹尼（Morey-Saint-Denis）的風格在香波和熱夫雷之間，其最著名的特級園是？', options: ['A. Chambertin', 'B. Clos de la Roche', 'C. Romanée-Conti', 'D. Bonnes Mares'], correct: 1, explanation: 'Clos de la Roche 是 Morey-Saint-Denis 最大也最著名的特級園，風格介於 Gevrey 的強勁和 Chambolle 的細緻之間，以深層複雜和陳年能力著稱。' },
      { type: 'multiple', question: '莫雷-聖丹尼（Morey-Saint-Denis）有哪些特級園？（多選）', options: ['A. Clos de la Roche', 'B. Clos Saint-Denis', 'C. Clos des Lambrays', 'D. Clos de Vougeot'], correct: [0, 1, 2], explanation: 'Morey-Saint-Denis 的特級園包括 Clos de la Roche、Clos Saint-Denis 和 Clos des Lambrays（還有 Clos de Tart）。Clos de Vougeot 是獨立的，不屬於 Morey-Saint-Denis。' },
      { type: 'single', question: '「Les Amoureuses」是 Chambolle-Musigny 最著名的一級園，其名稱的含義是？', options: ['A. 月光下的葡萄園', 'B. 戀人們', 'C. 紫羅蘭之地', 'D. 卵石花園'], correct: 1, explanation: '「Les Amoureuses」意為「戀人們」，以其無可比擬的優雅和細膩著稱，品質接近特級園，是布根地最令人嚮往的一級園之一，價格媲美許多特級園。' }
    ]
  },

  'm1-l4': {
    type: 'quiz', title: '🧠 馮內-羅曼尼知識檢測',
    questions: [
      { type: 'single', question: '馮內-羅曼尼（Vosne-Romanée）村的「Romanée-Conti」特級園面積是多少？', options: ['A. 15 公頃', 'B. 8 公頃', 'C. 1.8 公頃', 'D. 0.5 公頃'], correct: 2, explanation: 'Romanée-Conti（RC）只有約 1.8 公頃，年產量僅 5,000-6,000 瓶，是布根地乃至全球最稀少、最昂貴的葡萄酒之一，單瓶拍賣價可高達數十萬美元。' },
      { type: 'single', question: 'DRC（Domaine de la Romanée-Conti）獨家擁有哪兩個特級園的 Monopole 地位？', options: ['A. Romanée-Conti 和 La Tâche', 'B. Chambertin 和 Musigny', 'C. Richebourg 和 Romanée-Saint-Vivant', 'D. Echézeaux 和 Grands Echézeaux'], correct: 0, explanation: 'DRC 獨家擁有（Monopole）Romanée-Conti（1.8ha）和 La Tâche（6.06ha）兩個特級園，以及另外部分所有其他馮內-羅曼尼和周邊特級園的地塊。' },
      { type: 'single', question: '「Richebourg」特級園以哪種風格著稱？', options: ['A. 輕盈花香', 'B. 豐滿濃郁、絲滑，陳年後展現皮革和香料', 'C. 高酸度、礦物感為主', 'D. 水果炸彈，適合年輕飲用'], correct: 1, explanation: 'Richebourg 以其豐滿的酒體、絲滑質地和複雜的香料、皮革、野果香氣著稱，在馮內-羅曼尼特級園中屬於風格最飽滿的之一，陳年後展現無與倫比的複雜度。' },
      { type: 'multiple', question: '以下哪些是 Vosne-Romanée 村內的特級園？（多選）', options: ['A. Romanée-Conti', 'B. Chambertin', 'C. Romanée-Saint-Vivant', 'D. La Tâche'], correct: [0, 2, 3], explanation: 'Romanée-Conti、Romanée-Saint-Vivant、La Tâche（還有 Richebourg、La Romanée、Echézeaux、Grands Echézeaux）都屬於 Vosne-Romanée。Chambertin 屬於 Gevrey-Chambertin。' },
      { type: 'single', question: '為什麼 Vosne-Romanée 的土壤被認為是夜丘中最特殊的？', options: ['A. 完全由白色石灰岩組成', 'B. 含有更多有機腐植質，葡萄根系能深入鐵礦石和石灰岩層', 'C. 土壤完全無任何礦物質', 'D. 純火山岩土壤'], correct: 1, explanation: '馮內-羅曼尼的特級園土壤呈現獨特的垂直剖面：從表層泥灰土到深層鐵礦石、石灰岩，根系深入 10-20 米後吸收複雜礦物質，形成無法複製的風土表達。' }
    ]
  },

  'm1-l5': {
    type: 'quiz', title: '🧠 夜-聖喬治與其他村莊知識檢測',
    questions: [
      { type: 'single', question: '夜-聖喬治（Nuits-Saint-Georges）最特別的是什麼？', options: ['A. 有最多的特級園', 'B. 是夜丘最南端的重要村莊，但沒有任何特級園', 'C. 只生產白酒', 'D. 是 DRC 的主要產區'], correct: 1, explanation: '令人驚奇的是，Nuits-Saint-Georges 是夜丘最重要的村莊之一，也是著名的酒商之都，但卻沒有任何特級園。然而它的一級園（如 Les Pruliers、Les Saint-Georges）品質極高，媲美其他村莊的特級園。' },
      { type: 'single', question: '夜-聖喬治的一級園「Les Saint-Georges」在歷史上有什麼特殊地位？', options: ['A. 被提議升格為特級園，但仍處於審查中', 'B. 曾是整個布根地唯一的葡萄園', 'C. 以生產白酒著名', 'D. 全部由 DRC 擁有'], correct: 0, explanation: 'Les Saint-Georges 長期被認為達到特級園品質，近年確實有提議將其升格為 Grand Cru，但目前仍是一級園（Premier Cru）。' },
      { type: 'single', question: '夜丘北端的村莊菲克桑（Fixin）聞名於什麼？', options: ['A. 布根地最貴的葡萄酒', 'B. 以親民價格提供接近 Gevrey 風格的 Pinot Noir', 'C. 以 Chardonnay 白酒著稱', 'D. 唯一允許使用橡木片的村莊'], correct: 1, explanation: 'Fixin 位於夜丘最北端，是布根地「性價比之村」，出產風格接近 Gevrey-Chambertin（強勁、單寧高）但價格親切得多，是精明酒迷的首選。' },
      { type: 'multiple', question: '「Gevrey 以南到 Nuits 這段夜丘核心」包含哪些主要村莊？（多選）', options: ['A. Chambolle-Musigny', 'B. Morey-Saint-Denis', 'C. Beaune', 'D. Vougeot'], correct: [0, 1, 3], explanation: '從北到南：Gevrey-Chambertin → Morey-Saint-Denis → Chambolle-Musigny → Vougeot → Vosne-Romanée → Nuits-Saint-Georges。Beaune 屬於伯恩丘，不在夜丘範圍內。' },
      { type: 'single', question: '「Clos de Vougeot」特級園最著名的歷史特色之一是什麼？', options: ['A. 只有一位莊主', 'B. 由修道院興建的石圍牆，擁有超過 80 位共同莊主', 'C. 是布根地最小的特級園', 'D. 只生產白酒'], correct: 1, explanation: 'Clos de Vougeot 約 50 公頃，因法國大革命後土地拍賣，現有超過 80 位莊主共同擁有，是布根地最大且最分散的特級園之一，同一塊土地上品質差異極大。' }
    ]
  },

  // ══════════════════════════════════════════════
  // M2 伯恩丘白酒聖地
  // ══════════════════════════════════════════════
  'm2-l1': {
    type: 'quiz', title: '🧠 伯恩丘產區總覽知識檢測',
    questions: [
      { type: 'single', question: '伯恩丘（Côte de Beaune）與夜丘相比，最主要的特色是什麼？', options: ['A. 只產紅酒', 'B. 是布根地頂級白酒（Chardonnay）的主要產地', 'C. 比夜丘更靠北，氣候更涼爽', 'D. 只有大區等級的 AOC'], correct: 1, explanation: '雖然伯恩丘也出產頂級 Pinot Noir，但其最大的榮耀是頂級 Chardonnay 白酒——蒙哈榭、默爾索、科爾通·查理曼等，是全球最偉大白酒的集中地。' },
      { type: 'single', question: '伯恩（Beaune）市的「Hospices de Beaune 慈善醫院拍賣會」的特殊意義是？', options: ['A. 義賣收益全數捐給當地醫院，被視為布根地年份質量的風向標', 'B. 全球最大的葡萄酒消費集會', 'C. 只允許 Grand Cru 參與拍賣', 'D. 在地下酒窖舉行，深受遊客歡迎'], correct: 0, explanation: 'Hospices de Beaune 拍賣自 1859 年舉辦，以慈善醫院命名，收益捐給 Hôtel-Dieu。這場每年 11 月的拍賣是布根地最重要的傳統活動，成交價也反映了當年的市場信心。' },
      { type: 'single', question: '伯恩丘的白酒特級園主要集中在哪個氣候帶？', options: ['A. 科爾通山（Montagne de Corton）和普利尼-蒙哈榭一帶', 'B. 接近馬貢的南端', 'C. 沿索恩河谷地', 'D. 布根地最高海拔處'], correct: 0, explanation: '伯恩丘的白酒特級園集中在兩個核心：北端的科爾通山（Corton-Charlemagne）和南端的普利尼-蒙哈榭/夏山-蒙哈榭（Montrachet 家族）。' },
      { type: 'multiple', question: '以下哪些村莊屬於伯恩丘？（多選）', options: ['A. Meursault 默爾索', 'B. Gevrey-Chambertin', 'C. Puligny-Montrachet 普利尼-蒙哈榭', 'D. Beaune 伯恩'], correct: [0, 2, 3], explanation: 'Meursault、Puligny-Montrachet 和 Beaune 都是伯恩丘的重要村莊。Gevrey-Chambertin 位於夜丘。' },
      { type: 'single', question: '伯恩丘紅酒著名村莊 Pommard 的特色是？', options: ['A. 輕盈花香，類似 Chambolle', 'B. 以強勁、豐厚的 Pinot Noir 聞名，是伯恩丘最強健的紅酒', 'C. 只出產 Grand Cru', 'D. 出口量是布根地最低的'], correct: 1, explanation: 'Pommard 在伯恩丘以其強健、豐滿的 Pinot Noir 著稱——風格接近夜丘的氣魄，和鄰村 Volnay 的優雅形成鮮明對比，是伯恩丘最受國際買家偏愛的紅酒村莊之一。' }
    ]
  },

  'm2-l2': {
    type: 'quiz', title: '🧠 蒙哈榭知識檢測',
    questions: [
      { type: 'single', question: '「Montrachet」特級園位於哪兩個村莊之間？', options: ['A. Gevrey 和 Morey', 'B. Puligny-Montrachet 和 Chassagne-Montrachet', 'C. Meursault 和 Beaune', 'D. Corton 和 Pernand-Vergelesses'], correct: 1, explanation: 'Le Montrachet 特級園橫跨 Puligny-Montrachet 和 Chassagne-Montrachet 兩個村莊邊界，兩個村莊都在村名後加上 Montrachet 以彰顯其榮耀。' },
      { type: 'single', question: '「Montrachet」的典型風格是？', options: ['A. 清爽、低酒精、礦物感強烈', 'B. 金黃濃郁、奶油、烤堅果，極強陳年潛力', 'C. 清新白花、果香為主', 'D. 甜潤如蜜，接近貴腐酒'], correct: 1, explanation: 'Montrachet 被視為全球最偉大的乾白酒之一，以豐厚的奶油質地、烤堅果、蜂蜜、礦物感著稱，年輕時封閉，需要 10-20 年才能充分展開，陳年30年後仍精彩。' },
      { type: 'single', question: '「Bâtard-Montrachet」和「Bienvenues-Bâtard-Montrachet」是什麼等級？', options: ['A. Premier Cru 一級園', 'B. Village 村莊級别', 'C. Grand Cru 特級園', 'D. Bourgogne 大區'], correct: 2, explanation: '兩者都是正式的 Grand Cru（特級園），是 Montrachet 的「同族」特級園，品質接近 Montrachet 本身，但面積更大、產量更多，更容易取得，是蒙哈榭家族的「性價比選項」。' },
      { type: 'multiple', question: '蒙哈榭家族（Montrachet Group）的特級園包括哪些？（多選）', options: ['A. Le Montrachet', 'B. Bâtard-Montrachet', 'C. Chevalier-Montrachet', 'D. Corton-Charlemagne'], correct: [0, 1, 2], explanation: 'Montrachet 家族特級園：Le Montrachet、Bâtard-Montrachet、Bienvenues-Bâtard-Montrachet、Chevalier-Montrachet（及部分 Criots-Bâtard-Montrachet）。Corton-Charlemagne 屬於科爾通山，不同地區。' },
      { type: 'single', question: '「Chevalier-Montrachet」（騎士）在蒙哈榭家族中的位置和特色是？', options: ['A. 位於 Montrachet 下坡，風格寬厚', 'B. 位於 Montrachet 上坡，土壤較薄，風格更細膩礦物', 'C. 來自完全不同的土壤，無關聯', 'D. 只允許在伯恩市內陳年'], correct: 1, explanation: 'Chevalier-Montrachet 位於 Montrachet 特級園上方坡地，土壤更淺薄，雖產量更少，但往往展現比 Montrachet 更緊實的礦物感，是部分鑑賞家的最愛。' }
    ]
  },

  'm2-l3': {
    type: 'quiz', title: '🧠 默爾索知識檢測',
    questions: [
      { type: 'single', question: '默爾索（Meursault）最著名的風格特徵是？', options: ['A. 清瘦礦物感，不適合橡木桶陳年', 'B. 豐富奶油感、堅果香（尤其榛果）和如絲般的口感', 'C. 高酸、低酒精的清爽白酒', 'D. 甜蜜可口的半甜型白酒'], correct: 1, explanation: 'Meursault 以其豐厚的奶油質地、烤榛果、黃油麵包和礦物感著稱，是布根地最「圓潤」的 Chardonnay 產區，通常在橡木桶中充分熟化，展現獨特的奶油複雜感。' },
      { type: 'single', question: '為什麼 Meursault 沒有 Grand Cru（特級園）但仍極受尊崇？', options: ['A. 因太貴才沒有被評為 Grand Cru', 'B. 頂級一級園（如 Perrières、Charmes）品質媲美特級園，歷史上未申請升格', 'C. 規定只有紅酒才能評為 Grand Cru', 'D. Meursault 的 Grand Cru 已在 2010 年取消分級'], correct: 1, explanation: 'Meursault 雖沒有 Grand Cru，但其頂尖一級園（Perrières、Charmes、Genevrières）的品質實際上媲美特級園。歷史上曾有申請升格，但因莊主群意見不一而未成功。' },
      { type: 'multiple', question: '默爾索最頂級的一級園包括哪些？（多選）', options: ['A. Les Perrières', 'B. Les Charmes', 'C. Les Saint-Georges', 'D. Les Genevrières'], correct: [0, 1, 3], explanation: 'Meursault 三大頂級一級園：Perrières（以礦物感著稱）、Charmes（最豐滿圓潤）和 Genevrières（平衡優雅）。Les Saint-Georges 屬於 Nuits-Saint-Georges。' },
      { type: 'single', question: '「La Paulée de Meursault」是什麼？', options: ['A. 默爾索每年的葡萄收穫節慶', 'B. Meursault 的一個一級園名稱', 'C. 布根地著名的採收後慶祝宴會，莊主們帶酒共飲', 'D. 一個 Meursault 的釀酒合作社'], correct: 2, explanation: 'La Paulée 是布根地每年 11 月的傳統慶宴，在採收完成後舉行。莊主們互帶自家最好的葡萄酒與同行共享，是業界最古老也最盛大的聯誼傳統之一。' },
      { type: 'single', question: '結合 Meursault 的地質，坡地中段的「Perrières」為什麼最具礦物感？', options: ['A. 土壤含有大量有機腐植質', 'B. 土壤極淺，石灰岩直接外露，根系直接在石灰岩中生長', 'C. 採用生物動力法種植', 'D. 使用最多新橡木桶熟化'], correct: 1, explanation: 'Perrières 的名稱源自「perrière」（採石場），土壤極薄，石灰石直接暴露，葡萄藤根系必須深入石灰岩縫隙攝取水分和礦物質，這正是其鮮明礦物感的地質原因。' }
    ]
  },

  'm2-l4': {
    type: 'quiz', title: '🧠 科爾通山知識檢測',
    questions: [
      { type: 'single', question: '科爾通山（Montagne de Corton）最特殊之處是？', options: ['A. 只產白酒', 'B. 是伯恩丘唯一同時有頂級紅酒和白酒特級園的地標', 'C. 面積最小的布根地特級園', 'D. 全部由一個酒莊擁有'], correct: 1, explanation: '科爾通山是伯恩丘的標誌性山丘，獨特地同時擁有紅酒特級園（Le Corton）和白酒特級園（Corton-Charlemagne），前者以強勁 Pinot Noir 著稱，後者是布根地最偉大的白酒之一。' },
      { type: 'single', question: '「Corton-Charlemagne」的名字來由是？', options: ['A. 以一位釀酒大師命名', 'B. 据傳來自查理曼大帝（Charlemagne）曾擁有此地', 'C. Charlemagne 是一個地質層的名稱', 'D. 以最初種植白葡萄的修道士命名'], correct: 1, explanation: '傳說查理曼大帝（Charlemagne）擁有此地，並命令種植白葡萄（據說因其白鬍子被紅酒染色），這個傳說至今仍是 Corton-Charlemagne 品牌故事的核心。' },
      { type: 'single', question: 'Corton-Charlemagne 的典型口感風格是？', options: ['A. 輕盈、低酸', 'B. 豐滿、礦物感、陳年後展現煙燻、蜂蜜和薑辛香', 'C. 清新、果香主導，適合年輕飲用', 'D. 帶有明顯甜感'], correct: 1, explanation: 'Corton-Charlemagne 以宏大的構架、礦物感和陳年潛力著稱，年輕時緊澀，需要 8-15 年展開，成熟後展現煙燻、蜂蜜、香料和礦石礦物感，是與 Montrachet 抗衡的偉大白酒。' },
      { type: 'multiple', question: '以下關於 Corton 紅酒特級園的描述，哪些正確？（多選）', options: ['A. 僅使用 Pinot Noir 釀造', 'B. 橫跨多個村莊（Aloxe-Corton、Ladoix、Pernand-Vergelesses）', 'C. 是伯恩丘面積最大的紅酒特級園', 'D. 風格輕盈優雅，類似 Chambolle'], correct: [0, 1, 2], explanation: 'Corton 是伯恩丘面積最大的紅酒特級園（約 160 公頃），橫跨三個村莊，全用 Pinot Noir。其風格通常比夜丘 Grand Cru 更強健厚實，而非輕盈優雅。' },
      { type: 'single', question: '「Louis Latour」是科爾通山最著名的莊主之一，其特色是？', options: ['A. 以生物動力法著稱', 'B. 在 Corton-Charlemagne 擁有最大的單一莊主地塊，也以製桶廠聞名', 'C. 只出產紅酒', 'D. 是最新成立的布根地酒莊'], correct: 1, explanation: 'Louis Latour 是 Corton-Charlemagne 最大的莊主之一，擁有約 10 公頃的 Corton-Charlemagne，同時也以自有製桶廠著稱。這是布根地罕見的垂直整合酒莊。' }
    ]
  },

  'm2-l5': {
    type: 'quiz', title: '🧠 伯恩丘紅酒產區知識檢測',
    questions: [
      { type: 'single', question: '伯恩（Beaune）村莊以哪類葡萄酒著名？', options: ['A. 主要白酒，與 Meursault 風格相近', 'B. 大量一級園紅酒，村莊核心是多個莊主集中的 Premier Cru', 'C. 所有酒款都是 Grand Cru', 'D. 只產大區 Bourgogne 等級'], correct: 1, explanation: 'Beaune 村擁有布根地任何村莊中最多的一級園面積，共有約 42 個一級園，大多有歷史悠久的 Négociant（如 Bouchard、Louis Jadot）大量持有，是伯恩丘紅酒的心臟地帶。' },
      { type: 'single', question: '沃利尼（Volnay）的葡萄酒以何著稱？', options: ['A. 強勁單寧，可陳年 50 年', 'B. 精緻優雅、花香細膩，是伯恩丘最「女性化」的紅酒', 'C. 濃郁厚實，以花崗岩土壤著稱', 'D. 以 Chardonnay 白酒著名'], correct: 1, explanation: 'Volnay 和 Chambolle-Musigny 是布根地最常被形容為「女性化」的村莊，紅酒以輕盈、優雅、細膩的花香（紫羅蘭、玫瑰）著稱，單寧絲滑，是鑑賞家最愛。' },
      { type: 'single', question: 'Pommard 和 Volnay 的主要風格差異是？', options: ['A. Pommard 白酒，Volnay 紅酒', 'B. Pommard 強勁厚實，Volnay 輕盈優雅', 'C. 兩者風格完全相同', 'D. Pommard 只產 Grand Cru'], correct: 1, explanation: '相鄰的 Pommard 和 Volnay 形成鮮明對比：Pommard 以強健、飽滿、深色果味著稱；Volnay 則輕盈、精巧、花香突出。這種差異源於兩村土壤成分的微小不同。' },
      { type: 'multiple', question: '以下哪些是伯恩丘著名的紅酒村莊？（多選）', options: ['A. Pommard', 'B. Volnay', 'C. Chambolle-Musigny', 'D. Savigny-lès-Beaune'], correct: [0, 1, 3], explanation: 'Pommard、Volnay 和 Savigny-lès-Beaune 都是伯恩丘紅酒村莊。Chambolle-Musigny 雖也是知名紅酒村，但屬於夜丘，不在伯恩丘。' },
      { type: 'single', question: '「Monthélie」和「Saint-Romain」代表伯恩丘的什麼類型？', options: ['A. 頂級特級園村莊', 'B. 性價比高的村莊等級產區，葡萄酒以合理價格提供優質體驗', 'C. 以氣泡酒著稱的產區', 'D. 紅酒和白酒各占一半的混合產區'], correct: 1, explanation: 'Monthélie 和 Saint-Romain 屬於伯恩丘的「性價比村莊」，知名度不如 Pommard 或 Volnay，因此價格合理，但仍提供道地的布根地 Pinot Noir 風格，是尋寶獵酒人的最愛。' }
    ]
  },

  // ══════════════════════════════════════════════
  // M3 風土與土壤科學
  // ══════════════════════════════════════════════
  'm3-l1': {
    type: 'quiz', title: '🧠 風土概念知識檢測',
    questions: [
      { type: 'single', question: '布根地葡萄酒哲學中「Terroir 風土」最廣義的定義是？', options: ['A. 只包括土壤類型', 'B. 土壤、氣候、地形、日照及人文傳統的整體環境', 'C. 等同於葡萄品種', 'D. 只指葡萄園海拔'], correct: 1, explanation: '「Terroir」是法語概念，涵蓋一個地塊的所有環境因素：土壤組成、地下地質、微氣候、坡向、排水、海拔，以及世代累積的人文知識。這是布根地 Climat 哲學的核心。' },
      { type: 'single', question: '布根地「Climat」與單純的「vineyard（葡萄園）」有何基本差異？', options: ['A. 完全相同的概念', 'B. Climat 是具有法律保護的特定地塊，風土概念已被 UNESCO 收錄', 'C. Climat 比 vineyard 面積更大', 'D. Climat 只適用於特級園'], correct: 1, explanation: '布根地 Climat（地塊）是歷史與文化的積累——風土、地圖、邊界已被賦予法律保護，且於 2015 年獲 UNESCO 人類文化遺產認定。這不只是葡萄園，而是包含歷史意義的文化地景。' },
      { type: 'multiple', question: '以下哪些因素共同構成布根地的「Terroir 風土」？（多選）', options: ['A. 石灰岩和黏土的土壤組合', 'B. 大陸性氣候', 'C. 東南朝向坡地', 'D. 酒莊創辦年份'], correct: [0, 1, 2], explanation: '布根地風土的關鍵因素：侏羅紀石灰岩/泥灰岩土壤、大陸性氣候（溫差大）、東南向坡地（最佳日照和排水）。酒莊創辦年份是人文因素，不屬於傳統風土定義。' },
      { type: 'single', question: '為什麼布根地強調「同一品種在不同 Climat 的差異」勝過「不同品種的差異」？', options: ['A. 因為所有布根地酒都一樣', 'B. 因為使用同一品種能讓風土差異最純粹地表現，排除品種干擾', 'C. 因為法規禁止研究品種差異', 'D. 因為所有品種的風格都相同'], correct: 1, explanation: '布根地幾乎只用 Pinot Noir（紅）和 Chardonnay（白），正是為了讓品種的統一性「放大」風土的差異——同一品種在相鄰兩個 Climat 就可能展現截然不同的風格。' },
      { type: 'single', question: '「人為因素（Human Factor）」為何被現代風土理論納入考量？', options: ['A. 因為釀酒師可以任意改變葡萄酒風格', 'B. 世代累積的農耕知識、釀酒決策也已成為地塊表達不可分割的一部分', 'C. 人為因素只影響行銷和定價', 'D. 人為因素與品質無關'], correct: 1, explanation: '現代風土觀認為，莊主對葡萄園的管理哲學（有機/生物動力、老藤維護、採收時機）以及累積多代的地塊知識，都是風土表達的有機組成部分，不可忽視。' }
    ]
  },

  'm3-l2': {
    type: 'quiz', title: '🧠 地質結構與土壤知識檢測',
    questions: [
      { type: 'single', question: '布根地葡萄園土壤最重要的地質基礎來自哪個地質年代？', options: ['A. 寒武紀', 'B. 白堊紀', 'C. 侏羅紀', 'D. 第四紀'], correct: 2, explanation: '布根地的土壤主要源自侏羅紀（1.8-1.4 億年前）的石灰岩和泥灰岩沉積，這些岩層在之後的地殼運動和侵蝕中露出，形成金丘特有的地質多樣性，是最優質葡萄園的基礎。' },
      { type: 'single', question: '布根地最優質的特級園土壤通常包含哪種關鍵礦物組合？', options: ['A. 純砂岩，無石灰岩', 'B. 侏羅紀石灰岩（Calcaire）和泥灰岩（Marne）的混合', 'C. 純花崗岩', 'D. 火山玄武岩'], correct: 1, explanation: '布根地頂級土壤的「配方」是石灰岩（賦予礦物感和結構）與泥灰岩（保水性和豐富有機質）的黃金比例混合，呈現在金丘山坡中段最精華的位置。' },
      { type: 'multiple', question: '以下哪些是影響整個金丘（Côte d\'Or）地質的重要地質事件？（多選）', options: ['A. 阿爾卑斯山造山運動（產生斷層使石灰岩外露）', 'B. 冰河作用搬運礫石', 'C. 侏羅紀海洋沉積（形成石灰岩層）', 'D. 新生代火山噴發（形成火山岩）'], correct: [0, 1, 2], explanation: '侏羅紀海洋沉積形成石灰岩；阿爾卑斯造山運動使地層斷裂抬升；冰河搬運礫石（尤其夜丘北段）——三者共同塑造了金丘複雜的地質結構。金丘沒有火山岩地質。' },
      { type: 'single', question: '「Oolitic Lime」（鮞粒石灰岩）在布根地的重要性是？', options: ['A. 對葡萄酒品質沒有影響', 'B. 主要見於特級園土壤，賦予獨特的細膩礦物感和結構', 'C. 只出現在低等級的大區 Bourgogne 產區', 'D. 使土壤過鹼，不利葡萄生長'], correct: 1, explanation: '鮞粒石灰岩（球形微小顆粒構成）是布根地很多頂級特級園的關鍵地質成分，提供排水性、礦物質供應和特有的礦物感，在 Gevrey、Morey、Vosne 的頂級 Climat 都有分布。' },
      { type: 'single', question: '為什麼金丘山坡（Côte d\'Or）比谷地更適合頂級葡萄種植？', options: ['A. 坡地水分太多，比谷地更易積水', 'B. 坡地石灰岩土壤適度排水，根系被迫深入尋找礦物質，谷地土壤過肥反而降低品質', 'C. 坡地受到更少日照', 'D. 坡地完全無任何養分，葡萄更好'], correct: 1, explanation: '佳釀需要「痛苦」——肥沃的谷地讓葡萄藤長得太容易，根系淺、果實多但風味稀薄；坡地貧瘠的石灰岩土壤適度「壓迫」葡萄藤，使根系深入，積累複雜礦物質和風味濃縮度。' }
    ]
  },

  'm3-l3': {
    type: 'quiz', title: '🧠 坡向、海拔與微氣候知識檢測',
    questions: [
      { type: 'single', question: '金丘（Côte d\'Or）的葡萄園為什麼偏好東或東南朝向？', options: ['A. 只有東面才能種植葡萄', 'B. 東南向確保清晨日照（升溫快）和午後避免過熱，平衡成熟與酸度', 'C. 東南向使降雨更多', 'D. 西側是道路佔用，別無選擇'], correct: 1, explanation: '東南向坡地在清晨快速升溫（促進光合作用和成熟），午後陽光角度降低避免過熱（保留酸度），同時受到西風雨雲的屏擋，是最適合 Pinot Noir 和 Chardonnay 的朝向。' },
      { type: 'single', question: '金丘山坡海拔對葡萄園等級有何影響？', options: ['A. 海拔越高越好，山頂是最佳位置', 'B. 坡地中段（約 250-300m）適宜，山頂過冷，谷底過濕', 'C. 海拔完全不影響品質', 'D. 只有海拔 500 米以上才能種頂級葡萄'], correct: 1, explanation: '山坡中段是最佳「甜點區」：足夠高以確保排水和日照，但不會像山頂那樣過冷或風大；谷地低處積水、霜害嚴重，通常只有大區 Bourgogne 等級。' },
      { type: 'multiple', question: '以下哪些是布根地重要的微氣候因素？（多選）', options: ['A. 索恩河（Saône）的大型水體調節效應', 'B. 法國中央高地（Massif Central）的屏障擋住西風降雨', 'C. 地中海的暖流影響', 'D. 石灰岩地形積熱和反射日光的效果'], correct: [0, 1, 3], explanation: '索恩河調節溫度（減少霜害）；中央高地擋住大西洋潮濕氣流；石灰岩反光積熱效果（如 Comblanchien 白色石灰岩）——這三者共同塑造了布根地獨特的微氣候系統，地中海影響極微弱。' },
      { type: 'single', question: '「Hautes Côtes de Nuits」（高夜丘）的葡萄園與山坡主要特級園相比有何特點？', options: ['A. 等級更高，更昂貴', 'B. 位於金丘山坡背面，海拔更高，氣候更涼，風格更清淡', 'C. 只種植白葡萄', 'D. 由政府直接管理'], correct: 1, explanation: 'Hautes Côtes 位於金丘山坡的「內陸背坡」，海拔更高（350-400米），氣候更涼，葡萄成熟期更長，出產的 Pinot Noir 更清淡新鮮，價格遠比正面坡地親民，是性價比之選。' },
      { type: 'single', question: '「冷空氣下沉（Cold Air Drainage）」對布根地葡萄園有何正面作用？', options: ['A. 沒有正面作用，只造成霜害', 'B. 可幫助涼爽的夜晚降低葡萄溫度，保留天然酸度和香氣', 'C. 使葡萄更快成熟', 'D. 直接影響土壤礦物質含量'], correct: 1, explanation: '布根地的大陸性氣候帶來顯著的日夜溫差：白天溫暖充分成熟果糖，夜晚冷空氣下沉降溫，保留天然酸度和芬芳香氣。這種「涼夜效應」是布根地酒平衡感的關鍵。' }
    ]
  },

  'm3-l4': {
    type: 'quiz', title: '🧠 氣候因素與年份差異知識檢測',
    questions: [
      { type: 'single', question: '布根地最常見的農業氣候風險是哪兩種？', options: ['A. 乾旱和炎熱', 'B. 春霜（4-5月）和夏季冰雹', 'C. 颶風和海嘯', 'D. 秋季長雨和冬季酷寒'], correct: 1, explanation: '春霜是每年布根地農夫最害怕的威脅——發芽後的嫩芽極易被霜殺死，加熱器和風機裝置應運而生。冰雹在夏季可能在幾分鐘內摧毀一整個村莊的收成，尤其對靠近河谷的產區更危險。' },
      { type: 'single', question: '布根地 Pinot Noir 最理想的氣候條件是？', options: ['A. 熱帶氣候，高溫全年', 'B. 春涼夏溫、秋季乾燥晴朗，日照充分但涼爽', 'C. 全年涼爽，無溫差', 'D. 高降雨量、濕度高'], correct: 1, explanation: 'Pinot Noir 是最需要「涼爽」年份的品種之一——春天發芽順利、夏天適度溫暖、秋季乾燥晴朗是採收的理想條件。過熱導致酒精過高、過冷則無法成熟，兩者都是問題。' },
      { type: 'multiple', question: '以下哪些布根地年份被廣泛評為近代頂級年份？（多選）', options: ['A. 2010', 'B. 2015', 'C. 1999', 'D. 2005'], correct: [0, 1, 3], explanation: '2010、2015 和 2005 均被業界評為布根地近代最偉大年份之一。1999 雖也出色，但相對 2010/2015 的評價稍低，通常不被放在同一梯次。' },
      { type: 'single', question: '氣候變遷對布根地葡萄種植的主要威脅是？', options: ['A. 溫度降低，葡萄無法成熟', 'B. 採收期提前，酒精偏高，傳統涼爽風格遭受挑戰', 'C. 降雨增加，葡萄過於充沛', 'D. 日照不足，光合作用效率降低'], correct: 1, explanation: '過去 50 年，布根地平均採收日期提前了約 2 週，酒精濃度普遍提高。這威脅了布根地最重要的品質特徵——高酸與優雅，許多莊主現在改種海拔更高的地塊以尋找涼爽。' },
      { type: 'single', question: '「Elevage（陳釀）」在布根地酒款的年份表達中扮演什麼角色？', options: ['A. 完全消除年份差異', 'B. 透過橡木桶或酒槽熟化整合風味，讓年份特性更完整呈現', 'C. 只用於大量生產的低端酒', 'D. Elevage 越長，年份影響越小'], correct: 1, explanation: 'Elevage（酒槽或橡木桶中的熟化期）讓酒款整合單寧、酸度和桶味，好的 Elevage 能把出色年份的潛力充分引導出來。但 Elevage 本身不能「創造」年份特色，只是呈現的媒介。' }
    ]
  },

  // ══════════════════════════════════════════════
  // M4 特級園完整導覽
  // ══════════════════════════════════════════════
  'm4-l1': {
    type: 'quiz', title: '🧠 特級園制度知識檢測',
    questions: [
      { type: 'single', question: '布根地合計有多少個 Grand Cru（特級園）AOC？', options: ['A. 12 個', 'B. 25 個', 'C. 33 個', 'D. 50 個'], correct: 2, explanation: '布根地全境共有 33 個 Grand Cru AOC，主要集中在金丘（夜丘 24 個紅酒 Grand Cru + 伯恩丘 8 個白酒 Grand Cru），加上夏布利 1 個（含 7 個 Climate）。' },
      { type: 'single', question: 'Grand Cru 酒款在酒標上如何表示其等級？', options: ['A. 寫上「Grand Cru」並以大字標明 Bourgogne', 'B. 只寫特級園名稱（如 Chambertin），不需標村莊名，AOC 即為其園名', 'C. 需寫「Grand Cru Reserved」才完整', 'D. 以星形符號代替文字說明'], correct: 1, explanation: '布根地 Grand Cru 酒標上只需寫出特級園名稱（如「Chambertin」），這個名稱本身就是一個 AOC，等級高於村莊 AOC。這是布根地分級制度最簡潔也最有力的識別方式。' },
      { type: 'multiple', question: 'Grand Cru 與 Premier Cru 在法規上的主要差異是？（多選）', options: ['A. Grand Cru 有更嚴格的最低酒精度要求', 'B. Grand Cru 的最高允許產量（每公頃）比 Premier Cru 更低', 'C. Grand Cru 需要更長的法定陳年時間', 'D. Grand Cru 的 AOC 直接以地塊名命名，不再冠村莊名'], correct: [0, 1, 3], explanation: 'Grand Cru 規定：更高最低酒精度、更低最高產量（每公頃），以及 AOC 直接為地塊名（無需冠村莊）。布根地 Grand Cru 沒有強制最低陳年期（但酒莊可自願陳年更久）。' },
      { type: 'single', question: '布根地特級園制度最初由哪個機構確立分級架構？', options: ['A. 法國農業部', 'B. 由布根地葡萄酒職同業公會（BIVB）獨立發展', 'C. 19 世紀地質學家 Jules Lavalle 等提出的葡萄園分類，後被 AOC 法規採納', 'D. 由歐盟於二戰後制定'], correct: 2, explanation: '布根地分級制度的基礎來自 19 世紀的地質和農業研究（如 Jules Lavalle 1855 年的著作），結合數百年修道院積累的地塊知識，在 20 世紀被正式採納為 AOC 法規。' },
      { type: 'single', question: '為什麼「Clos de Vougeot」雖是 Grand Cru，品質卻被認為差異極大？', options: ['A. 因為 Clos de Vougeot 使用多種葡萄品種', 'B. 因為超過 80 個莊主持有不同地塊，不同位置（上段/下段）土壤差異顯著', 'C. 因為 AOC 法規對 Clos de Vougeot 管理不嚴', 'D. 因為 Clos de Vougeot 跨越兩個大區'], correct: 1, explanation: 'Clos de Vougeot 共 50 公頃，有逾 80 位莊主，靠近坡頂的上段地塊土壤較薄、品質最高（接近 Chambolle 和 Vosne）；下段較平坦、土壤肥沃，品質較低。買這款酒，莊主的選擇比特級園名稱本身更重要。' }
    ]
  },

  'm4-l2': {
    type: 'quiz', title: '🧠 夜丘特級園（北段）知識檢測',
    questions: [
      { type: 'single', question: '熱夫雷-香貝丹 9 個特級園中，被稱為「王者之王」的是哪一個？', options: ['A. Mazis-Chambertin', 'B. Chambertin', 'C. Latricières-Chambertin', 'D. Griotte-Chambertin'], correct: 1, explanation: 'Chambertin（約 13 公頃）和 Chambertin-Clos de Bèze（約 15 公頃）並列 Gevrey 最頂尖，是布根地評分最高的 Grand Cru 之一，以強勁酒體、深色果味和極強陳年潛力著稱。' },
      { type: 'single', question: '「Clos de Bèze」與「Chambertin-Clos de Bèze」有什麼法規差異？', options: ['A. 完全相同，只是行銷用詞不同', 'B. Clos de Bèze 可選擇標示為 Chambertin，但 Chambertin 不能標為 Clos de Bèze', 'C. Clos de Bèze 等級比 Chambertin 低', 'D. Clos de Bèze 是一級園而非特級園'], correct: 1, explanation: '這是布根地一個有趣的法規細節：Clos de Bèze 酒款可選擇在酒標上寫「Chambertin-Clos de Bèze」或純粹的「Chambertin」，但 Chambertin 園（不含 Clos de Bèze）則不能反過來標 Clos de Bèze。' },
      { type: 'multiple', question: '莫雷-聖丹尼（Morey-Saint-Denis）的 Grand Cru 包括哪些？（多選）', options: ['A. Clos de la Roche', 'B. Clos Saint-Denis', 'C. Clos de Tart（全部由 Pinault 家族擁有）', 'D. Bonnes-Mares（少部分）'], correct: [0, 1, 2, 3], explanation: 'Morey-Saint-Denis 的 Grand Cru 有：Clos de la Roche、Clos Saint-Denis、Clos des Lambrays、Clos de Tart（Monopole），以及一小部分 Bonnes-Mares——共五個特級園，是夜丘最多特級園（按數量）的村莊之一。' },
      { type: 'single', question: '「Bonnes-Mares」特級園橫跨哪兩個村莊？', options: ['A. Gevrey 和 Morey', 'B. Chambolle-Musigny 和 Morey-Saint-Denis', 'C. Vosne-Romanée 和 Nuits-Saint-Georges', 'D. Beaune 和 Pommard'], correct: 1, explanation: 'Bonnes-Mares 是少數橫跨兩個村莊的大型 Grand Cru——絕大部分（約 13.5 公頃）位於 Chambolle-Musigny，小部分（約 1.5 公頃）在 Morey-Saint-Denis，以豐滿的酒體著稱。' },
      { type: 'single', question: '「Clos des Lambrays」的特殊性質是？', options: ['A. 是布根地最小的特級園', 'B. 唯一完全被石圍牆包圍（Monopole）的夜丘特級園之一', 'C. 是近年才升格的最新特級園', 'D. 以白酒著稱'], correct: 2, explanation: 'Clos des Lambrays 是布根地最新升格為 Grand Cru 的葡萄園（1981 年），幾乎是 Monopole（由單一莊主 Domaine des Lambrays 持有），以優雅精緻的 Pinot Noir 著稱。' }
    ]
  },

  'm4-l3': {
    type: 'quiz', title: '🧠 夜丘特級園（中段）知識檢測',
    questions: [
      { type: 'single', question: '香波-慕西尼（Chambolle-Musigny）的兩個特級園是哪兩個？', options: ['A. Musigny 和 Les Amoureuses', 'B. Musigny 和 Bonnes-Mares', 'C. Musigny 和 Chambolle', 'D. Bonnes-Mares 和 Clos Saint-Denis'], correct: 1, explanation: 'Chambolle-Musigny 有兩個 Grand Cru：Musigny（以花香和優雅著稱）和 Bonnes-Mares（少部分）。Les Amoureuses 雖品質接近 Grand Cru，但正式分級仍是 Premier Cru。' },
      { type: 'single', question: '「Musigny 白酒（Blanc de Musigny）」最特別之處是？', options: ['A. 由 Gamay 品種釀造', 'B. 是夜丘 Grand Cru 中極罕見允許生產白酒的地塊（Chardonnay）', 'C. 完全由政府管理', 'D. 是布根地最便宜的特級園白酒'], correct: 1, explanation: 'Le Musigny 是夜丘唯一允許部分種植 Chardonnay 的 Grand Cru，De Vogüé 酒莊保存了少量老藤 Chardonnay，出產極稀少且昂貴的白 Musigny。這是布根地最獨特的白酒之一。' },
      { type: 'single', question: 'Vougeot 村最著名的特級園 Clos de Vougeot 的酒莊——已改建為博物館的歷史建築是？', options: ['A. Château de Pommard', 'B. Château du Clos de Vougeot（熙篤會酒窖）', 'C. Château de Gevrey', 'D. Château Montrachet'], correct: 1, explanation: 'Château du Clos de Vougeot 是中世紀熙篤會修道院的酒窖，現為「騎士兄弟會（Confrérie des Chevaliers du Tastevin）」的總部，定期舉辦盛宴，是布根地最重要的歷史建築之一。' },
      { type: 'multiple', question: '馮內-羅曼尼（Vosne-Romanée）的特級園包括哪些？（多選）', options: ['A. Romanée-Conti', 'B. La Tâche', 'C. Richebourg', 'D. Chambertin'], correct: [0, 1, 2], explanation: 'Vosne-Romanée 的特級園：Romanée-Conti、La Tâche、Richebourg、La Romanée、Romanée-Saint-Vivant（及 Echézeaux、Grands Echézeaux 在技術上位於 Flagey-Echézeaux）。Chambertin 屬於 Gevrey-Chambertin。' },
      { type: 'single', question: '為什麼 Romanée-Conti 的價格遠超其他布根地特級園？', options: ['A. 因為使用特殊的橡木桶品種', 'B. 極少量年產量（約 5,000 瓶）+ 風土傳奇性 + DRC 品牌溢價的三重效應', 'C. 因為政府對其徵稅最少', 'D. 因為是布根地最新的特級園'], correct: 1, explanation: 'RC 的超高價格是多因素的完美組合：極小面積（1.8 公頃）+ 極低年產量（約 5,000-6,000 瓶）+ 數百年歷史風土傳奇 + DRC 酒莊無懈可擊的品質聲譽 + 全球藏家的強烈需求，造就了無法複製的稀缺神話。' }
    ]
  },

  'm4-l4': {
    type: 'quiz', title: '🧠 夜丘特級園（下段）知識檢測',
    questions: [
      { type: 'single', question: 'Echézeaux 和 Grands Echézeaux 的差異是？', options: ['A. 完全相同，只是名稱不同', 'B. Grands Echézeaux（9 公頃）面積小且地位更高，Echézeaux（37 公頃）更大且風格多元', 'C. Echézeaux 是 Grand Cru，Grands Echézeaux 是 Premier Cru', 'D. 兩者都屬於 Gevrey-Chambertin'], correct: 1, explanation: 'Grands Echézeaux（約 9 公頃）品質更集中統一，更接近 Vosne-Romanée 特級園的細膩風格；Echézeaux（約 37 公頃）面積大得多，莊主眾多，品質差異顯著，但更容易取得（且相對 RC 性價比極高）。' },
      { type: 'single', question: '「Nuits-Saint-Georges」雖是夜丘南端重要村莊，卻沒有 Grand Cru 的主要原因是？', options: ['A. 當地葡萄品質不夠好', 'B. 歷史上分級申請未能通過，一級園品質已獲認可但升格程序仍在進行', 'C. 當地釀酒師不願申請', 'D. 法規規定南夜丘不得設特級園'], correct: 1, explanation: 'Nuits-Saint-Georges 沒有 Grand Cru 的原因複雜：歷史上分級時期各方未能達成共識，加之土地所有者利益分歧，使某些品質極高的地塊（如 Les Saint-Georges）未能順利升格，這一討論至今尚在繼續。' },
      { type: 'multiple', question: '以下哪些布根地特級園屬於 DRC 酒莊的擁有範圍？（多選）', options: ['A. Romanée-Conti（全部）', 'B. La Tâche（全部）', 'C. Chambertin（全部）', 'D. Richebourg（部分）'], correct: [0, 1, 3], explanation: 'DRC 完全擁有（Monopole）兩個 Grand Cru：Romanée-Conti 和 La Tâche；此外也持有 Richebourg、Romanée-Saint-Vivant、Echézeaux、Grands Echézeaux 的部分地塊。Chambertin 不屬於 DRC。' },
      { type: 'single', question: '瞭解夜丘 Grand Cru 時，「Monopole」的含義是？', options: ['A. 只對會員開放的特級園', 'B. 整個特級園由單一莊主完全擁有', 'C. 最高單價的特級園稱謂', 'D. 法國政府官方認定的最佳酒款'], correct: 1, explanation: 'Monopole 意指單一莊主獨家持有整個地塊。布根地例子包括 DRC 的 Romanée-Conti 和 La Tâche、Clos de Tart（由 Pinault/Artémis 集團擁有）、Romanée（Comte Liger-Belair）等。' },
      { type: 'single', question: 'La Romanée 特級園（約 0.85 公頃）的特殊性是？', options: ['A. 是全法國唯一由政府直接管理的葡萄園', 'B. 是布根地面積最小的特級園，由 Comte Liger-Belair 獨有', 'C. 是最高度機械化的布根地特級園', 'D. 以混種多個品種著名'], correct: 1, explanation: 'La Romanée（0.85 公頃）是布根地面積最小的 Grand Cru，由 Comte Liger-Belair 家族獨家持有（Monopole），年產量極少，拍賣市場價格接近甚至超過 Romanée-Conti，是布根地最神秘的特級園之一。' }
    ]
  },

  'm4-l5': {
    type: 'quiz', title: '🧠 伯恩丘特級園知識檢測',
    questions: [
      { type: 'single', question: '伯恩丘最重要的白酒特級園「Montrachet」與「Corton-Charlemagne」，哪個風格更飽滿濃郁？', options: ['A. Corton-Charlemagne 更飽滿', 'B. Montrachet 更飽滿', 'C. 兩者完全相同', 'D. Chevalier-Montrachet 比兩者都更飽滿'], correct: 1, explanation: 'Le Montrachet 以豐厚、奶油質地和卓越的陳年複雜度著稱，常被認為是全球最偉大的乾白酒。Corton-Charlemagne 更緊實礦物，但甜潤感不如 Montrachet；Chevalier 更細膩緊致。' },
      { type: 'single', question: 'Corton（紅酒 Grand Cru）和 Corton-Charlemagne（白酒 Grand Cru）的分界怎麼決定？', options: ['A. 由政府隨意指定', 'B. 根據種植品種：種 Pinot Noir 的地塊為 Corton 紅酒，種 Chardonnay 的為 Corton-Charlemagne', 'C. 南邊為白酒，北邊為紅酒', 'D. 按土壤顏色：白土為白酒，紅土為紅酒'], correct: 1, explanation: '科爾通山的 Grand Cru 劃分相對靈活：法規核心是種什麼品種就生產對應的酒款，種 Pinot Noir 的可申報 Corton，種 Chardonnay 的可申報 Corton-Charlemagne，但具體到山丘的坡向位置也有影響。' },
      { type: 'multiple', question: '伯恩丘 Grand Cru 中，以下哪些是白酒特級園？（多選）', options: ['A. Montrachet', 'B. Corton-Charlemagne', 'C. Chambertin', 'D. Bâtard-Montrachet'], correct: [0, 1, 3], explanation: '伯恩丘主要 Grand Cru 白酒：Montrachet、Bâtard-Montrachet、Chevalier-Montrachet、Bienvenues-Bâtard-Montrachet、Corton-Charlemagne，以及 Criots-Bâtard-Montrachet。Chambertin 是夜丘紅酒 Grand Cru。' },
      { type: 'single', question: '「Criots-Bâtard-Montrachet」是蒙哈榭家族中面積最小的特級園，約多少公頃？', options: ['A. 0.5 公頃', 'B. 1.6 公頃', 'C. 5 公頃', 'D. 10 公頃'], correct: 1, explanation: 'Criots-Bâtard-Montrachet 約只有 1.6 公頃，是蒙哈榭特級園家族中最小的成員，位於 Chassagne-Montrachet，以精緻細膩的礦物感著稱，年產量極少。' },
      { type: 'single', question: '「Bienvenues-Bâtard-Montrachet」的位置在哪裡？', options: ['A. 在 Le Montrachet 正上坡', 'B. 在 Puligny-Montrachet 一側，緊鄰 Bâtard-Montrachet', 'C. 在 Meursault 境內', 'D. 在 Corton 山上'], correct: 1, explanation: 'Bienvenues-Bâtard-Montrachet 完全位於 Puligny-Montrachet，緊鄰 Bâtard-Montrachet 之上，面積約 3.7 公頃，風格比 Bâtard 更細膩精緻，價格卻稍低，是性價比極高的 Grand Cru。' }
    ]
  },

  'm4-l6': {
    type: 'quiz', title: '🧠 特級園品鑑與選購知識檢測',
    questions: [
      { type: 'single', question: '初次購買布根地 Grand Cru，以下哪個策略最明智？', options: ['A. 直接選最貴的 Romanée-Conti', 'B. 從 Grand Cru「入門款」（如 Echézeaux、Corton）開始，了解特級園風格', 'C. 只買超市特惠款', 'D. 只購買超過 30 年陳年的老年份'], correct: 1, explanation: '布根地 Grand Cru 的「入門選擇」：Echézeaux（相對平實）、Corton（寬廣）、Corton-Charlemagne（白）——這些雖是特級園但相對 RC 易入手，適合建立參考標準後再比較其他 Grand Cru。' },
      { type: 'multiple', question: '評估布根地 Grand Cru 時，莊主比地塊更重要的說法在哪些情況成立？（多選）', options: ['A. Clos de Vougeot（80+ 莊主，品質差異極大）', 'B. Echézeaux（多莊主，品質差異顯著）', 'C. Romanée-Conti（單一莊主，品質穩定）', 'D. 任何地塊品質都主要取決於 AOC 等級，與莊主無關'], correct: [0, 1], explanation: '在 Clos de Vougeot 和 Echézeaux 等多莊主特級園，同一 Grand Cru 地塊中不同莊主的水準天差地別，此時莊主選擇比地塊名更關鍵。Romanée-Conti 因只有 DRC 一莊，反而沒有這個問題。' },
      { type: 'single', question: '選購布根地 Grand Cru 時，「橫向比較（Horizontal Tasting）」指的是？', options: ['A. 同一酒莊不同年份的比較', 'B. 同一年份同一 Grand Cru 的不同莊主比較', 'C. 不同 Grand Cru 的比較', 'D. 紅酒與白酒的比較'], correct: 1, explanation: '橫向品酒（Horizontal）= 同年份、同地塊、不同莊主的比較，可直接評估各莊的農耕和釀酒哲學差異。例如比較同年份的 10 家 Chambolle Musigny Premier Cru，是了解布根地多元表達的最佳方式。' },
      { type: 'single', question: '「En Primeur（期酒）」制度在布根地有多普遍？', options: ['A. 非常普遍，類似波爾多', 'B. 布根地沒有期酒制度，所有酒款在裝瓶後才出售', 'C. 只有 DRC 有期酒制度', 'D. 全部特級園都有強制期酒制度'], correct: 1, explanation: '布根地（Burgundy）沒有波爾多式的期酒（En Primeur）制度，幾乎所有酒款都是裝瓶後才進入市場。這使得購買布根地酒時，買家需要直接評估已裝瓶的成品，而非期貨預測。' },
      { type: 'single', question: '布根地 Grand Cru 投資收藏的核心風險是什麼？', options: ['A. 特級園酒從不升值', 'B. 儲存條件不佳導致品質下降，加之年份差異風險和假酒問題', 'C. 特級園酒產量太大，無法稀缺', 'D. 布根地特級園已不再受收藏家追捧'], correct: 1, explanation: '收藏布根地 Grand Cru 的主要風險：1) 儲存溫控（12-14°C、70-75% 濕度）一旦失當，投資全毀；2) 年份差異顯著，差年份的 Grand Cru 不一定值得高價；3) 布根地是假酒重災區，需從可靠渠道購買。' }
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
  const alreadyDone = lesson.slides.some(s => s._marker === MARKER)
  if (alreadyDone) { console.log(`⏭️  ${moduleFile}/${lessonId} 已跳過`); return false }
  lesson.slides.push({ ...quiz, _marker: MARKER })
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf8')
  console.log(`✅ ${moduleFile}/${lessonId} 注入 ${quiz.questions.length} 題`)
  return true
}

let ok = 0
const pairs = [
  ['intermediate-m1.json', 'm1-l1'],
  ['intermediate-m1.json', 'm1-l2'],
  ['intermediate-m1.json', 'm1-l3'],
  ['intermediate-m1.json', 'm1-l4'],
  ['intermediate-m1.json', 'm1-l5'],
  ['intermediate-m2.json', 'm2-l1'],
  ['intermediate-m2.json', 'm2-l2'],
  ['intermediate-m2.json', 'm2-l3'],
  ['intermediate-m2.json', 'm2-l4'],
  ['intermediate-m2.json', 'm2-l5'],
  ['intermediate-m3.json', 'm3-l1'],
  ['intermediate-m3.json', 'm3-l2'],
  ['intermediate-m3.json', 'm3-l3'],
  ['intermediate-m3.json', 'm3-l4'],
  ['intermediate-m4.json', 'm4-l1'],
  ['intermediate-m4.json', 'm4-l2'],
  ['intermediate-m4.json', 'm4-l3'],
  ['intermediate-m4.json', 'm4-l4'],
  ['intermediate-m4.json', 'm4-l5'],
  ['intermediate-m4.json', 'm4-l6'],
]

console.log('=== 布根地 L2 Quiz 注入 — Batch 1 (M1-M4) ===\n')
for (const [file, lid] of pairs) {
  if (QUIZ_MAP[lid]) { if (injectQuiz(file, lid, QUIZ_MAP[lid])) ok++ }
  else console.log(`⚠️  無題目定義：${lid}`)
}
console.log(`\n完成：${ok}/20 已注入`)
