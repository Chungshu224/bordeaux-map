/**
 * inject-bourgogne-l4-quiz-m7.mjs
 * 布根地 L4 Quiz 注入 — M7：酒莊經營與創業管理 m7-l1~l6
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.resolve(__dirname, '..', 'public/bourgogne/data/courses/level4')
const MARKER = '_inject_bourgogne_l4_quiz'

// 使用 JSON.parse 避免 JS 字串內嵌單引號語法問題
const QUIZ_MAP = JSON.parse(`{
  "m7-l1": {
    "type": "quiz", "title": "🧠 酒莊商業模式分析知識檢測",
    "questions": [
      {
        "type": "single",
        "question": "布根地酒莊的「Domaine（自有莊園）模式」vs.「Négociant（酒商）模式」的根本商業差異是？",
        "options": [
          "A. 兩者完全相同，只是名稱不同",
          "B. 資本結構（Capital Structure）與控制程度（Control Level）的根本對立——Domaine 模式以土地所有權（Land Ownership）為核心競爭力，需要大量前期土地資本（布根地 Grand Cru 地塊 EUR 3,000,000-10,000,000/公頃），擁有完整供應鏈控制（Full Supply Chain Control）；Négociant 模式以收購葡萄/酒液運作，資本門檻低，但對原料品質的控制程度較弱",
          "C. Domaine 只釀造白酒，Négociant 只處理紅酒",
          "D. Négociant 模式在現代布根地已不存在"
        ],
        "correct": 1,
        "explanation": "Domaine vs. Négociant 的商業模式對比：Domaine 的關鍵資源（Key Resources）是不可複製的土地；Négociant 的關鍵資源是人脈網絡（Relationship Network）和選酒技術（Curation Expertise）。現代成功的布根地企業多是 Domaine-Négociant 混合體——如 Louis Jadot 同時擁有大量自有地塊和收購業務。純 Domaine 模式的財務邏輯：Grand Cru 地塊 EUR 8,000,000/公頃，年產值可能只有 EUR 60,000-90,000，ROI 極低——保值（Capital Preservation）和品牌價值才是土地持有的真正財務邏輯，而非短期現金回報。"
      },
      {
        "type": "single",
        "question": "「酒莊直接面向消費者（Direct-to-Consumer, DTC）」模式的商業優勢是？",
        "options": [
          "A. DTC 模式要求酒莊有大量倉儲，對小型酒莊不適用",
          "B. 通路利潤截留（Margin Capture）+ 客戶關係數據（Customer Data）雙重優勢——DTC 讓酒莊直接截留通常由進口商/零售商拿走的 30-50% 通路利潤；更重要的是建立了第一方客戶數據（First-Party Customer Data）——購買記錄、偏好、聯絡方式，是精準再行銷和訂閱制（Wine Club）的基礎；對小型布根地精品莊，酒莊現場訪客的直銷毛利率可達 70-80%",
          "C. DTC 銷售的價格一定比通路低，對酒莊不利",
          "D. DTC 只適用於低價入門款，頂尖酒款不適合直銷"
        ],
        "correct": 1,
        "explanation": "DTC 的客戶終身價值（Customer Lifetime Value, CLV）計算：DTC 的真實商業價值不只是單次交易利潤較高，而是重複購買（Repeat Purchase）的長期 CLV。布根地 DTC 的限制與機會：法國的菸酒零售法規和直郵（Direct Shipment）限制使部分歐盟以外市場的 DTC 複雜化；但透過 Wine Club 酒莊會員制，精品消費者可在訪問法國時直接購買帶回，是頂尖收藏家的優選路徑之一。"
      },
      {
        "type": "multiple",
        "question": "評估一個布根地新創酒莊的「商業模式可行性（Business Model Viability）」時，核心考量包括？（多選）",
        "options": [
          "A. 土地取得策略（Land Acquisition Strategy）——購買 vs. 長期租約（Fermage/Métayage）vs. 葡萄收購",
          "B. 目標市場與通路（Target Market & Distribution Channel）——出口比例、主要市場、進口商關係",
          "C. 財務彈性（Financial Resilience）——能否承受 1-2 個差年份（收入大幅下降）的財務壓力",
          "D. 所有新創酒莊只要有好地塊，商業可行性自動成立"
        ],
        "correct": [0, 1, 2],
        "explanation": "布根地新創酒莊的三重可行性測試（A/B/C 正確，D 過於樂觀）：土地策略（A）——Fermage 土地租約是常見的輕資產替代方案，租約通常 9 年可續，租金是收成的固定百分比（約 15-25%）；目標市場（B）——小型精品莊通常 70-80% 產量出口，必須在創業初期就建立至少 3-5 個可靠的國際進口商；財務彈性（C）——2016、2021 年的嚴重霜害使部分酒莊減產 50-80%，流動資金不足的新創莊可能在一次嚴霜後就面臨財務危機。"
      },
      {
        "type": "single",
        "question": "「Fermage（限定地租）」和「Métayage（分成耕作）」制度在布根地土地使用上的差異是？",
        "options": [
          "A. 兩者完全相同，只是法語叫法不同",
          "B. 固定租金（Fermage）vs. 分成（Métayage）——Fermage 是承租人向地主支付固定現金租金（由法國農業部定期調整的公定費率計算），無論收成好壞均固定繳納，承租人保留所有超額收益；Métayage 是地主和承租人依事前協議的比例（通常地主 30-50%）分享實際收成，豐年地主獲益多，歉年地主代為承擔部分風險——現代布根地以 Fermage 為主流",
          "C. 兩者都是地主直接雇用農民，農民沒有自主決策權",
          "D. Fermage 只用於 Grand Cru 地塊，Métayage 用於 Village 等級"
        ],
        "correct": 1,
        "explanation": "Fermage 的現代布根地優勢：對承租人（Fermier/釀酒師），固定租金使財務規劃更確定；豐年的額外收益全歸承租人（激勵高品質農耕）；法定 9 年合約保障讓釀酒師有足夠時間建立地塊風格。布根地土地流轉的現實：當老農戶退休時，其 Fermage 地塊通常在既有承租關係下轉售，買家購入地塊時同時繼承現有 Fermier，此制度保護了農業操作的穩定性。"
      },
      {
        "type": "single",
        "question": "布根地酒莊的「酒莊旅遊（Agritourism）收入流」在商業模式中的定位是？",
        "options": [
          "A. 酒莊旅遊是主要收入來源，比賣酒重要",
          "B. 輔助收入流（Auxiliary Revenue Stream）+ 品牌建立工具（Brand Building Tool）雙重角色——對多數布根地精品莊，旅遊收入佔整體營收的 10-25%，不是主要來源，但戰略重要性在於：直接銷售（Cellar Door Sales）提供最高毛利率的渠道；訪客體驗形成地點情感連結（Place Attachment），是最強的長期客戶關係工具；UNESCO 布根地坡地景觀認定使旅遊吸引力持續提升",
          "C. 布根地頂尖酒莊通常拒絕開放訪客，因此不可能有旅遊收入",
          "D. 旅遊收入與酒款銷售完全無關，是獨立業務"
        ],
        "correct": 1,
        "explanation": "Agritourism 的交叉補貼（Cross-Subsidization）功能：布根地精品莊的旅遊業務是葡萄酒銷售的漏斗頂部（Top-of-Funnel）——訪客在導覽時試飲 6-8 款酒，平均現場直銷購買的毛利率高出批發 1.5-2 倍。UNESCO 布根地葡萄園坡地（Climats de Bourgogne，2015 年入選世界遺產）後，伯恩的年度旅遊訪客量增長約 30%，直接帶動酒莊直銷業務成長，尤其對 Côte de Nuits 和 Côte de Beaune 核心地帶的中小型精品莊商業影響尤為顯著。"
      }
    ]
  },
  "m7-l2": {
    "type": "quiz", "title": "🧠 酒莊財務規劃知識檢測",
    "questions": [
      {
        "type": "single",
        "question": "布根地酒莊的「營運資金循環（Working Capital Cycle）」的獨特挑戰是？",
        "options": [
          "A. 酒莊的現金流完全穩定，不存在週期性波動",
          "B. 超長現金轉換週期（Extended Cash Conversion Cycle）——從春季農耕投入、秋季採收（高人工成本）、冬季釀造（橡木桶 EUR 800-1,200/桶）、熟成等待（頂尖布根地紅酒桶+瓶中熟成 18-36 個月）到銷售回款（進口商通常 30-90 天付款），可能長達 24-48 個月，是需要長期性營運資金（Long-Term Working Capital）的典型農業商業模式",
          "C. 布根地酒莊在採收後 1 個月內就能收到銷售款",
          "D. 酒莊財務規劃和一般零售業完全相同"
        ],
        "correct": 1,
        "explanation": "布根地酒莊的現金流壓力點：採收季（9-10 月）是現金流出的高峰（人工 + 新酒桶 + 臨時工人），通常是酒莊現金儲備最低的時點。許多小型布根地精品莊使用銀行農業信貸（Crédit Agricole）的短期信用額度橋接採收季的流動性缺口。家族酒莊遺產稅危機：法國對葡萄酒莊的遺產稅評估基於市場土地價值，布根地頂尖地塊過去 20 年漲幅驚人，使遺產稅金額在傳承時可能達到酒莊年收入的數十倍，繼承人往往被迫出售部分地塊支付稅款。"
      },
      {
        "type": "single",
        "question": "布根地酒莊的「成本結構（Cost Structure）」中，通常佔比最大的成本是？",
        "options": [
          "A. 廣告行銷費用是最大的成本項目",
          "B. 農耕人工成本（Viticulture Labor Cost）——布根地的手工農耕（手工採收、逐芽修剪、馬耕）使人工成本在頂尖布根地莊的總成本佔比達到 40-60%；加上橡木桶成本（新桶率 30-100%，每桶 EUR 800-1,200）和土地持有成本，農業生產成本合計通常佔總成本的 70-80%，遠高於廣告和行銷（通常僅 5-15%）",
          "C. 橡木桶是最大的單一成本項目",
          "D. 通路利潤分成（進口商 margin）是酒莊最大的成本"
        ],
        "correct": 1,
        "explanation": "布根地手工農耕的人工密集成本分析：每公頃布根地葡萄園的年均手工農耕成本約 EUR 15,000-25,000/公頃。成本的品質槓桿（Quality Leverage）：更高的人工投入（如 DRC 的馬耕）能降低土壤壓實、改善根系健康，但直接使成本幾乎翻倍——這種成本換品質的邏輯解釋了頂尖布根地高定價的客觀成本基礎。"
      },
      {
        "type": "multiple",
        "question": "布根地酒莊的「財務KPI（Key Performance Indicators）」應包括？（多選）",
        "options": [
          "A. 每瓶生產成本（Cost Per Bottle）——含農耕、釀造、包裝、倉儲的完整攤銷",
          "B. 按通路毛利率（Gross Margin by Channel）——比較直銷（DTC）、國內零售、出口的各別毛利率",
          "C. 現金轉換週期（Cash Conversion Cycle）——從農耕投入到銷售回款的天數",
          "D. 年份評分（Vintage Score）是最重要的財務指標"
        ],
        "correct": [0, 1, 2],
        "explanation": "酒莊財務管理的三維 KPI 框架（A/B/C 正確，D 是市場指標非財務KPI）：每瓶成本（A）——需要作業制成本計算（Activity-Based Costing, ABC）分別追蹤每個地塊的農耕成本、釀造設備折舊、橡木桶攤銷、包裝及管理費用；通路毛利率（B）——量化各通路的實際毛利差距，讓通路策略決策有數據支撐；現金週期（C）——是財務壓力測試的核心指標，週期越長、財務緩衝需求越大，直接決定酒莊的最低資本需求（Minimum Capital Requirement）。"
      },
      {
        "type": "single",
        "question": "布根地酒莊的「橡木桶投資策略（Oak Barrel Investment Strategy）」如何影響財務和品質？",
        "options": [
          "A. 所有酒款都應使用 100% 新桶，以最大化品質",
          "B. 新桶率（New Oak Ratio）的品質-財務雙重決策——新桶（Fût Neuf, 225L）成本 EUR 800-1,200/桶，舊桶成本接近零；高新桶率（60-100%，如 Chambertin）增加橡木複雜度但成本高，且過多新桶可能掩蓋地塊精細度（Terroir Expression）；低新桶率（0-30%，清雅風格）降低成本，突出果味純粹（Fruit Purity）；每個酒莊應根據風格定位 × 財務約束決定適合的新桶率策略",
          "C. 橡木桶是純粹的容器，對品質沒有影響",
          "D. 布根地法規要求所有酒款必須使用不鏽鋼桶"
        ],
        "correct": 1,
        "explanation": "布根地新桶率策略的風格-成本矩陣：Domaine Armand Rousseau 以 100% 新桶熟成 Chambertin 著稱；相比之下，Domaine Mugnier 使用較低新桶率（強調清雅細膩），反映了地塊特性 × 釀造哲學 × 財務規劃三者協調的策略選擇。橡木桶財務攤銷管理：1,000 桶的酒莊以 25% 新桶率計算，每年需換 250 桶 × EUR 1,000 = EUR 250,000 年度桶木支出，是相當重要的固定資本再投資項目。"
      },
      {
        "type": "single",
        "question": "「布根地家族酒莊的傳承規劃（Succession Planning）」面對的主要挑戰是？",
        "options": [
          "A. 布根地家族酒莊的傳承在法律上非常簡單",
          "B. 法定強制均分繼承（Legal Forced Equal Inheritance）+ 土地增值遺產稅（Appreciation-Based Estate Tax）的雙重壓力——法國民法的強制份額（Réserve Héréditaire）要求子女平等繼承，造成地塊不斷分割；同時頂尖地塊市場價值爆炸性增長使遺產稅極高；許多家族通過農業控股公司（GAEC / EARL）或不動產投資公司（SCI）結構進行稅務優化的傳承規劃",
          "C. 布根地的地塊傳承只需口頭協議，無法律約束",
          "D. 法國政府對農業地塊的傳承完全免稅，無財務壓力"
        ],
        "correct": 1,
        "explanation": "布根地傳承的碎片化惡化（Fragmentation Acceleration）循環：Clos Vougeot（50.5 公頃）目前有超過 83 位共同持有者，正是歷代均分繼承的累積結果。現代傳承工具：GAEC（農業共同生產合夥）允許家族成員共同持有和經營，以合夥份額替代地塊實物分割；SCI（民事不動產公司）可透過逐步轉讓股份（Gradual Share Transfer）在多年間完成傳承，每年利用法國遺產稅的年度免稅額（Abattement），合理降低整體稅負。"
      }
    ]
  },
  "m7-l3": {
    "type": "quiz", "title": "🧠 布根地酒莊品牌建立與行銷知識檢測",
    "questions": [
      {
        "type": "single",
        "question": "新興布根地酒莊「建立國際知名度（International Visibility）」最有效的策略是？",
        "options": [
          "A. 大量投放網路廣告是最快方法",
          "B. 評論家策略（Critic Strategy）+ 精品進口商背書（Importer Endorsement）組合最有效——評論家（Burghound / Jancis Robinson / William Kelley）的高分評語可以使一個無名小莊在數週內進入全球精品買家的視野；與策劃型進口商（Curatorial Importer）合作，讓進口商的品牌信任度為新莊背書；頂尖餐廳酒單的採用是第三個訊號層——三者組合的三角背書（Triangular Endorsement）是建立國際知名度最快的路徑",
          "C. 降低定價是最有效的新進入市場策略",
          "D. 只要有 Grand Cru 地塊，國際知名度自動建立"
        ],
        "correct": 1,
        "explanation": "新莊三角背書策略的案例：Benjamin Leroux（前 Domaine Comte Armand 釀酒師，2007 年創立自己的 Négociant 業務）在短短 5 年內進入全球頂尖精品酒單——路徑：① Allen Meadows（Burghound）首批評測給予高分；② 透過英美頂尖精品進口商快速進入英美精品市場；③ 倫敦/紐約頂尖餐廳酒單採用。完成三角背書後，Benjamin Leroux 的分配名單在 3 年內開始出現等待，進入賣方市場（Seller Market）。"
      },
      {
        "type": "single",
        "question": "布根地酒莊的「酒標設計（Label Design）」在品牌定位中的戰略角色是？",
        "options": [
          "A. 酒標只是法規要求，對品牌沒有任何影響",
          "B. 地位信號（Status Signal）+ 真實性符號（Authenticity Symbol）雙重功能——頂尖布根地的酒標設計通常以極簡歷史風格傳遞：DRC 的老式銅版印刷字體、Rousseau 的素雅縑紙標，以「視覺保守」傳遞「品質不需要包裝說服（Let the Wine Speak）」的強烈自信；試圖以現代炫目設計的酒標可能在精品收藏家眼中引發補償性設計（Compensatory Design）的懷疑",
          "C. 把酒標設計得越豐富越好，吸引消費者",
          "D. 布根地法規規定所有酒莊使用統一酒標設計"
        ],
        "correct": 1,
        "explanation": "布根地酒標的信號均衡（Signaling Equilibrium）理論：信號理論（Spence 1973）說明，在信息不對稱市場，品質越高的賣方能承受發出可信信號的成本——頂尖布根地的極簡酒標之所以是強信號，正是因為只有真實品質強大的品牌才敢用樸素設計。新一代布根地酒莊的酒標設計趨勢：部分年輕世代酒莊採用輕微現代化的設計語言，試圖傳遞經典內涵 + 當代開放性的雙重訊息——若配合品質實力，可以擴展目標受眾而不損害精品定位。"
      },
      {
        "type": "multiple",
        "question": "布根地酒莊的「公關（PR）策略」中，關鍵活動包括？（多選）",
        "options": [
          "A. 評論家訪問（Critic Visit）——主動邀請頂尖評論家進行桶邊品嚐（Barrel Tasting）和年份評估",
          "B. 媒體旅遊（Press Trip）——邀請關鍵市場的酒評記者/KOL 進行酒莊訪問和在地品鑑",
          "C. 行業活動參與（Industry Event Participation）——La Paulée de Beaune、Hospices de Beaune 拍賣等",
          "D. 大量購買電視廣告是頂尖布根地最重要的公關工具"
        ],
        "correct": [0, 1, 2],
        "explanation": "布根地公關影響力殿堂體系（A/B/C 有效，D 不適用精品市場）：評論家訪問（A）——每年 1-3 月是布根地評論家訪問旺季，Burghound、Jancis Robinson.com、Wine Spectator 在此期間發布年份評測，對進口商採購決策有直接影響；媒體旅遊（B）——對亞洲市場尤其重要，邀請台灣/日本/香港的酒評 KOL 實地訪問，費用遠低於廣告但效果更真實持久；行業活動（C）——Hospices de Beaune 11 月拍賣是布根地最重要的年度行業人脈聚會，每年吸引全球數百位進口商/收藏家。"
      },
      {
        "type": "single",
        "question": "「Clos（圍牆葡萄園）」和「Monopole（獨家地塊）」作為品牌資產的特殊性是？",
        "options": [
          "A. Clos 和 Monopole 只是地塊的地理描述，無商業意義",
          "B. 不可複製的排他性（Non-Replicable Exclusivity）品牌資產——Clos 傳遞無可爭議的地塊識別性；Monopole（如 DRC 的 Romanée-Conti Monopole、La Tâche Monopole）意味著全世界只有一個酒莊有權生產此酒（Only Source in the World），是品牌排他性的終極表現，也是最強力的稀缺性定位工具",
          "C. 任何布根地酒莊都可以自行宣稱 Monopole 地位",
          "D. Clos 葡萄園比非 Clos 葡萄園的品質一定更差"
        ],
        "correct": 1,
        "explanation": "Monopole 的品牌防禦護城河（Brand Defensive Moat）：DRC 的 Romanée-Conti Monopole 狀態（全球只有 1.81 公頃、只有一個酒莊生產）是品牌策略學上完美競爭壁壘的教科書案例——沒有任何競爭者可以生產同名酒款，品牌名稱就是產品本身。布根地其他重要 Monopoles：La Romanée（Domaine du Comte Liger-Belair 獨佔）；這些名稱在酒標上不需要任何額外說明，品牌識別性完全自足。"
      },
      {
        "type": "single",
        "question": "布根地酒莊建立「亞洲市場策略（Asia Market Strategy）」的核心步驟是？",
        "options": [
          "A. 只要在日本設立分支機構即可覆蓋全亞洲",
          "B. 市場分層進入（Tiered Market Entry）——① 選擇首要進入市場：通常選香港（自由港/精品酒中心）或日本（最成熟的亞洲精品布根地市場）作為品牌灘頭堡；② 找到對的進口商：需具備文化理解力 + 布根地知識 + 目標客群觸達；③ 亞洲市場的關係優先（Relationship-First）文化——台灣、日本、韓國消費者對酒莊主的到訪（Owner Visit）給予極高評價，每 2-3 年一次的亞洲巡迴品鑑是維護關係的最重要投資",
          "C. 亞洲市場只需線上銷售，不需要關係管理",
          "D. 布根地在亞洲完全不需要任何市場策略，名氣自帶流量"
        ],
        "correct": 1,
        "explanation": "布根地的亞洲市場地理分層策略：① 先香港/日本打基礎——日本是人均布根地消費量最高的亞洲國家；② 再台灣——台灣有高度活躍的葡萄酒教育圈（WSET 台灣考生數量在亞洲名列前茅）和強烈的精品布根地文化認同；③ 再中國大陸——市場龐大但法規和通路複雜性最高，通常不是新進入亞洲的首選。酒莊主到訪的文化重要性：日本和台灣消費者對在酒莊本人處品酒的個人經歷給予極高文化價值，直接轉化為長期忠實客戶。"
      }
    ]
  },
  "m7-l4": {
    "type": "quiz", "title": "🧠 永續經營與有機認證知識檢測",
    "questions": [
      {
        "type": "single",
        "question": "「生物動力農法（Biodynamique/Biodynamic Agriculture）認證」在布根地的市場意義是？",
        "options": [
          "A. 生物動力認證只是行銷噱頭，無實際品質影響",
          "B. 哲學信號（Philosophy Signal）+ 品質差異化（Quality Differentiation）雙重市場效應——Demeter（生物動力）認證要求農場遵循 Rudolf Steiner 的全整農業哲學，包括依月相曆（Lunar Calendar）進行農耕操作、使用生物動力配方（牛角矽石 BD501、牛糞堆肥 BD500），完全禁止化學農藥和合成肥料；對精品消費者，Demeter 認證傳遞生產者最深層的農耕承諾，是 Domaine Leroy 和 DRC 等頂尖莊強調品質優越性的重要市場工具",
          "C. 生物動力認證要求禁止採摘，因此產量為零",
          "D. 所有布根地 AOC 法規強制要求生物動力農法"
        ],
        "correct": 1,
        "explanation": "生物動力認證的層次信號（Hierarchical Signaling）：在一般可持續、有機認證（AB）、Biodynamic（Demeter）的遞進層次中，Demeter 是最嚴格的哲學和操作承諾。布根地頂尖實踐者：Domaine Leroy（100% Biodynamic，Lalou Bize-Leroy 是布根地 Biodynamic 最著名的倡導者之一）、DRC（2007 年開始全面轉型）——這兩個頂峰品牌的 Biodynamic 實踐，使生物動力 = 最高品質在頂尖布根地市場成為近乎共識。"
      },
      {
        "type": "single",
        "question": "有機農業認證（AB：Agriculture Biologique）和「HVE（Haute Valeur Environnementale 高環境價值）」認證的差異是？",
        "options": [
          "A. 兩者完全相同，只是由不同機構頒發",
          "B. 認證嚴格程度不同——AB 有機認證完全禁止合成農藥和化學肥料；HVE（高環境價值）是法國農業部推動的漸進式可持續農業標準，Level 3（最高級）要求生物多樣性維護、植保產品減量、水資源管理和施肥管理，但不完全禁止合成農藥，是過渡到有機前的可達門檻（Accessible Sustainability Threshold）",
          "C. HVE 比 AB 更嚴格，是更高層次的認證",
          "D. 布根地酒莊無法申請任何可持續認證"
        ],
        "correct": 1,
        "explanation": "AB vs. HVE 的認證應用策略：AB 有機認證的農業轉型成本很高（轉型認證期 3 年、產量可能下降 15-30%）；HVE Level 3 提供了可持續性的中間道路，使無法完整轉型的酒莊也能向市場展示可持續承諾。市場接受度差異：精品收藏家（知識型買家）通常能分辨 AB 和 HVE 的層次差異，HVE 對一般消費者端更有說服力；調查確認 HVE 的綠色標籤顯著提升大眾市場的購買意願。"
      },
      {
        "type": "multiple",
        "question": "布根地酒莊推行「永續農業（Sustainable Viticulture）」的商業動機包括？（多選）",
        "options": [
          "A. 品質論點（Quality Argument）——健康土壤（Healthy Soil）被認為能讓葡萄藤根系更深、地塊個性（Terroir Expression）更完整",
          "B. 市場差異化（Market Differentiation）——在全球精品市場中，環境承諾是越來越重要的品牌訴求",
          "C. 長期成本降低（Long-Term Cost Reduction）——健康生態系統減少對農藥的依賴，長期農耕成本可能下降",
          "D. 永續農業的唯一目的是獲得政府補貼，無其他動機"
        ],
        "correct": [0, 1, 2],
        "explanation": "永續農業的三重底線（Triple Bottom Line）商業邏輯（A/B/C 正確，D 過度簡化）：品質論點（A）——土壤生物多樣性研究確認有機農地的微生物多樣性遠高於常規農地；市場差異化（B）——Wine Intelligence 消費者調查顯示，全球 62% 消費者表示有機/可持續認證影響購買決策，年輕世代比例高達 78%；長期成本（C）——轉型初期成本上升，但 10 年後穩定狀態的農耕成本（更少農藥採購費 + 更強健的生態系統自我調節）通常低於常規農業。"
      },
      {
        "type": "single",
        "question": "「Lutte Raisonnée（理性農耕）」的定義和在布根地的應用是？",
        "options": [
          "A. Lutte Raisonnée 等同於完全有機農業",
          "B. 最小干預原則（Minimum Intervention Principle）——Lutte Raisonnée 指在必要時才使用農藥（依實際病蟲壓力決定，而非預防性噴灑），以精準使用（Targeted Application）取代慣行全面覆蓋；不是正式認證制度，而是農耕哲學——比常規農業更環保，但不達 AB 有機標準；許多布根地中小型酒莊採用 Lutte Raisonnée 作為有機認證之前的實踐起點或務實方案",
          "C. Lutte Raisonnée 意味著完全放棄植保，不使用任何產品",
          "D. Lutte Raisonnée 是布根地 AOC 的強制法規要求"
        ],
        "correct": 1,
        "explanation": "Lutte Raisonnée 在布根地的務實角色：布根地的大陸性氣候（夏季潮濕）使葡萄藤易受黴菌病侵害，完全有機農業在某些高濕年份挑戰較大。Lutte Raisonnée 的哲學：更多觀察（More Observation）、更少干預（Less Intervention）——農夫每天在葡萄藤間行走，觀察真實的病蟲情況，只在達到防治門檻時才採取行動，與慣行農業的固定程序化噴藥（Calendar-Based Spraying）形成對比。"
      },
      {
        "type": "single",
        "question": "氣候變遷對布根地「永續農業實踐的調適（Adaptation of Sustainable Practices）」的影響是？",
        "options": [
          "A. 氣候變遷使永續農業在布根地變得更困難，應放棄",
          "B. 雙向影響（Bidirectional Impact）——暖化對永續農業的威脅：夏季高溫使真菌病壓力複雜化，乾旱使無灌溉的有機莊面臨水分壓力；但也提供機會：越來越多年份成熟度充足（減少糖化需求）；更高海拔地塊氣候向有機農業友好方向演變；乾燥年份對真菌病的自然抑制（Dry Year Natural Fungal Suppression）使有機農業在某些乾熱年份比多雨年份更可行",
          "C. 氣候變遷對布根地的有機農業完全沒有影響",
          "D. 布根地將停止所有有機農業實踐以應對氣候變遷"
        ],
        "correct": 1,
        "explanation": "氣候變遷與布根地有機農業的適應性管理：BIVB 的研究顯示，過去 30 年布根地的採收日期平均提前了約 11 天，確認了顯著的氣候暖化趨勢。適應策略含義：① 強調深根系——Biodynamic 的土壤健康改善深根系，使乾旱韌性（Drought Resilience）優於常規農業；② 覆草（Cover Cropping）在有機農業規範下被強制要求，改善土壤保水能力和微氣候調節；③ 選育抗旱抗病的 PIWI 葡萄品種——布根地 AOC 法規目前不允許在核心 AOC 使用，但 CIVB 正在研究引入策略。"
      }
    ]
  },
  "m7-l5": {
    "type": "quiz", "title": "🧠 酒莊人力資源管理知識檢測",
    "questions": [
      {
        "type": "single",
        "question": "布根地酒莊的「精英釀酒師（Head Winemaker）」離職對酒莊品牌的影響是？",
        "options": [
          "A. 釀酒師離職對酒莊品質和聲譽完全沒有影響",
          "B. 人才風險（Talent Risk）程度取決於酒莊是哲學機構型還是個人技術型——若酒莊品質建立在地塊品質 + 標準化哲學上，釀酒師離職衝擊相對可控（接班人學習既有哲學即可）；若聲譽高度依賴特定個人的釀造直覺和個性（Personal Winemaker Craft），離職可能造成市場對品質一致性的質疑和估值重調",
          "C. 釀酒師是農場員工，完全可替換，無市場影響",
          "D. 每個酒莊的釀酒師離職都必然造成品質崩潰"
        ],
        "correct": 1,
        "explanation": "釀酒師離職的品牌衝擊模型：Henri Jayer 的去世（2006）使其酒款從優秀但可取得變成永久絕版歷史收藏品，Cros Parantoux 2001 現在拍賣超過 USD 100,000/瓶——這是個人型酒莊在釀造師消失後的極端價格反應。制度型酒莊（如 DRC）的接班示例：Aubert de Villaine（2022 年完成接班）的平穩過渡被認為是機構傳承的典範（Institutional Succession Model）——品質完全延續，市場無波動。進行中的師徒型傳承（Apprentice Transition）是降低人才風險的最佳方案。"
      },
      {
        "type": "single",
        "question": "布根地葡萄酒業的「採收季臨時工（Harvest Labor）」管理挑戰是？",
        "options": [
          "A. 布根地採收全部使用機器，無需臨時工",
          "B. 短期人力密集需求（Short-Term Labor Surge）+ 技術要求（Skill Requirement）的管理矛盾——布根地頂尖莊的手工採收需要在 2-3 週的最佳成熟窗口內，快速部署大量具備選粒意識（Selective Picking Judgment）的採收工人（每公頃需要 7-12 人，大型酒莊在採收季需同時動員 50-200+ 人）；既要快速（成熟窗口短暫），又要精確（Grand Cru 採收品質直接影響風格）",
          "C. 採收工人的技術和態度對頂尖布根地品質毫無影響",
          "D. 所有布根地酒莊都依法只能雇用正式全職員工"
        ],
        "correct": 1,
        "explanation": "採收季人力的彈性部署策略：DRC 的採收團隊（約 150-200 人）中有大量回頭採收工（Return Harvesters）——每年固定回到同一酒莊並熟悉採收要求。採收者培訓（Harvester Training）的品質投資：採收開始前的半日培訓是頂尖布根地莊的標準做法；採收團隊的穩定性（每年同樣的人回來）是降低培訓成本和提升採收品質的重要人資策略。現代數位化輔助：部分大型布根地酒莊開始使用採收管理 App 追蹤每個採收組的地塊進度，確保不同地塊的最佳採收時間不被錯過。"
      },
      {
        "type": "multiple",
        "question": "布根地酒莊的「全職釀酒/農業員工（Full-Time Staff）留任策略」包括？（多選）",
        "options": [
          "A. 利潤分享（Profit Sharing）或年終紅利（Year-End Bonus）與年份品質/業績掛鉤",
          "B. 進修支持（Professional Development Support）——補助員工考取 WSET / CMS 等認證，鼓勵知識深化",
          "C. 職涯透明路徑（Career Pathway Transparency）——明確員工在酒莊的晉升可能（助理釀酒師→釀酒師→首席釀酒師）",
          "D. 降低薪資是最有效的員工留任策略"
        ],
        "correct": [0, 1, 2],
        "explanation": "酒莊人才留任的參與感（Engagement）框架（A/B/C 正確，D 明顯錯誤）：布根地精品酒莊的全職員工（通常 3-15 人）對酒莊生存至關重要，有豐富地塊知識和農耕經驗的老員工是真實的隱性知識資產（Tacit Knowledge Asset），無法被文件記錄替代。利潤分享（A）——在家族酒莊難以提供大額年薪的情況下，和酒莊共同成長的利潤分享是高效非貨幣激勵；進修支持（B）——支持員工考 WSET DipWSET 的費用對酒莊是極低留任投資，但傳遞了酒莊重視你的成長的強烈信號；職涯路徑（C）——願意討論員工未來發展的管理者，其員工流失率通常比不討論的管理者低 30-40%。"
      },
      {
        "type": "single",
        "question": "「家族世代接班（Family Succession）」對布根地酒莊人力管理的特殊影響是？",
        "options": [
          "A. 家族接班不涉及人力管理問題，和非家族企業完全相同",
          "B. 雙重忠誠衝突（Dual Loyalty Conflict）+ 非正式權力結構（Informal Power Structure）挑戰——家族成員同時是老闆的家人和員工，造成績效評估難以客觀（家族偏愛 Nepotism）；非家族員工面臨天花板效應（Glass Ceiling）；世代接班期間的決策權力過渡往往模糊，造成雙頭管理（Dual Command）的指令不一致",
          "C. 家族接班使酒莊管理更清晰、更高效",
          "D. 布根地法規禁止家族成員在酒莊內任職"
        ],
        "correct": 1,
        "explanation": "家族企業的三環模型（Three-Circle Model, Tagiuri & Davis）：家族（Family）、所有權（Ownership）、管理（Management）三個圓圈的重疊區段是衝突的根源。布根地家族酒莊的典型人才困境：非家族的傑出釀酒師（如前 Domaine Comte Armand 的 Benjamin Leroux）最終選擇自立，造成了頂尖人才育成後外流（Talent Incubation Exodus）的現象。解決方案：部分布根地家族莊引入非家族首席釀酒師配合家族商業決策者的雙頭領導（Dual Leadership）架構，讓技術人才有足夠的自主空間，同時維護家族的所有權控制。"
      },
      {
        "type": "single",
        "question": "「葡萄酒業實習生（Stagiaire）」制度在布根地的重要性是？",
        "options": [
          "A. 實習生對布根地酒莊的技術傳播沒有任何貢獻",
          "B. 技術移轉樞紐（Knowledge Transfer Hub）+ 全球網絡節點（Global Network Node）雙重角色——布根地酒莊是全球葡萄酒釀造師最想實習的目的地之一，每年接待來自澳洲、美國、日本、台灣等地的 Stagiaire；Stagiaire 回國後在本地實踐並傳播布根地理念，同時前 Stagiaire 形成了酒莊的全球人脈網絡（Global Alumni Network），成為非正式品牌大使",
          "C. 布根地完全不接受外國實習生",
          "D. 實習生只做清潔工作，不接觸釀酒技術"
        ],
        "correct": 1,
        "explanation": "布根地 Stagiaire 制度的軟實力（Soft Power）地緣影響：每年在布根地受訓的數百位國際實習生，回到各自母國後成為布根地品質哲學的在地傳道者——台灣已有多位曾在布根地（Chablis/Gevrey/Beaune）實習的釀酒師/侍酒師，在台灣推廣低干預、風土導向的葡萄酒文化。酒莊的 Stagiaire 策略：頂尖酒莊每年嚴格篩選 1-2 位國際實習生（需要有基礎葡萄酒教育背景和法語能力），被選中者帶著在 X 酒莊實習的認證回國，成為最具公信力的品牌代言人（Brand Ambassador），而酒莊只付出基本生活補貼，是超高 ROI 的品牌大使計劃。"
      }
    ]
  },
  "m7-l6": {
    "type": "quiz", "title": "🧠 酒莊風險管理與保險知識檢測",
    "questions": [
      {
        "type": "single",
        "question": "布根地酒莊面臨的「氣候風險（Climate Risk）」主要包括哪些？",
        "options": [
          "A. 布根地氣候完全穩定，無氣候風險",
          "B. 多層氣候威脅（Multi-Layer Climate Threats）——① 春霜（Spring Frost）：布根地 4-5 月的霜害（如 2016、2017、2021 年）可摧毀 50-90% 的嫩芽；② 冰雹（Hail）：夏季雹暴可在數分鐘內破壞整片葡萄園（如 2012 年 Gevrey）；③ 極端熱浪（Heat Wave）：（2003、2019、2022 年）導致葡萄過熟、酸度喪失；④ 過濕年份：黴菌病爆發；⑤ 乾旱長期化：根系壓力增加",
          "C. 只有冰雹是布根地的氣候風險，其他不存在",
          "D. 氣候風險只影響有機農業，常規農業完全免疫"
        ],
        "correct": 1,
        "explanation": "布根地春霜的財務災難量化：2021 年春霜（4 月初）是布根地近代史上最嚴重的一次，部分地區（Chablis 和 Mâcon）損失超過 60-80% 的預期產量；整個布根地的農業損失估計超過 EUR 2 億。對財務規劃的含義：酒莊的現金流模型必須納入每 3-5 年發生一次嚴重霜害的壓力情境，確保在減產年份（收入減少 50%）仍有足夠的營運資金。反霜害技術投資：風扇（Wind Machine，每台約 EUR 20,000-30,000）或霜鬥蠟燭（每公頃約 EUR 3,000/季節）是常見的防霜技術。"
      },
      {
        "type": "single",
        "question": "「農業保險（Crop Insurance）」在布根地的主要類型和選擇邏輯是？",
        "options": [
          "A. 法國農業完全不提供農業保險，酒莊只能自行承擔損失",
          "B. 多災害保險（MPCI）vs. 單一災害保險（Named Peril Insurance）——冰雹保險（Grêle Insurance）是布根地使用最廣泛的農業保險；多災害保險（MPCI，覆蓋霜、旱、濕等）保費較高但覆蓋範圍更廣；小型精品莊（2-5 公頃）通常以自保 + 現金緩衝應對低頻大災，大型酒莊和 Négociant 更傾向完整 MPCI 保障",
          "C. 保險只保財產損失，農業產出損失不在保障範圍內",
          "D. 布根地的農業保險費率完全由個別農戶自定"
        ],
        "correct": 1,
        "explanation": "農業保險的保費 vs. 覆蓋範圍決策：2022 年法國實施農業氣候保險改革（Réforme de l\'Assurance Récolte），政府對 MPCI 多災害保險的補貼比例提高至 65%，大大降低了購買成本，使以往因保費過高被放棄的多災害保險變得可行。冰雹保險（Hail Insurance）的布根地特殊性：Côte de Nuits 和 Côte de Beaune 的保費率因地區冰雹歷史頻率不同而顯著差異，靠近 Beaune 的地塊保費通常高出 30-50%；對持有珍貴 Grand Cru 地塊的酒莊，高保費也是必要的——一次冰雹可能損失相當於數年保費的產值。"
      },
      {
        "type": "multiple",
        "question": "布根地酒莊的「非農業風險（Non-Agricultural Risks）」及管理措施包括？（多選）",
        "options": [
          "A. 食品安全風險（Food Safety Risk）——葡萄酒中農藥殘留或微生物污染，應對：嚴格的 HACCP 標準操作和定期第三方檢驗",
          "B. 聲譽風險（Reputational Risk）——假酒（Counterfeit）或負面媒體報導，應對：防偽標籤、主動公關管理",
          "C. 法律/合規風險（Legal/Compliance Risk）——AOC 規範違反、勞工法違規、環保法不合規，應對：定期法律審查和合規培訓",
          "D. 所有風險都可以通過不購買保險完全消除"
        ],
        "correct": [0, 1, 2],
        "explanation": "酒莊非農業風險的全面風險矩陣（A/B/C 正確，D 明顯錯誤）：食品安全（A）——歐盟食品安全法（Regulation EC 178/2002）的農藥殘留最大值（MRL）是嚴格合規要求；聲譽風險（B）——Rudy Kurniawan 假酒醜聞的教訓使 DRC、Ponsot 等酒莊強化了出廠記錄（Serial Number + Detailed Provenance Records）；法律合規（C）——AOC 規範違反（如超過最大產量）可導致降級（Declassification）處罰——布根地 AOC 的葡萄種類、最大產量、最低酒精度等規定是強制法規，每年均有官方抽查。"
      },
      {
        "type": "single",
        "question": "布根地酒莊的「經營連續性計劃（Business Continuity Planning, BCP）」應涵蓋哪些關鍵場景？",
        "options": [
          "A. BCP 對農業酒莊不適用",
          "B. 關鍵人才退出（Key Person Exit）+ 自然災害（Natural Disaster）+ 市場崩潰（Market Collapse）三大場景——① 關鍵人才退出 BCP：預備繼任者名單 + 釀酒哲學文件化確保品質不中斷；② 自然災害 BCP：嚴重霜害/冰雹的財務緩衝計劃，確保最壞情況下最低 12 個月營運資金；③ 市場崩潰 BCP：如主力市場突然縮小，預備通路轉換計劃（Channel Switching Plan）快速重新分配銷售量到其他市場",
          "C. 只需要考慮冰雹風險，其他場景不重要",
          "D. BCP 只有大企業才需要，農業酒莊無此需求"
        ],
        "correct": 1,
        "explanation": "BCP 的三大場景準備：分別代表人力風險、自然風險、市場風險，是酒莊存活能力的三個關鍵維度。市場崩潰 BCP 的真實案例：2020 年澳洲對中國大陸的酒出口在中國施加 200%+ 反傾銷關稅後幾乎歸零（從 14 億澳元年出口到接近零），布根地也存在類似的潛在市場集中風險。布根地通路分散格局：美國（35%）、比利時（15%）、英國（10%）、日本（8%）、香港（7%）、台灣（5%）和其他市場的分散格局，使任何單一市場的波動不至於造成整體財務危機，是布根地 Négociant 和大型莊通路佈局的教科書示範。"
      },
      {
        "type": "single",
        "question": "「關鍵人物保險（Key Person Insurance）」在布根地精品酒莊的必要性是？",
        "options": [
          "A. 關鍵人物保險對布根地小型酒莊完全不需要",
          "B. 人才資本風險轉移（Human Capital Risk Transfer）工具——對品牌高度依賴特定個人的精品布根地莊，關鍵人物保險是將人才突然缺失造成的財務損失轉移給保險公司的重要工具；保障範圍：覆蓋關鍵人物死亡或完全失能時，酒莊在獵頭 + 接班培訓期的財務需求，以及可能的客戶流失導致的收入減少；對向銀行申請農業貸款的小型莊，銀行常要求此保險作為放貸條件",
          "C. 布根地精品酒莊只需要農業保險，人壽類保險不適用",
          "D. 所有保險合同在農業用地上都不合法"
        ],
        "correct": 1,
        "explanation": "關鍵人物保險的接班橋接（Succession Bridging）功能：以一個僅有 3 人的布根地精品莊（莊主/釀酒師/農耕師）為例，若莊主突然發生意外，銀行貸款需繼續還款，員工薪資需發放，同時需快速啟動接班計劃——關鍵人物保險提供財務橋接（Financial Bridge），確保酒莊不因臨時性財務壓力被迫出售。保費的合理性估算：年收入 EUR 500,000 的精品莊，一份 EUR 1,000,000 的 Key Person 人壽保險（50 歲）年保費約 EUR 5,000-8,000（佔年收入 1-1.6%），是相當合理的存活保障費（Survival Insurance Premium）。"
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

const pairs = [
  ['master-m7.json', 'm7-l1'],
  ['master-m7.json', 'm7-l2'],
  ['master-m7.json', 'm7-l3'],
  ['master-m7.json', 'm7-l4'],
  ['master-m7.json', 'm7-l5'],
  ['master-m7.json', 'm7-l6'],
]

console.log('=== 布根地 L4 Quiz 注入 — M7：酒莊經營與創業管理 ===\n')
let ok = 0
for (const [file, lid] of pairs) {
  if (QUIZ_MAP[lid] && injectQuiz(file, lid, QUIZ_MAP[lid])) ok++
}
console.log(`\n完成：${ok}/${pairs.length} 已注入`)
