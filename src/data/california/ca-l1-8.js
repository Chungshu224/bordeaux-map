/**
 * CA-L1-8 Level 1 綜合評量與品飲指南
 * 餐酒搭配、品飲技巧、Level 1 總複習測驗
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          恭喜您完成加州葡萄酒 Level 1 的所有課程！本最後一課將整合所有學習內容——從品飲技巧到餐酒搭配，從產區辨識到品種記憶——以一場全面的綜合評量來確認您的學習成果。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🍷 系統化品飲技巧</h4>
            <p>掌握 WSET 四步驟品飲法（觀察、嗅聞、品嚐、結論）</p>
          </div>
          <div class="point-item">
            <h4>🥩 加州葡萄酒餐酒搭配</h4>
            <p>了解加州主要品種與食材的最佳搭配原則</p>
          </div>
          <div class="point-item">
            <h4>📚 Level 1 總複習</h4>
            <p>以 15 題綜合測驗確認加州葡萄酒 Level 1 全課程學習成果</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: '加州葡萄酒品飲技巧',
    content: `<div class="tasting-guide">
      <h3>🍷 系統化品飲加州葡萄酒</h3>

      <div class="step-guide">
        <div class="step-item">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>👁️ 觀察（Appearance）</h4>
            <ul>
              <li><strong>顏色深淺：</strong>深色 = Cabernet、Petite Sirah；淡色 = Pinot Noir、Grenache</li>
              <li><strong>邊緣顏色：</strong>磚紅邊緣 = 陳年；紫紅 = 年輕</li>
              <li><strong>黏稠度（淚腳）：</strong>淚腳慢而厚 = 酒精高、甜度高</li>
            </ul>
          </div>
        </div>
        <div class="step-item">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>👃 嗅聞（Nose）</h4>
            <ul>
              <li><strong>第一印象（靜止）：</strong>不轉杯，感受最揮發的香氣（花香、清新果香）</li>
              <li><strong>轉杯後：</strong>感受更複雜的香氣（木質、香料、土壤感）</li>
              <li><strong>加州紅酒識別：</strong>黑醋栗 + 橡木香草 = Napa Cab；草莓 + 海鹽 = 涼爽 Pinot；黑莓 + 胡椒 = Zinfandel</li>
            </ul>
          </div>
        </div>
        <div class="step-item">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>👄 品嚐（Palate）</h4>
            <ul>
              <li><strong>酸度：</strong>感受口水分泌（高酸 = 涼爽氣候品種：Pinot、Chardonnay；低酸 = 溫暖氣候：Zinfandel、傳統 Chard）</li>
              <li><strong>單寧（紅酒）：</strong>乾澀感強 = 山地 Cab、Petite Sirah；絲滑 = Stags Leap Cab、Pinot Noir</li>
              <li><strong>酒精熱感：</strong>喉嚨灼熱感——加州通常偏高（13.5-15%）</li>
              <li><strong>果味濃縮度：</strong>果醬感 = 過熟或炎熱氣候；新鮮果香 = 涼爽年份 / 高海拔</li>
              <li><strong>餘韻長度：</strong>10 秒以上 = 優質葡萄酒的指標</li>
            </ul>
          </div>
        </div>
        <div class="step-item">
          <div class="step-num">4</div>
          <div class="step-content">
            <h4>📝 結論（Conclusions）</h4>
            <p>嘗試判斷：品種？產區？年份？品質等級？ 加州盲飲口訣：</p>
            <ul>
              <li>酒精高 + 黑果 + 橡木 → <strong>Napa Cab</strong></li>
              <li>細緻紅果 + 高酸 + 絲滑 → <strong>Russian River Pinot</strong></li>
              <li>黑莓 + 胡椒 + 高酒精 → <strong>Zinfandel（Dry Creek/Lodi）</strong></li>
              <li>奶油 + 香草 + 豐厚 → <strong>傳統 California Chard</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: '加州葡萄酒餐酒搭配指南',
    content: `<div class="food-pairing">
      <h3>🍽️ 加州葡萄酒餐酒搭配</h3>
      <p class="pairing-intro">加州飲食文化（California Cuisine）以新鮮食材、融合風格著稱，天然與加州葡萄酒的豐厚果味相得益彰。</p>

      <div class="pairing-grid">
        <div class="pair-card">
          <div class="wine-name">🍷 Napa Valley Cabernet Sauvignon</div>
          <div class="food-match">
            <strong>最佳搭配：</strong>美式烤肋眼牛排、紅燒牛腱、烤羊排、熟成切達乳酪
          </div>
          <div class="pairing-reason">豐厚單寧與蛋白質結合，彼此柔化</div>
        </div>

        <div class="pair-card">
          <div class="wine-name">🍓 Russian River Pinot Noir</div>
          <div class="food-match">
            <strong>最佳搭配：</strong>烤鮭魚、紅燒鴨胸、蘑菇燉飯、鵝肝、精緻義大利麵
          </div>
          <div class="pairing-reason">細緻單寧和高酸度與魚類或禽肉相得益彰</div>
        </div>

        <div class="pair-card">
          <div class="wine-name">⚡ Dry Creek Zinfandel</div>
          <div class="food-match">
            <strong>最佳搭配：</strong>BBQ 豬肋排、辣味義大利香腸披薩、墨西哥烤肉（Carnitas）
          </div>
          <div class="pairing-reason">香料感和濃厚果味與燒烤煙燻完美呼應</div>
        </div>

        <div class="pair-card">
          <div class="wine-name">🌸 豐厚 California Chardonnay</div>
          <div class="food-match">
            <strong>最佳搭配：</strong>奶油龍蝦、烤雞、奶油義大利燉飯（Risotto）、帕馬森乳酪
          </div>
          <div class="pairing-reason">奶油質地的食物強化葡萄酒的圓潤感</div>
        </div>

        <div class="pair-card">
          <div class="wine-name">🌊 Sta. Rita Hills Pinot Noir</div>
          <div class="food-match">
            <strong>最佳搭配：</strong>海鮮燉飯、烤鮟鱇魚、培根蘑菇炒飯
          </div>
          <div class="pairing-reason">涼爽氣候帶來的高酸度和礦石感與海鮮搭配天衣無縫</div>
        </div>

        <div class="pair-card">
          <div class="wine-name">☀️ Paso Robles Syrah</div>
          <div class="food-match">
            <strong>最佳搭配：</strong>摩洛哥羊肉燉菜、黑橄欖牛排醬、地中海烤豬
          </div>
          <div class="pairing-reason">香料感和黑橄欖風味與地中海料理互相輝映</div>
        </div>

        <div class="pair-card">
          <div class="wine-name">🌿 精緻 California Chardonnay（不帶橡木）</div>
          <div class="food-match">
            <strong>最佳搭配：</strong>生蠔、烤比目魚、清蒸螃蟹、日本料理（壽司）
          </div>
          <div class="pairing-reason">清爽酸度和礦石感讓海鮮更顯鮮甜</div>
        </div>

        <div class="pair-card">
          <div class="wine-name">🥂 California Sparkling（Carneros / Anderson Valley）</div>
          <div class="food-match">
            <strong>最佳搭配：</strong>魚子醬、烤薯片、天婦羅、濃郁奶酪
          </div>
          <div class="pairing-reason">氣泡和高酸度是油脂食物的最佳解膩</div>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Level 1 總複習',
    content: `<div class="review-summary">
      <h3>📚 加州葡萄酒 Level 1 核心知識總整理</h3>

      <div class="review-section">
        <h4>📅 歷史里程碑</h4>
        <ul>
          <li>1769 年：西班牙傳教士種植第一批葡萄（San Diego）</li>
          <li>1812 年：Sonoma 首批商業葡萄種植</li>
          <li>1839 年：Napa Valley 首批葡萄</li>
          <li>1880s：Phylloxera 毀滅第一代葡萄園</li>
          <li>1919-1933：禁酒令（Prohibition）重創產業</li>
          <li>1966 年：Robert Mondavi Winery 創立，現代 Napa 葡萄酒的里程碑</li>
          <li>1976 年：巴黎評判（Judgment of Paris）——紅酒冠軍：Stag's Leap Wine Cellars；白酒冠軍：Chateau Montelena</li>
          <li>1981 年：Napa Valley 成為加州第一個 AVA</li>
          <li>2024 年：加州共有 154+ 個 AVA</li>
        </ul>
      </div>

      <div class="review-section">
        <h4>🗺️ 六大產區群</h4>
        <div class="review-table">
          <table>
            <thead><tr><th>產區群</th><th>代表 AVA</th><th>主要品種</th><th>氣候特性</th></tr></thead>
            <tbody>
              <tr><td>北海岸（North Coast）</td><td>Napa Valley、Sonoma County、Mendocino</td><td>Cab Sauv、Pinot Noir、Chard</td><td>地中海型，受海霧調節</td></tr>
              <tr><td>中央海岸（Central Coast）</td><td>Paso Robles、Santa Barbara、Santa Cruz Mtns</td><td>Syrah、Pinot Noir、Cab Sauv</td><td>涼爽至溫和，橫向山谷</td></tr>
              <tr><td>Sierra Foothills</td><td>El Dorado、Amador County</td><td>Zinfandel（老藤）、Barbera</td><td>山地大陸性，晝夜溫差大</td></tr>
              <tr><td>中央谷地（Inland Valleys）</td><td>Lodi</td><td>Zinfandel、Cab Sauv</td><td>溫暖乾燥，海洋涼風</td></tr>
              <tr><td>南加州（Southern CA）</td><td>Temecula Valley</td><td>多元品種</td><td>亞熱帶，涼風影響</td></tr>
              <tr><td>遠北加州（Far North CA）</td><td>Trinity County</td><td>Petite Sirah、Grenache</td><td>高海拔，偏涼</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="review-section">
        <h4>🍇 重要品種記憶卡</h4>
        <div class="variety-cards-mini">
          <div class="vcm">Cab Sauv → Napa Valley 王者，黑醋栗，橡木，15%</div>
          <div class="vcm">Chardonnay → 兩種風格（奶油款 / 礦石款），Livermore 基因</div>
          <div class="vcm">Pinot Noir → 涼爽氣候，Russian River / Sta. Rita Hills，草莓，高酸</div>
          <div class="vcm">Zinfandel → 加州靈魂，Dry Creek / Lodi 老藤，黑莓胡椒，高酒精</div>
          <div class="vcm">Syrah → Paso Robles / Santa Barbara，Rhône 風格，香料橄欖</div>
        </div>
      </div>
    </div>`
  },

  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '📋 Level 1 綜合評量',
        isFinalExam: true,
        passScore: 70,
        questions: [
          {
            type: 'single',
            question: '1976 年「巴黎評判（Judgment of Paris）」中，哪兩個加州酒莊分別奪得紅酒和白酒冠軍？',
            options: ['A. Opus One（紅）和 Robert Mondavi（白）', "B. Stag's Leap Wine Cellars（紅）和 Chateau Montelena（白）", 'C. Ridge Monte Bello（紅）和 Kistler（白）', 'D. Harlan Estate（紅）和 Rombauer（白）'],
            correct: 1,
            explanation: "1976 年巴黎評判：紅酒冠軍是 Stag's Leap Wine Cellars 1973 Cabernet Sauvignon（Stags Leap District, Napa）；白酒冠軍是 Chateau Montelena 1973 Chardonnay（Calistoga, Napa）。這個結果震驚了法國葡萄酒界。"
          },
          {
            type: 'single',
            question: 'AVA（American Viticultural Area）和法國 AOC 最大的差異是什麼？',
            options: ['A. AVA 規定最低種植品質，AOC 不規定', 'B. AVA 只規定地理邊界，不限制品種、產量或釀造方式；AOC 對品種、產量、釀造方式都有嚴格規定', 'C. AVA 比 AOC 更嚴格，有更多限制', 'D. 兩者規定完全相同'],
            correct: 1,
            explanation: 'AVA 只是地理標示系統，僅規定葡萄酒中使用該 AVA 葡萄的最低比例（85%），不限制品種選擇、種植方法、產量或釀造方式。法國 AOC 則對品種、最高產量、種植密度、修枝方式、釀造方法等都有嚴格規定。'
          },
          {
            type: 'single',
            question: '「Rutherford Dust」是形容哪個 Napa 子 AVA 特有的單寧風格？',
            options: ['A. Oakville', 'B. Stags Leap District', 'C. Rutherford', 'D. Calistoga'],
            correct: 2,
            explanation: '「Rutherford Dust」形容 Rutherford 子 AVA 特有的礫石土壤帶來的單寧質地——一種有塵土感、礫石感的單寧結構，是 Rutherford Cabernet Sauvignon 的標誌性風格特色。'
          },
          {
            type: 'single',
            question: 'Sonoma County 有多少個子 AVA？',
            options: ['A. 8 個', 'B. 12 個', 'C. 16 個', 'D. 19 個'],
            correct: 3,
            explanation: 'Sonoma County 擁有 19 個 AVA，是加州擁有最多 AVA 的郡之一，反映了其地理多樣性——從涼爽的 Sonoma Coast 到溫暖的 Alexander Valley，涵蓋多種氣候和土壤類型。'
          },
          {
            type: 'single',
            question: '哪部電影讓 Santa Barbara County 的 Pinot Noir 聲名大噪？',
            options: ['A. Bottle Shock（2008）', 'B. Sideways（2004）', 'C. Wine Country（2019）', 'D. Somm（2012）'],
            correct: 1,
            explanation: '2004 年電影《Sideways》在 Santa Barbara 葡萄酒鄉拍攝，主角 Miles 對 Pinot Noir 的激情讚美（以及對 Merlot 的拒絕）使全美 Pinot Noir 銷量暴增約 50%，Merlot 銷量則短暫下滑。'
          },
          {
            type: 'single',
            question: 'Russian River Valley 最著名的土壤類型是？',
            options: ['A. 白色石灰岩', 'B. Goldridge Sandy Loam（金嶺細沙壤土）', 'C. 礫石沖積扇', 'D. 火山紅土'],
            correct: 1,
            explanation: 'Goldridge Sandy Loam（金嶺細沙壤土）是 Russian River Valley 的標誌性土壤，排水良好、低肥力，是加州最適合 Pinot Noir 的土壤類型之一。'
          },
          {
            type: 'single',
            question: 'Zinfandel 的 DNA 最終追溯至哪個國家的原生品種？',
            options: ['A. 法國', 'B. 義大利', 'C. 克羅地亞', 'D. 西班牙'],
            correct: 2,
            explanation: 'DNA 研究追溯出 Zinfandel 與克羅地亞的 Crljenak Kaštelanski（又名 Tribidrag）完全相同，最原始的基因根源在克羅地亞的 Dalmatia 海岸。'
          },
          {
            type: 'single',
            question: 'Tablas Creek Vineyard（Paso Robles）是由哪個法國名莊合資，在加州推廣 Rhône 品種種植的？',
            options: ['A. Château Margaux', 'B. Château Beaucastel', 'C. Domaine de la Romanée-Conti', 'D. Château Pétrus'],
            correct: 1,
            explanation: 'Tablas Creek Vineyard 由 Haas 家族和法國 Rhône 名莊 Château Beaucastel（法定產區 Châteauneuf-du-Pape）合資創立，從法國引進並推廣 Rhône 品種在加州的種植。'
          },
          {
            type: 'single',
            question: 'Santa Barbara 的山谷方向（橫向東西走向）對葡萄酒有什麼影響？',
            options: ['A. 阻擋了太平洋海霧，使產區更加溫暖', 'B. 讓太平洋海霧和涼風直接湧入，帶來加州最涼爽的葡萄酒生長環境之一', 'C. 使雨水從山頂快速流走，造成更嚴重的乾旱', 'D. 完全沒有影響'],
            correct: 1,
            explanation: 'Santa Barbara 的橫向（東西走向）山谷（Santa Ynez Valley、Santa Maria Valley）讓太平洋海霧和涼風能直接從西方海岸灌入，帶來加州最涼爽的葡萄酒生長環境之一，是精緻 Pinot Noir 和 Chardonnay 的保障。'
          },
          {
            type: 'single',
            question: 'Napa Valley 是哪一年成為加州第一個 AVA？',
            options: ['A. 1968 年', 'B. 1976 年', 'C. 1981 年', 'D. 1990 年'],
            correct: 2,
            explanation: 'Napa Valley 於 1981 年成為加州第一個獲批的 AVA（美國葡萄酒種植區），這對美國葡萄酒地理標示系統的發展具有里程碑意義。'
          },
          {
            type: 'single',
            question: '加州 Chardonnay 的「Wente Clone」典故是指什麼？',
            options: ['A. Ridge Winery 研發的 Chardonnay 克隆', 'B. C.H. Wente 1880 年代從布根地引進的 Chardonnay 克隆，成為加州 80% Chardonnay 的基因來源', 'C. 加州大學 Davis 分校培育的實驗克隆', 'D. 禁酒令後重新引進的 Chardonnay 品種'],
            correct: 1,
            explanation: 'Wente Clone 是指 C.H. Wente 在 1880 年代從布根地引進的 Chardonnay 克隆株，種植於 Livermore Valley。這批克隆後來成為整個加州 Chardonnay 種植的主要基因來源，加州約 80% 的 Chardonnay 可追溯至此。'
          },
          {
            type: 'single',
            question: 'Opus One 是哪兩個名莊的合作作品？',
            options: ['A. Château Lafite 和 Mondavi', 'B. Château Mouton-Rothschild 和 Robert Mondavi', 'C. Pétrus 和 Screaming Eagle', 'D. Château Margaux 和 Harlan Estate'],
            correct: 1,
            explanation: 'Opus One 由美國的 Robert Mondavi 和法國波爾多一級名莊 Château Mouton-Rothschild 的 Baron Philippe de Rothschild 在 1979 年聯合創立，是新舊世界葡萄酒合作的里程碑，位於 Napa Valley Oakville 產區。'
          },
          {
            type: 'single',
            question: 'Dry Creek Valley（Sonoma）最著名的品種和土壤特色是什麼？',
            options: ['A. Pinot Noir，Goldridge 細沙壤土', 'B. Zinfandel（含老藤），礫石土壤（Benchland Gravels）', 'C. Cabernet Sauvignon，火山岩', 'D. Chardonnay，石灰岩'],
            correct: 1,
            explanation: 'Dry Creek Valley 以老藤 Zinfandel 著稱，礫石和黏土混合土壤帶來完美的排水性，有些葡萄藤已超過 100 年歷史，釀造出濃郁黑果、香料和胡椒感的加州最具特色 Zinfandel。'
          },
          {
            type: 'single',
            question: '以下哪個子 AVA 以「高海拔 + 石灰岩土壤 + 陳年潛力超強的 Cabernet」著稱，曾在巴黎評判 30 周年重賽中名列前茅？',
            options: ['A. Napa Valley Oakville', 'B. Santa Cruz Mountains（Ridge Monte Bello）', 'C. Paso Robles Adelaida District', 'D. Russian River Valley'],
            correct: 1,
            explanation: 'Ridge Monte Bello 位於 Santa Cruz Mountains，海拔約 800 公尺，擁有加州罕見的石灰岩土壤，帶來極高的天然酸度和礦石感。其 Cabernet Sauvignon 陳年潛力可達 20-40 年，在 2006 年「巴黎評判 30 周年重賽」中，1971 年份奪得冠軍。'
          },
          {
            type: 'single',
            question: '以下哪項描述是「涼爽氣候加州 Pinot Noir」的最佳特徵？',
            options: ['A. 豐厚果醬口感、低酸度、高酒精（15%）、濃重橡木', 'B. 明亮草莓和覆盆子、高酸度、細膩單寧、優雅花香、餘韻帶礦石感', 'C. 黑醋栗、黑莓、重單寧、飽滿結構', 'D. 香草冰淇淋、奶油烤蘋果、低酸度、奶油口感'],
            correct: 1,
            explanation: '涼爽氣候加州 Pinot Noir（如 Russian River Valley、Sonoma Coast、Sta. Rita Hills）的典型特徵是：明亮的草莓和覆盆子果香、高天然酸度、細膩絲滑的單寧、玫瑰和薰衣草的花香，以及礦石感的餘韻。'
          }
        ]
      }
    }
  }
]
