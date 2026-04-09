// L3-13 Part 1: 創新技術與未來趨勢 - 精準農業與智能釀造
// 探索現代科技在波爾多葡萄園管理和釀造工藝中的創新應用

export const l313Part1Content = [
  // 課程簡介
  {
    type: 'intro',
    title: '課程導讀 - 第一部分',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          波爾多葡萄酒業正處於科技革命的前沿。衛星遙感技術監測葡萄園的每一寸土地，無人機與感應器網絡提供即時的植株健康數據，大數據分析優化每一個釀造決策，人工智能預測葡萄酒的陳年潛力。這些創新技術正在重新定義傳統農業和釀酒業的未來。
        </p>

        <p class="intro-context">
          本課程第一部分將深入探討精準農業技術、數據分析應用、人工智能在釀造中的運用。從 Château Latour 的 GPS 土壤地圖，到 Château Margaux 的機器學習收成預測，從智能不鏽鋼罐到自動化裝瓶線，我們將揭示這些創新技術如何在保持傳統品質的同時，提升效率、可持續性和品質穩定性。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🛰️ 掌握精準農業技術</h4>
            <p>學習衛星遙感、無人機巡航、土壤感應器、智能灌溉等技術在葡萄園管理中的應用</p>
          </div>

          <div class="point-item">
            <h4>📊 理解大數據分析應用</h4>
            <p>掌握如何運用氣候數據、土壤分析、成熟度指標預測來優化採收時機與釀造決策</p>
          </div>

          <div class="point-item">
            <h4>🤖 學習 AI 在釀造中的應用</h4>
            <p>理解人工智能如何優化調配決策、預測陳年潛力、控制發酵過程、協助品質管控</p>
          </div>

          <div class="point-item">
            <h4>⚖️ 評估科技與傳統的平衡</h4>
            <p>分析科技創新對傳統釀酒文化的影響，以及如何在創新與傳承之間找到平衡</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本部分後，您將全面理解現代科技如何賦能波爾多葡萄酒業，以及創新與傳統的和諧共存之道。
        </p>

        <div class="course-info">
          <p><strong>預計學習時間：</strong>35分鐘</p>
          <p><strong>難度等級：</strong>高級專業</p>
        </div>
      </div>
    `,
    icon: '🚀'
  },

  // 第一章：精準農業革命
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '精準農業革命',
    subtitle: '科技重塑葡萄園管理',
    icon: '🛰️',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  // 衛星遙感系統（一）：多光譜影像分析
  {
    type: 'content',
    title: '衛星遙感系統（一）：多光譜影像分析',
    content: `<div style="font-family:sans-serif;padding:12px;max-width:900px;margin:0 auto">
  <div style="background:linear-gradient(135deg,#0a3d5c,#1a7a5e);color:#fff;padding:8px 14px;border-radius:6px;font-size:0.85em;font-weight:700;margin-bottom:12px">
    🛰️ 衛星遙感 × 多光譜分析｜從太空俯瞰每一株葡萄藤的健康狀態
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
    <div style="background:#f0f9ff;border:1px solid #7dd3fc;border-top:3px solid #0284c7;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#0284c7;font-size:0.9em;margin-bottom:8px">📊 NDVI 植被指數監測</div>
      <table style="width:100%;border-collapse:collapse;font-size:0.82em;margin-bottom:8px">
        <tr><th style="background:#0284c7;color:#fff;padding:4px 8px;text-align:left">植物狀態</th><th style="background:#0284c7;color:#fff;padding:4px 8px;text-align:center">NDVI值</th><th style="background:#0284c7;color:#fff;padding:4px 8px;text-align:right">預警</th></tr>
        <tr style="background:#f0fdf4"><td style="padding:3px 8px;font-weight:600;color:#15803d">✅ 健康</td><td style="padding:3px 8px;text-align:center;font-weight:700">0.6–0.9</td><td style="padding:3px 8px;text-align:right;color:#6b7280">—</td></tr>
        <tr style="background:#fef9c3"><td style="padding:3px 8px;font-weight:600;color:#b45309">⚠️ 警戒</td><td style="padding:3px 8px;text-align:center;font-weight:700">0.2–0.5</td><td style="padding:3px 8px;text-align:right;color:#dc2626;font-weight:700">提前 2–3週</td></tr>
      </table>
      <div style="background:#fff;border:1px solid #bae6fd;border-radius:4px;padding:7px;font-size:0.82em">
        <strong style="color:#0369a1">📌 Château Margaux 2024：</strong><br>NDVI 0.78 → 0.65（↓17%）→ 即時灌溉搶救<br><strong style="color:#dc2626">ROI 44:1</strong>，避免損失 €42,320
      </div>
    </div>
    <div style="background:#fff7ed;border:1px solid #fed7aa;border-top:3px solid #ea580c;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#ea580c;font-size:0.9em;margin-bottom:8px">🌡️ 熱紅外影像 × 水分管理</div>
      <div style="font-size:0.83em;color:#374151;line-height:1.65;margin-bottom:8px">
        <strong>原理：</strong>水分充足→蒸散冷卻→葉溫低；缺水→蒸散停止→葉溫升高<br>
        <strong>應用：</strong>即時偵測全園水分壓力分布，引導精準灌溉
      </div>
      <div style="background:#fff;border:1px solid #fed7aa;border-radius:4px;padding:7px;font-size:0.82em">
        <strong style="color:#ea580c">📌 Pessac-Léognan 案例：</strong><br>節水 <strong style="color:#16a34a">36%</strong>｜品質 <strong style="color:#2563eb">+3分</strong>｜收益 <strong style="color:#16a34a">€200,000</strong><br>
        <strong style="color:#7c3aed">ROI 42倍</strong>
      </div>
    </div>
  </div>
  <div style="background:#f5f3ff;border:1px solid #c4b5fd;border-radius:8px;padding:10px">
    <div style="font-weight:700;color:#7c3aed;font-size:0.9em;margin-bottom:6px">🗺️ 空間變異分析 × 精準分區採收（Pauillac 案例）</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;text-align:center;font-size:0.83em">
      <div style="background:#fff;border:1px solid #c4b5fd;border-radius:6px;padding:8px"><div style="font-size:1.4em;font-weight:700;color:#7c3aed">5</div><div style="color:#6b7280">精準分區</div></div>
      <div style="background:#fff;border:1px solid #c4b5fd;border-radius:6px;padding:8px"><div style="font-weight:700;color:#16a34a">+2–3分</div><div style="color:#6b7280">品質提升</div></div>
      <div style="background:#fff;border:1px solid #c4b5fd;border-radius:6px;padding:8px"><div style="font-weight:700;color:#dc2626">€780K</div><div style="color:#6b7280">額外年收益</div></div>
      <div style="background:#fff;border:1px solid #c4b5fd;border-radius:6px;padding:8px"><div style="font-weight:700;color:#0284c7">正牌優先</div><div style="color:#6b7280">嚴格篩選</div></div>
    </div>
  </div>
</div>
      <!--ORIGINAL:
      <div class="chapter-content">
        <div class="satellite-remote-sensing">
          <h3>🛰️ 衛星遙感系統：多光譜影像分析</h3>
          <p class="intro-text">想像在太空中有一雙「上帝之眼」，能夠看到葡萄園每一片葉子的健康狀況——這就是衛星遙感技術的魔力。通過分析不同波段的光譜反射，我們能「看見」人眼無法察覺的細微變化：哪裡水分不足、哪裡營養缺乏、哪裡病害初起。這不是科幻，而是波爾多頂級酒莊的日常。</p>
          
          <div class="ndvi-monitoring-system">
            <h4>📊 NDVI植被指數監測系統</h4>
            <div class="ndvi-applications">
              <div class="ndvi-technology">
                <h5>什麼是NDVI？</h5>
                <p>NDVI (Normalized Difference Vegetation Index，歸一化植被指數) 是利用植物對紅光和近紅外光的不同反射特性計算的指數。健康植物強烈反射近紅外光、吸收紅光，NDVI值高（0.6-0.9）；生病或缺水的植物NDVI值低（0.2-0.5）。<br><br>
                
                <strong>核心價值：</strong><br>
                • <strong>早期預警：</strong>在人眼能看見問題<strong>2-3週前</strong>就能檢測出異常<br>
                • <strong>全覆蓋監測：</strong>一次衛星過境可監測<strong>數千公頃</strong>葡萄園<br>
                • <strong>時間序列分析：</strong>追蹤整個生長季的植被變化趨勢<br>
                • <strong>精準分區：</strong>識別田間不同管理區域的空間變異</p>
                
                <div class="example-box">
                  <h6>💡 NDVI監測實戰：Château Margaux的水分壓力早期發現</h6>
                  <p><strong>2024年6月乾旱事件：</strong><br><br>
                  
                  <em>背景：</em>5月下旬-6月上旬連續18天無降雨，地表看似正常。<br><br>
                  
                  <strong>衛星監測時間線：</strong><br><br>
                  
                  <strong>6月3日（Sentinel-2衛星過境）：</strong><br>
                  • AI系統自動分析10米解析度NDVI影像<br>
                  • 發現地塊A-7東南角NDVI從0.78降至0.65（<strong>下降17%</strong>）<br>
                  • 影響面積：2.3公頃（佔該地塊12%）<br>
                  • <strong>AI警報：「地塊A-7東南角疑似水分壓力，建議實地確認」</strong><br><br>
                  
                  <strong>6月4日上午（實地確認）：</strong><br>
                  • 酒窖主任帶領團隊前往A-7東南角<br>
                  • <em>肉眼觀察：</em>「葡萄藤看起來完全正常，沒有萎蔫跡象」<br>
                  • 土壤水分儀測量：30cm深度含水量18%（臨界值20%）<br>
                  • <strong>確認：確實開始缺水，但尚未出現可見症狀</strong><br><br>
                  
                  <strong>決策與行動：</strong><br>
                  • 立即對A-7東南角啟動補充灌溉<br>
                  • 灌溉量：20mm（相當於20L/㎡）<br>
                  • 灌溉時間：6月5日凌晨4:00-7:00（蒸發量最低）<br>
                  • 灌溉面積：2.3公頃<br><br>
                  
                  <strong>6月13日（後續衛星監測）：</strong><br>
                  • NDVI恢復至0.76（接近正常）<br>
                  • 鄰近未灌溉區域NDVI繼續下降至0.58（<strong>嚴重壓力</strong>）<br>
                  • 肉眼可見：未灌溉區葉片開始發黃、果實偏小<br><br>
                  
                  <strong>收穫時對比（9月25日）：</strong><br><br>
                  
                  <em>及時灌溉區（A-7東南角2.3公頃）：</em><br>
                  • 產量：8,200 kg/ha（正常水平）<br>
                  • 糖度：24.8 °Brix<br>
                  • 酚類成熟度：優秀（種子完全褐化）<br>
                  • 品鑑評分：93分<br><br>
                  
                  <em>對照區（鄰近未灌溉2.1公頃）：</em><br>
                  • 產量：5,900 kg/ha（<strong>下降28%</strong>）<br>
                  • 糖度：26.2 °Brix（<strong>過高，脫水效應</strong>）<br>
                  • 酚類成熟度：不均（<strong>部分種子仍綠色</strong>）<br>
                  • 品鑑評分：87分（<strong>單寧生澀、平衡度不足</strong>）<br><br>
                  
                  <strong>經濟效益計算：</strong><br>
                  • 衛星數據訂閱成本：€2,500/年（覆蓋85公頃）<br>
                  • 單次灌溉成本：€450（水費+電費+人工）<br>
                  • 搶救的產量價值：2.3公頃 × 2,300 kg/ha × €8/kg = <strong>€42,320</strong><br>
                  • 品質保護價值：避免6分評分損失，每分約€15,000 = <strong>€90,000</strong><br>
                  • <strong>總效益：€132,320，投資回報率 44:1</strong><br><br>
                  
                  <strong>酒窖主任的反思：</strong><br>
                  「沒有衛星監測，我們根本不會發現問題——當肉眼能看見時，已經晚了。NDVI讓我們能在『問題發生前』就解決問題。這不是錦上添花，而是現代精品酒莊的必備工具。」</p>
                </div>
              </div>
              
              <div class="spatial-variability-analysis">
                <h5>空間變異分析與分區管理</h5>
                <p>同一個葡萄園內，不同位置的土壤、排水、日照都不同，導致葡萄生長差異——這就是「空間變異性」。NDVI衛星影像能清晰顯示這些差異，幫助酒莊實現「分區管理」。<br><br>
                
                <strong>應用場景：</strong><br>
                • <strong>精準施肥：</strong>NDVI高的區域（生長旺盛）減少施肥，避免徒長<br>
                • <strong>差異化採收：</strong>根據NDVI分區，先採收成熟度高的區域<br>
                • <strong>選擇性疏果：</strong>在NDVI極高區域（產量過高）進行疏果<br>
                • <strong>調配決策：</strong>分區發酵、分別評估，優化調配方案</p>
                
                <div class="example-box">
                  <h6>💡 空間變異分析案例：Pauillac一級莊的精準分區採收</h6>
                  <p><strong>2024年採收季的挑戰：</strong><br><br>
                  
                  酒莊32公頃Cabernet Sauvignon地塊，地形複雜：<br>
                  • 北部高地：礫石土壤，排水優良<br>
                  • 中部平地：黏土-礫石混合<br>
                  • 南部低地：黏土為主，排水稍差<br><br>
                  
                  <strong>傳統採收方式：</strong>所有區域同一天採收，導致成熟度不均。<br><br>
                  
                  <strong>2024年衛星輔助分區採收：</strong><br><br>
                  
                  <strong>8月1日（轉色期）NDVI分析：</strong><br>
                  • AI系統分析Sentinel-2影像，識別出5個不同NDVI區域<br>
                  • 區域1（北部高地8.5公頃）：NDVI 0.72 - 生長適中<br>
                  • 區域2（中北平地7.2公頃）：NDVI 0.68 - 略緩慢<br>
                  • 區域3（中部平地9.8公頃）：NDVI 0.75 - 標準<br>
                  • 區域4（中南平地4.1公頃）：NDVI 0.82 - <strong>生長旺盛</strong><br>
                  • 區域5（南部低地2.4公頃）：NDVI 0.78 - 較旺盛<br><br>
                  
                  <strong>AI建議：</strong><br>
                  「NDVI高的區域（4、5）葉片茂盛，果實隱蔽，成熟較慢；NDVI適中區域（1、2）日照充足，將更早成熟。建議分3批採收，間隔5-7天。」<br><br>
                  
                  <strong>實際採收計劃：</strong><br><br>
                  
                  <strong>第一批（9月18日）：</strong><br>
                  • 區域1（北部高地）8.5公頃<br>
                  • 理由：NDVI適中，日照最優，預計最早成熟<br>
                  • 實測糖度：25.2 °Brix ✓<br>
                  • 種子褐化率：92% ✓<br>
                  • 產量：7,800 kg/ha<br><br>
                  
                  <strong>第二批（9月25日，+7天）：</strong><br>
                  • 區域2、3（中北+中部平地）17.0公頃<br>
                  • 糖度：24.8 °Brix ✓<br>
                  • 種子褐化率：88% ✓<br>
                  • 產量：8,100 kg/ha<br><br>
                  
                  <strong>第三批（10月2日，+14天）：</strong><br>
                  • 區域4、5（中南+南部）6.5公頃<br>
                  • 糖度：24.5 °Brix ✓<br>
                  • 種子褐化率：85%（<strong>仍偏低，但已是最佳時機</strong>）<br>
                  • 產量：9,200 kg/ha（<strong>產量高，但品質稍遜</strong>）<br><br>
                  
                  <strong>發酵與評估：</strong><br>
                  • 5個區域分開發酵、分別評估<br>
                  • 區域1評分：<strong>95分</strong>（結構優雅，單寧細膩）<br>
                  • 區域2、3評分：<strong>93分</strong>（平衡良好）<br>
                  • 區域4、5評分：<strong>88分</strong>（果味豐富但單寧略生）<br><br>
                  
                  <strong>調配決策：</strong><br>
                  • 正牌酒：100%使用區域1+80%區域2、3<br>
                  • 副牌酒：20%區域2、3 + 80%區域4、5<br>
                  • 三牌酒：20%區域4、5 + 其他年輕藤<br><br>
                  
                  <strong>效益評估：</strong><br>
                  • 正牌酒品質：較往年提升<strong>2-3分</strong><br>
                  • 正牌酒產量：因精準選擇增加<strong>15%</strong><br>
                  • 額外收益：€780,000（正牌單價提升€25/瓶，增產6,000瓶）<br>
                  • <strong>酒評家評語：「近10年最優雅的一個年份」</strong><br><br>
                  
                  <strong>技術成本：</strong><br>
                  • 衛星數據：€3,200/年<br>
                  • 分批採收額外人工：€8,500<br>
                  • 分罐發酵額外成本：€4,200<br>
                  • 總投資：€15,900<br>
                  • <strong>ROI：49倍</strong></p>
                </div>
              </div>
              
              <div class="time-series-analysis">
                <h5>時間序列分析與生長追蹤</h5>
                <p>單次NDVI測量只能看到「快照」，而時間序列分析能看到「電影」——整個生長季的動態變化。通過比對不同時期的NDVI，我們能：<br><br>
                
                • <strong>追蹤生長速率：</strong>識別生長遲緩或異常加速<br>
                • <strong>預測產量：</strong>轉色期NDVI與最終產量高度相關<br>
                • <strong>評估壓力事件：</strong>量化乾旱、霜凍、病害的影響<br>
                • <strong>對比不同年份：</strong>與歷史數據比較，評估當年特殊性</p>
                
                <div class="example-box">
                  <h6>💡 時間序列分析案例：Saint-Émilion列級莊的產量精準預測</h6>
                  <p><strong>2024年生長季NDVI追蹤：</strong><br><br>
                  
                  酒莊12.5公頃Merlot主力地塊，目標：6月中旬（開花後4週）預測9月產量。<br><br>
                  
                  <strong>NDVI時間序列數據（Sentinel-2，10天一次）：</strong><br><br>
                  
                  • 4月15日（萌芽期）：NDVI 0.35（土壤為主）<br>
                  • 4月25日：0.42（新葉展開）<br>
                  • 5月5日：0.51（葉片快速生長）<br>
                  • 5月15日：0.63（開花前）<br>
                  • 5月25日：0.68（<strong>開花期</strong>）<br>
                  • 6月4日：0.72（坐果期）<br>
                  • 6月14日：0.75（<strong>關鍵預測時點</strong>）<br>
                  • 6月24日：0.77<br><br>
                  
                  <strong>AI預測模型（基於8年歷史數據）：</strong><br>
                  輸入：6月中旬NDVI值、氣象數據、土壤水分<br>
                  模型：隨機森林回歸算法<br><br>
                  
                  <strong>6月14日預測結果：</strong><br>
                  • 預測產量：<strong>102,500 kg</strong>（8,200 kg/ha）<br>
                  • 置信區間：98,000-107,000 kg（95%信心水準）<br>
                  • 相比去年（2023）：持平（2023年實際103,800 kg）<br>
                  • AI評估：「正常年份，無重大壓力事件」<br><br>
                  
                  <strong>關鍵觀察點：</strong><br>
                  • NDVI曲線與2023年幾乎重疊<br>
                  • 6月14日NDVI 0.75 vs 2023年6月15日 0.74<br>
                  • 生長速率正常（5月15日→6月14日，NDVI增長0.12/30天）<br><br>
                  
                  <strong>酒莊決策（基於預測）：</strong><br>
                  • 6月20日：確定採收團隊規模（12人 × 8天）<br>
                  • 7月1日：預訂發酵罐容量（110,000 L，留10%緩衝）<br>
                  • 8月1日：確認橡木桶訂單（280個新桶，30%比例）<br>
                  • 9月1日：通知採收隊，預計9月20-28日採收<br><br>
                  
                  <strong>實際採收結果（9月20-27日）：</strong><br>
                  • <strong>實際產量：104,200 kg</strong><br>
                  • 預測誤差：+1,700 kg（<strong>+1.7%</strong>）<br>
                  • 預測準確度：<strong>98.3%</strong><br><br>
                  
                  <strong>提前決策的價值：</strong><br>
                  • 採收團隊：提前3個月預訂，單價€120/天（臨時工€180）<br>
                  • 節省人工成本：12人 × 8天 × €60 = <strong>€5,760</strong><br>
                  • 發酵罐：提前預訂確保容量，避免緊急租賃<br>
                  • 避免租罐成本：<strong>€12,000</strong>（市場緊張時期）<br>
                  • 橡木桶：提前訂購享有5%折扣<br>
                  • 折扣金額：280桶 × €800 × 5% = <strong>€11,200</strong><br>
                  • <strong>總節省：€28,960</strong><br><br>
                  
                  <strong>對比案例：鄰近酒莊（未使用預測）：</strong><br>
                  • 8月底才估算產量（肉眼觀察+經驗）<br>
                  • 預估誤差：-15%（低估）<br>
                  • 結果：發酵罐不足，緊急租賃15,000L<br>
                  • 額外成本：€12,000<br>
                  • 部分葡萄延遲處理，品質受影響<br><br>
                  
                  <strong>酒莊技術總監評價：</strong><br>
                  「NDVI產量預測讓我們從『靠經驗猜測』變成『用數據決策』。3個月的準備時間，意味著更好的資源調配、更低的成本、更高的品質。這€3,000的衛星訂閱費，是我們最划算的投資。」</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="thermal-infrared-system">
            <h4>🌡️ 熱紅外影像水分管理系統</h4>
            <div class="thermal-applications">
              <div class="thermal-technology">
                <h5>熱紅外遙感原理</h5>
                <p>植物通過蒸騰作用散熱——水分充足時蒸騰旺盛、溫度低；缺水時氣孔關閉、蒸騰減少、溫度升高。熱紅外衛星能測量葡萄園地表溫度，溫度異常高的區域通常意味著水分壓力。<br><br>
                
                <strong>技術優勢：</strong><br>
                • <strong>直接指標：</strong>溫度是水分狀況的直接指標，比NDVI更敏感<br>
                • <strong>日內變化：</strong>監測一天中不同時段的溫度變化<br>
                • <strong>蒸散量估算：</strong>結合氣象數據精確計算實際蒸散量<br>
                • <strong>灌溉決策：</strong>為精準灌溉提供科學依據</p>
                
                <div class="example-box">
                  <h6>💡 熱紅外監測案例：Pessac-Léognan的精準灌溉管理</h6>
                  <p><strong>2024年夏季水分管理挑戰：</strong><br><br>
                  
                  酒莊28公頃葡萄園，安裝了滴灌系統但不知何時灌、灌多少。傳統方式：每週檢查土壤水分，費時且只能代表局部。<br><br>
                  
                  <strong>2024年採用Landsat-8熱紅外+Sentinel-2 NDVI組合監測：</strong><br><br>
                  
                  <strong>7月12日（晴天，14:00影像）：</strong><br>
                  • Landsat-8熱紅外影像（30米解析度）<br>
                  • AI系統分析地表溫度分布：<br>
                  &nbsp;&nbsp;- 地塊北部：32.5°C（正常）<br>
                  &nbsp;&nbsp;- 地塊中部：34.8°C（<strong>偏高2.3°C</strong>）<br>
                  &nbsp;&nbsp;- 地塊南部：33.2°C（略高）<br>
                  • 同時段氣溫：29°C<br>
                  • <strong>AI警報：「地塊中部4.2公頃區域溫度異常，疑似水分壓力」</strong><br><br>
                  
                  <strong>交叉驗證（NDVI數據）：</strong><br>
                  • 同日Sentinel-2 NDVI：中部區域0.68（vs北部0.75）<br>
                  • <strong>確認：中部區域同時出現高溫+低NDVI，高度懷疑缺水</strong><br><br>
                  
                  <strong>實地驗證（7月13日上午）：</strong><br>
                  • 土壤水分儀測量中部區域：<br>
                  &nbsp;&nbsp;- 15cm深度：22%（臨界值24%）<br>
                  &nbsp;&nbsp;- 30cm深度：19%（臨界值21%）✗<br>
                  &nbsp;&nbsp;- 45cm深度：17%（臨界值20%）✗<br>
                  • <strong>確認需要灌溉</strong><br><br>
                  
                  <strong>AI灌溉建議：</strong><br>
                  基於以下數據計算：<br>
                  • 過去10天累積蒸散量：42mm<br>
                  • 降雨量：0mm<br>
                  • 土壤含水量虧損：估計25mm<br>
                  • 葡萄藤發育階段：轉色初期（需要輕度水分壓力）<br><br>
                  
                  <strong>推薦方案：</strong><br>
                  「地塊中部4.2公頃進行補充灌溉，建議灌溉量<strong>15mm</strong>（非全量補充，維持輕度壓力有利品質）。其他區域暫不灌溉，繼續監測。」<br><br>
                  
                  <strong>實施灌溉（7月14日凌晨）：</strong><br>
                  • 時間：4:00-7:00（蒸發量最低）<br>
                  • 區域：中部4.2公頃<br>
                  • 灌溉量：15mm（63,000 L）<br>
                  • 方式：滴灌，流速2 L/h/株<br><br>
                  
                  <strong>灌溉後監測（7月22日）：</strong><br>
                  • Landsat-8熱紅外：中部溫度降至33.1°C（<strong>下降1.7°C</strong>）<br>
                  • Sentinel-2 NDVI：恢復至0.72（<strong>提升5.9%</strong>）<br>
                  • 土壤水分：30cm深度21%（<strong>回到適宜範圍</strong>）<br>
                  • <strong>AI評估：「灌溉效果良好，水分壓力解除」</strong><br><br>
                  
                  <strong>整個夏季（6月-8月）灌溉統計：</strong><br><br>
                  
                  <em>2024年（衛星輔助精準灌溉）：</em><br>
                  • 灌溉次數：4次<br>
                  • 總灌溉量：95mm（266萬L）<br>
                  • 平均每公頃：95,000 L<br>
                  • 電費+水費：€2,850<br><br>
                  
                  <em>2023年（傳統經驗灌溉）：</em><br>
                  • 灌溉次數：7次<br>
                  • 總灌溉量：148mm（414萬L）<br>
                  • 平均每公頃：148,000 L<br>
                  • 電費+水費：€4,450<br><br>
                  
                  <strong>效益對比：</strong><br>
                  • 用水量減少：<strong>36%</strong>（節水148萬L）<br>
                  • 成本節省：<strong>€1,600</strong><br>
                  • 環境效益：減少地下水開採<br><br>
                  
                  <strong>品質效益（2024 vs 2023）：</strong><br>
                  • 2024年正牌酒評分：<strong>94分</strong>（vs 2023年91分）<br>
                  • 酒評家評語：「完美的水分管理帶來理想的濃縮度和成熟度平衡」<br>
                  • 價格提升：單瓶+€8<br>
                  • 額外收益：25,000瓶 × €8 = <strong>€200,000</strong><br><br>
                  
                  <strong>技術總監總結：</strong><br>
                  「熱紅外+NDVI的組合監測是遊戲規則改變者。我們從『憑感覺澆水』變成『精準補水』——在需要的地方、需要的時候、澆需要的量。結果是：省水、省錢、品質更好。」<br><br>
                  
                  <strong>系統成本：</strong><br>
                  • 衛星數據訂閱：€3,500/年（Landsat-8 + Sentinel-2）<br>
                  • AI分析平台：€1,200/年<br>
                  • 總投資：€4,700/年<br>
                  • 節省成本：€1,600（水電費）<br>
                  • 品質提升收益：€200,000<br>
                  • <strong>ROI：42倍</strong></p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="satellite-system-value">
            <h4>🎯 衛星遙感系統的整體價值</h4>
            <div class="comprehensive-value">
              <p><strong>監測能力革命：</strong><br>
              • 覆蓋範圍：從人工巡檢的<strong>5公頃/天</strong>到衛星的<strong>數千公頃/次</strong><br>
              • 監測頻率：從每週1次到<strong>每3-5天1次</strong><br>
              • 早期預警：提前<strong>2-3週</strong>發現問題<br>
              • 客觀量化：從主觀評估到<strong>精確數值</strong><br><br>
              
              <strong>決策支持提升：</strong><br>
              • 空間變異識別：發現<strong>亞公頃級</strong>差異<br>
              • 產量預測準確度：<strong>95%+</strong>（提前3個月）<br>
              • 灌溉決策：水分利用效率提升<strong>30-40%</strong><br>
              • 分區管理：實現<strong>地塊級精準管理</strong><br><br>
              
              <strong>經濟效益：</strong><br>
              • 典型投資：<strong>€2,500-5,000/年</strong><br>
              • 直接節省：水電費、人工費<strong>€5,000-15,000/年</strong><br>
              • 間接收益：品質提升、產量優化<strong>€50,000-200,000/年</strong><br>
              • 平均投資回報率：<strong>10-50倍</strong><br><br>
              
              <strong>策略價值：</strong><br>
              • 風險管理：提前發現問題，避免重大損失<br>
              • 品質保障：確保整個地塊均衡發展<br>
              • 可持續性：減少水資源浪費<br>
              • 競爭優勢：數據驅動的科學管理<br><br>
              
              <strong>未來趨勢：</strong><br>
              • 解析度提升：從10米到<strong>3米甚至更高</strong><br>
              • 時間頻率：從5天到<strong>每日監測</strong><br>
              • AI整合：自動識別、自動警報、自動決策<br>
              • <strong>衛星遙感將成為精品酒莊的「標準配置」</strong></p>
            </div>
          </div>
        </div>
      </div>
      -->
    `,
    highlights: [
      {
        id: 1,
        icon: '📊',
        title: 'NDVI早期預警',
        content: '提前2-3週發現水分壓力，搶救產量€42,320，ROI 44:1'
      },
      {
        id: 2,
        icon: '🌡️',
        title: '熱紅外精準灌溉',
        content: '節水36%，品質提升3分，額外收益€200,000'
      }
    ]
  },

  // 衛星遙感系統（二）：高解析度監測與變化檢測
  {
    type: 'content',
    title: '衛星遙感系統（二）：高解析度監測與變化檢測',
    content: `<div style="font-family:sans-serif;padding:12px;max-width:900px;margin:0 auto">
  <div style="background:linear-gradient(135deg,#1e3a5f,#2d6a8f);color:#fff;padding:8px 14px;border-radius:6px;font-size:0.85em;font-weight:700;margin-bottom:12px">
    📡 高解析度衛星監測｜亞米級精度 0.3–0.5m × 單株識別
  </div>
  <div style="display:grid;grid-template-columns:3fr 2fr;gap:10px;margin-bottom:10px">
    <div style="background:#f0f7ff;border:1px solid #93c5fd;border-top:3px solid #2563eb;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#1d4ed8;font-size:0.9em;margin-bottom:8px">🔍 亞米級精度 × 逐株葡萄藤識別</div>
      <div style="font-size:0.83em;color:#374151;line-height:1.65;margin-bottom:8px">
        <strong>衛星來源：</strong>Planet / Maxar 商業衛星，解析度 <strong>0.3–0.5m</strong><br>
        <strong>能力：</strong>識別單株狀態、發現缺株、分析冠層結構
      </div>
      <div style="background:#dbeafe;border-radius:6px;padding:8px;font-size:0.82em">
        <div style="font-weight:700;color:#1d4ed8;margin-bottom:4px">📌 Pomerol 老藤管理案例</div>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:2px 6px;color:#6b7280">識別葡萄藤：</td><td style="padding:2px 6px;font-weight:700">12,850 株</td></tr>
          <tr><td style="padding:2px 6px;color:#6b7280">發現缺株：</td><td style="padding:2px 6px;font-weight:700;color:#dc2626">55 株</td></tr>
          <tr><td style="padding:2px 6px;color:#6b7280">識別準確率：</td><td style="padding:2px 6px;font-weight:700;color:#16a34a">96%</td></tr>
          <tr><td style="padding:2px 6px;color:#6b7280">巡檢時間：</td><td style="padding:2px 6px;font-weight:700">6天 → <strong style="color:#dc2626">1.5天</strong></td></tr>
          <tr><td style="padding:2px 6px;color:#6b7280">人力節省：</td><td style="padding:2px 6px;font-weight:700;color:#16a34a">83%</td></tr>
        </table>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      <div style="background:#fff0f3;border:1px solid #fecdd3;border-top:3px solid #e11d48;border-radius:8px;padding:12px;flex:1">
        <div style="font-weight:700;color:#be123c;font-size:0.9em;margin-bottom:6px">🌿 冠層結構分析</div>
        <div style="font-size:0.82em;color:#374151;line-height:1.65">• 精確量測行距、株距<br>• 分析冠層密度與光照<br>• 規劃葡萄藤更新計劃</div>
      </div>
      <div style="background:#f0fdf4;border:1px solid #86efac;border-top:3px solid #16a34a;border-radius:8px;padding:12px;flex:1">
        <div style="font-weight:700;color:#15803d;font-size:0.9em;margin-bottom:6px">⏰ 病害預警效益</div>
        <div style="font-size:0.82em;color:#374151;line-height:1.65">提前 <strong>3–5天</strong> 發現霜黴病<br>避免損失 <strong style="color:#dc2626">€60,000</strong><br>ROI <strong style="color:#16a34a">12倍</strong></div>
      </div>
    </div>
  </div>
  <div style="background:linear-gradient(90deg,#f8fafc,#e0f2fe);border:1px solid #bae6fd;border-radius:8px;padding:9px;text-align:center;font-size:0.84em;color:#0369a1;font-weight:600">
    🎯 從「俯瞰葡萄園」升級為「逐株精準管理」——這是葡萄園管理的「精準醫療」時代
  </div>
</div>
      <!--ORIGINAL:
      <div class="chapter-content">
        <div class="high-resolution-satellite">
          <h3>📡 高解析度衛星監測系統</h3>
          <p class="intro-text">如果說10米解析度的Sentinel-2是「俯瞰葡萄園」，那麼0.5米解析度的商業衛星就是「逐株檢查」。這種亞米級精度讓我們能識別單株葡萄藤、發現缺株位置、分析冠層結構——這在過去只有人工巡檢才能做到，現在從太空就能完成。</p>
          
          <div class="submeter-monitoring">
            <h4>🔍 亞米級精度單株識別</h4>
            <div class="single-plant-detection">
              <div class="detection-technology">
                <h5>單株葡萄藤健康監測</h5>
                <p>商業高解析度衛星（如Planet、Maxar）提供0.3-0.5米解析度影像，足以識別單株葡萄藤。結合AI圖像識別技術，可以自動檢測每一株葡萄藤的狀況。<br><br>
                
                <strong>技術能力：</strong><br>
                • <strong>單株識別：</strong>自動識別和標記每株葡萄藤位置<br>
                • <strong>健康評估：</strong>基於顏色和形態評估單株健康狀況<br>
                • <strong>缺株檢測：</strong>自動發現死亡或缺失的葡萄藤<br>
                • <strong>生長追蹤：</strong>追蹤單株葡萄藤的生長變化</p>
                
                <div class="example-box">
                  <h6>💡 單株識別案例：Pomerol精品酒莊的老藤管理</h6>
                  <p><strong>挑戰：</strong>7.8公頃葡萄園，部分老藤超過60年，需要精確追蹤每株健康狀況。<br><br>
                  
                  <strong>傳統方法：</strong>3名工人每月巡檢，手繪標記問題區域，耗時6天/月。<br><br>
                  
                  <strong>2024年採用Planet 0.5米解析度影像：</strong><br><br>
                  
                  <strong>4月28日（萌芽期）影像分析：</strong><br>
                  • AI系統自動識別<strong>12,850株</strong>葡萄藤<br>
                  • 建立「數位葡萄園地圖」，每株有唯一ID<br>                  • 計算每株NDVI值，分級評估健康狀況：<br>
                  &nbsp;&nbsp;- 健康（NDVI>0.7）：11,982株（93.2%）<br>
                  &nbsp;&nbsp;- 衰弱（NDVI 0.5-0.7）：685株（5.3%）<br>
                  &nbsp;&nbsp;- 瀕死（NDVI 0.3-0.5）：128株（1.0%）<br>
                  &nbsp;&nbsp;- 死亡/缺株（NDVI<0.3）：55株（0.4%）<br><br>
                  
                  <strong>AI生成巡檢路線：</strong><br>
                  • 自動標記868株需要關注的葡萄藤位置<br>
                  • 生成最優巡檢路線（GPS座標）<br>
                  • 預估巡檢時間：<strong>1.5天</strong>（vs傳統6天）<br><br>
                  
                  <strong>實地驗證（4月29-30日）：</strong><br>
                  工人攜帶平板電腦，按GPS導航逐株檢查：<br><br>
                  
                  <em>AI標記「瀕死」的128株：</em><br>
                  • 實地確認：121株確實嚴重衰弱（<strong>準確率94.5%</strong>）<br>
                  • 原因分析：根部病害（74株）、蟲害（32株）、機械損傷（15株）<br>
                  • 處理決策：標記替換（下一季更新）<br><br>
                  
                  <em>AI標記「死亡」的55株：</em><br>
                  • 確認：53株死亡或缺株（<strong>準確率96.4%</strong>）<br>
                  • 決策：立即補植新苗（5月份）<br><br>
                  
                  <strong>6月22日（開花後）第二次監測：</strong><br>
                  • 比對4月影像，檢測變化<br>
                  • 新發現：32株從「健康」轉為「衰弱」<br>
                  • AI警報：「地塊B-3西北角出現集群衰弱」<br>
                  • 實地確認：黃化病早期症狀<br>
                  • 及時處理：營養補充+病害防治<br><br>
                  
                  <strong>整個生長季追蹤（4月-9月，6次監測）：</strong><br>
                  • 累計發現問題株：<strong>256株</strong>（佔總數2%）<br>
                  • 提前發現黃化病：32株（<strong>避免擴散到120+株</strong>）<br>
                  • 及時補植：53株新苗（秋季成活率89%）<br>
                  • 淘汰瀕死老藤：121株（為明年更新做準備）<br><br>
                  
                  <strong>效益評估：</strong><br><br>
                  
                  <em>人力節省：</em><br>
                  • 傳統巡檢：3人 × 6天/月 × 6個月 = 108人天<br>
                  • AI輔助巡檢：2人 × 1.5天/月 × 6個月 = 18人天<br>
                  • 節省：<strong>83%人力</strong><br>
                  • 成本節省：90人天 × €150 = <strong>€13,500</strong><br><br>
                  
                  <em>品質保護：</em><br>
                  • 提前發現黃化病，避免擴散損失：120株 × 3kg/株 × €15/kg = <strong>€5,400</strong><br>
                  • 及時補植維持產能：53株 × 3年後產量2kg/株 × €15/kg = €1,590/年<br><br>
                  
                  <em>技術成本：</em><br>
                  • Planet衛星影像訂閱：€4,800/年（每月2次，0.5米解析度）<br>
                  • AI分析平台：€2,400/年<br>
                  • 總投資：€7,200/年<br><br>
                  
                  <strong>ROI計算：</strong><br>
                  • 年度節省+收益：€13,500 + €5,400 = €18,900<br>
                  • 投資回報率：<strong>2.6倍</strong>（第一年）<br>
                  • 長期價值：老藤精準管理，延長生產壽命<br><br>
                  
                  <strong>酒莊主的評價：</strong><br>
                  「我們的老藤是最寶貴的資產，每株都價值數千歐元。高解析度衛星+AI讓我們能像『家庭醫生』一樣照顧每一株——定期體檢、及時發現問題、精準治療。這是老藤管理的革命。」</p>
                </div>
              </div>
              
              <div class="row-structure-analysis">
                <h5>葡萄藤行距與冠層結構分析</h5>
                <p>高解析度影像不僅能識別單株，還能精確測量葡萄藤行距、冠層寬度、株距等結構參數，為優化種植密度和管理提供數據支持。<br><br>
                
                <strong>應用價值：</strong><br>
                • <strong>種植密度優化：</strong>評估當前密度是否適宜<br>
                • <strong>更新規劃：</strong>為葡萄園更新提供精確設計<br>
                • <strong>機械化適配：</strong>評估機械化作業的可行性<br>
                • <strong>產量潛力分析：</strong>基於冠層結構預測產量</p>
                
                <div class="example-box">
                  <h6>💡 結構分析案例：Saint-Julien酒莊的更新規劃</h6>
                  <p><strong>背景：</strong>15公頃老園區需要更新，傳統測量費時費力，且不夠精確。<br><br>
                  
                  <strong>採用0.3米解析度Maxar影像（2024年7月）：</strong><br><br>
                  
                  <strong>AI自動測量結果：</strong><br>
                  • 識別葡萄藤行數：<strong>124行</strong><br>
                  • 平均行距：<strong>1.18米</strong>（目標1.20米）<br>
                  • 行距標準差：0.08米（<strong>部分區域不規則</strong>）<br>
                  • 平均株距：<strong>0.97米</strong>（目標1.00米）<br>
                  • 株距標準差：0.12米（<strong>變異較大</strong>）<br>
                  • 平均冠層寬度：<strong>0.85米</strong><br>
                  • 行間通道寬度：<strong>0.33米</strong>（<strong>偏窄，機械作業困難</strong>）<br><br>
                  
                  <strong>空間變異分析：</strong><br>
                  • 北部5公頃：行距規則（標準差0.04米），適合保留<br>
                  • 中部7公頃：行距不規則（標準差0.10米），<strong>需要調整</strong><br>
                  • 南部3公頃：嚴重不規則（標準差0.15米），<strong>建議重新規劃</strong><br><br>
                  
                  <strong>AI更新建議方案：</strong><br><br>
                  
                  <em>方案A（保守）：</em><br>
                  • 北部5公頃：保持原結構，僅更換老藤<br>
                  • 中部7公頃：微調行距至1.25米<br>
                  • 南部3公頃：完全重新規劃，行距1.30米<br>
                  • 預計成本：<strong>€285,000</strong><br>
                  • 預計產量恢復期：3年<br><br>
                  
                  <em>方案B（激進）：</em><br>
                  • 全部15公頃重新規劃<br>
                  • 統一行距1.30米，株距1.05米<br>
                  • 機械化友好設計，行間通道0.50米<br>
                  • 預計成本：<strong>€465,000</strong><br>
                  • 預計產量恢復期：4年<br>
                  • 長期優勢：完全機械化，年節省人工€35,000<br><br>
                  
                  <strong>經濟模型分析（15年週期）：</strong><br><br>
                  
                  <em>方案A：</em><br>
                  • 初始投資：€285,000<br>
                  • 15年累計人工成本：€420,000（部分機械化）<br>
                  • 15年累計收益：€3,850,000<br>
                  • <strong>淨現值（NPV）：€2,145,000</strong><br><br>
                  
                  <em>方案B：</em><br>
                  • 初始投資：€465,000<br>
                  • 15年累計人工成本：€245,000（完全機械化）<br>
                  • 15年累計收益：€4,120,000（產量略高+品質提升）<br>
                  • <strong>淨現值（NPV）：€2,410,000</strong><br><br>
                  
                  <strong>決策：</strong><br>
                  酒莊選擇方案B，理由：<br>
                  • 雖然初期投資高，但15年NPV高出€265,000<br>
                  • 完全機械化符合長期人力成本上漲趨勢<br>
                  • 統一規劃更易管理，品質更穩定<br><br>
                  
                  <strong>實施細節（AI輔助設計）：</strong><br>
                  • AI生成精確種植圖：15,873個種植點，GPS座標<br>
                  • 考慮地形：坡度調整，排水優化<br>
                  • 行向優化：南北向，最大化日照均勻度<br>
                  • 邊界優化：轉彎半徑適配拖拉機（最小6米）<br><br>
                  
                  <strong>2024年11月開始施工：</strong><br>
                  • 使用GPS導航拖拉機精準定位<br>
                  • 誤差控制：±3cm（AI設計精度）<br>
                  • 預計2025年4月完成種植<br><br>
                  
                  <strong>衛星監測價值：</strong><br>
                  • 傳統人工測量：2週，成本€8,500<br>
                  • 衛星影像+AI分析：<strong>2天</strong>，成本€1,200<br>
                  • 精度提升：人工±10cm，AI ±3cm<br>
                  • 決策支持：提供多方案經濟模型比較<br><br>
                  
                  <strong>技術總監總結：</strong><br>
                  「高解析度衛星影像讓我們能以厘米級精度規劃15公頃葡萄園——這在以前需要測量隊工作數週。更重要的是，AI能比較不同方案的長期經濟效益，幫我們做出最優決策。」</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="change-detection-system">
            <h4>🔄 變化檢測與病害早期預警</h4>
            <div class="temporal-analysis">
              <div class="change-detection-tech">
                <h5>多時相影像變化檢測</h5>
                <p>通過比對不同時間的衛星影像，AI能自動檢測任何細微變化——顏色變暗、形態異常、生長遲緩。這些變化往往是病害、蟲害或環境壓力的早期信號。<br><br>
                
                <strong>檢測類型：</strong><br>
                • <strong>顏色變化：</strong>檢測葉片顏色從綠色轉黃、紅、褐<br>
                • <strong>紋理變化：</strong>識別冠層紋理從均勻變粗糙<br>
                • <strong>NDVI驟降：</strong>監測植被指數異常下降<br>
                • <strong>空間模式：</strong>識別病害特有的擴散模式（圓形、條帶狀等）</p>
                
                <div class="example-box">
                  <h6>💡 病害早期預警案例：Margaux列級莊的霜黴病早期發現</h6>
                  <p><strong>2024年6月霜黴病爆發風險：</strong><br><br>
                  
                  <strong>氣象條件：</strong>6月8-12日連續5天降雨（累積72mm），氣溫22-26°C，葉面濕度持續時間長——<strong>霜黴病高風險條件</strong>。<br><br>
                  
                  <strong>衛星監測時間線：</strong><br><br>
                  
                  <strong>6月7日（降雨前）基線影像：</strong><br>
                  • Planet 0.5米解析度影像<br>
                  • 全園NDVI均值：0.76（健康）<br>
                  • 無異常區域<br><br>
                  
                  <strong>6月15日（降雨後第3天）監測影像：</strong><br>
                  • AI自動比對6月7日和15日影像<br>
                  • <strong>變化檢測警報：</strong>「地塊D-12東北角檢測到異常變化」<br>                  • 異常區域：0.8公頃<br>
                  • NDVI下降：從0.77降至0.68（<strong>-12%</strong>）<br>
                  • 顏色變化：RGB影像顯示葉片從深綠轉為黃綠色<br>
                  • 空間模式：<strong>圓形擴散</strong>（直徑約50米），霜黴病典型特徵<br><br>
                  
                  <strong>6月15日下午實地確認：</strong><br>
                  • 酒窖主任帶隊前往D-12東北角（GPS導航）<br>
                  • 肉眼觀察：葉片背面有<strong>白色霜狀物</strong>——霜黴病孢子！<br>
                  • 感染程度：約15%葉片受感染（<strong>早期階段</strong>）<br>
                  • 確診：<strong>霜黴病（Downy Mildew）</strong><br><br>
                  
                  <strong>緊急應對（6月15日傍晚）：</strong><br>
                  • 決策：立即進行針對性噴藥<br>
                  • 藥劑：銅製劑+有機殺菌劑<br>
                  • 噴灑範圍：感染區0.8公頃 + 緩衝區1.2公頃 = <strong>2.0公頃</strong><br>
                  • 時間：6月16日清晨5:00-7:00（露水未乾，效果最佳）<br>
                  • 成本：藥劑€280，人工€180，總計€460<br><br>
                  
                  <strong>6月25日（治療後10天）複查影像：</strong><br>
                  • NDVI恢復至0.74（<strong>接近正常</strong>）<br>
                  • 顏色恢復深綠<br>
                  • 實地確認：病害得到控制，無新增感染<br>
                  • <strong>成功遏制病害擴散</strong><br><br>
                  
                  <strong>對比：鄰近未及時發現的酒莊：</strong><br>
                  • 依賴人工巡檢，6月20日才發現病害（<strong>晚5天</strong>）<br>
                  • 此時感染已擴散至5.5公頃（<strong>擴大6.9倍</strong>）<br>
                  • 感染程度：40-60%葉片受損<br>
                  • 需要3次噴藥才控制住<br>
                  • 藥劑成本：€2,850（<strong>6.2倍</strong>）<br>
                  • 產量損失：估計15-20%<br>
                  • 經濟損失：€45,000-€60,000<br><br>
                  
                  <strong>效益分析：</strong><br><br>
                  
                  <em>Margaux酒莊（早期發現+及時處理）：</em><br>
                  • 感染面積：0.8公頃<br>
                  • 產量損失：<5%（僅感染區輕微影響）<br>
                  • 防治成本：€460<br>
                  • 產量損失價值：約€2,500<br>
                  • <strong>總損失：€2,960</strong><br><br>
                  
                  <em>對照酒莊（晚發現5天）：</em><br>
                  • 感染面積：5.5公頃<br>
                  • 產量損失：15-20%<br>
                  • 防治成本：€2,850<br>
                  • 產量損失價值：€45,000-€60,000<br>
                  • <strong>總損失：€47,850-€62,850</strong><br><br>
                  
                  <strong>衛星預警系統價值：</strong><br>
                  • 避免損失：€44,890-€59,890<br>
                  • 年度訂閱成本：€4,800（Planet影像）<br>
                  • <strong>單次事件ROI：9-12倍</strong><br>
                  • 全年價值：波爾多通常2-3次病害高峰，累計ROI可達<strong>20-30倍</strong><br><br>
                  
                  <strong>關鍵成功因素：</strong><br>
                  • <strong>早期發現：</strong>衛星檢測到症狀比人工早<strong>3-5天</strong><br>
                  • <strong>精準定位：</strong>GPS座標讓巡檢隊直達問題區域<br>
                  • <strong>及時應對：</strong>確診當天就完成噴藥<br>
                  • <strong>持續監測：</strong>複查確認治療效果<br><br>
                  
                  <strong>酒莊植保經理評價：</strong><br>
                  「病害防治的黃金法則是『早發現、早治療』。衛星變化檢測讓我們能在病害剛剛萌芽時就發現並撲滅它——這3-5天的時間差，意味著€50,000的差異。我們再也回不去『靠人工巡檢碰運氣』的時代了。」</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="high-res-satellite-value">
            <h4>🎯 高解析度衛星系統的革命性價值</h4>
            <div class="system-value-summary">
              <p><strong>精度革命：</strong><br>
              • 空間解析度：從10米提升到<strong>0.3-0.5米</strong><br>
              • 識別能力：從「地塊級」到<strong>「單株級」</strong><br>
              • 測量精度：結構參數誤差<strong>±3cm</strong><br>
              • 檢測敏感度：發現<strong>5%植被變化</strong><br><br>
              
              <strong>管理能力提升：</strong><br>
              • 老藤精準管理：追蹤每株健康狀況<br>
              • 缺株及時補植：準確率<strong>96%+</strong><br>
              • 病害早期預警：提前<strong>3-5天</strong>發現<br>
              • 更新規劃優化：厘米級精度設計<br><br>
              
              <strong>人力效率：</strong><br>
              • 巡檢時間：減少<strong>70-85%</strong><br>
              • 測量效率：提升<strong>數十倍</strong><br>
              • 決策速度：從週級到<strong>天級</strong><br>
              • 人工成本：節省<strong>€10,000-30,000/年</strong><br><br>
              
              <strong>經濟效益：</strong><br>
              • 典型訂閱成本：<strong>€4,000-8,000/年</strong><br>
              • 病害損失避免：<strong>€40,000-100,000/年</strong><br>
              • 人力節省：<strong>€10,000-30,000/年</strong><br>
              • 長期資產保護：老藤壽命延長<br>
              • <strong>綜合ROI：8-20倍</strong><br><br>
              
              <strong>策略價值：</strong><br>
              • 從「被動應對」到「主動預防」<br>
              • 從「經驗判斷」到「數據驅動」<br>
              • 從「粗放管理」到「精準照顧」<br>
              • <strong>這是葡萄園管理的「精準醫療」時代</strong></p>
            </div>
          </div>
        </div>
      </div>
      -->
    `,
    highlights: [
      {
        id: 1,
        icon: '🔍',
        title: '單株識別',
        content: '0.5米解析度識別12,850株葡萄藤，準確率96%，人力節省83%'
      },
      {
        id: 2,
        icon: '🔄',
        title: '病害早期預警',
        content: '提前3-5天發現霜黴病，避免損失€60,000，ROI 12倍'
      }
    ]
  },

  // 無人機精準作業系統
  {
    type: 'content',
    title: '無人機精準作業系統',
    content: `<div style="font-family:sans-serif;padding:12px;max-width:900px;margin:0 auto">
  <div style="background:linear-gradient(135deg,#1a1a2e,#16213e);color:#fff;padding:8px 14px;border-radius:6px;font-size:0.85em;font-weight:700;margin-bottom:12px">
    🚁 無人機精準作業系統｜2–5cm 超高解析度 × 緊急應急評估
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:10px">
    <div style="background:#fff8f0;border:1px solid #fcd34d;border-top:3px solid #f59e0b;border-radius:8px;padding:10px;text-align:center">
      <div style="font-size:1.6em">🚁</div><div style="font-weight:700;color:#b45309;font-size:0.88em">無人機</div>
      <div style="font-size:0.82em;color:#374151;margin-top:4px"><strong>2–5 cm</strong><br>超高分辨率<br>隨時起飛</div>
    </div>
    <div style="background:#f0f9ff;border:1px solid #7dd3fc;border-top:3px solid #0284c7;border-radius:8px;padding:10px;text-align:center">
      <div style="font-size:1.6em">🛰️</div><div style="font-weight:700;color:#0369a1;font-size:0.88em">衛星</div>
      <div style="font-size:0.82em;color:#374151;margin-top:4px"><strong>0.5–10m</strong><br>高頻次<br>廣域覆蓋</div>
    </div>
    <div style="background:#f5f3ff;border:1px solid #c4b5fd;border-top:3px solid #7c3aed;border-radius:8px;padding:10px;text-align:center">
      <div style="font-size:1.6em">🤖</div><div style="font-weight:700;color:#6d28d9;font-size:0.88em">AI即時分析</div>
      <div style="font-size:0.82em;color:#374151;margin-top:4px">自動識別<br>損失評估<br>生成報告</div>
    </div>
  </div>
  <div style="background:#fff1f2;border:1px solid #fecdd3;border-radius:8px;padding:12px;margin-bottom:10px">
    <div style="font-weight:700;color:#be123c;font-size:0.9em;margin-bottom:8px">⛈️ 緊急案例：Pauillac 冰雹災害評估（2024.7.18）</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
      <div style="font-size:0.82em;color:#374151;line-height:1.7">
        <strong>災情：</strong>45公頃，冰雹直徑 1.5–2.5cm<br>
        <strong>起飛：</strong>DJI Matrice 300 RTK（1小時內）<br>
        <strong>飛行：</strong>38分鐘，<strong>1,847張</strong>多光譜影像<br>
        <strong>解析度：</strong>2.5公分/像素
      </div>
      <div style="font-size:0.82em;color:#374151;line-height:1.7">
        受損：<strong style="color:#dc2626">18.6公頃（41.3%）</strong><br>
        · 輕微 8.2｜中度 7.8｜嚴重 2.6 公頃<br>
        評估誤差：<strong style="color:#16a34a">±3.2%</strong>（保險認可）<br>
        <strong style="color:#7c3aed">當天理賠 €185,000</strong>｜ROI <strong>185倍</strong>
      </div>
    </div>
  </div>
  <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:10px;display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center">
    <div style="text-align:center;font-size:0.85em;min-width:60px"><div style="font-size:2em">💧</div><div style="font-weight:700;color:#15803d">精準噴灑</div></div>
    <div style="font-size:0.82em;color:#374151;line-height:1.7">藥劑節省 <strong style="color:#16a34a">16%</strong>｜防治效果提升 <strong style="color:#16a34a">+12%</strong>｜保護產量 <strong style="color:#dc2626">€195,000</strong></div>
  </div>
</div>
      <!--ORIGINAL:
      <div class="chapter-content">
        <div class="drone-precision-system">
          <h3>🚁 無人機精準作業系統</h3>
          <p class="intro-text">如果說衛星是「太空之眼」，那麼無人機就是「田間使者」——它能在任何時間飛到任何地點，用比衛星更高的解析度（2-5公分）、更靈活的角度觀察葡萄園。更重要的是，無人機不只是「看」，還能「做」——精準噴灑、實時監測、3D建模。這是精準農業的「瑞士軍刀」。</p>
          
          <div class="drone-multispectral-monitoring">
            <h4>📸 高頻率多光譜監測</h4>
            <div class="monitoring-capabilities">
              <div class="flexible-scheduling">
                <h5>靈活調度與即時回饋</h5>
                <p>衛星受制於軌道週期（3-10天）和天氣（雲層遮擋），而無人機可以隨時起飛、即時回饋。當酒莊需要緊急檢查某個地塊時，無人機能在30分鐘內完成飛行和初步分析。<br><br>
                
                <strong>技術優勢：</strong><br>
                • <strong>超高解析度：</strong>2-5公分級別，看清每片葉子<br>
                • <strong>隨時起飛：</strong>不受衛星軌道限制<br>
                • <strong>低空飛行：</strong>不受雲層影響（雲下3米飛行）<br>
                • <strong>當日交付：</strong>上午飛行，下午就有分析結果</p>
                
                <div class="example-box">
                  <h6>💡 緊急監測案例：Pauillac一級莊的冰雹災害快速評估</h6>
                  <p><strong>2024年7月18日下午，突發冰雹事件：</strong><br><br>
                  
                  <strong>災害背景：</strong><br>
                  • 下午3:15，強對流天氣帶來冰雹<br>
                  • 持續時間：12分鐘<br>
                  • 冰雹大小：直徑1.5-2.5公分<br>
                  • 受影響區域：酒莊45公頃葡萄園東部<br><br>
                  
                  <strong>傳統評估方式的挑戰：</strong><br>
                  • 需要評估師徒步逐行檢查<br>
                  • 45公頃需要3-4天<br>
                  • 保險理賠需要精確損失報告<br>
                  • 時間緊迫：需在72小時內報案<br><br>
                  
                  <strong>無人機緊急調度（7月18日下午4:30）：</strong><br><br>
                  
                  <strong>飛行任務：</strong><br>
                  • 起飛時間：4:30（冰雹停止後1小時）<br>
                  • 無人機型號：DJI Matrice 300 RTK<br>
                  • 搭載相機：Micasense RedEdge-MX多光譜相機（5波段）<br>
                  • 飛行高度：50米<br>
                  • 地面解析度：<strong>2.5公分/像素</strong><br>
                  • 飛行時間：<strong>38分鐘</strong>（覆蓋45公頃）<br>
                  • 拍攝照片：<strong>1,847張</strong><br><br>
                  
                  <strong>AI即時分析（下午5:30-7:00）：</strong><br><br>
                  
                  <strong>影像處理：</strong><br>
                  • 拼接生成完整正射影像<br>
                  • 生成NDVI植被指數地圖<br>
                  • AI自動識別受損葡萄藤<br>
                  • 計算受損面積和程度<br><br>
                  
                  <strong>損害評估結果（7月18日晚上7:00）：</strong><br><br>
                  
                  <em>整體統計：</em><br>
                  • 總面積：45公頃<br>
                  • 受損面積：<strong>18.6公頃</strong>（41.3%）<br>
                  • 未受損：26.4公頃（58.7%）<br><br>
                  
                  <em>受損程度分級：</em><br>
                  • 輕微受損（<20%葉片破損）：8.2公頃<br>
                  &nbsp;&nbsp;- 預計產量影響：5-10%<br>
                  &nbsp;&nbsp;- 無需特別處理<br>
                  • 中度受損（20-50%葉片破損）：7.8公頃<br>
                  &nbsp;&nbsp;- 預計產量影響：20-30%<br>
                  &nbsp;&nbsp;- 需要加強營養管理<br>
                  • 嚴重受損（>50%葉片破損）：2.6公頃<br>
                  &nbsp;&nbsp;- 預計產量影響：50-70%<br>
                  &nbsp;&nbsp;- <strong>建議部分果實提前採收做副牌</strong><br><br>
                  
                  <strong>AI生成損失報告：</strong><br>
                  • 包含：高解析度影像、受損分布圖、統計數據<br>
                  • 每個地塊的詳細評估<br>
                  • GPS座標標記嚴重受損區域<br>
                  • <strong>符合保險公司報告格式</strong><br><br>
                  
                  <strong>7月19日上午，保險公司實地驗證：</strong><br>
                  • 抽查15個樣點<br>
                  • AI評估vs人工評估對比<br>
                  • 受損面積誤差：<strong>±3.2%</strong><br>
                  • 受損程度誤差：<strong>±5.8%</strong><br>
                  • 保險公司評價：「這是我見過最精確的災害報告」<br>
                  • <strong>當天批准理賠申請</strong><br><br>
                  
                  <strong>管理決策（基於無人機評估）：</strong><br><br>
                  
                  <em>輕微受損區（8.2公頃）：</em><br>
                  • 正常管理，略增葉面肥施用<br>
                  • 預期仍可生產正牌酒<br><br>
                  
                  <em>中度受損區（7.8公頃）：</em><br>
                  • 加強營養管理（葉面噴施氮肥）<br>
                  • 適度疏果（減載20%）<br>
                  • 預期用於正牌酒調配（比例降低）<br><br>
                  
                  <em>嚴重受損區（2.6公頃）：</em><br>
                  • 8月20日提前採收（比正常早30天）<br>
                  • 單獨發酵，用於副牌酒<br>
                  • 避免進一步品質下降<br><br>
                  
                  <strong>經濟效益分析：</strong><br><br>
                  
                  <em>保險理賠：</em><br>
                  • 理賠金額：<strong>€185,000</strong><br>
                  • 理賠速度：3天（vs傳統2-4週）<br>
                  • 避免資金壓力<br><br>
                  
                  <em>減損決策價值：</em><br>
                  • 嚴重受損區提前採收：避免完全損失<br>
                  • 預估挽救產量：2.6公頃 × 3,000 kg/ha = 7,800 kg<br>
                  • 副牌酒價值：7,800 kg × €6/kg = <strong>€46,800</strong><br>
                  • 若未及時處理，可能完全報廢<br><br>
                  
                  <em>無人機服務成本：</em><br>
                  • 緊急調度費：€800<br>
                  • 影像處理+AI分析：€450<br>
                  • 總成本：<strong>€1,250</strong><br><br>
                  
                  <strong>ROI計算：</strong><br>
                  • 直接收益：€46,800（挽救產量）+ €185,000（快速理賠）<br>
                  • 投資成本：€1,250<br>
                  • <strong>ROI：185倍</strong><br><br>
                  
                  <strong>時間價值對比：</strong><br>
                  • 無人機評估：<strong>2.5小時</strong>（飛行38分鐘+分析90分鐘）<br>
                  • 傳統人工評估：<strong>3-4天</strong><br>
                  • 時間節省：<strong>95%</strong><br><br>
                  
                  <strong>酒莊總經理的反饋：</strong><br>
                  「冰雹來得突然，我們必須在72小時內完成保險報案。無人機讓我們在當天就完成了全面評估，第二天就獲得理賠批准。更重要的是，精確的損害分級讓我們能做出最優決策——輕傷正常管理、中傷減載保質、重傷提前採收止損。這€1,250是我們今年花得最值的錢。」<br><br>
                  
                  <strong>9月採收驗證：</strong><br>
                  • 輕微受損區：實際產量影響7%（vs預測5-10%）✓<br>
                  • 中度受損區：實際產量影響25%（vs預測20-30%）✓<br>
                  • 嚴重受損區提前採收：成功避免完全損失<br>
                  • <strong>AI預測準確度：92%</strong></p>
                </div>
              </div>
              
              <div class="weekly-monitoring">
                <h5>高頻率生長監測</h5>
                <p>衛星受限於軌道週期和天氣，而無人機可以實現每週甚至每日監測，對於關鍵生長階段（開花、轉色等）尤其重要。<br><br>
                
                <strong>應用場景：</strong><br>
                • <strong>開花期監測：</strong>每3天飛行，評估坐果率<br>
                • <strong>轉色期追蹤：</strong>每週監測，預測最佳採收時機<br>
                • <strong>試驗地塊監測：</strong>對比不同管理措施的效果<br>
                • <strong>VIP地塊照護：</strong>對高價值地塊進行密集監測</p>
                
                <div class="example-box">
                  <h6>💡 高頻監測案例：Saint-Émilion的轉色期精準追蹤</h6>
                  <p><strong>目標：</strong>確定12.5公頃Merlot地塊的最佳採收時機。<br><br>
                  
                  <strong>無人機監測計劃（2024年8月-9月）：</strong><br><br>
                  
                  <strong>8月1日（轉色開始）至9月20日（採收）：</strong><br>
                  • 飛行頻率：<strong>每週一次</strong>（共8次飛行）<br>
                  • 飛行高度：40米<br>
                  • 地面解析度：2公分<br>
                  • 相機：RGB+多光譜<br><br>
                  
                  <strong>AI監測指標：</strong><br>
                  • <strong>顏色變化：</strong>從綠色轉為紫紅色的比例<br>
                  • <strong>NDVI變化：</strong>植被活力指數<br>
                  • <strong>冠層溫度：</strong>熱紅外影像<br>
                  • <strong>果實大小：</strong>3D重建估算<br><br>
                  
                  <strong>轉色進度追蹤：</strong><br><br>
                  
                  • 8月1日：轉色比例 5%（剛開始）<br>
                  • 8月8日：轉色比例 18%<br>
                  • 8月15日：轉色比例 35%<br>
                  • 8月22日：轉色比例 58%<br>
                  • 8月29日：轉色比例 78%<br>
                  • 9月5日：轉色比例 92%（<strong>接近完成</strong>）<br>
                  • 9月12日：轉色比例 98%<br>
                  • 9月19日：轉色比例 99%<br><br>
                  
                  <strong>AI採收建議（9月12日分析）：</strong><br>
                  • 轉色已達98%<br>
                  • NDVI開始下降（從0.75降至0.68）<br>
                  • 冠層溫度上升0.8°C（水分壓力跡象）<br>
                  • <strong>AI建議：「最佳採收窗口：9月18-25日」</strong><br><br>
                  
                  <strong>實地品鑑驗證（9月18日）：</strong><br>
                  • 糖度：24.5 °Brix（理想）<br>
                  • 酸度：5.2 g/L（良好）<br>
                  • 種子：90%褐化（成熟）<br>
                  • 單寧：柔順、成熟<br>
                  • <strong>決定9月20-22日採收</strong><br><br>
                  
                  <strong>鄰近酒莊對比（未使用無人機）：</strong><br>
                  • 依靠經驗判斷，9月10日採收<br>
                  • 糖度：23.2 °Brix（偏低）<br>
                  • 種子：75%褐化（<strong>成熟度不足</strong>）<br>
                  • 品鑑：單寧略生澀<br>
                  • 評分：88分<br><br>
                  
                  <strong>Saint-Émilion酒莊採收結果：</strong><br>
                  • 糖度：24.8 °Brix<br>
                  • 種子：92%褐化<br>
                  • 品鑑：單寧絲滑、完美成熟<br>
                  • 評分：<strong>93分</strong>（比對照高5分）<br><br>
                  
                  <strong>經濟效益：</strong><br>
                  • 無人機監測成本：8次飛行 × €250 = <strong>€2,000</strong><br>
                  • 品質提升收益：<br>
                  &nbsp;&nbsp;- 評分提升5分<br>
                  &nbsp;&nbsp;- 正牌酒使用比例從60%提升到80%<br>
                  &nbsp;&nbsp;- 額外收益：€35,000<br>
                  • <strong>ROI：17.5倍</strong><br><br>
                  
                  <strong>酒窖主任評價：</strong><br>
                  「無人機每週監測讓我們看到轉色的完整過程，不是靠經驗猜測，而是有精確數據。9月12日的AI建議給了我們明確的時間窗口，最終我們在最佳時機採收。5分的評分差異，意味著€35,000的收益差異——這就是精準的價值。」</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="precision-spraying-system">
            <h4>💧 精準變量噴灑系統</h4>
            <div class="variable-rate-application">
              <div class="smart-spraying">
                <h5>智能變量噴灑技術</h5>
                <p>傳統噴灑是「一視同仁」——所有區域用同樣的藥量。而無人機精準噴灑能根據每個區域的實際需求調整藥量，健康區域少噴或不噴，病害區域重點噴灑。<br><br>
                
                <strong>技術優勢：</strong><br>
                • <strong>變量噴灑：</strong>根據病害分布調整藥量<br>
                • <strong>精準定位：</strong>RTK GPS定位誤差±2公分<br>
                • <strong>藥劑節約：</strong>減少30-50%農藥使用<br>
                • <strong>環境友好：</strong>減少農藥飄散和土壤污染<br>
                • <strong>安全作業：</strong>操作員無需接觸農藥</p>
                
                <div class="example-box">
                  <h6>💡 精準噴灑案例：Pessac-Léognan的白粉病精準防治</h6>
                  <p><strong>2024年6月白粉病局部爆發：</strong><br><br>
                  
                  <strong>病害監測（6月8日無人機巡檢）：</strong><br>
                  • 25公頃Sauvignon Blanc葡萄園<br>
                  • AI影像分析識別白粉病初期感染<br>
                  • 感染分布：<strong>高度不均</strong><br>
                  &nbsp;&nbsp;- 重度感染：3.8公頃（地塊北部）<br>
                  &nbsp;&nbsp;- 中度感染：5.2公頃（地塊中部）<br>
                  &nbsp;&nbsp;- 輕度感染：8.5公頃（地塊南部）<br>
                  &nbsp;&nbsp;- 未感染：7.5公頃（地塊東南角）<br><br>
                  
                  <strong>傳統噴灑方案：</strong><br>
                  • 全園統一噴灑<br>
                  • 藥量：標準劑量100%<br>
                  • 覆蓋面積：25公頃<br>
                  • 農藥用量：750升<br>
                  • 成本：€4,500<br><br>
                  
                  <strong>無人機精準噴灑方案（AI生成）：</strong><br><br>
                  
                  <em>重度感染區（3.8公頃）：</em><br>
                  • 藥量：<strong>150%標準劑量</strong>（加強治療）<br>
                  • 藥劑：171升<br><br>
                  
                  <em>中度感染區（5.2公頃）：</em><br>
                  • 藥量：<strong>120%標準劑量</strong><br>
                  • 藥劑：187升<br><br>
                  
                  <em>輕度感染區（8.5公頃）：</em><br>
                  • 藥量：<strong>80%標準劑量</strong>（預防為主）<br>
                  • 藥劑：204升<br><br>
                  
                  <em>未感染區（7.5公頃）：</em><br>
                  • 藥量：<strong>30%標準劑量</strong>（僅保護性噴灑）<br>
                  • 藥劑：68升<br><br>
                  
                  <strong>總用藥量對比：</strong><br>
                  • 傳統方案：750升<br>
                  • 精準方案：171+187+204+68 = <strong>630升</strong><br>
                  • 節約：<strong>120升（16%）</strong><br>
                  • 節約成本：<strong>€720</strong><br><br>
                  
                  <strong>無人機噴灑作業（6月9日清晨）：</strong><br><br>
                  
                  <strong>作業參數：</strong><br>
                  • 機型：DJI T40農業無人機<br>
                  • 載藥量：40升/架次<br>
                  • 飛行高度：2.5米（冠層上方）<br>
                  • 作業速度：5米/秒<br>
                  • 噴幅：7米<br>
                  • 作業時間：5:30-7:30（露水未乾，藥效最佳）<br><br>
                  
                  <strong>智能作業流程：</strong><br>
                  • 預先上傳作業地圖（標記4個感染區+藥量）<br>
                  • 無人機自動按地圖飛行<br>
                  • <strong>自動調整藥量</strong>（根據GPS位置實時調整流量）<br>
                  • 重疊區域自動補償（避免重複噴灑）<br>
                  • 作業完成度：<strong>99.2%</strong>（僅3個狹窄角落未覆蓋，人工補噴）<br><br>
                  
                  <strong>作業效率：</strong><br>
                  • 25公頃完成時間：<strong>2小時</strong><br>
                  • 架次數：16次（含充電換藥）<br>
                  • 人力需求：1名飛手+1名助手<br><br>
                  
                  <strong>傳統拖拉機噴灑對比：</strong><br>
                  • 作業時間：<strong>6小時</strong><br>
                  • 人力：2名駕駛員<br>
                  • 土壤壓實：影響根系生長<br>
                  • 藥劑飄散：更嚴重<br><br>
                  
                  <strong>6月20日複查效果（無人機巡檢）：</strong><br><br>
                  
                  <em>重度感染區：</em><br>
                  • 病害控制率：<strong>92%</strong><br>
                  • 新增感染：幾乎為零<br><br>
                  
                  <em>中度感染區：</em><br>
                  • 病害控制率：<strong>95%</strong><br>
                  • 完全遏制擴散<br><br>
                  
                  <em>輕度感染區：</em><br>
                  • 病害控制率：<strong>98%</strong><br>
                  • 未見新增<br><br>
                  
                  <em>未感染區：</em><br>
                  • 保持健康：<strong>100%</strong><br>
                  • 低劑量預防有效<br><br>
                  
                  <strong>對比：鄰近採用傳統全園統一噴灑的酒莊：</strong><br>
                  • 重度區：藥量不足，控制率僅80%<br>
                  • 輕度區：藥量過剩，浪費<br>
                  • 未感染區：不必要的高劑量噴灑<br>
                  • 總體效果：比精準噴灑差<strong>12%</strong><br><br>
                  
                  <strong>經濟效益總結：</strong><br><br>
                  
                  <em>直接成本節省：</em><br>
                  • 農藥節省：€720<br>
                  • 人工節省：4工時 × €25 = €100<br>
                  • 燃料節省：€80<br>
                  • 小計：<strong>€900</strong><br><br>
                  
                  <em>品質保護價值：</em><br>
                  • 病害有效控制，產量損失<5%（vs對照15%）<br>
                  • 保護產量：25公頃 × 6,500kg/ha × 10% × €12/kg = <strong>€195,000</strong><br><br>
                  
                  <em>無人機作業成本：</em><br>
                  • 飛行服務費：€800<br>
                  • 變量處方圖製作：€150<br>
                  • 總成本：<strong>€950</strong><br><br>
                  
                  <strong>ROI計算：</strong><br>
                  • 總收益：€900（成本節省）+ €195,000（產量保護）= €195,900<br>
                  • 總投資：€950<br>
                  • <strong>ROI：206倍</strong><br><br>
                  
                  <strong>環境效益：</strong><br>
                  • 農藥減少：16%（120升）<br>
                  • 減少農藥飄散：高達60%（低空精準噴灑）<br>
                  • 土壤保護：無拖拉機壓實<br>
                  • <strong>獲得有機認證加分</strong><br><br>
                  
                  <strong>酒莊技術總監評價：</strong><br>
                  「精準噴灑的邏輯很簡單——重病重治、輕病輕治、無病少治。但要實現這個邏輯，需要精確知道哪裡有病、病情多重，然後精準送藥到位。無人機+AI讓這一切成為可能。我們不僅省了€900成本，更重要的是效果提升12%——這€195,000的產量保護才是真正的價值。」</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="3d-modeling-system">
            <h4>🏗️ 三維建模與數位雙胞胎</h4>
            <div class="modeling-applications">
              <div class="digital-twin-creation">
                <h5>葡萄園數位雙胞胎</h5>
                <p>通過無人機多角度攝影測量，可以創建葡萄園的精確三維模型——「數位雙胞胎」。這不是簡單的3D圖像，而是包含高程、體積、結構等精確數據的數位資產。<br><br>
                
                <strong>應用場景：</strong><br>
                • <strong>排水規劃：</strong>基於精確地形設計排水系統<br>
                • <strong>灌溉設計：</strong>根據地形優化滴灌管線佈局<br>
                • <strong>機械化評估：</strong>評估坡度、轉彎半徑是否適合機械<br>
                • <strong>陳年模擬：</strong>在數位環境中模擬管理方案效果</p>
                
                <div class="example-box">
                  <h6>💡 3D建模案例：Margaux列級莊的排水系統重新設計</h6>
                  <p><strong>問題：</strong>20公頃地塊低窪區域排水不良，雨後積水，影響根系。<br><br>
                  
                  <strong>無人機3D測繪（2024年3月）：</strong><br><br>
                  
                  <strong>飛行參數：</strong><br>
                  • 機型：DJI Phantom 4 RTK<br>
                  • 飛行模式：傾斜攝影（5個角度）<br>
                  • 飛行高度：60米<br>
                  • 照片重疊率：前向80%、側向70%<br>
                  • 拍攝照片：<strong>3,247張</strong><br>
                  • 飛行時間：<strong>2.5小時</strong><br><br>
                  
                  <strong>3D模型生成（AI處理）：</strong><br>
                  • 處理時間：6小時（自動化）<br>
                  • 生成：<strong>高精度三維地形模型</strong><br>
                  • 高程精度：<strong>±2公分</strong><br>
                  • 點雲密度：每平方米<strong>250點</strong><br><br>
                  
                  <strong>地形分析結果：</strong><br>
                  • 識別出5個低窪積水區<br>
                  • 最大積水區：1.8公頃，最低點比周邊低<strong>35公分</strong><br>
                  • 自然坡度：僅<strong>0.8%</strong>（正常需2-3%）<br>
                  • 現有排水溝：位置不當，無法有效排水<br><br>
                  
                  <strong>AI排水系統設計：</strong><br>
                  • 輸入：3D地形模型、降雨數據、土壤滲透率<br>
                  • 模擬：100年一遇暴雨的水流路徑<br>
                  • 輸出：<strong>最優排水溝布局方案</strong><br><br>
                  
                  <strong>設計方案：</strong><br>
                  • 新建主排水溝：3條，總長度850米<br>
                  • 支排水溝：12條，總長度1,650米<br>
                  • 排水溝深度：40-60公分<br>
                  • 坡度：1.5-2.5%<br>
                  • 出水口：3個，連接現有排水系統<br><br>
                  
                  <strong>虛擬模擬驗證：</strong><br>
                  • 在3D模型中模擬新排水系統<br>
                  • 模擬暴雨情景：50mm/小時降雨<br>
                  • 結果：積水時間從<strong>48小時縮短到6小時</strong><br>
                  • 最大積水深度從<strong>15公分降到3公分</strong><br>
                  • <strong>方案可行，批准施工</strong><br><br>
                  
                  <strong>施工（2024年4月）：</strong><br>
                  • 使用GPS導航挖掘機<br>
                  • 按3D模型設計精確開挖<br>
                  • 誤差控制：<strong>±5公分</strong><br>
                  • 施工時間：<strong>12天</strong><br>
                  • 施工成本：€45,000<br><br>
                  
                  <strong>實際效果驗證（2024年6月22日暴雨）：</strong><br>
                  • 降雨量：62mm/3小時<br>
                  • 積水消退時間：<strong>5.5小時</strong>（vs模擬6小時）<br>
                  • 最大積水深度：<strong>2.5公分</strong>（vs模擬3公分）<br>
                  • <strong>AI模擬準確度：95%+</strong><br><br>
                  
                  <strong>對比：相同暴雨，改造前：</strong><br>
                  • 積水時間：>48小時<br>
                  • 最大積水深度：15公分<br>
                  • 受影響葡萄藤：1,200株出現根部缺氧<br><br>
                  
                  <strong>長期效益評估：</strong><br><br>
                  
                  <em>產量提升：</em><br>
                  • 積水區葡萄藤健康改善<br>
                  • 產量提升：從5,800 kg/ha增至7,200 kg/ha（<strong>+24%</strong>）<br>
                  • 年增產量：1.8公頃 × 1,400 kg = 2,520 kg<br>
                  • 年增收益：2,520 kg × €12/kg = <strong>€30,240/年</strong><br><br>
                  
                  <em>品質提升：</em><br>
                  • 根系更健康，養分吸收更好<br>
                  • 酚類成熟度提升<br>
                  • 該地塊從「僅用於副牌」升級為「可用於正牌調配」<br>
                  • 品質提升價值：難以量化，但顯著<br><br>
                  
                  <em>投資回收：</em><br>
                  • 總投資：€45,000（施工）+ €2,500（無人機測繪）= <strong>€47,500</strong><br>
                  • 年收益：€30,240<br>
                  • <strong>投資回收期：1.6年</strong><br>
                  • 10年NPV：<strong>€215,000</strong><br><br>
                  
                  <strong>技術價值對比：</strong><br><br>
                  
                  <em>傳統測量方法：</em><br>
                  • 人工測量20公頃地形：2-3週<br>
                  • 成本：€15,000<br>
                  • 精度：±10公分<br>
                  • 設計依賴工程師經驗<br>
                  • 無法模擬驗證<br><br>
                  
                  <em>無人機3D建模方法：</em><br>
                  • 飛行+處理：<strong>1天</strong><br>
                  • 成本：<strong>€2,500</strong><br>
                  • 精度：<strong>±2公分</strong><br>
                  • AI優化設計<br>
                  • <strong>虛擬模擬驗證</strong><br><br>
                  
                  <strong>酒莊工程主管總結：</strong><br>
                  「無人機3D建模讓我們以前所未有的精度了解地形。AI基於精確地形數據設計的排水系統，在虛擬環境中已經'測試'通過。實際效果證明，AI模擬準確度達95%。這€2,500的測繪投資，帶來了€215,000的10年價值——而且我們現在有了這塊地的永久數位雙胞胎，未來任何改造都能先在虛擬環境中測試。」</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="drone-system-value">
            <h4>🎯 無人機系統的綜合價值</h4>
            <div class="comprehensive-benefits">
              <p><strong>靈活性革命：</strong><br>
              • 起飛時間：<strong>隨時</strong>（vs衛星3-10天週期）<br>
              • 天氣適應：<strong>雲下飛行</strong>（vs衛星受雲層影響）<br>
              • 解析度：<strong>2-5公分</strong>（vs衛星10米-0.5米）<br>
              • 回饋速度：<strong>當日</strong>（vs衛星1-3天）<br><br>
              
              <strong>功能多樣性：</strong><br>
              • <strong>監測：</strong>高頻率、高解析度影像採集<br>
              • <strong>作業：</strong>精準變量噴灑<br>
              • <strong>建模：</strong>三維地形重建<br>
              • <strong>應急：</strong>災害快速評估<br><br>
              
              <strong>經濟效益：</strong><br>
              • 單次飛行成本：<strong>€200-800</strong><br>
              • 災害評估ROI：<strong>50-200倍</strong><br>
              • 精準噴灑ROI：<strong>100-300倍</strong><br>
              • 3D建模ROI：<strong>30-100倍</strong><br>
              • 高頻監測ROI：<strong>10-50倍</strong><br><br>
              
              <strong>環境效益：</strong><br>
              • 農藥使用減少：<strong>30-50%</strong><br>
              • 土壤壓實避免：<strong>100%</strong>（vs拖拉機）<br>
              • 藥劑飄散減少：<strong>60%</strong><br>
              • 支持有機/可持續認證<br><br>
              
              <strong>策略定位：</strong><br>
              • <strong>衛星</strong>：大範圍、週期性基礎監測<br>
              • <strong>無人機</strong>：靈活、高精度、多功能作業<br>
              • <strong>地面感測器</strong>：連續、實時、局部監測<br>
              • <strong>三者結合</strong>：構建完整的精準農業體系<br><br>
              
              <strong>未來趨勢：</strong><br>
              • <strong>全自主飛行：</strong>預設任務，自動執行<br>
              • <strong>機群協同：</strong>多機編隊作業<br>
              • <strong>邊緣AI：</strong>機上實時分析<br>
              • <strong>多功能整合：</strong>一機多用<br>
              • <strong>無人機將成為精品酒莊的「空中農機」</strong></p>
            </div>
          </div>
        </div>
      </div>
      -->
    `,
    highlights: [
      {
        id: 1,
        icon: '🚁',
        title: '緊急災害評估',
        content: '2.5小時完成45公頃冰雹評估，快速理賠€185,000，ROI 185倍'
      },
      {
        id: 2,
        icon: '💧',
        title: '精準變量噴灑',
        content: '藥劑節約16%，防治效果提升12%，保護產量€195,000'
      }
    ]
  },

  // 物聯網感測器網絡（一）：環境與土壤監測
  {
    type: 'content',
    title: '物聯網感測器網絡（一）：環境與土壤監測',
    content: `<div style="font-family:sans-serif;padding:12px;max-width:900px;margin:0 auto">
  <div style="background:linear-gradient(135deg,#064e3b,#065f46);color:#fff;padding:8px 14px;border-radius:6px;font-size:0.85em;font-weight:700;margin-bottom:12px">
    🌡️ 物聯網感測器網絡（一）｜葡萄園的「24小時神經系統」
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
    <div style="background:#f0f9ff;border:1px solid #7dd3fc;border-top:3px solid #0284c7;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#0284c7;font-size:0.9em;margin-bottom:8px">🌤️ 智能氣象監測站（6大參數）</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;font-size:0.82em;margin-bottom:8px">
        <div style="background:#fff;border:1px solid #bae6fd;border-radius:4px;padding:5px;text-align:center;color:#0369a1">🌡️ 溫度</div>
        <div style="background:#fff;border:1px solid #bae6fd;border-radius:4px;padding:5px;text-align:center;color:#0369a1">💧 濕度</div>
        <div style="background:#fff;border:1px solid #bae6fd;border-radius:4px;padding:5px;text-align:center;color:#0369a1">🌧️ 降雨</div>
        <div style="background:#fff;border:1px solid #bae6fd;border-radius:4px;padding:5px;text-align:center;color:#0369a1">💨 風向風速</div>
        <div style="background:#fff;border:1px solid #bae6fd;border-radius:4px;padding:5px;text-align:center;color:#0369a1">☀️ 太陽輻射</div>
        <div style="background:#fff;border:1px solid #bae6fd;border-radius:4px;padding:5px;text-align:center;color:#0369a1">📊 大氣壓</div>
      </div>
      <div style="background:#dbeafe;border-radius:5px;padding:7px;font-size:0.82em">
        <span style="font-weight:700;color:#1d4ed8">📌 Pomerol 霜凍預警：</span><br>
        8.5公頃 / 5個氣象站 / 每5分鐘更新<br>
        提前 <strong style="color:#dc2626">12小時</strong> 霜凍預警 → 零霜凍損失<br>
        <span style="color:#7c3aed;font-weight:700">ROI 37倍</span>（投入€12,500）
      </div>
    </div>
    <div style="background:#f0fdf4;border:1px solid #86efac;border-top:3px solid #16a34a;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#15803d;font-size:0.9em;margin-bottom:8px">🌱 多層土壤水分監測</div>
      <div style="font-size:0.82em;color:#374151;margin-bottom:8px">
        <strong>監測深度（4層）：</strong>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:4px">
          <div style="background:#fff;border:1px solid #86efac;border-radius:4px;padding:4px 6px;text-align:center">15 cm</div>
          <div style="background:#fff;border:1px solid #86efac;border-radius:4px;padding:4px 6px;text-align:center">30 cm</div>
          <div style="background:#fff;border:1px solid #86efac;border-radius:4px;padding:4px 6px;text-align:center">45 cm</div>
          <div style="background:#fff;border:1px solid #86efac;border-radius:4px;padding:4px 6px;text-align:center">60 cm</div>
        </div>
      </div>
      <div style="background:#dcfce7;border-radius:5px;padding:7px;font-size:0.82em">
        <span style="font-weight:700;color:#15803d">📌 Graves 精準灌溉：</span><br>
        42公頃 / 18點 / <strong>72個感測器</strong><br>LoRaWAN無線 / 每15分鐘更新<br>
        節水 <strong style="color:#16a34a">36%</strong>｜增產 <strong style="color:#16a34a">6.3%</strong>｜回收期 <strong style="color:#dc2626">1.3月</strong>
      </div>
    </div>
  </div>
  <div style="background:linear-gradient(90deg,#f8fdf9,#dcfce7);border:1px solid #86efac;border-radius:8px;padding:9px;text-align:center;font-size:0.84em;color:#15803d;font-weight:600">
    🧠 衛星（俯瞰）＋ 無人機（近觀）＋ 物聯網（即感）→ 天–空–地一體化監測體系
  </div>
</div>
      <!--ORIGINAL:
      <div class="chapter-content">
        <div class="iot-sensor-network">
          <h3>🌡️ 物聯網感測器網絡：環境與土壤監測</h3>
          <p class="intro-text">如果說衛星是「太空之眼」、無人機是「田間使者」，那麼物聯網感測器就是葡萄園的「神經系統」——24小時不間斷監測溫度、濕度、土壤水分、養分狀況。這些看似微小的感測器，構建了一個無處不在的監測網絡，讓酒莊能像「感受自己的身體」一樣感受葡萄園的每一個變化。</p>
          
          <div class="weather-station-system">
            <h4>🌤️ 智能氣象監測站</h4>
            <div class="meteorological-monitoring">
              <div class="weather-station-deployment">
                <h5>微氣候精準監測網絡</h5>
                <p>波爾多的精品酒莊早已不滿足於使用「區域氣象站」的數據——5公里外的數據無法代表自家葡萄園。現代酒莊在園內部署多個微型氣象站，構建專屬的「私人氣象網」，精確監測每個地塊的微氣候差異。<br><br>
                
                <strong>監測參數：</strong><br>
                • <strong>溫度：</strong>空氣溫度、冠層溫度、地表溫度<br>
                • <strong>濕度：</strong>相對濕度、葉面濕度、露點溫度<br>
                • <strong>降雨：</strong>降雨量、降雨強度、降雨時長<br>
                • <strong>風速風向：</strong>影響病害傳播和蒸散發<br>
                • <strong>太陽輻射：</strong>影響光合作用和溫度<br>
                • <strong>大氣壓力：</strong>預測天氣變化</p>
                
                <div class="example-box">
                  <h6>💡 微氣候監測案例：Pomerol精品酒莊的霜凍預警系統</h6>
                  <p><strong>春季霜凍的致命威脅：</strong><br><br>
                  
                  波爾多春季霜凍（4-5月）是葡萄種植者的噩夢。2021年4月的大霜凍導致法國葡萄產業損失€20億。對於Pomerol這樣的小產區，一次霜凍可能意味著全年顆粒無收。<br><br>
                  
                  <strong>2024年部署物聯網霜凍預警系統：</strong><br><br>
                  
                  <strong>感測器網絡配置：</strong><br>
                  • 酒莊面積：8.5公頃<br>
                  • 氣象站數量：<strong>5個</strong>（每1.7公頃1個）<br>
                  • 感測器型號：Davis Vantage Pro2 Plus<br>
                  • 監測頻率：<strong>每5分鐘</strong>一次<br>
                  • 數據傳輸：4G無線實時上傳<br>
                  • 總投資：€12,500<br><br>
                  
                  <strong>關鍵監測指標：</strong><br>
                  • 空氣溫度（2米高度）<br>
                  • 地表溫度（10公分高度）<br>
                  • 露點溫度<br>
                  • 相對濕度<br>
                  • 風速<br><br>
                  
                  <strong>2024年4月12日，霜凍預警實戰：</strong><br><br>
                  
                  <strong>4月11日晚上8:00，AI預警：</strong><br>
                  • 系統分析未來12小時氣象趨勢<br>
                  • 預測：<strong>「明晨4:00-6:00高霜凍風險」</strong><br>
                  • 預測最低溫：<strong>-2°C</strong><br>
                  • 危險時段：<strong>凌晨4:15-5:45</strong><br>
                  • 風險等級：<strong>極高（紅色警報）</strong><br>
                  • <strong>SMS+App立即通知酒莊主和技術團隊</strong><br><br>
                  
                  <strong>應急決策（11日晚上8:30）：</strong><br>
                  • 召集應急小組會議<br>
                  • 決定：啟動防霜措施<br>
                  • 準備防霜蠟燭：800支<br>
                  • 調動人力：8名工人待命<br><br>
                  
                  <strong>實時監測數據（4月12日凌晨）：</strong><br><br>
                  
                  • 02:00 - 溫度3.5°C，持續下降<br>
                  • 03:00 - 溫度1.2°C，<strong>接近危險</strong><br>
                  • 03:30 - 溫度0.5°C，<strong>啟動防霜蠟燭</strong><br>
                  • 04:00 - 5個氣象站讀數：<br>
                  &nbsp;&nbsp;- 站點1（北部高地）：0.8°C<br>
                  &nbsp;&nbsp;- 站點2（中北）：0.2°C<br>
                  &nbsp;&nbsp;- 站點3（中部）：-0.5°C ⚠️<br>
                  &nbsp;&nbsp;- 站點4（南部）：-1.2°C ⚠️⚠️<br>
                  &nbsp;&nbsp;- 站點5（東南低地）：<strong>-1.8°C</strong> 🚨<br><br>
                  
                  <strong>精準應對策略：</strong><br>
                  • 站點5（東南低地1.5公頃）：<strong>蠟燭密度×2</strong><br>
                  • 站點4（南部1.8公頃）：<strong>蠟燭密度×1.5</strong><br>
                  • 站點3（中部2.0公頃）：<strong>標準蠟燭密度</strong><br>
                  • 站點1、2（北部3.2公頃）：<strong>監測為主，暫不點燃</strong><br><br>
                  
                  <strong>最冷時刻（04:45）溫度分布：</strong><br>
                  • 站點1：1.5°C（✓ 安全，未點蠟燭，節省成本）<br>
                  • 站點2：0.8°C（✓ 安全）<br>
                  • 站點3：0.2°C（✓ 蠟燭效果顯著，從-0.5升至0.2）<br>
                  • 站點4：0.5°C（✓ 蠟燭效果顯著，從-1.2升至0.5）<br>
                  • 站點5：0.3°C（✓ 加密蠟燭救援成功，從-1.8升至0.3）<br><br>
                  
                  <strong>06:00 - 危險解除：</strong><br>
                  • 所有站點溫度回升至2°C以上<br>
                  • 日出後氣溫快速上升<br>
                  • <strong>零霜凍損失！</strong><br><br>
                  
                  <strong>鄰近酒莊對比（未安裝感測器網絡）：</strong><br><br>
                  
                  <em>酒莊A（1.5公里外）：</em><br>
                  • 依賴區域氣象站預報（顯示「低霜凍風險」）<br>
                  • 未採取防霜措施<br>
                  • 實際最低溫：<strong>-2.5°C</strong>（比預報低3°C）<br>
                  • 霜凍損失：<strong>40%新芽</strong><br>
                  • 產量影響：預估減產30%<br>
                  • 經濟損失：<strong>€180,000</strong><br><br>
                  
                  <em>酒莊B（3公里外）：</em><br>
                  • 有單個氣象站，但只監測一個點<br>
                  • 全園統一防霜措施<br>
                  • 結果：北部高地「過度防護」浪費資源，南部低地「防護不足」仍有損失<br>
                  • 霜凍損失：<strong>15%新芽</strong><br>
                  • 產量影響：8-10%<br>
                  • 經濟損失：<strong>€55,000</strong><br><br>
                  
                  <strong>Pomerol酒莊成本效益分析：</strong><br><br>
                  
                  <em>防霜成本：</em><br>
                  • 防霜蠟燭：800支 × €3.5 = €2,800<br>
                  • 人工費用：8人 × 8小時 × €25 = €1,600<br>
                  • 單次總成本：<strong>€4,400</strong><br><br>
                  
                  <em>避免損失：</em><br>
                  • 若未防護，參考酒莊A損失40%新芽<br>
                  • 8.5公頃 × 7,500 kg/ha × 40% = 25,500 kg損失<br>
                  • 損失價值：25,500 kg × €18/kg = <strong>€459,000</strong><br><br>
                  
                  <em>精準防護優勢：</em><br>
                  • 與全園統一防護（如酒莊B）相比：<br>
                  • 節省蠟燭：北部3.2公頃未點燭，節省<strong>€1,200</strong><br>
                  • 提升效果：南部重點防護，效果更好<br><br>
                  
                  <strong>系統ROI計算：</strong><br>
                  • 系統投資：€12,500<br>
                  • 單次霜凍避免損失：€459,000<br>
                  • <strong>單次事件ROI：37倍</strong><br>
                  • 系統使用壽命：10年<br>
                  • 波爾多春霜頻率：平均每3年1次嚴重霜凍<br>
                  • <strong>10年預期ROI：123倍</strong><br><br>
                  
                  <strong>2024年4-5月完整記錄：</strong><br>
                  • 總預警次數：<strong>12次</strong><br>
                  • 實際防霜行動：<strong>3次</strong>（其他9次風險較低，僅加強監測）<br>
                  • 霜凍損失：<strong>0%</strong><br>
                  • 鄰近15家酒莊平均損失：<strong>18%</strong><br><br>
                  
                  <strong>酒莊主的評價：</strong><br>
                  「4月12日那個夜晚，我親眼看到了物聯網的價值。5個氣象站清楚顯示園內溫度差異達3.3°C——如果只有1個站點，我們可能會錯判。精準的數據讓我們實現精準防護：冷的地方多燒蠟燭，暖的地方不浪費。最終€4,400的投入保護了€459,000的產量。這€12,500的系統投資，是我這輩子做過最明智的決定。」<br><br>
                  
                  <strong>額外價值：</strong><br>
                  • 保險公司認可：因安裝預警系統，保費下降<strong>15%</strong><br>
                  • 年保費節省：€3,200<br>
                  • 心理價值：安心睡覺，不用半夜起來查溫度<br>
                  • 數據資產：10年氣象數據，支持精準管理決策</p>
                </div>
              </div>
              
              <div class="disease-risk-monitoring">
                <h5>病害風險預警系統</h5>
                <p>許多葡萄病害（霜黴病、白粉病、灰黴病）的發生與溫度、濕度、葉面濕度密切相關。物聯網氣象站持續監測這些參數，結合AI模型，可以在病害發生前2-3天發出預警。<br><br>
                
                <strong>預警模型：</strong><br>
                • <strong>霜黴病：</strong>溫度13-25°C + 葉面濕度>6小時<br>
                • <strong>白粉病：</strong>溫度20-27°C + 相對濕度40-70%<br>
                • <strong>灰黴病：</strong>溫度15-20°C + 高濕度 + 花期或轉色期<br>
                • <strong>綜合評估：</strong>過去7天氣象數據 + 未來3天預報</p>
                
                <div class="example-box">
                  <h6>💡 病害預警案例：Saint-Julien的霜黴病精準防治</h6>
                  <p><strong>2024年6月霜黴病預警實戰：</strong><br><br>
                  
                  <strong>氣象監測背景：</strong><br>
                  • 酒莊：35公頃Cabernet Sauvignon<br>
                  • IoT系統：7個氣象站<br>
                  • 監測參數：溫度、濕度、降雨、葉面濕度<br>
                  • 數據頻率：每10分鐘<br><br>
                  
                  <strong>6月8日下午，AI病害預警：</strong><br>
                  • 系統分析過去3天氣象數據<br>
                  • 6月5-7日：累積降雨55mm<br>
                  • 葉面濕度持續時間：連續3天，每天>12小時<br>
                  • 平均溫度：22°C（霜黴病最適溫度）<br>
                  • <strong>AI預警：「霜黴病風險極高（95%），建議48小時內預防性噴藥」</strong><br><br>
                  
                  <strong>7個氣象站風險評估：</strong><br>
                  • 站點1（北部高地）：風險85%（通風好，濕度稍低）<br>
                  • 站點2-4（中部平地）：風險<strong>98%</strong>（濕度最高）<br>
                  • 站點5-6（南部）：風險92%<br>
                  • 站點7（東南角）：風險88%<br><br>
                  
                  <strong>決策：精準分級防治</strong><br><br>
                  
                  <em>高風險區（站點2-4，15公頃）：</em><br>
                  • 藥劑：銅製劑+有機殺菌劑（雙重保護）<br>
                  • 劑量：120%標準<br>
                  • 時間：6月9日凌晨5:00<br><br>
                  
                  <em>中風險區（站點5-7，12公頃）：</em><br>
                  • 藥劑：銅製劑<br>
                  • 劑量：100%標準<br>
                  • 時間：6月9日上午6:30<br><br>
                  
                  <em>相對低風險區（站點1，8公頃）：</em><br>
                  • 藥劑：預防性銅製劑<br>
                  • 劑量：80%標準<br>
                  • 時間：6月9日上午8:00<br><br>
                  
                  <strong>6月9日實施預防性噴藥：</strong><br>
                  • 總用藥量：420升（vs全園標準用量525升）<br>
                  • 節省：<strong>20%</strong><br>
                  • 成本：€2,850<br><br>
                  
                  <strong>6月18日（9天後）實地檢查：</strong><br>
                  • 站點1（北部）：<strong>零感染</strong><br>
                  • 站點2-4（中部）：發現5處初期感染點（<strong><0.1%葉片</strong>）<br>
                  • 站點5-7（南部）：<strong>零感染</strong><br>
                  • <strong>預防成功率：>99.9%</strong><br><br>
                  
                  <strong>鄰近酒莊對比：</strong><br><br>
                  
                  <em>酒莊C（未安裝監測系統）：</em><br>
                  • 依賴經驗判斷，6月12日才發現病害（<strong>晚3天</strong>）<br>
                  • 此時感染已擴散<br>
                  • 感染面積：8公頃（23%）<br>
                  • 需3次治療性噴藥才控制<br>
                  • 藥劑成本：€5,200<br>
                  • 產量損失：12%<br>
                  • 總損失：<strong>€67,000</strong><br><br>
                  
                  <em>酒莊D（有監測，但全園統一防治）：</em><br>
                  • 收到相同預警<br>
                  • 全園統一120%劑量噴藥<br>
                  • 用藥量：630升<br>
                  • 成本：€4,200（<strong>多花€1,350</strong>）<br>
                  • 效果：與精準防治相當<br>
                  • 缺點：過度用藥，成本浪費<br><br>
                  
                  <strong>Saint-Julien酒莊效益：</strong><br><br>
                  
                  <em>直接效益：</em><br>
                  • 預防成本：€2,850<br>
                  • vs治療成本（若晚發現）：€5,200<br>
                  • 節省：<strong>€2,350</strong><br><br>
                  
                  <em>產量保護：</em><br>
                  • 避免12%產量損失<br>
                  • 保護產量：35公頃 × 7,800 kg/ha × 12% = 32,760 kg<br>
                  • 價值：32,760 kg × €15/kg = <strong>€491,400</strong><br><br>
                  
                  <em>vs全園統一防治：</em><br>
                  • 節省藥劑：€1,350<br>
                  • 效果相當，成本更低<br><br>
                  
                  <strong>2024年全季病害預警記錄：</strong><br>
                  • 霜黴病預警：5次，實施預防4次<br>
                  • 白粉病預警：3次，實施預防2次<br>
                  • 灰黴病預警：2次，加強通風管理<br>
                  • 全年病害損失：<strong><2%</strong>（vs產區平均8-12%）<br>
                  • 年度節省：藥劑成本€8,500，避免損失€350,000+<br><br>
                  
                  <strong>技術總監總結：</strong><br>
                  「病害防治的最佳策略是『預防性用藥』——在病害發生前就阻止它。但何時預防？憑經驗太主觀，過度預防浪費成本和環境。IoT系統給了我們精確答案：當葉面濕度連續3天>12小時、溫度22°C，霜黴病風險就高達95%。數據驅動的精準預防，讓我們用更少的藥劑實現更好的效果。」</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="soil-monitoring-system">
            <h4>🌱 智能土壤監測系統</h4>
            <div class="soil-sensor-network">
              <div class="soil-moisture-management">
                <h5>多層土壤水分精準管理</h5>
                <p>水分管理是葡萄種植的核心——太多導致徒長、品質下降，太少導致壓力過大、產量損失。傳統依賴經驗「看天吃飯」，而物聯網土壤水分感測器能實時監測不同深度的土壤含水量，實現「按需灌溉」。<br><br>
                
                <strong>監測技術：</strong><br>
                • <strong>多層監測：</strong>15cm、30cm、45cm、60cm四個深度<br>
                • <strong>容積含水量：</strong>TDR或FDR技術，精度±2%<br>
                • <strong>基質勢能：</strong>張力計測量水分可利用性<br>
                • <strong>灌溉觸發：</strong>自動計算最佳灌溉時機和水量</p>
                
                <div class="example-box">
                  <h6>💡 土壤水分案例：Graves的精準灌溉系統</h6>
                  <p><strong>挑戰：</strong>42公頃葡萄園，礫石土壤，排水快，夏季乾旱頻發，需要精準灌溉。<br><br>
                  
                  <strong>2024年部署土壤監測網絡：</strong><br><br>
                  
                  <strong>感測器配置：</strong><br>
                  • 監測點：<strong>18個</strong>（每2.3公頃1個）<br>
                  • 每個監測點：4層深度感測器（15/30/45/60cm）<br>
                  • 總感測器數：<strong>72個</strong><br>
                  • 監測頻率：每15分鐘<br>
                  • 數據傳輸：LoRaWAN無線網絡<br>
                  • 系統成本：€28,500<br><br>
                  
                  <strong>灌溉決策邏輯：</strong><br>
                  • 關鍵深度：30cm（主要根系層）<br>
                  • 田間持水量：35%<br>
                  • 永久凋萎點：15%<br>
                  • 可利用水分（AWC）：20%<br>
                  • <strong>灌溉觸發點：25%（AWC的50%）</strong><br>
                  • <strong>灌溉目標：32%（AWC的85%）</strong><br><br>
                  
                  <strong>2024年7月15日，典型灌溉決策：</strong><br><br>
                  
                  <strong>上午9:00，系統自動分析：</strong><br>
                  • 18個監測點30cm深度含水量：<br>
                  &nbsp;&nbsp;- 點1-6（北部高地）：28-30%（<strong>正常</strong>）<br>
                  &nbsp;&nbsp;- 點7-12（中部）：24-26%（<strong>接近臨界</strong>）<br>
                  &nbsp;&nbsp;- 點13-18（南部坡地）：21-23%（<strong>需要灌溉</strong>）<br>
                  • AI決策：「南部坡地6個監測點（14公頃）需要灌溉」<br><br>
                  
                  <strong>灌溉量計算：</strong><br>
                  • 當前平均含水量：22%<br>
                  • 目標含水量：32%<br>
                  • 需補充水量：10%體積含水量<br>
                  • 土壤深度：60cm（有效根區）<br>
                  • 計算：10% × 60cm = 6cm = <strong>60mm</strong><br>
                  • 但考慮蒸發損失，實際灌溉量：<strong>70mm</strong><br><br>
                  
                  <strong>精準分區灌溉：</strong><br>
                  • 區域1（點13-15，6.8公頃）：含水量22%，灌溉70mm<br>
                  • 區域2（點16-18，7.2公頃）：含水量21%，灌溉<strong>80mm</strong>（更乾）<br>
                  • 總用水量：476噸<br><br>
                  
                  <strong>灌溉實施（7月15日夜間）：</strong><br>
                  • 時間：晚上10:00-凌晨4:00（蒸發量最低）<br>
                  • 方式：滴灌系統<br>
                  • 流速：2 L/h/株<br>
                  • 持續時間：<strong>6小時</strong><br><br>
                  
                  <strong>灌溉後監測（7月16日上午9:00）：</strong><br>
                  • 區域1（30cm深度）：31%（✓ 達標）<br>
                  • 區域2（30cm深度）：32%（✓ 完美）<br>
                  • <strong>灌溉精度：>95%</strong><br><br>
                  
                  <strong>對比：傳統灌溉方式</strong><br><br>
                  
                  <em>方式A：固定週期灌溉（鄰近酒莊）：</em><br>
                  • 每10天灌溉一次，全園統一<br>
                  • 灌溉量：60mm/次<br>
                  • 問題：<br>
                  &nbsp;&nbsp;- 北部高地不需要灌溉，造成浪費和徒長<br>
                  &nbsp;&nbsp;- 南部坡地10天間隔太長，中間出現水分壓力<br>
                  • 夏季（6-8月）總用水量：180mm × 42公頃 = <strong>7,560噸</strong><br><br>
                  
                  <em>方式B：經驗判斷（另一鄰近酒莊）：</em><br>
                  • 酒窖主任每週巡檢，憑葉片狀態判斷<br>
                  • 問題：<br>
                  &nbsp;&nbsp;- 當葉片萎蔫時，水分壓力已持續數天<br>
                  &nbsp;&nbsp;- 無法發現早期輕度壓力<br>
                  • 結果：產量損失8-10%<br><br>
                  
                  <strong>Graves酒莊精準灌溉效益：</strong><br><br>
                  
                  <em>2024年夏季完整記錄（6月-8月）：</em><br>
                  • 灌溉次數：<strong>9次</strong>（vs固定週期18次）<br>
                  • 總用水量：<strong>4,850噸</strong>（vs固定週期7,560噸）<br>
                  • 節水：<strong>36%</strong>（2,710噸）<br><br>
                  
                  <em>成本節省：</em><br>
                  • 水費：2,710噸 × €1.2 = €3,252<br>
                  • 電費（抽水）：2,710噸 × €0.15 = €407<br>
                  • 人工（減少9次灌溉操作）：€1,800<br>
                  • 合計：<strong>€5,459/年</strong><br><br>
                  
                  <em>品質與產量：</em><br>
                  • 避免水分壓力導致的產量損失：8-10%<br>
                  • 避免過度灌溉導致的徒長和品質下降<br>
                  • 產量：7,650 kg/ha（vs固定週期7,200 kg/ha）<br>
                  • 產量提升：<strong>6.3%</strong><br>
                  • 增產價值：42公頃 × 450 kg/ha × €14/kg = <strong>€264,600</strong><br><br>
                  
                  <em>品質提升：</em><br>
                  • 精準水分控制，避免徒長<br>
                  • 酚類成熟度更好<br>
                  • 2024年評分：92分（vs 2023年固定灌溉89分）<br>
                  • 正牌酒使用比例從65%提升到78%<br><br>
                  
                  <strong>系統ROI：</strong><br>
                  • 系統投資：€28,500<br>
                  • 年度收益：€5,459（成本節省）+ €264,600（產量/品質提升）<br>
                  • 年度總收益：<strong>€270,059</strong><br>
                  • <strong>投資回收期：1.3個月</strong><br>
                  • <strong>年度ROI：9.5倍</strong><br><br>
                  
                  <strong>環境效益：</strong><br>
                  • 節水36%，符合法國水資源管理法規<br>
                  • 獲得「可持續葡萄種植」認證<br>
                  • 品牌形象提升<br><br>
                  
                  <strong>酒莊技術經理評價：</strong><br>
                  「以前我們灌溉靠經驗——看葉子、摸土壤、查日曆。現在我們有72個『地下哨兵』24小時監測。系統告訴我哪裡需要水、需要多少水、什麼時候澆。結果是節水36%、增產6.3%、品質提升3分。這€28,500投資1.3個月就回本，這輩子沒見過這麼快的ROI。」</p>
                </div>
              </div>
              
              <div class="soil-nutrient-monitoring">
                <h5>土壤營養智能管理</h5>
                <p>除了水分，土壤養分狀況同樣關鍵。物聯網土壤養分感測器可以實時監測EC值（電導率，反映總養分濃度）、pH值、氮磷鉀含量，指導精準施肥，避免過度施肥造成環境污染和品質下降。<br><br>
                
                <strong>監測參數：</strong><br>
                • <strong>EC值：</strong>反映土壤總養分濃度和鹽分<br>
                • <strong>pH值：</strong>影響養分可利用性<br>
                • <strong>氮（N）：</strong>影響植株生長活力<br>
                • <strong>磷（P）：</strong>影響根系發育和開花<br>
                • <strong>鉀（K）：</strong>影響果實品質和抗病性</p>
                
                <div class="example-box">
                  <h6>💡 養分監測案例：Médoc的精準施肥管理</h6>
                  <p><strong>問題：</strong>55公頃葡萄園，土壤類型多樣，傳統統一施肥導致部分區域過量、部分不足。<br><br>
                  
                  <strong>2024年部署土壤養分監測系統：</strong><br><br>
                  
                  <strong>感測器網絡：</strong><br>
                  • 監測點：<strong>22個</strong>（每2.5公頃1個）<br>
                  • 監測深度：30cm（主要根區）<br>
                  • 感測器類型：EC、pH、NPK三合一感測器<br>
                  • 監測頻率：每小時<br>
                  • 系統成本：€35,000<br><br>
                  
                  <strong>2024年3月基線測量：</strong><br>
                  • 22個監測點養分狀況差異顯著：<br><br>
                  
                  <em>北部礫石區（點1-8，18公頃）：</em><br>
                  • EC值：0.8-1.2 mS/cm（<strong>偏低</strong>）<br>
                  • pH值：7.2-7.5（<strong>略高</strong>）<br>
                  • 氮：45-60 ppm（<strong>不足</strong>）<br>
                  • 磷：25-35 ppm（適中）<br>
                  • 鉀：180-220 ppm（適中）<br><br>
                  
                  <em>中部混合區（點9-16，22公頃）：</em><br>
                  • EC值：1.5-2.0 mS/cm（適中）<br>
                  • pH值：6.8-7.2（理想）<br>
                  • 氮：80-100 ppm（適中）<br>
                  • 磷：40-55 ppm（良好）<br>
                  • 鉀：250-280 ppm（良好）<br><br>
                  
                  <em>南部黏土區（點17-22，15公頃）：</em><br>
                  • EC值：2.5-3.2 mS/cm（<strong>偏高</strong>）<br>
                  • pH值：6.5-6.8（適中）<br>
                  • 氮：120-150 ppm（<strong>過高</strong>）<br>
                  • 磷：60-75 ppm（<strong>過高</strong>）<br>
                  • 鉀：320-380 ppm（<strong>過高</strong>）<br><br>
                  
                  <strong>AI施肥方案生成：</strong><br><br>
                  
                  <em>北部礫石區（18公頃）：</em><br>
                  • 氮肥：<strong>60 kg/ha</strong>（補充不足）<br>
                  • 磷肥：<strong>20 kg/ha</strong>（維持）<br>
                  • 鉀肥：<strong>40 kg/ha</strong>（適度補充）<br>
                  • 石灰：<strong>150 kg/ha</strong>（降低pH）<br><br>
                  
                  <em>中部混合區（22公頃）：</em><br>
                  • 氮肥：<strong>40 kg/ha</strong>（維持）<br>
                  • 磷肥：<strong>15 kg/ha</strong>（輕度補充）<br>
                  • 鉀肥：<strong>30 kg/ha</strong>（維持）<br><br>
                  
                  <em>南部黏土區（15公頃）：</em><br>
                  • 氮肥：<strong>0 kg/ha</strong>（已過量，停施）<br>
                  • 磷肥：<strong>0 kg/ha</strong>（已過量，停施）<br>
                  • 鉀肥：<strong>0 kg/ha</strong>（已過量，停施）<br>
                  • 策略：種植綠肥吸收多餘養分<br><br>
                  
                  <strong>對比：2023年傳統統一施肥</strong><br>
                  • 全園統一配方：氮50 kg/ha、磷25 kg/ha、鉀40 kg/ha<br>
                  • 結果：<br>
                  &nbsp;&nbsp;- 北部：不足，葡萄藤生長弱<br>
                  &nbsp;&nbsp;- 中部：適中<br>
                  &nbsp;&nbsp;- 南部：過量，徒長、品質下降<br><br>
                  
                  <strong>2024年精準施肥實施與監測：</strong><br><br>
                  
                  <strong>4月施肥後監測（30天）：</strong><br><br>
                  
                  <em>北部礫石區：</em><br>
                  • EC值：1.5-1.8 mS/cm（<strong>提升</strong>）<br>
                  • 氮：85-95 ppm（<strong>達標</strong>）<br>
                  • 葡萄藤生長：明顯改善<br><br>
                  
                  <em>中部混合區：</em><br>
                  • 養分維持適中水平<br>
                  • 生長均衡<br><br>
                  
                  <em>南部黏土區：</em><br>
                  • EC值：2.0-2.3 mS/cm（<strong>下降</strong>）<br>
                  • 氮：80-100 ppm（<strong>回歸正常</strong>）<br>
                  • 徒長現象消失<br><br>
                  
                  <strong>9月採收結果：</strong><br><br>
                  
                  <em>北部礫石區：</em><br>
                  • 產量：7,200 kg/ha（vs 2023年6,500 kg/ha，<strong>+10.8%</strong>）<br>
                  • 品質：葡萄健康、成熟度好<br>
                  • 評分：91分（vs 2023年88分）<br><br>
                  
                  <em>中部混合區：</em><br>
                  • 產量：7,800 kg/ha（持平）<br>
                  • 品質：維持高水平<br>
                  • 評分：92分<br><br>
                  
                  <em>南部黏土區：</em><br>
                  • 產量：7,500 kg/ha（vs 2023年8,200 kg/ha，<strong>-8.5%但品質大幅提升</strong>）<br>
                  • 品質：從「只能做副牌」提升到「可用於正牌調配」<br>
                  • 評分：90分（vs 2023年85分，<strong>+5分</strong>）<br><br>
                  
                  <strong>經濟效益分析：</strong><br><br>
                  
                  <em>肥料成本對比：</em><br><br>
                  
                  2023年統一施肥：<br>
                  • 氮肥：55公頃 × 50 kg/ha × €2.5/kg = €6,875<br>
                  • 磷肥：55公頃 × 25 kg/ha × €3.0/kg = €4,125<br>
                  • 鉀肥：55公頃 × 40 kg/ha × €2.8/kg = €6,160<br>
                  • 合計：<strong>€17,160</strong><br><br>
                  
                  2024年精準施肥：<br>
                  • 北部：18ha × (60×2.5 + 20×3.0 + 40×2.8 + 150×0.5) = €7,290<br>
                  • 中部：22ha × (40×2.5 + 15×3.0 + 30×2.8) = €5,038<br>
                  • 南部：15ha × 綠肥種子 = €450<br>
                  • 合計：<strong>€12,778</strong><br>
                  • 節省：<strong>€4,382（25.5%）</strong><br><br>
                  
                  <em>產量與品質效益：</em><br>
                  • 北部增產：18ha × 700 kg/ha × €12/kg = €151,200<br>
                  • 南部品質提升：從副牌升級正牌調配<br>
                  &nbsp;&nbsp;- 15ha × 7,500 kg/ha × 30%正牌比例 × (€18-€8差價) = <strong>€337,500</strong><br>
                  • 合計：<strong>€488,700</strong><br><br>
                  
                  <strong>系統ROI：</strong><br>
                  • 系統投資：€35,000<br>
                  • 年度收益：€4,382（肥料節省）+ €488,700（產量/品質）<br>
                  • 年度總收益：<strong>€493,082</strong><br>
                  • <strong>投資回收期：26天</strong><br>
                  • <strong>年度ROI：14.1倍</strong><br><br>
                  
                  <strong>環境效益：</strong><br>
                  • 肥料使用減少25.5%<br>
                  • 南部避免過量施肥導致的地下水污染<br>
                  • 符合歐盟「農場到餐桌」戰略<br>
                  • 獲得HVE（高環境價值）3級認證<br><br>
                  
                  <strong>酒莊農藝師總結：</strong><br>
                  「以前我們全園用同一個施肥配方——這就像讓所有人穿同一尺寸的鞋。現在有了22個監測點，我們知道北部『瘦』、南部『肥』。精準施肥讓每個區域都得到恰到好處的養分。結果是肥料省了25%，產量和品質都提升了。最驚喜的是南部黏土區——停止施肥反而讓品質大幅提升，從副牌升級到正牌，這€337,500的價值提升完全超出預期。」</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="iot-sensor-value">
            <h4>🎯 物聯網感測器網絡的革命性價值</h4>
            <div class="system-comprehensive-value">
              <p><strong>監測能力革命：</strong><br>
              • 時間維度：從「定期巡檢」到<strong>「24/7連續監測」</strong><br>
              • 空間維度：從「單點代表」到<strong>「網絡化覆蓋」</strong><br>
              • 數據密度：從「每天1次」到<strong>「每5-15分鐘1次」</strong><br>
              • 監測範圍：溫度、濕度、降雨、風速、土壤水分、養分、pH等<strong>10+參數</strong><br><br>
              
              <strong>決策支持提升：</strong><br>
              • <strong>霜凍預警：</strong>提前8-12小時，準確率>95%<br>
              • <strong>病害預警：</strong>提前48-72小時，風險評估精度90%+<br>
              • <strong>灌溉決策：</strong>精準到地塊級，節水30-40%<br>
              • <strong>施肥優化：</strong>變量施肥，節省20-30%，效果提升<br><br>
              
              <strong>經濟效益（典型案例）：</strong><br>
              • <strong>霜凍預警系統：</strong>投資€12,500，單次避免損失€459,000，ROI 37倍<br>
              • <strong>病害預警系統：</strong>年度節省€8,500+避免損失€350,000<br>
              • <strong>土壤水分系統：</strong>投資€28,500，年度收益€270,000，回收期1.3個月<br>
              • <strong>養分監測系統：</strong>投資€35,000，年度收益€493,000，回收期26天<br>
              • <strong>綜合ROI範圍：10-100倍</strong><br><br>
              
              <strong>風險管理：</strong><br>
              • 災害性天氣（霜凍、冰雹）：提前預警，及時應對<br>
              • 病害爆發：早期發現，預防性干預<br>
              • 水分壓力：實時監測，避免產量損失<br>
              • 養分失衡：及時調整，保障品質<br><br>
              
              <strong>環境可持續：</strong><br>
              • 節水：<strong>30-40%</strong><br>
              • 減少肥料：<strong>20-30%</strong><br>
              • 減少農藥：<strong>15-25%</strong>（精準預防）<br>
              • 支持有機/可持續認證<br><br>
              
              <strong>策略定位：</strong><br>
              • 物聯網感測器是精準農業的「神經系統」<br>
              • 與衛星、無人機組成完整的「天-空-地」一體化監測體系<br>
              • 從「看得見」（遙感）到「感受到」（感測器）<br>
              • <strong>這是現代精品酒莊的「標準配置」</strong></p>
            </div>
          </div>
        </div>
      </div>
      -->
    `,
    highlights: [
      {
        id: 1,
        icon: '🌤️',
        title: '霜凍精準預警',
        content: '5個氣象站實時監測，提前12小時預警，零霜凍損失，ROI 37倍'
      },
      {
        id: 2,
        icon: '🌱',
        title: '土壤精準管理',
        content: '72個感測器24/7監測，節水36%，增產6.3%，回收期1.3個月'
      }
    ]
  },

  // 物聯網感測器網絡（二）：數據整合與智能決策
  {
    type: 'content',
    title: '物聯網感測器網絡（二）：數據整合與智能決策',
    content: `<div style="font-family:sans-serif;padding:12px;max-width:900px;margin:0 auto">
  <div style="background:linear-gradient(135deg,#1e1b4b,#312e81);color:#fff;padding:8px 14px;border-radius:6px;font-size:0.85em;font-weight:700;margin-bottom:12px">
    📡 物聯網感測器網絡（二）｜邊緣計算 × 智能決策系統
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
    <div style="background:#f5f3ff;border:1px solid #c4b5fd;border-top:3px solid #7c3aed;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#6d28d9;font-size:0.9em;margin-bottom:8px">⚡ 邊緣計算核心優勢</div>
      <table style="width:100%;border-collapse:collapse;font-size:0.82em">
        <tr style="background:#7c3aed;color:#fff"><th style="padding:4px 8px;text-align:left">優勢</th><th style="padding:4px 8px;text-align:right">效果</th></tr>
        <tr style="background:#fff"><td style="padding:3px 8px">⚡ 快速響應</td><td style="padding:3px 8px;text-align:right;font-weight:700;color:#dc2626">&lt;1秒</td></tr>
        <tr style="background:#faf5ff"><td style="padding:3px 8px">📦 節省帶寬</td><td style="padding:3px 8px;text-align:right;font-weight:700;color:#16a34a">減90%流量</td></tr>
        <tr style="background:#fff"><td style="padding:3px 8px">🔌 離線工作</td><td style="padding:3px 8px;text-align:right;font-weight:700;color:#0284c7">網絡中斷可用</td></tr>
        <tr style="background:#faf5ff"><td style="padding:3px 8px">🚨 即時告警</td><td style="padding:3px 8px;text-align:right;font-weight:700;color:#ea580c">超閾即通知</td></tr>
      </table>
    </div>
    <div style="background:#fff8f0;border:1px solid #fed7aa;border-top:3px solid #ea580c;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#ea580c;font-size:0.9em;margin-bottom:8px">📌 Saint-Émilion 自動灌溉案例</div>
      <div style="font-size:0.82em;color:#374151;line-height:1.7">
        28公頃 ／ <strong>48個感測器</strong>（4層×12點）<br>
        觸發閾值：<strong>含水量 &lt;25%</strong> → 自動灌溉<br>
        響應延遲：<strong style="color:#dc2626">僅15秒</strong>（vs 雲端5–10秒）
      </div>
      <div style="margin-top:8px;background:#fff;border:1px solid #fed7aa;border-radius:4px;padding:6px;font-size:0.82em">
        投資 <strong>€88,550</strong>｜年收益 <strong style="color:#16a34a">€230K–€630K</strong><br>
        <span style="color:#7c3aed;font-weight:700">5年 €950K–€2,850K</span>｜ROI <strong style="color:#dc2626">16倍</strong>
      </div>
    </div>
  </div>
  <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:10px">
    <div style="font-weight:700;color:#475569;font-size:0.88em;margin-bottom:6px">🔄 數據流架構</div>
    <div style="display:grid;grid-template-columns:1fr auto 1fr auto 1fr;gap:4px;align-items:center;font-size:0.82em;text-align:center">
      <div style="background:#dbeafe;border-radius:6px;padding:7px"><strong>感測器筆端</strong><br><span style="color:#6b7280">24/7採集</span></div>
      <div style="color:#94a3b8;font-size:1.2em">→</div>
      <div style="background:#fde8d8;border-radius:6px;padding:7px"><strong>邊緣處理</strong><br><span style="color:#6b7280">本地AI決策</span></div>
      <div style="color:#94a3b8;font-size:1.2em">→</div>
      <div style="background:#dcfce7;border-radius:6px;padding:7px"><strong>雲端整合</strong><br><span style="color:#6b7280">分析＋預警</span></div>
    </div>
  </div>
</div>
      <!--ORIGINAL:
      <div class="chapter-content">
        <div class="iot-data-integration">
          <h3>📡 物聯網數據整合與智能決策系統</h3>
          <p class="intro-text">單個感測器提供的是「點」的數據，而真正的價值在於將數百個感測器的數據整合起來，形成「面」的認知。當氣象、土壤、遙感數據匯聚到雲端平台，AI能從海量數據中發現規律、預測趨勢、提供決策——這就是從「感知」到「認知」，從「監測」到「決策」的跨越。</p>
          
          <div class="edge-computing-system">
            <h4>⚡ 邊緣計算與實時處理</h4>
            <div class="edge-processing">
              <div class="local-intelligence">
                <h5>感測器端智能處理</h5>
                <p>傳統物聯網將所有原始數據上傳雲端，造成帶寬浪費和延遲。現代系統採用「邊緣計算」——在感測器端或本地網關進行初步處理，只上傳關鍵信息和異常數據，實現「快速響應+節省帶寬」。<br><br>
                
                <strong>邊緣計算優勢：</strong><br>
                • <strong>快速響應：</strong>本地處理延遲<1秒（vs雲端5-10秒）<br>
                • <strong>節省帶寬：</strong>數據壓縮率達90%<br>
                • <strong>離線工作：</strong>網絡中斷時仍可本地決策<br>
                • <strong>即時告警：</strong>異常檢測後立即通知<br><br>
                
                <strong>典型處理邏輯：</strong><br>
                • <strong>數據預處理：</strong>濾波、去噪、異常值檢測<br>
                • <strong>特徵提取：</strong>計算平均值、趨勢、變化率<br>
                • <strong>閾值判斷：</strong>超過閾值立即告警<br>
                • <strong>數據壓縮：</strong>只上傳變化顯著的數據</p>
                
                <div class="example-box">
                  <h6>💡 邊緣計算案例：Saint-Émilion的實時灌溉控制系統</h6>
                  <p><strong>系統架構：</strong><br><br>
                  
                  <strong>硬件配置：</strong><br>
                  • 酒莊面積：28公頃<br>
                  • 土壤水分感測器：48個（4層×12點）<br>
                  • 本地邊緣網關：3台（Raspberry Pi 4）<br>
                  • 電磁閥：12個（控制灌溉分區）<br>
                  • 4G網絡連接雲端平台<br><br>
                  
                  <strong>邊緣計算邏輯：</strong><br><br>
                  
                  <em>本地處理（每15分鐘）：</em><br>
                  • 讀取48個感測器數據<br>
                  • 計算每個監測點的平均含水量<br>
                  • 計算過去24小時的變化趨勢<br>
                  • 判斷是否低於灌溉觸發閾值（25%）<br>
                  • <strong>本地決策：需要灌溉 → 自動開啟對應電磁閥</strong><br>
                  • 僅上傳：灌溉決策記錄+異常數據<br><br>
                  
                  <strong>2024年7月22日，實戰案例：</strong><br><br>
                  
                  <strong>上午10:15，邊緣網關檢測：</strong><br>
                  • 監測點#7（南部2.5公頃）30cm深度含水量：<strong>23.5%</strong><br>
                  • 低於閾值（25%）<br>
                  • 過去24小時下降趨勢：-1.8%/天<br>
                  • 天氣預報：未來3天無降雨<br>
                  • <strong>邊緣AI判斷：「需要灌溉」</strong><br><br>
                  
                  <strong>自動響應（10:15:30，僅15秒延遲）：</strong><br>
                  • 邊緣網關自動開啟電磁閥#7<br>
                  • 開始滴灌作業<br>
                  • 同時發送SMS通知酒窖主任：「監測點#7已自動啟動灌溉」<br>
                  • 上傳雲端：灌溉決策記錄<br><br>
                  
                  <strong>灌溉過程實時監測：</strong><br>
                  • 10:15 - 含水量23.5%，開始灌溉<br>
                  • 11:15 - 含水量25.8%<br>
                  • 12:15 - 含水量28.2%<br>
                  • 13:15 - 含水量30.5%<br>
                  • 14:15 - 含水量<strong>32.1%</strong>（達到目標32%）<br>
                  • <strong>邊緣AI判斷：「達標」，自動關閉電磁閥</strong><br>
                  • 灌溉總時長：<strong>4小時</strong><br>
                  • 用水量：<strong>70mm</strong>（175m³）<br><br>
                  
                  <strong>對比：傳統雲端控制系統</strong><br><br>
                  
                  <em>數據傳輸：</em><br>
                  • 邊緣計算：每15分鐘上傳1條決策記錄（<strong>0.5 KB</strong>）<br>
                  • 傳統雲端：每15分鐘上傳48個感測器原始數據（<strong>12 KB</strong>）<br>
                  • 帶寬節省：<strong>95.8%</strong><br><br>
                  
                  <em>響應速度：</em><br>
                  • 邊緣計算：從檢測到開閥<strong>15秒</strong><br>
                  • 傳統雲端：上傳→雲端分析→下發指令，至少<strong>5-10分鐘</strong><br>
                  • 速度提升：<strong>20-40倍</strong><br><br>
                  
                  <em>可靠性：</em><br>
                  • 邊緣計算：網絡中斷時仍可本地決策<br>
                  • 傳統雲端：網絡中斷則無法工作<br><br>
                  
                  <strong>2024年整個夏季（6-8月）統計：</strong><br>
                  • 自動灌溉決策：<strong>87次</strong><br>
                  • 平均響應時間：<strong>18秒</strong><br>
                  • 灌溉精度（達到目標含水量±2%）：<strong>96.5%</strong><br>
                  • 人工干預次數：<strong>2次</strong>（系統建議，人工確認）<br>
                  • 網絡中斷事件：<strong>3次</strong>（邊緣系統持續運行，零影響）<br><br>
                  
                  <strong>經濟效益：</strong><br>
                  • 邊緣網關成本：3台 × €350 = €1,050<br>
                  • vs純雲端方案成本相近<br>
                  • 但帶寬費用：邊緣方案年費<strong>€180</strong>（vs雲端€1,200）<br>
                  • 年度節省：<strong>€1,020</strong><br>
                  • 可靠性提升：無價<br><br>
                  
                  <strong>酒窖主任評價：</strong><br>
                  「邊緣計算最大的價值是『自主決策』。當感測器檢測到需要灌溉時，系統在15秒內就自動開閥——不需要上傳雲端、不需要等待指令、不需要人工確認。3次網絡中斷時，系統仍然正常工作，這讓我完全放心。現在我每天早上只需要查看一下昨晚的自動決策記錄，確認系統運行正常即可。」</p>
                </div>
              </div>
              
              <div class="fault-detection">
                <h5>設備故障自動檢測</h5>
                <p>感測器網絡的可靠性依賴於每個感測器的正常工作。邊緣計算系統能夠實時監測感測器健康狀況，自動檢測異常值、通訊故障、電池低電量等問題，及時通知維護人員。<br><br>
                
                <strong>故障檢測機制：</strong><br>
                • <strong>數據異常：</strong>檢測突變、超界、長時間不變<br>
                • <strong>通訊中斷：</strong>超過3次連續讀取失敗<br>
                • <strong>電池監測：</strong>電壓低於閾值預警<br>
                • <strong>交叉驗證：</strong>相鄰感測器數據對比</p>
                
                <div class="example-box">
                  <h6>💡 故障檢測案例：Margaux的感測器健康管理系統</h6>
                  <p><strong>系統規模：</strong>45公頃，85個感測器（氣象+土壤）<br><br>
                  
                  <strong>2024年6月15日上午9:30，故障檢測：</strong><br><br>
                  
                  <strong>異常事件#1：土壤水分感測器#23</strong><br>
                  • AI檢測：數據突變<br>
                  • 9:00 - 含水量28%（正常）<br>
                  • 9:15 - 含水量<strong>65%</strong>（<strong>異常！</strong>15分鐘暴增37%）<br>
                  • 9:30 - 含水量<strong>67%</strong><br>
                  • 交叉驗證：相鄰感測器#22、#24含水量28-30%（正常）<br>
                  • <strong>AI判斷：「感測器#23疑似故障」</strong><br>
                  • SMS通知技術員：「感測器#23數據異常，請檢查」<br><br>
                  
                  <strong>技術員現場檢查（10:15）：</strong><br>
                  • 發現感測器探頭附近有灌溉水管漏水<br>
                  • 實際土壤含水量：29%（正常）<br>
                  • 但漏水直接接觸探頭，導致誤讀<br>
                  • 修復漏水，重新埋設感測器<br>
                  • 10:45 - 數據恢復正常：28.5%<br><br>
                  
                  <strong>異常事件#2：氣象站#3</strong><br>
                  • AI檢測：溫度數據「凍結」<br>
                  • 6月14日 15:00 - 溫度26.5°C<br>
                  • 6月14日 18:00 - 溫度26.5°C（<strong>3小時不變，異常</strong>）<br>
                  • 6月15日 06:00 - 溫度26.5°C（<strong>15小時不變，嚴重異常</strong>）<br>
                  • 交叉驗證：相鄰站點#2、#4溫度變化正常（15-28°C）<br>
                  • <strong>AI判斷：「氣象站#3溫度感測器故障」</strong><br>
                  • SMS通知：「氣象站#3溫度感測器疑似故障」<br><br>
                  
                  <strong>技術員檢查（11:00）：</strong><br>
                  • 發現溫度感測器連接線鬆脫<br>
                  • 重新連接<br>
                  • 11:15 - 數據恢復：22.8°C（正常）<br><br>
                  
                  <strong>異常事件#3：土壤水分感測器#47</strong><br>
                  • AI檢測：電池電壓低<br>
                  • 正常電壓：3.6V<br>
                  • 當前電壓：<strong>2.8V</strong>（低於3.0V閾值）<br>
                  • 預測：<strong>3天後電池耗盡</strong><br>
                  • SMS通知：「感測器#47電池電壓低，建議3天內更換」<br><br>
                  
                  <strong>預防性維護（6月16日）：</strong><br>
                  • 技術員更換感測器#47電池<br>
                  • 電壓恢復：3.7V<br>
                  • <strong>避免了感測器突然失效</strong><br><br>
                  
                  <strong>2024年全年故障檢測統計：</strong><br>
                  • 檢測到故障事件：<strong>23次</strong><br>
                  • 真故障（確認需要維修）：<strong>19次</strong>（準確率82.6%）<br>
                  • 誤報（實際正常）：4次<br>
                  • 平均檢測時間：<strong>42分鐘</strong>（從故障發生到系統檢測）<br>
                  • 平均修復時間：<strong>2.5小時</strong>（從檢測到修復完成）<br><br>
                  
                  <strong>對比：無自動檢測系統</strong><br>
                  • 依賴定期人工巡檢（每月1次）<br>
                  • 故障發現延遲：平均<strong>15天</strong><br>
                  • 數據缺失期間決策錯誤風險高<br><br>
                  
                  <strong>價值評估：</strong><br>
                  • 案例：感測器#23故障未及時發現<br>
                  • 錯誤數據導致過度灌溉<br>
                  • 可能損失：€5,000-15,000（品質下降）<br>
                  • 自動檢測在45分鐘內發現並通知<br>
                  • <strong>避免錯誤決策</strong><br><br>
                  
                  <strong>維護效率提升：</strong><br>
                  • 傳統：每月巡檢85個感測器，2人×2天<br>
                  • 現在：按需維護，年度19次故障，2人×1天<br>
                  • 人工節省：<strong>75%</strong><br>
                  • 年度節省：<strong>€8,500</strong><br><br>
                  
                  <strong>技術經理評價：</strong><br>
                  「85個感測器就像85個員工——總有人會'生病'。以前我們每月花2天巡檢所有感測器，累死累活還是會漏掉問題。現在系統24小時監控，一發現異常立即通知，我們只需要'按需出診'。19次故障，平均42分鐘就發現，沒有一次導致嚴重後果。這就是主動維護vs被動維護的差別。」</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="cloud-analytics-system">
            <h4>☁️ 雲端大數據分析平台</h4>
            <div class="cloud-platform">
              <div class="multi-source-integration">
                <h5>多源數據整合與關聯分析</h5>
                <p>雲端平台的核心價值是「數據融合」——將衛星遙感、無人機影像、地面感測器、氣象預報、歷史數據整合到統一平台，進行關聯分析，發現單一數據源無法發現的規律。<br><br>
                
                <strong>數據整合架構：</strong><br>
                • <strong>衛星數據：</strong>NDVI、熱紅外、高解析度影像<br>
                • <strong>無人機數據：</strong>多光譜、RGB、3D模型<br>
                • <strong>地面感測器：</strong>氣象、土壤、植株監測<br>
                • <strong>外部數據：</strong>天氣預報、歷史氣候、市場信息<br>
                • <strong>管理記錄：</strong>施肥、灌溉、噴藥、採收記錄</p>
                
                <div class="example-box">
                  <h6>💡 數據融合案例：Pauillac的產量精準預測系統</h6>
                  <p><strong>目標：</strong>在採收前3個月（6月中旬）精準預測9月產量，指導資源規劃。<br><br>
                  
                  <strong>多源數據整合：</strong><br><br>
                  
                  <em>1. 衛星遙感數據（Sentinel-2）：</em><br>
                  • 4-6月NDVI時間序列<br>
                  • 轉色期（8月）NDVI<br>
                  • 植被覆蓋度<br>
                  • 空間變異分析<br><br>
                  
                  <em>2. 無人機監測數據：</em><br>
                  • 6月開花後冠層3D結構<br>
                  • 葉面積指數（LAI）<br>
                  • 果串密度估算<br><br>
                  
                  <em>3. 地面感測器數據：</em><br>
                  • 3-6月氣象數據（溫度、降雨、日照）<br>
                  • 土壤水分狀況<br>
                  • 生長度日（GDD）累積<br><br>
                  
                  <em>4. 歷史數據：</em><br>
                  • 過去15年產量記錄<br>
                  • 對應年份的NDVI、氣象數據<br>
                  • 建立預測模型<br><br>
                  
                  <strong>AI預測模型（隨機森林算法）：</strong><br><br>
                  
                  <strong>輸入特徵（35個）：</strong><br>
                  • 6月15日NDVI值<br>
                  • 4-6月NDVI增長率<br>
                  • 開花期LAI<br>
                  • 3-6月累積降雨量<br>
                  • 3-6月平均溫度<br>
                  • GDD累積值<br>
                  • 土壤平均含水量<br>
                  • ...(其他28個特徵)<br><br>
                  
                  <strong>2024年6月15日預測結果：</strong><br><br>
                  
                  <strong>整體預測：</strong><br>
                  • 總產量：<strong>352,500 kg</strong><br>
                  • 置信區間：338,000-367,000 kg（95%信心水準）<br>
                  • 單產：38公頃 × 9,276 kg/ha<br>
                  • vs 2023年實際：348,200 kg<br>
                  • 預測：<strong>持平略增（+1.2%）</strong><br><br>
                  
                  <strong>分地塊預測：</strong><br>
                  • 北部高地（12公頃）：112,800 kg（9,400 kg/ha）<br>
                  • 中部平地（18公頃）：168,300 kg（9,350 kg/ha）<br>
                  • 南部坡地（8公頃）：71,400 kg（8,925 kg/ha）<br><br>
                  
                  <strong>AI分析報告：</strong><br>
                  「2024年春季條件整體良好。4-6月NDVI增長正常，開花期LAI略高於平均（+5.8%），顯示坐果率良好。降雨適中，無明顯水分壓力。預測產量352,500 kg，誤差範圍±4.1%。<br><br>
                  
                  <strong>風險提示：</strong><br>
                  • 7-8月如遭遇乾旱，產量可能下修8-12%<br>
                  • 8月如遭遇冰雹，局部損失風險<br>
                  • 建議持續監測，8月中旬更新預測」<br><br>
                  
                  <strong>基於預測的資源規劃（6月20日）：</strong><br><br>
                  
                  <em>採收人力：</em><br>
                  • 預測產量：352,500 kg<br>
                  • 預計採收時間：8-10天<br>
                  • 所需人力：15人 × 8天<br>
                  • <strong>6月提前預訂採收工人</strong><br>
                  • 單價：€120/天（vs 9月臨時工€180/天）<br>
                  • 節省：15人×8天×€60 = <strong>€7,200</strong><br><br>
                  
                  <em>釀造設施：</em><br>
                  • 預計需要發酵罐容量：390,000 L（留10%緩衝）<br>
                  • 現有容量：360,000 L<br>
                  • 需要租賃：30,000 L<br>
                  • <strong>7月提前預訂租賃罐</strong><br>
                  • 避免9月市場緊張時的高價和缺罐<br><br>
                  
                  <em>橡木桶：</em><br>
                  • 預計需要新桶：280個（30%更新率）<br>
                  • <strong>7月下訂單</strong><br>
                  • 享有5%早鳥折扣：280桶×€850×5% = <strong>€11,900</strong><br><br>
                  
                  <strong>8月20日更新預測：</strong><br>
                  • 結合8月實際氣象數據和轉色期NDVI<br>
                  • 更新預測：<strong>348,200 kg</strong><br>
                  • 微調：-1.2%（7-8月略乾旱）<br>
                  • 人力、設施規劃微調<br><br>
                  
                  <strong>9月20-28日實際採收結果：</strong><br>
                  • 實際產量：<strong>345,800 kg</strong><br>
                  • vs 6月15日預測：352,500 kg<br>
                  • 預測誤差：<strong>-1.9%</strong><br>
                  • vs 8月20日更新預測：348,200 kg<br>
                  • 更新預測誤差：<strong>-0.7%</strong><br>
                  • <strong>預測準確度：98%+</strong><br><br>
                  
                  <strong>對比：傳統經驗預測</strong><br><br>
                  
                  <em>鄰近酒莊A（經驗預測）：</em><br>
                  • 6月預測產量：380,000 kg（<strong>高估15%</strong>）<br>
                  • 原因：僅基於葉片生長目測<br>
                  • 後果：<br>
                  &nbsp;&nbsp;- 預訂20人採收隊（多5人）<br>
                  &nbsp;&nbsp;- 租賃50,000 L發酵罐（多20,000 L）<br>
                  &nbsp;&nbsp;- 訂購350個新桶（多70個）<br>
                  • 實際產量：342,000 kg<br>
                  • 浪費成本：多餘人工€9,600，多餘租罐€8,000，多訂桶€59,500<br>
                  • <strong>總浪費：€77,100</strong><br><br>
                  
                  <em>鄰近酒莊B（保守預測）：</em><br>
                  • 6月預測產量：320,000 kg（<strong>低估7%</strong>）<br>
                  • 原因：擔心乾旱<br>
                  • 後果：<br>
                  &nbsp;&nbsp;- 9月發現產量超預期<br>
                  &nbsp;&nbsp;- 緊急增調人力（臨時工貴50%）<br>
                  &nbsp;&nbsp;- 緊急租罐（市場緊張，價格高30%）<br>
                  • 額外成本：<strong>€18,500</strong><br>
                  • 部分葡萄延遲處理，影響品質<br><br>
                  
                  <strong>Pauillac酒莊效益總結：</strong><br><br>
                  
                  <em>直接成本節省：</em><br>
                  • 提前預訂人力：€7,200<br>
                  • 提前預訂橡木桶折扣：€11,900<br>
                  • 避免過度準備浪費：€20,000+<br>
                  • 避免準備不足緊急採購：€15,000+<br>
                  • <strong>合計：€54,100</strong><br><br>
                  
                  <em>品質保障：</em><br>
                  • 準確預測確保及時處理所有葡萄<br>
                  • 避免延遲處理導致的品質損失<br>
                  • 價值：難以量化但關鍵<br><br>
                  
                  <em>系統成本：</em><br>
                  • 雲端平台年費：€12,000<br>
                  • AI模型開發（首年）：€25,000<br>
                  • 首年投資：€37,000<br>
                  • <strong>首年ROI：1.5倍</strong><br>
                  • 次年起年費僅€12,000，<strong>ROI 4.5倍</strong><br><br>
                  
                  <strong>酒莊總經理評價：</strong><br>
                  「產量預測的價值不僅是『知道數字』，更是『提前規劃』。6月15日的預測給了我們3個月準備時間——提前預訂人力、設施、橡木桶，不僅節省成本，更確保採收期萬無一失。-1.9%的預測誤差意味著我們的規劃幾乎完美。這€37,000投資帶來的，不僅是€54,100的直接節省，更是3個月的『心中有數』和『從容不迫』。」</p>
                </div>
              </div>
              
              <div class="predictive-modeling">
                <h5>機器學習預測建模</h5>
                <p>雲端平台利用歷史數據訓練機器學習模型，不僅預測產量，還能預測病害風險、品質潛力、最佳採收時機等，實現從「經驗決策」到「數據驅動」的轉變。<br><br>
                
                <strong>典型預測模型：</strong><br>
                • <strong>產量預測：</strong>提前3-6個月預測產量<br>
                • <strong>病害風險：</strong>提前2-7天預測發病概率<br>
                • <strong>品質預測：</strong>預測最終酒款評分<br>
                • <strong>採收窗口：</strong>預測最佳採收日期<br>
                • <strong>價格預測：</strong>預測期酒市場價格</p>
                
                <div class="example-box">
                  <h6>💡 預測建模案例：Graves的霜黴病7天預警系統</h6>
                  <p><strong>挑戰：</strong>霜黴病是波爾多葡萄種植的頭號威脅，傳統預警僅提前24-48小時，來不及充分準備。<br><br>
                  
                  <strong>2024年開發7天預警模型：</strong><br><br>
                  
                  <strong>訓練數據（10年歷史）：</strong><br>
                  • 霜黴病發生記錄：68次事件<br>
                  • 每次事件的發病前10天氣象數據<br>
                  • 特徵：溫度、濕度、降雨、葉面濕度、風速等<strong>25個參數</strong><br>
                  • 機器學習算法：XGBoost<br><br>
                  
                  <strong>模型邏輯：</strong><br>
                  • 每天根據當前氣象數據+未來7天天氣預報<br>
                  • 計算未來7天每天的霜黴病發生概率<br>
                  • 概率>70%發出預警<br><br>
                  
                  <strong>2024年6月3日，典型預警案例：</strong><br><br>
                  
                  <strong>6月3日上午9:00，AI分析：</strong><br>
                  • 輸入：當前氣象狀況+未來7天預報<br>
                  • 天氣預報：6月5-7日連續降雨，累積60-80mm<br>
                  • 溫度：20-24°C（霜黴病最適溫度）<br>
                  • 預測葉面濕度：連續>10小時/天<br><br>
                  
                  <strong>AI預警輸出：</strong><br>
                  • 6月4日：風險5%<br>
                  • 6月5日：風險15%<br>
                  • 6月6日：風險45%<br>
                  • 6月7日：風險<strong>78%</strong>（<strong>高風險！</strong>）<br>
                  • 6月8日：風險<strong>85%</strong>（<strong>極高風險！</strong>）<br>
                  • 6月9日：風險<strong>82%</strong><br>
                  • 6月10日：風險60%<br><br>
                  
                  <strong>預警通知（6月3日上午9:30）：</strong><br>
                  • SMS+App推送給酒窖主任和技術團隊<br>
                  • 「<strong>霜黴病7天預警：</strong>6月7-9日高風險（78-85%），建議6月6日晚進行預防性噴藥」<br><br>
                  
                  <strong>決策時間表：</strong><br><br>
                  
                  <em>6月3日（D+4預警）：</em><br>
                  • 團隊會議，討論應對方案<br>
                  • 決定：6月6日晚預防性噴藥<br>
                  • 優勢：<strong>3天準備時間</strong><br><br>
                  
                  <em>6月4日：</em><br>
                  • 訂購農藥（銅製劑+有機殺菌劑）<br>
                  • 確認噴藥設備<br>
                  • 通知噴藥團隊<br><br>
                  
                  <em>6月5日：</em><br>
                  • 農藥到貨<br>
                  • 設備檢查<br>
                  • 團隊待命<br><br>
                  
                  <em>6月6日晚上8:00-11:00：</em><br>
                  • 降雨前夕，葉片乾燥<br>
                  • <strong>實施預防性噴藥</strong><br>
                  • 35公頃全覆蓋<br><br>
                  
                  <em>6月7-9日：</em><br>
                  • 如預測，連續降雨<br>
                  • 累積降雨：72mm<br>
                  • 溫度：21-23°C<br>
                  • <strong>預測完全準確</strong><br><br>
                  
                  <strong>6月15日實地檢查：</strong><br>
                  • 全園巡檢，檢查霜黴病感染<br>
                  • 發現：<strong>零感染</strong><br>
                  • <strong>預防成功率：100%</strong><br><br>
                  
                  <strong>對比：傳統24-48小時預警</strong><br><br>
                  
                  <em>鄰近酒莊（傳統預警）：</em><br>
                  • 6月7日上午才收到預警（降雨已開始）<br>
                  • 問題：<br>
                  &nbsp;&nbsp;- 農藥庫存不足，緊急採購<br>
                  &nbsp;&nbsp;- 降雨中無法噴藥<br>
                  &nbsp;&nbsp;- 等到6月10日雨停才噴藥<br>
                  • 結果：<strong>已經感染</strong><br>
                  • 感染面積：12公頃（35%）<br>
                  • 需要3次治療性噴藥<br>
                  • 產量損失：10-15%<br>
                  • 經濟損失：<strong>€85,000-€120,000</strong><br><br>
                  
                  <strong>7天預警的關鍵優勢：</strong><br>
                  • <strong>充足準備時間：</strong>3天vs幾小時<br>
                  • <strong>最佳時機：</strong>降雨前夕vs降雨後<br>
                  • <strong>預防vs治療：</strong>成本€2,800 vs €8,500<br>
                  • <strong>效果：</strong>零感染 vs 35%感染<br><br>
                  
                  <strong>2024年全季表現：</strong><br>
                  • 7天預警次數：<strong>8次</strong><br>
                  • 實際高風險（>70%）：<strong>6次</strong><br>
                  • 實施預防：6次<br>
                  • 預防成功（零或極低感染）：<strong>6次</strong><br>
                  • 假陽性（預警但未發病）：2次<br>
                  • <strong>準確率：75%</strong><br>
                  • <strong>有效率：100%</strong>（所有高風險都被預防）<br><br>
                  
                  <strong>經濟效益：</strong><br>
                  • 預防成本：6次 × €2,800 = €16,800<br>
                  • vs傳統治療成本：€8,500 × 3次/年 = €25,500<br>
                  • 節省藥劑成本：<strong>€8,700</strong><br>
                  • 避免產量損失：10-15% × 35ha × 7,800kg/ha × €14/kg = <strong>€378,000-€567,000</strong><br>
                  • 模型開發成本（首年）：€35,000<br>
                  • <strong>首年ROI：11-16倍</strong><br>
                  • 次年起運營成本僅€3,000/年，<strong>ROI達100+倍</strong><br><br>
                  
                  <strong>酒莊植保經理評價：</strong><br>
                  「7天預警改變了遊戲規則。以前我們總是在『與時間賽跑』——收到預警後緊急採購農藥、冒雨噴藥，經常來不及。現在有3天準備時間，我們可以從容採購、選擇最佳時機噴藥。6月6日那次，我們在降雨前夕噴藥，藥劑完美附著，第二天開始降雨也不影響效果。結果是零感染。這就是『預防』和『治療』的差別——不僅成本低，效果還更好。」</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="iot-comprehensive-value">
            <h4>🎯 物聯網整合系統的終極價值</h4>
            <div class="ultimate-value-proposition">
              <p><strong>從「感知」到「認知」的跨越：</strong><br>
              • <strong>單點監測：</strong>感測器提供「點」的數據<br>
              • <strong>網絡監測：</strong>感測器網絡形成「面」的覆蓋<br>
              • <strong>數據融合：</strong>多源數據整合形成「體」的認知<br>
              • <strong>智能決策：</strong>AI分析預測實現「智」的躍升<br><br>
              
              <strong>完整技術棧：</strong><br>
              • <strong>感知層：</strong>氣象站、土壤感測器、植株監測<br>
              • <strong>傳輸層：</strong>LoRaWAN/4G網絡、邊緣計算網關<br>
              • <strong>平台層：</strong>雲端數據庫、實時處理引擎<br>
              • <strong>應用層：</strong>預警系統、決策支持、自動控制<br>
              • <strong>智能層：</strong>機器學習模型、AI優化算法<br><br>
              
              <strong>典型投資與回報（50公頃酒莊）：</strong><br><br>
              
              <em>系統投資：</em><br>
              • 氣象站：5個 × €2,500 = €12,500<br>
              • 土壤感測器：60個 × €450 = €27,000<br>
              • 邊緣網關：3個 × €350 = €1,050<br>
              • 通訊設備：€3,000<br>
              • 雲端平台（首年）：€15,000<br>
              • AI模型開發：€30,000<br>
              • <strong>總投資：€88,550</strong><br><br>
              
              <em>年度運營成本（次年起）：</em><br>
              • 雲端平台：€12,000<br>
              • 通訊費用：€1,800<br>
              • 維護費用：€3,500<br>
              • <strong>年運營：€17,300</strong><br><br>
              
              <em>年度收益：</em><br>
              • 霜凍預警避免損失：€150,000-€500,000（每3年1次）<br>
              • 病害預防節省：€50,000-€100,000/年<br>
              • 精準灌溉節約+增產：€100,000-€300,000/年<br>
              • 精準施肥優化：€50,000-€150,000/年<br>
              • 產量預測規劃價值：€30,000-€80,000/年<br>
              • <strong>年度總收益：€230,000-€630,000</strong><br><br>
              
              <strong>投資回收：</strong><br>
              • 首年ROI：<strong>2.6-7.1倍</strong><br>
              • 投資回收期：<strong>2-5個月</strong><br>
              • 5年NPV：<strong>€950,000-€2,850,000</strong><br><br>
              
              <strong>無形價值：</strong><br>
              • <strong>風險管理：</strong>重大災害損失大幅降低<br>
              • <strong>品質穩定：</strong>年份間品質波動減小<br>
              • <strong>環境友好：</strong>水、肥、藥減少20-40%<br>
              • <strong>認證支持：</strong>有機、HVE、可持續認證<br>
              • <strong>品牌價值：</strong>科技酒莊形象提升<br>
              • <strong>競爭優勢：</strong>數據驅動的精準管理<br><br>
              
              <strong>未來趨勢：</strong><br>
              • <strong>5G網絡：</strong>更快、更可靠的連接<br>
              • <strong>AI邊緣：</strong>更強大的本地智能<br>
              • <strong>數位孿生：</strong>虛擬葡萄園實時映射<br>
              • <strong>自主決策：</strong>完全自動化管理<br>
              • <strong>區塊鏈：</strong>數據溯源和品質證明<br><br>
              
              <strong>最終結論：</strong><br>
              物聯網+大數據+AI不是「錦上添花」，而是現代精品酒莊的「必備基礎設施」。<br>
              這不僅是技術革命，更是管理哲學的轉變——從「經驗主義」到「數據驅動」，從「粗放管理」到「精準照護」，從「被動應對」到「主動預防」。<br><br>
              
              <strong>投資€88,550，年收益€230,000-€630,000，5年創造價值€950,000-€2,850,000。</strong><br>
              <strong>這是波爾多精品酒莊進入「智能時代」的入場券。</strong></p>
            </div>
          </div>
        </div>
      </div>
      -->
    `,
    highlights: [
      {
        id: 1,
        icon: '⚡',
        title: '邊緣智能決策',
        content: '15秒自動響應灌溉需求，3次網絡中斷零影響，可靠性100%'
      },
      {
        id: 2,
        icon: '☁️',
        title: '7天病害預警',
        content: '提前7天預測霜黴病，準確率75%，避免損失€567,000，ROI 16倍'
      }
    ]
  },

  // 物聯網感測器網絡（二）：數據整合與智能決策
  {
    type: 'content',
    title: '物聯網感測器網絡（二）：數據整合與智能決策',
    content: `<div style="font-family:sans-serif;padding:12px;max-width:900px;margin:0 auto">
  <div style="background:linear-gradient(135deg,#14532d,#166534);color:#fff;padding:8px 14px;border-radius:6px;font-size:0.85em;font-weight:700;margin-bottom:12px">
    🌐 物聯網 × 全自動化系統整合案例
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
    <div style="background:#f0fdf4;border:1px solid #86efac;border-top:3px solid #16a34a;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#15803d;font-size:0.9em;margin-bottom:8px">📌 Haut-Médoc 智能灌溉系統</div>
      <div style="font-size:0.82em;color:#374151;line-height:1.7">
        <strong>規模：</strong>68公頃 / 12個獨立灌溉區<br>
        <strong>感測器：</strong>36個土壤水分感測器<br>
        <strong>邊緣網關：</strong>12台（AI模型本地決策）<br>
        <strong>決策頻率：</strong><span style="color:#dc2626;font-weight:700">每秒1次</span>
      </div>
      <div style="margin-top:8px;background:#dcfce7;border-radius:4px;padding:6px;font-size:0.82em">
        💧 <strong>&lt;24%</strong> → 自動開啟｜<strong>&gt;32%</strong> → 自動關閉<br>
        節水 <strong style="color:#16a34a">12.4%</strong>｜避免損失 <strong style="color:#dc2626">€25,000</strong>
      </div>
    </div>
    <div style="background:#fff8f0;border:1px solid #fed7aa;border-top:3px solid #f59e0b;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#b45309;font-size:0.9em;margin-bottom:8px">🌍 天–空–地一體化監測</div>
      <div style="font-size:0.83em;color:#374151;line-height:1.6">
        <div style="padding:4px 0;border-bottom:1px solid #fde8d8">🛰️ <strong style="color:#0284c7">衛星</strong> — NDVI 熱紅外廣域監測</div>
        <div style="padding:4px 0;border-bottom:1px solid #fde8d8">🚁 <strong style="color:#7c3aed">無人機</strong> — 高解析度緊急評估</div>
        <div style="padding:4px 0">🌡️ <strong style="color:#16a34a">IoT感測器</strong> — 即時氣象土壤自動決策</div>
      </div>
      <div style="margin-top:8px;background:#fff;border:1px solid #fed7aa;border-radius:4px;padding:6px;font-size:0.82em;text-align:center">
        💡 三層整合 → <strong>數據驅動精準農業</strong><br>從「看天吃飯」到「以數治園」
      </div>
    </div>
  </div>
  <div style="background:#fef9c3;border:1px solid #fde047;border-radius:8px;padding:10px">
    <div style="font-weight:700;color:#854d0e;font-size:0.88em;margin-bottom:6px">💰 精準農業整體投資回報</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;font-size:0.82em;text-align:center">
      <div style="background:#fff;border:1px solid #fde047;border-radius:6px;padding:7px"><div style="font-weight:700;color:#0284c7">衛星遙感</div><div style="color:#16a34a;font-weight:700">ROI 42–44倍</div></div>
      <div style="background:#fff;border:1px solid #fde047;border-radius:6px;padding:7px"><div style="font-weight:700;color:#7c3aed">無人機作業</div><div style="color:#16a34a;font-weight:700">ROI 185倍</div></div>
      <div style="background:#fff;border:1px solid #fde047;border-radius:6px;padding:7px"><div style="font-weight:700;color:#15803d">物聯網系統</div><div style="color:#16a34a;font-weight:700">ROI 16–37倍</div></div>
    </div>
  </div>
</div>
      <!--ORIGINAL:
      <div class="chapter-content">
        <div class="iot-data-integration">
          <h3>📡 物聯網數據整合與智能決策系統</h3>
          <p class="intro-text">數以百計的感測器每天產生數萬筆數據——這些數據本身沒有價值，真正的價值在於「整合」與「智能分析」。當氣象數據、土壤數據、衛星影像、無人機監測融合在一起，通過AI模型分析，就能產生超越單一數據源的洞察——這就是「1+1>2」的協同效應。這個章節探討如何將分散的數據整合成統一的智能決策系統。</p>
          
          <div class="edge-computing-system">
            <h4>⚡ 邊緣計算與即時數據處理</h4>
            <div class="edge-processing">
              <div class="local-processing">
                <h5>邊緣智能：在源頭處理數據</h5>
                <p>傳統物聯網將所有數據傳到雲端處理，但這存在延遲、帶寬、成本問題。邊緣計算將AI模型部署到感測器端或本地網關，在數據產生的「邊緣」就完成初步處理和分析，只將關鍵信息上傳雲端。<br><br>
                
                <strong>邊緣計算優勢：</strong><br>
                • <strong>低延遲：</strong>毫秒級響應（vs雲端秒級）<br>
                • <strong>省帶寬：</strong>只傳關鍵數據，減少90%+流量<br>
                • <strong>高可靠：</strong>網絡中斷時仍可本地運行<br>
                • <strong>隱私保護：</strong>敏感數據不離開本地<br>
                • <strong>低成本：</strong>減少雲端計算和存儲費用</p>
                
                <div class="example-box">
                  <h6>💡 邊緣計算案例：Haut-Médoc的智能灌溉閘門系統</h6>
                  <p><strong>挑戰：</strong>68公頃葡萄園，12個獨立灌溉區，需要根據實時土壤水分自動控制灌溉閘門。雲端處理延遲2-5秒，可能導致過度灌溉。<br><br>
                  
                  <strong>2024年部署邊緣智能系統：</strong><br><br>
                  
                  <strong>系統架構：</strong><br>
                  • 土壤水分感測器：36個（每1.9公頃3個）<br>
                  • 邊緣計算網關：12個（每個灌溉區1個）<br>
                  • 電動閘門：12個<br>
                  • 網關配置：樹莓派4B + AI模型<br>
                  • 本地決策頻率：<strong>每秒1次</strong><br>
                  • 系統成本：€18,500<br><br>
                  
                  <strong>邊緣AI決策邏輯（部署在網關）：</strong><br>
                  • 每秒讀取3個感測器數據<br>
                  • 計算平均土壤水分<br>
                  • 判斷是否需要灌溉<br>
                  • 決策閾值：<br>
                  &nbsp;&nbsp;- 水分<24%：<strong>開啟閘門</strong><br>
                  &nbsp;&nbsp;- 水分>32%：<strong>關閉閘門</strong><br>
                  &nbsp;&nbsp;- 24-32%：<strong>維持當前狀態</strong><br>
                  • <strong>決策延遲：<50毫秒</strong><br><br>
                  
                  <strong>7月20日典型灌溉場景：</strong><br><br>
                  
                  <strong>04:00 - 灌溉開始：</strong><br>
                  • 12個區域土壤水分：21-23%<br>
                  • 所有邊緣網關決策：開啟閘門<br>
                  • 灌溉開始<br><br>
                  
                  <strong>06:15 - 區域3率先達標：</strong><br>
                  • 區域3（5.2公頃）土壤水分：32.1%<br>
                  • 邊緣網關立即決策：<strong>關閉閘門</strong><br>
                  • 響應時間：<strong>0.03秒</strong><br>
                  • 其他11個區域繼續灌溉<br><br>
                  
                  <strong>06:20-07:45 - 陸續達標：</strong><br>
                  • 區域1達標（32.3%）→關閉（06:20）<br>
                  • 區域5達標（32.0%）→關閉（06:35）<br>
                  • 區域9達標（32.2%）→關閉（06:52）<br>
                  • ...<br>
                  • 區域11最後達標（32.1%）→關閉（07:45）<br><br>
                  
                  <strong>對比：雲端處理方案（鄰近酒莊）：</strong><br><br>
                  
                  <em>延遲問題：</em><br>
                  • 數據上傳→雲端處理→決策下達：<strong>2-5秒延遲</strong><br>
                  • 區域3達標時（06:15:00），雲端決策下達時間06:15:03<br>
                  • 這3秒內繼續灌溉：流量5 L/s × 3s = 15L<br>
                  • 水分超標：32.1% → 32.8%（<strong>過度灌溉7%</strong>）<br><br>
                  
                  <em>網絡故障風險：</em><br>
                  • 2024年8月2日，區域網絡中斷2小時<br>
                  • 雲端方案：無法決策，<strong>灌溉失控</strong><br>
                  • 邊緣方案：<strong>本地繼續運行</strong>，零影響<br><br>
                  
                  <strong>2024年夏季完整統計（6-8月）：</strong><br><br>
                  
                  <em>邊緣智能系統（Haut-Médoc）：</em><br>
                  • 灌溉次數：87次<br>
                  • 總用水量：5,240噸<br>
                  • 過度灌溉次數：<strong>0次</strong><br>
                  • 平均響應時間：<strong>0.04秒</strong><br>
                  • 網絡中斷影響：<strong>0次</strong>（本地運行）<br><br>
                  
                  <em>雲端處理方案（鄰近酒莊，類似規模）：</em><br>
                  • 灌溉次數：85次<br>
                  • 總用水量：5,980噸<br>
                  • 過度灌溉次數：<strong>37次</strong>（43.5%）<br>
                  • 平均響應時間：<strong>3.2秒</strong><br>
                  • 網絡中斷影響：<strong>2次</strong>（灌溉失控）<br><br>
                  
                  <strong>效益對比：</strong><br>
                  • 節水：5,980 - 5,240 = <strong>740噸（12.4%）</strong><br>
                  • 水費節省：740噸 × €1.2 = €888<br>
                  • 電費節省：740噸 × €0.15 = €111<br>
                  • 避免過度灌溉導致的品質問題：<br>
                  &nbsp;&nbsp;- 過度灌溉會導致果實稀釋、成熟度下降<br>
                  &nbsp;&nbsp;- 預估品質提升價值：<strong>€25,000</strong><br>
                  • 年度總收益：<strong>€25,999</strong><br><br>
                  
                  <strong>系統ROI：</strong><br>
                  • 投資：€18,500（vs雲端方案€15,000，僅多€3,500）<br>
                  • 年度收益：€25,999<br>
                  • 投資回收期：<strong>3.2個月</strong><br>
                  • <strong>年度ROI：1.4倍</strong>（純增量收益，相對雲端方案）<br><br>
                  
                  <strong>技術總監評價：</strong><br>
                  「邊緣計算不是為了炫技，而是為了解決實際問題。灌溉閘門控制需要毫秒級響應——3秒延遲就意味著15升浪費，一年累積就是740噸。更重要的是可靠性：網絡中斷時，邊緣系統照常運行。這€3,500的額外投資，帶來的是12.4%的節水和零故障風險。」</p>
                </div>
              </div>
              
              <div class="anomaly-detection">
                <h5>異常檢測與自動警報</h5>
                <p>數以百計的感測器7×24小時運行，不可能有人盯著所有數據。邊緣AI可以在本地持續分析數據流，自動識別異常模式，並立即發出警報——這是「永不疲勞的哨兵」。<br><br>
                
                <strong>異常檢測類型：</strong><br>
                • <strong>設備故障：</strong>感測器讀數突變或失聯<br>
                • <strong>環境突變：</strong>溫度驟降、濕度驟增<br>
                • <strong>漸進異常：</strong>土壤水分持續下降<br>
                • <strong>模式異常：</strong>與歷史模式偏離</p>
                
                <div class="example-box">
                  <h6>💡 異常檢測案例：Pessac-Léognan的管路洩漏早期發現</h6>
                  <p><strong>2024年7月3日凌晨，邊緣AI異常警報：</strong><br><br>
                  
                  <strong>02:35 AM，系統自動檢測：</strong><br>
                  • 地塊D-8的3個土壤水分感測器異常<br>
                  • 感測器#18：水分從28%驟升至<strong>41%</strong>（13%/30分鐘）<br>
                  • 感測器#19：水分從27%升至<strong>38%</strong><br>
                  • 感測器#20：水分從29%升至<strong>35%</strong><br>
                  • <strong>AI判斷：「異常模式，疑似管路洩漏」</strong><br>
                  • 立即發送SMS警報給酒窖主任和維護技師<br><br>
                  
                  <strong>02:50 AM，技師到達現場：</strong><br>
                  • 定位：感測器#18附近<br>
                  • 發現：地下滴灌主管破裂，水流湧出<br>
                  • 原因：管路老化+壓力過大<br>
                  • 破口大小：約3公分<br>
                  • 流量估算：<strong>每分鐘15升</strong><br><br>
                  
                  <strong>02:55 AM，緊急關閉該區閥門：</strong><br>
                  • 洩漏持續時間：<strong>35分鐘</strong>（02:20發生→02:55關閉）<br>
                  • 洩漏水量：15 L/min × 35 min = <strong>525升</strong><br><br>
                  
                  <strong>07:00 AM，完成緊急修復：</strong><br>
                  • 更換破損管段<br>
                  • 測試無洩漏<br>
                  • 恢復供水<br><br>
                  
                  <strong>對比：若無異常檢測系統</strong><br><br>
                  
                  <em>發現時間：</em><br>
                  • 例行巡檢時間：每週二上午9:00<br>
                  • 洩漏發生：週四凌晨02:20<br>
                  • 最快發現：<strong>5天後</strong>（下週二09:00）<br><br>
                  
                  <em>持續洩漏損失：</em><br>
                  • 洩漏持續時間：5天 = 7,200分鐘<br>
                  • 洩漏水量：15 L/min × 7,200 min = <strong>108,000升（108噸）</strong><br>
                  • 水費：108噸 × €1.2 = <strong>€129.6</strong><br>
                  • 電費：108噸 × €0.15 = <strong>€16.2</strong><br><br>
                  
                  <em>次生災害：</em><br>
                  • 洩漏區域土壤過度飽和<br>
                  • 根系缺氧，可能導致根部病害<br>
                  • 影響面積：約0.8公頃（感測器#18周邊）<br>
                  • 產量損失預估：0.8公頃 × 7,000 kg/ha × 15% = 840 kg<br>
                  • 經濟損失：840 kg × €16/kg = <strong>€13,440</strong><br><br>
                  
                  <strong>實際結果（早期發現）：</strong><br>
                  • 洩漏水量：525升（<strong>僅為無檢測的0.5%</strong>）<br>
                  • 水電費損失：€0.8<br>
                  • 次生災害：<strong>零</strong>（及時阻止）<br>
                  • 總損失：<strong>€0.8</strong>（幾乎可忽略）<br><br>
                  
                  <strong>避免損失價值：</strong><br>
                  • 水電費：€145.8<br>
                  • 次生災害：€13,440<br>
                  • 合計：<strong>€13,585.8</strong><br><br>
                  
                  <strong>2024年全年異常檢測記錄：</strong><br>
                  • 管路洩漏：<strong>3次</strong>（平均發現時間28分鐘）<br>
                  • 感測器故障：<strong>7次</strong>（平均發現時間12分鐘）<br>
                  • 閥門卡死：<strong>2次</strong>（灌溉無法關閉，5分鐘內發現）<br>
                  • 溫度驟降（霜凍風險）：<strong>4次</strong><br>
                  • 累計避免損失：<strong>€47,000+</strong><br><br>
                  
                  <strong>酒莊維護經理評價：</strong><br>
                  「邊緣AI異常檢測就像一個永不睡覺的看門人。凌晨2:35的管路洩漏，如果等到下週二巡檢才發現，108噸水就白白流掉了，更糟的是可能造成€13,000的根系損害。35分鐘vs5天，這就是AI的價值——它不會疲勞、不會遺漏、不會延遲。」</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="cloud-analytics-platform">
            <h4>☁️ 雲端大數據分析平台</h4>
            <div class="cloud-computing">
              <div class="big-data-processing">
                <h5>海量數據處理與挖掘</h5>
                <p>邊緣計算處理實時決策，雲端則負責長期數據存儲、大規模分析、跨年度比對。一個中型酒莊的物聯網系統每年產生<strong>數億筆</strong>數據——這些數據是寶貴的資產，通過大數據挖掘可以發現隱藏的規律和洞察。<br><br>
                
                <strong>雲端分析能力：</strong><br>
                • <strong>歷史數據分析：</strong>5-10年數據對比<br>
                • <strong>模式識別：</strong>機器學習發現規律<br>
                • <strong>預測建模：</strong>產量、品質、病害預測<br>
                • <strong>優化建議：</strong>最優管理策略推薦</p>
                
                <div class="example-box">
                  <h6>💡 大數據分析案例：Saint-Émilion的7年氣象-產量關聯分析</h6>
                  <p><strong>數據資產：</strong>2018-2024年7年完整物聯網數據。<br><br>
                  
                  <strong>數據規模：</strong><br>
                  • 氣象數據：5個站點 × 7年 × 365天 × 144次/天（10分鐘一次）= <strong>1,837萬筆</strong><br>
                  • 土壤數據：18個點 × 7年 × 365天 × 96次/天（15分鐘一次）= <strong>4,410萬筆</strong><br>
                  • 總數據量：<strong>6,247萬筆</strong><br><br>
                  
                  <strong>2024年12月，AI大數據分析項目：</strong><br><br>
                  
                  <strong>研究問題：</strong>哪些氣象和土壤因子對產量和品質影響最大？<br><br>
                  
                  <strong>AI分析方法：</strong><br>
                  • 算法：隨機森林回歸 + XGBoost<br>
                  • 輸入變量：<strong>89個</strong>特徵（溫度、濕度、降雨、土壤水分、pH、EC等及其衍生指標）<br>
                  • 輸出變量：產量（kg/ha）、品質評分（0-100）<br>
                  • 訓練數據：2018-2023年（6年）<br>
                  • 驗證數據：2024年<br><br>
                  
                  <strong>AI發現的關鍵規律：</strong><br><br>
                  
                  <strong>發現1：開花期降雨是產量的第一殺手</strong><br>
                  • 開花期（5月20日-6月5日）累積降雨量與產量呈<strong>強負相關</strong>（R² = -0.82）<br>
                  • 降雨<30mm：產量7,500-8,200 kg/ha<br>
                  • 降雨30-60mm：產量6,800-7,400 kg/ha（<strong>-12%</strong>）<br>
                  • 降雨>60mm：產量5,500-6,500 kg/ha（<strong>-25%</strong>）<br>
                  • <strong>洞察：開花期降雨影響坐果率，直接決定產量</strong><br><br>
                  
                  <strong>發現2：7-8月積溫決定品質</strong><br>
                  • 7-8月累積活躍溫度（>10°C的有效積溫）與品質評分呈<strong>正相關</strong>（R² = 0.76）<br>
                  • 積溫<1,100°C·天：品質85-88分<br>
                  • 積溫1,100-1,250°C·天：品質89-92分<br>
                  • 積溫>1,250°C·天：品質93-96分<br>
                  • <strong>洞察：夏季熱量積累是品質的關鍵</strong><br><br>
                  
                  <strong>發現3：土壤水分的「適度壓力窗口」</strong><br>
                  • 轉色期（8月1-25日）平均土壤水分（30cm深度）與品質呈<strong>U型關係</strong><br>
                  • 水分22-25%：品質<strong>最高</strong>（92-95分）——適度水分壓力<br>
                  • 水分<22%：品質下降至87-90分——過度壓力<br>
                  • 水分>28%：品質下降至85-88分——水分過多，稀釋<br>
                  • <strong>洞察：轉色期需要「適度乾旱」促進品質</strong><br><br>
                  
                  <strong>發現4：pH值的隱藏影響</strong><br>
                  • 土壤pH 6.8-7.2：產量和品質均<strong>最優</strong><br>
                  • pH每偏離0.1，品質平均下降<strong>1.2分</strong><br>
                  • 7年數據顯示pH值變化與施肥歷史高度相關<br>
                  • <strong>洞察：pH管理比想象中更重要</strong><br><br>
                  
                  <strong>AI預測模型驗證（2024年）：</strong><br><br>
                  
                  <em>2024年3月，基於前6年數據的預測：</em><br>
                  • 預測產量：7,320 kg/ha<br>
                  • 預測品質：91分<br>
                  • 關鍵建議：<br>
                  &nbsp;&nbsp;- 開花期若降雨>40mm，需做好排水準備<br>
                  &nbsp;&nbsp;- 7-8月保證充足日照<br>
                  &nbsp;&nbsp;- 轉色期控制土壤水分在22-25%<br><br>
                  
                  <em>2024年9月，實際結果：</em><br>
                  • 實際產量：<strong>7,450 kg/ha</strong>（vs預測7,320，誤差<strong>+1.8%</strong>）<br>
                  • 實際品質：<strong>92分</strong>（vs預測91，誤差<strong>+1分</strong>）<br>
                  • <strong>預測準確度：98.2%</strong><br><br>
                  
                  <strong>2024年管理優化（基於AI洞察）：</strong><br><br>
                  
                  <em>開花期（5月25日-6月3日）：</em><br>
                  • 降雨預報：累積45mm<br>
                  • AI建議執行：<strong>加強排水</strong><br>
                  • 開挖臨時排水溝，雨後6小時內排空積水<br>
                  • 結果：坐果率82%（vs歷史平均78%）<br><br>
                  
                  <em>轉色期（8月1-25日）：</em><br>
                  • AI建議：控制土壤水分在22-25%<br>
                  • 實施：<strong>精準灌溉</strong>，每3天監測調整<br>
                  • 實際平均水分：23.8%（<strong>完美</strong>）<br>
                  • 結果：酚類成熟度優異，單寧細膩<br><br>
                  
                  <strong>經濟效益：</strong><br>
                  • 產量提升：7,450 vs 2023年7,100（<strong>+4.9%</strong>）<br>
                  • 品質提升：92分 vs 2023年89分（<strong>+3分</strong>）<br>
                  • 正牌酒比例：從68%提升到<strong>79%</strong><br>
                  • 額外收益：<br>
                  &nbsp;&nbsp;- 增產：350 kg/ha × 28ha × €14/kg = €137,200<br>
                  &nbsp;&nbsp;- 品質提升：28ha × 7,450kg × 11%正牌比例提升 × €8差價 = €182,000<br>
                  • 合計：<strong>€319,200</strong><br><br>
                  
                  <strong>大數據分析成本：</strong><br>
                  • 雲端存儲：€2,400/年（7年數據）<br>
                  • AI分析平台訂閱：€3,600/年<br>
                  • 數據科學家顧問費：€8,000（一次性項目）<br>
                  • 合計：<strong>€14,000</strong><br><br>
                  
                  <strong>ROI：</strong><br>
                  • 投資：€14,000<br>
                  • 收益：€319,200<br>
                  • <strong>ROI：22.8倍</strong><br><br>
                  
                  <strong>酒莊總經理評價：</strong><br>
                  「7年的物聯網數據是我們最寶貴的資產。AI分析發現了我們30年經驗都沒發現的規律——原來轉色期的『適度乾旱』有一個精確的數值範圍：22-25%土壤水分。2024年我們嚴格控制在這個範圍，品質提升3分、正牌比例提升11%。數據不會說謊，數據就是金礦。」</p>
                </div>
              </div>
              
              <div class="predictive-modeling">
                <h5>預測建模與決策支持</h5>
                <p>基於歷史數據訓練的AI預測模型，可以提前數週甚至數月預測產量、品質、病害風險，為酒莊提供戰略級決策支持。<br><br>
                
                <strong>預測類型：</strong><br>
                • <strong>產量預測：</strong>6月預測9月產量（±5%）<br>
                • <strong>品質預測：</strong>轉色期預測最終品質（±2分）<br>
                • <strong>病害預測：</strong>提前7天預測病害風險（75%+準確率）<br>
                • <strong>最佳採收期：</strong>預測最佳採收時間窗口</p>
                
                <div class="example-box">
                  <h6>💡 預測建模案例：Margaux的7天病害預警系統</h6>
                  <p><strong>挑戰：</strong>霜黴病是波爾多夏季的主要威脅，傳統經驗判斷準確率僅60%。<br><br>
                  
                  <strong>2024年部署AI病害預測系統：</strong><br><br>
                  
                  <strong>預測模型：</strong><br>
                  • 算法：深度學習LSTM（長短期記憶網絡）<br>
                  • 訓練數據：2018-2023年6年氣象數據+病害記錄<br>
                  • 輸入特徵：<br>
                  &nbsp;&nbsp;- 過去7天溫度、濕度、降雨、葉面濕度<br>
                  &nbsp;&nbsp;- 未來7天天氣預報<br>
                  &nbsp;&nbsp;- 當前生長階段<br>
                  &nbsp;&nbsp;- 歷史病害數據<br>
                  • 輸出：未來7天每天的霜黴病風險指數（0-100%）<br>
                  • 模型準確率（驗證集）：<strong>75%</strong><br><br>
                  
                  <strong>2024年6月18日，典型預警案例：</strong><br><br>
                  
                  <strong>系統分析（18日上午9:00）：</strong><br>
                  • 過去7天：累積降雨62mm，平均溫度23°C，葉面濕度持續時間長<br>
                  • 未來7天天氣預報：<br>
                  &nbsp;&nbsp;- 6月19日：陰，降雨12mm，溫度20-24°C<br>
                  &nbsp;&nbsp;- 6月20日：陰轉多雲，溫度22-26°C<br>
                  &nbsp;&nbsp;- 6月21日：多雲，溫度24-28°C<br>
                  &nbsp;&nbsp;- 6月22-25日：晴，溫度升高<br><br>
                  
                  <strong>AI預測結果：</strong><br>
                  • 6月19日：霜黴病風險<strong>85%</strong>（高風險）<br>
                  • 6月20日：風險<strong>92%</strong>（<strong>極高風險</strong>）🚨<br>
                  • 6月21日：風險78%<br>
                  • 6月22日：風險55%（風險下降）<br>
                  • 6月23-25日：風險<30%（安全）<br>
                  • <strong>AI建議：「6月20日前完成預防性噴藥」</strong><br><br>
                  
                  <strong>決策：6月19日上午預防性噴藥</strong><br>
                  • 藥劑：銅製劑+有機殺菌劑<br>
                  • 覆蓋：全園32公頃<br>
                  • 成本：€2,850<br><br>
                  
                  <strong>6月26日（7天後）實地驗證：</strong><br>
                  • 全園巡檢：<strong>零霜黴病感染</strong><br>
                  • <strong>預防成功！</strong><br><br>
                  
                  <strong>對比：鄰近酒莊（未使用預測系統）</strong><br><br>
                  
                  <em>酒莊E（依賴傳統經驗）：</em><br>
                  • 6月18日：酒窖主任判斷「風險中等，暫不噴藥」<br>
                  • 6月22日：發現初期感染<br>
                  • 6月23日：緊急治療性噴藥<br>
                  • 結果：感染面積4.2公頃（13%）<br>
                  • 產量損失：8%<br>
                  • 經濟損失：<strong>€95,000</strong><br><br>
                  
                  <em>酒莊F（有氣象站但無AI預測）：</em><br>
                  • 6月19日：看到高溫高濕，決定噴藥（正確）<br>
                  • 但未能量化風險，決策猶豫1天<br>
                  • 6月20日：噴藥完成<br>
                  • 結果：部分地塊已輕度感染（<2%）<br>
                  • 小幅產量影響：2-3%<br>
                  • 經濟損失：<strong>€28,000</strong><br><br>
                  
                  <strong>Margaux酒莊2024年全季病害預警記錄：</strong><br><br>
                  
                  • 霜黴病預警：<strong>8次</strong><br>
                  &nbsp;&nbsp;- 準確預警（實際發生）：<strong>6次</strong><br>
                  &nbsp;&nbsp;- 誤報（預警但未發生）：<strong>2次</strong><br>
                  &nbsp;&nbsp;- 漏報（未預警但發生）：<strong>1次</strong><br>
                  • <strong>準確率：75%</strong>（6/8，符合模型設計）<br><br>
                  
                  • 白粉病預警：5次（準確率80%）<br>
                  • 灰黴病預警：3次（準確率67%）<br><br>
                  
                  <strong>效益分析：</strong><br><br>
                  
                  <em>避免損失：</em><br>
                  • 6次準確預警，平均避免損失：€95,000/次<br>
                  • 累計避免損失：<strong>€570,000</strong><br><br>
                  
                  <em>誤報成本：</em><br>
                  • 2次誤報導致不必要的噴藥<br>
                  • 成本：2 × €2,850 = €5,700<br><br>
                  
                  <em>漏報損失：</em><br>
                  • 1次漏報（8月15日白粉病）<br>
                  • 小規模感染，及時補救<br>
                  • 損失：€8,000<br><br>
                  
                  <em>淨效益：</em><br>
                  • 避免損失：€570,000<br>
                  • 減去：誤報€5,700 + 漏報€8,000<br>
                  • 淨收益：<strong>€556,300</strong><br><br>
                  
                  <strong>系統成本：</strong><br>
                  • AI預測平台訂閱：€4,800/年<br>
                  • 氣象數據訂閱：€2,400/年<br>
                  • 歷史數據整理：€8,000（一次性）<br>
                  • 第一年總成本：<strong>€15,200</strong><br>
                  • 後續年度：<strong>€7,200</strong><br><br>
                  
                  <strong>ROI：</strong><br>
                  • 第一年ROI：€556,300 / €15,200 = <strong>36.6倍</strong><br>
                  • 後續年度ROI：€556,300 / €7,200 = <strong>77.3倍</strong><br><br>
                  
                  <strong>酒莊技術總監評價：</strong><br>
                  「AI病害預測不是100%準確——我們的模型是75%。但這已經遠超人類經驗的60%。6次準確預警避免了€570,000損失，2次誤報僅損失€5,700。這個投資回報率是36.6倍！更重要的是，AI給了我們信心——當模型說『極高風險92%』，我們就毫不猶豫地行動。這種確定性本身就是價值。」</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="integrated-decision-system">
            <h4>🎯 智能決策支持系統</h4>
            <div class="decision-support">
              <div class="multi-source-integration">
                <h5>多源數據融合決策</h5>
                <p>真正的智能決策系統不依賴單一數據源，而是融合衛星遙感、無人機、物聯網感測器、天氣預報、歷史數據等多個來源，通過AI模型綜合分析，提供最優決策建議。<br><br>
                
                <strong>數據融合價值：</strong><br>
                • <strong>交叉驗證：</strong>多源數據相互驗證，提高可靠性<br>
                • <strong>互補增強：</strong>不同數據源彌補各自局限<br>
                • <strong>協同洞察：</strong>融合產生單一數據無法獲得的洞察<br>
                • <strong>魯棒決策：</strong>即使部分數據源失效，系統仍可運行</p>
                
                <div class="example-box">
                  <h6>💡 多源融合案例：Pauillac的採收時機智能決策</h6>
                  <p><strong>決策問題：</strong>50公頃Cabernet Sauvignon，何時採收能實現最優品質？<br><br>
                  
                  <strong>2024年9月，AI融合決策系統：</strong><br><br>
                  
                  <strong>數據輸入（5個來源）：</strong><br><br>
                  
                  <em>1. 衛星遙感（Sentinel-2）：</em><br>
                  • NDVI時間序列（4月-9月，每10天）<br>
                  • 9月1日NDVI：0.68（vs 8月15日 0.75，<strong>下降9.3%</strong>）<br>
                  • 洞察：植被活力下降，進入成熟後期<br><br>
                  
                  <em>2. 無人機多光譜（每週飛行）：</em><br>
                  • 9月5日：轉色比例<strong>98%</strong><br>
                  • 9月12日：果實顏色從紫紅轉為深紫（完全成熟標誌）<br>
                  • 洞察：視覺成熟度達標<br><br>
                  
                  <em>3. 物聯網感測器：</em><br>
                  • 土壤水分（15個點）：平均23%（適度乾旱）<br>
                  • 氣象站：9月1-15日平均溫度26°C，日照充足<br>
                  • 洞察：環境條件有利於最後階段成熟<br><br>
                  
                  <em>4. 實地品鑑（每3天）：</em><br>
                  • 9月12日：糖度24.2 °Brix，酸度5.5 g/L，種子褐化85%<br>
                  • 9月15日：糖度24.8 °Brix，酸度5.3 g/L，種子褐化90%<br>
                  • 9月18日：糖度25.1 °Brix，酸度5.1 g/L，種子褐化<strong>94%</strong><br>
                  • 洞察：化學成熟度快速提升<br><br>
                  
                  <em>5. 天氣預報（未來10天）：</em><br>
                  • 9月18-20日：晴，溫度25-28°C<br>
                  • 9月21-23日：多雲，溫度降至18-22°C<br>
                  • 9月24-25日：降雨預報30mm<br>
                  • 洞察：9月24日後有降雨風險<br><br>
                  
                  <strong>AI融合分析（9月18日）：</strong><br><br>
                  
                  <strong>成熟度評估：</strong><br>
                  • 衛星NDVI：<strong>92%</strong>成熟度<br>
                  • 無人機視覺：<strong>98%</strong>成熟度<br>
                  • 土壤/氣象：適度乾旱，<strong>理想</strong><br>
                  • 化學分析：糖度<strong>理想</strong>，種子褐化94%<br>
                  • <strong>綜合成熟度：95%</strong><br><br>
                  
                  <strong>風險評估：</strong><br>
                  • 若立即採收（9月19-21日）：<br>
                  &nbsp;&nbsp;- 優勢：避開降雨，品質<strong>優</strong><br>
                  &nbsp;&nbsp;- 劣勢：可能損失2-3天的額外成熟（種子褐化→97%）<br>
                  • 若延遲採收（9月26-28日）：<br>
                  &nbsp;&nbsp;- 優勢：種子褐化可達<strong>97-98%</strong>，理論最優<br>
                  &nbsp;&nbsp;- 劣勢：<strong>高降雨風險</strong>（30mm可能稀釋果實，導致灰黴病）<br><br>
                  
                  <strong>AI決策建議：</strong><br>
                  「<strong>建議9月20-22日採收</strong>（3天窗口）<br>
                  • 理由：當前成熟度95%，已接近最優<br>
                  • 風險：9月24日降雨風險70%，可能損失10-15%品質<br>
                  • 預期評分：<strong>94-95分</strong><br>
                  • 若等到降雨後：預期評分<strong>89-91分</strong>（下降4分）<br>
                  • <strong>推薦：立即採收，鎖定當前優秀品質</strong>」<br><br>
                  
                  <strong>決策執行：</strong><br>
                  • 9月20-22日，完成全部50公頃採收<br>
                  • 採收團隊：25人 × 3天<br>
                  • 天氣：晴朗，理想<br><br>
                  
                  <strong>9月24日（採收後2天）：</strong><br>
                  • 如AI預測，<strong>大雨30mm</strong><br>
                  • 鄰近酒莊（9月26日採收）果實被雨水稀釋<br><br>
                  
                  <strong>釀造後品鑑（2024年12月）：</strong><br>
                  • Pauillac酒莊：<strong>95分</strong>（vs AI預測94-95分）✓<br>
                  • 評語：「完美成熟度，單寧絲滑，結構優雅」<br><br>
                  
                  <strong>鄰近酒莊對比（9月26日採收）：</strong><br>
                  • 受降雨影響，果實稀釋<br>
                  • 品鑑評分：<strong>90分</strong>（vs AI預測89-91分）<br>
                  • 評語：「果味略淡，結構偏弱」<br><br>
                  
                  <strong>經濟價值：</strong><br>
                  • 評分差異：<strong>5分</strong>（95 vs 90）<br>
                  • 正牌酒售價差異：€85/瓶 vs €68/瓶 = <strong>€17/瓶</strong><br>
                  • 總產量：50公頃 × 7,800 kg/ha = 390,000 kg = 52萬瓶<br>
                  • 正牌比例：75% = 39萬瓶<br>
                  • 額外收益：390,000瓶 × €17 = <strong>€6,630,000</strong>（理論最大值）<br>
                  • 實際額外收益（考慮市場因素）：<strong>€2,000,000+</strong><br><br>
                  
                  <strong>多源融合的價值：</strong><br><br>
                  
                  <em>若僅依賴單一數據源：</em><br>
                  • 僅實地品鑑：9月18日種子褐化94%，可能決定「再等3天」→遭遇降雨<br>
                  • 僅衛星遙感：NDVI僅能提供宏觀趨勢，無法精確到天<br>
                  • 僅天氣預報：無法評估當前成熟度是否已足夠<br><br>
                  
                  <em>多源融合的優勢：</em><br>
                  • <strong>全面評估：</strong>成熟度（衛星+無人機+品鑑）+ 環境（物聯網）+ 風險（天氣）<br>
                  • <strong>精準時機：</strong>AI計算出最優3天窗口（9月20-22日）<br>
                  • <strong>風險量化：</strong>明確告知延遲採收的風險（4分損失）<br>
                  • <strong>決策信心：</strong>多源數據交叉驗證，決策更有信心<br><br>
                  
                  <strong>系統成本：</strong><br>
                  • 衛星數據：€3,000/年<br>
                  • 無人機監測：€2,000/年<br>
                  • 物聯網感測器：€8,000/年（分攤）<br>
                  • AI決策平台：€5,000/年<br>
                  • 合計：<strong>€18,000/年</strong><br><br>
                  
                  <strong>ROI：</strong><br>
                  • 單次採收決策價值：€2,000,000+<br>
                  • 系統成本：€18,000<br>
                  • <strong>單次ROI：111倍</strong><br><br>
                  
                  <strong>酒莊總經理總結：</strong><br>
                  「採收時機是全年最關鍵的決策——差3天，可能差5分，差5分就是€200萬。多源融合AI系統就像給我們一個『水晶球』：衛星告訴我們整體趨勢、無人機告訴我們精確狀態、感測器告訴我們環境條件、天氣預報告訴我們風險。AI融合所有信息，給出明確建議：9月20-22日，3天窗口。我們照做，結果完美。這€18,000是我們全年最划算的投資。」</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="iot-integration-value">
            <h4>🎯 物聯網整合系統的變革性價值</h4>
            <div class="transformation-summary">
              <p><strong>技術整合的力量：</strong><br>
              • <strong>邊緣+雲端：</strong>實時決策（毫秒級）+ 長期分析（跨年度）<br>
              • <strong>天-空-地一體化：</strong>衛星（宏觀）+ 無人機（中觀）+ 感測器（微觀）<br>
              • <strong>數據+AI：</strong>海量數據（億級）+ 智能分析（秒級洞察）<br>
              • <strong>監測+決策：</strong>全面感知 + 精準決策<br><br>
              
              <strong>決策能力革命：</strong><br>
              • <strong>從被動到主動：</strong>災害發生前就預警和應對<br>
              • <strong>從經驗到數據：</strong>決策基於精確數據而非主觀判斷<br>
              • <strong>從單點到系統：</strong>整合多源信息，全局優化<br>
              • <strong>從模糊到精確：</strong>量化風險，明確建議<br><br>
              
              <strong>經濟效益總覽（典型50公頃精品酒莊）：</strong><br>
              • <strong>系統總投資：</strong>€80,000-120,000（一次性 + 年度訂閱）<br>
              • <strong>年度運營成本：</strong>€15,000-25,000<br><br>
              
              <strong>年度收益來源：</strong><br>
              • 霜凍預警避免損失：€200,000-500,000<br>
              • 病害預測減少損失：€300,000-600,000<br>
              • 精準灌溉節約+增產：€150,000-300,000<br>
              • 精準施肥優化：€200,000-500,000<br>
              • 採收時機優化：€500,000-2,000,000+<br>
              • <strong>年度總收益：€1.35M-€3.9M</strong><br><br>
              
              <strong>投資回報：</strong><br>
              • 投資回收期：<strong>1-3個月</strong><br>
              • 年度ROI：<strong>15-50倍</strong><br>
              • 5年累積價值：<strong>€6.75M-€19.5M</strong><br><br>
              
              <strong>策略價值（無法量化但至關重要）：</strong><br>
              • <strong>風險管理：</strong>從「靠運氣」到「可控」<br>
              • <strong>品質保障：</strong>穩定高品質，減少年份波動<br>
              • <strong>品牌價值：</strong>科技創新形象，吸引高端客戶<br>
              • <strong>競爭優勢：</strong>數據驅動，超越傳統對手<br>
              • <strong>可持續性：</strong>節水、減藥、減肥，符合ESG<br><br>
              
              <strong>未來趨勢：</strong><br>
              • <strong>全自動化：</strong>從監測→分析→決策→執行，全流程自動化<br>
              • <strong>數位雙胞胎：</strong>虛擬葡萄園，模擬測試所有管理方案<br>
              • <strong>區塊鏈溯源：</strong>物聯網數據上鏈，葡萄酒全生命週期追溯<br>
              • <strong>AI釀酒師：</strong>從種植到釀造，AI全流程優化<br><br>
              
              <strong>結論：</strong><br>
              物聯網+AI不是「錦上添花」，而是精品酒莊的「必選項」。在氣候變化、市場競爭加劇的今天，數據驅動的精準管理是保持競爭力的唯一途徑。波爾多頂級酒莊已經不是在問「要不要部署物聯網」，而是在問「如何部署得更好」。<br><br>
              
              <strong>這不是技術的勝利，而是釀酒藝術與科學完美結合的新時代。</strong></p>
            </div>
          </div>
        </div>
      </div>
      -->
    `,
    highlights: [
      {
        id: 1,
        icon: '⚡',
        title: '邊緣智能',
        content: '毫秒級響應，節水12.4%，避免過度灌溉損失€25,000'
      },
      {
        id: 2,
        icon: '☁️',
        title: '7天病害預警',
        content: '提前7天預測霜黴病，準確率75%，避免損失€567,000，ROI 37倍'
      }
    ]
  },

  // 第一章知識檢測
  {
    type: 'interactive-quiz',
    title: '第一章知識檢測：精準農業革命',
    questions: [
      {
        id: 1,
        question: '衛星遙感系統中NDVI的主要作用是什麼？',
        options: [
          '測量土壤濕度',
          '提前2-3週發現植物健康問題',
          '控制灌溉系統',
          '預測天氣變化'
        ],
        correct: 1,
        explanation: 'NDVI（歸一化植被指數）通過分析植物對不同光譜的反射，能夠在肉眼可見症狀出現前2-3週就檢測出水分壓力、病害等問題，實現早期預警。'
      },
      {
        id: 2,
        question: '無人機精準噴灣相比傳統方式的主要優勢是？',
        options: [
          '完全不需要農藥',
          '可根據病害分布變量噴灣，節約30-50%農藥',
          '速度比拖拉機快10倍',
          '只能用於小面積地塊'
        ],
        correct: 1,
        explanation: '無人機精準噴灣能根據AI識別的病害分布地圖，在不同區域調整藥量，實現變量噴灣，相比傳統統一噴灣可節約30-50%農藥，同時提升防治效果。'
      }
    ]
  },

  // 第二章：大數據分析與機器學習
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '大數據分析與機器學習',
    subtitle: '數據驅動的智能決策',
    icon: '📊',
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },

  // 多源數據整合分析 - 第1部分：多維度數據收集
  {
    type: 'content',
    title: '多源數據整合分析（一）：多維度數據收集',
    content: `
      <div style="font-family:'Segoe UI',sans-serif;max-width:900px;margin:0 auto;padding:0 8px">
        <!-- Header Banner -->
        <div style="background:linear-gradient(135deg,#1a365d 0%,#2d4a8a 50%,#1e3a5f 100%);border-radius:12px;padding:18px 24px;margin-bottom:20px;color:#fff;display:flex;align-items:center;gap:12px">
          <span style="font-size:2.2rem">📊</span>
          <div>
            <div style="font-size:1.2rem;font-weight:700;letter-spacing:.5px">多源數據整合分析（一）｜多維度數據收集</div>
            <div style="font-size:.82rem;opacity:.85;margin-top:4px">現代酒莊每天生成海量數據 × 內部生產 + 外部環境 = 完整圖像</div>
          </div>
        </div>

        <!-- Two column grid -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px">
          <!-- Internal data -->
          <div style="background:#f0f7ff;border:1.5px solid #3182ce;border-radius:10px;padding:16px">
            <div style="background:#2b6cb0;color:#fff;border-radius:6px;padding:6px 12px;font-weight:700;font-size:.9rem;margin-bottom:12px;display:inline-block">🏭 內部生產數據</div>
            <div style="background:#fff;border-radius:8px;padding:12px;margin-bottom:10px;border-left:4px solid #3182ce">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">🌿 葡萄園管理數據</div>
              <div style="font-size:.82rem;line-height:1.7;color:#444">農事操作記錄 × 修剪/疏果/採收<br>投入品使用 × 肥料/農藥/水量<br>各地塊產量與品質分級<br>人工與材料成本核算</div>
              <div style="background:#ebf8ff;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#2b6cb0;font-weight:700">💡 Château Margaux：</span><br>
                每地塊每15分鐘記錄土壤濕度<br>工人平板記錄每次修剪與位置<br>每箱葡萄QR碼追蹤來源地塊<br>
                <span style="color:#c53030;font-weight:700">→ 一季累積超過 50萬筆 田間數據</span>
              </div>
            </div>
            <div style="background:#fff;border-radius:8px;padding:12px;border-left:4px solid #4299e1">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">🍷 釀造工藝數據</div>
              <div style="font-size:.82rem;line-height:1.7;color:#444">發酵參數 × 溫度/密度/pH曲線<br>工藝流程時間與操作記錄<br>化學分析與感官評估數據<br>橡木桶陳年詳細追蹤</div>
              <div style="background:#ebf8ff;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#2b6cb0;font-weight:700">💡 一桶Pauillac紅酒的數據足跡：</span><br>
                發酵期 288個溫度點（12天）<br>蘋果酸乳酸發酵 54次化學分析<br>橡木桶陳年 36次記錄（18月）<br>
                <span style="color:#c53030;font-weight:700">→ 一桶酒超過 400個 追蹤數據點</span>
              </div>
            </div>
          </div>

          <!-- External data -->
          <div style="background:#f0fff4;border:1.5px solid #38a169;border-radius:10px;padding:16px">
            <div style="background:#276749;color:#fff;border-radius:6px;padding:6px 12px;font-weight:700;font-size:.9rem;margin-bottom:12px;display:inline-block">🌐 外部環境數據</div>
            <div style="background:#fff;border-radius:8px;padding:12px;margin-bottom:10px;border-left:4px solid #38a169">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">🌤️ 氣象數據整合</div>
              <div style="font-size:.82rem;line-height:1.7;color:#444">歷史氣象 × 30年以上數據庫<br>即時監測 × 多站位數據<br>衛星遙感 × 區域氣象信息<br>預測數據 × 7–15天天氣預報</div>
              <div style="background:#f0fff4;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#276749;font-weight:700">💡 Saint-Émilion產區氣象網：</span><br>
                5個地面站每10分鐘記錄氣象<br>衛星每週2次提供植被指數<br>區域模型提供10天微氣候預測<br>
                <span style="color:#c53030;font-weight:700">→ 年度累積 260萬筆 氣象數據</span>
              </div>
            </div>
            <div style="background:#fff;border-radius:8px;padding:12px;border-left:4px solid #48bb78">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">📈 市場信息數據</div>
              <div style="font-size:.82rem;line-height:1.7;color:#444">價格趨勢 × 國際/國內市場<br>消費者偏好與行為數據<br>競爭對手產品與策略分析<br>進出口量與貿易流向</div>
              <div style="background:#f0fff4;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#276749;font-weight:700">💡 波爾多列級酒莊市場監測：</span><br>
                追蹤全球12大市場拍賣價（每週）<br>分析社媒品牌提及與消費評論<br>監控50家競爭對手定價策略<br>
                <span style="color:#c53030;font-weight:700">→ 整合海關數據追蹤新興市場</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats bar -->
        <div style="background:linear-gradient(90deg,#1a365d,#2d4a8a);border-radius:8px;padding:12px 18px;display:flex;gap:0;justify-content:space-around;color:#fff;font-size:.82rem;text-align:center">
          <div><div style="font-size:1.4rem;font-weight:700">50萬+</div><div style="opacity:.85">田間管理數據/季</div></div>
          <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
          <div><div style="font-size:1.4rem;font-weight:700">400+</div><div style="opacity:.85">追蹤數據點/桶</div></div>
          <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
          <div><div style="font-size:1.4rem;font-weight:700">260萬</div><div style="opacity:.85">氣象數據/年</div></div>
          <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
          <div><div style="font-size:1.4rem;font-weight:700">12市場</div><div style="opacity:.85">全球市場監測</div></div>
        </div>

        <!--ORIGINAL:
        <div class="big-data-analytics">
          <h3>📊 多維度數據收集</h3>
          <p class="intro-text">現代酒莊就像一個「數據工廠」，每天產生大量來自不同來源的數據。這些數據如同拼圖的碎片，只有整合在一起才能呈現完整的圖像。</p>
          
          <div class="data-sources">
            <div class="data-categories">
              <div class="internal-data">
                <h4>🏭 內部生產數據</h4>
                <div class="production-data">
                  <div class="data-type">
                    <h5>葡萄園管理數據</h5>
                    <p>• <strong>農事操作記錄：</strong>修剪、疏果、採收等操作的時間和方式<br>
                    • <strong>投入品使用：</strong>肥料、農藥、水的使用量和時間<br>
                    • <strong>產量數據：</strong>各地塊的產量、品質分級數據<br>
                    • <strong>成本核算：</strong>各項作業的人工和材料成本</p>
                    
                    <div class="example-box">
                      <h6>💡 實際案例：</h6>
                      <p><strong>Château Margaux 的數字化葡萄園：</strong><br>
                      • 每個地塊安裝土壤傳感器，每15分鐘記錄一次溫濕度<br>
                      • 工人使用平板電腦記錄每次修剪的枝條數量和位置<br>
                      • 採收時，每箱葡萄都有QR碼追蹤其來源地塊和採收時間<br>
                      • 一個季度累積超過 <strong>50萬筆</strong> 田間管理數據</p>
                    </div>
                  </div>
                  
                  <div class="data-type">
                    <h5>釀造工藝數據</h5>
                    <p>• <strong>發酵參數：</strong>溫度、密度、pH值的變化曲線<br>
                    • <strong>工藝流程：</strong>每個工藝步驟的時間和參數<br>
                    • <strong>品質檢測：</strong>化學分析和感官評估數據<br>
                    • <strong>陳年追蹤：</strong>橡木桶陳年過程的詳細記錄</p>
                    
                    <div class="example-box">
                      <h6>💡 數據範例：</h6>
                      <p><strong>一桶Pauillac紅酒的數據足跡：</strong><br>
                      • 發酵期間：每小時記錄溫度（288個數據點/12天）<br>
                      • 蘋果酸乳酸發酵：每週3次化學分析（18週×3=54次）<br>
                      • 橡木桶陳年：每月品嚐評分和化學分析（18個月×2=36次）<br>
                      • 總計：<strong>一桶酒產生超過400個追蹤數據點</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="external-data">
                <h4>🌐 外部環境數據</h4>
                <div class="environmental-data">
                  <div class="data-source">
                    <h5>氣象數據整合</h5>
                    <p>• <strong>歷史氣象：</strong>30年以上的歷史氣象數據<br>
                    • <strong>即時監測：</strong>多個氣象站的即時數據<br>
                    • <strong>衛星數據：</strong>氣象衛星提供的區域氣象信息<br>
                    • <strong>預測數據：</strong>7-15天的天氣預報數據</p>
                    
                    <div class="example-box">
                      <h6>💡 多層次氣象監測：</h6>
                      <p><strong>Saint-Émilion 產區的氣象網：</strong><br>
                      • 5個地面氣象站：每10分鐘記錄溫濕度、風速、降雨<br>
                      • 衛星遙感：每週2次提供土壤濕度和植被指數<br>
                      • 區域氣象模型：提供未來10天的微氣候預測<br>
                      • <strong>年度累積：525,600分鐘 × 5站 = 260萬筆氣象數據</strong></p>
                    </div>
                  </div>
                  
                  <div class="data-source">
                    <h5>市場信息數據</h5>
                    <p>• <strong>價格趨勢：</strong>國際和國內市場價格變化<br>
                    • <strong>消費趨勢：</strong>消費者偏好和行為數據<br>
                    • <strong>競爭分析：</strong>競爭對手的產品和策略信息<br>
                    • <strong>貿易數據：</strong>進出口量和貿易流向數據</p>
                    
                    <div class="example-box">
                      <h6>💡 市場情報整合：</h6>
                      <p><strong>波爾多列級酒莊的市場監測系統：</strong><br>
                      • 追蹤全球12個主要市場的拍賣價格（每週更新）<br>
                      • 分析社交媒體上的品牌提及和消費者評論<br>
                      • 監控50家競爭對手的定價和促銷策略<br>
                      • 整合海關數據追蹤出口趨勢和新興市場</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        -->
      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🏭',
        title: '內部數據',
        content: '整合葡萄園管理和釀造工藝的全方位生產數據'
      },
      {
        id: 2,
        icon: '🌐',
        title: '外部數據',
        content: '結合氣象、市場等外部環境數據進行綜合分析'
      }
    ]
  },

  // 多源數據整合分析 - 第2部分：數據處理與清洗
  {
    type: 'content',
    title: '多源數據整合分析（二）：數據處理與清洗',
    content: `
      <div style="font-family:'Segoe UI',sans-serif;max-width:900px;margin:0 auto;padding:0 8px">
        <!-- Header -->
        <div style="background:linear-gradient(135deg,#44337a 0%,#6b46c1 50%,#553c9a 100%);border-radius:12px;padding:18px 24px;margin-bottom:20px;color:#fff;display:flex;align-items:center;gap:12px">
          <span style="font-size:2.2rem">💾</span>
          <div>
            <div style="font-size:1.2rem;font-weight:700;letter-spacing:.5px">多源數據整合分析（二）｜數據處理與清洗</div>
            <div style="font-size:.82rem;opacity:.85;margin-top:4px">原始數據如同剛採收的葡萄 × 清洗去除「爛果」× 特徵工程提取「精華」</div>
          </div>
        </div>

        <!-- Two sections -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px">
          <!-- Data preprocessing -->
          <div style="background:#faf5ff;border:1.5px solid #805ad5;border-radius:10px;padding:16px">
            <div style="background:#6b46c1;color:#fff;border-radius:6px;padding:6px 12px;font-weight:700;font-size:.9rem;margin-bottom:12px;display:inline-block">💾 數據預處理</div>
            <div style="background:#fff;border-radius:8px;padding:12px;margin-bottom:10px;border-left:4px solid #805ad5">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">🧹 數據清洗</div>
              <div style="font-size:.82rem;line-height:1.7;color:#444">異常值檢測與識別處理<br>缺失值統計補全<br>跨來源格式標準化<br>不同頻率數據時間對齊</div>
              <div style="background:#faf5ff;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#553c9a;font-weight:700">💡 2023年夏季氣象數據案例：</span><br>
                問題：3天氣象缺失 + −999°C異常讀數<br>解法：線性插值補全 + 範圍過濾 + ISO 8601統一<br>
                <span style="color:#c53030;font-weight:700">→ 數據完整度 73% ➜ 98%</span>
              </div>
            </div>
            <div style="background:#fff;border-radius:8px;padding:12px;border-left:4px solid #9f7aea">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">⚙️ 特徵工程</div>
              <div style="font-size:.82rem;line-height:1.7;color:#444">變數轉換與數學運算<br>特徵選擇（最佳影響因子）<br>維度降維 × 提高處理效率<br>領域知識構建新特徵</div>
              <div style="background:#faf5ff;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#553c9a;font-weight:700">💡 構建「成熟度指數」：</span><br>
                積溫度日(GDD) = Σ(日均溫 − 10°C)<br>糖酸比 = 葡萄糖度 / 總酸度<br>水分脅迫指數 = (降雨 − 蒸散) / 持水量<br>
                <span style="color:#c53030;font-weight:700">→ 預測準確度提升 35%</span>
              </div>
            </div>
          </div>

          <!-- Exploratory analysis -->
          <div style="background:#fffaf0;border:1.5px solid #dd6b20;border-radius:10px;padding:16px">
            <div style="background:#c05621;color:#fff;border-radius:6px;padding:6px 12px;font-weight:700;font-size:.9rem;margin-bottom:12px;display:inline-block">🔍 探索性分析</div>
            <div style="background:#fff;border-radius:8px;padding:12px;margin-bottom:10px;border-left:4px solid #dd6b20">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">📊 統計描述分析</div>
              <div style="font-size:.82rem;line-height:1.7;color:#444">分布特徵 × 規律分析<br>相關性 × 線性/非線性關係<br>趨勢分析 × 時間序列<br>群組分析 × 自然分群</div>
              <div style="background:#fffaf0;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#c05621;font-weight:700">💡 2010–2025波爾多研究：</span><br>
                7–8月夜間溫度 × 酒質：<span style="color:#276749;font-weight:700">+0.78 正相關</span><br>
                成熟期降雨 × 品質：<span style="color:#c53030;font-weight:700">−0.65 負相關</span><br>
                <span style="color:#c53030;font-weight:700">→ 8月10–20日決定年份品質 60%！</span>
              </div>
            </div>
            <div style="background:#fff;border-radius:8px;padding:12px;border-left:4px solid #ed8936">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">📈 視覺化分析</div>
              <div style="font-size:.82rem;line-height:1.7;color:#444">時間序列圖 × 趨勢展示<br>散點圖矩陣 × 多變數關係<br>熱力圖 × 相關性與地理分布<br>箱線圖 × 組間比較</div>
              <div style="background:#fffaf0;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#c05621;font-weight:700">💡 Pomerol地塊品質熱力圖：</span><br>
                50個地塊 × 10年品質評分分析<br>東南坡：穩定度高（標準差 1.2分）<br>北側低窪：波動大（標準差 3.8分）<br>
                <span style="color:#c53030;font-weight:700">→ 指導優質年份混釀比例決策</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Pipeline + stats bar -->
        <div style="background:linear-gradient(90deg,#44337a,#553c9a);border-radius:8px;padding:12px 16px;color:#fff">
          <div style="display:flex;align-items:center;gap:6px;font-size:.78rem;justify-content:center;flex-wrap:wrap;margin-bottom:10px">
            <div style="background:rgba(255,255,255,.18);border-radius:6px;padding:5px 12px">原始數據</div>
            <span>→</span><div style="background:rgba(255,255,255,.18);border-radius:6px;padding:5px 12px">清洗補全</div>
            <span>→</span><div style="background:rgba(255,255,255,.18);border-radius:6px;padding:5px 12px">格式統一</div>
            <span>→</span><div style="background:rgba(255,255,255,.18);border-radius:6px;padding:5px 12px">特徵工程</div>
            <span>→</span><div style="background:rgba(255,255,255,.18);border-radius:6px;padding:5px 12px">探索分析</div>
            <span>→</span><div style="background:#f6e05e;color:#744210;border-radius:6px;padding:5px 12px;font-weight:700">模型輸入 ✓</div>
          </div>
          <div style="display:flex;gap:0;justify-content:space-around;font-size:.8rem;text-align:center">
            <div><div style="font-size:1.2rem;font-weight:700">73→98%</div><div style="opacity:.8">數據完整度提升</div></div>
            <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
            <div><div style="font-size:1.2rem;font-weight:700">+35%</div><div style="opacity:.8">預測準確度</div></div>
            <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
            <div><div style="font-size:1.2rem;font-weight:700">0.78</div><div style="opacity:.8">夜間溫度×酒質相關</div></div>
            <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
            <div><div style="font-size:1.2rem;font-weight:700">60%</div><div style="opacity:.8">年份品質由8月決定</div></div>
          </div>
        </div>

        <!--ORIGINAL:
        <div class="data-processing">
          <h3>💾 數據處理與清洗</h3>
          <p class="intro-text">原始數據就像剛採收的葡萄，需要經過精心挑選和處理才能釀出好酒。</p>
              <h4>數據預處理</h4>
              <div class="preprocessing-steps">
                <div class="step-item">
                  <h5>數據清洗</h5>
                  <p>• <strong>異常值檢測：</strong>識別和處理數據中的異常值<br>
                  • <strong>缺失值補全：</strong>使用統計方法補全缺失數據<br>
                  • <strong>格式統一：</strong>統一不同來源數據的格式標準<br>
                  • <strong>時間對齊：</strong>將不同頻率的數據對齊到統一時間軸</p>
                  
                  <div class="example-box">
                    <h6>💡 實際清洗案例：</h6>
                    <p><strong>2023年夏季氣象數據清洗過程：</strong><br>
                    <em>原始數據問題：</em><br>
                    • 氣象站故障導致連續3天缺失溫度數據<br>
                    • 土壤傳感器記錄到-999°C的異常讀數（明顯錯誤）<br>
                    • 不同傳感器的時間戳格式不一致<br><br>
                    <em>處理方案：</em><br>
                    • 使用鄰近氣象站數據進行線性插值補全缺失值<br>
                    • 識別並刪除超出合理範圍（-10°C至50°C）的異常值<br>
                    • 統一時間戳為ISO 8601格式<br>
                    • <strong>結果：數據完整度從73%提升至98%</strong></p>
                  </div>
                </div>
                
                <div class="step-item">
                  <h5>特徵工程</h5>
                  <p>• <strong>變數轉換：</strong>對原始數據進行數學轉換<br>
                  • <strong>特徵選擇：</strong>選擇對目標變數最有影響的特徵<br>
                  • <strong>維度降維：</strong>減少數據維度提高處理效率<br>
                  • <strong>新特徵構建：</strong>基於領域知識構建新的特徵變數</p>
                  
                  <div class="example-box">
                    <h6>💡 特徵工程實例：</h6>
                    <p><strong>從原始數據構建「成熟度指數」：</strong><br>
                    <em>原始數據：</em><br>
                    • 日均溫度、降雨量、日照時數<br>
                    • 葡萄糖度、酸度測量值<br><br>
                    <em>新特徵創建：</em><br>
                    • <strong>積溫度日（GDD）</strong> = Σ(日均溫 - 10°C)<br>
                    • <strong>糖酸比</strong> = 葡萄糖度 / 總酸度<br>
                    • <strong>水分脅迫指數</strong> = (降雨量 - 蒸散量) / 土壤持水量<br>
                    • <strong>最佳採收窗口</strong> = f(GDD, 糖酸比, 酚類成熟度)<br><br>
                    這個「成熟度指數」比單一指標預測準確度提升 <strong>35%</strong>！</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="pipeline-stage">
              <h4>🔍 探索性數據分析</h4>
              <div class="exploratory-analysis">
                <div class="analysis-method">
                  <h5>統計描述分析</h5>
                  <p>• <strong>分布特徵：</strong>分析各變數的分布特徵和規律<br>
                  • <strong>相關性分析：</strong>發現變數間的線性和非線性關係<br>
                  • <strong>趨勢分析：</strong>識別數據的時間趨勢和季節性<br>
                  • <strong>群組分析：</strong>發現數據中的自然群組和模式</p>
                  
                  <div class="example-box">
                    <h6>💡 相關性發現：</h6>
                    <p><strong>波爾多產量品質研究（2010-2025數據）：</strong><br>
                    • 7-8月夜間溫度與酒質呈 <strong>0.78正相關</strong>（溫度越高品質越好）<br>
                    • 成熟期降雨量與品質呈 <strong>-0.65負相關</strong>（降雨越多品質越差）<br>
                    • 產量與品質呈 <strong>-0.42弱負相關</strong>（產量控制在關鍵）<br>
                    • 發現：8月10-20日的10天氣候窗口決定了年份品質的60%！</p>
                  </div>
                </div>
                
                <div class="analysis-method">
                  <h5>視覺化分析</h5>
                  <p>• <strong>時間序列圖：</strong>展示數據隨時間的變化趨勢<br>
                  • <strong>散點圖矩陣：</strong>展示多變數間的關係<br>
                  • <strong>熱力圖：</strong>顯示相關性和地理分布模式<br>
                  • <strong>箱線圖：</strong>比較不同組別的數據分布</p>
                  
                  <div class="example-box">
                    <h6>💡 視覺化洞察：</h6>
                    <p><strong>Pomerol產區地塊品質熱力圖：</strong><br>
                    • 繪製50個地塊過去10年的品質評分<br>
                    • 發現：東南坡地塊品質穩定度最高（標準差僅1.2分）<br>
                    • 北側低窪地塊年份波動大（標準差達3.8分）<br>
                    • 決策：優質年份混釀更多東南坡葡萄，困難年份提高其佔比</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        -->
      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '💾',
        title: '數據預處理',
        content: '清洗、轉換和優化原始數據，確保數據品質'
      },
      {
        id: 2,
        icon: '🔍',
        title: '探索性分析',
        content: '深入挖掘數據規律，發現隱藏的模式和關聯'
      }
    ]
  },

  // 多源數據整合分析 - 第3部分：機器學習預測建模
  {
    type: 'content',
    title: '機器學習應用（一）：預測建模系統',
    content: `
      <div style="font-family:'Segoe UI',sans-serif;max-width:900px;margin:0 auto;padding:0 8px">
        <!-- Header -->
        <div style="background:linear-gradient(135deg,#1c4532 0%,#276749 50%,#22543d 100%);border-radius:12px;padding:18px 24px;margin-bottom:20px;color:#fff;display:flex;align-items:center;gap:12px">
          <span style="font-size:2.2rem">🤖</span>
          <div>
            <div style="font-size:1.2rem;font-weight:700;letter-spacing:.5px">機器學習應用（一）｜預測建模系統</div>
            <div style="font-size:.82rem;opacity:.85;margin-top:4px">從歷史數據學習規律 × 同時處理萬個變數 × 做出人腦無法完成的複雜預測</div>
          </div>
        </div>

        <!-- Two column grid -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px">
          <!-- Yield prediction -->
          <div style="background:#f0fff4;border:1.5px solid #38a169;border-radius:10px;padding:16px">
            <div style="background:#276749;color:#fff;border-radius:6px;padding:6px 12px;font-weight:700;font-size:.9rem;margin-bottom:12px;display:inline-block">🍇 產量預測模型</div>

            <div style="background:#fff;border-radius:8px;padding:12px;margin-bottom:10px;border-left:4px solid #38a169">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">📅 多階段預測流程</div>
              <div style="font-size:.8rem;line-height:1.6;color:#444">
                <div style="display:flex;gap:6px;align-items:flex-start;margin-bottom:4px"><span style="background:#c6f6d5;color:#276749;border-radius:4px;padding:1px 6px;font-weight:700;white-space:nowrap">4–5月</span><span>花期 × 氣象條件預測產量潛力（誤差25%）</span></div>
                <div style="display:flex;gap:6px;align-items:flex-start;margin-bottom:4px"><span style="background:#c6f6d5;color:#276749;border-radius:4px;padding:1px 6px;font-weight:700;white-space:nowrap">6–7月</span><span>轉色期 × 果串數量+管理數據（誤差11%）</span></div>
                <div style="display:flex;gap:6px;align-items:flex-start;margin-bottom:4px"><span style="background:#68d391;color:#1c4532;border-radius:4px;padding:1px 6px;font-weight:700;white-space:nowrap">8月下</span><span>整合遙感數據 × 最終預測（誤差4%）</span></div>
              </div>
              <div style="background:#f0fff4;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#276749;font-weight:700">💡 Château Latour 2025年：</span><br>
                最終預測 54噸 ±2噸（8月30日）<br>實際採收：<span style="font-weight:700">53.2噸</span><br>
                <span style="color:#c53030;font-weight:700">→ 預測誤差僅 1.5%！提前2週精準預測</span>
              </div>
            </div>

            <div style="background:#fff;border-radius:8px;padding:12px;border-left:4px solid #48bb78">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">⚡ 算法性能比較</div>
              <table style="width:100%;font-size:.78rem;border-collapse:collapse">
                <tr style="background:#f0fff4"><th style="padding:4px 6px;text-align:left">算法</th><th style="padding:4px 6px;text-align:center">R²</th><th style="padding:4px 6px;text-align:center">推薦</th></tr>
                <tr><td style="padding:3px 6px;color:#666">線性回歸</td><td style="padding:3px 6px;text-align:center">0.65</td><td style="padding:3px 6px;text-align:center">—</td></tr>
                <tr style="background:#f0fff4"><td style="padding:3px 6px">隨機森林</td><td style="padding:3px 6px;text-align:center">0.84</td><td style="padding:3px 6px;text-align:center">—</td></tr>
                <tr style="background:#c6f6d5"><td style="padding:3px 6px;font-weight:700">XGBoost</td><td style="padding:3px 6px;text-align:center;font-weight:700">0.89</td><td style="padding:3px 6px;text-align:center">⭐推薦</td></tr>
                <tr><td style="padding:3px 6px;color:#666">深度神經網絡</td><td style="padding:3px 6px;text-align:center">0.88</td><td style="padding:3px 6px;text-align:center">—</td></tr>
              </table>
              <div style="font-size:.78rem;color:#276749;margin-top:6px">中小規模數據（&lt;10年歷史）XGBoost 表現最佳</div>
            </div>
          </div>

          <!-- Disease prediction -->
          <div style="background:#fff5f5;border:1.5px solid #e53e3e;border-radius:10px;padding:16px">
            <div style="background:#c53030;color:#fff;border-radius:6px;padding:6px 12px;font-weight:700;font-size:.9rem;margin-bottom:12px;display:inline-block">🦠 病害預測模型</div>

            <div style="background:#fff;border-radius:8px;padding:12px;margin-bottom:10px;border-left:4px solid #e53e3e">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">🚨 早期預警系統</div>
              <div style="font-size:.82rem;line-height:1.7;color:#444">環境模型 × 溫濕度預測發生概率<br>圖像識別 × 自動識別病斑症狀<br>傳播模型 × 預測擴散路徑<br>風險評估 × 各地塊病害風險</div>
              <div style="background:#fff5f5;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#c53030;font-weight:700">💡 2024年6月霜霉病預警：</span><br>
                AI預測發生概率 <span style="font-weight:700">78%</span> → 提前噴藥（€120/公頃）<br>
                鄰近未防守園感染率 35%，本園僅 <span style="color:#276749;font-weight:700">2%</span><br>
                <span style="color:#c53030;font-weight:700">→ 避免損失 €2,500/公頃 × ROI 20:1</span>
              </div>
            </div>

            <div style="background:#fff;border-radius:8px;padding:12px;border-left:4px solid #fc8181">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">🧠 深度學習應用</div>
              <div style="font-size:.82rem;line-height:1.7;color:#444">CNN × 分析葉片/果實影像特徵<br>LSTM × 分析時序環境變化模式<br>注意力機制 × 聚焦關鍵診斷特徵<br>遷移學習 × 快速適應新病害</div>
              <div style="background:#fff5f5;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#c53030;font-weight:700">💡 葡萄病害自動診斷系統：</span><br>
                訓練集：50,000張標註葉片 × 10類病害<br>
                整體準確率：<span style="font-weight:700">94.3%</span>（霜霉病 96.8%）<br>
                處理速度：每張 0.08秒<br>
                <span style="color:#c53030;font-weight:700">→ 診斷時間 1天 ➜ 1分鐘</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats bar -->
        <div style="background:linear-gradient(90deg,#1c4532,#276749);border-radius:8px;padding:12px 18px;display:flex;gap:0;justify-content:space-around;color:#fff;font-size:.82rem;text-align:center">
          <div><div style="font-size:1.4rem;font-weight:700">1.5%</div><div style="opacity:.85">產量預測誤差（Latour）</div></div>
          <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
          <div><div style="font-size:1.4rem;font-weight:700">R²=0.89</div><div style="opacity:.85">XGBoost 預測精度</div></div>
          <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
          <div><div style="font-size:1.4rem;font-weight:700">94.3%</div><div style="opacity:.85">病害識別準確率</div></div>
          <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
          <div><div style="font-size:1.4rem;font-weight:700">ROI 20:1</div><div style="opacity:.85">病害預防投資回報</div></div>
        </div>

        <!--ORIGINAL:
        <div class="machine-learning">
          <h3>🤖 預測建模系統</h3>
          <p class="intro-text">機器學習就像一位經驗豐富的老酒師...</p>
                    <em>5月15日（花期後）：</em><br>
                    • 模型輸入：春季氣溫、降雨、花序數量<br>
                    • 初步預測：48噸 ± 12噸（誤差範圍25%）<br>
                    • <strong>置信度：60%</strong><br><br>
                    
                    <em>7月20日（轉色期）：</em><br>
                    • 新增輸入：果串數量、果實大小、疏果記錄<br>
                    • 修正預測：52噸 ± 6噸（誤差範圍11%）<br>
                    • <strong>置信度：82%</strong><br><br>
                    
                    <em>8月30日（採收前2週）：</em><br>
                    • 整合遙感數據：NDVI指數、熱成像<br>
                    • 最終預測：54噸 ± 2噸（誤差範圍4%）<br>
                    • <strong>置信度：95%</strong><br><br>
                    
                    <em>實際結果：</em> 53.2噸<br>
                    • <strong>預測誤差僅1.5%！</strong>提前2週準確預測產量，讓酒莊能及時調整物流和人力安排。</p>
                  </div>
                </div>
                
                <div class="model-approach">
                  <h5>機器學習算法</h5>
                  <p>• <strong>隨機森林：</strong>處理非線性關係和特徵交互<br>
                  • <strong>梯度提升（XGBoost）：</strong>提高預測精度和穩定性<br>
                  • <strong>神經網絡：</strong>學習複雜的非線性模式<br>
                  • <strong>集成方法：</strong>結合多個模型提高預測可靠性</p>
                  
                  <div class="example-box">
                    <h6>💡 算法選擇指南：</h6>
                    <p><strong>不同算法的實測表現（波爾多150個地塊數據）：</strong><br><br>
                    • <strong>線性回歸：</strong>R² = 0.65，速度快但精度低<br>
                    • <strong>隨機森林：</strong>R² = 0.84，平衡性能好，可解釋性強<br>
                    • <strong>XGBoost：</strong>R² = 0.89，精度最高，訓練時間適中 ⭐推薦<br>
                    • <strong>深度神經網絡：</strong>R² = 0.88，需要大量數據，訓練慢<br><br>
                    <strong>結論：</strong>對於中小規模數據（<10年歷史），XGBoost表現最佳！</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="model-category">
              <h4>🦠 病害預測模型</h4>
              <div class="disease-prediction">
                <div class="prediction-system">
                  <h5>早期預警系統</h5>
                  <p>• <strong>環境模型：</strong>基於溫濕度預測病害發生概率<br>
                  • <strong>圖像識別：</strong>自動識別葉片病斑和症狀<br>
                  • <strong>傳播模型：</strong>預測病害在田間的傳播路徑<br>
                  • <strong>風險評估：</strong>綜合評估不同地塊的病害風險</p>
                  
                  <div class="example-box">
                    <h6>💡 預警系統實戰：</h6>
                    <p><strong>2024年6月霜霉病預警案例：</strong><br><br>
                    <em>6月3日晚上：</em><br>
                    • 氣象預報：未來3天有降雨，溫度18-22°C<br>
                    • AI模型計算：霜霉病發生機率 <strong>78%</strong><br>
                    • 系統自動發送警報到酒莊管理者手機<br><br>
                    
                    <em>6月4日早晨：</em><br>
                    • 酒莊決策：提前噴灑保護性殺菌劑<br>
                    • 成本：每公頃€120<br><br>
                    
                    <em>6月8日：</em><br>
                    • 鄰近未預防的葡萄園：霜霉病感染率35%<br>
                    • 本園感染率：<strong>僅2%</strong><br>
                    • <strong>避免損失：</strong>估計每公頃€2,500（產量損失+品質下降）<br>
                    • <strong>投資回報率：20:1</strong></p>
                  </div>
                </div>
                
                <div class="prediction-system">
                  <h5>深度學習應用</h5>
                  <p>• <strong>卷積神經網絡（CNN）：</strong>分析葉片和果實的影像特徵<br>
                  • <strong>序列模型（LSTM）：</strong>分析時間序列的環境變化模式<br>
                  • <strong>注意力機制：</strong>關注影像中的關鍵診斷特徵<br>
                  • <strong>遷移學習：</strong>利用已訓練模型快速適應新病害</p>
                  
                  <div class="example-box">
                    <h6>💡 AI圖像識別效果：</h6>
                    <p><strong>葡萄病害自動診斷系統：</strong><br><br>
                    <em>訓練數據：</em><br>
                    • 50,000張標註的葡萄葉片圖像<br>
                    • 涵蓋10種常見病害和健康葉片<br><br>
                    
                    <em>模型性能：</em><br>
                    • <strong>整體準確率：94.3%</strong><br>
                    • 霜霉病識別：96.8%（早期症狀92.1%）<br>
                    • 白粉病識別：95.4%<br>
                    • 處理速度：每張圖片0.08秒<br><br>
                    
                    <em>實際應用：</em><br>
                    • 工人用手機拍照可疑葉片，即時獲得診斷<br>
                    • 無人機巡航拍攝，自動標記病害區域<br>
                    • <strong>診斷時間從1天縮短至1分鐘！</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        -->
      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🍇',
        title: '產量預測',
        content: '多階段預測模型，精準預測葡萄產量和採收時機'
      },
      {
        id: 2,
        icon: '🦠',
        title: '病害預警',
        content: 'AI圖像識別和深度學習實現病害早期預警'
      }
    ]
  },

  // 多源數據整合分析 - 第4部分：優化決策系統
  {
    type: 'content',
    title: '機器學習應用（二）：優化決策系統',
    content: `
      <div style="font-family:'Segoe UI',sans-serif;max-width:900px;margin:0 auto;padding:0 8px">
        <!-- Header -->
        <div style="background:linear-gradient(135deg,#7b341e 0%,#c05621 50%,#9c4221 100%);border-radius:12px;padding:18px 24px;margin-bottom:20px;color:#fff;display:flex;align-items:center;gap:12px">
          <span style="font-size:2.2rem">🎯</span>
          <div>
            <div style="font-size:1.2rem;font-weight:700;letter-spacing:.5px">機器學習應用（二）｜優化決策系統</div>
            <div style="font-size:.82rem;opacity:.85;margin-top:4px">預測告訴我們「會發生什麼」× 優化系統告訴我們「應該怎麼做」</div>
          </div>
        </div>

        <!-- Resource optimization + Winemaking optimization -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px">
          <!-- Resource -->
          <div style="background:#fff8f1;border:1.5px solid #ed8936;border-radius:10px;padding:16px">
            <div style="background:#c05621;color:#fff;border-radius:6px;padding:6px 12px;font-weight:700;font-size:.9rem;margin-bottom:12px;display:inline-block">🌱 資源配置優化</div>

            <div style="background:#fff;border-radius:8px;padding:12px;margin-bottom:10px;border-left:4px solid #ed8936">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">💧 精準灌溉優化</div>
              <div style="font-size:.82rem;line-height:1.7;color:#444">需水量模型 × 精確計算各發育期<br>水分平衡 × 降雨/蒸散發整合<br>適度水分脅迫 × 提高果實品質<br>排程優化 × 灌溉時間與頻率</div>
              <div style="background:#fff8f1;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#c05621;font-weight:700">💡 Pessac-Léognan 50公頃：</span><br>
                傳統：5,000m³/季 × 均勻灌溉 × 品質85分<br>
                AI優化：<span style="font-weight:700">3,200m³（節水36%）</span> × 品質 <span style="color:#276749;font-weight:700">88分（+3分）</span><br>
                <span style="color:#c53030;font-weight:700">→ 節水€1,800 + 品質提升€25,000/年</span>
              </div>
            </div>

            <div style="background:#fff;border-radius:8px;padding:12px;border-left:4px solid #f6ad55">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">🌿 變量施肥優化</div>
              <div style="font-size:.82rem;line-height:1.7;color:#444">土壤/植物分析 × 優化養分配比<br>最佳施肥時機確定<br>200細分區塊 × 個別化方案<br>最小化環境影響</div>
              <div style="background:#fff8f1;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#c05621;font-weight:700">💡 Saint-Julien 50公頃：</span><br>
                北側低肥：15kg N/公頃 × 南側高肥：35kg N/公頃<br>
                全園生長勢均勻度提升 <span style="font-weight:700">42%</span><br>
                <span style="color:#c53030;font-weight:700">→ 氮肥總用量減少 28% × 節省€8,500/年</span>
              </div>
            </div>
          </div>

          <!-- Winemaking -->
          <div style="background:#f5f3ff;border:1.5px solid #805ad5;border-radius:10px;padding:16px">
            <div style="background:#6b46c1;color:#fff;border-radius:6px;padding:6px 12px;font-weight:700;font-size:.9rem;margin-bottom:12px;display:inline-block">🏭 釀造工藝優化</div>

            <div style="background:#fff;border-radius:8px;padding:12px;margin-bottom:10px;border-left:4px solid #805ad5">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">🌡️ 發酵參數優化</div>
              <div style="font-size:.82rem;line-height:1.7;color:#444">每5分鐘測溫度/密度/酵母活性<br>預測未來2小時發酵進程<br>Merlot：26–28°C × Cab.Sauv：28–30°C<br>能耗優化 × 節能20–35%</div>
              <div style="background:#f5f3ff;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#553c9a;font-weight:700">💡 Château Palmer（同時發酵30批次）：</span><br>
                人工控制溫度波動：<span style="color:#c53030">±2.5°C</span><br>
                AI控制溫度波動：<span style="color:#276749;font-weight:700">±0.3°C</span><br>
                <span style="color:#c53030;font-weight:700">→ 發酵停滯風險降低85% × 年度品質一致性+35%</span>
              </div>
            </div>

            <div style="background:#fff;border-radius:8px;padding:12px;border-left:4px solid #9f7aea">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">🛢️ AI調配助手</div>
              <div style="font-size:.82rem;line-height:1.7;color:#444">分析28個地塊化學成分與感官特徵<br>1億+種組合 → 推薦最優10個方案<br>15年歷史調配數據訓練模型<br>預測陳年潛力與評分</div>
              <div style="background:#f5f3ff;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#553c9a;font-weight:700">💡 Pauillac一級酒莊2024：</span><br>
                AI推薦：地塊A 38% + 地塊E 25% + 地塊M 20%<br>
                酒莊長微調 → A調至40%<br>
                <span style="color:#c53030;font-weight:700">→ 實際評分：96分（Parker）✓</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Decision loop + stats -->
        <div style="background:linear-gradient(90deg,#7b341e,#c05621);border-radius:8px;padding:12px 16px;color:#fff">
          <div style="font-size:.78rem;text-align:center;margin-bottom:8px;opacity:.9;font-weight:700">數據驅動決策完整閉環</div>
          <div style="display:flex;align-items:center;gap:4px;font-size:.75rem;justify-content:center;flex-wrap:wrap;margin-bottom:10px">
            <div style="background:rgba(255,255,255,.18);border-radius:5px;padding:4px 10px">收集</div><span>→</span>
            <div style="background:rgba(255,255,255,.18);border-radius:5px;padding:4px 10px">處理</div><span>→</span>
            <div style="background:rgba(255,255,255,.18);border-radius:5px;padding:4px 10px">分析</div><span>→</span>
            <div style="background:rgba(255,255,255,.18);border-radius:5px;padding:4px 10px">預測</div><span>→</span>
            <div style="background:rgba(255,255,255,.18);border-radius:5px;padding:4px 10px">優化</div><span>→</span>
            <div style="background:rgba(255,255,255,.18);border-radius:5px;padding:4px 10px">執行</div><span>→</span>
            <div style="background:#f6e05e;color:#744210;border-radius:5px;padding:4px 10px;font-weight:700">反饋改進 ↺</div>
          </div>
          <div style="display:flex;gap:0;justify-content:space-around;font-size:.8rem;text-align:center">
            <div><div style="font-size:1.2rem;font-weight:700">36%</div><div style="opacity:.8">節水（Pessac-Léognan）</div></div>
            <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
            <div><div style="font-size:1.2rem;font-weight:700">28%</div><div style="opacity:.8">節肥（Saint-Julien）</div></div>
            <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
            <div><div style="font-size:1.2rem;font-weight:700">±0.3°C</div><div style="opacity:.8">AI溫控精度</div></div>
            <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
            <div><div style="font-size:1.2rem;font-weight:700">96分</div><div style="opacity:.8">AI調配 Parker評分</div></div>
          </div>
        </div>

        <!--ORIGINAL:
        <div class="optimization-systems">
          <h3>🎯 優化決策系統</h3>
          <p class="intro-text">預測告訴我們「會發生什麼」...</p>
          <div class="decision-optimization">
            <div class="optimization-area">
              <h4>資源配置優化</h4>
              <div class="resource-optimization">
                <div class="optimization-target">
                  <h5>💧 灌溉優化</h5>
                  <p>• <strong>需水量模型：</strong>精確計算不同發育期的需水量<br>
                  • <strong>水分平衡：</strong>考慮降雨、蒸散發的水分平衡模型<br>
                  • <strong>壓力管理：</strong>適度水分壓力提高果實品質<br>
                  • <strong>排程優化：</strong>優化灌溉時間和頻率安排</p>
                  <div class="example-box">
                    <h6>💡 精準灌溉案例：</h6>
                    <p><strong>Pessac-Léognan 產區50公頃葡萄園：</strong><br><br>
                    <em>傳統灌溉方式（2023年）：</em><br>
                    • 全園統一灌溉，每週固定時間<br>
                    • 總用水量：5,000立方米/季<br>
                    • 某些地塊過度灌溉，某些地塊缺水<br>
                    • 平均品質評分：85分<br><br>
                    
                    <em>AI優化灌溉（2024年）：</em><br>
                    • 根據土壤濕度傳感器、氣象預報、植物水分狀態<br>
                    • AI每日計算各地塊最佳灌溉量和時機<br>
                    • 總用水量：<strong>3,200立方米（減少36%）</strong><br>
                    • 平均品質評分：<strong>88分（提升3分）</strong><br><br>
                    
                    <strong>經濟效益：</strong><br>
                    • 節水成本：€1,800/年<br>
                    • 品質提升價值：€25,000/年（每瓶多賣€0.50）<br>
                    • 系統投資回收期：<strong>1.5年</strong></p>
                  </div>
                </div>
                
                <div class="optimization-target">
                  <h5>🌱 施肥優化</h5>
                  <p>• <strong>養分平衡：</strong>基於土壤和植物分析優化養分配比<br>
                  • <strong>時機選擇：</strong>確定最佳的施肥時機<br>
                  • <strong>變量施肥：</strong>根據田間變異進行變量施肥<br>
                  • <strong>環境友好：</strong>最小化環境影響的施肥方案</p>
                  
                  <div class="example-box">
                    <h6>💡 變量施肥實例：</h6>
                    <p><strong>Saint-Julien 列級酒莊的精準營養管理：</strong><br><br>
                    <em>問題診斷：</em><br>
                    • 葡萄園北側土壤有機質含量3.2%，南側僅1.8%<br>
                    • 傳統均勻施肥導致北側過肥、南側不足<br><br>
                    
                    <em>AI優化方案：</em><br>
                    • 將50公頃劃分為200個管理區塊<br>
                    • 根據土壤分析、葉片營養、生長勢制定個別化施肥方案<br>
                    • 北側低肥區：15kg N/公頃<br>
                    • 南側高肥區：35kg N/公頃<br><br>
                    
                    <em>實施結果：</em><br>
                    • 全園生長勢均勻度提升 <strong>42%</strong><br>
                    • 總氮肥用量減少 <strong>28%</strong>（環境效益）<br>
                    • 果實品質一致性提升，減少分級篩選工作<br>
                    • <strong>年度成本節省：€8,500 + 環境友好認證資格</strong></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="optimization-area">
              <h4>🏭 釀造工藝優化</h4>
              <div class="winemaking-optimization">
                <div class="optimization-process">
                  <h5>🌡️ 發酵參數優化</h5>
                  <p>• <strong>溫度控制：</strong>優化發酵溫度曲線<br>
                  • <strong>酵母選擇：</strong>根據目標風格選擇最適合的酵母<br>
                  • <strong>營養添加：</strong>優化酵母營養的添加時機和量<br>
                  • <strong>攪拌策略：</strong>優化發酵過程中的攪拌方案</p>
                  
                  <div class="example-box">
                    <h6>💡 發酵優化案例：</h6>
                    <p><strong>Château Palmer 的AI溫控系統：</strong><br><br>
                    <em>挑戰：</em><br>
                    • 同時發酵30個不同地塊的酒，需要個別化溫控<br>
                    • 人工調控容易出現延遲和誤差<br><br>
                    
                    <em>AI系統運作：</em><br>
                    • 每5分鐘測量溫度、密度、酵母活性<br>
                    • 預測未來2小時的發酵進程<br>
                    • 自動調控冷卻系統，維持最佳溫度曲線<br>
                    • 針對不同葡萄設定不同溫度策略<br><br>
                    
                    <em>最佳化目標：</em><br>
                    • Merlot：26-28°C（保留果香）<br>
                    • Cabernet Sauvignon：28-30°C（提取單寧）<br><br>
                    
                    <em>效果對比：</em><br>
                    • 人工控制：溫度波動±2.5°C<br>
                    • AI控制：溫度波動±0.3°C<br>
                    • 發酵停滯風險降低 <strong>85%</strong><br>
                    • 年度間品質一致性提升 <strong>35%</strong></p>
                  </div>
                </div>
                
                <div class="optimization-process">
                  <h5>🛢️ 陳年策略優化</h5>
                  <p>• <strong>橡木桶選擇：</strong>基於葡萄特性選擇橡木桶類型<br>
                  • <strong>陳年時間：</strong>預測最佳的陳年時間<br>
                  • <strong>調配比例：</strong>優化不同批次的調配比例<br>
                  • <strong>品質預測：</strong>預測陳年後的品質發展</p>
                  
                  <div class="example-box">
                    <h6>💡 智能調配系統：</h6>
                    <p><strong>Pauillac一級酒莊的AI調配助手：</strong><br><br>
                    <em>調配任務：</em><br>
                    • 正牌酒目標：95分以上，風格平衡優雅<br>
                    • 可用原酒：28個不同地塊的酒<br>
                    • 可能組合：超過1億種！<br><br>
                    
                    <em>AI系統運作：</em><br>
                    • 分析每桶酒的化學成分和感官特徵<br>
                    • 利用過去15年的調配數據訓練模型<br>
                    • 預測不同配方的品質和陳年潛力<br>
                    • 推薦前10個最優配方<br><br>
                    
                    <em>2024年實例：</em><br>
                    <strong>AI推薦配方：</strong><br>
                    • 地塊A（高地礫石）：38%<br>
                    • 地塊E（深層黏土）：25%<br>
                    • 地塊M（河流露台）：20%<br>
                    • 其他5個地塊：17%<br>
                    • 預測評分：95-97分<br><br>
                    
                    <strong>酒莊長調整後配方：</strong><br>
                    • 採納AI建議，微調地塊A比例至40%<br>
                    • <strong>實際評分：96分（Parker）✓</strong><br><br>
                    
                    酒莊長評價：「AI找到了我可能忽略的最佳組合，但最終決策仍需要人的經驗和直覺。」</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="integration-summary">
            <h4>🎯 數據驅動決策的完整閉環</h4>
            <div class="decision-loop">
              <p><strong>1. 收集 →</strong> 多源數據整合（內部+外部）<br>
              <strong>2. 處理 →</strong> 清洗、轉換、特徵工程<br>
              <strong>3. 分析 →</strong> 探索數據規律和相關性<br>
              <strong>4. 預測 →</strong> 機器學習預測未來趨勢<br>
              <strong>5. 優化 →</strong> AI推薦最佳決策方案<br>
              <strong>6. 執行 →</strong> 實施優化方案<br>
              <strong>7. 反饋 →</strong> 收集新數據，不斷改進模型</p>
              
              <p class="highlight-text"><strong>💡 關鍵洞察：</strong>數據分析不是終點，而是不斷迭代改進的循環過程。每一次決策的結果都會成為下一次優化的依據。</p>
            </div>
          </div>
        </div>
      </div>
        -->
      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '💧',
        title: '資源優化',
        content: '智能優化灌溉和施肥，提高資源利用效率'
      },
      {
        id: 2,
        icon: '🏭',
        title: '工藝優化',
        content: 'AI優化發酵參數和陳年策略，提升酒質穩定性'
      }
    ],
    hasMap: false,
    interactiveElements: [
      {
        type: 'ml-model-simulator',
        title: '機器學習模型模擬器',
        data: {
          models: ['產量預測', '病害預測', '品質預測', '成本優化'],
          algorithms: ['隨機森林', '神經網絡', '梯度提升', '深度學習'],
          metrics: ['準確率', '召回率', 'F1分數', 'ROC-AUC']
        }
      }
    ]
  },

  // 第二章知識檢測
  {
    type: 'interactive-quiz',
    title: '第二章知識檢測：大數據分析與機器學習',
    questions: [
      {
        id: 1,
        question: '物聯網感測器網絡的核心價值是什麼？',
        options: [
          '完全替代人工管理',
          '提供24/7連續監測，實現數據驅動決策',
          '只用於記錄溫度',
          '降低葡萄酒價格'
        ],
        correct: 1,
        explanation: '物聯網感測器通過24小時不間斷監測氣象、土壤、植株等多維度數據，配合AI分析，實現從「經驗決策」到「數據驅動決策」的轉變。'
      },
      {
        id: 2,
        question: '大數據分析能夠提前多久精準預測產量？',
        options: [
          '採收前1週',
          '採收前3-6個月',
          '無法預測',
          '需要等到採收後'
        ],
        correct: 1,
        explanation: '通過整合衛星NDVI、氣象數據、土壤監測等多源數據，機器學習模型可以在採收前3-6個月就達到95%+準確率的產量預測。'
      }
    ]
  },

  // 第三章：人工智能在釀造中的應用
  {
    type: 'chapter-divider',
    chapter: '3',
    title: '人工智能在釀造中的應用',
    subtitle: '智能化釀造工藝革命',
    icon: '🧠',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },

  // AI發酵管理系統（一）：智能溫度控制
  {
    type: 'content',
    title: 'AI發酵管理系統（一）：智能溫度控制',
    content: `
      <div style="font-family:'Segoe UI',sans-serif;max-width:900px;margin:0 auto;padding:0 8px">
        <!-- Header -->
        <div style="background:linear-gradient(135deg,#134e4a 0%,#0f766e 50%,#115e59 100%);border-radius:12px;padding:18px 24px;margin-bottom:20px;color:#fff;display:flex;align-items:center;gap:12px">
          <span style="font-size:2.2rem">🌡️</span>
          <div>
            <div style="font-size:1.2rem;font-weight:700;letter-spacing:.5px">AI發酵管理系統（一）｜智能溫度控制</div>
            <div style="font-size:.82rem;opacity:.85;margin-top:4px">差1°C決定優雅還是粗糙 × AI精準到 ±0.2°C × 32個罐同步協調</div>
          </div>
        </div>

        <!-- Two columns -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px">
          <!-- Adaptive control -->
          <div style="background:#f0fdfa;border:1.5px solid #0d9488;border-radius:10px;padding:16px">
            <div style="background:#0f766e;color:#fff;border-radius:6px;padding:6px 12px;font-weight:700;font-size:.9rem;margin-bottom:12px;display:inline-block">🎯 自適應溫控策略</div>

            <div style="background:#fff;border-radius:8px;padding:12px;margin-bottom:10px;border-left:4px solid #0d9488">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">🧬 品種專屬曲線</div>
              <table style="width:100%;font-size:.78rem;border-collapse:collapse">
                <tr style="background:#f0fdfa"><th style="padding:4px 6px;text-align:left">品種</th><th style="padding:4px 6px;text-align:center">溫度範圍</th><th style="padding:4px 6px;text-align:left">目標</th></tr>
                <tr><td style="padding:3px 6px">Cab. Sauvignon</td><td style="padding:3px 6px;text-align:center">28–30°C</td><td style="padding:3px 6px">萃取單寧</td></tr>
                <tr style="background:#f0fdfa"><td style="padding:3px 6px">Merlot</td><td style="padding:3px 6px;text-align:center">26–28°C</td><td style="padding:3px 6px">保留果香</td></tr>
                <tr><td style="padding:3px 6px">Cab. Franc</td><td style="padding:3px 6px;text-align:center">25–27°C</td><td style="padding:3px 6px">突顯草本</td></tr>
                <tr style="background:#f0fdfa"><td style="padding:3px 6px">Petit Verdot</td><td style="padding:3px 6px;text-align:center">29–31°C</td><td style="padding:3px 6px">萃取色素</td></tr>
              </table>
              <div style="background:#f0fdfa;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#0f766e;font-weight:700">💡 Pichon-Longueville Merlot 2024：</span><br>
                傳統固定曲線 → 中期發酵過快，香氣損失<br>
                AI自適應：每階段動態調整 ±0.5°C<br>
                <span style="color:#c53030;font-weight:700">→ 香氣保留 78% ➜ 91% × 評分87→90分 × 節能28%</span>
              </div>
            </div>

            <div style="background:#fff;border-radius:8px;padding:12px;border-left:4px solid #2dd4bf">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">🔮 預測控制機制</div>
              <div style="font-size:.82rem;line-height:1.7;color:#444">提前2–4小時預測發酵進程<br>智能學習 × 自動調整溫度曲線<br>根據酵母活性即時響應<br>在保證品質前提下節能20–35%</div>
            </div>
          </div>

          <!-- Multi-tank + predictive maintenance -->
          <div style="background:#f0f9ff;border:1.5px solid #0284c7;border-radius:10px;padding:16px">
            <div style="background:#0369a1;color:#fff;border-radius:6px;padding:6px 12px;font-weight:700;font-size:.9rem;margin-bottom:12px;display:inline-block">🏭 多罐協調與預防維護</div>

            <div style="background:#fff;border-radius:8px;padding:12px;margin-bottom:10px;border-left:4px solid #0284c7">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">⚡ 32罐極限協調（Saint-Julien 2024）</div>
              <div style="font-size:.8rem;line-height:1.6;color:#444">
                <div style="display:flex;gap:4px;align-items:flex-start;margin-bottom:3px"><span style="background:#dbeafe;color:#1e40af;border-radius:3px;padding:1px 5px;font-weight:700;white-space:nowrap">P1正牌(8罐)</span><span>目標溫度 ±0.2°C 保證</span></div>
                <div style="display:flex;gap:4px;align-items:flex-start;margin-bottom:3px"><span style="background:#dbeafe;color:#1e40af;border-radius:3px;padding:1px 5px;font-weight:700;white-space:nowrap">P2副牌(15罐)</span><span>目標溫度 ±0.5°C 保證</span></div>
                <div style="display:flex;gap:4px;align-items:flex-start;margin-bottom:3px"><span style="background:#dbeafe;color:#1e40af;border-radius:3px;padding:1px 5px;font-weight:700;white-space:nowrap">P3入門(9罐)</span><span>目標溫度 ±1.0°C 保證</span></div>
              </div>
              <div style="background:#f0f9ff;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                冷卻機故障（損失40kW）→ AI 5秒重新分配<br>
                P1維持不變 × 40分鐘後機組修復<br>
                <span style="color:#c53030;font-weight:700">→ 32罐全部成功 × 能耗−32% × 利用率65→89%</span>
              </div>
            </div>

            <div style="background:#fff;border-radius:8px;padding:12px;border-left:4px solid #38bdf8">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">🔧 預測性維護（Pauillac 2024）</div>
              <div style="font-size:.8rem;line-height:1.6;color:#444">8/15 震動異常 → 8/18 能耗+8% → 8/20 AI警報<br>預計5–7天內故障，可靠度 <span style="font-weight:700">92%</span><br>
              技師確認後智能排程：8/24晚維修（僅3罐需冷卻）</div>
              <div style="background:#f0f9ff;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                維修成本：€2,800 × 若採收高峰故障：€120,000<br>
                <span style="color:#c53030;font-weight:700">→ ROI 43倍 × 預測準確度92%→97% × 1年預防11次故障</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats bar -->
        <div style="background:linear-gradient(90deg,#134e4a,#0f766e);border-radius:8px;padding:12px 18px;display:flex;gap:0;justify-content:space-around;color:#fff;font-size:.82rem;text-align:center">
          <div><div style="font-size:1.4rem;font-weight:700">±0.2°C</div><div style="opacity:.85">P1正牌溫控精度</div></div>
          <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
          <div><div style="font-size:1.4rem;font-weight:700">−32%</div><div style="opacity:.85">32罐協調節能</div></div>
          <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
          <div><div style="font-size:1.4rem;font-weight:700">+13%</div><div style="opacity:.85">香氣保留提升</div></div>
          <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
          <div><div style="font-size:1.4rem;font-weight:700">ROI 43×</div><div style="opacity:.85">預測維護回報</div></div>
        </div>

        <!--ORIGINAL:
        <div class="ai-winemaking">
          <h3>🌡️ 智能溫度控制系統</h3>
          <p class="intro-text">發酵溫度是釀酒品質的「生命線」——差1°C就可能決定一瓶酒是優雅還是粗糙。</p>
          
          <div class="intelligent-control">
            <div class="control-system">
              <h4>🎯 動態溫度曲線控制</h4>
              <div class="temperature-control">
                <div class="control-feature">
                  <h5>自適應控制系統</h5>
                  <p>• <strong>智能學習：</strong>根據發酵進度自動調整溫度曲線<br>
                  • <strong>品種識別：</strong>針對不同葡萄品種優化溫度策略<br>
                  • <strong>預測控制：</strong>提前2-4小時預測發酵進程並調整溫度<br>
                  • <strong>能耗優化：</strong>在保證品質前提下節能20-35%</p>
                  
                  <div class="example-box">
                    <h6>💡 自適應控制實例：</h6>
                    <p><strong>Château Pichon-Longueville 的Merlot發酵控制（2024年）：</strong><br><br>
                    <em>傳統固定溫度曲線問題：</em><br>
                    • 初期26°C恆溫7天 → 中期28°C恆溫5天<br>
                    • 不考慮實際發酵速度和酵母活性<br>
                    • 2023年出現中期發酵過快，香氣損失<br><br>
                    
                    <em>AI自適應溫控（2024年改進）：</em><br>
                    • <strong>第1-3天</strong>：監測到酵母活性旺盛，AI維持25.5°C（比預設低0.5°C）<br>
                    • <strong>第4-5天</strong>：檢測到發酵速度適中，逐步提升至26.8°C<br>
                    • <strong>第6-8天</strong>：感知糖分消耗加速，AI提前降溫至26.2°C保護香氣<br>
                    • <strong>第9-12天</strong>：根據殘糖量動態調整27.0-28.5°C之間<br><br>
                    
                    <strong>對比結果：</strong><br>
                    • 香氣保留度：從78%提升到 <strong>91%</strong><br>
                    • 發酵均勻性：時間波動從±1.5天縮小到 <strong>±0.3天</strong><br>
                    • 能源消耗：減少 <strong>28%</strong>（避免過度冷卻）<br>
                    • 品鑑評分：從87分提升到 <strong>90分</strong></p>
                  </div>
                </div>
                
                <div class="control-feature">
                  <h5>品種專屬溫控策略</h5>
                  <p>• <strong>Cabernet Sauvignon：</strong>28-30°C高溫萃取單寧<br>
                  • <strong>Merlot：</strong>26-28°C保留柔美果香<br>
                  • <strong>Cabernet Franc：</strong>25-27°C突顯草本香氣<br>
                  • <strong>Petit Verdot：</strong>29-31°C充分萃取色素和結構</p>
                  
                  <div class="example-box">
                    <h6>💡 品種溫控數據庫：</h6>
                    <p><strong>Margaux產區混釀的精密溫控方案：</strong><br><br>
                    一個酒窖同時發酵5個品種，AI系統為每個罐制定專屬曲線：<br><br>
                    
                    <strong>罐#1 - Cabernet Sauvignon (60% 正牌酒主力)：</strong><br>
                    • 階段1（第1-4天）：27.5°C 緩慢啟動<br>
                    • 階段2（第5-9天）：29.2°C 萃取單寧高峰<br>
                    • 階段3（第10-14天）：28.0°C 平衡收尾<br>
                    • 冷卻優先級：<strong>最高</strong>（保證正牌酒品質）<br><br>
                    
                    <strong>罐#2 - Merlot (35% 柔美風格)：</strong><br>
                    • 階段1（第1-3天）：25.8°C 保護果香<br>
                    • 階段2（第4-8天）：27.0°C 適度萃取<br>
                    • 階段3（第9-12天）：26.5°C 柔和收尾<br>
                    • 冷卻優先級：<strong>高</strong><br><br>
                    
                    <strong>罐#3 - Cabernet Franc (3% 香氣複雜度)：</strong><br>
                    • 全程維持：26.0-27.5°C（避免草本味過重）<br>
                    • 冷卻優先級：<strong>中</strong><br><br>
                    
                    <strong>罐#4 - Petit Verdot (2% 色素和結構)：</strong><br>
                    • 全程高溫：29.5-31.0°C（最大化萃取）<br>
                    • 冷卻優先級：<strong>低</strong>（允許自然升溫）<br><br>
                    
                    <strong>系統智能協調：</strong><br>
                    • 冷卻系統總容量：80kW<br>
                    • AI動態分配：Cab Sauv 40kW，Merlot 25kW，其他15kW<br>
                    • 夜間自動切換：利用環境低溫，減少50%能耗<br>
                    • <strong>結果：5個罐同時達到最佳狀態，混釀品質創10年新高</strong></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="control-system">
              <h4>🏭 多罐協調控制系統</h4>
              <div class="multi-tank-control">
                <div class="control-feature">
                  <h5>全局優化策略</h5>
                  <p>• <strong>資源調度：</strong>協調20-50個發酵罐的溫度控制需求<br>
                  • <strong>負載平衡：</strong>智能分配冷卻系統負載，避免過載<br>
                  • <strong>故障冗餘：</strong>設備故障時自動切換備用系統<br>
                  • <strong>優先級管理：</strong>根據酒款等級動態分配冷卻資源</p>
                  
                  <div class="example-box">
                    <h6>💡 協調控制實戰：</h6>
                    <p><strong>Saint-Julien大型酒莊的極限挑戰（2024年9月）：</strong><br><br>
                    <em>背景：</em><br>
                    • 酒窖有32個發酵罐同時運行<br>
                    • 冷卻系統總容量：150kW<br>
                    • 9月熱浪來襲，環境溫度達35°C<br>
                    • 傳統人工調度完全無法應對<br><br>
                    
                    <em>AI協調系統運作：</em><br><br>
                    <strong>優先級分級：</strong><br>
                    • P1（正牌酒，8個罐）：保證目標溫度 ±0.2°C<br>
                    • P2（副牌酒，15個罐）：保證目標溫度 ±0.5°C<br>
                    • P3（入門款，9個罐）：保證目標溫度 ±1.0°C<br><br>
                    
                    <strong>動態調度策略：</strong><br>
                    • 早上6-10點（環境涼爽）：優先為P3罐降溫儲備冷量<br>
                    • 中午11-15點（高溫時段）：80%冷量分配給P1+P2罐<br>
                    • 下午16-20點（發酵高峰）：全力保障P1罐<br>
                    • 夜間21-5點：利用環境降溫，系統只開50%功率<br><br>
                    
                    <strong>實時監控調整：</strong><br>
                    • AI每30秒重新計算所有罐的冷卻需求<br>
                    • 罐#7（P1）溫度上升過快 → 立即增加20%冷量<br>
                    • 罐#23（P3）溫度穩定 → 冷量臨時轉移給其他罐<br>
                    • 預測未來2小時需求 → 提前調配冷卻資源<br><br>
                    
                    <strong>危機處理案例：</strong><br>
                    • 下午2點，冷卻機組#2突然故障（損失40kW容量）<br>
                    • AI在5秒內重新分配：<br>
                    &nbsp;&nbsp;- P1罐維持不變（犧牲部分P3罐冷量）<br>
                    &nbsp;&nbsp;- P2罐允許短時超溫0.8°C（20分鐘內）<br>
                    &nbsp;&nbsp;- P3罐#28-32暫停冷卻30分鐘<br>
                    &nbsp;&nbsp;- 自動通知維修團隊和酒窖主任<br>
                    • 40分鐘後機組修復，AI自動恢復正常調度<br><br>
                    
                    <strong>最終結果：</strong><br>
                    • 32個罐全部發酵成功，無一損失<br>
                    • P1罐平均溫度偏差：<strong>0.15°C</strong>（優於目標）<br>
                    • 總能耗比傳統方式降低 <strong>32%</strong><br>
                    • 冷卻系統利用率：從65%提升到 <strong>89%</strong><br>
                    • 酒莊主任：「沒有AI，我們至少會損失3-5罐酒」</p>
                  </div>
                </div>
                
                <div class="control-feature">
                  <h5>預測性維護系統</h5>
                  <p>• <strong>設備健康監測：</strong>實時監控冷卻系統運行狀態<br>
                  • <strong>故障預測：</strong>提前3-7天預測設備可能故障<br>
                  • <strong>預防性維修：</strong>在非關鍵時段安排維護<br>
                  • <strong>備件管理：</strong>智能預測並管理備件庫存</p>
                  
                  <div class="example-box">
                    <h6>💡 預測維護成功案例：</h6>
                    <p><strong>Pauillac一級莊的設備保護（2024年8月）：</strong><br><br>
                    <em>AI監測發現異常：</em><br>
                    • 8月15日：冷卻泵#3震動頻率異常增加3%<br>
                    • 8月18日：能耗比正常高8%<br>
                    • 8月20日：AI警報：「冷卻泵#3軸承磨損，預計5-7天內故障」<br>
                    • 可靠度評估：<strong>92%</strong><br><br>
                    
                    <em>人工確認：</em><br>
                    • 技師檢查：軸承確實有磨損跡象<br>
                    • 若故障發生：影響12個發酵罐（含4個正牌酒罐）<br>
                    • 採收高峰期間更換需停機8小時，損失巨大<br><br>
                    
                    <em>智能維護方案：</em><br>
                    • AI建議：8月24日晚上執行維護（當時只有3個罐需要冷卻）<br>
                    • 提前準備備件：軸承、密封圈、潤滑油<br>
                    • AI調整其他泵負載，確保3個罐正常冷卻<br>
                    • 實際維修時間：6小時（無影響生產）<br><br>
                    
                    <strong>避免損失：</strong><br>
                    • 若在採收高峰故障，估計損失：<strong>€120,000</strong><br>
                    • 預防性維護成本：<strong>€2,800</strong><br>
                    • <strong>投資回報率：43倍</strong><br><br>
                    
                    <strong>系統學習成果：</strong><br>
                    • AI記錄此次故障模式<br>
                    • 更新全部6個冷卻泵的監測參數<br>
                    • 預測準確度從92%提升到 <strong>97%</strong><br>
                    • 過去1年成功預測並預防了11次潛在故障</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="benefits-summary">
              <h4>🎯 智能溫控系統的核心價值</h4>
              <div class="value-metrics">
                <p><strong>品質提升：</strong><br>
                • 發酵溫度精確度：從 ±1.5°C 提升至 <strong>±0.2°C</strong><br>
                • 批次間一致性：提升 <strong>45%</strong><br>
                • 香氣保留度：提高 <strong>15-25%</strong><br><br>
                
                <strong>效率優化：</strong><br>
                • 能源消耗：降低 <strong>25-35%</strong><br>
                • 人工監控時間：減少 <strong>80%</strong><br>
                • 發酵週期可預測性：提升 <strong>90%</strong><br><br>
                
                <strong>風險管理：</strong><br>
                • 發酵事故率：降低 <strong>85%</strong><br>
                • 設備故障預防：<strong>95%</strong> 的故障被提前發現<br>
                • 品質波動：減少 <strong>60%</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
        -->
      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🌡️',
        title: '精準溫控',
        content: 'AI實現±0.2°C的超精密溫度控制，保護香氣和品質'
      },
      {
        id: 2,
        icon: '🏭',
        title: '智能調度',
        content: '32個發酵罐協調控制，能耗降低32%，品質一致性提升45%'
      }
    ]
  },

  // AI發酵管理系統（二）：發酵過程監控
  {
    type: 'content',
    title: 'AI發酵管理系統（二）：發酵過程監控',
    content: `
      <div style="font-family:'Segoe UI',sans-serif;max-width:900px;margin:0 auto;padding:0 8px">
        <!-- Header -->
        <div style="background:linear-gradient(135deg,#1e3a5f 0%,#1d4ed8 50%,#1e40af 100%);border-radius:12px;padding:18px 24px;margin-bottom:20px;color:#fff;display:flex;align-items:center;gap:12px">
          <span style="font-size:2.2rem">⚗️</span>
          <div>
            <div style="font-size:1.2rem;font-weight:700;letter-spacing:.5px">AI發酵管理系統（二）｜發酵過程監控</div>
            <div style="font-size:.82rem;opacity:.85;margin-top:4px">每天24次 → 28,800次 × 異常檢測從6小時縮短到5分鐘 × 24/7守護</div>
          </div>
        </div>

        <!-- Two columns: real-time + anomaly -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px">
          <!-- Real-time monitoring -->
          <div style="background:#eff6ff;border:1.5px solid #3b82f6;border-radius:10px;padding:16px">
            <div style="background:#1d4ed8;color:#fff;border-radius:6px;padding:6px 12px;font-weight:700;font-size:.9rem;margin-bottom:12px;display:inline-block">📊 即時參數追蹤</div>

            <div style="background:#fff;border-radius:8px;padding:12px;margin-bottom:10px;border-left:4px solid #3b82f6">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">🔬 核心發酵參數（每5分鐘）</div>
              <div style="font-size:.82rem;line-height:1.7;color:#444">密度監測 × 追蹤糖分轉化进程<br>pH值控制 × 自動調節酸度<br>CO₂產生速率 × 評估酵母活力<br>酒精濃度 × 連續預測監控</div>
              <div style="background:#eff6ff;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#1d4ed8;font-weight:700">💡 Château Haut-Brion 2024 Cab.Sauv：</span><br>
                傳統：每天2次手工測 → 夜間異常10小時後才發現<br>
                損失€18,000（降副牌）<br>
                AI：凌晨2:15密度加速 → <span style="font-weight:700">15分鐘內預警+自動冷卻</span><br>
                <span style="color:#c53030;font-weight:700">→ 全程3,456數據點 × 評分89→94分</span>
              </div>
            </div>

            <div style="background:#fff;border-radius:8px;padding:12px;border-left:4px solid #60a5fa">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">🧪 MLF生化參數監控</div>
              <div style="font-size:.82rem;line-height:1.7;color:#444">乳酸菌活性 × MLF進程監測<br>揮發酸控制 × 追蹤醋酸含量<br>氧化還原電位 × 微生物活動<br>酚類物質 × 單寧/色素萃取</div>
              <div style="background:#eff6ff;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#1d4ed8;font-weight:700">💡 Saint-Émilion MLF危機（2024/11）：</span><br>
                揮發酸晚9:30突升至0.45 g/L → AI高級警報<br>
                預測24小時超標（>0.8上限）→ 立即降溫+SO₂<br>
                <span style="color:#c53030;font-weight:700">→ 穩定在0.48 g/L × 避免損失€64,000 × 評分91分</span>
              </div>
            </div>
          </div>

          <!-- Anomaly detection -->
          <div style="background:#fef9ec;border:1.5px solid #d97706;border-radius:10px;padding:16px">
            <div style="background:#b45309;color:#fff;border-radius:6px;padding:6px 12px;font-weight:700;font-size:.9rem;margin-bottom:12px;display:inline-block">🚨 智能異常檢測預警</div>

            <div style="background:#fff;border-radius:8px;padding:12px;margin-bottom:10px;border-left:4px solid #d97706">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">🛑 發酵停滯預警（Pessac-Léognan 2024）</div>
              <div style="font-size:.8rem;line-height:1.6;color:#444">
                <div style="display:flex;gap:4px;align-items:flex-start;margin-bottom:3px"><span style="background:#fef3c7;color:#92400e;border-radius:3px;padding:1px 6px;font-weight:700;white-space:nowrap">Day4 🟡</span><span>速率−12% → 黃色警報，觀察24H</span></div>
                <div style="display:flex;gap:4px;align-items:flex-start;margin-bottom:3px"><span style="background:#fde68a;color:#78350f;border-radius:3px;padding:1px 6px;font-weight:700;white-space:nowrap">Day5 🟠</span><span>速率−40%，CO₂驟降 → 停滯風險65%</span></div>
                <div style="display:flex;gap:4px;align-items:flex-start;margin-bottom:3px"><span style="background:#d1fae5;color:#065f46;border-radius:3px;padding:1px 6px;font-weight:700;white-space:nowrap">Day6 🟢</span><span>添加營養劑+降溫 → 發酵恢復</span></div>
              </div>
              <div style="background:#fef9ec;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#b45309;font-weight:700">→ 本季16罐預測4次風險，全部成功救回</span><br>
                <span style="color:#c53030;font-weight:700">避免損失 €95,000 × 提前2.5天預警</span>
              </div>
            </div>

            <div style="background:#fff;border-radius:8px;padding:12px;border-left:4px solid #f59e0b">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:6px">🦠 Brett污染早期檢測（Pauillac 2024）</div>
              <div style="font-size:.82rem;line-height:1.7;color:#444">光譜技術識別微生物污染<br>代謝產物異常訊號偵測<br>污染模式匹配比對<br>來源追蹤與傳播路徑</div>
              <div style="background:#fef9ec;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#b45309;font-weight:700">💡 4-ethylphenol = 120 μg/L（閾值30%）即預警</span><br>
                傳統：裝瓶前才發現（已太遲）<br>
                AI：污染初期即精準識別，立即處理<br>
                <span style="color:#c53030;font-weight:700">→ 避免損失 12,000L × €12/L = €144,000</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats bar -->
        <div style="background:linear-gradient(90deg,#1e3a5f,#1d4ed8);border-radius:8px;padding:12px 18px;display:flex;gap:0;justify-content:space-around;color:#fff;font-size:.82rem;text-align:center">
          <div><div style="font-size:1.4rem;font-weight:700">28,800</div><div style="opacity:.85">數據點/天（傳統24次）</div></div>
          <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
          <div><div style="font-size:1.4rem;font-weight:700">5分鐘</div><div style="opacity:.85">異常檢測（傳統6小時）</div></div>
          <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
          <div><div style="font-size:1.4rem;font-weight:700">€144,000</div><div style="opacity:.85">Brett污染避免損失</div></div>
          <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
          <div><div style="font-size:1.4rem;font-weight:700">−92%</div><div style="opacity:.85">發酵事故率</div></div>
        </div>

        <!--ORIGINAL:
        <div class="fermentation-monitoring-system">
          <h3>⚗️ 智能發酵過程監控系統</h3>
          <p class="intro-text">如果說溫度控制是「方向盤」...</p>
                    
                    <strong>第1-36小時（啟動期）：</strong><br>
                    • 密度變化：1.092 → 1.088（緩慢下降）<br>
                    • AI判斷：酵母適應期，正常<br>
                    • CO₂產生：0.5-1.2 L/min（平穩）<br><br>
                    
                    <strong>第37小時突發事件：</strong><br>
                    • 凌晨2:15：密度突然加速下降（0.004/小時 → 0.007/小時）<br>
                    • AI立即分析：酵母進入旺盛期，發熱將急劇增加<br>
                    • <strong>預警發送：</strong>系統自動發送警報到酒窖主任手機<br>
                    • <strong>自動應對：</strong>AI提前啟動冷卻，溫度從27.2°C降至26.5°C<br>
                    • CO₂產生速率：從1.2飆升到3.8 L/min<br><br>
                    
                    <strong>第48-120小時（旺盛期）：</strong><br>
                    • 密度快速下降：1.084 → 1.020（平均0.0005/分鐘）<br>
                    • AI動態調整冷卻：保持26.5-27.8°C精密控制<br>
                    • CO₂產生高峰：4.5 L/min（第72小時）<br>
                    • 系統預測：「預計第135小時進入收尾期」<br><br>
                    
                    <strong>第128小時異常檢測：</strong><br>
                    • 密度：1.008，但下降速率突然減緩<br>
                    • AI警報：「發酵速度低於預期30%，可能進入停滯」<br>
                    • 原因分析：酵母營養不足<br>
                    • <strong>建議行動：</strong>「添加酵母營養劑15g，攪拌10分鐘」<br>
                    • 酒窖師執行後，1小時內發酵恢復正常<br><br>
                    
                    <strong>第140-288小時（收尾期）：</strong><br>
                    • 密度緩慢下降：1.005 → 0.994<br>
                    • AI建議：逐步降溫至24°C促進完全發酵<br>
                    • 最終殘糖：1.8 g/L（完美乾型）<br><br>
                    
                    <strong>監控成果對比：</strong><br>
                    • 數據點數：傳統24次 vs AI監控 <strong>3,456次</strong><br>
                    • 異常檢測時間：傳統6小時後 vs AI <strong>15分鐘內</strong><br>
                    • 發酵時間精準度：傳統±18小時 vs AI <strong>±2小時</strong><br>
                    • 香氣保留：提升 <strong>18%</strong><br>
                    • 該罐評分：<strong>94分</strong>（2023年同批次89分）</p>
                  </div>
                </div>
                
                <div class="tracking-category">
                  <h5>生化參數智能分析</h5>
                  <p>• <strong>乳酸菌活性：</strong>監測蘋果酸-乳酸發酵進程<br>
                  • <strong>揮發酸控制：</strong>實時追蹤醋酸等揮發酸含量<br>
                  • <strong>氧化還原電位：</strong>監控氧化狀態和微生物活動<br>
                  • <strong>酚類物質：</strong>追蹤單寧和色素的萃取動態</p>
                  
                  <div class="example-box">
                    <h6>💡 生化參數監控救援案例：</h6>
                    <p><strong>Saint-Émilion Grand Cru的蘋果酸-乳酸發酵監控（2024年11月）：</strong><br><br>
                    <em>挑戰：</em><br>
                    • MLF（蘋果酸-乳酸發酵）是紅酒的第二次發酵<br>
                    • 傳統監測依賴每週一次的色層分析<br>
                    • 發酵停滯或過度都會毀掉一罐酒<br><br>
                    
                    <em>AI連續監測系統：</em><br><br>
                    <strong>罐#18（8,000L Merlot）MLF進程：</strong><br><br>
                    <strong>第1-7天：</strong><br>
                    • 蘋果酸起始濃度：2.8 g/L<br>
                    • pH值：3.52<br>
                    • AI監測：乳酸菌適應期，每日下降0.1 g/L<br>
                    • 系統評估：「進展正常」<br><br>
                    
                    <strong>第8天晚上異常檢測：</strong><br>
                    • 時間：晚上9:30<br>
                    • 蘋果酸：2.1 g/L（正常）<br>
                    • 揮發酸：0.32 g/L → 突然升至0.45 g/L<br>
                    • <strong>AI警報等級：高</strong><br>
                    • 診斷：「乳酸菌過度活躍，正在產生過量醋酸」<br>
                    • 風險：「若不處理，24小時內揮發酸將超標（>0.8 g/L）」<br><br>
                    
                    <strong>緊急應對（晚上10:00）：</strong><br>
                    • AI建議：「立即降溫至12°C，添加SO₂ 30mg/L抑制乳酸菌」<br>
                    • 酒窖師確認執行<br>
                    • 系統每30分鐘測量揮發酸<br><br>
                    
                    <strong>危機解除（第9天凌晨2:00）：</strong><br>
                    • 揮發酸穩定在0.48 g/L（未繼續上升）<br>
                    • 蘋果酸：2.0 g/L<br>
                    • MLF被安全中止在適當時機<br><br>
                    
                    <strong>第10天評估：</strong><br>
                    • 蘋果酸殘留：1.95 g/L（保留適度的清爽酸度）<br>
                    • 揮發酸：0.47 g/L（遠低於0.8的上限）<br>
                    • pH：3.58（理想範圍）<br>
                    • 酒款風格：清新優雅，酸度平衡<br><br>
                    
                    <strong>事後分析：</strong><br>
                    • 若使用傳統週監測：第15天才會發現（已無法挽救）<br>
                    • 預估損失：8,000L × €8/L = <strong>€64,000</strong><br>
                    • AI監測成本：<strong>€50/月</strong><br>
                    • 該罐最終評分：91分<br>
                    • 酒莊主：「這套系統已救過我們3次了！」</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="anomaly-detection">
              <h4>🚨 智能異常檢測與預警系統</h4>
              <div class="detection-systems">
                <div class="detection-type">
                  <h5>發酵停滯早期預警</h5>
                  <p>• <strong>速率監測：</strong>分析發酵速率變化趨勢<br>
                  • <strong>模式識別：</strong>識別發酵停滯的早期特徵<br>
                  • <strong>原因診斷：</strong>自動分析可能的停滯原因<br>
                  • <strong>干預建議：</strong>提供具體的處理建議和步驟</p>
                  
                  <div class="example-box">
                    <h6>💡 發酵停滯預警成功案例：</h6>
                    <p><strong>Pessac-Léognan產區2024年9月發酵危機：</strong><br><br>
                    <em>背景：</em><br>
                    • 酒莊有16個罐同時發酵<br>
                    • 葡萄糖度極高（252 g/L），發酵難度大<br>
                    • 2023年類似情況下，2個罐發酵停滯，損失嚴重<br><br>
                    
                    <em>AI預測性監測：</em><br><br>
                    <strong>罐#7異常預警時間線：</strong><br><br>
                    <strong>Day 4, 14:30 - 黃色警報：</strong><br>
                    • 密度：1.075（糖度175 g/L，已轉化77 g/L）<br>
                    • 發酵速率：0.006/小時（比預期慢12%）<br>
                    • AI評估：「酵母活力開始下降，注意監測」<br>
                    • 建議：觀察24小時<br><br>
                    
                    <strong>Day 5, 10:15 - 橙色警報：</strong><br>
                    • 密度：1.068（24小時僅下降0.007）<br>
                    • 發酵速率：0.0003/小時（比預期慢<strong>40%</strong>）<br>
                    • CO₂產生：從2.8降至1.2 L/min<br>
                    • <strong>AI診斷：「發酵停滯風險65%」</strong><br>
                    • 可能原因：<br>
                    &nbsp;&nbsp;1. 酵母營養不足（概率45%）<br>
                    &nbsp;&nbsp;2. 酒精度過高抑制（概率30%）<br>
                    &nbsp;&nbsp;3. 溫度不適（概率15%）<br>
                    • <strong>建議行動：</strong><br>
                    &nbsp;&nbsp;- 添加酵母營養劑（複合型）20g<br>
                    &nbsp;&nbsp;- 降溫至24°C（刺激酵母活力）<br>
                    &nbsp;&nbsp;- 溫和攪拌15分鐘（重新懸浮酵母）<br><br>
                    
                    <strong>Day 5, 11:00 - 干預執行：</strong><br>
                    • 酒窖師按建議執行<br>
                    • AI持續每小時監測<br><br>
                    
                    <strong>Day 5, 16:00 - 效果觀察：</strong><br>
                    • 密度：1.066（開始恢復下降）<br>
                    • CO₂產生：1.8 L/min（回升50%）<br>
                    • AI評估：「干預有效，發酵正在恢復」<br><br>
                    
                    <strong>Day 6, 10:00 - 綠色訊號：</strong><br>
                    • 密度：1.052（24小時下降0.014）<br>
                    • 發酵速率：0.0006/小時（恢復正常）<br>
                    • AI：「發酵已恢復正常軌道」<br>
                    • 危機解除！<br><br>
                    
                    <strong>最終結果（Day 12）：</strong><br>
                    • 密度：0.992（完美乾型）<br>
                    • 總發酵時間：12天（僅延遲1天）<br>
                    • 品質：無損失，評分92分<br><br>
                    
                    <strong>AI系統優勢：</strong><br>
                    • 傳統方法：Day 7才會發現停滯（已太遲）<br>
                    • AI預警：<strong>提前2.5天</strong>檢測到風險<br>
                    • 預警準確率：本季16個罐中預測了<strong>4次</strong>潛在停滯，全部成功救回<br>
                    • 避免損失：估計<strong>€95,000</strong>（4罐 × €23,750/罐）</p>
                  </div>
                </div>
                
                <div class="detection-type">
                  <h5>微生物污染檢測</h5>
                  <p>• <strong>光譜檢測：</strong>使用光譜技術識別微生物污染<br>
                  • <strong>代謝產物監測：</strong>檢測異常代謝產物的早期訊號<br>
                  • <strong>模式匹配：</strong>與已知污染模式進行比對<br>
                  • <strong>來源追蹤：</strong>追溯污染可能的來源和傳播路徑</p>
                  
                  <div class="example-box">
                    <h6>💡 污染檢測案例：</h6>
                    <p><strong>Pauillac酒莊的Brettanomyces早期檢測（2024年10月）：</strong><br><br>
                    <em>Brett污染的威脅：</em><br>
                    • Brettanomyces（布雷特酵母）是紅酒的頭號敵人<br>
                    • 產生「馬廄味」、「皮革味」等不良氣味<br>
                    • 傳統檢測：需要培養3-5天才能確認<br>
                    • 一旦大規模污染，整批酒可能報廢<br><br>
                    
                    <em>AI早期檢測系統：</em><br><br>
                    <strong>10月8日，罐#22（6,000L Cabernet Sauvignon）：</strong><br>
                    • 時間：下午2:45<br>
                    • AI光譜分析儀自動掃描<br>
                    • <strong>異常訊號：</strong>檢測到微量4-ethylphenol（Brett特徵代謝物）<br>
                    • 濃度：僅120 μg/L（感官閾值400 μg/L）<br>
                    • <strong>AI判斷：「Brett污染早期階段，建議立即處理」</strong><br>
                    • 風險等級：中高<br><br>
                    
                    <strong>交叉驗證：</strong><br>
                    • AI建議同時檢查相鄰罐#21、#23<br>
                    • 罐#21：正常<br>
                    • 罐#23：也檢測到75 μg/L（污染源可能是公用管線）<br><br>
                    
                    <strong>緊急處理方案（下午3:30）：</strong><br>
                    • 罐#22、#23：添加SO₂ 40mg/L（抑制Brett生長）<br>
                    • 降溫至10°C<br>
                    • 隔離兩罐，停止使用共用管線<br>
                    • 深度清洗和消毒公用設備<br><br>
                    
                    <strong>10月9日檢測：</strong><br>
                    • 4-ethylphenol濃度<br>
                    &nbsp;&nbsp;- 罐#22：125 μg/L（增長停止）<br>
                    &nbsp;&nbsp;- 罐#23：78 μg/L（穩定）<br>
                    • AI：「污染已控制，可以安全陳年」<br><br>
                    
                    <strong>最終結果（6個月後）：</strong><br>
                    • 兩罐酒均無Brett風味缺陷<br>
                    • 品質評分：罐#22: 90分，罐#23: 89分<br>
                    • 完全不影響銷售<br><br>
                    
                    <strong>系統價值分析：</strong><br>
                    • 傳統檢測時機：通常在裝瓶前才發現（已太遲）<br>
                    • AI檢測：污染初期即檢出（濃度僅為閾值的<strong>30%</strong>）<br>
                    • 避免損失：12,000L × €12/L = <strong>€144,000</strong><br>
                    • 檢測成本：<strong>€5/罐</strong><br>
                    • 該年度AI系統檢測出5起早期污染，全部成功處理</p>
                  </div>
                </div>
                
                <div class="detection-type">
                  <h5>設備運行監控</h5>
                  <p>• <strong>溫控系統監測：</strong>監控冷卻系統的運行狀態<br>
                  • <strong>泵浦效能追蹤：</strong>檢測泵浦的性能和故障徵兆<br>
                  • <strong>閥門狀態監控：</strong>確保所有閥門正常運作<br>
                  • <strong>管路壓力監測：</strong>檢測管路系統的壓力異常</p>
                  
                  <div class="example-box">
                    <h6>💡 設備異常檢測：</h6>
                    <p><strong>Saint-Julien酒莊冷卻系統故障預防（2024年9月）：</strong><br><br>
                    <strong>9月12日凌晨1:23 - 異常檢測：</strong><br>
                    • AI監測發現：罐#15冷卻效率下降8%<br>
                    • 目標溫度27°C，實際達到27.4°C<br>
                    • 冷卻功率已達90%（正常應為70%）<br>
                    • AI診斷：「冷卻迴路可能有空氣或堵塞」<br><br>
                    
                    <strong>凌晨1:30 - 自動應對：</strong><br>
                    • AI立即增加該罐冷卻優先級<br>
                    • 從其他罐轉移15%冷卻能力<br>
                    • 發送通知給值班技師<br>
                    • 溫度控制在27.5°C（避免超標）<br><br>
                    
                    <strong>早上8:00 - 技師檢查：</strong><br>
                    • 發現冷卻盤管有輕微堵塞<br>
                    • 清洗後效能恢復100%<br>
                    • 維修時間：45分鐘<br>
                    • 未影響發酵品質<br><br>
                    
                    <strong>事後評估：</strong><br>
                    • 若未及時發現：溫度可能升至29°C以上<br>
                    • 可能導致香氣損失或發酵停滯<br>
                    • AI提前<strong>7小時</strong>檢測並控制<br>
                    • 本季類似預警：12次，全部成功預防</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="monitoring-dashboard">
              <h4>📱 智能監控儀表板</h4>
              <div class="dashboard-features">
                <p><strong>整合式監控平台：</strong><br>
                • <strong>即時狀態總覽：</strong>所有發酵罐一目了然的狀態顯示<br>
                • <strong>關鍵指標追蹤：</strong>溫度、密度、pH、CO₂等核心數據<br>
                • <strong>預警通知系統：</strong>分級預警，手機APP即時推播<br>
                • <strong>歷史數據分析：</strong>任何參數的歷史趨勢圖表<br>
                • <strong>跨罐比較：</strong>同時比對多個罐的發酵進度<br>
                • <strong>遠程監控：</strong>酒窖主任在家也能掌握所有發酵狀況<br><br>
                
                <strong>監控系統核心價值：</strong><br>
                • 數據密度：從每天24次提升到 <strong>每天28,800次</strong><br>
                • 異常檢測速度：從6小時縮短到 <strong>5分鐘</strong><br>
                • 預測準確度：發酵完成時間預測誤差 <strong>±2小時</strong><br>
                • 人力節省：減少 <strong>70%</strong> 的人工監測時間<br>
                • 事故預防：發酵事故率降低 <strong>92%</strong><br>
                • 品質穩定性：批次間品質波動減少 <strong>55%</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
        -->
      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '📊',
        title: '即時監控',
        content: '每5分鐘3,456次數據採集，異常檢測從6小時縮短到5分鐘'
      },
      {
        id: 2,
        icon: '🚨',
        title: '智能預警',
        content: '提前2.5天預測發酵停滯，成功率100%，避免損失€95,000'
      }
    ]
  },

  // AI品質控制系統：光譜分析與感官分析
  {
    type: 'content',
    title: 'AI品質控制系統：光譜分析與感官分析',
    content: `
      <div style="font-family:'Segoe UI',sans-serif;max-width:900px;margin:0 auto;padding:0 8px">
        <!-- Header -->
        <div style="background:linear-gradient(135deg,#312e81 0%,#4f46e5 50%,#3730a3 100%);border-radius:12px;padding:18px 24px;margin-bottom:20px;color:#fff;display:flex;align-items:center;gap:12px">
          <span style="font-size:2.2rem">🔬</span>
          <div>
            <div style="font-size:1.2rem;font-weight:700;letter-spacing:.5px">AI品質控制系統｜光譜分析 × 電子感官</div>
            <div style="font-size:.82rem;opacity:.85;margin-top:4px">NIR 30秒完成22項檢測 × 效率提升180倍 × 電子鼻/舌準確率97.8%</div>
          </div>
        </div>

        <!-- Three-column spectral tools -->
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:14px">
          <!-- NIR -->
          <div style="background:#eef2ff;border:1.5px solid #6366f1;border-radius:10px;padding:14px">
            <div style="background:#4f46e5;color:#fff;border-radius:5px;padding:4px 10px;font-weight:700;font-size:.82rem;margin-bottom:10px;display:inline-block">🌈 NIR近紅外光譜</div>
            <div style="font-size:.8rem;line-height:1.7;color:#444;margin-bottom:8px">30秒 × 22項參數同測<br>生產線即時在線分析<br>無需開瓶非破壞檢測<br>R²=<span style="font-weight:700">0.98</span> 極高精度</div>
            <div style="background:#fff;border-radius:6px;padding:8px;font-size:.78rem;border:1px solid #c7d2fe">
              <span style="color:#4338ca;font-weight:700">Margaux裝瓶前2024：</span><br>
              15罐×3天→<span style="color:#c53030;font-weight:700">15分鐘</span>（效率×180）<br>
              攔截罐#12揮發酸超標<br>
              調配後即時驗證 ✓<br>
              節省€45,000/年
            </div>
          </div>

          <!-- Raman -->
          <div style="background:#f0fdf4;border:1.5px solid #22c55e;border-radius:10px;padding:14px">
            <div style="background:#16a34a;color:#fff;border-radius:5px;padding:4px 10px;font-weight:700;font-size:.82rem;margin-bottom:10px;display:inline-block">🔍 拉曼光譜防偽</div>
            <div style="font-size:.8rem;line-height:1.7;color:#444;margin-bottom:8px">分子指紋識別<br>無需開瓶 × 2分鐘完成<br>200+特徵峰比對<br>準確率 <span style="font-weight:700">98.5%</span></div>
            <div style="background:#fff;border-radius:6px;padding:8px;font-size:.78rem;border:1px solid #bbf7d0">
              <span style="color:#166534;font-weight:700">Pomerol 1982假酒鑑定：</span><br>
              與真品相似度僅67%<br>（正常應>95%）<br>
              126瓶可疑中發現38瓶假<br>
              <span style="color:#c53030;font-weight:700">保護品牌€1.7M/年</span>
            </div>
          </div>

          <!-- GC-MS -->
          <div style="background:#fff7ed;border:1.5px solid #f97316;border-radius:10px;padding:14px">
            <div style="background:#ea580c;color:#fff;border-radius:5px;padding:4px 10px;font-weight:700;font-size:.82rem;margin-bottom:10px;display:inline-block">🧬 GC-MS香氣指紋</div>
            <div style="font-size:.8rem;line-height:1.7;color:#444;margin-bottom:8px">300+種香氣化合物定量<br>建立酒款風味檔案<br>缺陷溯源 × 陳年監測<br>風格相似度量化</div>
            <div style="background:#fff;border-radius:6px;padding:8px;font-size:.78rem;border:1px solid #fed7aa">
              <span style="color:#c2410c;font-weight:700">Saint-Julien風格控制：</span><br>
              吡嗪22→15 ng/L（修正）<br>
              風格相似度72→<span style="color:#276749;font-weight:700">96%</span><br>
              預售比2023年+15%<br>
              「典型某某莊風格」
            </div>
          </div>
        </div>

        <!-- Two-column E-nose + E-tongue -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px">
          <!-- E-nose -->
          <div style="background:#fdf4ff;border:1.5px solid #a855f7;border-radius:10px;padding:16px">
            <div style="background:#7e22ce;color:#fff;border-radius:6px;padding:6px 12px;font-weight:700;font-size:.9rem;margin-bottom:12px;display:inline-block">👃 電子鼻 — TCA軟木塞檢測</div>
            <div style="background:#fff;border-radius:8px;padding:12px;border-left:4px solid #a855f7">
              <div style="font-size:.82rem;line-height:1.7;color:#444">裝瓶線 <span style="font-weight:700">3秒/瓶</span> 自動檢測<br>靈敏度 2 ng/L（人類感官閾值）<br>系統可靠度：<span style="font-weight:700">97.8%</span><br>TCA陽性→移出→換塞→重測</div>
              <div style="background:#fdf4ff;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#7e22ce;font-weight:700">💡 Pauillac 50,000瓶裝瓶（2024）：</span><br>
                傳統人工：417小時 × 感官疲勞<br>
                電子鼻：42小時 × 100%逐瓶檢測<br>
                檢出1,847瓶(3.69%) TCA污染<br>
                <span style="color:#c53030;font-weight:700">→ 避免損失 €277,050 × ROI 32.6倍</span>
              </div>
            </div>
          </div>

          <!-- E-tongue -->
          <div style="background:#f0fdf4;border:1.5px solid #10b981;border-radius:10px;padding:16px">
            <div style="background:#065f46;color:#fff;border-radius:6px;padding:6px 12px;font-weight:700;font-size:.9rem;margin-bottom:12px;display:inline-block">👅 電子舌 — 味覺精準量化</div>
            <div style="background:#fff;border-radius:8px;padding:12px;border-left:4px solid #10b981">
              <div style="font-size:.82rem;line-height:1.7;color:#444">五種基本味覺精確測定<br>單寧強度/酒體/澀感量化<br>平衡指數計算<br>預測準確度：<span style="font-weight:700">98.5%</span></div>
              <div style="background:#f0fdf4;border-radius:6px;padding:8px;margin-top:8px;font-size:.8rem">
                <span style="color:#065f46;font-weight:700">💡 Margaux三級莊調配（2024）：</span><br>
                18基酒 × AI計算10,000種組合<br>
                預測評分92 → 實際品鑑 <span style="font-weight:700">93分</span><br>
                風格相似度：<span style="font-weight:700">94%</span>（過去10年平均）<br>
                <span style="color:#c53030;font-weight:700">→ 決策時間 3週→5天，節省76%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats bar -->
        <div style="background:linear-gradient(90deg,#312e81,#4f46e5);border-radius:8px;padding:12px 18px;display:flex;gap:0;justify-content:space-around;color:#fff;font-size:.82rem;text-align:center">
          <div><div style="font-size:1.4rem;font-weight:700">×180</div><div style="opacity:.85">NIR效率提升</div></div>
          <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
          <div><div style="font-size:1.4rem;font-weight:700">98.5%</div><div style="opacity:.85">假酒識別準確率</div></div>
          <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
          <div><div style="font-size:1.4rem;font-weight:700">€277,050</div><div style="opacity:.85">電子鼻攔截損失</div></div>
          <div style="border-left:1px solid rgba(255,255,255,.3)"></div>
          <div><div style="font-size:1.4rem;font-weight:700">−76%</div><div style="opacity:.85">電子舌節省調配時間</div></div>
        </div>

        <!--ORIGINAL:
        <div class="quality-control-system">
          <h3>🔬 AI品質控制系統</h3>
          <p class="intro-text">如果說釀酒是藝術，那麼品質控制就是科學。</p>
          <div class="spectral-analysis-systems">
            <h4>🌈 光譜分析自動化系統</h4>
            <div class="spectral-technologies">
              <div class="nir-analysis">
                <h5>近紅外光譜（NIR）快速分析</h5>
                <p>• <strong>成分快檢：</strong>30秒內檢測糖分、酸度、酚類、酒精度<br>
                • <strong>在線分析：</strong>生產線上連續即時品質檢測<br>
                • <strong>非破壞檢測：</strong>無需開瓶即可分析葡萄酒成分<br>
                • <strong>多參數同測：</strong>一次掃描獲得20+個品質參數</p>
                <div class="example-box">
                  <h6>💡 NIR快速分析實戰案例：</h6>
                  <p><strong>Margaux列級莊的裝瓶前品質檢測（2024年6月）：</strong><br><br>
                  <em>傳統檢測流程的瓶頸：</em><br>
                  • 裝瓶前需檢測15個儲酒罐<br>
                  • 傳統實驗室分析：每個樣本需要3-4小時<br>
                  • 項目包括：酒精度、殘糖、總酸、揮發酸、游離SO₂、總SO₂、pH值<br>
                  • 總時間：45-60小時（2-3天）<br>
                  • 裝瓶線等待，成本高昂<br><br>
                  
                  <em>2024年導入NIR系統：</em><br><br>
                  <strong>檢測效率革命：</strong><br>
                  • 每個樣本掃描時間：<strong>30秒</strong><br>
                  • 同時檢測項目：22個參數<br>
                  • 15個罐全部檢測完成：<strong>15分鐘</strong><br>
                  • 效率提升：<strong>180倍</strong>！<br><br>
                  
                  <strong>實際檢測案例（罐#7，6,000L）：</strong><br>
                  上午9:15取樣，9:16完成分析：<br>
                  • 酒精度：13.8%（目標13.5-14.0%）✓<br>
                  • 殘糖：1.9 g/L（目標<2.5 g/L）✓<br>
                  • 總酸：5.2 g/L（目標4.8-5.5 g/L）✓<br>
                  • 揮發酸：0.52 g/L（目標<0.75 g/L）✓<br>
                  • 總酚類：2,850 mg/L（優秀）<br>
                  • 花青素：485 mg/L（色澤深邃）<br>
                  • 單寧：3.2 g/L（結構良好）<br>
                  • <strong>AI綜合評估：「所有參數合格，建議裝瓶」</strong><br><br>
                  
                  <strong>異常檢測案例（罐#12）：</strong><br>
                  • 揮發酸：0.78 g/L（<strong>超標！</strong>）<br>
                  • AI警報：「揮發酸偏高，不建議裝瓶」<br>
                  • 建議：「可與其他罐調配稀釋至0.65 g/L」<br>
                  • 酒窖師決策：與罐#7按1:2比例混合<br>
                  • 混合後檢測（NIR即時驗證）：0.63 g/L ✓<br>
                  • <strong>避免了6,000L酒的品質缺陷</strong><br><br>
                  
                  <strong>經濟效益：</strong><br>
                  • 實驗室人力：從3人減少到1人<br>
                  • 檢測時間：從3天縮短到<strong>1小時</strong><br>
                  • 裝瓶線停工時間：減少<strong>95%</strong><br>
                  • 年度節省成本：<strong>€45,000</strong><br>
                  • NIR設備投資回收期：<strong>2.2年</strong><br><br>
                  
                  <strong>準確度驗證：</strong><br>
                  • 定期與傳統實驗室方法比對<br>
                  • 酒精度誤差：±0.15%<br>
                  • 總酸誤差：±0.2 g/L<br>
                  • 相關係數R²：<strong>0.98</strong>（極高相關）</p>
                </div>
              </div>
              
              <div class="raman-analysis">
                <h5>拉曼光譜精密分析</h5>
                <p>• <strong>分子指紋識別：</strong>識別特定分子結構和化學鍵<br>
                • <strong>摻假檢測：</strong>檢測添加劑、色素、甜味劑等摻假物質<br>
                • <strong>年份鑑別：</strong>分析陳年過程的化學變化特徵<br>
                • <strong>產區溯源：</strong>建立產區化學指紋數據庫</p>
                
                <div class="example-box">
                  <h6>💡 拉曼光譜防偽案例：</h6>
                  <p><strong>Pomerol頂級酒莊的防偽驗證系統（2024年）：</strong><br><br>
                  <em>假酒問題的嚴重性：</em><br>
                  • 市場上出現該莊1982年份假酒<br>
                  • 單瓶售價€4,500，假酒每年損失超過€200萬<br>
                  • 傳統鑑定依賴專家品鑑，準確度70-80%<br>
                  • 需要開瓶，破壞性檢測<br><br>
                  
                  <em>拉曼光譜防偽系統：</em><br><br>
                  <strong>建立化學指紋數據庫：</strong><br>
                  • 收集酒莊1995-2024年每個年份的樣本<br>
                  • 分析30個年份 × 5瓶/年份 = 150個真品樣本<br>
                  • 建立「化學指紋圖譜」數據庫<br>
                  • 包含200+個特徵峰<br><br>
                  
                  <strong>2024年10月可疑瓶檢測：</strong><br>
                  一位藏家送來2005年份酒鑑定（聲稱從拍賣會購得）<br><br>
                  
                  <strong>檢測過程（無需開瓶）：</strong><br>
                  • 透過玻璃瓶進行拉曼掃描：2分鐘<br>
                  • AI分析光譜圖：30秒<br><br>
                  
                  <strong>分析結果：</strong><br>
                  • 與2005年真品光譜對比相似度：<strong>67%</strong>（正常應>95%）<br>
                  • 檢測到異常峰值：<br>
                  &nbsp;&nbsp;- 1,150 cm⁻¹峰異常強（懷疑添加焦糖色素）<br>
                  &nbsp;&nbsp;- 1,580 cm⁻¹峰異常弱（單寧含量不足）<br>
                  &nbsp;&nbsp;- 2,900 cm⁻¹出現不應存在的峰（化學添加劑）<br>
                  • <strong>AI判斷：「該酒為仿冒品，置信度98%」</strong><br><br>
                  
                  <strong>進一步分析（開瓶化學驗證）：</strong><br>
                  • 色素分析：含人工焦糖色素<br>
                  • 單寧分析：僅1,200 mg/L（真品應為2,800-3,200）<br>
                  • 同位素分析：不符合該產區特徵<br>
                  • <strong>確認為假酒</strong><br><br>
                  
                  <strong>真假對比圖譜：</strong><br>
                  真品2005年特徵：<br>
                  • 1,000-1,100 cm⁻¹：酒精特徵峰<br>
                  • 1,450-1,650 cm⁻¹：酚類化合物峰（豐富且複雜）<br>
                  • 2,850-2,950 cm⁻¹：C-H鍵伸縮（陳年特徵）<br>
                  • 整體圖譜：<strong>複雜有層次</strong><br><br>
                  
                  假酒特徵：<br>
                  • 圖譜簡單，峰值少<br>
                  • 酚類區域異常單一<br>
                  • 出現不該有的化學添加劑峰<br><br>
                  
                  <strong>系統價值：</strong><br>
                  • 檢測速度：2.5分鐘（vs 傳統3天）<br>
                  • 準確率：<strong>98.5%</strong>（vs 專家品鑑75%）<br>
                  • 非破壞性：無需開瓶<br>
                  • 年度檢測：126瓶可疑酒，發現38瓶假酒<br>
                  • 保護品牌價值：估計<strong>€1.7M/年</strong></p>
                </div>
              </div>
              
              <div class="mass-spectrometry">
                <h5>質譜聯用技術（GC-MS）</h5>
                <p>• <strong>香氣成分定量：</strong>精確測定300+種香氣化合物<br>
                • <strong>風味指紋：</strong>建立酒款獨特的風味化學檔案<br>
                • <strong>缺陷溯源：</strong>追蹤異味的具體化學來源<br>
                • <strong>陳年監測：</strong>追蹤陳年過程的化學演變</p>
                
                <div class="example-box">
                  <h6>💡 香氣分析案例：</h6>
                  <p><strong>Saint-Julien二級莊的風格一致性控制（2024年）：</strong><br><br>
                  <em>品牌風格的挑戰：</em><br>
                  • 酒莊追求年復一年的風格一致性<br>
                  • 2023年因氣候差異，風格偏離<br>
                  • 市場反饋：「今年的酒和往年不太一樣」<br>
                  • 品牌認同度下降<br><br>
                  
                  <em>2024年GC-MS風味監控：</em><br><br>
                  <strong>建立標準風味模型：</strong><br>
                  • 分析2010-2022年所有優秀年份（9個年份）<br>
                  • 識別出標誌性香氣成分：<br>
                  &nbsp;&nbsp;- 2-甲氧基-3-異丁基吡嗪：12-18 ng/L（青椒、草本）<br>
                  &nbsp;&nbsp;- β-大馬士酮：8-15 μg/L（花香、果香）<br>
                  &nbsp;&nbsp;- 橡木內酯：45-65 μg/L（橡木、香草）<br>
                  &nbsp;&nbsp;- 乙酸異戊酯：250-380 μg/L（香蕉、果香）<br>
                  • 建立「風格向量」數學模型<br><br>
                  
                  <strong>2024年發酵過程監控：</strong><br><br>
                  <strong>8月底（發酵中期）首次檢測：</strong><br>
                  • 2-甲氧基-3-異丁基吡嗪：22 ng/L（<strong>過高</strong>）<br>
                  • AI分析：「草本味可能過重，偏離傳統風格」<br>
                  • 與標準模型相似度：<strong>72%</strong>（目標>90%）<br><br>
                  
                  <strong>調整策略：</strong><br>
                  • 降低發酵溫度至25°C（減少吡嗪萃取）<br>
                  • 縮短浸皮時間3天<br>
                  • 增加30%新橡木桶比例（提升橡木內酯）<br><br>
                  
                  <strong>10月（陳年3個月）二次檢測：</strong><br>
                  • 2-甲氧基-3-異丁基吡嗪：15 ng/L ✓<br>
                  • 橡木內酯：58 μg/L ✓<br>
                  • β-大馬士酮：11 μg/L ✓<br>
                  • 風格相似度：<strong>94%</strong> ✓<br>
                  • AI評估：「已回歸傳統風格軌道」<br><br>
                  
                  <strong>最終裝瓶前檢測（2025年6月）：</strong><br>
                  • 完整分析318種香氣化合物<br>
                  • 核心風格成分全部在目標範圍<br>
                  • 風格相似度：<strong>96%</strong><br>
                  • 品鑑小組評價：「完美復刻了經典風格」<br><br>
                  
                  <strong>市場反饋：</strong><br>
                  • 2024年份獲得專業評分：93分<br>
                  • Wine Spectator評語：「典型的某某莊風格」<br>
                  • 預售價格比2023年高<strong>15%</strong><br>
                  • 品牌一致性成功維護</p>
                </div>
              </div>
            </div>
          </div>

          <div class="sensory-ai-systems">
            <h4>👃 AI感官分析系統</h4>
            <div class="electronic-sensing">
              <div class="electronic-nose">
                <h5>電子鼻（E-Nose）技術</h5>
                <p>• <strong>香氣識別：</strong>識別和量化數百種香氣化合物<br>
                • <strong>缺陷檢測：</strong>檢測TCA（軟木塞污染）、氧化、還原等缺陷<br>
                • <strong>風格分類：</strong>基於香氣特徵自動分類酒款風格<br>
                • <strong>品質預測：</strong>根據香氣複雜度預測品質潛力</p>
                
                <div class="example-box">
                  <h6>💡 電子鼻檢測實戰：</h6>
                  <p><strong>Pauillac一級莊的軟木塞污染檢測（2024年5月）：</strong><br><br>
                  <em>TCA污染的災難：</em><br>
                  • TCA（2,4,6-三氯苯甲醚）是軟木塞污染的元兇<br>
                  • 濃度低至2-4 ng/L人就能聞到霉味<br>
                  • 污染率：天然軟木塞約3-5%<br>
                  • 裝瓶50,000瓶，可能有1,500-2,500瓶受污染<br>
                  • 單瓶售價€150，潛在損失€225,000-€375,000<br><br>
                  
                  <em>傳統檢測困境：</em><br>
                  • 人工品鑑：每瓶30秒，50,000瓶需要417小時<br>
                  • 感官疲勞：品鑑師連續聞50瓶後判斷力下降<br>
                  • 主觀差異：不同品鑑師對TCA敏感度差異大<br>
                  • 成本高昂：需要專業團隊3-4週<br><br>
                  
                  <em>2024年電子鼻系統部署：</em><br><br>
                  <strong>裝瓶線整合檢測：</strong><br>
                  • 每瓶裝瓶後自動取樣檢測<br>
                  • 檢測時間：<strong>3秒/瓶</strong><br>
                  • 50,000瓶完成時間：<strong>42小時</strong>（連續運行）<br><br>
                  
                  <strong>檢測結果統計：</strong><br>
                  • 檢測總數：50,000瓶<br>
                  • TCA陽性：1,847瓶（<strong>3.69%</strong>）<br>
                  • TCA濃度分布：<br>
                  &nbsp;&nbsp;- 2-4 ng/L（輕微）：1,203瓶<br>
                  &nbsp;&nbsp;- 4-8 ng/L（明顯）：521瓶<br>
                  &nbsp;&nbsp;- >8 ng/L（嚴重）：123瓶<br><br>
                  
                  <strong>處理決策：</strong><br>
                  • 2-4 ng/L：重新品鑑確認（部分可接受）<br>
                  • 4-8 ng/L：更換軟木塞重新裝瓶<br>
                  • >8 ng/L：退回散裝酒罐<br><br>
                  
                  <strong>實際案例：瓶#12,847</strong><br>
                  • 電子鼻檢測：TCA 6.8 ng/L<br>
                  • 自動標記並移出生產線<br>
                  • 人工確認：確實有霉味<br>
                  • 更換軟木塞後重測：<0.5 ng/L ✓<br>
                  • 重新入庫<br><br>
                  
                  <strong>準確度驗證：</strong><br>
                  • 隨機抽取500瓶進行人工複檢<br>
                  • 電子鼻陽性，人工確認：485瓶（<strong>97%</strong>）<br>
                  • 電子鼻陰性，人工確認：498瓶（<strong>99.6%</strong>）<br>
                  • 系統可靠度：<strong>97.8%</strong><br><br>
                  
                  <strong>經濟效益：</strong><br>
                  • 攔截污染瓶：1,847瓶<br>
                  • 避免損失：€277,050<br>
                  • 系統運行成本：€8,500<br>
                  • <strong>投資回報率：32.6倍</strong><br>
                  • 品牌聲譽保護：無價</p>
                </div>
              </div>
              
              <div class="electronic-tongue">
                <h5>電子舌（E-Tongue）系統</h5>
                <p>• <strong>味覺分析：</strong>精確測定甜、酸、苦、鹹、鮮五種基本味覺<br>
                • <strong>質地評估：</strong>量化酒體、單寧、澀感等口感特性<br>
                • <strong>平衡性量化：</strong>計算各味覺成分的平衡指數<br>
                • <strong>餘韻預測：</strong>預測餘韻長度和品質</p>
                
                <div class="example-box">
                  <h6>💡 電子舌品質評估：</h6>
                  <p><strong>Margaux三級莊的調配優化（2024年3月）：</strong><br><br>
                  <em>調配的藝術與科學：</em><br>
                  • 酒莊有18個不同地塊的基酒<br>
                  • 需要調配出正牌、副牌、三牌三個級別<br>
                  • 傳統方式：品鑑小組嘗試數十種組合<br>
                  • 耗時2-3週，高度依賴主觀判斷<br><br>
                  
                  <em>電子舌輔助調配系統：</em><br><br>
                  <strong>步驟1：18個基酒全面分析</strong><br>
                  每個基酒的「味覺指紋」：<br><br>
                  
                  <strong>地塊A（高地礫石）：</strong><br>
                  • 酸度指數：7.8/10（高）<br>
                  • 單寧強度：8.5/10（強勁）<br>
                  • 苦味指數：6.2/10（適中）<br>
                  • 酒體指數：8.0/10（飽滿）<br>
                  • 平衡性：72/100（結構導向）<br><br>
                  
                  <strong>地塊M（黏土坡地）：</strong><br>
                  • 酸度指數：6.5/10（中等）<br>
                  • 單寧強度：7.0/10（柔和）<br>
                  • 果味指數：8.8/10（豐富）<br>
                  • 酒體指數：7.5/10（適中）<br>
                  • 平衡性：85/100（和諧）<br><br>
                  
                  <strong>步驟2：AI調配模擬</strong><br>
                  • 輸入目標：正牌酒風格參數<br>
                  &nbsp;&nbsp;- 酸度：7.0-7.5<br>
                  &nbsp;&nbsp;- 單寧：7.8-8.3<br>
                  &nbsp;&nbsp;- 平衡性：>88<br>
                  &nbsp;&nbsp;- 複雜度：>90<br>
                  • AI計算10,000種可能組合<br>
                  • 推薦前5個最優方案<br><br>
                  
                  <strong>AI推薦方案#1（預測評分92）：</strong><br>
                  • 地塊A：35%（結構骨架）<br>
                  • 地塊M：28%（果味豐富）<br>
                  • 地塊F：18%（香氣複雜）<br>
                  • 地塊K：12%（陳年潛力）<br>
                  • 其他：7%<br><br>
                  
                  <strong>預測味覺參數：</strong><br>
                  • 酸度指數：7.2 ✓<br>
                  • 單寧強度：8.0 ✓<br>
                  • 酒體指數：7.8<br>
                  • 平衡性：89 ✓<br>
                  • 複雜度：91 ✓<br><br>
                  
                  <strong>步驟3：實際調配驗證</strong><br>
                  • 按AI建議比例調配500L樣品<br>
                  • 電子舌實測結果：<br>
                  &nbsp;&nbsp;- 酸度指數：7.3（與預測誤差0.1）<br>
                  &nbsp;&nbsp;- 單寧強度：8.1（與預測誤差0.1）<br>
                  &nbsp;&nbsp;- 平衡性：90（與預測誤差1）<br>
                  • <strong>預測準確度：98.5%</strong><br><br>
                  
                  <strong>步驟4：專業品鑑驗證</strong><br>
                  • 品鑑小組盲品評分：<strong>93分</strong><br>
                  • 評語：「結構優雅，平衡完美，複雜度高」<br>
                  • 與AI預測（92分）僅差1分<br><br>
                  
                  <strong>效率對比：</strong><br>
                  • 傳統調配：3週，嘗試35個組合<br>
                  • AI輔助：<strong>5天</strong>，精準鎖定最優方案<br>
                  • 時間節省：<strong>76%</strong><br>
                  • 品鑑師工作量：減少<strong>82%</strong><br><br>
                  
                  <strong>調配一致性：</strong><br>
                  • 2024年份風格與過去10年相似度：<strong>94%</strong><br>
                  • 品牌風格成功延續</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="quality-system-benefits">
            <h4>🎯 AI品控系統的革命性價值</h4>
            <div class="comprehensive-benefits">
              <p><strong>檢測效率革命：</strong><br>
              • 分析速度：從小時級提升到 <strong>秒級</strong><br>
              • NIR全參數檢測：30秒（vs 傳統4小時）<br>
              • 電子鼻TCA檢測：3秒/瓶（vs 30秒人工）<br>
              • 裝瓶線100%檢測成為可能<br><br>
              
              <strong>準確度提升：</strong><br>
              • 光譜分析準確度：<strong>98%+</strong><br>
              • 消除人為主觀誤差<br>
              • 檢測靈敏度：ng/L級別（十億分之一）<br>
              • 可重現性：<strong>99%</strong><br><br>
              
              <strong>品質保障：</strong><br>
              • 缺陷檢出率：<strong>97.8%</strong><br>
              • 假酒識別準確度：<strong>98.5%</strong><br>
              • 風格一致性：提升 <strong>65%</strong><br>
              • 客訴率：降低 <strong>88%</strong><br><br>
              
              <strong>經濟效益：</strong><br>
              • 人力成本：節省 <strong>60-80%</strong><br>
              • 品質損失：減少 <strong>90%</strong><br>
              • 平均投資回收期：<strong>2-3年</strong><br>
              • 品牌價值保護：不可估量</p>
            </div>
          </div>
        </div>
      </div>
        -->
      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🌈',
        title: '光譜革命',
        content: 'NIR 30秒檢測22項參數，效率提升180倍，準確度98%'
      },
      {
        id: 2,
        icon: '👃',
        title: '電子感官',
        content: '電子鼻3秒檢測TCA污染，準確率97.8%，避免損失€277,000'
      }
    ]
  },

  // AI輔助調配系統：智能算法與虛擬實驗室
  {
    type: 'content',
    title: 'AI輔助調配系統：智能算法與虛擬實驗室',
    content: `
      <div style="font-family:'Segoe UI',sans-serif;max-width:900px;margin:0 auto;padding:0 4px;">
        <!-- Header -->
        <div style="background:linear-gradient(135deg,#4a044e 0%,#7c3aed 50%,#d97706 100%);border-radius:12px;padding:18px 24px;margin-bottom:16px;display:flex;align-items:center;gap:16px;">
          <span style="font-size:2.2rem;">🎨</span>
          <div>
            <div style="color:#fde68a;font-size:0.75rem;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin-bottom:4px;">AI BLENDING SYSTEM</div>
            <div style="color:#fff;font-size:1.45rem;font-weight:700;line-height:1.2;">AI輔助調配系統｜智能算法 × 虛擬實驗室</div>
            <div style="color:#e9d5ff;font-size:0.85rem;margin-top:6px;">從2.1億種組合到45分鐘決策·預測準確98%·「AI擔保陳年」</div>
          </div>
        </div>
        <!-- 雙列：左=智能算法 右=虛擬實驗室 -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;">
          <!-- 左欄：三個算法卡片 -->
          <div style="display:flex;flex-direction:column;gap:12px;">
            <!-- 多目標優化引擎 -->
            <div style="background:linear-gradient(135deg,#2d1b69,#4c1d95);border-radius:10px;padding:14px;border-left:4px solid #a78bfa;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
                <span style="font-size:1.3rem;">🧮</span>
                <span style="color:#e9d5ff;font-size:0.9rem;font-weight:700;">多目標優化引擎</span>
                <span style="background:#7c3aed;color:#ede9fe;font-size:0.62rem;padding:2px 7px;border-radius:10px;margin-left:auto;">Pauillac案例</span>
              </div>
              <div style="background:rgba(167,139,250,0.12);border-radius:8px;padding:10px;">
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:7px;">
                  <div style="background:rgba(255,255,255,0.07);border-radius:6px;padding:6px;text-align:center;">
                    <div style="color:#fcd34d;font-size:0.62rem;">理論組合</div>
                    <div style="color:#fff;font-weight:700;font-size:1.05rem;">2.1億種</div>
                    <div style="color:#c4b5fd;font-size:0.6rem;">64種基酒×185,000L</div>
                  </div>
                  <div style="background:rgba(255,255,255,0.07);border-radius:6px;padding:6px;text-align:center;">
                    <div style="color:#fcd34d;font-size:0.62rem;">AI計算</div>
                    <div style="color:#a3e635;font-weight:700;font-size:1.05rem;">45分鐘</div>
                    <div style="color:#c4b5fd;font-size:0.6rem;">500萬方案</div>
                  </div>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;">
                  <div style="background:rgba(163,230,53,0.12);border-radius:5px;padding:6px;">
                    <div style="color:#d9f99d;font-size:0.67rem;font-weight:600;">🏆 預測96分→實際95.5</div>
                    <div style="color:#a3e635;font-size:0.62rem;">誤差僅0.5分</div>
                  </div>
                  <div style="background:rgba(251,191,36,0.12);border-radius:5px;padding:6px;">
                    <div style="color:#fde68a;font-size:0.67rem;font-weight:600;">💰 +€600,000收益</div>
                    <div style="color:#fcd34d;font-size:0.62rem;">利用率65%→73%</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 約束條件智能處理 -->
            <div style="background:linear-gradient(135deg,#1e3a5f,#1d4ed8);border-radius:10px;padding:14px;border-left:4px solid #60a5fa;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
                <span style="font-size:1.3rem;">⚙️</span>
                <span style="color:#bfdbfe;font-size:0.9rem;font-weight:700;">約束條件智能處理</span>
                <span style="background:#1e40af;color:#dbeafe;font-size:0.62rem;padding:2px 7px;border-radius:10px;margin-left:auto;">Saint-Émilion</span>
              </div>
              <div style="background:rgba(96,165,250,0.12);border-radius:8px;padding:10px;">
                <div style="color:#93c5fd;font-size:0.7rem;margin-bottom:6px;font-weight:600;">亞洲訂製款：12硬約束＋8軟約束</div>
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;margin-bottom:6px;">
                  <div style="background:rgba(255,255,255,0.08);border-radius:5px;padding:5px;text-align:center;">
                    <div style="color:#bfdbfe;font-size:0.62rem;">Merlot比例</div>
                    <div style="color:#60a5fa;font-weight:700;">78%</div>
                    <div style="color:#93c5fd;font-size:0.58rem;">≥60%要求</div>
                  </div>
                  <div style="background:rgba(255,255,255,0.08);border-radius:5px;padding:5px;text-align:center;">
                    <div style="color:#bfdbfe;font-size:0.62rem;">成本控制</div>
                    <div style="color:#34d399;font-weight:700;">€20.5/L</div>
                    <div style="color:#93c5fd;font-size:0.58rem;">≤€22上限</div>
                  </div>
                  <div style="background:rgba(255,255,255,0.08);border-radius:5px;padding:5px;text-align:center;">
                    <div style="color:#bfdbfe;font-size:0.62rem;">毛利率</div>
                    <div style="color:#fbbf24;font-weight:700;">64.8%</div>
                    <div style="color:#93c5fd;font-size:0.58rem;">翌年+15,000瓶</div>
                  </div>
                </div>
                <div style="background:rgba(52,211,153,0.12);border-radius:5px;padding:5px;color:#6ee7b7;font-size:0.68rem;">
                  ✅ 23分鐘求解·評分88.5分·開創「訂製化調配」新模式
                </div>
              </div>
            </div>
            <!-- 機器學習調配引擎 -->
            <div style="background:linear-gradient(135deg,#134e4a,#065f46);border-radius:10px;padding:14px;border-left:4px solid #34d399;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
                <span style="font-size:1.3rem;">🤖</span>
                <span style="color:#a7f3d0;font-size:0.9rem;font-weight:700;">機器學習調配引擎</span>
                <span style="background:#065f46;color:#6ee7b7;font-size:0.62rem;padding:2px 7px;border-radius:10px;margin-left:auto;">Margaux驚喜</span>
              </div>
              <div style="background:rgba(52,211,153,0.1);border-radius:8px;padding:10px;">
                <div style="color:#6ee7b7;font-size:0.7rem;margin-bottom:6px;font-weight:600;">挖掘25年數據：發現人類忽視的隱藏模式</div>
                <div style="background:rgba(251,191,36,0.1);border-radius:6px;padding:6px;margin-bottom:6px;">
                  <div style="color:#fde68a;font-size:0.68rem;font-weight:600;">🔍 反直覺推薦：地塊#11比例 3% → 22%</div>
                  <div style="color:#fcd34d;font-size:0.62rem;margin-top:2px;">「違背30年經驗！」→ 釀酒師決定盲品對比</div>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;">
                  <div style="background:rgba(220,38,38,0.18);border-radius:5px;padding:5px;text-align:center;">
                    <div style="color:#fca5a5;font-size:0.62rem;">傳統配方</div>
                    <div style="color:#ef4444;font-weight:700;font-size:1rem;">90分</div>
                  </div>
                  <div style="background:rgba(52,211,153,0.22);border-radius:5px;padding:5px;text-align:center;">
                    <div style="color:#a7f3d0;font-size:0.62rem;">AI配方</div>
                    <div style="color:#34d399;font-weight:700;font-size:1rem;">94分 🏆</div>
                  </div>
                </div>
                <div style="color:#a7f3d0;font-size:0.66rem;margin-top:5px;text-align:center;">
                  Wine Advocate 95分（10年最高）｜期酒+25%｜+€12/瓶
                </div>
              </div>
            </div>
          </div>
          <!-- 右欄：虛擬實驗室 -->
          <div style="display:flex;flex-direction:column;gap:12px;">
            <!-- 虛擬調配實驗室 -->
            <div style="background:linear-gradient(135deg,#78350f,#92400e);border-radius:10px;padding:14px;border-left:4px solid #fbbf24;flex:1;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
                <span style="font-size:1.3rem;">🥼</span>
                <span style="color:#fde68a;font-size:0.9rem;font-weight:700;">虛擬調配實驗室</span>
                <span style="background:#92400e;color:#fde68a;font-size:0.62rem;padding:2px 7px;border-radius:10px;margin-left:auto;">零風險</span>
              </div>
              <div style="background:rgba(251,191,36,0.12);border-radius:8px;padding:10px;">
                <div style="color:#fde68a;font-size:0.7rem;margin-bottom:8px;font-weight:600;">Pessac-Léognan白酒穩定性預警</div>
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:7px;">
                  <div style="background:rgba(255,255,255,0.08);border-radius:6px;padding:6px 8px;flex:1;text-align:center;">
                    <div style="color:#fed7aa;font-size:0.62rem;">虛擬模擬</div>
                    <div style="color:#fbbf24;font-weight:700;font-size:1.05rem;">2分鐘</div>
                    <div style="color:#fdba74;font-size:0.6rem;">傳統需1-2個月</div>
                  </div>
                  <div style="font-size:1.2rem;color:#fbbf24;">→</div>
                  <div style="background:rgba(239,68,68,0.22);border-radius:6px;padding:6px 8px;flex:1;text-align:center;">
                    <div style="color:#fca5a5;font-size:0.62rem;">⚠️ 警報發現</div>
                    <div style="color:#f87171;font-weight:700;font-size:0.88rem;">蛋白質沉澱</div>
                    <div style="color:#fca5a5;font-size:0.6rem;">風險68%</div>
                  </div>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;">
                  <div style="background:rgba(52,211,153,0.18);border-radius:5px;padding:6px;">
                    <div style="color:#6ee7b7;font-size:0.66rem;font-weight:600;">✅ 澄清預處理</div>
                    <div style="color:#a7f3d0;font-size:0.62rem;">成本僅€180</div>
                    <div style="color:#6ee7b7;font-size:0.62rem;">風險降至5%</div>
                  </div>
                  <div style="background:rgba(239,68,68,0.15);border-radius:5px;padding:6px;">
                    <div style="color:#fca5a5;font-size:0.66rem;font-weight:600;">❌ 若無預警</div>
                    <div style="color:#f87171;font-size:0.62rem;">10,000L混濁</div>
                    <div style="color:#ef4444;font-size:0.65rem;font-weight:700;">損失€120,000</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 50年陳年預測 -->
            <div style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:10px;padding:14px;border-left:4px solid #818cf8;flex:1;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
                <span style="font-size:1.3rem;">⏳</span>
                <span style="color:#c7d2fe;font-size:0.9rem;font-weight:700;">50年陳年潛力預測</span>
                <span style="background:#312e81;color:#c7d2fe;font-size:0.62rem;padding:2px 7px;border-radius:10px;margin-left:auto;">Pomerol</span>
              </div>
              <div style="background:rgba(129,140,248,0.12);border-radius:8px;padding:10px;">
                <div style="color:#c7d2fe;font-size:0.7rem;margin-bottom:7px;font-weight:600;">3個配方AI陳年預測對比</div>
                <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:7px;">
                  <div style="display:flex;align-items:center;gap:5px;background:rgba(220,38,38,0.18);border-radius:5px;padding:5px 7px;">
                    <span style="color:#ef4444;font-size:0.68rem;min-width:40px;">方案A</span>
                    <div style="flex:1;background:rgba(255,255,255,0.1);border-radius:3px;height:5px;overflow:hidden;">
                      <div style="width:59%;height:100%;background:#ef4444;border-radius:3px;"></div>
                    </div>
                    <span style="color:#fca5a5;font-size:0.62rem;">89分·封閉25年</span>
                  </div>
                  <div style="display:flex;align-items:center;gap:5px;background:rgba(52,211,153,0.18);border-radius:5px;padding:5px 7px;">
                    <span style="color:#34d399;font-size:0.68rem;min-width:40px;">方案B ✓</span>
                    <div style="flex:1;background:rgba(255,255,255,0.1);border-radius:3px;height:5px;overflow:hidden;">
                      <div style="width:91%;height:100%;background:#34d399;border-radius:3px;"></div>
                    </div>
                    <span style="color:#6ee7b7;font-size:0.62rem;">91分·30年巔峰</span>
                  </div>
                  <div style="display:flex;align-items:center;gap:5px;background:rgba(239,68,68,0.12);border-radius:5px;padding:5px 7px;">
                    <span style="color:#f87171;font-size:0.68rem;min-width:40px;">方案C ✗</span>
                    <div style="flex:1;background:rgba(255,255,255,0.1);border-radius:3px;height:5px;overflow:hidden;">
                      <div style="width:20%;height:100%;background:#f87171;border-radius:3px;"></div>
                    </div>
                    <span style="color:#fca5a5;font-size:0.62rem;">30年後不適飲</span>
                  </div>
                </div>
                <div style="background:rgba(251,191,36,0.12);border-radius:6px;padding:7px;text-align:center;">
                  <div style="color:#fde68a;font-size:0.68rem;font-weight:600;">限量6,660瓶｜首批3,000瓶2週售罄</div>
                  <div style="color:#fcd34d;font-size:0.62rem;margin-top:2px;">每瓶附AI陳年曲線｜「AI擔保陳年承諾」</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 底部統計條 -->
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
          <div style="background:linear-gradient(135deg,#4c1d95,#6d28d9);border-radius:8px;padding:10px;text-align:center;">
            <div style="color:#fbbf24;font-size:1.4rem;font-weight:800;">85%</div>
            <div style="color:#ede9fe;font-size:0.7rem;margin-top:2px;">決策時間節省</div>
            <div style="color:#c4b5fd;font-size:0.62rem;">從6週→3天</div>
          </div>
          <div style="background:linear-gradient(135deg,#1e3a5f,#1d4ed8);border-radius:8px;padding:10px;text-align:center;">
            <div style="color:#60a5fa;font-size:1.4rem;font-weight:800;">98%</div>
            <div style="color:#bfdbfe;font-size:0.7rem;margin-top:2px;">預測準確度</div>
            <div style="color:#93c5fd;font-size:0.62rem;">500萬方案分析</div>
          </div>
          <div style="background:linear-gradient(135deg,#78350f,#92400e);border-radius:8px;padding:10px;text-align:center;">
            <div style="color:#fbbf24;font-size:1.4rem;font-weight:800;">€120,000</div>
            <div style="color:#fde68a;font-size:0.7rem;margin-top:2px;">虛擬實驗室</div>
            <div style="color:#fdba74;font-size:0.62rem;">每次避免損失</div>
          </div>
          <div style="background:linear-gradient(135deg,#134e4a,#065f46);border-radius:8px;padding:10px;text-align:center;">
            <div style="color:#34d399;font-size:1.4rem;font-weight:800;">+5分</div>
            <div style="color:#a7f3d0;font-size:0.7rem;margin-top:2px;">WA評分提升</div>
            <div style="color:#6ee7b7;font-size:0.62rem;">AI發現隱藏配方</div>
          </div>
        </div>
        <!--ORIGINAL:
      <div class="chapter-content">
        <div class="ai-blending-system">
          <h3>🎨 AI輔助調配系統</h3>
          <p class="intro-text">調配是釀酒的「最後一哩路」，也是最複雜的藝術決策。一個頂級酒莊可能有20-50個不同地塊的基酒，理論組合超過百萬種。傳統依賴釀酒大師的經驗和直覺，而AI系統能在數秒內計算所有可能性，找出最優解——這不是取代藝術，而是讓藝術更精確。</p>
          
          <div class="intelligent-algorithms">
            <h4>🧮 智能調配算法</h4>
            <div class="algorithm-systems">
              <div class="mathematical-optimization">
                <h5>多目標優化引擎</h5>
                <p>• <strong>品質最大化：</strong>在成本約束下追求最高品質<br>
                • <strong>風格一致性：</strong>確保年復一年的品牌風格<br>
                • <strong>庫存優化：</strong>合理利用現有庫存資源<br>
                • <strong>成本控制：</strong>在品質要求下最小化成本</p>
                
                <div class="example-box">
                  <h6>💡 多目標優化實戰：Pauillac一級莊2024年正副牌調配案例</h6>
                  <p>調配挑戰：64種基酒，185,000L，理論組合2.1億種，傳統需要4-6週。<br><br>
                  
                  <strong>AI優化結果（45分鐘計算500萬方案）：</strong><br>
                  正牌酒配方（50,000L）預測96分，成本€36.2/L，風格相似度94%。實際品鑑95.5分，誤差僅0.5分。<br><br>
                  
                  <strong>經濟效益：</strong>決策時間從6週縮短到3天，正牌產量多5%（+2,500L），額外收益€600,000，原料利用率從65%提升到73%。</p>
                </div>
              </div>
              
              <div class="constraint-handling">
                <h5>約束條件智能處理</h5>
                <p>• <strong>法規遵循：</strong>自動確保AOC法規要求<br>
                • <strong>供應鏈限制：</strong>實時考慮可用庫存<br>
                • <strong>技術可行性：</strong>驗證調配操作可行性<br>
                • <strong>市場差異化：</strong>滿足不同市場需求</p>
                
                <div class="example-box">
                  <h6>💡 複雜約束處理：Saint-Émilion亞洲市場特別款</h6>
                  <p>挑戰：滿足12個硬約束+8個軟約束，包括Merlot≥60%、成本≤€22/L、果味比正牌高20%等。<br><br>
                  
                  <strong>AI求解（23分鐘）：</strong><br>
                  找到可行方案，Merlot 78%，成本€20.5/L，預測評分89分。實際評分88.5分，中國進口商高度滿意。<br><br>
                  
                  <strong>商業成功：</strong>毛利率64.8%，2025年追加訂單15,000瓶，開創「訂製化調配」新模式。</p>
                </div>
              </div>
              
              <div class="machine-learning-blending">
                <h5>機器學習調配引擎</h5>
                <p>• <strong>強化學習：</strong>從每次調配的品鑑反饋中學習<br>
                • <strong>經驗累積：</strong>整合20年以上的調配歷史數據<br>
                • <strong>模式發現：</strong>發現人類難以察覺的調配規律<br>
                • <strong>創新探索：</strong>在傳統範圍內探索創新組合</p>
                
                <div class="example-box">
                  <h6>💡 機器學習創新：Margaux三級莊的「意外發現」</h6>
                  <p>AI分析25年數據，發現溫暖年份的隱藏模式，推薦將傳統副牌地塊#11比例從3%提升到22%（歷史最高）。<br><br>
                  
                  <strong>釀酒師質疑：</strong>「違背30年經驗！」決定測試對比。<br><br>
                  
                  <strong>盲品結果（4個月後）：</strong><br>
                  傳統配方90分，AI配方94分！3位大師級釀酒師一致認為「今年品到最平衡的Margaux」。<br><br>
                  
                  <strong>AI解釋：</strong>高溫年份地塊#11單寧更細膩、酸度更好，完美補充地塊#3的強勁結構。2003年有類似嘗試但被忽視。<br><br>
                  
                  <strong>市場反饋：</strong>Wine Advocate 95分（10年最高），期酒銷售漲25%，價格提升€12/瓶。<br><br>
                  
                  莊主反思：「AI從數據中發現了我們25年來忽視的模式，幫助突破思維定式。」</p>
                </div>
              </div>
            </div>
          </div>

          <div class="virtual-laboratory">
            <h4>🥼 虛擬調配實驗室</h4>
            <div class="simulation-systems">
              <div class="blending-simulation">
                <h5>調配效果即時模擬</h5>
                <p>• <strong>化學成分預測：</strong>精確計算混合後的所有成分<br>
                • <strong>反應模擬：</strong>預測不同酒液混合的化學變化<br>
                • <strong>穩定性評估：</strong>預測調配酒的儲存穩定性<br>
                • <strong>感官預測：</strong>模擬香氣、口感、平衡性</p>
                
                <div class="example-box">
                  <h6>💡 虛擬實驗室救援：Pessac-Léognan白酒穩定性預警</h6>
                  <p>挑戰：3種白酒基酒調配10,000L，傳統需實際混合觀察1-2個月。<br><br>
                  
                  <strong>虛擬模擬（2分鐘）：</strong><br>
                  ⚠️ 高級警報！預測48小時內可能產生蛋白質沉澱，風險68%。<br><br>
                  
                  <strong>原因：</strong>批次B橡木桶陳年蛋白質與批次A高酸度反應。<br><br>
                  
                  <strong>AI推薦方案：</strong>批次B先進行膨潤土澄清，移除過量蛋白質。沉澱風險降至5%，風味損失<2%，額外成本僅€180。<br><br>
                  
                  <strong>實際結果：</strong>處理後調配，7天完全穩定，品鑑91分。<br><br>
                  
                  <strong>若無預警：</strong>可能直接調配10,000L，48小時後混濁，損失€120,000。<br><br>
                  
                  這就是「零風險調配」的未來！</p>
                </div>
              </div>
              
              <div class="aging-prediction">
                <h5>陳年潛力預測系統</h5>
                <p>• <strong>化學演變模擬：</strong>預測5-30年的化學變化<br>
                • <strong>品質曲線：</strong>預測最佳適飲期和巔峰期<br>
                • <strong>風險評估：</strong>識別可能的陳年問題<br>
                • <strong>價值預測：</strong>預估未來市場價值</p>
                
                <div class="example-box">
                  <h6>💡 50年陳年預測：Pomerol投資級特別款</h6>
                  <p>挑戰：推出€350/瓶的「50年陳年潛力」特別款，必須確保真能陳年50年。<br><br>
                  
                  <strong>AI預測3個候選配方：</strong><br>
                  方案A（高單寧）：50年後89分，15-25年封閉期，中等風險。<br>
                  方案B（平衡型）：50年後仍91分，15-45年巔峰期（30年窗口），低風險 ✓✓<br>
                  方案C（果味型）：30年後不適飲，極高風險 ✗✗<br><br>
                  
                  <strong>AI推薦方案B：</strong><br>
                  高酸度（6.2 g/L）抗氧化，適中單寧避免過度收斂，平衡酚類緩慢演變。<br><br>
                  
                  <strong>市場反應：</strong><br>
                  限量6,660瓶，首批3,000瓶2週售罄。每瓶附帶AI預測陳年曲線，建立「數字雙胞胎」在線追蹤。<br><br>
                  
                  <strong>創新承諾：</strong>每5年開瓶驗證AI預測，建立「AI擔保的陳年承諾」——這是葡萄酒業的「登月計劃」！</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="blending-system-value">
            <h4>🎯 AI調配系統的革命性價值</h4>
            <div class="comprehensive-value">
              <p><strong>決策效率革命：</strong><br>
              • 計算速度：從6週縮短到 <strong>數小時</strong><br>
              • 方案數量：從10-20個增加到 <strong>數百萬個</strong><br>
              • 品鑑師工作量：減少 <strong>80-90%</strong><br>
              • 決策時間：節省 <strong>85%</strong><br><br>
              
              <strong>品質提升：</strong><br>
              • 預測準確度：<strong>95-98%</strong><br>
              • 風格一致性：提升 <strong>40%</strong><br>
              • 發現隱藏模式：人類難以察覺的配方優化<br>
              • 創新能力：在傳統框架內探索新可能<br><br>
              
              <strong>風險控制：</strong><br>
              • 虛擬測試：避免 <strong>100%</strong> 的實體試錯損失<br>
              • 穩定性預測：提前發現潛在問題<br>
              • 陳年風險：量化評估長期品質<br>
              • 調配失敗率：從15%降至 <strong>2%</strong><br><br>
              
              <strong>經濟效益：</strong><br>
              • 原料利用率：提升 <strong>8-15%</strong><br>
              • 單次項目收益：平均 <strong>€300,000-€600,000</strong><br>
              • 系統投資回收期：<strong>1-2年</strong><br>
              • 品牌價值提升：不可估量<br><br>
              
              <strong>創新價值：</strong><br>
              • 突破傳統思維定式<br>
              • 發現數據中的隱藏規律<br>
              • 實現「訂製化調配」新模式<br>
              • 開創「AI擔保陳年」的投資級產品<br>
              • <strong>這是釀酒藝術與科學的完美結合</strong></p>
            </div>
          </div>
        </div>
      </div>
        -->
      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🧮',
        title: '智能優化',
        content: '45分鐘計算500萬方案，預測準確度98%，額外收益€588,000'
      },
      {
        id: 2,
        icon: '🥼',
        title: '虛擬實驗',
        content: '2分鐘預測陳年50年品質，避免€120,000損失，零風險調配'
      }
    ]
  },

  // 第三章知識檢測
  {
    type: 'interactive-quiz',
    title: '第三章知識檢測：人工智能在釀造中的應用',
    questions: [
      {
        id: 1,
        question: 'AI調配系統如何輔助釀酒師？',
        options: [
          '完全替代釀酒師決策',
          '分析數萬種組合提供建議，最終由釀酒師決定',
          '只用於記錄數據',
          '隨機生成方案'
        ],
        correct: 1,
        explanation: 'AI通過分析歷史數據和模擬數萬種調配組合，提供科學建議，但最終決策權仍在釀酒師手中，實現AI與人類經驗的完美結合。'
      },
      {
        id: 2,
        question: 'AI預測陳年潛力的準確率可達？',
        options: [
          '50%左右',
          '85-92%',
          '100%完美',
          '無法預測'
        ],
        correct: 1,
        explanation: '通過機器學習分析化學成分、感官特性和歷史陳年數據，AI預測陳年潛力的準確率可達85-92%，為投資和庫存管理提供科學依據。'
      }
    ]
  },

  // 總結
  {
    type: 'summary',
    title: '課程總結：科技創新的智慧融合',
    content: `
      <div class="summary-content">
        <div class="technology-integration">
          <h3>🔗 技術整合的核心價值</h3>
          <div class="core-values">
            <div class="value-item">
              <h4>🎯 精準管理</h4>
              <p>通過精準農業技術實現精細化管理，提升資源利用效率和產品品質</p>
            </div>
            <div class="value-item">
              <h4>📊 數據驅動</h4>
              <p>基於大數據分析的科學決策，減少經驗依賴，提高決策準確性</p>
            </div>
            <div class="value-item">
              <h4>🤖 智能優化</h4>
              <p>AI技術在釀造工藝中的應用，實現傳統工藝與現代科技的完美融合</p>
            </div>
            <div class="value-item">
              <h4>🔄 持續創新</h4>
              <p>保持技術創新活力，在變化中尋找新的發展機遇和競爭優勢</p>
            </div>
          </div>
        </div>

        <div class="future-outlook">
          <h3>🔮 技術發展的前景展望</h3>
          <p>第一部分課程展示了科技創新在波爾多葡萄酒業中的巨大潛力。從精準農業的遙感監測，
          到大數據分析的智能決策，再到人工智能的釀造優化，每一項技術都在推動產業向更高效、
          更智能、更可持續的方向發展。這些技術不是要取代傳統，而是要讓傳統更加精確、
          更加科學。在第二部分中，我們將進一步探討消費者趨勢、氣候變遷應對技術，
          以及波爾多葡萄酒業的未來發展方向。</p>
        </div>
      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🔗',
        title: '技術整合',
        content: '精準管理、數據驅動、智能優化和持續創新是技術應用的四大核心價值'
      },
      {
        id: 2,
        icon: '🔮',
        title: '未來展望',
        content: '科技創新將推動波爾多葡萄酒業向更高效智能可持續的方向發展'
      }
    ]
  },

  // 第一部分測驗
  {
    type: 'quiz',
    title: '第一部分測驗：精準農業與智能釀造',
    questions: [
      {
        id: 1,
        question: '精準農業中NDVI（歸一化植被指數）監測的主要作用是？',
        options: [
          '監測土壤pH值變化',
          '評估葡萄藤生長狀況和健康程度',
          '預測天氣變化趨勢',
          '計算灌溉水的用量'
        ],
        correct: 1,
        explanation: 'NDVI通過多光譜衛星影像分析，能夠即時監測葡萄藤的生長狀況和健康程度，識別田間不同區域的生長差異，並提前發現壓力或病害。'
      },
      {
        id: 2,
        question: '物聯網感測器在葡萄園管理中最重要的優勢是？',
        options: [
          '降低設備購買成本',
          '提供24/7連續監測和即時數據',
          '完全替代人工管理',
          '消除所有農業風險'
        ],
        correct: 1,
        explanation: '物聯網感測器的核心優勢是提供全天候連續監測，收集即時環境和土壤數據，為科學決策提供準確的數據基礎。'
      },
      {
        id: 3,
        question: '機器學習在葡萄酒生產中的主要應用領域包括？',
        options: [
          '僅用於市場營銷',
          '產量預測、病害預測和釀造優化',
          '只能預測天氣變化',
          '僅用於財務管理'
        ],
        correct: 1,
        explanation: '機器學習在葡萄酒生產中有廣泛應用，包括產量預測、病害早期預警、釀造工藝參數優化、品質預測等多個關鍵領域。'
      },
      {
        id: 4,
        question: 'AI發酵管理系統的核心功能是？',
        options: [
          '完全自動化所有釀造過程',
          '智能溫度控制和發酵過程監控',
          '替代所有釀酒師的工作',
          '只能監測發酵溫度'
        ],
        correct: 1,
        explanation: 'AI發酵管理系統的核心是智能溫度控制和全面的發酵過程監控，包括密度、pH值、CO2產生等參數的即時追蹤和異常檢測。'
      },
      {
        id: 5,
        question: '虛擬調配實驗室的主要價值在於？',
        options: [
          '完全替代實際的調配試驗',
          '預測調配效果並進行經濟效益分析',
          '只能計算成本',
          '僅用於訓練新員工'
        ],
        correct: 1,
        explanation: '虛擬調配實驗室能夠預測化學成分和感官特徵，模擬調配效果，並進行全面的經濟效益分析，大大提高調配決策的科學性和效率。'
      }
    ],
    passingScore: 80,
    timeLimit: 300
  }
];

export default l313Part1Content;
