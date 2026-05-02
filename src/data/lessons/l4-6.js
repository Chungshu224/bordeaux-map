import { makeL4Lesson } from './l4-shared.js'

export const l46Content = makeL4Lesson({
  cover: {
    title: '法規與原產地保護',
    subtitle: 'Level 4 - 課程 6',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
    icon: '⚖️'
  },
  intro: {
    content: `
      <div class="course-intro-section">
        <h2>🏛️ 課程導讀:法規保護 = 房地產的產權證書</h2>
        
        <div class="analogy-framework">
          <h3>📚 為什麼原產地保護像房地產權證?</h3>
          <p>想像你在精華地段擁有一棟百年老宅:</p>
          <ul>
            <li><strong>產權證書 = AOC/PDO 認證</strong><br>證明這塊土地與建築的所有權與歷史淵源,沒有產權證任何人都可以聲稱是屋主。</li>
            <li><strong>建築規範 = 生產規範 (Cahier des Charges)</strong><br>房子不能隨意改建,需符合文化資產法規(品種、工藝、產量限制),才能維持歷史價值與市場溢價。</li>
            <li><strong>仿冒侵權 = 房產詐騙</strong><br>有人偽造產權證、複製房屋外觀,或用相似地址欺騙買家,你需要法律武器保護。</li>
            <li><strong>合規管理 = 定期產權審查</strong><br>你需定期檢查是否違建、稅務是否合規、鄰居是否侵佔界線,才能確保產權穩固。</li>
            <li><strong>未來趨勢 = 都市更新條例</strong><br>氣候變遷要求建築加裝節能設備、數位化登記取代紙本產權,你需隨法規演進調適。</li>
          </ul>
        </div>
        <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L4-6/01%20原產地法規與產權防護網.svg" alt="原產地法規與產權防護網" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>

        <div class="course-structure">
          <h3>📖 本課程架構</h3>
          <table class="clean-table">
            <tr>
              <td><strong>第一章</strong></td>
              <td>原產地保護法律體系</td>
              <td>🏛️</td>
              <td>理解歐盟與國際法律框架,建立多層防護網(PDO/PGI、里斯本協定、TRIPS)。</td>
            </tr>
            <tr>
              <td><strong>第二章</strong></td>
              <td>AOC/AOP 認證流程</td>
              <td>📋</td>
              <td>掌握從申請到持續監管的六階段流程,以及生產規範制定與修訂機制。</td>
            </tr>
            <tr>
              <td><strong>第三章</strong></td>
              <td>侵權監測與法律救濟</td>
              <td>🛡️</td>
              <td>識別仿冒類型、建立監測網路、選擇最有效的救濟路徑(行政/民事/刑事)。</td>
            </tr>
            <tr>
              <td><strong>第四章</strong></td>
              <td>合規管理與風險緩解</td>
              <td>✅</td>
              <td>建立四層合規架構,評估風險矩陣,運用科技工具(區塊鏈、AI 預警)。</td>
            </tr>
            <tr>
              <td><strong>第五章</strong></td>
              <td>永續與未來法規趨勢</td>
              <td>🌱</td>
              <td>應對綠色新政、e-Label、氣候調適品種等新興法規挑戰。</td>
            </tr>
          </table>
        </div>

        <div class="real-world-context">
          <h3>🌍 為什麼法規保護對酒莊如此重要?</h3>
          <div class="context-grid">
            <div>
              <h4>💰 經濟價值</h4>
              <p><strong>AOC 產品溢價 = 產權帶來的市場價值</strong><br>Bordeaux AOC 酒款可比無產區酒貴 2-10 倍,正如市中心房產比郊區貴。沒有法律保護,這個溢價會被仿冒稀釋。</p>
            </div>
            <div>
              <h4>🛡️ 品牌防護</h4>
              <p><strong>全球侵權 = 品牌被劫持</strong><br>香檳每年查獲數千起仿冒案,若不積極維權,消費者信任會崩塌,就像假房產證破壞市場秩序。</p>
            </div>
            <div>
              <h4>⚖️ 市場准入</h4>
              <p><strong>合規 = 出口許可證</strong><br>進入美國需 TTB 標示、中國需 CIQ 檢驗,每個市場都是一道關卡,產權清晰才能順利過關。</p>
            </div>
            <div>
              <h4>🌱 永續趨勢</h4>
              <p><strong>未來法規 = 都更條例</strong><br>歐盟綠色新政、e-Label 試點正在改寫遊戲規則,提前合規的酒莊將獲得競爭優勢。</p>
            </div>
          </div>
        </div>

        <div class="study-guide">
          <h3>💡 學習建議</h3>
          <ul>
            <li><strong>關注法律框架層級</strong>: 歐盟 → 國家 → 產區,理解多層保護如何疊加。</li>
            <li><strong>記憶關鍵流程</strong>: AOC 六階段、三種救濟路徑,這些是實務操作的骨架。</li>
            <li><strong>留意風險矩陣</strong>: 產量超標、仿冒侵權是最高風險,需優先緩解。</li>
            <li><strong>追蹤未來趨勢</strong>: 氣候調適品種、e-Label、綠色新政將重塑未來 10 年法規地圖。</li>
          </ul>
        </div>
      </div>
    `
  },
  objectives: [
    { id: 1, text: '解析歐盟與國際原產地保護法律框架', icon: '📜' },
    { id: 2, text: '掌握 AOC/AOP 認證流程與生產規範', icon: '✅' },
    { id: 3, text: '建立侵權監測與法律救濟機制', icon: '🛡️' },
    { id: 4, text: '整合合規管理與風險緩解策略', icon: '⚠️' }
  ],
  chapters: [
    {
      title: '第一章:原產地保護法律體系',
      nav: '法律框架',
      icon: '📚',
      highlightDelayStep: '0.06s',
      html: `
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>🧭 概念入門:法律體系 = 房屋的多層產權防護網</h3>
            
            <div class="analogy-box">
              <h4>🏡 生活化比喻:保護你的百年老宅</h4>
              <p>想像你在巴黎香榭麗舍大道擁有一棟百年老宅,如何確保沒人能仿冒、佔用或稀釋你的產權?</p>
              <table class="mapping-table">
                <tr>
                  <th>法律工具</th>
                  <th>房地產對應</th>
                  <th>實際作用</th>
                </tr>
                <tr>
                  <td><strong>PDO / AOP</strong></td>
                  <td>國家級產權證書</td>
                  <td>證明這塊土地與建築的獨特歷史與合法性,任何建築都需全程在該地建造才能標示此地址。</td>
                </tr>
                <tr>
                  <td><strong>PGI / IGP</strong></td>
                  <td>區域級註冊商標</td>
                  <td>只要部分工序在該地(如設計或裝修),就能使用該地區標籤,規範較寬鬆。</td>
                </tr>
                <tr>
                  <td><strong>里斯本協定</strong></td>
                  <td>國際產權互認協議</td>
                  <td>你的房產證在簽約國都有效,別國法院會承認你的所有權並協助維權。</td>
                </tr>
                <tr>
                  <td><strong>TRIPS 協定</strong></td>
                  <td>WTO 全球知識產權保護</td>
                  <td>將地理標示納入知識產權,就像將房產證升級為全球通用的法律武器。</td>
                </tr>
                <tr>
                  <td><strong>雙邊 FTA</strong></td>
                  <td>快速通關通道</td>
                  <td>與重點國家(如中國、日本)簽訂互認清單,海關可直接查驗與扣押仿冒品。</td>
                </tr>
              </table>
            </div>

            <div class="terminology-explained">
              <h4>📘 術語白話解釋</h4>
              <table class="definition-table">
                <tr>
                  <th>專業術語</th>
                  <th>白話解釋</th>
                  <th>為什麼重要?</th>
                </tr>
                <tr>
                  <td><strong>PDO vs PGI</strong></td>
                  <td>PDO = 全程在產區做,PGI = 至少一步在產區做</td>
                  <td>PDO 保護更嚴格(如波爾多),PGI 彈性更大(如 Pays d'Oc IGP 可混調外地葡萄)。</td>
                </tr>
                <tr>
                  <td><strong>里斯本協定</strong></td>
                  <td>原產地名稱的國際註冊系統</td>
                  <td>在簽約國可直接適用,無需逐國申請,降低維權成本。</td>
                </tr>
                <tr>
                  <td><strong>TRIPS Art. 22-23</strong></td>
                  <td>WTO 的地理標示保護條款</td>
                  <td>Art. 22 保護一般 GI,Art. 23 對葡萄酒與烈酒提供「附加保護」(即便無混淆也禁止使用)。</td>
                </tr>
                <tr>
                  <td><strong>Cahier des Charges</strong></td>
                  <td>生產規範說明書</td>
                  <td>定義品種、產量、工藝、陳年等細節,是 AOC 認證的技術核心,違反即撤銷資格。</td>
                </tr>
                <tr>
                  <td><strong>GI (地理標示)</strong></td>
                  <td>地理標示 = 產地身份證</td>
                  <td>通用術語,涵蓋 PDO、PGI 等所有與地理來源相關的保護,是國際貿易談判的核心議題。</td>
                </tr>
              </table>
            </div>

            <div class="reading-guide">
              <h4>🔍 閱讀指南:如何使用本章表格</h4>
              <ul>
                <li><strong>歐盟三層體系表</strong>: 先理解 PDO、PGI、TSG 的差異,葡萄酒主要用 PDO/PGI。</li>
                <li><strong>法國 AOC 演進時間軸</strong>: 記住 1935(創立)、1992(歐盟化)、2009(改名 AOP)、2012+(永續要求)四個關鍵年。</li>
                <li><strong>國際保護框架表</strong>: 區分全球性(TRIPS)、區域性(里斯本)、雙邊(FTA)三層防護網,重疊使用效果最佳。</li>
                <li><strong>波爾多四層防護案例</strong>: 示範如何疊加多個法律工具,提升侵權成本。</li>
              </ul>
            </div>
          </div>

          <h3>歐盟地理標示體系</h3>
          <table class="data-table">
            <thead>
              <tr><th>標示類型</th><th>縮寫</th><th>保護範圍</th><th>典型要求</th><th>葡萄酒案例</th></tr>
            </thead>
            <tbody>
              <tr><td>原產地命名保護</td><td>PDO / AOP</td><td>生產、加工、製備全程於特定地區</td><td>風土、品種、工藝全限定</td><td>Bordeaux AOC、Barolo DOCG</td></tr>
              <tr><td>地理標示保護</td><td>PGI / IGP</td><td>至少一環節於該地區</td><td>品種較彈性、產區範圍較大</td><td>Pays d'Oc IGP</td></tr>
              <tr><td>傳統特產保證</td><td>TSG</td><td>特定製法或原料</td><td>不強制地理限制</td><td>少用於葡萄酒</td></tr>
            </tbody>
          </table>
          <h3>法國 AOC 體系演進</h3>
          <ul>
            <li><strong>1935</strong>: INAO 成立,確立 AOC 法定產區制度。</li>
            <li><strong>1992</strong>: 歐盟法規統一,AOC 納入 PDO 框架。</li>
            <li><strong>2009</strong>: 法國改用 AOP 標示與歐盟一致,內涵不變。</li>
            <li><strong>2012+</strong>: 引入環境與永續要求,強化土壤與水資源管理。</li>
          </ul>
          <h3>國際保護框架</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>協定/組織</th><th>保護機制</th><th>適用範圍</th></tr>
            </thead>
            <tbody>
              <tr><td>里斯本協定 (Lisbon Agreement)</td><td>原產地名稱國際註冊</td><td>簽約國雙邊互認</td></tr>
              <tr><td>TRIPS 協定 (WTO)</td><td>GI 納入知識產權保護</td><td>全球 WTO 會員國</td></tr>
              <tr><td>雙邊貿易協定 (FTA)</td><td>互認清單、海關協作</td><td>歐-日、歐-加等</td></tr>
              <tr><td>OIV 標準</td><td>釀造規範與分析方法</td><td>國際酒業參考基準</td></tr>
            </tbody>
          </table>
          <h3>案例:波爾多 AOC 法律防護層級</h3>
          <ol>
            <li>歐盟 PDO 註冊保護 (Reg. 1308/2013)。</li>
            <li>法國國內 AOP 規範 (INAO cahier des charges)。</li>
            <li>里斯本國際註冊與雙邊協定(如歐-中 GI 協定)。</li>
            <li>品牌商標與域名註冊互補保護。</li>
          </ol>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🇪🇺', title: 'PDO/PGI/TSG', content: '歐盟三層地理標示保護體系差異。' },
        { id: 2, icon: '📅', title: 'AOC→AOP 演進', content: '法國 1935 至 2009 制度整合過程。' },
        { id: 3, icon: '🌐', title: '國際協定', content: '里斯本、TRIPS、FTA 多層次保護網。' }
      ]
    },
    {
      title: '第二章:AOC/AOP 認證流程與規範',
      nav: '認證規範',
      icon: '📋',
      highlightDelayStep: '0.07s',
      html: `
        <div class="chapter-content">
          <h3>AOC 認證六階段</h3>
          <div class="aoc-process-widget">
            <input type="radio" id="aoc-step1" name="aoc-process" class="opt-step1" checked>
            <input type="radio" id="aoc-step2" name="aoc-process" class="opt-step2">
            <input type="radio" id="aoc-step3" name="aoc-process" class="opt-step3">
            <input type="radio" id="aoc-step4" name="aoc-process" class="opt-step4">
            <input type="radio" id="aoc-step5" name="aoc-process" class="opt-step5">
            <input type="radio" id="aoc-step6" name="aoc-process" class="opt-step6">
            <div class="selectors">
              <label for="aoc-step1">1. 申請</label>
              <label for="aoc-step2">2. 地塊劃定</label>
              <label for="aoc-step3">3. 規範制定</label>
              <label for="aoc-step4">4. 審查</label>
              <label for="aoc-step5">5. 批准</label>
              <label for="aoc-step6">6. 持續監管</label>
            </div>
            <div class="panels">
              <div class="panel" data-step="1">
                <h4>申請階段</h4>
                <ul>
                  <li>由生產者協會或公會提交申請。</li>
                  <li>需附地理邊界、歷史證明與風土資料。</li>
                  <li>INAO 初步審查可行性。</li>
                </ul>
              </div>
              <div class="panel" data-step="2">
                <h4>地塊劃定</h4>
                <ul>
                  <li>土壤調查、氣候分析、歷史種植記錄。</li>
                  <li>專家委員會現場勘查。</li>
                  <li>確認符合風土特性的最小單位地塊。</li>
                </ul>
              </div>
              <div class="panel" data-step="3">
                <h4>規範制定 (Cahier des Charges)</h4>
                <ul>
                  <li>允許品種清單與種植密度。</li>
                  <li>最高產量 (hl/ha)、修剪方式。</li>
                  <li>釀造工藝:發酵、陳年、混調比例。</li>
                  <li>感官特性與分析指標。</li>
                </ul>
              </div>
              <div class="panel" data-step="4">
                <h4>審查階段</h4>
                <ul>
                  <li>INAO 專家委員會評估。</li>
                  <li>公眾諮詢期(利害關係人意見)。</li>
                  <li>國家委員會 (CNIGP) 審議。</li>
                </ul>
              </div>
              <div class="panel" data-step="5">
                <h4>批准與註冊</h4>
                <ul>
                  <li>農業部正式批准。</li>
                  <li>歐盟層級 PDO 註冊。</li>
                  <li>公告生效日期與過渡期。</li>
                </ul>
              </div>
              <div class="panel" data-step="6">
                <h4>持續監管與審計</h4>
                <ul>
                  <li>年度申報與產量審查。</li>
                  <li>隨機抽檢與感官評審。</li>
                  <li>違規處罰:警告、暫停、撤銷認證。</li>
                </ul>
              </div>
            </div>
          </div>
          <h3>典型生產規範要點 (以 Margaux AOC 為例)</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>項目</th><th>規範內容</th></tr>
            </thead>
            <tbody>
              <tr><td>允許品種</td><td>Cabernet Sauvignon、Merlot、Cabernet Franc、Petit Verdot、Malbec、Carménère</td></tr>
              <tr><td>種植密度</td><td>≥ 6,500 株/ha</td></tr>
              <tr><td>最高產量</td><td>45 hl/ha (紅酒)</td></tr>
              <tr><td>最低酒精度</td><td>11.5% vol</td></tr>
              <tr><td>陳年要求</td><td>橡木桶至少 12 個月</td></tr>
              <tr><td>灌溉</td><td>僅乾旱年經 INAO 批准</td></tr>
            </tbody>
          </table>
          <h3>修訂與演進</h3>
          <ul>
            <li>規範並非一成不變,生產者可申請修訂(例如新品種試驗、氣候調適)。</li>
            <li>修訂需經公聽、專家審查與歐盟核准。</li>
          </ul>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🔄', title: '六階段流程', content: '申請→地塊→規範→審查→批准→監管。' },
        { id: 2, icon: '📝', title: 'Cahier des Charges', content: '品種、密度、產量、工藝全面限定。' },
        { id: 3, icon: '🔍', title: '持續審計', content: '年度申報與抽檢確保規範遵循。' }
      ]
    },
    {
      title: '第三章:侵權監測與法律救濟',
      nav: '侵權防護',
      icon: '🛡️',
      highlightDelayStep: '0.08s',
      html: `
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>🧭 概念入門:侵權防護 = 安裝防盜系統與報警網路</h3>
            
            <div class="analogy-box">
              <h4>🏠 生活化比喻:保護你的房產不被詐騙</h4>
              <p>你的百年老宅價值連城,但市場上出現各種仿冒與詐騙:</p>
              <table class="mapping-table">
                <tr>
                  <th>侵權類型</th>
                  <th>房產詐騙對應</th>
                  <th>防護策略</th>
                </tr>
                <tr>
                  <td><strong>直接仿冒</strong></td>
                  <td>偽造產權證,聲稱是你的房子</td>
                  <td>在政府登記產權,任何交易都需核對正本 → 類似歐盟 PDO 註冊,海關可直接扣押。</td>
                </tr>
                <tr>
                  <td><strong>暗示性仿冒</strong></td>
                  <td>建造外觀相似的房子,使用近似地址(如「香榭麗舍大道旁」)</td>
                  <td>禁止使用近似名稱或翻譯,即便標明「風格」也不行 → TRIPS Art. 23 附加保護。</td>
                </tr>
                <tr>
                  <td><strong>稀釋與誤導</strong></td>
                  <td>包裝、宣傳模仿你的風格,讓人以為是你的分店</td>
                  <td>反不正當競爭法,禁止任何引起混淆的行為 → 民事訴訟請求禁制令。</td>
                </tr>
                <tr>
                  <td><strong>電商與域名侵權</strong></td>
                  <td>搶註 your-house.com 域名,在網上賣假房產</td>
                  <td>UDRP 域名爭議解決程序,快速奪回域名 → AI 工具監測電商平台。</td>
                </tr>
              </table>
            </div>

            <div class="terminology-explained">
              <h4>📘 術語白話解釋</h4>
              <table class="definition-table">
                <tr>
                  <th>專業術語</th>
                  <th>白話解釋</th>
                  <th>實際案例</th>
                </tr>
                <tr>
                  <td><strong>直接仿冒</strong></td>
                  <td>非法使用 AOC 名稱,完全假冒</td>
                  <td>美國曾有酒商標示"Champagne",被法國香檳協會告贏,強制改名。</td>
                </tr>
                <tr>
                  <td><strong>暗示性仿冒</strong></td>
                  <td>用近似名稱或翻譯暗示產地</td>
                  <td>用「香檳風格」或「Méthode Champenoise」未經授權,也構成侵權(Art. 23 附加保護)。</td>
                </tr>
                <tr>
                  <td><strong>海關備案</strong></td>
                  <td>在進口國海關登記你的 GI,海關可主動扣押仿冒品</td>
                  <td>中國海關備案後,海關每年扣押數百批假波爾多酒,無需酒莊逐案提告。</td>
                </tr>
                <tr>
                  <td><strong>UDRP</strong></td>
                  <td>統一域名爭議解決政策</td>
                  <td>若有人搶註 bordeaux-wine.com,酒莊可透過 WIPO 提起 UDRP 程序,60 天內奪回。</td>
                </tr>
                <tr>
                  <td><strong>行政 vs 民事 vs 刑事</strong></td>
                  <td>三種救濟路徑,速度與力度不同</td>
                  <td>行政快但賠償少,民事慢但賠償高,刑事嚇阻強但需達犯罪門檻。</td>
                </tr>
              </table>
            </div>

            <div class="decision-tree">
              <h4>🛤️ 選擇救濟路徑的決策樹</h4>
              <div class="tree-structure">
                <p><strong>Step 1: 評估侵權規模</strong></p>
                <ul>
                  <li>零星個案(1-2 次) → 行政救濟(成本低,警告效果)</li>
                  <li>持續侵權(數月以上) → 民事訴訟(索賠+禁制令)</li>
                  <li>系統性、跨國造假 → 刑事追訴(沒收+監禁,嚇阻全行業)</li>
                </ul>
                <p><strong>Step 2: 評估證據完整性</strong></p>
                <ul>
                  <li>有購買憑證、實物樣本 → 立即行動</li>
                  <li>僅有網路截圖 → 先委託公證購買,固定證據</li>
                </ul>
                <p><strong>Step 3: 評估對方資力</strong></p>
                <ul>
                  <li>大型企業 → 民事訴訟有賠償價值</li>
                  <li>小作坊、無固定資產 → 行政扣押+銷毀即可</li>
                </ul>
              </div>
            </div>

            <div class="reading-guide">
              <h4>🔍 閱讀指南:如何使用本章工具</h4>
              <ul>
                <li><strong>侵權類型表</strong>: 先識別屬於哪種侵權,決定適用法條(直接仿冒用 Reg. 1308,暗示性用 TRIPS Art. 23)。</li>
                <li><strong>監測機制清單</strong>: 建立「市場巡查 + 海關備案 + AI 監測 + 消費者舉報」四位一體網路。</li>
                <li><strong>救濟路徑 Widget</strong>: 點選三個選項,對比速度、成本、效果,選擇最適合的路徑。</li>
                <li><strong>歐-中 GI 協定案例</strong>: 示範國際合作如何降低維權成本,值得在其他市場複製。</li>
              </ul>
            </div>
          </div>

          <h3>常見侵權類型</h3>
          <table class="data-table">
            <thead>
              <tr><th>侵權類型</th><th>描述</th><th>實例</th><th>法律依據</th></tr>
            </thead>
            <tbody>
              <tr><td>直接仿冒</td><td>非法使用 AOC 名稱</td><td>產自其他國家卻標示"Champagne"</td><td>EU Reg. 1308/2013、TRIPS Art. 22</td></tr>
              <tr><td>暗示性仿冒</td><td>使用近似名稱或翻譯</td><td>"香檳風格"、"Méthode Champenoise"(未授權)</td><td>附加保護(Art. 23)、混淆禁止</td></tr>
              <tr><td>稀釋與誤導</td><td>即便標明真實產地,仍引起混淆</td><td>包裝、字型模仿知名產區</td><td>反不正當競爭法</td></tr>
              <tr><td>電商與域名侵權</td><td>網站域名搶註、平台仿冒</td><td>bordeaux-wine-fake.com</td><td>UDRP、商標法</td></tr>
            </tbody>
          </table>
          <h3>監測與預警機制</h3>
          <ul>
            <li><strong>市場監測</strong>: 委託專業機構定期巡查線上線下通路。</li>
            <li><strong>海關備案</strong>: 在主要進口國提交 GI 備案,海關可主動扣押侵權商品。</li>
            <li><strong>數位監測</strong>: AI 工具掃描電商平台、社群媒體與域名註冊。</li>
            <li><strong>消費者舉報</strong>: 建立官方檢舉管道,鼓勵消費者通報。</li>
          </ul>
          <h3>法律救濟路徑</h3>
          <div class="legal-remedy-widget">
            <input type="radio" id="remedy-admin" name="remedy-path" class="opt-admin" checked>
            <input type="radio" id="remedy-civil" name="remedy-path" class="opt-civil">
            <input type="radio" id="remedy-criminal" name="remedy-path" class="opt-criminal">
            <div class="selectors">
              <label for="remedy-admin">行政救濟</label>
              <label for="remedy-civil">民事訴訟</label>
              <label for="remedy-criminal">刑事追訴</label>
            </div>
            <div class="panels">
              <div class="panel" data-remedy="admin">
                <h4>行政救濟</h4>
                <ul>
                  <li>向 INAO 或歐盟主管機關檢舉。</li>
                  <li>海關扣押與銷毀侵權商品。</li>
                  <li>行政罰款與停業處分。</li>
                  <li>優點:成本低、處理快;缺點:賠償有限。</li>
                </ul>
              </div>
              <div class="panel" data-remedy="civil">
                <h4>民事訴訟</h4>
                <ul>
                  <li>請求禁制令、銷毀侵權產品。</li>
                  <li>請求損害賠償(實際損失+合理利潤)。</li>
                  <li>公開道歉與聲譽恢復。</li>
                  <li>優點:賠償較高、可協商和解;缺點:時程長、成本高。</li>
                </ul>
              </div>
              <div class="panel" data-remedy="criminal">
                <h4>刑事追訴</h4>
                <ul>
                  <li>適用於故意、系統性仿冒或欺詐。</li>
                  <li>可判處罰金、監禁與沒收財產。</li>
                  <li>需由檢察機關主導,受害方協助提供證據。</li>
                  <li>優點:嚇阻效果強;缺點:需達犯罪門檻,不適用輕微違規。</li>
                </ul>
              </div>
            </div>
          </div>
          <h3>國際合作案例</h3>
          <p><strong>歐-中 GI 互認協定 (2021)</strong>: 包含 100+100 個歐中雙方 GI 清單(如 Bordeaux、龍井茶),雙方海關與執法機關建立快速通報機制,顯著降低仿冒發生率。</p>
          <h3>預防性策略</h3>
          <ul>
            <li>在關鍵市場註冊商標與 GI。</li>
            <li>採用防偽技術:區塊鏈溯源、NFC 標籤。</li>
            <li>教育消費者辨識真品特徵與官方標章。</li>
          </ul>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🚨', title: '侵權類型', content: '直接仿冒、暗示性、稀釋與電商侵權。' },
        { id: 2, icon: '🔎', title: '監測機制', content: '市場巡查、海關備案、AI 數位監測。' },
        { id: 3, icon: '⚖️', title: '救濟路徑', content: '行政、民事、刑事三軌,視情境選擇。' }
      ]
    },
    {
      title: '第四章:合規管理與風險緩解',
      nav: '合規策略',
      icon: '✅',
      highlightDelayStep: '0.09s',
      html: `
        <div class="chapter-content">
          <h3>合規管理框架</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>層級</th><th>負責單位</th><th>核心任務</th><th>頻率</th></tr>
            </thead>
            <tbody>
              <tr><td>戰略層</td><td>管理層/法務長</td><td>制定合規政策、審查重大風險</td><td>年度</td></tr>
              <tr><td>管理層</td><td>合規經理</td><td>規範解讀、內部培訓、稽核計畫</td><td>季度</td></tr>
              <tr><td>執行層</td><td>酒窖、品管、行銷</td><td>日常作業遵循、記錄留存</td><td>持續</td></tr>
              <tr><td>監督層</td><td>內部稽核/第三方</td><td>獨立審計、缺失改善追蹤</td><td>年度/隨機</td></tr>
            </tbody>
          </table>
          <h3>關鍵合規領域</h3>
          <ul>
            <li><strong>生產合規</strong>: 品種、產量、工藝符合 Cahier des Charges。</li>
            <li><strong>標示合規</strong>: 酒標、背標、宣傳資料符合各市場法規(語言、警示語、成分)。</li>
            <li><strong>貿易合規</strong>: 出口文件、原產地證明、關稅與稅則分類。</li>
            <li><strong>數位合規</strong>: GDPR、CCPA、廣告法、未成年保護。</li>
            <li><strong>永續合規</strong>: 環境法規(HVE、ISO 14001)、社會責任(勞工法、公平交易)。</li>
          </ul>
          <h3>風險評估矩陣</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>風險類別</th><th>可能性</th><th>影響</th><th>優先級</th><th>緩解措施</th></tr>
            </thead>
            <tbody>
              <tr><td>產量超標</td><td>中</td><td>高(撤銷 AOC)</td><td>高</td><td>GPS 地塊監測、產量申報系統</td></tr>
              <tr><td>標示錯誤</td><td>中</td><td>中(罰款、召回)</td><td>中</td><td>雙重審核、法規資料庫</td></tr>
              <tr><td>仿冒侵權</td><td>高</td><td>高(品牌受損)</td><td>極高</td><td>市場監測、法律行動</td></tr>
              <tr><td>環境違規</td><td>低</td><td>高(停產、罰款)</td><td>中</td><td>第三方認證、持續審計</td></tr>
              <tr><td>數位隱私</td><td>中</td><td>中(罰款、聲譽)</td><td>中</td><td>DPO 指派、合規工具</td></tr>
            </tbody>
          </table>
          <h3>合規科技應用</h3>
          <ul>
            <li><strong>區塊鏈溯源</strong>: 記錄從葡萄園到裝瓶的每一環節,不可篡改。</li>
            <li><strong>法規資料庫</strong>: 即時更新各國法規變動,自動提示不符項目。</li>
            <li><strong>合規儀表板</strong>: 視覺化展示產量、標示、審計狀態。</li>
            <li><strong>AI 風險預警</strong>: 分析歷史數據,預測潛在違規點。</li>
          </ul>
          <h3>案例:多市場合規挑戰</h3>
          <p>某酒莊同時出口美國(TTB 標示要求)、中國(CIQ 檢驗檢疫)、日本(酒稅法標示)與歐盟(e-Label 試點),需為每個市場設計專屬標籤模板,並建立中央合規檢查清單確保無遺漏。</p>
          <h3>持續改進機制</h3>
          <ol>
            <li>年度合規審計與管理層審查。</li>
            <li>員工合規培訓與認證(每年至少 2 次)。</li>
            <li>監管機關溝通與政策解讀更新。</li>
            <li>同業最佳實踐學習與合規聯盟參與。</li>
          </ol>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🏛️', title: '四層架構', content: '戰略、管理、執行、監督層分工明確。' },
        { id: 2, icon: '⚠️', title: '風險矩陣', content: '評估可能性與影響,優先處理高風險。' },
        { id: 3, icon: '🤖', title: '合規科技', content: '區塊鏈、法規庫、AI 預警工具賦能。' }
      ]
    },
    {
      title: '第五章:永續與未來法規趨勢',
      nav: '未來趨勢',
      icon: '🌱',
      highlightDelayStep: '0.1s',
      html: `
        <div class="chapter-content">
          <h3>永續法規整合</h3>
          <ul>
            <li><strong>環境法規升級</strong>: 歐盟綠色新政(Green Deal)要求 2030 年農藥減半、有機面積達 25%。</li>
            <li><strong>碳足跡披露</strong>: 法國 2023 起試行環境標籤,未來可能強制揭露碳排。</li>
            <li><strong>水資源管理</strong>: 乾旱地區灌溉許可更嚴格,需提交永續用水計畫。</li>
          </ul>
          <h3>數位標籤 (e-Label) 試點</h3>
          <ul>
            <li>歐盟 2023 年底起允許 QR Code 取代部分背標資訊(成分、營養、回收)。</li>
            <li>酒莊可動態更新內容,降低多語言印刷成本。</li>
            <li>挑戰:需確保 QR 穩定、無障礙、隱私保護。</li>
          </ul>
          <h3>氣候變遷與品種調適</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>議題</th><th>現行限制</th><th>調適方向</th><th>法規演進</th></tr>
            </thead>
            <tbody>
              <tr><td>耐熱品種</td><td>AOC 品種清單固定</td><td>試驗性引入耐熱品種(如 Marselan)</td><td>INAO 開放小比例試驗田</td></tr>
              <tr><td>灌溉許可</td><td>僅乾旱年批准</td><td>建立永續灌溉標準</td><td>可能放寬但需監測用水</td></tr>
              <tr><td>採收提前</td><td>無明確規範</td><td>制定酸度與糖度平衡指標</td><td>新增氣候調適條款</td></tr>
            </tbody>
          </table>
          <h3>國際法規協調趨勢</h3>
          <ul>
            <li><strong>GI 互認擴大</strong>: 更多雙邊 FTA 納入 GI 清單,簡化保護流程。</li>
            <li><strong>OIV 標準更新</strong>: 釀造新技術(如部分脫醇、減糖)的國際認可。</li>
            <li><strong>數位貿易規則</strong>: 跨境電商、NFT 酒標、虛擬品酒等新興議題的法律定位。</li>
          </ul>
          <h3>合規未來能力</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>能力</th><th>重要性</th><th>建議行動</th></tr>
            </thead>
            <tbody>
              <tr><td>法規情報系統</td><td>極高</td><td>訂閱歐盟公報、OIV 通訊,AI 自動提示</td></tr>
              <tr><td>跨部門協作</td><td>高</td><td>法務、生產、行銷定期合規會議</td></tr>
              <tr><td>第三方認證</td><td>中</td><td>HVE、B Corp、ISO 等認證增強公信力</td></tr>
              <tr><td>消費者溝通</td><td>中</td><td>透明揭露合規與永續成就,建立信任</td></tr>
            </tbody>
          </table>
          <h3>案例:氣候調適試驗</h3>
          <p>波爾多某產區在 INAO 批准下,於 5% 試驗田種植耐熱品種 Marselan,並承諾 10 年數據追蹤。若試驗成功且不損風土特性,可能納入正式 AOC 品種清單。</p>
          <h3>行動建議</h3>
          <ol>
            <li>建立內部法規追蹤小組,每季度更新政策地圖。</li>
            <li>參與產業協會與 INAO 諮詢會議,影響政策制定。</li>
            <li>投資合規科技與永續認證,提前佈局。</li>
            <li>培訓員工法規意識,將合規納入企業文化。</li>
          </ol>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🌍', title: '綠色新政', content: '農藥減半、有機面積、碳足跡披露。' },
        { id: 2, icon: '📱', title: 'e-Label 試點', content: 'QR Code 動態標籤取代部分印刷。' },
        { id: 3, icon: '🌡️', title: '氣候調適', content: '耐熱品種、灌溉、採收彈性規範演進。' }
      ]
    }
  ],
  summary: {
    title: '課程總結',
    html: `
      <div class="comprehensive-summary">
        <h2>🎯 L4-6 核心回顧:原產地保護的五大支柱</h2>

        <div class="five-pillars">
          <div class="pillar">
            <h3>1️⃣ 多層法律框架:歐盟 + 國際 + 雙邊</h3>
            <ul>
              <li><strong>歐盟體系</strong>: PDO (全程產區) > PGI (部分產區) > TSG (傳統製法)</li>
              <li><strong>國際協定</strong>: 里斯本(雙邊互認) + TRIPS(WTO 全球) + FTA(快速通關)</li>
              <li><strong>實戰策略</strong>: 疊加多層保護,在關鍵市場(美中日)提交海關備案,建立快速反應機制。</li>
              <li><strong>關鍵指標</strong>: 
                <ul>
                  <li>波爾多 AOC 已在 <strong>50+ 國家</strong>註冊保護</li>
                  <li>歐-中 GI 協定後,侵權案件下降 <strong>40%</strong></li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="pillar">
            <h3>2️⃣ AOC 認證六階段:從申請到持續監管</h3>
            <ul>
              <li><strong>流程</strong>: 申請 → 地塊劃定 → 規範制定 → 審查 → 批准 → 持續監管</li>
              <li><strong>核心文件</strong>: Cahier des Charges (規範說明書) 定義品種、產量、工藝、陳年等所有細節</li>
              <li><strong>動態演進</strong>: 規範可修訂,但需公聽 + 專家審查 + 歐盟核准,通常耗時 2-3 年</li>
              <li><strong>關鍵指標</strong>: 
                <ul>
                  <li>Margaux AOC: 最高產量 <strong>45 hl/ha</strong>,種植密度 <strong>≥6,500 株/ha</strong></li>
                  <li>違規處罰: 警告 → 暫停(1 年) → 撤銷認證(永久)</li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="pillar">
            <h3>3️⃣ 侵權防護三軌:行政 + 民事 + 刑事</h3>
            <ul>
              <li><strong>行政救濟</strong>: 海關扣押 + 行政罰款,<strong>成本低、速度快</strong>,適合零星侵權</li>
              <li><strong>民事訴訟</strong>: 禁制令 + 損害賠償,<strong>賠償高、可和解</strong>,適合持續侵權</li>
              <li><strong>刑事追訴</strong>: 罰金 + 監禁 + 沒收財產,<strong>嚇阻強、門檻高</strong>,適合系統性造假</li>
              <li><strong>監測網路</strong>: 市場巡查 + 海關備案 + AI 電商監測 + 消費者舉報四位一體</li>
              <li><strong>關鍵指標</strong>: 
                <ul>
                  <li>香檳協會年均查獲 <strong>3,000+ 起</strong>仿冒案</li>
                  <li>海關備案後,扣押速度從 <strong>6 個月縮短至 2 週</strong></li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="pillar">
            <h3>4️⃣ 合規管理四層架構:戰略到執行</h3>
            <ul>
              <li><strong>戰略層</strong>: 管理層制定合規政策,審查重大風險(年度)</li>
              <li><strong>管理層</strong>: 合規經理解讀規範、培訓員工、規劃稽核(季度)</li>
              <li><strong>執行層</strong>: 酒窖、品管、行銷日常遵循規範,記錄留存(持續)</li>
              <li><strong>監督層</strong>: 內部稽核或第三方獨立審計,缺失改善追蹤(年度/隨機)</li>
              <li><strong>科技賦能</strong>: 區塊鏈溯源 + 法規資料庫 + 合規儀表板 + AI 風險預警</li>
              <li><strong>關鍵指標</strong>: 
                <ul>
                  <li>風險矩陣: 產量超標 + 仿冒侵權 = <strong>極高優先級</strong></li>
                  <li>員工合規培訓: <strong>每年至少 2 次</strong></li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="pillar">
            <h3>5️⃣ 未來趨勢:綠色新政 + e-Label + 氣候調適</h3>
            <ul>
              <li><strong>綠色新政</strong>: 2030 年農藥減半、有機面積達 25%、碳足跡強制披露</li>
              <li><strong>e-Label 試點</strong>: QR Code 取代部分背標,動態更新成分、營養、回收資訊</li>
              <li><strong>氣候調適</strong>: INAO 開放小比例試驗田引入耐熱品種(如 Marselan),10 年數據追蹤</li>
              <li><strong>國際協調</strong>: GI 互認擴大(更多 FTA)、OIV 更新釀造標準(部分脫醇、減糖)、數位貿易規則</li>
              <li><strong>關鍵指標</strong>: 
                <ul>
                  <li>e-Label 普及率目標: <strong>2030 年達 60%</strong></li>
                  <li>氣候調適品種試驗: 目前 <strong>5% 試驗田</strong>,若成功可納入正式清單</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div class="system-thinking">
          <h3>🔗 系統思維:法規保護的連鎖反應</h3>
          <div class="chain-reaction">
            <div class="reaction-step">
              <h4>起點:建立多層法律防護</h4>
              <p>PDO 註冊 + 里斯本協定 + 海關備案</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>市場價值提升</h4>
              <p>AOC 溢價 2-10 倍,消費者信任度↑ 25%</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>侵權成本提高</h4>
              <p>海關主動扣押,民事賠償嚇阻,仿冒減少 40%</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>品牌資產積累</h4>
              <p>市場秩序穩定,品牌力提升(品牌溢價 = 房產增值)</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>合規能力內化</h4>
              <p>四層架構運轉,科技工具賦能,未來法規調適快</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>長期競爭優勢</h4>
              <p>在全球市場建立不可仿製的護城河(產權 = 核心資產)</p>
            </div>
          </div>
          <p class="insight"><strong>核心洞察</strong>: 法規保護不是成本,而是<strong>資產增值的基礎建設</strong>。正如房地產需要清晰的產權證書,葡萄酒品牌需要多層法律防護才能實現溢價與長期價值。</p>
        </div>

        <div class="key-insights">
          <h3>💎 三個關鍵洞察</h3>
          
          <div class="insight-card">
            <h4>1. 法規保護 = 品牌資產的地基,不是成本中心</h4>
            <p><strong>常見誤區</strong>: 認為法規合規是「必要的惡」,只會增加成本、限制創新。</p>
            <p><strong>實際情況</strong>: </p>
            <ul>
              <li>AOC 認證帶來的溢價(2-10 倍)遠超合規成本(通常 &lt;1% 營收)</li>
              <li>法律防護網阻止仿冒,保護市場秩序,使品牌資產可持續積累</li>
              <li>就像房產需要產權證書才能交易與增值,葡萄酒品牌需要法規保護才能建立長期價值</li>
            </ul>
            <p><strong>實戰應用</strong>: 將法規視為<strong>戰略投資</strong>,而非合規成本。在 50+ 關鍵市場註冊 GI,建立海關備案,長期 ROI 可達 <strong>15:1</strong>(每投入 1 萬歐元合規,可減少 15 萬歐元仿冒損失)。</p>
          </div>

          <div class="insight-card">
            <h4>2. 侵權防護是進攻,不是防守</h4>
            <p><strong>常見誤區</strong>: 等到仿冒氾濫才被動反應,或認為「法律訴訟太貴不值得」。</p>
            <p><strong>實際情況</strong>: </p>
            <ul>
              <li>主動監測(AI 工具、海關備案)成本遠低於事後訴訟(預防成本 1:10 事後成本)</li>
              <li>一次成功的刑事案例可嚇阻整個行業(香檳協會一案讓美國假香檳市場萎縮 80%)</li>
              <li>侵權防護是市場拓展的前哨站:進入新市場前先建立法律防護,而非等問題發生</li>
            </ul>
            <p><strong>實戰應用</strong>: 採用<strong>「三圈防禦」策略</strong>: 內圈(產區內合規監管)、中圈(主要市場海關備案)、外圈(全球 AI 監測 + 快速反應小組)。預算分配: 70% 預防監測、30% 法律行動。</p>
          </div>

          <div class="insight-card">
            <h4>3. 未來法規是機會,不是威脅</h4>
            <p><strong>常見誤區</strong>: 抗拒新法規(綠色新政、e-Label),認為增加成本、破壞傳統。</p>
            <p><strong>實際情況</strong>: </p>
            <ul>
              <li>提前合規的酒莊獲得<strong>先行者優勢</strong>:有機認證酒莊溢價+15%,e-Label 降低印刷成本 30%</li>
              <li>氣候調適品種試驗是未來 10 年的生存關鍵,早期參與者可影響政策走向</li>
              <li>永續認證(HVE、B Corp)不僅滿足法規,更是吸引年輕消費者的品牌故事</li>
            </ul>
            <p><strong>實戰應用</strong>: 建立<strong>「法規雷達」系統</strong>: 訂閱歐盟公報、INAO 通訊、OIV 報告,每季度評估新法規影響,提前 1-2 年佈局(如 2025 年即開始準備 2030 綠色新政)。參與產業協會與 INAO 諮詢會議,從被動遵循轉為主動影響政策。</p>
          </div>
        </div>

        <div class="actionable-framework">
          <h3>⚡ 實戰行動框架:建立法規保護體系的 4 步驟</h3>
          
          <div class="action-step">
            <h4>Step 1: 盤點現狀 (1 個月)</h4>
            <ul>
              <li><strong>法律防護層</strong>: 檢查 PDO 註冊狀態、已備案的市場(目標:前 10 大市場全覆蓋)</li>
              <li><strong>合規狀態層</strong>: 審查生產規範遵循度、標示合規度(各市場法規差異)</li>
              <li><strong>侵權風險層</strong>: 市場巡查發現的仿冒案件、域名搶註、電商假貨</li>
              <li><strong>工具</strong>: 合規檢查清單、風險評估矩陣(參考第四章)</li>
            </ul>
          </div>

          <div class="action-step">
            <h4>Step 2: 優先緩解高風險 (3 個月)</h4>
            <ul>
              <li><strong>極高優先級</strong>: 產量超標 → GPS 地塊監測系統;仿冒侵權 → 海關備案 + AI 監測</li>
              <li><strong>高優先級</strong>: 標示錯誤 → 雙重審核流程;環境違規 → 第三方認證(HVE)</li>
              <li><strong>中優先級</strong>: 數位隱私 → 指派 DPO、合規工具(GDPR/CCPA)</li>
              <li><strong>預算</strong>: 高風險項目佔合規預算 60-70%</li>
            </ul>
          </div>

          <div class="action-step">
            <h4>Step 3: 建立四層合規架構 (6 個月)</h4>
            <ul>
              <li><strong>戰略層</strong>: 管理層設立年度合規目標(如新增 5 個市場 GI 註冊)</li>
              <li><strong>管理層</strong>: 指派合規經理,季度內部培訓 + 稽核計畫</li>
              <li><strong>執行層</strong>: 酒窖、品管、行銷建立日常遵循 SOP,記錄數位化</li>
              <li><strong>監督層</strong>: 年度第三方審計,缺失改善追蹤(90 天內閉環)</li>
              <li><strong>科技賦能</strong>: 上線合規儀表板(產量、標示、審計狀態視覺化)</li>
            </ul>
          </div>

          <div class="action-step">
            <h4>Step 4: 前瞻佈局未來法規 (持續)</h4>
            <ul>
              <li><strong>法規雷達</strong>: 訂閱歐盟公報、INAO 通訊、OIV 報告,AI 自動提示</li>
              <li><strong>提前試點</strong>: e-Label QR Code(2025)、氣候調適品種試驗(5% 試驗田)</li>
              <li><strong>政策參與</strong>: 加入產業協會、參與 INAO 諮詢會議,影響政策走向</li>
              <li><strong>永續認證</strong>: HVE、B Corp、ISO 14001,將合規轉化為品牌故事</li>
            </ul>
          </div>
        </div>

        <div class="final-reflection">
          <h3>🎓 最終反思:法規保護的終極目標</h3>
          <p>原產地保護法規的本質,是確保<strong>風土與傳統能夠轉化為市場價值</strong>,並在全球化競爭中持續積累品牌資產。</p>
          <p>就像房地產需要清晰的產權證書、完善的法律保護、持續的維護管理,才能實現長期增值;葡萄酒品牌也需要多層法律防護網(PDO + 國際協定 + 海關備案)、嚴格的合規管理(四層架構)、前瞻的趨勢佈局(綠色新政、氣候調適),才能在全球市場建立不可仿製的競爭優勢。</p>
          <p><strong>記住</strong>: 法規保護不是限制,而是<strong>讓優質產品獲得應有回報的基礎建設</strong>。提前佈局、主動維權、積極參與政策制定的酒莊,將在未來 10 年的全球競爭中脫穎而出。</p>
        </div>

        <div class="next-steps">
          <h3>📚 延伸學習</h3>
          <ul>
            <li><strong>L4-4 成本結構與投報</strong>: 理解合規成本如何納入財務模型,計算法規保護的 ROI</li>
            <li><strong>L4-5 品牌策略與國際市場</strong>: 將法規保護轉化為品牌資產,提升品牌溢價</li>
            <li><strong>L4-7 國際市場拓展策略</strong>: 進入新市場前如何提前建立法律防護網</li>
            <li><strong>外部資源</strong>: INAO 官網(法規更新)、WIPO 里斯本系統(國際註冊)、歐盟 eAmbrosia 資料庫(已註冊 GI 查詢)</li>
          </ul>
        </div>
      </div>
    `
  },
  quiz: {
    title: '課後測驗',
    questions: [
      {
        id: 1,
        question: 'PDO (AOP) 與 PGI (IGP) 的核心差異在於?',
        options: ['PDO 要求全生產環節在產區內,PGI 僅要求至少一環節', 'PDO 只適用葡萄酒,PGI 適用所有農產品', 'PDO 無需歐盟註冊,PGI 需要'],
        correct: 0,
        explanation: 'PDO 要求生產、加工、製備全程於特定地區,保護更嚴格;PGI 允許部分環節在外。'
      },
      {
        id: 2,
        question: '若發現海外市場有仿冒波爾多 AOC 產品,最快速的救濟途徑是?',
        options: ['直接提起民事訴訟索賠', '向當地海關提交 GI 備案並請求扣押', '發起刑事告訴'],
        correct: 1,
        explanation: '海關備案後可主動扣押侵權商品,成本低且速度快,是預防性最佳選擇。'
      },
      {
        id: 3,
        question: '面對氣候變遷,INAO 目前對 AOC 品種清單的態度是?',
        options: ['完全禁止任何調整', '允許小比例試驗田引入耐熱品種,並追蹤數據', '全面開放所有國際品種'],
        correct: 1,
        explanation: 'INAO 在維護風土特性前提下,允許試驗性調適,平衡傳統與氣候挑戰。'
      }
    {
        id: 4,
        question: '酒莊推出的新款混釀含有未獲 AOC 核准的品種 8%，若申請 AOC 認證，最可能的結果是？',
        options: [
        '可申請 AOC，超標比例可豁免',
        '無法取得 AOC，產品需降級為 IGP 或 Vin de France',
        '向 INAO 提交科學報告即可獲核准'
        ],
        correct: 1,
        explanation: 'AOC 規定對許可品種、混釀比例及產區均有嚴格要求，使用未核准品種即使比例小，仍會導致申請失敗並降級。'
      },
      {
        id: 5,
        question: '酒莊建立內部合規管理體系時，業界最佳實踐的稽核頻率設計為何？',
        options: [
        '每 5 年一次深度外部稽核即可',
        '每年一次自稽加三年一次外部認證審查',
        '僅在法規更新時進行稽核'
        ],
        correct: 1,
        explanation: '年度自稽能即時發現合規缺口，三年外部認證提供獨立驗證，兩者結合是 ISO 19600 及 AOC 合規管理體系的標準模式。'
      },
    ],
    passingScore: 60,
    timeLimit: 180
  }
})

export default l46Content
