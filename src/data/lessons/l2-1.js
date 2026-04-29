// L2-1: Médoc產區深度探索
import { bordeauxClimateData } from '../datasets/bordeaux-climate.js';

export const l21Content = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Médoc——這個名字代表著波爾多葡萄酒的巔峰。在這片狹長的半島上，坐落著波爾多61座列級酒莊中的60座（除Château Haut-Brion外），包括舉世聞名的五大一級莊中的四座。Médoc不僅是波爾多左岸的心臟，更是全球頂級卡本內蘇維濃葡萄酒的聖地。
        </p>

        <p class="intro-context">
          本課程將帶您深度探索Médoc半島——從其獨特的地理位置、沿Gironde河岸延伸60公里的狹長地形，到「Croupe砂礫丘」的風土奇蹟；從Médoc產區的階層架構（Médoc AOC、Haut-Médoc AOC、六大村莊級AOC），到1855年分級制度的歷史與演變；從土壤特性、葡萄品種配置，到四大名村（Margaux、Pauillac、Saint-Julien、Saint-Estèphe）的風格差異。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🗺️ 掌握Médoc地理架構</h4>
            <p>理解Médoc半島的地理位置、狹長地形與Gironde河的調節作用</p>
          </div>

          <div class="point-item">
            <h4>🪨 深入風土三要素</h4>
            <p>學習Croupe砂礫丘的成因、排水性與蓄熱能力的科學原理</p>
          </div>

          <div class="point-item">
            <h4>🏆 理解分級制度</h4>
            <p>掌握1855分級的歷史背景、評選標準與當代意義</p>
          </div>

          <div class="point-item">
            <h4>🍇 認識產區層級</h4>
            <p>區分Médoc AOC、Haut-Médoc AOC與六大村莊級AOC的範圍與品質差異</p>
          </div>

          <div class="point-item">
            <h4>🍷 分析四大名村特色</h4>
            <p>概覽Margaux、Pauillac、Saint-Julien、Saint-Estèphe的風格定位</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將建立對Médoc產區的全局認知，為深入學習各個村莊級產區奠定堅實基礎。讓我們開始這趟探索世界頂級葡萄酒產區的旅程！
        </p>
      </div>
    `
  },

  // ========== 第一章：地理風土基礎 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '地理風土基礎',
    subtitle: '位置、土壤與氣候調節',
    icon: '🗺️',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  // ========== 1. 地理位置 =========
  {
    title: 'Médoc半島地理概覽',
    layout: 'split',
    duration: '20分鐘',
    level: '中級',
    highlights: [
      { id: 1, icon: '🗺️', title: '獨特地理', content: 'Gironde河左岸，延伸60公里的狹長半島' },
      { id: 2, icon: '📍', title: '戰略位置', content: '從波爾多市西北方延伸至大西洋，左岸精華所在' }
    ],
    content: '<div class="medoc-geography"><p class="lead-text">Médoc半島是波爾多左岸的核心產區，沿Gironde河左岸延伸約60公里。這片狹長半島坐落著波爾多61座列級酒莊中的60座，是全球頂級卡本內蘇維濃的聖地。</p><div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L2-1/01%20Médoc產區層級架構.svg" alt="Médoc產區層級架構" style="max-width: 100%; height: auto; border-radius: 8px;" /></div><div class="key-facts"><div class="fact-item"><strong>地理座標：</strong>北緯45°，Gironde河左岸</div><div class="fact-item"><strong>半島長度：</strong>從波爾多市延伸至大西洋約60公里</div><div class="fact-item"><strong>東西寬度：</strong>最寬約15公里，地形狹長</div><div class="fact-item"><strong>列級酒莊：</strong>61座列級莊中的60座位於Médoc</div></div><div class="strategic-location"><h4>🎯 地理優勢</h4><ul><li><strong>河流保護：</strong>Gironde河提供天然防風屏障與氣候調節</li><li><strong>海洋影響：</strong>距大西洋約50公里，受溫和海洋性氣候調節</li><li><strong>排水良好：</strong>砂礫台地確保優異的土壤排水性</li><li><strong>日照充足：</strong>朝東南向的緩坡享有充足日照</li></ul></div></div>',
    hasMap: true,
    mapFocus: 'LeftBank-Medoc',
    geojsonPaths: [
      '/geojson/LeftBank/Medoc/Medoc_AOC.geojson',
      '/Bordeaux_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      map.flyTo({
        center: [-0.9500, 45.1500],
        zoom: 9.2,
        pitch: 0,
        bearing: 0,
        duration: 1800
      })
    },
    quiz: {
      question: 'Médoc半島位於哪個地理位置？',
      options: ['Gironde河右岸', 'Dordogne河畔', 'Gironde河左岸', 'Garonne河上游'],
      correct: 2,
      explanation: 'Médoc半島位於Gironde河的左岸，這是其最核心的地理標識，與右岸的產區形成對比。'
    }
  },
  // ========== 2. 土壤組成 =========
  {
    title: 'Médoc的靈魂：砂礫土壤',
    highlights: [
      { id: 1, icon: '🪨', title: '核心土壤', content: '以石英為主的古老河流沖積砂礫' },
      { id: 2, icon: '🌡️', title: '天然優勢', content: '優異的排水性與熱量儲存能力' }
    ],
    content: '<div class="medoc-geography"><p class="lead-text">砂礫土壤是Médoc產區風土的基石，賦予了Cabernet Sauvignon完美的生長環境，並塑造了葡萄酒強勁的結構與陳年潛力。</p><div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L2-1/03%20砂礫丘（Croupe）剖面示意圖.svg" alt="砂礫丘（Croupe）剖面示意圖" style="max-width: 100%; height: auto; border-radius: 8px;" /></div><div class="geography-analysis"><div class="geo-section soil-analysis"><h4>🪨 土壤組成與地質結構</h4><div class="soil-composition"><div class="soil-layers"><h5>📊 土壤分層結構</h5><div class="layer-analysis"><div class="soil-layer surface"><h6>表土層 (0-30cm)</h6><div class="layer-details"><p><strong>主要成分：</strong>細砂、粉土與少量黏土</p><p><strong>特殊性質：</strong>保水性適中，透氣性良好</p></div></div><div class="soil-layer gravel"><h6>砂礫層 (30-100cm)</h6><div class="layer-details"><p><strong>核心特徵：</strong>Médoc產區的標誌性土壤</p><p><strong>組成成分：</strong>石英砂礫、鵝卵石、粗砂</p><p><strong>關鍵作用：</strong>優異排水與熱能儲存</p><ul><li>熱反射效應：白天吸熱，夜間放熱</li><li>根系穿透：促進葡萄根系深扎</li></ul></div></div><div class="soil-layer subsoil"><h6>底土層 (100cm以下)</h6><div class="layer-details"><p><strong>地質基礎：</strong>古老的河流沖積層</p><p><strong>礦物組成：</strong>石灰岩、鐵質黏土</p><p><strong>水分調節：</strong>深層保水，乾旱時供應水分</p></div></div></div></div><div class="soil-types"><h5>🎯 不同區域土壤特色</h5><div class="regional-soils"><div class="soil-region margaux-area"><h6>Margaux地區土壤</h6><p><strong>特徵：</strong>細砂礫為主，排水極佳，風格優雅</p></div><div class="soil-region pauillac-area"><h6>Pauillac地區土壤</h6><p><strong>特徵：</strong>深厚砂礫，石英含量高，結構強勁</p></div><div class="soil-region saint-julien-area"><h6>Saint-Julien地區土壤</h6><p><strong>特徵：</strong>砂礫與黏土平衡組合，風格平衡</p></div><div class="soil-region saint-estephe-area"><h6>Saint-Estèphe地區土壤</h6><p><strong>特徵：</strong>黏土含量較高，保水性強，風格濃郁</p></div></div></div></div></div></div></div>',
    hasMap: true, mapFocus: 'LeftBank-Medoc',
    geojsonPaths: [
      '/geojson/LeftBank/Medoc/Medoc_AOC.geojson',
      '/geojson/geology/Gravel.geojson',
      '/geojson/geology/Sand.geojson'
    ],
    showBordeaux: false,
    mapConfig: {
      center: [-0.77, 45.12],
      zoom: 10.8,
      pitch: 0,
      bearing: 0
    },
    quiz: {
      question: 'Médoc半島砂礫土壤的主要優勢是什麼？',
      options: ['保水性強', '養分豐富', '優異的排水與儲熱', '適合白葡萄生長'],
      correct: 2,
      explanation: 'Médoc的砂礫土壤以其卓越的排水能力和白天儲存熱量並在夜間釋放的能力而聞名，這為晚熟的Cabernet Sauvignon創造了理想的成熟條件。'
    }
  },
  // ========== 3. 氣候影響 =========
  // 3-1: 溫度調節圖表
  {
    title: '海洋與河流的溫度調節',
    highlights: [
      { id: 1, icon: '🌡️', title: '溫和氣候', content: '年均溫13.4°C，生長季18-21°C' },
      { id: 2, icon: '🌊', title: '海洋調節', content: '大西洋暖流維持穩定溫度，降低極端氣候風險' }
    ],
    type: 'chart',
    chartType: 'line',
    data: {
      labels: bordeauxClimateData.常態.月份.map(m => m.月),
      datasets: [
        {
          label: '每月平均氣溫',
          data: bordeauxClimateData.常態.月份.map(m => m.每月平均氣溫),
          borderColor: '#e53935',
          backgroundColor: 'rgba(229, 57, 53, 0.1)',
          tension: 0.4,
          fill: true,
          pointRadius: 5,
          pointHoverRadius: 7
        }
      ]
    },
    chartOptions: {
      leftAxisLabel: '溫度 (°C)',
      title: 'Médoc產區全年溫度變化（1991-2020常態）',
      showGrid: true
    },
    insights: [
      '🌡️ **年均溫度**：13.4°C，非常適合葡萄生長',
      '☀️ **生長季溫度**：4-10月平均15.3°C，7-8月最高達20.6-20.7°C',
      '❄️ **冬季溫和**：1-2月平均僅6-6.6°C，霜凍風險低',
      '🌊 **海洋調節效應**：大西洋暖流使氣溫波動小，避免極端高低溫',
      '🍇 **完美成熟條件**：夏季高溫利於Cabernet Sauvignon積累糖分與多酚'
    ],
    hasMap: false,
    quiz: {
      question: 'Médoc產區生長季（4-10月）的平均溫度範圍是多少？',
      options: ['10-15°C', '15-21°C', '22-28°C', '8-12°C'],
      correct: 1,
      explanation: 'Médoc產區在葡萄生長季（4-10月）的平均溫度約為15-21°C，這個溫度範圍非常適合Cabernet Sauvignon等晚熟品種的緩慢成熟，有助於發展複雜的風味和結構。'
    }
  },
  // 3-2: 降雨量圖表
  {
    title: '海洋與河流的降雨模式',
    highlights: [
      { id: 1, icon: '💧', title: '年降雨量', content: '年總降雨880mm，分布相對均勻' },
      { id: 2, icon: '☀️', title: '關鍵乾燥期', content: '7-8月降雨最少，利於葡萄成熟與濃縮' }
    ],
    type: 'chart',
    chartType: 'bar',
    data: {
      labels: bordeauxClimateData.常態.月份.map(m => m.月),
      datasets: [
        {
          label: '每月降雨量',
          data: bordeauxClimateData.常態.月份.map(m => m.每月降雨量),
          backgroundColor: '#42a5f5',
          borderColor: '#1e88e5',
          borderWidth: 1
        }
      ]
    },
    chartOptions: {
      rightAxisLabel: '降雨量 (mm)',
      title: 'Médoc產區全年降雨分布（1991-2020常態）',
      showGrid: true
    },
    insights: [
      '💧 **年總降雨量**：約880mm，屬於溫和濕潤的海洋性氣候',
      '🌧️ **秋冬多雨**：11月降雨最多（110mm），為土壤補充水分',
      '☀️ **夏季乾燥**：7月最少（50mm），有利於葡萄濃縮風味',
      '🌱 **春季適中**：3-5月降雨60-75mm，促進萌芽與新梢生長',
      '🍇 **採收季節**：9-10月降雨增加（70-95mm），需精準把握採收時機',
      '💡 **排水重要性**：砂礫土壤優異的排水性在多雨季節發揮關鍵作用'
    ],
    hasMap: false,
    quiz: {
      question: '哪個月份的降雨量最少，最利於葡萄成熟？',
      options: ['五月', '六月', '七月', '八月'],
      correct: 2,
      explanation: '七月是Médoc產區降雨最少的月份（約50mm），這正值葡萄轉色期和膨大期，相對乾燥的天氣有利於葡萄濃縮風味物質，避免稀釋和病害。'
    }
  },
  // 3-3: 氣候調節詳細說明
  {
    title: '海洋與河流的氣候調節',
    highlights: [
      { id: 1, icon: '🌊', title: '海洋性氣候', content: '大西洋暖流帶來溫和濕潤的氣候' },
      { id: 2, icon: '💨', title: '雙重調節', content: 'Gironde河與森林共同調節微氣候' }
    ],
    content: '<div class="medoc-geography"><p class="lead-text">得益於大西洋和Gironde河的雙重影響，Médoc擁有一個相對溫和穩定的氣候系統，有效降低了極端天氣的風險。</p><div class="geography-analysis"><div class="geo-section climate-influence"><h4>🌤️ 氣候環境與微氣候</h4><div class="climate-systems"><div class="macro-climate"><h5>🌍 宏觀氣候特徵</h5><div class="climate-factors"><div class="factor oceanic"><h6>海洋性氣候主導</h6><div class="climate-details"><p><strong>溫度調節：</strong>大西洋暖流維持溫和氣溫</p><ul><li>年均溫度：13-14°C</li><li>生長季溫度：18-22°C</li><li>霜凍風險：春季霜凍機率較低</li></ul></div></div><div class="factor precipitation"><h6>降雨模式</h6><div class="climate-details"><p><strong>年降雨量：</strong>800-900mm，分布較均勻</p><ul><li>春季降雨：促進萌芽與新梢生長</li><li>夏季乾燥：7-8月相對乾燥有利成熟</li></ul></div></div><div class="factor winds"><h6>風向與風力</h6><div class="climate-details"><p><strong>主導風向：</strong>西南風與西北風交替</p><ul><li>通風良好：減少真菌病害風險</li></ul></div></div></div></div><div class="micro-climate"><h5>🎯 微氣候差異分析</h5><div class="microclimate-variations"><div class="variation riverside"><h6>河岸地帶微氣候</h6><p><strong>特徵：</strong>溫度緩衝效應最明顯</p><div class="microclimate-effects"><ul><li><strong>溫度穩定：</strong>河水調節日夜溫差</li><li><strong>霜凍保護：</strong>水體熱容量大，防霜效果佳</li></ul></div></div><div class="variation inland"><h6>內陸高台微氣候</h6><p><strong>特徵：</strong>排水極佳，日照充足</p><div class="microclimate-effects"><ul><li><strong>升溫快速：</strong>砂礫土快速吸收熱能</li><li><strong>香氣濃縮：</strong>適度水分應力增強風味</li></ul></div></div><div class="variation forest-edge"><h6>林緣地帶微氣候</h6><p><strong>特徵：</strong>受森林保護，微環境穩定</p><div class="microclimate-effects"><ul><li><strong>風力緩解：</strong>森林屏障減少強風</li><li><strong>生態平衡：</strong>天敵昆蟲控制害蟲</li></ul></div></div></div></div></div></div></div></div>',
    quiz: {
      question: 'Gironde河對Médoc的微氣候有何重要影響？',
      options: ['增加降雨量', '提供霜凍保護', '導致氣溫劇烈變化', '沒有影響'],
      correct: 1,
      explanation: 'Gironde河巨大的水體具有熱容量，能夠在春季夜晚釋放熱量，有效保護鄰近的葡萄園免受霜凍的危害。'
    }
  },

  // ========== 第二章：1855分級制度 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '1855分級制度',
    subtitle: '歷史、清單與列級酒莊',
    icon: '📜',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  // ========== 4. 1855分級制度歷史 =========
  {
    title: '1855年分級制度的誕生',
    highlights: [
      { id: 1, icon: '📜', title: '歷史契機', content: '為1855年巴黎世界博覽會而創立' },
      { id: 2, icon: '💰', title: '分級依據', content: '主要基於酒款長期的市場價格與聲譽' }
    ],
    content: '<div class="classification-system"><p class="lead-text">1855年分級制度是波爾多葡萄酒品質認證的黃金標準，它並非由品酒專家評定，而是市場無形之手的傑作，至今仍是全球最權威的酒莊分級系統之一。</p><div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L2-1/02%201855分級制度概覽.svg" alt="1855分級制度概覽" style="max-width: 100%; height: auto; border-radius: 8px;" /></div><div class="classification-analysis"><div class="classification-section history"><h4>📜 1855年分級制度的歷史背景</h4><div class="historical-context"><div class="context-card origin"><h5>🎯 分級起源與目的</h5><div class="origin-details"><div class="background-story"><h6>歷史契機</h6><p>1855年巴黎世界博覽會，拿破崙三世要求波爾多商會為參展酒款建立品質分級，以展現法國葡萄酒的卓越品質。</p></div><div class="selection-criteria"><h6>分級標準</h6><p><strong>主要依據：</strong>酒款市場價格與聲譽</p><ul><li><strong>價格水準：</strong>長期市場表現反映品質</li><li><strong>歷史聲譽：</strong>酒莊數百年來的聲望</li><li><strong>風土條件：</strong>葡萄園的地理位置與土壤</li></ul></div><div class="geographic-scope"><h6>涵蓋範圍</h6><p>主要針對Médoc產區的紅酒酒莊，以及Sauternes和Barsac的甜酒酒莊。</p></div></div></div><div class="context-card significance"><h5>⚖️ 分級制度的重要意義</h5><div class="significance-aspects"><div class="aspect quality"><h6>品質保證</h6><p>建立了客觀的品質評估標準，為消費者提供可靠的選酒指南。</p></div><div class="aspect market"><h6>市場秩序</h6><p>規範了葡萄酒市場的價格體系，形成了穩定的品質—價格對應關係。</p></div><div class="aspect heritage"><h6>文化傳承</h6><p>保護和傳承了波爾多葡萄酒的釀造傳統與文化價值。</p></div></div></div></div></div><div class="classification-section modern-relevance"><h4>🔄 現代意義與市場影響</h4><div class="modern-impact"><div class="impact-area market-pricing"><h5>💰 市場定價影響</h5><p>分級制度至今仍是Médoc葡萄酒定價的核心參考。級別越高，通常價格越昂貴。</p></div><div class="impact-area investment"><h5>📈 投資收藏價值</h5><p>分級酒莊，尤其是一、二級，因其稀缺性和全球認知度，成為葡萄酒投資市場的硬通貨。</p></div><div class="impact-area quality-evolution"><h5>📊 品質演變趨勢</h5><p>儘管分級近170年未變，但許多酒莊的品質已遠超其原始級別，形成了"超二級"、"超三級"等概念。</p></div></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: '1855年分級制度的主要分級依據是什麼？',
      options: ['專家盲品分數', '產量大小', '酒莊的歷史長度', '市場價格與聲譽'],
      correct: 3,
      explanation: '1855年分級制度並非基於品鑑，而是根據當時酒莊葡萄酒在市場上的長期售價和聲譽來劃分，這反映了市場對其品質的認可。'
    }
  },
  // ========== 4-1. 1855分級完整清單 =========
  {
    title: '1855年分級制度完整清單',
    highlights: [
      { id: 1, icon: '📋', title: '61家列級莊', content: '一級5家、二級14家、三級14家、四級10家、五級18家' },
      { id: 2, icon: '🏆', title: '互動式查閱', content: '點擊級別標題展開/收起酒莊詳細資訊' },
      { id: 3, icon: '💎', title: '價格參考', content: '各級別典型市場價格區間（以正牌酒為準）' }
    ],
    content: `<div class="classification-list-container">
      <p class="lead-text">1855年分級制度共包含61家Médoc列級酒莊（紅酒），按品質與價格劃分為五個等級。點擊各級別可展開查看完整酒莊清單。</p>
      
      <div class="classification-summary-stats">
        <div class="stat-card">
          <div class="stat-number">61</div>
          <div class="stat-label">列級酒莊總數</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">170+</div>
          <div class="stat-label">年未變的體系</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">1</div>
          <div class="stat-label">唯一晉升案例</div>
          <div class="stat-note">Mouton 1973年</div>
        </div>
      </div>

      <!-- 一級酒莊 Premier Cru -->
      <div class="classification-tier tier-1" data-tier="1">
        <div class="tier-header" onclick="this.parentElement.classList.toggle('expanded')">
          <div class="tier-title">
            <span class="tier-icon">👑</span>
            <span class="tier-name">一級酒莊 Premiers Crus</span>
            <span class="tier-count">5 家</span>
          </div>
          <div class="tier-price">€ 500-3000+</div>
          <div class="expand-icon">▼</div>
        </div>
        <div class="tier-content">
          <div class="chateau-grid">
            <div class="chateau-card premier">
              <div class="chateau-name">Château Lafite Rothschild</div>
              <div class="chateau-location">📍 Pauillac</div>
              <div class="chateau-details">
                <p><strong>風格：</strong>優雅精緻，單寧絲滑，陳年潛力50年+</p>
                <p><strong>品種：</strong>Cabernet Sauvignon 70-95%, Merlot 5-25%</p>
                <p><strong>特色：</strong>被譽為"葡萄酒之王"，世界最昂貴的酒莊之一</p>
              </div>
            </div>
            <div class="chateau-card premier">
              <div class="chateau-name">Château Latour</div>
              <div class="chateau-location">📍 Pauillac</div>
              <div class="chateau-details">
                <p><strong>風格：</strong>強勁有力，結構宏大，陳年能力極強</p>
                <p><strong>品種：</strong>Cabernet Sauvignon 80%, Merlot 18%</p>
                <p><strong>特色：</strong>品質最穩定的一級莊，即使弱年份也表現卓越</p>
              </div>
            </div>
            <div class="chateau-card premier">
              <div class="chateau-name">Château Margaux</div>
              <div class="chateau-location">📍 Margaux</div>
              <div class="chateau-details">
                <p><strong>風格：</strong>優雅柔美，香氣複雜，如天鵝絨般柔順</p>
                <p><strong>品種：</strong>Cabernet Sauvignon 75%, Merlot 20%</p>
                <p><strong>特色：</strong>五大酒莊中唯一的Margaux產區代表，最具女性魅力</p>
              </div>
            </div>
            <div class="chateau-card premier">
              <div class="chateau-name">Château Haut-Brion</div>
              <div class="chateau-location">📍 Pessac-Léognan (Graves)</div>
              <div class="chateau-details">
                <p><strong>風格：</strong>煙燻感明顯，優雅複雜，早熟易飲</p>
                <p><strong>品種：</strong>Merlot 50%, Cabernet Sauvignon 40%</p>
                <p><strong>特色：</strong>唯一位於Graves產區的一級莊，煙燻礦物風格獨特</p>
              </div>
            </div>
            <div class="chateau-card premier special">
              <div class="chateau-name">Château Mouton Rothschild</div>
              <div class="chateau-location">📍 Pauillac</div>
              <div class="chateau-details">
                <p><strong>風格：</strong>濃郁飽滿，黑醋栗與雪松香氣突出</p>
                <p><strong>品種：</strong>Cabernet Sauvignon 80-90%, Merlot 10-15%</p>
                <p><strong>特色：</strong>1973年從二級晉升，唯一改變級別的酒莊</p>
                <p class="special-note">⭐ 酒標每年由不同藝術家設計，極具收藏價值</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 二級酒莊 Deuxièmes Crus -->
      <div class="classification-tier tier-2" data-tier="2">
        <div class="tier-header" onclick="this.parentElement.classList.toggle('expanded')">
          <div class="tier-title">
            <span class="tier-icon">🥈</span>
            <span class="tier-name">二級酒莊 Deuxièmes Crus</span>
            <span class="tier-count">14 家</span>
          </div>
          <div class="tier-price">€ 150-500</div>
          <div class="expand-icon">▼</div>
        </div>
        <div class="tier-content">
          <p class="tier-intro">二級酒莊品質極高，部分"超二級"酒莊（Super Seconds）的品質已接近甚至超越部分一級莊，是性價比最高的頂級選擇。</p>
          <div class="chateau-list">
            <div class="chateau-row super-second">
              <div class="chateau-name">Château Léoville Las Cases</div>
              <div class="chateau-location">Saint-Julien</div>
              <div class="chateau-note">⭐ 超二級代表，品質接近一級</div>
            </div>
            <div class="chateau-row super-second">
              <div class="chateau-name">Château Pichon Longueville Comtesse de Lalande</div>
              <div class="chateau-location">Pauillac</div>
              <div class="chateau-note">⭐ 超二級，優雅柔美風格</div>
            </div>
            <div class="chateau-row super-second">
              <div class="chateau-name">Château Cos d'Estournel</div>
              <div class="chateau-location">Saint-Estèphe</div>
              <div class="chateau-note">⭐ 超二級，異國風情建築</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Montrose</div>
              <div class="chateau-location">Saint-Estèphe</div>
              <div class="chateau-note">強勁有力，近年品質飆升</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Pichon Longueville Baron</div>
              <div class="chateau-location">Pauillac</div>
              <div class="chateau-note">Pichon雙雄之一，陽剛風格</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Léoville Poyferré</div>
              <div class="chateau-location">Saint-Julien</div>
              <div class="chateau-note">Léoville三雄之一，平衡優雅</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Léoville Barton</div>
              <div class="chateau-location">Saint-Julien</div>
              <div class="chateau-note">Léoville三雄之一，傳統風格</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Ducru-Beaucaillou</div>
              <div class="chateau-location">Saint-Julien</div>
              <div class="chateau-note">砂礫土壤代表，優雅細膩</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Gruaud Larose</div>
              <div class="chateau-location">Saint-Julien</div>
              <div class="chateau-note">酒體飽滿，性價比高</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Brane-Cantenac</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">典型Margaux優雅風格</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Rauzan-Ségla</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">香奈兒集團擁有，品質提升</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Rauzan-Gassies</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">與Rauzan-Ségla同源</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Durfort-Vivens</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">有機種植先驅</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Lascombes</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">規模大，品質穩定</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 三級酒莊 Troisièmes Crus -->
      <div class="classification-tier tier-3" data-tier="3">
        <div class="tier-header" onclick="this.parentElement.classList.toggle('expanded')">
          <div class="tier-title">
            <span class="tier-icon">🥉</span>
            <span class="tier-name">三級酒莊 Troisièmes Crus</span>
            <span class="tier-count">14 家</span>
          </div>
          <div class="tier-price">€ 80-200</div>
          <div class="expand-icon">▼</div>
        </div>
        <div class="tier-content">
          <p class="tier-intro">三級酒莊中Margaux產區佔10家，部分酒莊（如Palmer）品質已達二級甚至接近一級水準，提供極佳的品質價格比。</p>
          <div class="chateau-list">
            <div class="chateau-row super-third">
              <div class="chateau-name">Château Palmer</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">⭐⭐ 超三級明星，品質接近一級</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château d'Issan</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">城堡建築優美，優雅細膩</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Kirwan</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">愛爾蘭裔莊主歷史</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Malescot Saint-Exupéry</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">與《小王子》作者同姓</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Cantenac Brown</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">英式城堡風格建築</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Boyd-Cantenac</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">小而精的精品酒莊</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Giscours</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">規模大，品質穩定提升</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Ferrière</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">面積最小的列級莊之一</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Desmirail</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">歷史悠久，傳統風格</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Marquis d'Alesme</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">小型精品酒莊</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Lagrange</div>
              <div class="chateau-location">Saint-Julien</div>
              <div class="chateau-note">日本三得利集團擁有，品質大幅提升</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Langoa Barton</div>
              <div class="chateau-location">Saint-Julien</div>
              <div class="chateau-note">Barton家族世代經營，性價比高</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château La Lagune</div>
              <div class="chateau-location">Haut-Médoc</div>
              <div class="chateau-note">靠近波爾多市，現代化管理</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Calon-Ségur</div>
              <div class="chateau-location">Saint-Estèphe</div>
              <div class="chateau-note">心形酒標，情人節熱門</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 四級酒莊 Quatrièmes Crus -->
      <div class="classification-tier tier-4" data-tier="4">
        <div class="tier-header" onclick="this.parentElement.classList.toggle('expanded')">
          <div class="tier-title">
            <span class="tier-icon">🏅</span>
            <span class="tier-name">四級酒莊 Quatrièmes Crus</span>
            <span class="tier-count">10 家</span>
          </div>
          <div class="tier-price">€ 50-120</div>
          <div class="expand-icon">▼</div>
        </div>
        <div class="tier-content">
          <p class="tier-intro">四級酒莊是體驗列級莊品質的親民入口，性價比極高，適合日常品飲和初識波爾多名莊。</p>
          <div class="chateau-list">
            <div class="chateau-row popular">
              <div class="chateau-name">Château Beychevelle</div>
              <div class="chateau-location">Saint-Julien</div>
              <div class="chateau-note">🚢 "龍船"酒莊，酒標精美，亞洲市場熱門</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Talbot</div>
              <div class="chateau-location">Saint-Julien</div>
              <div class="chateau-note">以英國將軍命名，酒體飽滿</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Branaire-Ducru</div>
              <div class="chateau-location">Saint-Julien</div>
              <div class="chateau-note">優雅平衡，近年品質提升</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Saint-Pierre</div>
              <div class="chateau-location">Saint-Julien</div>
              <div class="chateau-note">小型酒莊，品質穩定</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Duhart-Milon</div>
              <div class="chateau-location">Pauillac</div>
              <div class="chateau-note">Lafite Rothschild姊妹莊</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Pouget</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">小型家族酒莊</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Prieuré-Lichine</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">修道院歷史，葡萄園分散</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Marquis de Terme</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">傳統風格，家族經營</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Lafon-Rochet</div>
              <div class="chateau-location">Saint-Estèphe</div>
              <div class="chateau-note">黃色城堡建築獨特</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château La Tour Carnet</div>
              <div class="chateau-location">Haut-Médoc</div>
              <div class="chateau-note">中世紀塔樓，歷史悠久</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 五級酒莊 Cinquièmes Crus -->
      <div class="classification-tier tier-5" data-tier="5">
        <div class="tier-header" onclick="this.parentElement.classList.toggle('expanded')">
          <div class="tier-title">
            <span class="tier-icon">🎖️</span>
            <span class="tier-name">五級酒莊 Cinquièmes Crus</span>
            <span class="tier-count">18 家</span>
          </div>
          <div class="tier-price">€ 30-100</div>
          <div class="expand-icon">▼</div>
        </div>
        <div class="tier-content">
          <p class="tier-intro">五級酒莊數量最多（18家），其中Pauillac佔12家。部分"超五級"酒莊品質已達三級甚至二級水準，是最具性價比的選擇。</p>
          <div class="chateau-list">
            <div class="chateau-row super-fifth">
              <div class="chateau-name">Château Lynch-Bages</div>
              <div class="chateau-location">Pauillac</div>
              <div class="chateau-note">⭐⭐ 超五級代表，"窮人的Mouton"，品質接近二級</div>
            </div>
            <div class="chateau-row super-fifth">
              <div class="chateau-name">Château Pontet-Canet</div>
              <div class="chateau-location">Pauillac</div>
              <div class="chateau-note">⭐⭐ 超五級，生物動力法種植先驅</div>
            </div>
            <div class="chateau-row super-fifth">
              <div class="chateau-name">Château Grand-Puy-Lacoste</div>
              <div class="chateau-location">Pauillac</div>
              <div class="chateau-note">⭐ 超五級，品質穩定優異</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Batailley</div>
              <div class="chateau-location">Pauillac</div>
              <div class="chateau-note">性價比極高，傳統風格</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Haut-Batailley</div>
              <div class="chateau-location">Pauillac</div>
              <div class="chateau-note">從Batailley分出，優雅細膩</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Grand-Puy-Ducasse</div>
              <div class="chateau-location">Pauillac</div>
              <div class="chateau-note">葡萄園分散，品質穩定</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Clerc Milon</div>
              <div class="chateau-location">Pauillac</div>
              <div class="chateau-note">Mouton Rothschild姊妹莊</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château d'Armailhac</div>
              <div class="chateau-location">Pauillac</div>
              <div class="chateau-note">Mouton Rothschild姊妹莊，原名Mouton Baronne Philippe</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Croizet-Bages</div>
              <div class="chateau-location">Pauillac</div>
              <div class="chateau-note">小型家族酒莊</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Lynch-Moussas</div>
              <div class="chateau-location">Pauillac</div>
              <div class="chateau-note">與Lynch-Bages同源</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Pédesclaux</div>
              <div class="chateau-location">Pauillac</div>
              <div class="chateau-note">近年大幅投資改善</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Haut-Bages Libéral</div>
              <div class="chateau-location">Pauillac</div>
              <div class="chateau-note">Claire Villars家族管理</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Cos Labory</div>
              <div class="chateau-location">Saint-Estèphe</div>
              <div class="chateau-note">與Cos d'Estournel為鄰</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Dauzac</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">環保種植，品質提升</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château du Tertre</div>
              <div class="chateau-location">Margaux</div>
              <div class="chateau-note">位於高台，排水優異</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Belgrave</div>
              <div class="chateau-location">Haut-Médoc</div>
              <div class="chateau-note">CVBG集團管理，穩定品質</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château de Camensac</div>
              <div class="chateau-location">Haut-Médoc</div>
              <div class="chateau-note">內陸位置，品質提升</div>
            </div>
            <div class="chateau-row">
              <div class="chateau-name">Château Cantemerle</div>
              <div class="chateau-location">Haut-Médoc</div>
              <div class="chateau-note">最後加入1855分級，優雅柔美</div>
            </div>
          </div>
        </div>
      </div>

      <div class="classification-footer">
        <h4>💡 選購建議</h4>
        <div class="buying-tips">
          <div class="tip-card">
            <h5>🎯 預算分配</h5>
            <p><strong>入門體驗：</strong>五級酒莊（€30-50），品質穩定</p>
            <p><strong>進階探索：</strong>三、四級酒莊（€60-120），性價比最高</p>
            <p><strong>頂級享受：</strong>二級及超級酒莊（€150+），特殊場合</p>
            <p><strong>收藏投資：</strong>一級酒莊（€500+），好年份首選</p>
          </div>
          <div class="tip-card">
            <h5>📅 年份選擇</h5>
            <p><strong>偉大年份：</strong>2005, 2009, 2010, 2015, 2016, 2019, 2020</p>
            <p><strong>優秀年份：</strong>2018, 2014, 2012, 2008, 2006</p>
            <p><strong>性價比年份：</strong>2017, 2013, 2011（價格較低但品質不錯）</p>
          </div>
          <div class="tip-card">
            <h5>🍷 品飲建議</h5>
            <p><strong>年輕酒款（<10年）：</strong>需醒酒2-4小時</p>
            <p><strong>成熟酒款（10-20年）：</strong>醒酒1-2小時</p>
            <p><strong>老年份（>20年）：</strong>謹慎醒酒，避免過度氧化</p>
          </div>
        </div>
      </div>

      <style>
        .classification-list-container {
          max-width: 100%;
          padding: 20px;
        }
        
        .classification-summary-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 16px;
          margin: 24px 0 32px 0;
        }
        
        .stat-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 20px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .stat-number {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        
        .stat-label {
          font-size: 13px;
          opacity: 0.9;
        }
        
        .stat-note {
          font-size: 11px;
          margin-top: 4px;
          opacity: 0.8;
        }
        
        .classification-tier {
          margin: 16px 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        
        .tier-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          user-select: none;
        }
        
        .tier-header:hover {
          filter: brightness(1.05);
        }
        
        .tier-1 .tier-header {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: #1a1a1a;
        }
        
        .tier-2 .tier-header {
          background: linear-gradient(135deg, #C0C0C0 0%, #A8A8A8 100%);
          color: #1a1a1a;
        }
        
        .tier-3 .tier-header {
          background: linear-gradient(135deg, #CD7F32 0%, #B8860B 100%);
          color: white;
        }
        
        .tier-4 .tier-header {
          background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
          color: white;
        }
        
        .tier-5 .tier-header {
          background: linear-gradient(135deg, #50C878 0%, #3CB371 100%);
          color: white;
        }
        
        .tier-title {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }
        
        .tier-icon {
          font-size: 24px;
        }
        
        .tier-name {
          font-size: 18px;
          font-weight: bold;
        }
        
        .tier-count {
          font-size: 14px;
          opacity: 0.8;
          background: rgba(0,0,0,0.2);
          padding: 4px 12px;
          border-radius: 12px;
        }
        
        .tier-price {
          font-size: 15px;
          font-weight: 600;
          margin: 0 16px;
        }
        
        .expand-icon {
          font-size: 16px;
          transition: transform 0.3s ease;
        }
        
        .classification-tier.expanded .expand-icon {
          transform: rotate(180deg);
        }
        
        .tier-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease;
          background: white;
        }
        
        .classification-tier.expanded .tier-content {
          max-height: 10000px;
          padding: 24px;
        }
        
        .tier-intro {
          background: #f5f5f5;
          padding: 16px;
          border-radius: 8px;
          margin-bottom: 20px;
          font-size: 14px;
          line-height: 1.6;
        }
        
        .chateau-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 16px;
        }
        
        .chateau-card {
          background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%);
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          padding: 20px;
          transition: all 0.3s ease;
        }
        
        .chateau-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }
        
        .chateau-card.premier {
          border-color: #FFD700;
          background: linear-gradient(135deg, #FFF9E6 0%, #FFFBF0 100%);
        }
        
        .chateau-card.special {
          border: 3px solid #FFD700;
          background: linear-gradient(135deg, #FFF4CC 0%, #FFF8E1 100%);
        }
        
        .chateau-card .chateau-name {
          font-size: 16px;
          font-weight: bold;
          color: #1a1a1a;
          margin-bottom: 8px;
        }
        
        .chateau-card .chateau-location {
          font-size: 13px;
          color: #666;
          margin-bottom: 12px;
        }
        
        .chateau-card .chateau-details {
          font-size: 13px;
          line-height: 1.6;
        }
        
        .chateau-card .chateau-details p {
          margin: 6px 0;
        }
        
        .special-note {
          background: #FFE5B4;
          padding: 8px 12px;
          border-radius: 6px;
          margin-top: 12px;
          font-size: 12px;
          border-left: 3px solid #FFD700;
        }
        
        .chateau-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .chateau-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: #f9f9f9;
          border-radius: 8px;
          border-left: 4px solid #ddd;
          transition: all 0.2s ease;
        }
        
        .chateau-row:hover {
          background: #f0f0f0;
          transform: translateX(4px);
        }
        
        .chateau-row.super-second {
          background: linear-gradient(135deg, #E8E8E8 0%, #F5F5F5 100%);
          border-left: 4px solid #C0C0C0;
        }
        
        .chateau-row.super-third {
          background: linear-gradient(135deg, #F4E4D4 0%, #FAF0E6 100%);
          border-left: 4px solid #CD7F32;
        }
        
        .chateau-row.super-fifth {
          background: linear-gradient(135deg, #E8F5E9 0%, #F1F8F4 100%);
          border-left: 4px solid #50C878;
        }
        
        .chateau-row.popular {
          background: linear-gradient(135deg, #E3F2FD 0%, #F0F8FF 100%);
          border-left: 4px solid #4A90E2;
        }
        
        .chateau-row .chateau-name {
          font-weight: 600;
          color: #1a1a1a;
          flex: 0 0 40%;
          font-size: 14px;
        }
        
        .chateau-row .chateau-location {
          color: #666;
          flex: 0 0 20%;
          font-size: 13px;
        }
        
        .chateau-row .chateau-note {
          color: #555;
          flex: 1;
          font-size: 12px;
          text-align: right;
        }
        
        .classification-footer {
          margin-top: 32px;
          padding: 24px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 12px;
        }
        
        .classification-footer h4 {
          margin: 0 0 20px 0;
          color: #333;
        }
        
        .buying-tips {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }
        
        .tip-card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #667eea;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        }
        
        .tip-card h5 {
          margin: 0 0 12px 0;
          color: #667eea;
          font-size: 15px;
        }
        
        .tip-card p {
          margin: 6px 0;
          font-size: 13px;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .tier-title {
            flex-wrap: wrap;
          }
          
          .tier-price {
            margin: 0 8px;
            font-size: 13px;
          }
          
          .chateau-grid {
            grid-template-columns: 1fr;
          }
          
          .chateau-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
          
          .chateau-row .chateau-name,
          .chateau-row .chateau-location,
          .chateau-row .chateau-note {
            flex: none;
            text-align: left;
          }
        }
      </style>
    </div>`,
    hasMap: false,
    quiz: {
      question: '1855年分級制度中，哪個產區的三級酒莊數量最多？',
      options: ['Pauillac', 'Saint-Julien', 'Margaux', 'Saint-Estèphe'],
      correct: 2,
      explanation: 'Margaux產區在三級酒莊中佔有10家（共14家），是三級酒莊最集中的產區，這也反映了Margaux產區優雅細膩的風格特徵。'
    }
  },
  // ========== 5. 一級酒莊 =========
  {
    type: 'custom',
    component: 'FirstGrowthsMap',
    title: '金字塔頂端：五大一級酒莊',
    highlights: [
      { id: 1, icon: '👑', title: '五大酒莊', content: 'Lafite, Latour, Margaux, Haut-Brion, Mouton' },
      { id: 2, icon: '🏆', title: '品質巔峰', content: '代表波爾多乃至全世界葡萄酒的最高水準' },
      { id: 3, icon: '📍', title: '地理分布', content: '3家位於Pauillac，1家Margaux，1家Pessac-Léognan' },
      { id: 4, icon: '🎨', title: '獨特風格', content: '每家酒莊都有獨一無二的風土與釀造風格' }
    ]
  },
  // ========== 5-1. 一級酒莊測驗 =========
  {
    title: '知識檢測：一級酒莊',
    highlights: [
      { id: 1, icon: '🎯', title: '測驗重點', content: '測試您對五大一級酒莊的了解程度' }
    ],
    content: '<div class="quiz-intro"><p class="lead-text">讓我們來測試一下您對五大一級酒莊的了解程度！</p></div>',
    hasMap: false,
    quiz: {
      question: '哪家一級酒莊是在1973年從二級晉升的？',
      options: ['Château Lafite Rothschild', 'Château Haut-Brion', 'Château Mouton Rothschild', 'Château Margaux'],
      correct: 2,
      explanation: 'Château Mouton Rothschild是唯一一家在1855年之後獲得晉升的酒莊，在莊主菲利普男爵長達數十年的努力下，於1973年成功從二級晉升為一級。'
    }
  },
  // ========== 6. 其他級別酒莊 =========
  {
    type: 'custom',
    component: 'MedocInteractiveMap',
    title: '列級莊的中堅力量',
    highlights: [
      { id: 1, icon: '🥈', title: '二級酒莊（14家）', content: '品質極高，常被譽為"超二級"，代表：Léoville Las Cases、Pichon Lalande、Cos d\'Estournel' },
      { id: 2, icon: '🥉', title: '三級酒莊（14家）', content: 'Margaux產區佔10家，包括Palmer（接近一級品質）、d\'Issan等優質酒莊' },
      { id: 3, icon: '🏅', title: '四級酒莊（10家）', content: '體驗列級莊的親民入口，如Beychevelle（龍船）、Talbot等性價比之選' },
      { id: 4, icon: '🎖️', title: '五級酒莊（18家）', content: '超五級代表：Lynch-Bages、Pontet-Canet、Grand-Puy-Lacoste，Pauillac佔12家' },
      { id: 5, icon: '�', title: '價格區間', content: '二級150-500€ | 三級80-200€ | 四級50-120€ | 五級30-100€' },
      { id: 6, icon: '🗺️', title: '互動地圖', content: '點擊標記查看61家列級酒莊詳細資訊。金色=一級 銀色=二級 銅色=三級 藍色=四級 綠色=五級' }
    ]
  },
  // ========== 6-1. 其他級別酒莊測驗 =========
  {
    title: '知識檢測：列級酒莊',
    highlights: [
      { id: 1, icon: '🎯', title: '測驗重點', content: '測試您對Médoc列級酒莊的了解' }
    ],
    content: '<div class="quiz-intro"><p class="lead-text">讓我們來測試一下您對Médoc列級酒莊的了解程度！</p></div>',
    hasMap: false,
    quiz: {
      question: '被譽為"龍船"的酒莊是哪個級別的？',
      options: ['二級酒莊', '三級酒莊', '四級酒莊', '五級酒莊'],
      correct: 2,
      explanation: 'Château Beychevelle是一家著名的四級酒莊，其酒標上的帆船圖案使其獲得了"龍船"的暱稱，在亞洲市場尤其受歡迎。'
    }
  },

  // ========== 第三章：酒莊與釀造 ==========
  {
    type: 'chapter-divider',
    chapter: '3',
    title: '酒莊與釀造',
    subtitle: '調配、釀造與風格特徵',
    icon: '🍷',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  // ========== 7. 品種與調配 =========
  {
    title: 'Médoc的調配藝術',
    highlights: [
      { id: 1, icon: '🍇', title: '品種之王', content: 'Cabernet Sauvignon提供結構與陳年潛力' },
      { id: 2, icon: '🎨', title: '調配哲學', content: '多品種混釀以達到完美平衡與複雜度' }
    ],
    content: '<div class="medoc-winemaking"><p class="lead-text">Médoc的偉大之處在於其調配的藝術——將不同葡萄品種的優點融合在一起，創造出比單一品種更複雜、更和諧的傑作。</p><div class="winemaking-analysis"><div class="winemaking-section grape-varieties"><h4>🍇 葡萄品種組合與調配哲學</h4><div class="varietal-composition"><div class="blend-philosophy"><h5>🎯 Médoc調配傳統</h5><div class="blending-approach"><div class="blend-card primary"><h6>主導品種策略</h6><div class="primary-varieties"><div class="variety cabernet-sauvignon"><h7>Cabernet Sauvignon (50-70%)</h7><div class="variety-role"><p><strong>核心作用：</strong>提供結構、單寧與陳年潛力</p><ul><li><strong>香氣特徵：</strong>黑醋栗、雪松、鉛筆芯</li><li><strong>口感貢獻：</strong>強勁單寧，厚實酒體</li></ul></div></div><div class="variety merlot"><h7>Merlot (20-40%)</h7><div class="variety-role"><p><strong>調和功能：</strong>增加柔順度與果香</p><ul><li><strong>香氣特徵：</strong>櫻桃、李子、巧克力</li><li><strong>口感貢獻：</strong>圓潤口感，柔化單寧</li></ul></div></div></div></div><div class="blend-card supporting"><h6>輔助品種角色</h6><div class="supporting-varieties"><div class="variety cabernet-franc"><h7>Cabernet Franc (5-15%)</h7><div class="variety-contribution"><p><strong>特殊貢獻：</strong>增加香氣的複雜度（紫羅蘭、香料）</p></div></div><div class="variety petit-verdot"><h7>Petit Verdot (0-5%)</h7><div class="variety-contribution"><p><strong>精準調味：</strong>提供顏色、單寧和香料風味</p></div></div></div></div></div></div><div class="vintage-variations"><h5>📊 年份調配變化</h5><p>釀酒師會根據每個年份不同品種的成熟狀況，靈活調整最終的調配比例，以求達到該年份下的最佳平衡。這正是波爾多調配的精髓所在。</p></div></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: '在Médoc調配中，Merlot扮演的主要角色是什麼？',
      options: ['提供主要結構', '增加酸度', '柔化單寧並提供圓潤口感', '增加陳年潛力'],
      correct: 2,
      explanation: 'Merlot在以Cabernet Sauvignon為主導的Médoc調配中，主要起到"柔順劑"的作用，它圓潤的口感和柔和的單寧可以平衡Cabernet Sauvignon的強勁結構。'
    }
  },
  // ========== 8. 釀造工藝 =========
  {
    title: '從葡萄到美酒：釀造工藝',
    highlights: [
      { id: 1, icon: '🔍', title: '嚴格篩選', content: '多重篩選確保只用最優質的葡萄' },
      { id: 2, icon: '🏺', title: '橡木桶陳年', content: '在法國橡木桶中培養複雜度與結構' }
    ],
    content: '<div class="medoc-winemaking"><p class="lead-text">Médoc的釀酒工藝是傳統與現代科技的結晶。從精細的採收到漫長的桶中陳年，每一步都為了最終的品質服務。</p><div class="winemaking-analysis"><div class="winemaking-section vinification"><h4>🏭 釀造工藝流程</h4><div class="production-process"><div class="process-stage harvest"><h5>🍇 採收與篩選</h5><div class="harvest-practices"><div class="selection-process"><h6>嚴格篩選制度</h6><p>頂級酒莊通常會進行多次篩選：在葡萄園採收時初選，回到酒莊後在篩選台上進行人工或光學精選，確保每一顆進入發酵罐的葡萄都處於完美狀態。</p></div></div></div><div class="process-stage fermentation"><h5>🧪 發酵控制技術</h5><div class="fermentation-management"><div class="temperature-control"><h6>溫度控制發酵</h6><p>酒精發酵在溫控不銹鋼罐或木桶中進行，精確控制溫度以萃取理想的顏色、香氣和單寧。</p></div><div class="extraction-techniques"><h6>萃取技術運用</h6><p>通過淋皮 (Pumping Over) 和壓帽 (Punching Down) 等技術，溫和地萃取果皮中的精華物質。</p></div></div></div><div class="process-stage aging"><h5>🏺 橡木桶陳年工藝</h5><div class="barrel-aging"><div class="barrel-selection"><h6>橡木桶選擇</h6><p>通常使用225升的法國橡木桶。一級酒莊會使用100%的新橡木桶，而其他級別則根據年份和期望風格調整新桶比例。</p></div><div class="aging-program"><h6>陳年計劃</h6><p>酒液會在橡木桶中陳年12至24個月，期間會進行蘋果酸-乳酸發酵，並定期進行換桶以澄清酒液。這個過程賦予了葡萄酒烘烤、香草、雪松等複雜香氣，並柔化了單寧。</p></div></div></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: 'Médoc頂級酒莊在陳年過程中通常使用什麼比例的新橡木桶？',
      options: ['25%', '50%', '75%', '100%'],
      correct: 3,
      explanation: '為了賦予葡萄酒最強勁的結構和最複雜的風味，一級酒莊和許多頂級的二級酒莊在好年份通常會使用100%的全新法國橡木桶來陳釀它們的正牌酒。'
    }
  },
  // ========== 9. 風格與陳年 =========
  {
    title: 'Médoc風格與陳年潛力',
    highlights: [
      { id: 1, icon: '🍷', title: '典型風格', content: '結構宏大、單寧緊實、風味複雜' },
      { id: 2, icon: '⏳', title: '陳年潛力', content: '世界頂級的陳年能力，可發展數十年' }
    ],
    content: '<div class="medoc-winemaking"><p class="lead-text">Médoc紅酒以其無與倫比的陳年潛力而聞名於世。一款偉大的Médoc酒如同一部交響樂，需要時間來展開其所有的層次與複雜度。</p><div class="winemaking-analysis"><div class="winemaking-section style-characteristics"><h4>🎯 Médoc風格特徵分析</h4><div class="style-profile"><div class="sensory-analysis"><h5>👃 感官特徵描述</h5><div class="sensory-aspects"><div class="aspect visual"><h6>視覺</h6><p>年輕時為深邃的紫紅色，陳年後轉為石榴紅甚至磚紅色。</p></div><div class="aspect aroma"><h6>香氣</h6><p>年輕時以黑醋栗、黑莓等黑色水果為主，伴有橡木桶帶來的雪松、香草氣息。陳年後會發展出皮革、煙草、雪茄盒、森林地表等極為複雜的第三層香氣。</p></div><div class="aspect palate"><h6>口感</h6><p>酒體飽滿，結構宏大。年輕時單寧強勁緊實，酸度清晰。經過陳年，單寧會變得如天鵝絨般絲滑，口感圓潤和諧，餘韻悠長。</p></div></div></div><div class="aging-potential"><h5>📈 陳年潛力評估</h5><div class="aging-analysis"><div class="aging-phases"><div class="phase youth"><h6>年輕期 (0-5年)</h6><p>果香充沛，但單寧非常強勁，難以入口，需要長時間醒酒。</p></div><div class="phase maturity"><h6>發展期 (5-15年)</h6><p>果香與陳年香氣開始融合，單寧逐漸柔化，進入適飲期。</p></div><div class="phase peak"><h6>巔峰期 (15-40年+)</h6><p>達到完美平衡，展現出驚人的複雜度和層次感，是品嚐的最佳時機。</p></div></div><div class="storage-recommendations"><h6>储存建議</h6><p>恆溫（12-15°C）、恆濕（70-75%）、避光、避震是長期儲存Médoc名酒的必要條件。</p></div></div></div></div></div></div></div>',
    hasMap: false,
    quiz: {
      question: '陳年後的Médoc紅酒通常會發展出下列哪種香氣？',
      options: ['新鮮的檸檬香', '熱帶水果香', '皮革與煙草香', '濃郁的奶油香'],
      correct: 2,
      explanation: '隨著時間的推移，Médoc紅酒中的新鮮果香會逐漸轉化為更為複雜的第三層香氣，其中皮革、煙草、雪茄盒和森林地表是最經典的陳年香氣特徵。'
    }
  },

  // 結束頁
  {
    type: 'end',
    title: '課程完成',
    achievement: 'L2-1 Médoc產區深度探索',
    description: '恭喜您完成Médoc產區的深度學習！您已全面掌握了這個波爾多左岸最重要產區的地理、土壤、氣候、葡萄品種、村莊分級和釀酒工藝。Médoc以其卓越的Cabernet Sauvignon為基礎，出產世界上最具陳年潛力和複雜度的紅酒。',
    skills: [
      '理解Médoc半島的獨特地理位置與砂礫土壤優勢',
      '掌握海洋與河流對產區氣候的溫度調節作用',
      '熟悉四大村莊（Margaux、Pauillac、Saint-Julien、Saint-Estèphe）的風土差異',
      '了解1855分級制度與頂級酒莊的品質標準',
      '認識Médoc紅酒的典型風格與陳年潛力'
    ],
    nextSteps: [
      {
        action: '品鑑實踐',
        items: [
          '比較品鑑四個村莊的代表性酒款，感受風土差異',
          '嘗試年輕與陳年Médoc紅酒，體驗時間的魔力',
          '搭配紅肉料理，體驗單寧與蛋白質的和諧',
          '記錄品酒筆記，建立個人的Médoc風格資料庫'
        ]
      },
      {
        action: '繼續學習',
        items: [
          '進入L2-2：Graves產區深度探索',
          '深入研究1855分級酒莊的歷史演變',
          '探訪Médoc產區，實地體驗風土魅力'
        ]
      }
    ],
    certificate: '您已獲得本課程學習證明',
    reflection: {
      title: '課程反思',
      questions: [
        '為什麼Médoc的砂礫土壤如此適合種植Cabernet Sauvignon？',
        'Pauillac與Margaux的風格差異源自哪些風土因素？',
        '1855分級制度對今日Médoc產區有什麼影響？',
        '您最期待品鑑哪個Médoc村莊的酒款？為什麼？'
      ]
    },
    keyInsight: 'Médoc產區是波爾多左岸的靈魂，其獨特的砂礫土壤與海洋性氣候為Cabernet Sauvignon提供了完美的生長條件。從優雅的Margaux到強勁的Pauillac，每個村莊都因細微的風土差異而展現獨特個性。理解Médoc的風土密碼，就是打開波爾多頂級紅酒世界的鑰匙。',
    shareMessage: '我剛完成了Level 2的「Médoc產區深度探索」課程！深入了解了四大村莊的風土差異與1855分級制度，現在我能分辨Pauillac的力量與Margaux的優雅了！🍷 #波爾多 #Médoc #葡萄酒學習 #左岸產區'
  }
];

export default l21Content;

