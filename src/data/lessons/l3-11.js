// L3-11: 波爾多葡萄酒產業史與文化（六章合併版）
// 合併自 l3-11-part1.js 與 l3-11-part2.js

export const l311Content = [

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

        <div class="key-point-banner">
          <p>波爾多的偉大不是偶然，而是歷經羅馬奠基、修道院淬鍊、英國市場催化，以及 1855 年分級制度塑造，層層積累出來的歷史成就。</p>
        </div>

        <h3>📚 第一部分：四大歷史洞察</h3>
        <div class="info-cards-grid two-col">
          <div class="info-card">
            <div class="card-header"><span class="card-icon">🏛️</span><h4>技術傳承的重要性</h4></div>
            <p>從羅馬時代到修道院時期，技術的一代代積累與傳承，是波爾多葡萄酒業發展最深厚的基石</p>
          </div>
          <div class="info-card">
            <div class="card-header"><span class="card-icon">🤝</span><h4>國際合作的價值</h4></div>
            <p>英國統治時期展示了國際市場合作對產業繁榮的決定性推動作用，貿易網絡造就了品質革命</p>
          </div>
          <div class="info-card">
            <div class="card-header"><span class="card-icon">📏</span><h4>標準化的力量</h4></div>
            <p>1855 年分級制度證明了在農產品領域建立標準化評估體系，可以創造 170 年屹立不倒的市場價值</p>
            </div>
          <div class="info-card">
            <div class="card-header"><span class="card-icon">🔄</span><h4>適應變化的能力</h4></div>
            <p>歷史上的每次危機——根瘤蚜蟲、世界大戰、經濟蕭條——都催生了產業更強的韌性與創新應對能力</p>
          </div>
        </div>

        <h3>🔗 歷史與現代的連接</h3>
        <div class="key-point-banner">
          <p>波爾多的歷史不僅是過去的記錄，更是理解今日波爾多的鑰匙。每一個歷史節點的選擇，都塑造了我們今日所見的頂級產區格局。繼續第二部分，探索文化傳承與現代挑戰。</p>
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
  },,
  // 第一章：法國葡萄酒文化的核心價值
  // 章節導覽分隔（供簡報章節導覽晶片使用）
  {
    type: 'chapter-divider',
    title: '第四章',
    subtitle: '法國葡萄酒文化的核心價值',
    icon: '🇫🇷',
    navLabel: '文化核心'
  },
  {
    type: 'chapter',
    title: '第一章：法國葡萄酒文化的核心價值',
    subtitle: '理解法式生活藝術的精髓',
    content: `
      <div class="chapter-content">

        <h3>🇫🇷 Art de Vivre — 法式生活藝術</h3>
        <div class="section-intro">
          <div class="key-point-banner">
            <p>「Art de Vivre」（生活的藝術）是法國文化的核心理念，葡萄酒不只是飲品，而是美食、社交、哲學與藝術的交匯點。</p>
          </div>
          <div class="info-cards-grid two-col">
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🍽️</span><h4>美食文化的核心</h4></div>
              <ul>
                <li>葡萄酒是法式正餐不可或缺的組成部分</li>
                <li>餐桌上的配酒藝術：不同菜式有對應的葡萄酒</li>
                <li>家庭聚餐是葡萄酒文化教育的自然場合</li>
                <li>葡萄酒作為社交溝通與感情交流的媒介</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🎨</span><h4>文學藝術的靈感</h4></div>
              <ul>
                <li>巴爾扎克、大仲馬等作家筆下的葡萄酒意象</li>
                <li>印象派畫家對葡萄園風光的大量描繪</li>
                <li>法國電影中葡萄酒場景的紳士與精緻</li>
                <li>陳年哲學：時間、耐心與生命意義的隱喻</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>🏛️ Terroir — 風土文化的深層內涵</h3>
        <div class="section-terroir">
          <div class="info-cards-grid three-col">
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">🌍</span><h4>人與自然的和諧</h4></div>
              <ul>
                <li>遵循自然季節與氣候變化，不與天爭</li>
                <li>維護葡萄園生態系統的完整性</li>
                <li>世代傳承的永續農業實踐</li>
                <li>對土壤與水資源的珍惜與保護</li>
              </ul>
            </div>
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">⏰</span><h4>時間與耐心的哲學</h4></div>
              <ul>
                <li>陳年需要時間，品質不能急就章</li>
                <li>不為短期利益犧牲長期品質的堅守</li>
                <li>為下一代考慮的世代傳承視野</li>
                <li>在快速變化的世界中堅持傳統價值</li>
              </ul>
            </div>
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">💭</span><h4>三層感知體驗</h4></div>
              <ul>
                <li><strong>感官層：</strong>視、嗅、味、觸的多維體驗</li>
                <li><strong>理性層：</strong>分析風土、品種、工藝的知識體系</li>
                <li><strong>精神層：</strong>與釀酒師、土地的心靈溝通</li>
                <li>三層融合創造超越物質的美學享受</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>🎖️ 法國文化軟實力的象徵</h3>
        <div class="section-soft-power">
          <div class="info-cards-grid three-col">
            <div class="info-card accent-gold">
              <div class="card-header"><span class="card-icon">🎓</span><h4>教育推廣</h4></div>
              <ul>
                <li>法國在全球各地建立葡萄酒教育機構</li>
                <li>WSET、CMS 等國際認證課程以波爾多為核心</li>
                <li>培養全球葡萄酒專業人才</li>
                <li>通過教育系統傳播法國文化價值觀</li>
              </ul>
            </div>
            <div class="info-card accent-gold">
              <div class="card-header"><span class="card-icon">🤝</span><h4>文化外交</h4></div>
              <ul>
                <li>頂級波爾多酒長期作為法國外交禮品</li>
                <li>強化法國文化的國際認同與影響力</li>
                <li>促進不同文化間的對話與商業往來</li>
                <li>法國使館與文化中心的推廣活動</li>
              </ul>
            </div>
            <div class="info-card accent-gold">
              <div class="card-header"><span class="card-icon">🌐</span><h4>國際影響力</h4></div>
              <ul>
                <li>波爾多品牌成為法國國家形象的核心組成</li>
                <li>全球主流媒體的高度持續關注</li>
                <li>UNESCO 文化遺產認定加持</li>
                <li>傳播法式優雅生活方式至全世界</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🇫🇷',
        title: '法式生活',
        content: '波爾多葡萄酒體現了法式生活藝術的精髓，融合美食、文化和哲學思考'
      },
      {
        id: 2,
        icon: '🏛️',
        title: '風土哲學',
        content: 'Terroir概念體現了人與自然和諧、時間與耐心的深層文化價值'
      },
      {
        id: 3,
        icon: '🎖️',
        title: '文化軟實力',
        content: '波爾多葡萄酒是法國文化軟實力的重要象徵和國際影響力的載體'
      }
    ],
    hasMap: false,
    interactiveElements: [
      {
        type: 'culture-explorer',
        title: '法國葡萄酒文化探索器',
        data: {
          dimensions: ['生活藝術', '風土哲學', '文化軟實力'],
          expressions: ['感官', '理性', '精神'],
          influences: ['教育', '媒體', '外交']
        }
      }
    ]
  },

  // 第一章知識檢測
  {
    type: 'interactive-quiz',
    title: '知識檢測：法國葡萄酒文化的核心價值',
    questions: [
      {
        question: '法國葡萄酒文化中"Art de Vivre"的核心理念是什麼？',
        options: [
          '追求最高的經濟利益',
          '將葡萄酒融入生活藝術和美學體驗',
          '大規模工業化生產',
          '模仿其他國家的葡萄酒文化'
        ],
        correct: 1,
        explanation: '"Art de Vivre"（法式生活藝術）強調將葡萄酒融入美食文化、社交活動和美學體驗中，體現了法國人對生活品質和精神享受的追求，是法國文化的重要組成部分。'
      },
      {
        question: 'Terroir風土文化的深層內涵主要體現在？',
        options: [
          '純粹的土壤科學研究',
          '人與自然和諧相處的哲學思想',
          '現代農業技術的應用',
          '國際市場的競爭策略'
        ],
        correct: 1,
        explanation: 'Terroir風土文化體現了人與自然和諧相處、時間與耐心、傳統傳承等深層哲學思想，強調對自然節律的尊重、生態平衡的維護以及可持續發展的實踐。'
      }
    ]
  },

  // 第二章：波爾多的現代文化地位
  // 章節導覽分隔（供簡報章節導覽晶片使用）
  {
    type: 'chapter-divider',
    title: '第五章',
    subtitle: '波爾多的現代文化地位',
    icon: '🌍',
    navLabel: '現代地位'
  },
  {
    type: 'chapter',
    title: '第二章：波爾多的現代文化地位',
    subtitle: '在全球化時代的文化定位與影響',
    content: `
      <div class="chapter-content">

        <h3>🌍 全球葡萄酒文化的引領者</h3>
        <div class="section-global">
          <div class="key-point-banner">
            <p>波爾多不只出口葡萄酒，更輸出品質標準、教育體系、文化規範，在全球葡萄酒世界中持續扮演引領者角色。</p>
          </div>
          <div class="info-cards-grid two-col">
            <div class="info-card">
              <div class="card-header"><span class="card-icon">📏</span><h4>品質標準的全球影響</h4></div>
              <ul>
                <li>1855 年分級制度成為全球葡萄酒分級的範本</li>
                <li>波爾多品質理念與術語成為國際通用語言</li>
                <li>侍酒師文化、餐酒搭配禮儀的國際推廣</li>
                <li>全球葡萄酒評分體系深受波爾多模式影響</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🔄</span><h4>傳統與創新的平衡</h4></div>
              <ul>
                <li>VR/AR 沉浸式虛擬品鑑文化體驗</li>
                <li>與當代藝術家、時尚品牌的跨界合作</li>
                <li>有機與生物動力法文化價值的引領推廣</li>
                <li>社區參與與非物質文化遺產的主動保護</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>🏆 國際聲譽與文化外交成就</h3>
        <div class="section-reputation">
          <div class="info-cards-grid three-col">
            <div class="info-card accent-purple">
              <div class="card-header"><span class="card-icon">📊</span><h4>媒體影響力</h4></div>
              <ul>
                <li>國際主流媒體持續高頻率報導</li>
                <li>全球葡萄酒專業雜誌的核心關注焦點</li>
                <li>社交媒體平台的高討論熱度</li>
                <li>大量國際紀錄片與學術研究產出</li>
              </ul>
            </div>
            <div class="info-card accent-purple">
              <div class="card-header"><span class="card-icon">🤝</span><h4>雙邊文化合作</h4></div>
              <ul>
                <li><strong>中法：</strong>在中國市場的深度文化合作項目</li>
                <li><strong>美法：</strong>長期文化交流傳統（巴黎審判後和解）</li>
                <li><strong>日法：</strong>日本市場的精緻文化推廣</li>
                <li>積極開拓亞洲、南美等新興市場文化關係</li>
              </ul>
            </div>
            <div class="info-card accent-purple">
              <div class="card-header"><span class="card-icon">🏅</span><h4>國際組織參與</h4></div>
              <ul>
                <li>UNESCO 文化遺產的積極申請與維護</li>
                <li>OIV（國際葡萄與葡萄酒組織）核心角色</li>
                <li>歐盟文化項目的重要參與者</li>
                <li>國際葡萄酒論壇的標杆聲音</li>
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
        title: '全球引領',
        content: '波爾多在品質標準、教育體系等方面引領全球葡萄酒文化發展'
      },
      {
        id: 2,
        icon: '🔄',
        title: '創新平衡',
        content: '在保持傳統文化的同時，積極擁抱數位化和可持續發展的創新理念'
      },
      {
        id: 3,
        icon: '🏆',
        title: '國際聲譽',
        content: '通過文化外交和國際合作，波爾多建立了卓越的國際聲譽和影響力'
      }
    ],
    hasMap: false,
    interactiveElements: [
      {
        type: 'cultural-influence-tracker',
        title: '文化影響力追蹤器',
        data: {
          metrics: ['媒體關注', '文化參與', '專業認可', '國際合作'],
          regions: ['歐洲', '北美', '亞洲', '新興市場'],
          trends: ['數位化', '可持續性', '跨界合作', '年輕化']
        }
      }
    ]
  },

  // 第二章知識檢測
  {
    type: 'interactive-quiz',
    title: '知識檢測：波爾多的現代文化地位',
    questions: [
      {
        question: '波爾多在全球葡萄酒文化中的引領作用主要表現在？',
        options: [
          '價格最低的葡萄酒產區',
          '產量最大的葡萄酒產區',
          '建立品質標準、教育體系和文化規範',
          '最新釀造技術的發明地'
        ],
        correct: 2,
        explanation: '波爾多透過1855年分級制度建立了全球葡萄酒品質標準，在評價體系、教育體系、文化規範（品鑑禮儀、侍酒文化、餐酒搭配）等方面引領全球葡萄酒文化發展。'
      },
      {
        question: '波爾多如何在保持傳統文化的同時適應現代化？',
        options: [
          '完全拒絕任何現代化改變',
          '全面放棄傳統文化價值',
          '透過數位化傳播、跨界合作和可持續發展等創新實踐',
          '只關注短期商業利益'
        ],
        correct: 2,
        explanation: '波爾多在保持核心文化價值的基礎上，積極擁抱數位化文化傳播（VR/AR、線上教育）、跨界文化合作（藝術、時尚、音樂）以及可持續發展的創新理念，實現傳統與現代的平衡。'
      }
    ]
  },

  // 第三章：現代化挑戰與文化傳承
  // 章節導覽分隔（供簡報章節導覽晶片使用）
  {
    type: 'chapter-divider',
    title: '第六章',
    subtitle: '現代化挑戰與文化傳承',
    icon: '⚡',
    navLabel: '挑戰與傳承'
  },
  {
    type: 'chapter',
    title: '第三章：現代化挑戰與文化傳承',
    subtitle: '在變革中保持文化本質',
    content: `
      <div class="chapter-content">

        <h3>⚡ 現代化進程的雙面衝擊</h3>
        <div class="section-impact">
          <div class="key-point-banner">
            <p>科技發展與世代差異同時帶來機遇與威脅，傳統葡萄酒文化必須面對從未有過的挑戰。</p>
          </div>
          <div class="info-cards-grid two-col">
            <div class="info-card accent-green">
              <div class="card-header"><span class="card-icon">✅</span><h4>科技帶來的積極影響</h4></div>
              <ul>
                <li>數位平台讓文化觸達全球更廣泛受眾</li>
                <li>VR/AR 創造更豐富的沉浸式文化體驗</li>
                <li>降低專業知識的學習門檻，普及大眾</li>
                <li>現代技術提升品質、效率與環境友好度</li>
                <li>吸引年輕世代關注並參與傳統文化</li>
              </ul>
            </div>
            <div class="info-card accent-amber">
              <div class="card-header"><span class="card-icon">⚠️</span><h4>現代化的潛在威脅</h4></div>
              <ul>
                <li>工業化大規模生產削弱個性與傳統工藝</li>
                <li>過度標準化可能使各產區喪失獨特風格</li>
                <li>虛擬體驗有替代真實感官接觸的風險</li>
                <li>社群媒體的碎片化傳播導致文化理解膚淺</li>
                <li>傳統世代對商業化侵蝕文化純度的憂慮</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>🔧 文化傳承的適應策略</h3>
        <div class="section-strategy">
          <div class="info-cards-grid three-col">
            <div class="info-card">
              <div class="card-header"><span class="card-icon">📚</span><h4>知識系統化保存</h4></div>
              <ul>
                <li>歷史文獻與釀造工藝流程的數位化建檔</li>
                <li>老一輩口述歷史的收集與保存計畫</li>
                <li>正規學校教育加入葡萄酒文化必修內容</li>
                <li>建立技能傳承的線上與實體雙軌平台</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🎯</span><h4>核心價值的守護</h4></div>
              <ul>
                <li><strong>不可妥協：</strong>品質標準、風土理念、工匠精神</li>
                <li><strong>靈活適應：</strong>傳播方式、市場策略、合作模式</li>
                <li>建立不同世代間的對話機制</li>
                <li>定期評估文化保護狀況並動態調整策略</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-header"><span class="card-icon">🎨</span><h4>文化創新實踐</h4></div>
              <ul>
                <li>與現代藝術家合作重新詮釋葡萄酒傳統</li>
                <li>時尚、音樂、娛樂產業的跨界文化融合</li>
                <li>將可持續發展理念融入文化傳承敘事</li>
                <li>讓公眾參與文化發展的策略決策過程</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '⚡',
        title: '現代衝擊',
        content: '科技發展和世代差異為傳統葡萄酒文化帶來前所未有的挑戰'
      },
      {
        id: 2,
        icon: '🔧',
        title: '創新保護',
        content: '通過數位化保存和文化創新實踐，在變革中保護文化本質'
      },
      {
        id: 3,
        icon: '🎯',
        title: '平衡機制',
        content: '建立核心價值保護和動態平衡管理的雙重機制'
      }
    ],
    hasMap: false,
    interactiveElements: [
      {
        type: 'balance-simulator',
        title: '傳統與現代平衡模擬器',
        data: {
          challenges: ['技術衝擊', '世代差異', '商業壓力', '全球化'],
          solutions: ['數位保存', '教育創新', '跨界合作', '核心保護'],
          outcomes: ['文化傳承', '創新發展', '市場適應', '國際影響']
        }
      }
    ]
  },

  // 第三章知識檢測
  {
    type: 'interactive-quiz',
    title: '知識檢測：現代化挑戰與文化傳承',
    questions: [
      {
        question: '現代化進程對傳統葡萄酒文化的最大挑戰是？',
        options: [
          '技術設備的成本過高',
          '平衡傳統價值與現代創新',
          '葡萄品種的基因改造',
          '國際貿易政策的變化'
        ],
        correct: 1,
        explanation: '現代化的最大挑戰是如何在保持傳統文化核心價值（品質標準、風土理念、工匠精神）的同時，適應現代技術和市場需求，實現傳統與創新的動態平衡。'
      },
      {
        question: '為了保護和傳承葡萄酒文化，哪些做法最為重要？',
        options: [
          '完全拒絕任何技術應用',
          '建立數位化檔案、教育體系和多方參與機制',
          '全面工業化生產',
          '放棄所有傳統工藝'
        ],
        correct: 1,
        explanation: '文化保護需要透過數位化檔案建設（歷史記錄、工藝記錄、口述歷史）、建構教育體系（正規教育、專業培訓）、建立不同世代間的對話機制，以及在核心價值保護的基礎上靈活適應。'
      }
    ]
  },

  // 總結
  {
    type: 'summary',
    title: '課程總結：文化的永恆價值',
    content: `
      <div class="summary-content">

        <div class="key-point-banner">
          <p>波爾多葡萄酒的文化影響力已遠超一瓶酒的本身，它承載著 Art de Vivre 的生活哲學、Terroir 的自然智慧，以及法國面向世界的文化軟實力。</p>
        </div>

        <h3>🎭 文化傳承的四大核心使命</h3>
        <div class="info-cards-grid two-col">
          <div class="info-card accent-green">
            <div class="card-header"><span class="card-icon">🔥</span><h4>守護文化火種</h4></div>
            <p>在全球化浪潮中，堅持波爾多葡萄酒文化的獨特性與純正性，讓百年傳統不因商業壓力而稀釋</p>
          </div>
          <div class="info-card accent-green">
            <div class="card-header"><span class="card-icon">🌱</span><h4>促進文化創新</h4></div>
            <p>在傳承中創新，在創新中傳承，以數位工具、跨界合作讓古老文化煥發新一代的生命力</p>
          </div>
          <div class="info-card accent-green">
            <div class="card-header"><span class="card-icon">🌍</span><h4>擴大文化影響</h4></div>
            <p>透過文化外交與國際合作，讓法國葡萄酒文化的普世價值觸達全球更廣泛的受眾</p>
          </div>
          <div class="info-card accent-green">
            <div class="card-header"><span class="card-icon">👥</span><h4>培育文化傳人</h4></div>
            <p>透過正規教育、師徒傳承與國際交流，培養新世代成為文化的守護者與創新者</p>
          </div>
        </div>

        <h3>🔮 波爾多文化的未來展望</h3>
        <div class="key-point-banner">
          <p>波爾多葡萄酒文化正站在歷史的新起點。核心價值不變，傳播方式因時俱進——這是面對數位化、永續發展等時代挑戰的唯一解方，也是法國文化智慧留給世界的最珍貴禮物。</p>
        </div>

      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🎭',
        title: '文化使命',
        content: '保持火種、促進創新、擴大影響、培養傳人是文化傳承的四大核心使命'
      },
      {
        id: 2,
        icon: '🔮',
        title: '未來展望',
        content: '波爾多文化將成為更加開放包容的體系，繼續引領全球葡萄酒文化發展'
      }
    ]
  },

  // 第二部分測驗
  {
    type: 'quiz',
    title: '第二部分測驗：文化傳承與現代影響',
    questions: [
      {
        id: 1,
        question: '法國葡萄酒文化中"Art de Vivre"的核心理念是什麼？',
        options: [
          '追求最高的經濟利益',
          '將葡萄酒融入生活藝術和美學體驗',
          '大規模工業化生產',
          '模仿其他國家的葡萄酒文化'
        ],
        correct: 1,
        explanation: '"Art de Vivre"（法式生活藝術）強調將葡萄酒融入美食文化、社交活動和美學體驗中，體現了法國人對生活品質和精神享受的追求。'
      },
      {
        id: 2,
        question: 'Terroir風土文化的深層內涵主要體現在？',
        options: [
          '純粹的土壤科學研究',
          '人與自然和諧相處的哲學思想',
          '現代農業技術的應用',
          '國際市場的競爭策略'
        ],
        correct: 1,
        explanation: 'Terroir風土文化體現了人與自然和諧相處、時間與耐心、傳統傳承等深層哲學思想，是法國葡萄酒文化的重要組成部分。'
      },
      {
        id: 3,
        question: '波爾多在全球葡萄酒文化中的引領作用主要表現在？',
        options: [
          '價格最低的葡萄酒產區',
          '產量最大的葡萄酒產區',
          '建立品質標準和文化規範',
          '最新釀造技術的發明地'
        ],
        correct: 2,
        explanation: '波爾多通過1855年分級制度建立了全球葡萄酒品質標準，在評價體系、教育體系、文化規範等方面引領全球葡萄酒文化發展。'
      },
      {
        id: 4,
        question: '現代化進程對傳統葡萄酒文化的最大挑戰是？',
        options: [
          '技術設備的成本過高',
          '平衡傳統價值與現代創新',
          '葡萄品種的基因改造',
          '國際貿易政策的變化'
        ],
        correct: 1,
        explanation: '現代化的最大挑戰是如何在保持傳統文化核心價值的同時，適應現代技術和市場需求，實現傳統與創新的動態平衡。'
      },
      {
        id: 5,
        question: '波爾多文化發展的未來策略應該著重於？',
        options: [
          '完全拒絕任何現代化改變',
          '全面放棄傳統文化價值',
          '在核心價值保護基礎上創新發展',
          '只關注短期商業利益'
        ],
        correct: 2,
        explanation: '未來策略應該建立核心價值保護機制，在不妥協品質標準和文化認同的基礎上，靈活適應現代發展需求，實現可持續的文化創新。'
      }
    ],
    passingScore: 80,
    timeLimit: 300
  }

];

export default l311Content;
