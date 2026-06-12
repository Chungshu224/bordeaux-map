/**
 * L1-1 認識波爾多地理位置
 * 了解波爾多產區的地理環境與位置特色
 */

export const lessonContent = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          歡迎來到侍酒師的筆記本！在這門入門課程中，我們將從最基礎也最重要的問題開始：波爾多在哪裡？這個看似簡單的問題，卻是理解波爾多葡萄酒偉大之處的第一把鑰匙。
        </p>

        <p class="intro-context">
          地理位置決定了一切。波爾多位於法國西南部，北緯44-45度之間，距離大西洋僅60公里。這個獨特的位置賦予了波爾多溫和的海洋性氣候、多樣化的土壤類型，以及三條重要河流的滋養。正是這些地理因素的完美組合，造就了波爾多作為世界頂級葡萄酒產區的地位。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>📍 掌握波爾多的地理位置</h4>
            <p>了解波爾多在法國的具體位置、緯度、面積與周邊地理環境</p>
          </div>

          <div class="point-item">
            <h4>🌊 理解地理對風土的影響</h4>
            <p>學習大西洋、吉隆河、加龍河、多爾多涅河如何塑造波爾多的氣候與土壤</p>
          </div>

          <div class="point-item">
            <h4>🗺️ 認識主要產區分布</h4>
            <p>初步了解左岸、右岸、兩海之間等主要產區的地理位置</p>
          </div>

          <div class="point-item">
            <h4>🏛️ 探索波爾多的歷史地位</h4>
            <p>認識波爾多作為世界葡萄酒之都的歷史淵源與戰略優勢</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠清晰描述波爾多的地理位置，並理解地理因素如何為這個偉大產區奠定基礎。讓我們開始這趟精彩的波爾多探索之旅！
        </p>
      </div>
    `
  },

  {
    component: 'SlideFranceBordeaux',
    title: '波爾多在法國的位置',
    duration: '15分鐘',
    level: '初級',
    courseIntro: '了解波爾多產區的地理環境與位置特色',
    highlights: [
      { id: 1, icon: '📍', title: '戰略位置', content: '位於法國西南部，距離大西洋約60公里' },
      { id: 2, icon: '🌊', title: '海洋性氣候', content: '受大西洋影響，氣候溫和濕潤，造就優質風土' }
    ],
    content: `<div class="location-overview">
      <p class="lead-text">波爾多 (Bordeaux) 位於法國西南部的新亞奎丹大區 (Nouvelle-Aquitaine)，是該地區最重要的城市和葡萄酒產區。</p>
      <div class="key-facts">
        <div class="fact-item"><strong>緯度位置：</strong> 北緯44°50'</div>
        <div class="fact-item"><strong>面積：</strong> 約120,000公頃的葡萄園</div>
        <div class="fact-item"><strong>距離巴黎：</strong> 約500公里（高鐵3小時）</div>
        <div class="fact-item"><strong>距離大西洋：</strong> 約60公里，享受海洋性氣候調節</div>
      </div>
      <div class="strategic-location">
        <h4>🎯 戰略地理優勢</h4>
        <ul>
          <li><strong>交通樞紐：</strong>連接歐洲與大西洋的重要門戶</li>
          <li><strong>氣候優勢：</strong>溫帶海洋性氣候，適合葡萄生長</li>
          <li><strong>土壤多樣：</strong>從砂礫到黏土，風土條件豐富</li>
          <li><strong>歷史傳承：</strong>2000年葡萄酒釀造歷史</li>
        </ul>
      </div>
    </div>`,
    
    quiz: {
      question: '波爾多距離大西洋約多少公里？',
      options: ['30公里', '60公里', '100公里', '150公里'],
      correct: 1,
      explanation: '波爾多距離大西洋約60公里，這個距離讓它能享受海洋性氣候的調節作用，但又不會受到過度的海洋影響。'
    }
  },
  {
    component: 'SlideRiversSystem',
    title: '三河匯流的獨特地理',
    highlights: [
      { id: 1, icon: '🏞️', title: '三條主要河流', content: '加龍河、多爾多涅河、吉隆德河形成獨特水系' },
      { id: 2, icon: '🌡️', title: '氣候調節', content: '河流系統起到天然的溫度和濕度調節作用' }
    ],
    content: `<div class="river-system">
      <p class="lead-text">波爾多的獨特地理特徵是其完整的河流系統，這些河流不僅塑造了地形，更決定了產區的劃分。</p>
      <div class="rivers-list">
        <div class="river-item">
          <h4>🌊 加龍河 (Garonne)</h4>
          <p><strong>來源：</strong>庇里牛斯山脈 (Pyrénées)</p>
          <p><strong>特色：</strong>流經波爾多市中心，形成左岸產區的天然邊界</p>
          <p><strong>影響：</strong>左岸的砂礫土壤主要由加龍河沖積形成</p>
        </div>
        <div class="river-item">
          <h4>🌊 多爾多涅河 (Dordogne)</h4>
          <p><strong>來源：</strong>法國中央高原 (Massif Central)</p>
          <p><strong>特色：</strong>與加龍河匯合，沿岸分佈著右岸產區</p>
          <p><strong>影響：</strong>右岸的黏土石灰岩土壤特徵</p>
        </div>
        <div class="river-item">
          <h4>🌊 吉隆德河 (Gironde)</h4>
          <p><strong>形成：</strong>兩河匯合後形成的河口</p>
          <p><strong>特色：</strong>歐洲最大的河口，直通大西洋</p>
          <p><strong>影響：</strong>調節整個產區的微氣候</p>
        </div>
      </div>
      <div class="river-benefits">
        <h4>💧 河流系統的益處</h4>
        <ul>
          <li><strong>溫度調節：</strong>水體調節日夜溫差，延長葡萄成熟期</li>
          <li><strong>濕度控制：</strong>提供適度濕度，預防極端乾旱</li>
          <li><strong>霜凍保護：</strong>水體儲熱，減少春季霜凍風險</li>
          <li><strong>土壤形成：</strong>沖積作用形成多樣化土壤類型</li>
        </ul>
      </div>
    </div>`,
    
    quiz: {
      question: '吉隆德河是如何形成的？',
      options: ['來自阿爾卑斯山', '加龍河與多爾多涅河匯合', '來自大西洋', '人工開鑿'],
      correct: 1,
      explanation: '吉隆德河是加龍河和多爾多涅河匯合後形成的河口，直通大西洋，是歐洲最大的河口之一。'
    }
  },
  {
    title: '大西洋的守護：暖流與蘭德斯森林',
    highlights: [
      { id: 1, icon: '🌊', title: '北大西洋暖流', content: '墨西哥灣流延伸至歐洲西岸，將冬季均溫維持在 7–9°C，防止葡萄樹凍害' },
      { id: 2, icon: '🌲', title: '蘭德斯松林', content: '寬達 100 公里的人工林帶，阻擋大西洋強風與鹽霧，形成天然微氣候緩衝帶' },
      { id: 3, icon: '🌧️', title: '雨量分布', content: '年均降雨約 900 mm，集中於冬春季；夏季相對乾燥，有利成熟期積累糖分' },
      { id: 4, icon: '🌡️', title: '溫和年較差', content: '年平均溫差約 16°C（1 月 7°C～7 月 23°C），比同緯度內陸小 8–10°C' }
    ],
    content: `
      <div class="chapter-content">
        <h3>為什麼波爾多不像其他北緯 45° 產區那樣寒冷？</h3>
        <p>北緯 45° 大約是加拿大蒙特婁或羅馬尼亞的緯度——這些地方冬天可達 -15°C。然而波爾多的冬天僅 7-9°C，這一切要歸功於兩個地理屏障的協同效應。</p>

        <h3>① 北大西洋暖流（Gulf Stream 的延伸）</h3>
        <p>北大西洋暖流將加勒比海的溫暖海水送至歐洲西岸，使整個西歐的溫度比同緯度的亞洲或美洲溫暖 5–10°C。</p>
        <table class="data-table compact">
          <thead><tr><th>季節</th><th>暖流效應</th><th>對葡萄樹的實際意義</th></tr></thead>
          <tbody>
            <tr><td>冬季</td><td>防止低溫凍害</td><td>芽點存活率高，翌年不需大量補植</td></tr>
            <tr><td>春季</td><td>溫暖的海水加速升溫</td><td>萌芽期提早，避開三月晚霜窗口</td></tr>
            <tr><td>夏季</td><td>海洋吸熱，調節極端高溫</td><td>成熟期較長，多酚與香氣化合物有更多時間累積</td></tr>
            <tr><td>秋季</td><td>緩慢降溫，維持採收期的均衡氣溫</td><td>採收窗口通常長達 4–6 週，不需匆促採收</td></tr>
          </tbody>
        </table>

        <h3>② 蘭德斯松林 (Forêt des Landes)：天然防風牆</h3>
        <p>波爾多正西方是一片面積超過 <strong>13,000 平方公里</strong>的人工松林，是西歐面積最大的人工林。它扮演的角色不只是防風：</p>
        <ul>
          <li><strong>阻擋鹽霧</strong>：直接來自大西洋的鹽分氣流會傷害葡萄葉面，松林過濾後只留下濕潤的清風。</li>
          <li><strong>緩衝降雨</strong>：強對流暴雨在通過林帶後強度減弱，梅多克半島接收的雨量比松林西側少約 15%。</li>
          <li><strong>穩定溫度</strong>：龐大的植被生物量具有熱慣性，使梅多克日夜溫差比毗鄰的農業平原小 2–3°C。</li>
        </ul>

        <h3>雨量節律：「冬濕夏乾」的理想模式</h3>
        <p>波爾多的年降雨量約 900 mm，但節律比總量更重要：</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:0.8rem">
          <div style="background:rgba(59,130,246,0.08);border-radius:8px;padding:0.8rem">
            <strong>冬春（11月－4月）</strong><br/>
            佔全年降雨約 55%，補充土壤水分，滋養根系越冬。
          </div>
          <div style="background:rgba(251,146,60,0.08);border-radius:8px;padding:0.8rem">
            <strong>夏季（6月－8月）</strong><br/>
            相對乾燥，迫使葡萄根系向深層土壤延伸，增強礦物風味的汲取。
          </div>
        </div>
        <p style="margin-top:0.8rem">秋季（採收期）的降雨變數最大，過多雨水可能造成稀釋或腐爛——這也是波爾多年份差異顯著的核心原因之一。</p>
      </div>
    `,
    quiz: {
      question: '蘭德斯松林對梅多克葡萄園最直接的保護作用是什麼？',
      options: [
        '增加土壤含水量',
        '阻擋大西洋鹽霧與強風',
        '提供葡萄釀造所需的木材',
        '吸引更多降雨滋潤葡萄園'
      ],
      correct: 1,
      explanation: '蘭德斯松林的主要作用是阻擋直接來自大西洋的強風與鹽霧，為梅多克半島提供天然防護，同時緩衝暴雨強度，形成穩定的微氣候。'
    }
  },

  {
    title: '波爾多 vs. 勃艮第：兩種氣候，兩種命運',
    highlights: [
      { id: 1, icon: '🌊', title: '波爾多：海洋性氣候', content: '溫和穩定，年份波動相對小，有利混釀平衡風格' },
      { id: 2, icon: '🏔️', title: '勃艮第：大陸性氣候', content: '冷熱分明，年份差異顯著，單一品種直接反映土地個性' },
      { id: 3, icon: '🌡️', title: '溫差關鍵', content: '波爾多年溫差 16°C vs. 勃艮第 19°C，看似相近，實際造就截然不同的釀酒哲學' }
    ],
    content: `
      <div class="chapter-content">
        <h3>同樣是法國頂級產區，氣候為何如此不同？</h3>
        <p>波爾多與勃艮第都是世界最頂級的葡萄酒產區，但它們面對的氣候挑戰截然不同。理解這個差異，是理解為什麼這兩個產區的葡萄品種、釀酒哲學和酒款風格完全不同的關鍵。</p>

        <h3>氣候數據對比</h3>
        <table class="data-table">
          <thead>
            <tr><th>指標</th><th>波爾多（海洋性氣候）</th><th>勃艮第（大陸性氣候）</th><th>差異意義</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>年平均氣溫</strong></td>
              <td>13.5°C</td>
              <td>11.5°C</td>
              <td>波爾多較暖，有利完熟單寧厚實的 Cabernet Sauvignon</td>
            </tr>
            <tr>
              <td><strong>年均溫差</strong></td>
              <td>~16°C</td>
              <td>~19°C</td>
              <td>勃艮第冬夏更分明，夏季熱量衝刺更集中</td>
            </tr>
            <tr>
              <td><strong>冬季最低溫</strong></td>
              <td>約 -3°C 以上</td>
              <td>可達 -15°C</td>
              <td>勃艮第凍害風險更高，Pinot Noir 較耐寒</td>
            </tr>
            <tr>
              <td><strong>年降雨量</strong></td>
              <td>約 900 mm</td>
              <td>約 700 mm</td>
              <td>波爾多較濕，霜黴病和腐爛風險較高</td>
            </tr>
            <tr>
              <td><strong>夏季高溫</strong></td>
              <td>受海洋緩衝，極端熱浪少</td>
              <td>熱浪來臨時升溫迅速</td>
              <td>2003 年熱浪對勃艮第衝擊更劇烈</td>
            </tr>
            <tr>
              <td><strong>採收期天氣</strong></td>
              <td>秋雨不穩定，年份差異大</td>
              <td>秋季常有穩定晴天</td>
              <td>波爾多「壞年份」多因秋雨，勃艮第多因夏季不足</td>
            </tr>
            <tr>
              <td><strong>年份穩定性</strong></td>
              <td>相對穩定（10 年中 6-7 個好年份）</td>
              <td>較不穩定（10 年中 4-5 個好年份）</td>
              <td>波爾多年份評分跨度較窄，勃艮第頂峰更高但谷底更深</td>
            </tr>
          </tbody>
        </table>

        <h3>氣候如何決定葡萄品種選擇？</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1rem 0">
          <div style="border:1.5px solid rgba(59,130,246,0.3);border-radius:10px;padding:1rem">
            <h4 style="margin:0 0 0.5rem;color:#3b82f6">🌊 波爾多：混釀的智慧</h4>
            <p><strong>為何混釀？</strong> 溫帶海洋性氣候年份變化雖溫和，但仍有春霜、秋雨等風險。混釀不同成熟期的品種（Cab. Sauv. 晚熟 + Merlot 早熟）分散風險。</p>
            <p><strong>主要品種</strong>：Cabernet Sauvignon（需充足熱量完熟）、Merlot（適應黏土，早熟緩衝秋雨風險）</p>
          </div>
          <div style="border:1.5px solid rgba(168,85,247,0.3);border-radius:10px;padding:1rem">
            <h4 style="margin:0 0 0.5rem;color:#a855f7">🏔️ 勃艮第：單一品種的純粹</h4>
            <p><strong>為何單一品種？</strong> 大陸性氣候雖有極端風險，但好年份的日夜溫差極大，有利香氣累積。Pinot Noir 的薄皮特性完整展現這種精緻表達。</p>
            <p><strong>主要品種</strong>：Pinot Noir（極度敏感，完美表達土地個性）、Chardonnay（適應石灰岩，充分利用日照）</p>
          </div>
        </div>

        <h3>氣候差異的哲學影響：調配 vs. 地塊</h3>
        <p>海洋性氣候的相對穩定性，讓波爾多酒莊有能力關注「跨年份一致性」——透過調配比例調整，維持品牌風格的穩定性。大陸性氣候的高變異性，則讓勃艮第生產者傾向強調「年份個性」與「地塊表達」，每瓶酒都是特定一年、特定土壤的唯一紀錄。</p>
      </div>
    `,
    quiz: {
      question: '波爾多以混釀為主要釀酒策略，最根本的氣候原因是什麼？',
      options: [
        '海洋性氣候使單一品種無法達到足夠酒精度',
        '混釀不同成熟期品種，可分散秋雨等氣候風險',
        '法規強制要求波爾多必須使用至少三種葡萄品種',
        '勃艮第壟斷了 Pinot Noir，波爾多只能混釀其他品種'
      ],
      correct: 1,
      explanation: '混釀的核心邏輯是風險分散：Merlot 早熟，若秋雨提早來臨仍能採收完熟果實；Cabernet Sauvignon 晚熟，若秋天天氣好則能達到最佳成熟度。兩者互補，降低了海洋性氣候年份波動帶來的損失。'
    }
  },

  {
    title: '土壤成因入門：大地如何造就葡萄酒個性',
    highlights: [
      { id: 1, icon: '🪨', title: '沖積砂礫（左岸）', content: '冰河期河流帶來的礫石層，排水極佳，迫使根系深鑽，吸收深層水分與礦物' },
      { id: 2, icon: '🪸', title: '石灰岩（右岸高原）', content: '古代海洋生物骨骼沉積而成，富含鈣質，賦予葡萄酒明顯的礦物感與清新酸度' },
      { id: 3, icon: '🟤', title: '黏土（右岸平原）', content: '保水性強，Merlot 的理想土壤；過濕時通氣差，排水管理是關鍵' },
      { id: 4, icon: '🌍', title: '土壤成因 = 風土基礎', content: '了解土壤如何形成，就能預測葡萄酒的礦物、酸度與口感結構' }
    ],
    content: `
      <div class="chapter-content">
        <h3>土壤不是偶然，是地質歷史的積累</h3>
        <p>波爾多的土壤類型豐富多樣，且左岸與右岸差異顯著。這些差異不是隨機的，而是數萬年乃至數百萬年地質演化的結果。了解土壤的「出身」，才能真正理解酒款特色的根源。</p>

        <h3>① 左岸砂礫土的形成：河流的搬運工</h3>
        <p>梅多克和格拉夫的砂礫層主要來自 <strong>庇里牛斯山脈</strong>，歷經數十萬年的冰河時期，每次冰川融化都攜帶大量礫石沿加龍河向下沖積，最終在低平的梅多克半島堆積成厚達數公尺的礫石層。</p>
        <table class="data-table compact">
          <thead><tr><th>礫石特性</th><th>對葡萄樹的影響</th><th>對酒款的影響</th></tr></thead>
          <tbody>
            <tr><td>排水性極佳</td><td>雨後快速排乾，避免根系泡水</td><td>年份雨量再多，品質仍可控</td></tr>
            <tr><td>白天吸熱、夜晚放熱</td><td>葡萄周圍溫度更均衡，有助成熟</td><td>果實成熟度更完整，單寧更圓潤</td></tr>
            <tr><td>養分貧瘠</td><td>根系需向深層（6-8 公尺）延伸</td><td>礦物感更豐富，風味更集中複雜</td></tr>
            <tr><td>顆粒大小各異</td><td>持水量因地塊而異</td><td>同一村莊內不同小塊地風格有差異</td></tr>
          </tbody>
        </table>
        <p><strong>代表性地塊</strong>：Château Latour 的「The Enclos」礫石層深達 5 公尺，被認為是 Pauillac 最完美的砂礫構成，賦予其酒款的強勁骨架與驚人陳年潛力。</p>

        <h3>② 右岸石灰岩高原的形成：古代海洋的遺留</h3>
        <p>聖愛美濃的石灰岩高原（Calcaires à Astéries）形成於 <strong>約 3500 萬年前的始新世</strong>，當時整個吉倫特地區曾是淺海。大量海洋生物（珊瑚、貝殼、海膽）死亡後，骨骼中的碳酸鈣沉積固化，形成今日的石灰岩台地。</p>
        <ul>
          <li><strong>高 pH 值土壤（7.5-8.2）</strong>：抑制葡萄根系的部分礦物吸收，使葡萄自然調節生長勢，結出集中的果實。</li>
          <li><strong>天然排水裂隙</strong>：石灰岩的節理和裂縫提供良好的垂直排水路徑，同時保留深層毛細水分。</li>
          <li><strong>獨特的礦物風味</strong>：石灰岩中豐富的鈣、鎂、磷酸鹽滲入葡萄汁，賦予酒款清新的石灰感和明顯酸度。</li>
        </ul>
        <p><strong>代表性地塊</strong>：Château Ausone 坐落在聖愛美濃南坡的石灰岩懸崖，酒窖甚至直接鑿入岩壁，酒款以礦物感和骨架著稱，風格與梅多克的砂礫礦物感截然不同。</p>

        <h3>③ 右岸平原黏土的特性：保水的雙面刃</h3>
        <p>波美侯和部分聖愛美濃低地的黏土土壤，保水能力是砂礫土的 5-10 倍。這對 Merlot 品種特別有利——Merlot 的根系活力稍遜，不像 Cabernet Sauvignon 那樣適合深鑽砂礫，而黏土可以在乾燥夏季提供充足水分。</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;margin:0.8rem 0">
          <div style="background:rgba(34,197,94,0.08);border-radius:8px;padding:0.8rem">
            <strong>✅ 黏土的優勢</strong>
            <ul style="margin:0.5rem 0 0;padding-left:1.2rem">
              <li>乾旱年份保留水分，維持葡萄樹生命力</li>
              <li>礦物質豐富（鐵、錳），貢獻酒款深度</li>
              <li>Pétrus 的藍黏土（Blue Clay）被認為是 Merlot 的絕佳搭配</li>
            </ul>
          </div>
          <div style="background:rgba(239,68,68,0.08);border-radius:8px;padding:0.8rem">
            <strong>⚠️ 黏土的挑戰</strong>
            <ul style="margin:0.5rem 0 0;padding-left:1.2rem">
              <li>排水不良時根系窒息，葡萄樹壓力過大</li>
              <li>冷年份升溫慢，延遲成熟</li>
              <li>機械耕作困難（泥濘、重壓）</li>
            </ul>
          </div>
        </div>

        <h3>左岸 vs. 右岸：土壤決定品種，品種塑造風格</h3>
        <table class="data-table compact">
          <thead>
            <tr><th>特徵</th><th>左岸砂礫</th><th>右岸石灰岩/黏土</th></tr>
          </thead>
          <tbody>
            <tr><td>最適品種</td><td>Cabernet Sauvignon（深根，耐熱）</td><td>Merlot（淺根，適保水土）</td></tr>
            <tr><td>酒款單寧</td><td>高單寧，需時間軟化</td><td>圓潤單寧，年輕時即可享</td></tr>
            <tr><td>主要礦物感</td><td>燧石、煙燻石頭感</td><td>白堊、石灰、鐵礦感</td></tr>
            <tr><td>陳年潛力</td><td>頂莊可陳年 30-50 年</td><td>頂莊可陳年 20-40 年</td></tr>
          </tbody>
        </table>
      </div>
    `,
    quiz: {
      question: '左岸梅多克的砂礫土主要來自何處，透過什麼地質過程形成？',
      options: [
        '大西洋海浪侵蝕形成的海岸沙丘',
        '冰河時期庇里牛斯山礫石隨加龍河沖積堆積',
        '古代火山噴發留下的礫石堆積',
        '人工從河床挖掘移植用作改善排水'
      ],
      correct: 1,
      explanation: '梅多克的礫石層來自數十萬年前冰河時期，庇里牛斯山的礫石隨加龍河洪流向北沖積，在地勢低平的梅多克半島沉積形成厚達數公尺的礫石層。這種土壤排水極佳、導熱性強，是 Cabernet Sauvignon 在此地表現卓越的關鍵。'
    }
  },

  {
    component: 'SlideLeftRightBanks',
    title: '左岸與右岸的劃分',
    highlights: [
      { id: 1, icon: '⬅️', title: '左岸產區', content: '以加龍河為界，包括梅多克、格拉夫等著名產區' },
      { id: 2, icon: '➡️', title: '右岸產區', content: '以多爾多涅河為界，包括聖愛美濃、波美侯等精品產區' }
    ],
    content: `<div class="bank-division">
      <p class="lead-text">波爾多以河流為天然邊界，劃分為截然不同的左岸和右岸產區，各具獨特的風土條件和酒款特色。</p>
      <div class="banks-comparison">
        <div class="left-bank">
          <h4>⬅️ 左岸 (Rive Gauche)</h4>
          <div class="bank-details">
            <p><strong>地理範圍：</strong>加龍河以西和以南的區域</p>
            <p><strong>主要產區：</strong>梅多克 (Médoc)、上梅多克 (Haut-Médoc)、格拉夫 (Graves)</p>
            <p><strong>著名村莊：</strong>瑪歌 (Margaux)、聖朱利安 (Saint-Julien)、波雅克 (Pauillac)、聖愛斯泰夫 (Saint-Estèphe)</p>
            <p><strong>土壤特色：</strong>以砂礫土為主，排水性佳</p>
            <p><strong>主要品種：</strong>卡本內蘇維翁 (Cabernet Sauvignon) 主導</p>
          </div>
        </div>
        <div class="right-bank">
          <h4>➡️ 右岸 (Rive Droite)</h4>
          <div class="bank-details">
            <p><strong>地理範圍：</strong>多爾多涅河以北和以東的區域</p>
            <p><strong>主要產區：</strong>聖愛美濃 (Saint-Émilion)、波美侯 (Pomerol)、弗朗丘 (Côtes de Francs)</p>
            <p><strong>著名村莊：</strong>聖愛美濃村、波美侯村</p>
            <p><strong>土壤特色：</strong>以黏土石灰岩為主，保水性佳</p>
            <p><strong>主要品種：</strong>梅洛 (Merlot) 主導</p>
          </div>
        </div>
      </div>
      <div class="division-significance">
        <h4>🎯 劃分的重要意義</h4>
        <ul>
          <li><strong>風土表達：</strong>不同的土壤和氣候造就獨特風味</li>
          <li><strong>品種選擇：</strong>適合的葡萄品種在各自區域表現最佳</li>
          <li><strong>酒款風格：</strong>左岸偏向結構感，右岸偏向圓潤感</li>
          <li><strong>投資價值：</strong>了解產區特色有助於收藏和投資決策</li>
        </ul>
      </div>
    </div>`,
    
    quiz: {
      question: '左岸產區主要以哪條河流為界？',
      options: ['多爾多涅河', '加龍河', '吉隆德河', '塞納河'],
      correct: 1,
      explanation: '左岸產區以加龍河為界，河流以西和以南的區域構成了著名的左岸產區，包括梅多克和格拉夫等。'
    }
  },

  // 結束頁
  {
    type: 'end',
    title: '課程完成',
    achievement: 'L1-1 左岸與右岸概覽 - 波爾多地理基礎',
    description: '恭喜您完成波爾多左岸與右岸的基礎學習！您已掌握波爾多最核心的地理劃分概念，理解加龍河與多爾多涅河如何塑造兩岸的風土差異。左岸的砂礫土壤與Cabernet Sauvignon、右岸的黏土與Merlot，這些基礎知識是理解波爾多葡萄酒的第一把鑰匙。',
    skills: [
      '理解波爾多左岸與右岸的地理劃分',
      '認識加龍河與多爾多涅河的作用',
      '掌握左右岸的基本土壤與品種差異',
      '了解主要產區的地理分布',
      '建立波爾多地理框架的基礎認知'
    ],
    nextSteps: [
      {
        action: '鞏固學習',
        items: [
          '在地圖上標注左岸與右岸的主要產區',
          '記憶左岸以Cabernet Sauvignon、右岸以Merlot為主的特點',
          '理解河流對氣候與排水的影響',
          '準備品鑑一款左岸與一款右岸酒款進行對比'
        ]
      },
      {
        action: '繼續學習',
        items: [
          '進入L1-2：品種與混釀基礎',
          '深入了解Cabernet Sauvignon與Merlot的特性',
          '探索波爾多的混釀哲學'
        ]
      }
    ],
    certificate: '您已獲得本課程學習證明',
    reflection: {
      title: '課程反思',
      questions: [
        '為什麼河流對波爾多葡萄酒產區如此重要？',
        '左岸與右岸的根本差異是什麼？',
        '您對左岸還是右岸更感興趣？為什麼？'
      ]
    },
    keyInsight: '波爾多的地理劃分不僅是地圖上的線條，更是風土哲學的體現。左岸的砂礫與Cabernet Sauvignon造就強勁骨架，右岸的黏土與Merlot帶來柔美圓潤，理解這個基礎劃分，就是理解波爾多葡萄酒的起點。',
    shareMessage: '我剛完成了波爾多葡萄酒Level 1的第一課「左岸與右岸概覽」！現在我能分辨波爾多的地理劃分了！🗺️🍷 #波爾多 #左岸右岸 #葡萄酒學習'
  }
,
  // ====== inject-bordeaux-quiz ======
  {
    "component": "QuizSlide",
    "componentProps": {
      "slide": {
        "title": "🧠 知識檢測",
        "isFinalExam": false,
        "passScore": 70,
        "questions": [
          {
            "type": "single",
            "question": "波爾多位於法國的哪個方向？",
            "options": [
              "A. 東北部",
              "B. 西南部",
              "C. 中部",
              "D. 東南部"
            ],
            "correct": 1,
            "explanation": "波爾多位於法國西南部，北緯44-45度之間，距大西洋約60公里，得天獨厚的地理位置造就了其溫和的海洋性氣候。"
          },
          {
            "type": "single",
            "question": "波爾多最重要的河流是哪條？",
            "options": [
              "A. 塞納河（Seine）",
              "B. 吉隆河（Gironde）",
              "C. 隆河（Rhône）",
              "D. 盧瓦爾河（Loire）"
            ],
            "correct": 1,
            "explanation": "吉隆河（Gironde）河口是波爾多的核心地理特徵，由加龍河和多爾多涅河匯合而成，「左岸」和「右岸」的劃分以此為基準。"
          },
          {
            "type": "multiple",
            "question": "以下哪些河流流經波爾多產區？（多選）",
            "options": [
              "A. 加龍河（Garonne）",
              "B. 多爾多涅河（Dordogne）",
              "C. 索恩河（Saône）",
              "D. 吉隆河（Gironde）"
            ],
            "correct": [
              0,
              1,
              3
            ],
            "explanation": "波爾多三大河流系統：加龍河（左岸西側）、多爾多涅河（右岸北側）和兩河匯合形成的吉隆河（Gironde），索恩河位於布根地，不在波爾多。"
          },
          {
            "type": "single",
            "question": "左岸（Left Bank）和右岸（Right Bank）以什麼為基準劃分？",
            "options": [
              "A. 城市波爾多中心",
              "B. 吉隆河/加龍河的西東兩側",
              "C. 以山脊線為界",
              "D. 以高速公路為界"
            ],
            "correct": 1,
            "explanation": "波爾多的「左岸」是指吉隆河/加龍河的西（左）岸，包含梅多克和格拉夫；「右岸」是東（右）岸，包含波美侯和聖愛美濃。面向河流下游，左手邊為左岸。"
          },
          {
            "type": "single",
            "question": "波爾多「兩海之間（Entre-Deux-Mers）」指的是什麼？",
            "options": [
              "A. 同時面向大西洋和地中海",
              "B. 加龍河和多爾多涅河之間的三角地帶",
              "C. 波爾多城東西兩側的海峽",
              "D. 左岸和右岸之間的地帶"
            ],
            "correct": 1,
            "explanation": "「兩海之間」（Entre-Deux-Mers）是加龍河和多爾多涅河之間的三角地帶，字面意思是「兩河之間」（被誤譯為兩海），以清爽的白酒著稱，是波爾多最大的白酒 AOC。"
          }
        ]
      }
    }
  }
]

export default lessonContent
