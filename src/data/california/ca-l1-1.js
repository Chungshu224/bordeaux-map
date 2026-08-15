/**
 * CA-L1-1 認識加州葡萄酒：歷史、地位與巴黎評判
 * 加州葡萄酒的歷史脈絡、產業規模、巴黎評判與 AVA 法定產區制度
 * 資料來源：discovercaliforniawines.com（California Wine Institute）、Wine Institute（wineinstitute.org）、
 * California Association of Winegrape Growers（cawg.org）、TTB（ttb.gov）、napavintners.com、
 * Stag's Leap Wine Cellars 官網（judgment-of-paris 頁面）、Smithsonian Magazine、Wine Spectator、Decanter、
 * UC Davis Library 加州釀酒史、This Day in Wine History
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          歡迎來到加州葡萄酒課程！加州是全美 AVA（美國葡萄酒法定產區）數量最多的州，生產美國約 85% 的葡萄酒。從 1769 年方濟各會傳教士種下第一批葡萄，到 1976 年震驚世界的「巴黎評判」——加州葡萄酒是新世界葡萄酒革命的核心。2026 年正是巴黎評判 50 週年，全球酒界正重新回顧這場改寫歷史的盲品賽。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🏛️ 了解加州葡萄酒的歷史脈絡</h4>
            <p>從西班牙傳教士 1769 年種植第一批葡萄，經歷根瘤蚜蟲蟲害、禁酒令，到 1976 年「巴黎評判」改寫世界葡萄酒版圖</p>
          </div>
          <div class="point-item">
            <h4>🗺️ 掌握加州六大產區群</h4>
            <p>North Coast、Central Coast、Sierra Foothills、Inland Valleys、Southern California、Far North California</p>
          </div>
          <div class="point-item">
            <h4>🍇 認識 AVA 制度</h4>
            <p>理解美國 AVA 法定產區制度與法國 AOC 的異同，掌握加州逾 150 個 AVA 的層級架構與命名邏輯</p>
          </div>
          <div class="point-item">
            <h4>🌍 加州葡萄酒的全球影響力與產業規模</h4>
            <p>了解加州如何成為全球重要的葡萄酒生產地，以及對美國經濟、全球葡萄酒文化的深遠影響</p>
          </div>
        </div>
        <p class="intro-conclusion">
          完成本課程後，您將建立對加州葡萄酒的完整歷史觀與產區架構，為深入學習納帕、索諾馬等重要產區打下基礎。
        </p>
      </div>
    `
  },

  {
    component: 'CaliforniaRegionMapSlide',
    title: '加州葡萄酒產區總覽',
    componentProps: {
      slide: {
        title: '加州葡萄酒產區總覽',
        description: '從 North Coast 的 Napa 到 Central Coast，再到 Sierra Foothills——加州葡萄酒地理版圖一覽',
        mapGroup: 'overview',
      }
    }
  },

  {
    title: '為什麼選擇加州葡萄酒？',
    highlights: [
      { id: 1, icon: '🏆', title: '巴黎評判傳奇', content: '1976 年納帕 Cabernet Sauvignon 和 Chardonnay 在盲品中擊敗法國頂級佳釀，震撼全球葡萄酒界' },
      { id: 2, icon: '🍷', title: '全美 85% 葡萄酒', content: '加州年產量占全美約 85%，是美國葡萄酒工業的絕對核心' },
      { id: 3, icon: '💰', title: '73 億美元經濟規模', content: '加州葡萄酒與葡萄種植業每年為加州經濟貢獻約 730 億美元，支撐超過 42 萬個加州就業機會' }
    ],
    content: `<div class="ca-intro">
      <p class="lead-text">加州（California）是全球最重要的葡萄酒產區之一，坐擁多樣化的地理環境與氣候，從太平洋沿岸的涼爽海霧到內陸的炎熱山谷，孕育出豐富多彩的葡萄酒風格。</p>
      <div class="key-facts">
        <div class="fact-item"><strong>AVA 數量：</strong>逾 150 個法定葡萄酒產區（American Viticultural Area），是全美 AVA 最多的州</div>
        <div class="fact-item"><strong>種植面積：</strong>約 61 萬英畝葡萄園（2023 年 USDA/NASS 統計），主要品種為 Chardonnay 與 Cabernet Sauvignon</div>
        <div class="fact-item"><strong>全美占比：</strong>生產美國約 85% 的葡萄酒</div>
        <div class="fact-item"><strong>出口市場：</strong>行銷網絡遍及 140 多個國家；加州占美國葡萄酒出口總值約 95%</div>
        <div class="fact-item"><strong>經濟規模：</strong>2022 年 Wine Institute／WineAmerica 研究顯示，加州葡萄酒與釀酒葡萄產業每年為加州帶來約 730 億美元經濟效益，全美則達 1,705 億美元</div>
        <div class="fact-item"><strong>就業與旅遊：</strong>支撐約 42.2 萬個加州本地就業機會（全美合計逾 110 萬個），每年吸引 2,500 萬人次酒莊旅遊</div>
        <div class="fact-item"><strong>可持續種植：</strong>加州是全美可持續葡萄栽培的領導者，Sonoma County 更達成近乎全面的第三方永續認證</div>
      </div>
      <div class="why-learn">
        <h4>🎯 學習加州葡萄酒的三大理由</h4>
        <ul>
          <li><strong>Cabernet Sauvignon 的新王國：</strong>Napa Valley 是全球頂級 Cabernet Sauvignon 的重要產地，與波爾多並駕齊驅</li>
          <li><strong>創新與傳統的交匯：</strong>加州兼具歐洲釀酒傳統與本土創新精神，開創新世界釀酒典範</li>
          <li><strong>多元地理與品種：</strong>逾 150 個 AVA 涵蓋上百種釀酒葡萄，每個產區都有獨特風土表達</li>
        </ul>
      </div>
    </div>`
  },

  {
    title: '加州葡萄酒的歷史',
    content: `<div class="history-section">
      <p class="history-intro">從西班牙傳教士引入葡萄，歷經兩次根瘤蚜蟲危機與禁酒令，到 1976 年巴黎評判震驚世界 ——<span class="intro-highlight">250 多年釀酒史重新定義了「新世界葡萄酒」的意義</span></p>
    </div>
    <div class="timeline-container">
      <div class="timeline-item">
        <div class="timeline-badge ancient">1769</div>
        <div class="timeline-content"><strong>🙏 傳教士的葡萄園</strong><p>方濟各會（Franciscan）神父在聖地牙哥建立加州第一座教會 Mission San Diego de Alcalá，並種下加州第一批葡萄藤——即後來被稱為「Mission」品種的歐洲種葡萄（Vitis vinifera），最初用於宗教彌撒用酒。此品種一路盛行到 1880 年代才逐漸被更優質的品種取代。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge medieval">1830s</div>
        <div class="timeline-content"><strong>商業釀酒的誕生</strong><p>洛杉磯地區的 Jean-Louis Vignes 開始系統性商業釀酒，從法國引進更優質的葡萄品種，是加州第一位以歐洲標準經營葡萄園的釀酒人。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge doc">1839</div>
        <div class="timeline-content"><strong>🍇 納帕谷首批葡萄</strong><p>George Yount 在 Napa Valley 種植第一批葡萄，開啟了今日全球最知名葡萄酒產區的歷史篇章。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge">1857</div>
        <div class="timeline-content"><strong>🏛️ 「加州釀酒之父」創立 Buena Vista</strong><p>匈牙利裔的 Agoston Haraszthy 伯爵在 Sonoma 創立 Buena Vista Winery，是加州第一座具規模的「精品酒莊」。他從歐洲引進逾 300 個葡萄品種，被後世尊稱為「加州釀酒之父」。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge renaissance">1880s</div>
        <div class="timeline-content"><strong>黃金年代與第一次根瘤蚜蟲危機</strong><p>Livermore Valley 的 Wente 和 Concannon 家族開創葡萄酒傳統；同期根瘤蚜蟲病（Phylloxera）席捲加州與歐洲，摧毀大量葡萄園。解方是嫁接於抗蟲的美洲原生葡萄砧木（rootstock）之上，此技術沿用至今。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge austria">1919–1933</div>
        <div class="timeline-content"><strong>禁酒令時代（Prohibition）</strong><p>美國憲法第 18 修正案實施禁酒令，幾乎摧毀了加州葡萄酒工業。少數酒莊以「教堂彌撒用酒」或「家用釀酒」（法律允許家戶每年釀造少量葡萄酒）為由倖存。1933 年禁酒令廢除後，產業歷經數十年才逐漸復甦，許多葡萄園在禁酒令期間已改種食用葡萄或直接荒廢。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge">1966</div>
        <div class="timeline-content"><strong>🍷 現代精品酒莊時代開啟</strong><p>Robert Mondavi 在 Oakville 創立同名酒莊，率先在酒標上標示葡萄品種名稱、推廣 Fumé Blanc 等行銷創新，象徵加州從量產走向精品化的分水嶺。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge sparkling">1976</div>
        <div class="timeline-content"><strong>🏆 巴黎評判（Judgment of Paris）</strong><p>英國酒商 Steven Spurrier 在巴黎舉辦的盲品大賽中，納帕谷 Stag's Leap Wine Cellars 的 Cabernet Sauvignon 和 Chateau Montelena 的 Chardonnay 分別擊敗波爾多和布根地頂級名莊，震驚全球。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge doc">1981</div>
        <div class="timeline-content"><strong>第一個 AVA 認定</strong><p>Napa Valley 於 1981 年成為美國第二個（加州第一個）正式認定的 AVA，建立了加州葡萄酒的法定產區制度基礎。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge">1982–1990s</div>
        <div class="timeline-content"><strong>⚠️ 第二次根瘤蚜蟲危機（AXR1 事件）</strong><p>1950–70 年代廣泛種植的 AXR1 砧木被發現對新型根瘤蚜蟲（Biotype B）沒有足夠抗性。1980 年代起蟲害再度重創 Napa 與其他北加州產區，估計近三分之二的納帕葡萄園被迫剷除重植，重建成本超過 10 億美元——但也促成了更精細的地塊選址、砧木選擇與種植密度研究，間接提升了整體品質。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge">2006</div>
        <div class="timeline-content"><strong>🔁 巴黎評判 30 週年重賽</strong><p>Steven Spurrier 在倫敦與納帕同步舉辦重賽，改以陳年後的原始年份紅酒進行盲品。結果 Ridge Vineyards 的 1971 Monte Bello 奪冠，加州酒款包辦前五名，證明加州頂級 Cabernet 同樣具備長期陳年潛力。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge modern">2000s 至今</div>
        <div class="timeline-content"><strong>永續農業革命</strong><p>加州引領全美可持續葡萄栽培運動。Sonoma County 是全球第一個達成近乎全面（99%）第三方可持續認證種植面積的產區（2019 年達成），成為全球葡萄酒界的環保典範。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge modern">2026</div>
        <div class="timeline-content"><strong>🎉 巴黎評判 50 週年</strong><p>全球酒界以展覽、品鑑會與紀念活動慶祝這場改變世界葡萄酒史的盲品賽半世紀紀念，Napa Valley 再次成為國際媒體焦點。</p></div>
      </div>
    </div>
    <div class="stat-grid">
      <div class="stat-box"><div class="stat-number">1769</div><div class="stat-label">首批葡萄種植</div></div>
      <div class="stat-box"><div class="stat-number">1976</div><div class="stat-label">巴黎評判震驚世界</div></div>
      <div class="stat-box"><div class="stat-number">150+</div><div class="stat-label">加州 AVA 法定產區</div></div>
      <div class="stat-box"><div class="stat-number">99%</div><div class="stat-label">Sonoma 永續認證面積</div></div>
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
          <p>1976 年 5 月 24 日，英國葡萄酒商人 Steven Spurrier 與美國合夥人 Patricia Gallagher 在巴黎精心安排了一場盲品大賽，邀請 9 位法國頂級侍酒師、酒商與評論家組成評審團——原意只是紀念美國建國 200 週年的小型宣傳活動，沒有人預料到，這場比賽將永遠改變葡萄酒的世界。</p>
          <div class="pj-results">
            <div class="pj-category">
              <h4>🥇 紅酒組（Cabernet Sauvignon，6 款加州對 4 款波爾多）</h4>
              <div class="pj-winner">
                <strong>🏆 冠軍：Stag's Leap Wine Cellars 1973</strong>（Napa Valley，Warren Winiarski 創立僅 3 年後的酒莊首個年份之一）
              </div>
              <p>擊敗了波爾多的 Château Mouton-Rothschild 1970、Château Haut-Brion 1970、Château Montrose 1970、Château Léoville-Las-Cases 1971 等頂級名莊</p>
            </div>
            <div class="pj-category">
              <h4>🥇 白酒組（Chardonnay，6 款加州對 4 款布根地）</h4>
              <div class="pj-winner">
                <strong>🏆 冠軍：Chateau Montelena 1973</strong>（Napa Valley，克羅埃西亞裔釀酒師 Mike Grgich 主釀）
              </div>
              <p>擊敗了布根地的 Bâtard-Montrachet（Ramonet-Prudhon）、Meursault Charmes（Roulot）、Puligny-Montrachet（Domaine Leflaive）等白酒巨作</p>
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
            <li>電影《Bottle Shock》（2008）以此事件為藍本，Chateau Montelena 是主角酒莊</li>
            <li>2006 年「30 週年重賽」中，Ridge Vineyards 的 1971 Monte Bello 再次奪冠，加州酒款包辦前五名，證明成績並非曇花一現</li>
            <li>2026 年適逢 50 週年，全球酒界再度以紀念活動回顧這場「新世界對舊世界」的歷史轉捩點</li>
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
        <p>AVA 是美國菸酒稅務貿易局（TTB, Alcohol and Tobacco Tax and Trade Bureau）批准的葡萄酒法定產區，類似法國的 AOC 系統，但有重要區別：</p>
        <div class="ava-compare">
          <table class="compare-table">
            <thead>
              <tr><th>比較項目</th><th>美國 AVA</th><th>法國 AOC/AOP</th></tr>
            </thead>
            <tbody>
              <tr><td>管制範圍</td><td>主要管制地理邊界（地名標示）</td><td>品種、產量、釀造方法全面管制</td></tr>
              <tr><td>品種限制</td><td>無強制規定釀造品種</td><td>嚴格規定許可品種</td></tr>
              <tr><td>最低比例</td><td>標示 AVA 須 85% 原料來自該 AVA；標示縣（County）則為 75%；加州州法規定標示「California」須 100% 州內原料</td><td>100% 來自標示產區</td></tr>
              <tr><td>核准機關</td><td>聯邦 TTB，須經地質、氣候、歷史邊界等資料佐證的正式申請程序</td><td>法國 INAO（國家原產地命名局）</td></tr>
              <tr><td>精神</td><td>強調地域特性，保持釀酒自由</td><td>保護傳統風格和產區特性</td></tr>
            </tbody>
          </table>
        </div>
        <div class="ava-hierarchy">
          <h4>AVA 的層級結構（以 Napa 為例）</h4>
          <div class="hierarchy-diagram">
            <div class="h-level">California（州）</div>
            <div class="h-arrow">↓</div>
            <div class="h-level">North Coast（大產區，非正式 AVA，屬行銷分類）</div>
            <div class="h-arrow">↓</div>
            <div class="h-level">Napa Valley AVA（主 AVA，1981 年認定）</div>
            <div class="h-arrow">↓</div>
            <div class="h-level">Oakville / Rutherford / Stags Leap District（子 AVA，「巢狀 AVA」nested AVA）</div>
          </div>
          <p class="ava-note-inline">值得留意：像「North Coast」「Central Coast」這類「產區群」名稱，是產業與行銷上慣用的地理分類，並不是正式 TTB 認定的 AVA；真正具法律效力、可印在酒標上的地理標示是 AVA 本身（如 Napa Valley）與其子 AVA。</p>
        </div>
        <div class="ava-facts">
          <h4>加州 AVA 重要數字</h4>
          <ul>
            <li>📌 全加州共逾 150 個 AVA，是全美 AVA 數量最多的州（持續增加中）</li>
            <li>📌 Napa Valley 主 AVA 之下巢狀著 16 個歷史悠久的子 AVA，2024 年底新增 Crystal Springs 後已達 17 個</li>
            <li>📌 Sonoma County 擁有 19 個 AVA，是加州擁有 AVA 數量最多的郡之一</li>
            <li>📌 加州 AVA 面積差異極大：小至數百英畝（如 Napa 的 Wild Horse Valley），大至橫跨數郡、數十萬英畝（如 Central Coast 底下的 San Francisco Bay AVA）</li>
            <li>📌 一個 AVA 可以橫跨多個郡（如 Los Carneros 橫跨 Napa 與 Sonoma），一個郡也可以同時是一個 AVA 名稱（如 Sonoma County AVA）</li>
          </ul>
        </div>
      </div>
    </div>`
  },

  {
    title: '加州在全球葡萄酒版圖的位置',
    content: `<div class="ca-global-standing">
      <h3>🌍 若加州是一個「國家」</h3>
      <p class="lead-text">根據國際葡萄與葡萄酒組織（OIV）與行業統計，全球葡萄酒產量長期由義大利、法國、西班牙三國主導，合計占全球總產量近半。若把加州獨立視為一個國家，其產量足以排進全球前四大——僅次於義大利、法國、西班牙，領先阿根廷、智利、澳洲、南非等傳統新舊世界產酒大國。</p>
      <table class="compare-table">
        <thead>
          <tr><th>排名</th><th>國家／地區</th><th>備註</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>🇮🇹 義大利</td><td>全球產量最大，占全球近五分之一</td></tr>
          <tr><td>2</td><td>🇫🇷 法國</td><td>全球第二大產量國</td></tr>
          <tr><td>3</td><td>🇪🇸 西班牙</td><td>全球第三大產量國</td></tr>
          <tr><td>（4）</td><td>🇺🇸 加州（若視為國家）</td><td>美國以外全球最大單一產酒地，占全美產量約 85%</td></tr>
        </tbody>
      </table>
      <p class="global-note">💡 值得留意的是，「產量排名」反映的是「量」，加州葡萄酒真正撼動世界的地方在於「質」——1976 年巴黎評判證明了加州頂級酒款的品質足以與法國最偉大的名莊並駕齊驅，這也是本課程開篇特別介紹巴黎評判的原因：加州的全球地位，是量與質雙重意義上的領先。</p>
    </div>`
  },

  {
    title: '美國葡萄酒標示規則全解析',
    content: `<div class="ca-label-rules">
      <h3>🏷️ 看懂酒標：三個關鍵最低比例</h3>
      <p>美國聯邦法規（27 CFR Part 4，由 TTB 執行）針對酒標上常見的三種標示——品種、產區、年份——各自訂有不同的最低比例門檻，是侍酒師判讀美國酒標時的基本功。</p>
      <table class="compare-table">
        <thead>
          <tr><th>標示類型</th><th>最低比例要求</th><th>範例</th></tr>
        </thead>
        <tbody>
          <tr><td>🍇 品種標示（Varietal）</td><td>至少 75% 須為該品種</td><td>標示「Cabernet Sauvignon」，須至少 75% 為此品種，其餘可混調其他品種</td></tr>
          <tr><td>📍 產區標示 — AVA</td><td>至少 85% 須來自該 AVA</td><td>標示「Napa Valley」，須 85% 原料來自 Napa Valley AVA 範圍內</td></tr>
          <tr><td>📍 產區標示 — 縣（County）</td><td>至少 75% 須來自該縣</td><td>標示「Napa County」，門檻低於標示 AVA</td></tr>
          <tr><td>📍 產區標示 — 州（State）</td><td>加州州法要求 100%</td><td>標示「California」，須 100% 加州州內原料（比聯邦最低標準更嚴格）</td></tr>
          <tr><td>📅 年份標示（Vintage）</td><td>AVA 標示須 95%；州／縣標示則為 85%</td><td>「2021 Napa Valley Cabernet Sauvignon」須 95% 來自 2021 年採收</td></tr>
        </tbody>
      </table>
      <p class="label-note">🔍 <strong>侍酒師實務小技巧：</strong>酒標標示的地理範圍愈精確（子 AVA ＞ AVA ＞ 縣 ＞ 州），法規要求的最低比例通常愈高，這也是為什麼標示「Oakville」（子 AVA）的酒款，一般會被認為比只標示「California」的酒款有更明確的風土指向性。</p>
    </div>`
  },

  {
    title: '加州葡萄品種版圖',
    content: `<div class="ca-grape-landscape">
      <h3>🍇 加州種植面積最大的葡萄品種</h3>
      <p class="lead-text">根據美國農業部（USDA/NASS）加州葡萄種植面積報告，加州釀酒葡萄種植總面積約 61 萬英畝。Chardonnay 是種植面積最大的白葡萄品種，Cabernet Sauvignon 則是種植面積最大的紅葡萄品種，兩者長年穩居加州釀酒葡萄榜首。</p>
      <div class="stat-grid">
        <div class="stat-box"><div class="stat-number">🥇</div><div class="stat-label">Chardonnay — 白酒之王，遍布全州各產區</div></div>
        <div class="stat-box"><div class="stat-number">🥇</div><div class="stat-label">Cabernet Sauvignon — 紅酒之王，Napa 的招牌品種</div></div>
        <div class="stat-box"><div class="stat-number">🍒</div><div class="stat-label">Pinot Noir — Sonoma、Central Coast 涼爽區的明星</div></div>
        <div class="stat-box"><div class="stat-number">🍇</div><div class="stat-label">Zinfandel — 加州「原生」代表品種，老藤傳奇眾多</div></div>
      </div>
      <div class="grape-notes">
        <h4>值得認識的其他重要品種</h4>
        <ul>
          <li><strong>French Colombard、Rubired 等：</strong>主要種植於 Central Valley，用於大量生產與調配，鮮少單一品種裝瓶</li>
          <li><strong>Merlot：</strong>常作為 Cabernet Sauvignon 的混調夥伴，也有優質單一品種裝瓶（尤其 Napa、Sonoma）</li>
          <li><strong>Syrah、Grenache、Mourvèdre（GSM）：</strong>Rhône 品種在 Paso Robles、Santa Barbara 表現突出</li>
          <li><strong>Sauvignon Blanc：</strong>Robert Mondavi 於 1968 年將其重新命名行銷為「Fumé Blanc」，帶動全美風潮</li>
        </ul>
      </div>
    </div>`
  },

  {
    title: '加州葡萄酒的產業結構：巨頭與精品並存',
    content: `<div class="ca-industry-structure">
      <h3>🏭 從量產巨頭到車庫精品酒莊</h3>
      <p class="lead-text">加州葡萄酒產業的一大特色，是「量產巨頭」與「精品車庫酒莊」並存的雙軌結構——兩者共同構成加州葡萄酒 85% 全美占比的完整版圖。</p>
      <div class="industry-grid">
        <div class="industry-card">
          <h4>🏭 E&J Gallo Winery（1933 年創立）</h4>
          <p>由 Ernest 與 Julio Gallo 兄弟於 1933 年在 Modesto 創立，兩人幾乎沒有釀酒經驗，靠著向圖書館借閱發酵手冊自學起家。如今是全球最大的家族自營酒莊，也是全球產量最大的酒莊之一，旗下品牌橫跨大眾市場（如 Barefoot、Apothic）到精品酒莊（如 Napa 的 William Hill、Louis M. Martini）。</p>
        </div>
        <div class="industry-card">
          <h4>💎 「車庫酒莊」（Garagiste）精品傳統</h4>
          <p>與 Gallo 這類巨頭相對的，是 Screaming Eagle、Harlan Estate 這類年產僅數百至數千箱的「膜拜酒」精品莊園，往往由一位釀酒師或家族親自照料每一株葡萄藤，產量稀少但價格與評價極高，構成加州葡萄酒「金字塔頂端」的品牌形象。</p>
        </div>
      </div>
      <p class="industry-note">💡 這種「巨頭撐起產量、精品撐起聲望」的雙軌結構，也是理解加州葡萄酒產業的重要框架：一般消費市場的日常餐酒，與拍賣會上動輒數萬美元的膜拜酒，其實同屬「加州葡萄酒」這個大傘之下。</p>
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
            <p class="rc-feature">淘金熱時代留下的葡萄園傳奇，Zinfandel 老藤（有些樹齡逾 100 年）是最大特色。</p>
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
      <p class="regions-note">💡 下一課將深入探討這六大產區群的地理與氣候細節；第 3、4 課再分別深入 Napa Valley 與 Sonoma County 這兩個 North Coast 的旗艦產區。</p>
    </div>`
  },

  {
    title: '加州葡萄酒的風土特色',
    content: `<div class="ca-terroir">
      <h3>🌍 地中海氣候與多元風土</h3>
      <div class="terroir-content">
        <div class="climate-section">
          <h4>氣候類型</h4>
          <p>加州主要葡萄酒產區屬<strong>地中海型氣候（Mediterranean Climate）</strong>：夏季炎熱乾燥、冬季溫和多雨，為葡萄種植提供理想條件。這與全球僅存的少數地中海型氣候帶（地中海沿岸、智利中部、南非西開普、澳洲西南部）性質相近，是新世界精品葡萄酒的共同氣候基礎。</p>
          <div class="climate-factors">
            <div class="factor">
              <h5>🌊 太平洋影響</h5>
              <p>冷洋流和早晨海霧帶來天然降溫，讓沿海產區（如 Carneros、Santa Ynez Valley）能種植優雅的 Pinot Noir 和 Chardonnay。</p>
            </div>
            <div class="factor">
              <h5>🏔️ 山谷地形</h5>
              <p>谷口方向決定了海霧滲透深度。Napa Valley 南端受海霧影響較多（涼爽），北端（Calistoga）更溫暖，造就多個子 AVA 的風格差異。</p>
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
            <li><strong>沙地（Sandy）：</strong>Lodi，有助於根瘤蚜蟲天然防治；也是 Russian River Valley「Goldridge」土壤的核心成分</li>
          </ul>
        </div>
      </div>
    </div>`
  },

  {
    component: 'AVAHierarchySlide',
    title: '🗺️ 美國 AVA 階層系統互動詳解',
    description: '點選 子 AVA / AVA / 郡 / 州 / 美國，查看法定規範、葡萄含量下限、案例與與歐洲系統對照'
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
            explanation: '加州生產美國約 85% 的葡萄酒，是美國無可爭議的葡萄酒中心。'
          },
          {
            type: 'single',
            question: 'AVA 制度與法國 AOC 制度最大的區別是什麼？',
            options: ['A. AVA 管制更嚴格', 'B. AVA 主要管制地理邊界，不強制規定釀造品種', 'C. AVA 要求 100% 原料來自產區', 'D. AVA 只存在於加州'],
            correct: 1,
            explanation: 'AVA 主要劃定地理邊界，不像法國 AOC 那樣嚴格規定釀造品種和方法。標示 AVA 的葡萄酒須有 85% 原料來自該產區（標示縣則為 75%）。'
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
            question: '1980 年代重創 Napa Valley 的「AXR1 事件」是什麼問題？',
            options: ['A. 一種新型除草劑污染葡萄園', 'B. 廣泛使用的 AXR1 砧木不敵新型根瘤蚜蟲，導致大量葡萄園需剷除重植', 'C. 一種葡萄病毒導致 Chardonnay 減產', 'D. 加州政府禁止使用 AXR1 品種釀酒'],
            correct: 1,
            explanation: '1950–70 年代廣泛種植的 AXR1 砧木對新型根瘤蚜蟲（Biotype B）抗性不足，1980 年代起蟲害重創 Napa，近三分之二的葡萄園被迫剷除重植，重建成本超過 10 億美元。'
          },
          {
            type: 'single',
            question: '加州最北的葡萄酒產區群組稱為？',
            options: ['A. Central Coast', 'B. Sierra Foothills', 'C. North Coast', 'D. Far North California'],
            correct: 3,
            explanation: 'Far North California（遠北加州）涵蓋 Humboldt、Shasta、Trinity 等縣，是加州葡萄酒版圖最北、開發程度最低的新邊疆；North Coast 雖然名稱有「北」字，實際指的是舊金山灣以北的 Napa、Sonoma 一帶。'
          },
          {
            type: 'single',
            question: '2006 年「巴黎評判 30 週年重賽」中，哪一款加州酒奪得紅酒組冠軍？',
            options: ['A. Stag\'s Leap Wine Cellars', 'B. Ridge Vineyards Monte Bello', 'C. Opus One', 'D. Screaming Eagle'],
            correct: 1,
            explanation: 'Ridge Vineyards 的 1971 Monte Bello（Santa Cruz Mountains）在 2006 年由 Steven Spurrier 於倫敦與納帕同步舉辦的重賽中奪冠，加州酒款更包辦了前五名，證明其長期陳年潛力。'
          },
          {
            type: 'single',
            question: '根據 2022 年 Wine Institute／WineAmerica 的產業研究，加州葡萄酒與釀酒葡萄產業每年為加州帶來多少經濟效益？',
            options: ['A. 約 10 億美元', 'B. 約 730 億美元', 'C. 約 1,700 億美元', 'D. 約 5,000 億美元'],
            correct: 1,
            explanation: '該研究顯示加州葡萄酒與釀酒葡萄產業每年為加州經濟貢獻約 730 億美元（全美合計約 1,705 億美元），並支撐約 42.2 萬個加州本地就業機會。'
          },
          {
            type: 'single',
            question: '若把加州視為一個獨立「國家」，其葡萄酒產量在全球大約排名第幾？',
            options: ['A. 第 1 名', 'B. 第 4 名（僅次於義大利、法國、西班牙）', 'C. 第 10 名', 'D. 第 20 名以外'],
            correct: 1,
            explanation: '全球葡萄酒產量長期由義大利、法國、西班牙三國主導。若加州被視為獨立國家，其產量足以排進全球前四大，僅次於這三國，領先阿根廷、智利、澳洲等傳統產酒大國。'
          },
          {
            type: 'single',
            question: '一支酒標示「Napa Valley」（AVA 標示）時，依聯邦法規至少須有多少比例的原料來自該 AVA？',
            options: ['A. 51%', 'B. 75%', 'C. 85%', 'D. 100%'],
            correct: 2,
            explanation: '依 TTB 規定，標示 AVA 名稱（如 Napa Valley）的酒款須至少 85% 原料來自該 AVA；若僅標示縣（County）名稱，門檻則降為 75%；加州州法更規定標示「California」須 100% 州內原料。'
          }
        ]
      }
    }
  }
]
