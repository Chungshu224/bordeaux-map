// 土耳其葡萄酒課程 Level 1 課文
// 來源與狀態見 TURKEY_FACT_CHECK.md。產區為「慣用分區」，非法定；面積排名、各區占比、釀酒比例不入題庫。

const info = (title, content) => ({ type: 'info', title, content })
const mis = (content) => ({ type: 'info', title: '常見誤解', content })
const compare = (headers, rows) => ({ type: 'compare', props: { headers, rows } })

export const TR_LEVEL1_CONTENT = {
  'tr-l1-1': {
    blocks: [
      info('一句話', '安納托利亞是古老的葡萄栽培地帶（通則說法），但今天的土耳其葡萄酒業<b>規模小、酒廠集中、多數葡萄不用來釀酒</b>。這個反差是整門課的主線。'),
      compare(
        ['階段', '內容', '來源性質'],
        [
          ['奧斯曼時期', '非穆斯林社群是釀酒的重要力量', 'Jancis Robinson（2022）'],
          ['1920 年代', '人口交換使這些社群遷出，但大型葡萄園多數仍保留', 'Jancis Robinson（2022）'],
          ['1980 年代起', '葡萄園面積長期下降', 'OIV，經二手引用'],
          ['1990 年代初', 'Doluca 以國際品種開始精品酒、Kavaklıdere 以本土品種開始酒款', 'Decanter，經二手引用'],
          ['2009 年', '禁止契約代工釀酒（理事會決議 2009-07-08）', 'WineWithSeth 引 Decanter（二手）'],
          ['2013 年', '酒類促銷受到限制；Jancis 報導稱包含網路銷售', 'Jancis Robinson（2022）']
        ]
      ),
      info('怎麼讀', '時間點都是「報導或二手說法」，不是官方年表；寫論述時要標明來源性質。'),
      mis('「土耳其沒有葡萄酒產業。」不對：2022 年的報導約有 185 家登記生產者，只是規模與消費量都不大。')
    ],
    terms: [
      { term: '契約代工', def: '委託他人代為釀酒（fason）；土耳其自 2009 年起禁止。' },
      { term: '人口交換', def: '1920 年代的人口遷移，影響了原本釀酒的社群。' }
    ],
    practice: {
      prompt: '用「事實→機制→結果」說明歷史事件如何影響今天的酒業規模（標明哪些是推論）。',
      points: ['事實：人口交換使釀酒社群遷出（報導）', '機制：技術與市場的傳承中斷（推論）', '結果：現代酒業規模小、集中']
    },
    quiz: [
      { q: '依本課，下列哪一項是土耳其酒業的特徵？', options: ['葡萄園面積大，但多數葡萄不用來釀酒', '葡萄酒消費量全球最高', '沒有任何酒廠', '全部酒款都是氣泡酒'], answer: 0, explain: '面積大但釀酒比例低，是主線。' },
      { q: '2009 年土耳其禁止了什麼？', options: ['契約代工釀酒', '所有葡萄種植', '葡萄酒出口', '本土品種'], answer: 0, explain: '契約代工（fason）。' },
      { q: '課文如何處理歷史時間點的來源？', options: ['標明是報導或二手說法', '當作官方年表', '一律省略', '只用數字'], answer: 0, explain: '標明來源性質。' }
    ]
  },

  'tr-l1-2': {
    blocks: [
      info('一句話', '土耳其的產區是<b>慣用分區</b>，不是法定產區。常見的四個分區：愛琴海、馬爾馬拉與色雷斯、中部安納托利亞、東部與東南安納托利亞。'),
      compare(
        ['慣用分區', '代表地名', '氣候印象（通則）'],
        [
          ['愛琴海', 'İzmir、Manisa、Bodrum 一帶', '地中海式；往內陸轉為半乾旱大陸性'],
          ['馬爾馬拉與色雷斯', 'Tekirdağ、Kırklareli、Çanakkale', '近歐洲，過渡型氣候'],
          ['中部安納托利亞', 'Cappadocia（Nevşehir）、Ankara 的 Kalecik', '高原、大陸性、海拔高'],
          ['東部與東南安納托利亞', 'Elazığ、Diyarbakır', '內陸、大陸性']
        ]
      ),
      info('為什麼說「慣用」', '各來源劃分不一致（例如有的分更多區）；各區產量占比的數字因加總超過 100% 而不可靠，所以本課不放。答題時請說「慣用分區」，不要說「法定產區」。'),
      mis('「愛琴海就是一個像 Bordeaux 那樣的法定產區。」不對：它是地理上的慣用說法。')
    ],
    terms: [
      { term: '慣用分區', def: '約定俗成的地理分區，不具法定範圍。' },
      { term: 'Cappadocia', def: '中部安納托利亞的高海拔地區，與 Emir 連結。' }
    ],
    practice: {
      prompt: '寫出四個慣用分區，各配一個地名，並說明為何不稱為法定產區。',
      points: ['愛琴海—İzmir；馬爾馬拉與色雷斯—Tekirdağ；中部—Cappadocia；東部與東南—Diyarbakır', '劃分不一致、未取得官方範圍']
    },
    quiz: [
      { q: 'Cappadocia 屬於哪個慣用分區？', options: ['中部安納托利亞', '愛琴海', '色雷斯', '黑海'], answer: 0, explain: '中部。' },
      { q: 'Tekirdağ 屬於哪個慣用分區？', options: ['馬爾馬拉與色雷斯', '東南安納托利亞', '中部安納托利亞', '愛琴海'], answer: 0, explain: '馬爾馬拉與色雷斯。' },
      { q: '本課如何稱呼土耳其的產區劃分？', options: ['慣用分區，非法定', '法定產區', '歐盟 PDO', 'AOC'], answer: 0, explain: '慣用分區。' }
    ]
  },

  'tr-l1-3': {
    blocks: [
      info('一句話', '先記五個代表品種的<b>名稱、地區、色別</b>，再記風格方向。來源為 Wines of Turkey（經二手引用），一致但非官方。'),
      compare(
        ['品種', '色別', '地區', '風格方向'],
        [
          ['Öküzgözü', '紅', 'Elazığ 一帶', '果味明顯'],
          ['Boğazkere', '紅', 'Diyarbakır 一帶（東南部）', '單寧高、結構強'],
          ['Kalecik Karası', '紅', 'Ankara 的 Kalecik', '中等酒體、低單寧、清爽'],
          ['Narince', '白', 'Tokat', '被比較為接近 Chardonnay 的風格'],
          ['Emir', '白', 'Cappadocia', '高酸；用於靜態與氣泡酒']
        ]
      ),
      info('其他', '愛琴海另有 Çalkarası、Bornova Misketi、Sultaniye；馬爾馬拉有 Karalahna、Adakarası、Papazkarası 等（Vinology）。商業使用約 60 種本土品種，另有逾 1,450 種收藏於研究所（Jancis Robinson，2022）。'),
      mis('「土耳其只種本土品種。」不對：報導指大多數生產者主要使用國際品種。')
    ],
    terms: [
      { term: 'Öküzgözü／Boğazkere', def: '東部與東南安納托利亞的兩個代表紅品種，常被一起提起。' }
    ],
    practice: {
      prompt: '寫出兩個紅品種與兩個白品種，各配一個地區。',
      points: ['紅：Öküzgözü—Elazığ；Boğazkere—Diyarbakır', '白：Narince—Tokat；Emir—Cappadocia']
    },
    quiz: [
      { q: 'Emir 與哪個地區關係最深？', options: ['Cappadocia', 'Tekirdağ', 'İzmir', 'Diyarbakır'], answer: 0, explain: 'Cappadocia。' },
      { q: 'Boğazkere 的風格方向是？', options: ['單寧高、結構強', '無色', '甜型白酒', '只做氣泡酒'], answer: 0, explain: '單寧高。' },
      { q: 'Kalecik Karası 的名稱來自哪裡？', options: ['Ankara 的 Kalecik', 'Tokat', 'Elazığ', 'Çanakkale'], answer: 0, explain: 'Kalecik。' },
      { q: 'Narince 是什麼色別？', options: ['白', '紅', '粉紅', '橙'], answer: 0, explain: '白品種。' }
    ]
  },

  'tr-l1-4': {
    passScore: 60,
    blocks: [
      info('Level 1 重點回顧', '歷史節點（標來源性質）→ 慣用分區不是法定產區 → 五個代表品種的色別與地區。')
    ],
    quiz: [
      { q: '本課如何稱呼土耳其的產區劃分？', options: ['慣用分區，非法定', '法定產區', '歐盟 PDO', 'AOC'], answer: 0, explain: '慣用分區。' },
      { q: 'Öküzgözü 與哪個地區關係最深？', options: ['Elazığ 一帶', 'Tekirdağ', 'Cappadocia', 'İzmir'], answer: 0, explain: 'Elazığ。' },
      { q: 'Boğazkere 的風格方向是？', options: ['單寧高、結構強', '低單寧、清爽', '甜型', '氣泡'], answer: 0, explain: '單寧高。' },
      { q: 'Emir 與哪個地區關係最深？', options: ['Cappadocia', 'Elazığ', 'Diyarbakır', 'Tokat'], answer: 0, explain: 'Cappadocia。' },
      { q: 'Narince 的色別是？', options: ['白', '紅', '粉紅', '橙'], answer: 0, explain: '白。' },
      { q: 'Kalecik Karası 與哪個城市附近的 Kalecik 相關？', options: ['Ankara', 'İzmir', 'Diyarbakır', 'Edirne'], answer: 0, explain: 'Ankara。' },
      { q: '2009 年土耳其禁止了什麼？', options: ['契約代工釀酒', '本土品種', '出口', '葡萄栽培'], answer: 0, explain: '契約代工。' },
      { q: '課文如何處理歷史時間點？', options: ['標明來源性質', '當作官方年表', '省略', '只寫數字'], answer: 0, explain: '標明來源性質。' }
    ]
  }
}
