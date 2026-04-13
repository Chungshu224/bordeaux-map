/**
 * L1-7 波爾多葡萄酒品酒基礎
 * 掌握品評波爾多葡萄酒的基本技巧和方法
 */

export const lessonContent = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          葡萄酒不僅僅是一種飲料，更是一種感官體驗的藝術。品酒 (Wine Tasting) 是通過視覺、嗅覺、味覺系統性地分析葡萄酒特徵的專業技能。對波爾多愛好者而言，掌握正確的品酒方法，能讓您更深刻地感受每一瓶酒背後的風土、工藝與時間的故事。
        </p>

        <p class="intro-context">
          本課程將帶您系統學習波爾多葡萄酒的品鑑技巧。我們將掌握品酒五步驟（觀察 → 搖杯 → 聞香 → 品嚐 → 總結）、學習正確的持杯姿勢與侍酒溫度、認識波爾多紅白酒的典型香氣特徵、理解酒體、單寧、酸度、餘韻等專業術語，以及如何使用品酒詞彙準確描述感受。這不僅是技能訓練，更是開啟葡萄酒感官世界的鑰匙。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>👁️ 掌握視覺觀察技巧</h4>
            <p>學習從顏色、澄清度、黏度判斷酒齡、品種與釀造工藝</p>
          </div>

          <div class="point-item">
            <h4>👃 學習嗅覺分析方法</h4>
            <p>認識波爾多紅白酒的典型香氣家族（果香、花香、橡木香、陳年香）</p>
          </div>

          <div class="point-item">
            <h4>👅 理解味覺結構要素</h4>
            <p>掌握酒體、單寧、酸度、甜度、酒精度、餘韻等關鍵指標</p>
          </div>

          <div class="point-item">
            <h4>🍷 掌握品酒最佳條件</h4>
            <p>學習杯型選擇、侍酒溫度、醒酒時機等提升品鑑體驗的技巧</p>
          </div>

          <div class="point-item">
            <h4>📝 使用專業品酒詞彙</h4>
            <p>建立準確描述葡萄酒特徵的語言能力，與他人有效交流品酒感受</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠系統性地品鑑波爾多葡萄酒，並用專業語言準確描述您的感官體驗。讓我們一起開啟感官探索之旅！
        </p>
      </div>
    `
  },

  // ========== 第一章：品酒準備 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '品酒準備',
    subtitle: '環境、器具與侍酒技巧',
    icon: '🍷',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  {
    title: '品酒五步驟',
    duration: '15分鐘',
    level: '初級',
    courseIntro: '掌握品鑑波爾多葡萄酒的系統方法與技巧',
    highlights: [
      { id: 1, icon: '🍷', title: '品酒環境', content: '適當的光線、溫度和環境是品酒的基礎' },
      { id: 2, icon: '🌡️', title: '侍酒溫度', content: '正確的溫度能充分展現酒款特色' }
    ],
    content: `<div class="tasting-preparation">
      <p class="lead-text">正確的品酒準備能夠最大化地展現波爾多葡萄酒的風味特色，從環境設置到器具選擇都有重要影響。</p>
      <div class="preparation-elements">
        <div class="tasting-environment">
          <h4>🌟 品酒環境設置</h4>
          <img src="/images/L1-7/品酒環境設置.png" alt="品酒環境設置" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        </div>
        <div class="glassware-selection">
          <h4>🥃 酒杯選擇與準備</h4>
          <img src="/images/L1-7/酒杯選擇與準備.png" alt="酒杯選擇與準備" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        </div>
        <div class="serving-temperature">
          <h4>🌡️ 侍酒溫度指南</h4>
          <img src="/images/L1-7/侍酒溫度指南.png" alt="侍酒溫度指南" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        </div>
        <div class="decanting-guide">
          <h4>🍶 醒酒與換瓶</h4>
          <img src="/images/L1-7/醒酒與換瓶.png" alt="醒酒與換瓶" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        </div>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '品評波爾多年輕紅酒的最適溫度是多少？',
      options: ['10-12°C', '14-16°C', '18-20°C', '22-24°C'],
      correct: 1,
      explanation: '波爾多年輕紅酒的最適品評溫度是14-16°C，這個溫度能突出果香和清新感，同時避免過高溫度帶來的酒精感。'
    }
  },

  // ========== 第二章：感官分析 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '感官分析',
    subtitle: '視覺、嗅覺與味覺品評',
    icon: '👃',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  {
    title: '視覺品評 (1/3)：色澤分析',
    highlights: [
      { id: 1, icon: '👁️', title: '色澤觀察', content: '從顏色深淺判斷酒款年齡和風格' }
    ],
    content: `<div class="visual-evaluation">
      <p class="lead-text">視覺品評是品酒的第一步，通過紅酒與白酒的顏色特徵，可以獲得關於酒款年齡與品種的初步信息。</p>
      <div class="visual-aspects">
        <div class="color-analysis" style="margin-bottom: 20px;">
          <h4>🍷 紅酒顏色演變</h4>
          <img src="/images/L1-7/紅酒顏色演變.png" alt="紅酒顏色演變" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        </div>
        <div class="color-analysis">
          <h4>🥂 白酒顏色特徵</h4>
          <img src="/images/L1-7/白酒顏色特徵.png" alt="白酒顏色特徵" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        </div>
      </div>
    </div>`,
    hasMap: false
  },
  {
    title: '視覺品評 (2/3)：透明度與黏度',
    highlights: [
      { id: 1, icon: '💎', title: '狀態評估', content: '清澈度與酒腿能反映結構與品質' }
    ],
    content: `<div class="visual-evaluation">
      <div class="visual-aspects">
        <div class="clarity-assessment" style="margin-bottom: 20px;">
          <h4>💎 透明度評估</h4>
          <img src="/images/L1-7/透明度評估.png" alt="透明度評估" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        </div>
        <div class="viscosity-evaluation">
          <h4>🌊 黏度與酒腿</h4>
          <img src="/images/L1-7/黏度與酒腿.png" alt="黏度與酒腿" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        </div>
      </div>
    </div>`,
    hasMap: false
  },
  {
    title: '視覺品評 (3/3)：觀察技巧',
    highlights: [
      { id: 1, icon: '🔍', title: '觀察方法', content: '掌握正確角度與光線判讀' }
    ],
    content: `<div class="visual-evaluation">
      <div class="visual-aspects">
        <div class="observation-technique" style="margin-bottom: 20px;">
          <h4>🔍 葡萄酒觀察技巧</h4>
          <img src="/images/L1-7/葡萄酒觀察技巧.png" alt="葡萄酒觀察技巧" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
        </div>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '紅酒出現明顯的橙色邊緣通常表示什麼？',
      options: ['酒款有缺陷', '酒款正在成熟或已經陳年', '酒精度過高', '釀造工藝有問題'],
      correct: 1,
      explanation: '紅酒出現橙色邊緣是正常的陳年特徵，表示酒款正在成熟或已經經過一定時間的陳年，是酒款演化的自然過程。'
    }
  },
  {
    title: '嗅覺品評：香氣的層次分析',
    highlights: [
      { id: 1, icon: '👃', title: '香氣分層', content: '一層、二層、三層香氣的識別與分析' },
      { id: 2, icon: '🌸', title: '品種特徵', content: '不同葡萄品種的典型香氣表現' }
    ],
    content: `<div class="olfactory-evaluation">
      <p class="lead-text">嗅覺品評是品酒的核心環節，波爾多葡萄酒複雜的香氣結構需要系統性的分析方法來充分理解和欣賞。</p>
      <div class="aroma-analysis">
        <div class="aroma-layers">
          <h4>🌺 香氣層次結構</h4>
          <div class="aroma-classification">
            <div class="primary-aromas">
              <h5>一層香氣 (Primary Aromas)</h5>
              <div class="primary-details">
                <p><strong>來源：</strong>葡萄品種本身的特性</p>
                <div class="varietal-characteristics">
                  <div class="cabernet-sauvignon-aromas">
                    <h6>卡本內-蘇維濃</h6>
                    <ul>
                      <li><strong>果香：</strong>黑醋栗、黑莓、藍莓</li>
                      <li><strong>草本：</strong>青椒、薄荷、月桂葉</li>
                      <li><strong>香料：</strong>黑胡椒、丁香</li>
                      <li><strong>礦物：</strong>鉛筆芯、石墨</li>
                    </ul>
                  </div>
                  <div class="merlot-aromas">
                    <h6>梅洛</h6>
                    <ul>
                      <li><strong>果香：</strong>李子、櫻桃、草莓</li>
                      <li><strong>甜香：</strong>巧克力、太妃糖</li>
                      <li><strong>草本：</strong>草藥、薄荷</li>
                      <li><strong>花香：</strong>紫羅蘭、玫瑰</li>
                    </ul>
                  </div>
                  <div class="cabernet-franc-aromas">
                    <h6>卡本內-弗朗</h6>
                    <ul>
                      <li><strong>果香：</strong>覆盆子、紅醋栗</li>
                      <li><strong>草本：</strong>青椒、茴香</li>
                      <li><strong>花香：</strong>紫羅蘭、薰衣草</li>
                      <li><strong>香料：</strong>白胡椒、香草</li>
                    </ul>
                  </div>
                  <div class="white-varieties-aromas">
                    <h6>白葡萄品種</h6>
                    <ul>
                      <li><strong>白蘇維濃：</strong>青草、番石榴、檸檬皮</li>
                      <li><strong>賽美容：</strong>蜂蜜、蜂蠟、白桃</li>
                      <li><strong>慕絲卡岱：</strong>玫瑰花、荔枝、麝香</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="secondary-aromas">
              <h5>二層香氣 (Secondary Aromas)</h5>
              <div class="secondary-details">
                <p><strong>來源：</strong>發酵過程產生的香氣</p>
                <div class="fermentation-aromas">
                  <ul>
                    <li><strong>酵母香氣：</strong>麵包、餅乾、酵母</li>
                    <li><strong>酒精發酵：</strong>奶油、黃油</li>
                    <li><strong>蘋果酸乳酸發酵：</strong>奶油、堅果</li>
                    <li><strong>酒泥接觸：</strong>奶油蛋糕、布里歐麵包</li>
                  </ul>
                </div>
                <div class="oak-influence">
                  <h6>橡木桶影響</h6>
                  <ul>
                    <li><strong>新橡木：</strong>香草、椰子、奶油</li>
                    <li><strong>烘烤程度：</strong>咖啡、焦糖、巧克力</li>
                    <li><strong>木質香氣：</strong>雪松、檀香</li>
                    <li><strong>香料氣息：</strong>肉桂、丁香、多香果</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="tertiary-aromas">
              <h5>三層香氣 (Tertiary Aromas)</h5>
              <div class="tertiary-details">
                <p><strong>來源：</strong>陳年過程中發展的複雜香氣</p>
                <div class="aging-aromas">
                  <div class="bottle-aging">
                    <h6>瓶中陳年香氣</h6>
                    <ul>
                      <li><strong>動物氣息：</strong>皮革、野味、麝香</li>
                      <li><strong>土壤氣息：</strong>濕土、森林、蘑菇</li>
                      <li><strong>乾果香氣：</strong>葡萄乾、無花果、棗子</li>
                      <li><strong>香料發展：</strong>煙草、雪茄盒、香料</li>
                    </ul>
                  </div>
                  <div class="oxidative-aromas">
                    <h6>氧化發展香氣</h6>
                    <ul>
                      <li><strong>堅果香氣：</strong>核桃、榛果、杏仁</li>
                      <li><strong>蜂蜜發展：</strong>蜂蜜、蜂蜜酒</li>
                      <li><strong>焦糖化：</strong>焦糖、太妃糖</li>
                      <li><strong>礦物發展：</strong>石油、汽油（少量時為正面特徵）</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="smelling-technique">
          <h4>👃 聞香技巧</h4>
          <div class="technique-guidelines">
            <div class="smelling-steps">
              <h5>聞香步驟</h5>
              <ol>
                <li><strong>靜態聞香：</strong>不搖動酒杯，聞第一印象</li>
                <li><strong>輕搖聞香：</strong>輕搖酒杯，釋放更多香氣</li>
                <li><strong>深度聞香：</strong>更用力搖杯，獲得最大香氣濃度</li>
                <li><strong>間隔聞香：</strong>避免嗅覺疲勞，間隔重複</li>
              </ol>
            </div>
            <div class="nose-positioning">
              <h5>鼻子位置</h5>
              <ul>
                <li><strong>杯口距離：</strong>鼻子距離杯口1-2公分</li>
                <li><strong>深入程度：</strong>可適當深入杯中聞香</li>
                <li><strong>吸氣方式：</strong>短促的深吸氣，避免過長</li>
                <li><strong>左右鼻孔：</strong>可分別用左右鼻孔感受</li>
              </ul>
            </div>
            <div class="aroma-memory">
              <h5>香氣記憶建立</h5>
              <ul>
                <li><strong>比較聯想：</strong>與熟悉的香氣進行比較</li>
                <li><strong>分類記憶：</strong>按香氣類別建立記憶庫</li>
                <li><strong>強度評估：</strong>記錄香氣的強弱程度</li>
                <li><strong>持續性：</strong>觀察香氣的持續時間</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="aroma-defects">
          <h4>⚠️ 香氣缺陷識別</h4>
          <div class="defect-recognition">
            <div class="common-defects">
              <h5>常見香氣缺陷</h5>
              <ul>
                <li><strong>軟木塞污染：</strong>霉味、濕紙板味</li>
                <li><strong>氧化過度：</strong>雪莉酒味、醋味</li>
                <li><strong>還原味：</strong>硫磺味、臭雞蛋味</li>
                <li><strong>揮發酸過高：</strong>醋酸味、指甲油味</li>
                <li><strong>細菌感染：</strong>老鼠味、腐敗味</li>
              </ul>
            </div>
            <div class="defect-handling">
              <h5>缺陷處理</h5>
              <ul>
                <li><strong>確認判斷：</strong>多次確認是否真的有缺陷</li>
                <li><strong>程度評估：</strong>評估缺陷的嚴重程度</li>
                <li><strong>可否改善：</strong>醒酒是否能改善某些問題</li>
                <li><strong>接受與否：</strong>決定是否接受此瓶酒</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '波爾多葡萄酒中的"鉛筆芯"香氣通常來自哪個葡萄品種？',
  options: ['梅洛', '卡本內-蘇維濃', '卡本內-弗朗', '白蘇維濃'],
      correct: 1,
      explanation: '鉛筆芯或石墨香氣是卡本內-蘇維濃品種的典型一層香氣特徵，特別是在波爾多左岸的優質酒款中經常出現。'
    }
  }
  ,

  // ========== 第三章：實踐應用 ==========
  {
    type: 'chapter-divider',
    chapter: '3',
    title: '實踐應用',
    subtitle: '品評流程與表達技巧',
    icon: '📝',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  {
    title: '品嚐流程：一步步做（Flow）',
    highlights: [
      { id: 'flow-1', icon: '🧭', title: '流程思維', content: '用固定順序降低遺漏，輸出更一致' },
      { id: 'flow-2', icon: '🧩', title: '拆解要素', content: '外觀、香氣、口感、結構、結論分段紀錄' }
    ],
    content: `<div class="tasting-flow">
      <p class="lead-text">遵循固定的品嚐步驟，幫助你快速、完整且一致地記錄一款酒的表現。</p>
      <ol class="flow-steps">
        <li><strong>外觀（Appearance）</strong>：色澤（色相/深淺）、清澈度、黏度（酒腿/酒淚）。</li>
        <li><strong>香氣（Nose）</strong>：
          <ul>
            <li>先靜置聞第一印象 → 輕搖 → 深搖；避免嗅覺疲勞。</li>
            <li>強度（Intensity）、類型（Primary/Secondary/Tertiary）、清潔度（Clean/有缺陷）。</li>
          </ul>
        </li>
        <li><strong>口感第一口（Palate）</strong>：小口含酒，讓酒液覆蓋舌面，短暫吸氣後吞咽或吐出。</li>
        <li><strong>口感要素分析</strong>：
          <ul>
            <li>甜度（Sweetness）｜酸度（Acidity）｜單寧（Tannins）｜酒精（Alcohol）｜酒體（Body）。</li>
            <li>風味強度與類型（Flavour Intensity & Profile），與鼻香是否一致。</li>
            <li>餘韻（Finish）長短與質感。</li>
          </ul>
        </li>
        <li><strong>結構與品質評估</strong>：平衡（Balance）、複雜度（Complexity）、濃縮度（Concentration）。</li>
        <li><strong>成熟度與發展</strong>：偏年輕/適飲/開始轉熟/已進成熟期；是否具備陳年潛力。</li>
        <li><strong>結論（Conclusion）</strong>：品質等級（例如 Acceptable/Good/Very Good/Outstanding）、建議飲用窗與搭餐方向。</li>
      </ol>
      <p class="tip">小撇步：整體→細節→回到整體；每一步都留 3-5 秒，讓大腦完成辨識與標記。</p>
    </div>`,
    hasMap: false
  },
  {
    title: '缺陷 vs 特色：如何區分？',
    highlights: [
      { id: 'defect-1', icon: '⚖️', title: '程度決定評價', content: '微量可能增添層次，過量就成為缺陷' },
      { id: 'defect-2', icon: '🧪', title: '交叉驗證', content: '聞香與口感相互印證，避免單點誤判' }
    ],
    content: `<div class="defect-vs-feature">
      <p class="lead-text">許多感受取決於「程度」與「情境」。以下對照有助於快速判讀。</p>
      <table class="compare-table">
        <thead>
          <tr>
            <th>現象</th>
            <th>正面特色（可接受/加分）</th>
            <th>負面缺陷（不可接受）</th>
            <th>判斷提示</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>輕微氧化</td>
            <td>堅果/焦糖/蜂蜜等複雜度（陳年風格）</td>
            <td>明顯雪莉/醋味、果香被掩蓋</td>
            <td>觀察顏色是否過深、口感是否扁平</td>
          </tr>
          <tr>
            <td>還原味</td>
            <td>極輕微的燧石/火藥感</td>
            <td>臭雞蛋/橡膠/強烈硫味</td>
            <td>搖杯後是否改善；是否持續且主導</td>
          </tr>
          <tr>
            <td>揮發酸（VA）</td>
            <td>極低量提升芳香立體</td>
            <td>刺鼻的醋/指甲油去光水味</td>
            <td>鼻腔刺激性強、影響平衡</td>
          </tr>
          <tr>
            <td>Brett（馬廄/皮革）</td>
            <td>極低量帶來野性（部分風格可接受）</td>
            <td>主導性的馬廄/藥膏/創可貼</td>
            <td>是否掩蓋品種與產區典型性</td>
          </tr>
          <tr>
            <td>TCA（軟木塞污染）</td>
            <td>—</td>
            <td>霉味/濕紙板，風味被壓扁</td>
            <td>幾乎無解，通常判定為缺陷</td>
          </tr>
          <tr>
            <td>SO₂（二氧化硫）</td>
            <td>合理抑菌抗氧化</td>
            <td>刺鼻刺激、壓抑香氣</td>
            <td>開瓶靜置或搖杯可快速再判</td>
          </tr>
          <tr>
            <td>沉澱/酒石</td>
            <td>自然現象，不影響品質</td>
            <td>混濁/異常懸浮物</td>
            <td>視覺辨識；酒石呈晶體、可沉積</td>
          </tr>
          <tr>
            <td>氣泡（Still Wine）</td>
            <td>極少量可能因裝瓶殘氣</td>
            <td>明顯氣泡與刺感</td>
            <td>非起泡酒若氣泡明顯，多屬異常</td>
          </tr>
          <tr>
            <td>橡木影響</td>
            <td>香草/烘烤/雪松與果香平衡</td>
            <td>木質主導、單一調性壓過果香</td>
            <td>新桶比例過高、烘烤度過重</td>
          </tr>
        </tbody>
      </table>
      <p class="tip">拿不準時：回到「強度、平衡、是否掩蓋典型性」三題自檢。</p>
    </div>`,
    hasMap: false
  },
  {
    title: '範例酒評：句型模板',
    highlights: [
      { id: 'tmpl-1', icon: '✍️', title: '可直接套用', content: '把關鍵詞替換即可快速完成紀錄' },
      { id: 'tmpl-2', icon: '🧱', title: '由上而下', content: '先結構後風味，先整體後細節' }
    ],
    content: `<div class="tasting-templates">
      <section>
        <h4>外觀（Appearance）</h4>
        <ul>
          <li>「<em>外觀</em>清澈，<em>色澤</em>為<strong>（淺/中/深）</strong>的<strong>（寶石紅/石榴紅/磚紅｜檸檬黃/金黃）</strong>，<em>黏度</em>呈<strong>（低/中/高）</strong>。」</li>
          <li>「邊緣帶有<strong>（紫/橙/棕）</strong>色調，顯示<strong>（年輕/成熟/陳年）</strong>跡象。」</li>
        </ul>
      </section>
      <section>
        <h4>香氣（Nose）</h4>
        <ul>
          <li>「<em>香氣強度</em>為<strong>（輕/中/強）</strong>，帶有<strong>（黑醋栗/黑莓/李子…）</strong>等<em>一層香氣（Primary）</em>，伴隨<strong>（香草/椰子/烘烤）</strong>等<em>二層香氣（Secondary）</em>與<strong>（皮革/煙草/乾果）</strong>等<em>三層香氣（Tertiary）</em>。」</li>
          <li>「整體<em>乾淨度</em>良好，無明顯缺陷。」</li>
        </ul>
      </section>
      <section>
        <h4>口感（Palate）</h4>
        <ul>
          <li>「<em>甜度</em><strong>（乾/半乾/半甜/甜）</strong>；<em>酸度</em><strong>（低/中/高）</strong>；<em>單寧</em><strong>（細緻/成熟/緊澀）</strong>且<strong>（低/中/高）</strong>；<em>酒精</em><strong>（低/中/高）</strong>；<em>酒體</em><strong>（輕盈/中等/飽滿）</strong>。」</li>
          <li>「<em>風味強度</em><strong>（輕/中/強）</strong>，以<strong>（果香/香料/橡木/陳年）</strong>為主，與鼻香<strong>（一致/不一致）</strong>。」</li>
          <li>「<em>餘韻</em><strong>（短/中/長）</strong>，質感<strong>（乾淨/帶苦/帶澀/帶甜）</strong>。」</li>
        </ul>
      </section>
      <section>
        <h4>評估與結論（Assessment & Conclusion）</h4>
        <ul>
          <li>「整體在<em>平衡/複雜度/濃縮度</em>上表現<strong>（一般/良好/出色）</strong>；品質等級判定為<strong>（Acceptable/Good/Very Good/Outstanding）</strong>。」</li>
          <li>「<em>成熟度</em>判斷：<strong>（尚年輕/可飲/進入適飲/成熟期）</strong>；<em>潛力</em>估計：<strong>（即飲/可再陳年 X‑Y 年）</strong>。」</li>
          <li>「<em>建議搭餐</em>：<strong>（烤牛肉/羊排/硬質起司/海鮮）</strong>（舉 1‑2 個即可）。」</li>
        </ul>
      </section>
      <p class="tip">實作技巧：先按模板快速寫下關鍵詞，再把句子串連成自然語句。</p>
    </div>`,
    hasMap: false
  },
  {
    title: '實作練習卡：品評紀錄表（可列印）',
    highlights: [
      { id: 'sheet-1', icon: '📝', title: '邊看邊做', content: '照表填寫，確認每一步沒有遺漏' },
      { id: 'sheet-2', icon: '🖨️', title: '列印友善', content: '可直接列印紙本於課堂練習' }
    ],
    content: `<div class="tasting-record-card">
      <div style="margin:8px 0 12px;">
        <button class="next-btn" data-download-blank-pdf>⬇ 下載空白 PDF</button>
      </div>
      <style>
        .tasting-record-card .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; }
        .tasting-record-card .section { border: 1px solid #e5e7eb; border-radius: 8px; padding: 10px 12px; background: #fff; }
        .tasting-record-card h4 { margin: 0 0 6px; font-size: 16px; }
        .tasting-record-card .row { display:flex; flex-wrap:wrap; gap:10px; align-items:center; margin:6px 0; }
        .tasting-record-card label { display:inline-flex; align-items:center; gap:6px; }
        .tasting-record-card input[type="text"], .tasting-record-card textarea { width:100%; border:1px solid #d1d5db; border-radius:6px; padding:6px 8px; }
        .tasting-record-card textarea { min-height:66px; }
        .tasting-record-card .mini { width: 120px; }
        @media print { .tasting-record-card { color: #000; } .tasting-record-card .section { break-inside: avoid; } }
      </style>
      <div class="grid">
        <div class="section">
          <h4>基本資訊</h4>
          <div class="row">
            <label>酒款名稱 <input class="mini" type="text" placeholder="例：Château ___"></label>
            <label>年份 <input class="mini" type="text" placeholder="YYYY"></label>
            <label>產區 <input class="mini" type="text" placeholder="例：聖愛美濃"></label>
          </div>
          <div class="row">
            <label>酒精％ <input class="mini" type="text" placeholder="%"></label>
            <label>侍酒溫度 <input class="mini" type="text" placeholder="°C"></label>
            <label>醒酒時間 <input class="mini" type="text" placeholder="min"></label>
          </div>
          <div class="row">
            <label style="flex:1;">備註 <input type="text" placeholder="酒杯/開瓶/其他"></label>
          </div>
        </div>

        <div class="section">
          <h4>外觀（Appearance）</h4>
          <div class="row"><strong>清澈度：</strong>
            <label><input type="checkbox">水晶清澈</label>
            <label><input type="checkbox">清澈</label>
            <label><input type="checkbox">略混濁</label>
          </div>
          <div class="row"><strong>色澤深淺：</strong>
            <label><input type="checkbox">淺</label>
            <label><input type="checkbox">中</label>
            <label><input type="checkbox">深</label>
          </div>
          <div class="row"><strong>色相：</strong>
            <input type="text" placeholder="例：寶石紅/石榴紅/磚紅｜檸檬黃/金黃">
          </div>
          <div class="row"><strong>黏度（酒腿）：</strong>
            <label><input type="checkbox">低</label>
            <label><input type="checkbox">中</label>
            <label><input type="checkbox">高</label>
          </div>
        </div>

        <div class="section">
          <h4>香氣（Nose）</h4>
          <div class="row"><strong>強度：</strong>
            <label><input type="checkbox">輕</label>
            <label><input type="checkbox">中</label>
            <label><input type="checkbox">強</label>
          </div>
          <div class="row"><strong>層次：</strong>
            <label><input type="checkbox">Primary（果/花/草本）</label>
            <label><input type="checkbox">Secondary（發酵/橡木）</label>
            <label><input type="checkbox">Tertiary（陳年）</label>
          </div>
          <div class="row"><strong>清潔度：</strong>
            <label><input type="checkbox">乾淨</label>
            <label><input type="checkbox">可疑</label>
            <label><input type="checkbox">缺陷</label>
          </div>
          <div class="row"><textarea placeholder="關鍵香氣關鍵詞（例：黑醋栗、雪松、香草、皮革…）"></textarea></div>
        </div>

        <div class="section">
          <h4>口感（Palate）與結構</h4>
          <div class="row"><strong>甜度：</strong>
            <label><input type="checkbox">乾</label>
            <label><input type="checkbox">半乾</label>
            <label><input type="checkbox">半甜</label>
            <label><input type="checkbox">甜</label>
          </div>
          <div class="row"><strong>酸度：</strong>
            <label><input type="checkbox">低</label>
            <label><input type="checkbox">中</label>
            <label><input type="checkbox">高</label>
          </div>
          <div class="row"><strong>單寧等級：</strong>
            <label><input type="checkbox">低</label>
            <label><input type="checkbox">中</label>
            <label><input type="checkbox">高</label>
            <strong style="margin-left:8px;">質地：</strong>
            <label><input type="checkbox">細緻</label>
            <label><input type="checkbox">成熟</label>
            <label><input type="checkbox">緊澀</label>
          </div>
          <div class="row"><strong>酒精：</strong>
            <label><input type="checkbox">低</label>
            <label><input type="checkbox">中</label>
            <label><input type="checkbox">高</label>
          </div>
          <div class="row"><strong>酒體：</strong>
            <label><input type="checkbox">輕盈</label>
            <label><input type="checkbox">中等</label>
            <label><input type="checkbox">飽滿</label>
          </div>
          <div class="row"><strong>風味強度：</strong>
            <label><input type="checkbox">輕</label>
            <label><input type="checkbox">中</label>
            <label><input type="checkbox">強</label>
          </div>
          <div class="row"><textarea placeholder="口感風味重點（與鼻香是否一致、主導類型）"></textarea></div>
        </div>

        <div class="section">
          <h4>餘韻（Finish）與整體</h4>
          <div class="row"><strong>餘韻長度：</strong>
            <label><input type="checkbox">短</label>
            <label><input type="checkbox">中</label>
            <label><input type="checkbox">長</label>
          </div>
          <div class="row"><textarea placeholder="餘韻質感（乾淨/帶苦/帶澀/帶甜/香料收尾…）"></textarea></div>
        </div>

        <div class="section">
          <h4>評估與結論（Assessment & Conclusion）</h4>
          <div class="row"><strong>平衡：</strong>
            <label><input type="checkbox">一般</label>
            <label><input type="checkbox">良好</label>
            <label><input type="checkbox">出色</label>
            <strong style="margin-left:8px;">複雜度：</strong>
            <label><input type="checkbox">一般</label>
            <label><input type="checkbox">良好</label>
            <label><input type="checkbox">出色</label>
          </div>
          <div class="row"><strong>品質等級：</strong>
            <label><input type="checkbox">Acceptable</label>
            <label><input type="checkbox">Good</label>
            <label><input type="checkbox">Very Good</label>
            <label><input type="checkbox">Outstanding</label>
          </div>
          <div class="row"><strong>成熟度：</strong>
            <label><input type="checkbox">尚年輕</label>
            <label><input type="checkbox">可飲</label>
            <label><input type="checkbox">進入適飲</label>
            <label><input type="checkbox">成熟期</label>
          </div>
          <div class="row"><label style="flex:1;">潛力/建議飲用窗 <input type="text" placeholder="例如：可再陳年 5-8 年"></label></div>
          <div class="row"><label style="flex:1;">搭餐建議 <input type="text" placeholder="例如：烤牛肉、羊排、硬質起司"></label></div>
        </div>
      </div>
    </div>`,
    hasMap: false
  },

  // 結束頁
  {
    type: 'end',
    title: '課程完成',
    achievement: 'L1-7 品鑒與評價基礎 - 感官分析技能',
    description: '恭喜您完成波爾多葡萄酒品鑒與評價的基礎學習！您已掌握完整的品鑒流程（視覺、嗅覺、味覺）、學會使用專業術語描述酒款、能夠辨識波爾多的經典香氣與風味特徵。這些技能將幫助您更深入地理解與享受波爾多葡萄酒，並能與他人分享您的品鑒體驗。',
    skills: [
      '掌握完整的品酒流程（視覺、嗅覺、味覺）',
      '學會使用專業術語描述酒款',
      '能夠辨識波爾多的經典香氣（黑醋栗、李子、雪松、紫羅蘭）',
      '理解單寧、酸度、酒體、餘韻的平衡',
      '能夠建立個人品酒記錄與評價標準'
    ],
    nextSteps: [
      {
        action: '持續練習',
        items: [
          '組織波爾多品酒會，對比不同產區',
          '使用品酒記錄表記錄每次品酒體驗',
          '練習盲品，訓練感官辨識能力',
          '尋找不同年份的同一酒莊進行對比'
        ]
      },
      {
        action: '繼續學習',
        items: [
          '進入L1-8：Level 1總結與展望',
          '完成Level 1的學習旅程',
          '準備進入Level 2的深度學習'
        ]
      }
    ],
    certificate: '您已獲得本課程學習證明',
    reflection: {
      title: '課程反思',
      questions: [
        '品酒時，您最容易辨識的香氣是什麼？',
        '單寧、酸度、酒體的平衡如何影響酒款品質？',
        '您如何建立自己的品酒評價標準？',
        '品鑒如何幫助您更好地理解波爾多？'
      ]
    },
    keyInsight: '品酒是一種感官訓練與記憶建立的過程。通過視覺觀察，我們能判斷酒齡與狀態；通過嗅覺分析，我們能辨識品種與產區；通過味覺體驗，我們能評價結構與平衡。每次品酒都是一次學習，每次對比都是一次成長。持續練習，建立自己的感官記憶庫，就能成為真正的品酒專家。',
    shareMessage: '我剛完成了波爾多葡萄酒Level 1的「品鑒與評價基礎」課程！現在我能使用專業術語品酒了！👃🍷 #波爾多 #品酒技能 #葡萄酒學習'
  }
,
  // ====== inject-bordeaux-quiz ======
  {
    "component": "QuizSlide",
    "componentProps": {
      "slide": {
        "title": "🧠 知識檢測",
        "isFinalExam": false,
        "passScore": 70,
        "questions": [
          {
            "type": "single",
            "question": "品酒時的「觀色」主要評估什麼？",
            "options": [
              "A. 酒精度",
              "B. 酒的顏色深淺、清澈度和色調",
              "C. 香氣強度",
              "D. 單寧多少"
            ],
            "correct": 1,
            "explanation": "品酒觀色（Visual Assessment）評估：色澤深淺（深紅/淺紅反映品種、年齡、葡萄成熟度）；清澈度（有無渾濁）；石榴紅/寶石紅/磚紅等色調（反映陳年程度）。"
          },
          {
            "type": "single",
            "question": "波爾多紅酒在鼻腔最典型的「一級香氣（Primary Aromas）」是？",
            "options": [
              "A. 橡木桶香：如烤橡木、香草",
              "B. 陳年發展：如皮革、泥土",
              "C. 葡萄本身的果香：如黑醋栗、李子、藍莓",
              "D. 乳酪發酵味"
            ],
            "correct": 2,
            "explanation": "一級香氣（品種香/果香）直接來自葡萄本身：波爾多紅酒（Cab Sauv 主導）的一級香氣以黑色水果為主——黑醋栗（Cassis）、李子、黑莓。橡木和皮革屬於二、三級香氣。"
          },
          {
            "type": "multiple",
            "question": "品酒的「口感（Palate）」評估包含哪些要素？（多選）",
            "options": [
              "A. 酸度（Acidity）",
              "B. 單寧（Tannins）",
              "C. 酒體（Body）",
              "D. 餘韻長度（Finish Length）"
            ],
            "correct": [
              0,
              1,
              2,
              3
            ],
            "explanation": "完整的口感評估包含：酸度（活躍度/骨幹）、單寧（澀感/結構）、甜度（殘糖）、酒體（輕/中/飽滿）、酒精感、複雜度和餘韻長短。這些要素共同決定了葡萄酒的整體印象和品質評估。"
          },
          {
            "type": "single",
            "question": "「盲品（Blind Tasting）」的主要目的是？",
            "options": [
              "A. 節省成本",
              "B. 排除品牌偏見，客觀評估酒的品質",
              "C. 訓練記憶力",
              "D. 法規要求"
            ],
            "correct": 1,
            "explanation": "盲品是專業品酒師訓練的核心技能：不看酒瓶、不知道品牌，純粹從感官評估來判斷酒的品質、品種、產區和年份。排除心理暗示（如貴酒=好酒）的干擾，訓練客觀的感官判斷。"
          },
          {
            "type": "single",
            "question": "波爾多紅酒陳年後最常出現的「三級香氣（Tertiary Aromas）」是？",
            "options": [
              "A. 新鮮黑醋栗",
              "B. 青草和蔬菜",
              "C. 皮革、雪松、雪茄盒、土腥",
              "D. 牛奶糖和奶油"
            ],
            "correct": 2,
            "explanation": "三級香氣（陳年香气/Bouquet）是波爾多紅酒在瓶中陳年後發展出的複雜香氣：皮革、雪松木、雪茄盒、泥土、松露、動物感、馬鞍皮等，這正是陳年波爾多的迷人之處，也是收藏價值的體現。"
          }
        ]
      }
    }
  }
]

export default lessonContent

