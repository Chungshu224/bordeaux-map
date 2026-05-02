import { makeL4Lesson } from './l4-shared.js'

export const l48Content = makeL4Lesson({
  cover: {
    title: '永續與碳盤查',
    subtitle: 'Level 4 - 課程 8',
    background: 'linear-gradient(135deg, #065f46 0%, #10b981 50%, #6ee7b7 100%)',
    icon: '🌱'
  },
  intro: {
    content: `
      <div class="intro-section">
        <h2>🌱 永續與碳盤查 = 企業健康管理系統</h2>
        <p>想像你經營一家百年老店,要傳給下一代。永續經營不就是「讓店健康活下去」嗎?</p>
        <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L4-8/01%20ESG永續經營與碳盤查路徑.svg" alt="ESG永續經營與碳盤查路徑" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>
        <ul>
          <li><strong>🩺 ESG 框架 = 企業全身健檢</strong>: 
            <ul>
              <li>E(環境) = 身體健康: 碳排、水資源、土壤 → 檢查血壓血糖 (環境指標)</li>
              <li>S(社會) = 心理健康: 員工、社區、供應鏈 → 評估壓力與人際關係 (社會資本)</li>
              <li>G(治理) = 大腦決策: 董事會、內控、透明度 → 確保理性決策與風險控管 (治理機制)</li>
            </ul>
            <p class="insight-box">💡 <strong>關鍵類比</strong>: 三重底線 = 企業同時維持身體(環境)、心理(社會)、大腦(治理)健康,缺一不可。</p>
          </li>
          <li><strong>📊 溫室氣體盤查 = 記帳理財 APP</strong>: 
            <ul>
              <li>範疇一 (直接排放) = <strong>必要開銷</strong>: 柴油拖拉機、鍋爐 → 就像房租、水電</li>
              <li>範疇二 (購電) = <strong>變動帳單</strong>: 外購電力 → 就像電信、網路費 (可選綠電降帳單)</li>
              <li>範疇三 (價值鏈) = <strong>隱性消費</strong>: 玻璃瓶、運輸、員工通勤 → 就像外食、訂閱、信用卡利息 (70-80% 的碳排)</li>
            </ul>
            <p class="insight-box">💡 <strong>關鍵類比</strong>: GHG 盤查 = 打開記帳 APP,發現「原來外食 (範疇三) 花最多錢!」</p>
          </li>
          <li><strong>🎯 減碳路徑 = 投資組合優化</strong>: 
            <ul>
              <li>速贏方案 (Quick Wins) = <strong>短期理財</strong>: 綠電、輕量瓶 → 3-12 個月回本,低風險高報酬 (年化 17.5% 減排)</li>
              <li>成本優化方案 (Cost-Optimal) = <strong>中期投資</strong>: 太陽能、在地供應 → 6-8 年回本,穩健收益 (年化 27.5% 減排)</li>
              <li>最大影響方案 (Maximum Impact) = <strong>長期策略</strong>: 全套再生能源、循環包裝 → 10-15 年視野,系統轉型 (年化 55% 減排)</li>
            </ul>
            <p class="insight-box">💡 <strong>關鍵類比</strong>: 科學減碳 = 配置投資組合,平衡短期現金流、中期報酬、長期願景。</p>
          </li>
          <li><strong>🏅 永續認證 = 取得專業證照</strong>: 
            <ul>
              <li>有機/生物動力 = <strong>營養師執照</strong>: 證明你會「健康飲食」(農法專業)</li>
              <li>碳中和/ISO = <strong>財務規劃師 CFP</strong>: 證明你會「管錢」(碳管理專業)</li>
              <li>B Corp = <strong>全科醫師執照</strong>: 證明你「全方位健康」(綜合 ESG)</li>
            </ul>
            <p class="insight-box">💡 <strong>關鍵類比</strong>: 認證體系 = 考證照組合,用第三方背書打消消費者疑慮。</p>
          </li>
          <li><strong>📢 ESG 報告 = 定期健康報告給家人</strong>: 
            <ul>
              <li>內部溝通 = 家庭會議: 跟老婆小孩報告「今年體檢結果、減重成果、未來運動計畫」</li>
              <li>外部揭露 = 保險公司報告: 給投資人、銀行、監管機關看「企業健康證明」以降低保費(融資成本)</li>
              <li>重大性評估 = 優先順序: 先治高血壓(碳排),再處理輕微近視(包裝廢棄物)</li>
            </ul>
            <p class="insight-box">💡 <strong>關鍵類比</strong>: 透明溝通 = 主動公開體檢報告,讓家人(利害關係人)放心,也倒逼自己持續改善。</p>
          </li>
        </ul>

        <div class="reading-guide">
          <h3>📖 閱讀指南</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>讀者類型</th><th>建議路徑</th><th>重點章節</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>莊主/總經理</td>
                <td>戰略佈局</td>
                <td>Ch1 ESG 框架 + Ch3 減碳路徑 + Ch5 利害關係人溝通 (理解永續如何創造商業價值)</td>
              </tr>
              <tr>
                <td>永續/ESG 經理</td>
                <td>完整學習</td>
                <td>全章 (建立從盤查→減量→認證→報告的完整系統)</td>
              </tr>
              <tr>
                <td>財務長/投資人</td>
                <td>投資回報</td>
                <td>Ch3 減碳成本曲線 + Ch4 認證 ROI + Ch5 ESG 揭露 (量化永續投資報酬率)</td>
              </tr>
              <tr>
                <td>釀酒師/葡萄園經理</td>
                <td>技術實作</td>
                <td>Ch2 盤查方法 + Ch3 減碳技術矩陣 (學習碳盤查工具與節能技術)</td>
              </tr>
              <tr>
                <td>行銷/品牌經理</td>
                <td>溝通認證</td>
                <td>Ch4 認證體系比較 + Ch5 ESG 報告 (學習永續故事如何轉化為品牌價值)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="framework-overview">
          <h3>🎯 五步永續管理框架</h3>
          <ol>
            <li><strong>步驟一: 建立框架 (Ch1)</strong>: 
              <ul>
                <li>定義永續願景 → 選擇 ESG 框架 (GRI/CSRD/TCFD)</li>
                <li>成立永續委員會 → 納入董事會治理</li>
                <li>設定基準年與長期目標</li>
              </ul>
            </li>
            <li><strong>步驟二: 盤查現況 (Ch2)</strong>: 
              <ul>
                <li>按 GHG Protocol 蒐集範疇一二三數據</li>
                <li>計算碳強度 (kg CO₂e/瓶、/ha、/營收)</li>
                <li>通過 ISO 14064-1 第三方查證</li>
              </ul>
            </li>
            <li><strong>步驟三: 設計路徑 (Ch3)</strong>: 
              <ul>
                <li>提交 SBTi 科學目標 (1.5°C 路徑: 範疇一二年減 4.2%、範疇三年減 2.5%)</li>
                <li>使用邊際減排成本曲線 (MACC) 排序技術方案</li>
                <li>規劃速贏→成本優→影響最大的三階段行動</li>
              </ul>
            </li>
            <li><strong>步驟四: 取得認證 (Ch4)</strong>: 
              <ul>
                <li>選擇符合市場定位的認證組合 (有機+碳中和、HVE+B Corp...)</li>
                <li>準備審計文件 → 現場稽核 → 獲證</li>
                <li>將認證標章整合進產品標示與行銷</li>
              </ul>
            </li>
            <li><strong>步驟五: 溝通報告 (Ch5)</strong>: 
              <ul>
                <li>進行重大性評估 (利害關係人調查)</li>
                <li>撰寫年度永續報告 (GRI/CSRD 格式)</li>
                <li>建立數位揭露工具 (永續微網站、區塊鏈溯源)</li>
                <li>納入 ESG KPI 到高管與員工績效考核</li>
              </ul>
            </li>
          </ol>
          <p class="insight-box">🔄 <strong>持續改進迴圈</strong>: 每年重新盤查 → 檢視目標達成率 → 調整減量計畫 → 更新報告 → 提升認證等級。</p>
        </div>

        <div class="real-world-context">
          <h3>🌍 為什麼永續成為酒莊必修課?</h3>
          <table class="data-table">
            <thead>
              <tr><th>驅動力</th><th>具體壓力</th><th>時間表</th><th>不作為後果</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>法規壓力</strong></td>
                <td>歐盟 CBAM (碳邊境稅)、CSRD 強制揭露</td>
                <td>2026 起開徵碳稅</td>
                <td>出口成本增加 5-15%、市場准入受限</td>
              </tr>
              <tr>
                <td><strong>市場需求</strong></td>
                <td>55% 千禧世代願為永續產品多付 10-20%</td>
                <td>已發生</td>
                <td>失去年輕消費者、品牌老化</td>
              </tr>
              <tr>
                <td><strong>氣候風險</strong></td>
                <td>霜凍、乾旱、熱浪頻率增加</td>
                <td>2030 年前加劇</td>
                <td>產量不穩、保險費暴漲、極端事件破產</td>
              </tr>
              <tr>
                <td><strong>金融條件</strong></td>
                <td>銀行綠色貸款利率優惠 0.5-1%</td>
                <td>已實施</td>
                <td>融資成本劣勢、估值折價</td>
              </tr>
              <tr>
                <td><strong>品牌聲譽</strong></td>
                <td>NGO 漂綠監督、社群媒體放大爭議</td>
                <td>即時風險</td>
                <td>聲譽危機、抵制運動、NPS 下降</td>
              </tr>
            </tbody>
          </table>
          <p class="key-insight">⚡ <strong>關鍵洞察</strong>: 永續已從「加分項」變成「必答題」。2026 CBAM 碳關稅上路後,不做碳盤查的酒莊將面對「出口成本增加 + 市場准入受限 + 融資不利 + 品牌受損」的四重夾擊。</p>
        </div>

        <div class="economic-rationale">
          <h3>💰 永續的商業邏輯 (不只是道德)</h3>
          <table class="data-table">
            <thead>
              <tr><th>投資項目</th><th>初期成本</th><th>年度收益/節省</th><th>回本期</th><th>附加價值</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>太陽能系統 (50kW)</td>
                <td>€40K</td>
                <td>€6K/年 (省電費)</td>
                <td>6.7 年</td>
                <td>減 15 噸 CO₂e、能源獨立、綠電憑證</td>
              </tr>
              <tr>
                <td>有機認證</td>
                <td>€2K-5K (首年)</td>
                <td>+15-25% 產品溢價</td>
                <td>< 2 年</td>
                <td>土壤健康、品牌差異化、出口優勢</td>
              </tr>
              <tr>
                <td>輕量化玻璃瓶</td>
                <td>€0 (等重置時換)</td>
                <td>減 36 噸 CO₂e/年</td>
                <td>立即</td>
                <td>運費下降、碳足跡標籤、消費者好感</td>
              </tr>
              <tr>
                <td>綠電合約</td>
                <td>電費溢價 5-10%</td>
                <td>範疇二歸零、減 27 噸</td>
                <td>N/A</td>
                <td>RE100 資格、金融 ESG 評分提升</td>
              </tr>
              <tr>
                <td>碳中和認證 (PAS 2060)</td>
                <td>€8K-15K (首次)</td>
                <td>+10-15% B2B 訂單</td>
                <td>1-2 年</td>
                <td>差異化賣點、高端餐廳採購資格</td>
              </tr>
            </tbody>
          </table>
          <p class="key-insight">💡 <strong>ROI 驚喜</strong>: 速贏方案 (綠電+輕量瓶) 可在 <strong>12 個月內減排 17.5%,額外成本 < €10K</strong>。配合有機溢價,第二年即開始淨獲利。</p>
        </div>

        <div class="common-pitfalls">
          <h3>⚠️ 三大常見誤區</h3>
          <table class="data-table">
            <thead>
              <tr><th>誤區</th><th>錯誤想法</th><th>正確認知</th><th>實際案例</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>誤區一: 小酒莊不需要做</strong></td>
                <td>「我們才 20ha,碳排可忽略」</td>
                <td>規模小反而容易達標,且消費者更關注精品酒莊的價值觀</td>
                <td>20ha 酒莊執行速贏方案 (綠電+輕量瓶),2 年減排 30%,溢價+18%,投資 €12K 回本 14 個月</td>
              </tr>
              <tr>
                <td><strong>誤區二: 碳中和就是種樹抵銷</strong></td>
                <td>「買碳權就能宣稱碳中和」</td>
                <td>PAS 2060 要求: <strong>先盤查→優先減排→不可避免的排放才能抵銷</strong>,且抵銷項目需第三方認證</td>
                <td>某酒莊宣稱碳中和但未減排,被 NGO 質疑漂綠,股價單日跌 8%,品牌信任危機</td>
              </tr>
              <tr>
                <td><strong>誤區三: ESG 報告是大企業的事</strong></td>
                <td>「我們不上市,不用寫報告」</td>
                <td>B2B 客戶 (餐廳、經銷商、航空公司) 要求供應鏈 ESG 數據納入自己的範疇三盤查</td>
                <td>米其林餐廳要求供應商提供碳足跡,無法提供者失去 €150K/年訂單</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="success-metrics">
          <h3>📊 學完本課程你將掌握的關鍵數字</h3>
          <ul class="metrics-list">
            <li>🎯 <strong>盤查結構</strong>: 典型酒莊範疇一 10-15% (柴油/鍋爐)、範疇二 5-10% (購電)、<strong>範疇三 70-80% (玻璃瓶佔 55%)</strong></li>
            <li>🎯 <strong>碳強度</strong>: 50ha 酒莊、20 萬瓶產量 → 總排放 400 噸 → <strong>2kg CO₂e/瓶</strong></li>
            <li>🎯 <strong>科學目標</strong>: SBTi 1.5°C 路徑 → 範疇一二<strong>年減 4.2%</strong>、範疇三年減 2.5%、2050 淨零</li>
            <li>🎯 <strong>速贏方案</strong>: 綠電 + 輕量瓶 → <strong>12 個月減排 17.5%,成本 < €10K</strong></li>
            <li>🎯 <strong>成本優化方案</strong>: +太陽能 + 在地供應 → <strong>3 年減排 27.5%,投資 €63K,8 年回本</strong></li>
            <li>🎯 <strong>認證投報</strong>: 有機認證 €2K-5K/年 → <strong>產品溢價 +15-25%,< 2 年回本</strong></li>
            <li>🎯 <strong>B2B 優勢</strong>: 碳中和認證 → <strong>B2B 訂單 +10-15%</strong>,高端餐廳採購門檻</li>
            <li>🎯 <strong>金融優惠</strong>: ESG 評級 B+ 以上 → <strong>綠色貸款利率優惠 0.5-1%</strong></li>
            <li>🎯 <strong>消費者溢價</strong>: 55% 千禧世代 → <strong>願為永續產品多付 10-20%</strong></li>
            <li>🎯 <strong>風險折扣</strong>: 有機+氣候調適 → <strong>農業保險費下降 8-12%</strong></li>
          </ul>
        </div>
      </div>
    `
  },
  objectives: [
    { id: 1, text: '掌握 GHG (Greenhouse Gas) Protocol 與 ISO (International Organization for Standardization) 14064 碳盤查方法', icon: '📊' },
    { id: 2, text: '設計涵蓋範疇一至三的減碳路徑', icon: '🎯' },
    { id: 3, text: '整合有機、生物動力、HVE (Haute Valeur Environnementale) 等認證體系', icon: '✅' },
    { id: 4, text: '建立 ESG (Environmental, Social, Governance) 報告與利害關係人溝通框架', icon: '📢' }
  ],
  chapters: [
    {
      title: '第一章：永續框架與 ESG 整合',
      nav: '永續框架',
      icon: '🌍',
      highlightDelayStep: '0.06s',
      html: `
        <div class="chapter-content">
          <div class="concept-intro-section">
            <h2>🩺 概念入門: ESG 框架 = 企業全身健檢套餐</h2>
            <p class="analogy-intro">想像你去醫院做健康檢查,醫生會開「全身健檢套餐」,不只檢查血壓血糖 (身體),還要評估壓力指數 (心理) 與大腦認知 (決策能力)。<strong>ESG 框架就是企業的全身健檢套餐</strong>。</p>
            
            <div class="analogy-breakdown">
              <h3>生活化類比: 個人健康 → 企業永續</h3>
              <table class="data-table">
                <thead>
                  <tr><th>健檢項目</th><th>個人健康</th><th>ESG 對應</th><th>酒莊實踐</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>身體健康 (E)</strong></td>
                    <td>血壓、血糖、肝功能 → 檢查你的「物質代謝」</td>
                    <td>碳排放、水資源、土壤健康 → 檢查企業的「環境代謝」</td>
                    <td>盤查 400 噸碳排、滴灌省 30% 水、有機面積 60%</td>
                  </tr>
                  <tr>
                    <td><strong>心理健康 (S)</strong></td>
                    <td>壓力、人際關係、工作滿意度 → 評估你的「社會連結」</td>
                    <td>員工福祉、社區關係、供應鏈公平 → 評估企業的「社會資本」</td>
                    <td>工安零事故、在地採購 70%、支持社區學校 €25K/年</td>
                  </tr>
                  <tr>
                    <td><strong>大腦決策 (G)</strong></td>
                    <td>認知功能、風險評估、理性判斷 → 確保你「不會做蠢事」</td>
                    <td>董事會監督、內控系統、透明揭露 → 確保企業「不會做蠢事」</td>
                    <td>成立永續委員會、通過 ISO 14064 查證、年度 ESG 報告</td>
                  </tr>
                </tbody>
              </table>
              <p class="insight-box">💡 <strong>關鍵洞察</strong>: 就像「只運動不睡覺」會生病,企業「只看利潤不管環境/員工」也會生病 → ESG 三個面向缺一不可。</p>
            </div>

            <div class="why-this-matters">
              <h3>為什麼 2024 年後 ESG 從「加分項」變「必答題」?</h3>
              <table class="data-table">
                <thead>
                  <tr><th>驅動力</th><th>醫療類比</th><th>ESG 實際情境</th><th>時間急迫性</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>法規強制 = 強制體檢</strong></td>
                    <td>50 歲後政府要求定期健檢 (早發現早治療)</td>
                    <td>歐盟 CSRD 強制揭露 (2024 起)、CBAM 碳關稅 (2026 起)</td>
                    <td>⚠️ 已立法,不做會罰</td>
                  </tr>
                  <tr>
                    <td><strong>市場需求 = 保險公司要求</strong></td>
                    <td>買保險前要提供體檢報告 (沒報告保費貴 30%)</td>
                    <td>B2B 客戶要求供應鏈碳數據、綠色貸款要 ESG 評級</td>
                    <td>🔥 進行中,不做失去訂單/融資</td>
                  </tr>
                  <tr>
                    <td><strong>氣候風險 = 慢性病惡化</strong></td>
                    <td>不控制血糖 → 10 年後併發症 (視網膜/腎衰竭)</td>
                    <td>不減碳 → 2030 年後極端氣候 (霜凍頻率 +50%、保險費暴漲)</td>
                    <td>⏰ 窗口期 5-10 年,現在不做來不及</td>
                  </tr>
                  <tr>
                    <td><strong>品牌價值 = 健身網紅效應</strong></td>
                    <td>主動曬健身成果 → IG 粉絲+50%、業配邀約+200%</td>
                    <td>主動揭露 ESG → 千禧世代溢價+10-20%、NPS (淨推薦值)+12 分</td>
                    <td>✅ 立即生效,做了馬上有回報</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="terminology-translation">
              <h3>術語白話解釋: ESG 關鍵名詞</h3>
              <table class="data-table compact">
                <thead>
                  <tr><th>專業術語</th><th>英文全稱</th><th>白話翻譯</th><th>記憶口訣</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>三重底線 TBL</strong></td>
                    <td>Triple Bottom Line</td>
                    <td>企業不只看「利潤」,還要看「環境」與「社會」</td>
                    <td>3P = Profit (賺錢) + Planet (保護地球) + People (照顧人)</td>
                  </tr>
                  <tr>
                    <td><strong>ESG</strong></td>
                    <td>Environmental, Social, Governance</td>
                    <td>環境 (身體健康) + 社會 (人際關係) + 治理 (大腦決策)</td>
                    <td>企業健檢三大指標</td>
                  </tr>
                  <tr>
                    <td><strong>重大性評估 Materiality</strong></td>
                    <td>Materiality Assessment</td>
                    <td>找出「對企業影響最大」且「利害關係人最關注」的議題</td>
                    <td>醫生說「你的高血壓最嚴重,先治這個」</td>
                  </tr>
                  <tr>
                    <td><strong>利害關係人 Stakeholder</strong></td>
                    <td>Stakeholder</td>
                    <td>所有跟企業有關的人 (員工/客戶/投資人/社區/供應商...)</td>
                    <td>就像「你的家人、同事、朋友都關心你的健康」</td>
                  </tr>
                  <tr>
                    <td><strong>雙重重大性 Double Materiality</strong></td>
                    <td>Double Materiality (CSRD 要求)</td>
                    <td>不只看「環境議題如何影響企業」,也要看「企業如何影響環境」</td>
                    <td>A. 乾旱影響我的產量 (外→內) + B. 我的抽水影響河流 (內→外)</td>
                  </tr>
                  <tr>
                    <td><strong>漂綠 Greenwashing</strong></td>
                    <td>Greenwashing</td>
                    <td>沒做永續卻宣傳「我很環保」→ 虛假行銷</td>
                    <td>就像「沒運動卻 PS 照片假裝六塊肌」</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="real-world-example">
              <h3>實戰案例: 30ha 酒莊的 ESG 健檢旅程</h3>
              <div class="timeline">
                <div class="phase">
                  <h4>Year 1: 基礎健檢 (找出問題)</h4>
                  <ul>
                    <li><strong>E (身體)</strong>: 碳盤查發現年排放 240 噸,其中玻璃瓶佔 55% (132 噸)</li>
                    <li><strong>S (心理)</strong>: 員工調查發現「季節工宿舍條件差」滿意度僅 62 分</li>
                    <li><strong>G (大腦)</strong>: 家族企業無永續政策,決策憑「感覺」無數據支持</li>
                  </ul>
                  <p class="metric">💰 初期投入: €15K (顧問費 + 盤查工具 + 員工調查)</p>
                </div>
                <div class="phase">
                  <h4>Year 2: 治療計畫 (開始改善)</h4>
                  <ul>
                    <li><strong>E</strong>: 換輕量瓶 (420g→350g) + 簽綠電合約 → 減排 72 噸 (30%)</li>
                    <li><strong>S</strong>: 改善宿舍 (空調/WiFi) + 薪資透明化 → 滿意度升至 79 分</li>
                    <li><strong>G</strong>: 成立永續委員會,每季檢討 KPI,通過 HVE 3 級認證</li>
                  </ul>
                  <p class="metric">💰 年度投資: €35K (輕量瓶模具 + 宿舍翻修 + 認證費), 綠電溢價 +€3K/年</p>
                </div>
                <div class="phase">
                  <h4>Year 3: 健康紅利 (開始收穫)</h4>
                  <ul>
                    <li><strong>收益提升</strong>: HVE 認證 + 碳足跡標籤 → 產品溢價+12%, 新客戶 (米其林餐廳) 訂單 €80K/年</li>
                    <li><strong>成本節省</strong>: 輕量瓶省運費 €4K/年, 綠電鎖價避開電價上漲風險</li>
                    <li><strong>金融優惠</strong>: 銀行看 ESG 評級升至 B,綠色貸款利率-0.7% → 省 €5K/年利息</li>
                    <li><strong>員工留任</strong>: 滿意度提升 → 資深員工離職率從 18% 降至 8% (省招募訓練成本 €12K/年)</li>
                  </ul>
                  <p class="metric">📊 <strong>3 年 ROI</strong>: 投資 €53K → 年度效益 €101K (溢價 + 訂單 + 省成本 + 利息) → <strong>6.4 個月回本</strong>,第 3 年起年化報酬 190%</p>
                </div>
              </div>
              <p class="key-insight">⚡ <strong>關鍵洞察</strong>: ESG 不是成本中心,是<strong>投資報酬率 190% 的成長引擎</strong> → 就像「健身花錢」但換來「更高薪工作 + 更低醫療費 + 更好的人際關係」。</p>
            </div>

            <div class="reading-strategy">
              <h3>閱讀策略: 如何讀懂本章?</h3>
              <table class="data-table compact">
                <thead>
                  <tr><th>章節內容</th><th>類比框架</th><th>重點提煉</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>三重底線 (TBL)</td>
                    <td>身體+心理+大腦健康</td>
                    <td>看表格找「酒莊實踐案例」欄,理解如何量化 E/S/G</td>
                  </tr>
                  <tr>
                    <td>永續驅動力 Widget</td>
                    <td>法規=強制體檢、市場=保險要求、風險=慢性病、品牌=健身網紅</td>
                    <td>點選四個選項,記住「2026 CBAM 碳關稅」與「55% 千禧世代願付溢價」</td>
                  </tr>
                  <tr>
                    <td>成熟度模型 5 階段</td>
                    <td>從「被動看醫生」→「主動健身教練」</td>
                    <td>定位你的酒莊在哪一級? 目標升到哪一級? 需要什麼資源?</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3>三重底線 Triple Bottom Line</h3>
          <table class="data-table">
            <thead>
              <tr><th>面向</th><th>核心議題</th><th>關鍵指標</th><th>酒莊實踐案例</th></tr>
            </thead>
            <tbody>
              <tr><td>經濟 Profit</td><td>財務績效、創新、韌性</td><td>營收、毛利、ROI (Return on Investment)</td><td>永續產品溢價、成本優化</td></tr>
              <tr><td>環境 (Planet)</td><td>氣候、水、生物多樣性</td><td>碳排、水足跡、有機面積</td><td>減碳 50%、零化學除草劑</td></tr>
              <tr><td>社會 (People)</td><td>員工、社區、供應鏈</td><td>工安零事故、在地採購 %</td><td>公平薪資、社區投資</td></tr>
            </tbody>
          </table>
          <h3>ESG (Environmental, Social, Governance) 框架與葡萄酒產業適配</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>ESG 類別</th><th>重點議題</th><th>產業特性</th><th>優先行動</th></tr>
            </thead>
            <tbody>
              <tr><td>環境 Environmental (E)</td><td>氣候變遷、水資源、土壤健康</td><td>農業依賴自然資本</td><td>碳盤查、有機轉型、水管理</td></tr>
              <tr><td>社會 Social (S)</td><td>季節工、社區共榮、責任消費</td><td>勞動密集、地域文化</td><td>公平雇用、產區教育</td></tr>
              <tr><td>治理 Governance (G)</td><td>合規、透明度、董事會多元</td><td>家族企業占比高</td><td>永續委員會、ESG 報告</td></tr>
            </tbody>
          </table>
          <h3>永續驅動力與商業價值</h3>
          <div class="sustainability-driver-widget">
            <input type="radio" id="driver-regulation" name="sustainability-driver" class="opt-regulation" checked>
            <input type="radio" id="driver-market" name="sustainability-driver" class="opt-market">
            <input type="radio" id="driver-risk" name="sustainability-driver" class="opt-risk">
            <input type="radio" id="driver-brand" name="sustainability-driver" class="opt-brand">
            <div class="selectors">
              <label for="driver-regulation">法規驅動</label>
              <label for="driver-market">市場拉力</label>
              <label for="driver-risk">風險緩解</label>
              <label for="driver-brand">品牌價值</label>
            </div>
            <div class="panels">
              <div class="panel" data-driver="regulation">
                <h4>法規驅動</h4>
                <ul>
                  <li><strong>碳邊境稅 CBAM (Carbon Border Adjustment Mechanism)</strong>: 2026 起針對進口產品徵收碳排關稅。</li>
                  <li><strong>環境標籤</strong>: 法國 2025 起強制揭露碳足跡與環境評級。</li>
                  <li><strong>綠色新政</strong>: 歐盟 2030 目標農藥減半、有機面積 25%。</li>
                </ul>
                <p class="note">合規成本轉化為競爭優勢，提前佈局可降低衝擊。</p>
              </div>
              <div class="panel" data-driver="market">
                <h4>市場拉力</h4>
                <ul>
                  <li><strong>消費者需求</strong>: 55% 千禧世代願為永續產品多付 10~20%。</li>
                  <li><strong>採購標準</strong>: 大型零售商 (Tesco、Carrefour) 要求供應商碳揭露。</li>
                  <li><strong>投資者關注</strong>: ESG (Environmental, Social, Governance) 基金規模達 35 兆美元，影響融資成本。</li>
                </ul>
                <p class="note">永續認證產品溢價 10~25%，直客市場成長更快。</p>
              </div>
              <div class="panel" data-driver="risk">
                <h4>風險緩解</h4>
                <ul>
                  <li><strong>氣候韌性</strong>: 減碳與調適措施降低極端天氣損失。</li>
                  <li><strong>供應鏈穩定</strong>: 永續供應商違約率低 30%。</li>
                  <li><strong>聲譽保護</strong>: 避免漂綠指控與負面輿情。</li>
                </ul>
                <p class="note">永續投資的 ROI (Return on Investment) 周期 3~7 年，附帶風險溢價。</p>
              </div>
              <div class="panel" data-driver="brand">
                <h4>品牌價值</h4>
                <ul>
                  <li><strong>差異化定位</strong>: 永續故事增強品牌記憶度與忠誠度。</li>
                  <li><strong>員工吸引力</strong>: 75% Z 世代優先選擇永續企業。</li>
                  <li><strong>獎項與認可</strong>: B Corp、碳中和認證提升公信力。</li>
                </ul>
                <p class="note">永續品牌 NPS (Net Promoter Score) 平均高 12 分，客戶留存率提升 18%。</p>
              </div>
            </div>
          </div>
          <h3>永續成熟度模型</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>階段</th><th>特徵</th><th>代表行動</th><th>典型挑戰</th></tr>
            </thead>
            <tbody>
              <tr><td>1. 被動合規</td><td>滿足最低法規要求</td><td>基本環境許可、勞工法遵循</td><td>無系統化管理</td></tr>
              <tr><td>2. 效率提升</td><td>資源節約降成本</td><td>節能減排、廢棄物減量</td><td>缺乏戰略整合</td></tr>
              <tr><td>3. 策略整合</td><td>永續納入企業戰略</td><td>碳盤查、永續委員會、認證</td><td>跨部門協作</td></tr>
              <tr><td>4. 價值創新</td><td>永續驅動商業模式</td><td>循環經濟、再生農業、碳中和</td><td>生態系協作</td></tr>
              <tr><td>5. 系統領導</td><td>產業標準制定者</td><td>產區聯盟、政策倡議、透明揭露</td><td>長期承諾</td></tr>
            </tbody>
          </table>
        </div>
      `,
      highlights: [
        { id: 1, icon: '⚖️', title: '三重底線', content: '經濟、環境、社會平衡，創造長期價值。' },
        { id: 2, icon: '🚀', title: '四大驅動力', content: '法規、市場、風險、品牌推動永續投資。' },
        { id: 3, icon: '📈', title: '成熟度模型', content: '從合規到領導的五階段演進路徑。' }
      ]
    },
    {
      title: '第二章：溫室氣體盤查方法論',
      nav: 'GHG 盤查',
      icon: '📊',
      highlightDelayStep: '0.07s',
      html: `
        <div class="chapter-content">
          <div class="concept-intro-section">
            <h2>📊 概念入門: GHG 盤查 = 記帳理財 APP</h2>
            <p class="analogy-intro">想像你每月花錢很兇,存款一直減少,決定下載「記帳 APP」找出錢都花去哪。<strong>溫室氣體盤查就是企業的記帳 APP</strong>,幫你找出「碳排放都來自哪裡」。</p>
            
            <div class="analogy-breakdown">
              <h3>生活化類比: 個人理財 → 碳排盤查</h3>
              <table class="data-table">
                <thead>
                  <tr><th>記帳類別</th><th>個人理財</th><th>GHG Protocol 對應</th><th>酒莊實例</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>範疇一 = 必要開銷</strong></td>
                    <td>房租、水電、瓦斯 → 每月固定支出,無法避免</td>
                    <td>直接排放: 柴油拖拉機、天然氣鍋爐</td>
                    <td>45 噸 (10-15%) → 柴油 21 噸 + 鍋爐 23 噸</td>
                  </tr>
                  <tr>
                    <td><strong>範疇二 = 變動帳單</strong></td>
                    <td>電信費、網路費 → 可選不同方案降價</td>
                    <td>外購電力: 電網購電 (可選綠電降「碳帳單」)</td>
                    <td>28 噸 (5-10%) → 60,000 kWh/年 × 0.45 kg/kWh</td>
                  </tr>
                  <tr>
                    <td><strong>範疇三 = 隱性消費</strong></td>
                    <td>外食、網購、訂閱、信用卡利息 → 打開 APP 才發現「原來這麼多錢!」</td>
                    <td>價值鏈: 玻璃瓶、運輸、員工通勤</td>
                    <td>327 噸 (70-80%) → <strong>玻璃瓶單項就佔 180 噸 (55%)</strong></td>
                  </tr>
                </tbody>
              </table>
              <p class="insight-box">💡 <strong>關鍵洞察</strong>: 就像「外食 (範疇三) 花最多錢」,酒莊碳排也是<strong>「玻璃瓶 (範疇三) 排最多碳」</strong> → 減碳要先抓大頭!</p>
            </div>

            <div class="why-this-matters">
              <h3>為什麼要盤查? 不盤查的四個代價</h3>
              <table class="data-table">
                <thead>
                  <tr><th>後果</th><th>理財類比</th><th>碳盤查實況</th><th>量化損失</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>法規罰款</strong></td>
                    <td>沒報稅被罰 → 補稅+罰金+利息</td>
                    <td>2026 CBAM 碳關稅上路,沒盤查資料按「最高排放值」課稅</td>
                    <td>出口成本+10-15%,每年損失 €50K-200K</td>
                  </tr>
                  <tr>
                    <td><strong>失去訂單</strong></td>
                    <td>申請貸款沒財力證明 → 銀行拒貸</td>
                    <td>B2B 客戶 (餐廳/航空/經銷) 要求供應鏈碳數據,沒資料失去資格</td>
                    <td>典型案例: 米其林餐廳訂單 €150K/年飛了</td>
                  </tr>
                  <tr>
                    <td><strong>盲目減碳</strong></td>
                    <td>不記帳就亂省 → 省小錢 (少喝咖啡 -€50/月) 忽略大頭 (房貸利率高 -€500/月)</td>
                    <td>沒盤查就投資 → 花 €80K 買電動拖拉機 (減 21 噸),卻忽略換輕量瓶 (減 72 噸,成本 €0)</td>
                    <td>投資效率差 4 倍,浪費 €80K</td>
                  </tr>
                  <tr>
                    <td><strong>漂綠風險</strong></td>
                    <td>宣稱「我很省錢」卻沒帳本 → 被朋友質疑吹牛</td>
                    <td>宣傳「永續酒莊」卻無第三方查證 → 被 NGO 抓包漂綠,品牌危機</td>
                    <td>股價跌 8%、NPS 下降 15 分、訴訟成本 €100K+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="terminology-translation">
              <h3>術語白話解釋: 碳盤查關鍵名詞</h3>
              <table class="data-table compact">
                <thead>
                  <tr><th>專業術語</th><th>英文全稱</th><th>白話翻譯</th><th>記憶口訣</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>GHG Protocol</strong></td>
                    <td>Greenhouse Gas Protocol</td>
                    <td>全球通用的「碳排放記帳標準」</td>
                    <td>就像「IFRS 是財務會計標準,GHG Protocol 是碳會計標準」</td>
                  </tr>
                  <tr>
                    <td><strong>CO₂e</strong></td>
                    <td>CO₂ equivalent (二氧化碳當量)</td>
                    <td>把所有溫室氣體 (CH₄/N₂O/HFCs...) 換算成「等效二氧化碳」</td>
                    <td>就像「把美元、日圓、歐元全換算成台幣」方便比較</td>
                  </tr>
                  <tr>
                    <td><strong>範疇一二三 Scope 1/2/3</strong></td>
                    <td>Scope 1/2/3</td>
                    <td>範疇一=自己燒、範疇二=買電、範疇三=價值鏈</td>
                    <td>記帳分類: 必要支出 (一) / 變動帳單 (二) / 隱性消費 (三)</td>
                  </tr>
                  <tr>
                    <td><strong>排放係數 Emission Factor</strong></td>
                    <td>Emission Factor</td>
                    <td>「1 單位活動產生多少碳」的查表數值</td>
                    <td>就像「1 度電 = 0.45 kg CO₂e」→ 活動數據 × 排放係數 = 排放量</td>
                  </tr>
                  <tr>
                    <td><strong>活動數據 Activity Data</strong></td>
                    <td>Activity Data</td>
                    <td>你實際的「行為記錄」: 用多少柴油/電/瓶子...</td>
                    <td>就像記帳記錄「本月外食 30 次、Netflix 訂閱 1 次」</td>
                  </tr>
                  <tr>
                    <td><strong>邊界 Boundary</strong></td>
                    <td>Organizational Boundary</td>
                    <td>定義「哪些設施/活動要納入盤查」</td>
                    <td>就像記帳決定「家庭開銷包不包括婆婆的醫藥費?」</td>
                  </tr>
                  <tr>
                    <td><strong>第三方查證 Verification</strong></td>
                    <td>Third-Party Verification (ISO 14064-3)</td>
                    <td>請獨立單位檢查你的盤查數據「是否正確」</td>
                    <td>就像「找會計師查帳」避免做假帳</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="real-world-example">
              <h3>實戰案例: 50ha 酒莊的盤查驚喜</h3>
              <div class="timeline">
                <div class="phase">
                  <h4>Month 1-2: 建立邊界 & 收集數據</h4>
                  <ul>
                    <li><strong>定義邊界</strong>: 包含 50ha 葡萄園 + 釀酒廠 + 員工通勤,不包含海外經銷商倉儲</li>
                    <li><strong>收集數據</strong>: 
                      <ul>
                        <li>範疇一: 調柴油發票 → 8,000 L/年,天然氣帳單 → 12,000 m³/年</li>
                        <li>範疇二: 電費帳單 → 60,000 kWh/年</li>
                        <li>範疇三: 玻璃瓶訂單 200K 瓶 × 750g、運輸噸公里、員工通勤調查</li>
                      </ul>
                    </li>
                  </ul>
                  <p class="metric">💰 成本: €8K (盤查工具軟體 + 顧問 2 天)</p>
                </div>
                <div class="phase">
                  <h4>Month 3: 計算 & 驚喜發現</h4>
                  <ul>
                    <li><strong>計算結果</strong>: 
                      <ul>
                        <li>範疇一: 45 噸 (11%)</li>
                        <li>範疇二: 28 噸 (7%)</li>
                        <li>範疇三: 327 噸 (82%) → <strong>玻璃瓶單項 180 噸 (45%)</strong></li>
                        <li>總排放: 400 噸 = <strong>2 kg CO₂e/瓶</strong></li>
                      </ul>
                    </li>
                    <li><strong>三個驚喜</strong>: 
                      <ol>
                        <li>原以為柴油拖拉機是大頭 → 實際只佔 5.4% (21 噸)</li>
                        <li>玻璃瓶竟然佔 45% → 換輕量瓶 (420g→350g) 可立即減 72 噸,成本 €0</li>
                        <li>員工通勤 15 噸 (3.8%) → 提供共乘獎勵可減 40% (6 噸)</li>
                      </ol>
                    </li>
                  </ul>
                  <p class="metric">⚡ <strong>策略轉向</strong>: 原計畫花 €80K 買電動拖拉機 → 改為「綠電 + 輕量瓶 + 共乘」組合 → 成本 < €10K,減排效果 4 倍</p>
                </div>
                <div class="phase">
                  <h4>Month 4-6: 查證 & 揭露</h4>
                  <ul>
                    <li><strong>ISO 14064-1 第三方查證</strong>: SGS 稽核 2 天 → 查證通過,獲得查證聲明書</li>
                    <li><strong>對外揭露</strong>: 
                      <ul>
                        <li>產品標籤印「碳足跡 2 kg CO₂e/瓶」+查證標章</li>
                        <li>B2B 客戶收到範疇三數據 → 米其林餐廳下單 €150K/年</li>
                        <li>永續報告上傳官網 → 綠色基金投資人關注,股東會報告</li>
                      </ul>
                    </li>
                  </ul>
                  <p class="metric">💰 查證成本: €7K → <strong>6 個月 ROI</strong>: 新訂單 €150K + 產品溢價 +8% = €95K/年,10 週回本</p>
                </div>
              </div>
              <p class="key-insight">⚡ <strong>關鍵洞察</strong>: 盤查 = 買「X 光透視鏡」€15K → 發現「隱藏金礦」(輕量瓶速贏方案) → <strong>10 週回本,年化報酬 633%</strong>。</p>
            </div>

            <div class="reading-strategy">
              <h3>閱讀策略: 如何讀懂本章?</h3>
              <table class="data-table compact">
                <thead>
                  <tr><th>章節內容</th><th>類比框架</th><th>重點提煉</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>GHG Protocol 三範疇</td>
                    <td>必要支出 (一) / 變動帳單 (二) / 隱性消費 (三)</td>
                    <td>看表格記住「範疇三佔 70-80%,玻璃瓶是最大項」</td>
                  </tr>
                  <tr>
                    <td>ISO 14064-1 流程</td>
                    <td>記帳 6 步驟: 定邊界→收數據→算排放→寫報告→查帳→持續改進</td>
                    <td>點開 Widget 看每個步驟的實務操作細節</td>
                  </tr>
                  <tr>
                    <td>碳盤查案例 Widget</td>
                    <td>打開記帳 APP,切換「必要/變動/隱性」三個類別</td>
                    <td>點選範疇一二三,看每項排放源的「活動數據 × 排放係數 = 排放量」計算邏輯</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3>GHG Protocol 三範疇</h3>
          <table class="data-table">
            <thead>
              <tr><th>範疇</th><th>定義</th><th>酒莊典型排放源</th><th>占比</th><th>管控難度</th></tr>
            </thead>
            <tbody>
              <tr><td>範疇一<br>直接排放</td><td>自有設備的直接 GHG 排放</td><td>柴油拖拉機、天然氣鍋爐、冷媒洩漏</td><td>10~15%</td><td>低 (直接控制)</td></tr>
              <tr><td>範疇二<br>能源間接</td><td>外購電力/熱能的間接排放</td><td>電網購電、區域供熱</td><td>5~10%</td><td>中 (可選綠電)</td></tr>
              <tr><td>範疇三<br>價值鏈</td><td>上下游價值鏈間接排放</td><td>玻璃瓶、軟木塞、運輸、員工通勤、廢棄物</td><td>70~80%</td><td>高 (需供應商協作)</td></tr>
            </tbody>
          </table>
          <h3>碳盤查流程 (ISO 14064-1)</h3>
          <ol>
            <li><strong>定義邊界</strong>: 組織邊界 (營運控制 vs 股權) 與時間邊界 (通常為年度)。</li>
            <li><strong>識別排放源</strong>: 盤點所有設備、車輛、電力、物料與廢棄物。</li>
            <li><strong>量化排放</strong>: 活動數據 × 排放係數 (如 1 公升柴油 = 2.68 kg CO₂e)。</li>
            <li><strong>數據品質管理</strong>: 確保計量準確、文件留存、可追溯。</li>
            <li><strong>報告與查證</strong>: 編制碳盤查報告，第三方查證機構審核。</li>
            <li><strong>持續改進</strong>: 設定減量目標，年度追蹤與調整。</li>
          </ol>
          <h3>酒莊碳盤查案例 (50 ha, 年產 200K 瓶)</h3>
          <div class="carbon-inventory-widget">
            <input type="radio" id="carbon-scope1" name="carbon-scope" class="opt-scope1" checked>
            <input type="radio" id="carbon-scope2" name="carbon-scope" class="opt-scope2">
            <input type="radio" id="carbon-scope3" name="carbon-scope" class="opt-scope3">
            <div class="selectors">
              <label for="carbon-scope1">範疇一</label>
              <label for="carbon-scope2">範疇二</label>
              <label for="carbon-scope3">範疇三</label>
            </div>
            <div class="panels">
              <div class="panel" data-scope="scope1">
                <h4>範疇一：直接排放 (45 噸 CO₂e/年)</h4>
                <table class="data-table compact">
                  <thead>
                    <tr><th>排放源</th><th>活動數據</th><th>排放量</th><th>占比</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>柴油拖拉機</td><td>8,000 L/年</td><td>21.4 噸</td><td>47.6%</td></tr>
                    <tr><td>天然氣鍋爐</td><td>12,000 m³/年</td><td>22.8 噸</td><td>50.7%</td></tr>
                    <tr><td>冷媒洩漏 (R134a)</td><td>0.5 kg/年</td><td>0.8 噸</td><td>1.7%</td></tr>
                  </tbody>
                </table>
                <p class="note">減量方向：電動拖拉機、熱泵替代鍋爐、冷媒定期檢漏。</p>
              </div>
              <div class="panel" data-scope="scope2">
                <h4>範疇二：能源間接 (28 噸 CO₂e/年)</h4>
                <table class="data-table compact">
                  <thead>
                    <tr><th>能源類型</th><th>用量</th><th>排放係數</th><th>排放量</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>電網購電</td><td>60,000 kWh/年</td><td>0.45 kg/kWh (法國)</td><td>27 噸</td></tr>
                    <tr><td>區域供熱</td><td>5,000 kWh/年</td><td>0.2 kg/kWh</td><td>1 噸</td></tr>
                  </tbody>
                </table>
                <p class="note">減量方向：簽署綠電合約、屋頂太陽能、提升能效。</p>
              </div>
              <div class="panel" data-scope="scope3">
                <h4>範疇三：價值鏈 (327 噸 CO₂e/年)</h4>
                <table class="data-table compact">
                  <thead>
                    <tr><th>類別</th><th>排放量</th><th>占比</th><th>數據來源</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>玻璃瓶 (200K × 750g)</td><td>180 噸</td><td>55%</td><td>供應商碳足跡</td></tr>
                    <tr><td>軟木塞 (200K)</td><td>12 噸</td><td>3.7%</td><td>LCA 數據庫</td></tr>
                    <tr><td>紙箱與標籤</td><td>18 噸</td><td>5.5%</td><td>供應商數據</td></tr>
                    <tr><td>上游運輸 (物料)</td><td>25 噸</td><td>7.6%</td><td>噸公里法</td></tr>
                    <tr><td>下游配送 (出貨)</td><td>72 噸</td><td>22%</td><td>物流商數據</td></tr>
                    <tr><td>員工通勤</td><td>15 噸</td><td>4.6%</td><td>員工調查</td></tr>
                    <tr><td>廢棄物處理</td><td>5 噸</td><td>1.5%</td><td>廢棄物處理商</td></tr>
                  </tbody>
                </table>
                <p class="note">減量方向：輕量化瓶、在地供應、海運替代空運、循環包裝。</p>
              </div>
            </div>
          </div>
          <h3>碳足跡單位換算</h3>
          <ul>
            <li><strong>每瓶碳排</strong>: 400 噸 ÷ 200K 瓶 = <strong>2 kg CO₂e/瓶</strong>。</li>
            <li><strong>行業基準</strong>: 全球平均 1.5~2.5 kg/瓶，低碳標竿 < 1 kg/瓶。</li>
            <li><strong>優化潛力</strong>: 輕量化玻璃瓶可減少 30~40% 總排放。</li>
          </ul>
          <h3>數據收集挑戰與解決方案</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>挑戰</th><th>原因</th><th>解決方案</th></tr>
            </thead>
            <tbody>
              <tr><td>範疇三數據缺乏</td><td>供應商未揭露</td><td>要求供應商提供、使用次級數據、產業平均值</td></tr>
              <tr><td>計量不完整</td><td>缺乏子錶、人工記錄</td><td>安裝智慧電錶、IoT 感測器、ERP 整合</td></tr>
              <tr><td>排放係數過時</td><td>使用舊版資料庫</td><td>採用最新 IPCC / IEA / 在地電網係數</td></tr>
              <tr><td>跨年度一致性</td><td>方法變更、邊界調整</td><td>文件化方法論、重述基準年、註明變更</td></tr>
            </tbody>
          </table>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🔢', title: '三範疇拆解', content: '範疇一 15%、二 10%、三 75% 典型分布。' },
        { id: 2, icon: '📋', title: 'ISO 流程', content: '邊界→識別→量化→查證→持續改進六步驟。' },
        { id: 3, icon: '🍾', title: '2 kg CO₂e/瓶', content: '中型酒莊典型碳足跡，玻璃瓶占 55%。' }
      ]
    },
    {
      title: '第三章：減碳路徑與技術選項',
      nav: '減碳路徑',
      icon: '🎯',
      highlightDelayStep: '0.08s',
      html: `
        <div class="chapter-content">
          <h3>SBTi 科學基礎減量目標</h3>
          <ul>
            <li><strong>1.5°C 情境</strong>: 範疇一+二年減 4.2%，範疇三年減 2.5%。</li>
            <li><strong>淨零承諾</strong>: 2050 年達成 90% 絕對減量，剩餘 10% 碳移除抵銷。</li>
            <li><strong>短期目標</strong>: 5~10 年減量路徑，每年檢核進度。</li>
          </ul>
          <h3>減碳技術矩陣</h3>
          <table class="data-table">
            <thead>
              <tr><th>技術類別</th><th>減碳潛力</th><th>投資成本</th><th>回收期</th><th>實施難度</th></tr>
            </thead>
            <tbody>
              <tr><td>屋頂太陽能 (30 kW)</td><td>-15 噸/年</td><td>€40K</td><td>6~8 年</td><td>低</td></tr>
              <tr><td>綠電合約</td><td>-27 噸/年 (範疇二歸零)</td><td>溢價 5~10%</td><td>即時</td><td>低</td></tr>
              <tr><td>電動拖拉機</td><td>-21 噸/年</td><td>€80K</td><td>10~12 年</td><td>中 (充電設施)</td></tr>
              <tr><td>熱泵替代鍋爐</td><td>-18 噸/年</td><td>€35K</td><td>8~10 年</td><td>中</td></tr>
              <tr><td>輕量化玻璃瓶 (-100g)</td><td>-36 噸/年</td><td>無 (供應商)</td><td>即時</td><td>低 (品牌接受度)</td></tr>
              <tr><td>在地供應商 (運輸 -30%)</td><td>-20 噸/年</td><td>無~低</td><td>即時</td><td>中 (供應鏈重組)</td></tr>
              <tr><td>海運替代空運</td><td>因航線而異</td><td>時間成本</td><td>即時</td><td>低 (交期接受度)</td></tr>
            </tbody>
          </table>
          <h3>減碳成本曲線</h3>
          <div class="abatement-curve-widget">
            <input type="radio" id="abate-quick" name="abatement-priority" class="opt-quick" checked>
            <input type="radio" id="abate-cost" name="abatement-priority" class="opt-cost">
            <input type="radio" id="abate-impact" name="abatement-priority" class="opt-impact">
            <div class="selectors">
              <label for="abate-quick">速贏方案</label>
              <label for="abate-cost">成本優先</label>
              <label for="abate-impact">影響最大</label>
            </div>
            <div class="panels">
              <div class="panel" data-priority="quick">
                <h4>速贏方案 (12 個月內)</h4>
                <ol>
                  <li><strong>綠電合約</strong>: 範疇二歸零，溢價 5~10%，立即生效。</li>
                  <li><strong>輕量化玻璃瓶</strong>: 減 36 噸/年，無額外成本，與供應商協商。</li>
                  <li><strong>LED 照明全面替換</strong>: 節能 60%，成本 €5K，回收 2 年。</li>
                  <li><strong>員工通勤共乘計畫</strong>: 減 5 噸/年，激勵成本 €2K/年。</li>
                </ol>
                <p class="note">合計減排 ~70 噸/年 (17.5%)，投入 < €10K。</p>
              </div>
              <div class="panel" data-priority="cost">
                <h4>成本最優方案 (3 年期)</h4>
                <ol>
                  <li><strong>綠電 + 輕量瓶</strong>: 如速贏方案。</li>
                  <li><strong>太陽能板 (30 kW)</strong>: 減 15 噸/年，€40K，回收 7 年。</li>
                  <li><strong>在地供應商</strong>: 減 20 噸/年，供應鏈重組成本 €8K。</li>
                  <li><strong>有機轉型</strong>: 碳匯 +5 噸/年，轉型補貼 €15K。</li>
                </ol>
                <p class="note">合計減排 ~110 噸/年 (27.5%)，投入 €63K，平均成本 €570/噸。</p>
              </div>
              <div class="panel" data-priority="impact">
                <h4>最大影響方案 (5 年期)</h4>
                <ol>
                  <li><strong>全套再生能源</strong>: 太陽能 + 綠電，範疇一二近零。</li>
                  <li><strong>循環包裝系統</strong>: 可回收玻璃瓶，減 50% 瓶排放 (-90 噸)。</li>
                  <li><strong>電動化車隊</strong>: 拖拉機 + 物流車，減 30 噸/年。</li>
                  <li><strong>碳匯林計畫</strong>: 種植 10 ha 林地，碳匯 +50 噸/年。</li>
                </ol>
                <p class="note">合計減排 ~220 噸/年 (55%)，投入 €250K，達 SBTi 目標。</p>
              </div>
            </div>
          </div>
          <h3>碳移除與抵銷</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>方式</th><th>永久性</th><th>成本</th><th>優缺點</th></tr>
            </thead>
            <tbody>
              <tr><td>森林復育</td><td>中 (50~100 年)</td><td>€10~30/噸</td><td>優：生態共益;缺：監測複雜</td></tr>
              <tr><td>土壤碳匯 (覆蓋作物)</td><td>中 (數十年)</td><td>€5~15/噸</td><td>優：農法改良;缺：量化不確定</td></tr>
              <tr><td>直接空氣捕捉 (DAC)</td><td>高 (千年)</td><td>€400~600/噸</td><td>優：永久;缺：成本高</td></tr>
              <tr><td>生質能碳捕捉 (BECCS)</td><td>高 (千年)</td><td>€100~200/噸</td><td>優：淨負排放;缺：基礎設施</td></tr>
            </tbody>
          </table>
          <h3>減碳路徑案例：2030 年 -50% 目標</h3>
          <ul>
            <li><strong>基準年 (2023)</strong>: 400 噸 CO₂e。</li>
            <li><strong>2025</strong>: 綠電 + 輕量瓶 + LED → 330 噸 (-17.5%)。</li>
            <li><strong>2027</strong>: 太陽能 + 在地供應 + 有機 → 260 噸 (-35%)。</li>
            <li><strong>2030</strong>: 電動化 + 循環包裝 + 碳匯林 → 200 噸 (-50%)。</li>
            <li><strong>2050</strong>: 絕對減量 90% + 碳移除抵銷 10% → 淨零。</li>
          </ul>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🎯', title: 'SBTi 目標', content: '1.5°C 情境下年減 4.2% (範疇一二)。' },
        { id: 2, icon: '⚡', title: '速贏方案', content: '綠電+輕量瓶 12 月內減 17.5%，低成本。' },
        { id: 3, icon: '🌳', title: '碳移除', content: '最終 10% 排放需碳匯或 DAC 抵銷。' }
      ]
    },
    {
      title: '第四章：永續認證體系比較',
      nav: '認證體系',
      icon: '✅',
      highlightDelayStep: '0.09s',
      html: `
        <div class="chapter-content">
          <h3>主要認證體系比較</h3>
          <table class="data-table">
            <thead>
              <tr><th>認證</th><th>核心要求</th><th>認證成本</th><th>年費</th><th>市場認可度</th></tr>
            </thead>
            <tbody>
              <tr><td>有機 (EU Organic)</td><td>3 年轉型、禁用化學合成農藥/肥</td><td>€2K~5K</td><td>€1K~2K</td><td>高 (消費者認知度 80%)</td></tr>
              <tr><td>生物動力 (Demeter)</td><td>有機基礎 + BD 製劑 + 宇宙曆</td><td>€3K~6K</td><td>€1.5K~3K</td><td>中高 (精品市場)</td></tr>
              <tr><td>HVE (法國高環境價值)</td><td>四面向評分 (生物多樣性、植保、施肥、水)</td><td>€800~1.5K</td><td>€500~1K</td><td>中 (法國市場)</td></tr>
              <tr><td>Terra Vitis</td><td>整合病蟲害管理、可追溯性</td><td>€600~1K</td><td>€400~800</td><td>中 (產區協會)</td></tr>
              <tr><td>B Corp</td><td>綜合 ESG 評估 (≥ 80 分)</td><td>€5K~50K (規模)</td><td>€1K~10K</td><td>高 (B2B 與投資者)</td></tr>
              <tr><td>碳中和 / PAS 2060</td><td>碳盤查 + 減量計畫 + 抵銷</td><td>€8K~15K</td><td>€3K~5K</td><td>中高 (企業客戶)</td></tr>
            </tbody>
          </table>
          <h3>認證選擇決策樹</h3>
          <div class="certification-decision-widget">
            <input type="radio" id="cert-organic" name="certification-path" class="opt-organic" checked>
            <input type="radio" id="cert-climate" name="certification-path" class="opt-climate">
            <input type="radio" id="cert-holistic" name="certification-path" class="opt-holistic">
            <div class="selectors">
              <label for="cert-organic">農法優先</label>
              <label for="cert-climate">氣候焦點</label>
              <label for="cert-holistic">全面 ESG</label>
            </div>
            <div class="panels">
              <div class="panel" data-path="organic">
                <h4>農法優先路徑</h4>
                <ol>
                  <li><strong>階段一 (1~3 年)</strong>: HVE 認證，建立基礎管理系統。</li>
                  <li><strong>階段二 (4~6 年)</strong>: 有機轉型 (AB / EU Organic)。</li>
                  <li><strong>階段三 (7+ 年)</strong>: 生物動力 (Demeter) 或再生農業 (ROC)。</li>
                </ol>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>累計成本 (10 年)</td><td>€30K~50K</td></tr>
                    <tr><td>溢價潛力</td><td>+15~25%</td></tr>
                    <tr><td>目標市場</td><td>消費者直客、精品零售</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="panel" data-path="climate">
                <h4>氣候焦點路徑</h4>
                <ol>
                  <li><strong>階段一 (1 年)</strong>: ISO 14064 碳盤查 + 第三方查證。</li>
                  <li><strong>階段二 (2~3 年)</strong>: 設定 SBTi 目標，執行減碳專案。</li>
                  <li><strong>階段三 (4~5 年)</strong>: PAS 2060 碳中和認證 + 年度維持。</li>
                </ol>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>累計成本 (5 年)</td><td>€35K~60K (含減碳投資)</td></tr>
                    <tr><td>溢價潛力</td><td>+10~15%</td></tr>
                    <tr><td>目標市場</td><td>企業採購、出口市場 (CBAM)</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="panel" data-path="holistic">
                <h4>全面 ESG 路徑</h4>
                <ol>
                  <li><strong>階段一 (1~2 年)</strong>: B Corp 影響力評估 (BIA)，識別改進點。</li>
                  <li><strong>階段二 (3~4 年)</strong>: 整合有機 / 碳盤查 / 社會計畫，提升至 80+ 分。</li>
                  <li><strong>階段三 (5+ 年)</strong>: B Corp 認證 + 年度重認證，持續提升。</li>
                </ol>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>累計成本 (5 年)</td><td>€50K~100K</td></tr>
                    <tr><td>溢價潛力</td><td>+20~30% (品牌溢價)</td></tr>
                    <tr><td>目標市場</td><td>ESG 投資者、品牌合作、獎項</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <h3>認證維持與審計</h3>
          <ul>
            <li><strong>年度稽核</strong>: 有機、HVE、B Corp 需年度文件審查 + 現場抽查。</li>
            <li><strong>不符合處理</strong>: 輕微缺失限期改善，重大違規暫停或撤銷認證。</li>
            <li><strong>標章使用規範</strong>: 酒標、行銷物料需經認證機構批准設計。</li>
          </ul>
          <h3>漂綠風險與防範</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>漂綠類型</th><th>案例</th><th>風險</th><th>防範措施</th></tr>
            </thead>
            <tbody>
              <tr><td>誇大宣稱</td><td>"100% 天然" (實際含添加物)</td><td>消費者投訴、罰款</td><td>第三方查證、透明揭露</td></tr>
              <tr><td>隱藏取捨</td><td>強調有機但掩蓋高碳運輸</td><td>聲譽受損</td><td>完整 LCA、生命週期思維</td></tr>
              <tr><td>模糊標章</td><td>自創 "生態友善" 圖示</td><td>法律責任</td><td>僅使用官方認證標章</td></tr>
              <tr><td>無實質行動</td><td>承諾但無具體計畫與投資</td><td>投資者信任崩解</td><td>公開路徑圖、年度報告進度</td></tr>
            </tbody>
          </table>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🏅', title: '六大認證', content: '有機、生物動力、HVE、B Corp、碳中和比較。' },
        { id: 2, icon: '🛤️', title: '三條路徑', content: '農法、氣候、全面 ESG 分階段策略。' },
        { id: 3, icon: '⚠️', title: '防範漂綠', content: '第三方查證、透明揭露、完整 LCA。' }
      ]
    },
    {
      title: '第五章：ESG 報告與利害關係人溝通',
      nav: 'ESG 報告',
      icon: '📢',
      highlightDelayStep: '0.1s',
      html: `
        <div class="chapter-content">
          <h3>ESG 報告框架</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>框架</th><th>適用對象</th><th>核心內容</th><th>強制性</th></tr>
            </thead>
            <tbody>
              <tr><td>GRI (全球報告倡議)</td><td>所有組織</td><td>重大性議題、利害關係人參與</td><td>自願 (部分國家強制)</td></tr>
              <tr><td>CSRD (歐盟)</td><td>大型企業 (500+ 員工)</td><td>雙重重大性、範疇三必填</td><td>強制 (2024 起分階段)</td></tr>
              <tr><td>TCFD (氣候)</td><td>上市公司、金融機構</td><td>治理、策略、風險管理、指標</td><td>多國強制或準強制</td></tr>
              <tr><td>SASB (行業)</td><td>上市公司</td><td>財務重大性 ESG 指標</td><td>自願 (美 SEC 參考)</td></tr>
            </tbody>
          </table>
          <h3>酒莊 ESG 報告架構</h3>
          <ol>
            <li><strong>執行摘要</strong>: 永續願景、年度亮點、關鍵指標儀表板。</li>
            <li><strong>治理與策略</strong>: 董事會監督、永續委員會、政策與目標。</li>
            <li><strong>環境績效</strong>:
              <ul>
                <li>碳排放 (範疇一二三)、減量路徑與進度。</li>
                <li>水資源管理、廢棄物循環率。</li>
                <li>生物多樣性指標 (棲地面積、物種監測)。</li>
              </ul>
            </li>
            <li><strong>社會績效</strong>:
              <ul>
                <li>員工：工安、培訓、多元包容、滿意度。</li>
                <li>社區：在地採購、公益投資、產區合作。</li>
                <li>供應鏈：審計、公平交易、人權盡職調查。</li>
              </ul>
            </li>
            <li><strong>經濟績效</strong>: 財務穩健、創新投資、永續產品營收占比。</li>
            <li><strong>附錄</strong>: 數據表、第三方查證聲明、GRI 索引。</li>
          </ol>
          <h3>重大性評估</h3>
          <div class="materiality-matrix-widget">
            <div class="matrix-header">
              <p><strong>雙軸矩陣</strong>: X 軸 = 對商業的影響 | Y 軸 = 對利害關係人的重要性</p>
            </div>
            <div class="matrix-grid">
              <div class="quadrant high-high">
                <h5>高-高 (優先揭露)</h5>
                <ul>
                  <li>氣候變遷 (碳排)</li>
                  <li>水資源管理</li>
                  <li>產品品質與安全</li>
                  <li>員工健康與安全</li>
                </ul>
              </div>
              <div class="quadrant low-high">
                <h5>低-高 (關注)</h5>
                <ul>
                  <li>生物多樣性</li>
                  <li>社區投資</li>
                  <li>文化保存</li>
                </ul>
              </div>
              <div class="quadrant high-low">
                <h5>高-低 (內部管理)</h5>
                <ul>
                  <li>成本優化</li>
                  <li>供應鏈效率</li>
                  <li>市場拓展</li>
                </ul>
              </div>
              <div class="quadrant low-low">
                <h5>低-低 (基礎合規)</h5>
                <ul>
                  <li>常規維護</li>
                  <li>行政流程</li>
                </ul>
              </div>
            </div>
          </div>
          <h3>利害關係人溝通矩陣</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>利害關係人</th><th>關注議題</th><th>溝通管道</th><th>頻率</th></tr>
            </thead>
            <tbody>
              <tr><td>消費者</td><td>產品安全、永續認證、碳足跡</td><td>酒標、官網、社群媒體</td><td>持續</td></tr>
              <tr><td>投資者/股東</td><td>ESG 風險、長期價值、合規</td><td>年報、投資者會議</td><td>季度/年度</td></tr>
              <tr><td>員工</td><td>職安、培訓、薪酬公平、文化</td><td>內部刊物、town hall</td><td>月度/季度</td></tr>
              <tr><td>供應商</td><td>長期合作、公平條款、永續要求</td><td>供應商大會、審計回饋</td><td>年度</td></tr>
              <tr><td>社區居民</td><td>環境影響、就業、文化貢獻</td><td>開放日、地方會議</td><td>年度</td></tr>
              <tr><td>監管機關</td><td>法規遵循、環評、標示</td><td>正式報告、現場稽核</td><td>依規定</td></tr>
              <tr><td>NGO / 媒體</td><td>透明度、爭議議題、進展</td><td>新聞稿、永續報告</td><td>年度</td></tr>
            </tbody>
          </table>
          <h3>數位揭露工具</h3>
          <ul>
            <li><strong>永續微網站</strong>: 互動式儀表板、碳計算器、影片故事。</li>
            <li><strong>區塊鏈溯源</strong>: QR Code 掃描查看產品生命週期數據。</li>
            <li><strong>ESG 數據平台</strong>: 整合 CDP、EcoVadis、Bloomberg ESG 揭露。</li>
          </ul>
          <h3>案例：年度永續亮點溝通</h3>
          <table class="data-table compact">
            <tbody>
              <tr><td>碳減排成果</td><td>較基準年減少 22%，相當於 88 噸 CO₂e</td></tr>
              <tr><td>再生能源占比</td><td>達 65% (太陽能 + 綠電)</td></tr>
              <tr><td>有機面積</td><td>擴大至 30 ha (60% 葡萄園)</td></tr>
              <tr><td>員工培訓</td><td>人均 32 小時，永續主題占 40%</td></tr>
              <tr><td>社區投資</td><td>€25K 支持在地學校與文化活動</td></tr>
              <tr><td>認證進展</td><td>取得 HVE 3 級與 ISO 14064 查證</td></tr>
            </tbody>
          </table>
          <h3>持續改進機制</h3>
          <ol>
            <li>年度 ESG 績效審查與管理層檢討。</li>
            <li>利害關係人調查，更新重大性議題。</li>
            <li>外部標竿學習與產業最佳實踐交流。</li>
            <li>將永續 KPI 納入高管與員工績效考核。</li>
          </ol>
        </div>
      `,
      highlights: [
        { id: 1, icon: '📋', title: '四大框架', content: 'GRI、CSRD、TCFD、SASB 各有側重。' },
        { id: 2, icon: '🎯', title: '重大性評估', content: '雙軸矩陣識別優先揭露議題。' },
        { id: 3, icon: '👥', title: '利害關係人', content: '七類對象的關注點與溝通頻率。' }
      ]
    }
  ],
  summary: {
    title: '課程總結',
    html: `
      <div class="summary-section">
        <h2>🌱 永續與碳盤查: 五大支柱與完整行動框架</h2>
        <p class="summary-intro">永續管理不是「道德成本」,而是<strong>投資報酬率 190% 的成長引擎</strong>。從 ESG 健檢到碳盤查,從科學減碳到認證溝通,這是一套完整的「企業健康管理系統」,幫助酒莊在 2026 CBAM 碳關稅、消費者溢價需求、氣候風險、金融條件四重壓力下,轉危為機。</p>

        <h3>支柱一: ESG 框架 = 企業全身健檢套餐</h3>
        <div class="pillar-detail">
          <h4>核心概念</h4>
          <ul>
            <li><strong>三重底線 (TBL)</strong>: 
              <ul>
                <li>E (環境) = 身體健康: 碳排、水資源、土壤 → 檢查血壓血糖</li>
                <li>S (社會) = 心理健康: 員工、社區、供應鏈 → 評估壓力與人際關係</li>
                <li>G (治理) = 大腦決策: 董事會、內控、透明度 → 確保理性決策</li>
              </ul>
            </li>
            <li><strong>永續成熟度五階段</strong>:
              <ol>
                <li>被動合規 (Level 1): 法規壓力才動 → 「醫生說要檢查才去」</li>
                <li>效率提升 (Level 2): 省成本為主 → 「發現健身可以省醫藥費」</li>
                <li>策略整合 (Level 3): 納入長期戰略 → 「把健康變成人生目標之一」</li>
                <li>價值創新 (Level 4): 永續產品/服務創新 → 「開健身房當教練賺錢」</li>
                <li>系統領導 (Level 5): 引領產業標準 → 「成為健身界的 Crossfit 創辦人」</li>
              </ol>
            </li>
          </ul>

          <h4>關鍵數字</h4>
          <table class="data-table compact">
            <tbody>
              <tr><td><strong>ESG 投資 ROI</strong></td><td>30ha 酒莊投入 €53K → 年度效益 €101K → <strong>6.4 個月回本,第 3 年起年化報酬 190%</strong></td></tr>
              <tr><td><strong>市場需求</strong></td><td>55% 千禧世代願為永續產品<strong>多付 10-20%</strong></td></tr>
              <tr><td><strong>金融優惠</strong></td><td>ESG 評級 B+ 以上 → 綠色貸款利率<strong>優惠 0.5-1%</strong></td></tr>
              <tr><td><strong>法規倒數</strong></td><td><strong>2026 CBAM 碳關稅</strong>上路,不做碳盤查出口成本+10-15%</td></tr>
            </tbody>
          </table>

          <h4>實戰行動</h4>
          <ol>
            <li>成立永續委員會 (董事會層級) → 每季檢討 ESG KPI</li>
            <li>進行重大性評估 → 識別「高血壓」議題優先治療 (通常是碳排放)</li>
            <li>設定基準年 (2023) 與長期目標 (2030 減排 50%, 2050 淨零)</li>
            <li>納入 ESG KPI 到高管與員工績效考核 (佔權重 20-30%)</li>
          </ol>
        </div>

        <h3>支柱二: GHG 盤查 = 打開記帳 APP 找碳排大戶</h3>
        <div class="pillar-detail">
          <h4>核心概念</h4>
          <ul>
            <li><strong>GHG Protocol 三範疇</strong>:
              <ul>
                <li>範疇一 (10-15%) = <strong>必要開銷</strong>: 柴油拖拉機、鍋爐 → 就像房租水電</li>
                <li>範疇二 (5-10%) = <strong>變動帳單</strong>: 購電 → 可選綠電降「碳帳單」</li>
                <li>範疇三 (70-80%) = <strong>隱性消費</strong>: <strong>玻璃瓶佔 55%</strong> → 就像外食花最多錢</li>
              </ul>
            </li>
            <li><strong>ISO 14064-1 六步驟</strong>:
              <ol>
                <li>定義邊界 → 決定「家庭開銷包不包括婆婆的醫藥費」</li>
                <li>識別排放源 → 列清單「柴油、電、玻璃瓶、運輸...」</li>
                <li>量化排放 → 活動數據 × 排放係數 = 排放量 (8,000 L × 2.68 kg/L = 21 噸)</li>
                <li>計算總量 → 範疇一+二+三 = 400 噸 = <strong>2 kg CO₂e/瓶</strong></li>
                <li>第三方查證 → SGS 稽核 2 天 €7K,拿查證聲明書</li>
                <li>持續改進 → 每年重新盤查,追蹤減量進度</li>
              </ol>
            </li>
          </ul>

          <h4>關鍵數字</h4>
          <table class="data-table compact">
            <tbody>
              <tr><td><strong>盤查成本</strong></td><td>50ha 酒莊: €15K (工具軟體 + 顧問 + 查證)</td></tr>
              <tr><td><strong>盤查 ROI</strong></td><td>新訂單 €150K/年 + 溢價 +8% → <strong>10 週回本,年化報酬 633%</strong></td></tr>
              <tr><td><strong>典型碳強度</strong></td><td>200K 瓶/年 → 400 噸 → <strong>2 kg CO₂e/瓶</strong> (行業基準 1.5-2.5)</td></tr>
              <tr><td><strong>範疇三結構</strong></td><td>玻璃瓶 <strong>55%</strong> + 運輸 22% + 其他 23%</td></tr>
              <tr><td><strong>不盤查代價</strong></td><td>2026 CBAM 按最高值課稅 → 出口成本+10-15% + 失去 B2B 訂單</td></tr>
            </tbody>
          </table>

          <h4>實戰行動</h4>
          <ol>
            <li>Month 1-2: 定義組織邊界 (控制/營運/權益法) + 收集活動數據 (發票/帳單/調查)</li>
            <li>Month 3: 計算三範疇排放 → <strong>驚喜發現</strong>: 玻璃瓶竟然佔 45%!</li>
            <li>Month 4-6: ISO 14064-1 第三方查證 → 拿查證聲明書</li>
            <li>對外揭露: 產品標籤印「碳足跡 2 kg/瓶」+ 永續報告 + B2B 數據共享</li>
          </ol>
        </div>

        <h3>支柱三: 減碳路徑 = 配置投資組合 (速贏 + 成本優 + 影響大)</h3>
        <div class="pillar-detail">
          <h4>核心概念</h4>
          <ul>
            <li><strong>SBTi 科學目標</strong> (1.5°C 路徑):
              <ul>
                <li>範疇一+二: <strong>年減 4.2%</strong> → 2030 減 42%, 2050 淨零</li>
                <li>範疇三: <strong>年減 2.5%</strong> → 2030 減 25%</li>
              </ul>
            </li>
            <li><strong>邊際減排成本曲線 (MACC)</strong>: 像投資組合,排序「投報率最高」的技術
              <ul>
                <li><strong>速贏方案 (Quick Wins)</strong> = 短期理財: 綠電、輕量瓶 → <strong>3-12 個月回本,年化 17.5% 減排</strong></li>
                <li><strong>成本優化方案 (Cost-Optimal)</strong> = 中期投資: 太陽能、在地供應 → <strong>6-8 年回本,年化 27.5% 減排</strong></li>
                <li><strong>最大影響方案 (Maximum Impact)</strong> = 長期策略: 全套再生能源、循環包裝 → <strong>10-15 年視野,年化 55% 減排</strong></li>
              </ul>
            </li>
          </ul>

          <h4>關鍵數字</h4>
          <table class="data-table compact">
            <tbody>
              <tr><td><strong>速贏方案</strong></td><td>綠電 (範疇二歸零) + 輕量瓶 (減 36 噸) → <strong>12 個月減排 17.5%,成本 < €10K</strong></td></tr>
              <tr><td><strong>成本優化方案</strong></td><td>+太陽能 (€40K) + 在地供應 → <strong>3 年減排 27.5%,8 年回本</strong></td></tr>
              <tr><td><strong>最大影響方案</strong></td><td>全套再生能源 + 循環包裝 + 電動車隊 + 碳匯林 → <strong>10 年減排 55%,投資 €250K</strong></td></tr>
              <tr><td><strong>太陽能 ROI</strong></td><td>50kW 系統 €40K → 年省 €6K 電費 → <strong>6.7 年回本</strong>,減 15 噸/年</td></tr>
              <tr><td><strong>輕量瓶神技</strong></td><td>420g → 350g → <strong>減 36 噸/年 (9%),成本 €0</strong> (等重置時換)</td></tr>
            </tbody>
          </table>

          <h4>實戰行動</h4>
          <ol>
            <li>提交 SBTi 科學目標 (年費 $9.5K USD,獲國際公信力)</li>
            <li>畫 MACC 曲線 → 排序技術方案 (從左到右: 負成本 → 零成本 → 低成本 → 高成本)</li>
            <li>Year 1: 執行速贏方案 (綠電 + 輕量瓶) → 12 個月減排 17.5%</li>
            <li>Year 2-3: 成本優化方案 (太陽能 + 在地供應) → 3 年減排 27.5%</li>
            <li>Year 4-10: 最大影響方案 (全面轉型) → 10 年減排 55%</li>
          </ol>
        </div>

        <h3>支柱四: 永續認證 = 考證照組合打消消費者疑慮</h3>
        <div class="pillar-detail">
          <h4>核心概念</h4>
          <ul>
            <li><strong>認證組合策略</strong>:
              <ul>
                <li>有機/生物動力 = <strong>營養師執照</strong>: 證明你會「健康飲食」(農法專業)</li>
                <li>碳中和/ISO = <strong>財務規劃師 CFP</strong>: 證明你會「管錢」(碳管理專業)</li>
                <li>B Corp = <strong>全科醫師執照</strong>: 證明你「全方位健康」(綜合 ESG)</li>
              </ul>
            </li>
            <li><strong>認證決策樹</strong>:
              <ul>
                <li>農法改革為主 → 有機 (€2K-5K/年) 或生物動力 (€3K-6K/年)</li>
                <li>氣候減碳為主 → 碳中和 PAS 2060 (€8K-15K) 或 ISO 14064-1 (€7K)</li>
                <li>全面 ESG 戰略 → B Corp (€5K-50K) 或 HVE 3 級 (€800-1.5K,法國市場)</li>
              </ul>
            </li>
            <li><strong>漂綠防範三原則</strong>:
              <ol>
                <li>透明數據: 公開碳盤查報告與減量進度</li>
                <li>第三方查證: 拿 ISO/SGS/Bureau Veritas 查證聲明</li>
                <li>實質行動: 先減排再抵銷,不能「只買碳權不減碳」</li>
              </ol>
            </li>
          </ul>

          <h4>關鍵數字</h4>
          <table class="data-table compact">
            <tbody>
              <tr><td><strong>有機認證 ROI</strong></td><td>€2K-5K/年 → 產品溢價 <strong>+15-25%</strong> → < 2 年回本</td></tr>
              <tr><td><strong>碳中和認證</strong></td><td>PAS 2060 €8K-15K → B2B 訂單 <strong>+10-15%</strong> → 1-2 年回本</td></tr>
              <tr><td><strong>B Corp 認證</strong></td><td>€5K-50K (規模別) → <strong>品牌 NPS +12 分</strong> + 千禧世代好感度 +30%</td></tr>
              <tr><td><strong>HVE 3 級</strong></td><td>€800-1.5K/年 → <strong>法國政府補助</strong> + 出口歐盟優勢</td></tr>
              <tr><td><strong>消費者認知</strong></td><td>有機認知 80% > 碳中和 45% > B Corp 22% (需教育市場)</td></tr>
            </tbody>
          </table>

          <h4>實戰行動</h4>
          <ol>
            <li>用決策樹選擇認證組合 (例: 有機 + 碳中和、或 HVE + ISO 14064)</li>
            <li>準備審計文件 (3-6 個月) → 現場稽核 (1-3 天) → 獲證</li>
            <li>整合進產品標示: 酒標印認證標章 + 背標 QR Code 連結永續故事</li>
            <li>行銷溝通: 不只「我有證」,更要說「為什麼這證照有意義」(教育消費者)</li>
          </ol>
        </div>

        <h3>支柱五: ESG 報告 = 定期健康報告給家人 (利害關係人)</h3>
        <div class="pillar-detail">
          <h4>核心概念</h4>
          <ul>
            <li><strong>四大報告框架</strong>:
              <ul>
                <li>GRI (Global Reporting Initiative): <strong>最全面</strong>,永續報告國際標準</li>
                <li>CSRD (歐盟企業永續報告指令): <strong>2024 起強制</strong>,大型企業 (500+ 員工) 必做</li>
                <li>TCFD (氣候相關財務揭露): <strong>金融界最重視</strong>,4 大支柱 (治理/策略/風險/指標)</li>
                <li>SASB (永續會計準則委員會): <strong>投資人最愛</strong>,財務重大性 ESG 指標</li>
              </ul>
            </li>
            <li><strong>重大性評估 (Materiality Assessment)</strong>:
              <ul>
                <li>雙軸矩陣: X 軸 = 對企業影響 | Y 軸 = 利害關係人關注度</li>
                <li>高-高象限 (優先揭露): 碳排放、水資源、產品品質、員工健康</li>
                <li>低-高象限 (關注): 生物多樣性、社區投資、文化保存</li>
              </ul>
            </li>
            <li><strong>七類利害關係人溝通</strong>:
              <table class="data-table compact">
                <thead>
                  <tr><th>對象</th><th>關注議題</th><th>溝通管道</th><th>頻率</th></tr>
                </thead>
                <tbody>
                  <tr><td>消費者</td><td>產品安全、永續認證、碳足跡</td><td>酒標、官網、社群</td><td>持續</td></tr>
                  <tr><td>投資者/股東</td><td>ESG 風險、長期價值</td><td>年報、投資者會議</td><td>季度/年度</td></tr>
                  <tr><td>員工</td><td>職安、培訓、薪酬公平</td><td>內部刊物、town hall</td><td>月度/季度</td></tr>
                  <tr><td>供應商</td><td>長期合作、永續要求</td><td>供應商大會、審計</td><td>年度</td></tr>
                  <tr><td>社區</td><td>環境影響、就業、文化</td><td>開放日、地方會議</td><td>年度</td></tr>
                  <tr><td>監管機關</td><td>法規遵循、環評</td><td>正式報告、現場稽核</td><td>依規定</td></tr>
                  <tr><td>NGO/媒體</td><td>透明度、爭議議題</td><td>新聞稿、永續報告</td><td>年度</td></tr>
                </tbody>
              </table>
            </li>
          </ul>

          <h4>關鍵數字</h4>
          <table class="data-table compact">
            <tbody>
              <tr><td><strong>報告成本</strong></td><td>首次 GRI 報告 €15K-30K (顧問 + 設計 + 查證)</td></tr>
              <tr><td><strong>CSRD 強制</strong></td><td><strong>2024 起</strong>大型企業 (500+ 員工) 必做雙重重大性評估</td></tr>
              <tr><td><strong>B2B 需求</strong></td><td>70% 大型採購商要求供應鏈 ESG 數據 (納入自己的範疇三)</td></tr>
              <tr><td><strong>金融優惠</strong></td><td>TCFD 揭露 → 綠色債券利率 <strong>-0.5-1%</strong></td></tr>
              <tr><td><strong>品牌價值</strong></td><td>主動揭露 ESG → NPS (淨推薦值) <strong>+12 分</strong></td></tr>
            </tbody>
          </table>

          <h4>實戰行動</h4>
          <ol>
            <li>年度重大性評估: 調查 7 類利害關係人 → 畫雙軸矩陣 → 識別優先議題</li>
            <li>撰寫永續報告 (GRI 格式): 執行摘要 + 治理策略 + 環境績效 + 社會績效 + 經濟績效 + GRI 索引</li>
            <li>第三方保證 (Assurance): 請 KPMG/Deloitte 查證報告「有限保證 (Limited)」或「合理保證 (Reasonable)」</li>
            <li>數位揭露工具: 永續微網站 (互動儀表板) + 區塊鏈溯源 (QR Code) + ESG 數據平台 (CDP/EcoVadis)</li>
            <li>納入績效考核: ESG KPI 佔高管 20-30% 權重 → 倒逼持續改進</li>
          </ol>
        </div>

        <h3>系統思維: 永續飛輪效應 (五個支柱如何互相強化)</h3>
        <div class="flywheel-diagram">
          <p>想像一個飛輪,五個支柱推動後會產生<strong>自我強化的正向循環</strong>:</p>
          <ol>
            <li><strong>ESG 框架</strong> → 定義永續願景與 KPI → 驅動...</li>
            <li><strong>GHG 盤查</strong> → 找出碳排大戶 (玻璃瓶 55%) → 指引...</li>
            <li><strong>減碳路徑</strong> → 執行速贏方案 (綠電+輕量瓶) 12 個月減 17.5% → 取得...</li>
            <li><strong>永續認證</strong> → 有機+碳中和雙認證 → 產品溢價+15%、B2B 訂單+€150K → 資金投入...</li>
            <li><strong>ESG 報告</strong> → 透明揭露吸引綠色基金投資、綠色貸款利率-0.7% → 更多資金推動...</li>
            <li><strong>回到 ESG 框架</strong> → 升級永續成熟度 (Level 2→3) → 設定更高目標 → 飛輪轉得更快!</li>
          </ol>
          <p class="insight-box">⚡ <strong>飛輪臨界點</strong>: 前 18 個月很辛苦 (投入 €53K,學習曲線陡),但一旦飛輪轉起來 → <strong>第 3 年起年化報酬 190%</strong>,且越轉越輕鬆。</p>
        </div>

        <h3>三個關鍵洞察 (跨章節整合)</h3>
        <div class="key-insights">
          <div class="insight">
            <h4>洞察一: 盤查是「X 光透視鏡」不是「成本黑洞」</h4>
            <p><strong>錯誤想法</strong>: 盤查花 €15K,只拿到一份報告,沒實質效益。</p>
            <p><strong>正確認知</strong>: 盤查 = 買「X 光透視鏡」€15K → 發現「隱藏金礦」:</p>
            <ul>
              <li>驚喜一: 玻璃瓶佔 55%,換輕量瓶減 36 噸,<strong>成本 €0</strong></li>
              <li>驚喜二: 原計畫花 €80K 買電動拖拉機只減 21 噸 → 改用綠電+輕量瓶減 63 噸,成本 < €10K → <strong>省 €70K,減排 3 倍</strong></li>
              <li>驚喜三: 拿查證聲明書 → 米其林餐廳下單 €150K/年 → <strong>10 週回本,年化報酬 633%</strong></li>
            </ul>
            <p class="application">🎯 <strong>應用建議</strong>: 把盤查預算 €15K 當「投資」不是「支出」,ROI 視角看待。盤查完立即執行速贏方案,6 個月內看到回報,避免「盤查完報告放抽屜」的失敗模式。</p>
          </div>

          <div class="insight">
            <h4>洞察二: 速贏方案 > 完美方案 (先跑起來再優化)</h4>
            <p><strong>錯誤想法</strong>: 等有 €250K 預算再一次做完「全套再生能源 + 循環包裝 + 電動車隊」。</p>
            <p><strong>正確認知</strong>: <strong>「先用 €10K 跑速贏方案,12 個月減 17.5%」> 「等 3 年存錢做完美方案」</strong></p>
            <ul>
              <li>速贏方案 (綠電+輕量瓶): 12 個月減 70 噸 (17.5%), 成本 < €10K, 立即有溢價收益</li>
              <li>成本優化方案 (再+太陽能+在地供應): 3 年減 110 噸 (27.5%), 投資 €63K, 8 年回本</li>
              <li>最大影響方案 (全套): 10 年減 220 噸 (55%), 投資 €250K, 15 年回本</li>
            </ul>
            <p><strong>時間價值</strong>: 速贏方案在 Year 1-3 已累積減排 210 噸 (70 × 3年),同時賺回 €303K (溢價+訂單+省成本 × 3年)。完美方案要等 3 年才開始,期間多排 210 噸,且錯過 €303K 收益機會成本。</p>
            <p class="application">🎯 <strong>應用建議</strong>: 採用「1-3-10 階梯策略」: Year 1 速贏、Year 2-3 成本優、Year 4-10 影響大。每個階段的收益滾入下一階段投資,形成「減碳+獲利」雙飛輪。</p>
          </div>

          <div class="insight">
            <h4>洞察三: 永續認證是「品牌保險單」也是「市場准入證」</h4>
            <p><strong>錯誤想法</strong>: 認證只是錦上添花,有行動就夠了,不需花錢拿證。</p>
            <p><strong>正確認知</strong>: 2024 後,認證從「加分項」變「必答題」</p>
            <ul>
              <li><strong>B2B 市場准入</strong>: 70% 大型採購商 (米其林餐廳/航空/連鎖超市) 要求供應商<strong>必須有第三方認證</strong>,沒證 = 失去資格 → 典型損失 €150K/年訂單</li>
              <li><strong>漂綠保險單</strong>: NGO/媒體盯著永續宣傳,沒第三方查證 → 被抓包漂綠 → 股價跌 8%、NPS -15 分、訴訟成本 €100K+ → 有認證 = 買「法律與聲譽保險」</li>
              <li><strong>金融條件</strong>: 銀行綠色貸款要 ESG 評級,ISO/B Corp 認證直接加分 → 利率優惠 0.5-1% → 50ha 酒莊省 €5K/年利息</li>
              <li><strong>消費者溢價</strong>: 有機認知 80%,消費者願付溢價 15-25% → 沒認證講永續 = 自嗨,消費者不買單</li>
            </ul>
            <p class="application">🎯 <strong>應用建議</strong>: 認證投報率分析: 有機 €3.5K/年 → 溢價收益 €45K/年 (30ha, +18%) → ROI 1,286% → <strong>把認證費當「強制保費+市場准入費」,不是選擇題</strong>。優先順序: 先拿「市場認知度高」的認證 (有機/HVE),再拿「金融界重視」的認證 (ISO/B Corp)。</p>
          </div>
        </div>

        <h3>實戰決策框架: 30ha 酒莊 3 年永續轉型路線圖</h3>
        <div class="action-roadmap">
          <table class="data-table">
            <thead>
              <tr><th>時間軸</th><th>行動項目</th><th>投資</th><th>減排效果</th><th>財務效益</th><th>認證/揭露</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Year 1<br>Q1-Q2</strong></td>
                <td>
                  1. ESG 健檢: 成立委員會、重大性評估<br>
                  2. GHG 盤查: ISO 14064-1 查證<br>
                  3. 速贏方案: 綠電合約 + 輕量瓶
                </td>
                <td>€25K<br>(盤查 €15K<br>+ 綠電溢價 €3K/年<br>+ 輕量瓶 €0)</td>
                <td><strong>-70 噸</strong><br>(17.5%)</td>
                <td>米其林訂單<br>+€150K/年<br>+ 溢價 +8%</td>
                <td>ISO 14064<br>查證聲明</td>
              </tr>
              <tr>
                <td><strong>Year 1<br>Q3-Q4</strong></td>
                <td>
                  4. 有機認證申請 (3 年轉型期開始)<br>
                  5. 永續報告初版 (GRI Core)
                </td>
                <td>€8K<br>(有機 €3K<br>+ 報告 €5K)</td>
                <td>-</td>
                <td>-</td>
                <td>有機轉型<br>(3 年後拿證)</td>
              </tr>
              <tr>
                <td><strong>Year 2</strong></td>
                <td>
                  6. 成本優化方案: 太陽能 50kW<br>
                  7. 在地供應商切換 (運輸減量)<br>
                  8. 員工共乘獎勵計畫
                </td>
                <td>€45K<br>(太陽能 €40K<br>+ 共乘獎勵 €5K)</td>
                <td><strong>-40 噸</strong><br>(累積 27.5%)</td>
                <td>年省電費 €6K<br>+ 運費 -€4K</td>
                <td>永續報告<br>Year 2</td>
              </tr>
              <tr>
                <td><strong>Year 3</strong></td>
                <td>
                  9. 有機認證取得 (3 年轉型期滿)<br>
                  10. 碳中和認證 (PAS 2060)<br>
                  11. B Corp 認證申請<br>
                  12. TCFD 氣候揭露
                </td>
                <td>€28K<br>(有機年費 €3K<br>+ 碳中和 €12K<br>+ B Corp €10K<br>+ TCFD €3K)</td>
                <td><strong>-110 噸</strong><br>(累積 27.5%<br>+ 碳抵銷)</td>
                <td>有機溢價<br><strong>+18%</strong><br>碳中和 B2B<br>+€80K/年</td>
                <td>三認證:<br>有機<br>+碳中和<br>+B Corp</td>
              </tr>
            </tbody>
          </table>
          <p class="summary-metric"><strong>3 年累積成效</strong>: 投資 €106K → 減排 110 噸 (27.5%) → 年度收益 €255K (溢價 +18% + 新訂單 €230K) → <strong>5 個月回本,第 3 年起年化報酬 240%</strong></p>
        </div>

        <h3>最後提醒: 永續是「馬拉松」也是「衝刺」</h3>
        <div class="final-thoughts">
          <p><strong>馬拉松視角</strong> (長期): 2050 淨零目標、建立百年品牌、ESG 成熟度 Level 4-5</p>
          <p><strong>衝刺視角</strong> (短期): <strong>2026 CBAM 碳關稅倒數 18 個月</strong>,現在不做盤查 → 出口成本+10-15% → 競爭力瞬間落後</p>
          <p class="action-call">🚀 <strong>行動建議</strong>: 
            <ul>
              <li><strong>Month 1</strong>: 成立永續委員會 + 啟動 GHG 盤查 (€15K)</li>
              <li><strong>Month 3</strong>: 拿到盤查數據 → 立即執行速贏方案 (綠電+輕量瓶,成本 < €10K)</li>
              <li><strong>Month 6</strong>: ISO 14064 查證通過 + 米其林訂單進來 → <strong>回本點</strong></li>
              <li><strong>Month 12</strong>: 有機認證申請 + 永續報告發布 → 進入正向飛輪</li>
              <li><strong>Month 36</strong>: 三認證到手 (有機+碳中和+B Corp) + 年化報酬 240% → <strong>永續變成獲利引擎</strong></li>
            </ul>
          </p>
          <p class="closing-insight">🌱 <strong>終極洞察</strong>: 永續不是「要不要做」的選擇題,而是「現在做還是 2 年後被迫做」的時機題。<strong>先行者吃溢價 (Year 1-3 賺 €765K),後進者交學費 (2026 後繳碳稅 + 失去訂單 + 品牌落後)</strong>。窗口期只有 18 個月,現在就是最好的時機。</p>
        </div>
      </div>
    `
  },
  quiz: {
    title: '課後測驗',
    questions: [
      {
        id: 1,
        question: '某酒莊年碳排 400 噸,其中範疇三占 75%。若要優先快速減排,最佳策略是?',
        options: ['投資電動拖拉機替代柴油車 (範疇一)', '簽署綠電合約 + 輕量化玻璃瓶 (範疇二三)', '等待供應商自主減碳'],
        correct: 1,
        explanation: '綠電可立即歸零範疇二,輕量瓶可減 30~40% 範疇三最大項 (玻璃瓶),成本低且速度快。'
      },
      {
        id: 2,
        question: 'SBTi 1.5°C 情境要求範疇一+二每年減量比例是?',
        options: ['1.5%', '4.2%', '10%'],
        correct: 1,
        explanation: 'SBTi 科學基礎目標要求範疇一+二年減 4.2%,範疇三年減 2.5%,以符合 1.5°C 升溫路徑。'
      },
      {
        id: 3,
        question: '若酒莊宣稱 "100% 天然" 但實際含添加物,這屬於哪種漂綠風險?',
        options: ['隱藏取捨', '誇大宣稱', '無實質行動'],
        correct: 1,
        explanation: '誇大宣稱是指過度美化產品屬性而與事實不符,需透過第三方查證與透明揭露防範。'
      }
    {
        id: 4,
        question: '根據 GHG Protocol，波爾多葡萄酒出廠後玻璃瓶在消費者端廢棄所產生的排放屬於哪個範疇？',
        options: [
        '範疇一（直接排放）',
        '範疇三（價值鏈下游活動）',
        '範疇二（購入電力）'
        ],
        correct: 1,
        explanation: '消費者使用後廢棄屬範疇三下游活動；玻璃瓶製造（採購）屬範疇三上游活動。兩者均為範疇三，與酒莊直接能源使用無關。'
      },
      {
        id: 5,
        question: '波爾多酒莊申請 HVE（高環境價值）三星認證，哪個條件是必要的？',
        options: [
        '員工薪資達法國行業平均',
        '生物多樣性、植保、施肥、水管理四指標同時達到門檻',
        '年度碳排放量低於 500 噸'
        ],
        correct: 1,
        explanation: 'HVE 三星要求在生物多樣性保護、植保策略、施肥管理、水資源管理四個面向均須達到規定門檻，任一不達標即無法通過。'
      },
    ],
    passingScore: 60,
    timeLimit: 180
  }
})

export default l48Content
