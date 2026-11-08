// 喬治亞葡萄酒課程 Level 1 課文（階段 A）
// 區塊格式沿用 SlideBlocks：info / compare(headers, rows)。
// 只寫兩份以上來源一致的結構性事實；PDO 總數、面積、占比、品種數、出口比例等會變動或來源矛盾的數字不進課文與測驗（見 EASTERNEUROPE_FACT_CHECK.md）。

const info = (title, content) => ({ type: 'info', title, content })
const mis = (content) => ({ type: 'info', title: '常見誤解', content })
const compare = (headers, rows) => ({ type: 'compare', props: { headers, rows } })

export const GE_LEVEL1_CONTENT = {
  // ───────────────────────── ge-l1-1 ─────────────────────────
  'ge-l1-1': {
    blocks: [
      info('一句話', '喬治亞有目前已知最早的葡萄釀酒考古證據之一，釀酒是日常與宴席文化的核心；20 世紀蘇聯時期轉向大規模工業化生產，1990 年代之後才重新找回小農與傳統釀法。'),
      compare(
        ['面向', '內容', '為什麼重要'],
        [
          ['考古證據', '在 Gadachrili Gora 與 Shulaveris Gora 出土的陶器殘留物分析，指向約西元前 6000 至 5800 年的葡萄酒（McGovern 等人，PNAS，2017）', '被廣泛引用為「葡萄酒搖籃」的依據'],
          ['陶罐釀酒', 'Qvevri 是埋在地下的蛋形陶罐，用於發酵、陳年與儲存', '這套傳統釀法於 2013 年列入 UNESCO 非物質文化遺產'],
          ['酒文化', 'Supra 是傳統宴席，由 tamada（祝酒主持人）帶領一輪輪的祝酒詞', '酒是社交與儀式的一部分，而不只是商品'],
          ['蘇聯時期', '產業導向大量生產，商業品種大幅縮減', '多樣性受損，也是後來「找回傳統」的背景']
        ]
      ),
      info('怎麼讀這段歷史', '考古證據說明「起源」，UNESCO 說明「傳統被承認」，蘇聯時期說明「中斷與復興」。Diploma 題目常問現況為何如此，答案往往要回到這條線。'),
      mis('「喬治亞的酒就等於橘酒。」不對：qvevri 也能做紅酒與琥珀以外的酒款，喬治亞同時有歐式釀法的白酒、紅酒與氣泡酒（見 Level 2）。')
    ],
    terms: [
      { term: 'Qvevri', def: '埋在地下的蛋形陶罐，用於發酵、陳年與儲存葡萄酒。' },
      { term: 'Marani', def: '傳統酒窖，qvevri 常埋在其中。' },
      { term: 'Supra', def: '喬治亞傳統宴席。' },
      { term: 'Tamada', def: 'Supra 上帶領祝酒的主持人。' }
    ],
    practice: {
      prompt: '用兩三句話說明：為什麼喬治亞常被稱為「葡萄酒的搖籃」？',
      points: ['考古證據：出土陶器殘留物指向約西元前 6000 年的釀酒', 'Qvevri 傳統延續至今，2013 年列入 UNESCO 非物質文化遺產', '酒文化深入宴席與日常（supra、tamada）']
    },
    quiz: [
      { q: 'Qvevri 是什麼？', options: ['橡木桶', '埋在地下的蛋形陶罐', '不鏽鋼發酵槽', '玻璃大酒瓶'], answer: 1, explain: 'Qvevri 是埋在地下的蛋形陶罐，用於發酵、陳年與儲存。' },
      { q: 'Qvevri 釀酒傳統於哪一年列入 UNESCO 非物質文化遺產？', options: ['1988', '2007', '2013', '2021'], answer: 2, explain: '依 UNESCO，古老的喬治亞 qvevri 釀酒方法於 2013 年列入。' },
      { q: 'Tamada 指的是？', options: ['一種白葡萄品種', '宴席上帶領祝酒的主持人', '一種陶罐', '一個產區'], answer: 1, explain: 'Tamada 是 supra 宴席上的祝酒主持人。' }
    ]
  },

  // ───────────────────────── ge-l1-2 ─────────────────────────
  'ge-l1-2': {
    blocks: [
      info('先抓大方向', '喬治亞位於南高加索，東邊深入內陸，西邊面向黑海，北有大高加索山脈。<b>山脈擋住北方冷空氣，黑海帶來濕潤</b>，這兩個因素決定了東西部的差異。'),
      compare(
        ['', '東部（Kakheti 一帶）', '西部（Imereti、Racha、Samegrelo 一帶）'],
        [
          ['位置', 'Alazani 河谷，大高加索山脈南麓', '靠近黑海，山地與河谷交錯'],
          ['氣候傾向', '較偏大陸性', '較濕潤，受黑海影響'],
          ['常見品種', 'Rkatsiteli、Saperavi、Kakhuri Mtsvane', 'Tsolikouri、Tsitska、Krakhuna；Aleksandrouli、Mujuretuli、Ojaleshi'],
          ['PDO 數量', '多數 PDO 集中於此', '較少且分散']
        ]
      ),
      info('Kakheti 的地位', '各來源都指出：Kakheti 是最大的產區，占全國葡萄園與產量的絕大部分，也是 PDO 最集中的地方。確切占比各來源數字不同，所以考試與題庫只用「最大」「絕大部分」。'),
      mis('「喬治亞很小，所以氣候一致。」不對：從東到西，山脈與黑海造成明顯的氣候與品種差異。')
    ],
    terms: [
      { term: 'Alazani 河谷', def: 'Kakheti 的主要河谷，許多東部 PDO 位於其兩岸。' },
      { term: '大高加索山脈', def: '喬治亞北部的山脈。' }
    ],
    practice: {
      prompt: '用因果句說明：為什麼喬治亞西部比東部更濕潤？',
      points: ['西部靠近黑海，水氣帶來較多降水', '東部被山脈阻隔，黑海水氣較難到達，較偏大陸性']
    },
    quiz: [
      { q: '哪個產區占喬治亞葡萄園與產量的絕大部分？', options: ['Kakheti', 'Imereti', 'Racha', 'Samegrelo'], answer: 0, explain: 'Kakheti 是最大產區，也是 PDO 最集中的地方。' },
      { q: '下列哪一項最能解釋喬治亞西部較濕潤？', options: ['接近黑海', '位於沙漠邊緣', '海拔最低', '沒有山脈'], answer: 0, explain: '西部靠近黑海，受海洋影響較濕潤。' },
      { q: 'Alazani 河谷位於哪個產區？', options: ['Kakheti', 'Racha', 'Samegrelo', 'Imereti'], answer: 0, explain: 'Alazani 河谷是 Kakheti 的主要河谷。' }
    ]
  },

  // ───────────────────────── ge-l1-3 ─────────────────────────
  'ge-l1-3': {
    blocks: [
      info('先抓大方向', '喬治亞有大量本土品種，但入門只要先認得<b>東部三個</b>（Rkatsiteli、Kakhuri Mtsvane、Kisi）與<b>西部三個</b>（Tsolikouri、Tsitska、Krakhuna），再加上 Kardenakhi 用的 Khikhvi 與 Atenuri 用的 Chinuri。'),
      compare(
        ['品種', '特徵與主要產區', '對應的 PDO 例子'],
        [
          ['Rkatsiteli', '最廣泛種植的白品種，酸度明亮，Kakheti 為主；也用於皮渣接觸的琥珀酒', 'Tsinandali、Gurjaani、Kakheti'],
          ['Kakhuri Mtsvane', 'Kakheti 的白品種，常與 Rkatsiteli 混調', 'Tsinandali、Manavi、Akhmeta'],
          ['Kisi', 'Kakheti 的白品種，列於 Kakheti PDO 的許可品種', 'Kisi magrani（Magriaani）'],
          ['Khikhvi', '白品種，用於強化酒', 'Kardenakhi'],
          ['Tsolikouri、Tsitska、Krakhuna', '西部 Imereti 的白品種；Sviri 規格列出這三個品種（可任選，未規定比例）', 'Sviri；Tsolikouri 單一品種的 Tvishi'],
          ['Chinuri、Goruli Mtsvane', 'Kartli 白品種；Atenuri 規格另允許 Aligoté', 'Atenuri（乾白與氣泡酒）']
        ]
      ),
      info('拼字提醒', '喬治亞文轉寫有多種拼法（如 Mtsvane／Mtsvani），題目與資料的拼字可能不同，要靠發音與對應的 PDO 辨認。'),
      mis('「Mtsvane 就是同一種葡萄。」不對：Mtsvane 是一個品種家族名稱，Kakhuri Mtsvane（Kakheti）與 Goruli Mtsvane（Kartli）是不同品種。')
    ],
    terms: [
      { term: 'Rkatsiteli', def: '喬治亞最廣泛種植的白品種。' },
      { term: 'Kakhuri Mtsvane', def: 'Kakheti 的白品種，常與 Rkatsiteli 搭配。' },
      { term: 'Tsolikouri', def: '西部 Imereti 的白品種，Tvishi 與 Sviri 使用。' },
      { term: 'Chinuri', def: 'Kartli 的白品種，用於 Atenuri 氣泡酒。' }
    ],
    practice: {
      prompt: '列出 Tsinandali 與 Sviri 使用的白品種，並說明它們分別在東部或西部。',
      points: ['Tsinandali：至少 85% Rkatsiteli、至多 15% Kakhuri Mtsvane，位於東部 Kakheti', 'Sviri：Tsolikouri、Tsitska、Krakhuna，位於西部 Imereti']
    },
    quiz: [
      { q: '喬治亞最廣泛種植的白品種是？', options: ['Rkatsiteli', 'Tsitska', 'Chinuri', 'Krakhuna'], answer: 0, explain: '各來源都指出 Rkatsiteli 是最廣泛種植的白品種。' },
      { q: 'Tsinandali 使用哪些品種？', options: ['Saperavi 與 Teliani', 'Rkatsiteli 與 Kakhuri Mtsvane', 'Tsolikouri 與 Tsitska', 'Chinuri 與 Goruli Mtsvane'], answer: 1, explain: 'Tsinandali 白酒規格為至少 85% Rkatsiteli、至多 15% Kakhuri Mtsvane；同一名稱另有以 Saperavi 製成的乾紅。' },
      { q: 'Atenuri 使用哪些品種，包含什麼類型的酒？', options: ['Chinuri、Goruli Mtsvane（或 Aligoté），乾白與氣泡酒', 'Saperavi，乾紅', 'Kisi，琥珀酒', 'Tsolikouri，半甜白酒'], answer: 0, explain: 'Atenuri 位於 Inner（Shida）Kartli，品種為 Chinuri、Goruli Mtsvane 及／或 Aligoté，有乾白也有氣泡與微氣泡酒。' }
    ]
  },

  // ───────────────────────── ge-l1-4 ─────────────────────────
  'ge-l1-4': {
    blocks: [
      info('先抓大方向', '紅酒的核心是 <b>Saperavi</b>：色深、高酸、紅肉（teinturier，果肉與果汁都有色素）。其他紅品種多半只對應一個 PDO，記「品種 ↔ PDO」就夠用。'),
      compare(
        ['品種', '特徵與位置', '對應的 PDO 例子'],
        [
          ['Saperavi', '最具代表性的紅品種，色深、酸度高；以 Kakheti 為主', 'Mukuzani（乾紅）、Kindzmarauli（半甜）、Akhasheni（半甜）、Kvareli、Zegaani'],
          ['Cabernet Sauvignon', '非本土品種，但有專屬 PDO', 'Teliani（Kakheti）'],
          ['Aleksandrouli、Mujuretuli', 'Racha 的紅品種', 'Khvanchkara（半甜紅）'],
          ['Usakhelouri', 'Lechkhumi 的紅品種', 'Okureshis Usakhelouri'],
          ['Ojaleshi', 'Samegrelo 的紅品種', 'Salkhino Ojaleshi'],
          ['Tavkveri、Shavkapito 等', 'Kartli 的本土紅品種', '（品種與 PDO 的配對待官方核對，Level 2 另述）']
        ]
      ),
      info('甜度是風格關鍵', '同樣是 Saperavi，Mukuzani 是<b>乾紅</b>，Kindzmarauli 與 Akhasheni 是<b>半甜紅</b>；Khvanchkara 也是半甜紅，但用的是 Racha 的 Aleksandrouli 與 Mujuretuli。'),
      mis('「喬治亞的紅酒都是 Saperavi。」不對：Khvanchkara、Okureshis Usakhelouri、Salkhino Ojaleshi 等用的是其他本土品種，Teliani 甚至是 Cabernet Sauvignon。')
    ],
    terms: [
      { term: 'Teinturier', def: '果肉與果汁都帶色素的葡萄，Saperavi 即屬此類。' },
      { term: 'Saperavi', def: '喬治亞最具代表性的紅品種。' },
      { term: 'Semi-sweet（半甜）', def: '殘糖介於乾與甜之間，喬治亞有數個半甜紅酒 PDO。' }
    ],
    practice: {
      prompt: '比較 Mukuzani 與 Kindzmarauli：品種與甜度各是什麼？',
      points: ['兩者都是 Saperavi', 'Mukuzani 為乾紅，Kindzmarauli 為半甜紅']
    },
    quiz: [
      { q: 'Mukuzani 的品種與類型是？', options: ['Saperavi，乾紅', 'Saperavi，半甜紅', 'Cabernet Sauvignon，乾紅', 'Ojaleshi，乾紅'], answer: 0, explain: 'Mukuzani 是 Kakheti 的乾紅，品種限 Saperavi（官方規格：100%）。' },
      { q: 'Khvanchkara 位於哪裡，使用什麼品種？', options: ['Kakheti，Saperavi', 'Racha，Aleksandrouli 與 Mujuretuli', 'Imereti，Tsolikouri', 'Kartli，Chinuri'], answer: 1, explain: 'Khvanchkara 位於 Racha，是 Aleksandrouli 與 Mujuretuli 的半甜紅。' },
      { q: 'Teliani 為什麼特殊？', options: ['它是氣泡酒', '它用 Cabernet Sauvignon，而非本土品種', '它是甜酒', '它是 Imereti 的白酒'], answer: 1, explain: 'Teliani 位於 Kakheti，品種限 Cabernet Sauvignon（官方規格：100%），為非本土品種。' }
    ]
  },

  // ───────────────────────── ge-l1-5 ─────────────────────────
  'ge-l1-5': {
    blocks: [
      info('先抓大方向', '依地理分成<b>東部（Kakheti）、中部（Kartli）、西部（Imereti、Racha-Lechkhumi、Samegrelo）</b>。Kakheti 的 PDO 最多，西部的 PDO 少而風格獨特。'),
      compare(
        ['產區', '位置', '代表 PDO（來源一致者）'],
        [
          ['Kakheti', '東部', 'Tsinandali、Gurjaani、Mukuzani、Kindzmarauli、Akhasheni、Teliani'],
          ['Kartli（Shida、Kvemo）', '中部', 'Atenuri（氣泡）、Bolnisi、Okami'],
          ['Imereti', '西部', 'Sviri'],
          ['Racha-Lechkhumi', '西北部', 'Khvanchkara、Tvishi、Okureshis Usakhelouri'],
          ['Samegrelo', '西部', 'Salkhino Ojaleshi']
        ]
      ),
      info('PDO 數字為什麼不能背', '不同網路來源列出的喬治亞 PDO 數量從 28、29、30 到更高不等（取決於統計日期與是否含新近登記者），官方清單尚未取得，所以<b>總數不寫進課文與題庫</b>。可以確定的是：喬治亞與歐盟（2011 年協定）及英國（UK-Georgia 協定）互相保護 <b>18 個</b>葡萄酒名稱，Tvishi 屬 Lechkhumi（Tsageri 一帶），位於 Racha-Lechkhumi。'),
      mis('「PDO 總數是固定的，背下來就好。」不對：名單會隨登記而增加，且各來源統計口徑不同。')
    ],
    terms: [
      { term: 'PDO', def: 'Protected Designation of Origin，原產地名稱保護。' },
      { term: 'Kakheti', def: '東部最大產區。' },
      { term: 'Racha-Lechkhumi', def: '西北部山區產區，Khvanchkara 的產地。' }
    ],
    practice: {
      prompt: '列出三個位於西部的 PDO，並寫出它們的品種或類型。',
      points: ['Sviri：Tsolikouri、Tsitska、Krakhuna 的白酒', 'Khvanchkara：Aleksandrouli、Mujuretuli 的半甜紅', 'Salkhino Ojaleshi：Ojaleshi 的乾紅']
    },
    quiz: [
      { q: '下列哪一個 PDO 位於 Racha？', options: ['Khvanchkara', 'Mukuzani', 'Tsinandali', 'Bolnisi'], answer: 0, explain: 'Khvanchkara 位於 Racha 的 Ambrolauri 一帶。' },
      { q: '下列哪一個 PDO 位於 Kartli 並且包含氣泡酒？', options: ['Atenuri', 'Sviri', 'Kindzmarauli', 'Teliani'], answer: 0, explain: 'Atenuri 位於 Inner（Shida）Kartli，除乾白外也生產氣泡與微氣泡酒。' }
    ]
  },

  // ───────────────────────── ge-l1-6 ─────────────────────────
  'ge-l1-6': {
    passScore: 60,
    blocks: [
      info('Level 1 重點回顧', '歷史（考古、qvevri、UNESCO 2013、supra）→ 地理（山脈、黑海、東西差異）→ 白品種（Rkatsiteli、Kakhuri Mtsvane、西部三品種）→ 紅品種（Saperavi 及其 PDO）→ 產區總覽（Kakheti、Kartli、西部）。')
    ],
    quiz: [
      { q: 'Qvevri 釀酒傳統在哪一年列入 UNESCO 非物質文化遺產？', options: ['2013', '1998', '2007', '2021'], answer: 0, explain: '2013 年。' },
      { q: '喬治亞最廣泛種植的白品種是？', options: ['Rkatsiteli', 'Saperavi', 'Chinuri', 'Ojaleshi'], answer: 0, explain: 'Rkatsiteli。' },
      { q: 'Saperavi 的特徵是？', options: ['白品種，酸度低', '紅品種，色深、高酸，果肉也有色素', '粉紅品種', '氣泡酒專用'], answer: 1, explain: 'Saperavi 是 teinturier 紅品種，色深、酸度高。' },
      { q: 'Mukuzani 與 Kindzmarauli 的差別是？', options: ['前者乾紅、後者半甜紅，兩者都是 Saperavi', '前者白酒、後者紅酒', '前者在 Racha、後者在 Kartli', '前者用 Cabernet Sauvignon'], answer: 0, explain: '兩者皆為 Kakheti 的 Saperavi，Mukuzani 乾、Kindzmarauli 半甜。' },
      { q: 'Sviri 使用哪些品種？', options: ['Tsolikouri、Tsitska、Krakhuna', 'Rkatsiteli 與 Kakhuri Mtsvane', 'Saperavi', 'Chinuri'], answer: 0, explain: 'Sviri 位於西部 Imereti。' },
      { q: '哪個產區的 PDO 最多？', options: ['Kakheti', 'Imereti', 'Samegrelo', 'Racha-Lechkhumi'], answer: 0, explain: 'Kakheti 是 PDO 最集中的產區。' },
      { q: 'Teliani 使用什麼品種？', options: ['Cabernet Sauvignon', 'Saperavi', 'Ojaleshi', 'Kisi'], answer: 0, explain: 'Teliani 是 Kakheti 的 Cabernet Sauvignon 乾紅。' },
      { q: '關於喬治亞 PDO 總數，下列哪個說法最合適？', options: ['各來源說法不一，須以官方清單為準', '固定為 29 個', '固定為 44 個', '沒有 PDO 制度'], answer: 0, explain: '不同來源與日期統計不同，考試與題庫不依賴確切總數。' }
    ]
  }
}
