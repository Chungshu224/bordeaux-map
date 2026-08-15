/**
 * HU L1-4 主要紅葡萄品種：Kékfrankos、Kadarka、Cabernet Franc 與其他
 */

export const lessonContent = [
  {
    type: 'cover',
    title: '匈牙利主要紅葡萄品種',
    subtitle: 'Kékfrankos、Kadarka、Cabernet Franc 與其他',
    icon: '🍷',
    background: 'linear-gradient(135deg, #8B0000 0%, #4a0e0e 100%)'
  },
  {
    title: 'Kékfrankos — 匈牙利最重要的紅葡萄',
    highlights: [
      { id: 1, icon: '📊', title: '全國種植最廣', content: '超過 8,000 公頃，是匈牙利種植面積最廣的紅葡萄品種，也是奧地利 Blaufränkisch 的同名品種' },
      { id: 2, icon: '🐂', title: '公牛血的核心', content: '埃格爾（Eger）和塞克薩德（Szekszárd）的 Bikavér（公牛血）混釀中是主要品種之一' },
      { id: 3, icon: '🍒', title: '風味特徵', content: '黑櫻桃、藍莓、紫羅蘭、辛香料，高酸度，單寧適中，有很好的清新感' },
      { id: 4, icon: '🌍', title: '國際面孔', content: '在奧地利以 Blaufränkisch 知名，德國叫 Lemberger，匈牙利的 Sopron 最接近奧地利風格' }
    ],
    content: `<div class="grape-detail">
      <p class="lead-text">Kékfrankos（藍色法蘭克 / Blue Frankish）是匈牙利紅葡萄的「國民品種」，以其多樣的風格詮釋著匈牙利各產區的風土個性——從 Sopron 的優雅輕盈到 Villány 的濃郁結構，Kékfrankos 在不同風土下展現迥異面貌。</p>
      <div class="grape-profile">
        <div class="profile-grid">
          <div class="profile-item">
            <span class="label">別名</span>
            <span class="value">Blaufränkisch（奧）、Lemberger（德）</span>
          </div>
          <div class="profile-item">
            <span class="label">成熟期</span>
            <span class="value">中晚熟（9 月下旬-10 月）</span>
          </div>
          <div class="profile-item">
            <span class="label">主要產區</span>
            <span class="value">Sopron, Eger, Szekszárd, Villány</span>
          </div>
          <div class="profile-item">
            <span class="label">總面積</span>
            <span class="value">8,000+ 公頃</span>
          </div>
        </div>
        <div class="style-regions">
          <h4>🗺️ 產區風格差異</h4>
          <div class="style-grid">
            <div class="style-item">
              <strong>Sopron（西北）</strong>：輕盈優雅，接近奧地利 Blaufränkisch 風格
            </div>
            <div class="style-item">
              <strong>Eger（北）</strong>：公牛血混釀的骨架，辛香料感強
            </div>
            <div class="style-item">
              <strong>Szekszárd（南）</strong>：豐郁濃郁，黑色水果，單寧成熟
            </div>
            <div class="style-item">
              <strong>Villány（最南）</strong>：最濃郁，充分成熟，高品質單一品種表現
            </div>
          </div>
        </div>
      </div>
      <div class="clone-box">
        <h4>🧬 血統身世：DNA 揭曉的親本</h4>
        <p>德國 Julius Kühn-Institut 於 2016 年透過 49 組 SSR 分子標記分析，確認 Blaufränkisch（Kékfrankos）的親本為 <strong>Gouais Blanc</strong>（白高維斯，中世紀歐洲廣泛栽培的古老品種）與一個已鮮為人知的品種 <strong>Blaue Zimmettraube</strong>。由於 Gouais Blanc 也是 Chardonnay 與 Gamay 的共同親本，Kékfrankos 因此與這兩個品種是「異母／異父手足」關係——同宗同源的中歐、法國葡萄品種家族網絡，遠比表面上的紅白之分更加緊密。品種起源地一般認為在下施泰爾馬克（今斯洛維尼亞 Styria 一帶）。</p>
      </div>
      <div class="producer-pairing">
        <div class="info-card">
          <h5>🏛️ 代表酒莊</h5>
          <ul>
            <li><strong>Vylyan</strong>：Villány 早期先驅酒莊之一，其 Mandolás 園單一品種 Kékfrankos 展現南部產區濃郁飽滿的風格</li>
            <li><strong>St. Andrea</strong>：Eger 家族酒莊，Kékfrankos 是旗下所有 Bikavér 混釀的骨幹品種，以火山風土的礦物感聞名，代表作包括 Nagy-Eged 園系列</li>
            <li><strong>Gere（Gere Attila / Gere Tamás）</strong>：Villány 指標酒莊，在南部溫暖氣候中釀出結構飽滿、單寧成熟的 Kékfrankos</li>
          </ul>
        </div>
        <div class="info-card">
          <h5>🍽️ 餐搭建議</h5>
          <p>清爽風格（Sopron）適合烤雞、鴨胸；濃郁風格（Villány、Szekszárd）適合紅燒牛肉、匈牙利燉牛肉（gulyás）等辛香燉煮料理。</p>
        </div>
      </div>
    </div>`
  },
  {
    component: 'HungaryRegionMapSlide',
    title: 'Kékfrankos 重鎮：Eger 產區',
    componentProps: {
      mapRegion: 'Eger',
      description: 'Eger 位於北部高地（North Hungary），Bükk 山脈與 Mátra 丘陵之間——匈牙利最重要的 Kékfrankos 及 Egri Bikavér（公牛血）產地',
    },
  },

  {
    title: 'Kadarka — 傳統公牛血的靈魂',
    highlights: [
      { id: 1, icon: '🏛️', title: '巴爾幹起源', content: '起源於巴爾幹—帕農尼亞地區，一說源自蒙特內哥羅／阿爾巴尼亞邊境斯庫台湖一帶，經塞爾維亞人北遷傳入匈牙利' },
      { id: 2, icon: '📉', title: '近乎滅絕的浩劫', content: '19 世紀全盛期曾佔匈牙利葡萄園近六成，共產時期集體農場大量剷除改種 Kékfrankos，種植面積一度暴跌至僅約 380-400 公頃' },
      { id: 3, icon: '🌹', title: '獨特風格', content: '單寧低、色澤淺紅、帶玫瑰水、辛香料、乾燥野草莓香氣，常被形容為「匈牙利的黑皮諾」' },
      { id: 4, icon: '🔄', title: '現代復興', content: 'Szekszárd 的 Heimann 家族等精品釀酒師耗費數十年蒐集古老母本、重新扦插復育，讓 Kadarka 重返舞台' }
    ],
    content: `<div class="grape-detail">
      <p>Kadarka 曾是匈牙利最重要的紅葡萄，但因種植難度高（對病害和春霜極為敏感、產量極不穩定），在集體農場時代幾乎被淘汰。如今，一批有抱負的釀酒師正在復興這個珍貴的古老品種。</p>
      <div class="kadarka-story">
        <h4>🗺️ 從巴爾幹到帕農尼亞：Kadarka 的身世</h4>
        <p>學界普遍認為 Kadarka 起源於巴爾幹—帕農尼亞交界一帶，一種說法指其可能是鄂圖曼引入的 Papazkarası 與塞爾維亞當地品種 Skadarsko（得名自蒙特內哥羅／阿爾巴尼亞邊境的斯庫台湖 Lake Scutari）的天然雜交後代。16 世紀鄂圖曼統治時期，逃離戰亂北遷的塞爾維亞人將 Kadarka 藤蔓一併帶入匈牙利南部，自此在塞克薩德（Szekszárd）等地落地生根，19 世紀全盛時期一度佔匈牙利葡萄園近六成面積。</p>
        <h4>📖 公牛血的傳說與 Kadarka</h4>
        <p>16 世紀，埃格爾（Eger）的守軍在圍城時大量飲用 Kadarka 紅酒（當時的 Bikavér 成分），紅色的酒汁染紅了他們的鬍鬚。土耳其人以為他們在喝牛血，因此士氣大振的守軍成功抵禦了鄂圖曼軍隊，「公牛血（Bikavér）」之名由此而來。</p>
        <div class="note-box">
          <p>Kadarka 目前主要種植在塞克薩德（Szekszárd）和埃格爾（Eger），被視為公牛血混釀中不可或缺的「靈魂成分」——雖然比例通常不高，但它的香氣特徵為整個調配帶來獨特個性。共產時期工業化農業偏好高產、抗病的 Kékfrankos，使 Kadarka 種植面積從高峰的六萬公頃驟降至 1990 年代初僅存不到 400 公頃，是匈牙利葡萄品種史上最劇烈的興衰案例之一。</p>
        </div>
      </div>
      <div class="producer-pairing">
        <div class="info-card">
          <h5>🏛️ 代表酒莊：復興的推手</h5>
          <ul>
            <li><strong>Heimann（Heimann &amp; Fiai）</strong>：塞克薩德家族酒莊，數十年來致力於蒐集、復育瀕臨滅絕的老欉 Kadarka（及部分 Kékfrankos）克隆，2006 年購入區內僅存的老欉園之一，是 Kadarka 復興運動的代表酒莊</li>
            <li><strong>Eszterbauer</strong>：塞克薩德傳承十代的家族酒莊（歷史可追溯至 1746 年），旗艦酒款即為 Szekszárdi Kadarka，展現該品種紅醋栗果香與花香辛料的細膩風格</li>
          </ul>
        </div>
        <div class="info-card">
          <h5>🍽️ 餐搭建議</h5>
          <p>低單寧、高酸、花香突出的特性使 Kadarka 適合微冰鎮飲用，搭配烤鴨、匈牙利紅椒燉肉（pörkölt）、或清淡的野味料理，風格近似薄酒萊或清爽版黑皮諾的餐搭思路。</p>
        </div>
      </div>
    </div>`
  },
  {
    title: 'Cabernet Franc — 維拉尼的王牌',
    highlights: [
      { id: 1, icon: '🏡', title: '在維拉尼找到新家', content: '英國酒評家 Michael Broadbent 曾說：「Cabernet Franc 在維拉尼找到了它的天然家園」' },
      { id: 2, icon: '☀️', title: '匈牙利最溫暖的產區', content: '維拉尼的年均氣溫接近南法，Cabernet Franc 能在此充分成熟，不像羅亞爾河那樣帶有青澀感' },
      { id: 3, icon: '🏆', title: '頂級品質表現', content: 'Villányi Franc 是匈牙利唯一擁有自己專屬 AOC 品牌的葡萄酒，設有嚴格品質控制' },
      { id: 4, icon: '🌹', title: '風味特徵', content: '成熟的黑色水果（黑醋栗、黑李）、紫羅蘭、鉛筆芯、雪茄盒，單寧絲滑，陳年複雜度高' }
    ],
    content: `<div class="grape-detail">
      <p>Cabernet Franc 在全球葡萄酒圈通常被視為波爾多的調配品種（Blending Grape），但在匈牙利維拉尼（Villány），它找到了自己的英雄舞台——作為最重要的單一品種款，以不遜於世界頂級的品質表現讓整個葡萄酒界刮目相看。</p>
      <div class="villany-intro">
        <h4>🏰 維拉尼（Villány）：匈牙利紅酒的首都</h4>
        <div class="region-stats">
          <div class="stat">緯度：45.8°N（與波爾多相近）</div>
          <div class="stat">年均氣溫：11.6°C（匈牙利最高）</div>
          <div class="stat">土壤：石灰岩 + 紅色黏土（Terres Rouges）</div>
          <div class="stat">代表酒款：Villányi Franc（官方品牌，嚴格認證）</div>
        </div>
        <div class="compare">
          <h5>Villányi Franc vs. Loire Valley Franc</h5>
          <div class="compare-cols">
            <div>
              <strong>維拉尼：</strong>更溫暖，成熟度高，黑色水果，單寧絲滑，可媲美右岸 Cabernet Franc
            </div>
            <div>
              <strong>羅亞爾河：</strong>更涼爽，紅色水果，帶有草本/青椒感，清爽高酸
            </div>
          </div>
        </div>
      </div>
      <div class="note-box">
        <p>📌 維拉尼產區自 1990 年代起湧現一批「明星釀酒師」：Tiffán Ede 於 1991 年、Gere Attila 於 1994 年、Polgár Zoltán 於 1996 年、Bock József 於 1997 年相繼獲選「年度釀酒師」，正是這批第一代私營酒莊的努力，將維拉尼推上國際舞台，也奠定了 Cabernet Franc 作為當地招牌品種的地位。</p>
      </div>
      <div class="producer-pairing">
        <div class="info-card">
          <h5>🏛️ 代表酒莊</h5>
          <ul>
            <li><strong>Gere（Gere Attila / Gere Tamás）</strong>：維拉尼指標酒莊，單一品種 Cabernet Franc 是招牌酒款之一</li>
            <li><strong>Bock（Bock József）</strong>：維拉尼重量級酒莊，以濃郁飽滿風格見長</li>
            <li><strong>Malatinszky Kúria</strong>：專注 Cabernet Franc 的精品酒莊，出品被視為維拉尼該品種的標竿之一</li>
            <li><strong>Vylyan</strong>：兼釀 Kékfrankos 與 Cabernet Franc，兩者皆為區內受評鑑肯定的代表作</li>
          </ul>
        </div>
        <div class="info-card">
          <h5>🍽️ 餐搭建議</h5>
          <p>絲滑單寧與成熟黑果香氣適合搭配烤羊排、野味、陳年硬質乳酪，也能駕馭匈牙利傳統的紅椒燉牛肉（pörkölt）。</p>
        </div>
      </div>
    </div>`
  },
  {
    component: 'HungaryRegionMapSlide',
    title: 'Cabernet Franc 的新故鄉：Villány',
    componentProps: {
      mapRegion: 'Villany',
      description: 'Villány 位於匈牙利最南端、氣候最溫暖的帕農尼亞產區——Cabernet Franc 在此展現不遜於波爾多 St-Émilion 的深度與陳年潛力',
    },
  },

  {
    title: '其他重要紅葡萄品種',
    highlights: [
      { id: 1, icon: '🇦🇹', title: 'Zweigelt', content: '奧地利最廣泛種植的紅葡萄，在匈牙利有 2,400+ 公頃，主要在 Sopron，以易飲紅果風格著稱' },
      { id: 2, icon: '🇵🇹', title: 'Portugieser（葡萄牙人）', content: '名字雖帶「葡萄牙」但其實是中歐品種，在維拉尼以輕盈新鮮風格出產，是易飲紅酒代表' },
      { id: 3, icon: '🌹', title: 'Pinot Noir', content: '匈牙利較涼爽的產區（Eger、Sopron）嘗試種植，但品質不及波爾多品種' },
      { id: 4, icon: '🍇', title: 'Merlot / Cabernet Sauvignon', content: '波爾多品種在維拉尼和塞克薩德也有種植，通常用於頂級混釀' }
    ],
    content: `<div class="other-reds">
      <p>除了三大核心品種，匈牙利也種植許多來自波爾多和中歐的其他紅葡萄品種，豐富了整體的風格多樣性。</p>
      <div class="special-grapes">
        <div class="grape-card">
          <h5>🇦🇹 Zweigelt — 奧地利血統的清新選擇</h5>
          <p>由奧地利育種家 Fritz Zweigelt 於 1922 年以 St. Laurent 與 Blaufränkisch（Kékfrankos）雜交育成，是奧地利種植最廣的紅葡萄。在匈牙利以 Sopron 產區表現最佳，與 Kékfrankos 共享一個親本，風格上帶有相似的紅色漿果調性，但單寧更柔和、更早熟易飲。</p>
        </div>
        <div class="grape-card">
          <h5>🇵🇹 Portugieser — 名不副實的中歐品種</h5>
          <p>儘管名字帶「葡萄牙」，Portugieser 實際上與葡萄牙無直接關聯，一般認為源自中歐（奧地利或多瑙河流域）。在維拉尼一帶以輕盈、新鮮、低單寧的風格出產，常作微冰鎮的日常餐酒飲用，是匈牙利南部易飲紅酒的代表之一。</p>
        </div>
      </div>
      <div class="summary-table-wrapper">
        <h4>📋 紅葡萄品種速查表</h4>
        <table class="grape-table">
          <tr><th>品種</th><th>主要產區</th><th>風格特徵</th><th>全國面積</th></tr>
          <tr><td>Kékfrankos</td><td>Sopron, Eger, Villány</td><td>黑色水果、辛香、高酸</td><td>8,000+ ha</td></tr>
          <tr><td>Kadarka</td><td>Szekszárd, Eger</td><td>玫瑰香、辛料、低單寧</td><td>&lt;700 ha</td></tr>
          <tr><td>Cabernet Franc</td><td>Villány</td><td>黑醋栗、紫羅蘭、絲滑</td><td>1,200+ ha</td></tr>
          <tr><td>Zweigelt</td><td>Sopron</td><td>紅果、易飲、圓潤</td><td>2,400+ ha</td></tr>
          <tr><td>Portugieser</td><td>Villány</td><td>輕盈、新鮮、早飲</td><td>1,000+ ha</td></tr>
        </table>
      </div>
      <div class="key-takeaway">
        <h4>🎯 學習要點</h4>
        <p>記憶匈牙利紅葡萄品種時，可以這樣思考：</p>
        <ul>
          <li><strong>最廣泛</strong>：Kékfrankos（8,000+ ha，幾乎每個產區都有；與 Zweigelt 共享 St. Laurent／Blaufränkisch 系親緣）</li>
          <li><strong>最傳統、最戲劇性</strong>：Kadarka（巴爾幹起源，從六萬公頃劇減至不足 700 公頃，如今由 Heimann、Eszterbauer 等酒莊帶頭復興）</li>
          <li><strong>最國際化</strong>：Cabernet Franc（在維拉尼找到天然家園，Gere、Bock、Malatinszky、Vylyan 皆為代表酒莊）</li>
        </ul>
      </div>
    </div>`
  }
,
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 知識檢測',
        isFinalExam: false,
        passScore: 60,
        questions: [
        {
          type: 'single',
          question: 'Kékfrankos 在奧地利的名稱是什麼？',
          options: ['A. Grüner Veltliner', 'B. Zweigelt', 'C. Blaufränkisch', 'D. Sankt Laurent'],
          correct: 2,
          explanation: 'Kékfrankos 在奧地利被稱為 Blaufränkisch（藍色法蘭克），是奧地利種植面積第二大的紅葡萄品種（僅次於 Zweigelt）。匈牙利的 Sopron 產區位於奧地利邊境，其 Kékfrankos 風格與奧地利 Blaufränkisch 最為接近。在德國（主要在 Württemberg）則稱為 Lemberger 或 Limberger。'
        },
        {
          type: 'single',
          question: '「公牛血（Bikavér）」這個名字的起源傳說與哪個歷史事件相關？',
          options: ['A. 一位釀酒師在釀造時不小心混入了牛血', 'B. 16 世紀埃格爾守軍飲用 Kadarka 紅酒，染紅鬍鬚嚇退鄂圖曼軍', 'C. 匈牙利國王在祭祀中使用牛血與葡萄酒混合的儀式', 'D. Kadarka 葡萄串的外觀形似公牛角'],
          correct: 1,
          explanation: '根據傳說，1552 年鄂圖曼軍隊圍攻埃格爾時，守將 István Dobó 讓士兵大量飲用紅色的 Bikavér 酒壯膽，士兵們鬍鬚染紅。土耳其人誤以為他們在喝公牛血，驚懼撤退。雖然這個傳說難以確證，但「公牛血」之名沿用至今，成為匈牙利葡萄酒最著名的品牌之一。'
        },
        {
          type: 'single',
          question: '匈牙利的哪個產區以 Cabernet Franc 最為著名，甚至建立了以此品種命名的官方品牌「Villányi Franc」？',
          options: ['A. 托卡伊（Tokaj）', 'B. 埃格爾（Eger）', 'C. 維拉尼（Villány）', 'D. 索普倫（Sopron）'],
          correct: 2,
          explanation: '維拉尼（Villány）是匈牙利最溫暖的產區，位於最南端，氣候接近南法。「Villányi Franc」是匈牙利唯一擁有自己專屬品牌認證的葡萄酒，設有嚴格的品質控制標準，是國際上最受認可的匈牙利紅酒品牌。英國酒評家 Michael Broadbent 曾說：「Cabernet Franc 在維拉尼找到了它的天然家園。」'
        },
        {
          type: 'single',
          question: '下列哪種說法正確描述了 Kadarka 在現代匈牙利葡萄酒業的現狀？',
          options: ['A. Kadarka 現在是匈牙利種植最廣泛的紅葡萄，超過 Kékfrankos', 'B. Kadarka 因種植難度高在集體農場時代幾乎被淘汰，現在面積不到 700 公頃，但被精品釀酒師重新發掘', 'C. Kadarka 只在托卡伊（Tokaj）產區種植', 'D. Kadarka 是新引進的品種，在匈牙利種植歷史不到 50 年'],
          correct: 1,
          explanation: 'Kadarka 曾是匈牙利最重要的紅葡萄，19 世紀全盛期一度佔全國葡萄園近六成，但因對春霜和病害敏感、產量不穩定，在集體農場時代被大量更耐種的 Kékfrankos 取代，面積一度暴跌至僅約 380-400 公頃。如今雖仍不足 700 公頃，但 Heimann、Eszterbauer 等塞克薩德精品酒莊已重新重視這個古老品種，以單一品種款展現其獨特的玫瑰香和辛香料風格。'
        },
        {
          type: 'single',
          question: '根據 DNA 分析，Kékfrankos（Blaufränkisch）的親本是什麼？其與哪些著名品種是「異父/異母手足」？',
          options: ['A. 親本為 Pinot Noir 與 Gamay，與 Syrah 是手足關係', 'B. 親本為 Gouais Blanc 與 Blaue Zimmettraube，因共享 Gouais Blanc 而與 Chardonnay、Gamay 是手足關係', 'C. 親本不明，是野生品種的直接馴化', 'D. 親本為 Cabernet Sauvignon 與 Merlot 的天然雜交'],
          correct: 1,
          explanation: '德國 Julius Kühn-Institut 於 2016 年以 SSR 分子標記分析確認，Blaufränkisch（Kékfrankos）的親本為 Gouais Blanc（白高維斯）與 Blaue Zimmettraube。由於 Gouais Blanc 也是 Chardonnay 與 Gamay 的共同親本，這幾個看似風格迥異的品種其實同宗同源，反映了中世紀以來歐洲葡萄品種家族錯綜複雜的血緣網絡。'
        },
        {
          type: 'single',
          question: 'Zweigelt 這個品種是如何培育出來的，它與 Kékfrankos 有何關係？',
          options: ['A. Zweigelt 是野生原生品種，與 Kékfrankos 沒有任何關係', 'B. 1922 年由奧地利育種家 Fritz Zweigelt 以 St. Laurent 與 Blaufränkisch（Kékfrankos）雜交育成，兩者共享一個親本', 'C. Zweigelt 是 Kékfrankos 在匈牙利的另一個名稱，其實是同一品種', 'D. Zweigelt 是近十年才培育出的新品種'],
          correct: 1,
          explanation: 'Zweigelt 由奧地利育種家 Fritz Zweigelt 於 1922 年以 St. Laurent 與 Blaufränkisch（即 Kékfrankos）雜交育成，是奧地利種植最廣的紅葡萄品種。因為共享 Blaufränkisch 這個親本，Zweigelt 與 Kékfrankos 在風味上常帶有相似的紅色漿果調性，但 Zweigelt 通常單寧更柔和、更早熟易飲。'
        }
        ]
      }
    }
  }
]
