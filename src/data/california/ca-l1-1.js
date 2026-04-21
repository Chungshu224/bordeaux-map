/**
 * CA-L1-1 產區概覽：五大主要地理區域
 * 認識加州葡萄酒的地理架構、六大產區群與 AVA 系統
 * 資料來源：discovercaliforniawines.com（California Wine Institute）
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          歡迎來到加州葡萄酒課程！加州擁有全美最多的葡萄酒產區，154 個 AVA（美國葡萄酒法定產區），生產美國約 85% 的葡萄酒。從 1976 年震驚世界的「巴黎評判」，到如今年產逾 8 億瓶——加州葡萄酒是新世界葡萄酒革命的核心。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🏛️ 了解加州葡萄酒的歷史脈絡</h4>
            <p>從西班牙傳教士 1769 年種植第一批葡萄，到 1976 年「巴黎評判」改寫世界葡萄酒版圖</p>
          </div>
          <div class="point-item">
            <h4>🗺️ 掌握加州六大產區群</h4>
            <p>North Coast、Central Coast、Sierra Foothills、Inland Valleys、Southern California、Far North California</p>
          </div>
          <div class="point-item">
            <h4>🍇 認識 AVA 制度</h4>
            <p>理解美國 AVA 法定產區制度與法國 AOC 的異同，掌握加州 154 個 AVA 的架構</p>
          </div>
          <div class="point-item">
            <h4>🌍 加州葡萄酒的全球影響力</h4>
            <p>了解加州如何成為全球第四大葡萄酒生產地，以及對全球葡萄酒文化的深遠影響</p>
          </div>
        </div>
        <p class="intro-conclusion">
          完成本課程後，您將建立對加州葡萄酒的完整歷史觀與產區架構，為深入學習納帕、索諾馬等重要產區打下基礎。
        </p>
      </div>
    `
  },

  {
    title: '為什麼選擇加州葡萄酒？',
    highlights: [
      { id: 1, icon: '🏆', title: '巴黎評判傳奇', content: '1976 年納帕 Cabernet Sauvignon 和 Chardonnay 在盲品中擊敗法國頂級佳釀，震撼全球葡萄酒界' },
      { id: 2, icon: '🍷', title: '全美 85% 葡萄酒', content: '加州年產超過 8 億瓶葡萄酒，出口至 140 個國家，是美國葡萄酒工業的絕對核心' }
    ],
    content: `<div class="ca-intro">
      <p class="lead-text">加州（California）是全球最重要的葡萄酒產區之一，坐擁多樣化的地理環境與氣候，從太平洋沿岸的涼爽海霧到內陸的炎熱山谷，孕育出豐富多彩的葡萄酒風格。</p>
      <div class="key-facts">
        <div class="fact-item"><strong>AVA 數量：</strong>154 個法定葡萄酒產區（American Viticultural Area）</div>
        <div class="fact-item"><strong>年產量：</strong>超過 8 億瓶（全美 85%）</div>
        <div class="fact-item"><strong>全球排名：</strong>世界第四大葡萄酒生產地</div>
        <div class="fact-item"><strong>出口市場：</strong>140 個國家，年出口額超過 16 億美元</div>
        <div class="fact-item"><strong>可持續種植：</strong>加州是全美可持續葡萄栽培的領導者</div>
      </div>
      <div class="why-learn">
        <h4>🎯 學習加州葡萄酒的三大理由</h4>
        <ul>
          <li><strong>Cabernet Sauvignon 的新王國：</strong>Napa Valley 是全球頂級 Cabernet Sauvignon 的重要產地，與波爾多並駕齊驅</li>
          <li><strong>創新與傳統的交匯：</strong>加州兼具歐洲釀酒傳統與本土創新精神，開創新世界釀酒典範</li>
          <li><strong>多元地理與品種：</strong>154 個 AVA 涵蓋超過 100 種釀酒葡萄，每個產區都有獨特風土表達</li>
        </ul>
      </div>
    </div>`
  },

  {
    title: '加州葡萄酒的歷史',
    content: `<div class="ca-history">
      <h3>🕰️ 歷史時間軸</h3>
      <div class="timeline">
        <div class="timeline-item">
          <div class="year">1769</div>
          <div class="event">
            <strong>傳教士的葡萄園</strong>
            <p>西班牙方濟各會傳教士 Junípero Serra 神父在聖地牙哥附近種植加州第一批葡萄（Mission 品種），用於宗教彌撒用酒。</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="year">1830s</div>
          <div class="event">
            <strong>商業釀酒的誕生</strong>
            <p>洛杉磯地區的 Jean-Louis Vignes 開始系統性商業釀酒，從法國引進更優質的葡萄品種。</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="year">1839</div>
          <div class="event">
            <strong>納帕谷首批葡萄</strong>
            <p>George Yount 在 Napa Valley 種植第一批葡萄，開啟了今日全球最知名葡萄酒產區的歷史篇章。</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="year">1880s</div>
          <div class="event">
            <strong>黃金年代與根瘤蚜蟲危機</strong>
            <p>Livermore Valley 的 Wente 和 Concannon 家族開創葡萄酒傳統；同期根瘤蚜蟲病席捲歐美，摧毀大量葡萄園。</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="year">1919–1933</div>
          <div class="event">
            <strong>禁酒令時代（Prohibition）</strong>
            <p>美國禁酒令幾乎摧毀了加州葡萄酒工業。少數酒莊以「教堂用酒」或「家用釀酒」為由倖存，Robert Mondavi 的 Beaulieu Vineyard 即是其中之一。</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="year">1976</div>
          <div class="event">
            <strong>🏆 巴黎評判（Judgment of Paris）</strong>
            <p>英國酒商 Steven Spurrier 在巴黎舉辦的盲品大賽中，納帕谷 Stag's Leap Wine Cellars 的 Cabernet Sauvignon 和 Chateau Montelena 的 Chardonnay，分別擊敗波爾多和勃根地頂級名莊，震驚全球。</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="year">1981</div>
          <div class="event">
            <strong>第一個 AVA 認定</strong>
            <p>Napa Valley 於 1981 年成為美國第二個（加州第一個）正式認定的 AVA，建立了加州葡萄酒的法定產區制度基礎。</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="year">2000s至今</div>
          <div class="event">
            <strong>永續農業革命</strong>
            <p>加州引領全美可持續葡萄栽培運動。Sonoma County 99% 的葡萄種植面積已取得可持續農業認證，成為全球葡萄酒界的環保典範。</p>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: '巴黎評判：1976年的革命',
    content: `<div class="paris-judgment">
      <div class="pj-banner">
        <h3>🏆 Judgment of Paris — 改寫世界葡萄酒版圖的一天</h3>
      </div>
      <div class="pj-content">
        <div class="pj-story">
          <p>1976 年 5 月 24 日，在法國巴黎，英國葡萄酒商人 Steven Spurrier 精心安排了一場由法國頂級侍酒師和葡萄酒評論家主持的盲品大賽。沒有人預料到，這場比賽將永遠改變葡萄酒的世界。</p>
          <div class="pj-results">
            <div class="pj-category">
              <h4>🥇 紅酒組（Cabernet Sauvignon）</h4>
              <div class="pj-winner">
                <strong>🏆 冠軍：Stag's Leap Wine Cellars 1973</strong>（Napa Valley）
              </div>
              <p>擊敗了波爾多的 Château Mouton-Rothschild、Château Haut-Brion 等頂級名莊</p>
            </div>
            <div class="pj-category">
              <h4>🥇 白酒組（Chardonnay）</h4>
              <div class="pj-winner">
                <strong>🏆 冠軍：Chateau Montelena 1973</strong>（Napa Valley）
              </div>
              <p>擊敗了勃根地的 Bâtard-Montrachet、Meursault 等白酒巨作</p>
            </div>
          </div>
        </div>
        <div class="pj-impact">
          <h4>🌍 影響與意義</h4>
          <ul>
            <li>打破了「偉大葡萄酒只來自法國」的百年神話</li>
            <li>開啟了新世界葡萄酒（澳洲、紐西蘭、智利等）全面崛起的時代</li>
            <li>Napa Valley 葡萄園地價和酒莊投資急速上升</li>
            <li>Time 雜誌 2006 年評選為「改變世界的 100 件大事」之一</li>
            <li>電影《Bottle Shock》（2008）以此事件為藍本</li>
          </ul>
        </div>
      </div>
    </div>`
  },

  {
    title: 'AVA 制度：加州如何定義產區',
    content: `<div class="ava-system">
      <h3>📜 美國 AVA（American Viticultural Area）制度</h3>
      <div class="ava-explanation">
        <p>AVA 是美國葡萄酒局（TTB）批准的葡萄酒法定產區，類似法國的 AOC 系統，但有重要區別：</p>
        <div class="ava-compare">
          <table class="compare-table">
            <thead>
              <tr><th>比較項目</th><th>美國 AVA</th><th>法國 AOC/AOP</th></tr>
            </thead>
            <tbody>
              <tr><td>管制範圍</td><td>主要管制地理邊界（地名標示）</td><td>品種、產量、釀造方法全面管制</td></tr>
              <tr><td>品種限制</td><td>無強制規定釀造品種</td><td>嚴格規定許可品種</td></tr>
              <tr><td>最低比例</td><td>75% 原料須來自該 AVA</td><td>100% 來自標示產區</td></tr>
              <tr><td>精神</td><td>強調地域特性，保持釀酒自由</td><td>保護傳統風格和產區特性</td></tr>
            </tbody>
          </table>
        </div>
        <div class="ava-hierarchy">
          <h4>AVA 的層級結構（以 Napa 為例）</h4>
          <div class="hierarchy-diagram">
            <div class="h-level">California（州）</div>
            <div class="h-arrow">↓</div>
            <div class="h-level">North Coast（大產區）</div>
            <div class="h-arrow">↓</div>
            <div class="h-level">Napa Valley AVA（主 AVA）</div>
            <div class="h-arrow">↓</div>
            <div class="h-level">Oakville / Rutherford / Stags Leap District（子 AVA）</div>
          </div>
        </div>
        <div class="ava-facts">
          <h4>加州 AVA 重要數字</h4>
          <ul>
            <li>📌 全加州共 154 個 AVA（持續增加中）</li>
            <li>📌 Napa Valley 包含 16 個子 AVA</li>
            <li>📌 Sonoma County 擁有 19 個 AVA</li>
            <li>📌 加州 AVA 面積從幾百英畝到數十萬英畝不等</li>
          </ul>
        </div>
      </div>
    </div>`
  },

  {
    title: '加州六大產區群概覽',
    content: `<div class="ca-regions-overview">
      <h3>🗺️ 加州六大產區群</h3>
      <div class="regions-grid">
        <div class="region-card nc">
          <div class="rc-header">
            <span class="rc-flag">🌉</span>
            <h4>North Coast（北海岸）</h4>
          </div>
          <div class="rc-body">
            <p class="rc-counties">Napa、Sonoma、Mendocino、Lake County</p>
            <p class="rc-feature">全加州逾半數酒莊所在地，Napa 的 Cabernet、Sonoma 的 Pinot Noir，是世界最知名的葡萄酒地帶。</p>
            <div class="rc-grapes">🍇 Cab Sauv、Pinot Noir、Zinfandel、Chardonnay</div>
          </div>
        </div>
        <div class="region-card cc">
          <div class="rc-header">
            <span class="rc-flag">🌊</span>
            <h4>Central Coast（中央海岸）</h4>
          </div>
          <div class="rc-body">
            <p class="rc-counties">Monterey、Paso Robles、Santa Barbara、Livermore Valley、Santa Cruz Mountains</p>
            <p class="rc-feature">太平洋海霧塑造優雅酸度。Paso Robles 的 Rhône 品種、Santa Barbara 的 Pinot 與 Chardonnay 各擅勝場。</p>
            <div class="rc-grapes">🍇 Pinot Noir、Chardonnay、Syrah、Grenache</div>
          </div>
        </div>
        <div class="region-card sf">
          <div class="rc-header">
            <span class="rc-flag">⛏️</span>
            <h4>Sierra Foothills（山麓丘陵）</h4>
          </div>
          <div class="rc-body">
            <p class="rc-counties">El Dorado、Amador、Calaveras County</p>
            <p class="rc-feature">淘金熱時代留下的葡萄園傳奇，Zinfandel 老藤（有些樹齡逾 130 年）是最大特色。</p>
            <div class="rc-grapes">🍇 Zinfandel 老藤、Barbera、Syrah</div>
          </div>
        </div>
        <div class="region-card iv">
          <div class="rc-header">
            <span class="rc-flag">🌾</span>
            <h4>Inland Valleys（內陸谷地）</h4>
          </div>
          <div class="rc-body">
            <p class="rc-counties">Central Valley（Lodi、Madera、Fresno）、Sacramento Valley</p>
            <p class="rc-feature">加州葡萄酒的量產中心，但 Lodi 的精品 Old Vine Zinfandel 近年受到高度重視。</p>
            <div class="rc-grapes">🍇 Zinfandel、Chardonnay、Merlot、Cabernet</div>
          </div>
        </div>
        <div class="region-card sc">
          <div class="rc-header">
            <span class="rc-flag">☀️</span>
            <h4>Southern California（南加州）</h4>
          </div>
          <div class="rc-body">
            <p class="rc-counties">Temecula Valley、San Diego County</p>
            <p class="rc-feature">地中海氣候，旅遊與葡萄酒產業緊密結合。Temecula Valley 是南加州最重要的葡萄酒旅遊目的地。</p>
            <div class="rc-grapes">🍇 Cabernet Franc、Chardonnay、Sauvignon Blanc</div>
          </div>
        </div>
        <div class="region-card fn">
          <div class="rc-header">
            <span class="rc-flag">🌲</span>
            <h4>Far North California（遠北加州）</h4>
          </div>
          <div class="rc-body">
            <p class="rc-counties">Humboldt、Shasta、Trinity County</p>
            <p class="rc-feature">涼爽氣候的葡萄酒新邊疆，少數酒莊正在開拓這片原始土地的釀酒潛力。</p>
            <div class="rc-grapes">🍇 Pinot Noir、Riesling、涼氣候品種</div>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: '加州葡萄酒的風土特色',
    content: `<div class="ca-terroir">
      <h3>🌍 地中海氣候與多元風土</h3>
      <div class="terroir-content">
        <div class="climate-section">
          <h4>氣候類型</h4>
          <p>加州主要葡萄酒產區屬<strong>地中海型氣候（Mediterranean Climate）</strong>：夏季炎熱乾燥、冬季溫和多雨，為葡萄種植提供理想條件。</p>
          <div class="climate-factors">
            <div class="factor">
              <h5>🌊 太平洋影響</h5>
              <p>冷洋流和早晨海霧帶來天然降溫，讓沿海產區（如 Carneros、Santa Ynez Valley）能種植優雅的 Pinot Noir 和 Chardonnay。</p>
            </div>
            <div class="factor">
              <h5>🏔️ 山谷地形</h5>
              <p>谷口方向決定了海霧滲透深度。Napa Valley 南端受海霧影響較多（涼爽），北端（Calistoga）更溫暖，造就 16 個子 AVA 的風格差異。</p>
            </div>
            <div class="factor">
              <h5>🌡️ 晝夜溫差</h5>
              <p>加州許多產區夜晚溫度驟降，保留葡萄的天然酸度，使酒款更具陳年潛力和複雜度。</p>
            </div>
          </div>
        </div>
        <div class="soil-section">
          <h4>多元土壤類型</h4>
          <ul>
            <li><strong>火山岩（Volcanic）：</strong>Napa 北部 Calistoga，賦予礦石感</li>
            <li><strong>礫石（Gravel/Alluvial）：</strong>Oakville、Rutherford，波爾多式 Cabernet 完美風土</li>
            <li><strong>石灰岩（Limestone）：</strong>Santa Cruz Mountains，稀有但卓越（Ridge Monte Bello）</li>
            <li><strong>黏土（Clay）：</strong>Carneros，保水性強，適合 Pinot Noir 和 Chardonnay</li>
            <li><strong>沙地（Sandy）：</strong>Lodi，有助於根瘤蚜蟲天然防治</li>
          </ul>
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
            question: '「巴黎評判（Judgment of Paris）」發生在哪一年？',
            options: ['A. 1966年', 'B. 1976年', 'C. 1986年', 'D. 1996年'],
            correct: 1,
            explanation: '1976 年 5 月 24 日，在 Steven Spurrier 主辦的巴黎盲品賽中，納帕谷的 Stag\'s Leap Wine Cellars（紅酒）和 Chateau Montelena（白酒）分別奪冠，震驚世界。'
          },
          {
            type: 'single',
            question: '加州約生產美國多少比例的葡萄酒？',
            options: ['A. 約 50%', 'B. 約 65%', 'C. 約 75%', 'D. 約 85%'],
            correct: 3,
            explanation: '加州生產美國約 85% 的葡萄酒，年產量超過 8 億瓶，是美國無可爭議的葡萄酒中心。'
          },
          {
            type: 'single',
            question: 'AVA 制度與法國 AOC 制度最大的區別是什麼？',
            options: ['A. AVA 管制更嚴格', 'B. AVA 主要管制地理邊界，不強制規定釀造品種', 'C. AVA 要求 100% 原料來自產區', 'D. AVA 只存在於加州'],
            correct: 1,
            explanation: 'AVA 主要劃定地理邊界，不像法國 AOC 那樣嚴格規定釀造品種和方法。標示 AVA 的葡萄酒只需 75% 原料來自該產區即可。'
          },
          {
            type: 'single',
            question: 'Napa Valley 獲得 AVA 認定是在哪一年，使其成為加州第一個 AVA？',
            options: ['A. 1976年', 'B. 1981年', 'C. 1985年', 'D. 1990年'],
            correct: 1,
            explanation: 'Napa Valley 於 1981 年成為加州第一個、美國第二個正式認定的 AVA，建立了加州葡萄酒法定產區制度的基礎。'
          },
          {
            type: 'single',
            question: '加州最北的葡萄酒產區群組稱為？',
            options: ['A. Central Coast', 'B. Sierra Foothills', 'C. North Coast', 'D. Far North California'],
            correct: 2,
            explanation: 'North Coast（北海岸）是加州最知名的葡萄酒產區群，包含 Napa、Sonoma、Mendocino 和 Lake County，擁有全加州逾半數的葡萄酒酒莊。'
          }
        ]
      }
    }
  }
]
