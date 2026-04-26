/**
 * LO-L3-2 薩弗尼耶爾三部曲
 * AOCs: Savennières、Coulée de Serrant、La Roche-aux-Moines
 * 主題：頂級 Chenin 干白、生物動力法、坡向與火山岩
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          如果說 Anjou Blanc 是 Chenin 干白的入門班、Saumur Blanc 是進修班，那麼 <strong>Savennières</strong> 就是博士論文。這個僅 145 公頃的小 AOC 與內含的兩個獨立 Cru——<strong>Coulée de Serrant</strong> 與 <strong>La Roche-aux-Moines</strong>，被英國酒評家 Hugh Johnson 譽為「世界最偉大的干型白酒之一」。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌋 火山岩風土</h4>
            <p>理解 Savennières 的火山岩 + 片岩 + 沙質的獨特組合，及其對 Chenin Blanc 的影響</p>
          </div>
          <div class="point-item">
            <h4>🏆 三部曲：Savennières → La Roche-aux-Moines → Coulée de Serrant</h4>
            <p>掌握三層級的歷史、面積、規範與風格遞進</p>
          </div>
          <div class="point-item">
            <h4>🌱 Nicolas Joly 與生物動力法</h4>
            <p>認識 Coulée de Serrant 作為全球生物動力法葡萄酒運動精神原點的歷史</p>
          </div>
          <div class="point-item">
            <h4>🍷 陳年潛力與品評技巧</h4>
            <p>從青澀緊澀到蜂蠟氧化，掌握 Savennières 30 年陳年的風味演化</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: 'Savennières——Loire 西側的黃金山坡',
    highlights: [
      { id: 1, icon: '☀️', title: '南向坡面', content: '位於 Loire 北岸南向坡，採光極佳、溫度高於周圍 1–2°C' },
      { id: 2, icon: '🌬️', title: '高坡通風', content: '坡度 15–30°，自然通風減少病害風險，適合手工耕作' },
      { id: 3, icon: '🪨', title: '三色土壤', content: '火山岩（Spilite/Phtanite）+ 片岩（Schist）+ 砂質沖積（Sand）混合' }
    ],
    content: `
      <div class="savennieres-terroir">
        <p class="lead-text">Savennières 位於 Anjou 西側、Loire 河北岸的一個獨特地形——河流在這裡形成大轉彎，陽光從南面直射陡坡，形成 Loire 河谷罕見的「南向高坡」（coteaux exposés sud）地帶。這個坡面不僅日照充足，土壤組成更是 Loire 中最複雜的之一。</p>
        <div class="terroir-grid">
          <div class="terroir-block volcanic">
            <h4>🌋 Spilite & Phtanite（火山岩）</h4>
            <p>來自前寒武紀與寒武紀的海底火山活動。Spilite 是淺綠色變質玄武岩，Phtanite 則為極堅硬的黑色矽質岩。這兩種岩石加熱快、保溫佳，賦予葡萄熱帶礦物與石墨調。</p>
          </div>
          <div class="terroir-block schist">
            <h4>🪨 Brioverian 片岩</h4>
            <p>與 Anjou 主體相同的前寒武紀片岩，藍灰至黑色，賦予 Chenin 燧石與煙燻調性。</p>
          </div>
          <div class="terroir-block sand">
            <h4>🏖️ 沙質沖積</h4>
            <p>Loire 河底沖積形成的砂質土，集中於坡腳，排水極快，賦予酒款柔和度。</p>
          </div>
        </div>
        <div class="ageing-potential">
          <h4>⏳ 陳年潛力光譜</h4>
          <ul>
            <li><strong>0–3 年：</strong>緊澀、青蘋果、桲果、檸檬皮、燧石、phénolique（柚皮苦感）</li>
            <li><strong>3–10 年：</strong>蜂蠟、洋甘菊、烤榛果、礦物深度顯現、口感漸圓</li>
            <li><strong>10–20 年：</strong>馬德拉氧化香、咖哩、乾草、橙皮蜜餞、鵝肝似的油潤</li>
            <li><strong>20–30+ 年：</strong>成熟頂級酒款仍能展現核心酸度與完整結構（Coulée de Serrant 1980s 仍鮮活）</li>
          </ul>
        </div>
      </div>
    `,
    quiz: {
      question: 'Savennières 在 Loire 河谷的地理特殊性是？',
      options: [
        '位於羅亞爾河源頭',
        'Loire 北岸的南向陡坡，日照與通風極佳',
        '海拔最高的 AOC',
        '面積最大的 AOC'
      ],
      correct: 1,
      explanation: 'Loire 河谷大部分區域是平緩沖積地，而 Savennières 位於 Loire 在 Angers 附近形成大轉彎處的北岸——這個位置造就了罕見的「南向陡坡」（坡度 15–30°），日照充足、自然排水佳、通風良好。這個獨特地形是 Savennières 能在較涼的 Loire 氣候中釀出陳年潛力極長的頂級 Chenin 干白的關鍵之一。'
    }
  },

  {
    component: 'LoireGrapeProfileSlide',
    title: '頂級 Chenin Blanc 干型表現',
    componentProps: {
      slide: {
        title: '頂級 Chenin Blanc 干型表現',
        description: 'Savennières 三部曲是 Chenin Blanc 干型表現的金字塔頂——展現 Chenin 在低殘糖、高酸度條件下的極致複雜度',
        defaultKey: 'chenin'
      }
    }
  },

  {
    title: 'Savennières 三部曲',
    highlights: [
      { id: 1, icon: '🥇', title: 'Coulée de Serrant', content: '7 公頃，獨家擁有，1130 年至今' },
      { id: 2, icon: '🥈', title: 'La Roche-aux-Moines', content: '33 公頃，多家酒莊共享' },
      { id: 3, icon: '🥉', title: 'Savennières', content: '105 公頃主 AOC，整體區域' }
    ],
    content: `
      <div class="savennieres-trilogy">
        <p class="lead-text">Savennières 體系由內而外擴展為三層金字塔：頂端是面積極小的單一葡萄園 AOC，中間是分屬多家酒莊的 Cru AOC，外層是區域 AOC。這三層的歷史、釀造規範與風格各有特色。</p>
        <div class="trilogy-grid">
          <div class="trilogy-block tier1">
            <h4>🥇 Coulée de Serrant（單一葡萄園 AOC）</h4>
            <ul>
              <li><strong>面積：</strong>7 公頃</li>
              <li><strong>所有權：</strong>Joly 家族 1962 年購入後獨家擁有（Domaine de la Coulée de Serrant）</li>
              <li><strong>歷史：</strong>1130 年由 Cistercian 修士種植；歷代被法王 Louis XI、文豪 Honoré de Balzac 讚譽</li>
              <li><strong>耕作：</strong>1980 年代起全面生物動力法（Biodynamie）</li>
              <li><strong>規範：</strong>產量上限 25 hL/ha（Loire 干白最嚴格）；100% Chenin Blanc Sec</li>
              <li><strong>風格：</strong>蜂蠟、咖哩、乾燥草藥、極長餘韻；30+ 年陳年潛力</li>
              <li><strong>價格：</strong>每瓶 €120–€200（年輕酒款），陳年酒款 €300+</li>
            </ul>
          </div>
          <div class="trilogy-block tier2">
            <h4>🥈 La Roche-aux-Moines（Cru AOC）</h4>
            <ul>
              <li><strong>面積：</strong>33 公頃</li>
              <li><strong>所有權：</strong>多家酒莊共享（最大者 Domaine aux Moines 約 9 公頃）</li>
              <li><strong>歷史：</strong>1106 年由 Saint-Nicolas 修士種植；得名於修道院</li>
              <li><strong>規範：</strong>產量上限 30 hL/ha；100% Chenin Blanc Sec</li>
              <li><strong>風格：</strong>較 Coulée 更直接、結構紮實、礦物張力強</li>
              <li><strong>名家：</strong>Domaine aux Moines、Château de Chamboureau、Domaine du Closel</li>
            </ul>
          </div>
          <div class="trilogy-block tier3">
            <h4>🥉 Savennières（主 AOC）</h4>
            <ul>
              <li><strong>面積：</strong>約 105 公頃（扣除兩個 Cru 後）</li>
              <li><strong>規範：</strong>產量上限 50 hL/ha；100% Chenin Blanc Sec</li>
              <li><strong>名家：</strong>Domaine du Closel、Domaine des Baumard、Domaine du Petit Métris、Château d'Epiré</li>
              <li><strong>風格：</strong>從乾淨清爽到結構紮實，視酒莊風格而異</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },

  {
    title: 'Nicolas Joly 與生物動力法的故事',
    highlights: [
      { id: 1, icon: '🌱', title: '1980 年代轉型', content: '從金融業回到家族酒莊，1984 年起全面採用生物動力法' },
      { id: 2, icon: '📚', title: '《Wine from Sky to Earth》', content: '1997 年出版的著作成為全球自然酒運動聖經' },
      { id: 3, icon: '🌍', title: 'Renaissance des Appellations', content: '創立國際生物動力葡萄酒組織，會員遍及 16 國 200+ 酒莊' }
    ],
    content: `
      <div class="joly-story">
        <p class="lead-text">Nicolas Joly 的故事是 20 世紀末葡萄酒世界的轉折點。從 J.P. Morgan 紐約金融業回到家族酒莊後，他在 1984 年讀到 Rudolf Steiner 的人智學農業著作，毅然決定將 Coulée de Serrant 全面轉為生物動力法。當時這個決定被視為瘋狂——但 30 年後，全球頂級酒莊（DRC、Leflaive、Chapoutier 等）紛紛跟進，證明 Joly 的遠見。</p>
        <div class="biodynamic-principles">
          <h4>🌙 生物動力法核心原則</h4>
          <ul>
            <li><strong>500/501 製劑：</strong>牛糞填入牛角埋於土壤中發酵的微生物激活劑</li>
            <li><strong>月相曆：</strong>依照 Maria Thun 月相曆決定耕作、修剪、裝瓶時機</li>
            <li><strong>無化學合成物：</strong>禁止人工化肥、除草劑、殺蟲劑、添加酵母</li>
            <li><strong>整體農業：</strong>葡萄園搭配牛、馬、雞、蜜蜂、覆蓋作物</li>
          </ul>
        </div>
        <div class="renaissance">
          <h4>🌍 Renaissance des Appellations 國際組織</h4>
          <p>Joly 1990 年代創立的國際生物動力葡萄酒組織，目前會員包括：</p>
          <ul>
            <li>法國：Domaine Leflaive、Comte Lafon、Marcel Deiss、Zind-Humbrecht</li>
            <li>德國：Dr. Bürklin-Wolf、Wittmann</li>
            <li>義大利：Foradori、Stella di Campalto</li>
            <li>奧地利：Nikolaihof、Bernhard Ott</li>
            <li>16 國 200+ 酒莊定期巡迴展覽</li>
          </ul>
        </div>
      </div>
    `,
    quiz: {
      question: 'Nicolas Joly 1984 年將 Coulée de Serrant 轉為生物動力法，主要受誰的著作啟發？',
      options: [
        'Hugh Johnson（葡萄酒作家）',
        'Robert Parker（酒評家）',
        'Rudolf Steiner（人智學創始人）',
        'Jules Chauvet（自然酒運動）'
      ],
      correct: 2,
      explanation: 'Nicolas Joly 是受 Rudolf Steiner（1861–1925）1924 年的「農業課程」（Agriculture Course）啟發。Steiner 是奧地利哲學家、人智學（Anthroposophy）創始人，他提出將農場視為一個有機整體，並引入月相、星辰運行、特殊製劑等概念。Steiner 的理論成為全球生物動力農業（Demeter 認證體系）的基礎，但長期被主流農學界視為「神祕主義」。Joly 是少數將其完整實踐到頂級葡萄酒的先驅。'
    }
  },

  {
    type: 'quiz',
    title: 'Level 3-2 知識檢測',
    questions: [
      {
        id: 'q1',
        question: 'Coulée de Serrant 的面積與所有權狀況是？',
        options: [
          '50 公頃，多家酒莊共享',
          '7 公頃，由 Joly 家族獨家擁有',
          '100 公頃，國家公有',
          '20 公頃，三家酒莊共享'
        ],
        correctIndex: 1,
        explanation: 'Coulée de Serrant 是 Loire 極罕見的「單一葡萄園 + 單一所有者 AOC」（與勃艮第 Romanée-Conti 類似）。僅 7 公頃，由 Joly 家族 1962 年購入後獨家經營至今。這個結構讓酒莊能完全控制風格與品質，是法國 AOC 體系中極特殊的存在。'
        },
      {
        id: 'q2',
        question: 'Savennières AOC 內火山岩主要由哪兩種岩石組成？',
        options: [
          'Granite + Basalt',
          'Spilite + Phtanite',
          'Limestone + Tuffeau',
          'Schist + Sand'
        ],
        correctIndex: 1,
        explanation: 'Spilite 是淺綠色變質玄武岩（前寒武紀），Phtanite 是極堅硬的黑色矽質岩。這兩種岩石形成於前寒武紀至寒武紀的海底火山活動，是 Savennières 風土的關鍵成分。它們加熱快、保溫佳，賦予葡萄熱帶礦物與石墨調，是 Savennières 與 Anjou Blanc 主體（純片岩）最大的差異。'
      },
      {
        id: 'q3',
        question: 'Savennières 體系金字塔由內而外的層級為？',
        options: [
          'Savennières → La Roche-aux-Moines → Coulée de Serrant',
          'Coulée de Serrant → La Roche-aux-Moines → Savennières',
          'La Roche-aux-Moines → Coulée de Serrant → Savennières',
          'Savennières → Coulée de Serrant → La Roche-aux-Moines'
        ],
        correctIndex: 1,
        explanation: '由最頂級（最小、最嚴格）到最廣泛：Coulée de Serrant（7 公頃，單一葡萄園 AOC，產量 25 hL/ha）→ La Roche-aux-Moines（33 公頃，Cru AOC，30 hL/ha）→ Savennières（105 公頃主 AOC，50 hL/ha）。這個結構與勃艮第的 Grand Cru → Premier Cru → Village 邏輯類似。'
      },
      {
        id: 'q4',
        question: '頂級 Savennières 陳年 20 年後最常出現的香氣調是？',
        options: [
          '青蘋果、白花',
          '蜂蠟、咖哩、馬德拉氧化香、乾草',
          '黑加侖、皮革',
          '草莓、玫瑰'
        ],
        correctIndex: 1,
        explanation: '頂級 Chenin Blanc 干型陳年的標誌性香氣演化：年輕時的青蘋果、桲果、檸檬皮逐漸發展為蜂蠟、烤榛果、咖哩（葫蘆巴/Sotolon）、馬德拉氧化香、乾草、橙皮蜜餞。這個香氣譜系與 Riesling、頂級老 Chardonnay 不同，是 Chenin 獨有的「陳年指紋」，也是辨識 Savennières / Vouvray Sec 老酒的關鍵。'
      }
    ]
  }
]
