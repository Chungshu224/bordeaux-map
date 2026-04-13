/**
 * inject-bourgogne-l4-quiz-m5a.mjs
 * 布根地 L4 Quiz 注入 — M5 前半：商業案例與市場策略 m5-l1~l4
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.resolve(__dirname, '..', 'public/bourgogne/data/courses/level4')
const MARKER = '_inject_bourgogne_l4_quiz'

const QUIZ_MAP = {
  // m5-l1：布根地葡萄酒市場分析
  'm5-l1': {
    type: 'quiz', title: '🧠 布根地葡萄酒市場分析知識檢測',
    questions: [
      {
        type: 'single',
        question: '布根地精品葡萄酒市場的「供需結構（Supply-Demand Structure）」根本特徵是？',
        options: [
          'A. 供應量可以根據需求增加，無缺貨問題',
          'B. 「固定供應 vs. 無限需求（Fixed Supply vs. Infinite Demand）」的永久性失衡——布根地的頂尖地塊（特級園面積固定，如 Romanée-Conti 1.81 公頃、La Tâche 6 公頃）無法擴張；全球高淨值人口（HNWI）和亞洲新富階層的持續成長不斷推高需求；這個結構性供需失衡是布根地頂酒持續升值的根本驅動力，也是其市場定價脫離「品質-價格合理區間」的原因',
          'C. 布根地市場和其他農產品一樣，供需關係完全自由調節',
          'D. 布根地的需求在 2020 年後已飽和，不再成長'
        ],
        correct: 1,
        explanation: '布根地的「地理性稀缺（Geographic Scarcity）」是不可複製的競爭護城河：與波爾多（可在全球購地擴展品牌）或香檳（可在新地區種植）不同，「布根地特級園」的法律定義只能是那幾塊固定面積的地塊——DRC 無法通過增加產量來滿足額外需求（AOC 法規也有最大產量限制）。供需失衡的量化現實：DRC 全系列年均約 7,500-8,000 箱（6 瓶裝），分配給全球 72 個國家的進口商，每個市場每年可能僅獲得 20-50 箱——全球有數千個認真尋求 DRC 的買家，但物理上只有幾百個能買到，造成了「制度性稀缺（Institutional Scarcity）」的永久溢價基礎。'
      },
      {
        type: 'single',
        question: '「亞洲市場（尤其是中國大陸、香港、台灣、日本）」對布根地精品酒市場的影響是？',
        options: [
          'A. 亞洲市場對布根地沒有顯著影響',
          'B. 多維度深遠影響：① 需求側——亞洲買家（特別是中國大陸和香港）從 2010 年代起成為布根地頂酒的主要推動力之一，部分估計亞洲市場佔頂尖布根地全球需求的 30-40%；② 價格側——亞洲買家的高支付意願（DRC RC 在香港拍賣記錄曾達單瓶 NT$200 萬+）推動全球再銷售市場價格持續攀升；③ 分配側——主要進口商增加亞洲市場分配比例，使歐美傳統市場供應更加緊張',
          'C. 亞洲買家只購買波爾多，不關心布根地',
          'D. 亞洲市場的影響只是短暫的投資熱潮，已消退'
        ],
        correct: 1,
        explanation: '亞洲需求的「布根地市場重心轉移（Market Center of Gravity Shift）」：2000 年代以前，布根地頂酒的主要買家集中在美英法的傳統歐美市場；2010s 後，Burghound 數據和 Sotheby\'s 香港拍賣數據都確認了亞洲買家比例的快速上升。亞洲市場的特殊性在於：① 香港免關稅（2008 年取消葡萄酒關稅後成為亞洲最重要的精品葡萄酒交易中心）；② 亞洲高淨值人口（HNWI）的品味偏好已快速向「布根地精品」靠攏（傳統的波爾多壟斷亞洲高端市場的格局被打破）；③ 「禮品文化（Gift Culture）」——布根地頂酒在亞洲商務禮品場景的高適用性（稀缺性 + 國際頂級聲望 + 易攜帶）增加了消費層次。'
      },
      {
        type: 'multiple',
        question: '布根地葡萄酒市場的「主要分銷渠道（Distribution Channels）」包括？（多選）',
        options: [
          'A. 直接配額分配（En Primeur/Allocation System）——頂尖酒莊通過進口商/酒商的固定配額名單分配',
          'B. 二手拍賣市場（Secondary Auction Market）——Sotheby\'s、Acker、Hart Davis Hart 等',
          'C. 直接消費者銷售（Domaine Direct）——部分酒莊可在酒莊現場購買（但通常需要提前預約或有長期關係）',
          'D. 超市貨架（Supermarket Shelf）是頂尖布根地最重要的銷售渠道'
        ],
        correct: [0, 1, 2],
        explanation: '布根地精品分銷的「三層市場（Three-Tier Market）」結構（A/B/C 正確，D 不適用頂尖市場）：一級配額市場（A）——頂尖酒莊（DRC、Leroy、Rousseau）的配額由酒莊直接分配給其認可的進口商/酒商，進口商再分配給餐廳/零售商/收藏者，這是「原廠新年份（Primeur）」的唯一合法獲取渠道；二級拍賣市場（B）——老年份和無法通過一級渠道獲得的稀缺年份在此交易，2019 年世界葡萄酒拍賣總額的 30%+ 來自布根地（Liv-ex 數據）；莊主直銷（C）——雖然比例小（許多頂尖莊有自己的訪客品酒政策），但仍是「布根地人脈資產（Relationship Capital）」的重要表現；超市（D）只適用於低端布根地（Bourgogne Régionale 大量生產酒款），與精品市場運作方式無關。'
      },
      {
        type: 'single',
        question: '「Liv-ex 布根地 150 指數（Liv-ex Burgundy 150 Index）」追蹤的是什麼，有何市場意義？',
        options: [
          'A. 追蹤所有布根地葡萄酒的平均價格',
          'B. Liv-ex（London International Vintners Exchange）的 Burgundy 150 指數追蹤「150 款頂尖布根地在二手市場的再銷售價格表現」，是精品布根地市場健康度和投資回報的業界標準指標；近年的 Burgundy 150 年均漲幅持續超過 Fine Wine 100（含波爾多的更廣指數），使布根地被認為是目前全球回報率最高的精品酒投資類別之一',
          'C. Liv-ex 指數只供學術研究使用，無商業意義',
          'D. 布根地 150 指數表明布根地市場已過熱，投資回報為負'
        ],
        correct: 1,
        explanation: 'Liv-ex 指數的「市場信號（Market Signal）」功能：Liv-ex 是全球最重要的精品葡萄酒貿易平台，其指數（Fine Wine 100/Burgundy 150/Bordeaux 500 等）被業界廣泛引用作為市場趨勢指標。布根地 150 近年的強勁表現（2015-2023 年複合年均漲幅約 12-18%，取決於時間段和計算方法）使「布根地精品酒作為替代資產（Alternative Asset）」的討論在高淨值投資者圈中熱度持續升溫。投資視角的風險提示：精品酒市場不如股票市場流動（成交變現需要時間和成本）、需要儲存成本（酒窖/保險）、和存儲出處問題（Provenance Risk）——並非無風險的投資工具，但在通脹環境中作為「實物資產（Tangible Asset）」的保值功能被廣泛認可。'
      },
      {
        type: 'single',
        question: '布根地「新興生產者（Emerging Domaine）」進入市場的主要策略挑戰是？',
        options: [
          'A. 新進入布根地市場非常容易，沒有障礙',
          'B. 「聲譽積累時間成本（Reputation Accumulation Time Cost）」——布根地市場的進入壁壘不在於資本（購買地塊的成本雖高，但金融工具可支持），而在於「讓全球評論家和收藏者認識並信任新名字」需要 10-20 年的持續品質展示；新一代釀酒師（如 Thomas Morey、Arnaud Mortet）通常需要通過：① 與已知父輩名字的關聯（聲望傳遞）；② 強勢年份的品質爆發（如 2010 或 2015）引起評論家注意；③ 頂尖酒商（如 Becky Wasserman、KLWM）的背書',
          'C. 購買特級園地塊就自動獲得市場聲譽',
          'D. 新生產者可以通過大量廣告快速建立布根地品牌'
        ],
        correct: 1,
        explanation: '布根地品牌的「時間護城河（Time Moat）」：布根地市場的聲譽體系是「歷史展示積累型（History-Display Accumulation）」而非「資本密集型（Capital-Intensive）」——即使一個新進入者購買了 Chambertin 的一片 Grand Cru 地塊，也不能在第一個年份就賣到高價，因為「買家不知道這個名字」。聲譽建立的典型路徑案例：Domaine Ponsot 的 Rémi Ponsot 在 2017 年獨立後，initial 幾個年份在評論圈中備受關注但定價保守；Domaine Dujac 的 Jeremy Seysses 通過父親 Jacques Seysses 的聲望傳遞快速獲得市場接受度——「家族名字資本（Family Name Capital）」是布根地最有效的市場加速器。完全無名的新進入者（無家族背景、無著名酒商背書）通常需要 15-25 年才能進入「頂尖收藏者名單」。'
      }
    ]
  },

  // m5-l2：布根地酒商模式與négociant體系
  'm5-l2': {
    type: 'quiz', title: '🧠 布根地酒商模式與négociant體系知識檢測',
    questions: [
      {
        type: 'single',
        question: '布根地「Négociant（酒商）」模式的歷史起源和商業邏輯是？',
        options: [
          'A. Négociant 是現代才出現的商業模式',
          'B. 法國大革命後土地碎片化（教會/貴族土地被拍賣分散），小型農戶無力自行釀造和銷售，Négociant 模式應運而生——酒商收購多個小型農戶的葡萄（或已發酵的葡萄酒）進行調配和銷售，提供「規模化的市場接觸（Scaled Market Access）」和「品質穩定化（Quality Stabilization，通過多地塊調配）」；19-20 世紀的大型 Négociant（Bouchard Père & Fils、Louis Jadot、Joseph Drouhin）既擁有自有地塊又收購葡萄，形成了「Domaine + Négociant 混合（Merchant-Grower Hybrid）」模式',
          'C. Négociant 只負責運輸，不參與釀造',
          'D. 所有布根地酒商在革命後全部消失'
        ],
        correct: 1,
        explanation: 'Négociant 體系的「碎片化救濟（Fragmentation Relief）」歷史功能：布根地的土地碎片化（源於法國遺產法的強制均分繼承制），使現在一個特級園可能有 80+ 個共同持有者（最極端如 Clos Vougeot 的 83 位莊主）——個體農戶的地塊面積通常只有 0.2-2 公頃，年產量 600-5,000 瓶，無法支撐獨立行銷的成本，Négociant 的「聚合功能（Aggregation Function）」解決了這個結構性問題。現代大型 Négociant（Jadot、Drouhin）的「Domaine + Négociant」混合模式整合了兩者的優勢：自有地塊提供「頂尖酒款」，收購葡萄/酒液提供「銷量規模」，兩者共用品牌溢出效益（Halo Effect）。'
      },
      {
        type: 'single',
        question: '現代「精品微型酒商（Artisan Micro-Négociant）」模式（如 Frédéric Mugnier 早期、Benjamin Leroux）的興起原因是？',
        options: [
          'A. 傳統大型酒商倒閉造成市場空缺',
          'B. 「個性化風土表達需求（Personalized Terroir Expression Demand）」的興起——1990s 後全球精品市場越來越重視「生產者個性（Producer Personality）」和「地塊純粹性（Terroir Purity）」，傳統大型 Négociant 的「調配標準化（Blending Standardization）」模式被認為稀釋了地塊個性；微型酒商通過只收購「特定地塊的優質葡萄」並以獨特釀造哲學處理，提供「類 Domaine 的地塊純粹性 + Négociant 的資本靈活性（不需要自購土地）」的混合優勢',
          'C. 微型酒商模式的出現是出於攤低成本目的',
          'D. 法規要求新的布根地酒商必須是微型規模'
        ],
        correct: 1,
        explanation: '微型 Négociant 的「輕資產精品（Asset-Light Premium）」商業邏輯：傳統 Domaine 模式（自有土地）的資本壁壘在布根地極高（Gevrey Grand Cru 地塊每公頃 EUR 3,000,000-10,000,000+），使新一代釀酒師難以負擔自購土地；Négociant 模式讓他們以「收購合作合約（Supply Contract）」替代「土地資本（Land Capital）」，在不需要巨額土地投資的情況下接觸頂尖地塊的葡萄——Benjamin Leroux（前 Domaine Comte Armand 釀酒師）和 Frédéric Cossard 等成功案例証明，技術能力（釀造師聲譽）可以替代土地所有權作為「品質保證（Quality Guarantee）」的基礎，市場接受度非常高。'
      },
      {
        type: 'multiple',
        question: '評估一個布根地酒商的「品質可靠性（Quality Reliability）」時，關鍵評估維度包括？（多選）',
        options: [
          'A. 自有地塊比例（Domaine Portion）——自有地塊酒款通常比收購葡萄酒款品質更穩定可控',
          'B. 收購葡萄的地塊來源品質（Source Vineyard Quality）——是否有長期穩定的頂尖地塊供應合約',
          'C. 釀造哲學一致性（Philosophy Consistency）——是否有清晰的低干預/高干預立場並持續執行',
          'D. 酒標設計的美觀程度'
        ],
        correct: [0, 1, 2],
        explanation: '酒商品質評估的「三維框架」（A/B/C 正確，D 表面指標）：自有地塊比例（A）——Louis Jadot 的「Héritiers Louis Jadot」自有地塊系列（如 Chambertin Clos de Bèze 自有）品質一致性遠高於其收購葡萄的一般 Négociant 系列；地塊來源（B）——Benjamin Leroux 通過與某些布根地知名地塊的長期供應合約（如 Corton Charlemagne 的特定農戶），確保了原料品質的高度一致；哲學一致性（C）——酒商的「哲學執行一致性」決定了「好年份最佳品質」和「差年份是否仍維持水準」的差距——Domaine des Comtes Lafon 轉型 Négociant 部分（Héritiers du Comte Lafon）時，仍保持其低干預哲學，被業界廣泛評為維持了與 Domaine 同等水準的 Négociant 模式。'
      },
      {
        type: 'single',
        question: '「Becky Wasserman」和「KLWM（Kermit Lynch Wine Merchant）」在布根地市場的角色是？',
        options: [
          'A. 兩者是布根地的生產者，自己釀造葡萄酒',
          'B. 兩者是精品布根地的「選酒商/進口商（Négociant-Sélectionneur/Importer）」——Becky Wasserman 的 Becky Wasserman Selection（後為 Le Serbet）以「發現未被注意的布根地小農（Discovery of Undiscovered Domaines）」著稱，長期代理多個後來成為頂尖的布根地小農（如 Domaine Dujac 的早期代理）；Kermit Lynch 以引進自然農法/低干預生產者著稱，其選品哲學對美國市場的「自然酒（Natural Wine）」方向有重大影響——這兩者都屬於「策劃型進口商（Curatorial Importer）」，其選品眼光本身就是市場信號',
          'C. 兩者只是普通零售商，無市場影響力',
          'D. Becky Wasserman 是 DRC 的獨家進口商'
        ],
        correct: 1,
        explanation: '「策劃型進口商（Curatorial Importer）」的市場放大器效應：在布根地的複雜生態中，進口商不只是「運輸商（Logistics Provider）」——頂尖進口商的「選品眼光（Curation Judgment）」本身構成了「品質信號（Quality Signal）」。Becky Wasserman（現已退休，事業傳承給 Bill Nanson）發掘/推廣了多個後來成為布根地頂尖的小農莊；Kermit Lynch 的哲學性選品（只代理農業哲學上認可的自然農法生產者）形成了獨特的品牌一致性，使「KLWM 代理」本身就是消費者信任的品質標籤。台灣和亞洲市場也有類似的「策劃型進口商」角色——這些人的網絡和判斷力是布根地知識在亞洲市場傳播的重要媒介。'
      },
      {
        type: 'single',
        question: '「En Primeur（期酒）」制度在布根地的應用現狀和波爾多的差異是？',
        options: [
          'A. 布根地和波爾多的 En Primeur 制度完全相同',
          'B. 布根地幾乎不存在正式的 En Primeur 制度（不同於波爾多的固定體系）——布根地偶有「Primeur-style」的提前配額分配，但多數頂尖布根地以「已裝瓶年份（Bottled Vintage）」形式分配；部分小型精品酒莊會以私下關係向長期客戶預售未裝瓶的年份，但這不是公開標準化的期酒市場；主要差異：波爾多 En Primeur 是有組織的業界系統（Union des Grands Crus）有固定的品酒週和定價流程，布根地則以「關係型分配（Relationship-Based Allocation）」為主',
          'C. 布根地的 En Primeur 比波爾多更活躍',
          'D. 頂尖布根地全部通過 En Primeur 銷售，與波爾多相同'
        ],
        correct: 1,
        explanation: '布根地 vs. 波爾多分配制度的根本差異：波爾多 En Primeur 的設計源於酒莊需要「提前獲得現金流（Early Cash Flow）」和「提前鎖定市場（Price Locking）」——在高度組織化的 Négoce（波爾多酒商系統）支持下，每年 4 月（採收後約 6 個月）的品酒週有全球數百位買家和評論家出席，形成了全球最大的精品酒期貨市場。布根地的「關係型分配」反映了完全不同的權力結構——布根地頂尖酒莊（DRC）在需求遠超供應的情況下沒有「提前賣出鎖定現金流」的財務壓力，反而是買家（進口商）需要維護關係才能獲得分配資格，使布根地的分配制度是「賣方市場（Seller\'s Market）」的極端表現。'
      }
    ]
  },

  // m5-l3：布根地品牌策略與定位
  'm5-l3': {
    type: 'quiz', title: '🧠 布根地品牌策略與定位知識檢測',
    questions: [
      {
        type: 'single',
        question: '「DRC（Domaine de la Romanée-Conti）」品牌策略的核心競爭優勢是？',
        options: [
          'A. DRC 的優勢主要來自大量廣告投入',
          'B. 「多層次不可替代稀缺性（Multi-Layer Irreplaceable Scarcity）」——① 土地稀缺：壟佔 Grand Cru 地塊（RC、La Tâche 均為 Monopole）；② 品質稀缺：200 年以上的最高品質記錄（無可爭辯的歷史 track record）；③ 哲學稀缺：生物動力農耕的先驅（Biodynamic Pioneer），馬耕保護土壤不壓實（Horse Plowing）的堅持；④ 供應稀缺：每年僅 7,500 箱，全球分配；⑤ 文化稀缺：作為「葡萄酒天花板（Wine Pinnacle）」的全球文化共識——這五層稀缺性的疊加使 DRC 的品牌溢價遠超任何行銷投資可以達到的水準',
          'C. DRC 是最大量生產的布根地酒莊',
          'D. DRC 的競爭優勢主要來自現代釀造技術'
        ],
        correct: 1,
        explanation: 'DRC 的「稀缺性工程（Scarcity Engineering）」：品牌管理學的稀缺原則告訴我們，「感知稀缺（Perceived Scarcity）」是奢侈品定價的核心競爭力。DRC 的 5 層稀缺完美對應了奢侈品學者 Kapferer 的「奢侈品稀缺三角（Luxury Scarcity Triangle）」——自然稀缺（土地面積有限）、知識稀缺（200 年不間斷的最高水準）、技術稀缺（生物動力 + 馬耕的獨特堅持）。DRC 幾乎從不做傳統廣告（幾乎禁止大眾媒體報導）——這個「主動的神秘感管理（Mystique Management）」策略，使其品牌知名度完全依賴「口耳相傳（Word of Mouth）+ 評論家背書（Critic Endorsement）+ 稀缺性本身的吸引力」，是最極端的「精品市場神秘品牌（Mystery Brand）」案例。'
      },
      {
        type: 'single',
        question: '「Domaine Leroy（勒洛瓦酒莊）」的品牌重建策略（Lalou Bize-Leroy 創建獨立 Domaine 後）代表了什麼？',
        options: [
          'A. Leroy 只是通過購買貴地塊建立品牌，策略簡單',
          'B. 「哲學驅動的差異化品牌（Philosophy-Driven Differentiation Brand）」——Lalou Bize-Leroy 在 1988 年創建 Domaine Leroy 後，以「生物動力農法的極致實踐（每公頃產量極低，約 1.5-2 噸 vs. 普通 3-4 噸）+ 最老樹齡老藤（平均樹齡 50 年+）+ 完全反對灌溉」的哲學主張作為品牌核心；品質積累的速度讓業界震驚（10 年內 Domaine Leroy 與 DRC 並列為布根地雙峰），证明了「哲學一致性（Philosophy Consistency）」可以加速聲譽積累',
          'C. Domaine Leroy 從創立就缺乏市場認可',
          'D. Leroy 的策略是仿照 DRC 的每個決策'
        ],
        correct: 1,
        explanation: 'Leroy 品牌建立速度的「哲學加速度（Philosophy Acceleration）」：傳統上沒有家族名字歷史的新布根地 Domaine 通常需要 20-30 年積累聲譽；Lalou Bize-Leroy（本人已是 Maison Leroy 的知名人物）通過「極端哲學堅持（Extreme Philosophy Commitment）」——極低產量（確保濃縮度）、全生物動力（吸引哲學型消費者）、嚴苛勞作（每季手工修剪、草本配方噴灑）——讓前幾個年份就通過品質評分（Parker、Burghound 的滿分評價）引發業界關注，完成了常規 30 年才能完成的聲譽建設，成為「哲學驅動品牌建立速度」的教科書案例。'
      },
      {
        type: 'multiple',
        question: '布根地葡萄酒的「品牌層次結構（Brand Hierarchy）」包括？（多選）',
        options: [
          'A. 地區品牌（Regional Brand）：「布根地（Burgundy/Bourgogne）」作為整體產區品牌',
          'B. 村莊品牌（Village Brand）：如 Gevrey-Chambertin、Chambolle-Musigny 作為村莊級聲譽資產',
          'C. 地塊品牌（Vineyard Brand）：如 Chambertin、Musigny 作為單一地塊品牌',
          'D. 生產者品牌（Producer Brand）：如 DRC、Rousseau 作為酒莊個人品牌'
        ],
        correct: [0, 1, 2, 3],
        explanation: '布根地品牌層次的「四層疊加（Four-Layer Stacking）」效應（全部正確）：布根地精品市場的獨特性在於品牌價值在四個層次同時運作且相互強化——地區品牌（A，如 Bourgogne AOC 的國際知名度）為所有布根地產品提供了基礎的可信度框架；村莊品牌（B，如 Vosne-Romanée = 優雅精緻的代名詞）在地區框架內提供了更細化的品質信號；地塊品牌（C，如 Chambertin = 個性有力的歷史特級）是布根地獨特的「產地命名品牌（Terroir Name Brand）」，其市場價值完全獨立於生產者而存在；生產者品牌（D，如 DRC = 極致奢華的全球共識）是個人聲譽資產的積累，可以讓同一地塊的酒以高出平均數倍的價格銷售。頂尖布根地酒款（如 DRC 的 Chambertin）同時享受這四層品牌加成，是全球最密集的「品牌堆疊（Brand Stacking）」案例。'
      },
      {
        type: 'single',
        question: '布根地酒莊面對「假酒（Counterfeit Wine）」問題時，品牌保護的主要策略是？',
        options: [
          'A. 降低頂尖酒款的定價，使假酒無利可圖',
          'B. 多層次防偽策略：① 物理防偽——複雜的蠟封設計（DRC 的獨特蠟封質感）、獨特的酒標版式（序列號/批次碼）；② 數位追蹤——部分頂尖酒莊開始使用 QR Code + 區塊鏈（Blockchain）技術追蹤每瓶酒的流通鏈；③ 法律行動——積極追究已知假酒案件（如 DRC 在全球多地的法律行動）；④ 買家教育——通過 Négociant 和進口商的教育計劃，提升消費者識別真假的能力',
          'C. 公開否認假酒問題存在，通知媒體',
          'D. 只要有假酒，布根地頂酒的市場就會崩潰'
        ],
        correct: 1,
        explanation: '「Rudy Kurniawan 案（2013）」對布根地品牌保護的啟示：Rudy Kurniawan 因偽造 DRC / Ponsot 等頂尖布根地被定罪，成為葡萄酒史上最著名的假酒醜聞之一，估計偽造金額超過 1 億美元。這個案件推動了整個業界對防偽技術的重視：DRC 在 2013 年後改進了蠟封可辨識細節；多個生產者開始使用激光蝕刻序列號（Laser-Etched Serial Numbers）；區塊鏈（Blockchain）溯源技術（如 Everledger 等公司的「葡萄酒 NFT 認證」概念）在 2020s 後逐漸進入討論；Burghound 等評論平台也提供了「如何識別真假酒标（Authenticity Guide）」作為買家教育工具。假酒問題是布根地高價市場的永久性風險，但目前對市場整體信任度的衝擊相對可控。'
      },
      {
        type: 'single',
        question: '「DRC 配套銷售（Portfolio Allocation）」制度對買家意味著什麼？',
        options: [
          'A. 買家可以自由選擇只購買 DRC 最貴的羅曼尼康帝',
          'B. 「強制配套（Forced Portfolio Purchase）」——DRC 要求進口商/買家必須購買「整個系列（Full Portfolio）」的配額，包括大量相對較便宜但仍需清貨的酒款（如 Echezeaux、Bourgogne 預設配額），才能獲得少量頂尖 RC 的配額；這個制度確保了 DRC 全系列的銷售速度，但也讓買家增加了整體采購成本——從商業策略角度是「捆綁銷售（Bundled Sales）」的極致版，由賣方主導的超強需求使賣方可以設計如此有利於自己的分配條款',
          'C. DRC 的所有酒款等量分配給所有買家',
          'D. 買家隨時可取消配額合約，沒有任何義務'
        ],
        correct: 1,
        explanation: 'DRC 的「配套銷售」是賣方市場的極端體現：在正常商業邏輯中，「強制捆綁銷售（Tying Arrangement）」在許多市場可能觸發反壟斷法；但在超強賣方市場（Seller\'s Market，如 DRC）中，買方別無選擇只能接受——全世界有數千個進口商/收藏者希望代理/購買 DRC，供應只有 75 個全球進口商，使 DRC 有完全的「市場議價權（Pricing Power）」。配套銷售的商業效果：① DRC 全系列（包括較易生產的 Bourgogne）的庫存都不積壓；② 平均每箱 RC 附帶的配套酒款毛利，實際上補貼了 RC 本身的生產成本（哲學上低產量的財務壓力被配套銷售分攤）；③ 進口商為了「RC 配額資格」會更積極維護整個 DRC 系列的銷售業績，形成了自我強化的忠誠度錨定。'
      }
    ]
  },

  // m5-l4：定價策略與消費者心理
  'm5-l4': {
    type: 'quiz', title: '🧠 定價策略與消費者心理知識檢測',
    questions: [
      {
        type: 'single',
        question: '布根地頂尖酒款定價的「心理錨定（Price Anchoring）」效應如何影響市場？',
        options: [
          'A. 定價對消費者購買決策沒有心理影響',
          'B. 「錨定效應（Anchoring Effect，Tversky & Kahneman）」在精品酒市場極強——DRC RC 的歷史最高成交價（如 2018 年蘇富比 NT$ 數百萬單瓶）成為整個頂尖布根地市場的「心理錨（Price Anchor）」，使其下方的「相對便宜」選項（如 DRC 其他地塊、或 Leroy 特級園）顯得「合理」甚至「便宜」；這個錨定層次向下傳遞，使整個布根地市場的消費者支付意願系統性上移',
          'C. 定價越高，布根地的銷量越低',
          'D. 只有第一次購買的消費者受到錨定效應影響'
        ],
        correct: 1,
        explanation: '錨定效應的「市場系統性作用（Systemic Market Effect）」：DRC RC 的異常高價不只是一個孤立的「異常值（Outlier）」，而是整個頂尖布根地市場的「校準錨（Calibration Anchor）」——Tversky & Kahneman 的研究確認，人的數字判斷會被「第一個聽到的數字（First Number Encountered）」嚴重影響，即使這個數字是隨機的。在布根地市場，「RC = NT$200 萬」的心理錨使「Chambertin = NT$15,000」顯得「相對合理」（與錨相比），使「Gevrey-Chambertin Premier Cru = NT$5,000」顯得「划算」——這個錨點的存在系統性地提升了整條「布根地品質光譜」的消費者支付意願，是頂尖酒款異常高價的「積極外部性（Positive Externality）」對整個產區市場的貢獻。'
      },
      {
        type: 'single',
        question: '「凡勃倫財（Veblen Good）」理論如何解釋部分布根地頂酒的市場行為？',
        options: [
          'A. 布根地屬於正常財，價格上漲則需求下降',
          'B. 「凡勃倫財（Veblen Good）」是價格越高需求反而越大的特殊商品——部分頂尖布根地（特別是 DRC 系列）表現出典型的凡勃倫財特性：漲價不會使需求下降，因為「高價本身就是購買動機（Conspicuous Consumption，炫耀性消費）」的一部分；對於以「擁有昂貴布根地（Status Signaling）」為購買動機的買家，降價反而會損害品牌吸引力（「如果都買得到，還有什麼特別？」）',
          'C. 所有布根地都是凡勃倫財',
          'D. 凡勃倫理論不適用於食品類商品'
        ],
        correct: 1,
        explanation: '布根地作為「凡勃倫財+地位象徵（Veblen Good + Status Symbol）」的雙重角色：Thorstein Veblen（1899）提出炫耀性消費理論，指出高收入群體的部分消費行為以「展示財富（Conspicuous Consumption）」為目的，此類商品的需求曲線向右上傾斜（價格越高越有人買）。布根地頂酒滿足凡勃倫財的三個條件：① 可見的高定價（社群上的開瓶照/招待客人時展示酒標）；② 廣泛市場知名度（「DRC」在高端社交圈是文化共識）；③ 供應無法彈性擴張（稀缺確保「不是人人都有」）。需要注意的區分：凡勃倫財效應主要在「終端消費者（End Consumer）」層面運作，而在「嚴肅收藏家（Serious Collector）」群中，品質驅動的購買邏輯（Quality-Driven Purchasing）仍是主導，但兩個動機可以並存於同一買家。'
      },
      {
        type: 'multiple',
        question: '精品布根地酒商在向客戶推薦時，常用的「認知偏差（Cognitive Bias）利用」技術包括？（多選）',
        options: [
          'A. 「稀缺性訴求（Scarcity Appeal）」——「這個年份全球只有 200 箱，我手上只剩 3 瓶」',
          'B. 「社會認同（Social Proof）」——「這款酒被 Parker 評 97 分，被 10 個頂尖收藏家競相購入」',
          'C. 「框架效應（Framing Effect）」——說「每天只需 NT$300（=每瓶 NT$9,000 分 30 天飲用）」而非「一瓶要 NT$9,000」',
          'D. 所有銷售溝通應完全客觀，避免任何心理影響'
        ],
        correct: [0, 1, 2],
        explanation: '精品銷售的「消費者行為工具箱（Consumer Behavior Toolkit）」（A/B/C 均為真實常用技術，D 烏托邦假設）：稀缺訴求（A）——Brehm 的「心理阻抗理論（Psychological Reactance Theory）」和 Cialdini 的「稀缺原則（Scarcity Principle）」確認「有限供應時間壓力」顯著提升購買意願，頂尖布根地的真實稀缺使這個技術有「事實支撐」而非虛假廣告；社會認同（B）——高分評論者（Parker/Meadows）的評分分享是「權威認可（Authority Endorsement）+ 社群認同（Social Proof）」的雙重偏差利用；框架效應（C）——Kahneman 的框架效應研究確認「相同金額的不同呈現方式」對消費者支付意願有 20-40% 的差異，「分攤每日成本（Daily Cost Framing）」是奢侈品銷售中廣泛使用的說服技術。注意：使用這些技術時需在事實範圍內（不虛假稀缺、不偽造評分），以維護職業誠信。'
      },
      {
        type: 'single',
        question: '為什麼「盲品中高價布根地的評分並不總是高於低價布根地」，但市場定價差異仍然巨大？',
        options: [
          'A. 因為所有盲品都是虛假的',
          'B. 「雙重價值（Dual Value）」框架——精品布根地的市場價值由「感官品質（Sensory Quality，盲品評分代表）」和「非感官象徵價值（Non-Sensory Symbolic Value，稀缺性/地塊故事/聲譽/投資屬性）」兩部分構成；盲品只能評估前者，而市場定價包含兩者；因此「盲品分數相近但市場价格相差 10 倍」的現象是完全正常的——消費者為「稀缺性/故事/身份認同」支付的是「非感官溢價（Non-Sensory Premium）」',
          'C. 說明頂尖布根地的高價完全是市場欺詐',
          'D. 盲品分數和市場定價之間有直接的線性關係'
        ],
        correct: 1,
        explanation: '「感官品質 vs. 符號價值（Sensory Quality vs. Symbolic Value）」的奢侈品定價分析：著名的「巴黎評判（Judgment of Paris, 1976）」中，加州酒在盲品中擊敗布根地/波爾多頂尖酒，但這個結果絲毫未影響布根地的市場定價——因為布根地的溢價主要來自「非感官符號價值」（法國傳統/AOC 法律框架/地塊歷史/稀缺性），這些在盲品中完全消失。Plassmann 等神經科學研究（2008）甚至確認，告知受試者「這瓶酒更貴」時，大腦的獎賞區域（Medial Orbitofrontal Cortex）活動增加——意味著「知道自己在喝貴酒」本身就提升了主觀享樂感知（即非盲品環境下，貴酒確實「喝起來更好」，這是「知識效應（Knowledge Effect）」而非純感官）。'
      },
      {
        type: 'single',
        question: '布根地生產者在面對「定價提升（Price Increase）」決策時，應考慮的關鍵因素是？',
        options: [
          'A. 只要品質沒變就隨時漲價',
          'B. 多維評估框架：① 市場接受度（Market Acceptance Rate）——分配名單的長度（等待名單越長，漲價空間越大）；② 配置關係維護（Allocation Relationship）——過快漲價會損害長期合作進口商的利潤，影響關係穩定性；③ 參考基準（Reference Price）——與同等地塊/聲譽的競爭性生產者比較（Benchmark Comparison）；④ 長期品牌定位（Long-Term Positioning）——是否希望進入「頂尖收藏家而非餐廳常客」的市場分層（不同定位要求不同定價層次）',
          'C. 定價越高永遠越好',
          'D. 布根地 AOC 法規統一規定了所有酒款定價'
        ],
        correct: 1,
        explanation: '布根地定價的「生態系統思維（Ecosystem Thinking）」：孤立的「漲價決策（Isolated Price Increase Decision）」可能損害整個生態系統的平衡——Domaine Hubert Lignier 等曾有品質提升後快速漲價導致長期合作進口商（尤其是英美中小型精品進口商）因利潤空間壓縮而降低推廣力度的案例，最終影響了市場覆蓋廣度；相比之下，DRC 的每年小幅穩定漲價（Annual Incremental Increase，通常 5-15%）讓進口商可以預測和接受，同時維護了長期夥伴關係。「分配名單長度（Allocation Waitlist Length）」是最客觀的「市場可接受定價信號」——當等待名單超過 3-5 年，意味著當前定價低於市場出清價，有明確的漲價空間；當等待名單消失，意味着定價已接近或超過市場接受上限。'
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
  ['master-m5.json', 'm5-l1'],
  ['master-m5.json', 'm5-l2'],
  ['master-m5.json', 'm5-l3'],
  ['master-m5.json', 'm5-l4'],
]

console.log('=== 布根地 L4 Quiz 注入 — M5 前半：商業案例與市場策略 ===\n')
let ok = 0
for (const [file, lid] of pairs) {
  if (QUIZ_MAP[lid] && injectQuiz(file, lid, QUIZ_MAP[lid])) ok++
}
console.log(`\n完成：${ok}/${pairs.length} 已注入`)
