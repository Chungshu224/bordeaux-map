/**
 * L1-5 波爾多酒款類型概覽
 * 全面認識波爾多各種酒款類型和風格特色
 */

export const lessonContent = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          提到波爾多，多數人第一個想到的是強勁優雅的紅葡萄酒。但實際上，波爾多的酒款類型遠比想像中豐富：從干型紅酒、白酒，到世界頂級的貴腐甜白蘇玳 (Sauternes)，再到粉紅酒與氣泡酒——波爾多幾乎涵蓋了所有主要的葡萄酒類型。
        </p>

        <p class="intro-context">
          本課程將帶您全面認識波爾多的酒款類型版圖。我們將學習干型紅酒的主導地位與風格分類、干型白酒的清新與複雜、甜白酒的層次與工藝、粉紅酒 (Clairet 與 Rosé) 的歷史與現代表現，以及氣泡酒 (Crémant de Bordeaux) 的崛起。更重要的是，我們將理解不同酒款類型的生產工藝、品質差異、配餐建議與市場定位。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🍷 掌握紅酒類型分佈</h4>
            <p>理解干型紅酒的產量占比（80%+）、主要產區與風格分類</p>
          </div>

          <div class="point-item">
            <h4>🥂 認識白酒多樣性</h4>
            <p>學習干型白酒與甜白酒的品種差異、工藝特點與風味特徵</p>
          </div>

          <div class="point-item">
            <h4>🍯 深入蘇玳貴腐甜酒</h4>
            <p>了解世界三大貴腐甜酒產區之一的蘇玳，學習貴腐菌的神奇作用</p>
          </div>

          <div class="point-item">
            <h4>🌸 探索粉紅酒傳統</h4>
            <p>認識 Clairet（波爾多歷史酒款）與現代 Rosé 的區別與特色</p>
          </div>

          <div class="point-item">
            <h4>✨ 了解氣泡酒發展</h4>
            <p>學習 Crémant de Bordeaux 的釀造法、品質標準與市場趨勢</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠全面描述波爾多的酒款類型體系，並根據場合與喜好選擇適合的波爾多葡萄酒。
        </p>
      </div>
    `
  },

  // ========== 第一章：紅酒類型 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '紅酒類型',
    subtitle: '左右岸紅酒的風格與特色',
    icon: '🍷',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  {
    title: '紅酒類型與產區分布',
    duration: '15分鐘',
    level: '初級',
    courseIntro: '全面認識波爾多各種酒款類型和風格特色',
    highlights: [
      { id: 1, icon: '🍷', title: '干型紅酒', content: '波爾多主力產品，佔總產量80%以上' },
      { id: 2, icon: '🗺️', title: '產區多樣', content: '左岸右岸各具特色，風格差異明顯' }
    ],
    content: `<div class="red-wine-types">
      <p class="lead-text">波爾多以紅酒聞名世界，不同產區生產的紅酒各有特色，從日常餐酒到頂級收藏酒款，形成完整的品質階層。</p>
      <div class="red-wine-categories">
        <div class="left-bank-reds">
          <h4>🏰 左岸紅酒產區</h4>
          <div class="left-bank-regions">
            <div class="medoc-region">
              <h5>梅多克 (Médoc)</h5>
              <ul>
                <li><strong>地理位置：</strong>吉隆河左岸，波爾多市北部</li>
                <li><strong>主要品種：</strong>卡本內-蘇維濃主導，梅洛調配</li>
                <li><strong>酒款風格：</strong>結構強勁，單寧豐富，陳年潛力佳</li>
                <li><strong>知名產區：</strong>聖朱利安、波雅克、聖愛斯泰夫、瑪歌</li>
                <li><strong>品質等級：</strong>包含多個列級莊園</li>
              </ul>
            </div>
            <div class="graves-region">
              <h5>格拉夫 (Graves)</h5>
              <ul>
                <li><strong>地理位置：</strong>吉隆河左岸，波爾多市南部</li>
                <li><strong>土壤特色：</strong>砂礫土壤，排水性優異</li>
                <li><strong>酒款特點：</strong>平衡優雅，礦物質感明顯</li>
                <li><strong>子產區：</strong>佩薩克-雷奧良為最高等級</li>
                <li><strong>歷史地位：</strong>波爾多最古老的產區之一</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right-bank-reds">
          <h4>💎 右岸紅酒產區</h4>
          <div class="right-bank-regions">
            <div class="saint-emilion-region">
              <h5>聖愛美濃 (Saint-Émilion)</h5>
              <ul>
                <li><strong>地理位置：</strong>多爾多涅河右岸</li>
                <li><strong>主要品種：</strong>梅洛為主，卡本內-弗朗調配</li>
                <li><strong>土壤類型：</strong>石灰岩高原和砂質粘土</li>
                <li><strong>酒款風格：</strong>優雅精緻，果香豐富</li>
                <li><strong>分級制度：</strong>特級酒莊A級和B級</li>
              </ul>
            </div>
            <div class="pomerol-region">
              <h5>龐美侯 (Pomerol)</h5>
              <ul>
                <li><strong>地理位置：</strong>多爾多涅河右岸，聖愛美濃北部</li>
                <li><strong>主要品種：</strong>梅洛主導（可達95%）</li>
                <li><strong>土壤特色：</strong>深層粘土，含鐵質</li>
                <li><strong>酒款特點：</strong>濃郁強勁，質感絲滑</li>
                <li><strong>產量稀少：</strong>面積小，產量有限，價格昂貴</li>
              </ul>
            </div>
            <div class="fronsac-region">
              <h5>弗朗薩克 (Fronsac)</h5>
              <ul>
                <li><strong>地理位置：</strong>多爾多涅河右岸</li>
                <li><strong>品種組成：</strong>梅洛、卡本內-弗朗</li>
                <li><strong>酒款特色：</strong>性價比高，品質穩定</li>
                <li><strong>風格特點：</strong>介於聖愛美濃和龐美侯之間</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="generic-bordeaux">
          <h4>🍇 通用波爾多產區</h4>
          <div class="generic-regions">
            <div class="bordeaux-aoc">
              <h5>波爾多AOC (Bordeaux AOC)</h5>
              <ul>
                <li><strong>覆蓋範圍：</strong>整個波爾多產區</li>
                <li><strong>產量佔比：</strong>約50%的波爾多酒款</li>
                <li><strong>品質定位：</strong>入門級到中等品質</li>
                <li><strong>價格範圍：</strong>最親民的波爾多酒款</li>
                <li><strong>適飲性：</strong>年輕時即可享用</li>
              </ul>
            </div>
            <div class="bordeaux-superieur">
              <h5>波爾多優級AOC (Bordeaux Supérieur)</h5>
              <ul>
                <li><strong>品質要求：</strong>比基礎波爾多AOC (Bordeaux AOC) 更嚴格</li>
                <li><strong>酒精度：</strong>最低10.5%vs10%</li>
                <li><strong>陳年要求：</strong>需要更長的陳年時間</li>
                <li><strong>風格提升：</strong>更濃郁，更有結構</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'red-wine-regions',
    showBordeaux: false, // 關閉預設 Bordeaux_AOC，使用自訂的多重疊層
    // 多重疊層：左岸 & 右岸主要紅酒核心產區 + 通用 Bordeaux AOC
    // 使用 PresentationMap 新增的 geojsonPaths 同時載入多個區域邊界
    geojsonPaths: [
      '/geojson/LeftBank/Medoc/Medoc_AOC.geojson',            // Médoc
      '/geojson/LeftBank/Graves/Graves_AOC.geojson',          // Graves（基礎範圍）
      '/geojson/RightBank/Libournais/St-Emilion_AOC.geojson', // Saint-Émilion
      '/geojson/RightBank/Libournais/Pomerol_AOC.geojson',    // Pomerol
      '/geojson/RightBank/Libournais/Fronsac_AOC.geojson',    // Fronsac
      '/Bordeaux_AOC.geojson'                                 // 通用 Bordeaux AOC（整體背景）
    ],
    quiz: {
  question: '波爾多AOC (Bordeaux AOC) 酒款的主要特點是什麼？',
      options: ['只能使用梅洛品種', '涵蓋整個波爾多產區', '必須陳年5年以上', '只能在左岸生產'],
      correct: 1,
  explanation: '波爾多AOC (Bordeaux AOC) 是涵蓋整個波爾多產區的基礎級別法定產區，約佔波爾多總產量的50%，是最親民的波爾多酒款入門選擇。'
    }
  },
  {
    title: '服務 A/B 比較：年份 vs 桶陳',
    highlights: [
      { id: 1, icon: '🧭', title: '情境切換', content: '涼年/暖年與桶陳/不鏽鋼，服務策略有別' },
      { id: 2, icon: '🎯', title: '快速調整', content: '溫度與醒酒長短微調，放大酒款優點' }
    ],
    component: 'ServiceABCompare',
    componentProps: {
      reds: {
        title: '紅酒（年份差異）',
        labels: ['涼年 A', '暖年 B'],
        rows: [
          ['侍酒溫度', '15–16°C（突出酸度與線條）', '16–18°C（展現果熟與圓潤）'],
          ['醒酒策略', '較長 45–90 分（柔化單寧）', '較短 15–45 分（避免果香流失）'],
          ['備註', '酸度較高、單寧偏硬；食物配油脂', '果香成熟、單寧較圓；配味道更濃']
        ]
      },
      whites: {
        title: '干白（容器差異）',
        labels: ['不鏽鋼 A', '橡木 B'],
        rows: [
          ['侍酒溫度', '8–10°C（保持清脆）', '10–12°C（釋放桶香與油脂）'],
          ['杯型/醒酒', '白酒杯；多不醒或極短', '鬱金香杯；可短醒（5–15 分）'],
          ['備註', '純淨果香、礦物線性', '香草/烤麵包/奶油感更明顯']
        ]
      }
    },
    presenterNotes: [
      '先判斷情境（年份/桶陳），再微調溫度與醒酒時間',
      '涼年/結構型 → 溫度略低、醒酒略長；暖年/果熟型 → 溫度略高、醒酒略短',
      '不鏽鋼白：低溫不醒突出清新；桶陳白：略升溫可短醒，釋放複雜度'
    ],
    hasMap: false
  },
  {
    title: '服務 A/B 使用指南',
    blocks: [
      {
        type: 'steps',
        title: '使用指南',
        steps: [
          '先判斷情境（年份/桶陳），再微調溫度與醒酒時間',
          '涼年/結構型 → 溫度略低、醒酒略長；暖年/果熟型 → 溫度略高、醒酒略短',
          '不鏽鋼白：低溫不醒突出清新；桶陳白：略升溫可短醒，釋放複雜度'
        ]
      }
    ],
    hasMap: false
  },
  {
    title: '釀造關鍵：不鏽鋼 vs 橡木｜貴腐 vs 萃取',
    highlights: [
      { id: 1, icon: '🛢️', title: '容器影響', content: '不鏽鋼保鮮、橡木增脂感與香料' },
      { id: 2, icon: '🧫', title: '工藝差異', content: '貴腐濃縮糖酸；紅酒萃取建立骨架' }
    ],
    blocks: [
      {
        type: 'compare',
        props: {
          headers: ['面向', '不鏽鋼（Steel）', '橡木（Oak）'],
          rows: [
            ['核心目的', '保留初級果香與清脆酸度', '增加結構、口感與第三類香氣'],
            ['氧氣互動', '幾乎無（還原環境）', '微氧化（桶板透氣、桶陳）'],
            ['風味影響', '檸檬、青蘋果、青草更突出', '香草、烤麵包、香料、奶油口感'],
            ['適用類型', '干白、桃紅、入門級紅', '頂級干白（佩薩克白）、結構型紅'],
            ['常見做法', '低溫發酵；短期酒泥接觸', '桶發酵/桶陳；換桶與補酒管理']
          ]
        }
      },
      {
        type: 'compare',
        props: {
          headers: ['面向', '貴腐（Botrytis）', '紅酒萃取（Extraction）'],
          rows: [
            ['作用機制', '貴腐菌穿孔蒸散，濃縮糖酸與風味', '浸皮與踩帽/淋皮萃取色素與單寧'],
            ['關鍵條件/技術', '晨霧＋午後晴朗；多次手採', '發酵溫控、浸漬時間、抽取強度'],
            ['風味/口感', '蜂蜜、杏乾、藏紅花；油潤黏稠', '顏色加深、單寧骨架、結構提升'],
            ['風險/要點', '衛生管理、酸度平衡與貴腐度', '過度萃取→澀硬；不足→單薄'],
            ['代表區/型', '蘇岱/巴薩克甜酒', '左岸結構型紅、右岸圓潤型紅']
          ]
        }
      },
      {
        type: 'steps',
        title: '快速判讀小抄',
        steps: [
          '聞到香草/烤吐司/奶油＋更厚實口感 → 多為橡木參與',
          '果香純淨、線條俐落、礦物明亮 → 多為不鏽鋼為主',
          '濃稠甜感＋蜂蜜杏乾＋高酸平衡 → 多為貴腐甜酒',
          '顏色深、單寧明顯、需要醒酒 → 萃取較強的紅酒'
        ]
      }
    ],
    hasMap: false
  },
  {
    title: '服務與餐配清單（溫度／杯型／醒酒／餐配）',
    highlights: [
      { id: 1, icon: '🍽️', title: '實用指南', content: '溫度與杯型先對，風味立刻加分' },
      { id: 2, icon: '🔗', title: '邏輯配對', content: '結構配重口、酸度配油脂、甜度配辣與鹹' }
    ],
    blocks: [
      {
        type: 'compare',
        props: {
          headers: ['類型', '建議侍酒溫度', '杯型／醒酒', '餐配建議'],
          rows: [
            ['左岸紅（力量型）', '16–18°C', '大肚波爾多杯；年輕款建議醒 30–90 分', '烤牛排、羊排、硬質熟成乳酪'],
            ['右岸紅（柔順型）', '15–17°C', '中大肚紅酒杯；醒 15–45 分視單寧', '鴨胸、菌菇料理、綿密質地料理'],
            ['干型白（清脆/佩薩克白）', '8–10°C（清新型）／10–12°C（桶陳型）', '郁金香杯；頂級款可短醒', '貝類海鮮、白肉、山羊乳酪（桶陳配奶油醬）'],
            ['貴腐甜（蘇岱/巴薩克）', '10–12°C', '小鬱金香杯；不建議長醒', '鵝肝、藍紋乳酪、辛香料理、甜點（甜度需高於餐）'],
            ['起泡（克雷芒）', '6–8°C', '鬱金香杯（避免笛形）；不醒酒', '生蠔、天婦羅、鹽酥小點、開胃菜'],
            ['桃紅（清爽型）', '8–10°C', '白酒杯；不醒酒', '沙拉、冷盤、地中海料理、輕油脂食物']
          ]
        }
      },
      {
        type: 'steps',
        title: '侍酒小撇步',
        steps: [
          '溫度原則：清新→更低；結構→略高；甜酒→中間偏低以保酸',
          '杯型原則：香氣複雜與結構厚實→大肚；清新/起泡→鬱金香',
          '醒酒原則：年輕結構紅醒短～中；老酒與桶陳白視情況微醒',
          '餐配邏輯：酸度解油、單寧解油脂與蛋白、甜度平衡辣與鹹'
        ]
      }
    ],
    hasMap: false,
    quiz: {
      question: '下列哪一個「類型 → 侍酒策略」搭配較為合理？',
      options: [
        '貴腐甜：18–20°C、醒 1–2 小時',
        '克雷芒：6–8°C、鬱金香杯、不醒酒',
        '左岸紅：12–14°C、小白酒杯',
        '桃紅：14–16°C、醒 30–60 分'
      ],
      correct: 1,
      explanation: '起泡酒建議 6–8°C、使用鬱金香杯並避免醒酒；貴腐甜酒不宜過熱且通常不長醒；結構型紅需較高溫與大杯型。'
    }
  },

  // ========== 第二章：白酒與特殊類型 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '白酒與特殊類型',
    subtitle: '干白、甜酒與起泡酒',
    icon: '🤍',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  {
    title: '白酒與甜酒的多樣性',
    highlights: [
      { id: 1, icon: '🤍', title: '干型白酒', content: '清新優雅，以白蘇維翁和賽美容調配' },
      { id: 2, icon: '🍯', title: '貴腐甜酒', content: '世界頂級甜酒，蘇岱和巴薩克的傑作' }
    ],
    content: `<div class="white-sweet-wines">
      <p class="lead-text">雖然波爾多以紅酒著稱，但其白酒和甜酒同樣具有世界級的品質，特別是蘇岱的貴腐甜酒被譽為液體黃金。</p>
      <div class="white-wine-categories">
        <div class="dry-white-wines">
          <h4>🤍 干型白酒</h4>
          <div class="dry-white-regions">
            <div class="graves-white">
              <h5>格拉夫白酒</h5>
              <ul>
                <li><strong>品種組成：</strong>白蘇維翁60-80%，賽美容20-40%</li>
                <li><strong>釀造風格：</strong>不鏽鋼發酵保持清新，部分橡木陳年</li>
                <li><strong>風味特徵：</strong>柑橘果香，青草氣息，礦物質感</li>
                <li><strong>品質等級：</strong>佩薩克-雷奧良為最高等級</li>
                <li><strong>陳年潛力：</strong>3-8年，優質酒款可達15年</li>
              </ul>
            </div>
            <div class="pessac-leognan-white">
              <h5>佩薩克-雷奧良白酒</h5>
              <ul>
                <li><strong>地位：</strong>波爾多最頂級的干型白酒</li>
                <li><strong>釀造特色：</strong>橡木桶發酵和陳年</li>
                <li><strong>風格特點：</strong>濃郁複雜，奶油質感</li>
                <li><strong>陳年發展：</strong>蜂蜜、堅果、煙燻香氣</li>
                <li><strong>國際地位：</strong>可媲美勃艮地頂級白酒</li>
              </ul>
            </div>
            <div name="between-two-seas">
              <h5>兩海之間白酒</h5>
              <ul>
                <li><strong>產區位置：</strong>吉隆河和多爾多涅河之間</li>
                <li><strong>品種特點：</strong>白蘇維翁主導，清新果香</li>
                <li><strong>風格定位：</strong>清爽易飲，性價比高</li>
                <li><strong>適飲溫度：</strong>8-10°C，冰鎮享用</li>
                <li><strong>搭配建議：</strong>海鮮、沙拉、山羊乳酪</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="sweet-wines">
          <h4>🍯 甜酒類型</h4>
          <div class="sweet-wine-styles">
            <div class="sauternes-region">
              <h5>蘇岱貴腐甜酒 (Sauternes)</h5>
              <ul>
                <li><strong>貴腐菌作用：</strong>Botrytis cinerea濃縮葡萄糖分</li>
                <li><strong>品種組成：</strong>賽美容80%，白蘇維翁15%，慕絲卡岱5%</li>
                <li><strong>風味特徵：</strong>蜂蜜、杏桃、橙皮、香料</li>
                <li><strong>陳年潛力：</strong>20-100年，甚至更久</li>
                <li><strong>世界地位：</strong>與德國雷司令冰酒齊名</li>
              </ul>
            </div>
            <div class="barsac-region">
              <h5>巴薩克甜酒 (Barsac)</h5>
              <ul>
                <li><strong>地理關係：</strong>蘇岱產區內的子產區</li>
                <li><strong>風格差異：</strong>相對較清新，酸度更高</li>
                <li><strong>土壤影響：</strong>石灰岩土壤帶來優雅感</li>
                <li><strong>標示選擇：</strong>可標示Barsac或Sauternes</li>
                <li><strong>典型特徵：</strong>花香更明顯，口感更清雅</li>
              </ul>
            </div>
            <div class="other-sweet-wines">
              <h5>其他甜酒產區</h5>
              <ul>
                <li><strong>卡迪亞克 (Cadillac)：</strong>性價比型甜酒</li>
                <li><strong>盧皮亞克 (Loupiac)：</strong>半甜到甜型</li>
                <li><strong>聖克魯瓦-迪-蒙 (Sainte-Croix-du-Mont)：</strong>傳統甜酒</li>
                <li><strong>塞龍 (Cérons)：</strong>半甜型白酒</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="production-methods">
          <h4>⚙️ 釀造工藝差異</h4>
          <div class="production-comparison">
            <div class="dry-white-production">
              <h5>干型白酒釀造</h5>
              <ul>
                <li><strong>採收時機：</strong>適度成熟，保持酸度</li>
                <li><strong>發酵容器：</strong>不鏽鋼罐或橡木桶</li>
                <li><strong>溫度控制：</strong>低溫發酵16-20°C</li>
                <li><strong>陳年處理：</strong>酒泥接觸3-6個月</li>
                <li><strong>裝瓶時間：</strong>發酵後6-12個月</li>
              </ul>
            </div>
            <div class="sweet-wine-production">
              <h5>貴腐甜酒釀造</h5>
              <ul>
                <li><strong>採收方式：</strong>手工分批採收，多達6-10次</li>
                <li><strong>貴腐條件：</strong>晨霧+午後陽光的特殊氣候</li>
                <li><strong>糖分濃度：</strong>高達300-400g/L</li>
                <li><strong>發酵時間：</strong>緩慢發酵數週到數月</li>
                <li><strong>橡木陳年：</strong>新橡木桶陳年18-24個月</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'white-sweet-regions',
    showBordeaux: false,
    geojsonPaths: [
      // 白酒主要產區
      '/geojson/LeftBank/Graves/Pessac-Leognan_AOC.geojson',  // 佩薩克-雷奧良（頂級干白）
      '/geojson/LeftBank/Graves/Graves_AOC.geojson',          // 格拉夫（干白）
      '/geojson/Entre-Deux-Mers/Entre-Deux-Mers_AOC.geojson', // 兩海之間（清爽干白）
      
      // 甜酒產區
      '/geojson/Sauternais/Sauternes_AOC.geojson',            // 蘇岱（頂級貴腐甜酒）
      '/geojson/Sauternais/Barsac_AOC.geojson',               // 巴薩克（優雅貴腐甜酒）
      '/geojson/Sauternais/Cerons_AOC.geojson',               // 塞龍（半甜型）
      '/geojson/Entre-Deux-Mers/Cadillac_AOC.geojson',        // 卡迪亞克（性價比甜酒）
      '/geojson/Entre-Deux-Mers/Loupiac_AOC.geojson',         // 盧皮亞克（半甜到甜型）
      '/geojson/Entre-Deux-Mers/Sainte-Croix-du-Mont_AOC.geojson', // 聖克魯瓦-迪-蒙（傳統甜酒）
      
      '/Bordeaux_AOC.geojson'                                 // 外框背景
    ],
    quiz: {
      question: '蘇岱貴腐甜酒的釀造關鍵是什麼？',
      options: ['冰凍濃縮葡萄', '貴腐菌感染濃縮', '人工添加糖分', '延長發酵時間'],
      correct: 1,
      explanation: '蘇岱貴腐甜酒的關鍵是貴腐菌（Botrytis cinerea）感染葡萄，在特殊的晨霧午陽氣候條件下濃縮糖分和風味物質。'
    }
  },
  {
    title: '起泡酒與特殊酒款',
    highlights: [
      { id: 1, icon: '🫧', title: '克雷芒起泡酒', content: '波爾多傳統法起泡酒，品質優異' },
      { id: 2, icon: '🌹', title: '桃紅酒', content: '清新優雅，適合夏日享用' }
    ],
    content: `<div class="special-wine-types">
      <p class="lead-text">除了經典的紅白甜酒外，波爾多還生產高品質的起泡酒和桃紅酒，豐富了酒款類型的多樣性。</p>
      <div class="special-categories">
        <div class="cremant-bordeaux">
          <h4>🫧 克雷芒-德-波爾多起泡酒</h4>
          <div class="cremant-details">
            <div class="production-method">
              <h5>傳統法釀造</h5>
              <ul>
                <li><strong>釀造方法：</strong>香檳法（傳統法）二次發酵</li>
                <li><strong>法定品種：</strong>白蘇維翁、賽美容、慕絲卡岱、黑皮諾等</li>
                <li><strong>陳年要求：</strong>最少12個月酒泥接觸</li>
                <li><strong>壓榨方式：</strong>輕柔壓榨，保持清澈</li>
                <li><strong>品質標準：</strong>嚴格的產量和品質限制</li>
              </ul>
            </div>
            <div class="style-characteristics">
              <h5>風格特徵</h5>
              <ul>
                <li><strong>氣泡細緻：</strong>持久細膩的氣泡</li>
                <li><strong>香氣表現：</strong>柑橘、青蘋果、麵包香氣</li>
                <li><strong>口感特點：</strong>清新爽脆，酸度平衡</li>
                <li><strong>價格優勢：</strong>比香檳性價比更高</li>
                <li><strong>搭配適用：</strong>開胃酒、海鮮、輕食</li>
              </ul>
            </div>
            <div class="market-position">
              <h5>市場地位</h5>
              <ul>
                <li><strong>法國地位：</strong>法國第二大起泡酒產區</li>
                <li><strong>國際認知：</strong>逐漸受到國際市場認可</li>
                <li><strong>品質提升：</strong>近年來品質大幅提升</li>
                <li><strong>發展潛力：</strong>具有很大的發展空間</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="rose-wines">
          <h4>🌹 波爾多桃紅酒</h4>
          <div class="rose-details">
            <div class="production-styles">
              <h5>釀造方式</h5>
              <ul>
                <li><strong>短時浸皮：</strong>紅葡萄品種短時間接觸果皮</li>
                <li><strong>直接壓榨：</strong>紅葡萄直接壓榨獲得淺色</li>
                <li><strong>放血法：</strong>紅酒釀造過程中的副產品</li>
                <li><strong>溫度控制：</strong>低溫發酵保持清新</li>
              </ul>
            </div>
            <div class="flavor-profile">
              <h5>風味特徵</h5>
              <ul>
                <li><strong>顏色範圍：</strong>淺粉色到深粉色</li>
                <li><strong>香氣表現：</strong>紅莓、草莓、花香</li>
                <li><strong>口感特點：</strong>清新爽口，果香明顯</li>
                <li><strong>酸度平衡：</strong>適中酸度，平衡良好</li>
                <li><strong>適飲溫度：</strong>8-12°C冰鎮享用</li>
              </ul>
            </div>
            <div class="seasonal-appeal">
              <h5>季節特色</h5>
              <ul>
                <li><strong>夏日首選：</strong>清爽解渴，適合炎熱天氣</li>
                <li><strong>戶外活動：</strong>野餐、燒烤的絕佳選擇</li>
                <li><strong>搭配廣泛：</strong>地中海料理、亞洲菜系</li>
                <li><strong>社交場合：</strong>輕鬆愉快的聚會用酒</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="clairet-bordeaux">
          <h4>🟫 波爾多克萊雷特</h4>
          <div class="clairet-details">
            <div class="historical-significance">
              <h5>歷史傳統</h5>
              <ul>
                <li><strong>古老傳統：</strong>中世紀時期的經典酒款</li>
                <li><strong>英國偏好：</strong>曾經是英國市場的主流</li>
                <li><strong>復興運動：</strong>近年來重新受到關注</li>
                <li><strong>文化意義：</strong>代表波爾多釀酒傳統</li>
              </ul>
            </div>
            <div class="style-definition">
              <h5>風格定義</h5>
              <ul>
                <li><strong>顏色深度：</strong>比桃紅酒更深，介於桃紅和淺紅之間</li>
                <li><strong>浸皮時間：</strong>24-48小時的延長浸皮</li>
                <li><strong>風味特點：</strong>更多紅果香氣和單寧</li>
                <li><strong>飲用方式：</strong>可溫飲或微冰飲用</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="wine-type-summary">
          <h4>📊 酒款類型總覽</h4>
          <div class="type-distribution">
            <div class="production-statistics">
              <h5>產量分布</h5>
              <ul>
                <li><strong>紅酒：</strong>85%（各等級紅酒）</li>
                <li><strong>干型白酒：</strong>10%（主要在格拉夫）</li>
                <li><strong>甜酒：</strong>3%（蘇岱、巴薩克等）</li>
                <li><strong>起泡酒：</strong>1.5%（克雷芒-德-波爾多）</li>
                <li><strong>桃紅酒：</strong>0.5%（季節性生產）</li>
              </ul>
            </div>
            <div class="quality-levels">
              <h5>品質階層</h5>
              <ul>
                <li><strong>頂級酒莊：</strong>列級莊園、車庫酒等</li>
                <li><strong>優質酒莊：</strong>明星酒莊、精品小酒莊</li>
                <li><strong>村莊級：</strong>各村莊AOC酒款</li>
                <li><strong>地區級：</strong>波爾多及波爾多優級AOC</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '克雷芒-德-波爾多起泡酒採用什麼釀造方法？',
      options: ['槽中二次發酵法', '傳統法（香檳法）', '碳酸注入法', '自然發酵法'],
      correct: 1,
      explanation: '克雷芒-德-波爾多採用傳統法（又稱香檳法）釀造，在瓶中進行二次發酵產生氣泡，並需要至少12個月的酒泥接觸。'
    }  },

  // 結束頁
  {
    type: 'end',
    title: '課程完成',
    achievement: 'L1-5 右岸核心產區與白酒甲白酒 - 多樣波爾多',
    description: '恭喜您完成波爾多右岸與白酒產區的全面學習！您已掌握Pomerol與Saint-Émilion的Merlot世界、Sauternes的貴腐甜白與Entre-Deux-Mers的干白。從右岸的柔美圓潤到甜白的豐富複雜，您現在理解了波爾多葡萄酒的完整多樣性——不僅有強勁的左岸紅酒，更有柔美的右岸與迷人的白酒。',
    skills: [
      '深入理解Pomerol的藍黏土風土與Pétrus傳奇',
      '掌握Saint-Émilion的UNESCO世界文化遺產地位',
      '認識Sauternes貴腐甜白的釀造秘密',
      '了解Entre-Deux-Mers干白與Crémant起泡酒',
      '建立波爾多左岸右岸紅白酒全景視野'
    ],
    nextSteps: [
      {
        action: '品鑑實踐',
        items: [
          '品鑑一款Pomerol或Saint-Émilion酒款，感受Merlot之美',
          '品鑑一款Sauternes貴腐甜白，體驗複雜甘美',
          '對比左岸與右岸的風格差異',
          '嘗試甜白酒搭配鵝肝或藍黔起司'
        ]
      },
      {
        action: '繼續學習',
        items: [
          '進入L1-6：分級制度與酒莊認識',
          '探索1855分級與Saint-Émilion分級',
          '了解頂級酒莊的歷史與傳奇'
        ]
      }
    ],
    certificate: '您已獲得本課程學習證明',
    reflection: {
      title: '課程反思',
      questions: [
        '為什麼Pomerol的藍黏土能釀出Merlot的頂峰風格？',
        'Sauternes貴腐甜白的釀造條件為何如此苛刻？',
        '左岸與右岸的根本差異在哪裡？',
        '波爾多白酒的特色是什麼？'
      ]
    },
    keyInsight: '波爾多的魅力不僅在於左岸的強勁，更在於右岸的柔美與白酒的優雅。Pomerol的藍黏土釀出Merlot的天堂，Saint-Émilion的千年歷史展現文化厚度，Sauternes的貴腐甜白是大自然的神蹟。理解波爾多的多樣性，才能真正領略這個偉大產區的全貌。',
    shareMessage: '我剛完成了波爾多葡萄酒Level 1的「右岸核心產區與白酒」課程！現在我理解Pomerol與Sauternes的魅力了！🍯🍷 #波爾多 #右岸 #貴腐甜白 #葡萄酒學習'  }
]

export default lessonContent
