// L3-11: 波爾多葡萄酒產業史與文化（六章合併版）
// 合併自 l3-11-part1.js 與 l3-11-part2.js

export const l311Content = [

  // 課程簡介
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          波爾多葡萄酒不僅是釀造的藝術，更是歷史與文化的結晶。本課程共六章，從羅馬時代的起源出發，橫跨中世紀、英國統治、1855年分級制度，直至法國文化哲學、現代全球影響力，以及傳統文化在當代的傳承與挑戰。
        </p>

        <h3 class="section-title">課程架構：六章內容一覽</h3>

        <div class="course-chapters-grid">
          <div class="chapter-group">
            <h4 class="chapter-group-label">第一部分：歷史發展與分級制度</h4>
            <div class="learning-points">
              <div class="point-item">
                <h4>🏛️ 第一章：古代起源與中世紀發展</h4>
                <p>從羅馬征服帶來葡萄種植技術，到中世紀修道院精細釀造，奠定波爾多產業的根基</p>
              </div>
              <div class="point-item">
                <h4>🇬🇧 第二章：英國統治時期的黃金年代</h4>
                <p>12 世紀聯姻開闢英國市場，推動 300 年貿易繁榮，確立波爾多的國際地位</p>
              </div>
              <div class="point-item">
                <h4>📜 第三章：1855 年分級制度的誕生</h4>
                <p>巴黎世博會催生官方分級，61 家列級莊奠定 170 年不變的品質標竿</p>
              </div>
            </div>
          </div>

          <div class="chapter-group">
            <h4 class="chapter-group-label">第二部分：文化傳承與現代影響</h4>
            <div class="learning-points">
              <div class="point-item">
                <h4>🇫🇷 第四章：法國葡萄酒文化的核心價值</h4>
                <p>探索 Art de Vivre 法式生活藝術、Terroir 風土哲學，以及波爾多作為法國文化軟實力象徵的深層意涵</p>
              </div>
              <div class="point-item">
                <h4>🌍 第五章：波爾多的現代文化地位</h4>
                <p>分析波爾多如何以品質標準、教育體系與文化外交，持續引領全球葡萄酒文化的發展</p>
              </div>
              <div class="point-item">
                <h4>⚡ 第六章：現代化挑戰與文化傳承</h4>
                <p>評估科技與世代差異帶來的雙面衝擊，探討如何在數位時代守護並創新傳統文化價值</p>
              </div>
            </div>
          </div>
        </div>

        <div class="course-info">
          <p><strong>預計學習時間：</strong>65 分鐘（前三章 30 分鐘 ／ 後三章 35 分鐘）</p>
          <p><strong>難度等級：</strong>高級專業</p>
        </div>
      </div>
    `,
    icon: '🏰'
  },

  // 第一章：古代起源與中世紀發展
  // 章節導覽分隔（供簡報章節導覽晶片使用）
  {
    type: 'chapter-divider',
    title: '第一章',
    subtitle: '古代起源與中世紀發展',
    icon: '🏛️',
    navLabel: '起源·中世紀'
  },
  {
    type: 'chapter',
    title: '第一章：古代起源與中世紀發展',
    subtitle: '從羅馬征服到修道院時代',
    content: `
      <div class="chapter-content">

        <h3>🏛️ 羅馬時代的奠基</h3>
        <div class="section-intro">
          <div class="info-cards-grid two-col">
            <div class="info-card accent-amber">
              <div class="card-header"><span class="card-icon">📅</span><h4>西元前 56 年：凱撒征服高盧</h4></div>
              <ul>
                <li>Burdigala（波爾多古名）成為重要羅馬城市</li>
                <li>帶來先進的葡萄種植與管理技術</li>
                <li>建立第一批有組織的葡萄園</li>
                <li>奠定波爾多作為產區的制度基礎</li>
              </ul>
            </div>
            <div class="info-card accent-blue">
              <div class="card-header"><span class="card-icon">📅</span><h4>西元 1–4 世紀：產業萌芽與擴張</h4></div>
              <ul>
                <li>引進義大利葡萄品種與釀造技術</li>
                <li>建立完整的葡萄酒貿易網絡</li>
                <li>波爾多葡萄酒出口至羅馬帝國各地</li>
                <li>鞏固波爾多的葡萄酒產區地位</li>
              </ul>
            </div>
          </div>
          <div class="subsection-block">
            <h4>🍇 羅馬留下的三大技術遺產</h4>
            <div class="info-cards-grid three-col">
              <div class="info-card accent-green">
                <div class="card-header"><span class="card-icon">🌱</span><h4>種植技術</h4></div>
                <ul>
                  <li>葡萄園規劃與管理</li>
                  <li>土壤改良與排水系統</li>
                  <li>品種選擇與培育</li>
                  <li>收穫時機判斷標準</li>
                </ul>
              </div>
              <div class="info-card accent-gold">
                <div class="card-header"><span class="card-icon">🍶</span><h4>釀造工藝</h4></div>
                <ul>
                  <li>發酵容器的製作技術</li>
                  <li>酒液澄清與過濾方法</li>
                  <li>儲存與陳年的基本概念</li>
                  <li>品質控制的初步標準</li>
                </ul>
              </div>
              <div class="info-card accent-purple">
                <div class="card-header"><span class="card-icon">🚢</span><h4>貿易體系</h4></div>
                <ul>
                  <li>建立地中海貿易路線</li>
                  <li>葡萄酒包裝與運輸技術</li>
                  <li>品質評估與定價機制</li>
                  <li>培養專業商人階層</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3>⛪ 中世紀修道院的守護</h3>
        <div class="section-intro">
          <div class="key-point-banner">
            <p>8–12 世紀，天主教修道院兼具穩定勞動力、豐富土地資源與長遠傳承視野，成為波爾多葡萄酒業最重要的守護者與創新者。</p>
          </div>
          <div class="info-cards-grid two-col">
            <div class="info-card accent-purple">
              <div class="card-header"><span class="card-icon">📿</span><h4>宗教推動力</h4></div>
              <ul>
                <li><strong>聖體聖事：</strong>天主教彌撒需要大量葡萄酒，形成穩定需求</li>
                <li><strong>修道院經濟：</strong>葡萄酒成為修道院重要收入來源</li>
                <li><strong>朝聖貿易：</strong>聖雅各朝聖路線帶動週邊需求激增</li>
                <li><strong>宗教保護：</strong>教會地位使葡萄園免受戰爭破壞</li>
              </ul>
            </div>
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">🔬</span><h4>技術革新</h4></div>
              <ul>
                <li><strong>品種改良：</strong>選育更適合波爾多氣候的葡萄品種</li>
                <li><strong>釀造技術：</strong>發展精密的發酵控制與陳年技術</li>
                <li><strong>品質控制：</strong>建立嚴格的品質標準與檢驗制度</li>
                <li><strong>記錄保存：</strong>詳細記錄天氣、收成與品質的歷史資料</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>⚙️ 中世紀商業化與三大成就</h3>
        <div class="section-intro">
          <div class="info-cards-grid two-col">
            <div class="info-card accent-rose">
              <div class="card-header"><span class="card-icon">🏰</span><h4>封建制度下的發展</h4></div>
              <ul>
                <li><strong>領主特權：</strong>貴族控制最佳風土地塊，形成精英葡萄園格局</li>
                <li><strong>勞動力保障：</strong>農奴制度提供穩定的葡萄園耕作勞動力</li>
                <li><strong>技術傳承：</strong>師傅制度確保釀酒技術代代精確傳承</li>
              </ul>
            </div>
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">📈</span><h4>商業化加速發展</h4></div>
              <ul>
                <li><strong>市場擴張：</strong>葡萄酒貿易延伸至歐洲各地，建立廣泛市場</li>
                <li><strong>品質分級萌芽：</strong>依產地品質分級，品牌概念初步形成</li>
                <li><strong>價格差異化：</strong>優質葡萄酒獲更高溢價，推動品質競爭</li>
              </ul>
            </div>
          </div>
          <div class="subsection-block">
            <h4>🏆 中世紀留下的三大成就</h4>
            <div class="info-cards-grid three-col">
              <div class="info-card accent-blue">
                <div class="card-header"><span class="card-icon">🍇</span><h4>葡萄品種發展</h4></div>
                <ul>
                  <li>選育適合波爾多氣候的品種</li>
                  <li>嘗試不同品種的混釀技術</li>
                  <li>建立品種選育的科學方法</li>
                  <li>保存珍貴的品種基因資源</li>
                </ul>
              </div>
              <div class="info-card accent-amber">
                <div class="card-header"><span class="card-icon">🏭</span><h4>釀造技術進步</h4></div>
                <ul>
                  <li>精確的發酵控制方法</li>
                  <li>改進儲存與陳年技術</li>
                  <li>開發澄清過濾工藝</li>
                  <li>建立品質檢驗標準程序</li>
                </ul>
              </div>
              <div class="info-card accent-purple">
                <div class="card-header"><span class="card-icon">📚</span><h4>知識體系建立</h4></div>
                <ul>
                  <li>編寫第一批釀造手冊</li>
                  <li>建立釀酒日曆與作業指南</li>
                  <li>記錄大量氣候與收成數據</li>
                  <li>形成葡萄酒文化理論基礎</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🏛️',
        title: '羅馬奠基',
        content: '羅馬征服為波爾多葡萄酒業奠定了技術和貿易基礎，建立了延續至今的產業框架'
      },
      {
        id: 2,
        icon: '⛪',
        title: '修道院創新',
        content: '中世紀修道院不僅保存了釀酒技術，更推動了品種改良和品質提升的重要發展'
      }
    ],
    hasMap: false,
    interactiveElements: [
      {
        type: 'historical-timeline',
        title: '歷史發展時間軸',
        data: {
          periods: ['羅馬時代', '中世紀', '修道院時期'],
          events: ['征服', '技術傳入', '修道院建立', '品種改良'],
          impacts: ['貿易建立', '技術創新', '品質提升', '文化形成']
        }
      }
    ]
  },

  // 第一章知識檢測
  {
    type: 'interactive-quiz',
    title: '知識檢測：古代起源與中世紀發展',
    questions: [
      {
        question: '羅馬人在何時征服高盧並為波爾多葡萄酒業奠定基礎？',
        options: [
          '西元前100年',
          '西元前56年',
          '西元1世紀',
          '西元4世紀'
        ],
        correct: 1,
        explanation: '西元前56年凱撒征服高盧，羅馬人帶來先進的葡萄種植技術，建立了第一批有組織的葡萄園，為波爾多葡萄酒業奠定基礎。'
      },
      {
        question: '中世紀修道院對波爾多葡萄酒業最重要的貢獻是什麼？',
        options: [
          '大規模擴張葡萄園面積',
          '建立國際貿易網絡',
          '品種改良和釀造技術創新',
          '制定第一個分級標準'
        ],
        correct: 2,
        explanation: '修道院修士們進行品種選育、發展精密釀造技術、建立品質控制標準，並詳細記錄天氣和收成資料，這些技術創新對波爾多葡萄酒業的發展起到決定性作用。'
      }
    ]
  },

  // 第二章：英國統治時期的黃金年代
  // 章節導覽分隔（供簡報章節導覽晶片使用）
  {
    type: 'chapter-divider',
    title: '第二章',
    subtitle: '英國統治時期的黃金年代',
    icon: '🇬🇧',
    navLabel: '英國時期'
  },
  {
    type: 'chapter',
    title: '第二章：英國統治時期的黃金年代',
    subtitle: '英法聯姻開啟的貿易繁榮',
    content: `
      <div class="chapter-content">

        <h3>👑 阿基坦公國的聯姻</h3>
        <div class="section-intro">
          <div class="key-point-banner">
            <p>1152 年，阿基坦的埃莉諾與亨利二世聯姻，波爾多成為英國領土長達 300 年（1152–1453），開啟葡萄酒業的國際化黃金時代。</p>
          </div>
          <div class="info-cards-grid two-col">
            <div class="info-card accent-purple">
              <div class="card-header"><span class="card-icon">👸</span><h4>阿基坦的埃莉諾</h4></div>
              <ul>
                <li>阿基坦公國女繼承人</li>
                <li>控制包括波爾多的廣大領土</li>
                <li>法王路易七世的前妻</li>
                <li>中世紀最有影響力的女性之一</li>
              </ul>
            </div>
            <div class="info-card accent-blue">
              <div class="card-header"><span class="card-icon">🤴</span><h4>亨利二世（亨利·安茹）</h4></div>
              <ul>
                <li>安茹伯爵・諾曼底公爵</li>
                <li>通過聯姻獲得阿基坦公國</li>
                <li>建立橫跨英法的安茹帝國</li>
                <li>開啟波爾多英國時代</li>
              </ul>
            </div>
          </div>
          <div class="info-cards-grid three-col">
            <div class="info-card accent-rose">
              <div class="card-header"><span class="card-icon">🗺️</span><h4>政治影響</h4></div>
              <ul>
                <li>波爾多成為英國領土</li>
                <li>建立穩定政治環境</li>
                <li>保護貿易免受干擾</li>
                <li>為商業發展創造條件</li>
              </ul>
            </div>
            <div class="info-card accent-gold">
              <div class="card-header"><span class="card-icon">💼</span><h4>經濟影響</h4></div>
              <ul>
                <li>直接打開英國市場</li>
                <li>建立特殊貿易特權</li>
                <li>吸引英國商人投資</li>
                <li>創造穩定收入來源</li>
              </ul>
            </div>
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">🍷</span><h4>葡萄酒業影響</h4></div>
              <ul>
                <li>英國成為最大市場</li>
                <li>貴族需求推動品質提升</li>
                <li>建立貿易制度框架</li>
                <li>奠定延續至今的英波關係</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>🚢 中世紀的葡萄酒貿易</h3>
        <div class="section-trade">
          <div class="info-cards-grid two-col">
            <div class="info-card accent-blue">
              <div class="card-header"><span class="card-icon">🗺️</span><h4>貿易路線</h4></div>
              <ul>
                <li><strong>加龍河水運：</strong>波爾多港成為集散中心，內陸葡萄園透過河運輸往港口</li>
                <li><strong>年度船隊：</strong>每年秋季固定船隊直航倫敦・布里斯托</li>
                <li>建立海上運輸保險制度，管理貿易風險</li>
              </ul>
            </div>
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">🏛️</span><h4>貿易特權保護</h4></div>
              <ul>
                <li><strong>英國市場特權：</strong>較低關稅・優先進入市場・王室採購優先</li>
                <li><strong>生產者保護：</strong>波爾多本地獨占權・外地酒銷售限制</li>
                <li>品質標準受法律保護，產地標示雛形形成</li>
              </ul>
            </div>
          </div>
          <div class="info-cards-grid two-col">
            <div class="info-card accent-purple">
              <div class="card-header"><span class="card-icon">📊</span><h4>13 世紀貿易高峰數據</h4></div>
              <ul>
                <li>年出口量約 <strong>100 萬加侖</strong>，占總產量 80%</li>
                <li>占波爾多總收入 <strong>60% 以上</strong></li>
                <li>創造數千個直接就業機會</li>
              </ul>
            </div>
            <div class="info-card accent-amber">
              <div class="card-header"><span class="card-icon">🌆</span><h4>社會文化影響</h4></div>
              <ul>
                <li><strong>城市發展：</strong>波爾多躍升重要商業城市，吸引各國商人定居</li>
                <li><strong>社會階層：</strong>催生富裕的葡萄酒商人階層，推動中產階級形成</li>
                <li>提升釀酒師社會地位，建立專業職業認同</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>⚔️ 百年戰爭的衝擊</h3>
        <div class="section-war">
          <div class="key-point-banner">
            <p>1337–1453 年百年戰爭終結英國統治，危機卻催生市場多元化策略，為現代全球銷售格局奠定基礎。</p>
          </div>
          <div class="info-cards-grid two-col">
            <div class="info-card accent-amber">
              <div class="card-header"><span class="card-icon">📅</span><h4>1337–1380 年：第一階段</h4></div>
              <ul>
                <li>貿易路線受到戰爭威脅</li>
                <li>葡萄園遭受戰火破壞</li>
                <li>勞動力嚴重短缺</li>
                <li>英國市場需求仍強勁，支撐產業</li>
              </ul>
            </div>
            <div class="info-card accent-rose">
              <div class="card-header"><span class="card-icon">📅</span><h4>1415–1453 年：最後階段</h4></div>
              <ul>
                <li>法國逐步收復失地</li>
                <li>英國統治搖搖欲墜</li>
                <li>葡萄酒貿易量急劇下滑</li>
                <li>1453 年：波爾多重歸法國版圖</li>
              </ul>
            </div>
          </div>
          <div class="info-cards-grid two-col">
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">🌍</span><h4>市場多元化策略</h4></div>
              <ul>
                <li>開拓荷蘭・德國・北歐新市場</li>
                <li>降低對英國單一市場的依賴</li>
                <li>發展法國本土消費市場</li>
                <li>→ 奠定現代全球銷售格局基礎</li>
              </ul>
            </div>
            <div class="info-card accent-blue">
              <div class="card-header"><span class="card-icon">⬆️</span><h4>品質提升策略</h4></div>
              <ul>
                <li>專注高品質葡萄酒生產</li>
                <li>建立更嚴格的品質標準</li>
                <li>強化產區品牌形象</li>
                <li>→ 為 1855 年分級制度埋下伏筆</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '👑',
        title: '英法聯姻',
        content: '1152年的聯姻開啟了波爾多300年的英國統治，建立了穩固的貿易關係'
      },
      {
        id: 2,
        icon: '🚢',
        title: '貿易繁榮',
        content: '英波葡萄酒貿易創造了中世紀最成功的國際商業模式之一'
      },
      {
        id: 3,
        icon: '⚔️',
        title: '戰爭轉機',
        content: '百年戰爭雖然結束了英國統治，但促使波爾多發展多元化市場策略'
      }
    ],
        hasMap: false,
    interactiveElements: [
      {
        type: 'trade-route-explorer',
        title: '中世紀貿易路線探索',
        data: {
          routes: ['加龍河水運', '跨海航線', '陸路運輸'],
          volumes: ['13世紀', '14世紀', '15世紀'],
          impacts: ['經濟', '社會', '文化', '政治']
        }
      }
    ]
  },

  // 第二章知識檢測
  {
    type: 'interactive-quiz',
    title: '知識檢測：英國統治時期的黃金年代',
    questions: [
      {
        question: '1152年阿基坦的埃莉諾與亨利二世聯姻對波爾多葡萄酒業帶來什麼影響？',
        options: [
          '引入新的葡萄品種',
          '改進釀造技術',
          '開闢穩定的英國市場並建立300年貿易關係',
          '建立修道院釀酒傳統'
        ],
        correct: 2,
        explanation: '這次聯姻使波爾多成為英國領土300年（1152-1453），開闢了直接穩定的英國市場，建立特殊貿易特權，英國成為波爾多葡萄酒的主要市場，推動了產業繁榮。'
      },
      {
        question: '13世紀波爾多葡萄酒貿易的規模有多大？',
        options: [
          '年出口量約10萬加侖，占總產量20%',
          '年出口量約100萬加侖，占總產量80%',
          '年出口量約50萬加侖，占總產量50%',
          '年出口量約200萬加侖，占總產量90%'
        ],
        correct: 1,
        explanation: '13世紀高峰期，波爾多年出口量約100萬加侖，占總產量的80%，成為英國葡萄酒消費的主要來源，占波爾多總收入60%以上，支撐整個地區的經濟發展。'
      }
    ]
  },

  // 第三章：1855年分級制度的誕生
  // 章節導覽分隔（供簡報章節導覽晶片使用）
  {
    type: 'chapter-divider',
    title: '第三章',
    subtitle: '1855年分級制度的誕生',
    icon: '📜',
    navLabel: '1855分級'
  },
  {
    type: 'chapter',
    title: '第三章：1855年分級制度的誕生',
    subtitle: '改變波爾多命運的歷史性評選',
    content: `
      <div class="chapter-content">

        <h3>🌍 巴黎世界博覽會的背景</h3>
        <div class="section-intro">
          <div class="key-point-banner">
            <p>1855年，拿破崙三世為巴黎世界博覽會委託波爾多商會制定葡萄酒官方分級，一個改變葡萄酒世界的歷史決定就此誕生。</p>
          </div>
          <div class="info-cards-grid three-col">
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🏛️</span><h4>時代背景</h4></div>
              <ul>
                <li>法國工業革命後競相重建國際聲望</li>
                <li>拿破崙三世積極推動法國現代化形象</li>
                <li>英法之間持續的經濟與文化競爭</li>
                <li>葡萄酒成為展示法國優越性的核心代表</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-header"><span class="card-icon">📋</span><h4>博覽會的需求</h4></div>
              <ul>
                <li>需要清晰的展品等級劃分供國際訪客理解</li>
                <li>展示法國葡萄酒的最高品質與多元層次</li>
                <li>建立可信賴、具說服力的客觀評選標準</li>
                <li>為法國葡萄酒確立長期國際市場地位</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🍷</span><h4>波爾多的優勢</h4></div>
              <ul>
                <li>已是法國最具國際聲譽的葡萄酒產區</li>
                <li>英國、荷蘭等歐洲貴族長期收藏愛用</li>
                <li>酒商公會保有百年完整的價格交易記錄</li>
                <li>波爾多商會隨即受官方委託負責執行</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>⚖️ 分級制度的制定過程</h3>
        <div class="section-classification">
          <div class="subsection-block">
            <h4>三大評選標準</h4>
            <div class="info-cards-grid three-col">
              <div class="info-card accent-gold">
                <div class="card-header"><span class="card-icon">💰</span><h4>市場價格</h4></div>
                <p>過去 50–100 年的長期價格趨勢、年份間穩定性，以及在英國、荷蘭等出口市場的實際成交紀錄。</p>
              </div>
              <div class="info-card accent-gold">
                <div class="card-header"><span class="card-icon">🏆</span><h4>歷史聲譽</h4></div>
                <p>法國與歐洲貴族的收藏偏好、酒商公會的專業評價，以及在各主要國際市場的品牌認知程度。</p>
              </div>
              <div class="info-card accent-gold">
                <div class="card-header"><span class="card-icon">🍇</span><h4>品質一致性</h4></div>
                <p>跨年份的品質穩定表現、釀造技術水準，以及葡萄酒的陳年潛力與對產區風土的完整呈現。</p>
              </div>
            </div>
          </div>

          <div class="subsection-block">
            <h4>分級結果：共 61 家列級酒莊</h4>
            <div class="info-cards-grid two-col">
              <div class="info-card">
                <div class="card-header"><span class="card-icon">📊</span><h4>五個等級分布</h4></div>
                <ul>
                  <li><strong>一級莊（Premiers Crus）：</strong>4 家</li>
                  <li><strong>二級莊（Deuxièmes Crus）：</strong>14 家</li>
                  <li><strong>三級莊（Troisièmes Crus）：</strong>14 家</li>
                  <li><strong>四級莊（Quatrièmes Crus）：</strong>10 家</li>
                  <li><strong>五級莊（Cinquièmes Crus）：</strong>18 家</li>
                  <li><strong>產區分布：</strong>Médoc 59 家 + Graves 1 家</li>
                </ul>
              </div>
              <div class="info-card">
                <div class="card-header"><span class="card-icon">👑</span><h4>四家一級莊</h4></div>
                <ul>
                  <li><strong>Château Lafite Rothschild</strong>（Pauillac）— 歐洲皇室收藏首選</li>
                  <li><strong>Château Latour</strong>（Pauillac）— 英國市場最受推崇</li>
                  <li><strong>Château Margaux</strong>（Margaux）— 法國宮廷指定用酒</li>
                  <li><strong>Château Haut-Brion</strong>（Graves）— 唯一非 Médoc 酒莊，傑佛遜總統最愛</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3>🌟 分級制度的歷史意義與影響</h3>
        <div class="section-impact">
          <div class="key-point-banner">
            <p>170 年幾乎未作更動，1855 年分級至今仍是全球葡萄酒市場最重要的品質指標，也是史上最具影響力的農產品分級制度。</p>
          </div>
          <div class="info-cards-grid three-col">
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">✅</span><h4>正面影響</h4></div>
              <ul>
                <li>建立世界葡萄酒品質的最高標竿</li>
                <li>確立波爾多作為全球頂尖產區的地位</li>
                <li>成為法國文化軟實力的重要象徵</li>
                <li>激勵整體產業持續提升技術與品質</li>
                <li>推動葡萄酒行業走向專業化與標準化</li>
              </ul>
            </div>
            <div class="info-card accent-amber">
              <div class="card-header"><span class="card-icon">⚠️</span><h4>挑戰與爭議</h4></div>
              <ul>
                <li>靜態評價無法反映現代品質的實際變化</li>
                <li>可能限制優秀新興酒莊的市場認可</li>
                <li>歷史聲譽有時凌駕於實際品質之上</li>
                <li>170 年來制度幾乎毫無調整，缺乏彈性</li>
                <li>部分酒莊靠名聲維持高價但品質下滑</li>
              </ul>
            </div>
            <div class="info-card accent-purple">
              <div class="card-header"><span class="card-icon">🔄</span><h4>唯一升級紀錄</h4></div>
              <ul>
                <li>1973 年，Mouton Rothschild 從二級升為一級</li>
                <li>歷時數十年的外交交涉與政治努力</li>
                <li>由法國農業部長正式批准頒布</li>
                <li>Baron Philippe de Rothschild 親身主導爭取</li>
                <li>驗證了 1855 分級制度的極端穩定性</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🌍',
        title: '世博契機',
        content: '1855年巴黎世界博覽會為波爾多分級制度的建立提供了歷史契機'
      },
      {
        id: 2,
        icon: '⚖️',
        title: '科學評選',
        content: '基於市場價格、歷史聲譽和品質一致性的評選標準至今仍具參考價值'
      },
      {
        id: 3,
        icon: '🌟',
        title: '深遠影響',
        content: '分級制度不僅改變了波爾多，更影響了全世界的葡萄酒評價體系'
      }
    ],
    hasMap: false,
    interactiveElements: [
      {
        type: 'classification-explorer',
        title: '1855年分級制度探索器',
        data: {
          grades: ['一級莊', '二級莊', '三級莊', '四級莊', '五級莊'],
          criteria: ['市場價格', '歷史聲譽', '品質一致性'],
          impacts: ['商業', '產業', '文化', '國際']
        }
      }
    ]
  },

  // 第三章知識檢測
  {
    type: 'interactive-quiz',
    title: '知識檢測：1855年分級制度的誕生',
    questions: [
      {
        question: '1855年分級制度的評選主要基於什麼標準？',
        options: [
          '當年品酒會評分',
          '葡萄園土壤質量',
          '過去50-100年的市場價格和歷史聲譽',
          '酒莊建立年份'
        ],
        correct: 2,
        explanation: '1855年分級主要基於長期價格趨勢、價格穩定性、國際市場認可度和歷史聲譽等標準，這種以市場為導向的評選方式體現了當時的商業智慧，至今仍具參考價值。'
      },
      {
        question: '在1855年分級中有多少家酒莊被評為一級莊？其中唯一的非Médoc產區酒莊是？',
        options: [
          '3家，Château Margaux',
          '4家，Château Haut-Brion',
          '5家，Château Latour',
          '4家，Château Lafite'
        ],
        correct: 1,
        explanation: '1855年分級評選出4家一級莊：Lafite、Latour、Margaux和Haut-Brion。其中Château Haut-Brion來自Graves產區，是唯一的非Médoc酒莊，證明了其卓越品質和特殊歷史地位。'
      }
    ]
  },

  // 總結
  {
    type: 'summary',
    title: '課程總結：歷史傳承的智慧',
    content: `
      <div class="summary-content">

        <div class="key-point-banner">
          <p>波爾多的偉大不是偶然，而是歷經羅馬奠基、修道院淬鍊、英國市場催化，以及 1855 年分級制度塑造，層層積累出來的歷史成就。</p>
        </div>

        <h3>📚 第一部分：四大歷史洞察</h3>
        <div class="info-cards-grid two-col">
          <div class="info-card">
            <div class="card-header"><span class="card-icon">🏛️</span><h4>技術傳承的重要性</h4></div>
            <p>從羅馬時代到修道院時期，技術的一代代積累與傳承，是波爾多葡萄酒業發展最深厚的基石</p>
          </div>
          <div class="info-card">
            <div class="card-header"><span class="card-icon">🤝</span><h4>國際合作的價值</h4></div>
            <p>英國統治時期展示了國際市場合作對產業繁榮的決定性推動作用，貿易網絡造就了品質革命</p>
          </div>
          <div class="info-card">
            <div class="card-header"><span class="card-icon">📏</span><h4>標準化的力量</h4></div>
            <p>1855 年分級制度證明了在農產品領域建立標準化評估體系，可以創造 170 年屹立不倒的市場價值</p>
            </div>
          <div class="info-card">
            <div class="card-header"><span class="card-icon">🔄</span><h4>適應變化的能力</h4></div>
            <p>歷史上的每次危機——根瘤蚜蟲、世界大戰、經濟蕭條——都催生了產業更強的韌性與創新應對能力</p>
          </div>
        </div>

        <h3>🔗 歷史與現代的連接</h3>
        <div class="key-point-banner">
          <p>波爾多的歷史不僅是過去的記錄，更是理解今日波爾多的鑰匙。每一個歷史節點的選擇，都塑造了我們今日所見的頂級產區格局。繼續第二部分，探索文化傳承與現代挑戰。</p>
        </div>

      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '📚',
        title: '歷史智慧',
        content: '技術傳承、國際合作、標準化和適應能力是波爾多成功的四大要素'
      },
      {
        id: 2,
        icon: '🔗',
        title: '現代意義',
        content: '歷史經驗為理解現代波爾多和展望未來提供了重要的參考框架'
      }
    ]
  },

  // 第一部分測驗
  {
    type: 'quiz',
    title: '第一部分測驗：歷史發展與分級制度',
    questions: [
      {
        id: 1,
        question: '波爾多葡萄酒業的真正起源可以追溯到哪個時期？',
        options: [
          '高盧人時期',
          '羅馬征服後',
          '中世紀修道院時期',
          '英國統治時期'
        ],
        correct: 1,
        explanation: '西元前56年羅馬征服高盧後，羅馬人帶來了先進的葡萄種植和釀造技術，為波爾多葡萄酒業奠定了真正的基礎。'
      },
      {
        id: 2,
        question: '1152年阿基坦的埃莉諾與亨利二世的聯姻對波爾多葡萄酒業最重要的影響是？',
        options: [
          '引入了新的葡萄品種',
          '改進了釀造技術',
          '開闢了穩定的英國市場',
          '建立了修道院釀酒傳統'
        ],
        correct: 2,
        explanation: '這次聯姻使波爾多成為英國領土，開闢了直接穩定的英國市場，建立了延續300年的特殊貿易關係，為波爾多葡萄酒業發展提供了重要推動力。'
      },
      {
        id: 3,
        question: '1855年波爾多分級制度的評選主要基於什麼標準？',
        options: [
          '當年的品酒會評分',
          '葡萄園的土壤質量',
          '歷史價格和市場聲譽',
          '酒莊的建立年份'
        ],
        correct: 2,
        explanation: '1855年分級制度主要基於過去50-100年的市場價格表現和歷史聲譽，這種以市場為導向的評選標準體現了當時的商業智慧。'
      },
      {
        id: 4,
        question: '在1855年分級中，唯一入選的非Médoc產區酒莊是？',
        options: [
          'Château Margaux',
          'Château Latour',
          'Château Haut-Brion',
          'Château Lafite'
        ],
        correct: 2,
        explanation: 'Château Haut-Brion來自Graves產區，是1855年分級中唯一的非Médoc酒莊，這證明了它卓越的品質和特殊的歷史地位。'
      },
      {
        id: 5,
        question: '中世紀修道院對波爾多葡萄酒業最重要的貢獻是？',
        options: [
          '大規模擴張葡萄園面積',
          '建立了國際貿易網絡',
          '推動了釀造技術創新和品質提升',
          '制定了第一個分級標準'
        ],
        correct: 2,
        explanation: '中世紀修道院通過品種改良、釀造技術創新、品質控制和知識記錄，為波爾多葡萄酒業的技術發展和品質提升做出了決定性貢獻。'
      }
    ],
    passingScore: 80,
    timeLimit: 300
  },
  // 第四章：法國葡萄酒文化的核心價值
  // 章節導覽分隔（供簡報章節導覽晶片使用）
  {
    type: 'chapter-divider',
    title: '第四章',
    subtitle: '法國葡萄酒文化的核心價值',
    icon: '🇫🇷',
    navLabel: '文化核心'
  },
  {
    type: 'chapter',
    title: '第四章：法國葡萄酒文化的核心價值',
    subtitle: '理解法式生活藝術的精髓',
    content: `
      <div class="chapter-content">

        <h3>🇫🇷 Art de Vivre — 法式生活藝術</h3>
        <div class="section-intro">
          <div class="key-point-banner">
            <p>「Art de Vivre」（生活的藝術）是法國文化的核心理念，葡萄酒不只是飲品，而是美食、社交、哲學與藝術的交匯點。</p>
          </div>
          <div class="info-cards-grid two-col">
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🍽️</span><h4>美食文化的核心</h4></div>
              <ul>
                <li>葡萄酒是法式正餐不可或缺的組成部分</li>
                <li>餐桌上的配酒藝術：不同菜式有對應的葡萄酒</li>
                <li>家庭聚餐是葡萄酒文化教育的自然場合</li>
                <li>葡萄酒作為社交溝通與感情交流的媒介</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🎨</span><h4>文學藝術的靈感</h4></div>
              <ul>
                <li>巴爾扎克、大仲馬等作家筆下的葡萄酒意象</li>
                <li>印象派畫家對葡萄園風光的大量描繪</li>
                <li>法國電影中葡萄酒場景的紳士與精緻</li>
                <li>陳年哲學：時間、耐心與生命意義的隱喻</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>🏛️ Terroir — 風土文化的深層內涵</h3>
        <div class="section-terroir">
          <div class="info-cards-grid three-col">
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">🌍</span><h4>人與自然的和諧</h4></div>
              <ul>
                <li>遵循自然季節與氣候變化，不與天爭</li>
                <li>維護葡萄園生態系統的完整性</li>
                <li>世代傳承的永續農業實踐</li>
                <li>對土壤與水資源的珍惜與保護</li>
              </ul>
            </div>
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">⏰</span><h4>時間與耐心的哲學</h4></div>
              <ul>
                <li>陳年需要時間，品質不能急就章</li>
                <li>不為短期利益犧牲長期品質的堅守</li>
                <li>為下一代考慮的世代傳承視野</li>
                <li>在快速變化的世界中堅持傳統價值</li>
              </ul>
            </div>
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">💭</span><h4>三層感知體驗</h4></div>
              <ul>
                <li><strong>感官層：</strong>視、嗅、味、觸的多維體驗</li>
                <li><strong>理性層：</strong>分析風土、品種、工藝的知識體系</li>
                <li><strong>精神層：</strong>與釀酒師、土地的心靈溝通</li>
                <li>三層融合創造超越物質的美學享受</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>🎖️ 法國文化軟實力的象徵</h3>
        <div class="section-soft-power">
          <div class="info-cards-grid three-col">
            <div class="info-card accent-gold">
              <div class="card-header"><span class="card-icon">🎓</span><h4>教育推廣</h4></div>
              <ul>
                <li>法國在全球各地建立葡萄酒教育機構</li>
                <li>WSET、CMS 等國際認證課程以波爾多為核心</li>
                <li>培養全球葡萄酒專業人才</li>
                <li>通過教育系統傳播法國文化價值觀</li>
              </ul>
            </div>
            <div class="info-card accent-gold">
              <div class="card-header"><span class="card-icon">🤝</span><h4>文化外交</h4></div>
              <ul>
                <li>頂級波爾多酒長期作為法國外交禮品</li>
                <li>強化法國文化的國際認同與影響力</li>
                <li>促進不同文化間的對話與商業往來</li>
                <li>法國使館與文化中心的推廣活動</li>
              </ul>
            </div>
            <div class="info-card accent-gold">
              <div class="card-header"><span class="card-icon">🌐</span><h4>國際影響力</h4></div>
              <ul>
                <li>波爾多品牌成為法國國家形象的核心組成</li>
                <li>全球主流媒體的高度持續關注</li>
                <li>UNESCO 文化遺產認定加持</li>
                <li>傳播法式優雅生活方式至全世界</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🇫🇷',
        title: '法式生活',
        content: '波爾多葡萄酒體現了法式生活藝術的精髓，融合美食、文化和哲學思考'
      },
      {
        id: 2,
        icon: '🏛️',
        title: '風土哲學',
        content: 'Terroir概念體現了人與自然和諧、時間與耐心的深層文化價值'
      },
      {
        id: 3,
        icon: '🎖️',
        title: '文化軟實力',
        content: '波爾多葡萄酒是法國文化軟實力的重要象徵和國際影響力的載體'
      }
    ],
    hasMap: false,
    interactiveElements: [
      {
        type: 'culture-explorer',
        title: '法國葡萄酒文化探索器',
        data: {
          dimensions: ['生活藝術', '風土哲學', '文化軟實力'],
          expressions: ['感官', '理性', '精神'],
          influences: ['教育', '媒體', '外交']
        }
      }
    ]
  },

  // 第一章知識檢測
  {
    type: 'interactive-quiz',
    title: '知識檢測：法國葡萄酒文化的核心價值',
    questions: [
      {
        question: '法國葡萄酒文化中"Art de Vivre"的核心理念是什麼？',
        options: [
          '追求最高的經濟利益',
          '將葡萄酒融入生活藝術和美學體驗',
          '大規模工業化生產',
          '模仿其他國家的葡萄酒文化'
        ],
        correct: 1,
        explanation: '"Art de Vivre"（法式生活藝術）強調將葡萄酒融入美食文化、社交活動和美學體驗中，體現了法國人對生活品質和精神享受的追求，是法國文化的重要組成部分。'
      },
      {
        question: 'Terroir風土文化的深層內涵主要體現在？',
        options: [
          '純粹的土壤科學研究',
          '人與自然和諧相處的哲學思想',
          '現代農業技術的應用',
          '國際市場的競爭策略'
        ],
        correct: 1,
        explanation: 'Terroir風土文化體現了人與自然和諧相處、時間與耐心、傳統傳承等深層哲學思想，強調對自然節律的尊重、生態平衡的維護以及可持續發展的實踐。'
      }
    ]
  },

  // 第二章：波爾多的現代文化地位
  // 章節導覽分隔（供簡報章節導覽晶片使用）
  {
    type: 'chapter-divider',
    title: '第五章',
    subtitle: '波爾多的現代文化地位',
    icon: '🌍',
    navLabel: '現代地位'
  },
  {
    type: 'chapter',
    title: '第五章：波爾多的現代文化地位',
    subtitle: '在全球化時代的文化定位與影響',
    content: `
      <div class="chapter-content">

        <h3>🌍 全球葡萄酒文化的引領者</h3>
        <div class="section-global">
          <div class="key-point-banner">
            <p>波爾多不只出口葡萄酒，更輸出品質標準、教育體系、文化規範，在全球葡萄酒世界中持續扮演引領者角色。</p>
          </div>
          <div class="info-cards-grid two-col">
            <div class="info-card">
              <div class="card-header"><span class="card-icon">📏</span><h4>品質標準的全球影響</h4></div>
              <ul>
                <li>1855 年分級制度成為全球葡萄酒分級的範本</li>
                <li>波爾多品質理念與術語成為國際通用語言</li>
                <li>侍酒師文化、餐酒搭配禮儀的國際推廣</li>
                <li>全球葡萄酒評分體系深受波爾多模式影響</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🔄</span><h4>傳統與創新的平衡</h4></div>
              <ul>
                <li>VR/AR 沉浸式虛擬品鑑文化體驗</li>
                <li>與當代藝術家、時尚品牌的跨界合作</li>
                <li>有機與生物動力法文化價值的引領推廣</li>
                <li>社區參與與非物質文化遺產的主動保護</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>🏆 國際聲譽與文化外交成就</h3>
        <div class="section-reputation">
          <div class="info-cards-grid three-col">
            <div class="info-card accent-purple">
              <div class="card-header"><span class="card-icon">📊</span><h4>媒體影響力</h4></div>
              <ul>
                <li>國際主流媒體持續高頻率報導</li>
                <li>全球葡萄酒專業雜誌的核心關注焦點</li>
                <li>社交媒體平台的高討論熱度</li>
                <li>大量國際紀錄片與學術研究產出</li>
              </ul>
            </div>
            <div class="info-card accent-purple">
              <div class="card-header"><span class="card-icon">🤝</span><h4>雙邊文化合作</h4></div>
              <ul>
                <li><strong>中法：</strong>在中國市場的深度文化合作項目</li>
                <li><strong>美法：</strong>長期文化交流傳統（巴黎審判後和解）</li>
                <li><strong>日法：</strong>日本市場的精緻文化推廣</li>
                <li>積極開拓亞洲、南美等新興市場文化關係</li>
              </ul>
            </div>
            <div class="info-card accent-purple">
              <div class="card-header"><span class="card-icon">🏅</span><h4>國際組織參與</h4></div>
              <ul>
                <li>UNESCO 文化遺產的積極申請與維護</li>
                <li>OIV（國際葡萄與葡萄酒組織）核心角色</li>
                <li>歐盟文化項目的重要參與者</li>
                <li>國際葡萄酒論壇的標杆聲音</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🌍',
        title: '全球引領',
        content: '波爾多在品質標準、教育體系等方面引領全球葡萄酒文化發展'
      },
      {
        id: 2,
        icon: '🔄',
        title: '創新平衡',
        content: '在保持傳統文化的同時，積極擁抱數位化和可持續發展的創新理念'
      },
      {
        id: 3,
        icon: '🏆',
        title: '國際聲譽',
        content: '通過文化外交和國際合作，波爾多建立了卓越的國際聲譽和影響力'
      }
    ],
    hasMap: false,
    interactiveElements: [
      {
        type: 'cultural-influence-tracker',
        title: '文化影響力追蹤器',
        data: {
          metrics: ['媒體關注', '文化參與', '專業認可', '國際合作'],
          regions: ['歐洲', '北美', '亞洲', '新興市場'],
          trends: ['數位化', '可持續性', '跨界合作', '年輕化']
        }
      }
    ]
  },

  // 第二章知識檢測
  {
    type: 'interactive-quiz',
    title: '知識檢測：波爾多的現代文化地位',
    questions: [
      {
        question: '波爾多在全球葡萄酒文化中的引領作用主要表現在？',
        options: [
          '價格最低的葡萄酒產區',
          '產量最大的葡萄酒產區',
          '建立品質標準、教育體系和文化規範',
          '最新釀造技術的發明地'
        ],
        correct: 2,
        explanation: '波爾多透過1855年分級制度建立了全球葡萄酒品質標準，在評價體系、教育體系、文化規範（品鑑禮儀、侍酒文化、餐酒搭配）等方面引領全球葡萄酒文化發展。'
      },
      {
        question: '波爾多如何在保持傳統文化的同時適應現代化？',
        options: [
          '完全拒絕任何現代化改變',
          '全面放棄傳統文化價值',
          '透過數位化傳播、跨界合作和可持續發展等創新實踐',
          '只關注短期商業利益'
        ],
        correct: 2,
        explanation: '波爾多在保持核心文化價值的基礎上，積極擁抱數位化文化傳播（VR/AR、線上教育）、跨界文化合作（藝術、時尚、音樂）以及可持續發展的創新理念，實現傳統與現代的平衡。'
      }
    ]
  },

  // 第三章：現代化挑戰與文化傳承
  // 章節導覽分隔（供簡報章節導覽晶片使用）
  {
    type: 'chapter-divider',
    title: '第六章',
    subtitle: '現代化挑戰與文化傳承',
    icon: '⚡',
    navLabel: '挑戰與傳承'
  },
  {
    type: 'chapter',
    title: '第六章：現代化挑戰與文化傳承',
    subtitle: '在變革中保持文化本質',
    content: `
      <div class="chapter-content">

        <h3>⚡ 現代化進程的雙面衝擊</h3>
        <div class="section-impact">
          <div class="key-point-banner">
            <p>科技發展與世代差異同時帶來機遇與威脅，傳統葡萄酒文化必須面對從未有過的挑戰。</p>
          </div>
          <div class="info-cards-grid two-col">
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">✅</span><h4>科技帶來的積極影響</h4></div>
              <ul>
                <li>數位平台讓文化觸達全球更廣泛受眾</li>
                <li>VR/AR 創造更豐富的沉浸式文化體驗</li>
                <li>降低專業知識的學習門檻，普及大眾</li>
                <li>現代技術提升品質、效率與環境友好度</li>
                <li>吸引年輕世代關注並參與傳統文化</li>
              </ul>
            </div>
            <div class="info-card accent-amber">
              <div class="card-header"><span class="card-icon">⚠️</span><h4>現代化的潛在威脅</h4></div>
              <ul>
                <li>工業化大規模生產削弱個性與傳統工藝</li>
                <li>過度標準化可能使各產區喪失獨特風格</li>
                <li>虛擬體驗有替代真實感官接觸的風險</li>
                <li>社群媒體的碎片化傳播導致文化理解膚淺</li>
                <li>傳統世代對商業化侵蝕文化純度的憂慮</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>🔧 文化傳承的適應策略</h3>
        <div class="section-strategy">
          <div class="info-cards-grid three-col">
            <div class="info-card">
              <div class="card-header"><span class="card-icon">📚</span><h4>知識系統化保存</h4></div>
              <ul>
                <li>歷史文獻與釀造工藝流程的數位化建檔</li>
                <li>老一輩口述歷史的收集與保存計畫</li>
                <li>正規學校教育加入葡萄酒文化必修內容</li>
                <li>建立技能傳承的線上與實體雙軌平台</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🎯</span><h4>核心價值的守護</h4></div>
              <ul>
                <li><strong>不可妥協：</strong>品質標準、風土理念、工匠精神</li>
                <li><strong>靈活適應：</strong>傳播方式、市場策略、合作模式</li>
                <li>建立不同世代間的對話機制</li>
                <li>定期評估文化保護狀況並動態調整策略</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🎨</span><h4>文化創新實踐</h4></div>
              <ul>
                <li>與現代藝術家合作重新詮釋葡萄酒傳統</li>
                <li>時尚、音樂、娛樂產業的跨界文化融合</li>
                <li>將可持續發展理念融入文化傳承敘事</li>
                <li>讓公眾參與文化發展的策略決策過程</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '⚡',
        title: '現代衝擊',
        content: '科技發展和世代差異為傳統葡萄酒文化帶來前所未有的挑戰'
      },
      {
        id: 2,
        icon: '🔧',
        title: '創新保護',
        content: '通過數位化保存和文化創新實踐，在變革中保護文化本質'
      },
      {
        id: 3,
        icon: '🎯',
        title: '平衡機制',
        content: '建立核心價值保護和動態平衡管理的雙重機制'
      }
    ],
    hasMap: false,
    interactiveElements: [
      {
        type: 'balance-simulator',
        title: '傳統與現代平衡模擬器',
        data: {
          challenges: ['技術衝擊', '世代差異', '商業壓力', '全球化'],
          solutions: ['數位保存', '教育創新', '跨界合作', '核心保護'],
          outcomes: ['文化傳承', '創新發展', '市場適應', '國際影響']
        }
      }
    ]
  },

  // 第三章知識檢測
  {
    type: 'interactive-quiz',
    title: '知識檢測：現代化挑戰與文化傳承',
    questions: [
      {
        question: '現代化進程對傳統葡萄酒文化的最大挑戰是？',
        options: [
          '技術設備的成本過高',
          '平衡傳統價值與現代創新',
          '葡萄品種的基因改造',
          '國際貿易政策的變化'
        ],
        correct: 1,
        explanation: '現代化的最大挑戰是如何在保持傳統文化核心價值（品質標準、風土理念、工匠精神）的同時，適應現代技術和市場需求，實現傳統與創新的動態平衡。'
      },
      {
        question: '為了保護和傳承葡萄酒文化，哪些做法最為重要？',
        options: [
          '完全拒絕任何技術應用',
          '建立數位化檔案、教育體系和多方參與機制',
          '全面工業化生產',
          '放棄所有傳統工藝'
        ],
        correct: 1,
        explanation: '文化保護需要透過數位化檔案建設（歷史記錄、工藝記錄、口述歷史）、建構教育體系（正規教育、專業培訓）、建立不同世代間的對話機制，以及在核心價值保護的基礎上靈活適應。'
      }
    ]
  },

  // 總結
  {
    type: 'summary',
    title: '課程總結：文化的永恆價值',
    content: `
      <div class="summary-content">

        <div class="key-point-banner">
          <p>波爾多葡萄酒的文化影響力已遠超一瓶酒的本身，它承載著 Art de Vivre 的生活哲學、Terroir 的自然智慧，以及法國面向世界的文化軟實力。</p>
        </div>

        <h3>🎭 文化傳承的四大核心使命</h3>
        <div class="info-cards-grid two-col">
          <div class="info-card accent-green">
            <div class="card-header"><span class="card-icon">🔥</span><h4>守護文化火種</h4></div>
            <p>在全球化浪潮中，堅持波爾多葡萄酒文化的獨特性與純正性，讓百年傳統不因商業壓力而稀釋</p>
          </div>
          <div class="info-card accent-green">
            <div class="card-header"><span class="card-icon">🌱</span><h4>促進文化創新</h4></div>
            <p>在傳承中創新，在創新中傳承，以數位工具、跨界合作讓古老文化煥發新一代的生命力</p>
          </div>
          <div class="info-card accent-green">
            <div class="card-header"><span class="card-icon">🌍</span><h4>擴大文化影響</h4></div>
            <p>透過文化外交與國際合作，讓法國葡萄酒文化的普世價值觸達全球更廣泛的受眾</p>
          </div>
          <div class="info-card accent-green">
            <div class="card-header"><span class="card-icon">👥</span><h4>培育文化傳人</h4></div>
            <p>透過正規教育、師徒傳承與國際交流，培養新世代成為文化的守護者與創新者</p>
          </div>
        </div>

        <h3>🔮 波爾多文化的未來展望</h3>
        <div class="key-point-banner">
          <p>波爾多葡萄酒文化正站在歷史的新起點。核心價值不變，傳播方式因時俱進——這是面對數位化、永續發展等時代挑戰的唯一解方，也是法國文化智慧留給世界的最珍貴禮物。</p>
        </div>

      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🎭',
        title: '文化使命',
        content: '保持火種、促進創新、擴大影響、培養傳人是文化傳承的四大核心使命'
      },
      {
        id: 2,
        icon: '🔮',
        title: '未來展望',
        content: '波爾多文化將成為更加開放包容的體系，繼續引領全球葡萄酒文化發展'
      }
    ]
  },

  // 第二部分測驗
  {
    type: 'quiz',
    title: '第二部分測驗：文化傳承與現代影響',
    questions: [
      {
        id: 1,
        question: '法國葡萄酒文化中"Art de Vivre"的核心理念是什麼？',
        options: [
          '追求最高的經濟利益',
          '將葡萄酒融入生活藝術和美學體驗',
          '大規模工業化生產',
          '模仿其他國家的葡萄酒文化'
        ],
        correct: 1,
        explanation: '"Art de Vivre"（法式生活藝術）強調將葡萄酒融入美食文化、社交活動和美學體驗中，體現了法國人對生活品質和精神享受的追求。'
      },
      {
        id: 2,
        question: 'Terroir風土文化的深層內涵主要體現在？',
        options: [
          '純粹的土壤科學研究',
          '人與自然和諧相處的哲學思想',
          '現代農業技術的應用',
          '國際市場的競爭策略'
        ],
        correct: 1,
        explanation: 'Terroir風土文化體現了人與自然和諧相處、時間與耐心、傳統傳承等深層哲學思想，是法國葡萄酒文化的重要組成部分。'
      },
      {
        id: 3,
        question: '波爾多在全球葡萄酒文化中的引領作用主要表現在？',
        options: [
          '價格最低的葡萄酒產區',
          '產量最大的葡萄酒產區',
          '建立品質標準和文化規範',
          '最新釀造技術的發明地'
        ],
        correct: 2,
        explanation: '波爾多通過1855年分級制度建立了全球葡萄酒品質標準，在評價體系、教育體系、文化規範等方面引領全球葡萄酒文化發展。'
      },
      {
        id: 4,
        question: '現代化進程對傳統葡萄酒文化的最大挑戰是？',
        options: [
          '技術設備的成本過高',
          '平衡傳統價值與現代創新',
          '葡萄品種的基因改造',
          '國際貿易政策的變化'
        ],
        correct: 1,
        explanation: '現代化的最大挑戰是如何在保持傳統文化核心價值的同時，適應現代技術和市場需求，實現傳統與創新的動態平衡。'
      },
      {
        id: 5,
        question: '波爾多文化發展的未來策略應該著重於？',
        options: [
          '完全拒絕任何現代化改變',
          '全面放棄傳統文化價值',
          '在核心價值保護基礎上創新發展',
          '只關注短期商業利益'
        ],
        correct: 2,
        explanation: '未來策略應該建立核心價值保護機制，在不妥協品質標準和文化認同的基礎上，靈活適應現代發展需求，實現可持續的文化創新。'
      }
    ],
    passingScore: 80,
    timeLimit: 300
  }

];

export default l311Content;
