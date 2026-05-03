import { makeL4Lesson } from './l4-shared.js'

const _l43Base = makeL4Lesson({
  cover: {
    title: '橡木與容器科學 2.0',
    subtitle: 'Level 4 - 課程 3',
    background: 'linear-gradient(135deg, #3C3B3F 0%, #605C3C 100%)',
    icon: '🪵'
  },
  intro: {
    content: `
      <div class="course-introduction">
        <h3>📚 課程導讀：為何Level 4要深入容器科學？</h3>
        
        <div class="why-this-matters">
          <p>如果釀造是「創作音樂」，那麼<strong>容器就是樂器</strong>：</p>
          <ul>
            <li>🎻 <strong>橡木桶</strong> = 小提琴（細緻、複雜、需精心照顧）</li>
            <li>🎺 <strong>不鏽鋼槽</strong> = 錄音設備（保真、乾淨、可控）</li>
            <li>🥁 <strong>混凝土蛋槽</strong> = 大鼓（共鳴、飽滿、有個性）</li>
            <li>🪘 <strong>陶甕</strong> = 手鼓（獨特、細膩、帶有文化氣息）</li>
          </ul>
          <p class="insight">同一首曲子（葡萄酒），用不同樂器（容器）演奏，會產生截然不同的聽覺體驗（風味）。</p>
        </div>

        <div class="course-pillars">
          <h4>🏗️ 本課程的五大建築模組：</h4>
          <div class="pillar-grid">
            <div class="pillar">
              <span class="icon">🌳</span>
              <strong>材源科學</strong>
              <p>法國橡木vs美國橡木，就像「法國麵粉vs美國麵粉」——紋理、萃取速度完全不同</p>
            </div>
            <div class="pillar">
              <span class="icon">🔥</span>
              <strong>烘烤曲線</strong>
              <p>烘烤木桶=烘焙咖啡豆，溫度曲線決定香氣譜系（焦糖vs煙燻vs香草）</p>
            </div>
            <div class="pillar">
              <span class="icon">💧</span>
              <strong>微氧管理</strong>
              <p>氧氣=化學魔法師，適量讓酒柔化，過量導致氧化，缺乏產生還原</p>
            </div>
            <div class="pillar">
              <span class="icon">🧼</span>
              <strong>衛生與桶齡</strong>
              <p>桶子=運動鞋，穿1年很香、穿3年剛好、穿5年得換，保養決定壽命</p>
            </div>
            <div class="pillar">
              <span class="icon">💰</span>
              <strong>投資決策</strong>
              <p>買桶=買樂器，€900小桶vs€12k大桶，要算投資回報與風格目標</p>
            </div>
          </div>
        </div>

        <div class="learning-approach">
          <h4>💡 如何學習本課程？</h4>
          <ol>
            <li><strong>不要只記數字</strong>：記住「法國橡木=細緻」比記住「萃取率1.2 mg/L」重要</li>
            <li><strong>建立類比思維</strong>：每個專業術語都對應一個生活經驗（烘烤=烤麵包、微氧=呼吸）</li>
            <li><strong>看懂表格邏輯</strong>：表格是「決策地圖」，不是死背資料庫</li>
            <li><strong>情境模擬練習</strong>：想像你有€50k預算，如何配置容器？（本課程有互動工具）</li>
          </ol>
        </div>

        <p class="final-note">⚠️ <strong>重要提醒</strong>：容器科學看起來很技術，但核心是「<strong>理解材質如何影響風味，並做出經濟合理的選擇</strong>」。掌握本課後，你能像專業指揮家一樣，調度不同樂器（容器）組合，創造理想的交響樂（葡萄酒風格）。</p>
      </div>
    `
  },
  objectives: [
    { id: 1, text: '評估材源、紋理與乾燥歷程對萃取曲線的影響', icon: '🌳' },
    { id: 2, text: '解析烘烤曲線與表面處理導致的香氣/結構變化', icon: '🔥' },
    { id: 3, text: '比較橡木、不鏽鋼、混凝土與陶甕的微氧和熱慣性', icon: '⚙️' },
    { id: 4, text: '制定桶齡輪換、衛生控管與多容器協同策略', icon: '🧴' }
  ],
  chapters: [
    {
      title: '第一章：木材科學與材源設計',
      nav: '材源',
      icon: '🪵',
      highlightDelayStep: '0.06s',
      html: `
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>💡 概念入門：木材就像食材，產地決定風味</h3>
            
            <div class="analogy-box">
              <h4>🍚 生活化比喻：橡木 = 米的品種</h4>
              <p>選擇橡木就像選米：</p>
              <ul>
                <li><strong>法國橡木</strong> = 日本越光米（細緻、慢熟、高價、頂級壽司用）</li>
                <li><strong>美國橡木</strong> = 泰國香米（香氣濃、快熟、平價、炒飯用）</li>
                <li><strong>東歐橡木</strong> = 台灣蓬萊米（中庸、萬用、CP值高）</li>
              </ul>
              <p class="insight">就像不會用越光米炒飯，也不該用美國橡木陳年細緻Pinot Noir。<strong>材質要match風格目標</strong>。</p>
            </div>

            <div class="term-explanation">
              <h4>🔑 專業術語白話解釋</h4>
              <table class="term-table">
                <tr>
                  <td><strong>紋理（Grain）</strong></td>
                  <td>= 木材的「纖維粗細」。細紋理 → 慢萃取（像細沙濾咖啡）；粗紋理 → 快萃取（像粗網濾茶）</td>
                </tr>
                <tr>
                  <td><strong>萃取動力（Extraction）</strong></td>
                  <td>= 木材釋放香氣到酒裡的速度。快速 = 3個月見效；緩慢 = 12個月才飽和</td>
                </tr>
                <tr>
                  <td><strong>自然風乾</strong></td>
                  <td>= 讓木材在戶外放2-3年（像醃製火腿），微生物會分解苦澀物質</td>
                </tr>
                <tr>
                  <td><strong>椰內酯</strong></td>
                  <td>= 椰子+奶油的香氣分子，美國橡木特多（這就是為何波本桶有椰香）</td>
                </tr>
              </table>
            </div>

            <div class="reading-guide">
              <h4>📖 如何閱讀下方材種表格？</h4>
              <ol>
                <li><strong>第一步</strong>：確認你的酒款風格（細緻/濃郁？花香/焦糖香？）</li>
                <li><strong>第二步</strong>：找到對應的材種（法國=細緻花香、美國=濃郁焦糖）</li>
                <li><strong>第三步</strong>：看萃取動力（想快速上市→選快萃取；想長陳年→選慢萃取）</li>
                <li><strong>第四步</strong>：check預算（法國橡木貴2-3倍）</li>
              </ol>
              <p class="tip">💡 <strong>記憶技巧</strong>：法國橡木 = 慢工細活高價，美國橡木 = 快速濃郁平價</p>
            </div>
          </div>

          <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L4-3/01%20法美橡木桶特性對比.svg" alt="法國橡木 vs 美國橡木：材質、風味貢獻、烘烤程度與波爾多使用策略完整對比" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>
          <h3>橡木材種與紋理</h3>
          <table class="data-table">
            <thead>
              <tr><th>材種</th><th>紋理</th><th>萃取動力</th><th>感官特徵</th><th>典型應用</th></tr>
            </thead>
            <tbody>
              <tr><td>法國橡木 (Quercus robur)</td><td>細緻</td><td>緩慢</td><td>香草、花香、細緻單寧</td><td>頂級紅酒、香檳基酒</td></tr>
              <tr><td>美國橡木 (Quercus alba)</td><td>粗至中</td><td>快速</td><td>椰香、焦糖、寬闊單寧</td><td>Tempranillo、波本桶過桶</td></tr>
              <tr><td>匈牙利/東歐橡木</td><td>中細</td><td>中等</td><td>辛香、蜂蜜、均衡單寧</td><td>價值導向長陳年</td></tr>
              <tr><td>栗木 (Castanea sativa)</td><td>粗</td><td>快速</td><td>焦糖、氧化風味</td><td>傳統甜酒、醬酒</td></tr>
            </tbody>
          </table>
          <h3>乾燥與調理策略</h3>
          <p>自然風乾 24–36 個月可降解可溶性單寧並提升椰內酯；窯烘乾則加速流程但需以蒸汽調理以避免苦澀。</p>
          <p class="subhead">關鍵參數</p>
          <ul>
            <li>目標含水率：自然風乾 12–16%，混合乾燥可精準至 10%。</li>
            <li>微生物監控：Aureobasidium spp. 促進香草醛前體；需避免黑黴污染。</li>
            <li>追溯：材源→鋸解→乾燥批次，以 RFID 或區塊鏈記錄供 QC 檢索。</li>
          </ul>
          <h3>萃取動態與時間軸</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>時序 (月)</th><th>主導化合物</th><th>影響</th><th>監控建議</th></tr>
            </thead>
            <tbody>
              <tr><td>0–3</td><td>乳酸乙酯、香草素前體</td><td>香氣初期飆升</td><td>每月感官 + GC-MS 追蹤</td></tr>
              <tr><td>3–9</td><td>椰內酯、呋喃類</td><td>烘烤香氣穩定</td><td>測 L* a* b* 顔色與單寧指數</td></tr>
              <tr><td>9–18</td><td>色原酸、酚類聚合</td><td>結構整合</td><td>tannin/glucan 比例與 DO 管控</td></tr>
            </tbody>
          </table>
          <h3>供應鏈風險雷達</h3>
          <p>木材供需受氣候與森林政策影響，可用風險雷達評估價格波動、交期延遲與認證要求。</p>
          <ul>
            <li>價格波動：2022–2024 法國橡木平均 +18%，建議簽 3–5 年框架。</li>
            <li>認證：FSC/PEFC 線上驗證；無證材退場。</li>
            <li>物流：桶板 vs 成桶運輸，碳排與損耗考量。</li>
          </ul>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🌳', title: '材源差異', content: '法、美、東歐橡木紋理與萃取節奏截然不同。' },
        { id: 2, icon: '🧾', title: '乾燥追溯', content: '含水率與微生物監控決定後續風味純度。' },
        { id: 3, icon: '⚠️', title: '供應風險', content: '價格、認證與物流須納入長期合約管理。' }
      ]
    },
    {
      title: '第二章：烘烤曲線與表面調校',
      nav: '烘烤',
      icon: '🔥',
      highlightDelayStep: '0.09s',
      html: `
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>💡 概念入門：烘烤木桶 = 烤麵包的科學</h3>
            
            <div class="analogy-box">
              <h4>🍞 生活化比喻：烘烤曲線就像控制麵包烤色</h4>
              <p>想像你在烤吐司：</p>
              <ul>
                <li><strong>120-160°C</strong> = 吐司剛變金黃（奶油香、椰子香）</li>
                <li><strong>180-210°C</strong> = 吐司焦糖化（焦糖香、烘烤香）</li>
                <li><strong>220-240°C</strong> = 吐司邊緣炭化（煙燻香、但要小心苦味）</li>
              </ul>
              <p class="insight">烘烤師傅的技術在於「<strong>精準控制溫度曲線，讓香氣層次豐富，但不燒焦</strong>」。烤過頭 = 苦味；烤不夠 = 沒香氣。</p>
            </div>

            <div class="term-explanation">
              <h4>🔑 專業術語白話解釋</h4>
              <table class="term-table">
                <tr>
                  <td><strong>熱解（Pyrolysis）</strong></td>
                  <td>= 高溫把木材大分子「拆解」成小分子香氣。就像烤肉時蛋白質分解產生焦香</td>
                </tr>
                <tr>
                  <td><strong>半纖維素</strong></td>
                  <td>= 木材裡的「糖類倉庫」，加熱後變成焦糖和太妃糖香</td>
                </tr>
                <tr>
                  <td><strong>木質素</strong></td>
                  <td>= 木材的「骨架」，高溫裂解產生香草醛（香草味）和丁香酚（丁香味）</td>
                </tr>
                <tr>
                  <td><strong>脂肪酸</strong></td>
                  <td>= 木材裡的「油脂」，變成乳酸乙酯（椰香）和奶油香氣</td>
                </tr>
                <tr>
                  <td><strong>多環芳香烴</strong></td>
                  <td>= 過度炭化產生的致癌物質（就像烤焦的肉有苯並芘），需嚴格控時</td>
                </tr>
              </table>
            </div>

            <div class="toast-formula">
              <h4>🔥 烘烤公式：溫度 × 時間 = 香氣譜系</h4>
              <p><strong>輕烘烤</strong>（低溫長時間）→ 花香、奶油、細緻<br>
              <strong>中烘烤</strong>（中溫適時）→ 香草、焦糖、平衡<br>
              <strong>重烘烤</strong>（高溫短時）→ 煙燻、可可、結構</p>
              <p class="tip">💡 <strong>記憶技巧</strong>：輕=花香、中=香草、重=煙燻（就像咖啡豆烘焙）</p>
            </div>

            <div class="reading-guide">
              <h4>📖 如何使用下方的「烘烤配置互動表」？</h4>
              <ol>
                <li>選擇你的烘烤程度（輕/中/重）</li>
                <li>查看對應的香氣指標（香草醛、椰內酯等數值）</li>
                <li>參考「建議新桶比例」做調配決策</li>
                <li><strong>重點</strong>：不是記數字，而是理解「輕烘烤適合白酒、重烘烤適合紅酒」的邏輯</li>
              </ol>
            </div>
          </div>

          <h3>熱解機制</h3>
          <p>半纖維素 150–200°C 釋放焦糖與呋喃；木質素 200–240°C 產生香草醛、丁香酚；脂肪酸在 120–180°C 產生椰香乳酸乙酯。</p>
          <table class="data-table compact">
            <thead>
              <tr><th>溫度區間</th><th>主要轉化</th><th>感官影響</th><th>風險</th></tr>
            </thead>
            <tbody>
              <tr><td>120–160°C</td><td>水分蒸散、脂肪酸裂解</td><td>椰香、奶油</td><td>過度乾燥 → 桶板開裂</td></tr>
              <tr><td>180–210°C</td><td>半纖維素焦糖化</td><td>焦糖、烘烤香</td><td>局部炭化 → 苦味</td></tr>
              <tr><td>220–240°C</td><td>木質素裂解</td><td>煙燻、香草、辛香</td><td>多環芳香 → 需控時間</td></tr>
            </tbody>
          </table>
          <h3>烘烤曲線控制</h3>
          <p>以熱電偶或 IR 溫度計紀錄桶板中心與表面溫差；鎖定加熱速率 3–5°C/分鐘，並在高溫段採脈衝火焰以避免過度炭化。</p>
          <h3>表面調校選項</h3>
          <ul>
            <li>蒸汽調和：烘烤前蒸汽 5–8 分鐘，可放緩萃取曲線。</li>
            <li>紅外線增香：對焦桶板內側 2–3 分鐘，提高香草醛但不增加顏色。</li>
            <li>桶內刮削 + 再烘烤：延長桶齡並重設香氣基線。</li>
          </ul>
          <h3>烘烤配置互動表</h3>
          <div class="toast-profile-widget" style="--highlight-color:#f97316;">
            <input type="radio" id="toast-light" name="toast-profile-l43" class="opt-light" checked>
            <input type="radio" id="toast-medium" name="toast-profile-l43" class="opt-medium">
            <input type="radio" id="toast-heavy" name="toast-profile-l43" class="opt-heavy">
            <div class="selectors">
              <label for="toast-light">輕烘烤</label>
              <label for="toast-medium">中烘烤</label>
              <label for="toast-heavy">重烘烤</label>
            </div>
            <div class="panels">
              <div class="panel" data-profile="light">
                <table class="data-table compact">
                  <thead>
                    <tr><th>指標</th><th>數據</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>香草醛</td><td>45–55 mg/L • 樣酒</td></tr>
                    <tr><td>椰內酯</td><td>120 μg/L</td></tr>
                    <tr><td>單寧釋放</td><td>低</td></tr>
                    <tr><td>建議新桶比例</td><td>15–25%</td></tr>
                  </tbody>
                </table>
                <p class="note">適合細緻白酒或要保留果香的紅酒，新桶比例 15–25%。</p>
              </div>
              <div class="panel" data-profile="medium">
                <table class="data-table compact">
                  <thead>
                    <tr><th>指標</th><th>數據</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>香草醛</td><td>65–75 mg/L</td></tr>
                    <tr><td>丁香酚</td><td>8–10 mg/L</td></tr>
                    <tr><td>乳酸乙酯</td><td>平衡</td></tr>
                    <tr><td>建議新桶比例</td><td>30–40%</td></tr>
                  </tbody>
                </table>
                <p class="note">經典平衡設定，適合 Cabernet、Merlot；微氧能力與香氣均衡。</p>
              </div>
              <div class="panel" data-profile="heavy">
                <table class="data-table compact">
                  <thead>
                    <tr><th>指標</th><th>數據</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>愈創木酚</td><td>12–15 mg/L</td></tr>
                    <tr><td>煙燻類</td><td>升高</td></tr>
                    <tr><td>單寧釋放</td><td>中高</td></tr>
                    <tr><td>建議新桶比例</td><td>40–60%</td></tr>
                  </tbody>
                </table>
                <p class="note">賦予煙燻、可可與結構，適合濃郁或需長陳年的風格，須控揮發酚。</p>
              </div>
            </div>
          </div>
          <h3>品質控管 KPI</h3>
          <ul>
            <li>IR 光譜或 NIR 快速檢測烘烤光譜一致性（±5%）。</li>
            <li>桶內溫度探針紀錄檔，與批號關聯追蹤。</li>
            <li>感官打分：榆樹、焦苦、煙熏等缺陷建立即時警示。</li>
          </ul>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🔥', title: '熱解分層', content: '半纖維素→木質素→脂肪酸依序釋放不同香氣。' },
        { id: 2, icon: '📡', title: '曲線監控', content: '以熱電偶與紅外線掌握桶板核心溫度。' },
        { id: 3, icon: '🛠️', title: '互動配置', content: '輕/中/重烘烤指標可即時比較香氣與結構。' }
      ]
    },
    {
      title: '第三章：容器材質與微氧管理',
      nav: '材質',
      icon: '⚙️',
      highlightDelayStep: '0.07s',
      html: `
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>💡 概念入門：容器就像不同材質的房子</h3>
            
            <div class="analogy-box">
              <h4>🏠 生活化比喻：容器 = 葡萄酒的「住宅」</h4>
              <p>葡萄酒在容器裡陳年，就像人住在不同材質的房子：</p>
              <ul>
                <li>🪵 <strong>橡木桶</strong> = 木造日式老屋（會呼吸、有木香、需定期保養、溫度會變化）</li>
                <li>🔩 <strong>不鏽鋼槽</strong> = 現代密閉公寓（氣密、恆溫、無異味、易清潔）</li>
                <li>🧱 <strong>混凝土槽</strong> = 石造古堡（厚牆保溫、微通風、空間有對流、冬暖夏涼）</li>
                <li>🏺 <strong>陶甕</strong> = 陶土窯洞（透氣、涼爽、有礦物感、但易破損）</li>
              </ul>
              <p class="insight">不同材質的「房子」會影響葡萄酒的「生活品質」：橡木桶給香氣、不鏽鋼保新鮮、混凝土讓口感飽滿、陶甕帶礦物感。</p>
            </div>

            <div class="term-explanation">
              <h4>🔑 專業術語白話解釋</h4>
              <table class="term-table">
                <tr>
                  <td><strong>透氧率（mg/L·月）</strong></td>
                  <td>= 每個月容器「讓多少氧氣進來」。就像房子的通風程度（0.05 = 密不透風，3.0 = 很通風）</td>
                </tr>
                <tr>
                  <td><strong>熱慣性</strong></td>
                  <td>= 溫度變化的「抵抗力」。高熱慣性 = 冬暖夏涼（混凝土），低熱慣性 = 溫度隨外界變（不鏽鋼）</td>
                </tr>
                <tr>
                  <td><strong>微氧管理</strong></td>
                  <td>= 控制進入酒裡的氧氣量。適量 = 柔化單寧（像呼吸新鮮空氣），過量 = 氧化（像空氣汙染）</td>
                </tr>
                <tr>
                  <td><strong>CapEx</strong></td>
                  <td>= Capital Expenditure = 資本支出 = 買容器的錢（一次性投資）</td>
                </tr>
                <tr>
                  <td><strong>OpEx</strong></td>
                  <td>= Operating Expenditure = 運營支出 = 每年維護保養的錢（持續性支出）</td>
                </tr>
              </table>
            </div>

            <div class="oxygen-concept">
              <h4>💨 微氧的三種狀態：</h4>
              <p><strong>✅ 適量氧氣</strong>：單寧柔化、香氣開放、口感圓潤（像房間通風良好）<br>
              <strong>⚠️ 過量氧氣</strong>：氧化、褐變、失去新鮮度（像食物放在空氣中變質）<br>
              <strong>❌ 缺少氧氣</strong>：還原味（臭雞蛋、橡膠）（像密閉空間產生異味）</p>
              <p class="tip">💡 <strong>關鍵洞察</strong>：容器管理的核心是「<strong>氧氣平衡</strong>」，不同容器提供不同的氧氣節奏。</p>
            </div>

            <div class="reading-guide">
              <h4>📖 如何閱讀材質比較矩陣？</h4>
              <ol>
                <li><strong>看透氧率</strong>：想要橡木香 → 選高透氧（橡木桶）；想保留果香 → 選低透氧（不鏽鋼）</li>
                <li><strong>看熱慣性</strong>：酒窖溫度不穩 → 選高熱慣性（混凝土）；有精密控溫 → 熱慣性不重要</li>
                <li><strong>看成本</strong>：預算有限 → 不鏽鋼（高CapEx但低OpEx）；追求風味 → 橡木桶（需持續投資）</li>
                <li><strong>看風格目標</strong>：經典波爾多 → 橡木主導；現代清爽白酒 → 不鏽鋼主導</li>
              </ol>
            </div>
          </div>

          <h3>材質比較矩陣</h3>
          <table class="data-table">
            <thead>
              <tr><th>材質</th><th>透氧率 (mg/L·月)</th><th>熱慣性</th><th>感官影響</th><th>成本與維護</th></tr>
            </thead>
            <tbody>
              <tr><td>橡木桶 225L</td><td>1.5–3.0</td><td>中</td><td>香氣/結構整合</td><td>CapEx 高，需保養</td></tr>
              <tr><td>大型橡木桶 20hL</td><td>0.3–0.6</td><td>高</td><td>微氧穩定、香氣中性</td><td>需專業清洗</td></tr>
              <tr><td>不鏽鋼槽</td><td><0.05</td><td>低</td><td>保留一次香氣</td><td>CIP 容易，投資中</td></tr>
              <tr><td>混凝土蛋形槽</td><td>0.1–0.3</td><td>中高</td><td>循環對流、口感飽滿</td><td>表面保養需專業</td></tr>
              <tr><td>陶甕/安甕</td><td>0.3–0.8</td><td>中</td><td>礦物感、細緻氧化</td><td>手工維護、易碎</td></tr>
            </tbody>
          </table>
          <h3>微氧量測方法</h3>
          <ul>
            <li>非破壞式光纖探針：量測 DO 與溶解 CO₂。</li>
            <li>微氧控制系統：以 0.5–2.0 mL/L·月 精準補氧。</li>
            <li>桶塞取樣：定期泵出 50 mL 評估自由 SO₂ → 推估氧負荷。</li>
          </ul>
          <h3>熱慣性與溫控</h3>
          <p>混凝土與陶甕具高熱容量，可平滑日夜溫差；不鏽鋼需結合冷卻片或外掛溫控夾套。</p>
          <p class="subhead">調整策略</p>
          <ul>
            <li>針對高香氣白酒：前段不鏽鋼 → 中段混凝土→ 短期橡木桶。</li>
            <li>紅酒長陳年：225L 新桶 + 20hL 大桶交替，微氧設定 1.2 mg/L·月。</li>
          </ul>
          <h3>感官驗證組合</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>批次</th><th>容器鏈</th><th>關鍵觀察</th><th>決策</th></tr>
            </thead>
            <tbody>
              <tr><td>霞多麗 A</td><td>不鏽鋼發酵 → 新桶 6 月 → 大桶 6 月</td><td>香氣層次佳但結構偏硬</td><td>增添 10% 陶甕批次柔化</td></tr>
              <tr><td>Cabernet B</td><td>新桶 12 月 → 大桶 12 月</td><td>微氧穩定，需避免過度單寧</td><td>第 10 月測試轉入中性桶</td></tr>
              <tr><td>橙酒 C</td><td>陶甕浸漬 8 月 → 混凝土 4 月</td><td>礦物感突出，需抑制揮發酸</td><td>陳年後段控溫 15°C 以下</td></tr>
            </tbody>
          </table>
        </div>
      `,
      highlights: [
        { id: 1, icon: '💧', title: '透氧對照', content: '以 mg/L·月 定義各容器氧輸送能力。' },
        { id: 2, icon: '🌡️', title: '熱慣性優勢', content: '混凝土與陶甕可平滑溫度波動。' },
        { id: 3, icon: '🔁', title: '容器鏈結', content: '以分段陳年串聯多容器以調控香氣與結構。' }
      ]
    },
    {
      title: '第四章：桶齡管理與衛生控管',
      nav: '管理',
      icon: '🧴',
      html: `
        <div class="chapter-content">
          <h3>桶齡評估矩陣</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>桶齡</th><th>感官指標</th><th>化學指標</th><th>建議行動</th></tr>
            </thead>
            <tbody>
              <tr><td>0–1 年</td><td>木香強烈</td><td>香草醛 >60 mg/L</td><td>關鍵批次使用，需防滲漏</td></tr>
              <tr><td>2–3 年</td><td>香氣中等</td><td>單寧釋放穩定</td><td>維持核心批次，逐步混合新桶</td></tr>
              <tr><td>4–5 年</td><td>香氣弱</td><td>DO 控制良好</td><td>適合作為中性桶或轉為烈酒/醋用途</td></tr>
            </tbody>
          </table>
          <h3>衛生流程</h3>
          <ul>
            <li>旋轉清洗頭 + 60°C 熱水 5 分鐘，去除葡聚糖。</li>
            <li>臭氧或過氧化氫霧化 1–2 分鐘，待 24 小時排氣。</li>
            <li>乾燥監控：內部濕度 <60%，避免 Brettanomyces 滋生。</li>
          </ul>
          <h3>缺陷預防</h3>
          <p>建立 Brett、乳酸菌、揮發酸、霉味的指標矩陣，搭配 qPCR 或 ATP 測試。</p>
          <p class="subhead">行動閾值</p>
          <ul>
            <li>Brett DNA > 10² copy/mL：桶內蒸汽 + 乙醇沖洗。</li>
            <li>揮發酸 >0.7 g/L：排查衛生、溫控與氧管理。</li>
            <li>SO₂ 達 <10 mg/L：立即補硫或轉移至惰性容器。</li>
          </ul>
          <h3>資產延壽</h3>
          <p>刮削再烘烤可延壽 2–3 年；外包 UV/臭氧處理可每年降低 Brett 事件 60%。</p>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🧪', title: '桶齡 KPI', content: '香草醛、單寧與感官評估綜合判斷桶齡。' },
        { id: 2, icon: '🧼', title: '衛生三段式', content: '熱水→氧化劑→乾燥監控，阻斷微生物源。' },
        { id: 3, icon: '♻️', title: '延壽策略', content: '刮削再烘烤與 UV/O₃ 處理可延長使用年限。' }
      ]
    },
    {
      title: '第五章：多容器協同與投資決策',
      nav: '策略',
      icon: '📦',
      html: `
        <div class="chapter-content">
          <h3>陳年策略藍圖</h3>
          <p>以風格目標、產量與資本支出建立 3–5 年容器配置藍圖，結合財務與感官 KPI。</p>
          <h3>CapEx vs OpEx 分析</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>容器</th><th>初期投資</th><th>年攤提</th><th>運營成本</th><th>典型壽命</th></tr>
            </thead>
            <tbody>
              <tr><td>225L 新桶</td><td>€900–1200</td><td>3 年</td><td>維護 €40/年</td><td>3–4 年</td></tr>
              <tr><td>20hL 大桶</td><td>€8k–12k</td><td>10 年</td><td>保養 €250/年</td><td>15 年</td></tr>
              <tr><td>不鏽鋼 50hL</td><td>€15k–18k</td><td>12 年</td><td>清潔 €150/年</td><td>20+ 年</td></tr>
              <tr><td>混凝土蛋槽</td><td>€10k–15k</td><td>12 年</td><td>表面處理 €200/年</td><td>20 年</td></tr>
            </tbody>
          </table>
          <h3>容器配置情境模擬</h3>
          <div class="blend-widget container-strategy">
            <input type="radio" id="mix-classic" name="container-mix-l43" class="opt-classic" checked>
            <input type="radio" id="mix-hybrid" name="container-mix-l43" class="opt-aromatic">
            <input type="radio" id="mix-innovation" name="container-mix-l43" class="opt-reserve">
            <div class="tabs">
              <label for="mix-classic">經典橡木主導</label>
              <label for="mix-hybrid">混合材質平衡</label>
              <label for="mix-innovation">創新低氧</label>
            </div>
            <div class="scenarios">
              <div class="scenario" data-scenario="classic">
                <table class="data-table compact">
                  <thead>
                    <tr><th>容器</th><th>比例</th><th>角色</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>225L 新桶</td><td>60%</td><td>香氣與結構</td></tr>
                    <tr><td>大桶 20hL</td><td>25%</td><td>微氧穩定</td></tr>
                    <tr><td>不鏽鋼</td><td>15%</td><td>保留果香</td></tr>
                  </tbody>
                </table>
                <div class="metrics">
                  <div class="metric"><span class="label">年均 CapEx</span><span class="value">€140k</span></div>
                  <div class="metric"><span class="label">風格定位</span><span class="value">經典、長陳年</span></div>
                  <div class="metric"><span class="label">風險</span><span class="value">桶齡管理高度依賴</span></div>
                </div>
                <p class="note">維持品牌經典風格，需投入桶齡輪換與木材追溯。適合旗艦線。</p>
              </div>
              <div class="scenario" data-scenario="aromatic">
                <table class="data-table compact">
                  <thead>
                    <tr><th>容器</th><th>比例</th><th>角色</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>225L 新桶</td><td>30%</td><td>提供結構</td></tr>
                    <tr><td>混凝土蛋槽</td><td>40%</td><td>口感與熱穩定</td></tr>
                    <tr><td>陶甕</td><td>30%</td><td>香氣細節</td></tr>
                  </tbody>
                </table>
                <div class="metrics">
                  <div class="metric"><span class="label">年均 CapEx</span><span class="value">€115k</span></div>
                  <div class="metric"><span class="label">風格定位</span><span class="value">香氣突出、口感絲滑</span></div>
                  <div class="metric"><span class="label">風險</span><span class="value">陶甕維護成本</span></div>
                </div>
                <p class="note">適合拓展高端副線或限量款，展現材質多樣性與微氧層次。</p>
              </div>
              <div class="scenario" data-scenario="reserve">
                <table class="data-table compact">
                  <thead>
                    <tr><th>容器</th><th>比例</th><th>角色</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>大桶 20hL</td><td>50%</td><td>穩定氧管理</td></tr>
                    <tr><td>不鏽鋼</td><td>30%</td><td>低氧保鮮</td></tr>
                    <tr><td>惰性囊袋/柔性槽</td><td>20%</td><td>短期調和</td></tr>
                  </tbody>
                </table>
                <div class="metrics">
                  <div class="metric"><span class="label">年均 CapEx</span><span class="value">€90k</span></div>
                  <div class="metric"><span class="label">風格定位</span><span class="value">低氧純淨、快速上市</span></div>
                  <div class="metric"><span class="label">風險</span><span class="value">缺乏木桶複雜度</span></div>
                </div>
                <p class="note">適合大批量、需快速周轉的產品線，可搭配微氧系統補充細節。</p>
              </div>
            </div>
          </div>
          <h3>績效儀表板</h3>
          <ul>
            <li>感官 KPI：木質衍生香分數、口感絲滑度、氧化瑕疵率。</li>
            <li>財務 KPI：桶資產周轉率、CapEx 占營收%、維護成本/瓶。</li>
            <li>可持續：碳足跡、材料再利用比例、水耗用。</li>
          </ul>
        </div>
      `,
      highlights: [
        { id: 1, icon: '📊', title: '投資矩陣', content: 'CapEx/OpEx/壽命一覽，協助資本規劃。' },
        { id: 2, icon: '🤝', title: '情境配置', content: '三種容器情境涵蓋經典、混合與創新線。' },
        { id: 3, icon: '📈', title: '績效儀表', content: '感官、財務、永續三維 KPI 追蹤改進。' }
      ]
    }
  ],
  summary: {
    title: '課程總結',
    html: `
      <div class="comprehensive-summary">
        <h3>🎯 課程核心回顧：從木材到投資的完整決策鏈</h3>
        
        <div class="five-modules-review">
          <div class="module">
            <h4>1️⃣ 木材科學：產地決定性格</h4>
            <div class="key-points">
              <table class="mini-table">
                <tr>
                  <th>材種</th>
                  <th>核心特色</th>
                  <th>最佳應用</th>
                </tr>
                <tr>
                  <td>法國橡木</td>
                  <td>細緻、慢萃取、花香</td>
                  <td>頂級紅酒、香檳</td>
                </tr>
                <tr>
                  <td>美國橡木</td>
                  <td>濃郁、快萃取、椰香</td>
                  <td>Tempranillo、波本桶</td>
                </tr>
                <tr>
                  <td>東歐橡木</td>
                  <td>中庸、均衡、CP值高</td>
                  <td>價值導向長陳年</td>
                </tr>
              </table>
              <p class="takeaway">💡 <strong>關鍵洞察</strong>：紋理 = 萃取速度，乾燥 = 香氣純度。法國橡木貴2-3倍不是炒作，而是紋理細緻、萃取可控。</p>
            </div>
          </div>

          <div class="module">
            <h4>2️⃣ 烘烤曲線：溫度 × 時間 = 香氣譜系</h4>
            <div class="key-points">
              <p><strong>輕烘烤</strong>：香草醛 45-55 mg/L → 花香、奶油、細緻 → 細緻白酒<br>
              <strong>中烘烤</strong>：香草醛 65-75 mg/L → 香草、焦糖、平衡 → 經典紅酒<br>
              <strong>重烘烤</strong>：愈創木酚 12-15 mg/L → 煙燻、可可、結構 → 濃郁陳年</p>
              <p class="takeaway">💡 <strong>關鍵洞察</strong>：烘烤曲線是「香氣工程」，不是碰運氣。熱電偶監控 + 脈衝火焰 = 避免局部炭化苦味。</p>
            </div>
          </div>

          <div class="module">
            <h4>3️⃣ 容器材質：葡萄酒的「住宅」選擇</h4>
            <div class="key-points">
              <table class="container-summary">
                <tr>
                  <th>容器</th>
                  <th>透氧率</th>
                  <th>風格影響</th>
                  <th>何時使用</th>
                </tr>
                <tr>
                  <td>225L橡木桶</td>
                  <td>1.5-3.0</td>
                  <td>香氣+結構</td>
                  <td>頂級酒、長陳年</td>
                </tr>
                <tr>
                  <td>20hL大桶</td>
                  <td>0.3-0.6</td>
                  <td>微氧穩定、中性</td>
                  <td>大批量平衡</td>
                </tr>
                <tr>
                  <td>不鏽鋼</td>
                  <td><0.05</td>
                  <td>保留果香</td>
                  <td>清爽白酒</td>
                </tr>
                <tr>
                  <td>混凝土蛋槽</td>
                  <td>0.1-0.3</td>
                  <td>口感飽滿、對流</td>
                  <td>高端副線</td>
                </tr>
                <tr>
                  <td>陶甕</td>
                  <td>0.3-0.8</td>
                  <td>礦物感、細緻</td>
                  <td>限量款</td>
                </tr>
              </table>
              <p class="takeaway">💡 <strong>關鍵洞察</strong>：透氧率決定陳年節奏。橡木桶 = 高速公路，不鏽鋼 = 停車場，混凝土 = 鄉間小路。</p>
            </div>
          </div>

          <div class="module">
            <h4>4️⃣ 桶齡管理：像運動鞋一樣有壽命</h4>
            <div class="key-points">
              <ul>
                <li><strong>0-1年</strong>：新桶木香強（香草醛>60 mg/L），適合旗艦酒款</li>
                <li><strong>2-3年</strong>：香氣中等，核心批次使用，逐步混合新桶</li>
                <li><strong>4-5年</strong>：香氣弱化，轉為中性桶或其他用途</li>
              </ul>
              <p><strong>延壽策略</strong>：刮削再烘烤 → 延長2-3年 | UV/臭氧處理 → 減少Brett事件60%</p>
              <p class="takeaway">💡 <strong>關鍵洞察</strong>：桶子不是「用到壞」，而是「用到中性」。5年後的桶還能用，只是不再提供木香。</p>
            </div>
          </div>

          <div class="module">
            <h4>5️⃣ 投資決策：CapEx vs OpEx vs 風格目標</h4>
            <div class="key-points">
              <p><strong>經典橡木主導</strong>：60% 新桶 + 25% 大桶｜年均€140k｜長陳年風格｜適合旗艦線</p>
              <p><strong>混合材質平衡</strong>：30% 新桶 + 40% 混凝土 + 30% 陶甕｜年均€115k｜香氣突出｜適合高端副線</p>
              <p><strong>創新低氧</strong>：50% 大桶 + 30% 不鏽鋼｜年均€90k｜快速上市｜適合大批量</p>
              <p class="takeaway">💡 <strong>關鍵洞察</strong>：容器配置不是「越貴越好」，而是「風格導向 + 經濟平衡」。€140k買全新桶，如果風格不match，就是浪費。</p>
            </div>
          </div>
        </div>

        <h3>🔄 系統思維：容器決策的連鎖反應</h3>
        <div class="system-thinking">
          <p>選擇法國橡木 → 細緻紋理 → 慢萃取 → 需18個月陳年 → 資金占用高 → 定價必須反映成本</p>
          <p class="insight">每個容器決策都會觸發財務、時間、風格的連鎖反應。專家思維是「<strong>預見全局，避免後續瓶頸</strong>」。</p>
        </div>

        <h3>🌟 三個關鍵洞察</h3>
        <div class="key-insights-final">
          <div class="insight-card">
            <h4>🎻 容器是樂器，不是倉庫</h4>
            <p>橡木桶不是單純「放酒的地方」，而是「塑造風格的工具」。就像小提琴手選琴，釀酒師選桶要match風格目標。<strong>容器選擇 = 音樂編曲</strong>，不是倉儲管理。</p>
          </div>
          
          <div class="insight-card">
            <h4>💰 投資邏輯：長期 ROI > 短期成本</h4>
            <p>225L新桶€1000看似貴，但能用3年、服務200箱酒，攤提下來每箱€15。如果這€15能讓售價提高€50（因為風格更好），ROI就是正的。<strong>別算「買桶多少錢」，要算「每瓶酒的價值提升」</strong>。</p>
          </div>
          
          <div class="insight-card">
            <h4>🧪 數據+感官，缺一不可</h4>
            <p>透氧率、香草醛、熱電偶數據是「科學基礎」，但最終要<strong>品嚐驗證</strong>。1.8 mg/L·月的微氧，在Pinot Noir可能剛好，在Sauvignon Blanc可能過度。<strong>數據指引方向，舌頭做最終決策</strong>。</p>
          </div>
        </div>

        <h3>📚 延伸學習建議</h3>
        <ul class="further-study">
          <li><strong>材質深化</strong>：參訪制桶廠（法國Taransaud、美國Seguin Moreau），看烘烤曲線實作</li>
          <li><strong>微氧實驗</strong>：用光纖DO探針追蹤不同容器的氧輸送節奏，建立自家基準數據庫</li>
          <li><strong>案例研究</strong>：研究Domaine de la Romanée-Conti的桶齡策略、Penfolds的美國橡木藝術</li>
          <li><strong>財務建模</strong>：用Excel建立容器投資模型：CapEx + OpEx + 折舊 + 風格溢價 = 總ROI</li>
          <li><strong>感官訓練</strong>：盲品「同酒不同桶」組合（新桶vs舊桶、法國vs美國、輕烘vs重烘），建立桶味辨識能力</li>
        </ul>

        <div class="final-message">
          <h4>🎓 最後的話</h4>
          <p>
            容器科學表面上是「買什麼桶、怎麼用」的技術問題，實際上是「<strong>如何用有限資源，創造理想風格</strong>」的戰略問題。
            掌握本課後，你能夠：
          </p>
          <ul>
            <li>✅ 根據風格目標選擇材質組合（不再被廠商牽著鼻子走）</li>
            <li>✅ 評估烘烤曲線對香氣譜系的影響（不只是「輕中重」這麼簡單）</li>
            <li>✅ 平衡微氧管理與成本控制（知道何時該投資橡木桶，何時該用不鏽鋼）</li>
            <li>✅ 建立多容器協同策略（像指揮家調度樂器組合）</li>
          </ul>
          <p>這就是Level 4專家與一般釀酒師的區別：<strong>你不只是「用容器」，而是「設計容器策略」</strong>。</p>
          <p class="final-quote">"The barrel is not a container, it's an instrument." — 頂級釀酒師的共同信念</p>
        </div>
      </div>
    `
  },
  quiz: {
    title: '課後測驗',
    questions: [
      {
        id: 1,
        question: '若希望延長桶壽命並重設香氣基線，哪個流程較適合？',
        options: ['熱水清洗後直接使用', '桶內刮削搭配再烘烤', '提高 SO₂ 濃度到 50 mg/L'],
        correct: 1,
        explanation: '刮削再烘烤可移除舊層並重新激活木香，是延壽常用流程。'
      },
      {
        id: 2,
        question: '混凝土蛋槽的主要優勢為何？',
        options: ['提供最高微氧輸送', '熱慣性高並促進對流', '完全免維護且成本最低'],
        correct: 1,
        explanation: '混凝土熱容量大且能形成自然對流，適合打造飽滿口感。'
      },
      {
        id: 3,
        question: '在烘烤過程中應如何避免局部炭化造成苦味？',
        options: ['加速升溫至 260°C', '採用脈衝火焰並監控桶板核心溫度', '減少烘烤時間到 30 秒'],
        correct: 1,
        explanation: '脈衝火焰搭配核心溫度監控可維持均勻熱解，避免炭化。'
      },
    {
        id: 4,
        question: '評估橡木桶材源品質時，哪個指標最能反映木材通氣性與香氣釋放的一致性？',
        options: [
        '年輪密度（每公分年輪數）',
        '桶板物理尺寸規格',
        '酒莊現有庫存量'
        ],
        correct: 0,
        explanation: '年輪密度直接影響木材氣孔結構與香氣化合物（如內酯、香草醛）釋放速率，是材源分級與採購的核心指標。'
      },
      {
        id: 5,
        question: '評估多容器策略的總擁有成本（TCO）時，哪項成本最容易被低估？',
        options: [
        '新橡木桶採購費',
        '混凝土槽的清潔耗水與週期維護成本',
        '不鏽鋼槽購置費'
        ],
        correct: 1,
        explanation: '混凝土槽看似低維護，但清潔需大量水與專業工序，長期 TCO 往往高於預期；不鏽鋼槽雖購置貴，但清潔效率高。'
      },
    ],
    passingScore: 60,
    timeLimit: 180
  }
})

export const l43Content = [
  ..._l43Base,
  {
    type: 'quiz',
    title: '模組診斷測驗 — 風土與釀造科學（B4M1）',
    questions: [
      {
        id: 1,
        question: '評估微地塊時，哪個遙感指標最能同時反映土壤水分狀態與植被活力？',
        options: [
          'DEM（數字地形模型）',
          'NDWI（歸一化差異水分指數）',
          'Lidar 點雲密度分析',
          '地形濕度指數（TWI）'
        ],
        correct: 1,
        explanation: 'NDWI 透過近紅外線與短波紅外線波段差異，同時反映地表水分存行與植被對水分的利用狀況，是微地塊水分管理最直接的遙感指標。'
      },
      {
        id: 2,
        question: '分批採收決策的最佳實踐應綜合評估哪四個成熟度指標？',
        options: [
          'Brix 達標即全部採收',
          '果實梗驗確認縝酒酸集中度＋種子成熟度＋果皮酚類成熟＋味覺綜合評估',
          '只需測量總酸/pH 比值',
          '每天測量糖度，等到最高值即採收'
        ],
        correct: 1,
        explanation: '現代精準採收的四元素評估：(1) 糖分（Brix）；(2) 酸度（TA/pH）；(3) 種子成熟度（種子顏色由綠轉褐）；(4) 果皮酚類成熟度（能否呈現成熟風味而非青澀感）。單一 Brix 指標無法全面反映小地塊的成熟差異。'
      },
      {
        id: 3,
        question: '主發酵期間 YAN（酵母可利用氮）不足最可能產生哪種釀造缺陷？',
        options: [
          '輪替性酸敗（TCA 木塞味）',
          '硫化氫（H₂S）與硫醇類（Mercaptans）等還原性異味',
          '天竺葵味（Geranium Taint）',
          '酒香酵母污染（Brett）'
        ],
        correct: 1,
        explanation: 'YAN 不足時酵母對硫酸鹽的代謝壓力增加，將其還原為 H₂S，進一步醣化形成硫醇類，產生硫磺、橡膠、橘皮等負面氣味。診斷方法：加入少量銅片，若氣味消失則確認為 H₂S。'
      },
      {
        id: 4,
        question: '在橡木桶組合策略中，「年輪密度偏小、絕乾地類型」橡木的特性是？',
        options: [
          '降低中場等級酒款的釀造成本',
          '香氣釋放較快、適合強調果香且較早飲用的酒款',
          '提供最高的單寧/香草醛釋放量',
          '於長期陶瓶陳年酒款中提供最佳結構支撐'
        ],
        correct: 1,
        explanation: '年輪密度偏小（細密木材）的橡木，香氣釋放較快、通氣性較高，適合需要早期果香表現且較早飲用的酒款；年輪密度大的橡木（粗紋木材）香氣釋放慢、結構支撐力強，適合長期陳年酒款。'
      },
      {
        id: 5,
        question: '白蘇維濃（Sauvignon Blanc）最具代表性的品種香氣類型是透氣硫醇（Volatile Thiols），以下哪個描述最準確？',
        options: [
          '在發酵結束後直接釋放至酒液中',
          '在葡萄中以結合態半胱氨酸結合物存在，發酵期酵母透過特定酵素釋放為游離態',
          '只有在橡木桶陳年後才會發展出來',
          '由 SO₂ 添加觸發產生'
        ],
        correct: 1,
        explanation: '透氣硫醇（3MH、4MMP 等）在葡萄中以半胱氨酸結合物（Cys-conjugates）形式存在，無香氣。發酵時，酵母胞外的 β-lyase 酶將結合態切割，釋放為游離態揮發性硫醇，呈現百香果、葡萄柚等標誌性香氣。'
      },
      {
        id: 6,
        question: '地形濕度指數（TWI）偏高（>10）的地塊，對赤霞珠成熟度最可能產生什麼影響？',
        options: [
          '提前成熟，糖分高度濃縮',
          '生長期延長且成熟不均勻，糖/酸度比偏低',
          '大幅提高果皮花青素含量',
          '此地塊應最早採收，因排水最快'
        ],
        correct: 1,
        explanation: 'TWI 高的區域有積水傾向，小雨後土壤濕潤時間長，葡萄生長勢旺盛、果粒較大、成熟不均勻，糖/酸度比對比高坡排水地塊偏低，是微地塊成熟差異管理的重點關注區域。'
      },
      {
        id: 7,
        question: '橡木桶的 TCO（總擁有成本）分析中，「Angels\' Share（蒸發損失）」屬於哪種成本類型？',
        options: [
          '固定直接成本',
          '間接成本（使用過程中難以預設的隱性成本）',
          '一次性資本支出',
          '可完全保險轉嫁的風險成本'
        ],
        correct: 1,
        explanation: '蒸發損失是酒液透過橡木氣孔自然蒸發的成本，波爾多一般為 3-5%/年，屬於橡木桶使用中的間接成本，在 TCO 分析中常被低估，但實際約佔全部橡木桶相關成本的 15-20%。'
      },
      {
        id: 8,
        question: '在釀造高端白酒（Sémillon/Sauvignon Blanc 混配）時，下列哪種容器組合最能在增加複雜度的同時保留新鮮果香？',
        options: [
          '100% 新橡木桶（225L）+ 頻繁攪桶',
          '50% 二年桶 + 50% 不鏽鋼槽，低溫發酵，攪桶少',
          '100% 舊桶，不攪桶',
          '全程不鏽鋼槽，嚴格隔氧'
        ],
        correct: 1,
        explanation: '50% 二年桶提供適度氧化複雜度（奶油、堅果香），50% 不鏽鋼槽保留新鮮果香；低溫發酵（14-16°C）減緩揮發性香氣損失；少量攪桶增加質地而不過分氧化。100% 新桶對白酒通常過於強勢，遮蓋品種特色。'
      },
      {
        id: 9,
        question: '波爾多釀酒師使用「呼喚天法」（整串不去梗發酵）的主要風味影響是？',
        options: [
          '提升酒款甜度和殘糖感',
          '增加更多嗆澀感和木質單寧',
          '增加香料和花香層次，提升結構複雜度，但需小心管理梗的成熟度',
          '降低酒精度，使酒款更清爽'
        ],
        correct: 2,
        explanation: '整串發酵（Whole Cluster Fermentation）引入梗中的單寧與酶類，可增加香料（胡椒、肉桂）、花香層次和更精緻的結構感。但梗必須充分成熟（木質化），未熟的綠梗會帶來生硬的草本苦澀味。波爾多（尤其右岸）部分頂級酒莊已採用此工藝。'
      },
      {
        id: 10,
        question: '在評估波爾多赤霞珠的酚類成熟度時，「種子成熟度」（Seed Maturity）對釀造有什麼指導意義？',
        options: [
          '種子成熟度越低越好，可降低單寧苦澀感',
          '種子顏色由綠轉褐時，種子單寧由嗆澀轉為圓滑，是採收時機的重要指標',
          '種子成熟度與果肉糖分完全同步，不需單獨評估',
          '種子單寧不影響最終酒款品質'
        ],
        correct: 1,
        explanation: '種子單寧（Seed Tannins）在未熟時呈嗆澀苦感，隨成熟顏色由綠→黃→褐，單寧結構從粗澀轉為圓滑。種子成熟度評估（咀嚼種子感受苦澀程度）是赤霞珠最重要的採收指標之一，直接決定最終酒款的單寧品質。'
      }
    ],
    passingScore: 70,
    timeLimit: 420
  }
]

export default l43Content
