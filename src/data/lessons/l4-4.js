import { makeL4Lesson } from './l4-shared.js'

export const l44Content = makeL4Lesson({
  cover: {
    title: '成本結構、資本開支與投報',
    subtitle: 'Level 4 - 課程 4',
    background: 'linear-gradient(135deg, #1F1C2C 0%, #928DAB 100%)',
    icon: '💹'
  },
  intro: {
    content: `
      <div class="course-introduction">
        <h3>📚 課程導讀：為何Level 4要學財務與投報？</h3>
        
        <div class="why-this-matters">
          <p>如果釀酒是「創作藝術」，那麼<strong>財務管理就是「讓藝術可持續的骨架」</strong>：</p>
          <ul>
            <li>🎨 沒有財務的釀造 = 窮困藝術家（作品再好也活不下去）</li>
            <li>💰 沒有品質的財務 = 商人（賺錢但沒靈魂）</li>
            <li>✨ 品質+財務並重 = <strong>可持續的頂級酒莊</strong></li>
          </ul>
          <p class="insight">Level 4專家的標誌：<strong>能用數據證明品質投資的價值，讓每一筆支出都有投報邏輯</strong>。</p>
        </div>
        <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L4-4/01%20酒莊財務營運與投報模型.svg" alt="酒莊財務營運與投報模型" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>

        <div class="business-analogy">
          <h4>🏢 生活化比喻：酒莊經營 = 開餐廳</h4>
          <div class="analogy-grid">
            <div class="item">
              <strong>成本地圖</strong> = 知道每道菜的食材、人工、水電成本（不能只憑感覺）
            </div>
            <div class="item">
              <strong>CAPEX</strong> = 買廚房設備、裝潢（大筆投資要算回收期）
            </div>
            <div class="item">
              <strong>盈虧平衡</strong> = 每月要賣幾份套餐才不虧本（安全邊際=淡季緩衝）
            </div>
            <div class="item">
              <strong>敏感度分析</strong> = 食材漲10%或客單價降5%，對利潤影響多大？
            </div>
            <div class="item">
              <strong>投報評估</strong> = 花€50k買機器人送餐，能省多少人工？多久回本？
            </div>
          </div>
          <p class="insight">酒莊經營和餐廳一樣：<strong>不管理成本的老闆，遲早關門</strong>。</p>
        </div>

        <div class="course-structure">
          <h4>🏗️ 本課程的五大財務支柱：</h4>
          <div class="pillar-grid">
            <div class="pillar">
              <span class="icon">💼</span>
              <strong>成本地圖</strong>
              <p>固定vs變動成本、ABC成本法→ 知道每瓶酒的「真實成本」</p>
            </div>
            <div class="pillar">
              <span class="icon">🏗️</span>
              <strong>CAPEX計畫</strong>
              <p>買設備、建設施的大筆投資→ 要算折舊、現金流、融資策略</p>
            </div>
            <div class="pillar">
              <span class="icon">📈</span>
              <strong>盈虧平衡</strong>
              <p>要賣幾瓶才不虧？安全邊際有多少？→ 定價與銷量目標設定</p>
            </div>
            <div class="pillar">
              <span class="icon">📉</span>
              <strong>敏感度分析</strong>
              <p>價格/成本/產量變動10%，利潤變多少？→ 找到關鍵槓桿點</p>
            </div>
            <div class="pillar">
              <span class="icon">💹</span>
              <strong>投報評估</strong>
              <p>品質升級、旅遊中心、永續改造→ 哪個投資最值得？IRR/NPV怎麼算？</p>
            </div>
          </div>
        </div>

        <div class="learning-approach">
          <h4>💡 如何學習本課程？</h4>
          <ol>
            <li><strong>不要被公式嚇到</strong>：IRR、NPV看起來複雜，但邏輯很簡單：「這筆投資划算嗎？」</li>
            <li><strong>建立商業直覺</strong>：每個財務指標都對應一個商業問題（盈虧平衡=最少要賣幾瓶？）</li>
            <li><strong>用互動工具實驗</strong>：本課程有情境模擬器，調整價格/成本看利潤如何變化</li>
            <li><strong>連結前面章節</strong>：L4-3的容器投資，要用本課的IRR/NPV方法評估</li>
          </ol>
        </div>

        <div class="critical-mindset">
          <h4>🎯 本課程的核心思維：</h4>
          <div class="mindset-box">
            <p><strong>財務不是「算完就忘的作業」，而是「持續優化的儀表板」</strong></p>
            <ul>
              <li>✓ 每月review成本結構，找降本機會</li>
              <li>✓ 每季檢視盈虧平衡，調整定價策略</li>
              <li>✓ 每年評估CAPEX投報，砍掉不值得的專案</li>
            </ul>
            <p class="insight">頂級酒莊不是「不在乎錢」，而是「<strong>精準知道錢花在哪、創造什麼價值</strong>」。</p>
          </div>
        </div>

        <p class="final-note">⚠️ <strong>重要提醒</strong>：本課程不是「會計課」，而是「<strong>用財務工具做決策的課</strong>」。你不需要成為CFO，但要能看懂財務報表、判斷投資是否值得、用數據說服投資人或銀行。掌握本課後，你能像專業酒莊經理人一樣，平衡品質追求與財務紀律。</p>
      </div>
    `
  },
  objectives: [
    { id: 1, text: '建立固定/變動成本與活動成本架構，支援單位經濟計算', icon: '�' },
    { id: 2, text: '規畫資本開支、折舊策略與資產壽命，連結現金流', icon: '🏗️' },
    { id: 3, text: '運用盈虧平衡與敏感度分析量化價格、產量與成本變化', icon: '🧮' },
    { id: 4, text: '評估品質投資的 IRR (Internal Rate of Return) / NPV (Net Present Value) 與無形效益，制定投報門檻', icon: '🎯' }
  ],
  chapters: [
    {
      title: '第一章：成本地圖與資料基礎',
      nav: '成本地圖',
      icon: '💼',
      highlightDelayStep: '0.06s',
      html: `
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>💡 概念入門：成本地圖 = 身體健康檢查</h3>
            
            <div class="analogy-box">
              <h4>🏥 生活化比喻：成本管理就像健康管理</h4>
              <p>管理酒莊成本就像管理身體健康：</p>
              <ul>
                <li><strong>固定成本</strong> = 基礎代謝率（不管動不動都要消耗，像房租、固定人工）</li>
                <li><strong>變動成本</strong> = 運動消耗（做越多消耗越多，像葡萄、包材、物流）</li>
                <li><strong>半變動成本</strong> = 健身房會費（有基本費+超時加價，像桶材有基本折舊+超量採購）</li>
              </ul>
              <p class="insight">就像減重要先知道「吃什麼、消耗多少」，降成本要先有<strong>成本地圖</strong>。不知道錢花在哪，就像不知道熱量來源。</p>
            </div>

            <div class="term-explanation">
              <h4>🔑 專業術語白話解釋</h4>
              <table class="term-table">
                <tr>
                  <td><strong>固定成本（Fixed Cost）</strong></td>
                  <td>= 不管生產多少都要付的錢。葡萄園租金、固定員工薪水、設備折舊</td>
                </tr>
                <tr>
                  <td><strong>變動成本（Variable Cost）</strong></td>
                  <td>= 生產越多，成本越高。葡萄採購、瓶子、軟木塞、標籤、電費</td>
                </tr>
                <tr>
                  <td><strong>ABC成本法</strong></td>
                  <td>= Activity-Based Costing = 按「活動」分攤成本。不是籠統說「人工€100k」，而是「葡萄處理€69.6/噸、釀造監控€1,979/批次」</td>
                </tr>
                <tr>
                  <td><strong>單位成本</strong></td>
                  <td>= 每瓶酒的成本。總成本 ÷ 總瓶數 = 單位成本（用來定價）</td>
                </tr>
                <tr>
                  <td><strong>成本驅動因子</strong></td>
                  <td>= 什麼因素導致成本增加？葡萄處理的驅動因子=處理重量、發酵的驅動因子=批次數</td>
                </tr>
              </table>
            </div>

            <div class="abc-concept">
              <h4>📊 為何需要ABC成本法？</h4>
              <p><strong>傳統成本法問題</strong>：把所有間接成本（人工、水電）平均分攤到每瓶酒→ 高端酒成本被低估，入門酒成本被高估</p>
              <p><strong>ABC成本法優勢</strong>：按「活動」分配成本 → 知道「手工分選」、「橡木桶陳年」等高成本活動，真正花在哪些酒上</p>
              <div class="example-box">
                <p><strong>例子</strong>：</p>
                <ul>
                  <li>旗艦酒：手工分選（€5/瓶）+ 新橡木桶18個月（€8/瓶）= 真實成本€13/瓶</li>
                  <li>入門酒：機器分選（€0.8/瓶）+ 不鏽鋼槽（€0.5/瓶）= 真實成本€1.3/瓶</li>
                </ul>
                <p class="insight">傳統方法可能平均算€7/瓶 → 旗艦酒賣虧、入門酒多賺（但不知道！）</p>
              </div>
            </div>

            <div class="reading-guide">
              <h4>📖 如何閱讀下方的成本表格？</h4>
              <ol>
                <li><strong>先看類型</strong>：固定成本=基本開銷、變動成本=隨產量變化</li>
                <li><strong>找大頭</strong>：哪項成本最高？（通常是葡萄、人工、桶材）</li>
                <li><strong>看成本驅動</strong>：這項成本受什麼影響？（產量？批次？面積？）</li>
                <li><strong>思考優化</strong>：能降低嗎？（自動化→降人工、長期合約→降葡萄成本）</li>
              </ol>
              <p class="tip">💡 <strong>記憶技巧</strong>：固定成本=房租型（不管賣不賣都要付），變動成本=食材型（賣越多用越多）</p>
            </div>
          </div>

          <h3>固定成本 vs 變動成本</h3>
          <table class="data-table">
            <thead>
              <tr><th>項目</th><th>類型</th><th>年度金額</th><th>成本驅動</th><th>備註</th></tr>
            </thead>
            <tbody>
              <tr><td>葡萄園租金/折舊</td><td>固定</td><td>€420k</td><td>地塊面積</td><td>每年固定，需配合 CAPEX 計畫</td></tr>
              <tr><td>人工（臨時採收）</td><td>變動</td><td>€180k</td><td>採收時數</td><td>受產量與成熟批次影響</td></tr>
              <tr><td>桶材耗損</td><td>半變動</td><td>€95k</td><td>桶齡/批次</td><td>依使用年數與品質定位調整</td></tr>
              <tr><td>能源與公用事業</td><td>變動</td><td>€130k</td><td>發酵槽數/冷卻負荷</td><td>可藉溫控與夜間用電最適化</td></tr>
            </tbody>
          </table>
          <h3>活動式成本計算（ABC）</h3>
          <p>將成本依活動分組，建立更精準的單位成本。</p>
          <table class="data-table compact">
            <thead>
              <tr><th>活動池</th><th>年度成本</th><th>成本動因</th><th>動因量</th><th>單位成本</th></tr>
            </thead>
            <tbody>
              <tr><td>葡萄處理</td><td>€160k</td><td>處理重量</td><td>2,300 t</td><td>€69.6/t</td></tr>
              <tr><td>釀造監控</td><td>€95k</td><td>發酵批次</td><td>48 批</td><td>€1,979/批</td></tr>
              <tr><td>桶陳管理</td><td>€120k</td><td>桶月</td><td>1,800 桶月</td><td>€66.7/桶月</td></tr>
              <tr><td>裝瓶/包材</td><td>€210k</td><td>裝瓶瓶數</td><td>420k 瓶</td><td>€0.50/瓶</td></tr>
            </tbody>
          </table>
          <h3>單位經濟資料管線</h3>
          <p class="subhead">資料來源</p>
          <ul>
            <li>ERP：原物料、人工時數、能源用量。</li>
            <li>WMS：成品/在製品庫存與損耗。</li>
            <li>財務系統：折舊、利息、稅負。</li>
          </ul>
          <p class="subhead">彙整流程</p>
          <ol>
            <li>逐月匯入成本 → 活動池 → 單位成本。</li>
            <li>結合銷售資料計算毛利、貢獻毛利與盈虧平衡。</li>
            <li>建立儀表板：原料、人工、包材、物流四大指標。</li>
          </ol>
          <h3>案例：左岸酒莊成本剖析</h3>
          <p class="subhead">洞察</p>
          <p>桶陳管理活動成本占比 18%，高於同業平均 12%。</p>
          <p class="subhead">行動</p>
          <ul>
            <li>桶齡輪替優化：延長 25% 桶齡至 4 年，轉入中性桶。</li>
            <li>導入物聯網桶感測，降低人工巡檢工時 30%。</li>
          </ul>
          <p class="subhead">結果</p>
          <p>桶陳活動成本下降至 €88k/年，單位成本降低 €8/瓶。</p>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🧾', title: 'ABC 成本池', content: '將成本分為活動池，讓單位經濟計算更精準。' },
        { id: 2, icon: '🔍', title: '資料管線', content: 'ERP + WMS + 財務系統建置成本儀表板。' },
        { id: 3, icon: '📉', title: '案例降本', content: '桶陳管理優化後，每瓶成本降低 €8。' }
      ]
    },
    {
      title: '第二章：CAPEX 計畫與資產壽命',
      nav: 'CAPEX',
      icon: '🏗️',
      highlightDelayStep: '0.07s',
      html: `
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>💡 概念入門：CAPEX = 買車的決策</h3>
            
            <div class="analogy-box">
              <h4>🚗 生活化比喻：CAPEX就像買車</h4>
              <p>資本開支(CAPEX)就像買車的邏輯：</p>
              <ul>
                <li><strong>買價</strong> = CAPEX金額（€480k買自動分選線 = 買一台BMW）</li>
                <li><strong>使用年限</strong> = 耐用年限（車開10年 = 設備用12年）</li>
                <li><strong>每年折舊</strong> = 車輛貶值（€480k÷12年 = 每年折舊€40k）</li>
                <li><strong>維護成本</strong> = 保養、油錢、保險（設備也有維護成本）</li>
                <li><strong>划算嗎？</strong> = 省下的計程車費 > 買車+養車成本？</li>
              </ul>
              <p class="insight">買設備和買車一樣，要算：<strong>總成本（買價+養護） vs 總效益（省的錢+賺的錢）</strong>。</p>
            </div>

            <div class="term-explanation">
              <h4>🔑 專業術語白話解釋</h4>
              <table class="term-table">
                <tr>
                  <td><strong>CAPEX（Capital Expenditure）</strong></td>
                  <td>= 資本支出 = 買「長期資產」的錢（設備、建築、土地）。一次性支出，效益多年</td>
                </tr>
                <tr>
                  <td><strong>折舊（Depreciation）</strong></td>
                  <td>= 資產價值逐年減少。€480k設備用12年，每年分攤€40k（帳面上的成本，不是真的付錢）</td>
                </tr>
                <tr>
                  <td><strong>耐用年限（Useful Life）</strong></td>
                  <td>= 設備能用幾年？橡木桶3年、混凝土槽20年、光伏系統25年</td>
                </tr>
                <tr>
                  <td><strong>直線法折舊</strong></td>
                  <td>= 每年折舊金額相同。€300k ÷ 25年 = 每年€12k</td>
                </tr>
                <tr>
                  <td><strong>加速折舊</strong></td>
                  <td>= 前幾年折舊多、後面少（像車剛買最貶值）。可早點抵稅</td>
                </tr>
                <tr>
                  <td><strong>DSCR</strong></td>
                  <td>= Debt Service Coverage Ratio = 還債能力。營運現金流 ÷ 每年還款額 ≥ 1.5（銀行才敢借）</td>
                </tr>
              </table>
            </div>

            <div class="capex-logic">
              <h4>🧠 CAPEX決策的三個靈魂問題：</h4>
              <div class="question-box">
                <div class="question">
                  <strong>1. 值得買嗎？</strong>
                  <p>效益（省的成本+增的收入） > 總成本（買價+維護）？<br>
                  → 用IRR、NPV評估（後面章節會教）</p>
                </div>
                <div class="question">
                  <strong>2. 錢從哪來？</strong>
                  <p>自有資金？銀行貸款？政府補助？租賃？<br>
                  → 貸款要付利息，但保留現金；自有資金沒利息，但占用流動性</p>
                </div>
                <div class="question">
                  <strong>3. 何時回本？</strong>
                  <p>回收期 = 投資金額 ÷ 每年效益<br>
                  → €480k設備，每年省€100k → 4.8年回本（可接受嗎？）</p>
                </div>
              </div>
            </div>

            <div class="reading-guide">
              <h4>📖 如何閱讀CAPEX表格？</h4>
              <ol>
                <li><strong>看投資金額</strong>：€110k橡木桶 vs €480k分選線 → 規模差4倍</li>
                <li><strong>看耐用年限</strong>：橡木桶3年 vs 光伏系統25年 → 長期資產攤提慢</li>
                <li><strong>看折舊方法</strong>：直線法=平均、加速法=前期多（節稅）</li>
                <li><strong>看目的</strong>：維持品質？降成本？還是提升產能？（對應不同策略）</li>
              </ol>
              <p class="tip">💡 <strong>記憶技巧</strong>：CAPEX=買車，折舊=車貶值，回收期=幾年省回車錢</p>
            </div>
          </div>

          <h3>資本開支分類</h3>
          <table class="data-table">
            <thead>
              <tr><th>資產</th><th>投資金額</th><th>耐用年限</th><th>折舊方法</th><th>目的</th></tr>
            </thead>
            <tbody>
              <tr><td>橡木桶 225L</td><td>€110k/年</td><td>3 年</td><td>直線法</td><td>維持高端產品桶陳比例</td></tr>
              <tr><td>混凝土蛋槽</td><td>€260k</td><td>20 年</td><td>加速折舊 (5 年)</td><td>提升溫控與口感一致性</td></tr>
              <tr><td>光伏系統</td><td>€320k</td><td>25 年</td><td>直線法</td><td>降低能源成本與碳足跡</td></tr>
              <tr><td>自動分選線</td><td>€480k</td><td>12 年</td><td>遞減法</td><td>降人工、提升品質穩定性</td></tr>
            </tbody>
          </table>
          <h3>折舊與現金流對應</h3>
          <p>折舊是非現金費用，但會影響稅負與盈餘；需同步評估營運現金流、利息與維護成本。</p>
          <table class="data-table compact">
            <thead>
              <tr><th>年度</th><th>折舊費用</th><th>維護成本</th><th>節省/新增現金流</th><th>備註</th></tr>
            </thead>
            <tbody>
              <tr><td>Year 1</td><td>€220k</td><td>€35k</td><td>-€520k (投資)</td><td>CAPEX 支出</td></tr>
              <tr><td>Year 2</td><td>€205k</td><td>€42k</td><td>+€110k</td><td>分選線降低退貨率 0.8%</td></tr>
              <tr><td>Year 3</td><td>€190k</td><td>€45k</td><td>+€145k</td><td>能源節省 + 品質溢價</td></tr>
              <tr><td>Year 4</td><td>€170k</td><td>€47k</td><td>+€168k</td><td>銷售擴張，毛利增長</td></tr>
            </tbody>
          </table>
          <h3>資金來源與結構</h3>
          <ul>
            <li>自有資金：保持財務彈性但占用現金。</li>
            <li>銀行貸款：利率 3.5–4.2%，需評估 DSCR ≥ 1.5。</li>
            <li>政府補助/綠能補貼：縮短回收期，需符合 ESG (Environmental, Social, Governance) 指標。</li>
            <li>租賃 (Lease)：降低初期支出，適合設備升級頻繁的資產。</li>
          </ul>
          <h3>案例：自動分選線決策</h3>
          <p>投資 €480k，可減少 4% 人工成本與 1.2% 不良率，預估 5 年 IRR (Internal Rate of Return) 17%。</p>
          <p class="subhead">風險控管</p>
          <ul>
            <li>設定 KPI (Key Performance Indicator)：停機時間 < 2%，每月校驗光學模組。</li>
            <li>建立備援流程：高峰期保留人工檢查班次。</li>
          </ul>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🏦', title: '資產分類', content: '桶材、混凝土槽、光伏與分選線 CAPEX 與折舊策略。' },
        { id: 2, icon: '💧', title: '現金流配對', content: '折舊影響稅負，需同步對照維護成本與節省。' },
        { id: 3, icon: '⚖️', title: '融資結構', content: '自有、貸款、補助與租賃混合設計。' }
      ]
    },
    {
      title: '第三章：單位經濟與盈虧平衡',
      nav: '盈虧平衡',
      icon: '📈',
      highlightDelayStep: '0.08s',
      html: `
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>💡 概念入門：盈虧平衡 = 生存門檻</h3>
            
            <div class="analogy-box">
              <h4>🎯 生活化比喻：盈虧平衡就像「保本點」</h4>
              <p>想像你擺夜市攤位：</p>
              <ul>
                <li><strong>固定成本</strong> = 攤位租金€500/月（不管賣不賣都要付）</li>
                <li><strong>變動成本</strong> = 每份雞排成本€3（賣越多成本越高）</li>
                <li><strong>售價</strong> = €5/份</li>
                <li><strong>貢獻毛利</strong> = €5 - €3 = €2/份（每賣一份賺€2去cover租金）</li>
                <li><strong>盈虧平衡</strong> = €500 ÷ €2 = 250份/月（賣不到250份就虧本！）</li>
              </ul>
              <p class="insight">酒莊也一樣：<strong>要賣幾瓶才不虧本？安全邊際=賣超過盈虧平衡多少%</strong>。</p>
            </div>

            <div class="term-explanation">
              <h4>🔑 專業術語白話解釋</h4>
              <table class="term-table">
                <tr>
                  <td><strong>ASP（Average Selling Price）</strong></td>
                  <td>= 平均售價 = 總營收 ÷ 總瓶數。€18.5/瓶表示平均每瓶賣€18.5</td>
                </tr>
                <tr>
                  <td><strong>貢獻毛利（Contribution Margin）</strong></td>
                  <td>= 售價 - 變動成本 = 每瓶賺多少錢去cover固定成本。€18.5 - €7.8 = €10.7/瓶</td>
                </tr>
                <tr>
                  <td><strong>盈虧平衡點（Break-Even Point）</strong></td>
                  <td>= 固定成本 ÷ 貢獻毛利 = 要賣幾瓶才不虧。€3.4M ÷ €10.7 = 318k瓶</td>
                </tr>
                <tr>
                  <td><strong>安全邊際（Margin of Safety）</strong></td>
                  <td>= (實際銷量 - 盈虧平衡量) ÷ 實際銷量。賣360k瓶，盈虧平衡318k → 安全邊際12%</td>
                </tr>
                <tr>
                  <td><strong>EBIT</strong></td>
                  <td>= Earnings Before Interest and Tax = 息前稅前利潤 = 營業利潤（還沒扣利息和稅）</td>
                </tr>
              </table>
            </div>

            <div class="breakeven-formula">
              <h4>📐 盈虧平衡公式（核心邏輯）：</h4>
              <div class="formula-box">
                <p><strong>盈虧平衡量 = 固定成本 ÷ (售價 - 變動成本)</strong></p>
                <p class="example">例：€3.4M ÷ (€18.5 - €7.8) = €3.4M ÷ €10.7 = 318k瓶</p>
                <p class="insight">💡 <strong>理解邏輯</strong>：每瓶賺€10.7去cover固定成本，要賣318k瓶才能cover完€3.4M。</p>
              </div>
              <div class="levers">
                <h5>提升利潤的三個槓桿：</h5>
                <ul>
                  <li><strong>提高售價</strong> → 貢獻毛利↑ → 盈虧平衡量↓（但要市場接受）</li>
                  <li><strong>降低變動成本</strong> → 貢獻毛利↑ → 盈虧平衡量↓（效率改善）</li>
                  <li><strong>降低固定成本</strong> → 盈虧平衡量↓（但可能影響產能/品質）</li>
                </ul>
              </div>
            </div>

            <div class="safety-margin-concept">
              <h4>🛡️ 為何安全邊際很重要？</h4>
              <p><strong>情境A</strong>：安全邊際5% → 銷量下滑6%就虧本（非常危險！）</p>
              <p><strong>情境B</strong>：安全邊際25% → 銷量下滑20%還有賺（健康！）</p>
              <p class="insight">安全邊際 = 抗風險能力。疫情、經濟衰退、競爭加劇時，安全邊際高的酒莊活得下來。</p>
            </div>

            <div class="reading-guide">
              <h4>📖 如何使用盈虧平衡互動工具？</h4>
              <ol>
                <li><strong>基準案例</strong>：看目前的盈虧平衡量和安全邊際（健康嗎？）</li>
                <li><strong>價格提升5%</strong>：看盈虧平衡量降多少、EBIT增多少（定價能力測試）</li>
                <li><strong>效率提升8%</strong>：看降成本的效果（自動化、流程優化）</li>
                <li><strong>比較三種情境</strong>：哪個槓桿最有效？價格槓桿通常最強力但最難執行</li>
              </ol>
            </div>
          </div>

          <h3>單位經濟模型</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>指標</th><th>數值</th><th>說明</th></tr>
            </thead>
            <tbody>
              <tr><td>平均銷售價格 (ASP)</td><td>€18.5/bottle</td><td>高端線出廠價</td></tr>
              <tr><td>變動成本</td><td>€7.8/bottle</td><td>原料 + 包材 + 物流</td></tr>
              <tr><td>貢獻毛利</td><td>€10.7/bottle</td><td>ASP - 變動成本</td></tr>
              <tr><td>年度固定成本</td><td>€3.4M</td><td>含折舊、管理與行銷</td></tr>
            </tbody>
          </table>
          <h3>盈虧平衡儀表</h3>
          <div class="breakeven-widget" style="--highlight-color:#22c55e;">
            <input type="radio" id="bev-base" name="breakeven-l44" class="opt-base" checked>
            <input type="radio" id="bev-price" name="breakeven-l44" class="opt-price">
            <input type="radio" id="bev-efficiency" name="breakeven-l44" class="opt-efficiency">
            <div class="selectors">
              <label for="bev-base">基準案例</label>
              <label for="bev-price">價格提升 5%</label>
              <label for="bev-efficiency">效率提升 8%</label>
            </div>
            <div class="panels">
              <div class="panel" data-scenario="base">
                <table class="data-table compact">
                  <tbody>
                    <tr><td>盈虧平衡量</td><td>318k 瓶</td></tr>
                    <tr><td>安全邊際</td><td>12%</td></tr>
                    <tr><td>年度 EBIT</td><td>€420k</td></tr>
                  </tbody>
                </table>
                <p class="note">目前銷量 360k 瓶，安全邊際偏低，需提升 ASP 或降成本。</p>
              </div>
              <div class="panel" data-scenario="price">
                <table class="data-table compact">
                  <tbody>
                    <tr><td>新 ASP</td><td>€19.4</td></tr>
                    <tr><td>盈虧平衡量</td><td>303k 瓶</td></tr>
                    <tr><td>年度 EBIT</td><td>€610k</td></tr>
                  </tbody>
                </table>
                <p class="note">需搭配品牌故事與分銷談判，確保市場接受度。</p>
              </div>
              <div class="panel" data-scenario="efficiency">
                <table class="data-table compact">
                  <tbody>
                    <tr><td>變動成本</td><td>€7.2/bottle</td></tr>
                    <tr><td>盈虧平衡量</td><td>292k 瓶</td></tr>
                    <tr><td>年度 EBIT</td><td>€680k</td></tr>
                  </tbody>
                </table>
                <p class="note">透過自動分選 + 能源優化，降低單位成本 8%。</p>
              </div>
            </div>
          </div>
          <h3>安全邊際與混成產品組合</h3>
          <ul>
            <li>設定目標安全邊際 ≥ 20%，預留市場波動緩衝。</li>
            <li>高毛利產品 (頂級園) vs 高周轉產品 (第二酒) 組合平衡。</li>
            <li>導入定價/折扣模組，動態調整分銷返利與預購政策。</li>
          </ul>
          <h3>案例：2024 年盈虧平衡調整</h3>
          <p>透過 ASP 提升 + 成本改善雙軌，年度 EBIT 增加 €260k，安全邊際提升至 19%。</p>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🧮', title: '貢獻毛利', content: 'ASP €18.5 vs 變動成本 €7.8，貢獻毛利 €10.7。' },
        { id: 2, icon: '📊', title: '盈虧儀表', content: '切換價格或效率情境即可比較盈虧平衡量。' },
        { id: 3, icon: '🛡️', title: '安全邊際', content: '將安全邊際拉高至 ≥20%，降低市場波動風險。' }
      ]
    },
    {
      title: '第四章：敏感度與情境分析',
      nav: '敏感度',
      icon: '📉',
      highlightDelayStep: '0.09s',
      html: `
        <div class="chapter-content">
          <h3>主要變數敏感度</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>變數</th><th>±10% 變動對 EBIT 影響</th><th>排名</th><th>備註</th></tr>
            </thead>
            <tbody>
              <tr><td>ASP</td><td>±€310k</td><td>1</td><td>價格策略需搭配品牌與分銷</td></tr>
              <tr><td>葡萄收購成本</td><td>±€220k</td><td>2</td><td>可透過長約與自有葡萄園平衡</td></tr>
              <tr><td>產量</td><td>±€180k</td><td>3</td><td>受氣候與病害影響，需保險對沖</td></tr>
              <tr><td>能源成本</td><td>±€75k</td><td>5</td><td>光伏系統可降低波動</td></tr>
            </tbody>
          </table>
          <h3>情境分析</h3>
          <p>設定保守、基準、擴張三種情境，檢視收益、現金流與投資需求。</p>
          <table class="data-table">
            <thead>
              <tr><th>情境</th><th>銷量</th><th>ASP</th><th>EBIT</th><th>營運現金流</th><th>策略重點</th></tr>
            </thead>
            <tbody>
              <tr><td>保守</td><td>320k 瓶</td><td>€18.2</td><td>€280k</td><td>€210k</td><td>聚焦成本控制與庫存週轉</td></tr>
              <tr><td>基準</td><td>360k 瓶</td><td>€18.5</td><td>€420k</td><td>€360k</td><td>維持行銷投資，改善渠道結構</td></tr>
              <tr><td>擴張</td><td>410k 瓶</td><td>€19.1</td><td>€690k</td><td>€540k</td><td>新增高端旅遊體驗，提高直客比重</td></tr>
            </tbody>
          </table>
          <h3>風險矩陣與對沖</h3>
          <ul>
            <li>氣候風險：冰雹/霜害 → 作物保險 + 對沖合約。</li>
            <li>匯率波動：出口市場以 EUR 訂價或採美元期貨對沖。</li>
            <li>利率上升：CAPEX 採固定利率貸款並保留流動備援。</li>
          </ul>
          <h3>資料可視化建議</h3>
          <ul>
            <li>龍捲圖 (Tornado Chart) 呈現敏感度排序。</li>
            <li>情境瀑布圖：展示 EBIT 由保守到擴張的增量來源。</li>
            <li>Monte Carlo 模擬：評估盈虧分布與 VaR (Value-at-Risk)。</li>
          </ul>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🎯', title: '敏感度排序', content: 'ASP、葡萄成本、產量是影響 EBIT 的前三大變數。' },
        { id: 2, icon: '🧭', title: '三種情境', content: '保守、基準、擴張對應不同策略重點與現金流。' },
        { id: 3, icon: '🛡️', title: '風險對沖', content: '保險、匯率與利率管理守住底線。' }
      ]
    },
    {
      title: '第五章：品質投資與投報門檻',
      nav: '投報',
      icon: '💹',
      highlightDelayStep: '0.1s',
      html: `
        <div class="chapter-content">
          <h3>投資專案評估</h3>
          <table class="data-table">
            <thead>
              <tr><th>專案</th><th>CapEx (Capital Expenditure)</th><th>年度效益</th><th>IRR (Internal Rate of Return)</th><th>回收期</th><th>無形價值</th></tr>
            </thead>
            <tbody>
              <tr><td>高精度分選 + 感測</td><td>€520k</td><td>品質溢價 +€0.6/bottle</td><td>18%</td><td>4.5 年</td><td>評分提升、退貨降低</td></tr>
              <tr><td>旅遊款待中心</td><td>€380k</td><td>直客營收 +€420k/年</td><td>22%</td><td>3.6 年</td><td>品牌體驗、客戶資料</td></tr>
              <tr><td>永續能效改造</td><td>€260k</td><td>能源節省 €70k/年</td><td>15%</td><td>5.1 年</td><td>碳盤查得分、補助資格</td></tr>
            </tbody>
          </table>
          <h3>投報決策儀表</h3>
          <div class="roi-widget" style="--highlight-color:#6366f1;">
            <input type="radio" id="roi-quality" name="roi-l44" class="opt-quality" checked>
            <input type="radio" id="roi-direct" name="roi-l44" class="opt-direct">
            <input type="radio" id="roi-esg" name="roi-l44" class="opt-esg">
            <div class="selectors">
              <label for="roi-quality">品質升級</label>
              <label for="roi-direct">直客體驗</label>
              <label for="roi-esg">永續改造</label>
            </div>
            <div class="panels">
              <div class="panel" data-scenario="quality">
                <div class="metrics">
                  <div class="metric"><span class="label">IRR</span><span class="value">18%</span></div>
                  <div class="metric"><span class="label">NPV (8%)</span><span class="value">€210k</span></div>
                  <div class="metric"><span class="label">評分提升</span><span class="value">+1.8 分</span></div>
                </div>
                <p class="note">聚焦於旗艦產品，需同步調整桶齡與微氧策略確保風味落地。</p>
              </div>
              <div class="panel" data-scenario="direct">
                <div class="metrics">
                  <div class="metric"><span class="label">IRR</span><span class="value">24%</span></div>
                  <div class="metric"><span class="label">NPV (8%)</span><span class="value">€320k</span></div>
                  <div class="metric"><span class="label">客戶資料</span><span class="value">15k 筆/年</span></div>
                </div>
                <p class="note">加強 CRM 與會員運營，打造高毛利直客組合。</p>
              </div>
              <div class="panel" data-scenario="esg">
                <div class="metrics">
                  <div class="metric"><span class="label">IRR</span><span class="value">16%</span></div>
                  <div class="metric"><span class="label">NPV (8%)</span><span class="value">€180k</span></div>
                  <div class="metric"><span class="label">碳足跡</span><span class="value">-22%/瓶</span></div>
                </div>
                <p class="note">取得永續認證與政府補助，提升市場溢價與品牌形象。</p>
              </div>
            </div>
          </div>
          <h3>投資門檻設定</h3>
          <ul>
            <li>基準要求：IRR ≥ 15%、NPV > 0、回收期 < 6 年。</li>
            <li>策略性投資可放寬至 IRR 12%，但需搭配品牌或 ESG 指標。</li>
            <li>建立投資後評估 (Post Investment Review)，追蹤實際 vs 預算。</li>
          </ul>
          <h3>案例：品質升級 vs 直客體驗</h3>
          <p>兩方案同時啟動，透過交叉銷售將客戶停留增加 35%，平均客單價提升 18%。</p>
        </div>
      `,
      highlights: [
        { id: 1, icon: '💡', title: '專案比較', content: '品質升級、旅遊體驗、永續改造三種 CapEx 效益對照。' },
        { id: 2, icon: '📊', title: 'ROI 儀表', content: '互動儀表顯示 IRR、NPV 與無形指標。' },
        { id: 3, icon: '📏', title: '門檻設計', content: 'IRR ≥15%、回收期 <6 年並搭配投資後評估。' }
      ]
    }
  ],
  summary: {
    title: '課程總結',
    html: `
      <div class="comprehensive-summary">
        <h3>🎯 課程核心回顧：從成本管理到投資決策的完整框架</h3>
        
        <div class="five-pillars-review">
          <div class="pillar">
            <h4>1️⃣ 成本地圖：知道錢花在哪</h4>
            <div class="key-points">
              <p><strong>核心概念</strong>：固定成本（不管產量） vs 變動成本（隨產量變）</p>
              <p><strong>ABC成本法</strong>：按「活動」分攤成本，更精準</p>
              <ul>
                <li>葡萄處理：€69.6/噸</li>
                <li>釀造監控：€1,979/批次</li>
                <li>桶陳管理：€66.7/桶月</li>
                <li>裝瓶包材：€0.50/瓶</li>
              </ul>
              <p class="takeaway">💡 <strong>關鍵洞察</strong>：不知道成本結構=開車不看油表。ABC成本法讓你知道「手工分選」、「橡木桶陳年」等高成本活動，真正花在哪些酒上。案例中桶陳成本占18%（高於同業12%）→ 優化後降到€88k，每瓶省€8。</p>
            </div>
          </div>

          <div class="pillar">
            <h4>2️⃣ CAPEX計畫：買設備要算回收期</h4>
            <div class="key-points">
              <p><strong>資產分類與折舊</strong>：</p>
              <table class="mini-table">
                <tr>
                  <th>資產</th>
                  <th>投資</th>
                  <th>年限</th>
                  <th>目的</th>
                </tr>
                <tr>
                  <td>橡木桶</td>
                  <td>€110k/年</td>
                  <td>3年</td>
                  <td>維持高端桶陳</td>
                </tr>
                <tr>
                  <td>混凝土蛋槽</td>
                  <td>€260k</td>
                  <td>20年</td>
                  <td>溫控與口感</td>
                </tr>
                <tr>
                  <td>光伏系統</td>
                  <td>€320k</td>
                  <td>25年</td>
                  <td>降能源成本</td>
                </tr>
                <tr>
                  <td>自動分選線</td>
                  <td>€480k</td>
                  <td>12年</td>
                  <td>降人工提品質</td>
                </tr>
              </table>
              <p><strong>融資選擇</strong>：自有資金、銀行貸款（3.5-4.2%）、政府補助、租賃</p>
              <p class="takeaway">💡 <strong>關鍵洞察</strong>：CAPEX=買車邏輯。折舊是「帳面成本」（不是真付錢），但影響稅負。要同步看現金流：Year 1投資€520k、Year 4回收€168k。DSCR≥1.5銀行才敢借（營運現金流要是還款額的1.5倍以上）。</p>
            </div>
          </div>

          <div class="pillar">
            <h4>3️⃣ 盈虧平衡：要賣幾瓶才不虧？</h4>
            <div class="key-points">
              <p><strong>核心公式</strong>：盈虧平衡量 = 固定成本 ÷ 貢獻毛利</p>
              <div class="calculation-example">
                <p>€3.4M ÷ (€18.5 - €7.8) = €3.4M ÷ €10.7 = <strong>318k瓶</strong></p>
              </div>
              <p><strong>三種槓桿效果</strong>：</p>
              <ul>
                <li><strong>基準案例</strong>：318k瓶盈虧平衡、安全邊際12%、EBIT €420k</li>
                <li><strong>價格提升5%</strong>：303k瓶、EBIT €610k（+45%）</li>
                <li><strong>效率提升8%</strong>：292k瓶、EBIT €680k（+62%）</li>
              </ul>
              <p class="takeaway">💡 <strong>關鍵洞察</strong>：安全邊際=抗風險能力。12%太低（銷量下滑13%就虧本），目標≥20%。價格槓桿最強但最難（要市場接受），效率槓桿較穩（自動化、流程優化）。案例中雙管齊下：ASP提升+成本降低 → EBIT增€260k，安全邊際升至19%。</p>
            </div>
          </div>

          <div class="pillar">
            <h4>4️⃣ 敏感度分析：哪個變數最關鍵？</h4>
            <div class="key-points">
              <p><strong>變數影響排序（±10%對EBIT影響）</strong>：</p>
              <ol>
                <li><strong>ASP</strong>：±€310k（最敏感！定價是利潤最大槓桿）</li>
                <li><strong>葡萄收購成本</strong>：±€220k（長約+自有園平衡）</li>
                <li><strong>產量</strong>：±€180k（受氣候影響，需保險）</li>
                <li><strong>能源成本</strong>：±€75k（光伏系統降波動）</li>
              </ol>
              <p><strong>三種情境模擬</strong>：</p>
              <ul>
                <li><strong>保守</strong>：320k瓶、€18.2、EBIT €280k → 聚焦成本控制</li>
                <li><strong>基準</strong>：360k瓶、€18.5、EBIT €420k → 維持行銷投資</li>
                <li><strong>擴張</strong>：410k瓶、€19.1、EBIT €690k → 高端旅遊體驗</li>
              </ul>
              <p class="takeaway">💡 <strong>關鍵洞察</strong>：敏感度分析=找關鍵槓桿點。ASP影響最大（€310k），要重點管理定價策略與品牌溢價。情境分析=壓力測試，保守情境確保不虧本、擴張情境評估上限潛力。風險對沖：氣候保險、匯率避險、固定利率貸款。</p>
            </div>
          </div>

          <div class="pillar">
            <h4>5️⃣ 投報評估：哪個投資最值得？</h4>
            <div class="key-points">
              <p><strong>三個專案比較</strong>：</p>
              <table class="roi-comparison">
                <tr>
                  <th>專案</th>
                  <th>投資</th>
                  <th>IRR</th>
                  <th>回收期</th>
                  <th>無形價值</th>
                </tr>
                <tr>
                  <td>高精度分選</td>
                  <td>€520k</td>
                  <td>18%</td>
                  <td>4.5年</td>
                  <td>評分+1.8、退貨降低</td>
                </tr>
                <tr>
                  <td>旅遊款待中心</td>
                  <td>€380k</td>
                  <td>24%</td>
                  <td>3.6年</td>
                  <td>品牌體驗、15k客戶資料</td>
                </tr>
                <tr>
                  <td>永續能效改造</td>
                  <td>€260k</td>
                  <td>16%</td>
                  <td>5.1年</td>
                  <td>碳足跡-22%、補助資格</td>
                </tr>
              </table>
              <p><strong>投資門檻</strong>：IRR≥15%、NPV>0、回收期<6年（策略性投資可放寬至IRR 12%）</p>
              <p class="takeaway">💡 <strong>關鍵洞察</strong>：IRR=內部報酬率，NPV=淨現值（考慮時間價值）。旅遊中心IRR最高（24%）但要搭配CRM系統；品質升級IRR 18%但要同步調整桶齡策略；永續改造IRR較低（16%）但有政府補助+品牌形象效益。投資後評估(PIR)追蹤實際vs預算，持續優化。</p>
            </div>
          </div>
        </div>

        <h3>🔄 系統思維：財務決策的連鎖反應</h3>
        <div class="system-thinking">
          <div class="decision-chain">
            <div class="step">投資自動分選線€480k</div>
            <div class="arrow">→</div>
            <div class="step">人工成本降4%、不良率降1.2%</div>
            <div class="arrow">→</div>
            <div class="step">品質評分+1.8分</div>
            <div class="arrow">→</div>
            <div class="step">ASP可提升€0.6/瓶</div>
            <div class="arrow">→</div>
            <div class="step">年度EBIT增€220k</div>
            <div class="arrow">→</div>
            <div class="step">4.5年回本，IRR 18%</div>
          </div>
          <p class="insight">每個財務決策都會觸發連鎖反應。專家思維：<strong>預見全局，量化效益，持續追蹤</strong>。</p>
        </div>

        <h3>🌟 三個關鍵洞察</h3>
        <div class="key-insights-final">
          <div class="insight-card">
            <h4>💰 財務紀律不是扼殺創意，而是讓創意可持續</h4>
            <p>很多釀酒師抗拒財務管理，覺得「談錢很俗」。但頂級酒莊（DRC、Lafite、Screaming Eagle）都有嚴格的<strong>財務儀表板</strong>。不是他們不在乎品質，而是<strong>知道每一筆投資的回報，才能持續投資品質</strong>。沒有財務紀律的酒莊，最終會因資金斷鏈而倒閉，再好的釀酒理念也無法延續。</p>
          </div>
          
          <div class="insight-card">
            <h4>📊 數據不是冰冷的數字，而是決策的羅盤</h4>
            <p>盈虧平衡、IRR、NPV這些指標不是「會計作業」，而是<strong>回答商業問題的工具</strong>：要賣幾瓶才不虧？買這台設備划算嗎？提價5%市場接受嗎？<strong>沒有數據的決策=賭博，有數據的決策=精算</strong>。就像開車要看速度表和油表，經營酒莊要看成本地圖和投報儀表。</p>
          </div>
          
          <div class="insight-card">
            <h4>⚖️ 品質投資的ROI不只是€，還有品牌、評分、忠誠度</h4>
            <p>旅遊中心投資€380k，IRR 24%看起來很好，但<strong>無形價值更大</strong>：15k客戶資料（可做精準行銷）、品牌體驗（客戶成為brand ambassador）、直客渠道（毛利更高）。永續改造IRR只有16%，但有<strong>碳盤查得分、補助資格、ESG投資人青睞</strong>。評估投資不能只看財務數字，<strong>要看戰略價值</strong>。</p>
          </div>
        </div>

        <h3>📚 延伸學習建議</h3>
        <ul class="further-study">
          <li><strong>財務建模</strong>：用Excel建立酒莊財務模型（收入、成本、CAPEX、折舊、現金流），做情境模擬</li>
          <li><strong>會計基礎</strong>：了解損益表、資產負債表、現金流量表的關係（不需要當會計師，但要看懂報表）</li>
          <li><strong>投資評估</strong>：深入學習IRR、NPV、ROIC、EVA等指標，掌握投資決策工具</li>
          <li><strong>案例研究</strong>：分析上市酒莊財報（LVMH、Treasury Wine Estates、Constellation Brands），學習大型酒企的財務策略</li>
          <li><strong>敏感度分析</strong>：用@RISK或Crystal Ball軟體做Monte Carlo模擬，評估風險分布</li>
          <li><strong>定價策略</strong>：研究波爾多期酒定價、納帕膜拜酒pricing power、消費者支付意願(WTP)分析</li>
        </ul>

        <div class="final-message">
          <h4>🎓 最後的話</h4>
          <p>
            財務管理表面上是「算錢」，實際上是「<strong>讓酒莊可持續成長的骨架</strong>」。
            掌握本課後，你能夠：
          </p>
          <ul>
            <li>✅ 建立成本地圖，知道每瓶酒的真實成本（ABC成本法）</li>
            <li>✅ 評估CAPEX，算出設備投資的回收期和IRR</li>
            <li>✅ 計算盈虧平衡，設定銷量目標和安全邊際</li>
            <li>✅ 做敏感度分析，找到利潤最大槓桿點（通常是定價）</li>
            <li>✅ 用NPV/IRR評估品質投資，平衡短期財務與長期價值</li>
          </ul>
          <p>這就是Level 4專家與一般釀酒師的區別：<strong>你不只是「會釀酒」，而是「能經營一家可持續的酒莊」</strong>。</p>
          <p class="final-quote">"In God we trust; all others must bring data." — W. Edwards Deming（品質管理大師）</p>
          <p class="final-quote">"沒有利潤的品質追求是不可持續的，沒有品質的利潤追求是沒有靈魂的。" — Level 4專家信條</p>
        </div>
      </div>
    `
  },
  quiz: {
    title: '課後測驗',
    questions: [
      {
        id: 1,
        question: '若希望提升安全邊際並增加 EBIT，哪組策略最有效？',
        options: ['僅增加行銷支出，維持 ASP 與成本', '同步提升 ASP 與降低變動成本', '將 CAPEX 延後並維持現有價格'],
        correct: 1,
        explanation: '價格與成本雙向調整可同時提高貢獻毛利與安全邊際，對 EBIT 幫助最大。'
      },
      {
        id: 2,
        question: '評估 CAPEX 時，哪個指標能同時考量現金流時間價值？',
        options: ['回收期 (Payback)', '折舊費用', '淨現值 (NPV)'],
        correct: 2,
        explanation: 'NPV 將未來現金流折現至現值，能反映時間價值。'
      },
      {
        id: 3,
        question: '在敏感度分析中，若產量波動對 EBIT 影響較小，暗示什麼？',
        options: ['固定成本過高', '價格與成本比產量更關鍵', '應立即增加產能'],
        correct: 1,
        explanation: '產量變動影響小通常表示固定成本占比較高，需更重視價格與成本管理。'
      },
    {
        id: 4,
        question: '若酒莊欲精確識別哪些成本活動「最難壓縮」，應優先採用哪種成本分析工具？',
        options: [
        '垂直比率分析（損益表百分比）',
        '作業成本法（ABC）',
        '柏拉圖分析'
        ],
        correct: 1,
        explanation: '作業成本法（ABC）按驅動因子分攤成本，能精確定位資源消耗最高的核心作業，辨識固定性強、難以壓縮的成本項目。'
      },
      {
        id: 5,
        question: '計算葡萄園新投資的 IRR，若結果低於酒莊的加權平均資金成本（WACC），應如何決策？',
        options: [
        '專案報酬超過資金成本，應執行',
        '專案報酬不足以覆蓋資金成本，應拒絕',
        'IRR 與 WACC 沒有直接關係'
        ],
        correct: 1,
        explanation: 'IRR < WACC 代表投資報酬率低於融資成本，專案在財務上不可行，從資本預算角度應拒絕或重新設計。'
      },
    ],
    passingScore: 60,
    timeLimit: 180
  }
})

export default l44Content
