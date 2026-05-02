import { makeL4Lesson } from './l4-shared.js'

export const l410Content = makeL4Lesson({
  cover: {
    title: '資料科學與 AI 在酒業',
    subtitle: 'Level 4 - 課程 10',
    background: 'linear-gradient(135deg, #0c4a6e 0%, #0ea5e9 50%, #38bdf8 100%)',
    icon: '🤖'
  },
  intro: {
    content: '從資料治理到機器學習應用，掌握預測模型、異常偵測、發酵建模與動態定價，實現資料驅動的智慧決策與營運優化。'
  },
  objectives: [
    { id: 1, text: '建立資料管線與資料治理框架', icon: '🗂️' },
    { id: 2, text: '應用機器學習於需求預測與品質監控', icon: '📊' },
    { id: 3, text: '實作發酵建模與即時異常偵測', icon: '🔬' },
    { id: 4, text: '評估 AI 投資回報與倫理風險', icon: '⚖️' }
  ],
  chapters: [
    {
      title: '第一章：資料科學基礎與資料治理',
      nav: '資料治理',
      icon: '🗂️',
      highlightDelayStep: '0.06s',
      html: `
        <div class="chapter-content">
          <h3>資料科學工作流 (CRISP-DM)</h3>
          <ol>
            <li><strong>業務理解 (Business Understanding)</strong>: 定義問題、成功指標、約束條件。</li>
            <li><strong>資料理解 (Data Understanding)</strong>: 探索可用資料、識別品質問題、初步分析。</li>
            <li><strong>資料準備 (Data Preparation)</strong>: 清理、轉換、特徵工程、整合。</li>
            <li><strong>建模 (Modeling)</strong>: 選擇演算法、訓練模型、調參優化。</li>
            <li><strong>評估 (Evaluation)</strong>: 驗證模型、商業價值評估、風險分析。</li>
            <li><strong>部署 (Deployment)</strong>: 上線、監控、維護、迭代改進。</li>
          </ol>
          <h3>葡萄酒產業資料生態</h3>
          <table class="data-table">
            <thead>
              <tr><th>資料類型</th><th>來源</th><th>頻率</th><th>典型應用</th><th>挑戰</th></tr>
            </thead>
            <tbody>
              <tr><td>氣象數據</td><td>氣象站、衛星</td><td>每小時</td><td>霜凍預警、病害預測</td><td>空間解析度不足</td></tr>
              <tr><td>土壤數據</td><td>感測器、實驗室</td><td>每日/季度</td><td>精準施肥、灌溉決策</td><td>感測器漂移</td></tr>
              <tr><td>葡萄園影像</td><td>無人機、衛星</td><td>每週</td><td>病蟲害偵測、成熟度評估</td><td>雲層遮蔽</td></tr>
              <tr><td>發酵數據</td><td>IoT 感測器</td><td>每 15 分鐘</td><td>發酵建模、異常偵測</td><td>感測器故障</td></tr>
              <tr><td>銷售數據</td><td>POS、CRM</td><td>即時/每日</td><td>需求預測、動態定價</td><td>數據孤島</td></tr>
              <tr><td>品評數據</td><td>感官評估</td><td>批次</td><td>品質預測、風格分群</td><td>主觀性高</td></tr>
              <tr><td>供應鏈數據</td><td>ERP、物流</td><td>每日</td><td>庫存優化、物流路徑</td><td>系統不整合</td></tr>
            </tbody>
          </table>
          <h3>資料治理框架</h3>
          <div class="data-governance-widget">
            <input type="radio" id="gov-quality" name="governance-aspect" class="opt-quality" checked>
            <input type="radio" id="gov-security" name="governance-aspect" class="opt-security">
            <input type="radio" id="gov-ethics" name="governance-aspect" class="opt-ethics">
            <div class="selectors">
              <label for="gov-quality">資料品質</label>
              <label for="gov-security">資料安全</label>
              <label for="gov-ethics">倫理合規</label>
            </div>
            <div class="panels">
              <div class="panel" data-aspect="quality">
                <h4>資料品質管理</h4>
                <p><strong>六大維度</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td><strong>準確性</strong></td><td>數據是否正確反映現實 (如溫度感測器校準)</td></tr>
                    <tr><td><strong>完整性</strong></td><td>是否有遺漏值 (如氣象站斷線)</td></tr>
                    <tr><td><strong>一致性</strong></td><td>不同系統間數據是否一致 (如銷售 vs 庫存)</td></tr>
                    <tr><td><strong>及時性</strong></td><td>數據更新頻率是否滿足需求 (如即時監控)</td></tr>
                    <tr><td><strong>唯一性</strong></td><td>是否有重複記錄 (如客戶去重)</td></tr>
                    <tr><td><strong>有效性</strong></td><td>數據是否符合業務規則 (如 pH 範圍 2.8~4.0)</td></tr>
                  </tbody>
                </table>
                <p><strong>品質監控流程</strong>:</p>
                <ol>
                  <li>定義品質規則 (如溫度範圍 -5~40°C、缺失率 < 5%)。</li>
                  <li>自動化檢查腳本 (Python / SQL)，每日執行。</li>
                  <li>異常告警 (超出範圍、突然缺失)。</li>
                  <li>根因分析 (感測器故障 vs 真實異常)。</li>
                  <li>修正與文檔記錄。</li>
                </ol>
                <p class="note">案例: 發酵溫度突然從 25°C 跳至 -10°C → 感測器故障，需插補或標記為無效。</p>
              </div>
              <div class="panel" data-aspect="security">
                <h4>資料安全與隱私</h4>
                <p><strong>安全層級</strong>:</p>
                <ul>
                  <li><strong>L1 - 公開</strong>: 產區氣候數據、公開酒評分數 (無加密需求)。</li>
                  <li><strong>L2 - 內部</strong>: 生產數據、庫存、成本 (內網存取、VPN)。</li>
                  <li><strong>L3 - 機密</strong>: 客戶資料、定價策略 (加密、存取日誌)。</li>
                  <li><strong>L4 - 極機密</strong>: 釀造配方、商業機密 (多因子驗證、硬體加密)。</li>
                </ul>
                <p><strong>GDPR 合規 (歐盟客戶資料)</strong>:</p>
                <ol>
                  <li><strong>合法基礎</strong>: 取得明確同意或合約必要。</li>
                  <li><strong>資料最小化</strong>: 僅收集必要欄位 (如姓名、郵件，避免過度收集)。</li>
                  <li><strong>使用者權利</strong>: 提供查詢、修正、刪除、可攜性。</li>
                  <li><strong>資料保護影響評估 (DPIA)</strong>: 高風險處理需評估。</li>
                  <li><strong>違規通報</strong>: 72 小時內通報主管機關。</li>
                </ol>
                <p class="note">罰款: 最高 2000 萬歐元或全球營收 4%。</p>
              </div>
              <div class="panel" data-aspect="ethics">
                <h4>AI 倫理與偏誤</h4>
                <p><strong>常見偏誤來源</strong>:</p>
                <ul>
                  <li><strong>歷史偏誤</strong>: 訓練數據反映過去不公平 (如僅用名莊數據訓練品質模型)。</li>
                  <li><strong>取樣偏誤</strong>: 訓練集不代表真實分布 (如僅用夏季數據預測全年)。</li>
                  <li><strong>標註偏誤</strong>: 人工標註帶有主觀偏好 (如品評者偏好某風格)。</li>
                  <li><strong>演算法偏誤</strong>: 模型本身放大某些特徵 (如過度重視價格)。</li>
                </ul>
                <p><strong>公平性原則</strong>:</p>
                <ol>
                  <li><strong>透明性</strong>: 可解釋模型決策 (如 LIME、SHAP)。</li>
                  <li><strong>問責制</strong>: 明確 AI 決策責任歸屬。</li>
                  <li><strong>人類監督</strong>: 關鍵決策 (如裁員、定價歧視) 需人工審核。</li>
                  <li><strong>多元數據</strong>: 涵蓋不同產區、品種、價格帶。</li>
                </ol>
                <p><strong>案例</strong>: 動態定價 AI 若學習到「高收入郵遞區號付更高價」→ 價格歧視風險。</p>
                <p class="note">建議: 定期審計模型公平性，監控不同群體預測誤差。</p>
              </div>
            </div>
          </div>
          <h3>資料管線架構 (Data Pipeline)</h3>
          <ul>
            <li><strong>ETL (Extract-Transform-Load)</strong>:
              <ol>
                <li>Extract: 從多源提取 (氣象 API、ERP、IoT)。</li>
                <li>Transform: 清理、標準化、特徵工程。</li>
                <li>Load: 載入資料倉儲 (如 PostgreSQL、BigQuery)。</li>
              </ol>
            </li>
            <li><strong>批次 vs 串流</strong>:
              <ul>
                <li><strong>批次</strong>: 每日/每週處理 (如銷售報表) - Airflow、dbt。</li>
                <li><strong>串流</strong>: 即時處理 (如發酵監控) - Kafka、Flink。</li>
              </ul>
            </li>
            <li><strong>資料倉儲設計</strong>: 星型架構 (事實表 + 維度表)，支援 OLAP 查詢。</li>
          </ul>
          <h3>工具選擇矩陣</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>任務</th><th>中小酒莊 (<50K瓶)</th><th>大型酒莊 (>500K瓶)</th></tr>
            </thead>
            <tbody>
              <tr><td>資料收集</td><td>Excel / Google Sheets</td><td>自動化 ETL (Airflow)</td></tr>
              <tr><td>資料儲存</td><td>SQLite / PostgreSQL</td><td>雲端倉儲 (BigQuery, Snowflake)</td></tr>
              <tr><td>分析工具</td><td>Excel, Power BI</td><td>Python / R, Tableau</td></tr>
              <tr><td>機器學習</td><td>AutoML (H2O.ai)</td><td>自訂模型 (TensorFlow, PyTorch)</td></tr>
              <tr><td>部署</td><td>本地腳本</td><td>雲端 ML 平台 (AWS SageMaker)</td></tr>
            </tbody>
          </table>
        </div>
      `,
      highlights: [
        { id: 1, icon: '♻️', title: 'CRISP-DM', content: '業務理解 → 資料準備 → 建模 → 評估 → 部署。' },
        { id: 2, icon: '✅', title: '資料品質', content: '準確、完整、一致、及時、唯一、有效六維度。' },
        { id: 3, icon: '⚖️', title: 'AI 倫理', content: '透明、問責、人類監督、多元數據。' }
      ]
    },
    {
      title: '第二章：機器學習基礎與模型選擇',
      nav: 'ML 基礎',
      icon: '🧠',
      highlightDelayStep: '0.07s',
      html: `
        <div class="chapter-content">
          <h3>監督式學習 vs 非監督式學習</h3>
          <table class="data-table">
            <thead>
              <tr><th>類型</th><th>定義</th><th>常見演算法</th><th>酒業應用</th></tr>
            </thead>
            <tbody>
              <tr><td>監督式 - 回歸</td><td>預測連續值 (有標籤)</td><td>線性回歸、隨機森林、XGBoost</td><td>需求預測、價格預測、品質評分</td></tr>
              <tr><td>監督式 - 分類</td><td>預測類別 (有標籤)</td><td>邏輯回歸、決策樹、SVM</td><td>缺陷偵測、客戶分群、風格分類</td></tr>
              <tr><td>非監督式 - 分群</td><td>發現相似群組 (無標籤)</td><td>K-means、階層式、DBSCAN</td><td>產品組合優化、客戶細分</td></tr>
              <tr><td>非監督式 - 降維</td><td>減少特徵數量</td><td>PCA、t-SNE、UMAP</td><td>感官數據視覺化、特徵篩選</td></tr>
              <tr><td>強化學習</td><td>透過獎勵學習策略</td><td>Q-Learning、Actor-Critic</td><td>動態定價、庫存調度 (進階)</td></tr>
            </tbody>
          </table>
          <h3>模型選擇決策樹</h3>
          <div class="ml-model-selector-widget">
            <input type="radio" id="model-regression" name="ml-task" class="opt-regression" checked>
            <input type="radio" id="model-classification" name="ml-task" class="opt-classification">
            <input type="radio" id="model-clustering" name="ml-task" class="opt-clustering">
            <div class="selectors">
              <label for="model-regression">回歸任務</label>
              <label for="model-classification">分類任務</label>
              <label for="model-clustering">分群任務</label>
            </div>
            <div class="panels">
              <div class="panel" data-task="regression">
                <h4>回歸任務：預測連續值</h4>
                <p><strong>典型問題</strong>: 下季銷售量? 酒款品質評分? 最適發酵溫度?</p>
                <table class="data-table compact">
                  <thead>
                    <tr><th>演算法</th><th>優點</th><th>缺點</th><th>適用情境</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>線性回歸</td><td>可解釋、快速</td><td>假設線性關係</td><td>特徵少、關係簡單 (如價格 vs 評分)</td></tr>
                    <tr><td>決策樹</td><td>處理非線性、視覺化佳</td><td>易過擬合</td><td>探索特徵重要性</td></tr>
                    <tr><td>隨機森林</td><td>精準、穩健</td><td>黑箱、計算重</td><td>中等數據量 (1K~100K)</td></tr>
                    <tr><td>XGBoost</td><td>Kaggle 冠軍常客</td><td>調參複雜</td><td>表格數據、追求極致精度</td></tr>
                    <tr><td>神經網路</td><td>處理複雜模式</td><td>需大量數據 (>10K)</td><td>影像、時間序列、大數據</td></tr>
                  </tbody>
                </table>
                <p><strong>酒業案例</strong>:</p>
                <ul>
                  <li><strong>銷售預測</strong>: XGBoost，輸入 (歷史銷量、季節、促銷、天氣) → 輸出 (下月銷量)。</li>
                  <li><strong>品質預測</strong>: 隨機森林，輸入 (化學分析、發酵參數) → 輸出 (感官評分)。</li>
                </ul>
                <p class="note">起手式: 先用線性回歸建立基準 (baseline)，再嘗試複雜模型。</p>
              </div>
              <div class="panel" data-task="classification">
                <h4>分類任務：預測類別</h4>
                <p><strong>典型問題</strong>: 此酒有缺陷嗎 (是/否)? 客戶會流失嗎? 葡萄成熟度 (未熟/適中/過熟)?</p>
                <table class="data-table compact">
                  <thead>
                    <tr><th>演算法</th><th>優點</th><th>缺點</th><th>適用情境</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>邏輯回歸</td><td>可解釋、概率輸出</td><td>線性決策邊界</td><td>二元分類 (如缺陷偵測)</td></tr>
                    <tr><td>決策樹</td><td>規則清晰</td><td>易過擬合</td><td>需要可解釋性</td></tr>
                    <tr><td>隨機森林</td><td>精準、處理不平衡</td><td>黑箱</td><td>多類別、特徵多</td></tr>
                    <tr><td>SVM</td><td>高維空間表現佳</td><td>大數據慢</td><td>中小數據、複雜邊界</td></tr>
                    <tr><td>深度學習 (CNN)</td><td>影像識別強</td><td>需 GPU、大數據</td><td>葡萄病害影像分類</td></tr>
                  </tbody>
                </table>
                <p><strong>酒業案例</strong>:</p>
                <ul>
                  <li><strong>缺陷偵測</strong>: 隨機森林，輸入 (化學指標、感官描述) → 輸出 (有缺陷/無缺陷)。</li>
                  <li><strong>病害識別</strong>: CNN，輸入 (葉片影像) → 輸出 (霜霉病/白粉病/健康)。</li>
                </ul>
                <p class="note">不平衡數據 (如缺陷率 5%) 需使用 SMOTE 或加權損失函數。</p>
              </div>
              <div class="panel" data-task="clustering">
                <h4>分群任務：發現相似群組</h4>
                <p><strong>典型問題</strong>: 客戶可分為幾群? 產品如何組合? 哪些發酵批次相似?</p>
                <table class="data-table compact">
                  <thead>
                    <tr><th>演算法</th><th>優點</th><th>缺點</th><th>適用情境</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>K-means</td><td>簡單、快速</td><td>需預設群數、球形假設</td><td>客戶分群、產品組合</td></tr>
                    <tr><td>階層式</td><td>樹狀圖視覺化</td><td>計算慢 (O(n³))</td><td>小數據、探索性分析</td></tr>
                    <tr><td>DBSCAN</td><td>發現任意形狀、識別離群值</td><td>參數敏感</td><td>地理空間分群、異常偵測</td></tr>
                    <tr><td>GMM</td><td>概率分群、軟分類</td><td>假設高斯分布</td><td>不確定性建模</td></tr>
                  </tbody>
                </table>
                <p><strong>酒業案例</strong>:</p>
                <ul>
                  <li><strong>客戶細分</strong>: K-means (k=4)，依購買頻率、金額、品種偏好分為 (忠實客/偶爾客/新客/流失客)。</li>
                  <li><strong>產品組合</strong>: 階層式聚類，依香氣/價格/風格分組，設計品酒套組。</li>
                </ul>
                <p class="note">肘部法 (Elbow Method) 或輪廓係數 (Silhouette Score) 選擇最佳群數。</p>
              </div>
            </div>
          </div>
          <h3>模型評估指標</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>任務</th><th>指標</th><th>計算</th><th>目標</th></tr>
            </thead>
            <tbody>
              <tr><td>回歸</td><td>MAE (平均絕對誤差)</td><td>平均 |預測 - 實際|</td><td>越小越好</td></tr>
              <tr><td>回歸</td><td>RMSE (均方根誤差)</td><td>√(平均 (預測 - 實際)²)</td><td>越小越好，懲罰大誤差</td></tr>
              <tr><td>回歸</td><td>R² (決定係數)</td><td>1 - (殘差平方和 / 總平方和)</td><td>越接近 1 越好</td></tr>
              <tr><td>分類</td><td>準確率 (Accuracy)</td><td>正確預測數 / 總數</td><td>適用平衡數據</td></tr>
              <tr><td>分類</td><td>精確率 (Precision)</td><td>TP / (TP + FP)</td><td>減少誤報</td></tr>
              <tr><td>分類</td><td>召回率 (Recall)</td><td>TP / (TP + FN)</td><td>減少漏報</td></tr>
              <tr><td>分類</td><td>F1 分數</td><td>2 × (精確率 × 召回率) / (精確率 + 召回率)</td><td>平衡精確與召回</td></tr>
              <tr><td>分類</td><td>AUC-ROC</td><td>ROC 曲線下面積</td><td>越接近 1 越好</td></tr>
            </tbody>
          </table>
          <h3>過擬合 vs 欠擬合</h3>
          <ul>
            <li><strong>欠擬合 (Underfitting)</strong>: 模型過簡單，訓練與測試誤差都高 → 增加複雜度 (更多特徵、更深模型)。</li>
            <li><strong>過擬合 (Overfitting)</strong>: 模型記住訓練數據，測試誤差遠高於訓練 → 正則化 (L1/L2)、剪枝、dropout、增加數據。</li>
            <li><strong>交叉驗證</strong>: K-fold (k=5 或 10)，確保模型泛化能力。</li>
          </ul>
          <h3>特徵工程技巧</h3>
          <ul>
            <li><strong>時間特徵</strong>: 拆解為年/月/週/星期、節日標記、季節性編碼。</li>
            <li><strong>類別編碼</strong>: One-hot (品種)、Label (順序)、Target (高基數)。</li>
            <li><strong>數值轉換</strong>: Log (長尾分布)、標準化 (Z-score)、正規化 (0~1)。</li>
            <li><strong>交互特徵</strong>: 溫度 × 濕度、價格 × 評分 (捕捉非線性)。</li>
            <li><strong>滯後特徵</strong>: 前一期銷量、移動平均 (時間序列)。</li>
          </ul>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🎯', title: '模型選擇', content: '基準線性回歸 → 樹模型 → 深度學習。' },
        { id: 2, icon: '📊', title: '評估指標', content: '回歸 RMSE、分類 F1、不平衡數據用 AUC。' },
        { id: 3, icon: '⚙️', title: '特徵工程', content: '時間拆解、交互特徵、滯後變量關鍵。' }
      ]
    },
    {
      title: '第三章：需求預測與庫存優化',
      nav: '需求預測',
      icon: '📈',
      highlightDelayStep: '0.08s',
      html: `
        <div class="chapter-content">
          <h3>時間序列預測方法</h3>
          <table class="data-table">
            <thead>
              <tr><th>方法</th><th>適用情境</th><th>優點</th><th>缺點</th></tr>
            </thead>
            <tbody>
              <tr><td>移動平均 (MA)</td><td>短期、平穩數據</td><td>簡單、平滑</td><td>滯後、無法預測趨勢</td></tr>
              <tr><td>指數平滑 (ETS)</td><td>趨勢 + 季節性</td><td>自動權重衰減</td><td>參數需調整</td></tr>
              <tr><td>ARIMA</td><td>單變量時間序列</td><td>處理自相關</td><td>需平穩化、參數複雜</td></tr>
              <tr><td>Prophet</td><td>強季節性、節日效應</td><td>自動處理缺失、易用</td><td>需大量歷史數據 (>1 年)</td></tr>
              <tr><td>LSTM / GRU</td><td>長期依賴、多變量</td><td>捕捉複雜模式</td><td>需大數據、訓練慢</td></tr>
              <tr><td>XGBoost (時間特徵)</td><td>加入外部變量 (促銷、天氣)</td><td>高精度、可解釋</td><td>需特徵工程</td></tr>
            </tbody>
          </table>
          <h3>需求預測流程</h3>
          <ol>
            <li><strong>數據準備</strong>: 歷史銷量 (至少 2 年)、促銷日曆、節日、天氣、競爭者動態。</li>
            <li><strong>探索性分析</strong>: 視覺化趨勢、季節性 (月份/季度)、週期性 (週末 vs 平日)。</li>
            <li><strong>特徵工程</strong>:
              <ul>
                <li>時間特徵: 月份、季度、是否節日、週末。</li>
                <li>滯後特徵: 前 1/7/30 天銷量、移動平均。</li>
                <li>外部變量: 促銷力度、天氣、媒體曝光。</li>
              </ul>
            </li>
            <li><strong>模型訓練</strong>: 分割訓練/驗證集 (時間序列用順序分割，非隨機)。</li>
            <li><strong>評估與調參</strong>: 用 MAPE (平均絕對百分比誤差) 評估，調整參數。</li>
            <li><strong>預測與監控</strong>: 每週/月更新模型，監控預測誤差。</li>
          </ol>
          <h3>需求預測案例研究</h3>
          <div class="demand-forecast-widget">
            <input type="radio" id="forecast-baseline" name="forecast-scenario" class="opt-baseline" checked>
            <input type="radio" id="forecast-seasonal" name="forecast-scenario" class="opt-seasonal">
            <input type="radio" id="forecast-promo" name="forecast-scenario" class="opt-promo">
            <div class="selectors">
              <label for="forecast-baseline">基準模型</label>
              <label for="forecast-seasonal">季節調整</label>
              <label for="forecast-promo">促銷整合</label>
            </div>
            <div class="panels">
              <div class="panel" data-scenario="baseline">
                <h4>基準模型：移動平均</h4>
                <p><strong>方法</strong>: 7 日移動平均，預測下週銷量 = 過去 7 天平均。</p>
                <p><strong>結果</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>MAPE (平均絕對百分比誤差)</td><td>18.5%</td></tr>
                    <tr><td>計算時間</td><td>< 1 秒</td></tr>
                    <tr><td>可解釋性</td><td>高</td></tr>
                  </tbody>
                </table>
                <p><strong>限制</strong>: 無法預測突發事件 (節日、促銷)，滯後 1 週。</p>
                <p class="note">適合穩定需求、快速實作的起點。</p>
              </div>
              <div class="panel" data-scenario="seasonal">
                <h4>季節調整：Prophet</h4>
                <p><strong>方法</strong>: Facebook Prophet，自動偵測趨勢 + 年度/週度季節性。</p>
                <p><strong>特徵</strong>:</p>
                <ul>
                  <li>趨勢: 整體成長 (如年成長 5%)。</li>
                  <li>年度季節性: 夏季高峰 (6~8 月 +30%)、冬季低谷 (1~2 月 -20%)。</li>
                  <li>週度季節性: 週五/六高峰 (+40%)、週一低谷 (-15%)。</li>
                </ul>
                <p><strong>結果</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>MAPE</td><td>12.3% (比基準降低 33%)</td></tr>
                    <tr><td>計算時間</td><td>~5 分鐘</td></tr>
                    <tr><td>可解釋性</td><td>中 (可視覺化組件)</td></tr>
                  </tbody>
                </table>
                <p class="note">適合有明顯季節性的產品 (如氣泡酒、禮盒)。</p>
              </div>
              <div class="panel" data-scenario="promo">
                <h4>促銷整合：XGBoost</h4>
                <p><strong>方法</strong>: XGBoost + 時間特徵 + 促銷變量。</p>
                <p><strong>特徵工程</strong>:</p>
                <ul>
                  <li>時間: 月份、季度、週末、節日 (情人節、中秋)。</li>
                  <li>滯後: 前 7/14/30 天銷量、移動平均。</li>
                  <li>促銷: 折扣 %、買一送一、媒體廣告預算。</li>
                  <li>外部: 天氣 (溫度、降雨)、競爭者促銷。</li>
                </ul>
                <p><strong>結果</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>MAPE</td><td>8.7% (比基準降低 53%)</td></tr>
                    <tr><td>計算時間</td><td>~20 分鐘</td></tr>
                    <tr><td>特徵重要性</td><td>促銷折扣 (35%) > 前 7 天銷量 (28%) > 月份 (18%)</td></tr>
                  </tbody>
                </table>
                <p><strong>商業價值</strong>: 準確預測促銷效果，優化折扣策略 (避免過度折扣)。</p>
                <p class="note">需歷史促銷數據 (至少 20+ 次促銷活動)。</p>
              </div>
            </div>
          </div>
          <h3>庫存優化：安全庫存與再訂購點</h3>
          <p><strong>安全庫存公式</strong>: SS = Z × σ_LT × √LT</p>
          <ul>
            <li>Z: 服務水準對應的 Z 分數 (如 95% → Z=1.65)。</li>
            <li>σ_LT: 前置期內需求標準差。</li>
            <li>LT: 前置期 (Lead Time, 天數)。</li>
          </ul>
          <p><strong>再訂購點 (ROP)</strong>: ROP = 前置期平均需求 + 安全庫存</p>
          <p><strong>案例</strong>:</p>
          <ul>
            <li>前置期 = 14 天，平均日需求 = 100 瓶，標準差 = 20 瓶，目標服務水準 = 95%。</li>
            <li>SS = 1.65 × 20 × √14 ≈ 124 瓶。</li>
            <li>ROP = 100 × 14 + 124 = 1524 瓶。</li>
            <li>解讀: 當庫存降至 1524 瓶時下單，確保 95% 時間不缺貨。</li>
          </ul>
          <h3>需求預測常見陷阱</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>陷阱</th><th>原因</th><th>解決方案</th></tr>
            </thead>
            <tbody>
              <tr><td>數據洩漏</td><td>用未來信息訓練 (如當天銷量預測當天)</td><td>嚴格時間分割、lag 特徵</td></tr>
              <tr><td>忽略異常值</td><td>COVID-19、罷工導致需求突變</td><td>標記異常期、分段建模</td></tr>
              <tr><td>過度擬合促銷</td><td>模型記住特定促銷</td><td>交叉驗證、泛化促銷特徵</td></tr>
              <tr><td>忽略新品</td><td>無歷史數據</td><td>類似品借鏡、專家預估</td></tr>
            </tbody>
          </table>
        </div>
      `,
      highlights: [
        { id: 1, icon: '📊', title: 'Prophet', content: '自動處理季節性，MAPE 降至 12.3%。' },
        { id: 2, icon: '🎯', title: 'XGBoost', content: '整合促銷變量，MAPE 降至 8.7%。' },
        { id: 3, icon: '📦', title: '安全庫存', content: 'SS = Z × σ_LT × √LT，95% 服務水準。' }
      ]
    },
    {
      title: '第四章:發酵建模與異常偵測',
      nav: '發酵建模',
      icon: '🔬',
      highlightDelayStep: '0.09s',
      html: `
        <div class="chapter-content">
          <h3>發酵動力學建模</h3>
          <p><strong>目標</strong>: 預測發酵曲線、偵測異常、優化溫度控制。</p>
          <p><strong>典型監控參數</strong>:</p>
          <table class="data-table compact">
            <thead>
              <tr><th>參數</th><th>感測器</th><th>取樣頻率</th><th>正常範圍</th></tr>
            </thead>
            <tbody>
              <tr><td>溫度</td><td>PT100 / 熱電偶</td><td>每 5~15 分鐘</td><td>15~32°C (依品種/風格)</td></tr>
              <tr><td>密度 (糖度)</td><td>數位密度計</td><td>每小時</td><td>1.080 → 0.995 SG</td></tr>
              <tr><td>pH</td><td>pH 探針</td><td>每日</td><td>3.0~3.8</td></tr>
              <tr><td>酒精度</td><td>近紅外線光譜</td><td>每小時</td><td>0 → 12~15%</td></tr>
              <tr><td>CO₂ 排放</td><td>氣體流量計</td><td>即時</td><td>發酵高峰 > 10 L/min</td></tr>
            </tbody>
          </table>
          <h3>Gompertz 模型 (S 曲線)</h3>
          <p>發酵進度通常呈 S 型曲線,Gompertz 方程可描述:</p>
          <p><strong>公式</strong>: y(t) = A × exp(-exp(-k × (t - t_m)))</p>
          <ul>
            <li>y(t): t 時刻的酒精度或糖度下降。</li>
            <li>A: 最大變化量 (如總糖度下降 85 g/L)。</li>
            <li>k: 發酵速率常數 (受溫度、酵母影響)。</li>
            <li>t_m: 發酵中點時間 (最大速率時刻)。</li>
          </ul>
          <p><strong>應用</strong>:</p>
          <ol>
            <li>擬合歷史數據 → 得到 A、k、t_m 參數。</li>
            <li>預測發酵完成時間 (如還需 48 小時)。</li>
            <li>實時監控偏離 → 觸發告警 (如速率低於 80% 預期)。</li>
          </ol>
          <h3>異常偵測方法</h3>
          <div class="anomaly-detection-widget">
            <input type="radio" id="anomaly-statistical" name="anomaly-method" class="opt-statistical" checked>
            <input type="radio" id="anomaly-ml" name="anomaly-method" class="opt-ml">
            <input type="radio" id="anomaly-dl" name="anomaly-method" class="opt-dl">
            <div class="selectors">
              <label for="anomaly-statistical">統計方法</label>
              <label for="anomaly-ml">機器學習</label>
              <label for="anomaly-dl">深度學習</label>
            </div>
            <div class="panels">
              <div class="panel" data-method="statistical">
                <h4>統計異常偵測</h4>
                <p><strong>Z-Score 法</strong>:</p>
                <ul>
                  <li>計算: Z = (x - μ) / σ</li>
                  <li>閾值: |Z| > 3 視為異常 (99.7% 信賴區間)。</li>
                  <li>優點: 簡單、快速、可解釋。</li>
                  <li>缺點: 假設常態分布、無法處理時間依賴。</li>
                </ul>
                <p><strong>移動平均控制圖</strong>:</p>
                <ul>
                  <li>計算 10 小時移動平均 ± 2σ 上下界。</li>
                  <li>若連續 3 點超出 → 告警。</li>
                  <li>適用: 發酵溫度監控、穩定階段。</li>
                </ul>
                <p class="note">案例: 發酵溫度突然從 25°C 升至 32°C (Z=4.5) → 立即冷卻告警。</p>
              </div>
              <div class="panel" data-method="ml">
                <h4>機器學習異常偵測</h4>
                <p><strong>Isolation Forest</strong>:</p>
                <ul>
                  <li>原理: 異常點易被隔離 (需較少分割)。</li>
                  <li>優點: 無需標籤、處理高維、快速。</li>
                  <li>缺點: 參數敏感 (contamination 污染比例)。</li>
                </ul>
                <p><strong>One-Class SVM</strong>:</p>
                <ul>
                  <li>原理: 學習正常數據邊界,邊界外為異常。</li>
                  <li>優點: 處理非線性邊界。</li>
                  <li>缺點: 大數據計算慢。</li>
                </ul>
                <p><strong>酒業案例</strong>:</p>
                <ul>
                  <li>輸入: 溫度、密度、pH、時間、酵母株、批次大小。</li>
                  <li>訓練: 用 100 批正常發酵數據訓練 Isolation Forest。</li>
                  <li>偵測: 新批次若異常分數 > 0.7 → 告警 (如停滯發酵前兆)。</li>
                </ul>
                <p class="note">精度: F1 約 0.85,召回率 90% (少漏報)。</p>
              </div>
              <div class="panel" data-method="dl">
                <h4>深度學習: LSTM Autoencoder</h4>
                <p><strong>原理</strong>:</p>
                <ol>
                  <li>訓練 LSTM Autoencoder 壓縮再重建正常發酵序列。</li>
                  <li>重建誤差小 → 正常,誤差大 → 異常。</li>
                </ol>
                <p><strong>架構</strong>:</p>
                <ul>
                  <li>輸入: 24 小時溫度/密度時間序列 (每小時一點)。</li>
                  <li>編碼器: LSTM (64 → 32 → 16 維)。</li>
                  <li>解碼器: LSTM (16 → 32 → 64 維)。</li>
                  <li>損失: MSE (重建誤差)。</li>
                </ul>
                <p><strong>閾值設定</strong>:</p>
                <ul>
                  <li>計算正常批次平均 MSE + 3σ。</li>
                  <li>新批次 MSE 超過 → 異常告警。</li>
                </ul>
                <p><strong>優點</strong>: 捕捉複雜時間模式、多變量相關性。</p>
                <p><strong>缺點</strong>: 需大量數據 (>500 批)、GPU、可解釋性低。</p>
                <p class="note">實測: 提前 6~12 小時偵測停滯發酵,比人工提早干預。</p>
              </div>
            </div>
          </div>
          <h3>停滯發酵預警系統</h3>
          <p><strong>停滯發酵定義</strong>: 殘糖 > 4 g/L 且連續 48 小時密度變化 < 0.002 SG。</p>
          <p><strong>預警指標</strong>:</p>
          <table class="data-table compact">
            <tbody>
              <tr><td>發酵速率下降</td><td>糖度下降速率 < 歷史平均 50%</td></tr>
              <tr><td>溫度異常</td><td>< 15°C 或 > 35°C</td></tr>
              <tr><td>pH 驟降</td><td>< 2.9 (乳酸菌污染)</td></tr>
              <tr><td>酵母活性</td><td>顯微鏡計數 < 10⁶ cells/mL</td></tr>
            </tbody>
          </table>
          <p><strong>AI 預警流程</strong>:</p>
          <ol>
            <li>每小時收集溫度、密度、pH。</li>
            <li>輸入 LSTM 模型預測未來 24 小時密度曲線。</li>
            <li>若預測顯示停滯 (斜率 < 閾值) → 提前告警。</li>
            <li>建議行動: 添加營養、升溫、重新接種酵母。</li>
          </ol>
          <h3>品質預測模型</h3>
          <p><strong>目標</strong>: 用發酵數據預測最終感官評分。</p>
          <p><strong>特徵</strong>:</p>
          <ul>
            <li>發酵參數: 最高溫度、平均溫度、發酵時間、溫度標準差。</li>
            <li>化學分析: 酒精度、殘糖、總酸、pH、揮發酸。</li>
            <li>原料: 葡萄糖度、酸度、品種、產區。</li>
          </ul>
          <p><strong>模型</strong>: 隨機森林回歸。</p>
          <p><strong>結果</strong>: R² = 0.78,RMSE = 2.1 分 (100 分制)。</p>
          <p><strong>特徵重要性</strong>:</p>
          <ol>
            <li>發酵最高溫度 (32%) - 過高產生雜醇油。</li>
            <li>原料糖度 (26%) - 影響酒體平衡。</li>
            <li>揮發酸 (18%) - 醋酸細菌污染指標。</li>
          </ol>
          <p class="note">應用: 即時調整發酵策略,提升品質穩定性。</p>
        </div>
      `,
      highlights: [
        { id: 1, icon: '📉', title: 'Gompertz', content: 'S 曲線建模預測發酵完成時間。' },
        { id: 2, icon: '🚨', title: 'LSTM', content: '提前 6~12 小時偵測停滯發酵。' },
        { id: 3, icon: '🎯', title: '品質預測', content: 'R² = 0.78,調整發酵提升穩定性。' }
      ]
    },
    {
      title: '第五章: AI 營運應用與投資回報',
      nav: 'AI 應用',
      icon: '🚀',
      highlightDelayStep: '0.1s',
      html: `
        <div class="chapter-content">
          <h3>AI 用例矩陣</h3>
          <div class="ai-usecase-matrix-widget">
            <input type="radio" id="usecase-quality" name="ai-usecase" class="opt-quality" checked>
            <input type="radio" id="usecase-operations" name="ai-usecase" class="opt-operations">
            <input type="radio" id="usecase-marketing" name="ai-usecase" class="opt-marketing">
            <div class="selectors">
              <label for="usecase-quality">品質控制</label>
              <label for="usecase-operations">營運優化</label>
              <label for="usecase-marketing">行銷個人化</label>
            </div>
            <div class="panels">
              <div class="panel" data-usecase="quality">
                <h4>品質控制與感測</h4>
                <table class="data-table compact">
                  <thead>
                    <tr><th>應用</th><th>技術</th><th>效益</th><th>實施難度</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>葡萄分選</td><td>電腦視覺 (CNN)</td><td>缺陷率 -40%</td><td>中 (需標註數據)</td></tr>
                    <tr><td>發酵監控</td><td>LSTM 異常偵測</td><td>停滯發酵 -60%</td><td>高 (需感測器網路)</td></tr>
                    <tr><td>酒標檢驗</td><td>OCR + 影像比對</td><td>錯誤率 < 0.1%</td><td>低 (成熟方案)</td></tr>
                    <tr><td>軟木塞 TCA 偵測</td><td>電子鼻 + ML</td><td>污染率 -80%</td><td>高 (設備昂貴)</td></tr>
                    <tr><td>顏色一致性</td><td>光譜分析 + 分類</td><td>批次差異 -50%</td><td>中</td></tr>
                  </tbody>
                </table>
                <p><strong>案例: 電腦視覺葡萄分選</strong>:</p>
                <ul>
                  <li>影像採集: 輸送帶上方相機 (RGB + 近紅外)。</li>
                  <li>模型: YOLOv8 偵測葡萄,ResNet 分類 (健康/腐爛/未熟)。</li>
                  <li>訓練: 10,000 張標註影像,準確率 97%。</li>
                  <li>部署: Jetson Nano 邊緣運算,即時分選 (2 噸/小時)。</li>
                  <li>ROI: 設備成本 €50K,年節省人工 €80K + 品質提升價值 €120K。</li>
                </ul>
              </div>
              <div class="panel" data-usecase="operations">
                <h4>營運優化與排程</h4>
                <table class="data-table compact">
                  <thead>
                    <tr><th>應用</th><th>技術</th><th>效益</th><th>實施難度</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>動態定價</td><td>強化學習 / 價格彈性模型</td><td>營收 +8~15%</td><td>中</td></tr>
                    <tr><td>庫存優化</td><td>時間序列預測 + 線性規劃</td><td>庫存成本 -20%</td><td>中</td></tr>
                    <tr><td>物流路徑</td><td>遺傳演算法 / OR-Tools</td><td>運輸成本 -12%</td><td>高</td></tr>
                    <tr><td>員工排班</td><td>混合整數規劃</td><td>人力成本 -10%</td><td>低</td></tr>
                    <tr><td>能源管理</td><td>預測 + 負載調度</td><td>電費 -15%</td><td>中</td></tr>
                  </tbody>
                </table>
                <p><strong>案例: 動態定價系統</strong>:</p>
                <ul>
                  <li><strong>目標</strong>: 最大化營收,考慮需求彈性、競爭、庫存。</li>
                  <li><strong>模型</strong>: 價格彈性回歸 (需求 vs 價格) + 強化學習優化。</li>
                  <li><strong>特徵</strong>: 歷史價格、銷量、競爭者價格、庫存水位、季節、節日。</li>
                  <li><strong>策略</strong>:
                    <ul>
                      <li>庫存高 + 淡季 → 降價 5~10%。</li>
                      <li>庫存低 + 旺季 → 漲價 8~12%。</li>
                      <li>新品上市 → 滲透定價 (-15%)。</li>
                    </ul>
                  </li>
                  <li><strong>結果</strong>: 營收 +12%,庫存週轉率 +18%。</li>
                </ul>
                <p class="note">需注意品牌形象,避免頻繁大幅波動引發客戶反感。</p>
              </div>
              <div class="panel" data-usecase="marketing">
                <h4>行銷個人化與推薦</h4>
                <table class="data-table compact">
                  <thead>
                    <tr><th>應用</th><th>技術</th><th>效益</th><th>實施難度</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>產品推薦</td><td>協同過濾 / 矩陣分解</td><td>轉換率 +25%</td><td>中</td></tr>
                    <tr><td>客戶分群</td><td>K-means / RFM 分析</td><td>行銷 ROI +30%</td><td>低</td></tr>
                    <tr><td>流失預測</td><td>梯度提升樹</td><td>留存率 +15%</td><td>中</td></tr>
                    <tr><td>內容生成</td><td>GPT-4 / Claude</td><td>內容成本 -60%</td><td>低</td></tr>
                    <tr><td>聊天機器人</td><td>NLP + RAG</td><td>客服成本 -40%</td><td>中</td></tr>
                  </tbody>
                </table>
                <p><strong>案例: 葡萄酒推薦引擎</strong>:</p>
                <ul>
                  <li><strong>方法</strong>: 協同過濾 (用戶-商品矩陣分解,ALS 演算法)。</li>
                  <li><strong>數據</strong>: 50K 用戶 × 2K 酒款,評分/購買記錄。</li>
                  <li><strong>特徵</strong>: 隱含因子 (如「酒體」、「果味」、「價格敏感度」)。</li>
                  <li><strong>推薦邏輯</strong>:
                    <ul>
                      <li>相似用戶: 找到口味相近的用戶,推薦他們喜歡的酒。</li>
                      <li>相似產品: 找到特徵相近的酒款 (如同品種不同產區)。</li>
                      <li>混合: 70% 協同 + 20% 內容 (品種/產區) + 10% 熱門。</li>
                    </ul>
                  </li>
                  <li><strong>評估</strong>: NDCG@10 = 0.68,點擊率 +35%,轉換率 +28%。</li>
                </ul>
                <p class="note">冷啟動問題: 新用戶用內容推薦,收集 5+ 互動後切換協同過濾。</p>
              </div>
            </div>
          </div>
          <h3>ROI 評估框架</h3>
          <p><strong>成本分析</strong>:</p>
          <table class="data-table compact">
            <thead>
              <tr><th>成本項</th><th>一次性</th><th>年度</th></tr>
            </thead>
            <tbody>
              <tr><td>硬體 (感測器、相機、伺服器)</td><td>€30K~200K</td><td>維護 10%</td></tr>
              <tr><td>軟體授權 (雲端平台、ML 工具)</td><td>€5K~50K</td><td>訂閱 €10K~100K</td></tr>
              <tr><td>數據收集與標註</td><td>€10K~100K</td><td>-</td></tr>
              <tr><td>模型開發 (外包 vs 內部)</td><td>€20K~150K</td><td>-</td></tr>
              <tr><td>整合與部署</td><td>€15K~80K</td><td>-</td></tr>
              <tr><td>培訓與變革管理</td><td>€5K~30K</td><td>-</td></tr>
              <tr><td>維運與監控</td><td>-</td><td>€15K~60K</td></tr>
            </tbody>
          </table>
          <p><strong>效益量化</strong>:</p>
          <ul>
            <li><strong>直接效益</strong>: 節省人工、減少浪費、提升產量、降低缺陷率。</li>
            <li><strong>間接效益</strong>: 品牌價值提升、客戶滿意度、員工效率、決策速度。</li>
            <li><strong>ROI 公式</strong>: (年度效益 - 年度成本) / 總投資 × 100%</li>
          </ul>
          <p><strong>案例: 發酵監控系統</strong>:</p>
          <table class="data-table compact">
            <tbody>
              <tr><td>投資</td><td>硬體 €80K + 軟體 €30K + 實施 €40K = €150K</td></tr>
              <tr><td>年度成本</td><td>維護 €8K + 訂閱 €15K = €23K</td></tr>
              <tr><td>效益</td><td>停滯發酵減少 60% → 節省 €120K/年 + 品質提升 → 溢價 +5% → €80K/年</td></tr>
              <tr><td>總效益</td><td>€200K/年</td></tr>
              <tr><td>淨效益</td><td>€200K - €23K = €177K/年</td></tr>
              <tr><td>ROI (首年)</td><td>(€177K - €150K) / €150K = 18%</td></tr>
              <tr><td>回本期</td><td>10 個月</td></tr>
            </tbody>
          </table>
          <h3>實施路徑</h3>
          <ol>
            <li><strong>評估階段 (1~2 月)</strong>: 定義問題、數據盤點、可行性分析、選擇供應商。</li>
            <li><strong>試點階段 (3~6 月)</strong>: 小規模實施 (單一產線/批次)、驗證 ROI、調整參數。</li>
            <li><strong>擴展階段 (6~12 月)</strong>: 全面部署、員工培訓、流程整合。</li>
            <li><strong>優化階段 (持續)</strong>: 監控績效、模型更新、功能擴充。</li>
          </ol>
          <h3>倫理與治理</h3>
          <p><strong>可解釋性</strong>:</p>
          <ul>
            <li>使用 SHAP / LIME 解釋黑箱模型預測。</li>
            <li>關鍵決策 (如裁員、定價歧視) 需人工審核。</li>
          </ul>
          <p><strong>偏誤監控</strong>:</p>
          <ul>
            <li>定期審計模型公平性 (如不同產區/價格帶誤差)。</li>
            <li>多元數據集,避免單一來源偏誤。</li>
          </ul>
          <p><strong>人機協作</strong>:</p>
          <ul>
            <li>AI 提供建議,釀酒師最終決策 (human-in-the-loop)。</li>
            <li>建立信任: 透明度、可撤銷、錯誤反饋機制。</li>
          </ul>
          <p class="note">AI 是輔助工具,非取代專業判斷,保留人類最終控制權。</p>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🎯', title: '電腦視覺', content: '葡萄分選缺陷率 -40%,ROI 回本 10 月。' },
        { id: 2, icon: '💰', title: '動態定價', content: '營收 +12%,需注意品牌形象。' },
        { id: 3, icon: '⚖️', title: '人機協作', content: 'AI 建議 + 人類決策,保留最終控制權。' }
      ]
    }
  ],
  summary: {
    title: '課程總結',
    html: `
      <p><strong>五大支柱</strong>:</p>
      <ol>
        <li><strong>資料治理</strong>: CRISP-DM 工作流、品質六維度、GDPR 合規。</li>
        <li><strong>機器學習</strong>: 回歸/分類/分群,模型選擇,特徵工程。</li>
        <li><strong>需求預測</strong>: Prophet 季節調整、XGBoost 促銷整合,MAPE < 9%。</li>
        <li><strong>發酵建模</strong>: Gompertz 曲線、LSTM 異常偵測,提前 6~12 小時預警。</li>
        <li><strong>AI 應用</strong>: 品質控制、動態定價、推薦引擎,ROI 評估框架。</li>
      </ol>
      <p><strong>實施關鍵</strong>: 小規模試點 → 驗證 ROI → 全面擴展 → 持續優化,保持人機協作與倫理監督。</p>
    `
  },
  quiz: {
    title: '課後測驗',
    questions: [
      {
        id: 1,
        question: '某酒莊部署需求預測系統,使用 XGBoost 整合促銷變量後 MAPE 從 18.5% 降至 8.7%。以下哪項特徵最可能貢獻最高重要性?',
        options: [
          { id: 'a', text: '月份季節性', explanation: '月份重要,但通常低於促銷與近期銷量 (案例中 18%)。' },
          { id: 'b', text: '促銷折扣百分比', explanation: '✓ 正確! 促銷折扣直接影響需求,案例中貢獻 35% 特徵重要性,是最關鍵驅動因子。', correct: true },
          { id: 'c', text: '競爭者價格', explanation: '競爭者價格有影響,但通常低於自身促銷策略。' },
          { id: 'd', text: '天氣溫度', explanation: '天氣對某些產品有影響 (如氣泡酒),但整體重要性低於促銷。' }
        ]
      },
      {
        id: 2,
        question: '發酵監控系統使用 LSTM Autoencoder 偵測停滯發酵。若正常批次平均 MSE = 0.05,標準差 = 0.01,新批次 MSE = 0.09,應如何判斷?',
        options: [
          { id: 'a', text: '正常,MSE < 0.1', explanation: '絕對閾值不科學,應基於統計分布 (μ + 3σ)。' },
          { id: 'b', text: '異常,MSE > μ + 3σ (0.08)', explanation: '✓ 正確! 0.09 > 0.05 + 3×0.01 = 0.08,超過 3 個標準差,應觸發異常告警,提早介入處理。', correct: true },
          { id: 'c', text: '需更多數據才能判斷', explanation: '已有足夠統計基準 (μ 和 σ),可立即判斷。' },
          { id: 'd', text: '正常,僅高 80%', explanation: '相對增幅不足以評估,應用統計顯著性 (Z-score)。' }
        ]
      },
      {
        id: 3,
        question: '某酒莊評估電腦視覺葡萄分選系統: 投資 €150K,年節省人工 €80K,品質提升帶來溢價 €120K/年,年維護成本 €23K。此專案首年 ROI 與回本期為何?',
        options: [
          { id: 'a', text: 'ROI = 18%,回本期 10 個月', explanation: '✓ 正確! 淨效益 = (€80K + €120K - €23K) = €177K,ROI = (€177K - €150K) / €150K = 18%,回本期 = €150K / (€177K/12) ≈ 10 個月。', correct: true },
          { id: 'b', text: 'ROI = 33%,回本期 18 個月', explanation: '計算錯誤,忽略維護成本或混淆總效益與淨效益。' },
          { id: 'c', text: 'ROI = -2%,不划算', explanation: '計算嚴重錯誤,忽略品質溢價效益 (€120K)。' },
          { id: 'd', text: 'ROI = 133%,回本期 3 個月', explanation: '過於樂觀,混淆年度效益與首年 ROI 定義。' }
        ]
      },
    {
        id: 4,
        question: '某酒莊建立資料湖整合 IoT 感測器、銷售 ERP 與社群媒體三類資料。以下哪項是最優先需解決的資料治理問題？',
        options: [
        { id: 'a', text: '選擇雲端服務商品牌', explanation: '供應商選擇重要，但不是首要的治理問題。' },
        { id: 'b', text: '建立資料字典與元數據標準，統一跨系統欄位定義', explanation: '✓ 正確! 跨異質系統整合最常見的失敗原因是語義不一致（如「產品編號」在三系統定義各異），元數據標準化是資料治理的基礎。', correct: true },
        { id: 'c', text: '優先購買 BI 視覺化工具', explanation: 'BI 工具是展示層，底層治理未解決，視覺化只是美化髒數據。' },
        { id: 'd', text: '聘請更多 IT 人員', explanation: '人力是執行資源，但治理框架缺失無法靠增員解決。' }
        ]
      },
      {
        id: 5,
        question: '酒莊品質預測模型在訓練集準確率 98%，驗證集僅 64%。此情況最可能是？',
        options: [
        { id: 'a', text: '欠擬合：模型過於簡單，兩集準確率均低', explanation: '欠擬合表現為訓練集與驗證集均低，此案例訓練集高達 98%，排除欠擬合。' },
        { id: 'b', text: '過擬合：模型記住訓練數據，泛化能力差', explanation: '✓ 正確! 訓練集遠高於驗證集（98% vs 64%）是過擬合的典型特徵，應加入正則化或增加訓練數據量。', correct: true },
        { id: 'c', text: '資料洩漏：測試數據混入訓練集', explanation: '資料洩漏通常使驗證集準確率也虛高，非此案例現象。' },
        { id: 'd', text: '模型正確，差距在容許範圍內', explanation: '34% 的差距遠超容許範圍（通常 <5%），屬嚴重過擬合。' }
        ]
      }
    ]
  }
})

export default l410Content
