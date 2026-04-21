/**
 * LO-L2-1 Tuffeau 地質與氣候過渡帶
 * Level 2 開篇：安茹-索米爾的凝灰岩地質奇觀
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          歡迎進入 Level 2！從大西洋的清涼海風，我們向東走進羅亞爾河的心臟地帶——安茹與索米爾。這裡有一種神奇的石頭叫做 Tuffeau（凝灰岩），它不僅是葡萄樹的家，也是城堡與地下酒窖的建材，更是這裡葡萄酒靈魂的底色。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🪨 認識 Tuffeau 凝灰岩的地質特性</h4>
            <p>了解白堊凝灰岩對土壤排水、保水與礦物質的影響</p>
          </div>
          <div class="point-item">
            <h4>🌡️ 掌握氣候過渡帶的特色</h4>
            <p>從海洋性到半大陸性氣候的漸進轉換對葡萄成熟的影響</p>
          </div>
          <div class="point-item">
            <h4>🏰 了解地下洞窟酒窖文化</h4>
            <p>凝灰岩如何孕育獨特的地下酒窖（cave）文化與陳年條件</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Tuffeau：安茹-索米爾的靈魂石頭',
    highlights: [
      { id: 1, icon: '🪨', title: '白堊凝灰岩', content: 'Tuffeau 是一種多孔隙的白色石灰岩，富含矽藻化石，切割容易但堅固耐用' },
      { id: 2, icon: '🏰', title: '城堡的建材', content: '羅亞爾河谷的眾多城堡（如 Château de Saumur）都用凝灰岩建造' },
      { id: 3, icon: '🍾', title: '天然酒窖', content: '凝灰岩開鑿的地下洞窟維持恆溫 12-14°C，是陳年葡萄酒的完美環境' },
      { id: 4, icon: '🌱', title: '葡萄樹的土壤', content: '凝灰岩土壤排水良好，葡萄樹根可深入尋水，造就精緻礦物感' }
    ],
    content: `
      <div class="tuffeau-section">
        <p>Tuffeau 是安茹-索米爾最具代表性的地質特徵。這種質地輕軟的白色凝灰岩，在中世紀被廣泛用於建築，如今更是這裡葡萄酒風土不可分割的一部分。</p>
        <p>在索米爾周邊，你可以看到「troglodyte」——人們直接在凝灰岩峭壁上鑿出的洞穴住宅與酒窖，這在羅亞爾河谷是獨一無二的景觀。</p>
      </div>
    `
  },
  {
    title: '氣候過渡帶：從大西洋到半大陸',
    content: `
      <div class="climate-section">
        <p>安茹-索米爾的氣候是羅亞爾河谷最特別的過渡地帶：</p>
        <ul>
          <li><strong>安茹西部</strong>：仍受大西洋影響，冬暖夏涼，雨量較多</li>
          <li><strong>索米爾東部</strong>：漸趨半大陸性，夏季較熱，秋季較乾燥——有利貴腐菌發展</li>
          <li><strong>Layon 河谷</strong>：特殊的晨霧條件，是貴腐甜酒的搖籃</li>
        </ul>
        <p>這種氣候差異，解釋了為何同樣是白詩南，在安茹可以做出干型礦物白酒（Savennières），在 Layon 河谷卻能孕育出世界級的甜酒（Quarts de Chaume）。</p>
      </div>
    `
  },
  {
    title: '土壤的雙重個性：片岩與石灰岩',
    content: `
      <div class="soil-section">
        <p>安茹-索米爾的土壤並非只有凝灰岩，而是一個精彩的雙重世界：</p>
        <div class="soil-comparison">
          <div class="soil-item">
            <h4>🖤 片岩（Schist）——西部安茹</h4>
            <p>黑色變質岩，保熱效果好，造就濃郁礦物感與緊緻結構，Savennières 的靈魂土壤</p>
          </div>
          <div class="soil-item">
            <h4>⬜ 凝灰岩（Tuffeau）——東部索米爾</h4>
            <p>白色石灰岩，排水佳，造就清爽輕盈的酒款，Saumur-Champigny 和氣泡酒的家</p>
          </div>
        </div>
        <p>這條土壤分界線，大致沿著路易河谷的古老地質斷層延伸，是研究羅亞爾風土必須掌握的關鍵知識。</p>
      </div>
    `
  },
  {
    type: 'quiz',
    title: '小測驗',
    questions: [
      {
        id: 'q1',
        question: 'Tuffeau 凝灰岩最重要的特性是什麼？',
        options: ['含鐵量高，土壤呈紅色', '多孔隙白色石灰岩，排水好且可開鑿地下洞窟', '緻密不透水，適合做水庫', '富含火山灰，適合種植 Gamay'],
        correctIndex: 1,
        explanation: 'Tuffeau 是多孔隙的白堊凝灰岩，其排水性和可開鑿性使它成為葡萄栽培和地下酒窖的完美材料。'
      },
      {
        id: 'q2',
        question: '安茹-索米爾的氣候特色是？',
        options: ['全區地中海型氣候', '全區大陸型氣候', '從西部海洋性到東部半大陸性的過渡氣候', '全年受北極氣流影響'],
        correctIndex: 2,
        explanation: '安茹-索米爾是從大西洋海洋性氣候逐漸過渡到半大陸性氣候的區域，這種過渡造就了產區的多樣葡萄酒風格。'
      }
    ]  },

  {
    component: 'LoireRegionMapSlide',
    title: 'Anjou-Saumur 產區地圖',
    componentProps: {
      slide: {
        title: 'Anjou-Saumur 產區地理位置',
        description: '凝灰岩地質造就的城堡酒鄉，Chenin Blanc 與 Cabernet Franc 共舞',
        mapGroup: 'AnjouSaumur',
        highlightFiles: ['Saumur.geojson', 'Saumur-Champigny.geojson', 'Savennières.geojson', 'Coteaux-du-Layon.geojson'],
      }
    }  }
]
