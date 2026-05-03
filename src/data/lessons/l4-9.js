import { makeL4Lesson } from './l4-shared.js'

const _l49Base = makeL4Lesson({
  cover: {
    title: '感官科學與盲品框架（專家級）',
    subtitle: 'Level 4 - 課程 9',
    background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #c4b5fd 100%)',
    icon: '👃'
  },
  intro: {
    content: '建立系統化的感官評估體系，從神經生理機制到盲品校準流程，掌握缺陷識別、典型性判讀與評分一致性，實現可重現的專家級品評。'
  },
  objectives: [
    { id: 1, text: '理解味覺/嗅覺神經機制與感官適應', icon: '🧠' },
    { id: 2, text: '建立標準化校準流程與評分一致性', icon: '🎯' },
    { id: 3, text: '識別並量化葡萄酒缺陷與矯正方案', icon: '🔬' },
    { id: 4, text: '運用典型性矩陣進行盲品產區判讀', icon: '🗺️' }
  ],
  chapters: [
    {
      title: '第一章：感官科學基礎與神經機制',
      nav: '感官科學',
      icon: '🧠',
      highlightDelayStep: '0.06s',
      html: `
        <div class="chapter-content">
          <h3>嗅覺受體與神經傳導</h3>
          <table class="data-table">
            <thead>
              <tr><th>階段</th><th>機制</th><th>關鍵要素</th><th>葡萄酒應用</th></tr>
            </thead>
            <tbody>
              <tr><td>1. 揮發物釋放</td><td>分子從酒液揮發至鼻腔</td><td>溫度、搖杯、酒精濃度</td><td>適溫提升香氣釋放</td></tr>
              <tr><td>2. 受體結合</td><td>氣味分子與嗅覺受體蛋白結合</td><td>~400 種受體 (人類)</td><td>複雜香氣需多受體共同識別</td></tr>
              <tr><td>3. 訊號轉換</td><td>G 蛋白偶聯受體 GPCR (G Protein-Coupled Receptor) 放大訊號</td><td>cAMP (cyclic Adenosine Monophosphate) 二級訊使</td><td>極低濃度可被偵測 (ppt 級)</td></tr>
              <tr><td>4. 嗅球處理</td><td>訊號彙集至嗅球 glomeruli</td><td>空間編碼模式</td><td>不同香氣產生獨特編碼</td></tr>
              <tr><td>5. 大腦整合</td><td>前嗅皮質、杏仁核、海馬體</td><td>記憶、情緒連結</td><td>香氣觸發產區/品種聯想</td></tr>
            </tbody>
          </table>
          <h3>味覺受體分布與感知</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>基本味覺</th><th>受體類型</th><th>敏感區域</th><th>葡萄酒中來源</th><th>閾值</th></tr>
            </thead>
            <tbody>
              <tr><td>甜味</td><td>T1R2+T1R3</td><td>舌尖、軟顎</td><td>殘糖、甘油</td><td>0.5~1% (葡萄糖)</td></tr>
              <tr><td>酸味</td><td>H⁺ 離子通道</td><td>舌側</td><td>酒石酸、蘋果酸</td><td>pH 3.0 可感</td></tr>
              <tr><td>苦味</td><td>T2R (25 種)</td><td>舌根</td><td>單寧、種子多酚</td><td>極低 (演化保護機制)</td></tr>
              <tr><td>鹹味</td><td>Na⁺ 通道</td><td>舌前側</td><td>礦物質 (微量)</td><td>0.05% NaCl</td></tr>
              <tr><td>鮮味</td><td>T1R1+T1R3</td><td>全舌</td><td>氨基酸 (陳年)</td><td>0.01% MSG (Monosodium Glutamate)</td></tr>
            </tbody>
          </table>
          <h3>感官適應與疲勞</h3>
          <div class="sensory-adaptation-widget">
            <input type="radio" id="adapt-olfactory" name="adaptation-type" class="opt-olfactory" checked>
            <input type="radio" id="adapt-gustatory" name="adaptation-type" class="opt-gustatory">
            <input type="radio" id="adapt-cross" name="adaptation-type" class="opt-cross">
            <div class="selectors">
              <label for="adapt-olfactory">嗅覺適應</label>
              <label for="adapt-gustatory">味覺疲勞</label>
              <label for="adapt-cross">跨感官影響</label>
            </div>
            <div class="panels">
              <div class="panel" data-adapt="olfactory">
                <h4>嗅覺適應 (Olfactory Adaptation)</h4>
                <ul>
                  <li><strong>快速適應</strong>: 持續暴露於同一香氣 30~60 秒後，感知強度下降 50~70%。</li>
                  <li><strong>受體飽和</strong>: 嗅覺受體去敏化，需 3~5 分鐘恢復。</li>
                  <li><strong>盲品應對</strong>:
                    <ul>
                      <li>每款酒間隔 2~3 分鐘，中間聞咖啡豆或自己手臂 (重置嗅覺)。</li>
                      <li>避免連續品評同一品種 (如連續 5 款 Cabernet)。</li>
                      <li>開場先聞中性樣品 (水、酒精溶液) 校準基準。</li>
                    </ul>
                  </li>
                </ul>
                <p class="note">嗅覺疲勞是品評最大敵人，專業面板每天品評不超過 40~50 款。</p>
              </div>
              <div class="panel" data-adapt="gustatory">
                <h4>味覺疲勞 Gustatory Fatigue</h4>
                <ul>
                  <li><strong>酸疲勞</strong>: 連續品評高酸酒後，敏感度下降，建議用清水漱口。</li>
                  <li><strong>單寧累積</strong>: 單寧與唾液蛋白結合產生澀感，需間隔並食用中性食物 (麵包)。</li>
                  <li><strong>酒精麻痺</strong>: 高酒精度酒款麻痺味蕾，品評順序應從低到高 ABV (Alcohol by Volume)。</li>
                  <li><strong>甜味飽和</strong>: 甜酒後品干型酒會顯得過酸，需調整順序 (干→甜)。</li>
                </ul>
                <p class="note">標準品評順序: 氣泡→白 (干→甜)→紅 (輕→重)→加烈甜酒。</p>
              </div>
              <div class="panel" data-adapt="cross">
                <h4>跨感官影響 Cross-modal Effects</h4>
                <ul>
                  <li><strong>顏色偏誤</strong>: 深色酒被評為更濃郁 (視覺影響味覺)，盲品需用黑色杯或紅光。</li>
                  <li><strong>溫度影響</strong>: 低溫抑制甜味感知 (+30%)、增強酸味 (+20%)，高溫反之。</li>
                  <li><strong>音響效應</strong>: 高頻聲音增強甜味感知，低頻增強苦味 (避免吵雜環境)。</li>
                  <li><strong>期望效應</strong>: 已知品牌/價格會提升評分 15~20% (盲品消除偏誤)。</li>
                </ul>
                <p class="note">專業品評室需控制: 白光 (5000K)、20~22°C、無香氛、安靜環境。</p>
              </div>
            </div>
          </div>
          <h3>感官記憶與訓練</h3>
          <ul>
            <li><strong>短期感官記憶</strong>: 僅保留 3~7 個香氣特徵，需立即記錄。</li>
            <li><strong>長期記憶建立</strong>: 重複暴露 (10+ 次) 建立穩定香氣-詞彙連結。</li>
            <li><strong>標準樣品庫</strong>: 使用 Le Nez du Vin 等香氣套組訓練識別準確度。</li>
            <li><strong>盲品訓練</strong>: 每週至少 2 次盲品 (3~5 款)，記錄錯誤模式並校正。</li>
          </ul>
          <h3>個體差異與基因影響</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>變異因素</th><th>影響</th><th>人群占比</th><th>品評調整</th></tr>
            </thead>
            <tbody>
              <tr><td>TAS2R38 基因</td><td>苦味敏感度差異 10 倍</td><td>25% 超級品嚐者</td><td>苦味評分需校準</td></tr>
              <tr><td>OR7D4 基因</td><td>雄烯酮 (androstenone) 無法感知</td><td>~30% 嗅盲</td><td>避免作為主要描述詞</td></tr>
              <tr><td>年齡</td><td>60 歲後嗅覺受體減少 50%</td><td>老化影響</td><td>定期重新校準</td></tr>
              <tr><td>性別</td><td>女性平均嗅覺敏感度高 10~15%</td><td>生理差異</td><td>面板性別平衡</td></tr>
            </tbody>
          </table>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🔬', title: '嗅覺機制', content: '~400 種受體，ppt 級偵測，空間編碼模式。' },
        { id: 2, icon: '⏱️', title: '快速適應', content: '60 秒內感知下降 50%，需間隔與重置。' },
        { id: 3, icon: '🧬', title: '基因差異', content: 'TAS2R38 造成苦味敏感度差異 10 倍。' }
      ]
    },
    {
      title: '第二章：標準化品評流程與校準',
      nav: '校準流程',
      icon: '🎯',
      highlightDelayStep: '0.07s',
      html: `
        <div class="chapter-content">
          <h3>SAT (Systematic Approach to Tasting) 結構化流程</h3>
          <ol>
            <li><strong>視覺評估 (30 秒)</strong>: 澄清度、濃度、顏色、黏度、氣泡 (若有)。</li>
            <li><strong>嗅覺評估 (90 秒)</strong>: 狀態、強度、發展階段、香氣特徵 (3 層次)。</li>
            <li><strong>味覺評估 (60 秒)</strong>: 甜度、酸度、單寧、酒精、酒體、風味強度、餘韻。</li>
            <li><strong>結論 (30 秒)</strong>: 品質評級、發展潛力、典型性、產區/品種推論。</li>
          </ol>
          <h3>系統化品評表 (SAT)</h3>
          <table class="data-table">
            <thead>
              <tr><th>評估項目</th><th>評分尺度</th><th>關鍵指標</th><th>典型描述詞</th></tr>
            </thead>
            <tbody>
              <tr><td>外觀濃度</td><td>淡 / 中 / 深</td><td>色素密度、透光性</td><td>Pale, Medium, Deep</td></tr>
              <tr><td>香氣強度</td><td>淡 / 中- / 中 / 中+ / 濃</td><td>初聞 (不搖杯) 可感程度</td><td>Light, Pronounced</td></tr>
              <tr><td>酸度</td><td>低 / 中- / 中 / 中+ / 高</td><td>唾液分泌、舌側刺激</td><td>Low, High</td></tr>
              <tr><td>單寧</td><td>低 / 中- / 中 / 中+ / 高</td><td>澀感強度、質地</td><td>Fine-grained, Grippy</td></tr>
              <tr><td>酒體</td><td>淡 / 中- / 中 / 中+ / 飽滿</td><td>口腔重量感、黏度</td><td>Light, Full-bodied</td></tr>
              <tr><td>餘韻</td><td>短 / 中- / 中 / 中+ / 長</td><td>吞嚥後持續時間 (秒)</td><td>Short (<3s), Long (>8s)</td></tr>
              <tr><td>品質</td><td>差 / 可接受 / 良好 / 優 / 傑出</td><td>平衡、複雜度、餘韻</td><td>Acceptable, Outstanding</td></tr>
            </tbody>
          </table>
          <h3>校準訓練方法</h3>
          <div class="calibration-method-widget">
            <input type="radio" id="calib-triangle" name="calibration-method" class="opt-triangle" checked>
            <input type="radio" id="calib-reference" name="calibration-method" class="opt-reference">
            <input type="radio" id="calib-consensus" name="calibration-method" class="opt-consensus">
            <div class="selectors">
              <label for="calib-triangle">三角測試</label>
              <label for="calib-reference">標準樣品</label>
              <label for="calib-consensus">共識會議</label>
            </div>
            <div class="panels">
              <div class="panel" data-method="triangle">
                <h4>三角測試 (Triangle Test)</h4>
                <p><strong>目的</strong>: 測試品評者區分細微差異的能力。</p>
                <p><strong>流程</strong>:</p>
                <ol>
                  <li>提供 3 杯酒: 2 杯相同 (A)、1 杯不同 (B)。</li>
                  <li>品評者需識別哪一杯與其他兩杯不同。</li>
                  <li>隨機猜測正確率 33%，統計顯著需 > 60% (n=20)。</li>
                </ol>
                <p><strong>應用案例</strong>:</p>
                <ul>
                  <li>測試是否能區分同產區不同地塊 (Pauillac vs St-Julien)。</li>
                  <li>測試是否能區分不同橡木桶處理 (法國桶 vs 美國桶)。</li>
                  <li>測試缺陷閾值 (如 TCA 2 ng/L vs 4 ng/L)。</li>
                </ul>
                <p class="note">訓練建議: 每月 1 次三角測試，追蹤正確率趨勢。</p>
              </div>
              <div class="panel" data-method="reference">
                <h4>標準樣品校準 (Reference Standards)</h4>
                <p><strong>目的</strong>: 建立共同的評分基準。</p>
                <p><strong>流程</strong>:</p>
                <ol>
                  <li>準備已知品質等級的樣品 (Good, Very Good, Outstanding)。</li>
                  <li>全體品評者獨立評分。</li>
                  <li>比對評分與標準答案，識別系統性偏差。</li>
                  <li>調整個人評分尺度 (如某人系統性低估 5 分)。</li>
                </ol>
                <p><strong>標準樣品庫示例</strong>:</p>
                <table class="data-table compact">
                  <thead>
                    <tr><th>品質等級</th><th>參考酒款</th><th>關鍵特徵</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Acceptable (65~69)</td><td>基本 AC Bordeaux</td><td>無缺陷但缺乏複雜度</td></tr>
                    <tr><td>Good (70~79)</td><td>村莊級 Burgundy</td><td>正確、平衡、典型</td></tr>
                    <tr><td>Very Good (80~89)</td><td>Cru Bourgeois Médoc</td><td>複雜、平衡、餘韻中+</td></tr>
                    <tr><td>Outstanding (90~100)</td><td>Grand Cru Classé</td><td>卓越複雜度與陳年潛力</td></tr>
                  </tbody>
                </table>
                <p class="note">每季度重新校準一次，使用新年份樣品。</p>
              </div>
              <div class="panel" data-method="consensus">
                <h4>共識會議 (Consensus Discussion)</h4>
                <p><strong>目的</strong>: 統一描述詞使用與評分標準。</p>
                <p><strong>流程</strong>:</p>
                <ol>
                  <li>品評者獨立評估同一酒款並打分。</li>
                  <li>公開所有評分，計算標準差 (SD)。</li>
                  <li>若 SD > 5 分，進行討論:
                    <ul>
                      <li>高分者說明為何給高分 (複雜度、平衡、餘韻)。</li>
                      <li>低分者說明扣分原因 (缺陷、不平衡)。</li>
                    </ul>
                  </li>
                  <li>重新品評並修正評分，達成共識 (SD < 3)。</li>
                </ol>
                <p><strong>常見分歧來源</strong>:</p>
                <ul>
                  <li><strong>描述詞歧義</strong>: "Earthy" 可能指正面礦物感或負面霉味。</li>
                  <li><strong>個人偏好</strong>: 高酸愛好者vs高酒精愛好者。</li>
                  <li><strong>經驗差距</strong>: 新手與專家對 "複雜度" 理解不同。</li>
                </ul>
                <p class="note">共識會議不是要求完全一致，而是縮小無謂分歧。</p>
              </div>
            </div>
          </div>
          <h3>評分一致性指標</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>指標</th><th>計算方式</th><th>合格標準</th><th>應用</th></tr>
            </thead>
            <tbody>
              <tr><td>組內相關係數 (ICC)</td><td>品評者間評分相關性</td><td>ICC > 0.75</td><td>面板整體信度</td></tr>
              <tr><td>標準差 (SD)</td><td>同酒款評分離散程度</td><td>SD < 5 分</td><td>單一酒款共識</td></tr>
              <tr><td>重測信度</td><td>同品評者 2 週後重測相關</td><td>r > 0.85</td><td>個人穩定性</td></tr>
              <tr><td>敏感度 (d')</td><td>區分能力 (信號偵測理論)</td><td>d' > 1.5</td><td>品評者篩選</td></tr>
            </tbody>
          </table>
          <h3>盲品環境標準化</h3>
          <ul>
            <li><strong>酒杯</strong>: ISO 標準杯 (INAO 杯)，容量 210 ml，倒 50 ml。</li>
            <li><strong>溫度</strong>: 白酒 10~12°C，紅酒 16~18°C，±2°C 控制。</li>
            <li><strong>順序</strong>: 隨機化避免順序效應，使用拉丁方格設計。</li>
            <li><strong>編碼</strong>: 三位數隨機碼，避免誘導性編號 (如 1, 2, 3)。</li>
            <li><strong>時間</strong>: 上午 10~12 點最佳 (感官敏銳度高峰)。</li>
          </ul>
        </div>
      `,
      highlights: [
        { id: 1, icon: '📋', title: 'SAT 流程', content: '視覺 30s → 嗅覺 90s → 味覺 60s → 結論 30s。' },
        { id: 2, icon: '🎯', title: '三角測試', content: '統計顯著需正確率 > 60% (n=20)。' },
        { id: 3, icon: '📊', title: '一致性指標', content: 'ICC > 0.75、SD < 5、重測 r > 0.85。' }
      ]
    },
    {
      title: '第三章：葡萄酒缺陷識別與量化',
      nav: '缺陷識別',
      icon: '🔬',
      highlightDelayStep: '0.08s',
      html: `
        <div class="chapter-content">
          <h3>常見葡萄酒缺陷分類</h3>
          <table class="data-table">
            <thead>
              <tr><th>缺陷類型</th><th>化學來源</th><th>感官特徵</th><th>閾值</th><th>來源</th></tr>
            </thead>
            <tbody>
              <tr><td>軟木塞污染</td><td>TCA (三氯苯甲醚)</td><td>潮濕紙板、霉味、果味壓抑</td><td>2~4 ng/L</td><td>受污染軟木塞</td></tr>
              <tr><td>揮發酸</td><td>乙酸 (VA)</td><td>醋味、指甲油去光水</td><td>0.7 g/L (紅)、0.6 g/L (白)</td><td>醋酸菌、Brettanomyces</td></tr>
              <tr><td>Brett 污染</td><td>4-EP, 4-EG</td><td>馬廄、OK 繃、煙燻培根</td><td>400~600 μg/L</td><td>Brettanomyces 酵母</td></tr>
              <tr><td>還原味</td><td>H₂S, 硫醇</td><td>臭雞蛋、燒焦橡膠、大蒜</td><td>1~10 μg/L</td><td>缺氧發酵、酵母壓力</td></tr>
              <tr><td>氧化</td><td>乙醛</td><td>蘋果醋、焦糖、失去果味</td><td>100~125 mg/L</td><td>過度氧氣接觸</td></tr>
              <tr><td>光照劣變</td><td>硫醇 (光誘導)</td><td>濕羊毛、煮高麗菜</td><td>極低</td><td>UV 光暴露 (透明瓶)</td></tr>
              <tr><td>熱傷害</td><td>美拉德產物</td><td>煮水果、焦糖化、平板</td><td>N/A</td><td>高溫儲存 (>25°C)</td></tr>
            </tbody>
          </table>
          <h3>缺陷識別訓練套組</h3>
          <div class="wine-fault-widget">
            <input type="radio" id="fault-tca" name="fault-type" class="opt-tca" checked>
            <input type="radio" id="fault-brett" name="fault-type" class="opt-brett">
            <input type="radio" id="fault-reduction" name="fault-type" class="opt-reduction">
            <input type="radio" id="fault-oxidation" name="fault-type" class="opt-oxidation">
            <div class="selectors">
              <label for="fault-tca">TCA</label>
              <label for="fault-brett">Brett</label>
              <label for="fault-reduction">還原</label>
              <label for="fault-oxidation">氧化</label>
            </div>
            <div class="panels">
              <div class="panel" data-fault="tca">
                <h4>TCA (軟木塞污染)</h4>
                <p><strong>化學本質</strong>: 2,4,6-三氯苯甲醚，極低閾值 (2~4 ng/L = ppt 級)。</p>
                <p><strong>感官描述</strong>:</p>
                <ul>
                  <li>輕度 (2~5 ng/L): 果味壓抑、略顯乏味，易誤判為「封閉」。</li>
                  <li>中度 (5~15 ng/L): 明顯潮濕紙板、地窖味、霉味。</li>
                  <li>重度 (>15 ng/L): 強烈霉味主導，酒款完全毀壞。</li>
                </ul>
                <p><strong>訓練方法</strong>:</p>
                <ol>
                  <li>購買 TCA 標準溶液 (如 WineFaults 套組)。</li>
                  <li>在中性白酒中添加 2、5、10、20 ng/L 濃度。</li>
                  <li>盲品排序，建立個人閾值曲線。</li>
                  <li>對比未污染樣品，感受果味壓抑程度。</li>
                </ol>
                <p><strong>誤判陷阱</strong>: 輕度 TCA 常被誤認為「酒款太年輕需醒酒」。</p>
                <p class="note">統計: 天然軟木塞污染率 2~5%，螺旋蓋可避免 TCA。</p>
              </div>
              <div class="panel" data-fault="brett">
                <h4>Brettanomyces (Brett)</h4>
                <p><strong>化學本質</strong>: 4-乙基苯酚 (4-EP) 與 4-乙基愈創木酚 (4-EG)。</p>
                <p><strong>感官描述</strong>:</p>
                <ul>
                  <li>低濃度 (<400 μg/L): 煙燻、皮革、「野性」，部分人認為增加複雜度。</li>
                  <li>中濃度 (400~800 μg/L): 馬廄、汗味、OK 繃。</li>
                  <li>高濃度 (>800 μg/L): 糞便味、腐敗，完全掩蓋果味。</li>
                </ul>
                <p><strong>產區爭議</strong>:</p>
                <ul>
                  <li><strong>舊世界</strong>: 部分 Rhône、Burgundy 生產者認為低度 Brett 是 terroir 一部分。</li>
                  <li><strong>新世界</strong>: 多數酒莊視為缺陷，嚴格控制 (目標 <200 μg/L)。</li>
                </ul>
                <p><strong>訓練方法</strong>:</p>
                <ol>
                  <li>對比「乾淨」Syrah vs 有 Brett 的 Côte-Rôtie。</li>
                  <li>使用 4-EP 標準品，添加 200、500、1000 μg/L。</li>
                  <li>學習區分「正面煙燻」(橡木桶) vs「負面 Brett」。</li>
                </ol>
                <p class="note">個人閾值差異大，需建立自己的接受度標準。</p>
              </div>
              <div class="panel" data-fault="reduction">
                <h4>還原味 (Reduction)</h4>
                <p><strong>化學本質</strong>: 硫化氫 (H₂S)、甲硫醇、二甲基硫等硫醇化合物。</p>
                <p><strong>感官描述</strong>:</p>
                <ul>
                  <li>輕度: 火柴、火藥、燧石 (部分 Chablis 的正面特徵)。</li>
                  <li>中度: 臭雞蛋、燒焦橡膠、腐爛洋蔥。</li>
                  <li>重度: 下水道、糞便、完全無法飲用。</li>
                </ul>
                <p><strong>動態變化</strong>:</p>
                <ul>
                  <li><strong>揮發性</strong>: 輕度還原味可透過醒酒或搖杯消散。</li>
                  <li><strong>不可逆</strong>: 重度還原 (硫醇) 醒酒無效，需銅片處理 (專業)。</li>
                </ul>
                <p><strong>盲品應對</strong>:</p>
                <ol>
                  <li>初聞有還原味 → 搖杯 30 秒 → 重新聞。</li>
                  <li>若消失: 記錄為「輕度還原 (可醒酒)」，不視為嚴重缺陷。</li>
                  <li>若持續: 記錄為「中/重度還原」，扣品質分。</li>
                </ol>
                <p class="note">訓練: 硫化氫溶液 (化學實驗室級)，濃度梯度 1~100 μg/L。</p>
              </div>
              <div class="panel" data-fault="oxidation">
                <h4>氧化 (Oxidation)</h4>
                <p><strong>化學本質</strong>: 乙醛累積、酚類氧化、顏色轉棕。</p>
                <p><strong>感官描述</strong>:</p>
                <ul>
                  <li><strong>白酒</strong>: 蘋果醋、焦糖、蜂蜜、失去新鮮度，顏色轉金黃/棕色。</li>
                  <li><strong>紅酒</strong>: 煮水果、無花果乾、皮革，單寧軟化，顏色轉磚紅/棕色。</li>
                </ul>
                <p><strong>正常 vs 缺陷</strong>:</p>
                <table class="data-table compact">
                  <tbody>
                    <tr><td>正常氧化陳年</td><td>Sherry, Tawny Port, Vin Jaune (刻意氧化風格)</td></tr>
                    <tr><td>微氧化</td><td>紅酒陳年產生複雜度 (控制氧化)</td></tr>
                    <tr><td>過度氧化</td><td>封瓶不良、軟木塞乾裂、儲存不當導致失去果味</td></tr>
                  </tbody>
                </table>
                <p><strong>盲品判斷</strong>:</p>
                <ul>
                  <li>若酒款應為新鮮風格 (如 Sauvignon Blanc) 卻呈現氧化特徵 → 缺陷。</li>
                  <li>若酒款本應陳年 (如 Gran Reserva Rioja) 呈現適度氧化 → 正常。</li>
                </ul>
                <p class="note">訓練: 對比新鮮 vs 刻意暴露於空氣 48 小時的同款酒。</p>
              </div>
            </div>
          </div>
          <h3>缺陷量化與閾值測試</h3>
          <ul>
            <li><strong>閾值測試</strong>: 使用遞增濃度系列 (如 2, 5, 10, 20 ng/L TCA)，確定個人偵測閾值。</li>
            <li><strong>識別閾值</strong>: 能感受到「某種異味」的最低濃度。</li>
            <li><strong>認知閾值</strong>: 能準確命名該缺陷的濃度 (通常高於識別閾值 2~3 倍)。</li>
            <li><strong>個體差異</strong>: TCA 閾值可相差 10 倍，需定期校準。</li>
          </ul>
          <h3>缺陷矯正策略</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>缺陷</th><th>預防</th><th>早期介入</th><th>成品矯正</th></tr>
            </thead>
            <tbody>
              <tr><td>TCA</td><td>避免受污染軟木塞</td><td>換桶、逆滲透</td><td>不可逆 (換瓶塞無效)</td></tr>
              <tr><td>VA</td><td>衛生管理、SO₂</td><td>低溫、過濾醋酸菌</td><td>不可逆 (蒸餾去除)</td></tr>
              <tr><td>Brett</td><td>桶清潔、SO₂、過濾</td><td>早期過濾</td><td>逆滲透、PVPP 吸附</td></tr>
              <tr><td>還原</td><td>適度氧氣、營養補充</td><td>打氣、銅處理</td><td>輕度可醒酒消散</td></tr>
              <tr><td>氧化</td><td>惰性氣體、低溫</td><td>SO₂ 添加</td><td>不可逆</td></tr>
            </tbody>
          </table>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🧪', title: 'TCA 閾值', content: '2~4 ng/L (ppt 級)，個體差異 10 倍。' },
        { id: 2, icon: '🐴', title: 'Brett 爭議', content: '低濃度 <400 μg/L 部分人視為複雜度。' },
        { id: 3, icon: '💨', title: '還原動態', content: '輕度可醒酒消散，重度硫醇不可逆。' }
      ]
    },
    {
      title: '第四章：典型性矩陣與盲品策略',
      nav: '典型性矩陣',
      icon: '🗺️',
      highlightDelayStep: '0.09s',
      html: `
        <div class="chapter-content">
          <h3>典型性評估框架</h3>
          <p><strong>典型性 (Typicity)</strong>: 酒款符合其品種/產區/風格預期特徵的程度。</p>
          <table class="data-table compact">
            <thead>
              <tr><th>評估層次</th><th>問題</th><th>證據來源</th></tr>
            </thead>
            <tbody>
              <tr><td>品種典型性</td><td>此酒是否展現該品種核心特徵?</td><td>香氣譜、酸度、單寧結構</td></tr>
              <tr><td>產區典型性</td><td>此酒是否展現該產區 terroir?</td><td>礦物感、氣候訊號、土壤特徵</td></tr>
              <tr><td>風格典型性</td><td>此酒是否符合該風格預期?</td><td>釀造技術痕跡 (MLF、橡木、陳年)</td></tr>
            </tbody>
          </table>
          <h3>品種典型性矩陣：紅葡萄</h3>
          <div class="varietal-typicity-widget">
            <input type="radio" id="var-cabernet" name="varietal-red" class="opt-cabernet" checked>
            <input type="radio" id="var-pinot" name="varietal-red" class="opt-pinot">
            <input type="radio" id="var-syrah" name="varietal-red" class="opt-syrah">
            <div class="selectors">
              <label for="var-cabernet">Cabernet Sauv.</label>
              <label for="var-pinot">Pinot Noir</label>
              <label for="var-syrah">Syrah</label>
            </div>
            <div class="panels">
              <div class="panel" data-variety="cabernet">
                <h4>Cabernet Sauvignon 典型性指標</h4>
                <table class="data-table compact">
                  <tbody>
                    <tr><td><strong>核心香氣</strong></td><td>黑醋栗、雪松、青椒 (pyrazine)、薄荷</td></tr>
                    <tr><td><strong>結構</strong></td><td>高單寧 (粗獷 → 絲滑，視產區)、高酸度、飽滿酒體</td></tr>
                    <tr><td><strong>氣候訊號</strong></td><td>涼: 青椒主導 | 溫: 黑果主導 | 熱: 果醬、巧克力</td></tr>
                    <tr><td><strong>橡木整合</strong></td><td>高親和力，香草、雪松、煙燻明顯</td></tr>
                    <tr><td><strong>陳年潛力</strong></td><td>10~30 年，單寧演化為絲綢</td></tr>
                  </tbody>
                </table>
                <p><strong>產區變異</strong>:</p>
                <ul>
                  <li><strong>Pauillac</strong>: 雪松、鉛筆屑、礦物感，單寧架構強。</li>
                  <li><strong>Napa Valley</strong>: 成熟黑果、薄荷、酒精感高 (14.5%+)。</li>
                  <li><strong>Coonawarra</strong>: 桉樹、薄荷、Terra Rossa 紅土礦物感。</li>
                </ul>
                <p class="note">盲品關鍵: pyrazine 青椒味是 Cab 標誌，但過度則顯示未成熟。</p>
              </div>
              <div class="panel" data-variety="pinot">
                <h4>Pinot Noir 典型性指標</h4>
                <table class="data-table compact">
                  <tbody>
                    <tr><td><strong>核心香氣</strong></td><td>紅櫻桃、草莓、蘑菇、濕土、玫瑰</td></tr>
                    <tr><td><strong>結構</strong></td><td>低~中單寧 (絲滑)、高酸度、中~中+ 酒體</td></tr>
                    <tr><td><strong>氣候訊號</strong></td><td>涼: 紅果、酸度犀利 | 溫: 黑櫻桃、果醬</td></tr>
                    <tr><td><strong>橡木整合</strong></td><td>微妙，避免掩蓋細膩果味，多用舊桶</td></tr>
                    <tr><td><strong>陳年演化</strong></td><td>5~15 年，發展森林地表、皮革、醬油</td></tr>
                  </tbody>
                </table>
                <p><strong>產區變異</strong>:</p>
                <ul>
                  <li><strong>Burgundy (Côte d'Or)</strong>: 紅果、礦物、土壤 (濕土、蘑菇)，高酸。</li>
                  <li><strong>Central Otago</strong>: 深色、黑櫻桃、香料、較高酒精。</li>
                  <li><strong>Oregon (Willamette)</strong>: 介於兩者，紅果 + 泥土，中等酒體。</li>
                </ul>
                <p class="note">盲品關鍵: 絲滑單寧 + 高酸 + 紅果 = 高置信度 Pinot Noir。</p>
              </div>
              <div class="panel" data-variety="syrah">
                <h4>Syrah / Shiraz 典型性指標</h4>
                <table class="data-table compact">
                  <tbody>
                    <tr><td><strong>核心香氣</strong></td><td>黑莓、黑胡椒、煙燻、橄欖、動物性</td></tr>
                    <tr><td><strong>結構</strong></td><td>中+ ~ 高單寧、中酸度、飽滿酒體</td></tr>
                    <tr><td><strong>氣候訊號</strong></td><td>涼: 胡椒、橄欖、煙燻 | 熱: 果醬、巧克力、甜香料</td></tr>
                    <tr><td><strong>橡木整合</strong></td><td>良好，煙燻、香草、摩卡</td></tr>
                    <tr><td><strong>陳年潛力</strong></td><td>10~25 年，發展皮革、焦油、醬油</td></tr>
                  </tbody>
                </table>
                <p><strong>Syrah vs Shiraz 風格</strong>:</p>
                <table class="data-table compact">
                  <thead>
                    <tr><th>特徵</th><th>Syrah (涼爽)</th><th>Shiraz (溫暖)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>產區代表</td><td>北 Rhône, 南非</td><td>Barossa, McLaren Vale</td></tr>
                    <tr><td>香氣</td><td>黑胡椒、橄欖、煙燻</td><td>黑莓果醬、巧克力、桉樹</td></tr>
                    <tr><td>酸度</td><td>中+ ~ 高</td><td>中 ~ 中+</td></tr>
                    <tr><td>酒精</td><td>12.5~13.5%</td><td>14~15.5%</td></tr>
                  </tbody>
                </table>
                <p class="note">盲品關鍵: 黑胡椒 + 煙燻 = Syrah 標誌，但 Brett 也可能產生類似煙燻。</p>
              </div>
            </div>
          </div>
          <h3>產區典型性矩陣：白葡萄</h3>
          <table class="data-table">
            <thead>
              <tr><th>產區</th><th>品種</th><th>核心特徵</th><th>關鍵區分點</th></tr>
            </thead>
            <tbody>
              <tr><td>Chablis</td><td>Chardonnay</td><td>高酸、礦物 (蠔殼、燧石)、無/微橡木</td><td>極淨、鋼鐵般酸度</td></tr>
              <tr><td>Meursault</td><td>Chardonnay</td><td>榛果、奶油、烤麵包、豐腴酒體</td><td>MLF + 橡木、更豐滿</td></tr>
              <tr><td>Marlborough</td><td>Sauv. Blanc</td><td>百香果、醋栗、青椒、高酸</td><td>強烈果味、純淨</td></tr>
              <tr><td>Sancerre</td><td>Sauv. Blanc</td><td>柑橘、燧石、濕石頭、草本</td><td>礦物感主導、更內斂</td></tr>
              <tr><td>Mosel</td><td>Riesling</td><td>青蘋果、蜂蜜、板岩、高酸、低酒精</td><td>殘糖平衡、汽油 (陳年)</td></tr>
              <tr><td>Alsace</td><td>Riesling</td><td>柑橘、花香、更干、更高酒精</td><td>較飽滿、礦物感不同</td></tr>
            </tbody>
          </table>
          <h3>盲品推論決策樹</h3>
          <ol>
            <li><strong>Step 1: 顏色與結構</strong>
              <ul>
                <li>白 / 粉紅 / 紅? → 鎖定品種範圍。</li>
                <li>酒體輕重? 單寧高低? → 進一步縮小。</li>
              </ul>
            </li>
            <li><strong>Step 2: 香氣家族</strong>
              <ul>
                <li>果味 (紅果 vs 黑果 vs 熱帶 vs 柑橘)?</li>
                <li>草本 / 香料 / 礦物 / 橡木?</li>
              </ul>
            </li>
            <li><strong>Step 3: 氣候訊號</strong>
              <ul>
                <li>高酸 + 未成熟果 → 涼爽。</li>
                <li>低酸 + 果醬 + 高酒精 → 溫暖。</li>
              </ul>
            </li>
            <li><strong>Step 4: 釀造技術</strong>
              <ul>
                <li>MLF? 橡木? 酒泥接觸? 全串發酵?</li>
                <li>氣候 + 釀造 → 鎖定產區。</li>
              </ul>
            </li>
            <li><strong>Step 5: 置信度評估</strong>
              <ul>
                <li>3+ 個強證據 → 高置信度。</li>
                <li>1~2 個證據 → 給出 2~3 個可能產區。</li>
              </ul>
            </li>
          </ol>
          <h3>常見盲品陷阱</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>陷阱</th><th>錯誤推論</th><th>正確應對</th></tr>
            </thead>
            <tbody>
              <tr><td>過度依賴單一線索</td><td>聞到青椒 → 一定是 Cab Sauv</td><td>檢查結構、酸度、產區邏輯</td></tr>
              <tr><td>忽略氣候訊號</td><td>Pinot 只來自 Burgundy</td><td>考慮 NZ、Oregon、California</td></tr>
              <tr><td>混淆釀造與品種</td><td>奶油味 → Chardonnay</td><td>MLF 可用於多品種</td></tr>
              <tr><td>年份效應</td><td>2003 Bordeaux 像 Napa</td><td>極端年份打破常規</td></tr>
              <tr><td>生產者風格</td><td>某酒莊刻意模仿他產區</td><td>關注多數典型性，非個案</td></tr>
            </tbody>
          </table>
        </div>
      `,
      highlights: [
        { id: 1, icon: '🎯', title: '典型性三層次', content: '品種、產區、風格三重驗證。' },
        { id: 2, icon: '🌶️', title: 'Cab 標誌', content: 'Pyrazine 青椒味 + 高單寧 + 雪松。' },
        { id: 3, icon: '🧭', title: '決策樹', content: '顏色 → 香氣 → 氣候 → 釀造 → 置信度。' }
      ]
    },
    {
      title: '第五章：高級盲品技巧與競賽策略',
      nav: '競賽策略',
      icon: '🏆',
      highlightDelayStep: '0.1s',
      html: `
        <div class="chapter-content">
          <h3>時間管理策略</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>階段</th><th>時間分配</th><th>關鍵任務</th><th>常見錯誤</th></tr>
            </thead>
            <tbody>
              <tr><td>第一輪 (掃描)</td><td>2 分鐘 / 款</td><td>快速記錄視覺、主導香氣、結構骨架</td><td>過度細節、拖延</td></tr>
              <tr><td>第二輪 (深入)</td><td>3 分鐘 / 款</td><td>完整香氣分析、味覺細節、初步推論</td><td>糾結單一酒款</td></tr>
              <tr><td>第三輪 (確認)</td><td>1 分鐘 / 款</td><td>驗證推論、補充遺漏細節</td><td>過度修改</td></tr>
              <tr><td>總結 (10 min)</td><td>整體檢視</td><td>檢查邏輯一致性、填補空白</td><td>緊張放棄</td></tr>
            </tbody>
          </table>
          <p><strong>範例</strong>: 12 款酒，總時間 90 分鐘 → 第一輪 24 min、第二輪 36 min、第三輪 12 min、總結 10 min、緩衝 8 min。</p>
          <h3>筆記系統優化</h3>
          <div class="note-system-widget">
            <input type="radio" id="note-grid" name="note-system" class="opt-grid" checked>
            <input type="radio" id="note-shorthand" name="note-system" class="opt-shorthand">
            <input type="radio" id="note-mental" name="note-system" class="opt-mental">
            <div class="selectors">
              <label for="note-grid">網格法</label>
              <label for="note-shorthand">速記符號</label>
              <label for="note-mental">心智地圖</label>
            </div>
            <div class="panels">
              <div class="panel" data-system="grid">
                <h4>網格法 (Grid Method)</h4>
                <p><strong>優點</strong>: 結構化、易於對比、不遺漏項目。</p>
                <p><strong>設計</strong>:</p>
                <table class="data-table compact">
                  <thead>
                    <tr><th>項目</th><th>酒 1</th><th>酒 2</th><th>酒 3</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>外觀</td><td>深寶石紅</td><td>淡石榴紅</td><td>金黃</td></tr>
                    <tr><td>香氣強度</td><td>中+</td><td>中</td><td>濃</td></tr>
                    <tr><td>主導香氣</td><td>黑醋栗、雪松</td><td>紅櫻桃、土壤</td><td>柑橘、蜂蜜</td></tr>
                    <tr><td>酸度</td><td>中+</td><td>高</td><td>高</td></tr>
                    <tr><td>單寧</td><td>高</td><td>中</td><td>N/A</td></tr>
                    <tr><td>酒體</td><td>飽滿</td><td>中</td><td>中+</td></tr>
                    <tr><td>初步推論</td><td>Cab Pauillac</td><td>PN Burg</td><td>Ries Mosel</td></tr>
                  </tbody>
                </table>
                <p class="note">適合需要完整記錄的正式考試 (如 Diploma)。</p>
              </div>
              <div class="panel" data-system="shorthand">
                <h4>速記符號系統</h4>
                <p><strong>優點</strong>: 快速、節省空間、適合競賽。</p>
                <p><strong>常用符號</strong>:</p>
                <ul>
                  <li><strong>顏色</strong>: R (紅)、W (白)、Ro (粉紅)、深 (+)、淡 (-)。</li>
                  <li><strong>香氣</strong>: B (黑果)、R (紅果)、Cit (柑橘)、Trop (熱帶)、Oak (橡木)。</li>
                  <li><strong>結構</strong>: A (酸度)、T (單寧)、Alc (酒精)、↑ (高)、↓ (低)。</li>
                  <li><strong>品質</strong>: * (良好)、** (優秀)、*** (傑出)。</li>
                </ul>
                <p><strong>範例筆記</strong>:</p>
                <p>酒 1: <code>R深+ | B雪松Oak | A中+ T高↑ | ***Cab Pauillac</code></p>
                <p>酒 2: <code>R淡 | R櫻桃土壤 | A高↑ T中 | **PN Burg</code></p>
                <p class="note">需事前訓練建立個人符號系統，考試前復習。</p>
              </div>
              <div class="panel" data-system="mental">
                <h4>心智地圖 (Mental Map)</h4>
                <p><strong>優點</strong>: 關聯記憶、快速提取、適合經驗豐富者。</p>
                <p><strong>方法</strong>:</p>
                <ol>
                  <li>品評時在腦中建立「參考酒款」對應。</li>
                  <li>例如: 此酒 = 70% Pauillac 典型 + 30% 年份熱。</li>
                  <li>僅記錄關鍵區分點 (如「比標準 Pauillac 更成熟」)。</li>
                  <li>最後統整時重構完整描述。</li>
                </ol>
                <p><strong>風險</strong>: 記憶負荷高，若中斷易混淆。</p>
                <p class="note">需大量練習建立穩定「參考酒款庫」(100+ 款)。</p>
              </div>
            </div>
          </div>
          <h3>對比品評技巧</h3>
          <ul>
            <li><strong>成對對比</strong>: 將同品種不同產區酒款並排品評 (如 Burgundy PN vs Oregon PN)。</li>
            <li><strong>垂直品評</strong>: 同酒款不同年份，學習年份效應與陳年演化。</li>
            <li><strong>水平品評</strong>: 同產區同年份不同酒莊，學習風土微差異。</li>
            <li><strong>三角對比</strong>: A (標準) vs B (變異 1) vs C (變異 2)，強化區分能力。</li>
          </ul>
          <h3>競賽常見題型策略</h3>
          <table class="data-table">
            <thead>
              <tr><th>題型</th><th>挑戰</th><th>策略</th><th>範例</th></tr>
            </thead>
            <tbody>
              <tr><td>經典產區</td><td>需精準識別 AOC</td><td>熟記典型性矩陣、村莊風格</td><td>Pauillac vs St-Julien</td></tr>
              <tr><td>新世界模仿</td><td>風格相似度高</td><td>關注氣候訊號、酒精度</td><td>Napa Cab vs Pauillac</td></tr>
              <tr><td>陷阱年份</td><td>極端年份打破常規</td><td>記錄重要年份特徵 (2003, 2011)</td><td>2003 Bordeaux (熱)</td></tr>
              <tr><td>少見品種</td><td>香氣庫不足</td><td>排除法、結構推論</td><td>Négrette, Timorasso</td></tr>
              <tr><td>加烈/甜酒</td><td>釀造多樣性</td><td>辨識氧化 vs 非氧化、加烈方式</td><td>PX vs Amontillado</td></tr>
            </tbody>
          </table>
          <h3>心理壓力管理</h3>
          <ul>
            <li><strong>預期管理</strong>: 接受無法 100% 正確，目標 70~80% 準確率。</li>
            <li><strong>錨定避免</strong>: 第一印象錯誤時，勇於推翻重新評估。</li>
            <li><strong>時間焦慮</strong>: 設定中間檢查點 (如 30 分鐘完成 5 款)，避免最後趕工。</li>
            <li><strong>呼吸調節</strong>: 感官疲勞時深呼吸 3 次，重置嗅覺。</li>
          </ul>
          <h3>盲品訓練計畫 (12 週)</h3>
          <table class="data-table compact">
            <thead>
              <tr><th>週次</th><th>主題</th><th>訓練內容</th><th>酒款數</th></tr>
            </thead>
            <tbody>
              <tr><td>1~2</td><td>品種識別</td><td>單一品種，涵蓋 6 大紅、6 大白</td><td>12 款 × 2 週</td></tr>
              <tr><td>3~4</td><td>氣候影響</td><td>同品種不同氣候區 (涼/溫/熱)</td><td>9 款 × 2 週</td></tr>
              <tr><td>5~6</td><td>產區典型性</td><td>經典產區對比 (法國 vs 新世界)</td><td>12 款 × 2 週</td></tr>
              <tr><td>7~8</td><td>釀造技術</td><td>橡木/MLF/酒泥/全串對比</td><td>8 款 × 2 週</td></tr>
              <tr><td>9~10</td><td>陳年演化</td><td>垂直品評 (5~15 年)</td><td>6 款 × 2 週</td></tr>
              <tr><td>11~12</td><td>模擬競賽</td><td>混合題型、計時壓力</td><td>15 款 × 2 週</td></tr>
            </tbody>
          </table>
          <h3>後設認知檢核表</h3>
          <p>每次盲品後自我提問:</p>
          <ol>
            <li>哪些線索是強證據? 哪些是弱證據?</li>
            <li>我的推論邏輯鏈是否完整? (顏色 → 香氣 → 結構 → 產區)</li>
            <li>我是否受到某種偏誤影響? (確認偏誤、錨定效應)</li>
            <li>若錯誤，錯在哪個環節? (感知錯誤 vs 知識缺乏 vs 推論錯誤)</li>
            <li>如何改進? (補充知識 vs 訓練感官 vs 優化流程)</li>
          </ol>
        </div>
      `,
      highlights: [
        { id: 1, icon: '⏱️', title: '三輪策略', content: '掃描 2min → 深入 3min → 確認 1min。' },
        { id: 2, icon: '✍️', title: '速記符號', content: 'R深+ B雪松Oak A中+ T高↑ = Cab Pauillac。' },
        { id: 3, icon: '📈', title: '12 週計畫', content: '品種 → 氣候 → 產區 → 釀造 → 陳年 → 競賽。' }
      ]
    }
  ],
  summary: {
    title: '課程總結',
    html: '<p>從神經生理機制到競賽策略，建立系統化感官評估體系。掌握校準流程 (ICC > 0.75)、缺陷量化 (TCA 2 ng/L 閾值)、典型性矩陣 (品種/產區/風格三重驗證) 與時間管理 (三輪品評法)，實現可重現的專家級盲品能力。</p>'
  },
  quiz: {
    title: '課後測驗',
    questions: [
      {
        id: 1,
        question: '嗅覺適應導致持續暴露同一香氣 60 秒後感知強度下降比例是?',
        options: ['10~20%', '50~70%', '90~100%'],
        correct: 1,
        explanation: '嗅覺受體快速適應，60 秒內感知強度下降 50~70%，需間隔 3~5 分鐘恢復。'
      },
      {
        id: 2,
        question: 'TCA 軟木塞污染的典型感官閾值是?',
        options: ['2~4 ng/L (ppt 級)', '20~40 μg/L (ppb 級)', '200~400 mg/L (ppm 級)'],
        correct: 0,
        explanation: 'TCA 閾值極低為 2~4 ng/L (ppt 級)，且個體差異可達 10 倍，需定期校準。'
      },
      {
        id: 3,
        question: '盲品決策樹的正確順序是?',
        options: ['香氣 → 顏色 → 釀造 → 氣候 → 置信度', '顏色 → 香氣 → 氣候 → 釀造 → 置信度', '氣候 → 顏色 → 香氣 → 釀造 → 置信度'],
        correct: 1,
        explanation: '正確順序: 顏色 (鎖定品種範圍) → 香氣 (家族分類) → 氣候訊號 → 釀造技術 → 置信度評估。'
      },
    {
        id: 4,
        question: '感官評估小組校準訓練中，為確保評委對「中等以上單寧」有一致認知，應首先採用哪種方法？',
        options: [
        '讓評委獨立品評後集體討論差異',
        '提供標準品溶液（如單寧酸標準液）建立共識感知閾值',
        '播放教學影片說明單寧定義'
        ],
        correct: 1,
        explanation: '標準品溶液能讓評委對特定感官屬性建立可重現的基準感知，是 ISO 13300 感官評估標準推薦的校準黃金標準。'
      },
      {
        id: 5,
        question: '高規格盲品競賽中，面對一支有陳年潛力但年份不明的酒，最有效的策略是？',
        options: [
        '猜測最近年份以降低猜錯成本',
        '先鎖定品種與氣候區，再利用酸度與酚類演化縮小年份範圍',
        '放棄年份判斷，全力描述香氣複雜度'
        ],
        correct: 1,
        explanation: '競賽盲品的分層排除法：先確認品種與氣候（可信度高），再從澀感軟化程度、第三香氣發展縮小年份範圍，系統性提升整體準確率。'
      },
    ],
    passingScore: 60,
    timeLimit: 180
  }
})

export const l49Content = [
  ..._l49Base,
  {
    type: 'quiz',
    title: '模組診斷測驗 — 風險、永續與感官（B4M3）',
    questions: [
      {
        id: 1,
        question: '在波爾多酒莊的 TCFD（Task Force on Climate-related Financial Disclosures）框架中，「物理風險」包含哪兩大類型？',
        options: [
          '信用風險與流動性風險',
          '急性風險（如極端天氣事件）與慢性風險（如長期溫度上升、降雨模式改變）',
          '供應鏈風險與監管風險',
          '名譽風險與技術落後風險'
        ],
        correct: 1,
        explanation: 'TCFD 框架下，氣候相關風險分兩大類：(1) 物理風險：急性（颶風、霜害、火災等極端事件）和慢性（長期均溫上升、海平面升高、降雨季節性變化）；(2) 轉型風險：碳稅政策、技術變革、消費者偏好轉移等。兩者對財務的影響時間框架不同。'
      },
      {
        id: 2,
        question: '酒莊的「全面風險管理」（ERM - Enterprise Risk Management）中，風險評估矩陣的兩個核心維度是？',
        options: [
          '成本與收益',
          '發生可能性（Likelihood）× 潛在影響（Impact）',
          '時間框架 × 監管嚴格程度',
          '內部控制難度 × 保險費率'
        ],
        correct: 1,
        explanation: 'ERM 風險矩陣的標準架構：X 軸為發生可能性（低/中/高），Y 軸為潛在影響（輕微/中等/嚴重/災難性）。兩者的乘積決定風險等級，高可能性 × 高影響的風險（如霜害、病蟲害）優先處理，通常透過保險、預防措施和應急計劃應對。'
      },
      {
        id: 3,
        question: '波爾多酒莊申請有機農業（Agriculture Biologique - AB）認證的轉型期要求是幾年？',
        options: [
          '轉型期 1 年',
          '轉型期 3 年（此期間產品不能標示 AB，但可使用「有機轉型中」）',
          '轉型期 5 年',
          '無轉型期，申請通過後立即生效'
        ],
        correct: 1,
        explanation: '法國 AB 有機農業認證規定轉型期為 3 年：期間禁止使用化學農藥和合成肥料，但產品不能標示有機（只能說「有機轉型中/In conversion」）。轉型期後通過 Ecocert 等機構年度審核才可正式標示 AB 標誌。'
      },
      {
        id: 4,
        question: '在 GHG（溫室氣體）盤查中，波爾多酒莊通常哪個來源佔 Scope 1 排放量最大？',
        options: [
          '員工通勤',
          '農用機械和農場車輛的燃料燃燒（如拖拉機、卡車）',
          '葡萄酒進口商的冷藏運輸',
          '外購電力和天然氣'
        ],
        correct: 1,
        explanation: 'Scope 1 為直接排放（企業直接控制的排放源）。波爾多酒莊的 Scope 1 主要來源包括：農用機械燃料燃燒（拖拉機、採收機）、酒窖天然氣使用（若非外購）、發電機、製冷劑洩漏（HFCs）等。員工通勤屬 Scope 3，外購電力屬 Scope 2。'
      },
      {
        id: 5,
        question: '在葡萄酒品評訓練中，「錨定效應」（Anchoring Effect）對評分準確性的影響是什麼？',
        options: [
          '讓評審保持客觀，不受外部信息影響',
          '評審受到第一個信息（如價格/品牌）的過度影響，導致評分偏向初始錨點而非客觀品質',
          '促進評審之間達成一致意見',
          '提高評分的可重複性和可靠性'
        ],
        correct: 1,
        explanation: '錨定效應是認知偏誤的典型案例：若評審事先得知酒款售價或品牌，評分會系統性偏向該信息（高價酒得分偏高）。這是盲品（Blind Tasting）的核心存在理由——消除品牌、年份、外觀等非感官信息的干擾，確保客觀評估。'
      },
      {
        id: 6,
        question: '在統計品質控制中，「管制圖」（Control Chart）的主要用途是？',
        options: [
          '比較不同酒款的感官評分高低',
          '監控製程穩定性，識別超出統計控制界限的異常變異',
          '計算批次生產的平均成本',
          '記錄葡萄園不同地塊的土壤組成'
        ],
        correct: 1,
        explanation: '管制圖（如 X-bar chart）繪製製程數據（如每批次的 pH/酸度/游離 SO₂）的時間趨勢，設定上下控制限（UCL/LCL，通常 ±3σ）。超出控制限或出現特殊趨勢即為「特殊原因變異」，需立即調查和糾正，是釀造品質管理的核心工具。'
      },
      {
        id: 7,
        question: '「自然動力農法」（Biodynamique）中，「500 號製劑」（Horn Manure/Préparation 500）的使用時機和目的是？',
        options: [
          '噴灑葉面，驅除蚜蟲和粉介殼蟲',
          '春季攪拌後噴灑土壤，促進根系發展與土壤微生物活性',
          '在釀造時加入發酵槽，促進 MLF（蘋果酸乳酸發酵）',
          '秋季噴灑葡萄果實，增加酚類濃度'
        ],
        correct: 1,
        explanation: '500 號製劑（牛糞在牛角中過冬製成）是自然動力農法的核心製劑，極度稀釋（每公頃僅 100g + 60L 水）後以特定方式順逆時針攪拌（Dynamize），在春秋兩季噴灑土壤。目的是活化土壤微生物、促進腐植質形成和根系下延。'
      },
      {
        id: 8,
        question: '在波爾多頂級紅酒的陳年演化中，「第三香氣」（Tertiary Aromas）主要來自哪個過程，舉例包括哪類香氣？',
        options: [
          '發酵過程 — 例如酯類（蘋果、香蕉）',
          '葡萄本身 — 例如黑莓、紫羅蘭',
          '陳年氧化與還原反應 — 例如皮革、菸草、蕈菇、沉香木、甘草',
          '橡木桶接觸 — 例如香草、椰子、烤木'
        ],
        correct: 2,
        explanation: '香氣來源三分類：第一香氣（Primary）來自葡萄本身（果香、花香）；第二香氣（Secondary）來自發酵（酵母衍生的酯類、乳酸發酵的奶油香）；第三香氣（Tertiary/Bouquet）來自瓶中陳年的氧化還原反應，呈現皮革、菸草、松露、野味等複雜香氣。'
      },
      {
        id: 9,
        question: 'Liv-ex 100 指數相比 Fine Wine 1000 指數，在使用上最主要的差異是？',
        options: [
          'Liv-ex 100 只追蹤法國葡萄酒，Liv-ex 1000 追蹤全球葡萄酒',
          'Liv-ex 100 聚焦波爾多頂級 100 個酒款（流動性高），代表市場基準；Liv-ex 1000 覆蓋更廣的精品葡萄酒市場',
          'Liv-ex 100 是每日更新，Liv-ex 1000 是每月更新',
          'Liv-ex 100 包含 En Primeur 價格，Liv-ex 1000 只含已裝瓶價格'
        ],
        correct: 1,
        explanation: 'Liv-ex 100 聚焦最具流動性的 100 個波爾多酒款（主要為五大酒莊及其他左岸頂級酒），是業界最常引用的基準指數，適合快速比較市場走勢。Liv-ex Fine Wine 1000 覆蓋波爾多、勃艮第、隆河、義大利等多產區，更能反映精品葡萄酒市場整體趨勢。'
      },
      {
        id: 10,
        question: '在酒莊的 ESG 整合報告中，「重大性矩陣」（Materiality Matrix）用於識別什麼？',
        options: [
          '酒莊土地資產的財務估值',
          '對利益相關者（Stakeholders）和業務都具有高重要性的 ESG 議題',
          '員工薪酬和福利的市場基準比較',
          '供應鏈各環節的碳排放量估算'
        ],
        correct: 1,
        explanation: '重大性矩陣以兩軸呈現：X 軸為對利益相關者的重要性，Y 軸為對業務的重要性。矩陣右上角的高重大性議題（如氣候適應、水資源管理、食品安全）是 ESG 報告的核心，資源分配和目標設定應優先聚焦於此區域。'
      }
    ],
    passingScore: 70,
    timeLimit: 420
  }
]

export default l49Content
