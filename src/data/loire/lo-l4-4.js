/**
 * LO-L4-4 垂直品飲——陳年潛力判讀
 * AOCs: Savennières、Chinon、Vouvray（三大陳年旗艦）
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          垂直品飲（Vertical Tasting）是品酒世界最高深的修煉之一——同一個酒莊、同一個地塊，連續品飲 5、10、20 年，觀察葡萄酒如何從緊閉的年輕體態，蛻變成複雜而深邃的陳年藝術品。羅亞爾的 Chenin Blanc 是全球陳年潛力最被低估的白酒品種，一瓶 Vouvray Moelleux 或 Savennières 可以在酒窖中安睡 30–50 年，緩緩講述 Layon 河谷或安茹片岩的風土故事。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🔬 理解葡萄酒陳年的化學原理</h4>
            <p>一次香氣→二次香氣→三次香氣的演化過程，單寧聚合與軟化的化學機制</p>
          </div>
          <div class="point-item">
            <h4>📈 掌握羅亞爾三大陳年曲線</h4>
            <p>Vouvray Moelleux、Savennières、Chinon Coteau 的具體「開飲窗口（drinking window）」</p>
          </div>
          <div class="point-item">
            <h4>👃 學習辨識陳年香氣（Tertiary Aromas）</h4>
            <p>從「蜂蠟、榛果、菸草」等三次香氣判斷葡萄酒的陳年深度，以及識別「過了頂峰（past peak）」的衰退跡象</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '葡萄酒陳年的化學：香氣的三次演化',
    highlights: [
      { id: 1, icon: '🌸', title: '一次香氣（Primary）', content: '來自葡萄果實本身的香氣：新鮮水果（草莓、白桃、萊姆）、花香（白花、紫羅蘭）、草本（青椒、薄荷）。年輕葡萄酒以一次香氣為主導，開瓶後立即可感受到。' },
      { id: 2, icon: '🍞', title: '二次香氣（Secondary）', content: '來自釀造過程（發酵、橡木桶陳年）的香氣：酵母（麵包屑、餅乾）、奶油（乳酸發酵）、香草（橡木桶）。在陳年 1–5 年的葡萄酒中開始明顯。' },
      { id: 3, icon: '🍂', title: '三次香氣（Tertiary）', content: '陳年中形成的複雜香氣：蜂蠟、蜂蜜（Chenin Blanc 陳年）、皮革、菸草、蘑菇（紅酒陳年）、太妃糖、杏仁、烤榛果。需要 5–30 年才充分發展，是垂直品飲最珍貴的發現。' }
    ],
    content: `
      <div class="aging-chemistry">
        <p>葡萄酒陳年的核心是「緩慢氧化」的化學反應。瓶中微量的氧氣（透過軟木塞）與葡萄酒中的酚類、酸類、酯類持續交互作用，引發一系列香氣和風味的蛻變：</p>
        <div class="chemistry-process">
          <h4>🔬 陳年中的主要化學反應</h4>
          <ul>
            <li><strong>酯化反應（Esterification）：</strong>酸（tartaric, malic acid）與酒精緩慢結合，形成新的酯類化合物，是果香從「新鮮水果」向「果乾、蜜餞」轉化的原因</li>
            <li><strong>氧化反應：</strong>多酚（花色素苷、單寧）被緩慢氧化，紅酒顏色從亮紫紅→磚紅→橙棕，同時帶來皮革、菸草、土壤的三次香氣</li>
            <li><strong>美拉德反應（Maillard-like）：</strong>糖與氨基酸在長期陳年中反應，形成太妃糖、烤榛果、咖啡的複雜香氣</li>
            <li><strong>酸度的角色：</strong>高酸度（如 Chenin Blanc 和 Riesling）是極長陳年的必要條件——酸度減慢氧化速度，防止葡萄酒「過快老化」，讓 30–50 年的陳年成為可能</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: 'Vouvray Moelleux 垂直品飲：30 年旅程',
    content: `
      <div class="vouvray-vertical">
        <p>以一瓶頂級 Vouvray Moelleux（如 Domaine Huet「Le Haut-Lieu」）為例，追蹤它在 30 年中的演化：</p>
        <div class="vertical-timeline">
          <div class="age-stage">
            <h4>🍑 1–3 年（嬰兒期）</h4>
            <p><strong>外觀：</strong>淺金黃色，帶綠色光澤</p>
            <p><strong>香氣：</strong>新鮮杏桃、白桃、蘋果花、金合歡蜂蜜，一次香氣主導，清新而純粹</p>
            <p><strong>口感：</strong>甜度清晰，酸度高，年輕的緊張感，餘韻帶礦物鹽感</p>
            <p><strong>建議：</strong>可飲用，但可能太過簡單，最好再等 5 年</p>
          </div>
          <div class="age-stage">
            <h4>🍊 5–10 年（青年期）</h4>
            <p><strong>外觀：</strong>金黃色，帶琥珀光澤</p>
            <p><strong>香氣：</strong>杏桃乾、烤梨、麥盧卡蜂蜜、奶油吐司，二次香氣開始融入</p>
            <p><strong>口感：</strong>甜酸平衡更和諧，質地開始變得絲滑，礦物感更整合</p>
            <p><strong>建議：</strong>第一個飲用窗口，適合與肥肝或藍紋起司搭配</p>
          </div>
          <div class="age-stage highlight">
            <h4>🥇 15–25 年（黃金期）</h4>
            <p><strong>外觀：</strong>深金黃色，琥珀邊緣</p>
            <p><strong>香氣：</strong>蜂蠟、薑、橙皮蜜餞、太妃糖、榛果、煙燻礦物——三次香氣全面發展</p>
            <p><strong>口感：</strong>甜度與酸度達到完美平衡，質地如液態絲綢，餘韻可達 60 秒以上</p>
            <p><strong>建議：</strong>最佳飲用窗口，搭配 Époisses 起司或鵝肝凍</p>
          </div>
          <div class="age-stage">
            <h4>🍂 30 年+（智慧期）</h4>
            <p><strong>外觀：</strong>琥珀棕色，邊緣橙褐色</p>
            <p><strong>香氣：</strong>核桃、烤杏仁、焦糖、茶葉、煙燻木材——類似 Vin Jaune 或 Sherry 的氧化複雜度</p>
            <p><strong>口感：</strong>酸度仍然存在但更柔和，甜度幾乎感覺不到（被複雜度掩蓋），餘韻極長但趨向安靜</p>
            <p><strong>建議：</strong>單獨品飲或搭配核桃和陳年起司</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Chinon & Savennières 垂直陳年對比',
    content: `
      <div class="red-white-vertical">
        <div class="comparison-columns">
          <div class="chinon-vertical">
            <h4>🍷 Chinon Coteau（凝灰岩坡地）垂直陳年</h4>
            <p>以 Charles Joguet「Clos de la Dioterie」為例：</p>
            <table>
              <thead><tr><th>年齡</th><th>顏色</th><th>香氣</th><th>口感狀態</th></tr></thead>
              <tbody>
                <tr><td>1–3 年</td><td>深寶石紅</td><td>新鮮紫羅蘭、覆盆子、青椒</td><td>單寧緊澀，不建議飲用</td></tr>
                <tr><td>5–8 年</td><td>寶石紅，磚紅邊緣開始出現</td><td>乾花、草莓醬、石墨</td><td>開始整合，可嘗試</td></tr>
                <tr><td>10–15 年</td><td>磚紅 + 石榴紅</td><td>皮革、乾玫瑰、菸草、鉛筆屑</td><td>最佳狀態，單寧柔順</td></tr>
                <tr><td>20 年+</td><td>橙棕色</td><td>肉桂、乾菇、焦油</td><td>仍然有力，但開始簡化</td></tr>
              </tbody>
            </table>
          </div>
          <div class="savennieres-vertical">
            <h4>🏔️ Savennières 干型白酒（Coulée de Serrant）</h4>
            <p>以 Nicolas Joly「Coulée de Serrant」為例：</p>
            <table>
              <thead><tr><th>年齡</th><th>香氣</th><th>口感狀態</th></tr></thead>
              <tbody>
                <tr><td>1–5 年</td><td>礦物、白花、萊姆皮——幾乎封閉</td><td>極度緊閉，不建議開瓶</td></tr>
                <tr><td>8–15 年</td><td>蜂蠟、金合歡、煙燻礦物</td><td>開始展開，礦物感驚人</td></tr>
                <tr><td>20–30 年</td><td>榛果、蘑菇、碘礦物、白松露</td><td>最佳狀態，一生難忘</td></tr>
              </tbody>
            </table>
            <p class="note">Nicolas Joly 曾說：「Coulée de Serrant 需要 12 年才開始說話，20 年才說出它想說的話。」</p>
          </div>
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
        question: '葡萄酒陳年中，「三次香氣（Tertiary Aromas）」最典型的代表是哪組？',
        options: [
          '新鮮草莓、紫羅蘭、青椒',
          '酵母麵包屑、奶油、香草（橡木）',
          '蜂蠟、皮革、菸草、蘑菇、太妃糖',
          '薄荷、萊姆、白花'
        ],
        correctIndex: 2,
        explanation: '三次香氣（Tertiary Aromas）是葡萄酒在瓶中長期陳年過程中緩慢形成的，包括蜂蠟、皮革、菸草、蘑菇、太妃糖、乾果、土壤等複雜香氣。第一組是一次香氣（品種本身），第二組是二次香氣（釀造過程），第四組也是一次香氣。'
      },
      {
        id: 'q2',
        question: 'Vouvray Moelleux 可以陳年極長的最根本原因是什麼？',
        options: [
          '因為它加入了大量防腐劑',
          'Chenin Blanc 天然的極高酸度（pH 3.0–3.4）減慢了氧化速度，防止過快老化，讓 20–50 年的陳年成為可能',
          '因為它使用了全新橡木桶陳年，橡木中的抗氧化物質保護了葡萄酒',
          '因為 Vouvray 的法規規定最低陳年年限'
        ],
        correctIndex: 1,
        explanation: 'Chenin Blanc（以及 Riesling）的極長陳年潛力根本原因在於極高的自然酸度（pH 3.0–3.4 甚至更低）。高酸度環境抑制氧化酶活性，減慢葡萄酒氧化的速度，讓它在瓶中保持新鮮和活力數十年。殘糖（甜酒款）也有額外的保護作用。'
      }
    ]
  }
]
