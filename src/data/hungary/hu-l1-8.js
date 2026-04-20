/**
 * HU L1-8 品飲技巧與 Level 1 綜合評量
 */

export const lessonContent = [
  {
    type: 'cover',
    title: 'Level 1 綜合評量',
    subtitle: '品飲技巧、餐酒搭配與知識總複習',
    icon: '🎓',
    background: 'linear-gradient(135deg, #c8102e 0%, #477050 100%)'
  },
  {
    title: '匈牙利白酒品飲指南',
    highlights: [
      { id: 1, icon: '🌡️', title: '最佳飲用溫度', content: '干型白酒 8-12°C；Aszú 甜酒 12-14°C（稍高可讓香氣釋放）；Eszencia 可到 16-18°C' },
      { id: 2, icon: '🥂', title: '杯型選擇', content: '干型 Furmint：使用白布根地杯型（高腳細長）；Aszú：使用甜酒杯（細長口，集中香氣）' },
      { id: 3, icon: '👃', title: '香氣層次解碼', content: '一類香氣（品種）：杏桃、蘋果、萊姆；二類香氣（酵母）：麵包、奶油；三類香氣（陳年）：蜂蜜、煙燻、礦物' },
      { id: 4, icon: '⏳', title: '醒酒建議', content: '老年份干型 Furmint 可先醒酒 30-60 分鐘；老年份 Aszú 可醒酒 1-2 小時讓複雜香氣釋放' }
    ],
    content: `<div class="tasting-guide white">
      <p class="lead-text">品飲匈牙利白酒是一次感官探索的旅程。掌握正確的品飲技巧，能幫助你更好地理解匈牙利葡萄酒的風土特色。</p>
      <div class="tasting-steps">
        <h4>👁️ 視覺分析</h4>
        <div class="visual-guide">
          <div class="wine-color">
            <span class="color-swatch furmint-color">■</span>
            <span>干型 Furmint：淺金至金黃，帶綠色反光</span>
          </div>
          <div class="wine-color">
            <span class="color-swatch aszu-color">■</span>
            <span>Tokaji Aszú：深金至琥珀，老年份呈棕金色</span>
          </div>
        </div>
        <h4>👃 嗅覺分析（香氣輪）</h4>
        <div class="aroma-categories">
          <div class="category">
            <strong>水果類</strong>：杏桃、黃桃、蘋果（干型）→ 杏桃醬、橙皮蜜餞（Aszú）
          </div>
          <div class="category">
            <strong>花卉類</strong>：白花、金合歡（Furmint）；椴花（Hárslevelű）
          </div>
          <div class="category">
            <strong>礦物類</strong>：燧石、石灰岩、濕礦石（火山土壤特徵）
          </div>
          <div class="category">
            <strong>陳年類</strong>：蜂蜜、蜂蠟、烤榛子、奶油（Furmint 陳年）
          </div>
        </div>
        <h4>👅 口感分析</h4>
        <p>匈牙利白酒的最大特徵：<strong>高天然酸度</strong>。即使是 Aszú 甜酒，你也應該感受到明顯的酸度平衡甜度。如果甜酒嘗起來「肥厚膩口」，通常是品質不佳的徵兆。好的 Aszú 應該是酸甜清晰、層次豐富的。</p>
      </div>
    </div>`,
    quiz: {
      question: '品飲高品質 Tokaji Aszú 時，你應該感受到什麼重要的口感特徵？',
      options: [
        'A. 純粹的甜膩感，沒有任何酸度，類似糖漿',
        'B. 酸甜平衡：高殘糖帶來甜蜜感，但同時有明顯的天然酸度，讓口感清晰不膩口',
        'C. 高酒精感（15%+）搭配濃郁甜度',
        'D. 完全干燥，沒有任何甜感'
      ],
      correct: 1,
      explanation: '高品質 Tokaji Aszú 的關鍵品質標誌是「酸甜平衡」。Furmint 品種的高天然酸度（即使在 Aszú 中也保留）與濃縮的糖分形成張力，讓甜度不顯膩口，反而帶來清新感。這正是 Tokaji Aszú 區別於其他甜酒（如某些糖分添加的低品質酒款）的核心特徵。如果一款 Aszú 嘗起來完全是甜膩的，沒有酸度支撐，通常品質有問題。'
    }
  },
  {
    title: '匈牙利紅酒品飲指南',
    highlights: [
      { id: 1, icon: '🌡️', title: '飲用溫度', content: 'Bikavér 和中等風格紅酒：16-18°C；頂級 Villányi Franc：17-19°C；輕盈 Kékfrankos：14-16°C' },
      { id: 2, icon: '🍷', title: '醒酒建議', content: '年輕的 Villányi Franc（3-8 年）建議提前 1-2 小時醒酒或使用醒酒器；老年份（10 年+）輕柔換瓶即可' },
      { id: 3, icon: '👃', title: '紅酒香氣特徵', content: 'Kékfrankos：黑櫻桃、藍莓、辛香料；Kadarka：玫瑰、乾草莓；Cabernet Franc（維拉尼）：黑醋栗、紫羅蘭、鉛筆芯' },
      { id: 4, icon: '⏳', title: '陳年潛力', content: '頂級 Villányi Franc 可陳年 15-25 年；Egri Bikavér Superior 8-15 年；一般 Kékfrankos 3-8 年' }
    ],
    content: `<div class="tasting-guide red">
      <p>匈牙利紅酒的品飲重點在於：理解不同品種的「個性」以及不同產區的「風土表達」。</p>
      <div class="red-aroma-guide">
        <h4>🌹 三大品種香氣速記</h4>
        <div class="aroma-profiles">
          <div class="profile kekfrankos">
            <h5>🍇 Kékfrankos</h5>
            <div class="aromas">黑櫻桃、黑醋栗、藍莓、紫羅蘭、白胡椒、辛香料</div>
            <div class="palate">中高酸度、中等單寧、清新結尾</div>
          </div>
          <div class="profile kadarka">
            <h5>🌹 Kadarka</h5>
            <div class="aromas">玫瑰水、乾草莓、野生紅果、辛香料（薑、丁香）</div>
            <div class="palate">低單寧、中等酸度、芬芳持久</div>
          </div>
          <div class="profile cabernetfranc">
            <h5>🏰 Cabernet Franc（維拉尼）</h5>
            <div class="aromas">黑醋栗、黑李子、紫羅蘭、鉛筆芯、雪茄盒</div>
            <div class="palate">高單寧（成熟）、高酸度、長餘韻</div>
          </div>
        </div>
      </div>
      <div class="structure-note">
        <h4>🔬 酸度是關鍵</h4>
        <p>與波爾多或布根地紅酒相比，匈牙利紅酒（尤其是 Kékfrankos）通常帶有更活躍的酸度，這讓它們非常適合搭配食物。這個特徵在較涼爽年份（來自 Sopron 或 Eger）更加明顯。</p>
      </div>
    </div>`,
    quiz: {
      question: 'Kadarka 的香氣特徵最接近下列哪種描述？',
      options: [
        'A. 黑醋栗、鉛筆芯、高單寧，類似頂級波爾多',
        'B. 玫瑰水、乾草莓、辛香料（薑、丁香），低單寧，芬芳持久',
        'C. 青草、青椒、高酸度，類似羅亞爾河 Cabernet Franc',
        'D. 煙燻、礦石、高酸，類似布根地 Pinot Noir'
      ],
      correct: 1,
      explanation: 'Kadarka 是匈牙利最芬芳的紅葡萄品種，以玫瑰水、乾燥紅果（草莓、野生紅莓）和東方辛香料（薑、丁香）的獨特香氣著稱。它的單寧含量很低，口感柔順，但香氣持久而複雜。正是這種「芬芳低單寧」的特性，使 Kadarka 在 Bikavér 混釀中扮演「香氣貢獻者」的角色，與 Kékfrankos 的骨架感形成互補。'
    }
  },
  {
    title: '匈牙利葡萄酒與傳統料理搭配',
    highlights: [
      { id: 1, icon: '🍲', title: '古拉什燉牛肉（Gulyás）', content: 'Kékfrankos 或 Egri Bikavér 是最佳拍檔，辛香料感與燉牛肉的紅椒（Paprika）風味完美呼應' },
      { id: 2, icon: '🐟', title: '多瑙河鮮魚湯（Halászlé）', content: '口感濃郁的辣味魚湯，搭配冰涼的干型 Furmint 或酸度充足的 Olaszrizling 最為解膩' },
      { id: 3, icon: '🧀', title: 'Foie Gras 鵝肝', content: '托卡伊 Aszú（3-4 Puttonyos）或干型 Furmint 是搭配鵝肝的絕配，尤其在 Strasbourg 式的傳統上' },
      { id: 4, icon: '🍮', title: '甜點搭配', content: '6 Puttonyos Aszú 搭配藍紋起司或核桃蛋糕；Eszencia 最好單獨品飲，感受其純粹的貴腐風味' }
    ],
    content: `<div class="food-pairing-guide">
      <p>匈牙利料理以大膽的紅椒（Paprika）風味和豐富的燉煮傳統著稱，恰好與匈牙利葡萄酒的酸度和辛香料感形成天然的互補。</p>
      <div class="pairing-matrix">
        <h4>🍽️ 匈牙利料理 × 葡萄酒搭配矩陣</h4>
        <table class="pairing-table">
          <tr>
            <th>料理</th>
            <th>推薦酒款</th>
            <th>搭配原因</th>
          </tr>
          <tr>
            <td>古拉什燉牛肉（Gulyás）</td>
            <td>Egri Bikavér, Kékfrankos</td>
            <td>酸度切割油脂，辛料與紅椒互補</td>
          </tr>
          <tr>
            <td>辣味魚湯（Halászlé）</td>
            <td>干型 Furmint, Olaszrizling</td>
            <td>高酸解辣，礦物感與鮮魚相配</td>
          </tr>
          <tr>
            <td>鵝肝（Foie Gras）</td>
            <td>Tokaji Aszú 3-5 Puttonyos</td>
            <td>甜酸平衡切割鵝肝油脂感</td>
          </tr>
          <tr>
            <td>匈牙利炸雞（Rántott csirke）</td>
            <td>Szürkebarát, Furmint</td>
            <td>酸度搭配油炸食品，礦物感提升鮮味</td>
          </tr>
          <tr>
            <td>藍紋起司（Gorgonzola）</td>
            <td>Tokaji Aszú 5-6 Puttonyos</td>
            <td>甜酒的蜂蜜感平衡起司的鹹味和刺激感</td>
          </tr>
          <tr>
            <td>巧克力甜點</td>
            <td>Villányi Franc, Szekszárdi Bikavér</td>
            <td>紅酒的紅果酸度與可可的苦感形成複雜層次</td>
          </tr>
        </table>
      </div>
    </div>`,
    quiz: {
      question: '搭配匈牙利傳統鵝肝（Foie Gras）料理，最經典的選擇是哪種酒？',
      options: [
        'A. 冰涼的干型 Olaszrizling，以清爽感中和鵝肝的油脂',
        'B. Egri Bikavér 紅酒，以單寧切割鵝肝油脂',
        'C. Tokaji Aszú 甜白酒，以甜酸平衡切割鵝肝的豐富油脂感',
        'D. 氣泡酒（Pezsgő），以氣泡感解膩'
      ],
      correct: 2,
      explanation: '鵝肝（Foie Gras）配甜白酒是歐洲最經典的搭配之一（在波爾多是用 Sauternes，在匈牙利則是用 Tokaji Aszú）。原理是：甜酒的糖分和蜂蜜風味與鵝肝的豐富油脂形成風味呼應，而 Furmint 的高酸度則切割油脂感，讓口腔在每一口後都感到清新。這個搭配在匈牙利傳統宴席中是最高規格的搭配選擇。'
    }
  },
  {
    title: 'Level 1 綜合評量',
    highlights: [
      { id: 1, icon: '✅', title: '課程完成！', content: '恭喜你完成 Level 1 的全部 8 堂課！現在讓我們檢驗你對匈牙利葡萄酒的基礎知識掌握程度' },
      { id: 2, icon: '📚', title: '本課程涵蓋', content: '歷史與文化、地理氣候、白/紅葡萄品種、五大產區群、托卡伊深度、酒款類型、品飲技巧' },
      { id: 3, icon: '🏆', title: 'Level 2 預告', content: 'Level 2 將深入各產區、頂級酒莊、年份差異和進階品飲分析，帶你從入門進階到專業水準' },
      { id: 4, icon: '🌍', title: '繼續探索', content: '匈牙利葡萄酒是葡萄酒世界中最被低估的寶藏之一，每一次探索都會有新的驚喜等待你' }
    ],
    content: `<div class="final-exam">
      <p class="lead-text">🎉 恭喜完成 Level 1！你已經建立了匈牙利葡萄酒的完整知識框架。</p>
      <div class="review-cards">
        <h4>📋 Level 1 核心知識摘要</h4>
        <div class="review-grid">
          <div class="review-card">
            <h5>🏛️ 歷史地位</h5>
            <ul>
              <li>1737 年世界最早官方葡萄園分級（早於波爾多 118 年）</li>
              <li>22 個法定產區，UNESCO 托卡伊世界遺產</li>
            </ul>
          </div>
          <div class="review-card">
            <h5>🌍 地理氣候</h5>
            <ul>
              <li>喀爾巴阡盆地，大陸性氣候</li>
              <li>五大產區群：托卡伊/北匈牙利/潘農/巴拉頓/多瑙河</li>
            </ul>
          </div>
          <div class="review-card">
            <h5>🍇 重要品種</h5>
            <ul>
              <li>白：Furmint（托卡伊靈魂）、Olaszrizling（最廣）</li>
              <li>紅：Kékfrankos（最廣）、Kadarka（傳統）、Cabernet Franc（維拉尼）</li>
            </ul>
          </div>
          <div class="review-card">
            <h5>🍾 代表酒款</h5>
            <ul>
              <li>甜酒：Tokaji Aszú（貴腐，Furmint + Hárslevelű）</li>
              <li>紅酒：Egri Bikavér（公牛血，Kékfrankos 為主）</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="next-level">
        <h4>🚀 Level 2 預告：深度探索</h4>
        <ul>
          <li>頂級酒莊深度解析（Gere, Royal Tokaji, Bock 等）</li>
          <li>年份差異：哪些年份是值得收藏的「傳奇年份」</li>
          <li>進階品飲：盲品技巧、侍酒師的思維方式</li>
          <li>採購指南：哪些酒款性價比最高、最值得入手</li>
        </ul>
      </div>
    </div>`,
    quiz: {
      question: '以下關於托卡伊（Tokaj）的陳述，哪一項是正確的？',
      options: [
        'A. 托卡伊是匈牙利最大的葡萄酒產區，面積超過 20,000 公頃',
        'B. 托卡伊的分級制度建立於 1737 年，比波爾多的 1855 年分級早了 118 年',
        'C. 托卡伊只能用 Hárslevelű 品種釀造 Aszú',
        'D. 托卡伊 Aszú 不含任何天然酸度，因為貴腐菌分解了所有的酒石酸'
      ],
      correct: 1,
      explanation: '正確答案是 B。托卡伊在 1737 年由神聖羅馬帝國皇帝查理六世建立了世界上第一個官方葡萄園品質分級制度，比波爾多著名的 1855 年梅多克分級早了整整 118 年。這是托卡伊（和匈牙利）在葡萄酒歷史上的重要地位象徵。其他選項均不正確：Tokaj 面積約 5,723 公頃（不是最大）；Aszú 主要品種是 Furmint（不是 Hárslevelű）；貴腐菌不會分解所有酸度，Aszú 的高天然酸度正是其品質標誌。'
    }
  }
]
