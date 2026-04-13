/**
 * inject-bourgogne-quiz.mjs
 * 為布根地 Level 1 的每個 lesson 加入 quiz slides（知識檢測）
 * 並為每個 module 的最後一課標記 isFinalExam，建立 quiz-bank.json
 *
 * 布根地架構特殊：lesson 包在 module JSON 的 lessons[] 陣列中
 * 路徑：public/bourgogne/data/courses/level1/beginner-m*.json
 */

import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE = join(__dirname, '..', 'public', 'bourgogne', 'data', 'courses', 'level1')

function filePath(name) {
  return join(BASE, name)
}

// ─── Quiz slides for each lesson in each module ────────────────────────────

// 所有 lesson 的 quiz slides（以 module+lesson 為 key）
const QUIZ_MAP = {

  // ── Module 1: 認識布根地 ──────────────────────────────
  'm1-l1': {
    type: 'quiz', title: '🧠 知識檢測',
    questions: [
      { type: 'single', question: '布根地葡萄園最核心的地理概念「Terroir 風土」包含哪個最關鍵的元素？', options: ['A. 酒莊品牌', 'B. 土壤、氣候、地形的綜合', 'C. 年份的好壞', 'D. 釀酒師技術'], correct: 1, explanation: '布根地的「Terroir 風土」強調土壤、氣候、地形和日照等自然條件的綜合影響，是布根地葡萄酒哲學的核心，也是各地塊（Climat）差異的根本原因。' },
      { type: 'single', question: '布根地位於法國的哪個方向？', options: ['A. 西南部，接近大西洋', 'B. 東南部，靠近地中海', 'C. 中東部，內陸大陸性氣候', 'D. 北部，接近英吉利海峽'], correct: 2, explanation: '布根地位於法國中東部，是典型的大陸性氣候，夏熱冬冷，氣溫差異大，有利於葡萄積累酸度和糖分，為精緻細膩的風格奠定基礎。' },
      { type: 'multiple', question: '以下哪些是布根地葡萄園的重要地理特徵？（多選）', options: ['A. 金丘（Côte d\'Or）山坡', 'B. 石灰岩和黏土混合土壤', 'C. 靠近大西洋的海洋性氣候', 'D. 朝東或東南方向的坡地'], correct: [0, 1, 3], explanation: '金丘山坡、石灰岩黏土土壤和朝東坡地都是布根地關鍵地理特徵。布根地是大陸性氣候，不是海洋性氣候：距大西洋遙遠。' },
      { type: 'single', question: '布根地最重要的河流是哪條？', options: ['A. 塞納河（Seine）', 'B. 索恩河（Saône）', 'C. 隆河（Rhône）', 'D. 盧瓦爾河（Loire）'], correct: 1, explanation: '索恩河流經布根地東側，調節了整個區域的氣溫，減少了霜害風險，並在歷史上是布根地葡萄酒的重要運輸通道。' },
      { type: 'multiple', question: '哪些是影響布根地葡萄酒風格的氣候特點？（多選）', options: ['A. 大陸性氣候，溫差大', 'B. 春霜和冰雹是主要自然風險', 'C. 全年溫暖少雨，類似地中海', 'D. 較涼爽，葡萄成熟期長'], correct: [0, 1, 3], explanation: '布根地大陸性氣候特點：春霜和冰雹是主要危害，較涼爽的氣溫使葡萄成熟期長，有助於酸度保留。布根地絕非地中海型氣候。' }
    ]
  },

  'm1-l2': {
    type: 'quiz', title: '🧠 知識檢測',
    questions: [
      { type: 'single', question: '布根地葡萄酒歷史中，哪個群體對葡萄園的發展和地圖化貢獻最大？', options: ['A. 法國國王', 'B. 天主教修道院僧侶', 'C. 英國商人', 'D. 荷蘭投資者'], correct: 1, explanation: '熙篤會（Cistercian）和克呂尼修道院（Cluny Abbey）的僧侶在中世紀對布根地的葡萄園進行了精密的研究、分類和地圖化，建立了現代 Climat 系統的基礎。' },
      { type: 'single', question: '歷史上哪個貴族家族統治布根地公國並使布根地酒享譽歐洲？', options: ['A. 美第奇家族（Medici）', 'B. 哈布斯堡家族（Habsburg）', 'C. 瓦羅瓦公爵家族（Valois）', 'D. 薩伏依家族（Savoy）'], correct: 2, explanation: '中世紀布根地公國由瓦羅瓦公爵（Dukes of Burgundy）統治，他們積極推廣布根地酒，並出口至歐洲各地宮廷，讓布根地葡萄酒享譽大陸。' },
      { type: 'multiple', question: '法國大革命對布根地葡萄園的影響包括哪些？（多選）', options: ['A. 沒收修道院和貴族的葡萄園', 'B. 葡萄園被分割後拍賣給多位買家', 'C. 所有葡萄園都收歸國有', 'D. 導致今日布根地極為分散的土地所有權'], correct: [0, 1, 3], explanation: '法國大革命（1789年）沒收並拍賣了修道院和貴族的葡萄園，土地被分割給多位小地主，形成了布根地今日極度碎片化的土地結構，同一個 Climat 可能有幾十個擁有者。' },
      { type: 'single', question: '布根地的「拿破崙法典」（Napoleonic Code）對葡萄園所有權的長遠影響是？', options: ['A. 集中了土地所有權', 'B. 平均繼承原則使葡萄園繼續分割', 'C. 禁止賣地，保持穩定', 'D. 沒有顯著影響'], correct: 1, explanation: '拿破崙法典規定遺產必須平均分配給所有子女，每代相傳使葡萄園不斷細分。因此 DRC 的 Romanée-Conti 只有 1.8 公頃，但可能曾有幾十個擁有者。' },
      { type: 'single', question: '「Négociant」在布根地葡萄酒貿易中扮演什麼角色？', options: ['A. 政府認證的品酒師', 'B. 收購葡萄或葡萄汁並釀造裝瓶的酒商', 'C. 専門出口布根地酒的外國企業', 'D. 負責布根地葡萄酒認證的機構'], correct: 1, explanation: 'Négociant（酒商）是布根地重要的角色：向多個小莊主收購葡萄或原酒，統一釀造和裝瓶銷售。Bouchard、Louis Jadot、Drouhin 等都是知名的 Négoce 酒商。' }
    ]
  },

  'm1-l3': {
    type: 'quiz', title: '🧠 知識檢測',
    questions: [
      { type: 'single', question: '布根地紅酒幾乎全用哪個葡萄品種釀造？', options: ['A. Cabernet Sauvignon', 'B. Merlot', 'C. Pinot Noir', 'D. Syrah'], correct: 2, explanation: 'Pinot Noir 是布根地紅酒的唯一品種，既是其優雅和複雜度的來源，也是布根地葡萄酒風格的定義者。高酸輕體，香氣細膩，是世界上最難種植也最受收藏家追捧的品種。' },
      { type: 'single', question: '布根地白酒主要用哪個品種釀造？', options: ['A. Sauvignon Blanc', 'B. Chardonnay', 'C. Riesling', 'D. Viognier'], correct: 1, explanation: 'Chardonnay 是布根地白酒的核心品種，從夏布利的礦物感到默爾索（Meursault）的奶油感，展現了 Chardonnay 在不同風土下的驚人多樣性，被視為世界最偉大的白葡萄品種之一。' },
      { type: 'multiple', question: '關於布根地 Pinot Noir 的特徵，以下哪些是正確的？（多選）', options: ['A. 單寧輕，顏色比 Cabernet Sauvignon 淺', 'B. 以高酸度和果香見長', 'C. 老藤和好年份可陳年數十年', 'D. 濃黑如墨，高酒精，適合早期飲用'], correct: [0, 1, 2], explanation: 'Pinot Noir 以輕盈單寧、淺寶石紅色、高酸度和紅果香為特徵。優質 Pinot Noir（如 Grand Cru）具有極強的陳年潛力，但顏色永遠不會像 Cabernet 那樣深濃，這是品種本質。' },
      { type: 'single', question: '布根地薄酒萊（Beaujolais）地區主要使用哪個品種釀酒？', options: ['A. Pinot Noir', 'B. Gamay', 'C. Grenache', 'D. Tempranillo'], correct: 1, explanation: 'Gamay 是薄酒萊的核心品種，帶有紅果、花香和些微土壤香，以新鮮活潑的風格著稱。十大特級村（Crus）的 Gamay 甚至可陳年，比一般薄酒萊風格複雜許多。' },
      { type: 'multiple', question: '布根地還有哪些輔助葡萄品種？（多選）', options: ['A. Aligoté（薄酒萊以外的白葡萄）', 'B. Bourgogne Blanc（Chardonnay）', 'C. Merlot 也允許調配', 'D. Pinot Gris 和 Pinot Blanc 可少量使用'], correct: [0, 3], explanation: 'Aligoté 是布根地最重要的次要白葡萄，常在 Bourgogne Aligoté AOC 出現。Pinot Gris 和 Pinot Blanc 允許少量用在白酒調配。Merlot 完全不允許在布根地使用。' }
    ]
  },

  'm1-l4': {
    type: 'quiz', title: '🧠 知識檢測',
    questions: [
      { type: 'single', question: '看到一瓶酒標上寫著「Gevrey-Chambertin」，這是指什麼？', options: ['A. 葡萄品種名稱', 'B. 村莊 AOC 級別產區名', 'C. 特定酒莊名稱', 'D. 釀酒師的名字'], correct: 1, explanation: 'Gevrey-Chambertin 是夜丘的一個村莊，在布根地酒標上寫村莊名表示此酒來自村莊等級（Village AOC），品質比大區 Bourgogne 高，但低於一級園（Premier Cru）和特級園（Grand Cru）。' },
      { type: 'single', question: '酒標上的「1er Cru」或「Premier Cru」表示什麼？', options: ['A. 第一年釀造', 'B. 布根地分級第二高等級的葡萄園', 'C. 酒莊創始人的稱號', 'D. 表示酒是在第一桶橡木桶陳年'], correct: 1, explanation: '布根地的 Premier Cru（一級園）是分四級中的第二高等（大區 < 村莊 < 一級園 < 特級園）。一級園的名字通常在村名後面，如 Chambolle-Musigny Les Amoureuses 1er Cru。' },
      { type: 'multiple', question: '解讀「Chambolle-Musigny Les Amoureuses Premier Cru 2018」這個酒標，以下哪些資訊是正確的？（多選）', options: ['A. 這是一個一級園等級的酒', 'B. 葡萄園叫做 Les Amoureuses，位於 Chambolle-Musigny 村', 'C. 2018 是葡萄種植年份', 'D. 這是布根地最高的 Grand Cru 特級園'], correct: [0, 1, 2], explanation: '這瓶酒是 Premier Cru（一級園），不是 Grand Cru。Les Amoureuses 是葡萄園（Climat）名稱，位於 Chambolle-Musigny 村，2018 是年份。Premier Cru 雖高但仍次於 Grand Cru。' },
      { type: 'single', question: '如果酒標只寫「Bourgogne Pinot Noir」，這代表什麼等級？', options: ['A. 最高等級，Grand Cru', 'B. 布根地大區等級（最基礎）', 'C. 一級園等級', 'D. 村莊等級'], correct: 1, explanation: '只寫「Bourgogne」是大區 AOC，是四個等級中最基礎的，葡萄可來自布根地全區，品質通常最親民，適合日常飲用，價格也最低。' },
      { type: 'single', question: '「Domaine」和「Négociant」在布根地的主要差異是？', options: ['A. Domaine 只賣白酒，Négociant 只賣紅酒', 'B. Domaine 擁有自己葡萄園自釀；Négociant 向外購買葡萄或原酒', 'C. 兩者法律上完全相同', 'D. Négociant 代表更高品質'], correct: 1, explanation: 'Domaine（酒莊）擁有自己的葡萄園並全程自釀；Négociant（酒商）向多個小農購買葡萄或葡萄汁釀造裝瓶。Domaine 釀造通常更有地塊特點，Négociant 則提供更穩定的量和多元選擇。' }
    ]
  },

  // ── Module 2: 分級制度 ─────────────────────────────────
  'lesson1': {  // beginner-m2 lesson1
    type: 'quiz', title: '🧠 知識檢測',
    questions: [
      { type: 'single', question: '布根地 AOC 制度最高等級是？', options: ['A. Bourgogne 大區', 'B. Village 村莊', 'C. Premier Cru 一級園', 'D. Grand Cru 特級園'], correct: 3, explanation: 'Grand Cru（特級園）是布根地 AOC 金字塔的頂端，全布根地只有 33 個特級園，釀出的酒被認為是世界上最偉大的葡萄酒之一。典型如 Romanée-Conti、Chambertin、Montrachet。' },
      { type: 'multiple', question: '布根地 AOC 金字塔从高到低的順序是？（全選正確排列）', options: ['A. Grand Cru > Premier Cru > Village > Bourgogne', 'B. Bourgogne > Village > Premier Cru > Grand Cru', 'C. Village > Premier Cru > Grand Cru > Bourgogne', 'D. Grand Cru 是最低的入門等級'], correct: [0], explanation: 'A 是正確順序：特級園 > 一級園 > 村莊 > 大區。酒標越高等級代表葡萄的出產、產量限制越嚴格，品質（理論上）越高，價格也越貴。' },
      { type: 'single', question: '布根地有多少個 Grand Cru（特級園）？', options: ['A. 約 10 個', 'B. 約 33 個', 'C. 超過 100 個', 'D. 超過 500 個'], correct: 1, explanation: '布根地全境只有 33 個特級園，幾乎全部集中在金丘（Côte d\'Or），其中夏布利有 1 個 Grand Cru（含 7 個 Cliclasses），伯恩丘有 8 個白酒特級園，夜丘有 24 個紅酒特級園。' },
      { type: 'single', question: 'AOC 制度中「Appellation d\'Origine Contrôlée」的核心意涵是？', options: ['A. 酒的最低零售定價保護', 'B. 特定地理區域的原產地名稱保護+釀造規範', 'C. 只保護酒的名稱，不管品質', 'D. 適用於所有法國食品的標示規定'], correct: 1, explanation: 'AOC（現改為 AOP）是法國地理標誌保護制度，規定了葡萄品種、種植方法、產量、釀造工藝等，保證「特定地方的特定做法」，避免外地仿冒。' },
      { type: 'single', question: '為什麼布根地的特級園（Grand Cru）在酒標上常常不需要寫村莊名稱？', options: ['A. 法規禁止寫村莊名', 'B. 特級園本身就是最高的 AOC，名稱本身就夠了', 'C. 為了節省酒標空間', 'D. 因為 Grand Cru 跨越多個村莊'], correct: 1, explanation: '特級園自成一個 AOC，名字本身就代表最高身份。如酒標只寫「Chambertin」不寫村莊，因為 Chambertin 本身就是一個 AOC，等級比 Gevrey-Chambertin 村莊 AOC 更高。' }
    ]
  },

  // Module 2 - lesson2, lesson3 使用 lesson1 的 override，不能用相同 key
  // 改用 m2-lesson2, m2-lesson3 區分
  'm2-lesson2': {
    type: 'quiz', title: '🧠 知識檢測',
    questions: [
      { type: 'single', question: '金丘（Côte d\'Or）的「Or」是什麼意思？', options: ['A. 黄金，象徵財富和頂級品質', 'B. 東方（Orient）的縮寫', 'C. 一位法王的名字', 'D. 一種土壤類型'], correct: 0, explanation: '「Côte d\'Or」的 Or 意為「黃金」，得名可能源於秋天金黃落葉的景色，或象徵這片山坡上出產的頂級葡萄酒的價值，是布根地最重要的子產區。' },
      { type: 'multiple', question: '金丘（Côte d\'Or）分為哪兩個主要部分？（多選）', options: ['A. 夜丘（Côte de Nuits）', 'B. 伯恩丘（Côte de Beaune）', 'C. 夏布利（Chablis）', 'D. 夏隆內丘（Côte Chalonnaise）'], correct: [0, 1], explanation: '金丘分為北部的夜丘（Côte de Nuits，主要紅酒，Pinot Noir 王國）和南部的伯恩丘（Côte de Beaune，紅白酒皆有，Chardonnay 最著名）。' },
      { type: 'single', question: '夜丘（Côte de Nuits）最著名的酒是什麼類型？', options: ['A. 夏布利風格礦物白酒', 'B. 頂級 Pinot Noir 紅酒（全球最貴紅酒之一）', 'C. 甜型遲摘白酒', 'D. 薄酒萊新酒風格'], correct: 1, explanation: '夜丘是世界頂級 Pinot Noir 的產地，Romanée-Conti、La Tâche、Chambertin 等傳奇特級園都在此。DRC（Domaine de la Romanée-Conti）出產的 Romanée-Conti 是世界最貴的葡萄酒之一。' },
      { type: 'single', question: '伯恩丘（Côte de Beaune）最著名的白酒村莊是？', options: ['A. Gevrey-Chambertin', 'B. Vosne-Romanée', 'C. Meursault', 'D. Nuits-Saint-Georges'], correct: 2, explanation: 'Meursault（默爾索）是伯恩丘最著名的白酒村莊，以成熟的 Chardonnay 帶奶油、榛子、蜂蜜香氣著稱。周邊的 Puligny-Montrachet 和 Chassagne-Montrachet 同樣頂級。' },
      { type: 'single', question: '什麼是布根地「Climat」的概念？', options: ['A. 當年度的氣候預報', 'B. 每個具名葡萄園地塊的독特反土', 'C. 布根地的溫度分布地圖', 'D. 布根地的氣象站網絡'], correct: 1, explanation: 'Climat 是布根地的精髓概念，指的是每個具名的葡萄園地塊，有自己獨特的土壤、地形和微氣候。布根地有超過 1200 個 Climat，已被列為 UNESCO 世界遺產。' }
    ]
  },

  'm2-lesson3': {
    type: 'quiz', title: '🧠 知識檢測',
    questions: [
      { type: 'single', question: '看到酒標上寫「Meursault Les Perrières 1er Cru」，如何讀懂它？', options: ['A. Les Perrières 是大區名稱', 'B. 這是 Meursault 村的 Les Perrières 一級園地塊', 'C. Meursault 是釀酒師的名字', 'D. 1er Cru 代表第一年的葡萄'], correct: 1, explanation: '此酒標的讀法：Meursault 是村莊名；Les Perrières 是該村的一級園地塊（Climat）名；1er Cru 確認等級。這種格式（村莊名 + Climat 名 + 等級）是布根地一級園的標準酒標格式。' },
      { type: 'multiple', question: '關於布根地特級園（Grand Cru），以下哪些是正確的？（多選）', options: ['A. 全布根地只有 33 個特級園', 'B. 特級園 AOC 酒標上通常只寫特級園名，不寫村莊', 'C. Grand Cru 葡萄以紅酒為主，也有一些頂級白酒', 'D. 任何酒莊都可以把酒標成 Grand Cru'], correct: [0, 1, 2], explanation: '布根地有 33 個特級園，酒標只寫特級園名（因為 Grand Cru 自成一個 AOC），既有 Pinot Noir 紅酒（夜丘為主）也有 Chardonnay 白酒（Montrachet 等）。Grand Cru 是法律認定的地塊，非自行申請。' },
      { type: 'single', question: '布根地的 BIVB（Bourgogne Wine Board）主要負責什麼？', options: ['A. 管理 Grand Cru 等級酒的年產量', 'B. 推廣布根地葡萄酒並維護 AOC 制度', 'C. 發放釀酒許可證', 'D. 決定布根地葡萄酒售價'], correct: 1, explanation: 'BIVB（Bureau Interprofessionnel des Vins de Bourgogne）是布根地葡萄酒同業公會，負責推廣行銷、保護 AOC 制度、進行市場研究和教育推廣，是布根地葡萄酒的官方代表機構。' },
      { type: 'single', question: '什麼是「En Primeur」在布根地交易中的意義？', options: ['A. 只在春季出售的葡萄酒', 'B. 以桶內期酒方式預訂尚未裝瓶的酒', 'C. 代表添加糖分（Chaptalization）的酒', 'D. 代表有機認證的酒款'], correct: 1, explanation: 'En Primeur（期酒）是在葡萄酒尚未完成釀造、仍在桶中陳年時預訂購買，通常以較低價格換取等待時間。布根地期酒市場雖不如波爾多規模大，但頂級酒莊也有類似安排。' },
      { type: 'multiple', question: '為什麼布根地的土地所有制度如此分散？（多選）', options: ['A. 法國大革命後沒收並分割了教會和貴族土地', 'B. 拿破崙法典平均繼承原則持續分割土地', 'C. 布根地政府政策鼓勵小農種植', 'D. 地方傳統要求每個家庭都持有一小塊葡萄園'], correct: [0, 1], explanation: '法國大革命的土地再分配（1789年）和拿破崙法典的平均繼承制是布根地土地碎片化的兩大歷史原因，使得同一個特級園（如 Clos de Vougeot）可能有超過 80 個不同的擁有者。' }
    ]
  },

  // ── Module 3: 夜丘 ──────────────────────────────────────
  'lesson1_m3': {  // 夜丘概覽
    type: 'quiz', title: '🧠 知識檢測',
    questions: [
      { type: 'single', question: '夜丘（Côte de Nuits）以哪種類型的葡萄酒最為知名？', options: ['A. 頂級 Chardonnay 白酒', 'B. 甜型遲摘白酒', 'C. 頂級 Pinot Noir 紅酒', 'D. 薄酒萊風格的 Gamay 紅酒'], correct: 2, explanation: '夜丘是全球頂級 Pinot Noir 紅酒的核心產地，Romanée-Conti、Chambertin、Musigny 等最傳奇的特級園都集中在這條南北長約 20 公里的山坡上。' },
      { type: 'single', question: '夜丘最著名也最北端的特級村是哪個？', options: ['A. Nuits-Saint-Georges', 'B. Vosne-Romanée', 'C. Gevrey-Chambertin', 'D. Chambolle-Musigny'], correct: 2, explanation: 'Gevrey-Chambertin 是夜丘最北端的重要特級村，擁有布根地最多的特級園之一（包括 Chambertin 和 Mazis-Chambertin 等），以濃郁強勁風格著稱，是夜丘的門戶。' },
      { type: 'multiple', question: 'DRC（Domaine de la Romanée-Conti）在布根地的地位包括哪些？（多選）', options: ['A. 全球最著名也最貴的布根地酒莊', 'B. 擁有唯一完整的 Romanée-Conti 特級園（1.8ha）', 'C. 全部使用有機耕作', 'D. 只生產白酒'], correct: [0, 1, 2], explanation: 'DRC 是布根地最傳奇的酒莊：Romanée-Conti 特級園歸其完整所有；採用生物動力法和有機種植；出產紅、白酒，並非只有白酒。其酒在全球拍賣會上屢創天價。' },
      { type: 'single', question: '「Clos de Vougeot」這個特級園最特別的地方是？', options: ['A. 全部由一個釀酒師釀造', 'B. 是布根地最小的特級園', 'C. 50 公頃由超過 80 個不同擁有者共享', 'D. 位於夏布利，是唯一的礦物紅酒'], correct: 2, explanation: 'Clos de Vougeot 是布根地分散所有權的極端例子：50 公頃的特級園有超過 80 個不同的擁有者，每個人釀出的 Clos de Vougeot 品質差異極大，是研究「風土 vs. 釀酒師」很有趣的案例。' },
      { type: 'single', question: '夜丘的土壤主要由哪種岩石組成，對葡萄酒有什麼影響？', options: ['A. 砂岩，賦予清爽果香', 'B. 花崗岩，造就礦物感', 'C. 石灰岩和黏土混合，賦予複雜度和陳年潛力', 'D. 火山岩，帶來獨特煙燻感'], correct: 2, explanation: '夜丘山坡以石灰岩、黏土和泥灰岩（Marl）混合土壤為主，這種組合不僅提供了良好的排水性，也賦予 Pinot Noir 細膩的結構感、礦石風味和長期陳年的能力。' }
    ]
  },

  // ── Module 4: 伯恩丘 ──────────────────────────────────
  'lesson1_m4': {
    type: 'quiz', title: '🧠 知識檢測',
    questions: [
      { type: 'single', question: '伯恩丘（Côte de Beaune）最著名的是哪種類型的葡萄酒？', options: ['A. 薄酒萊新酒', 'B. 頂級 Chardonnay 干型白酒', 'C. 甜型貴腐白酒', 'D. 加烈酒（Fortified wine）'], correct: 1, explanation: '伯恩丘是世界頂級白酒的核心，Meursault、Puligny-Montrachet 和 Chassagne-Montrachet 等村莊的 Chardonnay 被視為白酒世界的最高標準之一。也有優質的 Pinot Noir 紅酒如 Pommard 和 Volnay。' },
      { type: 'single', question: '「Le Montrachet」是什麼？', options: ['A. 布根地最著名的 Pinot Noir 特級園', 'B. 被譽為世界最偉大白酒的特級園（Chardonnay）', 'C. 薄酒萊十大特級村之一', 'D. 一個村莊 AOC 等級的酒'], correct: 1, explanation: '「Le Montrachet」（通常稱 Montrachet）是一個 7 公頃的白酒特級園，跨越 Puligny-Montrachet 和 Chassagne-Montrachet 兩村，以礦物感和複雜度被譽為世界最偉大的 Chardonnay 白酒。' },
      { type: 'multiple', question: '以下哪些是伯恩丘著名的 Chardonnay 白酒村莊？（多選）', options: ['A. Meursault', 'B. Puligny-Montrachet', 'C. Gevrey-Chambertin', 'D. Chassagne-Montrachet'], correct: [0, 1, 3], explanation: 'Meursault、Puligny-Montrachet 和 Chassagne-Montrachet 是伯恩丘白酒的「三大名村」，出產的 Chardonnay 各有特色：Meursault 奶油感、Puligny 礦物優雅、Chassagne 豐沛複雜。Gevrey-Chambertin 在夜丘，以紅酒著名。' },
      { type: 'single', question: 'Pommard 和 Volnay 是伯恩丘的哪種類型代表？', options: ['A. 頂級白酒代表村', 'B. 伯恩丘優質 Pinot Noir 紅酒代表村', 'C. 薄酒萊 Gamay 的代表產區', 'D. 夏布利風格的礦物白酒'], correct: 1, explanation: 'Pommard（深色、濃郁、需陳年）和 Volnay（優雅輕盈、花香、可早飲）是伯恩丘最著名的兩個 Pinot Noir 紅酒村莊，雖沒有特級園，卻有多個優質的一級園。' },
      { type: 'single', question: '伯恩市（Beaune）最著名的年度葡萄酒活動是什麼？', options: ['A. 布根地新酒節（Nouveau）', 'B. 伯恩慈善醫院拍賣會（Hospices de Beaune Auction）', 'C. 金丘葡萄酒展（Côte d\'Or Wine Fair）', 'D. 布根地收藏家大會'], correct: 1, explanation: '每年11月第三個週末的「Hospices de Beaune Auction」（伯恩慈善醫院葡萄酒拍賣）是全球最古老的葡萄酒慈善拍賣，始於1859年，拍賣所得支持醫院，也是布根地年份行情的重要風向標。' }
    ]
  },

  // ── Module 5: 夏布利 ─────────────────────────────────────
  'lesson1_m5': {
    type: 'quiz', title: '🧠 知識檢測',
    questions: [
      { type: 'single', question: '夏布利（Chablis）葡萄酒的核心特徵是？', options: ['A. 豐盛奶油感，成熟熱帶水果', 'B. 高酸礦物感，帶獨特火石（Flinty）氣息', 'C. 甜型，口感圓潤甜美', 'D. 低酸高酒精，容易入口'], correct: 1, explanation: '夏布利位於布根地最北、最涼爽的地方，加上 Kimmeridgian 石灰岩土壤（含古牡蠣化石），Chardonnay 在此展現出高酸、清瘦、礦物感和獨特的「打火石」（Flinty）氣息，與南部 Côte de Beaune 的奶油風格截然不同。' },
      { type: 'single', question: '夏布利獨特的 Kimmeridgian 土壤有什麼特色？', options: ['A. 富含鐵質，賦予紅酒濃郁色澤', 'B. 白堊紀石灰岩，含古牡蠣化石，賦予獨特礦物感', 'C. 火山崩積土，帶有煙燻礦石味', 'D. 砂礫混合土，適合早熟品種'], correct: 1, explanation: 'Kimmeridgian（Kimméridgien）是侏羅紀晚期的白堊質石灰岩，含有微小的牡蠣化石，是夏布利最珍貴的土壤，也是夏布利礦物感和獨特個性的地質基礎，只在夜丘和夏布利最佳地塊出現。' },
      { type: 'single', question: '夏布利最高等級的白酒叫做？', options: ['A. Petit Chablis', 'B. Chablis', 'C. Chablis Premier Cru', 'D. Chablis Grand Cru'], correct: 3, explanation: 'Chablis 的 AOC 分四個等級：Petit Chablis（入門）< Chablis < Chablis Premier Cru（17 個一級園）< Chablis Grand Cru（7 個特級園，如 Blanchot、Les Clos 等，最為頂尖）。' },
      { type: 'multiple', question: '夏布利的 Grand Cru 特級園有哪些？（舉例多選）', options: ['A. Les Clos', 'B. Blanchot', 'C. Valmur', 'D. Chambertin'], correct: [0, 1, 2], explanation: 'Chablis Grand Cru 有 7 個：Les Clos、Blanchot、Valmur、Grenouilles、Bougros、Les Preuses、Vaudésir，全都在 Chablis 北部山坡。Chambertin 是夜丘的 Pinot Noir 特級園，不屬於夏布利。' },
      { type: 'single', question: '關於夏布利使用橡木桶的做法，現代主流是？', options: ['A. 所有夏布利都必須用橡木桶陳年', 'B. 傳統派用橡木桶，但現代多用不銹鋼桶保持純淨礦物感', 'C. 夏布利法規禁止使用橡木桶', 'D. 只有 Petit Chablis 才用不銹鋼，其他等級都用橡木'], correct: 1, explanation: '夏布利有派別之爭：傳統派（如 Raveneau、Dauvissat）使用舊橡木桶增加圓潤層次；現代派（多數）用不銹鋼桶釀造，保留純淨的礦物風味和高酸度。兩種做法各有擁護者。' }
    ]
  },

  // ── Module 6: 薄酒萊 ─────────────────────────────────────
  'lesson1_m6': {
    type: 'quiz', title: '🧠 知識檢測',
    questions: [
      { type: 'single', question: '薄酒萊（Beaujolais）以哪個品種為核心，風格最大特徵是什麼？', options: ['A. Pinot Noir，濃郁陳年潛力', 'B. Chardonnay，礦物感白酒', 'C. Gamay，輕盈果香紅酒', 'D. Grenache，高酒精濃郁'], correct: 2, explanation: 'Gamay 是薄酒萊的靈魂品種，以輕盈、活潑的紅果和花香著稱。薄酒萊採用碳酸浸泡法（Carbonic Maceration），不破皮直接整串發酵，造就鮮嫩多汁、易飲的風格。' },
      { type: 'single', question: '薄酒萊新酒（Beaujolais Nouveau）每年何時發售？', options: ['A. 9 月初，採收後立即銷售', 'B. 11 月第三個星期四', 'C. 12 月 31 日跨年夜', 'D. 隔年 2 月'], correct: 1, explanation: 'Beaujolais Nouveau 於每年 11 月第三個星期四全球同步發售，以「新酒季節」的方式行銷，曾是一大葡萄酒行銷奇蹟。現在此風潮雖已沒落，但在日本等地仍很受歡迎。' },
      { type: 'multiple', question: '薄酒萊十大特級村（Crus du Beaujolais）中哪些最著名？（多選）', options: ['A. Moulin-à-Vent', 'B. Fleurie', 'C. Morgon', 'D. Chambertin'], correct: [0, 1, 2], explanation: 'Moulin-à-Vent（風車村，最強勁可陳年）、Fleurie（最花香優雅）和 Morgon（泥土感礦物感，具陳年潛力）都是薄酒萊的頂級村莊。Chambertin 是夜丘的 Pinot Noir 特級園，不屬於薄酒萊。' },
      { type: 'single', question: '薄酒萊特級村（Crus du Beaujolais）的酒和一般薄酒萊有何差異？', options: ['A. 完全相同，只是名稱不同', 'B. 特級村的 Gamay 更濃郁，部分可陳年 5-10 年', 'C. 特級村都是白酒', 'D. 特級村使用 Pinot Noir 而非 Gamay'], correct: 1, explanation: '薄酒萊十大特級村（Crus）的 Gamay 在花崗岩土壤和嚴格生產規範下，風格遠比普通薄酒萊複雜：顏色更深、結構更強，Moulin-à-Vent 甚至可以陳年 10 年以上，展現類 Pinot Noir 的複雜度。' },
      { type: 'single', question: '碳酸浸泡法（Carbonic Maceration）對薄酒萊風格有什麼影響？', options: ['A. 增加高單寧和深色色澤', 'B. 造就鮮嫩、果香馥郁、單寧低的風格', 'C. 加速陳年成熟', 'D. 讓酒更甜'], correct: 1, explanation: '碳酸浸泡法（整串葡萄在 CO₂ 環境中進行胞内發酵）減少了單寧提取，保留了大量鮮嫩果香（草莓、香蕉、接骨木花），造就薄酒萊標誌性的輕柔易飲風格，但也使酒不適合長期陳年。' }
    ]
  },

  // ── Module 7: 夏隆內丘 + 馬貢內 ──────────────────────────
  'lesson1_m7': {
    type: 'quiz', title: '🧠 知識檢測',
    questions: [
      { type: 'single', question: '夏隆內丘（Côte Chalonnaise）的地理位置是？', options: ['A. 夏布利北部，接近 Auxerre', 'B. 金丘（Côte d\'Or）南方延伸', 'C. 馬貢內以南，接近里昂', 'D. 薄酒萊以北'], correct: 1, explanation: '夏隆內丘位於金丘（伯恩丘）的直接延伸地帶，再往南是馬貢內。雖地名知名度不如金丘，但性價比極高，Mercurey 和 Rully 等 AOC 提供了非常物超所值的 Pinot Noir 和 Chardonnay。' },
      { type: 'single', question: '夏隆內丘最受好評的 Pinot Noir AOC 是？', options: ['A. Givry', 'B. Pouilly-Fuissé', 'C. Mâcon-Villages', 'D. Viré-Clessé'], correct: 0, explanation: 'Givry 是夏隆內丘最著名的 Pinot Noir 紅酒 AOC，以絲滑的果香和優雅的土地感著稱，歷史上曾是法國國王亨利四世的最愛，性價比在布根地系統中非常突出。' },
      { type: 'multiple', question: '以下哪些是夏隆內丘的重要 AOC？（多選）', options: ['A. Mercurey', 'B. Rully', 'C. Gevrey-Chambertin', 'D. Montagny'], correct: [0, 1, 3], explanation: 'Mercurey（夏隆內丘最大、紅白皆有）、Rully（優質起泡酒 Crémant 和 Chardonnay）和 Montagny（白酒 AOC，100% Chardonnay）都是夏隆內丘重要的 AOC。Gevrey-Chambertin 在夜丘。' },
      { type: 'single', question: '馬貢內（Mâconnais）最著名的白酒 AOC 是？', options: ['A. Bourgogne Blanc', 'B. Pouilly-Fuissé', 'C. Chablis', 'D. Saint-Véran'], correct: 1, explanation: 'Pouilly-Fuissé 是馬貢內最著名的 Chardonnay AOC，以圓潤成熟的白酒著稱，近年推出一級園概念，品質大幅提升。價格比金丘親民，但在馬貢內屬最高等級。' },
      { type: 'single', question: '為什麼夏隆內丘和馬貢內被稱為布根地的「性價比天堂」？', options: ['A. 這兩個地區的酒完全免費', 'B. 同樣品種（Pinot Noir、Chardonnay）的酒，相同品質但價格通常遠低於金丘', 'C. 法規規定這兩個地區的酒必須低價出售', 'D. 只生產入門等級的大區酒'], correct: 1, explanation: '夏隆內丘和馬貢內使用與金丘相同的 Pinot Noir 和 Chardonnay，在涼爽大陸性氣候下也能釀出細膩的酒，但因知名度不如金丘，售價通常只是金丘類似酒款的 1/3-1/5，是精打細算購酒的好選擇。' }
    ]
  },

  // ── Module 8: 年份與名莊 ──────────────────────────────────
  'lesson1_m8': {
    type: 'quiz', title: '🧠 知識檢測',
    questions: [
      { type: 'single', question: '在布根地，年份為什麼特別重要？', options: ['A. 布根地每年都更換葡萄品種', 'B. 大陸性氣候年際差異大，好年份和差年份的葡萄品質差異懸殊', 'C. 年份只在酒標上有裝飾功能', 'D. 布根地法規每三年更改一次'], correct: 1, explanation: '布根地的大陸性氣候年際變化劇烈，一個冰雹、早霜或雨季都可能毀掉整年的葡萄酒品質。因此年份的選擇對布根地酒的品質評估非常關鍵，遠比波爾多等大西洋氣候地區重要。' },
      { type: 'single', question: '布根地近年被普遍認可的「偉大年份」中，哪一個2010年代的年份最常被提及？', options: ['A. 2011', 'B. 2015', 'C. 2013', 'D. 2014'], correct: 1, explanation: '2015 年是布根地近十年公認的頂級年份，氣候溫暖、採收健康，紅白酒皆出色。2019、2020 也是優質年份。每個年份的特點不同，需要查閱年份指南才能準確評估。' },
      { type: 'multiple', question: '以下哪些是布根地最傳奇的頂級酒莊（Domaine）？（多選）', options: ['A. Domaine de la Romanée-Conti（DRC）', 'B. Domaine Armand Rousseau', 'C. Mouton Rothschild', 'D. Domaine Leroy'], correct: [0, 1, 3], explanation: 'DRC（Romanée-Conti）、Armand Rousseau（Gevrey 夜丘紅酒傳奇）和 Leroy（以超高品質極低產量著稱）都是布根地頂級 Domaine。Mouton Rothschild 是波爾多梅多克的名莊，不在布根地。' },
      { type: 'single', question: '布根地的「Négociant-Éleveur」（酒商）最大的知名企業之一是？', options: ['A. Robert Mondavi', 'B. Louis Jadot', 'C. Torres', 'D. Antinori'], correct: 1, explanation: 'Louis Jadot 是布根地最著名的 Négociant-Éleveur（酒商-培養商），向多個莊主購買葡萄或原酒，在自己的酒窖中完成培養、裝瓶和銷售，出口到全球各地，是全球最知名的布根地品牌之一。' },
      { type: 'multiple', question: 'Domaine Leroy 的釀酒實踐中，哪些特點被認為是其頂級品質的保證？（多選）', options: ['A. 採用生物動力法（Biodynamic）農法', 'B. 極低的葡萄產量（每棵藤只保留少量葡萄串）', 'C. 大量使用機器採收降低成本', 'D. 完全不使用橡木桶'], correct: [0, 1], explanation: 'Domaine Leroy 以嚴格的生物動力法農耕和極低產量著稱：葡萄產量遠低於法定上限，每棵藤只保留少數葡萄串以確保最高濃縮度。全程人工採收，使用高比例新橡木桶陳年，風格濃郁且可陳年數十年。' }
    ]
  }
}

// ─── quiz-bank.json for Level 1 綜合評量 ───────────────────────────────────

const QUIZ_BANK = {
  level: 'level1',
  title: 'Level 1 布根地葡萄酒入門 — 題庫',
  questions: [
    // 基礎概念
    { type: 'single', question: '布根地 AOC 金字塔最高等級是？', options: ['A. Bourgogne', 'B. Village', 'C. Premier Cru', 'D. Grand Cru'], correct: 3, explanation: 'Grand Cru（特級園）是布根地最高等級，全布根地只有 33 個，是世界頂級葡萄酒的代名詞。' },
    { type: 'single', question: '布根地紅酒的核心品種是？', options: ['A. Cabernet Sauvignon', 'B. Pinot Noir', 'C. Syrah', 'D. Gamay'], correct: 1, explanation: 'Pinot Noir 是布根地紅酒的唯一核心品種，以細膩的結構、高酸和陳年潛力聞名。' },
    { type: 'single', question: '布根地白酒的核心品種是？', options: ['A. Sauvignon Blanc', 'B. Riesling', 'C. Chardonnay', 'D. Viognier'], correct: 2, explanation: 'Chardonnay 是布根地白酒的代表，從夏布利的礦物感到 Meursault 的奶油感，展現出驚人的風土多樣性。' },
    { type: 'single', question: '夏布利（Chablis）白酒最典型的風格特徵是？', options: ['A. 奶油熱帶果香', 'B. 高酸礦物感帶火石氣息', 'C. 甜美低酸', 'D. 高酒精濃郁'], correct: 1, explanation: '夏布利是布根地最北、最涼爽的產區，加上 Kimmeridgian 土壤，Chardonnay 在此展現高酸度和獨特的礦物/火石感。' },
    { type: 'single', question: '薄酒萊（Beaujolais）的核心品種是？', options: ['A. Pinot Noir', 'B. Chardonnay', 'C. Gamay', 'D. Grenache'], correct: 2, explanation: 'Gamay 是薄酒萊的靈魂品種，採用碳酸浸泡法釀造，風格輕盈果香，是布根地地區最獨特的品種和風格。' },
    // 產區
    { type: 'multiple', question: '金丘（Côte d\'Or）分為哪兩個部分？（多選）', options: ['A. 夜丘（Côte de Nuits）', 'B. 伯恩丘（Côte de Beaune）', 'C. 夏布利（Chablis）', 'D. 薄酒萊（Beaujolais）'], correct: [0, 1], explanation: '金丘分為北部的夜丘（以頂級 Pinot Noir 著名）和南部的伯恩丘（頂級 Chardonnay 白酒集中地）。夏布利和薄酒萊是布根地的其他子區域，不屬於金丘。' },
    { type: 'single', question: '夜丘（Côte de Nuits）最著名的特級莊園是？', options: ['A. Montrachet', 'B. Chambertin', 'C. Pouilly-Fuissé', 'D. Chablis Grand Cru'], correct: 1, explanation: 'Chambertin 是夜丘最著名的紅酒特級園之一，拿破侖最愛的酒款，位於 Gevrey-Chambertin 村，以強勁的結構和長達數十年的陳年潛力著稱。' },
    { type: 'single', question: '世界最著名的白酒特級園「Le Montrachet」位於伯恩丘哪兩個村莊之間？', options: ['A. Meursault 到 Puligny-Montrachet', 'B. Puligny-Montrachet 和 Chassagne-Montrachet', 'C. Volnay 和 Pommard', 'D. Nuits-Saint-Georges 和 Vosne-Romanée'], correct: 1, explanation: 'Le Montrachet 是一個 7 公頃的白酒特級園，橫跨 Puligny-Montrachet 和 Chassagne-Montrachet 兩村，被認為是世界最偉大的干型白酒。' },
    { type: 'single', question: '「DRC」代表哪個傳奇酒莊？', options: ['A. Domaine Raveneau Chablis', 'B. Domaine de la Romanée-Conti', 'C. Domaine Robert Collins', 'D. Domaine Rousseau Chambertin'], correct: 1, explanation: 'DRC（Domaine de la Romanée-Conti）是布根地最傳奇的酒莊，唯一完整擁有 Romanée-Conti 特級園（1.8公頃），出產的酒在拍賣會上是全球最貴葡萄酒之一。' },
    { type: 'single', question: '夏隆內丘（Côte Chalonnaise）在地理上位於哪裡？', options: ['A. 金丘北部', 'B. 金丘南部延伸', 'C. 夏布利周邊', 'D. 薄酒萊北部'], correct: 1, explanation: '夏隆內丘緊跟在伯恩丘南方，是金丘的南部延伸帶，走同樣的 Pinot Noir 和 Chardonnay 路線，但知名度較低，因此性價比更高。' },
    // 歷史文化
    { type: 'single', question: '哪個修道院組織對布根地 Climat 系統的建立貢獻最大？', options: ['A. 方濟各會（Franciscan）', 'B. 多明各會（Dominican）', 'C. 熙篤會（Cistercian）', 'D. 耶穌會（Jesuit）'], correct: 2, explanation: '熙篤會（Cistercians）修士在中世紀精心研究、記錄和分類布根地的每一塊葡萄園，建立了 Climat 系統的基礎，其代表成果是 Clos de Vougeot 的建立（12 世紀）。' },
    { type: 'single', question: '法國大革命後布根地葡萄園最重大的變化是？', options: ['A. 品種從 Pinot 改為 Cabernet', 'B. 土地被沒收分割，形成今日碎片化所有制', 'C. 產區等級制度被廢除', 'D. 葡萄酒出口完全停止'], correct: 1, explanation: '法國大革命（1789年）將教會和貴族的葡萄園沒收拍賣，土地被分割給衆多買家，形成布根地今日極度碎片化的土地結構，同一個特級園可能有幾十到幾百個不同擁有者。' },
    { type: 'multiple', question: '布根地的「Climat」體系在 2015 年獲得哪個國際組織認可？（多選）', options: ['A. 被列入 UNESCO 世界文化遺產', 'B. 被 WTO 認定為地理標誌', 'C. 獲得歐盟農業遺産認定', 'D. 被 OIV 列為葡萄酒文化教科書範例'], correct: [0], explanation: '布根地的 Climat（葡萄園地塊系統）於 2015 年被列入 UNESCO 世界文化遺產，被認定為「人與自然千年交互形成的傑出文化景觀」，是第一個以葡萄園地塊文化獲得此認定的地方。' },
    // 釀造與品鑑
    { type: 'single', question: 'Négociant 在布根地的角色是？', options: ['A. 政府監管員', 'B. 向農莊收購葡萄或原酒並釀造銷售的酒商', 'C. 設計酒標的藝術家', 'D. 布根地酒在亞洲的代理商'], correct: 1, explanation: 'Négociant（酒商）是布根地的重要角色，向多個小農莊購買葡萄、葡萄汁或原酒，在自己的酒窖中完成培養、調配和裝瓶。Bouchard、Louis Jadot、Joseph Drouhin 等都是著名的 Négociant。' },
    { type: 'single', question: '布根地白酒（Chardonnay）在橡木桶陳年後出現的典型香氣是？', options: ['A. 青草和柑橘（不銹鋼桶風格）', 'B. 奶油、烤麵包和榛子（橡木桶熟成）', 'C. 煙燻和礦物感單一風格', 'D. 熱帶水果（炎熱氣候風格）'], correct: 1, explanation: '布根地 Chardonnay 經橡木桶陳年（尤其是 Meursault 風格），通常發展出奶油、牛油、烤榛果、蜂蜜和烤麵包香氣，這是以金丘為中心的布根地白酒最典型的風格。' },
    { type: 'single', question: '薄酒萊碳酸浸泡法（Carbonic Maceration）的最主要結果是？', options: ['A. 高單寧高色澤', 'B. 低單寧果香豐富易飲', 'C. 增加甜度', 'D. 讓酒更耐陳年'], correct: 1, explanation: '碳酸浸泡法通過胞内發酵減少了單寧萃取，保留大量鮮嫩果香（草莓、覆盆子），造就薄酒萊標誌的輕柔易飲風格。但這也意味着酒通常不適合長期陳年。' },
    // 酒標閱讀
    { type: 'single', question: '酒標只寫「Gevrey-Chambertin」不帶任何葡萄園名是什麼等級？', options: ['A. Grand Cru', 'B. Premier Cru', 'C. Village AOC', 'D. 大區 Bourgogne'], correct: 2, explanation: '只有村莊名（如 Gevrey-Chambertin）而無葡萄園名，是村莊等級（Village AOC），比大區 Bourgogne 高，比一級園（1er Cru）低，品質適中，性價比不錯。' },
    { type: 'single', question: '「Chambolle-Musigny Les Amoureuses 1er Cru」中的「Les Amoureuses」是？', options: ['A. 釀酒師的名字', 'B. 一個一級園 Climat（地塊）的名稱', 'C. 葡萄品種名', 'D. 裝瓶年份'], correct: 1, explanation: 'Les Amoureuses（愛人們）是 Chambolle-Musigny 村最著名的一級園 Climat 名稱，以細膩優雅的 Pinot Noir 著稱，是伯恩丘最受追捧的一級園之一，品質接近鄰村的 Musigny 特級園。' },
    { type: 'multiple', question: '以下關於 Grand Cru 酒標的說法哪些是正確的？（多選）', options: ['A. 通常只寫特級園名，不需要村莊名', 'B. Grand Cru 是自成一個 AOC 的等級', 'C. Grand Cru 必須在酒標上寫出「Grand Cru」', 'D. Grand Cru 表示這瓶酒的售價'], correct: [0, 1, 2], explanation: 'Grand Cru 自成一個 AOC（如「Chambertin」就是一個 AOC），因此不需要在酒標上另外寫村莊名；同時通常也會在酒標的其他位置標注「Grand Cru」字樣以確認等級。售價不在酒標上。' },
    // 實用知識
    { type: 'single', question: '布根地葡萄酒最適合搭配哪種布根地傳統料理？', options: ['A. 海鮮壽司', 'B. 紅酒燉牛肉（Boeuf Bourguignon）', 'C. 義大利海鮮燉飯', 'D. 日式天婦羅'], correct: 1, explanation: '紅酒燉牛肉（Boeuf Bourguignon）是布根地最著名的傳統料理，就用當地 Pinot Noir 燉煮，與布根地紅酒是天然的完美搭配，充分體現「當地食物配當地酒」的原則。' },
    { type: 'single', question: '馬貢內（Mâconnais）最著名的 Chardonnay AOC 是？', options: ['A. Givry', 'B. Montagny', 'C. Pouilly-Fuissé', 'D. Rully'], correct: 2, explanation: 'Pouilly-Fuissé 是馬貢內最頂尖的 Chardonnay AOC，近年更獲得正式的一級園（Premier Cru）認定，品質大幅提升，定價仍比金丘 Chardonnay 親民許多。' },
    { type: 'multiple', question: '以下哪些描述正確說明了布根地葡萄酒的特點？（多選）', options: ['A. 強調風土差異，同一地塊不同莊主出產品質可能不同', 'B. 土地碎片化，同一個特級園可能有幾十個擁有者', 'C. 布根地全部使用用 Cabernet Sauvignon 釀紅酒', 'D. 是全球最受收藏家追捧的葡萄酒產區之一'], correct: [0, 1, 3], explanation: '布根地以風土差異和碎片化土地所有制著稱：同一個 Clos de Vougeot 有 80 多個擁有者，品質差異極大；布根地紅酒全用 Pinot Noir，不是 Cabernet。布根地是全球收藏家最熱烈追逐的產區之一。' }
  ]
}

// ─── 以 module JSON 結構注入 quiz slides ─────────────────────────────────────

// 定義每個 module 文件的 lesson id 到 quiz key 映射
const MODULE_QUIZ_MAP = {
  'beginner-m1.json': {
    'm1-l1': 'm1-l1',
    'm1-l2': 'm1-l2',
    'm1-l3': 'm1-l3',
    'm1-l4': 'm1-l4'
  },
  'beginner-m2.json': {
    'lesson1': 'lesson1',
    'lesson2': 'm2-lesson2',
    'lesson3': 'm2-lesson3'
  },
  'beginner-m3.json': {
    'lesson1': 'lesson1_m3',
    'lesson2': 'lesson1_m3',  // 統一用同一套問題的備用
    'lesson3': 'lesson1_m3',
    'lesson4': 'lesson1_m3'
  },
  'beginner-m4.json': {
    'lesson1': 'lesson1_m4',
    'lesson2': 'lesson1_m4',
    'lesson3': 'lesson1_m4',
    'lesson4': 'lesson1_m4'
  },
  'beginner-m5.json': {
    'lesson1': 'lesson1_m5',
    'lesson2': 'lesson1_m5',
    'lesson3': 'lesson1_m5',
    'map-overview': null  // 無 slides 的 lesson，跳過
  },
  'beginner-m6.json': {
    'lesson1': 'lesson1_m6',
    'lesson4-b': 'lesson1_m6',
    'lesson4-c': 'lesson1_m6'
  },
  'beginner-m7.json': {
    'lesson1': 'lesson1_m7',
    'lesson2': 'lesson1_m7',
    'lesson3': 'lesson1_m7'
  },
  'beginner-m8.json': {
    'lesson1': 'lesson1_m8',
    'lesson2': 'lesson1_m8',
    'lesson3': 'lesson1_m8'
  }
}

let successCount = 0, errorCount = 0

// 處理每個 module JSON
for (const [moduleFile, lessonQuizMap] of Object.entries(MODULE_QUIZ_MAP)) {
  const fp = filePath(moduleFile)
  try {
    const data = JSON.parse(readFileSync(fp, 'utf-8'))
    const lessons = data.lessons || []
    let modified = false

    lessons.forEach(lesson => {
      const quizKey = lessonQuizMap[lesson.id]
      if (!quizKey) return  // 跳過（如 map-overview）

      const quizSlide = QUIZ_MAP[quizKey]
      if (!quizSlide) return

      const slides = lesson.slides
      if (!slides || !Array.isArray(slides) || slides.length === 0) return

      // 移除舊有的 quiz slide（避免重複）
      const filteredSlides = slides.filter(s => s.type !== 'quiz')

      // 在最後一張 slide 前插入
      const insertAt = filteredSlides.length > 1 ? filteredSlides.length - 1 : filteredSlides.length
      filteredSlides.splice(insertAt, 0, quizSlide)
      lesson.slides = filteredSlides
      modified = true
    })

    // 最後一個有 slides 的 lesson 標記為 isFinalExam（每個 module 的最後一課）
    const lessonsWithSlides = lessons.filter(l => l.slides && l.slides.length > 0)
    if (lessonsWithSlides.length > 0) {
      const lastLesson = lessonsWithSlides[lessonsWithSlides.length - 1]
      if (!lastLesson.isFinalExam) {
        // 不標記 isFinalExam，因為布根地每個 module 都是一個獨立單元
        // 綜合評量是整個 Level 1 的最後一課（在此腳本中暫不新增）
      }
    }

    if (modified) {
      writeFileSync(fp, JSON.stringify(data, null, 2), 'utf-8')
      console.log(`✅ ${moduleFile}: quiz slides 已注入`)
      successCount++
    }
  } catch (e) {
    console.error(`❌ ${moduleFile}: ${e.message}`)
    errorCount++
  }
}

// 建立 quiz-bank.json
try {
  writeFileSync(filePath('quiz-bank.json'), JSON.stringify(QUIZ_BANK, null, 2), 'utf-8')
  console.log(`✅ quiz-bank.json: 建立完成（${QUIZ_BANK.questions.length} 題）`)
  successCount++
} catch (e) {
  console.error(`❌ quiz-bank.json: ${e.message}`)
  errorCount++
}

console.log(`\n📊 完成：${successCount} 成功，${errorCount} 失敗`)
