/**
 * LO-L3-5 羅亞爾克雷芒與索米爾氣泡
 * AOCs: Crémant-de-Loire、Saumur Mousseux、Vouvray Mousseux、Montlouis-sur-Loire Mousseux
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          在香檳（Champagne）之外，法國有七個可以生產「Crémant」的地區——羅亞爾河谷是其中最大且最多元的。Crémant-de-Loire、Saumur Mousseux、Vouvray Mousseux……這些氣泡酒不只是香檳的平價替代品，它們有自己獨特的品種個性和風土故事，是羅亞爾河谷值得深入認識的一個面向。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🥂 理解傳統法氣泡酒的工藝原理</h4>
            <p>掌握 Méthode Traditionnelle（傳統法）從基酒到成品的完整釀造流程</p>
          </div>
          <div class="point-item">
            <h4>🍾 辨識羅亞爾四大氣泡 AOC 的差異</h4>
            <p>Crémant-de-Loire、Saumur Mousseux、Vouvray Mousseux、Montlouis-sur-Loire Mousseux 的品種和風格比較</p>
          </div>
          <div class="point-item">
            <h4>🌿 認識 Pét-Nat 自然氣泡酒的崛起</h4>
            <p>Méthode Ancestrale（古法/宗法）是羅亞爾自然酒運動中最重要的技術創新之一</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '傳統法（Méthode Traditionnelle）完整解析',
    highlights: [
      { id: 1, icon: '🍶', title: '第一次發酵（基酒）', content: '採收葡萄釀造成靜態基酒（vin de base），通常酸度高、酒精低（9–11%），為二次發酵保留足夠的空間' },
      { id: 2, icon: '🔄', title: '第二次發酵（Tirage）', content: '在瓶中加入酵母和糖分（Liqueur de Tirage），封蓋後在低溫酒窖中進行瓶內二次發酵，產生二氧化碳氣泡，酒精升至 12–13%' },
      { id: 3, icon: '⏳', title: '酵母陳年（Élevage sur Lie）', content: '二次發酵完成後，酒瓶在死酵母沉澱（lies）上陳年：Crémant 至少 9 個月，Vintage Champagne 至少 3 年。酵母自溶（autolyse）賦予麵包屑、烤吐司、堅果等二次香氣' },
      { id: 4, icon: '🎯', title: '除渣（Dégorgement）', content: '瓶口凍結後去除酵母渣，補入「Liqueur d\'Expédition」調整殘糖（Brut Nature: 0 g/L → Doux: >50 g/L），最終封瓶' }
    ],
    content: `
      <div class="methode-trad">
        <p>傳統法是羅亞爾氣泡酒和香檳共用的釀造工藝，但羅亞爾的品種個性完全不同——以白詩南（Chenin Blanc）為核心，帶來蘋果、梨子、白花的清新個性，而非香檳的 Pinot Noir 紅果感。</p>
        <p>Crémant 法規要求：傳統法、至少 9 個月酵母陳年（香檳法規要求 12–15 個月），整串採收（非機器破碎採收），產量限制。</p>
      </div>
    `
  },
  {
    component: 'LoireCremantMethodsSlide',
    title: 'Loire 氣泡酒四大 AOC 互動深度對比',
    componentProps: {
      slide: {
        title: 'Loire 氣泡酒四大 AOC 對比',
        description: 'Crémant de Loire / Saumur Brut / Vouvray Mousseux / Touraine Mousseux 的工法、品種、Dosage 全方位互動對比，並對照 Méthode Traditionnelle 與 Méthode Ancestrale (Pét-Nat) 兩大工法。'
      }
    }
  },
  {
    title: '四大羅亞爾氣泡 AOC 深度比較',
    content: `
      <div class="sparkling-comparison">
        <div class="aoc-grid">
          <div class="aoc-sparkling-card">
            <h4>🥂 Crémant-de-Loire AOC</h4>
            <p><strong>範圍：</strong>整個羅亞爾河谷（安茹 + 索米爾 + 都漢）</p>
            <p><strong>主要品種：</strong>Chenin Blanc（主）+ Cabernet Franc（紅/粉紅）+ Chardonnay（副）</p>
            <p><strong>酵母陳年：</strong>最少 12 個月（比 Crémant 法規更嚴格）</p>
            <p><strong>風格：</strong>最多樣——從純 Chenin Blanc 的蘋果花香，到混釀的複雜度；也有 Rosé（Cabernet Franc 主導）</p>
            <p><strong>均價：</strong>€10–25（性價比非常高的節慶選擇）</p>
          </div>
          <div class="aoc-sparkling-card">
            <h4>🍾 Saumur AOC Mousseux</h4>
            <p><strong>範圍：</strong>索米爾，凝灰岩地下酒窖（cave）中陳年</p>
            <p><strong>主要品種：</strong>Chenin Blanc 最少 60%，允許 Chardonnay、Sauvignon Blanc 等</p>
            <p><strong>特色：</strong>利用凝灰岩地下洞窟（constant 12–14°C）進行瓶中陳年，是傳統法氣泡酒的完美環境</p>
            <p><strong>風格：</strong>純粹的蘋果、梨子、白花，礦物感強，是最能代表索米爾風土的氣泡酒</p>
          </div>
          <div class="aoc-sparkling-card">
            <h4>🌸 Vouvray Mousseux AOC</h4>
            <p><strong>範圍：</strong>都漢 Vouvray，100% Chenin Blanc</p>
            <p><strong>特色：</strong>純品種表達，Vouvray 的 Chenin Blanc 在氣泡酒中展現出絕佳的陳年複雜度，頂級款可陳年 20+ 年</p>
            <p><strong>甜度：</strong>Brut、Sec、Demi-Sec——多種甜度供選擇，是 Loire 最精緻的甜型氣泡酒之一</p>
          </div>
          <div class="aoc-sparkling-card">
            <h4>🌿 Pét-Nat（Méthode Ancestrale）</h4>
            <p><strong>工法：</strong>在第一次發酵尚未完成時直接裝瓶，讓酒在瓶中完成發酵，保留天然二氧化碳和少量酵母沉澱</p>
            <p><strong>特色：</strong>不除渣（雲霧狀）、不補液、不添加二氧化硫（通常），自然甜感來自剩餘葡萄糖</p>
            <p><strong>為何在羅亞爾流行：</strong>自然酒運動的核心技術，尤其在 Montlouis、Vouvray 和奧爾良一帶，大量自然酒生產者以 Pét-Nat 展現最純粹的 Chenin Blanc 個性</p>
          </div>
        </div>
      </div>
    `
  },
  {
    type: 'quiz',
    title: '小測驗',
    questions: [
      {
        id: 'q1',
        question: '傳統法（Méthode Traditionnelle）氣泡酒釀造中，「酵母自溶（autolyse）」帶來什麼香氣？',
        options: [
          '新鮮草莓和覆盆子的果香',
          '麵包屑、烤吐司、堅果的二次複雜香氣',
          '橡木香草和椰子',
          '貴腐蜂蜜和橙皮蜜餞'
        ],
        correctIndex: 1,
        explanation: '酵母自溶（autolyse）是指死酵母在陳年過程中分解，釋放出胺基酸和其他化合物，形成烤麵包屑、餅乾、烤吐司、榛果等「二次香氣（secondary aromas）」，這是傳統法氣泡酒複雜度的關鍵來源。'
      },
      {
        id: 'q2',
        question: 'Pét-Nat（Méthode Ancestrale）的最大特點是什麼？',
        options: [
          '使用大量新橡木桶陳年，風格豐厚',
          '在第一次發酵未完成時直接裝瓶，不除渣、通常不添加二氧化硫，雲霧狀',
          '必須在凝灰岩地下洞窟陳年至少 3 年',
          '釀造過程完全與 Champagne 相同'
        ],
        correctIndex: 1,
        explanation: 'Pét-Nat（Pétillant Naturel）使用古老的 Méthode Ancestrale：葡萄汁在第一次發酵未完成時直接裝瓶，在瓶中完成發酵，保留天然二氧化碳和酵母沉澱（不除渣），通常不添加硫，是自然酒運動中最代表性的氣泡酒工法。'
      }
    ]
  }
]
