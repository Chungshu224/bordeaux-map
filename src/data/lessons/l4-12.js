import { makeL4Lesson } from './l4-shared.js'

const _l412Base = makeL4Lesson({
  cover: { title: '綜合專題與口頭答辯', subtitle: 'Level 4 - 課程 12', icon: '🎓' },
  intro: { content: '企業案例/產區策略報告、ROI (Return on Investment) 模擬、口頭報告與答辯。' },
  objectives: [
    { id: 1, text: '整合風土/釀造/市場/財務決策能力', icon: '🧭' },
    { id: 2, text: '撰寫結構化研究報告與圖表', icon: '📑' },
    { id: 3, text: '完成口頭簡報與答辯', icon: '🗣️' }
  ],
  chapters: [
    {
      title: '專題流程與研究設計',
      nav: '流程',
      icon: '🧭',
      html: `
        <h3>📋 專題題目選定</h3>
        <div class="project-topic-widget">
          <h4>三大題型方向</h4>
          <div class="topic-categories">
            <input type="radio" name="topic" id="topic-case" checked>
            <label for="topic-case">
              <strong>企業案例分析</strong>
              <span>範例:「波爾多中級莊 Château X 的市場定位策略與品牌重塑」</span>
              <span>要求:實地訪談、財務數據、SWOT (Strengths, Weaknesses, Opportunities, Threats) / 5 Forces 分析</span>
            </label>
            
            <input type="radio" name="topic" id="topic-region">
            <label for="topic-region">
              <strong>產區策略研究</strong>
              <span>範例:「氣候變遷下的 Saint-Émilion:葡萄品種調整與永續發展」</span>
              <span>要求:歷史數據、政策分析、利益相關者訪談</span>
            </label>
            
            <input type="radio" name="topic" id="topic-innovation">
            <label for="topic-innovation">
              <strong>創新技術評估</strong>
              <span>範例:「精準釀造技術對波爾多列級莊風格一致性的影響」</span>
              <span>要求:實驗數據、品質評估、成本效益分析</span>
            </label>
          </div>
          <div class="topic-content">
            <div data-topic="case">
              <h5>企業案例關鍵要素</h5>
              <ul>
                <li><strong>研究背景</strong>:酒莊歷史、產區定位、品牌現狀</li>
                <li><strong>問題界定</strong>:面臨挑戰 (市場萎縮/競爭加劇/代際傳承)</li>
                <li><strong>數據收集</strong>:訪談莊主/釀酒師、財務報表 (近 5 年)、市場調研</li>
                <li><strong>分析框架</strong>:SWOT (Strengths, Weaknesses, Opportunities, Threats - 內部優劣勢)、波特五力 (外部競爭)、PESTEL (Political, Economic, Social, Technological, Environmental, Legal - 宏觀環境)</li>
                <li><strong>解決方案</strong>:短期 (1-2 年) 與長期 (5-10 年) 戰略建議</li>
                <li><strong>預期成效</strong>:營收增長預測、品牌價值提升、市場份額變化</li>
              </ul>
            </div>
            <div data-topic="region">
              <h5>產區策略研究步驟</h5>
              <ul>
                <li><strong>歷史脈絡</strong>:產區 AOC (Appellation d'Origine Contrôlée) 演變、葡萄種植面積變化、經濟貢獻度</li>
                <li><strong>風土分析</strong>:氣候趨勢 (溫度/降雨/極端事件)、土壤適應性、水資源管理</li>
                <li><strong>產業結構</strong>:生產者數量、合作社比例、集中度 HHI (Herfindahl-Hirschman Index) 指數</li>
                <li><strong>政策環境</strong>:INAO (Institut National de l'Origine et de la Qualité) 法規、補貼政策、環保標準</li>
                <li><strong>利益相關者訪談</strong>:生產者協會、政府官員、批發商、零售商</li>
                <li><strong>戰略建議</strong>:品種調整 (如增加 Petit Verdot)、灌溉政策、永續認證推廣</li>
              </ul>
            </div>
            <div data-topic="innovation">
              <h5>創新技術評估方法</h5>
              <ul>
                <li><strong>技術描述</strong>:精準釀造/光學分選/微氧化/超聲波陳年等</li>
                <li><strong>實驗設計</strong>:對照組 (傳統方法) vs 實驗組 (創新技術)、樣本量 ≥30</li>
                <li><strong>品質評估</strong>:感官評分 (SAT 系統 - Systematic Approach to Tasting)、化學分析 (酚類/揮發酸/色度)</li>
                <li><strong>風格一致性</strong>:多年份對比、變異係數 CV (Coefficient of Variation) < 10% 為佳</li>
                <li><strong>成本效益</strong>:初期投資、年度運營成本、ROI (Return on Investment) 回收期 (通常 5-7 年)</li>
                <li><strong>市場接受度</strong>:消費者盲測、專家評審、媒體報導分析</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>🔬 研究方法論</h3>
        <p><strong>混合研究法</strong> (Mixed Methods):定量數據 + 定性訪談</p>
        <ul>
          <li><strong>定量方法</strong>:
            <ul>
              <li>財務分析:ROI、毛利率、資產周轉率、流動比率</li>
              <li>市場數據:銷量趨勢、價格彈性、市場佔有率</li>
              <li>統計建模:回歸分析 (價格驅動因素)、時間序列 (銷量預測)</li>
              <li>品質數據:感官評分、化學指標、年份評級</li>
            </ul>
          </li>
          <li><strong>定性方法</strong>:
            <ul>
              <li>半結構化訪談:準備 15-20 個開放式問題,錄音轉錄</li>
              <li>焦點小組:邀請 6-8 名利益相關者深度討論</li>
              <li>案例研究:對標分析 (選擇 2-3 個類似酒莊/產區)</li>
              <li>文獻回顧:學術論文、產業報告、政策文件</li>
            </ul>
          </li>
          <li><strong>數據三角驗證</strong>:多來源交叉檢驗,提高結論可信度</li>
        </ul>

        <h3>📊 數據收集與處理</h3>
        <div class="report-structure-checklist">
          <h4>資料來源清單</h4>
          <label><input type="checkbox"><span><strong>一手數據</strong>:訪談錄音/問卷調查/實地觀察筆記</span></label>
          <label><input type="checkbox"><span><strong>二手數據</strong>:酒莊年報/產區統計/市場研究報告</span></label>
          <label><input type="checkbox"><span><strong>財務數據</strong>:損益表/資產負債表/現金流量表 (近 5 年)</span></label>
          <label><input type="checkbox"><span><strong>市場數據</strong>:Liv-ex 價格/Wine-Searcher 零售價/拍賣記錄</span></label>
          <label><input type="checkbox"><span><strong>品質數據</strong>:Parker/JR/Decanter 評分/盲品結果</span></label>
          <label><input type="checkbox"><span><strong>氣候數據</strong>:Météo France/產區氣象站/Copernicus 衛星數據</span></label>
        </div>
        <p><strong>數據處理工具</strong>:</p>
        <ul>
          <li><strong>統計分析</strong>:R (tidyverse/ggplot2) 或 Python (pandas/scikit-learn)</li>
          <li><strong>質性分析</strong>:NVivo / MAXQDA (編碼與主題分析)</li>
          <li><strong>視覺化</strong>:Tableau/Power BI/D3.js</li>
          <li><strong>文獻管理</strong>:Zotero/Mendeley (自動引用格式)</li>
        </ul>

        <h3>✅ 研究倫理與限制</h3>
        <ul>
          <li><strong>知情同意</strong>:訪談前說明研究目的,簽署同意書</li>
          <li><strong>匿名保護</strong>:敏感財務數據脫敏處理 (如用百分比代替絕對值)</li>
          <li><strong>利益衝突聲明</strong>:若接受酒莊贊助需明確披露</li>
          <li><strong>研究限制</strong>:樣本量不足/時間限制/數據可得性問題</li>
        </ul>
      `
    },
    {
      title: '成果呈現與報告撰寫',
      nav: '呈現',
      icon: '📑',
      html: `
        <h3>📝 報告結構標準</h3>
        <p><strong>Diploma 專題報告</strong>典型長度:<strong>8,000-10,000 字</strong> (不含附錄)</p>
        <div class="report-structure-checklist">
          <h4>完整結構檢查清單</h4>
          <label><input type="checkbox"><span><strong>封面頁</strong>:標題、作者、日期、字數統計</span></label>
          <label><input type="checkbox"><span><strong>摘要 Abstract</strong>:250-300 字,涵蓋研究問題/方法/主要發現/結論</span></label>
          <label><input type="checkbox"><span><strong>目錄 (Contents)</strong>:自動生成,含頁碼、圖表目錄</span></label>
          <label><input type="checkbox"><span><strong>第 1 章:導論</strong>:背景、研究問題、目標、重要性 (800-1,000 字)</span></label>
          <label><input type="checkbox"><span><strong>第 2 章:文獻回顧</strong>:理論框架、既有研究、研究缺口 (1,500-2,000 字)</span></label>
          <label><input type="checkbox"><span><strong>第 3 章:研究方法</strong>:數據來源、分析工具、樣本描述 (1,000-1,200 字)</span></label>
          <label><input type="checkbox"><span><strong>第 4 章:研究發現</strong>:數據呈現、圖表分析、關鍵洞察 (2,500-3,000 字)</span></label>
          <label><input type="checkbox"><span><strong>第 5 章:討論</strong>:結果詮釋、理論對話、實務意涵 (1,500-2,000 字)</span></label>
          <label><input type="checkbox"><span><strong>第 6 章:結論與建議</strong>:主要發現、戰略建議、未來研究方向 (800-1,000 字)</span></label>
          <label><input type="checkbox"><span><strong>參考文獻 References</strong>:Harvard / APA (American Psychological Association) 格式,至少 30-40 篇文獻</span></label>
          <label><input type="checkbox"><span><strong>附錄 Appendices</strong>:訪談問卷、原始數據表、補充圖表</span></label>
        </div>

        <h3>📊 圖表設計原則</h3>
        <p><strong>視覺化黃金法則</strong>:每 1,000 字至少 1 張圖表</p>
        <ul>
          <li><strong>趨勢圖 (Line Chart)</strong>:
            <ul>
              <li>用途:時間序列數據 (銷量/價格/評分變化)</li>
              <li>範例:「2010-2024 年 Pauillac 列級莊平均價格指數」</li>
              <li>技巧:加信賴區間 (95% CI)、標註重要事件 (如 2012 霜害)</li>
            </ul>
          </li>
          <li><strong>柱狀圖 (Bar Chart)</strong>:
            <ul>
              <li>用途:類別比較 (不同產區/年份/酒莊)</li>
              <li>範例:「五大列級莊 2020 年份 En Primeur 釋出價格」</li>
              <li>技巧:降序排列、色彩編碼 (突出重點酒莊)</li>
            </ul>
          </li>
          <li><strong>散點圖 (Scatter Plot)</strong>:
            <ul>
              <li>用途:兩變數相關性 (評分 vs 價格/溫度 vs 酒精度)</li>
              <li>範例:「Parker 評分與 Liv-ex 價格相關性分析 (R² = 0.82)」</li>
              <li>技巧:加回歸線、標註離群值 (outliers)</li>
            </ul>
          </li>
          <li><strong>熱力圖 (Heatmap)</strong>:
            <ul>
              <li>用途:多維度數據矩陣 (年份×酒莊×評分)</li>
              <li>範例:「2000-2020 年 Médoc 八大酒莊評分表現熱力圖」</li>
              <li>技巧:選擇合適色階 (紅-黃-綠或單色漸變)</li>
            </ul>
          </li>
          <li><strong>箱型圖 (Box Plot)</strong>:
            <ul>
              <li>用途:分佈比較 (不同產區的價格分散度)</li>
              <li>範例:「Left Bank vs Right Bank 列級莊價格分佈」</li>
              <li>技巧:顯示中位數、四分位距、極值</li>
            </ul>
          </li>
        </ul>

        <h3>✍️ 學術寫作技巧</h3>
        <p><strong>避免常見錯誤</strong>:</p>
        <ul>
          <li>❌ <strong>過度主觀</strong>:「這款酒非常好喝」→ ✅「感官評分達 18/20,展現典型 Pauillac 風格」</li>
          <li>❌ <strong>缺乏數據支持</strong>:「市場反應良好」→ ✅「銷量年增長 23%,市場份額從 8% 升至 11%」</li>
          <li>❌ <strong>圖表無標題</strong>:→ ✅「圖 3.2:2015-2024 年 Saint-Émilion Grand Cru 出口量趨勢」</li>
          <li>❌ <strong>引用格式不一致</strong>:→ ✅ 統一使用 Harvard 格式「(Johnson, 2022)」</li>
          <li>❌ <strong>結論過於絕對</strong>:「證明了 X」→ ✅「數據支持 X 假設 (p < 0.05),但仍需進一步驗證」</li>
        </ul>
        <p><strong>專業術語一致性</strong>:建立術語表 Glossary,確保全文統一</p>
        <ul>
          <li>En Primeur (不用 En Premier 或 Primeur)</li>
          <li>AOC (Appellation d'Origine Contrôlée) / AOP (Appellation d'Origine Protégée) - 說明首次使用時已定義縮寫</li>
          <li>Château (不用 Chateau,保留重音符號)</li>
        </ul>

        <h3>🎨 敘事與說服力</h3>
        <p><strong>故事化數據</strong>:將枯燥數字轉化為引人入勝的敘事</p>
        <p><em>範例</em>:「2015 年霜害重創 Saint-Émilion,產量驟降 40%。然而列級莊 Château Pavie 憑藉精準的葡萄園管理,將損失控制在 25% 以內,其 2015 年份反而獲得 Parker 98 分高評,市場價格逆勢上漲 15%。這個案例凸顯了<strong>風險管理能力</strong>對波爾多頂級酒莊的重要性…」</p>
        <p><strong>邏輯鏈條</strong>:每段開頭用「主題句」(Topic Sentence),段末用「過渡句」(Transition)</p>
        <p><strong>視覺層次</strong>:用粗體、斜體、底線強調關鍵詞,但不過度使用</p>
      `
    },
    {
      title: '口頭答辯與專業展現',
      nav: '答辯',
      icon: '🗣️',
      html: `
        <h3>🎤 簡報結構設計</h3>
        <p><strong>時間分配</strong> (以 20 分鐘簡報為例):</p>
        <div class="defense-prep-scorecard">
          <h4>簡報時間規劃</h4>
          <label><input type="checkbox"><span><strong>開場 (2 分鐘)</strong>:自我介紹、研究背景、核心問題</span></label>
          <label><input type="checkbox"><span><strong>文獻與方法 (3 分鐘)</strong>:理論框架、研究設計、數據來源</span></label>
          <label><input type="checkbox"><span><strong>主要發現 (8 分鐘)</strong>:3-4 個關鍵洞察,每個配圖表</span></label>
          <label><input type="checkbox"><span><strong>討論與建議 (5 分鐘)</strong>:結果詮釋、戰略建議、研究限制</span></label>
          <label><input type="checkbox"><span><strong>結語 (2 分鐘)</strong>:總結貢獻、致謝、開放 Q&A</span></label>
        </div>
        <p><strong>投影片設計原則</strong>:</p>
        <ul>
          <li><strong>6×6 法則</strong>:每張投影片不超過 6 行,每行不超過 6 個字</li>
          <li><strong>視覺主導</strong>:圖表占比 60-70%,文字僅為標題和關鍵詞</li>
          <li><strong>色彩一致</strong>:主色調 (如波爾多酒紅) + 輔助色 (灰階/金色)</li>
          <li><strong>字體大小</strong>:標題 ≥ 28pt,內文 ≥ 20pt (確保後排可見)</li>
          <li><strong>總張數</strong>:約 15-20 張 (20 分鐘簡報),避免快速翻頁</li>
        </ul>

        <h3>💬 Q&A 應對策略</h3>
        <p><strong>常見問題類型與回應技巧</strong>:</p>
        <ul>
          <li><strong>方法論質疑</strong>:
            <ul>
              <li>問題:「為何選擇混合研究法而非純定量?」</li>
              <li>回應:「定量數據提供客觀趨勢,但定性訪談揭示<strong>因果機制</strong>。例如財務數據顯示營收下降 15%,但訪談發現是<strong>分銷渠道變化</strong>導致,這是純數字無法呈現的。」</li>
              <li>技巧:引用具體例子,展示方法論的<strong>互補價值</strong></li>
            </ul>
          </li>
          <li><strong>數據來源挑戰</strong>:
            <ul>
              <li>問題:「樣本量是否足夠?」</li>
              <li>回應:「我訪談了 12 位酒莊莊主和 8 位批發商,雖不及大規模問卷,但已達質性研究的<strong>理論飽和</strong> (Theoretical Saturation)。關鍵主題在第 8-9 次訪談後不再出現新內容。」</li>
              <li>技巧:承認限制,但強調<strong>研究深度優勢</strong></li>
            </ul>
          </li>
          <li><strong>結論過度推論</strong>:
            <ul>
              <li>問題:「能否將發現推廣到整個波爾多?」</li>
              <li>回應:「我的研究聚焦 Pauillac 列級莊,結論<strong>不應過度一般化</strong>。但機制 (如品牌溢價與評分的關係) 可能適用於其他產區,需進一步驗證。」</li>
              <li>技巧:謙虛回應,但指出<strong>理論貢獻</strong></li>
            </ul>
          </li>
          <li><strong>實務可行性</strong>:
            <ul>
              <li>問題:「你的建議酒莊真的會採用嗎?」</li>
              <li>回應:「我已與 Château X 分享初步結果,他們對<strong>數位行銷策略</strong>很感興趣,計劃 2025 年試點。當然實施需考慮成本和文化阻力,我在報告第 5.3 節討論了<strong>變革管理</strong>路徑。」</li>
              <li>技巧:展示與業界互動,提供<strong>落地細節</strong></li>
            </ul>
          </li>
        </ul>

        <h3>🎯 困難問題應對</h3>
        <p><strong>當遇到不知道答案的問題</strong>:</p>
        <ul>
          <li>✅ <strong>誠實承認</strong>:「這是個很好的問題,我目前沒有充分數據支持這個角度,但這是未來研究的重要方向。」</li>
          <li>✅ <strong>部分回應</strong>:「雖然我沒有直接研究這個變數,但從文獻來看...」</li>
          <li>✅ <strong>重新框架</strong>:「若從另一角度理解這個問題,我的數據顯示...」</li>
          <li>❌ <strong>避免</strong>:編造數據、迴避問題、與考官爭辯</li>
        </ul>

        <h3>🌟 專業形象塑造</h3>
        <div class="defense-prep-scorecard">
          <h4>答辯日檢查清單</h4>
          <label><input type="checkbox"><span><strong>著裝</strong>:商務正裝 (西裝或套裝),避免過於休閒</span></label>
          <label><input type="checkbox"><span><strong>時間管理</strong>:提前 15 分鐘到達,測試設備 (投影/麥克風)</span></label>
          <label><input type="checkbox"><span><strong>備用計畫</strong>:準備 USB 和雲端備份 (防止檔案損壞)</span></label>
          <label><input type="checkbox"><span><strong>肢體語言</strong>:保持眼神接觸,避免背對聽眾,使用手勢強調重點</span></label>
          <label><input type="checkbox"><span><strong>語速控制</strong>:約 120-140 字/分鐘,留意停頓 (讓聽眾消化資訊)</span></label>
          <label><input type="checkbox"><span><strong>專業用語</strong>:避免口語化 (如「然後」「就是」),用「因此」「具體而言」</span></label>
          <label><input type="checkbox"><span><strong>筆記準備</strong>:攜帶報告副本,方便快速查閱數據</span></label>
          <label><input type="checkbox"><span><strong>心態調整</strong>:考官目的是<strong>學術討論</strong>,非刁難</span></label>
        </div>

        <h3>📈 答辯後改進</h3>
        <p><strong>根據反饋修訂報告</strong>:</p>
        <ul>
          <li>答辯中提出的問題往往指向報告的<strong>薄弱環節</strong></li>
          <li>典型需補充內容:研究限制說明、額外文獻引用、數據解釋澄清</li>
          <li>修訂時間:通常給予 2-4 週,重新提交前需經指導教授審閱</li>
        </ul>
        <p><strong>評分標準</strong> (Diploma 典型權重):</p>
        <ul>
          <li>書面報告 (70%):研究設計、數據分析、文獻整合、寫作品質</li>
          <li>口頭答辯 (30%):簡報清晰度、問題回應、專業態度</li>
          <li>及格標準:總分 ≥ 55/100,且書面報告 ≥ 50/100</li>
        </ul>
      `
    }
  ],
  summary: { title: '總結', html: '<p>以實戰輸出驗證學習,建立可落地的方法論。</p>' },
  quiz: {
    title: '知識檢測',
    questions: [
      {
        id: 1,
        question: '在選擇專題題目時，「企業案例分析」與「產區策略研究」的主要差異是什麼？',
        options: [
          '企業案例聚焦單一酒莊的微觀決策，產區策略關注宏觀政策與產業結構',
          '企業案例只需定量數據，產區策略只需定性訪談',
          '企業案例研究時間較短，產區策略需 5 年以上數據',
          '企業案例不需要訪談，產區策略必須訪談政府官員'
        ],
        correct: 0,
        explanation: '企業案例分析聚焦單一酒莊的市場定位、財務表現、品牌策略等微觀層面決策，而產區策略研究關注整個產區的政策環境、產業結構、氣候適應等宏觀議題。兩者都需要混合研究法（定量 + 定性），但分析單元和框架不同。'
      },
      {
        id: 2,
        question: '在學術報告中，圖表設計的最佳實踐是：',
        options: [
          '每 1,000 字至少 1 張圖表，且每張圖表都需有編號、標題和數據來源註記',
          '圖表越多越好，至少每頁一張',
          '只用柱狀圖和圓餅圖，避免複雜的散點圖或熱力圖',
          '圖表只需放在附錄中，正文只描述即可'
        ],
        correct: 0,
        explanation: '視覺化黃金法則是每 1,000 字至少 1 張圖表，確保數據可視化與文字敘述的平衡。每張圖表都必須有：編號（如「圖 3.2」）、描述性標題、數據來源註記，這是學術規範的基本要求。'
      },
      {
        id: 3,
        question: '在口頭答辯中，當考官問「你的樣本量是否足夠？」時，最佳的回應策略是：',
        options: [
          '誠實承認限制，但強調已達質性研究的理論飽和，並說明樣本選擇的代表性',
          '堅決否認樣本量不足，指出已訪談 20 位對象',
          '轉移話題，談論研究的其他優點',
          '反問考官「您認為需要多少樣本？」'
        ],
        correct: 0,
        explanation: '面對方法論質疑時，最佳策略是承認研究限制（展現學術誠實），同時強調方法論的優勢。例如：「雖然樣本量不及大規模問卷，但已達質性研究的理論飽和（Theoretical Saturation），關鍵主題在第 8-9 次訪談後不再出現新內容。」這展示了對研究方法的深刻理解，而非防衛性反駁或迴避問題。'
      },
      {
        id: 4,
        question: 'Diploma 專題報告的典型字數要求與結構是什麼？',
        options: [
          '3,000-5,000 字，只需摘要、發現和結論三章',
          '8,000-10,000 字（不含附錄），涵蓋導論、文獻回顧、研究方法、發現、討論、結論六章',
          '15,000-20,000 字，格式不限',
          '5,000-6,000 字，以圖表為主，文字敘述為輔'
        ],
        correct: 1,
        explanation: 'Diploma 專題報告典型長度為 8,000-10,000 字（不含附錄），標準結構為：封面、摘要（250-300 字）、目錄、導論（800-1,000 字）、文獻回顧（1,500-2,000 字）、研究方法（1,000-1,200 字）、研究發現（2,500-3,000 字）、討論（1,500-2,000 字）、結論與建議（800-1,000 字）、參考文獻（≥30-40 篇）、附錄。'
      },
      {
        id: 5,
        question: '在混合研究法（Mixed Methods）中，「數據三角驗證」的主要目的是什麼？',
        options: [
          '確保研究者有三個以上的數據來源，符合學術規範',
          '透過多來源交叉檢驗，提高研究結論的可信度和效度',
          '節省數據收集時間，每種方法只需收集三分之一的數據',
          '讓圖表看起來更豐富，增加報告的視覺效果'
        ],
        correct: 1,
        explanation: '數據三角驗證（Data Triangulation）指透過多種數據來源（如財務報表 + 訪談 + 市場數據）或多種方法（定量 + 定性）交叉檢驗同一研究問題，提高結論的可信度和效度，降低單一來源或方法帶來的偏誤風險。'
      },
      {
        id: 6,
        question: '在波爾多酒莊競爭力分析中，HHI（Herfindahl-Hirschman Index）指數主要用來衡量什麼？',
        options: [
          '酒莊的品牌知名度',
          '市場集中度（產業集中程度）',
          '葡萄園的土壤多樣性',
          '酒莊的財務健康狀況'
        ],
        correct: 1,
        explanation: 'HHI 指數是衡量市場集中度的標準工具：HHI < 1,500 為分散市場，1,500-2,500 為中度集中，>2,500 為高度集中。在波爾多產業研究中，HHI 可反映少數大集團（如 LVMH、Rothschild）的市場支配程度，是產業結構分析的核心指標。'
      },
      {
        id: 7,
        question: '完成 Diploma 口頭答辯後，答辯委員會通常會：',
        options: [
          '立即宣布通過或不通過，不需修訂報告',
          '提出需要修訂的建議，給予 2-4 週時間修訂後重新提交',
          '要求重新進行所有研究，完整提交新報告',
          '只評估口頭表現，不再要求書面修訂'
        ],
        correct: 1,
        explanation: '答辯後的典型流程是：委員會根據討論提出修訂建議（clarifications/corrections），通常給予 2-4 週修訂時間，修訂完成後需經指導教授審閱才算完成。答辯中的問題往往直接指向報告的薄弱環節，是完善研究的最後機會。'
      },
      {
        id: 8,
        question: '在撰寫波爾多酒莊財務分析時，「資產周轉率」（Asset Turnover Ratio）偏低最可能反映什麼問題？',
        options: [
          '酒莊的品牌溢價能力不足',
          '資產規模龐大（如大量土地、設備）相對於銷售收入，資產利用效率有待提升',
          '酒莊的釀造技術落後於同業',
          '市場定價策略過於激進'
        ],
        correct: 1,
        explanation: '資產周轉率 = 銷售收入 ÷ 總資產。波爾多頂級酒莊因持有大量高價值土地（如 Grand Cru Classé 葡萄園）和設備，資產基數龐大，導致資產周轉率天然偏低。這不一定是問題，但需對比同類型酒莊（Peer Analysis）才能判斷是否存在效率問題。'
      }
    ],
    passingScore: 70,
    timeLimit: 360
  }
})

export const l412Content = [
  ..._l412Base,
  {
    type: 'quiz',
    title: 'L4 Diploma 模擬考 — 全課程總複習',
    questions: [
      {
        id: 1,
        question: '（L4-1 風土）在精準葡萄園管理中，NDVI（Normalized Difference Vegetation Index）的主要用途是？',
        options: [
          '測量土壤 pH 值與鹼性程度',
          '評估植被活力與地塊間生長差異，識別需要差異化管理的區域',
          '預測年份品質與採收期',
          '計算灌溉精確需水量'
        ],
        correct: 1,
        explanation: 'NDVI 透過近紅外線與紅光反射率差異量化植被活力。在葡萄園中，高 NDVI 代表旺盛生長，低值可能反映缺水或土壤問題，是精準管理的重要遙感指標，常用於識別需差異化管理的微地塊。'
      },
      {
        id: 2,
        question: '（L4-1 風土）波爾多左岸礫石土壤（Gravel）種植赤霞珠的核心農藝優勢組合是？',
        options: [
          '保水性強 + 有機質高 + 低排水率',
          '排水快 + 白天蓄熱/夜間輻射 + 促進成熟',
          '礦物質豐富 + 高保肥力 + 深層根系快速擴展',
          '低滲透率 + 根系集中 + 早熟特性'
        ],
        correct: 1,
        explanation: '礫石土壤排水極佳（防止積水），白天吸收熱能、夜間輻射，有助赤霞珠在波爾多氣候下達完整成熟。黏土保水性強但不適合赤霞珠（更適合梅洛）。'
      },
      {
        id: 3,
        question: '（L4-2 釀造）乳酸菌（LAB）進行蘋果酸乳酸發酵（MLF）的最適溫度範圍是？',
        options: ['5-10°C', '18-22°C', '28-32°C', '35-40°C'],
        correct: 1,
        explanation: 'LAB（尤其 Oenococcus oeni）在 18-22°C 活性最佳，低於 15°C 會顯著減慢 MLF 進行。波爾多通常在主發酵完成後保持酒窖溫度在此範圍確保 MLF 順利完成，降低蘋果酸含量並增加複雜度。'
      },
      {
        id: 4,
        question: '（L4-2 釀造）「超微氧化」（Micro-oxygenation, MOX）的主要釀造目的是？',
        options: [
          '加速酒石酸鉀穩定化',
          '模擬橡木桶陳年的微量氧接觸，穩定色素並柔化單寧',
          '降低揮發酸（Volatile Acidity）含量',
          '提高殘餘糖分（Residual Sugar）'
        ],
        correct: 1,
        explanation: 'MOX 透過控制微量溶氧，促進花青素與單寧縮合（形成穩定色素）、柔化粗澀單寧，可在不鏽鋼桶中模擬部分橡木桶效果，縮短陳年時間或降低橡木桶使用比例。'
      },
      {
        id: 5,
        question: '（L4-3 橡木）橡木桶「重度烘烤」（Heavy Toast）相比「輕度烘烤」（Light Toast）主要增加哪類香氣？',
        options: [
          '新鮮雪松木香（Cedary）',
          '椰子、香草香（Coconut/Vanilla）',
          '咖啡、巧克力、煙燻香（Coffee/Chocolate/Smoky）',
          '牛奶糖、奶油香（Caramel/Butter）'
        ],
        correct: 2,
        explanation: '重度烘烤破壞更多木質素和半纖維素，產生糠醛（Furfural）等化合物，帶來咖啡、巧克力和煙燻特徵；輕烘烤則保留更多香草醛（Vanillin）和椰子香。高溫烘烤同時降低木質單寧的萃取量。'
      },
      {
        id: 6,
        question: '（L4-3 橡木）「超萃取風險」（Over-Extraction Risk）最可能出現在哪種組合中？',
        options: [
          '使用舊桶 + 大容量（600L）+ 長期接觸',
          '100% 新桶 + 小容量（225L）+ 頻繁攪桶 + 高酒精度（>14.5%）',
          '50% 新桶 + 中容量（300L）+ 正常陳年',
          '舊桶 + 頻繁換桶 + 低溫環境'
        ],
        correct: 1,
        explanation: '100% 新桶比例高、小容量（液體/木材接觸面積比大）、頻繁攪桶促進萃取、高酒精度（有效溶劑）四因素疊加，大幅提高超萃取風險，導致過度木質感遮蓋果香。'
      },
      {
        id: 7,
        question: '（L4-4 財務）酒莊盈虧平衡分析（Break-Even Analysis）的正確公式是？',
        options: [
          '盈虧平衡點（數量）= 固定成本 ÷（售價 − 單位變動成本）',
          '盈虧平衡點（數量）= 總收入 × 毛利率',
          '盈虧平衡點（數量）= 固定成本 + 總變動成本',
          '盈虧平衡點（數量）= （固定成本 + 目標利潤）÷ 售價'
        ],
        correct: 0,
        explanation: '盈虧平衡點 = 固定成本 ÷ 邊際貢獻（售價 − 單位變動成本）。例：固定成本 €500,000，售價 €50，單位變動成本 €20 → 平衡點 = €500,000 ÷ €30 = 16,667 瓶。選項D忽略了邊際貢獻概念，選項B完全錯誤。'
      },
      {
        id: 8,
        question: '（L4-4 財務）酒莊投資新發酵設備 CAPEX €800,000，預計年增利潤 €160,000，簡單回收期為幾年？',
        options: ['3 年', '5 年', '8 年', '10 年'],
        correct: 1,
        explanation: '簡單回收期 = 初始投資 ÷ 年度淨現金流入 = €800,000 ÷ €160,000 = 5 年。實際決策應考慮 NPV/IRR（貨幣時間價值），但簡單回收期是快速評估的常用指標。一般業界要求高端設備投資回收期 ≤ 7 年。'
      },
      {
        id: 9,
        question: '（L4-5 品牌）波爾多列級莊發展「DTC（Direct-to-Consumer）」渠道的主要優勢是？',
        options: [
          '能繞過 AOC 法規限制，自行定價',
          '提高單瓶邊際利潤，同時建立直接消費者關係與品牌忠誠度',
          '降低釀造與勞動成本',
          '允許在全球市場無限制銷售'
        ],
        correct: 1,
        explanation: 'DTC（酒莊直銷、自有電商、品酒室）可省去中間商 30-50% 利潤分成，同時獲取消費者數據，建立 CRM 系統，提升品牌黏性。但 DTC 通常占高端波爾多酒莊總銷售的 10-20%，需平衡傳統通路關係。'
      },
      {
        id: 10,
        question: '（L4-5 品牌）品牌「定位聲明」（Positioning Statement）的標準四要素框架是？',
        options: [
          '目標市場 + 核心利益 + 競爭參考框架 + 可信度依據',
          '產品功能 + 定價策略 + 促銷活動 + 通路選擇（4P 框架）',
          '品牌名稱 + 標誌設計 + 主視覺 + 廣告口號',
          '生產成本 + 目標毛利率 + 競爭對手價格 + 消費者支付意願'
        ],
        correct: 0,
        explanation: '完整定位聲明：「針對 [目標市場]，[品牌] 提供 [核心利益]，相較於 [競爭框架中的替代品]，因為 [可信度依據]。」確保定位有清晰受眾定義又有差異化價值主張，避免 4P 混淆（4P 是行銷組合，非定位框架）。'
      },
      {
        id: 11,
        question: '（L4-6 法規）INAO（Institut National de l\'Origine et de la Qualité）在波爾多 AOC 管理中的主要職責是？',
        options: [
          '直接釀造所有 AOC 等級葡萄酒',
          '制定並執行 AOC 的產地、品種、釀造規範，負責認證審批',
          '管理葡萄酒出口許可證',
          '設定市場零售價格與最低定價'
        ],
        correct: 1,
        explanation: 'INAO 負責法國地理標誌（GI）管理，制定每個 AOC 的規範書（Cahier des Charges），包括允許品種、最低自然酒精度、最高產量（hl/ha）、釀造工藝要求等，並進行官方認證審查。定價由市場決定，非 INAO 職責。'
      },
      {
        id: 12,
        question: '（L4-6 法規）波爾多葡萄酒出口至美國時，TTB（Alcohol and Tobacco Tax and Trade Bureau）的核心標示合規要求是？',
        options: [
          '必須標示在法國橡木桶中陳年',
          '必須使用英文標示酒精含量、淨容量、政府健康警語，並申請 COLAs 認證',
          '必須在美國境內進行二次裝瓶',
          '必須提交所有原料的農藥殘留完整報告'
        ],
        correct: 1,
        explanation: '出口至美國的葡萄酒必須通過 TTB 的 COLAs（Certificate of Label Approval）審批，確保標示符合 27 CFR Part 4：酒精濃度（標示誤差 ±0.5%）、政府健康警語（必須印刷）、容量標示等。這是跨境合規的基本門檻。'
      },
      {
        id: 13,
        question: '（L4-7 風險）在氣候風險評估中，波爾多酒莊應用「情境分析」（Scenario Analysis）的主要目的是？',
        options: [
          '精確預測下一年份的葡萄收成量',
          '針對不同氣候情境（如升溫 1.5°C vs 4°C）評估業務影響，制定適應策略',
          '計算過去 10 年的平均溫度變化',
          '確定保險理賠金額計算基準'
        ],
        correct: 1,
        explanation: '情境分析（參考 TCFD 框架）幫助酒莊評估不同氣候路徑下的物理風險（高溫、霜害）和轉型風險（碳稅政策）。讓管理層提前規劃適應策略（早熟品種試驗、葡萄園海拔調整），是 ESG 整合報告的核心工具。'
      },
      {
        id: 14,
        question: '（L4-7 ESG）「雙重重大性」（Double Materiality）的概念是指？',
        options: [
          '公司同時對兩個以上的利益相關者負責',
          '評估企業對環境社會的影響（影響重大性）以及環境社會風險對企業財務的影響（財務重大性）兩個維度',
          '企業必須同時準備兩份 ESG 報告送交不同監管機構',
          'ESG 評分必須由兩家以上獨立機構認證才有效'
        ],
        correct: 1,
        explanation: '雙重重大性是歐盟 CSRD 的核心概念：(1) 影響重大性：企業活動對外部環境/社會的影響；(2) 財務重大性：外部可持續發展議題對企業財務表現的影響。兩個維度缺一不可，確保 ESG 報告的全面性。'
      },
      {
        id: 15,
        question: '（L4-8 永續）在 GHG 核算中，「範疇三排放」（Scope 3 Emissions）指的是？',
        options: [
          '企業直接擁有或控制設施產生的排放（如酒窖、農用機械）',
          '外購電力、熱力產生的間接排放',
          '價值鏈（上游供應商和下游消費者）產生的所有其他間接排放',
          '農場葡萄園直接施用農藥和化肥的排放'
        ],
        correct: 2,
        explanation: 'GHG Protocol 三範疇：Scope 1（直接排放）、Scope 2（外購能源間接排放）、Scope 3（價值鏈排放：包括肥料生產、包材、物流、廢棄物處理等）。對大多數酒莊，Scope 3 佔總排放量 60-80%，是減排最大機會。'
      },
      {
        id: 16,
        question: '（L4-8 認證）以下哪種永續認證最專注於葡萄園生物多樣性保護與農藥使用控制？',
        options: [
          'ISO 14001（環境管理系統）',
          'HVE（Haute Valeur Environnementale — 高環境價值）',
          'SA8000（社會責任標準）',
          'HACCP（食品安全危害分析與關鍵控制點）'
        ],
        correct: 1,
        explanation: 'HVE 是法國農業部認證，重點評估農藥使用（壓力計）、化肥使用、生態多樣性保護（植被覆蓋、授粉昆蟲）和灌溉水資源管理，分三個等級，等級三為最高，適合強調生態葡萄園的波爾多酒莊。'
      },
      {
        id: 17,
        question: '（L4-9 感官）WSET 系統品評法（SAT）外觀評估的三個核心要素是？',
        options: [
          '品種判斷 + 年份猜測 + 產區識別',
          '清澈度 + 濃度 + 顏色（色調/色深）',
          '香氣類型 + 強度 + 發展程度',
          '甜度 + 酸度 + 酒體感知'
        ],
        correct: 1,
        explanation: 'SAT 外觀評估：(1) 清澈度：清澈/帶光澤/濁；(2) 濃度：淡/中/深；(3) 顏色：色調（年輕紅酒紫紅 → 老酒棕橙）+ 主要顏色。這是系統化描述外觀的標準框架，確保品評的客觀性與可複製性。'
      },
      {
        id: 18,
        question: '（L4-9 感官）波爾多頂級紅酒「結構」（Structure）的四大支撐要素是？',
        options: [
          '果香強度 + 橡木風味 + 顏色深度 + 複雜度',
          '酸度 + 單寧 + 酒精 + 酒體',
          '產區 + 品種 + 年份 + 釀造師風格',
          '殘留糖分 + CO₂ + 揮發酸 + 甘油'
        ],
        correct: 1,
        explanation: '葡萄酒結構由四大要素構成：(1) 酸度：清爽感和陳年潛力；(2) 單寧：骨架和收斂感（紅酒）；(3) 酒精：酒體和溫熱感；(4) 酒體（甘油等）：質地和豐厚感。高品質波爾多酒各要素相互平衡，缺一則失衡。'
      },
      {
        id: 19,
        question: '（L4-10 數位）在葡萄酒定價預測中，機器學習回歸模型相比傳統統計回歸的主要優勢是？',
        options: [
          '結果更易於向非技術人員解釋（可解釋性更高）',
          '能自動處理非線性關係和複雜交互效應，提高複雜數據集的預測精度',
          '只需更少的歷史數據就能訓練，適合小樣本',
          '完全消除過擬合（Overfitting）風險'
        ],
        correct: 1,
        explanation: '機器學習（如 Random Forest、XGBoost）的核心優勢在於捕捉非線性關係（如評分對價格的邊際效益遞減）和複雜交互效應（年份×酒莊×評分的聯合影響）。傳統 OLS 假設線性關係，在複雜預測任務中精度有限。'
      },
      {
        id: 20,
        question: '（L4-10 數位）在葡萄園 IoT 系統中，「邊緣計算」（Edge Computing）相較「雲端計算」的主要優勢是？',
        options: [
          '計算成本更低，完全無需硬體投資',
          '減少數據傳輸延遲，在網路不穩定的農村環境確保實時決策',
          '數據儲存容量更大，可保存更長歷史記錄',
          '系統安全性更高，完全防止任何網路攻擊'
        ],
        correct: 1,
        explanation: '邊緣計算在本地設備（感應器、閘道器）直接處理數據，不需傳輸至遠端伺服器。在葡萄園這類網路覆蓋有限的環境，確保灌溉控制、霜害警報等實時決策不受延遲影響，同時降低頻寬需求。'
      },
      {
        id: 21,
        question: '（L4-11 期酒）波爾多 En Primeur 期酒釋出價格通常在哪個時間點確定？',
        options: [
          '葡萄採收後立即釋出（約 9-10 月）',
          '裝瓶後正式上市前（約次年 1-2 月）',
          '葡萄酒在橡木桶陳年約 18 個月後，翌年春季（4-6 月）陸續釋出',
          '裝瓶後 3 年，確保品質穩定後才公布定價'
        ],
        correct: 2,
        explanation: 'En Primeur 時程：採收（9-10 月）→ 橡木桶陳年（18-24 個月）→ 翌年 4 月「期酒週」（semaine des primeurs）開放媒體品評 → 4-6 月陸續釋出價格 → 正式裝瓶在採收後約 2 年。'
      },
      {
        id: 22,
        question: '（L4-11 投資）Liv-ex 交易所的「Bordeaux 500」指數代表什麼？',
        options: [
          '波爾多 500 家頂級酒莊的加權平均指數',
          '以波爾多五大產區標誌性酒款（2001-2010 年份）構成的市場指數',
          '過去 500 個交易日的波爾多市場總交易量',
          '投資級波爾多酒莊評分排名前 500 名的酒款'
        ],
        correct: 1,
        explanation: 'Liv-ex Bordeaux 500 包含來自 Médoc、St-Émilion、Pomerol、Sauternes 和 Graves 的標誌性酒款，涵蓋 2001-2010 的十個年份，以市值加權，是衡量波爾多頂級酒市場表現的主要基準指數。'
      },
      {
        id: 23,
        question: '（L4-12 研究）「偏誤」（Bias）與「隨機誤差」（Random Error）的本質差異是？',
        options: [
          '偏誤是系統性方向性誤差，隨機誤差則隨機分佈無固定方向',
          '偏誤只出現在定性研究，隨機誤差只出現在定量研究',
          '增加樣本量可以完全消除偏誤，但無法消除隨機誤差',
          '兩者本質相同，只是不同學術領域使用不同術語'
        ],
        correct: 0,
        explanation: '偏誤（如選擇性偏誤、確認偏誤）是系統性的，導致結果一致性偏離真實值，增加樣本量無法消除。隨機誤差呈正態分佈，可通過增加樣本量或多次測量平均來降低。兩者的識別是研究品質的核心議題。'
      },
      {
        id: 24,
        question: '（L4-12 答辯）若考官質疑「你的研究結論無法普遍化（Generalizability）」，最適合的學術回應是？',
        options: [
          '堅持研究結論可普遍適用，提供更多數據支持論點',
          '承認個案研究的普遍化限制，強調理論貢獻和機制洞察的可轉移性',
          '提議重新進行更大規模的研究來驗證',
          '解釋為什麼普遍化對此研究並不重要'
        ],
        correct: 1,
        explanation: '學術誠信要求承認個案研究的外部效度限制。可強調：(1) 揭示的機制（如 ESG 認證對品牌溢價的影響機制）在不同背景下可能相似（可轉移性）；(2) 為未來比較研究提供基準；(3) 深度勝於廣度是質性研究的合理策略選擇。'
      },
      {
        id: 25,
        question: '（L4 綜合）在波爾多葡萄酒行業中，「垂直整合」（Vertical Integration）的酒莊商業模式最能體現在哪個例子？',
        options: [
          '多個酒莊組成行銷聯盟，共同參加國際葡萄酒展',
          '酒莊同時擁有葡萄園、釀酒廠、儲藏設施，並建立自有直銷渠道和葡萄酒旅遊項目',
          '酒莊將釀造外包給大型合作酒廠以降低成本',
          '酒莊透過期貨市場對沖氣候和價格風險'
        ],
        correct: 1,
        explanation: '垂直整合指企業控制供應鏈多個環節。波爾多頂級酒莊的極致模式：自有葡萄園（原料控制）+ 自建酒窖（製造）+ 自建儲藏（庫存管理）+ DTC 電商/品酒室（零售）+ 葡萄酒旅遊（體驗行銷），從農場到餐桌全程自主，最大化價值鏈利潤。'
      }
    ],
    passingScore: 70,
    timeLimit: 720
  }
]

export default l412Content
