/**
 * inject-bourgogne-l2-quiz-batch2.mjs
 * 布根地 L2 Quiz 注入 — 第二批：intermediate-m5 ~ intermediate-m8
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.resolve(__dirname, '..', 'public/bourgogne/data/courses/level2')
const MARKER = '_inject_bourgogne_l2_quiz'

const QUIZ_MAP = {

  // ══════════════════════════════════════════════
  // M5 一級園精選分析
  // ══════════════════════════════════════════════
  'm5-l1': {
    type: 'quiz', title: '🧠 一級園制度知識檢測',
    questions: [
      { type: 'single', question: '布根地「Premier Cru（一級園）」在分級制度中的位置是？', options: ['A. 最高等級，高於 Grand Cru', 'B. 在 Grand Cru 之下、Village 之上的第二等級', 'C. 只在夜丘存在', 'D. 與 Grand Cru 同等級，只是稱謂不同'], correct: 1, explanation: '布根地分級從上到下：Grand Cru → Premier Cru → Village → Bourgogne 大區。Premier Cru 酒標上需寫明村莊名 + 地塊名，如「Gevrey-Chambertin Les Cazetiers Premier Cru」。' },
      { type: 'single', question: '布根地現有多少個正式認定的 Premier Cru 地塊？', options: ['A. 約 100 個', 'B. 約 250 個', 'C. 約 640 個', 'D. 超過 1,000 個'], correct: 2, explanation: '布根地現有約 640 個正式 Premier Cru 地塊（Climat），散布在金丘和夏布利等各村莊。這些地塊加起來佔布根地白酒和紅酒相當大的比例，代表極高的潛力和多元性。' },
      { type: 'multiple', question: 'Premier Cru 和 Grand Cru 相比，優點包括哪些？（多選）', options: ['A. 許多 Premier Cru 性價比極高，品質媲美某些 Grand Cru', 'B. Premier Cru 更易取得，選擇面更廣', 'C. Premier Cru 比 Grand Cru 更容易陳年', 'D. 某些頂尖 Premier Cru（如 Les Amoureuses）在市場口碑甚至超過部分 Grand Cru'], correct: [0, 1, 3], explanation: '布根地 Premier Cru 的優點：品質頂端的 Premier Cru（Les Amoureuses、Clos Saint-Jacques 等）性價比高；選擇多元；某些頂尖 Premier Cru 在拍賣市場價格媲美 Grand Cru。陳年能力主要由莊主和年份決定，並非等級直接相關。' },
      { type: 'single', question: '「Premier Cru」酒款的酒標格式，以下哪個表述正確？', options: ['A. 只寫地塊名，如「Les Caillerets」', 'B. 寫「村莊名 + 地塊名 + Premier Cru」，如「Volnay Caillerets Premier Cru」', 'C. 和 Grand Cru 相同，只寫地塊名', 'D. 必須寫出 AOC 全名和釀造年份'], correct: 1, explanation: 'Premier Cru 酒標的標準格式是：村莊 AOC 名稱 + 地塊名稱（Lieu-Dit）+ Premier Cru。例如 Chambolle-Musigny Les Amoureuses Premier Cru，這樣消費者能同時辨識村莊和地塊。' },
      { type: 'single', question: '評估 Premier Cru 使否值得購買，除了地塊之外，最關鍵的考量是？', options: ['A. 酒瓶重量是否達標', 'B. 莊主的釀酒哲學和歷年評分', 'C. 原廠酒標是否使用特殊紙張', 'D. 酒款是否有官方政府認證章'], correct: 1, explanation: '布根地原則「莊主重於地塊」在 Premier Cru 最明顯：差莊主的 Grand Cru 不如出色莊主的 Premier Cru。查閱 Vinous、Wine Advocate 等對該莊主歷年各地塊的評分，是最有效的購酒指南。' }
    ]
  },

  'm5-l2': {
    type: 'quiz', title: '🧠 夜丘頂級一級園知識檢測',
    questions: [
      { type: 'single', question: '哪個被認為是 Gevrey-Chambertin 最優質的一級園？', options: ['A. Les Cazetiers', 'B. Clos Saint-Jacques', 'C. Lavaux Saint-Jacques', 'D. Les Champeaux'], correct: 1, explanation: 'Clos Saint-Jacques 雖是 Premier Cru，但被許多業界人士認為其品質等同 Grand Cru，是 Gevrey-Chambertin 最著名也最昂貴的一級園。Rousseau、Jadot 等頂尖莊主均有出產。' },
      { type: 'single', question: 'Chambolle-Musigny 最著名的一級園「Les Amoureuses」特色是？', options: ['A. 最強勁耐陳年的紅酒', 'B. 以優雅花香和細膩口感著稱，品質接近 Grand Cru Musigny', 'C. 只生產白酒', 'D. 是最大面積的 Chambolle Premier Cru'], correct: 1, explanation: 'Les Amoureuses（戀人們）緊臨 Le Musigny 下方，以細緻花香和堪比 Grand Cru 的優雅著稱，拍賣價格有時超過部分 Grand Cru，是布根地最令人嚮往的 Premier Cru 之一。' },
      { type: 'multiple', question: 'Nuits-Saint-Georges 最知名的頂級一級園包括哪些？（多選）', options: ['A. Les Saint-Georges', 'B. Les Vaucrains', 'C. Les Pruliers', 'D. Les Folatières'], correct: [0, 1, 2], explanation: 'Nuits-Saint-Georges 頂尖 Premier Cru：Les Saint-Georges（曾提議升格 Grand Cru）、Les Vaucrains（以強勁著稱）、Les Pruliers（圓潤豐滿）。Les Folatières 屬於 Puligny-Montrachet。' },
      { type: 'single', question: '「Vosne-Romanée Les Suchots」一級園的重要性是？', options: ['A. 是最低等級的大區產品', 'B. 鄰近 Échézeaux Grand Cru，風格精緻複雜，是 Vosne 最受重視的 Premier Cru 之一', 'C. 只有合作社生產', 'D. 完全由 DRC 獨家持有'], correct: 1, explanation: 'Vosne-Romanée 一級園中，Les Suchots 和 Les Beaux-Monts 緊鄰 Grands Echézeaux，展現馮內村特有的優雅複雜感，是許多酒評家給予最高評分的 Vosne 一級園。' },
      { type: 'single', question: '購買夜丘 Premier Cru 最常見的「性價比策略」是？', options: ['A. 買知名村莊（Gevrey、Vosne）最高聲望的 Premier Cru', 'B. 買知名莊主在次級知名村莊（Fixin、Morey）的 Premier Cru，價格較低但品質可觀', 'C. 只買大型連鎖超市的促銷款', 'D. 購買在期貨市場最高溢價的款式'], correct: 1, explanation: '「聰明酒迷」策略：尋找頂尖莊主（如 Rousseau、Mugnier）旗下次級村莊（Fixin、Morey）的 Premier Cru，品質高但知名度較低，性價比遠超熱門 Gevrey 或 Vosne 的同等級款式。' }
    ]
  },

  'm5-l3': {
    type: 'quiz', title: '🧠 伯恩丘頂級一級園知識檢測',
    questions: [
      { type: 'single', question: '伯恩（Beaune）村最著名的一級園之一「Grèves」的特色是？', options: ['A. 只生產白酒', 'B. 以其圓潤豐滿且帶有礫石礦物感的 Pinot Noir 聞名，Bouchard 有著名款式', 'C. 是 Beaune 最高產量的地塊', 'D. 只對會員開放購買'], correct: 1, explanation: 'Beaune Grèves（礫石之意）是 Beaune 最受尊崇的 Premier Cru 之一，Bouchard Père & Fils 擁有大量地塊並出產聞名的「Vigne de l\'Enfant Jésus」，展現 Beaune 最精緻優雅的 Pinot Noir。' },
      { type: 'single', question: '「Volnay Caillerets」和「Volnay Champans」是 Volnay 哪兩種不同的風格典型？', options: ['A. Caillerets 白酒，Champans 紅酒', 'B. Caillerets 更細膩礦物，Champans 更豐厚圓潤', 'C. 兩者完全相同', 'D. Caillerets 甜型，Champans 乾型'], correct: 1, explanation: 'Volnay 兩大一級園：Caillerets（來自 cailloux，礫石）更細膩精緻、礦物感強；Champans 更豐滿圓潤，展現 Volnay 不同風土面向。兩者都是布根地最精緻的 Pinot Noir 代表。' },
      { type: 'multiple', question: '以下哪些是 Meursault 著名的白酒一級園？（多選）', options: ['A. Les Perrières', 'B. Les Charmes', 'C. Les Genevrières', 'D. Clos de la Mousse'], correct: [0, 1, 2], explanation: 'Meursault 三大頂級 Premier Cru：Perrières（礦物感最強，曾提議升格）、Charmes（最豐滿圓潤）、Genevrières（平衡優雅）。Clos de la Mousse 屬於 Beaune，非 Meursault。' },
      { type: 'single', question: '「Pommard Rugiens」一級園的特色是？', options: ['A. 夜丘最南端的園區', 'B. 被認為是 Pommard 品質最高的一級園，以深色果味、單寧強健著稱', 'C. 只生產輕盈的夏季代飲款', 'D. 以花香優雅聞名，類似 Volnay 風格'], correct: 1, explanation: 'Pommard Rugiens（Bas + Haut 兩段）被認為是 Pommard 最頂尖的 Premier Cru，深色果味（黑莓、李子）、厚實單寧和強健骨架是其標誌，是 Pommard 最值得陳年的款式之一。' },
      { type: 'single', question: '「Puligny-Montrachet Les Combettes」一級園的位置為何特別重要？', options: ['A. 位於 Meursault 邊界，風格介於兩村之間', 'B. 緊鄰 Bâtard-Montrachet 特級園，展現接近 Grand Cru 的豐滿礦物感', 'C. 只限有機農法種植', 'D. 是最低價的 Puligny 一級園'], correct: 1, explanation: 'Les Combettes 位於 Puligny-Montrachet 最北端，緊鄰 Bâtard-Montrachet 特級園，土壤條件極佳，出產風格豐滿、礦物感強的 Chardonnay，是 Puligny 最受專家推薦的 Premier Cru 之一。' }
    ]
  },

  'm5-l4': {
    type: 'quiz', title: '🧠 一級園選購與投資知識檢測',
    questions: [
      { type: 'single', question: '以性價比角度，哪類布根地 Premier Cru 最值得優先考慮？', options: ['A. 最知名村莊（Gevrey、Vosne）的所有 Premier Cru', 'B. 知名莊主在「二線村莊」（Fixin、Savigny、Saint-Romain）的 Premier Cru', 'C. 只有大規模酒商（Négociant）的款式', 'D. 最老年份的庫存清倉款'], correct: 1, explanation: '在知名度較低村莊的 Premier Cru 是精明酒客的最愛：頂尖莊主的 Savigny-lès-Beaune Premier Cru 或 Saint-Aubin Premier Cru，以 Meursault 一半以下的價格提供優質的布根地 Chardonnay 體驗。' },
      { type: 'single', question: '「垂直品酒（Vertical Tasting）」在 Premier Cru 選擇上的意義是？', options: ['A. 比較不同村莊同年份的酒款', 'B. 追蹤同一莊主同一地塊多個年份，了解陳年潛力和年份差異', 'C. 比較不同品種的葡萄酒', 'D. 垂直指的是直立品嚐姿勢'], correct: 1, explanation: '垂直品酒（Vertical）= 同莊主同地塊，不同年份的系列比較。這是了解一款 Premier Cru 陳年潛力、年份影響和莊主風格一致性的最有效方法，是在購買前投資昂貴款式的最佳研究工具。' },
      { type: 'multiple', question: '以下哪些是尋找布根地 Premier Cru 性價比的有效策略？（多選）', options: ['A. 關注伯恩丘南端（Santenay、Maranges）的 Premier Cru', 'B. 研究新興小莊主（Domaine）的首批年份', 'C. 只選擇最熱門的媒體高分款', 'D. 尋找 Saint-Aubin Premier Cru Blanc（價格約 Puligny 的 1/3）'], correct: [0, 1, 3], explanation: '性價比策略：1) Santenay / Maranges 等南端村莊；2) 搜尋新銳小莊主（尚未被市場發現）；3) Saint-Aubin 是普利尼白酒的平替。只追媒體高分往往反而花費最多，性價比最低。' },
      { type: 'single', question: 'Domaine 和 Négociant 出產布根地 Premier Cru 的主要差異是？', options: ['A. Domaine 酒款比 Négociant 等級更高', 'B. Domaine 自種自釀，能完整表達地塊；Négociant 從農夫購入葡萄或酒液，品質取決於採購能力', 'C. Négociant 的酒更貴因為有更多行銷費用', 'D. 兩者都是政府直接管理'], correct: 1, explanation: 'Domaine（酒莊）：自己擁有葡萄園，全程自釀，最能準確表達地塊風土。Négociant（酒商）：從農夫購入葡萄、果汁或酒液釀造，品質取決於採購關係和釀酒師水準。兩者各有優劣，頂尖 Négociant（如 DRC 本身也算 Domaine）品質完全可媲美。' },
      { type: 'single', question: '購買布根地 Premier Cru 用於長期陳年，最重要的儲存條件是？', options: ['A. 放在陽光充足的書架上', 'B. 控溫 12-14°C，濕度 70-75%，避光、無震動', 'C. 每週搖晃酒瓶防止沉澱', 'D. 冷凍保存以防止氧化'], correct: 1, explanation: '布根地 Pinot Noir 和 Chardonnay 的長期儲存黃金條件：溫度恆定 12-14°C（溫差比平均溫度更危險）、濕度 70-75%（保護軟木塞）、完全避光（UV 會加速氧化）、無震動環境。這些條件是保存投資價值的最低要求。' }
    ]
  },

  // ══════════════════════════════════════════════
  // M6 氣候年份解讀
  // ══════════════════════════════════════════════
  'm6-l1': {
    type: 'quiz', title: '🧠 年份重要性知識檢測',
    questions: [
      { type: 'single', question: '為什麼年份（Vintage）對布根地葡萄酒特別重要？', options: ['A. 因為布根地每年更換葡萄品種', 'B. 因為大陸性氣候帶來顯著的年際差異，年份直接影響成熟度、酸度和風格', 'C. 因為法律規定每年必須更換釀酒師', 'D. 布根地年份差異其實很小'], correct: 1, explanation: '布根地大陸性氣候導致每年春霜、夏季病害、採收期天氣的組合千變萬化。同一個 Grand Cru，2013 年可能瘦弱酸澀，2015 年卻豐滿飽滿，年份決定了酒款的基礎骨架，是購酒最關鍵的參數之一。' },
      { type: 'single', question: '「大年（Great Vintage）」的通用特徵是什麼？', options: ['A. 只要產量多就是大年', 'B. 適當熟成度、保留酸度、陳年潛力強，通常夏末秋初天氣晴朗', 'C. 不論任何天氣條件都是大年', 'D. 酒精濃度最高就是最好年份'], correct: 1, explanation: '偉大年份的天氣特徵：適度溫暖夏季（非過熱）+ 晴朗乾燥的採收前 4-6 週。這讓 Pinot Noir 達到充分香氣成熟度（多酚成熟），同時保留天然酸度和平衡感，具備長期陳年潛力。' },
      { type: 'multiple', question: '影響布根地年份差異的主要農業氣候因素包括？（多選）', options: ['A. 春霜凍害（減少產量和葡萄均衡性）', 'B. 採收期降雨（稀釋果味，引發黴菌）', 'C. 夏季過熱（酒精過高，缺乏酸度）', 'D. 種植在海拔 2,000 米以上的山地'], correct: [0, 1, 2], explanation: '布根地年份三大殺手：1) 春霜（4-5月）凍傷嫩芽；2) 採收期降雨稀釋果汁、引發灰腐病；3) 7-8月高溫期氣溫過高（近年氣候暖化加劇）。布根地沒有海拔 2,000 米以上的葡萄園。' },
      { type: 'single', question: '布根地「小年（Difficult Vintage）」是否總是不值得購買？', options: ['A. 是的，小年的酒完全沒有價值', 'B. 不一定，某些小年的酒酸度更活潑、更適合年輕飲用，且性價比更高', 'C. 小年只影響白酒，不影響紅酒', 'D. 小年的酒比大年更易僞造'], correct: 1, explanation: '「困難年份」未必是壞年份——有些輕盈、高酸的年份（如 2007、2017）反而出產了活潑清新、適合早喝的酒，且因市場不看好，價格實惠。真正的問題是：找到在困難年份仍嚴格選果的頂尖莊主。' },
      { type: 'single', question: '「晚採收（Late Harvest）」和「提前採收（Early Harvest）」在布根地各有什麼影響？', options: ['A. 兩者效果完全相同', 'B. 晚採收增加成熟度但有天氣摧毀風險；提前採收保留酸度和清爽但犧牲成熟度', 'C. 晚採收只適用於白酒', 'D. 提前採收是違法行為'], correct: 1, explanation: '採收時機是布根地農夫最關鍵的年度決策：等待更多成熟度 vs. 冒降雨/黴菌風險。2016 年的例子：部分莊主在黴菌擴散前提前採收了乾淨果實，品質遠優於等待的莊主。決策能力反映了莊主的水準。' }
    ]
  },

  'm6-l2': {
    type: 'quiz', title: '🧠 近代重要年份知識檢測',
    questions: [
      { type: 'single', question: '布根地 2015 年份最常被描述為什麼？', options: ['A. 「平庸但可飲用」', 'B. 「現代最偉大年份之一」，兼具豐滿與優雅，紅白皆出色', 'C. 「過於甜膩，缺乏酸度」', 'D. 「只有入門酒適合，高端酒失敗」'], correct: 1, explanation: '2015 年布根地是近 20 年最被業界推崇的年份之一——天氣完美地提供了格外充足的成熟度，但酸度仍保留完整。紅酒和白酒都展現了罕見的豐滿度和優雅平衡，陳年潛力極強。' },
      { type: 'single', question: '2010 年布根地被評為頂級年份，主要是因為？', options: ['A. 產量創歷史新高', 'B. 天氣涼爽，成熟度帶來極精緻的平衡感，高酸+深度，被認為陳年潛力極強', 'C. 全年無雨，果實最甜', 'D. 是人工灌溉技術的首次成功案例'], correct: 1, explanation: '2010 年布根地以涼爽生長季和特別優雅的酸度/果味平衡著稱，許多評論家預測其陳年潛力超過 20-30 年，在 DRC、Rousseau 等頂尖莊主手中展現無與倫比的精緻感。' },
      { type: 'multiple', question: '以下哪些是近年布根地業界公認「最佳紅酒年份」？（多選）', options: ['A. 2005', 'B. 2010', 'C. 2012（偏弱）', 'D. 2015'], correct: [0, 1, 3], explanation: '2005、2010、2015 是近 20 年布根地最受業界推崇的三個紅酒年份（有時加入 2019）。2012 年份偏弱，春霜造成減產，整體評價較低，不在頂級行列。' },
      { type: 'single', question: '「2016 年」布根地面對的最大挑戰和最終結果是？', options: ['A. 颱風颳倒大部分葡萄樹', 'B. 4月霜害毀掉大量幼芽，加上夏季黴菌，但嚴格選果的莊主仍出產了精緻出色的酒款', 'C. 過熱導致全部酒款酒精超過 15%', 'D. 完全失敗，無任何值得購買的款式'], correct: 1, explanation: '2016 年布根地的悲劇開始——4月嚴重春霜凍毀大量嫩芽，後來又有黴菌問題，減產幅度高達 30-50%。但嚴格控管的莊主最終出產了品質精緻、酸度優雅的酒款，是「少而精」的一年。' },
      { type: 'single', question: '購買布根地用於長期收藏，哪個年份資訊查詢工具最有效？', options: ['A. 超市促銷手冊', 'B. 布根地葡萄酒職業公會（BIVB）的官方年份指南或 Wine Advocate、Vinous 等專業評分', 'C. 只看酒標上的圖案設計', 'D. 只根據酒商推薦，不看任何第三方評分'], correct: 1, explanation: 'BIVB 官方年份指南、Burghound.com（布根地專門評分）、Wine Advocate（Robert Parker 等）、Vinous（Antonio Galloni）是目前業界最受信賴的年份評估來源，比酒商宣傳更客觀。' }
    ]
  },

  'm6-l3': {
    type: 'quiz', title: '🧠 氣候變遷影響知識檢測',
    questions: [
      { type: 'single', question: '氣候暖化對布根地最直接可見的影響是？', options: ['A. 葡萄無法成熟，需要人工加糖', 'B. 採收時間提前（過去 50 年平均提前約 2 週），酒精濃度普遍提高', 'C. 布根地開始種植熱帶水果', 'D. 降雨量大幅減少，葡萄普遍乾旱'], correct: 1, explanation: '數據顯示：1980 年代，布根地採收平均在 10 月初；2010 年代後，常在 9 月初甚至 8 月底開始。暖化還導致酒精度普遍上升 0.5-1%，這威脅了布根地傳統高雅低酒精的風格。' },
      { type: 'single', question: '布根地酒農應對氣候暖化的主要策略包括？', options: ['A. 完全停止種植 Pinot Noir，改種耐熱品種', 'B. 選擇更高海拔、北向坡或改良農耕技術（晚採、葉幕管理）以保留酸度和清爽感', 'C. 大量灌溉以降低溫度', 'D. 政府全面補貼安裝冷卻系統'], correct: 1, explanation: '布根地酒農的暖化應對策略：1) 探索更高海拔（Hautes Côtes）地塊；2) 北坡或東北坡葡萄園價值上升；3) 調整採收時機（更早採收保留酸度）；4) 葉幕管理（讓葡萄更多蔭蔽）。' },
      { type: 'multiple', question: '以下哪些是氣候變遷對布根地葡萄酒風格的潛在正面影響？（多選）', options: ['A. 某些以往涼爽過度、難以完全成熟的年份現在更穩定', 'B. 某些以往無法釀出優質酒的北端或高海拔地塊現在條件更佳', 'C. 所有傳統優點都得到加強', 'D. 難以成熟的 Pinot Noir 問題大幅減少'], correct: [0, 1, 3], explanation: '暖化並非全是壞消息：以往被認為「太涼」的年份現在更規律成熟；Hautes Côtes 和北邊較冷的地塊現在出產品質更穩定的酒款；Pinot Noir 難以成熟的問題確實減少（但帶來新的過熱問題）。不是「所有傳統優點都被加強」，新的酸度流失挑戰更嚴峻。' },
      { type: 'single', question: '「生物動力法（Biodynamie）」在布根地應對氣候變遷中的角色是？', options: ['A. 生物動力法增加產量，彌補暖化導致的減產', 'B. 部分莊主認為生物動力農法能提升葡萄藤對極端天氣的抗性，保持土壤活性', 'C. 生物動力法被法律強制推行', 'D. 生物動力法與氣候暖化完全無關'], correct: 1, explanation: '越來越多頂尖布根地莊主（Leroy、DRC 等）採用生物動力農法，認為維護土壤微生物活性、增強根系深度和葡萄藤整體健康，能使其更好地應對暖化引起的乾旱、疾病壓力和極端溫差。' },
      { type: 'single', question: '從消費者角度，氣候變遷最應該改變的布根地選購策略是？', options: ['A. 只買最老的年份，忽略近年', 'B. 重新評估以往被認為偏弱的涼爽年份（如 2014、2017），這些年在暖化趨勢中變得更優質', 'C. 不再購買任何布根地白酒', 'D. 只購買海平面以下的葡萄園'], correct: 1, explanation: '氣候暖化重新定義了「好年份」：以往外界認為太涼的年份（2014 布根地）現在反而展現了絕佳的酸度平衡；反之，以往的「大年」（2003）在現今暖化下卻顯得過熟失衡。消費者需要更新對年份評估的框架。' }
    ]
  },

  // ══════════════════════════════════════════════
  // M7 品鑑技術
  // ══════════════════════════════════════════════
  'm7-l1': {
    type: 'quiz', title: '🧠 專業品鑑流程知識檢測',
    questions: [
      { type: 'single', question: '專業品鑑布根地葡萄酒的標準順序是？', options: ['A. 嘗味 → 觀色 → 聞香', 'B. 觀色 → 聞香 → 品味 → 回韻', 'C. 聞香 → 品味 → 搖杯', 'D. 隨意，無固定順序'], correct: 1, explanation: '標準品酒 SOP：1) 視覺（觀色、清澈度、深淺）→ 2) 第一次聞香（靜止杯）→ 3) 搖杯後再聞（釋放香氣）→ 4) 品味（入口甜度/酸度/單寧/酒精/果味）→ 5) 回韻（餘味長度和品質）。' },
      { type: 'single', question: '品鑑布根地紅酒時，顏色呈現「磚紅（Brick Red）」代表什麼？', options: ['A. 年輕新鮮', 'B. 陳年成熟，呈現氧化後的橙磚色調', 'C. 氧化失敗的缺陷', 'D. 採用特殊品種'], correct: 1, explanation: '布根地 Pinot Noir 年輕時呈現鮮亮的紅寶石色；隨著陳年，顏色逐漸向磚紅色（Brick）和橙棕（Tawny）轉變，邊緣出現橙色调。磚紅的邊緣是成熟陳年的正常表現，而非缺陷。' },
      { type: 'multiple', question: '搖杯後聞香時，布根地 Pinot Noir 常見的「第二類香氣（人為香氣/發酵香）」包括？（多選）', options: ['A. 蘑菇和森林地表', 'B. 玫瑰和紫羅蘭', 'C. 奶油、酸奶、麵包（乳酸發酵相關）', 'D. 香草和丁香（橡木桶香）'], correct: [2, 3], explanation: '品酒三層香氣：第一類（品種）= 果香/花香；第二類（發酵）= 奶油、乳酸、酵母麵包感；第三類（陳年）= 皮革、煙燻、松露、蘑菇。橡木香料（香草、丁香）屬於第二類（桶陳影響）。' },
      { type: 'single', question: '評估布根地白酒（Chardonnay）的「礦物感（Minerality）」時，最適合的描述語是？', options: ['A. 甜蜜、圓潤、蜂蜜感', 'B. 燧石（Flint）、白堊（Chalk）、溼石頭的清涼感', 'C. 煙燻、皮革的複雜感', 'D. 果汁般直接的甜果香'], correct: 1, explanation: '布根地 Chardonnay 礦物感的典型描述語：燧石（silex）、粉筆（chalk）、白堊（limestone）、溼石頭——這種風味來自石灰岩土壤環境和根系對礦物質的吸收，是 Chablis 和 Puligny 最重要的品質指標之一。' },
      { type: 'single', question: '布根地 Pinot Noir「單寧品質」的評估對比波爾多最大差異是？', options: ['A. 布根地單寧永遠比波爾多高', 'B. 布根地 Pinot Noir 應展現絲滑細膩的單寧質感，而非波爾多的強勁板結感，澀感代表缺點', 'C. 布根地不含任何單寧', 'D. 兩者單寧品質標準完全相同'], correct: 1, explanation: '布根地 Pinot Noir 的單寧品質評估關鍵：質感應細膩、絲滑（Silky），而非粗糙或板結。過多的澀感（Astringency）通常代表：未充分成熟、過度萃取、或過多新桶使用。與波爾多 Cabernet 的單寧評估完全不同。' }
    ]
  },

  'm7-l2': {
    type: 'quiz', title: '🧠 香氣識別知識檢測',
    questions: [
      { type: 'single', question: '年輕布根地 Pinot Noir（1-3 年）最典型的第一類香氣（品種香）是？', options: ['A. 皮革、松露、蘑菇', 'B. 鮮紅莓果（草莓、覆盆子）、紫羅蘭、玫瑰', 'C. 咖啡、黑巧克力', 'D. 汽油、煤油（熟化香）'], correct: 1, explanation: '年輕布根地 Pinot Noir 的品種香以鮮紅果（草莓、覆盆子、黑醋栗）和花香（紫羅蘭、玫瑰、牡丹）為主，是 Pinot Noir 品種最直接的香氣表達，清爽活潑。' },
      { type: 'single', question: '陳年 10 年以上的 Grand Cru Pinot Noir 典型的「第三類香氣（陳年香）」包括？', options: ['A. 青草、薄荷的草本香', 'B. 松露、皮革、森林地表（腐葉）、野菌', 'C. 新鮮熱帶水果', 'D. 烤麵包、奶油（桶香）'], correct: 1, explanation: '布根地頂尖 Pinot Noir 陳年後展現的複雜香氣群：松露（最高評價指標之一）、皮革、野菌（蘑菇、牛肝菌）、腐葉、煙燻、紅茶、丁香——這些是布根地最令人著迷的陳年複雜性象徵。' },
      { type: 'multiple', question: '布根地 Chardonnay 在橡木桶陳年（Elevage）後常見的香氣包括？（多選）', options: ['A. 烤榛果', 'B. 奶油麵包', 'C. 香草（Vanillin）', 'D. 黑色水果（李子、黑莓）'], correct: [0, 1, 2], explanation: 'Chardonnay 經橡木桶熟化後的典型桶香：烤榛果（noisette）、奶油麵包（beurre frais）、香草（vanille，來自橡木內酯）。黑色水果是 Pinot Noir 的香氣，不屬於白酒。' },
      { type: 'single', question: '「香氣強度（Intensity）」在品酒中如何正確評估？', options: ['A. 只需判斷是否有香氣', 'B. 評估香氣從杯口散發的距離和持久性：輕微、中等、濃郁', 'C. 用機器測量香氣分子濃度', 'D. 香氣強度與品質無關'], correct: 1, explanation: '香氣強度評估標準：搖杯後在距杯口 5-10cm 能否聞到（濃郁）、只有杯口才能聞到（中等）、幾乎無香（淡弱）。高強度香氣通常與低產量、老藤和良好年份相關，但強度本身不等於品質。' },
      { type: 'single', question: '品嚐布根地白酒發現有明顯「還原（Reduction）」氣味（硫磺、橡皮）應如何處理？', options: ['A. 立即倒掉，這是不合格的酒', 'B. 醒酒（搖杯或換瓶）15-30 分鐘，還原氣味通常會消散', 'C. 加水稀釋', 'D. 放到冰箱冷藏即可消除'], correct: 1, explanation: '「還原（Reduction）」是釀酒過程中缺氧所致，在開瓶初期常見，特別是未換氣的好酒。解決方案是搖杯或換瓶，讓空氣接觸後消散。通常 15-30 分鐘後，還原氣味消失，真實香氣才顯現。' }
    ]
  },

  'm7-l3': {
    type: 'quiz', title: '🧠 結構分析與平衡知識檢測',
    questions: [
      { type: 'single', question: '評估布根地葡萄酒「平衡（Balance）」時，以下哪組要素最核心？', options: ['A. 顏色深度和瓶重', 'B. 酸度、單寧（紅酒）、酒精、果味的相互比例', 'C. 價格和稀有程度', 'D. 產地認證和酒莊年份'], correct: 1, explanation: '平衡是葡萄酒品質的核心：果味提供豐滿，酸度提供活力，單寧提供骨架（紅酒），酒精提供warmth——任何一個要素過度突出（過酸、過澀、過甜、過燙）都破壞平衡，是布根地品質評估最基礎的指標。' },
      { type: 'single', question: '「酒體（Body）」在品鑑中的含義是？', options: ['A. 酒瓶的物理重量', 'B. 酒液在口中的重量感和豐滿度，與酒精和萃取物濃度相關', 'C. 酒標上印刷的重量說明', 'D. 葡萄藤的粗細程度'], correct: 1, explanation: 'Body（酒體）是描述酒液在口中給予的重量感：輕盈（Light）= 水般感；中等（Medium）= 如牛奶；飽滿（Full）= 如奶油。布根地 Pinot Noir 通常是輕至中等酒體，Chardonnay 依橡木桶和萃取方式不同從輕盈到豐滿不等。' },
      { type: 'multiple', question: '以下哪些是布根地 Pinot Noir「精緻（Finesse）」的描述指標？（多選）', options: ['A. 單寧滑順如絲，無刮舌感', 'B. 酸度活潑而非刺激', 'C. 香氣複雜但和諧，無任何要素過於突出', 'D. 回韻短暫，讓人印象深刻'], correct: [0, 1, 2], explanation: '布根地頂尖 Pinot Noir 的「精緻感」：單寧絲滑、酸度活潑平衡、香氣複雜和諧——這三者共同構成。「回韻短暫」反而是負面指標；偉大的 Grand Cru 回韻通常持續 60 秒以上（Caudalie）。' },
      { type: 'single', question: '「回韻（Finish/Length）」在葡萄酒品質評估中如何計量？', options: ['A. 以Caudalie 為單位（1 Caudalie = 1 秒的回韻時間）', 'B. 只以「短/中/長」描述', 'C. 以回韻苦度計算', 'D. 回韻不是品質指標'], correct: 0, explanation: '「Caudalie」是回韻的時間單位（1 Caudalie = 1 秒），是法國釀酒學校的正式評估方法。頂尖布根地 Grand Cru 的回韻通常超過 30 Caudalie，偉大年份有時超過 60 Caudalie，是品質的直接指標。' },
      { type: 'single', question: '布根地白酒的「油脂感（Viscosity/Oiliness）」和「礦物感（Minerality）」應如何同時評估？', options: ['A. 兩者互斥，礦物感強就不該有油脂感', 'B. 最頂尖的 Meursault 或 Puligny 可同時擁有圓潤油脂感（豐滿）和穿透性礦物感，形成最佳張力', 'C. 油脂感是缺陷，礦物感才是優點', 'D. 只有 Chablis 有礦物感'], correct: 1, explanation: '布根地頂尖 Chardonnay 的神奇之處在於：豐滿油脂感（來自酒泥接觸和橡木桶）和清透礦物感可以「共存」——Montrachet 和頂尖 Meursault 展現的正是這種複雜的雙重感，形成難以描述的深度。' }
    ]
  },

  'm7-l4': {
    type: 'quiz', title: '🧠 陳年潛力判斷知識檢測',
    questions: [
      { type: 'single', question: '布根地 Grand Cru Pinot Noir 的最長陳年潛力大約是？', options: ['A. 5-8 年', 'B. 10-15 年', 'C. 20-50 年以上', 'D. 只能陳年 2 年'], correct: 2, explanation: '布根地最偉大的 Grand Cru（RC、La Tâche、Chambertin）在最佳年份可陳年 30-50 年甚至更長。一般 Premier Cru 在 10-20 年達到頂峰，而 Village 等級通常在 5-10 年喝最好。' },
      { type: 'single', question: '判斷一款布根地新酒是否「適合陳年」的關鍵指標是？', options: ['A. 現在喝起來越好喝，越適合陳年', 'B. 酸度高、單寧結構紮實（紅酒）或酸度高且封閉（白酒），這些是陳年的天然防腐機制', 'C. 顏色越深越耐陳', 'D. 橡木桶的使用量'], correct: 1, explanation: '陳年潛力的核心指標：充足的天然酸度（是最重要的）+結構完整。酸度高的葡萄酒更抗氧化，需要時間展開封閉的香氣。現在喝起來「好喝」並不意味著「應該陳年」——有些酒就是設計為年輕飲用的。' },
      { type: 'multiple', question: '以哪些因素判斷布根地白酒的陳年能力？（多選）', options: ['A. 高酸度保護防氧化', 'B. 濃縮度（年份和老藤造就）', 'C. 適當橡木感但不過桶', 'D. 強烈甜感'], correct: [0, 1, 2], explanation: '布根地 Chardonnay 陳年三要素：高酸（最重要的防腐盾）、濃縮度（老藤/低產/好年份帶來的深度）、適當桶陳整合感（過桶反而縮短壽命）。強烈甜感不是布根地乾白的特徵，也非陳年指標。' },
      { type: 'single', question: '「開瓶窗口（Drinking Window）」的概念在布根地意指什麼？', options: ['A. 酒窖的最佳通風時段', 'B. 每款酒在其生命週期中最適合飲用的年份範圍', 'C. 只適用於氣泡酒的術語', 'D. 開瓶後可以放多久而不變質'], correct: 1, explanation: 'Drinking Window 是指一款酒從「封閉 → 開放 → 頂峰 → 衰退」的完整生命週期中，最佳飲用的時間段。了解不同 Grand Cru 的飲用窗口（如 Chambertin 通常在 15-30 年內，RC 可能更長）是購酒和享用的關鍵知識。' },
      { type: 'single', question: '「過早開瓶（Opening Too Early）」的布根地 Grand Cru 通常會呈現什麼狀態？', options: ['A. 非常美味，展現最佳狀態', 'B. 封閉緊澀，香氣缺乏，單寧粗礪，無法展現潛力', 'C. 氧化，帶醋味', 'D. 完全沒有任何香氣和味道'], correct: 1, explanation: '過早開瓶的布根地 Grand Cru——尤其強健年份（如 2005 或 2015）——往往表現「封閉（Closed）」：香氣內斂甚至完全不開放，單寧緊澀刺激，讓人懷疑是否品質有問題。解決方案是重新換瓶，或者耐心等待更多年份。' }
    ]
  },

  // ══════════════════════════════════════════════
  // M8 頂級酒莊
  // ══════════════════════════════════════════════
  'm8-l1': {
    type: 'quiz', title: '🧠 布根地頂級酒莊知識檢測',
    questions: [
      { type: 'single', question: '「Domaine de la Romanée-Conti（DRC）」的釀酒哲學核心是？', options: ['A. 最大產量，最高利潤', 'B. 極低干預（生物動力法）、老藤維護、全程手工採收和分揀，讓風土說話', 'C. 使用最多新桶，強調桶香', 'D. 每年更換釀酒師以創新'], correct: 1, explanation: 'DRC 是生物動力農法的堅定支持者，拒絕任何化學農藥，保護土壤生物活性；極嚴格的人工採收分揀；以及盡量低的人工干預釀造，讓風土（尤其是 Romanée-Conti 的獨特地塊）完整表達。' },
      { type: 'single', question: '「Maison Leroy」和「Domaine Leroy」的差異是？', options: ['A. 完全沒有差異', 'B. Maison Leroy 是酒商（從農夫購入），Domaine Leroy 是 Lalou Bize-Leroy 自有葡萄園', 'C. Domaine Leroy 比 Maison Leroy 更新成立', 'D. Maison Leroy 只出產氣泡酒'], correct: 1, explanation: 'Lalou Bize-Leroy 創立 Domaine Leroy，以生物動力農法管理自有葡萄園（包括夜丘多個頂級地塊）；Maison Leroy 是她家族的老牌酒商，以嚴格採購標準和龐大舊年份庫存著稱。兩者都是極昂貴的布根地象徵。' },
      { type: 'multiple', question: '以下哪些是夜丘最受崇敬的頂級 Domaine（酒莊）？（多選）', options: ['A. Domaine Armand Rousseau', 'B. Domaine Georges Roumier', 'C. Domaine Louis Jadot（酒商）', 'D. Domaine Henri Jayer（傳奇已逝）'], correct: [0, 1, 3], explanation: 'Rousseau（Gevrey 頂尖，Chambertin Monopole）、Roumier（Chambolle 大師，Les Amoureuses）、Henri Jayer（已故，酒款為布根地最高拍賣價之一）是夜丘最傳奇的三個 Domaine。Louis Jadot 是大型酒商（Négociant），非小型 Domaine。' },
      { type: 'single', question: '「Domaine Coche-Dury」在什麼領域是布根地最受尊崇的名字之一？', options: ['A. 夜丘紅酒', 'B. 伯恩丘 Meursault 頂尖 Chardonnay 白酒', 'C. 布根地氣泡酒（Crémant）', 'D. 夏布利白酒'], correct: 1, explanation: 'Jean-François Coche-Dury（現由兒子繼承）在 Meursault 創作了完美的 Chardonnay，其 Corton-Charlemagne 和 Meursault Premier Cru 款式是布根地白酒的最高成就之一，年產量極少，拍賣價可媲美 DRC 紅酒。' },
      { type: 'single', question: '「Domaine Ponsot」的極端釀酒哲學是什麼？', options: ['A. 使用最多新桶', 'B. 完全不使用任何新橡木桶（0% New Oak），以保留最純粹的地塊風土', 'C. 全部釀造甜酒', 'D. 使用電子發酵監控'], correct: 1, explanation: 'Ponsot 是布根地最著名的「反新桶」倡導者，堅持 0% 新桶，使用布根地特有舊桶（有時是幾十年的老桶），讓酒款完全表達 Morey-Saint-Denis 特級園的風土，而非氧化桶香型的「國際風格」。' }
    ]
  },

  'm8-l2': {
    type: 'quiz', title: '🧠 釀造哲學與風格知識檢測',
    questions: [
      { type: 'single', question: '「低干預（Low Intervention）」釀酒哲學在布根地的核心含義是？', options: ['A. 不需要做任何事，讓葡萄自然腐爛', 'B. 在釀造過程中最少使用添加物（不加糖、不調整酸度、無過濾），讓葡萄本質說話', 'C. 使用最簡單的機械設備', 'D. 每年更換所有設備'], correct: 1, explanation: '布根地頂尖 Domaine 的「低干預」哲學：盡量不加糖（補糖）、不調酸、不過濾（亦不澄清）、野生酵母自然發酵、盡量少用 SO₂——每一個步驟都是讓土地表達，而非釀酒師控制的過程。' },
      { type: 'single', question: '「Whole Cluster Fermentation（整串發酵）」在布根地的效果是？', options: ['A. 加速發酵過程，節省釀造時間', 'B. 增加葡萄梗帶入的丹寧和草本感，使酒款更有結構、更適合陳年', 'C. 主要為了降低酒精', 'D. 是舊世界禁止的釀造方式'], correct: 1, explanation: '整串發酵（葡萄梗不去除直接發酵）是布根地傳統做法，近年正在復興。葡萄梗帶來更多種類的丹寧、更緊實的骨架，以及獨特的香料/草本感。偉大酒莊（如 Rousseau、Roumier）都保留了這個傳統。' },
      { type: 'multiple', question: '「生物動力農法（Biodynamie）」最著名的布根地莊主包括哪些？（多選）', options: ['A. Domaine Leroy（Lalou Bize-Leroy）', 'B. Domaine de la Romanée-Conti', 'C. Domaine Leflaive（Puligny 白酒）', 'D. 所有布根地酒農都採用生物動力法'], correct: [0, 1, 2], explanation: 'Leroy（先驅）、DRC（全面實施）、Leflaive（Puligny 的代表）是最著名的布根地生物動力農法酒莊。並非所有布根地酒農都採用，仍有許多使用傳統有機或常規農法。' },
      { type: 'single', question: '「Élevage sur lies（帶酒泥熟化）」對布根地 Chardonnay 有什麼作用？', options: ['A. 加速氧化，使酒提早衰老', 'B. 酒液與死酵母接觸，增加圓潤感、豐滿度和麵包/奶油感', 'C. 完全沒有影響', 'D. 使酒液更清澈'], correct: 1, explanation: '帶酒泥熟化（Lees Aging）是布根地 Chardonnay 最重要的釀造工序之一：死酵母細胞分解後釋放蛋白質和多醣，增加酒液的圓潤質地（Creaminess）、豐滿度，以及標誌性的烤麵包/奶油香氣。' },
      { type: 'single', question: '「Bâtonnage（攪桶）」在伯恩丘 Chardonnay 釀造中的作用是？', options: ['A. 去除不需要的顏色', 'B. 定期攪動酒泥懸浮於酒液中，加強與酒泥接觸的圓潤和豐滿效果', 'C. 增加發酵速度', 'D. 冷卻橡木桶溫度'], correct: 1, explanation: 'Bâtonnage（攪桶）= 用棍棒定期攪動橡木桶底部的酒泥，讓其分布在酒液中。過去幾十年是標準做法，但近年趨勢是「少攪桶」甚至「不攪桶」，因為過度攪桶會賦予過多圓潤油脂感，掩蓋地塊的礦物真實性。' }
    ]
  },

  'm8-l3': {
    type: 'quiz', title: '🧠 新興酒莊與未來知識檢測',
    questions: [
      { type: 'single', question: '布根地「新星莊主（新世代 Domaine）」最受業界關注的主要原因是？', options: ['A. 使用最昂貴的設備', 'B. 以現代農業哲學（有機/生物動力）、創新釀造技術，在傳統框架中開拓全新表達', 'C. 規模最大，產量最高', 'D. 只釀造大區等級的酒款'], correct: 1, explanation: '新一代布根地莊主受到業界關注，通常因為：採用更嚴格的有機/生物動力農法；在「未知」的地塊發掘潛力；釀酒手法更精準（更少干預、整串等）；同時保持艱難的傳統工藝。' },
      { type: 'single', question: '「Domaine Bizot」在夜丘的特色是？', options: ['A. 是最古老的布根地酒莊', 'B. 以極低產量、生物動力農法和完全未過濾的 Pinot Noir 呈現最純粹的 Vosne-Romanée 風土', 'C. 主要生產氣泡酒', 'D. 近年才轉型為葡萄種植'], correct: 1, explanation: 'Jean-Yves Bizot 的 Domaine Bizot 是近年最受矚目的 Vosne-Romanée 新星，以生物動力農法、超低產量和完全不過濾的釀造哲學著稱，其酒款在二手市場溢價極高，年輕一代收藏家極力追捧。' },
      { type: 'multiple', question: '以下哪些趨勢代表布根地釀酒未來的方向？（多選）', options: ['A. 對被忽視地塊的再發掘和重新評估', 'B. 更嚴格的農法（有機、生物動力）成為主流', 'C. 大量使用化學農藥以增加穩定性', 'D. 年輕莊主接手傳統 Domaine，帶入更多精準農耕知識'], correct: [0, 1, 3], explanation: '布根地未來趨勢：1) 對「被低估」的次級地塊、舊年份、罕見 Monopole 的重新發掘；2) 有機/生物動力農法成為新標準；3) 年輕一代莊主（擁有釀酒學位和科學訓練）接手傳統家族。化學農藥使用反而在減少。' },
      { type: 'single', question: '布根地「自然酒（Vin Nature）」運動的主要訴求是什麼？', options: ['A. 完全不讓葡萄自然生長，最大人工干預', 'B. 葡萄園和釀造全程無或最少添加物（含 SO₂），保留最自然的微生物活動和風味表達', 'C. 規定使用特定品牌的酵母', 'D. 禁止任何形式的橡木桶使用'], correct: 1, explanation: '自然酒運動強調：有機/生物動力葡萄園 + 野生酵母（無添加商業酵母）+ 無或極少 SO₂ 添加 + 不澄清不過濾的釀造方式。部分布根地小莊主（尤其馬貢、薄酒萊延伸區）是自然酒先驅。' },
      { type: 'single', question: '展望未來，什麼樣的布根地投資策略最可能同時兼顧品質和升值潛力？', options: ['A. 只買 DRC 和 Leroy，永遠是最安全', 'B. 在新星小莊主尚未被市場發現前購買（10-20 瓶）+ 持有傳統 Grand Cru 基準款', 'C. 只在超市購買促銷款', 'D. 完全不投資，布根地酒不會升值'], correct: 1, explanation: '聰明的布根地投資組合：一部分持有傳統 Grand Cru 頂尖莊（DRC、Rousseau 等確定性最高）；另一部分研究新興優質小莊（Bizot、Fourrier 等）在市場尚未完全追捧前買入少量——這種組合可同時對沖風險，並保有超額回報的可能。' }
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
  ['intermediate-m5.json', 'm5-l1'],
  ['intermediate-m5.json', 'm5-l2'],
  ['intermediate-m5.json', 'm5-l3'],
  ['intermediate-m5.json', 'm5-l4'],
  ['intermediate-m6.json', 'm6-l1'],
  ['intermediate-m6.json', 'm6-l2'],
  ['intermediate-m6.json', 'm6-l3'],
  ['intermediate-m7.json', 'm7-l1'],
  ['intermediate-m7.json', 'm7-l2'],
  ['intermediate-m7.json', 'm7-l3'],
  ['intermediate-m7.json', 'm7-l4'],
  ['intermediate-m8.json', 'm8-l1'],
  ['intermediate-m8.json', 'm8-l2'],
  ['intermediate-m8.json', 'm8-l3'],
]

console.log('=== 布根地 L2 Quiz 注入 — Batch 2 (M5-M8) ===\n')
for (const [file, lid] of pairs) {
  if (QUIZ_MAP[lid]) { if (injectQuiz(file, lid, QUIZ_MAP[lid])) ok++ }
  else console.log(`⚠️  無題目定義：${lid}`)
}
console.log(`\n完成：${ok}/14 已注入`)
