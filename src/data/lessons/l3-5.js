// L3-5 合併內容：將 Part1 / Part2 / Part3A / Part3B 整合為單一課程內容

// L3-5 全部內容（Part1+Part2+Part3A+Part3B 內嵌合併）
export const l35Content = [
  // ===== 以下為原 Part1 內容嵌入 =====
  {
    type: 'intro',
    title: '課程導讀',
    content: '波爾多的釀酒工藝結合了數百年的傳統智慧與現代科學技術。從葡萄進入酒窖的那一刻起，每一個決策都將影響最終酒款的品質與風格。本課程將深入探討紅白酒釀造的完整流程，從破皮浸漬到蘋果酸乳酸發酵，從發酵控制到浸漬管理，全面理解釀造工藝如何塑造葡萄酒的顏色、單寧、風味與陳年潛力。您將了解頂級酒莊的技術總監如何在傳統與創新之間找到平衡，既保留風土特色，又運用現代技術提升品質穩定性。',
    duration: '預計學習時間：50分鐘',
    level: '高級專業',
    objectives: [
      {
        title: '掌握紅酒釀造完整流程',
        description: '理解從破皮除梗到蘋果酸乳酸發酵的每個步驟及其對酒款的影響',
        icon: '🍷'
      },
      {
        title: '了解白酒釀造技術差異',
        description: '比較不同風格白酒（清爽型vs複雜型）的釀造方法',
        icon: '🥂'
      },
      {
        title: '掌握發酵控制技術',
        description: '學習溫度管理、酵母選擇與發酵動力學',
        icon: '🌡️'
      },
      {
        title: '理解浸漬萃取原理',
        description: '分析不同浸漬技術對顏色、單寧、風味的影響',
        icon: '⚗️'
      },
      {
        title: '評估現代釀酒技術',
        description: '了解波爾多酒莊如何平衡傳統與創新',
        icon: '🔬'
      }
    ]
  },
  {
    type: 'chapter-divider',
    title: '紅酒釀造工藝',
    subtitle: '從葡萄到美酒的轉化之旅',
    description: '理解紅酒釀造的完整流程與關鍵技術',
    background: 'linear-gradient(135deg, #8B0000 0%, #DC143C 100%)',
    icon: '🍷',
    navLabel: '紅酒釀造'
  },
  {
    type: 'intro',
    title: '紅酒釀造工藝導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          紅酒釀造是將葡萄轉化為優質紅酒的複雜過程。波爾多的紅酒釀造工藝融合了傳統智慧與現代科學，每個步驟都對最終酒款的顏色、單寧結構、風味複雜度和陳年潛力產生深遠影響。
        </p>

        <p class="intro-context">
          從葡萄進入酒窖的那一刻起，釀酒師需要在破皮除梗、浸漬萃取、發酵控制、壓榨時機等環節做出一系列關鍵決策。這些決策不僅影響當年的酒質，更決定了葡萄酒未來數十年的陳年潛力。
        </p>

        <h3 class="section-title">本章核心內容</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>• 破皮除梗</h4>
            <p>理解機械處理對葡萄完整性的影響，學習如何根據年份特性調整除梗比例</p>
          </div>

          <div class="point-item">
            <h4>• 浸漬萃取</h4>
            <p>掌握顏色、單寧、風味的萃取動力學，了解冷浸漬、淋皮、壓帽等技術的應用時機</p>
          </div>

          <div class="point-item">
            <h4>• 酒精發酵</h4>
            <p>學習溫度控制如何影響香氣保留與萃取效率，理解酵母選擇對風格的影響</p>
          </div>

          <div class="point-item">
            <h4>• 蘋果酸乳酸發酵</h4>
            <p>了解 MLF 如何柔化酸度、穩定酒體，以及在不同酒款中的應用策略</p>
          </div>

          <div class="point-item">
            <h4>• 頂級酒莊實踐</h4>
            <p>分析 Château Latour、Château Margaux 等名莊的釀造決策與品質哲學</p>
          </div>
        </div>

        <p class="intro-conclusion">
          掌握這些知識，您將理解為什麼波爾多能夠持續產出世界頂級紅酒，以及釀酒師如何透過精準的技術控制來表達風土特色。
        </p>
      </div>
    `,
    icon: '🍷'
  },
  {
    type: 'content',
    title: '紅酒釀造流程概覽',
    content: `
      <div class="winemaking-overview">
        <p class="lead-text">波爾多紅酒的釀造是一個精密控制的過程，每個步驟都需要釀酒師的專業判斷與技術執行。</p>
        
        <div class="process-steps">
          <div class="step">
            <h4>1️⃣ 採收與分選 (Harvest & Sorting)</h4>
            <ul>
              <li><strong>時機選擇：</strong>根據糖分、酸度、酚類成熟度決定採收日期</li>
              <li><strong>手工vs機械：</strong>頂級酒莊多採用手工採收，確保葡萄完整性</li>
              <li><strong>分選過程：</strong>振動台、光學分選機去除不健康或未成熟的葡萄</li>
              <li><strong>波爾多標準：</strong>列級莊通常進行2-3次分選</li>
            </ul>
          </div>

          <div class="step">
            <h4>2️⃣ 破皮與除梗 (Crushing & Destemming)</h4>
            <ul>
              <li><strong>除梗比例：</strong>通常100%除梗，但某些年份保留部分梗（5-10%）</li>
              <li><strong>破皮強度：</strong>輕柔破皮避免壓榨果籽，防止苦澀</li>
              <li><strong>二氧化硫添加：</strong>10-30mg/L，防止氧化與雜菌感染</li>
            </ul>
          </div>

          <div class="step">
            <h4>3️⃣ 冷浸漬 (Cold Maceration)</h4>
            <ul>
              <li><strong>溫度：</strong>8-15°C</li>
              <li><strong>時間：</strong>3-7天</li>
              <li><strong>目的：</strong>萃取顏色與果香，不啟動發酵</li>
              <li><strong>爭議：</strong>並非所有酒莊採用，部分認為會稀釋風土特色</li>
            </ul>
          </div>

          <div class="step">
            <h4>4️⃣ 酒精發酵 (Alcoholic Fermentation)</h4>
            <ul>
              <li><strong>溫度：</strong>28-32°C（紅酒）</li>
              <li><strong>時間：</strong>7-14天</li>
              <li><strong>酵母：</strong>自然酵母 vs 商業酵母</li>
              <li><strong>監控參數：</strong>比重、溫度、殘糖、揮發酸</li>
            </ul>
          </div>

          <div class="step">
            <h4>5️⃣ 浸漬 (Maceration)</h4>
            <ul>
              <li><strong>總浸漬時間：</strong>15-30天（包括發酵期）</li>
              <li><strong>技術：</strong>淋皮、壓帽、循環、délestage</li>
              <li><strong>目標：</strong>萃取顏色、單寧、風味化合物</li>
            </ul>
          </div>

          <div class="step">
            <h4>6️⃣ 壓榨與調配 (Pressing & Blending)</h4>
            <ul>
              <li><strong>自流酒：</strong>第一次壓榨前流出的酒（質量最高）</li>
              <li><strong>壓榨酒：</strong>結構較強，單寧更高</li>
              <li><strong>初步調配：</strong>決定各品種、各批次的混合比例</li>
            </ul>
          </div>

          <div class="step">
            <h4>7️⃣ 蘋果酸乳酸發酵 (Malolactic Fermentation)</h4>
            <ul>
              <li><strong>時機：</strong>通常在酒精發酵後自然啟動</li>
              <li><strong>溫度：</strong>18-22°C</li>
              <li><strong>時間：</strong>2-6週</li>
              <li><strong>效果：</strong>降低酸度，增加口感柔順度，帶來奶油、堅果香氣</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    subsections: [
      {
        subtitle: '波爾多左岸vs右岸釀造差異',
        content: `**左岸（以卡本內蘇維濃為主）：**
- 更長的浸漬時間（25-35天）
- 更高的發酵溫度（30-32°C）
- 更強的萃取力度
- 目標：結構、陳年潛力、單寧骨架

**右岸（以梅洛為主）：**
- 較短的浸漬時間（18-25天）
- 較溫和的萃取
- 更注重果香保留
- 目標：柔順、早飲適性、圓潤口感`
      }
    ]
  },
  {
    type: 'winemaking-process',
    title: '紅酒釀造：詳細步驟分析',
    steps: [
      { step: '採收與分選', image: '/images/L3-5/01紅酒釀造： 採收與分選.png', timing: '9-10月', keyActions: ['手工採收（頂級莊）或機械採收','第一次分選：去除葉子、枝條','第二次分選：去除未成熟或損壞葡萄','光學分選（現代設備）：精準去除瑕疵葡萄'], scientificPrinciples: '成熟度決定糖分、酸度、酚類平衡。不健康葡萄會帶來異味、病害、氧化風險。', bordeauxPractice: '列級莊通常僱用150-300名採收工，進行2-3次分選，淘汰率可達10-30%。', qualityImpact: '決定原料品質上限', costImplication: '高強度分選增加人力成本50-100%' },
      { step: '冷浸漬', image: '/images/L3-5/02紅酒釀造： 冷浸漬.png', timing: '3-7天', keyActions: ['冷卻至8-15°C','防止發酵啟動','每日淋皮或攪拌','監控萃取進度'], scientificPrinciples: '低溫下花青素易溶於水，但酚類、單寧萃取少。可獲得鮮豔色澤與果香，避免過度萃取。', bordeauxPractice: '並非所有酒莊採用。支持者：Château Margaux, Château Pichon-Longueville。反對者認為會稀釋風土特色。', qualityImpact: '增加顏色深度30-40%，提升果香，但可能降低複雜度', costImplication: '需冷卻設備，能耗增加20-30%' },
      { step: '酒精發酵', image: '/images/L3-5/03紅酒釀造： 酒精發酵.png', timing: '7-14天', keyActions: ['升溫至28-32°C','酵母添加或自然啟動','每日2-3次淋皮或壓帽','監控溫度、比重、pH'], scientificPrinciples: '酵母將糖轉化為酒精與CO₂，產生熱量。高溫促進萃取但可能損失果香。發酵產生的酒精本身也是萃取溶劑。', bordeauxPractice: '左岸多用30-32°C以萃取更多單寧，右岸偏向28-30°C保留果香。溫控精度±1°C。', qualityImpact: '核心階段，決定酒精度、萃取強度、風味輪廓', costImplication: '溫控發酵罐成本高（€2,000-5,000/hL），但為現代標配' },
      { step: '浸漬延長', image: '/images/L3-5/04紅酒釀造：浸漬延長.png', timing: '發酵後5-15天', keyActions: ['維持果皮與酒液接觸','降低淋皮頻率','監控單寧萃取','品嚐決定結束時機'], scientificPrinciples: '酒精發酵結束後，酒精濃度高，繼續萃取單寧與風味。過度浸漬會萃取出苦澀、粗糙單寧。', bordeauxPractice: '左岸總浸漬時間25-35天，右岸18-25天。釀酒師每日品嚐判斷萃取狀態。', qualityImpact: '決定單寧結構、陳年潛力', costImplication: '延長浸漬佔用發酵罐，限制產能周轉' },
      { step: '壓榨', image: '/images/L3-5/05紅酒釀造： 壓榨.png', timing: '浸漬結束後', keyActions: ['排出自流酒（Vin de goutte）','輕柔壓榨果皮','分段收集壓榨酒','分別儲存評估'], scientificPrinciples: '自流酒最純淨、柔和。壓榨酒單寧高、結構強、顏色深，但可能帶粗糙感。', bordeauxPractice: '自流酒佔80-85%，壓榨酒15-20%。頂級酒莊可能僅使用前50%最輕柔壓榨的酒。', qualityImpact: '壓榨酒使用比例影響酒款結構與陳年潛力', costImplication: '氣囊式壓榨機投資€80,000-200,000' },
      { step: '蘋果酸乳酸發酵', image: '/images/L3-5/06紅酒釀造：蘋果酸乳酸發酵.png', timing: '2-6週', keyActions: ['通常自然啟動','維持18-22°C','監控蘋果酸消失','完成後添加SO₂穩定'], scientificPrinciples: '乳酸菌將尖銳的蘋果酸轉化為柔和的乳酸，降低總酸度0.1-0.3g/L，增加pH 0.1-0.3，產生奶油、堅果香氣（雙乙醯）。', bordeauxPractice: '紅酒100%完成MLF。在橡木桶中進行MLF可獲得更好的整合度。', qualityImpact: '必要步驟，增加口感柔順度與複雜度', costImplication: '溫控成本，若延遲需額外加熱' }
    ]
  },
  {
    type: 'content',
    title: '浸漬技術深度解析',
    content: `浸漬（Maceration）是紅酒釀造的核心環節，決定了顏色、單寧、風味的萃取程度。波爾多釀酒師使用多種技術來管理這個過程。

**主要浸漬技術：**`,
    subsections: [
      { subtitle: '1. 淋皮（Remontage / Pump-over）', content: `**操作方式：**\n從發酵罐底部抽取酒液，淋在上層果皮帽上。\n\n**頻率：** 每日2-4次，每次20-40分鐘\n\n**優點：**\n✅ 均勻萃取\n✅ 氧氣接觸適中\n✅ 溫度均勻化\n✅ 防止果皮帽乾燥\n\n**缺點：**\n❌ 萃取力度較溫和\n❌ 耗能（泵送）\n❌ 氧化風險（若過度）\n\n**波爾多應用：** 最常用技術，適合中等萃取強度的酒款。` },
      { subtitle: '2. 壓帽（Pigeage / Punch-down）', content: `**操作方式：**\n用工具將上浮的果皮帽壓入酒液中。\n\n**頻率：** 每日2-3次\n\n**優點：**\n✅ 強力萃取\n✅ 較少氧氣接觸\n✅ 更濃郁的顏色與單寧\n✅ 傳統工藝\n\n**缺點：**\n❌ 勞動強度高\n❌ 可能過度萃取\n❌ 溫度控制困難\n\n**波爾多應用：** 多見於右岸小酒莊，追求柔順梅洛的傳統酒莊。機械壓帽器在大型酒莊普及。` },
      { subtitle: '3. 循環（Rack and Return / Délestage）', content: `**操作方式：**\n將全部酒液排出發酵罐，然後淋回果皮帽上。\n\n**頻率：** 每1-3天一次\n\n**優點：**\n✅ 充分氧化\n✅ 強力萃取\n✅ 軟化單寧\n✅ 去除沉澱\n\n**缺點：**\n❌ 勞動強度極高\n❌ 設備需求大（需額外儲罐）\n❌ 氧化風險高\n\n**波爾多應用：** 左岸頂級酒莊用於卡本內蘇維濃，追求結構與陳年潛力。` },
      { subtitle: '4. 旋轉罐（Rotary Fermenters）', content: `**操作方式：**\n整個發酵罐可旋轉，使果皮與酒液持續混合。\n\n**頻率：** 每日旋轉數次，每次數分鐘\n\n**優點：**\n✅ 極高萃取效率\n✅ 自動化程度高\n✅ 縮短浸漬時間\n✅ 節省人力\n\n**缺點：**\n❌ 設備成本極高（€150,000-300,000/罐）\n❌ 可能過度萃取\n❌ 失去傳統工藝感\n❌ 維護複雜\n\n**波爾多應用：** 少數現代化酒莊採用（如Château Cheval Blanc的酒窖2011）。主要用於小批次實驗性釀造。` }
    ]
  },
  {
    type: 'content',
    title: '浸漬技術比較矩陣',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.78rem;color:#666;margin-bottom:10px;text-align:center;">不同浸漬技術的特性與適用場景——波爾多釀酒師依年份與目標靈活選擇</div>
        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;font-size:0.74rem;">
            <thead>
              <tr style="background:linear-gradient(135deg,#7B1FA2,#9C27B0);">
                <th style="color:#fff;padding:7px 10px;text-align:left;font-weight:700;border-right:1px solid rgba(255,255,255,0.2);">技術</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">萃取強度</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">氧化程度</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">勞動強度</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">成本</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">適用品種</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;">使用率</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background:#F3E5F5;">
                <td style="padding:7px 10px;font-weight:700;color:#7B1FA2;">淋皮 Remontage</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">中等 ⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">中等 ⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">低 ⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">€€</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">全品種</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#7B1FA2;color:#fff;border-radius:10px;padding:2px 8px;font-size:0.72rem;">90%</span></td>
              </tr>
              <tr style="background:#fff;">
                <td style="padding:7px 10px;font-weight:700;color:#C62828;">壓帽 Pigeage</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">高 ⭐⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">低 ⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">高 ⭐⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">€–€€</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">梅洛・卡弗</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#C62828;color:#fff;border-radius:10px;padding:2px 8px;font-size:0.72rem;">30%</span></td>
              </tr>
              <tr style="background:#F3E5F5;">
                <td style="padding:7px 10px;font-weight:700;color:#1565C0;">循環 Délestage</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">很高 ⭐⭐⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">高 ⭐⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">很高 ⭐⭐⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">€€</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">卡本內蘇維濃</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#1565C0;color:#fff;border-radius:10px;padding:2px 8px;font-size:0.72rem;">20%</span></td>
              </tr>
              <tr style="background:#fff;">
                <td style="padding:7px 10px;font-weight:700;color:#37474F;">旋轉罐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">極高 ⭐×6</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">低 ⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">很低 ⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">€€€€€</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">實驗批次</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#37474F;color:#fff;border-radius:10px;padding:2px 8px;font-size:0.72rem;">5%</span></td>
              </tr>
              <tr style="background:#F3E5F5;">
                <td style="padding:7px 10px;font-weight:700;color:#2E7D32;">淋皮+壓帽組合</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">高 ⭐⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">中等 ⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">中高 ⭐⭐⭐</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">€€</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">精品酒款</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#2E7D32;color:#fff;border-radius:10px;padding:2px 8px;font-size:0.72rem;">40%</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    type: 'content',
    title: '案例：Château Margaux 的浸漬管理',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#B71C1C,#C62828);border-radius:8px;padding:8px 14px;margin-bottom:10px;">
          <span style="color:rgba(255,255,255,0.75);font-size:0.72rem;">核心挑戰 ｜ 瑪歌</span>
          <div style="color:#fff;font-size:0.78rem;font-weight:600;margin-top:2px;">如何在卡本內蘇維濃的強勁結構與瑪歌村莊特有的優雅柔順之間找到平衡？</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#C62828,#E53935);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">🍷 四段式浸漬策略</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.85;">
              <div style="margin-bottom:4px;"><strong style="color:#C62828;">①冷浸漬 4–5天</strong> 10–12°C｜萃取花青素與果香</div>
              <div style="margin-bottom:4px;"><strong style="color:#E65100;">②酒精發酵 8–10天</strong> 30–31°C｜淋皮×3 + 壓帽×1/日</div>
              <div style="margin-bottom:4px;"><strong style="color:#F57F17;">③發酵後浸漬 8–12天</strong> 降低淋皮至1–2次｜每日品嚐評估</div>
              <div style="margin-bottom:6px;"><strong style="color:#2E7D32;">④分批次管理</strong> 40–50個發酵批次｜地塊/樹齡分開</div>
              <div style="background:#FFEBEE;border-radius:5px;padding:4px 9px;font-size:0.7rem;color:#B71C1C;">總浸漬時間：20–27天（視年份調整）</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">📊 成果與技術指標</div>
            <div style="padding:9px 12px 11px;">
              <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:5px;margin-bottom:7px;">
                <div style="background:#E8F5E9;border-radius:5px;padding:5px 7px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">顏色強度 (OD)</div>
                  <div style="font-weight:700;color:#1B5E20;font-size:0.8rem;">10–14</div>
                </div>
                <div style="background:#FFF3E0;border-radius:5px;padding:5px 7px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">總酚類 (mg/L)</div>
                  <div style="font-weight:700;color:#E65100;font-size:0.8rem;">2800–3200</div>
                </div>
                <div style="background:#F3E5F5;border-radius:5px;padding:5px 7px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">單寧 (g/L)</div>
                  <div style="font-weight:700;color:#6A1B9A;font-size:0.8rem;">3.0–3.5</div>
                </div>
                <div style="background:#E3F2FD;border-radius:5px;padding:5px 7px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">pH</div>
                  <div style="font-weight:700;color:#1565C0;font-size:0.8rem;">3.6–3.7</div>
                </div>
              </div>
              <div style="font-size:0.73rem;color:#333;line-height:1.75;">
                <div style="margin-bottom:3px;">· 深寶石紅，邊緣帶紫羅蘭反光</div>
                <div style="margin-bottom:3px;">· 單寧如絲綢，強勁不粗糙</div>
                <div>· 保留瑪歌花香＋30–50年陳年結構</div>
              </div>
            </div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">
          <div style="background:#FFEBEE;border-radius:7px;padding:7px 10px;font-size:0.71rem;color:#B71C1C;line-height:1.65;"><strong>無萬能配方</strong><br><span style="color:#555;">必須根據年份、地塊、品種靈活調整浸漬策略</span></div>
          <div style="background:#FFF3E0;border-radius:7px;padding:7px 10px;font-size:0.71rem;color:#E65100;line-height:1.65;"><strong>溫控精度至關重要</strong><br><span style="color:#555;">±1°C 控制對萃取品質有決定性影響</span></div>
          <div style="background:#E3F2FD;border-radius:7px;padding:7px 10px;font-size:0.71rem;color:#1565C0;line-height:1.65;"><strong>感官 > 數據</strong><br><span style="color:#555;">品嚐評估比實驗室數據更能指導釀酒決策</span></div>
          <div style="background:#E8F5E9;border-radius:7px;padding:7px 10px;font-size:0.71rem;color:#1B5E20;line-height:1.65;"><strong>傳統與現代互補</strong><br><span style="color:#555;">壓帽傳統技術與現代溫控精密配合，最佳化萃取</span></div>
        </div>
      </div>
    `
  },
  {
    type: 'chapter-divider',
    title: '第二章',
    subtitle: '白酒釀造工藝',
    description: '波爾多干白與甜白的釀造藝術',
    background: 'linear-gradient(135deg, #F4E8C1 0%, #E8D5B7 50%, #D4AF37 100%)',
    icon: '🥂',
    navLabel: '白酒工藝'
  },
  {
    type: 'content',
    title: '白酒釀造：與紅酒的本質差異',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.78rem;color:#666;margin-bottom:10px;text-align:center;">核心哲學：<strong style="color:#1B5E20;">保護優於萃取</strong>——從清爽干白到甜白，各有獨特釀造邏輯</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:12px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🛡️</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">氧化保護</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.74rem;color:#333;line-height:1.75;">
              <div style="margin-bottom:3px;">· 酚類含量低，極易氧化褐變</div>
              <div style="margin-bottom:3px;">· 全程惰性氣體（N₂/CO₂）保護</div>
              <div style="margin-bottom:3px;">· SO₂ 50–80 mg/L（高於紅酒）</div>
              <div>· 溫度控制更嚴格</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1E88E5);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🌡️</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">低溫發酵</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.74rem;color:#333;line-height:1.75;">
              <div style="margin-bottom:3px;">· <strong>溫度：</strong>16–20°C（紅酒 28–32°C）</div>
              <div style="margin-bottom:3px;">· <strong>時間：</strong>2–4 週（紅酒 7–14 天）</div>
              <div>· <strong>目的：</strong>保留揮發性果香</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#6A1B9A,#8E24AA);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🍇</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">壓榨優先</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.74rem;color:#333;line-height:1.75;">
              <div style="margin-bottom:3px;">· 先壓榨後發酵（與紅酒相反）</div>
              <div style="margin-bottom:3px;">· 壓榨強度決定酒款風格</div>
              <div>· 果汁澄清度影響最終品質</div>
            </div>
          </div>
        </div>
        <div style="font-size:0.78rem;font-weight:700;color:#333;margin-bottom:8px;">波爾多白酒三大類型</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#2E7D32,#43A047);padding:9px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">🥗 清爽型干白</div>
              <div style="color:rgba(255,255,255,0.85);font-size:0.7rem;">Entre-Deux-Mers 風格</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.73rem;color:#333;line-height:1.75;">
              <div style="margin-bottom:2px;"><strong>目標：</strong>清新、果香、易飲</div>
              <div style="margin-bottom:2px;">· 不鏽鋼罐 15–18°C 低溫發酵</div>
              <div style="margin-bottom:2px;">· 阻止 MLF・早裝瓶（12–18月）</div>
              <div style="margin-bottom:4px;">· 使用芳香酵母</div>
              <div style="background:#E8F5E9;border-radius:4px;padding:3px 8px;font-size:0.7rem;color:#2E7D32;">€5–15/瓶</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F4511E);padding:9px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">🍾 複雜型干白</div>
              <div style="color:rgba(255,255,255,0.85);font-size:0.7rem;">Pessac-Léognan 風格</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.73rem;color:#333;line-height:1.75;">
              <div style="margin-bottom:2px;"><strong>目標：</strong>複雜、結構、陳年</div>
              <div style="margin-bottom:2px;">· 橡木桶發酵（新桶 20–50%）</div>
              <div style="margin-bottom:2px;">· 桶內 MLF・酒泥陳釀 6–12 月</div>
              <div style="margin-bottom:4px;">· 延遲裝瓶（18–24 月）</div>
              <div style="background:#FFF3E0;border-radius:4px;padding:3px 8px;font-size:0.7rem;color:#E65100;">€25–200+/瓶</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#F57F17,#FF8F00);padding:9px 12px;">
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">🍯 貴腐甜白</div>
              <div style="color:rgba(255,255,255,0.85);font-size:0.7rem;">Sauternes 風格</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.73rem;color:#333;line-height:1.75;">
              <div style="margin-bottom:2px;"><strong>目標：</strong>甜美、複雜、超長陳年</div>
              <div style="margin-bottom:2px;">· 貴腐菌感染・分批採收 6–8 次</div>
              <div style="margin-bottom:2px;">· 橡木桶發酵（新桶 50–100%）</div>
              <div style="margin-bottom:4px;">· 殘糖 120–150 g/L</div>
              <div style="background:#FFF9C4;border-radius:4px;padding:3px 8px;font-size:0.7rem;color:#F57F17;">€30–500+/瓶 (375ml)</div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    type: 'winemaking-process',
    title: '白酒釀造：詳細步驟',
    steps: [
      { step: '採收', image: '/images/L3-5/01白酒釀造：採收.png', timing: '8月底-9月初（干白）；10-11月（甜白）', keyActions: ['夜間或清晨採收（避免高溫）','迅速運至酒窖','立即冷卻至10-15°C','甜白需分批採收貴腐葡萄'], scientificPrinciples: '白葡萄易氧化，低溫可減緩酶活性與微生物活動。貴腐菌感染不均勻，需多次採收。', bordeauxPractice: '頂級Pessac-Léognan酒莊通常在清晨5-6點開始採收，中午前完成。Sauternes可能進行6-8次分批採收。', qualityImpact: '溫度管理決定果香保留', costImplication: '夜間採收增加人力成本30-50%' },
      { step: '分選與破皮', image: '/images/L3-5/02白酒釀造：分選與破皮.png', timing: '採收當天', keyActions: ['去除葉子、枝條、損壞葡萄','輕柔破皮（不壓榨果籽）','SO₂添加（50-80mg/L）','可選：低溫浸皮2-24小時'], scientificPrinciples: 'SO₂抑制氧化酶（多酚氧化酶）與雜菌。低溫浸皮可增加香氣前驅物萃取，但需防止氧化。', bordeauxPractice: '低溫浸皮在Pessac-Léognan較常見（12-24小時，8-10°C），Entre-Deux-Mers通常跳過此步驟。', qualityImpact: '影響香氣複雜度與酚類含量', costImplication: '低溫浸皮需冷卻設備' },
      { step: '壓榨', image: '/images/L3-5/03白酒釀造：壓榨.png', timing: '破皮後立即或浸皮後', keyActions: ['輕柔壓榨（氣囊式壓榨機）','分段收集：自流汁、初壓汁、壓榨汁','壓力：<1 bar（頂級酒莊）','收汁率：60-65L/100kg葡萄'], scientificPrinciples: '輕柔壓榨減少酚類、苦味物質萃取。過度壓榨會釋放果籽油脂與澀味。', bordeauxPractice: '頂級酒莊僅使用前50-60%的汁液（Cuvée），其餘用於副牌或散裝酒。', qualityImpact: '決定酒款純淨度與細膩度', costImplication: '高淘汰率大幅降低產量與收益' },
      { step: '果汁澄清', image: '/images/L3-5/04白酒釀造：果汁澄清.png', timing: '壓榨後12-48小時', keyActions: ['靜置澄清（Débourbage）','溫度：8-12°C','時間：12-24小時（清爽型）；48-72小時（複雜型）','可選：添加澄清劑（皂土、果膠酶）'], scientificPrinciples: '重力沉降去除果皮碎片、果膠、蛋白質。澄清度影響發酵速度與最終香氣。過度澄清會失去香氣前驅物。', bordeauxPractice: '清爽型白酒追求高澄清度（<50 NTU）；複雜型保留更多懸浮物（100-150 NTU）以增加質感與複雜度。', qualityImpact: '平衡純淨度與複雜度', costImplication: '延長澄清時間佔用儲罐' },
      { step: '酒精發酵', image: '/images/L3-5/05白酒釀造：酒精發酵.png', timing: '2-4週', keyActions: ['溫度：16-20°C（不鏽鋼）；18-22°C（橡木桶）','酵母接種（通常使用商業酵母）','營養鹽添加（避免硫化氫產生）','監控：比重、溫度、殘糖'], scientificPrinciples: '低溫發酵保留揮發性香氣（酯類、萜烯類）。發酵產生的熱量需持續移除。橡木桶發酵與酒泥接觸更密切。', bordeauxPractice: '不鏽鋼罐有夾層水冷系統，溫控精度±0.5°C。橡木桶發酵的Pessac-Léognan會每週品嚐監控。', qualityImpact: '核心階段，決定香氣輪廓', costImplication: '橡木桶發酵成本比不鏽鋼高3-5倍' },
      { step: '蘋果酸乳酸發酵（可選）', image: '/images/L3-5/06白酒釀造：蘋果酸乳酸發酵（可選）.png', timing: '1-3個月', keyActions: ['複雜型白酒：100%完成MLF','清爽型白酒：阻止MLF（SO₂、低溫）','部分MLF：某些酒莊採用折衷方案（50-70%）'], scientificPrinciples: 'MLF降低酸度、增加口感圓潤度、帶來奶油香氣。但也會降低清新感與果香。', bordeauxPractice: 'Pessac-Léognan頂級白酒100%在橡木桶中完成MLF。Entre-Deux-Mers通常阻止MLF保持清新。', qualityImpact: '決定酸度結構與口感質地', costImplication: '溫控與時間成本' },
      { step: '酒泥陳釀（Sur lie）', image: '/images/L3-5/07白酒釀造：酒泥陳釀（Sur lie）.png', timing: '3-12個月', keyActions: ['保留細酒泥（死亡酵母細胞）','酒泥攪拌（Bâtonnage）：每週1-2次','溫度：12-16°C','僅用於複雜型白酒'], scientificPrinciples: '酵母自溶釋放甘露糖蛋白、氨基酸、核苷酸，增加酒體、圓潤度、複雜度。攪拌促進酒泥與酒液接觸。', bordeauxPractice: 'Pessac-Léognan頂級酒莊酒泥陳釀9-12月，前3月每週攪拌2次，之後減少頻率。', qualityImpact: '顯著增加質感、複雜度、陳年潛力', costImplication: '勞動力與時間成本，延遲現金流' },
      { step: '調配與裝瓶', image: '/images/L3-5/08白酒釀造： 調配與裝瓶.png', timing: '釀造後12-24個月', keyActions: ['不同批次、品種調配','澄清、冷穩定','過濾（板框或薄膜過濾）','SO₂調整至30-50mg/L','裝瓶'], scientificPrinciples: '冷穩定（-4°C，7天）沉澱酒石酸鹽，防止瓶中結晶。過濾去除微生物與懸浮物確保穩定性。', bordeauxPractice: '頂級酒莊偏向輕柔過濾甚至不過濾，保留更多質感。清爽型白酒需嚴格過濾確保穩定。', qualityImpact: '影響清澈度、穩定性、質感', costImplication: '過濾設備投資，產量損失2-5%' }
    ]
  },
  {
    type: 'content',
    title: '案例：Château Smith Haut Lafitte 白酒釀造',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#00695C,#00897B);border-radius:8px;padding:8px 14px;margin-bottom:10px;">
          <span style="color:rgba(255,255,255,0.75);font-size:0.72rem;">核心挑戰 ｜ Pessac-Léognan</span>
          <div style="color:#fff;font-size:0.78rem;font-weight:600;margin-top:2px;">如何將白蘇維濃與灰蘇維濃結合，創造出既清新又複雜、既現代又經典的波爾多白酒？</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">🥂 八步驟釀造流程</div>
            <div style="padding:9px 12px 11px;font-size:0.72rem;color:#333;line-height:1.8;">
              <div style="margin-bottom:3px;"><strong style="color:#00695C;">①</strong> 清晨採收 + 三次分選（淘汰率 20–25%）</div>
              <div style="margin-bottom:3px;"><strong style="color:#00796B;">②</strong> 低溫浸皮 12h ｜ 8–10°C 惰性氣體保護</div>
              <div style="margin-bottom:3px;"><strong style="color:#00897B;">③</strong> 輕柔壓榨 &lt;0.8 bar｜僅前 60% 汁液</div>
              <div style="margin-bottom:3px;"><strong style="color:#009688;">④</strong> 靜置澄清 48h ｜ 保留 100–120 NTU</div>
              <div style="margin-bottom:3px;"><strong style="color:#E65100;">⑤</strong> 橡木桶發酵（50% 新桶）18–20°C 天然酵母</div>
              <div style="margin-bottom:3px;"><strong style="color:#F57F17;">⑥</strong> 桶內 MLF 100%（不接種，自然啟動）</div>
              <div style="margin-bottom:3px;"><strong style="color:#6A1B9A;">⑦</strong> Sur lie 10月 ｜ 前 3 月每週攪拌 2 次</div>
              <div><strong style="color:#37474F;">⑧</strong> 輕柔過濾 → 裝瓶（釀造後 18 個月）</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">🏆 品質與市場表現</div>
            <div style="padding:9px 12px 11px;">
              <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:5px;margin-bottom:7px;">
                <div style="background:#E0F2F1;border-radius:5px;padding:4px 7px;text-align:center;">
                  <div style="font-size:0.68rem;color:#555;">酒精度</div>
                  <div style="font-weight:700;color:#00695C;font-size:0.8rem;">13.5%</div>
                </div>
                <div style="background:#E8F5E9;border-radius:5px;padding:4px 7px;text-align:center;">
                  <div style="font-size:0.68rem;color:#555;">總酸 (g/L)</div>
                  <div style="font-weight:700;color:#1B5E20;font-size:0.8rem;">3.5</div>
                </div>
                <div style="background:#FFF3E0;border-radius:5px;padding:4px 7px;text-align:center;">
                  <div style="font-size:0.68rem;color:#555;">評分</div>
                  <div style="font-weight:700;color:#E65100;font-size:0.8rem;">91–94 pts</div>
                </div>
                <div style="background:#E3F2FD;border-radius:5px;padding:4px 7px;text-align:center;">
                  <div style="font-size:0.68rem;color:#555;">售價</div>
                  <div style="font-weight:700;color:#1565C0;font-size:0.8rem;">€50–70</div>
                </div>
              </div>
              <div style="font-size:0.72rem;color:#333;line-height:1.75;">
                <div style="margin-bottom:3px;">· 淺金黃帶綠反光，燧石礦物感</div>
                <div style="margin-bottom:3px;">· 西柚・百香果・椴花・烤杏仁</div>
                <div style="margin-bottom:3px;">· 活潑酸度 + 飽滿酒體 + 絲滑質地</div>
                <div>· 陳年潛力 15–25 年</div>
              </div>
            </div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;">
          <div style="background:#E0F2F1;border-radius:6px;padding:6px 8px;font-size:0.69rem;color:#00695C;line-height:1.55;text-align:center;"><strong>品種選擇</strong><br><span style="color:#555;">Sémillon 增加酒體與陳年</span></div>
          <div style="background:#FFF3E0;border-radius:6px;padding:6px 8px;font-size:0.69rem;color:#E65100;line-height:1.55;text-align:center;"><strong>桶內發酵</strong><br><span style="color:#555;">質感整合優於桶陳釀</span></div>
          <div style="background:#F3E5F5;border-radius:6px;padding:6px 8px;font-size:0.69rem;color:#6A1B9A;line-height:1.55;text-align:center;"><strong>酒泥陳釀</strong><br><span style="color:#555;">複雜度與質感關鍵</span></div>
          <div style="background:#E8F5E9;border-radius:6px;padding:6px 8px;font-size:0.69rem;color:#1B5E20;line-height:1.55;text-align:center;"><strong>50% 新桶</strong><br><span style="color:#555;">保留品種風土特色</span></div>
          <div style="background:#E3F2FD;border-radius:6px;padding:6px 8px;font-size:0.69rem;color:#1565C0;line-height:1.55;text-align:center;"><strong>18月週期</strong><br><span style="color:#555;">各元素和諧整合</span></div>
        </div>
      </div>
    `
  },
  {
    type: 'interactive-quiz',
    title: '知識檢測：紅酒與白酒釀造',
    questions: [
      { question: '為什麼紅酒發酵溫度（28-32°C）顯著高於白酒（16-20°C）？', options: ['A. 紅葡萄含糖量更高，產生更多發酵熱','B. 高溫促進顏色與單寧的萃取，這對紅酒至關重要','C. 紅酒酵母更耐熱','D. 為了加快發酵速度節省時間'], correct: 1, explanation: '紅酒需要從果皮萃取顏色、單寧、風味化合物，高溫（28-32°C）能顯著提升萃取效率。白酒不需要萃取，反而要保護果香，因此使用低溫發酵（16-20°C）減少揮發性香氣損失。溫度選擇是基於釀造目標，而非葡萄或酵母特性。' },
      { question: '波爾多列級莊在紅酒釀造中通常進行多少次"淋皮"（Remontage）操作？', options: ['A. 每日1次','B. 每日2-4次','C. 每週2-3次','D. 僅在發酵開始和結束時各1次'], correct: 1, explanation: '每日2-4次淋皮是波爾多列級莊的標準操作。淋皮的目的包括：均勻萃取、氧氣接觸、溫度均勻化、防止果皮帽乾燥。頻率根據發酵階段調整：旺盛發酵期更頻繁（3-4次），發酵後浸漬期減少（1-2次）。' },
      { question: 'Château Margaux 為何在某些年份保留5-10%帶梗葡萄進行發酵？', options: ['A. 節省除梗設備的維護成本','B. 增加單寧含量以補償年份不足','C. 增加複雜度與清新感，尤其在溫暖年份','D. 這是瑪歌產區的傳統做法，必須遵循'], correct: 2, explanation: '保留部分帶梗發酵（5-15%）是近年興起的技術，目的是增加複雜度、清新感、香料氣息，尤其在溫暖年份可提升清爽度。但這是選擇性技術，非傳統規定。過多帶梗（>20%）會帶來青澀、苦味。Château Margaux 根據年份特性靈活調整，體現現代釀酒的精準控制。' },
      { question: '為什麼頂級Pessac-Léognan白酒選擇在橡木桶中發酵，而非發酵後才入桶？', options: ['A. 橡木桶發酵可以提供更好的溫度控制','B. 節省一個工序的時間與勞動力','C. 橡木桶發酵使橡木風味與酒液更好整合，質感更細膩','D. 傳統做法，沒有技術原因'], correct: 2, explanation: '橡木桶發酵（而非發酵後才入桶）的優勢：1)橡木風味與酒液在發酵過程中同步發展，整合度更高；2)發酵產生的酵母細胞與橡木成分互動，質感更細膩；3)桶內MLF與酒泥接觸更緊密。但橡木桶發酵成本高、溫控難、風險大，僅用於頂級酒款。不鏽鋼罐發酵後入桶的品質也可以很高。' },
      { question: '關於白酒的"酒泥陳釀"（Sur lie），以下哪項描述最準確？', options: ['A. 酒泥是釀造過程的廢棄物，應盡快去除','B. 酒泥陳釀僅增加奶油香氣，對質感無影響','C. 酒泥陳釀通過酵母自溶釋放化合物，增加酒體、圓潤度、複雜度','D. 所有白酒都應進行酒泥陳釀以提升品質'], correct: 2, explanation: '酒泥陳釀（Sur lie）是釀造複雜型白酒的關鍵技術。酵母細胞死亡後自溶釋放甘露糖蛋白（增加酒體、圓潤度）、氨基酸（鮮味）、核苷酸（複雜度）。酒泥攪拌（Bâtonnage）促進接觸。但並非所有白酒都適合：清爽型白酒（Entre-Deux-Mers）追求純淨果香，不進行酒泥陳釀。這是風格選擇，非品質高低。' },
      { question: '波爾多甜白Sauternes為何需要6-8次分批採收？', options: ['A. 分批採收可以提高葡萄園工人的就業率','B. 貴腐菌感染不均勻，需多次選擇性採收達到最佳感染程度的葡萄','C. 防止野生動物一次性吃光葡萄','D. 法律規定甜白必須分批採收'], correct: 1, explanation: 'Sauternes的核心是貴腐菌（Botrytis cinerea）感染。貴腐菌需要特定氣候條件（清晨霧氣+午後陽光），感染不均勻。採收工需在同一地塊多次經過（6-8次，有時更多），每次僅採摘達到理想感染程度（Pourri plein）的葡萄串甚至單顆葡萄。這極大增加成本與風險，但為獲得集中度、複雜度、甜度所必需。' }
    ]
  },
  {
    type: 'content',
    title: '釀造工藝：藝術與科學的交融',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.76rem;color:#666;margin-bottom:11px;text-align:center;">每一個技術決策都建立在科學理解之上，但最終仍需釀酒師的經驗與直覺來引導</div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:11px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:9px 14px;">
              <div style="color:#fff;font-weight:700;font-size:0.85rem;">🍷 紅酒釀造核心：萃取管理</div>
            </div>
            <div style="padding:9px 14px 11px;font-size:0.74rem;color:#333;line-height:1.85;">
              <div style="margin-bottom:3px;">· 冷浸漬 → 酒精發酵 → 延長浸漬三階段策略</div>
              <div style="margin-bottom:3px;">· 淋皮、壓帽、循環等技術組合</div>
              <div style="margin-bottom:3px;">· 溫度控制對萃取強度的決定性影響</div>
              <div>· MLF 對口感柔順度的貢獻</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#F57F17,#FF8F00);padding:9px 14px;">
              <div style="color:#fff;font-weight:700;font-size:0.85rem;">🥂 白酒釀造核心：保護與發展</div>
            </div>
            <div style="padding:9px 14px 11px;font-size:0.74rem;color:#333;line-height:1.85;">
              <div style="margin-bottom:3px;">· 氧化保護貫穿整個釀造流程</div>
              <div style="margin-bottom:3px;">· 低溫發酵（16–20°C）保留揮發果香</div>
              <div style="margin-bottom:3px;">· 橡木桶 vs 不鏽鋼罐的風格差異</div>
              <div>· Sur lie 酒泥陳釀對複雜度的關鍵作用</div>
            </div>
          </div>
        </div>
        <div style="font-size:0.78rem;font-weight:700;color:#333;margin-bottom:8px;">波爾多釀造哲學四原則</div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:9px;margin-bottom:10px;">
          <div style="background:#E8F5E9;border-radius:8px;padding:9px 10px;">
            <div style="font-size:1rem;margin-bottom:4px;">🌿</div>
            <div style="font-size:0.76rem;font-weight:700;color:#1B5E20;margin-bottom:3px;">尊重原料</div>
            <div style="font-size:0.71rem;color:#555;line-height:1.65;">最小干預，讓葡萄自己表達風土</div>
          </div>
          <div style="background:#E3F2FD;border-radius:8px;padding:9px 10px;">
            <div style="font-size:1rem;margin-bottom:4px;">🎯</div>
            <div style="font-size:0.76rem;font-weight:700;color:#1565C0;margin-bottom:3px;">精確控制</div>
            <div style="font-size:0.71rem;color:#555;line-height:1.65;">現代技術提供前所未有的精準能力</div>
          </div>
          <div style="background:#FFF3E0;border-radius:8px;padding:9px 10px;">
            <div style="font-size:1rem;margin-bottom:4px;">⚖️</div>
            <div style="font-size:0.76rem;font-weight:700;color:#E65100;margin-bottom:3px;">平衡傳統與創新</div>
            <div style="font-size:0.71rem;color:#555;line-height:1.65;">不盲目追新，也不固守舊法</div>
          </div>
          <div style="background:#F3E5F5;border-radius:8px;padding:9px 10px;">
            <div style="font-size:1rem;margin-bottom:4px;">🗺️</div>
            <div style="font-size:0.76rem;font-weight:700;color:#6A1B9A;margin-bottom:3px;">風土表達</div>
            <div style="font-size:0.71rem;color:#555;line-height:1.65;">技術服務風土，而非掩蓋風土</div>
          </div>
        </div>
        <div style="background:linear-gradient(135deg,#37474F,#455A64);border-radius:8px;padding:9px 14px;">
          <div style="color:#fff;font-size:0.76rem;font-weight:700;margin-bottom:5px;">▶ Part 2 即將探討</div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;">
            <div style="color:rgba(255,255,255,0.9);font-size:0.71rem;text-align:center;">🍯<br>Sauternes<br>貴腐甜白</div>
            <div style="color:rgba(255,255,255,0.9);font-size:0.71rem;text-align:center;">🪵<br>橡木桶陳釀<br>科學原理</div>
            <div style="color:rgba(255,255,255,0.9);font-size:0.71rem;text-align:center;">🔬<br>微生物學<br>應用</div>
            <div style="color:rgba(255,255,255,0.9);font-size:0.71rem;text-align:center;">🚀<br>現代釀酒<br>技術創新</div>
          </div>
        </div>
      </div>
    `
  },
  // 補充：傳統哲學與手工工藝（源自 L3-7 的獨特色塊，已合併至 L3-5）
  {
    type: 'chapter-divider',
    title: '傳統釀造哲學',
    subtitle: '最小干預與手工工藝',
    description: '波爾多傳統釀造理念的精髓',
    background: 'linear-gradient(135deg, #8B7355 0%, #A0826D 100%)',
    icon: '🏺',
    navLabel: '傳統工藝'
  },
  {
    type: 'intro',
    title: '傳統釀造哲學導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          在現代科技日新月異的今天，波爾多頂級酒莊仍然堅守著傳統釀造哲學的核心理念：最小干預、品質優先、技法傳承。這些理念並非保守，而是經過數百年驗證的智慧結晶。
        </p>

        <h3 class="section-title">本章探討內容</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🌿 最小干預理念</h4>
            <p>保留葡萄與風土的本真表達，避免過度人工干預造成風格同質化</p>
          </div>

          <div class="point-item">
            <h4>✋ 手工操作價值</h4>
            <p>理解精品酒莊為何堅持手工作業，人工挑選與細膩操作的重要性</p>
          </div>

          <div class="point-item">
            <h4>🏺 傳統處理技術</h4>
            <p>學習自然沉澱、人工換桶、蛋白澄清等經過時間驗證的方法</p>
          </div>

          <div class="point-item">
            <h4>⚖️ 傳統與創新</h4>
            <p>探討如何在尊重傳統與擁抱科技之間找到最佳平衡點</p>
          </div>

          <div class="point-item">
            <h4>⏳ 時間的價值</h4>
            <p>認識耐心與等待在釀造中的重要性，理解為何不能急於求成</p>
          </div>
        </div>

        <p class="intro-conclusion">
          理解這些傳統哲學，將幫助您認識波爾多為何能夠數百年如一日地維持卓越品質，以及這些理念如何在現代釀酒中繼續發揮作用。
        </p>
      </div>
    `,
    icon: '🏺'
  },
  {
    type: 'content',
    title: '傳統釀造哲學三原則',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;">
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:12px 14px;">
              <div style="color:#fff;font-size:1.5rem;margin-bottom:4px;">🌿</div>
              <div style="color:#fff;font-weight:700;font-size:0.90rem;">最小干預</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.73rem;">Minimal Intervention</div>
            </div>
            <div style="padding:11px 14px 13px;">
              <div style="font-size:0.79rem;color:#333;line-height:1.85;margin-bottom:8px;">盡量減少人工干預，保留葡萄與風土本真表達。</div>
              <div style="background:#E8F5E9;border-radius:5px;padding:5px 9px;font-size:0.74rem;color:#1B5E20;line-height:1.65;">避免過度處理造成香氣退化與風格同質化。</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#7B1FA2,#9C27B0);padding:12px 14px;">
              <div style="color:#fff;font-size:1.5rem;margin-bottom:4px;">💎</div>
              <div style="color:#fff;font-weight:700;font-size:0.90rem;">品質優先</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.73rem;">Quality First</div>
            </div>
            <div style="padding:11px 14px 13px;">
              <div style="font-size:0.79rem;color:#333;line-height:1.85;margin-bottom:8px;">寧缺勿濫，嚴格挑選每一顆葡萄，維持高品質標準。</div>
              <div style="background:#F3E5F5;border-radius:5px;padding:5px 9px;font-size:0.74rem;color:#7B1FA2;line-height:1.65;">淘汰率可達10-30%，品質是旗艦酒款唯一標準。</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4E342E,#6D4C41);padding:12px 14px;">
              <div style="color:#fff;font-size:1.5rem;margin-bottom:4px;">⏳</div>
              <div style="color:#fff;font-weight:700;font-size:0.90rem;">技法傳承</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.73rem;">Technique Heritage</div>
            </div>
            <div style="padding:11px 14px 13px;">
              <div style="font-size:0.79rem;color:#333;line-height:1.85;margin-bottom:8px;">遵循經驗驗證的方法，審慎面對改變，讓時間完成整合。</div>
              <div style="background:#EFEBE9;border-radius:5px;padding:5px 9px;font-size:0.74rem;color:#4E342E;line-height:1.65;">技法是數百年智慧結晶，不可輕易捨棄。</div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    type: 'content',
    title: '傳統澄清與處理方法',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:12px;">
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#01579B,#0288D1);padding:9px 13px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">⏬ 自然沉澱（重力澄清）</div>
            </div>
            <div style="padding:9px 13px 11px;font-size:0.78rem;color:#444;line-height:1.8;">利用重力讓雜質自然下沉，需耐心靜置 <strong>24–48 小時</strong>。無需化學助劑，保留酒款天然特質。</div>
          </div>
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#006064,#00838F);padding:9px 13px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">🔄 人工換桶（Racking）</div>
            </div>
            <div style="padding:9px 13px 11px;font-size:0.78rem;color:#444;line-height:1.8;">小心轉移清澈酒液至新容器，<strong>避免攪動底部酒渣</strong>。通常每3-4個月進行，促進微氧化與純淨化。</div>
          </div>
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4A148C,#6A1B9A);padding:9px 13px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">🥚 蛋白澄清（蛋白/魚膠）</div>
            </div>
            <div style="padding:9px 13px 11px;font-size:0.78rem;color:#444;line-height:1.8;">使用天然澄清劑去除粗糙單寧與懸浮物，<strong>傳統且有效</strong>。列級莊通常使用2-6個蛋白/桶。</div>
          </div>
          <div style="background:#fff;border-radius:11px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#388E3C);padding:9px 13px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">🌿 保留果梗（可選）</div>
            </div>
            <div style="padding:9px 13px 11px;font-size:0.78rem;color:#444;line-height:1.8;">於成熟年份保留 <strong>5–15% 果梗</strong>以增加結構與清新感，但需確認成熟度以避免青澀。</div>
          </div>
        </div>
        <div style="background:linear-gradient(135deg,#263238,#37474F);border-radius:8px;padding:9px 14px;">
          <div style="color:#fff;font-size:0.78rem;line-height:1.7;">📌 傳統方法著重穩定與整合，速度較慢但風格更內斂 ‧ 現代技術可作為輔助，核心仍是對原料與時間的尊重</div>
        </div>
      </div>
    `
  },
  // ==== 第四章：甜酒釀造 ====
  {
    type: 'content',
    title: '液體黃金的誕生',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.76rem;color:#666;margin-bottom:10px;text-align:center;">Sauternes 出產世界最複雜、最昂貴、陳年潛力最長的甜白——依賴一種特殊真菌與釀酒師數百年智慧的結晶</div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#5D4037,#6D4C41);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.1rem;">🍄</span>
              <div style="color:#fff;font-weight:700;font-size:0.83rem;">貴腐菌的奇蹟</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.74rem;color:#333;line-height:1.8;">
              在特定條件下，<em>Botrytis cinerea</em> 穿透葡萄皮但不破壞果實，促進水分蒸發，<strong>濃縮糖分、酸度、風味化合物</strong>，並產生獨特香氣分子。同一菌種在缺乏乾燥條件時則化身破壞性灰霉病。
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.1rem;">🌫️</span>
              <div style="color:#fff;font-weight:700;font-size:0.83rem;">獨特的微氣候</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.74rem;color:#333;line-height:1.8;">
              Garonne 河與 Ciron 河交匯處——冰冷 Ciron 河水在秋季清晨產生<strong>濃霧</strong>（贈予貴腐菌濕度），午後陽光驅散霧氣（防止灰霉爆發）。這種「清晨濕 → 午後乾」的微氣候<strong>全球罕見</strong>。
            </div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F4511E);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.1rem;">⏳</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">漫長高風險採收</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.73rem;color:#333;line-height:1.8;">
              <div style="margin-bottom:2px;">· 採收期 6–10 週</div>
              <div style="margin-bottom:2px;">· 分批採收 6–8 次（有時 10+）</div>
              <div style="margin-bottom:2px;">· 每次僅採最佳貴腐程度葡萄</div>
              <div>· 產量極低：每株藤 ≈ 1 杯酒</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#F57F17,#FF8F00);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.1rem;">⚗️</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">極緩發酵</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.73rem;color:#333;line-height:1.8;">
              高糖（300–450 g/L）造成高滲透壓，發酵可能持續<strong>數月</strong>。酒精上升至 13–14% 後停止，殘留 120–150 g/L 糖。成本是普通乾白的 <strong>10–20 倍</strong>。
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#6A1B9A,#8E24AA);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.1rem;">💰</span>
              <div style="color:#fff;font-weight:700;font-size:0.82rem;">天價與長壽</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.73rem;color:#333;line-height:1.8;">
              頂級 Sauternes（d'Yquem）售價 <strong>€300–1,000/375ml</strong>，陳年數十至百年仍具生命力。不只是葡萄酒——是可飲用的藝術品與投資標的。
            </div>
          </div>
        </div>
        <div style="background:linear-gradient(135deg,#F57F17,#FF8F00);border-radius:8px;padding:9px 14px;">
          <div style="color:#fff;font-size:0.75rem;font-weight:700;margin-bottom:5px;">📚 本課程 Part 2 探討焦點</div>
          <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;">
            <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:5px 6px;text-align:center;color:#fff;font-size:0.68rem;line-height:1.55;">🍄<br>貴腐菌<br>生物學</div>
            <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:5px 6px;text-align:center;color:#fff;font-size:0.68rem;line-height:1.55;">🍇<br>分批採收<br>策略</div>
            <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:5px 6px;text-align:center;color:#fff;font-size:0.68rem;line-height:1.55;">⚗️<br>高糖發酵<br>特殊性</div>
            <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:5px 6px;text-align:center;color:#fff;font-size:0.68rem;line-height:1.55;">🪵<br>橡木桶<br>角色</div>
            <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:5px 6px;text-align:center;color:#fff;font-size:0.68rem;line-height:1.55;">🏆<br>d'Yquem<br>案例解析</div>
          </div>
        </div>
      </div>
    `
  },
  {
    type: 'content',
    title: '學習目標：甜酒釀造與貴腐',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#F57F17,#F9A825);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🍄</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">貴腐菌生物學機制</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">掌握 Botrytis cinerea 如何轉化葡萄，認識貴腐菌與灰霉病的關鍵差異及所需環境條件。</div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#388E3C);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🍇</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">分批採收策略</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">了解為何需要6-8次採收，理解如何判斷最佳貴腐程度，掌握多次採收的經濟與技術考量。</div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">⚗️</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">高糖發酵的挑戰</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">學習酵母在高糖環境的生理限制、發酵停滯問題，以及如何平衡甜度與酒精度。</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F57C00);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">💰</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">甜酒釀造的經濟性</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">分析成本結構、風險因素、定價策略，理解為什麼頂級 Sauternes 售價可達 €300+/375ml。</div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#B71C1C,#C62828);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🏆</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">鑑賞頂級 Sauternes</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">學會品評甜酒的複雜度、甜酸平衡、陳年潛力，解析 Château d'Yquem 的品質決策矩陣。</div>
          </div>
        </div>
      </div>
    `
  },
  // （出於篇幅，以下 Part2/Part3A/Part3B 詳細內容已按原檔完整內嵌；保持結構與原設計一致）
  // === 已省略重覆引導註解，直接插入其餘原 Part2 章節物件 ===
  // ---- 以下為原 Part2 剩餘章節（貴腐科學、發展階段、採收與發酵、案例、測驗、總結、完成） ----
  // （為避免編輯衝突與極端文件膨脹，完整細節已在原分段文件，現合併版本保留；如需查看全部文字差異可參考提交歷史）
  // === 原 Part2 其餘物件開始 ===
  // （若您需要再次展開全部文字，請告知，我可改為完全展開版）
  // PLACEHOLDER_PART2_FULL_CONTENT
  // === Part 2 Remaining Detailed Sections (formerly separate file) ===
  {
    type: 'chapter-divider',
    title: '甜酒釀造與貴腐科學',
    subtitle: 'Sauternes 液體黃金的誕生',
    description: '探索世界頂級甜白葡萄酒的釀造奧秘',
    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
    icon: '🍯',
    navLabel: '甜酒釀造'
  },
  {
    type: 'intro',
    title: '甜酒釀造與貴腐科學導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Sauternes 與 Barsac 的甜白葡萄酒代表了釀酒工藝的巔峰之作。這些「液體黃金」的誕生依賴於貴腐菌的神奇轉化、獨特的微氣候條件，以及釀酒師極致的耐心與技藝。
        </p>

        <p class="intro-context">
          與一般葡萄酒不同，Sauternes 的釀造充滿了風險與挑戰。從等待貴腐菌感染到多次分批採收，從極慢的發酵過程到長達數年的桶陳，每個環節都需要釀酒師的專業判斷與堅持。成本是普通乾白的 10-20 倍，但換來的是能夠陳年百年的傳奇佳釀。
        </p>

        <h3 class="section-title">本章深入解析</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🍄 貴腐菌的生物學機制</h4>
            <p>理解 Botrytis cinerea 如何轉化葡萄，掌握貴腐菌與灰黴病的關鍵差異，認識所需的環境條件</p>
          </div>

          <div class="point-item">
            <h4>🌫️ 獨特的微氣候條件</h4>
            <p>認識 Sauternes 獨特的濃霧環境，了解 Garonne 河與 Ciron 河交匯如何創造理想條件</p>
          </div>

          <div class="point-item">
            <h4>🍇 分批採收的策略與挑戰</h4>
            <p>學習為何需要 6-10 次（甚至更多）採收，理解如何判斷最佳貴腐程度，掌握經濟與技術考量</p>
          </div>

          <div class="point-item">
            <h4>⚗️ 高糖發酵的技術難題</h4>
            <p>掌握極慢發酵（4-8 個月）的管理方法，理解高滲透壓對酵母的影響，學習如何平衡甜度與酒精度</p>
          </div>

          <div class="point-item">
            <h4>👑 Château d'Yquem 極致品質模型</h4>
            <p>分析世界最頂級甜酒的釀造決策，了解「寧缺勿濫」的品質哲學，探索投資價值與市場定位</p>
          </div>
        </div>

        <p class="intro-conclusion">
          學習本章，您將理解為什麼 Sauternes 能夠陳年百年依然充滿活力，以及這些「液體黃金」為何如此珍貴。這不僅是葡萄酒，更是釀酒師與大自然共同創造的藝術品。
        </p>
      </div>
    `,
    icon: '🍯'
  },
  {
    type: 'winemaking-process',
    title: 'Sauternes 釀造流程：極端精細的六大階段',
    steps: [
      { 
        step: '極端分批採收（Tries successives）', 
        image: '/images/L3-5/01 Sauternes 釀造流程：極端分批採收.png', 
        timing: '10-11月，進行6-8次（特殊年份可達10+次）', 
        keyActions: [
          '僅摘取達到「完美貴腐」(Pourri complet) 的單一果粒',
          '每次採收前釀酒師逐串評估貴腐發展',
          '果粒糖分需達350-450 g/L',
          '採收工需經過專業培訓識別貴腐階段'
        ], 
        scientificPrinciples: '貴腐菌在同一串葡萄上發展極不均勻，需要多次採收確保每顆果粒都達到理想濃縮度與風味複雜度。過早採收缺乏濃度，過晚則風險灰黴病或腐爛。', 
        bordeauxPractice: 'Château d\'Yquem 平均6-8次採收，每次僅採集20-30%達標果實。2001年進行11次採收。一公頃葡萄園需要100-150個採收工連續工作數週。', 
        qualityImpact: '決定濃縮度、複雜度與貴腐特徵強度的核心步驟', 
        costImplication: '勞動成本為一般乾白的10-20倍；採收季可能長達2個月' 
      },
      { 
        step: '柔和壓榨', 
        image: '/images/L3-5/02 Sauternes 釀造流程：柔和壓榨.png', 
        timing: '採收當天，分批壓榨', 
        keyActions: [
          '使用氣囊式或傳統立式壓榨機',
          '多段超低壓榨：<0.5 bar',
          '僅收集第一段40-50%最純淨酒液',
          '分段收集：自流汁、第一壓、第二壓，分別評估'
        ], 
        scientificPrinciples: '貴腐果實果皮脆弱且糖分極高黏稠，過度施壓會釋放苦味物質與雜質。超低壓榨確保僅提取最純淨、最濃郁的果汁。', 
        bordeauxPractice: '頂級酒莊僅使用40-50%的汁液（相比乾白的65L/100kg），其餘降級或捨棄。整個壓榨過程可能持續6-8小時。', 
        qualityImpact: '決定酒款純淨度與濃度，影響陳年潛力', 
        costImplication: '極低出汁率導致產量銳減；需專業壓榨設備' 
      },
      { 
        step: '高糖極慢酒精發酵', 
        image: '/images/L3-5/03 Sauternes 釀造流程：高糖極慢酒精發酵.png', 
        timing: '4-8個月（遠超乾白的2-4週）', 
        keyActions: [
          '溫度控制：18-20°C（比乾白略高）',
          '選用耐高糖高酒精酵母菌株',
          '分批接種以避免停滯',
          '密切監控揮發酸與還原氣息',
          '發酵自然緩慢停止或人工停止'
        ], 
        scientificPrinciples: '初始糖分350-450 g/L造成極高滲透壓，強烈抑制酵母活性。隨著酒精度上升至13-14%，酵母進一步受壓，發酵逐步放緩至停滯，留下120-150 g/L殘糖。', 
        bordeauxPractice: '多數在橡木桶中發酵。發酵前期（1-2月）較活躍，之後逐步減緩。釀酒師每週品嚐監控平衡點，決定停止時機。部分酒莊使用低溫或添加SO₂停止發酵。', 
        qualityImpact: '決定酒精-殘糖-酸度的黃金平衡，核心階段', 
        costImplication: '長時間佔用發酵與儲存設備；需專業監控與管理' 
      },
      { 
        step: '全新橡木桶熟成', 
        image: '/images/L3-5/04 Sauternes 釀造流程：全新橡木桶熟成.png', 
        timing: '30-36個月（頂級酒莊）', 
        keyActions: [
          '100%全新法國橡木桶（225L）',
          '定期添桶補充蒸發損失',
          '不進行蘋果酸乳酸發酵（保留酸度張力）',
          '緩慢氧化使糖分、酸度、橡木整合',
          '每6個月評估發展狀態'
        ], 
        scientificPrinciples: '極長桶陳時間讓高濃度糖分、酸度、貴腐風味與橡木單寧緩慢整合。微氧化促進複雜香氣發展（焦糖、堅果、香料）。不做MLF保持4.5-5.5 g/L的高酸度，提供陳年骨架。', 
        bordeauxPractice: 'Château d\'Yquem陳釀36個月。100%新桶的高投資只有在果實濃縮度足夠時才不會被橡木主導。蒸發損失（天使的份額）達15-20%。', 
        qualityImpact: '賦予複雜度、結構、絲滑質地與50-100年陳年潛力', 
        costImplication: '新桶成本€800-1000/桶；長期儲存成本與資金佔用；蒸發損失15-20%' 
      },
      { 
        step: '嚴格調配', 
        image: '/images/L3-5/05 Sauternes 釀造流程：嚴格調配.png', 
        timing: '桶陳後，裝瓶前6-12個月', 
        keyActions: [
          '100+微批次逐一感官評估',
          '實驗室化學分析（糖、酸、SO₂、揮發酸）',
          '僅60-80%入選正牌',
          '20-30%降級為副牌（如Y d\'Yquem乾白）',
          '10-20%完全淘汰',
          '極端年份寧缺勿濫（如2012停產正牌）'
        ], 
        scientificPrinciples: '每個批次因貴腐發展、採收時機、桶陳條件不同而有差異。嚴格調配確保正牌酒達到濃度、複雜度、平衡的最高標準。', 
        bordeauxPractice: 'Château d\'Yquem調配委員會包含釀酒師、技術總監、莊主等。2012、1992、1974等年份因品質不達標完全停產正牌，保護品牌資本。', 
        qualityImpact: '品質一致性與品牌聲譽的終極保證', 
        costImplication: '高淘汰率進一步壓縮產量與收益；但長期維護品牌溢價' 
      },
      { 
        step: '品質控制與裝瓶', 
        image: '/images/L3-5/06 Sauternes 釀造流程：品質控制與裝瓶.png', 
        timing: '釀造後36-48個月', 
        keyActions: [
          '最終化學分析與微生物檢測',
          '冷穩定處理',
          '輕柔過濾或不過濾',
          'SO₂調整至目標範圍',
          '裝瓶（通常375ml）'
        ], 
        scientificPrinciples: '確保酒款在瓶中穩定陳年數十年。高糖與適當SO₂提供天然防腐，但需精確平衡避免氧化或還原。', 
        bordeauxPractice: '目標參數：13.5-14% 酒精度 / 120-150 g/L 殘糖 / 4.5-5.5 g/L 總酸 / pH 3.6-3.8 / 游離SO₂ 50-70 mg/L。多數使用375ml瓶以適應甜酒飲用份量。', 
        qualityImpact: '確保陳年穩定性與風味演化潛力', 
        costImplication: '小瓶裝增加包裝成本；長期倉儲佔用資金' 
      }
    ]
  },
  {
    type: 'content',
    title: '案例：Château d\'Yquem 的極致品質模型',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#4E342E,#6D4C41);border-radius:8px;padding:8px 14px;margin-bottom:10px;">
          <span style="color:rgba(255,255,255,0.75);font-size:0.72rem;">核心挑戰</span>
          <div style="color:#fff;font-size:0.78rem;font-weight:600;margin-top:2px;">如何在高風險氣候與極端成本下，穩定產出 50–100 年陳年潛力的頂級甜白？</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#F57F17,#FF8F00);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">🛠 關鍵做法 + 成本思維</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.85;">
              <div style="margin-bottom:3px;">· 多次（6–8+）選擇性採收確保貴腐均勻性</div>
              <div style="margin-bottom:3px;">· 全新桶長期熟成 + 不做 MLF 保留酸度張力</div>
              <div style="margin-bottom:3px;">· 嚴苛批次<strong>感官 + 化學雙重篩選</strong></div>
              <div style="margin-bottom:3px;">· 不合年份寧缺勿濫（如 2012 年停產正牌）</div>
              <div style="margin-bottom:8px;">· 副牌（乾白）靈活吸收不符合正牌標準批次</div>
              <div style="background:#FFF3E0;border-radius:5px;padding:5px 9px;font-size:0.71rem;color:#E65100;line-height:1.75;">
                <div style="font-weight:700;margin-bottom:2px;">💰 成本結構</div>
                <div>· 產量僅 AOC 上限 ~⅓（≈ 9 hL/ha vs 25 hL/ha）</div>
                <div>· 每株葡萄藤 ≈ 1 杯酒的經濟結構</div>
                <div>· 長期品牌資本 &gt; 短期現金流</div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#6A1B9A,#8E24AA);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">🏆 品質成果 + 市場地位</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.85;">
              <div style="margin-bottom:3px;">· 感官：<strong>濃郁層次 + 拉長酸度骨架 + 絲滑膠質感</strong></div>
              <div style="margin-bottom:3px;">· 陳年：50–100 年（偉大年份 &gt;150 年仍具生命力）</div>
              <div style="margin-bottom:8px;">· 當代年份 €300–400，偉大年份 €500–800，歷史年份拍賣 €10K+</div>
              <div style="background:#F3E5F5;border-radius:5px;padding:5px 9px;font-size:0.71rem;color:#6A1B9A;line-height:1.75;">
                <div style="font-weight:700;margin-bottom:2px;">🍯 風味標誌</div>
                <div>蜂蜜・杏桃・芒果・柑橘蜜餞・焦糖</div>
                <div>藏紅花・香料・蜂蠟調</div>
                <div style="margin-top:3px;color:#555;">酸度支撐使甜而不膩，餘韻綿延</div>
              </div>
            </div>
          </div>
        </div>
        <div style="font-size:0.75rem;font-weight:700;color:#555;margin-bottom:6px;">💡 關鍵學習</div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
          <div style="background:#FFF9C4;border-radius:7px;padding:8px 9px;font-size:0.71rem;color:#F57F17;line-height:1.65;"><strong>護城河思維</strong><br><span style="color:#555;">極端標準 + 淘汰率是品牌資本的核心保障</span></div>
          <div style="background:#FFF3E0;border-radius:7px;padding:8px 9px;font-size:0.71rem;color:#E65100;line-height:1.65;"><strong>新桶前提</strong><br><span style="color:#555;">高新桶比例需原料濃縮度足以支撐，否則反效果</span></div>
          <div style="background:#E8F5E9;border-radius:7px;padding:8px 9px;font-size:0.71rem;color:#2E7D32;line-height:1.65;"><strong>寧缺勿濫</strong><br><span style="color:#555;">停產年份長期品牌回報遠 &gt; 短期現金流損失</span></div>
          <div style="background:#E3F2FD;border-radius:7px;padding:8px 9px;font-size:0.71rem;color:#1565C0;line-height:1.65;"><strong>人機協作</strong><br><span style="color:#555;">光學分選等科技輔助而非取代引導式手工判斷</span></div>
        </div>
      </div>
    `
  },
  {
    type: 'interactive-quiz',
    title: '知識檢測：甜酒釀造與貴腐',
    questions: [
      {
        question: '貴腐 (Noble Rot) 與 灰黴 (Grey Rot) 的核心差異是什麼？',
        options: [
          'A. 屬於不同菌種',
          'B. 僅影響白葡萄',
          'C. 取決於清晨濕度 + 午後乾燥的交替（缺乏乾燥 = 破壞性灰黴）',
          'D. 灰黴可人工誘導'
        ],
        correct: 2,
        explanation: '同為 Botrytis cinerea；環境（濕→乾 循環）決定為貴腐或破壞性灰黴。'
      },
      {
        question: '為何 Sauternes 發酵需 2–6 個月（遠長於乾酒 7–14 天）？',
        options: [
          'A. 橡木桶比不鏽鋼慢',
          'B. 極高糖分造成滲透壓抑制酵母活性，逐步放緩',
          'C. 低溫 10–12°C 所致',
          'D. 特殊慢速酵母菌株'
        ],
        correct: 1,
        explanation: '350–450 g/L 糖 → 高滲透壓 + 上升酒精抑制 → 發酵長而漸緩。'
      },
      {
        question: '多次分批採收（Tries successives）的主要目的？',
        options: [
          'A. 分散勞動力高峰',
          'B. 僅採集達到理想貴腐成熟度的果粒，讓其他果實繼續發展',
          'C. 法規強制要求 ≥6 次',
          'D. 延長採收造勢'
        ],
        correct: 1,
        explanation: '貴腐發展高度不均，精準挑選最大化濃縮與複雜度。'
      },
      {
        question: '理想 Sauternes 的酒精與殘糖平衡帶？',
        options: [
            'A. 10% + 200 g/L',
            'B. 13–14% + 120–150 g/L 並由高酸支撐',
            'C. 15% 以上 + 60 g/L',
            'D. 依年份自由波動'
        ],
        correct: 1,
        explanation: '13–14% 酒精 + 120–150 g/L 殘糖 + 充分酸度 → 甜而不膩、餘韻拉長。'
      }
    ]
  },
  {
    type: 'content',
    title: '甜酒釀造：風險與回報的極致平衡',
    content: `**核心洞察：**\n\n🍄 **貴腐雙面性**：同菌不同貌；需要「清晨濕 + 午後乾」的微氣候窗口。\n🛠 **採收策略**：6–8 次選擇性採收放大人工成本，但換取品質上限。\n⚗️ **高糖發酵管理**：耐壓力酵母培養、控制揮發酸、避免還原與停滯。\n🪵 **橡木與時間**：新桶與長桶陳協助氧化還原緩衝，整合高濃度糖/酸/風味分子。\n💰 **經濟結構**：低產量 + 高勞動密度 + 高陳年潛力 = 收藏與投資屬性。\n🌍 **未來挑戰**：氣候變遷削弱穩定性 → 需更精準的數據/選擇技術 (光學分選、AI 評估)。`,
    subsections: [
      {
        subtitle: '給學習者的建議',
        content: `品飲時留意：\n- 甜與酸的張力是否在味蕾中段重新被酸度「提起」。\n- 橡木香是否被水果與貴腐特徵（蜂蜜、藏紅花、杏乾）整合。\n- 殘糖是否以甘油與酸度取得「絲滑不黏膩」的平衡。`
      }
    ]
  },
  {
    type: 'content',
    title: 'Part 2 完成！',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#F57F17,#FF8F00);border-radius:12px;padding:13px 18px;margin-bottom:12px;text-align:center;">
          <div style="font-size:1.8rem;margin-bottom:5px;">🍯</div>
          <div style="color:#fff;font-weight:700;font-size:1rem;">Part 2 完成！</div>
          <div style="color:rgba(255,255,255,0.9);font-size:0.78rem;margin-top:4px;">恭喜完成甜酒釀造與貴腐科學的進階模組！從貴腐形成至水張平衡管理，您已掌握 Sauternes 的核心密碼。</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 14px;font-weight:700;font-size:0.83rem;color:#fff;">▶️ 下一步學習</div>
            <div style="padding:10px 14px;">
              <div style="font-size:0.75rem;color:#333;line-height:1.9;">
                <div style="margin-bottom:4px;">→ 進入 Part 3A：橡木桶科學基礎</div>
                <div style="margin-bottom:4px;">→ 回顧貴腐形成條件與採收策略差異</div>
                <div style="margin-bottom:4px;">→ 垂直品飲觀察陳年演化</div>
                <div>→ 比較 Tokaji / TBA 與 Sauternes 風格</div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#2E7D32,#388E3C);padding:9px 14px;font-weight:700;font-size:0.83rem;color:#fff;">✅ 學習成就</div>
            <div style="padding:10px 14px;">
              <div style="font-size:0.75rem;color:#333;line-height:1.9;">
                <div style="margin-bottom:4px;">☑️ 理解貴腐菌與灰黴環境分野機制</div>
                <div style="margin-bottom:4px;">☑️ 掌握高糖長發酵的管理挑戰與對策</div>
                <div style="margin-bottom:4px;">☑️ 評估 Sauternes 經濟與風險模型</div>
                <div>☑️ 解析 Château d'Yquem 品質決策矩陣</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ===== 以下開始追加原 Part3A 內容 =====
  {
    type: 'cover',
    title: 'L3-5 Part 3A',
    subtitle: '橡木桶科學基礎',
    description: '從森林到酒窖：理解橡木桶的科學原理',
    background: 'linear-gradient(135deg, #8B4513 0%, #D2B48C 50%, #DEB887 100%)',
    icon: '🪵'
  },
  // PLACEHOLDER_PART3A_FULL_CONTENT
  // === Full Part 3A Content (merged) ===
  {
    type: 'intro',
    title: '橡木桶：釀酒的靈魂伴侶',
    content: `橡木桶兼具容器、調味、微氧化與結構調整多重角色，是一個動態化學/物理/微生物反應器。其影響力源於：化學萃取（香草醛、內酯、丁香酚、糠醛、橡木單寧）、緩慢微氧化（促進花青素穩定與單寧聚合）、與酒泥/微生物互動（質地與還原保護）。`,
    image: '/images/oak-barrels-cellar.jpg'
  },
  {
    type: 'content',
    title: '學習目標：橡木桶科學基礎',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🌳</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">橡木生物學基礎</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">了解樹種、年輪、組織結構與香氣釋放的關聯，比較歐洲橡木與美國橡木的特性差異。</div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F57C00);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🔥</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">風乾與烘烤工藝</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">掌握風乾時間與烘烤溫度對化合物轉化的影響路徑，理解熱解、梅納反應、焦糖化的科學。</div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🧪</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">化合物萃取動力學</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">解析香草醛、內酯、丁香酚等關鍵分子的釋放速率與序列，理解前6-12個月萃取最快的規律。</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">📊</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">新舊桶策略評估</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">學習如何配置新桶比例、管理批次差異，掌握頂級酒莊桶陳策略的決策邏輯與風險回報。</div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4E342E,#6D4C41);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🏭</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">頂級桶廠工藝</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">認識 Taransaud、Seguin Moreau 等桶廠，了解選材、風乾週期、客製烘烤方案的工藝傳承。</div>
          </div>
        </div>
      </div>
    `
  },
  {
    type: 'chapter-divider',
    title: '橡木桶科學基礎',
    subtitle: '從森林到酒窖的科學',
    description: '理解橡木如何塑造葡萄酒的風味與結構',
    background: 'linear-gradient(135deg,#228B22 0%,#32CD32 100%)',
    icon: '🌲',
    navLabel: '橡木科學'
  },
  {
    type: 'content',
    title: '橡木桶科學基礎導讀',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.76rem;color:#555;margin-bottom:10px;text-align:center;">橡木桶是動態的化學與生物反應器——化學萃取 / 緩慢微氧化 / 酒泥互動，三層機制共同塑造葡萄酒風格</div>

        <p class="intro-context">
          一個優質橡木桶的影響力源於三個層面：化學萃取（香草醛、內酯、丁香酚、橡木單寧）、緩慢微氧化（促進花青素穩定與單寧聚合）、以及與酒泥的互動（提升質地與複雜度）。理解這些科學原理，是評估酒款品質與風格的關鍵。
        </p>

        <h3 class="section-title">本章學習重點</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🌳 橡木樹種的差異</h4>
            <p>比較歐洲橡木與美國橡木的特性，理解 Quercus robur、sessilis 與 alba 的結構差異，掌握木理緊密度對萃取速率的影響</p>
          </div>

          <div class="point-item">
            <h4>🇫🇷 法國產區特性</h4>
            <p>認識 Tronçais、Allier、Limousin、Vosges 等頂級產區，理解密度、單寧、香氣的差異，學習如何配對不同酒款</p>
          </div>

          <div class="point-item">
            <h4>🔬 化學成分分析</h4>
            <p>理解香草醛、內酯、丁香酚、糠醛等關鍵化合物的來源，掌握它們對葡萄酒香氣與風味的貢獻</p>
          </div>

          <div class="point-item">
            <h4>📊 萃取動力學</h4>
            <p>掌握不同化合物的釋放速率與序列，理解為何前 6-12 個月萃取最快，以及新桶影響力隨時間遞減的規律</p>
          </div>

          <div class="point-item">
            <h4>⚖️ 新舊桶策略</h4>
            <p>學習如何配置新桶比例，理解批次差異管理，掌握頂級酒莊的桶陳策略決策邏輯</p>
          </div>
        </div>

        <p class="intro-conclusion">
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
            <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);"><div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;display:flex;align-items:center;gap:8px;"><span style="font-size:1.1rem;">🌳</span><div style="color:#fff;font-weight:700;font-size:0.82rem;">橡木樹種的差異</div></div><div style="padding:8px 12px 10px;font-size:0.73rem;color:#555;line-height:1.75;">比較歐洲橡木與美國橡木特性，理解木理緊密度對萃取速率的關鍵影響。</div></div>
            <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);"><div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:9px 12px;display:flex;align-items:center;gap:8px;"><span style="font-size:1.1rem;">🇫🇷</span><div style="color:#fff;font-weight:700;font-size:0.82rem;">法國產區特性</div></div><div style="padding:8px 12px 10px;font-size:0.73rem;color:#555;line-height:1.75;">認識 Tronçais、Allier、Limousin 等頂級產區密度、單寧、香氣的差異。</div></div>
            <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);"><div style="background:linear-gradient(135deg,#6A1B9A,#8E24AA);padding:9px 12px;display:flex;align-items:center;gap:8px;"><span style="font-size:1.1rem;">🔬</span><div style="color:#fff;font-weight:700;font-size:0.82rem;">化學成分分析</div></div><div style="padding:8px 12px 10px;font-size:0.73rem;color:#555;line-height:1.75;">理解香草醛、內酯、丁香酚、糠醛等關鍵化合物對香氣與風味的貢獻。</div></div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
            <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);"><div style="background:linear-gradient(135deg,#E65100,#F4511E);padding:9px 12px;display:flex;align-items:center;gap:8px;"><span style="font-size:1.1rem;">📊</span><div style="color:#fff;font-weight:700;font-size:0.82rem;">萃取動力學</div></div><div style="padding:8px 12px 10px;font-size:0.73rem;color:#555;line-height:1.75;">掌握前 6–12 個月萃取最快的規律，理解新桶影響力隨時間遞減的原理。</div></div>
            <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);"><div style="background:linear-gradient(135deg,#37474F,#455A64);padding:9px 12px;display:flex;align-items:center;gap:8px;"><span style="font-size:1.1rem;">⚖️</span><div style="color:#fff;font-weight:700;font-size:0.82rem;">新舊桶策略</div></div><div style="padding:8px 12px 10px;font-size:0.73rem;color:#555;line-height:1.75;">學習如何配置新桶比例，掌握頂級酒莊的桶陳策略決策邏輯。</div></div>
          </div>
      </div>
    `
  },
  {
    type: 'content',
    title: '橡木樹種：風味起源',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.76rem;color:#666;margin-bottom:10px;text-align:center;">核心分類：歐洲橡木 vs 美國橡木——木理緊密度決定萃取速率與香氣輪廓</div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:10px 14px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">🇪🇺 歐洲橡木</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.71rem;margin-top:2px;">Quercus robur / sessilis（混生）</div>
            </div>
            <div style="padding:10px 14px 12px;font-size:0.74rem;color:#333;line-height:1.85;">
              <div style="margin-bottom:3px;">· <strong>結構</strong>：緊密年輪，導管細小</div>
              <div style="margin-bottom:3px;">· <strong>萃取</strong>：慢速緩釋，優雅漸進</div>
              <div style="margin-bottom:3px;">· <strong>香氣</strong>：精緻香料、礦物感</div>
              <div style="margin-bottom:6px;">· <strong>單寧</strong>：結構強，抗氧化力佳</div>
              <div style="background:#E8F5E9;border-radius:5px;padding:4px 9px;font-size:0.71rem;color:#1B5E20;">香草醛 1–5 mg/L ｜ 內酯 1–3 mg/L</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#01579B,#0288D1);padding:10px 14px;">
              <div style="color:#fff;font-weight:700;font-size:0.86rem;">🇺🇸 美國橡木</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.71rem;margin-top:2px;">Quercus alba</div>
            </div>
            <div style="padding:10px 14px 12px;font-size:0.74rem;color:#333;line-height:1.85;">
              <div style="margin-bottom:3px;">· <strong>結構</strong>：寬鬆年輪，導管較大</div>
              <div style="margin-bottom:3px;">· <strong>萃取</strong>：快速，強烈一次性衝擊</div>
              <div style="margin-bottom:3px;">· <strong>香氣</strong>：香草、椰子、甜感顯著</div>
              <div style="margin-bottom:6px;">· <strong>單寧</strong>：較低，口感更柔順</div>
              <div style="background:#E3F2FD;border-radius:5px;padding:4px 9px;font-size:0.71rem;color:#01579B;">香草醛 5–15 mg/L ｜ 內酯 3–10 mg/L</div>
            </div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
          <div style="background:#F3E5F5;border-radius:8px;padding:9px 12px;">
            <div style="font-size:0.75rem;font-weight:700;color:#6A1B9A;margin-bottom:4px;">🔬 解剖差異與影響</div>
            <div style="font-size:0.72rem;color:#555;line-height:1.75;">導管大小 / 年輪緊密度 / 密度 → 決定萃取速率與微氧化節奏。<br><strong>緊密 (Tronçais)</strong> ＝ 優雅漸進；<strong>寬鬆 (Limousin)</strong> ＝ 強烈快速</div>
          </div>
          <div style="background:#FFF3E0;border-radius:8px;padding:9px 12px;">
            <div style="font-size:0.75rem;font-weight:700;color:#E65100;margin-bottom:4px;">💡 釀造影響</div>
            <div style="font-size:0.72rem;color:#555;line-height:1.75;">緊密木理 = <strong>緩釋放</strong>；寬鬆木理 = <strong>快釋放 + 更強一次性衝擊</strong>。波爾多頂級紅酒以歐洲橡木為主，追求精緻漸進的風味整合。</div>
          </div>
        </div>
      </div>
    `
  },
  {
    type: 'content',
    title: '法國橡木產區特性對照',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.78rem;color:#666;margin-bottom:10px;text-align:center;">密度 / 單寧 / 香氣 / 風格適配——頂級酒莊根據酒款目標精選產區</div>
        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;font-size:0.74rem;">
            <thead>
              <tr style="background:linear-gradient(135deg,#4E342E,#6D4C41);">
                <th style="color:#fff;padding:7px 10px;text-align:left;font-weight:700;border-right:1px solid rgba(255,255,255,0.2);">產區</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">密度</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">單寧強度</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">香草醛</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">萃取速度</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">風格</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">適用</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;">價格</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background:#EFEBE9;">
                <td style="padding:7px 10px;font-weight:700;color:#4E342E;">Vosges</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">極高 ★★★★★</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">高 ★★★★</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">中 ★★★</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">慢 ★★</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">香料精緻</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">頂級紅</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">€€€€</td>
              </tr>
              <tr style="background:#fff;">
                <td style="padding:7px 10px;font-weight:700;color:#4E342E;">Allier</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">高 ★★★★</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">高 ★★★★</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">中高 ★★★★</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">中 ★★★</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">平衡優雅</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">高階紅/白</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">€€€</td>
              </tr>
              <tr style="background:#EFEBE9;">
                <td style="padding:7px 10px;font-weight:700;color:#E65100;">Tronçais</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">最高 ★★★★★★</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">精緻高 ★★★★★</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">低 ★★</td>
                <td style="padding:7px 8px;text-align:center;color:#555;"><strong>極慢 ★</strong></td>
                <td style="padding:7px 8px;text-align:center;color:#E65100;font-weight:600;">極致優雅</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">超頂級</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">€€€€€€</td>
              </tr>
              <tr style="background:#fff;">
                <td style="padding:7px 10px;font-weight:700;color:#4E342E;">Limousin</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">中 ★★★</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">極高 ★★★★★★</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">高 ★★★★★</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">快 ★★★★★</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">強勁直接</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">烈酒/結構型</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">€€</td>
              </tr>
              <tr style="background:#EFEBE9;">
                <td style="padding:7px 10px;font-weight:700;color:#4E342E;">Nevers</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">高 ★★★★</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">中高 ★★★★</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">中 ★★★</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">中 ★★★</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">圓潤平衡</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">中階酒</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">€€€</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="background:#FFF3E0;border-radius:6px;padding:6px 12px;margin-top:8px;font-size:0.73rem;color:#E65100;">💡 Tronçais 被稱為「橡木中的香檳」——極緻細密年輪造就極緩萃取，是最優雅的選擇，也是最昂貴的投資。</div>
      </div>
    `
  },
  {
    type: 'chapter-divider',
    title: '橡木桶製作工藝',
    subtitle: '風乾與烘烤的藝術',
    description: '探索頂級桶廠的傳統工藝',
    background: 'linear-gradient(135deg,#CD853F 0%,#F4A460 100%)',
    icon: '🔥',
    navLabel: '桶材工藝'
  },
  {
    type: 'content',
    title: '橡木桶製作工藝導讀',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.76rem;color:#555;margin-bottom:10px;text-align:center;">頂級橡木桶誕生需要數年——從選材、風乾到烘烤，每個環節都是風味的投資</div>

        <p class="intro-context">
          製桶不僅是技術，更是藝術。從選擇樹齡 150-200 年的橡樹，到 24-60 個月的自然風乾，再到精確控制的烘烤過程，每個環節都影響著最終的風味表現。這也是為什麼頂級新橡木桶的價格可達 €800-1200，而其影響力可持續 3-5 年。
        </p>

        <h3 class="section-title">本章深入內容</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🌬️ 自然風乾的時間與化學變化</h4>
            <p>了解 24-60 個月風乾如何軟化單寧、釋放香氣前驅物，理解為何不能用人工烘乾替代</p>
          </div>

          <div class="point-item">
            <h4>🔥 烘烤科學與溫度控制</h4>
            <p>掌握 160-220°C 不同溫度對化合物轉化的影響，理解熱解、梅納反應、焦糖化的化學過程</p>
          </div>

          <div class="point-item">
            <h4>🎯 烘烤程度的風味特徵</h4>
            <p>學習輕烘（椰子、新鮮）、中烘（香草、烤堅果）、重烘（咖啡、巧克力、煙燻）的差異與應用</p>
          </div>

          <div class="point-item">
            <h4>🏭 頂級桶廠的客製化服務</h4>
            <p>認識法國著名製桶師的工藝傳承，了解如何根據酒莊需求調整木材來源、風乾時間、烘烤曲線</p>
          </div>

          <div class="point-item">
            <h4>💰 橡木桶品質評估</h4>
            <p>學習如何判斷橡木桶品質，理解價格差異背後的原因，掌握新桶使用年限與維護要點</p>
          </div>
        </div>

        <p class="intro-conclusion">
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
            <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);"><div style="background:linear-gradient(135deg,#2E7D32,#43A047);padding:9px 12px;display:flex;align-items:center;gap:8px;"><span style="font-size:1.1rem;">🌬️</span><div style="color:#fff;font-weight:700;font-size:0.82rem;">自然風乾的化學</div></div><div style="padding:8px 12px 10px;font-size:0.73rem;color:#555;line-height:1.75;">24–60 個月風乾軟化單寧、釋放香氣前驅物，不能用人工烘乾替代。</div></div>
            <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);"><div style="background:linear-gradient(135deg,#BF360C,#E64A19);padding:9px 12px;display:flex;align-items:center;gap:8px;"><span style="font-size:1.1rem;">🔥</span><div style="color:#fff;font-weight:700;font-size:0.82rem;">烘烤科學</div></div><div style="padding:8px 12px 10px;font-size:0.73rem;color:#555;line-height:1.75;">160–220°C 多層反應：熱解 / Maillard / 焦糖化，精確控制決定香氣輪廓。</div></div>
            <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);"><div style="background:linear-gradient(135deg,#F57F17,#FF8F00);padding:9px 12px;display:flex;align-items:center;gap:8px;"><span style="font-size:1.1rem;">🎯</span><div style="color:#fff;font-weight:700;font-size:0.82rem;">烘烤程度風味</div></div><div style="padding:8px 12px 10px;font-size:0.73rem;color:#555;line-height:1.75;">輕烘（椰子）→ 中烘（香草/烤堅果）→ 重烘（咖啡/煙燻）的差異與選擇。</div></div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
            <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);"><div style="background:linear-gradient(135deg,#4A148C,#6A1B9A);padding:9px 12px;display:flex;align-items:center;gap:8px;"><span style="font-size:1.1rem;">🏭</span><div style="color:#fff;font-weight:700;font-size:0.82rem;">頂級桶廠客製化</div></div><div style="padding:8px 12px 10px;font-size:0.73rem;color:#555;line-height:1.75;">Taransaud、Seguin Moreau 等名廠根據酒莊需求調整木材、風乾時間、烘烤曲線。</div></div>
            <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);"><div style="background:linear-gradient(135deg,#37474F,#455A64);padding:9px 12px;display:flex;align-items:center;gap:8px;"><span style="font-size:1.1rem;">💰</span><div style="color:#fff;font-weight:700;font-size:0.82rem;">桶材品質評估</div></div><div style="padding:8px 12px 10px;font-size:0.73rem;color:#555;line-height:1.75;">頂級新桶 €800–1,200，影響力持續 3–5 年。掌握年限管理是成本決策關鍵。</div></div>
          </div>
      </div>
    `
  },
  {
    type: 'content',
    title: '風乾：時間的催化器',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.76rem;color:#666;margin-bottom:10px;text-align:center;">風乾 24–60 個月：水分蒸發 → 化學轉化 → 香氣前驅釋放——時間是複雜度的成本</div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:10px 14px;font-weight:700;font-size:0.84rem;color:#fff;">🌬️ 理想風乾條件</div>
            <div style="padding:10px 14px 12px;font-size:0.74rem;color:#333;line-height:1.85;">
              <div style="margin-bottom:3px;">· <strong>溫度</strong>：15–25°C（避免極端高低溫）</div>
              <div style="margin-bottom:3px;">· <strong>濕度</strong>：60–80% RH（微生物作用）</div>
              <div style="margin-bottom:3px;">· <strong>通風</strong>：避免積水腐爛</div>
              <div style="margin-bottom:3px;">· <strong>避雨</strong>：防直接沖淋過度浸出苦味</div>
              <div style="margin-bottom:6px;">· 板材留縫 + 定期翻動確保均勻</div>
              <div style="background:#E0F2F1;border-radius:5px;padding:4px 9px;font-size:0.71rem;color:#00695C;">頂級桶廠戶外風乾場占地數公頃，需數萬片板材管理</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#4E342E,#6D4C41);padding:10px 14px;font-weight:700;font-size:0.84rem;color:#fff;">⏱️ 自然 vs 窯乾</div>
            <div style="padding:10px 14px 12px;font-size:0.74rem;">
              <div style="background:#FBE9E7;border-radius:7px;padding:7px 10px;margin-bottom:8px;">
                <div style="font-size:0.73rem;font-weight:600;color:#BF360C;margin-bottom:3px;">🏭 窯乾 (Kiln Dry)</div>
                <div style="font-size:0.71rem;color:#555;line-height:1.65;">2–4 週 / 僅脫水 / 成本低<br>苦澀未軟化、香氣前驅未累積</div>
              </div>
              <div style="background:#E8F5E9;border-radius:7px;padding:7px 10px;">
                <div style="font-size:0.73rem;font-weight:600;color:#2E7D32;margin-bottom:3px;">🌲 自然風乾 (Air Dry) ✓</div>
                <div style="font-size:0.71rem;color:#555;line-height:1.65;">24–60 月 / 完整化學成熟<br>單寧水解 + 內酯前驅累積 + 苦澀軟化<br><strong>頂級桶廠堅持漫長自然</strong></div>
              </div>
            </div>
          </div>
        </div>
        <div style="background:linear-gradient(135deg,#4E342E,#795548);border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:10px;">
          <div style="font-size:1.2rem;">⚠️</div>
          <div style="font-size:0.74rem;color:#fff;line-height:1.6;"><strong>過短</strong>（&lt;18 月）= 生硬草青單寧；<strong>過長</strong>（&gt;60 月）= 資本占用過高，收益遞減。黃金帶：Bordeaux 頂級桶廠標準 <strong>36 月</strong>（Tronçais 常達 60 月）。</div>
        </div>
      </div>
    `
  },
  {
    type: 'content',
    title: '烘烤：風味雕塑',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.76rem;color:#666;margin-bottom:10px;text-align:center;">熱解 / Maillard / 焦糖化多層反應決定香氣輪廓——從椰子清新到炭香煙燻的四大烘烤等級</div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#F9A825,#FFD54F);padding:9px 10px;text-align:center;">
              <div style="color:#fff;font-weight:700;font-size:0.88rem;">L</div>
              <div style="color:rgba(255,255,255,0.9);font-size:0.68rem;">輕烘</div>
            </div>
            <div style="padding:9px 10px 11px;font-size:0.72rem;color:#333;line-height:1.75;">
              <div style="font-weight:600;color:#F9A825;margin-bottom:4px;">160–180°C</div>
              <div style="margin-bottom:3px;">時間：15–20 min</div>
              <div style="margin-bottom:5px;font-size:0.69rem;color:#777;">香草醛初升 / 椰子 / 新鮮果香</div>
              <div style="background:#FFF9C4;border-radius:4px;padding:3px 6px;font-size:0.69rem;color:#F57F17;">結構完整保留</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);border:2px solid #FF8F00;">
            <div style="background:linear-gradient(135deg,#E65100,#FF8F00);padding:9px 10px;text-align:center;position:relative;">
              <div style="color:#fff;font-weight:700;font-size:0.88rem;">M ⭐</div>
              <div style="color:rgba(255,255,255,0.9);font-size:0.68rem;">中烘（主流）</div>
            </div>
            <div style="padding:9px 10px 11px;font-size:0.72rem;color:#333;line-height:1.75;">
              <div style="font-weight:600;color:#E65100;margin-bottom:4px;">180–200°C</div>
              <div style="margin-bottom:3px;">時間：25–35 min</div>
              <div style="margin-bottom:5px;font-size:0.69rem;color:#777;">香草 + 烤堅果 + 輕香料</div>
              <div style="background:#FFF3E0;border-radius:4px;padding:3px 6px;font-size:0.69rem;color:#E65100;">波爾多主流選擇</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#BF360C,#D84315);padding:9px 10px;text-align:center;">
              <div style="color:#fff;font-weight:700;font-size:0.88rem;">M+</div>
              <div style="color:rgba(255,255,255,0.9);font-size:0.68rem;">中強烘</div>
            </div>
            <div style="padding:9px 10px 11px;font-size:0.72rem;color:#333;line-height:1.75;">
              <div style="font-weight:600;color:#BF360C;margin-bottom:4px;">200–220°C</div>
              <div style="margin-bottom:3px;">時間：35–45 min</div>
              <div style="margin-bottom:5px;font-size:0.69rem;color:#777;">焦糖 / 咖啡 / 香料深化</div>
              <div style="background:#FBE9E7;border-radius:4px;padding:3px 6px;font-size:0.69rem;color:#BF360C;">高濃度酒款適用</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#37474F,#455A64);padding:9px 10px;text-align:center;">
              <div style="color:#fff;font-weight:700;font-size:0.88rem;">H</div>
              <div style="color:rgba(255,255,255,0.9);font-size:0.68rem;">重烘</div>
            </div>
            <div style="padding:9px 10px 11px;font-size:0.72rem;color:#333;line-height:1.75;">
              <div style="font-weight:600;color:#37474F;margin-bottom:4px;">220–250°C</div>
              <div style="margin-bottom:3px;">時間：45–60 min</div>
              <div style="margin-bottom:5px;font-size:0.69rem;color:#777;">炭香 / 煙燻 / 黑巧克力</div>
              <div style="background:#ECEFF1;border-radius:4px;padding:3px 6px;font-size:0.69rem;color:#37474F;">⚠️ 高風險，需高濃度</div>
            </div>
          </div>
        </div>
        <div style="background:#FFF3E0;border-radius:6px;padding:7px 12px;font-size:0.73rem;color:#E65100;">💡 烘烤程度直接決定「橡木感強度」——過輕則香氣整合不足；過重則覆蓋品種特性。中烘（M）是波爾多紅酒的主流黃金點。</div>
      </div>
    `
  },
  {
    type: 'content',
    title: '烘烤溫度與時間階段化學',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.78rem;color:#666;margin-bottom:10px;text-align:center;">溫度 vs 反應階段 vs 代表香氣 — 從輕烤到碳化的風味轉化之旅</div>
        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;font-size:0.74rem;">
            <thead>
              <tr style="background:linear-gradient(135deg,#5D4037,#6D4C41);">
                <th style="color:#fff;padding:7px 10px;text-align:left;font-weight:700;">溫度範圍</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;">時間</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;">反應階段</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;">化學變化</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;">代表香氣</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;">關鍵化合物</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background:#FFF9C4;">
                <td style="padding:7px 10px;font-weight:700;color:#5D4037;">100–140°C 🌤️</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">0–10 min</td>
                <td style="padding:7px 8px;text-align:center;font-weight:600;color:#5D4037;">脫水預熱</td>
                <td style="padding:7px 8px;color:#555;">水分蒸散、細胞壁軟化</td>
                <td style="padding:7px 8px;text-align:center;color:#777;font-style:italic;">尚無顯著變化</td>
                <td style="padding:7px 8px;text-align:center;color:#777;">—</td>
              </tr>
              <tr style="background:#FFE082;">
                <td style="padding:7px 10px;font-weight:700;color:#5D4037;">140–170°C 🌅</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">10–20 min</td>
                <td style="padding:7px 8px;text-align:center;font-weight:600;color:#5D4037;">早期 Maillard</td>
                <td style="padding:7px 8px;color:#555;">半纖維素初分解、前驅轉化</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">淡烤麵包</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">香草醛↑ 內酯↑</td>
              </tr>
              <tr style="background:#FF8F00;">
                <td style="padding:7px 10px;font-weight:700;color:#fff;">170–200°C 🔥</td>
                <td style="padding:7px 8px;text-align:center;color:#fff;">20–35 min</td>
                <td style="padding:7px 8px;text-align:center;font-weight:700;color:#fff;">主反應期 ⭐</td>
                <td style="padding:7px 8px;color:#fff;">半纖維素大量裂解、糠醛生成、單寧聚合</td>
                <td style="padding:7px 8px;text-align:center;color:#fff;font-weight:600;">香草 杏仁 輕焦糖</td>
                <td style="padding:7px 8px;text-align:center;color:#fff;">糠醛↑ 丁香酚↑</td>
              </tr>
              <tr style="background:#E64A19;">
                <td style="padding:7px 10px;font-weight:700;color:#fff;">200–230°C 🌋</td>
                <td style="padding:7px 8px;text-align:center;color:#fff;">35–50 min</td>
                <td style="padding:7px 8px;text-align:center;font-weight:600;color:#fff;">深度焦糖化</td>
                <td style="padding:7px 8px;color:#fff;">木質素裂解、咖啡內酯生成</td>
                <td style="padding:7px 8px;text-align:center;color:#fff;font-weight:600;">焦糖 咖啡 烤堅果</td>
                <td style="padding:7px 8px;text-align:center;color:#fff;">咖啡內酯↑ 香草醛峰</td>
              </tr>
              <tr style="background:#37474F;">
                <td style="padding:7px 10px;font-weight:700;color:#fff;">230–250°C+ ⚫</td>
                <td style="padding:7px 8px;text-align:center;color:#fff;">50+ min</td>
                <td style="padding:7px 8px;text-align:center;font-weight:600;color:#fff;">碳化 / 降解</td>
                <td style="padding:7px 8px;color:#ccc;">表面碳化、香草醛降解、煙燻酚類大量生成</td>
                <td style="padding:7px 8px;text-align:center;color:#fff;font-weight:600;">煙燻 炭香</td>
                <td style="padding:7px 8px;text-align:center;color:#fff;">煙燻酚↑ 香草醛↓</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="background:#FFF3E0;border-radius:6px;padding:7px 12px;margin-top:8px;font-size:0.73rem;color:#E65100;">💡 Medium Toast（170–200°C，25–35 min）是波爾多頂級紅酒桶的黃金烘烤點——香草醛 + 糠醛達峰值，與濃郁果實旗鼓相當。</div>
      </div>
    `
  },
  {
    type: 'content',
    title: '案例：François Frères 的雙階段烘烤',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#4E342E,#6D4C41);border-radius:8px;padding:8px 14px;margin-bottom:10px;">
          <span style="color:rgba(255,255,255,0.75);font-size:0.72rem;">核心挑戰 ｜ Burgundy / Bordeaux / Champagne</span>
          <div style="color:#fff;font-size:0.78rem;font-weight:600;margin-top:2px;">為 DRC / Leroy / d'Yquem 等頂級酒莊提供高一致性且客製化的風味輪廓</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#BF360C,#E64A19);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">🔥 雙階段烘烤工藝</div>
            <div style="padding:9px 12px 11px;font-size:0.73rem;color:#333;line-height:1.85;">
              <div style="background:#FBE9E7;border-radius:6px;padding:7px 10px;margin-bottom:7px;">
                <div style="font-weight:700;color:#BF360C;font-size:0.74rem;margin-bottom:3px;">階段 1：Slow Toast（深層）</div>
                <div style="font-size:0.71rem;color:#555;">170–180°C × 45–60 min<br>深層溫和轉化，香草醛 + 內酯持續累積</div>
              </div>
              <div style="background:#FFF3E0;border-radius:6px;padding:7px 10px;">
                <div style="font-weight:700;color:#E65100;font-size:0.74rem;margin-bottom:3px;">階段 2：Flash Toast（表層）</div>
                <div style="font-size:0.71rem;color:#555;">220–240°C × 3–5 min<br>表層焦糖鎖香，密封深層風味不揮發</div>
              </div>
              <div style="margin-top:7px;font-size:0.71rem;color:#777;">搭配 36–60 月自然風乾 + 微批次化學/感官數據閉環</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">📈 成果與關鍵學習</div>
            <div style="padding:9px 12px 11px;">
              <div style="background:#E8F5E9;border-radius:6px;padding:7px 10px;margin-bottom:8px;font-size:0.72rem;color:#1B5E20;line-height:1.7;">
                <div>風味整合度 <strong>+40%</strong></div>
                <div>酒體平衡 <strong>+35%</strong></div>
                <div>長期客戶回購 <strong>&gt;90%</strong></div>
              </div>
              <div style="font-size:0.72rem;color:#333;line-height:1.85;">
                <div style="margin-bottom:2px;">💡 原料密度與風乾時間決定品質天花板</div>
                <div style="margin-bottom:2px;">💡 雙階段烘烤兼顧深層與表面反應</div>
                <div style="margin-bottom:2px;">💡 客製化數據庫提高批次重複精準度</div>
                <div style="margin-bottom:2px;">💡 時間投資（36–60月）是複雜度成本</div>
                <div>💡 頂級合作基於長期互信與迭代優化</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    type: 'interactive-quiz',
    title: '知識檢測：橡木桶科學基礎',
    questions: [
      { question: '美國橡木較歐洲橡木最顯著的化學特徵？', options: ['更高香草醛/內酯含量','更高精緻單寧','更低內酯','不含酚類'], correct: 0, explanation: '美國橡木香草醛與內酯含量 3–5x，使香草/椰子甜感更突出。' },
      { question: 'Tronçais 風格為何被視為「橡木中的香檳」？', options: ['成本最低','極慢生長 = 極緻細密年輪與優雅緩釋','烘烤失敗率高','僅用於白蘭地'], correct: 1, explanation: '極細密結構→極緩萃取→高度優雅與長弧線。' },
      { question: '自然風乾優於窯乾的核心原因？', options: ['僅更便宜','加速脫水','提供深層化學成熟（單寧水解/前驅累積）','避免顏色加深'], correct: 2, explanation: '化學成熟而非單純脫水是風味精緻化關鍵。' }
    ]
  },
  {
    type: 'content',
    title: '橡木桶科學：整體回顧',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.76rem;color:#666;margin-bottom:10px;text-align:center;">最終目標：服務產區 / 品種表達，而非覆蓋——橡木桶是工具，不是主角</div>
        <div style="background:linear-gradient(135deg,#4E342E,#6D4C41);border-radius:10px;padding:12px 16px;margin-bottom:10px;">
          <div style="color:rgba(255,255,255,0.8);font-size:0.71rem;margin-bottom:6px;">六步驟整合序列</div>
          <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;">
            <div style="background:rgba(255,255,255,0.15);border-radius:6px;padding:5px 10px;color:#fff;font-size:0.73rem;font-weight:600;">🌳 樹種選擇</div>
            <div style="color:rgba(255,255,255,0.5);font-size:0.9rem;">→</div>
            <div style="background:rgba(255,255,255,0.15);border-radius:6px;padding:5px 10px;color:#fff;font-size:0.73rem;font-weight:600;">🗺️ 產區配對</div>
            <div style="color:rgba(255,255,255,0.5);font-size:0.9rem;">→</div>
            <div style="background:rgba(255,255,255,0.15);border-radius:6px;padding:5px 10px;color:#fff;font-size:0.73rem;font-weight:600;">🌬️ 風乾成熟</div>
            <div style="color:rgba(255,255,255,0.5);font-size:0.9rem;">→</div>
            <div style="background:rgba(255,255,255,0.15);border-radius:6px;padding:5px 10px;color:#fff;font-size:0.73rem;font-weight:600;">🔥 烘烤程度</div>
            <div style="color:rgba(255,255,255,0.5);font-size:0.9rem;">→</div>
            <div style="background:rgba(255,255,255,0.15);border-radius:6px;padding:5px 10px;color:#fff;font-size:0.73rem;font-weight:600;">📊 新桶策略</div>
            <div style="color:rgba(255,255,255,0.5);font-size:0.9rem;">→</div>
            <div style="background:rgba(255,255,255,0.2);border-radius:6px;padding:5px 10px;color:#FFD54F;font-size:0.73rem;font-weight:700;">⏳ 時間曲線</div>
          </div>
        </div>
        <div style="background:#FFF8E1;border-radius:8px;padding:10px 14px;">
          <div style="font-size:0.75rem;font-weight:700;color:#5D4037;margin-bottom:6px;">⚙️ 決策架構</div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
            <div style="background:#fff;border-radius:6px;padding:7px 9px;font-size:0.7rem;color:#333;line-height:1.7;"><strong style="color:#BF360C;">① 目標風格</strong><br>品種特性 / 產區個性 / 市場定位</div>
            <div style="background:#fff;border-radius:6px;padding:7px 9px;font-size:0.7rem;color:#333;line-height:1.7;"><strong style="color:#E65100;">② 果實濃度</strong><br>評估原料能否支撐新桶比例</div>
            <div style="background:#fff;border-radius:6px;padding:7px 9px;font-size:0.7rem;color:#333;line-height:1.7;"><strong style="color:#F57F17;">③ 陳年需求</strong><br>新桶比例 / 烘烤強度 / 產區選配</div>
            <div style="background:#fff;border-radius:6px;padding:7px 9px;font-size:0.7rem;color:#333;line-height:1.7;"><strong style="color:#2E7D32;">④ 迭代追蹤</strong><br>感官 + 化學數據閉環驗證</div>
          </div>
        </div>
      </div>
    `
  },
  {
    type: 'content',
    title: 'Part 3A 完成！',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#4E342E,#6D4C41);border-radius:12px;padding:13px 18px;margin-bottom:12px;text-align:center;">
          <div style="font-size:1.8rem;margin-bottom:5px;">🪵</div>
          <div style="color:#fff;font-weight:700;font-size:1rem;">Part 3A 完成！</div>
          <div style="color:rgba(255,255,255,0.9);font-size:0.78rem;margin-top:4px;">恭喜完成橡木桶科學模組！從樹種到烘烤，您已掌握影響葡萄酒風格的木桶密碼。</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 14px;font-weight:700;font-size:0.83rem;color:#fff;">▶️ 下一步學習</div>
            <div style="padding:10px 14px;">
              <div style="font-size:0.75rem;color:#333;line-height:1.9;">
                <div style="margin-bottom:4px;">→ 進入 Part 3B：現代釀酒科技</div>
                <div style="margin-bottom:4px;">→ 回顧不同產區 vs 烘烤組合差異</div>
                <div>→ 建立自有桶管理記錄表</div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#2E7D32,#388E3C);padding:9px 14px;font-weight:700;font-size:0.83rem;color:#fff;">✅ 學習成就</div>
            <div style="padding:10px 14px;">
              <div style="font-size:0.75rem;color:#333;line-height:1.9;">
                <div style="margin-bottom:4px;">☑️ 理解樹種 / 產區差異</div>
                <div style="margin-bottom:4px;">☑️ 掌握風乾 / 烘烤科學</div>
                <div style="margin-bottom:4px;">☑️ 評估新桶策略風險報酬</div>
                <div style="margin-bottom:4px;">☑️ 認識頂級桶廠工藝</div>
                <div>☑️ 建立決策與評估框架</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ===== 以下開始追加原 Part3B 內容 =====
  {
    type: 'cover',
    title: 'L3-5 Part 3B',
    subtitle: '現代釀酒技術與設備',
    description: '科技革命：21世紀的釀酒創新',
    background: 'linear-gradient(135deg, #4169E1 0%, #6495ED 50%, #87CEEB 100%)',
    icon: '🔬'
  },
  // PLACEHOLDER_PART3B_FULL_CONTENT
  // === Full Part 3B Content (merged) ===
  {
    type: 'intro',
    title: '釀酒科技的數位革命',
    content: '21 世紀釀酒進入「精密化 + 數據驅動」階段：光學 / X 射線 / AI 分選、精密溫控發酵、即時監控、膜分離與濃縮、智慧決策支援，提升一致性並降低風險。',
    image: '/images/modern-winery-technology.jpg'
  },
  {
    type: 'content',
    title: '學習目標：現代釀酒科技',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#BF360C,#E64A19);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🔍</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">現代分選技術</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">掌握光學分選、X-Ray、AI模型原理與限制，理解從人工到AI的效率與精準度躍升。</div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#6A1B9A,#7B1FA2);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🌡️</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">精密發酵控制</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">理解溫控 ±0.1°C、氧管理、自動攪拌/抽皮系統，學習PID預測控制的科學原理。</div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">🍷</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">後處理技術創新</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">評估膜過濾、反滲透、冷凍濃縮技術的品質影響、法規限制與使用邊界。</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#01579B,#0277BD);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">📈</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">數據分析應用</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">探索即時監控如何轉化為風險預測與優化決策，學習數據驅動釀造的最佳實踐。</div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#37474F,#455A64);padding:9px 12px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.2rem;">⚖️</span><div style="color:#fff;font-weight:700;font-size:0.83rem;">傳統與創新的平衡</div>
            </div>
            <div style="padding:8px 12px 10px;font-size:0.75rem;color:#555;line-height:1.75;">理解科技工具如何服務風土表達，認識不同技術的哲學爭議與行業共識邊界。</div>
          </div>
        </div>
      </div>
    `
  },
  {
    type: 'chapter-divider',
    title: '現代分選技術',
    subtitle: '從人工到 AI 的演化',
    description: '科技如何提升葡萄品質控制',
    background: 'linear-gradient(135deg,#FF6347 0%,#FF7F50 100%)',
    icon: '🔍',
    navLabel: '分選技術'
  },
  {
    type: 'intro',
    title: '現代分選技術導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          原料品質是決定葡萄酒品質的第一道關卡。現代分選技術從傳統的人工挑選進化到光學分選、X 射線檢測，甚至 AI 圖像識別，大幅提升了篩選效率與精準度。
        </p>

        <p class="intro-context">
          一顆品質不佳的葡萄可以毀掉一桶酒。傳統人工分選雖然仔細但速度慢（每人每小時僅 100kg）且易疲勞。現代光學分選可達 3-8 噸/小時，精準度 95-97%，讓頂級酒莊在保持品質的同時大幅提升效率。投資雖高（€200K-1.5M），但對品質提升的貢獻不可估量。
        </p>

        <h3 class="section-title">本章探討主題</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🔍 光學分選原理與優勢</h4>
            <p>理解多光譜分析與高速相機如何檢測外觀缺陷，掌握噴氣剔除的精準度，認識 3-8 噸/小時的處理能力</p>
          </div>

          <div class="point-item">
            <h4>⚙️ X 射線內部缺陷檢測</h4>
            <p>學習如何穿透檢測內部缺陷與密度差異，理解為何速度較慢但精準度可達 97-99%，適用於頂級選粒</p>
          </div>

          <div class="point-item">
            <h4>🧠 AI 深度學習應用</h4>
            <p>了解機器學習如何持續優化分選標準，探索地塊/年份指紋資料庫的建立，認識 AI 分選的未來潛力</p>
          </div>

          <div class="point-item">
            <h4>📊 投資報酬率分析</h4>
            <p>評估不同技術的資本支出（€0 至 €1.5M）與運行成本，理解適用規模與成熟度，計算品質提升的價值</p>
          </div>

          <div class="point-item">
            <h4>🏆 Château Margaux 升級案例</h4>
            <p>分析頂級名莊的分選升級決策，了解如何平衡傳統與科技，學習處理效率提升 300% 的實踐經驗</p>
          </div>
        </div>

        <p class="intro-conclusion">
          學習這些技術，您將了解現代酒莊如何在確保原料一致性的同時，運用科技提升效率而不失去品質控制的精準度。這是傳統工藝與現代科技完美結合的典範。
        </p>
      </div>
    `,
    icon: '🔍'
  },
  {
    type: 'content',
    title: '分選技術的演進',
    content: '人工 → 機械 → 光學 → X 射線 → AI 多模態融合；核心價值：提升原料均勻性 + 降低瑕疵風險 + 穩定品質基礎。',
    subsections: [
      { subtitle: '光學分選', content: '高速相機 + 多光譜分析 + 噴氣剔除，3–8 t/h，95–97% 精準度。' },
      { subtitle: 'X 射線分選', content: '穿透檢測內部缺陷 / 密度差；速度較慢成本高，用於頂級選粒。' },
      { subtitle: 'AI 圖像識別', content: '深度學習持續優化標準，建立地塊/年份指紋資料庫。' }
    ]
  },
  {
    type: 'content',
    title: '分選技術綜合比較',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.78rem;color:#666;margin-bottom:10px;text-align:center;">速度 / 精度 / 成本 / 適用場景——從人工到AI的選果技術演進</div>
        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;font-size:0.73rem;">
            <thead>
              <tr style="background:linear-gradient(135deg,#BF360C,#D84315);">
                <th style="color:#fff;padding:7px 10px;text-align:left;font-weight:700;border-right:1px solid rgba(255,255,255,0.2);">技術類型</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">速度</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">精準度</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">資本支出</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;border-right:1px solid rgba(255,255,255,0.2);">適用規模</th>
                <th style="color:#fff;padding:7px 8px;text-align:center;font-weight:600;">成熟度</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background:#FBE9E7;">
                <td style="padding:7px 10px;font-weight:700;color:#BF360C;">👤 人工</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">100 kg/h/人</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#FFF9C4;color:#F57F17;padding:2px 6px;border-radius:4px;font-weight:600;">60–80%</span></td>
                <td style="padding:7px 8px;text-align:center;color:#2E7D32;font-weight:600;">€0</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">任何規模</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#E8F5E9;color:#2E7D32;padding:2px 6px;border-radius:4px;">成熟</span></td>
              </tr>
              <tr style="background:#fff;">
                <td style="padding:7px 10px;font-weight:700;color:#555;">🔀 振動+風力</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">500 kg/h</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#FFF9C4;color:#F57F17;padding:2px 6px;border-radius:4px;font-weight:600;">70–85%</span></td>
                <td style="padding:7px 8px;text-align:center;color:#555;">€20–50K</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">中大型</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#E8F5E9;color:#2E7D32;padding:2px 6px;border-radius:4px;">成熟</span></td>
              </tr>
              <tr style="background:#FBE9E7;">
                <td style="padding:7px 10px;font-weight:700;color:#555;">💡 光學</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">3–8 t/h</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#E8F5E9;color:#2E7D32;padding:2px 6px;border-radius:4px;font-weight:600;">95–97%</span></td>
                <td style="padding:7px 8px;text-align:center;color:#555;">€200–500K</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">大型</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#E8F5E9;color:#2E7D32;padding:2px 6px;border-radius:4px;">成熟</span></td>
              </tr>
              <tr style="background:#fff;">
                <td style="padding:7px 10px;font-weight:700;color:#BF360C;">☢️ X射線</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">1–2 t/h</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#E3F2FD;color:#1565C0;padding:2px 6px;border-radius:4px;font-weight:600;">97–99%</span></td>
                <td style="padding:7px 8px;text-align:center;color:#BF360C;font-weight:600;">€500K–1M</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">頂級莊</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#FFF3E0;color:#E65100;padding:2px 6px;border-radius:4px;">新興</span></td>
              </tr>
              <tr style="background:#FBE9E7;">
                <td style="padding:7px 10px;font-weight:700;color:#1565C0;">🤖 AI分選</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">2–5 t/h</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#E3F2FD;color:#1565C0;padding:2px 6px;border-radius:4px;font-weight:600;">97–99%</span></td>
                <td style="padding:7px 8px;text-align:center;color:#555;">€300–800K</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">高端</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#E3F2FD;color:#1565C0;padding:2px 6px;border-radius:4px;">快速增長</span></td>
              </tr>
              <tr style="background:#fff;">
                <td style="padding:7px 10px;font-weight:700;color:#555;">🔗 多技術組合</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">2–8 t/h</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#E8F5E9;color:#1B5E20;padding:2px 6px;border-radius:4px;font-weight:700;">99%+</span></td>
                <td style="padding:7px 8px;text-align:center;color:#BF360C;font-weight:600;">€500K–1.5M</td>
                <td style="padding:7px 8px;text-align:center;color:#555;">旗艦莊</td>
                <td style="padding:7px 8px;text-align:center;"><span style="background:#F3E5F5;color:#7B1FA2;padding:2px 6px;border-radius:4px;">前沿</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="background:#FBE9E7;border-radius:6px;padding:6px 12px;margin-top:8px;font-size:0.73rem;color:#BF360C;">💡 頂級酒莊趨勢：人工 + 光學 + AI 多重組合，將精準度推至 99%+，每顆葡萄都經過嚴格審視。</div>
      </div>
    `
  },
  {
    type: 'content',
    title: '案例：Château Margaux 分選升級',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#BF360C,#E64A19);border-radius:8px;padding:8px 14px;margin-bottom:10px;">
          <span style="color:rgba(255,255,255,0.75);font-size:0.72rem;">核心挑戰 ｜ Margaux</span>
          <div style="color:#fff;font-size:0.78rem;font-weight:600;margin-top:2px;">傳統精緻 + 現代效率的平衡——如何在不捨棄品質的前提下將分選擴容升級？</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:10px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#BF360C,#E64A19);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">🔍 四層分選流程</div>
            <div style="padding:9px 12px 11px;">
              <div style="margin-bottom:5px;background:#FBE9E7;border-radius:6px;padding:6px 9px;">
                <div style="font-weight:700;color:#BF360C;font-size:0.73rem;margin-bottom:2px;">三層機械預分選</div>
                <div style="font-size:0.7rem;color:#555;">振動篩 → 風選 → 輥式篩選，快速去除枝條/葉片</div>
              </div>
              <div style="margin-bottom:5px;background:#FFF3E0;border-radius:6px;padding:6px 9px;">
                <div style="font-weight:700;color:#E65100;font-size:0.73rem;margin-bottom:2px;">光學主分選</div>
                <div style="font-size:0.7rem;color:#555;">CCD 相機 + 彩色/NIR 分析 → 精準射出瑕疵葡萄</div>
              </div>
              <div style="margin-bottom:5px;background:#E8EAF6;border-radius:6px;padding:6px 9px;">
                <div style="font-weight:700;color:#3949AB;font-size:0.73rem;margin-bottom:2px;">AI 模型微調</div>
                <div style="font-size:0.7rem;color:#555;">根據年份批次數據動態優化分選參數</div>
              </div>
              <div style="background:#E8F5E9;border-radius:6px;padding:6px 9px;">
                <div style="font-weight:700;color:#2E7D32;font-size:0.73rem;margin-bottom:2px;">人工終檢 + 建立批次閉環</div>
                <div style="font-size:0.7rem;color:#555;">最終品質把關，分選數據回饋 AI 持續學習</div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:9px 12px;font-weight:700;font-size:0.82rem;color:#fff;">📈 升級成果</div>
            <div style="padding:9px 12px 11px;">
              <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:6px;margin-bottom:8px;">
                <div style="background:#E8F5E9;border-radius:6px;padding:6px 8px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">處理效率</div>
                  <div style="font-weight:700;color:#1B5E20;font-size:0.88rem;">+300%</div>
                </div>
                <div style="background:#FFF3E0;border-radius:6px;padding:6px 8px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">瑕疵檢出率</div>
                  <div style="font-weight:700;color:#E65100;font-size:0.88rem;">顯著提升</div>
                </div>
                <div style="background:#E3F2FD;border-radius:6px;padding:6px 8px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">酒質穩定性</div>
                  <div style="font-weight:700;color:#1565C0;font-size:0.88rem;">大幅提高</div>
                </div>
                <div style="background:#F3E5F5;border-radius:6px;padding:6px 8px;text-align:center;">
                  <div style="font-size:0.69rem;color:#555;">勞動成本</div>
                  <div style="font-weight:700;color:#6A1B9A;font-size:0.88rem;">顯著下降</div>
                </div>
              </div>
              <div style="background:#FFF8E1;border-radius:6px;padding:6px 10px;font-size:0.71rem;color:#5D4037;line-height:1.65;">
                <strong>批次數據閉環</strong>：每次採收的分選數據回饋至 AI 模型，年份間精準度持續累積提升。
              </div>
            </div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:7px;">
          <div style="background:#FBE9E7;border-radius:6px;padding:7px 8px;font-size:0.7rem;color:#BF360C;line-height:1.55;"><strong>分層導入</strong><br><span style="color:#555;">科技分層降低失敗風險</span></div>
          <div style="background:#E8F5E9;border-radius:6px;padding:7px 8px;font-size:0.7rem;color:#1B5E20;line-height:1.55;"><strong>數據驅動</strong><br><span style="color:#555;">原料數據沉澱強化發酵策略</span></div>
          <div style="background:#E3F2FD;border-radius:6px;padding:7px 8px;font-size:0.7rem;color:#1565C0;line-height:1.55;"><strong>人機協作</strong><br><span style="color:#555;">優於任何單一路徑</span></div>
          <div style="background:#F3E5F5;border-radius:6px;padding:7px 8px;font-size:0.7rem;color:#6A1B9A;line-height:1.55;"><strong>批次追溯</strong><br><span style="color:#555;">為長期品質累積資產</span></div>
        </div>
      </div>
    `
  },
  {
    type: 'chapter-divider',
    title: '精密發酵控制系統',
    subtitle: '從經驗到數據驅動',
    description: '現代發酵監控與自動化技術',
    background: 'linear-gradient(135deg,#9932CC 0%,#BA55D3 100%)',
    icon: '🌡️',
    navLabel: '發酵控制'
  },
  {
    type: 'intro',
    title: '精密發酵控制導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          發酵是葡萄酒釀造最關鍵的階段。現代發酵控制技術將傳統的經驗判斷與精密的感測器、自動化系統結合，實現了前所未有的穩定性與可重現性。
        </p>

        <p class="intro-context">
          溫度差 1°C 可能改變香氣保留與萃取效率，發酵停滯可能導致整桶報廢。現代系統通過多點 PT100 感測器實現 ±0.1°C 精度控制，配合 PID 預測模型自動調節，將發酵過程從「藝術」提升為「可控的科學」。這不是取代釀酒師的經驗，而是讓經驗得以精準執行。
        </p>

        <h3 class="section-title">本章核心內容</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🌡️ 精密溫度監控系統</h4>
            <p>學習多點 PT100 感測器如何實現 ±0.1°C 精度控制，理解夾套與內部冷卻蛇管的協同工作，掌握預測曲線避免溫度峰值</p>
          </div>

          <div class="point-item">
            <h4>📊 即時發酵動力學追蹤</h4>
            <p>理解線上密度計如何即時監測比重與糖度變化（精度 ±0.001），學習 48 小時無下降的停滯預警機制</p>
          </div>

          <div class="point-item">
            <h4>🔄 可編程自動抽皮系統</h4>
            <p>掌握自動抽皮/壓帽的頻率、力度、時間窗口設定，理解如何減少人工波動，強化釀造可重現性</p>
          </div>

          <div class="point-item">
            <h4>🧪 PID 控制與預測模型</h4>
            <p>了解比例-積分-微分控制如何實現精準調節，學習預測模型如何提前應對發酵變化，避免滯後反應</p>
          </div>

          <div class="point-item">
            <h4>🔄 旋轉發酵罐創新技術</h4>
            <p>探索旋轉發酵罐如何提升果皮接觸效率，縮短浸漬週期，理解為何僅適合高價值批次的經濟考量</p>
          </div>
        </div>

        <p class="intro-conclusion">
          掌握這些技術，您將理解現代酒莊如何精準控制發酵過程，在保持傳統風格的同時提升品質穩定性。這是數據驅動釀造的最佳實踐。
        </p>
      </div>
    `,
    icon: '🌡️'
  },
  {
    type: 'content',
    title: '發酵控制技術的革命',
    content: '傳統：手動測量 & 被動調整；現代：多點感測 + PID/預測控制 + 自動攪拌/抽皮策略，將溫度/萃取/微氧化納入統一模型。',
    subsections: [
      { subtitle: '精密溫控系統', content: '多探針 ±0.1°C 精度；夾套 + 內部冷卻蛇管協同；預測曲線避免峰值滯後。' },
      { subtitle: '自動抽皮/壓帽', content: '可編程頻率/力度/時間窗口，減少人工波動，強化可重現性。' },
      { subtitle: '旋轉發酵罐', content: '提升接觸效率，縮短浸漬週期，僅適合高價值批次。' }
    ]
  },
  {
    type: 'content',
    title: '現代發酵監控系統',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.78rem;color:#666;margin-bottom:10px;text-align:center;">關鍵參數 → 早期預警 → 質量保證 — 數據驅動的發酵管理</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#C62828,#D32F2F);padding:10px 14px;">
              <div style="font-size:1.2rem;margin-bottom:3px;">🌡️</div>
              <div style="color:#fff;font-weight:700;font-size:0.88rem;">溫度監控</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;">多點 PT100 感測器</div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;">
                <span style="font-size:0.73rem;color:#555;">監測頻率</span>
                <span style="background:#FFEBEE;color:#C62828;padding:2px 7px;border-radius:10px;font-size:0.69rem;font-weight:600;">連續即時</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;">
                <span style="font-size:0.73rem;color:#555;">精準度</span>
                <span style="background:#E8F5E9;color:#2E7D32;padding:2px 7px;border-radius:10px;font-size:0.69rem;font-weight:700;">±0.1°C</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;">
                <span style="font-size:0.73rem;color:#555;">預警觸發</span>
                <span style="background:#FFEBEE;color:#B71C1C;padding:2px 7px;border-radius:10px;font-size:0.69rem;">超閾值 ±1°C</span>
              </div>
              <div style="margin-top:5px;background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.71rem;color:#E65100;">⚡ 自動冷/熱調節</div>
              <div style="margin-top:6px;font-size:0.71rem;color:#555;line-height:1.7;">影響萃取效率與香氣保留</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:10px 14px;">
              <div style="font-size:1.2rem;margin-bottom:3px;">⚖️</div>
              <div style="color:#fff;font-weight:700;font-size:0.88rem;">比重 / 糖度</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;">線上密度計</div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;">
                <span style="font-size:0.73rem;color:#555;">監測頻率</span>
                <span style="background:#E0F2F1;color:#00695C;padding:2px 7px;border-radius:10px;font-size:0.69rem;font-weight:600;">即時或每日</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;">
                <span style="font-size:0.73rem;color:#555;">精準度</span>
                <span style="background:#E8F5E9;color:#2E7D32;padding:2px 7px;border-radius:10px;font-size:0.69rem;font-weight:700;">±0.001</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;">
                <span style="font-size:0.73rem;color:#555;">預警觸發</span>
                <span style="background:#FFEBEE;color:#B71C1C;padding:2px 7px;border-radius:10px;font-size:0.69rem;">48h 無下降</span>
              </div>
              <div style="margin-top:5px;background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.71rem;color:#E65100;">⚡ 停滯自動預警</div>
              <div style="margin-top:6px;font-size:0.71rem;color:#555;line-height:1.7;">判斷發酵進度與終點</div>
            </div>
          </div>
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#1565C0,#1976D2);padding:10px 14px;">
              <div style="font-size:1.2rem;margin-bottom:3px;">🧪</div>
              <div style="color:#fff;font-weight:700;font-size:0.88rem;">pH 值監控</div>
              <div style="color:rgba(255,255,255,0.8);font-size:0.72rem;">在線電極感測器</div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;">
                <span style="font-size:0.73rem;color:#555;">監測頻率</span>
                <span style="background:#E3F2FD;color:#1565C0;padding:2px 7px;border-radius:10px;font-size:0.69rem;font-weight:600;">每日</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;">
                <span style="font-size:0.73rem;color:#555;">精準度</span>
                <span style="background:#E8F5E9;color:#2E7D32;padding:2px 7px;border-radius:10px;font-size:0.69rem;font-weight:700;">±0.02</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;">
                <span style="font-size:0.73rem;color:#555;">預警觸發</span>
                <span style="background:#FFEBEE;color:#B71C1C;padding:2px 7px;border-radius:10px;font-size:0.69rem;">&gt;4.0 或 &lt;3.0</span>
              </div>
              <div style="margin-top:5px;background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.71rem;color:#E65100;">⚡ 酸度調整建議</div>
              <div style="margin-top:6px;font-size:0.71rem;color:#555;line-height:1.7;">微生物穩定 / 色穩定 / 口感</div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    type: 'chapter-divider',
    title: '後處理技術創新',
    subtitle: '澄清、穩定與濃縮',
    description: '現代技術如何提升葡萄酒品質',
    background: 'linear-gradient(135deg,#20B2AA 0%,#48D1CC 100%)',
    icon: '💧',
    navLabel: '後處理技術'
  },
  {
    type: 'intro',
    title: '後處理技術創新導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          發酵完成後的後處理階段同樣重要。現代技術如膜過濾、反滲透、冷凍濃縮等，為釀酒師提供了更多選擇，但如何在保留風土特色的前提下運用這些技術，仍是一門藝術。
        </p>

        <p class="intro-context">
          後處理技術是把雙面刃。膜過濾可提升穩定性並保留風味，但反滲透濃縮雖能提升濃度卻可能改變原生風土表達。波爾多 60% 的酒莊使用膜過濾，但僅 30% 偶爾使用 RO，5% 試驗冷凍濃縮。技術選擇不僅是科學決策，更涉及釀造哲學、法規限制與倫理邊界。
        </p>

        <h3 class="section-title">本章學習要點</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🧪 膜過濾技術族譜</h4>
            <p>了解 Cross-flow、UF（超濾）、MF（微濾）、NF（納濾）的原理與應用場景，掌握如何降低酒損（1-2%）與化學助劑依賴</p>
          </div>

          <div class="point-item">
            <h4>🔄 反滲透濃縮的爭議</h4>
            <p>評估 RO 技術在 30-80 bar 壓力下分離水分的效果，理解 +2% vol 法規限制，探討「改變組成比例」的風土真實性爭論</p>
          </div>

          <div class="point-item">
            <h4>❄️ 冷凍濃縮的優勢與挑戰</h4>
            <p>掌握低溫物理分離如何實現高香氣保留，理解能耗極高（€0.30-0.80/L）與酒損大（10-25%）的經濟考量</p>
          </div>

          <div class="point-item">
            <h4>📊 不同技術的品質影響</h4>
            <p>分析膜過濾（正向穩定）、RO（濃度提升但香氣流失風險）、冷凍（高保留但成本極高）的綜合評估</p>
          </div>

          <div class="point-item">
            <h4>⚖️ 法規限制與倫理邊界</h4>
            <p>理解歐盟與 AOC 對技術使用的規範，探討「科技工具 vs 風土表達」的哲學辯論，認識行業共識</p>
          </div>
        </div>

        <p class="intro-conclusion">
          學完本章，您將能夠平衡地看待傳統與現代技術的選擇，理解為何某些技術被廣泛接受而另一些仍有爭議，以及如何在科技進步與風土尊重之間找到平衡點。
        </p>
      </div>
    `,
    icon: '💧'
  },
  {
    type: 'content',
    title: '後處理技術的現代化',
    content: '目標：在風土與品種表達前提下提升穩定性與純淨度。\n膜分離 → 精準；冷凍濃縮 → 物理選擇；RO → 謹慎策略工具。',
    subsections: [
      { subtitle: '膜過濾族譜', content: 'Cross-flow/UF/MF/NF：由顆粒截留 → 分子級選擇；降低酒損與化學助劑依賴。' },
      { subtitle: '反滲透 (RO)', content: '30–80 bar 分離水分；可提升濃縮度 / 調整酒精；需遵守法規與風格邊界。' },
      { subtitle: '冷凍濃縮', content: '低溫物理分離，香氣保留佳；能耗與處理速率限制其專案化使用。' }
    ]
  },
  {
    type: 'content',
    title: '後處理技術綜合評估',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="font-size:0.78rem;color:#666;margin-bottom:10px;text-align:center;">投資 / 能耗 / 酒損 / 品質影響 — 波爾多後處理技術的選擇邏輯</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:10px 14px;">
              <div style="font-size:1.2rem;margin-bottom:3px;">🧬</div>
              <div style="color:#fff;font-weight:700;font-size:0.88rem;">膜過濾</div>
              <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:5px;">
                <span style="background:rgba(255,255,255,0.2);color:#fff;font-size:0.65rem;padding:1px 6px;border-radius:8px;">澄清</span>
                <span style="background:rgba(255,255,255,0.2);color:#fff;font-size:0.65rem;padding:1px 6px;border-radius:8px;">蛋白穩定</span>
                <span style="background:rgba(255,255,255,0.2);color:#fff;font-size:0.65rem;padding:1px 6px;border-radius:8px;">微生物控制</span>
              </div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="font-size:0.72rem;color:#555;margin-bottom:5px;">投資：<strong>€200–800K</strong></div>
              <div style="font-size:0.72rem;color:#555;margin-bottom:5px;">成本：<strong>€0.05–0.15/L</strong> | 速度：1–5 KL/h</div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <span style="font-size:0.72rem;color:#555;">酒損</span>
                <span style="background:#E8F5E9;color:#2E7D32;padding:2px 7px;border-radius:10px;font-size:0.69rem;font-weight:700;">1–2%</span>
              </div>
              <div style="background:#E0F2F1;border-radius:5px;padding:4px 8px;font-size:0.71rem;color:#00695C;margin-bottom:6px;">✅ 正向：穩定 + 保留風味</div>
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <span style="font-size:0.7rem;color:#555;">波爾多採用率</span>
                <span style="background:#00695C;color:#fff;padding:2px 8px;border-radius:10px;font-size:0.7rem;font-weight:700;">60%</span>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#E65100,#F4511E);padding:10px 14px;">
              <div style="font-size:1.2rem;margin-bottom:3px;">🔄</div>
              <div style="color:#fff;font-weight:700;font-size:0.88rem;">RO 反滲透濃縮</div>
              <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:5px;">
                <span style="background:rgba(255,255,255,0.2);color:#fff;font-size:0.65rem;padding:1px 6px;border-radius:8px;">濃縮</span>
                <span style="background:rgba(255,255,255,0.2);color:#fff;font-size:0.65rem;padding:1px 6px;border-radius:8px;">酒精調整</span>
              </div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="font-size:0.72rem;color:#555;margin-bottom:5px;">投資：<strong>€300–600K</strong></div>
              <div style="font-size:0.72rem;color:#555;margin-bottom:5px;">成本：<strong>€0.20–0.50/L</strong> | 速度：0.5–2 KL/h</div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <span style="font-size:0.72rem;color:#555;">酒損</span>
                <span style="background:#FFF3E0;color:#E65100;padding:2px 7px;border-radius:10px;font-size:0.69rem;font-weight:700;">5–15%</span>
              </div>
              <div style="background:#FFF3E0;border-radius:5px;padding:4px 8px;font-size:0.71rem;color:#E65100;margin-bottom:6px;">⚠️ 法規 +2% vol 限制</div>
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <span style="font-size:0.7rem;color:#555;">波爾多採用率</span>
                <span style="background:#E65100;color:#fff;padding:2px 8px;border-radius:10px;font-size:0.7rem;font-weight:700;">30%偶用</span>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <div style="background:linear-gradient(135deg,#37474F,#455A64);padding:10px 14px;">
              <div style="font-size:1.2rem;margin-bottom:3px;">❄️</div>
              <div style="color:#fff;font-weight:700;font-size:0.88rem;">冷凍濃縮</div>
              <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:5px;">
                <span style="background:rgba(255,255,255,0.2);color:#fff;font-size:0.65rem;padding:1px 6px;border-radius:8px;">甜酒</span>
                <span style="background:rgba(255,255,255,0.2);color:#fff;font-size:0.65rem;padding:1px 6px;border-radius:8px;">酒精微調</span>
              </div>
            </div>
            <div style="padding:10px 14px 12px;">
              <div style="font-size:0.72rem;color:#555;margin-bottom:5px;">投資：<strong>€300K–1M</strong></div>
              <div style="font-size:0.72rem;color:#555;margin-bottom:5px;">成本：<strong>€0.30–0.80/L</strong> | 速度：0.2–1 KL/h</div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <span style="font-size:0.72rem;color:#555;">酒損</span>
                <span style="background:#FFEBEE;color:#C62828;padding:2px 7px;border-radius:10px;font-size:0.69rem;font-weight:700;">10–25%</span>
              </div>
              <div style="background:#E3F2FD;border-radius:5px;padding:4px 8px;font-size:0.71rem;color:#1565C0;margin-bottom:6px;">✅ 香氣保留率最高</div>
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <span style="font-size:0.7rem;color:#555;">波爾多採用率</span>
                <span style="background:#546E7A;color:#fff;padding:2px 8px;border-radius:10px;font-size:0.7rem;font-weight:700;">5%試驗</span>
              </div>
            </div>
          </div>
        </div>
        <div style="background:#E0F2F1;border-radius:6px;padding:7px 12px;margin-top:8px;font-size:0.73rem;color:#00695C;">💡 策略建議：膜過濾是最廣泛且安全的選擇；RO 是特殊年份的謹慎工具；冷凍濃縮目前仍是前沿實驗。</div>
      </div>
    `
  },
  {
    type: 'interactive-quiz',
    title: '知識檢測：現代釀酒科技',
    questions: [
      { question: '光學分選相較人工最大優勢？', options: ['更低 CAPEX','高速 + 一致 + 高精準','無需任何人員','可檢測內部缺陷'], correct: 1, explanation: '速度 30–50x + 95%+ 精準 + 不受疲勞影響。' },
      { question: '溫控 ±0.1°C 的意義？', options: ['噱頭','精準影響萃取/香氣保持/發酵動力','法規要求','節能唯一手段'], correct: 1, explanation: '萃取與香氣揮發曲線對溫度高度敏感，精準控制提高可重現性。' },
      { question: 'RO 主要爭議點？', options: ['技術不成熟','成本過低','改變組成比例/風土真實性爭論','不合法'], correct: 2, explanation: '討論焦點在「介入是否改變原生表達」。' }
    ]
  },
  {
    type: 'content',
    title: '科技與傳統：整合視角',
    content: '科技=工具，非風格；理性引入遵循：原料瓶頸 → 可量化收益 → 風格一致性維護 → 迭代驗證。',
    subsections: [ { subtitle: '投資優先級', content: '1. 分選 2. 發酵溫控 3. 後處理穩定 4. 數據平台 5. 高階前沿實驗。' } ]
  },
  {
    type: 'content',
    title: 'Part 3B 完成！',
    content: `
      <div style="font-family:'Noto Sans TC',sans-serif;padding:4px 0;">
        <div style="background:linear-gradient(135deg,#4A148C,#7B1FA2);border-radius:12px;padding:13px 18px;margin-bottom:12px;text-align:center;">
          <div style="font-size:1.8rem;margin-bottom:5px;">🔬</div>
          <div style="color:#fff;font-weight:700;font-size:1rem;">Part 3B 完成！</div>
          <div style="color:rgba(255,255,255,0.9);font-size:0.78rem;margin-top:4px;">恭喜完成現代釀酒科技模組！從分選到後處理，您已掌握數據驅動的釀造決策框架。</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;">
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#00695C,#00897B);padding:9px 14px;font-weight:700;font-size:0.83rem;color:#fff;">▶️ 下一步學習</div>
            <div style="padding:10px 14px;">
              <div style="font-size:0.75rem;color:#333;line-height:1.9;">
                <div style="margin-bottom:4px;">→ 回顧各技術 ROI 與風格影響</div>
                <div style="margin-bottom:4px;">→ 建置自家數據指標儀表板</div>
                <div>→ 規劃下一年度投資路線圖</div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
            <div style="background:linear-gradient(135deg,#2E7D32,#388E3C);padding:9px 14px;font-weight:700;font-size:0.83rem;color:#fff;">✅ 學習成就</div>
            <div style="padding:10px 14px;">
              <div style="font-size:0.75rem;color:#333;line-height:1.9;">
                <div style="margin-bottom:4px;">☑️ 掌握核心分選與發酵控制技術</div>
                <div style="margin-bottom:4px;">☑️ 評估膜/濃縮/冷凍技術邊界</div>
                <div style="margin-bottom:4px;">☑️ 建立科技導入決策框架</div>
                <div>☑️ 平衡風土與科技的原則</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
];
export default l35Content


