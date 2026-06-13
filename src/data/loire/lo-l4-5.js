/**
 * LO-L4-5 盲飲診斷——土質差異辨識
 * AOCs: Sancerre（3 土壤）、Chinon（3 土壤）、Muscadet（Sèvre vs Maine vs Cru Communaux）
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          盲品（Blind Tasting）是葡萄酒教育的最高殿堂——在不知道標籤的情況下，僅憑外觀、香氣和口感，判斷出葡萄酒的品種、產區、土壤甚至年份。羅亞爾河谷是練習「土壤辨識」最理想的課室：同一個 Sancerre 村，三種土壤（燧石、Kimmeridgian 白堊、礫石）釀出風格迥異的 Sauvignon Blanc；同一個 Chinon 產區，凝灰岩坡地和礫石平地的 Cabernet Franc 可以差距 15 年的陳年潛力。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🔍 建立系統性盲品方法論</h4>
            <p>掌握「外觀→香氣→口感→結論」的 WSET 風格評估框架，以及如何在每個步驟縮小答案範圍</p>
          </div>
          <div class="point-item">
            <h4>🪨 精通羅亞爾土壤的盲品辨識指紋</h4>
            <p>學習 Sancerre 三土壤（燧石/Kimmeridgian/礫石）和 Chinon 三土壤（礫石/凝灰岩坡/黏土台地）的味覺差異</p>
          </div>
          <div class="point-item">
            <h4>🎯 培養「排除法」盲品思維</h4>
            <p>學習從「這不可能是 X，因為……」的否定式思維快速定位答案</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '盲品方法論：WSET 系統評估框架',
    highlights: [
      { id: 1, icon: '👁️', title: '外觀（Appearance）', content: '色深（淡/中/深）、色調（白酒：黃綠/金黃/琥珀；紅酒：紫紅/寶石紅/磚紅/橙棕）、清澈度——外觀能給出陳年線索和品種線索（深色≈成熟果實，琥珀邊緣≈老酒）' },
      { id: 2, icon: '👃', title: '香氣（Nose）', content: '濃郁度（淡/中/馥郁）、一次/二次/三次香氣分類、具體香氣描述——香氣是最強的鑑別工具，燧石的「打火石」感、Chenin 的「蜂蠟」、Cabernet Franc 的「紫羅蘭+青椒」都是關鍵指紋' },
      { id: 3, icon: '👅', title: '口感（Palate）', content: '甜度（干/半干/甜）、酸度（低/中/高）、單寧（白酒無；紅酒：低/中/高）、酒體（輕/中/飽滿）、餘韻（短/中/長）——口感確認香氣給出的假設，並提供更多年份和土壤線索' }
    ],
    content: `
      <div class="blind-tasting-framework">
        <p>盲品不是「猜」——它是一個系統性的邏輯縮小過程。每個感官觀察都是一條線索，不斷縮小可能性的範圍：</p>
        <div class="framework-steps">
          <div class="step">
            <h4>第 1 步：建立框架</h4>
            <p>先問自己：「這是白酒還是紅酒？干型還是甜型？輕盈還是飽滿？」——這三個問題立即排除 60% 的可能性</p>
          </div>
          <div class="step">
            <h4>第 2 步：香氣辨識</h4>
            <p>集中注意力在「最突出的那個香氣」：燧石礦物感→Sancerre 或 Pouilly-Fumé；紫羅蘭+青椒→Cabernet Franc；蜂蜜+蜂蠟→陳年 Chenin Blanc；黑胡椒辛香→Pineau d'Aunis 或 Syrah</p>
          </div>
          <div class="step">
            <h4>第 3 步：口感確認</h4>
            <p>香氣假設後，口感確認：「Sancerre 應有的燧石礦物口感是否存在？酸度是否足夠高？」若確認，下最終結論；若口感矛盾，回到第 2 步重新評估</p>
          </div>
          <div class="step">
            <h4>第 4 步：排除法</h4>
            <p>對於難以確認的酒，用「這不可能是…因為」來快速排除：「高酒精（14%+）不可能是 Muscadet（通常 11–12.5%）」；「有明顯單寧不可能是 Sancerre 白酒」</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Sancerre 三種土壤的盲品指紋',
    content: `
      <div class="sancerre-soils-tasting">
        <p>Sancerre 有三種主要土壤，每種都釀出「Sauvignon Blanc 的不同語言」：</p>
        <div class="soil-tasting-grid">
          <div class="soil-card">
            <h4>🔥 燧石（Silex）</h4>
            <p><strong>分布：</strong>Bué 村和 Ménétréol 村周邊</p>
            <p><strong>外觀：</strong>淺金黃色，帶綠色光澤，顏色偏淺</p>
            <p><strong>香氣指紋：</strong>
              <ul>
                <li>打火石、燧石、火藥——這種「礦物煙燻」感是燧石土壤最獨特的標誌</li>
                <li>青檸皮、百香果（熱年份）、白胡椒</li>
                <li>幾乎沒有草本（蘆筍、草地）個性</li>
              </ul>
            </p>
            <p><strong>口感：</strong>最高酸度，線條緊緻，礦物感「刺穿」舌頭，餘韻長且礦物</p>
            <p><strong>記憶錨：</strong>「點燃打火機的瞬間，那個煙燻礦物氣味」</p>
          </div>
          <div class="soil-card">
            <h4>🪨 Terres Blanches（Kimmeridgian 白堊）</h4>
            <p><strong>分布：</strong>Chavignol 村和 Sancerre 鎮周邊（最大面積土壤）</p>
            <p><strong>外觀：</strong>淡金黃色，非常純淨</p>
            <p><strong>香氣指紋：</strong>
              <ul>
                <li>白堊、石灰岩的「乾淨礦物感」——比燧石更柔和，像白粉筆</li>
                <li>白葡萄柚、白桃、清新白花（金合歡）</li>
                <li>中等草本感（青草、薄荷），帶微量鹹感</li>
              </ul>
            </p>
            <p><strong>口感：</strong>高酸但比燧石更圓潤，白堊感帶來細膩的收斂性，是「最平衡、最易親近的 Sancerre」</p>
            <p><strong>記憶錨：</strong>「學校黑板旁邊白粉筆盒子的氣味」</p>
          </div>
          <div class="soil-card">
            <h4>🪨 Caillottes（石灰岩礫石）</h4>
            <p><strong>分布：</strong>Verdigny 村和平緩坡地</p>
            <p><strong>香氣指紋：</strong>
              <ul>
                <li>最多白花和花香，草本個性最明顯（接近 New Zealand SB 的草地風格）</li>
                <li>萊姆、新鮮葡萄柚、草地</li>
                <li>礦物感最弱（三種土壤中），最「直接易飲」</li>
              </ul>
            </p>
            <p><strong>口感：</strong>最輕盈，酸度清爽，適合年輕飲用，不需要等待</p>
            <p><strong>記憶錨：</strong>「夏天剛割過草坪後的清新氣味 + 萊姆汁」</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Chinon 三種土壤的盲品辨識',
    content: `
      <div class="chinon-soils-tasting">
        <p>Chinon 的三種土壤造就了三種完全不同風格的 Cabernet Franc：</p>
        <table>
          <thead>
            <tr><th>土壤</th><th>分布位置</th><th>香氣指紋</th><th>口感特徵</th><th>陳年潛力</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>礫石平地（Graviers）</strong></td>
              <td>Vienne 河岸低地</td>
              <td>新鮮草莓、覆盆子、紫羅蘭花香、微量青椒</td>
              <td>輕盈、低單寧、清爽高酸、即開即飲</td>
              <td>3–8 年</td>
            </tr>
            <tr>
              <td><strong>凝灰岩坡地（Coteau Tuffeau）</strong></td>
              <td>村莊北向坡</td>
              <td>乾玫瑰、石墨、紅莓果乾、礦物感</td>
              <td>中等酒體、礦物感強、需醒酒，單寧細密</td>
              <td>10–20 年</td>
            </tr>
            <tr>
              <td><strong>黏土石灰台地（Plateau Argilo-calcaire）</strong></td>
              <td>高台地</td>
              <td>黑果（黑莓、黑李）、皮革、胡椒、菸草</td>
              <td>最飽滿、最多單寧，年輕時最封閉</td>
              <td>15–25 年</td>
            </tr>
          </tbody>
        </table>
        <div class="blind-tip">
          <h4>🎯 盲品診斷問題清單</h4>
          <p>品到一瓶未知羅亞爾紅酒時，依序問自己：</p>
          <ol>
            <li>有青椒/紫羅蘭嗎？→ 可能是 Cabernet Franc（Chinon/Bourgueil/Saumur-Champigny）</li>
            <li>香氣是草莓新鮮感還是黑果乾燥感？→ 新鮮 = 礫石 Chinon；乾燥 = 凝灰岩或台地 Chinon</li>
            <li>單寧如何？輕盈？→ 礫石；緊實礦物？→ 凝灰岩；飽滿澀口？→ 台地</li>
            <li>有白胡椒辛香嗎？→ 可能是 Pineau d'Aunis（Coteaux-du-Loir）</li>
          </ol>
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
        question: '盲品一瓶羅亞爾白酒，聞到強烈的「打火石、燧石、火藥」礦物煙燻感，這最可能對應 Sancerre 的哪種土壤？',
        options: [
          'Terres Blanches（Kimmeridgian 白堊）——白粉筆礦物感',
          'Caillottes（石灰岩礫石）——最多白花和草地感',
          'Silex（燧石）——最獨特的打火石礦物煙燻感',
          'Argile（黏土）——最飽滿、最少礦物感'
        ],
        correctIndex: 2,
        explanation: 'Silex（燧石）土壤的 Sancerre 最獨特的香氣指紋就是「打火石、燧石、火藥」的礦物煙燻感——這種氣味來自燧石本身的二氧化矽（SiO₂）礦物特性轉化到葡萄酒中。Terres Blanches 是「白粉筆」礦物感，Caillottes 是「草地+萊姆」，兩者都沒有這種強烈的「煙燻」特質。'
      },
      {
        id: 'q2',
        question: '盲品一瓶 Chinon，單寧非常輕盈、香氣以新鮮草莓和覆盆子為主、適合年輕飲用，這最可能是哪種土壤的 Chinon？',
        options: [
          '黏土石灰台地（Plateau）——飽滿單寧，需要陳年 15–25 年',
          '凝灰岩坡地（Coteau Tuffeau）——礦物感強，中等單寧，10–20 年潛力',
          '礫石平地（Graviers）——輕盈、新鮮紅果、低單寧、即開即飲',
          '火山岩（Basalte）——礦物煙燻，黑果為主'
        ],
        correctIndex: 2,
        explanation: 'Chinon 礫石平地（Graviers）位於 Vienne 河岸低地，砂質礫石排水極佳，造就輕盈、清爽的 Cabernet Franc：新鮮草莓/覆盆子/紫羅蘭香氣、低單寧、高酸度，是三種土壤中最輕盈、最早可飲用（3–8 年）的風格。'
      }
    ]
  }
]
