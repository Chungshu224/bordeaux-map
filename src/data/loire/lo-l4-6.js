/**
 * LO-L4-6 高端餐飲設計 + 亞洲料理配對 + Level 4 大師評量
 * AOCs: 全羅亞爾河谷 AOC 總覽（L1–L4 綜合）
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          歡迎來到羅亞爾河谷的最終章！在這堂大師課中，我們將把四個 Level 的知識融合於一個最實用的場景：餐桌。從巴黎頂級餐廳的侍酒哲學，到亞洲料理（台灣、日本、廣東）與羅亞爾葡萄酒的創新配對，再到最後一道嚴格的大師評量——這是你成為羅亞爾葡萄酒專家的最後一道門。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🍽️ 掌握高端餐飲配對的設計邏輯</h4>
            <p>從前菜到甜點，如何設計一套完整的羅亞爾「全程配對」菜單，讓葡萄酒和料理互相昇華</p>
          </div>
          <div class="point-item">
            <h4>🥢 建立亞洲料理 × 羅亞爾配對知識庫</h4>
            <p>台灣小吃、廣東料理、日本割烹——東方飲食文化與西方風土概念的美味碰撞</p>
          </div>
          <div class="point-item">
            <h4>🎓 通過 Level 4 大師評量</h4>
            <p>七道涵蓋全部四個 Level 的綜合考題，確認你已達到羅亞爾葡萄酒大師（Loire Wine Master）的知識水準</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '法式高端餐飲配對哲學',
    highlights: [
      { id: 1, icon: '⬆️', title: '漸進原則（Progression）', content: '從輕盈到飽滿、從干型到甜型、從年輕到陳年——整個晚餐的葡萄酒應如一個故事，逐步遞進，不能讓後面的酒「強過」前面的，否則前面的酒顯得單薄' },
      { id: 2, icon: '🔄', title: '互補 vs 對比原則', content: '互補配對（如 Muscadet 的海洋礦物感 × 生蠔的海水鹹鮮）——用相似的風味元素強化和諧；對比配對（如 Vouvray Moelleux 的蜂蜜甜感 × Époisses 起司的強烈氣味）——用反差創造驚喜' },
      { id: 3, icon: '🌍', title: '地域配對（Regional Pairing）', content: '「喝當地酒，吃當地菜」是法式配對哲學的基礎——Sancerre × Crottin de Chavignol（同一個 Chavignol 村），Muscadet × 盧瓦爾河口生蠔，Chinon × 都漢 Rillettes' }
    ],
    content: `
      <div class="fine-dining-philosophy">
        <p>頂級餐廳的侍酒師在設計「配對菜單（Menu Accord）」時，不是簡單地「白酒配魚、紅酒配肉」，而是從風土、化學和敘事三個維度來考量：</p>
        <div class="loire-tasting-menu">
          <h4>🍽️ 羅亞爾河全程配對菜單示範</h4>
          <table>
            <thead><tr><th>課程</th><th>菜色</th><th>羅亞爾葡萄酒</th><th>配對邏輯</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>迎賓香檳</strong></td>
                <td>Gougères（起司泡芙）</td>
                <td>Crémant-de-Loire Brut</td>
                <td>氣泡去油膩，以羅亞爾取代香檳，驚喜登場</td>
              </tr>
              <tr>
                <td><strong>前菜</strong></td>
                <td>布列塔尼生蠔 + 海膽</td>
                <td>Muscadet Sèvre et Maine sur Lie（15 年 Cru Communaux）</td>
                <td>海洋礦物共鳴，酵母陳年的麵包感 × 海膽奶油感</td>
              </tr>
              <tr>
                <td><strong>魚料理</strong></td>
                <td>Loire 河鱸魚（Sandre）× 奶油白醬</td>
                <td>Savennières Sec（Nicolas Joly，8 年）</td>
                <td>干型 Chenin Blanc 的礦物感和酸度切割奶油白醬，同一條河的魚和酒</td>
              </tr>
              <tr>
                <td><strong>肉料理</strong></td>
                <td>都漢烤羔羊（Gigot d'Agneau）</td>
                <td>Chinon Coteau（Charles Joguet，12 年）</td>
                <td>陳年 Cabernet Franc 的皮革和菸草 × 烤羊的焦香，都漢地域共鳴</td>
              </tr>
              <tr>
                <td><strong>起司</strong></td>
                <td>Crottin de Chavignol（成熟款）</td>
                <td>Sancerre Blanc（燧石土，5 年）</td>
                <td>地域配對的教科書</td>
              </tr>
              <tr>
                <td><strong>甜點</strong></td>
                <td>杏桃塔 × 薑汁奶油</td>
                <td>Quarts-de-Chaume Grand Cru（10 年）</td>
                <td>蜂蜜薑感 × 杏桃的香氣共鳴，頂峰收尾</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    title: '亞洲料理 × 羅亞爾河創新配對',
    content: `
      <div class="asian-pairing">
        <p>羅亞爾葡萄酒的高酸度、低單寧和清爽礦物感，讓它與亞洲料理（特別是海鮮、清蒸、辛香類料理）有著驚人的契合度。以下是針對台灣、廣東和日本料理的具體配對建議：</p>
        <div class="asian-pairing-grid">
          <div class="region-pairing">
            <h4>🇹🇼 台灣料理配對</h4>
            <table>
              <thead><tr><th>台灣料理</th><th>羅亞爾葡萄酒</th><th>為何搭配</th></tr></thead>
              <tbody>
                <tr>
                  <td>九孔鮑（蒜蓉清蒸）</td>
                  <td>Muscadet Sèvre et Maine sur Lie</td>
                  <td>海洋礦物感與清蒸鮑魚的鮮甜相呼應，高酸度切割蒜蓉奶油</td>
                </tr>
                <tr>
                  <td>蚵仔煎（台式牡蠣煎餅）</td>
                  <td>Sancerre Blanc（Terres Blanches）</td>
                  <td>白堊礦物感強化牡蠣的海鮮風味，Sauvignon Blanc 的草本感中和蛋的油膩</td>
                </tr>
                <tr>
                  <td>白切雞（薑蔥醬）</td>
                  <td>Vouvray Sec 或 Savennières</td>
                  <td>干型 Chenin Blanc 的蘋果和礦物感不搶戲，薑蔥香氣呼應品種的草本個性</td>
                </tr>
                <tr>
                  <td>鳳梨酥（鳳梨冬瓜餡）</td>
                  <td>Vouvray Demi-Sec</td>
                  <td>微甜 Chenin Blanc 的蜂蜜感與鳳梨的熱帶果香形成迷人的甜蜜對話</td>
                </tr>
                <tr>
                  <td>東坡肉（紅燒豬五花）</td>
                  <td>Chinon Rouge（礫石款）</td>
                  <td>輕盈 Cabernet Franc 的酸度切割豬油，低單寧不與蛋白質衝突，清爽收尾</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="region-pairing">
            <h4>🇯🇵 日本割烹配對</h4>
            <table>
              <thead><tr><th>日本料理</th><th>羅亞爾葡萄酒</th><th>為何搭配</th></tr></thead>
              <tbody>
                <tr>
                  <td>生蠔（日本廣島牡蠣）</td>
                  <td>Muscadet Cru Communaux（陳年款）</td>
                  <td>與法國生蠔的搭配邏輯相同，酵母陳年的複雜度 × 廣島牡蠣的鮮甜奶油感</td>
                </tr>
                <tr>
                  <td>茶碗蒸（日式蒸蛋）</td>
                  <td>Sancerre Blanc（Caillottes，年輕款）</td>
                  <td>輕盈白花和草地感與茶碗蒸的細膩鮮味相互強化，不搶主角</td>
                </tr>
                <tr>
                  <td>鴨肉親子丼</td>
                  <td>Chinon Rouge 或 Saumur-Champigny</td>
                  <td>Cabernet Franc 的紫羅蘭 + 鴨肉風味是法日跨界的完美組合</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="region-pairing">
            <h4>🥢 廣東料理配對</h4>
            <table>
              <thead><tr><th>廣東料理</th><th>羅亞爾葡萄酒</th><th>為何搭配</th></tr></thead>
              <tbody>
                <tr>
                  <td>清蒸石斑（薑絲蒸魚）</td>
                  <td>Pouilly-Fumé 或 Sancerre Blanc</td>
                  <td>高酸Sauvignon Blanc的礦物感是清蒸淡水魚的完美伴侶，薑絲的辛香呼應Sauvignon的草本</td>
                </tr>
                <tr>
                  <td>蝦餃（廣式點心）</td>
                  <td>Crémant-de-Loire Brut</td>
                  <td>氣泡酒的清爽酸度和麵包感與彈牙蝦肉形成輕盈和諧</td>
                </tr>
                <tr>
                  <td>叉燒（廣式蜜汁叉燒）</td>
                  <td>Vouvray Demi-Sec 或 Cabernet-d'Anjou</td>
                  <td>叉燒的甜鹹焦香需要微甜的酒來呼應，Chenin Blanc 的蜂蜜感與叉燒糖漿形成美麗的甜甜對話</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `
  },
  {
    type: 'quiz',
    title: 'Level 4 大師評量',
    questions: [
      {
        id: 'q1',
        question: 'Muscadet AOC 中，「Cru Communaux」（如 Granite de Clisson、Orthogneiss de Gorges）代表什麼意義？',
        options: [
          '它們是 Muscadet 的甜型版本，殘糖高於 20 g/L',
          '特定地質地塊的頂級 Muscadet，法規要求最少 20 個月在死酵母（lies）上陳年，品質遠高於基礎 Muscadet sur Lie',
          '這是 Muscadet 的有機認證標誌，只有通過有機認證的酒莊才可使用',
          '「Communaux」指共用公共地下酒窖陳年的生產者聯盟'
        ],
        correctIndex: 1,
        explanation: 'Muscadet Cru Communaux（也稱 Muscadet Cru Communal）是 2011 年引入的頂級等級，代表特定地質地塊的最高品質 Muscadet：最少 20 個月（部分要求 24 個月）在死酵母上陳年（比基礎 sur Lie 的 6 個月更長），每個 Cru 以地質命名（Granite de Clisson, Orthogneiss de Gorges, Gneiss de Monnières-Saint-Fiacre 等），是 Muscadet 重建品質形象的核心策略。'
      },
      {
        id: 'q2',
        question: '下列關於 Savennières AOC 的陳述，哪一項是正確的？',
        options: [
          '它以 Sauvignon Blanc 為主要品種，位於 Sancerre 旁邊',
          '它以 100% Chenin Blanc 釀造干型白酒，在安茹西部片岩坡地上，是羅亞爾最需要耐心等待的干型白酒，通常需要 8–20 年才展現全貌',
          '它是羅亞爾唯一允許使用 Grenache 的 AOC',
          '它的年產量是 Muscadet 的三倍，是羅亞爾最大的白酒 AOC'
        ],
        correctIndex: 1,
        explanation: 'Savennières AOC 以 100% Chenin Blanc 釀造完全干型白酒（Sec），種植在安茹西部的片岩（schiste）和火山岩坡地上。Nicolas Joly 的 Coulée de Serrant（Biodynamie 農法）是最著名代表，通常需要 8–20 年才展現全部複雜度，是法國最偉大的干型白酒之一。'
      },
      {
        id: 'q3',
        question: 'Vouvray AOC 的「Trias」地質最主要的影響是什麼？（注：Trias = Tuffeau 和 Silex 的混合地質）',
        options: [
          '讓 Vouvray 的葡萄藤每年只能結一次果，產量極低',
          'Tuffeau（凝灰岩）的多孔隙結構保存水分、保持恆溫，讓 Vouvray 的 Chenin Blanc 在乾旱年份仍保持充足水分，在夏日炎熱中維持酸度',
          '讓 Vouvray 必須使用 100% 新橡木桶陳年',
          '讓 Vouvray 只能釀造甜型葡萄酒，禁止干型'
        ],
        correctIndex: 1,
        explanation: 'Vouvray 的 Tuffeau（凝灰岩）地質最重要的特性是其多孔隙結構：就像海綿一樣，在春雨時吸收大量水分，在夏季炎熱時緩慢釋放給葡萄根系。這種「天然灌溉」機制讓 Vouvray 在乾旱年份（如 2019、2022）仍能保持自然酸度，是 Vouvray 多甜度葡萄酒風格的地質基礎。'
      },
      {
        id: 'q4',
        question: '羅亞爾河谷三大 Cabernet Franc AOC（Chinon、Bourgueil、Saumur-Champigny）的主要風格差異來源是什麼？',
        options: [
          '它們使用了不同的 Cabernet Franc 克隆品系',
          '主要是土壤差異：Saumur-Champigny 的凝灰岩台地（最清爽）、Chinon 的三土壤（最多樣）、Bourgueil 的凝灰岩+礫石混合（最厚重）',
          '採收時間不同：Chinon 在 8 月，Bourgueil 在 9 月，Saumur-Champigny 在 10 月',
          '只有 Saumur-Champigny 允許 100% Cabernet Franc，其他兩個需要混入 Merlot'
        ],
        correctIndex: 1,
        explanation: '三個 AOC 都以 Cabernet Franc 為主，風格差異主要來自土壤：Saumur-Champigny 的凝灰岩台地賦予清爽礦物感（是三者中最「純淨」的）；Chinon 的三種土壤（礫石/凝灰岩坡/黏土台地）造就最多樣的風格；Bourgueil 的凝灰岩和礫石混合賦予更厚重的結構。這三個 AOC 都允許 100% Cabernet Franc（不需要 Merlot）。'
      },
      {
        id: 'q5',
        question: '下列哪個配對最能體現「地域配對（Terroir Pairing）」的概念？',
        options: [
          'Bordeaux 紅酒 × 台灣牛肉麵',
          'Sancerre 白酒 × Crottin de Chavignol 起司（兩者都來自同一個 Chavignol 村）',
          'Champagne × 義大利 Parmigiano Reggiano 起司',
          'Burgundy Pinot Noir × 美國德州烤肉'
        ],
        correctIndex: 1,
        explanation: '「地域配對」最完美的體現是 Sancerre 白酒 × Crottin de Chavignol：兩者都來自同一個 Chavignol 小村（人口不足 200 人）。山羊在 Sancerre 葡萄園旁邊的草場吃草，吸收相同的 Kimmeridgian 礦物質，讓起司和葡萄酒共享了深層的風土個性——這是地域共鳴最直接的例子，也是法國美食哲學「吃喝本地」的教科書案例。'
      },
      {
        id: 'q6',
        question: 'Quarts-de-Chaume 在 2011 年獲得「Grand Cru」稱號的條件是什麼（最主要的評估標準）？',
        options: [
          '因為它是面積最大的羅亞爾甜酒 AOC',
          '面積僅約 35 公頃的微型產區，長達數十年的頂級品質記錄（可媲美 Sauternes Grand Cru），極嚴格的產量限制（最高 25 hl/ha），以及手工多次逐串採收的貴腐標準',
          '因為它是第一個使用 GPS 精準定位地塊的 AOC',
          '因為 Nicolas Joly 的 Biodynamie 農法為它帶來了 Grand Cru 認定'
        ],
        correctIndex: 1,
        explanation: 'Quarts-de-Chaume 的 Grand Cru 認定（2011 年正式法規承認）來自多個嚴格標準：極小面積（35 公頃，只有 4–5 個主要生產者）、數十年的頂級品質記錄（可媲美 Sauternes 最佳 Grand Cru）、最低殘糖要求（136 g/L + 天然貴腐）、手工多次逐串採收（Trie par Trie），以及最低陳年 18 個月在木桶中。這是羅亞爾河谷迄今唯一的 Grand Cru 等級 AOC。'
      },
      {
        id: 'q7',
        question: '完成這道「整合題」：為以下餐點選擇最合適的羅亞爾葡萄酒，並說明理由——「台式三杯雞（九層塔、薑、麻油、辣椒）」',
        options: [
          'Quarts-de-Chaume Grand Cru（貴腐甜酒）——甜度可以中和辣椒的刺激',
          'Chinon Rouge（礫石款，年輕）——Cabernet Franc 的清爽酸度和紫羅蘭香氣，低單寧不與醬汁的麻油和辣椒衝突，高酸切割雞肉的油脂',
          'Muscadet sur Lie——海洋礦物感與三杯雞的濃郁醬汁形成對比',
          'Crémant-de-Loire Blanc de Blancs——氣泡洗淨辣椒刺激'
        ],
        correctIndex: 1,
        explanation: '三杯雞的配對邏輯：(1) 辣椒 + 九層塔的辛香需要「不搶主角」的葡萄酒，Cabernet Franc 的低單寧（比 Bordeaux 柔和）不會與辣椒產生惱人的苦澀疊加；(2) 麻油的豐富油脂需要足夠的酸度切割；(3) Chinon 礫石款的清爽紫羅蘭和紅果感與九層塔的草本辛香形成「草本 × 草本」的和諧共鳴。甜酒（Quarts-de-Chaume）雖然可以中和辣度，但甜度與麻油的組合會偏膩；Muscadet 的海洋礦物感與三杯雞的陸地辛香風味差距過大。'
      }
    ]
  }
]
