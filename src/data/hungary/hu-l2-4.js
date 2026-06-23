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
    title: '公牛血（Bikavér）：傳說與真相',
    highlights: [
      { id: 1, icon: '📖', title: '1552 年的傳說起源', content: '土耳其圍攻埃格爾城堡時，守軍飲用紅酒後力戰，土耳其士兵見其鬍鬚沾滿紅液，以為匈牙利人喝了「公牛血」才如此強壯——神話從此誕生' },
      { id: 2, icon: '🍷', title: '現代 Bikavér 的重建', content: '共產時代 Bikavér 品質下滑，1990 年代後由 St. Andrea、Thummerer 等酒莊推動「Bikavér Superior」認證，恢復品質標準' },
      { id: 3, icon: '📋', title: 'Bikavér Superior 法規（2008 年）', content: '最少 3 個品種混釀；Kékfrankos 佔比 30–50%；最低陳年 30 個月（其中 18 個月橡木桶）；嚴格評審委員會認證' },
      { id: 4, icon: '⚗️', title: '混釀哲學', content: '不同品種各有任務：Kékfrankos 提供骨架和香料感，Kadarka 帶來花香和辛辣，Merlot 增添圓潤，Cabernet Franc 給予結構' }
    ],
    content: `<div class="bikaver-intro">
      <p class="lead-text">「公牛血」不只是一個美麗的神話——它是匈牙利紅酒工藝最複雜的展現。一瓶頂級 Bikavér Superior 背後，是至少 3 個品種、30 個月陳釀、以及一個評審委員會的嚴格把關。</p>
      <div class="comparison-box">
        <h4>🆚 Bikavér 普通款 vs. Superior</h4>
        <table class="compare-table">
          <thead><tr><th>項目</th><th>Bikavér</th><th>Bikavér Superior</th></tr></thead>
          <tbody>
            <tr><td>品種數量</td><td>至少 3 種</td><td>至少 3 種</td></tr>
            <tr><td>Kékfrankos 佔比</td><td>≥ 30%</td><td>30–50%</td></tr>
            <tr><td>陳年時間</td><td>12 個月</td><td>30 個月（含 18 個月木桶）</td></tr>
            <tr><td>最大產量</td><td>無限制</td><td>每公頃 ≤ 7,000 公升</td></tr>
            <tr><td>認證</td><td>無需</td><td>評審委員會逐批認證</td></tr>
          </tbody>
        </table>
      </div>
    </div>`
  },

  {
    title: '埃格爾頂級酒莊與北匈牙利產區',
    highlights: [
      { id: 1, icon: '🥇', title: 'St. Andrea Winery', content: '埃格爾 Bikavér Superior 的標竿，旗艦酒「Merengő」屢獲國際大獎，展現黑莓＋香料＋礦石感的複雜層次；每年限量生產' },
      { id: 2, icon: '🥈', title: 'Thummerer Winery', content: '家族三代傳承，最知名的「Vili Papa Egri Bikavér」以親切的性格和傑出的品質締造傳奇；同時以干型 Egri Kadarka 著稱' },
      { id: 3, icon: '🏅', title: 'Gróf Buttler Winery（馬特拉產區）', content: '埃格爾以北的馬特拉（Mátra）產區代表酒莊，海拔 400 公尺的涼爽山地，出產特別清新的白酒和輕盈的紅酒' },
      { id: 4, icon: '🌄', title: '北匈牙利的其他產區', content: 'Bükk（布克山）: 高海拔、涼爽；Tokaj（托卡伊）: 甜酒聖地；Eger（埃格爾）: 紅酒中心；Mátra（馬特拉）: 白酒見長' }
    ],
    content: `<div class="eger-map">
      <div class="grape-showcase">
        <h4>🍇 Kékfrankos——埃格爾的靈魂品種</h4>
        <div class="grape-profile">
          <p><strong>別名：</strong>德國稱 Blaufränkisch，奧地利稱 Lemberger</p>
          <p><strong>風格：</strong>鮮明的黑胡椒＋黑醋栗＋礦石，酸度高，單寧緊緻</p>
          <p><strong>陳年：</strong>頂級款可陳年 10–15 年，年輕時較封閉</p>
          <p><strong>侍酒：</strong>建議 16°C，搭配匈牙利燉牛肉（Gulyás）或煙燻火腿</p>
        </div>
        <div class="kadarka-note">
          <h4>🌸 Kadarka——瀕危的原生香料品種</h4>
          <p>曾是匈牙利種植最廣泛的紅葡萄，共產時代大量拔除。辛辣（胡椒、肉桂）+ 玫瑰花瓣，現由精品酒莊致力復興。</p>
        </div>
      </div>
    </div>`
  },

  {
    title: '埃格爾的地質：火山凝灰岩酒窖',
    highlights: [
      { id: 1, icon: '🌋', title: '流紋岩（Rhyolite）土壤', content: '埃格爾丘陵的流紋岩土壤排水良好、保溫性佳，是 Kékfrankos 高酸度和礦石感的根源' },
      { id: 2, icon: '🏚️', title: '傳奇的「公牛血街」酒窖', content: '埃格爾市區有一條著名的「美人谷（Szépasszony-völgy）」，岩石山壁上開鑿超過 300 個葡萄酒地窖，遊客可直接品酒' },
      { id: 3, icon: '🌡️', title: '恆溫天然地窖', content: '凝灰岩地窖全年保持 10–12°C，是陳年紅酒和 Tokaji Aszú 的理想環境；歷史上這也是儲存炸藥的軍事地窖' },
      { id: 4, icon: '🗺️', title: '釀酒旅遊熱點', content: '埃格爾是匈牙利第二大葡萄酒旅遊目的地（僅次於托卡伊），古城 + 土耳其清真寺 + 巴洛克教堂 + 酒莊的組合極具吸引力' }
    ],
    quiz: {
      question: '根據 2008 年 Bikavér Superior 法規，下列哪一項要求是正確的？',
      options: [
        'Kékfrankos 需佔混釀 70% 以上',
        '最少 3 個品種混釀，Kékfrankos 佔 30–50%',
        '必須 100% Kékfrankos 釀造',
        '陳年時間至少 12 個月'
      ],
      answer: 1,
      explanation: 'Bikavér Superior 規定：(1) 最少 3 個品種；(2) Kékfrankos 佔 30–50%（不能太少或太多）；(3) 總陳年 30 個月（含 18 個月橡木桶）；(4) 最大產量每公頃 7,000 公升。'
    }
  }
]
