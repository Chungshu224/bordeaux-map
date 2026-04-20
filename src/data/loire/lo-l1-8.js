/**
 * LO-L1-8 品飲技巧與 Level 1 綜合評量
 * 專業品飲指南、餐酒搭配矩陣與 L1 綜合測驗
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          恭喜您完成了羅亞爾河谷葡萄酒 Level 1 的全部 7 課！這最後一課將整合所有知識，教您如何系統性地品飲羅亞爾葡萄酒，掌握餐酒搭配的黃金法則，並通過 Level 1 綜合評量確認您的學習成果。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>👁️ 系統性品飲方法</h4>
            <p>用專業的視覺、嗅覺、味覺評估框架品評羅亞爾葡萄酒</p>
          </div>
          <div class="point-item">
            <h4>🍽️ 建立餐酒搭配直覺</h4>
            <p>掌握羅亞爾各類型酒款的餐食搭配黃金法則</p>
          </div>
          <div class="point-item">
            <h4>📊 Level 1 知識系統化</h4>
            <p>將 8 課所學整合成可應用的系統知識框架</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: '白酒品飲指南',
    highlights: [
      { id: 1, icon: '👁️', title: '顏色是第一線索', content: '從淺黃綠（Muscadet）到深金黃（老年份甜 Chenin），顏色能告訴你品種、陳年時間和甜度' },
      { id: 2, icon: '👃', title: '礦石感是羅亞爾白酒的靈魂', content: '無論是 Muscadet 的海洋鹹礦、Sancerre 的燧石煙燻，還是 Savennières 的片岩礦感，礦石是識別羅亞爾白酒的關鍵標誌' }
    ],
    content: `<div class="white-tasting-guide">
      <p class="lead-text">品飲羅亞爾白酒需要循序漸進的系統方法。以下是一個完整的品飲框架，適用於從 Muscadet 到 Vouvray 的所有主要白酒類型。</p>
      <div class="tasting-steps">
        <div class="tasting-step">
          <h4>1️⃣ 視覺評估</h4>
          <ul>
            <li><strong>色調：</strong>
              <ul>
                <li>淺黃綠色 → 年輕 Muscadet 或 Sauvignon Blanc（Sancerre、Pouilly-Fumé）</li>
                <li>淡黃金色 → Vouvray sec 或 2-5 年 Chenin</li>
                <li>深金黃色 → 老年份干型 Chenin（Savennières）或成熟甜型</li>
                <li>琥珀金色 → 極成熟甜酒（20+ 年份 Quarts de Chaume）</li>
              </ul>
            </li>
            <li><strong>清澈度：</strong>自然酒通常有輕微濁度（未過濾），不代表有缺陷</li>
            <li><strong>黏度：</strong>慢流掛杯 → 甜度高或酒精高</li>
          </ul>
        </div>
        <div class="tasting-step">
          <h4>2️⃣ 嗅覺評估</h4>
          <ul>
            <li><strong>第一嗅（靜止）：</strong>不搖杯，捕捉最揮發的香氣（花香、輕盈果香）</li>
            <li><strong>第二嗅（搖杯後）：</strong>搖杯讓酒與氧氣接觸，開放更多香氣層次</li>
            <li><strong>品種線索：</strong>
              <ul>
                <li>草本/醋栗葉 → Sauvignon Blanc</li>
                <li>蜂蜜/薑花 → Chenin Blanc</li>
                <li>鹹海風/酵母麵包 → Muscadet sur lie</li>
                <li>煙燻/火藥石 → Pouilly-Fumé（燧石土壤）</li>
                <li>礦石/石頭 → 任何羅亞爾白酒的典型特征</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="tasting-step">
          <h4>3️⃣ 味覺評估</h4>
          <ul>
            <li><strong>酸度：</strong>羅亞爾白酒的酸度普遍高，是識別特征之一</li>
            <li><strong>甜度：</strong>從完全干型到極甜，在口腔中感受殘糖與酸度的平衡</li>
            <li><strong>礦石感：</strong>喉嚨後部和吞嚥後的礦石感是品質指標</li>
            <li><strong>餘味：</strong>優質白酒餘味持長，劣質白酒餘味短促</li>
          </ul>
        </div>
      </div>
    </div>`,
    quiz: {
      question: '品飲 Pouilly-Fumé 時，最能代表其「燧石土壤個性」的特徵香氣是什麼？',
      options: ['熱帶水果（芒果、鳳梨）', '橡木桶香草和煙燻木頭', '「打火石」煙燻礦石感（pierre à fusil）', '草莓和玫瑰花香'],
      correct: 2,
      explanation: 'Pouilly-Fumé 的「Fumé」（法語「煙燻」）名稱來自其燧石土壤賦予的特殊礦石香氣——就像敲擊打火石所產生的那種金屬煙燻氣味，法語稱「pierre à fusil」（打火石）。這種特殊的礦石煙燻感是 Pouilly-Fumé 最具辨識度的特征，在涼爽年份尤為突出，也是它與鄰近的 Sancerre 最大的香氣差異之一。'
    }
  },

  {
    title: '紅酒品飲指南',
    highlights: [
      { id: 1, icon: '❄️', title: '稍微冰涼才能展現最佳狀態', content: 'Cabernet Franc 的清新紅果和礦石感在較低溫度（14-16°C）下最為突出；室溫過高（20°C+）會掩蓋細緻度' },
      { id: 2, icon: '🌱', title: '青草味是品種特征而非缺陷', content: '輕微的甜椒/青草香氣是 Cabernet Franc 的典型品種特征，在涼爽年份或較輕的礫石款中更明顯；了解這一點才能正確評價羅亞爾紅酒' }
    ],
    content: `<div class="red-tasting-guide">
      <p class="lead-text">羅亞爾紅酒的品飲哲學與波爾多或勃艮第有所不同。它的清新輕盈才是優點，不應以濃郁厚重為評分標準。</p>
      <div class="red-tasting-framework">
        <div class="tasting-step">
          <h4>1️⃣ 視覺</h4>
          <ul>
            <li><strong>顏色深度：</strong>中等紅寶石 → 正常；深黑紫 → 可能是 Côt 或 Anjou-Villages</li>
            <li><strong>邊緣顏色：</strong>磚紅邊緣 → 表示陳年；紫紅邊緣 → 年輕</li>
            <li><strong>注意：</strong>Pineau d'Aunis 和輕盈 Gamay 顏色通常較淺，透明度高，這是正常的</li>
          </ul>
        </div>
        <div class="tasting-step">
          <h4>2️⃣ 嗅覺</h4>
          <div class="aroma-guide">
            <p><strong>年輕 Chinon / Bourgueil（1-3 年）：</strong><br>覆盆子、紅醋栗、紫羅蘭、輕微甜椒（品種特征）、礦石</p>
            <p><strong>成熟 Chinon / Bourgueil（5-10 年）：</strong><br>深色水果、腐殖土、皮革、甘草、雪松</p>
            <p><strong>Saumur-Champigny（年輕）：</strong><br>草莓、覆盆子、新鮮紫羅蘭、凝灰石礦石</p>
            <p><strong>Pineau d'Aunis：</strong><br>白胡椒辛香（非常典型！）、野草莓、紅醋栗</p>
            <p><strong>Gamay de Touraine：</strong><br>紅醋栗、草莓、些微胡椒、輕盈果香</p>
          </div>
        </div>
        <div class="tasting-step">
          <h4>3️⃣ 味覺</h4>
          <ul>
            <li><strong>單寧：</strong>大多數羅亞爾紅酒單寧細緻，不應過澀；老藤凝灰石 Chinon 可以有結構感但不粗糙</li>
            <li><strong>酸度：</strong>高酸度 → 正常且是品質指標，保持清新感</li>
            <li><strong>酒精感：</strong>通常適中（12-13.5%），不應有灼熱感</li>
            <li><strong>礦石餘味：</strong>優質 Chinon/Bourgueil 的礦石尾韻是品質的標誌</li>
          </ul>
        </div>
      </div>
      <div class="service-reminder">
        <h4>🌡️ 服侍溫度總結</h4>
        <ul>
          <li><strong>Gamay / Pineau d'Aunis（輕盈型）：</strong>12-14°C</li>
          <li><strong>Saint-Nicolas-de-Bourgueil（輕中型）：</strong>14-15°C</li>
          <li><strong>Chinon / Bourgueil / Saumur-Champigny（中型）：</strong>15-16°C</li>
          <li><strong>老藤 Chinon / Anjou-Villages（結構型）：</strong>16-18°C</li>
        </ul>
      </div>
    </div>`,
    quiz: {
      question: '品飲年輕的 Chinon 時，感受到輕微的「甜椒/青草」香氣，這代表什麼？',
      options: ['這瓶酒有嚴重缺陷，品質低劣', '這是 Cabernet Franc 的典型品種香氣特征，在年輕酒款和涼爽年份中正常出現，並非缺陷', '葡萄釀造過程中出現了問題', '這說明酒已經壞掉'],
      correct: 1,
      explanation: '輕微的甜椒或青草氣息是 Cabernet Franc 的品種特征（來自甲氧基吡嗪化合物 methoxypyrazine），在涼爽年份、較輕的礫石土壤酒款或年輕酒中更為明顯。這並非缺陷，而是品種個性的一部分。在溫暖年份或凝灰石老藤款中，這種特征會減少，由更多成熟果香取代。能正確識別和接受這種品種特征，是評鑑 Cabernet Franc 的重要能力。'
    }
  },

  {
    title: '餐酒搭配矩陣',
    highlights: [
      { id: 1, icon: '🦪', title: '「地方酒配地方菜」是最高法則', content: '生蠔 + Muscadet、白蘆筍 + Vouvray sec、豬肉料理 + Chinon——這些搭配在羅亞爾河谷流傳了幾百年，自有其道理' },
      { id: 2, icon: '🍯', title: '甜酒不只配甜品', content: 'Coteaux du Layon 配鮮鵝肝、Quarts de Chaume 配洛克福藍紋乾酪——甜酒與鹹食的對比搭配是最驚艷的美食體驗之一' }
    ],
    content: `<div class="food-pairing-matrix">
      <p class="lead-text">羅亞爾河谷的地理位置使其葡萄酒成為法國傳統菜餚的天然夥伴——Loire 流域的廚房有「法蘭西花園」的美稱，新鮮食材豐富，搭配當地酒款天衣無縫。</p>
      <div class="pairing-table-section">
        <h4>🍽️ 羅亞爾葡萄酒餐酒搭配速查表</h4>
        <table class="pairing-table">
          <tr>
            <th>酒款類型</th>
            <th>代表 AOP</th>
            <th>最佳食材搭配</th>
            <th>搭配邏輯</th>
          </tr>
          <tr>
            <td>輕盈干白（Muscadet）</td>
            <td>Muscadet Sèvre-et-Maine</td>
            <td>生蠔、淡菜、清蒸魚、海膽</td>
            <td>海洋鹹礦 ↔ 海鮮鹹鮮</td>
          </tr>
          <tr>
            <td>芳香干白（Sauvignon）</td>
            <td>Sancerre、Pouilly-Fumé</td>
            <td>山羊乳酪、白蘆筍、青蔬沙拉、河魚</td>
            <td>草本酸度 ↔ 乳酸清鮮</td>
          </tr>
          <tr>
            <td>豐富干白（Chenin Blanc）</td>
            <td>Savennières、Vouvray sec</td>
            <td>炸鱸魚、龍蝦、肥美扇貝、白肉燉菜</td>
            <td>豐富質感 ↔ 豐富食材</td>
          </tr>
          <tr>
            <td>半干白（Demi-sec）</td>
            <td>Vouvray demi-sec</td>
            <td>鴨胸肉、亞洲甜酸料理、豬肋排</td>
            <td>甜酸平衡 ↔ 甜鹹料理</td>
          </tr>
          <tr>
            <td>甜型白酒（Moelleux）</td>
            <td>Coteaux du Layon</td>
            <td>鮮鵝肝（mi-cuit）、水果甜點、藍紋乾酪</td>
            <td>甜蜜質感 ↔ 油脂豐富食材</td>
          </tr>
          <tr>
            <td>頂級甜酒（Grand Cru）</td>
            <td>Quarts de Chaume</td>
            <td>香煎鮮鵝肝、洛克福藍乾酪、精細甜品</td>
            <td>極致甜蜜 ↔ 鹹甜對比張力</td>
          </tr>
          <tr>
            <td>氣泡酒</td>
            <td>Crémant de Loire</td>
            <td>餐前小食、魚子醬、輕食冷盤</td>
            <td>清新氣泡 ↔ 開胃清新</td>
          </tr>
          <tr>
            <td>輕盈紅酒</td>
            <td>Saumur-Champigny</td>
            <td>炙烤鮭魚、鴨肉、蘑菇燉飯</td>
            <td>清新果香 ↔ 鮮美料理</td>
          </tr>
          <tr>
            <td>中型紅酒</td>
            <td>Chinon（凝灰石款）</td>
            <td>野豬燉菜、小牛腰肉、陳年乾酪</td>
            <td>礦石結構 ↔ 野味深度</td>
          </tr>
          <tr>
            <td>粉紅酒（干型）</td>
            <td>Rosé de Loire</td>
            <td>燒烤海鮮、地中海沙拉、輕盈前菜</td>
            <td>清新多功能 ↔ 夏日料理</td>
          </tr>
        </table>
      </div>
      <div class="pairing-tips">
        <h4>💡 羅亞爾餐酒搭配三大黃金法則</h4>
        <ul>
          <li><strong>1. 地方搭地方：</strong>Loire 流域的傳統食材（生蠔、河魚、山羊乳酪、豬肉、野豬）與當地葡萄酒有天然親和力，按地方搭配很難出錯</li>
          <li><strong>2. 酸度解油膩：</strong>羅亞爾白酒的高酸度能切穿油脂，甜酒的甜度能中和鵝肝的肥膩感，這是甜酒配鵝肝的科學基礎</li>
          <li><strong>3. 輕配輕，重配重：</strong>清新的 Muscadet 配清淡的生蠔；複雜的老藤 Chinon 配濃郁的野味燉菜——食材與酒款的重量感應該匹配</li>
        </ul>
      </div>
    </div>`,
    quiz: {
      question: '為什麼 Coteaux du Layon 等甜型白酒適合搭配煎鵝肝這樣的「油膩」食材？',
      options: ['因為甜酒可以掩蓋鵝肝的腥味', '甜酒的糖分可以中和鵝肝的豐厚油脂感，而高酸度同時清潔口腔，創造對比性張力', '甜酒和鵝肝都是法國料理，所以搭配', '甜酒的低酒精度不會蓋住鵝肝的味道'],
      correct: 1,
      explanation: '甜酒配鵝肝是法國美食界最著名的「對比性搭配」之一。鵝肝的豐厚油脂需要被某種元素「切開」——甜酒的高糖分與酸度相結合，既能以甜蜜感中和油脂的厚重，又能以高酸度清潔口腔，讓每一口都能重新感受到食材的精彩。Coteaux du Layon、Quarts de Chaume 的蜂蜜花香也與鵝肝的奶油甜感有天然的風味協調性。'
    }
  },

  {
    title: 'Level 1 綜合評量',
    highlights: [
      { id: 1, icon: '🎓', title: '8 課知識的集大成', content: '這份綜合評量涵蓋了 Level 1 全部 8 課的核心知識點，確認您的羅亞爾河谷葡萄酒基礎已穩固建立' },
      { id: 2, icon: '🏆', title: '通過後即可挑戰 Level 2', content: '完成 Level 1，您將進入更深度的產區分析、年份研究和釀造技術探討' }
    ],
    content: `<div class="l1-review">
      <p class="lead-text">在進行最終測驗前，讓我們快速回顧 Level 1 的 8 個核心主題，確認每個關鍵知識點都已掌握。</p>
      <div class="review-checklist">
        <h4>📋 Level 1 知識核查清單</h4>
        <div class="checklist-grid">
          <div class="checklist-item">
            <h5>✅ L1-1 羅亞爾河谷概論</h5>
            <ul>
              <li>800+ km 的多樣性，法國最長的河流</li>
              <li>「法國花園」，2000 年釀酒歷史</li>
              <li>四大子產區：Pays Nantais / Anjou-Saumur / Touraine / Centre-Loire</li>
            </ul>
          </div>
          <div class="checklist-item">
            <h5>✅ L1-2 地理環境與氣候</h5>
            <ul>
              <li>土壤五類：凝灰石、片岩、花崗岩、礫石、基默里奇泥灰岩</li>
              <li>西部海洋型（大西洋影響）→ 東部半大陸型</li>
            </ul>
          </div>
          <div class="checklist-item">
            <h5>✅ L1-3 Chenin Blanc</h5>
            <ul>
              <li>干型：Savennières（最偉大干型）、Vouvray sec</li>
              <li>甜酒金字塔：Quarts de Chaume（唯一 Grand Cru）> Bonnezeaux > Coteaux du Layon</li>
              <li>陳年潛力：巔峰可達 20-50 年</li>
            </ul>
          </div>
          <div class="checklist-item">
            <h5>✅ L1-4 其他白葡萄品種</h5>
            <ul>
              <li>Melon de Bourgogne → Muscadet（sur lie 工藝）</li>
              <li>Sauvignon Blanc → Sancerre + Pouilly-Fumé</li>
              <li>Folle Blanche → Gros Plant（高酸）</li>
            </ul>
          </div>
          <div class="checklist-item">
            <h5>✅ L1-5 紅葡萄品種</h5>
            <ul>
              <li>Cabernet Franc → Chinon、Bourgueil、St-Nicolas-de-Bourgueil、Saumur-Champigny</li>
              <li>Gamay → Touraine（輕盈清新）</li>
              <li>Côt（Malbec）→ Touraine-Amboise（100% Côt 唯一 AOP）</li>
              <li>Pineau d'Aunis → Vendômois（白胡椒辛香）</li>
            </ul>
          </div>
          <div class="checklist-item">
            <h5>✅ L1-6 四大產區</h5>
            <ul>
              <li>Pays Nantais：Muscadet 王國</li>
              <li>Anjou-Saumur：甜酒天堂 + Saumur-Champigny 紅酒</li>
              <li>Touraine：Chinon / Bourgueil / Vouvray 三巨頭</li>
              <li>Centre-Loire：Sancerre + Pouilly-Fumé 燧石礦石</li>
            </ul>
          </div>
          <div class="checklist-item">
            <h5>✅ L1-7 酒款類型</h5>
            <ul>
              <li>氣泡：Crémant de Loire（Chenin 為主）</li>
              <li>干白：輕→重（Muscadet→Savennières）</li>
              <li>甜白：Demi-sec → Moelleux → Liquoreux</li>
              <li>紅酒：清新輕盈為核心哲學</li>
            </ul>
          </div>
          <div class="checklist-item">
            <h5>✅ L1-8 品飲與搭配</h5>
            <ul>
              <li>羅亞爾白酒品飲：礦石感是靈魂</li>
              <li>羅亞爾紅酒品飲：稍涼服侍（14-16°C）</li>
              <li>黃金搭配：生蠔/Muscadet、鵝肝/甜酒、Chinon/野味</li>
            </ul>
          </div>
        </div>
      </div>
    </div>`,
    quiz: {
      question: '以下四個選項中，哪個是正確的「羅亞爾河谷品種 – 產區」對應？',
      options: [
        'Chardonnay → Vouvray；Pinot Noir → Chinon；Grenache → Sancerre；Merlot → Bourgueil',
        'Chenin Blanc → Vouvray + Savennières；Melon de Bourgogne → Muscadet；Sauvignon Blanc → Sancerre + Pouilly-Fumé；Cabernet Franc → Chinon + Bourgueil',
        'Chenin Blanc → Sancerre；Sauvignon Blanc → Vouvray；Melon de Bourgogne → Anjou',
        'Cabernet Franc → Pays Nantais；Chenin Blanc → Centre-Loire；Sauvignon Blanc → Anjou'
      ],
      correct: 1,
      explanation: '羅亞爾河谷的品種-產區對應是 Level 1 最核心的知識：① Chenin Blanc 是 Vouvray 和 Savennières 等的靈魂品種；② Melon de Bourgogne 釀製 Muscadet（Pays Nantais）；③ Sauvignon Blanc 在 Sancerre 和 Pouilly-Fumé（Centre-Loire）達到頂峰；④ Cabernet Franc 是 Chinon、Bourgueil、Saumur-Champigny（Anjou-Saumur/Touraine）的核心紅品種。這四組對應是理解整個羅亞爾體系的骨幹框架。'
    }
  }
]
