import { makeL4Lesson } from './l4-shared.js'

export const l47Content = makeL4Lesson({
  cover: {
    title: '風險管理與保險',
    subtitle: 'Level 4 - 課程 7',
    background: 'linear-gradient(135deg, #7c2d12 0%, #dc2626 50%, #f87171 100%)',
    icon: '🛡️'
  },
  intro: {
    content: `
      <div class="course-intro-section">
        <h2>🛡️ 課程導讀:風險管理 = 為房子買全方位保險</h2>
        
        <div class="analogy-framework">
          <h3>🏠 為什麼風險管理像為房子買保險?</h3>
          <p>想像你擁有一棟價值百萬的房子,如何確保它在各種災害中存續?</p>
          <ul>
            <li><strong>風險識別 = 房屋體檢</strong><br>找出所有可能威脅房子的風險:地震、火災、水災、竊盜、漏水。酒莊則面對霜凍、冰雹、市場波動、供應鏈中斷。</li>
            <li><strong>保險策略 = 買保險組合</strong><br>你不會只買火險而忽略地震險,酒莊也需要「霜凍險 + 財產險 + 責任險」組合,而非單一險種。</li>
            <li><strong>風險緩解 = 主動防護</strong><br>裝防盜門、灑水系統、避雷針,可降低保費並減少損失。酒莊的防霜風扇、冰雹網就是同樣邏輯。</li>
            <li><strong>危機應變 = 火災逃生計畫</strong><br>你有火災逃生圖、滅火器、緊急聯絡人。酒莊需要霜凍應變 SOP、火災撤離計畫、網路攻擊備案。</li>
            <li><strong>ESG 韌性 = 綠建築升級</strong><br>裝太陽能板、雨水回收不僅環保,還能降低能源成本與氣候風險,提升房產長期價值。</li>
          </ul>
        </div>

        <div class="course-structure">
          <h3>📖 本課程架構</h3>
          <table class="clean-table">
            <tr>
              <td><strong>第一章</strong></td>
              <td>風險識別與評估框架</td>
              <td>🔍</td>
              <td>建立氣候、市場、營運三大風險圖譜,用機率 × 影響度矩陣優先排序。</td>
            </tr>
            <tr>
              <td><strong>第二章</strong></td>
              <td>保險策略與產品選擇</td>
              <td>🔐</td>
              <td>理解八大保險產品,設計基礎/標準/全面三檔組合,優化保費與覆蓋率。</td>
            </tr>
            <tr>
              <td><strong>第三章</strong></td>
              <td>氣候風險緩解策略</td>
              <td>🌦️</td>
              <td>掌握霜凍、冰雹、乾旱的防護技術,平衡成本與有效性。</td>
            </tr>
            <tr>
              <td><strong>第四章</strong></td>
              <td>危機應變與業務連續性</td>
              <td>🚨</td>
              <td>建立 BCM 框架,制定霜凍/火災/網攻應變劇本,設定 RTO/RPO 目標。</td>
            </tr>
            <tr>
              <td><strong>第五章</strong></td>
              <td>ESG 整合與韌性建設</td>
              <td>🌍</td>
              <td>將氣候風險納入 TCFD 框架,計算永續投資 ROI,應對碳稅等新興風險。</td>
            </tr>
          </table>
        </div>

        <div class="real-world-context">
          <h3>💥 為什麼風險管理對酒莊如此重要?</h3>
          <div class="context-grid">
            <div>
              <h4>❄️ 氣候風險 = 隨時可能歸零</h4>
              <p><strong>一場霜凍損失 60% 產量 = 百萬歐元蒸發</strong><br>2021 年法國霜凍造成 €20 億損失,未投保酒莊直接破產。氣候風險不是「會不會發生」,而是「何時發生」。</p>
            </div>
            <div>
              <h4>💱 市場風險 = 利潤被匯率吃掉</h4>
              <p><strong>EUR/USD 波動 10% = 出口利潤 ±20%</strong><br>沒有匯率對沖的酒莊,即便銷量增長,利潤也可能因匯率逆轉而虧損。</p>
            </div>
            <div>
              <h4>🔥 營運風險 = 一場火災停業半年</h4>
              <p><strong>酒窖火災 = 存貨全毀 + 設備重建 + 客戶流失</strong><br>沒有營業中斷險的酒莊,不僅損失當年營收,還可能失去長期客戶關係。</p>
            </div>
            <div>
              <h4>🌱 ESG 風險 = 未來市場准入門檻</h4>
              <p><strong>2026 碳邊境稅 CBAM = 出口成本增加</strong><br>未做碳盤查與減排的酒莊,將面臨額外稅負與客戶拒絕,ESG 從加分項變成必答題。</p>
            </div>
          </div>
        </div>

        <div class="study-guide">
          <h3>💡 學習建議</h3>
          <ul>
            <li><strong>建立風險清單</strong>: 用第一章的風險圖譜對照自己酒莊,找出極高優先級項目。</li>
            <li><strong>計算保險 ROI</strong>: 保費 ÷ 預期損失,若比值 < 20% 通常值得投保。</li>
            <li><strong>選擇防護技術</strong>: 防霜風扇適用 -2~-4°C,噴灑灌溉適用 -4~-7°C,依產區氣候選擇。</li>
            <li><strong>演練應變計畫</strong>: 紙上談兵沒用,每 6 個月實際模擬一次霜凍/火災/網攻情境。</li>
            <li><strong>追蹤新興風險</strong>: 碳邊境稅 (2026)、水資源配額 (2028~2035) 需提前 2~3 年佈局。</li>
          </ul>
        </div>
      </div>
    `
  },
  objectives: [
    { id: 1, text: '識別並量化氣候、市場、營運三大風險類別', icon: '📊' },
    { id: 2, text: '設計保險組合與風險轉移策略', icon: '🔒' },
    { id: 3, text: '建立危機應變計畫與業務連續性管理', icon: '🚨' },
    { id: 4, text: '整合 ESG 與風險管理框架', icon: '🌱' }
  ],
  chapters: [
    {
      title: '第一章：風險識別與評估框架',
      nav: '風險框架',
      icon: '🔍',
      highlightDelayStep: '0.06s',
      html: `
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>🧭 概念入門:風險評估 = 為房子做全面體檢</h3>
            
            <div class="analogy-box">
              <h4>🏥 生活化比喻:房屋健康檢查報告</h4>
              <p>買房前你會請專業技師檢查:結構安全、漏水、電線、白蟻。酒莊風險評估也是同樣邏輯:</p>
              <table class="mapping-table">
                <tr>
                  <th>風險類別</th>
                  <th>房屋對應</th>
                  <th>酒莊實際風險</th>
                </tr>
                <tr>
                  <td><strong>氣候風險</strong></td>
                  <td>地震帶、颱風區、淹水區</td>
                  <td>霜凍、冰雹、乾旱、熱浪 → 產量損失 30~100%</td>
                </tr>
                <tr>
                  <td><strong>市場風險</strong></td>
                  <td>周邊房價波動、商圈沒落</td>
                  <td>價格競爭、匯率波動、消費趨勢變化 → 營收 ±15~30%</td>
                </tr>
                <tr>
                  <td><strong>營運風險</strong></td>
                  <td>管線老化、電路短路、鄰居糾紛</td>
                  <td>供應鏈中斷、人才流失、網路攻擊 → 營運中斷與成本增加</td>
                </tr>
              </table>
            </div>

            <div class="terminology-explained">
              <h4>📘 術語白話解釋</h4>
              <table class="definition-table">
                <tr>
                  <th>專業術語</th>
                  <th>白話解釋</th>
                  <th>實際應用</th>
                </tr>
                <tr>
                  <td><strong>預期損失 (EL)</strong></td>
                  <td>發生機率 × 平均損失金額</td>
                  <td>霜凍機率 40% × 損失 €200K = EL €80K/年,若保費 < €16K (20%) 值得投保。</td>
                </tr>
                <tr>
                  <td><strong>風險值 (VaR)</strong></td>
                  <td>95% 信賴區間下的最大損失</td>
                  <td>在最壞 5% 情境下,你最多會損失多少?用於設定保險額度上限。</td>
                </tr>
                <tr>
                  <td><strong>情境分析</strong></td>
                  <td>模擬歷史極端事件的影響</td>
                  <td>假設 2003 熱浪或 2021 霜凍再次發生,你的酒莊會損失多少?哪些防護有效?</td>
                </tr>
                <tr>
                  <td><strong>壓力測試</strong></td>
                  <td>多重風險同時發生的疊加效應</td>
                  <td>霜凍 + EUR 貶值 10% + 瓶罐短缺,三重打擊下現金流能撐多久?</td>
                </tr>
                <tr>
                  <td><strong>風險矩陣</strong></td>
                  <td>用「發生機率 × 財務影響」二維圖排序</td>
                  <td>高機率高影響 = 極高優先級(如霜凍),低機率低影響 = 可接受風險(如隕石)。</td>
                </tr>
              </table>
            </div>

            <div class="reading-guide">
              <h4>🔍 閱讀指南:如何使用本章工具</h4>
              <ul>
                <li><strong>風險圖譜表</strong>: 先掃描三大類別,找出與你產區最相關的 5~7 項風險。</li>
                <li><strong>風險評估矩陣 Widget</strong>: 點選氣候/市場/營運三個標籤,查看典型機率與影響度,對照自己酒莊。</li>
                <li><strong>量化方法清單</strong>: 用 EL 計算是否投保,用情境分析測試防護有效性,用壓力測試評估極端情境下的生存能力。</li>
                <li><strong>優先級分類</strong>: 極高優先級(霜凍、冰雹) → 立即投保 + 技術防護;中優先級(乾旱、供應鏈) → 逐步改善;低優先級 → 監控即可。</li>
              </ul>
            </div>
          </div>

          <h3>葡萄酒產業風險圖譜</h3>
          <table class="data-table">
            <thead>
              <tr><th>風險類別</th><th>子類別</th><th>典型事件</th><th>影響範圍</th><th>頻率</th></tr>
            </thead>
            <tbody>
              <tr><td rowspan="4">氣候風險</td><td>極端天氣</td><td>霜凍、冰雹、乾旱、洪水</td><td>產量 -30%~100%</td><td>中~高</td></tr>
              <tr><td>長期氣候變遷</td><td>溫度上升、降雨模式改變</td><td>品種適應性、酸度下降</td><td>持續</td></tr>
              <tr><td>病蟲害</td><td>霜黴、白粉、果蠅擴散</td><td>品質下降、產量損失</td><td>中</td></tr>
              <tr><td>火災</td><td>野火、葡萄園/酒窖火災</td><td>資產損毀、煙燻污染</td><td>低~中</td></tr>
              <tr><td rowspan="3">市場風險</td><td>價格波動</td><td>供需失衡、競爭加劇</td><td>營收 ±15~30%</td><td>中~高</td></tr>
              <tr><td>匯率風險</td><td>EUR/USD/CNY 波動</td><td>出口利潤 ±10~20%</td><td>高</td></tr>
              <tr><td>消費趨勢變化</td><td>低酒精、永續需求崛起</td><td>產品組合過時</td><td>中</td></tr>
              <tr><td rowspan="4">營運風險</td><td>供應鏈中斷</td><td>瓶罐短缺、物流延誤</td><td>交付延遲、成本上升</td><td>中</td></tr>
              <tr><td>人員流失</td><td>關鍵技術人才離職</td><td>釀造品質、創新受阻</td><td>低~中</td></tr>
              <tr><td>法規變更</td><td>標示、稅制、環境法規</td><td>合規成本增加</td><td>中</td></tr>
              <tr><td>網路安全</td><td>資料外洩、勒索軟體</td><td>營運中斷、聲譽受損</td><td>低~中</td></tr>
            </tbody>
          </table>
          <h3>風險評估矩陣</h3>
          <div class="risk-matrix-widget">
            <input type="radio" id="risk-climate" name="risk-category" class="opt-climate" checked>
            <input type="radio" id="risk-market" name="risk-category" class="opt-market">
            <input type="radio" id="risk-operation" name="risk-category" class="opt-operation">
            <div class="selectors">
              <label for="risk-climate">氣候風險</label>
              <label for="risk-market">市場風險</label>
              <label for="risk-operation">營運風險</label>
            </div>
            <div class="panels">
              <div class="panel" data-risk="climate">
                <h4>氣候風險評估</h4>
                <table class="data-table compact">
                  <thead>
                    <tr><th>事件</th><th>發生機率</th><th>財務影響</th><th>優先級</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>春季霜凍</td><td>高 (40%)</td><td>€150K~500K</td><td>極高</td></tr>
                    <tr><td>夏季冰雹</td><td>中 (15%)</td><td>€200K~800K</td><td>高</td></tr>
                    <tr><td>乾旱缺水</td><td>中 (25%)</td><td>€80K~250K</td><td>中</td></tr>
                    <tr><td>野火煙燻</td><td>低 (5%)</td><td>€50K~300K</td><td>中</td></tr>
                  </tbody>
                </table>
                <p class="note">建議：投保霜凍與冰雹險，建置灌溉系統與防煙網。</p>
              </div>
              <div class="panel" data-risk="market">
                <h4>市場風險評估</h4>
                <table class="data-table compact">
                  <thead>
                    <tr><th>事件</th><th>發生機率</th><th>財務影響</th><th>優先級</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>EUR/USD 貶值 10%</td><td>高 (35%)</td><td>-€120K 出口收益</td><td>高</td></tr>
                    <tr><td>關稅增加 25%</td><td>中 (20%)</td><td>-€200K 美國市場</td><td>高</td></tr>
                    <tr><td>消費降級趨勢</td><td>中 (30%)</td><td>-15% 高端系列</td><td>中</td></tr>
                    <tr><td>競品低價傾銷</td><td>中 (25%)</td><td>毛利壓縮 5~8%</td><td>中</td></tr>
                  </tbody>
                </table>
                <p class="note">建議：匯率對沖、多元市場佈局、價格階梯優化。</p>
              </div>
              <div class="panel" data-risk="operation">
                <h4>營運風險評估</h4>
                <table class="data-table compact">
                  <thead>
                    <tr><th>事件</th><th>發生機率</th><th>財務影響</th><th>優先級</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>瓶罐供應短缺</td><td>中 (20%)</td><td>交付延誤 2~4 週</td><td>高</td></tr>
                    <tr><td>釀酒師離職</td><td>低 (10%)</td><td>品質不穩、創新停滯</td><td>中</td></tr>
                    <tr><td>勒索軟體攻擊</td><td>低 (8%)</td><td>€50K~150K + 聲譽</td><td>中</td></tr>
                    <tr><td>環境法規變更</td><td>中 (30%)</td><td>合規成本 +€30K</td><td>低</td></tr>
                  </tbody>
                </table>
                <p class="note">建議：供應商多元化、知識管理、網路安全保險。</p>
              </div>
            </div>
          </div>
          <h3>風險量化方法</h3>
          <ul>
            <li><strong>預期損失 (EL)</strong>: 發生機率 × 平均損失金額。</li>
            <li><strong>風險值 (VaR)</strong>: 95% 信賴區間下的最大損失。</li>
            <li><strong>情境分析</strong>: 模擬極端情境 (如 2003 熱浪、2008 金融危機)。</li>
            <li><strong>壓力測試</strong>: 多重風險疊加 (霜凍 + 匯率 + 供應鏈)。</li>
          </ul>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🌪️', title: '風險圖譜', content: '氣候、市場、營運三大類別與子類別。' },
        { id: 2, icon: '📈', title: '評估矩陣', content: '機率 × 影響度，優先級分級。' },
        { id: 3, icon: '🔢', title: '量化方法', content: 'EL、VaR、情境分析與壓力測試。' }
      ]
    },
    {
      title: '第二章：保險策略與產品選擇',
      nav: '保險策略',
      icon: '🔐',
      highlightDelayStep: '0.07s',
      html: `
        <div class="chapter-content">
          <h3>葡萄酒產業保險產品圖譜</h3>
          <table class="data-table">
            <thead>
              <tr><th>保險類型</th><th>保障範圍</th><th>典型保費</th><th>自負額</th><th>適用情境</th></tr>
            </thead>
            <tbody>
              <tr><td>霜凍保險</td><td>春季霜凍造成產量損失</td><td>產值 2~4%</td><td>首 20% 損失</td><td>高風險產區必備</td></tr>
              <tr><td>冰雹保險</td><td>冰雹損壞葡萄與設施</td><td>產值 1.5~3%</td><td>首 15% 損失</td><td>歷史冰雹區</td></tr>
              <tr><td>氣候指數保險</td><td>溫度/降雨偏離觸發賠付</td><td>產值 1~2%</td><td>無 (參數型)</td><td>新型風險轉移</td></tr>
              <tr><td>財產綜合險</td><td>建築、設備、存貨火災/竊盜</td><td>資產價值 0.3~0.6%</td><td>€5K~20K</td><td>所有酒莊必備</td></tr>
              <tr><td>營業中斷險</td><td>火災/災害導致停業損失</td><td>年營收 0.5~1%</td><td>48~72 小時</td><td>高產值酒莊</td></tr>
              <tr><td>產品責任險</td><td>產品瑕疵、召回成本</td><td>年營收 0.2~0.4%</td><td>€10K~50K</td><td>出口酒莊必備</td></tr>
              <tr><td>網路安全險</td><td>資料外洩、勒索軟體</td><td>€5K~20K 固定</td><td>€5K</td><td>數位化酒莊</td></tr>
              <tr><td>D&O 責任險</td><td>董事高管決策責任</td><td>€8K~25K 固定</td><td>€25K</td><td>股份制酒莊</td></tr>
            </tbody>
          </table>
          <h3>保險組合設計</h3>
          <div class="insurance-portfolio-widget">
            <input type="radio" id="ins-basic" name="insurance-tier" class="opt-basic" checked>
            <input type="radio" id="ins-standard" name="insurance-tier" class="opt-standard">
            <input type="radio" id="ins-premium" name="insurance-tier" class="opt-premium">
            <div class="selectors">
              <label for="ins-basic">基礎型</label>
              <label for="ins-standard">標準型</label>
              <label for="ins-premium">全面型</label>
            </div>
            <div class="panels">
              <div class="panel" data-tier="basic">
                <h4>基礎型保險組合</h4>
                <ul>
                  <li>✅ 財產綜合險 (建築 + 設備)</li>
                  <li>✅ 產品責任險 (基本額度)</li>
                  <li>❌ 氣候保險 (自留風險)</li>
                  <li>❌ 營業中斷險</li>
                </ul>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>年保費總額</td><td>€12K~18K</td></tr>
                    <tr><td>風險覆蓋率</td><td>~45%</td></tr>
                    <tr><td>適用規模</td><td>小型酒莊 (產值 < €500K)</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="panel" data-tier="standard">
                <h4>標準型保險組合</h4>
                <ul>
                  <li>✅ 財產綜合險</li>
                  <li>✅ 產品責任險</li>
                  <li>✅ 霜凍保險 (核心地塊)</li>
                  <li>✅ 冰雹保險</li>
                  <li>⚠️ 營業中斷險 (選配)</li>
                </ul>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>年保費總額</td><td>€35K~60K</td></tr>
                    <tr><td>風險覆蓋率</td><td>~70%</td></tr>
                    <tr><td>適用規模</td><td>中型酒莊 (產值 €1M~3M)</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="panel" data-tier="premium">
                <h4>全面型保險組合</h4>
                <ul>
                  <li>✅ 財產綜合險 (含存貨)</li>
                  <li>✅ 產品責任險 (高額度)</li>
                  <li>✅ 霜凍 + 冰雹 + 氣候指數</li>
                  <li>✅ 營業中斷險</li>
                  <li>✅ 網路安全險</li>
                  <li>✅ D&O 責任險</li>
                </ul>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>年保費總額</td><td>€85K~150K</td></tr>
                    <tr><td>風險覆蓋率</td><td>~85%</td></tr>
                    <tr><td>適用規模</td><td>大型酒莊 / 集團 (產值 > €5M)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <h3>保險採購最佳實踐</h3>
          <ul>
            <li><strong>比價與談判</strong>: 至少詢價 3 家保險公司，比較承保範圍與除外條款。</li>
            <li><strong>自負額優化</strong>: 提高自負額可降低保費 15~25%，適用低頻高損事件。</li>
            <li><strong>多年期優惠</strong>: 簽訂 3~5 年合約可鎖定費率，避免單一災年大幅調漲。</li>
            <li><strong>風險改善折扣</strong>: 裝設防霜風扇、冰雹網可爭取 5~10% 保費折扣。</li>
            <li><strong>理賠記錄管理</strong>: 減少小額理賠，保持良好記錄可累積無賠款優惠。</li>
          </ul>
          <h3>案例：氣候指數保險創新</h3>
          <p>某波爾多酒莊投保參數型氣候保險，以 4 月 15~30 日平均氣溫 < 2°C 為觸發條件，自動賠付 €100K。2021 年霜凍事件觸發後 48 小時內收到賠款，無需繁瑣查勘。</p>
        </div>
      `,
      highlights: [
        { id: 1, icon: '📋', title: '產品圖譜', content: '八大保險類型的保障範圍與成本。' },
        { id: 2, icon: '🎯', title: '組合設計', content: '基礎/標準/全面三檔對應不同規模。' },
        { id: 3, icon: '💡', title: '最佳實踐', content: '比價、自負額、多年期、風險改善折扣。' }
      ]
    },
    {
      title: '第三章：氣候風險緩解策略',
      nav: '氣候緩解',
      icon: '🌦️',
      highlightDelayStep: '0.08s',
      html: `
        <div class="chapter-content">
          <div class="concept-intro">
            <h3>🧭 概念入門:氣候防護 = 為房子安裝防災設備</h3>
            
            <div class="analogy-box">
              <h4>🛠️ 生活化比喻:房屋防災工具箱</h4>
              <p>你的房子面臨多種自然災害威脅,需要選擇合適的防護設備:</p>
              <table class="mapping-table">
                <tr>
                  <th>災害類型</th>
                  <th>房屋防護</th>
                  <th>酒莊氣候防護</th>
                </tr>
                <tr>
                  <td><strong>地震</strong></td>
                  <td>結構補強、避震器</td>
                  <td><strong>霜凍</strong>: 防霜風扇(€40K~80K/ha)、燃燒加熱器、噴灑灌溉 → 應對 -2~-7°C</td>
                </tr>
                <tr>
                  <td><strong>颱風</strong></td>
                  <td>加固屋頂、防風玻璃</td>
                  <td><strong>冰雹</strong>: 防雹網(€8K~15K/ha,10 年壽命) → 80~90% 保護率</td>
                </tr>
                <tr>
                  <td><strong>水災</strong></td>
                  <td>抽水機、防水閘門、保險</td>
                  <td><strong>乾旱</strong>: 滴灌系統(€4K~8K/ha)、蓄水庫(€80K~200K) → 產量穩定性 ±5~10%</td>
                </tr>
                <tr>
                  <td><strong>火災</strong></td>
                  <td>灑水系統、滅火器、逃生計畫</td>
                  <td><strong>熱浪/野火</strong>: 遮陽網、提前採收、煙燻檢測 → 避免曬傷與煙燻污染</td>
                </tr>
              </table>
            </div>

            <div class="terminology-explained">
              <h4>📘 術語白話解釋</h4>
              <table class="definition-table">
                <tr>
                  <th>專業術語</th>
                  <th>白話解釋</th>
                  <th>成本效益分析</th>
                </tr>
                <tr>
                  <td><strong>防霜風扇</strong></td>
                  <td>大型電扇攪動空氣,將高空暖層混合下來</td>
                  <td>投資 €40K~80K/ha,年運營 €1K~2K,適用 -2~-4°C,10~15 年攤銷。</td>
                </tr>
                <tr>
                  <td><strong>噴灑灌溉防霜</strong></td>
                  <td>水結冰時釋放熱量保護葡萄芽</td>
                  <td>投資 €15K~30K/ha,年運營 €800~1.5K,可應對 -4~-7°C 極低溫,但需水源。</td>
                </tr>
                <tr>
                  <td><strong>延遲修剪</strong></td>
                  <td>推遲修剪讓葡萄晚發芽,躲避霜期</td>
                  <td>零成本,但壓縮生長期可能影響成熟度,適合邊際地塊。</td>
                </tr>
                <tr>
                  <td><strong>防雹網</strong></td>
                  <td>物理阻擋冰雹,像為葡萄園撐傘</td>
                  <td>€8K~15K/ha,10 年壽命(攤銷 €800~1.5K/年),保護率 80~90%。</td>
                </tr>
                <tr>
                  <td><strong>滴灌系統</strong></td>
                  <td>精準灌溉,節水 40~60%</td>
                  <td>€4K~8K/ha,產量穩定性從 ±30% 提升至 ±10%,乾旱年救命。</td>
                </tr>
              </table>
            </div>

            <div class="decision-tree">
              <h4>🛤️ 防護技術選擇決策樹</h4>
              <div class="tree-structure">
                <p><strong>Step 1: 評估歷史霜凍溫度</strong></p>
                <ul>
                  <li>通常 -2~-4°C → 防霜風扇(高效,10~15 年壽命)</li>
                  <li>曾達 -4~-7°C → 噴灑灌溉(更強但需水源)</li>
                  <li>偶爾 -1~-2°C → 延遲修剪 + 保險組合(低成本)</li>
                </ul>
                <p><strong>Step 2: 評估冰雹歷史頻率</strong></p>
                <ul>
                  <li>每 3~5 年一次 → 防雹網(€800~1.5K/年攤銷,穩定保護)</li>
                  <li>10 年以上才一次 → 僅投保冰雹險(保費 1.5~3%)</li>
                </ul>
                <p><strong>Step 3: 評估乾旱風險與 AOC 限制</strong></p>
                <ul>
                  <li>AOC 禁止灌溉 + 低乾旱風險 → 純雨養(零投資)</li>
                  <li>AOC 允許應急灌溉 + 中乾旱風險 → 滴灌系統(€4K~8K/ha,穩定產量)</li>
                  <li>IGP 產區 + 高乾旱風險 → 蓄水庫 + 智慧灌溉(€80K~200K,產量穩定性 ±5%)</li>
                </ul>
              </div>
            </div>

            <div class="reading-guide">
              <h4>🔍 閱讀指南:如何使用本章工具</h4>
              <ul>
                <li><strong>霜凍防護技術矩陣</strong>: 對比五種技術的有效溫度範圍、成本與優缺點,選擇適合產區的組合。</li>
                <li><strong>冰雹防護清單</strong>: 防雹網是最穩定方案,10 年攤銷後成本與保險接近,但保護率更高。</li>
                <li><strong>水資源管理 Widget</strong>: 點選三個策略,查看投資成本、運營成本與產量穩定性,依 AOC 限制與預算選擇。</li>
                <li><strong>成本效益計算</strong>: 用「年攤銷成本 ÷ 避免損失」評估 ROI,若比值 < 30% 通常值得投資。</li>
              </ul>
            </div>
          </div>

          <h3>霜凍防護技術矩陣</h3>
          <table class="data-table">
            <thead>
              <tr><th>技術</th><th>原理</th><th>有效溫度範圍</th><th>投資成本</th><th>年運營成本</th><th>優缺點</th></tr>
            </thead>
            <tbody>
              <tr><td>防霜風扇</td><td>攪動空氣混合暖層</td><td>-2°C ~ -4°C</td><td>€40K~80K/ha</td><td>€1K~2K/ha</td><td>優：大面積;缺：極低溫無效</td></tr>
              <tr><td>燃燒加熱器</td><td>釋放熱量提升溫度</td><td>-3°C ~ -5°C</td><td>€5K~10K/ha</td><td>€3K~5K/ha</td><td>優：靈活;缺：人力密集、碳排</td></tr>
              <tr><td>噴灑灌溉</td><td>結冰釋放潛熱保護芽</td><td>-4°C ~ -7°C</td><td>€15K~30K/ha</td><td>€800~1.5K/ha</td><td>優：極低溫有效;缺：需水源</td></tr>
              <tr><td>延遲修剪</td><td>推遲發芽躲避霜期</td><td>預防性</td><td>無</td><td>無</td><td>優：零成本;缺：壓縮生長期</td></tr>
              <tr><td>地塊選擇</td><td>避開霜凍谷地</td><td>預防性</td><td>N/A</td><td>N/A</td><td>優：根本性;缺：已有地塊難調整</td></tr>
            </tbody>
          </table>
          <h3>冰雹防護</h3>
          <ul>
            <li><strong>防雹網</strong>: 覆蓋率 80~90%，成本 €8K~15K/ha，可用 10~15 年。</li>
            <li><strong>人工降雨 / 火箭播雲</strong>: 區域性公共防雹，酒莊可參與產區合作計畫。</li>
            <li><strong>快速採收</strong>: 預警後提前搶收部分成熟葡萄。</li>
          </ul>
          <h3>乾旱與水資源管理</h3>
          <div class="water-strategy-widget">
            <input type="radio" id="water-rainfed" name="water-strategy" class="opt-rainfed" checked>
            <input type="radio" id="water-drip" name="water-strategy" class="opt-drip">
            <input type="radio" id="water-reserve" name="water-strategy" class="opt-reserve">
            <div class="selectors">
              <label for="water-rainfed">純雨養</label>
              <label for="water-drip">滴灌系統</label>
              <label for="water-reserve">蓄水庫 + 智慧灌溉</label>
            </div>
            <div class="panels">
              <div class="panel" data-strategy="rainfed">
                <h4>純雨養策略</h4>
                <ul>
                  <li>零灌溉投資，符合傳統 AOC 規範。</li>
                  <li>依賴品種選擇 (耐旱品種) 與土壤保水。</li>
                  <li>風險：極端乾旱年產量大幅下降。</li>
                </ul>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>投資成本</td><td>€0</td></tr>
                    <tr><td>年運營成本</td><td>€0</td></tr>
                    <tr><td>產量穩定性</td><td>低 (±30%)</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="panel" data-strategy="drip">
                <h4>滴灌系統</h4>
                <ul>
                  <li>精準灌溉，節水 40~60%。</li>
                  <li>需取得 INAO 乾旱年許可或選擇 IGP 產區。</li>
                  <li>可整合土壤感測器實現自動化。</li>
                </ul>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>投資成本</td><td>€4K~8K/ha</td></tr>
                    <tr><td>年運營成本</td><td>€500~1K/ha</td></tr>
                    <tr><td>產量穩定性</td><td>高 (±10%)</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="panel" data-strategy="reserve">
                <h4>蓄水庫 + 智慧灌溉</h4>
                <ul>
                  <li>冬季雨水收集，夏季按需供應。</li>
                  <li>結合氣象預報與 AI 優化用水。</li>
                  <li>適合中大型酒莊長期投資。</li>
                </ul>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>投資成本</td><td>€80K~200K (整體)</td></tr>
                    <tr><td>年運營成本</td><td>€2K~4K</td></tr>
                    <tr><td>產量穩定性</td><td>極高 (±5%)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <h3>熱浪與煙燻污染</h3>
          <ul>
            <li><strong>遮陽網與葉幕管理</strong>: 保護果實避免曬傷，保留適量葉片降溫。</li>
            <li><strong>提前採收</strong>: 監測糖酸平衡，避免過熟與酒精度過高。</li>
            <li><strong>煙燻檢測</strong>: 野火期間抽樣檢測愈創木酚 (guaiacol) 等煙燻化合物，決定是否採收。</li>
          </ul>
          <h3>長期氣候調適</h3>
          <ul>
            <li>引入耐熱耐旱品種 (需 INAO 批准試驗)。</li>
            <li>調整種植密度與行向優化通風與日照。</li>
            <li>增加土壤有機質提升保水與碳封存。</li>
          </ul>
        </div>
      `,
      highlights: [
        { id: 1, icon: '❄️', title: '霜凍防護', content: '五種技術的成本效益與適用溫度範圍。' },
        { id: 2, icon: '💧', title: '水資源策略', content: '雨養 vs 滴灌 vs 蓄水庫的投資與穩定性。' },
        { id: 3, icon: '🌡️', title: '熱浪調適', content: '遮陽、採收時機與煙燻檢測。' }
      ]
    },
    {
      title: '第四章：危機應變與業務連續性',
      nav: '危機應變',
      icon: '🚨',
      highlightDelayStep: '0.09s',
      html: `
        <div class="chapter-content">
          <h3>業務連續性管理 (BCM) 框架</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>階段</th><th>核心任務</th><th>負責人</th><th>時間框架</th></tr>
            </thead>
            <tbody>
              <tr><td>風險評估</td><td>識別關鍵業務流程與依賴</td><td>COO / 風險經理</td><td>年度</td></tr>
              <tr><td>影響分析 (BIA)</td><td>量化中斷成本與恢復目標</td><td>財務 + 營運</td><td>年度</td></tr>
              <tr><td>應變計畫</td><td>制定情境應對 SOP</td><td>跨部門小組</td><td>年度更新</td></tr>
              <tr><td>演練測試</td><td>模擬霜凍、火災、網路攻擊</td><td>全員</td><td>每 6 個月</td></tr>
              <tr><td>持續改進</td><td>檢討演練缺失、更新計畫</td><td>管理層</td><td>演練後 2 週</td></tr>
            </tbody>
          </table>
          <h3>關鍵業務流程恢復目標</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>流程</th><th>RTO (恢復時間)</th><th>RPO (資料丟失容忍)</th><th>備援方案</th></tr>
            </thead>
            <tbody>
              <tr><td>釀造監控</td><td>4 小時</td><td>1 小時</td><td>手動記錄 + 備用感測器</td></tr>
              <tr><td>訂單處理</td><td>24 小時</td><td>4 小時</td><td>雲端備份 + 紙本流程</td></tr>
              <tr><td>冷鏈物流</td><td>12 小時</td><td>N/A</td><td>備用運輸商合約</td></tr>
              <tr><td>客戶資料</td><td>8 小時</td><td>24 小時</td><td>異地備份 + GDPR 合規</td></tr>
            </tbody>
          </table>
          <h3>危機應變情境劇本</h3>
          <div class="crisis-scenario-widget">
            <input type="radio" id="crisis-frost" name="crisis-type" class="opt-frost" checked>
            <input type="radio" id="crisis-fire" name="crisis-type" class="opt-fire">
            <input type="radio" id="crisis-cyber" name="crisis-type" class="opt-cyber">
            <div class="selectors">
              <label for="crisis-frost">霜凍災害</label>
              <label for="crisis-fire">酒窖火災</label>
              <label for="crisis-cyber">網路攻擊</label>
            </div>
            <div class="panels">
              <div class="panel" data-crisis="frost">
                <h4>霜凍災害應變 (72 小時)</h4>
                <ol>
                  <li><strong>T+0 (發生當下)</strong>: 啟動防霜設備，通報保險公司。</li>
                  <li><strong>T+6h</strong>: 初步評估受災面積，拍照記錄。</li>
                  <li><strong>T+24h</strong>: 召開危機會議，調整產量預測與銷售計畫。</li>
                  <li><strong>T+48h</strong>: 聯繫買家說明情況，協商交付調整。</li>
                  <li><strong>T+72h</strong>: 提交保險理賠，啟動替代供應 (採購外部葡萄)。</li>
                </ol>
                <p class="note">關鍵：快速評估 + 透明溝通 + 彈性調整。</p>
              </div>
              <div class="panel" data-crisis="fire">
                <h4>酒窖火災應變 (7 天)</h4>
                <ol>
                  <li><strong>T+0</strong>: 啟動消防系統，疏散人員，報警。</li>
                  <li><strong>T+2h</strong>: 評估損失範圍 (建築、設備、存貨)。</li>
                  <li><strong>T+24h</strong>: 通報保險、客戶、監管機關。</li>
                  <li><strong>T+3 天</strong>: 轉移未受損酒款至備用倉庫。</li>
                  <li><strong>T+7 天</strong>: 制定恢復時間表，啟動臨時租賃設施。</li>
                </ol>
                <p class="note">關鍵：人員安全優先 + 存貨保全 + 業務連續性。</p>
              </div>
              <div class="panel" data-crisis="cyber">
                <h4>勒索軟體攻擊應變 (48 小時)</h4>
                <ol>
                  <li><strong>T+0</strong>: 隔離受感染系統，通知 IT 與網路安全險。</li>
                  <li><strong>T+1h</strong>: 啟動離線備份恢復，避免支付贖金。</li>
                  <li><strong>T+4h</strong>: 通報執法機關與資料保護官 (DPO)。</li>
                  <li><strong>T+24h</strong>: 評估資料外洩範圍，準備 GDPR 通報。</li>
                  <li><strong>T+48h</strong>: 對外聲明 (若涉及客戶資料)，恢復關鍵系統。</li>
                </ol>
                <p class="note">關鍵：不支付贖金 + 快速恢復 + 透明通報。</p>
              </div>
            </div>
          </div>
          <h3>危機溝通原則</h3>
          <ul>
            <li><strong>單一發言人</strong>: 指定 CEO 或公關負責人統一對外。</li>
            <li><strong>快速回應</strong>: 事件後 6~12 小時內發布初步聲明。</li>
            <li><strong>透明誠實</strong>: 承認問題、說明措施、承諾改進。</li>
            <li><strong>多管道佈達</strong>: 官網、社群、媒體、客戶郵件同步。</li>
          </ul>
          <h3>案例：2021 年霜凍應變最佳實踐</h3>
          <p>某波爾多酒莊霜凍損失 60% 產量，72 小時內完成評估、通報保險並聯繫客戶，提供替代年份與混調方案，保住 85% 訂單並獲得客戶讚譽。</p>
        </div>
      `,
      highlights: [
        { id: 1, icon: '📋', title: 'BCM 框架', content: '風險評估→BIA→計畫→演練→改進五階段。' },
        { id: 2, icon: '⏱️', title: 'RTO/RPO', content: '關鍵流程的恢復時間與資料容忍目標。' },
        { id: 3, icon: '📢', title: '危機劇本', content: '霜凍/火災/網攻的分階段應變 SOP。' }
      ]
    },
    {
      title: '第五章：ESG 整合與韌性建設',
      nav: 'ESG 韌性',
      icon: '🌍',
      highlightDelayStep: '0.1s',
      html: `
        <div class="chapter-content">
          <h3>ESG 風險整合框架</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>ESG 面向</th><th>風險類別</th><th>管理措施</th><th>KPI</th></tr>
            </thead>
            <tbody>
              <tr><td>環境 (E)</td><td>氣候變遷、水資源、生物多樣性</td><td>碳盤查、永續農法、棲地保護</td><td>碳排/瓶、有機面積 %、生物多樣性指數</td></tr>
              <tr><td>社會 (S)</td><td>勞工安全、社區關係、供應鏈</td><td>安全培訓、在地採購、公平交易</td><td>零工安事故、在地採購 %、供應商審計通過率</td></tr>
              <tr><td>治理 (G)</td><td>合規、透明度、風險管理</td><td>內部稽核、ESG 披露、風險委員會</td><td>合規事件數、ESG 報告完整度、董事會多元性</td></tr>
            </tbody>
          </table>
          <h3>氣候韌性評估 (TCFD 框架)</h3>
          <ul>
            <li><strong>治理</strong>: 董事會監督氣候風險，設立永續委員會。</li>
            <li><strong>策略</strong>: 情境分析 (1.5°C vs 3°C 增溫) 對業務的影響。</li>
            <li><strong>風險管理</strong>: 氣候風險納入整體 ERM，定期壓力測試。</li>
            <li><strong>指標與目標</strong>: 設定碳中和路徑 (如 2030 -50%、2050 淨零)。</li>
          </ul>
          <h3>永續投資 ROI</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>投資項目</th><th>成本</th><th>年節省 / 收益</th><th>回收期</th><th>附加價值</th></tr>
            </thead>
            <tbody>
              <tr><td>太陽能板</td><td>€80K</td><td>€12K 電費</td><td>6.7 年</td><td>碳減排 30 噸/年</td></tr>
              <tr><td>有機認證</td><td>€15K 轉型 + €5K/年</td><td>溢價 +15%</td><td>3~4 年</td><td>品牌差異化</td></tr>
              <tr><td>滴灌系統</td><td>€6K/ha</td><td>節水 + 穩定產量</td><td>5~7 年</td><td>乾旱韌性</td></tr>
              <tr><td>員工培訓</td><td>€8K/年</td><td>降低流失率 20%</td><td>2 年</td><td>創新與品質提升</td></tr>
            </tbody>
          </table>
          <h3>供應鏈韌性</h3>
          <ul>
            <li><strong>多元化供應商</strong>: 瓶罐、軟木塞至少 2~3 家備援。</li>
            <li><strong>在地採購優先</strong>: 降低物流風險與碳足跡。</li>
            <li><strong>供應商 ESG 審計</strong>: 要求關鍵供應商通過永續認證。</li>
            <li><strong>庫存緩衝</strong>: 關鍵物料保持 3~6 個月安全庫存。</li>
          </ul>
          <h3>社區與利害關係人參與</h3>
          <ul>
            <li>定期舉辦開放日，邀請在地居民參觀與交流。</li>
            <li>支持在地學校與文化活動，建立社會許可 (social license)。</li>
            <li>與產區協會合作推動集體行銷與風險分攤。</li>
          </ul>
          <h3>未來風險展望</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>新興風險</th><th>時間框架</th><th>應對建議</th></tr>
            </thead>
            <tbody>
              <tr><td>碳邊境稅 (CBAM)</td><td>2026 起</td><td>碳盤查、低碳物流、供應鏈減排</td></tr>
              <tr><td>水資源配額緊縮</td><td>2028~2035</td><td>蓄水、節水技術、耐旱品種</td></tr>
              <tr><td>消費者永續要求</td><td>持續升高</td><td>透明揭露、第三方認證、循環包裝</td></tr>
              <tr><td>極端天氣頻率增加</td><td>持續</td><td>保險 + 技術 + 品種調適組合</td></tr>
            </tbody>
          </table>
          <h3>行動清單</h3>
          <ol>
            <li>每年進行風險評估與 BIA 更新。</li>
            <li>投保核心風險，優化自負額與多年期合約。</li>
            <li>建置至少一套氣候防護技術 (霜凍 / 冰雹 / 灌溉)。</li>
            <li>制定並演練危機應變計畫 (每 6 個月一次)。</li>
            <li>設定 ESG 目標並納入年度績效考核。</li>
          </ol>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🌱', title: 'ESG 整合', content: '環境、社會、治理風險納入整體框架。' },
        { id: 2, icon: '📊', title: 'TCFD 框架', content: '治理、策略、風險管理、指標四支柱。' },
        { id: 3, icon: '🔮', title: '未來展望', content: '碳稅、水配額、永續需求等新興風險。' }
      ]
    }
  ],
  summary: {
    title: '課程總結',
    html: `
      <div class="comprehensive-summary">
        <h2>🎯 L4-7 核心回顧:風險管理的五大支柱</h2>

        <div class="five-pillars">
          <div class="pillar">
            <h3>1️⃣ 風險評估框架:識別 × 量化 × 排序</h3>
            <ul>
              <li><strong>三大類別</strong>: 氣候風險(霜凍、冰雹、乾旱、熱浪) + 市場風險(價格、匯率、趨勢) + 營運風險(供應鏈、人才、網路、法規)</li>
              <li><strong>量化方法</strong>: 預期損失 EL(機率 × 損失)、風險值 VaR(95% 信賴區間)、情境分析(歷史極端事件)、壓力測試(多重風險疊加)</li>
              <li><strong>優先排序</strong>: 用「發生機率 × 財務影響」矩陣分級,極高優先級(霜凍、冰雹)立即行動,低優先級(隕石)監控即可</li>
              <li><strong>關鍵指標</strong>: 
                <ul>
                  <li>霜凍:機率 <strong>40%</strong>,損失 <strong>€150K~500K</strong> = 極高優先級</li>
                  <li>冰雹:機率 <strong>15%</strong>,損失 <strong>€200K~800K</strong> = 高優先級</li>
                  <li>EUR/USD 波動 10%:機率 <strong>35%</strong>,影響出口收益 <strong>±€120K</strong></li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="pillar">
            <h3>2️⃣ 保險策略:基礎/標準/全面三檔組合</h3>
            <ul>
              <li><strong>基礎型</strong>: 財產險 + 產品責任險,年保費 <strong>€12K~18K</strong>,風險覆蓋率 <strong>45%</strong>,適合小型酒莊(產值 < €500K)</li>
              <li><strong>標準型</strong>: 基礎型 + 霜凍險 + 冰雹險,年保費 <strong>€35K~60K</strong>,覆蓋率 <strong>70%</strong>,適合中型酒莊(€1M~3M)</li>
              <li><strong>全面型</strong>: 標準型 + 營業中斷險 + 網路安全險 + D&O 險,年保費 <strong>€85K~150K</strong>,覆蓋率 <strong>85%</strong>,適合大型酒莊/集團(> €5M)</li>
              <li><strong>採購技巧</strong>: 至少詢價 3 家、提高自負額降保費 15~25%、簽 3~5 年合約鎖定費率、風險改善爭取 5~10% 折扣</li>
              <li><strong>關鍵指標</strong>: 
                <ul>
                  <li>霜凍險:保費 <strong>產值 2~4%</strong>,自負額首 20% 損失</li>
                  <li>氣候指數險:保費 <strong>產值 1~2%</strong>,參數觸發 48 小時內賠付</li>
                  <li>保險 ROI 臨界點:保費 < 預期損失 × <strong>20%</strong> 通常值得投保</li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="pillar">
            <h3>3️⃣ 氣候防護技術:保險 + 技術雙軌並行</h3>
            <ul>
              <li><strong>霜凍防護</strong>: 防霜風扇(€40K~80K/ha,適用 -2~-4°C) + 噴灑灌溉(€15K~30K/ha,適用 -4~-7°C) + 延遲修剪(零成本)</li>
              <li><strong>冰雹防護</strong>: 防雹網(€8K~15K/ha,10 年壽命,保護率 80~90%) > 保險(保費 1.5~3%,但需理賠程序)</li>
              <li><strong>乾旱管理</strong>: 純雨養(零投資,產量 ±30%) → 滴灌(€4K~8K/ha,產量 ±10%) → 蓄水庫(€80K~200K,產量 ±5%)</li>
              <li><strong>熱浪調適</strong>: 遮陽網、葉幕管理、提前採收、煙燻檢測(愈創木酚濃度)</li>
              <li><strong>關鍵指標</strong>: 
                <ul>
                  <li>防霜風扇 ROI:10~15 年攤銷,每年省 <strong>€80K~200K</strong> 霜凍損失</li>
                  <li>防雹網攤銷成本 <strong>€800~1.5K/年</strong> ≈ 冰雹險保費,但保護率更高</li>
                  <li>滴灌節水 <strong>40~60%</strong>,產量穩定性從 ±30% 提升至 ±10%</li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="pillar">
            <h3>4️⃣ 危機應變:BCM 五階段 + RTO/RPO 設定</h3>
            <ul>
              <li><strong>BCM 框架</strong>: 風險評估 → 影響分析 BIA → 應變計畫 → 演練測試(每 6 個月) → 持續改進</li>
              <li><strong>RTO/RPO 目標</strong>: 釀造監控(RTO 4h/RPO 1h)、訂單處理(24h/4h)、冷鏈物流(12h)、客戶資料(8h/24h)</li>
              <li><strong>危機劇本</strong>: 霜凍(72h 應變:評估→保險→買家溝通)、火災(7 天:滅火→轉移存貨→臨時租賃)、網攻(48h:隔離→備份恢復→GDPR 通報)</li>
              <li><strong>溝通原則</strong>: 單一發言人 + 6~12h 內首次聲明 + 透明誠實 + 多管道同步</li>
              <li><strong>關鍵指標</strong>: 
                <ul>
                  <li>2021 霜凍最佳實踐:<strong>72 小時</strong>內完成評估與溝通,保住 <strong>85%</strong> 訂單</li>
                  <li>演練頻率:<strong>每 6 個月</strong>一次實戰模擬</li>
                  <li>備援系統:關鍵流程需 <strong>2~3 套</strong>備援方案(雲端備份、備用供應商、手動流程)</li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="pillar">
            <h3>5️⃣ ESG 整合:TCFD 框架 + 永續投資 ROI</h3>
            <ul>
              <li><strong>TCFD 四支柱</strong>: 治理(董事會監督) + 策略(1.5°C vs 3°C 情境分析) + 風險管理(氣候風險納入 ERM) + 指標(2030 -50%、2050 淨零)</li>
              <li><strong>永續投資回報</strong>: 太陽能板(回收期 6.7 年,碳減 30 噸/年)、有機認證(溢價 +15%,3~4 年回收)、滴灌(5~7 年回收)、員工培訓(2 年回收,流失率 -20%)</li>
              <li><strong>供應鏈韌性</strong>: 供應商多元化(2~3 家備援) + 在地採購(降物流風險) + ESG 審計 + 3~6 個月安全庫存</li>
              <li><strong>新興風險</strong>: 碳邊境稅 CBAM(2026 起) + 水資源配額緊縮(2028~2035) + 消費者永續要求(持續升高) + 極端天氣頻率增加</li>
              <li><strong>關鍵指標</strong>: 
                <ul>
                  <li>有機認證溢價:<strong>+15%</strong>,回收期 <strong>3~4 年</strong></li>
                  <li>太陽能板:年節省 <strong>€12K</strong> 電費,減碳 <strong>30 噸</strong></li>
                  <li>碳邊境稅影響:未做碳盤查的酒莊出口成本增加 <strong>5~10%</strong></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div class="system-thinking">
          <h3>🔗 系統思維:風險管理的飛輪效應</h3>
          <div class="chain-reaction">
            <div class="reaction-step">
              <h4>起點:建立風險評估框架</h4>
              <p>識別氣候、市場、營運三大類風險,量化機率與影響</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>投保核心風險</h4>
              <p>標準型組合(霜凍+冰雹+財產+責任),覆蓋率 70%,年保費 €35K~60K</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>投資防護技術</h4>
              <p>防霜風扇 + 防雹網,降低保費 10~15%,損失頻率從 40% 降至 10%</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>建立應變計畫</h4>
              <p>72 小時霜凍應變、7 天火災恢復、48 小時網攻隔離,RTO/RPO 清晰</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>整合 ESG 韌性</h4>
              <p>TCFD 框架、永續認證、碳盤查,吸引 ESG 投資者與年輕消費者</p>
              <span class="arrow">↓</span>
            </div>
            <div class="reaction-step">
              <h4>長期競爭優勢</h4>
              <p>氣候韌性 + 市場靈活度 + 品牌信任 = 不確定性中的確定性成長</p>
            </div>
          </div>
          <p class="insight"><strong>核心洞察</strong>: 風險管理不是成本中心,而是<strong>競爭力的倍增器</strong>。防護技術降低保費與損失,應變計畫縮短恢復時間,ESG 整合提升品牌溢價,三者形成正向循環,讓酒莊在極端事件中脫穎而出。</p>
        </div>

        <div class="key-insights">
          <h3>💎 三個關鍵洞察</h3>
          
          <div class="insight-card">
            <h4>1. 保險與技術是互補,不是二選一</h4>
            <p><strong>常見誤區</strong>: 認為「買了保險就不用投資防護技術」或「有技術就不用保險」。</p>
            <p><strong>實際情況</strong>: </p>
            <ul>
              <li>保險轉移<strong>財務風險</strong>(賠錢),技術降低<strong>事件發生機率</strong>(不損失)</li>
              <li>防霜風扇可降低霜凍頻率從 40% 至 10%,保費也隨之降低 10~15%</li>
              <li>防雹網 10 年攤銷成本(€800~1.5K/年)與冰雹險保費接近,但保護率更高且無理賠糾紛</li>
              <li>最佳策略:<strong>保險托底 + 技術減少觸發</strong>,雙軌並行效果最優</li>
            </ul>
            <p><strong>實戰應用</strong>: 中型酒莊(€1M~3M)應投資<strong>防霜風扇(€40K~80K/ha) + 霜凍險(保費 2~4%)</strong>,前者降低小規模霜凍損失,後者在極端事件(-5°C 以下)時賠付。10 年總成本比純保險低 20~30%,且產量更穩定。</p>
          </div>

          <div class="insight-card">
            <h4>2. 危機應變的核心是「速度」,不是「完美」</h4>
            <p><strong>常見誤區</strong>: 花數月制定完美應變計畫,卻從不演練,危機發生時手忙腳亂。</p>
            <p><strong>實際情況</strong>: </p>
            <ul>
              <li>2021 年霜凍最佳實踐酒莊:<strong>72 小時</strong>內完成評估、保險通報、買家溝通,保住 85% 訂單</li>
              <li>火災黃金時間:<strong>前 2 小時</strong>決定存貨保全率,提前準備備用倉庫清單是關鍵</li>
              <li>網路攻擊:<strong>1 小時內</strong>隔離系統 + 啟動離線備份,可避免 90% 資料丟失</li>
              <li>快速回應 > 完美計畫:一份 70 分但每 6 個月演練的計畫,遠勝 95 分但從未測試的文件</li>
            </ul>
            <p><strong>實戰應用</strong>: 採用<strong>「最小可行應變計畫」(MVP Crisis Plan)</strong>:霜凍/火災/網攻各一頁 A4 紙,列出前 3 步驟、關鍵聯絡人、RTO 目標。每 6 個月實際模擬一次(如假裝霜凍,計時完成評估與通報),根據演練結果快速迭代。</p>
          </div>

          <div class="insight-card">
            <h4>3. ESG 不是成本,是「風險折扣券」</h4>
            <p><strong>常見誤區</strong>: 認為 ESG 投資(太陽能、有機認證、碳盤查)只是為了「形象好看」,沒有實質回報。</p>
            <p><strong>實際情況</strong>: </p>
            <ul>
              <li>有機認證溢價 <strong>+15%</strong>,3~4 年回收,且吸引願付高價的環保消費者</li>
              <li>太陽能板回收期 <strong>6.7 年</strong>,20 年壽命內累計節省 <strong>€240K</strong> 電費</li>
              <li>碳盤查與減排:提前應對 2026 碳邊境稅 CBAM,未做碳盤查的酒莊出口成本增加 5~10%</li>
              <li>滴灌系統回收期 <strong>5~7 年</strong>,但將產量穩定性從 ±30% 提升至 ±10%,相當於每年省下霜凍/乾旱保費 €3K~5K</li>
              <li>ESG 評級高的酒莊更容易獲得銀行低息貸款(利率差 0.5~1%),10 年可省 <strong>€50K~100K</strong> 利息</li>
            </ul>
            <p><strong>實戰應用</strong>: 將 ESG 投資視為<strong>「購買未來風險的折扣券」</strong>。例如,2024 年投資 €80K 裝太陽能板,2026 年 CBAM 生效後每年省 €5K 碳稅 + €12K 電費,實際回收期從 6.7 年縮短至 4.7 年。優先投資「有監管壓力 + 有市場溢價」的 ESG 項目(有機認證、碳減排、節水),延後「純形象」項目。</p>
          </div>
        </div>

        <div class="actionable-framework">
          <h3>⚡ 實戰行動框架:建立風險管理體系的 4 步驟</h3>
          
          <div class="action-step">
            <h4>Step 1: 風險盤點與量化 (1 個月)</h4>
            <ul>
              <li><strong>氣候風險層</strong>: 查詢產區過去 20 年霜凍/冰雹/乾旱頻率,計算 EL(機率 × 損失)</li>
              <li><strong>市場風險層</strong>: 分析前 3 大市場匯率波動、關稅變化、消費趨勢</li>
              <li><strong>營運風險層</strong>: 識別單點故障(單一供應商、關鍵人才、老舊設備)</li>
              <li><strong>工具</strong>: 風險矩陣表(機率 × 影響),情境分析(2003 熱浪、2021 霜凍重演)</li>
              <li><strong>輸出</strong>: 5~7 項極高/高優先級風險清單</li>
            </ul>
          </div>

          <div class="action-step">
            <h4>Step 2: 保險與技術組合設計 (2 個月)</h4>
            <ul>
              <li><strong>保險採購</strong>: 至少詢價 3 家,比較霜凍險、冰雹險、財產險的承保範圍與除外條款</li>
              <li><strong>技術評估</strong>: 根據極端溫度選擇防霜技術(-2~-4°C 風扇,-4~-7°C 灌溉),計算 10 年 ROI</li>
              <li><strong>預算分配</strong>: 總風險管理預算 = 年營收 2~4%,其中保費 60%、技術投資 30%、應變演練 10%</li>
              <li><strong>標準組合</strong>: 中型酒莊應包含霜凍險(保費 2~4%) + 防霜風扇(€40K~80K/ha) + 防雹網(€8K~15K/ha)</li>
            </ul>
          </div>

          <div class="action-step">
            <h4>Step 3: 應變計畫與演練 (3 個月建置,每 6 個月演練)</h4>
            <ul>
              <li><strong>制定劇本</strong>: 霜凍(72h)、火災(7 天)、網攻(48h),每個劇本包含分階段任務、負責人、RTO/RPO</li>
              <li><strong>備援系統</strong>: 雲端備份(每日)、備用供應商合約(2~3 家)、臨時倉庫清單</li>
              <li><strong>演練測試</strong>: 每 6 個月模擬一次(如週五早上 9 點宣布「霜凍發生」,計時團隊反應)</li>
              <li><strong>持續改進</strong>: 演練後 2 週內檢討缺失(如聯絡人電話過期、備份恢復太慢),更新計畫</li>
            </ul>
          </div>

          <div class="action-step">
            <h4>Step 4: ESG 整合與前瞻佈局 (持續)</h4>
            <ul>
              <li><strong>TCFD 框架</strong>: 設立永續委員會,進行 1.5°C vs 3°C 情境分析,設定 2030 -50%、2050 淨零目標</li>
              <li><strong>優先投資</strong>: 有機認證(3~4 年回收) + 太陽能板(6.7 年回收) + 滴灌(5~7 年回收)</li>
              <li><strong>監管雷達</strong>: 追蹤碳邊境稅 CBAM(2026)、水資源配額緊縮(2028~2035),提前 2~3 年準備</li>
              <li><strong>品牌轉化</strong>: 將 ESG 成就轉化為品牌故事(如「碳中和酒莊」、「有機認證 20 年」),吸引年輕消費者</li>
            </ul>
          </div>
        </div>

        <div class="final-reflection">
          <h3>🎓 最終反思:風險管理的終極目標</h3>
          <p>風險管理的本質,是<strong>讓酒莊在不確定性中建立確定性</strong>。氣候無法控制,但可以用保險 + 技術降低損失;市場無法預測,但可以用多元化與對沖分散風險;危機無法避免,但可以用應變計畫縮短恢復時間。</p>
          <p>就像為房子買保險、裝防盜門、準備滅火器、定期體檢,酒莊的風險管理也需要<strong>多層防護網</strong>:保險托底、技術減損、應變加速、ESG 增值。四者相輔相成,形成正向飛輪,讓酒莊在極端事件中不僅存活,更能脫穎而出。</p>
          <p><strong>記住</strong>: 風險管理不是「花錢買安心」,而是<strong>「投資未來確定性」</strong>。每年投入營收 2~4% 於風險管理,可避免單一災難年損失 30~100% 產量的滅頂之災,長期 ROI 高達 10:1 以上。</p>
        </div>

        <div class="next-steps">
          <h3>📚 延伸學習</h3>
          <ul>
            <li><strong>L4-4 成本結構與投報</strong>: 理解風險管理成本如何納入財務模型,計算保險與技術投資的 ROI</li>
            <li><strong>L4-6 法規與原產地保護</strong>: 理解 AOC 規範對灌溉、品種的限制,影響風險緩解策略選擇</li>
            <li><strong>L4-8 永續農法與認證</strong>: 深入學習有機認證、HVE、生物多樣性等 ESG 實踐</li>
            <li><strong>外部資源</strong>: TCFD 官網(氣候風險框架)、保險公司產品手冊(風險覆蓋對比)、產區氣象站(歷史極端事件數據)</li>
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
        question: '若酒莊年產值 €2M,面臨高霜凍風險,最合理的保險策略是?',
        options: ['僅投保財產險,霜凍自留風險', '投保霜凍險 + 財產險 + 產品責任險,構成標準型組合', '投保全面型組合包含 D&O 險'],
        correct: 1,
        explanation: '中型酒莊 (€1M~3M) 應採標準型組合,覆蓋核心風險 (霜凍、財產、責任),D&O 險適合大型或股份制酒莊。'
      },
      {
        id: 2,
        question: '防霜風扇與噴灑灌溉的主要差異在於?',
        options: ['風扇適用極低溫 (-7°C),灌溉僅適用 -2°C', '風扇成本低但極低溫無效,灌溉成本高但可應對 -7°C', '兩者效果完全相同'],
        correct: 1,
        explanation: '風扇有效範圍 -2~-4°C,噴灑灌溉利用結冰潛熱可應對 -4~-7°C,但需要穩定水源與較高投資。'
      },
      {
        id: 3,
        question: '業務連續性計畫 (BCP) 的 RTO 是指?',
        options: ['風險發生機率', '恢復業務運作的目標時間', '資料丟失的容忍時間'],
        correct: 1,
        explanation: 'RTO (Recovery Time Objective) 是恢復時間目標,RPO (Recovery Point Objective) 才是資料丟失容忍時間。'
      }
    ],
    passingScore: 60,
    timeLimit: 180
  }
})

export default l47Content
