/**
 * CA-L1-8 Level 1 綜合評量與品飲指南
 * 品飲技巧、侍酒服務基礎、餐酒搭配、Level 1 總複習測驗
 * 資料來源：discovercaliforniawines.com、通用侍酒服務溫度標準（WSET / Court of Master Sommeliers
 * 教學慣例，交叉核對多方侍酒溫度指南）、本課程 CA-L1-1 至 CA-L1-7 內容整合
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          恭喜您完成加州葡萄酒 Level 1 的所有課程！本最後一課將整合所有學習內容——從系統化品飲技巧、侍酒服務基礎，到餐酒搭配原則，從產區辨識到品種記憶——以一場全面的綜合評量來確認您的學習成果，為進入 Level 2 的深度風土與釀造技術課程做好準備。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🍷 系統化品飲技巧</h4>
            <p>掌握四步驟品飲法（觀察、嗅聞、品嚐、結論）並應用於加州葡萄酒盲飲判斷</p>
          </div>
          <div class="point-item">
            <h4>🌡️ 侍酒服務基礎</h4>
            <p>了解正確的侍酒溫度、杯型選擇與醒酒原則</p>
          </div>
          <div class="point-item">
            <h4>🥩 加州葡萄酒餐酒搭配</h4>
            <p>了解餐酒搭配三大原則，以及加州主要品種與食材的最佳搭配</p>
          </div>
          <div class="point-item">
            <h4>📚 Level 1 總複習</h4>
            <p>以擴充版綜合測驗確認加州葡萄酒 Level 1 全課程（CA-L1-1 至 CA-L1-8）學習成果</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: '加州葡萄酒品飲技巧',
    highlights: [
      { id: 1, icon: '👁️', title: '四步驟品飲法', content: '觀察、嗅聞、品嚐、結論——建立系統化的品飲思考框架' },
      { id: 2, icon: '🧠', title: '盲飲口訣', content: '用香氣、單寧、酸度組合快速鎖定加州品種與產區的可能範圍' }
    ],
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
              <li><strong>白酒色澤：</strong>淡檸檬綠 = 未經橡木、年輕；金黃色 = 橡木陳年或成熟年份的 Chardonnay</li>
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
              <li><strong>加州紅酒識別：</strong>黑醋栗 + 橡木香草 = Napa Cab；草莓 + 海鹽 = 涼爽 Pinot；黑莓 + 胡椒 = Zinfandel；黑橄欖 + 煙燻 = Paso Robles Syrah</li>
              <li><strong>加州白酒識別：</strong>奶油爆米花 + 烤蘋果 = 傳統 Chardonnay；柑橘 + 礦石 = 現代精緻 Chardonnay；百香果 + 萊姆 = 清爽 Sauvignon Blanc</li>
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
              <li><strong>酒精熱感：</strong>喉嚨灼熱感——加州通常偏高（13.5-15%，部分 Zinfandel 可達 17%）</li>
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
              <li>細緻紅果 + 高酸 + 絲滑 → <strong>Russian River / Sta. Rita Hills Pinot</strong></li>
              <li>黑莓 + 胡椒 + 高酒精 → <strong>Zinfandel（Dry Creek / Lodi / Amador）</strong></li>
              <li>奶油 + 香草 + 豐厚 → <strong>傳統 California Chardonnay</strong></li>
              <li>黑橄欖 + 紫羅蘭 + 煙燻 → <strong>Paso Robles / Santa Barbara Syrah</strong></li>
              <li>石灰岩礦石感 + 極高酸 + 緊實單寧 → <strong>Santa Cruz Mountains Cabernet</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: '侍酒服務基礎：溫度、杯型與醒酒',
    highlights: [
      { id: 1, icon: '🌡️', title: '溫度決定風味表現', content: '過冷會掩蓋香氣，過熱會放大酒精灼熱感，是最容易被忽略的品飲變因' },
      { id: 2, icon: '🍷', title: '醒酒的兩個目的', content: '年輕濃縮酒款用醒酒瓶「呼吸」軟化單寧；老酒用醒酒瓶「換瓶」分離沉澱物' }
    ],
    content: `<div class="service-basics">
      <h3>🌡️ 侍酒溫度指南</h3>
      <p>溫度是最容易被忽略、卻對品飲體驗影響最大的變因之一。過冷會掩蓋香氣與果味，過熱則會放大酒精灼熱感、模糊細節。以下為業界常見的服務溫度區間，可作為加州葡萄酒服務的參考起點：</p>
      <table class="compare-table">
        <thead>
          <tr><th>酒款類型</th><th>建議溫度</th><th>加州範例</th></tr>
        </thead>
        <tbody>
          <tr><td>氣泡酒</td><td>約 6-9°C</td><td>Carneros / Anderson Valley Sparkling</td></tr>
          <tr><td>清爽白酒</td><td>約 8-10°C</td><td>Sauvignon Blanc、精緻 Chardonnay</td></tr>
          <tr><td>豐厚白酒</td><td>約 10-13°C</td><td>傳統橡木風格 Chardonnay</td></tr>
          <tr><td>輕盈紅酒</td><td>約 12-14°C</td><td>涼爽氣候 Pinot Noir</td></tr>
          <tr><td>中等酒體紅酒</td><td>約 14-16°C</td><td>Merlot、優雅風格 Cabernet</td></tr>
          <tr><td>飽滿紅酒</td><td>約 16-18°C</td><td>Napa Cabernet、Zinfandel、Syrah</td></tr>
        </tbody>
      </table>
      <div class="service-tips">
        <h4>🍷 杯型與醒酒原則</h4>
        <ul>
          <li><strong>大肚杯（Bordeaux glass）：</strong>適合 Cabernet Sauvignon、Merlot 等結構感強的紅酒，杯身較高，讓香氣有充分空間聚集</li>
          <li><strong>寬肚杯（Burgundy glass）：</strong>適合 Pinot Noir，寬口設計讓細緻香氣更快釋放</li>
          <li><strong>笛型杯 / 鬱金香杯：</strong>適合氣泡酒，保留氣泡與香氣</li>
          <li><strong>年輕、單寧緊實的酒款：</strong>建議醒酒 30 分鐘至 1 小時（如年輕 Napa Cab、山地 Cabernet），透過與空氣接觸軟化單寧、釋放香氣</li>
          <li><strong>陳年老酒：</strong>醒酒（換瓶）主要目的是分離瓶底沉澱物，操作時應緩慢傾倒並避免過度搖晃，以免破壞脆弱的陳年香氣</li>
        </ul>
      </div>
    </div>`
  },

  {
    title: '加州葡萄酒餐酒搭配指南',
    highlights: [
      { id: 1, icon: '⚖️', title: '搭配三原則', content: '酒體對應、酸度呼應、單寧與蛋白質／油脂的互動，是餐酒搭配最基本的邏輯框架' },
      { id: 2, icon: '🍽️', title: 'California Cuisine 精神', content: '新鮮在地食材、跨文化融合料理，與加州葡萄酒的豐厚果味天生契合' }
    ],
    content: `<div class="food-pairing">
      <h3>🍽️ 加州葡萄酒餐酒搭配</h3>
      <p class="pairing-intro">加州飲食文化（California Cuisine）以新鮮食材、融合風格著稱，天然與加州葡萄酒的豐厚果味相得益彰。以下先建立三個基礎搭配原則，再對照具體酒款與菜式。</p>

      <div class="pairing-principles">
        <h4>⚖️ 餐酒搭配三大基礎原則</h4>
        <div class="principle-grid">
          <div class="principle-card">
            <h5>1. 酒體對應（Weight Matching）</h5>
            <p>清爽菜式配輕盈酒款（如生蠔配清爽 Sauvignon Blanc），濃郁菜式配飽滿酒款（如烤牛排配 Napa Cabernet），避免其中一方壓過另一方。</p>
          </div>
          <div class="principle-card">
            <h5>2. 酸度呼應（Acid Matching）</h5>
            <p>高酸度菜式（如檸檬海鮮、油醋沙拉）適合搭配同樣具備明亮酸度的酒款（如涼爽氣候 Chardonnay 或 Pinot Noir），酸度不足的酒會顯得平淡無力。</p>
          </div>
          <div class="principle-card">
            <h5>3. 單寧與蛋白質 / 油脂互動</h5>
            <p>紅肉的蛋白質和油脂能柔化紅酒的單寧澀感，因此高單寧酒款（如年輕 Cabernet）特別適合搭配油脂豐富的紅肉料理；反之清蒸海鮮應避免高單寧紅酒。</p>
          </div>
        </div>
      </div>

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
          <div class="wine-name">⚡ Dry Creek / Lodi Zinfandel</div>
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
          <div class="wine-name">☀️ Paso Robles / Santa Barbara Syrah</div>
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

        <div class="pair-card">
          <div class="wine-name">🍇 Paso Robles Grenache / GSM 混釀</div>
          <div class="food-match">
            <strong>最佳搭配：</strong>烤雞腿排、番茄燉肉、西班牙 Tapas 拼盤
          </div>
          <div class="pairing-reason">中等酒體與柔和單寧不會壓過多層次的燉煮料理</div>
        </div>

        <div class="pair-card">
          <div class="wine-name">🔥 Lodi Petite Sirah</div>
          <div class="food-match">
            <strong>最佳搭配：</strong>炭烤牛小排、黑胡椒牛排、濃郁藍紋乳酪
          </div>
          <div class="pairing-reason">緊實單寧與深色果味需要同樣濃厚的菜式才能平衡</div>
        </div>
      </div>

      <p class="pairing-note">💡 小提醒：以上搭配屬於 Level 1 基礎入門原則；更進階的動態搭配技巧（如醬汁主導原則、風土呼應、餐廳實務演練）將於 Level 3 的精緻餐飲搭配實作課程中深入探討。</p>
    </div>`
  },

  {
    title: 'Level 1 總複習：歷史與 AVA 制度',
    content: `<div class="review-summary">
      <h3>📚 加州葡萄酒 Level 1 核心知識總整理（一）：歷史與制度</h3>

      <div class="review-section">
        <h4>📅 歷史里程碑</h4>
        <ul>
          <li>1769 年：西班牙傳教士種植第一批葡萄（San Diego）</li>
          <li>1839 年：Napa Valley 首批葡萄（George Yount）</li>
          <li>1849 年：加州淘金熱（Gold Rush），帶動 Sierra Foothills 早期葡萄種植</li>
          <li>1883 年：Livermore Valley 的 Wente 與 Concannon 兩大家族創立酒莊</li>
          <li>1880s：Phylloxera（根瘤蚜）毀滅第一代葡萄園</li>
          <li>1919-1933：禁酒令（Prohibition）重創產業</li>
          <li>1966 年：Robert Mondavi Winery 創立，現代 Napa 葡萄酒的里程碑</li>
          <li>1976 年：巴黎評判（Judgment of Paris）——紅酒冠軍：Stag's Leap Wine Cellars；白酒冠軍：Chateau Montelena</li>
          <li>1981 年：Napa Valley 成為加州第一個 AVA；同年 Santa Cruz Mountains、Santa Maria Valley 等 AVA 也相繼設立</li>
          <li>1987 年：Sierra Foothills AVA 正式設立，整合 6 個子產區</li>
          <li>1989 年：Tablas Creek Vineyard 於 Paso Robles 創立，開啟 Rhône Rangers 運動</li>
          <li>1991 年：Lodi Winegrape Commission 成立，後續推動 LODI RULES 永續認證</li>
          <li>2006 年：Lodi 內部核准 7 個子 AVA；同年 Santa Cruz Mountains 的 Ridge 1971 年份 Monte Bello 在「巴黎評判 30 週年重賽」中奪冠</li>
          <li>2014 年：Paso Robles 一次核准 11 個子 AVA；同年 Malibu Coast AVA 也正式設立</li>
        </ul>
      </div>

      <div class="review-section">
        <h4>📜 AVA 制度速記</h4>
        <ul>
          <li>AVA 只規範地理邊界與最低比例（85% 原料需來自標示產區），不像法國 AOC 那樣規範品種、產量與釀造方式</li>
          <li>加州目前已有超過 150 個 AVA，且數量持續增加</li>
          <li>AVA 之下可再劃分子 AVA（如 Napa Valley 之下有 16 個子 AVA），形成州 → 產區群 → AVA → 子 AVA 的層級結構</li>
        </ul>
      </div>
    </div>`
  },

  {
    title: 'Level 1 總複習：六大產區與子產區地圖',
    content: `<div class="review-summary">
      <h3>📚 加州葡萄酒 Level 1 核心知識總整理（二）：產區地圖</h3>

      <div class="review-section">
        <h4>🗺️ 六大產區群與代表子產區</h4>
        <div class="review-table">
          <table class="compare-table">
            <thead><tr><th>產區群</th><th>代表 AVA / 子產區</th><th>主要品種</th><th>氣候特性</th></tr></thead>
            <tbody>
              <tr><td>北海岸（North Coast）</td><td>Napa Valley（16 子 AVA）、Sonoma County（19 個 AVA）</td><td>Cab Sauv、Pinot Noir、Chardonnay</td><td>地中海型，受海霧調節</td></tr>
              <tr><td>中央海岸（Central Coast）</td><td>Paso Robles（11 子 AVA）、Santa Barbara（Sta. Rita Hills、Ballard Canyon）、Santa Cruz Mountains、Monterey（Santa Lucia Highlands）、Livermore Valley</td><td>Syrah、Grenache、Pinot Noir、Cab Sauv</td><td>涼爽至溫和，橫向山谷與強風效應</td></tr>
              <tr><td>Sierra Foothills</td><td>El Dorado、California Shenandoah Valley、Fiddletown</td><td>Zinfandel（老藤）、Barbera</td><td>山地大陸性，晝夜溫差大</td></tr>
              <tr><td>中央谷地（Inland Valleys）</td><td>Lodi（7 子 AVA）、Madera</td><td>Zinfandel、Cab Sauv、Chardonnay</td><td>溫暖乾燥，部分受三角洲涼風調節</td></tr>
              <tr><td>南加州（Southern CA）</td><td>Temecula Valley、Malibu Coast、Ramona Valley</td><td>多元品種，Rhône 與 Bordeaux 品種並重</td><td>地中海型，山口缺口帶來涼風</td></tr>
              <tr><td>遠北加州（Far North CA）</td><td>Trinity County、Shasta County</td><td>Petite Sirah、Grenache</td><td>高海拔，偏涼，仍在拓荒階段</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="review-section">
        <h4>🌊 Mendocino & Lake County 速記</h4>
        <ul>
          <li>Anderson Valley（1983 年設立）：世界級 Pinot Noir、氣泡酒（Roederer Estate）與 Alsatian 品種</li>
          <li>Mendocino Ridge（1997 年設立）：全美唯一以海拔劃界的「島嶼型」AVA</li>
          <li>Lake County：火山紅土壤（Red Hills，2004 年設立）與高海拔（High Valley，2005 年設立）是兩大關鍵字</li>
        </ul>
      </div>
    </div>`
  },

  {
    title: 'Level 1 總複習：品種與克隆記憶卡',
    content: `<div class="review-summary">
      <h3>📚 加州葡萄酒 Level 1 核心知識總整理（三）：品種與克隆</h3>

      <div class="review-section">
        <h4>🍇 重要品種記憶卡</h4>
        <div class="variety-cards-mini">
          <div class="vcm">Cab Sauv → Napa Valley 王者，黑醋栗，橡木，13.5-15%，Clone 4／6／169／337</div>
          <div class="vcm">Chardonnay → 兩種風格（奶油款／礦石款），Wente Clone（Clone 4）是基因源頭</div>
          <div class="vcm">Pinot Noir → 涼爽氣候，Russian River／Sta. Rita Hills，草莓，高酸，Dijon 667／777／115</div>
          <div class="vcm">Zinfandel → 加州靈魂，Dry Creek／Lodi／Amador 老藤，黑莓胡椒，高酒精，DNA 溯源克羅地亞</div>
          <div class="vcm">Merlot → Dan Duckhorn「Mr. Merlot」，1976 年創立 Duckhorn Vineyards</div>
          <div class="vcm">Syrah → Paso Robles／Santa Barbara，Rhône 風格，香料橄欖</div>
          <div class="vcm">Petite Sirah → 本名 Durif，Syrah × Peloursin 雜交，法國幾近絕跡卻在加州發揚光大</div>
          <div class="vcm">Grenache → Rhône Rangers 運動核心品種，Ballard Canyon／Paso Robles 西側佳</div>
        </div>
      </div>

      <div class="review-section">
        <h4>🌡️ 侍酒與搭配快速複習</h4>
        <ul>
          <li>紅酒服務溫度依酒體遞增：輕盈 12-14°C → 飽滿 16-18°C</li>
          <li>白酒與氣泡酒需更低溫：清爽白酒 8-10°C，氣泡酒 6-9°C</li>
          <li>餐酒搭配三原則：酒體對應、酸度呼應、單寧與蛋白質／油脂互動</li>
        </ul>
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
            explanation: '2004 年電影《Sideways》在 Santa Barbara 葡萄酒鄉拍攝，主角 Miles 對 Pinot Noir 的激情讚美（以及對 Merlot 的拒絕）使全美 Pinot Noir 銷量顯著攀升，Merlot 銷量則短暫下滑。'
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
            explanation: 'DNA 研究追溯出 Zinfandel 與克羅地亞的 Crljenak Kaštelanski（又名 Tribidrag）完全相同，最原始的基因根源在克羅地亞的 Dalmatia 海岸，與義大利 Primitivo 也是同一品種。'
          },
          {
            type: 'single',
            question: 'Tablas Creek Vineyard（Paso Robles）是由哪個法國名莊合資，在加州推廣 Rhône 品種種植的？',
            options: ['A. Château Margaux', 'B. Château Beaucastel', 'C. Domaine de la Romanée-Conti', 'D. Château Pétrus'],
            correct: 1,
            explanation: 'Tablas Creek Vineyard 由 Robert Haas 家族和法國 Rhône 名莊 Château de Beaucastel（法定產區 Châteauneuf-du-Pape）的 Perrin 家族於 1989 年合資創立，1994 年起自法國引進並推廣 Rhône 品種在加州的種植。'
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
            options: ['A. Ridge Winery 研發的 Chardonnay 克隆', 'B. C.H. Wente 1880 年代從布根地引進的 Chardonnay 克隆，是加州種植面積最大的 Chardonnay 克隆之一', 'C. 加州大學 Davis 分校培育的實驗克隆', 'D. 禁酒令後重新引進的 Chardonnay 品種'],
            correct: 1,
            explanation: 'Wente Clone 是指 C.H. Wente 在 1880 年代從布根地引進的 Chardonnay 種苗，種植於 Livermore Valley，經 UC Davis 除毒篩選後編號為 Clone 4。這批克隆後來成為加州種植面積最大的 Chardonnay 克隆之一，1936 年 Wente 更率先在酒標標示品種名。'
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
            explanation: 'Dry Creek Valley 以老藤 Zinfandel 著稱，礫石和黏土混合土壤帶來完美的排水性，有些葡萄藤已超過百年歷史，釀造出濃郁黑果、香料和胡椒感的加州最具特色 Zinfandel。'
          },
          {
            type: 'single',
            question: '以下哪個子 AVA 以「高海拔 + 石灰岩土壤 + 陳年潛力超強的 Cabernet」著稱，曾在巴黎評判 30 週年重賽中奪冠？',
            options: ['A. Napa Valley Oakville', 'B. Santa Cruz Mountains（Ridge Monte Bello）', 'C. Paso Robles Adelaida District', 'D. Russian River Valley'],
            correct: 1,
            explanation: 'Ridge Monte Bello 位於 Santa Cruz Mountains，海拔約 400-820 公尺，擁有加州罕見的石灰岩與綠岩土壤，帶來極高的天然酸度和礦石感。其 Cabernet Sauvignon 陳年潛力可達 20-40 年，2006 年「巴黎評判 30 週年重賽」中，1971 年份奪得冠軍。'
          },
          {
            type: 'single',
            question: '以下哪項描述是「涼爽氣候加州 Pinot Noir」的最佳特徵？',
            options: ['A. 豐厚果醬口感、低酸度、高酒精（15%）、濃重橡木', 'B. 明亮草莓和覆盆子、高酸度、細膩單寧、優雅花香、餘韻帶礦石感', 'C. 黑醋栗、黑莓、重單寧、飽滿結構', 'D. 香草冰淇淋、奶油烤蘋果、低酸度、奶油口感'],
            correct: 1,
            explanation: '涼爽氣候加州 Pinot Noir（如 Russian River Valley、Sonoma Coast、Sta. Rita Hills）的典型特徵是：明亮的草莓和覆盆子果香、高天然酸度、細膩絲滑的單寧、玫瑰和薰衣草的花香，以及礦石感的餘韻。'
          },
          {
            type: 'single',
            question: 'Paso Robles 於 2014 年一次核准了幾個官方子 AVA？',
            options: ['A. 5 個', 'B. 7 個', 'C. 9 個', 'D. 11 個'],
            correct: 3,
            explanation: '美國菸酒稅務貿易局（TTB）於 2014 年一次核准 Paso Robles 內部 11 個子 AVA（含 Adelaida District、Willow Creek District、Templeton Gap District 等），是加州近代規模最大的產區細分之一。'
          },
          {
            type: 'single',
            question: 'Petite Sirah 這個品種本名叫什麼？其血統是哪兩個品種的雜交後代？',
            options: ['A. Primitivo；Zinfandel × Grenache', 'B. Durif；Syrah × Peloursin', 'C. Mourvèdre；Grenache × Cinsault', 'D. Tannat；Cabernet × Merlot'],
            correct: 1,
            explanation: 'Petite Sirah 本名 Durif，是 1880 年代法國植物學家 François Durif 發現的 Syrah 與 Peloursin 天然雜交後代，引入美國後改稱 Petite Sirah，在法國本土幾乎絕跡，卻在加州（尤其 Lodi）發揚光大。'
          },
          {
            type: 'single',
            question: '根據餐酒搭配三大基礎原則，清蒸海鮮料理最應該避免搭配以下哪種酒款？',
            options: ['A. 清爽 Sauvignon Blanc', 'B. 涼爽氣候 Chardonnay', 'C. 年輕高單寧 Cabernet Sauvignon', 'D. 氣泡酒'],
            correct: 2,
            explanation: '根據「單寧與蛋白質／油脂互動」原則，高單寧紅酒需要紅肉的蛋白質和油脂來柔化澀感；清蒸海鮮質地細緻、缺乏油脂，搭配高單寧紅酒會讓單寧顯得粗澀突兀，應優先選擇清爽白酒或氣泡酒。'
          },
          {
            type: 'single',
            question: 'Lodi AVA 於哪一年核准了內部的 7 個子 AVA？',
            options: ['A. 1991 年', 'B. 2001 年', 'C. 2006 年', 'D. 2014 年'],
            correct: 2,
            explanation: 'TTB 於 2006 年核准 Lodi 內部 7 個子 AVA：Mokelumne River、Clements Hills、Alta Mesa、Borden Ranch、Cosumnes River、Jahant、Sloughhouse，反映其土壤與微氣候的多樣性。'
          }
        ]
      }
    }
  }
]
