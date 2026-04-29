// L3-6: 調配藝術與釀酒師哲學
// 理解波爾多混釀的藝術與科學

export const l36Content = [
  // ========== 封面與導讀 ==========
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          波爾多葡萄酒的偉大，不僅在於其優越的風土，更在於釀酒師精湛的調配藝術。調配（Assemblage）是波爾多最核心的技藝，將不同品種、不同地塊的葡萄酒融合為完美的整體。
        </p>
        <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L3-6/01%20左右岸調配品種風格對比.svg" alt="波爾多左右岸調配品種風格對比：左岸Cab.S.主導與右岸Merlot主導比較" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>

        <p class="intro-context">
          一瓶頂級波爾多紅酒往往由 3-5 個品種調配而成：Cabernet Sauvignon 提供骨架與陳年潛力，Merlot 賦予柔順與果味，Cabernet Franc 增添優雅與複雜度。調配比例的微調能創造出截然不同的風格，這正是釀酒師藝術與科學的完美結合。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🧪 掌握波爾多經典調配比例與原理</h4>
            <p>理解左岸 Cabernet 主導（60-80%）與右岸 Merlot 主導（60-90%）的風格差異，學習品種角色分配</p>
          </div>

          <div class="point-item">
            <h4>🍇 理解不同葡萄品種的獨特角色</h4>
            <p>深入了解五大品種（CS、Merlot、CF、Petit Verdot、Malbec）在調配中的功能與貢獻</p>
          </div>

          <div class="point-item">
            <h4>🎨 探索頂級釀酒師的調配哲學</h4>
            <p>學習 Château Margaux、Haut-Brion 等名莊釀酒師如何在傳統與創新之間做出決策</p>
          </div>

          <div class="point-item">
            <h4>👃 學習專業品鑑與調配技巧</h4>
            <p>掌握逐桶品鑑（Barrel Tasting）的方法，理解如何評估各組分的陳年潛力與協調性</p>
          </div>

          <div class="point-item">
            <h4>📊 分析年份變化對調配策略的影響</h4>
            <p>了解優秀年份（如2009、2010）與困難年份（如2013）的調配策略差異，學習靈活應對</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將深刻理解為什麼波爾多混釀被視為葡萄酒世界的典範，以及頂級釀酒師如何通過調配藝術創造出超越單一品種的卓越作品。
        </p>

        <div class="course-info">
          <p><strong>預計學習時間：</strong>38分鐘</p>
          <p><strong>難度等級：</strong>高級專業</p>
        </div>
      </div>
    `,
    icon: '🎨'
  },

  // ========== 第一章：調配的基礎原理 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '調配的基礎原理',
    subtitle: '從單一品種到完美融合',
    icon: '🧪',
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },

  {
    type: 'content',
    title: '為什麼要調配？',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="text-align:center;font-size:0.75rem;color:#777;margin-bottom:10px;">波爾多混釀的三大核心動機</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF8F00);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🎵 複雜度的創造</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">單一品種能表達純粹品種特性，但調配能創造出任何單一品種都無法達到的複雜度與平衡感。就像交響樂中不同樂器的和諧配合，每個品種都扮演獨特角色。<div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#E65100;margin-top:7px;">✨ 1 + 1 > 2——整體效果超越各部分之和</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#388E3C);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🌧️ 風險的分散</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">波爾多的海洋性氣候變化多端，不同品種的成熟期和抗病性各異。透過調配，釀酒師可以平衡年份間的差異，確保每年都能釀出高品質葡萄酒。<div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1B5E20;margin-top:7px;">🛡️ 氣候保險——多品種種植降低單一年份的風險</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🎨 風格的塑造</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">調配是釀酒師表達個人風格和酒莊哲學的重要工具。同樣的品種，不同的比例組合，能創造出截然不同的風格表達。<div style="background:#EDE7F6;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#4527A0;margin-top:7px;">🖌️ 藝術表達——調配比例反映釀酒師的美學理念</div></div>
          </div>
        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '波爾多調配的三大支柱',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:9px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.82rem;">👑 Cabernet Sauvignon</div>
              <div style="font-size:0.68rem;opacity:0.85;">架構之王</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">提供骨架與力量，厚實單寧、深邃顏色、黑醋栗香氣，賦予強大的陳年潛力。左岸調配的靈魂品種。
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px;">
                <div style="background:#FFEBEE;border-radius:4px;padding:3px 6px;text-align:center;font-size:0.66rem;color:#B71C1C;"><div>典型比例</div><div style="font-weight:700;">40–70%</div></div>
                <div style="background:#FFF3E0;border-radius:4px;padding:3px 6px;text-align:center;font-size:0.66rem;color:#E65100;"><div>陳年潛力</div><div style="font-weight:700;">20–50年</div></div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1A237E,#283593);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.82rem;">🍇 Merlot</div>
              <div style="font-size:0.68rem;opacity:0.85;">柔順之源</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">帶來圓潤口感和豐富果味，軟化CS的剛性，使酒體更平衡易飲。右岸主導品種（60–90%）。
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px;">
                <div style="background:#E8EAF6;border-radius:4px;padding:3px 6px;text-align:center;font-size:0.66rem;color:#1A237E;"><div>典型比例</div><div style="font-weight:700;">20–90%</div></div>
                <div style="background:#E3F2FD;border-radius:4px;padding:3px 6px;text-align:center;font-size:0.66rem;color:#1565C0;"><div>比CS早熟</div><div style="font-weight:700;">約2週</div></div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.82rem;">🌸 Cabernet Franc</div>
              <div style="font-size:0.68rem;opacity:0.85;">優雅調味師</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">比例雖小（5–25%）卻畫龍點睛：紫羅蘭、鉛筆芯、香料香氣，提升整體優雅度。Cheval Blanc 可達 40–60%。
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:6px;">
                <div style="background:#E0F2F1;border-radius:4px;padding:3px 6px;text-align:center;font-size:0.66rem;color:#00695C;"><div>典型比例</div><div style="font-weight:700;">5–25%</div></div>
                <div style="background:#F3E5F5;border-radius:4px;padding:3px 6px;text-align:center;font-size:0.66rem;color:#6A1B9A;"><div>Cheval Blanc</div><div style="font-weight:700;">40–60%</div></div>
              </div>
            </div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:7px;">
          <div style="background:#FFF3E0;border-radius:7px;padding:7px 9px;font-size:0.7rem;text-align:center;"><div style="font-size:1.1rem;">🏛️</div><div style="font-weight:700;color:#E65100;font-size:0.75rem;margin:2px 0;">左岸典型</div><div style="color:#333;">CS 60%+M 30%+CF 10%</div><div style="font-size:0.64rem;color:#777;margin-top:2px;">結構主導·力量型</div></div>
          <div style="background:#E3F2FD;border-radius:7px;padding:7px 9px;font-size:0.7rem;text-align:center;"><div style="font-size:1.1rem;">🌊</div><div style="font-weight:700;color:#1565C0;font-size:0.75rem;margin:2px 0;">右岸典型</div><div style="color:#333;">M 70%+CF 20%+CS 10%</div><div style="font-size:0.64rem;color:#777;margin-top:2px;">柔順優雅·早適飲</div></div>
          <div style="background:#E8F5E9;border-radius:7px;padding:7px 9px;font-size:0.7rem;text-align:center;"><div style="font-size:1.1rem;">⚖️</div><div style="font-weight:700;color:#2E7D32;font-size:0.75rem;margin:2px 0;">黃金法則</div><div style="color:#333;">1+1+1 > 3</div><div style="font-size:0.64rem;color:#777;margin-top:2px;">整體超越各部分之和</div></div>
          <div style="background:#F3E5F5;border-radius:7px;padding:7px 9px;font-size:0.7rem;text-align:center;"><div style="font-size:1.1rem;">🎨</div><div style="font-weight:700;color:#6A1B9A;font-size:0.75rem;margin:2px 0;">釀酒師畫布</div><div style="color:#333;">每1%的調整都改變風格</div><div style="font-size:0.64rem;color:#777;margin-top:2px;">微調創造獨特性格</div></div>
        </div>
      </div>
    `
  },

  // 知識檢測：調配基礎
  {
    type: 'interactive-quiz',
    title: '知識檢測：調配基礎',
    questions: [
      {
        question: '波爾多調配的三大支柱品種中，哪個品種主要負責提供「骨架與陳年潛力」？',
        options: [
          'Merlot',
          'Cabernet Sauvignon',
          'Cabernet Franc',
          'Petit Verdot'
        ],
        correct: 1,
        explanation: 'Cabernet Sauvignon 是「架構之王」，提供厚實單寧、深邃顏色和黑色水果香氣，賦予葡萄酒強大的陳年潛力，是波爾多左岸調配的靈魂。'
      },
      {
        question: 'Merlot 在波爾多調配中的主要角色是什麼？',
        options: [
          '提供結構與單寧',
          '增加酸度與清新感',
          '帶來圓潤口感和豐富果味',
          '提升酒精度'
        ],
        correct: 2,
        explanation: 'Merlot 是「柔順之源」，為調配帶來圓潤的口感和豐富的果味，能軟化 Cabernet Sauvignon 的剛性，使酒體更加平衡和易飲。'
      }
    ]
  },

  // ========== 第二章：左岸與右岸的調配哲學 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '左岸與右岸的調配哲學',
    subtitle: '兩種截然不同的美學追求',
    icon: '⚖️',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },

  {
    type: 'content',
    title: '左岸 vs 右岸調配風格',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:9px;margin-bottom:9px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#D32F2F);padding:9px 12px;color:#fff;">
              <div style="font-weight:700;font-size:0.82rem;">🏛️ 左岸：CS主導的力量美學</div><div style="font-size:0.68rem;opacity:0.85;">梅多克·格拉夫</div></div>
            <div style="padding:9px 12px 11px;font-size:0.72rem;color:#333;line-height:1.75;">砂礫土壤排水佳，追求結構、力量與超長陳年潛力。
              <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin-top:7px;">
                <div style="background:#FFEBEE;border-radius:4px;padding:4px 5px;text-align:center;font-size:0.66rem;"><div style="color:#777;">CS比例</div><div style="font-weight:700;color:#B71C1C;">50–80%</div></div>
                <div style="background:#FFF3E0;border-radius:4px;padding:4px 5px;text-align:center;font-size:0.66rem;"><div style="color:#777;">適飲期</div><div style="font-weight:700;color:#E65100;">10–20年</div></div>
                <div style="background:#F3E5F5;border-radius:4px;padding:4px 5px;text-align:center;font-size:0.66rem;"><div style="color:#777;">典型</div><div style="font-weight:700;color:#6A1B9A;">CS70+M25+PV5</div></div>
                <div style="background:#E8F5E9;border-radius:4px;padding:4px 5px;text-align:center;font-size:0.66rem;"><div style="color:#777;">代表</div><div style="font-weight:700;color:#1B5E20;">Lafite·Latour</div></div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1A237E,#283593);padding:9px 12px;color:#fff;">
              <div style="font-weight:700;font-size:0.82rem;">🌊 右岸：Merlot主導的柔美哲學</div><div style="font-size:0.68rem;opacity:0.85;">波美侯·聖愛美濃</div></div>
            <div style="padding:9px 12px 11px;font-size:0.72rem;color:#333;line-height:1.75;">黏土與石灰岩最適Merlot，追求柔順、優雅與早期適飲。
              <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin-top:7px;">
                <div style="background:#E8EAF6;border-radius:4px;padding:4px 5px;text-align:center;font-size:0.66rem;"><div style="color:#777;">M比例</div><div style="font-weight:700;color:#1A237E;">60–95%</div></div>
                <div style="background:#E3F2FD;border-radius:4px;padding:4px 5px;text-align:center;font-size:0.66rem;"><div style="color:#777;">適飲期</div><div style="font-weight:700;color:#1565C0;">5–10年</div></div>
                <div style="background:#E0F2F1;border-radius:4px;padding:4px 5px;text-align:center;font-size:0.66rem;"><div style="color:#777;">典型</div><div style="font-weight:700;color:#00695C;">M85+CF15</div></div>
                <div style="background:#E8F5E9;border-radius:4px;padding:4px 5px;text-align:center;font-size:0.66rem;"><div style="color:#777;">代表</div><div style="font-weight:700;color:#1B5E20;">Petrus·Ausone</div></div>
              </div>
            </div>
          </div>
        </div>
        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;font-size:0.72rem;">
            <thead><tr style="background:linear-gradient(90deg,#37474F,#546E7A);"><th style="padding:6px 10px;text-align:left;color:#fff;font-weight:600;width:18%;">項目</th><th style="padding:6px 10px;color:#fff;font-weight:600;text-align:center;">🏛️ 左岸</th><th style="padding:6px 10px;color:#fff;font-weight:600;text-align:center;">🌊 右岸</th></tr></thead>
            <tbody>
              <tr style="background:#FFEBEE;"><td style="padding:5px 10px;font-weight:600;color:#333;">主導品種</td><td style="padding:5px 10px;color:#B71C1C;text-align:center;">👑 CS 50–80%</td><td style="padding:5px 10px;color:#1A237E;text-align:center;">🍇 Merlot 60–95%</td></tr>
              <tr style="background:#F5F5F5;"><td style="padding:5px 10px;font-weight:600;color:#333;">風格特點</td><td style="padding:5px 10px;color:#555;text-align:center;">💪 結構·力量·陳年</td><td style="padding:5px 10px;color:#555;text-align:center;">✨ 柔順·優雅·早適飲</td></tr>
              <tr style="background:#FFEBEE;"><td style="padding:5px 10px;font-weight:600;color:#333;">土壤</td><td style="padding:5px 10px;color:#555;text-align:center;">🏔️ 砂礫土（排水佳）</td><td style="padding:5px 10px;color:#555;text-align:center;">🌊 黏土·石灰岩</td></tr>
              <tr style="background:#F5F5F5;"><td style="padding:5px 10px;font-weight:600;color:#333;">適飲期</td><td style="padding:5px 10px;color:#555;text-align:center;">⏰ 10–20年</td><td style="padding:5px 10px;color:#555;text-align:center;">⏱️ 5–10年</td></tr>
              <tr style="background:#FFEBEE;"><td style="padding:5px 10px;font-weight:600;color:#333;">決策哲學</td><td style="padding:5px 10px;color:#555;text-align:center;">🏗️ 以結構為框架填充</td><td style="padding:5px 10px;color:#555;text-align:center;">🎵 以柔順為基調增複雜</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '品種角色分工詳解',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🏛️ CS——架構師</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">如同建築的鋼筋框架，Cabernet Sauvignon為葡萄酒提供堅實的結構基礎。其高單寧含量和深邃的顏色，賦予酒款強大的陳年潛力和複雜的陳年香氣發展能力。<div style="background:#FFEBEE;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#B71C1C;margin-top:7px;">核心貢獻：結構·單寧·陳年潛力·黑醋栗風味</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🍇 Merlot——調和者</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">Merlot就像溫柔的調和劑，其圓潤的質地和豐富的果味能夠柔化Cabernet Sauvignon的堅硬邊角，同時填補口感中的空隙，創造出更加平衡和諧的整體。<div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1565C0;margin-top:7px;">核心貢獻：圓潤口感·果味·早期適飲·李子/櫻桃風味</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🌸 CF——藝術家</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">Cabernet Franc像是調色盤上的精細畫筆，為混釀增添優雅的花香、草本氣息和清新的酸度。它能提升整體的芳香複雜度，賦予酒款更多的層次感。<div style="background:#E0F2F1;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#00695C;margin-top:7px;">核心貢獻：花香·草本氣息·酸度·優雅感</div></div>
          </div>
        </div>
      </div>
    `
  },

  // 知識檢測：左岸與右岸調配
  {
    type: 'interactive-quiz',
    title: '知識檢測：左岸與右岸調配',
    questions: [
      {
        question: '波爾多左岸調配中，Cabernet Sauvignon 通常佔多少比例？',
        options: [
          '20-40%',
          '40-60%',
          '50-80%',
          '80-95%'
        ],
        correct: 2,
        explanation: '左岸以砂礫土壤為主，非常適合 Cabernet Sauvignon 的種植。左岸調配通常 CS 佔 50-80%，提供結構、力量和超長的陳年潛力。'
      },
      {
        question: '右岸產區（如 Pomerol、Saint-Émilion）的主導品種是什麼？',
        options: [
          'Cabernet Sauvignon',
          'Merlot',
          'Cabernet Franc',
          'Petit Verdot'
        ],
        correct: 1,
        explanation: '右岸以黏土和石灰岩為主，最適合 Merlot 的表達。Merlot 通常佔 60-95%，提供豐富的果味和圓潤口感，追求柔順、優雅和早期適飲性。'
      }
    ]
  },

  // ========== 第三章：經典調配比例分析 ==========
  {
    type: 'chapter-divider',
    chapter: '3',
    title: '經典調配比例分析',
    subtitle: '頂級酒莊的配方密碼',
    icon: '📊',
    background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'
  },

  {
    type: 'content',
    title: '五大一級莊調配比例解密',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:9px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.8rem;">👑 Château Lafite</div>
              <div style="font-size:0.67rem;opacity:0.85;">Pauillac · 優雅派</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">追求「優雅與力量的完美平衡」，CS比Latour低，更多Merlot柔化剛性。創造絲滑單寧與礦物質特徵，陳年潛力30–50年。
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1B5E20;margin-top:5px;">CS 70% + M 25% + CF 3% + PV 2%</div>
              <div style="font-size:0.67rem;color:#666;margin-top:3px;">🎨 絲滑單寧·雪松木·鉛筆芯礦物質</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#37474F,#546E7A);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.8rem;">💪 Château Latour</div>
              <div style="font-size:0.67rem;opacity:0.85;">Pauillac · 力量派</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">追求「最純粹的力量表達」，波爾多最高CS比例（80%）。傳奇結構感與陳年潛力（50–100年），年輕時需耐心等待。
              <div style="background:#ECEFF1;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#37474F;margin-top:5px;">CS 80% + M 18% + PV 2%</div>
              <div style="font-size:0.67rem;color:#666;margin-top:3px;">🎨 鋼鐵結構·黑色水果·深邃層次</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#880E4F,#AD1457);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.8rem;">🌸 Château Margaux</div>
              <div style="font-size:0.67rem;opacity:0.85;">Margaux · 精緻派</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">「波爾多最女性化的酒」，4品種和諧配比創造標誌性花香（紫羅蘭）和絲滑質地。力量與優雅的教科書式平衡。
              <div style="background:#FCE4EC;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#880E4F;margin-top:5px;">CS 75% + M 20% + CF 3% + PV 2%</div>
              <div style="font-size:0.67rem;color:#666;margin-top:3px;">🎨 紫羅蘭花香·絲綢質地·優雅精緻</div>
            </div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:7px;">
          <div style="background:#FFF3E0;border-radius:7px;padding:7px 9px;font-size:0.7rem;">
            <div style="font-weight:700;color:#E65100;font-size:0.75rem;margin-bottom:3px;">📊 Haut-Brion</div>
            <div style="color:#333;">CS 45%+M 40%+CF 15%</div>
            <div style="font-size:0.64rem;color:#777;margin-top:2px;">Graves · 煙燻礦物質</div>
          </div>
          <div style="background:#FFEBEE;border-radius:7px;padding:7px 9px;font-size:0.7rem;">
            <div style="font-weight:700;color:#B71C1C;font-size:0.75rem;margin-bottom:3px;">💎 Mouton</div>
            <div style="color:#333;">CS 83%+M 15%+CF 2%</div>
            <div style="font-size:0.64rem;color:#777;margin-top:2px;">Pauillac · 華麗濃郁</div>
          </div>
          <div style="background:#E8EAF6;border-radius:7px;padding:7px 9px;font-size:0.7rem;">
            <div style="font-weight:700;color:#1A237E;font-size:0.75rem;margin-bottom:3px;">🍇 Petrus（右岸）</div>
            <div style="color:#333;">M 95%+CF 5%</div>
            <div style="font-size:0.64rem;color:#777;margin-top:2px;">Pomerol · Merlot極致</div>
          </div>
          <div style="background:#E0F2F1;border-radius:7px;padding:7px 9px;font-size:0.7rem;">
            <div style="font-weight:700;color:#00695C;font-size:0.75rem;margin-bottom:3px;">🏆 Cheval Blanc</div>
            <div style="color:#333;">M 52%+CF 43%+CS 5%</div>
            <div style="font-size:0.64rem;color:#777;margin-top:2px;">St-Émilion · CF高比例</div>
          </div>
        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '調配比例的演變',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F57F17);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">📈 歷史趨勢分析</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">過去50年間，波爾多的調配比例發生顯著變化。氣候變化使Cabernet Sauvignon更易成熟，市場對早期適飲性的需求推動了Merlot比例的增加。<div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#E65100;margin-top:7px;">1970s vs 2020s：Merlot比例普遍上升5–15%</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🔬 技術進步的影響</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">現代釀酒技術如光學分選、微氧化等，讓釀酒師能夠更精確地控制每個品種的表現，從而在調配中發揮更大的創造空間。<div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1565C0;margin-top:7px;">精準釀造：現代技術讓調配變得更加科學化</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🌍 市場導向的調整</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">年輕世代消費者偏好果味更豐富、單寧更柔順的酒款，促使許多酒莊增加Merlot的種植比例，或採用更溫和的萃取方式。<div style="background:#EDE7F6;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#4527A0;margin-top:7px;">消費趨勢：從需要陳年轉向早期適飲</div></div>
          </div>
        </div>
      </div>
    `
  },

  // 知識檢測：經典調配比例
  {
    type: 'interactive-quiz',
    title: '知識檢測：經典調配比例',
    questions: [
      {
        question: '五大一級莊中，哪個酒莊使用最高比例的 Cabernet Sauvignon（約80%）？',
        options: [
          'Château Lafite Rothschild',
          'Château Latour',
          'Château Margaux',
          'Château Haut-Brion'
        ],
        correct: 1,
        explanation: 'Château Latour 追求「最純粹的力量表達」，使用波爾多最高比例的 CS（80%），賦予酒款傳奇般的結構感和陳年潛力（50-100年）。'
      },
      {
        question: 'Château Margaux 被譽為「波爾多最女性化的酒」，其調配哲學追求什麼風格？',
        options: [
          '力量與結構',
          '精緻與優雅',
          '濃郁與飽滿',
          '早熟與果味'
        ],
        correct: 1,
        explanation: 'Margaux 的調配哲學追求「精緻與優雅」，4個品種的和諧配比創造出標誌性的花香（紫羅蘭）和絲滑質地，是力量與優雅的教科書式平衡。'
      }
    ]
  },

  // ========== 第四章：釀酒師的決策過程 ==========
  {
    type: 'chapter-divider',
    chapter: '4',
    title: '釀酒師的決策過程',
    subtitle: '從品鑑到調配的藝術',
    icon: '🎯',
    background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
  },

  {
    type: 'content',
    title: '調配決策的完整時間線',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:9px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF8F00);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.78rem;">⏱️ 第一階段</div>
              <div style="font-size:0.68rem;opacity:0.85;">採收後1個月·初步評估</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">評估每個品種的品質潛力、分析每個地塊特色，確定基本調配方向。此時保持開放心態，不要過早下結論。<div style="background:#FFF3E0;border-radius:4px;padding:3px 7px;font-size:0.67rem;color:#E65100;margin-top:6px;">🎯 確定主導品種與大致比例框架（如CS 65–75%）</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.78rem;">🔬 第二階段</div>
              <div style="font-size:0.68rem;opacity:0.85;">採收後3–6個月·精確調配</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">逐一品鑑50–100個橡木桶，進行5–10個小比例試調，評估不同組合的平衡性、複雜度、陳年潛力。<div style="background:#E3F2FD;border-radius:4px;padding:3px 7px;font-size:0.67rem;color:#1565C0;margin-top:6px;">🎯 確定最終調配比例（精確到1%）</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:8px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.78rem;">✨ 第三階段</div>
              <div style="font-size:0.68rem;opacity:0.85;">採收後12–18個月·微調完善</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">裝瓶前評估調配後的陳年發展與整合度，根據市場反饋進行微調（1–3%）。確認正副牌酒品質一致性。<div style="background:#E8F5E9;border-radius:4px;padding:3px 7px;font-size:0.67rem;color:#1B5E20;margin-top:6px;">🎯 最終確認裝瓶，決定正副牌分選</div></div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:7px;">
          <div style="background:#FFF3E0;border-radius:7px;padding:7px 9px;text-align:center;font-size:0.7rem;"><div style="font-size:1rem;">📅</div><div style="font-weight:700;color:#E65100;font-size:0.8rem;">12–18個月</div><div style="color:#555;margin-top:2px;">決策週期</div><div style="font-size:0.64rem;color:#777;">採收到裝瓶</div></div>
          <div style="background:#E3F2FD;border-radius:7px;padding:7px 9px;text-align:center;font-size:0.7rem;"><div style="font-size:1rem;">🍷</div><div style="font-weight:700;color:#1565C0;font-size:0.8rem;">50–100次</div><div style="color:#555;margin-top:2px;">品鑑次數</div><div style="font-size:0.64rem;color:#777;">逐桶評估</div></div>
          <div style="background:#E8F5E9;border-radius:7px;padding:7px 9px;text-align:center;font-size:0.7rem;"><div style="font-size:1rem;">🧪</div><div style="font-weight:700;color:#1B5E20;font-size:0.8rem;">5–10組</div><div style="color:#555;margin-top:2px;">試驗組合</div><div style="font-size:0.64rem;color:#777;">比例測試</div></div>
          <div style="background:#F3E5F5;border-radius:7px;padding:7px 9px;text-align:center;font-size:0.7rem;"><div style="font-size:1rem;">👥</div><div style="font-weight:700;color:#6A1B9A;font-size:0.8rem;">3–8人</div><div style="color:#555;margin-top:2px;">參與人員</div><div style="font-size:0.64rem;color:#777;">團隊品鑑</div></div>
        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '大師訪談：Michel Rolland 談調配的藝術',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#37474F,#546E7A);border-radius:8px;padding:8px 14px;margin-bottom:9px;">
          <div style="color:rgba(255,255,255,0.8);font-size:0.7rem;">國際釀酒顧問 · 諮詢超過100家酒莊</div>
          <div style="color:#fff;font-weight:700;font-size:0.8rem;margin-top:2px;">Michel Rolland 的調配哲學——包括 Pétrus、Le Pin、Angelus 等頂級名莊</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:7px 11px;color:#fff;font-weight:700;font-size:0.75rem;">Q1 · 最重要的原則是什麼？</div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.75;"><em style="color:#555;">「平衡是一切的核心。但我說的不是數學式的平衡，而是味覺上的和諧。每個年份、每個地塊都有其個性，我的工作是讓它們唱出最美的和聲。一款偉大的調配酒，你不應該能分辨哪個是Cabernet、哪個是Merlot，你感受到的應該是完美融合的整體。」</em><div style="background:#FFEBEE;border-radius:4px;padding:3px 7px;font-size:0.67rem;color:#B71C1C;margin-top:6px;">🎵 追求味覺和諧，而非數學比例</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:7px 11px;color:#fff;font-weight:700;font-size:0.75rem;">Q2 · 年份差異如何影響調配？</div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.75;"><em style="color:#555;">「在溫暖年份，我會增加Cabernet Franc的比例來保持清新感和酸度；在涼爽年份，則可能增加Merlot來補充圓潤度和果味。關鍵是理解每個年份的特點，然後用調配來優化表現。沒有固定的公式，每個年份都是新的挑戰和機會。」</em><div style="background:#E3F2FD;border-radius:4px;padding:3px 7px;font-size:0.67rem;color:#1565C0;margin-top:6px;">🌡️ 彈性策略：根據年份特點調整比例</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:7px 11px;color:#fff;font-weight:700;font-size:0.75rem;">Q3 · 給年輕釀酒師的建議？</div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.75;"><em style="color:#555;">「首先要學會品鑑，培養敏銳的味覺。每天品嚐不同的酒，訓練辨識細微差異的能力。其次要理解每個品種在不同土壤、不同年份下的實際表現。最重要的是要有耐心——調配是需要時間和經驗累積的藝術。」</em><div style="background:#E8F5E9;border-radius:4px;padding:3px 7px;font-size:0.67rem;color:#1B5E20;margin-top:6px;">📚 味覺訓練 + 品種理解 + 耐心經驗</div></div>
          </div>
        </div>
      </div>
    `
  },

  // 知識檢測：釀酒師決策
  {
    type: 'interactive-quiz',
    title: '知識檢測：釀酒師決策',
    questions: [
      {
        question: '釀酒師在品鑑各槽酒樣時，主要評估的三個關鍵要素是什麼？',
        options: [
          '顏色、香氣、價格',
          '品質、潛力、和諧性',
          '酒精度、酸度、甜度',
          '產量、成本、市場需求'
        ],
        correct: 1,
        explanation: '釀酒師通過逐桶品鑑（Barrel Tasting）評估每個組分的品質、陳年潛力和協調性，這三個要素決定了最終的調配決策。'
      },
      {
        question: '調配決策通常在什麼時候做出？',
        options: [
          '採收後立即決定',
          '發酵過程中',
          '橡木桶陳年6-8個月後',
          '裝瓶前一週'
        ],
        correct: 2,
        explanation: '調配決策通常在橡木桶陳年6-8個月後進行，此時各組分已初步發展，釀酒師可以更準確地評估品質和協調性。'
      }
    ]
  },

  // ========== 第五章：調配實務技巧 ==========
  {
    type: 'chapter-divider',
    chapter: '5',
    title: '調配實務技巧',
    subtitle: '專業品鑑與調配方法',
    icon: '🔬',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },

  {
    type: 'content',
    title: '專業調配流程',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF8F00);padding:8px 11px;color:#fff;">
              <div style="font-size:0.68rem;opacity:0.8;">Step 1</div>
              <div style="font-weight:700;font-size:0.78rem;">準備階段</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">
              <div style="margin-bottom:3px;">· 溫度 16–18°C</div>
              <div style="margin-bottom:3px;">· 標準品鑑杯</div>
              <div style="margin-bottom:3px;">· 吐酒桶與清水</div>
              <div style="margin-bottom:6px;">· 良好光線條件</div>
              <div style="background:#FFF3E0;border-radius:4px;padding:3px 6px;font-size:0.67rem;color:#E65100;">環境一致性至關重要</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:8px 11px;color:#fff;">
              <div style="font-size:0.68rem;opacity:0.8;">Step 2</div>
              <div style="font-weight:700;font-size:0.78rem;">單品評估</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">
              <div style="margin-bottom:3px;">· 按品種分別品鑑</div>
              <div style="margin-bottom:3px;">· 記錄每個特點</div>
              <div style="margin-bottom:3px;">· 評估酸度/單寧/酒體</div>
              <div style="margin-bottom:6px;">· 判斷各組成潛力</div>
              <div style="background:#E3F2FD;border-radius:4px;padding:3px 6px;font-size:0.67rem;color:#1565C0;">詳細記錄有助於決策</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:8px 11px;color:#fff;">
              <div style="font-size:0.68rem;opacity:0.8;">Step 3</div>
              <div style="font-weight:700;font-size:0.78rem;">試調階段</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">
              <div style="margin-bottom:3px;">· 50ml小樣開始</div>
              <div style="margin-bottom:3px;">· 逐步調整比例</div>
              <div style="margin-bottom:3px;">· 每次只改一個變數</div>
              <div style="margin-bottom:6px;">· 記錄每次結果</div>
              <div style="background:#E8F5E9;border-radius:4px;padding:3px 6px;font-size:0.67rem;color:#1B5E20;">小樣試調節約成本</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:8px 11px;color:#fff;">
              <div style="font-size:0.68rem;opacity:0.8;">Step 4</div>
              <div style="font-weight:700;font-size:0.78rem;">優化調整</div>
            </div>
            <div style="padding:8px 11px 10px;font-size:0.71rem;color:#333;line-height:1.7;">
              <div style="margin-bottom:3px;">· 選出最佳組合</div>
              <div style="margin-bottom:3px;">· 擴大試調200–500ml</div>
              <div style="margin-bottom:3px;">· 邀請其他專業品鑑</div>
              <div style="margin-bottom:6px;">· 考慮陳年發展潛力</div>
              <div style="background:#EDE7F6;border-radius:4px;padding:3px 6px;font-size:0.67rem;color:#4527A0;">團隊品鑑減少個人偏好</div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '虛擬調配實驗室',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <!-- 任務說明橫幅 -->
        <div style="background:linear-gradient(135deg,#1A237E,#283593);border-radius:10px;padding:9px 14px;color:#fff;margin-bottom:10px;display:flex;align-items:center;gap:12px;">
          <div style="font-size:1.6rem;">🧪</div>
          <div>
            <div style="font-weight:700;font-size:0.82rem;margin-bottom:2px;">釀酒師任務 — 2020 年份 Pauillac 紅酒調配</div>
            <div style="font-size:0.72rem;opacity:0.88;">使用以下三種葡萄品種，調配出一款體現 Pauillac 風土特色、可陳年 10-15 年的經典波爾多混釀</div>
          </div>
        </div>

        <!-- 三種可用品種卡片 -->
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:10px;">

          <!-- CS -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.09);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:7px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.8rem;">🍇 Cabernet Sauvignon</div>
              <div style="font-size:0.67rem;opacity:0.88;margin-top:1px;">建議用量：50–80%</div>
            </div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;line-height:1.7;">
              <div style="display:grid;grid-template-columns:auto 1fr;gap:2px 6px;">
                <span style="color:#B71C1C;font-weight:600;">色澤</span><span>深紫紅色</span>
                <span style="color:#B71C1C;font-weight:600;">香氣</span><span>黑醋栗·雪松·石墨</span>
                <span style="color:#B71C1C;font-weight:600;">口感</span><span>飽滿酒體·高單寧·結構強勁</span>
                <span style="color:#B71C1C;font-weight:600;">尾韻</span><span>持久·礦物感明顯</span>
              </div>
              <div style="background:#FFEBEE;border-radius:5px;padding:3px 7px;font-size:0.67rem;color:#B71C1C;margin-top:6px;">骨架·陳年潛力·典型性</div>
            </div>
          </div>

          <!-- Merlot -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.09);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:7px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.8rem;">🍇 Merlot</div>
              <div style="font-size:0.67rem;opacity:0.88;margin-top:1px;">建議用量：15–40%</div>
            </div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;line-height:1.7;">
              <div style="display:grid;grid-template-columns:auto 1fr;gap:2px 6px;">
                <span style="color:#1565C0;font-weight:600;">色澤</span><span>深紅寶石色</span>
                <span style="color:#1565C0;font-weight:600;">香氣</span><span>李子·黑櫻桃·香草</span>
                <span style="color:#1565C0;font-weight:600;">口感</span><span>中等酒體·柔順單寧·果味豐富</span>
                <span style="color:#1565C0;font-weight:600;">尾韻</span><span>中等長度·圓潤</span>
              </div>
              <div style="background:#E3F2FD;border-radius:5px;padding:3px 7px;font-size:0.67rem;color:#1565C0;margin-top:6px;">圓潤·果味·早期適飲性</div>
            </div>
          </div>

          <!-- CF -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.09);">
            <div style="background:linear-gradient(135deg,#4527A0,#6A1B9A);padding:7px 11px;color:#fff;">
              <div style="font-weight:700;font-size:0.8rem;">🍇 Cabernet Franc</div>
              <div style="font-size:0.67rem;opacity:0.88;margin-top:1px;">建議用量：5–25%</div>
            </div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;line-height:1.7;">
              <div style="display:grid;grid-template-columns:auto 1fr;gap:2px 6px;">
                <span style="color:#4527A0;font-weight:600;">色澤</span><span>中等深度紅色</span>
                <span style="color:#4527A0;font-weight:600;">香氣</span><span>紫羅蘭·薄荷·香料</span>
                <span style="color:#4527A0;font-weight:600;">口感</span><span>中等酒體·優雅單寧·酸度清新</span>
                <span style="color:#4527A0;font-weight:600;">尾韻</span><span>中等長度·花香</span>
              </div>
              <div style="background:#EDE7F6;border-radius:5px;padding:3px 7px;font-size:0.67rem;color:#4527A0;margin-top:6px;">優雅·香氣複雜·清新感</div>
            </div>
          </div>

        </div>

        <!-- 目標風格 + 參考比例 -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:7px 11px;color:#fff;font-weight:700;font-size:0.78rem;">🎯 目標風格 — 經典 Pauillac</div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;line-height:1.75;">
              <div style="display:flex;flex-direction:column;gap:3px;">
                <div>✅ 結構強勁但不粗糙</div>
                <div>✅ 果味豐富且有層次</div>
                <div>✅ 適合陳年 10–15 年</div>
                <div>✅ 體現 Pauillac 產區典型性</div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#E65100,#FF6D00);padding:7px 11px;color:#fff;font-weight:700;font-size:0.78rem;">💡 參考調配比例（依年份調整）</div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;">
              <div style="display:flex;flex-direction:column;gap:4px;">
                <div style="display:flex;align-items:center;gap:6px;">
                  <span style="color:#B71C1C;font-weight:600;min-width:60px;">CS</span>
                  <div style="flex:1;background:#FFEBEE;border-radius:3px;height:10px;overflow:hidden;">
                    <div style="width:70%;height:100%;background:#B71C1C;border-radius:3px;"></div>
                  </div>
                  <span style="color:#B71C1C;font-weight:700;min-width:30px;text-align:right;">70%</span>
                </div>
                <div style="display:flex;align-items:center;gap:6px;">
                  <span style="color:#1565C0;font-weight:600;min-width:60px;">Merlot</span>
                  <div style="flex:1;background:#E3F2FD;border-radius:3px;height:10px;overflow:hidden;">
                    <div style="width:22%;height:100%;background:#1565C0;border-radius:3px;"></div>
                  </div>
                  <span style="color:#1565C0;font-weight:700;min-width:30px;text-align:right;">22%</span>
                </div>
                <div style="display:flex;align-items:center;gap:6px;">
                  <span style="color:#4527A0;font-weight:600;min-width:60px;">CF</span>
                  <div style="flex:1;background:#EDE7F6;border-radius:3px;height:10px;overflow:hidden;">
                    <div style="width:8%;height:100%;background:#4527A0;border-radius:3px;"></div>
                  </div>
                  <span style="color:#4527A0;font-weight:700;min-width:30px;text-align:right;">8%</span>
                </div>
              </div>
              <div style="margin-top:6px;font-size:0.67rem;color:#777;">溫暖年份（如2020）可調整 CF ↑10%、CS ↓5%</div>
            </div>
          </div>

        </div>
      </div>
    `
  },

  // ========== 知識檢測：調配實務技巧 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：調配實務技巧',
    questions: [
      {
        question: '在逐桶品鑑（Barrel Tasting）階段，釀酒師主要評估什麼？',
        options: [
          '葡萄酒的最終售價',
          '每個橡木桶葡萄酒的品質潛力和特性',
          '葡萄園的土壤成分',
          '市場的需求趨勢'
        ],
        correct: 1,
        explanation: '逐桶品鑑是調配的第一步，釀酒師會逐一品鑑每個橡木桶中的酒液，評估其品質、成熟度、風味特徵和潛力，為後續的試驗性調配做準備。'
      },
      {
        question: '試驗性調配（Trial Blending）的主要目的是什麼？',
        options: [
          '直接決定最終調配比例',
          '測試不同比例組合，找出最佳平衡',
          '確定葡萄酒的陳年時間',
          '計算生產成本'
        ],
        correct: 1,
        explanation: '試驗性調配是用小樣本（通常100-200ml）測試10-20種不同比例組合，通過反覆品鑑比較，找出最佳的平衡點，然後才會進行大規模調配。'
      }
    ]
  },

  // ========== 第六章：年份差異與調配策略 ==========
  {
    type: 'chapter-divider',
    chapter: '6',
    title: '年份差異與調配策略',
    subtitle: '適應自然，創造一致',
    icon: '📅',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  {
    type: 'content',
    title: '年份特徵對調配的影響',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF8F00);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">☀️ 溫暖年份策略</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">在溫暖年份，葡萄成熟度高，糖分充足，但可能缺乏酸度。釀酒師通常會增加Cabernet Franc的比例來提升清新感，或選擇較涼爽地塊的葡萄來平衡整體風格。<div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#E65100;margin-top:7px;">2003·2005·2009·2010：經典溫暖年份挑戰</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🌧️ 涼爽年份智慧</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">涼爽年份的葡萄酸度高，但成熟度可能不足。釀酒師會增加Merlot的比例來補充果味和圓潤感，同時選擇最溫暖地塊的葡萄作為調配基礎。<div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1565C0;margin-top:7px;">2007·2008·2013·2014：考驗調配技巧的年份</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">⚖️ 理想年份平衡</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">在氣候條件理想的年份，所有品種都能達到完美成熟度。此時釀酒師的任務是不要過度干預，讓每個品種發揮最佳特質，創造和諧整體。<div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1B5E20;margin-top:7px;">2000·2016·2019·2020：近乎完美的平衡年份</div></div>
          </div>
        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '案例研究：2010 vs 2013 年份調配策略',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF6D00);padding:8px 12px;color:#fff;">
              <div style="font-weight:700;font-size:0.85rem;">☀️ 2010 炎熱乾燥・完美年</div>
            </div>
            <div style="padding:9px 12px;font-size:0.72rem;color:#333;line-height:1.7;">
              <b>挑戰：</b>過度成熟・酸度不足・酒精偏高・單寧強勁<br>
              <b>策略：</b>↑ CF (+5-10%) 清新감・選涼爽地塊・縮短浸皮<br>
              <div style="background:#FFF3E0;border-radius:6px;padding:5px 8px;margin-top:6px;font-size:0.7rem;">
                <b>Pichon Baron 案例：</b><br>
                常規：CS 70% + Merlot 25% + CF 5%<br>
                2010：CS 65% + Merlot 23% + <span style="color:#E65100;font-weight:700;">CF 12%</span><br>
                <span style="color:#2E7D32;">→ CF 翻倍↑，RP 98分</span>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:8px 12px;color:#fff;">
              <div style="font-weight:700;font-size:0.85rem;">🌧️ 2013 涼爽多雨・挑戰年</div>
            </div>
            <div style="padding:9px 12px;font-size:0.72rem;color:#333;line-height:1.7;">
              <b>挑戰：</b>成熟不足・酸度過高・果味薄弱・單寧生澀<br>
              <b>策略：</b>↑ Merlot (+10-15%) 圓潤・嚴格選果・延長浸皮<br>
              <div style="background:#E3F2FD;border-radius:6px;padding:5px 8px;margin-top:6px;font-size:0.7rem;">
                <b>Lynch-Bages 案例：</b><br>
                常規：CS 73% + Merlot 15% + CF 10% + PV 2%<br>
                2013：CS 60% + <span style="color:#1565C0;font-weight:700;">Merlot 30%</span> + CF 8% + PV 2%<br>
                <span style="color:#2E7D32;">→ Merlot 翻倍↑，RP 90分</span>
              </div>
            </div>
          </div>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:0.72rem;border-radius:8px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.07);">
          <thead>
            <tr style="background:#37474F;color:#fff;">
              <th style="padding:6px 10px;text-align:left;width:26%;">比較項目</th>
              <th style="padding:6px 10px;text-align:center;color:#FFB300;">☀️ 2010</th>
              <th style="padding:6px 10px;text-align:center;color:#90CAF9;">🌧️ 2013</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background:#FFF8E1;">
              <td style="padding:5px 10px;font-weight:600;color:#333;">氣候條件</td>
              <td style="padding:5px 10px;text-align:center;color:#E65100;">炎熱乾燥・完美成熟</td>
              <td style="padding:5px 10px;text-align:center;color:#1565C0;">涼爽多雨・成熟延遲</td>
            </tr>
            <tr style="background:#F5F5F5;">
              <td style="padding:5px 10px;font-weight:600;color:#333;">主要挑戰</td>
              <td style="padding:5px 10px;text-align:center;color:#E65100;">過度成熟・酸度不足</td>
              <td style="padding:5px 10px;text-align:center;color:#1565C0;">成熟不足・酸度過高</td>
            </tr>
            <tr style="background:#FFF8E1;">
              <td style="padding:5px 10px;font-weight:600;color:#333;">調配策略</td>
              <td style="padding:5px 10px;text-align:center;color:#E65100;">↑ CF (+5-10%)清新</td>
              <td style="padding:5px 10px;text-align:center;color:#1565C0;">↑ Merlot (+10-15%)圓潤</td>
            </tr>
            <tr style="background:#F5F5F5;">
              <td style="padding:5px 10px;font-weight:600;color:#333;">最終風格</td>
              <td style="padding:5px 10px;text-align:center;color:#E65100;">濃郁強勁・超長陳年</td>
              <td style="padding:5px 10px;text-align:center;color:#1565C0;">優雅平衡・早期適飲</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  // ========== 第七章：現代技術與調配創新 ==========
  {
    type: 'chapter-divider',
    chapter: '7',
    title: '現代技術與調配創新',
    subtitle: '科技賦能傳統藝術',
    icon: '🔬',
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },

  {
    type: 'content',
    title: '現代調配技術革新',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🔬 精密分析技術</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">現代實驗室可精確分析每個組成部分的化學成分，包括酚類化合物、色素、香氣分子等數百種化合物。數據讓調配決策從「憑感覺」進化為「數據支持的直覺」，準確度提升 30%。<div style="background:#EDE7F6;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#4527A0;margin-top:7px;">化學分析 + 感官評估 = 更精準的調配決策</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">💨 微氧化技術革命</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">精確控制氧氣接觸量（0.5-2 mg/L/月）和時間，能軟化單寧、穩定色素、促進香氣分子聚合，使不同組分更快融合為和諧整體，縮短調配到裝瓶的時間週期。<div style="background:#E0F2F1;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#00695C;margin-top:7px;">微氧化讓調配組分提前 6-12 個月達到和諧融合</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">💻 數位化管理系統</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">先進酒莊使用專業軟體記錄每次調配詳細資料：品種、地塊、發酵參數、感官評分、最終比例等。多年累積後，系統可分析歷史模式，為未來決策提供科學參考。<div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1565C0;margin-top:7px;">大數據分析：10 年調配歷史形成決策支持系統</div></div>
          </div>
        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '頂級酒莊採用的創新調配工具',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🔍 光譜分析儀</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">使用近紅外光譜（NIR）技術，幾分鐘內快速分析酒液化學成分，即時檢測總酚類、單寧、花青素含量，預測陳年潛力並確保批次品質一致性。<div style="background:#EDE7F6;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#4527A0;margin-top:7px;">分析速度：從 2-3 天縮短至 5 分鐘</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🖥️ 調配軟體系統</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">AI 輔助的電腦調配比例計算與模擬，快速試算數十種組合的理論效果，整合歷史數據與預測模型，部分已整合機器學習基於 1,000+ 調配案例提供智慧建議。<div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1565C0;margin-top:7px;">65% 中大型酒莊採用・€2K-10K/年</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">👃 感官分析室</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">按 ISO 8589 標準設計的專業品鑑空間，消除光線、溫度、氣味等環境干擾，配備獨立品鑑隔間、標準品鑑杯、記錄系統，確保調配品質評估的客觀性。<div style="background:#E0F2F1;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#00695C;margin-top:7px;">溫度 20±2°C・濕度 60-70%・中性光源</div></div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
          <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">📈</div>
            <div style="font-weight:700;font-size:0.78rem;">技術普及率</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">80-90%</div>
            <div style="font-size:0.65rem;opacity:0.85;">頂級酒莊已採用</div>
          </div>
          <div style="background:linear-gradient(135deg,#1565C0,#1976D2);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">💰</div>
            <div style="font-weight:700;font-size:0.78rem;">投資回報</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">+15-25%</div>
            <div style="font-size:0.65rem;opacity:0.85;">品質精準度提升</div>
          </div>
          <div style="background:linear-gradient(135deg,#00695C,#00897B);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">⏱️</div>
            <div style="font-weight:700;font-size:0.78rem;">效率提升</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">-40%</div>
            <div style="font-size:0.65rem;opacity:0.85;">決策時間縮短</div>
          </div>
          <div style="background:linear-gradient(135deg,#B71C1C,#C62828);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">🎯</div>
            <div style="font-weight:700;font-size:0.78rem;">一致性</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">&lt; 5%</div>
            <div style="font-size:0.65rem;opacity:0.85;">批次差異率</div>
          </div>
        </div>
      </div>
    `
  },

  // ========== 知識檢測：現代技術與調配創新 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：現代技術與調配創新',
    questions: [
      {
        question: '光譜分析儀的主要優勢是什麼？',
        options: [
          '完全取代人工品鑑',
          '在幾分鐘內快速分析化學成分',
          '降低葡萄酒生產成本',
          '自動完成調配比例決策'
        ],
        correct: 1,
        explanation: '光譜分析儀使用近紅外光譜技術，能在5分鐘內快速檢測總酚類、單寧、花青素等成分，將傳統化學分析時間從2-3天縮短至幾分鐘。'
      },
      {
        question: '調配軟體系統如何輔助釀酒師決策？',
        options: [
          '自動替代釀酒師做出所有決策',
          '只負責記錄調配歷史數據',
          '快速試算多種組合並整合歷史數據提供建議',
          '僅用於計算成本效益'
        ],
        correct: 2,
        explanation: '調配軟體能快速試算數十種不同組合的理論效果，整合歷史數據與預測模型，提供智慧建議。部分軟體已開始整合機器學習，基於1000+個調配案例提供推薦。'
      }
    ]
  },

  // ========== 第八章：新世界與舊世界的調配理念 ==========
  {
    type: 'chapter-divider',
    chapter: '8',
    title: '新世界與舊世界調配理念',
    subtitle: '傳統與創新的對話',
    icon: '🌍',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },

  {
    type: 'content',
    title: '全球調配理念的三大流派',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#37474F,#546E7A);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🏛️ 波爾多：風土守護者</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">嚴格遵循傳統品種組合（CS+Merlot+CF），強調風土純粹表達，追求優雅平衡，重視超長陳年潛力（20-50年），尊重 AOC 法規。<div style="background:#ECEFF1;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#37474F;margin-top:7px;">風土表達·優雅平衡·超長陳年·傳統尊重</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF6D00);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🌟 納帕谷：果味先鋒</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">創新品種組合嘗試（加入 Syrah、Malbec 等），強調濃郁果味與即時享受，早期適飲性優先（3-10年），市場導向的風格設計。<div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#E65100;margin-top:7px;">濃郁果味·早期適飲·創新組合·市場導向</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🔬 澳洲：技術實用主義</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">科技輔助決策（光譜分析、預測模型），靈活跨區域調配（South Australia+Barossa），追求穩定品質與批次一致性，成本效益導向。<div style="background:#E0F2F1;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#00695C;margin-top:7px;">科技驅動·靈活調配·穩定品質·跨區混釀</div></div>
          </div>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:0.72rem;border-radius:8px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.07);">
          <thead>
            <tr style="background:#37474F;color:#fff;">
              <th style="padding:5px 10px;text-align:left;width:22%;">比較面向</th>
              <th style="padding:5px 10px;text-align:center;">🏛️ 波爾多</th>
              <th style="padding:5px 10px;text-align:center;">🌟 納帕谷</th>
              <th style="padding:5px 10px;text-align:center;">🔬 澳洲</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background:#FFEBEE;">
              <td style="padding:5px 10px;font-weight:600;color:#333;">核心價值</td>
              <td style="padding:5px 10px;text-align:center;color:#37474F;">風土·傳統</td>
              <td style="padding:5px 10px;text-align:center;color:#E65100;">果味·創新</td>
              <td style="padding:5px 10px;text-align:center;color:#00695C;">科技·效益</td>
            </tr>
            <tr style="background:#F5F5F5;">
              <td style="padding:5px 10px;font-weight:600;color:#333;">品種限制</td>
              <td style="padding:5px 10px;text-align:center;color:#37474F;">嚴格遵循 AOC</td>
              <td style="padding:5px 10px;text-align:center;color:#E65100;">自由嘗試組合</td>
              <td style="padding:5px 10px;text-align:center;color:#00695C;">靈活跨區混釀</td>
            </tr>
            <tr style="background:#FFEBEE;">
              <td style="padding:5px 10px;font-weight:600;color:#333;">陳年目標</td>
              <td style="padding:5px 10px;text-align:center;color:#37474F;">20-50 年超長</td>
              <td style="padding:5px 10px;text-align:center;color:#E65100;">3-10 年早飲</td>
              <td style="padding:5px 10px;text-align:center;color:#00695C;">彈性設定</td>
            </tr>
            <tr style="background:#F5F5F5;">
              <td style="padding:5px 10px;font-weight:600;color:#333;">風格追求</td>
              <td style="padding:5px 10px;text-align:center;color:#37474F;">優雅·精緻</td>
              <td style="padding:5px 10px;text-align:center;color:#E65100;">力量·濃郁</td>
              <td style="padding:5px 10px;text-align:center;color:#00695C;">穩定·一致</td>
            </tr>
            <tr style="background:#FFEBEE;">
              <td style="padding:5px 10px;font-weight:600;color:#333;">調配靈活度</td>
              <td style="padding:5px 10px;text-align:center;color:#37474F;">框架內±5%</td>
              <td style="padding:5px 10px;text-align:center;color:#E65100;">大膽±20%</td>
              <td style="padding:5px 10px;text-align:center;color:#00695C;">市場導向</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  {
    type: 'content',
    title: '調配理念的演進趨勢',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🏛️ 舊世界現代化</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">傳統產區如波爾多正在吸收新世界的技術創新，同時保持自身的風土特色。現代化設備的引入沒有改變基本調配哲學，而是讓傳統理念得到更精確的執行。<div style="background:#FFEBEE;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#B71C1C;margin-top:7px;">技術現代化 + 傳統理念 = 進化的經典風格</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🌟 新世界精緻化</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">新世界產區越來越重視風土表達和調配的精緻度，從早期的果味主導風格逐漸發展出更具複雜性和陳年潛力的調配理念。<div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1565C0;margin-top:7px;">從簡單果味到複雜優雅的風格轉變</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🌐 全球化影響</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.75;">國際市場的需求和酒評家的偏好正在影響全球調配趨勢，促進了不同產區間的相互學習與融合，形成新的「全球化優質葡萄酒」標準。<div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1B5E20;margin-top:7px;">全球化推動調配理念的交流與融合</div></div>
          </div>
        </div>
      </div>
    `
  },

  // ========== 知識檢測：新世界與舊世界的調配理念 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：新世界與舊世界的調配理念',
    questions: [
      {
        question: '舊世界（波爾多）與新世界在調配理念上最核心的差異是什麼？',
        options: [
          '使用的葡萄品種完全不同',
          '舊世界追求風土表達，新世界追求風格一致性',
          '舊世界不使用科技，新世界完全依賴技術',
          '新世界的葡萄酒品質更高'
        ],
        correct: 1,
        explanation: '舊世界波爾多強調「風土表達」，調配是為了反映年份和地塊特性；新世界則追求「風格一致性」，調配是為了每年達到設定的目標風格。這是兩者最核心的哲學差異。'
      },
      {
        question: '在陳年潛力方面，波爾多傳統調配與新世界有何不同？',
        options: [
          '波爾多追求3-10年早期適飲',
          '新世界追求20-50年超長陳年',
          '波爾多追求20-50年超長陳年',
          '兩者陳年潛力完全相同'
        ],
        correct: 2,
        explanation: '波爾多傳統調配追求20-50年超長陳年潛力，透過高比例Cabernet Sauvignon和優雅平衡的風格；新世界則多追求3-10年的早期適飲性，強調果味濃郁和即時享受。'
      }
    ]
  },

  // ========== 第九章：調配品鑑實務 ==========
  {
    type: 'chapter-divider',
    chapter: '9',
    title: '調配品鑑實務',
    subtitle: '培養專業的調配感知力',
    icon: '👅',
    background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'
  },

  {
    type: 'content',
    title: '專業調配品鑑技巧',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">👁️ 視覺評估</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">在白色背景下傾斜酒杯 45°，觀察色澤深度（CS深紫vs Merlot寶石紅）、色調和諧、透明度與光澤（淡水緣示陳年潛力），預測陳年色澤發展方向。<div style="background:#EDE7F6;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#4527A0;margin-top:7px;">評估 30-60秒・關鍵：色調和諧·深度一致</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">👃 香氣分析</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">分三階段：前調（輕聞 CS黑醋栗/Merlot李子/CF紫羅蘭）→ 中調（搖杯後橡木桶香草/煙燻）→ 後調（聞空杯評持久度）。優秀調配香氣和諧融合。<div style="background:#E0F2F1;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#00695C;margin-top:7px;">評估 2-3分鐘・關鍵：層次複雜·和諧融合</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">👅 口感評估</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">三段品鑑：入口果味爆發感 → 中段酸/單寧/酒精平衡 → 尾韻長度（優秀&gt;60秒）。完美調配渾然一體，感受整體而非各別品種。<div style="background:#FFEBEE;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#B71C1C;margin-top:7px;">評估 1-2分鐘・關鍵：平衡·融合·餘韻</div></div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
          <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">👁️</div>
            <div style="font-weight:700;font-size:0.78rem;">視覺評估</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">30-60s</div>
            <div style="font-size:0.65rem;opacity:0.85;">色澤和諧度</div>
          </div>
          <div style="background:linear-gradient(135deg,#00695C,#00897B);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">👃</div>
            <div style="font-weight:700;font-size:0.78rem;">香氣分析</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">2-3min</div>
            <div style="font-size:0.65rem;opacity:0.85;">分層複雜度</div>
          </div>
          <div style="background:linear-gradient(135deg,#B71C1C,#C62828);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">👅</div>
            <div style="font-weight:700;font-size:0.78rem;">口感評估</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">1-2min</div>
            <div style="font-size:0.65rem;opacity:0.85;">結構平衡</div>
          </div>
          <div style="background:linear-gradient(135deg,#E65100,#FF6D00);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">⏱️</div>
            <div style="font-weight:700;font-size:0.78rem;">總評估</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">4-6min</div>
            <div style="font-size:0.65rem;opacity:0.85;">完整品鑑流程</div>
          </div>
        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '調配品鑑的三大練習方法',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🎓 初級：品種識別</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">先分別品嚐單一品種熟悉各自特徵：CS（黑醋栗/高單寧）、Merlot（李子/柔順）、CF（紫羅蘭/高酸度）。再嘗試簡單混釀，識別各品種貢獻。<div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1B5E20;margin-top:7px;">成功標準：正確識別率 &gt; 80%</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">📊 中級：比例判斷</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">熟悉三種基礎比例類型：CS主導（&gt;65%結構感強）、Merlot主導（&gt;60%果味豐富）、平衡型（CS 50-60%）。進行盲品挑戰，估算各品種比例。<div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1565C0;margin-top:7px;">成功標準：比例判斷誤差 &lt; 15%</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF6D00);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">💡 高級：改善建議</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">情境模擬：單寧過強（CS 80%）→ 建議增 Merlot至 25-30%；果味不足（CF 20%+）→ 建議增 Merlot 至 20-30%。提出 3 個以上可行解法。<div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#E65100;margin-top:7px;">成功標準：提出 3+ 解法並說明理由</div></div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
          <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">🎓</div>
            <div style="font-weight:700;font-size:0.78rem;">初級</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">&gt;80%</div>
            <div style="font-size:0.65rem;opacity:0.85;">識別正確率</div>
          </div>
          <div style="background:linear-gradient(135deg,#1565C0,#1976D2);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">📊</div>
            <div style="font-weight:700;font-size:0.78rem;">中級</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">&lt;15%</div>
            <div style="font-size:0.65rem;opacity:0.85;">比例誤差</div>
          </div>
          <div style="background:linear-gradient(135deg,#E65100,#FF6D00);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">💡</div>
            <div style="font-weight:700;font-size:0.78rem;">高級</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">3+</div>
            <div style="font-size:0.65rem;opacity:0.85;">優化解法數</div>
          </div>
          <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">⏱️</div>
            <div style="font-weight:700;font-size:0.78rem;">練習週期</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">6-12m</div>
            <div style="font-size:0.65rem;opacity:0.85;">達到高級水準</div>
          </div>
        </div>
      </div>
    `
  },

  // ========== 第十章：課程總結與進階學習 ==========
  {
    type: 'chapter-divider',
    chapter: '10',
    title: '課程總結與進階學習',
    subtitle: '調配藝術的持續探索',
    icon: '🎓',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  {
    type: 'content',
    title: '調配藝術的核心要點總結',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:8px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🎯 基礎原理</div>
            <div style="padding:9px 12px 11px;font-size:0.72rem;color:#333;line-height:1.7;">調配創造任何單一品種無法達到的複雜度（1+1+1&gt;3）。CS提供骨架·Merlot賦予肉感·CF增添優雅。比例不僅是技術決策，更反映釀酒師的美學哲學，每1%的調整都能改變風格。<div style="background:#FFEBEE;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#B71C1C;margin-top:6px;">調配 = 藝術 + 科學 + 哲學</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:8px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🔬 實務技巧</div>
            <div style="padding:9px 12px 11px;font-size:0.72rem;color:#333;line-height:1.7;">系統性品鑑流程（4-6分鐘/樣）不能急於下結論。小樣試調（100-200ml）節約成本快速驗證。5-10人品鑑團隊確保客觀評估。50-100次小樣品鑑形成最終調配決策。<div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1565C0;margin-top:6px;">品鑑 + 試驗 + 協作 = 成功調配</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF6D00);padding:8px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🌡️ 決策因素</div>
            <div style="padding:9px 12px 11px;font-size:0.72rem;color:#333;line-height:1.7;">溫暖年份↑CF清新·涼爽年份↑Merlot圓潤（±10-15%靈活調整）。消費者偏好推動早期適飲化。光譜分析·AI輔助·微氧化等現代技術讓決策更精準。<div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#E65100;margin-top:6px;">氣候 + 市場 + 技術 = 動態調配</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:8px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🚀 發展趨勢</div>
            <div style="padding:9px 12px 11px;font-size:0.72rem;color:#333;line-height:1.7;">新舊世界相互學習：舊世界現代化·新世界精緻化，邊界逐漸模糊。永續發展影響品種選擇。市場從標準化轉向個性化差異化，釀酒師有更多空間表達獨特風格。<div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#1B5E20;margin-top:6px;">融合 + 永續 + 個性 = 新時代調配</div></div>
          </div>
        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '進階學習路徑與建議',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">🏭 實務進階</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">參觀酒莊調配過程（3-6月）、報名 WSET/CMS 工作坊、購買單品種酒款自行試調實驗、系統性建立品鑑筆記資料庫。<div style="background:#E0F2F1;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#00695C;margin-top:7px;">週期 6-12個月・投入 €2K-10K</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">📚 理論深化</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">研究葡萄酒化學（酚類/花青素/香氣分子）、比較全球調配哲學、追蹤最新技術發展、深入分析 Opus One/Sassicaia 等成功案例。<div style="background:#EDE7F6;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#4527A0;margin-top:7px;">週期 1-2年・目標 MW/DipWSET 等級</div></div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF6D00);padding:9px 12px;color:#fff;font-weight:700;font-size:0.82rem;">💼 商業應用</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.7;">研究市場偏好差異（亞洲柔順/歐美結構）、學習成本控制與品質平衡、掌握調配故事行銷、分析年輕世代對早期適飲的需求趨勢。<div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.69rem;color:#E65100;margin-top:7px;">應用：酒莊·貿易·評分·教育</div></div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
          <div style="background:linear-gradient(135deg,#00695C,#00897B);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">🏭</div>
            <div style="font-weight:700;font-size:0.78rem;">實務階段</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">6-12m</div>
            <div style="font-size:0.65rem;opacity:0.85;">工作坊 + 實習</div>
          </div>
          <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">📚</div>
            <div style="font-weight:700;font-size:0.78rem;">理論階段</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">1-2y</div>
            <div style="font-size:0.65rem;opacity:0.85;">MW/DipWSET</div>
          </div>
          <div style="background:linear-gradient(135deg,#E65100,#FF6D00);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">💼</div>
            <div style="font-weight:700;font-size:0.78rem;">商業應用</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">持續</div>
            <div style="font-size:0.65rem;opacity:0.85;">市場·成本·行銷</div>
          </div>
          <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);border-radius:8px;padding:8px 10px;text-align:center;color:#fff;">
            <div style="font-size:1.1rem;margin-bottom:3px;">🎓</div>
            <div style="font-weight:700;font-size:0.78rem;">終身學習</div>
            <div style="font-size:0.85rem;font-weight:800;margin:2px 0;">∞</div>
            <div style="font-size:0.65rem;opacity:0.85;">調配藝術探索</div>
          </div>
        </div>
      </div>
    `
  },

  // ========== 知識檢測：調配品鑑實務 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：調配品鑑實務',
    questions: [
      {
        question: '在專業調配品鑑中，識別各個品種特徵的成功標準是什麼？',
        options: [
          '正確率達到60%以上',
          '正確率達到80%以上',
          '正確率達到90%以上',
          '正確率達到100%'
        ],
        correct: 1,
        explanation: '初級練習的目標是在混釀中識別各品種特徵，成功標準為80%以上的正確識別率。這需要先熟悉CS、Merlot、CF各自的香氣和口感特徵。'
      },
      {
        question: '當混釀出現「單寧過於強勁，口感生澀」的問題時，最有效的調配改善方法是？',
        options: [
          '增加 Cabernet Sauvignon 比例',
          '增加 Merlot 比例來軟化單寧',
          '減少所有葡萄品種的比例',
          '延長浸皮時間'
        ],
        correct: 1,
        explanation: '當單寧過強時（如CS 80%配方），應增加Merlot至25-30%來軟化單寧，或增加CF至10-15%提升優雅度，也可考慮減少新橡木桶比例。'
      }
    ]
  },

  {
    type: 'quiz-comprehensive',
    title: '綜合能力測驗',
    description: '測試您對調配藝術的整體理解',
    timeLimit: 25,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: '在波爾多左岸的經典調配中，Cabernet Sauvignon通常扮演什麼角色？',
        options: [
          '提供果味和柔順度',
          '增加花香和酸度',
          '構建結構和陳年潛力',
          '降低酒精度'
        ],
        correct: 2,
        explanation: 'Cabernet Sauvignon在左岸調配中主要負責提供堅實的結構、深邃的顏色和優異的陳年潛力，是酒款的骨架。'
      },
      {
        id: 2,
        type: 'scenario',
        question: '2018年是一個溫暖乾燥的年份，如果您是Pauillac酒莊的釀酒師，您會如何調整正常的調配比例？',
        scenario: '正常年份調配：CS 70% + M 25% + CF 5%',
        options: [
          '增加Merlot比例到35%',
          '增加Cabernet Franc比例到12%',
          '減少所有品種，只用Cabernet Sauvignon',
          '保持比例不變'
        ],
        correct: 1,
        explanation: '在溫暖年份，增加Cabernet Franc的比例可以為酒款帶來更多的清新感、優雅度和酸度平衡，避免過度厚重。'
      },
      {
        id: 3,
        type: 'analysis',
        question: '分析以下調配比例的風格特點：Merlot 85% + Cabernet Franc 15%',
        options: [
          '結構強勁，需要長期陳年',
          '柔順圓潤，早期適飲性佳',
          '酸度突出，風格清新',
          '單寧厚重，適合搭配重口味料理'
        ],
        correct: 1,
        explanation: '高比例的Merlot會創造出柔順圓潤的口感，配合少量Cabernet Franc增加複雜度，整體風格偏向易飲和優雅。'
      }
    ]
  },

  {
    type: 'certificate',
    title: '課程完成證書',
    achievement: 'L3-6 調配藝術與釀酒師哲學',
    description: '恭喜您完成了調配藝術的深度學習！您已經掌握了波爾多調配的核心原理、實務技巧和專業判斷能力。',
    skills: [
      '理解波爾多經典調配比例與原理',
      '掌握不同葡萄品種在調配中的角色',
      '了解釀酒師的調配決策過程',
      '具備基礎的調配品鑑能力',
      '認識年份差異對調配策略的影響'
    ],
  nextSteps: '建議繼續學習L3-5：釀造工藝與技術創新（含傳統工藝章節），從釀造角度深化對風格與調配決策的理解。',
    certificate: '您已獲得本課程學習證明',
    shareMessage: '我剛完成了Level 3的「調配藝術與釀酒師哲學」課程！深入了解了波爾多混釀的奧秘，從基礎原理到實務技巧。 #波爾多葡萄酒 #調配藝術 #葡萄酒學習'
  }
];

export default l36Content;
