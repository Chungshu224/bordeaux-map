import { makeL4Lesson } from './l4-shared.js'

export const l42Content = makeL4Lesson({
  cover: { title: '進階釀造科學與品質工程', subtitle: 'Level 4 - 課程 2', icon: '⚗️' },
  intro: { 
    content: `
      <div class="course-intro-extended">
        <h3>🔬 課程導讀：從經驗到科學</h3>
        <p class="intro-lead">
          在Level 3中，我們學習了釀造的基本流程。但為什麼同樣的葡萄、同樣的設備，<strong>有的酒香氣四溢，有的卻平淡無奇？有的穩定陳年，有的卻快速氧化？</strong>
        </p>        <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L4-2/01%20進階釀造科學三大核心.svg" alt="進階釀造科學三大核心" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>        
        <div class="comparison-intro">
          <div class="before-after">
            <div class="before">
              <h4>❌ 傳統經驗釀造</h4>
              <ul>
                <li>「差不多這個溫度」</li>
                <li>「看起來發酵得差不多了」</li>
                <li>「酒變質了，不知道為什麼」</li>
                <li>結果：<strong>品質不穩定，問題難追溯</strong></li>
              </ul>
            </div>
            <div class="after">
              <h4>✅ 科學化品質工程</h4>
              <ul>
                <li>精確控制溫度、氧含量、氮源</li>
                <li>即時監測溶氧、pH、酵母活性</li>
                <li>建立預防系統，問題可追溯</li>
                <li>結果：<strong>品質可預測，風格可複製</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <h3>🎯 本課程的三大核心</h3>
        <ol class="course-pillars">
          <li>
            <strong>🧫 酵母代謝</strong>：理解「釀酒工廠」如何工作<br>
            <span class="sub-point">→ 學會調控香氣、避免異味</span>
          </li>
          <li>
            <strong>🫧 氧管理</strong>：掌握葡萄酒的「呼吸節奏」<br>
            <span class="sub-point">→ 防止氧化，保持新鮮度</span>
          </li>
          <li>
            <strong>🧪 穩定化技術</strong>：讓葡萄酒「長久如新」<br>
            <span class="sub-point">→ 避免結晶、混濁、變質</span>
          </li>
        </ol>

        <div class="learning-approach">
          <h4>💡 學習建議</h4>
          <ul class="tips">
            <li>📊 <strong>看數據，更看背後原理</strong>：表格中的數字是結果，理解「為什麼」更重要</li>
            <li>🔄 <strong>建立系統思維</strong>：溫度→酵母活性→香氣產生→最終風味，是連鎖反應</li>
            <li>🧪 <strong>記住關鍵概念，不必死背數字</strong>：理解「低溫保香氣」比記住「12°C」重要</li>
            <li>📖 <strong>先看案例，再理解理論</strong>：每章末尾的實際案例最容易懂</li>
          </ul>
        </div>

        <div class="key-metaphor">
          <h4>🏭 核心比喻：把釀酒廠想像成精密工廠</h4>
          <p>釀造葡萄酒就像經營一座化工廠：</p>
          <ul>
            <li>🧫 <strong>酵母</strong> = 工廠工人（需要適當溫度、食物、氧氣才能好好工作）</li>
            <li>🌡️ <strong>溫度</strong> = 工廠空調（太熱太冷都影響效率）</li>
            <li>🫧 <strong>氧氣</strong> = 工廠通風（太多太少都有問題）</li>
            <li>🧪 <strong>穩定化</strong> = 品管檢驗（確保產品長期穩定）</li>
          </ul>
        </div>
      </div>
    `,
    duration: '75分鐘' 
  },
  objectives: [
    { id: 1, text: '掌握關鍵發酵變數與副產物管理', icon: '🧫' },
    { id: 2, text: '設計氧管理策略避免還原/氧化問題', icon: '🫧' },
    { id: 3, text: '建立還原/氧化風險預防SOP與應急決策流程', icon: '⚠️' },
    { id: 4, text: '評估穩定化與低酒精技術對風格的影響', icon: '🧪' }
  ],
  chapters: [
    {
      title: '酵母代謝與副產物',
      nav: '代謝',
      icon: '🧫',
      highlights: [
        { id: 'h1', icon: '🧪', title: '變數→風味', content: '接種量、溫度、YAN 與初期氧，決定酯類與高級醇譜系。' },
        { id: 'h2', icon: '🧭', title: '策略矩陣', content: '依目標風格選擇接種/溫度/氧/氮的組合，兼顧穩定與複雜度。' },
        { id: 'h3', icon: '🧩', title: '兩則案例', content: '高酯白提升方案、紅酒還原風險的預防與驗證。' }
      ],
      html: `
        <div class="chapter-intro">
          <h3>🔰 概念入門：酵母是如何工作的？</h3>
          <p class="factory-analogy">
            <strong>工廠比喻</strong>：把酵母想像成一座微型化工廠：
          </p>
          <ul class="factory-process">
            <li>🍇 <strong>原料</strong>：葡萄糖（糖分）</li>
            <li>⚙️ <strong>生產線</strong>：醣解作用（Glycolysis，把糖分解）</li>
            <li>🍷 <strong>主要產品</strong>：乙醇（酒精）+ CO₂（二氧化碳）</li>
            <li>🌸 <strong>副產品</strong>：酯類（花果香）、高級醇（複雜度）、硫化物（可能的異味）</li>
          </ul>
          
          <div class="key-insight">
            <h4>💡 核心概念</h4>
            <p>釀酒師的工作不只是「讓酵母把糖變成酒」，更是<strong>精確控制副產品</strong>：</p>
            <ul>
              <li>✓ 想要花香？→ 低溫發酵，多產生酯類</li>
              <li>✓ 想要穩定？→ 高接種量，避免意外</li>
              <li>✗ 出現臭雞蛋味？→ 氮源不足，產生硫化氫</li>
            </ul>
          </div>
        </div>

        <h3>關鍵路徑：醣解與酯類形成</h3>
        <div class="process-simplified">
          <p><strong>📖 專業術語白話解釋：</strong></p>
          <ul class="term-explanation">
            <li><strong>醣解（Glycolysis）</strong>：把葡萄糖「拆開」成更小分子的過程</li>
            <li><strong>丙酮酸</strong>：醣解的中間產物，像工廠的「半成品」</li>
            <li><strong>乙醛</strong>：酒精的「前身」，再加工就變成乙醇</li>
            <li><strong>酯類</strong>：香氣分子，聞起來像花香、果香</li>
            <li><strong>高級醇</strong>：複雜度的來源，但太多會有溶劑味</li>
          </ul>
          <p class="simple-formula">簡化公式：<strong>葡萄糖 → 丙酮酸 → 乙醇 + 香氣物質</strong></p>
        </div>
        <p>葡萄糖經醣解（Glycolysis）生成丙酮酸，經乙醛還原為乙醇；乙酰輔酶A與高級醇在乙酰轉移酶作用下生成酯類。</p>
        
        <h3>發酵變數的影響</h3>
        <div class="variables-intro">
          <p>🎛️ <strong>四個關鍵控制桿</strong>（調整這些，就能改變酒的風味）：</p>
          <ol class="control-knobs">
            <li><strong>接種量</strong>：投入多少酵母工人</li>
            <li><strong>溫度</strong>：工廠的溫度設定</li>
            <li><strong>氮源（YAN）</strong>：酵母的「食物」（除了糖之外）</li>
            <li><strong>溶氧</strong>：工廠的「通風」狀況</li>
          </ol>
        </div>
        <p>接種量、發酵溫度、氮源、溶氧/還原電位與攪拌頻率決定副產物譜。</p>
        <h3>參考表：條件 × 風味傾向</h3>
        <div class="table-guide">
          <p>📊 <strong>如何閱讀這張表</strong>：</p>
          <ul class="reading-tips">
            <li>找到你想調整的變數（如溫度）</li>
            <li>看「低-中-高」三個選項的效果</li>
            <li>最右欄告訴你「這樣做會怎樣」</li>
            <li>💡 重點不是記數字，而是理解<strong>趨勢</strong>：低溫→保香氣、高溫→更濃郁</li>
          </ul>
        </div>
        <table class="data-table">
          <thead>
            <tr><th>變數</th><th>低</th><th>中</th><th>高</th><th>風味傾向/風險</th></tr>
          </thead>
          <tbody>
            <tr><td>接種量（10^6 cells/mL）</td><td>0.3</td><td>0.6</td><td>1.2</td><td>低接種→更高酯類但停滯風險↑；高接種→發酵穩定但複雜度↓</td></tr>
            <tr><td>發酵溫度（°C）</td><td>12</td><td>16</td><td>20</td><td>低溫保留酯類與硫風險；高溫增加高級醇與苯甲醇</td></tr>
            <tr><td>YAN（mg N/L）</td><td>120</td><td>200</td><td>300</td><td>過低→硫化氫↑；過高→高級醇↑、酯類平衡改變</td></tr>
            <tr><td>初期溶氧（mg/L）</td><td>0.5</td><td>1.0</td><td>1.5</td><td>適度氧→酯類平衡與發酵健壯；過多→氧化前驅物↑</td></tr>
          </tbody>
        </table>
        <h3>控制策略矩陣</h3>
        <table class="data-table">
          <thead>
            <tr><th>目標風格</th><th>接種量</th><th>溫度</th><th>氧策略</th><th>氮源</th></tr>
          </thead>
          <tbody>
            <tr><td>高酯白（清新）</td><td>低</td><td>低</td><td>初期微氧</td><td>中</td></tr>
            <tr><td>結構紅（層次）</td><td>中</td><td>中高</td><td>早期兩段微氧</td><td>中高</td></tr>
            <tr><td>純淨無瑕</td><td>中高</td><td>中</td><td>嚴控低氧</td><td>中</td></tr>
          </tbody>
        </table>
        <h3>案例研究：高酯白酒的發酵設計</h3>
        <p class="subhead">問題</p>
        <p>上一年份香氣平淡且還原味偏高。</p>
        <p class="subhead">介入</p>
        <ul>
          <li>接種量 0.4×10^6 cells/mL；12–14°C 控溫。</li>
          <li>初期 0.8 mg/L 溶氧；YAN 調整至 180 mg/L（DAP+有機氮）。</li>
          <li>避免過度攪拌，酯類保留。</li>
        </ul>
        <p class="subhead">結果</p>
        <p>總酯類↑20–30%，還原指標下降；口感更纖細。</p>
        <h3>案例研究：紅酒還原風險的預防</h3>
        <p class="subhead">問題</p>
        <p>密閉發酵導致 H₂S 與揮發性硫化物偏高。</p>
        <p class="subhead">介入</p>
        <ul>
          <li>發酵早期分段曝氣（2× 5–10秒/每噸）。</li>
          <li>YAN 230 mg/L；溫度 24–26°C。</li>
          <li>酵母殘渣管理與撈渣頻次調整。</li>
        </ul>
        <p class="subhead">結果</p>
        <p>H₂S 風險顯著下降，果香與口感整合度提升。</p>
      `
    },
    {
      title: '氧管理與還原/氧化',
      nav: '氧管理',
      icon: '🫧',
      highlights: [
        { id: 'h1', icon: '📈', title: '雙指標監測', content: '以 DO 與氧化還原電位（mV）監測關鍵節點。' },
        { id: 'h2', icon: '🧯', title: '風險分支', content: '還原與氧化的成因、指標與應對，建立風險樹。' },
        { id: 'h3', icon: '🔬', title: '矯正案例', content: '白酒銅處理與 SO₂ 調整、紅酒裝瓶引氧的流程優化。' }
      ],
      html: `
        <div class="chapter-intro">
          <h3>🔰 概念入門：為什麼氧氣這麼重要？</h3>
          <p class="breathing-analogy">
            <strong>呼吸比喻</strong>：葡萄酒跟人一樣需要「呼吸」，但要控制得恰到好處：
          </p>
          <ul class="oxygen-balance">
            <li>😌 <strong>適量氧氣</strong>（發酵早期）：像適度運動，酵母健康，香氣發展好</li>
            <li>😰 <strong>氧氣太多</strong>（儲存期）：像過度換氣，葡萄酒氧化、香氣流失、變褐色</li>
            <li>😵 <strong>氧氣太少</strong>（封閉發酵）：像憋氣，產生硫化氫（臭雞蛋味）</li>
          </ul>
          
          <div class="why-monitor">
            <h4>⚠️ 氧管理的兩大風險</h4>
            <table class="risk-table">
              <tr>
                <th>風險類型</th>
                <th>原因</th>
                <th>症狀</th>
                <th>預防</th>
              </tr>
              <tr>
                <td><strong>還原</strong>（Reduction）</td>
                <td>氧氣太少</td>
                <td>🦨 硫化氫、臭雞蛋味、燃燒火柴味</td>
                <td>發酵早期適度通氣</td>
              </tr>
              <tr>
                <td><strong>氧化</strong>（Oxidation）</td>
                <td>氧氣太多</td>
                <td>🍂 褐變、香氣消失、味道平淡</td>
                <td>儲存轉罐時嚴格控氧</td>
              </tr>
            </table>
          </div>
          
          <div class="key-concept">
            <h4>💡 關鍵概念</h4>
            <p><strong>不同階段需要不同氧氣量</strong>：</p>
            <ul>
              <li>🧫 <strong>發酵早期</strong>：需要一點氧（讓酵母健康）</li>
              <li>🍷 <strong>陳年期</strong>：紅酒可微量氧化（柔化單寧），白酒要完全避氧</li>
              <li>🍾 <strong>裝瓶時</strong>：要極低氧（<0.2 mg/L），否則瓶中繼續氧化</li>
            </ul>
          </div>
        </div>

        <h3>溶氧監測與紅氧電位</h3>
        <div class="monitoring-intro">
          <p>📏 <strong>專業術語解釋：</strong></p>
          <ul class="term-decoder">
            <li><strong>DO（Dissolved Oxygen）</strong>：溶解氧，單位 mg/L，表示酒裡有多少氧氣</li>
            <li><strong>氧化還原電位（ORP）</strong>：單位 mV，像「氧化壓力指數」，數值越高越容易氧化</li>
            <li><strong>關鍵節點</strong>：葡萄酒生產過程中最容易進氧氣的時刻</li>
          </ul>
        </div>
        <p>關鍵節點：裝填、泵送、轉罐、過濾與裝瓶。以 DO（mg/L）與氧化還原電位（mV）雙指標監控。</p>
        <h3>參考表：節點 × 目標 DO</h3>
        <div class="table-reading-guide">
          <p>🎯 <strong>如何使用這張表</strong>：</p>
          <ul>
            <li>找到你正在進行的操作（如「裝瓶線」）</li>
            <li>查看白酒/紅酒的目標DO值</li>
            <li>用溶氧儀測量，確保在目標範圍內</li>
            <li>💡 <strong>記憶訣竅</strong>：數字越小越安全，白酒比紅酒更需要低氧</li>
          </ul>
          <div class="reference-values">
            <p><strong>快速參考：</strong></p>
            <ul>
              <li>✓ 白酒裝瓶：<strong>< 0.1 mg/L</strong>（越低越好）</li>
              <li>✓ 紅酒裝瓶：<strong>< 0.2 mg/L</strong>（稍微寬鬆）</li>
              <li>⚠️ 超過 1.0 mg/L：需要警惕氧化風險</li>
            </ul>
          </div>
        </div>
        <table class="data-table compact">
          <thead>
            <tr><th>節點</th><th>白酒目標 DO</th><th>紅酒目標 DO</th><th>備註</th></tr>
          </thead>
          <tbody>
            <tr><td>裝填前</td><td><0.2</td><td><0.5</td><td>惰性氣體置換必要</td></tr>
            <tr><td>泵送/轉罐</td><td><0.5</td><td>0.5–1.0</td><td>紅可微氧化以穩定色素</td></tr>
            <tr><td>過濾後</td><td><0.3</td><td><0.5</td><td>注意濾材引氧</td></tr>
            <tr><td>裝瓶線</td><td><0.1</td><td><0.2</td><td>低氧填充與真空校驗</td></tr>
          </tbody>
        </table>
        <h3>互動演示：裝瓶 DO 控制（假資料）</h3>
        <div class="do-widget">
          <div class="do-title">節點 × DO 合規狀態</div>
          <div class="do-row">
            <div class="label">裝填前（白）</div>
            <div class="controls">
              <label><input type="radio" name="do-n1" class="opt-ok" checked>合規</label>
              <label><input type="radio" name="do-n1" class="opt-high">偏高</label>
              <label><input type="radio" name="do-n1" class="opt-low">偏低</label>
            </div>
            <div class="gauge">
              <div class="gauge-fill"></div>
              <div class="badges">
                <span class="badge ok">合規</span>
                <span class="badge high">偏高</span>
                <span class="badge low">偏低</span>
              </div>
            </div>
          </div>
          <div class="do-row">
            <div class="label">過濾後（白）</div>
            <div class="controls">
              <label><input type="radio" name="do-n2" class="opt-ok" checked>合規</label>
              <label><input type="radio" name="do-n2" class="opt-high">偏高</label>
              <label><input type="radio" name="do-n2" class="opt-low">偏低</label>
            </div>
            <div class="gauge">
              <div class="gauge-fill"></div>
              <div class="badges">
                <span class="badge ok">合規</span>
                <span class="badge high">偏高</span>
                <span class="badge low">偏低</span>
              </div>
            </div>
          </div>
          <div class="do-row">
            <div class="label">裝瓶線（白）</div>
            <div class="controls">
              <label><input type="radio" name="do-n3" class="opt-ok" checked>合規</label>
              <label><input type="radio" name="do-n3" class="opt-high">偏高</label>
              <label><input type="radio" name="do-n3" class="opt-low">偏低</label>
            </div>
            <div class="gauge">
              <div class="gauge-fill"></div>
              <div class="badges">
                <span class="badge ok">合規</span>
                <span class="badge high">偏高</span>
                <span class="badge low">偏低</span>
              </div>
            </div>
          </div>
          <div class="do-row">
            <div class="label">裝填前（紅）</div>
            <div class="controls">
              <label><input type="radio" name="do-r1" class="opt-ok">合規</label>
              <label><input type="radio" name="do-r1" class="opt-high" checked>偏高</label>
              <label><input type="radio" name="do-r1" class="opt-low">偏低</label>
            </div>
            <div class="gauge">
              <div class="gauge-fill"></div>
              <div class="badges">
                <span class="badge ok">合規</span>
                <span class="badge high">偏高</span>
                <span class="badge low">偏低</span>
              </div>
            </div>
          </div>
          <div class="do-row">
            <div class="label">泵送/轉罐（紅）</div>
            <div class="controls">
              <label><input type="radio" name="do-r2" class="opt-ok" checked>合規</label>
              <label><input type="radio" name="do-r2" class="opt-high">偏高</label>
              <label><input type="radio" name="do-r2" class="opt-low">偏低</label>
            </div>
            <div class="gauge">
              <div class="gauge-fill"></div>
              <div class="badges">
                <span class="badge ok">合規</span>
                <span class="badge high">偏高</span>
                <span class="badge low">偏低</span>
              </div>
            </div>
          </div>
          <div class="do-row">
            <div class="label">裝瓶線（紅）</div>
            <div class="controls">
              <label><input type="radio" name="do-r3" class="opt-ok">合規</label>
              <label><input type="radio" name="do-r3" class="opt-high">偏高</label>
              <label><input type="radio" name="do-r3" class="opt-low" checked>偏低</label>
            </div>
            <div class="gauge">
              <div class="gauge-fill"></div>
              <div class="badges">
                <span class="badge ok">合規</span>
                <span class="badge high">偏高</span>
                <span class="badge low">偏低</span>
              </div>
            </div>
          </div>
          <div class="note">建議區間：白（裝填 < 0.2 mg/L；過濾後 < 0.3 mg/L；裝瓶 < 0.1 mg/L）、紅（裝填 < 0.5 mg/L；泵送 0.5–1.0 mg/L；裝瓶 < 0.2 mg/L）。此儀表為示意切換，無需後端。</div>
        </div>
        <h3>風險樹：還原與氧化</h3>
        <ul>
          <li>還原：低 YAN、還原性儲存、還原菌叢 → H₂S、硫醇。</li>
          <li>氧化：高 DO、金屬催化、游離 SO₂不足 → 乙醛、褐變、香氣衰退。</li>
        </ul>
        <h3>案例研究：還原矯正（白）</h3>
        <p class="subhead">問題</p>
        <p>裝瓶前出現輕微火柴盒味。</p>
        <p class="subhead">介入</p>
        <ul>
          <li>銅處理 0.15 mg/L（合規上限內）；混合均勻後過濾去除。</li>
          <li>檢核 DO 與自由 SO₂，調整至 25–30 mg/L。</li>
        </ul>
        <p class="subhead">結果</p>
        <p>硫異味去除且未引發氧化副作用。</p>
        <h3>案例研究：早期氧化（紅）</h3>
        <p class="subhead">問題</p>
        <p>轉罐時 DO 高於 1.5 mg/L，之後果香衰退。</p>
        <p class="subhead">介入</p>
        <ul>
          <li>優化泵浦與管線接頭，減少湍流。</li>
          <li>關鍵節點惰性氣體覆蓋，裝瓶改低氧填充。</li>
        </ul>
        <p class="subhead">結果</p>
        <p>後續批次果香保留與色穩定性改善。</p>
      `
    },
    {
      title: '還原/氧化風險根因分析與預防',
      nav: '風險管理',
      icon: '⚠️',
      highlights: [
        { id: 'h1', icon: '🔍', title: '根因分析', content: '還原與氧化的深層成因、前驅物與敏感窗口。' },
        { id: 'h2', icon: '🛡️', title: '預防SOP', content: '發酵、陳年、轉罐、裝瓶各階段的預防標準作業程序。' },
        { id: 'h3', icon: '🚨', title: '應急決策樹', content: '問題發生後的快速診斷流程、優先矯正順序與驗證指標。' }
      ],
      html: `
        <div class="chapter-intro">
          <h3>🔰 概念入門：為什麼「防患未然」比「亡羊補牢」更重要？</h3>
          <div class="prevention-philosophy">
            <p class="lead">
              在氧管理章節，我們學習了如何監測DO值與判斷問題。但<strong>真正的高階釀造技術是在問題發生前就把它「消滅」</strong>：
            </p>
            <div class="cost-comparison">
              <div class="cost-item reactive">
                <h4>❌ 事後矯正（亡羊補牢）</h4>
                <ul>
                  <li>銅處理可去除H₂S，但可能留下痕跡</li>
                  <li>早期氧化難以逆轉，只能減損控制</li>
                  <li>每桶矯正成本：€50–200不等</li>
                  <li>品質損失：可能是永久性的</li>
                </ul>
              </div>
              <div class="cost-item proactive">
                <h4>✅ 事前預防（防患未然）</h4>
                <ul>
                  <li>精確控制YAN防止H₂S根本不產生</li>
                  <li>嚴格管理DO使氧化無從發生</li>
                  <li>每桶預防成本：€5–20不等</li>
                  <li>品質保全：完整保留</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3>還原風險根因分析</h3>
        <div class="risk-analysis">
          <p>📊 <strong>還原（Reduction）不是單一成因，而是多條路徑的匯流：</strong></p>
        </div>
        <table class="data-table">
          <thead>
            <tr><th>根本原因</th><th>前驅物/機制</th><th>高風險窗口</th><th>預防措施</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>YAN不足</strong></td>
              <td>酵母氮源耗盡後轉向含硫胺基酸，釋出H₂S</td>
              <td>發酵中後期（糖度50–0 g/L）</td>
              <td>在發酵前及1/3進度補充DAP + 有機氮至目標YAN</td>
            </tr>
            <tr>
              <td><strong>封閉發酵/通氣不足</strong></td>
              <td>CO₂層積聚，酵母處於極度還原狀態</td>
              <td>發酵高峰期（活躍泡騰時）</td>
              <td>每日一次短暫曝氣（白酒）或打泵（紅酒）</td>
            </tr>
            <tr>
              <td><strong>高SO₂殘留</strong></td>
              <td>元素硫被還原為H₂S；某些酵母菌株高產量</td>
              <td>調硫後陳年初期</td>
              <td>選擇低硫化物生產酵母菌株；精確計算SO₂劑量</td>
            </tr>
            <tr>
              <td><strong>酒泥長期接觸</strong></td>
              <td>死亡酵母分解釋出含硫化合物（DMS前驅物）</td>
              <td>陳年期過度酒泥培育</td>
              <td>定期攪拌（白酒）或適時撈渣；監測硫醇指標</td>
            </tr>
            <tr>
              <td><strong>還原菌（乳酸菌）</strong></td>
              <td>特定乳酸菌株代謝含硫化合物</td>
              <td>蘋果酸乳酸發酵期間</td>
              <td>控制MLF菌種；避免過低SO₂讓雜菌繁殖</td>
            </tr>
          </tbody>
        </table>

        <h3>氧化風險根因分析</h3>
        <table class="data-table">
          <thead>
            <tr><th>根本原因</th><th>機制</th><th>高風險窗口</th><th>預防措施</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>游離SO₂不足</strong></td>
              <td>SO₂是一線抗氧化防線；過低時酚類和香氣直接氧化</td>
              <td>全程，尤其裝瓶前</td>
              <td>依pH調整目標游離SO₂（pH 3.2→25 mg/L，pH 3.5→40 mg/L）</td>
            </tr>
            <tr>
              <td><strong>金屬催化（Fe, Cu）</strong></td>
              <td>Fe²⁺/Fe³⁺和Cu²⁺加速酚類氧化（Fenton反應）</td>
              <td>操作過程（泵送、接觸金屬設備）</td>
              <td>使用食品級不鏽鋼；必要時添加植酸（phytic acid）鰲合</td>
            </tr>
            <tr>
              <td><strong>高DO輸入</strong></td>
              <td>裝填、泵送、過濾引入溶氧直接氧化香氣分子</td>
              <td>每個操作節點</td>
              <td>惰性氣體覆蓋（N₂/Ar）；低DO轉移設備；DO即時監測</td>
            </tr>
            <tr>
              <td><strong>酚類酶促氧化</strong></td>
              <td>多酚氧化酶（PPO）在發酵前氧化酚類</td>
              <td>採收到接種前（汁液暴露期）</td>
              <td>採收時防止破損；適當SO₂早期添加；低溫汁液澄清</td>
            </tr>
            <tr>
              <td><strong>不適當容器封存</strong></td>
              <td>木塞微縫、螺旋蓋品質不佳造成持續微量進氧</td>
              <td>陳年期與瓶中成熟期</td>
              <td>瓶封OTR（氧傳遞率）測試；確保裝瓶DO &lt;0.2 mg/L</td>
            </tr>
          </tbody>
        </table>

        <h3>預防SOP：各階段管理要點</h3>
        <div class="sop-overview">
          <p>🔧 <strong>預防的精髓是「在正確的時間做正確的事」，而不是事後補救：</strong></p>
        </div>
        <table class="data-table">
          <thead>
            <tr><th>生產階段</th><th>還原風險預防</th><th>氧化風險預防</th><th>監測指標</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>採收→發酵前</strong></td>
              <td>無（此階段主要為氧化風險）</td>
              <td>早期SO₂（30–50 mg/L總量）；低溫澄清；避免PPO接觸空氣</td>
              <td>DO、pH、游離SO₂</td>
            </tr>
            <tr>
              <td><strong>發酵中</strong></td>
              <td>每次加糖/補氮監測YAN；發酵1/3時補充有機氮；監測H₂S前驅物</td>
              <td>少量DO補充（0.5–1.0 mg/L）支持酵母健康；避免過度通氣</td>
              <td>YAN、DO、酵母活力（細胞計數）</td>
            </tr>
            <tr>
              <td><strong>陳年/轉罐</strong></td>
              <td>白酒：定期攪拌（防DMS積聚）；控制硫醇水平；監測揮發硫化物</td>
              <td>關鍵節點DO &lt;0.5 mg/L；惰性氣體保護；每2–4周確認游離SO₂</td>
              <td>DO、游離SO₂、氧化還原電位（ORP）</td>
            </tr>
            <tr>
              <td><strong>裝瓶</strong></td>
              <td>確認無H₂S/硫醇；低氧填充後感官確認</td>
              <td>裝瓶DO：白酒 &lt;0.1 mg/L，紅酒 &lt;0.2 mg/L；瓶頸空間氮氣置換</td>
              <td>DO（線上監測）、總SO₂、感官確認</td>
            </tr>
          </tbody>
        </table>

        <h3>應急決策樹：問題發生後的處理流程</h3>
        <div class="decision-tree">
          <div class="decision-branch reduction">
            <h4>🦨 偵測到還原風味（H₂S/硫醇）</h4>
            <ol class="decision-steps">
              <li><strong>第1步：確認程度</strong>
                <ul>
                  <li>輕微（打開後消散）→ 溫和通氣，繼續監測</li>
                  <li>中度（持續存在）→ 進入下一步</li>
                  <li>嚴重（刺鼻）→ 緊急銅處理</li>
                </ul>
              </li>
              <li><strong>第2步：銅處理（如適用）</strong>
                <ul>
                  <li>CuSO₄溶液 0.1–0.3 mg/L（勿超過EU限值 0.5 mg/L）</li>
                  <li>攪拌均勻靜置24–48小時後過濾去除</li>
                  <li>驗證：感官測試 + 化學分析確認硫化物下降</li>
                </ul>
              </li>
              <li><strong>第3步：根因排查與後續預防</strong>
                <ul>
                  <li>複查YAN記錄、發酵日誌</li>
                  <li>下一批次增加有機氮比例並加強通氣頻次</li>
                </ul>
              </li>
            </ol>
          </div>
          <div class="decision-branch oxidation">
            <h4>🍂 偵測到氧化跡象（褐變/香氣衰退）</h4>
            <ol class="decision-steps">
              <li><strong>第1步：量化損失程度</strong>
                <ul>
                  <li>測量ORP（&gt;350 mV需立即處理）</li>
                  <li>分析游離SO₂水平</li>
                  <li>視覺評估色澤（白酒黃化/紅酒磚色）</li>
                </ul>
              </li>
              <li><strong>第2步：緊急SO₂補充</strong>
                <ul>
                  <li>計算目標游離SO₂並補充（考量pH與溫度）</li>
                  <li>惰性氣體覆蓋防止繼續引氧</li>
                </ul>
              </li>
              <li><strong>第3步：評估可行動作</strong>
                <ul>
                  <li>輕度氧化：SO₂矯正 + 感官追蹤（可能恢復）</li>
                  <li>中重度氧化：評估降級或混釀方案</li>
                  <li>嚴重氧化：蒸餾或轉作醋用</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <h3>案例研究：完整的還原風險預防流程</h3>
        <p class="subhead">背景</p>
        <p>2022年份高酯Sauvignon Blanc，前一年份曾出現輕微火柴盒味，本年份決定實施系統性預防。</p>
        <p class="subhead">預防策略</p>
        <ul>
          <li><strong>採收前</strong>：分析葡萄汁YAN，預測目標補充量（測得YAN 95 mg N/L，目標180 mg N/L）。</li>
          <li><strong>發酵前</strong>：添加25 mg/L有機氮（Fermaid-O）；接種量維持低位（0.35×10⁶ cells/mL）。</li>
          <li><strong>發酵1/3</strong>：再次添加20 mg/L有機氮；短暫充氧至DO 0.7 mg/L。</li>
          <li><strong>全程監測</strong>：每48小時檢測H₂S前驅物（硫化物色層法）；DO維持0.3 mg/L以下。</li>
        </ul>
        <p class="subhead">結果</p>
        <p>全程未偵測到H₂S；總酯類比上年份高28%；品評顯示純淨清新花果香，無任何還原特徵。<strong>預防成本較上年份銅處理矯正費用減少75%。</strong></p>
      `
    },
    {
      title: '穩定化與低酒精技術',
      nav: '技術',
      icon: '🧪',
      highlights: [
        { id: 'h1', icon: '🧱', title: '方法比較', content: '冷穩/晶種/CMC/電透析：原理×優缺點×風味影響。' },
        { id: 'h2', icon: '⚖️', title: '合規與風格', content: '0.0–0.5% 技術流程、標示與風格保持的權衡。' },
        { id: 'h3', icon: '💰', title: '經濟性', content: 'CapEx/OpEx/風格完整性三角評估，選擇適配情境。' }
      ],
      html: `
        <div class="chapter-intro">
          <h3>🔰 概念入門：為什麼葡萄酒需要穩定化？</h3>
          <p class="problem-explanation">
            你可能遇過這種情況：<strong>打開一瓶葡萄酒，瓶底有閃亮的結晶</strong>。這不是品質問題，但消費者會誤以為酒壞了。
          </p>
          
          <div class="common-issues">
            <h4>🔍 三大穩定性問題</h4>
            <table class="issue-table">
              <tr>
                <th>問題</th>
                <th>原因</th>
                <th>外觀</th>
                <th>是否影響品質</th>
              </tr>
              <tr>
                <td><strong>酒石結晶</strong></td>
                <td>溫度降低，酒石酸鹽析出</td>
                <td>✨ 瓶底小水晶</td>
                <td>❌ 無害但影響觀感</td>
              </tr>
              <tr>
                <td><strong>蛋白混濁</strong></td>
                <td>白酒蛋白質遇熱凝結</td>
                <td>☁️ 霧狀混濁</td>
                <td>❌ 無害但不美觀</td>
              </tr>
              <tr>
                <td><strong>氧化變質</strong></td>
                <td>氧氣過多，風味分解</td>
                <td>🟫 顏色變褐</td>
                <td>✅ 確實影響品質</td>
              </tr>
            </table>
          </div>
          
          <div class="why-stabilize">
            <h4>💡 穩定化的目標</h4>
            <p>不是讓酒「永遠不變」，而是：</p>
            <ul class="goals">
              <li>✓ 防止<strong>外觀缺陷</strong>（結晶、混濁）影響銷售</li>
              <li>✓ 延長<strong>最佳賞味期</strong>（保持香氣和顏色）</li>
              <li>✓ 確保<strong>運輸安全</strong>（溫度變化不出問題）</li>
              <li>✓ 但要<strong>盡量保留風味</strong>（別過度處理）</li>
            </ul>
          </div>
          
          <div class="method-overview">
            <h4>🛠️ 穩定化的「工具箱」</h4>
            <p>就像修理工有不同工具，釀酒師也有多種穩定化方法：</p>
            <ul class="toolbox">
              <li>🧊 <strong>冷穩</strong>：像「冷凍結晶」，把結晶提前弄出來</li>
              <li>🌰 <strong>接種晶種</strong>：加入「晶核」，讓結晶快速長大並去除</li>
              <li>🧴 <strong>CMC添加劑</strong>：像「防結晶劑」，抑制晶體生長</li>
              <li>⚡ <strong>電透析</strong>：用電流「抽走」多餘離子</li>
            </ul>
          </div>
        </div>

        <h3>酒石酸鹽穩定：方法比較</h3>
        <div class="comparison-intro">
          <p>📊 <strong>如何選擇穩定化方法？</strong></p>
          <p>考慮三個因素：<strong>成本、時間、風味影響</strong></p>
        </div>
        <table class="data-table">
          <thead>
            <tr><th>方法</th><th>原理</th><th>優點</th><th>限制/風味影響</th></tr>
          </thead>
          <tbody>
            <tr><td>冷穩</td><td>低溫析晶</td><td>可靠、投資低</td><td>能耗高、時間長</td></tr>
            <tr><td>接種晶種</td><td>添加晶核加速析出</td><td>時間短、可控</td><td>需良好過濾、操作敏感</td></tr>
            <tr><td>CMC/乳酸多聚體</td><td>抑制晶體成長</td><td>省能、不需低溫</td><td>感官風險低但需相容性評估</td></tr>
            <tr><td>電透析</td><td>選擇性移除離子</td><td>快速、可連續化</td><td>初期投資高、需維護</td></tr>
          </tbody>
        </table>
        <h3>蛋白穩定與澄清</h3>
        <p>蛋白沉降藥劑（膠類、PVPP、矽藻土）之選擇需兼顧芳香保留與法規。</p>
        <h3>低/無酒精技術與法規</h3>
        <div class="low-alcohol-intro">
          <p>🆕 <strong>為什麼突然流行低酒精/無酒精酒？</strong></p>
          <ul class="market-trend">
            <li>🚗 酒駕法規更嚴格</li>
            <li>🏃 健康意識抬頭</li>
            <li>🤰 孕婦、不喝酒者也想享受葡萄酒</li>
            <li>📈 市場成長：2020-2025年年增20%</li>
          </ul>
          
          <div class="challenge-explanation">
            <h4>⚠️ 技術挑戰：如何「去掉酒精但保留風味」？</h4>
            <p>這很難！因為：</p>
            <ul>
              <li>香氣分子容易隨酒精一起被去除</li>
              <li>酒精提供「口感的重量感」，去掉後會變稀薄</li>
              <li>糖酸平衡被打亂</li>
            </ul>
          </div>
          
          <div class="tech-simplified">
            <h4>🔧 三種主要技術（白話解釋）</h4>
            <ul class="tech-list">
              <li><strong>反滲透</strong>：像超級濾水器，只讓水和酒精通過</li>
              <li><strong>真空蒸餾</strong>：在低壓下蒸發酒精（像高山上水更容易沸騰）</li>
              <li><strong>旋轉錐柱</strong>：先收集香氣，去酒精後再加回去（最複雜但效果最好）</li>
            </ul>
          </div>
        </div>
        <p>技術：反滲透、真空蒸餾、旋轉錐柱；需標示 ABV、糖度調整與增香合規。</p>
        <h3>案例研究：0.5% ABV 芳香白</h3>
        <p class="subhead">流程</p>
        <ul>
          <li>旋轉錐柱先回收芳香餾分 → 脫酒精 → 回添芳香餾分。</li>
          <li>甜度與酸度微調，控制微生物風險。</li>
        </ul>
        <p class="subhead">結果</p>
        <p>芳香保留良好，口腔結構以酸度與微氣泡補償。</p>
        <h3>經濟性與風格權衡</h3>
        <table class="data-table">
          <thead>
            <tr><th>選項</th><th>CapEx</th><th>OpEx</th><th>風格完整性</th><th>建議情境</th></tr>
          </thead>
          <tbody>
            <tr><td>冷穩</td><td>低</td><td>中</td><td>高</td><td>中小規模傳統流程</td></tr>
            <tr><td>電透析</td><td>高</td><td>低</td><td>高</td><td>大量、連續化產線</td></tr>
            <tr><td>旋轉錐（低酒精）</td><td>高</td><td>中</td><td>中高</td><td>打造 0.0–0.5% 產品線</td></tr>
          </tbody>
        </table>
      `
    }
  ],
  summary: { 
    title: '總結', 
    html: `
      <div class="comprehensive-summary">
        <h3>🎯 課程核心回顧</h3>
        
        <div class="three-pillars-review">
          <div class="pillar">
            <h4>1️⃣ 酵母代謝：釀酒的「化學工廠」</h4>
            <div class="key-points">
              <p><strong>核心公式</strong>：葡萄糖 → 乙醇 + 香氣副產物</p>
              <ul>
                <li>✓ <strong>低溫發酵</strong>（12-14°C）→ 保留酯類（花果香）</li>
                <li>✓ <strong>低接種量</strong> → 提升香氣複雜度，但風險較高</li>
                <li>✓ <strong>適當氮源</strong>（YAN 180-230 mg/L）→ 避免硫化氫</li>
                <li>✓ <strong>初期微氧</strong> → 酵母健康，發酵順利</li>
              </ul>
              <p class="takeaway">💡 <strong>關鍵洞察</strong>：釀酒師不只是「等酵母把糖變成酒」，而是透過精確控制溫度、氧氣、營養，引導酵母產生理想的香氣譜系。</p>
            </div>
          </div>

          <div class="pillar">
            <h4>2️⃣ 氧管理：葡萄酒的「呼吸節奏」</h4>
            <div class="key-points">
              <p><strong>兩大風險</strong>：過氧 vs 過還原</p>
              <table class="mini-table">
                <tr>
                  <th>階段</th>
                  <th>氧氣需求</th>
                  <th>目標DO</th>
                </tr>
                <tr>
                  <td>發酵早期</td>
                  <td>需要少量氧</td>
                  <td>0.5-1.0 mg/L</td>
                </tr>
                <tr>
                  <td>陳年期</td>
                  <td>紅酒微氧/白酒避氧</td>
                  <td>嚴格監控</td>
                </tr>
                <tr>
                  <td>裝瓶時</td>
                  <td>極低氧</td>
                  <td>< 0.1-0.2 mg/L</td>
                </tr>
              </table>
              <p class="takeaway">💡 <strong>關鍵洞察</strong>：葡萄酒的品質管理，80%取決於「氧氣管理」。裝瓶DO超標0.5 mg/L，可能導致陳年潛力減少2-3年。</p>
            </div>
          </div>

          <div class="pillar">
            <h4>3️⃣ 穩定化：讓葡萄酒「長久如新」</h4>
            <div class="key-points">
              <p><strong>目標</strong>：防止外觀缺陷，保持風味</p>
              <ul>
                <li>✓ <strong>酒石結晶</strong> → 冷穩/晶種/CMC/電透析</li>
                <li>✓ <strong>蛋白混濁</strong> → 膠類處理/PVPP</li>
                <li>✓ <strong>氧化防護</strong> → 嚴控DO + 適當SO₂</li>
              </ul>
              <div class="method-selection">
                <p><strong>方法選擇建議：</strong></p>
                <ul>
                  <li>小酒莊 → 冷穩（低投資、可靠）</li>
                  <li>大產量 → 電透析（高投資、省能）</li>
                  <li>快速處理 → 晶種/CMC（時間短）</li>
                </ul>
              </div>
              <p class="takeaway">💡 <strong>關鍵洞察</strong>：穩定化技術的選擇要平衡「成本、效率、風味影響」三個維度。過度處理會損失風味，處理不足會影響銷售。</p>
            </div>
          </div>
        </div>

        <h3>🔄 系統思維：從變數到結果</h3>
        <div class="system-thinking">
          <p>進階釀造不是孤立的技術，而是連鎖反應：</p>
          <div class="chain-reaction">
            <div class="step">溫度↓</div>
            <div class="arrow">→</div>
            <div class="step">酵母代謝慢</div>
            <div class="arrow">→</div>
            <div class="step">酯類↑</div>
            <div class="arrow">→</div>
            <div class="step">花香果香↑</div>
            <div class="arrow">→</div>
            <div class="step">但發酵時間↑</div>
          </div>
          <p class="insight">每個調整都會觸發連鎖反應，優秀釀酒師能預見並控制這些反應。</p>
        </div>

        <h3>🌟 三個關鍵洞察</h3>
        <div class="key-insights-final">
          <div class="insight-card">
            <h4>⚖️ 平衡勝過極端</h4>
            <p>追求最高酯類？可能導致發酵停滯。追求絕對無氧？可能產生還原異味。<strong>品質工程的精髓是「動態平衡」</strong>，而非極端追求單一指標。</p>
          </div>
          
          <div class="insight-card">
            <h4>📊 數據是手段，風味是目標</h4>
            <p>DO、ORP、YAN這些數據只是工具，最終要<strong>品嚐</strong>來驗證。沒有感官評估的數據管理，只是盲目的數字遊戲。</p>
          </div>
          
          <div class="insight-card">
            <h4>🔬 科學支撐藝術，藝術指引科學</h4>
            <p>釀造既是科學也是藝術。科學告訴你「能做什麼」，藝術決定「該做什麼」。頂級釀酒師掌握科學工具，但用藝術直覺做決策。</p>
          </div>
        </div>

        <h3>📚 延伸學習建議</h3>
        <ul class="further-study">
          <li><strong>技術深化</strong>：學習微生物學、生物化學基礎，理解「為什麼」而非只知道「怎麼做」</li>
          <li><strong>設備實作</strong>：熟悉溶氧儀、pH計、壓力室等監測設備的操作和校準</li>
          <li><strong>案例研究</strong>：追蹤頂級酒莊的技術革新（如Lafite的氧管理系統、Yquem的選擇性採收）</li>
          <li><strong>法規更新</strong>：關注EU/OIV關於低酒精、添加劑、標示的最新規範</li>
          <li><strong>品嚐訓練</strong>：學會識別還原、氧化、酯類等香氣特徵，用感官驗證技術決策</li>
        </ul>

        <div class="final-message">
          <h4>🎓 最後的話</h4>
          <p>
            進階釀造科學看似複雜，但核心理念其實很簡單：<strong>理解變數、監測過程、預測結果、調整策略</strong>。
            這套工程化思維不僅適用於釀酒，更是Level 4專家級能力的標誌——你已經能夠<strong>用系統化方法解決複雜問題</strong>。
          </p>
          <p>掌握本課程後，你不僅知道「如何釀酒」，更理解「為何這樣釀」、「還能怎麼釀」。這就是專業與專家的區別。</p>
        </div>
      </div>
    ` 
  },
  quiz: {
    title: '快速測驗',
    questions: [
      {
        id: 1,
        question: '為提升酯類並避免停滯，哪組策略較合理？',
        options: ['高接種、20°C、高氧', '低接種、12–14°C、初期微氧', '中接種、10°C、零氧'],
        correct: 1,
        explanation: '低接種搭配低溫可提升酯類；初期微氧有助發酵健壯，避免停滯。'
      },
      {
        id: 2,
        question: '裝瓶線對白酒的目標 DO 最適區間為？',
        options: ['<0.1 mg/L', '0.5–1.0 mg/L', '>1.5 mg/L'],
        correct: 0,
        explanation: '白酒對氧敏感，裝瓶階段建議 <0.1 mg/L。'
      },
      {
        id: 3,
        question: '白酒出現硫磺味（H₂S）時，首要確認的根本原因是？',
        options: ['游離 SO₂ 過高', 'YAN 不足或發酵期間密閉缺氧', '裝瓶 DO 超標'],
        correct: 1,
        explanation: '還原異味最常見的根因是發酵期間酵母缺乏氮源（YAN）或高酒泥密閉缺氧；應先確認 YAN 是否充足，再針對性補充或導氣。'
      },
      {
        id: 4,
        question: '哪項穩定化技術初期投資高但可連續化且省能？',
        options: ['冷穩', '接種晶種', '電透析'],
        correct: 2,
        explanation: '電透析具備連續化優勢，但初期投資較高。'
      },
      {
        id: 5,
        question: '亞硫酸鹽（SO₂）在葡萄酒保護中同時扮演哪兩種角色？',
        options: [
          '促進發酵速度 + 增加酒精度',
          '抗氧化保護 + 抑菌穩定',
          '提升顏色深度 + 增加甜度',
          '加速澄清沉澱 + 增加複雜度'
        ],
        correct: 1,
        explanation: 'SO₂ 的游離態（Free SO₂）執行抗氧化功能，結合態則具殺菌/抑菌效果。針對不同 pH 值，需調整添加量以確保足夠的游離 SO₂ 濃度（通常目標值為 0.8 mg/L 分子態）。'
      },
      {
        id: 6,
        question: '裝瓶線上溶氧（DO）偏高（白酒 >0.3 mg/L），最應優先檢查哪個環節？',
        options: [
          '更換橡木桶',
          '調整發酵溫度',
          '管線接頭密封性與惰性氣體覆蓋是否充分',
          '增加 SO₂ 添加量'
        ],
        correct: 2,
        explanation: '裝瓶線溶氧超標最常源於管線接頭漏氣或惰性氣體（N₂/CO₂）覆蓋不足；增加 SO₂ 只是補救，根本解決需查封密性與氣體保護。'
      },
      {
        id: 7,
        question: '批次酵母接種量從 0.4 降至 0.2（×10⁶ cells/mL）時，最可能帶來哪種釀造結果？',
        options: [
          '發酵速度加快，溫度更好控制',
          '產生更多高級醇類香氣，但發酵停滯風險上升',
          'H₂S 產生量必然大幅增加',
          '酒精度顯著提高'
        ],
        correct: 1,
        explanation: '低接種量使單個酵母細胞代謝壓力較低，更傾向產生酯類香氣分子；但同時發酵速率偏慢，若氮源（YAN）不足或溫度波動，發酵停滯風險明顯上升。'
      },
      {
        id: 8,
        question: '針對計劃中的優質白葡萄酒（目標：花香突出、低酒精、清爽口感），以下哪組發酵參數組合最為合適？',
        options: [
          '接種量高 + 溫度 24°C + YAN 250 mg/L + 初期高溶氧',
          '接種量低 + 溫度 12-14°C + YAN 180 mg/L + 初期微量溶氧',
          '接種量中 + 溫度 30°C + YAN 100 mg/L + 嚴格隔氧',
          '接種量低 + 溫度 18°C + YAN 50 mg/L + 中等溶氧'
        ],
        correct: 1,
        explanation: '低接種量促進酯類香氣；低溫（12-14°C）保留揮發性香氣分子；適當 YAN（180 mg/L）避免硫化氫產生；初期微量溶氧確保酵母健康啟動。高溫或氮源不足都會損害目標風格。'
      }
    ],
    passingScore: 70,
    timeLimit: 360
  }
})

export default l42Content
