/**
 * CA-L1-3 Napa Valley：16 個子 AVA 的 Cabernet 帝國
 * 16 個子 AVA 的南北氣候梯度、頂級酒莊與 Cabernet Sauvignon 品飲解析
 * 資料來源：Napa Valley Vintners（napavintners.com）、Discover California Wines（discovercaliforniawines.com）、
 * TTB AVA 認定紀錄（ttb.gov）、Napa Green（napagreen.org）、Wikipedia Napa Valley AVA 條目、
 * Stag's Leap Wine Cellars／Chateau Montelena／Beaulieu Vineyard／Schramsberg 官網、
 * Wine Spectator、Decanter、Smithsonian Magazine（巴黎評判報導）
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Napa Valley——一個聽到名字就令人肅然起敬的葡萄酒聖地。這座僅占加州葡萄酒種植面積約 4% 的狹長谷地，卻生產全球最昂貴、最被收藏的 Cabernet Sauvignon 之一。16 個歷史悠久的子 AVA（2024 年底新增 Crystal Springs 後達 17 個），每一個都有自己的風土個性和頂級酒莊。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🏔️ 理解 Napa Valley 的南北氣候差異</h4>
            <p>掌握從 Carneros（涼）到 Calistoga（熱）的風土漸變，以及山地 AVA 與谷底 AVA 的結構差異</p>
          </div>
          <div class="point-item">
            <h4>📍 認識 16 個子 AVA 的個性</h4>
            <p>區分 Oakville、Rutherford、Stags Leap District、Howell Mountain 等重要子產區的土壤、氣候與代表酒莊</p>
          </div>
          <div class="point-item">
            <h4>🍷 Napa Cabernet 的風格解析</h4>
            <p>理解為何 Napa Cabernet 能與波爾多頂級名莊並駕齊驅</p>
          </div>
          <div class="point-item">
            <h4>🏛️ 頂級酒莊介紹</h4>
            <p>認識 Opus One、Screaming Eagle、Harlan Estate 等傳奇莊園的創立故事與風格</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: 'Napa Valley 概覽：小而精的奇蹟',
    highlights: [
      { id: 1, icon: '🍇', title: '僅占加州 4% 種植面積', content: 'Napa Valley 種植面積雖小，卻是加州最具國際知名度與價格指標性的產區' },
      { id: 2, icon: '🌿', title: 'Napa Green 永續認證', content: '94% 的 Napa Valley Vintners 會員參與 Napa Green 土地或酒莊認證計畫，是全美精品產區永續典範之一' }
    ],
    content: `<div class="napa-overview">
      <h3>🏆 Napa Valley — 美國最偉大的葡萄酒谷地</h3>
      <div class="overview-stats">
        <div class="stat-block">
          <div class="stat-number">45,342</div>
          <div class="stat-desc">英畝葡萄園（僅占加州葡萄酒面積約 4%）</div>
        </div>
        <div class="stat-block">
          <div class="stat-number">16</div>
          <div class="stat-desc">個歷史悠久的子 AVA，各有獨特個性</div>
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
          <li>🌡️ <strong>地中海型氣候：</strong>冬季溫和多雨，夏季炎熱乾燥，葡萄園大多依賴灌溉補水</li>
          <li>🏛️ <strong>全美第一個農業保護區：</strong>1968 年立法保護葡萄農地，禁止商業開發，是全美農業土地保育立法先驅</li>
          <li>🍷 <strong>Cabernet 王國：</strong>Cabernet Sauvignon 是全谷種植面積最大的品種</li>
          <li>💰 <strong>全球最昂貴葡萄酒之鄉：</strong>Screaming Eagle 和 Harlan Estate 等「膜拜酒」（Cult Wine）每瓶可達數百甚至數千美元</li>
          <li>🌿 <strong>永續農業先鋒：</strong>Napa Green 認證計畫涵蓋 94% 的 Napa Valley Vintners 會員，加州逾四成通過永續認證的酒莊都位於 Napa County</li>
          <li>📈 <strong>2024 年新增第 17 個子 AVA：</strong>Crystal Springs 於 2024 年 11 月正式生效，是自 2011 年 Coombsville 之後 Napa 首個新增的子 AVA，座落於 St. Helena、Calistoga 與 Howell Mountain 之間的山坡地帶，幾乎全為 Cabernet Sauvignon</li>
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
          <div class="timeline-content"><strong>🏰 Inglenook 創立</strong><p>芬蘭裔船運鉅子 Gustave Niebaum 創立 Inglenook，奠定 Napa Valley 早期國際聲望，後由電影導演 Francis Ford Coppola 於 1975 年購回並復興，2011 年正式恢復「Inglenook」原名。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge ancient">1900</div>
          <div class="timeline-content"><strong>🌸 Beaulieu Vineyard 創立</strong><p>法國移民 Georges de Latour 在 Rutherford 創立 Beaulieu Vineyard（BV），從歐洲引進抗根瘤蚜蟲的砧木；禁酒令解除後聘請俄裔釀酒大師 André Tchelistcheff，1936 年推出的 Georges de Latour Private Reserve 成為 Napa 標竿酒款。</p></div>
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
          <div class="timeline-badge">1970</div>
          <div class="timeline-content"><strong>🦅 Stag's Leap Wine Cellars 創立</strong><p>Warren Winiarski 買下鄰近 Nathan Fay 葡萄園的 44 英畝地，種下 Cabernet Sauvignon；1973 年份正是後來奪得巴黎評判冠軍的那支酒。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1976</div>
          <div class="timeline-content"><strong>🏆 巴黎評判（Judgment of Paris）</strong><p>Stag's Leap 紅酒、Chateau Montelena 白酒雙冠，震驚法國葡萄酒界，Napa Valley 登上世界舞台</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1978–79</div>
          <div class="timeline-content"><strong>🤝 Opus One 成立</strong><p>Robert Mondavi 與波爾多一級名莊 Château Mouton-Rothschild 的 Baron Philippe de Rothschild 攜手合資，1979 年份是首個年份，1984 年才正式對外發售，是新舊世界葡萄酒史上最重要的跨洋合作。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge doc">1981</div>
          <div class="timeline-content"><strong>📜 加州第一個 AVA</strong><p>Napa Valley 獲聯邦政府認定為加州第一個「美國葡萄種植區（AVA）」，確立法規保護地位</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1983–2011</div>
          <div class="timeline-content"><strong>🧩 16 個子 AVA 陸續劃定</strong><p>從 1983 年 Los Carneros、Howell Mountain 率先獲認證，到 2011 年 Coombsville 成為第 16 個子 AVA，歷經近 30 年逐步建立起今日的巢狀 AVA 系統。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1982–1990s</div>
          <div class="timeline-content"><strong>⚠️ AXR1 根瘤蚜蟲危機</strong><p>廣泛種植的 AXR1 砧木不敵新型根瘤蚜蟲（Biotype B），近三分之二 Napa 葡萄園被迫剷除重植，重建成本逾 10 億美元，但也促成更精細的地塊與砧木選擇研究。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1984、1986</div>
          <div class="timeline-content"><strong>💎 「膜拜酒」時代開啟</strong><p>Bill Harlan 於 1984 年創立 Harlan Estate（1990 年首個年份），Jean Phillips 於 1986 年買下 Oakville 葡萄園創立 Screaming Eagle（1992 年首個年份），開啟 Napa 極少量、高分數、高價位的「Cult Wine」風潮。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge modern">2024</div>
          <div class="timeline-content"><strong>🆕 Crystal Springs 成為第 17 個子 AVA</strong><p>TTB 於 2024 年 11 月正式認定 Crystal Springs of Napa Valley AVA，是繼 2011 年 Coombsville 之後 Napa 睽違 13 年的新產區，全區僅約 230 英畝葡萄園，幾乎全種 Cabernet Sauvignon。</p></div>
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
      <p>Napa Valley 是一個南北走向的谷地，南北溫差可達 10°C，造就截然不同的葡萄酒風格。谷地兩側還各有一列山脈——西側 Mayacamas 山脈、東側 Vaca 山脈——山坡地又發展出與谷底截然不同的「山地 AVA」風格。</p>

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

      <div class="mountain-vs-valley">
        <h4>⛰️ 山地 AVA vs. 谷底 AVA</h4>
        <p>除了南北溫度梯度，Napa 還有一組同樣重要的對比：谷底沖積土 AVA（如 Oakville、Rutherford）氣候穩定、單寧圓潤；山地火山岩 AVA（如 Howell Mountain、Spring Mountain District）位於霧線之上，日照更充足但土壤貧瘠、產量低，單寧更緊實、需要更長時間陳年。侍酒師常以「Valley Floor vs. Mountain Fruit」來描述這組風格光譜。</p>
      </div>
    </div>`
  },

  {
    title: 'Napa Valley 子 AVA 詳解（一）：谷底核心產區',
    content: `<div class="napa-avas">
      <h3>📍 Valley Floor — 谷底核心子 AVA</h3>
      <div class="avas-grid">
        <div class="ava-card valley-floor">
          <h4>Oakville（1993 年認定）</h4>
          <p>礫石沖積扇的精華地帶，Napa Cabernet 的心臟。Robert Mondavi Winery 在此帶動現代 Napa 葡萄酒革命，Harlan Estate 和 Screaming Eagle 兩大「膜拜酒」也座落於此。</p>
          <div class="ava-wines">Cabernet Sauvignon 標竿</div>
          <div class="ava-producers">Opus One、Far Niente、Nickel & Nickel、Harlan Estate、Screaming Eagle</div>
        </div>
        <div class="ava-card valley-floor">
          <h4>Rutherford（1993 年認定）</h4>
          <p>「Rutherford Dust」—— Rutherford 特有的礫石土壤帶來的特殊單寧質地，被形容為「塵土感」風格。Robert Mondavi 曾說：「To know Rutherford dust is to know the essence of Napa Valley Cabernet.」</p>
          <div class="ava-wines">帶「Rutherford Dust」的 Cabernet</div>
          <div class="ava-producers">Inglenook、Cakebread、Beaulieu Vineyard（創立於 1900 年）</div>
        </div>
        <div class="ava-card valley-floor">
          <h4>Stags Leap District（1989 年認定）</h4>
          <p>以絲般單寧和優雅結構著稱，是最早以「單寧質地」而非單純「產量」申請 AVA 的產區之一。1976 年「巴黎評判」冠軍 Stag's Leap Wine Cellars（1970 年由 Warren Winiarski 創立）就在此。</p>
          <div class="ava-wines">優雅細緻的 Cabernet Sauvignon</div>
          <div class="ava-producers">Stag's Leap Wine Cellars、Chimney Rock、Shafer</div>
        </div>
        <div class="ava-card valley-floor">
          <h4>Yountville（1999 年認定）</h4>
          <p>法式料理傳奇餐廳 French Laundry 所在地；Domaine Chandon（1973 年由香檳集團 Moët Hennessy 創立，是 Napa 第一座法資氣泡酒莊）帶來涼爽微氣候中的優質氣泡酒傳統。</p>
          <div class="ava-wines">細緻 Cabernet、優質氣泡酒</div>
          <div class="ava-producers">Domaine Chandon、Kapcsandy</div>
        </div>
        <div class="ava-card valley-floor">
          <h4>Oak Knoll District of Napa Valley（2004 年認定）</h4>
          <p>Napa Valley 中南段偏涼爽的谷底 AVA，土壤與氣候多元，適合白酒與紅酒並存——是全谷少數能同時種出優質 Riesling、Chardonnay 與 Cabernet 的產區。</p>
          <div class="ava-wines">多元品種，白酒與紅酒兼具</div>
          <div class="ava-producers">Trefethen Family Vineyards、Monticello Vineyards</div>
        </div>
        <div class="ava-card valley-floor">
          <h4>St. Helena（1995 年認定）</h4>
          <p>谷地中心城鎮，涵蓋廣泛的土壤類型，是多個傳奇酒莊的所在地，也是 Napa Valley 精品酒莊觀光的核心街區。</p>
          <div class="ava-wines">多樣化 Cabernet 和 Merlot</div>
          <div class="ava-producers">Spottswoode、Louis M. Martini</div>
        </div>
        <div class="ava-card valley-floor">
          <h4>Coombsville（2011 年認定，第 16 個子 AVA）</h4>
          <p>納帕市（City of Napa）東側的火山岩高原，受 San Pablo Bay 涼風調節，是 Napa 最晚獲認證的傳統子 AVA。近年因涼爽氣候與優雅風格逐漸受到侍酒師關注。</p>
          <div class="ava-wines">結構緊緻、酸度明亮的 Cabernet</div>
          <div class="ava-producers">Farella Vineyard、Coombsville 多為精品小型莊園</div>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Napa Valley 子 AVA 詳解（二）：山地與其他特色產區',
    content: `<div class="napa-avas">
      <h3>⛰️ Mountain AVAs — 山地子 AVA</h3>
      <div class="avas-grid">
        <div class="ava-card mountain">
          <h4>Howell Mountain（1983 年認定，Napa 最早的子 AVA之一）</h4>
          <p>海拔約 400-900 公尺山地 AVA，高於霧線，陽光充足。火山岩土壤貧瘠、排水極佳，單寧緊實，需長期陳年。</p>
          <div class="ava-wines">濃縮耐久 Cabernet、Zinfandel</div>
          <div class="ava-producers">Dunn Vineyards（1979 年由前 Caymus 釀酒師 Randy Dunn 創立）、Summit Lake</div>
        </div>
        <div class="ava-card mountain">
          <h4>Spring Mountain District（1993 年認定）</h4>
          <p>Napa 西側 Mayacamas 山脈山地，火山岩和沉積岩混合土壤，生產具礦石感和複雜度的 Cabernet。</p>
          <div class="ava-wines">具礦石感的山地 Cabernet</div>
          <div class="ava-producers">Philip Togni、Pride Mountain</div>
        </div>
        <div class="ava-card mountain">
          <h4>Diamond Mountain District（2001 年認定）</h4>
          <p>Calistoga 西北山地，著名的 Diamond Mountain 土壤——白色石英岩碎石混合火山土，生產濃縮有力的酒款。</p>
          <div class="ava-wines">濃縮有力的 Cabernet</div>
          <div class="ava-producers">Diamond Creek Vineyards、Constant Diamond Mountain</div>
        </div>
        <div class="ava-card mountain">
          <h4>Atlas Peak（1992 年認定）</h4>
          <p>Napa 東側 Vaca 山脈高原，海拔約 600-900 公尺，土壤富含石灰岩（在加州相當罕見），賦予天然酸度。</p>
          <div class="ava-wines">高酸度、清雅的 Cabernet 和 Sangiovese</div>
          <div class="ava-producers">Kongsgaard、William Hill</div>
        </div>
        <div class="ava-card mountain">
          <h4>Mount Veeder（1990 年認定）</h4>
          <p>Napa 西南側 Mayacamas 山脈最高處之一，海拔可達 600 公尺以上，多霧森林環繞，土壤淺薄、產量極低，單寧結構在 Napa 眾山地 AVA 中最為堅硬緊實。</p>
          <div class="ava-wines">結構最緊實堅硬的山地 Cabernet</div>
          <div class="ava-producers">Mount Veeder Winery、Lokoya</div>
        </div>
      </div>

      <h3>🌍 其他特色子 AVA</h3>
      <div class="avas-grid">
        <div class="ava-card other">
          <h4>Los Carneros（1983 年認定，橫跨 Napa／Sonoma）</h4>
          <p>橫跨 Napa 和 Sonoma 南端，最涼爽的 AVA，以世界級 Pinot Noir、Chardonnay 和起泡酒著稱。</p>
          <div class="ava-wines">Pinot Noir、Chardonnay、Sparkling</div>
          <div class="ava-producers">Domaine Carneros、Etude</div>
        </div>
        <div class="ava-card other">
          <h4>Calistoga（2009 年認定，Napa 最晚才劃定的谷底 AVA）</h4>
          <p>全谷最溫暖的子 AVA，火山岩土壤（Calistoga 因溫泉與間歇泉聞名），生產加州最豐厚的 Cabernet 和 Zinfandel。</p>
          <div class="ava-wines">豐厚 Cabernet、Zinfandel</div>
          <div class="ava-producers">Chateau Montelena、Jericho Canyon</div>
        </div>
        <div class="ava-card other">
          <h4>Chiles Valley District（1999 年認定）</h4>
          <p>Napa 東側一個獨立的小型高地谷中谷，海拔約 400 公尺，日夜溫差大，氣候比主谷更涼爽，是產區中相對低調但潛力不容小覷的角落。</p>
          <div class="ava-wines">Zinfandel、Sauvignon Blanc、Cabernet Sauvignon</div>
          <div class="ava-producers">Volker Eisele Family Estate</div>
        </div>
        <div class="ava-card other">
          <h4>Wild Horse Valley（1988 年認定，面積最小的子 AVA之一）</h4>
          <p>Napa 東南角一個孤立的火山岩高原，海拔約 500-700 公尺，是 Napa 最涼爽、面積最小、最少被談論的子 AVA，種植面積僅約數十英畝，以 Pinot Noir 與 Chardonnay 為主，多供應氣泡酒基酒。</p>
          <div class="ava-wines">Pinot Noir、Chardonnay（多作氣泡酒基酒）</div>
          <div class="ava-producers">多為小型精品莊園，鮮少獨立裝瓶</div>
        </div>
      </div>
      <p class="ava-note">💎 <strong>第 17 個子 AVA：</strong>2024 年新增的 Crystal Springs of Napa Valley 位於 St. Helena、Calistoga 與 Howell Mountain 之間的山坡地，全區約 4,000 英畝土地中僅約 230 英畝為葡萄園，幾乎全種植 Cabernet Sauvignon，是繼 2011 年 Coombsville 之後 Napa 睽違 13 年的新產區。</p>
    </div>`
  },

  {
    title: 'Napa Valley 的永續農業',
    content: `<div class="napa-sustainability">
      <h3>🌿 Napa Green：從谷底到山頭的永續承諾</h3>
      <div class="stat-grid">
        <div class="stat-box"><div class="stat-number">94%</div><div class="stat-label">Napa Valley Vintners 會員參與 Napa Green 認證計畫</div></div>
        <div class="stat-box"><div class="stat-number">40%</div><div class="stat-label">加州所有通過永續認證酒莊，位於 Napa County 的比例</div></div>
        <div class="stat-box"><div class="stat-number">1968</div><div class="stat-label">全美第一個農業保護區立法年份</div></div>
      </div>
      <div class="sustainability-content">
        <p>Napa Green 是由 Napa Valley Vintners 推動的雙軌認證體系：</p>
        <ul>
          <li><strong>Napa Green Land（土地認證）：</strong>聚焦水資源管理、防止水土流失、棲地保護與碳吸存，要求酒莊逐步淘汰除草劑（草甘膦）使用</li>
          <li><strong>Napa Green Winery（酒莊認證）：</strong>聚焦能源效率、廢棄物管理與空氣品質，鼓勵酒莊採用太陽能與節水釀造設備</li>
        </ul>
        <p>這項計畫與 1968 年的農業保護區立法一脈相承——Napa 很早就體認到，唯有保護山坡地與水源，才能維持長期的葡萄酒品質與地價。</p>
      </div>
    </div>`
  },

  {
    title: 'Napa Valley 傳奇酒莊',
    content: `<div class="napa-producers">
      <h3>🏰 不可不知的 Napa Valley 名莊</h3>
      <div class="producers-grid">
        <div class="producer-card legendary">
          <h4>Opus One</h4>
          <p>Robert Mondavi 與波爾多一級名莊 Mouton-Rothschild 的 Baron Philippe de Rothschild 於 1978-79 年攜手創立，是新舊世界葡萄酒合作的里程碑。1979 年份為首個年份，1984 年正式對外發售。Oakville 產區，波爾多混釀風格。</p>
          <div class="p-label">📍 Oakville · 創立 1978-79 年</div>
        </div>
        <div class="producer-card legendary">
          <h4>Harlan Estate</h4>
          <p>「Napa 膜拜酒」的代表，1984 年由 Bill Harlan 創立，號稱「200 年計畫」。1990 年份是首個年份，直到 1996 年才對外公開發售。每年只生產約 2,000 箱，Wine Advocate 多次給予滿分評價。Oakville 西側山坡，Cabernet 主導的波爾多混釀。</p>
          <div class="p-label">📍 Oakville · 創立 1984 年</div>
        </div>
        <div class="producer-card iconic">
          <h4>Stag's Leap Wine Cellars</h4>
          <p>1970 年由 Warren Winiarski 創立，1976 年「巴黎評判」紅酒冠軍即是其 1973 年份 S.L.V. Estate Cabernet Sauvignon。如今由 Piero Antinori（義大利）和 Ste. Michelle Wine Estates 聯合持有。</p>
          <div class="p-label">📍 Stags Leap District · 創立 1970 年</div>
        </div>
        <div class="producer-card iconic">
          <h4>Chateau Montelena</h4>
          <p>酒莊建築始建於 1882 年（Alfred Tubbs），1968 年由 Jim Barrett 與 Lee Paschich 買下重整，1972 年恢復釀酒；1973 年份 Chardonnay 是 1976 年「巴黎評判」白酒冠軍，也是電影《Bottle Shock》的主角酒莊。</p>
          <div class="p-label">📍 Calistoga · 創立 1882 年（1968 年復興）</div>
        </div>
        <div class="producer-card historic">
          <h4>Robert Mondavi Winery</h4>
          <p>Robert Mondavi 是現代 Napa 葡萄酒工業的奠基人，1966 年創立此莊，首度在標籤標注葡萄品種，推廣 Fumé Blanc（Sauvignon Blanc 的品牌化行銷）。</p>
          <div class="p-label">📍 Oakville · 創立 1966 年</div>
        </div>
        <div class="producer-card historic">
          <h4>Inglenook</h4>
          <p>1879 年由芬蘭裔船運鉅子 Gustave Niebaum 創立，是 Napa 最具歷史意義的酒莊之一；1975 年被電影導演 Francis Ford Coppola 購回，2011 年正式恢復「Inglenook」原名，致力恢復原有的傳奇地位。</p>
          <div class="p-label">📍 Rutherford · 創立 1879 年</div>
        </div>
        <div class="producer-card historic">
          <h4>Beaulieu Vineyard（BV）</h4>
          <p>1900 年由法國移民 Georges de Latour 創立，酒莊名意為「美麗之地」。禁酒令後延攬俄裔釀酒大師 André Tchelistcheff，1936 年首釀的 Georges de Latour Private Reserve 是 Napa 最具歷史意義的標竿酒款之一。</p>
          <div class="p-label">📍 Rutherford · 創立 1900 年</div>
        </div>
        <div class="producer-card boutique">
          <h4>Screaming Eagle</h4>
          <p>Napa 最著名的「膜拜酒」之一。1986 年 Jean Phillips 買下 57 英畝 Oakville 葡萄園，1992 年份是首個年份，1995 年正式發售即獲 Robert Parker 99 分高分。每年產量僅數百箱，拍賣市場上備受追捧。</p>
          <div class="p-label">📍 Oakville · 創立 1986 年</div>
        </div>
        <div class="producer-card boutique">
          <h4>Schramsberg Vineyards</h4>
          <p>加州精品氣泡酒的領導品牌，1862 年 Jacob Schram 創立，是全加州最古老酒莊之一；1965 年由 Jack 與 Jamie Davies 夫婦重新復興。1972 年尼克森總統訪華時攜帶此酒，留下「外交氣泡酒」的傳奇。</p>
          <div class="p-label">📍 Calistoga · 創立 1862 年（1965 年復興）· 氣泡酒</div>
        </div>
        <div class="producer-card historic">
          <h4>Caymus Vineyards</h4>
          <p>1972 年由 Wagner 家族創立，首個年份僅 240 箱 Cabernet Sauvignon；旗艦酒款 Special Selection 分別於 1984、1990 年份兩度獲 Wine Spectator「年度風雲酒款」，是史上唯一兩度獲此殊榮的酒款。Wagner 家族在 Napa 的農耕淵源可追溯至 1906 年。</p>
          <div class="p-label">📍 Rutherford · 創立 1972 年</div>
        </div>
        <div class="producer-card historic">
          <h4>Duckhorn Vineyards</h4>
          <p>1976 年由「Mr. Merlot」Dan Duckhorn 創立，是全美第一家專注釀造頂級單一品種 Merlot 的精品酒莊，在 Cabernet 稱霸的年代率先證明 Merlot 也能獨當一面，帶動 1980-90 年代全美 Merlot 熱潮。</p>
          <div class="p-label">📍 St. Helena · 創立 1976 年</div>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Bordeaux 混釀在 Napa：Meritage 的故事',
    content: `<div class="napa-meritage">
      <h3>🍷 當 Napa 遇上波爾多混釀傳統</h3>
      <div class="meritage-content">
        <p>Napa Valley 雖以單一品種 Cabernet Sauvignon 聞名，但許多頂級酒款其實是「波爾多式混釀」（Bordeaux blend）——以 Cabernet Sauvignon 為主體，搭配 Merlot、Cabernet Franc、Petit Verdot、Malbec 等波爾多許可品種調配而成，藉此增添香氣層次與結構圓潤度。Opus One、Harlan Estate、Beaulieu Vineyard 的頂級酒款都採用這種混釀邏輯。</p>
        <div class="meritage-box">
          <h4>📛 「Meritage」名稱從何而來？</h4>
          <p>美國 TTB 規定：若要在酒標標示單一品種名稱，該品種須占比 75% 以上。但許多酒莊想釀造五、六個品種混調、任何單一品種都不到 75% 的波爾多式酒款，卻無法可用的行銷名稱。1988 年一群 Napa 與 Sonoma 酒莊組成 Meritage Alliance（原名 Meritage Association），透過公開徵名比賽（收到超過 6,000 份投稿）選出「Meritage」一詞——由 merit（優點）與 heritage（傳承）組合而成，專門用於標示波爾多式混釀酒款，且不侵犯法國「Bordeaux」的產區名稱保護。</p>
        </div>
        <div class="blend-partners">
          <h4>常見混釀夥伴品種</h4>
          <ul>
            <li><strong>Merlot：</strong>增添圓潤果香與柔順單寧，中和 Cabernet Sauvignon 的緊澀感</li>
            <li><strong>Cabernet Franc：</strong>帶來花香與草本氣息，提升酒體的香氣複雜度</li>
            <li><strong>Petit Verdot：</strong>少量添加即可加深色澤、增添香料感與結構骨架</li>
            <li><strong>Malbec：</strong>增添深色莓果甜感與圓潤口感，用量通常最少</li>
          </ul>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Napa Valley 的酒鄉觀光',
    content: `<div class="napa-tourism">
      <h3>🚗 兩條貫穿產區的傳奇公路</h3>
      <div class="stat-grid">
        <div class="stat-box"><div class="stat-number">385萬+</div><div class="stat-label">Napa Valley 每年遊客人次</div></div>
        <div class="stat-box"><div class="stat-number">22億+</div><div class="stat-label">每年為 Napa County 帶來的觀光經濟效益（美元）</div></div>
        <div class="stat-box"><div class="stat-number">1852</div><div class="stat-label">Silverado Trail 首次闢建年份</div></div>
      </div>
      <div class="road-compare">
        <div class="road-item">
          <h4>🛣️ Highway 29（State Route 29）</h4>
          <p>貫穿谷地西側、車流量最大的主要幹道，串連 Napa、Yountville、Oakville、Rutherford、St. Helena 到 Calistoga，沿途酒莊密集、遊客最多，是大多數遊客的第一次 Napa 之旅路線。</p>
        </div>
        <div class="road-item">
          <h4>🍇 Silverado Trail</h4>
          <p>1852 年闢建，是連接 Napa 市與 Calistoga 最早的道路，走谷地東側，車流較少、風景優美，沿途約 40 家酒莊坐落於此，是熟悉產區的侍酒師與饕客偏好的「內行人路線」。</p>
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
            <div class="sp-item"><strong>單寧：</strong>依子 AVA 而異——山地（Howell Mountain、Mount Veeder）單寧緊實，谷底（Rutherford）單寧絲滑</div>
            <div class="sp-item"><strong>酸度：</strong>中等，通常不如波爾多或布根地高</div>
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
    title: '近年氣候挑戰：野火與煙燻風味',
    content: `<div class="napa-climate-challenge">
      <h3>🔥 理解「困難年份」：野火如何影響 Napa 葡萄酒</h3>
      <div class="challenge-content">
        <p>近十年氣候變遷讓野火季節愈加嚴峻，2017 年（Atlas Peak、Nuns 大火）與 2020 年（LNU Complex、Glass Fire）是 Napa Valley 近代最受野火衝擊的兩個年份，也讓「煙燻瑕疵」（smoke taint）成為侍酒師與消費者必須認識的專有名詞。</p>
        <div class="taint-explain">
          <h4>什麼是煙燻瑕疵（Smoke Taint）？</h4>
          <p>野火煙霧中的揮發性酚類化合物（volatile phenols）附著在葡萄皮上，經發酵後轉化為帶苦澀感、菸灰、燒焦橡膠般的異味，通常在酒液尾韻最明顯。受影響程度取決於：距離火源遠近、煙霧濃度與持續時間、葡萄當時的成熟階段（愈接近採收愈脆弱）。</p>
        </div>
        <div class="stat-grid">
          <div class="stat-box"><div class="stat-number">2017</div><div class="stat-label">Atlas Peak、Nuns Fire 野火年份</div></div>
          <div class="stat-box"><div class="stat-number">2020</div><div class="stat-label">LNU Complex、Glass Fire 野火年份，部分酒莊放棄該年份 Cabernet 裝瓶</div></div>
          <div class="stat-box"><div class="stat-number">-13.8%</div><div class="stat-label">2020 年加州葡萄壓榨總量較 2019 年下降幅度</div></div>
        </div>
        <p class="challenge-note">💡 對侍酒師而言的實務意義：遇到 2017、2020 年份的 Napa 酒款時，值得留意該酒莊是否公開說明採收與裝瓶決策（部分酒莊選擇該年不推出頂級酒款，或改以副牌／調配酒方式釋出），這也是判斷一家酒莊誠信與品質控管的重要指標。</p>
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
            explanation: 'Opus One 由美國 Robert Mondavi 和法國波爾多一級名莊 Château Mouton-Rothschild 的 Baron Philippe de Rothschild 於 1978-79 年聯合創立，是新舊世界合作的歷史性傳奇。'
          },
          {
            type: 'single',
            question: 'Napa Valley 中哪個子 AVA 以罕見的石灰岩土壤著稱，賦予葡萄酒更高的天然酸度？',
            options: ['A. Oakville', 'B. Rutherford', 'C. Atlas Peak', 'D. Calistoga'],
            correct: 2,
            explanation: 'Atlas Peak 位於 Napa 東側 Vaca 山脈高原，海拔約 600-900 公尺，富含石灰岩土壤，在加州相當罕見，賦予葡萄酒更高的天然酸度，適合釀造 Cabernet Sauvignon 和 Sangiovese。'
          },
          {
            type: 'single',
            question: '2024 年成為 Napa Valley 第 17 個子 AVA、也是繼 2011 年 Coombsville 後睽違 13 年新增的產區是？',
            options: ['A. Wild Horse Valley', 'B. Crystal Springs', 'C. Chiles Valley District', 'D. Mount Veeder'],
            correct: 1,
            explanation: 'Crystal Springs of Napa Valley 於 2024 年 11 月由 TTB 正式認定，位於 St. Helena、Calistoga 與 Howell Mountain 之間的山坡地，全區僅約 230 英畝葡萄園，幾乎全種植 Cabernet Sauvignon。'
          },
          {
            type: 'single',
            question: '以下哪一組是 Napa Valley 山地 AVA（Mountain AVA）的正確組合？',
            options: ['A. Oakville、Rutherford、Yountville', 'B. Howell Mountain、Spring Mountain District、Mount Veeder', 'C. Carneros、Calistoga、St. Helena', 'D. Coombsville、Oak Knoll District、Chiles Valley'],
            correct: 1,
            explanation: 'Howell Mountain、Spring Mountain District、Diamond Mountain District、Atlas Peak、Mount Veeder 是 Napa 的五個山地 AVA，位於霧線之上，土壤貧瘠、產量低，單寧結構比谷底 AVA 更緊實。'
          },
          {
            type: 'single',
            question: 'Napa Green 永續認證計畫涵蓋約多少比例的 Napa Valley Vintners 會員？',
            options: ['A. 約 50%', 'B. 約 75%', 'C. 約 94%', 'D. 100%'],
            correct: 2,
            explanation: 'Napa Green 是 Napa Valley Vintners 推動的土地與酒莊雙軌永續認證計畫，目前涵蓋約 94% 的會員，加州所有通過永續認證的酒莊中，約 40% 位於 Napa County。'
          },
          {
            type: 'single',
            question: '以下哪個描述最準確地形容 Napa Valley Cabernet Sauvignon 的特點？',
            options: ['A. 輕盈清雅，酸度高，適合年輕飲用', 'B. 豐厚飽滿，黑果香為主，單寧圓潤，橡木風味明顯', 'C. 以礦石感和高酸度為主，類似布根地 Pinot Noir', 'D. 以花香和紅果為主，適合配海鮮'],
            correct: 1,
            explanation: 'Napa Valley Cabernet Sauvignon 以豐厚飽滿著稱：黑莓、黑醋栗、李子等黑果香，美國或法國橡木帶來香草、雪松和巧克力，單寧圓潤（尤其是谷底產區），酒精偏高（13.5-15.5%）。'
          }
        ]
      }
    }
  }
]
