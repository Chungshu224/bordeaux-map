/**
 * CA-L2-4 橡木桶藝術、氣泡酒工藝與隆河品種在加州
 * 深化重點：法國/美國橡木化學成分比較、桶匠製程、傳統法氣泡酒糖度分級、GSM 混調邏輯、Sangiovese 加州史
 * 資料來源（2026 年查證）：
 *  - Rocky Mountain Barrel Company／Wiens Cellars／Bricoleur Vineyards「French Oak vs American Oak」比較文章
 *  - Independent Stave Company「Oak Species for Cooperage」
 *  - Tablas Creek「History」；Decanter「Tablas Creek: bringing the Rhône to California」
 *  - Palate Press「Rhône Rangers: Distinctive California Wines from Old World Varieties」
 *  - VinePair「Are Napa's Century-Old Italian Roots Finally Bearing Fruit?」；Wikipedia「Atlas Peak AVA」（Sangiovese 沿革）
 *  - discovercaliforniawines.com；各酒莊官方沿革（Domaine Chandon、Roederer Estate、Domaine Carneros）
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          加州葡萄酒之所以與眾不同，不只是風土，更是釀酒師的技藝。本課深入橡木桶的木材化學、傳統法氣泡酒每一道工序背後的原理，以及法國隆河與義大利品種在加州土地上的精彩演繹——這些是 Level 1 尚未觸及的釀造技術層。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🪵 法國桶 vs 美國桶的化學密碼</h4>
            <p>從單寧含量、內酯（Lactone）與香草醛比例，理解兩種橡木為何塑造出截然不同的口感</p>
          </div>
          <div class="point-item">
            <h4>🥂 傳統法氣泡酒的完整工序與甜度分級</h4>
            <p>掌握從二次發酵到除渣補液（Dosage）的每一道步驟，以及甜度標示背後的含糖量邏輯</p>
          </div>
          <div class="point-item">
            <h4>🍷 隆河與義大利品種的加州詮釋</h4>
            <p>理解 Rhône Rangers 運動的歷史脈絡、GSM 混調邏輯，以及 Sangiovese 在加州跌宕起伏的種植史</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: '橡木桶的科學：木材如何變成風味',
    content: `<div class="oak-barrel-art">
      <h3>🪵 從森林到酒窖：橡木桶的化學本質</h3>
      <p>橡木桶不只是儲存容器，它是葡萄酒和木材之間的持續對話——微量氧氣透過木材毛細孔緩慢滲入（Micro-oxygenation），軟化單寧結構；同時，木材中的化合物逐漸溶入酒液。理解這場對話，要從木材本身的化學組成談起。</p>
      <div class="oak-comparison">
        <div class="oak-card french">
          <h4>🇫🇷 法國橡木桶（French Oak）</h4>
          <p class="oak-species">主要樹種：Quercus petraea（無梗花序橡木）</p>
          <p class="oak-source">主要產地：Allier、Tronçais、Vosges、Nevers 森林</p>
          <div class="oak-characteristics">
            <h5>木材化學特徵</h5>
            <ul>
              <li>木紋緊密（Tight Grain），內酯（Oak Lactone）含量低，椰子/香草感較內斂</li>
              <li>單寧（Ellagitannin）含量較高，帶來更明顯的澀感與結構支撐</li>
              <li>酚類化合物比例高，燃燒烘烤後更易呈現辛香料調性</li>
              <li>因木紋緊密，木材與酒液交換速度較慢，風味融入感更和諧細緻</li>
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
            <h5>木材化學特徵</h5>
            <ul>
              <li>木紋較寬鬆（Wide Grain），內酯含量明顯較高，帶來鮮明的椰子與香草氣息</li>
              <li>香草醛（Vanillin）含量高於法國橡木，甜感更直接強烈</li>
              <li>天然單寧含量相對較低，澀感較柔和</li>
              <li>因木紋較鬆，萃取速度較快，年輕時風味表現更外放</li>
            </ul>
          </div>
          <p class="oak-price">價格：每桶約 300–500 美元</p>
          <p class="oak-usage">最適用：Zinfandel、Rioja 風格 Tempranillo、Chardonnay（入門款）</p>
        </div>
      </div>
      <div class="oak-making">
        <h4>🔨 從原木到橡木桶：桶匠的製程</h4>
        <div class="making-steps">
          <div class="ms-step"><strong>1. 選材與裂切</strong><p>橡木必須沿木紋方向裂切（而非鋸切）成桶板，確保木材毛細孔方向與液體流動方向垂直，兼顧密封性與微氧交換能力。</p></div>
          <div class="ms-step"><strong>2. 露天風乾（Seasoning）</strong><p>桶板堆放於露天木材場風乾 18–36 個月，讓雨水自然淋洗出木材中過於粗澀的單寧與苦味物質，這個步驟的時間長短直接影響橡木桶的細緻程度。</p></div>
          <div class="ms-step"><strong>3. 彎板成形與烘烤（Toasting）</strong><p>桶板以明火加熱同時彎曲成形，加熱溫度與時間決定「烘烤程度」，是橡木風味的最後、也是最關鍵的一道調味工序。</p></div>
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
      <div class="oak-decision">
        <h4>🎯 釀酒師的橡木桶決策邏輯</h4>
        <p>新桶（First-use）風味貢獻最強烈；二次使用（Second-fill）香氣已大幅減弱、偏重微氧化功能；三次以上的舊桶則幾乎只提供陳年容器功能，不再增添明顯木質風味。頂級 Napa Cabernet 常見「30–60% 新桶」的配方策略，正是在集中度與橡木存在感之間尋求平衡，避免木頭味蓋過果實本身的風土表達。</p>
      </div>
    </div>`
  },

  {
    title: '橡木之外：現代熟成容器的多元化',
    content: `<div class="alt-vessels">
      <h3>🏺 當釀酒師選擇「不」用橡木桶</h3>
      <p>近十年，越來越多加州釀酒師開始用其他材質的容器，刻意避開橡木風味，讓風土本身成為主角。理解這股趨勢，能幫助解讀酒標上「Unoaked」或「Concrete-aged」等標示背後的邏輯。</p>
      <div class="vessel-grid">
        <div class="vessel-card">
          <h4>🥚 混凝土蛋（Concrete Egg）</h4>
          <p>蛋形設計讓酒泥在發酵與熟成過程中因對流而持續懸浮循環，達到類似攪桶（Bâtonnage）的效果卻不需人工介入。混凝土本身多孔但幾乎不釋放風味物質，可提供極微量的氧氣交換，介於不鏽鋼桶與橡木桶之間。</p>
        </div>
        <div class="vessel-card">
          <h4>🏺 陶罐（Amphora / Clay Qvevri）</h4>
          <p>源自喬治亞與地中海古法，陶土本身多孔，可提供微氧化但完全不添加木質風味，近年在加州自然酒與強調品種純粹表現的釀酒師間受到歡迎。</p>
        </div>
        <div class="vessel-card">
          <h4>🔩 不鏽鋼桶（Stainless Steel）</h4>
          <p>完全惰性、零風味貢獻、零氧氣交換，能百分之百保留葡萄品種本身的果香與酸度，是強調「新浪潮」清爽風格 Chardonnay 與 Sauvignon Blanc 最常見的選擇。</p>
        </div>
      </div>
      <p class="vessel-note">💡 選擇容器的核心邏輯：橡木桶＝風味＋微氧化；混凝土/陶罐＝微氧化但不加風味；不鏽鋼＝完全惰性。加州精品酒莊如今常混用多種容器分批熟成，最後調配（Blending）出理想的風味與結構平衡。</p>
    </div>`
  },

  {
    title: 'Malolactic 乳酸轉換與氧化熟成',
    content: `<div class="mlf-aging">
      <h3>🔬 加州 Chardonnay 的兩大技術：MLF 與桶中熟成</h3>
      <div class="mlf-section">
        <h4>Malolactic Fermentation（MLF，蘋果乳酸轉換）</h4>
        <p>在酒精發酵後，乳酸菌將葡萄酒中尖銳的蘋果酸（Malic Acid）轉化為更柔和的乳酸（Lactic Acid），並產生「雙乙醯」（Diacetyl）這種奶油風味的副產物。這是影響加州 Chardonnay 風格的最重要技術之一。</p>
        <div class="mlf-comparison">
          <div class="mlf-card full">
            <h5>完全進行 MLF（Buttery Style）</h5>
            <p>1980–2000 年代加州流行風格。Chardonnay 呈現奶油、奶酪、烤麵包的濃郁質感，酸度低而圓潤。代表：Rombauer Chardonnay（著名的「Vacation Chardonnay」）</p>
            <span class="mlf-result">結果：豐腴、奶油感、低酸</span>
          </div>
          <div class="mlf-card none">
            <h5>完全不進行 MLF（Crisp Style）</h5>
            <p>2010 年代後流行的「新浪潮加州白酒」風格。保留蘋果酸的清爽感，展現 Chardonnay 的果香和礦物感，不用或少用橡木桶。代表：Littorai、Ceritas 的布根地風格 Chardonnay</p>
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
    title: '加州傳統法氣泡酒：從基酒到除渣的完整工序',
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
        <h4>傳統法（Méthode Champenoise / Méthode Traditionnelle）關鍵步驟</h4>
        <ol class="method-steps">
          <li><strong>採收涼爽氣候葡萄</strong> → 高酸低糖的基酒（base wine），通常 Pinot Noir + Chardonnay，有時加入少量 Pinot Meunier</li>
          <li><strong>調配（Assemblage）</strong> → 混合不同批次、不同葡萄園、不同年份（Non-Vintage）或單一年份（Vintage）基酒，追求酒莊一致的「屋風格」（House Style）</li>
          <li><strong>裝瓶與二次發酵（Tirage）</strong> → 加入酵母和糖（Liqueur de Tirage）後裝瓶並以皇冠蓋封瓶，糖分在瓶中被酵母發酵成酒精與 CO₂，因無處逸散，瓶壓可累積達 6 大氣壓</li>
          <li><strong>酒泥陳年（Lees Aging）</strong> → 死酵母（lees）持續與酒液接觸，酵母細胞壁自溶釋出多醣體與胺基酸，帶來烤麵包、餅乾、堅果的風味複雜度。法定最低酒泥接觸期：NV 至少 15 個月，Vintage 至少 36 個月，許多加州精品酒款遠超此標準</li>
          <li><strong>轉瓶（Riddling / Remuage）</strong> → 酒瓶置於轉瓶架（Pupitre）上，逐日小角度轉動並漸漸倒置，讓沉澱的酒泥緩慢集中滑向瓶口，現代多以自動轉瓶機（Gyropalette）完成</li>
          <li><strong>除渣（Disgorgement / Dégorgement）</strong> → 將瓶口浸入冷凍鹽水槽，凍結含酒泥的瓶頸冰栓，開瓶時瓶內壓力自動把冰渣彈射排出，酒液維持澄澈</li>
          <li><strong>補液定裝（Dosage）</strong> → 除渣後液面略降，補入「補液液」（Liqueur d'Expédition，通常是糖與基酒調和液）以補足液位並決定最終甜度等級</li>
        </ol>
      </div>
      <div class="dosage-levels">
        <h4>🍬 補液決定的甜度分級（Sweetness Levels）</h4>
        <table class="compare-table">
          <thead><tr><th>分級</th><th>每公升殘糖量</th><th>風格印象</th></tr></thead>
          <tbody>
            <tr><td>Brut Nature / Zero Dosage</td><td>0–3 克</td><td>幾乎無補液，最能展現基酒本身的酸度與礦物感</td></tr>
            <tr><td>Extra Brut</td><td>0–6 克</td><td>極乾，僅比 Brut Nature 略帶柔和</td></tr>
            <tr><td>Brut ★ 最常見</td><td>0–12 克</td><td>乾爽但不生硬，是加州精品氣泡酒最主流的等級</td></tr>
            <tr><td>Extra Dry</td><td>12–17 克</td><td>易誤解為「較乾」，實際上比 Brut 略甜</td></tr>
            <tr><td>Demi-Sec</td><td>32–50 克</td><td>明顯的甜感，適合搭配甜點</td></tr>
          </tbody>
        </table>
      </div>
    </div>`
  },

  {
    title: '隆河品種在加州：Rhône Rangers 的故事',
    content: `<div class="california-rhone">
      <h3>🌿 Rhône Rangers — 加州的隆河革命</h3>
      <p>1980 年代，一群富有冒險精神的加州釀酒師——後於 1998 年正式成立非營利組織「Rhône Rangers」——開始大量種植法國隆河品種（Syrah、Grenache、Mourvèdre、Viognier），並以加州自由的風土和釀酒技術重新詮釋這些品種。1989 年 Tablas Creek Vineyard 在帕索羅布爾斯的建立，更把這股風潮推向以克隆株引種為基礎的第二波高峰。</p>
      <div class="gsm-blend">
        <h4>🍷 GSM 混調：為何三個品種放在一起</h4>
        <p>GSM（Grenache–Syrah–Mourvèdre）混調源自法國 Châteauneuf-du-Pape 的傳統邏輯：三個品種截然不同的優缺點恰好互補——Grenache 提供酒精度與甜美果味卻單寧薄弱；Syrah 補上顏色、香料與結構；Mourvèdre 則帶來深沉的野味、肉感單寧與陳年潛力。加州 Rhône Rangers 完整複製了這套混調哲學，並常額外加入 Counoise 增添清爽的紅色莓果活力。</p>
      </div>
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
              <li>常作為 GSM 混調的酒精度與甜潤果味來源</li>
            </ul>
          </div>
        </div>
        <div class="rv-card red">
          <h4>🍷 Mourvèdre（慕維得爾）</h4>
          <p class="rv-origin">原產：西班牙（Monastrell），在法國 Bandol 表現最經典</p>
          <div class="rv-california">
            <h5>加州風格</h5>
            <ul>
              <li>晚熟、需要充足熱量才能完全成熟，因此多見於帕索東側或內陸溫暖地塊</li>
              <li>帶來野味、皮革、肉感單寧，是 GSM 混調中負責「深度」與陳年潛力的角色</li>
              <li>單一品種裝瓶較少見，多作為混調的骨架來源</li>
            </ul>
          </div>
        </div>
        <div class="rv-card red">
          <h4>🍷 Zinfandel（金粉黛）— 加州靈魂品種</h4>
          <p class="rv-origin">DNA 追溯：克羅埃西亞 Crljenak Kaštelanski（與義大利 Primitivo 同源）</p>
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
    title: 'Sangiovese 在加州：一段跌宕起伏的義大利實驗',
    content: `<div class="california-sangiovese">
      <h3>🇮🇹 Cal-Ital 運動：從 Chianti Station 到 Atlas Peak</h3>
      <p>隆河品種不是加州唯一的「舊世界移植實驗」。Sangiovese（Chianti 的主力品種）在加州也走過一段從熱潮到退燒、如今逐漸回穩的曲折歷史。</p>
      <div class="sangiovese-timeline">
        <div class="timeline-container">
          <div class="timeline-item">
            <div class="timeline-badge ancient">1886</div>
            <div class="timeline-content"><strong>🍇 最早的種植記錄</strong><p>Seghesio 家族移民 Sonoma County，在 Italian Swiss Colony 旗下種植了一片包含 Sangiovese 的傳統 Chianti 混調園「Chianti Station」，是加州已知最早的 Sangiovese 種植紀錄之一。</p></div>
          </div>
          <div class="timeline-item">
            <div class="timeline-badge">1987</div>
            <div class="timeline-content"><strong>🏔️ Atlas Peak 計畫啟動</strong><p>托斯卡尼名莊 Antinori 家族的 Piero Antinori 相中 Napa 東側 Atlas Peak 的石灰岩高原，判斷其晝夜溫差與土壤條件適合 Sangiovese，開始種植試驗。</p></div>
          </div>
          <div class="timeline-item">
            <div class="timeline-badge">1990s</div>
            <div class="timeline-content"><strong>📈 Cal-Ital 熱潮</strong><p>Robert Pepi、Ferrari-Carano 等酒莊跟進種植，加州 Sangiovese 種植面積一度攀升至約 3,000 英畝，媒體稱之為「Cal-Ital」運動。</p></div>
          </div>
          <div class="timeline-item">
            <div class="timeline-badge modern">1997 至今</div>
            <div class="timeline-content"><strong>📉 退燒與回穩</strong><p>由於克隆株選擇不當、消費市場對加州 Sangiovese 認知度不足，許多酒莊將其視為副業而非主力品種，熱潮消退，種植面積回落至約 1,500 英畝，但少數堅持下來的酒莊如今釀出品質扎實的作品。</p></div>
          </div>
        </div>
      </div>
      <p class="sangiovese-lesson">💡 教學意義：Sangiovese 的興衰史是一堂重要的風土適應課——移植一個品種不能只看氣候相似度（Atlas Peak 的石灰岩與晝夜溫差確實接近托斯卡尼），克隆株選擇、市場認知與釀酒團隊的長期投入同樣是決定成敗的關鍵變數，這也是 Rhône Rangers 運動能長期成功、而 Cal-Ital 運動相對受限的部分原因。</p>
    </div>`
  },

  {
    title: 'Zinfandel 老藤案例研究：Ridge 與 Turley',
    content: `<div class="zin-case-studies">
      <h3>🏛️ 兩種詮釋老藤 Zinfandel 的哲學</h3>
      <div class="estates-grid">
        <div class="estate-card">
          <h4>Ridge Vineyards</h4>
          <p class="estate-location">Dry Creek Valley（Lytton Springs）／Santa Cruz Mountains</p>
          <p class="estate-story">1962 年創立，釀酒師 Paul Draper 長年堅持極簡釀造哲學：野生酵母發酵、美國橡木桶（而非法國桶）、成分標示透明化（Ridge 是最早在酒標上列出完整成分的加州酒莊之一）。Lytton Springs 老藤園混植 Zinfandel、Petite Sirah、Carignane，延續加州早期「田間混調」（Field Blend）傳統。</p>
          <p class="estate-style">風格：透明、質樸，展現老藤田間混調的複雜香料與野莓層次</p>
        </div>
        <div class="estate-card">
          <h4>Turley Wine Cellars</h4>
          <p class="estate-location">Napa 與加州多處老藤園（含 Lodi、Paso Robles、Amador）</p>
          <p class="estate-story">1993 年由 Larry Turley 創立，以搶救全加州各地瀕臨拔除的百年老藤園聞名，單一葡萄園裝瓶策略讓消費者得以直接比較不同老藤園的風土差異，是加州老藤保存運動最重要的推手之一。</p>
          <p class="estate-style">風格：高酒精度、極致濃縮，黑莓果醬、甘草、胡椒的強烈表現</p>
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
            question: '與美國橡木桶相比，法國橡木桶的木材化學特徵是什麼？',
            options: ['A. 木紋較寬鬆，內酯含量更高', 'B. 木紋緊密，內酯含量較低但單寧（Ellagitannin）含量較高', 'C. 完全不含任何酚類化合物', 'D. 天然香草醛含量遠高於美國橡木'],
            correct: 1,
            explanation: '法國橡木（Quercus petraea）木紋緊密，內酯（Oak Lactone）含量低，椰子/香草感較內斂，但單寧含量較高，帶來更明顯的結構支撐，風味融入速度較慢也更和諧。'
          },
          {
            type: 'single',
            question: '橡木桶製程中的「露天風乾（Seasoning）」步驟，其主要目的是什麼？',
            options: ['A. 增加木材重量', 'B. 讓雨水自然淋洗出木材中過於粗澀的單寧與苦味物質', 'C. 讓木材變得更容易燃燒', 'D. 減少木材的天然孔隙'],
            correct: 1,
            explanation: '桶板需在露天木材場風乾 18–36 個月，讓自然的雨水淋洗作用去除木材中過於粗澀的單寧與苦味物質，風乾時間長短直接影響最終橡木桶的細緻程度。'
          },
          {
            type: 'single',
            question: '「Malolactic Fermentation（MLF）」對加州 Chardonnay 的主要影響是什麼？',
            options: ['A. 增加酒精度', 'B. 將尖銳的蘋果酸轉化為柔和的乳酸，並產生雙乙醯帶來奶油感', 'C. 增加葡萄酒的糖分', 'D. 消除酒精中的有害化合物'],
            correct: 1,
            explanation: 'MLF（乳酸轉換）將蘋果酸（酸度尖銳）轉化為乳酸（更柔和），同時產生 Diacetyl（雙乙醯）帶來奶油質地。完全進行 MLF 的加州 Chardonnay 就是著名的「奶油風格」Chardonnay。'
          },
          {
            type: 'single',
            question: '在傳統法氣泡酒的除渣（Disgorgement）步驟中，發生了什麼事？',
            options: ['A. 加入酵母開始二次發酵', 'B. 將瓶口浸入冷凍鹽水，凍結含酒泥的瓶頸冰栓後排出，使酒液澄澈', 'C. 把酒瓶完全倒置靜置一年', 'D. 直接把整瓶酒倒掉重新裝瓶'],
            correct: 1,
            explanation: '除渣是將已完成轉瓶、酒泥集中於瓶口的酒瓶浸入冷凍鹽水槽，凍結含酒泥的瓶頸形成冰栓，開瓶時瓶內壓力自動把冰渣彈出，讓酒液維持澄澈，隨後才進行補液定裝。'
          },
          {
            type: 'single',
            question: '氣泡酒甜度分級中，「Brut」等級的每公升殘糖量大約落在？',
            options: ['A. 32–50 克', 'B. 12–17 克', 'C. 0–12 克', 'D. 完全 0 克，不可有任何殘糖'],
            correct: 2,
            explanation: 'Brut 是加州精品氣泡酒最主流的甜度等級，每公升殘糖量落在 0–12 克之間，乾爽但不至於過於生硬；比它更乾的是 Extra Brut（0–6 克）與 Brut Nature（0–3 克）。'
          },
          {
            type: 'single',
            question: 'GSM 混調（Grenache–Syrah–Mourvèdre）中，Mourvèdre 主要負責提供什麼特質？',
            options: ['A. 花香與酒體圓潤感', 'B. 酒精度與甜美果味', 'C. 野味、肉感單寧與陳年潛力', 'D. 高酸與清爽的紅色莓果'],
            correct: 2,
            explanation: 'GSM 混調中，Grenache 提供酒精度與甜美果味但單寧薄弱，Syrah 補上顏色與香料結構，Mourvèdre 則帶來深沉野味、肉感單寧與陳年潛力，三者互補源自法國 Châteauneuf-du-Pape 的傳統混調邏輯。'
          },
          {
            type: 'single',
            question: 'Atlas Peak 的 Sangiovese 種植計畫最初是由哪個托斯卡尼名莊家族主導？',
            options: ['A. Frescobaldi 家族', 'B. Antinori 家族（Piero Antinori）', 'C. Gaja 家族', 'D. Ricasoli 家族'],
            correct: 1,
            explanation: '1987 年，托斯卡尼名莊 Antinori 家族的 Piero Antinori 相中 Napa 東側 Atlas Peak 的石灰岩高原，判斷其晝夜溫差與土壤條件適合 Sangiovese，展開種植試驗，是 1990 年代「Cal-Ital」熱潮的起點之一。'
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
            question: '加州沿岸湧升流（Upwelling）造成海水異常寒冷的直接機制是？',
            options: ['A. 海底火山活動', 'B. 風力驅動 Ekman 輸送把表層暖水推離海岸，深層冷水上湧遞補', 'C. 極地融冰注入', 'D. 潮汐週期變化'],
            correct: 1,
            explanation: '等赤道風配合科氏力造成的 Ekman 輸送，使表層海水離岸，深層冷水上湧遞補，是加州沿岸終年偏低海水溫度的根本機制。'
          },
          {
            type: 'single',
            question: 'Petaluma Gap AVA 在美國 AVA 認定史上最特殊之處是？',
            options: ['A. 面積全加州最大', 'B. 邊界以持續風速門檻劃定，而非山脊或河流', 'C. 完全不受海霧影響', 'D. 是加州最早成立的 AVA'],
            correct: 1,
            explanation: 'Petaluma Gap 於 2017 年獲認定，邊界依「太平洋風持續達每小時 8 英里以上」的氣象數據劃定，是美國史上第一個以風速界定範圍的 AVA。'
          },
          {
            type: 'single',
            question: 'Rutherford 與 Oakville 風格差異的地質根源主要來自？',
            options: ['A. 完全不同的品種選擇', 'B. 兩地在同一沖積扇系統中的位置不同，沉積顆粒組成不同', 'C. Oakville 完全不受海霧影響', 'D. 兩地土壤類型毫無關聯'],
            correct: 1,
            explanation: 'Rutherford 與 Oakville 同屬 Rutherford Bench 沖積扇系統，Oakville 靠近扇心礫石較粗，Rutherford 偏扇緣土質混合更均勻，因而造就「Rutherford Dust」單寧與 Oakville 更緊緻結構的差異。'
          },
          {
            type: 'single',
            question: '聖巴巴拉的橫向山脈（Transverse Ranges）呈東西走向的地質成因是？',
            options: ['A. 隨機地形侵蝕', 'B. 太平洋板塊運動方向局部彎曲，垂直擠壓力把地層摺曲旋轉近 90 度', 'C. 火山噴發造成', 'D. 人工開墾改變地形'],
            correct: 1,
            explanation: '約 2,000 萬年前太平洋板塊運動出現局部彎曲（Big Bend），產生的擠壓力把地層摺曲旋轉近 90 度，連帶抬升海底沉積岩層，形成罕見的東西橫向山脈。'
          },
          {
            type: 'single',
            question: '帕索羅布爾斯西側最大的土壤特色是？',
            options: ['A. 火山玄武岩', 'B. 沙質壤土', 'C. 石灰岩／鈣質土壤', 'D. 礫石黏土'],
            correct: 2,
            explanation: 'Paso Robles 西側的石灰岩／鈣質土壤源自古老海底 Monterey 地層抬升出露，類似法國 Châteauneuf-du-Pape，非常適合隆河品種。'
          },
          {
            type: 'single',
            question: '與美國橡木桶相比，法國橡木桶賦予葡萄酒的主要特徵是？',
            options: ['A. 更明顯的椰子和甜香草香氣', 'B. 木紋較緊密，單寧含量較高，風味融入更和諧細緻', 'C. 成本遠低於美國橡木桶', 'D. 完全不含任何酚類物質'],
            correct: 1,
            explanation: '法國橡木木紋緊密、內酯含量較低但單寧含量較高，萃取速度較慢，因此風味與酒液的融合更和諧細緻。'
          },
          {
            type: 'single',
            question: '傳統法氣泡酒工序中，「補液定裝（Dosage）」的主要作用是？',
            options: ['A. 啟動二次發酵', 'B. 除渣後補足液位並決定最終甜度等級', 'C. 讓酒液產生氣泡', 'D. 去除酒液顏色'],
            correct: 1,
            explanation: "除渣後液面會略降，需補入含糖與基酒的補液液（Liqueur d'Expédition）以補足液位，同時這也是決定最終酒款甜度等級（如 Brut、Extra Dry）的關鍵步驟。"
          },
          {
            type: 'single',
            question: 'GSM 混調中三個品種互補的邏輯是什麼？',
            options: ['A. 三者風味完全相同，只是產量不同', 'B. Grenache 提供酒精與果味，Syrah 補結構與香料，Mourvèdre 帶來野味與陳年潛力', 'C. 三者都需要極端寒冷氣候', 'D. 只有 Syrah 適合加州種植'],
            correct: 1,
            explanation: 'GSM 混調源自法國 Châteauneuf-du-Pape：Grenache 提供酒精度與甜美果味但單寧薄弱，Syrah 補上顏色與香料結構，Mourvèdre 帶來野味、肉感單寧與陳年潛力，三者互補構成完整酒體。'
          },
          {
            type: 'single',
            question: 'Atlas Peak 的 Sangiovese 種植計畫是哪個托斯卡尼家族在 1987 年主導展開的？',
            options: ['A. Gaja 家族', 'B. Antinori 家族', 'C. Frescobaldi 家族', 'D. Mondavi 家族'],
            correct: 1,
            explanation: '1987 年 Antinori 家族的 Piero Antinori 相中 Atlas Peak 的石灰岩高原展開 Sangiovese 種植試驗，是加州「Cal-Ital」運動最具代表性的案例之一。'
          },
          {
            type: 'single',
            question: '哪個香檳大廠於 1973 年率先在加州 Napa Valley 設廠？',
            options: ['A. Roederer', 'B. Taittinger', 'C. Moët & Chandon（Domaine Chandon）', 'D. Krug'],
            correct: 2,
            explanation: 'Moët & Chandon 於 1973 年在 Napa Valley Yountville 建立 Domaine Chandon，是第一個在加州設立分廠的頂級香檳大廠。'
          },
          {
            type: 'single',
            question: 'Sta. Rita Hills 著名的矽藻土成因是？',
            options: ['A. 工業廢棄物堆積', 'B. 遠古矽藻等海洋微生物遺骸沉積於海床後，隨板塊擠壓隆起出露', 'C. 火山灰快速冷卻結晶', 'D. 沙漠風沙長期堆積'],
            correct: 1,
            explanation: '矽藻土是遠古矽藻遺骸長期沉積於海床、形成富含二氧化矽的沉積層，後因橫向山脈的板塊擠壓活動隆起出露地表，質輕多孔、排水力極強。'
          },
          {
            type: 'single',
            question: '2014 年 TTB 認定的帕索羅布爾斯 11 個子 AVA，對原本 Paso Robles AVA 整體範圍的影響是？',
            options: ['A. 大幅擴大整體範圍', 'B. 完全不改變整體範圍，僅做內部細分', 'C. 取消 Paso Robles 名稱', 'D. 分割成兩個獨立產區'],
            correct: 1,
            explanation: '2014 年的 11 個子 AVA 認定僅反映內部風土差異，完全不改變原本 Paso Robles AVA 的整體邊界範圍，屬於內部細分。'
          }
        ]
      }
    }
  }
]
