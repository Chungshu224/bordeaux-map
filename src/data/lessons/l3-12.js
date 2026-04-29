// L3-12: 波爾多葡萄酒的年份分析與陳年潛力
// 掌握年份評估技巧，理解陳年演變，學習投資策略

export const l312Content = [
  // 課程簡介
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          年份（Vintage）是波爾多葡萄酒評估中最重要的維度之一。2009年的完美氣候造就了近乎完美的成熟度與平衡，2010年的經典結構展現了波爾多的陳年潛力，而2016年則被譽為本世紀最偉大的年份之一。同一酒莊在不同年份的品質可能天差地別，價格也可能相差數倍。
        </p>
        <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L3-12/01%20波爾多頂級年份品質圖.svg" alt="波爾多頂級年份品質圖：2000-2023年份評分與風格特徵" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>

        <p class="intro-context">
          本課程將帶您深入理解年份評估的氣候指標與時間節點，掌握不同產區與品種的陳年特性差異，學習判斷適飲期與陳年潛力的技巧。從單寧與酚類物質的聚合，到花青素與酸度的演變，我們將揭示陳年過程中的化學奧秘。同時探索葡萄酒投資的策略、市場動態與風險管理，助您在收藏與投資中做出明智決策。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>📊 掌握年份評估指標</h4>
            <p>學習溫度、降雨、日照等關鍵氣候指標，以及開花、轉色、採收等重要時間點</p>
          </div>

          <div class="point-item">
            <h4>🍷 理解陳年特性差異</h4>
            <p>分析左岸右岸、不同品種、不同酒莊等級的陳年曲線與適飲期差異</p>
          </div>

          <div class="point-item">
            <h4>⏳ 學習適飲期判斷技巧</h4>
            <p>掌握如何根據單寧結構、酸度、果味濃度判斷葡萄酒的陳年潛力與適飲窗口</p>
          </div>

          <div class="point-item">
            <h4>🌡️ 掌握儲存最佳條件</h4>
            <p>理解溫度、濕度、光線、震動對葡萄酒陳年的影響，避免常見儲存錯誤</p>
          </div>

          <div class="point-item">
            <h4>💰 理解葡萄酒投資策略</h4>
            <p>學習如何評估投資價值、分析市場動態、管理投資風險與資產組合</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後,您將全面掌握年份分析與陳年評估的專業知識，成為葡萄酒收藏與投資的行家。
        </p>

        <div class="course-info">
          <p><strong>預計學習時間：</strong>42分鐘</p>
          <p><strong>難度等級：</strong>高級專業</p>
        </div>
      </div>
    `,
    icon: '📅'
  },

  // ========== 第一章：年份評估的科學基礎 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '年份評估的科學基礎',
    subtitle: '氣候如何決定品質',
    icon: '☀️',
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },

  {
    type: 'content',
    title: '年份為什麼如此重要？',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px;">

          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#7B3F00,#C0392B);padding:10px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.3rem;">🌡️</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.88rem;">風土的年度變化</div>
                <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;">Annual Terroir Variation</div>
              </div>
            </div>
            <div style="padding:10px 14px 14px;">
              <p style="font-size:0.78rem;color:#444;line-height:1.7;margin:0 0 10px;">
                波爾多雖擁有穩定的海洋性氣候，但每年天氣的微妙差異仍深刻影響葡萄品質。<strong>溫度、降雨、日照</strong>的組合決定了葡萄的成熟度、酸度與單寧結構，進而左右酒款的品質與陳年潛力。
              </p>
              <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;">
                <div style="background:#FFF3E0;border-radius:8px;padding:7px 8px;text-align:center;">
                  <div style="font-size:1rem;">🌡️</div>
                  <div style="font-size:0.7rem;color:#E65100;font-weight:600;margin-top:2px;">溫度</div>
                  <div style="font-size:0.67rem;color:#777;margin-top:1px;">成熟速度</div>
                </div>
                <div style="background:#E8F5E9;border-radius:8px;padding:7px 8px;text-align:center;">
                  <div style="font-size:1rem;">🌧️</div>
                  <div style="font-size:0.7rem;color:#2E7D32;font-weight:600;margin-top:2px;">降雨</div>
                  <div style="font-size:0.67rem;color:#777;margin-top:1px;">濃縮度</div>
                </div>
                <div style="background:#FFF9C4;border-radius:8px;padding:7px 8px;text-align:center;">
                  <div style="font-size:1rem;">☀️</div>
                  <div style="font-size:0.7rem;color:#F57F17;font-weight:600;margin-top:2px;">日照</div>
                  <div style="font-size:0.67rem;color:#777;margin-top:1px;">糖分積累</div>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#0288D1);padding:10px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.3rem;">📊</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.88rem;">年份評分的意義</div>
                <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;">Vintage Rating & Its Limits</div>
              </div>
            </div>
            <div style="padding:10px 14px 14px;">
              <p style="font-size:0.78rem;color:#444;line-height:1.7;margin:0 0 10px;">
                年份評分（Parker百分制、Decanter星級）是綜合氣候、採收條件與酒款表現的快速參考，但專業評估必須細分到<strong>產區與品種層面</strong>。
              </p>
              <div style="background:#E3F2FD;border-radius:8px;padding:8px 10px;">
                <div style="font-size:0.72rem;color:#1565C0;font-weight:700;margin-bottom:5px;">⚠️ 重要提醒</div>
                <ul style="margin:0;padding-left:14px;font-size:0.74rem;color:#333;line-height:1.8;">
                  <li>左岸大年 <strong>≠</strong> 右岸大年</li>
                  <li>紅酒大年 <strong>≠</strong> 甜白酒大年</li>
                  <li>同村莊，不同酒莊表現也可能差異巨大</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div style="background:linear-gradient(135deg,#fff8e1,#fffde7);border:1px solid #FFD54F;border-radius:10px;padding:11px 15px;display:flex;align-items:flex-start;gap:10px;">
          <span style="font-size:1.4rem;flex-shrink:0;">💡</span>
          <div>
            <div style="font-weight:700;color:#E65100;font-size:0.82rem;margin-bottom:3px;">核心洞察</div>
            <div style="font-size:0.78rem;color:#555;line-height:1.65;">
              <strong>偉大年份不是完美無瑕的天氣，而是在關鍵時刻的完美配合</strong>——春季無霜、開花期乾燥、夏末適度水壓、採收前晴朗，每個環節缺一不可。
            </div>
          </div>
        </div>

      </div>
    `
  },

  {
    type: 'content',
    title: '關鍵生長期與氣候指標',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.78rem;color:#555;margin:0 0 12px;line-height:1.65;">
          波爾多葡萄生長週期由 <strong>3月萌芽</strong> 至 <strong>10月採收</strong>，每個關鍵階段對氣候的需求截然不同。年份評估的核心就在於追蹤這四個時期的氣候表現。
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#388E3C,#66BB6A);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">🌱</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">3–4月：萌芽期</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;">Budbreak</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;font-size:0.74rem;color:#444;line-height:1.7;">
              <div style="margin-bottom:4px;">✅ <strong>理想：</strong>溫和無霜凍（日均 &gt;10°C）</div>
              <div style="margin-bottom:4px;">❌ <strong>風險：</strong>春季霜凍損失芽點（如2017年大霜凍）</div>
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 7px;margin-top:5px;font-size:0.71rem;color:#2E7D32;font-weight:600;">📌 決定基礎產量</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#F57F17,#FFB300);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">🌸</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">5–6月：開花坐果期</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;">Flowering &amp; Fruit Set</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;font-size:0.74rem;color:#444;line-height:1.7;">
              <div style="margin-bottom:4px;">✅ <strong>理想：</strong>溫暖乾燥（20–25°C），無強風暴雨</div>
              <div style="margin-bottom:4px;">❌ <strong>風險：</strong>陰雨→坐果不良（coulure）、果粒大小不均（millerandage）</div>
              <div style="background:#FFF8E1;border-radius:5px;padding:4px 7px;margin-top:5px;font-size:0.71rem;color:#E65100;font-weight:600;">📌 決定產量與果實均勻度</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#C62828,#E53935);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">🍇</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">7–8月：轉色期</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;">Véraison</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;font-size:0.74rem;color:#444;line-height:1.7;">
              <div style="margin-bottom:4px;">✅ <strong>理想：</strong>炎熱（25–30°C）＋ 適度水分壓力</div>
              <div style="margin-bottom:4px;">❌ <strong>風險：</strong>極端高溫（&gt;35°C）停止成熟；暴雨稀釋果粒</div>
              <div style="background:#FFEBEE;border-radius:5px;padding:4px 7px;margin-top:5px;font-size:0.71rem;color:#C62828;font-weight:600;">📌 決定果實濃縮度與風味複雜度</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">🌾</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">9–10月：成熟採收期</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;">Ripening &amp; Harvest</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;font-size:0.74rem;color:#444;line-height:1.7;">
              <div style="margin-bottom:4px;">✅ <strong>理想：</strong>溫暖乾燥、涼爽夜晚、無暴雨</div>
              <div style="margin-bottom:4px;">❌ <strong>風險：</strong>採收前降雨稀釋果實、灰黴病；過早採收→未成熟</div>
              <div style="background:#EDE7F6;border-radius:5px;padding:4px 7px;margin-top:5px;font-size:0.71rem;color:#4527A0;font-weight:600;">📌 決定最終品質、酸度、單寧成熟度</div>
            </div>
          </div>
        </div>

        <div style="background:#fff;border-radius:10px;border:1px solid #e0e0e0;padding:10px 14px;">
          <div style="font-weight:700;color:#333;font-size:0.8rem;margin-bottom:7px;">🏆 偉大年份的氣候公式</div>
          <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;font-size:0.74rem;">
            <span style="background:#E8F5E9;color:#2E7D32;border-radius:20px;padding:3px 10px;font-weight:600;">溫暖春季</span>
            <span style="color:#aaa;">→</span>
            <span style="background:#FFF8E1;color:#E65100;border-radius:20px;padding:3px 10px;font-weight:600;">開花期乾燥</span>
            <span style="color:#aaa;">→</span>
            <span style="background:#FFEBEE;color:#C62828;border-radius:20px;padding:3px 10px;font-weight:600;">7–8月炎熱有壓力</span>
            <span style="color:#aaa;">→</span>
            <span style="background:#EDE7F6;color:#4527A0;border-radius:20px;padding:3px 10px;font-weight:600;">9月涼爽乾燥</span>
          </div>
          <div style="margin-top:8px;font-size:0.72rem;color:#666;line-height:1.65;">
            代表年份：<strong>2009</strong>（完美夏季高溫＋9月理想採收）、<strong>2010</strong>（均衡生長季＋冷涼夜晚保酸）、<strong>2016</strong>（乾燥夏季＋9月適時降雨）
          </div>
        </div>

      </div>
    `
  },

  {
    type: 'content',
    title: '左岸與右岸的年份差異',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.78rem;color:#555;margin:0 0 12px;line-height:1.65;">
          <strong>左岸</strong>（礫石土壤、卡本內主導）與<strong>右岸</strong>（黏土石灰岩、梅洛主導）因土壤排水性與品種成熟時間不同，在同一氣候年份往往呈現截然不同的表現。
        </p>

        <div style="display:flex;gap:8px;margin-bottom:10px;font-size:0.72rem;">
          <div style="background:#E3F2FD;border-radius:20px;padding:4px 12px;color:#1565C0;font-weight:600;">左岸：礫石排水快 ＋ 卡本內晚熟</div>
          <div style="background:#FCE4EC;border-radius:20px;padding:4px 12px;color:#880E4F;font-weight:600;">右岸：黏土保水 ＋ 梅洛早熟</div>
        </div>

        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:14px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(90deg,#0288D1,#0097A7);padding:7px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1rem;">🌧️</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">降雨量大的年份</div>
              <span style="margin-left:auto;background:rgba(255,255,255,0.2);border-radius:12px;padding:2px 8px;font-size:0.69rem;color:#fff;">典型：2013</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;">
              <div style="padding:9px 12px;border-right:1px solid #f0f0f0;">
                <div style="font-size:0.7rem;color:#1565C0;font-weight:700;margin-bottom:4px;">🏛️ 左岸</div>
                <div style="font-size:0.73rem;color:#444;line-height:1.65;">礫石排水佳，影響相對小；但卡本內需要更長成熟期，採收期降雨影響大，單寧較青澀</div>
              </div>
              <div style="padding:9px 12px;">
                <div style="font-size:0.7rem;color:#880E4F;font-weight:700;margin-bottom:4px;">⛪ 右岸</div>
                <div style="font-size:0.73rem;color:#444;line-height:1.65;">黏土保水性強，易積水；但<strong>梅洛早熟</strong>，可在降雨前提早採收，保留品質</div>
              </div>
            </div>
            <div style="background:#E1F5FE;padding:5px 12px;font-size:0.71rem;color:#01579B;">🏆 結果：右岸整體優於左岸（梅洛提前採收避開10月雨）</div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(90deg,#E64A19,#FF7043);padding:7px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1rem;">🔥</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">乾旱炎熱的年份</div>
              <span style="margin-left:auto;background:rgba(255,255,255,0.2);border-radius:12px;padding:2px 8px;font-size:0.69rem;color:#fff;">典型：2003</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;">
              <div style="padding:9px 12px;border-right:1px solid #f0f0f0;">
                <div style="font-size:0.7rem;color:#1565C0;font-weight:700;margin-bottom:4px;">🏛️ 左岸</div>
                <div style="font-size:0.73rem;color:#444;line-height:1.65;">礫石水分壓力大，<strong>老藤深根系優勢明顯</strong>；卡本內耐熱，在極端年份表現更穩定</div>
              </div>
              <div style="padding:9px 12px;">
                <div style="font-size:0.7rem;color:#880E4F;font-weight:700;margin-bottom:4px;">⛪ 右岸</div>
                <div style="font-size:0.73rem;color:#444;line-height:1.65;">黏土保水支撐梅洛，但過度高溫導致過熟，酒精度偏高（15%+），失去精緻感</div>
              </div>
            </div>
            <div style="background:#FBE9E7;padding:5px 12px;font-size:0.71rem;color:#BF360C;">🏆 結果：左岸結構更佳；右岸梅洛普遍過熟</div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(90deg,#2E7D32,#43A047);padding:7px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1rem;">⚖️</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">理想平衡的年份</div>
              <span style="margin-left:auto;background:rgba(255,255,255,0.2);border-radius:12px;padding:2px 8px;font-size:0.69rem;color:#fff;">2009 / 2010 / 2016</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;">
              <div style="padding:9px 12px;border-right:1px solid #f0f0f0;">
                <div style="font-size:0.7rem;color:#1565C0;font-weight:700;margin-bottom:4px;">🏛️ 左岸</div>
                <div style="font-size:0.73rem;color:#444;line-height:1.65;">卡本內充分成熟，單寧絲滑、架構強勁，具備30-50年陳年潛力</div>
              </div>
              <div style="padding:9px 12px;">
                <div style="font-size:0.7rem;color:#880E4F;font-weight:700;margin-bottom:4px;">⛪ 右岸</div>
                <div style="font-size:0.73rem;color:#444;line-height:1.65;">梅洛完美成熟，果味濃郁、質地天鵝絨般柔順，令人讚嘆</div>
              </div>
            </div>
            <div style="background:#E8F5E9;padding:5px 12px;font-size:0.71rem;color:#1B5E20;">🏆 結果：左右岸雙贏，真正的傳奇年份</div>
          </div>
        </div>

      </div>
    `
  },

  {
    type: 'content',
    title: '甜白酒的特殊年份需求',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);margin-bottom:12px;">
          <div style="background:linear-gradient(135deg,#F9A825,#FF8F00);padding:9px 14px;display:flex;align-items:center;gap:8px;">
            <span style="font-size:1.2rem;">🍯</span>
            <div>
              <div style="color:#fff;font-weight:700;font-size:0.85rem;">貴腐菌（Botrytis cinerea）的完美條件</div>
              <div style="color:rgba(255,255,255,0.85);font-size:0.7rem;">Sauternes &amp; Barsac 的秘密武器</div>
            </div>
          </div>
          <div style="padding:10px 14px 13px;">
            <p style="font-size:0.77rem;color:#444;line-height:1.7;margin:0 0 10px;">
              Sauternes與Barsac的甜白酒依賴貴腐菌濃縮糖分、發展複雜風味。貴腐菌需要極其特殊的氣候——<strong>這使得甜白酒的偉大年份與紅酒往往並不一致</strong>。
            </p>
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:7px;">
              <div style="background:#FFF8E1;border-radius:8px;padding:7px 8px;text-align:center;">
                <div style="font-size:1.1rem;">🌫️</div>
                <div style="font-size:0.69rem;color:#E65100;font-weight:700;margin-top:3px;">清晨霧氣</div>
                <div style="font-size:0.64rem;color:#777;margin-top:2px;line-height:1.4;">Ciron河冷空氣<br/>促進貴腐菌生長</div>
              </div>
              <div style="background:#FFF3E0;border-radius:8px;padding:7px 8px;text-align:center;">
                <div style="font-size:1.1rem;">☀️</div>
                <div style="font-size:0.69rem;color:#E65100;font-weight:700;margin-top:3px;">午後日曬</div>
                <div style="font-size:0.64rem;color:#777;margin-top:2px;line-height:1.4;">溫暖乾燥<br/>停止菌蔓延</div>
              </div>
              <div style="background:#FCE4EC;border-radius:8px;padding:7px 8px;text-align:center;">
                <div style="font-size:1.1rem;">📅</div>
                <div style="font-size:0.69rem;color:#880E4F;font-weight:700;margin-top:3px;">持續數週</div>
                <div style="font-size:0.64rem;color:#777;margin-top:2px;line-height:1.4;">9–11月重複<br/>晨霧午晴循環</div>
              </div>
              <div style="background:#E8F5E9;border-radius:8px;padding:7px 8px;text-align:center;">
                <div style="font-size:1.1rem;">✂️</div>
                <div style="font-size:0.69rem;color:#2E7D32;font-weight:700;margin-top:3px;">多次採摘</div>
                <div style="font-size:0.64rem;color:#777;margin-top:2px;line-height:1.4;">Tries successives<br/>只摘完美貴腐</div>
              </div>
            </div>
          </div>
        </div>

        <div style="background:#fff;border-radius:10px;border:1px solid #e0e0e0;padding:10px 14px;margin-bottom:11px;">
          <div style="font-weight:700;color:#333;font-size:0.8rem;margin-bottom:8px;">🏅 甜白酒的偉大年份</div>
          <div style="display:flex;flex-direction:column;gap:5px;">
            <div style="display:grid;grid-template-columns:60px 1fr;gap:8px;align-items:center;">
              <div style="background:linear-gradient(135deg,#FFD700,#FFC107);border-radius:6px;padding:4px 8px;font-weight:700;font-size:0.76rem;color:#5D4037;text-align:center;">2001</div>
              <div style="font-size:0.74rem;color:#444;line-height:1.5;">紅酒平庸，但甜白酒的「傳奇年份」——完美貴腐條件，Yquem 被譽為世紀款</div>
            </div>
            <div style="display:grid;grid-template-columns:60px 1fr;gap:8px;align-items:center;">
              <div style="background:linear-gradient(135deg,#FFD700,#FFC107);border-radius:6px;padding:4px 8px;font-weight:700;font-size:0.76rem;color:#5D4037;text-align:center;">2009</div>
              <div style="font-size:0.74rem;color:#444;line-height:1.5;">紅酒與甜白酒的「雙料冠軍」——極罕見的左右岸＋甜白三贏年份</div>
            </div>
            <div style="display:grid;grid-template-columns:60px 1fr;gap:8px;align-items:center;">
              <div style="background:linear-gradient(135deg,#C0C0C0,#9E9E9E);border-radius:6px;padding:4px 8px;font-weight:700;font-size:0.76rem;color:#fff;text-align:center;">2011</div>
              <div style="font-size:0.74rem;color:#444;line-height:1.5;">紅酒中等，但甜白酒優秀——秋季理想晨霧條件，加龍河地帶表現亮眼</div>
            </div>
            <div style="display:grid;grid-template-columns:60px 1fr;gap:8px;align-items:center;">
              <div style="background:linear-gradient(135deg,#C0C0C0,#9E9E9E);border-radius:6px;padding:4px 8px;font-weight:700;font-size:0.76rem;color:#fff;text-align:center;">2015</div>
              <div style="font-size:0.74rem;color:#444;line-height:1.5;">乾燥夏季後秋季完美貴腐，豐沛糖分與清爽酸度兼具</div>
            </div>
          </div>
        </div>

        <div style="background:linear-gradient(135deg,#fff8e1,#fffde7);border-left:3px solid #FFC107;border-radius:8px;padding:9px 13px;">
          <div style="font-weight:700;color:#E65100;font-size:0.78rem;margin-bottom:4px;">⚠️ 年份風險</div>
          <div style="font-size:0.74rem;color:#555;line-height:1.7;">
            降雨過多 → 灰黴病而非貴腐；過度乾燥 → 無法形成貴腐菌；採收時機稍有不慎即錯失最佳狀態。
            某些年份（如 2012）酒莊<strong>完全放棄生產正牌甜酒</strong>。
          </div>
        </div>

      </div>
    `
  },

  // 第一章知識檢測
  {
    type: 'interactive-quiz',
    title: '知識檢測：年份評估的科學基礎',
    questions: [
      {
        question: '偉大年份的氣候特徵通常包括哪些？',
        options: [
          '春季霜凍 + 多雨的開花期 + 冰冷的9月',
          '溫暖無霜凍春季 + 乾燥開花期 + 焰熱7-8月 + 涼爽乾燥的9月',
          '陰雨的春季 + 涼爽夏季 + 高溫雨季',
          '極端高溫持續整個生長季'
        ],
        correct: 1,
        explanation: '偉大年份通常具備：溫暖的春季（無霜凍）→ 乾燥的開花期 → 焰熱的7-8月（適度水壓）→ 涼爽乾燥的9月 → 溫暖的採收期。這種配合讓葡萄達到理想成熟度。'
      },
      {
        question: '左岸與右岸在同一年份為何可能有截然不同的表現？',
        options: [
          '只是行銷策略不同',
          '土壤排水性與品種成熟時間的差異',
          '酒莊規模大小不同',
          '價格定位策略不同'
        ],
        correct: 1,
        explanation: '左岸（礫石土壤、卡本內主導）與右岸（黏土石灰岩、梅洛主導）因為土壤排水性不同和品種成熟時間差異，在同一年份可能有天壤之別。如降雨大的年份，右岸梅洛可提前採收避開雨季。'
      }
    ]
  },

  // ========== 第二章：近代偉大年份詳解 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '近代偉大年份詳解',
    subtitle: '從2000年至今的經典年份',
    icon: '🏆',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },

  {
    type: 'content',
    title: '21世紀的黃金十年（2000–2010）',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          2000年代是波爾多現代史的分水嶺，誕生了<strong>2009</strong>與<strong>2010</strong>兩個被並稱為「雙子座傳奇」的頂峰年份，同時2005年的潛力也等待被重新認識。
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">

          <!-- 2000 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#5D4037,#8D6E63);padding:8px 12px;display:flex;align-items:center;gap:8px;">
              <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:3px 9px;font-weight:900;font-size:0.95rem;color:#fff;">2000</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.8rem;">世紀之交的穩健年份</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.67rem;">Parker 91 左 / 90 右 · 9月乾燥溫和</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;">
              <ul style="margin:0 0 8px;padding-left:14px;font-size:0.73rem;color:#444;line-height:1.75;">
                <li>卡本內成熟度優秀，單寧成熟、結構堅實</li>
                <li>梅洛稍顯樸素，右岸表現弱於左岸</li>
                <li>適飲期已到，無需再等</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#FFF3E0;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#E65100;">🍷 Léoville Las Cases, Lynch-Bages</span>
                <span style="background:#E8F5E9;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#2E7D32;">💰 價格親民，現飲佳選</span>
              </div>
            </div>
          </div>

          <!-- 2005 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:8px 12px;display:flex;align-items:center;gap:8px;">
              <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:3px 9px;font-weight:900;font-size:0.95rem;color:#fff;">2005</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.8rem;">被低估的偉大年份</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.67rem;">Parker 95 左 / 94 右 · 乾燥炎熱，9月理想</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;">
              <ul style="margin:0 0 8px;padding-left:14px;font-size:0.73rem;color:#444;line-height:1.75;">
                <li>卡本內完美成熟，單寧強勁絲滑，結構宏偉</li>
                <li>右岸梅洛濃郁，卡本內弗朗表現驚人</li>
                <li>2030年後進入巔峰，陳年潛力極強</li>
                <li>被2009/2010光芒掩蓋 → 價格相對合理</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#FFF3E0;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#E65100;">🍷 Latour(100分), Cheval Blanc, Haut-Brion</span>
                <span style="background:#E3F2FD;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#1565C0;">💡 長期投資首選，價值被低估</span>
              </div>
            </div>
          </div>

          <!-- 2009 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.09);border:1.5px solid #FFD700;">
            <div style="background:linear-gradient(135deg,#E65100,#FF8F00);padding:8px 12px;display:flex;align-items:center;gap:8px;">
              <div style="background:rgba(255,255,255,0.25);border-radius:6px;padding:3px 9px;font-weight:900;font-size:0.95rem;color:#fff;">2009</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.8rem;">現代波爾多的里程碑 🏆</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.67rem;">Parker 98 左 / 99 右 · 7月破紀錄高溫</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;">
              <ul style="margin:0 0 8px;padding-left:14px;font-size:0.73rem;color:#444;line-height:1.75;">
                <li>酒體豐滿、果味極度濃郁（酒精 14–14.5%）</li>
                <li>單寧絲滑，架構宏大卻平易近人</li>
                <li>Pomerol 達到傳奇水準，年輕已美味</li>
                <li>30–50 年陳年潛力，現代風格的巔峰</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#FFF3E0;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#E65100;">🍷 Pétrus, Ausone, Margaux, Palmer</span>
                <span style="background:#FFF8E1;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#F57F17;">⚠️ 部分評論：過濃、缺清爽感</span>
              </div>
            </div>
          </div>

          <!-- 2010 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.09);border:1.5px solid #90CAF9;">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:8px 12px;display:flex;align-items:center;gap:8px;">
              <div style="background:rgba(255,255,255,0.25);border-radius:6px;padding:3px 9px;font-weight:900;font-size:0.95rem;color:#fff;">2010</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.8rem;">經典主義的回歸 🏆</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.67rem;">Parker 97 左 / 95 右 · 9月涼爽保留酸度</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;">
              <ul style="margin:0 0 8px;padding-left:14px;font-size:0.73rem;color:#444;line-height:1.75;">
                <li>更多架構、酸度明快、風味複雜度高</li>
                <li>左岸優於右岸（卡本內的酸度優勢）</li>
                <li>陳年潛力可能超越2009，仍需時間</li>
                <li>許多侍酒師視2010為「更偉大」的年份</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#FFF3E0;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#E65100;">🍷 Latour, Léoville Las Cases, Montrose</span>
                <span style="background:#E8F5E9;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#2E7D32;">💰 長期價值可能高於2009</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '2010年代的優秀年份',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          2010年代在2016年誕生了新的里程碑年份，同時2015、2019也是令人印象深刻的優秀年份。2018因被「夾在中間」而常被忽視，是了解內情的人的秘密武器。
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">

          <!-- 2015 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#AD1457,#E91E63);padding:8px 12px;display:flex;align-items:center;gap:8px;">
              <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:3px 9px;font-weight:900;font-size:0.95rem;color:#fff;">2015</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.8rem;">溫暖的經典年份</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.67rem;">Parker 94 左 / 93 右 · 乾燥夏季，9月降雨</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;">
              <ul style="margin:0 0 8px;padding-left:14px;font-size:0.73rem;color:#444;line-height:1.75;">
                <li>果味純淨濃郁，單寧成熟柔順</li>
                <li>2025年起進入適飲期，比09/10更早開放</li>
                <li>風格介於2009力量與2010優雅之間</li>
                <li>產量較高，價格相對親民</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#FCE4EC;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#AD1457;">🍷 Margaux, Palmer, Rauzan-Ségla</span>
              </div>
            </div>
          </div>

          <!-- 2016 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.09);border:1.5px solid #FFD700;">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:8px 12px;display:flex;align-items:center;gap:8px;">
              <div style="background:rgba(255,255,255,0.25);border-radius:6px;padding:3px 9px;font-weight:900;font-size:0.95rem;color:#fff;">2016</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.8rem;">新的里程碑 🏆</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.67rem;">Parker 96 左 / 95 右 · 9月關鍵降雨</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;">
              <ul style="margin:0 0 8px;padding-left:14px;font-size:0.73rem;color:#444;line-height:1.75;">
                <li>左岸卡本內達到理想成熟，單寧細膩</li>
                <li>酸度明快，陳年潛力極強</li>
                <li>當前封閉，2028–2035 年展現真正魅力</li>
                <li>甜白酒亦表現優異</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#EDE7F6;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#4527A0;">🍷 Pauillac一級莊, Léoville Barton</span>
                <span style="background:#E8F5E9;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#2E7D32;">💰 長期持有價值高</span>
              </div>
            </div>
          </div>

          <!-- 2018 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:8px 12px;display:flex;align-items:center;gap:8px;">
              <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:3px 9px;font-weight:900;font-size:0.95rem;color:#fff;">2018</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.8rem;">被低估的寶石 💎</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.67rem;">Parker 95 左 / 93 右 · 溫暖乾燥不極端</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;">
              <ul style="margin:0 0 8px;padding-left:14px;font-size:0.73rem;color:#444;line-height:1.75;">
                <li>夾在2016/2019之間被市場忽視</li>
                <li>左岸品質實際非常優秀</li>
                <li>風格優雅平衡，中期陳年 10–25 年</li>
                <li>價格未充分反映品質 → 性價比極高</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#E0F2F1;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#00695C;">💡 內行人的秘密武器</span>
              </div>
            </div>
          </div>

          <!-- 2019 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#BF360C,#E64A19);padding:8px 12px;display:flex;align-items:center;gap:8px;">
              <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:3px 9px;font-weight:900;font-size:0.95rem;color:#fff;">2019</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.8rem;">現代的經典年份</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.67rem;">Parker 96 左 / 94 右 · 炎熱乾燥，9月完美</div>
              </div>
            </div>
            <div style="padding:9px 12px 11px;">
              <ul style="margin:0 0 8px;padding-left:14px;font-size:0.73rem;color:#444;line-height:1.75;">
                <li>果味濃郁、單寧成熟、酒體飽滿</li>
                <li>風格接近2009，但酸度更明快</li>
                <li>年輕已展現魅力，同時有長期陳年潛力</li>
                <li>左岸優於右岸，St-Estèphe尤佳</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#FBE9E7;border-radius:5px;padding:2px 8px;font-size:0.67rem;color:#BF360C;">🍷 St-Estèphe 與 Pauillac 強勁表現</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '2020年代的新篇章',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 14px;line-height:1.65;">
          2020年代甫開始即面臨疫情衝擊與極端氣候雙重挑戰。2020年以寧靜低調的方式呈現出色品質，2022年則以破紀錄高溫書寫了一頁爭議性的歷史。
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;">

          <!-- 2020 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#1565C0,#0288D1);padding:9px 13px;display:flex;align-items:center;gap:9px;">
              <div style="background:rgba(255,255,255,0.22);border-radius:6px;padding:3px 10px;font-weight:900;font-size:1rem;color:#fff;">2020</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">疫情下的驚喜</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.68rem;">Parker 94 左 / 95 右 · 採收期乾燥均衡</div>
              </div>
            </div>
            <div style="padding:10px 13px 12px;">
              <ul style="margin:0 0 9px;padding-left:14px;font-size:0.74rem;color:#444;line-height:1.75;">
                <li><strong>右岸優於左岸</strong>（罕見格局）</li>
                <li>梅洛與卡本內弗朗達到完美平衡</li>
                <li>風格優雅細膩，適合中短期陳年（10–20年）</li>
                <li>疫情壓低期酒價格 → 性價比優秀</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#E3F2FD;border-radius:6px;padding:3px 9px;font-size:0.68rem;color:#1565C0;">🏆 Pomerol ＆ Saint-Émilion 雙星閃耀</span>
                <span style="background:#E8F5E9;border-radius:6px;padding:3px 9px;font-size:0.68rem;color:#2E7D32;">💰 適合飲用與短期投資</span>
              </div>
            </div>
          </div>

          <!-- 2022 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#E65100,#FF6F00);padding:9px 13px;display:flex;align-items:center;gap:9px;">
              <div style="background:rgba(255,255,255,0.22);border-radius:6px;padding:3px 10px;font-weight:900;font-size:1rem;color:#fff;">2022</div>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">極端氣候的考驗 ⚠️</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.68rem;">Parker 90–93（估）· 7月超40°C，提前3週採收</div>
              </div>
            </div>
            <div style="padding:10px 13px 12px;">
              <ul style="margin:0 0 9px;padding-left:14px;font-size:0.74rem;color:#444;line-height:1.75;">
                <li>酒精度高（多數 &gt;14.5%），果味極度濃縮</li>
                <li>老藤與頂級風土展現韌性</li>
                <li>爭議性：有人讚濃郁，有人批評過熟失衡</li>
                <li>氣候變化對波爾多挑戰的縮影</li>
              </ul>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                <span style="background:#FFF3E0;border-radius:6px;padding:3px 9px;font-size:0.68rem;color:#E65100;">🔬 長期陳年潛力有待觀察</span>
              </div>
            </div>
          </div>

        </div>

        <div style="background:linear-gradient(135deg,#fff8e1,#fffde7);border:1px solid #FFD54F;border-radius:10px;padding:10px 14px;">
          <div style="font-weight:700;color:#E65100;font-size:0.79rem;margin-bottom:6px;">📊 近代年份快覽對照表</div>
          <div style="overflow-x:auto;">
            <table style="width:100%;border-collapse:collapse;font-size:0.7rem;">
              <thead>
                <tr style="background:#F57F17;">
                  <th style="color:#fff;padding:5px 8px;text-align:left;border-radius:4px 0 0 0;">年份</th>
                  <th style="color:#fff;padding:5px 8px;text-align:center;">Parker 左/右</th>
                  <th style="color:#fff;padding:5px 8px;text-align:center;">風格</th>
                  <th style="color:#fff;padding:5px 8px;text-align:left;border-radius:0 4px 0 0;">亮點</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background:#fff;"><td style="padding:4px 8px;font-weight:700;">2005</td><td style="padding:4px 8px;text-align:center;">95 / 94</td><td style="padding:4px 8px;text-align:center;">宏偉耐久</td><td style="padding:4px 8px;">低估的傑作，2030+巔峰</td></tr>
                <tr style="background:#FFFDE7;"><td style="padding:4px 8px;font-weight:700;color:#E65100;">2009 🏆</td><td style="padding:4px 8px;text-align:center;">98 / 99</td><td style="padding:4px 8px;text-align:center;">豐滿濃郁</td><td style="padding:4px 8px;">現代風格巔峰</td></tr>
                <tr style="background:#fff;"><td style="padding:4px 8px;font-weight:700;color:#1B5E20;">2010 🏆</td><td style="padding:4px 8px;text-align:center;">97 / 95</td><td style="padding:4px 8px;text-align:center;">優雅平衡</td><td style="padding:4px 8px;">侍酒師的最愛</td></tr>
                <tr style="background:#FFFDE7;"><td style="padding:4px 8px;font-weight:700;color:#4527A0;">2016 🏆</td><td style="padding:4px 8px;text-align:center;">96 / 95</td><td style="padding:4px 8px;text-align:center;">細膩耐久</td><td style="padding:4px 8px;">2028–2035 之後綻放</td></tr>
                <tr style="background:#fff;"><td style="padding:4px 8px;font-weight:700;">2018 💎</td><td style="padding:4px 8px;text-align:center;">95 / 93</td><td style="padding:4px 8px;text-align:center;">優雅平衡</td><td style="padding:4px 8px;">性價比首選，常被忽視</td></tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    `
  },

  // 第二章知識檢測
  {
    type: 'interactive-quiz',
    title: '知識檢測：近代偉大年份詳解',
    questions: [
      {
        question: '2009年與2010年波爾多的主要差異是什麼？',
        options: [
          '2009年價格較高，2010年較低',
          '2009年果味濃郁豐滿，2010年更有架構和酸度、更經典',
          '2009年左岸優秀，2010年右岸優秀',
          '2009年產量大，2010年產量小'
        ],
        correct: 1,
        explanation: '2009年是現代風格的巅峰：酒體豐滿、果味濃郁、單寧絲滑、年輕時已美味。2010年則是經典主義的回歸：更多架構、酸度明快、風味複雜度高，需更長時間開放。'
      },
      {
        question: '哪個年份被稱為「被低估的寶石」，性價比極高？',
        options: [
          '2009年',
          '2016年',
          '2018年',
          '2020年'
        ],
        correct: 2,
        explanation: '2018年因緊隨在2016、2015、2019之後，被市場忽視，但品質實際非常優秀（Parker 95分左岸）。價格親民，未充分反映品質，是絕佳的投資與飲用選擇。'
      }
    ]
  },

  // ========== 第三章：陳年的科學與藝術 ==========
  {
    type: 'chapter-divider',
    chapter: '3',
    title: '陳年的科學與藝術',
    subtitle: '時間如何改變葡萄酒',
    icon: '⏳',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },

  {
    type: 'content',
    title: '陳年過程的化學變化',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          葡萄酒在瓶中陳年時，微量氧氣透過軟木塞緩慢滲入，引發一系列<strong>不可逆的化學反應</strong>，改變顏色、香氣、質地。理解這些反應，才能精準預判陳年潛力與適飲時機。
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#880E4F,#C2185B);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">🔗</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">單寧聚合</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.68rem;">Tannin Polymerisation</div>
              </div>
              <div style="margin-left:auto;background:rgba(255,255,255,0.2);border-radius:10px;padding:2px 7px;font-size:0.67rem;color:#fff;">5–15 年</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <p style="font-size:0.74rem;color:#444;line-height:1.7;margin:0 0 6px;">
                單寧分子相互結合形成長鏈聚合物，體積增大後沉澱為<strong>酒渣</strong>。分子量越大、口感越柔順——酒款從年輕的澀口逐漸演變為絲絨般質地。
              </p>
              <div style="background:#FCE4EC;border-radius:5px;padding:4px 8px;font-size:0.7rem;color:#880E4F;">📌 澀口 → 柔順 → 絲滑</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">🎨</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">花青素演變</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.68rem;">Anthocyanin Evolution</div>
              </div>
              <div style="margin-left:auto;background:rgba(255,255,255,0.2);border-radius:10px;padding:2px 7px;font-size:0.67rem;color:#fff;">10–30 年</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <p style="font-size:0.74rem;color:#444;line-height:1.7;margin:0 0 6px;">
                花青素與單寧結合，顏色與果味同步演變：
              </p>
              <div style="display:flex;gap:4px;flex-wrap:wrap;font-size:0.67rem;">
                <span style="background:#7B1FA2;color:#fff;border-radius:12px;padding:2px 7px;">紫紅</span>
                <span style="color:#aaa;">→</span>
                <span style="background:#C62828;color:#fff;border-radius:12px;padding:2px 7px;">寶石紅</span>
                <span style="color:#aaa;">→</span>
                <span style="background:#BF360C;color:#fff;border-radius:12px;padding:2px 7px;">磚紅</span>
                <span style="color:#aaa;">→</span>
                <span style="background:#795548;color:#fff;border-radius:12px;padding:2px 7px;">橙褐</span>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#E65100,#FF8F00);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">🌸</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">酯化反應</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.68rem;">Esterification</div>
              </div>
              <div style="margin-left:auto;background:rgba(255,255,255,0.2);border-radius:10px;padding:2px 7px;font-size:0.67rem;color:#fff;">20 年後明顯</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <p style="font-size:0.74rem;color:#444;line-height:1.7;margin:0 0 6px;">
                酒精與酸發生酯化，產生複雜果酯香氣：鮮果逐漸轉化為果乾、果醬、白蘭地等濃縮風味。
              </p>
              <div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.7rem;color:#E65100;">📌 新鮮黑莓 → 黑莓果醬 → 李子乾 → 調味品</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#1B5E20,#388E3C);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">🍄</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">還原性香氣發展</div>
                <div style="color:rgba(255,255,255,0.82);font-size:0.68rem;">Tertiary Aromas</div>
              </div>
              <div style="margin-left:auto;background:rgba(255,255,255,0.2);border-radius:10px;padding:2px 7px;font-size:0.67rem;color:#fff;">15–30 年後</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <p style="font-size:0.74rem;color:#444;line-height:1.7;margin:0 0 6px;">
                低氧環境下形成「三層香氣」（Tertiary）：皮革、雪茄盒、松露、森林地面、醬油——這是頂級陳年酒最令人著迷的複雜風味。
              </p>
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.7rem;color:#1B5E20;">📌 松露、皮革、森林地面為陳年標誌</div>
            </div>
          </div>

        </div>

        <div style="background:#fff;border-radius:10px;border:1px solid #e0e0e0;padding:10px 14px;">
          <div style="font-weight:700;color:#333;font-size:0.8rem;margin-bottom:8px;">⏱️ 陳年的三個階段</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            <div style="background:linear-gradient(180deg,#FFEBEE,#fff);border:1px solid #FFCDD2;border-radius:8px;padding:8px 10px;">
              <div style="font-size:0.76rem;font-weight:700;color:#C62828;margin-bottom:4px;">🌱 青春期（0–5年）</div>
              <div style="font-size:0.7rem;color:#555;line-height:1.65;">
                果味主導、單寧緊緻、酸度明快、橡木風味明顯
                <div style="margin-top:4px;background:#FFEBEE;border-radius:4px;padding:3px 6px;font-size:0.67rem;color:#C62828;">頂級酒款常封閉難飲</div>
              </div>
            </div>
            <div style="background:linear-gradient(180deg,#E8F5E9,#fff);border:1.5px solid #4CAF50;border-radius:8px;padding:8px 10px;">
              <div style="font-size:0.76rem;font-weight:700;color:#2E7D32;margin-bottom:4px;">🌟 適飲期（5–25年）</div>
              <div style="font-size:0.7rem;color:#555;line-height:1.65;">
                單寧柔化、果味與陳年香氣平衡、複雜度達到巔峰
                <div style="margin-top:4px;background:#E8F5E9;border-radius:4px;padding:3px 6px;font-size:0.67rem;color:#2E7D32;">最佳飲用窗口 ✨</div>
              </div>
            </div>
            <div style="background:linear-gradient(180deg,#F3E5F5,#fff);border:1px solid #CE93D8;border-radius:8px;padding:8px 10px;">
              <div style="font-size:0.76rem;font-weight:700;color:#6A1B9A;margin-bottom:4px;">🍂 衰退期（25年+）</div>
              <div style="font-size:0.7rem;color:#555;line-height:1.65;">
                果味消退、三層香氣主導、酒體輕盈、顏色褐化
                <div style="margin-top:4px;background:#F3E5F5;border-radius:4px;padding:3px 6px;font-size:0.67rem;color:#6A1B9A;">需謹慎評估是否已過巔峰</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    `
  },

  {
    type: 'content',
    title: '不同等級的陳年潛力',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          波爾多酒款的陳年潛力與<strong>產區、等級、年份</strong>密切相關。<strong>並非所有波爾多酒都適合長期陳年</strong>——從大區AOC的「買來就喝」到一級莊的「50年等待」，差距可達10倍以上。
        </p>

        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:220px 1fr;">
              <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:10px 14px;display:flex;flex-direction:column;justify-content:center;">
                <div style="color:#FFD700;font-weight:900;font-size:0.82rem;">👑 一級莊</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;margin-top:2px;">First Growth</div>
                <div style="color:#fff;font-size:0.75rem;font-weight:700;margin-top:5px;">巔峰期：20–50年</div>
              </div>
              <div style="padding:9px 13px;">
                <div style="font-size:0.72rem;color:#444;line-height:1.75;">
                  <div>⏰ <strong>至少10–15年後</strong>方可開瓶，偉大年份需20年</div>
                  <div>🍷 Latour 2010（2035–2070）、Margaux 2009（2030–2065）</div>
                  <div style="margin-top:4px;font-size:0.69rem;color:#C62828;">適用年份：2009 · 2010 · 2016</div>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:220px 1fr;">
              <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:10px 14px;display:flex;flex-direction:column;justify-content:center;">
                <div style="color:#fff;font-weight:900;font-size:0.82rem;">🥈 列級名莊</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;margin-top:2px;">2ème–5ème Cru</div>
                <div style="color:#fff;font-size:0.75rem;font-weight:700;margin-top:5px;">巔峰期：10–30年</div>
              </div>
              <div style="padding:9px 13px;">
                <div style="font-size:0.72rem;color:#444;line-height:1.75;">
                  <div>⏰ <strong>5–10年後</strong>進入適飲期，可提早享受</div>
                  <div>🍷 Lynch-Bages 2016（2026–2046）、Palmer 2015（2025–2045）</div>
                  <div style="margin-top:4px;font-size:0.69rem;color:#1565C0;">適用年份：優秀年份皆可</div>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:220px 1fr;">
              <div style="background:linear-gradient(135deg,#2E7D32,#43A047);padding:10px 14px;display:flex;flex-direction:column;justify-content:center;">
                <div style="color:#fff;font-weight:900;font-size:0.82rem;">🏅 中級莊</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;margin-top:2px;">Cru Bourgeois</div>
                <div style="color:#fff;font-size:0.75rem;font-weight:700;margin-top:5px;">巔峰期：5–15年</div>
              </div>
              <div style="padding:9px 13px;">
                <div style="font-size:0.72rem;color:#444;line-height:1.75;">
                  <div>⏰ <strong>2–5年後</strong>即可飲用，靈活度高</div>
                  <div>🍷 大部分 CB 標誌的 Médoc 酒款</div>
                  <div style="margin-top:4px;font-size:0.69rem;color:#2E7D32;">性價比最高的陳年選擇</div>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:220px 1fr;">
              <div style="background:linear-gradient(135deg,#546E7A,#607D8B);padding:10px 14px;display:flex;flex-direction:column;justify-content:center;">
                <div style="color:#fff;font-weight:900;font-size:0.82rem;">🍾 村莊級/大區AOC</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;margin-top:2px;">Bordeaux / Médoc AOC</div>
                <div style="color:#fff;font-size:0.75rem;font-weight:700;margin-top:5px;">巔峰期：1–5年</div>
              </div>
              <div style="padding:9px 13px;">
                <div style="font-size:0.72rem;color:#444;line-height:1.75;">
                  <div>⏰ <strong>上市即可飲用</strong>，不建議久存</div>
                  <div>🍷 Bordeaux AOC、Médoc AOC 日常款</div>
                  <div style="margin-top:4px;font-size:0.69rem;color:#546E7A;">買來喝，不是買來存</div>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:220px 1fr;">
              <div style="background:linear-gradient(135deg,#880E4F,#AD1457);padding:10px 14px;display:flex;flex-direction:column;justify-content:center;">
                <div style="color:#fff;font-weight:900;font-size:0.82rem;">⛪ 右岸 St-Ém / Pomerol</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;margin-top:2px;">Merlot-dominated</div>
                <div style="color:#fff;font-size:0.75rem;font-weight:700;margin-top:5px;">比左岸早熟 3–5 年</div>
              </div>
              <div style="padding:9px 13px;">
                <div style="font-size:0.72rem;color:#444;line-height:1.75;">
                  <div>⏰ 梅洛主導，單寧柔化更快，<strong>提前進入適飲期</strong></div>
                  <div>🍷 Pétrus 2009（2025–2055）vs. Latour 2009（2030–2065）</div>
                  <div style="margin-top:4px;font-size:0.69rem;color:#880E4F;">同等年份左岸需多等5–10年</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div style="background:linear-gradient(135deg,#fff8e1,#fffde7);border:1px solid #FFD54F;border-radius:9px;padding:9px 13px;font-size:0.73rem;color:#555;line-height:1.7;">
          💡 <strong>核心原則：</strong>陳年潛力 = 單寧結構 ＋ 酸度 ＋ 萃取物濃度。三者均衡才能長壽。<strong>高酒精度不等於高陳年潛力</strong>——2003、2022等炎熱年份酒款陳年表現往往不如平衡年份。
        </div>

      </div>
    `
  },

  {
    type: 'content',
    title: '如何判斷適飲期',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          判斷酒款是否進入適飲期需要從<strong>五個感官維度</strong>綜合評估。同一款酒在不同階段會呈現截然不同的樣貌——掌握這些指標，才能做出精準的開瓶時機判斷。
        </p>

        <div style="background:#fff;border-radius:10px;border:1px solid #e0e0e0;overflow:hidden;margin-bottom:13px;">
          <div style="background:linear-gradient(90deg,#37474F,#546E7A);padding:7px 14px;display:grid;grid-template-columns:70px 1fr 1fr 1fr 130px;gap:6px;align-items:center;">
            <div style="color:rgba(255,255,255,0.7);font-size:0.68rem;font-weight:700;">感官</div>
            <div style="color:rgba(255,255,255,0.85);font-size:0.68rem;font-weight:700;text-align:center;">🌱 青春期（0–5年）</div>
            <div style="color:#A5D6A7;font-size:0.68rem;font-weight:700;text-align:center;">🌟 適飲巔峰（5–25年）</div>
            <div style="color:rgba(255,255,255,0.7);font-size:0.68rem;font-weight:700;text-align:center;">🍂 衰退期（25年+）</div>
            <div style="color:rgba(255,255,255,0.7);font-size:0.68rem;font-weight:700;text-align:center;">品鑑技巧</div>
          </div>
          <div style="font-size:0.71rem;">
            <div style="display:grid;grid-template-columns:70px 1fr 1fr 1fr 130px;gap:6px;padding:7px 14px;border-bottom:1px solid #f5f5f5;align-items:start;background:#fff;">
              <div style="font-weight:700;color:#333;">🎨 顏色</div>
              <div style="color:#666;line-height:1.5;">深紫紅、不透明</div>
              <div style="color:#2E7D32;font-weight:600;line-height:1.5;">寶石紅、邊緣磚紅、清澈</div>
              <div style="color:#999;line-height:1.5;">橙褐色、透明度高</div>
              <div style="color:#1565C0;font-size:0.67rem;line-height:1.5;">傾斜杯45°觀察邊緣帶</div>
            </div>
            <div style="display:grid;grid-template-columns:70px 1fr 1fr 1fr 130px;gap:6px;padding:7px 14px;border-bottom:1px solid #f5f5f5;align-items:start;background:#FAFAFA;">
              <div style="font-weight:700;color:#333;">👃 香氣</div>
              <div style="color:#666;line-height:1.5;">新鮮黑果、橡木、封閉</div>
              <div style="color:#2E7D32;font-weight:600;line-height:1.5;">果味＋雪松、皮革、煙草、松露</div>
              <div style="color:#999;line-height:1.5;">森林地面、醬油、乾燥花、蘑菇</div>
              <div style="color:#1565C0;font-size:0.67rem;line-height:1.5;">靜置10分鐘觀察演變</div>
            </div>
            <div style="display:grid;grid-template-columns:70px 1fr 1fr 1fr 130px;gap:6px;padding:7px 14px;border-bottom:1px solid #f5f5f5;align-items:start;background:#fff;">
              <div style="font-weight:700;color:#333;">🌰 單寧</div>
              <div style="color:#666;line-height:1.5;">緊緻、收斂、口腔乾澀</div>
              <div style="color:#2E7D32;font-weight:600;line-height:1.5;">柔化有結構、絲滑質感</div>
              <div style="color:#999;line-height:1.5;">完全融合、幾乎感受不到</div>
              <div style="color:#1565C0;font-size:0.67rem;line-height:1.5;">關注吞嚥後的收斂感</div>
            </div>
            <div style="display:grid;grid-template-columns:70px 1fr 1fr 1fr 130px;gap:6px;padding:7px 14px;border-bottom:1px solid #f5f5f5;align-items:start;background:#FAFAFA;">
              <div style="font-weight:700;color:#333;">🍋 酸度</div>
              <div style="color:#666;line-height:1.5;">明快、有時尖銳</div>
              <div style="color:#2E7D32;font-weight:600;line-height:1.5;">平衡、帶來新鮮活力感</div>
              <div style="color:#999;line-height:1.5;">柔和，有時顯得疲軟</div>
              <div style="color:#1565C0;font-size:0.67rem;line-height:1.5;">觀察口腔兩側刺激感</div>
            </div>
            <div style="display:grid;grid-template-columns:70px 1fr 1fr 1fr 130px;gap:6px;padding:7px 14px;align-items:start;background:#fff;">
              <div style="font-weight:700;color:#333;">⏳ 餘韻</div>
              <div style="color:#666;line-height:1.5;">強勁但單一</div>
              <div style="color:#2E7D32;font-weight:600;line-height:1.5;">悠長複雜、層次豐富</div>
              <div style="color:#999;line-height:1.5;">變短、細膩但力度減弱</div>
              <div style="color:#1565C0;font-size:0.67rem;line-height:1.5;">計時餘韻（頂級酒 &gt;60秒）</div>
            </div>
          </div>
        </div>

        <div style="background:#fff;border-radius:10px;border:1px solid #e0e0e0;padding:10px 14px;">
          <div style="font-weight:700;color:#333;font-size:0.79rem;margin-bottom:8px;">💼 侍酒師實戰建議</div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            <div style="display:flex;gap:8px;align-items:flex-start;">
              <span style="background:#E8F5E9;border-radius:50%;min-width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:0.72rem;">1</span>
              <div style="font-size:0.73rem;color:#444;line-height:1.65;">購買至少<strong>2瓶</strong>：一瓶早開（5年）測試發展曲線，一瓶留至巔峰期（15年）享受完整複雜度</div>
            </div>
            <div style="display:flex;gap:8px;align-items:flex-start;">
              <span style="background:#E3F2FD;border-radius:50%;min-width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:0.72rem;">2</span>
              <div style="font-size:0.73rem;color:#444;line-height:1.65;">參考 Wine Advocate、Decanter 的<strong>適飲期預測視窗</strong>，作為開瓶時機參考</div>
            </div>
            <div style="display:flex;gap:8px;align-items:flex-start;">
              <span style="background:#FFF3E0;border-radius:50%;min-width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:0.72rem;">3</span>
              <div style="font-size:0.73rem;color:#444;line-height:1.65;">當懷疑時，<strong>寧可早開不要晚開</strong>——過巔峰的酒無法挽回，略早開可醒酒補救</div>
            </div>
            <div style="display:flex;gap:8px;align-items:flex-start;">
              <span style="background:#FCE4EC;border-radius:50%;min-width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:0.72rem;">4</span>
              <div style="font-size:0.73rem;color:#444;line-height:1.65;">陳年酒需要<strong>更長醒酒時間</strong>（2–4小時，甚至提前一天換瓶解碼沉澱物）</div>
            </div>
          </div>
        </div>

      </div>
    `
  },
  // 第三章知識檢測
  {
    type: 'interactive-quiz',
    title: '知識檢測：陳年的科學與藝術',
    questions: [
      {
        question: '葡萄酒陳年過程中哪種化學變化使單寧從澀口變得柔順？',
        options: [
          '酸化反應',
          '單寧聚合反應',
          '酸化作用',
          '發酵過程'
        ],
        correct: 1,
        explanation: '單寧分子相互結合形成長鏈聚合物，體積變大後沉淀形成酒渣。這使得酒款從年輕時的澀口變得柔順絲滑，通常在5-15年達到最佳平衡。'
      },
      {
        question: '波爾多一級莊在偉大年份（2009、2010、2016）的適飲期通常是？',
        options: [
          '5-10年',
          '10-15年',
          '20-50年',
          '2-5年'
        ],
        correct: 2,
        explanation: '一級莊在偉大年份的適飲期高達20-50年，至少需要10-15年才可開瓶。例如Château Latour 2010的適飲期為2035-2070年。這些酒款需要時間讓單寧柔化、複雜度發展。'
      }
    ]
  },
  // ========== 第四章：儲存的科學 ==========
  {
    type: 'chapter-divider',
    chapter: '4',
    title: '葡萄酒儲存的科學',
    subtitle: '保護您的投資',
    icon: '🏛️',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  {
    type: 'content',
    title: '理想儲存條件',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          葡萄酒儲存需要嚴格控制六大環境條件——任何偏差都可能<strong>加速老化或永久損害</strong>酒款。理解每個因素的影響機制，才能有效保護您的收藏。
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:9px;margin-bottom:12px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#B71C1C,#E53935);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.2rem;">🌡️</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">溫度</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:4px;">✅ 理想：12–14°C（恆溫最重要）</div>
              <div style="font-size:0.7rem;color:#666;margin-bottom:5px;line-height:1.6;">可接受範圍：10–16°C</div>
              <div style="background:#FFEBEE;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#C62828;line-height:1.55;">
                ⚠️ &gt;20°C 加速老化；高8°C 則老化速度翻倍
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#0277BD,#0288D1);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.2rem;">💧</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">濕度</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:4px;">✅ 理想：60–75%</div>
              <div style="font-size:0.7rem;color:#666;margin-bottom:5px;line-height:1.6;">可接受範圍：55–80%</div>
              <div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#01579B;line-height:1.55;">
                ⚠️ &lt;50% 軟木塞乾裂漏氣；&gt;80% 標籤發霉
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#E65100,#FB8C00);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.2rem;">🔅</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">光線</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:4px;">✅ 理想：完全黑暗</div>
              <div style="font-size:0.7rem;color:#666;margin-bottom:5px;line-height:1.6;">可接受：微弱間接光線</div>
              <div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#BF360C;line-height:1.55;">
                ⚠️ UV 紫外線產生「光氧化味」，白酒與淺色瓶首當其衝
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#4527A0,#5E35B1);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.2rem;">📳</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">震動</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:4px;">✅ 理想：絕對靜止</div>
              <div style="font-size:0.7rem;color:#666;margin-bottom:5px;line-height:1.6;">可接受：偶爾移動</div>
              <div style="background:#EDE7F6;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#311B92;line-height:1.55;">
                ⚠️ 持續震動擾亂陳年、加速氧化；遠離洗衣機
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#1B5E20,#388E3C);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.2rem;">🍾</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">擺放方式</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:4px;">✅ 理想：橫放（保持軟木塞濕潤）</div>
              <div style="font-size:0.7rem;color:#666;margin-bottom:5px;line-height:1.6;">可接受：斜放</div>
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#1B5E20;line-height:1.55;">
                ⚠️ 短期（&lt;1年）直立可接受，長期必須橫放
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#006064,#00838F);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.2rem;">🌬️</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">空氣品質</div>
            </div>
            <div style="padding:9px 12px 11px;">
              <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:4px;">✅ 理想：無異味、通風良好</div>
              <div style="font-size:0.7rem;color:#666;margin-bottom:5px;line-height:1.6;">可接受：乾淨空氣</div>
              <div style="background:#E0F7FA;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#004D61;line-height:1.55;">
                ⚠️ 軟木塞會呼吸，油漆/化學品氣味可滲入酒中
              </div>
            </div>
          </div>

        </div>

        <div style="background:linear-gradient(135deg,#fff8e1,#fffde7);border:1px solid #FFD54F;border-radius:9px;padding:8px 13px;font-size:0.73rem;color:#555;line-height:1.7;">
          💡 <strong>記憶口訣：</strong>溫恆濕足光線暗、靜置橫放無異味——六字原則掌握，葡萄酒才能安心陳年。
        </div>

      </div>
    `
  },

  {
    type: 'content',
    title: '家庭儲存方案',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          依預算選擇最適合的儲存方式。<strong>沒有完美方案，只有最適合當下情況的選擇</strong>——關鍵是了解各方案的限制，避免超出其保護能力存放高價酒款。
        </p>

        <div style="display:flex;flex-direction:column;gap:9px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:160px 1fr;">
              <div style="background:linear-gradient(135deg,#546E7A,#78909C);padding:10px 13px;display:flex;flex-direction:column;justify-content:center;">
                <div style="color:#fff;font-weight:700;font-size:0.78rem;">💰 低預算</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.67rem;margin-top:2px;">&lt; 2萬台幣</div>
                <div style="margin-top:6px;background:rgba(255,255,255,0.15);border-radius:8px;padding:2px 7px;color:#fff;font-size:0.67rem;">短期 &lt;2年</div>
              </div>
              <div style="padding:9px 13px;">
                <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:5px;">利用家中最涼爽陰暗處（地下室、衣櫃底層）</div>
                <div style="display:flex;gap:6px;flex-wrap:wrap;font-size:0.68rem;">
                  <span style="background:#E8F5E9;color:#2E7D32;border-radius:10px;padding:2px 8px;">✅ 成本低</span>
                  <span style="background:#FFEBEE;color:#C62828;border-radius:10px;padding:2px 8px;">❌ 溫濕度不穩</span>
                </div>
                <div style="margin-top:6px;display:flex;gap:4px;flex-wrap:wrap;">
                  <span style="background:#F5F5F5;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#555;">🧭 選房屋北側一樓</span>
                  <span style="background:#F5F5F5;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#555;">🌡️ 放溫濕度計監控</span>
                  <span style="background:#F5F5F5;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#555;">📌 僅存近期飲用款</span>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:160px 1fr;">
              <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:10px 13px;display:flex;flex-direction:column;justify-content:center;">
                <div style="color:#fff;font-weight:700;font-size:0.78rem;">💰💰 中預算</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.67rem;margin-top:2px;">2–10萬台幣</div>
                <div style="margin-top:6px;background:rgba(255,255,255,0.15);border-radius:8px;padding:2px 7px;color:#fff;font-size:0.67rem;">30–100瓶酒櫃</div>
              </div>
              <div style="padding:9px 13px;">
                <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:5px;">購買小型專業酒櫃（壓縮機式）</div>
                <div style="display:flex;gap:6px;flex-wrap:wrap;font-size:0.68rem;">
                  <span style="background:#E8F5E9;color:#2E7D32;border-radius:10px;padding:2px 8px;">✅ 恆溫恆濕</span>
                  <span style="background:#FFEBEE;color:#C62828;border-radius:10px;padding:2px 8px;">❌ 電費＋容量有限</span>
                </div>
                <div style="margin-top:6px;display:flex;gap:4px;flex-wrap:wrap;">
                  <span style="background:#E3F2FD;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#1565C0;">🔧 壓縮機式優於熱電式</span>
                  <span style="background:#E3F2FD;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#1565C0;">🪟 可貼UV隔熱膜</span>
                  <span style="background:#E3F2FD;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#1565C0;">🏷️ EuroCave / Liebherr</span>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:160px 1fr;">
              <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:10px 13px;display:flex;flex-direction:column;justify-content:center;">
                <div style="color:#FFD700;font-weight:700;font-size:0.78rem;">💰💰💰 高預算</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.67rem;margin-top:2px;">10萬+ 台幣</div>
                <div style="margin-top:6px;background:rgba(255,255,255,0.15);border-radius:8px;padding:2px 7px;color:#fff;font-size:0.67rem;">長期陳年首選</div>
              </div>
              <div style="padding:9px 13px;">
                <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:5px;">大型酒櫃或改建專屬恆溫酒窖</div>
                <div style="display:flex;gap:6px;flex-wrap:wrap;font-size:0.68rem;">
                  <span style="background:#E8F5E9;color:#2E7D32;border-radius:10px;padding:2px 8px;">✅ 完美儲存條件</span>
                  <span style="background:#FFEBEE;color:#C62828;border-radius:10px;padding:2px 8px;">❌ 成本高＋佔空間</span>
                </div>
                <div style="margin-top:6px;display:flex;gap:4px;flex-wrap:wrap;">
                  <span style="background:#FFEBEE;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#B71C1C;">🏛️ 專業隔熱＋恆溫系統</span>
                  <span style="background:#FFEBEE;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#B71C1C;">📊 考慮分區（紅/白/甜）</span>
                  <span style="background:#FFEBEE;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#B71C1C;">🔒 安裝監控保險</span>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:160px 1fr;">
              <div style="background:linear-gradient(135deg,#4527A0,#6A1B9A);padding:10px 13px;display:flex;flex-direction:column;justify-content:center;">
                <div style="color:#fff;font-weight:700;font-size:0.78rem;">🏢 替代方案</div>
                <div style="color:rgba(255,255,255,0.85);font-size:0.67rem;margin-top:2px;">酒窖租賃服務</div>
                <div style="margin-top:6px;background:rgba(255,255,255,0.15);border-radius:8px;padding:2px 7px;color:#fff;font-size:0.67rem;">適合投資型收藏</div>
              </div>
              <div style="padding:9px 13px;">
                <div style="font-size:0.73rem;color:#333;font-weight:600;margin-bottom:5px;">委託波爾多、香港、倫敦等地專業酒窖代管</div>
                <div style="display:flex;gap:6px;flex-wrap:wrap;font-size:0.68rem;">
                  <span style="background:#E8F5E9;color:#2E7D32;border-radius:10px;padding:2px 8px;">✅ 專業管理＋保險</span>
                  <span style="background:#FFEBEE;color:#C62828;border-radius:10px;padding:2px 8px;">❌ 月租費＋取酒不便</span>
                </div>
                <div style="margin-top:6px;display:flex;gap:4px;flex-wrap:wrap;">
                  <span style="background:#EDE7F6;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#4527A0;">📋 確認保險涵蓋範圍</span>
                  <span style="background:#EDE7F6;border-radius:8px;padding:2px 7px;font-size:0.67rem;color:#4527A0;">💸 留意提取費與時效</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '常見儲存錯誤',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          許多愛好者在不知情下<strong>每天都在損害自己的酒款</strong>。以下六大陷阱在家庭儲存中極為常見——對照檢查，立即補救！
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:9px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#BF360C,#E64A19);padding:7px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1rem;">🍳</span>
              <div style="color:#fff;font-weight:700;font-size:0.79rem;">放在廚房頂櫃</div>
            </div>
            <div style="padding:8px 12px 10px;">
              <div style="font-size:0.7rem;color:#555;line-height:1.65;margin-bottom:5px;">
                溫度高（熱空氣上升）、震動多（抽油煙機）、異味重
              </div>
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#2E7D32;">✅ 立即移至陰涼處</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#0D47A1,#1565C0);padding:7px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1rem;">🧊</span>
              <div style="color:#fff;font-weight:700;font-size:0.79rem;">冰箱長期儲存</div>
            </div>
            <div style="padding:8px 12px 10px;">
              <div style="font-size:0.7rem;color:#555;line-height:1.65;margin-bottom:5px;">
                溫度過低、震動大、濕度不足且食物異味干擾
              </div>
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#2E7D32;">✅ 僅用於飲用前短期冰鎮（1–2天）</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#E65100,#FF8F00);padding:7px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1rem;">🌞</span>
              <div style="color:#fff;font-weight:700;font-size:0.79rem;">陽台／窗邊</div>
            </div>
            <div style="padding:8px 12px 10px;">
              <div style="font-size:0.7rem;color:#555;line-height:1.65;margin-bottom:5px;">
                溫差大、日曬直射、UV紫外線持續破壞酒中化合物
              </div>
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#2E7D32;">✅ 改至室內陰暗處</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#1B5E20,#388E3C);padding:7px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1rem;">🍾</span>
              <div style="color:#fff;font-weight:700;font-size:0.79rem;">直立存放多年</div>
            </div>
            <div style="padding:8px 12px 10px;">
              <div style="font-size:0.7rem;color:#555;line-height:1.65;margin-bottom:5px;">
                軟木塞乾裂導致漏氣，酒款快速氧化，無法挽回
              </div>
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#2E7D32;">✅ 必須橫放；空間不足可斜放</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#4527A0,#5E35B1);padding:7px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1rem;">🔍</span>
              <div style="color:#fff;font-weight:700;font-size:0.79rem;">頻繁移動查看</div>
            </div>
            <div style="padding:8px 12px 10px;">
              <div style="font-size:0.7rem;color:#555;line-height:1.65;margin-bottom:5px;">
                反覆震動擾亂陳年過程，加速單寧聚合與氧化
              </div>
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#2E7D32;">✅ 建立清單標記位置，減少移動</div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#37474F,#546E7A);padding:7px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1rem;">📦</span>
              <div style="color:#fff;font-weight:700;font-size:0.79rem;">與雜物混放</div>
            </div>
            <div style="padding:8px 12px 10px;">
              <div style="font-size:0.7rem;color:#555;line-height:1.65;margin-bottom:5px;">
                油漆、樟腦丸、清潔劑等異味透過軟木塞滲入酒液
              </div>
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 8px;font-size:0.68rem;color:#2E7D32;">✅ 規劃專用空間存放所有酒款</div>
            </div>
          </div>

        </div>

        <div style="background:linear-gradient(135deg,#FFEBEE,#fff);border:1px solid #FFCDD2;border-radius:9px;padding:8px 13px;margin-top:11px;font-size:0.73rem;color:#555;line-height:1.7;">
          ⚡ <strong>緊急自查：</strong>現在家中的酒是否正在遭受以上任何一種傷害？每拖延一天，都是對陳年潛力的消耗。
        </div>

      </div>
    `
  },

  // 第四章知識檢測
  {
    type: 'interactive-quiz',
    title: '知識檢測：葡萄酒儲存的科學',
    questions: [
      {
        question: '葡萄酒儲存的理想溫度範圍是？',
        options: [
          '5-10°C',
          '12-14°C',
          '18-20°C',
          '22-25°C'
        ],
        correct: 1,
        explanation: '理想儲存溫度為12-14°C（恆溫最重要）。10-16°C可接受。溫度每升高8°C，老化速度翻倍。過高（>20°C）會加速老化，過低（<5°C）可能結冰膨脹。'
      },
      {
        question: '最常見的家庭儲存錯誤是？',
        options: [
          '橫放酒瓶',
          '長期放在冰箱或廣房頂櫃',
          '使用酒櫃',
          '避免日光直射'
        ],
        correct: 1,
        explanation: '最常見的錯誤是長期放在冰箱（溫度過低、濕度不足、震動大）或廣房頂櫃（溫度高、震動多、異味重）。這些環境會加速葡萄酒老化或損害品質。'
      }
    ]
  },

  // ========== 第五章：葡萄酒投資策略 ==========
  {
    type: 'chapter-divider',
    chapter: '5',
    title: '葡萄酒投資策略',
    subtitle: '理性看待酒款收藏',
    icon: '💰',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },

  {
    type: 'content',
    title: '葡萄酒投資的基礎知識',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          葡萄酒作為<strong>另類投資（Alternative Investment）</strong>逐漸受到關注，特別是波爾多一級莊在過去30年展現了可觀回報。但葡萄酒投資有其特殊性——理性判斷優缺點是成功的第一步。
        </p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:13px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#1B5E20,#388E3C);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">📈</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">投資優勢</div>
            </div>
            <div style="padding:8px 12px 10px;display:flex;flex-direction:column;gap:5px;">
              <div style="display:flex;gap:7px;align-items:flex-start;font-size:0.72rem;color:#444;line-height:1.55;">
                <span style="color:#2E7D32;font-weight:700;margin-top:1px;">✓</span>
                <div><strong>實物資產</strong>：有內在價值，不會歸零</div>
              </div>
              <div style="display:flex;gap:7px;align-items:flex-start;font-size:0.72rem;color:#444;line-height:1.55;">
                <span style="color:#2E7D32;font-weight:700;margin-top:1px;">✓</span>
                <div><strong>稀缺性</strong>：頂級酒款產量固定，隨消耗而增值</div>
              </div>
              <div style="display:flex;gap:7px;align-items:flex-start;font-size:0.72rem;color:#444;line-height:1.55;">
                <span style="color:#2E7D32;font-weight:700;margin-top:1px;">✓</span>
                <div><strong>抗通膨</strong>：歷史表現優於現金</div>
              </div>
              <div style="display:flex;gap:7px;align-items:flex-start;font-size:0.72rem;color:#444;line-height:1.55;">
                <span style="color:#2E7D32;font-weight:700;margin-top:1px;">✓</span>
                <div><strong>享樂性</strong>：投資失敗也能喝掉</div>
              </div>
              <div style="display:flex;gap:7px;align-items:flex-start;font-size:0.72rem;color:#444;line-height:1.55;">
                <span style="color:#2E7D32;font-weight:700;margin-top:1px;">✓</span>
                <div><strong>社交價值</strong>：高端社交的談資</div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:8px 12px;display:flex;align-items:center;gap:7px;">
              <span style="font-size:1.1rem;">⚠️</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">投資風險</div>
            </div>
            <div style="padding:8px 12px 10px;display:flex;flex-direction:column;gap:5px;">
              <div style="display:flex;gap:7px;align-items:flex-start;font-size:0.72rem;color:#444;line-height:1.55;">
                <span style="color:#C62828;font-weight:700;margin-top:1px;">✗</span>
                <div><strong>流動性差</strong>：變現需時間，手續費高</div>
              </div>
              <div style="display:flex;gap:7px;align-items:flex-start;font-size:0.72rem;color:#444;line-height:1.55;">
                <span style="color:#C62828;font-weight:700;margin-top:1px;">✗</span>
                <div><strong>儲存成本</strong>：專業儲存每年約 2–5%</div>
              </div>
              <div style="display:flex;gap:7px;align-items:flex-start;font-size:0.72rem;color:#444;line-height:1.55;">
                <span style="color:#C62828;font-weight:700;margin-top:1px;">✗</span>
                <div><strong>真偽風險</strong>：假酒氾濫，特別是中國市場</div>
              </div>
              <div style="display:flex;gap:7px;align-items:flex-start;font-size:0.72rem;color:#444;line-height:1.55;">
                <span style="color:#C62828;font-weight:700;margin-top:1px;">✗</span>
                <div><strong>市場波動</strong>：受經濟、品味、評分影響大</div>
              </div>
              <div style="display:flex;gap:7px;align-items:flex-start;font-size:0.72rem;color:#444;line-height:1.55;">
                <span style="color:#C62828;font-weight:700;margin-top:1px;">✗</span>
                <div><strong>損耗風險</strong>：軟木塞污染（TCA）約 2–5%</div>
              </div>
            </div>
          </div>

        </div>

        <div style="background:#fff;border-radius:10px;border:1px solid #e0e0e0;padding:10px 14px;">
          <div style="font-weight:700;color:#333;font-size:0.8rem;margin-bottom:8px;">🏆 投資級酒款必備六條件</div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
            <div style="background:linear-gradient(135deg,#FFF9C4,#FFFDE7);border:1px solid #F9A825;border-radius:7px;padding:7px 9px;font-size:0.71rem;color:#444;line-height:1.6;">
              <div style="font-weight:700;color:#E65100;margin-bottom:2px;">🏛️ 頂級酒莊</div>
              一級莊、右岸 Pétrus / Ausone 等
            </div>
            <div style="background:linear-gradient(135deg,#FFF9C4,#FFFDE7);border:1px solid #F9A825;border-radius:7px;padding:7px 9px;font-size:0.71rem;color:#444;line-height:1.6;">
              <div style="font-weight:700;color:#E65100;margin-bottom:2px;">⭐ 偉大年份</div>
              Parker / Suckling 95+ 分年份
            </div>
            <div style="background:linear-gradient(135deg,#FFF9C4,#FFFDE7);border:1px solid #F9A825;border-radius:7px;padding:7px 9px;font-size:0.71rem;color:#444;line-height:1.6;">
              <div style="font-weight:700;color:#E65100;margin-bottom:2px;">📋 完整來源</div>
              可追溯購入記錄（Provenance）
            </div>
            <div style="background:linear-gradient(135deg,#FFF9C4,#FFFDE7);border:1px solid #F9A825;border-radius:7px;padding:7px 9px;font-size:0.71rem;color:#444;line-height:1.6;">
              <div style="font-weight:700;color:#E65100;margin-bottom:2px;">🏛️ 理想儲存</div>
              專業酒窖保存證明
            </div>
            <div style="background:linear-gradient(135deg,#FFF9C4,#FFFDE7);border:1px solid #F9A825;border-radius:7px;padding:7px 9px;font-size:0.71rem;color:#444;line-height:1.6;">
              <div style="font-weight:700;color:#E65100;margin-bottom:2px;">📦 原裝木箱</div>
              OWC 增值潛力更高
            </div>
            <div style="background:linear-gradient(135deg,#FFF9C4,#FFFDE7);border:1px solid #F9A825;border-radius:7px;padding:7px 9px;font-size:0.71rem;color:#444;line-height:1.6;">
              <div style="font-weight:700;color:#E65100;margin-bottom:2px;">🍾 大瓶裝</div>
              Magnum (1.5L) 陳年更好更稀有
            </div>
          </div>
        </div>

      </div>
    `
  },

  {
    type: 'content',
    title: '投資策略與案例分析',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <div style="display:flex;flex-direction:column;gap:10px;">

          <!-- 長期持有 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:8px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.1rem;">⏳</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">策略一：長期持有</div>
                <div style="color:rgba(255,255,255,0.8);font-size:0.68rem;">購買偉大年份頂級酒莊，持有 10–20 年</div>
              </div>
            </div>
            <div style="padding:9px 14px;">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                <div style="background:#F8F9FA;border-radius:8px;padding:8px 10px;border-left:3px solid #4CAF50;">
                  <div style="font-size:0.72rem;font-weight:700;color:#1B5E20;margin-bottom:4px;">✅ Latour 2009（成功）</div>
                  <div style="font-size:0.69rem;color:#555;line-height:1.65;">
                    買入：€480（2010 期酒）<br>
                    現值：€1,200（2024）<br>
                    年化報酬：<strong style="color:#2E7D32;">8.5%</strong>（扣儲存成本後 ≈7%）
                  </div>
                </div>
                <div style="background:#F8F9FA;border-radius:8px;padding:8px 10px;border-left:3px solid #2196F3;">
                  <div style="font-size:0.72rem;font-weight:700;color:#0D47A1;margin-bottom:4px;">📊 Margaux 2015（穩健）</div>
                  <div style="font-size:0.69rem;color:#555;line-height:1.65;">
                    買入：€420（2016 期酒）<br>
                    現值：€650（2024）<br>
                    年化報酬：<strong style="color:#1565C0;">6.3%</strong>（優秀但不及2009）
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 期酒套利 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#E65100,#FF8F00);padding:8px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.1rem;">🔄</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">策略二：期酒套利（En Primeur）</div>
                <div style="color:rgba(255,255,255,0.8);font-size:0.68rem;">期酒買入、上市後轉售 · ⚠️ 風險較高</div>
              </div>
            </div>
            <div style="padding:9px 14px;">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                <div style="background:#F8F9FA;border-radius:8px;padding:8px 10px;border-left:3px solid #4CAF50;">
                  <div style="font-size:0.72rem;font-weight:700;color:#1B5E20;margin-bottom:4px;">✅ 2016 年份（成功）</div>
                  <div style="font-size:0.69rem;color:#555;line-height:1.65;">
                    2017 期酒購入 → 2019 上市售出<br>
                    <strong style="color:#2E7D32;">漲幅 30–50%</strong><br>
                    關鍵：期酒價格被低估
                  </div>
                </div>
                <div style="background:#F8F9FA;border-radius:8px;padding:8px 10px;border-left:3px solid #F44336;">
                  <div style="font-size:0.72rem;font-weight:700;color:#B71C1C;margin-bottom:4px;">❌ 2018 年份（失敗）</div>
                  <div style="font-size:0.69rem;color:#555;line-height:1.65;">
                    2019 期酒購入 → 2021 上市持平<br>
                    <strong style="color:#C62828;">無利潤空間</strong><br>
                    原因：酒莊定價過高
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 分散投資 -->
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#4527A0,#6A1B9A);padding:8px 14px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.1rem;">🎯</span>
              <div>
                <div style="color:#fff;font-weight:700;font-size:0.82rem;">策略三：分散投資組合</div>
                <div style="color:rgba(255,255,255,0.8);font-size:0.68rem;">同年份多酒莊組合，降低單一酒莊風險</div>
              </div>
            </div>
            <div style="padding:9px 14px;">
              <div style="font-size:0.72rem;color:#444;line-height:1.7;margin-bottom:7px;">
                💡 範例：2016 年份組合 ——
                <span style="background:#EDE7F6;border-radius:8px;padding:1px 7px;font-size:0.68rem;color:#4527A0;">Latour</span>
                <span style="background:#EDE7F6;border-radius:8px;padding:1px 7px;font-size:0.68rem;color:#4527A0;">Margaux</span>
                <span style="background:#EDE7F6;border-radius:8px;padding:1px 7px;font-size:0.68rem;color:#4527A0;">Lynch-Bages</span>
                <span style="background:#EDE7F6;border-radius:8px;padding:1px 7px;font-size:0.68rem;color:#4527A0;">Palmer</span>
                <span style="background:#EDE7F6;border-radius:8px;padding:1px 7px;font-size:0.68rem;color:#4527A0;">Pichon Baron</span>
                各 1 箱
              </div>
              <div style="display:flex;gap:6px;flex-wrap:wrap;font-size:0.68rem;">
                <span style="background:#E8F5E9;color:#2E7D32;border-radius:10px;padding:2px 9px;">✅ 分散單一酒莊風險</span>
                <span style="background:#E8F5E9;color:#2E7D32;border-radius:10px;padding:2px 9px;">✅ 流動性更好</span>
                <span style="background:#E8F5E9;color:#2E7D32;border-radius:10px;padding:2px 9px;">✅ 多樣化品嚐</span>
                <span style="background:#FFF3E0;color:#E65100;border-radius:10px;padding:2px 9px;">💰 門檻約台幣 50–100 萬</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    `
  },

  {
    type: 'content',
    title: '市場動態與風險',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#37474F,#546E7A);padding:8px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">📊 四大價格驅動因素</div>
            </div>
            <div style="padding:8px 12px 10px;display:flex;flex-direction:column;gap:7px;">
              <div style="background:#F8F9FA;border-radius:7px;padding:7px 9px;">
                <div style="font-size:0.72rem;font-weight:700;color:#333;margin-bottom:2px;">⭐ 評論家評分</div>
                <div style="font-size:0.69rem;color:#555;line-height:1.6;">Parker 95+ 分大幅溢價<br><span style="color:#1565C0;">Palmer 93→96分後，漲 40%</span></div>
              </div>
              <div style="background:#F8F9FA;border-radius:7px;padding:7px 9px;">
                <div style="font-size:0.72rem;font-weight:700;color:#333;margin-bottom:2px;">🌏 中國需求</div>
                <div style="font-size:0.69rem;color:#555;line-height:1.6;">2008–2013 暴漲，2014 後大幅回落<br><span style="color:#C62828;">Lafite 2008：€1,200 → 回落至 €700</span></div>
              </div>
              <div style="background:#F8F9FA;border-radius:7px;padding:7px 9px;">
                <div style="font-size:0.72rem;font-weight:700;color:#333;margin-bottom:2px;">💹 經濟環境</div>
                <div style="font-size:0.69rem;color:#555;line-height:1.6;">金融危機、疫情導致需求下降<br><span style="color:#C62828;">2020 疫情期酒普遍下調 10–20%</span></div>
              </div>
              <div style="background:#F8F9FA;border-radius:7px;padding:7px 9px;">
                <div style="font-size:0.72rem;font-weight:700;color:#333;margin-bottom:2px;">🌡️ 氣候變化</div>
                <div style="font-size:0.69rem;color:#555;line-height:1.6;">極端年份增多，影響長期供應預期<br><span style="color:#E65100;">2022–2023 極端高溫引發市場擔憂</span></div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:8px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">🚨 六大風險警示</div>
            </div>
            <div style="padding:8px 12px 10px;display:flex;flex-direction:column;gap:5px;">
              <div style="display:flex;gap:6px;align-items:flex-start;font-size:0.7rem;color:#444;line-height:1.6;">
                <span style="color:#C62828;font-size:0.8rem;margin-top:1px;">▸</span>
                <div><strong>假酒風險</strong>：Lafite、Pétrus等名莊尤甚，必須確認來源</div>
              </div>
              <div style="display:flex;gap:6px;align-items:flex-start;font-size:0.7rem;color:#444;line-height:1.6;">
                <span style="color:#C62828;font-size:0.8rem;margin-top:1px;">▸</span>
                <div><strong>軟木塞污染</strong>：TCA 約 2–5% 機率，無法逐瓶檢查</div>
              </div>
              <div style="display:flex;gap:6px;align-items:flex-start;font-size:0.7rem;color:#444;line-height:1.6;">
                <span style="color:#C62828;font-size:0.8rem;margin-top:1px;">▸</span>
                <div><strong>變現困難</strong>：需數週至數月，無法快速止損</div>
              </div>
              <div style="display:flex;gap:6px;align-items:flex-start;font-size:0.7rem;color:#444;line-height:1.6;">
                <span style="color:#C62828;font-size:0.8rem;margin-top:1px;">▸</span>
                <div><strong>稅務問題</strong>：部分國家對葡萄酒收益徵稅</div>
              </div>
              <div style="display:flex;gap:6px;align-items:flex-start;font-size:0.7rem;color:#444;line-height:1.6;">
                <span style="color:#C62828;font-size:0.8rem;margin-top:1px;">▸</span>
                <div><strong>儲存責任</strong>：自行儲存需承擔一切風險</div>
              </div>
              <div style="display:flex;gap:6px;align-items:flex-start;font-size:0.7rem;color:#444;line-height:1.6;">
                <span style="color:#C62828;font-size:0.8rem;margin-top:1px;">▸</span>
                <div><strong>流動性限制</strong>：小眾酒莊或普通年份難以出售</div>
              </div>
            </div>
          </div>

        </div>

        <div style="background:linear-gradient(135deg,#E8F5E9,#F1F8E9);border:1px solid #A5D6A7;border-radius:10px;padding:10px 14px;">
          <div style="font-weight:700;color:#1B5E20;font-size:0.79rem;margin-bottom:8px;">💡 專家七條黃金建議</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;">
            <div style="display:flex;gap:6px;align-items:flex-start;font-size:0.7rem;color:#333;line-height:1.6;">
              <span style="background:#2E7D32;color:#fff;border-radius:50%;min-width:18px;height:18px;display:flex;align-items:center;justify-content:center;font-size:0.62rem;font-weight:700;">1</span>
              <div>僅用<strong>閒置資金的 5–10%</strong>投資葡萄酒</div>
            </div>
            <div style="display:flex;gap:6px;align-items:flex-start;font-size:0.7rem;color:#333;line-height:1.6;">
              <span style="background:#2E7D32;color:#fff;border-radius:50%;min-width:18px;height:18px;display:flex;align-items:center;justify-content:center;font-size:0.62rem;font-weight:700;">2</span>
              <div>優先考慮一級莊 + 偉大年份 + 原裝木箱</div>
            </div>
            <div style="display:flex;gap:6px;align-items:flex-start;font-size:0.7rem;color:#333;line-height:1.6;">
              <span style="background:#2E7D32;color:#fff;border-radius:50%;min-width:18px;height:18px;display:flex;align-items:center;justify-content:center;font-size:0.62rem;font-weight:700;">3</span>
              <div>購買時索取<strong>完整憑證</strong>（發票＋來源證明）</div>
            </div>
            <div style="display:flex;gap:6px;align-items:flex-start;font-size:0.7rem;color:#333;line-height:1.6;">
              <span style="background:#2E7D32;color:#fff;border-radius:50%;min-width:18px;height:18px;display:flex;align-items:center;justify-content:center;font-size:0.62rem;font-weight:700;">4</span>
              <div>使用專業酒窖儲存，保留所有紀錄</div>
            </div>
            <div style="display:flex;gap:6px;align-items:flex-start;font-size:0.7rem;color:#333;line-height:1.6;">
              <span style="background:#2E7D32;color:#fff;border-radius:50%;min-width:18px;height:18px;display:flex;align-items:center;justify-content:center;font-size:0.62rem;font-weight:700;">5</span>
              <div>透過信譽良好的<strong>拍賣行或交易平台</strong>買賣</div>
            </div>
            <div style="display:flex;gap:6px;align-items:flex-start;font-size:0.7rem;color:#333;line-height:1.6;">
              <span style="background:#2E7D32;color:#fff;border-radius:50%;min-width:18px;height:18px;display:flex;align-items:center;justify-content:center;font-size:0.62rem;font-weight:700;">6</span>
              <div>長期持有<strong>至少 10 年</strong>以平滑市場波動</div>
            </div>
            <div style="display:flex;gap:6px;align-items:flex-start;font-size:0.7rem;color:#1B5E20;line-height:1.6;grid-column:span 2;">
              <span style="background:#F9A825;color:#fff;border-radius:50%;min-width:18px;height:18px;display:flex;align-items:center;justify-content:center;font-size:0.62rem;font-weight:700;">7</span>
              <div><strong>記住：投資是附加價值，飲用才是核心樂趣 🍷</strong></div>
            </div>
          </div>
        </div>

      </div>
    `
  },

  // 第五章知識檢測
  {
    type: 'interactive-quiz',
    title: '知識檢測：葡萄酒投資策略',
    questions: [
      {
        question: '投資級酒款必須具備哪些特徵？',
        options: [
          '價格便宜且產量大',
          '頂級酒莊 + 偉大年份 + 完美來源 + 理想儲存',
          '知名度高且市場熱門',
          '任何波爾多酒款'
        ],
        correct: 1,
        explanation: '投資級酒款必須具備：頂級酒莊（一級莊、Pétrus/Ausone等）、偉大年份（Parker 95+分）、可追溯的購入記錄（provenance）、專業酒窪保存證明，以及原裝木箱。'
      },
      {
        question: '葡萄酒投資的最大風險是？',
        options: [
          '流動性差且有儲存成本',
          '價格每天波動',
          '酒款不好喝',
          '很容易賺錢'
        ],
        correct: 0,
        explanation: '葡萄酒投資的主要風險包括：流動性差（變現需時間、手續費高）、儲存成本（每年2-5%）、真偽風險、市場波動、軟木塞污染（2-5%機率）。專業建議僅用閒置資金的5-10%投資葡萄酒。'
      }
    ]
  },

  // ========== 課程總結 ==========
  {
    type: 'chapter-divider',
    chapter: '總結',
    title: '時間的藝術與智慧',
    subtitle: '從年份到陳年的完整視角',
    icon: '🎓',
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },

  {
    type: 'content',
    title: '核心要點回顧',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">

        <p style="font-size:0.77rem;color:#555;margin:0 0 12px;line-height:1.65;">
          五個章節走完，讓我們用<strong>四大核心洞見</strong>提煉這趟「時間的藝術」之旅——從年份解讀到陳年科學，從儲存保護到投資智慧。
        </p>

        <div style="display:flex;flex-direction:column;gap:9px;margin-bottom:13px;">

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:44px 1fr;">
              <div style="background:linear-gradient(180deg,#1565C0,#1976D2);display:flex;align-items:center;justify-content:center;font-size:1.3rem;">🌦️</div>
              <div style="padding:8px 13px;">
                <div style="font-size:0.78rem;font-weight:700;color:#1565C0;margin-bottom:4px;">年份分析的三個層次</div>
                <div style="display:flex;flex-direction:column;gap:3px;">
                  <div style="font-size:0.7rem;color:#444;line-height:1.6;display:flex;gap:6px;">
                    <span style="background:#BBDEFB;color:#0D47A1;border-radius:8px;padding:1px 7px;font-size:0.66rem;font-weight:700;white-space:nowrap;">基礎</span>
                    <span>理解氣候與生長期的對應（霜凍、高溫、採收降雨）</span>
                  </div>
                  <div style="font-size:0.7rem;color:#444;line-height:1.6;display:flex;gap:6px;">
                    <span style="background:#BBDEFB;color:#0D47A1;border-radius:8px;padding:1px 7px;font-size:0.66rem;font-weight:700;white-space:nowrap;">進階</span>
                    <span>區分左岸／右岸、紅酒／甜酒的年份差異</span>
                  </div>
                  <div style="font-size:0.7rem;color:#444;line-height:1.6;display:flex;gap:6px;">
                    <span style="background:#0D47A1;color:#fff;border-radius:8px;padding:1px 7px;font-size:0.66rem;font-weight:700;white-space:nowrap;">專業</span>
                    <span>結合酒莊風土、釀酒理念評估具體酒款</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:44px 1fr;">
              <div style="background:linear-gradient(180deg,#2E7D32,#388E3C);display:flex;align-items:center;justify-content:center;font-size:1.3rem;">⌛</div>
              <div style="padding:8px 13px;">
                <div style="font-size:0.78rem;font-weight:700;color:#2E7D32;margin-bottom:4px;">陳年的平衡藝術</div>
                <div style="font-size:0.7rem;color:#444;line-height:1.7;margin-bottom:6px;">
                  陳年<strong>不是越久越好</strong>，而是找到酒款的最佳適飲期。一級莊的 30 年潛力與村莊級的 3 年適飲期都是合理的，關鍵是理解<strong>發展曲線</strong>。
                </div>
                <div style="display:flex;gap:7px;flex-wrap:wrap;">
                  <div style="background:#FFEBEE;border-radius:7px;padding:4px 9px;font-size:0.68rem;color:#C62828;line-height:1.55;">
                    ⚠️ 巔峰後才開瓶＝最昂貴的錯誤
                  </div>
                  <div style="background:#E8F5E9;border-radius:7px;padding:4px 9px;font-size:0.68rem;color:#2E7D32;line-height:1.55;">
                    💡 過早開瓶＝錯失複雜度，可惜但可彌補
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:44px 1fr;">
              <div style="background:linear-gradient(180deg,#4527A0,#5E35B1);display:flex;align-items:center;justify-content:center;font-size:1.3rem;">🏛️</div>
              <div style="padding:8px 13px;">
                <div style="font-size:0.78rem;font-weight:700;color:#4527A0;margin-bottom:4px;">儲存的重要性</div>
                <div style="font-size:0.7rem;color:#444;line-height:1.7;">
                  完美的年份、珍貴的酒款，儲存不當則<strong>數年心血付諸東流</strong>。
                  <span style="background:#EDE7F6;border-radius:6px;padding:1px 7px;color:#4527A0;font-weight:600;">溫度 12–14°C</span>
                  <span style="background:#EDE7F6;border-radius:6px;padding:1px 7px;color:#4527A0;font-weight:600;">濕度 60–75%</span>
                  <span style="background:#EDE7F6;border-radius:6px;padding:1px 7px;color:#4527A0;font-weight:600;">完全黑暗</span>
                  <span style="background:#EDE7F6;border-radius:6px;padding:1px 7px;color:#4527A0;font-weight:600;">橫放靜止</span>
                  ——專業儲存是對投資的保護，不是奢侈。
                </div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="display:grid;grid-template-columns:44px 1fr;">
              <div style="background:linear-gradient(180deg,#E65100,#FF8F00);display:flex;align-items:center;justify-content:center;font-size:1.3rem;">💰</div>
              <div style="padding:8px 13px;">
                <div style="font-size:0.78rem;font-weight:700;color:#E65100;margin-bottom:4px;">投資的理性視角</div>
                <div style="font-size:0.7rem;color:#444;line-height:1.7;">
                  葡萄酒可以是投資工具，但<strong>更應該是生活享受</strong>。不要為了投資忘記飲用的樂趣，也不要盲目追高承受過度風險。
                </div>
                <div style="margin-top:5px;background:linear-gradient(135deg,#FFF8E1,#FFFDE7);border:1px solid #FFD54F;border-radius:7px;padding:5px 10px;font-size:0.7rem;color:#E65100;font-weight:600;">
                  🌟 最好的投資＝買你願意喝的酒
                </div>
              </div>
            </div>
          </div>

        </div>

        <div style="background:linear-gradient(135deg,#FCE4EC,#fff);border:1px solid #F48FB1;border-radius:10px;padding:10px 14px;font-size:0.73rem;color:#555;line-height:1.75;text-align:center;">
          🎓 <strong style="color:#880E4F;">年份是天賦，陳年是修煉，儲存是保護。</strong><br>
          理解年份知道何時買，掌握陳年知道何時喝，學會儲存保護這份等待。<br>
          <span style="color:#888;font-size:0.68rem;">時間會給予用心對待每一瓶酒的人最豐厚的回報。</span>
        </div>

      </div>
    `
  },

  // 第六章知識檢測
  {
    type: 'interactive-quiz',
    title: '知識檢測：時間的藝術與智慧',
    questions: [
      {
        question: '如何判斷一瓶葡萄酒是否進入適飲期？',
        options: [
          '只看年份',
          '綜合考量顏色、香氣、單寧、酸度和餘韻等指標',
          '只看價格',
          '跟隨大眾評價'
        ],
        correct: 1,
        explanation: '判斷適飲期需綜合考量：顏色（寶石紅、邊緣磚紅色）、香氣（果味與陳年香氣融合）、單寧（柔化但仍有結構）、酸度（平衡有新鮮感）、餘韻（悅長複雜）。'
      },
      {
        question: '陳年過程中的三個階段是？',
        options: [
          '發酵期、成熟期、衰退期',
          '青春期、適飲期、衰退期',
          '生長期、工作期、退休期',
          '早期、中期、晚期'
        ],
        correct: 1,
        explanation: '陳年的三個階段：青春期（0-5年，果味主導、單寧緊綻）、適飲期（5-25年，單寧柔化、果味與陳年香氣平衡、複雜度達到巅峰）、衰退期（25年+，果味消退、三層香氣主導）。'
      }
    ]
  },

  // 結束頁
  {
    type: 'end',
    title: '課程完成',
    achievement: 'L3-12 波爾多葡萄酒的年份分析與陳年潛力',
    description: '恭喜您掌握了波爾多葡萄酒年份分析與陳年潛力的專業知識！從氣候指標到偉大年份解析，從陳年化學到儲存技巧，再到投資策略，您已具備全面評估酒款長期價值的能力。',
    skills: [
      '掌握年份評估的氣候指標與關鍵生長期',
      '理解左岸/右岸、紅酒/甜酒的年份差異',
      '熟悉21世紀偉大年份（2000-2022）的特徵',
      '掌握陳年化學過程與適飲期判斷',
      '理解專業儲存的六大要素與家庭方案',
      '具備葡萄酒投資的基礎知識與風險意識'
    ],
    nextSteps: [
      {
        action: '實踐應用',
        items: [
          '建立個人酒窖清單，標記購入年份、預期適飲期',
          '品鑑不同年齡的同款酒，親身體驗陳年演變',
          '檢查家中儲存環境，必要時改善或購置酒櫃',
          '追蹤最新年份的評論家評分與期酒價格'
        ]
      },
      {
        action: '繼續學習',
        items: [
          '進入L3-13：波爾多葡萄酒的創新與未來',
          '訂閱Wine Advocate、Decanter等專業媒體',
          '參加年份品鑑會（Vertical Tasting）',
          '訪問專業酒窖或拍賣行，觀摩實際運作'
        ]
      }
    ],
    certificate: '您已獲得本課程學習證明',
    reflection: {
      title: '課程反思',
      questions: [
        '為什麼左岸與右岸在同一年份可能有截然不同的表現？',
        '如果您有50萬預算購買波爾多酒投資，您會選擇哪些酒款與年份？為什麼？',
        '陳年過程中，哪些化學變化導致了單寧的柔化與顏色的演變？',
        '家庭儲存最容易被忽視的問題是什麼？如何改善？'
      ]
    },
    keyInsight: '年份是天賦，陳年是修煉，儲存是保護。一瓶偉大的波爾多葡萄酒從葡萄藤到餐桌的旅程，每個環節都至關重要。理解年份讓我們知道何時買，掌握陳年讓我們知道何時喝，學會儲存讓我們保護這份等待。而投資策略則提醒我們：葡萄酒首先是帶來愉悅的飲品，其次才是資產。當我們用心對待每一瓶酒，時間會給予最豐厚的回報。',
    shareMessage: '我剛完成了Level 3的「波爾多葡萄酒的年份分析與陳年潛力」課程！從2009、2010等偉大年份的氣候解析，到陳年化學與儲存科學，再到投資策略，全面掌握了時間的藝術！📅🍷 #波爾多 #年份分析 #陳年潛力 #葡萄酒投資 #VintageWine'
  }
]

export default l312Content

