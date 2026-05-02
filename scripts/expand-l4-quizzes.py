"""
為 l4-3 到 l4-11 的每個課程新增 2 道測驗題目（覆蓋第 4、5 章），
並更新對應的 EN locale JSON 檔案。
"""
import json
import re
from pathlib import Path

BASE = Path(__file__).parent.parent

# ─────────────────────────────────────────────
# 新增題目定義（中文）
# 格式：每課 (q4, q5) 各一題
# ─────────────────────────────────────────────
NEW_QUESTIONS = {
    'l4-3': [
        {
            'id': 4,
            'question': '評估橡木桶材源品質時，哪個指標最能反映木材通氣性與香氣釋放的一致性？',
            'options': ['年輪密度（每公分年輪數）', '桶板物理尺寸規格', '酒莊現有庫存量'],
            'correct': 0,
            'explanation': '年輪密度直接影響木材氣孔結構與香氣化合物（如內酯、香草醛）釋放速率，是材源分級與採購的核心指標。',
        },
        {
            'id': 5,
            'question': '評估多容器策略的總擁有成本（TCO）時，哪項成本最容易被低估？',
            'options': ['新橡木桶採購費', '混凝土槽的清潔耗水與週期維護成本', '不鏽鋼槽購置費'],
            'correct': 1,
            'explanation': '混凝土槽看似低維護，但清潔需大量水與專業工序，長期 TCO 往往高於預期；不鏽鋼槽雖購置貴，但清潔效率高。',
        },
    ],
    'l4-4': [
        {
            'id': 4,
            'question': '若酒莊欲精確識別哪些成本活動「最難壓縮」，應優先採用哪種成本分析工具？',
            'options': ['垂直比率分析（損益表百分比）', '作業成本法（ABC）', '柏拉圖分析'],
            'correct': 1,
            'explanation': '作業成本法（ABC）按驅動因子分攤成本，能精確定位資源消耗最高的核心作業，辨識固定性強、難以壓縮的成本項目。',
        },
        {
            'id': 5,
            'question': '計算葡萄園新投資的 IRR，若結果低於酒莊的加權平均資金成本（WACC），應如何決策？',
            'options': ['專案報酬超過資金成本，應執行', '專案報酬不足以覆蓋資金成本，應拒絕', 'IRR 與 WACC 沒有直接關係'],
            'correct': 1,
            'explanation': 'IRR < WACC 代表投資報酬率低於融資成本，專案在財務上不可行，從資本預算角度應拒絕或重新設計。',
        },
    ],
    'l4-5': [
        {
            'id': 4,
            'question': '酒莊旗下有入門款、中階款與頂級款，若三者共用同一品牌名稱，最大潛在風險是？',
            'options': ['降低消費者識別難度', '頂級款光環被入門款曝光稀釋（品牌稀釋效應）', '增加倉儲管理複雜度'],
            'correct': 1,
            'explanation': '品牌架構欠缺層次區隔時，頂級款的排他性感知易因大量入門款曝光而被稀釋，降低溢價定位的說服力。',
        },
        {
            'id': 5,
            'question': '波爾多品牌長期占據「高感知品質、高感知價格」象限。若競品進入同象限，應優先選擇哪種定位策略突圍？',
            'options': ['降低定價搶奪市場份額', '強調獨特風土或稀缺性，建立可持續差異化優勢', '複製現有品牌的訊息策略'],
            'correct': 1,
            'explanation': '同象限紅海競爭須靠差異化突圍，稀缺性與獨特風土敘事能建立防禦性優勢，避免陷入價格競爭。',
        },
    ],
    'l4-6': [
        {
            'id': 4,
            'question': '酒莊推出的新款混釀含有未獲 AOC 核准的品種 8%，若申請 AOC 認證，最可能的結果是？',
            'options': ['可申請 AOC，超標比例可豁免', '無法取得 AOC，產品需降級為 IGP 或 Vin de France', '向 INAO 提交科學報告即可獲核准'],
            'correct': 1,
            'explanation': 'AOC 規定對許可品種、混釀比例及產區均有嚴格要求，使用未核准品種即使比例小，仍會導致申請失敗並降級。',
        },
        {
            'id': 5,
            'question': '酒莊建立內部合規管理體系時，業界最佳實踐的稽核頻率設計為何？',
            'options': ['每 5 年一次深度外部稽核即可', '每年一次自稽加三年一次外部認證審查', '僅在法規更新時進行稽核'],
            'correct': 1,
            'explanation': '年度自稽能即時發現合規缺口，三年外部認證提供獨立驗證，兩者結合是 ISO 19600 及 AOC 合規管理體系的標準模式。',
        },
    ],
    'l4-7': [
        {
            'id': 4,
            'question': '風險矩陣中「高影響、低發生可能性」的風險（如冰雹全損），最適合的應對策略是？',
            'options': ['忽略，因發生機率低', '保險轉移為主，並預留應急準備金', '完全自留並建立大量現金儲備'],
            'correct': 1,
            'explanation': '低頻高損的風險最適合透過保險轉移，將尾部風險外部化；同時保留小額應急準備金應對自留額度與免賠額。',
        },
        {
            'id': 5,
            'question': '酒莊整合 ESG 策略後，哪個行動最能同時提升長期韌性並降低融資利率？',
            'options': ['削減 ESG 支出以保留現金', '取得 ISO 14001 或 HVE 認證並向融資方揭露 ESG 績效', '僅在官方網站發布環境宣言'],
            'correct': 1,
            'explanation': '持有 ESG 認證並透明揭露績效，能符合永續貸款（SLL）條件，使酒莊獲得利率折扣，同時提升機構投資人與銀行的長期信任度。',
        },
    ],
    'l4-8': [
        {
            'id': 4,
            'question': '根據 GHG Protocol，波爾多葡萄酒出廠後玻璃瓶在消費者端廢棄所產生的排放屬於哪個範疇？',
            'options': ['範疇一（直接排放）', '範疇三（價值鏈下游活動）', '範疇二（購入電力）'],
            'correct': 1,
            'explanation': '消費者使用後廢棄屬範疇三下游活動；玻璃瓶製造（採購）屬範疇三上游活動。兩者均為範疇三，與酒莊直接能源使用無關。',
        },
        {
            'id': 5,
            'question': '波爾多酒莊申請 HVE（高環境價值）三星認證，哪個條件是必要的？',
            'options': ['員工薪資達法國行業平均', '生物多樣性、植保、施肥、水管理四指標同時達到門檻', '年度碳排放量低於 500 噸'],
            'correct': 1,
            'explanation': 'HVE 三星要求在生物多樣性保護、植保策略、施肥管理、水資源管理四個面向均須達到規定門檻，任一不達標即無法通過。',
        },
    ],
    'l4-9': [
        {
            'id': 4,
            'question': '感官評估小組校準訓練中，為確保評委對「中等以上單寧」有一致認知，應首先採用哪種方法？',
            'options': ['讓評委獨立品評後集體討論差異', '提供標準品溶液（如單寧酸標準液）建立共識感知閾值', '播放教學影片說明單寧定義'],
            'correct': 1,
            'explanation': '標準品溶液能讓評委對特定感官屬性建立可重現的基準感知，是 ISO 13300 感官評估標準推薦的校準黃金標準。',
        },
        {
            'id': 5,
            'question': '高規格盲品競賽中，面對一支有陳年潛力但年份不明的酒，最有效的策略是？',
            'options': ['猜測最近年份以降低猜錯成本', '先鎖定品種與氣候區，再利用酸度與酚類演化縮小年份範圍', '放棄年份判斷，全力描述香氣複雜度'],
            'correct': 1,
            'explanation': '競賽盲品的分層排除法：先確認品種與氣候（可信度高），再從澀感軟化程度、第三香氣發展縮小年份範圍，系統性提升整體準確率。',
        },
    ],
}

# l4-10, l4-11 使用 object-based options 格式
NEW_QUESTIONS_OBJECT = {
    'l4-10': [
        {
            'id': 4,
            'question': '某酒莊建立資料湖整合 IoT 感測器、銷售 ERP 與社群媒體三類資料。以下哪項是最優先需解決的資料治理問題？',
            'options': [
                {'id': 'a', 'text': '選擇雲端服務商品牌', 'explanation': '供應商選擇重要，但不是首要的治理問題。'},
                {'id': 'b', 'text': '建立資料字典與元數據標準，統一跨系統欄位定義', 'explanation': '✓ 正確! 跨異質系統整合最常見的失敗原因是語義不一致（如「產品編號」在三系統定義各異），元數據標準化是資料治理的基礎。', 'correct': True},
                {'id': 'c', 'text': '優先購買 BI 視覺化工具', 'explanation': 'BI 工具是展示層，底層治理未解決，視覺化只是美化髒數據。'},
                {'id': 'd', 'text': '聘請更多 IT 人員', 'explanation': '人力是執行資源，但治理框架缺失無法靠增員解決。'},
            ],
        },
        {
            'id': 5,
            'question': '酒莊品質預測模型在訓練集準確率 98%，驗證集僅 64%。此情況最可能是？',
            'options': [
                {'id': 'a', 'text': '欠擬合：模型過於簡單，兩集準確率均低', 'explanation': '欠擬合表現為訓練集與驗證集均低，此案例訓練集高達 98%，排除欠擬合。'},
                {'id': 'b', 'text': '過擬合：模型記住訓練數據，泛化能力差', 'explanation': '✓ 正確! 訓練集遠高於驗證集（98% vs 64%）是過擬合的典型特徵，應加入正則化或增加訓練數據量。', 'correct': True},
                {'id': 'c', 'text': '資料洩漏：測試數據混入訓練集', 'explanation': '資料洩漏通常使驗證集準確率也虛高，非此案例現象。'},
                {'id': 'd', 'text': '模型正確，差距在容許範圍內', 'explanation': '34% 的差距遠超容許範圍（通常 <5%），屬嚴重過擬合。'},
            ],
        },
    ],
    'l4-11': [
        {
            'id': 4,
            'question': '投資人持有某頂級波爾多期酒，市場傳言該酒莊考慮退出 En Primeur 系統轉為直售。此消息對持有者最主要的風險影響是？',
            'options': [
                {'id': 'a', 'text': '評分因此下修，影響酒質聲譽', 'explanation': '釀造模式改變與評分無直接關係。'},
                {'id': 'b', 'text': '退出 EP 改變稀缺性溢價結構，可能壓低二級市場期酒流通溢價', 'explanation': '✓ 正確! 退出 En Primeur 使買家喪失傳統期酒定價優勢，釀酒莊直售改變供需結構，歷史案例（如 Latour 2012 年退出）顯示對二級市場流通溢價有結構性下行影響。', 'correct': True},
                {'id': 'c', 'text': '歐元匯率波動影響收益', 'explanation': '匯率是一般性風險，非退出 EP 的特定影響。'},
                {'id': 'd', 'text': '倉儲保險費用上升', 'explanation': '保險費與酒莊銷售模式無關。'},
            ],
        },
        {
            'id': 5,
            'question': '葡萄酒投資組合 60% 波爾多一級莊 + 30% 勃根地特級園 + 10% 其他，Sharpe Ratio = 0.85。為提升 Sharpe Ratio，最有效的調整是？',
            'options': [
                {'id': 'a', 'text': '全集中波爾多一級莊，提高集中度', 'explanation': '集中持倉提高波動性（σp），Sharpe Ratio = (Rp - Rf) / σp 通常下降。'},
                {'id': 'b', 'text': '引入低相關性資產（如義大利 Super Tuscan、年份香檳），降低組合波動', 'explanation': '✓ 正確! 降低 σp 可在相同預期回報下提升 Sharpe Ratio。低相關性資產是教科書級多元化策略，歷史上波爾多與勃根地相關性約 0.65~0.75，引入義大利/香檳資產可顯著降低組合波動。', 'correct': True},
                {'id': 'c', 'text': '增加期酒槓桿操作', 'explanation': '槓桿放大波動和損失，Sharpe Ratio 通常惡化。'},
                {'id': 'd', 'text': '持倉不動，等待市場回升', 'explanation': '被動持有不改變組合結構，Sharpe Ratio 由持倉決定。'},
            ],
        },
    ],
}

# ─────────────────────────────────────────────
# EN 翻譯（簡單格式：l4-3 to l4-9）
# ─────────────────────────────────────────────
EN_QUESTIONS = {
    'l4-3': [
        {
            'id': 4,
            'question': 'When evaluating the quality of oak wood sourcing, which indicator best reflects consistency in ventilation and aroma release?',
            'options': ['Annual ring density (rings per cm)', 'Physical stave dimensions', 'Current barrel inventory at the winery'],
            'correct': 0,
            'explanation': 'Annual ring density directly governs pore structure and the release rate of aroma compounds (e.g., lactones, vanillin), making it the core indicator for sourcing and grading.',
        },
        {
            'id': 5,
            'question': 'When calculating the Total Cost of Ownership (TCO) for a multi-vessel strategy, which cost is most often underestimated?',
            'options': ['New oak barrel procurement', 'Cleaning water consumption and periodic maintenance of concrete vessels', 'Stainless steel tank purchase price'],
            'correct': 1,
            'explanation': 'Concrete vessels appear low-maintenance but require large volumes of water and specialist cleaning procedures; long-term TCO is frequently higher than projected, unlike stainless steel which is costly upfront but easy to clean.',
        },
    ],
    'l4-4': [
        {
            'id': 4,
            'question': 'A winery wants to identify which cost items are "hardest to compress" under pricing pressure. Which analytical tool should be prioritised?',
            'options': ['Vertical ratio analysis (P&L percentage)', 'Activity-Based Costing (ABC)', 'Pareto analysis'],
            'correct': 1,
            'explanation': 'ABC allocates costs by activity drivers, precisely identifying the highest resource-consuming activities and distinguishing fixed, inflexible cost items from variable ones.',
        },
        {
            'id': 5,
            'question': 'A vineyard investment yields an IRR below the winery\'s Weighted Average Cost of Capital (WACC). What is the correct capital budgeting decision?',
            'options': ['Return exceeds capital cost — proceed', 'Return fails to cover capital cost — reject', 'IRR and WACC have no direct relationship'],
            'correct': 1,
            'explanation': 'When IRR < WACC, the project cannot generate sufficient returns to cover financing costs. Standard capital budgeting theory requires rejection or redesign of the project.',
        },
    ],
    'l4-5': [
        {
            'id': 4,
            'question': 'A winery offers an entry-level, mid-range, and premium wine all under the same brand name. What is the greatest risk?',
            'options': ['Reduced consumer brand recognition', 'Premium tier prestige diluted by entry-level mass exposure (brand dilution)', 'Increased warehouse management complexity'],
            'correct': 1,
            'explanation': 'Without brand architecture separation, heavy entry-level distribution erodes the exclusivity perception of the premium tier — a classic brand dilution effect.',
        },
        {
            'id': 5,
            'question': 'Bordeaux brands have long occupied the "high perceived quality, high perceived price" quadrant. If a new competitor enters the same quadrant, what positioning strategy should they prioritise?',
            'options': ['Lower pricing to capture market share', 'Differentiate through unique terroir or scarcity narratives', 'Mirror existing brand messaging'],
            'correct': 1,
            'explanation': 'In a red-ocean quadrant, differentiation is the only sustainable breakthrough strategy. Scarcity and unique terroir storytelling build defensive moats against price-based competition.',
        },
    ],
    'l4-6': [
        {
            'id': 4,
            'question': 'A new blend contains 8% of an unapproved variety and applies for AOC certification. What is the most likely outcome?',
            'options': ['AOC granted; the excess percentage is waived', 'AOC denied; the product must be downgraded to IGP or Vin de France', 'INAO approval granted upon submission of a scientific report'],
            'correct': 1,
            'explanation': 'AOC regulations strictly govern permitted varieties, blending ratios, and geographic origin. Use of non-approved varieties — even in small proportions — results in automatic disqualification.',
        },
        {
            'id': 5,
            'question': 'What is the industry best-practice audit frequency when establishing an internal compliance management system?',
            'options': ['One in-depth external audit every five years', 'Annual self-audit plus third-party certification review every three years', 'Audits only triggered by regulatory updates'],
            'correct': 1,
            'explanation': 'Annual self-audits identify compliance gaps in real time; three-year external certification provides independent verification. This combination aligns with ISO 19600 and AOC compliance management standards.',
        },
    ],
    'l4-7': [
        {
            'id': 4,
            'question': 'A risk matrix shows a "high-impact, low-probability" risk (e.g., total hail loss). Which response strategy is most appropriate?',
            'options': ['Ignore it — the probability is low', 'Transfer via insurance while maintaining an emergency contingency fund', 'Fully self-insure with a large cash reserve'],
            'correct': 1,
            'explanation': 'Low-frequency, high-severity risks are best transferred through insurance to externalise tail risk; a small contingency fund covers deductibles and self-retained layers.',
        },
        {
            'id': 5,
            'question': 'After integrating ESG into long-term strategy, which action most effectively improves both resilience and lowers borrowing costs?',
            'options': ['Cut ESG spending to preserve cash', 'Obtain ISO 14001 or HVE certification and disclose ESG performance to lenders', 'Publish an environmental statement on the website only'],
            'correct': 1,
            'explanation': 'ESG certification and transparent disclosure enable access to Sustainability-Linked Loans (SLLs) with interest rate discounts, while building long-term credibility with institutional investors and banks.',
        },
    ],
    'l4-8': [
        {
            'id': 4,
            'question': 'Under the GHG Protocol, emissions from glass bottles discarded by consumers after use fall under which scope?',
            'options': ['Scope 1 (direct emissions)', 'Scope 3 (downstream value chain)', 'Scope 2 (purchased electricity)'],
            'correct': 1,
            'explanation': 'Post-consumer disposal is a Scope 3 downstream activity; bottle manufacturing (procurement) is Scope 3 upstream. Both are Scope 3 — unrelated to the winery\'s direct energy use.',
        },
        {
            'id': 5,
            'question': 'A Bordeaux winery applies for HVE (Haute Valeur Environnementale) Level 3 certification. Which condition is mandatory?',
            'options': ['Employee wages at or above the industry average', 'All four indicators — biodiversity, crop protection, fertilisation, and water management — must simultaneously meet thresholds', 'Annual carbon emissions below 500 tonnes'],
            'correct': 1,
            'explanation': 'HVE Level 3 requires all four dimensions (biodiversity, crop protection strategy, fertilisation management, water resources) to simultaneously reach defined thresholds; failing any single one results in disqualification.',
        },
    ],
    'l4-9': [
        {
            'id': 4,
            'question': 'During sensory panel calibration training, to ensure evaluators share a consistent perception of "medium-plus tannins", what should be used first?',
            'options': ['Independent tasting followed by group discussion of differences', 'Reference standard solutions (e.g., tannic acid standards) to establish consensus perception thresholds', 'Educational videos explaining tannin definition'],
            'correct': 1,
            'explanation': 'Reference standard solutions allow evaluators to establish reproducible sensory baselines for specific attributes — the gold standard recommended by ISO 13300 for sensory panel calibration.',
        },
        {
            'id': 5,
            'question': 'In a high-level blind tasting competition, facing a wine with clear ageing potential but an uncertain vintage, what is the most effective strategy?',
            'options': ['Guess the most recent vintage to minimise error risk', 'Lock in variety and climate zone first, then use acidity and phenolic evolution to narrow the vintage window', 'Abandon vintage estimation entirely and focus on describing aromatic complexity'],
            'correct': 1,
            'explanation': 'Competitive blind tasting uses a layered elimination approach: confirm variety and climate region (high reliability), then use phenolic development (tannin softening, third-aroma stage) to systematically narrow the vintage range.',
        },
    ],
}

# EN for l4-10 and l4-11 (object format — translated question text only for locale)
EN_QUESTIONS_OBJECT_TEXT = {
    'l4-10': [
        {
            'id': 4,
            'question': 'A winery builds a data lake integrating IoT sensors, sales ERP, and social media. Which data governance issue should be addressed first?',
            'options_text': [
                'Choosing the cloud provider brand',
                'Establishing a data dictionary and metadata standards to unify cross-system field definitions',
                'Prioritising purchase of a BI visualisation tool',
                'Hiring more IT staff',
            ],
            'options_explanation': [
                'Vendor selection matters, but is not the primary governance issue.',
                '✓ Correct! The most common failure in heterogeneous system integration is semantic inconsistency (e.g., "product code" defined differently across three systems). Metadata standardisation is the foundation of data governance.',
                'BI tools are the presentation layer; without solving underlying governance, visualisation only beautifies dirty data.',
                'Headcount is an execution resource; a missing governance framework cannot be solved by adding people.',
            ],
            'correct_idx': 1,
        },
        {
            'id': 5,
            'question': 'A wine quality prediction model achieves 98% accuracy on training data but only 64% on validation data. What is the most likely diagnosis?',
            'options_text': [
                'Underfitting: model too simple, both sets perform poorly',
                'Overfitting: model memorises training data with poor generalisation',
                'Data leakage: test data mixed into training set',
                'Model is correct; the gap is within acceptable limits',
            ],
            'options_explanation': [
                'Underfitting shows low accuracy on both sets; training at 98% rules this out.',
                '✓ Correct! Training set far exceeding validation set (98% vs 64%) is the hallmark of overfitting. Add regularisation or increase training data volume.',
                'Data leakage typically inflates validation accuracy too — not seen here.',
                'A 34-point gap far exceeds acceptable limits (typically <5%); this is severe overfitting.',
            ],
            'correct_idx': 1,
        },
    ],
    'l4-11': [
        {
            'id': 4,
            'question': 'An investor holds a top Bordeaux en primeur position. News circulates that the château is considering withdrawing from the En Primeur system and switching to direct sales. What is the primary risk impact on the current holder?',
            'options_text': [
                'Scores downgraded, affecting wine reputation',
                'Withdrawal restructures the scarcity premium model, potentially compressing secondary market liquidity premiums',
                'Euro exchange rate volatility affecting returns',
                'Storage insurance premiums increase',
            ],
            'options_explanation': [
                'Production method changes bear no direct relationship to critic scores.',
                '✓ Correct! Withdrawing from En Primeur removes buyers\' traditional pricing advantage and reshapes supply/demand dynamics. Historical precedent (e.g., Latour\'s 2012 exit) shows a structural downward impact on secondary market circulation premiums.',
                'Currency risk is a general factor, not specific to EP withdrawal.',
                'Insurance costs are unrelated to the winery\'s sales model.',
            ],
            'correct_idx': 1,
        },
        {
            'id': 5,
            'question': 'A wine investment portfolio: 60% Bordeaux First Growths + 30% Burgundy Grand Crus + 10% other has a Sharpe Ratio of 0.85. What adjustment most effectively improves the Sharpe Ratio?',
            'options_text': [
                'Concentrate entirely in Bordeaux First Growths',
                'Introduce low-correlation assets (e.g., Italian Super Tuscans, vintage Champagne) to reduce portfolio volatility',
                'Increase exposure through en primeur leverage',
                'Hold current positions and wait for market recovery',
            ],
            'options_explanation': [
                'Concentration increases σp; Sharpe = (Rp - Rf) / σp typically declines.',
                '✓ Correct! Lowering σp improves Sharpe Ratio at the same expected return. Low-correlation assets are the textbook diversification strategy — historical Bordeaux/Burgundy correlation ~0.65-0.75; adding Italian/Champagne assets meaningfully reduces portfolio volatility.',
                'Leverage amplifies volatility and losses; Sharpe Ratio usually worsens.',
                'Passive holding does not change portfolio structure; Sharpe Ratio is determined by positions, not waiting.',
            ],
            'correct_idx': 1,
        },
    ],
}


def js_string(s):
    """Escape a string for embedding in JS single-quoted context."""
    return s.replace('\\', '\\\\').replace("'", "\\'")


def format_simple_question(q, indent='      '):
    opts = ',\n'.join(f"{indent}  '{js_string(o)}'" for o in q['options'])
    return (
        f"{indent}{{\n"
        f"{indent}  id: {q['id']},\n"
        f"{indent}  question: '{js_string(q['question'])}',\n"
        f"{indent}  options: [\n{opts}\n{indent}  ],\n"
        f"{indent}  correct: {q['correct']},\n"
        f"{indent}  explanation: '{js_string(q['explanation'])}'\n"
        f"{indent}}}"
    )


def format_object_option(opt, indent='          '):
    correct_str = f", correct: true" if opt.get('correct') else ''
    return (
        f"{indent}{{ id: '{opt['id']}', text: '{js_string(opt['text'])}', "
        f"explanation: '{js_string(opt['explanation'])}'{correct_str} }}"
    )


def format_object_question(q, indent='      '):
    opts = ',\n'.join(format_object_option(o, indent + '  ') for o in q['options'])
    return (
        f"{indent}{{\n"
        f"{indent}  id: {q['id']},\n"
        f"{indent}  question: '{js_string(q['question'])}',\n"
        f"{indent}  options: [\n{opts}\n{indent}  ]\n"
        f"{indent}}}"
    )


def add_questions_simple(filepath, new_qs):
    """Insert simple-format questions before passingScore line."""
    content = filepath.read_text(encoding='utf-8')
    insertion = '\n' + ',\n'.join(format_simple_question(q) for q in new_qs) + ','
    # Insert before `    passingScore:`
    new_content = content.replace(
        "    ],\n    passingScore:",
        f"    {insertion.strip()}\n    ],\n    passingScore:"
    )
    if new_content == content:
        print(f"  WARNING: no change made to {filepath.name}")
        return False
    filepath.write_text(new_content, encoding='utf-8')
    return True


def add_questions_object(filepath, new_qs):
    """Insert object-format questions before closing `]\n  }\n})`."""
    content = filepath.read_text(encoding='utf-8')
    insertion = '\n' + ',\n'.join(format_object_question(q) for q in new_qs)
    anchor = "    ]\n  }\n})"
    closing = "    ]\n  }\n})"
    new_content = content.replace(
        anchor,
        "    " + insertion.strip() + "\n" + closing
    )
    if new_content == content:
        print(f"  WARNING: no change made to {filepath.name}")
        return False
    filepath.write_text(new_content, encoding='utf-8')
    return True


def sort_key(k):
    parts = k.split('.')
    result = []
    for p in parts:
        try:
            result.append((0, int(p)))
        except ValueError:
            result.append((1, p))
    return result


def update_locale(locale_path, quiz_slide_idx, new_qs, is_object_format=False):
    """Add new question keys to a locale JSON file."""
    data = json.loads(locale_path.read_text(encoding='utf-8'))
    prefix = f'slides.{quiz_slide_idx}.questions'
    for q in new_qs:
        i = q['id'] - 1  # 0-based
        data[f'{prefix}.{i}.question'] = q['question']
        if not is_object_format:
            for j, opt in enumerate(q['options']):
                data[f'{prefix}.{i}.options.{j}'] = opt
            data[f'{prefix}.{i}.explanation'] = q['explanation']
        else:
            # Object format: only question text + each option's text and explanation
            for j, opt in enumerate(q['options_text']):
                data[f'{prefix}.{i}.options.{j}.text'] = opt
                data[f'{prefix}.{i}.options.{j}.explanation'] = q['options_explanation'][j]
    sorted_data = {k: data[k] for k in sorted(data.keys(), key=sort_key)}
    locale_path.write_text(json.dumps(sorted_data, ensure_ascii=False, indent=2), encoding='utf-8')
    return len(sorted_data)


# ─────────────────────────────────────────────
# Main
# ─────────────────────────────────────────────
QUIZ_SLIDE = {  # slide index for quiz
    'l4-3': 12, 'l4-4': 12, 'l4-5': 12, 'l4-6': 12,
    'l4-7': 12, 'l4-8': 12, 'l4-9': 12, 'l4-10': 12, 'l4-11': 12,
}

print("=== Step 1: Update JS files ===")
for lesson_id, new_qs in NEW_QUESTIONS.items():
    js_path = BASE / 'src' / 'data' / 'lessons' / f'{lesson_id}.js'
    ok = add_questions_simple(js_path, new_qs)
    print(f"  {lesson_id}.js: {'OK (+2 questions)' if ok else 'FAILED'}")

for lesson_id, new_qs in NEW_QUESTIONS_OBJECT.items():
    js_path = BASE / 'src' / 'data' / 'lessons' / f'{lesson_id}.js'
    ok = add_questions_object(js_path, new_qs)
    print(f"  {lesson_id}.js: {'OK (+2 questions)' if ok else 'FAILED'}")

print()
print("=== Step 2: Update EN locale files ===")
for lesson_id, new_qs in EN_QUESTIONS.items():
    en_path = BASE / 'src' / 'locales' / 'en' / 'lessons' / 'bordeaux' / f'{lesson_id}.json'
    n = update_locale(en_path, QUIZ_SLIDE[lesson_id], new_qs)
    print(f"  {lesson_id} en: {n} keys")

for lesson_id, new_qs in EN_QUESTIONS_OBJECT_TEXT.items():
    en_path = BASE / 'src' / 'locales' / 'en' / 'lessons' / 'bordeaux' / f'{lesson_id}.json'
    n = update_locale(en_path, QUIZ_SLIDE[lesson_id], new_qs, is_object_format=True)
    print(f"  {lesson_id} en (object): {n} keys")

print()
print("=== Done! ===")
