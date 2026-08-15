/**
 * CA-L3-3 巴黎審判傳奇、Cult Wine 文化與年份評估
 * 深度探索加州葡萄酒的傳奇故事、Cult Wine 的市場經濟學，以及如何像專家一樣解讀年份與氣候變遷的交織影響
 *
 * 內容查證來源（2026 年 8 月）：
 * - Ridge Vineyards 官網、Vinography、The Guardian、Decanter — 2006 年巴黎審判 30 週年重賽（倫敦/納帕雙城同步）結果
 * - Wikipedia「Judgment of Paris (wine)」、Napa Valley Vintners「50 Years Later」— 1976 年原始賽事完整名單與後續影響
 * - Wine Enthusiast「From Screaming Eagle to Sine Qua Non」、Club Oenologique、Napa Wine Project — Cult Wine 產區歷史
 * - Crystal Wines、Wikipedia「Scarecrow (wine)」— Harlan Estate、Screaming Eagle、Scarecrow 創立故事
 * - Wine Enthusiast Vintage Chart、Jancis Robinson「Northern California Vintage Chart」、Napa Valley Vintners Vintage Reports — 年份評析數據
 * - UC Davis Wine & Viticulture、AJEV — 氣候變遷與年份變異的科學連結
 * 註：拍賣紀錄、產量、價格等具體數字僅呈現具廣泛公開報導基礎者；無法交叉驗證的精確數字一律以「約」或質性描述表達，避免臆測。
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          1976 年 5 月 24 日，一場在巴黎的盲品改寫了葡萄酒的世界秩序。加州 Cabernet 和 Chardonnay 在全法國評審面前擊敗了法國一級酒莊，震驚了整個葡萄酒世界——而 2006 年的 30 週年重賽，更證明了這不是曇花一現的僥倖。本課帶您深入這段傳奇的完整脈絡，探索 Cult Wine 文化背後的市場經濟學，以及如何像頂級侍酒師一樣，結合氣候科學分析加州年份。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🏆 深入了解巴黎審判的前後故事與 30 週年重賽</h4>
            <p>掌握事件的完整歷史脈絡，以及這場品評如何永遠改變了加州和全球葡萄酒業</p>
          </div>
          <div class="point-item">
            <h4>💎 Cult Wine 文化的市場經濟學</h4>
            <p>理解 Screaming Eagle、Harlan Estate、Scarecrow 等膜拜酒的真實創立故事與市場機制</p>
          </div>
          <div class="point-item">
            <h4>📊 加州年份分析方法</h4>
            <p>掌握氣候數據、生長積溫與市場評分的交叉分析方法，識別加州的偉大年份，並理解氣候變遷如何改寫年份判讀邏輯</p>
          </div>
        </div>
      </div>
    `
  },

  {
    component: 'CaliforniaRegionMapSlide',
    title: 'Napa Valley — 膜拜酒產區地圖',
    componentProps: {
      slide: {
        title: 'Napa Valley — 膜拜酒產區地圖',
        description: '巴黎審判冠軍產地與 Cult Wine 重鎮：Stags Leap、Oakville、Rutherford、Howell Mountain',
        mapGroup: 'Napa Valley',
        highlightAVAs: ["Stags Leap District","Oakville","Rutherford","Howell Mountain","Calistoga"],
      }
    }
  },

  {
    title: '1976 年巴黎審判：改變世界的盲品',
    content: `<div class="judgment-of-paris">
      <h3>🏆 Judgment of Paris（巴黎審判）— 完整故事</h3>
      <div class="jop-background">
        <h4>背景：美國建國 200 週年的一份驕傲</h4>
        <p>1976 年，英國酒商 <strong>Steven Spurrier</strong> 在巴黎從事葡萄酒進口和教育工作。為了慶祝美國建國 200 週年（1776–1976），他策劃了一場讓加州葡萄酒與法國頂級酒款進行盲品比較的活動，邀請全法國最德高望重的葡萄酒評論家擔任評審。</p>
        <p>法國評審同意參加，因為他們確信結果不言而喻——法國葡萄酒必然獲勝。沒有人料到接下來的事。當天在場的唯一記者，是時代雜誌（TIME）的 George Taber。</p>
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
            <p class="jop-detail">Ridge Monte Bello 1971 在這場原始賽事中僅排名第五——這個名次在 30 年後將出現戲劇性反轉（見下一節）。</p>
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
          <li>George Taber 將消息傳遍全球，但法國葡萄酒業最初極力淡化此事，部分評審甚至事後要求取消評分——但為時已晚</li>
          <li>加州葡萄酒莊投資湧入，土地價格大幅上漲，現代 Napa Wine Industry 的精品化進程由此加速</li>
          <li>全球消費者開始以更開放的眼光看待「舊世界以外」的葡萄酒，為後續澳洲、智利、南非等「新世界」產區打開市場心理空間</li>
          <li>此後每隔數年就有機構重辦類似盲品，「巴黎審判」成為葡萄酒行銷史上最具影響力的單一事件</li>
        </ul>
      </div>
      <div class="jop-legacy">
        <h4>電影《Bottle Shock》（2008）</h4>
        <p>以巴黎審判為背景的電影，由 Alan Rickman 飾演 Steven Spurrier。雖然歷史細節有所改動，但成功普及了這個改變葡萄酒歷史的故事。強烈推薦在品飲加州葡萄酒前觀看。</p>
      </div>
    </div>`
  },

  {
    title: '2006 年 30 週年重賽：加州的陳年潛力大反攻',
    highlights: [
      { id: 'r1', icon: '🔁', title: '雙城同步盲品', content: '2006 年 5 月，Steven Spurrier 在倫敦與納帕同步舉辦重賽，邀請國際知名評審重新盲品 1976 年賽事中同款酒的較新年份陳年狀態。' },
      { id: 'r2', icon: '👑', title: 'Ridge Monte Bello 的大逆轉', content: '1976 年僅排名第五的 Ridge Monte Bello 1971，在 2006 年重賽的倫敦與納帕兩地評分合併後奪得冠軍，領先第二名達 18 分之多。' },
      { id: 'r3', icon: '📉', title: '法國名莊的意外表現', content: '原本被普遍看好、預期會隨陳年展現優勢的 Mouton-Rothschild 與 Haut-Brion，在重賽中的名次反而低於預期。' }
    ],
    content: `<div class="rematch-2006">
      <h3>🔁 2006 年 30 週年重賽——加州陳年潛力的終極證明</h3>
      <p>如果說 1976 年的巴黎審判只是「年輕加州酒打敗年輕法國酒」的一次性驚奇，那麼 2006 年的 30 週年重賽，則是對「加州酒是否具備長期陳年能力」這個更嚴肅問題的直接回答。</p>
      <div class="rematch-detail">
        <h4>賽事設計</h4>
        <p>Steven Spurrier 於 2006 年安排了倫敦與納帕兩地同步進行的重賽，邀請國際公認具權威性的評審小組，針對當年紅酒組參賽酒款（此時已陳年 30 餘年）重新進行盲品評分，兩地評分結果合併計算最終名次。</p>
        <div class="rematch-result">
          <h4>🏆 結果：加州包辦前五名</h4>
          <p>合併倫敦與納帕兩地評分後，<strong>Ridge Vineyards Monte Bello 1971</strong>（1976 年原賽事中僅排名第五）奪得冠軍，領先第二名達 18 分之多。加州酒款包辦了此次重賽的前五名，而原先被寄予厚望、預期會隨陳年展現優勢的 Mouton-Rothschild 與 Haut-Brion，名次反而低於預期。</p>
        </div>
        <div class="rematch-meaning">
          <h4>侍酒師應如何解讀這個結果</h4>
          <ul>
            <li>它證明了加州頂級 Cabernet（尤其是高海拔、低產量的山地/山脊風土，如 Monte Bello）具備足以與波爾多一級酒莊匹敵、甚至更優越的長期陳年能力</li>
            <li>它間接肯定了「石灰岩 + 高海拔 + 濱海涼爽」這類風土組合（見 CA-L3-1 對 Monte Bello 的地質分析）在陳年潛力上的價值</li>
            <li>它也提醒我們：單一年份的「即飲」盲品排名，不能直接推論該酒款的長期陳年表現——1976 年排名靠後的酒款，30 年後反而技壓群雄</li>
          </ul>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Cult Wine 文化：加州的膜拜酒傳奇',
    content: `<div class="cult-wine-culture">
      <h3>💎 Cult Wine（膜拜酒）— 加州獨有的葡萄酒現象</h3>
      <p>1990 年代，Robert Parker 開始給加州少量、極高品質的酒款高分甚至滿分評分，加上稀缺性（年產量極低）和排隊購買制度，加州 Cult Wine 應運而生，成為葡萄酒史上最獨特的市場現象之一。</p>
      <div class="cult-wines">
        <div class="cw-card screaming-eagle">
          <h4>🦅 Screaming Eagle</h4>
          <p class="cw-location">Oakville, Napa Valley</p>
          <div class="cw-stats">
            <span>創始人：Jean Phillips（原納帕地產經紀人，非釀酒背景）</span>
            <span>購入土地：1986 年</span>
            <span>首個商業年份：1992（1995 年上市，獲 Robert Parker 極高評分）</span>
          </div>
          <p><strong>創立故事：</strong>Jean Phillips 原本從事納帕不動產業務，1986 年在沒有釀酒經驗的情況下買下這片早已種植葡萄（可追溯至 1940 年代）、但品種混雜的地塊，重新整地種植以 Cabernet Sauvignon 為主的品種。1992 年，她與釀酒師 Heidi Peterson Barrett、鄰居 Gustav Dalla Valle 合作，挑選最佳地塊釀出首款商業酒款。這款產量極少的處女作，於三年後上市時獲得 Robert Parker 高分肯定，一舉成名，此後長期供不應求，是加州「素人創始者+明星釀酒顧問」模式的經典範例。</p>
        </div>
        <div class="cw-card harlan-estate">
          <h4>🏛️ Harlan Estate</h4>
          <p class="cw-location">Oakville hills, Napa Valley</p>
          <div class="cw-stats">
            <span>創始人：William "Bill" Harlan</span>
            <span>關鍵契機：1979 年與 Robert Mondavi 的一通電話</span>
          </div>
          <p><strong>創立故事：</strong>與 Jean Phillips 白手起家的路徑不同，Bill Harlan 從一開始就是「有意為之」——他明確以打造「加州第一級酒莊」（California First Growth，呼應波爾多 1855 分級的一級酒莊概念）為目標。1979 年，Harlan 與 Robert Mondavi 的一次談話促使他認真投入頂級酒莊事業；Mondavi 隨後引介他認識歐洲重要酒界人脈，一趟深度歐洲行更堅定了他對 Napa 潛力的信心。Harlan Estate 位於 Oakville 山丘地帶，以波爾多式調配為核心，追求「傳家寶」等級的長期陳年格局，可可、雪松、菸草的深邃複雜度是其風格標誌。</p>
        </div>
        <div class="cw-card scarecrow">
          <h4>🎃 Scarecrow</h4>
          <p class="cw-location">Rutherford, Napa Valley（近 To Kalon 一帶）</p>
          <div class="cw-stats">
            <span>土地淵源：1943 年由 MGM 製片人 Joseph Judson Cohn 購入</span>
            <span>種植：1945 年在鄰居（時任 Inglenook 負責人）建議下開始種植 Cabernet Sauvignon</span>
          </div>
          <p><strong>創立故事：</strong>Scarecrow 的地塊淵源可追溯到好萊塢黃金時代——1943 年，米高梅（MGM）製片人 Joseph Judson Cohn 買下這片位於 Rutherford 的地產，1945 年在鄰居的建議下種下約 80 英畝的 Cabernet Sauvignon。這片老藤地塊後來由 Cohn 的後人與釀酒團隊重新以「Scarecrow」品牌推出，因其毗鄰 To Kalon 的位置與老藤根系深度，被視為加州最具故事性、也最稀缺的膜拜酒之一。</p>
        </div>
        <div class="cw-card colgin">
          <h4>✨ Colgin Cellars</h4>
          <p class="cw-location">Howell Mountain 及多處單一葡萄園, Napa Valley</p>
          <div class="cw-stats">
            <span>創立：1992 年（Ann Colgin）</span>
          </div>
          <p>以 Howell Mountain 高海拔葡萄園為基地起家，逐步擴展至多個不同地塊的單一葡萄園 Cabernet 系列，是加州對「精品地塊」（Single Vineyard Designate）概念的最佳詮釋之一。</p>
        </div>
      </div>
      <div class="cult-wine-mechanism">
        <h4>Cult Wine 的市場機制</h4>
        <div class="cwm-list">
          <div class="cwm-item">
            <strong>稀缺性（Scarcity）</strong>
            <p>年產量極低（多數 Cult Wine 年產僅數百至兩千箱），創造出天然的供不應求格局，這是所有膜拜酒的共同起點，而非行銷噱頭</p>
          </div>
          <div class="cwm-item">
            <strong>郵購名單（Mailing List）</strong>
            <p>只有在等候名單上的顧客才能依配額購買，部分名單長達數年甚至長期關閉，形成一級市場（酒莊直售）與二級市場（拍賣/私人交易）之間巨大的價差</p>
          </div>
          <div class="cwm-item">
            <strong>評論家評分效應</strong>
            <p>Robert Parker 時代的高分（尤其是 90 分以上甚至滿分）直接放大收藏家的購買意向，並推高二手市場價格——這也是「Parker 化」（Parkerization）一詞在葡萄酒評論界引發爭論的背景</p>
          </div>
          <div class="cwm-item">
            <strong>Napa Valley Wine Auction 文化</strong>
            <p>年度慈善拍賣是 Cult Wine 出現超大瓶裝競標的舞台，善款用於在地社區與醫療慈善，同時也是酒莊建立品牌聲望的重要行銷機會</p>
          </div>
        </div>
      </div>
      <div class="cult-wine-caveat">
        <p>💡 <strong>侍酒師應有的批判視角：</strong>Cult Wine 現象反映的是稀缺經濟學與評論家權力的結合，而非單純的「品質必然頂尖」。侍酒師應理解其市場邏輯，但在專業品飲評估時，仍應以盲品與結構分析為準，避免被價格或名單稀缺性本身左右判斷。</p>
      </div>
    </div>`
  },

  {
    title: '加州年份解析：氣候、生長積溫與陳年潛力',
    content: `<div class="vintage-analysis">
      <h3>📊 如何解讀加州年份——進階框架</h3>
      <p>與法國不同，加州的氣候相對穩定，但仍有一定的年份差異——主要來自降雨時機（特別是採收前的秋雨）、熱浪、野火和乾旱。進階分析應結合 Winkler Index 生長積溫（見 CA-L3-1）與實際物候紀錄，而非僅憑印象。</p>
      <div class="vintage-factors">
        <h4>影響加州年份品質的關鍵氣候因素</h4>
        <div class="vf-grid">
          <div class="vf-card positive">
            <h5>✅ 優質年份的氣候條件</h5>
            <ul>
              <li>冬季適量降雨（葡萄根系水分充足，但不至於延遲發芽）</li>
              <li>春季溫暖無霜（花期順利，良好著果率）</li>
              <li>生長季溫暖但不過熱（均勻成熟，糖分與酚類成熟同步）</li>
              <li>採收前 4–6 週天氣穩定、乾燥（果皮不因潮濕而腐爛）</li>
              <li>明顯的晝夜溫差（酸度保留，見 CA-L3-1 逆溫層機制）</li>
              <li>無野火煙霧污染</li>
            </ul>
          </div>
          <div class="vf-card negative">
            <h5>❌ 問題年份的氣候挑戰</h5>
            <ul>
              <li>採收前降雨（稀釋果味、誘發腐爛）</li>
              <li>夏季極端熱浪（葡萄失水萎縮，酸度崩解，糖分與酚類成熟脫節）</li>
              <li>生長季乾旱壓力（葡萄樹提前進入休眠，影響次年芽體發育）</li>
              <li>野火煙霧污染（Smoke Taint，見 CA-L3-2 分子機制）</li>
              <li>霜害（特別是 Carneros 等低窪谷地，見 CA-L3-1 冷空氣沉積原理）</li>
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
              <tr class="vt-challenging">
                <td><strong>2011</strong></td>
                <td>⭐⭐⭐ 冷涼複雜</td>
                <td>異常冷涼、多雨的生長季</td>
                <td>酒體較輕，Merlot 及白葡萄品種表現優於 Cabernet</td>
              </tr>
              <tr class="vt-excellent">
                <td><strong>2013</strong></td>
                <td>⭐⭐⭐⭐⭐ 傳奇</td>
                <td>完美生長季，乾燥採收期</td>
                <td>集中度極高，果味豐沛，酸度平衡</td>
              </tr>
              <tr class="vt-good">
                <td><strong>2014</strong></td>
                <td>⭐⭐⭐⭐ 優秀</td>
                <td>乾旱年份但成熟度佳，早採收</td>
                <td>風味濃郁，果實狀況良好，整體評價正向</td>
              </tr>
              <tr class="vt-good">
                <td><strong>2015</strong></td>
                <td>⭐⭐⭐⭐ 優秀</td>
                <td>晚冬早春異常溫暖，產量因花期不穩而偏低</td>
                <td>果味奔放成熟，適合中期飲用，陳年曲線較短</td>
              </tr>
              <tr class="vt-excellent">
                <td><strong>2016</strong></td>
                <td>⭐⭐⭐⭐⭐ 傳奇</td>
                <td>均勻成熟，涼爽採收期</td>
                <td>優雅結構，長陳年潛力</td>
              </tr>
              <tr class="vt-challenging">
                <td><strong>2017</strong></td>
                <td>⭐⭐⭐ 複雜</td>
                <td>年底 Atlas Peak／North Bay 大火，部分產區受煙霧影響</td>
                <td>未受影響的產區仍出色，需嚴格甄選酒莊與採收時間</td>
              </tr>
              <tr class="vt-good">
                <td><strong>2018</strong></td>
                <td>⭐⭐⭐⭐ 優秀</td>
                <td>生長季平順，採收期良好</td>
                <td>豐沛果味，結構平衡</td>
              </tr>
              <tr class="vt-excellent">
                <td><strong>2019</strong></td>
                <td>⭐⭐⭐⭐⭐ 傳奇</td>
                <td>充裕降雨後的完美生長季</td>
                <td>平衡完美，各子 AVA 均表現出色</td>
              </tr>
              <tr class="vt-challenging">
                <td><strong>2020</strong></td>
                <td>⭐⭐⭐ 複雜</td>
                <td>LNU Lightning Complex／Glass Fire，大量酒莊放棄採收</td>
                <td>嚴格篩選、未受煙霧影響的酒款仍有高品質，但整體產量大減</td>
              </tr>
              <tr class="vt-good">
                <td><strong>2021</strong></td>
                <td>⭐⭐⭐⭐ 優秀（低產）</td>
                <td>連續第二年乾旱，果粒偏小、產量偏低，採收季平順少雨</td>
                <td>風味濃縮度高，果實小而集中</td>
              </tr>
              <tr class="vt-good">
                <td><strong>2022</strong></td>
                <td>⭐⭐⭐⭐ 優秀</td>
                <td>生長季夾雜熱浪但採收前控制得宜，酚類成熟度佳</td>
                <td>色澤深、單寧圓潤，結構感強而不失新鮮度</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="vintage-methodology">
        <h4>📐 進階年份判讀方法論</h4>
        <p>專業侍酒師分析加州年份時，應同時交叉比對：<strong>①該年 Winkler Index 生長積溫是否偏離常年平均 ②採收前 4–6 週的降雨與野火紀錄 ③花期著果率影響的產量規模（低產量常伴隨風味濃縮，但也可能反映不利氣候） ④該年份上市後專業評論與拍賣市場的長期追蹤表現</strong>。單一氣候事件（如一場秋雨）不必然定義整個年份，但持續性的氣候趨勢（如連續乾旱、逐年提前的採收日期）正在系統性地改寫加州年份判讀的基準線——這正是氣候變遷對「年份學」本身的深層衝擊。</p>
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
            options: ['A. Chateau Montelena Chardonnay 1973', 'B. Ridge Monte Bello 1971', "C. Stag's Leap Wine Cellars Cabernet Sauvignon 1973", "D. Heitz Martha's Vineyard Cabernet 1970"],
            correct: 2,
            explanation: "Stag's Leap Wine Cellars 的 1973 年份 Cabernet Sauvignon 在 1976 年巴黎評判的紅酒組盲品中奪冠，所有評審均為法國葡萄酒業資深人士。這個結果震驚了整個葡萄酒世界，奠定了 Napa Valley 的全球地位。"
          },
          {
            type: 'single',
            question: '2006 年巴黎審判 30 週年重賽的結果，最令人震驚之處是什麼？',
            options: ['A. 法國酒款全面獲勝，扳回一城', 'B. 1976 年僅排名第五的 Ridge Monte Bello 1971，在重賽中奪冠並大幅領先第二名', 'C. 重賽結果與 1976 年完全相同', 'D. 重賽因評審意見不合而取消'],
            correct: 1,
            explanation: '2006 年於倫敦與納帕同步舉行的重賽中，1976 年原賽事僅排名第五的 Ridge Vineyards Monte Bello 1971，在合併兩地評分後奪得冠軍，領先第二名達 18 分之多，加州酒款包辦前五名，證明了加州頂級酒款的長期陳年實力。'
          },
          {
            type: 'single',
            question: 'Harlan Estate 創始人 Bill Harlan 的核心目標與 Screaming Eagle 創始人 Jean Phillips 的路徑相比，最大的不同是什麼？',
            options: ['A. Harlan 完全沒有釀酒相關人脈', 'B. Harlan 從一開始就以打造「加州第一級酒莊」為明確目標，經 Robert Mondavi 引介歐洲人脈後更堅定信心；Phillips 則是從地產經紀人素人身分起步', 'C. 兩者的創立路徑完全相同，都是先取得法國酒莊認證', 'D. Harlan Estate 是加州最早成立的酒莊'],
            correct: 1,
            explanation: 'Bill Harlan 於 1979 年與 Robert Mondavi 的一次談話後，明確以「California First Growth」（呼應波爾多一級酒莊概念）為目標打造 Harlan Estate，並透過 Mondavi 引介歐洲重要酒界人脈；相對地，Jean Phillips 原本從事納帕不動產業務，並無釀酒背景，1986 年買下地塊後才逐步透過與釀酒師 Heidi Peterson Barrett 合作建立 Screaming Eagle。'
          },
          {
            type: 'single',
            question: '加州 Cult Wine（膜拜酒）最主要的市場機制是什麼？',
            options: ['A. 政府補貼優質酒莊', 'B. 稀缺性（極低年產量）加上封閉式郵購名單制度，創造供不應求，並被評論家高分進一步放大', 'C. 贏得奧斯卡最佳影片的聯名合作', 'D. 由加州葡萄酒局統一訂價和分配'],
            correct: 1,
            explanation: '加州 Cult Wine 的核心是「稀缺性」——年產量通常僅數百至兩千箱的極限產量，加上只對郵購名單會員開放的購買制度，創造了天然的供不應求。評論家（尤其 Robert Parker 時代）的高分評分則進一步推高知名度和二手市場價格。'
          },
          {
            type: 'single',
            question: '侍酒師在面對 Cult Wine 現象時，應抱持的專業批判視角是什麼？',
            options: ['A. 價格越高、名單越稀缺，代表品質必然越頂尖，可直接作為專業判斷依據', 'B. 應理解其稀缺經濟學與評論家權力結合的市場邏輯，但專業品飲評估仍應以盲品與結構分析為準', 'C. Cult Wine 純屬行銷炒作，完全不具備品質基礎', 'D. 侍酒師不應向顧客介紹任何 Cult Wine 相關知識'],
            correct: 1,
            explanation: 'Cult Wine 現象反映的是稀缺性與評論家評分權力結合的市場結構，而非「價格必然等於品質」。專業侍酒師應理解其市場邏輯與歷史脈絡，但在實際品飲評估時仍須回歸盲品與結構分析等客觀方法，避免被稀缺性或價格標籤主導判斷。'
          },
          {
            type: 'single',
            question: '以下哪個是影響加州年份品質的「負面」氣候因素？',
            options: ['A. 冬季適量降雨', 'B. 生長季明顯的晝夜溫差', 'C. 採收前乾燥穩定的天氣', 'D. 夏季極端熱浪加上採收前期野火煙霧'],
            correct: 3,
            explanation: '夏季極端熱浪會使葡萄失水萎縮、酸度崩解，並造成糖分與酚類成熟脫節；野火煙霧污染（Smoke Taint）中的酚類化合物被葡萄皮吸收後，在發酵中釋放強烈的燒焦風味。2017 和 2020 年就是因為野火而造成加州部分產區重大損失的年份。'
          },
          {
            type: 'single',
            question: '進階年份判讀方法論中，「Winkler Index 生長積溫是否偏離常年平均」屬於下列哪一類分析工具？',
            options: ['A. 純粹主觀的品飲印象', 'B. 量化氣候數據，用於客觀比較該年份與歷史平均的熱量條件差異', 'C. 僅適用於法國產區的分級工具，與加州無關', 'D. 用於判斷葡萄酒是否含糖分添加的檢測方法'],
            correct: 1,
            explanation: 'Winkler Index（見 CA-L3-1）以生長積溫（Growing Degree Days）量化一個生長季的熱量總量，是專業年份分析中用於客觀比較「該年份是否偏離常年平均氣候條件」的量化工具，應與降雨紀錄、野火事件、著果率等因素交叉比對，而非僅憑主觀印象判斷年份優劣。'
          },
          {
            type: 'single',
            question: '2021 與 2022 年份被評為「優秀但低產」的共同氣候背景是什麼？',
            options: ['A. 兩年皆遭遇嚴重春季霜害', 'B. 兩年皆處於加州多年乾旱週期，果粒偏小導致風味濃縮但整體產量下降', 'C. 兩年皆完全未受任何極端天氣影響', 'D. 兩年皆因野火煙霧被迫大量放棄採收'],
            correct: 1,
            explanation: '2021 與 2022 年份都處於加州當時的多年乾旱週期之中，乾旱壓力使果粒偏小、產量偏低，但也帶來風味濃縮度提高的效果，是「低產但優秀」型年份的典型氣候成因，與 2017、2020 年因野火煙霧被迫放棄採收的情況不同。'
          }
        ]
      }
    }
  }
]
