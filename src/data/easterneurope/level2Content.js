// 東歐與巴爾幹課程 Level 2 課文
// 官方來源：Uradni list RS（斯洛維尼亞三區）與 gov.si 現行九分區；克羅埃西亞 Pravilnik o zemljopisnim područjima uzgoja vinove loze（NN 76/2019）；
// 羅馬尼亞法律 164/2015（第 34 條 CMD／CT／CIB 定義、第 53(5) 條八個栽培區名稱）；保加利亞 PGI「Дунавска равнина」產品規格（歐盟 eAmbrosia）；
// 摩爾多瓦農業部 2016 年第 12 號命令（三個葡萄酒 PGI）。
// 「其他國家」一課只做概況，未逐項對官方出處，題庫不出細節。不寫：面積、PDO 總數、糖度 g/L、出口比例。

const info = (title, content) => ({ type: 'info', title, content })
const mis = (content) => ({ type: 'info', title: '常見誤解', content })
const compare = (headers, rows) => ({ type: 'compare', props: { headers, rows } })

export const EE_LEVEL2_CONTENT = {
  // ───────────────────────── ee-l2-1 ─────────────────────────
  'ee-l2-1': {
    blocks: [
      info('一句話', '斯洛維尼亞的葡萄酒區分成<b>三個大區、九個分區</b>。三區各有性格：東北內陸的 Podravje、東南的 Posavje、西部近亞得里亞海的 Primorska。'),
      compare(
        ['大區', '分區（gov.si 現行）', '位置感'],
        [
          ['Podravje', 'Prekmurje、Štajerska Slovenija', '東北部，內陸'],
          ['Posavje', 'Bela Krajina、Dolenjska、Bizeljsko-Sremič', '東南部'],
          ['Primorska', 'Kras、Vipavska dolina、Goriška Brda、Slovenska Istra', '西部，近亞得里亞海與義大利']
        ]
      ),
      info('代表名稱', 'Kras 與 Teran 緊密相連；Dolenjska 與清淡的混釀紅酒 Cviček 相連；Goriška Brda 與 Rebula 相連。這些是「產區↔酒款」的對應，答題時先說產區再說酒款。'),
      info('歷史版本不同', '2003 年的舊規則曾列出不同的分區（例如 Podravje 下有七個分區）。該文件已標示歸檔；本課一律以 gov.si 現行的三區九分區為準。'),
      mis('「斯洛維尼亞的酒區就是三個。」不完整：三個是大區，下面還有九個分區，考試與標籤常用到分區名稱。')
    ],
    terms: [
      { term: 'Podravje／Posavje／Primorska', def: '斯洛維尼亞三個葡萄酒大區。' },
      { term: 'Cviček', def: 'Dolenjska 的清淡紅混釀酒款。' }
    ],
    practice: {
      prompt: '寫出斯洛維尼亞三個大區各自包含的分區（至少每區一個），並各配一個酒款或品種。',
      points: ['Podravje：Prekmurje、Štajerska Slovenija', 'Posavje：Dolenjska（Cviček）', 'Primorska：Kras（Teran）、Goriška Brda（Rebula）']
    },
    quiz: [
      { q: '下列哪一個不是斯洛維尼亞的葡萄酒大區？', options: ['Dalmacija', 'Podravje', 'Posavje', 'Primorska'], answer: 0, explain: 'Dalmacija 是克羅埃西亞的產區。' },
      { q: 'Kras 屬於哪個大區？', options: ['Primorska', 'Podravje', 'Posavje', '不屬於任何大區'], answer: 0, explain: 'Kras 在西部 Primorska。' },
      { q: 'Dolenjska 屬於哪個大區？', options: ['Posavje', 'Primorska', 'Podravje', 'Dalmacija'], answer: 0, explain: 'Posavje 包含 Bela Krajina、Dolenjska 與 Bizeljsko-Sremič。' },
      { q: '本課以哪個版本的斯洛維尼亞分區為準？', options: ['gov.si 現行的九分區', '2003 年舊規則', '任何來源皆可', '歐盟的分區'], answer: 0, explain: '舊規則已標歸檔，以現行版為準。' }
    ]
  },

  // ───────────────────────── ee-l2-2 ─────────────────────────
  'ee-l2-2': {
    blocks: [
      info('一句話', '克羅埃西亞依官方規則分成<b>四個葡萄栽培大區</b>。本課先學內陸的兩個：<b>Slavonija 與克羅埃西亞 Podunavlje</b>、<b>Središnja bregovita Hrvatska（中部丘陵）</b>。'),
      compare(
        ['大區', '次區', '分區（節錄）'],
        [
          ['Slavonija i hrvatsko Podunavlje', 'Hrvatsko Podunavlje；Slavonija', 'Srijem、Erdut、Baranja；Đakovo、Kutjevo、Požega–Pleternica、Daruvar、Virovitica 等'],
          ['Središnja bregovita Hrvatska', 'Moslavina；Prigorje–Bilogora；Zagorje–Međimurje；Plešivica；Pokuplje', 'Međimurje、Varaždin、Zagreb、Samobor、Plešivica–Okić、Karlovac 等']
        ]
      ),
      info('來源與版本', '以上依 Pravilnik o zemljopisnim područjima uzgoja vinove loze（NN 76/2019），它取代 2012 年舊規則。本課無法確認其後是否又有修訂，引用時以最新公報為準。'),
      info('與先前說法的差異', '先前二手來源常把克羅埃西亞寫成「三大區」；官方規則列的是上述四大區，本課程以官方為準。'),
      mis('「Plešivica 在沿海。」不對：Plešivica 是 Središnja bregovita Hrvatska（中部丘陵）下的次區，在內陸。')
    ],
    terms: [
      { term: 'Slavonija i hrvatsko Podunavlje', def: '東部大區，含 Slavonija 與 Podunavlje（Srijem、Erdut、Baranja）。' },
      { term: 'Središnja bregovita Hrvatska', def: '中部丘陵大區，含 Moslavina、Prigorje–Bilogora、Zagorje–Međimurje、Plešivica、Pokuplje。' }
    ],
    practice: {
      prompt: '寫出克羅埃西亞四個大區中屬於內陸的兩個，各舉兩個次區或分區。',
      points: ['Slavonija i hrvatsko Podunavlje：Baranja、Kutjevo', 'Središnja bregovita Hrvatska：Zagorje–Međimurje、Plešivica']
    },
    quiz: [
      { q: '依官方規則，克羅埃西亞有幾個葡萄栽培大區？', options: ['四個', '三個', '兩個', '八個'], answer: 0, explain: '四個大區。' },
      { q: 'Plešivica 屬於哪個大區？', options: ['Središnja bregovita Hrvatska', 'Dalmacija', 'Hrvatska Istra i Kvarner', 'Slavonija i hrvatsko Podunavlje'], answer: 0, explain: '中部丘陵大區下的次區。' },
      { q: 'Baranja 屬於哪個次區？', options: ['Hrvatsko Podunavlje', 'Prigorje–Bilogora', 'Pokuplje', 'Moslavina'], answer: 0, explain: 'Hrvatsko Podunavlje 含 Srijem、Erdut、Baranja。' },
      { q: 'Međimurje 屬於哪個次區？', options: ['Zagorje–Međimurje', 'Moslavina', 'Plešivica', 'Pokuplje'], answer: 0, explain: '屬 Zagorje–Međimurje。' }
    ]
  },

  // ───────────────────────── ee-l2-3 ─────────────────────────
  'ee-l2-3': {
    blocks: [
      info('一句話', '沿海的兩個大區是 <b>Hrvatska Istra i Kvarner</b> 與 <b>Dalmacija</b>。Istra 是 Malvazija Istarska 的家，Dalmacija 的 Pelješac 一帶是 Plavac Mali 的核心。'),
      compare(
        ['大區', '次區', '分區（節錄）'],
        [
          ['Hrvatska Istra i Kvarner', 'Hrvatska Istra；Kvarner i Hrvatsko primorje', 'Zapadna／Centralna／Istočna Istra；Krk、Rab、Cres–Lošinj、Pag 等'],
          ['Dalmacija', 'Sjeverna Dalmacija；Dalmatinska zagora；Srednja i Južna Dalmacija', 'Šibenik、Primošten；Imotski、Sinj–Vrlika；Pelješac、Korčula、Hvar、Brač、Vis、Konavle 等']
        ]
      ),
      info('酒款對應', 'Istra：Malvazija Istarska；Pelješac：Plavac Mali（Dingač 為其知名名稱）；Istra 的 Muškat momjanski 於報導中被稱為克羅埃西亞第 18 個歐盟 PDO（登記日未取得，僅作參考）。'),
      mis('「Dalmacija 就是一個產區。」不對：官方把 Dalmacija 分成三個次區與許多分區，其中 Pelješac 與島嶼（Korčula、Hvar、Vis 等）常作為獨立名稱出現。')
    ],
    terms: [
      { term: 'Pelješac', def: 'Dalmacija 的半島，Plavac Mali 的核心產地之一。' },
      { term: 'Kvarner', def: '亞得里亞海北部海灣與其島嶼，屬 Hrvatska Istra i Kvarner 大區。' }
    ],
    practice: {
      prompt: '說明克羅埃西亞沿海兩大區各自的代表品種與一個分區。',
      points: ['Istra：Malvazija Istarska（白）；分區 Zapadna Istra', 'Dalmacija：Plavac Mali（紅）；分區 Pelješac']
    },
    quiz: [
      { q: 'Pelješac 屬於哪個大區？', options: ['Dalmacija', 'Hrvatska Istra i Kvarner', 'Slavonija i hrvatsko Podunavlje', 'Središnja bregovita Hrvatska'], answer: 0, explain: 'Pelješac 在 Dalmacija 的 Srednja i Južna Dalmacija 次區。' },
      { q: 'Malvazija Istarska 與哪個地區相關？', options: ['Istra', 'Slavonija', 'Dalmacija', 'Međimurje'], answer: 0, explain: 'Istra。' },
      { q: 'Pag 屬於哪個大區？', options: ['Hrvatska Istra i Kvarner', 'Dalmacija', 'Slavonija i hrvatsko Podunavlje', 'Središnja bregovita Hrvatska'], answer: 0, explain: '官方規則把 Pag 列在 Kvarner i Hrvatsko primorje 下。' },
      { q: 'Plavac Mali 最核心的產地之一是？', options: ['Pelješac', 'Baranja', 'Zagorje', 'Krk'], answer: 0, explain: 'Pelješac。' }
    ]
  },

  // ───────────────────────── ee-l2-4 ─────────────────────────
  'ee-l2-4': {
    blocks: [
      info('一句話', '羅馬尼亞的制度是歐盟式的 <b>DOC（受保護原產地名稱）與 IGP（受保護地理標示）</b>；DOC 之後可加註採收成熟度：<b>CMD、CT、CIB</b>。'),
      compare(
        ['縮寫', '羅馬尼亞文', '意思（法律 164/2015 第 34 條）'],
        [
          ['CMD', 'Cules la Maturitate Deplină', '完全成熟時採收'],
          ['CT', 'Cules Târziu', '晚採收'],
          ['CIB', 'Cules la Înnobilarea Boabelor', '貴腐（果粒被「高貴化」）時採收']
        ]
      ),
      info('八個栽培區（法律 164/2015 第 53(5) 條所列名稱）', 'Crișana 與 Maramureș、Dealurile Banatului、Podișul Transilvaniei、Colinele Dobrogei、Terasele Dunării、南部沙地與其他有利地區、Dealurile Moldovei、Dealurile Munteniei 與 Olteniei。該條原本是規範議會代表的分配，並非區域定義，詳細範圍以 ONVPV 為準。'),
      info('不寫的數字', '各等級的糖度 g/L 門檻不在法律內文，而是各 DOC 的產品規格；本課不要求背誦，也沒有官方確認的數字可引用。'),
      info('例子', '常見的 DOC 名稱例如 Cotnari、Dealu Mare、Murfatlar，作為「產區名稱」記憶即可。'),
      mis('「CMD、CT、CIB 是法定糖度的固定數字。」本課只確認定義；具體門檻須查各 DOC 規格。')
    ],
    terms: [
      { term: 'DOC', def: '羅馬尼亞對應 PDO 的原產地名稱。' },
      { term: 'IGP', def: '羅馬尼亞對應 PGI 的地理標示。' },
      { term: 'CIB', def: '貴腐採收（Cules la Înnobilarea Boabelor）。' }
    ],
    practice: {
      prompt: '寫出 CMD、CT、CIB 的全名與意思，並說明為什麼不背糖度數字。',
      points: ['CMD 完全成熟；CT 晚採；CIB 貴腐', '法律只定義，門檻在各 DOC 規格，未取得官方確認']
    },
    quiz: [
      { q: 'CIB 代表什麼？', options: ['貴腐果採收', '完全成熟採收', '晚採收', '冰酒'], answer: 0, explain: 'Cules la Înnobilarea Boabelor。' },
      { q: 'CT 代表什麼？', options: ['晚採收', '貴腐果採收', '完全成熟採收', '有機認證'], answer: 0, explain: 'Cules Târziu。' },
      { q: '羅馬尼亞法律 164/2015 所列的葡萄栽培區有幾個？', options: ['八個', '三個', '十二個', '二十個'], answer: 0, explain: '第 53(5) 條所列名稱可歸為八個。' },
      { q: 'DOC 在歐盟制度中相當於？', options: ['PDO', 'PGI', 'TSG', '沒有對應'], answer: 0, explain: 'DOC 對應 PDO，IGP 對應 PGI。' }
    ]
  },

  // ───────────────────────── ee-l2-5 ─────────────────────────
  'ee-l2-5': {
    blocks: [
      info('一句話', '保加利亞兩大 PGI：<b>Danubian Plain（北）</b>與 <b>Thracian Lowlands（南）</b>。以 Danubian Plain 的歐盟產品規格為例，看規格怎麼寫。'),
      compare(
        ['項目', 'Danubian Plain PGI 規格內容（eAmbrosia）'],
        [
          ['範圍', '北界 Danube、南界 Stara Planina 山麓、西界 Timok 河、東抵黑海；涵蓋約 15 個省的市鎮'],
          ['品種', '白：Dimyat、Sauvignon Blanc、Muscat Ottonel、Chardonnay、Riesling 等；紅與粉紅：Cabernet Sauvignon、Merlot、Pinot Noir、Mavrud、Gamay、Melnik 系、Pamid、Syrah 等'],
          ['傳統用語', '「Ново」、「Премиум」、「Премиум резерва」、「Резерва」，用於表示釀造、陳年或品質'],
          ['原料比例', '混調酒要使用產區名稱，至少 85% 的葡萄須來自該區'],
          ['釀造地點', '釀造與加工須在葡萄生長的地區內進行'],
          ['管控機構', '保加利亞葡萄酒與葡萄栽培執行局（ИАЛВ）']
        ]
      ),
      info('文件的小疵', '這份規格的感官描述段落寫成「Тракийска низина」（Thracian Lowland），疑為編寫時的筆誤；所以讀規格時要注意前後是否一致。產量數字在文件中看起來也需再確認，本課不引用。'),
      info('本土品種的位置', '規格同時允許國際品種與 Dimyat、Mavrud、Melnik 等本土品種，顯示保加利亞的特色在「本土與國際並存」。'),
      mis('「Danubian Plain 只能用本土品種。」不對：規格明列 Cabernet Sauvignon、Chardonnay 等國際品種。')
    ],
    terms: [
      { term: 'Danubian Plain', def: '保加利亞北部的 PGI，北臨 Danube。' },
      { term: 'Thracian Lowlands', def: '保加利亞南部的 PGI。' },
      { term: 'ИАЛВ', def: '保加利亞葡萄酒與葡萄栽培執行局。' }
    ],
    practice: {
      prompt: '從 Danubian Plain 規格寫出兩項範圍界線與一項規則，並指出規格中的一個小疵。',
      points: ['北界 Danube、西界 Timok', '混調酒須 85% 來自該區', '感官段落誤寫為 Thracian Lowland']
    },
    quiz: [
      { q: 'Danubian Plain PGI 的北界是？', options: ['Danube', 'Stara Planina', 'Timok', '黑海'], answer: 0, explain: '北界為 Danube。' },
      { q: '使用產區名稱的混調酒，至少多少比例的葡萄須來自該區？', options: ['85%', '50%', '100%', '30%'], answer: 0, explain: '規格要求至少 85%。' },
      { q: '下列哪一個是 Danubian Plain 規格允許的品種？', options: ['Mavrud', 'Fetească Neagră', 'Plavac Mali', 'Teran'], answer: 0, explain: '規格列有 Mavrud。' },
      { q: '保加利亞的兩大 PGI 是？', options: ['Danubian Plain 與 Thracian Lowlands', 'Codru 與 Divin', 'Podravje 與 Primorska', 'Istra 與 Dalmacija'], answer: 0, explain: '北與南。' }
    ]
  },

  // ───────────────────────── ee-l2-6 ─────────────────────────
  'ee-l2-6': {
    blocks: [
      info('一句話', '摩爾多瓦<b>不是歐盟成員</b>，但有三個葡萄酒 PGI：<b>Valul lui Traian、Ștefan-Vodă、Codru</b>。它們由農業部 2016 年第 12 號命令劃定葡萄種植區，依據 2006 年葡萄與葡萄酒法。'),
      compare(
        ['PGI', '位置感（二手說明）', '備註'],
        [
          ['Codru', '中部', '以白酒與傳統法氣泡酒見稱'],
          ['Ștefan-Vodă', '東南部', '位於 Dniester 一側，常與紅酒連結'],
          ['Valul lui Traian', '西南部', '偏南，受黑海影響；常與紅酒及較甜型連結']
        ]
      ),
      info('Divin', 'Divin 是葡萄白蘭地的地理標示，涵蓋全國，不是葡萄酒產區。'),
      info('地下酒窖', 'Cricova 與 Mileștii Mici 以龐大的地下酒窖網絡聞名；本課不引用長度或瓶數，因為來源間數字不一致。'),
      info('俄羅斯禁運', '俄羅斯曾於 2006 年與 2013 年對摩爾多瓦葡萄酒實施禁運，是摩爾多瓦轉向其他市場（包含歐盟）的重要背景；2006 年前俄羅斯是最大出口市場，但具體比例不同來源說法不同，不入題庫。'),
      mis('「摩爾多瓦的 PGI 等於歐盟的 PGI。」不對：摩爾多瓦自有制度，並依與歐盟的聯繫協定逐步接軌。')
    ],
    terms: [
      { term: 'Codru', def: '摩爾多瓦中部 PGI。' },
      { term: 'Ștefan-Vodă', def: '摩爾多瓦東南部 PGI。' },
      { term: 'Valul lui Traian', def: '摩爾多瓦西南部 PGI。' }
    ],
    practice: {
      prompt: '寫出摩爾多瓦三個葡萄酒 PGI，並說明為什麼 Divin 不算其中之一。',
      points: ['Codru、Ștefan-Vodă、Valul lui Traian', 'Divin 是葡萄白蘭地，不是葡萄酒']
    },
    quiz: [
      { q: '下列哪一個不是摩爾多瓦的葡萄酒 PGI？', options: ['Divin', 'Codru', 'Ștefan-Vodă', 'Valul lui Traian'], answer: 0, explain: 'Divin 是葡萄白蘭地。' },
      { q: '摩爾多瓦的三個葡萄酒 PGI 由什麼文件劃定葡萄種植區？', options: ['農業部 2016 年第 12 號命令', '歐盟條例', 'OIV 決議', '聯合國決議'], answer: 0, explain: '農業部 2016 年第 12 號命令。' },
      { q: '俄羅斯對摩爾多瓦葡萄酒禁運的年份是？', options: ['2006 與 2013', '1991 與 2000', '2020 與 2022', '從未禁運'], answer: 0, explain: '2006 與 2013。' },
      { q: '摩爾多瓦是歐盟成員嗎？', options: ['不是', '是，2004 年加入', '是，2007 年加入', '是，2013 年加入'], answer: 0, explain: '非歐盟成員。' }
    ]
  },

  // ───────────────────────── ee-l2-7 ─────────────────────────
  'ee-l2-7': {
    blocks: [
      info('一句話', '本課是「其他國家」的<b>地圖感</b>：每個國家只記一個印象，不背細節。以下為概況，未逐項對官方出處，因此題庫只問「屬於哪個類別」。'),
      compare(
        ['國家', '一個印象（概況）'],
        [
          ['捷克', '葡萄酒主要集中於東部的 Moravia'],
          ['斯洛伐克', '與匈牙利共享 Tokaj 地區的一部分'],
          ['塞爾維亞', '北部 Vojvodina 與 Fruška Gora 等地'],
          ['北馬其頓', 'Tikveš 一帶與紅品種 Vranec'],
          ['黑山', '紅品種 Vranac，Crmnica 一帶'],
          ['亞美尼亞', '古老釀酒傳統，Areni 品種與 Areni-1 洞穴遺址'],
          ['烏克蘭', '南部黑海沿岸（如 Odesa 一帶）為重要區域']
        ]
      ),
      info('如何使用', '這些國家多數不在本課程的核心範圍；盲品或比較題出現時，把它們放進「歐盟／非歐盟」與「本土品種」兩個分類，再補一個印象即可。'),
      mis('「這些國家都屬於歐盟。」不對：斯洛伐克與捷克是成員，塞爾維亞、北馬其頓、黑山、亞美尼亞、烏克蘭不是。')
    ],
    terms: [
      { term: 'Vranec／Vranac', def: '巴爾幹西南部的紅品種（北馬其頓／黑山拼法）。' }
    ],
    practice: {
      prompt: '把七個國家分成歐盟與非歐盟兩類，並各寫一個印象。',
      points: ['歐盟：捷克、斯洛伐克', '非歐盟：塞爾維亞、北馬其頓、黑山、亞美尼亞、烏克蘭']
    },
    quiz: [
      { q: '下列哪個國家是歐盟成員？', options: ['捷克', '塞爾維亞', '黑山', '亞美尼亞'], answer: 0, explain: '捷克與斯洛伐克是成員。' },
      { q: 'Vranac 與哪個國家連結最深？', options: ['黑山', '捷克', '烏克蘭', '斯洛伐克'], answer: 0, explain: '黑山。' },
      { q: '捷克的葡萄酒主要集中於哪個地區？', options: ['Moravia', 'Vojvodina', 'Odesa', 'Tikveš'], answer: 0, explain: 'Moravia。' }
    ]
  },

  // ───────────────────────── ee-l2-8 ─────────────────────────
  'ee-l2-8': {
    passScore: 60,
    blocks: [
      info('Level 2 重點回顧', '斯洛維尼亞三區九分區 → 克羅埃西亞四大區（內陸兩個、沿海兩個）→ 羅馬尼亞 DOC／IGP 與 CMD／CT／CIB、八個栽培區 → 保加利亞兩大 PGI 與 Danubian Plain 規格 → 摩爾多瓦三個葡萄酒 PGI → 其他國家的歐盟／非歐盟分類。')
    ],
    quiz: [
      { q: '斯洛維尼亞的三個葡萄酒大區是？', options: ['Podravje、Posavje、Primorska', 'Slavonija、Istra、Dalmacija', 'Codru、Divin、Dobrogea', 'Moravia、Tokaj、Vojvodina'], answer: 0, explain: '三區。' },
      { q: 'Kras 屬於斯洛維尼亞哪個大區？', options: ['Primorska', 'Podravje', 'Posavje', 'Slavonija'], answer: 0, explain: 'Primorska。' },
      { q: '依官方規則，克羅埃西亞有幾個葡萄栽培大區？', options: ['四個', '兩個', '三個', '六個'], answer: 0, explain: '四個。' },
      { q: 'Plešivica 屬於克羅埃西亞哪個大區？', options: ['Središnja bregovita Hrvatska', 'Dalmacija', 'Hrvatska Istra i Kvarner', 'Slavonija i hrvatsko Podunavlje'], answer: 0, explain: '中部丘陵。' },
      { q: 'Pelješac 屬於克羅埃西亞哪個大區？', options: ['Dalmacija', 'Slavonija i hrvatsko Podunavlje', 'Središnja bregovita Hrvatska', 'Hrvatska Istra i Kvarner'], answer: 0, explain: 'Dalmacija。' },
      { q: '羅馬尼亞 CT 的意思是？', options: ['晚採收', '貴腐採收', '完全成熟採收', '有機'], answer: 0, explain: 'Cules Târziu。' },
      { q: '羅馬尼亞 DOC 在歐盟制度中相當於？', options: ['PDO', 'PGI', 'TSG', '沒有對應'], answer: 0, explain: 'DOC 對應 PDO。' },
      { q: '保加利亞的兩大 PGI 是？', options: ['Danubian Plain 與 Thracian Lowlands', 'Codru 與 Divin', 'Podravje 與 Primorska', 'Istra 與 Kvarner'], answer: 0, explain: '北與南。' },
      { q: 'Danubian Plain 規格中，使用產區名稱的混調酒至少多少比例須來自該區？', options: ['85%', '50%', '100%', '10%'], answer: 0, explain: '85%。' },
      { q: '摩爾多瓦有幾個葡萄酒 PGI？', options: ['三個', '一個', '五個', '十個'], answer: 0, explain: 'Codru、Ștefan-Vodă、Valul lui Traian。' }
    ]
  }
}
