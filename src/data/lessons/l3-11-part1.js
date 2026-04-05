// L3-11 Part 1: 波爾多葡萄酒產業史與文化 - 歷史發展與分級制度
// 探索波爾多葡萄酒的歷史演變與分級制度的建立

export const l311Part1Content = [
  // 課程簡介
  {
    type: 'intro',
    title: '課程導讀 - 第一部分',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          波爾多葡萄酒不僅是釀造的藝術，更是歷史的結晶。從羅馬時代的 Burdigala（波爾多古名）葡萄種植，到中世紀修道院的精細釀造，從12世紀英國統治帶來的貿易繁榮，到1855年分級制度建立的歷史性時刻，每一個歷史節點都深深影響著今日波爾多的面貌。
        </p>

        <p class="intro-context">
          本課程第一部分將帶您穿越時空，深入了解波爾多葡萄酒產業的歷史發展脈絡。從羅馬人如何將葡萄藤帶到波爾多，到英國市場如何推動產業繁榮，再到1855年分級制度如何塑造今日的列級莊體系。這些歷史不僅是過去，更是理解波爾多當今地位的關鍵。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>📚 了解波爾多葡萄酒業發展史</h4>
            <p>全面掌握從羅馬時代、中世紀、英國統治到現代的歷史演變與關鍵轉折點</p>
          </div>

          <div class="point-item">
            <h4>🏆 深度理解1855年分級制度</h4>
            <p>學習分級制度的歷史背景、評選標準、五個等級劃分，以及150年來對產業的深遠影響</p>
          </div>

          <div class="point-item">
            <h4>🇬🇧 掌握英國市場的決定性作用</h4>
            <p>理解英國如何在波爾多葡萄酒的貿易、品質標準、市場地位中發揮決定性影響</p>
          </div>

          <div class="point-item">
            <h4>⚖️ 分析重大歷史事件影響</h4>
            <p>探討根瘤蚜蟲災、世界大戰、經濟危機如何重塑產業，以及產業的應對策略</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本部分後，您將全面理解波爾多葡萄酒業的歷史深度，以及分級制度如何塑造今日的市場格局。
        </p>

        <h3 class="section-title">第二部分預覽：文化傳承與現代影響</h3>

        <div class="learning-points part2-preview">
          <div class="point-item">
            <h4>🇫🇷 第一章：法國葡萄酒文化的核心價值</h4>
            <p>深入探索「Art de Vivre」法式生活藝術、Terroir 風土哲學的文化意涵，以及波爾多如何成為法國文化軟實力的重要象徵</p>
          </div>

          <div class="point-item">
            <h4>🌍 第二章：波爾多的現代文化地位</h4>
            <p>分析波爾多作為全球葡萄酒文化引領者的品質標準輸出、國際教育體系影響，以及在全球文化外交中的積極角色</p>
          </div>

          <div class="point-item">
            <h4>⚡ 第三章：現代化挑戰與文化傳承</h4>
            <p>評估科技發展與世代差異對傳統文化的雙面衝擊，探討知識數位化保存、核心價值守護與文化創新的平衡策略</p>
          </div>
        </div>

        <div class="course-info">
          <p><strong>預計學習時間：</strong>第一部分 30 分鐘 ／ 第二部分 35 分鐘</p>
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
      <h3 style="display:none;">🏛️ 羅馬時代的奠基</h3>
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">⏳ 關鍵歷史時間軸</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:2px solid #f97316;border-radius:12px;padding:14px;">
              <div style="font-size:20px;font-weight:800;color:#c2410c;margin-bottom:4px;letter-spacing:-0.5px;">📅 西元前 56 年</div>
              <div style="font-size:12px;font-weight:700;color:#7c2d12;margin-bottom:8px;">凱撒征服高盧</div>
              <div style="font-size:11px;color:#9a3412;line-height:1.7;">
                <div>• Burdigala（波爾多古名）成為重要羅馬城市</div>
                <div>• 帶來先進的葡萄種植與管理技術</div>
                <div>• 建立第一批有組織的葡萄園</div>
                <div>• 奠定波爾多作為產區的制度基礎</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:2px solid #3b82f6;border-radius:12px;padding:14px;">
              <div style="font-size:20px;font-weight:800;color:#1d4ed8;margin-bottom:4px;letter-spacing:-0.5px;">📅 西元 1–4 世紀</div>
              <div style="font-size:12px;font-weight:700;color:#1e3a8a;margin-bottom:8px;">產業萌芽與擴張</div>
              <div style="font-size:11px;color:#1d4ed8;line-height:1.7;">
                <div>• 引進義大利葡萄品種與釀造技術</div>
                <div>• 建立完整的葡萄酒貿易網絡</div>
                <div>• 波爾多葡萄酒出口至羅馬帝國各地</div>
                <div>• 鞏固波爾多的葡萄酒產區地位</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🍇 羅馬留下的三大技術遺產</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:12px;text-align:center;">
              <div style="font-size:24px;margin-bottom:5px;">🌱</div>
              <div style="font-size:12px;font-weight:700;color:#14532d;margin-bottom:6px;">種植技術</div>
              <div style="font-size:10.5px;color:#166534;line-height:1.7;text-align:left;">
                <div>• 葡萄園規劃與管理</div>
                <div>• 土壤改良與排水系統</div>
                <div>• 品種選擇與培育</div>
                <div>• 收穫時機判斷標準</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:12px;text-align:center;">
              <div style="font-size:24px;margin-bottom:5px;">🍶</div>
              <div style="font-size:12px;font-weight:700;color:#78350f;margin-bottom:6px;">釀造工藝</div>
              <div style="font-size:10.5px;color:#92400e;line-height:1.7;text-align:left;">
                <div>• 發酵容器的製作技術</div>
                <div>• 酒液澄清與過濾方法</div>
                <div>• 儲存與陳年的基本概念</div>
                <div>• 品質控制的初步標準</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:10px;padding:12px;text-align:center;">
              <div style="font-size:24px;margin-bottom:5px;">🚢</div>
              <div style="font-size:12px;font-weight:700;color:#581c87;margin-bottom:6px;">貿易體系</div>
              <div style="font-size:10.5px;color:#7e22ce;line-height:1.7;text-align:left;">
                <div>• 建立地中海貿易路線</div>
                <div>• 葡萄酒包裝與運輸技術</div>
                <div>• 品質評估與定價機制</div>
                <div>• 培養專業商人階層</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <h3 style="display:none;">⛪ 中世紀的修道院時代</h3>
      <h4 style="display:none;">8-12世紀：修道院的興起</h4>
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:10px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">⛪ 修道院成為葡萄酒業的守護者</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:12px;padding:14px;">
              <div style="font-size:13px;font-weight:700;color:#e0e7ff;margin-bottom:10px;">📿 宗教推動力</div>
              <div style="display:flex;flex-direction:column;gap:7px;">
                <div style="background:rgba(255,255,255,0.10);border-radius:8px;padding:8px;">
                  <div style="font-size:11px;font-weight:700;color:#c7d2fe;margin-bottom:2px;">聖體聖事需求</div>
                  <div style="font-size:10px;color:#a5b4fc;line-height:1.5;">天主教彌撒需要大量葡萄酒，宗教儀式成為穩定需求</div>
                </div>
                <div style="background:rgba(255,255,255,0.10);border-radius:8px;padding:8px;">
                  <div style="font-size:11px;font-weight:700;color:#c7d2fe;margin-bottom:2px;">修道院經濟</div>
                  <div style="font-size:10px;color:#a5b4fc;line-height:1.5;">葡萄酒成為修道院重要收入來源，推動持續投資</div>
                </div>
                <div style="background:rgba(255,255,255,0.10);border-radius:8px;padding:8px;">
                  <div style="font-size:11px;font-weight:700;color:#c7d2fe;margin-bottom:2px;">朝聖貿易</div>
                  <div style="font-size:10px;color:#a5b4fc;line-height:1.5;">聖雅各朝聖路線帶動週邊葡萄酒需求激增</div>
                </div>
                <div style="background:rgba(255,255,255,0.10);border-radius:8px;padding:8px;">
                  <div style="font-size:11px;font-weight:700;color:#c7d2fe;margin-bottom:2px;">宗教保護</div>
                  <div style="font-size:10px;color:#a5b4fc;line-height:1.5;">教會地位使葡萄園免受戰爭與掠奪破壞</div>
                </div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#052e16,#14532d);border-radius:12px;padding:14px;">
              <div style="font-size:13px;font-weight:700;color:#bbf7d0;margin-bottom:10px;">🔬 技術革新</div>
              <div style="display:flex;flex-direction:column;gap:7px;">
                <div style="background:rgba(255,255,255,0.10);border-radius:8px;padding:8px;">
                  <div style="font-size:11px;font-weight:700;color:#86efac;margin-bottom:2px;">品種改良</div>
                  <div style="font-size:10px;color:#6ee7b7;line-height:1.5;">修士們選育出更適合波爾多氣候的葡萄品種</div>
                </div>
                <div style="background:rgba(255,255,255,0.10);border-radius:8px;padding:8px;">
                  <div style="font-size:11px;font-weight:700;color:#86efac;margin-bottom:2px;">釀造技術</div>
                  <div style="font-size:10px;color:#6ee7b7;line-height:1.5;">發展更精密的發酵控制與陳年技術</div>
                </div>
                <div style="background:rgba(255,255,255,0.10);border-radius:8px;padding:8px;">
                  <div style="font-size:11px;font-weight:700;color:#86efac;margin-bottom:2px;">品質控制</div>
                  <div style="font-size:10px;color:#6ee7b7;line-height:1.5;">建立嚴格的品質標準與檢驗制度</div>
                </div>
                <div style="background:rgba(255,255,255,0.10);border-radius:8px;padding:8px;">
                  <div style="font-size:11px;font-weight:700;color:#86efac;margin-bottom:2px;">記錄保存</div>
                  <div style="font-size:10px;color:#6ee7b7;line-height:1.5;">詳細記錄天氣、收成與品質的珍貴歷史資料</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:10px;">
          <div style="font-size:11px;font-weight:700;color:#92400e;margin-bottom:5px;">💡 為何修道院能成功守護葡萄酒業？</div>
          <div style="font-size:10.5px;color:#78350f;line-height:1.7;">修道院兼具 <strong>穩定的勞動力</strong>（修士）、<strong>豐富的土地資源</strong>（教會地產）、<strong>長遠的時間視野</strong>（不受王朝更迭影響），三者結合使其成為中世紀最有效的葡萄酒業守護者與創新者。</div>
        </div>

      </div>
      <h4 style="display:none;">12-15世紀：技術完熟與商業化</h4>
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">⚙️ 封建制度與商業化雙軌並進</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:12px;padding:12px;">
              <div style="font-size:13px;font-weight:700;color:#be123c;margin-bottom:8px;">🏰 封建制度下的發展</div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                <div style="background:rgba(255,255,255,0.6);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#9f1239;margin-bottom:2px;">領主特權</div>
                  <div style="font-size:10px;color:#be123c;line-height:1.5;">貴族控制最佳風土地塊，形成精英葡萄園格局</div>
                </div>
                <div style="background:rgba(255,255,255,0.6);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#9f1239;margin-bottom:2px;">勞動力保障</div>
                  <div style="font-size:10px;color:#be123c;line-height:1.5;">農奴制度提供穩定的葡萄園耕作勞動力</div>
                </div>
                <div style="background:rgba(255,255,255,0.6);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#9f1239;margin-bottom:2px;">技術傳承</div>
                  <div style="font-size:10px;color:#be123c;line-height:1.5;">師傅制度確保釀酒技術代代精確傳承</div>
                </div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:12px;padding:12px;">
              <div style="font-size:13px;font-weight:700;color:#14532d;margin-bottom:8px;">📈 商業化加速發展</div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                <div style="background:rgba(255,255,255,0.6);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#166534;margin-bottom:2px;">市場擴張</div>
                  <div style="font-size:10px;color:#14532d;line-height:1.5;">葡萄酒貿易延伸至歐洲各地，建立廣泛市場</div>
                </div>
                <div style="background:rgba(255,255,255,0.6);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#166534;margin-bottom:2px;">品質分級萌芽</div>
                  <div style="font-size:10px;color:#14532d;line-height:1.5;">開始依產地與品質分級，品牌概念初步形成</div>
                </div>
                <div style="background:rgba(255,255,255,0.6);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#166534;margin-bottom:2px;">價格差異化</div>
                  <div style="font-size:10px;color:#14532d;line-height:1.5;">優質葡萄酒獲得更高溢價，推動品質競爭</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🏆 中世紀留下的三大成就</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:11px;">
              <div style="font-size:20px;margin-bottom:5px;">🍇</div>
              <div style="font-size:11.5px;font-weight:700;color:#1e3a8a;margin-bottom:5px;">葡萄品種發展</div>
              <div style="font-size:10px;color:#1d4ed8;line-height:1.7;">
                <div>• 選育適合波爾多氣候的品種</div>
                <div>• 嘗試不同品種的混釀技術</div>
                <div>• 建立品種選育的科學方法</div>
                <div>• 保存珍貴的品種基因資源</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:10px;padding:11px;">
              <div style="font-size:20px;margin-bottom:5px;">🏭</div>
              <div style="font-size:11.5px;font-weight:700;color:#7c2d12;margin-bottom:5px;">釀造技術進步</div>
              <div style="font-size:10px;color:#9a3412;line-height:1.7;">
                <div>• 精確的發酵控制方法</div>
                <div>• 改進儲存與陳年技術</div>
                <div>• 開發澄清過濾工藝</div>
                <div>• 建立品質檢驗標準程序</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:10px;padding:11px;">
              <div style="font-size:20px;margin-bottom:5px;">📚</div>
              <div style="font-size:11.5px;font-weight:700;color:#581c87;margin-bottom:5px;">知識體系建立</div>
              <div style="font-size:10px;color:#7e22ce;line-height:1.7;">
                <div>• 編寫第一批釀造手冊</div>
                <div>• 建立釀酒日曆與作業指南</div>
                <div>• 記錄大量氣候與收成數據</div>
                <div>• 形成葡萄酒文化理論基礎</div>
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
      <h3 style="display:none;">👑 阿基坦公國的聯姻</h3>
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:12px;padding:14px;margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#e0e7ff;margin-bottom:4px;">📅 1152年 — 改變波爾多命運的聯姻</div>
          <div style="font-size:10.5px;color:#a5b4fc;margin-bottom:10px;">英國統治持續300年（1152–1453），奠定波爾多葡萄酒業國際化基礎</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="background:rgba(255,255,255,0.12);border-radius:10px;padding:12px;">
              <div style="font-size:24px;text-align:center;margin-bottom:5px;">👸</div>
              <div style="font-size:12px;font-weight:700;color:#c7d2fe;text-align:center;margin-bottom:7px;">阿基坦的埃莉諾</div>
              <div style="font-size:10px;color:#a5b4fc;line-height:1.7;">
                <div>• 阿基坦公國女繼承人</div>
                <div>• 控制包括波爾多的廣大領土</div>
                <div>• 法王路易七世的前妻</div>
                <div>• 中世紀最有影響力的女性</div>
              </div>
            </div>
            <div style="background:rgba(255,255,255,0.12);border-radius:10px;padding:12px;">
              <div style="font-size:24px;text-align:center;margin-bottom:5px;">🤴</div>
              <div style="font-size:12px;font-weight:700;color:#c7d2fe;text-align:center;margin-bottom:7px;">亨利·安茹（後英王亨利二世）</div>
              <div style="font-size:10px;color:#a5b4fc;line-height:1.7;">
                <div>• 安茹伯爵・諾曼底公爵</div>
                <div>• 通過聯姻獲得阿基坦公國</div>
                <div>• 建立橫跨英法的安茹帝國</div>
                <div>• 開啟波爾多英國時代</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🌍 聯姻的三層深遠影響</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:10px;padding:12px;">
              <div style="font-size:20px;text-align:center;margin-bottom:5px;">🗺️</div>
              <div style="font-size:12px;font-weight:700;color:#be123c;text-align:center;margin-bottom:7px;">政治影響</div>
              <div style="font-size:10px;color:#9f1239;line-height:1.7;">
                <div>• 波爾多成為英國領土</div>
                <div>• 建立穩定政治環境</div>
                <div>• 保護貿易免受干擾</div>
                <div>• 為商業發展創造條件</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:12px;">
              <div style="font-size:20px;text-align:center;margin-bottom:5px;">💼</div>
              <div style="font-size:12px;font-weight:700;color:#78350f;text-align:center;margin-bottom:7px;">經濟影響</div>
              <div style="font-size:10px;color:#92400e;line-height:1.7;">
                <div>• 直接打開英國市場</div>
                <div>• 建立特殊貿易特權</div>
                <div>• 吸引英國商人投資</div>
                <div>• 創造穩定收入來源</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:12px;">
              <div style="font-size:20px;text-align:center;margin-bottom:5px;">🍷</div>
              <div style="font-size:12px;font-weight:700;color:#1e3a8a;text-align:center;margin-bottom:7px;">葡萄酒業影響</div>
              <div style="font-size:10px;color:#1d4ed8;line-height:1.7;">
                <div>• 英國成為最大市場</div>
                <div>• 貴族需求推動品質</div>
                <div>• 建立貿易制度框架</div>
                <div>• 奠定延續至今的關係</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <h3 style="display:none;">🚢 中世紀的葡萄酒貿易</h3>
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🚢 英波葡萄酒貿易體系</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="background:linear-gradient(135deg,#f0f9ff,#e0f2fe);border:1px solid #0284c7;border-radius:12px;padding:12px;">
              <div style="font-size:12px;font-weight:700;color:#0c4a6e;margin-bottom:8px;">🗺️ 貿易路線</div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                <div style="background:rgba(255,255,255,0.7);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#0369a1;margin-bottom:2px;">加龍河水運</div>
                  <div style="font-size:10px;color:#0284c7;line-height:1.5;">波爾多港成為集散中心，內陸葡萄園透過河運輸往港口，配備專業葡萄酒運輸船</div>
                </div>
                <div style="background:rgba(255,255,255,0.7);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#0369a1;margin-bottom:2px;">跨海酒船隊（Wine Fleet）</div>
                  <div style="font-size:10px;color:#0284c7;line-height:1.5;">每年秋季固定船隊直航倫敦・布里斯托，建立保險制度管理海上風險</div>
                </div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:12px;padding:12px;">
              <div style="font-size:12px;font-weight:700;color:#14532d;margin-bottom:8px;">🏛️ 貿易特權保護</div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                <div style="background:rgba(255,255,255,0.7);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#166534;margin-bottom:2px;">英國市場特權</div>
                  <div style="font-size:10px;color:#14532d;line-height:1.5;">享有較低關稅・優先進入市場・免受貿易禁令・英國王室採購優先</div>
                </div>
                <div style="background:rgba(255,255,255,0.7);border-radius:7px;padding:7px;">
                  <div style="font-size:10.5px;font-weight:700;color:#166534;margin-bottom:2px;">生產者保護</div>
                  <div style="font-size:10px;color:#14532d;line-height:1.5;">波爾多本地獨占權・外地酒銷售限制・品質標準受法律保護，產地標示雛形</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">📊 13世紀貿易高峰期的經濟成就</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:10px;padding:12px;">
              <div style="font-size:12px;font-weight:700;color:#581c87;margin-bottom:8px;">📈 貿易規模數據</div>
              <div style="display:flex;flex-direction:column;gap:5px;">
                <div style="display:flex;align-items:center;gap:8px;">
                  <div style="background:#a855f7;color:white;border-radius:6px;padding:4px 7px;font-size:11px;font-weight:700;white-space:nowrap;">年出口量</div>
                  <div style="font-size:10.5px;color:#7e22ce;">約 <strong>100萬加侖</strong>，佔總產量 80%</div>
                </div>
                <div style="display:flex;align-items:center;gap:8px;">
                  <div style="background:#a855f7;color:white;border-radius:6px;padding:4px 7px;font-size:11px;font-weight:700;white-space:nowrap;">收入佔比</div>
                  <div style="font-size:10.5px;color:#7e22ce;">佔波爾多總收入 <strong>60% 以上</strong></div>
                </div>
                <div style="display:flex;align-items:center;gap:8px;">
                  <div style="background:#a855f7;color:white;border-radius:6px;padding:4px 7px;font-size:11px;font-weight:700;white-space:nowrap;">就業貢獻</div>
                  <div style="font-size:10.5px;color:#7e22ce;">創造 <strong>數千個</strong> 直接就業機會</div>
                </div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:10px;padding:12px;">
              <div style="font-size:12px;font-weight:700;color:#7c2d12;margin-bottom:8px;">🏛️ 社會文化影響</div>
              <div style="display:flex;flex-direction:column;gap:5px;">
                <div style="background:rgba(255,255,255,0.6);border-radius:6px;padding:6px;">
                  <div style="font-size:10.5px;font-weight:700;color:#7c2d12;margin-bottom:2px;">🌆 城市發展</div>
                  <div style="font-size:10px;color:#9a3412;line-height:1.4;">波爾多躍升為重要商業城市，建設宏偉商業建築，吸引各國商人定居</div>
                </div>
                <div style="background:rgba(255,255,255,0.6);border-radius:6px;padding:6px;">
                  <div style="font-size:10.5px;font-weight:700;color:#7c2d12;margin-bottom:2px;">👥 社會階層</div>
                  <div style="font-size:10px;color:#9a3412;line-height:1.4;">催生富裕的葡萄酒商人階層，推動中產階級形成，提升釀酒師社會地位</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <h3 style="display:none;">⚔️ 百年戰爭的衝擊</h3>
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">⚔️ 百年戰爭兩階段衝擊（1337–1453）</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:2px solid #f97316;border-radius:12px;padding:12px;">
              <div style="font-size:11px;font-weight:700;color:#7c2d12;margin-bottom:6px;">📅 1337–1380 年：第一階段</div>
              <div style="font-size:10.5px;color:#9a3412;line-height:1.8;">
                <div>⚠️ 貿易路線受到戰爭威脅</div>
                <div>⚠️ 葡萄園遭受戰火破壞</div>
                <div>⚠️ 勞動力嚴重短缺</div>
                <div style="margin-top:4px;background:rgba(249,115,22,0.1);border-radius:5px;padding:5px;font-size:10px;color:#7c2d12;">✅ 英國市場需求仍然強勁，支撐產業</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:2px solid #f43f5e;border-radius:12px;padding:12px;">
              <div style="font-size:11px;font-weight:700;color:#be123c;margin-bottom:6px;">📅 1415–1453 年：最後階段</div>
              <div style="font-size:10.5px;color:#9f1239;line-height:1.8;">
                <div>⚠️ 法國逐步收復失地</div>
                <div>⚠️ 英國統治搖搖欲墜</div>
                <div>⚠️ 葡萄酒貿易量急劇下滑</div>
                <div style="margin-top:4px;background:rgba(244,63,94,0.1);border-radius:5px;padding:5px;font-size:10px;color:#be123c;font-weight:700;">🏁 1453年：波爾多重歸法國版圖</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">💡 危機轉機：波爾多的因應策略</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:12px;padding:12px;">
              <div style="font-size:13px;font-weight:700;color:#14532d;margin-bottom:8px;">🌍 市場多元化</div>
              <div style="font-size:10.5px;color:#166534;line-height:1.8;">
                <div>• 開拓荷蘭・德國・北歐新市場</div>
                <div>• 降低對英國單一市場的依賴</div>
                <div>• 發展法國本土消費市場</div>
                <div>• 探索更多貿易夥伴關係</div>
                <div style="margin-top:6px;background:rgba(34,197,94,0.12);border-radius:6px;padding:5px;font-size:10px;color:#14532d;font-weight:600;">→ 這一轉型奠定了現代全球銷售格局</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:12px;padding:12px;">
              <div style="font-size:13px;font-weight:700;color:#1e3a8a;margin-bottom:8px;">⬆️ 品質提升策略</div>
              <div style="font-size:10.5px;color:#1d4ed8;line-height:1.8;">
                <div>• 專注高品質葡萄酒生產</div>
                <div>• 建立更嚴格的品質標準</div>
                <div>• 發展獨特的波爾多釀造技術</div>
                <div>• 強化產區品牌形象</div>
                <div style="margin-top:6px;background:rgba(59,130,246,0.12);border-radius:6px;padding:5px;font-size:10px;color:#1e3a8a;font-weight:600;">→ 為1855年分級制度的誕生埋下伏筆</div>
              </div>
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
        <div class="historical-wisdom">
          <h3>📚 歷史發展的關鍵洞察</h3>
          <div class="key-insights">
            <div class="insight-item">
              <h4>🏛️ 技術傳承的重要性</h4>
              <p>從羅馬時代到修道院時期，技術的積累和傳承是波爾多葡萄酒業發展的基石</p>
            </div>
            <div class="insight-item">
              <h4>🤝 國際合作的價值</h4>
              <p>英國統治時期展示了國際市場合作對於產業發展的重要推動作用</p>
            </div>
            <div class="insight-item">
              <h4>📏 標準化的力量</h4>
              <p>1855年分級制度證明了標準化評估體系對於產業發展的深遠影響</p>
            </div>
            <div class="insight-item">
              <h4>🔄 適應變化的能力</h4>
              <p>歷史上的每次危機都促使波爾多葡萄酒業發展出更強的適應能力</p>
            </div>
          </div>
        </div>

        <div class="modern-relevance">
          <h3>🔗 歷史與現代的連接</h3>
          <p>波爾多葡萄酒的歷史不僅是過去的記錄，更是理解現代葡萄酒業的重要鑰匙。
          從羅馬時代的技術基礎，到中世紀的品質追求，從英國統治期的國際化視野，
          到1855年分級制度的標準化思維，每一個歷史階段都為現代波爾多提供了寶貴的經驗和智慧。
          理解這些歷史背景，有助於我們更好地欣賞波爾多葡萄酒的深度與複雜性，
          也為我們展望其未來發展提供了重要的參考框架。</p>
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
  }
];

export default l311Part1Content;
