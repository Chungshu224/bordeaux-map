// 東歐與巴爾幹課程 Level 1 課文
// 事實來源：官方（第五輪核對，見 EASTERNEUROPE_FACT_CHECK.md）— 斯洛維尼亞三區（Uradni list RS／gov.si）、摩爾多瓦三個葡萄酒 PGI（農業部 2016 年第 12 號命令）、羅馬尼亞法律 164/2015（八個栽培區名稱、CMD／CT／CIB 定義）。
// 其餘為概念層級的通則（氣候成因、入歐盟年份、品種的主要產地）；品種親緣一律標「常見說法」。
// 不寫：面積、PDO 總數、糖度 g/L、出口比例。

const info = (title, content) => ({ type: 'info', title, content })
const mis = (content) => ({ type: 'info', title: '常見誤解', content })
const compare = (headers, rows) => ({ type: 'compare', props: { headers, rows } })

export const EE_LEVEL1_CONTENT = {
  // ───────────────────────── ee-l1-1 ─────────────────────────
  'ee-l1-1': {
    blocks: [
      info('一句話', '這一帶的葡萄酒史有一條共同主線：<b>古老傳統 → 共產時期的大規模生產 → 私有化 → 加入歐盟或與歐盟接軌</b>。理解這條線，就能解釋今天各國為何都在談「品質轉型」。'),
      compare(
        ['階段', '典型特徵', '對今天的影響'],
        [
          ['古老傳統', '各地早有葡萄栽培與釀酒', '留下本土品種與傳統產區'],
          ['共產時期', '國營農場與合作社為主，偏重產量與出口配額', '品種與風格趨同、品質導向的小酒莊少'],
          ['私有化', '土地與酒廠回到私人手中', '重新種植、投資新酒廠；老園與新園並存'],
          ['歐盟或接軌', '建立 PDO／PGI 等地理標示制度', '法規向歐盟看齊，名稱與等級重新界定']
        ]
      ),
      info('加入歐盟的年份', '斯洛維尼亞 2004；羅馬尼亞與保加利亞 2007；克羅埃西亞 2013。摩爾多瓦<b>不是</b>歐盟成員，2014 年簽署與歐盟的聯繫協定（Association Agreement），並依此調整地理標示制度。'),
      info('怎麼讀這段歷史', '「共產時期偏重產量」是整體傾向，各國細節不同；本課不用單一數字描述，因為面積與產量的年份與口徑差異很大。'),
      mis('「東歐葡萄酒都是便宜的大宗酒。」不對：那是特定歷史階段的印象。今天的差異主要在各國轉型的速度與選擇，這正是後面各課要比較的。')
    ],
    terms: [
      { term: '私有化', def: '共產時期後，土地與酒廠由國有或集體轉為私人所有。' },
      { term: '聯繫協定', def: '摩爾多瓦與歐盟的協定（2014 年簽署），其中包含地理標示制度的對接。' }
    ],
    practice: {
      prompt: '用「事實→機制→結果」說明共產時期為何影響了今天的品種與風格。',
      points: ['事實：以國營農場與合作社偏重產量', '機制：品種與釀法被產量導向決定', '結果：轉型期需要重新種植與投資']
    },
    quiz: [
      { q: '下列哪個國家不是歐盟成員？', options: ['摩爾多瓦', '斯洛維尼亞', '羅馬尼亞', '克羅埃西亞'], answer: 0, explain: '摩爾多瓦非歐盟成員；其他三國已加入。' },
      { q: '克羅埃西亞加入歐盟的年份是？', options: ['2004', '2007', '2013', '2021'], answer: 2, explain: '2013 年。' },
      { q: '羅馬尼亞與保加利亞加入歐盟的年份是？', options: ['2004', '2007', '2013', '1995'], answer: 1, explain: '兩國皆為 2007 年。' }
    ]
  },

  // ───────────────────────── ee-l1-2 ─────────────────────────
  'ee-l1-2': {
    blocks: [
      info('一句話', '這一帶的氣候由三個因素決定：<b>大陸性、水體、山脈</b>。內陸冬冷夏熱，靠近黑海或亞得里亞海的地方被海洋調節，山脈則阻擋冷空氣並製造坡地與海拔差。'),
      compare(
        ['因素', '機制', '例子'],
        [
          ['大陸性', '遠離海洋，冬季寒冷、夏季炎熱，溫差大', '羅馬尼亞與保加利亞北部內陸、克羅埃西亞東部內陸'],
          ['黑海', '水體調節溫度，沿岸較溫和', '羅馬尼亞 Dobrogea、保加利亞黑海沿岸'],
          ['亞得里亞海', '地中海式氣候影響沿岸與島嶼', '克羅埃西亞 Istra 與 Dalmacija、斯洛維尼亞 Primorska'],
          ['山脈', '喀爾巴阡山脈與巴爾幹山脈（Stara Planina）形成屏障與坡地', '羅馬尼亞的山脈弧形環繞 Transylvania；巴爾幹山脈把保加利亞分成南北']
        ]
      ),
      info('用因果句描述', '例：「因為亞得里亞海調節沿岸氣溫，克羅埃西亞 Dalmacija 的夏季炎熱而冬季溫和，適合晚熟的紅品種。」關鍵是從地理因素推到葡萄成熟度，再推到風格。'),
      mis('「東歐都是寒冷的大陸性氣候。」不對：同一個國家內，沿海與內陸、平原與山區差異很大；克羅埃西亞就同時有大陸性內陸與地中海式沿岸。')
    ],
    terms: [
      { term: '大陸性氣候', def: '遠離海洋、冬冷夏熱、年溫差大的氣候。' },
      { term: '巴爾幹山脈（Stara Planina）', def: '橫貫保加利亞的山脈，常作為南北氣候與產區的分界。' }
    ],
    practice: {
      prompt: '寫一句因果句：說明黑海如何影響羅馬尼亞 Dobrogea 的葡萄成熟。',
      points: ['水體調節氣溫', '沿岸較溫和', '推到成熟度與風格']
    },
    quiz: [
      { q: '下列哪一項最能說明沿海與內陸氣候差異的主因？', options: ['水體對溫度的調節', '土壤顏色', '酒廠規模', '品種名稱'], answer: 0, explain: '水體調節溫度，使沿岸較溫和、內陸溫差較大。' },
      { q: '巴爾幹山脈（Stara Planina）位於哪個國家，常用來區分南北？', options: ['保加利亞', '斯洛維尼亞', '摩爾多瓦', '克羅埃西亞'], answer: 0, explain: '橫貫保加利亞。' },
      { q: '亞得里亞海主要影響下列哪個地區的氣候？', options: ['克羅埃西亞 Dalmacija', '羅馬尼亞 Transylvania', '摩爾多瓦 Codru', '保加利亞北部內陸'], answer: 0, explain: 'Dalmacija 是亞得里亞海沿岸。' }
    ]
  },

  // ───────────────────────── ee-l1-3 ─────────────────────────
  'ee-l1-3': {
    blocks: [
      info('一句話', '白品種學三件事：<b>名稱（含別名）、主要國家、風格</b>。這一帶最常見的別名問題是同一品種在不同國家有不同名字。'),
      compare(
        ['品種', '主要國家／產區', '風格方向', '備註'],
        [
          ['Graševina', '克羅埃西亞（Slavonija 一帶）', '從清爽到更豐厚', '與 Welschriesling 為同一品種（斯洛維尼亞稱 Laški rizling）'],
          ['Malvazija Istarska', '克羅埃西亞與斯洛維尼亞的 Istra', '清新到較豐滿', '名稱含「Istarska」指 Istria'],
          ['Rebula', '斯洛維尼亞 Goriška Brda 一帶', '酸度明顯', '與義大利的 Ribolla Gialla 為同一品種（常見說法）'],
          ['Fetească Regală／Albă', '羅馬尼亞', '芳香、中等酒體', '兩者是不同品種；Regală 常見說法為 Albă 與 Grasă de Cotnari 的雜交'],
          ['Misket 系', '保加利亞', '芳香型', '是一個品種群，使用時要說明是哪一種'],
          ['Dimyat', '保加利亞', '中性到柔和', '保加利亞的代表白品種之一']
        ]
      ),
      info('讀表的方法', '先記「名稱→國家」，再記風格方向，最後記別名。親緣關係（如 Regală 的父母）屬文獻說法，答題時用「常見說法」，不要當作官方定義。'),
      mis('「Fetească Albă 與 Fetească Regală 是同一種葡萄。」不對：它們是不同品種，名稱相近容易混淆。')
    ],
    terms: [
      { term: 'Graševina', def: '克羅埃西亞對 Welschriesling 的稱呼。' },
      { term: 'Laški rizling', def: '斯洛維尼亞對 Welschriesling 的稱呼。' }
    ],
    practice: {
      prompt: '寫出 Graševina 在克羅埃西亞與斯洛維尼亞的名稱，並說明為何需要記別名。',
      points: ['克羅埃西亞：Graševina', '斯洛維尼亞：Laški rizling', '同一品種在不同國家名稱不同，盲品與標籤閱讀時會用到']
    },
    quiz: [
      { q: '斯洛維尼亞對 Welschriesling 的稱呼是？', options: ['Laški rizling', 'Rebula', 'Dimyat', 'Graševina'], answer: 0, explain: 'Graševina 是克羅埃西亞的稱呼，斯洛維尼亞稱 Laški rizling。' },
      { q: 'Malvazija Istarska 主要出現在哪個地區？', options: ['Istra', 'Dobrogea', 'Codru', 'Thracian Lowlands'], answer: 0, explain: '「Istarska」指 Istria。' },
      { q: 'Rebula 主要與下列哪個斯洛維尼亞地區相關？', options: ['Goriška Brda', 'Prekmurje', 'Bela krajina', 'Haloze'], answer: 0, explain: 'Rebula 與 Goriška Brda 關係密切。' },
      { q: '關於 Fetească Albă 與 Fetească Regală，哪個說法正確？', options: ['兩者是不同品種', '兩者是同一品種的不同名稱', '兩者都是紅品種', '兩者都是保加利亞品種'], answer: 0, explain: '名稱相近但是不同品種。' }
    ]
  },

  // ───────────────────────── ee-l1-4 ─────────────────────────
  'ee-l1-4': {
    blocks: [
      info('一句話', '紅品種同樣記<b>名稱、國家、風格</b>，並留意別名與親緣說法的來源。'),
      compare(
        ['品種', '主要國家／產區', '風格方向', '備註'],
        [
          ['Plavac Mali', '克羅埃西亞 Dalmacija（Dingač 等）', '濃郁、單寧與酒精度高', 'DNA 研究顯示與 Crljenak Kaštelanski、Dobričić 有親緣（文獻說法）'],
          ['Teran', '斯洛維尼亞 Kras', '高酸、帶野性', '與 Refošk 家族相關，兩者不要直接等同'],
          ['Fetească Neagră', '羅馬尼亞', '中等到濃郁的紅酒', '羅馬尼亞的代表紅品種'],
          ['Mavrud', '保加利亞（Asenovgrad 一帶）', '色深、單寧強', '保加利亞本土品種'],
          ['Melnik', '保加利亞南部（Melnik 一帶）', '色深、風格獨特', '因產地得名'],
          ['Gamza', '保加利亞北部（多瑙河平原）', '色淺到中等、偏果香', '常見說法與匈牙利的 Kadarka 為同一品種']
        ]
      ),
      info('親緣說法怎麼寫', '品種親緣來自 DNA 研究與各方文獻，不同來源的說法可能不同。課文與答題一律註明「依文獻」或「常見說法」，避免把它當成法規事實。'),
      mis('「Teran 就是 Refosco。」這樣說太快：兩者相關但不要直接劃等號，答題時說「與 Refošk 家族相關」較安全。')
    ],
    terms: [
      { term: 'Plavac Mali', def: '克羅埃西亞 Dalmacija 代表紅品種。' },
      { term: 'Gamza', def: '保加利亞稱呼；常見說法與 Kadarka 為同一品種。' }
    ],
    practice: {
      prompt: '寫出三個紅品種與其主要國家，並說明哪一個的親緣說法需要標示「依文獻」。',
      points: ['例：Plavac Mali—克羅埃西亞；Fetească Neagră—羅馬尼亞；Mavrud—保加利亞', 'Plavac Mali 或 Gamza 的親緣為文獻說法']
    },
    quiz: [
      { q: 'Plavac Mali 的主要產地是？', options: ['克羅埃西亞 Dalmacija', '羅馬尼亞 Dobrogea', '斯洛維尼亞 Prekmurje', '摩爾多瓦 Codru'], answer: 0, explain: 'Plavac Mali 與 Dalmacija 的關係最深。' },
      { q: 'Fetească Neagră 是哪個國家的代表紅品種？', options: ['羅馬尼亞', '保加利亞', '克羅埃西亞', '斯洛維尼亞'], answer: 0, explain: '羅馬尼亞。' },
      { q: 'Mavrud 是哪個國家的本土品種？', options: ['保加利亞', '羅馬尼亞', '克羅埃西亞', '摩爾多瓦'], answer: 0, explain: '保加利亞。' },
      { q: '關於品種親緣的說法，課文建議如何書寫？', options: ['註明依文獻或常見說法', '一律當成官方事實', '完全不要提', '只寫一個來源'], answer: 0, explain: '親緣屬文獻說法，需標明來源性質。' }
    ]
  },

  // ───────────────────────── ee-l1-5 ─────────────────────────
  'ee-l1-5': {
    blocks: [
      info('一句話', '五國加摩爾多瓦先用<b>制度</b>分兩類：歐盟成員（PDO／PGI 制度）與非歐盟（摩爾多瓦自有地理標示）。再用<b>產區輪廓</b>各記一個要點。'),
      compare(
        ['國家', '歐盟？', '本課要記的產區輪廓（官方已核對）'],
        [
          ['斯洛維尼亞', '是（2004）', '三區：Podravje、Posavje、Primorska（細分為九個分區，Level 2 詳述）'],
          ['克羅埃西亞', '是（2013）', '大陸區與沿海區兩大塊（細分方式 Level 2 詳述）'],
          ['羅馬尼亞', '是（2007）', '法律列出八個葡萄栽培區（Level 2 詳述名稱）'],
          ['保加利亞', '是（2007）', '兩大 PGI 區：Thracian Lowlands（南）與 Danubian Plain（北）'],
          ['摩爾多瓦', '否', '三個葡萄酒 PGI：Valul lui Traian、Ștefan-Vodă、Codru（農業部 2016 年命令劃定）']
        ]
      ),
      info('Divin 不是葡萄酒產區', '摩爾多瓦另有名為 Divin 的地理標示，但它是葡萄白蘭地（烈酒），不是葡萄酒產區。'),
      info('數字為什麼不寫', '各國葡萄園面積與 PDO 總數在不同來源差異很大，本課程不要求背誦，也不放進題庫。'),
      mis('「摩爾多瓦也適用歐盟 PDO／PGI。」不對：摩爾多瓦非歐盟成員，使用自己的地理標示制度，並依聯繫協定向歐盟靠攏。')
    ],
    terms: [
      { term: 'PGI', def: '受保護的地理標示（Protected Geographical Indication）。' },
      { term: 'Divin', def: '摩爾多瓦葡萄白蘭地的地理標示，不是葡萄酒產區。' }
    ],
    practice: {
      prompt: '把五國＋摩爾多瓦分為歐盟與非歐盟兩類，並各寫一個產區輪廓。',
      points: ['歐盟：斯洛維尼亞、克羅埃西亞、羅馬尼亞、保加利亞', '非歐盟：摩爾多瓦', '例：斯洛維尼亞三區；摩爾多瓦三個葡萄酒 PGI']
    },
    quiz: [
      { q: '斯洛維尼亞的三個葡萄酒產區是？', options: ['Podravje、Posavje、Primorska', 'Codru、Ștefan-Vodă、Valul lui Traian', 'Istra、Dalmacija、Slavonija', 'Dobrogea、Muntenia、Transylvania'], answer: 0, explain: '依斯洛維尼亞法規與 gov.si。' },
      { q: '摩爾多瓦有幾個葡萄酒地理標示（PGI）？', options: ['三個', '一個', '十二個', '沒有'], answer: 0, explain: 'Valul lui Traian、Ștefan-Vodă、Codru（農業部 2016 年命令）。' },
      { q: 'Divin 是什麼？', options: ['摩爾多瓦葡萄白蘭地的地理標示', '羅馬尼亞的白葡萄品種', '保加利亞的紅酒產區', '斯洛維尼亞的氣泡酒'], answer: 0, explain: '它是烈酒，不是葡萄酒產區。' },
      { q: '保加利亞的兩大 PGI 區是？', options: ['Thracian Lowlands 與 Danubian Plain', 'Podravje 與 Primorska', 'Codru 與 Divin', 'Istra 與 Dalmacija'], answer: 0, explain: '分別在南與北。' }
    ]
  },

  // ───────────────────────── ee-l1-6 ─────────────────────────
  'ee-l1-6': {
    passScore: 60,
    blocks: [
      info('Level 1 重點回顧', '歷史主線（共產時期→私有化→歐盟或接軌）→ 氣候三因素（大陸性、水體、山脈）→ 白品種與別名（Graševina＝Welschriesling）→ 紅品種與親緣（標示「依文獻」）→ 制度分類（歐盟 vs 摩爾多瓦）。')
    ],
    quiz: [
      { q: '下列哪個國家不是歐盟成員？', options: ['摩爾多瓦', '羅馬尼亞', '保加利亞', '克羅埃西亞'], answer: 0, explain: '摩爾多瓦。' },
      { q: '斯洛維尼亞加入歐盟的年份是？', options: ['2004', '2007', '2013', '1995'], answer: 0, explain: '2004 年。' },
      { q: '斯洛維尼亞的三個葡萄酒產區是？', options: ['Podravje、Posavje、Primorska', 'Istra、Dalmacija、Slavonija', 'Codru、Divin、Dobrogea', 'Muntenia、Banat、Crișana'], answer: 0, explain: '三區。' },
      { q: '摩爾多瓦有幾個葡萄酒 PGI？', options: ['三個', '兩個', '五個', '十個'], answer: 0, explain: '三個，Divin 是烈酒。' },
      { q: '斯洛維尼亞對 Welschriesling 的稱呼是？', options: ['Laški rizling', 'Dimyat', 'Mavrud', 'Rebula'], answer: 0, explain: 'Laški rizling。' },
      { q: 'Plavac Mali 的主要產地是？', options: ['克羅埃西亞 Dalmacija', '保加利亞 Thrace', '羅馬尼亞 Banat', '斯洛維尼亞 Kras'], answer: 0, explain: 'Dalmacija。' },
      { q: '巴爾幹山脈（Stara Planina）位於哪個國家？', options: ['保加利亞', '克羅埃西亞', '斯洛維尼亞', '摩爾多瓦'], answer: 0, explain: '保加利亞。' },
      { q: '關於品種親緣的說法，課文建議？', options: ['註明依文獻或常見說法', '當作官方事實', '不要提', '只引用一個來源'], answer: 0, explain: '標明來源性質。' }
    ]
  }
}
