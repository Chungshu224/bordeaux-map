/**
 * LO-L1-1 認識羅亞爾河谷葡萄酒
 * 探索法國最長葡萄酒產區的歷史、文化與全球地位
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          歡迎來到羅亞爾河谷葡萄酒課程！800 公里的葡萄酒王國，法國最長的葡萄酒產區，也是世界上最多樣化的白葡萄酒產地。從大西洋的清新 Muscadet，到中部高地的礦石 Sancerre，每一杯都是一段河流的旅程。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🏛️ 了解羅亞爾河谷的歷史地位</h4>
            <p>認識法國「花園」的2000年釀酒傳統與 UNESCO 遺產價值</p>
          </div>
          <div class="point-item">
            <h4>🌊 掌握產區的獨特多樣性</h4>
            <p>理解800公里的地理跨度如何造就無與倫比的酒款多樣性</p>
          </div>
          <div class="point-item">
            <h4>🍾 認識四大產區群</h4>
            <p>初步了解 Pays Nantais、Anjou-Saumur、Touraine、Centre-Loire 的特色</p>
          </div>
          <div class="point-item">
            <h4>🌍 掌握全球葡萄酒市場地位</h4>
            <p>了解羅亞爾河谷在法國乃至全球葡萄酒舞台的重要位置</p>
          </div>
        </div>
        <p class="intro-conclusion">
          完成本課程後，您將建立對羅亞爾河谷葡萄酒的完整框架，為深入學習各子產區打下扎實基礎。
        </p>
      </div>
    `
  },

  {
    title: '為什麼選擇羅亞爾河谷葡萄酒？',
    highlights: [
      { id: 1, icon: '📏', title: '800 公里葡萄酒之路', content: '法國最長的葡萄酒產區，也是全球最多樣化的白葡萄酒產地' },
      { id: 2, icon: '🎨', title: '無與倫比的多樣性', content: '從氣泡酒、干白、半甜、甜酒、到紅酒、粉紅酒，應有盡有' }
    ],
    content: `<div class="loire-intro">
      <p class="lead-text">羅亞爾河谷（Vallée de la Loire）是法國最北的主要葡萄酒產區之一，卻因其獨特的地理位置和多樣的土壤，孕育出法國最豐富的葡萄酒風格版圖。</p>
      <div class="key-facts">
        <div class="fact-item"><strong>產區長度：</strong>800 公里（從大西洋到中央高地）</div>
        <div class="fact-item"><strong>主要 AOP 數量：</strong>超過 55 個法定產區</div>
        <div class="fact-item"><strong>年產量：</strong>約 4.7 億瓶（全法第三大產區）</div>
        <div class="fact-item"><strong>出口比重：</strong>約 35% 出口至全球 140 個國家</div>
      </div>
      <div class="why-learn">
        <h4>🎯 學習羅亞爾河谷的三大理由</h4>
        <ul>
          <li><strong>Chenin Blanc 的殿堂：</strong>全球最重要的 Chenin Blanc 產地，從 Savennières 干型到 Bonnezeaux 甜型，展現品種的無限可能</li>
          <li><strong>Cabernet Franc 的故鄉：</strong>Chinon、Bourgueil、Saumur-Champigny 是理解 Cabernet Franc 的必修產區</li>
          <li><strong>Sauvignon Blanc 的巔峰：</strong>Sancerre 和 Pouilly-Fumé 是全球 Sauvignon Blanc 的標竿</li>
        </ul>
      </div>
    </div>`,
    quiz: {
      question: '羅亞爾河谷葡萄酒產區的東西跨度約為多少公里？',
      options: ['300 公里', '500 公里', '800 公里', '1200 公里'],
      correct: 2,
      explanation: '羅亞爾河谷葡萄酒產區從大西洋海岸一直延伸至法國中央地帶，全長約 800 公里，是法國最長的葡萄酒旅遊路線。'
    }
  },

  {
    title: '2000 年的釀酒歷史',
    highlights: [
      { id: 1, icon: '🏛️', title: '羅馬時代的起源', content: '西元 1 世紀羅馬人引入葡萄種植，Anjou 地區成為最早的產酒中心' },
      { id: 2, icon: '⛪', title: '修道院守護傳承', content: '中世紀本篤會與西多會精心培育葡萄園，奠定今日頂級地塊的概念基礎' },
      { id: 3, icon: '👑', title: '法國王室的御用酒', content: '15–16 世紀法國王室在此建造數十座城堡，羅亞爾河谷葡萄酒成為宮廷首選' },
      { id: 4, icon: '🌍', title: 'UNESCO 世界遺產', content: '2000 年城堡與葡萄園景觀獲 UNESCO 認定，代表人與自然 2000 年共同創造的傑出成就' }
    ],
    content: `<div class="history-section">
      <p class="history-intro">羅亞爾河谷不僅是葡萄酒產區，更是法國文明的搖籃，被稱為「法國的花園」（le jardin de la France）——<span class="intro-highlight">2000 年釀酒史橫跨羅馬征服、修道院傳承、王室榮耀到現代 AOC 典範</span></p>
    </div>
    <div class="timeline-container">
      <div class="timeline-item">
        <div class="timeline-badge ancient">西元 1 世紀</div>
        <div class="timeline-content"><strong>🏛️ 羅馬奠基</strong><p>羅馬人征服高盧後，沿著羅亞爾河廣泛種植葡萄。Anjou 和 Touraine 地區最早成形，奠定日後整個產區的地理框架。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge medieval">中世紀</div>
        <div class="timeline-content"><strong>⛪ 修道院守護傳承</strong><p>本篤會與西多會修道院精心培育葡萄園，記錄風土特性，奠定 Savennières、Vouvray 等地至今仍存在的頂級地塊（lieu-dit）概念。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge medieval">12–14 世紀</div>
        <div class="timeline-content"><strong>⚓ 英國貿易黃金期</strong><p>英王亨利二世（1154 年）統治 Anjou 後，羅亞爾河谷葡萄酒大量出口英國。Anjou 紅酒曾是英國宮廷最受歡迎的法國葡萄酒，奠定國際貿易基礎。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge renaissance">15–16 世紀</div>
        <div class="timeline-content"><strong>👑 法國王室的御用產區</strong><p>法蘭索瓦一世（François I）在 Chambord、查理八世在 Amboise 建造文藝復興宮廷。羅亞爾河谷成為法國文化中心，葡萄酒是宮廷外交不可缺少的要角。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge austria">17 世紀</div>
        <div class="timeline-content"><strong>🚢 荷蘭商人改變格局</strong><p>荷蘭商人大量收購 Muscadet 白酒與 Anjou 粉紅酒出口北歐，推動南特地區 Melon de Bourgogne 的大規模種植，形塑今日 Muscadet 產區的雛形。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge sparkling">1880 年代</div>
        <div class="timeline-content"><strong>🐛 根瘤蚜危機與重建</strong><p>根瘤蚜蟲病（Phylloxera）席捲羅亞爾河谷，幾乎摧毀所有葡萄園。重建期間嫁接美洲砧木，並趁機重新規劃品種分布，奠定現代品種格局。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge doc">1936 年</div>
        <div class="timeline-content"><strong>📋 AOC 制度建立</strong><p>法國 AOC 法定產區制度誕生，羅亞爾河谷的 Muscadet、Sancerre、Pouilly-Fumé 等產區陸續獲得法定認證，確立品種、產區與釀造規範，保護傳統風格。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge modern">2000 年</div>
        <div class="timeline-content"><strong>🌍 UNESCO 世界文化遺產</strong><p>羅亞爾河谷的城堡群與葡萄園景觀整體獲 UNESCO 列為世界文化遺產，是法國面積最大的世界遺產之一，代表人與自然 2000 年共同創造的傑出文明景觀。</p></div>
      </div>
    </div>
    <div class="stat-grid">
      <div class="stat-box"><div class="stat-number">西元 1 世紀</div><div class="stat-label">羅馬引入葡萄</div></div>
      <div class="stat-box"><div class="stat-number">15–16 世紀</div><div class="stat-label">法國王室的花園</div></div>
      <div class="stat-box"><div class="stat-number">55+</div><div class="stat-label">法定 AOP 產區</div></div>
      <div class="stat-box"><div class="stat-number">2000 年</div><div class="stat-label">UNESCO 世界遺產</div></div>
    </div>`,
    quiz: {
      question: '羅亞爾河谷何時被 UNESCO 列為世界文化遺產？',
      options: ['1989 年', '1995 年', '2000 年', '2010 年'],
      correct: 2,
      explanation: '羅亞爾河谷（包括城堡與葡萄園景觀）於 2000 年被聯合國教科文組織列為世界文化遺產，是法國最重要的歷史文化景觀之一。'
    }
  },

  {
    title: '「法國的花園」：風土精神',
    highlights: [
      { id: 1, icon: '🌱', title: '有機農法先驅', content: '羅亞爾河谷是法國有機葡萄酒種植比例最高的產區之一，自然派釀酒文化濃厚' },
      { id: 2, icon: '🌊', title: '河流塑造一切', content: '羅亞爾河及其支流（Vienne、Cher、Indre、Layon 等）形成了多樣的微氣候' }
    ],
    content: `<div class="loire-terroir-spirit">
      <p class="lead-text">羅亞爾河谷的精神是「誠實」——讓土壤說話，讓品種表達。這裡的釀酒師深信風土的力量，不過度干預，呈現最純粹的葡萄酒本質。</p>
      <div class="terroir-values">
        <h4>🌿 四大風土精神</h4>
        <div class="value-grid">
          <div class="value-item">
            <h5>誠實的表達</h5>
            <p>不追求濃縮或過度萃取，以清新、精緻見長</p>
          </div>
          <div class="value-item">
            <h5>多樣性是財富</h5>
            <p>55 個以上的 AOP，每個都有獨特的身份認同</p>
          </div>
          <div class="value-item">
            <h5>有機、自然的前衛</h5>
            <p>法國有機認證比例最高的葡萄酒產區之一</p>
          </div>
          <div class="value-item">
            <h5>性價比之王</h5>
            <p>頂級品質與合理價格，常被葡萄酒愛好者視為「最佳性價比」產區</p>
          </div>
        </div>
      </div>
      <div class="climate-note">
        <h4>🌡️ 氣候的恩賜</h4>
        <p>羅亞爾河谷從西部的大西洋型氣候（溫和濕潤）過渡到東部的半大陸型氣候（溫差較大），這種氣候梯度是產區多樣性的根本原因，也是 Chenin Blanc 既能做干白又能做偉大甜酒的關鍵。</p>
      </div>
    </div>`,
    quiz: {
      question: '下列哪一項最能描述羅亞爾河谷葡萄酒的整體風格精神？',
      options: ['濃縮、強勁、高單寧', '清新、誠實、多樣化', '甜美、圓潤、易飲', '橡木、焦糖、奶油'],
      correct: 1,
      explanation: '羅亞爾河谷葡萄酒以清新感、誠實表達風土、以及豐富多樣性著稱。相比波爾多或勃艮第的濃郁風格，羅亞爾更崇尚精緻優雅。'
    }
  },

  {
    title: '四大產區群速覽',
    highlights: [
      { id: 1, icon: '🗺️', title: '從西到東的旅程', content: '四大核心產區群各有主角葡萄品種和代表酒款，構成完整的羅亞爾風味地圖；北方還有 Vallée du Loir 和 Haut-Poitou 兩個特色次產區' },
      { id: 2, icon: '🍾', title: '所有風格一應俱全', content: '氣泡、干白、甜白、紅酒、粉紅——羅亞爾是唯一能提供所有類型頂級酒款的法國產區，共有 54 個 AOP/DGC 及 IGP' }
    ],
    content: `<div class="region-overview">
      <p class="region-intro">從大西洋出發，沿著羅亞爾河向東，穿越四個截然不同的葡萄酒世界；北方另有兩個充滿個性的特色次產區。共 <strong>55+ AOP</strong>，每個都有自己的主角品種與代表風格。</p>
      <div class="region-grid main-grid">
        <div class="region-card rg-pays">
          <div class="rc-header">
            <span class="rc-icon">🌊</span>
            <span class="rc-name">Pays Nantais</span>
            <span class="rc-aop">17 AOPs</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">Melon de Bourgogne</div>
            <div class="rc-style">清新礦石 · Muscadet</div>
          </div>
        </div>
        <div class="region-card rg-anjou">
          <div class="rc-header">
            <span class="rc-icon">🏰</span>
            <span class="rc-name">Anjou-Saumur</span>
            <span class="rc-aop">23 AOPs</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">Chenin Blanc + Cab. Franc</div>
            <div class="rc-style">偉大甜酒 · Saumur-Champigny</div>
          </div>
        </div>
        <div class="region-card rg-touraine">
          <div class="rc-header">
            <span class="rc-icon">🏯</span>
            <span class="rc-name">Touraine</span>
            <span class="rc-aop">14 AOPs</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">Chenin + Cab. Franc + Côt</div>
            <div class="rc-style">Vouvray · Chinon · Bourgueil</div>
          </div>
        </div>
        <div class="region-card rg-centre">
          <div class="rc-header">
            <span class="rc-icon">⛰️</span>
            <span class="rc-name">Centre-Loire</span>
            <span class="rc-aop">礦石頂峰</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">Sauvignon Blanc + Pinot Noir</div>
            <div class="rc-style">Sancerre · Pouilly-Fumé</div>
          </div>
        </div>
      </div>
      <div class="region-secondary-label">北方特色次產區</div>
      <div class="region-grid secondary-grid">
        <div class="region-card rg-loir">
          <div class="rc-header">
            <span class="rc-icon">🌿</span>
            <span class="rc-name">Vallée du Loir</span>
            <span class="rc-aop">4 AOPs</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">Chenin + Pineau d'Aunis + Gamay</div>
            <div class="rc-style">Jasnières · Coteaux du Loir</div>
          </div>
        </div>
        <div class="region-card rg-poitou">
          <div class="rc-header">
            <span class="rc-icon">🏛️</span>
            <span class="rc-name">Haut-Poitou</span>
            <span class="rc-aop">1 AOP</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">Sauvignon Blanc + Gamay + Cab. Franc</div>
            <div class="rc-style">跨行政疆界的特殊 AOP</div>
          </div>
        </div>
      </div>
      <div class="region-tip">📚 接下來的課程將從 Pays Nantais 出發，逐一深入每個品種和產區——記住四大區的位置與主角品種，是掌握羅亞爾河谷的第一步！</div>
    </div>`,
    quiz: {
      question: 'Sancerre 和 Pouilly-Fumé 屬於羅亞爾河谷的哪個子產區群？',
      options: ['Pays Nantais', 'Anjou-Saumur', 'Touraine', 'Centre-Loire'],
      correct: 3,
      explanation: 'Sancerre 和 Pouilly-Fumé 位於羅亞爾河谷最東端的 Centre-Loire（中央羅亞爾）產區，以 Sauvignon Blanc 白酒和少量 Pinot Noir 紅酒著稱。'
    }
  },

]
