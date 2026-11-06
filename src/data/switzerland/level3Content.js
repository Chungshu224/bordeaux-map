// 瑞士葡萄酒課程 Level 3 課文（階段 C）
// 區塊格式沿用 SlideBlocks：info / compare(headers, rows)。
// 市場與政策數字隨年度與政策變動（見 SWISS_FACT_CHECK.md）：課內只作「截至 2026 年」的背景，不進測驗。

const info = (title, content) => ({ type: 'info', title, content })
const mis = (content) => ({ type: 'info', title: '常見誤解', content })
const compare = (headers, rows) => ({ type: 'compare', props: { headers, rows } })

export const SWI_LEVEL3_CONTENT = {
  // ───────────────────────── swi-l3-1 ─────────────────────────
  'swi-l3-1': {
    blocks: [
      info('先抓大方向', '「英雄式栽培（heroic viticulture）」指在陡坡或梯田上種葡萄，機械難以進入、幾乎全靠人工。瑞士有相當比例的葡萄園屬於此類（一份官方簡報以坡度 >30% 或梯田為界定標準）。'),
      compare(
        ['面向', '內容', '對成本與風格的影響'],
        [
          ['地形', '陡坡、石牆梯田（Valais 的石牆合計約 3,000 公里）', '機械難以使用；人工多'],
          ['工時', '傳統種植每公頃每年約 1,900 工時，約是可用大型機械葡萄園的兩倍（Swiss Wine Promotion）', '成本推高，價格也高'],
          ['水', 'Valais 乾燥，建有稱為 “bisses” 的密集灌溉渠網，把山水引到葡萄園', '解決降雨少的問題'],
          ['風險', '霜害與冰雹；氣候變遷帶來極端高溫、乾旱、豪雨等', '產量與品質不穩定'],
          ['日照', '陡坡有利日照與排水；石牆蓄熱（Lavaux 的「三重日照」）', '提高成熟度']
        ]
      ),
      info('因果鏈', '<b>陡坡與梯田 → 難以機械化 → 人工多、工時長 → 成本高 → 價格高、規模小</b>；同時<b>陡坡帶來日照與排水優勢 → 成熟度與風味有特色</b>。'),
      mis('「陡坡只是風景，對成本沒影響。」不對：陡坡直接決定能否機械化，是瑞士酒成本高的核心原因之一。'),
      info('怎麼答', '被問「評估瑞士陡坡栽培的利弊」時，利：日照、排水、風格與景觀（UNESCO）；弊：人工成本、機械受限、氣候風險；結論連到價格與市場定位。')
    ],
    terms: [
      { term: '英雄式栽培 (heroic viticulture)', def: '在陡坡或梯田上、主要靠人工的栽培。' },
      { term: 'Bisses', def: 'Valais 把山區水引到葡萄園的灌溉渠網。' },
      { term: '乾石牆', def: '不用砂漿堆疊的石牆，用於支撐梯田並蓄熱。' }
    ],
    practice: {
      prompt: '用兩三句話說明：陡坡梯田對瑞士葡萄酒的成本與品質各有什麼影響？',
      points: ['成本：機械受限、工時長', '品質：日照、排水與蓄熱提高成熟度', '價格因此偏高、規模偏小']
    },
    quiz: [
      { q: '英雄式栽培的主要特徵是？', options: ['全面機械化', '陡坡或梯田、主要靠人工', '平原大規模種植', '溫室栽培'], answer: 1, explain: '陡坡或梯田使機械難以使用，主要靠人工。' },
      { q: 'Valais 的 “bisses” 是什麼？', options: ['灌溉渠網', '一種品種', '一種橡木桶', '一種杯子'], answer: 0, explain: 'Bisses 是把山區水引到葡萄園的灌溉渠網。' },
      { q: '陡坡栽培推高成本的主要原因是？', options: ['機械受限、人工多', '土壤太肥沃', '降雨過多', '品種太少'], answer: 0, explain: '機械受限使人工需求增加。' }
    ]
  },

  // ───────────────────────── swi-l3-2 ─────────────────────────
  'swi-l3-2': {
    blocks: [
      info('先抓大方向', '瑞士風格由「品種 × 地點 × 傳統」決定。這一課把前面零散的特色整理成<b>風格地圖</b>。'),
      compare(
        ['風格', '品種／做法', '說明'],
        [
          ['Chasselas 乾白', 'Chasselas（Fendant、Perlan、Dorin 等別名）', '細緻、中性，能反映土壤差異；Dézaley 偏濃度力量，Calamin 偏精緻（Decanter 描述）'],
          ['Non-Filtré', 'Chasselas，未經過濾裝瓶', '三湖區（Neuchâtel）的特色'],
          ['Œil-de-Perdrix', 'Pinot Noir 釀成的淡鮭魚色粉紅酒', 'Neuchâtel 起源，名稱受保護'],
          ['Dôle', 'Pinot Noir＋Gamay 為主', 'Valais 旗艦紅酒'],
          ['Merlot Bianco', '紅 Merlot 立即壓榨', 'Ticino 特色白酒'],
          ['Vin des Glaciers', '傳統用 Rèze，後來常與 Ermitage（Marsanne）等混調；存放在 Val d’Anniviers 的落葉松桶，新舊年份混合、桶從不倒空', '類似雪莉的 solera 方式；非常稀少'],
          ['Valais 甜酒', 'Petite Arvine、Amigne、Ermitage、Johannisberg（Sylvaner）、Malvoisie（Pinot Gris）等', '晚收（late harvest）、風乾（flétri）與貴腐（grain noble）等類型']
        ]
      ),
      info('同物異名', 'Valais 的名稱常讓人混淆：<b>Fendant＝Chasselas、Ermitage＝Marsanne、Johannisberg＝Sylvaner、Malvoisie＝Pinot Gris、Heida＝Savagnin（又稱 Païen）</b>。'),
      mis('「Vin des Glaciers 是用冰川水釀的。」不對：名稱來自貯藏地點（高山村莊 Val d’Anniviers），釀法是 solera 式的混合與落葉松桶熟成。'),
      info('怎麼答', '描述風格時，用「<b>品種／做法 → 地點 → 風格特徵</b>」。同物異名題要把名稱還原成品種。')
    ],
    terms: [
      { term: 'Ermitage', def: 'Marsanne 在 Valais 的名稱。' },
      { term: 'Johannisberg', def: 'Sylvaner 在 Valais 的名稱。' },
      { term: 'Malvoisie', def: 'Pinot Gris 在 Valais 的名稱。' },
      { term: 'Flétri', def: '以風乾濃縮葡萄釀成的甜酒型態。' },
      { term: 'Solera', def: '新舊年份混合、桶不倒空的陳年方式。' }
    ],
    practice: {
      prompt: '用兩三句話說明：Vin des Glaciers 的陳年方式與雪莉有什麼相似之處？',
      points: ['類似 solera 的混合年份', '桶從不倒空，補入新酒', '在特定地點（Val d’Anniviers）以落葉松桶存放']
    },
    quiz: [
      { q: 'Valais 的 Ermitage 指的是哪個品種？', options: ['Marsanne', 'Pinot Gris', 'Sylvaner', 'Savagnin'], answer: 0, explain: 'Ermitage 是 Marsanne 在 Valais 的名稱。' },
      { q: 'Johannisberg 指的是？', options: ['Sylvaner', 'Merlot', 'Chasselas', 'Pinot Noir'], answer: 0, explain: 'Johannisberg 是 Sylvaner 在 Valais 的名稱。' },
      { q: 'Vin des Glaciers 的陳年特徵是？', options: ['不鏽鋼槽短期熟成', 'solera 式混合、落葉松桶、桶不倒空', '瓶中二次發酵', '冷凍濃縮'], answer: 1, explain: '它採類似 solera 的混合年份，放在落葉松桶中。' },
      { q: 'Non-Filtré 指的是？', options: ['未過濾裝瓶的 Chasselas', '貴腐甜酒', '氣泡酒', 'Merlot 白酒'], answer: 0, explain: 'Non-Filtré 是未經過濾裝瓶的 Chasselas。' }
    ]
  },

  // ───────────────────────── swi-l3-3 ─────────────────────────
  'swi-l3-3': {
    blocks: [
      info('先抓大方向', '瑞士酒的「出口悖論」：產區知名、品質受肯定，卻幾乎只在國內被喝掉。原因是<b>小規模、高成本、國內需求夠大、再加上進口酒占大宗</b>。'),
      compare(
        ['面向', '說明（截至 2026 年的背景）'],
        [
          ['出口', '約 1% 的瑞士酒出口（swissinfo 引用 FT，2026）'],
          ['進口', '2024 年進口約 1.61 億公升，主要來自義大利、法國、西班牙（swissinfo）'],
          ['市占', '瑞士酒在國內市場約占三分之一強；2025 年為 37.5%，且總消費量持續下降（聯邦農業局 FOAG）'],
          ['進口制度', '以 WTO 關稅配額（170 百萬公升）管理進口；2001 年自由化前，進口權曾與銷售國產酒的量掛鉤'],
          ['成本', '陡坡人工使每公頃成本高，與大規模產區價差大']
        ]
      ),
      info('政策動向（會變動）', '2025–2026 年，瑞士討論過把進口配額與採購國產葡萄掛鉤；據 2026 年 10 月報導，聯邦已放棄這個構想，轉而考慮配額拍賣、削減過剩產能與促進銷售與出口。這些屬於正在變化的政策，<b>課內只作背景，不出題</b>。'),
      info('因果鏈', '<b>高成本與小規模 → 價格高 → 難以在國際市場競爭；國內需求與消費者支持 → 酒大多留在國內 → 出口比例低 → 國外知名度低 → 再回頭影響出口</b>。'),
      mis('「瑞士酒不出口是因為品質不好。」不對：多數酒在國內就賣光；限制是成本、規模與知名度，而非品質。'),
      info('怎麼答', '論述「為什麼瑞士酒難出口」時，列出<b>成本、規模、國內需求、進口競爭、知名度</b>，再用一個因果鏈串起來；結尾評估政策選項（保護、拍賣、削減產能、促進出口）的利弊。')
    ],
    terms: [
      { term: 'WTO 關稅配額', def: '在配額內以較低關稅進口、超過部分關稅較高的制度。' },
      { term: 'FOAG／OFAG', def: '瑞士聯邦農業局。' },
      { term: '出口悖論', def: '知名但幾乎不出口的現象。' }
    ],
    practice: {
      prompt: '寫一段 Diploma 式論述：評估「提高進口保護」是否能改善瑞士酒產業的長期處境。',
      points: ['利：短期保護國產市占', '弊：價格上升、進口商與消費者受損、可能涉及 WTO 義務', '根本問題是成本與規模，保護無法取代品質與品牌建立']
    },
    quiz: [
      { q: '下列何者最能說明瑞士酒難以出口？', options: ['品質太差', '高成本、小規模與國內需求', '禁止出口', '沒有品種'], answer: 1, explain: '成本、規模與國內需求是主因。' },
      { q: '瑞士以什麼方式管理葡萄酒進口？', options: ['WTO 關稅配額', '全面禁止進口', '無任何限制', '只允許歐盟進口'], answer: 0, explain: '瑞士以 WTO 關稅配額管理進口。' },
      { q: '瑞士進口酒主要來自哪些國家？', options: ['義大利、法國、西班牙', '美國、智利、澳洲', '日本、中國、韓國', '摩洛哥、突尼西亞、阿爾及利亞'], answer: 0, explain: '主要是義大利、法國與西班牙。' }
    ]
  },

  // ───────────────────────── swi-l3-4 ─────────────────────────
  'swi-l3-4': {
    blocks: [
      info('先抓大方向', '瑞士制度的演變可以用一條線串起：<b>過剩危機（1988）→ 各州建立 AOC → AOC／AOP 用語並行、各州自訂 Grand Cru／Premier Cru → 市場自由化（2001）→ 今日在進口保護與品質定位之間拉鋸</b>。'),
      compare(
        ['時間', '事件', '意義'],
        [
          ['1988', '過剩危機；日內瓦率先引進 AOC', '品質導向制度開端，由州主導'],
          ['1988 之後', '其他產酒州陸續跟進', '州級制度，各州細則不同'],
          ['之後', '州級 Grand Cru（Vaud）、Premier Cru（Geneva）、村鎮 Grand Cru（Valais）', '沒有全國統一的 Grand Cru'],
          ['2001', '廢止把進口權與國產酒銷量掛鉤的制度（市場自由化）', '被認為推動生產者提升品質並更具競爭力'],
          ['近年', '關於進口配額、削減產能與促進出口的政策討論', '結果隨時變動']
        ]
      ),
      info('Diploma 論述的答題架構', '1. <b>描述</b>：用一兩句話說明現況（例：州級 AOC、Grand Cru 無全國定義）。<br>2. <b>說明原因</b>：連回聯邦制、1988 危機與成本結構。<br>3. <b>評估</b>：列出利與弊（例：州級彈性 vs 消費者混淆）。<br>4. <b>結論</b>：給出你的判斷與依據。'),
      mis('「瑞士制度與法國一樣是全國統一的。」不對：細則由各州制定，Grand Cru 的意義在不同州不同。'),
      info('怎麼答', '比較瑞士與法國／德國制度時，抓三點：<b>誰制定、分級是否全國統一、對消費者與出口的影響</b>。')
    ],
    terms: [
      { term: 'AOC／AOP', def: '原產地控制／保護名稱。' },
      { term: 'Premier Cru（Geneva）', def: 'Geneva 的 22 個 AOC Premier Cru。' },
      { term: '市場自由化（2001）', def: '廢止進口權與國產酒銷量掛鉤的制度。' }
    ],
    practice: {
      prompt: '寫一段 Diploma 式論述：評估瑞士「州級 AOC 與 Grand Cru」制度的優缺點。',
      points: ['優：反映各區差異、彈性高、由當地決定', '缺：消費者與國外市場難以理解、Grand Cru 意義不一致', '結論：連到出口與品牌建立']
    },
    quiz: [
      { q: '瑞士 AOC 制度的起點是？', options: ['1988 年日內瓦', '1950 年 Valais', '2001 年聯邦', '2011 年歐盟'], answer: 0, explain: '1988 年日內瓦率先引進 AOC。' },
      { q: '瑞士的 Grand Cru 有何特徵？', options: ['全國統一定義', '各州各自定義', '由歐盟決定', '只用於白酒'], answer: 1, explain: 'Grand Cru 是州級概念。' },
      { q: '評估型論述的最後一步是？', options: ['抄寫定義', '給出判斷與依據的結論', '列單字', '畫圖'], answer: 1, explain: '評估題需要有依據的結論。' },
      { q: '2001 年廢止的是？', options: ['AOC 制度', '進口權與國產酒銷量掛鉤的制度', '所有關稅', '葡萄品種規定'], answer: 1, explain: '2001 年廢止了把進口權與國產酒銷量掛鉤的制度。' }
    ]
  },

  // ───────────────────────── swi-l3-5 ─────────────────────────
  'swi-l3-5': {
    blocks: [
      info('評量說明', '整合三階段：歷史與制度、六大產區與品種、栽培與風格、市場與論述。共 12 題，及格 60。'),
      info('複習清單', '• 修院梯田、1988 年過剩危機、州級 AOC<br>• 六大產區與氣候三因素（湖泊、焚風、山脈）<br>• Fendant、Perlan、Heida、Ermitage、Johannisberg 等同物異名<br>• Lavaux、Dézaley、Calamin；Valais 本土品種；Ticino Merlot Bianco<br>• 陡坡人工成本、出口悖論、WTO 關稅配額')
    ],
    terms: [],
    passScore: 60,
    quiz: [
      { q: '瑞士第一個引進 AOC 的州是？', options: ['Geneva', 'Valais', 'Vaud', 'Ticino'], answer: 0, explain: '1988 年日內瓦率先引進。' },
      { q: '關於瑞士 Grand Cru，何者正確？', options: ['州級概念，沒有全國統一定義', '全國統一定義', '由歐盟制定', '只用於紅酒'], answer: 0, explain: '各州自行定義。' },
      { q: 'Lavaux 於哪一年列入 UNESCO 世界遺產？', options: ['1988', '2001', '2007', '2013'], answer: 2, explain: '2007 年。' },
      { q: 'Heida 是哪個品種的 Valais 名稱？', options: ['Savagnin', 'Marsanne', 'Sylvaner', 'Pinot Gris'], answer: 0, explain: 'Heida＝Savagnin。' },
      { q: 'Chasselas 在 Geneva 稱為？', options: ['Perlan', 'Fendant', 'Heida', 'Ermitage'], answer: 0, explain: 'Geneva 稱 Perlan。' },
      { q: 'Merlot Bianco 的做法是？', options: ['紅 Merlot 立即壓榨', '白 Merlot 長時間浸皮', '混合白酒', '冷凍濃縮'], answer: 0, explain: '立即壓榨避免色素萃取。' },
      { q: 'Œil-de-Perdrix 是什麼？', options: ['Pinot Noir 的淡色粉紅酒', 'Merlot 紅酒', '甜白酒', '氣泡酒'], answer: 0, explain: 'Pinot Noir 的淡色粉紅酒。' },
      { q: 'Vin des Glaciers 的特徵是？', options: ['solera 式混合、落葉松桶', '新鮮果香不陳年', '氣泡酒', '橡木片調味'], answer: 0, explain: '它採 solera 式混合並放在落葉松桶中。' },
      { q: '陡坡梯田使瑞士酒成本高的主要原因是？', options: ['機械受限、人工多', '土壤肥沃', '降雨過多', '品種太少'], answer: 0, explain: '人工需求高。' },
      { q: '瑞士如何管理葡萄酒進口？', options: ['WTO 關稅配額', '全面禁止', '無限制', '只准歐盟'], answer: 0, explain: 'WTO 關稅配額。' },
      { q: '下列何者最能解釋「出口悖論」？', options: ['高成本、小規模與國內需求', '品質太差', '禁止出口', '沒有品種'], answer: 0, explain: '成本、規模與國內需求。' },
      { q: '焚風對葡萄園的主要幫助是？', options: ['溫暖乾燥、助成熟、降低病害風險', '增加霜害', '增加降雨', '降低日照'], answer: 0, explain: '溫暖乾燥有助成熟。' }
    ]
  }
}
