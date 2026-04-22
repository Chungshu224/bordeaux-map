/**
 * CA-L2-4 橡木桶藝術、氣泡酒工藝與隆河品種在加州
 * 資料來源：discovercaliforniawines.com、California wine technical references
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          加州葡萄酒之所以與眾不同，不只是風土，更是釀酒師的技藝。本課深入探討橡木桶如何塑造加州葡萄酒的風格，傳統法氣泡酒在加州的發展，以及法國隆河品種在加州土地上的精彩演繹。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🪵 法國桶 vs 美國桶的風味密碼</h4>
            <p>掌握不同橡木桶類型、烘烤程度如何塑造加州葡萄酒的香草、香料和單寧結構</p>
          </div>
          <div class="point-item">
            <h4>🥂 加州傳統法氣泡酒的崛起</h4>
            <p>理解為何頂級香檳大廠選擇在加州投資，以及加州氣泡酒的獨特風格</p>
          </div>
          <div class="point-item">
            <h4>🍷 隆河品種的加州詮釋</h4>
            <p>了解 Syrah、Grenache、Viognier 等隆河品種如何在加州不同氣候下呈現各自的個性</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: '橡木桶：加州葡萄酒風格的關鍵塑造者',
    content: `<div class="oak-barrel-art">
      <h3>🪵 橡木桶的科學與藝術</h3>
      <p>橡木桶（Oak Barrel）不只是儲存容器，它是葡萄酒和木材之間的對話——氧氣緩慢滲入軟化單寧，橡木的化合物融入葡萄酒，逐漸塑造複雜的風味層次。加州釀酒師是全球最善用橡木桶的藝術家之一。</p>
      <div class="oak-comparison">
        <div class="oak-card french">
          <h4>🇫🇷 法國橡木桶（French Oak）</h4>
          <p class="oak-species">主要樹種：Quercus petraea（無梗花序橡木）</p>
          <p class="oak-source">主要產地：Allier、Tronçais、Vosges、Nevers 森林</p>
          <div class="oak-characteristics">
            <h5>風味特徵</h5>
            <ul>
              <li>細膩、精緻的香草和烘烤香氣</li>
              <li>融入感強，與葡萄酒更和諧整合</li>
              <li>單寧緊緻，有助葡萄酒陳年</li>
              <li>帶有香料感（丁香、肉桂的細膩版本）</li>
            </ul>
          </div>
          <p class="oak-price">價格：每桶約 900–1,200 美元</p>
          <p class="oak-usage">最適用：Pinot Noir、頂級 Chardonnay、精品 Cabernet</p>
        </div>
        <div class="oak-card american">
          <h4>🇺🇸 美國橡木桶（American Oak）</h4>
          <p class="oak-species">主要樹種：Quercus alba（白橡木）</p>
          <p class="oak-source">主要產地：Kentucky、Missouri、Ohio 的白橡木林</p>
          <div class="oak-characteristics">
            <h5>風味特徵</h5>
            <ul>
              <li>明顯的香草、椰子和甜香料味道</li>
              <li>木質香氣更直接、更強烈</li>
              <li>天然單寧含量相對較低</li>
              <li>帶有桂皮和甜奶油的特質</li>
            </ul>
          </div>
          <p class="oak-price">價格：每桶約 300–500 美元</p>
          <p class="oak-usage">最適用：Zinfandel、Rioja 風格 Tempranillo、Chardonnay（入門款）</p>
        </div>
      </div>
      <div class="oak-toasting">
        <h4>🔥 烘烤程度（Toast Level）的影響</h4>
        <div class="toast-levels">
          <div class="toast-item light">
            <strong>輕烘烤（Light Toast）</strong>
            <p>最大限度保留橡木天然香氣（椰子、新鮮木材），單寧較強，適合需要更多橡木結構的酒款</p>
          </div>
          <div class="toast-item medium">
            <strong>中等烘烤（Medium Toast）★ 最常用</strong>
            <p>平衡橡木香氣和煙燻感，帶來香草、咖啡、焦糖的複雜層次，是最受加州釀酒師歡迎的選擇</p>
          </div>
          <div class="toast-item heavy">
            <strong>重烘烤（Heavy Toast）</strong>
            <p>強烈的煙燻、咖啡豆、可可感，橡木的天然結構風味被取代，適合需要額外複雜度的濃郁紅酒</p>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Malolactic 乳酸轉換與氧化熟成',
    content: `<div class="mlf-aging">
      <h3>🔬 加州 Chardonnay 的兩大技術：MLF 與桶中熟成</h3>
      <div class="mlf-section">
        <h4>Malolactic Fermentation（MLF，蘋果乳酸轉換）</h4>
        <p>在酒精發酵後，乳酸菌將葡萄酒中尖銳的蘋果酸（Malic Acid）轉化為更柔和的乳酸（Lactic Acid）。這是影響加州 Chardonnay 風格的最重要技術之一。</p>
        <div class="mlf-comparison">
          <div class="mlf-card full">
            <h5>完全進行 MLF（Buttery Style）</h5>
            <p>1980–2000 年代加州流行風格。Chardonnay 呈現奶油、奶酪、烤麵包的濃郁質感，酸度低而圓潤。代表：Rombauer Chardonnay（著名的「Vacation Chardonnay」）</p>
            <span class="mlf-result">結果：豐腴、奶油感、低酸</span>
          </div>
          <div class="mlf-card none">
            <h5>完全不進行 MLF（Crisp Style）</h5>
            <p>2010 年代後流行的「新浪潮加州白酒」風格。保留蘋果酸的清爽感，展現 Chardonnay 的果香和礦物感，不用或少用橡木桶。代表：Littorai、Ceritas 的勃根地風格 Chardonnay</p>
            <span class="mlf-result">結果：清爽、高酸、礦物感</span>
          </div>
          <div class="mlf-card partial">
            <h5>部分進行 MLF（Balanced Style）★ 現代主流</h5>
            <p>精明的釀酒師選擇在熟成過程中讓部分批次（通常 30–60%）進行 MLF，再混調，在豐腴感和清爽感之間取得完美平衡。</p>
            <span class="mlf-result">結果：平衡、複雜、層次豐富</span>
          </div>
        </div>
      </div>
      <div class="batonnage-section">
        <h4>Bâtonnage（酒泥攪拌）</h4>
        <p>在桶中熟成期間，定期用長棍攪動沉澱的死酵母（lees），讓酵母自溶（autolysis）的產物重新融入酒液。效果：增加酒體、烤麵包和奶油餅乾的風味複雜度，以及延長回味。</p>
        <p>與 MLF 結合，Bâtonnage 是加州頂級 Chardonnay（如 Peter Michael、Kistler）質感的秘密武器。</p>
      </div>
    </div>`
  },

  {
    title: '加州傳統法氣泡酒',
    content: `<div class="california-sparkling">
      <h3>🥂 加州氣泡酒：香檳大廠的加州夢</h3>
      <p>1970 年代，幾個頂級香檳大廠（Moët & Chandon、Roederer、Taittinger）發現：加州 Carneros 和 Anderson Valley 的涼爽氣候非常適合生產高品質基酒。他們相繼在加州投資設立「加州香檳廠」，開啟了美國精品氣泡酒的黃金時代。</p>
      <div class="sparkling-houses">
        <div class="sh-card">
          <h4>Domaine Chandon</h4>
          <p class="sh-parent">Moët & Chandon 加州分廠（1973 年）</p>
          <p>加州第一個由香檳大廠在美國設立的酒廠，位於 Napa Valley Yountville。如今是納帕最受歡迎的觀光酒莊之一。</p>
          <span>產地：Carneros、Napa</span>
        </div>
        <div class="sh-card">
          <h4>Roederer Estate</h4>
          <p class="sh-parent">Louis Roederer 加州分廠（1982 年）</p>
          <p>位於 Anderson Valley（Mendocino），加州最涼爽的 AVA 之一。Roederer Estate 出品的氣泡酒被認為是加州品質最高的傳統法氣泡酒。</p>
          <span>產地：Anderson Valley</span>
        </div>
        <div class="sh-card">
          <h4>Domaine Carneros</h4>
          <p class="sh-parent">Taittinger 加州分廠（1987 年）</p>
          <p>建在 Carneros 小丘頂，法國城堡式的壯觀建築本身就是景點。以優雅的傳統法氣泡酒聞名。</p>
          <span>產地：Carneros</span>
        </div>
        <div class="sh-card">
          <h4>Scharffenberger Cellars</h4>
          <p class="sh-parent">Mendocino County 獨立酒莊</p>
          <p>Anderson Valley 的先鋒氣泡酒廠，以高性價比的傳統法氣泡酒聞名加州。</p>
          <span>產地：Anderson Valley</span>
        </div>
      </div>
      <div class="sparkling-method">
        <h4>傳統法（Méthode Champenoise）關鍵步驟</h4>
        <ol class="method-steps">
          <li><strong>採收涼爽氣候葡萄</strong> → 高酸低糖的基酒（base wine），通常 Pinot Noir + Chardonnay</li>
          <li><strong>調配（Assemblage）</strong> → 混合不同批次、不同年份（Non-Vintage）或單一年份（Vintage）基酒</li>
          <li><strong>瓶中二次發酵</strong> → 加入酵母和糖（Liqueur de Tirage），在瓶中產生 CO₂，瓶壓達到 6 atm</li>
          <li><strong>陳年（Aging）</strong> → 酒泥（lees）接觸至少 15 個月（NV）或 36 個月（Vintage），帶來烤麵包、酵母香氣</li>
          <li><strong>轉瓶（Riddling）</strong> → 逐漸將酒瓶倒置讓酒泥集中在瓶口</li>
          <li><strong>除渣（Disgorgement）</strong> → 冷凍瓶口，取出酒泥，補充劑量（Dosage）決定甜度</li>
        </ol>
      </div>
    </div>`
  },

  {
    title: '隆河品種在加州：Rhône Rangers 的故事',
    content: `<div class="california-rhone">
      <h3>🌿 Rhône Rangers — 加州的隆河革命</h3>
      <p>1970 年代，一群富有冒險精神的加州釀酒師——被稱為 <strong>Rhône Rangers</strong>——開始大量種植法國隆河品種（Syrah、Grenache、Mourvèdre、Viognier），並以加州自由的風土和釀酒技術重新詮釋這些品種。</p>
      <div class="rhone-varieties">
        <div class="rv-card red">
          <h4>🍷 Syrah（詩拉）</h4>
          <p class="rv-origin">原產：法國 Rhône Valley 北部（Hermitage、Côte-Rôtie）</p>
          <div class="rv-california">
            <h5>加州風格</h5>
            <p>因氣候不同而展現截然不同的個性：</p>
            <ul>
              <li><strong>涼爽氣候（Santa Barbara、Sonoma Coast）：</strong>優雅的黑胡椒、橄欖、紫羅蘭，類似法國北隆河風格</li>
              <li><strong>溫暖氣候（Paso Robles East、Sierra Foothills）：</strong>濃郁的黑莓果醬、巧克力、烤肉香，酒體豐滿</li>
            </ul>
          </div>
          <p class="rv-key-regions">核心產區：Santa Barbara、Santa Cruz Mountains、Paso Robles</p>
        </div>
        <div class="rv-card red">
          <h4>🍷 Grenache（格那希）</h4>
          <p class="rv-origin">原產：西班牙（Garnacha），廣泛種植於南隆河</p>
          <div class="rv-california">
            <h5>加州風格</h5>
            <p>溫暖、乾燥氣候的最佳搭檔：</p>
            <ul>
              <li>成熟的紅色莓果（草莓、覆盆子）風味豐富</li>
              <li>適合在 Paso Robles 石灰岩土壤上展現礦物感</li>
              <li>常作為混調品種（GSM：Grenache-Syrah-Mourvèdre）</li>
            </ul>
          </div>
        </div>
        <div class="rv-card red">
          <h4>🍷 Zinfandel（金粉黛）— 加州靈魂品種</h4>
          <p class="rv-origin">DNA 追溯：克羅埃西亞 Crljenak Kaštelanski（與義大利 Primitivo 相同）</p>
          <div class="rv-california">
            <h5>加州的地位</h5>
            <ul>
              <li>加州種植歷史超過 150 年，是最能代表加州個性的品種</li>
              <li>Lodi 的老藤 Zinfandel（100+ 年樹齡）是全球稀有珍寶</li>
              <li>在溫暖氣候下：黑莓果醬、甘草、黑胡椒；涼爽氣候下：野莓、煙燻、香料</li>
              <li>也可以釀造成清淡的粉紅酒（White Zinfandel）——1980 年代美國最暢銷葡萄酒</li>
            </ul>
          </div>
          <p class="rv-key-regions">核心產區：Lodi、Dry Creek Valley（Sonoma）、Sierra Foothills</p>
        </div>
        <div class="rv-card white">
          <h4>🍾 Viognier（維歐尼耶）</h4>
          <p class="rv-origin">原產：法國北隆河 Condrieu</p>
          <div class="rv-california">
            <h5>加州風格</h5>
            <ul>
              <li>在溫暖氣候（Central Valley、Paso Robles）表現最佳</li>
              <li>桃子、杏仁、忍冬花的豐富香氣，圓潤酒體</li>
              <li>有時與 Syrah 一起發酵（Condrieu 傳統做法），增添花香層次</li>
            </ul>
          </div>
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
            question: '與美國橡木桶相比，法國橡木桶賦予葡萄酒的主要特徵是什麼？',
            options: ['A. 更明顯的椰子和甜香草香氣', 'B. 更細膩精緻的香草香氣，單寧更緊緻', 'C. 較低的成本', 'D. 更強烈的煙燻香氣'],
            correct: 1,
            explanation: '法國橡木桶（主要來自 Allier 等法國森林）紋理更細緻，給葡萄酒帶來更精緻的香料和香草氣息，單寧更緊緻細膩，與葡萄酒整合得更和諧。'
          },
          {
            type: 'single',
            question: '「Malolactic Fermentation（MLF）」對加州 Chardonnay 的主要影響是什麼？',
            options: ['A. 增加酒精度', 'B. 將尖銳的蘋果酸轉化為柔和的乳酸，帶來奶油感', 'C. 增加葡萄酒的糖分', 'D. 消除酒精中的有害化合物'],
            correct: 1,
            explanation: 'MLF（乳酸轉換）將蘋果酸（酸度尖銳）轉化為乳酸（更柔和），同時產生 Diacetyl（雙乙醯）帶來奶油質地。完全進行 MLF 的加州 Chardonnay 就是著名的「奶油風格」Chardonnay。'
          },
          {
            type: 'single',
            question: '在加州氣泡酒發展中，哪個香檳大廠於 1973 年率先在加州設廠？',
            options: ['A. Roederer', 'B. Taittinger', 'C. Moët & Chandon（Domaine Chandon）', 'D. Krug'],
            correct: 2,
            explanation: 'Moët & Chandon 於 1973 年在 Napa Valley Yountville 建立了 Domaine Chandon，是第一個在加州設立分廠的頂級香檳大廠，開啟了加州傳統法氣泡酒的黃金時代。'
          }
        ]
      }
    }
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '📋 Level 2 綜合評量',
        isFinalExam: true,
        passScore: 70,
        questions: [
          {
            type: 'single',
            question: '加利福尼亞寒流對葡萄酒最重要的影響是？',
            options: ['A. 增加土壤肥沃度', 'B. 帶來海霧和涼爽氣候，有助保留天然酸度', 'C. 提高年降雨量', 'D. 使土壤變鹼性'],
            correct: 1,
            explanation: '加利福尼亞寒流冷卻海岸空氣凝結成霧，每天湧入谷地，讓葡萄緩慢成熟、保留天然酸度，是加州沿海葡萄酒優雅風格的核心。'
          },
          {
            type: 'single',
            question: 'Lodi 的沙質土壤最重要的特殊意義是？',
            options: ['A. 含高腳火山礦物質', 'B. 防止根瘤蚜蟲侵害，保存百年老藤', 'C. 保水性特別強', 'D. 最適合 Pinot Noir'],
            correct: 1,
            explanation: '根瘤蚜蟲無法在鬆散沙質土壤中移動，讓 Lodi 的 Zinfandel 老藤（100+ 年）得以未嫁接存活，是加州珍貴宗庫。'
          },
          {
            type: 'single',
            question: 'Winkler 制度 Region I 最適合哪類品種？',
            options: ['A. Zinfandel 和 Grenache', 'B. Pinot Noir 和 Chardonnay', 'C. Cabernet Sauvignon 和 Merlot', 'D. Barbera 和 Sangiovese'],
            correct: 1,
            explanation: 'Region I 是最涼爽的氣候帶（< 2,500 GDD），類似勃根地氣候，最適合 Pinot Noir、Chardonnay 和 Riesling 等涼爽氣候品種。'
          },
          {
            type: 'single',
            question: '1976 年巴黎評判紅酒組冠軍酒款來自哪個產區？',
            options: ['A. Oakville', 'B. Russian River Valley', 'C. Stags Leap District', 'D. Alexander Valley'],
            correct: 2,
            explanation: "Stag's Leap Wine Cellars 1973 Cabernet Sauvignon 來自 Stags Leap District，在巴黎評判紅酒組盲品中奪冠，震驚世界。"
          },
          {
            type: 'single',
            question: 'Russian River Valley 以哪個品種最著名，每天受太平洋冷霧影響？',
            options: ['A. Cabernet Sauvignon', 'B. Zinfandel', 'C. Pinot Noir', 'D. Merlot'],
            correct: 2,
            explanation: 'Russian River Valley 通過 Petaluma Gap 每天接收太平洋涼爽霧氣和海風，生長季漫長涼爽，是加州頂級 Pinot Noir 主要產地。'
          },
          {
            type: 'single',
            question: 'Napa Valley 佔加州總葡萄酒產量的比例約是？',
            options: ['A. 約 4%', 'B. 約 15%', 'C. 約 30%', 'D. 約 50%'],
            correct: 0,
            explanation: 'Napa Valley 僅佔加州總產量約 4%，但產出最昂貴知名的葡萄酒，是全球單位面積產值最高的產區之一。'
          },
          {
            type: 'single',
            question: '聖巴巴拉 Santa Rita Hills 能種出頂級 Pinot Noir 的地理原因是？',
            options: ['A. 海拔極高', 'B. 東西橫向山谷讓太平洋冷海霧直接滲入', 'C. 土壤含豐富火山礦物質', 'D. 靠近大型水庫'],
            correct: 1,
            explanation: '聖巴巴拉的橫向山谷是加州獨特地理特徵，太平洋冷海霧可直接從西側進入，使氣溫比 Napa 低 5-8°C，非常適合 Pinot Noir。'
          },
          {
            type: 'single',
            question: 'Paso Robles 西側最大的土壤特色是？',
            options: ['A. 火山玄武岩', 'B. 沙質壤土', 'C. 石灰岩', 'D. 礫石黏土'],
            correct: 2,
            explanation: 'Paso Robles 西側的石灰岩土壤類似法國 Châteauneuf-du-Pape，非常適合 Syrah、Grenache 等隆河品種，Tablas Creek 正是因此在此設莊。'
          },
          {
            type: 'single',
            question: 'Malolactic Fermentation（MLF）對 Chardonnay 的主要效果是？',
            options: ['A. 增加酒精度', 'B. 將蘋果酸轉化為乳酸，帶來奶油感', 'C. 增加糖分', 'D. 消除有害化合物'],
            correct: 1,
            explanation: 'MLF 將蘋果酸（尖銳）轉化為乳酸（柔和），同時產生 Diacetyl 帶來奶油質地，就是著名的「奶油風格」Chardonnay。'
          },
          {
            type: 'single',
            question: '哪個香檳大廠於 1973 年率先在加州 Napa Valley 設廠？',
            options: ['A. Roederer', 'B. Taittinger', 'C. Moët & Chandon（Domaine Chandon）', 'D. Krug'],
            correct: 2,
            explanation: 'Moët & Chandon 於 1973 年在 Napa Valley Yountville 建立 Domaine Chandon，是第一個在加州設立分廠的頂級香檳大廠。'
          }
        ]
      }
    }
  }
]
