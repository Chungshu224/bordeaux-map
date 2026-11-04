// 全球氣泡酒專論 Level 2 課文（階段 C）
// 每個產區課用同一組四問比較：①基酒品種與氣候 ②釀法與陳年 ③法規限制 ④風格與價位。
// 數字依 SPARKLING_FACT_CHECK.md：已證實者直接寫；僅二手者標「（二手）」；未證實者標 ⚠，不進測驗。

const info = (title, content) => ({ type: 'info', title, content })
const mis = (content) => ({ type: 'info', title: '常見誤解', content })
const compare = (headers, rows) => ({ type: 'compare', props: { headers, rows } })
const steps = (title, list) => ({ type: 'steps', title, steps: list.map(s => (/^\d+$/.test(s.title || '') ? { text: s.text } : s)) })
const expand = (label, content) => ({ type: 'expand', label, content })
const FOUR_Q = ['基酒品種與氣候', '釀法與陳年', '法規限制', '風格與價位']

export const LEVEL2_CONTENT = {
  // ───────────────────────── sp-l2-1 香檳 I ─────────────────────────
  'sp-l2-1': {
    blocks: [
      info('四問', '本課與之後的產區課都用同一組問題：<b>①基酒品種與氣候 ②釀法與陳年 ③法規限制 ④風格與價位</b>。'),
      compare(
        ['項目（資料年 2023，Comité Champagne）', '數字'],
        [
          ['葡萄園面積', '34,200 公頃'],
          ['cru（村莊）數', '319'],
          ['種植戶', '約 16,200（管理約 90% 的葡萄園）'],
          ['香檳廠 (maisons)', '370'],
          ['合作社', '130']
        ]
      ),
      info('① 氣候與品種', '香檳位於葡萄種植的北方邊緣，成熟度是挑戰，也因此得到高酸、低酒精的理想基酒。土壤以白堊為主要特徵。三大品種是 <b>Pinot Noir、Chardonnay、Meunier</b>，另有四種稀有品種，合計約 0.3%（二手）。各品種的面積比例各來源有出入（例如 Chardonnay 31% 或 32%），<b>只講大意、不進測驗</b>。'),
      compare(
        ['四大產區', '說明'],
        [
          ['Montagne de Reims', '以黑品種為主的產區'],
          ['Vallée de la Marne', 'Meunier 的重要產區'],
          ['Côte des Blancs', 'Chardonnay 的核心'],
          ['Côte des Bar', '位於南方，含 64 個村莊（2022）']
        ]
      ),
      info('村莊分級', '17 個 Grand Cru 已有二手來源確認；Premier Cru 的數目（常見說法 42）⚠ 未能查證，不要背。Côte de Sézanne 是否列為獨立產區 ⚠ 亦未查證。'),
      info('② 釀法與陳年', '傳統法。最低陳年：<b>NV 至少 15 個月、Vintage 至少 36 個月</b>（Comité Champagne 官方說明）。酒渣陳年中的「12 個月」這個子數字官方頁面沒有列出 ⚠。'),
      info('③ 法規：產量', '香檳每年由 Comité 訂定可銷售產量：2023 年 11,400、2024 年 10,000、2025 年 9,000 kg/ha；歐盟層級上限為 15,500 kg/ha。注意這個數字<b>每年變</b>，考試與報告都要標年份。'),
      expand('⚠ 未能查證的細節', '• 壓榨規定「4,000 公斤葡萄取 2,550 公升汁（2,050 ＋ 500）」⚠<br>• 採收一律手採、整串壓榨等常見說法，本輪未取得官方原文 ⚠<br>• 瓶內壓力（常見說法約 5–6 atm）：只有 Franciacorta 有官方佐證，香檳 ⚠'),
      info('④ 風格與價位', '香檳是全球氣泡酒的價格標竿，傳統法加上較長的酒渣陳年成本，使價位整體高於多數產區。風格與生產者結構見下一課。')
    ],
    terms: [
      { term: 'cru', def: '在香檳指一個村莊（共 319 個），用於分級概念。' },
      { term: 'NV / Vintage', def: '無年份混調 / 單一年份。NV 最低陳年 15 個月、Vintage 36 個月。' },
      { term: 'Comité Champagne (CIVC)', def: '香檳的產業組織，每年公布產量與統計。' }
    ],
    practice: {
      prompt: '用四問（品種與氣候、釀法與陳年、法規、風格與價位）簡述香檳。',
      points: ['氣候：北方邊緣、白堊；三大品種 Pinot Noir、Chardonnay、Meunier', '釀法：傳統法；NV 至少 15 個月、Vintage 至少 36 個月', '法規：產量每年由 Comité 訂定（如 2025 年 9,000 kg/ha），要標年份', '風格與價位：全球標竿，成本與品牌使價位偏高', '不要背品種面積比例（來源有出入）']
    },
    quiz: [
      { q: '香檳 NV 與 Vintage 的最低陳年分別是？', options: ['NV 9 個月、Vintage 18 個月', 'NV 15 個月、Vintage 36 個月', 'NV 12 個月、Vintage 24 個月', 'NV 24 個月、Vintage 60 個月'], answer: 1, explain: 'Comité Champagne 官方說明：NV 至少 15 個月，Vintage 至少 36 個月。' },
      { q: '下列哪一個是香檳的子產區？', options: ['Côte des Bar', 'Côte de Nuits', 'Côte Rôtie', 'Côtes du Rhône'], answer: 0, explain: 'Côte des Bar 位於香檳南部；其他三者分屬勃根地與隆河。' }
    ]
  },

  // ───────────────────────── sp-l2-2 香檳 II ─────────────────────────
  'sp-l2-2': {
    blocks: [
      info('調配是香檳的核心', '香檳 NV 要年年維持「酒廠風格」，靠的是<b>調配 (assemblage)</b>：混合不同品種、不同村莊、不同年份的基酒，並加入<b>儲備酒 (reserve wines)</b>。年份差異大時，儲備酒能補足酸度與風味。'),
      steps('風格如何形成', [
        { title: '調配', text: '品種比例、村莊來源、儲備酒比例決定骨架。' },
        { title: '氧化 vs 還原', text: '氧化式處理（如部分桶發酵、較多氧氣接觸）傾向堅果、烘烤風味；還原式（不鏽鋼、避氧）傾向果香與清爽。各酒廠取向不同。' },
        { title: '酒渣陳年', text: '陳年越久，自溶風味傾向越明顯。' },
        { title: 'dosage', text: '決定最終甜度與風格輪廓。' }
      ]),
      compare(
        ['風格', '意義'],
        [
          ['NV (Non-Vintage)', '混調多個年份，追求酒廠風格一致'],
          ['Vintage / Millésimé', '單一年份，通常只在表現好的年份宣告，最低陳年 36 個月'],
          ['Blanc de Blancs', '只用白葡萄（通常是 Chardonnay）'],
          ['Blanc de Noirs', '只用黑葡萄（Pinot Noir、Meunier）'],
          ['Rosé', '香檳允許以紅、白靜態酒調配做粉紅（另有浸皮法）'],
          ['Prestige Cuvée', '酒廠的頂級系列，通常陳年更久、價位更高']
        ]
      ),
      mis('「Blanc de Noirs 是紅酒。」它是用黑皮品種輕柔壓榨取汁、不浸皮做成的白（或淡金）色氣泡酒。'),
      compare(
        ['標籤上的生產者代碼', '意思'],
        [
          ['NM (Négociant Manipulant)', '購買葡萄或基酒的酒廠，大廠多屬此類'],
          ['RM (Récoltant Manipulant)', '種植者自己釀自己的葡萄，以自有葡萄園為主'],
          ['CM (Coopérative de Manipulation)', '合作社釀製並以社名銷售'],
          ['RC / SR / ND / MA', '其他類別，例如合作社成員或買家品牌（細節 ⚠ 未逐一核對）']
        ]
      ),
      info('生產者結構', '2023 年資料：種植戶約 16,200、香檳廠 370、合作社 130。種植戶管理大部分葡萄園，但多數葡萄賣給酒廠，這是香檳「葡萄與品牌分工」的結構。各家出貨量逐年變動，⚠ 不進測驗。')
    ],
    terms: [
      { term: '儲備酒 (reserve wine)', def: '保留往年的基酒，用來調配 NV。' },
      { term: '調配 (assemblage)', def: '混合不同品種、地塊與年份的基酒。' },
      { term: 'NM / RM / CM', def: '標籤上的生產者類別代碼。' }
    ],
    practice: {
      prompt: '說明香檳 NV 如何維持一致的酒廠風格，並解釋 NM 與 RM 的差別。',
      points: ['調配：混合不同品種、地塊與年份', '儲備酒：補足不同年份的酸度與風味', '風格取向：氧化式或還原式處理', 'NM：購買葡萄或基酒的酒廠；RM：種植者用自有葡萄釀製並銷售', '補一句：Vintage 通常只在好年份宣告']
    },
    quiz: [
      { q: '香檳 NV 能年年維持相近風格，最主要靠什麼？', options: ['每年用同一個地塊', '調配多個年份並使用儲備酒', '只用一種品種', '拉長除渣後的靜置時間'], answer: 1, explain: '調配（assemblage）與儲備酒讓酒廠風格年年一致。' },
      { q: '標籤上標示 RM，代表？', options: ['合作社', '買葡萄的酒廠', '種植者用自有葡萄釀製並銷售', '買家品牌'], answer: 2, explain: 'RM (Récoltant Manipulant) 是種植者自己釀自己的酒。' }
    ]
  },

  // ───────────────────────── sp-l2-3 法國其他 ─────────────────────────
  'sp-l2-3': {
    blocks: [
      info('Crémant 是什麼', 'Crémant 是法國香檳以外、以傳統法釀製的氣泡酒 appellation 的總稱，各產區（Alsace、Bourgogne、Loire、Limoux、Jura、Die、Bordeaux、Savoie 等）各有規格。<b>各 Crémant 的品種與陳年規定都不同</b>，不能用一套數字背完。'),
      compare(
        ['Crémant', '品種', '陳年與其他', '查證狀態'],
        [
          ['Alsace', 'Auxerrois、Chardonnay、Pinot Blanc、Pinot Gris、Pinot Noir、Riesling；Rosé 僅 Pinot Noir', '酒渣至少 9 個月；手採；每 150 kg 葡萄取 100 L 汁', '✅ 但來源為 2025 修訂草案，可能再改'],
          ['Bourgogne', 'Pinot Noir、Chardonnay、Pinot Gris、Pinot Blanc 合計至少 30%；另可用 Gamay、Aligoté、Melon、Sacy', '酒渣至少 9 個月；自 tirage 起至少 12 個月才可上市；瓶內壓力至少 4 bar', '⚠ 2021 修訂稿；Gamay 上限 20% 或 30% 兩說並存，須取得現行版本'],
          ['Loire', 'Chenin、Chardonnay、Orbois；紅品種含 Cabernet Franc 等', '自 tirage 起至少 12 個月；最大產量 74 hl/ha', '✅ eAmbrosia 規格；⚠ 未見 Chenin 為最低比例，措辭待確認'],
          ['Limoux（Crémant）', 'Chardonnay 40–70%、Chenin 20–40%、Mauzac 至多 20%、Pinot Noir 至多 10%', '酒渣至少 12 個月', '✅（二手）']
        ]
      ),
      info('與香檳的差異', '共同點是傳統法與瓶內陳年；差異在<b>最低陳年較短</b>（如 Alsace、Bourgogne 酒渣 9 個月，對比香檳 NV 15 個月）、品種更多元、價位通常較低。⚠ 採收與壓榨規定各產區不同，未逐一核對。'),
      mis('「Crémant 都有一樣的規定。」不是。各 Crémant 的品種、陳年、產量各自成冊；Crémant de Bourgogne 的規格還有修訂稿，考試前必須查現行版本。'),
      compare(
        ['其他法國氣泡', '重點'],
        [
          ['Blanquette de Limoux', 'Mauzac 至少 90%（二手）；Limoux 另有傳說中的歷史淵源 ⚠ 年代待查'],
          ['Clairette de Die（祖傳法）', 'Méthode Dioise Ancestrale：Muscat à petits grains 至少 75%、殘糖至少 35 g/L、雙重裝瓶（二手）。同產區的 Crémant de Die 則是傳統法'],
          ['Saumur、Vouvray', '以 Chenin Blanc 為主的氣泡酒，列在 WSET D4 範圍清單中；詳細規定 ⚠ 未取得'],
          ['Jura、Bordeaux、Savoie、Languedoc 的 Crémant', '存在，但各自規格 ⚠ 未能查證']
        ]
      ),
      info('Blanquette Méthode Ancestrale', '100% Mauzac 的祖傳法 Blanquette，是 Limoux 的另一種風格，細節 ⚠ 未能查證，只需知道它是祖傳法。')
    ],
    terms: [
      { term: 'Crémant', def: '法國香檳以外、以傳統法釀製的氣泡酒 appellation 總稱。' },
      { term: 'Méthode Dioise Ancestrale', def: 'Die 的祖傳法，以 Muscat à petits grains 為主。' },
      { term: 'Mauzac', def: 'Limoux 的特色白品種，用於 Blanquette 與 Crémant。' }
    ],
    practice: {
      prompt: '比較 Crémant d\'Alsace 與 Crémant de Loire，並說明為何不能把所有 Crémant 當成一套規則。',
      points: ['Alsace：六個品種，Rosé 僅 Pinot Noir；酒渣至少 9 個月（2025 草案）', 'Loire：Chenin、Chardonnay、Orbois 等；自 tirage 起至少 12 個月', '各 Crémant 的品種、陳年與產量各自成冊', '與香檳比：陳年較短、品種更多元、價位較低', '誠實標示：Bourgogne 規格尚有修訂稿，需取得現行版本']
    },
    quiz: [
      { q: 'Crémant de Loire 的最低陳年規定（自 tirage 起算）是？', options: ['6 個月', '12 個月', '24 個月', '36 個月'], answer: 1, explain: 'eAmbrosia 規格列出：自 tirage 起至少 12 個月。' },
      { q: 'Clairette de Die 的 Méthode Dioise Ancestrale 主要使用哪個品種？', options: ['Chenin Blanc', 'Muscat à petits grains', 'Mauzac', 'Gamay'], answer: 1, explain: 'Méthode Dioise Ancestrale：Muscat à petits grains 至少 75%（二手），為祖傳法。' }
    ]
  },

  // ───────────────────────── sp-l2-4 西班牙 ─────────────────────────
  'sp-l2-4': {
    blocks: [
      compare(
        FOUR_Q.map(t => t),
        [[
          '白：Macabeo、Xarel·lo、Parellada，另有 Malvasía（Subirat Parent）、Chardonnay；紅：Garnacha、Monastrell、Pinot Noir、Trepat（二手）。氣候偏溫暖地中海，常見方法是較早採收保住酸度。',
          '傳統法。',
          'Cava 為 DO，分陳年等級（見下）；2022-01-01 起有新標示。',
          '以平價著稱，高陳年等級與 Paraje Calificado 走高價位。'
        ]]
      ),
      compare(
        ['Cava 等級', '最低陳年'],
        [
          ['Cava（Guarda）', '9 個月'],
          ['Reserva', '18 個月（⚠ 來源有出入：另有 15 個月之說）'],
          ['Gran Reserva', '30 個月'],
          ['Cava de Paraje Calificado', '36 個月']
        ]
      ),
      mis('「Cava 只產自 Penedès。」Cava 有四大產區：Comtats de Barcelona（逾 95% 產量，含 Penedès）、Valle del Ebro、Almendralejo、Requena。不同來源對「約 160 個市鎮、約 90% 在 Penedès」之說有出入 ⚠。'),
      info('Corpinnat：為什麼脫離 Cava', 'Corpinnat 是一群 Penedès 酒廠另立的品牌與標準。<b>創始成員 9 家</b>，約 2019 年初退出 Cava DO；2024 年報稱有 13 家。標準：<br>• 至少 18 個月陳年，每家須有 30 與 60 個月款<br>• 有機、100% 手採<br>• 至少 1 公頃自有葡萄園，其餘為長期契約<br>• 46 個市鎮'),
      expand('⚠ 來源出入，不進測驗', '• Corpinnat 脫離年份（報導內同時出現一月與二月）、歷來成員增減（有「21 家」之說）都未獲佐證。<br>• Cava Reserva 18 個月與 15 個月之說：官方網頁與報導不一致。<br>• Clàssic Penedès：至少 15 個月、100% 有機（二手）。<br>• Llebeig、Penedès DO 氣泡細則、傳統法最低壓力 ⚠ 未能查證。'),
      info('擴展思考', 'Cava 與 Corpinnat 的分裂是產區「平價量產」與「高端單一產地」路線拉扯的典型案例，可用於 D4 論述題。')
    ],
    terms: [
      { term: 'Cava de Paraje Calificado', def: 'Cava 的最高等級，最低陳年 36 個月。' },
      { term: 'Corpinnat', def: 'Penedès 酒廠另立的高標準氣泡酒品牌，要求有機、手採、長陳年。' },
      { term: 'Xarel·lo', def: 'Cava 的核心白品種之一，酸度與結構較強。' }
    ],
    practice: {
      prompt: '說明 Cava 的陳年等級，以及 Corpinnat 為何脫離 Cava、標準為何。',
      points: ['Cava 等級：Guarda 9、Reserva 18（有 15 之說）、Gran Reserva 30、Paraje Calificado 36 個月', 'Corpinnat：創始 9 家，約 2019 年初退出 Cava DO', '標準：至少 18 個月、有機、100% 手採、至少 1 公頃自有園', '可補充：Cava 四大產區，Comtats de Barcelona 逾 95% 產量']
    },
    quiz: [
      { q: 'Cava Gran Reserva 的最低陳年是？', options: ['9 個月', '18 個月', '30 個月', '60 個月'], answer: 2, explain: 'Gran Reserva 最低 30 個月；Reserva 的 18 或 15 個月之說有出入，不作為題目。' },
      { q: '下列何者是 Corpinnat 的要求？', options: ['允許槽式法', '有機、100% 手採', '只用 Macabeo', '不需陳年'], answer: 1, explain: 'Corpinnat 要求有機、100% 手採、至少 18 個月陳年，並有自有葡萄園面積要求。' }
    ]
  },

  // ───────────────────────── sp-l2-5 義大利 ─────────────────────────
  'sp-l2-5': {
    blocks: [
      info('義大利用語', '<b>Spumante</b> 是壓力較高的氣泡酒，<b>Frizzante</b> 是微泡（Prosecco 的 frizzante 約 1–2.5 atm，spumante 高於 3 atm，二手）。傳統法稱 <b>Metodo Classico</b>。'),
      compare(
        ['產區', '品種', '釀法與陳年', '要點'],
        [
          ['Prosecco DOC', 'Glera 至少 85%', '槽式法，frizzante／spumante 至少 30 天', '2009-07-17 成立；9 省（Belluno、Gorizia、Padova、Pordenone、Treviso、Trieste、Udine、Venezia、Vicenza）'],
          ['Prosecco Rosé', 'Glera 85–90%、Pinot Nero 10–15%', '槽內至少 60 天；僅 spumante；須標年份', '義大利 2020-05 核准、歐盟 2020-10（二手）'],
          ['Conegliano Valdobbiadene DOCG', 'Glera 至少 85%', '槽式法；Sui Lieviti 瓶內至少 90 天', 'Rive 共 43 個（12 個市鎮＋31 個 frazioni），須手採、標年份；Superiore di Cartizze 手採、至少 11.5% vol'],
          ['Asti / Moscato d\'Asti', 'Moscato Bianco 至少 97%（非 100%）', 'Asti 法（槽內單次發酵中止）', '51 個市鎮；Asti 實際酒精至少 6%、總酒精至少 11.5%；Moscato d\'Asti 實際 4.5–6.5%、總至少 11%、壓力不高於 2.5 bar'],
          ['Franciacorta', 'Chardonnay、Pinot Nero 為主；Pinot Bianco 至多 50%；Erbamat 至多 10%（Satèn 不可用）', '傳統法；酒渣：Spumante 18、Rosé 與 Satèn 24、Millesimato 30、Riserva 60 個月', 'Satèn 壓力低於 5 atm；一般說法傳統法約 5–6 atm'],
          ['Trentodoc', 'Chardonnay、Pinot Nero、Pinot Bianco、Meunier', '傳統法；酒渣：NV 15、Millesimato 24、Riserva 36 個月', '葡萄園海拔可達 800 m'],
          ['Oltrepò Pavese Metodo Classico', 'Pinot Nero 至少 70%', '酒渣 15 個月；Millesimato 24 個月', 'Cruasé（粉紅，Pinot Nero 至少 85%）為 consorzio 商標'],
          ['Lambrusco', 'Lambrusco 家族', '多為槽式法', '八個 DOC；甜度 secco／amabile／dolce，風格乾到甜']
        ]
      ),
      info('考點：甜型起泡與起泡紅酒', '<b>Asti／Moscato d\'Asti</b> 是甜型起泡的代表，用 Asti 法保留殘糖與低酒精；<b>Lambrusco</b> 是義大利最常見的起泡紅酒。兩者都是 D4 考點，不能只背香檳。'),
      mis('「Prosecco 就是便宜的槽式氣泡酒。」DOC 到 DOCG（含 Rive、Cartizze）是不同層級；Rive 須手採並標年份，Cartizze 更是小區、價位更高。'),
      expand('⚠ 未查證或有出入', '• Asolo、Col Fondo 的地位 ⚠<br>• Asti 的酒精上限與最低壓力：各來源不一（3 bar 或 4–5 bar）⚠<br>• Franciacorta 的「總陳年 25／30／37 個月」說法 ⚠ 未能查證（酒渣月數已證實）<br>• Lambrusco 八個 DOC 的細節建議再對照 Consorzio ⚠'),
      info('Franciacorta 的 dosage（二手）', 'Satèn 僅限 Brut；Millesimato 可至 Extra Dry；Riserva 至 Brut；Spumante 與 Rosé 可至 Demi-sec。')
    ],
    terms: [
      { term: 'Spumante / Frizzante', def: '義大利氣泡壓力分類：spumante 壓力較高、frizzante 為微泡。' },
      { term: 'Metodo Classico', def: '義大利的傳統法用語。' },
      { term: 'Rive', def: 'Conegliano Valdobbiadene 中標示特定小區的葡萄園名稱，共 43 個。' },
      { term: 'Satèn', def: 'Franciacorta 的細緻風格，僅限 Brut，不可用 Erbamat。' }
    ],
    practice: {
      prompt: '比較 Prosecco 與 Franciacorta 的釀法、陳年與風格，並說明 Asti 與 Lambrusco 為何是考點。',
      points: ['Prosecco：Glera 至少 85%、槽式法、新鮮果香', 'Franciacorta：傳統法；Spumante 酒渣 18、Satèn 24、Millesimato 30、Riserva 60 個月', 'Asti：Moscato Bianco 至少 97%，Asti 法，甜型起泡', 'Lambrusco：起泡紅酒，多為槽式法', '結論：甜型起泡與起泡紅酒不能只靠香檳知識回答']
    },
    quiz: [
      { q: 'Moscato d\'Asti 與 Asti 的主要差別是？', options: ['Moscato d\'Asti 酒精較低、壓力較低', 'Moscato d\'Asti 用傳統法', 'Moscato d\'Asti 用紅葡萄', 'Moscato d\'Asti 比 Asti 更乾'], answer: 0, explain: 'Moscato d\'Asti 實際酒精約 4.5–6.5%、壓力不高於 2.5 bar；Asti 實際酒精至少 6%。' },
      { q: 'Trentodoc 屬於哪一類釀法與陳年規定？', options: ['槽式法，無需陳年', '傳統法，酒渣 NV 至少 15 個月', 'Asti 法', '氣體注入'], answer: 1, explain: 'Trentodoc 為傳統法：NV 15、Millesimato 24、Riserva 36 個月。' }
    ]
  },

  // ───────────────────────── sp-l2-6 德奧英及其他歐洲 ─────────────────────────
  'sp-l2-6': {
    blocks: [
      info('德國 Sekt', 'Sekt 的最低瓶內壓力為 <b>3.5 bar</b>，一般 Schaumwein 為 3 bar（Wines of Germany／DWI）。Winzersekt 指酒莊自產、瓶內發酵、酒渣至少 9 個月，但資料也指出它沒有獨立法定定義（單一來源）。Deutscher Sekt、Sekt b.A.、VDP.Sekt 的細則與槽式法 6 個月之說 ⚠ 未能查證，不進測驗。'),
      compare(
        ['奧地利 Sekt Austria（2015 提出、2016 立法，二手）', '最低陳年與釀法'],
        [
          ['Klassik', '酒渣至少 9 個月，釀法未規定'],
          ['Reserve', '18 個月，傳統法'],
          ['Grosse Reserve', '30 個月，傳統法，單一村鎮，採收後 3 年才可上市']
        ]
      ),
      info('英國（England 與 Wales）', '英國被稱為「第二個香檳」，是因為氣候涼爽、南部有白堊地層（Downs），並大量使用香檳的品種與傳統法。<br>• 氣泡 PDO 只准六個品種：Chardonnay、Pinot Noir、Meunier、Pinot Noir Précoce、Pinot Blanc、Pinot Gris；海拔上限 220 m（二手）<br>• Sussex 氣泡 PDO 於 2022-07-05 註冊，瓶中至少 15 個月（二手）<br>• 2023 年（WineGB）：4,209 公頃，氣泡酒占 76%；Chardonnay 32%、Pinot Noir 27%、Meunier 9%<br>• Kimmeridgian 土壤與「PDO English 酒渣 9 個月」⚠ 未能查證'),
      info('葡萄牙 Bairrada', '品種有 Baga、Maria Gomes、Bical、Cercial，另有 Pinot Noir、Chardonnay；傳統法，酒渣至少 9 個月（二手）。官方 DOC 細則 ⚠ 未取得。'),
      mis('「英國氣泡酒只是仿香檳。」英國氣泡酒占全國面積比例高達 76%（2023），有自己的 PDO 規格（如 Sussex），風格與品質已形成獨立名聲。'),
      expand('⚠ 未能查證', '瑞士、匈牙利的氣泡酒：本課程暫不涵蓋細節。Sekt 市場規模、各層級最低陳年（Deutscher Sekt／Sekt b.A.）⚠ 未查證。'),
      info('WSET D4 範圍提醒', '2019 版 D4 範圍清單列出德國 Sekt、英國等，但清單上沒有 Sekt Austria、Cap Classique、Corpinnat 等名稱；2025 版全文未取得，清單可能已變。本課程仍把這些納入以求完整，但<b>勿誤認為官方範圍</b>。')
    ],
    terms: [
      { term: 'Sekt', def: '德國的氣泡酒總稱，最低瓶內壓力 3.5 bar。' },
      { term: 'Winzersekt', def: '酒莊自產、瓶內發酵、酒渣至少 9 個月的 Sekt（無獨立法定定義）。' },
      { term: 'Sekt Austria', def: '奧地利 2016 年立法的三級氣泡酒制度：Klassik、Reserve、Grosse Reserve。' }
    ],
    practice: {
      prompt: '說明奧地利 Sekt Austria 三級的差異，並說明英國為何被稱為「第二個香檳」。',
      points: ['Klassik：酒渣至少 9 個月，釀法未規定', 'Reserve：18 個月，傳統法', 'Grosse Reserve：30 個月，傳統法，單一村鎮，採收後 3 年才可上市（二手）', '英國：涼爽氣候、白堊地層、使用香檳品種與傳統法', '2023 年英國氣泡酒占 76%']
    },
    quiz: [
      { q: '德國 Sekt 的最低瓶內壓力是？', options: ['2 bar', '3 bar', '3.5 bar', '6 bar'], answer: 2, explain: 'Sekt 為 3.5 bar，一般 Schaumwein 為 3 bar。' },
      { q: '英國氣泡酒被稱為「第二個香檳」的主要理由是？', options: ['全部使用槽式法', '涼爽氣候、白堊地層，並使用香檳的品種與傳統法', '法規與香檳完全相同', '只種植 Riesling'], answer: 1, explain: '涼爽氣候、南部白堊地層與 Chardonnay、Pinot Noir、Meunier 加傳統法是核心原因。' }
    ]
  },

  // ───────────────────────── sp-l2-7 新世界 ─────────────────────────
  'sp-l2-7': {
    blocks: [
      compare(
        ['產區', '釀法與規定', '風格、價位與備註'],
        [
          ['南非 Cap Classique', '法定瓶內發酵、酒渣至少 9 個月；CCPA 會員自律 12 個月、手採；無法定品種限制', '建議 Chardonnay、Pinot Noir、Meunier；1971 年 Simonsig 首支以 Chenin 為基酒'],
          ['塔斯馬尼亞', '氣泡酒占產量逾 40%（Wine Australia 2024）；Pinot Noir 43%、Chardonnay 28%', '涼爽氣候的氣泡基地；「澳洲最涼爽之一」之說 ⚠ 來源未直接支持'],
          ['起泡 Shiraz（澳洲）', 'Best\'s Great Western 以傳統法並用老 Muscat liqueur 調整；其他酒廠有槽式法或轉移法，證據僅單一酒莊', '起泡紅酒的代表；釀法「varies」合理但證據不足 ⚠'],
          ['紐西蘭 Marlborough', 'Méthode Marlborough 協會標準：100% 當地、傳統法、酒渣至少 18 個月；Chardonnay、Pinot Noir、Meunier', '紐西蘭氣泡酒的領先產區（二手）'],
          ['阿根廷', '槽式法最普遍；Chandon、Cruzat 等做傳統法；Moët & Chandon 1959 年在 Mendoza 設首個海外子公司；約 160 家氣泡酒廠', '高海拔涼爽葡萄園；傳統法與槽式並存'],
          ['巴西 Serra Gaúcha', '傳統法與槽式並存；實際以槽式占多數，但無官方比例', '需 IBRAVIN 資料才能量化 ⚠']
        ]
      ),
      info('起泡紅酒（考點）', '起泡 Shiraz 是新世界最具代表性的起泡紅酒，風格常帶殘糖與成熟黑色水果，與義大利 Lambrusco 並列為 D4 可能考到的類別。'),
      mis('「新世界氣泡酒只是便宜的仿製品。」新世界有傳統法的高端產區，如 Méthode Marlborough 要求酒渣至少 18 個月，Cap Classique 也有法定瓶內發酵與 9 個月酒渣。'),
      expand('⚠ 未能查證', '• 加州的投資年份（Chandon 1973、Roederer 1982、Mumm Napa 1979、Domaine Carneros 1987）⚠<br>• 加拿大、智利、美國 Oregon 的氣泡酒細節 ⚠（其中智利、阿根廷、加州、Oregon、Washington 在 2019 版 D4 範圍清單上）<br>• 澳洲 Victoria、Adelaide Hills 的氣泡酒細節 ⚠'),
      info('風格與價位的決定因素', '新世界的價位主要由「釀法（傳統法 vs 槽式）、陳年時間、地理與氣候、品牌」決定，不是由國家決定。同一國家內可有平價槽式與高端傳統法並存。')
    ],
    terms: [
      { term: 'Cap Classique', def: '南非的傳統法氣泡酒法定名稱。' },
      { term: '起泡 Shiraz (Sparkling Shiraz)', def: '澳洲的起泡紅酒，常帶殘糖。' },
      { term: 'Méthode Marlborough', def: '紐西蘭 Marlborough 的傳統法協會標準，酒渣至少 18 個月。' }
    ],
    practice: {
      prompt: '比較南非 Cap Classique 與紐西蘭 Méthode Marlborough 的規定，並說明起泡 Shiraz 在課程中的角色。',
      points: ['Cap Classique：法定瓶內發酵、酒渣至少 9 個月；CCPA 會員自律 12 個月', 'Méthode Marlborough：100% 當地、傳統法、酒渣至少 18 個月', '起泡 Shiraz：澳洲起泡紅酒代表；釀法證據有限，不要過度斷言', '補一句：新世界不等於便宜仿製品']
    },
    quiz: [
      { q: '南非 Cap Classique 的法定最低酒渣陳年是？', options: ['3 個月', '9 個月', '24 個月', '36 個月'], answer: 1, explain: 'Cap Classique 法定瓶內發酵、酒渣至少 9 個月；CCPA 會員自律為 12 個月。' },
      { q: '下列哪一項最能代表新世界的起泡紅酒？', options: ['Cap Classique', 'Méthode Marlborough', '起泡 Shiraz', 'Sekt Klassik'], answer: 2, explain: '起泡 Shiraz 是澳洲具代表性的起泡紅酒。' }
    ]
  },

  // ───────────────────────── sp-l2-8 綜合評量 ─────────────────────────
  'sp-l2-8': {
    blocks: [
      info('評量說明', '共 10 題，答對 6 題以上（60 分以上）即通過 Level 2。題目避開了查證有出入的數字。'),
      compare(
        ['複習：各產區一句話', '重點'],
        [
          ['香檳', '傳統法；NV 至少 15 個月、Vintage 至少 36 個月；三大品種'],
          ['Crémant', '各產區規格不同，陳年通常較短（酒渣 9–12 個月）'],
          ['Cava / Corpinnat', 'Cava 有四種陳年等級；Corpinnat 要求有機、手採'],
          ['義大利', 'Prosecco 槽式法；Asti 為甜型；Franciacorta、Trentodoc 傳統法；Lambrusco 起泡紅酒'],
          ['德奧英', 'Sekt 3.5 bar；Sekt Austria 三級；英國以傳統法與白堊著名'],
          ['新世界', 'Cap Classique 法定酒渣至少 9 個月；起泡 Shiraz 為起泡紅酒']
        ]
      ),
      info('D4 範圍提醒', 'WSET D4 2019 版範圍清單沒有列出 Cap Classique、Corpinnat、Sekt Austria 的名稱；2025 版未取得。準備考試時請以 WSET 最新規格為準。')
    ],
    terms: [],
    quiz: [
      { q: '香檳 NV 的最低陳年是？', options: ['9 個月', '12 個月', '15 個月', '36 個月'], answer: 2, explain: 'Comité Champagne 官方說明：NV 至少 15 個月。' },
      { q: '香檳 Vintage 的最低陳年是？', options: ['15 個月', '24 個月', '36 個月', '60 個月'], answer: 2, explain: 'Vintage 至少 36 個月。' },
      { q: 'Crémant de Loire 自 tirage 起算的最低陳年是？', options: ['6 個月', '12 個月', '30 個月', '48 個月'], answer: 1, explain: 'eAmbrosia 規格：至少 12 個月。' },
      { q: 'Moscato d\'Asti 與 Asti 相比？', options: ['酒精較高', '酒精較低、壓力較低', '用傳統法', '必為紅葡萄'], answer: 1, explain: 'Moscato d\'Asti 實際酒精約 4.5–6.5%、壓力不高於 2.5 bar。' },
      { q: 'Cava 產量最大的子產區是？', options: ['Valle del Ebro', 'Almendralejo', 'Requena', 'Comtats de Barcelona'], answer: 3, explain: 'Comtats de Barcelona 占逾 95% 的 Cava 產量。' },
      { q: '下列何者是 Corpinnat 的要求？', options: ['允許槽式法', '有機、手採、長陳年', '只用 Parellada', '無最低陳年'], answer: 1, explain: 'Corpinnat 要求有機、100% 手採、至少 18 個月陳年。' },
      { q: '2023 年英國葡萄園中，氣泡酒約占？', options: ['26%', '46%', '76%', '96%'], answer: 2, explain: 'WineGB 2023 年資料：氣泡酒占 76%。' },
      { q: '南非 Cap Classique 的法定最低酒渣陳年是？', options: ['3 個月', '9 個月', '18 個月', '36 個月'], answer: 1, explain: 'Cap Classique 法定至少 9 個月。' },
      { q: '下列何者屬於起泡紅酒？', options: ['Asti', 'Prosecco', 'Lambrusco', 'Crémant d\'Alsace Blanc'], answer: 2, explain: 'Lambrusco 是義大利常見的起泡紅酒。' },
      { q: '德國 Sekt 的最低瓶內壓力是？', options: ['2 bar', '3 bar', '3.5 bar', '6 bar'], answer: 2, explain: 'Sekt 最低 3.5 bar，一般 Schaumwein 為 3 bar。' }
    ],
    passScore: 60
  }
}
