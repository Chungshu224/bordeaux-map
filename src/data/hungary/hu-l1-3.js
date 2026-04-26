/**
 * HU L1-3 主要白葡萄品種：Furmint、Hárslevelű、Olaszrizling 與其他
 */

export const lessonContent = [
  {
    type: 'cover',
    title: '匈牙利主要白葡萄品種',
    subtitle: 'Furmint、Hárslevelű、Olaszrizling 與原生品種',
    icon: '🍇',
    background: 'linear-gradient(135deg, #f0c040 0%, #c8902e 100%)'
  },
  {
    title: 'Furmint — 匈牙利白葡萄之王',
    highlights: [
      { id: 1, icon: '🍯', title: '托卡伊的靈魂品種', content: 'Tokaji Aszú 甜酒的主要品種，佔托卡伊葡萄種植面積約 65-70%' },
      { id: 2, icon: '🍋', title: '高酸度的骨架', content: '天然高酸度（pH 2.9-3.1）賦予甜酒完美的酸甜平衡，也讓干型酒極具陳年潛力' },
      { id: 3, icon: '🌿', title: '薄皮易感貴腐', content: '葡萄皮薄，易被貴腐菌穿透，是形成 Aszú 果漿的完美條件' },
      { id: 4, icon: '🔄', title: '干型革命', content: '21 世紀以來，干型 Furmint 成為匈牙利出口最重要的白酒，展現礦物感和複雜度' }
    ],
    content: `<div class="grape-detail">
      <p class="lead-text">Furmint 是匈牙利最具代表性的白葡萄品種，也是匈牙利葡萄酒走向世界的最大資產。它的名字可能來自法語「froment」（小麥），反映其果實的金黃色澤。</p>
      <div class="grape-profile">
        <h4>🍇 Furmint 品種特性</h4>
        <div class="profile-grid">
          <div class="profile-item">
            <span class="label">成熟期</span>
            <span class="value">晚熟（10 月中下旬）</span>
          </div>
          <div class="profile-item">
            <span class="label">果皮厚度</span>
            <span class="value">薄，易感貴腐菌</span>
          </div>
          <div class="profile-item">
            <span class="label">天然酸度</span>
            <span class="value">極高（匈牙利品種中最高）</span>
          </div>
          <div class="profile-item">
            <span class="label">主要產區</span>
            <span class="value">Tokaj, Somló, Badacsony, Eger</span>
          </div>
        </div>
        <h4>🍷 風味特徵</h4>
        <div class="flavor-notes">
          <div class="note young">
            <strong>年輕干型：</strong>青蘋果、萊姆、白花、礦石感、高酸
          </div>
          <div class="note aged">
            <strong>陳年干型：</strong>蜂蜜、杏桃、烤榛子、燧石礦物、奶油
          </div>
          <div class="note sweet">
            <strong>Aszú 甜酒：</strong>杏桃醬、橙皮蜜餞、蜂蠟、薑、肉桂
          </div>
        </div>
      </div>
    </div>`
  },
  {
    title: 'Hárslevelű — 椴樹葉品種',
    highlights: [
      { id: 1, icon: '🌸', title: '名字的含義', content: '「Hárslevelű」在匈牙利語意為「椴樹葉」，反映其葉形與椴花的香氣特徵' },
      { id: 2, icon: '🍊', title: '豐郁香氣', content: '比 Furmint 更芬芳，帶有椴花、杏桃、荔枝和蜂蜜的香氣' },
      { id: 3, icon: '🤝', title: '完美搭檔', content: '與 Furmint 調配時，Hárslevelű 提供芳香度，Furmint 提供結構，形成完整的 Aszú 風格' },
      { id: 4, icon: '🏷️', title: '厚皮特性', content: '比 Furmint 果皮更厚，在多雨年份較不易腐爛，是釀酒師在壞年份的「保險品種」' }
    ],
    content: `<div class="grape-detail">
      <p>Hárslevelű 是托卡伊第二重要的葡萄品種，在匈牙利各地廣泛種植，但最出色的表現仍在托卡伊。它與 Furmint 的搭配被視為「天作之合」：Furmint 提供骨架，Hárslevelű 提供靈魂。</p>
      <div class="grape-comparison">
        <h4>🔄 Furmint vs. Hárslevelű 對比</h4>
        <div class="comparison-grid">
          <div class="compare-col furmint">
            <h5>Furmint</h5>
            <ul>
              <li>高酸度，強烈的結構感</li>
              <li>薄皮，易受貴腐菌影響</li>
              <li>干型酒陳年潛力極長</li>
              <li>礦物感、柑橘類、蘋果</li>
            </ul>
          </div>
          <div class="compare-col harslevelu">
            <h5>Hárslevelű</h5>
            <ul>
              <li>較低酸度，更豐郁圓潤</li>
              <li>厚皮，濕年份表現更穩</li>
              <li>提供芬芳香氣層次</li>
              <li>椴花、杏桃、蜂蜜香</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="note-box">
        <p>🎯 在判讀 Tokaji Aszú 時，如果酒款帶有特別豐郁的花香（椴花、金合歡）和蜂蜜感，通常反映了較高比例的 Hárslevelű 在調配中。</p>
      </div>
    </div>`
  },
  {
    title: 'Olaszrizling — 匈牙利種植面積最廣的白葡萄',
    highlights: [
      { id: 1, icon: '📊', title: '種植面積最廣', content: '全匈牙利種植面積最大的白葡萄品種，幾乎遍布所有 22 個產區' },
      { id: 2, icon: '🇦🇹', title: '中歐流行品種', content: '即奧地利的 Welschriesling，在克羅埃西亞、斯洛文尼亞也廣泛種植（非萊茵雷司令 Rhine Riesling）' },
      { id: 3, icon: '🌊', title: '巴拉頓湖的代言者', content: '在巴拉頓湖北岸產出最佳表現，火山岩土壤賦予其獨特礦物感和良好酸度' },
      { id: 4, icon: '🍎', title: '清爽易飲風格', content: '一般風格清爽，蘋果、梨、花香，酸度適中，是匈牙利日常餐酒的主力' }
    ],
    content: `<div class="grape-detail">
      <p>Olaszrizling（威爾士雷司令 / Welschriesling）雖不及 Furmint 的名望，卻是匈牙利葡萄酒日常的基礎。在優良的風土條件下（如巴拉頓湖火山土），它能展現出令人驚豔的礦物複雜度。</p>
      <div class="info-cards">
        <div class="info-card">
          <h5>📍 重要產區</h5>
          <ul>
            <li><strong>Badacsony</strong>：玄武岩土壤，礦物感最強</li>
            <li><strong>Balatonfüred-Csopak</strong>：石灰岩，清爽高酸</li>
            <li><strong>Somló</strong>：火山玄武岩，礦物感獨特</li>
            <li><strong>Eger / Mátra</strong>：中等風格，日常飲用</li>
          </ul>
        </div>
        <div class="info-card">
          <h5>🎭 兩種風格</h5>
          <div class="style-contrast">
            <div>
              <strong>一般平原品質：</strong>淡雅、清爽、蘋果/梨、早飲
            </div>
            <div>
              <strong>巴拉頓火山品質：</strong>礦石感、高酸、豐富層次、可陳年
            </div>
          </div>
        </div>
      </div>
    </div>`
  },
  {
    title: '其他重要白葡萄品種',
    highlights: [
      { id: 1, icon: '🦁', title: 'Juhfark（羊尾巴）', content: '幾乎只在 Somló 火山產區種植，以高酸、強烈礦物感著稱，傳統上是新婚之夜的酒款' },
      { id: 2, icon: '🐦', title: 'Szürkebarát（灰修士）', content: '即 Pinot Gris，在巴拉頓湖北岸的火山土壤上產出匈牙利最好的 Pinot Gris 表現' },
      { id: 3, icon: '🍑', title: 'Irsai Olivér', content: '帶強烈麝香葡萄（Muscat）香氣，早熟，廣泛種植，是許多人的入門匈牙利白酒' },
      { id: 4, icon: '🌸', title: 'Cserszegi Fűszeres', content: '意為「香料感」，帶玫瑰水、荔枝和辛香料香氣，性價比極高的芳香品種' }
    ],
    content: `<div class="other-grapes">
      <p>除了三大主力品種外，匈牙利還保存了數十種本土原生白葡萄品種，其中一些只在特定產區或單一山丘種植，非常珍稀。</p>
      <div class="special-grapes">
        <div class="grape-card">
          <h5>🦁 Juhfark — Somló 的靈魂</h5>
          <p>「Juhfark」意為「羊尾巴」，形容葡萄串的細長形狀。幾乎只在 Somló 火山山丘種植，一公頃不到 400 瓶的極低產量，高酸、高礦物感、需要多年陳年才能開放，是匈牙利葡萄酒中最獨特的白酒之一。</p>
          <div class="grape-note">傳統說法：Somló 的 Juhfark 是「婚禮之夜的酒」，能「保證生兒子」——當然是民間傳說，但足見其在文化上的特殊地位。</div>
        </div>
        <div class="grape-card">
          <h5>🐦 Szürkebarát — 匈牙利的 Pinot Gris</h5>
          <p>「Szürkebarát」意為「灰修士」，即 Pinot Gris。在巴拉頓湖北岸的玄武岩火山土上表現最佳，風格豐郁帶有煙燻感和礦物質，是匈牙利版本中最受精品酒客歡迎的白葡萄之一。</p>
        </div>
      </div>
      <div class="summary-box">
        <h4>📋 白葡萄品種速查表</h4>
        <table class="grape-table">
          <tr><th>品種</th><th>產區重點</th><th>風格</th></tr>
          <tr><td>Furmint</td><td>Tokaj, Somló</td><td>高酸、礦物、陳年潛力強</td></tr>
          <tr><td>Hárslevelű</td><td>Tokaj</td><td>花香豐郁、圓潤、調配用</td></tr>
          <tr><td>Olaszrizling</td><td>Balaton, 全國</td><td>清爽、果香、易飲</td></tr>
          <tr><td>Juhfark</td><td>Somló</td><td>極高酸、礦物、稀少</td></tr>
          <tr><td>Szürkebarát</td><td>Badacsony</td><td>豐郁、煙燻、礦物感</td></tr>
        </table>
      </div>
    </div>`
  }
,
  {
    component: 'HungaryGrapeProfileSlide',
    title: '🍇 匈牙利原生葡萄品種互動詳解',
    description: '點選 Furmint / Hárslevelű / Kékfrankos / Kadarka，查看產區、風格、香氣、餐搭與知識檔案'
  }
,
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 知識檢測',
        isFinalExam: false,
        passScore: 60,
        questions: [
        {
          type: 'single',
          text: '為什麼 Furmint 特別適合釀造 Tokaji Aszú 貴腐甜酒？',
          options: ['A. 因為 Furmint 的糖分含量天然極高，不需要貴腐菌輔助', 'B. Furmint 的薄皮易被貴腐菌穿透，且高天然酸度與甜度形成完美平衡', 'C. Furmint 成熟非常早，可以在貴腐菌生長前就採收', 'D. Furmint 的果皮顏色特殊，能讓貴腐菌更容易識別'],
          correct: 1,
          explanation: 'Furmint 的兩大特性使其成為 Aszú 釀造的理想品種：①薄皮讓貴腐菌能輕易穿透，形成貴腐果漿（Aszú Berry）；②天然高酸度在糖分極高的情況下仍能保持清新平衡，避免甜酒變得膩口。這兩點缺一不可。'
        },
        {
          type: 'single',
          text: '在托卡伊（Tokaj）的 Aszú 調配中，Hárslevelű 的主要貢獻是什麼？',
          options: ['A. 提供高酸度和強烈的礦物感', 'B. 提供芬芳的花香和豐郁的圓潤感，與 Furmint 的骨架互補', 'C. 提高葡萄酒的深色色素', 'D. 降低釀酒成本，因為它比 Furmint 產量更高'],
          correct: 1,
          explanation: 'Hárslevelű 在 Tokaji Aszú 的調配中扮演「芬芳提升者」的角色：它的低酸度柔化了 Furmint 的尖銳感，豐郁的椴花和杏桃香氣增加了複雜度。這種互補調配是托卡伊傳統風格的精髓——結構（Furmint）+ 香氣（Hárslevelű）= 完整的甜酒體驗。'
        },
        {
          type: 'single',
          text: 'Olaszrizling 和 Rhine Riesling（萊茵雷司令）是同一品種嗎？',
          options: ['A. 是，只是匈牙利和德國的不同叫法', 'B. 否，Olaszrizling（Welschriesling）和 Rhine Riesling 是完全不同的兩個品種', 'C. 部分相同，是 Rhine Riesling 的一個突變克隆', 'D. 是相同品種，但在不同土壤上展現不同特性'],
          correct: 1,
          explanation: 'Olaszrizling（即奧地利的 Welschriesling，字面意思是「外國/義大利雷司令」）和 Rhine Riesling（萊茵雷司令，德國最著名的白葡萄）是完全不同的品種，DNA 分析已確認無親緣關係。Olaszrizling 風格更圓潤易飲，酸度較低；Rhine Riesling 以極高酸度、礦物感和超長陳年潛力著稱。這個名字上的混淆常造成消費者誤解。'
        },
        {
          type: 'single',
          text: 'Juhfark 白葡萄在匈牙利最大的特色是什麼？',
          options: ['A. 全國種植面積最廣，性價比最高', 'B. 幾乎只在 Somló 火山山丘種植，以極高酸度和礦物感著稱，傳統上被視為婚禮紀念酒', 'C. 是托卡伊 Aszú 的第三主要品種', 'D. 帶有強烈的麝香葡萄（Muscat）香氣'],
          correct: 1,
          explanation: 'Juhfark 是匈牙利最獨特也最稀少的原生白葡萄之一，幾乎只在 Somló 火山山丘種植。其極高酸度、強烈礦物感和需要多年陳年的特性，使其成為收藏家趨之若鶩的珍品。傳統上稱之為「婚禮之夜的酒」，雖然是民間傳說，卻反映了匈牙利文化對此品種的特殊情感。'
        }
        ]
      }
    }
  }
]
