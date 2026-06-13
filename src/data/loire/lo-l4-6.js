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
    title: '小測驗',
    questions: [
      {
        id: 'q1',
        question: '高端餐飲配對的「漸進原則（Progression）」要求什麼？',
        options: [
          '所有葡萄酒都必須來自同一個 AOC，以保持風格一致',
          '從輕盈到飽滿、從干型到甜型、從年輕到陳年——整個晚餐的葡萄酒應如故事般遞進，不讓後面的酒顯得太弱',
          '每道菜必須搭配紅白各一款葡萄酒',
          '甜點酒必須在前菜之前上桌'
        ],
        correctIndex: 1,
        explanation: '漸進原則是高端餐飲配對的核心哲學：葡萄酒應從輕盈→飽滿、干型→甜型、年輕→陳年，如同故事一樣逐步遞進。若中途出現太飽滿或太複雜的酒，會讓之前的酒顯得單薄，打斷用餐的節奏感和敘事感。'
      },
      {
        id: 'q2',
        question: '台式三杯雞（九層塔、薑、麻油、辣椒）最合適的羅亞爾配對是哪一款？',
        options: [
          'Quarts-de-Chaume Grand Cru（甜酒）——甜度中和辣椒',
          'Chinon Rouge 礫石款（年輕）——低單寧不與辣椒衝突，清爽酸度切割麻油，草本香呼應九層塔',
          'Muscadet sur Lie——海洋礦物感形成清爽對比',
          'Vouvray Moelleux（微甜）——蜂蜜感中和辛香'
        ],
        correctIndex: 1,
        explanation: 'Chinon 礫石款 Cabernet Franc 是最佳選擇：(1) 低單寧不與辣椒/薑的辛香產生苦澀疊加；(2) 高酸度切割麻油的豐厚感；(3) 紫羅蘭和草本香氣與九層塔的草本辛香形成「草本共鳴」。甜酒和甜感反而會與麻油結合顯膩。'
      }
    ]
  }
]
