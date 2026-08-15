/**
 * CA-L2-3 中海岸深度剖析：Santa Barbara 橫向山谷與 Paso Robles 石灰岩
 * 深化重點：橫向山脈地質成因、Sta. Rita Hills 矽藻土細節、Paso Robles 11 個子 AVA
 * 資料來源（2026 年查證）：
 *  - Bottle Barn「Santa Barbara County Wine Country: Uniquely Transverse」
 *  - Wikipedia「Transverse Ranges」「Santa Ynez Mountains」「Sta. Rita Hills AVA」
 *  - tasteofstaritahills.com；Grokipedia「Sta. Rita Hills AVA」（地質沿革）
 *  - Federal Register 2014-24169（Paso Robles 11 個子 AVA 認定公告）；Wikipedia 各子 AVA 條目
 *  - Tablas Creek「History」；Decanter「Tablas Creek: bringing the Rhône to California」
 *  - Wine Cellar Insider；sbcountywines.com、pasowine.com
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Central Coast（中海岸）延伸超過 400 英里，從舊金山南方一直到洛杉磯北方。其中聖巴巴拉和帕索羅布爾斯是兩顆最耀眼的明珠——聖巴巴拉的橫向山谷讓太平洋直接闖入，創造全美最涼爽的 Pinot Noir 天堂；帕索羅布爾斯的石灰岩土壤和超大晝夜溫差，讓隆河品種在此蓬勃生長。本課將深入地質成因與完整子 AVA 版圖，讓您理解這兩個產區為何在中海岸的多元光譜中各據一端。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌊 理解橫向山脈（Transverse Ranges）的板塊成因</h4>
            <p>掌握太平洋板塊斜向運動如何造就北美西岸唯一的東西走向山脈系統</p>
          </div>
          <div class="point-item">
            <h4>🧬 Sta. Rita Hills 矽藻土的地質身世</h4>
            <p>理解矽藻土如何從海底沉積物變成葡萄園裡的白色土壤</p>
          </div>
          <div class="point-item">
            <h4>🪨 帕索羅布爾斯 11 個子 AVA 與石灰岩地質</h4>
            <p>掌握帕索東西兩側加上 11 個子 AVA 的風土差異，以及隆河品種在此的精彩表現</p>
          </div>
        </div>
      </div>
    `
  },

  {
    component: 'CaliforniaRegionMapSlide',
    title: 'Central Coast 產區地圖',
    componentProps: {
      slide: {
        title: 'Central Coast AVA 地圖',
        description: '從 Livermore 到 Santa Barbara，探索加州最多元的海岸葡萄酒帶',
        mapGroup: 'Central Coast',
        highlightAVAs: ['Santa Rita Hills', 'Santa Ynez Valley', 'Paso Robles', 'Santa Cruz Mountains'],
      }
    }
  },

  {
    title: '橫向山脈：一個板塊運動造就的地理特例',
    content: `<div class="transverse-geology">
      <h3>🗺️ Transverse Ranges — 北美西岸唯一的東西走向山系</h3>
      <p>幾乎整個北美太平洋岸的海岸山脈都呈<strong>南北走向</strong>，這是太平洋板塊沿聖安德烈亞斯斷層（San Andreas Fault）平行滑動所形成的典型結果。但在聖巴巴拉一帶，卻出現了一整段違反常理的<strong>東西走向</strong>山脈——這就是「橫向山脈」（Transverse Ranges），包括 Santa Ynez Mountains 與 San Rafael Mountains。</p>
      <div class="tg-mechanism">
        <h4>🔬 為什麼會「橫」過來？</h4>
        <p>約 2,000 萬年前，太平洋板塊相對北美板塊的運動方向出現了局部彎曲（一般稱為「Big Bend」），造成該區域的地殼不是單純水平滑移，而是受到強烈的擠壓力。這股垂直於斷層走向的壓縮力，把原本的地層像手風琴一樣摺曲並旋轉了近 90 度，連帶把海底沉積的砂岩、頁岩與石灰岩層一併抬升出海面，形成了東西橫向排列的山脈——這段地形沿加州海岸線延伸約 50 英里，是整個南北美洲西岸最大範圍的橫向山脈區。</p>
      </div>
      <div class="transverse-explanation">
        <div class="te-card">
          <h4>東西走向山谷的效果</h4>
          <ul>
            <li>太平洋涼爽海風和晨霧<strong>直接從西側開口灌入</strong>，不需要像南北向山谷一樣依賴「缺口」</li>
            <li>山谷如同一個天然的冷氣通道，每天下午涼風持續增強</li>
            <li>生長季溫度比同緯度的 Napa 低 5–8°C</li>
            <li>葡萄可以在充足陽光下緩慢成熟，保留精緻酸度</li>
          </ul>
        </div>
        <div class="te-comparison">
          <h4>聖巴巴拉 vs Napa 氣溫對比（7月平均，教學參考值）</h4>
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
          <h4>🌟 Sta. Rita Hills（聖麗塔山丘）</h4>
          <p class="ava-established">AVA 認定：2001 年（1998 年提交產區申請）</p>
          <p>聖巴巴拉最負盛名的 Pinot Noir 產地，面積約 52 平方英里，介於 Lompoc 與 Buellton 之間。太平洋距此僅約 16 公里，海霧和強勁海風終日進入。三條東西向丘陵在中新世（約 2,000 萬年前）被地殼擠壓從海床抬升出露，露出砂土、黏土與<strong>矽藻土（Diatomaceous Earth）</strong>——由遠古矽藻等含矽微生物遺骸沉積後隆起形成，質輕多孔、極端排水，主要分布於西側靠近 Lompoc 一帶。</p>
          <div class="ava-highlights">
            <span>🍷 Pinot Noir（世界頂級）</span>
            <span>🍾 Chardonnay</span>
            <span>代表酒莊：Sea Smoke、Domaine de la Côte、Sandhi、Ken Brown</span>
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
          <h4>Ballard Canyon</h4>
          <p class="ava-established">AVA 認定：2013 年</p>
          <p>Santa Ynez Valley 內一條南北走向的小峽谷，因地形略為封閉，比周邊區域略為溫暖，鈣質土壤與充足日照特別適合 Syrah 與 Grenache，被許多釀酒師視為加州隆河品種的隱藏精華區。</p>
          <div class="ava-highlights">
            <span>🍷 Syrah、Grenache</span>
            <span>代表酒莊：Rusack、Beckmen Vineyards</span>
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
    title: '聖巴巴拉指標酒莊：從實驗到典範',
    content: `<div class="sb-estates">
      <h3>🏛️ 聖巴巴拉 Pinot Noir 革命的關鍵推手</h3>
      <div class="estates-grid">
        <div class="estate-card">
          <h4>Au Bon Climat</h4>
          <p class="estate-location">Santa Maria Valley</p>
          <p class="estate-story">1982 年由已故釀酒師 Jim Clendenen 創立，是聖巴巴拉布根地風格 Pinot Noir 與 Chardonnay 的奠基者。Clendenen 早年赴布根地學藝，回加州後堅持低介入、少橡木、強調果實透明度的釀造哲學，直接影響了整個世代的聖巴巴拉釀酒師。</p>
          <p class="estate-style">風格：清瘦、高酸、布根地取向，強調土地而非橡木</p>
        </div>
        <div class="estate-card">
          <h4>Sea Smoke</h4>
          <p class="estate-location">Sta. Rita Hills</p>
          <p class="estate-story">1999 年創立於 Sta. Rita Hills 西側，緊鄰太平洋，是矽藻土風土最具代表性的酒莊之一。單一葡萄園釀造，強調極致冷涼氣候下的濃縮度與礦物感並存。</p>
          <p class="estate-style">風格：礦石感強烈，覆盆子、玫瑰、鹹鮮尾韻</p>
        </div>
        <div class="estate-card">
          <h4>Domaine de la Côte</h4>
          <p class="estate-location">Sta. Rita Hills</p>
          <p class="estate-story">由 Sandhi 酒莊創辦人 Rajat Parr 與 Sashi Moorman 共同創立，種植於接近太平洋的極端涼爽坡地，採用不灌溉、密植等布根地式栽培手法，是近十年美國最受矚目的新浪潮 Pinot Noir 之一。</p>
          <p class="estate-style">風格：極致優雅、低酒精度，鹹鮮礦物感突出</p>
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
      <p>帕索羅布爾斯（Paso Robles，西班牙語「橡樹旁邊的通道」）位於舊金山和洛杉磯的中間點。這裡是加州種植 Rhône 品種（Syrah、Grenache、Mourvèdre、Viognier）的最佳產地，也是石灰岩／鈣質土壤分布最廣的地區——這些鈣質沉積岩層源自更早期的海底 Monterey 地層，經板塊擠壓抬升出露。</p>
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
      <div class="paso-subavas">
        <h4>📍 2014 年 TTB 認定：帕索 11 個子 AVA</h4>
        <p>2014 年 10 月，TTB 一口氣為帕索羅布爾斯核心產區內部劃出 11 個子 AVA，反映出這片廣大產區內部的顯著風土差異——邊界劃定完全不改變原本 Paso Robles AVA 的整體範圍，僅是內部細分。</p>
        <div class="subava-grid">
          <div class="subava-item"><strong>Adelaida District</strong><span>西側高海拔石灰岩區，Tablas Creek 所在地</span></div>
          <div class="subava-item"><strong>Templeton Gap District</strong><span>海風直接吹入的涼爽走廊，晝夜溫差極大</span></div>
          <div class="subava-item"><strong>Willow Creek District</strong><span>西側，石灰岩與頁岩混合，Saxum 所在地</span></div>
          <div class="subava-item"><strong>El Pomar District</strong><span>中南部過渡帶，鈣質土壤與礫石混合</span></div>
          <div class="subava-item"><strong>Santa Margarita Ranch</strong><span>最南端，受海洋影響較明顯的涼爽區塊</span></div>
          <div class="subava-item"><strong>Creston District</strong><span>東南部高地，晝夜溫差大</span></div>
          <div class="subava-item"><strong>Geneseo District</strong><span>中東部，礫石與沙質壤土為主</span></div>
          <div class="subava-item"><strong>Estrella District</strong><span>東側平坦地帶，溫暖乾燥，大規模種植區</span></div>
          <div class="subava-item"><strong>Paso Robles Highlands District</strong><span>東北部高海拔，晝夜溫差全產區數一數二</span></div>
          <div class="subava-item"><strong>San Miguel District</strong><span>北端沿 Salinas River，沖積土為主</span></div>
          <div class="subava-item"><strong>San Juan Creek</strong><span>東南角，最溫暖乾燥的區塊之一</span></div>
        </div>
        <p class="subava-note">💡 記憶法：大致可用「西側石灰岩涼爽帶」（Adelaida、Templeton Gap、Willow Creek、Santa Margarita Ranch）vs「東側沖積沙質溫暖帶」（Estrella、Geneseo、San Miguel、San Juan Creek）二分，中間 El Pomar、Creston、Highlands 屬過渡地帶。</p>
      </div>
      <div class="paso-rhone">
        <h4>🌿 Tablas Creek：帕索隆河品種的引路人</h4>
        <p>1989 年，法國 Châteauneuf-du-Pape 名莊 Château de Beaucastel（Perrin 家族）與長年進口 Beaucastel 酒款至美國的進口商 Robert Haas 合作，在帕索西側 Adelaida District 一塊鈣質石灰岩地選購了初期 120 英畝土地，正是看中其與 Beaucastel 本地土壤的相似性，建立了 <strong>Tablas Creek Vineyard</strong>。他們直接從 Beaucastel 引進根莖插穗與克隆株，建立苗圃並分送給其他加州酒莊，實質上重建了整個加州隆河品種的基因庫：</p>
        <div class="rhone-grapes">
          <div class="rg-item"><strong>Syrah</strong> — 黑胡椒、橄欖、煙燻</div>
          <div class="rg-item"><strong>Grenache</strong> — 成熟紅莓、香料、中等酒體</div>
          <div class="rg-item"><strong>Mourvèdre</strong> — 野味、肉感、深厚</div>
          <div class="rg-item"><strong>Counoise</strong> — 清爽、紅色莓果、低單寧，常用於混調增添活力</div>
          <div class="rg-item"><strong>Roussanne</strong> — 蜂蜜、杏仁、花香白酒</div>
          <div class="rg-item"><strong>Viognier / Marsanne</strong> — 桃子、橙花、圓潤酒體</div>
        </div>
        <p>Tablas Creek 的苗圃計畫帶動了整個帕索的隆河品種熱潮，如今帕索是加州種植最多 Rhône 品種的產區，Saxum、L'Aventure 等酒莊延續這股浪潮，將帕索推上「加州隆河特區」的國際地位。</p>
      </div>
    </div>`
  },

  {
    title: '帕索羅布爾斯指標酒莊：隆河與波爾多的交會',
    content: `<div class="paso-estates">
      <h3>🏛️ 帕索的兩條釀酒路線</h3>
      <div class="estates-grid">
        <div class="estate-card">
          <h4>Saxum Vineyards</h4>
          <p class="estate-location">Willow Creek District</p>
          <p class="estate-story">由 Justin Smith 於 2000 年創立，2010 年份 James Berry Vineyard 曾獲 Wine Advocate 100 分，是帶動帕索隆河品種國際聲望最重要的酒莊之一。以西側石灰岩混合頁岩的葡萄園，種植 Syrah、Grenache、Mourvèdre 混調。</p>
          <p class="estate-style">風格：極度濃縮，黑橄欖、鮮血鐵鏽感、野生香料</p>
        </div>
        <div class="estate-card">
          <h4>L'Aventure</h4>
          <p class="estate-location">Adelaida District</p>
          <p class="estate-story">法國波爾多釀酒師 Stephan Asseo 於 1998 年放棄法國 AOC 體系的種植限制，遠赴帕索西側尋找自由度更高的風土，在石灰岩坡地上大膽混調 Syrah、Cabernet Sauvignon、Petit Verdot 等非傳統組合。</p>
          <p class="estate-style">風格：濃郁厚實，黑色水果與香料交織，酒精度高</p>
        </div>
        <div class="estate-card">
          <h4>Tablas Creek Vineyard</h4>
          <p class="estate-location">Adelaida District</p>
          <p class="estate-story">Château de Beaucastel（Perrin 家族）與 Robert Haas 於 1989 年創立，除了自有酒款，更以苗圃計畫供應克隆株給整個帕索地區，是隆河品種在加州擴散的技術源頭。</p>
          <p class="estate-style">風格：忠於法國隆河血統，Roussanne、Grenache 表現細膩</p>
        </div>
        <div class="estate-card">
          <h4>J. Lohr Vineyards</h4>
          <p class="estate-location">Estrella District（東側）</p>
          <p class="estate-story">1974 年創立，是帕索東側大規模優質量產的代表酒莊之一，證明溫暖沙質土壤同樣能透過現代化栽培技術產出高性價比、果香飽滿的 Cabernet Sauvignon 與 Merlot。</p>
          <p class="estate-style">風格：果香奔放、單寧圓潤、易飲親民</p>
        </div>
      </div>
    </div>`
  },

  {
    title: '聖巴巴拉 vs 帕索羅布爾斯：兩種涼熱機制比較',
    content: `<div class="sb-paso-compare">
      <h3>⚖️ 同屬中海岸，冷卻機制卻完全不同</h3>
      <p>聖巴巴拉與帕索羅布爾斯雖同屬 Central Coast，車程僅約 1.5 小時，但兩地的「涼爽從何而來」是截然不同的物理機制——這也是為什麼兩地能同時是加州最重要的 Pinot Noir 產地與 Rhône 品種產地，而不互相競爭。</p>
      <div class="sp-compare-table">
        <table class="compare-table">
          <thead><tr><th>比較面向</th><th>Santa Barbara（Sta. Rita Hills）</th><th>Paso Robles（West Side）</th></tr></thead>
          <tbody>
            <tr><td>冷卻機制</td><td>橫向山谷直接開口朝海，海霧/海風全天候滲入</td><td>Templeton Gap 缺口式冷卻，加上夜間輻射冷卻主導的晝夜溫差</td></tr>
            <tr><td>晝夜溫差</td><td>相對較小（約 16°C），因海洋影響全天持續存在</td><td>全加州數一數二大（可達 26°C），日間炎熱、夜間輻射冷卻劇烈</td></tr>
            <tr><td>主導土壤</td><td>矽藻土、海洋砂質沉積</td><td>石灰岩、鈣質沉積岩（源自 Monterey 地層）</td></tr>
            <tr><td>代表品種</td><td>Pinot Noir、Chardonnay（涼爽氣候品種）</td><td>Syrah、Grenache、Mourvèdre、Cabernet Sauvignon（隆河與波爾多品種並存）</td></tr>
            <tr><td>風格關鍵詞</td><td>優雅、高酸、鹹鮮礦物感</td><td>濃縮、厚實、香料感，日夜溫差帶來的糖酸平衡</td></tr>
          </tbody>
        </table>
      </div>
      <p class="sp-insight">💡 核心洞察：聖巴巴拉的涼爽來自「持續性」的海洋直接接觸；帕索的溫差來自「日夜循環式」的輻射冷卻。前者適合需要終年溫和環境的薄皮品種（Pinot Noir），後者適合能承受日間高溫又能藉夜間降溫保留酸度的厚皮品種（Syrah、Cabernet）。</p>
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
            question: '聖巴巴拉的橫向山脈（Transverse Ranges）為何呈東西走向而非典型的南北走向？',
            options: ['A. 純粹隨機的地形侵蝕結果', 'B. 太平洋板塊運動方向出現局部彎曲，垂直於斷層的擠壓力把地層摺曲旋轉近 90 度', 'C. 因為人工開墾改變了地形', 'D. 因為當地火山噴發造成'],
            correct: 1,
            explanation: '約 2,000 萬年前太平洋板塊相對北美板塊的運動出現局部彎曲（Big Bend），產生強烈的垂直擠壓力，把原本的地層摺曲並旋轉近 90 度，連帶抬升海底沉積岩層，形成東西橫向的山脈系統，是整個南北美洲西岸最大範圍的橫向山脈區。'
          },
          {
            type: 'single',
            question: '橫向山谷（東西走向）相較於典型南北走向山谷，讓太平洋海風進入內陸的方式有何不同？',
            options: ['A. 完全無法讓海風進入', 'B. 海風可直接從西側開口灌入，不必依賴特定缺口地形', 'C. 只有在冬季才有海風進入', 'D. 需要透過人工引水道'],
            correct: 1,
            explanation: '典型南北走向山脈需依賴特定低窪缺口（如 Petaluma Gap）才能讓海風深入內陸；而聖巴巴拉的東西走向山谷本身就是一個開口朝西的天然通道，太平洋涼爽海風和晨霧可以直接灌入，不需缺口地形輔助。'
          },
          {
            type: 'single',
            question: 'Sta. Rita Hills 著名的矽藻土（Diatomaceous Earth）主要分布在產區的哪一側，且成因為何？',
            options: ['A. 東側，由火山灰堆積形成', 'B. 西側靠近 Lompoc，由遠古矽藻等含矽微生物遺骸沉積後隆起形成', 'C. 南側，由河流沖積形成', 'D. 北側，由風沙堆積形成'],
            correct: 1,
            explanation: 'Sta. Rita Hills 的矽藻土主要分布於西側靠近 Lompoc 一帶，是遠古矽藻等含矽微生物遺骸長期沉積於海床，中新世時隨橫向山脈的板塊擠壓活動隆起出露地表所形成，質輕多孔、排水力極強。'
          },
          {
            type: 'single',
            question: '帕索羅布爾斯（Paso Robles）西側最大的土壤特色是什麼？',
            options: ['A. 火山玄武岩', 'B. 沙質壤土', 'C. 石灰岩（Limestone）', 'D. 礦物質豐富的黏土'],
            correct: 2,
            explanation: '帕索羅布爾斯西側的石灰岩／鈣質土壤是其最大特色，源自古老海底 Monterey 地層經板塊擠壓抬升出露，類似法國 Châteauneuf-du-Pape 的地質環境，非常適合種植 Syrah、Grenache 等隆河品種。'
          },
          {
            type: 'single',
            question: '2014 年 TTB 認定的帕索羅布爾斯 11 個子 AVA，其認定結果對原本的 Paso Robles AVA 範圍有何影響？',
            options: ['A. 大幅擴大了 Paso Robles AVA 的整體範圍', 'B. 完全不改變原本 Paso Robles AVA 的整體範圍，僅做內部細分', 'C. 取消了 Paso Robles 這個名稱', 'D. 把 Paso Robles 劃分成兩個獨立州'],
            correct: 1,
            explanation: '2014 年 TTB 在 Paso Robles AVA 內部劃出 Adelaida District、Templeton Gap District 等 11 個子 AVA，目的是反映內部風土差異，但完全不改變原本 Paso Robles AVA 的整體邊界範圍，屬於內部細分而非擴張或分割。'
          },
          {
            type: 'single',
            question: 'Tablas Creek Vineyard 選址於帕索 Adelaida District 的主要原因是？',
            options: ['A. 該地土壤與法國 Château de Beaucastel 的鈣質石灰岩地質相似', 'B. 該地是帕索地價最便宜的區域', 'C. 該地靠近舊金山機場方便運輸', 'D. 該地完全沒有病蟲害風險'],
            correct: 0,
            explanation: 'Perrin 家族與 Robert Haas 於 1989 年選擇 Adelaida District 一塊鈣質石灰岩地建立 Tablas Creek，正是看中其地質與 Château de Beaucastel 在法國 Châteauneuf-du-Pape 的石灰岩風土高度相似，因此得以直接複製法國隆河的種植邏輯。'
          },
          {
            type: 'single',
            question: '2004 年電影《Sideways》主要對哪個品種產生了銷售促進效果？',
            options: ['A. Merlot', 'B. Chardonnay', 'C. Pinot Noir', 'D. Cabernet Sauvignon'],
            correct: 2,
            explanation: '電影《Sideways》中，主角 Miles 對 Pinot Noir 充滿熱情的描述引發了全球消費者對聖巴巴拉 Pinot Noir 的興趣，使美國 Pinot Noir 銷量在電影上映後一年內上升了 16%。'
          },
          {
            type: 'single',
            question: 'Ballard Canyon AVA 因地形略為封閉、比周邊略溫暖，加上鈣質土壤，被認為最適合哪些品種？',
            options: ['A. Riesling、Gewürztraminer', 'B. Syrah、Grenache', 'C. Pinot Noir、Chardonnay 專屬', 'D. Sauvignon Blanc、Sémillon'],
            correct: 1,
            explanation: 'Ballard Canyon 是 Santa Ynez Valley 內一條南北走向的小峽谷，因地形略為封閉而比周邊溫暖，鈣質土壤與充足日照特別適合 Syrah 與 Grenache，被視為加州隆河品種的隱藏精華區。'
          }
        ]
      }
    }
  }
]
