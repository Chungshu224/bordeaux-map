/**
 * LO-L2-5 都漢紅酒產區全景
 * AOCs: Touraine (紅/粉紅)、Touraine-Amboise (紅)、Touraine-Noble-Joué
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          都漢（Touraine）是羅亞爾河谷的心臟地帶，以城堡、美食和葡萄酒著稱。在 Chinon 和 Vouvray 的光環之外，都漢還有一群性格鮮明的紅酒和粉紅酒 AOC：從地區性的 Touraine Rouge，到城堡旁的 Touraine-Amboise，再到獨一無二的三種 Pinot 混釀——Touraine-Noble-Joué。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🗺️ 掌握都漢 AOC 層級架構</h4>
            <p>理解地區性 Touraine 和村莊級 Touraine-Amboise、Touraine-Noble-Joué 的品種與風格差異</p>
          </div>
          <div class="point-item">
            <h4>🎭 認識法國最特殊的粉紅酒 AOC 之一</h4>
            <p>Touraine-Noble-Joué 為何必須混用三種 Pinot，以及這款「灰色粉紅」的文化意義</p>
          </div>
          <div class="point-item">
            <h4>🍇 了解 Gamay 和 Côt（Malbec）在都漢的角色</h4>
            <p>兩個不同尋常的品種如何在都漢找到自己的定位</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Touraine Rouge — 都漢地區性紅酒的骨幹',
    highlights: [
      { id: 1, icon: '🍷', title: 'Touraine Rouge', content: '地區性 AOC，涵蓋整個都漢。Gamay（主）+ Cabernet Franc + Côt（Malbec）混釀，風格輕盈果香，適合年輕飲用' },
      { id: 2, icon: '🏰', title: 'Touraine-Amboise Rouge', content: '安博瓦茲城堡旁的村莊級 AOC，以 Gamay 和 Côt（Malbec）為主，可出產比地區性更有深度的款式' },
      { id: 3, icon: '🌹', title: 'Touraine Rosé', content: '地區性粉紅 AOC，以 Gamay 為主，輕盈清爽，是夏日日常粉紅的好選擇' }
    ],
    content: `
      <div class="touraine-rouge">
        <p><strong>Touraine Rouge</strong> 是都漢最重要的紅酒 AOC，涵蓋廣大的都漢地區（不包含 Chinon、Bourgueil 等村莊級產區）。</p>
        <div class="variety-roles">
          <div class="role-item">
            <h4>🍇 Gamay 的角色</h4>
            <p>從薄酒萊（Beaujolais）遷入的品種，在都漢石灰岩土壤上展現更緊緻的酸度。作為主要品種，賦予 Touraine Rouge 清新的紅果香氣和輕盈的飲用感。「Gamay-Touraine」是知名的地區性品牌。</p>
          </div>
          <div class="role-item">
            <h4>🍇 Côt（Malbec）的角色</h4>
            <p>在都漢稱為「Côt」的 Malbec，比阿根廷版本更精緻，帶有更多紫羅蘭花香和辛香料感，少量混入可增加顏色深度和香氣複雜度。</p>
          </div>
        </div>
        <p><strong>Touraine-Amboise</strong> 以安博瓦茲古城為中心，在凝灰岩和砂質土壤上，Gamay 和 Côt 混釀出比地區性更有個性的紅酒，部分酒款可陳年 3–5 年。</p>
      </div>
    `
  },
  {
    component: 'LoireRegionMapSlide',
    title: 'Touraine 紅酒產區地圖',
    componentProps: {
      slide: {
        title: 'Touraine 紅酒產區地圖',
        description: 'Touraine Rouge（地區 AOC）、Touraine-Amboise（安博瓦茲城堡旁）、Touraine-Noble-Joué（Tours 南郊）的地理位置',
        mapGroup: 'Touraine',
        highlightFiles: ['Touraine.geojson', 'Touraine-Amboise.geojson', 'Touraine-Noble-Joué.geojson'],
      }
    }
  },

  {
    title: 'Touraine-Noble-Joué — 法國最奇特的粉紅酒 AOC',
    content: `
      <div class="noble-joue-section">
        <p>在所有法國 AOC 中，<strong>Touraine-Noble-Joué</strong> 是最獨特的存在之一：它是法國極少數<strong>強制規定必須混用三種葡萄</strong>的 AOC，而且這三種葡萄都是 Pinot 家族。</p>
        <div class="noble-joue-rule">
          <h4>⚖️ 法定混釀規定</h4>
          <div class="blend-rule">
            <p>必須混合：<strong>Pinot Meunier + Pinot Gris + Pinot Noir</strong></p>
            <p>三種品種的比例各有規定，無法由任何單一品種主導。</p>
          </div>
        </div>
        <div class="noble-joue-style">
          <h4>🌹 「Gris」的顏色之謎</h4>
          <p>Noble-Joué 傳統上稱為 <strong>vin gris</strong>（灰酒）——因為 Pinot Gris 的灰玫瑰色果皮和 Pinot Meunier 的淺色，釀造後呈現介於粉紅與淡紅之間的銅棕灰色，是非常獨特的視覺效果。</p>
          <h4>🍷 風格特色</h4>
          <p>清爽、高酸度，帶有覆盆子、桃子、薑的清新香氣，收尾有細緻的辛香料感（來自 Pinot Meunier）。低酒精、干型，是法式午餐的絕佳搭配。</p>
          <h4>📜 歷史淵源</h4>
          <p>Noble-Joué 有超過 500 年的歷史，曾是法國王室在都漢的御用餐酒。20 世紀中葉幾近消失，1975 年由地方農業學校復興，今日仍是小量生產的歷史遺產。</p>
        </div>
      </div>
    `
  },
  {
    type: 'quiz',
    title: '小測驗',
    questions: [
      {
        id: 'q1',
        question: 'Touraine-Noble-Joué 的混釀規定為何如此特殊？',
        options: [
          '它是法國唯一只允許 Gamay 的 AOC',
          '它強制混用三種 Pinot 家族品種：Pinot Meunier + Pinot Gris + Pinot Noir',
          '它要求至少 50% 的 Cabernet Franc',
          '它是法國最古老的 AOC，建立於 15 世紀'
        ],
        correctIndex: 1,
        explanation: 'Touraine-Noble-Joué 是法國極少數強制混用三種品種的 AOC，這三種品種都屬於 Pinot 家族（Pinot Meunier、Pinot Gris、Pinot Noir），造就獨特的「灰色粉紅（vin gris）」風格，有 500 年以上歷史。'
      },
      {
        id: 'q2',
        question: 'Côt 這個名字在都漢代表哪個國際知名品種？',
        options: ['Merlot', 'Malbec', 'Petit Verdot', 'Carménère'],
        correctIndex: 1,
        explanation: 'Côt 是 Malbec 在羅亞爾河谷（尤其是都漢和安茹）的傳統稱呼，與阿根廷的 Malbec 是同一品種，但在都漢的涼爽氣候下，風格更精緻輕盈，帶有紫羅蘭和辛香料特色。'
      }
    ]
  }
]
