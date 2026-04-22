/**
 * CA-L3-4 跨產區加州配餐實務與對比品飲
 * 進階課程：加州 Farm-to-Table 哲學，跨產區配餐矩陣，以及專業品飲筆記練習
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          加州是 Farm-to-Table（農場到餐桌）飲食文化的發源地，Alice Waters 在 1971 年創立的 Chez Panisse 徹底改變了美國的飲食觀念。加州葡萄酒與加州料理之間有著天然的親密關係——兩者都強調新鮮食材、地域個性、季節性，以及大膽而不失優雅的風格。本課帶您掌握專業級的加州配餐思維和對比品飲技巧。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🍽️ 掌握加州 Farm-to-Table 配餐哲學</h4>
            <p>理解加州料理的核心原則，以及如何運用「地域配地域」的配餐邏輯</p>
          </div>
          <div class="point-item">
            <h4>🗺️ 跨產區配餐矩陣</h4>
            <p>系統化掌握 Napa、Sonoma、Santa Barbara、Paso Robles、Sierra Foothills 各產區的最佳配餐搭配</p>
          </div>
          <div class="point-item">
            <h4>📝 專業品飲筆記技巧</h4>
            <p>學習如何以系統性的方法記錄加州葡萄酒的視覺、嗅覺、味覺特徵，並進行跨產區對比</p>
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
                  <li>🌶️ 辣味食物（墨西哥/美式 BBQ）— 高酒精度與辛辣互相抗衡</li>
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
    title: '專業品飲筆記：系統性評估加州葡萄酒',
    content: `<div class="tasting-notes">
      <h3>📝 加州葡萄酒的系統性品評方法</h3>
      <p>優秀的品飲筆記是與葡萄酒建立深層關係的工具。以下是針對加州葡萄酒的系統性評估框架。</p>
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
            question: '與谷地葡萄園相比，山坡葡萄園最主要的優勢是什麼？',
            options: ['A. 機械化作業更方便', 'B. 產量更高成本更低', 'C. 貧瘠土壤迫使根系深扎，果實更集中，礦物感更豐富', 'D. 霜害風險更低'],
            correct: 2,
            explanation: '山坡地形的岩石性貧瘠土壤迫使葡萄根系向深處生長，從深層土壤中汲取礦物質，加上高海拔涼夜，共同創造出集中、礦物感豐富、陳年潛力高的精品葡萄酒。'
          },
          {
            type: 'single',
            question: 'Howell Mountain AVA 最著名的特色是什麼？',
            options: ['A. 位於 San Pablo Bay 旁，出產 Pinot Noir', 'B. 420m 以上海拔在晨霧之上，出產具極高陳年潛力的 Cabernet Sauvignon', 'C. 加州最古老的酒莊聚集地', 'D. 地中海氣候最典型的體現'],
            correct: 1,
            explanation: 'Howell Mountain 位於 Napa 東側，海拔 420–760 米，高於晨霧雲層。火山土壤加強烈陽光和涼爽夜晚，造就加州最具陳年潛力的 Cabernet Sauvignon。'
          },
          {
            type: 'single',
            question: '生物動力法（Biodynamic）與有機農業最主要的差異是什麼？',
            options: ['A. 生物動力法允許少量合成農藥', 'B. 生物動力法依循月相曆安排農作，並使用特定製劑，視農場為完整有機整體', 'C. 生物動力法成本更低', 'D. 生物動力法只關注葡萄園'],
            correct: 1,
            explanation: '生物動力法（Demeter 認證）源自 Rudolf Steiner 哲學，按月相曆安排農作，使用特定製劑（如 500 號牛糞），建立農場自我維持生態系統，比有機認證更整體。'
          },
          {
            type: 'single',
            question: '野火「煙霧污染（Smoke Taint）」影響葡萄酒的主要機制是什麼？',
            options: ['A. 野火直接燒毀葡萄', 'B. 野火煙霧中的酚類化合物被葡萄皮吸收，在發酵中釋放煙燻/燒焦風味', 'C. 野火引起土壤溫度過高損害根系', 'D. 野火灰燼導致土壤酸化'],
            correct: 1,
            explanation: '野火煙霧中的酚類化合物（Guaiacol 等）被葡萄皮吸收後以糖苷形式儲存，在發酵中釋放強烈煙燻和燒焦風味，嚴重影響葡萄酒品質。'
          },
          {
            type: 'single',
            question: '1976 年巴黎審判（Judgment of Paris）紅酒組冠軍是哪款加州葡萄酒？',
            options: ['A. Chateau Montelena Chardonnay 1973', 'B. Ridge Monte Bello 1971', "C. Stag's Leap Wine Cellars Cabernet Sauvignon 1973", "D. Heitz Martha's Vineyard 1970"],
            correct: 2,
            explanation: "Stag's Leap Wine Cellars 的 1973 年份 Cabernet Sauvignon 在 1976 年巴黎評判紅酒組中奪冠，評審均為法國資深人士，震驚了整個葡萄酒世界。"
          },
          {
            type: 'single',
            question: '加州 Cult Wine（膜拜酒）最主要的市場機制是什麼？',
            options: ['A. 政府補貼優質酒莊', 'B. 稀缺產量加上封閉式郵購名單，創造供不應求', 'C. 與奧斯卡電影聯名合作', 'D. 加州葡萄酒局統一訂價分配'],
            correct: 1,
            explanation: '加州 Cult Wine 核心是「稀缺性」——年產數百至兩千箱，加上封閉式郵購名單制度，創造天然供不應求。Robert Parker 100 分評分進一步推高市場價值。'
          },
          {
            type: 'single',
            question: '影響加州年份品質的「負面」氣候因素是什麼？',
            options: ['A. 冬季適量降雨', 'B. 生長季明顯的晝夜溫差', 'C. 採收前乾燥穩定的天氣', 'D. 夏季極端熱浪加上採收前期野火煙霧'],
            correct: 3,
            explanation: '夏季極端熱浪使葡萄失水、酸度崩解；野火煙霧污染（Smoke Taint）中的酚類化合物在發酵中釋放強烈燒焦風味。2017 和 2020 年就是野火造成重大損失的年份。'
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
