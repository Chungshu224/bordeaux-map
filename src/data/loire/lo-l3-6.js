/**
 * LO-L3-6 伏弗雷——干到貴腐全光譜
 * AOC: Vouvray
 * 主題：Chenin Blanc 全甜度光譜、Tuffeau 凝灰岩、靜態+氣泡雙軌
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          伏弗雷（Vouvray）位於 Touraine 心臟地帶，跨越 8 個村莊、約 2,200 公頃葡萄園，是<strong>世界上少數能在同一 AOC 內生產從骨感乾型到貴腐甜酒、再到傳統法氣泡酒的產區</strong>。它的多樣性來自一個品種——<strong>Chenin Blanc（白詩南）</strong>，以及 Tuffeau 凝灰岩這個能呼吸的母岩。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>📐 四級甜度系統</h4>
            <p>完整掌握 Sec / Demi-Sec / Moelleux / Liquoreux 的殘糖標準與品評特徵</p>
          </div>
          <div class="point-item">
            <h4>🪨 Tuffeau 凝灰岩風土</h4>
            <p>理解這種多孔白堊質母岩如何為 Chenin Blanc 帶來礦物深度與陳年潛力</p>
          </div>
          <div class="point-item">
            <h4>🍇 三種甜酒釀造工藝</h4>
            <p>區分貴腐（Botrytis）、樹上風乾（Passerillage）與晚收（Tries）的差異</p>
          </div>
          <div class="point-item">
            <h4>🥂 Vouvray Mousseux/Pétillant</h4>
            <p>認識 Vouvray 的傳統法氣泡酒產線——僅次於香檳的法國第二大瓶內二次發酵產區之一</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: 'Vouvray——白詩南的全光譜舞台',
    highlights: [
      { id: 1, icon: '🪨', title: 'Tuffeau 凝灰岩', content: '白堊紀晚期形成的多孔石灰質母岩，是 Loire 河中游典型風土' },
      { id: 2, icon: '🍇', title: '單一品種', content: '100% Chenin Blanc，禁止其他品種混釀' },
      { id: 3, icon: '🌈', title: '甜度光譜', content: '同一 AOC 可產 Sec / Demi-Sec / Moelleux / Liquoreux 四級，外加氣泡' }
    ],
    content: `
      <div class="vouvray-overview">
        <p class="lead-text">Vouvray 位於 Tours 城東邊，羅亞爾河北岸。AOC 涵蓋 8 個村莊：Vouvray、Vernou-sur-Brenne、Sainte-Radegonde、Rochecorbon、Chançay、Noizay、Reugny、Parçay-Meslay。葡萄園多數種植於河岸高坡上的 Tuffeau 母岩，地下亦有大量 19 世紀留下的酒窖坑道（Cave Troglodyte）。</p>
        <div class="vouvray-facts">
          <h4>📐 Vouvray 基本數據</h4>
          <ul>
            <li><strong>面積：</strong>約 2,200 公頃</li>
            <li><strong>品種：</strong>100% Chenin Blanc</li>
            <li><strong>土壤：</strong>Tuffeau 凝灰岩、Aubuis（黏土石灰）、Perruches（黏土燧石）</li>
            <li><strong>氣候：</strong>溫和大陸型，受羅亞爾河調節</li>
            <li><strong>年產：</strong>約 12 萬 hL，其中約 60% 為氣泡酒</li>
            <li><strong>氣泡標示：</strong>Vouvray Mousseux（傳統法）、Vouvray Pétillant（半氣泡，3.5–4 atm）</li>
          </ul>
        </div>
      </div>
    `,
    quiz: {
      question: 'Vouvray AOC 規定使用的品種是？',
      options: ['Sauvignon Blanc + Chenin Blanc', '100% Chenin Blanc', '100% Sauvignon Blanc', 'Chenin Blanc + Chardonnay'],
      correct: 1,
      explanation: 'Vouvray 是 Chenin Blanc 的單品種 AOC，禁止其他品種混釀。這個規定確保了所有 Vouvray 都展現 Chenin 對風土與年份條件的純粹反映，不同甜度級別與氣泡型態完全來自釀造選擇與年份條件。'
    }
  },

  {
    component: 'LoireSweetnessSpectrumSlide',
    title: 'Vouvray 四級甜度光譜',
    componentProps: {
      slide: {
        title: 'Vouvray 四級甜度光譜',
        description: '同一品種、同一風土，卻能展現從骨感乾白到貴腐甜酒的完整光譜——這是 Chenin Blanc 在 Vouvray 最迷人之處'
      }
    }
  },

  {
    title: 'Tuffeau 凝灰岩——能呼吸的母岩',
    highlights: [
      { id: 1, icon: '🌬️', title: '多孔吸濕', content: '孔隙率高達 45%，能吸收與釋放濕氣，調節葡萄根區水分' },
      { id: 2, icon: '🏰', title: '城堡建材', content: 'Loire 城堡（Chambord、Chenonceau 等）的雪白外牆即用 Tuffeau 切塊' },
      { id: 3, icon: '🍷', title: '地下酒窖', content: '19 世紀採石後的坑道成為天然酒窖，常年 12°C、85% 濕度' }
    ],
    content: `
      <div class="tuffeau-detail">
        <p class="lead-text">Tuffeau 是 Vouvray、Montlouis、Saumur、Chinon 等 Loire 中游產區共享的關鍵風土。它形成於白堊紀晚期（Turonian 期，約 9000 萬年前）的淺海沉積，主要由有孔蟲、海綿針骨與石英砂膠結而成，質地柔軟、雪白多孔。</p>
        <div class="tuffeau-grid">
          <div class="tuffeau-block">
            <h4>🌊 形成與構造</h4>
            <ul>
              <li>白堊紀淺海沉積物，富含碳酸鈣 50–60%</li>
              <li>孔隙率高達 45%，質地柔軟易切割</li>
              <li>分為 Tuffeau Blanc（白）與 Tuffeau Jaune（黃，含玻璃海綿針骨）</li>
            </ul>
          </div>
          <div class="tuffeau-block">
            <h4>🌱 對葡萄的影響</h4>
            <ul>
              <li><strong>水分調節：</strong>多孔結構保水但不積水，讓葡萄根能在乾旱年穩定吸水</li>
              <li><strong>礦物供給：</strong>富含碳酸鈣，賦予 Chenin 白堊礦物張力</li>
              <li><strong>緩和氣溫：</strong>白色反射陽光，緩和成熟期高溫</li>
            </ul>
          </div>
          <div class="tuffeau-block">
            <h4>🍷 對風味的影響</h4>
            <ul>
              <li>白堊礦物質地、濕石、蜂蠟、洋甘菊</li>
              <li>高酸結構（pH 通常 3.0–3.2）</li>
              <li>10+ 年陳年潛力，發展出蘋果蜜餞、烤榛果、鵝肝風味</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: 'Tuffeau 凝灰岩的孔隙率高達 45%，這對葡萄栽培有何主要影響？',
      options: [
        '葡萄根難以扎根',
        '能吸收與釋放水分，在乾旱年穩定供水給葡萄',
        '養分流失過快',
        '會讓葡萄發苦'
      ],
      correct: 1,
      explanation: 'Tuffeau 的高孔隙率（45%）使它如同天然海綿——下雨時吸水、乾旱時緩慢釋放給葡萄根區。這在 2003、2018、2022 等極端乾旱年份特別關鍵，使得 Vouvray 的 Chenin Blanc 即使在乾旱年仍能維持均衡的酸度與成熟度。同時這個特性也讓 Tuffeau 成為理想的酒窖材料。'
    }
  },

  {
    component: 'LoireSweetWineMethodSlide',
    title: '甜度從何而來？三種釀造工藝',
    componentProps: {
      slide: {
        title: '甜度從何而來？三種釀造工藝',
        description: 'Vouvray 不同甜度的背後，是三種完全不同的葡萄處理方式'
      }
    }
  },

  {
    title: 'Vouvray 氣泡酒——被遺忘的法國氣泡名產',
    highlights: [
      { id: 1, icon: '🥂', title: '傳統法製作', content: 'Vouvray Mousseux 與 Méthode Champenoise 規範相同（瓶內二次發酵）' },
      { id: 2, icon: '🫧', title: '兩種氣壓', content: 'Mousseux（5 atm，全氣泡）與 Pétillant（3.5 atm，半氣泡）並存' },
      { id: 3, icon: '📦', title: '產量驚人', content: 'Vouvray 60% 產量為氣泡酒，是法國僅次於香檳區與 Limoux 的瓶內二次發酵重鎮之一' }
    ],
    content: `
      <div class="vouvray-sparkling">
        <p class="lead-text">許多人不知道，Vouvray 的氣泡酒產量遠大於靜態酒——這要追溯到 19 世紀末，當白詩南的高酸特質配合鐵路運輸的便利，使 Vouvray 成為巴黎宴會桌上香檳的平價替代品。今日的 Vouvray Mousseux/Pétillant 仍延續此傳統，是 Chenin Blanc 氣泡酒的最高典範。</p>
        <div class="sparkling-grid">
          <div class="sparkling-block">
            <h4>🥂 Vouvray Mousseux（5 atm）</h4>
            <ul>
              <li>瓶內二次發酵（Méthode Traditionnelle）</li>
              <li>最少 9 個月酒泥陳釀（多數酒莊 12–24 月）</li>
              <li>風格：青蘋果、白花、烤麵包、白堊礦物</li>
              <li>常見：Brut（&lt; 12 g/L 殘糖）、Sec、Demi-Sec</li>
            </ul>
          </div>
          <div class="sparkling-block">
            <h4>🫧 Vouvray Pétillant（3.5 atm）</h4>
            <ul>
              <li>半氣泡風格（更接近 Frizzante）</li>
              <li>細緻泡沫、口感較柔和</li>
              <li>傳統佐餐酒選擇，搭配豬肉熟食、白醬料理</li>
            </ul>
          </div>
        </div>
        <div class="sparkling-producers">
          <h4>🌟 代表生產者</h4>
          <ul>
            <li><strong>Domaine Huet（Vouvray 之王）：</strong>Pétillant 系列尤其經典，Le Mont Pétillant 可陳放 20+ 年</li>
            <li><strong>François Pinon：</strong>有機自然酒風格，Brut Non Dosé 極為純淨</li>
            <li><strong>Vincent Carême：</strong>新世代代表，Ancestrale（Pét-Nat）回歸祖法</li>
            <li><strong>Domaine de la Taille aux Loups：</strong>Jacky Blot 跨足 Vouvray + Montlouis</li>
          </ul>
        </div>
      </div>
    `
  },

  {
    type: 'quiz',
    title: 'Level 3-6 知識檢測',
    questions: [
      {
        id: 'q1',
        question: 'Vouvray AOC 中 Demi-Sec 的殘糖範圍是？',
        options: ['0–4 g/L', '4–12 g/L', '12–45 g/L', '45 g/L 以上'],
        correctIndex: 2,
        explanation: 'Vouvray 的甜度分級：Sec（&lt; 4 g/L）、Sec-Tendre（4–8 g/L）、Demi-Sec（12–45 g/L）、Moelleux（45–80 g/L）、Liquoreux（&gt; 80 g/L）。Demi-Sec 是 Vouvray 最具代表性的風格，常被視為 Chenin Blanc 與 Tuffeau 風土最自然的呈現方式。'
      },
      {
        id: 'q2',
        question: 'Vouvray 約有多少比例的產量為氣泡酒？',
        options: ['約 20%', '約 40%', '約 60%', '幾乎沒有'],
        correctIndex: 2,
        explanation: 'Vouvray 約 60% 產量為氣泡酒（Mousseux + Pétillant），是法國僅次於香檳區的重要瓶內二次發酵產區。這個傳統可追溯至 19 世紀末，當鐵路將 Vouvray 高酸 Chenin 運往巴黎，作為香檳的平價替代品。'
      },
      {
        id: 'q3',
        question: 'Vouvray 的甜酒主要透過哪種方式累積糖分？（單選最常見）',
        options: ['加糖', '貴腐菌（Botrytis cinerea）感染', '冷凍葡萄', '濃縮葡萄汁'],
        correctIndex: 1,
        explanation: 'Vouvray 的 Moelleux 與 Liquoreux 主要靠 Botrytis cinerea（貴腐菌）感染。羅亞爾河與 Brenne 河谷在秋季產生晨霧（誘發貴腐）與午後乾燥陽光（防止灰黴爛果），是貴腐發展的理想條件。其次也使用 Passerillage（樹上風乾）與多次採摘（Tries）。AOC 嚴禁加糖（chaptalisation 不適用於甜酒等級）。'
      },
      {
        id: 'q4',
        question: 'Tuffeau 凝灰岩的形成年代與主要成分？',
        options: [
          '侏羅紀晚期，含 Exogyra 牡蠣化石',
          '白堊紀晚期，含碳酸鈣與海綿針骨',
          '第三紀火山岩',
          '前寒武紀片岩'
        ],
        correctIndex: 1,
        explanation: 'Tuffeau 形成於白堊紀晚期（Turonian 期，約 9000 萬年前），主要成分為碳酸鈣（50–60%）、玻璃海綿針骨與石英砂。它與侏羅紀晚期的 Kimmeridgian（Sancerre/Chablis 土壤）完全不同，這也解釋了為何 Loire 中游與中央羅亞爾的 Chenin/Sauvignon 風格差異如此明顯。'
      }
    ]
  }
]
