// L3-7: 傳統釀造工藝與基礎技術
// 探索波爾多數百年傳承的釀造工藝精髓

export const l37Content = [
  // 封面頁
  {
    type: 'cover',
    title: '傳統釀造工藝與基礎技術',
    subtitle: 'Level 3 - 課程 7',
    background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
    icon: '🏺'
  },

  // 課程簡介
  {
    type: 'intro',
    title: '課程導讀',
    content: '波爾多葡萄酒的卓越品質源於數百年傳承的釀造工藝精髓。本課程將深入探討傳統釀造工藝的核心理念、經典流程，以及橡木桶工藝的藝術，讓您理解這些傳統技術如何成就波爾多葡萄酒的獨特品質與風格。',
    duration: '預計學習時間：30分鐘',
    level: '高級專業',
    objectives: [
      {
        id: 1,
        text: '全面理解波爾多傳統釀造工藝的精髓與核心理念',
        icon: '🏺'
      },
      {
        id: 2,
        text: '掌握從採收到發酵的經典釀造流程與技術要點',
        icon: '🍇'
      },
      {
        id: 3,
        text: '學習傳統橡木桶工藝的選擇、製作與使用技法',
        icon: '🪵'
      },
      {
        id: 4,
        text: '分析傳統工藝對葡萄酒品質與風格的深遠影響',
        icon: '📊'
      }
    ]
  },

  // 第一章：傳統釀造工藝基礎
  {
    type: 'chapter',
    title: '第一章：傳統釀造工藝基礎',
    subtitle: '數百年傳承的釀造智慧',
    content: `
      <div class="chapter-content">
        <div class="tradition-foundation">
          <h3>🏺 波爾多傳統釀造哲學</h3>
          <div class="philosophy-grid">
            <div class="philosophy-item">
              <h4>尊重風土</h4>
              <p>最大程度展現葡萄園的獨特性，讓風土在酒中完美表達</p>
            </div>
            <div class="philosophy-item">
              <h4>時間的藝術</h4>
              <p>耐心等待，讓時間成就品質，急不得也趕不得</p>
            </div>
            <div class="philosophy-item">
              <h4>平衡的智慧</h4>
              <p>在各個環節中尋求完美平衡，避免任何極端</p>
            </div>
            <div class="philosophy-item">
              <h4>傳承的責任</h4>
              <p>承接前人智慧，為後代留下寶貴經驗</p>
            </div>
          </div>

          <h3>⚖️ 傳統工藝的核心原則</h3>
          <div class="core-principles">
            <div class="principle-item">
              <h4>1. 最小干預原則</h4>
              <p>• 盡量減少人工干預，讓葡萄自然表達<br>
              • 避免過度處理破壞天然特性<br>
              • 相信大自然的智慧與力量</p>
            </div>
            <div class="principle-item">
              <h4>2. 品質優先原則</h4>
              <p>• 品質永遠勝過產量<br>
              • 嚴格挑選每一顆葡萄<br>
              • 寧缺毋濫的品質堅持</p>
            </div>
            <div class="principle-item">
              <h4>3. 傳統技法原則</h4>
              <p>• 遵循前人驗證的成功方法<br>
              • 保持工藝的純正性<br>
              • 謹慎對待任何改變</p>
            </div>
          </div>
        </div>
      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🏺',
        title: '釀造哲學',
        content: '波爾多傳統釀造強調尊重風土、時間藝術、平衡智慧和傳承責任'
      },
      {
        id: 2,
        icon: '⚖️',
        title: '核心原則',
        content: '最小干預、品質優先和傳統技法是傳統釀造工藝的三大核心原則'
      }
    ],
    hasMap: false,
    interactiveElements: [
      {
        type: 'philosophy-wheel',
        title: '傳統釀造哲學輪盤',
        data: {
          concepts: ['尊重風土', '時間藝術', '平衡智慧', '傳承責任'],
          principles: ['最小干預', '品質優先', '傳統技法']
        }
      }
    ]
  },

  // 第二章：傳統採收與處理
  {
    type: 'chapter',
    title: '第二章：傳統採收與處理',
    subtitle: '從葡萄園到酒窖的第一步',
    content: `
      <div class="chapter-content">
        <div class="harvest-processing">
          <h3>🍇 手工採收的藝術</h3>
          <div class="harvest-details">
            <div class="timing-section">
              <h4>📅 最佳採收時機判斷</h4>
              <div class="timing-factors">
                <div class="factor-item">
                  <h5>糖分測量</h5>
                  <p>• 折光儀測量Brix值：22-25°<br>
                  • 不同品種略有差異<br>
                  • 每日監測變化趨勢</p>
                </div>
                <div class="factor-item">
                  <h5>酸度檢測</h5>
                  <p>• 總酸度：6-8g/L<br>
                  • pH值：3.2-3.6<br>
                  • 酸糖平衡是關鍵</p>
                </div>
                <div class="factor-item">
                  <h5>單寧成熟度</h5>
                  <p>• 種子由綠轉褐色<br>
                  • 果皮單寧柔化<br>
                  • 口感判斷不可替代</p>
                </div>
                <div class="factor-item">
                  <h5>感官評估</h5>
                  <p>• 釀酒師經驗判斷<br>
                  • 風味平衡評估<br>
                  • 天氣預報考量</p>
                </div>
              </div>
            </div>

            <div class="method-section">
              <h4>👐 手工採收優勢</h4>
              <div class="advantages-grid">
                <div class="advantage-item">
                  <h5>🎯 品質控制</h5>
                  <p>採收者可即時判斷和挑選，去除病果、未熟果和過熟果</p>
                </div>
                <div class="advantage-item">
                  <h5>🛡️ 果實保護</h5>
                  <p>小籃子運輸，避免葡萄在重量壓迫下破損</p>
                </div>
                <div class="advantage-item">
                  <h5>⏰ 分批靈活</h5>
                  <p>可根據成熟度差異進行分批分區採收</p>
                </div>
                <div class="advantage-item">
                  <h5>🌡️ 溫度管理</h5>
                  <p>清晨採收保持低溫，保護香氣化合物</p>
                </div>
              </div>
            </div>
          </div>

          <h3>🍷 傳統處理工藝</h3>
          <div class="processing-steps">
            <div class="step-detail">
              <h4>除梗與破皮</h4>
              <div class="process-options">
                <div class="option-item">
                  <h5>100% 除梗</h5>
                  <p>• 避免青澀單寧<br>
                  • 適合大多數情況<br>
                  • 保持酒款純淨</p>
                </div>
                <div class="option-item">
                  <h5>部分保留果梗</h5>
                  <p>• 增加結構複雜度<br>
                  • 5-20% 保留比例<br>
                  • 需要完全成熟的果梗</p>
                </div>
              </div>
              <div class="crushing-technique">
                <h5>💪 溫和破皮技術</h5>
                <p>• 保護果粒完整性，避免過度擠壓<br>
                • 控制自由流汁與壓榨汁的比例<br>
                • 溫度控制防止早期發酵開始</p>
              </div>
            </div>

            <div class="step-detail">
              <h4>傳統澄清方法</h4>
              <div class="clarification-techniques">
                <div class="technique-item">
                  <h5>🌊 自然沉澱</h5>
                  <p>利用重力作用，讓雜質自然下沉，需要24-48小時耐心等待</p>
                </div>
                <div class="technique-item">
                  <h5>🔄 人工換桶</h5>
                  <p>小心將清液轉移到新容器，避免攪動底部沉澱物</p>
                </div>
                <div class="technique-item">
                  <h5>🥚 蛋白澄清</h5>
                  <p>使用新鮮蛋白進行天然澄清，古老而有效的傳統方法</p>
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
        icon: '🍇',
        title: '採收藝術',
        content: '最佳採收時機需要科學測量與豐富經驗的完美結合'
      },
      {
        id: 2,
        icon: '🍷',
        title: '處理工藝',
        content: '除梗破皮和傳統澄清為優質發酵奠定堅實基礎'
      }
    ],
    hasMap: false,
    interactiveElements: [
      {
        type: 'harvest-simulator',
        title: '採收決策模擬器',
        data: {
          parameters: ['糖分', '酸度', '單寧', '天氣'],
          varieties: ['Cabernet Sauvignon', 'Merlot', 'Cabernet Franc']
        }
      }
    ]
  },

  // 第三章：天然發酵工藝
  {
    type: 'chapter',
    title: '第三章：天然發酵工藝',
    subtitle: '野生酵母的自然魅力',
    content: `
      <div class="chapter-content">
        <div class="natural-fermentation">
          <h3>🧪 天然酵母發酵</h3>
          <div class="yeast-fermentation">
            <div class="yeast-benefits">
              <h4>野生酵母的獨特優勢</h4>
              <div class="benefit-grid">
                <div class="benefit-card">
                  <h5>🌿 複雜性創造</h5>
                  <p>• 多種酵母菌株同時作用<br>
                  • 創造層次豐富的風味輪廓<br>
                  • 每年發酵略有不同特色</p>
                </div>
                <div class="benefit-card">
                  <h5>🏞️ 風土表達</h5>
                  <p>• 反映當地微生物環境特色<br>
                  • 展現葡萄園獨特性<br>
                  • 真正的在地風味印記</p>
                </div>
                <div class="benefit-card">
                  <h5>⏰ 自然節奏</h5>
                  <p>• 緩慢溫和的發酵過程<br>
                  • 保護細膩香氣化合物<br>
                  • 順應自然發酵規律</p>
                </div>
                <div class="benefit-card">
                  <h5>📜 歷史傳承</h5>
                  <p>• 保持歷史風格延續性<br>
                  • 承襲祖先釀造智慧<br>
                  • 維護傳統特色風格</p>
                </div>
              </div>
            </div>

            <div class="fermentation-management">
              <h4>🎯 發酵過程管理</h4>
              <div class="management-aspects">
                <div class="aspect-item">
                  <h5>🌡️ 溫度控制</h5>
                  <p>• <strong>理想範圍：</strong>26-30°C<br>
                  • <strong>品種差異：</strong>Cabernet稍高，Merlot稍低<br>
                  • <strong>自然調節：</strong>依靠酒窖溫度和發酵熱<br>
                  • <strong>避免極端：</strong>防止過高或過低溫度</p>
                </div>
                <div class="aspect-item">
                  <h5>🔄 淋皮技術</h5>
                  <p>• <strong>人工淋皮：</strong>泵將汁液從底部抽到頂部<br>
                  • <strong>頻率控制：</strong>每日2-3次適中頻率<br>
                  • <strong>力度調節：</strong>溫和循環保護果粒<br>
                  • <strong>時機掌握：</strong>發酵旺盛期增加頻率</p>
                </div>
                <div class="aspect-item">
                  <h5>🏺 壓帽管理</h5>
                  <p>• <strong>定期破碎：</strong>防止果皮帽過度乾燥<br>
                  • <strong>人工操作：</strong>使用傳統木質工具<br>
                  • <strong>輕柔處理：</strong>避免破壞果粒結構<br>
                  • <strong>頻率適中：</strong>每日1-2次即可</p>
                </div>
              </div>
            </div>
          </div>

          <h3>🍾 蘋果酸乳酸發酵</h3>
          <div class="malolactic-section">
            <div class="mlf-process">
              <h4>MLF的自然進行</h4>
              <div class="process-timeline">
                <div class="timeline-step">
                  <h5>1️⃣ 自然啟動</h5>
                  <p>依靠環境中的天然乳酸菌，通常在主發酵完成後開始</p>
                </div>
                <div class="timeline-step">
                  <h5>2️⃣ 環境營造</h5>
                  <p>維持18-22°C適宜溫度，避免使用二氧化硫抑制</p>
                </div>
                <div class="timeline-step">
                  <h5>3️⃣ 過程監控</h5>
                  <p>定期檢測蘋果酸含量，觀察發酵活躍程度</p>
                </div>
                <div class="timeline-step">
                  <h5>4️⃣ 完成確認</h5>
                  <p>蘋果酸完全轉化，口感變得圓潤，停止冒泡</p>
                </div>
              </div>
            </div>

            <div class="mlf-benefits">
              <h4>📈 MLF對酒質的改善</h4>
              <div class="benefit-analysis">
                <div class="analysis-item">
                  <h5>🔽 酸度調節</h5>
                  <p>將尖銳的蘋果酸轉化為柔和的乳酸，降低總酸度，提升平衡感</p>
                </div>
                <div class="analysis-item">
                  <h5>🛡️ 微生物穩定</h5>
                  <p>消耗殘糖和營養物質，防止瓶中二次發酵</p>
                </div>
                <div class="analysis-item">
                  <h5>🌸 風味複雜化</h5>
                  <p>產生雙乙酰等化合物，帶來奶油、香草、堅果等香氣</p>
                </div>
                <div class="analysis-item">
                  <h5>👄 口感改善</h5>
                  <p>單寧變得柔順，酒體更加圓潤易飲</p>
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
        icon: '🧪',
        title: '天然發酵',
        content: '野生酵母發酵帶來獨特的複雜性和真正的風土表達'
      },
      {
        id: 2,
        icon: '🍾',
        title: 'MLF工藝',
        content: '蘋果酸乳酸發酵為葡萄酒帶來柔順口感和風味複雜度'
      }
    ],
    hasMap: false,
    interactiveElements: [
      {
        type: 'fermentation-monitor',
        title: '發酵過程監控面板',
        data: {
          stages: ['酒精發酵', 'MLF', '澄清', '初次換桶'],
          parameters: ['溫度', '糖分', '酸度', '活躍度']
        }
      }
    ]
  },

  // 第四章：橡木桶傳統工藝
  {
    type: 'chapter',
    title: '第四章：橡木桶傳統工藝',
    subtitle: '法國橡木的藝術與智慧',
    content: `
      <div class="chapter-content">
        <div class="oak-tradition">
          <h3>🌳 法國橡木產區特性</h3>
          <div class="oak-regions">
            <div class="region-comparison">
              <div class="region-detail">
                <h4>🍂 Allier橡木</h4>
                <div class="region-info">
                  <p><strong>地理位置：</strong>法國中央高原</p>
                  <p><strong>氣候特點：</strong>涼爽大陸性氣候</p>
                  <p><strong>木材特性：</strong>密度高，紋理細密</p>
                  <p><strong>風味貢獻：</strong>細緻香草、花香、甜香料</p>
                  <p><strong>單寧特性：</strong>優雅細膩，口感絲滑</p>
                  <p><strong>適用酒款：</strong>精緻紅酒、高級白酒</p>
                </div>
              </div>
              <div class="region-detail">
                <h4>🌿 Vosges橡木</h4>
                <div class="region-info">
                  <p><strong>地理位置：</strong>法國東北部山區</p>
                  <p><strong>氣候特點：</strong>濕潤山地氣候</p>
                  <p><strong>木材特性：</strong>結構緊密，萃取緩慢</p>
                  <p><strong>風味貢獻：</strong>濃郁果香、香料味、可可</p>
                  <p><strong>單寧特性：</strong>結構較強，支撐力好</p>
                  <p><strong>適用酒款：</strong>Cabernet Sauvignon、強勁紅酒</p>
                </div>
              </div>
            </div>
          </div>

          <h3>🔨 傳統製桶工藝</h3>
          <div class="barrel-craftsmanship">
            <div class="craft-process">
              <h4>手工製桶步驟</h4>
              <div class="craft-timeline">
                <div class="craft-step">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <h5>木材精選</h5>
                    <p>經驗豐富的製桶師傅根據紋理、色澤、香氣挑選最佳木材</p>
                  </div>
                </div>
                <div class="craft-step">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <h5>精確切割</h5>
                    <p>根據桶體曲線計算角度，每片橡木條形狀獨特</p>
                  </div>
                </div>
                <div class="craft-step">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <h5>蒸汽彎曲</h5>
                    <p>利用水蒸氣軟化纖維，手工彎曲成型</p>
                  </div>
                </div>
                <div class="craft-step">
                  <div class="step-number">4</div>
                  <div class="step-content">
                    <h5>鐵環固定</h5>
                    <p>使用傳統鐵環技術，力度控制需要精準</p>
                  </div>
                </div>
                <div class="craft-step">
                  <div class="step-number">5</div>
                  <div class="step-content">
                    <h5>內部烘烤</h5>
                    <p>控制火候烘烤內壁，影響最終風味</p>
                  </div>
                </div>
                <div class="craft-step">
                  <div class="step-number">6</div>
                  <div class="step-content">
                    <h5>品質檢驗</h5>
                    <p>測試密封性，確保符合最高標準</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="toast-levels">
              <h4>🔥 烘烤程度控制</h4>
              <div class="toast-comparison">
                <div class="toast-option">
                  <h5>輕度烘烤</h5>
                  <div class="toast-specs">
                    <p><strong>時間：</strong>15-20分鐘</p>
                    <p><strong>溫度：</strong>120-140°C</p>
                    <p><strong>風味：</strong>細緻香草、椰子、淡雅花香</p>
                    <p><strong>適用：</strong>精緻白酒、優雅紅酒</p>
                  </div>
                </div>
                <div class="toast-option">
                  <h5>中度烘烤</h5>
                  <div class="toast-specs">
                    <p><strong>時間：</strong>25-35分鐘</p>
                    <p><strong>溫度：</strong>160-180°C</p>
                    <p><strong>風味：</strong>焦糖、香料、烤麵包</p>
                    <p><strong>適用：</strong>波爾多紅酒經典選擇</p>
                  </div>
                </div>
                <div class="toast-option">
                  <h5>重度烘烤</h5>
                  <div class="toast-specs">
                    <p><strong>時間：</strong>40-50分鐘</p>
                    <p><strong>溫度：</strong>200-220°C</p>
                    <p><strong>風味：</strong>濃郁煙燻、咖啡、巧克力</p>
                    <p><strong>適用：</strong>濃厚飽滿的強勁酒款</p>
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
        icon: '🌳',
        title: '橡木選擇',
        content: '不同產區橡木具有獨特特性，需根據酒款風格精心選擇'
      },
      {
        id: 2,
        icon: '🔨',
        title: '製桶工藝',
        content: '手工製桶和烘烤控制是影響最終風味的關鍵技術'
      }
    ],
    hasMap: false,
    interactiveElements: [
      {
        type: 'oak-selector',
        title: '橡木桶配對助手',
        data: {
          regions: ['Allier', 'Vosges'],
          toasts: ['輕度', '中度', '重度'],
          wines: ['Cabernet Sauvignon', 'Merlot', '混釀']
        }
      }
    ]
  },

  // 總結
  {
    type: 'summary',
    title: '課程總結：傳統工藝的價值與傳承',
    content: `
      <div class="summary-content">
        <div class="tradition-value">
          <h3>🏺 傳統工藝的永恆價值</h3>
          <div class="value-pillars">
            <div class="pillar-item">
              <h4>🕰️ 時間驗證的智慧</h4>
              <p>數百年實踐證明了工藝的可靠性，每個步驟都經過無數次驗證</p>
            </div>
            <div class="pillar-item">
              <h4>🌍 風土的真實表達</h4>
              <p>最大程度保護和展現葡萄園獨特性，讓風土在酒中完美呈現</p>
            </div>
            <div class="pillar-item">
              <h4>🎯 品質的可靠保證</h4>
              <p>經過時間考驗的工藝是品質穩定的基礎</p>
            </div>
            <div class="pillar-item">
              <h4>📚 文化的深厚底蘊</h4>
              <p>承載波爾多深厚文化歷史，連接過去與未來</p>
            </div>
          </div>
        </div>

        <div class="practical-wisdom">
          <h3>💡 實踐智慧總結</h3>
          <div class="wisdom-list">
            <ul>
              <li><strong>尊重但不盲從：</strong>理解工藝原理，靈活應用</li>
              <li><strong>質量重於速度：</strong>品質需要時間，耐心是美德</li>
              <li><strong>細節決定成敗：</strong>每個環節都影響最終品質</li>
              <li><strong>傳承與創新：</strong>保持傳統精神，適度接受改進</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🏺',
        title: '永恆價值',
        content: '傳統工藝承載時間智慧、風土表達、品質保證和文化傳承'
      },
      {
        id: 2,
        icon: '💡',
        title: '實踐智慧',
        content: '在保持傳統精神的同時，需要理解原理並靈活應用'
      }
    ]
  },

  // 綜合測驗
  {
    type: 'quiz',
    title: '綜合測驗：傳統釀造工藝',
    questions: [
      {
        id: 1,
        question: '波爾多傳統釀造工藝的核心理念包括哪些？',
        options: [
          '尊重風土、時間藝術、平衡智慧、傳承責任',
          '快速高效、大規模生產、成本控制',
          '技術至上、創新領先、自動化操作',
          '標準化流程、統一品質、批量生產'
        ],
        correct: 0,
        explanation: '波爾多傳統釀造工藝強調尊重風土、耐心等待時間的藝術、在各環節中尋求平衡，以及承接前人智慧的傳承責任。'
      },
      {
        id: 2,
        question: '手工採收相比機器採收的主要優勢是？',
        options: [
          '成本更低，效率更高',
          '可進行即時品質控制和田間挑選',
          '不受天氣條件限制',
          '適合所有規模的葡萄園'
        ],
        correct: 1,
        explanation: '手工採收最大優勢是可以即時進行品質判斷和挑選，去除不良果實，並在小籃中輕柔運輸避免破損。'
      },
      {
        id: 3,
        question: '天然酵母發酵的主要特點是？',
        options: [
          '發酵速度快，容易控制',
          '創造複雜風味，表達風土特色',
          '成本低廉，適合大批量生產',
          '發酵結果完全可預測'
        ],
        correct: 1,
        explanation: '天然酵母發酵雖較難控制，但多種野生酵母菌株能創造複雜風味，更好地表達當地風土特色。'
      },
      {
        id: 4,
        question: 'Allier橡木和Vosges橡木的主要區別？',
        options: [
          'Allier價格更便宜',
          'Allier提供細緻香草味，Vosges提供濃郁果香',
          'Vosges只適合白酒',
          '兩者沒有明顯區別'
        ],
        correct: 1,
        explanation: 'Allier橡木以細緻香草、花香著稱，而Vosges橡木提供更濃郁的果香、香料味，單寧結構也更強。'
      },
      {
        id: 5,
        question: '蘋果酸乳酸發酵對葡萄酒的主要影響？',
        options: [
          '提高酒精度和糖分',
          '降低酸度，增加圓潤口感和奶油香氣',
          '增強顏色和單寧',
          '縮短陳年時間'
        ],
        correct: 1,
        explanation: 'MLF將尖銳蘋果酸轉化為柔和乳酸，同時產生雙乙酰等化合物帶來奶油香氣，使酒款更圓潤。'
      }
    ],
    passingScore: 80,
    timeLimit: 300
  }
];

export default l37Content;
