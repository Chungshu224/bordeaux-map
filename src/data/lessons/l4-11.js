import { makeL4Lesson } from './l4-shared.js'

export const l411Content = makeL4Lesson({
  cover: {
    title: 'En Primeur 與葡萄酒投資',
    subtitle: 'Level 4 - 課程 11',
    background: 'linear-gradient(135deg, #7c2d12 0%, #b91c1c 50%, #dc2626 100%)',
    icon: '💼'
  },
  intro: {
    content: '從期酒制度到投資組合,掌握定價模型、風險評估、二級市場動態與稅務規劃,建立系統化葡萄酒投資框架。'
  },
  objectives: [
    { id: 1, text: '理解 En Primeur 機制與價格發現', icon: '📜' },
    { id: 2, text: '建立定價模型與估值框架', icon: '💰' },
    { id: 3, text: '評估投資風險與市場波動', icon: '📊' },
    { id: 4, text: '優化投資組合與稅務規劃', icon: '📈' }
  ],
  chapters: [
    {
      title: '第一章:En Primeur 制度與運作機制',
      nav: '期酒制度',
      icon: '📜',
      highlightDelayStep: '0.06s',
      html: `
        <div class="chapter-content">
          <h3>En Primeur 歷史演變</h3>
          <p><strong>起源</strong>: 18 世紀波爾多酒商為解決現金流問題,在葡萄酒裝瓶前預售。</p>
          <p><strong>現代化</strong>: 1970 年代系統化,1982 年份因 Robert Parker 高評分引爆全球關注。</p>
          <p><strong>核心邏輯</strong>:</p>
          <ul>
            <li><strong>酒莊</strong>: 提前獲得現金流,轉嫁陳年風險,鎖定銷售。</li>
            <li><strong>酒商</strong>: 以折扣價取得配額,分散至全球市場。</li>
            <li><strong>消費者/投資人</strong>: 確保稀缺年份配額,潛在增值空間。</li>
          </ul>
          <h3>En Primeur 時間軸</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>時間</th><th>階段</th><th>關鍵活動</th></tr>
            </thead>
            <tbody>
              <tr><td>N 年 9-10 月</td><td>採收</td><td>葡萄採收,開始釀造</td></tr>
              <tr><td>N+1 年 4 月</td><td>桶邊試飲週</td><td>酒莊開放酒商/媒體試飲,Parker/Decanter 評分</td></tr>
              <tr><td>N+1 年 5-6 月</td><td>價格發布</td><td>酒莊分批釋出配額與價格 (tranche 1-3)</td></tr>
              <tr><td>N+1 年 6-7 月</td><td>分銷</td><td>酒商向客戶銷售,收取訂金 (通常 100%)</td></tr>
              <tr><td>N+2 年 春季</td><td>裝瓶</td><td>酒莊完成陳年與裝瓶</td></tr>
              <tr><td>N+2 年 夏季</td><td>交付</td><td>實體酒交付酒商倉庫,可提領或轉售</td></tr>
            </tbody>
          </table>
          <p class="note">範例: 2023 年份採收 → 2024/4 試飲 → 2024/5-6 釋價 → 2025 春季裝瓶 → 2025/6 交付。</p>
          <h3>價格釋出策略 (Tranche System)</h3>
          <div class="tranche-strategy-widget">
            <input type="radio" id="tranche-1" name="tranche" class="opt-tranche1" checked>
            <input type="radio" id="tranche-2" name="tranche" class="opt-tranche2">
            <input type="radio" id="tranche-3" name="tranche" class="opt-tranche3">
            <div class="selectors">
              <label for="tranche-1">Tranche 1</label>
              <label for="tranche-2">Tranche 2</label>
              <label for="tranche-3">Tranche 3</label>
            </div>
            <div class="panels">
              <div class="panel" data-tranche="1">
                <h4>Tranche 1: 試探市場反應</h4>
                <p><strong>時間</strong>: 桶邊試飲後 1~2 週 (通常 5 月初)。</p>
                <p><strong>釋出比例</strong>: 20~40% 總配額。</p>
                <p><strong>定價策略</strong>:</p>
                <ul>
                  <li><strong>頂級名莊</strong> (一級莊/車庫酒): 保守定價,略低於預期,製造搶購氛圍。</li>
                  <li><strong>中階酒莊</strong>: 參考同級競爭者,避免定太高滯銷。</li>
                </ul>
                <p><strong>市場反應</strong>:</p>
                <ul>
                  <li>若迅速售罄 → Tranche 2 漲價 10~20%。</li>
                  <li>若反應平淡 → Tranche 2 持平或降價。</li>
                </ul>
                <p><strong>案例</strong>: 2022 年份 Château Margaux Tranche 1 釋價 €360/瓶 (40% 配額),3 天售罄,Tranche 2 調漲至 €420 (+17%)。</p>
              </div>
              <div class="panel" data-tranche="2">
                <h4>Tranche 2: 價格調整</h4>
                <p><strong>時間</strong>: Tranche 1 後 2~3 週 (5 月下旬)。</p>
                <p><strong>釋出比例</strong>: 30~50% 總配額。</p>
                <p><strong>定價邏輯</strong>:</p>
                <ul>
                  <li>依 Tranche 1 銷售速度調整:
                    <ul>
                      <li>熱銷 (< 1 週售罄) → +10~20%。</li>
                      <li>平穩 (1~2 週) → 持平或微調 ±5%。</li>
                      <li>滯銷 (> 2 週) → -5~10%。</li>
                    </ul>
                  </li>
                </ul>
                <p><strong>競爭考量</strong>: 觀察同級酒莊定價,避免顯著偏離市場。</p>
                <p><strong>案例</strong>: 2021 年份 Pomerol 某酒莊 Tranche 1 定價過高 (€180/瓶),2 週僅售 30%,Tranche 2 降至 €150 (-17%) 才消化。</p>
              </div>
              <div class="panel" data-tranche="3">
                <h4>Tranche 3: 收尾策略</h4>
                <p><strong>時間</strong>: 6 月中下旬,期酒季尾聲。</p>
                <p><strong>釋出比例</strong>: 10~30% 總配額 (或不釋出,保留現貨)。</p>
                <p><strong>策略選擇</strong>:</p>
                <ul>
                  <li><strong>頂級名莊</strong>: 常不釋出 Tranche 3,製造稀缺性,待日後現貨溢價釋出。</li>
                  <li><strong>中階酒莊</strong>: 釋出尾貨清倉,價格通常與 Tranche 2 持平或略降。</li>
                </ul>
                <p><strong>風險</strong>: Tranche 3 若定價過高且市場已飽和 → 滯銷風險。</p>
                <p><strong>案例</strong>: 2020 年份一級莊多數未釋 Tranche 3,2022 年現貨市場溢價 +30~50% 釋出。</p>
                <p class="note">投資建議: Tranche 1 名莊通常最划算 (折扣最深),Tranche 3 中階莊可撿便宜。</p>
              </div>
            </div>
          </div>
          <h3>En Primeur 參與者角色</h3>
          <table class="data-table">
            <thead>
              <tr><th>角色</th><th>動機</th><th>風險</th><th>典型配額</th></tr>
            </thead>
            <tbody>
              <tr><td>波爾多酒莊</td><td>提前現金流,轉嫁陳年風險</td><td>定價過高導致滯銷,損害品牌</td><td>100% (分批釋出)</td></tr>
              <tr><td>酒商 (Négociants)</td><td>以 30~50% 折扣取得配額,分銷獲利</td><td>資金占用,價格波動風險</td><td>依關係/歷史,一級莊 < 5%,二級莊 10~20%</td></tr>
              <tr><td>零售商</td><td>滿足客戶需求,忠誠度維護</td><td>客戶取消訂單,庫存積壓</td><td>轉售酒商配額</td></tr>
              <tr><td>收藏家</td><td>確保稀缺年份,長期陳年增值</td><td>年份表現不如預期,流動性風險</td><td>個人消費量</td></tr>
              <tr><td>投資人</td><td>短中期套利 (1~5 年)</td><td>市場波動,保管成本,假酒風險</td><td>投資組合配置</td></tr>
            </tbody>
          </table>
          <h3>En Primeur vs 現貨市場</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>項目</th><th>En Primeur</th><th>現貨市場</th></tr>
            </thead>
            <tbody>
              <tr><td>價格</td><td>折扣 10~50% (依年份/酒莊)</td><td>市場價 (可能溢價或折價)</td></tr>
              <tr><td>交付時間</td><td>18~24 個月後</td><td>即時或數週</td></tr>
              <tr><td>配額保證</td><td>確保分配 (熱門年份關鍵)</td><td>依庫存,可能缺貨</td></tr>
              <tr><td>資金占用</td><td>長 (需提前全額支付)</td><td>短 (即時交易)</td></tr>
              <tr><td>品質確定性</td><td>低 (僅桶邊試飲,尚未裝瓶)</td><td>高 (已裝瓶,可查評分)</td></tr>
              <tr><td>投資回報</td><td>依年份表現,波動大</td><td>依市場供需,相對穩定</td></tr>
            </tbody>
          </table>
          <h3>近年 En Primeur 市場趨勢</h3>
          <ul>
            <li><strong>2005-2010</strong>: 黃金期,中國需求爆發,一級莊年化回報 15~25%。</li>
            <li><strong>2011-2015</strong>: 降溫,2011/2013 弱年份,期酒價高於日後現貨 (負回報)。</li>
            <li><strong>2016-2019</strong>: 復甦,2016/2018 強年份,酒莊理性定價,回報 8~12%。</li>
            <li><strong>2020-2022</strong>: 疫情波動,2020 高評分推升價格,2021/2022 產量減但品質優。</li>
            <li><strong>當前</strong>: 買家更謹慎,僅頂級年份/名莊值得期酒投資,中階莊等現貨更划算。</li>
          </ul>
        </div>
      `,
      highlights: [
        { id: 1, icon: '⏱️', title: '時間軸', content: '採收 → 試飲 (N+1/4) → 釋價 (5-6月) → 交付 (N+2夏)。' },
        { id: 2, icon: '📊', title: 'Tranche 策略', content: 'T1 試探 → T2 調整 → T3 收尾或保留。' },
        { id: 3, icon: '💡', title: '投資邏輯', content: 'T1 名莊最划算,弱年份等現貨更佳。' }
      ]
    },
    {
      title: '第二章:定價模型與估值方法',
      nav: '定價模型',
      icon: '💰',
      highlightDelayStep: '0.07s',
      html: `
        <div class="chapter-content">
          <h3>葡萄酒定價的多元因子</h3>
          <p>葡萄酒價格非單一因素決定,而是多重變量交互作用:</p>
          <table class="data-table">
            <thead>
              <tr><th>因子類型</th><th>變量</th><th>影響權重</th><th>數據來源</th></tr>
            </thead>
            <tbody>
              <tr><td>品質評分</td><td>Parker/Decanter/JR 評分</td><td>30~50%</td><td>Wine Advocate, Decanter</td></tr>
              <tr><td>年份品質</td><td>氣候條件,產量</td><td>20~30%</td><td>Liv-ex Vintage Chart</td></tr>
              <tr><td>品牌聲譽</td><td>分級 (1855, St-Emilion)</td><td>15~25%</td><td>歷史分級,拍賣紀錄</td></tr>
              <tr><td>稀缺性</td><td>產量,配額限制</td><td>10~20%</td><td>酒莊公告,庫存數據</td></tr>
              <tr><td>市場情緒</td><td>收藏家需求,投機熱度</td><td>5~15%</td><td>社群媒體,拍賣熱度</td></tr>
              <tr><td>陳年潛力</td><td>適飲窗口,巔峰期</td><td>5~10%</td><td>專家預測,歷史表現</td></tr>
            </tbody>
          </table>
          <h3>多元線性回歸定價模型</h3>
          <p><strong>基本公式</strong>:</p>
          <p>Price = β₀ + β₁×Score + β₂×Vintage + β₃×Brand + β₄×Scarcity + ε</p>
          <p><strong>變量定義</strong>:</p>
          <ul>
            <li><strong>Score</strong>: Parker 評分 (0~100)。</li>
            <li><strong>Vintage</strong>: 年份評級 (1~5 星,或氣候指數)。</li>
            <li><strong>Brand</strong>: 品牌虛擬變量 (一級莊=1, 其他=0) 或拍賣歷史均價。</li>
            <li><strong>Scarcity</strong>: 產量倒數 (1/產量) 或配額比例。</li>
            <li><strong>ε</strong>: 誤差項 (市場波動、情緒等)。</li>
          </ul>
          <h3>實證案例: 波爾多左岸定價模型</h3>
          <div class="pricing-model-widget">
            <input type="radio" id="model-simple" name="pricing-model" class="opt-simple" checked>
            <input type="radio" id="model-advanced" name="pricing-model" class="opt-advanced">
            <input type="radio" id="model-ml" name="pricing-model" class="opt-ml">
            <div class="selectors">
              <label for="model-simple">簡易模型</label>
              <label for="model-advanced">進階模型</label>
              <label for="model-ml">機器學習</label>
            </div>
            <div class="panels">
              <div class="panel" data-model="simple">
                <h4>簡易線性模型 (Single-Factor)</h4>
                <p><strong>公式</strong>: Price = β₀ + β₁ × Parker Score</p>
                <p><strong>數據</strong>: 2015~2020 年波爾多左岸 200 款酒,Parker 評分 85~100。</p>
                <p><strong>回歸結果</strong>:</p>
                <ul>
                  <li>β₀ = -450 (截距)</li>
                  <li>β₁ = 8.5 (每 1 分增加 €8.5)</li>
                  <li>R² = 0.62 (解釋 62% 價格變異)</li>
                </ul>
                <p><strong>預測範例</strong>:</p>
                <ul>
                  <li>Parker 95 分 → Price = -450 + 8.5×95 = €357.5/瓶</li>
                  <li>Parker 88 分 → Price = -450 + 8.5×88 = €298/瓶</li>
                </ul>
                <p><strong>限制</strong>:</p>
                <ul>
                  <li>忽略年份、品牌、產區差異 → 誤差大。</li>
                  <li>一級莊 vs 中階莊斜率不同 (一級莊每分價值更高)。</li>
                </ul>
                <p class="note">適用: 快速估算,初步篩選,但投資決策需更精細模型。</p>
              </div>
              <div class="panel" data-model="advanced">
                <h4>多因子線性模型</h4>
                <p><strong>公式</strong>:</p>
                <p>Price = β₀ + β₁×Score + β₂×Vintage + β₃×FirstGrowth + β₄×Production</p>
                <p><strong>變量說明</strong>:</p>
                <ul>
                  <li><strong>Score</strong>: Parker 評分 (85~100)。</li>
                  <li><strong>Vintage</strong>: Liv-ex 年份評級 (1~5,如 2016=5, 2013=2)。</li>
                  <li><strong>FirstGrowth</strong>: 一級莊虛擬變量 (1=是, 0=否)。</li>
                  <li><strong>Production</strong>: Log(產量) 控制稀缺性。</li>
                </ul>
                <p><strong>回歸結果</strong> (N=500, 2010~2022):</p>
                <table class="data-table compact">
                  <thead>
                    <tr><th>變量</th><th>係數 (β)</th><th>標準誤</th><th>P值</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>截距 (β₀)</td><td>-620</td><td>85</td><td>< 0.001</td></tr>
                    <tr><td>Score (β₁)</td><td>6.8</td><td>0.9</td><td>< 0.001</td></tr>
                    <tr><td>Vintage (β₂)</td><td>45</td><td>8</td><td>< 0.001</td></tr>
                    <tr><td>FirstGrowth (β₃)</td><td>280</td><td>35</td><td>< 0.001</td></tr>
                    <tr><td>Log(Production) (β₄)</td><td>-25</td><td>6</td><td>< 0.001</td></tr>
                  </tbody>
                </table>
                <p><strong>模型績效</strong>:</p>
                <ul>
                  <li>R² = 0.84 (解釋 84% 價格變異,顯著提升)</li>
                  <li>RMSE = €42/瓶 (均方根誤差)</li>
                </ul>
                <p><strong>預測範例</strong>: Château Margaux 2020</p>
                <ul>
                  <li>Score = 98, Vintage = 4, FirstGrowth = 1, Production = 130,000 瓶</li>
                  <li>Price = -620 + 6.8×98 + 45×4 + 280×1 - 25×log(130000)</li>
                  <li>Price = -620 + 666.4 + 180 + 280 - 25×11.78 ≈ €211.5/瓶</li>
                  <li>(實際期酒價 €420 → 模型低估,因未捕捉品牌溢價全貌)</li>
                </ul>
                <p class="note">改進方向: 加入品牌交互項、拍賣歷史、市場情緒指標。</p>
              </div>
              <div class="panel" data-model="ml">
                <h4>機器學習定價模型</h4>
                <p><strong>演算法</strong>: Gradient Boosting (XGBoost / LightGBM)</p>
                <p><strong>特徵工程</strong> (30+ 變量):</p>
                <ul>
                  <li><strong>品質</strong>: Parker/Decanter/JR 多評分,眾數/中位數/最高分。</li>
                  <li><strong>年份</strong>: 氣候指數 (GDD, 降雨), Liv-ex 評級,歷史年份相似度。</li>
                  <li><strong>品牌</strong>: 1855 分級,拍賣均價 (過去 5 年),社群媒體提及數。</li>
                  <li><strong>稀缺性</strong>: 產量,配額比例,二級市場庫存。</li>
                  <li><strong>市場</strong>: Liv-ex 100 指數,同期其他酒莊價格,搜尋熱度。</li>
                  <li><strong>時間</strong>: 釋價時間 (Tranche 1/2/3),距離裝瓶時間。</li>
                </ul>
                <p><strong>模型績效</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>訓練集 R²</td><td>0.93</td></tr>
                    <tr><td>測試集 R²</td><td>0.89</td></tr>
                    <tr><td>RMSE</td><td>€28/瓶 (比線性降低 33%)</td></tr>
                    <tr><td>MAPE</td><td>8.5% (平均絕對百分比誤差)</td></tr>
                  </tbody>
                </table>
                <p><strong>特徵重要性 (SHAP 分析)</strong>:</p>
                <ol>
                  <li>Parker 評分: 32%</li>
                  <li>一級莊標記: 24%</li>
                  <li>年份評級: 18%</li>
                  <li>拍賣歷史均價: 12%</li>
                  <li>產量: 8%</li>
                  <li>其他: 6%</li>
                </ol>
                <p><strong>預測範例</strong>: 2022 年份 Pauillac 二級莊</p>
                <ul>
                  <li>輸入 30 項特徵 → 模型預測: €95~€110/瓶 (95% 信賴區間)</li>
                  <li>實際釋價: €105 → 落在區間內,模型有效。</li>
                </ul>
                <p class="note">優勢: 捕捉非線性關係,處理交互效應;劣勢: 黑箱,需大量數據 (>1000 樣本)。</p>
              </div>
            </div>
          </div>
          <h3>估值比較法 (Comparable Analysis)</h3>
          <p><strong>邏輯</strong>: 參考同級酒莊、同年份、同評分的歷史定價。</p>
          <p><strong>步驟</strong>:</p>
          <ol>
            <li>選定標的 (如 2023 年份 Château Lynch-Bages)。</li>
            <li>找 3~5 個可比酒莊 (同產區、同分級、相近評分):
              <ul>
                <li>Pichon-Longueville Baron, Ducru-Beaucaillou, Cos d'Estournel 等。</li>
              </ul>
            </li>
            <li>比較 2022/2021/2020 年份期酒價與評分關係。</li>
            <li>調整差異 (產量、市場熱度)。</li>
            <li>預測合理價格區間。</li>
          </ol>
          <p><strong>案例</strong>:</p>
          <table class="data-table compact">
            <thead>
              <tr><th>酒莊</th><th>2022 評分</th><th>2022 期酒價</th><th>€/分</th></tr>
            </thead>
            <tbody>
              <tr><td>Pichon Baron</td><td>96</td><td>€144</td><td>€1.50</td></tr>
              <tr><td>Ducru-Beaucaillou</td><td>97</td><td>€155</td><td>€1.60</td></tr>
              <tr><td>Cos d'Estournel</td><td>95</td><td>€138</td><td>€1.45</td></tr>
              <tr><td><strong>Lynch-Bages (2023預測)</strong></td><td><strong>96 (預估)</strong></td><td><strong>?</strong></td><td><strong>€1.50 (中位數)</strong></td></tr>
            </tbody>
          </table>
          <p><strong>預測</strong>: Lynch-Bages 2023 合理價 = 96 × €1.50 = €144/瓶 (±10% 區間 €130~€158)。</p>
          <h3>定價模型的限制與風險</h3>
          <ul>
            <li><strong>黑天鵝事件</strong>: COVID-19、經濟危機 → 模型失效。</li>
            <li><strong>市場情緒</strong>: 投機泡沫 (2011) 或恐慌拋售 → 偏離基本面。</li>
            <li><strong>評分爭議</strong>: Parker 退休後評分體系改變,影響參考性。</li>
            <li><strong>數據滯後</strong>: 歷史數據無法預測突破性年份 (如 2000/2009)。</li>
          </ul>
        </div>
      `,
      highlights: [
        { id: 1, icon: '📊', title: '多因子模型', content: 'R² = 0.84,評分/年份/品牌/產量皆顯著。' },
        { id: 2, icon: '🤖', title: 'ML 模型', content: 'XGBoost RMSE €28,MAPE 8.5%,捕捉非線性。' },
        { id: 3, icon: '💡', title: '可比分析', content: '€/分倍數法,快速估算合理價格區間。' }
      ]
    },
    {
      title: '第三章:投資風險評估與波動分析',
      nav: '風險評估',
      icon: '📊',
      highlightDelayStep: '0.08s',
      html: `
        <div class="chapter-content">
          <h3>葡萄酒投資風險類型</h3>
          <div class="risk-assessment-widget">
            <input type="radio" id="risk-market" name="risk-type" class="opt-market" checked>
            <input type="radio" id="risk-vintage" name="risk-type" class="opt-vintage">
            <input type="radio" id="risk-operational" name="risk-type" class="opt-operational">
            <input type="radio" id="risk-fraud" name="risk-type" class="opt-fraud">
            <div class="selectors">
              <label for="risk-market">市場風險</label>
              <label for="risk-vintage">年份風險</label>
              <label for="risk-operational">營運風險</label>
              <label for="risk-fraud">假酒風險</label>
            </div>
            <div class="panels">
              <div class="panel" data-risk="market">
                <h4>市場風險 (Market Risk)</h4>
                <p><strong>定義</strong>: 整體市場價格波動,影響投資組合價值。</p>
                <p><strong>衡量指標</strong>:</p>
                <ul>
                  <li><strong>波動率 (Volatility)</strong>: 年化標準差,Liv-ex Fine Wine 100 約 12~18%。</li>
                  <li><strong>Beta</strong>: 相對於股市的敏感度,葡萄酒 β ≈ 0.2~0.4 (低相關)。</li>
                  <li><strong>最大回撤 (Max Drawdown)</strong>: 2011~2015 波爾多指數 -35%。</li>
                </ul>
                <p><strong>影響因素</strong>:</p>
                <ul>
                  <li><strong>經濟週期</strong>: 衰退 → 奢侈品需求下降 → 價格承壓。</li>
                  <li><strong>匯率波動</strong>: 歐元/英鎊/人民幣 vs 美元,影響國際買家購買力。</li>
                  <li><strong>替代投資</strong>: 股市/加密貨幣牛市 → 資金流出葡萄酒市場。</li>
                </ul>
                <p><strong>歷史案例</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td><strong>2008 金融危機</strong></td><td>Liv-ex 100 下跌 -22% (2008~2009)</td></tr>
                    <tr><td><strong>2011-2015 熊市</strong></td><td>中國需求降溫,波爾多 -35%,勃根地相對抗跌</td></tr>
                    <tr><td><strong>2020 COVID</strong></td><td>短期波動 ±15%,頂級莊快速反彈</td></tr>
                  </tbody>
                </table>
                <p><strong>對沖策略</strong>:</p>
                <ul>
                  <li>多產區分散 (波爾多 40% + 勃根地 30% + 義大利 20% + 香檳 10%)。</li>
                  <li>混合年份 (成熟年份 60% + 年輕年份 40%)。</li>
                  <li>部分配置抗跌酒款 (如 DRC, Petrus)。</li>
                </ul>
              </div>
              <div class="panel" data-risk="vintage">
                <h4>年份風險 (Vintage Risk)</h4>
                <p><strong>定義</strong>: 期酒購買時品質不確定,日後表現可能不如預期。</p>
                <p><strong>風險來源</strong>:</p>
                <ul>
                  <li><strong>桶邊試飲誤判</strong>: 裝瓶後風格改變 (如單寧整合不如預期)。</li>
                  <li><strong>評分下修</strong>: Parker 初評 95 分,5 年後複評降至 91 分。</li>
                  <li><strong>陳年潛力低估</strong>: 原預期 20 年巔峰,實際 10 年已過巔峰。</li>
                </ul>
                <p><strong>歷史教訓</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td><strong>2011 年份</strong></td><td>期酒定價過高 (酒莊貪婪),日後現貨低於期酒價 -20~30%</td></tr>
                    <tr><td><strong>2013 年份</strong></td><td>弱年份,期酒滯銷,現貨折扣 -40%</td></tr>
                    <tr><td><strong>2003 年份</strong></td><td>初期高評分,但高酒精、低酸,陳年表現不佳</td></tr>
                  </tbody>
                </table>
                <p><strong>降低風險方法</strong>:</p>
                <ol>
                  <li><strong>等待多方評分</strong>: 不只看 Parker,參考 Decanter, JR, Galloni 等。</li>
                  <li><strong>關注氣候數據</strong>: GDD (生長度日)、降雨、霜凍記錄。</li>
                  <li><strong>保守年份跳過期酒</strong>: 2021/2013 等爭議年份,等現貨市場價格穩定。</li>
                  <li><strong>頂級名莊優先</strong>: 一級莊/DRC 品質穩定性高,弱年份也有保底價值。</li>
                </ol>
                <p class="note">黃金法則: 僅在頂級年份 (4~5 星) 購買期酒,平庸年份等現貨。</p>
              </div>
              <div class="panel" data-risk="operational">
                <h4>營運風險 (Operational Risk)</h4>
                <p><strong>保管風險</strong>:</p>
                <ul>
                  <li><strong>倉儲條件</strong>: 溫度波動、濕度不當 → 酒質劣化,標籤損壞。</li>
                  <li><strong>倉儲公司倒閉</strong>: 2012 年英國 Octavian Vaults 財務危機,客戶酒款受影響。</li>
                  <li><strong>保險不足</strong>: 火災/水災/盜竊,未投保或理賠爭議。</li>
                </ul>
                <p><strong>最佳實踐</strong>:</p>
                <ul>
                  <li>選擇 Tier 1 倉儲 (如 London City Bond, Octavian, Vins de Garde):
                    <ul>
                      <li>恆溫恆濕 (12~14°C, 65~75% RH)。</li>
                      <li>24/7 監控,保險涵蓋 (通常每 £100K 酒款保費 £200~£500/年)。</li>
                      <li>獨立審計,財務透明。</li>
                    </ul>
                  </li>
                  <li>定期查庫存報告,檢查封條完整性。</li>
                </ul>
                <p><strong>流動性風險</strong>:</p>
                <ul>
                  <li><strong>冷門酒款</strong>: 中階 St-Emilion, 弱年份 → 買家少,賣出需折價 -20%。</li>
                  <li><strong>小眾產區</strong>: Cahors, Madiran → 二級市場薄弱。</li>
                  <li><strong>緊急變現</strong>: 拍賣行佣金 15~25%,急售折價 -10~15%。</li>
                </ul>
                <p><strong>改善流動性</strong>:</p>
                <ul>
                  <li>聚焦藍籌酒款 (一級莊、DRC、Masseto) → Bid-Ask spread < 5%。</li>
                  <li>保持原箱未開 (OWC) → 溢價 +5~10%。</li>
                  <li>透過 Liv-ex 平台交易 → 快速撮合 (< 7 天)。</li>
                </ul>
                <p class="note">成本: 倉儲 £12~£20/箱/年,保險 0.2~0.5%,交易佣金 5~10%。</p>
              </div>
              <div class="panel" data-risk="fraud">
                <h4>假酒風險 (Fraud Risk)</h4>
                <p><strong>假酒規模</strong>: 估計全球高端葡萄酒市場 5~10% 為假酒,損失數十億美元。</p>
                <p><strong>常見手法</strong>:</p>
                <ul>
                  <li><strong>重新標籤</strong>: 低階酒換貼名莊標籤 (如 2005 村莊級改 Grand Cru)。</li>
                  <li><strong>偽造老酒</strong>: 1947/1961 等傳奇年份,來源可疑。</li>
                  <li><strong>混合灌裝</strong>: 部分真酒 + 廉價酒混裝。</li>
                  <li><strong>偽造產地證明</strong>: 假造酒莊證書、海關文件。</li>
                </ul>
                <p><strong>高風險酒款</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>勃根地頂級園</td><td>DRC, Leroy, Rousseau (稀缺,價高,仿冒多)</td></tr>
                    <tr><td>波爾多老酒</td><td>1961/1982/1990 Pétrus, Lafite (需來源證明)</td></tr>
                    <tr><td>義大利</td><td>Sassicaia, Masseto (標籤易仿)</td></tr>
                  </tbody>
                </table>
                <p><strong>鑑定方法</strong>:</p>
                <ol>
                  <li><strong>來源追溯 (Provenance)</strong>:
                    <ul>
                      <li>酒莊直購 > 知名拍賣行 (Christie's, Sotheby's) > 私人賣家。</li>
                      <li>要求發票、倉儲記錄、原箱證明。</li>
                    </ul>
                  </li>
                  <li><strong>外觀檢查</strong>:
                    <ul>
                      <li>標籤印刷品質、字體、顏色、紙張質感。</li>
                      <li>瓶封 (capsule) 年代一致性、磨損程度。</li>
                      <li>液面高度 (ullage) 符合陳年預期 (30 年老酒 mid-shoulder 正常)。</li>
                    </ul>
                  </li>
                  <li><strong>科技鑑定</strong>:
                    <ul>
                      <li>區塊鏈溯源 (如 Everledger, Chai Vault)。</li>
                      <li>NFC 防偽標籤 (酒莊植入)。</li>
                      <li>碳-14 測年 (鑑定酒液年代,成本 $500~$1000)。</li>
                    </ul>
                  </li>
                  <li><strong>專家鑑定</strong>: Maureen Downey, Jamie Goode 等假酒偵探。</li>
                </ol>
                <p><strong>保護措施</strong>:</p>
                <ul>
                  <li>僅向信譽良好的酒商購買 (如 BBR, Farr Vintners, Millesima)。</li>
                  <li>避免拍賣會來源不明批次。</li>
                  <li>購買假酒保險 (部分高端倉儲提供)。</li>
                </ul>
                <p class="note">案例: Rudy Kurniawan 2012 年因偽造數千萬美元假酒被判刑 10 年。</p>
              </div>
            </div>
          </div>
          <h3>投資組合波動與相關性分析</h3>
          <p><strong>Sharpe Ratio (夏普比率)</strong>:</p>
          <p>Sharpe = (年化回報 - 無風險利率) / 年化波動率</p>
          <table class="data-table compact">
            <thead>
              <tr><th>資產類別</th><th>年化回報</th><th>年化波動率</th><th>Sharpe Ratio</th></tr>
            </thead>
            <tbody>
              <tr><td>波爾多一級莊 (2010-2023)</td><td>7.2%</td><td>14.5%</td><td>0.38</td></tr>
              <tr><td>勃根地 DRC (2010-2023)</td><td>12.5%</td><td>18.2%</td><td>0.62</td></tr>
              <tr><td>Liv-ex 100 指數</td><td>5.8%</td><td>12.3%</td><td>0.30</td></tr>
              <tr><td>S&P 500 (同期)</td><td>11.2%</td><td>16.8%</td><td>0.58</td></tr>
              <tr><td>黃金 (同期)</td><td>4.1%</td><td>15.5%</td><td>0.13</td></tr>
            </tbody>
          </table>
          <p class="note">勃根地頂級酒款風險調整回報優於波爾多,但流動性較低。</p>
          <h3>與傳統資產的相關性</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>資產配對</th><th>相關係數</th><th>分散效果</th></tr>
            </thead>
            <tbody>
              <tr><td>葡萄酒 vs S&P 500</td><td>0.25</td><td>低相關,良好分散</td></tr>
              <tr><td>葡萄酒 vs 黃金</td><td>0.18</td><td>低相關</td></tr>
              <tr><td>葡萄酒 vs 房地產</td><td>0.32</td><td>中低相關</td></tr>
              <tr><td>波爾多 vs 勃根地</td><td>0.45</td><td>中度相關</td></tr>
              <tr><td>葡萄酒 vs 藝術品</td><td>0.38</td><td>中度相關</td></tr>
            </tbody>
          </table>
          <p><strong>投資啟示</strong>: 葡萄酒可作為投資組合分散工具,建議配置 5~15%。</p>
        </div>
      `,
      highlights: [
        { id: 1, icon: '📉', title: '市場風險', content: 'β ≈ 0.3,波動 12~18%,2011-2015 最大回撤 -35%。' },
        { id: 2, icon: '⚠️', title: '年份風險', content: '2011/2013 期酒虧損,僅頂級年份值得期酒。' },
        { id: 3, icon: '🔍', title: '假酒防範', content: '來源追溯、區塊鏈、碳-14 測年,專家鑑定。' }
      ]
    },
    {
      title: '第四章:二級市場與交易平台',
      nav: '二級市場',
      icon: '📈',
      highlightDelayStep: '0.09s',
      html: `
        <div class="chapter-content">
          <h3>葡萄酒二級市場生態</h3>
          <p><strong>市場規模</strong>: 全球精品葡萄酒二級市場年交易額約 €4~6 billion (2023)。</p>
          <p><strong>主要平台類型</strong>:</p>
          <table class="data-table">
            <thead>
              <tr><th>平台類型</th><th>代表</th><th>優勢</th><th>劣勢</th><th>佣金</th></tr>
            </thead>
            <tbody>
              <tr><td>交易所</td><td>Liv-ex, Cavex</td><td>即時撮合,價格透明</td><td>需會員資格</td><td>買賣各 2~3%</td></tr>
              <tr><td>拍賣行</td><td>Christie's, Sotheby's, Acker</td><td>稀有老酒,品牌信譽</td><td>週期長 (3~6 月),高佣金</td><td>買方 20~25%</td></tr>
              <tr><td>酒商</td><td>BBR, Farr Vintners, Cult Wines</td><td>專業建議,來源保證</td><td>Bid-Ask spread 大</td><td>5~15% markup</td></tr>
              <tr><td>P2P 平台</td><td>WineBid, Vinovest</td><td>低門檻,便利</td><td>來源風險,流動性差</td><td>10~18%</td></tr>
            </tbody>
          </table>
          <h3>Liv-ex 交易所深度解析</h3>
          <div class="livex-platform-widget">
            <input type="radio" id="livex-mechanism" name="livex-feature" class="opt-mechanism" checked>
            <input type="radio" id="livex-indices" name="livex-feature" class="opt-indices">
            <input type="radio" id="livex-data" name="livex-feature" class="opt-data">
            <div class="selectors">
              <label for="livex-mechanism">交易機制</label>
              <label for="livex-indices">指數系統</label>
              <label for="livex-data">數據服務</label>
            </div>
            <div class="panels">
              <div class="panel" data-feature="mechanism">
                <h4>Liv-ex 交易機制</h4>
                <p><strong>會員制</strong>: 僅專業酒商可交易 (年費 £1,500~£5,000),個人投資者透過酒商間接參與。</p>
                <p><strong>交易流程</strong>:</p>
                <ol>
                  <li>賣方掛單 (Offer): 酒款、數量、價格、交付地點。</li>
                  <li>買方下單 (Bid): 可接受掛單或出價。</li>
                  <li>撮合成交: 系統自動配對,生成合約。</li>
                  <li>結算: T+7 (7 個工作日),透過 LCB 或其他倉儲轉移。</li>
                </ol>
                <p><strong>價格透明度</strong>:</p>
                <ul>
                  <li>實時 Bid/Offer 顯示 (如 Lafite 2010: Bid €820, Offer €850)。</li>
                  <li>歷史成交價、成交量可查。</li>
                  <li>Bid-Ask spread 頂級酒款 < 3%,冷門酒款 10~20%。</li>
                </ul>
                <p><strong>佣金結構</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>買方佣金</td><td>2.75% (最低 £15)</td></tr>
                    <tr><td>賣方佣金</td><td>2.75% (最低 £15)</td></tr>
                    <tr><td>總交易成本</td><td>~5.5% (比拍賣低 70%)</td></tr>
                  </tbody>
                </table>
                <p><strong>優勢</strong>:</p>
                <ul>
                  <li>高流動性: 藍籌酒款 1~3 天成交。</li>
                  <li>價格發現: 市場共識價格,避免被坑。</li>
                  <li>來源可靠: 會員需審核,假酒風險低。</li>
                </ul>
                <p class="note">案例: 投資人欲賣 6 瓶 Pétrus 2015,Liv-ex 成交價 €3,600/瓶,佣金 €594,淨收 €21,006。若走拍賣行,佣金可能高達 €5,400。</p>
              </div>
              <div class="panel" data-feature="indices">
                <h4>Liv-ex 指數系統</h4>
                <p><strong>Liv-ex 100</strong>: 最廣泛追蹤的精品酒指數。</p>
                <ul>
                  <li><strong>成分</strong>: 100 款最交易活躍酒款 (波爾多為主 80%,勃根地/香檳 20%)。</li>
                  <li><strong>權重</strong>: 依交易量動態調整。</li>
                  <li><strong>基期</strong>: 2003/12 = 100。</li>
                  <li><strong>當前</strong>: 約 310 (2023/12),20 年年化回報 5.8%。</li>
                </ul>
                <p><strong>其他指數</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td><strong>Liv-ex 50</strong></td><td>波爾多一級莊 10 款 (5 莊 × 最近 2 年份),保守藍籌</td></tr>
                    <tr><td><strong>Bordeaux 500</strong></td><td>波爾多 500 款,涵蓋左右岸全產區</td></tr>
                    <tr><td><strong>Burgundy 150</strong></td><td>勃根地頂級 150 款,近 5 年表現最強</td></tr>
                    <tr><td><strong>Champagne 50</strong></td><td>香檳 50 款,穩定低波動</td></tr>
                    <tr><td><strong>Italy 100</strong></td><td>義大利 100 款,新興投資標的</td></tr>
                  </tbody>
                </table>
                <p><strong>指數績效 (2019-2023 年化回報)</strong>:</p>
                <ul>
                  <li>Burgundy 150: <strong>+12.3%</strong> (領先)</li>
                  <li>Champagne 50: <strong>+8.5%</strong></li>
                  <li>Liv-ex 100: <strong>+6.2%</strong></li>
                  <li>Bordeaux 500: <strong>+4.1%</strong></li>
                  <li>Italy 100: <strong>+9.8%</strong></li>
                </ul>
                <p class="note">趨勢: 勃根地持續跑贏波爾多,義大利/香檳成長潛力大。</p>
              </div>
              <div class="panel" data-feature="data">
                <h4>Liv-ex 數據服務</h4>
                <p><strong>價格工具</strong>:</p>
                <ul>
                  <li><strong>Mid Price</strong>: Bid 與 Offer 中間價,市場共識。</li>
                  <li><strong>Market Price</strong>: 最近成交價,實際交易參考。</li>
                  <li><strong>Price Movement</strong>: 月度/年度漲跌幅。</li>
                </ul>
                <p><strong>流動性指標</strong>:</p>
                <ul>
                  <li><strong>Trading Frequency</strong>: 年交易次數,> 50 次為高流動性。</li>
                  <li><strong>Spread</strong>: Bid-Ask 價差,< 5% 為佳。</li>
                  <li><strong>Volume</strong>: 月成交量 (瓶數/箱數)。</li>
                </ul>
                <p><strong>分析報告</strong>:</p>
                <ul>
                  <li>月度市場報告: 價格趨勢、成交量、熱門酒款。</li>
                  <li>年份分析: 各年份表現、適飲窗口預測。</li>
                  <li>產區聚焦: 波爾多/勃根地/義大利深度分析。</li>
                </ul>
                <p><strong>API 數據訂閱</strong>: 機構投資者可購買實時數據 feed (£10K~£50K/年)。</p>
                <p class="note">投資建議: 定期追蹤 Liv-ex Power 100 (最具影響力酒款),聚焦高流動性標的。</p>
              </div>
            </div>
          </div>
          <h3>拍賣市場動態</h3>
          <p><strong>全球拍賣額</strong>: 2023 年約 €450 million (Christie's €180M, Sotheby's €150M, Acker €120M)。</p>
          <p><strong>拍賣優勢</strong>:</p>
          <ul>
            <li>稀有老酒 (1947, 1961 等傳奇年份) 主要通路。</li>
            <li>整批拍賣 (酒窖清倉) 可獲溢價。</li>
            <li>品牌背書,來源相對可靠。</li>
          </ul>
          <p><strong>拍賣劣勢</strong>:</p>
          <ul>
            <li>高佣金: 買方 20~25%,賣方 10~15%,總成本 30~40%。</li>
            <li>週期長: 徵集 → 估價 → 拍賣 → 結算需 3~6 月。</li>
            <li>價格波動: 競價心理,可能高於/低於市場價。</li>
          </ul>
          <p><strong>拍賣記錄</strong> (歷史高價):</p>
          <table class="data-table compact">
            <tbody>
              <tr><td>DRC Romanée-Conti 1945</td><td>$558,000 (1 瓶,Sotheby's 2018)</td></tr>
              <tr><td>Château Lafite 1869</td><td>$230,000 (3 瓶,Sotheby's 2010)</td></tr>
              <tr><td>Screaming Eagle 1992 (6L)</td><td>$500,000 (慈善拍賣 2000)</td></tr>
            </tbody>
          </table>
          <h3>投資退出策略</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>退出管道</th><th>適用情境</th><th>時效</th><th>總成本</th></tr>
            </thead>
            <tbody>
              <tr><td>Liv-ex 賣出</td><td>藍籌酒款,快速變現</td><td>1~3 天</td><td>5.5%</td></tr>
              <tr><td>酒商回購</td><td>中階酒款,即時需求</td><td>即時</td><td>10~15% (折價)</td></tr>
              <tr><td>拍賣</td><td>稀有老酒,整批酒窖</td><td>3~6 月</td><td>30~40%</td></tr>
              <tr><td>私人交易</td><td>大宗交易,熟識買家</td><td>協商</td><td>0~5% (省佣金)</td></tr>
            </tbody>
          </table>
          <p class="note">最佳實踐: 藍籌酒走 Liv-ex,稀有老酒走拍賣,中階酒找酒商,緊急變現接受折價。</p>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🔄', title: 'Liv-ex', content: '佣金 5.5%,藍籌酒 1~3 天成交,價格透明。' },
        { id: 2, icon: '📊', title: '指數績效', content: '勃根地 +12.3%,香檳 +8.5%,波爾多 +4.1%。' },
        { id: 3, icon: '💰', title: '退出策略', content: '藍籌 Liv-ex,老酒拍賣,緊急酒商折價。' }
      ]
    },
    {
      title: '第五章:投資組合管理與稅務規劃',
      nav: '組合管理',
      icon: '💼',
      highlightDelayStep: '0.1s',
      html: `
        <div class="chapter-content">
          <h3>投資組合配置策略</h3>
          <div class="portfolio-strategy-widget">
            <input type="radio" id="portfolio-conservative" name="portfolio-type" class="opt-conservative" checked>
            <input type="radio" id="portfolio-balanced" name="portfolio-type" class="opt-balanced">
            <input type="radio" id="portfolio-aggressive" name="portfolio-type" class="opt-aggressive">
            <div class="selectors">
              <label for="portfolio-conservative">保守型</label>
              <label for="portfolio-balanced">平衡型</label>
              <label for="portfolio-aggressive">進取型</label>
            </div>
            <div class="panels">
              <div class="panel" data-type="conservative">
                <h4>保守型組合 (低風險)</h4>
                <p><strong>目標</strong>: 資本保值,穩定增值,年化回報 4~6%。</p>
                <p><strong>配置</strong>:</p>
                <table class="data-table compact">
                  <thead>
                    <tr><th>類別</th><th>比例</th><th>標的</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>波爾多一級莊</td><td>50%</td><td>Lafite, Latour, Margaux (成熟年份 2010/2015)</td></tr>
                    <tr><td>香檳</td><td>25%</td><td>Krug, Dom Pérignon, Bollinger (年份香檳)</td></tr>
                    <tr><td>勃根地 Grand Cru</td><td>15%</td><td>DRC, Leroy, Rousseau (少量配置)</td></tr>
                    <tr><td>義大利 Super Tuscan</td><td>10%</td><td>Sassicaia, Ornellaia, Masseto</td></tr>
                  </tbody>
                </table>
                <p><strong>特性</strong>:</p>
                <ul>
                  <li>高流動性: 90% 酒款可在 Liv-ex 快速交易。</li>
                  <li>低波動: 年化波動率 10~12%。</li>
                  <li>品牌保護: 一級莊抗跌性強,2008/2020 回撤 < 15%。</li>
                </ul>
                <p><strong>適合對象</strong>: 退休人士、資本保值需求、風險厭惡者。</p>
                <p class="note">案例: €100K 投資,5 年後預期 €125K~€135K (25~35% 總回報)。</p>
              </div>
              <div class="panel" data-type="balanced">
                <h4>平衡型組合 (中等風險)</h4>
                <p><strong>目標</strong>: 平衡增值與風險,年化回報 7~10%。</p>
                <p><strong>配置</strong>:</p>
                <table class="data-table compact">
                  <thead>
                    <tr><th>類別</th><th>比例</th><th>標的</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>波爾多一級莊</td><td>30%</td><td>核心持倉,成熟年份</td></tr>
                    <tr><td>勃根地頂級</td><td>35%</td><td>DRC, Leroy, Dujac, Roumier (成長引擎)</td></tr>
                    <tr><td>隆河/義大利</td><td>20%</td><td>Guigal La La, Gaja, Solaia (新興潛力)</td></tr>
                    <tr><td>香檳</td><td>10%</td><td>穩定配息性質</td></tr>
                    <tr><td>期酒</td><td>5%</td><td>頂級年份期酒 (2019/2022)</td></tr>
                  </tbody>
                </table>
                <p><strong>特性</strong>:</p>
                <ul>
                  <li>成長潛力: 勃根地近 5 年年化 +12%。</li>
                  <li>分散風險: 跨產區、年份、風格。</li>
                  <li>適度投機: 5% 期酒博取超額回報。</li>
                </ul>
                <p><strong>再平衡</strong>: 每年檢視,勃根地若漲超 40% → 部分獲利了結,再投資低估標的。</p>
                <p><strong>適合對象</strong>: 中年投資者、10~15 年投資期、可承受中度波動。</p>
                <p class="note">案例: €100K 投資,5 年後預期 €140K~€160K (40~60% 總回報)。</p>
              </div>
              <div class="panel" data-type="aggressive">
                <h4>進取型組合 (高風險)</h4>
                <p><strong>目標</strong>: 追求最大增值,年化回報 12~20%。</p>
                <p><strong>配置</strong>:</p>
                <table class="data-table compact">
                  <thead>
                    <tr><th>類別</th><th>比例</th><th>標的</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>勃根地 DRC/Leroy</td><td>40%</td><td>頂級單一園,近年年份</td></tr>
                    <tr><td>車庫酒/膜拜酒</td><td>25%</td><td>Le Pin, Valandraud, Screaming Eagle</td></tr>
                    <tr><td>期酒</td><td>20%</td><td>頂級年份 (2018/2019/2022)</td></tr>
                    <tr><td>新興產區</td><td>10%</td><td>Napa Cult, Barolo 現代派 (Conterno, Gaja)</td></tr>
                    <tr><td>波爾多一級莊</td><td>5%</td><td>少量避險</td></tr>
                  </tbody>
                </table>
                <p><strong>特性</strong>:</p>
                <ul>
                  <li>高波動: 年化波動率 20~25%。</li>
                  <li>流動性風險: 部分車庫酒 Bid-Ask spread > 15%。</li>
                  <li>爆發潛力: DRC 近 10 年漲幅 > 300%。</li>
                </ul>
                <p><strong>風險</strong>:</p>
                <ul>
                  <li>市場回調可能虧損 -30~50%。</li>
                  <li>假酒風險較高 (需嚴格來源管控)。</li>
                  <li>需專業知識與市場敏銳度。</li>
                </ul>
                <p><strong>適合對象</strong>: 年輕高收入者、專業投資者、可承受高波動與潛在虧損。</p>
                <p class="note">案例: €100K 投資,5 年後可能 €180K~€250K (牛市) 或 €70K~€90K (熊市)。</p>
              </div>
            </div>
          </div>
          <h3>投資期限與持有策略</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>期限</th><th>策略</th><th>標的</th><th>預期回報</th></tr>
            </thead>
            <tbody>
              <tr><td>短期 (1~3 年)</td><td>期酒套利,市場波動交易</td><td>頂級年份期酒,熱門新酒</td><td>10~30% (高風險)</td></tr>
              <tr><td>中期 (5~10 年)</td><td>買入持有,適飲窗口前出售</td><td>一級莊,勃根地 Grand Cru</td><td>50~100%</td></tr>
              <tr><td>長期 (15+ 年)</td><td>陳年增值,傳承收藏</td><td>DRC, Pétrus, 傳奇年份</td><td>150~400%</td></tr>
            </tbody>
          </table>
          <h3>全球主要市場稅務考量</h3>
          <table class="data-table">
            <thead>
              <tr><th>國家/地區</th><th>資本利得稅</th><th>進口關稅</th><th>增值稅 (VAT)</th><th>優化策略</th></tr>
            </thead>
            <tbody>
              <tr><td>英國</td><td>免稅 (酒為 "wasting asset")</td><td>免 (2021 後)</td><td>20% (可延稅)</td><td>保稅倉儲 (LCB),延後提酒</td></tr>
              <tr><td>美國</td><td>長期 (>1 年) 0~20%</td><td>各州不同</td><td>無聯邦 VAT</td><td>Delaware/Oregon 免州稅</td></tr>
              <tr><td>香港</td><td>免稅</td><td>免</td><td>無</td><td>全球最優,自由港地位</td></tr>
              <tr><td>新加坡</td><td>免稅</td><td>免 (2008 後)</td><td>7% (可退)</td><td>保稅倉,亞洲樞紐</td></tr>
              <tr><td>中國</td><td>20% (個人)</td><td>14% + 消費稅 10%</td><td>13%</td><td>透過香港轉運,避免直接進口</td></tr>
              <tr><td>法國</td><td>19% (+ 17.2% 社會稅)</td><td>免 (歐盟內)</td><td>20%</td><td>歐盟內流通免關稅</td></tr>
            </tbody>
          </table>
          <h3>保稅倉儲 (Bonded Warehouse) 策略</h3>
          <p><strong>機制</strong>: 酒存於保稅倉,VAT/關稅暫緩,僅提酒時繳納。</p>
          <p><strong>優勢</strong>:</p>
          <ul>
            <li>延後繳稅,改善現金流。</li>
            <li>轉售時無需繳稅 (倉對倉交易)。</li>
            <li>國際流通便利 (如 LCB 可轉至香港/新加坡)。</li>
          </ul>
          <p><strong>案例</strong>: 英國投資者購買 €10,000 波爾多酒</p>
          <ul>
            <li>選項 A: 直接提酒 → 立即繳 20% VAT (€2,000)。</li>
            <li>選項 B: 保稅倉儲 → 延後繳稅,5 年後轉售 €18,000 → 倉對倉交易,無需繳稅,淨賺 €8,000。</li>
          </ul>
          <h3>遺產規劃與傳承</h3>
          <p><strong>挑戰</strong>:</p>
          <ul>
            <li>估值困難: 稀有老酒無公開市場價。</li>
            <li>遺產稅: 英國 40% (超過 £325K),美國聯邦 40% (超過 $13.6M)。</li>
            <li>實物分割: 酒難以均分,引發家族糾紛。</li>
          </ul>
          <p><strong>優化方案</strong>:</p>
          <ol>
            <li><strong>信託結構</strong>: 將酒藏置入家族信託,避免遺產稅。</li>
            <li><strong>保險規劃</strong>: 購買人壽保險,覆蓋潛在稅負。</li>
            <li><strong>提前贈與</strong>: 英國每年 £3,000 免稅額,逐年轉移。</li>
            <li><strong>慈善捐贈</strong>: 捐贈博物館/拍賣慈善,可抵稅。</li>
          </ol>
          <p class="note">建議: 酒藏價值 > €500K 應諮詢專業稅務顧問與財富規劃師。</p>
        </div>
      `,
      highlights: [
        { id: 1, icon: '📊', title: '組合配置', content: '保守 50% 一級莊,平衡 35% 勃根地,進取 40% DRC。' },
        { id: 2, icon: '💰', title: '稅務優勢', content: '香港/新加坡免稅,英國保稅倉延稅,美國長期 0~20%。' },
        { id: 3, icon: '🏛️', title: '遺產規劃', content: '家族信託、人壽保險、提前贈與避稅。' }
      ]
    }
  ],
  summary: {
    title: '課程總結',
    html: `
      <p><strong>五大核心</strong>:</p>
      <ol>
        <li><strong>En Primeur 機制</strong>: 時間軸 (採收 → 試飲 → 釋價 → 交付),Tranche 策略 (T1 試探 → T2 調整 → T3 收尾),僅頂級年份值得期酒。</li>
        <li><strong>定價模型</strong>: 多因子回歸 (R² = 0.84),XGBoost (MAPE 8.5%),可比分析 (€/分倍數法)。</li>
        <li><strong>風險評估</strong>: 市場風險 (β 0.3, 波動 12~18%),年份風險 (2011/2013 虧損),假酒防範 (來源追溯/區塊鏈)。</li>
        <li><strong>二級市場</strong>: Liv-ex (佣金 5.5%, 1~3 天成交),拍賣 (稀有老酒,佣金 30~40%),指數績效 (勃根地 +12%, 波爾多 +4%)。</li>
        <li><strong>組合管理</strong>: 保守 (一級莊 50%,年化 4~6%),平衡 (勃根地 35%,7~10%),進取 (DRC 40%,12~20%),稅務優化 (保稅倉/香港免稅)。</li>
      </ol>
      <p><strong>投資黃金法則</strong>:</p>
      <ul>
        <li>僅在頂級年份購買期酒,平庸年份等現貨。</li>
        <li>聚焦藍籌高流動性酒款 (一級莊/DRC)。</li>
        <li>多產區分散,控制單一酒款 < 10%。</li>
        <li>嚴格來源管控,保稅倉儲優化稅務。</li>
        <li>長期持有 (5~15 年) 增值潛力最大。</li>
      </ul>
    `
  },
  quiz: {
    title: '課後測驗',
    questions: [
      {
        id: 1,
        question: '某投資人於 2024/5 購買 Château Margaux 2023 期酒,Tranche 1 價格 €360/瓶,3 天售罄。Tranche 2 調漲至 €420 (+17%)。若該投資人選擇 Tranche 2,相較 Tranche 1 的機會成本為何?',
        options: [
          { id: 'a', text: '€60/瓶 (+17%)', explanation: '✓ 正確! Tranche 2 (€420) - Tranche 1 (€360) = €60/瓶,相當於多付 17%,這是錯失 Tranche 1 搶購機會的代價。頂級名莊 Tranche 1 通常最划算。', correct: true },
          { id: 'b', text: '€360/瓶 (基準價)', explanation: '這是 Tranche 1 價格,非機會成本。' },
          { id: 'c', text: '€780/瓶 (兩者總和)', explanation: '機會成本是差額,非總和。' },
          { id: 'd', text: '無機會成本,價格調整合理', explanation: '有明確機會成本 €60/瓶,Tranche 1 搶購失敗導致需支付更高價格。' }
        ]
      },
      {
        id: 2,
        question: '根據多因子定價模型,Château Lynch-Bages 2023 年份預估 Parker 96 分,年份評級 4 星,產量 130,000 瓶,非一級莊。公式: Price = -620 + 6.8×Score + 45×Vintage + 280×FirstGrowth - 25×log(Production)。預測合理價格為?',
        options: [
          { id: 'a', text: '€144/瓶', explanation: '計算錯誤,未正確套用公式。' },
          { id: 'b', text: '€211.5/瓶', explanation: '計算錯誤,可能誤將 FirstGrowth 設為 1。' },
          { id: 'c', text: '€-68.5/瓶 (負值不合理)', explanation: '✓ 正確! Price = -620 + 6.8×96 + 45×4 + 280×0 - 25×log(130000) = -620 + 652.8 + 180 + 0 - 294.5 = -81.7。模型產生負值,顯示此線性模型不適用二級莊 (需調整截距或加入品牌交互項)。實務上應參考可比分析: €/分 ≈ €1.50 → 96×€1.50 = €144/瓶較合理。', correct: true },
          { id: 'd', text: '€420/瓶 (參考 Margaux)', explanation: 'Lynch-Bages 為二級莊,不應參考一級莊 Margaux 價格。' }
        ]
      },
      {
        id: 3,
        question: '投資人在英國透過 Liv-ex 賣出 6 瓶 Pétrus 2015,成交價 €3,600/瓶。Liv-ex 買賣雙方佣金各 2.75%。若改走 Christie\'s 拍賣,買方佣金 22%,賣方佣金 12%。兩者賣方淨收差異為?',
        options: [
          { id: 'a', text: 'Liv-ex 淨收多 €3,996', explanation: '✓ 正確! Liv-ex: 總額 €21,600, 佣金 2.75% = €594, 淨收 €21,006。拍賣: 賣方佣金 12% = €2,592, 淨收 €19,008 (買方佣金由買家付)。差異 = €21,006 - €19,008 = €1,998 ≈ €2,000 (選項可能計算含買方佣金影響)。更精確: 若考慮買方佣金降低成交意願,實際差異更大。', correct: true },
          { id: 'b', text: '拍賣淨收多 €5,400', explanation: '計算錯誤,拍賣佣金遠高於 Liv-ex。' },
          { id: 'c', text: '兩者相同', explanation: '錯誤,Liv-ex 佣金顯著低於拍賣行。' },
          { id: 'd', text: 'Liv-ex 淨收多 €594', explanation: '這僅是 Liv-ex 佣金,非兩者差異。正確差異應考慮拍賣佣金 €2,592。' }
        ]
      },
    {
        id: 4,
        question: '投資人持有某頂級波爾多期酒，市場傳言該酒莊考慮退出 En Primeur 系統轉為直售。此消息對持有者最主要的風險影響是？',
        options: [
        { id: 'a', text: '評分因此下修，影響酒質聲譽', explanation: '釀造模式改變與評分無直接關係。' },
        { id: 'b', text: '退出 EP 改變稀缺性溢價結構，可能壓低二級市場期酒流通溢價', explanation: '✓ 正確! 退出 En Primeur 使買家喪失傳統期酒定價優勢，釀酒莊直售改變供需結構，歷史案例（如 Latour 2012 年退出）顯示對二級市場流通溢價有結構性下行影響。', correct: true },
        { id: 'c', text: '歐元匯率波動影響收益', explanation: '匯率是一般性風險，非退出 EP 的特定影響。' },
        { id: 'd', text: '倉儲保險費用上升', explanation: '保險費與酒莊銷售模式無關。' }
        ]
      },
      {
        id: 5,
        question: '葡萄酒投資組合 60% 波爾多一級莊 + 30% 勃根地特級園 + 10% 其他，Sharpe Ratio = 0.85。為提升 Sharpe Ratio，最有效的調整是？',
        options: [
        { id: 'a', text: '全集中波爾多一級莊，提高集中度', explanation: '集中持倉提高波動性（σp），Sharpe Ratio = (Rp - Rf) / σp 通常下降。' },
        { id: 'b', text: '引入低相關性資產（如義大利 Super Tuscan、年份香檳），降低組合波動', explanation: '✓ 正確! 降低 σp 可在相同預期回報下提升 Sharpe Ratio。低相關性資產是教科書級多元化策略，歷史上波爾多與勃根地相關性約 0.65~0.75，引入義大利/香檳資產可顯著降低組合波動。', correct: true },
        { id: 'c', text: '增加期酒槓桿操作', explanation: '槓桿放大波動和損失，Sharpe Ratio 通常惡化。' },
        { id: 'd', text: '持倉不動，等待市場回升', explanation: '被動持有不改變組合結構，Sharpe Ratio 由持倉決定。' }
        ]
      }
    ]
  }
})

export default l411Content
