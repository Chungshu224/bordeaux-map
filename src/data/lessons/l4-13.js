import { makeL4Lesson } from './l4-shared.js'

export const l413Content = makeL4Lesson({
  cover: {
    title: '組織領導與家族酒莊治理',
    subtitle: 'Level 4 - 課程 13',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    icon: '👨‍👩‍👧‍👦'
  },
  intro: {
    content: '從三環模型到董事會設計，深度解析家族酒莊的治理架構、接班規劃、人才管理與代際傳承，以波爾多名莊案例建立系統化的家族企業領導力框架。',
    duration: '65分鐘'
  },
  objectives: [
    { id: 1, text: '掌握家族企業三環模型與治理架構', icon: '⚙️' },
    { id: 2, text: '設計所有權保護與外部資本整合策略', icon: '🏛️' },
    { id: 3, text: '建立專業化人才管理與薪酬體系', icon: '👥' },
    { id: 4, text: '制定系統化接班計畫與代際傳承路徑', icon: '🌿' },
    { id: 5, text: '分析波爾多名莊治理演變的關鍵決策', icon: '🔍' }
  ],
  chapters: [
    {
      title: '家族企業治理基礎',
      nav: '治理基礎',
      icon: '⚙️',
      highlightDelayStep: '0.06s',
      html: `
        <div class="chapter-content">
          <h3>為何家族酒莊需要正式治理？</h3>
          <p>全球約 <strong>70%</strong> 的頂級酒莊仍由家族持有或主導，但家族企業的平均壽命僅 <strong>24 年</strong>，相當於不足兩個完整世代。波爾多的歷史告訴我們：葡萄樹能活百年，但家族治理失敗比病蟲害更具破壞力。</p>

          <h3>三環模型 (Three-Circle Model)</h3>
          <p>哈佛商學院 Gersick et al. (1997) 提出的家族企業框架，將利益關係人分為三個重疊圓圈：</p>
          <div class="three-circle-widget">
            <input type="radio" id="circle-family" name="circle" class="opt-family" checked>
            <input type="radio" id="circle-business" name="circle" class="opt-business">
            <input type="radio" id="circle-ownership" name="circle" class="opt-ownership">
            <div class="selectors">
              <label for="circle-family">👨‍👩‍👧 家族</label>
              <label for="circle-business">🏢 企業</label>
              <label for="circle-ownership">💎 所有權</label>
            </div>
            <div class="panels">
              <div class="panel" data-circle="family">
                <h4>家族圓圈 (Family Circle)</h4>
                <p><strong>範疇</strong>: 血親、姻親、家族價值觀、傳統與情感連結。</p>
                <p><strong>關鍵議題</strong>:</p>
                <ul>
                  <li>家族成員如何進入酒莊任職</li>
                  <li>配偶的角色與產權處理（離婚條款）</li>
                  <li>下一代的教育與傳承意願</li>
                  <li>家族身分認同 vs. 商業理性</li>
                </ul>
                <p><strong>治理工具</strong>: 家族憲章 (Family Charter)、家族大會 (Family Assembly)、家族委員會 (Family Council)</p>
              </div>
              <div class="panel" data-circle="business">
                <h4>企業圓圈 (Business Circle)</h4>
                <p><strong>範疇</strong>: 日常營運、釀造、行銷、財務、人力。</p>
                <p><strong>關鍵議題</strong>:</p>
                <ul>
                  <li>家族成員就業政策（能力 vs. 血緣）</li>
                  <li>專業經理人 vs. 家族管理者的邊界</li>
                  <li>利益衝突（家族合約、採購）</li>
                  <li>績效評估與薪酬公平性</li>
                </ul>
                <p><strong>治理工具</strong>: 職位說明書、KPI 體系、外部審計、職業規劃制度</p>
              </div>
              <div class="panel" data-circle="ownership">
                <h4>所有權圓圈 (Ownership Circle)</h4>
                <p><strong>範疇</strong>: 股權結構、分紅政策、出售/轉讓規則。</p>
                <p><strong>關鍵議題</strong>:</p>
                <ul>
                  <li>誰有資格持有股份</li>
                  <li>股份轉讓的優先購買權 (right of first refusal)</li>
                  <li>非家族持股者（外部投資人、機構）</li>
                  <li>遺產稅與股份稀釋防範</li>
                </ul>
                <p><strong>治理工具</strong>: 股東協議、SCI/GFV 結構、Pacte Dutreil、拖帶權/跟隨權</p>
              </div>
            </div>
          </div>

          <h3>七個重疊位置：利益衝突地圖</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>位置</th><th>身分描述</th><th>典型衝突點</th><th>波爾多案例</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>僅家族成員（無股份、不任職）</td><td>覺得被排除、索取分紅</td><td>Pichon 側支後代</td></tr>
              <tr><td>2</td><td>僅股東</td><td>要求短期分紅 vs. 長期投資</td><td>機構投資人持少數股</td></tr>
              <tr><td>3</td><td>僅員工</td><td>非家族員工晉升受限</td><td>專業 maître de chai</td></tr>
              <tr><td>4</td><td>家族 + 股東（不任職）</td><td>對管理決策有意見但無責任</td><td>旁支繼承人</td></tr>
              <tr><td>5</td><td>家族 + 員工（無股份）</td><td>無產權但深度介入，易感不公</td><td>家族配偶員工</td></tr>
              <tr><td>6</td><td>股東 + 員工（非家族）</td><td>商業利益 vs. 家族優先</td><td>高管持股方案</td></tr>
              <tr><td>7</td><td>家族 + 股東 + 員工（核心）</td><td>角色混淆，公私難分</td><td>接班人期間的家族子女</td></tr>
            </tbody>
          </table>

          <h3>正式治理機構架構</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>機構</th><th>職能</th><th>建議成員</th><th>開會頻率</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>家族大會</strong></td><td>所有家族成員溝通、共識建立</td><td>全體成年家族成員</td><td>每年1-2次</td></tr>
              <tr><td><strong>家族委員會</strong></td><td>代表家族利益、協調家族議題</td><td>每支系1-2代表，5-7人</td><td>每季</td></tr>
              <tr><td><strong>董事會</strong></td><td>策略監督、重大決策批准</td><td>家族+獨立董事（30-50%）</td><td>每月/每季</td></tr>
              <tr><td><strong>管理委員會</strong></td><td>日常營運決策執行</td><td>執行總監+部門主管</td><td>每週/每月</td></tr>
              <tr><td><strong>審計委員會</strong></td><td>財務監督、利益衝突審查</td><td>獨立成員為主</td><td>每季</td></tr>
            </tbody>
          </table>

          <div class="insight-box">
            <h4>💡 獨立董事的價值</h4>
            <p>研究顯示，擁有至少 <strong>一位具產業專業的外部獨立董事</strong> 的家族酒莊，在接班期間的業績下滑幅度平均减少 <strong>34%</strong>。獨立董事提供：客觀視角、外部網絡、矛盾緩衝、以及防止「群體思維」。</p>
          </div>
        </div>
      `
    },
    {
      title: '波爾多所有權架構設計',
      nav: '所有權架構',
      icon: '🏛️',
      highlightDelayStep: '0.06s',
      html: `
        <div class="chapter-content">
          <h3>法國家族酒莊的法律架構工具箱</h3>
          <p>波爾多酒莊的所有權設計通常組合多種法律實體，以達到三大目標：<strong>傳承效率</strong>（降低遺產稅）、<strong>控制穩定</strong>（防止稀釋）、<strong>融資彈性</strong>（引入外部資本）。</p>

          <table class="data-table">
            <thead>
              <tr><th>架構</th><th>全名</th><th>特點</th><th>適用場景</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>SAS</strong></td>
                <td>Société par Actions Simplifiée</td>
                <td>彈性章程設計，可設定複數投票權 (actions à vote multiple)</td>
                <td>主要運營實體，需要引入外部投資人但保留控制權</td>
              </tr>
              <tr>
                <td><strong>SCI</strong></td>
                <td>Société Civile Immobilière</td>
                <td>持有不動產（葡萄園、酒莊建築），避免直接繼承</td>
                <td>分離土地所有權與運營，降低整體估值稅基</td>
              </tr>
              <tr>
                <td><strong>GFV</strong></td>
                <td>Groupement Foncier Viticole</td>
                <td>農業用地專用集體持有，ISF/IFI 免稅優惠</td>
                <td>多個繼承人共同持有葡萄園，規避直接分割</td>
              </tr>
              <tr>
                <td><strong>SA</strong></td>
                <td>Société Anonyme</td>
                <td>上市或機構持股要求，治理標準較嚴</td>
                <td>引入大規模機構股東（私募基金、主權財富）</td>
              </tr>
              <tr>
                <td><strong>SC</strong></td>
                <td>Société Civile de Portefeuille</td>
                <td>持有其他公司股份的控股結構</td>
                <td>家族建立金字塔控股，透過少量股份控制多個資產</td>
              </tr>
            </tbody>
          </table>

          <h3>Pacte Dutreil：法國傳承稅的護盾</h3>
          <div class="insight-box">
            <p><strong>核心原理</strong>: 家族成員集體簽署協議，承諾在一定期間（通常6年）維持持股並參與管理，換取 <strong>75% 的遺產稅基減免</strong>。</p>
            <p><strong>計算示例</strong>: 酒莊估值 €10M，無 Pacte 時課稅基礎 €10M（最高邊際稅率45%，稅額可達 €4.5M）；有 Pacte 時課稅基礎降至 €2.5M（節稅可達 €70%+）。</p>
            <p><strong>條件</strong>: 集體承諾持股 ≥2年 + 個人承諾持股 ≥4年 + 管理職責要求。</p>
          </div>

          <h3>外部資本類型與治理影響對比</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>外部資本類型</th><th>典型例子</th><th>通常持股%</th><th>治理要求</th><th>退出時間軸</th><th>家族控制度</th></tr>
            </thead>
            <tbody>
              <tr><td>奢侈品集團</td><td>LVMH, Kering</td><td>50-100%</td><td>品牌整合，報告嚴格</td><td>永久</td><td>低→中</td></tr>
              <tr><td>保險/金融集團</td><td>AXA, Crédit Agricole</td><td>30-70%</td><td>財務透明，分紅要求</td><td>中長期</td><td>中</td></tr>
              <tr><td>私募股權</td><td>L Catterton, 中東基金</td><td>30-60%</td><td>EBITDA 目標，退出計畫</td><td>5-7年</td><td>中</td></tr>
              <tr><td>策略投資人</td><td>其他酒莊家族</td><td>10-40%</td><td>協同效益，品牌保護</td><td>長期</td><td>中高</td></tr>
              <tr><td>家族辦公室</td><td>超高凈值家族</td><td>10-30%</td><td>低干預，長期收益</td><td>長期</td><td>高</td></tr>
              <tr><td>員工持股 (BSPCE)</td><td>關鍵高管</td><td>1-5%</td><td>激勵，無重大治理影響</td><td>流動性事件</td><td>最高</td></tr>
            </tbody>
          </table>

          <h3>保護家族控制權的結構工具</h3>
          <ul>
            <li><strong>複數投票權 (Multiple Voting Rights)</strong>: SAS 章程設定家族股份享有 2-10倍投票權，適合引入財務投資人時使用。</li>
            <li><strong>優先購買權 (Right of First Refusal)</strong>: 任何股東欲轉讓股份前，須先給予其他家族成員同等條件優先購買。</li>
            <li><strong>鎖定條款 (Lock-up Clauses)</strong>: 限制股份轉讓的最短持有期，防止外部股東短期套利。</li>
            <li><strong>拖帶權 (Drag-Along) vs. 跟隨權 (Tag-Along)</strong>: 控股股東出售時可要求少數股東跟隨；少數股東也有權在同等條件下跟隨出售。</li>
            <li><strong>審批委員會</strong>: 設立股東准入機制，新股東需經現有股東批准（適合保密性要求高的名莊）。</li>
          </ul>

          <div class="insight-box warning">
            <h4>⚠️ 典型失誤：平均分配的陷阱</h4>
            <p>許多家族因「公平原則」將酒莊股份平均分給所有子女，最終導致無法達成決策共識。建議區分「所有權（分配回報）」與「控制權（決策）」，可透過複數投票股、家族信託、或制定明確的多數決規則來解決。</p>
          </div>
        </div>
      `
    },
    {
      title: '組織架構設計與人才管理',
      nav: '組織與人才',
      icon: '👥',
      highlightDelayStep: '0.06s',
      html: `
        <div class="chapter-content">
          <h3>波爾多名莊典型組織架構</h3>
          <p>波爾多頂級酒莊的組織演化通常經歷三個階段：創業期（家族全包）→ 成長期（引入專業功能）→ 成熟期（雙軌制治理）。</p>

          <div class="org-structure-widget">
            <input type="radio" id="org-small" name="org" class="opt-small" checked>
            <input type="radio" id="org-medium" name="org" class="opt-medium">
            <input type="radio" id="org-large" name="org" class="opt-large">
            <div class="selectors">
              <label for="org-small">小型莊（&lt;20人）</label>
              <label for="org-medium">中型莊（20-60人）</label>
              <label for="org-large">大型莊（60+人）</label>
            </div>
            <div class="panels">
              <div class="panel" data-org="small">
                <h4>小型家族莊：創業型架構</h4>
                <p><strong>特徵</strong>: 莊主身兼多職（CEO + 釀酒師 + 品牌大使），家族成員填補各功能。</p>
                <table class="data-table compact">
                  <thead><tr><th>職位</th><th>通常由誰擔任</th><th>主要職責</th></tr></thead>
                  <tbody>
                    <tr><td>莊主 (Propriétaire)</td><td>家族第一代/核心成員</td><td>策略、對外、最終決策</td></tr>
                    <tr><td>釀酒師 (Œnologue)</td><td>家族成員或外聘兼任</td><td>釀造技術、品質決策</td></tr>
                    <tr><td>行政 (Administration)</td><td>家族配偶</td><td>會計、法規、客戶服務</td></tr>
                    <tr><td>葡萄園管理 (Chef de Culture)</td><td>長期員工或家族</td><td>農事規劃、採收調度</td></tr>
                  </tbody>
                </table>
                <p class="note">⚡ 風險: 過度集中、接班斷層、關鍵人依賴風險高</p>
              </div>
              <div class="panel" data-org="medium">
                <h4>中型莊：功能分工架構</h4>
                <p><strong>特徵</strong>: 家族保留策略與所有權，引入專業功能主管（酒莊長、行銷總監、財務長）。</p>
                <table class="data-table compact">
                  <thead><tr><th>層級</th><th>職位</th><th>家族/外聘比例</th></tr></thead>
                  <tbody>
                    <tr><td>治理層</td><td>董事長、董事</td><td>家族主導</td></tr>
                    <tr><td>管理層</td><td>總監 (Directeur Général)</td><td>家族或外聘</td></tr>
                    <tr><td>執行層</td><td>Maître de Chai、行銷總監、財務長</td><td>多為外聘專業人才</td></tr>
                    <tr><td>操作層</td><td>釀造員工、葡萄園工人、導覽員</td><td>正職+季節工</td></tr>
                  </tbody>
                </table>
                <p class="note">✅ 此階段常見：引入釀酒顧問（如 Denis Dubourdieu、Michel Rolland 等）提升品質</p>
              </div>
              <div class="panel" data-org="large">
                <h4>大型莊/酒莊集團：雙軌制架構</h4>
                <p><strong>特徵</strong>: 家族持有控股地位但全面引入職業化管理，設立家族委員會與董事會雙軌治理。</p>
                <table class="data-table compact">
                  <thead><tr><th>架構</th><th>家族委員會</th><th>董事會</th><th>管理委員會</th></tr></thead>
                  <tbody>
                    <tr><td>成員</td><td>家族代表</td><td>家族董事+獨立董事</td><td>職業高管</td></tr>
                    <tr><td>決策範疇</td><td>家族憲章、接班、重大轉讓</td><td>策略批准、風險監督</td><td>日常營運、預算執行</td></tr>
                    <tr><td>開會</td><td>每季</td><td>每月</td><td>每週</td></tr>
                  </tbody>
                </table>
                <p class="note">🏆 例: Mouton-Rothschild, Haut-Brion(Dillon 家族), Cheval Blanc(LVMH 後)</p>
              </div>
            </div>
          </div>

          <h3>家族成員就業政策設計</h3>
          <p>最成功的家族酒莊通常建立「能力優先，家族支持」的就業政策：</p>
          <table class="data-table compact">
            <thead>
              <tr><th>政策元素</th><th>最佳實踐</th><th>常見錯誤</th></tr>
            </thead>
            <tbody>
              <tr><td>任職資格</td><td>要求相關學位（oenologie、農學、工商）+ 外部3-5年工作經驗</td><td>直接進入接班位置，無外部歷練</td></tr>
              <tr><td>薪酬</td><td>參照市場行情定薪，與非家族員工同等職位相當</td><td>給予高於市場工資，引發員工不滿</td></tr>
              <tr><td>績效評估</td><td>由獨立董事或外部顧問進行年度評估</td><td>家長自評，無問責機制</td></tr>
              <tr><td>晉升路徑</td><td>明確階段里程碑（如：葡萄園主任→技術總監→COO→CEO）</td><td>模糊的「終有一天會接班」</td></tr>
              <tr><td>退出機制</td><td>設定3年試用期，雙向評估，不適任者保留股東身分</td><td>無退出路徑導致雙方長期困境</td></tr>
            </tbody>
          </table>

          <h3>非家族關鍵人才的激勵策略</h3>
          <p>頂級 Maître de Chai 或 Directeur 若離職，可帶走知識、聲譽甚至客戶關係。以下工具可留住關鍵人才：</p>
          <ul>
            <li><strong>BSPCE (Bons de Souscription de Parts de Créateur d'Entreprise)</strong>: 股票期權計畫，給予非家族高管潛在股權收益，通常持股 1-5%。</li>
            <li><strong>業績獎金 (Intéressement/Participation)</strong>: 與酒莊銷售或利潤掛鉤的法定年度獎金，增強共同體感。</li>
            <li><strong>知識傳承計畫</strong>: 設計每位關鍵職位的「影子繼任者」，系統性知識文件化，降低人才流失風險。</li>
            <li><strong>職涯發展承諾</strong>: 國際訪問交流、頂級品酒課程（WSET D、MW）、行業峰會的費用支持，吸引頂尖人才。</li>
          </ul>

          <div class="insight-box">
            <h4>🔑 Maître de Chai 的角色演化</h4>
            <p>歷史上 Maître de Chai 是最核心的技術職位。現代波爾多頂莊中，此角色已從「傳統技藝保管人」演化為「技術創新橋樑」，需兼具傳統知識與精準農業/現代數據分析能力。招募與留任此類複合型人才是當今治理的核心挑戰之一。</p>
          </div>
        </div>
      `
    },
    {
      title: '接班計畫與代際傳承',
      nav: '接班傳承',
      icon: '🌿',
      highlightDelayStep: '0.06s',
      html: `
        <div class="chapter-content">
          <h3>家族酒莊的「三代魔咒」</h3>
          <p>全球家族企業研究顯示：<strong>第一代創業，第二代守成，第三代揮霍</strong> — 這一模式在波爾多並非神話，而是可量化的統計現實。約 <strong>30%</strong> 的家族酒莊在第三代接班後的十年內改變所有權。</p>
          <p><strong>失敗的根本原因</strong>: 財富稀釋（繼承人數增加）、技能傳承中斷、繼承衝突（情感 vs. 商業）、缺乏正式治理架構。</p>

          <h3>接班時間軸：10年規劃框架</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>階段</th><th>時間節點</th><th>關鍵活動</th><th>成功指標</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>種子期</strong></td>
                <td>接班人 10-18 歲</td>
                <td>沉浸式接觸酒莊文化、葡萄採收參與、業餘品酒教育</td>
                <td>建立熱情與基礎認識，不強迫義務感</td>
              </tr>
              <tr>
                <td><strong>教育期</strong></td>
                <td>18-25 歲</td>
                <td>相關學歷（農學/oenologie/商學）、WSET/MW 認證、海外學習</td>
                <td>具備技術與商業雙軌能力</td>
              </tr>
              <tr>
                <td><strong>外部歷練</strong></td>
                <td>25-30 歲</td>
                <td>在其他頂級酒莊、顧問公司或相關產業工作 3-5 年</td>
                <td>建立獨立視角，帶回新知識與網絡</td>
              </tr>
              <tr>
                <td><strong>見習期</strong></td>
                <td>30-35 歲</td>
                <td>回莊擔任非核心職位（如銷售、葡萄園）、參與管委會</td>
                <td>獲得內部認可，學習組織動態</td>
              </tr>
              <tr>
                <td><strong>過渡期</strong></td>
                <td>35-40 歲</td>
                <td>逐步移交部門責任、前任者轉為顧問或董事長</td>
                <td>外部stakeholder（酒商、媒體）接受新領導人</td>
              </tr>
              <tr>
                <td><strong>確立期</strong></td>
                <td>40 歲以後</td>
                <td>完全掌管，前任退至監督角色</td>
                <td>首個完整釀酒年份以接班人名義登場</td>
              </tr>
            </tbody>
          </table>

          <h3>前任傳承者的角色轉變</h3>
          <p>接班失敗最常見的原因之一是「前任不放手」。成功的傳承需要明確的角色轉移協議：</p>
          <div class="transition-widget">
            <input type="radio" id="phase-before" name="transition" class="opt-before" checked>
            <input type="radio" id="phase-during" name="transition" class="opt-during">
            <input type="radio" id="phase-after" name="transition" class="opt-after">
            <div class="selectors">
              <label for="phase-before">傳承前 (T-3)</label>
              <label for="phase-during">傳承期 (T±1)</label>
              <label for="phase-after">傳承後 (T+3)</label>
            </div>
            <div class="panels">
              <div class="panel" data-phase="before">
                <h4>傳承前期：授能 (Empowering)</h4>
                <ul>
                  <li>有意識地讓接班人主導部分重要會議</li>
                  <li>將自己的外部關係網絡（酒商、評論家、機構）主動介紹給接班人</li>
                  <li>開始退出日常決策，轉為諮詢角色</li>
                  <li>公開表態支持接班人的決策，即使有不同意見也私下溝通</li>
                </ul>
              </div>
              <div class="panel" data-phase="during">
                <h4>傳承期：雙重領導的危機</h4>
                <ul>
                  <li><strong>雙頭馬車</strong>: 員工不確定該聽誰的，需要明確的決策樹</li>
                  <li><strong>媒體溝通</strong>: 由接班人主導對外發言，前任不干預</li>
                  <li><strong>緊急事態</strong>: 設定明確的前任可介入情境（財務危機、法律糾紛）</li>
                  <li><strong>治理文件化</strong>: 此時完成家族憲章、股東協議的更新</li>
                </ul>
              </div>
              <div class="panel" data-phase="after">
                <h4>傳承後期：顧問與象徵</h4>
                <ul>
                  <li>前任轉為非執行董事長或榮譽顧問</li>
                  <li>保留歷史知識傳承功能（年份記憶、老客戶關係）</li>
                  <li>明確「不干預日常」的契約或承諾</li>
                  <li>接班人需要3-5年建立個人聲望，前任應主動促成</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>多繼承人情境的衝突管理</h3>
          <p>當有多位繼承人同樣具備資格時，家族酒莊必須建立明確的競爭規則：</p>
          <table class="data-table compact">
            <thead>
              <tr><th>模式</th><th>機制</th><th>優點</th><th>缺點</th><th>波爾多案例</th></tr>
            </thead>
            <tbody>
              <tr><td>長子繼承</td><td>傳統按出生順序</td><td>清晰，衝突少</td><td>不保障最佳人才</td><td>傳統農莊</td></tr>
              <tr><td>能力競爭</td><td>外部評估委員會評選</td><td>最優秀者接班</td><td>競爭傷感情</td><td>部分現代莊</td></tr>
              <tr><td>輪換 CEO</td><td>繼承人輪流擔任領導</td><td>公平感</td><td>策略不連貫</td><td>少見</td></tr>
              <tr><td>分業負責</td><td>不同業務線分管</td><td>各展所長</td><td>需協調機制</td><td>集團化後常見</td></tr>
              <tr><td>買斷退出</td><td>一人取得控制，付費給其他繼承人</td><td>清晰所有權</td><td>資金壓力大</td><td>Pichon 分家</td></tr>
            </tbody>
          </table>

          <div class="insight-box">
            <h4>🌿 家族憲章 (Charte Familiale) 的核心條款</h4>
            <p>家族憲章是家族與商業之間的基本法。建議涵蓋：<strong>家族使命陳述</strong>（為何持有酒莊）、<strong>就業政策</strong>（進入資格、薪酬標準）、<strong>股份政策</strong>（轉讓規則、估值方法）、<strong>分紅政策</strong>（比率、留存再投資比例）、<strong>決策程序</strong>（共識 vs. 多數決規則）、<strong>衝突解決機制</strong>（調解流程、最終仲裁人）。</p>
          </div>
        </div>
      `
    },
    {
      title: '波爾多名莊治理案例研究',
      nav: '名莊案例',
      icon: '🔍',
      highlightDelayStep: '0.06s',
      html: `
        <div class="chapter-content">
          <h3>四大治理演化模式</h3>
          <p>波爾多歷史提供了極豐富的家族治理案例庫，從純粹的家族掌控到奢侈品集團收購，呈現出多元的演化路徑。</p>

          <div class="chateau-case-widget">
            <input type="radio" id="case-mouton" name="chateau" class="opt-mouton" checked>
            <input type="radio" id="case-latour" name="chateau" class="opt-latour">
            <input type="radio" id="case-angelus" name="chateau" class="opt-angelus">
            <input type="radio" id="case-pichon" name="chateau" class="opt-pichon">
            <div class="selectors">
              <label for="case-mouton">Mouton-Rothschild</label>
              <label for="case-latour">Latour</label>
              <label for="case-angelus">Angélus</label>
              <label for="case-pichon">Pichon 家族</label>
            </div>
            <div class="panels">
              <div class="panel" data-case="mouton">
                <h4>Mouton-Rothschild：家族品牌的制度化</h4>
                <p><strong>治理模式</strong>: Rothschild 家族持有並主導，透過 Baron Philippe de Rothschild SA 公司化管理。</p>
                <table class="data-table compact">
                  <thead><tr><th>時期</th><th>關鍵人物</th><th>治理重點</th></tr></thead>
                  <tbody>
                    <tr><td>1922-1988</td><td>Philippe de Rothschild</td><td>從叔父手中接管，創立藝術酒標傳統，1973年晉升一級莊</td></tr>
                    <tr><td>1988-2014</td><td>Philippine de Rothschild</td><td>繼承父業，發展全球化（智利 Almaviva 合資、美國 Opus One）</td></tr>
                    <tr><td>2014-</td><td>Julien de Beaumarchais</td><td>第三代，強化品牌國際化，引入數位化戰略</td></tr>
                  </tbody>
                </table>
                <p><strong>治理亮點</strong>:</p>
                <ul>
                  <li>公司化結構（SA）使管理與所有權分離，利用專業 CEO 管理日常</li>
                  <li>接班人均有外部歷練（Philippine 在電影/藝術界），帶來跨界視野</li>
                  <li>家族名義強烈，但現代化行銷組織（超過 200 名員工）</li>
                  <li>挑戰: 繼承人無子嗣（Philippine），第三代為女性（Julien 為其女），血緣傳承延伸性考驗</li>
                </ul>
              </div>
              <div class="panel" data-case="latour">
                <h4>Château Latour：主動尋求機構控股</h4>
                <p><strong>治理模式</strong>: 1963 年英國 Pearson 集團收購→ 1993 年 Pinault（Kering 創辦人）收購 → 至今 François-Henri Pinault 間接控股。</p>
                <table class="data-table compact">
                  <thead><tr><th>時期</th><th>所有人</th><th>治理變化</th></tr></thead>
                  <tbody>
                    <tr><td>1917-1963</td><td>Beaumont 家族</td><td>傳統家族管理，資金有限</td></tr>
                    <tr><td>1963-1993</td><td>Pearson 集團（英）</td><td>首次機構化，引入現代管理但缺乏情感連結</td></tr>
                    <tr><td>1993-今</td><td>Pinault 家族/Artémis</td><td>高端文化資本視角（同時持有 Christie's），品質極致化投資</td></tr>
                  </tbody>
                </table>
                <p><strong>2012 年退出 En Primeur 的決策分析</strong>:</p>
                <ul>
                  <li>Latour 是首個主要名莊宣布退出年份期酒系統（2012年宣布對 2011 年份起執行）</li>
                  <li>策略理由: 保留庫存至適飲期再直接銷售，消除中間商層級，提升價格控制力</li>
                  <li>治理啟示: 強大的股東資本後盾（Pinault 集團）使此「犧牲短期現金流」決策成為可能</li>
                </ul>
              </div>
              <div class="panel" data-case="angelus">
                <h4>Château Angélus：家族品牌升級的系統工程</h4>
                <p><strong>治理模式</strong>: de Boüard de Laforest 家族持有，以強烈的家族品牌為核心推動現代化。</p>
                <table class="data-table compact">
                  <thead><tr><th>要素</th><th>內容</th></tr></thead>
                  <tbody>
                    <tr><td>所有權</td><td>de Boüard 家族全持，拒絕外部機構投資</td></tr>
                    <tr><td>接班人</td><td>Hubert de Boüard 之女 Stéphanie 培養中（已接手部分運營）</td></tr>
                    <tr><td>品牌策略</td><td>2012 年晉升 Saint-Émilion Premier Grand Cru Classé A，媒體品牌曝光策略（007 電影植入等）</td></tr>
                    <tr><td>爭議事件</td><td>2022 年主動申請退出分級評比，引發治理透明度討論</td></tr>
                  </tbody>
                </table>
                <p><strong>治理啟示</strong>: 家族身分與品牌可成為商業資產，但需在「品牌個人化」與「機構可信度」間保持平衡。</p>
              </div>
              <div class="panel" data-case="pichon">
                <h4>Pichon 家族：分家的代價與機會</h4>
                <p><strong>歷史背景</strong>: 1850 年 Raoul de Pichon-Longueville 去世，遺產拆分為兩部分，催生今日的 Pichon Baron 與 Pichon Comtesse。</p>
                <table class="data-table compact">
                  <thead><tr><th>酒莊</th><th>現任所有人</th><th>治理特色</th></tr></thead>
                  <tbody>
                    <tr><td>Pichon Baron</td><td>AXA Millésimes（保險集團）</td><td>專業機構管理，財務穩健，品質穩定</td></tr>
                    <tr><td>Pichon Comtesse</td><td>Roederer 集團（香檳）</td><td>奢侈品集團策略佈局，品質極致導向</td></tr>
                  </tbody>
                </table>
                <p><strong>治理啟示</strong>:</p>
                <ul>
                  <li>繼承分割曾是「家族的失敗」，但分離後兩莊各自找到優秀機構東主</li>
                  <li>機構所有者在追求品質投資上反而不受家族短期財務壓力限制</li>
                  <li>說明了「家族控制 ≠ 最佳結果」的反直覺現象</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>治理模式的財務影響：量化比較</h3>
          <table class="data-table">
            <thead>
              <tr><th>所有權模式</th><th>品質投資能力</th><th>長期一致性</th><th>創新速度</th><th>接班穩定性</th><th>估值溢價</th></tr>
            </thead>
            <tbody>
              <tr><td>純家族（有強治理）</td><td>中高</td><td>高</td><td>中</td><td>視規劃而定</td><td>品牌溢價高</td></tr>
              <tr><td>家族 + 機構少數股</td><td>高</td><td>中高</td><td>中高</td><td>高（有接班資金）</td><td>中高</td></tr>
              <tr><td>奢侈品集團多數股</td><td>極高</td><td>高</td><td>高（品牌整合）</td><td>高（機構保障）</td><td>最高（退出流動性）</td></tr>
              <tr><td>財務投資人（PE）多數股</td><td>中（看退出節點）</td><td>低（5-7年退出）</td><td>高（效率驅動）</td><td>不確定</td><td>短期高，長期?</td></tr>
              <tr><td>農業保險集團</td><td>中高</td><td>高</td><td>中</td><td>高</td><td>中</td></tr>
            </tbody>
          </table>

          <div class="insight-box">
            <h4>🔑 家族治理的核心矛盾</h4>
            <p>家族酒莊面臨根本性矛盾：家族的情感連結是品牌差異化的核心，但家族的情感決策又是治理失敗的最大風險。最成功的模式是建立「情感認同的家族身分 + 理性制度化的治理機制」，讓兩者相輔相成而非相互衝突。</p>
          </div>
        </div>
      `
    }
  ],
  summary: {
    title: '組織領導與家族酒莊治理：核心框架總結',
    html: `
      <div class="summary-content">
        <h3>五大支柱治理體系</h3>
        <table class="data-table">
          <thead>
            <tr><th>支柱</th><th>核心工具</th><th>評估指標</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>治理架構</strong></td><td>三環模型、家族委員會、獨立董事</td><td>決策效率、衝突頻率</td></tr>
            <tr><td><strong>所有權設計</strong></td><td>SAS/SCI/GFV、Pacte Dutreil、複數投票權</td><td>稅負優化、控制穩定性</td></tr>
            <tr><td><strong>組織人才</strong></td><td>就業政策、BSPCE、績效評估體系</td><td>關鍵人才留任率、家族成員滿意度</td></tr>
            <tr><td><strong>接班傳承</strong></td><td>10年接班框架、家族憲章、角色轉移協議</td><td>傳承成功率、業績連續性</td></tr>
            <tr><td><strong>外部資本</strong></td><td>投資人選擇矩陣、股東協議、退出條款</td><td>資本效率、控制保護度</td></tr>
          </tbody>
        </table>

        <h3>關鍵決策矩陣</h3>
        <ul>
          <li><strong>何時引入獨立董事？</strong> 當家族成員超過 3 人參與管理時，立即引入至少 1-2 位外部獨立董事。</li>
          <li><strong>何時制定家族憲章？</strong> 不是「發生衝突後」，而是「第一位繼承人成年前」完成。</li>
          <li><strong>何時考慮外部資本？</strong> 當品質投資需求超過家族現金流能力，且治理架構已成熟可承載外部股東時。</li>
          <li><strong>何時啟動接班計畫？</strong> 當現任領導人距退休還有 <strong>10年</strong> 時，不是 5 年，10 年。</li>
        </ul>
      </div>
    `
  },
  quiz: {
    title: '組織領導與治理綜合測驗',
    passingScore: 70,
    timeLimit: 240,
    questions: [
      {
        id: 1,
        text: '家族企業三環模型中，同時屬於「家族 + 所有權 + 企業」三重身分的人，位於哪個位置？',
        options: [
          '位置 4（家族+所有權）',
          '位置 6（所有權+企業）',
          '位置 7（三環交集核心）',
          '位置 5（家族+企業）'
        ],
        correct: 2,
        explanation: '位置 7 是三環的中心交集，代表同時是家族成員、股東、且在企業任職的核心人物（通常是現任領導人或主要接班人）。此位置角色混淆風險最高，治理制度最為重要。'
      },
      {
        id: 2,
        text: 'Pacte Dutreil 的主要作用是什麼？',
        options: [
          '允許家族酒莊在 Bordeaux 証交所上市',
          '提供最高 75% 的遺產稅基減免，以換取持股承諾',
          '強制外部投資者退出家族企業',
          '規定家族成員不得出售股份超過 5 年'
        ],
        correct: 1,
        explanation: 'Pacte Dutreil 是法國稅法工具，家族集體承諾維持持股並參與管理（通常 2+4 年），換取 75% 的遺產稅基減免，大幅降低跨代傳承的稅務成本。'
      },
      {
        id: 3,
        text: 'Château Latour 在 2012 年宣布退出 En Primeur 系統的主要戰略理由是？',
        options: [
          '期酒定價複雜，容易引起法律糾紛',
          '保留庫存至適飲期直銷，消除中間商層級，提升價格控制力',
          '回應環保組織對期酒系統碳排放的批評',
          'En Primeur 市場 2011 年崩盤，Latour 被迫退出'
        ],
        correct: 1,
        explanation: 'Latour 退出 En Primeur 是主動的商業策略，而非被迫決定。關鍵在於：保留庫存在適飲期直接銷售可獲更高價格，省去酒商中間差價。Pinault 集團的強大資本後盾使此犧牲短期現金流的決策得以實施。'
      },
      {
        id: 4,
        text: '在設計家族成員就業政策時，以下哪個做法被認為是最佳實踐？',
        options: [
          '家族成員薪酬應高於市場以體現地位',
          '家族成員可直接進入高層職位，無需外部工作經驗',
          '要求家族成員先有3-5年外部工作經驗再回莊，薪酬參照市場行情',
          '家族成員不應與非家族員工一起接受績效評估'
        ],
        correct: 2,
        explanation: '最佳實踐是「能力優先，家族支持」：要求相關學歷+外部工作經驗，以市場行情定薪（避免非家族員工不滿），並由獨立人士進行績效評估，確保公平性。'
      },
      {
        id: 5,
        text: '在波爾多歷史上，Pichon 家族的莊園分裂最終催生了什麼治理啟示？',
        options: [
          '家族分裂必然導致兩個酒莊品質下滑',
          '所有家族酒莊應盡早引入機構投資者',
          '家族控制並不等於最佳結果，機構所有者有時能提供更穩定的品質投資',
          '分裂是最佳的接班策略，應鼓勵家族拆分莊園'
        ],
        correct: 2,
        explanation: '1850 年 Pichon 分裂本是家族悲劇，但後來 Pichon Baron（AXA）和 Pichon Comtesse（Roederer）均找到優秀的機構東主，品質達到頂峰。這說明了「家族控制 ≠ 最佳治理」的反直覺現象，機構資本有時反而能提供更穩定的長期品質投資。'
      },
      {
        id: 6,
        text: '「家族憲章」最理想的制定時機是？',
        options: [
          '家族內部發生重大衝突後，作為和解文件',
          '家族第一位繼承人成年之前，提前建立規則',
          '引入外部投資者前，作為投資談判文件',
          '酒莊達到年營業額 €500 萬以上的規模後'
        ],
        correct: 1,
        explanation: '家族憲章最理想在「第一位繼承人成年之前」制定，而非等到問題爆發。提前建立規則（就業政策、股份政策、決策程序）比事後補救有效得多。衝突後制定的憲章往往帶有傷痕，缺乏共識基礎。'
      },
      {
        id: 7,
        text: 'GFV（Groupement Foncier Viticole）結構的主要優點是？',
        options: [
          '允許家族酒莊規避所有遺產稅，實現零稅傳承',
          '農業用地集體持有，享有 IFI 免稅優惠並避免土地直接分割',
          '強制要求所有股東必須是家族血親成員',
          '只適用於 AOC 面積超過 50 公頃的大型酒莊'
        ],
        correct: 1,
        explanation: 'GFV 是法國農業用地的集體持有架構，享有 IFI（財富稅）優惠，最重要的是可讓多位繼承人共同「持有份額」而無需實際分割土地，保持葡萄園的整合性管理，是波爾多家族傳承的重要工具。'
      },
      {
        id: 8,
        text: '以下哪項描述最準確地說明了家族酒莊獨立董事的價值？',
        options: [
          '獨立董事主要負責監督家族成員的個人財務',
          '獨立董事只在酒莊面臨破產時才需要介入',
          '具備產業專業的外部獨立董事可在接班期間減少業績下滑約34%',
          '獨立董事最大作用是協助酒莊取得銀行融資'
        ],
        correct: 2,
        explanation: '研究顯示，擁有至少一位具產業專業外部獨立董事的家族酒莊，在接班期間業績下滑幅度平均減少約 34%。獨立董事的核心價值在於：客觀視角、外部網絡、矛盾緩衝、防止群體思維，在接班過渡的脆弱期尤為關鍵。'
      }
    ]
  }
})

export default l413Content
