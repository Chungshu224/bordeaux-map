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
        <div class="note-box">
          <p>🎯 <strong>系統性品飲三步驟提醒</strong>：專業品飲永遠依循「視覺 → 嗅覺 → 口感」的固定順序——先觀察色澤與濃淡判斷年齡和酒款類型；再靜置聞香捕捉一、二、三類香氣；最後入口評估酸度、甜度、酒體與餘韻長度。養成這個習慣，能讓你在盲飲匈牙利葡萄酒時更有系統地推理出品種、產區甚至年份。</p>
        </div>
      </div>
    </div>`
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
    </div>`
  },
  {
    title: '匈牙利葡萄酒與傳統料理搭配',
    highlights: [
      { id: 1, icon: '🍲', title: '古拉什燉牛肉（Gulyás）', content: 'Kékfrankos 或 Egri Bikavér 是最佳拍檔，辛香料感與燉牛肉的紅椒（Paprika）風味完美呼應' },
      { id: 2, icon: '🐟', title: '多瑙河鮮魚湯（Halászlé）', content: '口感濃郁的辣味魚湯，搭配冰涼的干型 Furmint 或酸度充足的 Olaszrizling 最為解膩' },
      { id: 3, icon: '🧀', title: 'Foie Gras 鵝肝', content: '鵝肝其實是匈牙利本土的「國家珍品（Hungarikum）」，並非僅是法國舶來品——匈牙利是全球第二大鵝肝生產國，出口量占全球鵝肝消費近八成。搭配 4-5 Puttonyos Aszú（殘糖約 100-140 g/L）是最經典的組合' },
      { id: 4, icon: '🍮', title: '甜點搭配', content: '6 Puttonyos Aszú 搭配藍紋起司或核桃蛋糕；Eszencia 最好單獨品飲，感受其純粹的貴腐風味' }
    ],
    content: `<div class="food-pairing-guide">
      <p>匈牙利料理以大膽的紅椒（Paprika）風味和豐富的燉煮傳統著稱，恰好與匈牙利葡萄酒的酸度和辛香料感形成天然的互補。</p>
      <div class="note-box">
        <h4>🦢 鵝肝：匈牙利的國家珍品，不只是法國舶來品</h4>
        <p>很多人以為鵝肝是法國專屬，但匈牙利其實是<strong>全球第二大鵝肝生產國</strong>（僅次於法國），出口量占全球鵝肝消費量近八成。這項傳統可追溯至馬扎爾人（Magyar）進入喀爾巴阡盆地後延續的填飼養鵝習俗，並在 18 世紀玉米種植普及後真正興盛。2013 年鵝肝及其製品被列入匈牙利「國家珍品名錄（Hungarikum）」，是匈牙利飲食文化的官方認證代表——這也是為什麼 Tokaji Aszú 配鵝肝在匈牙利不只是「經典搭配」，更是一種本土的飲食身份認同。</p>
      </div>
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
            <td>Tokaji Aszú 4-5 Puttonyos（殘糖約 100-140 g/L）</td>
            <td>甜酸平衡切割鵝肝油脂感，是匈牙利最經典的宴席搭配</td>
          </tr>
          <tr>
            <td>野味料理（鹿肉、野豬燉肉）</td>
            <td>陳年 Tokaji Aszú、Egri Bikavér Superior</td>
            <td>陳年 Aszú 的乾果與辛香層次呼應野味的濃郁；Bikavér 的單寧與酸度可切割野味油脂</td>
          </tr>
          <tr>
            <td>匈牙利炸雞（Rántott csirke）</td>
            <td>Szürkebarát, Furmint</td>
            <td>酸度搭配油炸食品，礦物感提升鮮味</td>
          </tr>
          <tr>
            <td>新鮮起司 / 淡味乳酪</td>
            <td>干型 Olaszrizling</td>
            <td>清爽酸度平衡乳脂感，礦物感與鮮乳酪的簡單風味相輔相成</td>
          </tr>
          <tr>
            <td>藍紋起司（Gorgonzola）</td>
            <td>Tokaji Aszú 5-6 Puttonyos</td>
            <td>起司越濃郁鹹重，越適合搭配越甜的 Aszú——甜酒的蜂蜜感平衡鹹味和刺激感</td>
          </tr>
          <tr>
            <td>巧克力甜點</td>
            <td>Villányi Franc, Szekszárdi Bikavér</td>
            <td>紅酒的紅果酸度與可可的苦感形成複雜層次</td>
          </tr>
        </table>
      </div>
      <div class="note-box">
        <p>💡 <strong>搭配邏輯口訣</strong>：甜配鹹（Aszú 配藍紋起司）、酸解油（Furmint/Olaszrizling 配油炸與魚類）、單寧配紅肉（Bikavér、Villányi Franc 配燉牛肉與野味）、陳年配濃郁（老年份 Aszú 配野味與陳年起司）。掌握這四個原則，就能推理出大多數匈牙利料理的搭配邏輯，而不必死背菜單。</p>
      </div>
    </div>`
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
    </div>`
  }
,
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 知識檢測',
        isFinalExam: false,
        passScore: 60,
        questions: [
        {
          type: 'single',
          question: '品飲高品質 Tokaji Aszú 時，你應該感受到什麼重要的口感特徵？',
          options: ['A. 純粹的甜膩感，沒有任何酸度，類似糖漿', 'B. 酸甜平衡：高殘糖帶來甜蜜感，但同時有明顯的天然酸度，讓口感清晰不膩口', 'C. 高酒精感（15%+）搭配濃郁甜度', 'D. 完全干燥，沒有任何甜感'],
          correct: 1,
          explanation: '高品質 Tokaji Aszú 的關鍵品質標誌是「酸甜平衡」。Furmint 品種的高天然酸度（即使在 Aszú 中也保留）與濃縮的糖分形成張力，讓甜度不顯膩口，反而帶來清新感。這正是 Tokaji Aszú 區別於其他甜酒（如某些糖分添加的低品質酒款）的核心特徵。如果一款 Aszú 嘗起來完全是甜膩的，沒有酸度支撐，通常品質有問題。'
        },
        {
          type: 'single',
          question: 'Kadarka 的香氣特徵最接近下列哪種描述？',
          options: ['A. 黑醋栗、鉛筆芯、高單寧，類似頂級波爾多', 'B. 玫瑰水、乾草莓、辛香料（薑、丁香），低單寧，芬芳持久', 'C. 青草、青椒、高酸度，類似羅亞爾河 Cabernet Franc', 'D. 煙燻、礦石、高酸，類似布根地 Pinot Noir'],
          correct: 1,
          explanation: 'Kadarka 是匈牙利最芬芳的紅葡萄品種，以玫瑰水、乾燥紅果（草莓、野生紅莓）和東方辛香料（薑、丁香）的獨特香氣著稱。它的單寧含量很低，口感柔順，但香氣持久而複雜。正是這種「芬芳低單寧」的特性，使 Kadarka 在 Bikavér 混釀中扮演「香氣貢獻者」的角色，與 Kékfrankos 的骨架感形成互補。'
        },
        {
          type: 'single',
          question: '搭配匈牙利傳統鵝肝（Foie Gras）料理，最經典的選擇是哪種酒？',
          options: ['A. 冰涼的干型 Olaszrizling，以清爽感中和鵝肝的油脂', 'B. Egri Bikavér 紅酒，以單寧切割鵝肝油脂', 'C. Tokaji Aszú 甜白酒，以甜酸平衡切割鵝肝的豐富油脂感', 'D. 氣泡酒（Pezsgő），以氣泡感解膩'],
          correct: 2,
          explanation: '鵝肝（Foie Gras）配甜白酒是歐洲最經典的搭配之一（在波爾多是用 Sauternes，在匈牙利則是用 Tokaji Aszú）。原理是：甜酒的糖分和蜂蜜風味與鵝肝的豐富油脂形成風味呼應，而 Furmint 的高酸度則切割油脂感，讓口腔在每一口後都感到清新。這個搭配在匈牙利傳統宴席中是最高規格的搭配選擇。'
        },
        {
          type: 'single',
          question: '以下關於托卡伊（Tokaj）的陳述，哪一項是正確的？',
          options: ['A. 托卡伊是匈牙利最大的葡萄酒產區，面積超過 20,000 公頃', 'B. 托卡伊的分級制度建立於 1737 年，比波爾多的 1855 年分級早了 118 年', 'C. 托卡伊只能用 Hárslevelű 品種釀造 Aszú', 'D. 托卡伊 Aszú 不含任何天然酸度，因為貴腐菌分解了所有的酒石酸'],
          correct: 1,
          explanation: '正確答案是 B。托卡伊在 1737 年由神聖羅馬帝國皇帝查理六世建立了世界上第一個官方葡萄園品質分級制度，比波爾多著名的 1855 年梅多克分級早了整整 118 年。這是托卡伊（和匈牙利）在葡萄酒歷史上的重要地位象徵。其他選項均不正確：Tokaj 面積約 5,723 公頃（不是最大）；Aszú 主要品種是 Furmint（不是 Hárslevelű）；貴腐菌不會分解所有酸度，Aszú 的高天然酸度正是其品質標誌。'
        }
        ]
      }
    }
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '📋 Level 1 綜合評量',
        isFinalExam: true,
        passScore: 60,
        questions: [
        {
          type: 'single',
          question: '匈牙利 1737 年的托卡伊葡萄園分級制度，除了劃分葡萄園等級之外，還同時做出了什麼具有現代 AOC（法定產區）精神的規定？',
          options: ['A. 禁止外地葡萄酒進入托卡伊產區銷售', 'B. 規定所有酒莊必須以貴族姓氏命名', 'C. 強制所有酒莊採用相同的橡木桶陳年時間', 'D. 限制托卡伊只能出口給哈布斯堡皇室'],
          correct: 0,
          explanation: '1737 年查理六世的法令不只分級，還同時禁止外地葡萄酒混入托卡伊產區銷售，等於劃定了受保護的產區邊界——這正是現代 AOC／PDO 制度「產區保護」精神的雛形，也是托卡伊比波爾多 1855 年分級更早、更全面的原因。'
        },
        {
          type: 'single',
          question: '1990 年代匈牙利葡萄酒復興的重要推手 Royal Tokaji 酒莊，是由誰主導聯合創辦？',
          options: ['A. 英國酒評家 Hugh Johnson', 'B. 法國酒商 Baron Philippe de Rothschild', 'C. 西班牙 Vega Sicilia 家族', 'D. 美國酒商 Robert Mondavi'],
          correct: 0,
          explanation: 'Royal Tokaji 由英國知名酒評家 Hugh Johnson 於 1990 年聯合創辦，是私有化後外資進入托卡伊、帶動現代精品釀酒理念的標誌性酒莊之一。'
        },
        {
          type: 'single',
          question: '匈牙利的緯度（約 46-48°N）雖與波爾多、布根地相近，但因地處歐洲大陸中心，氣候上呈現什麼特徵？',
          options: ['A. 海洋性氣候，冬暖夏涼、四季溫差小', 'B. 大陸性氣候更強，夏季更炎熱、冬季更寒冷', 'C. 地中海型氣候，全年溫和少雨', 'D. 高山氣候，日夜溫差極小'],
          correct: 1,
          explanation: '匈牙利深處喀爾巴阡盆地內陸，遠離海洋調節，屬於典型大陸性氣候：夏季平均氣溫可達 26-28°C，冬季則可降至 -10°C 至 -20°C，季節溫差比波爾多等受海洋影響的產區明顯得多。'
        },
        {
          type: 'single',
          question: '下列「產區群—代表酒款」的配對，何者正確？',
          options: ['A. 托卡伊地區 → Villányi Franc', 'B. 巴拉頓地區 → Tokaji Aszú', 'C. 北匈牙利 → Egri Bikavér', 'D. 多瑙河平原 → Tokaji Eszencia'],
          correct: 2,
          explanation: '北匈牙利產區群（涵蓋 Eger、Mátra、Bükk）以 Egri Bikavér（埃格爾公牛血）聞名。托卡伊地區代表酒款是 Tokaji Aszú；巴拉頓地區以 Olaszrizling／Szürkebarát 為主；多瑙河平原以量產日常餐酒為主，並非精品甜酒產地。'
        },
        {
          type: 'single',
          question: '在托卡伊 Aszú 的傳統調配邏輯中，Furmint 與 Hárslevelű 兩者的角色分工最準確的描述是？',
          options: ['A. Furmint 提供花香，Hárslevelű 提供酸度骨架', 'B. Furmint 提供高酸度與結構骨架，Hárslevelű 提供芬芳花香與圓潤口感', 'C. 兩者角色完全相同，可以任意互相替代', 'D. Furmint 只能用於干型酒，Hárslevelű 只能用於 Aszú'],
          correct: 1,
          explanation: 'Furmint 薄皮高酸，是 Aszú 的「骨架」來源；Hárslevelű 皮厚酸度較低，帶來椴花、杏桃等豐郁香氣，是「靈魂」的芳香來源。兩者搭配互補，才構成托卡伊 Aszú 完整的風味結構。'
        },
        {
          type: 'single',
          question: 'Olaszrizling（Welschriesling）這個名字最容易讓消費者誤以為它和哪個品種有親緣關係，但實際上兩者 DNA 並無關聯？',
          options: ['A. Chardonnay', 'B. Sauvignon Blanc', 'C. Rhine Riesling（萊茵雷司令）', 'D. Gewürztraminer'],
          correct: 2,
          explanation: 'Olaszrizling 雖然名字帶有「Rizling」（Riesling），但與德國萊茵雷司令（Rhine Riesling）並無親緣關係，是完全不同的品種，風格上也更圓潤、酸度較低，不具備萊茵雷司令的高酸與長陳年潛力。'
        },
        {
          type: 'single',
          question: 'Kékfrankos 在德國的產區裡通常被稱為什麼名稱？',
          options: ['A. Spätburgunder', 'B. Lemberger（或 Limberger）', 'C. Dornfelder', 'D. Trollinger'],
          correct: 1,
          explanation: 'Kékfrankos 在奧地利稱為 Blaufränkisch，在德國（主要是 Württemberg）則稱為 Lemberger 或 Limberger，是中歐地區廣泛種植的同一品種在不同國家的異名。'
        },
        {
          type: 'single',
          question: '根據「公牛血（Bikavér）」的傳說，16 世紀埃格爾守軍抵禦鄂圖曼軍隊圍城時，發生了什麼讓敵軍誤判局勢的插曲？',
          options: ['A. 守軍將紅酒潑灑在城牆上偽裝血跡嚇退敵軍', 'B. 守軍飲用紅酒染紅鬍鬚，被圍城的鄂圖曼軍誤認為飲用了公牛血', 'C. 守軍以整批紅酒與敵軍交換停戰協議', 'D. 守軍用紅酒為傷兵消毒，士氣大振嚇退敵軍'],
          correct: 1,
          explanation: '傳說 1552 年埃格爾守軍在圍城中大量飲用紅色的 Bikavér，紅酒染紅了他們的鬍鬚；鄂圖曼軍誤以為守軍喝了公牛血而驚懼撤退，「公牛血」之名從此流傳，成為埃格爾紅酒最著名的品牌故事。'
        },
        {
          type: 'single',
          question: '維拉尼（Villány）之所以能讓 Cabernet Franc 展現不遜於波爾多右岸的成熟度，最主要的氣候原因是什麼？',
          options: ['A. 維拉尼是匈牙利最涼爽的產區，晝夜溫差全國最大', 'B. 維拉尼是匈牙利最溫暖的產區，年均氣溫最高，地中海氣候影響明顯', 'C. 維拉尼終年多雨，葡萄完全不需要灌溉', 'D. 維拉尼海拔全國最高，日照時數最長'],
          correct: 1,
          explanation: '維拉尼年均氣溫約 11.6°C，是匈牙利所有法定產區中最高的，加上南部地中海氣候影響，使 Cabernet Franc 等波爾多品種能充分成熟，單寧圓熟，不帶羅亞爾河常見的青椒／草本感。'
        },
        {
          type: 'single',
          question: '塞克薩德公牛血（Szekszárdi Bikavér）與埃格爾公牛血相比，風格上最主要的差異是什麼？',
          options: ['A. 塞克薩德完全不使用 Kékfrankos 品種', 'B. 塞克薩德的 Kadarka 比例通常較高，帶有更多玫瑰與東方辛香料的芬芳，風格更圓潤', 'C. 塞克薩德法規禁止混釀，只能單一品種裝瓶', 'D. 塞克薩德只生產白酒，沒有公牛血紅酒'],
          correct: 1,
          explanation: '塞克薩德位於較溫暖的南部潘農地區，其公牛血傳統上保留較高比例的 Kadarka，因此帶有更明顯的玫瑰水、東方辛香料香氣，整體風格比北部涼爽、礦物感較強的埃格爾公牛血更圓潤豐郁。'
        },
        {
          type: 'single',
          question: '「Puttonyos」這個詞在托卡伊傳統中最初指的是什麼實物？',
          options: ['A. 托卡伊產區內的行政區劃單位', 'B. 傳統上背在背上、用來採收 Aszú 貴腐果漿的木桶', 'C. 一種只在托卡伊使用的貴腐菌菌株名稱', 'D. 托卡伊酒莊申請分級認證用的證書'],
          correct: 1,
          explanation: 'Puttonyos 原指採收工人背在背上用來裝運 Aszú 貴腐果漿的傳統木桶，每桶約 20 公斤。後來這個詞演變成甜度分級單位——「幾 Puttonyos」代表每桶基酒中加入了幾桶 Aszú 果漿。'
        },
        {
          type: 'single',
          question: 'Tokaji Eszencia 的酒精度通常只有 2-5%，主要原因是什麼？',
          options: ['A. 釀酒師在發酵過程中刻意加水稀釋', 'B. 果漿糖分濃度極高（450-800 g/L），發酵過程中酵母難以承受高滲透壓，發酵極其緩慢且不完全', 'C. 使用特殊酵母菌株，天生只能產生極低酒精度', 'D. 匈牙利法規強制規定 Eszencia 的最高酒精度上限'],
          correct: 1,
          explanation: 'Eszencia 是純貴腐果漿自然滴落的汁液，糖度可達 450-800 g/L（比蜂蜜還高）。如此極端的高糖環境會產生滲透壓抑制，讓酵母幾乎無法正常運作，發酵極慢且往往在酒精度僅有 2-5% 時就自然停止。'
        },
        {
          type: 'single',
          question: '2013 年托卡伊法規改革後，Aszú 的品質判定主要改以什麼指標為依據，取代了單純的 Puttonyos 數字？',
          options: ['A. 葡萄園的海拔高度', 'B. 殘糖量（要求達到 120 g/L 以上）', 'C. 橡木桶陳年年限長短', 'D. 貴腐菌感染的百分比'],
          correct: 1,
          explanation: '2013 年新法規簡化了托卡伊的分級邏輯，改以實測的殘糖量（要求 Aszú 的殘糖 ≥ 120 g/L）作為品質判定依據，不再硬性規定 Puttonyos 木桶數量，但許多酒莊仍在酒標上保留 Puttonyos 數字作為傳統參考。'
        },
        {
          type: 'single',
          question: '「Szamorodni」這個字本身的意思，最貼切地反映了它獨特的釀造方式，是指什麼？',
          options: ['A. 「甜蜜的祝福」，象徵婚禮用酒的傳統', 'B. 「按原樣採收」，整串葡萄連貴腐果粒與正常果粒一起採收發酵，不特別分揀', 'C. 「二次發酵」，指瓶中二次發酵工序', 'D. 「橡木桶精華」，指專用陳年橡木桶的名稱'],
          correct: 1,
          explanation: 'Szamorodni 源自波蘭語「按原樣」之意，指整串葡萄不刻意分揀貴腐果粒與健康果粒，直接一起壓榨發酵。這與精選貴腐果漿手工採收的 Aszú 截然不同的釀造理念，因此 Szamorodni 可以是干型（Száraz，類似 Fino Sherry 風格）或甜型（Édes）。'
        },
        {
          type: 'single',
          question: 'Egri Bikavér Superior 與基本款 Egri Bikavér 相比，最主要的差異在於？',
          options: ['A. Superior 款只能使用 Kadarka 單一品種', 'B. Superior 款需通過更嚴格的盲品評審，且陳年時間要求更長（含更長橡木桶陳年）', 'C. Superior 款規定不得使用 Kékfrankos', 'D. Superior 款只能在巴拉頓產區生產'],
          correct: 1,
          explanation: 'Egri Bikavér Superior 是埃格爾酒莊協會認證的最高等級，除了符合基本款的多品種混釀規定外，還需通過嚴格的盲品評審，且要求更長的陳年時間（含至少 12 個月以上橡木桶陳年），品質標準遠高於基本款。'
        },
        {
          type: 'single',
          question: '「Villányi Franc」這個品牌認證在匈牙利葡萄酒業中最獨特之處是什麼？',
          options: ['A. 它是匈牙利唯一擁有專屬品牌認證的單一品種紅酒', 'B. 它是匈牙利唯一的官方氣泡酒（Pezsgő）品牌', 'C. 它其實專指托卡伊產區出產的干型白酒', 'D. 它是政府授予所有維拉尼酒莊的通用標籤，沒有品質門檻'],
          correct: 0,
          explanation: 'Villányi Franc 是匈牙利唯一擁有自己專屬品牌認證的單一品種葡萄酒，只有通過維拉尼酒農協會嚴格盲品評審的 Cabernet Franc 才能使用此認證，這在匈牙利 22 個法定產區中是獨一無二的品質保證機制。'
        }
        ]
      }
    }
  }
]
