/**
 * CA-L2-3 中海岸深度剖析：Santa Barbara 與 Paso Robles
 * 資料來源：discovercaliforniawines.com、sbcountywines.com、pasowine.com
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Central Coast（中海岸）延伸超過 400 英里，從舊金山南方一直到洛杉磯北方。其中聖巴巴拉和帕索羅布爾斯是兩顆最耀眼的明珠——聖巴巴拉的橫向山谷讓太平洋直接闖入，創造全美最涼爽的 Pinot Noir 天堂；帕索羅布爾斯的石灰岩土壤和超大晝夜溫差，讓隆河品種在此蓬勃生長。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌊 理解聖巴巴拉的「橫向山谷」優勢</h4>
            <p>了解為何聖巴巴拉擁有加州獨一無二的橫向山谷地形，以及如何讓太平洋影響最大化</p>
          </div>
          <div class="point-item">
            <h4>🎬 《Sideways》效應與 Pinot Noir 傳奇</h4>
            <p>理解 2004 年電影如何改變了全球 Pinot Noir 的銷售格局</p>
          </div>
          <div class="point-item">
            <h4>🪨 帕索羅布爾斯的石灰岩與隆河品種</h4>
            <p>掌握帕索東西兩側的風土差異，以及隆河品種（Syrah、Grenache、Viognier）在此的精彩表現</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: 'Santa Barbara County：橫向山谷的奇蹟',
    content: `<div class="santa-barbara-geo">
      <h3>🗺️ 加州唯一的橫向山谷體系</h3>
      <p>幾乎整個加州的海岸山脈都是<strong>南北走向</strong>，有效阻擋太平洋的涼爽影響。但在聖巴巴拉，有兩個著名的山谷是<strong>東西橫向</strong>走向——Santa Ynez Valley 和 Santa Rita Hills。</p>
      <div class="transverse-explanation">
        <div class="te-card">
          <h4>東西走向山谷的效果</h4>
          <ul>
            <li>太平洋涼爽海風和晨霧<strong>直接從西側開口灌入</strong></li>
            <li>山谷如同一個天然的冷氣通道，每天下午涼風持續</li>
            <li>生長季溫度比同緯度的 Napa 低 5–8°C</li>
            <li>葡萄可以在充足陽光下緩慢成熟，保留精緻酸度</li>
          </ul>
        </div>
        <div class="te-comparison">
          <h4>聖巴巴拉 vs Napa 氣溫對比（7月平均）</h4>
          <table class="temp-table">
            <thead><tr><th>地點</th><th>白天最高</th><th>夜晚最低</th><th>成熟風格</th></tr></thead>
            <tbody>
              <tr><td>Santa Rita Hills, SB</td><td>25°C</td><td>9°C</td><td>優雅、高酸</td></tr>
              <tr><td>Santa Maria Valley, SB</td><td>22°C</td><td>8°C</td><td>極度清爽、高酸</td></tr>
              <tr><td>Rutherford, Napa</td><td>35°C</td><td>13°C</td><td>濃郁、豐沛</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Santa Barbara 的主要 AVA',
    content: `<div class="sb-avas">
      <h3>📍 Santa Barbara County 的核心 AVA</h3>
      <div class="sb-ava-grid">
        <div class="sb-ava-card highlight">
          <h4>🌟 Santa Rita Hills（聖麗塔山丘）</h4>
          <p class="ava-established">AVA 認定：2001 年</p>
          <p>聖巴巴拉最負盛名的 Pinot Noir 產地。太平洋距此僅 16 公里，海霧和強勁海風終日進入。西向坡地讓葡萄在下午就能接受涼爽海風的降溫。矽藻土（Diatomaceous Earth）的白色土壤獨一無二。</p>
          <div class="ava-highlights">
            <span>🍷 Pinot Noir（世界頂級）</span>
            <span>🍾 Chardonnay</span>
            <span>代表酒莊：Brewer-Clifton、Sea Smoke、Sta. Rita Hills Pinot</span>
          </div>
          <p class="ava-style">風格：礦物感強烈的 Pinot，覆盆子、石榴、玫瑰花瓣，酸度令人印象深刻</p>
        </div>
        <div class="sb-ava-card">
          <h4>Santa Maria Valley（聖瑪利亞谷）</h4>
          <p class="ava-established">AVA 認定：1981 年</p>
          <p>加州最涼爽的 AVA 之一。完全開放的橫向谷地，終年受太平洋強風影響，是加州最適合種植 Pinot Noir 和 Chardonnay 的地區之一。Bien Nacido Vineyard（1837 年建立）是最著名的葡萄園之一。</p>
          <div class="ava-highlights">
            <span>🍷 Pinot Noir</span>
            <span>🍾 Chardonnay</span>
            <span>代表酒莊：Au Bon Climat、Qupé</span>
          </div>
        </div>
        <div class="sb-ava-card">
          <h4>Santa Ynez Valley（聖伊內斯谷）</h4>
          <p class="ava-established">AVA 認定：1983 年</p>
          <p>比 Santa Maria 更大、更溫暖的谷地，東西橫向走向帶來太平洋影響，但因距海較遠，西側涼爽東側溫暖，品種更多元。電影《Sideways》主要拍攝地點。</p>
          <div class="ava-highlights">
            <span>🍷 Pinot Noir、Syrah</span>
            <span>🍾 Chardonnay、Sauvignon Blanc</span>
          </div>
        </div>
        <div class="sb-ava-card">
          <h4>Happy Canyon of Santa Barbara</h4>
          <p class="ava-established">AVA 認定：2009 年</p>
          <p>Santa Ynez Valley 最東端，最受保護、最溫暖的角落。距太平洋最遠，早晚溫差大但白天炎熱，最適合 Bordeaux 品種。</p>
          <div class="ava-highlights">
            <span>🍷 Cabernet Sauvignon、Merlot</span>
            <span>🍾 Sauvignon Blanc</span>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: '《Sideways》效應：電影改變葡萄酒產業',
    content: `<div class="sideways-effect">
      <h3>🎬 2004 年《Sideways》——電影史上最強葡萄酒行銷案例</h3>
      <p>Alexander Payne 執導的電影《Sideways》（杯酒人生）以聖巴巴拉 Santa Ynez Valley 為背景，引發了全球葡萄酒消費者對 Pinot Noir 的瘋狂熱潮，以及對 Merlot 的一時抵制。</p>
      <div class="sideways-impact">
        <div class="si-card pinot">
          <h4>🚀 Pinot Noir 效應（正面）</h4>
          <ul>
            <li>電影上映後 1 年，美國 Pinot Noir 銷量上升 <strong>16%</strong></li>
            <li>聖巴巴拉葡萄酒旅遊人次暴增 3 倍</li>
            <li>全球市場對 Santa Barbara Pinot 的認知度從幾乎為零躍升至高度知名</li>
            <li>帶動加州北海岸 Pinot 產區（Russian River Valley、Sonoma Coast）銷售全面提升</li>
          </ul>
        </div>
        <div class="si-card merlot">
          <h4>📉 Merlot 效應（負面，短暫）</h4>
          <ul>
            <li>主角 Miles 的名言「<em>I am NOT drinking any fucking Merlot!</em>」讓美國 Merlot 銷量在 2005 年下滑</li>
            <li>但業界普遍認為 Merlot 的品質本身並無問題（頂級 Pomerol 如 Pétrus 幾乎全是 Merlot）</li>
            <li>這個效應也成為行銷學的經典案例——消費者對文化形象的敏感度</li>
          </ul>
        </div>
      </div>
      <div class="sideways-quote">
        <blockquote>
          "It's a hard grape to grow... And it's not a survivor like Cabernet... It needs constant care and attention. You know? And in fact it can only grow in these really specific, little, tucked away corners of the world..."
          <cite>— Miles Raymond（電影《Sideways》2004）</cite>
        </blockquote>
      </div>
    </div>`
  },

  {
    title: 'Paso Robles：石灰岩王國與隆河品種',
    content: `<div class="paso-deep">
      <h3>🪨 Paso Robles — 加州的「小隆河」</h3>
      <p>帕索羅布爾斯（Paso Robles，葡萄牙語「橡樹旁邊的通道」）位於舊金山和洛杉磯的中間點。這裡是加州種植 Rhône 品種（Syrah、Grenache、Mourvèdre、Viognier）的最佳產地，也是石灰岩土壤分布最廣的地區。</p>
      <div class="paso-east-west">
        <h4>📊 帕索東側 vs 西側的巨大差異</h4>
        <div class="ew-comparison">
          <div class="ew-card west">
            <h4>🌊 西側（West Side）— 涼爽</h4>
            <p>鄰近太平洋，受 Templeton Gap 的海風影響，氣候涼爽。<strong>石灰岩土壤</strong>（類似法國 Châteauneuf-du-Pape）是最大特色。</p>
            <ul>
              <li>溫度：白天 32°C / 夜晚 12°C</li>
              <li>土壤：石灰岩、黏土、鈣質礫石</li>
              <li>風格：精緻、礦物感 Syrah，清爽的 Grenache Blanc</li>
              <li>代表酒莊：L'Aventure、Tablas Creek（Perrin Family）、Saxum</li>
            </ul>
          </div>
          <div class="ew-card east">
            <h4>☀️ 東側（East Side）— 溫暖</h4>
            <p>遠離太平洋，氣候炎熱，晝夜溫差極大（超過 26°C）。沙質到礫石土壤，最適合大量種植。</p>
            <ul>
              <li>溫度：白天 38°C / 夜晚 12°C（溫差 26°C）</li>
              <li>土壤：沙質壤土、礫石</li>
              <li>風格：濃郁、果香豐沛的 Cabernet、Zinfandel</li>
              <li>代表酒莊：J. Lohr、Eberle</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="paso-rhone">
        <h4>🌿 Tablas Creek：帕索隆河品種的引路人</h4>
        <p>1989 年，法國 Châteauneuf-du-Pape 名莊 Château Beaucastel（Perrin 家族）與美國進口商 Robert Haas 合作，在帕索西側建立了 <strong>Tablas Creek Vineyard</strong>。他們直接從法國進口根莖插穗，在此種植：</p>
        <div class="rhone-grapes">
          <div class="rg-item"><strong>Syrah</strong> — 黑胡椒、橄欖、煙燻</div>
          <div class="rg-item"><strong>Grenache</strong> — 成熟紅莓、香料、中等酒體</div>
          <div class="rg-item"><strong>Mourvèdre</strong> — 野味、肉感、深厚</div>
          <div class="rg-item"><strong>Roussanne</strong> — 蜂蜜、杏仁、花香白酒</div>
          <div class="rg-item"><strong>Viognier</strong> — 桃子、橙花、花香</div>
          <div class="rg-item"><strong>Grenache Blanc</strong> — 白桃、礦物、清爽</div>
        </div>
        <p>Tablas Creek 的成功帶動了整個帕索的隆河品種熱潮，如今帕索是加州種植最多 Rhône 品種的產區。</p>
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
            question: '聖巴巴拉 Santa Rita Hills 能種出世界頂級 Pinot Noir 的主要地理原因是什麼？',
            options: ['A. 海拔極高', 'B. 東西橫向山谷讓太平洋涼爽海霧直接滲入', 'C. 土壤含有豐富火山礦物質', 'D. 靠近大型水庫提供充足水分'],
            correct: 1,
            explanation: '聖巴巴拉的橫向（東西走向）山谷是加州獨一無二的地理特徵。太平洋涼爽海霧和強風可以直接從西側開口進入山谷，讓 Santa Rita Hills 的氣溫比同緯度的 Napa 低 5-8°C，非常適合 Pinot Noir。'
          },
          {
            type: 'single',
            question: '帕索羅布爾斯（Paso Robles）西側最大的土壤特色是什麼？',
            options: ['A. 火山玄武岩', 'B. 沙質壤土', 'C. 石灰岩（Limestone）', 'D. 礦物質豐富的黏土'],
            correct: 2,
            explanation: '帕索羅布爾斯西側的石灰岩土壤是其最大特色，類似法國 Châteauneuf-du-Pape 的地質環境，非常適合種植 Syrah、Grenache 等隆河品種。'
          },
          {
            type: 'single',
            question: '2004 年電影《Sideways》主要對哪個品種產生了銷售促進效果？',
            options: ['A. Merlot', 'B. Chardonnay', 'C. Pinot Noir', 'D. Cabernet Sauvignon'],
            correct: 2,
            explanation: '電影《Sideways》中，主角 Miles 對 Pinot Noir 充滿熱情的描述引發了全球消費者對聖巴巴拉 Pinot Noir 的興趣，使美國 Pinot Noir 銷量在電影上映後一年內上升了 16%。'
          }
        ]
      }
    }
  }
]
