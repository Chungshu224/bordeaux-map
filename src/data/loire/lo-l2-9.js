/**
 * LO-L2-9 Level 2 綜合評量
 * 涵蓋: Tuffeau 地質、安茹紅酒、粉紅 AOC、Cabernet Franc 三角、都漢紅/粉紅全景、木桶工藝
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          恭喜完成 Level 2 全部課程！現在是驗收的時刻。這份評量涵蓋你在 Level 2 學到的所有核心知識：Tuffeau 凝灰岩地質、安茹-索米爾紅酒群、粉紅酒光譜、Cabernet Franc 三角（Chinon / Bourgueil / Saumur-Champigny）、都漢紅酒全景，以及桶型對釀造風格的影響。通過評量，Level 3 白詩南燧石的大門即將為你開啟。
        </p>
        <div class="exam-info">
          <div class="info-item">
            <h4>📝 評量範圍</h4>
            <p>Level 2 全部 8 堂課（lo-l2-1 ～ lo-l2-8）共 19 個紅/粉紅 AOC</p>
          </div>
          <div class="info-item">
            <h4>🎯 題目數量</h4>
            <p>5 道綜合題，涵蓋地質、品種、配對與桶型工藝</p>
          </div>
          <div class="info-item">
            <h4>🏆 通過標準</h4>
            <p>答對 4 題（80%）以上即可解鎖 Level 3</p>
          </div>
        </div>
      </div>
    `
  },
  {
    type: 'quiz',
    title: 'Level 2 綜合評量',
    questions: [
      {
        id: 'q1',
        question: 'Tuffeau（凝灰岩）最關鍵的兩個特性是什麼？',
        options: [
          '含鐵量高、顏色紅',
          '多孔隙排水佳 + 易開鑿地下洞窟酒窖',
          '緻密不透水 + 酸性強',
          '富含火山礦物 + 適合種植 Gamay'
        ],
        correctIndex: 1,
        explanation: 'Tuffeau 是多孔隙的白色石灰岩，排水極佳適合葡萄根系，且質地軟容易開鑿地下洞窟（cave），形成恆溫 12–14°C 的天然酒窖環境，是安茹-索米爾最重要的地質特徵。'
      },
      {
        id: 'q2',
        question: 'Saumur-Champigny 最知名的傳奇酒莊是哪一個？',
        options: [
          'Charles Joguet（Chinon 精品莊）',
          'Clos Rougeard（Foucault 兄弟，大橡木桶傳統陳年）',
          'Domaine de Bellivière（Loir 河谷自然酒）',
          'Domaine de la Chevalerie（Bourgueil 傳統派）'
        ],
        correctIndex: 1,
        explanation: 'Clos Rougeard（Foucault 兄弟創立，現屬 Bouygues 集團）是 Saumur-Champigny 最傳奇的酒莊，以古老大型橡木桶（foudres）長期陳年，頂款 Le Bourg 在二手市場達 €300–500+/瓶，被稱為「羅亞爾的 Romanée-Conti」。'
      },
      {
        id: 'q3',
        question: 'Touraine-Noble-Joué 為何是法國最特殊的粉紅酒 AOC 之一？',
        options: [
          '它是唯一允許添加糖的羅亞爾粉紅酒',
          '它強制必須混用三種 Pinot 品種（Pinot Meunier + Pinot Gris + Pinot Noir）',
          '它每年只能生產一次，固定在特定日期採收',
          '它是法國唯一只允許 Cabernet Franc 的粉紅 AOC'
        ],
        correctIndex: 1,
        explanation: 'Touraine-Noble-Joué 強制混用三種 Pinot 家族品種（Pinot Meunier、Pinot Gris、Pinot Noir），造就獨特的「灰色粉紅（vin gris）」風格，有超過 500 年歷史，曾是法國王室在都漢的御用餐酒。'
      },
      {
        id: 'q4',
        question: 'Pineau d\'Aunis 最標誌性的香氣特色，以及它主要種植在哪個子產區？',
        options: [
          '蜂蜜和杏桃，主要在 Vouvray',
          '白胡椒辛香 + 紫羅蘭，主要在 Loir 河谷（Coteaux-du-Loir）和 Vendômois',
          '黑醋栗和雪松，主要在 Chinon',
          '燧石礦物感，主要在 Sancerre'
        ],
        correctIndex: 1,
        explanation: 'Pineau d\'Aunis 以白胡椒辛香和紫羅蘭花香著稱，是羅亞爾最獨特的本地品種，幾乎只在南部支流的 Loir 河谷（Coteaux-du-Loir）和 Coteaux-du-Vendômois 種植，其他地方極為罕見。'
      },
      {
        id: 'q5',
        question: 'Chinon 的三種土壤類型中，哪一種最適合搭配 Rillettes de Tours？為什麼？',
        options: [
          '高台黏土石灰岩（plateau）——單寧最緊實，與油脂最相配',
          '凝灰岩坡地（coteau）——中等結構，酸度充足，礦物感與鹹豬肉互補',
          '礫石平地（graviers）——輕盈清新，酸度高，切割油脂效果最佳',
          '三種都不適合，應改喝白酒'
        ],
        correctIndex: 2,
        explanation: '礫石平地（graviers）的 Chinon 最輕盈，酸度最清爽，能有效切割 Rillettes 的豐厚油脂，且年輕飲用時的草莓和紫羅蘭果香與鹹肉形成甜鹹對比。凝灰岩坡地的 Chinon 也很適合，但更適合配羊腿等更豐厚的肉類。'
      }
    ]
  }
]
