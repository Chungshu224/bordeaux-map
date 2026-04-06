// L3-3: 極端年份與氣候風險管理
// 從歷史災難中學習，掌握應對極端氣候的策略與未來挑戰

export const l33Content = [
  // 課程簡介
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          在波爾多700年的葡萄酒歷史中，極端年份既是災難也是轉機。1956年的毀滅性霜凍一夜間摧毀了大量老藤，卻也促使產業現代化；2003年的熱浪打破了傳統氣候觀念，加速了應對氣候變化的創新；2017年的春季霜凍讓產量銳減40%，但倖存的葡萄釀出了驚人的品質。
        </p>

        <p class="intro-context">
          本課程將系統分析波爾多歷史上的關鍵極端年份，深入理解霜凍、冰雹、乾旱、熱浪、洪水、病害等六大氣候風險的特徵與影響。我們將探索頂級酒莊如何透過技術防禦、保險機制、年份管理等策略應對風險，並分析氣候變化如何改變極端事件的頻率與強度，以及產業未來面臨的挑戰。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>📚 系統分析歷史極端年份</h4>
            <p>深入了解1956、1991、2003、2017等10個重要極端年份的成因、影響與產業應對</p>
          </div>

          <div class="point-item">
            <h4>⚠️ 理解6大氣候風險類型</h4>
            <p>掌握霜凍、冰雹、乾旱、熱浪、洪水、病害的發生機制、破壞模式與防治方法</p>
          </div>

          <div class="point-item">
            <h4>🛡️ 掌握風險管理策略</h4>
            <p>學習技術防禦（風扇、蠟燭、防雹網）、保險機制、葡萄園多元化等5大策略維度</p>
          </div>

          <div class="point-item">
            <h4>🍷 學習極端年份品鑑技巧</h4>
            <p>理解極端氣候如何影響葡萄酒風格，以及極端年份的投資價值評估原則</p>
          </div>

          <div class="point-item">
            <h4>🌡️ 展望氣候變化下的新挑戰</h4>
            <p>分析全球暖化如何改變極端事件頻率，以及新技術在氣候風險管理中的應用</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將全面理解波爾多如何在極端氣候中生存與發展，以及這些歷史經驗對未來的啟示。
        </p>

        <div class="course-info">
          <p><strong>預計學習時間：</strong>50分鐘</p>
          <p><strong>難度等級：</strong>高級專業</p>
        </div>
      </div>
    `,
    icon: '⛈️'
  },

  // ========== 第一章：波爾多極端年份歷史檔案 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '波爾多極端年份歷史檔案',
    subtitle: '從災難中學習的十個關鍵年份',
    icon: '📜',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },

  {
    type: 'content',
    title: '極端年份：定義與三種類型',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#37474F,#455A64);border-radius:10px;padding:11px 16px;margin-bottom:12px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:1.4rem;">⛈️</span>
          <div style="color:#fff;font-size:0.81rem;line-height:1.7;">氣候事件<strong>顯著偏離常態</strong>，造成產量、品質或經濟損失達到顯著水平的年份——既是災難，也是產業進化的契機。</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#D32F2F);padding:9px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">⚠️ 災難型</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;">Catastrophic Year</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="background:#FFEBEE;border-radius:5px;padding:4px 7px;font-size:0.74rem;color:#B71C1C;margin-bottom:6px;font-weight:600;">產量損失 &gt; 50%</div>
              <div style="font-size:0.76rem;color:#555;line-height:1.75;">品質嚴重受損，釀酒潛力大幅削減</div>
              <div style="margin-top:6px;font-size:0.73rem;color:#999;">代表：1956・1991・2017・2021</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F57C00);padding:9px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">🌡️ 挑戰型</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;">Challenging Year</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="background:#FFF3E0;border-radius:5px;padding:4px 7px;font-size:0.74rem;color:#E65100;margin-bottom:6px;font-weight:600;">風格顯著偏離常態</div>
              <div style="font-size:0.76rem;color:#555;line-height:1.75;">極端氣候下可釀特殊風格，評價兩極</div>
              <div style="margin-top:6px;font-size:0.73rem;color:#999;">代表：2003・2011・2019・2022</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">💎 機會型</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;">Opportunity Year</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 7px;font-size:0.74rem;color:#1B5E20;margin-bottom:6px;font-weight:600;">困境中強者凸顯</div>
              <div style="font-size:0.76rem;color:#555;line-height:1.75;">精細管理者在困難條件下產出驚人品質</div>
              <div style="margin-top:6px;font-size:0.73rem;color:#999;">代表：2013・2018・2020</div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '10個改變波爾多的極端年份',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#D32F2F);padding:8px 12px;display:flex;align-items:center;justify-content:space-between;">
              <div style="color:#fff;font-weight:700;font-size:0.95rem;">❄️ 1956</div>
              <span style="background:rgba(255,255,255,0.2);color:#fff;border-radius:12px;padding:1px 7px;font-size:0.69rem;">災難型</span>
            </div>
            <div style="padding:8px 11px 10px;">
              <div style="font-size:0.77rem;font-weight:700;color:#333;margin-bottom:3px;">世紀大霜凍</div>
              <div style="font-size:0.72rem;color:#e53935;margin-bottom:5px;">-20°C～-24°C，2月</div>
              <div style="font-size:0.74rem;color:#555;line-height:1.65;margin-bottom:5px;">80-90%葡萄藤凍死，百年老藤樹幹爆裂，數千小農破產。</div>
              <div style="background:#FFEBEE;border-radius:4px;padding:3px 7px;font-size:0.72rem;color:#B71C1C;">遺產：大幅增加Merlot，Malbec幾乎消失</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#880E4F,#AD1457);padding:8px 12px;display:flex;align-items:center;justify-content:space-between;">
              <div style="color:#fff;font-weight:700;font-size:0.95rem;">❄️ 1991</div>
              <span style="background:rgba(255,255,255,0.2);color:#fff;border-radius:12px;padding:1px 7px;font-size:0.69rem;">災難型</span>
            </div>
            <div style="padding:8px 11px 10px;">
              <div style="font-size:0.77rem;font-weight:700;color:#333;margin-bottom:3px;">春霜災難</div>
              <div style="font-size:0.72rem;color:#e53935;margin-bottom:5px;">-3°C～-7°C，4月20-21日</div>
              <div style="font-size:0.74rem;color:#555;line-height:1.65;margin-bottom:5px;">80-90%新芽凍壞，產量下降70-80%，戰後最低產量之一。</div>
              <div style="background:#FCE4EC;border-radius:4px;padding:3px 7px;font-size:0.72rem;color:#880E4F;">遺產：大規模投資防霜設備，保險業發展</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F57C00);padding:8px 12px;display:flex;align-items:center;justify-content:space-between;">
              <div style="color:#fff;font-weight:700;font-size:0.95rem;">🌡️ 2003</div>
              <span style="background:rgba(255,255,255,0.2);color:#fff;border-radius:12px;padding:1px 7px;font-size:0.69rem;">挑戰型</span>
            </div>
            <div style="padding:8px 11px 10px;">
              <div style="font-size:0.77rem;font-weight:700;color:#333;margin-bottom:3px;">極端熱浪年</div>
              <div style="font-size:0.72rem;color:#e65100;margin-bottom:5px;">8月多次超過 40°C</div>
              <div style="font-size:0.74rem;color:#555;line-height:1.65;margin-bottom:5px;">酒精度14-15.5%，酸度極低，市場評價兩極（氣候警鐘）。</div>
              <div style="background:#FFF3E0;border-radius:4px;padding:3px 7px;font-size:0.72rem;color:#E65100;">遺產：重新定義「成熟度」，不只看糖分</div>
            </div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4A148C,#6A1B9A);padding:8px 12px;display:flex;align-items:center;justify-content:space-between;">
              <div style="color:#fff;font-weight:700;font-size:0.95rem;">❄️🌫️ 2017</div>
              <span style="background:rgba(255,255,255,0.2);color:#fff;border-radius:12px;padding:1px 7px;font-size:0.69rem;">災難型</span>
            </div>
            <div style="padding:8px 11px 10px;">
              <div style="font-size:0.77rem;font-weight:700;color:#333;margin-bottom:3px;">春霜+霜霉病雙重災</div>
              <div style="font-size:0.72rem;color:#7B1FA2;margin-bottom:5px;">損失超10億€，50-70%萌芽凍壞</div>
              <div style="font-size:0.74rem;color:#555;line-height:1.65;margin-bottom:5px;">暖化導致早萌芽，霜凍期仍來——脆弱性增加的反直覺警示。</div>
              <div style="background:#F3E5F5;border-radius:4px;padding:3px 7px;font-size:0.72rem;color:#4A148C;">遺產：暖化≠霜凍消失，早萌反增風險</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#37474F,#546E7A);padding:8px 12px;display:flex;align-items:center;justify-content:space-between;">
              <div style="color:#fff;font-weight:700;font-size:0.95rem;">⚠️ 2021</div>
              <span style="background:rgba(255,255,255,0.2);color:#fff;border-radius:12px;padding:1px 7px;font-size:0.69rem;">災難型</span>
            </div>
            <div style="padding:8px 11px 10px;">
              <div style="font-size:0.77rem;font-weight:700;color:#333;margin-bottom:3px;">春霜+冰雹+霜霉三重</div>
              <div style="font-size:0.72rem;color:#546E7A;margin-bottom:5px;">產量下降25-30%，部分產區 -50%+</div>
              <div style="font-size:0.74rem;color:#555;line-height:1.65;margin-bottom:5px;">2017+2021連續災難揭示氣候風險頻率升高的系統性問題。</div>
              <div style="background:#ECEFF1;border-radius:4px;padding:3px 7px;font-size:0.72rem;color:#37474F;">遺產：連續災難→系統性風險意識提升</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#BF360C,#D84315);padding:8px 12px;display:flex;align-items:center;justify-content:space-between;">
              <div style="color:#fff;font-weight:700;font-size:0.95rem;">🔥 2022</div>
              <span style="background:rgba(255,255,255,0.2);color:#fff;border-radius:12px;padding:1px 7px;font-size:0.69rem;">挑戰型</span>
            </div>
            <div style="padding:8px 11px 10px;">
              <div style="font-size:0.77rem;font-weight:700;color:#333;margin-bottom:3px;">史上最熱最乾旱夏季</div>
              <div style="font-size:0.72rem;color:#BF360C;margin-bottom:5px;">100+天 &gt;30°C，6-8月幾乎無雨</div>
              <div style="font-size:0.74rem;color:#555;line-height:1.65;margin-bottom:5px;">老藤/黏土勝，年輕藤/砂土敗；波爾多向地中海氣候轉變的明證。</div>
              <div style="background:#FBE9E7;border-radius:4px;padding:3px 7px;font-size:0.72rem;color:#BF360C;">遺產：灌溉可能成為必需——政策辯論升溫</div>
            </div>
          </div>
        </div>
        <div style="background:linear-gradient(135deg,#263238,#37474F);border-radius:8px;padding:9px 14px;text-align:center;">
          <span style="color:#fff;font-size:0.79rem;">📌 春霜與熱浪/乾旱是主要極端風險，且頻率正在增加——從「百年一遇」演變為「數年一遇」</span>
        </div>
      </div>
    `,
    _legacyData: [
      {
        year: '1956',
        type: '災難型 ⚠️⚠️⚠️⚠️⚠️',
        event: '世紀大霜凍',
        date: '1956年2月',
        temperature: '-20°C至-24°C',
        damage: '80-90%葡萄藤凍死，許多百年老藤樹幹爆裂。數千家小酒農破產。',
        impact: '重新種植時大幅增加Merlot比例，Malbec幾乎消失，從根本上改變了波爾多品種結構。',
        legacy: '促使開發霜凍預警系統和保護技術。1950年代老藤極其稀有。'
      },
      {
        year: '1991',
        type: '災難型 ⚠️⚠️⚠️⚠️⚠️',
        event: '春霜災難',
        date: '1991年4月20-21日',
        temperature: '-3°C至-7°C',
        damage: '80-90%新芽凍壞，產量下降70-80%，是戰後最低產量年份之一。',
        regionalDiff: 'Pomerol和Saint-Émilion平原（低窪）全毀，高原受損較輕。',
        impact: '大規模投資霜凍保護系統（加熱器、風扇、噴灑），葡萄酒保險產品發展。'
      },
      {
        year: '2003',
        type: '挑戰型 ⚠️⚠️⚠️⚠️',
        event: '極端熱浪年',
        temperature: '8月多次超過40°C',
        stats: '6-8月平均氣溫比常年高3-5°C，有記錄以來最熱夏季',
        wineStyle: '酒精度14-15.5%（常年12.5-13.5%），酸度極低，過度成熟風味，平衡感欠佳。',
        controversy: '市場反應兩極：支持者認為是"新氣候偉大年份"，批評者認為失去經典優雅。',
        impact: '促使產業重新定義"成熟度"，不只看糖分，更關注酚類和酸度平衡。成為氣候變化警鐘。'
      },
      {
        year: '2013',
        type: '機會型 ⚠️⚠️⚠️',
        event: '寒冷多雨挑戰年',
        conditions: '春季寒冷、夏季多雨（降雨量高50%）、秋季涼爽',
        challenges: '開花期落果、病害壓力大、成熟度不足、採收決策艱難',
        result: '整體品質中等，但頂級酒莊通過嚴格選擇產出優雅清新酒款。差異極大。',
        lesson: '困難年份分開了優秀酒莊和平庸酒莊（Jancis Robinson MW）。證明精細管理的重要性。'
      },
      {
        year: '2017',
        type: '災難型 ⚠️⚠️⚠️⚠️⚠️',
        event: '春霜+霜霉病雙重災難',
        date: '4月27-28日霜凍',
        damage: '全波爾多50-70%萌芽凍壞，部分產區損失80-90%。夏季霜霉病爆發。',
        economic: '經濟損失超過10億歐元，數十家小酒莊面臨破產。',
        paradox: '氣候變暖促進早萌芽，但春霜風險依然存在，導致脆弱性增加。',
        lesson: '證明"氣候變暖=霜凍減少"是錯誤的，早萌芽反而增加春霜脆弱性。'
      },
      {
        year: '2018',
        type: '機會型 ⚠️⚠️⚠️',
        event: '霜霉病壓力年',
        result: '常規農法酒莊表現優秀，有機酒莊部分掙扎（銅制劑限制），整體是好年份'
      },
      {
        year: '2019',
        type: '挑戰型 ⚠️⚠️⚠️⚠️',
        event: '熱浪與乾旱',
        temperature: '6-7月兩次熱浪（40°C+）',
        result: '類似2003但程度較輕，老藤和深根系表現好。酒精度高（14-15%），風格濃郁。'
      },
      {
        year: '2020',
        type: '機會型 ⚠️',
        event: '乾燥溫暖年',
        highlight: '病害壓力極低，有機酒莊大豐收',
        result: '被譽為有機葡萄酒的"完美年份"，品質普遍優秀'
      },
      {
        year: '2021',
        type: '災難型 ⚠️⚠️⚠️⚠️⚠️',
        event: '春霜+冰雹+霜霉病三重災難',
        damage: '產量下降25-30%，部分產區損失50%+',
        systemicRisk: '連續災難（2017+2021）凸顯氣候風險頻率增加的系統性挑戰'
      },
      {
        year: '2022',
        type: '挑戰型 ⚠️⚠️⚠️⚠️⚠️',
        event: '史上最熱最乾旱夏季',
        extreme: '創歷史紀錄高溫，6-8月幾乎無降雨，累計100天以上>30°C',
        winner: '老藤、深根系、保水土壤（黏土、石灰岩）',
        loser: '年輕藤、砂土、淺土層。部分葡萄停止成熟。',
        implication: '證明波爾多正在向地中海氣候轉變，灌溉可能成為必需'
      }
    ]
  },

  {
    type: 'interactive-quiz',
    title: '知識檢測：極端年份',
    question: '1956年和2003年同為極端年份，但影響機制完全不同。以下哪個陳述最準確？',
    options: [
      '1956年是產量災難但品質影響小，2003年是品質災難但產量正常',
      '1956年改變了波爾多的品種結構，2003年促使產業重新定義"成熟度"概念',
      '1956年主要影響左岸，2003年主要影響右岸',
      '兩者都促使了灌溉系統的大規模投資'
    ],
    correct: 1,
    explanation: '1956年的世紀大霜凍凍死了80-90%的葡萄藤，酒莊在重新種植時大幅增加了更抗寒的Merlot比例，減少了Malbec（幾乎消失），從根本上改變了波爾多的品種配比。2003年極端熱浪導致葡萄極早成熟、酒精度飆升至14-15%、過度成熟風味，挑戰了傳統的"晚採收=高品質"觀念，促使產業建立新的成熟度評估體系，不只看糖分，更關注酚類成熟和酸度平衡。兩者都是產業的分水嶺事件。'
  },

  // ========== 第二章：六大氣候風險類型 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '六大氣候風險類型深度解析',
    subtitle: '理解威脅的本質與應對策略',
    icon: '⚡',
    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },

  {
    type: 'content',
    title: '氣候風險 (一)：高頻核心威脅',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#01579B,#0288D1);padding:9px 12px;">
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <div style="color:#fff;font-weight:700;font-size:0.86rem;">❄️ 春霜</div>
                <span style="background:#B71C1C;color:#fff;border-radius:10px;padding:1px 7px;font-size:0.7rem;">極高</span>
              </div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;margin-top:2px;">Spring Frost</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.74rem;font-weight:600;color:#555;margin-bottom:4px;">⏰ 4月初—5月中旬（萌芽期）</div>
              <div style="font-size:0.74rem;color:#555;line-height:1.7;margin-bottom:5px;">輻射霜：無風晴夜冷空氣沉降於低窪霜穴。-2°C 持續 &gt;2h 則嚴重損失。</div>
              <ul style="margin:0 0 6px;padding-left:13px;font-size:0.74rem;color:#333;line-height:1.8;">
                <li>新芽凍黑枯萎</li>
                <li>二次萌芽低產</li>
                <li>低窪地塊全毀</li>
              </ul>
              <div style="background:#E1F5FE;border-radius:4px;padding:4px 7px;font-size:0.72rem;color:#01579B;line-height:1.6;">🛡 加熱器/風扇/噴灑・晚修剪・避霜穴</div>
              <div style="margin-top:5px;background:#FFF9C4;border-radius:4px;padding:3px 7px;font-size:0.71rem;color:#F57F17;">⚠️ 暖冬提前萌芽 → 脆弱期與霜凍期重疊風險↑</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#37474F,#546E7A);padding:9px 12px;">
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <div style="color:#fff;font-weight:700;font-size:0.86rem;">🧊 冰雹</div>
                <span style="background:#B71C1C;color:#fff;border-radius:10px;padding:1px 7px;font-size:0.7rem;">局部毀滅</span>
              </div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;margin-top:2px;">Hail</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.74rem;font-weight:600;color:#555;margin-bottom:4px;">⏰ 5—8月（尤以6—7月）</div>
              <div style="font-size:0.74rem;color:#555;line-height:1.7;margin-bottom:5px;">強對流形成1—5cm冰雹，路徑難以預測（寬數百米至數公里）。</div>
              <ul style="margin:0 0 6px;padding-left:13px;font-size:0.74rem;color:#333;line-height:1.8;">
                <li>果皮傷口→病菌入口</li>
                <li>單一地塊損失50—100%</li>
                <li>數分鐘毀掉整季</li>
              </ul>
              <div style="background:#ECEFF1;border-radius:4px;padding:4px 7px;font-size:0.72rem;color:#37474F;line-height:1.6;">🛡 防雹網・保險70-80%覆蓋・地理分散</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F57C00);padding:9px 12px;">
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <div style="color:#fff;font-weight:700;font-size:0.86rem;">🌡️ 乾旱與熱浪</div>
                <span style="background:#B71C1C;color:#fff;border-radius:10px;padding:1px 7px;font-size:0.7rem;">頻率↑</span>
              </div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;margin-top:2px;">Drought & Heat</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.74rem;font-weight:600;color:#555;margin-bottom:4px;">⏰ 6—9月（尤以7—8月）</div>
              <div style="font-size:0.74rem;color:#555;line-height:1.7;margin-bottom:5px;">適度脅迫→濃縮；嚴重→成熟停滯/日灼，產量 -30~50%</div>
              <ul style="margin:0 0 6px;padding-left:13px;font-size:0.74rem;color:#333;line-height:1.8;">
                <li>黏土/老藤有優勢</li>
                <li>砂土/年輕藤脆弱</li>
              </ul>
              <div style="background:#FFF3E0;border-radius:4px;padding:4px 7px;font-size:0.72rem;color:#E65100;line-height:1.6;">🛡 灌溉・覆蓋・葉幕管理・耐旱砧木</div>
              <div style="margin-top:5px;background:#FFF9C4;border-radius:4px;padding:3px 7px;font-size:0.71rem;color:#F57F17;">⚠️ 2050年或每2-3年一遇</div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '氣候風險 (二)：連帶與複合威脅',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;">
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <div style="color:#fff;font-weight:700;font-size:0.86rem;">🌧️ 過度降雨</div>
                <span style="background:rgba(255,255,255,0.2);color:#fff;border-radius:10px;padding:1px 7px;font-size:0.7rem;">高</span>
              </div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;margin-top:2px;">Excessive Rainfall</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.74rem;font-weight:600;color:#555;margin-bottom:4px;">⏰ 開花期・成熟期・採收期</div>
              <ul style="margin:0 0 6px;padding-left:13px;font-size:0.74rem;color:#333;line-height:1.8;">
                <li>授粉不良→落果（開花期）</li>
                <li>濃度稀釋（成熟期）</li>
                <li>灰霉病爆發（採收期）</li>
              </ul>
              <div style="background:#E3F2FD;border-radius:4px;padding:4px 7px;font-size:0.72rem;color:#1565C0;line-height:1.6;">🛡 排水・葉幕通風・採收時機判斷</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#2E7D32,#388E3C);padding:9px 12px;">
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <div style="color:#fff;font-weight:700;font-size:0.86rem;">🦠 病害爆發</div>
                <span style="background:rgba(255,255,255,0.2);color:#fff;border-radius:10px;padding:1px 7px;font-size:0.7rem;">中-高</span>
              </div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;margin-top:2px;">Disease Outbreaks</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.74rem;font-weight:600;color:#555;margin-bottom:4px;">三大典型病害</div>
              <ul style="margin:0 0 6px;padding-left:13px;font-size:0.74rem;color:#333;line-height:1.8;">
                <li>霜霉：20-25°C 溫暖潮濕</li>
                <li>白粉：25-28°C 溫暖乾燥</li>
                <li>灰霉：成熟期潮濕</li>
              </ul>
              <div style="background:#E8F5E9;border-radius:4px;padding:4px 7px;font-size:0.72rem;color:#2E7D32;line-height:1.6;">🛡 預測模型・通風・精準噴灑時機</div>
              <div style="margin-top:5px;background:#FFF9C4;border-radius:4px;padding:3px 7px;font-size:0.71rem;color:#F57F17;">⚠️ 有機農法銅用量限制，濕年壓力更大</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4E342E,#6D4C41);padding:9px 12px;">
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <div style="color:#fff;font-weight:700;font-size:0.86rem;">💨 颶風與強風</div>
                <span style="background:rgba(255,255,255,0.2);color:#fff;border-radius:10px;padding:1px 7px;font-size:0.7rem;">中</span>
              </div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;margin-top:2px;">Storms & Wind</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.74rem;font-weight:600;color:#555;margin-bottom:4px;">⏰ 全年，以秋季為主</div>
              <ul style="margin:0 0 6px;padding-left:13px;font-size:0.74rem;color:#333;line-height:1.8;">
                <li>枝條折斷・葉片撕裂</li>
                <li>果串掉落</li>
                <li>風暴後病害風險↑（傷口）</li>
              </ul>
              <div style="background:#EFEBE9;border-radius:4px;padding:4px 7px;font-size:0.72rem;color:#4E342E;line-height:1.6;">🛡 支架加固・避風地塊・樹型管理・保險</div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  {
    type: 'interactive-quiz',
    title: '知識檢測：風險機制',
    question: '為什麼在氣候變暖的背景下，春霜風險反而可能增加（如2017年所示）？',
    options: [
      '全球變暖導致春季更加寒冷',
      '暖冬促使葡萄提早萌芽，但春季冷空氣南下的可能性依然存在，導致脆弱期與霜凍期重疊',
      '氣候變化增加了極地寒流的頻率',
      '波爾多正在向北移動，進入更高緯度的霜凍區'
    ],
    correct: 1,
    explanation: '這是反直覺但至關重要的氣候變化影響。暖冬使葡萄藤提早結束休眠，萌芽期提前10-14天（比如從4月20日提前到4月6日）。然而，春季冷空氣南下（春霜）的可能性並未消失，反而因北極增溫導致極地渦旋不穩定而可能增加。這導致葡萄藤的脆弱期（萌芽至展葉）與春霜高風險期更容易重疊。2017年4月27-28日的霜凍就是典型案例：早萌芽+突然寒流=災難性損失。這證明"氣候變暖=霜凍減少"是錯誤的，需要新的風險管理策略。'
  },

  // ========== 第三章：綜合風險管理策略 ==========
  {
    type: 'chapter-divider',
    chapter: '3',
    title: '綜合風險管理策略框架',
    subtitle: '從預防到應對的系統性方法',
    icon: '🛡️',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },

  {
    type: 'content',
    title: '風險管理五大策略框架',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1A237E,#283593);padding:8px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.85rem;">① 預防 Prevention</div>
            </div>
            <div style="padding:8px 11px 10px;">
              <div style="font-size:0.73rem;color:#555;margin-bottom:5px;">降低風險發生機率或減輕影響</div>
              <ul style="margin:0;padding-left:12px;font-size:0.74rem;color:#333;line-height:1.8;">
                <li>地塊選擇（坡地/排水佳）</li>
                <li>品種與砧木（晚萌芽/耐旱）</li>
                <li>基礎設施（排水/防霜/防雹網）</li>
              </ul>
              <div style="margin-top:5px;font-size:0.71rem;color:#888;">⏳ 長期投資（數年至數十年）</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#006064,#00838F);padding:8px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.85rem;">② 監測預警 Monitoring</div>
            </div>
            <div style="padding:8px 11px 10px;">
              <div style="font-size:0.73rem;color:#555;margin-bottom:5px;">及時發現風險，爭取應對時間</div>
              <ul style="margin:0;padding-left:12px;font-size:0.74rem;color:#333;line-height:1.8;">
                <li>微氣象站 + 衛星遙感</li>
                <li>土壤濕度感測器</li>
                <li>病害預測模型</li>
              </ul>
              <div style="margin-top:5px;font-size:0.71rem;color:#888;">⚡ 提前6-48小時預警</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#880E4F,#AD1457);padding:8px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.85rem;">③ 應對 Response</div>
            </div>
            <div style="padding:8px 11px 10px;">
              <div style="font-size:0.73rem;color:#555;margin-bottom:5px;">風險發生時的即時行動</div>
              <ul style="margin:0;padding-left:12px;font-size:0.74rem;color:#333;line-height:1.8;">
                <li>霜凍夜啟動加熱器/風扇</li>
                <li>降雨前加速採收決策</li>
                <li>冰雹後快速評估損失</li>
              </ul>
              <div style="margin-top:5px;font-size:0.71rem;color:#888;">💰 需快速決策 + 充足設備儲備</div>
            </div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F57C00);padding:8px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.85rem;">④ 適應 Adaptation</div>
            </div>
            <div style="padding:8px 11px 10px;">
              <div style="font-size:0.73rem;color:#555;margin-bottom:5px;">基於風險經驗調整長期策略</div>
              <ul style="margin:0;padding-left:12px;font-size:0.74rem;color:#333;line-height:1.8;">
                <li>品種轉換（耐熱耐旱）</li>
                <li>調整種植密度/樹型</li>
                <li>地理多元化（多產區）</li>
              </ul>
              <div style="margin-top:5px;font-size:0.71rem;color:#888;">⚠️ 品種轉換可能影響AOC認定</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#388E3C);padding:8px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.85rem;">⑤ 經濟對沖 Hedging</div>
            </div>
            <div style="padding:8px 11px 10px;">
              <div style="font-size:0.73rem;color:#555;margin-bottom:5px;">透過金融工具降低經濟損失</div>
              <ul style="margin:0;padding-left:12px;font-size:0.74rem;color:#333;line-height:1.8;">
                <li>霜凍/冰雹/乾旱保險（覆蓋70-80%）</li>
                <li>保費約年收入3-8%</li>
                <li>儲備基金 + 旅遊多元收入</li>
              </ul>
              <div style="margin-top:5px;font-size:0.71rem;color:#888;">📌 無法彌補品質損失與品牌聲譽</div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '不同規模酒莊的風險管理策略',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="text-align:center;font-size:0.79rem;color:#666;margin-bottom:10px;">規模決定資源，資源決定策略——風險管理能力是現代葡萄酒產業的核心競爭力</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4E342E,#6D4C41);padding:9px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">🌱 小型酒莊</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;">&lt; 5 公頃・資源有限</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.74rem;font-weight:700;color:#4E342E;margin-bottom:4px;">✅ 可用策略</div>
              <ul style="margin:0 0 7px;padding-left:12px;font-size:0.74rem;color:#333;line-height:1.8;">
                <li>精選地塊位置</li>
                <li>手工精細管理</li>
                <li>病害防治為主</li>
                <li>採收靈活性</li>
                <li>鄰居互助網絡</li>
              </ul>
              <div style="background:#FFEBEE;border-left:3px solid #B71C1C;border-radius:4px;padding:4px 7px;font-size:0.73rem;color:#B71C1C;line-height:1.6;">昂貴設備難負擔，保費重，災年生存危機高</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">🏡 中型酒莊</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;">5—30 公頃・資源中等</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.74rem;font-weight:700;color:#1565C0;margin-bottom:4px;">✅ 可用策略</div>
              <ul style="margin:0 0 7px;padding-left:12px;font-size:0.74rem;color:#333;line-height:1.8;">
                <li>核心地塊投資霜凍保護</li>
                <li>氣象站安裝</li>
                <li>農業保險</li>
                <li>光學分選台</li>
                <li>適度財務儲備</li>
              </ul>
              <div style="background:#E3F2FD;border-left:3px solid #1565C0;border-radius:4px;padding:4px 7px;font-size:0.73rem;color:#0D47A1;line-height:1.6;">需在多種風險間分配有限資源，難以地理多元化</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">🏰 大型集團</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;">&gt; 30 公頃・資源充足</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.74rem;font-weight:700;color:#1B5E20;margin-bottom:4px;">✅ 可用策略</div>
              <ul style="margin:0 0 7px;padding-left:12px;font-size:0.74rem;color:#333;line-height:1.8;">
                <li>全面風險管理系統</li>
                <li>先進監測技術</li>
                <li>多產區地理分散</li>
                <li>研發投資</li>
                <li>全面保險覆蓋</li>
              </ul>
              <div style="background:#E8F5E9;border-left:3px solid #1B5E20;border-radius:4px;padding:4px 7px;font-size:0.73rem;color:#1B5E20;line-height:1.6;">規模經濟 + 風險分散 → 抗風險能力強</div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  {
    type: 'interactive-quiz',
    title: '知識檢測：風險管理',
    question: '2013年困難年份中，頂級酒莊（如Château Margaux）依然產出優質酒款，而許多中小酒莊掙扎。這主要體現了風險管理的哪個維度？',
    options: [
      '預防性措施 - 提前選擇了抗病品種',
      '應對性措施 - 嚴格的葡萄選擇、綠色採收和精細釀造',
      '經濟對沖 - 購買了充足的保險',
      '適應性調整 - 改變了長期種植策略'
    ],
    correct: 1,
    explanation: '2013年是典型的多雨、病害壓力大、成熟度不足的困難年份。頂級酒莊能夠產出優質酒款，關鍵在於"應對性措施"：葡萄園階段嚴格的綠色採收，去除品質不佳的果串；採收時極其嚴格的葡萄選擇，只保留最健康的葡萄；使用光學分選台去除任何受損或未成熟的果粒；釀造過程中精細調控。這些措施需要大量人力、先進設備和釀酒師的專業判斷。資源有限的中小酒莊難以做到如此嚴格選擇，品質差異巨大。這證明了在困難年份，釀酒師的技藝和資源投入比任何時候都重要。'
  },

  // 關鍵要點總結
  {
    type: 'key-takeaways',
    title: '核心要點總結',
    icon: '💡',
    takeaways: [
      {
        point: '歷史極端年份的教訓',
        detail: '1956改變品種結構，1991推動霜凍技術，2003重新定義成熟度，2017證明暖化並未消除春霜風險。每次極端事件都推動產業進化。'
      },
      {
        point: '六大氣候風險特徵',
        detail: '春霜（最頻繁且破壞性，暖化反而增加脆弱性）、冰雹（局部毀滅性但難預測）、乾旱/熱浪（正在快速增加）、過度降雨（病害溫床）、病害爆發（氣候敏感）、強風（局部影響）'
      },
      {
        point: '風險的連鎖與系統性',
        detail: '一種風險常引發另一種：霜凍→產量低→病害易擴散；乾旱→熱浪→過熟；降雨→病害爆發。需要系統性思維和綜合應對。'
      },
      {
        point: '五大風險管理維度',
        detail: '預防（地塊、品種、基礎設施）、監測預警（技術支撐）、應對（即時行動）、適應（長期調整）、經濟對沖（保險與多元化）。不同規模酒莊策略不同。'
      },
      {
        point: '土壤與葡萄藤年齡的關鍵作用',
        detail: '黏土和老藤在乾旱年份是巨大優勢（深根系、保水性），礫石和年輕藤在多雨年份表現好（排水佳）。2022年證明了這一點。'
      },
      {
        point: '氣候變化加劇風險頻率',
        detail: '極端事件從"百年一遇"變為"數年一遇"（2017、2021連續春霜，2003、2019、2022熱浪）。產業需要從"應急反應"轉向"系統性適應"。'
      },
      {
        point: '困難年份凸顯人的因素',
        detail: '2013年證明：在極端條件下，頂級酒莊的技藝、資源和決策能力得以彰顯。這正是terroir中"人"的因素的最佳體現。'
      }
    ]
  },

  // 課程完成
  {
    type: 'course-complete',
    title: '🎉 課程完成！',
    subtitle: '極端年份與氣候風險管理',
    achievement: 'Level 3 - 課程 3 完成',
    summary: '您已經深入學習了波爾多歷史上10個關鍵極端年份（1956、1991、2003、2013、2017-2022）的成因、影響與遺產，系統理解了6大氣候風險類型的發生機制與破壞模式，掌握了酒莊風險管理的5大策略維度。這些知識將幫助您理解年份差異的根源、評估葡萄酒的投資價值，並深刻理解氣候變化下葡萄酒產業面臨的挑戰與機遇。',
    stats: {
      chapters: 3,
      extremeVintages: 10,
      riskTypes: 6,
      managementDimensions: 5,
      quizzes: 3,
      timeSpent: '約50分鐘'
    },
    nextSteps: [
      {
        action: '實踐應用',
        items: [
          '品鑑對比不同年份的葡萄酒（如2003 vs 2010 vs 2016）',
          '閱讀年份報告（Wine Advocate, Decanter）',
          '關注實時天氣，思考對當前生長季的影響',
          '訪問酒莊，了解風險管理設施（霜凍風扇、防雹網）',
          '研究拍賣數據，分析極端年份對市場價格的影響'
        ]
      },
      {
        action: '深入研究',
        items: [
          '研究特定酒莊在極端年份的表現（如Pétrus 2003, Margaux 2013）',
          '閱讀氣候變化研究報告（IPCC, OIV, INRAE）',
          '學習年份評級系統的方法論',
          '了解農業保險和氣候金融工具',
          '追蹤當前年份的氣候條件和產業預測'
        ]
      },
      {
        action: '繼續學習',
        items: [
          '進入L3-4：葡萄園管理與有機農法',
          '進入L3-5：釀造創新與技術革新',
          '重溫L3-1：氣候變化與長期趨勢',
          '重溫L3-2：土壤科學（理解土壤在風險中的作用）'
        ]
      }
    ],
    certificate: '您已獲得本課程學習證明',
    reflection: {
      title: '課程反思',
      questions: [
        '為什麼說2017年是"氣候變暖並未消除春霜風險"的最佳證明？',
        '在困難年份如2013，頂級酒莊和中小酒莊的品質差異說明了什麼？',
        '如果你是酒莊主，面對氣候變化，你會優先投資哪些風險管理措施？',
        '極端年份對葡萄酒投資者意味著什麼？是風險還是機會？'
      ]
    },
    keyInsight: '極端年份既是挑戰也是機遇。在災難中，頂級酒莊的技藝、資源和決策能力得以彰顯，這正是terroir概念中"人"的因素的最佳體現。同時，氣候變化使極端事件從"例外"變為"常態"，產業必須從應急反應轉向系統性適應，這將重塑波爾多乃至全球葡萄酒產業的未來格局。',
    shareMessage: '我剛完成了Level 3的「極端年份與氣候風險管理」課程！深入學習了1956、2003、2017等10個極端年份的啟示，以及波爾多應對氣候風險的系統性策略。氣候變化正在改變葡萄酒的未來。 #波爾多 #極端年份 #氣候風險 #葡萄酒學習 #ClimateChange'
  }
]

export default l33Content
