/**
 * CA-L1-6 其他產區探索
 * Mendocino、Lake County、Sierra Foothills、Central Valley（Lodi）、Southern CA、Far North CA
 * 資料來源：discovercaliforniawines.com
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          加州葡萄酒的疆界遠超過 Napa 和 Sonoma。從北部 Mendocino 的有機酒莊，到 Sierra Foothills 的金礦淘金時代老藤 Zinfandel，從 Central Valley（Lodi）的龐大農業腹地，到 Southern California 的亞熱帶海岸葡萄園——加州的多元性令人嘆為觀止。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌱 認識 Mendocino 的有機農業先鋒</h4>
            <p>了解 Anderson Valley 的世界級 Pinot 和 Mendocino 的有機酒莊傳統</p>
          </div>
          <div class="point-item">
            <h4>⛏️ 探索 Sierra Foothills 的金礦老藤文化</h4>
            <p>理解加州淘金時代留下的百年老藤 Zinfandel 和 Barbera</p>
          </div>
          <div class="point-item">
            <h4>🌊 了解 Lodi 的「量與質」轉型故事</h4>
            <p>認識加州最大的葡萄種植地帶如何走向精品化路線</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: 'Mendocino County — 有機農業的先鋒',
    content: `<div class="mendocino-detail">
      <h3>🌿 Mendocino County — 加州最環保的葡萄酒郡</h3>
      <p>位於 Sonoma 以北的 Mendocino 是加州有機農業的發源地之一，超過 25% 的葡萄農獲得有機認證，全加州最高。多元地形和氣候（海岸涼爽到內陸溫熱），帶來豐富的品種多樣性。</p>

      <div class="anderson-valley">
        <h4>🌸 Anderson Valley — 世界級 Pinot Noir 和 Alsatian 品種</h4>
        <p>Mendocino 最著名的子 AVA，是一個涼爽的海岸山谷，以世界級 Pinot Noir、Chardonnay 和 Alsatian 品種（Gewurztraminer、Pinot Gris、Riesling）著稱。海霧每日湧入，帶來涼爽的早晨和明亮的下午。</p>
        <div class="av-highlights">
          <div class="av-item"><strong>氣候：</strong>涼爽，海霧頻繁，生長季長且緩慢</div>
          <div class="av-item"><strong>土壤：</strong>沖積壤土和砂岩</div>
          <div class="av-item"><strong>特色：</strong>加州最精緻的 Pinot Noir 之一，也是唯一世界級 Gewurztraminer 產地</div>
        </div>
        <div class="av-producers">代表酒莊：Roederer Estate（Louis Roederer 在美國的分支，以氣泡酒為主）、Goldeneye、Handley Cellars、Navarro Vineyards</div>
      </div>

      <div class="mendocino-other">
        <h4>其他子 AVA</h4>
        <ul>
          <li>🌲 <strong>Mendocino Ridge：</strong>海拔 1,200 公尺以上的島嶼型山地 AVA，最涼爽的 Zinfandel</li>
          <li>🌾 <strong>Redwood Valley：</strong>溫暖乾燥，老藤 Zinfandel 和 Cabernet</li>
          <li>🌿 <strong>McDowell Valley：</strong>以 Syrah 著稱，McDowell Valley Vineyards 是代表</li>
        </ul>
      </div>
    </div>`
  },

  {
    title: 'Lake County — 火山與高海拔的奇蹟',
    content: `<div class="lake-county-detail">
      <h3>🌋 Lake County — Clear Lake 火山旁的葡萄酒秘境</h3>
      <p>Lake County 以全美最大的天然湖泊 Clear Lake 和附近的科納克提火山（Mt. Konocti）為中心，8 個 AVA，1870 年代就有葡萄種植記錄。</p>

      <div class="lake-features">
        <div class="feature-box">
          <h4>🔴 標誌性的紅土壤</h4>
          <p>Clear Lake 周圍的火山岩和紅色礫石土壤是 Lake County 的招牌，富含礦物質，排水極佳。這種土壤帶來加州最低的根瘤蚜（Phylloxera）危害，許多葡萄藤仍生長在原始根系上。</p>
        </div>
        <div class="feature-box">
          <h4>⛰️ 高海拔優勢</h4>
          <p>Lake County 平均海拔超過 1,400 公尺，是加州海拔最高的葡萄酒產區群之一，帶來長的生長季和極大的晝夜溫差，葡萄的天然酸度和芳香物質保存完整。</p>
        </div>
      </div>

      <div class="lake-avas">
        <h4>8 個子 AVA</h4>
        <div class="avas-list">
          <div class="a-item"><strong>Red Hills Lake County：</strong>火山紅土，Cabernet Sauvignon 最佳</div>
          <div class="a-item"><strong>High Valley：</strong>高海拔，涼爽，Sauvignon Blanc 和 Syrah</div>
          <div class="a-item"><strong>Clear Lake：</strong>湖泊調節氣候，多元品種</div>
          <div class="a-item"><strong>Guenoc Valley：</strong>溫暖山谷，Petite Sirah 和 Cabernet</div>
        </div>
      </div>

      <p class="lake-producers">代表酒莊：Brassfield Estate Winery、Ployez-Schoffit（高海拔有機）、Shannon Ridge</p>
    </div>`
  },

  {
    title: 'Sierra Foothills — 金礦時代的老藤傳奇',
    content: `<div class="sierra-detail">
      <h3>⛏️ Sierra Foothills — 加州淘金熱的葡萄酒遺產</h3>
      <p>內華達山脈西側山麓，海拔 300-1,000 公尺。這裡是 1849 年加州淘金熱（Gold Rush）的核心地帶，淘金客帶來了對葡萄酒的需求，許多葡萄園隨之建立。如今，部分老藤已有 150 年歷史。</p>

      <div class="sierra-highlights">
        <div class="s-box">
          <h4>🍇 老藤 Zinfandel 的寶庫</h4>
          <p>Sierra Foothills 擁有加州最大密度的 Zinfandel 老藤，包括超過 100 年的歷史老藤。這些老藤自然低產，釀造出濃縮的黑果、香料和乾燥花香，風格粗獷豪放，是 Napa 精緻感的反面。</p>
        </div>
        <div class="s-box">
          <h4>🇮🇹 義大利移民的品種遺產</h4>
          <p>19 世紀末大量義大利移民定居此地，帶來了 Barbera、Sangiovese、Nebbiolo 等義大利品種，今日的 Amador County 是美國 Barbera 最重要的產地。</p>
        </div>
      </div>

      <div class="sierra-avas">
        <h4>主要子 AVA</h4>
        <div class="avas-list">
          <div class="a-item"><strong>El Dorado County：</strong>高海拔（600-900m），多元品種，涼爽氣候</div>
          <div class="a-item"><strong>Amador County（包含 Shenandoah Valley）：</strong>溫暖，老藤 Zinfandel 和義大利品種的故鄉</div>
          <div class="a-item"><strong>Calaveras County：</strong>以 Barbera、Tempranillo 著稱</div>
        </div>
      </div>

      <p class="sierra-producers">代表酒莊：Amador Foothill Winery、Shenandoah Vineyards、Terre Rouge（Rhône 品種）、Jeff Runquist Wines（老藤 Zinfandel）</p>
    </div>`
  },

  {
    title: 'Lodi & Central Valley、Southern CA、Far North CA',
    content: `<div class="other-regions">
      <div class="lodi-section">
        <h3>🌾 Lodi — 加州的「Zinfandel 之都」</h3>
        <p>位於 Sacramento 三角洲，Lodi 是加州最大的單一葡萄酒 AVA，擁有加州最多的老藤 Zinfandel。曾長期以散裝葡萄酒供應商的形象存在，但近年積極轉型精品化，以「ZinFest」（全美最大 Zinfandel 慶典）吸引全球關注。</p>
        <div class="lodi-fact">
          <div class="lf-item">🌿 <strong>LODI RULES：</strong>全美首個農業可持續認證項目，有機和可持續農業的先驅</div>
          <div class="lf-item">🍇 <strong>老藤 Zinfandel：</strong>部分老藤超過 120 年，種植在沙質土壤上，根瘤蚜無法寄生</div>
          <div class="lf-item">🏆 <strong>品種多元：</strong>除 Zinfandel 外，Cabernet Sauvignon、Merlot、Chardonnay 都有大量種植</div>
        </div>
        <p class="lodi-producers">代表酒莊：Michael David Winery（7 Deadly Zins）、Bokisch Vineyards（Tempranillo）、Klinker Brick Winery（老藤 Zin）</p>
      </div>

      <div class="southern-ca">
        <h3>🌴 Southern California（南加州）— 葡萄酒的南方邊境</h3>
        <p>加州葡萄酒的最南端，包含 Temecula Valley（San Diego 以北）和 Los Angeles、Santa Barbara 周邊。Temecula 受太平洋涼風（通過 Rainbow Gap）影響，夜間涼爽，生產多元品種。近年洛杉磯城市葡萄酒文化蓬勃，葡萄酒吧文化興盛。</p>
        <p class="sc-producers">代表：Ponte Family Estate（Temecula）、Callaway Vineyard & Winery（Temecula）</p>
      </div>

      <div class="far-north">
        <h3>🌲 Far North California — 加州葡萄酒的神秘北疆</h3>
        <p>從 Trinity 到 Shasta，遠北加州地廣人稀，葡萄酒業仍在成長中。Trinity County 的高海拔（最高 1,200 公尺）葡萄園以 Petite Sirah 和 Grenache 著稱，Shasta 則有有機農業的實驗場。</p>
      </div>
    </div>`
  },

  {
    type: 'quiz',
    title: '課程測驗',
    questions: [
      {
        id: 'ca6-q1',
        question: 'Anderson Valley（Mendocino）以哪兩個特色聞名？',
        options: ['老藤 Zinfandel 和 Petite Sirah', '世界級 Pinot Noir 和 Alsatian 品種（Gewurztraminer、Riesling）', '火山岩土壤和 Cabernet Sauvignon', 'Rhône 品種和石灰岩土壤'],
        answer: 1,
        explanation: 'Anderson Valley 以世界級 Pinot Noir、Chardonnay 和 Alsatian 品種（尤其是 Gewurztraminer、Riesling、Pinot Gris）著稱，是加州唯一能釀造世界頂級 Gewurztraminer 的地方，涼爽的海霧氣候是關鍵。'
      },
      {
        id: 'ca6-q2',
        question: 'Sierra Foothills 的葡萄酒文化與加州哪段歷史息息相關？',
        options: ['西班牙傳教士文化（1769年）', '1849 年加州淘金熱（Gold Rush）', '1976 年巴黎評判', '蘇聯軍事基地'],
        answer: 1,
        explanation: 'Sierra Foothills 是 1849 年加州淘金熱（Gold Rush）的核心地帶，淘金客對葡萄酒的需求促使大量葡萄園建立，義大利移民帶來了他們的品種（Barbera、Sangiovese 等），留下了今日仍在使用的百年老藤。'
      },
      {
        id: 'ca6-q3',
        question: 'Lodi 最著名的是哪項農業可持續認證計劃？',
        options: ['Sonoma Wine County Winegrowers', 'LODI RULES（全美首個農業可持續認證項目）', 'California Certified Organic（CCOF）', 'Napa Green'],
        answer: 1,
        explanation: 'LODI RULES 是全美第一個專為葡萄種植者設計的農業可持續認證計劃，由 Lodi Winegrape Commission 創立，在有機農業和可持續農業領域具有開創性意義。'
      },
      {
        id: 'ca6-q4',
        question: 'Lake County 的 Red Hills 子 AVA 最著名的特色是什麼？',
        options: ['白色石灰岩土壤', '火山岩紅色礫石土壤，根瘤蚜危害少，以 Cabernet Sauvignon 著稱', 'Goldridge 細沙壤土', '深厚的粘土層'],
        answer: 1,
        explanation: 'Red Hills Lake County 以火山岩紅色礫石土壤著稱，富含礦物質、排水極佳。此土壤環境不利根瘤蚜（Phylloxera）生存，許多葡萄藤仍生長在原始根系上，以 Cabernet Sauvignon 著稱。'
      }
    ]
  }
]
