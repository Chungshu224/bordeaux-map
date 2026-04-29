// L3-10: 波爾多葡萄酒的配餐藝術
// 掌握專業配餐原則，探索波爾多酒款與各國料理的完美搭配

export const l310Content = [
  // 課程簡介
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          餐酒搭配是葡萄酒文化中最迷人的藝術之一。當波爾多的單寧遇見牛排的油脂，當貴腐甜酒配上鵝肝的豐腴，當老年份的複雜香氣與野味的濃郁風味交織，一個完美的搭配能讓美食與美酒相互提升，創造 1+1>2 的美妙體驗。
        </p>
        <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L3-10/01%20波爾多餐酒搭配指南.svg" alt="波爾多葡萄酒餐酒搭配指南：左右岸紅酒、白酒與甜酒的最佳食物組合" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>

        <p class="intro-context">
          本課程將帶您深入探索配餐的科學原理——單寧如何軟化蛋白質、酸度如何平衡油脂、甜度如何對抗辛香。從波爾多紅酒與法國經典料理的傳統組合，到與中餐、日料、泰菜的創新搭配實驗，我們將系統學習配餐的邏輯與技巧，並掌握設計專業多道式餐酒菜單的原則。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🧪 掌握配餐的科學原理</h4>
            <p>理解單寧、酸度、甜度、酒體、香氣如何與食物產生化學與味覺互動</p>
          </div>

          <div class="point-item">
            <h4>🥩 學習經典搭配邏輯</h4>
            <p>掌握波爾多紅酒與牛排、羊肉、野味的傳統組合原理與實踐技巧</p>
          </div>

          <div class="point-item">
            <h4>🦞 理解白酒甜酒搭配</h4>
            <p>學習波爾多白酒與海鮮、甜酒與鵝肝、乳酪的完美組合方法</p>
          </div>

          <div class="point-item">
            <h4>🍜 探索亞洲料理創新搭配</h4>
            <p>突破傳統，發現波爾多酒款與中餐、日料、泰菜的和諧搭配可能性</p>
          </div>

          <div class="point-item">
            <h4>📋 掌握餐酒菜單設計</h4>
            <p>學習設計多道式餐酒菜單的原則、順序安排與酒款選擇技巧</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠自信地為各種場合設計完美的餐酒搭配，充分展現波爾多葡萄酒的魅力。
        </p>

        <div class="course-info">
          <p><strong>預計學習時間：</strong>35分鐘</p>
          <p><strong>難度等級：</strong>高級專業</p>
        </div>
      </div>
    `,
    icon: '🍽️'
  },

  // ========== 第一章：配餐的科學原理 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '配餐的科學原理',
    subtitle: '理解味覺與化學的互動',
    icon: '🧪',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },

  {
    type: 'content',
    title: '配餐為什麼重要？',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🍽️ 兩大核心策略</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:2px solid #3b82f6;border-radius:12px;padding:14px;">
              <div style="font-size:22px;text-align:center;margin-bottom:6px;">🤝</div>
              <div style="font-size:13px;font-weight:700;color:#1e3a8a;text-align:center;margin-bottom:8px;">互補（Complement）</div>
              <div style="font-size:11px;color:#1d4ed8;line-height:1.7;">
                <div>• 相似的風味相互強化</div>
                <div>• 例：鵝肝 + Sauternes 甜酒</div>
                <div>• 例：生蠔 + 白蘇維濃</div>
                <div style="margin-top:6px;background:#dbeafe;border-radius:6px;padding:5px;font-size:10px;color:#1e40af;font-weight:600;">🔑 相同風格的食酒，風味相乘</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:2px solid #a855f7;border-radius:12px;padding:14px;">
              <div style="font-size:22px;text-align:center;margin-bottom:6px;">⚖️</div>
              <div style="font-size:13px;font-weight:700;color:#581c87;text-align:center;margin-bottom:8px;">對比（Contrast）</div>
              <div style="font-size:11px;color:#7e22ce;line-height:1.7;">
                <div>• 相反特質互相平衡</div>
                <div>• 例：油膩食物 + 高酸度酒</div>
                <div>• 例：辛辣菜餚 + 微甜白酒</div>
                <div style="margin-top:6px;background:#fae8ff;border-radius:6px;padding:5px;font-size:10px;color:#6b21a8;font-weight:600;">🔑 相反特質的食酒，相互制衡</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🧬 配餐的多感官科學基礎</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:10px;padding:10px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">👅</div>
              <div style="font-size:11px;font-weight:700;color:#7c2d12;margin-bottom:5px;">味覺</div>
              <div style="font-size:10px;color:#9a3412;line-height:1.6;">甜・酸・苦・鹹・鮮<br>五種基本味覺互動</div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">👃</div>
              <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:5px;">嗅覺</div>
              <div style="font-size:10px;color:#166534;line-height:1.6;">香氣分子的共鳴<br>果香・花香・土壤・香料</div>
            </div>
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:10px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">🖐️</div>
              <div style="font-size:11px;font-weight:700;color:#1e3a8a;margin-bottom:5px;">觸覺</div>
              <div style="font-size:10px;color:#1d4ed8;line-height:1.6;">質地・溫度・口感<br>絲滑・酥脆・厚重</div>
            </div>
          </div>
        </div>

      </div>
    `,
  },

  {
    type: 'content',
    title: '單寧的配餐作用',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🧪 單寧與蛋白質的化學反應</div>
          <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:12px;padding:14px;margin-bottom:10px;">
            <div style="display:flex;align-items:center;gap:12px;justify-content:center;margin-bottom:10px;">
              <div style="text-align:center;">
                <div style="font-size:28px;">🍷</div>
                <div style="font-size:11px;font-weight:700;color:#be123c;margin-top:3px;">單寧（Tannin）</div>
                <div style="font-size:10px;color:#9f1239;">多酚類化合物<br>產生澀感</div>
              </div>
              <div style="font-size:24px;color:#f43f5e;font-weight:700;">+</div>
              <div style="text-align:center;">
                <div style="font-size:28px;">🥩</div>
                <div style="font-size:11px;font-weight:700;color:#be123c;margin-top:3px;">蛋白質 & 脂肪</div>
                <div style="font-size:10px;color:#9f1239;">紅肉中的<br>天然成分</div>
              </div>
              <div style="font-size:24px;color:#f43f5e;font-weight:700;">→</div>
              <div style="text-align:center;">
                <div style="font-size:28px;">✨</div>
                <div style="font-size:11px;font-weight:700;color:#be123c;margin-top:3px;">完美平衡</div>
                <div style="font-size:10px;color:#9f1239;">澀感軟化<br>油膩被切割</div>
              </div>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:9px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:5px;">✅ 適合搭配（高蛋白質）</div>
              <div style="font-size:10.5px;color:#166534;line-height:1.7;">
                <div>🥩 牛排、羊排 — <strong>天作之合</strong></div>
                <div>🍖 燉牛肉、烤羊腿</div>
                <div>🧀 熟成硬質乳酪</div>
                <div>🦌 野味（鹿肉、野豬）</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:9px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#be123c;margin-bottom:5px;">❌ 避免搭配（低蛋白質）</div>
              <div style="font-size:10.5px;color:#9f1239;line-height:1.7;">
                <div>🐟 魚類 — 產生金屬味、苦澀感</div>
                <div>🦑 海鮮 — 放大不愉快風味</div>
                <div>🥗 清淡沙拉 — 雙方都失色</div>
                <div>🍰 甜點 — 澀感更突出</div>
              </div>
            </div>
          </div>
        </div>

        <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:12px;">
          <div style="font-size:12px;font-weight:700;color:#92400e;margin-bottom:6px;">💡 實例分析：為什麼 Pauillac 配牛排如此經典？</div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">
            <div style="text-align:center;background:rgba(255,255,255,0.6);border-radius:8px;padding:8px;">
              <div style="font-size:16px;">🍷</div>
              <div style="font-size:10.5px;font-weight:700;color:#78350f;margin:3px 0;">Pauillac 紅酒</div>
              <div style="font-size:10px;color:#92400e;">單寧充沛<br>結構強勁<br>Cab. Sauvignon 主導</div>
            </div>
            <div style="text-align:center;display:flex;align-items:center;justify-content:center;font-size:20px;">⚡</div>
            <div style="text-align:center;background:rgba(255,255,255,0.6);border-radius:8px;padding:8px;">
              <div style="font-size:16px;">🥩</div>
              <div style="font-size:10.5px;font-weight:700;color:#78350f;margin:3px 0;">牛排</div>
              <div style="font-size:10px;color:#92400e;">蛋白質豐富<br>脂肪油花<br>鮮美肉汁</div>
            </div>
          </div>
          <div style="margin-top:8px;font-size:10.5px;color:#78350f;text-align:center;background:rgba(255,255,255,0.5);border-radius:6px;padding:6px;">
            蛋白質馴服單寧 → 澀感消失 | 單寧切開油膩 → 口感清爽 | 結果：1+1 > 2 的味覺體驗
          </div>
        </div>

      </div>
    `,
  },

  {
    type: 'content',
    title: '酸度的配餐作用',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🍋 酸度的四大配餐功能</div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
            <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:10px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">🧹</div>
              <div style="font-size:11px;font-weight:700;color:#92400e;margin-bottom:5px;">切割油膩</div>
              <div style="font-size:10px;color:#78350f;line-height:1.5;">炸物・肥肉・奶油醬<br>高酸度清爽口腔</div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">🦪</div>
              <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:5px;">提升鮮味</div>
              <div style="font-size:10px;color:#166534;line-height:1.5;">海鮮・生蠔・白魚<br>酸度放大Umami</div>
            </div>
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:10px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">⚖️</div>
              <div style="font-size:11px;font-weight:700;color:#1e3a8a;margin-bottom:5px;">平衡甜度</div>
              <div style="font-size:10px;color:#1d4ed8;line-height:1.5;">甜食需要更高酸度<br>否則酒顯平淡</div>
            </div>
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:10px;padding:10px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">✨</div>
              <div style="font-size:11px;font-weight:700;color:#581c87;margin-bottom:5px;">增強風味</div>
              <div style="font-size:10px;color:#7e22ce;line-height:1.5;">提升食物層次感<br>讓每口更有活力</div>
            </div>
          </div>
        </div>

        <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:2px solid #16a34a;border-radius:12px;padding:14px;">
          <div style="font-size:12px;font-weight:700;color:#14532d;margin-bottom:10px;">🍾 波爾多白酒的酸度優勢 — Pessac-Léognan</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div>
              <div style="font-size:11px;font-weight:700;color:#166534;margin-bottom:5px;">🍇 白酒特質</div>
              <div style="font-size:10.5px;color:#166534;line-height:1.7;">
                <div>• 白蘇維濃（Sauvignon Blanc）主導</div>
                <div>• 酸度明亮爽脆</div>
                <div>• 柑橘・草本・礦物香氣</div>
                <div>• 酒體適中，清爽宜人</div>
              </div>
            </div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#166534;margin-bottom:5px;">🍽️ 最佳搭配</div>
              <div style="font-size:10.5px;color:#166534;line-height:1.7;">
                <div>🦪 生蠔 → 酸度提升海洋鮮味</div>
                <div>🐟 白魚・比目魚</div>
                <div>🧀 山羊乳酪（Chèvre）</div>
                <div>🥗 清爽沙拉・檸檬料理</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    `,
  },

  {
    type: 'content',
    title: '甜度的配餐作用',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:2px solid #a855f7;border-radius:12px;padding:14px;margin-bottom:14px;text-align:center;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🏆 配餐黃金法則</div>
          <div style="display:flex;align-items:center;justify-content:center;gap:12px;">
            <div style="text-align:center;">
              <div style="font-size:32px;">🍾</div>
              <div style="font-size:13px;font-weight:800;color:#581c87;margin-top:4px;">Wine 甜度</div>
            </div>
            <div style="font-size:36px;font-weight:900;color:#a855f7;">≥</div>
            <div style="text-align:center;">
              <div style="font-size:32px;">🍽️</div>
              <div style="font-size:13px;font-weight:800;color:#581c87;margin-top:4px;">Food 甜度</div>
            </div>
          </div>
          <div style="margin-top:10px;font-size:11px;color:#7e22ce;background:rgba(255,255,255,0.5);border-radius:8px;padding:6px;">
            若酒的甜度低於食物 → 酒顯得酸澀、缺乏果味、令人失望
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🍯 Sauternes 甜白酒的四大搭配場景</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:10px;">
              <div style="display:flex;gap:8px;align-items:start;">
                <div style="font-size:22px;">🥩</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#92400e;margin-bottom:3px;">鵝肝（Foie Gras）</div>
                  <div style="font-size:10px;color:#78350f;line-height:1.5;">油脂豐腴 ↔ 甜度切割油膩<br>甜度又被油脂平衡 → 最完美的雙向互補</div>
                </div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;">
              <div style="display:flex;gap:8px;align-items:start;">
                <div style="font-size:22px;">🧀</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:3px;">藍紋乳酪（Roquefort）</div>
                  <div style="font-size:10px;color:#166534;line-height:1.5;">濃烈鹹味 ↔ 甜度柔化鹹味<br>霉味複雜度 ↔ 貴腐香氣呼應</div>
                </div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:10px;padding:10px;">
              <div style="display:flex;gap:8px;align-items:start;">
                <div style="font-size:22px;">🌶️</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#be123c;margin-bottom:3px;">辛辣料理（泰式咖哩）</div>
                  <div style="font-size:10px;color:#9f1239;line-height:1.5;">辣度刺激 ↔ 甜度緩和辣感<br>冰涼甜白酒 → 創造有趣對比</div>
                </div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:10px;">
              <div style="display:flex;gap:8px;align-items:start;">
                <div style="font-size:22px;">🍰</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#1e3a8a;margin-bottom:3px;">水果甜點（塔・舒芙蕾）</div>
                  <div style="font-size:10px;color:#1d4ed8;line-height:1.5;">甜點甜度高 → 需 Sauternes 等級<br>否則酒顯酸澀、甜點蓋過酒味</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    `,
  },

  {
    type: 'content',
    title: '酒體與質地的配餐',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">

          <div>
            <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">⚖️ 酒體的重量感匹配</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
                <div style="text-align:center;">
                  <div style="font-size:22px;">🥂</div>
                  <div style="font-size:10px;font-weight:700;color:#14532d;margin-top:2px;">輕酒體</div>
                </div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#166534;margin-bottom:3px;">Bordeaux AOC・Entre-Deux-Mers</div>
                  <div style="font-size:10px;color:#166534;line-height:1.5;">🥗 沙拉 &nbsp; 🐟 白魚 &nbsp; 🦪 生蠔<br>清淡料理・素食・輕食</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:10px;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
                <div style="text-align:center;">
                  <div style="font-size:22px;">🍷</div>
                  <div style="font-size:10px;font-weight:700;color:#7c2d12;margin-top:2px;">中酒體</div>
                </div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#9a3412;margin-bottom:3px;">Haut-Médoc・Saint-Émilion村莊級</div>
                  <div style="font-size:10px;color:#9a3412;line-height:1.5;">🍗 烤雞 &nbsp; 🥩 豬肉 &nbsp; 🍄 野菇<br>中等料理・鴨肉・小牛肉</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:10px;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
                <div style="text-align:center;">
                  <div style="font-size:22px;">🍾</div>
                  <div style="font-size:10px;font-weight:700;color:#be123c;margin-top:2px;">重酒體</div>
                </div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#be123c;margin-bottom:3px;">Pauillac 一級莊・Pétrus</div>
                  <div style="font-size:10px;color:#9f1239;line-height:1.5;">🥩 牛排 &nbsp; 🦌 野味 &nbsp; 🐂 骨髓<br>濃厚料理・陳年硬質乳酪</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🎨 質地的和諧搭配</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:9px;padding:10px;">
                <div style="font-size:11px;font-weight:700;color:#581c87;margin-bottom:4px;">🥩 絲滑・細膩質地</div>
                <div style="font-size:10.5px;color:#7e22ce;line-height:1.5;">鵝肝（Foie Gras）→ <strong>Sauternes</strong> 豐潤甜白<br>和牛（A5）→ <strong>Pomerol / Margaux</strong> 天鵝絨單寧<br>菲力牛排 → <strong>Margaux</strong> 優雅絲滑</div>
              </div>
              <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:9px;padding:10px;">
                <div style="font-size:11px;font-weight:700;color:#92400e;margin-bottom:4px;">🍳 酥脆・清爽質地</div>
                <div style="font-size:10.5px;color:#78350f;line-height:1.5;">炸物（天婦羅・薯條）→ <strong>氣泡酒</strong> 顆粒感清爽<br>烤雞腿皮脆 → <strong>中酒體紅酒</strong><br>脆煎鱸魚 → <strong>Graves 白酒</strong> 酸度切脂</div>
              </div>
              <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:9px;padding:10px;">
                <div style="font-size:11px;font-weight:700;color:#1e3a8a;margin-bottom:4px;">🌊 滑順・濃郁質地</div>
                <div style="font-size:10.5px;color:#1d4ed8;line-height:1.5;">奶油龍蝦 → <strong>Haut-Brion Blanc</strong> 豐厚白酒<br>燉牛頰肉 → <strong>St-Émilion 陳年</strong><br>奶油義大利麵 → <strong>橡木桶白酒</strong></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    `,
  },

  // ========== 知識檢測：配餐科學原理 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：配餐科學原理',
    questions: [
      {
        question: '單寧與蛋白質結合的化學反應如何改善配餐體驗？',
        options: [
          '單寧會增加食物的鮮味',
          '蛋白質軟化單寧的澀感，單寧切開肉類的油膩感',
          '單寧與蛋白質會產生苦味',
          '兩者不會發生化學反應'
        ],
        correct: 1,
        explanation: '單寧與蛋白質結合是紅酒配紅肉的科學基礎。食物中的蛋白質能軟化單寧的澀感，而單寧又能切開肉類的油膩感，創造出相互提升的效果。'
      },
      {
        question: '在酒體與食物重量的匹配中，重酒體的Pauillac一級莊最適合搭配什麼類型的食物？',
        options: [
          '清淡的海鮮',
          '烤雞和豬肉',
          '牛排和野味等重食物',
          '沙拉和蔬菜'
        ],
        correct: 2,
        explanation: '根據酒體與食物重量匹配原則，重酒體的Pauillac一級莊適合搭配牛排、野味等重食物，中酒體的Haut-Médoc適合烤雞豬肉，輕酒體的Entre-Deux-Mers適合清淡食物。'
      }
    ]
  },

  // ========== 第二章：波爾多紅酒的經典搭配 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '波爾多紅酒的經典搭配',
    subtitle: '紅酒與紅肉的完美組合',
    icon: '🥩',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },

  {
    type: 'content',
    title: '牛排的完美搭配',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🥩 四大牛排部位 × 最佳酒款</div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
            <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:2px solid #f43f5e;border-radius:12px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#be123c;margin-bottom:4px;">西冷牛排</div>
              <div style="font-size:10px;color:#9f1239;margin-bottom:6px;">Strip Steak</div>
              <div style="font-size:10px;color:#be123c;line-height:1.6;margin-bottom:6px;">肉質緊實・油花適中・炭烤香氣</div>
              <div style="background:#be123c;color:white;border-radius:6px;padding:5px;font-size:9.5px;font-weight:700;text-align:center;">🍷 Pichon Baron<br><span style="font-weight:400;font-size:9px;">Pauillac</span></div>
            </div>
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:2px solid #a855f7;border-radius:12px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#581c87;margin-bottom:4px;">菲力牛排</div>
              <div style="font-size:10px;color:#7e22ce;margin-bottom:6px;">Filet Mignon</div>
              <div style="font-size:10px;color:#7e22ce;line-height:1.6;margin-bottom:6px;">極度細嫩・脂肪少・質地柔軟</div>
              <div style="background:#7e22ce;color:white;border-radius:6px;padding:5px;font-size:9.5px;font-weight:700;text-align:center;">🍷 Château Margaux<br><span style="font-weight:400;font-size:9px;">絲滑單寧・花香</span></div>
            </div>
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:2px solid #f97316;border-radius:12px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#7c2d12;margin-bottom:4px;">肋眼牛排</div>
              <div style="font-size:10px;color:#9a3412;margin-bottom:6px;">Ribeye</div>
              <div style="font-size:10px;color:#9a3412;line-height:1.6;margin-bottom:6px;">油花豐富・風味濃郁・入口香腴</div>
              <div style="background:#c2410c;color:white;border-radius:6px;padding:5px;font-size:9.5px;font-weight:700;text-align:center;">🍷 Château Latour<br><span style="font-weight:400;font-size:9px;">厚重單寧・複雜層次</span></div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:2px solid #22c55e;border-radius:12px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:4px;">T骨牛排</div>
              <div style="font-size:10px;color:#166534;margin-bottom:6px;">T-Bone</div>
              <div style="font-size:10px;color:#166534;line-height:1.6;margin-bottom:6px;">兼具菲力+西冷・力量與優雅</div>
              <div style="background:#15803d;color:white;border-radius:6px;padding:5px;font-size:9.5px;font-weight:700;text-align:center;">🍷 Lynch-Bages<br><span style="font-weight:400;font-size:9px;">果味與結構平衡</span></div>
            </div>
          </div>
        </div>

        <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:12px;padding:12px;">
          <div style="font-size:12px;font-weight:700;color:#92400e;margin-bottom:8px;">🔥 烹調方式影響配酒選擇</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
            <div style="font-size:10.5px;color:#78350f;line-height:1.7;">
              <div>🪵 <strong>炭烤</strong> → 重烘烤橡木桶酒款（煙燻呼應）</div>
              <div>🍷 <strong>紅酒醬</strong> → 同款或同風格酒款</div>
            </div>
            <div style="font-size:10.5px;color:#78350f;line-height:1.7;">
              <div>🌶️ <strong>胡椒醬</strong> → 果味濃郁、平衡辛辣</div>
              <div>🩸 <strong>三分熟</strong> 年輕酒 ｜ <strong>七分熟</strong> 陳年酒</div>
            </div>
          </div>
        </div>

      </div>
    `
  },

  {
    type: 'content',
    title: '羊肉的搭配藝術',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:12px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🐑 三大經典羊肉配酒</div>
          <div style="display:flex;flex-direction:column;gap:8px;">

            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:12px;padding:12px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;">
              <div style="text-align:center;min-width:60px;">
                <div style="font-size:26px;">🍖</div>
                <div style="font-size:9.5px;font-weight:700;color:#7e22ce;margin-top:3px;">香煎羊排</div>
                <div style="font-size:9px;color:#a855f7;">配迷迭香</div>
              </div>
              <div>
                <div style="font-size:12px;font-weight:700;color:#581c87;margin-bottom:4px;">🍷 Château Pétrus (Pomerol)</div>
                <div style="font-size:10.5px;color:#7e22ce;line-height:1.6;">梅洛的圓潤果味 <strong>包裹</strong> 羊肉的膻味，迷迭香草本與Pomerol礦物質呼應。天鵝絨質地與羊排細膩度和諧共舞。</div>
              </div>
            </div>

            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:12px;padding:12px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;">
              <div style="text-align:center;min-width:60px;">
                <div style="font-size:26px;">🍗</div>
                <div style="font-size:9.5px;font-weight:700;color:#7c2d12;margin-top:3px;">烤羊腿</div>
                <div style="font-size:9px;color:#c2410c;">配蒜蓉</div>
              </div>
              <div>
                <div style="font-size:12px;font-weight:700;color:#7c2d12;margin-bottom:4px;">🍷 Château Cheval Blanc (St-Émilion)</div>
                <div style="font-size:10.5px;color:#9a3412;line-height:1.6;">獨特的卡本內弗朗比例（40%）帶來草本、紫羅蘭氣息，與蒜蓉和羊肉和諧共鳴。</div>
              </div>
            </div>

            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:12px;padding:12px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;">
              <div style="text-align:center;min-width:60px;">
                <div style="font-size:26px;">🥘</div>
                <div style="font-size:9.5px;font-weight:700;color:#14532d;margin-top:3px;">燉羊肉</div>
                <div style="font-size:9px;color:#166534;">配紅酒醬</div>
              </div>
              <div>
                <div style="font-size:12px;font-weight:700;color:#14532d;margin-bottom:4px;">🍷 Château Canon (St-Émilion)</div>
                <div style="font-size:10.5px;color:#166534;line-height:1.6;">燉煮羊肉柔軟濃郁，Canon的石灰岩風土礦質感與陳年潛力完美搭配。</div>
              </div>
            </div>

          </div>
        </div>

        <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:10px;">
          <div style="font-size:11px;font-weight:700;color:#92400e;margin-bottom:5px;">🗺️ 地域文化的深厚根基</div>
          <div style="font-size:10.5px;color:#78350f;line-height:1.7;">法國西南部（包括波爾多）傳統上是羊肉產區（如 <strong>Pauillac 羊</strong>），波爾多紅酒與羊肉的搭配源自數百年的飲食文化。右岸梅洛主導的酒款是轉化羊肉膻味的絕佳選擇。</div>
        </div>

      </div>
    `
  },

  {
    type: 'content',
    title: '野味與陳年酒款',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:12px;padding:12px;margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#e0e7ff;margin-bottom:8px;">⏳ 為何野味需要陳年波爾多？</div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">
            <div style="background:rgba(255,255,255,0.1);border-radius:9px;padding:9px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">🫠</div>
              <div style="font-size:10.5px;font-weight:700;color:#c7d2fe;margin-bottom:3px;">單寧柔化</div>
              <div style="font-size:9.5px;color:#a5b4fc;line-height:1.5;">10–20年後<br>澀感消失<br>如天鵝絨</div>
            </div>
            <div style="background:rgba(255,255,255,0.1);border-radius:9px;padding:9px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">🌲</div>
              <div style="font-size:10.5px;font-weight:700;color:#c7d2fe;margin-bottom:3px;">三層香氣</div>
              <div style="font-size:9.5px;color:#a5b4fc;line-height:1.5;">皮革・雪茄盒<br>松露・森林<br>地面氣息</div>
            </div>
            <div style="background:rgba(255,255,255,0.1);border-radius:9px;padding:9px;text-align:center;">
              <div style="font-size:20px;margin-bottom:4px;">🍄</div>
              <div style="font-size:10.5px;font-weight:700;color:#c7d2fe;margin-bottom:3px;">風土呼應</div>
              <div style="font-size:9.5px;color:#a5b4fc;line-height:1.5;">野味的泥土氣息<br>與陳年酒的<br>樹根香完美共鳴</div>
            </div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🦌 三大野味經典搭配</div>
          <div style="display:flex;flex-direction:column;gap:7px;">
            <div style="background:linear-gradient(90deg,#fffbeb,#fef3c7);border-left:4px solid #d97706;border-radius:0 10px 10px 0;padding:10px;">
              <div style="display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:start;">
                <div style="font-size:22px;">🦌</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#78350f;">烤鹿肉配紅酒醬與黑莓</div>
                  <div style="font-size:10px;color:#92400e;margin-top:3px;">陳年15年 Château Pichon Longueville Comtesse de Lalande</div>
                  <div style="font-size:10px;color:#78350f;line-height:1.5;margin-top:2px;">鹿肉緊實、黑莓酸甜、紅酒醬濃郁 → 需要陳年帶來的複雜度與柔化單寧</div>
                </div>
              </div>
            </div>
            <div style="background:linear-gradient(90deg,#f0fdf4,#dcfce7);border-left:4px solid #16a34a;border-radius:0 10px 10px 0;padding:10px;">
              <div style="display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:start;">
                <div style="font-size:22px;">🦆</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#14532d;">紅燒野鴨配橙醬</div>
                  <div style="font-size:10px;color:#166534;margin-top:3px;">陳年10年 Château Ducru-Beaucaillou (Saint-Julien)</div>
                  <div style="font-size:10px;color:#14532d;line-height:1.5;margin-top:2px;">野鴨油脂、橙醬酸甜、肉質韌性 → Saint-Julien的平衡風格完美契合</div>
                </div>
              </div>
            </div>
            <div style="background:linear-gradient(90deg,#fff1f2,#ffe4e6);border-left:4px solid #e11d48;border-radius:0 10px 10px 0;padding:10px;">
              <div style="display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:start;">
                <div style="font-size:22px;">🐗</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#be123c;">野豬肉醬意大利麵</div>
                  <div style="font-size:10px;color:#9f1239;margin-top:3px;">Château Montrose (St-Estèphe)</div>
                  <div style="font-size:10px;color:#be123c;line-height:1.5;margin-top:2px;">野豬肉強勁風味 → 需要St-Estèphe的力量與土壤礦物氣息支撐</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    `
  },

  // ========== 知識檢測：紅酒經典搭配 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：紅酒經典搭配',
    questions: [
      {
        question: 'Pauillac一級莊（如Château Latour）最適合搭配什麼類型的牛排？',
        options: [
          '清淡的魚排',
          '頂級和牛（油花豐富的A5等級）',
          '烤雞胸肉',
          '蔬菜沙拉'
        ],
        correct: 1,
        explanation: 'Pauillac一級莊如Château Latour擁有強勁結構和豐富單寧，最適合搭配油花豐富的頂級和牛（A5等級），油脂能軟化單寧，單寧切開脂肪，達到完美平衡。'
      },
      {
        question: '法式紅酒燉牛肉（Boeuf Bourguignon）的最佳配酒原則是什麼？',
        options: [
          '選擇比烹飪用酒更便宜的酒',
          '選擇與烹飪同款或同風格的酒',
          '選擇白葡萄酒',
          '選擇甜酒'
        ],
        correct: 1,
        explanation: '紅酒燉牛肉的配酒原則是選擇與烹飪同款或同風格的酒。如果用Pomerol燉煮，就搭配Pomerol；這樣可以讓菜餚與酒的風味完美呼應。'
      }
    ]
  },

  // ========== 第三章：波爾多白酒與甜酒搭配 ==========
  {
    type: 'chapter-divider',
    chapter: '3',
    title: '波爾多白酒與甜酒搭配',
    subtitle: '從海鮮到甜點的優雅之選',
    icon: '🦪',
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },

  {
    type: 'content',
    title: '干白酒與海鮮',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🦪 生蠔的絕配 — 高酸度 × 礦質感</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:12px;padding:12px;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                <div style="font-size:24px;">🦪</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#1e3a8a;">Gillardeau 3號生蠔</div>
                  <div style="font-size:9.5px;color:#1d4ed8;">深海鮮甜・海洋礦質感</div>
                </div>
              </div>
              <div style="background:#2563eb;color:white;border-radius:8px;padding:6px;text-align:center;">
                <div style="font-size:10.5px;font-weight:700;">Château Smith Haut Lafitte Blanc</div>
                <div style="font-size:9px;opacity:0.9;margin-top:2px;">檸檬酸度・葡萄柚・礦質感</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:12px;padding:12px;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                <div style="font-size:24px;">🌊</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#14532d;">Marennes-Oléron生蠔</div>
                  <div style="font-size:9.5px;color:#166534;">淡淡榛果味・細膩質地</div>
                </div>
              </div>
              <div style="background:#15803d;color:white;border-radius:8px;padding:6px;text-align:center;">
                <div style="font-size:10.5px;font-weight:700;">Domaine de Chevalier Blanc</div>
                <div style="font-size:9px;opacity:0.9;margin-top:2px;">賽美容比例・堅果氣息呼應</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🐟 白魚與海鮮配對指南</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
            <div style="background:linear-gradient(90deg,#f0f9ff,#e0f2fe);border-left:3px solid #0284c7;border-radius:0 8px 8px 0;padding:8px;">
              <div style="font-size:10.5px;font-weight:700;color:#0c4a6e;">🐠 烤鱸魚</div>
              <div style="font-size:10px;color:#075985;margin-top:3px;">Château Carbonnieux Blanc — 清爽酸度、草本</div>
            </div>
            <div style="background:linear-gradient(90deg,#fff7ed,#ffedd5);border-left:3px solid #ea580c;border-radius:0 8px 8px 0;padding:8px;">
              <div style="font-size:10.5px;font-weight:700;color:#7c2d12;">🦞 奶油龍蝦</div>
              <div style="font-size:10px;color:#9a3412;margin-top:3px;">Château Haut-Brion Blanc — 豐厚酒體、橡木桶</div>
            </div>
            <div style="background:linear-gradient(90deg,#f0fdf4,#dcfce7);border-left:3px solid #16a34a;border-radius:0 8px 8px 0;padding:8px;">
              <div style="font-size:10.5px;font-weight:700;color:#14532d;">🐡 清蒸比目魚</div>
              <div style="font-size:10px;color:#166534;margin-top:3px;">Château Couhins-Lurton — 細膩礦質</div>
            </div>
            <div style="background:linear-gradient(90deg,#fdf4ff,#fae8ff);border-left:3px solid #9333ea;border-radius:0 8px 8px 0;padding:8px;">
              <div style="font-size:10.5px;font-weight:700;color:#581c87;">🐚 扇貝</div>
              <div style="font-size:10px;color:#7e22ce;margin-top:3px;">Clos Floridène Blanc — 果味與礦質平衡</div>
            </div>
          </div>
        </div>

      </div>
    `
  },

  {
    type: 'content',
    title: 'Sauternes的甜蜜藝術',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:2px solid #d97706;border-radius:12px;padding:14px;margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">👑 鵝肝 × Sauternes — 天堂的組合</div>
          <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:12px;align-items:center;margin-bottom:10px;">
            <div style="text-align:center;background:rgba(255,255,255,0.6);border-radius:10px;padding:10px;">
              <div style="font-size:32px;">🥩</div>
              <div style="font-size:11px;font-weight:700;color:#78350f;margin-top:4px;">鵝肝</div>
              <div style="font-size:10px;color:#92400e;margin-top:3px;">豐腴油脂<br>細膩質地</div>
            </div>
            <div style="text-align:center;">
              <div style="font-size:28px;">💑</div>
            </div>
            <div style="text-align:center;background:rgba(255,255,255,0.6);border-radius:10px;padding:10px;">
              <div style="font-size:32px;">🍾</div>
              <div style="font-size:11px;font-weight:700;color:#78350f;margin-top:4px;">Sauternes</div>
              <div style="font-size:10px;color:#92400e;margin-top:3px;">蜂蜜・杏桃乾<br>貴腐複雜度</div>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
            <div style="background:rgba(255,255,255,0.5);border-radius:7px;padding:6px;text-align:center;font-size:10px;color:#78350f;"><strong>甜度</strong><br>切割油脂</div>
            <div style="background:rgba(255,255,255,0.5);border-radius:7px;padding:6px;text-align:center;font-size:10px;color:#78350f;"><strong>酸度</strong><br>保持清爽</div>
            <div style="background:rgba(255,255,255,0.5);border-radius:7px;padding:6px;text-align:center;font-size:10px;color:#78350f;"><strong>貴腐複雜度</strong><br>提升層次</div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🍯 四大配對指南</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:10px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#e0e7ff;margin-bottom:4px;">🧀 Roquefort 藍紋乳酪</div>
              <div style="font-size:9.5px;color:#a5b4fc;line-height:1.5;margin-bottom:5px;">濃烈鹹味 × 甜度柔化，霉味複雜度 × 貴腐香氣呼應</div>
              <div style="background:rgba(255,255,255,0.15);border-radius:6px;padding:4px;font-size:9.5px;color:#c7d2fe;font-weight:600;text-align:center;">Château d'Yquem</div>
            </div>
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:10px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#7c2d12;margin-bottom:4px;">🍎 法式蘋果塔</div>
              <div style="font-size:9.5px;color:#9a3412;line-height:1.5;margin-bottom:5px;">焦糖蘋果甜度 × 蜂蜜烤杏仁風味完美呼應</div>
              <div style="background:#c2410c;color:white;border-radius:6px;padding:4px;font-size:9.5px;font-weight:600;text-align:center;">Château Rieussec</div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:4px;">🍰 水果撻配冰淇淋</div>
              <div style="font-size:9.5px;color:#166534;line-height:1.5;margin-bottom:5px;">水果酸甜 × 熱帶水果、蜂蜜風味和諧共鳴</div>
              <div style="background:#15803d;color:white;border-radius:6px;padding:4px;font-size:9.5px;font-weight:600;text-align:center;">Château Suduiraut</div>
            </div>
            <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:10px;padding:10px;">
              <div style="font-size:11px;font-weight:700;color:#be123c;margin-bottom:4px;">🌶️ 辛辣亞洲料理</div>
              <div style="font-size:9.5px;color:#9f1239;line-height:1.5;margin-bottom:5px;">甜度緩解辛辣，創造東西方味覺對比</div>
              <div style="background:#be123c;color:white;border-radius:6px;padding:4px;font-size:9.5px;font-weight:600;text-align:center;">Château de Fargues</div>
            </div>
          </div>
        </div>

      </div>
    `
  },

  // ========== 知識檢測：白酒與甜酒搭配 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：白酒與甜酒搭配',
    questions: [
      {
        question: 'Pessac-Léognan的干白酒最適合搭配哪種海鮮？',
        options: [
          '生蠔配檸檬',
          '奶油龍蝦（Homard à la crème）',
          '清蒸魚',
          '炸魚薯條'
        ],
        correct: 1,
        explanation: 'Pessac-Léognan的干白酒（如Château Haut-Brion Blanc）擁有飽滿酒體和橡木桶賦予的奶油質地，最適合搭配奶油龍蝦等濃郁醬汁的海鮮料理。'
      },
      {
        question: 'Sauternes甜酒與藍紋起司（Roquefort）搭配的核心原理是什麼？',
        options: [
          '甜度對比鹹度，創造平衡',
          '兩者都是白色的',
          '甜酒能中和起司的辣味',
          '起司能降低酒的甜度'
        ],
        correct: 0,
        explanation: 'Sauternes與Roquefort是經典法式搭配，核心原理是甜度對比鹹度。Sauternes的甜度、酸度與藍紋起司的鹹味、辛辣味形成完美平衡，創造出驚人的和諧。'
      }
    ]
  },

  // ========== 第四章：亞洲料理的創新搭配 ==========
  {
    type: 'chapter-divider',
    chapter: '4',
    title: '亞洲料理的創新搭配',
    subtitle: '跨文化的味覺探索',
    icon: '🥢',
    background: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)'
  },

  {
    type: 'content',
    title: '波爾多酒配中餐',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:10px;padding:10px;margin-bottom:12px;">
          <div style="font-size:12px;font-weight:700;color:#be123c;margin-bottom:6px;">⚡ 中餐配酒的挑戰</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
            <div style="font-size:10px;color:#9f1239;line-height:1.6;"><div>• 醬油、豆瓣醬與單寧可能衝突</div><div>• 高溫炒炸需要果味濃郁的酒款</div></div>
            <div style="font-size:10px;color:#9f1239;line-height:1.6;"><div>• 甜酸平衡需酸度與果味並重</div><div>• 辛辣料理需低單寧、冰鎮酒款</div></div>
          </div>
        </div>

        <div style="font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🥢 五大中餐配酒方案</div>
        <div style="display:flex;flex-direction:column;gap:6px;">
          <div style="background:linear-gradient(90deg,#fff1f2,#fff5f5);border-left:4px solid #dc2626;border-radius:0 9px 9px 0;padding:9px;display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:center;">
            <div style="font-size:22px;">🦆</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#7f1d1d;">北京烤鴨</div>
              <div style="font-size:10px;color:#991b1b;margin-top:2px;">右岸梅洛主導（Pomerol村莊級）— 圓潤果味包裹油脂，甜醬與果味和諧</div>
            </div>
            <div style="font-size:10px;color:#dc2626;font-weight:700;white-space:nowrap;">12-14°C</div>
          </div>
          <div style="background:linear-gradient(90deg,#fff7ed,#fffbeb);border-left:4px solid #d97706;border-radius:0 9px 9px 0;padding:9px;display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:center;">
            <div style="font-size:22px;">🥩</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#78350f;">紅燒肉</div>
              <div style="font-size:10px;color:#92400e;margin-top:2px;">St-Émilion Grand Cru — 石灰岩礦物質呼應醬油甜味，陳年後醬油氣息共鳴</div>
            </div>
            <div style="font-size:10px;color:#d97706;font-weight:700;white-space:nowrap;">16-18°C</div>
          </div>
          <div style="background:linear-gradient(90deg,#f0fdf4,#f7fee7);border-left:4px solid #16a34a;border-radius:0 9px 9px 0;padding:9px;display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:center;">
            <div style="font-size:22px;">🐟</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#14532d;">清蒸魚</div>
              <div style="font-size:10px;color:#166534;margin-top:2px;">Entre-Deux-Mers干白 — 細膩魚肉、蔥薑清香，需要輕盈高酸度白酒</div>
            </div>
            <div style="font-size:10px;color:#16a34a;font-weight:700;white-space:nowrap;">10-12°C</div>
          </div>
          <div style="background:linear-gradient(90deg,#fdf4ff,#faf5ff);border-left:4px solid #9333ea;border-radius:0 9px 9px 0;padding:9px;display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:center;">
            <div style="font-size:22px;">🌶️</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#581c87;">宮保雞丁</div>
              <div style="font-size:10px;color:#7e22ce;margin-top:2px;">年輕Bordeaux AOC紅酒（冰鎮）— 辛辣酸甜鹹香，果味主導、低單寧</div>
            </div>
            <div style="font-size:10px;color:#9333ea;font-weight:700;white-space:nowrap;">12-14°C</div>
          </div>
          <div style="background:linear-gradient(90deg,#eff6ff,#f0f9ff);border-left:4px solid #2563eb;border-radius:0 9px 9px 0;padding:9px;display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:center;">
            <div style="font-size:22px;">🦞</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#1e3a8a;">小龍蝦</div>
              <div style="font-size:10px;color:#1d4ed8;margin-top:2px;">Graves干白 <strong>或</strong> Sauternes甜白 — 干白礦質感 或 甜白平衡香料辛辣</div>
            </div>
            <div style="font-size:10px;color:#2563eb;font-weight:700;white-space:nowrap;">8-12°C</div>
          </div>
        </div>

      </div>
    `
  },

  {
    type: 'content',
    title: '波爾多酒配日本料理',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:10px;padding:10px;margin-bottom:12px;">
          <div style="font-size:12px;font-weight:700;color:#e0e7ff;margin-bottom:5px;">🎌 日料配酒的核心原則</div>
          <div style="font-size:10.5px;color:#a5b4fc;line-height:1.7;">強調 <strong style="color:#c7d2fe;">食材原味</strong>・調味清淡・Umami 鮮味。選擇 <strong style="color:#c7d2fe;">礦質感強、橡木桶克制、輕到中等酒體</strong> 的酒款，尊重日料的細膩美學。</div>
        </div>

        <div style="font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🍱 五大日料配酒指南</div>
        <div style="display:flex;flex-direction:column;gap:6px;">
          <div style="background:linear-gradient(90deg,#f0f9ff,#eff6ff);border-left:4px solid #0284c7;border-radius:0 9px 9px 0;padding:8px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
            <div style="font-size:22px;">🐟</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#0c4a6e;">生魚片（刺身）</div>
              <div style="font-size:10px;color:#075985;margin-top:2px;line-height:1.5;">Pessac-Léognan白酒 或 Entre-Deux-Mers — 高酸度礦質感，山葵辛辣呼應，<strong>避免橡木桶過重</strong></div>
            </div>
          </div>
          <div style="background:linear-gradient(90deg,#f0fdf4,#f7fee7);border-left:4px solid #16a34a;border-radius:0 9px 9px 0;padding:8px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
            <div style="font-size:22px;">🍣</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#14532d;">壽司（握壽司）</div>
              <div style="font-size:10px;color:#166534;margin-top:2px;line-height:1.5;">Château Couhins-Lurton Blanc — 壽司米微甜・魚肉鮮味，酸度明快・果味清爽</div>
            </div>
          </div>
          <div style="background:linear-gradient(90deg,#fffbeb,#fefce8);border-left:4px solid #ca8a04;border-radius:0 9px 9px 0;padding:8px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
            <div style="font-size:22px;">🍤</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#78350f;">天婦羅</div>
              <div style="font-size:10px;color:#92400e;margin-top:2px;line-height:1.5;">氣泡酒 或 輕盈白酒 — 油炸酥脆質地，氣泡或高酸度清爽口腔</div>
            </div>
          </div>
          <div style="background:linear-gradient(90deg,#fff1f2,#fff5f5);border-left:4px solid #dc2626;border-radius:0 9px 9px 0;padding:8px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
            <div style="font-size:22px;">🍗</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#7f1d1d;">照燒雞肉</div>
              <div style="font-size:10px;color:#991b1b;margin-top:2px;line-height:1.5;">年輕Bordeaux AOC紅酒 — 照燒醬甜鹹與果味和諧，<strong>避免高單寧</strong></div>
            </div>
          </div>
          <div style="background:linear-gradient(90deg,#fdf4ff,#faf5ff);border-left:4px solid #9333ea;border-radius:0 9px 9px 0;padding:8px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
            <div style="font-size:22px;">🥩</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#581c87;">和牛</div>
              <div style="font-size:10px;color:#7e22ce;margin-top:2px;line-height:1.5;">Pomerol 或 Margaux — 極致油花入口即化，梅洛圓潤 或 Margaux的天鵝絨質地完美搭配</div>
            </div>
          </div>
        </div>

      </div>
    `
  },

  {
    type: 'content',
    title: '波爾多酒配泰國料理',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="background:linear-gradient(135deg,#7f1d1d,#991b1b);border-radius:10px;padding:10px;margin-bottom:12px;">
          <div style="font-size:12px;font-weight:700;color:#fecaca;margin-bottom:5px;">🌶️ 泰式料理的配酒策略</div>
          <div style="font-size:10.5px;color:#fca5a5;line-height:1.7;">酸・辣・甜・鹹・鮮五味並重 → 選擇 <strong style="color:white;">果味濃郁、低單寧、微甜或半甜</strong> 的酒款，<strong style="color:white;">冰鎮飲用</strong>。高單寧紅酒會與辣椒衝突，產生苦味。</div>
        </div>

        <div style="margin-bottom:12px;">
          <div style="font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🥢 四大泰式料理配酒</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:10px;padding:10px;">
              <div style="font-size:20px;margin-bottom:4px;">🥗</div>
              <div style="font-size:11px;font-weight:700;color:#581c87;margin-bottom:3px;">青木瓜沙拉（Som Tam）</div>
              <div style="font-size:10px;color:#7e22ce;line-height:1.5;margin-bottom:5px;">酸辣・魚露鹹鮮・花生香脆</div>
              <div style="background:#7e22ce;color:white;border-radius:6px;padding:4px;font-size:9.5px;font-weight:600;text-align:center;">Sauternes 冰鎮至 8°C</div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;">
              <div style="font-size:20px;margin-bottom:4px;">🍛</div>
              <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:3px;">綠咖哩雞</div>
              <div style="font-size:10px;color:#166534;line-height:1.5;margin-bottom:5px;">椰奶・辣椒・香茅濃郁</div>
              <div style="background:#15803d;color:white;border-radius:6px;padding:4px;font-size:9.5px;font-weight:600;text-align:center;">半甜白酒 或 Sauternes</div>
            </div>
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:10px;padding:10px;">
              <div style="font-size:20px;margin-bottom:4px;">🍜</div>
              <div style="font-size:11px;font-weight:700;color:#7c2d12;margin-bottom:3px;">泰式炒河粉（Pad Thai）</div>
              <div style="font-size:10px;color:#9a3412;line-height:1.5;margin-bottom:5px;">甜酸醬汁・花生・蝦米</div>
              <div style="background:#c2410c;color:white;border-radius:6px;padding:4px;font-size:9.5px;font-weight:600;text-align:center;">年輕果味紅酒（冰鎮）</div>
            </div>
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:10px;">
              <div style="font-size:20px;margin-bottom:4px;">🐟</div>
              <div style="font-size:11px;font-weight:700;color:#1e3a8a;margin-bottom:3px;">清蒸檸檬魚</div>
              <div style="font-size:10px;color:#1d4ed8;line-height:1.5;margin-bottom:5px;">檸檬酸度・魚肉細膩清爽</div>
              <div style="background:#1d4ed8;color:white;border-radius:6px;padding:4px;font-size:9.5px;font-weight:600;text-align:center;">Entre-Deux-Mers 白酒</div>
            </div>
          </div>
        </div>

        <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:10px;">
          <div style="font-size:11px;font-weight:700;color:#92400e;margin-bottom:6px;">🏆 泰式配酒黃金法則</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
            <div style="font-size:10px;color:#78350f;line-height:1.7;">
              <div>❌ 避免高單寧紅酒（辣椒衝突）</div>
              <div>✅ 選擇果味濃郁・酸度明快</div>
            </div>
            <div style="font-size:10px;color:#78350f;line-height:1.7;">
              <div>✅ 甜白酒是對付辣度的武器</div>
              <div>🌡️ 冰鎮飲用（12°C以下）</div>
            </div>
          </div>
        </div>

      </div>
    `
  },

  // ========== 知識檢測：亞洲料理創新搭配 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：亞洲料理創新搭配',
    questions: [
      {
        question: '波爾多酒搭配川菜時，應對辣度的最佳策略是什麼？',
        options: [
          '選擇單寧強勁的Pauillac一級莊',
          '選擇甜白酒如Sauternes',
          '選擇高酒精度的紅酒',
          '選擇陳年老酒'
        ],
        correct: 1,
        explanation: '應對川菜辣度的最佳武器是甜白酒（如Sauternes或Cadillac Côtes de Bordeaux），甜度能緩解辛辣帶來的刺激，創造有趣的對比。單寧會加劇辣味，應避免。'
      },
      {
        question: '日式壽司搭配波爾多酒時，為什麼推薦Entre-Deux-Mers干白？',
        options: [
          '因為價格最便宜',
          '因為清爽酸度、檸檬草香氣不會掩蓋魚的鮮味',
          '因為酒精度最低',
          '因為甜度最高'
        ],
        correct: 1,
        explanation: 'Entre-Deux-Mers干白擁有清爽的酸度和檸檬草香氣，不會掩蓋生魚的細膩鮮味，是搭配壽司的理想選擇。避免使用橡木桶陳年的濃郁白酒。'
      }
    ]
  },

  // ========== 第五章：設計專業餐酒菜單 ==========
  {
    type: 'chapter-divider',
    chapter: '5',
    title: '設計專業餐酒菜單',
    subtitle: '多道式餐酒搭配的藝術',
    icon: '📋',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  {
    type: 'content',
    title: '多道式配餐的原則',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🚀 漸進式風味旅程 — 五大核心規則</div>
          <div style="display:flex;flex-direction:column;gap:7px;">
            <div style="background:linear-gradient(90deg,#eff6ff,#dbeafe);border-left:4px solid #3b82f6;border-radius:0 10px 10px 0;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center;">
              <div style="background:#3b82f6;color:white;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0;">1</div>
              <div>
                <div style="font-size:12px;font-weight:700;color:#1e3a8a;">從輕到重</div>
                <div style="font-size:10.5px;color:#1d4ed8;margin-top:2px;">開胃菜配輕酒體 → 主菜配重酒體，循序漸進不疲勞</div>
              </div>
            </div>
            <div style="background:linear-gradient(90deg,#fdf4ff,#fae8ff);border-left:4px solid #a855f7;border-radius:0 10px 10px 0;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center;">
              <div style="background:#a855f7;color:white;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0;">2</div>
              <div>
                <div style="font-size:12px;font-weight:700;color:#581c87;">從干到甜</div>
                <div style="font-size:10.5px;color:#7e22ce;margin-top:2px;">甜酒留到最後（甜點前），否則後續的酒顯得索然無味</div>
              </div>
            </div>
            <div style="background:linear-gradient(90deg,#f0fdf4,#dcfce7);border-left:4px solid #22c55e;border-radius:0 10px 10px 0;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center;">
              <div style="background:#22c55e;color:white;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0;">3</div>
              <div>
                <div style="font-size:12px;font-weight:700;color:#14532d;">從簡單到複雜</div>
                <div style="font-size:10.5px;color:#166534;margin-top:2px;">年輕易飲酒款開場，複雜陳年酒款壓軸，層次分明</div>
              </div>
            </div>
            <div style="background:linear-gradient(90deg,#fffbeb,#fef3c7);border-left:4px solid #f59e0b;border-radius:0 10px 10px 0;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center;">
              <div style="background:#f59e0b;color:white;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0;">4</div>
              <div>
                <div style="font-size:12px;font-weight:700;color:#78350f;">從白到紅</div>
                <div style="font-size:10.5px;color:#92400e;margin-top:2px;">白酒（海鮮・前菜）開場，紅酒（肉類・主菜）主場</div>
              </div>
            </div>
            <div style="background:linear-gradient(90deg,#fff1f2,#ffe4e6);border-left:4px solid #f43f5e;border-radius:0 10px 10px 0;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center;">
              <div style="background:#f43f5e;color:white;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;flex-shrink:0;">5</div>
              <div>
                <div style="font-size:12px;font-weight:700;color:#be123c;">酒精度遞增</div>
                <div style="font-size:10.5px;color:#9f1239;margin-top:2px;">避免後面的酒顯得淡薄，保持每款都能展現最佳狀態</div>
              </div>
            </div>
          </div>
        </div>

        <div style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:10px;padding:10px;">
          <div style="font-size:11px;font-weight:700;color:#e0e7ff;margin-bottom:5px;">⚖️ 平衡與對比的藝術</div>
          <div style="font-size:10.5px;color:#a5b4fc;line-height:1.7;">整個菜單需要 <strong style="color:white;">平衡</strong>（避免口味集中）也需要 <strong style="color:white;">對比</strong>（創造驚喜）。考慮顏色、質地、溫度、風味的多樣變化，讓每一道都期待下一道的到來。</div>
        </div>

      </div>
    `
  },

  {
    type: 'content',
    title: '經典法式七道式菜單範例',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">📋 完整七道式餐酒搭配方案</div>
        <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:10px;">

          <div style="background:linear-gradient(90deg,#f0f9ff,#e0f2fe);border-left:4px solid #0284c7;border-radius:0 8px 8px 0;padding:7px 10px;display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;">
            <div style="font-size:10px;background:#0284c7;color:white;border-radius:4px;padding:2px 6px;font-weight:700;white-space:nowrap;">第一道</div>
            <div>
              <div style="font-size:10.5px;font-weight:700;color:#0c4a6e;">煙燻鮭魚配酸豆・洋蔥・檸檬</div>
              <div style="font-size:9.5px;color:#0369a1;">Entre-Deux-Mers — 清爽酸度刺激食慾</div>
            </div>
            <div style="font-size:9px;color:#0284c7;text-align:right;">50ml<br>8-10°C</div>
          </div>

          <div style="background:linear-gradient(90deg,#f0fdf4,#dcfce7);border-left:4px solid #16a34a;border-radius:0 8px 8px 0;padding:7px 10px;display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;">
            <div style="font-size:10px;background:#16a34a;color:white;border-radius:4px;padding:2px 6px;font-weight:700;white-space:nowrap;">第二道</div>
            <div>
              <div style="font-size:10.5px;font-weight:700;color:#14532d;">生蠔拼盤（3種）</div>
              <div style="font-size:9.5px;color:#166534;">Château Smith Haut Lafitte Blanc — 礦質感呼應海洋</div>
            </div>
            <div style="font-size:9px;color:#16a34a;text-align:right;">100ml<br>10-12°C</div>
          </div>

          <div style="background:linear-gradient(90deg,#fffbeb,#fef3c7);border-left:4px solid #d97706;border-radius:0 8px 8px 0;padding:7px 10px;display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;">
            <div style="font-size:10px;background:#d97706;color:white;border-radius:4px;padding:2px 6px;font-weight:700;white-space:nowrap;">第三道</div>
            <div>
              <div style="font-size:10.5px;font-weight:700;color:#78350f;">煎鵝肝配無花果與布里歐</div>
              <div style="font-size:9.5px;color:#92400e;">Château d'Yquem（半瓶）— 甜度切油脂・貴腐呼應</div>
            </div>
            <div style="font-size:9px;color:#d97706;text-align:right;">75ml<br>10-12°C</div>
          </div>

          <div style="background:linear-gradient(90deg,#fdf4ff,#fae8ff);border-left:4px solid #9333ea;border-radius:0 8px 8px 0;padding:7px 10px;display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;">
            <div style="font-size:10px;background:#9333ea;color:white;border-radius:4px;padding:2px 6px;font-weight:700;white-space:nowrap;">第四道</div>
            <div>
              <div style="font-size:10.5px;font-weight:700;color:#581c87;">奶油龍蝦配黑松露</div>
              <div style="font-size:9.5px;color:#7e22ce;">Château Haut-Brion Blanc — 頂級白酒的深度匹配</div>
            </div>
            <div style="font-size:9px;color:#9333ea;text-align:right;">100ml<br>12-14°C</div>
          </div>

          <div style="background:linear-gradient(90deg,#fff7ed,#ffedd5);border-left:4px solid #ea580c;border-radius:0 8px 8px 0;padding:7px 10px;display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;">
            <div style="font-size:10px;background:#ea580c;color:white;border-radius:4px;padding:2px 6px;font-weight:700;white-space:nowrap;">第五道</div>
            <div>
              <div style="font-size:10.5px;font-weight:700;color:#7c2d12;">烤乳鴿配野菇</div>
              <div style="font-size:9.5px;color:#9a3412;">Château Palmer (Margaux) — 優雅過渡進入紅酒階段</div>
            </div>
            <div style="font-size:9px;color:#ea580c;text-align:right;">120ml<br>16-18°C</div>
          </div>

          <div style="background:linear-gradient(90deg,#fff1f2,#ffe4e6);border-left:4px solid #dc2626;border-radius:0 8px 8px 0;padding:7px 10px;display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;">
            <div style="font-size:10px;background:#dc2626;color:white;border-radius:4px;padding:2px 6px;font-weight:700;white-space:nowrap;">第六道</div>
            <div>
              <div style="font-size:10.5px;font-weight:700;color:#7f1d1d;">夏洛來牛排配骨髓・紅酒醬 ⭐ 重頭戲</div>
              <div style="font-size:9.5px;color:#991b1b;">Château Latour 陳年10年 — 強勁單寧・複雜度（提前2小時醒酒）</div>
            </div>
            <div style="font-size:9px;color:#dc2626;text-align:right;">150ml<br>17-18°C</div>
          </div>

          <div style="background:linear-gradient(90deg,#fdf4ff,#fae8ff);border-left:4px solid #7c3aed;border-radius:0 8px 8px 0;padding:7px 10px;display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;">
            <div style="font-size:10px;background:#7c3aed;color:white;border-radius:4px;padding:2px 6px;font-weight:700;white-space:nowrap;">第七道</div>
            <div>
              <div style="font-size:10.5px;font-weight:700;color:#4c1d95;">覆盆莓舒芙蕾配香草冰淇淋</div>
              <div style="font-size:9.5px;color:#6d28d9;">繼續 Château d'Yquem — 複雜度呼應覆盆莓果味</div>
            </div>
            <div style="font-size:9px;color:#7c3aed;text-align:right;">50ml</div>
          </div>

        </div>

        <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:9px;padding:9px;">
          <div style="font-size:10.5px;font-weight:700;color:#78350f;margin-bottom:4px;">💡 菜單設計要點</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;font-size:10px;color:#92400e;line-height:1.6;">
            <div>• 總酒量 500-700ml/人（約一瓶）</div>
            <div>• 上菜節奏每道間隔 15-20 分鐘</div>
            <div>• 酒款預算：40% 主菜・30% Yquem</div>
            <div>• 季節調整：夏季輕盈・冬季厚重</div>
          </div>
        </div>

      </div>
    `
  },

  {
    type: 'content',
    title: '現代創意菜單範例',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🌍 融合東西方的五道式創新菜單</div>
        <div style="display:flex;flex-direction:column;gap:7px;">

          <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:11px;padding:11px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;">
            <div style="background:#3b82f6;color:white;border-radius:8px;padding:5px 8px;font-size:10.5px;font-weight:700;white-space:nowrap;text-align:center;">第一道</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#1e3a8a;">日式生魚片 × 西班牙火腿拼盤</div>
              <div style="font-size:10px;color:#1d4ed8;margin-top:3px;">🍾 <strong>Pessac-Léognan 白酒</strong> — 礦質感同時匹配海鮮與火腿鹹味</div>
              <div style="font-size:9.5px;color:#2563eb;margin-top:2px;font-style:italic;">東西方食材融合，一款酒呼應兩種文化的食材</div>
            </div>
          </div>

          <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:11px;padding:11px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;">
            <div style="background:#f97316;color:white;border-radius:8px;padding:5px 8px;font-size:10.5px;font-weight:700;white-space:nowrap;text-align:center;">第二道</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#7c2d12;">泰式香茅燉龍蝦湯</div>
              <div style="font-size:10px;color:#9a3412;margin-top:3px;">🍾 <strong>Sauternes（冰鎮）</strong> — 甜度平衡香茅辣椒，果味與椰奶和諧</div>
              <div style="font-size:9.5px;color:#c2410c;margin-top:2px;font-style:italic;">甜白酒的意外配角，化辣為和諧</div>
            </div>
          </div>

          <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:11px;padding:11px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;">
            <div style="background:#f43f5e;color:white;border-radius:8px;padding:5px 8px;font-size:10.5px;font-weight:700;white-space:nowrap;text-align:center;">第三道</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#be123c;">北京烤鴨 × 墨西哥莎莎醬</div>
              <div style="font-size:10px;color:#9f1239;margin-top:3px;">🍾 <strong>Pomerol 村莊級（冰鎮）</strong> — 梅洛果味包裹烤鴨油脂，莎莎醬酸辣被中和</div>
              <div style="font-size:9.5px;color:#dc2626;margin-top:2px;font-style:italic;">東方傳統 + 拉丁活力 = 梅洛果味的和諧包容</div>
            </div>
          </div>

          <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:11px;padding:11px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;">
            <div style="background:#a855f7;color:white;border-radius:8px;padding:5px 8px;font-size:10.5px;font-weight:700;white-space:nowrap;text-align:center;">第四道</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#581c87;">和牛 × 韓式泡菜</div>
              <div style="font-size:10px;color:#7e22ce;margin-top:3px;">🍾 <strong>Château Cheval Blanc</strong> — 和牛油花配絲滑質地，泡菜發酵味與陳年複雜度共鳴</div>
              <div style="font-size:9.5px;color:#9333ea;margin-top:2px;font-style:italic;">頂級食材 + 發酵傳統 = 複雜度的完美匹配</div>
            </div>
          </div>

          <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:11px;padding:11px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;">
            <div style="background:#22c55e;color:white;border-radius:8px;padding:5px 8px;font-size:10.5px;font-weight:700;white-space:nowrap;text-align:center;">第五道</div>
            <div>
              <div style="font-size:11px;font-weight:700;color:#14532d;">抹茶提拉米蘇</div>
              <div style="font-size:10px;color:#166534;margin-top:3px;">🍾 <strong>Château Climens (Barsac)</strong> — 蜂蜜與抹茶苦甜創造有趣對比</div>
              <div style="font-size:9.5px;color:#15803d;margin-top:2px;font-style:italic;">西方甜點 + 東方苦韻 = 甜與苦之間的完美張力</div>
            </div>
          </div>

        </div>

      </div>
    `
  },

  // ========== 知識檢測：餐酒菜單設計 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：餐酒菜單設計',
    questions: [
      {
        question: '在設計多道式餐酒菜單時，應遵循什麼順序原則？',
        options: [
          '從甜到干、從重到輕',
          '從輕到重、從干到甜、從年輕到陳年',
          '隨機搭配',
          '全部使用同一款酒'
        ],
        correct: 1,
        explanation: '多道式餐酒菜單應遵循「從輕到重、從干到甜、從年輕到陳年」的原則，避免味覺疲勞，讓每一道菜和每一款酒都能得到充分品味。'
      },
      {
        question: '「垂直品鑑」主題晚宴的設計理念是什麼？',
        options: [
          '品鑑不同產區的酒',
          '品鑑同一酒莊不同年份的酒（如Château Margaux 2010/2015/2020）',
          '品鑑不同品種的酒',
          '品鑑不同國家的酒'
        ],
        correct: 1,
        explanation: '「垂直品鑑」是指品鑑同一酒莊不同年份的葡萄酒，例如Château Margaux的2010、2015、2020年份，讓賓客體會年份差異對同一風土的影響。'
      }
    ]
  },

  // ========== 課程總結 ==========
  {
    type: 'chapter-divider',
    chapter: '總結',
    title: '配餐的智慧與實踐',
    subtitle: '從原理到藝術',
    icon: '🎓',
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },

  {
    type: 'content',
    title: '配餐的核心思維',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🎯 五大核心配餐原則</div>
          <div style="display:flex;flex-direction:column;gap:6px;">

            <div style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:10px;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
              <div style="font-size:26px;">🔬</div>
              <div>
                <div style="font-size:11.5px;font-weight:700;color:#e0e7ff;">1. 理解科學基礎</div>
                <div style="font-size:10px;color:#a5b4fc;margin-top:2px;">單寧軟化蛋白質 • 酸度切割油脂 • 甜度平衡辣味 • 酒體對應食物重量</div>
              </div>
            </div>

            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:10px;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
              <div style="font-size:26px;">🗺️</div>
              <div>
                <div style="font-size:11.5px;font-weight:700;color:#7c2d12;">2. 尊重地域傳統</div>
                <div style="font-size:10px;color:#9a3412;margin-top:2px;">波爾多紅酒配紅肉 • 白酒配海鮮 • Sauternes配鵝肝 — 數百年飲食智慧的結晶</div>
              </div>
            </div>

            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
              <div style="font-size:26px;">✨</div>
              <div>
                <div style="font-size:11.5px;font-weight:700;color:#14532d;">3. 考慮整體體驗</div>
                <div style="font-size:10px;color:#166534;margin-top:2px;">不只是味道，還有情境・氛圍・季節・場合 — 配餐是創造完整記憶的藝術</div>
              </div>
            </div>

            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
              <div style="font-size:26px;">💡</div>
              <div>
                <div style="font-size:11.5px;font-weight:700;color:#1e3a8a;">4. 大膽創新探索</div>
                <div style="font-size:10px;color:#1d4ed8;margin-top:2px;">跨文化搭配的驚喜 — 泰式料理配Sauternes・和牛配Cheval Blanc，突破常規的美好</div>
              </div>
            </div>

            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:10px;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;">
              <div style="font-size:26px;">❤️</div>
              <div>
                <div style="font-size:11.5px;font-weight:700;color:#581c87;">5. 聆聽個人偏好</div>
                <div style="font-size:10px;color:#7e22ce;margin-top:2px;">沒有絕對正確的搭配 — 你認為美好的組合就是最好的配餐。規則是起點，不是終點。</div>
              </div>
            </div>

          </div>
        </div>

        <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:10px;">
          <div style="font-size:11px;font-weight:700;color:#92400e;margin-bottom:5px;">📚 持續學習的實踐方法</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;font-size:10px;color:#78350f;line-height:1.7;">
            <div>
              <div>🍽️ 定期組織配餐實驗晚宴</div>
              <div>📝 記錄每次搭配的成敗原因</div>
            </div>
            <div>
              <div>📖 閱讀侍酒師配餐建議</div>
              <div>🔓 保持開放心態嘗試新組合</div>
            </div>
          </div>
        </div>

      </div>
    `
  },

  // 結束頁
  {
    type: 'end',
    title: '課程完成',
    achievement: 'L3-10 波爾多葡萄酒的配餐藝術',
    description: '恭喜您掌握了波爾多葡萄酒配餐的科學原理與實踐技巧！從單寧、酸度的化學作用，到經典紅肉搭配，再到亞洲料理的創新探索，您已具備設計專業餐酒菜單的能力。',
    skills: [
      '理解配餐的科學原理（單寧、酸度、甜度、酒體）',
      '掌握波爾多紅酒與牛排、羊肉、野味的經典搭配',
      '學會白酒、甜酒與海鮮、鵝肝、乳酪的完美組合',
      '探索跨文化配餐（中餐、日料、泰菜）',
      '能夠設計專業的多道式餐酒菜單'
    ],
    nextSteps: [
      {
        action: '實踐應用',
        items: [
          '組織一次配餐實驗晚宴，測試所學知識',
          '記錄每次配餐的成功與失敗經驗',
          '嘗試設計一個完整的七道式餐酒菜單',
          '探索更多跨文化配餐的可能性'
        ]
      },
      {
        action: '繼續學習',
        items: [
          '進入L3-11：波爾多葡萄酒產業史與文化',
          '深入研究特定菜系的配餐邏輯',
          '參加侍酒師協會的配餐課程'
        ]
      }
    ],
    certificate: '您已獲得本課程學習證明',
    reflection: {
      title: '課程反思',
      questions: [
        '為什麼單寧與蛋白質的結合是紅酒配紅肉的科學基礎？',
        '如果要為一位素食主義者設計波爾多配餐菜單，你會如何搭配？',
        '亞洲料理與波爾多酒的搭配為什麼具有挑戰性？如何克服？',
        '在設計多道式菜單時，為什麼要遵循"從輕到重"的原則？'
      ]
    },
    keyInsight: '配餐是科學與藝術的完美結合。理解化學原理讓我們知其然，尊重文化傳統讓我們知其所以然，而大膽創新則讓我們超越常規，創造驚喜。最偉大的配餐不是追隨規則，而是在理解規則後的自由創作。波爾多葡萄酒的多樣性為這種創作提供了無限可能。',
    shareMessage: '我剛完成了Level 3的「波爾多葡萄酒的配餐藝術」課程！學習了從科學原理到經典搭配，再到亞洲料理創新的完整配餐知識。現在我能設計專業的餐酒菜單了！🍽️🍷 #波爾多 #配餐藝術 #葡萄酒學習 #FoodPairing'
  }
]

export default l310Content


