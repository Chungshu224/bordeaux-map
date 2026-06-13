/**
 * LO-L3-8 Loir 河谷白酒——白詩南的極寒試煉
 * AOCs: Jasnières、Coteaux-du-Loir(白)、Coteaux-du-Vendômois(白)、Orléans(白)、Touraine(白)
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          在羅亞爾河的北方支流 Loir 河（注意：無「e」，是支流）沿岸，白詩南（Chenin Blanc）面對著整個法國最涼爽的種植環境之一。這裡的酒過於澀口和尖銳，曾被批評家嘲弄，卻在自然酒革命後成為最受追捧的珍品之一。Jasnières——這個只有 60 公頃的 AOC，可能是法國被最嚴重低估的白酒。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>❄️ 理解涼爽氣候 Chenin Blanc 的特殊魅力</h4>
            <p>Jasnières 的極低溫條件如何造就超高酸度、礦物感和極長陳年潛力的白酒</p>
          </div>
          <div class="point-item">
            <h4>🗺️ 掌握 Loir 河谷白酒的 AOC 版圖</h4>
            <p>從 Jasnières 到 Coteaux-du-Loir 的層級關係，以及奧爾良白酒的品種特色</p>
          </div>
          <div class="point-item">
            <h4>🌿 理解自然酒在此區的特殊重要性</h4>
            <p>為何 Loir 河谷成為法國自然酒運動的主要根據地之一</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Jasnières AOC — 被遺忘的法國最偉大白酒之一',
    highlights: [
      { id: 1, icon: '📐', title: '微型面積：60 公頃', content: 'Jasnières 只有約 60 公頃的葡萄園，在 Loir 河北岸坡地（La Chartre-sur-le-Loir 村附近），是法國面積最小的 AOC 之一' },
      { id: 2, icon: '❄️', title: '法國最北的 Chenin Blanc', content: 'Jasnières 幾乎是法國北方種植 Chenin Blanc 的極限——涼爽的大陸性氣候帶來超高自然酸度（pH 常達 3.0–3.2），葡萄藤必須在陡坡南向坡才能充分成熟' },
      { id: 3, icon: '⏳', title: '10–20 年陳年潛力', content: '極高酸度讓 Jasnières 可以陳年極長——年輕時（1–5 年）往往過於緊閉和酸澀，但 10–20 年後展現出蜂蠟、榛果、礦物油、乾藥草的驚人複雜度' }
    ],
    content: `
      <div class="jasnieres-section">
        <p>Jasnières 是羅亞爾白酒中最兩極化的 AOC：它曾因過於酸澀而遭到嘲弄，卻在自然酒革命（1990s 後）中被重新發現為最純粹的風土表達之一。</p>
        <div class="jasnieres-history">
          <h4>📜 被遺忘再到復活</h4>
          <p>在 20 世紀中葉，Jasnières 幾乎無人問津——年均溫太低，葡萄難以充分成熟，常常只能釀出酒精度 10–11% 的緊閉酸澀白酒，農民紛紛改種蘋果和梨子。</p>
          <p>直到 1990 年代，自然酒運動（以 Domaine de Bellivière 的 Éric Nicolas 等人為代表）開始重新發現 Loir 河谷，並將 Jasnières 的極端酸度重新詮釋為「最純粹的礦物表達」——而非缺點。</p>
        </div>
        <div class="jasnieres-style">
          <h4>🍷 品飲窗口分析</h4>
          <table>
            <thead><tr><th>陳年時間</th><th>風格描述</th><th>建議狀態</th></tr></thead>
            <tbody>
              <tr><td>0–3 年</td><td>緊閉、高酸、礦物尖銳，幾乎「不可喝」</td><td>通常不建議開瓶</td></tr>
              <tr><td>4–8 年</td><td>開始展現白花、萊姆、白梨，酸度仍強但平衡感改善</td><td>可嘗試，建議醒酒 2 小時</td></tr>
              <tr><td>10–20 年</td><td>蜂蠟、榛果、礦物油、乾藥草、吐司，達到最佳狀態</td><td>最佳飲用窗口</td></tr>
              <tr><td>20 年+</td><td>氧化個性，太妃糖、核桃，類似 Vin Jaune 的陳年特質</td><td>特殊場合，需確認存儲條件</td></tr>
            </tbody>
          </table>
          <p><strong>代表酒莊：</strong>Domaine de Bellivière（Éric Nicolas，自然農法領袖）、Domaine J. Gigou</p>
        </div>
      </div>
    `
  },
  {
    title: 'Coteaux-du-Loir & Coteaux-du-Vendômois 白酒',
    content: `
      <div class="loir-whites-section">
        <div class="aoc-white-item">
          <h4>🏞️ Coteaux-du-Loir Blanc</h4>
          <p><strong>品種：</strong>Chenin Blanc（主），同一條 Loir 河谷，但法定 AOC 範圍比 Jasnières 更廣（包含紅酒和白酒）</p>
          <p><strong>風格差異：</strong>比 Jasnières 更易親近，通常不如 Jasnières 極端，干型或偶爾 Demi-Sec，白花、白桃、礦物感</p>
          <p><strong>生產者：</strong>Domaine de Bellivière 同時生產 Coteaux-du-Loir（親民款）和 Jasnières（旗艦款），是了解兩者差異的最佳參考點</p>
        </div>
        <div class="aoc-white-item">
          <h4>🌿 Coteaux-du-Vendômois Blanc</h4>
          <p><strong>品種：</strong>Chenin Blanc + 允許 Pineau d'Aunis（白色版本，非常罕見的白葡萄版本）</p>
          <p><strong>特色：</strong>旺多姆（Vendôme）周邊的小產區，主要以 Pineau d'Aunis 紅酒聞名，但白酒版本也有獨特的辛香草本氣息</p>
          <p><strong>自然酒文化：</strong>這裡是法國自然酒聖地之一，Thierry Puzelat（Clos du Tue-Boeuf）是最著名的自然酒生產者，他的葡萄酒有時被列為「世界自然酒 50 強」</p>
        </div>
      </div>
    `
  },
  {
    title: '奧爾良及都漢大區白酒',
    content: `
      <div class="orleans-touraine-whites">
        <div class="aoc-item-row">
          <h4>🏛️ Orléans Blanc（奧爾良白酒）</h4>
          <p><strong>品種：</strong>Chardonnay（主）+ Pinot Gris（二，非常特殊的品種選擇，在羅亞爾其他地方極少）</p>
          <p><strong>背景：</strong>奧爾良曾是法國中世紀最重要的葡萄酒城市之一（距巴黎最近的主要產區），但鐵路普及後，醋業和蔬菜農業取代了葡萄種植，直到 1990 年代才有少數農家重新復耕</p>
          <p><strong>風格：</strong>清爽、輕盈的 Chardonnay 個性，礦物感，完全沒有勃根地的橡木厚重感。Pinot Gris 版本有獨特的煙燻和玫瑰香氣，是非常少見的表現。</p>
          <p><strong>代表酒莊：</strong>Domaine Clos Saint-Fiacre（奧爾良復興的主要推手）</p>
        </div>
        <div class="aoc-item-row">
          <h4>🌾 Touraine Blanc（都漢大區白酒）</h4>
          <p><strong>品種：</strong>以 Sauvignon Blanc 為主（佔多數）；也可使用 Chenin Blanc</p>
          <p><strong>地位：</strong>Touraine AOC 是法國面積最大的產區 AOC 之一，白酒版本是性價比最高的 Sauvignon Blanc 之一</p>
          <p><strong>與 Sancerre 的比較：</strong>均價 €8–12（Sancerre 通常 €25–40），使用相同品種，但風格更簡單直接，缺少 Sancerre 的複雜礦物感；非常適合日常輕鬆飲用</p>
        </div>
      </div>
    `
  },
  {
    type: 'quiz',
    title: '小測驗',
    questions: [
      {
        id: 'q1',
        question: 'Jasnières AOC 為何常被建議陳年 10 年以上才開瓶？',
        options: [
          '因為法規規定最短陳年年限為 10 年',
          '涼爽氣候造就的超高自然酸度讓年輕時過於緊閉酸澀，10–20 年後才展現蜂蠟、礦物油等複雜風味',
          '因為 Jasnières 使用了大量新橡木桶，需要時間讓橡木味融合',
          '因為 Jasnières 的葡萄在釀造前需要冷藏儲存 10 年'
        ],
        correctIndex: 1,
        explanation: 'Jasnières 位於法國最北的 Chenin Blanc 種植極限，涼爽氣候帶來極高自然酸度（pH 3.0–3.2），年輕時往往過於緊閉和酸澀「不可飲」，但陳年 10–20 年後酸度與其他成分整合，展現蜂蠟、榛果、礦物油的驚人複雜度。'
      },
      {
        id: 'q2',
        question: '奧爾良白酒（Orléans Blanc）最獨特的品種組合是什麼？',
        options: [
          '100% Chenin Blanc',
          'Chardonnay + Pinot Gris（在羅亞爾其他地方極少見的組合）',
          'Sauvignon Blanc + Semillon',
          'Romorantin + Chenin Blanc'
        ],
        correctIndex: 1,
        explanation: '奧爾良白酒以 Chardonnay 為主，並允許使用 Pinot Gris——這個組合在整個羅亞爾河谷是非常罕見的，Pinot Gris 帶來獨特的煙燻和玫瑰香氣，展現奧爾良作為「羅亞爾最北端大城市」的獨特個性。'
      }
    ]
  }
]
