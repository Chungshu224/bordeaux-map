/**
 * CA-L3-4 跨產區加州配餐實務與對比品飲
 * 進階課程：加州 Farm-to-Table 哲學、進階配餐理論、多道式對比配餐設計實務，以及專業品飲筆記練習
 *
 * 內容查證來源（2026 年 8 月）：
 * - Chez Panisse / Alice Waters 官方沿革（1971 年創立於柏克萊）— Farm-to-Table 運動起源
 * - GuildSomm — Advanced/Master Sommelier 課程中「congruent vs contrasting pairing」進階配餐理論框架
 * - Napa Valley Vintners、Discover California Wines — 各產區代表品種與風格描述
 * - 本課配餐案例為課程原創教學設計，依據加州各 AVA 已於 CA-L1/L2/L3 系列驗證過的風土與品種特性推演而成，非引用特定餐廳菜單
 * 註：具體菜單、餐廳案例為教學示範用途；產區風格描述均與本課程系列其他章節的查證內容一致。
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          加州是 Farm-to-Table（農場到餐桌）飲食文化的發源地，Alice Waters 在 1971 年創立的 Chez Panisse 徹底改變了美國的飲食觀念。加州葡萄酒與加州料理之間有著天然的親密關係——兩者都強調新鮮食材、地域個性、季節性，以及大膽而不失優雅的風格。本課帶您掌握專業級的加州配餐思維、進階配餐理論框架，並透過一套完整的跨產區對比多道式配餐設計實務，練習侍酒師證照等級的菜單規劃能力。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🍽️ 掌握加州 Farm-to-Table 配餐哲學與進階配餐理論</h4>
            <p>理解加州料理的核心原則，以及 Congruent（共鳴）vs Contrasting（對比）配餐的專業框架</p>
          </div>
          <div class="point-item">
            <h4>🗺️ 跨產區配餐矩陣與多道式對比品飲設計</h4>
            <p>系統化掌握 Napa、Sonoma、Santa Barbara、Paso Robles、Sierra Foothills 各產區的最佳配餐搭配，並學會設計一套完整的跨產區對比套餐酒單</p>
          </div>
          <div class="point-item">
            <h4>📝 專業品飲筆記與盲品推理技巧</h4>
            <p>學習如何以系統性的方法記錄加州葡萄酒的視覺、嗅覺、味覺特徵，並運用結構化推理進行跨產區對比盲品</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: 'Farm-to-Table：加州飲食文化革命',
    content: `<div class="farm-to-table">
      <h3>🌱 Farm-to-Table — 加州改變世界的飲食哲學</h3>
      <div class="ftt-origin">
        <h4>🏛️ Alice Waters 與 Chez Panisse（1971）</h4>
        <p>1971 年，Alice Waters 在加州柏克萊創立了 <strong>Chez Panisse</strong> 餐廳，確立了美國 Farm-to-Table 飲食運動的基石。她的核心理念：</p>
        <ul>
          <li>🌿 只使用當季、當地採購的新鮮食材</li>
          <li>👨‍🌾 直接與農夫建立合作關係，了解食材的來源</li>
          <li>🍽️ 菜單每天依當季最好的食材變化，而非固定</li>
          <li>🔥 簡單烹調技法，讓食材的天然風味說話</li>
        </ul>
        <p>這個哲學完美呼應了加州葡萄酒的精神——以風土說話，讓葡萄的品種和產地特性自然流露，而非過度釀造。</p>
      </div>
      <div class="ftt-pairing-philosophy">
        <h4>🍷 加州配餐的核心邏輯</h4>
        <div class="pairing-principles">
          <div class="pp-item">
            <strong>地域配地域（Regional Pairing）</strong>
            <p>Napa Cabernet + 加州草飼牛排；Sonoma Chardonnay + 太平洋龍蝦；Santa Barbara Pinot + 中央海岸鮭魚。「同地區的食物和葡萄酒通常最和諧」。</p>
          </div>
          <div class="pp-item">
            <strong>重量與重量（Weight Matching）</strong>
            <p>豐盈的橡木桶 Chardonnay 搭配奶油白醬；輕盈的 Pinot Noir 搭配鮭魚或鴨肉；飽滿的 Cabernet 搭配牛排或羊排。</p>
          </div>
          <div class="pp-item">
            <strong>對比搭配（Contrasting Pairing）</strong>
            <p>高酸度 Sauvignon Blanc 搭配油脂豐富的山羊起司——酸度切穿油脂，使兩者更清爽；甜 Zinfandel 搭配烤肉醬——甜味中和了煙燻的苦感。</p>
          </div>
          <div class="pp-item">
            <strong>季節性搭配（Seasonal Matching）</strong>
            <p>夏季：清爽的 Sonoma Coast Rosé + 烤海鮮；秋冬：Rutherford Cabernet + 慢燉牛頰肉；春季：Russian River Chardonnay + 松露義大利麵。</p>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: '進階配餐理論：Congruent vs Contrasting 框架',
    highlights: [
      { id: 'a1', icon: '🎵', title: 'Congruent Pairing（共鳴式配餐）', content: '找出酒與菜共享的風味或質地元素（如兩者皆有橡木香草調性、或皆偏甜潤），透過「疊加相似元素」放大彼此的愉悅感受。' },
      { id: 'a2', icon: '⚡', title: 'Contrasting Pairing（對比式配餐）', content: '刻意運用酒與菜之間的差異（如高酸對高脂、單寧對蛋白質、甜對辣）互相制衡，創造出單獨品嚐時不存在的平衡感。' },
      { id: 'a3', icon: '🌉', title: 'Bridging Ingredient（橋接食材）', content: '在醬汁或配菜中加入能同時呼應酒與主食材的元素（如用黑醋栗醬連結 Cabernet 的果香與烤肉），是進階配餐師常用的手法。' }
    ],
    content: `<div class="advanced-pairing-theory">
      <h3>🎓 侍酒師證照等級的配餐分析框架</h3>
      <p>初階配餐學習「什麼配什麼」，進階配餐則要理解「為什麼這樣配」。以下框架是 Advanced/Master Sommelier 等級課程中常用的分析工具，適用於任何產區，本課以加州酒款示範應用。</p>
      <div class="apt-grid">
        <div class="apt-card">
          <h4>🎵 Congruent（共鳴式）配餐</h4>
          <p>尋找酒與菜之間<strong>共享的風味或質地元素</strong>，讓兩者疊加、互相放大。</p>
          <div class="apt-example">
            <p><strong>案例：</strong>Napa 橡木桶 Chardonnay（奶油、香草、烤堅果調性）+ 奶油龍蝦醬義大利麵</p>
            <p><strong>原理：</strong>酒中的橡木香草與奶油質地，與菜餚的奶油醬汁形成風味共鳴，兩者疊加後整體感受更圓潤、更一致，而非互相對抗。</p>
          </div>
        </div>
        <div class="apt-card">
          <h4>⚡ Contrasting（對比式）配餐</h4>
          <p>刻意運用<strong>酒與菜的差異性元素</strong>互相制衡，創造出單獨品嚐時不存在的新平衡。</p>
          <div class="apt-example">
            <p><strong>案例：</strong>高酸度 Santa Barbara Sauvignon Blanc + 油脂豐富的山羊起司</p>
            <p><strong>原理：</strong>起司的乳脂厚重感原本會讓口腔感覺油膩，但酒的高酸度像一把刀切開油脂、清潔味蕾，兩者的「差異」正是搭配成功的關鍵——這與 Congruent 配餐的邏輯恰好相反。</p>
          </div>
        </div>
        <div class="apt-card">
          <h4>🌉 Bridging Ingredient（橋接食材）技巧</h4>
          <p>當酒與主食材本身風味落差較大時，進階配餐師會在<strong>醬汁或配菜</strong>中加入能同時呼應兩者的元素，作為風味橋樑。</p>
          <div class="apt-example">
            <p><strong>案例：</strong>Sierra Foothills 老藤 Zinfandel（黑莓果醬、香料調性）+ 香煎鴨胸——若僅止於此，酒的甜潤果香與鴨肉的野味可能略顯突兀；加入<strong>黑莓香料醬汁</strong>作為橋接食材後，醬汁同時呼應了酒的果香與鴨肉的濃郁度，讓整體搭配更完整。</p>
          </div>
        </div>
        <div class="apt-card">
          <h4>⚖️ 單寧與蛋白質／脂肪的交互作用</h4>
          <p>單寧（Tannin）會與唾液中的蛋白質結合並沉澱，產生澀感；當同時攝入肉類蛋白質與脂肪時，單寧優先與食物中的蛋白質結合，唾液蛋白質的沉澱減少，主觀澀感隨之降低，同時肉汁的鮮味（Umami）也會讓酒體感覺更圓潤。這正是「紅肉配高單寧紅酒」歷久不衰的生理化學基礎。</p>
        </div>
      </div>
      <div class="apt-warning">
        <h4>⚠️ 進階配餐的常見陷阱</h4>
        <ul>
          <li><strong>高單寧 + 高辣度：</strong>單寧與辣椒素（Capsaicin）會互相放大彼此的刺激感，讓兩者都顯得更粗糙——應改以低單寧、略帶甜潤的酒款（如 Zinfandel）搭配辛辣菜餚</li>
          <li><strong>高酸海鮮料理 + 高單寧紅酒：</strong>魚類中的不飽和脂肪酸遇上紅酒單寧和鐵質，容易產生令人不悅的金屬腥味（常見於生蠔配厚重紅酒），應避免</li>
          <li><strong>甜點 + 不甜的酒：</strong>甜點的糖分會讓不甜的酒喝起來顯得更酸澀、更單薄，甜點配酒的基本原則是「酒的甜度須等於或高於菜餚的甜度」</li>
        </ul>
      </div>
    </div>`
  },

  {
    title: '跨產區配餐矩陣',
    content: `<div class="pairing-matrix">
      <h3>🗺️ 加州五大產區配餐指南</h3>
      <div class="pm-regions">
        <div class="pm-region napa">
          <div class="pm-region-header">
            <h4>🏔️ Napa Valley</h4>
            <p class="pm-subtitle">濃郁、豐滿、陳年型</p>
          </div>
          <div class="pm-wines">
            <div class="pm-wine-item">
              <strong>Napa Cabernet Sauvignon</strong>
              <p class="pm-desc">黑醋栗、雪松木、礦石、豐厚單寧</p>
              <div class="pm-pairings">
                <h6>最佳搭配</h6>
                <ul>
                  <li>🥩 Prime Rib（頂級肋眼牛排）— 單寧與蛋白質結合，柔化肉質</li>
                  <li>🫘 慢燉牛頰肉（Braised Beef Cheeks）— 肉汁的濃郁與酒的果味互補</li>
                  <li>🧀 陳年硬質起司（Aged Cheddar / Manchego）— 鹽分中和單寧的苦感</li>
                </ul>
              </div>
              <div class="pm-avoid">
                <h6>避免搭配</h6>
                <ul>
                  <li>❌ 清淡白魚（魚的細緻風味被強烈 Cabernet 壓制）</li>
                  <li>❌ 甜點（甜食使酒的單寧更顯苦澀）</li>
                </ul>
              </div>
            </div>
            <div class="pm-wine-item">
              <strong>Napa Chardonnay（橡木桶）</strong>
              <p class="pm-desc">奶油、烤麵包、桃子、香草</p>
              <div class="pm-pairings">
                <ul>
                  <li>🦞 龍蝦（奶油白醬）— 奶油的質感完美協調</li>
                  <li>🐔 奶油烤雞 — 白酒與雞肉的黃金搭配</li>
                  <li>🧈 白醬義大利麵 — 橡木桶香草感與奶油醬的呼應</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="pm-region sonoma">
          <div class="pm-region-header">
            <h4>🌊 Sonoma County</h4>
            <p class="pm-subtitle">優雅、多元、海洋性</p>
          </div>
          <div class="pm-wines">
            <div class="pm-wine-item">
              <strong>Russian River Valley Pinot Noir</strong>
              <p class="pm-desc">草莓、玫瑰、香料、絲滑單寧</p>
              <div class="pm-pairings">
                <ul>
                  <li>🐟 大西洋鮭魚（烤/香煎）— 魚的油脂與 Pinot 的果酸完美平衡</li>
                  <li>🦆 烤鴨 — 中等酒體的 Pinot 與禽肉的完美搭配</li>
                  <li>🍄 松露義大利麵 — 松露的泥土感呼應 Pinot 的礦土特性</li>
                </ul>
              </div>
            </div>
            <div class="pm-wine-item">
              <strong>Dry Creek Zinfandel</strong>
              <p class="pm-desc">黑莓果醬、黑胡椒、甘草、高酒精</p>
              <div class="pm-pairings">
                <ul>
                  <li>🍖 烤豬肋排（BBQ）— 煙燻甜醬與果醬 Zinfandel 的絕配</li>
                  <li>🌶️ 辣味食物（墨西哥/美式 BBQ）— 果甜調性緩和辛辣的刺激感</li>
                  <li>🍕 義大利臘腸披薩 — 義大利血統的 Zinfandel（Primitivo）天生就懂這個</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="pm-region santa-barbara">
          <div class="pm-region-header">
            <h4>🎬 Santa Barbara County</h4>
            <p class="pm-subtitle">涼爽、精緻、高酸</p>
          </div>
          <div class="pm-wines">
            <div class="pm-wine-item">
              <strong>Santa Rita Hills Pinot Noir</strong>
              <p class="pm-desc">覆盆子、石榴、玫瑰花瓣、明亮酸度</p>
              <div class="pm-pairings">
                <ul>
                  <li>🦑 烤花枝/章魚 — 海鮮的鮮甜與 Pinot 的清爽酸度</li>
                  <li>🍅 番茄燉雞 — 酸度與酸味的和諧共鳴</li>
                  <li>🐷 香煎豬排佐蘋果醬 — 果肉感與 Pinot 的果香呼應</li>
                </ul>
              </div>
            </div>
            <div class="pm-wine-item">
              <strong>Santa Ynez Valley Syrah</strong>
              <p class="pm-desc">黑胡椒、橄欖、紫羅蘭、中等酒體</p>
              <div class="pm-pairings">
                <ul>
                  <li>🐑 烤羊腿 — 羊肉的野性與 Syrah 的黑胡椒野味感</li>
                  <li>🫒 地中海風烤蔬菜 — 橄欖和香草呼應 Syrah 的香料感</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="pm-region paso-robles">
          <div class="pm-region-header">
            <h4>🪨 Paso Robles</h4>
            <p class="pm-subtitle">豐滿、隆河風、石灰岩礦感</p>
          </div>
          <div class="pm-wines">
            <div class="pm-wine-item">
              <strong>Paso Robles Rhône Blend（GSM）</strong>
              <p class="pm-desc">紅莓、香料、黑胡椒、中至豐滿酒體</p>
              <div class="pm-pairings">
                <ul>
                  <li>🥩 牛腩燉肉（Provençal 風）— 南法燉菜與 GSM 的家鄉搭配</li>
                  <li>🫙 豬肉肉醬 — 肉脂與隆河果味的傳統組合</li>
                  <li>🧀 Comté 起司 — 硬質起司的堅果感與豐滿單寧</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="pm-region sierra">
          <div class="pm-region-header">
            <h4>⛰️ Sierra Foothills</h4>
            <p class="pm-subtitle">老藤個性、礦石感、鄉村風</p>
          </div>
          <div class="pm-wines">
            <div class="pm-wine-item">
              <strong>Amador County Old Vine Zinfandel</strong>
              <p class="pm-desc">黑色水果乾、鐵礦石感、香料、高酒精</p>
              <div class="pm-pairings">
                <ul>
                  <li>🍖 野味燉肉（鹿肉/野豬）— 野性對野性，礦石感對鐵質</li>
                  <li>🍕 義大利肉醬麵 — 祖先的記憶（Zinfandel = Primitivo）</li>
                  <li>🧇 培根和起司奶蛋燒 — 煙燻和蛋奶的組合</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: '實務演練：跨產區多道式對比套餐設計',
    content: `<div class="tasting-menu-design">
      <h3>🍽️ 六道式加州跨產區對比品飲晚宴設計</h3>
      <p>這是一套侍酒師證照等級的實務演練——設計一場以「橫跨加州五大產區」為主題的多道式套餐酒單，每道菜選用不同 AVA 的代表酒款，並運用前述 Congruent／Contrasting／Bridging 三種技巧，讓整場晚宴的酒單呈現有邏輯的「強度遞增」曲線，而不是隨機排列。</p>
      <div class="tm-course">
        <div class="tm-num">1</div>
        <div class="tm-body">
          <h4>🥂 迎賓小點（Amuse-Bouche）</h4>
          <p class="tm-dish">生蠔佐柚子醋凍</p>
          <p class="tm-wine">配酒：<strong>Sonoma Coast 氣泡酒（傳統法 Blanc de Blancs）</strong></p>
          <p class="tm-logic"><strong>配餐邏輯（Contrasting）：</strong>氣泡的高酸與清爽礦物感切穿生蠔的海鹹與滑潤，開場即建立味蕾的潔淨基準線，同時呼應加州海岸型 AVA 的涼爽風土敘事，為後續產區之旅定調。</p>
        </div>
      </div>
      <div class="tm-course">
        <div class="tm-num">2</div>
        <div class="tm-body">
          <h4>🥬 前菜</h4>
          <p class="tm-dish">季節時蔬沙拉佐山羊起司與烤核桃（Chez Panisse 風格）</p>
          <p class="tm-wine">配酒：<strong>Santa Barbara（Sta. Rita Hills）Sauvignon Blanc 或未經橡木桶 Chenin Blanc</strong></p>
          <p class="tm-logic"><strong>配餐邏輯（Contrasting）：</strong>高酸度白酒切開山羊起司的乳脂厚重感，堅果的烘烤調性與酒中礦物感形成微妙共鳴，向賓客介紹 Farm-to-Table 哲學的核心精神。</p>
        </div>
      </div>
      <div class="tm-course">
        <div class="tm-num">3</div>
        <div class="tm-body">
          <h4>🐟 魚類主菜</h4>
          <p class="tm-dish">香煎野生鮭魚佐松露義大利麵</p>
          <p class="tm-wine">配酒：<strong>Russian River Valley Pinot Noir（Sonoma）</strong></p>
          <p class="tm-logic"><strong>配餐邏輯（Congruent + Bridging）：</strong>鮭魚油脂與 Pinot Noir 的果酸形成經典平衡；松露的泥土氣息與 Pinot 的礦石／蕈菇尾韻共鳴，松露醬汁在此扮演「橋接食材」，把海鮮與紅酒兩個看似衝突的元素連結起來——示範紅酒配魚並非禁忌，關鍵在於選對品種與橋接手法。</p>
        </div>
      </div>
      <div class="tm-course">
        <div class="tm-num">4</div>
        <div class="tm-body">
          <h4>🦆 禽類主菜（中場過渡）</h4>
          <p class="tm-dish">香料烤鴨胸佐黑莓香料醬汁</p>
          <p class="tm-wine">配酒：<strong>Sierra Foothills（Amador County）老藤 Zinfandel</strong></p>
          <p class="tm-logic"><strong>配餐邏輯（Bridging）：</strong>Zinfandel 本身的黑莓果醬調性直接與醬汁呼應，鴨肉的野味與酒中的香料尾韻相互烘托——此道菜是整場酒單「強度」從白轉紅的關鍵轉折點，也示範老藤 Zinfandel 作為多功能配餐酒款的實務價值。</p>
        </div>
      </div>
      <div class="tm-course">
        <div class="tm-num">5</div>
        <div class="tm-body">
          <h4>🥩 肉類主菜（高潮）</h4>
          <p class="tm-dish">Howell Mountain 風格慢烤牛肋排佐紅酒醬汁</p>
          <p class="tm-wine">配酒：<strong>Napa Valley 山地 Cabernet Sauvignon（如 Howell Mountain 或 Diamond Mountain 產區）</strong></p>
          <p class="tm-logic"><strong>配餐邏輯（Congruent，單寧-蛋白質交互作用）：</strong>整場晚宴的酒體與單寧強度在此達到頂峰。紅肉的蛋白質與脂肪柔化單寧的澀感，肉汁的鮮味（Umami）讓酒體感覺更圓潤飽滿——這是本課「單寧與蛋白質交互作用」理論的實地應用高潮。</p>
        </div>
      </div>
      <div class="tm-course">
        <div class="tm-num">6</div>
        <div class="tm-body">
          <h4>🧀 起司與尾聲</h4>
          <p class="tm-dish">陳年硬質起司拼盤（Aged Cheddar、Manchego）佐蜂蜜與無花果</p>
          <p class="tm-wine">配酒：<strong>Paso Robles 晚摘 Zinfandel 或加州 Port-style 加烈酒（收尾）</strong></p>
          <p class="tm-logic"><strong>配餐邏輯（Congruent）：</strong>起司的鹹鮮與堅果調性、蜂蜜與無花果的天然甜潤，與晚摘/加烈酒款的濃縮果乾風味形成呼應，甜度等於或高於菜餚甜度的原則在此確保收尾不顯單薄，為整場跨產區之旅畫下圓滿句點。</p>
        </div>
      </div>
      <div class="tm-summary">
        <h4>🎯 這套設計示範的專業能力</h4>
        <ul>
          <li>整場酒單依循「氣泡 → 高酸白酒 → 中酒體紅／白 → 高單寧紅酒 → 甜／加烈酒」的強度遞增曲線，避免前面喝了重酒導致後面味蕾疲乏</li>
          <li>五大產區（Sonoma Coast、Santa Barbara、Sonoma、Sierra Foothills、Napa、Paso Robles）依序登場，讓賓客在一餐之內走遍加州的風土光譜</li>
          <li>每一道都明確標示所運用的配餐技巧（Congruent／Contrasting／Bridging），而非憑直覺搭配——這正是證照考試中要求的「說明配餐邏輯」能力</li>
        </ul>
      </div>
    </div>`
  },

  {
    title: '專業品飲筆記：系統性評估加州葡萄酒',
    content: `<div class="tasting-notes">
      <h3>📝 加州葡萄酒的系統性品評方法</h3>
      <p>優秀的品飲筆記是與葡萄酒建立深層關係的工具。以下是針對加州葡萄酒的系統性評估框架，並加入跨產區盲品的結構化推理練習。</p>
      <div class="tasting-framework">
        <div class="tf-step">
          <div class="tf-step-num">1</div>
          <div class="tf-step-content">
            <h4>👁️ 視覺（Visual）</h4>
            <div class="tf-details">
              <p><strong>顏色深度：</strong>淺（Pale） → 中（Medium） → 深（Deep）</p>
              <p><strong>顏色調性（Napa Cabernet 範例）：</strong>深紫紅 → 寶石紅 → 石榴紅（隨年份老化）</p>
              <p><strong>清澈度：</strong>清澈 vs 渾濁（自然酒可能略顯渾濁）</p>
              <p><strong>杯腳（Tears/Legs）：</strong>緩慢的淚腳 = 高酒精或高甘油含量</p>
            </div>
          </div>
        </div>
        <div class="tf-step">
          <div class="tf-step-num">2</div>
          <div class="tf-step-content">
            <h4>👃 嗅覺（Nose / Olfactory）</h4>
            <div class="tf-details">
              <p><strong>果香（Fruit）：</strong></p>
              <ul>
                <li>紅色果香（Red Fruits）：草莓、覆盆子、紅醋栗 → 涼爽 Pinot、Grenache</li>
                <li>黑色果香（Black Fruits）：黑莓、黑醋栗、黑李 → 溫暖 Cabernet、Zinfandel</li>
                <li>熱帶果香（Tropical）：芒果、鳳梨、百香果 → 溫暖 Chardonnay、Viognier</li>
              </ul>
              <p><strong>橡木（Oak）：</strong>香草、雪松、煙燻、焦糖、咖啡 → 桶中熟成強度的指標</p>
              <p><strong>發展香氣（Tertiary / Development）：</strong>皮革、雪松、菸草、菌菇、松露 → 陳年潛力的指標</p>
            </div>
          </div>
        </div>
        <div class="tf-step">
          <div class="tf-step-num">3</div>
          <div class="tf-step-content">
            <h4>👅 味覺（Palate）</h4>
            <div class="tf-details">
              <p><strong>酸度（Acidity）：</strong>低 / 中低 / 中 / 中高 / 高 → 加州涼爽產區普遍中至中高</p>
              <p><strong>單寧（Tannin — 紅酒）：</strong>低 / 中 / 高 ; 質地：粗糙 / 細緻 / 絲滑</p>
              <p><strong>酒體（Body）：</strong>輕盈 / 中等 / 豐滿 → 加州普遍中至豐滿</p>
              <p><strong>酒精感（Alcohol）：</strong>溫暖 vs 熱感 → 低於 14% 通常無熱感，超過 15% 可能產生不適的熱感</p>
              <p><strong>回味（Finish）：</strong>短（< 5 秒）/ 中（5–10 秒）/ 長（> 10 秒）</p>
            </div>
          </div>
        </div>
        <div class="tf-step">
          <div class="tf-step-num">4</div>
          <div class="tf-step-content">
            <h4>📊 總結評估（Conclusion）</h4>
            <div class="tf-details">
              <p><strong>品質等級：</strong>基本 / 可接受 / 良好 / 優秀 / 傑出</p>
              <p><strong>適飲期：</strong>現在 / 1–3 年後 / 5–10 年後 / 10 年以上</p>
              <p><strong>風格定位：</strong>（例如）「偏向新世界風格，果味豐沛，橡木桶影響明顯，適合配餐牛排」</p>
            </div>
          </div>
        </div>
      </div>
      <div class="blind-tasting-method">
        <h4>🕵️ 跨產區盲品的結構化推理法</h4>
        <p>面對「這是哪個加州 AVA」的盲品挑戰時，專業侍酒師依序運用以下推理鏈，而非憑單一線索猜測：</p>
        <ol>
          <li><strong>酒精度／酒體 → 大致氣候分區：</strong>酒精度 14.5% 以上、酒體豐滿 → 傾向溫暖谷地（Napa 核心、Paso Robles）；13% 上下、酒體中等 → 傾向涼爽濱海產區（Santa Rita Hills、Russian River）</li>
          <li><strong>單寧結構 → 山坡 vs 谷地：</strong>單寧緊緻、礦物感強、需要時間開展 → 傾向山地 AVA（Howell Mountain、Mount Veeder，見 CA-L3-1）；單寧圓潤、果味直接 → 傾向谷地沖積土（Oakville、Rutherford）</li>
          <li><strong>酸度與果香色調 → 涼爽帶精確定位：</strong>高酸配紅色果香與海鹽礦感 → 傾向近海霧帶（Sonoma Coast、Santa Maria Valley）</li>
          <li><strong>第三層次香氣 → 陳年狀態與氣候年份：</strong>皮革、蕈菇等發展香氣的出現速度，結合單寧軟化程度，可推估年齡與該年份是否為溫暖／涼爽型年份（見 CA-L3-3 年份分析框架）</li>
        </ol>
      </div>
      <div class="tasting-exercise">
        <h4>🍷 品飲練習：Napa Cabernet vs Santa Barbara Pinot Noir 對比</h4>
        <div class="comparison-notes">
          <div class="cn-side napa-cab">
            <h5>Napa Valley Cabernet Sauvignon（舉例）</h5>
            <ul>
              <li>顏色：深紫紅</li>
              <li>香氣：黑醋栗、雪松、香草、石墨</li>
              <li>酸度：中等</li>
              <li>單寧：高，細緻</li>
              <li>酒體：豐滿</li>
              <li>酒精：14.5%</li>
              <li>回味：長（> 15 秒）</li>
            </ul>
          </div>
          <div class="cn-side sb-pinot">
            <h5>Santa Rita Hills Pinot Noir（舉例）</h5>
            <ul>
              <li>顏色：中等石榴紅</li>
              <li>香氣：覆盆子、玫瑰、香料、礦石</li>
              <li>酸度：中高</li>
              <li>單寧：低，絲滑</li>
              <li>酒體：中等</li>
              <li>酒精：13.5%</li>
              <li>回味：中長（10–12 秒）</li>
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
            question: '以下哪種配餐是加州 Napa Cabernet Sauvignon 的最佳搭配？',
            options: ['A. 生蚵（Oysters）', 'B. 清蒸白魚', 'C. 草飼牛肋眼排（Rib-eye Steak）', 'D. 輕奶油蛋糕'],
            correct: 2,
            explanation: 'Napa Cabernet Sauvignon 的豐滿酒體、高單寧和濃郁黑色果味天生適合搭配富含蛋白質和脂肪的紅肉。單寧與蛋白質結合，軟化肉質的同時葡萄酒本身也變得更柔順。牛排和 Napa Cabernet 是加州飲食文化中的經典組合。'
          },
          {
            type: 'single',
            question: '「Congruent Pairing（共鳴式配餐）」與「Contrasting Pairing（對比式配餐）」最根本的邏輯差異是什麼？',
            options: ['A. Congruent 只適用於白酒，Contrasting 只適用於紅酒', 'B. Congruent 疊加酒與菜共享的相似元素，Contrasting 則運用兩者的差異互相制衡', 'C. 兩者其實是同一種技巧的不同名稱', 'D. Congruent 配餐一定比 Contrasting 配餐更高級'],
            correct: 1,
            explanation: 'Congruent（共鳴式）配餐尋找酒與菜共享的風味或質地元素並疊加放大（如橡木 Chardonnay 配奶油醬汁）；Contrasting（對比式）配餐則刻意運用兩者的差異互相制衡，創造出單獨品嚐時不存在的新平衡（如高酸白酒切開油脂豐富的起司）。兩者是互補而非對立的專業工具，適用情境不同。'
          },
          {
            type: 'single',
            question: '單寧（Tannin）與紅肉搭配時，感受到的澀感為何會降低？',
            options: ['A. 因為肉的熱度會揮發掉酒中的單寧', 'B. 單寧優先與食物中的蛋白質結合，減少了與唾液蛋白質的結合與沉澱，主觀澀感降低', 'C. 因為紅肉本身含有天然的單寧中和劑', 'D. 這只是心理作用，並無實際生理機制'],
            correct: 1,
            explanation: '單寧會與唾液中的蛋白質結合並沉澱，產生澀感；當同時攝入肉類蛋白質與脂肪時，單寧優先與食物中的蛋白質結合，唾液蛋白質的沉澱因此減少，主觀澀感隨之降低，這正是「紅肉配高單寧紅酒」的生理化學基礎。'
          },
          {
            type: 'single',
            question: '在六道式跨產區對比套餐設計中，「香料烤鴨胸佐黑莓香料醬汁」搭配 Sierra Foothills 老藤 Zinfandel 的配餐邏輯屬於哪一種技巧？',
            options: ['A. 純粹的地域配地域，與風味結構無關', 'B. Bridging（橋接食材）——醬汁同時呼應酒的果醬調性與鴨肉的濃郁度，連結兩者', 'C. 對比式配餐，刻意製造衝突感', 'D. 這是配餐錯誤示範，不應如此搭配'],
            correct: 1,
            explanation: '這道菜運用了 Bridging Ingredient（橋接食材）技巧：黑莓香料醬汁同時呼應了 Zinfandel 本身的黑莓果醬調性，以及鴨肉的濃郁野味，讓原本風味落差較大的酒與肉透過醬汁產生連結，是進階配餐師常用的手法。'
          },
          {
            type: 'single',
            question: '為什麼應避免將高單寧紅酒與辛辣（高辣度）菜餚搭配？',
            options: ['A. 單寧會讓辣椒的顏色改變', 'B. 單寧與辣椒素會互相放大彼此的刺激感，讓兩者都顯得更粗糙', 'C. 這種搭配在加州文化中被視為禁忌', 'D. 辣味會完全掩蓋單寧的存在，並無實質影響'],
            correct: 1,
            explanation: '單寧與辣椒素（Capsaicin）會互相放大彼此在口腔中的刺激感，使搭配整體顯得更粗糙、更不平衡。面對辛辣菜餚時，應改以低單寧、略帶甜潤的酒款（如 Zinfandel 或半甜型白酒）進行搭配，以緩和辛辣的刺激感。'
          },
          {
            type: 'single',
            question: '跨產區盲品的結構化推理法中，「單寧結構緊緻、礦物感強、需要時間開展」這項線索，最適合用來推論什麼？',
            options: ['A. 這款酒一定產自法國', 'B. 傾向山地 AVA（如 Howell Mountain、Mount Veeder）而非谷地沖積土產區', 'C. 這款酒的酒精度必然低於 12%', 'D. 這款酒一定是白葡萄酒'],
            correct: 1,
            explanation: '緊緻的單寧結構與明顯礦物感，通常反映貧瘠、排水良好的山坡土壤環境（見 CA-L3-1 山坡種植特性），因此是推論該酒款傾向山地 AVA（如 Howell Mountain、Mount Veeder）而非谷地沖積土產區（如 Oakville、Rutherford）的重要線索。'
          },
          {
            type: 'single',
            question: '在系統性品飲評估中，「回味（Finish）」超過 10 秒通常代表什麼？',
            options: ['A. 酒精度過高', 'B. 葡萄酒品質較低', 'C. 葡萄酒品質較高，複雜度豐富', 'D. 葡萄酒有輕微缺陷'],
            correct: 2,
            explanation: '回味（Finish）的長度是評估葡萄酒品質的重要指標之一。品質越高的葡萄酒，香氣和味道在嚥下後殘留的時間越長。頂級的 Napa Cabernet 和 Santa Barbara Pinot Noir 的回味可以持續 20–30 秒。'
          },
          {
            type: 'single',
            question: 'Farm-to-Table 飲食哲學的核心概念是什麼？',
            options: ['A. 只使用進口高級食材', 'B. 以快速料理方式提高效率', 'C. 使用當季當地新鮮食材，直接與農夫合作，讓食材的天然風味說話', 'D. 以橡木桶煙燻所有食材'],
            correct: 2,
            explanation: 'Farm-to-Table 哲學由 Alice Waters（Chez Panisse，1971年）在加州發起，核心是使用當季當地食材，直接向農夫採購，讓簡單的烹調方式展現食材的天然風味。這與加州葡萄酒的「風土說話」哲學高度一致。'
          }
        ]
      }
    }
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '📋 Level 3 綜合評量',
        isFinalExam: true,
        passScore: 70,
        questions: [
          {
            type: 'single',
            question: '「Thermal Belt（溫暖帶）」現象指的是什麼？',
            options: ['A. 谷底因為聚集陽光而成為全區最溫暖的地方', 'B. 逆溫層之上、比谷底更溫暖穩定、又未到達山頂涼爽帶的中海拔帶狀區域', 'C. 只出現在夏季正午的短暫高溫現象', 'D. 專指 Howell Mountain 的行銷用語，無氣象學基礎'],
            correct: 1,
            explanation: '夜間冷空氣沉積谷底，暖空氣被抬升至半山腰，形成「谷底最冷、半山腰最暖」的逆溫結構。這個中海拔帶狀區域即為 Thermal Belt，是加州許多頂級山坡葡萄園刻意選址之處，因為霜害風險遠低於谷底。'
          },
          {
            type: 'single',
            question: 'Ridge Vineyards 的 Monte Bello 葡萄園在地質上最獨特之處是什麼？',
            options: ['A. 純沖積沙質土壤', 'B. 疊加在 Franciscan 綠岩之上、加州 Cabernet 產區罕見的石灰岩基岩', 'C. 火山噴發形成的黑色礫石', 'D. 與 Napa 谷地相同的沖積扇地形'],
            correct: 1,
            explanation: 'Monte Bello 的土壤是風化的 Franciscan 綠岩與黏土，疊加在約 1 億年前的海相沉積石灰岩之上，在 Napa、Sonoma 的知名 Cabernet 產區中極為罕見，有助於保留葡萄的天然酸度。'
          },
          {
            type: 'single',
            question: '生物動力法（Biodynamic）與有機農業最主要的差異是什麼？',
            options: ['A. 生物動力法允許少量合成農藥', 'B. 生物動力法依循月相曆安排農作，強制劃設至少 10% 土地作為生物多樣性棲地，並使用特定製劑', 'C. 生物動力法成本更低', 'D. 生物動力法只關注葡萄園'],
            correct: 1,
            explanation: 'Demeter Biodynamic 標準涵蓋有機規範全部要求並再疊加更嚴格條件：依循月相曆安排農作、使用特定製劑，並強制至少 10% 農場面積劃設為生物多樣性棲地，比有機認證更整體。'
          },
          {
            type: 'single',
            question: '野火「煙霧污染（Smoke Taint）」為何難以在採收前以感官方式判斷？',
            options: ['A. 野火發生的季節與採收季完全不重疊', 'B. 揮發性酚類化合物在果皮中會迅速與糖分結合形成無味的糖苷，直到發酵中才水解釋出煙燻風味', 'C. 煙霧只影響葡萄外觀，不影響風味', 'D. 現有檢測技術無法偵測任何煙霧化合物'],
            correct: 1,
            explanation: '野火煙霧中的酚類化合物被葡萄皮吸收後，迅速與糖分結合形成穩定但無味的糖苷，直到發酵中被酵母/酵素水解，才釋出游離態的煙燻風味，因此採收前難以透過感官察覺。'
          },
          {
            type: 'single',
            question: '2006 年巴黎審判 30 週年重賽的結果，最令人震驚之處是什麼？',
            options: ['A. 法國酒款全面獲勝，扳回一城', 'B. 1976 年僅排名第五的 Ridge Monte Bello 1971，在重賽中奪冠並大幅領先第二名', 'C. 重賽結果與 1976 年完全相同', 'D. 重賽因評審意見不合而取消'],
            correct: 1,
            explanation: '2006 年於倫敦與納帕同步舉行的重賽中，1976 年原賽事僅排名第五的 Ridge Vineyards Monte Bello 1971 奪得冠軍，領先第二名達 18 分之多，加州酒款包辦前五名，證明了加州頂級酒款的長期陳年實力。'
          },
          {
            type: 'single',
            question: '加州 Cult Wine（膜拜酒）最主要的市場機制是什麼？',
            options: ['A. 政府補貼優質酒莊', 'B. 稀缺性加上封閉式郵購名單，創造供不應求，並被評論家高分進一步放大', 'C. 與奧斯卡電影聯名合作', 'D. 加州葡萄酒局統一訂價分配'],
            correct: 1,
            explanation: '加州 Cult Wine 核心是「稀缺性」——年產量通常僅數百至兩千箱，加上封閉式郵購名單制度，創造天然供不應求。評論家高分評分則進一步推高市場價值。'
          },
          {
            type: 'single',
            question: '影響加州年份品質的「負面」氣候因素是什麼？',
            options: ['A. 冬季適量降雨', 'B. 生長季明顯的晝夜溫差', 'C. 採收前乾燥穩定的天氣', 'D. 夏季極端熱浪加上採收前期野火煙霧'],
            correct: 3,
            explanation: '夏季極端熱浪使葡萄失水、酸度崩解；野火煙霧污染中的酚類化合物在發酵中釋放強烈燒焦風味。2017 和 2020 年就是野火造成重大損失的年份。'
          },
          {
            type: 'single',
            question: '「Congruent Pairing」與「Contrasting Pairing」的核心區別是什麼？',
            options: ['A. 前者只用於白酒，後者只用於紅酒', 'B. 前者疊加酒與菜共享的相似元素，後者運用兩者的差異互相制衡', 'C. 兩者是同一技巧的不同名稱', 'D. 前者一定優於後者'],
            correct: 1,
            explanation: 'Congruent 配餐疊加酒與菜共享的風味或質地元素並放大；Contrasting 配餐則刻意運用兩者的差異互相制衡，創造出新的平衡感，兩者是互補的專業配餐工具。'
          },
          {
            type: 'single',
            question: '加州 Napa Cabernet Sauvignon 的最佳配餐是什麼？',
            options: ['A. 生蚵（Oysters）', 'B. 清蒸白魚', 'C. 草飼牛肋眼排（Rib-eye Steak）', 'D. 輕奶油蛋糕'],
            correct: 2,
            explanation: 'Napa Cabernet Sauvignon 豐滿酒體、高單寧和濃郁黑果味天生適合搭配富含蛋白質和脂肪的紅肉，單寧與蛋白質結合後，肉質更柔嫩，葡萄酒也更柔順。'
          },
          {
            type: 'single',
            question: 'Winkler Index（生長積溫）的計算基準溫度為何是 10°C（50°F）？',
            options: ['A. 這是加州法律規定的葡萄種植下限溫度', 'B. 葡萄樹在低於此溫度時光合作用效率極低，幾乎不產生有效生長', 'C. 這是霜害發生的臨界溫度', 'D. 這是發酵啟動所需的最低溫度'],
            correct: 1,
            explanation: 'Winkler Index 只計算每日平均氣溫超過 10°C 部分的累加值，因為葡萄樹在低於此溫度時光合作用效率極低，幾乎不產生對成熟有意義的有效生長。'
          },
          {
            type: 'single',
            question: '系統性品飲評估中，「回味（Finish）」超過 10 秒通常代表什麼？',
            options: ['A. 酒精度過高', 'B. 葡萄酒品質較低', 'C. 葡萄酒品質較高，複雜度豐富', 'D. 葡萄酒有輕微缺陷'],
            correct: 2,
            explanation: '回味長度是評估葡萄酒品質的重要指標。頂級的 Napa Cabernet 和 Santa Barbara Pinot Noir 的回味可持續 20–30 秒，這是「傑出（Outstanding）」品質的標誌。'
          },
          {
            type: 'single',
            question: 'Farm-to-Table 飲食哲學的核心概念是什麼？',
            options: ['A. 只使用進口高級食材', 'B. 以快速料理方式提高效率', 'C. 使用當季當地新鮮食材，直接與農夫合作，讓食材天然風味說話', 'D. 以橡木桶煙燻所有食材'],
            correct: 2,
            explanation: 'Farm-to-Table 哲學由 Alice Waters（Chez Panisse，1971年）在加州發起，核心是當季當地食材、直接向農夫採購，讓簡單烹調展現天然風味，與加州葡萄酒「風土說話」哲學高度一致。'
          }
        ]
      }
    }
  }
]
