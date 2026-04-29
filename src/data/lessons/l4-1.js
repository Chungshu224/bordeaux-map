// L4-1 高階風土與微地塊分析（示範課骨架）

export const l41Content = [
  // 封面 (已移除)

  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀：為什麼要研究微地塊？',
    content: `
      <div class="intro-content">
        <h3>🎯 從大產區到小地塊：精準管理的必要性</h3>
        <p class="intro-lead">
          在Level 3中，我們學習了波爾多不同產區的風土特色。但即使在同一個酒莊內，不同地塊也可能因為<strong>坡度差1-2度、土壤深度差20公分、或排水狀況略有不同</strong>，而產生截然不同的葡萄品質。
        </p>
        <div class="lesson-image" style="margin: 20px 0; text-align: center;"><img src="/images/L4-1/01%20高階風土微地塊精準分析.svg" alt="高階風土微地塊精準分析四維度與土壤剖面運作" style="max-width: 100%; height: auto; border-radius: 8px;" /></div>
        
        <div class="comparison-box">
          <div class="before">
            <h4>❌ 傳統粗放管理</h4>
            <ul>
              <li>整片葡萄園統一施肥、灌溉</li>
              <li>同一天採收所有葡萄</li>
              <li>混合釀造，無法發揮各地塊特色</li>
              <li>結果：品質參差，特色模糊</li>
            </ul>
          </div>
          <div class="after">
            <h4>✅ 微地塊精準管理</h4>
            <ul>
              <li>根據每塊地的特性調整管理</li>
              <li>成熟度最佳時分批採收</li>
              <li>分別釀造，精準調配</li>
              <li>結果：品質提升，風格鮮明</li>
            </ul>
          </div>
        </div>

        <h3>📚 本課程的學習路徑</h3>
        <p>本課程將帶您從<strong>四個層次</strong>建立微地塊分析能力：</p>
        <ol class="learning-path">
          <li><strong>看地形</strong>：學會用地形數據找出關鍵差異（坡度、排水、霜害風險）</li>
          <li><strong>看土壤</strong>：透過土壤剖面判斷根系生長條件</li>
          <li><strong>看水分</strong>：建立水分壓力模型，預測最佳採收時機</li>
          <li><strong>看釀造</strong>：制定分離釀造與調配策略</li>
        </ol>

        <div class="key-insight">
          <h4>💡 核心理念</h4>
          <p>微地塊管理的目標不是把簡單問題複雜化，而是<strong>「因地制宜」</strong>——讓每一塊土地都發揮出最佳潛力，最終透過精準調配，釀出比單一地塊更優秀的葡萄酒。</p>
        </div>

        <h3>⚠️ 學習建議</h3>
        <ul class="tips">
          <li>本課程會出現較多專業術語（如LiDAR、DEM、TWI等），<strong>不用死記這些縮寫</strong>，重點是理解背後的概念</li>
          <li>每個章節都有實際案例，建議<strong>先看案例，再回頭理解理論</strong></li>
          <li>可以把本課程想像成「葡萄園的精密健康檢查」：地形=骨架、土壤=營養、水分=血液循環</li>
        </ul>
      </div>
    `
  },

  // 學習目標
  {
    type: 'objectives',
    title: '學習目標',
    duration: '60分鐘',
    level: '專家級',
    courseIntro: '從微地形、土壤剖面到根砧與水分壓力,建立微地塊決策的系統框架,並連結到分離釀造與後續調配。',
    objectives: [
      { id: 1, text: '解讀微地形與水文對葡萄樹生理的影響', icon: '⛰️' },
      { id: 2, text: '建立土壤剖面與根系策略的評估方法', icon: '🧪' },
      { id: 3, text: '運用水分壓力與成熟動態建立採收視窗', icon: '💧' },
      { id: 4, text: '制定微地塊的分離釀造與後續調配策略', icon: '🧭' }
    ]
  },

  // 章節 1：微地形與水文
  { type: 'chapter-divider', title: '第一章', subtitle: '微地形與水文', icon: '⛰️', navLabel: '微地形' },
  {
    type: 'chapter',
    title: '第一章：微地形與水文',
    subtitle: '坡度、朝向、冷空氣流動與排水',
    content: `
      <div class="chapter-content">
        <div class="concept-intro">
          <h3>🔰 概念入門：為什麼地形這麼重要？</h3>
          <p class="analogy">
            想像葡萄園是一張臉，<strong>地形就像臉部的輪廓和五官</strong>：
          </p>
          <ul class="simple-list">
            <li>🏔️ <strong>坡度</strong>：像鼻樑的高度，決定水往哪裡流、陽光照射角度</li>
            <li>🧭 <strong>朝向</strong>：像臉朝哪個方向，影響接受陽光的時間長短</li>
            <li>❄️ <strong>凹地</strong>：像眼窩，容易積聚冷空氣造成霜害</li>
            <li>💧 <strong>排水</strong>：像皮膚毛孔，決定水分是否順暢排出</li>
          </ul>
          <div class="example-box">
            <h4>📖 實例對比</h4>
            <table class="comparison-table">
              <tr>
                <th>地形條件</th>
                <th>葡萄生長狀況</th>
                <th>管理挑戰</th>
              </tr>
              <tr>
                <td>南向8%坡度</td>
                <td>✅ 陽光充足、成熟早、糖度高</td>
                <td>⚠️ 需注意高溫、乾旱</td>
              </tr>
              <tr>
                <td>北向平地凹處</td>
                <td>❌ 陽光少、成熟晚、易積水</td>
                <td>⚠️ 春季霜害、秋季灰黴病</td>
              </tr>
            </table>
          </div>
        </div>

        <h3>地形掃描與資料來源</h3>
        <div class="term-explanation">
          <p><strong>專業術語解釋</strong>（不需背誦，理解即可）：</p>
          <ul>
            <li><strong>LiDAR</strong>（光達）：用雷射掃描地形，比GPS更精確，可以看到樹下的真實地面</li>
            <li><strong>DEM</strong>（數位高程模型）：把地形變成3D電腦模型，像Google Earth但更精細</li>
            <li><strong>UAV</strong>（無人機）：空拍機，用來拍攝葡萄園照片</li>
          </ul>
        </div>
        <p>結合這些工具比對歷年產量地圖，我們可以把大片葡萄園劃分成 <strong>0.1–0.5 公頃</strong>（約1-5個籃球場大小）的微地塊。</p>
        <ul>
          <li><strong>地貌指標</strong>：
            <ul class="nested-list">
              <li><strong>坡度</strong>：斜度大小（0-15%常見，>15%太陡）</li>
              <li><strong>坡向</strong>：面朝哪個方向（南向最佳、北向較冷）</li>
              <li><strong>曲率</strong>：地形是凸（山脊、排水好）還是凹（谷地、易積水）</li>
              <li><strong>TWI地形濕度指數</strong>：簡單說就是「這塊地容易積水嗎？」數值越高越濕</li>
            </ul>
          </li>
          <li>疊合<strong>歷史數據</strong>：過去哪裡發生過霜害？哪裡常積水？哪裡露水特別重？把這些「問題區域」標記出來</li>
        </ul>
        <div class="visual-aid">
          <p>💡 <strong>記憶技巧</strong>：把這些指標想成葡萄園的「健康檢查表」</p>
          <ul class="checklist">
            <li>✓ 坡度坡向 = 檢查「骨骼」（結構）</li>
            <li>✓ 曲率 = 檢查「體型」（凹凸）</li>
            <li>✓ TWI = 檢查「代謝」（排水）</li>
            <li>✓ 歷史數據 = 檢查「病史」（過去問題）</li>
          </ul>
        </div>
        <h3>坡度 × 朝向風險矩陣</h3>
        <div class="table-intro">
          <p>這張表格告訴你：<strong>不同地形組合會遇到什麼問題、該怎麼解決</strong></p>
          <p class="reading-tip">📖 閱讀方式：找到你的地塊條件（坡度+朝向），就知道主要風險和管理方法</p>
        </div>
        <table class="data-table compact">
          <thead>
            <tr><th>坡度</th><th>朝向</th><th>熱量累積</th><th>風險</th><th>建議管理</th></tr>
          </thead>
          <tbody>
            <tr><td><5%</td><td>北/東</td><td>偏低</td><td>春霜、濕氣</td><td>風機+覆網、排水改善</td></tr>
            <tr><td>5–12%</td><td>南/西</td><td>適中</td><td>熱峰</td><td>葉幕遮陰、灌溉調度</td></tr>
            <tr><td>>12%</td><td>南西</td><td>高</td><td>乾旱</td><td>保水覆蓋、減少去葉</td></tr>
          </tbody>
        </table>
        <h3>冷空氣流動與霜害模擬</h3>
        <div class="concept-simplification">
          <p class="analogy">
            <strong>生活化比喻</strong>：冷空氣像水一樣會往低處流。想像在浴缸裡放水，水會流向排水孔；夜間的冷空氣也會沿著坡面往低處「流」。
          </p>
          <ul class="key-points">
            <li>🌡️ 冷空氣比熱空氣<strong>重</strong>，會往下沉</li>
            <li>⛰️ 遇到障礙物（土堤、建築）會<strong>堆積</strong></li>
            <li>❄️ 堆積的地方溫度更低，容易<strong>霜害</strong></li>
          </ul>
        </div>
        <p>專業工具：使用 CFD（計算流體動力學）或簡化模型模擬冷空氣路徑，找出容易「積冷」的危險區。</p>
        <p class="subhead">快速檢核指標</p>
        <ul>
          <li>地形低點與排水溝交會處是否無障礙物。</li>
          <li>果園道路/土堤是否阻礙冷空氣排出。</li>
          <li>風機覆蓋範圍 vs 冷空氣池面積。</li>
        </ul>
        <h3>表層與次表層排水</h3>
        <p>分析穿透電阻、土壤電導率 ECa (Apparent Electrical Conductivity) 與深層鑽探資料，識別透水層與阻水層之界面。</p>
        <p class="subhead">排水方案組合</p>
        <ul>
          <li>坡面溝渠 + 暗管：處理表層積水。</li>
          <li>垂直深井：打破硬層導水。</li>
          <li>覆蓋作物：增加滲透與減少土壤密度。</li>
        </ul>
        <h3>案例：北坡微地塊的霜害治理</h3>
        <p class="subhead">背景</p>
        <p>3.2 ha 北向凹地，2021–2022 年晚霜損失 25%。</p>
        <p class="subhead">行動</p>
        <ul>
          <li>拆除阻擋堤、開挖 2 條排水溝導冷空氣。</li>
          <li>增設 2 座低耗能風機，覆蓋 80% 面積。</li>
          <li>改采雙芽修剪以保留備援芽。</li>
        </ul>
        <p class="subhead">結果</p>
        <p>次年霜害損失降至 5%，酸度與產量恢復至長期平均。</p>
      </div>
    `,
    highlights: [
      { id: 1, icon: '🛰️', title: '高解析地形', content: '整合 DEM (Digital Elevation Model) / LiDAR (Light Detection and Ranging) / UAV (Unmanned Aerial Vehicle)，以 0.1–0.5 ha 尺度判讀微地塊。' },
      { id: 2, icon: '❄️', title: '冷空氣路徑', content: 'CFD (Computational Fluid Dynamics) 或實測煙源描繪夜間冷空氣動線，決定風機與排水。' },
      { id: 3, icon: '💡', title: '案例成果', content: '北坡凹地透過排水+風機改造，使霜害損失從 25% 降至 5%。' }
    ]
  },

  // 章節 2：土壤剖面與根砧
  { type: 'chapter-divider', title: '第二章', subtitle: '土壤剖面與根砧', icon: '🪵', navLabel: '土壤·根砧' },
  {
    type: 'chapter',
    title: '第二章：土壤剖面與根砧',
    subtitle: '土壤層位、通氣性與根系策略',
    content: `
      <div class="chapter-content">
        <div class="concept-intro">
          <h3>🔰 概念入門：為什麼要研究土壤剖面？</h3>
          <p class="analogy">
            <strong>想像土壤是一棟公寓大樓</strong>：
          </p>
          <ul class="apartment-analogy">
            <li>🏢 <strong>表層土</strong>（0-30cm）：一樓大廳，最活躍，有機質最多</li>
            <li>🏢 <strong>亞表層</strong>（30-60cm）：二樓，根系主要生活區</li>
            <li>🏢 <strong>底層</strong>（60cm以下）：地下室，礦物質來源，可能有「硬層」阻擋根系</li>
          </ul>
          <p>葡萄根系能長多深、吸收多少養分水分，取決於這棟「土壤大樓」的結構好不好。</p>
          
          <div class="why-it-matters">
            <h4>❓ 為什麼同一個葡萄園，有些地方葡萄長得好，有些不好？</h4>
            <p>答案常常藏在<strong>地下30-100公分</strong>的土層裡：</p>
            <ul>
              <li>✅ 好的土壤剖面：疏鬆透氣、排水良好、根系可深達2米</li>
              <li>❌ 差的土壤剖面：30公分下有硬層、積水、根系只能在表層掙扎</li>
            </ul>
          </div>
        </div>

        <h3>剖面鑽探流程</h3>
        <p class="practical-note">💼 <strong>實務操作</strong>：用鑽土機每1-1.5公頃（約2個足球場）鑽一個洞，深度1-2米，取出土柱觀察。</p>
        <p>每 1–1.5 ha 至少鑽 1 個剖面，記錄地層厚度、質地、礫石/碎石含量、紅銹/石灰浸潤。</p>
        <p class="subhead">剖面記錄格式</p>
        <div class="term-decoder">
          <p>📝 <strong>專業術語解碼</strong>（括號內是白話說明）：</p>
          <ul>
            <li><strong>Horizons層位</strong>：
              <ul class="nested-list">
                <li><strong>A層</strong>（表土）：最上層，深色，有機質豐富</li>
                <li><strong>Bt層</strong>（心土）：中間層，黏粒累積，根系深度</li>
                <li><strong>C層</strong>（底土）：下層，接近母岩</li>
                <li><strong>R層</strong>（岩石）：硬岩層，根系無法穿透</li>
              </ul>
            </li>
            <li><strong>質地</strong>（土壤摸起來的感覺）：砂質=粗糙、粉質=滑順、黏質=黏手</li>
            <li><strong>結構</strong>（土壤顆粒如何聚集）：粒狀最好（鬆軟）、板狀最差（緊實）</li>
            <li><strong>硬盤</strong>（compacted layer）：緊實得像水泥的土層，根系穿不過去</li>
          </ul>
        </div>
        <h3>物理/化學診斷</h3>
        <div class="table-guide">
          <p>這張表格是<strong>土壤健康檢查表</strong>，告訴你每項指標：怎麼測？標準是什麼？超標了怎麼辦？</p>
          <p class="tip">💡 重點不是記住數字，而是理解<strong>「這個指標反映什麼問題」</strong></p>
        </div>
        <table class="data-table">
          <thead>
            <tr><th>指標</th><th>檢測方法</th><th>臨界值</th><th>管理決策</th></tr>
          </thead>
          <tbody>
            <tr><td>體積密度</td><td>未擾動土柱</td><td>>1.55 g/cm³</td><td>深耕+覆蓋作物</td></tr>
            <tr><td>飽和導水率</td><td>滲透儀</td><td>< 10 mm/hr</td><td>排水管/砂質改良</td></tr>
            <tr><td>CEC (Cation Exchange Capacity)</td><td>實驗室</td><td>< 8 meq/100g</td><td>補充有機質、調整施肥</td></tr>
            <tr><td>活性石灰</td><td>Bernard 法</td><td>>10%</td><td>選抗石灰砧、葉面鐵補充</td></tr>
          </tbody>
        </table>
        <h3>根砧選擇決策樹</h3>
        <div class="decision-guide">
          <p class="analogy">🌱 <strong>比喻</strong>：選根砧就像選汽車引擎，要根據路況（土壤）和用途（產量目標）來選。</p>
          <p>依據土壤限制與生長目標，用<strong>三個問題</strong>篩選最佳根砧：</p>
        </div>
        <p class="subhead">決策三步驟</p>
        <div class="step-by-step">
          <div class="step">
            <h4>Step 1：土壤有什麼問題？</h4>
            <ul>
              <li>🪨 石灰多？（pH > 8，土壤發白）→ 選耐石灰砧木</li>
              <li>🏜️ 容易乾旱？（排水太快、夏季缺水）→ 選耐旱砧木</li>
              <li>💧 容易積水？（排水差、春季泥濘）→ 選耐濕砧木</li>
              <li>🐛 有線蟲病害？→ 選抗線蟲砧木</li>
            </ul>
          </div>
          <div class="step">
            <h4>Step 2：想要葡萄長多旺？</h4>
            <ul>
              <li><strong>旺盛砧木</strong>：葡萄藤長很大，產量高，但可能品質下降</li>
              <li><strong>中等砧木</strong>：平衡產量與品質</li>
              <li><strong>弱勢砧木</strong>：葡萄藤較小，產量低，但果實濃縮、品質高</li>
            </ul>
          </div>
          <div class="step">
            <h4>Step 3：確認栽植計畫</h4>
            <p>高密度栽植（如5000株/公頃）→ 用弱勢砧，避免太擠<br>
            低密度栽植（如3000株/公頃）→ 可用中等砧，確保產量</p>
          </div>
        </div>
        <table class="data-table compact">
          <thead>
            <tr><th>根砧</th><th>逆境耐受</th><th>活力</th><th>適用情境</th></tr>
          </thead>
          <tbody>
            <tr><td>3309C</td><td>中石灰、良排水</td><td>中低</td><td>高密度、追求香氣細緻</td></tr>
            <tr><td>101-14</td><td>耐濕、低石灰</td><td>低</td><td>冷涼區、晚熟品種</td></tr>
            <tr><td>SO4</td><td>中石灰、線蟲中</td><td>中</td><td>平衡產量、適中土壤</td></tr>
            <tr><td>110R</td><td>高旱、耐石灰</td><td>高</td><td>乾燥礫石坡、需保產量</td></tr>
          </tbody>
        </table>
        <h3>案例：高石灰台地改植</h3>
        <p class="subhead">背景</p>
        <p>活性石灰 14%、CEC 6 meq，原砧木 420A 出現缺鐵與產量波動。</p>
        <p class="subhead">策略</p>
        <ul>
          <li>改植 110R + 微生物接種促進鐵吸收。</li>
          <li>行間覆蓋豆科以提升有機質。</li>
          <li>建立分區滴灌，依土壤水分感測調配。</li>
        </ul>
        <p class="subhead">結果</p>
        <p>第三年起產量穩定於 6.5 t/ha，總花青素提升 18%。</p>
      </div>
    `,
    highlights: [
      { id: 1, icon: '🧱', title: '剖面診斷', content: '剖面鑽探 + 實驗室數據建立土層限制地圖。' },
      { id: 2, icon: '🌱', title: '根砧決策樹', content: '以逆境→活力→栽植密度三步驟篩選最佳砧木。' },
      { id: 3, icon: '📈', title: '案例驗證', content: '高石灰地改植 110R 後，產量穩定且花青素↑18%。' }
    ]
  },

  // 章節 3：水分壓力與成熟動態
  { type: 'chapter-divider', title: '第三章', subtitle: '水分壓力建模', icon: '💧', navLabel: '水分建模' },
  {
    type: 'chapter',
    title: '第三章：水分壓力建模與採收視窗',
    subtitle: '水勢量測、氣孔導度、成熟指標整合',
    content: `
      <div class="chapter-content">
        <div class="concept-intro">
          <h3>🔰 概念入門：什麼是水分壓力？</h3>
          <p class="analogy">
            <strong>生活化比喻</strong>：把葡萄藤想像成人體的血液循環系統：
          </p>
          <ul class="body-analogy">
            <li>💧 <strong>土壤水分</strong> = 血庫存量</li>
            <li>🫀 <strong>葉水勢</strong> = 血壓（壓力太低，循環不良）</li>
            <li>😮 <strong>氣孔導度</strong> = 呼吸狀態（壓力大時會「閉氣」）</li>
            <li>🩺 <strong>水分壓力監測</strong> = 定期量血壓，預防中風（旱情）</li>
          </ul>
          
          <div class="why-monitor">
            <h4>❓ 為什麼要監測水分壓力？</h4>
            <p>適度的水分壓力（像適度運動）能<strong>提升葡萄品質</strong>：</p>
            <ul>
              <li>✅ 輕度壓力（-0.4 to -0.6 MPa）：果實濃縮、風味集中、單寧更細緻</li>
              <li>⚠️ 中度壓力（-0.6 to -0.9 MPa）：生長變慢、需要監控</li>
              <li>❌ 重度壓力（< -0.9 MPa）：葡萄藤受傷、香氣流失、需緊急灌溉</li>
            </ul>
            <p class="key-insight">💡 <strong>關鍵</strong>：要在「適度壓力」和「過度壓力」之間找到平衡點</p>
          </div>
        </div>

        <h3>量測矩陣</h3>
        <div class="table-intro">
          <p>這張表格列出<strong>4種監測工具</strong>，就像醫生用不同儀器檢查身體：</p>
          <ul class="tool-list">
            <li>🩺 壓力室 = 量血壓</li>
            <li>🫁 氣孔儀 = 測肺活量</li>
            <li>💉 土壤感測器 = 驗血（檢查存量）</li>
            <li>🩸 樹液流速儀 = 測血流速度</li>
          </ul>
        </div>
        <table class="data-table compact">
          <thead>
            <tr><th>指標</th><th>工具</th><th>頻率</th><th>目標範圍</th><th>預警</th></tr>
          </thead>
          <tbody>
            <tr><td>預曉葉水勢</td><td>壓力室</td><td>週 1 次</td><td>-0.4 ~ -0.6 MPa</td><td><-0.7 MPa：啟動補灌</td></tr>
            <tr><td>正午氣孔導度</td><td>Porometer</td><td>週 2 次</td><td>80–120 mmol/m²s</td><td><60：葉片壓力↑</td></tr>
            <tr><td>土壤含水量</td><td>TDR or FDR</td><td>每日</td><td>田間持水量 60–70%</td><td><50%：植株水勢可能急降</td></tr>
            <tr><td>樹液流速</td><td>Sap-flow</td><td>連續</td><td>基線 ±15%</td><td>異常：檢查阻塞或旱情</td></tr>
          </tbody>
        </table>
        <h3>水分壓力建模流程</h3>
        <p class="subhead">資料整合</p>
        <ul>
          <li>整合水勢、土壤水分、氣象預報、ET₀ 模型。</li>
          <li>建立每日水量平衡（灌溉 + 降雨 − 蒸散）。</li>
        </ul>
        <p class="subhead">模型選項</p>
        <ul>
          <li>簡化 Bucket Model：以田間持水量為上限。</li>
          <li>FAO-56 單作物係數，導入 Kc(Phenology)。</li>
          <li>機器學習：XGBoost 預測水勢 48 小時趨勢。</li>
        </ul>
        <h3>成熟多指標雷達圖</h3>
        <div class="concept-explanation">
          <p class="analogy">🎯 <strong>什麼是雷達圖？</strong></p>
          <p>想像成熟度是一場考試，有多個科目：</p>
          <ul class="exam-subjects">
            <li>🍯 <strong>糖度</strong>：甜度考試（15-20°Brix是標準）</li>
            <li>🍋 <strong>酸度</strong>：鮮度考試（6-7 g/L是標準）</li>
            <li>🍷 <strong>pH</strong>：平衡考試（3.3-3.5是標準）</li>
            <li>💜 <strong>花青素</strong>：顏色考試（決定酒的深淺）</li>
            <li>🍇 <strong>籽褐變</strong>：籽粒是否變褐（100%=成熟）</li>
            <li>🌺 <strong>香氣前體</strong>：未來香氣潛力</li>
          </ul>
          <p>我們把每個指標轉成<strong>0-5分評級</strong>，畫在雷達圖上，就能一眼看出哪個項目合格、哪個還不夠。</p>
        </div>
        <p>收集糖度、滴定酸、pH、花青素、籽褐變指數、香氣前體，標準化為 0–5 分評級。</p>
        <p class="subhead">應用</p>
        <ul>
          <li>找出不同微地塊成熟步調差（最早 vs 最晚差 7–10 天）。</li>
          <li>判斷是否需要選擇性採收或延遲混槽。</li>
        </ul>
        <h3>採收視窗決策板</h3>
        <div class="decision-framework">
          <p>📋 <strong>採收決策三要素</strong>：就像出門旅遊前要考慮的三件事</p>
          <ol class="decision-factors">
            <li><strong>🎯 品質</strong>（準備好了嗎？）→ 看成熟雷達圖，是否達到標準</li>
            <li><strong>⛈️ 風險</strong>（天氣好嗎？）→ 看未來48小時會下雨嗎？會霜害嗎？</li>
            <li><strong>👥 資源</strong>（有能力採收嗎？）→ 看人手、釀酒槽、壓榨機是否足夠</li>
          </ol>
        </div>
        <p>建立 3 層門檻：品質（成熟雷達）、風險（降雨/霜害）、資源（人力/槽/壓榨）。</p>
        <p class="subhead">決策對照表</p>
        <div class="decision-table">
          <table>
            <tr><th>品質狀態</th><th>風險程度</th><th>→ 建議行動</th></tr>
            <tr><td>✅ 達標</td><td>✅ 低風險</td><td>→ 繼續觀察，等待最佳時機</td></tr>
            <tr><td>✅ 達標</td><td>⚠️ 高風險</td><td>→ <strong>48小時內立刻採收</strong></td></tr>
            <tr><td>⚠️ 不足</td><td>⚠️ 高風險</td><td>→ 只採最好地塊，其他做防護</td></tr>
          </table>
        </div>
        <h3>水分情境與趨勢小工具</h3>
        <div class="water-trend-widget" style="--highlight-color:#0ea5e9;">
          <input type="radio" id="wt-base" name="water-scenario-l41" class="opt-base" checked>
          <input type="radio" id="wt-drought" name="water-scenario-l41" class="opt-drought">
          <input type="radio" id="wt-irrigation" name="water-scenario-l41" class="opt-irrigation">
          <div class="control-row">
            <label for="wt-base">基準年份</label>
            <label for="wt-drought">旱熱情境</label>
            <label for="wt-irrigation">夜間補灌</label>
          </div>
          <div class="panels">
            <div class="chart" data-scenario="base">
              <svg viewBox="0 0 260 90" role="img" aria-label="基準年份水勢趨勢">
                <polyline points="0,50 40,48 80,52 120,47 160,49 200,46 240,48 260,47" />
                <line x1="0" y1="60" x2="260" y2="60" class="threshold" />
              </svg>
            </div>
            <div class="chart" data-scenario="drought">
              <svg viewBox="0 0 260 90" role="img" aria-label="旱熱情境水勢趨勢">
                <polyline points="0,50 40,55 80,62 120,70 160,78 200,82 240,86 260,88" />
                <line x1="0" y1="60" x2="260" y2="60" class="threshold" />
              </svg>
            </div>
            <div class="chart" data-scenario="irrigation">
              <svg viewBox="0 0 260 90" role="img" aria-label="夜間補灌水勢趨勢">
                <polyline points="0,50 40,53 80,58 120,62 160,59 200,55 240,57 260,54" />
                <line x1="0" y1="60" x2="260" y2="60" class="threshold" />
              </svg>
            </div>
          </div>
          <div class="metrics">
            <div class="metric" data-scenario="base">
              <span class="label">平均預曉葉水勢</span>
              <span class="value">-0.55 MPa</span>
            </div>
            <div class="metric" data-scenario="base">
              <span class="label">補灌需求</span>
              <span class="value">無</span>
            </div>
            <div class="metric" data-scenario="drought">
              <span class="label">最低水勢</span>
              <span class="value">-1.05 MPa</span>
            </div>
            <div class="metric" data-scenario="drought">
              <span class="label">建議措施</span>
              <span class="value">48 小時內滴灌 + 覆蓋</span>
            </div>
            <div class="metric" data-scenario="irrigation">
              <span class="label">夜間滴灌量</span>
              <span class="value">4 mm/日</span>
            </div>
            <div class="metric" data-scenario="irrigation">
              <span class="label">預估水勢回穩</span>
              <span class="value">-0.65 MPa</span>
            </div>
          </div>
          <div class="notes">
            <p>藍線為水勢走勢；灰線表示管理閾值（-0.6 MPa）。切換情境即可討論決策因應。</p>
          </div>
        </div>
        <h3>案例：2023 旱熱年份調度</h3>
        <p class="subhead">洞察</p>
        <p>XGBoost 預測 4 天後水勢降至 -1.0 MPa；香氣指標仍提升中。</p>
        <p class="subhead">決策</p>
        <ul>
          <li>先採收礫石坡 Cabernet（成熟較快）。</li>
          <li>黃泥地塊保留並啟動夜間滴灌，延後 5 天採收。</li>
        </ul>
        <p class="subhead">成果</p>
        <p>保持 0.25% Brix 差異與酚類指標最佳化，避免高溫造成香氣流失。</p>
      </div>
    `,
    highlights: [
      { id: 1, icon: '📊', title: '量測矩陣', content: '水勢、導度、土壤含水、樹液流整合建模。' },
      { id: 2, icon: '🧮', title: '模型選項', content: 'Bucket/FAO-56/機器學習三種水分預測路徑。' },
      { id: 3, icon: '🗓️', title: '採收視窗', content: '品質×風險×資源，決定採收批次與調度。' }
    ]
  },

  // 章節 4：微地塊分離釀造
  { type: 'chapter-divider', title: '第四章', subtitle: '地塊分離釀造策略', icon: '🧭', navLabel: '分離釀造' },
  {
    type: 'chapter',
    title: '第四章：地塊分離釀造與調配策略',
    subtitle: '從採收批次到調配決策',
    content: `
      <div class="chapter-content">
        <div class="concept-intro">
          <h3>🔰 概念入門：為什麼要分離釀造？</h3>
          <p class="analogy">
            <strong>音樂比喻</strong>：把微地塊釀造想像成組建一個交響樂團：
          </p>
          <ul class="orchestra-analogy">
            <li>🎻 <strong>礫石坡地塊</strong> = 小提琴聲部（細緻、明亮、骨幹）</li>
            <li>🎺 <strong>黏土台地塊</strong> = 銅管聲部（厚重、有力、結構）</li>
            <li>🎼 <strong>河階地塊</strong> = 木管聲部（芳香、優雅、層次）</li>
          </ul>
          <p>如果把所有樂器混在一起同時錄音，很難調整各聲部的音量和效果。但如果<strong>分開錄音</strong>，最後混音時就能精確控制：</p>
          <ul class="benefits-list">
            <li>✓ 小提琴太弱？調高音量</li>
            <li>✓ 銅管太吵？降低比例</li>
            <li>✓ 想要特別版本？重新組合不同比例</li>
          </ul>
          <p class="key-insight">💡 <strong>核心理念</strong>：分離釀造讓我們保留每塊地的特色，最後透過調配創造比單一地塊更複雜、平衡的葡萄酒。</p>
        </div>

        <h3>分批採收與入槽規劃</h3>
        <div class="practical-guide">
          <p>📅 <strong>實務問題</strong>：如何決定哪些地塊要分開採收？</p>
          <p>答案：看<strong>成熟度差異</strong>和<strong>風格目標</strong></p>
        </div>
        <p>依地塊成熟度與目標風格決定是否分批採收。</p>
        <p class="subhead">排程原則</p>
        <ul>
          <li>成熟同步地塊：合併入槽降低操作複雜度。</li>
          <li>成熟錯位地塊：採取 2–3 次採收，保留酸度與香氣層次。</li>
        </ul>
        <h3>微發酵設定</h3>
        <table class="data-table compact">
          <thead>
            <tr><th>地塊</th><th>發酵容器</th><th>酵母/菌種</th><th>浸漬策略</th><th>監控指標</th></tr>
          </thead>
          <tbody>
            <tr><td>礫石坡 A</td><td>3.5hL 開口桶</td><td>原生酵母</td><td>冷浸 4 日 + 溫和踩帽</td><td>花青素、溫度</td></tr>
            <tr><td>黏土台地 B</td><td>不鏽鋼錐槽</td><td>選殖酵母 D254</td><td>短浸漬 + 曝氣</td><td>還原指標、YAN</td></tr>
            <tr><td>河階 C</td><td>蛋形混凝土</td><td>共發酵少量白皮</td><td>持續懸浮</td><td>口感體積、乳酸菌</td></tr>
          </tbody>
        </table>
        <h3>感官與化學追蹤</h3>
        <p>建立批次感官卡與化學指標範本。</p>
        <p class="subhead">核心欄位</p>
        <ul>
          <li>感官：香氣類型、口感結構、餘味。</li>
          <li>化學：酒精、酚類、顏色密度、揮發酸。</li>
          <li>經濟：成本/批、桶齡、預估調配比例。</li>
        </ul>
        <h3>調配矩陣與決策</h3>
        <table class="data-table">
          <thead>
            <tr><th>批次</th><th>風格定位</th><th>優勢</th><th>限制</th><th>調配建議</th></tr>
          </thead>
          <tbody>
            <tr><td>礫石坡 A</td><td>骨幹</td><td>單寧細緻、礦物感</td><td>初期緊閉</td><td>主體 50–60%</td></tr>
            <tr><td>黏土台地 B</td><td>結構</td><td>酒體厚、黑色果香</td><td>還原風險</td><td>20–30%，需微氧化</td></tr>
            <tr><td>河階 C</td><td>香氣提亮</td><td>紅果、花香</td><td>酸度偏高</td><td>10–20%，調整酸度</td></tr>
          </tbody>
        </table>
        <h3>混調策略模擬</h3>
        <div class="blend-widget">
          <input type="radio" id="blend-classic" name="blend-strategy-l41" class="opt-classic" checked>
          <input type="radio" id="blend-aromatic" name="blend-strategy-l41" class="opt-aromatic">
          <input type="radio" id="blend-reserve" name="blend-strategy-l41" class="opt-reserve">
          <div class="tabs">
            <label for="blend-classic">經典平衡</label>
            <label for="blend-aromatic">香氣突出</label>
            <label for="blend-reserve">特級珍藏</label>
          </div>
          <div class="scenarios">
            <div class="scenario" data-scenario="classic">
              <table class="data-table compact">
                <thead>
                  <tr><th>批次</th><th>比例</th><th>貢獻</th></tr>
                </thead>
                <tbody>
                  <tr><td>礫石坡 A</td><td>60%</td><td>骨幹與礦物感</td></tr>
                  <tr><td>黏土台地 B</td><td>25%</td><td>酒體厚度與黑果</td></tr>
                  <tr><td>河階 C</td><td>15%</td><td>紅果與花香提亮</td></tr>
                </tbody>
              </table>
              <div class="metrics">
                <div class="metric"><span class="label">預估酒精</span><span class="value">13.4%</span></div>
                <div class="metric"><span class="label">結構指數</span><span class="value">7.8 / 10</span></div>
                <div class="metric"><span class="label">桶齡建議</span><span class="value">新桶 40%</span></div>
              </div>
              <p class="note">適合維持酒莊經典風格，兼具骨幹與香氣，陳年潛力 10–12 年。</p>
            </div>
            <div class="scenario" data-scenario="aromatic">
              <table class="data-table compact">
                <thead>
                  <tr><th>批次</th><th>比例</th><th>貢獻</th></tr>
                </thead>
                <tbody>
                  <tr><td>礫石坡 A</td><td>50%</td><td>結構與礦物基底</td></tr>
                  <tr><td>黏土台地 B</td><td>15%</td><td>柔軟口感</td></tr>
                  <tr><td>河階 C</td><td>35%</td><td>紅果、花香與酸度</td></tr>
                </tbody>
              </table>
              <div class="metrics">
                <div class="metric"><span class="label">預估酒精</span><span class="value">13.0%</span></div>
                <div class="metric"><span class="label">香氣指數</span><span class="value">8.5 / 10</span></div>
                <div class="metric"><span class="label">裝瓶時程</span><span class="value">18 個月內</span></div>
              </div>
              <p class="note">主打香氣與早飲友善，可作為限量特別款或餐酒搭配方案。</p>
            </div>
            <div class="scenario" data-scenario="reserve">
              <table class="data-table compact">
                <thead>
                  <tr><th>批次</th><th>比例</th><th>貢獻</th></tr>
                </thead>
                <tbody>
                  <tr><td>礫石坡 A</td><td>75%</td><td>深度單寧與礦物</td></tr>
                  <tr><td>黏土台地 B</td><td>20%</td><td>構架與熟果甜感</td></tr>
                  <tr><td>河階 C</td><td>5%</td><td>酸度與香氣提亮</td></tr>
                </tbody>
              </table>
              <div class="metrics">
                <div class="metric"><span class="label">預估酒精</span><span class="value">13.8%</span></div>
                <div class="metric"><span class="label">陳年潛力</span><span class="value">15+ 年</span></div>
                <div class="metric"><span class="label">桶齡建議</span><span class="value">新桶 60% + 大桶</span></div>
              </div>
              <p class="note">適合旗艦珍藏或特級園款式，須加強新桶管理與還原風險控管。</p>
            </div>
          </div>
        </div>
        <h3>案例：三地塊調配流程</h3>
        <p class="subhead">步驟</p>
        <ol>
          <li>初篩：淘汰揮發酸 >0.7 g/L 的批次。</li>
          <li>香氣組合：礫石 A : 河階 C = 70:30，建立基底。</li>
          <li>結構補強：黏土 B 以 20% 加入並調整桶齡。</li>
        </ol>
        <p class="subhead">成果</p>
        <p>最終混調在盲評中獲得 92 分，保留三地塊的差異性與整體平衡。</p>
      </div>
    `,
    highlights: [
      { id: 1, icon: '🗂️', title: '分批採收', content: '依成熟節奏規劃 2–3 次採收，保留層次。' },
      { id: 2, icon: '🧪', title: '微發酵設計', content: '容器/酵母/浸漬策略對應地塊特性。' },
      { id: 3, icon: '⚖️', title: '調配矩陣', content: '以優勢/限制映射，找到平衡比例。' }
    ]
  },

  // 總結
  {
    type: 'summary',
    title: '課程總結：從地塊到決策',
    content: `
      <div class="summary-content">
        <h3>🎯 四大核心能力回顧</h3>
        <div class="skills-review">
          <div class="skill-block">
            <h4>1️⃣ 看地形：找出差異</h4>
            <ul>
              <li>用LiDAR/DEM繪製地形圖</li>
              <li>識別坡度、朝向、冷空氣滯留區</li>
              <li>標記高風險區域（霜害、積水）</li>
            </ul>
            <p class="key-output">✓ 輸出：微地塊邊界地圖（0.1-0.5公頃尺度）</p>
          </div>
          
          <div class="skill-block">
            <h4>2️⃣ 看土壤：評估潛力</h4>
            <ul>
              <li>鑽探土壤剖面（1-2米深）</li>
              <li>檢測物理化學指標（密度、CEC、石灰）</li>
              <li>選擇適配根砧（耐石灰、耐旱、活力）</li>
            </ul>
            <p class="key-output">✓ 輸出：土壤限制圖 + 根砧選配方案</p>
          </div>
          
          <div class="skill-block">
            <h4>3️⃣ 看水分：抓準時機</h4>
            <ul>
              <li>監測葉水勢、氣孔導度、土壤含水</li>
              <li>建立水分壓力模型（機器學習）</li>
              <li>整合成熟雷達圖，計算採收視窗</li>
            </ul>
            <p class="key-output">✓ 輸出：分批採收時間表 + 灌溉調度</p>
          </div>
          
          <div class="skill-block">
            <h4>4️⃣ 看釀造：精準調配</h4>
            <ul>
              <li>地塊分離發酵（不同容器/酵母）</li>
              <li>追蹤感官與化學指標</li>
              <li>建立調配矩陣（優勢/限制/比例）</li>
            </ul>
            <p class="key-output">✓ 輸出：最終調配方案 + 風格定位</p>
          </div>
        </div>

        <h3>💭 從理論到實踐：系統思維</h3>
        <p>微地塊管理不是孤立的技術，而是一個<strong>閉環系統</strong>：</p>
        <div class="system-flow">
          <div class="flow-step">
            <span class="step-number">①</span>
            <p><strong>數據收集</strong><br>地形掃描、土壤檢測、水分監測</p>
          </div>
          <div class="arrow">→</div>
          <div class="flow-step">
            <span class="step-number">②</span>
            <p><strong>地塊分群</strong><br>根據相似性劃分管理單元</p>
          </div>
          <div class="arrow">→</div>
          <div class="flow-step">
            <span class="step-number">③</span>
            <p><strong>差異化管理</strong><br>灌溉、修剪、採收因地制宜</p>
          </div>
          <div class="arrow">→</div>
          <div class="flow-step">
            <span class="step-number">④</span>
            <p><strong>分離釀造</strong><br>保留每塊地的特色</p>
          </div>
          <div class="arrow">→</div>
          <div class="flow-step">
            <span class="step-number">⑤</span>
            <p><strong>精準調配</strong><br>組合成理想風格</p>
          </div>
        </div>

        <h3>🌟 關鍵洞察</h3>
        <div class="key-insights">
          <div class="insight">
            <h4>⚖️ 差異是資源，不是問題</h4>
            <p>同一個葡萄園內的微氣候、土壤差異，不是要消除的缺陷，而是可以利用的<strong>風味調色盤</strong>。礫石給你骨架，黏土給你肉感，河階給你香氣——關鍵是如何組合。</p>
          </div>
          
          <div class="insight">
            <h4>📊 數據服務於決策，不是展示</h4>
            <p>LiDAR、水勢、機器學習聽起來很炫，但最終要問：<strong>這些數據幫助我做出什麼決策？</strong>地形圖→決定風機位置；水勢數據→決定灌溉時機；成熟雷達→決定採收批次。</p>
          </div>
          
          <div class="insight">
            <h4>🤝 跨部門協作決定成敗</h4>
            <p>微地塊管理需要：葡萄栽培團隊提供數據、釀酒師設計發酵策略、調配師整合風味、商業團隊定位市場。沒有任何一個環節可以獨立完成。</p>
          </div>
        </div>

        <h3>📚 延伸學習建議</h3>
        <ul class="further-learning">
          <li><strong>技術深化</strong>：學習GIS軟體（QGIS）、統計建模（R/Python）、感測器數據分析</li>
          <li><strong>實地觀摩</strong>：參訪實施微地塊管理的酒莊（Château Latour、Palmer等）</li>
          <li><strong>文獻閱讀</strong>：<em>Precision Viticulture</em>、<em>Understanding Wine Chemistry</em></li>
          <li><strong>證照進階</strong>：WSET Level 4、法國農藝工程師課程</li>
        </ul>

        <div class="final-message">
          <p>🎓 <strong>最後的話</strong></p>
          <p>微地塊管理是波爾多頂級酒莊過去20年最重要的品質革命。它不僅僅是技術升級，更是<strong>哲學轉變</strong>：從「統一標準化」到「尊重差異性」，從「平均品質」到「卓越層次」。</p>
          <p>掌握這套系統框架後，你已經具備<strong>Level 4專家級</strong>的分析能力——恭喜你完成這個挑戰性的課程！</p>
        </div>
      </div>
    `
  },

  // 簡單測驗（示範）
  {
    type: 'quiz',
    title: '快速測驗',
    questions: [
      {
        id: 1,
        question: '當活性石灰 >10% 且出現缺鐵症狀時，哪種根砧較為適合？',
        options: ['101-14', '3309C', 'SO4', '110R'],
        correct: 3,
        explanation: '110R 對石灰與旱害耐受度高，活力足以維持產量。'
      },
      {
        id: 2,
        question: '水分壓力建模想預估 48 小時水勢趨勢，下列哪個策略最能快速捕捉非線性變化？',
        options: ['固定灌溉頻率', 'XGBoost 模型', '僅依田間持水量判斷', '每月一次土壤採樣'],
        correct: 1,
        explanation: 'XGBoost 等機器學習模型能整合多變量，預測短期水勢變化。'
      },
      {
        id: 3,
        question: '分離釀造後的調配矩陣主要用途為何？',
        options: ['節省桶數', '記錄採收日期', '將地塊優勢與限制映射到混調比例', '設定灌溉時程'],
        correct: 2,
        explanation: '調配矩陣整理各批次優勢/限制，協助決定混調比例與角色。'
      }
    ],
    passingScore: 60,
    timeLimit: 240
  }
]

export default l41Content;
