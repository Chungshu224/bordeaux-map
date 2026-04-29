// L3-2: 土壤科學與風土表達
// 從地質學到感官體驗，深度解析土壤如何影響葡萄酒的風土表達

export const l32Content = [
  // 課程簡介
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          土壤是 terroir（風土）最神秘也最核心的元素。在波爾多，礫石、黏土、石灰岩、砂土與淤泥構成了獨特的土壤拼圖，每一種土壤類型都在訴說著不同的葡萄酒故事。左岸的礫石賦予卡本內蘇維濃強勁的架構，右岸的黏土讓梅洛展現柔順的質地。
        </p>

        <p class="intro-context">
          本課程將帶您深入地下，從地質學成因到土壤科學原理，從物理化學特性到生物活性，全面理解土壤如何影響葡萄生長、塑造葡萄酒風格。我們將探索波爾多五大土壤類型的秘密，揭示為何 Château Latour 的礫石、Château Pétrus 的藍黏土能孕育出世界頂級的葡萄酒。
        </p>
        <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L3-2/01%20波爾多三大核心土壤科學.svg" alt="波爾多三大核心土壤科學" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🔬 掌握土壤科學的核心概念</h4>
            <p>理解土壤質地、結構、pH值、排水性等關鍵指標，建立專業的土壤分析框架</p>
          </div>

          <div class="point-item">
            <h4>🗺️ 深入理解波爾多5大土壤類型</h4>
            <p>學習礫石、黏土、石灰岩、砂土、淤泥的地質成因、分布區域與獨特特性</p>
          </div>

          <div class="point-item">
            <h4>🍇 分析土壤對葡萄的影響機制</h4>
            <p>理解土壤的物理、化學、生物特性如何影響根系發展、水分養分供應與果實品質</p>
          </div>

          <div class="point-item">
            <h4>🍷 學習從土壤特徵推斷酒款風格</h4>
            <p>掌握不同土壤類型與葡萄酒架構、單寧、酸度、香氣風格之間的關聯</p>
          </div>

          <div class="point-item">
            <h4>🌍 探索 terroir 的科學與哲學</h4>
            <p>理解風土概念的科學基礎，以及氣候變化下土壤管理面臨的新挑戰</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠從土壤角度深度解讀波爾多葡萄酒，理解為何每一片土地都能孕育出獨特的風土表達。
        </p>

        <div class="course-info">
          <p><strong>預計學習時間：</strong>45分鐘</p>
          <p><strong>難度等級：</strong>高級專業</p>
        </div>
      </div>
    `,
    icon: '🌍'
  },

  // ========== 第一章：土壤科學基礎 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '土壤科學基礎框架',
    subtitle: '理解土壤的三大維度',
    icon: '🔬',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  {
    type: 'content',
    title: '土壤核心特性：三大維度',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">

          <!-- 物理特性 -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:10px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.25rem;">⚙️</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.88rem;">物理特性</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.74rem;">Physical Properties</div>
              </div>
            </div>
            <div style="padding:10px 12px 12px;">
              <div style="font-size:0.77rem;color:#555;line-height:1.6;margin-bottom:8px;">決定水分與空氣流動，為根系生長提供基礎環境。</div>
              <ul style="margin:0 0 8px;padding-left:13px;font-size:0.76rem;color:#333;line-height:1.85;">
                <li>質地：沙/粉砂/黏土比例 → 排水/保水</li>
                <li>結構：顆粒聚合度 → 根系穿透/透氣</li>
                <li>深度：可開發根層範圍</li>
                <li>排水性：過快/過慢皆影響品質</li>
                <li>熱容量：儲/釋熱能力</li>
              </ul>
              <div style="background:#E3F2FD;border-left:3px solid #1565C0;border-radius:4px;padding:5px 8px;font-size:0.74rem;color:#0D47A1;">
                最直觀，直接影響藤勢與成熟節奏
              </div>
            </div>
          </div>

          <!-- 化學特性 -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F57C00);padding:10px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.25rem;">⚗️</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.88rem;">化學特性</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.74rem;">Chemical Properties</div>
              </div>
            </div>
            <div style="padding:10px 12px 12px;">
              <div style="font-size:0.77rem;color:#555;line-height:1.6;margin-bottom:8px;">決定可用養分元素與獲取方式，影響葡萄健康與品質。</div>
              <ul style="margin:0 0 8px;padding-left:13px;font-size:0.76rem;color:#333;line-height:1.85;">
                <li>pH：養分可利用性（理想 6.5–7.5）</li>
                <li>礦物：Ca/Mg/K/Fe 對品質之影響</li>
                <li>有機質：肥力與微生物活性</li>
                <li>CEC：保持養分能力</li>
                <li>NPK 平衡：生長與果實品質</li>
              </ul>
              <div style="background:#FFF3E0;border-left:3px solid #E65100;border-radius:4px;padding:5px 8px;font-size:0.74rem;color:#BF360C;">
                左右營養狀態與整體健康
              </div>
            </div>
          </div>

          <!-- 生物特性 -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#2E7D32,#388E3C);padding:10px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.25rem;">🦠</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.88rem;">生物特性</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.74rem;">Biological Properties</div>
              </div>
            </div>
            <div style="padding:10px 12px 12px;">
              <div style="font-size:0.77rem;color:#555;line-height:1.6;margin-bottom:8px;">土壤為活的生態系；微生物活動對健康與韌性關鍵。</div>
              <ul style="margin:0 0 8px;padding-left:13px;font-size:0.76rem;color:#333;line-height:1.85;">
                <li>微生物多樣性：細菌/真菌/放線菌</li>
                <li>菌根：與根系共生，助吸水吸養</li>
                <li>土壤呼吸：微生物活動指標</li>
                <li>有機質分解：養分循環核心</li>
                <li>病蟲害抑制：健康土壤的自防</li>
              </ul>
              <div style="background:#E8F5E9;border-left:3px solid #2E7D32;border-radius:4px;padding:5px 8px;font-size:0.74rem;color:#1B5E20;">
                土壤健康與長期可持續性的基礎
              </div>
            </div>
          </div>

        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '土壤分析的三層次框架',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="text-align:center;font-size:0.8rem;color:#666;margin-bottom:10px;">從宏觀到微觀理解土壤</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:12px;">

          <!-- 地質層 -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4E342E,#6D4C41);padding:10px 12px;">
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <div style="color:#fff;font-weight:700;font-size:0.86rem;">🌋 地質層</div>
                <span style="background:rgba(255,255,255,0.18);color:#fff;border-radius:20px;padding:2px 8px;font-size:0.72rem;white-space:nowrap;">數百萬年</span>
              </div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.73rem;margin-top:2px;">Geological Level</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="margin-bottom:6px;">
                <div style="font-size:0.74rem;font-weight:700;color:#4E342E;margin-bottom:3px;">🔍 研究重點</div>
                <div style="font-size:0.75rem;color:#555;line-height:1.6;">母岩類型、地質歷史、沉積過程</div>
              </div>
              <div style="margin-bottom:7px;">
                <div style="font-size:0.74rem;font-weight:700;color:#4E342E;margin-bottom:3px;">📌 實例</div>
                <div style="font-size:0.75rem;color:#555;line-height:1.6;">Günz冰期加龍河沉積形成Médoc礫石</div>
              </div>
              <div style="background:#EFEBE9;border-radius:4px;padding:4px 7px;font-size:0.73rem;color:#4E342E;line-height:1.6;">
                🛠 地質圖・鑽孔取樣・地球物理探測
              </div>
            </div>
          </div>

          <!-- 土壤層 -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#F57F17,#F9A825);padding:10px 12px;">
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <div style="color:#fff;font-weight:700;font-size:0.86rem;">🌱 土壤層</div>
                <span style="background:rgba(255,255,255,0.18);color:#fff;border-radius:20px;padding:2px 8px;font-size:0.72rem;white-space:nowrap;">數千至數萬年</span>
              </div>
              <div style="color:rgba(255,255,255,0.85);font-size:0.73rem;margin-top:2px;">Pedological Level</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="margin-bottom:6px;">
                <div style="font-size:0.74rem;font-weight:700;color:#E65100;margin-bottom:3px;">🔍 研究重點</div>
                <div style="font-size:0.75rem;color:#555;line-height:1.6;">土壤剖面、層次結構、發育程度</div>
              </div>
              <div style="margin-bottom:7px;">
                <div style="font-size:0.74rem;font-weight:700;color:#E65100;margin-bottom:3px;">📌 實例</div>
                <div style="font-size:0.75rem;color:#555;line-height:1.6;">Pomerol的鐵質黏土層（crasse de fer）</div>
              </div>
              <div style="background:#FFFDE7;border-radius:4px;padding:4px 7px;font-size:0.73rem;color:#F57F17;line-height:1.6;">
                🛠 土壤剖面分析・理化測試・顯微鏡觀察
              </div>
            </div>
          </div>

          <!-- 根際層 -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:10px 12px;">
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <div style="color:#fff;font-weight:700;font-size:0.86rem;">🌿 根際層</div>
                <span style="background:rgba(255,255,255,0.18);color:#fff;border-radius:20px;padding:2px 8px;font-size:0.72rem;white-space:nowrap;">季節性變化</span>
              </div>
              <div style="color:rgba(255,255,255,0.85);font-size:0.73rem;margin-top:2px;">Rhizosphere Level</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="margin-bottom:6px;">
                <div style="font-size:0.74rem;font-weight:700;color:#1B5E20;margin-bottom:3px;">🔍 研究重點</div>
                <div style="font-size:0.75rem;color:#555;line-height:1.6;">根系—土壤—微生物互動</div>
              </div>
              <div style="margin-bottom:7px;">
                <div style="font-size:0.74rem;font-weight:700;color:#1B5E20;margin-bottom:3px;">📌 實例</div>
                <div style="font-size:0.75rem;color:#555;line-height:1.6;">葡萄根系分泌物與菌根真菌共生</div>
              </div>
              <div style="background:#E8F5E9;border-radius:4px;padding:4px 7px;font-size:0.73rem;color:#1B5E20;line-height:1.6;">
                🛠 根系觀察・微生物測序・土壤呼吸測定
              </div>
            </div>
          </div>

        </div>
        <div style="background:linear-gradient(135deg,#37474F,#455A64);border-radius:8px;padding:10px 16px;text-align:center;">
          <span style="color:#fff;font-size:0.8rem;line-height:1.6;">💡 理解土壤需要跨越時間尺度——從地質演化（數百萬年）到當下的生物互動（當季）</span>
        </div>
      </div>
    `
  },

  {
    type: 'interactive-quiz',
    title: '知識檢測：土壤基礎',
    question: '葡萄種植中，土壤的哪個特性最直接影響根系的深度和水分獲取？',
    options: [
      '土壤的化學pH值',
      '土壤的物理質地和結構',
      '土壤的有機質含量',
      '土壤的微生物多樣性'
    ],
    correct: 1,
    explanation: '土壤的物理特性，特別是質地（沙、粉砂、黏土比例）和結構（顆粒聚合方式），直接決定了根系能穿透的深度、排水性和保水性。這是根系生長的基礎環境。化學和生物特性雖然重要，但需要建立在適宜的物理結構之上。'
  },

  // ========== 第二章：波爾多的土壤地圖 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '波爾多的土壤拼圖',
    subtitle: '五大土壤類型與地理分布',
    icon: '🗺️',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },

  {
    type: 'content',
    title: '波爾多土壤形成的地質歷史',
    content: [
      {
        subtitle: '第四紀冰期的遺產',
        text: '波爾多土壤的多樣性源於第四紀（過去260萬年）的冰期-間冰期循環。在冰期，阿爾卑斯山和庇里牛斯山的冰川融化，加龍河和多爾多涅河攜帶大量沉積物，在不同時期沉積形成了今天的土壤格局。',
        timeline: [
          'Günz冰期（100-60萬年前）：最古老的礫石臺地，最高海拔，排水最佳',
          'Mindel冰期（60-40萬年前）：中等高度臺地',
          'Riss冰期（30-13萬年前）：較低臺地',
          'Würm冰期（11-1萬年前）：最年輕的沉積層，最靠近河流'
        ]
      },
      {
        subtitle: '左岸與右岸的根本差異',
        text: '加龍河（左岸）與多爾多涅河（右岸）的源頭和流經區域不同，導致沉積物的組成差異。',
        leftBank: '加龍河源自庇里牛斯山，攜帶花崗岩和石英礫石，形成排水性極佳的礫石土壤',
        rightBank: '多爾多涅河源自中央高原，攜帶更多黏土和石灰岩，形成保水性強的黏土土壤'
      }
    ]
  },

  {
    type: 'content',
    title: '土壤類型① 礫石土壤 (Gravel / Graves) 🪨',
    content: `
      <div class="soil-detail">
        <div class="soil-image">
          <img src="/images/L3-2/01%20%E7%A4%AB%E7%9F%B3%E5%9C%9F%E5%A3%A4.png" alt="礫石土壤" />
        </div>
        <div class="soil-header">
          <h3>🪨 礫石土壤 (Gravel / Graves)</h3>
          <p class="french-name">法文：Graves</p>
        </div>

        <div class="soil-section">
          <h4>📍 地理分布</h4>
          <p>左岸Médoc、Graves產區</p>
        </div>

        <div class="soil-section">
          <h4>🌍 地質成因</h4>
          <p>第四紀冰期河流沉積，主要來自庇里牛斯山</p>
        </div>

        <div class="soil-section">
          <h4>🔬 土壤組成</h4>
          <ul>
            <li><strong>主要成分：</strong>石英和花崗岩礫石（直徑2-20cm）</li>
            <li><strong>次要成分：</strong>粗砂、少量黏土</li>
            <li><strong>深度：</strong>1-4米礫石層，下層黏土或砂質黏土</li>
          </ul>
        </div>

        <div class="soil-section">
          <h4>⚗️ 物理特性</h4>
          <ul>
            <li><strong>排水性：</strong>極佳 - 多孔結構，水分快速下滲</li>
            <li><strong>保水性：</strong>低 - 需要深根系</li>
            <li><strong>熱容量：</strong>高 - 白天吸熱、夜間釋放，延長成熟期</li>
            <li><strong>反射性：</strong>高 - 反射陽光，增加光合作用</li>
          </ul>
        </div>

        <div class="soil-section">
          <h4>🧪 化學特性</h4>
          <ul>
            <li><strong>pH值：</strong>6.5-7.0（微酸至中性）</li>
            <li><strong>肥力：</strong>低至中等 - 貧瘠促進品質</li>
            <li><strong>礦物質：</strong>鐵、鉀含量適中</li>
          </ul>
        </div>

        <div class="soil-section highlight">
          <h4>🍇 最適合的葡萄品種</h4>
          <p><strong>Cabernet Sauvignon（晚熟，需要充分熱量）</strong></p>
          <ul>
            <li>優秀排水防止根腐</li>
            <li>熱量儲存促進緩慢成熟</li>
            <li>適度水分脅迫濃縮風味</li>
            <li>低肥力控制產量</li>
          </ul>
        </div>

        <div class="soil-section">
          <h4>🍷 葡萄酒風格特徵</h4>
          <ul>
            <li>結構感強：單寧豐富且緊實</li>
            <li>陳年潛力長：15-30年甚至更久</li>
            <li>礦物感：石墨、鉛筆芯特徵</li>
            <li>黑色水果主導：黑醋栗、黑櫻桃</li>
            <li>優雅克制：而非過度成熟</li>
          </ul>
        </div>

        <div class="soil-section">
          <h4>🏆 頂級代表酒莊</h4>
          <p>Château Latour、Château Margaux、Château Haut-Brion</p>
        </div>

        <div class="soil-section">
          <h4>🌡️ 氣候適應性</h4>
          <p>乾旱年份需要灌溉管理，排水優勢在多雨年份更明顯</p>
        </div>
      </div>
    `,
    icon: '🪨'
  },

  {
    type: 'content',
    title: '土壤類型② 黏土 (Clay / Argile) 🧱',
    content: `
      <div class="soil-detail">
        <div class="soil-image">
          <img src="/images/L3-2/02%20%E9%BB%8F%E5%9C%9F.png" alt="黏土" />
        </div>
        <div class="soil-header">
          <h3>🧱 黏土 (Clay / Argile)</h3>
          <p class="french-name">法文：Argile</p>
        </div>

        <div class="soil-section">
          <h4>📍 地理分布</h4>
          <p>右岸Pomerol、Saint-Émilion平原</p>
        </div>

        <div class="soil-section">
          <h4>🌍 地質成因</h4>
          <p>古老海洋沉積、河流沖積</p>
        </div>

        <div class="soil-section">
          <h4>🔬 土壤組成</h4>
          <ul>
            <li><strong>主要成分：</strong>黏土礦物（蒙脫石、伊利石）</li>
            <li><strong>次要成分：</strong>粉砂、少量砂</li>
            <li><strong>深度：</strong>深厚，可達數米</li>
          </ul>
        </div>

        <div class="soil-section">
          <h4>⚗️ 物理特性</h4>
          <ul>
            <li><strong>排水性：</strong>差至中等 - 顆粒細小，排水慢</li>
            <li><strong>保水性：</strong>極高 - 雨季吸水，旱季釋放</li>
            <li><strong>熱容量：</strong>中等 - 升溫慢，保溫性好</li>
            <li><strong>可耕性：</strong>濕時黏重，乾時堅硬</li>
          </ul>
        </div>

        <div class="soil-section">
          <h4>🧪 化學特性</h4>
          <ul>
            <li><strong>pH值：</strong>7.0-8.0（中性至微鹼）</li>
            <li><strong>肥力：</strong>高 - 富含礦物質</li>
            <li><strong>CEC：</strong>高 - 保持養分能力強</li>
            <li><strong>礦物質：</strong>鐵、鎂、鉀豐富（Pomerol的鐵質黏土尤其著名）</li>
          </ul>
        </div>

        <div class="soil-section highlight">
          <h4>🍇 最適合的葡萄品種</h4>
          <p><strong>Merlot（早熟，適應保水環境）</strong></p>
          <ul>
            <li>保水性在乾旱時是優勢</li>
            <li>豐富養分支持Merlot的早期生長</li>
            <li>黏土冷涼特性避免過度成熟</li>
            <li>礦物質賦予複雜度</li>
          </ul>
        </div>

        <div class="soil-section">
          <h4>🍷 葡萄酒風格特徵</h4>
          <ul>
            <li>酒體飽滿：豐滿圓潤的質地</li>
            <li>單寧柔和：天鵝絨般的口感</li>
            <li>果味深邃：李子、黑莓、櫻桃</li>
            <li>礦物複雜度：泥土、松露、鐵礦</li>
            <li>提早適飲：5-15年</li>
          </ul>
        </div>

        <div class="soil-section special">
          <h4>⭐ 特殊類型：Crasse de fer（鐵磐層）</h4>
          <p>Pomerol獨特的鐵質硬化層，富含氧化鐵，賦予葡萄酒礦物感和獨特香氣</p>
          <p><em>位於地表下30-80cm</em></p>
        </div>

        <div class="soil-section">
          <h4>🏆 頂級代表酒莊</h4>
          <p>Pétrus、Château Le Pin、Château Lafleur</p>
        </div>

        <div class="soil-section">
          <h4>🌡️ 氣候適應性</h4>
          <p>多雨年份排水壓力大，乾旱年份是優勢</p>
        </div>
      </div>
    `,
    icon: '🧱'
  },

  {
    type: 'content',
    title: '土壤類型③ 石灰岩 (Limestone / Calcaire) ⛰️',
    content: `
      <div class="soil-detail">
        <div class="soil-image">
          <img src="/images/L3-2/03%20%E7%9F%B3%E7%81%B0%E5%B2%A9.png" alt="石灰岩" />
        </div>
        <div class="soil-header">
          <h3>⛰️ 石灰岩 (Limestone / Calcaire)</h3>
          <p class="french-name">法文：Calcaire</p>
        </div>

        <div class="soil-section">
          <h4>📍 地理分布</h4>
          <p>Saint-Émilion高原、Côtes產區</p>
        </div>

        <div class="soil-section">
          <h4>🌍 地質成因</h4>
          <p>古代海洋生物骨骼沉積（第三紀，約3000-6000萬年前）</p>
        </div>

        <div class="soil-section">
          <h4>🔬 土壤組成</h4>
          <ul>
            <li><strong>主要成分：</strong>碳酸鈣（CaCO₃）含量高</li>
            <li><strong>次要成分：</strong>黏土、粉砂混合</li>
            <li><strong>深度：</strong>基岩型或風化層，深度不一</li>
          </ul>
        </div>

        <div class="soil-section">
          <h4>⚗️ 物理特性</h4>
          <ul>
            <li><strong>排水性：</strong>優良 - 多孔性強</li>
            <li><strong>保水性：</strong>中等 - 內部儲水</li>
            <li><strong>熱容量：</strong>高 - 白色反射光，但保溫性好</li>
            <li><strong>根系穿透性：</strong>良好 - 根系易穿透裂隙</li>
          </ul>
        </div>

        <div class="soil-section">
          <h4>🧪 化學特性</h4>
          <ul>
            <li><strong>pH值：</strong>7.5-8.5（鹼性）</li>
            <li><strong>鈣含量：</strong>極高 - 影響單寧結構</li>
            <li><strong>肥力：</strong>中等 - 需有機質補充</li>
            <li><strong>礦物成分：</strong>鈣、鎂主導</li>
          </ul>
        </div>

        <div class="soil-section highlight">
          <h4>🍇 最適合的葡萄品種</h4>
          <p><strong>Cabernet Franc, Merlot</strong></p>
          <ul>
            <li>高鈣含量形成細膩單寧</li>
            <li>優秀排水保持新鮮度</li>
            <li>礦物感突出風土特徵</li>
            <li>涼爽效應保持酸度</li>
          </ul>
        </div>

        <div class="soil-section">
          <h4>🍷 葡萄酒風格特徵</h4>
          <ul>
            <li>優雅精緻：輕盈而不失深度</li>
            <li>礦物感強：白堊、濕石頭、鹹鮮感</li>
            <li>酸度活潑：清新明亮</li>
            <li>單寧細膩：絲滑柔順</li>
            <li>花香突出：紫羅蘭、玫瑰</li>
          </ul>
        </div>

        <div class="soil-section special">
          <h4>📊 石灰岩亞類型</h4>
          <ul>
            <li><strong>硬石灰岩（calcaire à astéries）：</strong>Saint-Émilion高原頂部，排水最佳</li>
            <li><strong>軟石灰岩（molasses）：</strong>風化程度高，黏土含量較多</li>
          </ul>
        </div>

        <div class="soil-section">
          <h4>🏆 頂級代表酒莊</h4>
          <p>Château Ausone、Château Pavie、Château Canon</p>
        </div>

        <div class="soil-section">
          <h4>🌡️ 氣候適應性</h4>
          <p>耐乾旱性好，但薄土層在極端乾旱時需要灌溉</p>
        </div>
      </div>
    `,
    icon: '⛰️'
  },

  {
    type: 'content',
    title: '土壤類型④ 砂土 (Sand / Sable) 🏖️',
    content: `
      <div class="soil-detail">
        <div class="soil-image">
          <img src="/images/L3-2/04%20%E7%A0%82%E5%9C%9F.png" alt="砂土" />
        </div>
        <div class="soil-header">
          <h3>🏖️ 砂土 (Sand / Sable)</h3>
          <p class="french-name">法文：Sable</p>
        </div>

        <div class="soil-section">
          <h4>📍 地理分布</h4>
          <p>Médoc靠海地區、Entre-Deux-Mers部分區域</p>
        </div>

        <div class="soil-section">
          <h4>🌍 地質成因</h4>
          <p>古代河床、風積沉積</p>
        </div>

        <div class="soil-section">
          <h4>🔬 土壤組成</h4>
          <ul>
            <li><strong>主要成分：</strong>石英砂（直徑0.05-2mm）</li>
            <li><strong>次要成分：</strong>少量黏土和有機質</li>
            <li><strong>深度：</strong>深厚，數米</li>
          </ul>
        </div>

        <div class="soil-section">
          <h4>⚗️ 物理特性</h4>
          <ul>
            <li><strong>排水性：</strong>極快 - 顆粒間隙大</li>
            <li><strong>保水性：</strong>極低 - 旱災風險高</li>
            <li><strong>熱容量：</strong>低 - 快速升溫和降溫</li>
            <li><strong>可耕性：</strong>易耕作</li>
          </ul>
        </div>

        <div class="soil-section">
          <h4>🧪 化學特性</h4>
          <ul>
            <li><strong>pH值：</strong>6.0-7.0（微酸至中性）</li>
            <li><strong>肥力：</strong>低 - 貧瘠</li>
            <li><strong>CEC：</strong>低 - 難以保持養分</li>
            <li><strong>有機質：</strong>低</li>
          </ul>
        </div>

        <div class="soil-section highlight">
          <h4>🍇 最適合的葡萄品種</h4>
          <p><strong>早熟品種（Merlot）、根瘤蚜災後重建</strong></p>
          <ul>
            <li>根瘤蚜在砂土中難以生存</li>
            <li>排水防止根部病害</li>
            <li>低產量濃縮風味</li>
            <li>早熟特性</li>
          </ul>
        </div>

        <div class="soil-section">
          <h4>🍷 葡萄酒風格特徵</h4>
          <ul>
            <li>輕盈柔和：酒體較輕</li>
            <li>果味主導：紅色水果為主</li>
            <li>單寧柔順：缺乏結構感</li>
            <li>提早適飲：3-8年</li>
            <li>芳香性：花香和果香明顯</li>
          </ul>
        </div>

        <div class="soil-section warning">
          <h4>⚠️ 管理挑戰</h4>
          <ul>
            <li>乾旱脅迫嚴重</li>
            <li>肥力不足需管理</li>
            <li>陳年潛力有限</li>
            <li>市場認知度低</li>
          </ul>
        </div>

        <div class="soil-section">
          <h4>🌡️ 氣候變化下的機會</h4>
          <p>氣候變暖可能提升砂土產區的價值（排水和早熟優勢）</p>
        </div>
      </div>
    `,
    icon: '🏖️'
  },

  {
    type: 'content',
    title: '土壤類型⑤ 黏土-石灰岩混合 (Clay-Limestone) 🌋',
    content: `
      <div class="soil-detail">
        <div class="soil-image">
          <img src="/images/L3-2/05%20%E9%BB%8F%E5%9C%9F%E7%9F%B3%E7%81%B0%E5%B2%A9%E6%B7%B7%E5%90%88.png" alt="黏土石灰岩混合" />
        </div>
        <div class="soil-header">
          <h3>🌋 黏土-石灰岩混合 (Clay-Limestone)</h3>
          <p class="french-name">法文：Argilo-calcaire</p>
        </div>

        <div class="soil-section">
          <h4>📍 地理分布</h4>
          <p>Saint-Émilion Côtes、Fronsac</p>
        </div>

        <div class="soil-section">
          <h4>🌍 地質成因</h4>
          <p>石灰岩風化混合黏土沉積</p>
        </div>

        <div class="soil-section">
          <h4>🔬 土壤組成</h4>
          <ul>
            <li><strong>主要成分：</strong>黏土與碳酸鈣混合</li>
            <li><strong>次要成分：</strong>礦物質豐富</li>
            <li><strong>比例：</strong>黏土:石灰岩 = 40-60% : 30-50%</li>
          </ul>
        </div>

        <div class="soil-section">
          <h4>⚗️ 物理特性</h4>
          <ul>
            <li><strong>排水性：</strong>良好至中等</li>
            <li><strong>保水性：</strong>中至高</li>
            <li><strong>熱容量：</strong>中等</li>
            <li><strong>多功能性：</strong>高 - 兼具排水和保水</li>
          </ul>
        </div>

        <div class="soil-section">
          <h4>🧪 化學特性</h4>
          <ul>
            <li><strong>pH值：</strong>7.0-8.0（中性至微鹼）</li>
            <li><strong>肥力：</strong>中至高</li>
            <li><strong>礦物複雜度：</strong>鈣、鐵、鎂平衡</li>
          </ul>
        </div>

        <div class="soil-section highlight">
          <h4>🍇 最適合的葡萄品種</h4>
          <p><strong>Merlot, Cabernet Franc 混釀</strong></p>
          <ul>
            <li>平衡的水分管理</li>
            <li>黏土提供豐滿度，石灰岩提供清爽度</li>
            <li>礦物複雜度高</li>
            <li>適應性強</li>
          </ul>
        </div>

        <div class="soil-section">
          <h4>🍷 葡萄酒風格特徵</h4>
          <ul>
            <li>平衡性佳：融合黏土的飽滿和石灰岩的優雅</li>
            <li>複雜度高：多層次風味</li>
            <li>陳年潛力：10-20年</li>
            <li>礦物與果味並重</li>
          </ul>
        </div>

        <div class="soil-section special">
          <h4>⭐ 獨特優勢</h4>
          <p>被認為是"最完美的平衡"，兼具兩種土壤優點</p>
        </div>

        <div class="soil-section">
          <h4>🏆 頂級代表酒莊</h4>
          <p>Château Angélus、Château Cheval Blanc（部分地塊）</p>
        </div>
      </div>
    `,
    icon: '🌋'
  },

  {
    type: 'soil-distribution-map',
    title: '波爾多土壤地理分布',
    description: '主要產區的土壤特徵總覽',
    mapImage: '/images/L3-2/%E6%B3%A2%E7%88%BE%E5%A4%9A%E5%9C%9F%E5%A3%A4%E5%9C%B0%E7%90%86%E5%88%86%E5%B8%83.png',
    regions: [
      {
        name: 'Médoc',
        dominantSoil: '礫石（Gravel）',
        subZones: [
          'Margaux：細礫石，優雅',
          'Pauillac：深厚礫石，強勁',
          'Saint-Julien：礫石黏土混合，平衡',
          'Saint-Estèphe：更多黏土，強壯'
        ],
        geologicalFeature: 'Günz至Würm四期冰川臺地'
      },
      {
        name: 'Graves & Pessac-Léognan',
        dominantSoil: '礫石（Gravel）',
        uniqueness: '更深厚的礫石層（可達10米），更複雜的微氣候',
        whiteWine: '也適合白葡萄品種（Sauvignon Blanc, Sémillon）'
      },
      {
        name: 'Pomerol',
        dominantSoil: '黏土（Clay），特別是鐵質黏土',
        uniqueness: 'Crasse de fer鐵磐層，世界獨有',
        varietalFocus: 'Merlot主導（80-95%）'
      },
      {
        name: 'Saint-Émilion',
        dominantSoil: '多樣化',
        subZones: [
          '高原（Plateau）：石灰岩，優雅',
          '坡地（Côtes）：黏土-石灰岩，平衡',
          '平原（Plaine）：砂土-黏土，果味'
        ],
        diversity: '土壤多樣性造就風格差異大'
      },
      {
        name: 'Entre-Deux-Mers',
        dominantSoil: '黏土-石灰岩混合',
        characteristics: '良好的排水和保水平衡',
        focus: '白葡萄酒產區，紅酒也在提升'
      }
    ]
  },

  {
    type: 'interactive-quiz',
    title: '知識檢測：土壤類型',
    question: 'Château Pétrus之所以能產出世界頂級的Merlot葡萄酒，其土壤的關鍵特徵是什麼？',
    options: [
      '深厚的礫石層提供優秀排水',
      '獨特的鐵質黏土（crasse de fer）層',
      '高海拔石灰岩高原',
      '砂質土壤的早熟特性'
    ],
    correct: 1,
    explanation: 'Château Pétrus位於Pomerol產區的核心，其葡萄園擁有獨特的"crasse de fer"（鐵磐層），這是富含氧化鐵的硬化黏土層。這種土壤保水性極強，在乾旱年份為Merlot提供穩定水分；同時富含礦物質，賦予葡萄酒深邃的果味、天鵝絨般的質地和獨特的礦物複雜度。鐵質含量還帶來松露、泥土的標誌性香氣。'
  },

  // ========== 第三章：土壤-葡萄-酒款的科學關聯 ==========
  {
    type: 'chapter-divider',
    chapter: '3',
    title: '從土壤到酒杯的轉化機制',
    subtitle: '科學解碼terroir',
    icon: '🔬',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },

  {
    type: 'content',
    title: '土壤→葡萄路徑① 水分脅迫與濃縮',
    content: `
      <div class="pathway-detail">
        <div class="pathway-image">
          <img src="/images/L3-2/01%20%E6%B0%B4%E5%88%86%E8%84%85%E8%BF%AB%E8%88%87%E6%BF%83%E7%B8%AE.png" alt="水分脅迫與濃縮" style="max-width: 100%; height: auto; margin-bottom: 20px;" />
        </div>
        <div class="pathway-section">
          <h4>🔬 機制</h4>
          <p>排水/保水決定藤蔓水分狀態。適度水分脅迫有助於高品質。</p>
        </div>
        <div class="pathway-section">
          <h4>📊 具體影響</h4>
          <p>輕度脅迫→生長轉向果實；果皮/果肉比↑；果粒變小；根系向深處延伸</p>
        </div>
        <div class="pathway-section highlight">
          <h4>⚖️ 土壤對比</h4>
          <p><strong>礫石：</strong>脅迫較強→濃縮度高</p>
          <p><strong>黏土：</strong>脅迫較輕→酒體飽滿</p>
          <p><em>關鍵在於避免過度或不足的水分壓力</em></p>
        </div>
      </div>
    `,
    icon: '💧'
  },

  {
    type: 'content',
    title: '土壤→葡萄路徑② 礦物吸收與風味',
    content: `
      <div class="pathway-detail">
        <div class="pathway-image">
          <img src="/images/L3-2/02%20%E7%A4%A6%E7%89%A9%E5%90%B8%E6%94%B6%E8%88%87%E9%A2%A8%E5%91%B3.png" alt="礦物吸收與風味" style="max-width: 100%; height: auto; margin-bottom: 20px;" />
        </div>
        <div class="pathway-section">
          <h4>🧪 機制與要點</h4>
          <p>礦物元素透過根系參與代謝，影響香氣與風味化合物合成。</p>
        </div>
        <div class="pathway-section">
          <h4>⚗️ 關鍵礦物元素的作用</h4>
          <ul>
            <li><strong>Ca（鈣）：</strong>細胞壁結構與單寧細膩度</li>
            <li><strong>Fe（鐵）：</strong>色澤深度與礦物香氣</li>
            <li><strong>Mg（鎂）：</strong>葉綠素合成與糖分累積</li>
            <li><strong>K（鉀）：</strong>水分與糖分運輸</li>
            <li><strong>N（氮）：</strong>香氣前驅物生成（適量）</li>
          </ul>
        </div>
        <div class="pathway-section highlight">
          <h4>💡 科學觀點</h4>
          <p>「礦物感」的具體來源在學術界尚無定論，但礦物組成確實深刻影響葡萄的生理代謝與風味化合物合成。</p>
        </div>
      </div>
    `,
    icon: '⚗️'
  },

  {
    type: 'content',
    title: '土壤→葡萄路徑③ 根系深度與複雜度',
    content: `
      <div class="pathway-detail">
        <div class="pathway-image">
          <img src="/images/L3-2/03%20%E6%A0%B9%E7%B3%BB%E6%B7%B1%E5%BA%A6%E8%88%87%E8%A4%87%E9%9B%9C%E5%BA%A6.png" alt="根系深度與複雜度" style="max-width: 100%; height: auto; margin-bottom: 20px;" />
        </div>
        <div class="pathway-section">
          <h4>🌱 深度分層影響</h4>
          <ul>
            <li><strong>淺根（0-50cm）：</strong>受氣候與水分波動影響大</li>
            <li><strong>中層（50-150cm）：</strong>養分與水分供應穩定</li>
            <li><strong>深根（150-300cm+）：</strong>礦物質豐富、抗旱能力強、增加複雜度</li>
          </ul>
        </div>
        <div class="pathway-section">
          <h4>🪨 不同土壤的根系表現</h4>
          <ul>
            <li><strong>石灰岩：</strong>裂隙結構有利於深根系發展</li>
            <li><strong>黏土：</strong>穿透阻力大但養分分布廣</li>
            <li><strong>礫石：</strong>中等深度，根系發展穩定</li>
          </ul>
        </div>
        <div class="pathway-section highlight">
          <h4>🎯 複雜度的秘密</h4>
          <p>多層土壤結構（如表層礫石/下層黏土）常常帶來更複雜的風味表達，因為根系可以從不同深度吸收多樣化的養分與礦物質。</p>
        </div>
      </div>
    `,
    icon: '🌳'
  },

  {
    type: 'content',
    title: '土壤→葡萄路徑④ 微生物組與健康',
    content: `
      <div class="pathway-detail">
        <div class="pathway-image">
          <img src="/images/L3-2/04%20%E5%BE%AE%E7%94%9F%E7%89%A9%E7%B5%84%E8%88%87%E5%81%A5%E5%BA%B7.png" alt="微生物組與健康" style="max-width: 100%; height: auto; margin-bottom: 20px;" />
        </div>
        <div class="pathway-section">
          <h4>🦠 關鍵作用</h4>
          <p>土壤微生物群落影響養分轉化、病害抑制與根系健康，間接影響葡萄品質。</p>
        </div>
        <div class="pathway-section">
          <h4>🔬 主要微生物類型與功能</h4>
          <ul>
            <li><strong>菌根真菌（Mycorrhizae）：</strong>擴大根系吸收面積</li>
            <li><strong>固氮菌：</strong>提供可用氮素</li>
            <li><strong>拮抗菌：</strong>抑制病原菌，減少病害</li>
            <li><strong>分解菌：</strong>分解有機質，釋放養分</li>
          </ul>
        </div>
        <div class="pathway-section">
          <h4>🌿 管理方法</h4>
          <p>有機農法、生物動力法（Biodynamic）可顯著提升土壤微生物多樣性與活性。</p>
        </div>
        <div class="pathway-section highlight">
          <h4>🔍 前沿觀點</h4>
          <p>土壤微生物組可能是 terroir（風土）的「隱藏維度」——不同土壤的微生物群落差異可能解釋部分風土獨特性。</p>
        </div>
      </div>
    `,
    icon: '🦠'
  },

  {
    type: 'content',
    title: '土壤→葡萄路徑⑤ 溫度調節與成熟',
    content: `
      <div class="pathway-detail">
        <div class="pathway-image">
          <img src="/images/L3-2/05%20%E6%BA%AB%E5%BA%A6%E8%AA%BF%E7%AF%80%E8%88%87%E6%88%90%E7%86%9F.png" alt="溫度調節與成熟" style="max-width: 100%; height: auto; margin-bottom: 20px;" />
        </div>
        <div class="pathway-section">
          <h4>🌡️ 溫度效應</h4>
          <p>土壤的熱容量與顏色影響其溫度曲線，進而改變葡萄的成熟節奏與最終風格。</p>
        </div>
        <div class="pathway-section">
          <h4>🎨 不同土壤的溫度特性</h4>
          <ul>
            <li><strong>白色礫石/石灰岩：</strong>反射陽光，加速成熟</li>
            <li><strong>深色黏土：</strong>夜間緩慢釋放熱量，拉長成熟期</li>
            <li><strong>砂土：</strong>溫度升降快，有助於保持酸度</li>
            <li><strong>深層礫石：</strong>儲存熱量，提供額外熱能</li>
          </ul>
        </div>
        <div class="pathway-section highlight">
          <h4>⏰ 實例：Médoc的礫石優勢</h4>
          <p>Médoc深厚的礫石層能夠為晚熟品種（如 Cabernet Sauvignon）提供額外 2-3 週的有效熱量積累時間，這是該產區能夠完美成熟卡本內蘇維濃的關鍵優勢之一。</p>
        </div>
      </div>
    `,
    icon: '🌡️'
  },

  {
    type: 'content',
    title: '🎯 土壤-品種-風格關聯矩陣',
    content: `
      <div class="matrix-detail">
        <div class="matrix-intro">
          <p class="matrix-description">從土壤特性剖析葡萄酒風格表現，理解風土的科學基礎</p>
        </div>
        <div class="matrix-image">
          <img src="/images/L3-2/%E5%9C%9F%E5%A3%A4-%E5%93%81%E7%A8%AE-%E9%A2%A8%E6%A0%BC%20%E9%97%9C%E8%81%AF%E7%9F%A9%E9%99%A3%E5%9C%96.png" alt="土壤-品種-風格關聯矩陣圖" style="max-width: 100%; height: auto; margin: 20px 0;" />
        </div>
        <div class="matrix-note">
          <h4>💡 重要提示</h4>
          <p>土壤是風土的基石，但葡萄酒最終風格由<strong>「土壤 × 品種選擇 × 氣候年份 × 釀造技術 × 酒莊理念」</strong>五大要素共同決定。上述矩陣展示該土壤類型的典型表現，實際會因具體地塊微氣候和釀酒師風格而異。</p>
        </div>
      </div>
    `,
    icon: '🎯'
  },

  {
    type: 'case-study',
    title: '案例：Château Cheval Blanc的土壤奇蹟',
    estate: 'Château Cheval Blanc',
    location: 'Saint-Émilion（但靠近Pomerol邊界）',
    classification: 'Saint-Émilion Premier Grand Cru Classé A',
    uniqueness: '波爾多最複雜的土壤拼圖之一',
    soilComposition: {
      description: '葡萄園被分為45個地塊，每個地塊土壤組成不同',
      types: [
        '礫石區（約40%）：類似Pomerol，來自古代河床',
        '黏土區（約35%）：鐵質黏土和藍色黏土',
        '砂土區（約15%）：古老沖積層',
        '黏土-石灰岩（約10%）：Saint-Émilion Côtes特徵'
      ]
    },
    varietalStrategy: {
      cabFranc: 'Cabernet Franc 52% - 種植於礫石和砂質土壤，帶來優雅、花香和礦物感',
      merlot: 'Merlot 43% - 種植於黏土區，提供飽滿度和深度',
      cabSauv: 'Cabernet Sauvignon 5% - 少量點綴，增加結構'
    },
    winemaking: {
      philosophy: '地塊分別發酵，根據年份特徵和土壤表現進行調配',
      complexity: '每年調配來自45個地塊的酒液，創造獨特的複雜度和平衡',
      terroir: '土壤多樣性是Cheval Blanc複雜度和獨特性的核心'
    },
    result: [
      '風格獨特：不像典型的Saint-Émilion（更優雅）也不像Pomerol（更結構）',
      '複雜度極高：礦物、花香、果味、香料多層次融合',
      '陳年潛力：20-40年',
      '市場地位：右岸價格最高的酒款之一'
    ],
    lesson: '土壤多樣性不是劣勢而是優勢，關鍵在於如何理解和利用每塊土壤的特性',
    quote: {
      text: '我們不是在釀造一個單一的酒，而是在協調45種不同的聲音，創造一首交響樂。',
      author: 'Pierre Lurton',
      title: 'Château Cheval Blanc總經理'
    }
  },

  {
    type: 'interactive-quiz',
    title: '知識檢測：土壤機制',
    question: '為什麼Médoc的深厚礫石土壤特別適合晚熟的Cabernet Sauvignon？',
    options: [
      '礫石提供豐富的養分促進快速成熟',
      '礫石的高熱容量在夜間釋放熱量，延長有效成熟期',
      '礫石土壤的高保水性保證充足水分',
      '礫石的白色反射冷光，降低葡萄溫度'
    ],
    correct: 1,
    explanation: 'Médoc的深厚礫石層（可達3-4米）具有高熱容量（thermal mass）。白天，礫石吸收大量太陽輻射熱量；夜間和陰雨天，礫石緩慢釋放這些熱量，為葡萄提供額外的溫暖環境。這相當於為晚熟的Cabernet Sauvignon延長了2-3週的有效成熟期，使其在波爾多相對涼爽的海洋性氣候下也能達到完美成熟。這是Médoc成為Cabernet Sauvignon聖地的關鍵土壤優勢。'
  },

  // ========== 第四章：土壤管理與實務 ==========
  {
    type: 'chapter-divider',
    chapter: '4',
    title: '土壤管理與實務',
    subtitle: '從地表到根際的綜合管理',
    icon: '🛠️',
    background: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)'
  },

  {
    type: 'content',
    title: '地表管理：覆蓋作物與抑草',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px;">

          <!-- 覆蓋作物 -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#2E7D32,#388E3C);padding:10px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🌿</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.88rem;">覆蓋作物 Cover Crops</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.74rem;">主動改善土壤結構</div>
              </div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="font-size:0.78rem;color:#555;line-height:1.65;margin-bottom:8px;">提升土壤有機質、改善團粒結構、促進微生物活性，並能固定氮素或抑制雜草。</div>
              <div style="background:#F1F8E9;border-radius:6px;padding:7px 10px;margin-bottom:8px;">
                <div style="font-size:0.74rem;font-weight:700;color:#2E7D32;margin-bottom:4px;">🌾 常見組合</div>
                <ul style="margin:0;padding-left:13px;font-size:0.75rem;color:#333;line-height:1.8;">
                  <li>禾本科 — 增加有機質</li>
                  <li>豆科 — 固定氮素</li>
                  <li>菊科 — 生物鑿孔鬆土</li>
                </ul>
              </div>
              <div style="background:#E8F5E9;border-left:3px solid #2E7D32;border-radius:4px;padding:5px 8px;font-size:0.74rem;color:#1B5E20;">
                ✅ 減少侵蝕・提升持水・穩定溫度・改善可行走性
              </div>
            </div>
          </div>

          <!-- 覆蓋物 Mulch -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F57C00);padding:10px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🪵</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.88rem;">覆蓋物 Mulch</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.74rem;">降蒸發・壓雜草・護土層</div>
              </div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="font-size:0.78rem;color:#555;line-height:1.65;margin-bottom:8px;">木屑、稻草、葡萄渣覆蓋可降低蒸發、壓抑雜草並保護土壤表層生命。</div>
              <div style="background:#FFF3E0;border-radius:6px;padding:7px 10px;margin-bottom:8px;">
                <div style="font-size:0.74rem;font-weight:700;color:#E65100;margin-bottom:4px;">⚠️ 管理注意</div>
                <ul style="margin:0;padding-left:13px;font-size:0.75rem;color:#333;line-height:1.8;">
                  <li>兼顧鼠害管理</li>
                  <li>注意氮素鎖定風險</li>
                  <li>依年份彈性調整厚度</li>
                </ul>
              </div>
              <div style="background:#FFF3E0;border-left:3px solid #E65100;border-radius:4px;padding:5px 8px;font-size:0.74rem;color:#BF360C;">
                ✅ 乾旱年份顯著降低灌溉需求
              </div>
            </div>
          </div>

        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '水分管理與土壤結構維護',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px;">

          <!-- 精準灌溉 -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#01579B,#0288D1);padding:10px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">💧</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.88rem;">精準灌溉</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.74rem;">若法規允許</div>
              </div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="font-size:0.78rem;color:#555;line-height:1.65;margin-bottom:8px;">滴灌結合土壤含水監測，將水分投放集中於關鍵期（轉色前後）。</div>
              <div style="background:#E1F5FE;border-radius:6px;padding:7px 10px;margin-bottom:8px;">
                <div style="font-size:0.74rem;font-weight:700;color:#01579B;margin-bottom:4px;">📋 作業原則</div>
                <ul style="margin:0;padding-left:13px;font-size:0.75rem;color:#333;line-height:1.8;">
                  <li>避免連續小水量 → 淺根化</li>
                  <li>低頻但足量 → 鼓勵深根</li>
                  <li>轉色期後收水 → 濃縮風味</li>
                </ul>
              </div>
              <div style="background:#E1F5FE;border-left:3px solid #0288D1;border-radius:4px;padding:5px 8px;font-size:0.74rem;color:#01579B;">
                🎯 目標：「適度水分脅迫」而非高產量灌溉
              </div>
            </div>
          </div>

          <!-- 減少壓實 -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#37474F,#546E7A);padding:10px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🚜</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.88rem;">減少壓實與侵蝕</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.74rem;">保護土壤孔隙結構</div>
              </div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="font-size:0.78rem;color:#555;line-height:1.65;margin-bottom:8px;">合理輪作作業路徑、減少濕土機械通行；坡地採用等高線耕作與草帶。</div>
              <div style="background:#ECEFF1;border-radius:6px;padding:7px 10px;margin-bottom:8px;">
                <div style="font-size:0.74rem;font-weight:700;color:#37474F;margin-bottom:4px;">⚠️ 壓實危害</div>
                <ul style="margin:0;padding-left:13px;font-size:0.75rem;color:#333;line-height:1.8;">
                  <li>孔隙度↓ → 滲水性下降</li>
                  <li>根系淺層化</li>
                  <li>缺氧風險增加</li>
                </ul>
              </div>
              <div style="background:#ECEFF1;border-left:3px solid #546E7A;border-radius:4px;padding:5px 8px;font-size:0.74rem;color:#263238;">
                📊 長期監測：土壤貫入阻力 + 滲透率
              </div>
            </div>
          </div>

        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '案例：Pessac‑Léognan 精準管理',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <!-- 酒莊總覽 banner -->
        <div style="background:linear-gradient(135deg,#1A237E,#283593);border-radius:10px;padding:11px 16px;margin-bottom:12px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:1.5rem;">🏰</span>
          <div style="flex:1;">
            <div style="color:#fff;font-weight:700;font-size:0.9rem;">Château Smith Haut Lafitte</div>
            <div style="color:rgba(255,255,255,0.78);font-size:0.76rem;">Graves / Pessac‑Léognan　紅白雙線著稱</div>
          </div>
          <div style="background:rgba(255,255,255,0.12);border-radius:8px;padding:6px 12px;text-align:center;">
            <div style="color:rgba(255,255,255,0.7);font-size:0.7rem;">核心挑戰</div>
            <div style="color:#fff;font-size:0.77rem;font-weight:600;">極端年份維持紅/白酒平衡與清晰度</div>
          </div>
        </div>

        <!-- 兩欄：地表微氣候 + 結構壓實 -->
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:12px;">

          <!-- 地表與微氣候 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#2E7D32,#43A047);padding:9px 13px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.05rem;">🌡️</span>
              <div style="color:#fff;font-weight:700;font-size:0.84rem;">地表與微氣候管理</div>
            </div>
            <div style="padding:9px 13px 11px;">
              <div style="font-size:0.74rem;font-weight:700;color:#2E7D32;margin-bottom:5px;">🔧 措施</div>
              <ul style="margin:0 0 7px;padding-left:13px;font-size:0.75rem;color:#333;line-height:1.85;">
                <li><strong>行間覆蓋作物</strong>：提升土壤碳、穩定水分與降溫</li>
                <li><strong>生物炭</strong>：提升持水與CEC（局部）</li>
                <li><strong>紅外熱影像</strong>：定位熱斑與缺水點</li>
              </ul>
              <div style="background:#E8F5E9;border-left:3px solid #2E7D32;border-radius:4px;padding:5px 8px;font-size:0.74rem;color:#1B5E20;">
                ✅ 溫度/水分空間差異降低，成熟節奏更整齊
              </div>
            </div>
          </div>

          <!-- 結構與壓實管理 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4E342E,#6D4C41);padding:9px 13px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.05rem;">🏗️</span>
              <div style="color:#fff;font-weight:700;font-size:0.84rem;">結構與壓實管理</div>
            </div>
            <div style="padding:9px 13px 11px;">
              <div style="font-size:0.74rem;font-weight:700;color:#4E342E;margin-bottom:5px;">🔧 措施</div>
              <ul style="margin:0 0 7px;padding-left:13px;font-size:0.75rem;color:#333;line-height:1.85;">
                <li><strong>固定作業車道</strong>：壓實集中於少數路徑</li>
                <li><strong>深根型覆蓋作物</strong>：「生物鑿孔」疏鬆壓實層</li>
                <li><strong>雨後延遲進園</strong>：避免濕土壓實</li>
              </ul>
              <div style="background:#EFEBE9;border-left:3px solid #4E342E;border-radius:4px;padding:5px 8px;font-size:0.74rem;color:#3E2723;">
                ✅ 孔隙度↑，滲水性改善，根系更深入
              </div>
            </div>
          </div>

        </div>

        <!-- 綜合成效 -->
        <div style="background:linear-gradient(135deg,#1A237E,#311B92);border-radius:8px;padding:10px 16px;">
          <div style="color:rgba(255,255,255,0.7);font-size:0.73rem;margin-bottom:4px;">🏆 綜合成效</div>
          <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">
            <div style="color:#fff;font-size:0.77rem;line-height:1.6;">🍷 熱浪年單寧更柔順、白酒酸度保留更佳</div>
            <div style="color:#fff;font-size:0.77rem;line-height:1.6;">⚙️ 灌溉依賴降低、作業視窗更彈性</div>
          </div>
        </div>

      </div>
    `
  },

  {
    type: 'interactive-quiz',
    title: '知識檢測：土壤管理與實務',
    questions: [
      {
        question: '覆蓋作物（Cover crops）在葡萄園管理中最主要的功能是什麼？',
        options: [
          '提升土壤有機質、改善團粒結構並促進微生物活性',
          '增加葡萄產量並加速成熟',
          '減少葡萄藤病害發生',
          '降低人工成本'
        ],
        correct: 0,
        explanation: '根據第4章內容，覆蓋作物的核心效果包括：提升土壤有機質、改善團粒結構、促進微生物活性、固定氮素，還能減少侵蝕、提升持水、穩定溫度。這些都是從土壤健康角度出發的綜合管理策略。'
      },
      {
        question: 'Pessac-Léognan精準管理案例中，使用紅外熱影像的主要目的是什麼？',
        options: [
          '提高葡萄產量',
          '定位熱斑與缺水點，實現精準灌溉',
          '監測病蟲害',
          '預測採收時間'
        ],
        correct: 1,
        explanation: '章節明確指出，該酒莊使用「紅外熱影像：定位熱斑與缺水點」，結合覆蓋作物和生物炭，成功降低了溫度/水分空間差異，使成熟節奏更整齊。這是精準管理的典型應用。'
      }
    ]
  },

  // ========== 第五章：感官與風土表達 ==========
  {
    type: 'chapter-divider',
    chapter: '5',
    title: '感官與風土表達',
    subtitle: '從杯中辨識土壤的線索',
    icon: '👃',
    background: 'linear-gradient(135deg, #ffd3a5 0%, #fd6585 100%)'
  },

  {
    type: 'content',
    title: '對比一：礫石 vs 黏土',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="text-align:center;font-size:0.79rem;color:#666;margin-bottom:10px;">Cabernet Sauvignon 與 Merlot 的典型感官表現</div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-bottom:12px;">

          <!-- 礫石 -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:10px 14px;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:1.3rem;">🪨</span>
                <div>
                  <div style="color:#fff;font-weight:700;font-size:0.9rem;">礫石 Gravel</div>
                  <div style="color:rgba(255,255,255,0.8);font-size:0.74rem;">Cabernet Sauvignon</div>
                </div>
              </div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:9px;">
                <div style="display:flex;gap:6px;align-items:baseline;font-size:0.76rem;">
                  <span style="color:#1565C0;font-weight:700;min-width:56px;">👄 口感</span>
                  <span style="color:#333;">結構緊實、線條清晰</span>
                </div>
                <div style="display:flex;gap:6px;align-items:baseline;font-size:0.76rem;">
                  <span style="color:#1565C0;font-weight:700;min-width:56px;">👃 香氣</span>
                  <span style="color:#333;">黑醋栗、鉛筆芯、雪松、石墨</span>
                </div>
                <div style="display:flex;gap:6px;align-items:baseline;font-size:0.76rem;">
                  <span style="color:#1565C0;font-weight:700;min-width:56px;">⚖️ 酸/寧</span>
                  <span style="color:#333;">酸度中高、單寧成熟且細緻</span>
                </div>
                <div style="display:flex;gap:6px;align-items:baseline;font-size:0.76rem;">
                  <span style="color:#1565C0;font-weight:700;min-width:56px;">🕰️ 陳年</span>
                  <span style="color:#333;">長（15–30 年）</span>
                </div>
              </div>
              <div style="background:#E3F2FD;border-radius:6px;padding:6px 10px;font-size:0.75rem;color:#0D47A1;font-weight:600;text-align:center;">
                優雅克制・力量與精準並存
              </div>
            </div>
          </div>

          <!-- 黏土 -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#880E4F,#C2185B);padding:10px 14px;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:1.3rem;">🧱</span>
                <div>
                  <div style="color:#fff;font-weight:700;font-size:0.9rem;">黏土 Clay</div>
                  <div style="color:rgba(255,255,255,0.8);font-size:0.74rem;">Merlot</div>
                </div>
              </div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:9px;">
                <div style="display:flex;gap:6px;align-items:baseline;font-size:0.76rem;">
                  <span style="color:#880E4F;font-weight:700;min-width:56px;">👄 口感</span>
                  <span style="color:#333;">酒體飽滿、質地圓潤</span>
                </div>
                <div style="display:flex;gap:6px;align-items:baseline;font-size:0.76rem;">
                  <span style="color:#880E4F;font-weight:700;min-width:56px;">👃 香氣</span>
                  <span style="color:#333;">李子、黑莓、松露、鐵礦</span>
                </div>
                <div style="display:flex;gap:6px;align-items:baseline;font-size:0.76rem;">
                  <span style="color:#880E4F;font-weight:700;min-width:56px;">⚖️ 酸/寧</span>
                  <span style="color:#333;">酸度中等、單寧柔和</span>
                </div>
                <div style="display:flex;gap:6px;align-items:baseline;font-size:0.76rem;">
                  <span style="color:#880E4F;font-weight:700;min-width:56px;">🕰️ 陳年</span>
                  <span style="color:#333;">中至長（10–20 年）</span>
                </div>
              </div>
              <div style="background:#FCE4EC;border-radius:6px;padding:6px 10px;font-size:0.75rem;color:#880E4F;font-weight:600;text-align:center;">
                豐滿深邃・親和力強
              </div>
            </div>
          </div>

        </div>
        <div style="background:linear-gradient(135deg,#263238,#37474F);border-radius:8px;padding:9px 14px;text-align:center;">
          <span style="color:#fff;font-size:0.79rem;">💡 兩者皆可達高品質，但表達維度不同：礫石重「線條與精準」，黏土重「質地與包覆」</span>
        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '對比二：石灰岩 vs 砂土',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="text-align:center;font-size:0.79rem;color:#666;margin-bottom:10px;">Cabernet Franc / Merlot 的不同感官面向</div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-bottom:12px;">

          <!-- 石灰岩 -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4A148C,#7B1FA2);padding:10px 14px;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:1.3rem;">⛰️</span>
                <div>
                  <div style="color:#fff;font-weight:700;font-size:0.9rem;">石灰岩 Limestone</div>
                  <div style="color:rgba(255,255,255,0.8);font-size:0.74rem;">Cabernet Franc · Merlot</div>
                </div>
              </div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:9px;">
                <div style="display:flex;gap:6px;align-items:baseline;font-size:0.76rem;">
                  <span style="color:#4A148C;font-weight:700;min-width:56px;">👄 口感</span>
                  <span style="color:#333;">骨架分明、收尾清爽</span>
                </div>
                <div style="display:flex;gap:6px;align-items:baseline;font-size:0.76rem;">
                  <span style="color:#4A148C;font-weight:700;min-width:56px;">👃 香氣</span>
                  <span style="color:#333;">白堊、濕石、紫羅蘭、紅色水果</span>
                </div>
                <div style="display:flex;gap:6px;align-items:baseline;font-size:0.76rem;">
                  <span style="color:#4A148C;font-weight:700;min-width:56px;">⚖️ 酸/寧</span>
                  <span style="color:#333;">酸度高、單寧細膩</span>
                </div>
                <div style="display:flex;gap:6px;align-items:baseline;font-size:0.76rem;">
                  <span style="color:#4A148C;font-weight:700;min-width:56px;">🕰️ 陳年</span>
                  <span style="color:#333;">中至長（12–25 年）</span>
                </div>
              </div>
              <div style="background:#F3E5F5;border-radius:6px;padding:6px 10px;font-size:0.75rem;color:#4A148C;font-weight:600;text-align:center;">
                優雅內斂・礦物感突出
              </div>
            </div>
          </div>

          <!-- 砂土 -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F57C00);padding:10px 14px;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:1.3rem;">🏖️</span>
                <div>
                  <div style="color:#fff;font-weight:700;font-size:0.9rem;">砂土 Sand</div>
                  <div style="color:rgba(255,255,255,0.8);font-size:0.74rem;">早熟品種</div>
                </div>
              </div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:9px;">
                <div style="display:flex;gap:6px;align-items:baseline;font-size:0.76rem;">
                  <span style="color:#E65100;font-weight:700;min-width:56px;">👄 口感</span>
                  <span style="color:#333;">輕盈柔和、易飲</span>
                </div>
                <div style="display:flex;gap:6px;align-items:baseline;font-size:0.76rem;">
                  <span style="color:#E65100;font-weight:700;min-width:56px;">👃 香氣</span>
                  <span style="color:#333;">草莓、櫻桃、花香</span>
                </div>
                <div style="display:flex;gap:6px;align-items:baseline;font-size:0.76rem;">
                  <span style="color:#E65100;font-weight:700;min-width:56px;">⚖️ 酸/寧</span>
                  <span style="color:#333;">酸度中高、單寧低至中</span>
                </div>
                <div style="display:flex;gap:6px;align-items:baseline;font-size:0.76rem;">
                  <span style="color:#E65100;font-weight:700;min-width:56px;">🕰️ 陳年</span>
                  <span style="color:#333;">短至中（5–10 年）</span>
                </div>
              </div>
              <div style="background:#FFF3E0;border-radius:6px;padding:6px 10px;font-size:0.75rem;color:#E65100;font-weight:600;text-align:center;">
                芳香明亮・適飲性高
              </div>
            </div>
          </div>

        </div>
        <div style="background:linear-gradient(135deg,#263238,#37474F);border-radius:8px;padding:9px 14px;text-align:center;">
          <span style="color:#fff;font-size:0.79rem;">💡 石灰岩強調「張力與礦物」，砂土強調「芬芳與親和」</span>
        </div>
      </div>
    `
  },

  {
    type: 'interactive-quiz',
    title: '知識檢測：感官與風土表達',
    questions: [
      {
        question: '礫石土壤（Gravel）上種植的Cabernet Sauvignon，其葡萄酒風格的核心特徵是什麼？',
        options: [
          '酒體飽滿、質地圓潤、單寧柔和',
          '結構緊實、線條清晰、優雅克制',
          '輕盈柔和、芳香明亮、易飲',
          '骨架分明、礦物感突出、酸度極高'
        ],
        correct: 1,
        explanation: '根據第5章的對比分析，礫石土壤上的CS表現為「結構緊實、線條清晰」，香氣有黑醋栗、鉛筆芯、雪松、石墨，酸度中高、單寧成熟且細緻，風格是「優雅克制、力量與精準並存」，強調線條與精準。'
      },
      {
        question: '黏土土壤（Clay）與礫石土壤的主要感官差異體現在哪裡？',
        options: [
          '黏土重「質地與包覆」，礫石重「線條與精準」',
          '黏土酸度更高，礫石單寧更柔和',
          '黏土陳年潛力更長，礫石更短',
          '黏土香氣更清爽，礫石更濃郁'
        ],
        correct: 0,
        explanation: '章節結論明確指出：「兩者皆可達高品質，但表達維度不同：礫石重「線條與精準」，黏土重「質地與包覆」。」黏土帶來的是飽滿圓潤的質地和親和力，而礫石帶來的是緊實清晰的結構和優雅克制。'
      }
    ]
  },

  // ========== 第六章：氣候變遷下的土壤策略 ==========
  {
    type: 'chapter-divider',
    chapter: '6',
    title: '氣候變遷下的土壤策略',
    subtitle: '韌性、碳與長期穩定性',
    icon: '🌡️',
    background: 'linear-gradient(135deg, #90F7EC 0%, #32CCBC 100%)'
  },

  {
    type: 'content',
    title: '乾旱與極端熱的應對',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px;">

          <!-- 持水與遮蔭 -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#006064,#00838F);padding:10px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">💧</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.88rem;">提高土壤持水與遮蔭</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.74rem;">短期至中期應對</div>
              </div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="font-size:0.78rem;color:#555;line-height:1.65;margin-bottom:8px;">以覆蓋作物與覆蓋物提升有機質與保水性，並利用葉幕管理降低串區熱峰值。</div>
              <div style="background:#E0F7FA;border-radius:6px;padding:7px 10px;margin-bottom:8px;">
                <div style="font-size:0.74rem;font-weight:700;color:#006064;margin-bottom:4px;">🔑 核心作法</div>
                <ul style="margin:0;padding-left:13px;font-size:0.75rem;color:#333;line-height:1.85;">
                  <li>深根型覆蓋作物 → 生物孔隙</li>
                  <li>促進降雨快速入滲</li>
                  <li>減少地表逕流</li>
                </ul>
              </div>
              <div style="background:#E0F7FA;border-left:3px solid #006064;border-radius:4px;padding:5px 8px;font-size:0.74rem;color:#004D40;">
                🌡️ 熱浪年份：果實溫度管理是維持酸度關鍵
              </div>
            </div>
          </div>

          <!-- 根砧與地塊策略 -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4E342E,#6D4C41);padding:10px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🌱</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.88rem;">根砧與地塊策略</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.74rem;">十年尺度的長期戰略</div>
              </div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="font-size:0.78rem;color:#555;line-height:1.65;margin-bottom:8px;">選擇耐旱深根性根砧，將早熟品種配置於較涼爽、保水性佳的地塊。</div>
              <div style="background:#EFEBE9;border-radius:6px;padding:7px 10px;margin-bottom:8px;">
                <div style="font-size:0.74rem;font-weight:700;color:#4E342E;margin-bottom:4px;">🔑 核心作法</div>
                <ul style="margin:0;padding-left:13px;font-size:0.75rem;color:#333;line-height:1.85;">
                  <li>輪作 + 低擾動 → 增加有機碳</li>
                  <li>打造「海綿型」土壤結構</li>
                  <li>品種/克隆再評估與調配</li>
                </ul>
              </div>
              <div style="background:#EFEBE9;border-left:3px solid #4E342E;border-radius:4px;padding:5px 8px;font-size:0.74rem;color:#3E2723;">
                📅 地塊再設計是十年尺度的戰略投資
              </div>
            </div>
          </div>

        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '再生農法與土壤碳',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-bottom:12px;">

          <!-- 低擾動/常年覆蓋 -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:10px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🌿</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.88rem;">低擾動 / 常年覆蓋</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.74rem;">Regenerative 核心</div>
              </div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="font-size:0.78rem;color:#555;line-height:1.65;margin-bottom:8px;">減少翻耕與裸地時間，維持微生物與菌根連續性，提升碳固存與抗逆。</div>
              <div style="background:#E8F5E9;border-radius:6px;padding:7px 10px;margin-bottom:8px;">
                <div style="font-size:0.74rem;font-weight:700;color:#1B5E20;margin-bottom:4px;">🔑 作法組合</div>
                <ul style="margin:0;padding-left:13px;font-size:0.75rem;color:#333;line-height:1.85;">
                  <li>減少翻耕 → 菌根連續性↑</li>
                  <li>堆肥 + 有機資材 + 生物炭</li>
                  <li>穩定有機碳庫，提升CEC</li>
                </ul>
              </div>
              <div style="background:#E8F5E9;border-left:3px solid #1B5E20;border-radius:4px;padding:5px 8px;font-size:0.74rem;color:#1B5E20;font-weight:600;">
                土壤碳↑ = 結構穩定 + 保水佳 + 養分緩釋
              </div>
            </div>
          </div>

          <!-- 資料驅動精準管理 -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#01579B,#0277BD);padding:10px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">📊</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.88rem;">資料驅動精準管理</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.74rem;">Precision 核心</div>
              </div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="font-size:0.78rem;color:#555;line-height:1.65;margin-bottom:8px;">以電導/含水/熱像/高程等圖層建模，分區管理與變率施作。</div>
              <div style="background:#E1F5FE;border-radius:6px;padding:7px 10px;margin-bottom:8px;">
                <div style="font-size:0.74rem;font-weight:700;color:#01579B;margin-bottom:4px;">🔑 作法組合</div>
                <ul style="margin:0;padding-left:13px;font-size:0.75rem;color:#333;line-height:1.85;">
                  <li>電導/含水/熱像/高程建模</li>
                  <li>分區管理 + 變率施作</li>
                  <li>小地塊迭代，降低試錯風險</li>
                </ul>
              </div>
              <div style="background:#E1F5FE;border-left:3px solid #01579B;border-radius:4px;padding:5px 8px;font-size:0.74rem;color:#01579B;font-weight:600;">
                精準化：複雜土壤 → 可管理多區域
              </div>
            </div>
          </div>

        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '多莊比較：面向未來的土壤策略',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="text-align:center;font-size:0.79rem;color:#666;margin-bottom:10px;">不同理念的路徑選擇</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:12px;">

          <!-- Estate A: Regenerative -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">🌿 Estate A</div>
              <div style="color:rgba(255,255,255,0.82);font-size:0.73rem;margin-top:2px;">Regenerative 再生農法</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.74rem;font-weight:700;color:#1B5E20;margin-bottom:5px;">🔑 核心措施</div>
              <ul style="margin:0 0 8px;padding-left:13px;font-size:0.75rem;color:#333;line-height:1.85;">
                <li>常年覆蓋與多樣化混播</li>
                <li>低擾動耕作</li>
                <li>高比例有機改良材</li>
              </ul>
              <div style="background:#E8F5E9;border-left:3px solid #1B5E20;border-radius:4px;padding:5px 8px;font-size:0.74rem;color:#1B5E20;line-height:1.6;">
                以長期碳與結構為核心，從根本提升韌性
              </div>
            </div>
          </div>

          <!-- Estate B: Precision -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#01579B,#0277BD);padding:9px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">📊 Estate B</div>
              <div style="color:rgba(255,255,255,0.82);font-size:0.73rem;margin-top:2px;">Precision 精準管理</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.74rem;font-weight:700;color:#01579B;margin-bottom:5px;">🔑 核心措施</div>
              <ul style="margin:0 0 8px;padding-left:13px;font-size:0.75rem;color:#333;line-height:1.85;">
                <li>分區感測與地圖決策</li>
                <li>變率灌溉 / 施肥</li>
                <li>遙測熱像監控</li>
              </ul>
              <div style="background:#E1F5FE;border-left:3px solid #01579B;border-radius:4px;padding:5px 8px;font-size:0.74rem;color:#01579B;line-height:1.6;">
                以資料縮短試錯成本，精準匹配資源與風險
              </div>
            </div>
          </div>

          <!-- Estate C: Hybrid -->
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4A148C,#6A1B9A);padding:9px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">⚖️ Estate C</div>
              <div style="color:rgba(255,255,255,0.82);font-size:0.73rem;margin-top:2px;">Hybrid 混合策略</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.74rem;font-weight:700;color:#4A148C;margin-bottom:5px;">🔑 核心措施</div>
              <ul style="margin:0 0 8px;padding-left:13px;font-size:0.75rem;color:#333;line-height:1.85;">
                <li>再生 + 精準整合</li>
                <li>地塊再配置與根砧更新</li>
                <li>氣候情境演練</li>
              </ul>
              <div style="background:#F3E5F5;border-left:3px solid #4A148C;border-radius:4px;padding:5px 8px;font-size:0.74rem;color:#4A148C;line-height:1.6;">
                結合長期韌性與短期效率的平衡之道
              </div>
            </div>
          </div>

        </div>
        <div style="background:linear-gradient(135deg,#263238,#37474F);border-radius:8px;padding:9px 14px;text-align:center;">
          <span style="color:#fff;font-size:0.79rem;">💡 沒有單一「正確」答案；關鍵在於讀懂自家土壤與風格目標，持續迭代</span>
        </div>
      </div>
    `
  },

  {
    type: 'interactive-quiz',
    title: '知識檢測：氣候變遷下的土壤策略',
    questions: [
      {
        question: '在氣候變遷導致乾旱增加的背景下，提高土壤持水性的核心策略是什麼？',
        options: [
          '增加化學肥料使用量',
          '使用覆蓋作物與有機資材提升有機質與保水性',
          '完全依賴滴灌系統',
          '減少葡萄藤種植密度'
        ],
        correct: 1,
        explanation: '第6章明確指出，應對乾旱的核心是「以覆蓋作物與覆蓋物提升有機質與保水性」，選用深根型覆蓋作物增加「生物孔隙」，促進降雨快速入滲。搭配堆肥、有機資材、生物炭，提升CEC並穩定有機碳庫，打造「海綿型」土壤。'
      },
      {
        question: '再生農法（Regenerative Agriculture）中「低擾動/常年覆蓋」的核心效益是什麼？',
        options: [
          '提高短期產量',
          '減少人工成本',
          '提升碳固存、維持微生物連續性、增強土壤抗逆性',
          '加速葡萄成熟'
        ],
        correct: 2,
        explanation: '章節說明再生農法的核心作法是「減少翻耕與裸地時間，維持微生物與菌根連續性，提升碳固存與抗逆」。重點效益是「土壤碳↑ = 結構更穩定 + 保水更佳 + 養分更緩釋」，這是從長期土壤健康角度的戰略佈局。'
      }
    ]
  },

  {
    type: 'key-takeaways',
    title: '核心要點總結',
    icon: '💡',
    takeaways: [
      {
        point: '土壤的三大維度',
        detail: '物理（質地、結構、排水）、化學（pH、礦物質、肥力）、生物（微生物、菌根）特性共同影響葡萄生長。'
      },
      {
        point: '波爾多五大土壤類型',
        detail: '礫石（排水佳、CS）、黏土（保水強、Merlot）、石灰岩（優雅、CF）、砂土（早熟）、混合型（平衡）各有特色。'
      },
      {
        point: '土壤-葡萄-酒款的五大傳導路徑',
        detail: '水分脅迫、礦物質吸收、根系深度、微生物組、溫度調節，從土壤到酒杯的科學機制。'
      },
      {
        point: 'Terroir的核心是土壤多樣性',
        detail: 'Château Cheval Blanc等頂級酒莊的複雜度來自於對不同土壤地塊的精細管理和調配。'
      },
      {
        point: '氣候變化下的土壤挑戰',
        detail: '乾旱增加凸顯土壤保水性的重要性，黏土產區可能在未來獲得優勢。'
      }
    ]
  },

  {
    type: 'course-complete',
    title: '🎉 課程完成！',
    subtitle: '土壤科學與風土表達',
    achievement: 'Level 3 - 課程 2 完成',
    summary: '您已經系統學習了土壤科學的核心理論、波爾多五大土壤類型的詳細特性、土壤影響葡萄酒的科學機制。這些知識將幫助您更深刻地理解terroir的真諦，從土壤角度解讀葡萄酒的風格與品質。',
    stats: {
      chapters: 6,
      soilTypes: 5,
      caseStudies: 2,
      quizzes: 3,
      timeSpent: '約45分鐘'
    },
    nextSteps: [
      {
        action: '實踐應用',
        items: [
          '品鑑來自不同土壤的葡萄酒（如Pétrus vs Latour）',
          '觀察土壤樣本，理解質地差異',
          '訪問葡萄園，親身體驗土壤與地形'
        ]
      },
      {
        action: '繼續學習',
        items: [
          '進入L3-3：極端年份與氣候風險管理',
          '深入研究特定產區的土壤地圖',
          '了解土壤管理與有機農法（L3-4）'
        ]
      }
    ],
    certificate: '您已獲得本課程學習證明',
    shareMessage: '我剛完成了Level 3的「土壤科學與風土表達」課程！深入了解了礫石、黏土、石灰岩等土壤如何塑造波爾多葡萄酒的風格。 #波爾多 #土壤科學 #Terroir #葡萄酒學習'
  }
]

export default l32Content

