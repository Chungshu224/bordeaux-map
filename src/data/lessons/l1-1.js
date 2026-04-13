/**
 * L1-1 認識波爾多地理位置
 * 了解波爾多產區的地理環境與位置特色
 */

export const lessonContent = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          歡迎來到波爾多葡萄酒學院！在這門入門課程中，我們將從最基礎也最重要的問題開始：波爾多在哪裡？這個看似簡單的問題，卻是理解波爾多葡萄酒偉大之處的第一把鑰匙。
        </p>

        <p class="intro-context">
          地理位置決定了一切。波爾多位於法國西南部，北緯44-45度之間，距離大西洋僅60公里。這個獨特的位置賦予了波爾多溫和的海洋性氣候、多樣化的土壤類型，以及三條重要河流的滋養。正是這些地理因素的完美組合，造就了波爾多作為世界頂級葡萄酒產區的地位。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>📍 掌握波爾多的地理位置</h4>
            <p>了解波爾多在法國的具體位置、緯度、面積與周邊地理環境</p>
          </div>

          <div class="point-item">
            <h4>🌊 理解地理對風土的影響</h4>
            <p>學習大西洋、吉隆河、加龍河、多爾多涅河如何塑造波爾多的氣候與土壤</p>
          </div>

          <div class="point-item">
            <h4>🗺️ 認識主要產區分布</h4>
            <p>初步了解左岸、右岸、兩海之間等主要產區的地理位置</p>
          </div>

          <div class="point-item">
            <h4>🏛️ 探索波爾多的歷史地位</h4>
            <p>認識波爾多作為世界葡萄酒之都的歷史淵源與戰略優勢</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠清晰描述波爾多的地理位置，並理解地理因素如何為這個偉大產區奠定基礎。讓我們開始這趟精彩的波爾多探索之旅！
        </p>
      </div>
    `
  },

  {
    component: 'SlideFranceBordeaux',
    title: '波爾多在法國的位置',
    duration: '15分鐘',
    level: '初級',
    courseIntro: '了解波爾多產區的地理環境與位置特色',
    highlights: [
      { id: 1, icon: '📍', title: '戰略位置', content: '位於法國西南部，距離大西洋約60公里' },
      { id: 2, icon: '🌊', title: '海洋性氣候', content: '受大西洋影響，氣候溫和濕潤，造就優質風土' }
    ],
    content: `<div class="location-overview">
      <p class="lead-text">波爾多 (Bordeaux) 位於法國西南部的新亞奎丹大區 (Nouvelle-Aquitaine)，是該地區最重要的城市和葡萄酒產區。</p>
      <div class="key-facts">
        <div class="fact-item"><strong>緯度位置：</strong> 北緯44°50'</div>
        <div class="fact-item"><strong>面積：</strong> 約120,000公頃的葡萄園</div>
        <div class="fact-item"><strong>距離巴黎：</strong> 約500公里（高鐵3小時）</div>
        <div class="fact-item"><strong>距離大西洋：</strong> 約60公里，享受海洋性氣候調節</div>
      </div>
      <div class="strategic-location">
        <h4>🎯 戰略地理優勢</h4>
        <ul>
          <li><strong>交通樞紐：</strong>連接歐洲與大西洋的重要門戶</li>
          <li><strong>氣候優勢：</strong>溫帶海洋性氣候，適合葡萄生長</li>
          <li><strong>土壤多樣：</strong>從砂礫到黏土，風土條件豐富</li>
          <li><strong>歷史傳承：</strong>2000年葡萄酒釀造歷史</li>
        </ul>
      </div>
    </div>`,
    
    quiz: {
      question: '波爾多距離大西洋約多少公里？',
      options: ['30公里', '60公里', '100公里', '150公里'],
      correct: 1,
      explanation: '波爾多距離大西洋約60公里，這個距離讓它能享受海洋性氣候的調節作用，但又不會受到過度的海洋影響。'
    }
  },
  {
    component: 'SlideRiversSystem',
    title: '三河匯流的獨特地理',
    highlights: [
      { id: 1, icon: '🏞️', title: '三條主要河流', content: '加龍河、多爾多涅河、吉隆德河形成獨特水系' },
      { id: 2, icon: '🌡️', title: '氣候調節', content: '河流系統起到天然的溫度和濕度調節作用' }
    ],
    content: `<div class="river-system">
      <p class="lead-text">波爾多的獨特地理特徵是其完整的河流系統，這些河流不僅塑造了地形，更決定了產區的劃分。</p>
      <div class="rivers-list">
        <div class="river-item">
          <h4>🌊 加龍河 (Garonne)</h4>
          <p><strong>來源：</strong>庇里牛斯山脈 (Pyrénées)</p>
          <p><strong>特色：</strong>流經波爾多市中心，形成左岸產區的天然邊界</p>
          <p><strong>影響：</strong>左岸的砂礫土壤主要由加龍河沖積形成</p>
        </div>
        <div class="river-item">
          <h4>🌊 多爾多涅河 (Dordogne)</h4>
          <p><strong>來源：</strong>法國中央高原 (Massif Central)</p>
          <p><strong>特色：</strong>與加龍河匯合，沿岸分佈著右岸產區</p>
          <p><strong>影響：</strong>右岸的黏土石灰岩土壤特徵</p>
        </div>
        <div class="river-item">
          <h4>🌊 吉隆德河 (Gironde)</h4>
          <p><strong>形成：</strong>兩河匯合後形成的河口</p>
          <p><strong>特色：</strong>歐洲最大的河口，直通大西洋</p>
          <p><strong>影響：</strong>調節整個產區的微氣候</p>
        </div>
      </div>
      <div class="river-benefits">
        <h4>💧 河流系統的益處</h4>
        <ul>
          <li><strong>溫度調節：</strong>水體調節日夜溫差，延長葡萄成熟期</li>
          <li><strong>濕度控制：</strong>提供適度濕度，預防極端乾旱</li>
          <li><strong>霜凍保護：</strong>水體儲熱，減少春季霜凍風險</li>
          <li><strong>土壤形成：</strong>沖積作用形成多樣化土壤類型</li>
        </ul>
      </div>
    </div>`,
    
    quiz: {
      question: '吉隆德河是如何形成的？',
      options: ['來自阿爾卑斯山', '加龍河與多爾多涅河匯合', '來自大西洋', '人工開鑿'],
      correct: 1,
      explanation: '吉隆德河是加龍河和多爾多涅河匯合後形成的河口，直通大西洋，是歐洲最大的河口之一。'
    }
  },
  {
    component: 'SlideLeftRightBanks',
    title: '左岸與右岸的劃分',
    highlights: [
      { id: 1, icon: '⬅️', title: '左岸產區', content: '以加龍河為界，包括梅多克、格拉夫等著名產區' },
      { id: 2, icon: '➡️', title: '右岸產區', content: '以多爾多涅河為界，包括聖愛美濃、波美侯等精品產區' }
    ],
    content: `<div class="bank-division">
      <p class="lead-text">波爾多以河流為天然邊界，劃分為截然不同的左岸和右岸產區，各具獨特的風土條件和酒款特色。</p>
      <div class="banks-comparison">
        <div class="left-bank">
          <h4>⬅️ 左岸 (Rive Gauche)</h4>
          <div class="bank-details">
            <p><strong>地理範圍：</strong>加龍河以西和以南的區域</p>
            <p><strong>主要產區：</strong>梅多克 (Médoc)、上梅多克 (Haut-Médoc)、格拉夫 (Graves)</p>
            <p><strong>著名村莊：</strong>瑪歌 (Margaux)、聖朱利安 (Saint-Julien)、波雅克 (Pauillac)、聖愛斯泰夫 (Saint-Estèphe)</p>
            <p><strong>土壤特色：</strong>以砂礫土為主，排水性佳</p>
            <p><strong>主要品種：</strong>卡本內蘇維翁 (Cabernet Sauvignon) 主導</p>
          </div>
        </div>
        <div class="right-bank">
          <h4>➡️ 右岸 (Rive Droite)</h4>
          <div class="bank-details">
            <p><strong>地理範圍：</strong>多爾多涅河以北和以東的區域</p>
            <p><strong>主要產區：</strong>聖愛美濃 (Saint-Émilion)、波美侯 (Pomerol)、弗朗丘 (Côtes de Francs)</p>
            <p><strong>著名村莊：</strong>聖愛美濃村、波美侯村</p>
            <p><strong>土壤特色：</strong>以黏土石灰岩為主，保水性佳</p>
            <p><strong>主要品種：</strong>梅洛 (Merlot) 主導</p>
          </div>
        </div>
      </div>
      <div class="division-significance">
        <h4>🎯 劃分的重要意義</h4>
        <ul>
          <li><strong>風土表達：</strong>不同的土壤和氣候造就獨特風味</li>
          <li><strong>品種選擇：</strong>適合的葡萄品種在各自區域表現最佳</li>
          <li><strong>酒款風格：</strong>左岸偏向結構感，右岸偏向圓潤感</li>
          <li><strong>投資價值：</strong>了解產區特色有助於收藏和投資決策</li>
        </ul>
      </div>
    </div>`,
    
    quiz: {
      question: '左岸產區主要以哪條河流為界？',
      options: ['多爾多涅河', '加龍河', '吉隆德河', '塞納河'],
      correct: 1,
      explanation: '左岸產區以加龍河為界，河流以西和以南的區域構成了著名的左岸產區，包括梅多克和格拉夫等。'
    }
  },

  // 結束頁
  {
    type: 'end',
    title: '課程完成',
    achievement: 'L1-1 左岸與右岸概覽 - 波爾多地理基礎',
    description: '恭喜您完成波爾多左岸與右岸的基礎學習！您已掌握波爾多最核心的地理劃分概念，理解加龍河與多爾多涅河如何塑造兩岸的風土差異。左岸的砂礫土壤與Cabernet Sauvignon、右岸的黏土與Merlot，這些基礎知識是理解波爾多葡萄酒的第一把鑰匙。',
    skills: [
      '理解波爾多左岸與右岸的地理劃分',
      '認識加龍河與多爾多涅河的作用',
      '掌握左右岸的基本土壤與品種差異',
      '了解主要產區的地理分布',
      '建立波爾多地理框架的基礎認知'
    ],
    nextSteps: [
      {
        action: '鞏固學習',
        items: [
          '在地圖上標注左岸與右岸的主要產區',
          '記憶左岸以Cabernet Sauvignon、右岸以Merlot為主的特點',
          '理解河流對氣候與排水的影響',
          '準備品鑑一款左岸與一款右岸酒款進行對比'
        ]
      },
      {
        action: '繼續學習',
        items: [
          '進入L1-2：品種與混釀基礎',
          '深入了解Cabernet Sauvignon與Merlot的特性',
          '探索波爾多的混釀哲學'
        ]
      }
    ],
    certificate: '您已獲得本課程學習證明',
    reflection: {
      title: '課程反思',
      questions: [
        '為什麼河流對波爾多葡萄酒產區如此重要？',
        '左岸與右岸的根本差異是什麼？',
        '您對左岸還是右岸更感興趣？為什麼？'
      ]
    },
    keyInsight: '波爾多的地理劃分不僅是地圖上的線條，更是風土哲學的體現。左岸的砂礫與Cabernet Sauvignon造就強勁骨架，右岸的黏土與Merlot帶來柔美圓潤，理解這個基礎劃分，就是理解波爾多葡萄酒的起點。',
    shareMessage: '我剛完成了波爾多葡萄酒Level 1的第一課「左岸與右岸概覽」！現在我能分辨波爾多的地理劃分了！🗺️🍷 #波爾多 #左岸右岸 #葡萄酒學習'
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
            "question": "波爾多位於法國的哪個方向？",
            "options": [
              "A. 東北部",
              "B. 西南部",
              "C. 中部",
              "D. 東南部"
            ],
            "correct": 1,
            "explanation": "波爾多位於法國西南部，北緯44-45度之間，距大西洋約60公里，得天獨厚的地理位置造就了其溫和的海洋性氣候。"
          },
          {
            "type": "single",
            "question": "波爾多最重要的河流是哪條？",
            "options": [
              "A. 塞納河（Seine）",
              "B. 吉隆河（Gironde）",
              "C. 隆河（Rhône）",
              "D. 盧瓦爾河（Loire）"
            ],
            "correct": 1,
            "explanation": "吉隆河（Gironde）河口是波爾多的核心地理特徵，由加龍河和多爾多涅河匯合而成，「左岸」和「右岸」的劃分以此為基準。"
          },
          {
            "type": "multiple",
            "question": "以下哪些河流流經波爾多產區？（多選）",
            "options": [
              "A. 加龍河（Garonne）",
              "B. 多爾多涅河（Dordogne）",
              "C. 索恩河（Saône）",
              "D. 吉隆河（Gironde）"
            ],
            "correct": [
              0,
              1,
              3
            ],
            "explanation": "波爾多三大河流系統：加龍河（左岸西側）、多爾多涅河（右岸北側）和兩河匯合形成的吉隆河（Gironde），索恩河位於布根地，不在波爾多。"
          },
          {
            "type": "single",
            "question": "左岸（Left Bank）和右岸（Right Bank）以什麼為基準劃分？",
            "options": [
              "A. 城市波爾多中心",
              "B. 吉隆河/加龍河的西東兩側",
              "C. 以山脊線為界",
              "D. 以高速公路為界"
            ],
            "correct": 1,
            "explanation": "波爾多的「左岸」是指吉隆河/加龍河的西（左）岸，包含梅多克和格拉夫；「右岸」是東（右）岸，包含波美侯和聖愛美濃。面向河流下游，左手邊為左岸。"
          },
          {
            "type": "single",
            "question": "波爾多「兩海之間（Entre-Deux-Mers）」指的是什麼？",
            "options": [
              "A. 同時面向大西洋和地中海",
              "B. 加龍河和多爾多涅河之間的三角地帶",
              "C. 波爾多城東西兩側的海峽",
              "D. 左岸和右岸之間的地帶"
            ],
            "correct": 1,
            "explanation": "「兩海之間」（Entre-Deux-Mers）是加龍河和多爾多涅河之間的三角地帶，字面意思是「兩河之間」（被誤譯為兩海），以清爽的白酒著稱，是波爾多最大的白酒 AOC。"
          }
        ]
      }
    }
  }
]

export default lessonContent
