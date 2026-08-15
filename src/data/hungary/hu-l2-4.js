/**
 * HU L2-4 埃格爾與北匈牙利：公牛血傳說與 Bikavér Superior 解析
 */

export const lessonContent = [
  {
    type: 'cover',
    title: '埃格爾與公牛血傳說',
    subtitle: 'Bikavér Superior：匈牙利最著名紅酒的真相與頂峰',
    icon: '🐂',
    background: 'linear-gradient(135deg, #8b1a1a 0%, #2d1a1a 100%)'
  },

  {
    title: '公牛血（Bikavér）：傳說、真相與法規演進',
    highlights: [
      { id: 1, icon: '📖', title: '1552 年的傳說起源', content: '鄂圖曼軍隊圍攻埃格爾城堡時，守軍飲用染紅鬍鬚的紅酒後力戰，土耳其士兵誤以為匈牙利人喝了「公牛血」才如此強壯——神話從此誕生' },
      { id: 2, icon: '📉', title: '共產時代的品質崩壞', content: '國營埃格爾文（Egervin）酒廠 1970 年代將 Bikavér 大量出口，但為求量產壓低品質，「公牛血」一度淪為廉價劣酒的代名詞' },
      { id: 3, icon: '🔄', title: '1990 年代後的品質重建', content: '私有化後，St. Andrea、Thummerer 等新一代酒莊聯手推動嚴謹分級制度，重新賦予 Bikavér 應有的品質標準' },
      { id: 4, icon: '⚗️', title: '混釀哲學', content: '不同品種各司其職：Kékfrankos 提供骨架與酸度，Cabernet Franc／Sauvignon 增添結構，Kadarka 帶來花香辛香，Merlot、Syrah、Pinot Noir 調和圓潤度' }
    ],
    content: `<div class="bikaver-intro">
      <p class="lead-text">「公牛血」不只是一個美麗的神話——它是匈牙利紅酒工藝最複雜的展現。一瓶頂級 Egri Bikavér Superior 背後，是至少 5 個核准品種、嚴謹的產量上限，以及至少 12 個月橡木桶加 6 個月瓶陳的把關。</p>
      <div class="comparison-box">
        <h4>🆚 Egri Bikavér 三級制度比較</h4>
        <table class="compare-table">
          <thead><tr><th>項目</th><th>Classicus</th><th>Superior</th><th>Grand Superior</th></tr></thead>
          <tbody>
            <tr><td>品種數量</td><td>至少 3 個品種混釀</td><td>至少 5 個核准品種混釀</td><td>與 Superior 規範相仿</td></tr>
            <tr><td>Kékfrankos 佔比</td><td>通常為主要基酒品種</td><td>約 30–50%</td><td>約 30–50%</td></tr>
            <tr><td>橡木桶陳釀</td><td>至少 6 個月</td><td>至少 12 個月</td><td>至少 16 個月</td></tr>
            <tr><td>瓶陳／裝瓶後</td><td>無特別規定</td><td>至少再 6 個月</td><td>更長瓶陳，僅特選年份釀造</td></tr>
            <tr><td>產量上限</td><td>無特別規定</td><td>每公頃 60 百公升（60 hl/ha）</td><td>更嚴格的低產標準</td></tr>
          </tbody>
        </table>
      </div>
      <p class="note-text">📌 核准品種池共 13 個，包含 Kékfrankos、Cabernet Franc、Cabernet Sauvignon、Merlot、Syrah、Pinot Noir、Kadarka、Kékoportó、Zweigelt、Blauburger、Menoire、Turán、Bíbor Kadarka——Superior 等級須從中選出至少 5 種進行混釀。</p>
    </div>`
  },

  {
    component: 'HungaryRegionMapSlide',
    title: '埃格爾與北匈牙利的地理位置',
    componentProps: {
      mapRegion: 'Eger',
      description: '埃格爾位於北部高地（North Hungary），布克山（Bükk）與馬特拉丘陵（Mátra）之間——匈牙利最重要的 Kékfrankos 與 Egri Bikavér（公牛血）產地',
    },
  },

  {
    title: '埃格爾五大頂級酒莊',
    highlights: [
      { id: 1, icon: '🥇', title: 'St. Andrea Winery', content: '由釀酒師 Dr. György Lőrinc 主理，風格深受布根地遊歷經驗影響；旗艦酒 Merengő（Egri Bikavér Superior）僅在精選年份釀造，2021 年獲 DWWA 最佳年度大獎' },
      { id: 2, icon: '🥈', title: 'Thummerer Winery（1984 年創立）', content: 'Vilmos 與 Katalin Thummerer 夫婦於 1984 年在 Noszvaj 買下第一片葡萄園，如今經營約 100 公頃；Bikavér Superior 以 Cabernet Franc、Cabernet Sauvignon、Syrah、Merlot、Kékfrankos 五品種混釀' },
      { id: 3, icon: '🏅', title: 'Kovács Nimród Winery', content: '坐落於埃格爾市中心，由 7 座相連的歷史酒窖改建而成；旗艦酒「Nimród」取自海拔最高的 Nagy-Eged 特級園，Kékfrankos 60%／Syrah 40%，2 年橡木桶加 4 年瓶陳才上市' },
      { id: 4, icon: '🍇', title: 'Gál Tibor Winery（1992 年創立）', content: 'Tibor Gál Sr. 曾任托斯卡尼 Ornellaia 首席釀酒師、1998 年打造 Ornellaia 頂級混釀；1992 年返鄉創立酒莊，致力以現代思維重新定義 Egri Bikavér，2005 年逝世後由其子接掌' },
      { id: 5, icon: '🌱', title: 'Juhász Testvérek Winery（1996 年創立）', content: '從 1.5 公頃起家，如今是埃格爾具代表性的家族酒莊之一；旗艦酒 Egri Cabernet Franc Grand Selection 曾獲波爾多 Challenge Du Vin 銀牌，2018 年起由第二代 Ádám Juhász 掌舵' }
    ],
    content: `<div class="eger-estates">
      <p class="lead-text">埃格爾的名莊版圖橫跨了三個世代：從深耕本地的家族酒莊，到曾在托斯卡尼名莊歷練後返鄉的國際派釀酒師，共同將「公牛血」從廉價出口酒重新打造成能與世界頂級紅酒對話的產區代表作。</p>
      <div class="estate-card">
        <h4>🥇 St. Andrea Winery — 布根地哲學的公牛血</h4>
        <table class="estate-table">
          <tr><td>主理釀酒師</td><td>Dr. György Lőrinc</td></tr>
          <tr><td>風格哲學</td><td>深受布根地遊歷經驗影響，強調風土表達與單一葡萄園個性</td></tr>
          <tr><td>旗艦酒</td><td>Merengő（沉思／冥想之意），僅在條件最佳的年份選出各桶精華調配</td></tr>
          <tr><td>混釀組成</td><td>Kékfrankos 38%／Cabernet Franc 26%／Merlot 18%／Pinot Noir 11%／Syrah 7%</td></tr>
          <tr><td>近年榮譽</td><td>2021 年 DWWA 最佳年度大獎；持續蟬聯多面金銀獎，並獲選匈牙利年度酒莊</td></tr>
        </table>
      </div>
      <div class="estate-card">
        <h4>🥈 Thummerer Winery — Noszvaj 的家族傳承</h4>
        <table class="estate-table">
          <tr><td>創立</td><td>1984 年，Vilmos 與 Katalin Thummerer 夫婦</td></tr>
          <tr><td>根據地</td><td>距埃格爾約 12 公里的 Noszvaj 村</td></tr>
          <tr><td>規模</td><td>約 100 公頃自有葡萄園</td></tr>
          <tr><td>Bikavér Superior 配方</td><td>五品種混釀：Cabernet Franc、Cabernet Sauvignon、Syrah、Merlot、Kékfrankos</td></tr>
        </table>
      </div>
      <div class="estate-card">
        <h4>🏅 Kovács Nimród Winery — 市中心的歷史酒窖</h4>
        <table class="estate-table">
          <tr><td>酒莊位置</td><td>埃格爾市中心，由 7 座相連的 18 世紀壓榨房式酒窖改建而成</td></tr>
          <tr><td>旗艦酒</td><td>「Nimród」，以釀酒師 Nimród János Kovács 命名</td></tr>
          <tr><td>葡萄園</td><td>Nagy-Eged 特級園（匈牙利海拔最高的葡萄園之一）</td></tr>
          <tr><td>混釀與陳年</td><td>Kékfrankos 60%／Syrah 40%，2 年匈牙利橡木桶陳釀，裝瓶後再瓶陳 4 年才上市</td></tr>
        </table>
      </div>
      <table class="estate-table wide-table">
        <thead><tr><th>酒莊</th><th>創立</th><th>核心特色</th><th>代表酒款</th></tr></thead>
        <tbody>
          <tr><td>Gál Tibor</td><td>1992（創辦人曾任 Ornellaia 首席釀酒師）</td><td>國際名莊歷練釀酒師，現代化重新詮釋 Egri Bikavér，2005 年創辦人逝世後由其子接掌</td><td>Egri Bikavér Cuvée 系列</td></tr>
          <tr><td>Juhász Testvérek</td><td>1996（從 1.5 公頃起家）</td><td>典型家族成長故事，凝灰岩天然酒窖陳年，2018 年起由第二代 Ádám Juhász 掌舵</td><td>Egri Cabernet Franc Grand Selection</td></tr>
        </tbody>
      </table>
    </div>`,
    quiz: {
      question: '哪家埃格爾酒莊的旗艦酒「Nimród」，是以匈牙利海拔最高的 Nagy-Eged 特級園所產的 Kékfrankos 與 Syrah 混釀而成？',
      options: ['St. Andrea Winery', 'Thummerer Winery', 'Kovács Nimród Winery', 'Gál Tibor Winery'],
      correct: 2,
      explanation: 'Kovács Nimród Winery 坐落於埃格爾市中心、由 7 座相連的歷史酒窖改建而成。其旗艦酒「Nimród」以釀酒師 Nimród János Kovács 命名，選用海拔最高的 Nagy-Eged 特級園所產的 Kékfrankos（60%）與 Syrah（40%）混釀，經 2 年匈牙利橡木桶陳釀，再瓶陳 4 年後才上市。'
    }
  },

  {
    title: '北匈牙利姊妹產區：布克山與馬特拉',
    highlights: [
      { id: 1, icon: '⛰️', title: 'Bükk（布克山產區）', content: '匈牙利東北部 PDO 產區，約 90% 葡萄園位於布克山脈海拔 150–250 公尺的緩坡；山脈阻擋北方冷風，氣候涼爽，出產清新爽脆的白酒（Leányka、Olaszrizling）與輕盈紅酒（Kékfrankos、Zweigelt）' },
      { id: 2, icon: '🌾', title: 'Mátra（馬特拉產區）', content: '馬特拉山脈下坡地帶的 PDO 產區，葡萄園海拔可達 200–500 公尺；以花香果香濃郁的芳香型白酒見長，主要品種包括 Rizlingszilváni、Muscat Ottonel、Olaszrizling、Chardonnay、Irsai Olivér 與 Tramini' },
      { id: 3, icon: '🏔️', title: 'Nagy-Eged Hill——匈牙利海拔最高的葡萄園', content: 'Nagy-Eged 山其實座落於埃格爾產區內（而非馬特拉），部分園區可達海拔 501 公尺，是匈牙利種植海拔最高的葡萄園之一；Gróf Buttler（1999 年創立於埃格爾）與 Kovács Nimród 皆在此耕作' },
      { id: 4, icon: '🗺️', title: '北匈牙利大山系的分工', content: '在同一道喀爾巴阡山系庇護下，托卡伊主攻貴腐甜酒、埃格爾專精 Bikavér 紅酒混釀，布克山與馬特拉則以清爽芳香白酒互補，構成完整的北匈牙利風味地圖' }
    ],
    content: `<div class="north-hungary">
      <p class="lead-text">埃格爾雖以紅酒聞名，但北匈牙利山區其實是白酒與紅酒並存的多元版圖——布克山與馬特拉這兩個緊鄰埃格爾的姊妹產區，以涼爽山地氣候孕育出風格清新的芳香白酒，與埃格爾的濃郁 Bikavér 形成鮮明對比。</p>
      <table class="compare-table">
        <thead><tr><th>產區</th><th>海拔</th><th>強項風格</th><th>代表品種</th></tr></thead>
        <tbody>
          <tr><td>Eger（埃格爾）</td><td>約 150–500 公尺</td><td>Bikavér 紅酒混釀</td><td>Kékfrankos、Cabernet Franc</td></tr>
          <tr><td>Bükk（布克山）</td><td>約 150–250 公尺</td><td>清新爽脆白酒</td><td>Leányka、Olaszrizling</td></tr>
          <tr><td>Mátra（馬特拉）</td><td>約 200–500 公尺</td><td>芳香型白酒</td><td>Muscat Ottonel、Tramini</td></tr>
        </tbody>
      </table>
    </div>`
  },

  {
    title: '美人谷（Szépasszony-völgy）：流紋岩凝灰岩酒窖之城',
    highlights: [
      { id: 1, icon: '🌋', title: '流紋岩凝灰岩（Rhyolite Tuff）地質', content: '埃格爾丘陵的火山凝灰岩排水良好、質地鬆軟易於開鑿，是 Kékfrankos 高酸度與礦石感的根源，也造就了得天獨厚的天然酒窖環境' },
      { id: 2, icon: '🏚️', title: '18 世紀中葉開始開鑿的酒窖谷', content: '美人谷自 18 世紀中葉起由埃格爾主教劃定為酒窖用地，村民與地主陸續在山壁鑿出洞穴酒窖；現存最早文獻記載可追溯至 1843 年' },
      { id: 3, icon: '🍷', title: '約 200 座洞穴酒窖', content: '如今谷內約有 200 座鑿入凝灰岩山壁的酒窖，多數對外開放品飲，是體驗埃格爾在地小農酒款的最佳去處' },
      { id: 4, icon: '🗺️', title: '匈牙利第二大葡萄酒旅遊城市', content: '埃格爾僅次於托卡伊，是匈牙利第二受歡迎的葡萄酒旅遊目的地；古城、土耳其宣禮塔、巴洛克教堂與酒窖群的組合極具吸引力' }
    ],
    content: `<div class="eger-cellars">
      <div class="grape-showcase">
        <h4>🍇 Kékfrankos——埃格爾的靈魂品種</h4>
        <div class="grape-profile">
          <p><strong>別名：</strong>德國稱 Blaufränkisch，奧地利稱 Lemberger</p>
          <p><strong>風格：</strong>鮮明的黑胡椒＋黑醋栗＋礦石感，酸度高，單寧緊緻，是 Bikavér 混釀的骨架來源</p>
          <p><strong>陳年：</strong>頂級款可陳年 10–15 年，年輕時風味較封閉</p>
          <p><strong>侍酒：</strong>建議 16°C 左右，搭配匈牙利燉牛肉（Gulyás）或煙燻火腿</p>
        </div>
        <div class="kadarka-note">
          <h4>🌸 Kadarka——瀕危的原生香料品種</h4>
          <p>曾是匈牙利種植最廣泛的紅葡萄，共產時期因對霜害敏感、產量不穩定而大量拔除。辛辣的胡椒、肉桂與玫瑰花瓣香氣，是 Bikavér Superior 核准品種池中最具個性的成員之一，現由精品酒莊致力復興。</p>
        </div>
      </div>
    </div>`,
    quiz: {
      question: '關於埃格爾的「美人谷（Szépasszony-völgy）」酒窖群，下列敘述何者正確？',
      options: [
        '酒窖是鑿入石灰岩山壁，谷內約有 50 座酒窖',
        '酒窖是鑿入流紋岩凝灰岩山壁，谷內約有 200 座酒窖，最早文獻記載可追溯至 1843 年',
        '美人谷是托卡伊產區的地標，與埃格爾無關',
        '美人谷的酒窖建於 20 世紀共產時期，作為國營酒廠倉庫使用'
      ],
      correct: 1,
      explanation: '美人谷自 18 世紀中葉由埃格爾主教劃定為酒窖用地，村民與地主陸續在鬆軟易鑿的流紋岩凝灰岩山壁鑿出洞穴酒窖。現存文獻最早可追溯至 1843 年，如今谷內約有 200 座酒窖，是埃格爾（而非托卡伊）最具代表性的葡萄酒旅遊景點之一，僅次於托卡伊，是匈牙利第二受歡迎的葡萄酒旅遊城市。'
    }
  },

  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 埃格爾與北匈牙利總複習',
        isFinalExam: false,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: 'Egri Bikavér Superior 等級最少需要多少個核准品種混釀？',
            options: ['2 個', '3 個', '5 個', '8 個'],
            correct: 2,
            explanation: 'Superior 等級須從 13 個核准品種池中選出至少 5 個品種混釀，其中 Kékfrankos 佔比約 30–50%；入門的 Classicus 等級則只需至少 3 個品種。'
          },
          {
            type: 'single',
            question: '下列哪家酒莊的創辦人曾任托斯卡尼 Ornellaia 酒莊首席釀酒師，並在 1998 年打造出後來被《Wine Spectator》選為世界百大第一名的頂級混釀？',
            options: ['St. Andrea Winery', 'Thummerer Winery', 'Gál Tibor Winery', 'Juhász Testvérek Winery'],
            correct: 2,
            explanation: 'Tibor Gál Sr. 於 1989 年受邀前往托斯卡尼，從酒窖工人做起，最終成為 Ornellaia 首席釀酒師，並於 1998 年創作出該酒莊的頂級混釀（2001 年獲《Wine Spectator》世界百大第一名）。他於 1992 年返回埃格爾創立 Gál Tibor Winery，2005 年車禍逝世後由其子接掌家業。'
          },
          {
            type: 'single',
            question: '美人谷（Szépasszony-völgy）酒窖群是鑿入哪一種岩石地質而成？',
            options: ['花崗岩（Granite）', '石灰岩（Limestone）', '流紋岩凝灰岩（Rhyolite Tuff）', '片麻岩（Gneiss）'],
            correct: 2,
            explanation: '埃格爾丘陵的流紋岩凝灰岩質地鬆軟、易於開鑿又排水良好，村民自 18 世紀中葉起在山壁鑿出洞穴酒窖，如今谷內約有 200 座酒窖，也是 Kékfrankos 高酸度與礦石感的地質根源。'
          },
          {
            type: 'single',
            question: '關於「公牛血（Bikavér）」名稱起源的傳說，下列敘述何者最正確？',
            options: [
              '1552 年鄂圖曼軍隊圍攻埃格爾時，守軍飲用染紅鬍鬚的紅酒後力戰，土耳其士兵誤信他們喝了公牛血',
              '匈牙利國王在加冕典禮上以牛血混合葡萄酒宴請賓客',
              '因為釀酒過程中曾誤用牛血作為澄清劑',
              'Bikavér 是 20 世紀共產政權為了出口宣傳而創造的行銷名稱'
            ],
            correct: 0,
            explanation: '相傳 1552 年鄂圖曼軍隊圍攻埃格爾城堡時，守軍飲用大量紅酒後鬍鬚染紅、士氣高昂，土耳其士兵誤以為他們喝了公牛血才如此驍勇善戰，「公牛血」之名由此流傳至今，成為匈牙利最著名的葡萄酒傳說之一。'
          }
        ]
      }
    }
  }
]
