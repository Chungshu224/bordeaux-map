/**
 * CA-L1-3 Napa Valley 深度探索
 * 16 個子 AVA、頂級酒莊與 Cabernet Sauvignon
 * 資料來源：discovercaliforniawines.com / napavintners.com
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Napa Valley——一個聽到名字就令人肅然起敬的葡萄酒聖地。僅有 45,342 英畝的葡萄園（約波爾多的 1/15），卻生產全球最昂貴、最被收藏的 Cabernet Sauvignon 之一。16 個子 AVA，每一個都有自己的風土個性和頂級酒莊。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🏔️ 理解 Napa Valley 的南北氣候差異</h4>
            <p>掌握從 Carneros（涼）到 Calistoga（熱）的風土漸變</p>
          </div>
          <div class="point-item">
            <h4>📍 認識 16 個子 AVA 的個性</h4>
            <p>區分 Oakville、Rutherford、Stags Leap District、Howell Mountain 等重要子產區</p>
          </div>
          <div class="point-item">
            <h4>🍷 Napa Cabernet 的風格解析</h4>
            <p>理解為何 Napa Cabernet 能與波爾多頂級名莊並駕齊驅</p>
          </div>
          <div class="point-item">
            <h4>🏛️ 頂級酒莊介紹</h4>
            <p>認識 Opus One、Screaming Eagle、Harlan Estate 等傳奇莊園</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: 'Napa Valley 概覽：小而精的奇蹟',
    content: `<div class="napa-overview">
      <h3>🏆 Napa Valley — 美國最偉大的葡萄酒谷地</h3>
      <div class="overview-stats">
        <div class="stat-block">
          <div class="stat-number">45,342</div>
          <div class="stat-desc">英畝葡萄園（僅占加州葡萄酒面積 4%）</div>
        </div>
        <div class="stat-block">
          <div class="stat-number">16</div>
          <div class="stat-desc">個子 AVA，各有獨特個性</div>
        </div>
        <div class="stat-block">
          <div class="stat-number">1839</div>
          <div class="stat-desc">年 George Yount 種植第一批葡萄</div>
        </div>
        <div class="stat-block">
          <div class="stat-number">1981</div>
          <div class="stat-desc">年成為加州第一個 AVA</div>
        </div>
      </div>
      <div class="napa-facts">
        <h4>必知事實</h4>
        <ul>
          <li>🌡️ <strong>地中海型氣候：</strong>冬季溫和多雨，夏季炎熱乾燥，葡萄完全依賴灌溉</li>
          <li>🏛️ <strong>全美第一個農業保護區：</strong>1968 年立法保護葡萄農地，禁止商業開發</li>
          <li>🍷 <strong>Cabernet 王國：</strong>Cabernet Sauvignon 占 60% 以上葡萄種植面積</li>
          <li>💰 <strong>全球最昂貴葡萄酒之鄉：</strong>Screaming Eagle 和 Harlan Estate 每瓶可達數千美元</li>
          <li>🏥 <strong>農業保育先鋒：</strong>75% 以上葡萄園取得可持續認證</li>
        </ul>
      </div>
    </div>`
  },

  {
    title: 'Napa Valley 歷史里程碑',
    content: `<div class="napa-history">
      <h3>🕐 從荒野到傳奇：Napa Valley 歷史時間軸</h3>
      <div class="timeline-container">
        <div class="timeline-item">
          <div class="timeline-badge ancient">1839</div>
          <div class="timeline-content"><strong>🌿 第一批葡萄藤</strong><p>George Yount 在 Napa Valley 種下第一批葡萄，開啟美洲西海岸葡萄酒種植的歷史</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge ancient">1862</div>
          <div class="timeline-content"><strong>🏛️ Schramsberg 創立</strong><p>Jacob Schram 創立全加州最古老酒莊之一，110 年後成為尼克森訪華的「外交氣泡酒」</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge ancient">1879</div>
          <div class="timeline-content"><strong>🏰 Inglenook 創立</strong><p>奠定 Napa Valley 早期國際聲望，後由電影導演 Francis Ford Coppola 購回並復興</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1966</div>
          <div class="timeline-content"><strong>🍷 Robert Mondavi 創立酒莊</strong><p>率先在標籤標注葡萄品種，推廣 Fumé Blanc，奠定現代 Napa 葡萄酒工業的基礎</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1968</div>
          <div class="timeline-content"><strong>🌾 全美第一農業保護區</strong><p>立法禁止商業開發葡萄農地，是全美農業土地保育的先驅立法</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1976</div>
          <div class="timeline-content"><strong>🏆 巴黎評判（Judgment of Paris）</strong><p>Stag's Leap 紅酒、Chateau Montelena 白酒雙冠，震驚法國葡萄酒界，Napa Valley 登上世界舞台</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1979</div>
          <div class="timeline-content"><strong>🤝 Opus One 成立</strong><p>Robert Mondavi 與 Mouton-Rothschild 聯手，新舊世界葡萄酒史上最重要的跨洋合作</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1981</div>
          <div class="timeline-content"><strong>📜 加州第一個 AVA</strong><p>Napa Valley 獲聯邦政府認定為加州第一個「美國葡萄種植區（AVA）」，確立法規保護地位</p></div>
        </div>
      </div>
    </div>`
  },

  {
    component: 'CaliforniaRegionMapSlide',
    title: 'Napa Valley 產區地圖',
    componentProps: {
      slide: {
        title: 'Napa Valley AVA 地圖',
        description: '美國最著名的葡萄酒谷地，16 個子 AVA，以 Cabernet Sauvignon 聞名全球',
        mapGroup: 'Napa Valley',
        highlightAVAs: ['Oakville', 'Rutherford', 'Stags Leap District', 'Howell Mountain', 'Spring Mountain District'],
      }
    }
  },

  {
    title: 'Napa Valley 南北氣候梯度',
    content: `<div class="napa-climate">
      <h3>🌡️ 從 Carneros 到 Calistoga：50 公里的氣候旅程</h3>
      <p>Napa Valley 是一個南北走向的谷地，南北溫差可達 10°C，造就截然不同的葡萄酒風格。</p>

      <div class="climate-gradient">
        <div class="climate-zone cool">
          <h4>🌫️ 南端（涼爽）：Carneros / Napa</h4>
          <p>緊鄰 San Pablo Bay，太平洋海霧每日清晨湧入。Carneros（西班牙語「公羊」）跨越 Napa 和 Sonoma 南端，是加州最佳 Pinot Noir 和 Chardonnay 產地之一。</p>
          <div class="zone-wines">🍷 Pinot Noir、Chardonnay、優雅的起泡酒</div>
          <div class="zone-producers">代表：Domaine Carneros、Etude、McKenzie-Mueller</div>
        </div>
        <div class="climate-zone moderate">
          <h4>☀️ 中段（溫和）：Yountville / Oakville / Rutherford</h4>
          <p>Napa Cabernet 的核心地帶。礫石沖積扇土壤加上溫暖白天和涼爽夜晚，是種植 Cabernet Sauvignon 的黃金條件。</p>
          <div class="zone-wines">🍷 Cabernet Sauvignon 為主，Merlot、Cabernet Franc</div>
          <div class="zone-producers">代表：Opus One、Far Niente、Inglenook、Nickel & Nickel</div>
        </div>
        <div class="climate-zone warm">
          <h4>🔥 北端（溫暖）：St. Helena / Calistoga</h4>
          <p>最受太平洋涼風保護，夏季最高溫。Calistoga 的火山岩土壤帶來獨特礦石感，生產加州最豐厚、最耐久的 Cabernet。</p>
          <div class="zone-wines">🍷 豐厚 Cabernet Sauvignon、Zinfandel</div>
          <div class="zone-producers">代表：Chateau Montelena、Storybook Mountain、Schramsberg（氣泡酒）</div>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Napa Valley 16 個子 AVA',
    content: `<div class="napa-avas">
      <h3>📍 16 個子 AVA 詳解</h3>
      <div class="avas-grid">
        <div class="ava-card valley-floor">
          <h4>Oakville</h4>
          <p>礫石沖積扇的精華地帶，Napa Cabernet 的心臟。Robert Mondavi Winery 在此帶動現代 Napa 葡萄酒革命。</p>
          <div class="ava-wines">Cabernet Sauvignon 標竿</div>
          <div class="ava-producers">Opus One、Far Niente、Nickel & Nickel</div>
        </div>
        <div class="ava-card valley-floor">
          <h4>Rutherford</h4>
          <p>「Rutherford Dust」—— Rutherford 特有的礫石土壤帶來的特殊單寧質地，被形容為「塵土感」風格。</p>
          <div class="ava-wines">帶「Rutherford Dust」的 Cabernet</div>
          <div class="ava-producers">Inglenook、Cakebread、Beaulieu Vineyard</div>
        </div>
        <div class="ava-card valley-floor">
          <h4>Stags Leap District</h4>
          <p>以絲般單寧和優雅結構著稱。1976 年「巴黎評判」冠軍 Stag's Leap Wine Cellars 就在此。</p>
          <div class="ava-wines">優雅細緻的 Cabernet Sauvignon</div>
          <div class="ava-producers">Stag's Leap Wine Cellars、Chimney Rock、Shafer</div>
        </div>
        <div class="ava-card valley-floor">
          <h4>Yountville</h4>
          <p>法式料理傳奇（French Laundry）所在地；Domaine Chandon 氣泡酒名莊，涼爽微氣候。</p>
          <div class="ava-wines">細緻 Cabernet、優質氣泡酒</div>
          <div class="ava-producers">Domaine Chandon、Kapcsandy</div>
        </div>
        <div class="ava-card mountain">
          <h4>Howell Mountain</h4>
          <p>海拔 400-900 公尺山地 AVA，高於霧線，陽光充足。單寧緊實，需長期陳年。</p>
          <div class="ava-wines">濃縮耐久 Cabernet、Zinfandel</div>
          <div class="ava-producers">Dunn Vineyards、Summit Lake</div>
        </div>
        <div class="ava-card mountain">
          <h4>Spring Mountain District</h4>
          <p>Napa 西側山地，火山岩和沉積岩混合土壤，生產具礦石感和複雜度的 Cabernet。</p>
          <div class="ava-wines">具礦石感的山地 Cabernet</div>
          <div class="ava-producers">Philip Togni、Pride Mountain</div>
        </div>
        <div class="ava-card mountain">
          <h4>Diamond Mountain District</h4>
          <p>Calistoga 西北山地，著名的 Diamond Mountain 土壤——白色石英岩碎石混合火山土。</p>
          <div class="ava-wines">濃縮有力的 Cabernet</div>
          <div class="ava-producers">CONSTANT Diamond Mountain、Diamond Creek</div>
        </div>
        <div class="ava-card mountain">
          <h4>Atlas Peak</h4>
          <p>Napa 東側高原，海拔 600-900 公尺，土壤富含石灰岩（在加州罕見），賦予天然酸度。</p>
          <div class="ava-wines">高酸度、清雅的 Cabernet 和 Sangiovese</div>
          <div class="ava-producers">Kongsgaard、William Hill</div>
        </div>
        <div class="ava-card other">
          <h4>Carneros（Los Carneros）</h4>
          <p>橫跨 Napa 和 Sonoma 南端，最涼爽的 AVA，以世界級 Pinot Noir、Chardonnay 和起泡酒著稱。</p>
          <div class="ava-wines">Pinot Noir、Chardonnay、Sparkling</div>
          <div class="ava-producers">Domaine Carneros、Etude</div>
        </div>
        <div class="ava-card other">
          <h4>St. Helena</h4>
          <p>谷地中心城鎮，涵蓋廣泛的土壤類型，是多個傳奇酒莊的所在地。</p>
          <div class="ava-wines">多樣化 Cabernet 和 Merlot</div>
          <div class="ava-producers">Spottswoode、Louis M. Martini</div>
        </div>
        <div class="ava-card other">
          <h4>Calistoga</h4>
          <p>最溫暖的子 AVA，火山岩土壤，生產加州最豐厚的 Cabernet 和 Zinfandel。</p>
          <div class="ava-wines">豐厚 Cabernet、Zinfandel</div>
          <div class="ava-producers">Chateau Montelena、Jericho Canyon</div>
        </div>
      </div>
      <p class="ava-note">* 其他子 AVA 包含：Coombsville、Chiles Valley、Wild Horse Valley、Oak Knoll District、Wooden Valley、Mount Veeder</p>
    </div>`
  },

  {
    title: 'Napa Valley 傳奇酒莊',
    content: `<div class="napa-producers">
      <h3>🏰 不可不知的 Napa Valley 名莊</h3>
      <div class="producers-grid">
        <div class="producer-card legendary">
          <h4>Opus One</h4>
          <p>Robert Mondavi 與波爾多一級名莊 Mouton-Rothschild 的 Baron Philippe de Rothschild 聯合創立（1979年），是新舊世界葡萄酒合作的里程碑。Oakville 產區，波爾多混釀風格。</p>
          <div class="p-label">📍 Oakville · 年份約 USD 250-400+</div>
        </div>
        <div class="producer-card legendary">
          <h4>Harlan Estate</h4>
          <p>「Napa 膜拜酒」的代表，由 Bill Harlan 創立。每年只生產約 2,000 箱，Wine Advocate 多次給予 100 分。Oakville 西側山坡，Cabernet 主導的波爾多混釀。</p>
          <div class="p-label">📍 Oakville · 年份超過 USD 500</div>
        </div>
        <div class="producer-card iconic">
          <h4>Stag's Leap Wine Cellars</h4>
          <p>1976 年「巴黎評判」紅酒冠軍。Warren Winiarski 創立，如今由 Piero Antinori（義大利）和 Ste. Michelle Wine Estates 聯合持有。</p>
          <div class="p-label">📍 Stags Leap District</div>
        </div>
        <div class="producer-card iconic">
          <h4>Chateau Montelena</h4>
          <p>1976 年「巴黎評判」白酒冠軍，電影《Bottle Shock》的主角。Jim Barrett 家族酒莊，Chardonnay 和 Cabernet 均是標竿。</p>
          <div class="p-label">📍 Calistoga</div>
        </div>
        <div class="producer-card historic">
          <h4>Robert Mondavi Winery</h4>
          <p>Robert Mondavi 是現代 Napa 葡萄酒工業的奠基人，1966 年創立此莊，首度在標籤標注葡萄品種，推廣 Fumé Blanc（Sauvignon Blanc 的品牌化）。</p>
          <div class="p-label">📍 Oakville</div>
        </div>
        <div class="producer-card historic">
          <h4>Inglenook</h4>
          <p>1879 年創立，是 Napa 最具歷史意義的酒莊之一；後被 Francis Ford Coppola（電影導演）購回，重新以 Inglenook 之名發布，致力恢復原有的傳奇地位。</p>
          <div class="p-label">📍 Rutherford</div>
        </div>
        <div class="producer-card boutique">
          <h4>Screaming Eagle</h4>
          <p>Napa 最著名的「膜拜酒」之一。每年產量僅數百箱，拍賣市場上備受追捧，1992 年份曾在拍賣會以 USD 500,000 一瓶售出（6L 裝）。</p>
          <div class="p-label">📍 Oakville</div>
        </div>
        <div class="producer-card boutique">
          <h4>Schramsberg Vineyards</h4>
          <p>加州精品氣泡酒的領導品牌，1862 年創立（全加州最古老酒莊之一）。1972 年尼克森總統訪華時攜帶此酒，留下「外交氣泡酒」的傳奇。</p>
          <div class="p-label">📍 Calistoga · 氣泡酒</div>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Napa Cabernet Sauvignon 品飲指南',
    content: `<div class="napa-tasting">
      <h3>🍷 Napa Cabernet Sauvignon 品飲解析</h3>
      <div class="tasting-profile">
        <h4>典型風味輪廓</h4>
        <div class="flavor-profile">
          <div class="fp-category primary">
            <h5>一級香氣（果香）</h5>
            <ul>
              <li>🫐 黑莓、黑醋栗（Cassis）</li>
              <li>🍒 黑櫻桃、李子</li>
              <li>🍒 有時帶有蔓越莓（涼爽年份 / 涼爽子 AVA）</li>
            </ul>
          </div>
          <div class="fp-category secondary">
            <h5>二級香氣（釀造）</h5>
            <ul>
              <li>🪵 法國或美國橡木桶帶來的香草、可可、雪松</li>
              <li>☕ 咖啡、烤橡木（美國桶更明顯）</li>
              <li>🌹 玫瑰花瓣（成熟年份）</li>
            </ul>
          </div>
          <div class="fp-category tertiary">
            <h5>三級香氣（陳年）</h5>
            <ul>
              <li>🌿 雪松、煙燻</li>
              <li>🫒 橄欖、皮革、菸草</li>
              <li>🌏 泥土、鐵礦感（Stags Leap District 特色）</li>
            </ul>
          </div>
        </div>
        <div class="structure-profile">
          <h4>結構特點</h4>
          <div class="structure-grid">
            <div class="sp-item"><strong>酒精：</strong>通常 13.5-15.5%，飽滿豐厚</div>
            <div class="sp-item"><strong>單寧：</strong>依子 AVA 而異——山地（Howell Mountain）單寧緊實，谷底（Rutherford）單寧絲滑</div>
            <div class="sp-item"><strong>酸度：</strong>中等，通常不如波爾多或勃根地高</div>
            <div class="sp-item"><strong>陳年潛力：</strong>頂級酒款 20-30+ 年，一般酒款 5-15 年</div>
          </div>
        </div>
      </div>
      <div class="pairing-guide">
        <h4>🥩 餐酒搭配</h4>
        <ul>
          <li>🥩 美式烤牛排（最經典搭配）</li>
          <li>🍖 紅燒牛肉、烤羊排</li>
          <li>🧀 熟成切達乳酪、帕馬森</li>
          <li>🍄 松露料理、蘑菇燉飯</li>
        </ul>
      </div>
    </div>`
  },

  {
    component: 'NapaSonomaCompareSlide',
    title: '⚖️ Napa vs Sonoma 雙雄對比互動詳解',
    description: '切換「一覽對比 / 子 AVA / 代表酒莊 / 風格總結」4 個面向，詳解 Napa 與 Sonoma 的根本差異'
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
            question: '1976 年「巴黎評判」紅酒組冠軍來自 Napa Valley 的哪個子 AVA？',
            options: ['A. Oakville', 'B. Rutherford', 'C. Stags Leap District', 'D. Howell Mountain'],
            correct: 2,
            explanation: 'Stag\'s Leap Wine Cellars 1973 Cabernet Sauvignon 來自 Stags Leap District，在 1976 年巴黎評判中奪冠，以絲滑單寧和優雅結構著稱。'
          },
          {
            type: 'single',
            question: '「Rutherford Dust」是指什麼？',
            options: ['A. Rutherford 的灰塵汙染問題', 'B. Rutherford 土壤礫石帶來的特殊塵土感單寧質地', 'C. Rutherford 的乾旱氣候', 'D. Rutherford 特有的白葡萄酒風格'],
            correct: 1,
            explanation: '「Rutherford Dust」是指 Rutherford 子 AVA 特有的礫石土壤帶來的單寧質地——一種帶有塵土感的單寧結構，是該產區 Cabernet Sauvignon 的標誌性風格。'
          },
          {
            type: 'single',
            question: 'Opus One 是哪兩個名莊合作創立的？',
            options: ['A. Chateau Margaux 和 Robert Mondavi', 'B. Mouton-Rothschild 和 Robert Mondavi', 'C. Petrus 和 Screaming Eagle', 'D. Stag\'s Leap 和 Harlan Estate'],
            correct: 1,
            explanation: 'Opus One 由美國 Robert Mondavi 和法國波爾多一級名莊 Château Mouton-Rothschild 的 Baron Philippe de Rothschild 聯合創立於 1979 年，是新舊世界合作的歷史性傳奇。'
          },
          {
            type: 'single',
            question: 'Napa Valley 中哪個子 AVA 以罕見的石灰岩土壤著稱，賦予葡萄酒更高的天然酸度？',
            options: ['A. Oakville', 'B. Rutherford', 'C. Atlas Peak', 'D. Calistoga'],
            correct: 2,
            explanation: 'Atlas Peak 位於 Napa 東側高原，海拔 600-900 公尺，富含石灰岩土壤，在加州相當罕見，賦予葡萄酒更高的天然酸度，適合釀造 Cabernet Sauvignon 和 Sangiovese。'
          },
          {
            type: 'single',
            question: '以下哪個描述最準確地形容 Napa Valley Cabernet Sauvignon 的特點？',
            options: ['A. 輕盈清雅，酸度高，適合年輕飲用', 'B. 豐厚飽滿，黑果香為主，單寧圓潤，橡木風味明顯', 'C. 以礦石感和高酸度為主，類似勃根地 Pinot Noir', 'D. 以花香和紅果為主，適合配海鮮'],
            correct: 1,
            explanation: 'Napa Valley Cabernet Sauvignon 以豐厚飽滿著稱：黑莓、黑醋栗、李子等黑果香，美國或法國橡木帶來香草、雪松和巧克力，單寧圓潤（尤其是谷底產區），酒精偏高（13.5-15.5%）。'
          }
        ]
      }
    }
  }
]
