// 全球強化酒專論 Level 3 課文（階段 D）
// 整合 Level 1–2，不新增帶數字的事實；⚠ 項目不出題。考試形式以 WSET 最新規格為準。

const info = (title, content) => ({ type: 'info', title, content })
const mis = (content) => ({ type: 'info', title: '常見誤解', content })
const compare = (headers, rows) => ({ type: 'compare', props: { headers, rows } })
const steps = (title, list) => ({ type: 'steps', title, steps: list.map(s => (/^\d+$/.test(s.title || '') ? { text: s.text } : s)) })
const expand = (label, content) => ({ type: 'expand', label, content })

export const LEVEL3_CONTENT = {
  // ───────────────────────── fo-l3-1 ─────────────────────────
  'fo-l3-1': {
    blocks: [
      info('盲品的思路', '不要先猜酒名，先收集線索：<b>顏色 → 氣味類型 → 甜度 → 酒精感 → 質地</b>，再推回「加烈時機、陳年路線」，最後才落到產區。'),
      compare(
        ['線索', '指向'],
        [
          ['淡檸檬黃、杏仁、酵母麵包、鹹鮮、乾', 'Fino／Manzanilla（flor 生物陳年）'],
          ['琥珀到褐色、堅果、乾果、乾', 'Amontillado／Oloroso（氧化陳年）'],
          ['近黑、黏稠、葡萄乾與糖蜜、極甜', 'PX（日曬濃縮）'],
          ['深紫紅、黑色漿果、單寧明顯、甜', 'Ruby 系 Port（還原陳年）'],
          ['琥珀紅磚、堅果、焦糖、甜', 'Tawny 系 Port（氧化陳年）'],
          ['高酸、鹹感、焦糖堅果、不一定甜', 'Madeira（高酸為關鍵）'],
          ['深褐、糖蜜、巧克力、極濃稠', 'Rutherglen（Grand／Rare）'],
          ['花香、荔枝、新鮮、甜', 'Muscat 型 VDN（新鮮路線）']
        ]
      ),
      info('Madeira 與 Tawny 的區別', '兩者都有堅果焦糖，但 Madeira 的<b>酸度明顯較高</b>，口感更緊、更尖；Tawny 的圓潤與果味更甜美。'),
      steps('判斷流程', [
        { title: '1', text: '顏色深淺 → 初判是否氧化陳年。' },
        { title: '2', text: '氣味有無酵母、杏仁（flor）或紅黑果（還原）。' },
        { title: '3', text: '甜度與酸度 → 區分 Port、Madeira、Sherry。' },
        { title: '4', text: '最後才由品種與細節決定產區。' }
      ]),
      mis('「顏色深就是甜。」Oloroso 顏色深但是乾的；顏色看的是氧化程度，不是糖。')
    ],
    terms: [
      { term: '還原線索', def: '紅黑果味、鮮豔顏色、單寧明顯，表示少氧陳年。' },
      { term: '氧化線索', def: '堅果、焦糖、乾果，顏色轉琥珀褐。' }
    ],
    practice: {
      prompt: '你拿到一杯琥珀色、帶堅果與焦糖、酸度很高的甜酒，寫出你的推理並推測可能的酒款。',
      points: ['琥珀色＋堅果焦糖 → 氧化陳年', '高酸是 Madeira 的重要線索，可與 Tawny 區分', '甜 → 偏 Boal 或 Malvasia 風格', '寫出推理，而非只報酒名']
    },
    quiz: [
      { q: '淡色、杏仁酵母氣味、乾而鹹鮮，最可能是？', options: ['Oloroso', 'Fino／Manzanilla', 'Tawny Port', 'Rutherglen Grand'], answer: 1, explain: '這是 flor 生物陳年的特徵。' },
      { q: '區分 Madeira 與 Tawny Port 的重要線索是？', options: ['Madeira 酸度明顯較高', 'Madeira 一定較甜', 'Tawny 一定較酸', '兩者無差別'], answer: 0, explain: 'Madeira 以高酸為特色。' }
    ]
  },

  // ───────────────────────── fo-l3-2 ─────────────────────────
  'fo-l3-2': {
    blocks: [
      info('SAT 的結構', 'WSET Level 4 的 SAT 依序描述：外觀 → 氣味 → 口感 → 結論。強化酒的描述重點是甜度、酒精的整合、質地與餘韻。'),
      compare(
        ['項目', '要描述什麼', '強化酒的重點'],
        [
          ['外觀', '澄清度、色度、顏色', '顏色深淺暗示氧化程度與年齡'],
          ['氣味', '狀態、強度、香氣特徵、發展度', '分辨 flor、氧化、水果、橡木、陳年風味'],
          ['口感', '甜度、酸度、單寧、酒精、酒體、風味強度、特徵、餘韻', '酒精是否整合、甜與酸是否平衡'],
          ['結論', '品質等級與理由、適飲與陳年潛力', '用平衡、複雜度、餘韻、濃縮度論證']
        ]
      ),
      steps('寫結論的句型', [
        { title: '1', text: '先給品質等級。' },
        { title: '2', text: '用「平衡」「餘韻長度」「複雜度」「濃縮度」支持。' },
        { title: '3', text: '再給適飲與陳年潛力。' },
        { title: '4', text: '若被要求，補充推論的風格與產地。' }
      ]),
      info('酒精的描述', '強化酒的酒精度通常屬於高的一端，重點不是只說「高」，而是說<b>酒精感是否被甜、酸與陳年整合</b>。'),
      mis('「強化酒的品質只看甜度。」甜度只是一個維度，平衡與整合才是結論的依據。')
    ],
    terms: [
      { term: 'SAT', def: 'Systematic Approach to Tasting，WSET 的系統化品飲流程。' },
      { term: '整合 (integration)', def: '酒精、甜、酸與風味融為一體，不突兀。' }
    ],
    practice: {
      prompt: '以一款 20 年 Tawny Port 為例，寫一段口感與結論的描述。',
      points: ['甜型、酸度與單寧偏低、酒精整合良好', '堅果、焦糖、乾果與橡木，複雜度高', '餘韻長', '結論：品質高，已適飲，不必再久放']
    },
    quiz: [
      { q: '描述強化酒酒精時，更好的寫法是？', options: ['只寫高', '寫酒精感是否與甜酸整合', '不需描述酒精', '只寫度數'], answer: 1, explain: '重點是整合程度。' },
      { q: 'SAT 的結論部分通常包括？', options: ['品質等級與理由、適飲與陳年潛力', '價格與購買通路', '生產者歷史', '以上皆非'], answer: 0, explain: '結論給出品質等級與理由、適飲和陳年潛力。' }
    ]
  },

  // ───────────────────────── fo-l3-3 ─────────────────────────
  'fo-l3-3': {
    blocks: [
      info('比較的方法', '比較兩款酒不要背數字，而是用<b>因素</b>解釋差異：品種、加烈時機、陳年容器與時間、混調方式、氣候。'),
      compare(
        ['對照', '共同點', '關鍵差異'],
        [
          ['Fino vs Manzanilla', '都是 Palomino、flor 生物陳年', '陳年地：Manzanilla 在沿海 Sanlúcar，更清淡鹹鮮'],
          ['Oloroso vs Tawny Port', '都是氧化陳年、堅果焦糖', 'Oloroso 乾、Tawny 甜（加烈時機不同）'],
          ['Tawny Port vs Madeira', '都氧化陳年', 'Madeira 酸度高、經加熱；Tawny 圓潤偏果味'],
          ['Tawny Port vs Rutherglen', '都甜、氧化陳年', 'Rutherglen 更濃稠、更甜、帶 rancio，來自 Muscat／Muscadelle'],
          ['Ruby Port vs Tawny Port', '同為 Port', '大容器還原 vs 小桶氧化'],
          ['Rivesaltes（Tuilé）vs Tawny Port', '都氧化陳年、甜', '品種：Grenache vs 多品種；產地與法規不同']
        ]
      ),
      steps('論述比較的結構', [
        { title: '1', text: '先說明兩者相同之處。' },
        { title: '2', text: '指出最關鍵的差異因素。' },
        { title: '3', text: '解釋該因素如何造成風味差異。' },
        { title: '4', text: '用一句話收尾（結論）。' }
      ]),
      mis('「兩款酒顏色一樣就是同一類。」顏色只反映氧化程度；來源品種、加烈時機與酸度才是辨識關鍵。')
    ],
    terms: [
      { term: '關鍵差異因素', def: '比較時最能解釋風格差異的那一個變因。' }
    ],
    practice: {
      prompt: '比較 Tawny Port 與 Oloroso Sherry，兩者的相同與差異各是什麼？',
      points: ['相同：氧化陳年，堅果、焦糖、乾果', '差異關鍵：加烈時機 → Port 甜、Oloroso 乾', '補充：品種、產地與陳年容器不同', '結論句：同樣氧化，但甜度由加烈時機決定']
    },
    quiz: [
      { q: 'Oloroso 與 Tawny Port 最關鍵的差異是？', options: ['顏色', '甜度（來自加烈時機）', '陳年地', '都完全相同'], answer: 1, explain: 'Oloroso 乾，Tawny 甜，來自加烈時機。' },
      { q: 'Fino 與 Manzanilla 的主要差別是？', options: ['品種不同', '陳年地不同（Sanlúcar 沿海）', '一個是氧化一個是 flor', '一個是甜的'], answer: 1, explain: '同樣是 Palomino＋flor，差在陳年地。' }
    ]
  },

  // ───────────────────────── fo-l3-4 ─────────────────────────
  'fo-l3-4': {
    blocks: [
      info('標籤閱讀', '強化酒的標籤用語通常對應：<b>類別</b>（如 Reserve、LBV）、<b>年齡聲明</b>（如 10 年、20 年）、<b>年份</b>（Vintage、Colheita、Frasqueira）、<b>風格</b>（品種名或乾甜用語）。'),
      compare(
        ['看到', '推論'],
        [
          ['LBV', 'Ruby 系單一年份 Port，約 4–6 年後裝瓶'],
          ['Colheita', '單一年份的 Tawny Port'],
          ['Vintage（Port）', '宣告年份、主要在瓶中陳年'],
          ['年齡聲明（10／20／30／40）', '混調後的平均風格年齡，需官方審核'],
          ['Sercial／Verdelho／Boal／Malvasia', 'Madeira 的品種與甜度'],
          ['Fino Viejo／Manzanilla Pasada', 'Sherry 的長期生物陳年新類別'],
          ['Vergine（Marsala）', '乾型、不得調甜'],
          ['Rutherglen／Classic／Grand／Rare', '由年輕到古老的四級']
        ]
      ),
      info('⚠ 不要背的數字', '各類別的最低陳年與最低酒精度，許多來源數字不一致（見查證報告）。考試的重點是「從標籤推風格」，而不是背精確數字。'),
      expand('標籤與價格', '單一年份與年齡聲明高的酒款，通常代表更長的陳年與更高的成本。')
    ],
    terms: [
      { term: '年齡聲明', def: '標示混調後平均風格年齡的用語，如 10、20、30、40 年。' },
      { term: '標準級／特殊類別', def: 'Port 的兩大分類；特殊類別通常需官方審核。' }
    ],
    practice: {
      prompt: '看到酒標寫 “Colheita 1998” 與 “20 Year Old Tawny”，說明兩者的標示差異。',
      points: ['Colheita：單一年份（1998）的 Tawny', '20 年：混調後的平均風格年齡', '前者重年份稀有性，後者重一致性', '兩者都需經官方認可']
    },
    quiz: [
      { q: '“Colheita” 代表？', options: ['多年份混調的 Ruby', '單一年份的 Tawny Port', '白葡萄 Port', 'Madeira 的等級'], answer: 1, explain: 'Colheita 是單一年份的 Tawny。' },
      { q: '標籤上的年齡聲明（如 20 年）通常指？', options: ['每滴酒皆剛好 20 年', '混調後的平均風格年齡', '裝瓶年數', '葡萄樹齡'], answer: 1, explain: '年齡聲明是平均風格年齡。' }
    ]
  },

  // ───────────────────────── fo-l3-5 ─────────────────────────
  'fo-l3-5': {
    blocks: [
      info('為什麼貴／為什麼便宜', '強化酒的價格主要由<b>時間、損耗、人工與稀有度</b>決定；品牌與市場需求也是變數。'),
      compare(
        ['因素', '推高價格', '壓低價格'],
        [
          ['陳年時間', '長期庫存，資金占用', '年輕即裝瓶'],
          ['蒸發損耗', '木桶陳年損耗大', '大容器、短陳'],
          ['人工與成本', '手工採收、陡坡梯田、人工混調', '機械化、平坦葡萄園'],
          ['稀有度', '單一年份、限量、古老庫存', '標準款、大量調配'],
          ['市場', '禮品、節慶、收藏需求', '食品加工用（如烹飪用酒）']
        ]
      ),
      info('商業挑戰', '許多傳統強化酒面臨需求下滑、年輕族群接受度不足的問題；產區的因應包括強調 en rama、單一年份、年齡聲明、餐搭與調酒。'),
      mis('「陳年越久一定越貴。」稀有度與市場也重要，有些長期陳年的酒仍然價格親民。')
    ],
    terms: [
      { term: '資金占用', def: '庫存長期不賣所需的成本。' },
      { term: '蒸發損耗', def: '木桶陳年中酒液的蒸發量。' }
    ],
    practice: {
      prompt: '說明為何 40 年 Tawny 的價格遠高於基本 Tawny。',
      points: ['長期庫存與資金占用', '蒸發損耗與木桶成本', '老酒稀有，可供混調的庫存有限', '品牌與審核（年齡聲明需審核）']
    },
    quiz: [
      { q: '下列何者最不會直接推高強化酒價格？', options: ['長期陳年', '蒸發損耗', '資金占用', '酒標顏色'], answer: 3, explain: '標籤顏色與成本無關。' },
      { q: '傳統強化酒的商業挑戰之一是？', options: ['需求下滑與年輕族群接受度', '供過於求的新品種', '只能在冬天銷售', '無法出口'], answer: 0, explain: '許多產區面臨需求與世代更替的挑戰。' }
    ]
  },

  // ───────────────────────── fo-l3-6 ─────────────────────────
  'fo-l3-6': {
    blocks: [
      info('答題框架', '論述題用<b>定義 → 因素 → 比較 → 結論</b>。每一段都要回答「為什麼」。'),
      steps('範例：為什麼 Fino 與 Oloroso 風格不同？', [
        { title: '1', text: '<b>定義</b>：兩者都是 Palomino 在 Jerez 製成的乾型 Sherry。' },
        { title: '2', text: '<b>因素</b>：加烈後的酒精度不同。Fino 較低，flor 能生長；Oloroso 較高，flor 無法生長。' },
        { title: '3', text: '<b>比較</b>：Fino 受 flor 保護而淡色、杏仁酵母；Oloroso 氧化而深色、胡桃焦糖。' },
        { title: '4', text: '<b>結論</b>：關鍵變因是加烈酒精度，決定陳年路線與風格。' }
      ]),
      compare(
        ['題型', '要點'],
        [
          ['短答', '一句話給定義，一句話給原因'],
          ['比較', '先相同、再差異、再解釋'],
          ['論述', '定義、因素、比較、結論'],
          ['盲品結論', '風格→品質→適飲／陳年潛力']
        ]
      ),
      info('模擬考提醒', '本課的評量題與練習題是練習用，考試形式以 WSET 最新規格為準。'),
      expand('常見失分', '只報酒名不解釋；背數字但不說原因；忽略題目的比較要求。')
    ],
    terms: [],
    practice: {
      prompt: '用 150 字內論述：為什麼 Madeira 比一般白酒耐久得多？',
      points: ['高酸＋加烈提供穩定性', '加熱與氧化使酒已經「歷經」氧化', '因此開瓶後仍很穩定', '結論句收尾']
    },
    quiz: [
      { q: '論述題的建議結構是？', options: ['只列重點', '定義→因素→比較→結論', '只寫結論', '只寫例子'], answer: 1, explain: '依序回答是什麼、為什麼、比較與結論。' },
      { q: '短答題的原則是？', options: ['寫滿一頁', '一句定義加一句原因', '只寫關鍵字', '不寫原因'], answer: 1, explain: '簡短、準確、帶原因。' }
    ]
  },

  // ───────────────────────── fo-l3-7 ─────────────────────────
  'fo-l3-7': {
    blocks: [
      info('Level 3 綜合評量', '整合 Level 1–3：加烈時機、陳年路線、solera、各產區與風格、盲品線索、標籤判讀、價格論述。'),
      compare(
        ['主題', '提醒'],
        [
          ['加烈時機', '越早越甜、越晚越乾'],
          ['flor', '酒精度太高無法存活'],
          ['Sherry', 'Palomino、陳年地、Fino／Amontillado／Oloroso'],
          ['Port', '發酵中途加烈；Ruby vs Tawny；LBV、Colheita'],
          ['Madeira', '高酸；Sercial→Malvasia；estufagem vs canteiro'],
          ['VDN／Rutherglen', 'mutage；四級由年輕到古老']
        ]
      ),
      expand('通過條件', '下方 12 題綜合評量，答對 60 分以上才可標記完成。')
    ],
    terms: [],
    practice: {
      prompt: '以任一強化酒為例，用「品種、加烈時機、陳年路線、甜度、價格因素」寫一段摘要。',
      points: ['五個面向皆有提及', '每一點都連到風格成因', '以一句結論收尾']
    },
    passScore: 60,
    quiz: [
      { q: '發酵中途加烈得到的是？', options: ['乾型', '甜型', '氣泡酒', '無酒精'], answer: 1, explain: '保留殘糖。' },
      { q: 'Flor 無法生長的條件是？', options: ['酒精度過高', '酒精度偏低', '有空氣', '有酵母'], answer: 0, explain: '酒精度太高 flor 無法存活。' },
      { q: '下列何者是 Ruby 系？', options: ['Colheita', 'LBV', '年齡聲明 Tawny', 'Rutherglen'], answer: 1, explain: 'LBV 是 Ruby 系。' },
      { q: 'Madeira 品種中最甜的是？', options: ['Sercial', 'Verdelho', 'Boal', 'Malvasia'], answer: 3, explain: 'Malvasia 最甜。' },
      { q: 'Manzanilla 與 Fino 的差別是？', options: ['品種', '陳年地', '甜度', '年份'], answer: 1, explain: 'Manzanilla 僅在 Sanlúcar 陳年。' },
      { q: 'Tawny 與 Madeira 在盲品中較易區分的線索是？', options: ['Madeira 酸度明顯較高', 'Tawny 酸度較高', '顏色', '氣泡'], answer: 0, explain: 'Madeira 高酸。' },
      { q: 'Solera 的主要效果？', options: ['變甜', '風格長期一致', '增加酒精', '降低成本'], answer: 1, explain: '多年份混調使風格一致。' },
      { q: '標籤 “Colheita” 代表？', options: ['單一年份 Tawny', '多年份 Ruby', 'White Port', 'Madeira 等級'], answer: 0, explain: 'Colheita 是單一年份的 Tawny。' },
      { q: '氧化陳年的 Oloroso 與 Tawny Port 最關鍵的差異？', options: ['甜度', '顏色', '都相同', '氣味'], answer: 0, explain: '加烈時機不同導致乾與甜。' },
      { q: 'Rutherglen 四級由年輕到古老？', options: ['Rare→Grand→Classic→Rutherglen', 'Rutherglen→Classic→Grand→Rare', 'Grand→Rare→Classic→Rutherglen', 'Classic→Grand→Rutherglen→Rare'], answer: 1, explain: 'Rutherglen、Classic、Grand、Rare。' },
      { q: '高年份強化酒價格高的核心原因？', options: ['瓶子大', '時間、損耗與資金占用', '酒精度高', '顏色深'], answer: 1, explain: '時間與損耗。' },
      { q: '論述題的結構建議？', options: ['只寫結論', '定義→因素→比較→結論', '只列重點', '只寫例子'], answer: 1, explain: '四段式。' }
    ]
  }
}
