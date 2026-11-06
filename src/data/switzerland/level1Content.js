// 瑞士葡萄酒課程 Level 1 課文（階段 A）
// 區塊格式沿用 SlideBlocks：info / compare(headers, rows)。
// 只寫結構性事實；面積、占比、出口比例等會隨年度變動的數字不進課文與測驗（見 SWISS_FACT_CHECK.md）。

const info = (title, content) => ({ type: 'info', title, content })
const mis = (content) => ({ type: 'info', title: '常見誤解', content })
const compare = (headers, rows) => ({ type: 'compare', props: { headers, rows } })

export const SWI_LEVEL1_CONTENT = {
  // ───────────────────────── swi-l1-1 ─────────────────────────
  'swi-l1-1': {
    blocks: [
      info('一句話', '瑞士的葡萄栽培可追溯到羅馬時代，由中世紀修道院把陡坡改造成梯田，19 世紀被病蟲害重創，到 1988 年因過剩危機才開始建立原產地制度。'),
      compare(
        ['時期', '發生什麼', '影響'],
        [
          ['羅馬時代', '羅馬人在今日瑞士一帶種植葡萄', '瑞士葡萄栽培歷史的起點'],
          ['中世紀', '本篤會與熙篤會（Cistercian）等修院開墾、經營葡萄園；Lavaux 的梯田即源於修士', '陡坡石牆梯田的景觀至今仍在，Lavaux 於 2007 年列入 UNESCO 世界遺產'],
          ['19 世紀', '白粉病、露菌病與根瘤蚜（phylloxera）相繼傳入，加上外國酒的競爭', '葡萄園面積大幅縮減；據 Swiss Wine Promotion，日內瓦出現根瘤蚜後，約一半的瑞士葡萄樹未再重植'],
          ['二戰後', '產業復甦', '重新發展，但產量導向'],
          ['1988', '過剩危機；日內瓦率先引進 AOC，之後其他產酒州陸續跟進', '品質導向的原產地制度開始，且由「各州」建立']
        ]
      ),
      info('為什麼是修士？', '陡坡開墾需要長期的人力與資本，而修院擁有土地、勞力與長遠經營的耐心。這解釋了為什麼最陡、最費工的葡萄園（如 Lavaux）往往有修院的歷史。'),
      mis('「瑞士沒有葡萄酒傳統，是最近才有的。」不對：葡萄栽培可追溯到羅馬時代，現代制度才是較晚期的（1988 年起）。'),
      info('怎麼答', '被問「歷史如何塑造今日的瑞士葡萄酒」時，用因果鏈：<b>修院開墾 → 梯田景觀與高成本 → 19 世紀病蟲害縮減面積 → 1988 年過剩危機 → 各州各自建立 AOC</b>。')
    ],
    terms: [
      { term: 'Cistercian（熙篤會）', def: '中世紀修會，在 Vaud 等地開墾葡萄園。' },
      { term: '根瘤蚜 (phylloxera)', def: '19 世紀傳入歐洲的葡萄根部害蟲，造成大量葡萄樹死亡。' },
      { term: 'AOC', def: 'Appellation d’Origine Contrôlée，原產地控制名稱。' },
      { term: 'UNESCO 世界遺產', def: 'Lavaux 葡萄園梯田於 2007 年列入。' }
    ],
    practice: {
      prompt: '用兩三句話說明：為什麼瑞士是在 1988 年才開始建立 AOC，而且是由州而不是聯邦推動？',
      points: ['1988 年過剩危機促使產業轉向品質導向', '日內瓦率先引進，其他產酒州陸續跟進', '制度由各州建立，反映聯邦制下州的自主性']
    },
    quiz: [
      { q: '下列哪一項最能說明 Lavaux 梯田的起源？', options: ['19 世紀的機械化開墾', '中世紀修院的開墾與經營', '二戰後的政府計畫', '1988 年的 AOC 立法'], answer: 1, explain: '中世紀的修道院（如熙篤會）把陡坡改造成石牆梯田。' },
      { q: '19 世紀對瑞士葡萄園造成重大打擊的原因是？', options: ['根瘤蚜與黴病，加上外國酒競爭', '羅馬帝國滅亡', 'AOC 的限制', '焚風消失'], answer: 0, explain: '根瘤蚜、白粉病與露菌病傳入，加上外國競爭，面積大幅縮減。' },
      { q: '瑞士第一個引進 AOC 制度的州是？', options: ['Valais', 'Vaud', 'Geneva', 'Ticino'], answer: 2, explain: '依 Swiss Wine Promotion，1988 年日內瓦率先引進 AOC，其他州陸續跟進。' }
    ]
  },

  // ───────────────────────── swi-l1-2 ─────────────────────────
  'swi-l1-2': {
    blocks: [
      info('先抓大方向', '瑞士多山，但葡萄園集中在<b>湖畔、河谷與向陽坡</b>：這些地方有湖泊調節、焚風與充足日照，讓葡萄能完整成熟。官方把 26 個州與各 AOC 歸併為<b>六大產區</b>。'),
      compare(
        ['六大產區', '位置與特徵'],
        [
          ['Valais', '上隆河谷（Rhône），阿爾卑斯內陸，乾燥、日照充足；瑞士最大產區'],
          ['Vaud', '日內瓦湖北岸（Lavaux、La Côte 等）與北部；Chasselas 的重鎮'],
          ['Geneva', '西南角，介於 Jura 與阿爾卑斯之間，鄰近日內瓦市'],
          ['Three Lakes', '三湖區：Neuchâtel、Lake Biel 與 Vully'],
          ['Ticino', '阿爾卑斯南側、面向義大利；超過八成葡萄園種 Merlot'],
          ['德語區（German-speaking Switzerland）', '跨多個州的德語區，Graubünden、Zürich、Schaffhausen 等']
        ]
      ),
      info('氣候的三個因素', '<b>1. 湖泊</b>：像蓄熱池，夏涼冬暖，降低霜害並調節溫度。<br><b>2. 焚風（föhn）</b>：從山脈下沖的溫暖乾燥風，幫助成熟，並使葡萄乾燥而降低灰黴病風險。<br><b>3. 山脈</b>：阿爾卑斯與 Jura 擋住來自西面的壞天氣；Valais 位於阿爾卑斯雨影區，降雨少。'),
      compare(
        ['比較', 'Valais', 'Ticino'],
        [
          ['位置', '阿爾卑斯內陸谷地', '阿爾卑斯南側'],
          ['氣候特徵', '瑞士最乾燥、日照最充足的州之一；焚風', '瑞士降雨最多、也最暖，夏季常有短而劇烈的冰雹'],
          ['葡萄園海拔', '最高可達 Visperterminen 1,150 m', '多在低處的丘陵與谷地']
        ]
      ),
      mis('「瑞士太冷，只能種耐寒的雜種品種。」不對：瑞士葡萄園位於約北緯 45–47 度，湖泊與焚風讓 Vitis vinifera 在許多谷地與湖畔都能成熟；Valais 日照甚至足以讓葡萄園爬到很高的海拔。'),
      info('怎麼答', '解釋「某產區為何適合栽培」時，先寫<b>位置與地形</b>，再寫<b>湖泊／焚風／山脈</b>的作用，最後連到<b>成熟度與風格</b>。面積與占比數字各來源不同，只當背景，不必背。')
    ],
    terms: [
      { term: '焚風 (föhn)', def: '翻越山脈後下沖的溫暖乾燥風。' },
      { term: '雨影 (rain shadow)', def: '山脈擋住雨雲，使背風側降雨少。' },
      { term: 'Three Lakes', def: 'Neuchâtel、Lake Biel 與 Vully 組成的產區。' },
      { term: 'Visperterminen', def: 'Valais 的高海拔葡萄園，海拔約 1,150 m。' }
    ],
    practice: {
      prompt: '用兩三句話說明：湖泊與焚風各如何幫助瑞士葡萄成熟？',
      points: ['湖泊蓄熱並調節溫度，降低霜害', '焚風溫暖乾燥，幫助成熟並降低病害風險', '都連回成熟度與風格']
    },
    quiz: [
      { q: '下列何者不屬於瑞士官方的六大產區？', options: ['Valais', 'Three Lakes', 'Ticino', 'Alsace'], answer: 3, explain: '六大產區是 Valais、Vaud、Geneva、Three Lakes、Ticino 與德語區。Alsace 在法國。' },
      { q: '超過八成葡萄園種 Merlot 的產區是？', options: ['Ticino', 'Valais', 'Geneva', 'Vaud'], answer: 0, explain: 'Ticino 位於阿爾卑斯南側，以 Merlot 為主。' },
      { q: '焚風（föhn）對葡萄栽培的主要幫助是？', options: ['降低溫度', '溫暖乾燥、幫助成熟並降低灰黴病風險', '增加降雨', '阻止光合作用'], answer: 1, explain: '焚風溫暖而乾燥，有助成熟，也讓葡萄較乾燥。' },
      { q: '三湖區（Three Lakes）包含哪些湖區？', options: ['Neuchâtel、Lake Biel、Vully', 'Zürich、Lugano、Maggiore', 'Geneva、Annecy、Bourget', 'Constance、Thun、Brienz'], answer: 0, explain: '依 Swiss Wine Promotion，Three Lakes 分為 Neuchâtel、Lake Biel 與 Vully。' }
    ]
  },

  // ───────────────────────── swi-l1-3 ─────────────────────────
  'swi-l1-3': {
    blocks: [
      info('先抓大方向', '瑞士品種可分成三群：<b>國際／廣布的品種</b>（Pinot Noir、Gamay、Chasselas）、<b>南部的 Merlot</b>，以及 <b>Valais 的本土特產</b>。白酒中以 Chasselas 為首，紅酒中以 Pinot Noir 為首（占比隨年度變動，不必背數字）。'),
      compare(
        ['品種', '顏色', '主要產區與備註'],
        [
          ['Chasselas', '白', '瑞士最具代表性的白品種；Vaud 是重鎮；在 Valais 稱 Fendant'],
          ['Pinot Noir', '紅', '最廣泛種植的紅品種之一；Valais 的 Dôle 以 Pinot Noir 為主、搭配 Gamay'],
          ['Gamay', '紅', 'Vaud、Geneva 等；Gamaret 與 Garanoir 是 Gamay 的雜交品種'],
          ['Merlot', '紅', 'Ticino 的主角'],
          ['Müller-Thurgau', '白', '以瑞士葡萄栽培先驅 Hermann Müller-Thurgau 命名；瑞士常見的白品種之一']
        ]
      ),
      compare(
        ['Valais 本土特產', '顏色', '備註'],
        [
          ['Petite Arvine', '白', '鮮明酸度與鹹味礦物感；有乾型也有甜型'],
          ['Amigne', '白', 'Valais 特產'],
          ['Humagne Blanche', '白', '歷史悠久的白品種；與 Humagne Rouge 並非同一品種'],
          ['Heida', '白', 'Savagnin 在 Valais 的名稱，Visperterminen 一帶著名'],
          ['Rèze', '白', 'Vin des Glaciers 的原料'],
          ['Cornalin', '紅', 'Valais 的代表性本土紅品種'],
          ['Humagne Rouge', '紅', 'Valais 的本土紅品種']
        ]
      ),
      mis('「Fendant 是 Valais 的另一個葡萄品種。」不對：Fendant 是 Chasselas 在 Valais 的名稱，同一品種、不同名稱。'),
      info('怎麼答', '被問品種時，用「<b>品種 → 主要產區 → 風格</b>」三步。別名題（Fendant＝Chasselas、Heida＝Savagnin）常出現在辨識題。')
    ],
    terms: [
      { term: 'Fendant', def: 'Valais 對 Chasselas 的稱呼。' },
      { term: 'Dôle', def: 'Valais 的紅酒，主要由 Pinot Noir 與 Gamay 混調。' },
      { term: 'Heida', def: 'Savagnin 在 Valais 的名稱。' },
      { term: 'Gamaret／Garanoir', def: 'Gamay 的雜交品種，常見於 Vaud。' },
      { term: 'Vin des Glaciers', def: '以 Rèze 釀成、風格近似雪莉的 Valais 傳統酒。' }
    ],
    practice: {
      prompt: '用兩三句話說明：為什麼說 Valais 是瑞士「本土品種」最集中的地方？',
      points: ['Petite Arvine、Amigne、Humagne、Cornalin、Heida、Rèze 等特產集中於此', '本土品種有別於 Chasselas、Pinot Noir 等廣布品種', '品種多樣是瑞士酒難以標準化、但具辨識度的原因']
    },
    quiz: [
      { q: 'Fendant 是下列哪個品種在 Valais 的名稱？', options: ['Pinot Noir', 'Chasselas', 'Petite Arvine', 'Merlot'], answer: 1, explain: 'Fendant 是 Chasselas 在 Valais 的名稱。' },
      { q: 'Heida 是下列哪個品種？', options: ['Savagnin', 'Gamay', 'Humagne Rouge', 'Cornalin'], answer: 0, explain: 'Heida 是 Savagnin 在 Valais 的名稱。' },
      { q: 'Gamaret 與 Garanoir 與哪個品種關係最密切？', options: ['Merlot', 'Gamay', 'Chasselas', 'Rèze'], answer: 1, explain: '兩者是 Gamay 的雜交品種。' },
      { q: 'Vin des Glaciers 的原料品種是？', options: ['Rèze', 'Merlot', 'Müller-Thurgau', 'Garanoir'], answer: 0, explain: 'Rèze 是 Vin des Glaciers 的原料。' }
    ]
  },

  // ───────────────────────── swi-l1-4 ─────────────────────────
  'swi-l1-4': {
    blocks: [
      info('先抓大方向', '瑞士不是歐盟成員，沒有適用歐盟的葡萄酒法規；它的原產地制度是<b>由各州制定的 AOC（亦稱 AOP）</b>。聯邦只訂基本框架，各州決定自己的名稱、允許品種與細則，所以 <b>Grand Cru 是州級，而非全國級</b>。'),
      compare(
        ['層級', '誰決定', '說明'],
        [
          ['聯邦框架', '聯邦', '訂定最低標準與標示原則'],
          ['AOC／AOP', '各州', '各州自行制定名稱、品種與生產規定；全國共有 62 個 AOC 歸併於六大產區（Swiss Wine Promotion）'],
          ['Grand Cru', '各州', '例如 Vaud 的 Dézaley、Calamin；Valais 以村鎮（commune）為單位的 Grand Cru']
        ]
      ),
      info('兩個州的 Grand Cru 做法', '<b>Vaud</b>：Grand Cru 是特定葡萄園，Dézaley 與 Calamin 都在 Lavaux。<br><b>Valais</b>：Grand Cru 以村鎮為單位，並限定可用的品種。兩州做法不同，說明「瑞士沒有全國統一的 Grand Cru 定義」。'),
      mis('「瑞士有像法國 INAO 那樣的全國性集中制度。」不對：細則由各州制定，所以同名詞在不同州的意義可能不同。'),
      info('名稱的變化', '「AOC」是早期使用的名稱；之後與國際用語接軌，AOP 也被使用，兩者在標籤上都可能出現。<br><b>注意</b>：Valais 開始實施 AOC 的年份各來源說法不同（1990 或 1993），本課不以年份出題。'),
      info('怎麼答', '被問「瑞士制度與法國有何不同」時，用<b>誰制定、層級、Grand Cru 意義</b>三點：法國集中、瑞士由各州主導；瑞士 Grand Cru 是州級概念。')
    ],
    terms: [
      { term: 'AOC／AOP', def: '原產地控制名稱／原產地保護名稱，在瑞士由各州制定細則。' },
      { term: 'Grand Cru（瑞士）', def: '州級的最高層級名稱，Vaud 與 Valais 做法不同。' },
      { term: 'Commune', def: '村鎮；Valais 的 Grand Cru 以村鎮為單位。' }
    ],
    practice: {
      prompt: '用兩三句話說明：為什麼瑞士沒有全國統一的 Grand Cru？',
      points: ['瑞士為聯邦制，AOC 由各州制定', 'Vaud 以特定葡萄園、Valais 以村鎮為單位，做法不同', '聯邦只訂框架，不訂 Grand Cru 的統一定義']
    },
    quiz: [
      { q: '瑞士 AOC 的細則主要由誰制定？', options: ['歐盟', '聯邦政府', '各州', '產區生產者協會'], answer: 2, explain: '各州制定自己的 AOC 細則，聯邦只訂框架。' },
      { q: 'Dézaley 與 Calamin 屬於哪個州的 Grand Cru？', options: ['Valais', 'Vaud', 'Geneva', 'Ticino'], answer: 1, explain: '兩者都在 Vaud 的 Lavaux。' },
      { q: '關於瑞士的 Grand Cru，何者正確？', options: ['是全國統一定義', '各州各自定義，Vaud 與 Valais 做法不同', '由歐盟規範', '只用於紅酒'], answer: 1, explain: 'Grand Cru 是州級概念，沒有全國統一定義。' },
      { q: '瑞士為什麼沒有適用歐盟葡萄酒法規？', options: ['瑞士不是歐盟成員', '歐盟禁止瑞士酒', '瑞士不產酒', '瑞士使用美國法規'], answer: 0, explain: '瑞士不是歐盟成員，因此發展自己的制度。' }
    ]
  },

  // ───────────────────────── swi-l1-5 ─────────────────────────
  'swi-l1-5': {
    blocks: [
      info('評量說明', '整合 Level 1：歷史、地理與六大產區、品種與別名、州級 AOC 與 Grand Cru。共 8 題，及格 60。'),
      info('複習清單', '• 修院 → 梯田；根瘤蚜與黴病 → 縮減；1988 過剩危機 → 日內瓦率先 AOC<br>• 六大產區與湖泊／焚風／山脈<br>• Fendant＝Chasselas、Heida＝Savagnin；Dôle；Ticino＝Merlot<br>• AOC 由各州制定；Grand Cru 是州級')
    ],
    terms: [],
    passScore: 60,
    quiz: [
      { q: '下列哪項最能說明為什麼瑞士多數陡坡葡萄園有修院歷史？', options: ['修院有土地、勞力與長遠經營能力', '修院禁止平地種植', '羅馬人禁止修院種植', '陡坡不需要灌溉'], answer: 0, explain: '陡坡開墾需要長期投入，修院正具備這些條件。' },
      { q: '1988 年瑞士葡萄酒發生什麼轉折？', options: ['過剩危機促使日內瓦引進 AOC', '禁止進口酒', '全國統一分級', '聯邦廢除 AOC'], answer: 0, explain: '過剩危機後日內瓦率先引進 AOC，其他州跟進。' },
      { q: '官方六大產區不包括？', options: ['Valais', 'Vaud', 'Ticino', 'Piemonte'], answer: 3, explain: 'Piemonte 在義大利。' },
      { q: 'Ticino 的主要品種是？', options: ['Chasselas', 'Merlot', 'Petite Arvine', 'Heida'], answer: 1, explain: 'Ticino 以 Merlot 為主。' },
      { q: 'Fendant 指的是？', options: ['Valais 的 Chasselas', 'Vaud 的 Pinot Noir', 'Geneva 的 Gamay', 'Ticino 的 Merlot'], answer: 0, explain: 'Fendant 是 Chasselas 在 Valais 的名稱。' },
      { q: 'Dôle 主要由哪些品種混調？', options: ['Merlot 與 Cabernet', 'Pinot Noir 與 Gamay', 'Chasselas 與 Rèze', 'Syrah 與 Cornalin'], answer: 1, explain: 'Dôle 是 Valais 以 Pinot Noir 與 Gamay 為主的紅酒。' },
      { q: '焚風對葡萄園最主要的好處是？', options: ['溫暖乾燥、助成熟、降低病害風險', '增加霜害', '增加降雨', '降低日照'], answer: 0, explain: '焚風溫暖乾燥，有助成熟與降低灰黴病風險。' },
      { q: '關於瑞士 Grand Cru，下列何者正確？', options: ['全國統一定義', '州級概念，Vaud 與 Valais 做法不同', '只存在於 Ticino', '由聯邦評分'], answer: 1, explain: '各州自行定義 Grand Cru。' }
    ]
  }
}
