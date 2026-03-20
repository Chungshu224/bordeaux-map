import { makeL4Lesson } from './l4-shared.js'

export const l412Content = makeL4Lesson({
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
  quiz: [
    {
      question: '在選擇專題題目時,「企業案例分析」與「產區策略研究」的主要差異是什麼?',
      options: [
        '企業案例聚焦單一酒莊的微觀決策,產區策略關注宏觀政策與產業結構',
        '企業案例只需定量數據,產區策略只需定性訪談',
        '企業案例研究時間較短,產區策略需 5 年以上數據',
        '企業案例不需要訪談,產區策略必須訪談政府官員'
      ],
      answer: 0,
      explanation: '企業案例分析聚焦單一酒莊的市場定位、財務表現、品牌策略等微觀層面決策,而產區策略研究關注整個產區的政策環境、產業結構、氣候適應等宏觀議題。兩者都需要混合研究法 (定量 + 定性),但分析單元和框架不同。'
    },
    {
      question: '在學術報告中,圖表設計的最佳實踐是:',
      options: [
        '每 1,000 字至少 1 張圖表,且每張圖表都需有編號、標題和數據來源註記',
        '圖表越多越好,至少每頁一張',
        '只用柱狀圖和圓餅圖,避免複雜的散點圖或熱力圖',
        '圖表只需放在附錄中,正文只描述即可'
      ],
      answer: 0,
      explanation: '視覺化黃金法則是每 1,000 字至少 1 張圖表,確保數據可視化與文字敘述的平衡。每張圖表都必須有:編號 (如「圖 3.2」)、描述性標題 (如「2015-2024 年 Saint-Émilion Grand Cru 出口量趨勢」)、數據來源註記 (如「來源:CIVB 2024」),這是學術規範的基本要求。'
    },
    {
      question: '在口頭答辯中,當考官問「你的樣本量是否足夠?」時,最佳的回應策略是:',
      options: [
        '誠實承認限制,但強調已達質性研究的理論飽和,並說明樣本選擇的代表性',
        '堅決否認樣本量不足,指出已訪談 20 位對象',
        '轉移話題,談論研究的其他優點',
        '反問考官「您認為需要多少樣本?」'
      ],
      answer: 0,
      explanation: '面對方法論質疑時,最佳策略是:承認研究限制 (展現學術誠實),同時強調方法論的優勢。例如:「雖然樣本量不及大規模問卷,但已達質性研究的理論飽和 (Theoretical Saturation),關鍵主題在第 8-9 次訪談後不再出現新內容。」這展示了對研究方法的深刻理解,而非防衛性反駁或迴避問題。'
    }
  ]
})

export default l412Content
