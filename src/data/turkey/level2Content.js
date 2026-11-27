// 土耳其葡萄酒課程 Level 2 課文
// 法規來源：Türk Gıda Kodeksi Şarap Tebliği（Tebliğ No: 2008/67，RG 04.02.2009/27131）的公開條文摘要；現行有效性未能確認。
// 已登記的葡萄酒地理標示清單未能核對，課文不寫。

const info = (title, content) => ({ type: 'info', title, content })
const mis = (content) => ({ type: 'info', title: '常見誤解', content })
const compare = (headers, rows) => ({ type: 'compare', props: { headers, rows } })

export const TR_LEVEL2_CONTENT = {
  'tr-l2-1': {
    blocks: [
      info('一句話', '西部的兩個慣用分區是<b>愛琴海</b>與<b>馬爾馬拉與色雷斯</b>：離海近、現代酒廠較集中，國際品種與本土品種並存。'),
      compare(
        ['分區', '本土品種（Vinology／Jancis）', '其他特徵'],
        [
          ['愛琴海', 'Çalkarası、Bornova Misketi、Sultaniye', '傳統上也種 Cabernet Sauvignon、Syrah、Merlot、Petit Verdot；內陸偏半乾旱大陸性'],
          ['馬爾馬拉', 'Karalahna、Adakarası（Avşa 島）、Papazkarası、Yapıncak、Kolorko', '報導稱登記生產者占相當比例；Doluca、Kayra 為知名酒廠'],
          ['色雷斯', 'Papazkarası（如 Chamlija）', '1990 年代中期起有精品酒廠改種國際品種']
        ]
      ),
      info('來源', '以上多為單一或二手報導；酒廠名稱僅作為「例子」，不要求背誦。'),
      mis('「馬爾馬拉只有國際品種。」不對：Papazkarası、Karalahna 等是本土品種。')
    ],
    terms: [
      { term: 'Papazkarası', def: '色雷斯與馬爾馬拉一帶的晚熟紅品種，果香明顯、酸度活潑（Vinology）。' }
    ],
    practice: {
      prompt: '比較愛琴海與馬爾馬拉各一個本土品種與一個其他特徵。',
      points: ['愛琴海：Bornova Misketi；也有國際品種', '馬爾馬拉：Papazkarası；酒廠密度高（報導）']
    },
    quiz: [
      { q: 'Bornova Misketi 屬於哪個慣用分區？', options: ['愛琴海', '東南安納托利亞', '中部安納托利亞', '黑海'], answer: 0, explain: '愛琴海。' },
      { q: 'Papazkarası 與哪個分區連結？', options: ['馬爾馬拉與色雷斯', '愛琴海內陸', 'Cappadocia', 'Diyarbakır'], answer: 0, explain: '色雷斯與馬爾馬拉。' },
      { q: '課文對酒廠名稱的要求是？', options: ['只當例子，不要求背誦', '必須全部背誦', '完全不提', '當作法定名稱'], answer: 0, explain: '只當例子。' }
    ]
  },

  'tr-l2-2': {
    blocks: [
      info('一句話', '內陸的兩個慣用分區：<b>中部安納托利亞</b>（高原、Cappadocia、Ankara）與<b>東部與東南安納托利亞</b>（Öküzgözü 與 Boğazkere 的故鄉）。'),
      compare(
        ['分區', '代表', '備註'],
        [
          ['中部安納托利亞', 'Emir、Narince、Kalecik Karası', 'Cappadocia 海拔高；Kavaklıdere、Turasan（Ürgüp）為知名酒廠（Vinology）'],
          ['東部與東南安納托利亞', 'Öküzgözü（Elazığ）、Boğazkere（Diyarbakır）', '報導提到 Şırnak、Mardin、Gaziantep 的老藤與復興計畫（Jancis，2022）'],
          ['黑海東部（附帶）', '報導提到 Artvin 的酒廠受喬治亞技術影響；Giresun 使用野生 Vitis labrusca', '單一報導，不要求記憶']
        ]
      ),
      info('論述用法', '內陸分區的論述重點是「海拔與大陸性」如何影響成熟度與酸度（推論），並用品種例子支撐。'),
      mis('「Boğazkere 與 Öküzgözü 是同一個品種的兩個名字。」不對：它們是兩個不同品種。')
    ],
    terms: [
      { term: '老藤復興', def: '重新發掘舊葡萄園與被遺忘的品種的計畫，在報導中常見。' }
    ],
    practice: {
      prompt: '用一句因果句說明高海拔如何影響 Cappadocia 的白酒風格（標明推論）。',
      points: ['高海拔→夜間降溫、酸度保留（推論）', '連到 Emir 的高酸特徵']
    },
    quiz: [
      { q: 'Öküzgözü 與哪個地區關係最深？', options: ['Elazığ', 'Çanakkale', 'İzmir', 'Edirne'], answer: 0, explain: 'Elazığ。' },
      { q: 'Emir 常見於哪個分區？', options: ['中部安納托利亞（Cappadocia）', '愛琴海沿岸', '色雷斯', '地中海沿岸'], answer: 0, explain: 'Cappadocia。' },
      { q: 'Öküzgözü 與 Boğazkere 的關係是？', options: ['兩個不同品種', '同一品種的兩個名字', '都是白品種', '都是雜交種'], answer: 0, explain: '不同品種。' }
    ]
  },

  'tr-l2-3': {
    blocks: [
      info('一句話', '土耳其葡萄酒的法規核心是《食品法典葡萄酒公報》（Tebliğ No: 2008/67，RG 04.02.2009/27131）。它<b>定義</b>了地理標示與原產地名稱，但<b>已登記的葡萄酒清單</b>本課未能核對。'),
      compare(
        ['項目', '公報定義（第 4 條）', '重點'],
        [
          ['地理標示', '至少 85% 的葡萄來自該地區，釀造也在該地進行', '門檻較寬'],
          ['原產地名稱', '葡萄 100% 來自指定地區，僅限 Vitis vinifera，釀造在該地', '門檻較嚴'],
          ['天然氣泡酒', '二氧化碳全來自發酵，20 °C 下至少 3 bar', '半氣泡為 1–2.5 bar'],
          ['利口葡萄酒', '在部分發酵的葡萄汁或酒中加入葡萄來源的酒精、葡萄酒蒸餾物或乾葡萄蒸餾物', '一類強化酒']
        ]
      ),
      info('另一套制度', '土耳其專利與商標局另有「原產地名稱」與「地理標示」兩類通用制度（工業財產法），頁面範例不含葡萄酒；兩套定義是否與公報完全對應，本課未能確認。'),
      info('不確定的部分', '公報的現行有效性、已登記的葡萄酒地理標示清單，都沒有取得官方確認；二手來源說「沒有正式制度」，與公報有定義並不矛盾，但不能反過來說「已有許多登記」。'),
      mis('「85% 與 100% 是同一個等級。」不對：地理標示為至少 85%；原產地名稱為 100% 且僅限 Vitis vinifera。')
    ],
    terms: [
      { term: 'Coğrafi işaret', def: '地理標示。' },
      { term: 'Köken ismi', def: '原產地名稱（公報用語）。' }
    ],
    practice: {
      prompt: '用一張表比較公報的地理標示與原產地名稱，並指出本課無法確認的兩件事。',
      points: ['85% vs 100%；Vitis vinifera 限制', '無法確認：公報現行有效性、已登記清單']
    },
    quiz: [
      { q: '公報對「地理標示」的葡萄來源比例要求是？', options: ['至少 85%', '至少 50%', '100%', '沒有要求'], answer: 0, explain: '至少 85%。' },
      { q: '「原產地名稱」的葡萄來源比例是？', options: ['100%', '85%', '50%', '70%'], answer: 0, explain: '100%，且僅限 Vitis vinifera。' },
      { q: '天然氣泡酒在 20 °C 下的最低壓力是？', options: ['3 bar', '1 bar', '10 bar', '0.5 bar'], answer: 0, explain: '至少 3 bar。' },
      { q: '本課無法確認的是？', options: ['已登記葡萄酒地理標示清單', '公報有定義 85% 規則', '氣泡酒壓力定義', '原產地名稱的 100% 規則'], answer: 0, explain: '清單未能核對。' }
    ]
  },

  'tr-l2-4': {
    passScore: 60,
    blocks: [
      info('Level 2 重點回顧', '西部分區（愛琴海、馬爾馬拉與色雷斯）→ 內陸分區（中部、東部與東南）→ 公報的 85%／100% 規則與氣泡酒壓力 → 本課無法確認的兩件事。')
    ],
    quiz: [
      { q: 'Bornova Misketi 屬於哪個慣用分區？', options: ['愛琴海', '東南安納托利亞', '中部安納托利亞', '黑海'], answer: 0, explain: '愛琴海。' },
      { q: 'Papazkarası 與哪個分區連結？', options: ['馬爾馬拉與色雷斯', 'Cappadocia', 'Diyarbakır', 'Elazığ'], answer: 0, explain: '色雷斯與馬爾馬拉。' },
      { q: 'Emir 常見於哪個分區？', options: ['中部安納托利亞（Cappadocia）', '愛琴海沿岸', '色雷斯', '地中海沿岸'], answer: 0, explain: 'Cappadocia。' },
      { q: 'Boğazkere 與哪個地區關係最深？', options: ['Diyarbakır 一帶', 'Tekirdağ', 'Cappadocia', 'İzmir'], answer: 0, explain: 'Diyarbakır。' },
      { q: '公報對「地理標示」的葡萄來源比例要求是？', options: ['至少 85%', '至少 50%', '100%', '無'], answer: 0, explain: '至少 85%。' },
      { q: '「原產地名稱」要求葡萄來源？', options: ['100% 來自指定地區，且僅限 Vitis vinifera', '至少 85%', '至少 50%', '沒有要求'], answer: 0, explain: '100%。' },
      { q: '天然氣泡酒在 20 °C 下至少多少壓力？', options: ['3 bar', '1 bar', '5 bar', '0.5 bar'], answer: 0, explain: '3 bar。' },
      { q: '半氣泡酒的壓力範圍是？', options: ['1–2.5 bar', '3–5 bar', '0–0.5 bar', '5–8 bar'], answer: 0, explain: '1–2.5 bar。' },
      { q: '本課無法確認的是？', options: ['已登記葡萄酒地理標示清單', '85% 規則', '氣泡酒壓力', '100% 規則'], answer: 0, explain: '清單。' },
      { q: '課文稱土耳其的產區劃分為？', options: ['慣用分區，非法定', '法定產區', '歐盟 PDO', 'AOC'], answer: 0, explain: '慣用分區。' }
    ]
  }
}
