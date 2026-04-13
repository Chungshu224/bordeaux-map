/**
 * inject-bourgogne-l3-quiz-m2.mjs
 * 布根地 L3 Quiz 注入 — M2：名莊解析（7 lessons）
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.resolve(__dirname, '..', 'public/bourgogne/data/courses/level3')
const MARKER = '_inject_bourgogne_l3_quiz'

const QUIZ_MAP = {
  'm2-l1': {
    type: 'quiz', title: '🧠 DRC 深度解析知識檢測',
    questions: [
      {
        type: 'single',
        question: 'Romanée-Conti 單一地塊（Monopole）的精確面積是？',
        options: ['A. 0.85 公頃', 'B. 1.81 公頃', 'C. 3.52 公頃', 'D. 5.29 公頃'],
        correct: 1,
        explanation: 'Romanée-Conti 地塊精確面積為 1.81 公頃，全球最貴的葡萄酒之一。由於面積極小，年產量僅約 5,000-6,000 瓶，加上 DRC 不使用化學農藥、採用生物動力法管理，使其成為全球稀缺度最高的葡萄酒。'
      },
      {
        type: 'single',
        question: 'DRC（Domaine de la Romanée-Conti）採用何種農業哲學，且從哪個年份開始全面實施？',
        options: ['A. 慣行農業，2000年', 'B. 有機農業，1985年', 'C. 生物動力農法（Biodynamic），1980年代中期全面轉型，Lalou Bize-Leroy 推動', 'D. 水耕農業，2010年'],
        correct: 2,
        explanation: 'DRC 在 Lalou Bize-Leroy 積極推動下，於 1980 年代中期全面轉向生物動力農法。這包括使用 500（牛糞角）、501（石英粉角）等特殊製劑，根據月相曆進行農事，以及完全杜絕化學除草劑和農藥——這在當時的布根地是極少見的前衛決定。'
      },
      {
        type: 'multiple',
        question: 'DRC 目前擁有的特級園（Grands Crus）地塊包括？（多選）',
        options: ['A. Romanée-Conti', 'B. La Tâche', 'C. Chambertin', 'D. Richebourg'],
        correct: [0, 1, 3],
        explanation: 'DRC 的特級園組合：Romanée-Conti（Monopole）、La Tâche（Monopole）、Richebourg、La Romanée（一段時期）、Romanée-Saint-Vivant、Grands Échézeaux、Échézeaux，以及 Bâtard-Montrachet（白酒）。Chambertin 屬於 Gevrey-Chambertin，DRC 並未持有。'
      },
      {
        type: 'single',
        question: 'DRC 採用「老藤（Vieilles Vignes）」政策的核心理由是？',
        options: ['A. 老藤照顧成本更低', 'B. 老藤含有更多水分，酒體更豐富', 'C. 老藤根系深廣，自然低產，能表達更複雜的礦物層次和穩定的年份間品質', 'D. 法規要求 DRC 保留老藤'],
        correct: 2,
        explanation: 'DRC 保留許多樹齡 50-80 年的老藤，並採用馬薩爾篩選（Massal Selection）取枝，保留地塊的基因多樣性。老藤的深根系（可達 10-20 米）在乾旱年份能穩定供水，低產量（有時每公頃僅 20-25 HL）保證每果串的濃縮度。'
      },
      {
        type: 'single',
        question: 'DRC 葡萄酒的橡木桶政策是？',
        options: ['A. 完全不使用新橡木桶', 'B. 100% 新橡木桶陳年，以彰顯酒質能駕馭橡木桶', 'C. 視地塊和年份彈性調整，通常 50-100% 新桶，但追求木桶融合入酒而非主導', 'D. 只使用 5 年以上的舊桶'],
        correct: 2,
        explanation: 'DRC 的橡木桶使用靈活而複雜：頂級地塊（RC、La Tâche）通常使用更高比例新桶，但整體風格以「木桶服務酒，而非酒服務木桶」為原則。對比某些 Burgundy 莊主追求零新桶，DRC 認為高品質葡萄酒能完全吸收並整合橡木桶影響。'
      }
    ]
  },

  'm2-l2': {
    type: 'quiz', title: '🧠 Domaine Leroy 深度解析知識檢測',
    questions: [
      {
        type: 'single',
        question: 'Lalou Bize-Leroy 在與 DRC 決裂後，如何建立自己的 Domaine Leroy？',
        options: ['A. 從零開始在布根地購買地塊', 'B. 1988年收購了曾是 Charles Noëllat 的酒莊，獲得多個特級園和一級園地塊', 'C. 從 DRC 分割得到部分地塊', 'D. 通過政府補助建立新酒莊'],
        correct: 1,
        explanation: '1988年，Lalou Bize-Leroy 以驚人的慧眼收購了 Domaine Charles Noëllat（Vosne-Romanée 優質遺產），瞬間獲得 Richebourg、Romanée-Saint-Vivant 等珍貴特級園。加上後續擴充，Domaine Leroy 如今擁有 22 個特級園和一級園地塊，被視為布根地最重要私人酒莊之一。'
      },
      {
        type: 'single',
        question: 'Domaine Leroy 的種植密度和產量政策是？',
        options: ['A. 標準密度，高產量', 'B. 超高種植密度（10,000株/公頃），極低產量（有時僅15-25 HL/公頃），是全布根地競爭最激烈的低產策略', 'C. 低密度，中等產量', 'D. 密度和產量根據市場需求調整'],
        correct: 1,
        explanation: 'Leroy 的種植密度高達 10,000 株/公頃（布根地標準已是 10,000，但 Leroy 嚴格貫徹），並通過嚴格的綠色採收（Green Harvest）將產量壓低至極限，有時每公頃僅 15-25 HL——是 AOC 法規最低允許量的一半以下，被認為是高度濃縮的保障。'
      },
      {
        type: 'multiple',
        question: 'Lalou Bize-Leroy 在生物動力農法上的先驅貢獻包括？（多選）',
        options: ['A. 是第一位在布根地大規模實施並記錄生物動力農法效果的莊主', 'B. 將月相曆系統性地應用於採收決策', 'C. 發明了生物動力農法本身', 'D. 教導和影響了許多後來的布根地生物動力莊園主'],
        correct: [0, 1, 3],
        explanation: 'Lalou 是布根地生物動力農法的精神領袖：她在 1988 年即開始實施，比大多數莊主早 10-20 年；系統記錄月相與農事的關聯；並通過示範效應影響了 Dujac、Méo-Camuzet 等後來者。生物動力農法本由 Rudolf Steiner 於 1924 年創立，並非 Lalou 發明。'
      },
      {
        type: 'single',
        question: 'Maison Leroy（貿易商部門）和 Domaine Leroy（酒莊部門）的主要區別是？',
        options: ['A. 兩者完全相同', 'B. Maison Leroy 購買葡萄或酒液後精選裝瓶（議商），Domaine Leroy 是自有地塊種植釀造（酒莊）——前者歷史更悠久但量更大', 'C. Maison Leroy 只賣 DRC 葡萄酒', 'D. Domaine Leroy 是 Maison Leroy 的子品牌'],
        correct: 1,
        explanation: 'Leroy 雙品牌策略：Maison Leroy（1868年創立）是傳統布根地議商（Négociant），購買特選酒液在地窖熟成後裝瓶，擁有大量珍稀老年份庫存；Domaine Leroy（1988年創建）是自有地塊的純莊主酒，品質更高、量更小、價格更貴，是市場最搶手的品項之一。'
      },
      {
        type: 'single',
        question: '為什麼 Domaine Leroy 某些年份的 Chambolle-Musigny 一級園售價可超越其他莊主的特級園？',
        options: ['A. 因為 Leroy 的定價策略刻意高估', 'B. 因為法規保護', 'C. Leroy 極低產量、生物動力、壓縮密度的綜合效應，使即便是村莊級地塊也達到頂級品質，加上極稀缺量，市場願意支付遠超 AOC 等級的溢價', 'D. Chambolle-Musigny 一級園法規比特級園更嚴格'],
        correct: 2,
        explanation: 'Leroy 破壞了「AOC 等級 = 價格階梯」的邏輯：同一地塊，Leroy 的 Village 或一級園可能比其他莊主的相同特級園貴數倍。核心在於：超低產量（15-20 HL/公頃）+ 生物動力最大風土表達 + 極少分配量 = 品質超越等級。這挑戰了布根地分級制度的定價基礎。'
      }
    ]
  },

  'm2-l3': {
    type: 'quiz', title: '🧠 Domaine Armand Rousseau 知識檢測',
    questions: [
      {
        type: 'single',
        question: 'Domaine Armand Rousseau 在 Gevrey-Chambertin 的核心遺產是？',
        options: ['A. 擁有 Musigny 的最大份額', 'B. 持有 Chambertin 和 Chambertin Clos de Bèze 的重要份額，被認為是 Gevrey 最精準的特級園詮釋者', 'C. DRC 的前身', 'D. 以白酒聞名'],
        correct: 1,
        explanation: 'Rousseau 持有 Chambertin 約 2.15 公頃（全區 13 個擁有者之一，但是最重要的）和 Chambertin-Clos de Bèze 約 1.42 公頃，加上 Mazy-Chambertin、Mazis-Chambertin 等多個夜丘頂尖地塊。其 Chambertin 被廣泛認為是這個特級園「教科書式」的詮釋——深邃、嚴肅、長壽。'
      },
      {
        type: 'single',
        question: 'Rousseau 釀造風格的最大特點是？',
        options: ['A. 追求濃縮、深色、果醬感', 'B. 傳統整束萃取、完整表達 Gevrey 土地的鐵礦物感和嚴肅結構，以長陳年潛力著稱', 'C. 偏好極淡色、薄涼風格', 'D. 大量新橡木桶賦予強烈木桶風味'],
        correct: 1,
        explanation: 'Rousseau 的釀造哲學：保留 Gevrey 地塊的鐵質礦物感（terre de fer）和嚴肅骨幹，通過控制萃取（適量去梗或保留整串）和中等新桶（約 30-40%）讓風土自我表達。年輕時常顯緊澀，10-20年後展現出布根地最偉大的瓦片/玫瑰/甘草礦物層次。'
      },
      {
        type: 'multiple',
        question: 'Chambertin 特級園的複雜性在於？（多選）',
        options: ['A. 有 13 個不同莊主，品質差異極大', 'B. 土壤構成在 13 公頃內有顯著差異', 'C. Chambertin 只有一個莊主', 'D. 不同地塊塊的排水和坡向略有不同'],
        correct: [0, 1, 3],
        explanation: 'Chambertin（13 公頃）的複雜性：13 位莊主（包括 Rousseau、Trapet、Rossignol-Trapet 等）的釀造哲學各異，導致同年份「Chambertin」風格差異驚人；土壤在南北方向有輕微變化；坡度和排水也不同——這使得品飲 Chambertin 需要指明莊主，才有實質意義。'
      },
      {
        type: 'single',
        question: '「Clos Saint-Jacques」在 Gevrey-Chambertin 中的特殊地位是什麼？',
        options: ['A. 它是 Chambertin 的最佳地塊', 'B. 它是 Gevrey 最受推崇的一級園，其品質在盲品測試中常勝過多個特級園莊主的酒款', 'C. 它已被升格為特級園', 'D. Rousseau 擁有全部 Clos Saint-Jacques'],
        correct: 1,
        explanation: 'Clos Saint-Jacques（6.7 公頃，一級園）是布根地「等級被低估的地塊」代表案例：多次盲品中超越 Chambertin（特級園），5 位莊主（Rousseau、Bruno Clair、Fourrier、Esmonin、Geantet-Pansiot）的版本各具特色。它未被升格為特級園的原因至今仍是布根地的爭議話題。'
      },
      {
        type: 'single',
        question: 'Rousseau 近年（2010年代後）的品質演變是什麼趨勢？',
        options: ['A. 品質下滑，不再受市場追捧', 'B. 由 Eric Rousseau 主掌後，在保留傳統的同時更精準地控制整串比例和萃取，整體品質被認為達到歷史高峰', 'C. 轉向現代濃縮風格', 'D. 開始生產大量白酒'],
        correct: 1,
        explanation: 'Eric Rousseau 繼承父業後，在傳統架構上引入更精細的果園管理和釀造微調。評論界普遍認為 2010 年代的 Rousseau 達到酒莊歷史品質最高點——Chambertin 2010、2015 等年份被認為是「完美年份完美詮釋」，二級市場價格也創歷史新高。'
      }
    ]
  },

  'm2-l4': {
    type: 'quiz', title: '🧠 Domaine Coche-Dury 知識檢測',
    questions: [
      {
        type: 'single',
        question: '為什麼 Coche-Dury 的 Meursault 被認為超出其 AOC 等級定義的品質？',
        options: ['A. 因為 Meursault 的 AOC 等級被錯誤評定', 'B. 因為 Jean-François Coche-Dury 以超低產量、完美的乳酸管理和精確的橡木桶整合，將 Meursault 的礦物精緻性提升到 Montrachet 的對話層次', 'C. 因為 Coche-Dury 使用非法添加物', 'D. 因為地塊面積特殊'],
        correct: 1,
        explanation: 'Coche-Dury 的神話在於：其 Meursault Perrières（一級園）和 Corton-Charlemagne（特級園）通過極低產量（20-25 HL/公頃）、溫和乳酸發酵管理和精確的橡木桶細工，展現出超越技術預期的深度和陳年潛力，被 Robert Parker 評為「布根地最偉大的白酒之一」。'
      },
      {
        type: 'single',
        question: 'Coche-Dury 著名的「礦物感（Mineral Intensity）」主要來源被認為是？',
        options: ['A. 添加了礦物質飼料', 'B. 伯恩丘的石灰岩和泥灰岩深根吸收、刻意保留天然酸度（限制乳酸轉換）和桶陳過程中的氧化還原平衡', 'C. 特殊的酵母菌株', 'D. 礦物感只是行銷術語，無實際科學解釋'],
        correct: 1,
        explanation: 'Coche-Dury 礦物感的多重成因：1) Meursault 特定地塊（Perrières尤其）的石灰泥灰岩地質；2) 低產量使礦物元素濃縮；3) 謹慎控制乳酸轉換（保留一定蘋果酸酸度和礦物張力）；4) 在 Allier 橡木桶中的長桶陳（18-22個月）實現風味整合——這些要素共同創造出獨特的「白至黑礦石」礦物張力。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 Coche-Dury 的小量稀缺性成因？（多選）',
        options: ['A. 自有地塊面積極小（不到 9 公頃）', 'B. 產量極低（每公頃 20-30 HL）', 'C. 法規限制分配量', 'D. 部分地塊釀造量每年不足 1 桶（225L）'],
        correct: [0, 1, 3],
        explanation: 'Coche-Dury 的稀缺公式：約 9 公頃自有地 × 超低產量（15-30 HL/公頃）= 極少年產量。某些地塊（如 Corton-Charlemagne）僅持有 0.2-0.3 公頃，一個年份可能僅產 1-2 桶（900-1800 瓶）。加上幾乎不公開對外銷售的家族傳承式配額（Allocation）制度，使其成為布根地最難取得的酒款之一。'
      },
      {
        type: 'single',
        question: '「Allocation System（配額制度）」在頂尖布根地如 Coche-Dury 的意義是？',
        options: ['A. 隨機抽籤決定購買權', 'B. 長期忠實客戶優先制度，建立多年關係的酒商和私人客戶獲得固定年份配額，新客幾乎無法獲得', 'C. 網路公開搶購', 'D. 政府統一分配'],
        correct: 1,
        explanation: '布根地頂尖酒莊的 Allocation 制度是排他性社交網絡：合作多年的酒商（如 Becky Wasserman、Kermit Lynch）獲得年份配額，並依關係深度決定分配量。新客戶通常需要等待老客戶離世或關係中斷才有機會——這個制度鞏固了稀缺性，但也被批評為不透明。'
      },
      {
        type: 'single',
        question: 'Jean-François Coche 退休後，兒子 Raphaël Coche-Dury 的接班品質評估是？',
        options: ['A. 品質大幅下滑，失去競爭力', 'B. Raphaël 在延續父親哲學的同時，初期調整降低乳酸轉換比例，市場總體認可品質維持在極高水準', 'C. 完全轉型為現代風格', 'D. 酒莊已停止運營'],
        correct: 1,
        explanation: 'Raphaël Coche（2010年代接班）在傳承父親低干預哲學基礎上有所微調，評論界普遍認為品質保持在頂尖水準，並無衰退跡象。2015、2017、2019 等新近年份的 Meursault Perrières 依然被評為年度最佳白酒候選，確立了酒莊跨世代的品質持續性。'
      }
    ]
  },

  'm2-l5': {
    type: 'quiz', title: '🧠 Domaine Comte Georges de Vogüé 知識檢測',
    questions: [
      {
        type: 'single',
        question: 'Domaine Comte Georges de Vogüé 對 Musigny 特級園的壟斷程度是？',
        options: ['A. 完全 Monopole（100%）', 'B. 持有 Musigny 10.08 公頃中的約 7.12 公頃（約 70%），是最大單一持有者但非 Monopole', 'C. 持有約 30%', 'D. 只持有 Musigny Blanc 部分'],
        correct: 1,
        explanation: 'Vogüé 持有 Musigny（10.08 公頃）中的 7.12 公頃，佔比約 70%，是最大但非唯一持有者（其他擁有者包括 Jacques Prieur、Leroy 等）。Vogüé 的 Musigny 以結構宏偉+絲絨質地著稱，被視為布根地 Pinot Noir「陰性力量」的最高體現。'
      },
      {
        type: 'single',
        question: 'Vogüé 曾一度停止生產 Musigny 特級園 AOC 並降到 Bourgogne 大區等級，原因是？',
        options: ['A. 品質下滑的商業決策', 'B. 1994-2002 年間進行老藤更新（Replanting）——法規要求新植藤齡必須達到一定年限才能申請特級園 AOC，Vogüé 甚至降至 Bourgogne Rouge 出售', 'C. 與法要求的政策衝突', 'D. 地塊租約到期'],
        correct: 1,
        explanation: '1994年開始，Vogüé 進行大規模老藤更新，年輕新植葡萄藤無法達到 AOC 法規的最低樹齡要求（通常 3 年以上），且 Vogüé 認為更年輕的藤不能代表 Musigny 的品質標準——因此主動將該批次降至 Bourgogne Rouge 等級裝瓶，展示了對品質的絕對堅持，也成為布根地酒業的誠信典故。'
      },
      {
        type: 'multiple',
        question: 'Musigny 特級園被稱為「Chambolle 的皇冠」的理由包括？（多選）',
        options: ['A. 是 Chambolle 最大的特級園', 'B. 展現布根地 Pinot Noir 最典型的細緻花香（玫瑰、紫羅蘭）和絲滑質地', 'C. 是全布根地最貴的特級園', 'D. 特殊的土壤構成和坡向賦予其獨特的優雅力量組合'],
        correct: [1, 3],
        explanation: 'Musigny 的地位來自風格上的獨特性：雖不是最大也不是最貴，但其花香細膩性（被稱為「布根地最女性化的特級園」）和海拔+石灰岩土壤的組合賦予了無可複製的絲滑質地。Bonnes-Mares（同為 Chambolle 特級園）更強勁男性化，形成鮮明對比。'
      },
      {
        type: 'single',
        question: 'Vogüé 旗下 Chambolle-Musigny Premier Cru（Les Amoureuses 等）的市場表現為何超出一般一級園？',
        options: ['A. 因為 Vogüé 的行銷能力極強', 'B. Les Amoureuses 毗鄰 Musigny，土壤條件接近特級園，加上 Vogüé 一貫的低產高品質，使其成為「實質特級園、名義一級園」代名詞', 'C. 因為 Les Amoureuses 已申請升格為特級園', 'D. 市場對 Vogüé 的評價被過度炒作'],
        correct: 1,
        explanation: 'Les Amoureuses（字面意為「戀人」）緊鄰 Musigny 南部邊界，同樣的土壤條件+Vogüé 超低產量（15-20 HL/公頃），使其成為布根地升格呼聲最高的一級園。二級市場價格有時超越其他莊主的特級園，是「等級定義落後於實際品質」的典型案例。'
      },
      {
        type: 'single',
        question: 'Vogüé 生產少量的「Musigny Blanc」有何特殊意義？',
        options: ['A. 只是商業多元化', 'B. Musigny 特級園有極少量 Chardonnay 古藤，是布根地最稀有的白酒之一，展現頂級紅酒地塊種植白品種的神秘可能性', 'C. 布根地法規允許所有特級園生產白酒', 'D. Musigny Blanc 品質遠低於 Musigny Rouge'],
        correct: 1,
        explanation: 'Vogüé 的 Musigny Blanc 是全球最稀有白酒之一（年產量不足 300 瓶），來自地塊中的 Chardonnay 老藤。在傳統以 Pinot Noir 為尊的 Musigny 土壤上，白酒呈現了令人意外的礦物深度和細緻複雜性，成為實驗性稀缺品的傳奇——在二級市場售價常超越 Montrachet。'
      }
    ]
  },

  'm2-l6': {
    type: 'quiz', title: '🧠 新生代名家 Dujac / Méo-Camuzet 知識檢測',
    questions: [
      {
        type: 'single',
        question: 'Domaine Dujac 的奠基人 Jacques Seysses 的釀造哲學最顯著特徵是？',
        options: ['A. 強調顏色萃取和濃縮度', 'B. 整串發酵（高比例保留葡萄梗）、不去梗+輕微萃取，追求細膩香氣複雜性而非結構力量', 'C. 完全去梗，100% 新桶', 'D. 只使用舊桶陳年'],
        correct: 1,
        explanation: 'Jacques Seysses（外來者，1967年創莊）是「整串發酵」的早期倡導者：保留葡萄梗引入的單寧骨架和香辛料複雜性，同時輕柔萃取，追求布根地最精緻的香氣紡性——花香、肉桂、丁香的交疊。其子 Jeremy Seysses 延續此哲學，並根據年份特性微調梗比例。'
      },
      {
        type: 'single',
        question: 'Domaine Méo-Camuzet 地塊的特殊歷史背景是？',
        options: ['A. 一直是家族自有地', 'B. 大量地塊過去以「métayage（分成制佃農）」方式租借給 Henri Jayer，1988 年後陸續收回自釀', 'C. 從 DRC 購入', 'D. 所有地塊在二戰後重新分配'],
        correct: 1,
        explanation: 'Méo-Camuzet 的轉型故事：大部分黃金地塊（包括 Vosne-Romanée Cros Parantoux 等）長期以分成制租給「布根地之神」Henri Jayer 耕種和釀造。Jayer 退休後（1988年起陸續），Méo-Camuzet 開始在 Jayer 親自指導下收回地塊自釀，至今仍被視為承接 Jayer 血脈的傳承者。'
      },
      {
        type: 'multiple',
        question: 'Henri Jayer 對布根地釀造留下的最重要遺產包括？（多選）',
        options: ['A. 完全去梗（100% Destemming）的系統化推廣', 'B. 低溫浸漬冷浸（Cold Pre-Fermentation Maceration）技術的推廣', 'C. 發明了整串發酵技術', 'D. 強調酒窖衛生和精確溫度控制'],
        correct: [0, 1, 3],
        explanation: 'Henri Jayer（被稱為「布根地之神」）的貢獻：1) 推廣100%去梗（減少生青草澀感）；2) 冷浸漬技術（提高香氣有趣度）；3) 嚴格酒窖衛生（消除異常味）；4) 溫控發酵管理——這套「Jayer 方法論」在 1980-90 年代成為全球追捧的精品布根地範本。整串發酵是更早的傳統或新世代的複興，非 Jayer 創造。'
      },
      {
        type: 'single',
        question: 'Cros Parantoux（一級園）被稱為「Vosne-Romanée 的秘密特級園」的理由是？',
        options: ['A. 等級錯誤，應屬特級園', 'B. Henri Jayer 接手荒廢的前採石場，重新開墾成高品質葡萄園，Jayer 版本在盲品中多次勝過 Romanée-Saint-Vivant 等特級園', 'C. 隱藏在山林中，不公開參觀', 'D. 只有 Méo-Camuzet 持有此地塊'],
        correct: 1,
        explanation: 'Cros Parantoux 的傳奇：1940-50 年代被廢棄的採石場地塊，Jayer 在 1951 年以極低價格接手，親自用炸藥和鋤頭整地，種植 Pinot Noir。其獨特的高海拔（約 320m）、石灰岩覆蓋土和老藤，在 Jayer 手中展現了超然的複雜度，多次在盲品中超越費用更高的特級園。'
      },
      {
        type: 'single',
        question: '現代布根地「新生代釀酒師」與老一代的主要釀造理念差異是？',
        options: ['A. 新生代放棄生物動力農法', 'B. 新生代更多實驗整串比例的靈活調整、降低新桶比例（趨向 20-30%）、更輕柔萃取——整體趨向優雅和透明度勝過力量濃縮', 'C. 新生代追求更高酒精', 'D. 新生代放棄布根地傳統完全轉向新世界風格'],
        correct: 1,
        explanation: '2000年後布根地新世代（如 Jeremy Seysses、Thibault Liger-Belair 等）的共同趨勢：彈性調整整串比例（非固定 0% 或 100%）、降低新桶（老桶/舊桶比例提高）、更輕柔踩皮和更短浸漬期——整體風格「更透明、更精緻、更高酸」，與 1990 年代的濃縮流行風格形成代際對比。'
      }
    ]
  },

  'm2-l7': {
    type: 'quiz', title: '🧠 釀造哲學比較與盲品辨識知識檢測',
    questions: [
      {
        type: 'single',
        question: '在布根地名莊盲品中，辨識「DRC vs. Leroy」最可靠的視覺和嗅覺線索是？',
        options: ['A. DRC 更深色，Leroy 更淡', 'B. 兩者難以區分，因為釀造完全相同', 'C. Leroy 在年輕時常展現更深沉的花香濃縮感和更緊實的酸度骨架；DRC 則以更寬廣、飄逸的絲滑香氣和獨特的肉桂/玫瑰特徵見長', 'D. 只能通過標籤辨識'],
        correct: 2,
        explanation: '系統化辨識方法：Leroy（超低產濃縮）年輕時更緊密、更高酸、更濃縮，需要更長時間開放；DRC 具有標誌性的「丁香+玫瑰+肉桂」複雜香辛料，以及常被描述的「天鵝絨+泥土+松露」組合。但盲品辨識需要豐富實踐，且年份和熟成程度對辨識有巨大影響。'
      },
      {
        type: 'single',
        question: '「傳統主義（Traditionalist）vs. 現代主義（Modernist）」在布根地的核心爭論是？',
        options: ['A. 是否種植國際品種', 'B. 是否在釀造中干預越少越好（传統）還是接受必要的技術手段以確保穩定（現代），核心分歧在橡木桶比例、過濾與否和乳酸管理', 'C. 是否生產氣泡酒', 'D. 傳統 vs. 現代在布根地沒有爭議'],
        correct: 1,
        explanation: '布根地傳統 vs. 現代主義之爭集中在：1) 橡木桶（舊桶 vs. 新桶）；2) 去梗程度（整串 vs. 完全去梗）；3) 過濾（完全不過濾 vs. 精細過濾）；4) 乳酸管理（自然完整轉換 vs. 人工管理轉換比例）——Leroy/DRC/Dujac 代表不干預傳統，某些中型商業酒莊代表穩定導向的現代風格。'
      },
      {
        type: 'multiple',
        question: '在盲品中辨識布根地「村莊風格」時，Gevrey-Chambertin 相對 Chambolle-Musigny 有哪些典型特徵？（多選）',
        options: ['A. Gevrey 顏色通常更深，礦物感偏鐵礦/黑鉛', 'B. Gevrey 單寧更強勁、結構更宏大', 'C. Chambolle 花香（玫瑰/紫羅蘭）較 Gevrey 更明顯', 'D. Chambolle 酒體比 Gevrey 更濃重'],
        correct: [0, 1, 2],
        explanation: '典型村莊對比：Gevrey（鐵礦土壤）→ 深色、強健骨架、黑色水果、煙燻/肉桂礦物感；Chambolle（石灰岩、更多黏土）→ 淡透明色、細膩花香（玫瑰/紫羅蘭）、圓潤絲滑，酒體更輕——這是地質差異直接表達在酒款風格上的教科書案例。'
      },
      {
        type: 'single',
        question: '「整串發酵（Whole Cluster Fermentation）」在盲品中最可能帶來的識別線索是？',
        options: ['A. 更低的酒精度', 'B. 非整串發酵的識別較難，因絕對沒有任何特徵', 'C. 在中段往往呈現葡萄梗帶來的輕微煙草/香辛料/鉛筆芯元素，以及更高的整體香氣張力和更涼爽的礦物調性', 'D. 整串發酵的酒顏色必然更淡'],
        correct: 2,
        explanation: '整串發酵的盲品線索：葡萄梗中的半纖維素（Hemicellulose）釋放特有的煙草、松木和鉛筆芯香氣；同時梗的酸鹼緩衝作用保護酸度；碳酸浸漬效應帶來更多果汁感。有經驗的品飲者（如 Jancis Robinson）能通過這些輔助特徵做出整串比例的大致推測，但非絕對。'
      },
      {
        type: 'single',
        question: '布根地「名莊效應（Domaine Effect）」在定價中的影響是？',
        options: ['A. 名莊效應不存在，定價完全依據等級', 'B. 相同地塊和等級，頂尖名莊的價格可以是一般莊主的 10-100 倍，反映了市場對「釀造者詮釋」附加價值的認可', 'C. 名莊效應只在特級園出現', 'D. 名莊效應在 2020 年後已消失'],
        correct: 1,
        explanation: '「名莊效應」是布根地定價最獨特的現象：Leroy 的 Bourgogne Rouge（大區等級）可能比普通酒莊的 Chambolle 村莊級貴 10 倍。這反映了兩種邏輯：1) 莊主的農耕和釀造技藝本身就是稀缺價值；2) 市場相信頂尖莊主能從任何地塊萃取超常品質——布根地風土是起點，莊主是最終決定因素。'
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
  ['advanced-m2.json', 'm2-l1'],
  ['advanced-m2.json', 'm2-l2'],
  ['advanced-m2.json', 'm2-l3'],
  ['advanced-m2.json', 'm2-l4'],
  ['advanced-m2.json', 'm2-l5'],
  ['advanced-m2.json', 'm2-l6'],
  ['advanced-m2.json', 'm2-l7'],
]

console.log('=== 布根地 L3 Quiz 注入 — M2 名莊解析 ===\n')
let ok = 0
for (const [file, lid] of pairs) {
  if (QUIZ_MAP[lid] && injectQuiz(file, lid, QUIZ_MAP[lid])) ok++
}
console.log(`\n完成：${ok}/${pairs.length} 已注入`)
