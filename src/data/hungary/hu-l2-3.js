/**
 * HU L2-3 維拉尼頂級酒莊：匈牙利最佳紅酒產區的名莊深解
 */

export const lessonContent = [
  {
    type: 'cover',
    title: '維拉尼頂級紅酒',
    subtitle: '匈牙利最南端：地中海氣候孕育的 Cabernet Franc 王國',
    icon: '🍷',
    background: 'linear-gradient(135deg, #7b1c2e 0%, #3a1a2e 100%)'
  },

  {
    title: '維拉尼產區：為何能產出匈牙利最佳紅酒？',
    highlights: [
      { id: 1, icon: '🌡️', title: '匈牙利最溫暖的葡萄酒產區', content: '位於巴蘭尼亞縣（Baranya）南部，鄰近克羅埃西亞邊境，擁有強烈的地中海氣候影響——夏季炎熱、日照充足，確保紅葡萄完全成熟' },
      { id: 2, icon: '🪨', title: '石灰岩與紅土共存', content: '土壤以石灰岩、紅色黏土（Terra Rossa）和砂岩為主，排水良好，為 Cabernet Franc 和 Merlot 提供礦石感和深厚結構' },
      { id: 3, icon: '🌬️', title: '帕諾尼亞氣候保護', content: '喀爾巴阡山脈阻擋寒流，維拉尼無霜期長，年均溫 11.5°C，是匈牙利 22 個法定產區中溫度最高的' },
      { id: 4, icon: '📜', title: '維拉尼紅酒的 AOC 規定', content: '「Villányi」法定產區只允許紅酒和粉紅酒；Villányi Franc 是品牌酒款，100% Cabernet Franc，橡木桶陳釀至少 12 個月' }
    ],
    content: `<div class="villany-intro">
      <p class="lead-text">若托卡伊是匈牙利白酒的靈魂，維拉尼就是匈牙利紅酒的心臟。這個緊鄰克羅埃西亞的小產區，以其地中海氣候和石灰岩土壤，釀造出比任何其他匈牙利產區更豐潤、更有結構的紅酒。</p>
      <div class="region-stats">
        <div class="stat-item"><span class="stat-num">2,700</span><span class="stat-label">公頃葡萄園</span></div>
        <div class="stat-item"><span class="stat-num">11.5°C</span><span class="stat-label">年均溫（匈牙利最高）</span></div>
        <div class="stat-item"><span class="stat-num">1990s</span><span class="stat-label">名莊崛起時代</span></div>
      </div>
    </div>`
  },

  {
    title: '維拉尼四大頂級酒莊',
    highlights: [
      { id: 1, icon: '🥇', title: 'Gere Attila Winery', content: '維拉尼最知名酒莊，單一葡萄園 Kopar Cabernet Franc 是鎮莊之寶，深色果味＋雪松＋黑巧克力，酒體飽滿可陳年 20 年' },
      { id: 2, icon: '🥈', title: 'Bock Winery', content: '家族釀酒傳承，旗艦酒 Ermitage 為 Cabernet Franc 主導的混釀，帶有煙燻皮革和黑醋栗；對遊客友好，設有高端餐廳' },
      { id: 3, icon: '🏅', title: 'Malatinszky Estate', content: '精品小農，堅持低產量（每公頃不超過 4,000 公升），手工採收，Franc Noir 展現維拉尼最精緻的一面：紫羅蘭＋鐵礦石' },
      { id: 4, icon: '🌿', title: 'Tiffán Estate', content: '傳統方法捍衛者，使用大型舊橡木桶（而非法國新桶），酒款強調風土表達，風格更接近布根地的精準與克制' }
    ],
    content: `<div class="villany-estates">
      <div class="grape-varieties">
        <h4>🍇 維拉尼的核心品種</h4>
        <table class="variety-table">
          <thead><tr><th>品種</th><th>風格</th><th>代表酒莊</th></tr></thead>
          <tbody>
            <tr><td>Cabernet Franc</td><td>紫羅蘭＋草本＋黑醋栗，緊緻單寧</td><td>Gere, Malatinszky</td></tr>
            <tr><td>Merlot</td><td>梅子＋巧克力，圓潤柔順</td><td>Bock, Tiffán</td></tr>
            <tr><td>Cabernet Sauvignon</td><td>黑莓＋雪松，結構感強</td><td>Gere, Bock</td></tr>
            <tr><td>Portugieser (Kékoportó)</td><td>輕盈，新鮮紅果，適合早飲</td><td>多數酒莊均有</td></tr>
            <tr><td>Syrah</td><td>黑胡椒＋燻肉，引進品種新嘗試</td><td>Malatinszky</td></tr>
          </tbody>
        </table>
      </div>
    </div>`
  },

  {
    title: 'Villányi Franc——匈牙利品牌紅酒的代表',
    highlights: [
      { id: 1, icon: '📋', title: '法規要求', content: '100% Cabernet Franc；採收糖度至少 23 KMW；橡木桶陳釀最少 12 個月；裝瓶後需再熟成 6 個月' },
      { id: 2, icon: '🌡️', title: '侍酒溫度', content: '建議 16–18°C；比波爾多紅酒稍低，突顯 Franc 的紫羅蘭花香和草本清新感' },
      { id: 3, icon: '🥩', title: '最佳配餐', content: '匈牙利燉牛肉（Gulyás）、烤羊排、熟成硬乳酪（如 Manchego）；草本風味也適配地中海香料料理' },
      { id: 4, icon: '📈', title: '陳年潛力', content: '頂級 Villányi Franc（Gere Kopar 等）可陳年 15–20 年；普通酒款建議 5–10 年內飲用' }
    ],
    quiz: {
      question: '維拉尼產區的氣候特徵最接近下列哪種類型？',
      options: ['大陸性氣候（寒冷冬季、炎熱夏季）', '地中海氣候影響（溫暖乾燥）', '海洋性氣候（涼爽潮濕）', '高山氣候（涼爽短暫生長季）'],
      answer: 1,
      explanation: '維拉尼是匈牙利最南端的產區，受到地中海氣候的強烈影響。夏季炎熱（平均氣溫超過 20°C）、日照充足，是匈牙利 22 個法定產區中年均溫最高的，因此能讓 Cabernet Franc 和 Merlot 完全成熟。'
    }
  }
]
