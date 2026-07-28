/**
 * LO-L2-7 鋼桶 vs 木桶品麗珠品飲訓練
 * AOCs: Chinon、Bourgueil
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          同樣是 Chinon 的 Cabernet Franc，一瓶在不鏽鋼桶中完成釀造，另一瓶在古老的大型橡木桶中沉睡三年——打開後卻是完全不同的兩個世界。這堂課是羅亞爾河谷最重要的品飲訓練課之一：學會用你的鼻子和味蕾識別桶型對葡萄酒的影響，是進入侍酒師世界的必修功課。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🔬 理解桶型對葡萄酒化學的影響</h4>
            <p>不鏽鋼桶、舊橡木大桶、新橡木小桶各自如何改變香氣、單寧和口感結構</p>
          </div>
          <div class="point-item">
            <h4>👃 建立品飲識別指紋</h4>
            <p>學會在盲品中識別「鋼桶鮮果」vs「木桶複雜」vs「新桶香草」的香氣差異</p>
          </div>
          <div class="point-item">
            <h4>🏆 了解羅亞爾傳奇酒莊的釀造哲學</h4>
            <p>Clos Rougeard 和 Charles Joguet 各自的桶型選擇與哲學差異</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '三種桶型的科學原理',
    highlights: [
      { id: 1, icon: '🥶', title: '不鏽鋼桶（Cuve Inox）', content: '密封容器，無氧化，完全保留一級果香和品種特色，清脆酸度不受影響，是現代「純粹主義」釀造的首選' },
      { id: 2, icon: '🪵', title: '舊橡木大桶（Foudre 或 Demi-Muid）', content: '微氧化，橡木本身的風味幾乎無影響（舊桶已釋出單寧和香草），但緩慢的氧化賦予葡萄酒圓潤感和複雜度，是羅亞爾傳統派的首選' },
      { id: 3, icon: '✨', title: '新橡木小桶（Barrique 225L 新桶）', content: '強烈的橡木香草、椰子、烤麵包、丁香香氣，單寧更多，釀造 Cabernet Franc 新桶款在羅亞爾相對罕見，幾乎只在實驗性或頂級酒款出現' }
    ],
    content: `
      <div class="barrel-science">
        <p>橡木桶對葡萄酒的影響不只是「加了木頭味」那麼簡單——它涉及複雜的化學和物理過程：</p>
        <div class="process-grid">
          <div class="process-item">
            <h4>💨 微氧化（Micro-oxygenation）</h4>
            <p>橡木桶的木質纖維允許微量氧氣進入，與葡萄酒發生緩慢反應。這個過程軟化單寧、穩定顏色，並讓香氣從「一級果香」演化為更複雜的「二級香氣」（皮革、菸草、乾花）。舊桶和新桶的微氧化量類似，但香氣輸入完全不同。</p>
          </div>
          <div class="process-item">
            <h4>🔥 烘烤程度（Toast Level）</h4>
            <p>橡木桶在製造時會燒烤內壁，輕烘（Light Toast）保留更多橡木單寧；重烘（Heavy Toast）釋放更多香草醛（vanillin）和丁香醛（eugenol）。選擇何種烘烤程度，直接影響酒的風味。</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '兩種哲學的代表：Clos Rougeard vs Charles Joguet',
    content: `
      <div class="philosophy-comparison">
        <div class="producer-card traditional">
          <h3>🏰 Clos Rougeard（Saumur-Champigny）</h3>
          <h4>哲學：傳統大桶長期陳年</h4>
          <p><strong>代表人物：</strong>Charly 和 Nady Foucault 兄弟（現由 Bouygues 集團接手，2017 年），創立自 1920s</p>
          <p><strong>桶型：</strong>古老的大型橡木桶（foudres 和 demi-muids，容量 300–600L），桶齡常超過 30–50 年</p>
          <p><strong>陳年時間：</strong>旗艦款 Le Bourg 和 Les Poyeux 在桶中陳年 18–36 個月</p>
          <p><strong>風格：</strong>香氣極度複雜（皮革、乾玫瑰、菸草、礦物），單寧細緻但密集，需要 10–20 年才展現全貌。被稱為「Saumur-Champigny 的 Romanée-Conti」。</p>
          <p><strong>價格：</strong>已在二手市場出現，頂款每瓶 €300–500+</p>
        </div>
        <div class="producer-card modern">
          <h3>⚗️ Charles Joguet（Chinon）</h3>
          <h4>哲學：单一地塊 + 不同桶型實驗</h4>
          <p><strong>代表人物：</strong>Charles Joguet（画家轉型釀酒師），現由 Alain Delaunay 管理</p>
          <p><strong>桶型：</strong>依地塊不同，彈性選用不鏽鋼桶、舊橡木大桶，偶爾實驗新桶</p>
          <p><strong>核心理念：</strong>讓土壤說話——礫石地塊用鋼桶保留鮮果，凝灰岩地塊用舊桶增加礦物複雜度</p>
          <p><strong>代表酒款：</strong>Clos de la Dioterie（凝灰岩，舊桶，複雜）、Varennes du Grand Clos（礫石，鋼桶，清新）</p>
        </div>
      </div>
    `
  },
  {
    title: '品飲訓練：如何識別桶型',
    content: `
      <div class="tasting-training">
        <p>在品飲 Chinon 或 Bourgueil 時，以下這些指標幫助你識別使用的桶型：</p>
        <div class="tasting-guide">
          <div class="guide-section">
            <h4>👃 香氣辨識</h4>
            <table>
              <thead><tr><th>桶型</th><th>香氣指標</th><th>強度</th></tr></thead>
              <tbody>
                <tr><td><strong>不鏽鋼桶</strong></td><td>新鮮草莓、覆盆子、紫羅蘭、青椒（若有）</td><td>純粹、直接、果香主導</td></tr>
                <tr><td><strong>舊橡木大桶</strong></td><td>乾花、菸草葉、皮革、礦物、煙燻</td><td>複雜、層次豐富、需時間展開</td></tr>
                <tr><td><strong>新橡木小桶</strong></td><td>香草、椰子、烤麵包、丁香</td><td>明顯、可能蓋過品種香氣</td></tr>
              </tbody>
            </table>
          </div>
          <div class="guide-section">
            <h4>👅 口感辨識</h4>
            <ul>
              <li><strong>不鏽鋼桶：</strong>單寧清爽、酸度清脆、收尾乾淨，「即開即飲」最佳</li>
              <li><strong>舊橡木大桶：</strong>單寧更圓潤，質地更柔滑，餘韻更長，「需要等待」才展現</li>
              <li><strong>新橡木小桶：</strong>單寧更多（橡木單寧疊加），口感更厚重，木味明顯</li>
            </ul>
          </div>
        </div>
        <p class="tasting-tip">💡 <strong>盲品訣竅：</strong>如果你聞到明顯的「香草 + 椰子」，通常是新橡木桶；如果是「新鮮漿果 + 花香主導」且口感清爽，通常是不鏽鋼；若是「複雜的皮革 + 礦物 + 乾花」且質地圓潤，通常是舊木桶。</p>
      </div>
    `
  },
  {
    type: 'quiz',
    title: '小測驗',
    questions: [
      {
        id: 'q1',
        question: '不鏽鋼桶（Cuve Inox）釀造的 Cabernet Franc 最主要的風格特徵是？',
        options: [
          '強烈的香草和椰子香，單寧豐厚',
          '保留最純粹的一級果香（草莓、紫羅蘭），酸度清脆，適合年輕飲用',
          '複雜的皮革和菸草，需要陳年 10 年',
          '氧化風格，帶堅果和蜂蠟香氣'
        ],
        correctIndex: 1,
        explanation: '不鏽鋼桶完全隔絕氧氣，保留葡萄酒最純粹的一級果香（品種特色和發酵香氣），酸度清脆不受影響，是「純粹主義」釀造的首選，非常適合強調品種個性的早飲款。'
      },
      {
        id: 'q2',
        question: 'Clos Rougeard 被稱為「Saumur-Champigny 的 Romanée-Conti」，主要因為？',
        options: [
          '它使用完全相同的 Pinot Noir 品種',
          '傳統大桶長期陳年、極低產量、頂款在二手市場達 €300–500+，複雜度達布根地頂級水準',
          '它位於 Saumur-Champigny 的 Grand Cru 地塊',
          '它是唯一允許使用 Pinot Noir 的羅亞爾 AOC'
        ],
        correctIndex: 1,
        explanation: 'Clos Rougeard（Foucault 兄弟）以傳統大橡木桶（foudres）長期陳年，極低產量，複雜度和陳年潛力達到世界頂級水準（頂款 Le Bourg 需陳年 10–20 年），在二手市場每瓶 €300–500+，是羅亞爾最傳奇的紅酒之一。'
      }
    ]
  }
]
