// 瑞士葡萄酒課程 Level 2 課文（階段 B）
// 區塊格式沿用 SlideBlocks：info / compare(headers, rows)。
// 只寫結構性事實；面積、占比、酒廠數等隨年度變動的數字不進測驗（見 SWISS_FACT_CHECK.md）。
// 來源以 Swiss Wine Promotion（swisswine.com／swisswine.ch）為主，單一來源者於課內標明。

const info = (title, content) => ({ type: 'info', title, content })
const mis = (content) => ({ type: 'info', title: '常見誤解', content })
const compare = (headers, rows) => ({ type: 'compare', props: { headers, rows } })

export const SWI_LEVEL2_CONTENT = {
  // ───────────────────────── swi-l2-1 ─────────────────────────
  'swi-l2-1': {
    blocks: [
      info('先抓大方向', 'Valais 是瑞士最大的產區，位於阿爾卑斯內陸的上隆河谷（Rhône）。四周高山擋住雨雲，使它成為瑞士最乾燥、日照最充足的地區之一，焚風在秋季幫助成熟並降低灰黴病風險。'),
      compare(
        ['面向', 'Valais 的特徵'],
        [
          ['地位', '瑞士最大產區，約占全國葡萄園面積三分之一（比例隨年度變動）'],
          ['氣候', '乾燥、日照充足；高山形成雨影；秋季常有焚風'],
          ['地形', '陡坡與石牆梯田；葡萄園可高達 Visperterminen 約 1,150 m'],
          ['品種', '多達五十餘種；Chasselas（在此稱 Fendant）、Pinot Noir、Gamay 與大量本土特產'],
          ['名酒型態', 'Fendant（Chasselas）、Dôle（Pinot Noir＋Gamay 為主）、本土品種單一品種酒']
        ]
      ),
      info('灌溉', '雨影使降雨少，部分葡萄園需要引用山區水源灌溉（Oxford Companion）。'),
      info('因果鏈', '<b>阿爾卑斯擋雨 → 乾燥多日照 → 即使在高海拔也能成熟 → 品種多樣、風格濃縮；但陡坡人工多、需灌溉 → 成本高</b>。'),
      mis('「Valais 因為在高山，所以很冷、只能種早熟品種。」不對：谷地乾燥、日照充足且有焚風，葡萄園甚至能爬到很高的海拔。'),
      info('怎麼答', '解釋 Valais 風格時，先寫<b>雨影與日照</b>，再寫<b>焚風與灌溉</b>，最後連到<b>成熟度、品種多樣與成本</b>。')
    ],
    terms: [
      { term: 'Fendant', def: 'Valais 對 Chasselas 的稱呼。' },
      { term: 'Dôle', def: 'Valais 紅酒，主要由 Pinot Noir 與 Gamay 混調。' },
      { term: '雨影', def: '山脈阻擋降雨，使背風谷地乾燥。' }
    ],
    practice: {
      prompt: '用兩三句話說明：為什麼 Valais 位在高山之間，卻是瑞士最乾燥、日照最充足的地區之一？',
      points: ['阿爾卑斯擋住雨雲，形成雨影', '焚風溫暖乾燥，幫助成熟', '日照與乾燥讓葡萄園能爬到高海拔']
    },
    quiz: [
      { q: 'Valais 位於哪條河流的上游谷地？', options: ['萊茵河', '隆河（Rhône）', '多瑙河', '提契諾河'], answer: 1, explain: 'Valais 是上隆河谷（Rhône）。' },
      { q: 'Valais 為何特別乾燥？', options: ['緊鄰海洋', '阿爾卑斯擋住雨雲形成雨影', '全年多雨', '位於湖畔'], answer: 1, explain: '高山阻擋降雨，形成雨影。' },
      { q: 'Dôle 是什麼？', options: ['Valais 的白酒', 'Valais 以 Pinot Noir 與 Gamay 為主的紅酒', 'Ticino 的 Merlot', '一種甜酒'], answer: 1, explain: 'Dôle 是 Valais 以 Pinot Noir 與 Gamay 為主的紅酒。' }
    ]
  },

  // ───────────────────────── swi-l2-2 ─────────────────────────
  'swi-l2-2': {
    blocks: [
      info('先抓大方向', 'Valais 的特色是「<b>本土特產 × 村鎮 Grand Cru</b>」：許多品種幾乎只在這裡大量種植，而 Grand Cru 以村鎮為單位。'),
      compare(
        ['品種', '顏色', '特徵'],
        [
          ['Petite Arvine', '白', '酸度鮮明、帶鹹味礦物感；乾型到甜型皆有'],
          ['Amigne', '白', 'Valais 特產，Vétroz 一帶著名'],
          ['Humagne Blanche', '白', '歷史悠久的白品種'],
          ['Heida', '白', 'Savagnin 在 Valais 的名稱；Visperterminen 著名'],
          ['Rèze', '白', 'Vin des Glaciers 的原料，傳統上風格近似雪莉'],
          ['Cornalin', '紅', '代表性本土紅品種，結構與深色水果'],
          ['Humagne Rouge', '紅', '與 Humagne Blanche 無關的另一品種；本土紅品種']
        ]
      ),
      info('Grand Cru 運作', 'Valais 的 Grand Cru 以<b>村鎮（commune）</b>為單位，並限定每個 Grand Cru 可用的品種（單一來源：Wine With Seth；細節如禁止加糖、樹齡下限、評審委員會等須以州規為準）。Vétroz 的 Grand Cru 以 Cornalin 與 Amigne 著名。例：Conthey、Sion、Saint-Léonard、Salquenen、Vétroz 等為 Grand Cru 村鎮。'),
      info('來源有出入', 'Valais Grand Cru 的數目：Swiss Wine Promotion 寫 10 個，Wine With Seth 寫 12 個。<b>本課不以數目出題</b>。'),
      mis('「Humagne Blanche 與 Humagne Rouge 是同一品種的白與紅版本。」不對：兩者是不同品種，只是名稱相似。'),
      info('怎麼答', '寫 Valais 本土品種時，用「<b>品種 → 顏色 → 風格特徵 → 代表地點／用途</b>」。')
    ],
    terms: [
      { term: 'Petite Arvine', def: 'Valais 白品種，鮮明酸度與鹹味礦物感。' },
      { term: 'Cornalin', def: 'Valais 代表性本土紅品種。' },
      { term: 'Heida', def: 'Savagnin 的 Valais 名稱。' },
      { term: 'Rèze', def: 'Vin des Glaciers 的原料品種。' },
      { term: 'Commune（村鎮）', def: 'Valais Grand Cru 的單位。' }
    ],
    practice: {
      prompt: '用兩三句話說明：Valais 的 Grand Cru 與 Vaud 的 Grand Cru 做法有什麼不同？',
      points: ['Valais 以村鎮為單位並限定品種', 'Vaud 的 Dézaley、Calamin 是特定葡萄園', '都由各州制定，沒有全國統一定義']
    },
    quiz: [
      { q: 'Vin des Glaciers 的原料品種是？', options: ['Rèze', 'Cornalin', 'Amigne', 'Merlot'], answer: 0, explain: 'Vin des Glaciers 以 Rèze 釀成。' },
      { q: 'Valais 的 Grand Cru 以什麼為單位？', options: ['單一葡萄園', '村鎮（commune）', '州', '酒廠'], answer: 1, explain: 'Valais 的 Grand Cru 以村鎮為單位。' },
      { q: 'Petite Arvine 的風格特徵最接近？', options: ['低酸、無香氣', '酸度鮮明、帶鹹味礦物感', '高單寧的紅酒', '粉紅酒'], answer: 1, explain: 'Petite Arvine 以鮮明酸度與鹹味礦物感著稱。' },
      { q: 'Heida 是下列哪個品種？', options: ['Savagnin', 'Gamay', 'Cornalin', 'Chasselas'], answer: 0, explain: 'Heida 是 Savagnin 在 Valais 的名稱。' }
    ]
  },

  // ───────────────────────── swi-l2-3 ─────────────────────────
  'swi-l2-3': {
    blocks: [
      info('先抓大方向', 'Lavaux 位於日內瓦湖北岸，從 Lausanne 往東延伸，是 Chasselas 的標竿產區。陡峭的石牆梯田由中世紀修院開墾，2007 年列入 UNESCO 世界遺產。Lavaux 內有兩個 Vaud 的 Grand Cru：<b>Dézaley</b> 與 <b>Calamin</b>。'),
      compare(
        ['', 'Dézaley', 'Calamin'],
        [
          ['面積', '約 54 公頃', '約 16 公頃'],
          ['位置', 'Epesses 與 Rivaz 之間', 'Epesses 以南'],
          ['地位', 'AOC Grand Cru（另有 Dézaley-Marsens Grand Cru）', 'AOC Grand Cru'],
          ['風格（Decanter 描述）', '濃度與力量感', '精緻、纖細'],
          ['品種', 'Chasselas', 'Chasselas']
        ]
      ),
      info('三重日照', 'Lavaux 的陡坡上，葡萄接收<b>直接日照、湖面反射與石牆蓄熱</b>（Wine With Seth），並受湖泊調節。這種「三重日照」讓陡坡的成熟度更穩定。'),
      info('採收與成本', 'Lavaux 的坡度極陡，採收靠人工；部分葡萄園以單軌車甚至直升機運送。這解釋了為何成本高、價格也高。'),
      info('來源有出入', 'Lavaux 的次產區數目各來源計法不同：有「14 個村」、「六個次產區」、「八個 cru」等說法。本課不以數目出題。'),
      mis('「Dézaley 和 Calamin 在不同的產區。」不對：兩者都在 Lavaux。'),
      info('怎麼答', '寫 Lavaux 時，用「<b>修院梯田 → 三重日照 → 成熟與風格 → 成本</b>」的因果鏈，並提到 Dézaley 與 Calamin 同屬 Lavaux 的 Grand Cru。')
    ],
    terms: [
      { term: 'Lavaux', def: '日內瓦湖北岸的梯田葡萄園，UNESCO 世界遺產（2007）。' },
      { term: 'Dézaley', def: 'Lavaux 的 Grand Cru，以 Chasselas 著名。' },
      { term: 'Calamin', def: 'Lavaux 的 Grand Cru，較小，以 Chasselas 著名。' },
      { term: '三重日照', def: '直接日照、湖面反射與石牆蓄熱。' }
    ],
    practice: {
      prompt: '用兩三句話說明：為什麼 Lavaux 的陡坡梯田能種出成熟的 Chasselas，卻成本很高？',
      points: ['三重日照與湖泊調節提高成熟度', '陡坡與石牆需要人工採收，甚至單軌車與直升機', '成本因此高']
    },
    quiz: [
      { q: 'Dézaley 與 Calamin 位於哪個產區？', options: ['La Côte', 'Lavaux', 'Chablais', 'Vully'], answer: 1, explain: '兩者都在 Lavaux。' },
      { q: 'Lavaux 於哪一年列入 UNESCO 世界遺產？', options: ['1988', '1999', '2007', '2013'], answer: 2, explain: 'Lavaux 葡萄園梯田於 2007 年列入。' },
      { q: 'Dézaley 與 Calamin 主要使用哪個品種？', options: ['Pinot Noir', 'Chasselas', 'Merlot', 'Petite Arvine'], answer: 1, explain: '兩者都以 Chasselas 釀成。' },
      { q: '下列何者最能說明「三重日照」？', options: ['雨、霧與雪', '直接日照、湖面反射與石牆蓄熱', '焚風、雨影與灌溉', '地熱、風與海洋'], answer: 1, explain: '三重日照指直接日照、湖面反射與石牆蓄熱。' }
    ]
  },

  // ───────────────────────── swi-l2-4 ─────────────────────────
  'swi-l2-4': {
    blocks: [
      info('先抓大方向', 'Vaud 是瑞士第二大產區，官方列出 7 個 AOC 與 3 個 AOC Grand Cru。除了 Lavaux，還有位於日內瓦湖西側的 La Côte、位於隆河谷口的 Chablais，以及靠 Neuchâtel 湖的北部三個 AOC（Bonvillars、Côtes de l’Orbe、Vully）。'),
      compare(
        ['次產區', '位置', '特徵'],
        [
          ['La Côte', 'Lausanne 與 Geneva 之間的日內瓦湖畔', '葡萄園較後退、坡度和緩，像勃艮第的丘陵；Chasselas 優雅，也有 Pinot Noir；Mont-sur-Rolle、Féchy 等村著名'],
          ['Lavaux', 'Lausanne 以東至 Montreux', '陡坡梯田，Dézaley／Calamin Grand Cru'],
          ['Chablais', '日內瓦湖東端、隆河右岸，Villeneuve 至 Bex', '石牆斜坡，Chasselas 細緻礦物；Aigle 著名'],
          ['Bonvillars／Côtes de l’Orbe／Vully', 'Neuchâtel 湖畔北部', '較小的產區；Vully 跨越 Vaud 與 Fribourg']
        ]
      ),
      info('Vaud 的品種', 'Chasselas 占據最大面積，其次是 Pinot Noir、Gamay，以及 Gamay 的雜交品種 Gamaret 與 Garanoir。'),
      mis('「Vaud 只有 Lavaux。」不對：Lavaux 只是其中一個，La Côte 與 Chablais 的面積與知名度也很重要。'),
      info('怎麼答', '比較 Vaud 次產區時，用「<b>位置 → 地形 → 風格</b>」：La Côte 緩坡優雅、Lavaux 陡坡濃度高、Chablais 石牆礦物感。')
    ],
    terms: [
      { term: 'La Côte', def: 'Lausanne 與 Geneva 之間的湖畔產區。' },
      { term: 'Chablais', def: '日內瓦湖東端、隆河右岸的 Vaud 次產區。' },
      { term: 'Gamaret／Garanoir', def: 'Gamay 的雜交紅品種。' }
    ],
    practice: {
      prompt: '用兩三句話說明：La Côte 與 Lavaux 在地形與風格上的差別。',
      points: ['La Côte 葡萄園後退、緩坡', 'Lavaux 為陡坡梯田', 'Lavaux 有 Grand Cru；兩者都以 Chasselas 為主']
    },
    quiz: [
      { q: '位於 Lausanne 與 Geneva 之間的 Vaud 次產區是？', options: ['La Côte', 'Chablais', 'Lavaux', 'Vully'], answer: 0, explain: 'La Côte 位於 Lausanne 與 Geneva 之間。' },
      { q: 'Chablais 位於哪裡？', options: ['日內瓦湖東端、隆河右岸', 'Ticino', '蘇黎世湖畔', '萊茵河畔'], answer: 0, explain: 'Chablais 在日內瓦湖東端、隆河右岸。' },
      { q: 'Vaud 最主要的品種是？', options: ['Chasselas', 'Merlot', 'Cornalin', 'Müller-Thurgau'], answer: 0, explain: 'Chasselas 在 Vaud 面積最大。' }
    ]
  },

  // ───────────────────────── swi-l2-5 ─────────────────────────
  'swi-l2-5': {
    blocks: [
      info('Geneva', 'Geneva 位在日內瓦湖西南端，夾在 Jura 與阿爾卑斯之間，兩座山脈擋住來自西面的壞天氣。1988 年日內瓦率先引進 AOC。官方列為 <b>1 個 AOC＋22 個 AOC Premier Cru</b>，是 Premier Cru 制度的例子。'),
      compare(
        ['Geneva 的三個次產區', '特徵'],
        [
          ['Mandement（右岸）', '最大；包含瑞士面積最大的葡萄種植村鎮 Satigny'],
          ['Entre Arve et Rhône', '位於 Arve 與 Rhône 兩河之間'],
          ['Entre Arve et Lac', '位於 Arve 河與日內瓦湖之間']
        ]
      ),
      info('品種與特例', 'Gamay 是紅酒第一品種；Chasselas 在 Geneva 稱 <b>Perlan</b>；Gamaret 與 Garanoir 是 Gamay 的雜交。Geneva 的葡萄園中有約 120 公頃位於法國境內的免稅區，卻仍使用 AOC Genève 名稱（Swiss Wine Promotion／MySwitzerland）。'),
      info('Three Lakes', '三湖區是 Neuchâtel、Lake Biel 與 Vully 三個產區的合稱，官方列出 <b>4 個 AOC</b>：Neuchâtel、Lac de Bienne、Vully、Cheyres。主品種是 Pinot Noir 與 Chasselas。'),
      compare(
        ['三湖區特產', '說明'],
        [
          ['Œil-de-Perdrix', '以 Pinot Noir 釀成的淡鮭魚色粉紅酒，起源於 Neuchâtel；名稱受保護'],
          ['Non-Filtré', '未經過濾裝瓶的 Chasselas，Neuchâtel 的特色'],
          ['Vully', '約 150 公頃，是瑞士最小的產區之一，跨 Fribourg 與 Vaud；Freisamer（Pinot Gris × Silvaner）是特產'],
          ['Pinot Noir 規定', 'Neuchâtel 與 Bern 兩州只准種 Pinot Noir 作為紅品種（多個來源）']
        ]
      ),
      mis('「Œil-de-Perdrix 是一種品種。」不對：它是以 Pinot Noir 釀成的粉紅酒型態，名稱是風格而不是品種。'),
      info('怎麼答', 'Geneva 用「<b>山脈擋雨 → 穩定氣候 → Gamay／Chasselas（Perlan）→ 22 個 Premier Cru</b>」；三湖區用「<b>湖泊調節 → Pinot Noir／Chasselas → 兩個特產（Œil-de-Perdrix、Non-Filtré）</b>」。')
    ],
    terms: [
      { term: 'Perlan', def: 'Chasselas 在 Geneva 的名稱。' },
      { term: 'Premier Cru（Geneva）', def: 'Geneva 的 22 個 AOC Premier Cru，州級概念。' },
      { term: 'Œil-de-Perdrix', def: '以 Pinot Noir 釀成的淡鮭魚色粉紅酒，起源於 Neuchâtel。' },
      { term: 'Non-Filtré', def: '未過濾裝瓶的 Chasselas。' }
    ],
    practice: {
      prompt: '用兩三句話說明：三湖區的兩個特產風格是什麼？各用什麼品種？',
      points: ['Œil-de-Perdrix：Pinot Noir 的淡色粉紅酒', 'Non-Filtré：未過濾的 Chasselas', '兩者都是區域特色，與湖泊調節氣候的產區相關']
    },
    quiz: [
      { q: 'Chasselas 在 Geneva 的名稱是？', options: ['Fendant', 'Perlan', 'Dorin', 'Heida'], answer: 1, explain: 'Geneva 稱 Chasselas 為 Perlan。' },
      { q: 'Œil-de-Perdrix 是用什麼品種釀成的？', options: ['Pinot Noir', 'Merlot', 'Chasselas', 'Gamay'], answer: 0, explain: '它是以 Pinot Noir 釀成的淡色粉紅酒。' },
      { q: '三湖區（Three Lakes）的三個湖區不包含？', options: ['Neuchâtel', 'Lake Biel', 'Vully', 'Lugano'], answer: 3, explain: '三湖區為 Neuchâtel、Lake Biel 與 Vully；Lugano 在 Ticino。' },
      { q: '1988 年率先引進 AOC 的州是？', options: ['Geneva', 'Ticino', 'Zürich', 'Neuchâtel'], answer: 0, explain: '日內瓦率先引進。' }
    ]
  },

  // ───────────────────────── swi-l2-6 ─────────────────────────
  'swi-l2-6': {
    blocks: [
      info('先抓大方向', 'Ticino 是瑞士唯一位於阿爾卑斯南側的產區，面向義大利，降雨豐沛、日照充足。官方列為 <b>1 個 AOC（Ticino）</b>。'),
      compare(
        ['', 'Sopraceneri（北）', 'Sottoceneri（南）'],
        [
          ['位置', 'Monte Ceneri 以北，Bellinzona 一帶', 'Monte Ceneri 以南，Lugano 一帶'],
          ['地形', '陡峭階地、河谷；部分仍可見傳統棚架', '緩坡丘陵'],
          ['土壤', '較輕的花崗岩與片麻岩，石灰質少', '較偏鹼性的土壤，含石灰質與黏土'],
          ['Merlot 風格', '較輕、較礦物感', '常較柔順、濃郁']
        ]
      ),
      info('Merlot 與 Merlot Bianco', 'Ticino 以 Merlot 為絕大多數（各來源比例不同）。Merlot 約在 120 年前傳入。<b>Merlot Bianco</b> 是將紅 Merlot 立即壓榨、避免萃取色素而成的白酒，近年越來越受歡迎。'),
      info('其他品種', 'Bondola 是 Sopraceneri 的傳統本土紅品種；也種有 Pinot Noir、Chardonnay 與 Sauvignon Blanc 等。'),
      mis('「Ticino 的 Merlot 一定是又濃又重。」不對：北部較輕、較礦物感，南部較濃郁，風格取決於地點與釀造。'),
      info('怎麼答', '寫 Ticino 時，用「<b>阿爾卑斯南側 → 降雨多、日照足 → Merlot 為主 → 南北土壤差異 → Merlot Bianco</b>」。')
    ],
    terms: [
      { term: 'Monte Ceneri', def: '將 Ticino 分為 Sopraceneri 與 Sottoceneri 的山口。' },
      { term: 'Merlot Bianco', def: '將紅 Merlot 立即壓榨得到的白酒。' },
      { term: 'Bondola', def: 'Sopraceneri 的傳統本土紅品種。' }
    ],
    practice: {
      prompt: '用兩三句話說明：Sopraceneri 與 Sottoceneri 在土壤與風格上有何差異？',
      points: ['北部花崗岩、片麻岩，較輕、礦物感', '南部含石灰與黏土，較柔順濃郁', '以 Monte Ceneri 為界']
    },
    quiz: [
      { q: 'Ticino 的主要品種是？', options: ['Merlot', 'Chasselas', 'Petite Arvine', 'Müller-Thurgau'], answer: 0, explain: 'Ticino 以 Merlot 為主。' },
      { q: 'Merlot Bianco 的製法重點是？', options: ['長時間浸皮', '紅 Merlot 立即壓榨以避免色素萃取', '加入白葡萄', '不經發酵'], answer: 1, explain: '紅葡萄立即壓榨可得到淡色的白酒。' },
      { q: '分隔 Sopraceneri 與 Sottoceneri 的是？', options: ['Monte Ceneri', 'Matterhorn', 'Mont Blanc', 'Jungfrau'], answer: 0, explain: 'Monte Ceneri 是兩區分界。' },
      { q: 'Ticino 的地理位置特色是？', options: ['阿爾卑斯南側', '阿爾卑斯北側的內陸', '日內瓦湖畔', '萊茵河畔'], answer: 0, explain: 'Ticino 是瑞士唯一位於阿爾卑斯南側的產區。' }
    ]
  },

  // ───────────────────────── swi-l2-7 ─────────────────────────
  'swi-l2-7': {
    blocks: [
      info('先抓大方向', '德語區把多個德語州合併為一個產區，Pinot Noir（德語稱 Blauburgunder）與 Müller-Thurgau 是最普遍的品種。Müller-Thurgau 在瑞士仍常被稱為 Riesling-Sylvaner。州數各來源不同：Swiss Wine Promotion 寫 16 州、20 個 AOC，MySwitzerland 與 Oxford Companion 寫 17 州——<b>本課不以州數出題</b>。'),
      compare(
        ['地區', '特徵'],
        [
          ['Graubünden／Bündner Herrschaft', '包含 Fläsch、Maienfeld、Jenins、Malans 四村；Pinot Noir 為主；焚風讓東部也能成熟；Completer 是本地特產'],
          ['Zürich', '重要的德語區 AOC；Müller-Thurgau 與 Pinot Noir；Räuschling 是傳統品種'],
          ['Schaffhausen', '萊茵河岸，多為 Pinot Noir'],
          ['Aargau、Basel 等', '西部州；Pinot Noir 與 Müller-Thurgau']
        ]
      ),
      info('Completer', 'Completer 是 Bündner Herrschaft（Graubünden）的本地白品種，Oxford Companion 提到當地有少量甜酒。'),
      info('怎麼答', '寫德語區時，先寫<b>品種組合（Pinot Noir＋Müller-Thurgau）</b>，再用<b>焚風、湖泊或河岸</b>解釋成熟度，最後提到地區特產（Completer、Räuschling）。'),
      mis('「德語區只有白酒。」不對：Pinot Noir 在德語區占有最大比例。')
    ],
    terms: [
      { term: 'Blauburgunder', def: '德語對 Pinot Noir 的稱呼。' },
      { term: 'Riesling-Sylvaner', def: '瑞士對 Müller-Thurgau 的傳統稱呼。' },
      { term: 'Bündner Herrschaft', def: 'Graubünden 最重要的 Pinot Noir 產區，含四個村鎮。' },
      { term: 'Completer', def: 'Bündner Herrschaft 的本地白品種。' }
    ],
    practice: {
      prompt: '用兩三句話說明：為什麼阿爾卑斯東部的 Graubünden 也能種出成熟的 Pinot Noir？',
      points: ['焚風溫暖乾燥，幫助成熟', '位於 Rhine 谷地、石灰質土壤', 'Bündner Herrschaft 以 Pinot Noir 為主']
    },
    quiz: [
      { q: 'Blauburgunder 是哪個品種？', options: ['Pinot Noir', 'Gamay', 'Merlot', 'Chasselas'], answer: 0, explain: '德語稱 Pinot Noir 為 Blauburgunder。' },
      { q: 'Riesling-Sylvaner 在瑞士指的是？', options: ['Müller-Thurgau', 'Heida', 'Petite Arvine', 'Completer'], answer: 0, explain: '瑞士傳統上稱 Müller-Thurgau 為 Riesling-Sylvaner。' },
      { q: 'Bündner Herrschaft 位於哪個州？', options: ['Graubünden', 'Valais', 'Ticino', 'Vaud'], answer: 0, explain: 'Bündner Herrschaft 在 Graubünden。' },
      { q: '德語區最具代表性的紅品種是？', options: ['Pinot Noir', 'Merlot', 'Cornalin', 'Syrah'], answer: 0, explain: 'Pinot Noir（Blauburgunder）是德語區的主要紅品種。' }
    ]
  },

  // ───────────────────────── swi-l2-8 ─────────────────────────
  'swi-l2-8': {
    blocks: [
      info('評量說明', '整合 Level 2：六大產區的位置與特徵、各區代表品種與風格。共 10 題，及格 60。'),
      info('複習清單', '• Valais：雨影、焚風、本土品種、村鎮 Grand Cru<br>• Vaud：Lavaux（Dézaley、Calamin）、La Côte、Chablais<br>• Geneva：Perlan、Gamay、22 Premier Cru；三湖區：Œil-de-Perdrix、Non-Filtré<br>• Ticino：Merlot、Merlot Bianco、Monte Ceneri<br>• 德語區：Pinot Noir、Müller-Thurgau、Bündner Herrschaft')
    ],
    terms: [],
    passScore: 60,
    quiz: [
      { q: '阿爾卑斯擋雨使哪個產區特別乾燥？', options: ['Valais', 'Three Lakes', 'Vaud 的 La Côte', 'Zürich'], answer: 0, explain: 'Valais 受雨影影響。' },
      { q: 'Fendant 指的是？', options: ['Valais 的 Chasselas', 'Ticino 的 Merlot', 'Geneva 的 Gamay', '三湖區的 Pinot Noir'], answer: 0, explain: 'Fendant 是 Valais 的 Chasselas。' },
      { q: 'Dézaley 與 Calamin 位於？', options: ['Lavaux', 'Chablais', 'Vully', 'Geneva'], answer: 0, explain: '兩個 Grand Cru 都在 Lavaux。' },
      { q: 'Vin des Glaciers 的原料是？', options: ['Rèze', 'Gamaret', 'Completer', 'Merlot'], answer: 0, explain: 'Rèze 是 Vin des Glaciers 的原料。' },
      { q: 'Geneva 將 Chasselas 稱為？', options: ['Perlan', 'Dorin', 'Fendant', 'Heida'], answer: 0, explain: 'Geneva 稱 Perlan。' },
      { q: 'Œil-de-Perdrix 是？', options: ['Pinot Noir 的淡色粉紅酒', 'Merlot 白酒', '甜白酒', '氣泡酒'], answer: 0, explain: '它是以 Pinot Noir 釀成的淡色粉紅酒。' },
      { q: '三湖區的 Vully 最特別的是？', options: ['面積最大', '是瑞士最小產區之一並跨兩州', '只種 Merlot', '位於 Ticino'], answer: 1, explain: 'Vully 面積小，跨 Fribourg 與 Vaud。' },
      { q: 'Merlot Bianco 如何取得？', options: ['紅 Merlot 立即壓榨', '白 Merlot 浸皮', '混入白酒', '冷凍'], answer: 0, explain: '紅葡萄立即壓榨可得淡色白酒。' },
      { q: 'Bündner Herrschaft 以哪個品種為主？', options: ['Pinot Noir', 'Chasselas', 'Merlot', 'Cornalin'], answer: 0, explain: 'Pinot Noir 在 Bündner Herrschaft 為主。' },
      { q: '德語區最常見的白品種是？', options: ['Müller-Thurgau', 'Petite Arvine', 'Heida', 'Amigne'], answer: 0, explain: 'Müller-Thurgau（Riesling-Sylvaner）在德語區最普遍。' }
    ]
  }
}
