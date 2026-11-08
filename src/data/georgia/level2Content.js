// 喬治亞葡萄酒課程 Level 2 課文
// 事實來源（官方）：UNESCO ICH 00870（8.COM 8.13）、OIV-ECO 647-2020、英國政府公布的喬治亞 PDO 產品規格（Tsinandali、Mukuzani、Kindzmarauli、Khvanchkara、Kakheti、Sviri、Teliani、Atenuri、Tvishi）。
// 規格 PDF 的註冊日期有內部不一致處（如 Khvanchkara 2006／2007），課文與題庫不用註冊日期。
// 未取得官方規格的 PDO（Akhasheni、Gurjaani、Vazisubani、Manavi、Napareuli、Tibaani、Kvareli、Kotekhi、Kardenakhi 等）只列名稱。

const info = (title, content) => ({ type: 'info', title, content })
const mis = (content) => ({ type: 'info', title: '常見誤解', content })
const compare = (headers, rows) => ({ type: 'compare', props: { headers, rows } })

export const GE_LEVEL2_CONTENT = {
  // ───────────────────────── ge-l2-1 ─────────────────────────
  'ge-l2-1': {
    blocks: [
      info('一句話', 'Qvevri 是埋在地下的蛋形陶罐：葡萄壓榨後，果汁連同皮、梗、籽一起倒入罐中，封口後埋入地下發酵。UNESCO 的描述是，酒在罐中發酵約五到六個月後才飲用。'),
      compare(
        ['項目', '內容', '來源'],
        [
          ['器具', '蛋形陶罐，用來釀造、陳年與儲存葡萄酒', 'UNESCO'],
          ['入罐內容', '榨出的果汁，加上果皮、果梗與葡萄籽', 'UNESCO'],
          ['封存方式', '封口後埋入地下', 'UNESCO'],
          ['發酵與等待', '約五到六個月後才飲用', 'UNESCO'],
          ['登錄', '2013 年（8.COM）列入人類非物質文化遺產代表作名錄，決議 8.COM 8.13', 'UNESCO']
        ]
      ),
      info('埋在地下的原因（推論）', '地下溫度變化緩慢，所以發酵與陳年的溫度較穩定。這是由「埋藏」推導出的因果，官方描述只寫到「封口並埋入地下」。'),
      info('皮渣接觸白酒的國際定義', 'OIV 在決議 OIV-ECO 647-2020 為「白酒浸皮」（white wine with maceration）訂了定義：只能用白葡萄品種、與果渣（果皮、果肉、籽，可能含梗）一起發酵，<b>浸皮階段至少一個月</b>，酒色可呈橙琥珀色並帶單寧感。注意這個定義是國際通則，不是喬治亞專有。'),
      mis('「Qvevri 酒都是白葡萄做的橘酒。」不對：罐中可釀紅酒，白葡萄也可以不浸皮。OIV 的「白酒浸皮」另外要求浸皮至少一個月。')
    ],
    terms: [
      { term: 'Qvevri', def: '埋在地下的蛋形陶罐，用於釀造、陳年與儲存葡萄酒。' },
      { term: '白酒浸皮（White wine with maceration）', def: 'OIV 定義：白葡萄與果渣一起發酵，浸皮至少一個月。' },
      { term: '果渣（pomace）', def: '果皮、果肉、籽，可能含梗。' }
    ],
    practice: {
      prompt: '用兩三句話說明 qvevri 釀酒的流程，以及 OIV 對「白酒浸皮」的最低要求。',
      points: ['果汁連同皮、梗、籽倒入蛋形陶罐，封口後埋入地下', '發酵約五到六個月（UNESCO 描述）', 'OIV：只能用白品種，浸皮至少一個月']
    },
    quiz: [
      { q: '依 UNESCO 的描述，qvevri 裡裝的是什麼？', options: ['只有果汁', '果汁加上果皮、果梗與葡萄籽', '只有葡萄皮', '已發酵完成的酒'], answer: 1, explain: '果汁連同皮、梗、籽一起倒入罐中。' },
      { q: 'OIV 對「白酒浸皮」規定的最短浸皮時間是？', options: ['一週', '兩週', '一個月', '六個月'], answer: 2, explain: 'OIV-ECO 647-2020 規定浸皮階段至少一個月。' },
      { q: 'OIV 的「白酒浸皮」定義允許使用哪類品種？', options: ['只能白葡萄品種', '只能紅葡萄品種', '紅白皆可', '只能本土品種'], answer: 0, explain: '定義要求只能使用白葡萄品種。' }
    ]
  },

  // ───────────────────────── ge-l2-2 ─────────────────────────
  'ge-l2-2': {
    blocks: [
      info('先抓大方向', '喬治亞的酒不能只分「qvevri」與「不是 qvevri」。官方 PDO 規格其實對釀法管得很少，多半只規定品種、產量、最低酒精度與（有些）木桶陳年，<b>釀造容器與浸皮長短多半由生產者決定</b>。'),
      compare(
        ['項目', '官方規格怎麼說', '例子'],
        [
          ['陳年', '多數乾型 PDO：陳年為選擇性；若陳年，須在木桶至少 6 個月', 'Tsinandali、Mukuzani、Teliani'],
          ['不指定橡木', 'Mukuzani 規格寫木桶，並未指定橡木', 'Mukuzani'],
          ['不完全發酵', '半甜紅以「不完全發酵」留下殘糖', 'Kindzmarauli、Khvanchkara'],
          ['發酵含果皮', 'Khvanchkara 規格寫在果皮上不完全發酵', 'Khvanchkara'],
          ['酒色', 'Kakheti PDO 容許白、紅、粉紅與琥珀酒，其中琥珀酒最低酒精度 12%', 'Kakheti'],
          ['其他類型', 'Tvishi 規格含半甜白、乾型琥珀與白色強化酒', 'Tvishi']
        ]
      ),
      info('怎麼讀風格', '判斷一支酒用什麼風格，要看標籤上的 PDO 名稱與酒色，再看生產者說明；<b>不能只從 PDO 名稱推出是否用 qvevri</b>。'),
      mis('「PDO 規格會規定一定要用 qvevri。」不對：本課所讀的規格都沒有這樣規定；規格主要管品種、產量、酒精度與陳年。')
    ],
    terms: [
      { term: '不完全發酵（incomplete fermentation）', def: '發酵未進行到把糖耗完，留下殘糖，是半甜酒的做法。' },
      { term: '殘糖（residual sugar）', def: '發酵後酒中剩下的糖。' }
    ],
    practice: {
      prompt: '解釋為什麼不能只從 PDO 名稱判斷一支酒是否用 qvevri 釀造。',
      points: ['PDO 規格主要規定品種、產量、酒精度與陳年', '規格多半沒有規定釀造容器或浸皮長短']
    },
    quiz: [
      { q: '多數乾型 PDO 規格對木桶陳年的規定是？', options: ['必須陳年 12 個月', '陳年為選擇性，若陳年須在木桶至少 6 個月', '禁止使用木桶', '必須使用橡木'], answer: 1, explain: 'Tsinandali、Mukuzani、Teliani 規格皆為陳年選擇性、若陳年至少 6 個月木桶。' },
      { q: 'Kakheti PDO 的琥珀酒最低酒精度是？', options: ['10.5%', '11%', '12%', '13%'], answer: 2, explain: 'Kakheti 規格：乾型白與紅 11%，琥珀酒 12%，半乾、半甜與甜型 10.5%。' },
      { q: 'Kindzmarauli 與 Khvanchkara 如何形成半甜風格？', options: ['發酵後加糖', '不完全發酵', '加烈', '晚收葡萄'], answer: 1, explain: '兩者規格都寫以不完全發酵製成。' }
    ]
  },

  // ───────────────────────── ge-l2-3 ─────────────────────────
  'ge-l2-3': {
    blocks: [
      info('先抓大方向', '東部 Kakheti 有「大區 PDO」也有「小區 PDO」。<b>Kakheti（Kakhuri）</b>是涵蓋八個市鎮的大區名稱，<b>Tsinandali</b>等則是更小的微型區（micro-zone）。'),
      compare(
        ['PDO', '範圍', '品種與類型'],
        [
          ['Kakheti（Kakhuri）', '八個市鎮：Akhmeta、Telavi、Gurjaani、Sighnaghi、Dedoplistskaro、Kvareli、Lagodekhi、Sagarejo', '白與琥珀：Rkatsiteli、Kakhuri Mtsvane、Kisi、Khikhvi 等；紅與粉紅：Saperavi、Cabernet Sauvignon 等；乾至甜型'],
          ['Tsinandali', 'Telavi 市鎮內，Alazani 河右岸的微型區，含 15 個村', '白：至少 85% Rkatsiteli、至多 15% Kakhuri Mtsvane；紅：僅 Saperavi；皆為乾型']
        ]
      ),
      compare(
        ['規格項目', 'Kakheti（Kakhuri）', 'Tsinandali'],
        [
          ['最低酒精度', '乾白與乾紅 11%；琥珀 12%；其他 10.5%', '實際酒精度至少 11%，總酒精度不超過 15%'],
          ['產量上限', 'Rkatsiteli 每公頃 12 噸；Saperavi 10 噸；Khikhvi 6 噸', 'Rkatsiteli 與 Saperavi 10 噸；Kakhuri Mtsvane 8 噸'],
          ['出酒率', '每噸葡萄不超過 650 公升', '每噸葡萄不超過 650 公升'],
          ['陳年', '（規格重點在品種與糖度）', '選擇性；若陳年，木桶至少 6 個月']
        ]
      ),
      info('其他受協定保護的東部名稱', 'Gurjaani、Vazisubani、Manavi、Napareuli、Tibaani 都屬於受歐盟與英國協定保護的 18 個名稱，本課尚未取得它們的官方規格，所以只認名稱與所在大區（Kakheti）。'),
      mis('「Tsinandali 只有白酒。」不對：Tsinandali 規格同時涵蓋白酒與僅用 Saperavi 的乾紅。')
    ],
    terms: [
      { term: 'Micro-zone', def: '喬治亞 PDO 規格中的小範圍法定區域，由特定村莊界定。' },
      { term: 'Alazani', def: 'Kakheti 的主要河流，許多東部 PDO 位於其兩岸。' }
    ],
    practice: {
      prompt: '比較 Kakheti（Kakhuri）與 Tsinandali 在範圍與品種上的差別。',
      points: ['Kakheti：涵蓋八個市鎮的大區，品種多、酒色多', 'Tsinandali：Telavi 內 Alazani 右岸的微型區，白酒至少 85% Rkatsiteli、至多 15% Kakhuri Mtsvane，紅酒僅 Saperavi']
    },
    quiz: [
      { q: 'Kakheti（Kakhuri）PDO 涵蓋幾個市鎮？', options: ['三個', '五個', '八個', '十二個'], answer: 2, explain: '規格列出 Akhmeta、Telavi、Gurjaani、Sighnaghi、Dedoplistskaro、Kvareli、Lagodekhi、Sagarejo 八個市鎮。' },
      { q: 'Tsinandali 白酒的品種規定是？', options: ['100% Rkatsiteli', '至少 85% Rkatsiteli，至多 15% Kakhuri Mtsvane', '一半一半', '至少 85% Kakhuri Mtsvane'], answer: 1, explain: '規格寫至少 85% Rkatsiteli、至多 15% Kakhuri Mtsvane，不得有其他品種。' },
      { q: 'Tsinandali 的紅酒使用什麼品種？', options: ['Cabernet Sauvignon', 'Saperavi', 'Aleksandrouli', '沒有紅酒'], answer: 1, explain: 'Tsinandali 規格的紅酒僅用 Saperavi。' },
      { q: 'Tsinandali 位於哪個市鎮與河岸？', options: ['Telavi，Alazani 右岸', 'Gurjaani，Alazani 左岸', 'Kvareli，Rioni 右岸', 'Gori，Mtkvari 右岸'], answer: 0, explain: '微型區位於 Telavi 市鎮，Alazani 河右岸。' }
    ]
  },

  // ───────────────────────── ge-l2-4 ─────────────────────────
  'ge-l2-4': {
    blocks: [
      info('先抓大方向', 'Kakheti 的三個代表紅酒 PDO：<b>Mukuzani</b>（Saperavi 乾紅）、<b>Kindzmarauli</b>（Saperavi 半甜紅）、<b>Teliani</b>（Cabernet Sauvignon 乾紅）。同一河谷，風格卻因品種與糖度而不同。'),
      compare(
        ['', 'Mukuzani', 'Kindzmarauli', 'Teliani'],
        [
          ['品種', 'Saperavi 100%', 'Saperavi 與 Saperavi Budeshuri（規格未列比例）', 'Cabernet Sauvignon 100%'],
          ['甜度', '乾', '半甜；殘糖 18–45 g/L', '乾；殘糖不超過 4 g/L'],
          ['位置', 'Alazani 右岸微型區，含 10 個村', 'Kvareli 市鎮，高加索支脈南坡，海拔 250–550 m', 'Alazani 中游，Tsiv-Gombori 山脈東北坡，海拔 350–600 m'],
          ['最低酒精度', '實際 11%，總酒精度不超過 15%', '10.5%', '實際 11%，總酒精度不超過 15%'],
          ['產量', '每公頃 10 噸；每噸葡萄 650 公升', '每公頃 10 噸；每噸葡萄 650 公升', '每公頃 10 噸；每噸葡萄 650 公升'],
          ['陳年', '選擇性；若陳年，木桶至少 6 個月', '規格未載明', '選擇性；若陳年，木桶至少 6 個月'],
          ['其他', '規格未指定橡木', '以不完全發酵製成；採收時糖度至少 22%', '採收時糖度至少 19%']
        ]
      ),
      info('Akhasheni', 'Akhasheni 也是 Saperavi 的半甜紅，屬受協定保護的 18 個名稱之一。本課尚未取得它的官方規格，所以只認名稱與風格類型。'),
      mis('「Saperavi 都是半甜。」不對：Mukuzani 是乾紅，Kindzmarauli 與 Akhasheni 才是半甜紅。')
    ],
    terms: [
      { term: 'Saperavi Budeshuri', def: 'Kindzmarauli 規格列出的 Saperavi 相關品種之一。' },
      { term: 'Demi-doux', def: '規格用語，半甜。' }
    ],
    practice: {
      prompt: '比較 Mukuzani 與 Kindzmarauli：品種、甜度與酒精度。',
      points: ['都以 Saperavi 為主', 'Mukuzani 乾紅、實際酒精度至少 11%', 'Kindzmarauli 半甜（殘糖 18–45 g/L）、最低酒精度 10.5%']
    },
    quiz: [
      { q: 'Teliani 的品種規定是？', options: ['Saperavi', 'Cabernet Sauvignon 100%', 'Aleksandrouli', 'Merlot'], answer: 1, explain: 'Teliani 僅限 Cabernet Sauvignon。' },
      { q: 'Kindzmarauli 的殘糖範圍是？', options: ['不超過 4 g/L', '18–45 g/L', '60–90 g/L', '無規定'], answer: 1, explain: '規格：殘糖 18–45 g/L，屬半甜。' },
      { q: 'Mukuzani 規格對陳年的規定是？', options: ['陳年為選擇性；若陳年，木桶至少 6 個月', '必須陳年 12 個月', '必須用橡木桶', '禁止陳年'], answer: 0, explain: '陳年選擇性，若陳年須在木桶至少 6 個月，規格未指定橡木。' },
      { q: 'Kindzmarauli 位於哪個市鎮？', options: ['Telavi', 'Kvareli', 'Gori', 'Ambrolauri'], answer: 1, explain: '微型區位於 Kvareli 市鎮。' }
    ]
  },

  // ───────────────────────── ge-l2-5 ─────────────────────────
  'ge-l2-5': {
    blocks: [
      info('先抓大方向', 'Kartli 位於中部。本課的核心是 <b>Atenuri</b>（Ateni）：位於 Inner Kartli，是喬治亞少數明文規範氣泡酒的 PDO。'),
      compare(
        ['項目', 'Atenuri（Ateni）規格'],
        [
          ['位置', 'Inner Kartli 中部，Gori 以南，Mtkvari（Kura）河右岸、Trialeti 山脈北麓的 Tana 峽谷；海拔 580–750 m'],
          ['品種', 'Chinuri、Goruli Mtsvane 及／或 Aligoté，不得使用其他品種（未規定比例）'],
          ['類型', '乾白靜態酒，另有氣泡酒與微氣泡酒'],
          ['氣泡酒做法', '瓶中二次發酵法或槽式（reservoir）法'],
          ['最短陳年', '瓶中法：二次發酵後至少 9 個月才可上市；槽式法：至少 6 個月'],
          ['最低酒精度', '乾白 11%；氣泡與微氣泡 10.5%'],
          ['產量', '每公頃 10 噸；每噸葡萄 650 公升；每公頃出酒不超過 5,200 公升']
        ]
      ),
      info('Kartli 的其他名稱', 'Bolnisi 與 Okami 等名稱出現在多份 PDO 清單中，但各來源對它們的品種與歸屬描述不一，官方規格也尚未取得，所以本課只列名稱。'),
      mis('「喬治亞的氣泡酒只是新潮的酒款。」不對：Atenuri 的規格明文規範氣泡與微氣泡酒的做法與最短陳年。')
    ],
    terms: [
      { term: 'Reservoir method（槽式法）', def: '在大型密閉槽中進行二次發酵的氣泡酒做法。' },
      { term: 'Aligoté', def: 'Atenuri 規格允許的外來白品種之一。' },
      { term: 'Inner Kartli', def: 'Kartli 的內陸區，Atenuri 所在。' }
    ],
    practice: {
      prompt: '說明 Atenuri 規格如何規範氣泡酒，並比較瓶中法與槽式法的最短陳年。',
      points: ['規格允許瓶中法與槽式法', '瓶中法：二次發酵後至少 9 個月', '槽式法：至少 6 個月']
    },
    quiz: [
      { q: 'Atenuri 規格允許的品種是？', options: ['Chinuri、Goruli Mtsvane 及／或 Aligoté', '只有 Rkatsiteli', 'Saperavi', 'Tsolikouri'], answer: 0, explain: '規格列出這三種，並禁止其他品種。' },
      { q: 'Atenuri 瓶中法氣泡酒的最短陳年是？', options: ['3 個月', '6 個月', '9 個月', '18 個月'], answer: 2, explain: '瓶中法：二次發酵後至少 9 個月；槽式法至少 6 個月。' },
      { q: 'Atenuri 所在的河流是？', options: ['Alazani', 'Mtkvari（Kura）', 'Rioni', 'Kvirila'], answer: 1, explain: '位於 Mtkvari 河右岸。' }
    ]
  },

  // ───────────────────────── ge-l2-6 ─────────────────────────
  'ge-l2-6': {
    blocks: [
      info('先抓大方向', '西部的三個重點 PDO：<b>Sviri</b>（Imereti 乾白）、<b>Tvishi</b>（Lechkhumi 的 Tsolikouri，類型很多）、<b>Khvanchkara</b>（Racha 半甜紅）。'),
      compare(
        ['', 'Sviri', 'Tvishi', 'Khvanchkara'],
        [
          ['位置', 'Outer Imereti，Kvirila 河左岸', 'Lechkhumi，Tsageri 一帶，Rioni 右岸，含 Tvishi 與 Alpana 村', 'Racha，Ambrolauri，Lechkhumi 與 Racha 山脊之間，Rioni 兩岸'],
          ['品種', 'Tsolikouri、Tsitska 及／或 Krakhuna', 'Tsolikouri', 'Aleksandrouli 與 Mujuretuli，僅限這兩種'],
          ['類型', '乾白，殘糖不超過 4 g/L', '主要為半甜白；另有乾型琥珀酒與白色強化酒', '紅，天然半甜，殘糖 30–45 g/L'],
          ['最低酒精度', '11%', '琥珀 10.5%；強化 18%', '11%'],
          ['產量', '每公頃 10 噸', '每公頃 10 噸', '每公頃 7 噸；每公頃出酒不超過 4,550 公升'],
          ['發酵', '（未特別規定）', '（未特別規定）', '在果皮上不完全發酵；採收時糖度至少 24%'],
          ['上市', '—', '—', '須於釀造年份次年 1 月 1 日之後才可交付消費者']
        ]
      ),
      info('其他西部名稱', 'Okureshis Usakhelouri（Lechkhumi，Tsageri 市鎮）與 Salkhino Ojaleshi（Samegrelo）等也出現在 PDO 清單中，本課尚未取得官方規格，所以只認名稱。'),
      mis('「Khvanchkara 是甜酒。」依規格，它是殘糖 30–45 g/L 的<b>半甜</b>紅酒，且品種限 Aleksandrouli 與 Mujuretuli，不是 Saperavi。')
    ],
    terms: [
      { term: 'Aleksandrouli', def: 'Racha 的紅品種，Khvanchkara 使用（拼法有 Aleksandreuli 等變體）。' },
      { term: 'Mujuretuli', def: 'Racha 的紅品種，與 Aleksandrouli 一起用於 Khvanchkara。' },
      { term: 'Lechkhumi', def: 'Racha-Lechkhumi 的一部分，Tvishi 與 Okureshis Usakhelouri 所在。' }
    ],
    practice: {
      prompt: '比較 Sviri 與 Khvanchkara：位置、顏色、品種與甜度。',
      points: ['Sviri：Outer Imereti 乾白，Tsolikouri／Tsitska／Krakhuna，殘糖不超過 4 g/L', 'Khvanchkara：Racha 紅，Aleksandrouli 與 Mujuretuli，半甜，殘糖 30–45 g/L']
    },
    quiz: [
      { q: 'Khvanchkara 的品種規定是？', options: ['Saperavi', 'Aleksandrouli 與 Mujuretuli', 'Tsolikouri', 'Cabernet Sauvignon'], answer: 1, explain: '規格寫僅限 Aleksandrouli 與 Mujuretuli。' },
      { q: 'Tvishi 屬於哪個品種？', options: ['Tsolikouri', 'Tsitska', 'Krakhuna', 'Chinuri'], answer: 0, explain: 'Tvishi 規格僅限 Tsolikouri。' },
      { q: 'Tvishi 規格涵蓋哪些類型？', options: ['只有乾紅', '半甜白、乾型琥珀與白色強化酒', '只有氣泡酒', '只有甜酒'], answer: 1, explain: '主要為半甜白，另有乾型琥珀酒與白色強化酒。' },
      { q: 'Sviri 的殘糖上限是？', options: ['4 g/L', '18 g/L', '30 g/L', '45 g/L'], answer: 0, explain: '乾白，殘糖不超過 4 g/L。' }
    ]
  },

  // ───────────────────────── ge-l2-7 ─────────────────────────
  'ge-l2-7': {
    blocks: [
      info('先抓大方向', '喬治亞的原產地制度是<b>註冊制</b>：名稱以「原產地名稱」（appellation of origin）向國家機關註冊，規格由申請者（如國家葡萄酒署 National Wine Agency）提出。與歐盟或英國簽協定後，部分名稱在對方市場也受保護。'),
      compare(
        ['面向', '內容'],
        [
          ['規格內容', '微型區（村莊清單）、許可品種、酒類型與甜度、最低酒精度、產量與出酒率、陳年與加工地點'],
          ['申請者', '例：Teliani 規格載明申請者為國家葡萄酒署（LEPL National Wine Agency）'],
          ['產量共通值', '本課讀過的規格多為每公頃 10 噸、每噸葡萄 650 公升（Khvanchkara 為每公頃 7 噸）'],
          ['加工地點', '東部 Kakheti 的規格多允許在微型區外加工、但須在 Kakheti 種植區內；Khvanchkara 要求在微型區內加工，裝瓶可在喬治亞任何地方'],
          ['協定保護', '與歐盟（2011 年協定）及英國（UK-Georgia 協定）互相保護 18 個葡萄酒名稱']
        ]
      ),
      info('受協定保護的 18 個名稱', 'Vazisubani、Tibaani、Tvishi、Tsinandali、Manavi、Sviri、Napareuli、Mukuzani、Teliani、Kvareli、Kotekhi、Kindzmarauli、Khvanchkara、Kardenakhi、Atenuri、Kakheti（Kakhuri）、Gurjaani、Akhasheni。'),
      info('讀標籤的小提醒', '英國政府的登錄頁把這些名稱標示為 <b>PGI</b>（受保護地理標示），而喬治亞自己的規格寫的是原產地名稱（相當於 PDO）。這是不同制度對同一類名稱的用詞差異，不代表風土要求不同。'),
      mis('「喬治亞 PDO 一共 XX 個。」各來源說法不一，官方清單尚未取得，所以不要背總數；可以確定的是協定保護的是 18 個。')
    ],
    terms: [
      { term: 'Appellation of Origin', def: '喬治亞註冊的原產地名稱，相當於 PDO。' },
      { term: 'National Wine Agency', def: '喬治亞國家葡萄酒署，部分 PDO 規格的申請者。' },
      { term: 'PGI', def: '受保護地理標示，英國政府登錄頁對這些名稱使用的類別。' }
    ],
    practice: {
      prompt: '說明喬治亞 PDO 規格通常規範哪些內容，以及為什麼總數不能當考點。',
      points: ['微型區、品種、類型與甜度、酒精度、產量、陳年與加工地點', '各來源總數不一，且名單會隨登記更新']
    },
    quiz: [
      { q: '歐盟與英國協定各保護多少個喬治亞葡萄酒名稱？', options: ['8', '18', '28', '38'], answer: 1, explain: '兩者皆為 18 個名稱。' },
      { q: 'Khvanchkara 規格對加工地點的要求是？', options: ['可在喬治亞任何地方加工', '須在微型區內加工，裝瓶可在喬治亞任何地方', '須在國外加工', '無規定'], answer: 1, explain: '加工在微型區內，裝瓶可在喬治亞任何地方。' },
      { q: 'Teliani 規格的申請者是？', options: ['歐盟', '國家葡萄酒署（National Wine Agency）', '生產者協會', '英國政府'], answer: 1, explain: '規格載明申請者為 LEPL National Wine Agency。' },
      { q: '英國政府登錄頁對這 18 個名稱使用的類別是？', options: ['PDO', 'PGI', 'TSG', 'IGT'], answer: 1, explain: '英國登錄頁標示為 PGI。' }
    ]
  },

  // ───────────────────────── ge-l2-8 ─────────────────────────
  'ge-l2-8': {
    passScore: 60,
    blocks: [
      info('Level 2 重點回顧', 'Qvevri 與 OIV 浸皮定義 → 規格怎麼管釀法 → Kakheti 大區與 Tsinandali → 三個紅酒 PDO → Atenuri 氣泡酒 → 西部 Sviri／Tvishi／Khvanchkara → 註冊制與 18 個受協定保護名稱。')
    ],
    quiz: [
      { q: 'UNESCO 將 qvevri 釀酒方法列入名錄的年份是？', options: ['2005', '2013', '2017', '2020'], answer: 1, explain: '2013 年（8.COM 8.13）。' },
      { q: 'OIV 對「白酒浸皮」的最短浸皮時間是？', options: ['一週', '兩週', '一個月', '三個月'], answer: 2, explain: 'OIV-ECO 647-2020。' },
      { q: 'Tsinandali 白酒的品種規定是？', options: ['至少 85% Rkatsiteli、至多 15% Kakhuri Mtsvane', '100% Rkatsiteli', '100% Kisi', '一半 Saperavi'], answer: 0, explain: '官方規格。' },
      { q: 'Mukuzani 的品種與類型是？', options: ['Saperavi 100%，乾紅', 'Saperavi，半甜紅', 'Cabernet Sauvignon，乾紅', 'Ojaleshi，乾紅'], answer: 0, explain: '官方規格。' },
      { q: 'Kindzmarauli 的殘糖範圍是？', options: ['不超過 4 g/L', '18–45 g/L', '30–45 g/L', '100 g/L 以上'], answer: 1, explain: 'Kindzmarauli 為 18–45 g/L；Khvanchkara 為 30–45 g/L。' },
      { q: 'Teliani 為什麼特殊？', options: ['它是橘酒', '品種僅限 Cabernet Sauvignon', '它是氣泡酒', '它是強化酒'], answer: 1, explain: '品種限 Cabernet Sauvignon（100%）。' },
      { q: 'Atenuri 瓶中法氣泡酒的最短陳年是？', options: ['3 個月', '6 個月', '9 個月', '24 個月'], answer: 2, explain: '二次發酵後至少 9 個月；槽式法 6 個月。' },
      { q: 'Khvanchkara 的品種是？', options: ['Aleksandrouli 與 Mujuretuli', 'Saperavi', 'Tsolikouri', 'Chinuri'], answer: 0, explain: '僅限這兩種。' },
      { q: 'Tvishi 規格涵蓋哪些類型？', options: ['僅乾紅', '半甜白、乾型琥珀與白色強化酒', '僅氣泡酒', '僅甜酒'], answer: 1, explain: '品種為 Tsolikouri。' },
      { q: '與歐盟及英國協定互相保護的喬治亞葡萄酒名稱有幾個？', options: ['8', '18', '28', '44'], answer: 1, explain: '18 個。' }
    ]
  }
}
