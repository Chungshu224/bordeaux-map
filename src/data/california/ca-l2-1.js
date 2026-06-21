/**
 * CA-L2-1 土壤與氣候：太平洋迷霧的力量
 * 加州葡萄酒風土深度解析——氣候機制、土壤多樣性與 Winkler 熱量積算
 * 資料來源：discovercaliforniawines.com（California Wine Institute）
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          加州為何能在同一個州內，同時生產與法國勃根地並駕齊驅的 Pinot Noir，以及媲美波爾多的 Cabernet Sauvignon？答案就藏在氣候與土壤的交互作用中。本課深度解析太平洋海霧、地形屏障、土壤類型如何共同塑造加州多元的葡萄酒風格。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌊 理解太平洋迷霧的機制</h4>
            <p>掌握加利福尼亞寒流、海峽缺口、晨霧對不同產區的差異化影響</p>
          </div>
          <div class="point-item">
            <h4>🏔️ 地形如何決定氣候</h4>
            <p>理解海岸山脈高度和山谷走向如何決定海霧能滲透多深的內陸</p>
          </div>
          <div class="point-item">
            <h4>🪨 土壤類型與品種選擇</h4>
            <p>連結火山岩、礫石、黏土、沙土等土壤類型與最適合種植的葡萄品種</p>
          </div>
          <div class="point-item">
            <h4>🌡️ Winkler 熱量積算制度</h4>
            <p>理解加州科學家發明的氣候分區方法，掌握 Region I–V 的意義</p>
          </div>
        </div>
      </div>
    `
  },

  {
    component: 'CaliforniaRegionMapSlide',
    title: '加州氣候帶 × 產區分布',
    componentProps: {
      slide: {
        title: '加州氣候帶 × 產區分布',
        description: '太平洋冷流影響下的氣候梯度：沿岸涼爽帶（Sonoma Coast、Santa Rita Hills）vs 內陸炎熱帶（Napa 谷地、Paso Robles）',
        mapGroup: 'overview',
      }
    }
  },

  {
    title: '加利福尼亞寒流：天然空調系統',
    content: `<div class="california-current">
      <h3>🌊 California Current — 全球最重要的葡萄酒氣候機制之一</h3>
      <p>沿加州海岸向南流動的<strong>加利福尼亞寒流（California Current）</strong>是影響整個西岸葡萄酒風格的根本力量。這道來自北太平洋的冷水流，在夏季將海岸水溫維持在 12–16°C 左右，冷卻空氣形成濃霧，每天清晨湧入內陸。</p>
      <div class="current-effects">
        <div class="effect-card">
          <h4>🌫️ 晨霧機制（The Morning Fog）</h4>
          <p>溫暖的白天空氣接觸冷海水後凝結成霧，通過海峽缺口（如金門海峽、蒙特雷灣）湧入山谷。晨霧遮蔽陽光，讓葡萄緩慢成熟，保留天然酸度。</p>
        </div>
        <div class="effect-card">
          <h4>🌤️ 午後海風（Afternoon Breeze）</h4>
          <p>到下午，太陽加熱內陸空氣，形成氣壓差，強勁的涼爽海風從海峽吹入（可達 30 km/h）。這為 Russian River Valley、Carneros、Santa Rita Hills 提供類似海洋性氣候的條件。</p>
        </div>
        <div class="effect-card">
          <h4>📏 距離效應</h4>
          <p>離海越近：霧氣越濃、溫度越低 → Pinot Noir、Chardonnay 最適合<br>離海越遠：霧氣減弱、溫度升高 → Cabernet Sauvignon、Zinfandel 最適合</p>
        </div>
      </div>
      <div class="fog-examples">
        <h4>📍 海霧影響的經典案例</h4>
        <table class="fog-table">
          <thead><tr><th>地點</th><th>與海峽距離</th><th>海霧強度</th><th>最適品種</th></tr></thead>
          <tbody>
            <tr><td>Carneros（Napa/Sonoma南端）</td><td>直接鄰接 San Pablo Bay</td><td>非常強</td><td>Pinot Noir、Chardonnay</td></tr>
            <tr><td>Russian River Valley</td><td>~30 km via Petaluma Gap</td><td>強</td><td>Pinot Noir、Chardonnay</td></tr>
            <tr><td>Rutherford, Napa</td><td>~50 km</td><td>中等（午後海霧）</td><td>Cabernet Sauvignon</td></tr>
            <tr><td>Calistoga, Napa北端</td><td>~60 km（山脈阻隔）</td><td>弱</td><td>Cabernet Sauvignon（最濃郁）</td></tr>
            <tr><td>Santa Rita Hills</td><td>直接受太平洋影響</td><td>極強（橫向山谷）</td><td>Pinot Noir、Chardonnay</td></tr>
          </tbody>
        </table>
      </div>
    </div>`
  },

  {
    title: '晝夜溫差：加州酸度的秘密',
    content: `<div class="diurnal-variation">
      <h3>🌡️ Diurnal Temperature Variation — 葡萄酒複雜度的來源</h3>
      <p>加州許多優質葡萄酒產區擁有極大的<strong>晝夜溫差（Diurnal Temperature Range）</strong>——白天可達 35°C，夜晚驟降至 10°C，溫差超過 25°C。這種極端的晝夜溫差是加州葡萄酒保持天然酸度、發展複雜香氣的關鍵。</p>
      <div class="diurnal-science">
        <div class="science-card">
          <h4>白天（高溫）→ 糖分積累</h4>
          <ul>
            <li>強烈陽光驅動光合作用</li>
            <li>葡萄糖分快速增加，達到理想成熟度</li>
            <li>酚類物質（花青素、單寧）充分發展</li>
          </ul>
        </div>
        <div class="science-card">
          <h4>夜晚（低溫）→ 酸度保留</h4>
          <ul>
            <li>低溫抑制蘋果酸（Malic Acid）分解</li>
            <li>葡萄保持清爽的天然酸度</li>
            <li>芳香族化合物（萜類）得到保存</li>
          </ul>
        </div>
      </div>
      <div class="diurnal-examples">
        <h4>📊 代表性產區晝夜溫差數據（夏季平均）</h4>
        <div class="dtr-list">
          <div class="dtr-item">
            <span class="dtr-region">Napa Valley（Rutherford）</span>
            <span class="dtr-data">白天 35°C / 夜晚 13°C → 溫差 22°C</span>
          </div>
          <div class="dtr-item">
            <span class="dtr-region">Russian River Valley</span>
            <span class="dtr-data">白天 28°C / 夜晚 10°C → 溫差 18°C</span>
          </div>
          <div class="dtr-item">
            <span class="dtr-region">Paso Robles（East Side）</span>
            <span class="dtr-data">白天 38°C / 夜晚 12°C → 溫差 26°C</span>
          </div>
          <div class="dtr-item">
            <span class="dtr-region">Santa Barbara（Santa Rita Hills）</span>
            <span class="dtr-data">白天 25°C / 夜晚 9°C → 溫差 16°C</span>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: '加州土壤多樣性',
    content: `<div class="california-soils">
      <h3>🪨 加州的土壤類型與葡萄酒風格</h3>
      <p>加州地質複雜性在全球葡萄酒產區中罕見，從火山岩到海洋沉積物，從礫石到黏土，多元的土壤類型直接影響葡萄酒的風格與複雜度。</p>
      <div class="soil-grid">
        <div class="soil-card volcanic">
          <div class="soil-icon">🌋</div>
          <h4>火山岩（Volcanic）</h4>
          <p class="soil-location">分布：Calistoga（Napa）、Sonoma Coast</p>
          <p class="soil-effect">排水良好，礦物質豐富。葡萄根系深扎以尋找水分，帶來礦石感和煙燻風味。Cabernet 在此呈現出強烈的煙燻黑醋栗個性。</p>
          <p class="soil-grapes">最適品種：Cabernet Sauvignon、Zinfandel</p>
        </div>
        <div class="soil-card gravel">
          <div class="soil-icon">🔸</div>
          <h4>礫石/沖積土（Gravel/Alluvial）</h4>
          <p class="soil-location">分布：Oakville、Rutherford、Stags Leap District（Napa）</p>
          <p class="soil-effect">良好排水迫使根系向深處生長，帶來集中的果實風味。Rutherford 的礫石帶有名為「Rutherford Dust」（舊稱，現稱 Rutherford Bench）的獨特質感。</p>
          <p class="soil-grapes">最適品種：Cabernet Sauvignon、Merlot</p>
        </div>
        <div class="soil-card clay">
          <div class="soil-icon">🟤</div>
          <h4>黏土（Clay）</h4>
          <p class="soil-location">分布：Carneros、Anderson Valley（Mendocino）</p>
          <p class="soil-effect">保水性強，維持均勻的水分供給。在涼爽氣候中能緩和過多的酸度，支撐 Pinot Noir 的豐腴質地和 Chardonnay 的圓潤口感。</p>
          <p class="soil-grapes">最適品種：Pinot Noir、Chardonnay</p>
        </div>
        <div class="soil-card limestone">
          <div class="soil-icon">⬜</div>
          <h4>石灰岩（Limestone）</h4>
          <p class="soil-location">分布：Santa Cruz Mountains（Ridge Monte Bello）、Paso Robles 西側</p>
          <p class="soil-effect">稀有但品質卓越。石灰岩排水快、礦物含量高，賦予葡萄酒出眾的骨架感和陳年潛力。Ridge Monte Bello 的石灰岩 Cabernet 是加州最具陳年潛力的酒款之一。</p>
          <p class="soil-grapes">最適品種：Cabernet Sauvignon、Syrah</p>
        </div>
        <div class="soil-card sandy">
          <div class="soil-icon">🟡</div>
          <h4>沙土（Sandy）</h4>
          <p class="soil-location">分布：Lodi（Central Valley）</p>
          <p class="soil-effect">天然抗根瘤蚜蟲（根瘤蚜蟲無法在鬆散沙土中移動），因此 Lodi 保有許多未嫁接的老藤（Old Vine）葡萄，樹齡可達 100+ 年。</p>
          <p class="soil-grapes">最適品種：Zinfandel 老藤</p>
        </div>
        <div class="soil-card schist">
          <div class="soil-icon">🪨</div>
          <h4>片岩/頁岩（Schist/Shale）</h4>
          <p class="soil-location">分布：Sierra Foothills（Amador、El Dorado County）</p>
          <p class="soil-effect">礦物質豐富，提供金屬/石墨感的礦物特性。Sierra Foothills 的葡萄在此土壤中展現出獨特的野生香料和礦石風味。</p>
          <p class="soil-grapes">最適品種：Zinfandel、Barbera、Syrah</p>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Winkler 熱量積算制度',
    content: `<div class="winkler-scale">
      <h3>🔬 Winkler Scale（熱量積算制度）</h3>
      <p>1944 年加州大學戴維斯分校的 Albert Winkler 和 Maynard Amerine 教授開創了<strong>熱量積算（Growing Degree Days, GDD）</strong>系統，將加州產區依年均熱量分為五個區域（Region I–V），成為現代葡萄酒地理學的基礎工具。</p>
      <div class="winkler-method">
        <h4>計算方法</h4>
        <p>計算 4月1日到10月31日之間，每天超過 10°C（50°F）的「有效熱量度日」總和。</p>
        <code class="formula">GDD = Σ [(最高溫 + 最低溫) / 2 − 10°C]</code>
      </div>
      <div class="winkler-regions">
        <div class="wr-item region-i">
          <div class="wr-header">
            <span class="wr-num">Region I</span>
            <span class="wr-gdd">&lt; 2,500 GDD (°F 計)</span>
          </div>
          <div class="wr-detail">
            <p class="wr-climate">最涼爽 — 類似勃根地氣候</p>
            <p class="wr-grapes">Pinot Noir、Chardonnay、Riesling、Sparkling wine</p>
            <p class="wr-example">代表地區：Carneros、Santa Rita Hills、Anderson Valley</p>
          </div>
        </div>
        <div class="wr-item region-ii">
          <div class="wr-header">
            <span class="wr-num">Region II</span>
            <span class="wr-gdd">2,501–3,000 GDD</span>
          </div>
          <div class="wr-detail">
            <p class="wr-climate">涼爽 — 類似波爾多氣候</p>
            <p class="wr-grapes">Cabernet Sauvignon、Merlot、Sauvignon Blanc</p>
            <p class="wr-example">代表地區：大部分 Napa Valley、Russian River Valley</p>
          </div>
        </div>
        <div class="wr-item region-iii">
          <div class="wr-header">
            <span class="wr-num">Region III</span>
            <span class="wr-gdd">3,001–3,500 GDD</span>
          </div>
          <div class="wr-detail">
            <p class="wr-climate">溫和 — 類似隆河谷地氣候</p>
            <p class="wr-grapes">Zinfandel、Syrah、Grenache</p>
            <p class="wr-example">代表地區：Paso Robles East、Alexander Valley、Sierra Foothills</p>
          </div>
        </div>
        <div class="wr-item region-iv">
          <div class="wr-header">
            <span class="wr-num">Region IV</span>
            <span class="wr-gdd">3,501–4,000 GDD</span>
          </div>
          <div class="wr-detail">
            <p class="wr-climate">溫暖 — 類似南義大利氣候</p>
            <p class="wr-grapes">Barbera、Sangiovese、量產品種</p>
            <p class="wr-example">代表地區：Lodi、Sacramento Valley</p>
          </div>
        </div>
        <div class="wr-item region-v">
          <div class="wr-header">
            <span class="wr-num">Region V</span>
            <span class="wr-gdd">&gt; 4,000 GDD</span>
          </div>
          <div class="wr-detail">
            <p class="wr-climate">最炎熱 — 類似北非氣候</p>
            <p class="wr-grapes">強化酒品種、高產量混調用葡萄</p>
            <p class="wr-example">代表地區：San Joaquin Valley 最南端</p>
          </div>
        </div>
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
            question: '加利福尼亞寒流（California Current）對葡萄酒最主要的影響是什麼？',
            options: ['A. 增加土壤肥沃度', 'B. 帶來海霧和涼爽氣候，有助保留葡萄天然酸度', 'C. 提高年降雨量', 'D. 使土壤變得更為鹼性'],
            correct: 1,
            explanation: '加利福尼亞寒流使海岸水溫降低，冷卻空氣凝結成霧，每天清晨湧入谷地。這帶來涼爽氣候，讓葡萄緩慢成熟、保留天然酸度，是加州沿海葡萄酒優雅風格的關鍵。'
          },
          {
            type: 'single',
            question: 'Lodi（Inland Valleys）的沙質土壤有何特殊意義？',
            options: ['A. 含有豐富的火山礦物質', 'B. 防止根瘤蚜蟲侵害，保存了大量百年老藤', 'C. 最適合種植 Pinot Noir', 'D. 保水性特別強'],
            correct: 1,
            explanation: '根瘤蚜蟲無法在鬆散的沙質土壤中移動，因此 Lodi 的許多老藤（Old Vine Zinfandel，樹齡超過 100 年）得以以未嫁接的根系存活至今，是加州珍貴的老藤寶庫。'
          },
          {
            type: 'single',
            question: 'Winkler 制度（GDD）中，Region I 最適合種植哪類品種？',
            options: ['A. Zinfandel 和 Grenache', 'B. Pinot Noir 和 Chardonnay', 'C. Cabernet Sauvignon 和 Merlot', 'D. Barbera 和 Sangiovese'],
            correct: 1,
            explanation: 'Region I 是最涼爽的氣候帶（< 2,500 GDD），類似勃根地氣候，最適合種植 Pinot Noir、Chardonnay 和 Riesling 等涼爽氣候品種，也是最佳氣泡酒產區。'
          }
        ]
      }
    }
  }
]
