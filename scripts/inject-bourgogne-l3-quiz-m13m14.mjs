/**
 * inject-bourgogne-l3-quiz-m13m14.mjs
 * 布根地 L3 Quiz 注入 — M13：拍賣行（4 lessons）+ M14：品鑑術語（4 lessons）
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.resolve(__dirname, '..', 'public/bourgogne/data/courses/level3')
const MARKER = '_inject_bourgogne_l3_quiz'

const QUIZ_MAP = {
  // ── M13 拍賣行 ──────────────────────────────────────────
  'm13-l1': {
    type: 'quiz', title: '🧠 主要拍賣機構介紹知識檢測',
    questions: [
      {
        type: 'single',
        question: 'Sotheby\'s Wine 部門的歷史地位和布根地拍賣的重要性是？',
        options: ['A. Sotheby\'s 是新成立的拍賣機構', 'B. Sotheby\'s Wine 是全球最古老的葡萄酒拍賣平台之一（1970 年成立專門部門），其布根地老年份拍賣記錄（特別是 DRC 系列）通常成為全球媒體關注焦點，也是布根地二級市場價格參考的重要基準', 'C. Sotheby\'s 只拍賣波爾多', 'D. Sotheby\'s Wine 不接受個人藏家委托'],
        correct: 1,
        explanation: 'Sotheby\'s Wine 的布根地角色：1970 年代 Michael Broadbent（後為 Christie\'s 首席品酒師）和 Sotheby\'s 的 Patrick Grubb 共同建立了倫敦葡萄酒拍賣市場。Sotheby\'s Wine 的年度主要拍賣（New York, London, Hong Kong）中，DRC/Leroy/DRC 系列的拍賣結果是次年布根地市場定價的重要參考——頂尖酒款的「拍賣天花板」設定了二手市場的心理錨點，影響私下交易的議價基礎。'
      },
      {
        type: 'single',
        question: 'Acker Merrall & Condit（AMC）在布根地拍賣市場的特殊聲名來自？',
        options: ['A. AMC 是最便宜的拍賣行', 'B. AMC 多次創下 DRC 系列的世界拍賣天價記錄，被業界稱為「布根地拍賣之王」，特別在 2000 年代的亞洲（香港/紐約）市場高峰期以單場數千萬美元的布根地拍賣場創造歷史', 'C. AMC 主要拍賣波爾多', 'D. AMC 是政府管理的拍賣機構'],
        correct: 1,
        explanation: 'AMC 的布根地傳奇：AMC（Acker Merrall & Condit，紐約，創立 1820 年）在 2000-2015 年的布根地投資熱潮中，幾乎壟斷了最稀缺布根地的拍賣主導地位——多個 DRC 單場創記錄拍賣均由 AMC 主辦；其拍賣目錄中的名單（DRC RC 垂直、Leroy Grand Cru 大組合）至今仍是布根地拍賣的標誌性視覺符號。同時，AMC 也是 Rudy Kurniawan 假酒事件的「受害拍賣行」之一，Kurniawan 通過 AMC 拍出了大量偽造布根地老年份。'
      },
      {
        type: 'multiple',
        question: '亞洲（特別是香港）成為頂尖布根地拍賣重鎮的原因包括？（多選）',
        options: ['A. 香港無進口葡萄酒稅（2008 年取消）', 'B. 香港無資本利得稅，葡萄酒投資在港受稅法優惠', 'C. 香港距離法國最近', 'D. 亞洲高淨值人士（HNWI）對稀缺奢侈品的強烈需求和收藏文化（特別是中國大陸买家）'],
        correct: [0, 1, 3],
        explanation: '香港葡萄酒拍賣中心的結構性優勢：2008 年香港取消葡萄酒進口關稅（從 40% 降至 0%）是關鍵觸發點——Sotheby\'s、Christie\'s、Zachys 等迅速在香港設立亞太區拍賣；無資本利得稅（B）使香港成為葡萄酒投資存倉的稅務最優地；亞洲（特別是中國大陸）購買力（D）的爆發性增長在 2010-2022 年支撐了香港拍賣的創紀錄成交額。香港和法國的地理距離（C）不是優勢因素——反而是運輸成本，冷鏈保障是香港拍賣行的重要後台流程。'
      },
      {
        type: 'single',
        question: '「在線葡萄酒拍賣（Online Wine Auction）」平台相比實體拍賣行的優缺點是？',
        options: ['A. 在線拍賣絕對優於實體拍賣', 'B. 優點：更低手續費（通常 5-15% vs. 傳統 15-25%）、更廣泛的買家群（全球競標）、便利性；缺點：難以進行實體鑑定（較高的假貨風險）、部分稀缺頂尖布根地的最高出價者仍集中在實體拍賣的大戶買家中（社交資本差異）', 'C. 在線拍賣完全無假貨風險', 'D. 在線拍賣只有缺點'],
        correct: 1,
        explanation: '在線 vs. 實體拍賣的生態比較：代表性在線平台（WineBid、Uvinum、Lot18、Acker 在線）以低手續費和全球覆蓋吸引了更廣泛的入門和中端市場；但頂尖布根地（DRC/Leroy）的最高成交價仍集中在 Sotheby\'s/Christie\'s 的重要實體拍賣中，因為：1) 競標「稀缺感」（Auction Theater）在實體場合更強烈激發競爭；2) 頂尖收藏家通常偏好在有社交見證的場合完成歷史性交易；3) 重要機構買家（博物館、頂尖私人藏家）的到場率高。兩種平台各有生態位。'
      },
      {
        type: 'single',
        question: '拍賣行如何處理「有爭議的 Provenance（來源鑑定存疑）」的拍品？',
        options: ['A. 直接上拍，不告知買家', 'B. 主要拍賣行（Sotheby\'s、Christie\'s）有標準的「Provenance 標注規範」——若 Provenance 無法完全確認，必須在拍賣目錄中注明（如「Provenance: Private Cellar, Unknown Origin Prior to 1995」），買家自行評估風險；高度存疑的拍品可能被拒絕上拍', 'C. 拍賣行對 Provenance 不負任何責任', 'D. 任何 Provenance 問題都會被隱瞞'],
        correct: 1,
        explanation: '拍賣行 Provenance 標注的業界標準：一流拍賣行（Sotheby\'s、Christie\'s、Hart Davis Hart）的聲譽建立在「誠實的來源披露」上——若 Provenance 文件不完整，必須在目錄中如實標注；詢問來源並記錄（Due Diligence）是拍賣行的法律和聲譽義務。Rudy Kurniawan 案後，業界加強了：1) 對大量稀缺老年份集中出現時的「異常供應量警覺」；2) 標籤紙張/印刷年代的化學鑑定；3) 要求更完整的初始購買記錄。'
      }
    ]
  },

  'm13-l2': {
    type: 'quiz', title: '🧠 拍賣流程與競標機制知識檢測',
    questions: [
      {
        type: 'single',
        question: '「Book Bid（預委托競標，又稱 Absentee Bid）」機制在葡萄酒拍賣中如何運作？',
        options: ['A. Book Bid 只允許實體競標者使用', 'B. 在無法到場的情況下，競標者向拍賣行預先提交「最高願意出價」；競標師（Auctioneer）在到場競標者的出價超過 Book Bid 上限前代表預委托者出價，若場上無人超過，預委托者以「恰好超過最後場上出價」的金額得標（不以全額預定金得標）', 'C. Book Bid 必須以預委托上限價格成交', 'D. Book Bid 不被頂尖拍賣行接受'],
        correct: 1,
        explanation: 'Book Bid 機制的智慧：這個機制保護了預委托者的利益——若你預委托 $5,000，而現場競標在 $3,200 停下，你以 $3,300 得標（而非 $5,000）。拍賣行通常會在競標師的「代出價」時以每次固定增量（通常 100-200 美元）代為出價，直到現場競標停止或達到你的上限。電話競標（Telephone Bid）是另一個常見形式，由拍賣行員工電話實時連接，在現場代表你報價。在線即時出價（Live Online Bidding）是最現代的非到場競標形式。'
      },
      {
        type: 'single',
        question: '「保留價（Reserve Price）」和「起拍價（Opening Bid）」的關係是？',
        options: ['A. 兩者完全相同', 'B. 保留價是賣家設定的「最低可接受成交價」（拍賣行對買家保密）；起拍價是拍賣師宣布的開始競標價（通常設在估價下限的 60-80%，低於保留價以吸引競標）；若競標最終沒有超過保留價，拍品「流拍（Passed/Buy-In）」，不成交', 'C. 保留價是公開資訊', 'D. 起拍價永遠等於估價'],
        correct: 1,
        explanation: '拍賣定價三層架構：1) 保留價（Reserve）：賣家底線（保密），確保不以不接受的低价出售；2) 估價（Pre-Sale Estimate, Low/High）：公開的市場參考區間（由拍賣行評估師設定），指示市場的合理成交預期；3) 起拍價（Opening Bid）：競標師宣布的起始喊價，通常設在估價下限的 50-80%，低起拍價創造活躍競標氛圍。三者關係：起拍價 < 保留價 ≤ 估價下限（通常情況）。'
      },
      {
        type: 'multiple',
        question: '成功的布根地拍賣競標策略包括？（多選）',
        options: ['A. 競標前研究近期同款成交記錄（Wine-Searcher、Liv-ex）設定心理上限', 'B. 不讓競爭博弈心理（「一定要贏」）超越預算限制', 'C. 每場拍賣都以最高標出價確保得標', 'D. 了解拍賣行的手續費結構，計算「總成本（落槌價 + 手續費）」而非只考慮落槌價'],
        correct: [0, 1, 3],
        explanation: '理性競標的三原則：事前功課（A）——沒有基於市場數據的「心理公平價值上限」，容易在拍賣激情中超付；預算紀律（B）——「拍賣激情（Auction Fever）」是行為經濟學中有據可查的非理性現象，設定硬限制並遵守是最重要的自我保護；總成本意識（D）——以落槌價 $10,000 成交，加 20% 手續費實際支出 $12,000，若心中「公平價」只是 $10,000，手續費 = 超付 20% 的成本，應納入上限設定。「永遠出最高價」（C）是財務災難的路徑，缺乏任何策略邏輯。'
      },
      {
        type: 'single',
        question: '「拍賣後糾紛（Post-Auction Dispute）」最常見的原因和解決方式是？',
        options: ['A. 拍賣後糾紛不可能發生', 'B. 最常見原因：酒款收到後與目錄描述不符（標籤損壞程度超描述、液位不如宣傳）或事後發現偽品；解決：首先聯繫拍賣行提出書面申訴（附照片記錄），拍賣行有責任調查；若確認是偽品，通常全額退款（有時效限制）；若只是「狀況比預期差」，協商賠償', 'C. 拍賣後糾紛只能通過訴訟解決', 'D. 拍賣行對任何後拍賣問題不負責'],
        correct: 1,
        explanation: '後拍賣保護機制：主要拍賣行都有「條件不符退款政策（Condition Not as Described Policy）」——買家在收到拍品後有 7-30 天的查驗期（各行政策不同）；若實際狀況和目錄描述（標籤等級、液位）有重大差異，可申請部分或全額退款。偽品退款時效通常更長（部分行提供 7 年）因為鑑定需要時間。記錄整個「收到→開箱→檢查」過程（照片/錄影）是保護自身在糾紛中舉證能力的重要自保行為。'
      }
    ]
  },

  'm13-l3': {
    type: 'quiz', title: '🧠 葡萄酒價格評估方法知識檢測',
    questions: [
      {
        type: 'single',
        question: '「Liv-ex（London International Vintners Exchange）」作為布根地價格參考的特殊地位是？',
        options: ['A. Liv-ex 是零售商平台', 'B. Liv-ex 是全球唯一的「精品葡萄酒二級市場可追溯成交記錄平台」——只有業務符合標準的貿易商可以在此交易，所有成交記錄可查，提供「指數化、可審計」的市場價格信息，是葡萄酒基金和機構投資者使用的核心定價工具', 'C. Liv-ex 只交易波爾多', 'D. Liv-ex 是消費者直接購買平台'],
        correct: 1,
        explanation: 'Liv-ex 的機構投資基礎設施角色：成立於 1999 年（倫敦），Liv-ex 解決了葡萄酒二級市場最大的「不透明性」問題——在此之前沒有可靠的「成交價格記錄」（只有報價），使得任何人無法準確評估葡萄酒投資的真實回報。Liv-ex 的主要指數（Fine Wine 50/100/Burgundy 150）已成為業界比較精品葡萄酒表現的標準工具，類似股市中的 S&P 500 作為大盤參考。其「Burgundy 150」指數包括 150 個頂尖布根地交易記錄，是追蹤布根地市場動向的最精確工具。'
      },
      {
        type: 'single',
        question: '「Wine-Searcher（酒款搜尋）」和 Liv-ex 作為定價工具的根本差異是？',
        options: ['A. 兩者完全相同', 'B. Wine-Searcher：聚合全球零售商的「掛牌價（List Price/Asking Price）」——是市場願意賣出的價格，不代表真實成交；Liv-ex：記錄真實的「成交價（Transacted Price）」——是已發生的買賣雙方同意的價格，更準確反映市場真實均衡', 'C. Liv-ex 只顯示掛牌價', 'D. Wine-Searcher 更準確反映市場價'],
        correct: 1,
        explanation: '掛牌價 vs. 成交價的市場信息差異：Wine-Searcher 的「最低零售價」是賣方的「要價（Ask Price）」，在市場下跌期往往高於買家願意支付的價格（Bid-Ask Spread 很大）；Liv-ex 的成交記錄是「已達成共識的市場清算價格（Clearing Price）」，更接近「真實市場均衡」。對精準投資決策，使用 Liv-ex 成交數據定價，再用 Wine-Searcher 了解零售市場分佈，是最完整的定價研究組合。'
      },
      {
        type: 'multiple',
        question: '影響布根地特定酒款「折讓或溢價（Discount/Premium）」相對市場均價的因素包括？（多選）',
        options: ['A. OWC（原裝木箱）完整性——OWC 通常溢價 5-20%', 'B. 液位（Ullage）——頸部以下液位每下降一個等級，折讓 10-30%', 'C. Provenance 文件完整性——有完整記錄的溢價，無記錄的折讓', 'D. 酒莊標籤字體設計——更漂亮的標籤設計溢價更高'],
        correct: [0, 1, 2],
        explanation: '折讓溢價的三個真實定價因子：OWC（A）——原裝木箱直接降低了「換瓶/改裝」的可能性，是最直觀的 Provenance 保護，業界認可約 5-20% 溢價；液位（B）——頸部以下液位表示軟木塞滲漏，氧化風險增加，二手市場對低液位酒有明確的折讓定價（買家要求風險補償）；Provenance 文件（C）——有完整倉儲記錄的酒款可減少假酒風險和品質不確定性，買家願意溢價為確定性買單。標籤字體設計（D）影響標籤「美觀完整度」（有標籤 vs. 無標籤的折讓），而非「字體設計風格」的定價因素，故D錯。'
      },
      {
        type: 'single',
        question: '「中間商加價（Merchant Markup）」在精品布根地流通鏈中的典型結構是？',
        options: ['A. 中間商不存在', 'B. 典型流通鏈（DRC 視角）：酒莊建議零售價（SRP）→ 指定進口商（+10-15%）→ 分銷商（+10-15%）→ 精品酒商/餐廳（+30-60%）→ 消費者——頂尖布根地從酒莊到最終消費者的價格倍數通常在 2-4 倍，在頂尖餐廳可達 5-8 倍', 'C. 布根地酒莊直接向消費者銷售', 'D. 中間商加價只發生在一個環節'],
        correct: 1,
        explanation: '多層流通加價的現實：以 DRC RC 2015 為例：酒莊出廠價約 $1,200（指定 Négociant 採購，多數為 Domaine Direct 限額分配）→ 美國進口商建議零售 $2,000-2,500 → 精品酒商零售 $3,000-4,000 → 頂尖餐廳酒單 $8,000-15,000+。每個環節都在累加「庫存風險、貯存成本、品牌稀缺感」的費用。了解流通鏈加價幫助投資者和消費者判斷「哪個購買渠道提供最佳性價比」（配額直採 > 拍賣 > 精品酒商 > 餐廳）。'
      }
    ]
  },

  'm13-l4': {
    type: 'quiz', title: '🧠 競標策略與出售時機知識檢測',
    questions: [
      {
        type: 'single',
        question: '「反向競標（Reverse Bidding）」策略在布根地拍賣中的應用是？',
        options: ['A. 反向競標指降價競標', 'B. 在有多個相同拍品批次時，刻意「放棄」第一批（讓其他競標者以高價得標）後在後續批次競標——通常拍賣場上競爭者在首批付出高位後，後續批次有時出現稍低落槌（競爭者資金或心理疲勞）', 'C. 反向競標是非法的', 'D. 反向競標只適用於烈酒拍賣'],
        correct: 1,
        explanation: '多批次拍賣的競標博弈：當同場拍賣有多批次相同酒款（如 3 批次各 6 瓶的 DRC 2010），「後批次折讓效應（Declining Lot Effect）」是有記錄的市場現象——首批往往因「搶先鬥氣」而達到最高落槌，後續批次因場上競爭者資金已部分承諾或心理降溫，出現 5-15% 的自然回落。聰明的競標者對他所需的量預留足夠「後備資金」，不在首批盲目搶入。但此策略有風險：若後批次被其他高手「撿走」，有可能一單都拿不到。'
      },
      {
        type: 'single',
        question: '選擇「在哪個季節（哪場拍賣）出售布根地」的策略考量是？',
        options: ['A. 任何時間出售結果完全相同', 'B. 重要拍賣季節（11月秋季大拍、4-5月春季大拍）集中了最多高端買家和媒體關注——在此期間出售頂尖布根地通常能獲得更高溢價；避開市場淡季（7-8月夏季）和全球金融市場動盪期', 'C. 只有在 DRC 剛發布新年份時才能出售', 'D. 夏季是出售布根地的最佳時機'],
        correct: 1,
        explanation: '拍賣季節的布根地流動性差異：葡萄酒拍賣市場有明確的「高峰季（Peak Season）」：11 月（秋季大拍，傳統上配合中歐葡萄酒年份發布熱情）和 4-5 月（春季大拍，接上新年份評分）是全球拍賣日曆中最重要的兩個節點。Sotheby\'s、Christie\'s、AMC 的年度最高成交場次均集中在這兩個時段。7-8 月的夏季拍賣「流動性最低」（高端買家渡假、媒體關注度低），通常是精品布根地溢價最難實現的時機。'
      },
      {
        type: 'multiple',
        question: '選擇「委托哪家拍賣行 vs. 私下交易」的决策因素包括？（多選）',
        options: ['A. 拍賣行的覆蓋率（收藏家客戶數量/品牌知名度）', 'B. 傭金比較（賣方傭金 + 買方手續費結構）', 'C. 時間效率（拍賣需要等待特定場次，私下交易可更快完成）', 'D. Provenance 透明度要求（拍賣行通常需要更完整的文件記錄）'],
        correct: [0, 1, 2, 3],
        explanation: '出售渠道決策四維度（全部正確）：覆蓋率（A）——最頂尖的布根地通過 Sotheby\'s/Christie\'s 能接觸到最廣泛的高端買家競爭，理論上推高落槌；傭金（B）——傳統拍賣行賣方傭金 10-15%，加買方 15-25%，合計使市場「消耗」30-40% 的成交額；時間（C）——委托拍賣通常需要等待 2-4 個月後的合適場次，私下轉讓或 Liv-ex 貿易商交易可在數週內完成；文件要求（D）——拍賣行對 Provenance 的嚴格要求可能是部分賣家的阻礙（同時也是買家的保護），私下交易文件要求更靈活（但買家風險更高）。'
      },
      {
        type: 'single',
        question: '「系列效應（Collection Premium）」在布根地拍賣中如何發揮作用？',
        options: ['A. 系列效應對布根地無意義', 'B. 出售一個「完整的垂直收藏（Vertical Collection，同一酒款多個年份，如 DRC RC 2005-2020 完整 16 個年份）」或大型水平系列通常能獲得比分散出售相同單瓶總和更高的「系列溢價（Collection Premium）」，因為完整系列對特定藏家具有無可複製的吸引力', 'C. 系列應該在多個拍賣行分批出售', 'D. 完整垂直系列只在波爾多有溢價'],
        correct: 1,
        explanation: '系列溢價的買家心理：對於 DRC 收藏家或研究者，一個「完整垂直（Vertical）」的視覺和研究完整性有其獨特的「不可分割價值」，即比個別散瓶之和更高。如 Christie\'s 2018 年拍出的 DRC 全垂直（1945-2017 每個年份），其最終成交遠高於所有單瓶估算相加——因為買家為「完整性本身」付出了額外溢價。這個原則對賣家的啟示：若持有同一酒款多個年份，應評估是否整批出售（系列溢價）vs. 逐年單瓶分批（可能更高靈活性），根據情況選擇最優出售策略。'
      }
    ]
  },

  // ── M14 品鑑術語 ──────────────────────────────────────────
  'm14-l1': {
    type: 'quiz', title: '🧠 布根地專業術語知識檢測',
    questions: [
      {
        type: 'single',
        question: '「Négociant（酒商）」和「Domaine（酒莊）」在布根地的本質區別是？',
        options: ['A. 兩者完全相同', 'B. Domaine：酒莊自有葡萄園、自主種植、自行釀造的「垂直整合生產者」，酒的特定地塊特徵更純粹；Négociant：企業向各葡萄農購買葡萄或葡萄汁，在自己的酒窖釀造和培養，規模通常更大，地塊來源多元，但控制程度不如 Domaine', 'C. Négociant 品質永遠低於 Domaine', 'D. Domaine 不允許購買葡萄'],
        correct: 1,
        explanation: 'Domaine vs. Négociant 的布根地生態：傳統上，Domaine 代表「地塊的最純粹表達」（Armand Rousseau、DRC 等），Négociant 代表「商業規模的布根地」（如 Louis Jadot、Bouchard、Drouhin，雖然 Drouhin 也有大量自有地塊）。但邊界越來越模糊：許多頂尖 Domaine 同時有 Négociant 業務（買葡萄補足自有酒款），而部分 Négociant 已購入大量自有地（如 Maison Leroy 同時是 Négociant 和 Domaine）。評判標準應是具體的品質而非純粹的類別標籤。'
      },
      {
        type: 'single',
        question: '「En Primeur」在布根地的準確含義（相比波爾多的使用）是？',
        options: ['A. 在布根地和波爾多的含義完全相同', 'B. 在波爾多，En Primeur 有正式制度化的機制（品桶周、期酒價格、全球分銷）；在布根地，「En Primeur」通常指酒商的「新酒即時訂購」服務，或更常以「非正式配額預訂（Allocation Commitment）」的形式存在，沒有波爾多那樣正式化的期酒系統', 'C. En Primeur 在布根地指陳年酒', 'D. 布根地沒有任何類似 En Primeur 的機制'],
        correct: 1,
        explanation: 'En Primeur（期酒）的地區差異：「En Primeur」原義是「早期購買，在裝瓶前承諾」。波爾多將此制度化：固定時間（4月品桶週）、公開價格、業界統一流程。布根地沒有此正式系統：頂尖布根地的「配額」通過進口商和長期客戶關係分配，在裝瓶前就有「保留承諾」，功能類似 En Primeur 但沒有公開的機制或統一時程。有些優質 Négociant（如 Louis Jadot）確實有類似的「早期提供（Early Offer/Wine Futures）」服務，但不叫「En Primeur」，也沒有波爾多式的媒體事件規模。'
      },
      {
        type: 'multiple',
        question: '布根地特有的法語術語中，「Clos」的正確用法是？（多選）',
        options: ['A. Clos 指歷史上有石牆圍繞的獨立地塊（Walled Vineyard）', 'B. Clos Vougeot 是布根地最大的 Clos（約 50 公頃），但有 80+ 個不同莊主', 'C. 所有帶 Clos 名稱的地塊都屬於同一莊主', 'D. Clos 是布根地對「特級園（Grand Cru）」的代稱'],
        correct: [0, 1],
        explanation: 'Clos 的歷史和現實：「Clos（圍牆；封閉地）」源自中世紀西多修道院（Cistercian Monks）的「Enclosure」傳統——修道院以石牆圍繞最佳地塊，物理上區分「神聖農耕空間」和外界；Clos Vougeot（Cîteaux 修道院，12 世紀建立）是布根地最著名的歷史圍牆地塊，但法國大革命後被拍賣分割，現有 83 個不同持有者（不屬於同一莊主，C 為假）；Clos 不一定是特級園（D 為假）——如 Clos Saint-Denis（特級）但也有 Clos Saint-Jacques（一級），意義是「地塊名」不是等級名。'
      },
      {
        type: 'single',
        question: '「Lieu-Dit（地名地塊，字面意義：「被稱為某地的地方」）」在布根地酒標上代表什麼？',
        options: ['A. Lieu-Dit 是法定等級', 'B. 歷史上（甚至是幾百年前）被農民命名的小地塊名稱——不一定具有法定等級意義，但反映了「特定地點」的傳統識別；部分 Lieu-Dit 後來成為正式的一級園或特級園名稱，但也有很多只是「村莊地塊」的歷史地名標注', 'C. Lieu-Dit 只出現在特級園標籤', 'D. 所有 Lieu-Dit 都被法定為一級園'],
        correct: 1,
        explanation: 'Lieu-Dit 的歷史文化意義：法語 Lieu-Dit = "a place called..."（一個被稱為…的地方），是農業社區幾百年來根據土地特徵自然命名的地塊識別符——Les Amoureuses（愛人們，可能來自葡萄棚形狀）、Les Charmes（魅力之地）等都是歷史地名。INAO 1936 年將部分 Lieu-Dit 正式化為一級/特級園，但大量 Lieu-Dit 保持在「村莊級」為標注（村莊級酒標可選擇性標注 Lieu-Dit 名稱以區分具體地塊）。了解 Lieu-Dit 是深入了解布根地地塊制度歷史的重要語彙。'
      },
      {
        type: 'single',
        question: '「Vendange Tardive（VT，晚摘）」在布根地和阿爾薩斯的使用差異是？',
        options: ['A. 兩者使用完全相同', 'B. VT 在阿爾薩斯是受法規嚴格規範的「免責甜度等級（帶甜度的晚採收）」，必須達到特定最低天然糖度；在布根地，VT 偶爾出現於酒標（特別是 Vougeot 等特定地塊），但是非官方使用，只作為「採收時間晚」的資訊標注，不代表阿爾薩斯的甜度保證', 'C. VT 在布根地是禁止使用的', 'D. VT 在兩個產區均指干型白酒'],
        correct: 1,
        explanation: 'VT 的法規差距：阿爾薩斯的 Vendange Tardive 是精準定義的甜型酒類別（強制最低潛在酒精：格烏茲塔明那 14.3%，麗絲玲 13.4%）；布根地偶見的「VT」標注（如 Bouchard 的 La Romanée VT）是非官方的「採收晚」信息標注，不受 VT 相關規範管轄，甜度可以是干型或微甜，因莊主決定而異。這個術語使用的「地區差異」是布根地酒標語彙中的一個較細微但重要的混淆點，對有阿爾薩斯背景的消費者尤其需要知道。'
      }
    ]
  },

  'm14-l2': {
    type: 'quiz', title: '🧠 葡萄酒評分系統知識檢測',
    questions: [
      {
        type: 'single',
        question: '「百分制（100-Point Scale）」的設計邏輯和在布根地應用的局限是？',
        options: ['A. 百分制是完全客觀的科學系統', 'B. 百分制（Robert Parker 1978 年引入）模仿美國學術評分（70 分及格，90+ 優秀），以「數字」的精確感掩蓋了品酒的主觀性；在布根地的局限：頂尖布根地的「風土震撼感」難以用單一數字捕捉，且評分者偏好（如 Parker 的豐厚偏好）對布根地市場造成了失真影響', 'C. 百分制是布根地酒商發明的', 'D. 百分制只由 Wine Spectator 使用'],
        correct: 1,
        explanation: '百分制的「科學假象」：統計學上，人類感官辨別能力通常難以區分 2 分以內的差距（即 95 分和 97 分在感官上幾乎無法穩定重複识别），但市場的定價差異可達 30-50%。Robert Parker 的影響：他對布根地的評分在 2000 年代前對市場影響巨大，但其個人偏好（高萃取、高酒精、低酸）和布根地傳統精緻風格之間的張力造成了「Parker 偏好的布根地」vs.「傳統派布根地」兩個市場。在布根地，Allen Meadows（Burghound）的評分影響力已在很大程度上取代了 Parker 的地位，風格更接近布根地傳統美學。'
      },
      {
        type: 'single',
        question: '「20 分制（20-Point Scale）」在英國傳統和 WSET 中的使用方式是？',
        options: ['A. 20 分制已被百分制完全取代', 'B. 20 分制（Michael Broadbent 開創）仍是英國「傳統薈」的主流（Jancis Robinson 使用 20 分）——18/20 相當於百分 96 水平，17/20 約 93 分，表述更簡潔；WSET Level 4 的評分也採用 20 分架構（分解為觀/嗅/嚐/品質評估四個子分）', 'C. 20 分制只在法國使用', 'D. WSET 使用 100 分制'],
        correct: 1,
        explanation: '20 分制的英式傳統：Jancis Robinson 是最著名的 20 分制現役使用者；她的公開評分中，17 分是「值得找來喝的好酒」，18 分是「優秀」，19 分是「極為傑出，有深入思考的必要」，20 分是「完美（她承認幾乎從未給出）」。相比百分制的 90-100 分區間擁擠（市場上充斥 90-97 分），20 分制的 17-19.5 分區間有更精細的差異表達。WSET Level 4（Diploma）在 WSET SAT 框架中有半分評估，使用「Outstanding/Excellent/Good」等質量標準而非純數字。'
      },
      {
        type: 'multiple',
        question: '「評分系統對消費者的行為影響」包括？（多選）',
        options: ['A. 高分酒款（90+）的市場需求通常在評分發布後顯著提升（Score Bump）', 'B. 評分使消費者對未品嚐酒款的購買決策更有「效率」（減少信息不對稱）', 'C. 評分消除了所有酒款的主觀品味差異', 'D. 高分酒款的價格在評分後通常快速上漲，尤其在頂尖布根地'],
        correct: [0, 1, 3],
        explanation: '評分的市場機制效應：A（Score Bump）是有據可查的現象——Wine Spectator 或 Burghound 的 95+ 分發布後，主要葡萄酒電商平台的搜尋量和成交量往往在 48 小時內激增 3-5 倍，庫存快速清空；B（信息效率）是評分系統的核心價值主張——對不熟悉布根地的消費者，「Burghound 96 = 好」的訊息減少了購買決策成本；D（價格上漲）在頂尖布根地（DRC 等）尤為明顯，一個 100 分評語可使拍賣成交翻倍。評分不能消除所有主觀差異（C 為假）——兩個人都看到 97 分，仍可能因個人風格偏好對同款酒有完全不同的享受程度。'
      },
      {
        type: 'single',
        question: '各大葡萄酒評論媒體的布根地評分權威度排序（截至 2024 年業界共識）是？',
        options: ['A. Robert Parker（The Wine Advocate）仍是布根地最重要的評分人', 'B. Burghound（Allen Meadows）> Vinous（Antonio Galloni）> Jancis Robinson（Purple Pages）> Wine Spectator > The Wine Advocate（Parker 2016 年退休後影響力大幅下降）——在布根地，風土專業知識比通用影響力更重要', 'C. 所有媒體對布根地市場影響完全相同', 'D. Wine Spectator 是布根地最重要的評分參考'],
        correct: 1,
        explanation: '布根地評分生態的 2024 年現狀：Robert Parker 的 The Wine Advocate 在波爾多和新世界評分影響力仍大，但在布根地已退居次要地位——因 Parker 本人退休（2016 年出售多數股份給亞洲投資者）和其繼任者（William Kelley）雖優秀但尚未建立同等品牌機信任；Allen Meadows（Burghound）的布根地垂直數據庫（數千款、跨年份）和其「傳統派布根地美學」最貼近核心藏家群；Galloni 的 Vinous 以深入的地塊描述和「生產者訪問報告」補充；Jancis Robinson 的「20 分制 + 文學性描述」在收藏家文化圈仍有高聲望。'
      }
    ]
  },

  'm14-l3': {
    type: 'quiz', title: '🧠 品鑑筆記寫作結構知識檢測',
    questions: [
      {
        type: 'single',
        question: '「顏色描述（Color Description）」在品鑑筆記中的標準化術語是？',
        options: ['A. 只需說「紅色」或「白色」', 'B. 標準描述包括：深淺（Pale/Light/Medium/Medium-Deep/Deep）、色調（Ruby/Garnet/Tawny/Purple，或 Yellow-Green/Gold/Amber 白酒）、清澈度（Clear/Hazy/Browning）、亮度（Bright/Dull）——四個維度合組如「淡透的明亮石榴紅，邊緣帶磚橙（Pale, Bright Ruby-Garnet with Tawny Rim）」', 'C. 顏色描述可以省略', 'D. 只描述亮度就足夠'],
        correct: 1,
        explanation: '顏色描述的四維標準化：專業品鑑筆記的顏色描述具有「可對比性」——若每個人都使用標準化詞彙，不同時間地點的筆記可以相互比較。WSET Level 4 SAT 規定的顏色描述框架：深淺（5 等）、清澈度（5 等）、光澤度（2 等）；CMS 盲品框架更注重「顏色 + 邊緣變化」的陳年詮釋。對布根地而言，顏色深淺（淡透 = 黑皮諾）和邊緣磚化程度（陳年指示）是最有診斷意義的顏色指標。'
      },
      {
        type: 'single',
        question: '「一次香氣（Primary Aroma）」、「二次香氣（Secondary Aroma）」和「三次香氣（Tertiary Aroma/Bouquet）」的區分是？',
        options: ['A. 三種香氣都來自橡木桶', 'B. 一次（Primary）：來自葡萄果實本身（品種和風土）的特徵性水果香/花香；二次（Secondary）：來自發酵過程（酵母代謝產物，如奶油/麵包/酵母感）；三次（Tertiary/Bouquet）：來自氧化陳年（橡木桶培養和瓶中發展，如皮革/蘑菇/泥土/雪茄）', 'C. 三次香氣只在白酒中出現', 'D. 一次香氣只在年輕酒中存在'],
        correct: 1,
        explanation: '三次香氣層次在布根地的應用：黑皮諾的三次香氣演化是布根地品鑑筆記的重心：典型一次香（新鮮草莓/覆盆子/紫羅蘭）→ 二次香（發酵麵包感/輕微奶油，多是酒泥陳養帶來）→ 三次香（10年+後出現的乾玫瑰/皮革/蘑菇/腐葉/甘草/泥土）。一簡化的記憶框架：一次=葡萄；二次=發酵；三次=時間。老年份布根地盲品中，若三次香已完全主導（沒有明顯一次果香），可合理推斷 15年+ 的陳年時間。'
      },
      {
        type: 'multiple',
        question: '「口感（Palate/Taste）」描述中的核心結構性詞彙應包括？（多選）',
        options: ['A. 酸度（Low/Medium-/Medium/Medium+/High）', 'B. 單寧質地（Grainy/Firm/Silky/Smooth）和量（Low/Medium/High）', 'C. 酒體（Light/Medium-bodied/Full）', 'D. 收尾長度（Short/Medium/Long/Very Long）'],
        correct: [0, 1, 2, 3],
        explanation: '口感描述四支柱（全部必要）：標準化品鑑口感描述必須覆蓋：酸度（A）——決定新鮮感和配餐潛力；單寧（B）——描述量（多少）和質地（顆粒粗細），是布根地紅酒陳年判斷的關鍵——年輕時顆粒感= 需要更多陳年；酒體（C）——對應食物搭配重量匹配；收尾長度（D）——「長收尾（Long Finish）」通常是品質指標，一般認為 30+秒的收尾才能稱為「長收尾」。在布根地盲品中，若同時有高酸、單寧絲滑、輕盈酒體、長收尾的四個特徵，強力指向 10年+ 優質陳年黑皮諾。'
      },
      {
        type: 'single',
        question: '「評估結論（Assessment/Conclusion）」在專業品鑑筆記中應包含什麼？',
        options: ['A. 只需說「我喜歡這款酒」', 'B. 品質等級（Outstanding/Excellent/Good+/Good 等）+ 陳年潛力評估（是否仍可繼續陳年？還是現在是飲用窗口？）+ 飲用建議（建議現在/2-3年/5-10年後飲用）+ 適合場合/配餐的簡短建議', 'C. 評估結論可以跳過', 'D. 只需給出分數'],
        correct: 1,
        explanation: '評估結論的「可操作性」要求：好的品鑑筆記結論回答買家/喝者的核心問題：「現在開嗎？值不值得等？搭什麼食物？」——因此必須包含時間軸判斷（陳年潛力/飲用窗口），這是最直接的「讀者行動指示」。單純的分數（只說 94 分）或主觀喜惡（喜歡）缺少此操作性指引。頂尖品鑑筆記（Burghound/Jancis Robinson）的結論通常一句話涵蓋：「現在喝很愉快，但擁有的話再等 5-8 年會進入顛峰——最佳飲用期預計 2028-2038 年」。'
      }
    ]
  },

  'm14-l4': {
    type: 'quiz', title: '🧠 品鑑實戰演練知識檢測',
    questions: [
      {
        type: 'single',
        question: '在對比品嚐（Comparative Tasting）中，正確的「洗口（Palate Cleansing）」實踐是？',
        options: ['A. 每嚐一口酒就大量吃麵包', 'B. 清水漱口（淡礦泉水，非氣泡水以避免 CO2 干擾）+ 吐酒（長品嚐時避免酒精累積影響感知）+ 若需要，少量未鹹的白麵包（中和口腔殘留物）——三者組合使每款酒的品嚐盡量在「清白」的口腔狀態下進行', 'C. 只需要吐酒就足夠', 'D. 洗口對品嚐沒有影響'],
        correct: 1,
        explanation: '口感清潔的科學：高單寧酒款（如年輕 Gevrey）在口腔留下的澀感——舌頭和口腔黏膜的蛋白質已被單寧部分結合——若不清潔立即品嚐下一款，第二款酒的單寧感知會「疊加」在前一款的口腔狀態上，造成系統性高估；高酸/高糖/高鹽食物也會暫時改變味覺基準線。清水 → 吐水 → 小口麵包（吸附殘留）→ 清水 → 是最完整的標準洗口流程。氣泡水（CO₂）反而可能刺激本已有酸感的口腔，加重酸度感知，不是最佳選擇。'
      },
      {
        type: 'single',
        question: '「醒酒（Decanting）」對布根地頂尖紅酒的適用原則是？',
        options: ['A. 所有布根地都需要長時間醒酒', 'B. 年輕緊澀的布根地（如 2018 第一級/特級園，装瓶後 5 年內）可考慮 30-60 分鐘輕柔醒酒；老年份布根地（15 年+）通常建議「緩慢醒酒（Slow Pour，大杯直接倒入）」而非長時間換瓶，避免脆弱的老酒接觸過多氧氣快速崩潰', 'C. 老年份布根地永遠需要醒酒 2 小時', 'D. 布根地不需要任何醒酒'],
        correct: 1,
        explanation: '醒酒的年份差異化做法：年輕布根地（<10年，特別是有單寧結構的紅酒）：適度醒酒開放香氣；老年份布根地（>15年）：氧化過快風險遠大於收縮封閉的問題——老酒往往開瓶即巔，接觸空氣後 30-60 分鐘已達頂點，之後快速衰落（尤其是極老年份如 1980-1990 代）。侍老酒的專業建議：先以輪廓判斷開放程度，若已很開放→ 立即飲用（不換瓶），若封閉→ 大酒杯 + 輕緩斟倒 + 最多 20-30 分鐘後飲用，不宜久置。'
      },
      {
        type: 'multiple',
        question: '「多感官品嚐（Multi-Sensory Tasting）」研究發現什麼因素影響葡萄酒感知？（多選）',
        options: ['A. 杯子的形狀（杯口大小影響香氣聚集）', 'B. 環境噪音（高噪音使酒的甜感降低，酸感增加）', 'C. 背景音樂（Oxford 研究發現某類音樂使酒顯得更「圓潤」或更「清爽」）', 'D. 標籤設計和品牌（盲測中相同酒知道品牌後評分改變）'],
        correct: [0, 1, 2, 3],
        explanation: '多感官效應（全部研究確認）：杯型（A）——Riedel 的杯型設計科學已被多項研究部分確認：杯口直徑影響揮發強度和香氣方向性，影響嗅覺感知；噪音（B）——Oxford 的 Charles Spence 研究顯示：環境噪音干擾高頻感知，使甜感降低、酸感更突出（解釋了為何同一款酒在安靜餐廳和嘈雜酒吧的品飲體驗不同）；音樂（C）——Spence 的「Crossmodal」研究顯示：高音域音樂（flute/明亮）使酒感覺更清爽，低沉音樂（bass/深沉）使酒感覺更圓潤；品牌效應（D）——大量研究確認「知道是 DRC」顯著拉高評分（期望效應），是所有評分系統都無法完全消除的偏差。'
      },
      {
        type: 'single',
        question: '建立個人布根地「香氣詞庫（Aroma Library）」的最有效方法是？',
        options: ['A. 只依賴教科書中的描述', 'B. 實物嗅覺訓練——積累對真實物品的嗅覺記憶：地下室土壤（泥土/Geosmin）、蘑菇（Damp Mushroom）、玫瑰乾（Rose Petal）、草莓醬（Cooked Strawberry）——使抽象的香氣術語連結到具體感覺記憶，是唯一能讓「品鑑筆記術語」真正意義化的訓練方法', 'C. 只需要品嚐更多葡萄酒就自動建立', 'D. 使用香氣輪盤（Aroma Wheel）背誦顏色分類就足夠'],
        correct: 1,
        explanation: '「記憶鉤（Memory Hook）」建立的神經科學基礎：嗅覺記憶（Olfactory Memory）是大腦記憶系統中最直接連接到「杏仁核」（情感記憶中心）和「海馬迴」（語境記憶）的感官——這使氣味記憶特別持久且有情感關聯。當你第一次拿到真正的松露實物親鼻嗅聞，大腦同時記錄了「化學分子特徵」和「情感/情境記憶」，之後在酒中辨認出類似氣味時，兩者同時激活形成可靠的識別。純粹背誦詞彙（C/D）缺少這個「感覺記憶的錨定」，在實際品嚐中難以可靠調用。'
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
  ['advanced-m13.json', 'm13-l1'],
  ['advanced-m13.json', 'm13-l2'],
  ['advanced-m13.json', 'm13-l3'],
  ['advanced-m13.json', 'm13-l4'],
  ['advanced-m14.json', 'm14-l1'],
  ['advanced-m14.json', 'm14-l2'],
  ['advanced-m14.json', 'm14-l3'],
  ['advanced-m14.json', 'm14-l4'],
]

console.log('=== 布根地 L3 Quiz 注入 — M13 拍賣行 + M14 品鑑術語 ===\n')
let ok = 0
for (const [file, lid] of pairs) {
  if (QUIZ_MAP[lid] && injectQuiz(file, lid, QUIZ_MAP[lid])) ok++
}
console.log(`\n完成：${ok}/${pairs.length} 已注入`)
