/**
 * L1-2 波爾多氣候與環境基礎
 * 探索影響波爾多葡萄酒品質的自然環境因素
 */

import { bordeauxClimateData } from '../datasets/bordeaux-climate.js'

export const lessonContent = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          葡萄酒是自然的產物，而氣候是決定葡萄酒風格最關鍵的自然因素之一。波爾多擁有得天獨厚的溫帶海洋性氣候——溫暖但不炎熱、濕潤但不過分、四季分明但變化溫和。這樣的氣候條件，為卡本內蘇維濃、梅洛等葡萄品種創造了理想的生長環境。
        </p>

        <p class="intro-context">
          本課程將帶您深入探索波爾多的氣候與環境特徵。我們將學習溫帶海洋性氣候的成因與特點、大西洋與墨西哥灣暖流的調節作用、松樹林的保護效應，以及年平均溫度、降雨量、日照時數等關鍵氣候數據。更重要的是，我們將理解這些氣候因素如何影響葡萄的生長週期與果實品質。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🌡️ 掌握波爾多氣候特徵</h4>
            <p>理解溫帶海洋性氣候的定義、特點與優勢</p>
          </div>

          <div class="point-item">
            <h4>🌊 學習海洋調節機制</h4>
            <p>認識大西洋、墨西哥灣暖流如何影響波爾多的溫度與濕度</p>
          </div>

          <div class="point-item">
            <h4>🌲 理解地形與植被的作用</h4>
            <p>學習松樹林帶如何保護葡萄園免受海風與鹽霧侵害</p>
          </div>

          <div class="point-item">
            <h4>📊 分析氣候數據</h4>
            <p>掌握年均溫、降雨、日照等關鍵數據及其對葡萄種植的意義</p>
          </div>

          <div class="point-item">
            <h4>🍇 理解氣候-葡萄的關聯</h4>
            <p>學習不同氣候條件如何影響葡萄的糖度、酸度、單寧與風味</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠專業地描述波爾多的氣候特徵，並理解氣候因素如何塑造波爾多葡萄酒的獨特風格。
        </p>
      </div>
    `
  },

  // ========== 第一章：氣候基礎特徵 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '氣候基礎特徵',
    subtitle: '溫帶海洋性氣候的核心要素',
    icon: '🌡️',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  {
    component: 'SlideFranceBordeaux',
    title: '溫帶海洋性氣候 — 波爾多位置',
    duration: '15分鐘',
    level: '初級',
    courseIntro: '探索影響波爾多葡萄酒品質的自然環境因素',
    highlights: [
      { id: 1, icon: '🌊', title: '海洋性氣候', content: '受大西洋影響，波爾多氣候溫和，夏季不過熱' },
      { id: 2, icon: '📍', title: '地理位置', content: '位於法國西南部，距大西洋約60km，海洋調節顯著' }
    ],
    content: `<div class="slide-intro">此投影片展示波爾多在法國的位置，並可操作地圖以檢視海洋影響範圍與鄰近產區。</div>`,
    // 交由 SlideFranceBordeaux 組件控制地圖顯示
  },
  {
    title: '溫帶海洋性氣候 — 溫度特徵',
    type: 'chart',
    chartType: 'line',
    description: '基於Bordeaux-Mérignac氣象站30年平均數據（1991-2020）',
    highlights: [
      { id: 1, icon: '🌡️', title: '溫和氣候', content: '年均溫12.7°C，生長季溫暖但不炎熱' },
      { id: 2, icon: '📈', title: '穩定變化', content: '冬季6°C，夏季21°C，溫差適中' }
    ],
    data: {
      labels: bordeauxClimateData.常態.月份.map(m => m.月),
      datasets: [
        {
          label: '月均溫 (°C)',
          type: 'line',
          color: '#e53935',
          data: bordeauxClimateData.常態.月份.map(m => m.每月平均氣溫)
        }
      ]
    },
    insights: [
      '年均溫約12.7°C，最熱月（7月）20.7°C，最冷月（1月）6.0°C',
      '生長季（4-10月）溫度11.5-20.7°C，適合葡萄緩慢成熟',
      '溫度變化溫和，避免過快成熟，保持酸度平衡',
      '冬季溫度5-7°C，提供葡萄樹必要的休眠期'
    ],
    quiz: {
      question: '波爾多生長季（4-10月）的平均溫度範圍是多少？',
      options: ['8-15°C', '11.5-20.7°C', '15-25°C', '18-30°C'],
      correct: 1,
      explanation: '波爾多生長季（4-10月）溫度約在11.5-20.7°C之間，這個溫度範圍適合葡萄緩慢穩定成熟，有利於風味物質發展。'
    }
  },
  {
    title: '溫帶海洋性氣候 — 降雨特徵',
    type: 'chart',
    chartType: 'bar',
    description: '年降雨量約885mm，秋冬季節降雨較多',
    highlights: [
      { id: 1, icon: '💧', title: '秋季多雨', content: '10-11月降雨最多，需謹慎管理採收' },
      { id: 2, icon: '🌞', title: '夏季乾燥', content: '6-8月降雨較少，可能需要補充灌溉' }
    ],
    data: {
      labels: bordeauxClimateData.常態.月份.map(m => m.月),
      datasets: [
        {
          label: '月降雨量 (mm)',
          type: 'bar',
          color: '#42a5f5',
          data: bordeauxClimateData.常態.月份.map(m => m.每月降雨量)
        }
      ]
    },
    insights: [
      '年總降雨量約885mm，分布相對均勻',
      '秋季（10-11月）降雨最多（95-110mm），增加採收期風險',
      '夏季（6-8月）降雨較少（50-60mm），有利於果實成熟',
      '春季（3-5月）降雨適中（60-75mm），滿足生長需求但需注意病害'
    ],
    quiz: {
      question: '波爾多哪個季節的降雨量最多？',
      options: ['春季（3-5月）', '夏季（6-8月）', '秋季（10-11月）', '冬季（12-2月）'],
      correct: 2,
      explanation: '波爾多秋季（10-11月）降雨量最多，達到95-110mm，這對採收期管理是一個重要挑戰，需要精確把握採收時機。'
    }
  },
  {
    title: '葡萄園水分管理',
    highlights: [
      { id: 1, icon: '💧', title: '灌溉技術', content: '滴灌系統精準控制水分供應，應對夏季乾燥期' }
    ],
    content: `<div class="irrigation-section">
      <p class="lead-text">波爾多部分產區在乾燥年份採用精準灌溉技術，確保葡萄生長所需的穩定水分供應。</p>
      <div class="course-image-block">
        <img src="/images/courses/滴灌系統配置.png" alt="滴灌系統配置" class="course-img" />
        <p class="img-caption">▲ 葡萄園滴灌系統配置示意</p>
      </div>
    </div>`,
    hasMap: false
  },
  {
    title: '溫帶海洋性氣候 — 光照與濕度',
    type: 'chart',
    chartType: 'bar',
    description: '充足的光照促進葡萄糖分積累與風味發展',
    highlights: [
      { id: 1, icon: '☀️', title: '夏季充足', content: '7月日照達240小時，光合作用旺盛' },
      { id: 2, icon: '🌤️', title: '年總時數', content: '約1,790小時，滿足優質葡萄生長需求' }
    ],
    data: {
      labels: bordeauxClimateData.常態.月份.map(m => m.月),
      datasets: [
        {
          label: '日照時數 (小時)',
          type: 'bar',
          color: '#ffa726',
          data: bordeauxClimateData.常態.月份.map(m => m.每月日照時數)
        }
      ]
    },
    insights: [
      '年總日照約1,790小時，充足但不過度',
      '7月日照最多（240小時），促進葡萄成熟和糖分積累',
      '冬季日照較少（60-90小時），葡萄樹進入休眠',
      '生長季日照充足，有利於糖分積累和酚類物質合成'
    ],
    quiz: {
      question: '波爾多哪個月份的日照時數最多？',
      options: ['5月', '6月', '7月', '8月'],
      correct: 2,
      explanation: '波爾多7月的日照時數最多，達到約240小時，這個充足的光照促進葡萄的光合作用，有利於糖分積累和風味物質發展。'
    }
  },

  // ========== 第二章：水系調節與生長週期 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '水系調節與生長週期',
    subtitle: '河流系統與葡萄的年度循環',
    icon: '💧',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  {
    component: 'SlideRiversSystem',
    title: '河流系統的氣候調節作用',
    highlights: [
      { id: 1, icon: '💧', title: '水體調節', content: '河流和河口調節溫度變化，減少極端天氣' },
      { id: 2, icon: '🌬️', title: '微氣候', content: '不同區域形成獨特的微氣候環境' }
    ],
    content: `<div class="river-climate">
      <p class="lead-text">波爾多的河流系統不僅塑造了地形，更是重要的氣候調節器，對葡萄園微氣候產生深遠影響。</p>
      <div class="river-climate-effects">
        <div class="effect-item">
          <h4>🌊 三條主要河流</h4>
          <ul>
            <li><strong>加龍河 (Garonne)：</strong>來自庇里牛斯山脈，流經左岸產區</li>
            <li><strong>多爾多涅河 (Dordogne)：</strong>來自中央高原，沿岸分佈右岸產區</li>
            <li><strong>吉隆德河 (Gironde)：</strong>兩河匯合形成的河口，直通大西洋</li>
          </ul>
        </div>
        <div class="effect-item">
          <h4>🌡️ 溫度調節功能</h4>
          <ul>
            <li><strong>熱容量效應：</strong>水體吸收白天熱量，夜間釋放，減少溫度波動</li>
            <li><strong>霜凍保護：</strong>春季水體儲熱，降低霜凍風險</li>
            <li><strong>夏季降溫：</strong>河流蒸發帶走熱量，避免極端高溫</li>
            <li><strong>日夜溫差：</strong>適度的溫差有利於糖分和風味物質積累</li>
          </ul>
        </div>
        <div class="effect-item">
          <h4>💨 濕度與空氣循環</h4>
          <ul>
            <li><strong>濕度調節：</strong>河流蒸發提供適度濕度，避免過度乾燥</li>
            <li><strong>空氣流動：</strong>河谷地形促進空氣循環，減少病害風險</li>
            <li><strong>晨霧現象：</strong>有利於貴腐菌（Botrytis）生長，生產甜酒</li>
            <li><strong>通風效果：</strong>降低葡萄園濕度，預防黴菌病害</li>
          </ul>
        </div>
        <div class="effect-item">
          <h4>🗺️ 微氣候差異</h4>
          <ul>
            <li><strong>左岸微氣候：</strong>加龍河調節，砂礫土壤排水快，溫度略高</li>
            <li><strong>右岸微氣候：</strong>多爾多涅河影響，黏土保水，溫度略涼</li>
            <li><strong>河口區域：</strong>海洋性影響最強，氣候最為溫和</li>
            <li><strong>內陸區域：</strong>大陸性特徵漸增，溫差略大</li>
          </ul>
        </div>
      </div>
      <div class="river-viticulture">
        <h4>🍇 對葡萄種植的實際影響</h4>
        <ul>
          <li><strong>品種選擇：</strong>不同微氣候適合不同葡萄品種</li>
          <li><strong>成熟時序：</strong>河流調節影響葡萄成熟速度</li>
          <li><strong>病害管理：</strong>通風條件影響病害防治策略</li>
          <li><strong>採收決策：</strong>微氣候差異決定最佳採收時間</li>
        </ul>
      </div>
    </div>`,
    quiz: {
      question: '波爾多的河流系統對葡萄園最重要的氣候調節作用是什麼？',
      options: ['增加降雨量', '調節溫度變化', '提高光照強度', '改變土壤成分'],
      correct: 1,
      explanation: '河流系統通過水體的熱容量效應，能夠吸收白天的熱量並在夜間釋放，有效調節溫度變化，減少極端天氣對葡萄生長的影響。'
    }
  },
  {
    title: '葡萄生長週期 — 全年12個月',
    highlights: [
      { id: 1, icon: '🔄', title: '完整週期', content: '12個月涵蓋休眠、生長、成熟、採收四大階段' },
      { id: 2, icon: '🌡️', title: '溫度驅動', content: '季節溫度變化主導葡萄生長節奏' }
    ],
    content: `<div class="grape-growth-cycle-enhanced">
      <p class="lead-text">波爾多葡萄從休眠到採收的完整年度週期 — 12個月生長時鐘</p>
      <div class="course-image-block">
        <img src="/images/courses/葡萄藤生長階段圖.png" alt="葡萄藤生長階段圖" class="course-img" />
        <p class="img-caption">▲ 葡萄藤年度生長階段示意圖</p>
      </div>
      
      <!-- 圓形時鐘式布局 -->
      <div class="cycle-clock-container">
        <div class="cycle-clock">
          <!-- 中心圓 -->
          <div class="clock-center">
            <div class="center-icon">🍇</div>
            <div class="center-text">波爾多<br>葡萄週期</div>
          </div>
          
          <!-- 12個月份扇形區域 -->
          <div class="month-segment seg-1 dormant" data-month="1月" style="--angle: 0deg;">
            <div class="segment-content">
              <div class="month-name">1月</div>
              <div class="phase-name">休眠期</div>
              <div class="temp-badge">6°C</div>
            </div>
          </div>
          
          <div class="month-segment seg-2 dormant" data-month="2月" style="--angle: 30deg;">
            <div class="segment-content">
              <div class="month-name">2月</div>
              <div class="phase-name">修剪期</div>
              <div class="temp-badge">7°C</div>
            </div>
          </div>
          
          <div class="month-segment seg-3 spring" data-month="3月" style="--angle: 60deg;">
            <div class="segment-content">
              <div class="month-name">3月</div>
              <div class="phase-name">萌芽準備</div>
              <div class="temp-badge">9°C</div>
            </div>
          </div>
          
          <div class="month-segment seg-4 spring" data-month="4月" style="--angle: 90deg;">
            <div class="segment-content">
              <div class="month-name">4月</div>
              <div class="phase-name">萌芽期</div>
              <div class="temp-badge">12°C</div>
            </div>
          </div>
          
          <div class="month-segment seg-5 spring" data-month="5月" style="--angle: 120deg;">
            <div class="segment-content">
              <div class="month-name">5月</div>
              <div class="phase-name">開花期</div>
              <div class="temp-badge">15°C</div>
            </div>
          </div>
          
          <div class="month-segment seg-6 summer" data-month="6月" style="--angle: 150deg;">
            <div class="segment-content">
              <div class="month-name">6月</div>
              <div class="phase-name">坐果期</div>
              <div class="temp-badge">19°C</div>
            </div>
          </div>
          
          <div class="month-segment seg-7 summer" data-month="7月" style="--angle: 180deg;">
            <div class="segment-content">
              <div class="month-name">7月</div>
              <div class="phase-name">膨大期</div>
              <div class="temp-badge">21°C</div>
            </div>
          </div>
          
          <div class="month-segment seg-8 summer" data-month="8月" style="--angle: 210deg;">
            <div class="segment-content">
              <div class="month-name">8月</div>
              <div class="phase-name">轉色期</div>
              <div class="temp-badge">21°C</div>
            </div>
          </div>
          
          <div class="month-segment seg-9 harvest" data-month="9月" style="--angle: 240deg;">
            <div class="segment-content">
              <div class="month-name">9月</div>
              <div class="phase-name">成熟期</div>
              <div class="temp-badge">18°C</div>
            </div>
          </div>
          
          <div class="month-segment seg-10 harvest" data-month="10月" style="--angle: 270deg;">
            <div class="segment-content">
              <div class="month-name">10月</div>
              <div class="phase-name">採收期</div>
              <div class="temp-badge">14°C</div>
            </div>
          </div>
          
          <div class="month-segment seg-11 autumn" data-month="11月" style="--angle: 300deg;">
            <div class="segment-content">
              <div class="month-name">11月</div>
              <div class="phase-name">落葉期</div>
              <div class="temp-badge">10°C</div>
            </div>
          </div>
          
          <div class="month-segment seg-12 dormant" data-month="12月" style="--angle: 330deg;">
            <div class="segment-content">
              <div class="month-name">12月</div>
              <div class="phase-name">深度休眠</div>
              <div class="temp-badge">7°C</div>
            </div>
          </div>
        </div>
        
        <!-- 季節標記 -->
        <div class="season-markers">
          <div class="season-marker spring-marker" style="top: 20%; right: 5%;">🌱 春季</div>
          <div class="season-marker summer-marker" style="bottom: 20%; right: 5%;">☀️ 夏季</div>
          <div class="season-marker harvest-marker" style="bottom: 20%; left: 5%;">🍇 秋季</div>
          <div class="season-marker winter-marker" style="top: 20%; left: 5%;">❄️ 冬季</div>
        </div>
      </div>
      
      <!-- 詳細月份信息表 -->
      <div class="monthly-details-table">
        <h4>📅 逐月生長詳情</h4>
        <table class="details-table">
          <thead>
            <tr>
              <th>月份</th>
              <th>階段</th>
              <th>溫度</th>
              <th>主要活動</th>
              <th>管理重點</th>
            </tr>
          </thead>
          <tbody>
            <tr class="dormant-row">
              <td><strong>1月</strong></td>
              <td>休眠期</td>
              <td>6°C</td>
              <td>葡萄樹深度休眠，樹液停止流動</td>
              <td>觀察樹體健康</td>
            </tr>
            <tr class="dormant-row">
              <td><strong>2月</strong></td>
              <td>修剪期</td>
              <td>7°C</td>
              <td>冬季修剪，決定來年產量</td>
              <td>精準修剪、病害預防</td>
            </tr>
            <tr class="spring-row">
              <td><strong>3月</strong></td>
              <td>萌芽準備</td>
              <td>9°C</td>
              <td>樹液開始流動，芽點膨大</td>
              <td>土壤管理、施肥</td>
            </tr>
            <tr class="spring-row">
              <td><strong>4月</strong></td>
              <td>萌芽期</td>
              <td>12°C</td>
              <td>新芽萌發，嫩葉展開</td>
              <td>霜凍防護、病害監控</td>
            </tr>
            <tr class="spring-row">
              <td><strong>5月</strong></td>
              <td>開花期</td>
              <td>15°C</td>
              <td>葡萄開花，授粉決定產量</td>
              <td>花期保護、疏花</td>
            </tr>
            <tr class="summer-row">
              <td><strong>6月</strong></td>
              <td>坐果期</td>
              <td>19°C</td>
              <td>果實形成，快速膨大</td>
              <td>疏果、葉幕管理</td>
            </tr>
            <tr class="summer-row">
              <td><strong>7月</strong></td>
              <td>膨大期</td>
              <td>21°C</td>
              <td>果實快速生長，需水分</td>
              <td>灌溉控制、病害防治</td>
            </tr>
            <tr class="summer-row">
              <td><strong>8月</strong></td>
              <td>轉色期</td>
              <td>21°C</td>
              <td>葡萄變色，積累糖分</td>
              <td>控水控氮、品質提升</td>
            </tr>
            <tr class="harvest-row">
              <td><strong>9月</strong></td>
              <td>成熟期</td>
              <td>18°C</td>
              <td>糖酸平衡，風味發展</td>
              <td>成熟度監測、採收準備</td>
            </tr>
            <tr class="harvest-row">
              <td><strong>10月</strong></td>
              <td>採收期</td>
              <td>14°C</td>
              <td>葡萄採收，品質達巔峰</td>
              <td>精準採收、快速處理</td>
            </tr>
            <tr class="autumn-row">
              <td><strong>11月</strong></td>
              <td>落葉期</td>
              <td>10°C</td>
              <td>葉片脫落，養分回流</td>
              <td>清園、土壤改良</td>
            </tr>
            <tr class="dormant-row">
              <td><strong>12月</strong></td>
              <td>深度休眠</td>
              <td>7°C</td>
              <td>進入冬季休眠，儲備能量</td>
              <td>設備維護、計劃來年</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- 溫度曲線圖 -->
      <div class="temperature-curve">
        <h4>🌡️ 全年溫度變化曲線</h4>
        <div class="curve-chart">
          <svg viewBox="0 0 600 150" class="temp-svg">
            <!-- 網格線 -->
            <line x1="50" y1="20" x2="50" y2="130" stroke="#ddd" stroke-width="2"/>
            <line x1="50" y1="130" x2="570" y2="130" stroke="#ddd" stroke-width="2"/>
            
            <!-- 溫度曲線 -->
            <polyline points="50,110 95,105 140,90 185,70 230,45 275,25 320,15 365,15 410,30 455,60 500,90 545,105 570,110" 
                      fill="none" stroke="#e53935" stroke-width="3"/>
            
            <!-- 數據點 -->
            <circle cx="50" cy="110" r="4" fill="#e53935"/>
            <circle cx="95" cy="105" r="4" fill="#e53935"/>
            <circle cx="140" cy="90" r="4" fill="#66BB6A"/>
            <circle cx="185" cy="70" r="4" fill="#66BB6A"/>
            <circle cx="230" cy="45" r="4" fill="#66BB6A"/>
            <circle cx="275" cy="25" r="4" fill="#FF9800"/>
            <circle cx="320" cy="15" r="4" fill="#FF9800"/>
            <circle cx="365" cy="15" r="4" fill="#FF9800"/>
            <circle cx="410" cy="30" r="4" fill="#EF5350"/>
            <circle cx="455" cy="60" r="4" fill="#EF5350"/>
            <circle cx="500" cy="90" r="4" fill="#8D6E63"/>
            <circle cx="545" cy="105" r="4" fill="#78909C"/>
            
            <!-- 月份標籤 -->
            <text x="50" y="145" text-anchor="middle" font-size="11">1月</text>
            <text x="95" y="145" text-anchor="middle" font-size="11">2月</text>
            <text x="140" y="145" text-anchor="middle" font-size="11">3月</text>
            <text x="185" y="145" text-anchor="middle" font-size="11">4月</text>
            <text x="230" y="145" text-anchor="middle" font-size="11">5月</text>
            <text x="275" y="145" text-anchor="middle" font-size="11">6月</text>
            <text x="320" y="145" text-anchor="middle" font-size="11">7月</text>
            <text x="365" y="145" text-anchor="middle" font-size="11">8月</text>
            <text x="410" y="145" text-anchor="middle" font-size="11">9月</text>
            <text x="455" y="145" text-anchor="middle" font-size="11">10月</text>
            <text x="500" y="145" text-anchor="middle" font-size="11">11月</text>
            <text x="545" y="145" text-anchor="middle" font-size="11">12月</text>
            
            <!-- 溫度標籤 -->
            <text x="45" y="25" text-anchor="end" font-size="10">21°C</text>
            <text x="45" y="75" text-anchor="end" font-size="10">12°C</text>
            <text x="45" y="115" text-anchor="end" font-size="10">6°C</text>
          </svg>
        </div>
      </div>
      
      <style scoped>
        .grape-growth-cycle-enhanced {
          max-width: 100%;
          padding: 20px;
        }
        
        /* 圓形時鐘布局 */
        .cycle-clock-container {
          position: relative;
          width: 500px;
          height: 500px;
          margin: 40px auto;
        }
        
        .cycle-clock {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(circle, #f5f5f5 0%, #e0e0e0 100%);
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }
        
        .clock-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
          background: white;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          z-index: 10;
        }
        
        .center-icon {
          font-size: 32px;
          margin-bottom: 8px;
        }
        
        .center-text {
          font-size: 13px;
          font-weight: bold;
          text-align: center;
          line-height: 1.3;
          color: #333;
        }
        
        .month-segment {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 180px;
          height: 80px;
          transform-origin: left center;
          transform: rotate(var(--angle)) translateX(60px);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .month-segment:hover {
          transform: rotate(var(--angle)) translateX(60px) scale(1.1);
          z-index: 5;
        }
        
        .segment-content {
          background: linear-gradient(135deg, var(--seg-color-1), var(--seg-color-2));
          padding: 8px 12px;
          border-radius: 8px;
          border: 2px solid var(--seg-border);
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          text-align: center;
        }
        
        .month-segment.dormant .segment-content {
          --seg-color-1: #90A4AE;
          --seg-color-2: #78909C;
          --seg-border: #607D8B;
          color: white;
        }
        
        .month-segment.spring .segment-content {
          --seg-color-1: #A5D6A7;
          --seg-color-2: #66BB6A;
          --seg-border: #4CAF50;
          color: #1B5E20;
        }
        
        .month-segment.summer .segment-content {
          --seg-color-1: #FFE082;
          --seg-color-2: #FF9800;
          --seg-border: #F57C00;
          color: #E65100;
        }
        
        .month-segment.harvest .segment-content {
          --seg-color-1: #EF5350;
          --seg-color-2: #D32F2F;
          --seg-border: #C62828;
          color: white;
        }
        
        .month-segment.autumn .segment-content {
          --seg-color-1: #BCAAA4;
          --seg-color-2: #8D6E63;
          --seg-border: #6D4C41;
          color: white;
        }
        
        .month-name {
          font-weight: bold;
          font-size: 14px;
          margin-bottom: 4px;
        }
        
        .phase-name {
          font-size: 11px;
          margin-bottom: 4px;
        }
        
        .temp-badge {
          font-size: 13px;
          font-weight: bold;
          background: rgba(255,255,255,0.3);
          padding: 2px 6px;
          border-radius: 4px;
          display: inline-block;
        }
        
        .season-markers {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        
        .season-marker {
          position: absolute;
          font-size: 16px;
          font-weight: bold;
          padding: 8px 12px;
          background: rgba(255,255,255,0.9);
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        
        .spring-marker { color: #4CAF50; }
        .summer-marker { color: #FF9800; }
        .harvest-marker { color: #D32F2F; }
        .winter-marker { color: #607D8B; }
        
        /* 詳細信息表 */
        .monthly-details-table {
          margin: 40px 0;
        }
        
        .details-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 16px;
          font-size: 13px;
        }
        
        .details-table th {
          background: #424242;
          color: white;
          padding: 12px 8px;
          text-align: left;
          font-weight: 600;
        }
        
        .details-table td {
          padding: 10px 8px;
          border-bottom: 1px solid #e0e0e0;
        }
        
        .details-table tbody tr:hover {
          background: #f5f5f5;
        }
        
        .dormant-row { border-left: 4px solid #78909C; }
        .spring-row { border-left: 4px solid #66BB6A; }
        .summer-row { border-left: 4px solid #FF9800; }
        .harvest-row { border-left: 4px solid #EF5350; }
        .autumn-row { border-left: 4px solid #8D6E63; }
        
        /* 溫度曲線 */
        .temperature-curve {
          margin: 40px 0;
        }
        
        .curve-chart {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .temp-svg {
          width: 100%;
          height: auto;
        }
      </style>
    </div>`,
    hasMap: false,
    quiz: {
      question: '波爾多葡萄的轉色期（Véraison）通常發生在哪個月份？',
      options: ['6月', '7月', '8月', '9月'],
      correct: 2,
      explanation: '波爾多葡萄的轉色期通常發生在8月，這是葡萄開始變色和積累糖分的關鍵階段，標誌著成熟期的開始。'
    }
  }
]

// 附加項：氣候風險清單
lessonContent.push(
  // ========== 第三章：風險與應對 ==========
  {
    type: 'chapter-divider',
    chapter: '3',
    title: '風險與應對',
    subtitle: '氣候挑戰與管理策略',
    icon: '⚠️',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    title: '氣候風險清單與應對策略',
    highlights: [
      { id: 1, icon: '⚠️', title: '氣候挑戰', content: '春季霜凍、夏季乾旱、秋季降雨等風險' },
      { id: 2, icon: '🛡️', title: '應對措施', content: '現代技術與傳統知識結合的風險管理' }
    ],
    content: `<div class="climate-risks">
      <p class="lead-text">儘管波爾多氣候總體適宜葡萄種植，但仍面臨多種氣候風險，需要謹慎管理和應對。</p>
      <div class="risks-list">
        <div class="risk-item">
          <h4>❄️ 春季霜凍風險</h4>
          <p><strong>風險描述：</strong>4月仍可能出現霜凍，損害新芽和花朵</p>
          <p><strong>影響：</strong>減少當年產量，嚴重時可導致絕收</p>
          <p><strong>應對措施：</strong></p>
          <ul>
            <li>霜凍蠟燭或加熱器</li>
            <li>灑水系統（冰層保護）</li>
            <li>延遲修剪策略</li>
            <li>選擇抗霜凍品種或rootstock</li>
          </ul>
        </div>
        <div class="risk-item">
          <h4>☀️ 夏季乾旱與熱浪</h4>
          <p><strong>風險描述：</strong>極端高溫和乾旱影響葡萄生長</p>
          <p><strong>影響：</strong>葡萄過早成熟、酸度下降、風味失衡</p>
          <p><strong>應對措施：</strong></p>
          <ul>
            <li>精準灌溉系統</li>
            <li>葉片管理（適度遮陰）</li>
            <li>土壤覆蓋物保水</li>
            <li>選擇耐旱rootstock</li>
          </ul>
        </div>
        <div class="risk-item">
          <h4>🌧️ 秋季降雨風險</h4>
          <p><strong>風險描述：</strong>採收期降雨導致果實膨脹和病害</p>
          <p><strong>影響：</strong>稀釋糖分、增加病害風險、影響酒質</p>
          <p><strong>應對措施：</strong></p>
          <ul>
            <li>精確成熟度監測</li>
            <li>快速採收決策</li>
            <li>分批採收策略</li>
            <li>光學分選技術</li>
          </ul>
        </div>
        <div class="risk-item">
          <h4>🦠 病害壓力</h4>
          <p><strong>風險描述：</strong>濕潤氣候易引發黴菌病害</p>
          <p><strong>影響：</strong>黴病、白粉病等影響產量和品質</p>
          <p><strong>應對措施：</strong></p>
          <ul>
            <li>預防性噴灑（有機或傳統）</li>
            <li>葉片管理促進通風</li>
            <li>抗病品種選擇</li>
            <li>生物防治方法</li>
          </ul>
        </div>
      </div>
      <div class="course-image-row">
        <div class="course-image-block">
          <img src="/images/courses/冬季修剪技術.png" alt="冬季修剪技術" class="course-img" />
          <p class="img-caption">▲ 冬季修剪技術示範</p>
        </div>
        <div class="course-image-block">
          <img src="/images/courses/病蟲害鑑別圖.png" alt="病蟲害鑑別圖" class="course-img" />
          <p class="img-caption">▲ 常見病蟲害鑑別圖</p>
        </div>
      </div>
      <div class="climate-adaptation">
        <h4>🌍 氣候變遷適應策略</h4>
        <ul>
          <li><strong>品種調整：</strong>引入耐熱品種或調整混釀比例</li>
          <li><strong>採收時間：</strong>提前採收以保持酸度和新鮮度</li>
          <li><strong>灌溉管理：</strong>精準控制水分壓力</li>
          <li><strong>葡萄園朝向：</strong>選擇較涼爽的朝向或海拔</li>
          <li><strong>技術創新：</strong>使用氣象站、衛星監測等現代工具</li>
        </ul>
      </div>
    </div>`,
    hasMap: false
  },
  {
    title: '為什麼梅洛（Merlot）相對易熟？',
    highlights: [
      { id: 1, icon: '⏱️', title: '生理時序較早', content: '梅洛萌芽與轉色普遍早於Cabernet Sauvignon' },
      { id: 2, icon: '🧪', title: '糖酸動態', content: '糖分累積較快、酸度下降較早' }
    ],
    content: `<div class="merlot-early-ripening">
      <p class="lead-text">梅洛（Merlot）是波爾多最重要的葡萄品種之一，其相對早熟的特性使其特別適合某些產區和氣候條件。</p>
      <div class="merlot-characteristics">
        <div class="char-item">
          <h4>🌸 生長週期特點</h4>
          <ul>
            <li><strong>萌芽時間：</strong>比Cabernet Sauvignon早約1週</li>
            <li><strong>開花時間：</strong>較早開花，授粉期較長</li>
            <li><strong>轉色期：</strong>7月底至8月初開始轉色</li>
            <li><strong>採收時間：</strong>通常在9月中旬，比Cabernet Sauvignon早2-3週</li>
          </ul>
        </div>
        <div class="char-item">
          <h4>🧬 品種生理特性</h4>
          <ul>
            <li><strong>果皮較薄：</strong>更容易積累糖分，但也更易受病害影響</li>
            <li><strong>果粒較大：</strong>水分含量較高，糖分濃度相對較低</li>
            <li><strong>酸度下降快：</strong>成熟過程中酸度下降速度較快</li>
            <li><strong>單寧較柔：</strong>單寧含量較低且較柔和</li>
          </ul>
        </div>
        <div class="char-item">
          <h4>🌍 氣候適應性</h4>
          <ul>
            <li><strong>右岸優勢：</strong>黏土土壤保水性好，適合Merlot生長</li>
            <li><strong>涼爽產區：</strong>早熟特性讓其在較涼爽產區也能成熟</li>
            <li><strong>霜凍風險：</strong>早萌芽增加春季霜凍風險</li>
            <li><strong>採收窗口：</strong>秋季降雨前完成採收的機會較大</li>
          </ul>
        </div>
        <div class="char-item">
          <h4>🍷 風味與品質影響</h4>
          <ul>
            <li><strong>果味豐富：</strong>黑色水果（李子、黑莓）和紅色水果風味</li>
            <li><strong>柔順口感：</strong>單寧柔和，酒體圓潤</li>
            <li><strong>早飲特性：</strong>年輕時即可享用，無需長期陳年</li>
            <li><strong>混釀角色：</strong>為混釀酒款增添柔順度和果味</li>
          </ul>
        </div>
      </div>
      <div class="comparison-cs">
        <h4>🔄 與 Cabernet Sauvignon 的對比</h4>
        <div class="comparison-intro">
          <p>梅洛與卡本內蘇維濃是波爾多最重要的兩個紅葡萄品種，它們在生理特性、風土需求和釀酒特點上形成互補關係。</p>
        </div>
        
        <table class="comparison-table-enhanced">
          <thead>
            <tr>
              <th class="category-col">對比項目</th>
              <th class="merlot-col">
                <div class="variety-header">
                  <span class="variety-icon">🍇</span>
                  <span class="variety-name">Merlot<br>梅洛</span>
                </div>
              </th>
              <th class="cs-col">
                <div class="variety-header">
                  <span class="variety-icon">🍷</span>
                  <span class="variety-name">Cabernet Sauvignon<br>卡本內蘇維濃</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- 生長週期 -->
            <tr class="section-header">
              <td colspan="3">📅 生長週期與成熟度</td>
            </tr>
            <tr>
              <td class="label-cell">萌芽時間</td>
              <td class="merlot-cell">
                <strong>較早</strong><br>
                <span class="detail">約4月初，提早7-10天</span>
              </td>
              <td class="cs-cell">
                <strong>較晚</strong><br>
                <span class="detail">約4月中旬</span>
              </td>
            </tr>
            <tr>
              <td class="label-cell">開花期</td>
              <td class="merlot-cell">
                <strong>5月下旬</strong><br>
                <span class="detail">花期較短</span>
              </td>
              <td class="cs-cell">
                <strong>6月初</strong><br>
                <span class="detail">花期較長</span>
              </td>
            </tr>
            <tr>
              <td class="label-cell">轉色期</td>
              <td class="merlot-cell">
                <strong>7月底-8月初</strong><br>
                <span class="detail">提早開始積累糖分</span>
              </td>
              <td class="cs-cell">
                <strong>8月中旬</strong><br>
                <span class="detail">轉色較慢</span>
              </td>
            </tr>
            <tr>
              <td class="label-cell">採收時間</td>
              <td class="merlot-cell">
                <strong>9月中旬</strong><br>
                <span class="detail">早採2-3週，避開秋雨</span>
              </td>
              <td class="cs-cell">
                <strong>9月底-10月初</strong><br>
                <span class="detail">需要更長成熟期</span>
              </td>
            </tr>
            <tr>
              <td class="label-cell">成熟所需積溫</td>
              <td class="merlot-cell">
                <strong>較低</strong><br>
                <span class="detail">約2200-2400°C積溫</span>
              </td>
              <td class="cs-cell">
                <strong>較高</strong><br>
                <span class="detail">約2500-2700°C積溫</span>
              </td>
            </tr>
            
            <!-- 果實特性 -->
            <tr class="section-header">
              <td colspan="3">🍇 果實物理與化學特性</td>
            </tr>
            <tr>
              <td class="label-cell">果粒大小</td>
              <td class="merlot-cell">
                <strong>較大</strong><br>
                <span class="detail">平均直徑13-15mm</span>
              </td>
              <td class="cs-cell">
                <strong>較小</strong><br>
                <span class="detail">平均直徑10-12mm</span>
              </td>
            </tr>
            <tr>
              <td class="label-cell">果皮厚度</td>
              <td class="merlot-cell">
                <strong>較薄</strong><br>
                <span class="detail">易受病害，快速萃取</span>
              </td>
              <td class="cs-cell">
                <strong>較厚</strong><br>
                <span class="detail">抗病性強，萃取慢</span>
              </td>
            </tr>
            <tr>
              <td class="label-cell">單寧含量</td>
              <td class="merlot-cell">
                <strong>中等偏低</strong><br>
                <span class="detail">2-3 g/L，柔和圓潤</span>
              </td>
              <td class="cs-cell">
                <strong>高</strong><br>
                <span class="detail">3-5 g/L，結構強勁</span>
              </td>
            </tr>
            <tr>
              <td class="label-cell">酸度水平</td>
              <td class="merlot-cell">
                <strong>中等</strong><br>
                <span class="detail">pH 3.4-3.6</span>
              </td>
              <td class="cs-cell">
                <strong>較高</strong><br>
                <span class="detail">pH 3.3-3.5</span>
              </td>
            </tr>
            <tr>
              <td class="label-cell">糖分累積</td>
              <td class="merlot-cell">
                <strong>較快</strong><br>
                <span class="detail">易達13-14% ABV</span>
              </td>
              <td class="cs-cell">
                <strong>較慢</strong><br>
                <span class="detail">需更長時間達標</span>
              </td>
            </tr>
            
            <!-- 風土需求 -->
            <tr class="section-header">
              <td colspan="3">🌍 風土需求與產區分布</td>
            </tr>
            <tr>
              <td class="label-cell">土壤偏好</td>
              <td class="merlot-cell">
                <strong>黏土為主</strong><br>
                <span class="detail">保水性好，涼爽土壤</span>
              </td>
              <td class="cs-cell">
                <strong>砂礫為主</strong><br>
                <span class="detail">排水佳，溫暖土壤</span>
              </td>
            </tr>
            <tr>
              <td class="label-cell">主要產區</td>
              <td class="merlot-cell">
                <strong>右岸</strong><br>
                <span class="detail">Pomerol、Saint-Émilion</span>
              </td>
              <td class="cs-cell">
                <strong>左岸</strong><br>
                <span class="detail">Médoc、Graves</span>
              </td>
            </tr>
            <tr>
              <td class="label-cell">氣候需求</td>
              <td class="merlot-cell">
                <strong>較寬容</strong><br>
                <span class="detail">涼爽產區也能成熟</span>
              </td>
              <td class="cs-cell">
                <strong>較嚴格</strong><br>
                <span class="detail">需要溫暖完整季節</span>
              </td>
            </tr>
            <tr>
              <td class="label-cell">排水需求</td>
              <td class="merlot-cell">
                <strong>中等</strong><br>
                <span class="detail">可適應保水土壤</span>
              </td>
              <td class="cs-cell">
                <strong>高</strong><br>
                <span class="detail">必須排水良好</span>
              </td>
            </tr>
            
            <!-- 種植風險 -->
            <tr class="section-header">
              <td colspan="3">⚠️ 種植風險與管理</td>
            </tr>
            <tr>
              <td class="label-cell">春季霜凍風險</td>
              <td class="merlot-cell">
                <strong class="risk-high">較高 ⚠️</strong><br>
                <span class="detail">早萌芽增加風險</span>
              </td>
              <td class="cs-cell">
                <strong class="risk-medium">中等</strong><br>
                <span class="detail">晚萌芽較安全</span>
              </td>
            </tr>
            <tr>
              <td class="label-cell">秋季降雨風險</td>
              <td class="merlot-cell">
                <strong class="risk-low">較低 ✓</strong><br>
                <span class="detail">早採收避開秋雨</span>
              </td>
              <td class="cs-cell">
                <strong class="risk-high">較高 ⚠️</strong><br>
                <span class="detail">晚採易受秋雨影響</span>
              </td>
            </tr>
            <tr>
              <td class="label-cell">病害易感性</td>
              <td class="merlot-cell">
                <strong class="risk-high">較高 ⚠️</strong><br>
                <span class="detail">灰黴病、白粉病</span>
              </td>
              <td class="cs-cell">
                <strong class="risk-low">較低 ✓</strong><br>
                <span class="detail">厚皮抗病</span>
              </td>
            </tr>
            <tr>
              <td class="label-cell">產量控制</td>
              <td class="merlot-cell">
                <strong>需嚴格控制</strong><br>
                <span class="detail">易過量影響品質</span>
              </td>
              <td class="cs-cell">
                <strong>相對容易</strong><br>
                <span class="detail">自然產量較低</span>
              </td>
            </tr>
            
            <!-- 釀酒特性 -->
            <tr class="section-header">
              <td colspan="3">🍷 釀酒特性與風格</td>
            </tr>
            <tr>
              <td class="label-cell">主要風味</td>
              <td class="merlot-cell">
                <strong>紅黑色水果</strong><br>
                <span class="detail">李子、黑莓、櫻桃、巧克力</span>
              </td>
              <td class="cs-cell">
                <strong>黑色水果</strong><br>
                <span class="detail">黑醋栗、雪松、鉛筆芯</span>
              </td>
            </tr>
            <tr>
              <td class="label-cell">酒體結構</td>
              <td class="merlot-cell">
                <strong>中等-飽滿</strong><br>
                <span class="detail">柔順圓潤，單寧柔和</span>
              </td>
              <td class="cs-cell">
                <strong>飽滿</strong><br>
                <span class="detail">強勁有力，單寧堅實</span>
              </td>
            </tr>
            <tr>
              <td class="label-cell">陳年潛力</td>
              <td class="merlot-cell">
                <strong>中等</strong><br>
                <span class="detail">5-15年，早飲易親</span>
              </td>
              <td class="cs-cell">
                <strong>高</strong><br>
                <span class="detail">10-30年+，需時間</span>
              </td>
            </tr>
            <tr>
              <td class="label-cell">混釀角色</td>
              <td class="merlot-cell">
                <strong>增添柔順度</strong><br>
                <span class="detail">平衡結構，提升果味</span>
              </td>
              <td class="cs-cell">
                <strong>提供骨架</strong><br>
                <span class="detail">增強結構，延長壽命</span>
              </td>
            </tr>
            <tr>
              <td class="label-cell">橡木桶使用</td>
              <td class="merlot-cell">
                <strong>中等比例</strong><br>
                <span class="detail">30-60% 新桶，12-18月</span>
              </td>
              <td class="cs-cell">
                <strong>高比例</strong><br>
                <span class="detail">50-100% 新桶，18-24月</span>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div class="comparison-summary">
          <h5>💡 關鍵總結</h5>
          <div class="summary-grid">
            <div class="summary-card merlot-card">
              <h6>🍇 Merlot 優勢</h6>
              <ul>
                <li>✓ 早熟適應涼爽氣候</li>
                <li>✓ 避開秋季降雨風險</li>
                <li>✓ 柔順易飲親和力高</li>
                <li>✓ 黏土土壤表現優異</li>
              </ul>
            </div>
            <div class="summary-card cs-card">
              <h6>🍷 Cabernet Sauvignon 優勢</h6>
              <ul>
                <li>✓ 晚萌芽避開霜凍</li>
                <li>✓ 厚皮抗病性強</li>
                <li>✓ 強勁結構陳年潛力</li>
                <li>✓ 砂礫土壤表現卓越</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="viticulture-implications">
        <h4>🌱 種植管理要點</h4>
        <ul>
          <li><strong>霜凍防護：</strong>早萌芽需要加強春季霜凍防護措施</li>
          <li><strong>產量控制：</strong>易產量過高，需要嚴格疏果管理</li>
          <li><strong>採收時機：</strong>精確監測成熟度，避免過熟失去酸度</li>
          <li><strong>病害管理：</strong>果皮較薄易受病害，需要預防性管理</li>
        </ul>
      </div>
      
      <style scoped>
        .merlot-early-ripening {
          max-width: 100%;
          padding: 20px;
        }
        
        .lead-text {
          font-size: 16px;
          line-height: 1.6;
          color: #555;
          margin-bottom: 24px;
          padding: 16px;
          background: #f9f9f9;
          border-left: 4px solid #7B2CBF;
          border-radius: 4px;
        }
        
        .merlot-characteristics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
          margin: 24px 0;
        }
        
        .char-item {
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 16px;
          transition: all 0.3s ease;
        }
        
        .char-item:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transform: translateY(-2px);
        }
        
        .char-item h4 {
          color: #7B2CBF;
          margin-bottom: 12px;
          font-size: 16px;
        }
        
        .char-item ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .char-item li {
          padding: 6px 0;
          line-height: 1.5;
          font-size: 14px;
        }
        
        /* 對比表格增強樣式 */
        .comparison-cs {
          margin: 32px 0;
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        
        .comparison-intro {
          margin-bottom: 20px;
          padding: 12px 16px;
          background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
          border-radius: 8px;
          border-left: 4px solid #7B2CBF;
        }
        
        .comparison-intro p {
          margin: 0;
          font-size: 14px;
          line-height: 1.6;
          color: #444;
        }
        
        .comparison-table-enhanced {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          font-size: 13px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .comparison-table-enhanced thead {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
        }
        
        .comparison-table-enhanced th {
          padding: 16px 12px;
          text-align: center;
          font-weight: 600;
        }
        
        .category-col {
          width: 180px;
          text-align: left !important;
        }
        
        .merlot-col {
          background: linear-gradient(135deg, #7B2CBF 0%, #9333EA 100%) !important;
        }
        
        .cs-col {
          background: linear-gradient(135deg, #C62828 0%, #D32F2F 100%) !important;
        }
        
        .variety-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        
        .variety-icon {
          font-size: 24px;
        }
        
        .variety-name {
          font-size: 13px;
          line-height: 1.3;
          text-align: center;
        }
        
        .comparison-table-enhanced tbody tr {
          border-bottom: 1px solid #e0e0e0;
          transition: background 0.2s;
        }
        
        .comparison-table-enhanced tbody tr:hover {
          background: #f9f9f9;
        }
        
        .section-header {
          background: linear-gradient(135deg, #37474F 0%, #455A64 100%);
          color: white;
          font-weight: bold;
        }
        
        .section-header td {
          padding: 12px;
          font-size: 14px;
          text-align: left;
        }
        
        .label-cell {
          padding: 12px;
          font-weight: 600;
          background: #f5f5f5;
          color: #333;
        }
        
        .merlot-cell {
          padding: 12px;
          background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
          text-align: center;
        }
        
        .cs-cell {
          padding: 12px;
          background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
          text-align: center;
        }
        
        .merlot-cell strong,
        .cs-cell strong {
          display: block;
          font-size: 14px;
          margin-bottom: 4px;
          color: #1a1a1a;
        }
        
        .detail {
          font-size: 12px;
          color: #666;
          line-height: 1.4;
        }
        
        .risk-high {
          color: #C62828;
        }
        
        .risk-medium {
          color: #F57C00;
        }
        
        .risk-low {
          color: #2E7D32;
        }
        
        /* 總結卡片 */
        .comparison-summary {
          margin-top: 24px;
          padding: 20px;
          background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);
          border-radius: 8px;
        }
        
        .comparison-summary h5 {
          margin: 0 0 16px 0;
          color: #333;
          font-size: 16px;
        }
        
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }
        
        .summary-card {
          padding: 16px;
          border-radius: 8px;
          border: 2px solid;
        }
        
        .merlot-card {
          background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
          border-color: #7B2CBF;
        }
        
        .cs-card {
          background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
          border-color: #C62828;
        }
        
        .summary-card h6 {
          margin: 0 0 12px 0;
          font-size: 15px;
          font-weight: bold;
        }
        
        .merlot-card h6 {
          color: #7B2CBF;
        }
        
        .cs-card h6 {
          color: #C62828;
        }
        
        .summary-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .summary-card li {
          padding: 6px 0;
          font-size: 13px;
          line-height: 1.5;
        }
        
        /* 種植管理要點 */
        .viticulture-implications {
          margin-top: 24px;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 8px;
          border-left: 4px solid #2E7D32;
        }
        
        .viticulture-implications h4 {
          color: #2E7D32;
          margin-bottom: 12px;
        }
        
        .viticulture-implications ul {
          list-style: none;
          padding: 0;
        }
        
        .viticulture-implications li {
          padding: 8px 0;
          line-height: 1.6;
          font-size: 14px;
        }
      </style>
    </div>`,
    hasMap: false,
    quiz: {
      question: 'Merlot相比Cabernet Sauvignon的主要早熟特徵是什麼？',
      options: ['採收時間早2-3週', '採收時間晚2-3週', '採收時間相同', '採收時間早1個月'],
      correct: 0,
      explanation: 'Merlot通常在9月中旬採收，比Cabernet Sauvignon早約2-3週。這種早熟特性使其能在秋季降雨來臨前完成採收，降低氣候風險。'
    }
  },

  // 結束頁
  {
    type: 'end',
    title: '課程完成',
    achievement: 'L1-2 品種與混釀基礎 - 波爾多的釀酒哲學',
    description: '恭喜您完成波爾多品種與混釀的基礎學習！您已掌握波爾多最核心的五大紅葡萄品種（Cabernet Sauvignon、Merlot、Cabernet Franc、Petit Verdot、Malbec）與白葡萄品種（Sémillon、Sauvignon Blanc、Muscadelle）的特性。更重要的是，您理解了波爾多獨特的混釀哲學——通過不同品種的組合來平衡風險、提升複雜度、創造更完美的葡萄酒。',
    skills: [
      '認識波爾多五大紅葡萄品種的特性與角色',
      '理解Cabernet Sauvignon與Merlot的互補關係',
      '掌握波爾多混釀的基本比例與邏輯',
      '了解白葡萄品種在干白與甜白中的應用',
      '理解品種選擇與風土條件的匹配關係'
    ],
    nextSteps: [
      {
        action: '品鑑實踐',
        items: [
          '品鑑一款Cabernet Sauvignon主導的左岸酒款',
          '品鑑一款Merlot主導的右岸酒款',
          '對比兩者在單寧、果味、結構上的差異',
          '嘗試辨識Cabernet Franc的紫羅蘭香氣'
        ]
      },
      {
        action: '繼續學習',
        items: [
          '進入L1-3：產區分類與特色',
          '深入了解不同產區的品種配比',
          '探索混釀比例如何影響風格'
        ]
      }
    ],
    certificate: '您已獲得本課程學習證明',
    reflection: {
      title: '課程反思',
      questions: [
        '為什麼波爾多選擇混釀而非單一品種？',
        'Cabernet Sauvignon與Merlot各自的優缺點是什麼？',
        '如果您釀造波爾多酒款，您會如何設計混釀比例？'
      ]
    },
    keyInsight: '波爾多的混釀哲學是智慧與風險管理的結晶。在氣候多變的波爾多，單一品種風險過高，混釀能平衡不同品種的成熟時間、抵禦天氣變化、創造更複雜的風味層次。Cabernet Sauvignon提供骨架與陳年潛力，Merlot帶來柔美與早期適飲性，其他品種增添香氣與個性——這就是波爾多的釀酒哲學。',
    shareMessage: '我剛完成了波爾多葡萄酒Level 1的「品種與混釀基礎」課程！現在我理解Cabernet Sauvignon與Merlot的互補關係了！🍇🍷 #波爾多 #混釀哲學 #葡萄酒學習'
  }
)

export default lessonContent

