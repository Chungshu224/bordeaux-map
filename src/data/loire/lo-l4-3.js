/**
 * LO-L4-3 氣候變遷——採收期前移與酒精濃度分析
 * AOCs: 跨產區氣候研究（Muscadet、Vouvray、Sancerre、Jasnières、Quarts-de-Chaume）
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          羅亞爾河谷是全球最能感受氣候變遷影響的葡萄酒產區之一——它的涼爽氣候曾是 Chenin Blanc 和 Melon de Bourgogne 精緻風格的保障，但過去 50 年的氣溫上升正在改變一切。採收期提前了兩到三週，酒精度從 11% 飆升到 13%+，貴腐甜酒的發展條件也在位移。這一課從數據和生產者的真實故事理解氣候變遷對羅亞爾的深遠影響。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>📊 掌握羅亞爾氣候變遷的具體數據</h4>
            <p>採收日期前移、平均氣溫升高、酒精度趨勢的量化分析</p>
          </div>
          <div class="point-item">
            <h4>⚖️ 理解氣候變遷的「雙面性」</h4>
            <p>哪些 AOC 從變暖中受益（Jasnières 終於可以成熟），哪些面臨存亡挑戰（Quarts-de-Chaume 的貴腐條件位移）</p>
          </div>
          <div class="point-item">
            <h4>🌱 了解生產者的適應策略</h4>
            <p>夜間採收、高海拔地塊轉移、晚熟品種選擇等應對氣候的實際做法</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '羅亞爾氣候變遷：50 年數據解讀',
    highlights: [
      { id: 1, icon: '🌡️', title: '年均溫上升 +1.8°C', content: '根據南特氣象站和都漢氣象記錄，羅亞爾河谷 1970–2020 年間年均溫上升約 1.8°C，這在農業時間尺度上是極為快速的變化' },
      { id: 2, icon: '📅', title: '採收期提前 15–20 天', content: 'Muscadet：1980 年代平均採收日約 10 月 5 日 → 2020 年代約 9 月 15 日（提前 20 天）；Sancerre Sauvignon Blanc：9 月初 → 8 月底。這些數字對葡萄酒風格有決定性影響' },
      { id: 3, icon: '🍷', title: '平均酒精度上升 1–1.5%', content: 'Vouvray 干型白酒：1980 年代約 11–11.5% → 2020 年代約 12.5–13.5%。Chinon 紅酒：12% → 13%+。更多太陽意味著更多糖分，意味著更高酒精——這讓羅亞爾的「輕盈」個性受到威脅' }
    ],
    content: `
      <div class="climate-data">
        <p>氣候科學家把羅亞爾河谷稱為氣候變遷的「金絲雀」——因為它處於溫帶邊緣，任何微小的溫度變化都會在葡萄酒風格上立即顯現。以下是最關鍵的幾個量化趨勢：</p>
        <div class="data-table-wrapper">
          <h4>📊 各 AOC 氣候變化量化比較（1980 vs 2020）</h4>
          <table>
            <thead><tr><th>AOC</th><th>採收期（1980）</th><th>採收期（2020）</th><th>酒精度（1980）</th><th>酒精度（2020）</th></tr></thead>
            <tbody>
              <tr><td>Muscadet</td><td>10 月上旬</td><td>9 月中旬</td><td>11–11.5%</td><td>12–12.5%</td></tr>
              <tr><td>Sancerre Blanc</td><td>9 月初</td><td>8 月底</td><td>12–12.5%</td><td>13–13.5%</td></tr>
              <tr><td>Vouvray Sec</td><td>10 月中旬</td><td>9 月下旬</td><td>11–12%</td><td>12.5–14%</td></tr>
              <tr><td>Jasnières</td><td>10 月底（有時無法成熟）</td><td>10 月中旬</td><td>10–11%</td><td>11.5–12.5%</td></tr>
              <tr><td>Quarts-de-Chaume</td><td>10 月底–11 月初</td><td>10 月中旬</td><td>（甜酒，酒精偏低）</td><td>甜度仍高，但 Botrytis 發展改變</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    title: '氣候變遷的「赢家」與「輸家」',
    content: `
      <div class="winners-losers">
        <div class="two-columns">
          <div class="winners">
            <h4>✅ 潛在受益者</h4>
            <div class="benefit-item">
              <h5>🌱 Jasnières — 終於可以成熟</h5>
              <p>Jasnières 長期以來被批評為「無法完全成熟」，年輕時過於酸澀。氣候變暖後，Jasnières 的葡萄終於能在秋天達到更完整的酚類成熟（phenolic ripeness），釀酒師不再需要等到 10 年後才能享用。Éric Nicolas（Domaine de Bellivière）表示，2010 年代的 Jasnières 在 5–6 年時就已展現出以前需要 10+ 年的複雜度。</p>
            </div>
            <div class="benefit-item">
              <h5>🏔️ 高海拔地塊 — 新的前線</h5>
              <p>過去被認為「太涼、太難成熟」的高海拔地塊（如奧弗涅的 800 公尺葡萄園、都漢北部坡地）現在成為熱點。因為在整體變暖的背景下，高海拔可以保持適當的酸度和清爽感，這是低海拔地塊失去的特質。</p>
            </div>
          </div>
          <div class="losers">
            <h4>⚠️ 面臨挑戰者</h4>
            <div class="challenge-item">
              <h5>🍯 Quarts-de-Chaume & Bonnezeaux — 貴腐條件位移</h5>
              <p>頂級甜酒需要精確的「晨霧 + 午後乾燥」微氣候循環。氣溫升高後，Layon 河谷的晨霧出現時間改變，有時在 9 月就出現（過去在 10 月），導致貴腐菌在葡萄尚未充分成熟時就大量發展——結果可能是「糖分高但酸度不足」的甜酒，失去過去的優雅平衡。</p>
            </div>
            <div class="challenge-item">
              <h5>🐟 Muscadet — 失去清爽招牌</h5>
              <p>Muscadet 的魅力在於極高酸度和「海洋清爽感」。隨著溫度上升，Melon de Bourgogne 提早成熟，酸度下降，酒精上升至 12–12.5%（原本是 11–11.5%）。部分生產者擔心，若 Muscadet 失去其標誌性的清爽低酒精個性，它和其他 Sauvignon Blanc 白酒的差異就會縮小。</p>
            </div>
            <div class="challenge-item">
              <h5>🌿 Sancerre — 熱帶個性侵蝕礦物感</h5>
              <p>1990 年代的 Sancerre 以燧石礦物感著稱；今日的頂級年份（如 2019、2022）開始出現百香果、芒果等熱帶香氣——對喜歡「新世界風格」的消費者是好事，但對追求「Sancerre 煙燻礦物個性」的愛好者卻是損失。</p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '生產者的適應策略',
    content: `
      <div class="adaptation-strategies">
        <p>羅亞爾的生產者不是氣候變遷的旁觀者——他們正在積極尋找適應方案：</p>
        <div class="strategy-grid">
          <div class="strategy-item">
            <h4>🌙 夜間採收（Vendange Nocturne）</h4>
            <p>在最涼爽的深夜（0:00–6:00）採收葡萄，保留自然酸度（避免白天高溫加速糖分累積），防止葡萄在採收時被熱氧化。Sancerre 的頂級酒莊（如 Henri Bourgeois）已在最熱的年份採用此策略。</p>
          </div>
          <div class="strategy-item">
            <h4>🏔️ 高海拔地塊轉移</h4>
            <p>在 Anjou 和 Touraine，多個酒莊開始投資比傳統地塊更高 50–100 公尺的坡地，以「向上移動」的方式保持酸度。每升高 100 公尺，平均氣溫下降約 0.6°C。</p>
          </div>
          <div class="strategy-item">
            <h4>🕐 延遲採收控制甜度</h4>
            <p>矛盾地，Vouvray 的部分生產者（尤其是做 Moelleux 的）在炎熱年份更需要「等待真正的 Botrytis」而非在過熟的糖分狀態採收。延遲採收策略變得更複雜，需要更密集地監控。</p>
          </div>
          <div class="strategy-item">
            <h4>🌿 恢復古老品種研究</h4>
            <p>INRAE（法國國家農業研究所）和部分酒農正在測試抗熱的本地古老品種，如 Romorantin（Cour-Cheverny）、Menu Pineau（Touraine），以及幾乎已絕種的 Gros Plant 親戚品種，尋找在更高溫條件下仍能保持自然酸度的選擇。</p>
          </div>
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
        question: '過去 50 年，羅亞爾河谷的採收期大約提前了多少天？',
        options: [
          '2–3 天（幾乎沒有改變）',
          '15–20 天（提前約 2–3 週）',
          '35–40 天（提前超過一個月）',
          '只有夏季品種（如 Chardonnay）提前，Chenin Blanc 不受影響'
        ],
        correctIndex: 1,
        explanation: '根據多個羅亞爾河谷氣象站的長期記錄，1970–2020 年間採收期整體提前了約 15–20 天（2–3 週），年均溫上升約 1.8°C。這對葡萄酒風格造成顯著影響：更早成熟意味著更高糖分、更高酒精，同時酸度降低。'
      },
      {
        id: 'q2',
        question: '氣候變遷對 Jasnières AOC 主要帶來的是正面還是負面影響？為什麼？',
        options: [
          '負面影響——因為 Jasnières 依賴涼爽氣候保持酸度，變暖讓酒失去特色',
          '主要是正面影響——氣溫升高讓 Jasnières 的 Chenin Blanc 終於能在秋天達到更完整的成熟度，縮短了以前需要 10+ 年才能享用的等待期',
          '沒有影響——Jasnières 的葡萄園海拔太高，氣候變遷對它無效',
          '負面影響——因為 Jasnières 是一個甜酒 AOC，變暖讓 Botrytis 無法正常發展'
        ],
        correctIndex: 1,
        explanation: 'Jasnières 是一個特殊案例：它過去常因氣溫太低、葡萄無法完整成熟而釀出過於酸澀的白酒，年輕時幾乎不可飲。氣候變暖後，Chenin Blanc 在秋天能達到更充分的酚類成熟，使 Jasnières 在 5–6 年時就展現以前需要 10+ 年的複雜度——這對這個 AOC 主要是正面影響。'
      }
    ]
  }
]
