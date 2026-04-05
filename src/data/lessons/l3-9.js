// L3-9: 商業分析與市場策略
// 探索波爾多葡萄酒的商業模式、市場分析與策略規劃

export const l39Content = [
  // 課程簡介
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          波爾多葡萄酒業不僅是釀造藝術的典範，更是成功商業模式的代表。從期酒（En Primeur）系統創造的市場流動性，到列級莊品牌的百年價值積累，從傳統經銷網絡到電商直銷創新，波爾多建構了一個獨特而複雜的商業生態系統。
        </p>

        <p class="intro-context">
          本課程將深入分析這個生態系統的運作邏輯，探討市場定位策略、品牌建立方法、國際市場拓展，以及數位化時代的商業創新。從 Château Lafite 如何在中國市場建立奢侈品地位，到中小酒莊如何透過數位行銷找到利基市場，您將全面掌握葡萄酒產業的商業智慧。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🏗️ 分析商業生態系統</h4>
            <p>全面理解波爾多葡萄酒產業的價值鏈、分銷渠道、期酒系統與市場機制</p>
          </div>

          <div class="point-item">
            <h4>🎯 掌握市場定位策略</h4>
            <p>學習市場細分、目標客群選擇、差異化定位與品牌建立的核心方法</p>
          </div>

          <div class="point-item">
            <h4>🌍 理解國際市場拓展</h4>
            <p>分析進入美國、中國、日本等主要市場的策略、文化適應與風險管理</p>
          </div>

          <div class="point-item">
            <h4>💻 探索數位化商業創新</h4>
            <p>掌握電商平台、社交媒體行銷、區塊鏈防偽、虛擬品鑑等新興商業模式</p>
          </div>

          <div class="point-item">
            <h4>📈 學習商業策略制定</h4>
            <p>理解如何根據酒莊規模、產品定位、資源狀況制定有效的商業策略</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將全面理解波爾多葡萄酒業的商業邏輯，以及如何在全球市場中成功運營葡萄酒品牌。
        </p>

        <div class="course-info">
          <p><strong>預計學習時間：</strong>40分鐘</p>
          <p><strong>難度等級：</strong>高級專業</p>
        </div>
      </div>
    `,
    icon: '💼'
  },

  // 第一章：波爾多商業生態系統
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '波爾多商業生態系統',
    subtitle: '複雜而精密的產業價值鏈',
    icon: '🏗️',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  
  {
    type: 'content',
    title: '產業價值鏈與生態系統分析',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <!-- 三層價值鏈 -->
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:8px 12px;color:#fff;font-weight:700;font-size:0.81rem;">🍇 上游：葡萄種植</div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;line-height:1.7;">
              <b style="color:#1B5E20;">土地所有者：</b>大型酒莊集團·家族式酒莊·投資基金·合作社<br>
              <b style="color:#1B5E20;">供應商：</b>農業設備·肥料農藥·技術服務·勞務承包
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:6px;font-size:0.68rem;">
                <div style="background:#E8F5E9;border-radius:4px;padding:3px 6px;">土地成本 <b style="color:#1B5E20;">40-50%</b></div>
                <div style="background:#E8F5E9;border-radius:4px;padding:3px 6px;">勞動成本 <b style="color:#1B5E20;">25-30%</b></div>
                <div style="background:#E8F5E9;border-radius:4px;padding:3px 6px;">材料成本 <b style="color:#1B5E20;">15-20%</b></div>
                <div style="background:#E8F5E9;border-radius:4px;padding:3px 6px;">其他成本 <b style="color:#1B5E20;">10-15%</b></div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:8px 12px;color:#fff;font-weight:700;font-size:0.81rem;">🍷 中游：釀造與陳年</div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;line-height:1.7;">
              <b style="color:#1565C0;">釀造設施：</b>現代釀酒設備·橡木桶·儲存設施·品質實驗室<br>
              <b style="color:#1565C0;">專業服務：</b>釀酒顧問·品質檢測·技術支持·認證機構
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:6px;font-size:0.68rem;">
                <div style="background:#E3F2FD;border-radius:4px;padding:3px 6px;">發酵期 <b style="color:#1565C0;">1-2 個月</b></div>
                <div style="background:#E3F2FD;border-radius:4px;padding:3px 6px;">桶陳 <b style="color:#1565C0;">12-24 月</b></div>
                <div style="background:#E3F2FD;border-radius:4px;padding:3px 6px;">瓶陳 <b style="color:#1565C0;">6月-數年</b></div>
                <div style="background:#E3F2FD;border-radius:4px;padding:3px 6px;">資金佔用 <b style="color:#1565C0;">成本高</b></div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#FF6D00);padding:8px 12px;color:#fff;font-weight:700;font-size:0.81rem;">📦 下游：銷售與分銷</div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;line-height:1.7;">
              <b style="color:#E65100;">銷售渠道：</b>酒商（Négociants）·直接銷售·出口代理·電商平台
              <div style="margin-top:6px;font-size:0.68rem;">
                <div style="background:#FFF3E0;border-radius:5px;padding:5px 8px;">
                  <div style="font-weight:600;color:#E65100;margin-bottom:3px;">利潤分配</div>
                  <div style="display:flex;flex-direction:column;gap:2px;">
                    <div style="display:flex;justify-content:space-between;">生產者<span style="color:#1B5E20;font-weight:700;">30-40%</span></div>
                    <div style="display:flex;justify-content:space-between;">分銷商<span style="color:#1565C0;font-weight:700;">20-25%</span></div>
                    <div style="display:flex;justify-content:space-between;">零售商<span style="color:#E65100;font-weight:700;">35-50% ★</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 關鍵參與者 -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:9px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:7px 12px;color:#fff;font-weight:700;font-size:0.78rem;">🏰 頂級酒莊策略</div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;line-height:1.75;">
              <b style="color:#B71C1C;">一級莊：</b>品牌價值極高·稀缺性營銷·歷史聲譽保證·產量限制挑戰<br>
              <b style="color:#B71C1C;">列級莊：</b>品質與價格平衡·差異化品牌·穩定品質·持續投資需求
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#4527A0,#7B1FA2);padding:7px 12px;color:#fff;font-weight:700;font-size:0.78rem;">🏢 酒商集團（Négociants）功能</div>
            <div style="padding:8px 11px;font-size:0.71rem;color:#333;line-height:1.75;">
              <b style="color:#4527A0;">採購整合：</b>向小生產者採購，規模化運作<br>
              <b style="color:#4527A0;">市場開發：</b>國際渠道建設·資金支持生產者<br>
              <b style="color:#4527A0;">現代轉型：</b>向上游整合·打造自有品牌·數位化電商
            </div>
          </div>
        </div>
      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🏗️',
        title: '價值鏈複雜',
        content: '波爾多葡萄酒產業具有複雜的三層價值鏈結構，每層都有獨特的成本結構和利潤模式'
      },
      {
        id: 2,
        icon: '🤝',
        title: '生態系統',
        content: '頂級酒莊、酒商集團等關鍵參與者形成了相互依存的商業生態系統'
      }
    ]
  },


  // 第一章知識檢測
  {
    type: 'interactive-quiz',
    title: '知識檢測：商業生態系統理解',
    questions: [
      {
        question: '在波爾多葡萄酒產業的價值鏈中，利潤分配比例最高的環節是？',
        options: [
          '生產者（30-40%）',
          '分銷商（20-25%）',
          '零售商（35-50%）',
          '運輸商（5-10%）'
        ],
        correct: 2,
        explanation: '根據課程內容，零售商在利潤分配中佔比最高（35-50%），這反映了零售環節直接面對消費者的市場定價能力和品牌溢價空間。'
      },
      {
        question: '波爾多酒商（Négociants）在產業生態系統中最重要的功能是？',
        options: [
          '單純轉售葡萄酒',
          '採購整合並提供資金支持',
          '只負責國際運輸',
          '替代釀酒師釀造葡萄酒'
        ],
        correct: 1,
        explanation: '酒商的核心功能包括向小生產者採購整合、品質控制、市場開發，以及為生產者提供預付款和融資支持，是產業鏈中的關鍵橋樑。'
      }
    ]
  },

  // 第二章：市場定位與品牌策略
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '市場定位與品牌策略',
    subtitle: '打造獨特的市場競爭優勢',
    icon: '🎯',
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },
  
  {
    type: 'content',
    title: '市場細分與品牌建設',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">👥 消費者細分</div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
            <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:10px;">
              <div style="font-size:18px;text-align:center;margin-bottom:4px;">🍷</div>
              <div style="font-size:12px;font-weight:700;color:#92400e;text-align:center;margin-bottom:6px;">鑒賞家</div>
              <div style="font-size:10.5px;color:#78350f;line-height:1.5;">
                <div style="margin-bottom:2px;"><span style="color:#d97706;font-weight:600;">特徵</span> 深度專業知識，追求極致品質</div>
                <div style="margin-bottom:2px;"><span style="color:#d97706;font-weight:600;">需求</span> 稀有年份、頂級產區</div>
                <div style="margin-bottom:2px;"><span style="color:#d97706;font-weight:600;">價格敏感</span> 低</div>
                <div><span style="color:#d97706;font-weight:600;">策略</span> 專業品鑑會、限量發售</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;">
              <div style="font-size:18px;text-align:center;margin-bottom:4px;">🥂</div>
              <div style="font-size:12px;font-weight:700;color:#14532d;text-align:center;margin-bottom:6px;">社交飲者</div>
              <div style="font-size:10.5px;color:#166534;line-height:1.5;">
                <div style="margin-bottom:2px;"><span style="color:#16a34a;font-weight:600;">特徵</span> 中等收入，偶爾享用</div>
                <div style="margin-bottom:2px;"><span style="color:#16a34a;font-weight:600;">需求</span> 知名品牌、合理價格</div>
                <div style="margin-bottom:2px;"><span style="color:#16a34a;font-weight:600;">價格敏感</span> 中等</div>
                <div><span style="color:#16a34a;font-weight:600;">策略</span> 品牌故事、節慶促銷</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:10px;">
              <div style="font-size:18px;text-align:center;margin-bottom:4px;">🏪</div>
              <div style="font-size:12px;font-weight:700;color:#1e3a8a;text-align:center;margin-bottom:6px;">餐飲業者</div>
              <div style="font-size:10.5px;color:#1d4ed8;line-height:1.5;">
                <div style="margin-bottom:2px;"><span style="color:#2563eb;font-weight:600;">特徵</span> 專業採購，大量購買</div>
                <div style="margin-bottom:2px;"><span style="color:#2563eb;font-weight:600;">需求</span> 穩定供應、合理利潤</div>
                <div style="margin-bottom:2px;"><span style="color:#2563eb;font-weight:600;">價格敏感</span> 高</div>
                <div><span style="color:#2563eb;font-weight:600;">策略</span> 專業培訓、批量折扣</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:10px;padding:10px;">
              <div style="font-size:18px;text-align:center;margin-bottom:4px;">💰</div>
              <div style="font-size:12px;font-weight:700;color:#581c87;text-align:center;margin-bottom:6px;">投資收藏家</div>
              <div style="font-size:10.5px;color:#7e22ce;line-height:1.5;">
                <div style="margin-bottom:2px;"><span style="color:#9333ea;font-weight:600;">特徵</span> 關注投資回報、長期持有</div>
                <div style="margin-bottom:2px;"><span style="color:#9333ea;font-weight:600;">需求</span> 升值潛力、真品保證</div>
                <div style="margin-bottom:2px;"><span style="color:#9333ea;font-weight:600;">價格敏感</span> 低（關注投資價值）</div>
                <div><span style="color:#9333ea;font-weight:600;">策略</span> 投資報告、拍賣會</div>
              </div>
            </div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div>
            <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🏷️ 品牌價值四大支柱</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
              <div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #f43f5e;border-radius:9px;padding:9px;">
                <div style="font-size:15px;text-align:center;">🏛️</div>
                <div style="font-size:11px;font-weight:700;color:#be123c;text-align:center;margin:3px 0;">歷史傳承</div>
                <div style="font-size:10px;color:#9f1239;line-height:1.5;">• 酒莊建立年份故事<br>• 家族傳承與工藝延續<br>• 歷史事件名人關聯<br>• 傳統與現代的平衡</div>
              </div>
              <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #16a34a;border-radius:9px;padding:9px;">
                <div style="font-size:15px;text-align:center;">🌍</div>
                <div style="font-size:11px;font-weight:700;color:#14532d;text-align:center;margin:3px 0;">風土特色</div>
                <div style="font-size:10px;color:#166534;line-height:1.5;">• 獨特地理位置優勢<br>• 土壤與氣候特殊性<br>• 產區與品質關聯<br>• Terroir概念深化</div>
              </div>
              <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:9px;padding:9px;">
                <div style="font-size:15px;text-align:center;">🎨</div>
                <div style="font-size:11px;font-weight:700;color:#1e3a8a;text-align:center;margin:3px 0;">釀造工藝</div>
                <div style="font-size:10px;color:#1d4ed8;line-height:1.5;">• 傳統工藝精湛技術<br>• 釀酒師專業能力<br>• 嚴格品質控制標準<br>• 傳統與創新結合</div>
              </div>
              <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:9px;padding:9px;">
                <div style="font-size:15px;text-align:center;">🏆</div>
                <div style="font-size:11px;font-weight:700;color:#7c2d12;text-align:center;margin:3px 0;">品質認證</div>
                <div style="font-size:10px;color:#9a3412;line-height:1.5;">• 權威評分與獎項<br>• 國際品質認證<br>• 一致品質標準<br>• 維護品牌信任</div>
              </div>
            </div>
          </div>

          <div>
            <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">📢 品牌傳播三大渠道</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="background:linear-gradient(135deg,#fffbeb,#fef9c3);border:1px solid #ca8a04;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#713f12;margin-bottom:4px;">🎓 專業教育</div>
                <div style="font-size:10px;color:#92400e;line-height:1.5;display:grid;grid-template-columns:1fr 1fr;gap:2px;">
                  <div>• WSET等專業認證</div><div>• 酒莊沉浸式參訪</div>
                  <div>• 大師班知識分享</div><div>• 行業技術研討會</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #c026d3;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#701a75;margin-bottom:4px;">🎪 體驗行銷</div>
                <div style="font-size:10px;color:#86198f;line-height:1.5;display:grid;grid-template-columns:1fr 1fr;gap:2px;">
                  <div>• 新酒發表垂直品鑑</div><div>• 知名餐廳美食搭配</div>
                  <div>• 藝術文化主題活動</div><div>• 酒莊旅遊住宿體驗</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#f0f9ff,#e0f2fe);border:1px solid #0284c7;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#0c4a6e;margin-bottom:4px;">📱 數位行銷</div>
                <div style="font-size:10px;color:#075985;line-height:1.5;display:grid;grid-template-columns:1fr 1fr;gap:2px;">
                  <div>• Instagram視覺營銷</div><div>• 部落格影片內容</div>
                  <div>• KOL品酒師推薦</div><div>• 電商會員直接銷售</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🎯',
        title: '精準細分',
        content: '通過消費者特徵和地理市場的多維度細分，制定精準的市場策略'
      },
      {
        id: 2,
        icon: '🏷️',
        title: '品牌價值',
        content: '建立在歷史傳承、風土特色、釀造工藝和品質認證基礎上的品牌價值體系'
      }
    ],
    hasMap: false,
    interactiveElements: [
      {
        type: 'segmentation-tool',
        title: '市場細分分析工具',
        data: {
          dimensions: ['消費者類型', '地理區域', '價格區間', '消費場景'],
          segments: ['鑒賞家', '社交飲者', '餐飲業', '投資者'],
          strategies: ['專業教育', '體驗行銷', '數位推廣']
        }
      }
    ]
  },

  // 第二章知識檢測
  // 第二章知識檢測
  {
    type: 'interactive-quiz',
    title: '知識檢測：市場定位策略',
    questions: [
      {
        question: '針對「鑒賞家」消費群體，最有效的行銷策略是？',
        options: [
          '大眾媒體廣告投放',
          '低價促銷活動',
          '專業品鑑會與專家推薦',
          '社交媒體網紅推廣'
        ],
        correct: 2,
        explanation: '鑒賞家具備深度專業知識、追求極致品質且價格敏感度低，因此專業品鑑會、限量發售和專家推薦是最有效的行銷策略，能夠滿足其專業需求和收藏價值訴求。'
      },
      {
        question: '品牌建設中的「故事行銷」為什麼對波爾多葡萄酒特別重要？',
        options: [
          '可以降低生產成本',
          '能夠加快陳年速度',
          '創造情感連結和文化價值',
          '替代品質管控'
        ],
        correct: 2,
        explanation: '故事行銷通過講述酒莊歷史、釀酒師理念、風土文化等，能夠創造消費者與品牌之間的情感連結，提升品牌的文化價值和差異化競爭力，這對高端葡萄酒品牌尤為關鍵。'
      }
    ]
  },

  // 第三章：國際市場拓展策略
  {
    type: 'chapter-divider',
    chapter: '3',
    title: '國際市場拓展策略',
    subtitle: '波爾多的全球化商業實踐',
    icon: '🌍',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  
  {
    type: 'content',
    title: '全球市場分析與拓展策略',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🏆 主要出口市場（2023年數據）</div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:10px;">
              <div style="font-size:20px;text-align:center;margin-bottom:4px;">🇺🇸</div>
              <div style="font-size:12px;font-weight:700;color:#1e3a8a;text-align:center;margin-bottom:2px;">美國</div>
              <div style="font-size:18px;font-weight:800;color:#1d4ed8;text-align:center;margin-bottom:6px;">28%</div>
              <div style="font-size:10px;color:#1e40af;line-height:1.6;">
                <div>📈 年增長 3-5%</div>
                <div>💶 €15-20/瓶</div>
                <div>🏪 專業零售、餐飲</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:10px;padding:10px;">
              <div style="font-size:20px;text-align:center;margin-bottom:4px;">🇨🇳</div>
              <div style="font-size:12px;font-weight:700;color:#7c2d12;text-align:center;margin-bottom:2px;">中國</div>
              <div style="font-size:18px;font-weight:800;color:#ea580c;text-align:center;margin-bottom:6px;">15%</div>
              <div style="font-size:10px;color:#9a3412;line-height:1.6;">
                <div>📈 年增長 8-12%</div>
                <div>💶 €25-35/瓶</div>
                <div>🛒 電商、禮品市場</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;">
              <div style="font-size:20px;text-align:center;margin-bottom:4px;">🇬🇧</div>
              <div style="font-size:12px;font-weight:700;color:#14532d;text-align:center;margin-bottom:2px;">英國</div>
              <div style="font-size:18px;font-weight:800;color:#16a34a;text-align:center;margin-bottom:6px;">12%</div>
              <div style="font-size:10px;color:#166534;line-height:1.6;">
                <div>📈 年增長 1-2%</div>
                <div>💶 €12-18/瓶</div>
                <div>🏪 傳統零售、在線</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:10px;padding:10px;">
              <div style="font-size:20px;text-align:center;margin-bottom:4px;">🇩🇪</div>
              <div style="font-size:12px;font-weight:700;color:#581c87;text-align:center;margin-bottom:2px;">德國</div>
              <div style="font-size:18px;font-weight:800;color:#9333ea;text-align:center;margin-bottom:6px;">10%</div>
              <div style="font-size:10px;color:#7e22ce;line-height:1.6;">
                <div>📈 年增長 2-3%</div>
                <div>💶 €10-15/瓶</div>
                <div>🏪 超市、專業店</div>
              </div>
            </div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div>
            <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🚀 新興市場機會</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:9px;padding:9px;display:grid;grid-template-columns:auto 1fr;gap:8px;align-items:start;">
                <div style="font-size:22px;">🇮🇳</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#7c2d12;margin-bottom:3px;">印度</div>
                  <div style="font-size:10px;color:#9a3412;line-height:1.5;">中產階級快速成長 · 西式生活普及 · 高檔餐飲發展 · 年輕消費者接受度高</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #16a34a;border-radius:9px;padding:9px;display:grid;grid-template-columns:auto 1fr;gap:8px;align-items:start;">
                <div style="font-size:22px;">🇧🇷</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:3px;">巴西</div>
                  <div style="font-size:10px;color:#166534;line-height:1.5;">拉美最大葡萄酒市場 · 進口酒偏好增強 · 社交飲酒文化發達 · 經濟復甦帶動消費</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:9px;padding:9px;display:grid;grid-template-columns:auto 1fr;gap:8px;align-items:start;">
                <div style="font-size:22px;">🇯🇵</div>
                <div>
                  <div style="font-size:11px;font-weight:700;color:#1e3a8a;margin-bottom:3px;">日本</div>
                  <div style="font-size:10px;color:#1d4ed8;line-height:1.5;">精緻文化追求品質 · 高端消費能力強 · 法國文化認同高 · 餐酒搭配需求增長</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🎭 跨文化行銷 · 文化適應策略</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
              <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#7c2d12;margin-bottom:4px;">🇨🇳 中國市場</div>
                <div style="font-size:10px;color:#9a3412;line-height:1.5;">
                  <div style="margin-bottom:2px;">🎁 <span style="font-weight:600;">禮品文化</span> 精美包裝、吉祥數字</div>
                  <div style="margin-bottom:2px;">🏮 <span style="font-weight:600;">本土化</span> 中文品牌、中式搭配</div>
                  <div>📱 <span style="font-weight:600;">數位</span> 微信商城、直播銷售</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#1e3a8a;margin-bottom:4px;">🇺🇸 美國市場</div>
                <div style="font-size:10px;color:#1d4ed8;line-height:1.5;">
                  <div style="margin-bottom:2px;">⭐ <span style="font-weight:600;">評分文化</span> Parker、Spectator</div>
                  <div style="margin-bottom:2px;">🍽️ <span style="font-weight:600;">餐飲</span> 侍酒師培訓、配菜建議</div>
                  <div>🌱 <span style="font-weight:600;">健康</span> 有機認證、可持續故事</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #16a34a;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:4px;">🤝 合作夥伴模式</div>
                <div style="font-size:10px;color:#166534;line-height:1.5;">
                  <div>• 獨家代理商（初入市場）</div>
                  <div>• 分銷商網絡（成熟市場）</div>
                  <div>• 戰略聯盟（資源共享）</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#581c87;margin-bottom:4px;">🏢 直接投資模式</div>
                <div style="font-size:10px;color:#7e22ce;line-height:1.5;">
                  <div>• 海外辦事處（品牌掌控）</div>
                  <div>• 倉儲物流中心（縮短交期）</div>
                  <div>• 零售旗艦店（體驗完整）</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🌍',
        title: '全球布局',
        content: '通過分析主要出口市場和新興機會，制定差異化的全球市場策略'
      },
      {
        id: 2,
        icon: '🎭',
        title: '文化適應',
        content: '深度理解目標市場文化，實施產品、傳播和關係的全方位本土化'
      }
    ],
    hasMap: true,
    mapConfig: {
      center: [0, 20],
      zoom: 2,
      showGlobalMarkets: true,
      highlightExportRoutes: true
    },
    interactiveElements: [
      {
        type: 'market-expansion-planner',
        title: '國際市場拓展規劃工具',
        data: {
          markets: ['美國', '中國', '英國', '德國', '日本', '印度'],
          strategies: ['代理商', '直接投資', '戰略聯盟'],
          factors: ['市場規模', '競爭強度', '文化距離', '法規環境']
        }
      }
    ]
  },

  // 第三章知識檢測
  {
    type: 'interactive-quiz',
    title: '知識檢測：國際市場策略',
    questions: [
      {
        question: '波爾多葡萄酒進入中國市場時，面臨的最大挑戰是什麼？',
        options: [
          '中國消費者不喜歡葡萄酒',
          '文化適應與消費習慣差異',
          '中國沒有進口渠道',
          '價格過低無法獲利'
        ],
        correct: 1,
        explanation: '根據課程內容，文化適應是進入中國市場的最大挑戰。包括將葡萄酒融入中式餐飲場景、理解送禮文化、適應商務宴請習慣等，需要深入的文化洞察和本地化策略。'
      },
      {
        question: '在國際市場拓展中，「戰略聯盟」模式的核心優勢是？',
        options: [
          '完全掌控市場運營',
          '利用合作夥伴的本地資源降低風險',
          '無需任何投資',
          '可以忽略文化差異'
        ],
        correct: 1,
        explanation: '戰略聯盟模式通過與當地合作夥伴合作，可以利用其市場知識、渠道資源、文化理解和政府關係，大幅降低市場進入風險並提高成功率，是新興市場拓展的最佳策略。'
      }
    ]
  },

  // 第四章：數位化商業創新
  {
    type: 'chapter-divider',
    chapter: '4',
    title: '數位化商業創新',
    subtitle: '科技驅動的商業模式革新',
    icon: '💻',
    background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'
  },
  
  {
    type: 'content',
    title: '電子商務與數位化轉型',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🛒 電商平台發展策略</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:8px;">
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:10px;">
              <div style="font-size:16px;text-align:center;margin-bottom:4px;">🏪</div>
              <div style="font-size:11px;font-weight:700;color:#1e3a8a;text-align:center;margin-bottom:6px;">自有電商平台</div>
              <div style="font-size:10px;color:#1d4ed8;line-height:1.6;">
                <div>• 高品質產品展示</div>
                <div>• 即時庫存管理</div>
                <div>• AR/VR虛擬品鑑</div>
                <div>• 會員積分系統</div>
                <div>• 品牌體驗完整掌控</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:10px;padding:10px;">
              <div style="font-size:16px;text-align:center;margin-bottom:4px;">🌐</div>
              <div style="font-size:11px;font-weight:700;color:#14532d;text-align:center;margin-bottom:6px;">第三方平台合作</div>
              <div style="font-size:10px;color:#166534;line-height:1.6;">
                <div>• Amazon/天貓綜合平台</div>
                <div>• 專業酒類垂直平台</div>
                <div>• 巨大流量引入</div>
                <div>• 品牌旗艦店差異化</div>
                <div>• 精準客群觸達</div>
              </div>
            </div>
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:10px;padding:10px;">
              <div style="font-size:16px;text-align:center;margin-bottom:4px;">📱</div>
              <div style="font-size:11px;font-weight:700;color:#581c87;text-align:center;margin-bottom:6px;">社交電商整合</div>
              <div style="font-size:10px;color:#7e22ce;line-height:1.6;">
                <div>• 微信/Instagram電商</div>
                <div>• 直播銷售模式</div>
                <div>• KOL網紅帶貨</div>
                <div>• 社交裂變傳播</div>
                <div>• O2O線上線下整合</div>
              </div>
            </div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div>
            <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🤖 AI 人工智能應用</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #c026d3;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#701a75;margin-bottom:4px;">📈 需求預測</div>
                <div style="font-size:10px;color:#86198f;line-height:1.5;display:grid;grid-template-columns:1fr 1fr;gap:2px;">
                  <div>• 歷史銷售數據分析</div><div>• 季節性因素模型</div>
                  <div>• 市場趨勢指標</div><div>• 智能庫存計劃</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#1e3a8a;margin-bottom:4px;">🎯 精準營銷</div>
                <div style="font-size:10px;color:#1d4ed8;line-height:1.5;display:grid;grid-template-columns:1fr 1fr;gap:2px;">
                  <div>• 機器學習客戶分群</div><div>• 動態行為標籤</div>
                  <div>• 個性化郵件內容</div><div>• 智能推薦引擎</div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #16a34a;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:4px;">🤖 智能客服</div>
                <div style="font-size:10px;color:#166534;line-height:1.5;display:grid;grid-template-columns:1fr 1fr;gap:2px;">
                  <div>• 常見問題自動回答</div><div>• 多語言即時翻譯</div>
                  <div>• 品酒建議推薦</div><div>• 搭配建議自動生成</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">🚀 新興技術應用</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#7c2d12;margin-bottom:4px;">🥽 AR/VR 沉浸式體驗</div>
                <div style="font-size:10px;color:#9a3412;line-height:1.5;">
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;">
                    <div>• 360度虛擬酒莊參訪</div><div>• 釀造過程沉浸展示</div>
                    <div>• 酒標信息AR顯示</div><div>• 虛擬品鑑品酒筆記</div>
                  </div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#92400e;margin-bottom:4px;">🔗 區塊鏈溯源</div>
                <div style="font-size:10px;color:#78350f;line-height:1.5;">
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;">
                    <div>• 不可篡改生產記錄</div><div>• 供應鏈透明化</div>
                    <div>• 防偽真品驗證</div><div>• 收藏品數位證書</div>
                  </div>
                </div>
              </div>
              <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:9px;padding:9px;">
                <div style="font-size:11px;font-weight:700;color:#14532d;margin-bottom:4px;">🌐 物聯網整合</div>
                <div style="font-size:10px;color:#166534;line-height:1.5;">
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;">
                    <div>• 智能倉儲溫濕度監控</div><div>• 庫存即時追蹤</div>
                    <div>• 智能酒櫃管理</div><div>• 品質狀態預警</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '💻',
        title: '電商革命',
        content: '從自有平台到全渠道整合，電子商務正在重塑葡萄酒零售模式'
      },
      {
        id: 2,
        icon: '🤖',
        title: 'AI賦能',
        content: '人工智能在需求預測、精準營銷和客戶服務方面帶來革命性改變'
      }
    ],
    hasMap: false,
    interactiveElements: [
      {
        type: 'digital-transformation-roadmap',
        title: '數位化轉型路線圖',
        data: {
          phases: ['基礎建設', '平台整合', 'AI應用', '新興技術'],
          technologies: ['電商平台', '數據分析', '人工智能', 'AR/VR'],
          benefits: ['效率提升', '客戶體驗', '精準營銷', '創新服務']
        }
      }
    ]
  },

  // 總結
  {
    type: 'content',
    title: '課程總結：商業智慧的核心要素',
    content: `
      <div style="font-family:sans-serif;padding:4px 0;">

        <div style="margin-bottom:14px;">
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">💼 商業成功的四大支柱</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:11px;padding:12px;">
              <div style="font-size:22px;text-align:center;margin-bottom:6px;">🎯</div>
              <div style="font-size:12px;font-weight:700;color:#1e3a8a;text-align:center;margin-bottom:6px;">精準的市場洞察</div>
              <div style="font-size:10.5px;color:#1d4ed8;line-height:1.6;text-align:center;">深度理解目標客戶需求，準確把握市場趨勢，是制定有效商業策略的基礎</div>
            </div>
            <div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #f97316;border-radius:11px;padding:12px;">
              <div style="font-size:22px;text-align:center;margin-bottom:6px;">🏷️</div>
              <div style="font-size:12px;font-weight:700;color:#7c2d12;text-align:center;margin-bottom:6px;">差異化的品牌價值</div>
              <div style="font-size:10.5px;color:#9a3412;line-height:1.6;text-align:center;">建立獨特的品牌定位，創造難以複製的競爭優勢，是長期成功的保證</div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #22c55e;border-radius:11px;padding:12px;">
              <div style="font-size:22px;text-align:center;margin-bottom:6px;">🌍</div>
              <div style="font-size:12px;font-weight:700;color:#14532d;text-align:center;margin-bottom:6px;">全球化的視野格局</div>
              <div style="font-size:10.5px;color:#166534;line-height:1.6;text-align:center;">在保持本土特色的同時，適應全球市場需求，實現可持續的國際化發展</div>
            </div>
            <div style="background:linear-gradient(135deg,#fdf4ff,#fae8ff);border:1px solid #a855f7;border-radius:11px;padding:12px;">
              <div style="font-size:22px;text-align:center;margin-bottom:6px;">💻</div>
              <div style="font-size:12px;font-weight:700;color:#581c87;text-align:center;margin-bottom:6px;">數位化的創新能力</div>
              <div style="font-size:10.5px;color:#7e22ce;line-height:1.6;text-align:center;">擁抱新技術，持續創新商業模式，在數位化時代保持競爭力</div>
            </div>
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">💡 策略性思考三大框架</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #f59e0b;border-radius:10px;padding:11px;">
              <div style="font-size:18px;text-align:center;margin-bottom:4px;">📊</div>
              <div style="font-size:11px;font-weight:700;color:#92400e;text-align:center;margin-bottom:6px;">數據驅動決策</div>
              <div style="font-size:10px;color:#78350f;line-height:1.6;">建立完善的數據收集和分析體系，讓商業決策建立在客觀數據基礎上，減少主觀判斷風險</div>
            </div>
            <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #16a34a;border-radius:10px;padding:11px;">
              <div style="font-size:18px;text-align:center;margin-bottom:4px;">🔄</div>
              <div style="font-size:11px;font-weight:700;color:#14532d;text-align:center;margin-bottom:6px;">敏捷應變能力</div>
              <div style="font-size:10px;color:#166534;line-height:1.6;">在快速變化的市場環境中，保持組織的靈活性和快速應變能力，及時調整策略方向</div>
            </div>
            <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #3b82f6;border-radius:10px;padding:11px;">
              <div style="font-size:18px;text-align:center;margin-bottom:4px;">🤝</div>
              <div style="font-size:11px;font-weight:700;color:#1e3a8a;text-align:center;margin-bottom:6px;">生態系統思維</div>
              <div style="font-size:10px;color:#1d4ed8;line-height:1.6;">不僅關注自身發展，更要建立和維護健康的產業生態系統，與合作夥伴共同成長</div>
            </div>
          </div>
        </div>

      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '💼',
        title: '成功要素',
        content: '市場洞察、品牌價值、全球視野和數位創新是商業成功的四大支柱'
      },
      {
        id: 2,
        icon: '🔮',
        title: '未來展望',
        content: '在傳承與創新之間找到平衡，是波爾多葡萄酒業未來發展的關鍵'
      }
    ]
  },

  // 綜合測驗
  {
    type: 'interactive-quiz',
    title: '綜合測驗：商業分析與市場策略',
    questions: [
      {
        id: 1,
        question: '波爾多葡萄酒產業價值鏈中，利潤分配最高的環節通常是？',
        options: [
          '葡萄種植環節',
          '釀造和陳年環節',
          '零售銷售環節',
          '物流運輸環節'
        ],
        correct: 2,
        explanation: '在波爾多葡萄酒產業價值鏈中，零售商通常獲得35-50%的利潤分配，是利潤率最高的環節，這反映了終端銷售的重要價值。'
      },
      {
        id: 2,
        question: '針對中國市場的文化適應策略中，最重要的考量因素是？',
        options: [
          '價格競爭優勢',
          '禮品文化和數位化偏好',
          '產品技術規格',
          '物流配送速度'
        ],
        correct: 1,
        explanation: '中國市場具有濃厚的禮品文化和強烈的數位化偏好，成功的本土化策略需要重點考慮精美包裝、節慶營銷和數位化銷售渠道。'
      },
      {
        id: 3,
        question: '全渠道整合策略(Omnichannel)的核心價值在於？',
        options: [
          '降低營運成本',
          '提供無縫的客戶體驗',
          '減少庫存壓力',
          '簡化管理流程'
        ],
        correct: 1,
        explanation: '全渠道整合策略的核心在於整合線上線下資源，為客戶提供一致且無縫的購買體驗，讓客戶可以自由選擇最適合的接觸和購買方式。'
      },
      {
        id: 4,
        question: 'AI在葡萄酒商業應用中，最具發展潛力的領域是？',
        options: [
          '完全替代人工釀酒',
          '需求預測和精準營銷',
          '降低生產成本',
          '加快陳年過程'
        ],
        correct: 1,
        explanation: 'AI在需求預測和精準營銷方面具有最大潛力，可以通過分析大量數據來預測市場需求、識別客戶偏好，並實現個性化的營銷策略。'
      },
      {
        id: 5,
        question: '波爾多葡萄酒企業進入新興市場的最佳策略是？',
        options: [
          '完全依賴價格競爭',
          '複製成熟市場模式',
          '與當地合作夥伴建立戰略聯盟',
          '僅使用線上銷售渠道'
        ],
        correct: 2,
        explanation: '進入新興市場最佳策略是與當地合作夥伴建立戰略聯盟，利用合作夥伴的市場知識、渠道資源和文化理解，降低市場進入風險並提高成功率。'
      }
    ],
    passingScore: 80,
    timeLimit: 300
  }
];

export default l39Content;
