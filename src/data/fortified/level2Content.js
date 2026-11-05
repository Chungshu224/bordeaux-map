// 全球強化酒專論 Level 2 課文（階段 C）
// 區塊格式沿用 SlideBlocks。數字依 FORTIFIED_FACT_CHECK.md：✅ 才寫入並可出題；⚠／❓ 只標註、不出題。

const info = (title, content) => ({ type: 'info', title, content })
const mis = (content) => ({ type: 'info', title: '常見誤解', content })
const compare = (headers, rows) => ({ type: 'compare', props: { headers, rows } })
const steps = (title, list) => ({ type: 'steps', title, steps: list.map(s => (/^\d+$/.test(s.title || '') ? { text: s.text } : s)) })
const expand = (label, content) => ({ type: 'expand', label, content })

export const LEVEL2_CONTENT = {
  // ───────────────────────── fo-l2-1 ─────────────────────────
  'fo-l2-1': {
    blocks: [
      info('產區與規則', 'Sherry 產自西班牙 Cádiz 省，法規名稱為 Jerez-Xérès-Sherry；鄰近的 Manzanilla-Sanlúcar de Barrameda 是另一個 DO，兩者共用同一個管理機構。陳年必須在 Jerez de la Frontera、El Puerto de Santa María、Sanlúcar de Barrameda 三城之一進行；Manzanilla 則只能在 Sanlúcar。'),
      info('近年法規變動', '舊制所謂的「陳年三角」限制已被取消，葡萄園與壓榨的範圍擴及更多市鎮，並新增 Fino Viejo／Manzanilla Pasada 兩個高陳年類別。最低陳年等具體數字來源不一（⚠），本課不要求背。'),
      compare(
        ['項目', '內容'],
        [
          ['主要品種', 'Palomino（絕大多數乾型的基礎）；Pedro Ximénez 與 Moscatel 多用於甜型'],
          ['土壤', '白堊質 albariza（保水、反光）；另有 barros（黏土）、arenas（沙）'],
          ['氣候', '溫暖、日照長；大西洋帶來調節與濕度'],
          ['甜型來源', 'PX、Moscatel 經日曬濃縮糖分，或把酒調甜']
        ]
      ),
      steps('乾型 Sherry 的路線', [
        { title: '1', text: 'Palomino 發酵成乾型的基酒。' },
        { title: '2', text: '依基酒的細緻度分流：較細緻的走 Fino／Manzanilla，較濃厚的走 Oloroso。' },
        { title: '3', text: '加烈到不同的酒精度，決定 flor 能否生長（回顧 Level 1）。' },
        { title: '4', text: '放進 solera 系統陳年與混調。' }
      ]),
      mis('「Sherry 都是甜的。」多數 Sherry 其實是乾型；甜的主要是 PX、Moscatel 與調甜的混調酒款。')
    ],
    terms: [
      { term: 'Albariza', def: '白堊質白色土壤，保水力好，是 Jerez 最好的葡萄園土壤。' },
      { term: 'DO Jerez-Xérès-Sherry', def: '西班牙 Sherry 的法定產區，與 Manzanilla-Sanlúcar 共用管理機構。' },
      { term: 'Palomino', def: 'Sherry 最主要的白葡萄品種，酸度低、風味中性，適合做 flor 或氧化陳年。' }
    ],
    practice: {
      prompt: '說明 Manzanilla 與 Fino 的法定差別。',
      points: ['Fino 在 Jerez 或 El Puerto 陳年，Manzanilla 僅在 Sanlúcar 陳年', '兩者同為 flor 生物陳年，沿海濕潤使 Manzanilla 更清淡鹹鮮', '分屬兩個 DO，但共用管理機構']
    },
    quiz: [
      { q: 'Sherry 乾型酒最主要的品種是？', options: ['Pedro Ximénez', 'Palomino', 'Moscatel', 'Verdelho'], answer: 1, explain: 'Palomino 是乾型 Sherry 的基礎。' },
      { q: 'Manzanilla 的陳年必須在哪裡進行？', options: ['Jerez de la Frontera', 'El Puerto de Santa María', 'Sanlúcar de Barrameda', '三城任一均可'], answer: 2, explain: 'Manzanilla 僅限在 Sanlúcar 陳年。' }
    ]
  },

  // ───────────────────────── fo-l2-2 ─────────────────────────
  'fo-l2-2': {
    blocks: [
      compare(
        ['類型', '陳年路線', '風味線索', '乾甜'],
        [
          ['Fino', '全程 flor 生物陳年', '淡色、杏仁、酵母、鹹鮮', '乾'],
          ['Manzanilla', '全程 flor（Sanlúcar）', '更清淡、鹹、海風感', '乾'],
          ['Amontillado', '先 flor、後氧化', '琥珀色、堅果、乾果，帶一點鹹鮮', '乾（甜型為調甜款）'],
          ['Palo Cortado', '細緻的氣味、濃厚的口感，稀少', '介於 Amontillado 與 Oloroso', '乾'],
          ['Oloroso', '全程氧化', '深色、胡桃、焦糖、較厚重', '乾（甜型為調甜款）'],
          ['PX／Moscatel', '日曬濃縮葡萄', '極甜、葡萄乾、糖蜜', '甜']
        ]
      ),
      info('新類別', 'Fino Viejo（Jerez）與 Manzanilla Pasada（Sanlúcar）是長時間生物陳年後的類型，風味介於 Fino 與 Amontillado 之間。具體最低陳年年數官方說法為 7 年（✅ 多來源吻合），但最低酒精度等其他數字來源矛盾（⚠），不要背。'),
      info('En rama', '「en rama」指幾乎不澄清、不過濾的 Sherry，保留更多質地與風味，近年在高端 Fino／Manzanilla 越來越常見；2026 年 1 月 D5 考試首度出現 en rama 樣品。'),
      mis('「Amontillado 就是甜的 Sherry。」傳統上 Amontillado 是乾型；市面上的甜款是調甜後的混調酒款。'),
      expand('盲品線索', '淡檸檬黃、杏仁酵母、鹹鮮 → Fino／Manzanilla；琥珀、堅果、乾果 → Amontillado；深褐、胡桃焦糖 → Oloroso；黑色黏稠極甜 → PX。')
    ],
    terms: [
      { term: 'Amontillado', def: '先經過 flor 生物陳年，flor 消失後繼續氧化陳年的類型。' },
      { term: 'Palo Cortado', def: '氣味近 Amontillado、口感近 Oloroso 的稀少類型。' },
      { term: 'Fino Viejo／Manzanilla Pasada', def: '經長時間生物陳年的新增類別，分別對應 Jerez 與 Sanlúcar。' },
      { term: 'En rama', def: '極少處理、幾乎不過濾的裝瓶方式。' }
    ],
    practice: {
      prompt: '為何 Amontillado 的風味同時帶有 Fino 與 Oloroso 的特徵？',
      points: ['Amontillado 先經 flor 生物陳年，帶酵母、鹹鮮', 'flor 消失後進入氧化階段，帶堅果、琥珀色', '兩段陳年的風味疊加']
    },
    quiz: [
      { q: 'Amontillado 的陳年過程是？', options: ['全程氧化', '全程 flor', '先 flor 生物陳年、後氧化陳年', '瓶中陳年'], answer: 2, explain: 'Amontillado 先經 flor，之後氧化。' },
      { q: 'Oloroso 的典型風味線索是？', options: ['淡色、杏仁酵母', '深褐、胡桃與焦糖', '鮮紅漿果', '白花'], answer: 1, explain: '全程氧化，風味厚重帶胡桃與焦糖。' }
    ]
  },

  // ───────────────────────── fo-l2-3 ─────────────────────────
  'fo-l2-3': {
    blocks: [
      info('杜羅河谷', 'Port 產自葡萄牙杜羅河谷，由 IVDP 管理。河谷由下游往上游分為 Baixo Corgo、Cima Corgo 與 Douro Superior 三個副產區，越往上游越乾熱。陡坡以片岩土壤為主，常見梯田。'),
      compare(
        ['項目', '內容'],
        [
          ['主要品種', 'Touriga Nacional、Touriga Franca、Tinta Roriz、Tinta Barroca、Tinto Cão 等紅品種（另有白品種用於 White Port）'],
          ['釀造', '紅葡萄壓榨與浸皮（傳統上有腳踩 lagar），需要濃厚的色澤與單寧'],
          ['加烈', '發酵中途加入葡萄烈酒（aguardente），中止發酵、保留糖分'],
          ['陳年容器', '大容器偏還原路線（Ruby）；小木桶 pipe 偏氧化路線（Tawny）']
        ]
      ),
      steps('Port 的決策流程', [
        { title: '1', text: '採收並快速浸皮，萃取足夠的顏色與單寧。' },
        { title: '2', text: '發酵到糖尚未耗盡時加烈中止，得到甜型。' },
        { title: '3', text: '春季後把酒送往陳年地，分配到 Ruby 或 Tawny 路線。' },
        { title: '4', text: '依年份、品質與庫存決定最後的類別。' }
      ]),
      mis('「Port 只是加了酒精的甜酒。」浸皮萃取與後續陳年路線才是決定風格的關鍵。')
    ],
    terms: [
      { term: 'IVDP', def: '杜羅與波特酒協會（Instituto dos Vinhos do Douro e Porto），管理 Port 的類別與標示。' },
      { term: 'Aguardente', def: '加烈用的葡萄烈酒。' },
      { term: 'Lagar', def: '傳統的石製淺槽，用腳踩葡萄以萃取顏色與單寧。' }
    ],
    practice: {
      prompt: '為什麼 Port 需要特別強調浸皮與萃取？',
      points: ['發酵在中途就被烈酒中止，時間短', '需要在短時間內萃取足夠色澤與單寧', '單寧是 Ruby 與 Vintage 長期陳年的骨架', '腳踩 lagar 是傳統做法']
    },
    quiz: [
      { q: 'Port 的加烈發生在？', options: ['發酵開始前', '發酵中途', '發酵完成後', '裝瓶時'], answer: 1, explain: '發酵中途加烈，保留糖分。' },
      { q: 'IVDP 是哪種組織？', options: ['Sherry 的管理機構', 'Port 的管理機構', 'Madeira 的管理機構', 'Marsala 的管理機構'], answer: 1, explain: 'IVDP 負責 Port 與杜羅酒的管理。' }
    ]
  },

  // ───────────────────────── fo-l2-4 ─────────────────────────
  'fo-l2-4': {
    blocks: [
      info('兩大家族', 'IVDP 把 Port 分成「標準級」（基本 Ruby、基本 Tawny、White 等）與「特殊類別」（Reserve、LBV、Vintage、年齡聲明 Tawny、Colheita 等）。Ruby 系偏果味、還原陳年；Tawny 系偏堅果、氧化陳年。'),
      compare(
        ['類別', '家族', '特色'],
        [
          ['Ruby／Reserve Ruby', 'Ruby', '大容器陳年，保留顏色與果味；Reserve 需通過 IVDP 品評'],
          ['LBV（Late Bottled Vintage）', 'Ruby', '單一年份，採收後約 4–6 年裝瓶（✅ IVDP）'],
          ['Vintage', 'Ruby', '僅在被宣告的好年份生產，桶陳時間短，主要在瓶中陳年；陳年潛力最高'],
          ['Tawny', 'Tawny', '小木桶氧化陳年，顏色轉為琥珀、帶堅果與焦糖'],
          ['年齡聲明 Tawny（10／20／30／40）', 'Tawny', '混調後的平均風格年齡，等級界線由 IVDP 規範'],
          ['Colheita', 'Tawny', '單一年份的 Tawny，長期小桶陳年（常見說法：至少 7 年）']
        ]
      ),
      info('細節的不確定性（⚠）', 'Reserve Tawny 的最低桶陳（6 年或 7 年）與 Vintage 的桶陳上限（2 年或 3 年）各來源說法不一，須對照 IVDP 原文才可進入題庫，本課不要求背。'),
      mis('「LBV 是 Tawny。」LBV 是 Ruby 系的單一年份 Port，不是 Tawny。'),
      expand('White Port', 'White Port 以白葡萄製成，可乾可甜，也可像 Tawny 一樣木桶陳年而轉為琥珀色。調 tonic 的基本款與木桶陳年款是不同的世界。')
    ],
    terms: [
      { term: 'LBV', def: '單一年份、約在採收後 4–6 年裝瓶的 Ruby 系 Port。' },
      { term: 'Colheita', def: '單一年份的 Tawny Port，木桶陳年後裝瓶。' },
      { term: 'Vintage Port', def: '只在宣告的年份生產、桶陳短而主要在瓶中陳年的頂級 Ruby。' }
    ],
    practice: {
      prompt: '比較 Ruby 系與 Tawny 系在陳年容器與風味上的差異，並各舉兩個類別。',
      points: ['Ruby：大容器、少氧，深紅果味；例：Reserve Ruby、LBV、Vintage', 'Tawny：小木桶、氧化，琥珀堅果焦糖；例：年齡聲明 Tawny、Colheita', '關鍵差異：氧氣接觸程度']
    },
    quiz: [
      { q: 'LBV 屬於哪個家族？', options: ['Tawny', 'Ruby', 'White', '不屬於任何一類'], answer: 1, explain: 'LBV 是 Ruby 系的單一年份 Port。' },
      { q: 'Colheita 的特徵是？', options: ['多年份混調的 Ruby', '單一年份的 Tawny', '白葡萄製成的 Port', '瓶中陳年的 Vintage'], answer: 1, explain: 'Colheita 是單一年份的 Tawny。' }
    ]
  },

  // ───────────────────────── fo-l2-5 ─────────────────────────
  'fo-l2-5': {
    blocks: [
      info('Madeira 的特色', 'Madeira 是葡萄牙大西洋上的火山島，高酸、極耐久。傳說酒因海運加熱而風味轉變，後來產區把「加熱」發展成製程：estufagem 與 canteiro。'),
      compare(
        ['品種', '甜度', '風味線索'],
        [
          ['Sercial', '乾', '高酸、杏仁、檸檬皮、鹹感'],
          ['Verdelho', '半乾', '清爽、堅果、煙燻感'],
          ['Boal（Bual）', '半甜', '焦糖、巧克力、糖漬堅果，色深'],
          ['Malvasia（Malmsey）', '甜', '咖啡、焦糖、核桃、糖蜜'],
          ['Tinta Negra', '依混調而定', '種植面積最大的品種，用於基本款與商業款']
        ]
      ),
      compare(
        ['製法', '做法', '傾向'],
        [
          ['Estufagem', '在不鏽鋼槽中加熱', '較快、較便宜，基本款常用'],
          ['Canteiro', '在木桶中靠自然熱度緩慢陳年（如閣樓）', '較慢、較貴，通常複雜度更高']
        ]
      ),
      info('加烈時機與甜度', '偏乾的 Sercial、Verdelho 發酵到接近乾才加烈；Boal、Malvasia 在發酵早期加烈，保留糖分。這是甜度排序的來源。'),
      info('數字上的不確定（⚠）', 'estufagem 的溫度與天數、canteiro 的最低年數、年齡等級（Reserve、Special Reserve、Extra Reserve、10／15／20／30／40 年）的界線，各來源寫法不一，請以 IVBAM 為準；本課不要求背。')
    ],
    terms: [
      { term: 'Estufagem', def: '在槽中加熱的快速陳年法。' },
      { term: 'Canteiro', def: '在木桶中依靠自然熱度的緩慢陳年法。' },
      { term: 'Boal／Bual', def: '半甜的 Madeira 品種與風格，同一品種拼法因出口市場而異。' },
      { term: 'Malvasia／Malmsey', def: '最甜的 Madeira 品種與風格。' }
    ],
    practice: {
      prompt: '說明 Madeira 為何很耐久，並比較 estufagem 與 canteiro。',
      points: ['高酸、加烈、加熱與氧化使酒穩定', 'estufagem：槽中加熱，快速、成本低', 'canteiro：木桶自然熱，緩慢、成本高、複雜度通常更高']
    },
    quiz: [
      { q: '下列哪個 Madeira 品種風格最乾？', options: ['Malvasia', 'Boal', 'Verdelho', 'Sercial'], answer: 3, explain: '甜度由乾到甜為 Sercial → Verdelho → Boal → Malvasia。' },
      { q: 'Canteiro 與 estufagem 的差異？', options: ['canteiro 在木桶中以自然熱緩慢陳年', 'canteiro 在槽中加熱', '兩者完全相同', 'canteiro 只用於氣泡酒'], answer: 0, explain: 'canteiro 是木桶＋自然熱度的緩慢路線。' }
    ]
  },

  // ───────────────────────── fo-l2-6 ─────────────────────────
  'fo-l2-6': {
    blocks: [
      info('什麼是 VDN', 'Vin doux naturel 是法國南部以 mutage（發酵中以中性烈酒中止發酵）製成的甜型強化酒，主要用 Muscat（白）或 Grenache（紅）。'),
      compare(
        ['產區', '地區', '主要品種', '風格方向'],
        [
          ['Rivesaltes', 'Roussillon', 'Grenache（黑／白／灰）', 'Ambré、Tuilé，氧化陳年'],
          ['Muscat de Rivesaltes', 'Roussillon', 'Muscat', '新鮮芳香，不氧化'],
          ['Banyuls／Banyuls Grand Cru', 'Roussillon', 'Grenache Noir 為主', 'Rimage（新鮮）或氧化陳年'],
          ['Maury', 'Roussillon', 'Grenache Noir', '紅色 VDN，可帶皮加烈'],
          ['Muscat de Beaumes-de-Venise', 'Rhône', 'Muscat', '芳香甜型'],
          ['Rasteau', 'Rhône', 'Grenache', '紅色 VDN']
        ]
      ),
      steps('Mutage 的時機', [
        { title: '1', text: '白色與 Muscat 常在榨汁後的果汁階段加烈（sur jus）。' },
        { title: '2', text: '紅色 VDN 可在帶皮階段加烈（sur grains），萃取更多顏色與單寧。' },
        { title: '3', text: '之後走兩條路：保持新鮮（Rimage、Grenat、Muscat），或在木桶／玻璃大瓶中氧化陳年（Tuilé、Ambré、Traditionnel）。' }
      ]),
      info('數字（⚠）', '殘糖下限（多數 45 g/L，Muscat 更高）與酒精度寫法，各來源不一致，須對照各 AOC 的 CDC；本課不要求背。'),
      mis('「Muscat de Rivesaltes 與 Rivesaltes 是同一種。」前者是 Muscat 品種、新鮮芳香路線；後者以 Grenache 為主，常有氧化陳年。')
    ],
    terms: [
      { term: 'Mutage', def: '以中性烈酒中止發酵、保留天然糖。' },
      { term: 'Rimage／Grenat', def: '偏新鮮、保留果味的紅色 VDN 風格。' },
      { term: 'Ambré／Tuilé', def: '經氧化陳年的 Rivesaltes 風格（白色琥珀、紅色紅磚）。' }
    ],
    practice: {
      prompt: '比較 Muscat de Rivesaltes 與氧化陳年的 Rivesaltes（Tuilé）。',
      points: ['品種：Muscat vs Grenache', '陳年：新鮮、少氧 vs 氧化陳年', '風味：花香與水果 vs 乾果、堅果、焦糖']
    },
    quiz: [
      { q: 'Banyuls 的主要品種是？', options: ['Muscat', 'Grenache Noir', 'Palomino', 'Touriga Nacional'], answer: 1, explain: 'Banyuls 以 Grenache Noir 為主。' },
      { q: 'Muscat de Beaumes-de-Venise 位於哪裡？', options: ['Roussillon', 'Rhône', 'Alsace', 'Loire'], answer: 1, explain: 'Beaumes-de-Venise 位於 Rhône。' }
    ]
  },

  // ───────────────────────── fo-l2-7 ─────────────────────────
  'fo-l2-7': {
    blocks: [
      info('Rutherglen Muscat 與 Topaque', '澳洲維多利亞州東北部的 Rutherglen 以氧化陳年的甜型強化酒聞名。Muscat 用 Muscat à Petits Grains Rouge（又稱 Brown Muscat），Topaque 用 Muscadelle（2011 年起由 Tokay 改名）。兩者共用同一套四級制。'),
      compare(
        ['級別（由年輕到古老）', '特色'],
        [
          ['Rutherglen', '最年輕、新鮮果味為主'],
          ['Classic', '更多木桶陳年、帶 rancio 風味'],
          ['Grand', '更濃縮、深褐色、巧克力與糖蜜'],
          ['Rare', '最古老最稀有，成分中含數十年的老酒']
        ]
      ),
      info('數字（⚠）', '各級的平均年齡區間、殘糖與分類制度的起始年份，來源互有出入，不進題庫。考試只要求你能依「年輕→古老」排序、理解它是不分年份的混調系統。'),
      info('其他產區概況', '以下為延伸範圍的簡表；標 ❓ 者尚未查證，只作認識，不出題。'),
      compare(
        ['產區', '風格', '備註'],
        [
          ['Marsala（西西里）', '依陳年分 Fine、Superiore、Superiore Riserva、Vergine／Soleras、Vergine Stravecchio／Riserva', 'Vergine 為乾型，不得加煮過的葡萄汁、濃縮葡萄汁或 sifone；是否屬 D5 官方範圍待確認'],
          ['Málaga（西班牙）', '甜型，PX 與 Moscatel', '❓ 規則待查證'],
          ['Montilla-Moriles（西班牙）', '以 PX 為主的類 Sherry 風格', '❓ 與 Sherry 的製法差異待查證'],
          ['Setúbal（葡萄牙）', '甜型 Moscatel', '❓ 規則待查證'],
          ['Commandaria（賽普勒斯）', '曬乾葡萄的古老甜酒', '❓ 規則待查證'],
          ['南非', '甜型強化酒', '❓ 待查證']
        ]
      )
    ],
    terms: [
      { term: 'Rancio', def: '長期木桶氧化陳年帶來的核桃、堅果與陳年風味。' },
      { term: 'Muscadelle', def: 'Rutherglen Topaque 使用的白品種。' },
      { term: 'Vergine', def: 'Marsala 的最高等級系列，乾型且不得調甜。' }
    ],
    practice: {
      prompt: '簡述 Rutherglen 四級制的邏輯，並說明為何它不是年份制度。',
      points: ['四級：Rutherglen → Classic → Grand → Rare，越高越古老、濃縮', '以混調的整體風格與平均年齡區分', '是不分年份的 solera 式混調', 'Muscat 與 Topaque 共用同一制度']
    },
    quiz: [
      { q: 'Rutherglen Topaque 使用的品種是？', options: ['Muscat à Petits Grains Rouge', 'Muscadelle', 'Palomino', 'Grenache'], answer: 1, explain: 'Topaque 用 Muscadelle。' },
      { q: 'Marsala Vergine 的規定，下列何者正確？', options: ['可加煮過的葡萄汁', '為乾型，不得調甜', '一定是甜型', '無須陳年'], answer: 1, explain: 'Vergine 為乾型，不得加入煮過或濃縮的葡萄汁或 sifone。' }
    ]
  },

  // ───────────────────────── fo-l2-8 ─────────────────────────
  'fo-l2-8': {
    blocks: [
      info('Level 2 重點回顧', '用同一組問題逐區回顧：用什麼品種？何時加烈？怎麼陳年？甜度與風格？管理機構是誰？'),
      compare(
        ['產區', '品種', '陳年路線', '甜度'],
        [
          ['Sherry', 'Palomino（乾型）', 'flor 或氧化，solera', '乾為主'],
          ['Port', 'Touriga 等多品種', 'Ruby 大容器、Tawny 小桶', '甜'],
          ['Madeira', 'Sercial／Verdelho／Boal／Malvasia', '加熱 + 氧化', '乾到甜'],
          ['VDN', 'Muscat 或 Grenache', '新鮮或氧化', '甜'],
          ['Rutherglen', 'Brown Muscat、Muscadelle', '氧化、四級混調', '甜']
        ]
      ),
      expand('通過條件', '下方 10 題綜合評量，答對 60 分以上才可標記完成。')
    ],
    terms: [],
    practice: {
      prompt: '選一個產區，用「品種、加烈時機、陳年路線、甜度」四個面向描述它的風格成因。',
      points: ['例（Port）：多品種紅葡萄、發酵中途加烈、Ruby 或 Tawny 路線、甜型', '例（Fino）：Palomino、發酵後加烈到低酒精度、flor 生物陳年、乾型']
    },
    passScore: 60,
    quiz: [
      { q: '下列哪一類在發酵「完成後」才加烈？', options: ['Port', 'VDN', '多數乾型 Sherry', 'Banyuls'], answer: 2, explain: '乾型 Sherry 在發酵完成後加烈。' },
      { q: 'Madeira 品種由乾到甜的正確順序是？', options: ['Malvasia → Boal → Verdelho → Sercial', 'Sercial → Verdelho → Boal → Malvasia', 'Boal → Sercial → Malvasia → Verdelho', 'Verdelho → Malvasia → Sercial → Boal'], answer: 1, explain: '由乾到甜為 Sercial、Verdelho、Boal、Malvasia。' },
      { q: 'LBV 是什麼？', options: ['Tawny 系的多年份混調', 'Ruby 系的單一年份 Port', '白葡萄 Port', 'Madeira 的等級'], answer: 1, explain: 'LBV 是 Ruby 系單一年份、約 4–6 年後裝瓶。' },
      { q: 'Manzanilla 的陳年地是？', options: ['Jerez', 'El Puerto de Santa María', 'Sanlúcar de Barrameda', '杜羅河谷'], answer: 2, explain: 'Manzanilla 僅在 Sanlúcar 陳年。' },
      { q: 'Amontillado 的陳年方式是？', options: ['全程 flor', '先 flor 後氧化', '全程氧化', '只在瓶中'], answer: 1, explain: '先 flor 再氧化。' },
      { q: 'Muscat de Rivesaltes 的風格方向是？', options: ['氧化陳年的 Grenache', '新鮮芳香的 Muscat', '乾型白酒', '氣泡酒'], answer: 1, explain: 'Muscat de Rivesaltes 走新鮮芳香路線。' },
      { q: 'Rutherglen 四級制由年輕到古老的順序是？', options: ['Rare → Grand → Classic → Rutherglen', 'Rutherglen → Classic → Grand → Rare', 'Classic → Rutherglen → Rare → Grand', 'Grand → Rare → Rutherglen → Classic'], answer: 1, explain: 'Rutherglen、Classic、Grand、Rare。' },
      { q: 'Estufagem 與 canteiro 哪個傾向較慢、成本較高？', options: ['estufagem', 'canteiro', '兩者相同', '都不是'], answer: 1, explain: 'canteiro 在木桶中緩慢陳年，通常更貴。' },
      { q: 'Marsala 哪個類型為乾型且不得加煮過的葡萄汁？', options: ['Fine', 'Superiore', 'Vergine', '所有類型皆可'], answer: 2, explain: 'Vergine 不得加 mosto cotto、濃縮葡萄汁或 sifone。' },
      { q: 'Sherry 乾型酒的主要品種是？', options: ['Pedro Ximénez', 'Moscatel', 'Palomino', 'Sercial'], answer: 2, explain: 'Palomino。' }
    ]
  }
}
