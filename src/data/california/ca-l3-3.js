/**
 * CA-L3-3 巴黎審判傳奇、Cult Wine 文化與年份評估
 * 深度探索加州葡萄酒的傳奇故事，以及如何像專家一樣解讀年份和評分
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          1976 年 5 月 24 日，一場在巴黎的盲品改寫了葡萄酒的世界秩序。加州 Cabernet 和 Chardonnay 在全法國評審面前擊敗了法國一級酒莊，震驚了整個葡萄酒世界。本課帶您深入這段傳奇，探索 Cult Wine 文化的崛起，以及如何像頂級侍酒師一樣分析加州年份。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🏆 深入了解巴黎審判的前後故事</h4>
            <p>掌握事件的完整歷史脈絡，以及這場品評如何永遠改變了加州和全球葡萄酒業</p>
          </div>
          <div class="point-item">
            <h4>💎 Cult Wine 文化解碼</h4>
            <p>理解 Screaming Eagle、Harlan Estate、Colgin 等膜拜酒的市場機制和品質邏輯</p>
          </div>
          <div class="point-item">
            <h4>📊 加州年份分析方法</h4>
            <p>掌握氣候數據、Parker 評分和市場價格的交叉分析方法，識別加州的偉大年份</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: '1976 年巴黎審判：改變世界的盲品',
    content: `<div class="judgment-of-paris">
      <h3>🏆 Judgment of Paris（巴黎審判）— 完整故事</h3>
      <div class="jop-background">
        <h4>背景：美國建國 200 週年的一份驕傲</h4>
        <p>1976 年，英國酒商 <strong>Steven Spurrier</strong> 在巴黎從事葡萄酒進口和教育工作。為了慶祝美國建國 200 週年（1776–1976），他策劃了一場讓加州葡萄酒與法國頂級酒款進行盲品比較的活動，邀請全法國最德高望重的葡萄酒評論家擔任評審。</p>
        <p>法國評審同意參加，因為他們確信結果不言而喻——法國葡萄酒必然獲勝。沒有人料到接下來的事。</p>
      </div>
      <div class="jop-event">
        <h4>📅 1976 年 5 月 24 日，巴黎洲際大酒店</h4>
        <div class="jop-tasting">
          <div class="jop-red">
            <h5>🍷 紅酒組（Cabernet Sauvignon 為主）</h5>
            <div class="lineup-title">參加品評的酒款</div>
            <table class="jop-table">
              <thead><tr><th>加州</th><th>法國（競爭對手）</th></tr></thead>
              <tbody>
                <tr><td>Stag's Leap Wine Cellars 1973</td><td>Château Mouton Rothschild 1970</td></tr>
                <tr><td>Heitz Martha's Vineyard 1970</td><td>Château Montrose 1970</td></tr>
                <tr><td>Clos Du Val 1972</td><td>Château Haut-Brion 1970</td></tr>
                <tr><td>Ridge Monte Bello 1971</td><td>Château Léoville Las Cases 1971</td></tr>
                <tr><td>Freemark Abbey 1969</td><td>Château Beychevelle 1970</td></tr>
              </tbody>
            </table>
            <div class="jop-result winner">
              <strong>🥇 紅酒組冠軍：Stag's Leap Wine Cellars 1973 Cabernet Sauvignon</strong>
            </div>
          </div>
          <div class="jop-white">
            <h5>🍾 白酒組（Chardonnay 為主）</h5>
            <div class="lineup-title">參加品評的酒款</div>
            <table class="jop-table">
              <thead><tr><th>加州</th><th>法國（競爭對手）</th></tr></thead>
              <tbody>
                <tr><td>Chateau Montelena 1973</td><td>Meursault Charmes 1973</td></tr>
                <tr><td>Chalone 1974</td><td>Beaune Clos des Mouches 1973</td></tr>
                <tr><td>Spring Mountain 1973</td><td>Puligny-Montrachet 1972</td></tr>
                <tr><td>Freemark Abbey 1972</td><td>Bâtard-Montrachet 1973</td></tr>
              </tbody>
            </table>
            <div class="jop-result winner">
              <strong>🥇 白酒組冠軍：Chateau Montelena 1973 Chardonnay</strong>
            </div>
          </div>
        </div>
      </div>
      <div class="jop-aftermath">
        <h4>震驚世界的後果</h4>
        <ul>
          <li>當天在場唯一的記者 <em>George Taber（時代雜誌）</em>將消息傳遍全球</li>
          <li>法國葡萄酒業最初極力淡化此事，部分評審要求取消評分——但為時已晚</li>
          <li>加州葡萄酒莊投資湧入，土地價格大幅上漲，現代 Napa Wine Industry 由此成形</li>
          <li>全球消費者開始以更開放的眼光看待「舊世界以外」的葡萄酒</li>
          <li>2006 年 30 週年重賽（30th Anniversary Tasting）：加州再次獲勝，尤其是 Ridge Monte Bello 1971 奪回前五</li>
        </ul>
      </div>
      <div class="jop-legacy">
        <h4>電影《Bottle Shock》（2008）</h4>
        <p>以巴黎審判為背景的電影，由 Alan Rickman 飾演 Steven Spurrier。雖然歷史細節有所改動，但成功普及了這個改變葡萄酒歷史的故事。強烈推薦在品飲加州葡萄酒前觀看。</p>
      </div>
    </div>`
  },

  {
    title: 'Cult Wine 文化：加州的膜拜酒傳奇',
    content: `<div class="cult-wine-culture">
      <h3>💎 Cult Wine（膜拜酒）— 加州獨有的葡萄酒現象</h3>
      <p>1990 年代，Robert Parker（波爾多挑戰者的膜拜者）開始給加州少量、極品質酒款 100 分評分，加上稀缺性（年產幾百箱）和排隊購買制度，加州 Cult Wine 應運而生，成為葡萄酒史上最獨特的現象。</p>
      <div class="cult-wines">
        <div class="cw-card screaming-eagle">
          <h4>🦅 Screaming Eagle</h4>
          <p class="cw-location">Oakville, Napa Valley</p>
          <div class="cw-stats">
            <span>年產量：約 500 箱（6,000 瓶）</span>
            <span>首釀年份：1992</span>
            <span>評分：多次獲 Robert Parker 100 分</span>
          </div>
          <p>以 Cabernet Sauvignon 為主的調配，追求極度成熟的果味和密集的質地。1992 首釀年份定價僅 60 美元，現今二手市場超過 3,000 美元一瓶。</p>
          <p class="cw-auction">拍賣紀錄：2000 年 Napa Valley Wine Auction，6 公升大瓶裝以 500,000 美元成交（慈善拍賣）</p>
        </div>
        <div class="cw-card harlan-estate">
          <h4>🏛️ Harlan Estate</h4>
          <p class="cw-location">Oakville hills, Napa Valley</p>
          <div class="cw-stats">
            <span>年產量：約 1,500–2,000 箱</span>
            <span>創立：1984 年（William Harlan）</span>
          </div>
          <p>Bill Harlan 對 Bordeaux 一級酒莊的理解——「傳家之寶」哲學。極低產量（每英畝約 1 噸），波爾多調配風格，帶有可可、雪松、菸草的深邃複雜度。</p>
          <p class="cw-wait">等待名單：長達 15 年以上，部分訂購者甚至永遠無法收到</p>
        </div>
        <div class="cw-card colgin">
          <h4>✨ Colgin Cellars</h4>
          <p class="cw-location">Howell Mountain, Napa Valley</p>
          <div class="cw-stats">
            <span>年產量：極少（多個單一葡萄園系列）</span>
            <span>創立：1992 年（Ann Colgin）</span>
          </div>
          <p>以 Howell Mountain 高海拔葡萄園為基地，釀造多款不同地塊的單一葡萄園 Cabernet，是加州對「精品地塊」概念的最佳詮釋。</p>
        </div>
        <div class="cw-card bryantfamily">
          <h4>🌟 Bryant Family Vineyard</h4>
          <p class="cw-location">Pritchard Hill, Napa Valley</p>
          <div class="cw-stats">
            <span>年產量：約 500 箱</span>
            <span>創立：1985 年</span>
          </div>
          <p>Pritchard Hill 的高海拔葡萄園，是「Napa Highland」概念的代表。深色漿果、黑巧克力、礦石感交織的複雜層次。</p>
        </div>
      </div>
      <div class="cult-wine-mechanism">
        <h4>Cult Wine 的市場機制</h4>
        <div class="cwm-list">
          <div class="cwm-item">
            <strong>稀缺性（Scarcity）</strong>
            <p>年產量 500–2,000 箱的極限稀缺，創造出天然的供不應求格局</p>
          </div>
          <div class="cwm-item">
            <strong>郵購名單（Mailing List）</strong>
            <p>只有在等候名單上的顧客才能購買，新名單長達數年甚至永久關閉</p>
          </div>
          <div class="cwm-item">
            <strong>Parker 評分效應</strong>
            <p>Robert Parker 的 97–100 分直接決定收藏家的購買意向和二手市場價格</p>
          </div>
          <div class="cwm-item">
            <strong>Napa Auction 文化</strong>
            <p>年度 Napa Valley Wine Auction（慈善拍賣）是 Cult Wine 出現大瓶裝競標的舞台，同時也是超高知名度的行銷機會</p>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: '加州年份解析：氣候、評分與陳年潛力',
    content: `<div class="vintage-analysis">
      <h3>📊 如何解讀加州年份</h3>
      <p>與法國不同，加州的氣候相對穩定，但仍有一定的年份差異——主要來自降雨時機（特別是採收前的秋雨）、熱浪、野火和乾旱。</p>
      <div class="vintage-factors">
        <h4>影響加州年份品質的關鍵氣候因素</h4>
        <div class="vf-grid">
          <div class="vf-card positive">
            <h5>✅ 優質年份的氣候條件</h5>
            <ul>
              <li>冬季適量降雨（葡萄根系水分充足）</li>
              <li>春季溫暖無霜（花期順利，良好著果率）</li>
              <li>生長季溫暖但不過熱（均勻成熟）</li>
              <li>採收前 4–6 週天氣穩定、乾燥（果皮不因潮濕而腐爛）</li>
              <li>明顯的晝夜溫差（酸度保留）</li>
              <li>無野火煙霧污染</li>
            </ul>
          </div>
          <div class="vf-card negative">
            <h5>❌ 問題年份的氣候挑戰</h5>
            <ul>
              <li>採收前降雨或颶風（稀釋果味、誘發腐爛）</li>
              <li>夏季極端熱浪（葡萄失水萎縮，酸度崩解）</li>
              <li>生長季乾旱壓力（葡萄樹提前進入休眠）</li>
              <li>野火煙霧污染（Smoke Taint）</li>
              <li>霜害（特別是 Carneros 等低窪谷地）</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="notable-vintages">
        <h4>🗓️ Napa Valley 重要年份評析</h4>
        <div class="nv-table-wrap">
          <table class="vintage-table">
            <thead>
              <tr>
                <th>年份</th>
                <th>整體評價</th>
                <th>主要事件</th>
                <th>代表風格</th>
              </tr>
            </thead>
            <tbody>
              <tr class="vt-excellent">
                <td><strong>2013</strong></td>
                <td>⭐⭐⭐⭐⭐ 傳奇</td>
                <td>完美生長季，乾燥採收期</td>
                <td>集中度極高，果味豐沛，酸度平衡</td>
              </tr>
              <tr class="vt-excellent">
                <td><strong>2016</strong></td>
                <td>⭐⭐⭐⭐⭐ 傳奇</td>
                <td>均勻成熟，涼爽採收期</td>
                <td>優雅結構，長陳年潛力</td>
              </tr>
              <tr class="vt-excellent">
                <td><strong>2019</strong></td>
                <td>⭐⭐⭐⭐⭐ 傳奇</td>
                <td>充裕降雨後的完美生長季</td>
                <td>平衡完美，各子 AVA 均表現出色</td>
              </tr>
              <tr class="vt-good">
                <td><strong>2018</strong></td>
                <td>⭐⭐⭐⭐ 優秀</td>
                <td>夏季輕微熱浪，但採收期良好</td>
                <td>豐沛果味，略高酒精度</td>
              </tr>
              <tr class="vt-challenging">
                <td><strong>2017</strong></td>
                <td>⭐⭐⭐ 複雜</td>
                <td>Atlas Peak 大火，部分產區受煙霧影響</td>
                <td>未受影響的產區仍出色，需甄選</td>
              </tr>
              <tr class="vt-challenging">
                <td><strong>2020</strong></td>
                <td>⭐⭐⭐ 複雜</td>
                <td>Glass Fire，大量酒莊放棄採收</td>
                <td>嚴格篩選的酒款仍有高品質，但減少</td>
              </tr>
            </tbody>
          </table>
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
            question: '在 1976 年巴黎審判（Judgment of Paris）中，紅酒組（Cabernet Sauvignon）的冠軍是哪款加州葡萄酒？',
            options: ['A. Chateau Montelena Chardonnay 1973', 'B. Ridge Monte Bello 1971', 'C. Stag's Leap Wine Cellars Cabernet Sauvignon 1973', 'D. Heitz Martha's Vineyard Cabernet 1970'],
            correct: 2,
            explanation: 'Stag's Leap Wine Cellars 的 1973 年份 Cabernet Sauvignon 在 1976 年巴黎評判的紅酒組盲品中奪冠，所有評審均為法國葡萄酒業資深人士。這個結果震驚了整個葡萄酒世界，奠定了 Napa Valley 的全球地位。'
          },
          {
            type: 'single',
            question: '加州 Cult Wine（膜拜酒）最主要的市場機制是什麼？',
            options: ['A. 政府補貼優質酒莊', 'B. 稀缺產量（通常500–2000箱）加上封閉式郵購名單，創造供不應求', 'C. 贏得奧斯卡最佳影片的聯名合作', 'D. 由加州葡萄酒局統一訂價和分配'],
            correct: 1,
            explanation: '加州 Cult Wine 的核心是「稀缺性」——年產僅數百至兩千箱的極限產量，加上只對名單會員開放的購買制度，創造了天然的供不應求。Robert Parker 100 分評分則進一步推高了知名度和二手市場價格。'
          },
          {
            type: 'single',
            question: '以下哪個是影響加州年份品質的「負面」氣候因素？',
            options: ['A. 冬季適量降雨', 'B. 生長季明顯的晝夜溫差', 'C. 採收前乾燥穩定的天氣', 'D. 夏季極端熱浪加上採收前期野火煙霧'],
            correct: 3,
            explanation: '夏季極端熱浪會使葡萄失水萎縮、酸度崩解；野火煙霧污染（Smoke Taint）中的酚類化合物被葡萄皮吸收後，在發酵中釋放強烈的燒焦風味。2017 和 2020 年就是因為野火而造成加州部分產區的重大損失年份。'
          }
        ]
      }
    }
  }
]
