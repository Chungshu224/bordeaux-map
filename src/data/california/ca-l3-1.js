/**
 * CA-L3-1 微氣候大師課：山坡谷地與 AVA 精細分析
 * 進階課程：Hillside vs Valley Floor 的風土對決，以及微氣候如何塑造精品葡萄酒
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          當一般的葡萄酒愛好者說「Napa Cabernet」時，資深品飲者會追問：是谷地（Valley Floor）還是山坡（Hillside）？海拔幾公尺？坡向是東還是西？這些細節決定了一款酒是普通的優質酒，還是可以陳年 30 年的傳奇。本課帶您深入微氣候的世界。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>⛰️ 掌握山坡 vs 谷地風土的系統差異</h4>
            <p>從排水性、海拔、霜害風險、晝夜溫差等維度，全面理解兩種風土類型的葡萄酒個性</p>
          </div>
          <div class="point-item">
            <h4>🏔️ 深度解析高海拔 AVA</h4>
            <p>理解 Howell Mountain、Spring Mountain、Diamond Mountain 等山地 AVA 的特殊價值</p>
          </div>
          <div class="point-item">
            <h4>🧭 坡向效應（Aspect）的影響</h4>
            <p>掌握東坡、西坡、南坡如何影響葡萄接受的陽光量和氣溫，以及品質差異</p>
          </div>
        </div>
      </div>
    `
  },

  {
    component: 'CaliforniaRegionMapSlide',
    title: 'Napa Valley 山地 AVA 地圖',
    componentProps: {
      slide: {
        title: 'Napa Valley 山地 AVA 地圖',
        description: 'Spring Mountain・Howell Mountain・Mt. Veeder・Diamond Mountain・Atlas Peak——五大山地 AVA vs 谷地 AVA 對照',
        mapGroup: 'Napa Valley',
        highlightAVAs: ["Spring Mountain District","Howell Mountain","Mt. Veeder","Diamond Mountain District","Atlas Peak"],
      }
    }
  },

  {
    title: '山坡 vs 谷地：最根本的風土分野',
    content: `<div class="hillside-valley">
      <h3>⛰️ Hillside vs Valley Floor — 兩種加州風土哲學</h3>
      <p>在 Napa Valley，同樣的 Cabernet Sauvignon 種植在山坡和谷地，價格可以相差 5–10 倍，風格也截然不同。理解這個分野是進入精品加州葡萄酒世界的關鍵。</p>
      <div class="hv-comparison">
        <div class="hv-card hillside">
          <h4>⛰️ 山坡種植（Hillside Viticulture）</h4>
          <div class="hv-details">
            <div class="hv-factor">
              <strong>土壤貧瘠</strong>
              <p>岩石性、薄層土壤，養分少。葡萄樹被迫深根（根系可達 20 米），吸收深層礦物質，產量極低。</p>
              <p class="hv-result wine-quality">→ 葡萄顆粒小、果皮厚、糖分集中度高、礦物感豐富</p>
            </div>
            <div class="hv-factor">
              <strong>良好排水</strong>
              <p>雨水迅速流走，葡萄根系不會因過度灌溉而懶惰化，必須主動尋找水分。</p>
              <p class="hv-result wine-quality">→ 葡萄酒風格更集中、結構感更強</p>
            </div>
            <div class="hv-factor">
              <strong>海霧之上</strong>
              <p>許多 Napa 山地 AVA（Howell Mountain 420m+、Spring Mountain 400m+）高於晨霧雲層。白天陽光充足，夜晚溫度隨海拔下降。</p>
              <p class="hv-result wine-quality">→ 強烈陽光帶來更高花青素含量，涼夜保留酸度</p>
            </div>
            <div class="hv-factor">
              <strong>低產量</strong>
              <p>機械化困難、坡地作業費力，每英畝產量通常只有谷地的 1/3。</p>
              <p class="hv-result wine-quality">→ 精華集中，每顆葡萄的品質更高</p>
            </div>
          </div>
          <p class="hv-style">代表風格：濃縮、單寧強勁、礦物感顯著、陳年潛力極高</p>
          <p class="hv-examples">代表 AVA：Howell Mountain、Spring Mountain、Diamond Mountain、Mount Veeder</p>
        </div>
        <div class="hv-card valley">
          <h4>🌊 谷地種植（Valley Floor Viticulture）</h4>
          <div class="hv-details">
            <div class="hv-factor">
              <strong>肥沃沖積土</strong>
              <p>河流沉積的礫石和黏土，養分充足，葡萄生長旺盛。</p>
              <p class="hv-result wine-quality">→ 產量較高，果味更豐沛直接</p>
            </div>
            <div class="hv-factor">
              <strong>受海霧影響</strong>
              <p>低窪谷地是晨霧最先抵達、最後消散的地方。在 Carneros 和南 Napa，晨霧的降溫效果在谷地比山坡更顯著。</p>
              <p class="hv-result wine-quality">→ 涼爽感更強，更多花果香氣，酸度清晰</p>
            </div>
            <div class="hv-factor">
              <strong>霜害風險</strong>
              <p>冷空氣沿山坡下沉，在谷地積聚。春季霜害（Spring Frost）是谷地葡萄園的最大威脅之一。</p>
              <p class="hv-result wine-quality">→ 需要風車、灑水系統等霜害防護措施</p>
            </div>
            <div class="hv-factor">
              <strong>機械化作業</strong>
              <p>平坦地形適合機械收割，成本較低，適合大量生產。</p>
              <p class="hv-result wine-quality">→ 生產效率高，但精緻度不如山坡</p>
            </div>
          </div>
          <p class="hv-style">代表風格：果味豐沛、柔滑易飲、單寧較細緻、較早成熟可飲</p>
          <p class="hv-examples">代表 AVA：Oakville、Rutherford、St. Helena（谷地部分）</p>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Napa 山地 AVA 深度解析',
    content: `<div class="napa-mountain-avas">
      <h3>🏔️ Napa Valley 四大山地 AVA</h3>
      <div class="mountain-ava-grid">
        <div class="mava-card">
          <h4>Howell Mountain</h4>
          <div class="mava-specs">
            <span>海拔：420–760 m</span>
            <span>AVA 認定：1984 年</span>
            <span>面積：約 1,100 英畝葡萄園</span>
          </div>
          <p>位於 Napa 東側山脊，海拔在晨霧雲層之上。火山噴出的紅色黏土（volcanic tuff）和礫石土壤，礦物含量極高。</p>
          <div class="mava-style">
            <h5>典型風格</h5>
            <p>加州最具陳年潛力的 Cabernet Sauvignon 產地之一——深色水果、石墨、黑巧克力，單寧結構強勁但精緻。需要至少 10 年才進入適飲期。</p>
          </div>
          <p class="mava-estates">代表酒莊：Dunn Vineyards（加州最具陳年潛力的 Cabernet 之一）、Robert Keenan、Lamborn Family Vineyards</p>
        </div>
        <div class="mava-card">
          <h4>Spring Mountain District</h4>
          <div class="mava-specs">
            <span>海拔：90–760 m（跨越極大）</span>
            <span>AVA 認定：1993 年</span>
            <span>面積：約 1,000 英畝葡萄園</span>
          </div>
          <p>位於 Napa 西側，地質複雜——火山岩、頁岩、砂岩，不同小坡面展現不同個性。涼爽的山地微氣候比谷地低 3–5°C。</p>
          <div class="mava-style">
            <h5>典型風格</h5>
            <p>兼具優雅和力量的 Cabernet——比谷地更多礦物感，比 Howell Mountain 更精細。也出產加州最優質的 Pinot Noir（特別是高海拔的 Chardonnay）。</p>
          </div>
          <p class="mava-estates">代表酒莊：Pride Mountain Vineyards（跨越 Napa/Sonoma 縣界！）、Spring Mountain Vineyard</p>
        </div>
        <div class="mava-card">
          <h4>Diamond Mountain District</h4>
          <div class="mava-specs">
            <span>海拔：120–520 m</span>
            <span>AVA 認定：2001 年</span>
            <span>面積：約 430 英畝葡萄園</span>
          </div>
          <p>緊鄰 Calistoga 西北，溫度比谷地低（受益於春山涼風），黑色礫石土壤（volcanic breccia）是最大特色。</p>
          <div class="mava-style">
            <h5>典型風格</h5>
            <p>深色果實（黑醋栗、黑莓）加上獨特的石墨和礦石質感，單寧緊緻但天鵝絨般柔滑。是性格最鮮明的 Napa 山地 AVA。</p>
          </div>
          <p class="mava-estates">代表酒莊：Diamond Creek（以三塊不同地質的單一葡萄園聞名）、von Strasser</p>
        </div>
        <div class="mava-card">
          <h4>Mount Veeder</h4>
          <div class="mava-specs">
            <span>海拔：120–790 m（Napa 最高峰）</span>
            <span>AVA 認定：1990 年</span>
            <span>面積：約 1,000 英畝葡萄園</span>
          </div>
          <p>位於 Napa 最西南方的玄武岩（Basalt）和砂岩高地。是 Napa 和 Sonoma 縣界的山脊，受到太平洋和 San Pablo Bay 的雙重影響。</p>
          <div class="mava-style">
            <h5>典型風格</h5>
            <p>加州最具大地感（Earthy）的 Cabernet——野生香料、泥土、蘑菇風味明顯，單寧顆粒感強，需要充分的時間才能完全開放。</p>
          </div>
          <p class="mava-estates">代表酒莊：Hess Collection、Chateau Potelle、Mount Veeder Winery</p>
        </div>
      </div>
    </div>`
  },

  {
    title: '坡向（Aspect）的微氣候效應',
    content: `<div class="aspect-effect">
      <h3>🧭 坡向如何決定葡萄園的微氣候</h3>
      <p>在加州的葡萄酒產區，「面向」（Aspect）是選擇葡萄園地塊時的關鍵考量。同一條山坡上，因坡向不同，兩個地塊的白天最高溫可以相差 5°C。</p>
      <div class="aspect-grid">
        <div class="aspect-card east">
          <h4>🌅 東向坡（East-Facing）</h4>
          <p><strong>特點：</strong>享受清晨陽光（最柔和、能量最低），下午進入陰影。</p>
          <p><strong>效果：</strong>氣溫較低，生長季更長，葡萄成熟更緩慢。</p>
          <p><strong>適合：</strong>在溫暖產區（如 Napa 中部）種植需要涼爽環境的品種，帶來清爽酸度。</p>
          <p class="aspect-example">例子：Napa 谷地東側山坡的部分 Stags Leap District 葡萄園</p>
        </div>
        <div class="aspect-card west">
          <h4>🌇 西向坡（West-Facing）</h4>
          <p><strong>特點：</strong>下午享受最強烈的陽光（氣溫最高時段），最大化日照。</p>
          <p><strong>效果：</strong>氣溫更高，果實成熟度更高，酒精潛力更大。</p>
          <p><strong>適合：</strong>涼爽地區（如聖巴巴拉）增加葡萄成熟度的最佳策略。</p>
          <p class="aspect-example">例子：Santa Rita Hills 的部分西向坡面 Pinot Noir 葡萄園——充足日照讓涼爽產區的葡萄充分成熟</p>
        </div>
        <div class="aspect-card south">
          <h4>☀️ 南向坡（South-Facing）</h4>
          <p><strong>特點：</strong>整天接受最大量陽光，在加州北緯 35–38 度，南坡日照最充足。</p>
          <p><strong>效果：</strong>氣溫最高，最有利於在涼爽 AVA 達到成熟度。但在已經溫暖的產區，可能導致過熱。</p>
          <p><strong>適合：</strong>在涼爽 AVA（Anderson Valley）種植需要額外熱量的品種</p>
        </div>
        <div class="aspect-card north">
          <h4>🌑 北向坡（North-Facing）</h4>
          <p><strong>特點：</strong>日照最少，氣溫最涼爽。在加州溫暖產區，北向坡是降低氣溫的天然工具。</p>
          <p><strong>效果：</strong>最低溫、最緩慢的成熟，最高酸度。</p>
          <p><strong>適合：</strong>溫暖區域需要種植涼爽品種（如 Pinot Noir）時的選擇，但需謹慎評估成熟度風險。</p>
        </div>
      </div>
      <div class="aspect-case-study">
        <h4>案例研究：Diamond Creek 的三個地塊</h4>
        <p>Diamond Creek Vineyard（Diamond Mountain District）擁有三個相鄰但風格迥異的地塊，每塊分開裝瓶，完美說明微氣候的影響：</p>
        <ul>
          <li><strong>Volcanic Hill</strong>：火山土壤，排水最好，風格最緊實</li>
          <li><strong>Gravelly Meadow</strong>：礫石土壤，風格最圓潤細緻</li>
          <li><strong>Red Rock Terrace</strong>：紅色火山礫石，強勁且礦物感十足</li>
        </ul>
        <p>三個地塊相距不超過 500 公尺，卻在盲品中明顯可辨，是研究加州微氣候最好的活教材。</p>
      </div>
    </div>`
  },

  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 知識檢測',
        isFinalExam: false,
        passScore: 70,
        questions: [
          {
            type: 'single',
            question: '與谷地（Valley Floor）葡萄園相比，山坡（Hillside）葡萄園最主要的優勢是什麼？',
            options: ['A. 機械化作業更方便', 'B. 產量更高，成本更低', 'C. 貧瘠土壤迫使根系深扎，葡萄果實更集中，礦物感更豐富', 'D. 霜害風險更低'],
            correct: 2,
            explanation: '山坡地形的岩石性貧瘠土壤迫使葡萄根系向深處生長（可達20米），從深層土壤中汲取礦物質。較低的產量和集中的果實特性，以及高海拔帶來的涼夜，共同創造出風格集中、礦物感豐富、陳年潛力高的精品葡萄酒。'
          },
          {
            type: 'single',
            question: 'Howell Mountain AVA 最著名的特色是什麼？',
            options: ['A. 位於 San Pablo Bay 旁，出產最好的 Pinot Noir', 'B. 420m 以上的海拔在晨霧之上，出產具有極高陳年潛力的 Cabernet Sauvignon', 'C. 加州最古老的酒莊聚集地', 'D. 地中海氣候最典型的體現'],
            correct: 1,
            explanation: 'Howell Mountain 位於 Napa 東側，海拔 420–760 米，高於晨霧雲層。火山土壤加上強烈陽光和涼爽夜晚，造就了加州最具陳年潛力的 Cabernet Sauvignon（代表：Dunn Vineyards）。'
          },
          {
            type: 'single',
            question: '在涼爽的聖巴巴拉產區，葡萄園選擇西向坡（West-Facing）的主要理由是？',
            options: ['A. 避免下午的強烈陽光', 'B. 接受下午最強烈的陽光，最大化葡萄成熟度', 'C. 靠近海洋，保持涼爽', 'D. 減少霜害風險'],
            correct: 1,
            explanation: '西向坡在下午（一天中最溫暖的時段）接受最強烈的陽光，可以最大化日照時數和葡萄成熟度。在聖巴巴拉這樣的涼爽產區，選擇西向坡是確保 Pinot Noir 和 Chardonnay 充分成熟的重要策略。'
          }
        ]
      }
    }
  }
]
