/**
 * 葡萄牙葡萄酒課程 — 投影片資料
 * 每個 lessonId 對應一組投影片陣列
 */

// ───────────────────────────────────────────────────────────────
//  Level 1 投影片
// ───────────────────────────────────────────────────────────────

// P1M1L1 — 為什麼學葡萄牙葡萄酒？
const P1M1L1_slides = [
  {
    type: 'cover',
    icon: '🇵🇹',
    gradient: 'linear-gradient(135deg, #006600, #1a9b1a)',
    title: '為什麼學葡萄牙葡萄酒？',
    subtitle: 'Level 1 · 第一課',
    points: [
      { icon: '🌍', label: '歐洲最古老產酒國之一', text: '超過 3,000 年葡萄栽培歷史' },
      { icon: '🍷', label: '250+ 原生葡萄品種', text: '全球最高原生品種密度之一' },
      { icon: '📜', label: '世界第一個法定產區', text: 'Douro 1756 年由龐巴爾侯爵劃定，全球最早' },
    ],
  },
  {
    type: 'content',
    icon: '🌍',
    title: '葡萄牙葡萄酒的世界地位',
    html: `
      <p>葡萄牙是歐洲最古老的葡萄酒生產國之一，擁有超過 <strong>3,000 年的葡萄栽培歷史</strong>。即使國土面積只比台灣大兩倍，葡萄牙卻孕育出令世界驚嘆的多樣性。</p>
      <h4>🏅 葡萄牙葡萄酒的三大驕傲</h4>
      <ul>
        <li><strong>全球最早法定產區</strong>：1756 年龐巴爾侯爵劃定 Douro，比法國波爾多還早</li>
        <li><strong>原生品種最豐富</strong>：超過 250 個本土品種，其他國家幾乎看不到</li>
        <li><strong>Porto 與 Madeira</strong>：世界最著名的兩大加烈酒，百年陳年潛力</li>
      </ul>
      <h4>📊 葡萄牙葡萄酒的數字</h4>
      <ul>
        <li>葡萄種植面積：約 <strong>19 萬公頃</strong></li>
        <li>法定 DOC 產區：超過 <strong>30 個</strong></li>
        <li>年產量：約 <strong>7 億公升</strong>，全球前 10 大產酒國</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: '葡萄牙葡萄酒：六大核心特色',
    items: [
      { icon: '🌊', label: '大西洋清爽白酒', desc: 'Vinho Verde 的 Alvarinho，清酸怡人、帶微氣泡', color: '#3498db' },
      { icon: '⛰️', label: '杜羅河谷梯田', desc: '世界遺產 Douro 的片岩梯田，陡峭壯麗，波特酒誕生地', color: '#c0392b' },
      { icon: '🥃', label: 'Porto 波特酒', desc: '全球最著名加烈甜酒，Tawny・Ruby・Vintage 豐富多樣', color: '#8B4513' },
      { icon: '🏝️', label: 'Madeira 馬德拉', desc: '大西洋火山島的氧化加烈酒，可陳年逾百年', color: '#8e44ad' },
      { icon: '🌿', label: '原生品種寶庫', desc: 'Touriga Nacional・Alvarinho・Encruzado 等 250+ 本土品種', color: '#27ae60' },
      { icon: '☀️', label: '南部陽光紅酒', desc: 'Alentejo 的炎熱大陸氣候造就圓潤濃郁的現代風格紅酒', color: '#e67e22' },
    ],
  },
  {
    type: 'quiz',
    question: '世界上第一個法定劃定的葡萄酒產區在哪個國家？',
    options: ['法國（波爾多）', '義大利（托斯卡尼）', '葡萄牙（杜羅河谷）', '西班牙（里奧哈）'],
    answer: 2,
    explanation: '1756 年葡萄牙龐巴爾侯爵創立了高杜羅葡萄酒農業公司，正式劃定 Douro 產區界線，是全球最早的法定葡萄酒產區。',
  },
  {
    type: 'summary',
    message: '恭喜完成第一課！您已了解葡萄牙葡萄酒的全球地位與核心特色。',
    keyPoints: [
      '葡萄牙 1756 年劃定 Douro，是全球最早的法定葡萄酒產區',
      '超過 250 個本土葡萄品種，是全球原生品種最豐富的國家之一',
      '六大核心特色：Vinho Verde 白酒・Douro 紅酒・Porto 波特酒・Madeira 馬德拉・原生品種・Alentejo 紅酒',
    ],
  },
]

// P1M1L2 — 14 大產區地理分布
const P1M1L2_slides = [
  {
    type: 'cover',
    icon: '🗺️',
    gradient: 'linear-gradient(135deg, #006600, #2980b9)',
    title: '14 大產區地理分布：從北到南',
    subtitle: 'Level 1 · 葡萄牙地理概覽',
    points: [
      { icon: '🗺️', label: '14 個官方葡萄酒大區', text: '由 IVV 官方認定，涵蓋本土與島嶼' },
      { icon: '🏔️', label: '地形多樣', text: '從北部高山到南部平原，從大西洋海岸到內陸山地' },
      { icon: '🏝️', label: '兩個島嶼大區', text: 'Madeira 與 Açores（亞速爾）位於大西洋上' },
    ],
  },
  {
    type: 'content',
    icon: '🇵🇹',
    title: '葡萄牙 14 大官方葡萄酒大區',
    html: `
      <p>根據 IVV（葡萄牙葡萄酒研究院）官方認定，葡萄牙共有 <strong>14 個葡萄酒大區</strong>，每個大區下又可含多個 DOC（法定產區）。</p>
      <h4>🗺️ 北部（Norte）</h4>
      <ul>
        <li><strong>Minho</strong>：Vinho Verde 的故鄉，葡萄牙最大 DOC，9 個子產區</li>
        <li><strong>Trás-os-Montes</strong>：葡萄牙東北偏遠山區，大陸型氣候</li>
        <li><strong>Douro / Porto</strong>：世界遺產梯田，波特酒原產地，1756年最早劃定</li>
      </ul>
      <h4>⛰️ 中北部（Centro Norte）</h4>
      <ul>
        <li><strong>Terras de Cister</strong>：包含 Távora-Varosa（葡萄牙最高海拔產區）</li>
        <li><strong>Beira Atlântico</strong>：包含 Bairrada 與 Dão</li>
        <li><strong>Terras do Dão</strong>：花崗岩高地，Dão DOC 精華</li>
        <li><strong>Terras da Beira</strong>：包含 Beira Interior，山地嚴峻</li>
      </ul>
      <h4>🌊 中部西海岸</h4>
      <ul>
        <li><strong>Lisboa</strong>：里斯本周邊 9 個子產區，土壤多元</li>
        <li><strong>Tejo</strong>：泰加斯河谷，舊稱 Ribatejo</li>
        <li><strong>Península de Setúbal</strong>：Moscatel de Setúbal 甜酒著名</li>
      </ul>
      <h4>☀️ 南部（Sul）</h4>
      <ul>
        <li><strong>Alentejo</strong>：廣大平原，8 個子產區，近代發展最快</li>
        <li><strong>Algarve</strong>：最南端，4 個 DOC，旅遊度假葡萄酒</li>
      </ul>
      <h4>🏝️ 島嶼（Ilhas）</h4>
      <ul>
        <li><strong>Madeira</strong>：大西洋火山島，氧化加烈酒聞名世界</li>
        <li><strong>Açores</strong>：亞速爾群島，火山玄武岩，Pico 島 DOC</li>
      </ul>
    `,
  },
  {
    type: 'map',
    title: '葡萄牙產區全覽地圖',
    description: '從 Minho（最北）到 Algarve（最南），14 大葡萄酒大區的地理分布——大西洋氣候帶 vs. 大陸型氣候帶',
    mapRegions: ['Vinho Verde', 'Douro', 'Dão', 'Bairrada', 'Alentejo', 'Algarve', 'Lisboa', 'DoTejo'],
  },,

  {
    type: 'compare',
    title: '南北差異：葡萄牙的氣候與風格對比',
    items: [
      { icon: '🌧️', label: '北部（Minho / Douro）', desc: '大西洋濕潤，年雨量高達 1,500mm，清爽酸性白酒', color: '#3498db' },
      { icon: '⛰️', label: '中部（Dão / Bairrada）', desc: '山地屏障，大陸型，花崗岩土壤，結構感紅酒', color: '#7f8c8d' },
      { icon: '☀️', label: '南部（Alentejo / Algarve）', desc: '地中海型，乾熱，年雨量低於 500mm，豐腴圓潤紅酒', color: '#e67e22' },
      { icon: '🏝️', label: '島嶼（Madeira / Açores）', desc: '大西洋海洋性，火山土壤，加烈酒與特殊白酒', color: '#8e44ad' },
    ],
  },
  {
    type: 'portugal-regions-overview',
    title: '🌍 葡萄牙 14 大 DOC 互動探索',
    description: '點選任一 DOC 查看詳細資訊：Minho/Douro/Dão/Bairrada/Lisboa/Tejo/Setúbal/Alentejo/Algarve/Madeira/Açores 等。含氣候類型、主要品種、酒款風格、留象酒款與必訪酒莊。'
  },
  {
    type: 'quiz',
    question: '以下哪個是葡萄牙最大的 DOC（面積最大的法定產區）？',
    options: ['Douro', 'Alentejo', 'Vinho Verde', 'Dão'],
    answer: 2,
    explanation: 'Vinho Verde 位於葡萄牙西北部的 Minho 大區，是葡萄牙面積最大的 DOC，覆蓋約 34,000 公頃。',
  },
  {
    type: 'quiz',
    question: '在「portugal-regions-overview」探索中，以下哪個葡萄牙產區位於大西洋火山島上、以加烈酒關名于世？',
    options: ['Dão', 'Bairrada', 'Madeira', 'Vinho Verde'],
    answer: 2,
    explanation: 'Madeira（馬德拉島）位於葡萄牙以西 1,000 公里的大西洋火山島上，以同名加烈酒 Madeira 聞名全球。獨特的 estufagem 加熱工藝讓 Madeira 產生焦糖、堅果、柑橘皮香氣，並擁有詸異的 100+ 年陳年潛力。另一個島嶼產區 Açores 亦位於大西洋。',
  },
  {
    type: 'summary',
    message: '恭喜完成第二課！您已掌握葡萄牙 14 大官方葡萄酒大區的地理分布。',
    keyPoints: [
      '葡萄牙共有 14 個官方葡萄酒大區，從北方的 Minho 到南方的 Algarve',
      '兩個島嶼產區 Madeira 和 Açores 位於大西洋上',
      '從北到南，氣候從大西洋濕潤轉為地中海乾熱，風格差異巨大',
    ],
  },
]

// P1M1L3 — 三大氣候帶
const P1M1L3_slides = [
  {
    type: 'cover',
    icon: '🌤️',
    gradient: 'linear-gradient(135deg, #006600, #3498db)',
    title: '三大氣候帶：大西洋・大陸・地中海',
    subtitle: 'Level 1 · 葡萄牙氣候概覽',
    points: [
      { icon: '🌊', label: '大西洋氣候', text: '西北部，潮濕、涼爽，出產清爽酸性白酒' },
      { icon: '🏔️', label: '大陸型氣候', text: '中部山區，夏熱冬寒，溫差大，適合紅酒' },
      { icon: '☀️', label: '地中海氣候', text: '南部和東部，乾熱，高日照，適合豐腴紅酒' },
    ],
  },
  {
    type: 'content',
    icon: '🌊',
    title: '大西洋氣候（Atlantic Climate）',
    html: `
      <p>葡萄牙西北部受<strong>大西洋的強烈影響</strong>，形成溫和濕潤的氣候。</p>
      <h4>📍 主要產區</h4>
      <ul>
        <li><strong>Minho（Vinho Verde）</strong>：最典型的大西洋氣候</li>
        <li><strong>Bairrada</strong>：受大西洋影響，黏土石灰岩土壤</li>
        <li><strong>Lisboa 西部</strong>：Colares 等靠海產區</li>
      </ul>
      <h4>🌡️ 氣候特徵</h4>
      <ul>
        <li>年雨量：<strong>1,000–1,500mm</strong>（全國最高）</li>
        <li>夏季涼爽（20–25°C），冬季溫和（7–12°C）</li>
        <li>濕度高，黴菌病害風險較高</li>
        <li>適合：<strong>高酸、清爽、輕盈的白酒與氣泡酒</strong></li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🏔️',
    title: '大陸型氣候（Continental Climate）',
    html: `
      <p>葡萄牙中部的山地屏障（Serra da Estrela 等）隔絕了大西洋的影響，形成<strong>大陸型氣候</strong>。</p>
      <h4>📍 主要產區</h4>
      <ul>
        <li><strong>Douro</strong>：山脈東側，夏季炎熱乾燥，冬季嚴寒</li>
        <li><strong>Dão</strong>：Serra da Estrela 西麓，溫差大</li>
        <li><strong>Trás-os-Montes</strong>：東北偏遠山區，最極端的大陸氣候</li>
      </ul>
      <h4>🌡️ 氣候特徵</h4>
      <ul>
        <li>年溫差大：夏季可達 <strong>35–40°C</strong>，冬季可降至 <strong>-5°C</strong></li>
        <li>年雨量：<strong>500–800mm</strong>（多為冬季降雨）</li>
        <li>乾燥夏季集中成熟期，有利於色素與糖分積累</li>
        <li>適合：<strong>結構感強、色深、單寧充足的紅酒</strong></li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '☀️',
    title: '地中海氣候（Mediterranean Climate）',
    html: `
      <p>葡萄牙南部（Alentejo、Algarve）和東部受<strong>地中海氣候</strong>支配，炎熱乾燥。</p>
      <h4>📍 主要產區</h4>
      <ul>
        <li><strong>Alentejo</strong>：廣大平原，是葡萄牙最典型的地中海氣候</li>
        <li><strong>Algarve</strong>：最南端，氣候最溫暖</li>
        <li><strong>Setúbal 半島</strong>：受大西洋調節，但仍偏暖</li>
      </ul>
      <h4>🌡️ 氣候特徵</h4>
      <ul>
        <li>年雨量：<strong>400–600mm</strong>（主要集中在冬季）</li>
        <li>夏季漫長酷熱，日照充足，溫度可超過 <strong>40°C</strong></li>
        <li>Alentejo 年日照超過 <strong>3,000 小時</strong></li>
        <li>適合：<strong>酒精度高、圓潤豐腴的紅酒</strong>，現代風格</li>
      </ul>
    `,
  },
  {
    type: 'quiz',
    question: 'Vinho Verde 所在的 Minho 大區屬於哪種氣候帶？',
    options: ['地中海氣候', '大陸型氣候', '大西洋氣候', '熱帶氣候'],
    answer: 2,
    explanation: 'Minho 大區緊鄰大西洋，受海洋影響強烈，屬於大西洋氣候，年雨量高達 1,500mm，使 Vinho Verde 保持清新高酸的特色。',
  },
  {
    type: 'summary',
    message: '恭喜完成第三課！您已掌握葡萄牙三大氣候帶及其對葡萄酒風格的影響。',
    keyPoints: [
      '大西洋氣候（西北部）：潮濕涼爽，出產 Vinho Verde 等清爽白酒',
      '大陸型氣候（中部山區）：溫差大，出產 Douro・Dão 等結構感紅酒',
      '地中海氣候（南部）：炎熱乾燥，出產 Alentejo 豐腴紅酒',
    ],
  },
]

// P1M1L4 — 土壤類型
const P1M1L4_slides = [
  {
    type: 'cover',
    icon: '🪨',
    gradient: 'linear-gradient(135deg, #7f4200, #c8860a)',
    title: '土壤類型：花崗岩・片岩・石灰岩・砂土',
    subtitle: 'Level 1 · 葡萄牙風土',
    points: [
      { icon: '⚫', label: '片岩（Xisto/Schist）', text: 'Douro 梯田的靈魂，強迫葡萄根深扎尋水' },
      { icon: '⚪', label: '花崗岩（Granite）', text: 'Minho 與 Dão 的主要土壤，賦予礦物質感' },
      { icon: '🟡', label: '石灰岩（Limestone）', text: 'Bairrada 的黏土石灰岩，支撐 Baga 高酸結構' },
    ],
  },
  {
    type: 'compare',
    title: '四大主要土壤與對應產區',
    items: [
      { icon: '⚫', label: '片岩（Xisto）', desc: 'Douro 河谷主要土壤。保熱性強，葡萄根可穿透深達 20 公尺尋找水分，賦予礦物質與煙燻風味', color: '#555' },
      { icon: '⚪', label: '花崗岩（Granito）', desc: 'Minho、Dão、Trás-os-Montes。排水性好，賦予葡萄酒清爽活潑的礦物質感與細膩口感', color: '#aaa' },
      { icon: '🟡', label: '黏土石灰岩', desc: 'Bairrada、Lisboa 部分地區。高黏性，保水性佳，賦予 Baga 品種紮實的酸度與單寧', color: '#c8860a' },
      { icon: '🟠', label: '砂土（Areia）', desc: 'Colares 沿海地區。砂丘保護葡萄藤免受根瘤蚜侵害，是 Ramisco 古老品種的最後避難所', color: '#e67e22' },
    ],
  },
  {
    type: 'content',
    icon: '⚫',
    title: 'Douro 的片岩土壤：波特酒的基石',
    html: `
      <p>Douro 河谷最重要的土壤是<strong>片岩（Xisto / Schist）</strong>——一種深灰黑色、薄層狀的變質岩。</p>
      <h4>🌱 為什麼片岩對 Douro 如此重要？</h4>
      <ul>
        <li><strong>保熱性極強</strong>：白天吸收太陽熱能，夜間緩慢釋放，延長葡萄成熟期</li>
        <li><strong>垂直裂縫</strong>：葡萄根可穿透深達 10–20 公尺，尋找深層地下水</li>
        <li><strong>貧瘠土壤</strong>：低產但高濃縮，賦予波特酒與 Douro 紅酒深厚的果實集中度</li>
        <li><strong>礦物質感</strong>：帶來獨特的石墨、礦物質、香料複雜性</li>
      </ul>
      <p>正是這種嚴苛的土壤條件，在 Douro 陡峭梯田上創造出世界級的葡萄酒。</p>
    `,
  },
  {
    type: 'quiz',
    question: 'Douro 河谷最主要的土壤類型是什麼？',
    options: ['石灰岩', '砂土', '花崗岩', '片岩'],
    answer: 3,
    explanation: '片岩（Xisto/Schist）是 Douro 河谷的主要土壤，保熱性強且垂直裂縫允許葡萄根深扎，是波特酒品質的重要基礎。',
  },
  {
    type: 'summary',
    message: '恭喜完成第四課！您已了解葡萄牙四大主要土壤類型及其影響。',
    keyPoints: [
      '片岩（Xisto）是 Douro 的靈魂土壤，保熱且促使深根，賦予礦物質感',
      '花崗岩土壤遍布 Minho 和 Dão，賦予清爽礦物質感',
      '黏土石灰岩在 Bairrada，支撐 Baga 的高酸單寧結構',
      'Colares 的砂土使葡萄藤免受根瘤蚜侵害',
    ],
  },
]

// P1M2L1 — 分級制度
const P1M2L1_slides = [
  {
    type: 'cover',
    icon: '📜',
    gradient: 'linear-gradient(135deg, #8B0000, #c0392b)',
    title: 'DOC・IGP・Vinho Regional — 葡萄牙分級制度',
    subtitle: 'Level 1 · 第五課',
    points: [
      { icon: '📜', label: 'DOC / DOP', text: '最高等級，法定產區嚴格管制，原名 VQPRD' },
      { icon: '🗺️', label: 'IGP / Vinho Regional', text: '地理標誌，較寬鬆，允許更多品種與風格' },
      { icon: '🍷', label: 'Vinho', text: '最基礎等級，無產區限制' },
    ],
  },
  {
    type: 'content',
    icon: '📊',
    title: '葡萄牙葡萄酒分級金字塔',
    html: `
      <p>葡萄牙的葡萄酒分級制度與 EU 規範接軌，分三個主要等級：</p>
      <h4>🥇 DOC（Denominação de Origem Controlada）= DOP</h4>
      <ul>
        <li>最高等級，等同於 EU 的 <strong>DOP（Protected Designation of Origin）</strong></li>
        <li>嚴格限定：產區範圍・允許品種・最低酒精度・最高產量・釀造方式</li>
        <li>葡萄牙本土共有超過 <strong>30 個 DOC</strong>，如 Douro DOC・Vinho Verde DOC・Dão DOC・Alentejo DOC</li>
        <li>在歐盟框架下也可標示為 <strong>DOP</strong></li>
      </ul>
      <h4>🥈 IGP（Indicação Geográfica Protegida）= Vinho Regional</h4>
      <ul>
        <li>等同於 EU 的 <strong>IGP（Protected Geographical Indication）</strong></li>
        <li>比 DOC 寬鬆：允許更多品種、更大產區範圍</li>
        <li>葡萄牙有 <strong>14 個 Vinho Regional</strong>，如 Alentejano・Minho・Duriense</li>
        <li>許多創新酒莊選擇 IGP 標示，以突破 DOC 品種規定限制</li>
      </ul>
      <h4>🥉 Vinho（簡單佐餐酒）</h4>
      <ul>
        <li>無產區限制，允許跨地區混調</li>
        <li>最基礎等級，以「Vinho」標示</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: '葡萄牙 vs. 法國 vs. 義大利：分級比較',
    items: [
      { icon: '🇵🇹', label: '葡萄牙', desc: 'DOC / DOP → IGP / Vinho Regional → Vinho', color: '#006600' },
      { icon: '🇫🇷', label: '法國', desc: 'AOC / AOP → IGP → Vin de France', color: '#0055A4' },
      { icon: '🇮🇹', label: '義大利', desc: 'DOCG → DOC → IGT → Vino da Tavola', color: '#009246' },
      { icon: '📋', label: '共同點', desc: '都是 EU 框架下的 DOP（Protected Designation of Origin）最高等級', color: '#8e44ad' },
    ],
  },
  {
    type: 'quiz',
    question: 'Vinho Verde 是哪個等級的葡萄牙葡萄酒？',
    options: ['IGP（Vinho Regional）', 'DOC（法定產區）', 'Vinho（簡單佐餐酒）', 'DOP 以外的等級'],
    answer: 1,
    explanation: 'Vinho Verde 是葡萄牙重要的 DOC（法定產區），規範了產區範圍、允許品種及釀造方式。注意：「Vinho Verde」意為「綠酒」，不代表等級，而是 DOC 名稱。',
  },
  {
    type: 'summary',
    message: '恭喜完成第五課！您已掌握葡萄牙葡萄酒分級制度。',
    keyPoints: [
      'DOC = DOP：最高等級，嚴格管制產區與品種',
      'IGP = Vinho Regional：中間等級，規定較寬鬆，允許更多彈性',
      'Vinho：基礎等級，無產區限制',
      '葡萄牙有超過 30 個 DOC 和 14 個 Vinho Regional',
    ],
  },
]

// P1M2L2 — 酒標解讀
const P1M2L2_slides = [
  {
    type: 'cover',
    icon: '🏷️',
    gradient: 'linear-gradient(135deg, #2c3e50, #4a4a4a)',
    title: '酒標解讀：如何看懂一瓶葡萄牙酒',
    subtitle: 'Level 1 · 第六課',
    points: [
      { icon: '🏷️', label: '產區名稱', text: 'DOC 產區即代表品質保證' },
      { icon: '📅', label: '年份（Colheita）', text: '葡萄採收年份，影響風格與陳年潛力' },
      { icon: '🍇', label: '品種（Casta/Castas）', text: '可能標示單一或多個品種' },
    ],
  },
  {
    type: 'content',
    icon: '🔍',
    title: '酒標上的重要資訊',
    html: `
      <h4>📋 必須標示的資訊</h4>
      <ul>
        <li><strong>葡萄酒類別</strong>：Vinho Tinto（紅酒）/ Vinho Branco（白酒）/ Vinho Rosado（粉紅酒）</li>
        <li><strong>酒精濃度</strong>：以 % vol. 標示</li>
        <li><strong>容量</strong>：通常 750ml</li>
        <li><strong>產地</strong>：Produto de Portugal（葡萄牙製造）</li>
        <li><strong>生產商</strong>：酒莊名稱或酒商名稱</li>
      </ul>
      <h4>📋 常見標示</h4>
      <ul>
        <li><strong>Denominação de Origem Controlada</strong>：DOC 法定產區</li>
        <li><strong>Quinta（莊園）/ Herdade（莊園）</strong>：單一酒莊葡萄酒</li>
        <li><strong>Colheita（年份）</strong>：葡萄採收年份</li>
        <li><strong>Reserva</strong>：特選等級（各 DOC 有不同定義，通常需更長陳年）</li>
        <li><strong>Grande Reserva</strong>：最高特選等級</li>
        <li><strong>LBV（Late Bottled Vintage）</strong>：波特酒特殊術語</li>
      </ul>
    `,
  },
  {
    type: 'quiz',
    question: '葡萄牙酒標上的「Vinho Tinto」是指什麼？',
    options: ['白葡萄酒', '紅葡萄酒', '粉紅葡萄酒', '氣泡葡萄酒'],
    answer: 1,
    explanation: '葡萄牙語中：Tinto = 紅（紅酒），Branco = 白（白酒），Rosado = 粉紅（粉紅酒），Espumante = 氣泡（氣泡酒）。',
  },
  {
    type: 'summary',
    message: '恭喜完成第六課！您已掌握葡萄牙酒標的基本解讀方法。',
    keyPoints: [
      'Vinho Tinto = 紅酒，Branco = 白酒，Rosado = 粉紅酒',
      'Quinta / Herdade = 莊園，代表單一產地',
      'Reserva / Grande Reserva = 特選等級，品質更高',
      'DOC 名稱是最重要的品質指標',
    ],
  },
]

// P1M3L1 — 五大紅品種
const P1M3L1_slides = [
  {
    type: 'cover',
    icon: '🍇',
    gradient: 'linear-gradient(135deg, #8B0000, #c0392b)',
    title: '五大紅品種',
    subtitle: 'Level 1 · 葡萄牙核心葡萄品種',
    points: [
      { icon: '🏆', label: 'Touriga Nacional', text: '葡萄牙最尊貴的品種，波特酒核心，也是頂級 Douro 紅酒的主力' },
      { icon: '🌿', label: 'Touriga Franca', text: 'Douro 種植面積最大的品種，結構優雅，多果香' },
      { icon: '🔴', label: 'Tinta Roriz', text: '即西班牙的 Tempranillo，Douro 與 Dão 的重要品種' },
    ],
  },
  {
    type: 'compare',
    title: '葡萄牙五大核心紅品種',
    items: [
      { icon: '🏆', label: 'Touriga Nacional', desc: '最尊貴的葡萄牙品種。深色、高單寧、花香複雜。波特酒首選，也是頂級 Douro DOC 紅酒的靈魂', color: '#8B0000' },
      { icon: '🍓', label: 'Touriga Franca', desc: 'Douro 種植最廣的品種。結構均衡、優雅、多紅果與花香，低產高質，常與 Touriga Nacional 混調', color: '#c0392b' },
      { icon: '🔴', label: 'Tinta Roriz', desc: '即西班牙 Tempranillo。葡萄牙叫 Aragonez（Alentejo）或 Roriz（Douro）。紅果芬芳，中等單寧', color: '#922B21' },
      { icon: '🍒', label: 'Trincadeira', desc: '遍布葡萄牙中南部。高酸高色，帶辛香料特色，常見於 Alentejo 混調酒款', color: '#641E16' },
      { icon: '🍄', label: 'Baga', desc: 'Bairrada 的靈魂品種。極高酸度與單寧，陳年後展現複雜皮革、泥土、幹花香氣', color: '#4A235A' },
    ],
  },
  {
    type: 'douro-grapes',
    title: '🍇 Douro 五大紅品種互動檔案',
    description: '點選 Touriga Nacional / Touriga Franca / Tinta Roriz / Trincadeira / Baga 查看詳細品種檔案：在 Douro 中的角色、結構、香氣、代表酒款。了解為何這五個品種是葡萄牙高級酒款的靈魂。',
  },
  {
    type: 'quiz',
    question: '「Touriga Nacional」主要種植在哪個產區，是波特酒的核心品種？',
    options: ['Alentejo', 'Douro / Porto', 'Vinho Verde', 'Lisboa'],
    answer: 1,
    explanation: 'Touriga Nacional 是葡萄牙最尊貴的品種，主要種植在 Douro 河谷，是波特酒（Porto）最重要的品種之一，也是頂級 Douro DOC 紅酒的靈魂。',
  },
  {
    type: 'quiz',
    question: '在「douro-grapes」品種檔案中，葡萄牙的「Tinta Roriz / Aragonez」與西班牙哪個品種是同一個葡萄？',
    options: ['Garnacha', 'Mencía', 'Tempranillo', 'Monastrell'],
    answer: 2,
    explanation: 'Tinta Roriz（Douro 名稱）與 Aragonez（Alentejo 名稱）都是西班牙 Tempranillo 的葡萄牙同名。這是伊比利亞半島最重要的跨國品種之一，在 Douro 貢獻結構與陳年能力，在 Alentejo 則表現為豐富果香、柔和單寧。',
  },
  {
    type: 'summary',
    message: '恭喜完成第七課！您已掌握葡萄牙五大核心紅品種。',
    keyPoints: [
      'Touriga Nacional：葡萄牙最尊貴品種，深色花香，波特酒核心',
      'Touriga Franca：Douro 種植最廣，優雅均衡',
      'Tinta Roriz / Aragonez：等同西班牙 Tempranillo',
      'Trincadeira：高酸色深，遍布南部',
      'Baga：Bairrada 靈魂，高酸高單寧，陳年佳',
    ],
  },
]

// P1M3L2 — 五大白品種
const P1M3L2_slides = [
  {
    type: 'cover',
    icon: '🍾',
    gradient: 'linear-gradient(135deg, #7a6c1a, #c9b45c)',
    title: '五大白品種',
    subtitle: 'Level 1 · 葡萄牙核心白葡萄品種',
    points: [
      { icon: '⭐', label: 'Alvarinho', text: '葡萄牙最國際知名的白品種，Vinho Verde 的Monção/Melgaço 子產區特產' },
      { icon: '🍋', label: 'Arinto', text: '高酸度，礦物質感強，遍布全葡萄牙，適合陳年' },
      { icon: '🌸', label: 'Encruzado', text: 'Dão 的白酒靈魂，芳香複雜，陳年潛力出眾' },
    ],
  },
  {
    type: 'compare',
    title: '葡萄牙五大核心白品種',
    items: [
      { icon: '⭐', label: 'Alvarinho', desc: '即西班牙的 Albariño。葡萄牙出生地在 Minho 的 Monção/Melgaço。濃郁芳香，桃子柑橘，天然高酸，全球最知名的葡萄牙白品種', color: '#7a6c1a' },
      { icon: '🍋', label: 'Arinto', desc: '高酸度品種，礦物質感突出。Bucelas DOC 的主要品種，也廣泛用於 Lisboa・Alentejo・Algarve 的混調白酒。陳年後複雜度大增', color: '#c9b45c' },
      { icon: '🌸', label: 'Encruzado', desc: 'Dão 的旗艦白品種。芳香繁複，結構優雅，陳年後展現奶油、堅果、礦物質複雜性，可媲美布根地白酒', color: '#9b8c3a' },
      { icon: '🌿', label: 'Fernão Pires', desc: '葡萄牙種植面積最廣的白品種（尤其在 Tejo 與 Lisboa）。芳香易飲，帶茴香花香，適合年輕清爽型白酒', color: '#27ae60' },
      { icon: '🌻', label: 'Loureiro', desc: 'Vinho Verde 的重要品種（Lima 子產區）。名稱意為「月桂樹」，帶花香蜂蜜柑橘特色，清爽怡人', color: '#f4d03f' },
    ],
  },
  {
    type: 'quiz',
    question: 'Alvarinho（Albariño）最重要的葡萄牙產區在哪裡？',
    options: ['Dão', 'Vinho Verde 的 Monção/Melgaço 子產區', 'Douro', 'Alentejo'],
    answer: 1,
    explanation: 'Alvarinho 是 Vinho Verde DOC 中 Monção 和 Melgaço 子產區的特產品種，在此地展現最高品質。同樣品種在西班牙稱為 Albariño。',
  },
  {
    type: 'summary',
    message: '恭喜完成第八課！您已掌握葡萄牙五大核心白品種。',
    keyPoints: [
      'Alvarinho（= Albariño）：全球最知名的葡萄牙白品種，Minho 特產',
      'Arinto：高酸礦物，陳年佳，遍布全葡萄牙',
      'Encruzado：Dão 旗艦白品種，堪比布根地',
      'Fernão Pires：種植最廣，芳香易飲',
      'Loureiro：Vinho Verde 的花香代表',
    ],
  },
]

// P1M3L3 — 品種 × 產區對應
const P1M3L3_slides = [
  {
    type: 'cover',
    icon: '🗺️',
    gradient: 'linear-gradient(135deg, #006600, #8B0000)',
    title: '品種 × 產區對應地圖',
    subtitle: 'Level 1 · 整合記憶',
    points: [
      { icon: '🗺️', label: '品種與產區連結', text: '每個產區有其標誌性品種，幫助記憶與識別' },
      { icon: '🔄', label: '同一品種，不同名', text: '有些品種在不同產區有不同名稱（如 Roriz / Aragonez）' },
    ],
  },
  {
    type: 'map',
    title: '葡萄牙品種 × 產區分布地圖',
    description: '主要品種的核心地理：Alvarinho（Vinho Verde 北部）→ Touriga Nacional（Douro/Dão）→ Aragonez（Alentejo）→ Moscatel（Setúbal）',
    mapRegions: ['Vinho Verde', 'Douro', 'Dão', 'Alentejo', 'DoTejo'],
  },,

  {
    type: 'content',
    icon: '📊',
    title: '品種 × 產區對應表',
    html: `
      <h4>🍇 紅品種 × 主要產區</h4>
      <table style="width:100%;border-collapse:collapse;font-size:0.9em">
        <tr style="background:#8B0000;color:white">
          <th style="padding:8px;text-align:left">品種</th>
          <th style="padding:8px;text-align:left">主要產區</th>
          <th style="padding:8px;text-align:left">特色</th>
        </tr>
        <tr style="background:#f9f9f9">
          <td style="padding:6px">Touriga Nacional</td>
          <td style="padding:6px">Douro, Porto, Dão</td>
          <td style="padding:6px">花香複雜, 高單寧</td>
        </tr>
        <tr>
          <td style="padding:6px">Touriga Franca</td>
          <td style="padding:6px">Douro</td>
          <td style="padding:6px">優雅均衡, 紅果</td>
        </tr>
        <tr style="background:#f9f9f9">
          <td style="padding:6px">Tinta Roriz / Aragonez</td>
          <td style="padding:6px">Douro, Dão, Alentejo</td>
          <td style="padding:6px">紅果, 中等單寧</td>
        </tr>
        <tr>
          <td style="padding:6px">Baga</td>
          <td style="padding:6px">Bairrada</td>
          <td style="padding:6px">高酸高單寧, 陳年佳</td>
        </tr>
        <tr style="background:#f9f9f9">
          <td style="padding:6px">Trincadeira</td>
          <td style="padding:6px">Alentejo, Ribatejo</td>
          <td style="padding:6px">高色度, 辛香料</td>
        </tr>
      </table>
      <h4 style="margin-top:16px">🍾 白品種 × 主要產區</h4>
      <table style="width:100%;border-collapse:collapse;font-size:0.9em">
        <tr style="background:#7a6c1a;color:white">
          <th style="padding:8px;text-align:left">品種</th>
          <th style="padding:8px;text-align:left">主要產區</th>
          <th style="padding:8px;text-align:left">特色</th>
        </tr>
        <tr style="background:#f9f9f9">
          <td style="padding:6px">Alvarinho</td>
          <td style="padding:6px">Vinho Verde (Monção)</td>
          <td style="padding:6px">芳香濃郁, 高酸</td>
        </tr>
        <tr>
          <td style="padding:6px">Arinto</td>
          <td style="padding:6px">Bucelas, Lisboa, Alentejo</td>
          <td style="padding:6px">高酸, 礦物質</td>
        </tr>
        <tr style="background:#f9f9f9">
          <td style="padding:6px">Encruzado</td>
          <td style="padding:6px">Dão</td>
          <td style="padding:6px">芳香複雜, 陳年佳</td>
        </tr>
        <tr>
          <td style="padding:6px">Fernão Pires</td>
          <td style="padding:6px">Tejo, Lisboa</td>
          <td style="padding:6px">芳香易飲</td>
        </tr>
        <tr style="background:#f9f9f9">
          <td style="padding:6px">Loureiro</td>
          <td style="padding:6px">Vinho Verde (Lima)</td>
          <td style="padding:6px">花香蜂蜜</td>
        </tr>
      </table>
    `,
  },
  {
    type: 'quiz',
    question: 'Baga 品種主要種植在哪個葡萄牙產區？',
    options: ['Douro', 'Alentejo', 'Bairrada', 'Vinho Verde'],
    answer: 2,
    explanation: 'Baga 是 Bairrada DOC 的靈魂品種，以極高酸度和單寧著稱，陳年後可展現複雜的皮革、泥土和乾花香氣。',
  },
  {
    type: 'summary',
    message: '恭喜完成第九課！您已建立葡萄牙品種與產區的連結。',
    keyPoints: [
      '紅品種：Touriga Nacional（Douro）・Baga（Bairrada）・Trincadeira（Alentejo）',
      '白品種：Alvarinho（Vinho Verde）・Encruzado（Dão）・Arinto（Bucelas）',
      '同一品種可能有不同名：Tinta Roriz = Aragonez = Tempranillo',
    ],
  },
]

// P1M4L1 — Douro / Porto 快覽
const P1M4L1_slides = [
  {
    type: 'cover',
    icon: '⛰️',
    gradient: 'linear-gradient(135deg, #8B0000, #c0392b)',
    title: 'Douro & Porto — 世界遺產梯田葡萄園',
    subtitle: 'Level 1 · 第十課',
    points: [
      { icon: '🏛️', label: '1756 年劃定', text: '全球最早的法定葡萄酒產區，由龐巴爾侯爵設立' },
      { icon: '🏆', label: 'UNESCO 世界遺產', text: '2001 年高杜羅葡萄酒產區獲列世界遺產' },
      { icon: '🥃', label: '波特酒原產地', text: '全球最著名加烈甜酒的唯一合法產地' },
    ],
  },
  {
    type: 'content',
    icon: '🏛️',
    title: 'Douro — 歷史、地理與子產區',
    html: `
      <p>Douro 是葡萄牙最具歷史意義的產區，1756 年成為<strong>全球第一個法定葡萄酒產區</strong>。</p>
      <h4>🗺️ 三個子產區</h4>
      <ul>
        <li><strong>Baixo Corgo（低科爾戈）</strong>：最靠近海洋，雨量相對較多，紅酒清爽鮮活，常作波特酒基酒</li>
        <li><strong>Cima Corgo（上科爾戈）</strong>：氣候更加大陸型，是<strong>最頂級波特酒</strong>（如 Vintage Port）的核心產地</li>
        <li><strong>Douro Superior（上杜羅）</strong>：最深內陸，極端大陸型氣候，夏季最乾熱，現代機械化程度最高</li>
      </ul>
      <h4>📊 重要數字</h4>
      <ul>
        <li>約 <strong>50%</strong> 的葡萄酒用於釀製 Porto 波特酒</li>
        <li>剩餘 50% 釀製 Douro DOC 的高品質不加烈紅酒與白酒</li>
        <li>Vinho Regional「<strong>Duriense</strong>」的產區與 Douro 重疊</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🥃',
    title: 'Porto 波特酒 — 什麼是加烈酒？',
    html: `
      <p>波特酒是葡萄牙最著名的酒款，製作過程中加入葡萄烈酒（Aguardente）中止發酵，保留天然甜分。</p>
      <h4>🔬 加烈工藝</h4>
      <ul>
        <li>葡萄發酵至酒精約 <strong>7-8%</strong> 時，加入 77% 的葡萄烈酒</li>
        <li>烈酒殺死酵母，發酵停止，保留大量殘糖</li>
        <li>最終酒精濃度：<strong>19–22% vol.</strong></li>
        <li>傳統採用 <strong>Lagares（石槽）</strong>踩皮提取色素</li>
      </ul>
      <h4>🍷 主要類型（簡介）</h4>
      <ul>
        <li><strong>Ruby</strong>：年輕、深紅色、多果香</li>
        <li><strong>Tawny</strong>：橡木桶氧化陳年，金棕色，堅果太妃糖香</li>
        <li><strong>Vintage</strong>：頂級年份，可陳年 20-50 年</li>
        <li><strong>LBV（Late Bottled Vintage）</strong>：次年份，性價比高</li>
      </ul>
    `,
  },
  {
    type: 'port-styles',
    title: '🍷 Port 風格金字塔互動詳解',
    description: '點選任一風格查看詳細規範。主要分為「Ruby 系」「Tawny 系」「White/Rosé」三大家族：Ruby/Reserve、LBV、Vintage、Crusted、Tawny、Tawny with Indication of Age（10/20/30/40年）、Colheita、White/Rosé Port 等。含酒精 / 甜度 / 陳年 / 價格與代表酒莊。',
  },
  {
    type: 'port-aging',
    title: '⏳ Port 陳年補充：Ruby vs Tawny 靣靣與氧化陳年',
    description: '互動詳解 Ruby Port 「靣靣陳年」（在瓶中 / 大桁中深色與果香保存）vs Tawny Port 「氧化陳年」（在小桁 pipe 中長期接觸氧氣、複雜堆莽 / 核果 / 咖啡香氣）的差異。包含 10/20/30/40年 Tawny 的實際平均年齡說明與內行選酒重點。',
  },
  {
    type: 'quiz',
    question: 'Porto 波特酒的酒精濃度通常在哪個範圍？',
    options: ['10–12%', '14–16%', '19–22%', '30–35%'],
    answer: 2,
    explanation: '波特酒通過加烈工藝（加入葡萄烈酒）達到 19–22% 的酒精濃度，同時保留了大量殘糖，形成獨特的甜型加烈酒。',
  },
  {
    type: 'quiz',
    question: '在「port-styles」金字塔中，以下哪一種 Port 是「瓶中陳年」（reductive，保留深色與鮮果香）而非「橡木桁氧化陳年」？',
    options: ['10 Year Tawny', 'Vintage Port', 'Colheita', '40 Year Tawny'],
    answer: 1,
    explanation: 'Vintage Port 只在大桁中陳年 2 年即裝瓶，其後在瓶中長期陳年（可達 50+ 年），屬「靣靣陳年」風格、保有深染色與鮮果香。而 Tawny（10/20/40 Year、Colheita）都是在小 pipe 桁中長期接觸氧氣的「氧化陳年」，出紅棕色、核果與咖啡香。',
  },
  {
    type: 'quiz',
    question: '在「port-aging」補充詳解中，一瓶標示「20 Years Tawny」的波特酒，其「20 年」代表的是？',
    options: ['混調中最年輕酒液至少 20 年', '混調中所有酒液都是 20 年份', '混調酒液的「平均類型年齡」約 20 年', '最少裝瓶後需陳年 20 年'],
    answer: 2,
    explanation: '「10/20/30/40 Years Tawny」的年齡並非表示出廠日期，而是該酒口感與風格上類似平均類型年齡的陳年狀態。酒莊這明粗制酒師負責混調多個不同年份的桁陳 Tawny，使成品符合「類型 20 Years」的品質幼位。實際裡頻包含 5–40 年不同酒液。',
  },
  {
    type: 'map',
    title: 'Douro DOC 產區地圖',
    description: '杜羅河谷是葡萄牙最古老的法定葡萄酒產區，1756 年劃定，2001 年獲 UNESCO 世界遺產',
    mapRegion: 'Douro',
  },
  {
    type: 'summary',
    message: '恭喜完成第十課！您已初步認識 Douro 和 Porto。',
    keyPoints: [
      'Douro 1756 年劃定，是全球最早的法定葡萄酒產區，2001 年獲 UNESCO 世界遺產',
      '三個子產區：Baixo Corgo（清爽）・Cima Corgo（頂級）・Douro Superior（最大陸型）',
      '約 50% 葡萄用於釀製波特酒，加烈至 19–22% 保留甜分',
    ],
  },
]

// P1M4L2 — Vinho Verde 快覽
const P1M4L2_slides = [
  {
    type: 'cover',
    icon: '🌿',
    gradient: 'linear-gradient(135deg, #006600, #27ae60)',
    title: 'Vinho Verde — 最大 DOC 的清新綠酒',
    subtitle: 'Level 1 · 第十一課',
    points: [
      { icon: '🌿', label: '最大 DOC', text: '葡萄牙面積最大的 DOC，約 34,000 公頃' },
      { icon: '💦', label: '「綠酒」的真正含義', text: '指年輕新鮮的酒，不是顏色！可以是白、紅、粉紅' },
      { icon: '⭐', label: '9 個子產區', text: '包含頂級 Alvarinho 的 Monção 和 Melgaço' },
    ],
  },
  {
    type: 'content',
    icon: '🌿',
    title: 'Vinho Verde DOC 完整介紹',
    html: `
      <p>「Vinho Verde」字面意思是「綠酒」，但這裡的「綠」代表<strong>年輕新鮮</strong>，而非顏色——儘管大多數 Vinho Verde 確實是白酒。</p>
      <h4>🗺️ 地理位置</h4>
      <p>位於葡萄牙西北部的 <strong>Minho 大區</strong>，緊鄰西班牙加利西亞，是 Rías Baixas（Albariño）的鄰居。</p>
      <h4>🌡️ 氣候特色</h4>
      <ul>
        <li>大西洋氣候，年雨量高達 <strong>1,500mm</strong>，是全葡萄牙最潮濕的產區</li>
        <li>溫和涼爽的夏季，有利保留葡萄的天然酸度</li>
        <li>特色：清爽、高酸、輕盈、帶輕微自然氣泡（CO₂）</li>
      </ul>
      <h4>🍇 主要品種</h4>
      <ul>
        <li><strong>Alvarinho（白）</strong>：在 Monção/Melgaço 子產區最優秀</li>
        <li><strong>Loureiro（白）</strong>：Lima 子產區主要品種</li>
        <li><strong>Trajadura（白）</strong>：常用於混調</li>
        <li><strong>Vinhão（紅）</strong>：深色芳香的紅 Vinho Verde</li>
      </ul>
      <h4>📋 9 個子產區</h4>
      <p>Amarante・Ave・Baião・Basto・Cávado・Lima・<strong>Monção</strong>・Paiva・Sousa</p>
    `,
  },
  {
    type: 'quiz',
    question: 'Vinho Verde 名稱中的「Verde（綠）」是指什麼？',
    options: ['酒的顏色是綠色', '年輕新鮮的意思', '使用綠色葡萄品種', '產區土壤是綠色'],
    answer: 1,
    explanation: '「Vinho Verde」的「Verde（綠）」代表年輕、新鮮，不是顏色。Vinho Verde 可以是白酒、紅酒或粉紅酒，以白酒最常見。',
  },
  {
    type: 'map',
    title: 'Vinho Verde DOC 產區地圖',
    description: '葡萄牙最大的 DOC，位於西北部 Minho 大區，大西洋氣候，年雨量高達 1,500mm',
    mapRegion: 'Vinho Verde',
  },
  {
    type: 'summary',
    message: '恭喜完成第十一課！您已了解 Vinho Verde 的特色。',
    keyPoints: [
      'Vinho Verde 是葡萄牙最大的 DOC，「Verde」= 年輕新鮮，不是顏色',
      '位於西北部 Minho 大區，大西洋氣候，年雨量 1,500mm',
      'Alvarinho（Monção/Melgaço）是最頂級的子產區品種',
      '有 9 個子產區，各有特色',
    ],
  },
  {
    type: 'vinho-verde-subregions',
    title: '🌿 Vinho Verde 9 大子產區互動深度',
    description: 'Vinho Verde 是葡萄牙最大的 DOC（34,000 ha），9 個子產區各有主導品種與風土差異——從頂級 Alvarinho 重鎮 Monção/Melgaço 到深色 Vinhão 紅酒重鎮 Sousa/Baião 的完整互動探索',
  },
]

// P1M4L3 — Alentejo 快覽
const P1M4L3_slides = [
  {
    type: 'cover',
    icon: '☀️',
    gradient: 'linear-gradient(135deg, #e67e22, #f39c12)',
    title: 'Alentejo — 葡萄牙南部的陽光大地',
    subtitle: 'Level 1 · 第十二課',
    points: [
      { icon: '☀️', label: '近代發展最快', text: '1990 年代後飛速崛起，是現代葡萄牙葡萄酒的代表' },
      { icon: '🗺️', label: '8 個子產區', text: 'Portalegre・Borba・Redondo・Reguengos 等' },
      { icon: '📜', label: '羅馬時代', text: '葡萄栽培可追溯至羅馬時代，有古老的石造酒槽遺跡' },
    ],
  },
  {
    type: 'content',
    icon: '☀️',
    title: 'Alentejo 產區特色',
    html: `
      <p>Alentejo 是葡萄牙南部廣大的平原地帶，占葡萄牙國土面積約 <strong>1/3</strong>，是全國最大的葡萄酒產區之一。</p>
      <h4>🌡️ 氣候</h4>
      <ul>
        <li>地中海型與大陸型混合</li>
        <li>夏季漫長酷熱，氣溫可超過 <strong>40°C</strong></li>
        <li>年日照時數超過 <strong>3,000 小時</strong>（葡萄牙最高）</li>
        <li>低雨量（400–600mm/年），旱季鮮明</li>
      </ul>
      <h4>🪨 土壤</h4>
      <ul>
        <li>主要為<strong>花崗岩、片麻岩</strong>（plutonic rocks）</li>
        <li>部分地區有頁岩（xistos）與石灰岩（calcário）</li>
        <li>肥沃土地多用於農業和牧場，葡萄藤種在貧瘠地帶</li>
      </ul>
      <h4>🍇 主要品種</h4>
      <ul>
        <li>紅：<strong>Aragonez（= Tempranillo）・Trincadeira・Alicante Bouschet</strong></li>
        <li>白：<strong>Antão Vaz・Arinto・Roupeiro</strong></li>
      </ul>
      <h4>🗺️ 8 個子產區</h4>
      <p>Portalegre・Borba・Redondo・<strong>Reguengos</strong>・Vidigueira・<strong>Évora</strong>・Granja-Amareleja・Moura</p>
    `,
  },
  {
    type: 'quiz',
    question: 'Alentejo 最重要的紅葡萄品種「Aragonez」在西班牙叫什麼名字？',
    options: ['Garnacha', 'Monastrell', 'Tempranillo', 'Syrah'],
    answer: 2,
    explanation: 'Aragonez 是 Alentejo 最重要的紅品種，正是西班牙著名品種 Tempranillo 的葡萄牙名稱。同一品種在 Douro 稱為 Tinta Roriz。',
  },
  {
    type: 'map',
    title: 'Alentejo DOC 產區地圖',
    description: '葡萄牙南部廣大平原，地中海氣候，年日照超過 3,000 小時，是近代葡萄牙葡萄酒的代表產區',
    mapRegion: 'Alentejo',
  },
  {
    type: 'summary',
    message: '恭喜完成第十二課！您已初步認識葡萄牙南部的 Alentejo。',
    keyPoints: [
      'Alentejo 占葡萄牙 1/3 土地，地中海型氣候，年日照超 3,000 小時',
      '8 個子產區，近代葡萄酒品質飛速提升',
      '主要紅品種：Aragonez（= Tempranillo）・Trincadeira・Alicante Bouschet',
      '主要白品種：Antão Vaz・Arinto',
    ],
  },
]

// P1FinalExam
const P1FinalExam_slides = [
  {
    type: 'cover',
    icon: '📝',
    gradient: 'linear-gradient(135deg, #2c3e50, #34495e)',
    title: 'Level 1 綜合評量',
    subtitle: '測試您的葡萄牙葡萄酒入門知識',
    points: [
      { icon: '📝', label: '15 道題目', text: '涵蓋地理、氣候、品種與分級制度' },
      { icon: '⏱️', label: '輕鬆完成', text: '每題請仔細思考，可隨時返回複習' },
    ],
  },
  {
    type: 'quiz',
    question: '以下哪個葡萄牙產區是全球最早的法定葡萄酒產區？',
    options: ['Vinho Verde', 'Douro / Porto', 'Alentejo', 'Dão'],
    answer: 1,
    explanation: '1756 年葡萄牙龐巴爾侯爵正式劃定 Douro/Porto 產區，是全球最早的法定葡萄酒產區。',
  },
  {
    type: 'quiz',
    question: '「Vinho Verde」中的「Verde」代表什麼？',
    options: ['酒色為綠色', '年輕新鮮', '有機釀造', '低糖分'],
    answer: 1,
    explanation: '「Verde」意為年輕、新鮮，代表 Vinho Verde 是一種年輕清爽的葡萄酒風格，不限酒色。',
  },
  {
    type: 'quiz',
    question: 'Alvarinho 品種在西班牙的名稱是？',
    options: ['Albariño', 'Verdejo', 'Albillo', 'Airén'],
    answer: 0,
    explanation: 'Alvarinho（葡萄牙）和 Albariño（西班牙）是同一品種，以 Rías Baixas 和 Vinho Verde 最為知名。',
  },
  {
    type: 'quiz',
    question: 'Douro 河谷的主要土壤類型是？',
    options: ['石灰岩', '砂土', '片岩（Xisto）', '黏土'],
    answer: 2,
    explanation: '片岩（Xisto/Schist）是 Douro 河谷的主要土壤，保熱性強，葡萄根可深扎尋水，是波特酒品質的基礎。',
  },
  {
    type: 'quiz',
    question: '葡萄牙 DOC 等級相當於歐盟的哪個等級？',
    options: ['IGP', 'DOP', 'Vino da Tavola', 'Vinho Regional'],
    answer: 1,
    explanation: '葡萄牙的 DOC（Denominação de Origem Controlada）相當於歐盟的 DOP（Protected Designation of Origin，受保護的原產地名稱）。',
  },
  {
    type: 'quiz',
    question: 'Baga 品種以高酸度和高單寧著稱，主要種植在哪個 DOC？',
    options: ['Douro', 'Dão', 'Bairrada', 'Alentejo'],
    answer: 2,
    explanation: 'Baga 是 Bairrada DOC 的靈魂品種，以極高酸度和單寧著稱，陳年後可發展複雜的皮革和礦物質香氣。',
  },
  {
    type: 'quiz',
    question: 'Alentejo 擁有幾個子產區？',
    options: ['3 個', '5 個', '8 個', '12 個'],
    answer: 2,
    explanation: 'Alentejo DOC 共有 8 個子產區：Portalegre・Borba・Redondo・Reguengos・Vidigueira・Évora・Granja-Amareleja・Moura。',
  },
  {
    type: 'summary',
    message: '🎉 恭喜完成 Level 1 所有課程！您已建立葡萄牙葡萄酒的完整基礎知識。',
    keyPoints: [
      '地理：14 大官方產區，從北部 Minho 到南部 Algarve，加上兩個大西洋島嶼',
      '氣候：大西洋型（西北）→ 大陸型（中部山區）→ 地中海型（南部）',
      '分級：DOC/DOP（最高）> IGP/Vinho Regional > Vinho',
      '品種：Touriga Nacional（紅）・Alvarinho（白）是最具代表性的品種',
      '產區：Douro（波特酒）・Vinho Verde（清爽白酒）・Alentejo（豐腴紅酒）',
    ],
  },
]

// ───────────────────────────────────────────────────────────────
//  Level 2 — 節選重點課程投影片
// ───────────────────────────────────────────────────────────────

// P2M1L1 — Douro 深度解析
const P2M1L1_slides = [
  {
    type: 'cover',
    icon: '⛰️',
    gradient: 'linear-gradient(135deg, #8B0000, #4a1010)',
    title: 'Douro 深度解析：三大子產區與頂級紅酒',
    subtitle: 'Level 2 · 北部產區',
    points: [
      { icon: '⛰️', label: '三大子產區', text: 'Baixo Corgo・Cima Corgo・Douro Superior，品質遞進' },
      { icon: '🌡️', label: '極端大陸型氣候', text: '夏季酷熱（35–40°C），冬季嚴寒，雨量集中冬季' },
      { icon: '🏆', label: '頂級紅酒崛起', text: 'Douro Boys 等先鋒酒莊推動不加烈 Douro 紅酒革命' },
    ],
  },
  {
    type: 'content',
    icon: '🗺️',
    title: 'Douro 三大子產區詳解',
    html: `
      <h4>1️⃣ Baixo Corgo（低科爾戈）</h4>
      <ul>
        <li>最靠近海洋（距波爾圖 80km），受大西洋輕微影響</li>
        <li>年雨量相對較高（700–900mm），氣候較涼爽</li>
        <li>主要生產基礎波特酒和日常 Douro 餐酒</li>
        <li>知名酒莊：Ferreira・Ramos Pinto</li>
      </ul>
      <h4>2️⃣ Cima Corgo（上科爾戈）⭐ 精華核心</h4>
      <ul>
        <li>Douro 的精華地帶，<strong>頂級 Vintage Port</strong> 的主要來源</li>
        <li>年雨量 500–700mm，氣候大陸型顯著</li>
        <li>著名的酒莊（Quintas）密集：Quinta do Crasto・Quinta do Vale Meão・Niepoort</li>
        <li>片岩梯田最壯觀，是 UNESCO 世界遺產的核心區</li>
      </ul>
      <h4>3️⃣ Douro Superior（上杜羅）</h4>
      <ul>
        <li>最深內陸，氣候最極端：夏季最熱（可達 40°C），冬季最冷</li>
        <li>年雨量最低（400–500mm），幾乎是半乾旱氣候</li>
        <li>較平坦，機械化程度最高，潛力最大的新興區域</li>
        <li>主要品種：Touriga Nacional・Touriga Franca 在此完美成熟</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🏆',
    title: 'Douro 不加烈紅酒的崛起',
    html: `
      <p>21 世紀初，「Douro Boys」等一批先鋒釀酒師掀起了 Douro 不加烈干型紅酒的革命。</p>
      <h4>🌟 Douro 頂級紅酒特色</h4>
      <ul>
        <li>以 <strong>Touriga Nacional 為核心</strong>，混調 Touriga Franca・Tinta Barroca 等</li>
        <li>深色、複雜，帶花香（紫羅蘭・玫瑰）、礦物質、香料</li>
        <li>適合<strong>陳年 10–20 年</strong>，可與世界頂級紅酒媲美</li>
      </ul>
      <h4>🍷 代表性酒款</h4>
      <ul>
        <li><strong>Barca Velha</strong>（Ferreirinha）：被譽為「葡萄牙的 Pétrus」</li>
        <li><strong>Quinta do Crasto Reserva</strong>：國際知名，性價比高</li>
        <li><strong>Niepoort Redoma</strong>：有機自然派代表</li>
      </ul>
      <p><em>Douro Superior 的年輕葡萄藤也開始生產優質酒款，是值得關注的新興區域。</em></p>
    `,
  },
  {
    type: 'quiz',
    question: 'Douro 哪個子產區被視為頂級 Vintage Port 的主要來源地？',
    options: ['Baixo Corgo', 'Cima Corgo', 'Douro Superior', '三個子產區同等重要'],
    answer: 1,
    explanation: 'Cima Corgo 是 Douro 的精華核心，頂級 Vintage Port 主要來自這個子產區，Quinta do Crasto・Quinta do Vale Meão 等著名酒莊都集中在此。',
  },
  {
    type: 'map',
    title: 'Douro DOC 產區地圖',
    description: '探索三大子產區：Baixo Corgo・Cima Corgo・Douro Superior，杜羅河沿岸的片岩梯田葡萄園',
    mapRegion: 'Douro',
  },
  {
    type: 'summary',
    message: '恭喜完成 Douro 深度課程！',
    keyPoints: [
      'Baixo Corgo：最涼爽，基礎酒款',
      'Cima Corgo：頂級精華，Vintage Port 核心，UNESCO 世界遺產核心區',
      'Douro Superior：最極端，新興機械化，潛力巨大',
      'Douro 不加烈紅酒近年崛起，可與世界頂級紅酒競爭',
    ],
  },
]

// P2M1L2 — Porto 波特酒類型
const P2M1L2_slides = [
  {
    type: 'cover',
    icon: '🥃',
    gradient: 'linear-gradient(135deg, #8B4513, #5c2a0a)',
    title: 'Porto 波特酒：Tawny・Ruby・LBV・Vintage',
    subtitle: 'Level 2 · 波特酒風格全解析',
    points: [
      { icon: '🔴', label: 'Ruby 系列', text: '深紅色，果香主導，年輕活潑' },
      { icon: '🟤', label: 'Tawny 系列', text: '橡木桶氧化陳年，金棕色，堅果香草' },
      { icon: '🏆', label: 'Vintage 系列', text: '頂級年份，深邃複雜，可陳年逾 50 年' },
    ],
  },
  {
    type: 'compare',
    title: '波特酒四大主要類型',
    items: [
      { icon: '🍓', label: 'Ruby', desc: '年輕、深紅色。黑莓藍莓果香，甜度明顯，通常 2-4 年桶陳，不氧化。最基礎的波特酒類型', color: '#8B0000' },
      { icon: '🟤', label: 'Tawny', desc: '在小型橡木桶中氧化陳年多年，轉為棕橙金色。堅果、太妃糖、橙皮香。可標示 10/20/30/40 年', color: '#8B4513' },
      { icon: '🍷', label: 'LBV（Late Bottled Vintage）', desc: '單一年份，在桶中陳年 4-6 年後裝瓶。介於 Ruby 和 Vintage 之間，性價比最高的年份波特酒', color: '#c0392b' },
      { icon: '🏆', label: 'Vintage', desc: '最頂級。只在宣布的特殊年份生產，在桶中陳年 2 年後裝瓶，瓶中繼續陳年 20-50 年。世界最佳加烈酒', color: '#2c1a0a' },
    ],
  },
  {
    type: 'content',
    icon: '🔢',
    title: 'Tawny 的年份標示：10/20/30/40 年',
    html: `
      <p>Tawny Port 的年份標示（10/20/30/40 年）不是指某一特定年份，而是指<strong>調配中葡萄酒的平均陳年年數</strong>。</p>
      <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin-top:8px">
        <tr style="background:#8B4513;color:white">
          <th style="padding:8px">標示</th>
          <th style="padding:8px">平均桶陳</th>
          <th style="padding:8px">酒色</th>
          <th style="padding:8px">主要香氣</th>
        </tr>
        <tr style="background:#f9f9f9">
          <td style="padding:6px;text-align:center"><strong>10 年</strong></td>
          <td style="padding:6px">7–15 年</td>
          <td style="padding:6px">深琥珀橙</td>
          <td style="padding:6px">橙皮、杏仁</td>
        </tr>
        <tr>
          <td style="padding:6px;text-align:center"><strong>20 年</strong></td>
          <td style="padding:6px">17–25 年</td>
          <td style="padding:6px">金棕色</td>
          <td style="padding:6px">太妃糖、堅果</td>
        </tr>
        <tr style="background:#f9f9f9">
          <td style="padding:6px;text-align:center"><strong>30 年</strong></td>
          <td style="padding:6px">27–35 年</td>
          <td style="padding:6px">淡琥珀金</td>
          <td style="padding:6px">烘烤咖啡、乾果</td>
        </tr>
        <tr>
          <td style="padding:6px;text-align:center"><strong>40 年</strong></td>
          <td style="padding:6px">35+ 年</td>
          <td style="padding:6px">極淡金黃</td>
          <td style="padding:6px">蘭姆酒、巧克力、木香</td>
        </tr>
      </table>
      <p style="margin-top:8px"><strong>Colheita</strong> = 單一年份的 Tawny，在桶中陳年至少 7 年，標示實際收成年份。</p>
    `,
  },
  {
    type: 'quiz',
    question: 'Vintage Port 通常在桶中陳年幾年後裝瓶？',
    options: ['1 年', '2 年', '10 年', '20 年'],
    answer: 1,
    explanation: 'Vintage Port 在橡木桶中只陳年 2 年（短暫），然後裝瓶，瓶中繼續長期陳年。這是因為 Vintage Port 的複雜度主要來自瓶中陳年，而非桶陳。',
  },
  {
    type: 'map',
    title: 'Porto DOC 產區地圖',
    description: '波特酒的法定產區，與 Douro 高度重疊，是全球最著名加烈甜酒的唯一合法產地',
    mapRegion: 'Porto',
  },
  {
    type: 'summary',
    message: '恭喜完成波特酒類型課程！',
    keyPoints: [
      'Ruby：深紅果香，年輕不氧化',
      'Tawny：桶中氧化，10/20/30/40 年標示平均陳年',
      'LBV：單一年份，4-6 年桶陳，性價比最高',
      'Vintage：頂級年份，2 年桶陳後瓶中陳年逾 50 年',
      'Colheita：單一年份 Tawny，7+ 年桶陳',
    ],
  },
]

// P2M5L1 — Madeira 馬德拉
const P2M5L1_slides = [
  {
    type: 'cover',
    icon: '🏝️',
    gradient: 'linear-gradient(135deg, #8e44ad, #6c3483)',
    title: 'Madeira 馬德拉：氧化加烈的永恆奇蹟',
    subtitle: 'Level 2 · 島嶼產區',
    points: [
      { icon: '🏝️', label: '大西洋火山島', text: '位於非洲西岸大西洋上，屬於葡萄牙，面積 736 km²' },
      { icon: '🔬', label: 'Estufagem 加熱工藝', text: '獨特的加熱氧化工藝，是馬德拉酒不朽的秘密' },
      { icon: '⏳', label: '百年陳年', text: '可陳年超過 100 年，是世界最長壽的葡萄酒之一' },
    ],
  },
  {
    type: 'content',
    icon: '🔬',
    title: 'Madeira 的 Estufagem 加熱工藝',
    html: `
      <p>馬德拉酒之所以能陳年百年，關鍵在於<strong>Estufagem（加熱氧化工藝）</strong>。</p>
      <h4>🌡️ 兩種加熱方式</h4>
      <ul>
        <li><strong>Estufagem（工業加熱）</strong>：將酒置於不鏽鋼槽中，加熱至 45–50°C 並維持 3 個月以上，加速馬德拉化（Maderization）</li>
        <li><strong>Canteiro（自然加熱）⭐</strong>：將酒桶存放在酒莊頂樓，讓大西洋的陽光和空氣自然加熱熟化，過程緩慢（可達數十年）。頂級馬德拉酒的方式</li>
      </ul>
      <h4>🔄 馬德拉化效果</h4>
      <ul>
        <li>加熱+氧化使酒穩定，<strong>不再怕熱、怕氧</strong></li>
        <li>蒸發水分，濃縮風味</li>
        <li>形成獨特的<strong>焦糖、烘烤、堅果、乾果、酸味</strong>風味</li>
        <li>高酸度是天然保存劑，加上加熱氧化，可保存逾百年</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: '馬德拉四大品種與風格（從干到甜）',
    items: [
      { icon: '🍋', label: 'Sercial（極干）', desc: '酒精 17%，殘糖低。高酸清爽，帶堅果鹽水礦物質感，作餐前酒最佳', color: '#c9b45c' },
      { icon: '🌿', label: 'Verdelho（中干）', desc: '殘糖略高。帶煙燻香草，中等濃郁度，可搭配海鮮湯', color: '#7a8c3a' },
      { icon: '🟤', label: 'Bual（中甜）', desc: '甜度明顯。深色，帶太妃糖、無花果、焦糖複雜風味，佐起司完美', color: '#8B4513' },
      { icon: '🍯', label: 'Malvasia（極甜）', desc: '最甜最濃郁。蜂蜜、杏桃、熱帶水果，絲滑質感，最受歡迎的餐後甜酒', color: '#B8860B' },
    ],
  },
  {
    type: 'quiz',
    question: 'Madeira 馬德拉酒中，「Canteiro」工藝是指什麼？',
    options: [
      '在不鏽鋼槽中人工加熱至 50°C',
      '在酒莊頂樓讓陽光自然加熱陳年，是頂級馬德拉的方式',
      '加入葡萄糖增甜',
      '冷卻過濾去除沉澱'
    ],
    answer: 1,
    explanation: 'Canteiro 是頂級馬德拉酒的自然加熱方式，將酒桶放在酒莊頂樓，利用大西洋氣候的自然溫度和空氣緩慢熟化，過程可達數十年，品質遠優於工業 Estufagem。',
  },
  {
    type: 'map',
    title: 'Madeira DOC 產區地圖',
    description: '位於大西洋上的火山島，以獨特的加熱氧化工藝釀造出可陳年百年的馬德拉酒',
    mapRegion: 'Madeira',
  },
  {
    type: 'madeira-noble-grapes',
    title: '🏝️ Madeira 四大貴族品種 × 工藝互動深度',
    description: 'Sercial / Verdelho / Bual / Malvasia 甜度光譜 + Estufagem（工業）vs Canteiro（自然）工藝對比 + 5 級陳年分級的完整互動探索',
  },
  {
    type: 'summary',
    message: '恭喜完成馬德拉課程！',
    keyPoints: [
      'Madeira 位於大西洋火山島，獨特加熱氧化工藝使酒不朽',
      'Estufagem = 工業加熱（45–50°C）；Canteiro = 自然頂樓陳年（頂級）',
      '四大品種由干到甜：Sercial（極干）→ Verdelho（中干）→ Bual（中甜）→ Malvasia（極甜）',
      '馬德拉可陳年超過百年，是世界最長壽的葡萄酒之一',
    ],
  },
]

// P2M5L2 — Açores 亞速爾
const P2M5L2_slides = [
  {
    type: 'cover',
    icon: '🌋',
    gradient: 'linear-gradient(135deg, #1a6b9b, #0d4f73)',
    title: 'Açores 亞速爾：火山玄武岩的全球奇觀',
    subtitle: 'Level 2 · 島嶼產區',
    points: [
      { icon: '🌋', label: '火山玄武岩土壤', text: '9 個火山島，Pico 島的玄武岩石牆葡萄園 2004 年獲 UNESCO 認定' },
      { icon: '🌊', label: '大西洋孤島', text: '距葡萄牙大陸 1,500 公里，全大西洋海洋性氣候' },
      { icon: '⚪', label: '獨特白酒', text: '白堊礦物質感，適合搭配海鮮，台灣知名度漸增' },
    ],
  },
  {
    type: 'content',
    icon: '🌋',
    title: 'Pico 島的 UNESCO 葡萄園',
    html: `
      <p>Pico 島的葡萄園在 2004 年被 UNESCO 列為世界文化遺產，原因是其獨特的<strong>玄武岩石牆（Currais）</strong>景觀。</p>
      <h4>🪨 玄武岩石牆的故事</h4>
      <ul>
        <li>農民利用火山玄武岩堆砌無數小型圍牆，保護葡萄藤免受大西洋強風影響</li>
        <li>這些石牆已存在超過 <strong>500 年</strong></li>
        <li>俯瞰像一幅巨大的黑色方格圖，壯觀無比</li>
        <li>玄武岩含豐富礦物質，賦予葡萄酒獨特的<strong>鹹味礦物質感</strong></li>
      </ul>
      <h4>🍾 Azores Wine 特色</h4>
      <ul>
        <li>主要品種：<strong>Verdelho（白）</strong>、Arinto dos Açores、Terrantez（白）</li>
        <li>風格：清爽高酸，鹹味礦物質，低酒精（11–13%），適合海鮮</li>
        <li>主要 IGP：Açores IGP（涵蓋所有島嶼）</li>
        <li>Pico 島、Graciosa 島、Terceira 島 有 DOC 等級</li>
      </ul>
    `,
  },
  {
    type: 'quiz',
    question: 'Açores 亞速爾群島的 Pico 島葡萄園以什麼土壤最著名？',
    options: ['白色石灰岩', '紅色黏土', '黑色玄武岩', '金色砂土'],
    answer: 2,
    explanation: 'Pico 島的葡萄園建立在黑色玄武岩火山岩石上，農民用玄武岩堆砌的石牆保護葡萄藤，這個景觀在 2004 年獲 UNESCO 世界遺產認定。',
  },
  {
    type: 'map',
    title: 'Açores IGP 產區地圖',
    description: '葡萄牙大西洋島嶼群，距本土 1,500 公里，Pico 島玄武岩石牆葡萄園是 UNESCO 世界遺產',
    mapRegion: 'Açores',
  },
  {
    type: 'summary',
    message: '恭喜完成亞速爾課程！',
    keyPoints: [
      'Açores 是葡萄牙大西洋島嶼群，距本土 1,500 公里',
      'Pico 島玄武岩石牆葡萄園 2004 年獲 UNESCO 世界遺產',
      '玄武岩土壤賦予獨特鹹味礦物質感',
      '主要品種：Verdelho・Arinto dos Açores，高酸清爽適合海鮮',
    ],
  },
]

// P2M1L3 — Vinho Verde 深度：Alvarinho 與 9 個子產區
const P2M1L3_slides = [
  {
    type: 'cover',
    icon: '🌿',
    gradient: 'linear-gradient(135deg, #006600, #27ae60)',
    title: 'Vinho Verde 深度：Alvarinho 與 9 個子產區',
    subtitle: 'Level 2 · 北部產區',
    points: [
      { icon: '⭐', label: 'Alvarinho 聖地', text: 'Monção 與 Melgaço 是 Alvarinho 最頂級子產區，品質可比加利西亞 Rías Baixas' },
      { icon: '🗺️', label: '9 個子產區', text: '各有主導品種，從花香 Loureiro 到深色 Vinhão，風格迥異' },
      { icon: '💧', label: '微氣泡特色', text: '傳統上保留少量 CO₂ 增鮮活感，是 Vinho Verde 標誌性特色' },
    ],
  },
  {
    type: 'map',
    title: 'Vinho Verde DOC 產區地圖',
    description: 'Vinho Verde 是葡萄牙最大 DOC，Minho 地區 9 個子產區——Alvarinho 主要集中於最北的 Monção e Melgaço',
    mapRegion: 'Vinho Verde',
  },,

  {
    type: 'content',
    icon: '⭐',
    title: 'Monção 與 Melgaço：Alvarinho 的巔峰之地',
    html: `
      <p><strong>Monção</strong> 和 <strong>Melgaço</strong> 是 Vinho Verde DOC 中最頂級的兩個子產區，緊鄰西班牙 Rías Baixas（Albariño 的故鄉）。</p>
      <h4>🌡️ 微氣候優勢</h4>
      <ul>
        <li>位於 Minho 河沿岸，受山脈阻擋，夏季較其他 Vinho Verde 子產區更<strong>溫暖乾燥</strong></li>
        <li>年雨量 800–1,000mm（低於 Minho 其他地區），有利 Alvarinho 充分成熟</li>
        <li>花崗岩土壤：賦予礦物質感和清爽酸度</li>
      </ul>
      <h4>🍾 Alvarinho 的頂級表現</h4>
      <ul>
        <li>比一般 Vinho Verde 更<strong>濃郁豐滿</strong>，酒精度通常達 12–13%</li>
        <li>香氣：桃子、杏桃、柑橘、熱帶水果，帶明顯礦物質感</li>
        <li>可以<strong>橡木桶陳年</strong>，發展奶油核果複雜度（高端款）</li>
        <li>陳年潛力 3–8 年，頂級款可達 10 年以上</li>
      </ul>
      <h4>🏆 知名酒莊</h4>
      <ul>
        <li><strong>Soalheiro</strong>：Monção 最知名，Alvarinho 單品種標竿</li>
        <li><strong>Anselmo Mendes</strong>：現代風格先驅，亦生產橡木桶版</li>
        <li><strong>Quinta de Santiago</strong>：傳統風格代表</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🗺️',
    title: 'Vinho Verde 9 個子產區概覽',
    html: `
      <table style="width:100%;border-collapse:collapse;font-size:0.88em">
        <tr style="background:#006600;color:white">
          <th style="padding:7px;text-align:left">子產區</th>
          <th style="padding:7px;text-align:left">主要品種</th>
          <th style="padding:7px;text-align:left">風格特色</th>
        </tr>
        <tr style="background:#f0f9f0">
          <td style="padding:6px"><strong>Monção / Melgaço</strong> ⭐</td>
          <td style="padding:6px">Alvarinho</td>
          <td style="padding:6px">最濃郁、最可陳年的頂級白酒</td>
        </tr>
        <tr>
          <td style="padding:6px"><strong>Lima</strong></td>
          <td style="padding:6px">Loureiro・Arinto</td>
          <td style="padding:6px">花香突出，帶月桂樹和蜂蜜</td>
        </tr>
        <tr style="background:#f0f9f0">
          <td style="padding:6px"><strong>Cávado</strong></td>
          <td style="padding:6px">Arinto・Loureiro</td>
          <td style="padding:6px">清爽高酸，典型大西洋風格</td>
        </tr>
        <tr>
          <td style="padding:6px"><strong>Ave</strong></td>
          <td style="padding:6px">Trajadura・Loureiro</td>
          <td style="padding:6px">輕盈芳香，柑橘調性</td>
        </tr>
        <tr style="background:#f0f9f0">
          <td style="padding:6px"><strong>Amarante</strong></td>
          <td style="padding:6px">Azal・Arinto</td>
          <td style="padding:6px">最高酸度之一，礦物質突出</td>
        </tr>
        <tr>
          <td style="padding:6px"><strong>Baião</strong></td>
          <td style="padding:6px">Arinto・Vinhão（紅）</td>
          <td style="padding:6px">深色紅 Vinho Verde 重鎮</td>
        </tr>
        <tr style="background:#f0f9f0">
          <td style="padding:6px"><strong>Basto</strong></td>
          <td style="padding:6px">Azal・Rabo de Ovelha</td>
          <td style="padding:6px">較厚重，多果香</td>
        </tr>
        <tr>
          <td style="padding:6px"><strong>Sousa</strong></td>
          <td style="padding:6px">Vinhão・Espadeiro（紅）</td>
          <td style="padding:6px">深色單寧紅酒為主</td>
        </tr>
        <tr style="background:#f0f9f0">
          <td style="padding:6px"><strong>Paiva</strong></td>
          <td style="padding:6px">混調白品種</td>
          <td style="padding:6px">最南端，輕盈易飲</td>
        </tr>
      </table>
    `,
  },
  {
    type: 'compare',
    title: 'Alvarinho vs. Loureiro vs. Arinto：三大白品種比較',
    items: [
      { icon: '⭐', label: 'Alvarinho（Monção）', desc: '最濃郁，桃子杏桃熱帶果香，礦物感，高酸度，陳年佳。葡萄牙最知名白品種', color: '#006600' },
      { icon: '🌸', label: 'Loureiro（Lima）', desc: '月桂樹花香、蜂蜜、橙花，輕盈優雅，清爽易飲。Lima 子產區的靈魂品種', color: '#27ae60' },
      { icon: '🍋', label: 'Arinto（全區）', desc: '最高酸度，礦物質感強，清爽刺激，常作混調骨幹。遍及全 Vinho Verde 及全葡萄牙', color: '#7a8c3a' },
    ],
  },
  {
    type: 'quiz',
    question: 'Vinho Verde DOC 中，哪個子產區以頂級 Alvarinho 白酒著稱，被視為整個 DOC 的精華地帶？',
    options: ['Lima', 'Cávado', 'Monção / Melgaço', 'Sousa'],
    answer: 2,
    explanation: 'Monção 和 Melgaço 是 Vinho Verde DOC 中最頂級的子產區，Alvarinho 品種在此表現最佳。受山脈保護，夏季較其他子產區溫暖乾燥，Alvarinho 可充分成熟，比一般 Vinho Verde 更濃郁、更適合陳年。',
  },
  {
    type: 'quiz',
    question: 'Vinho Verde 傳統上保留少量 CO₂ 的原因是什麼？',
    options: ['法規規定必須有氣泡', '增加鮮活感，彌補高酸度帶來的清爽特性', '掩蓋酒的缺陷', '降低酒精度'],
    answer: 1,
    explanation: 'Vinho Verde 保留少量天然 CO₂（微氣泡），是傳統釀造工藝的結果——在不鏽鋼桶中保留蘋果乳酸發酵產生的少量二氧化碳。這種微氣泡增加了鮮活感和清爽度，成為 Vinho Verde 的標誌性特色，特別適合搭配海鮮。',
  },
  {
    type: 'summary',
    message: '恭喜完成 Vinho Verde 深度課程！',
    keyPoints: [
      'Monção/Melgaço 是最頂級子產區，Alvarinho 在此最濃郁可陳年',
      '9 個子產區各有主導品種：Loureiro（Lima）・Arinto（全區）・Vinhão（紅酒）',
      'Alvarinho = 最濃郁；Loureiro = 最花香；Arinto = 最高酸',
      '微氣泡是 Vinho Verde 的標誌，增加鮮活感',
    ],
  },
]

// P2M1L4 — Trás-os-Montes：東北偏遠山區的古老風土
const P2M1L4_slides = [
  {
    type: 'cover',
    icon: '🏔️',
    gradient: 'linear-gradient(135deg, #5d4037, #8d6e63)',
    title: 'Trás-os-Montes：東北偏遠山區',
    subtitle: 'Level 2 · 北部產區',
    points: [
      { icon: '🏔️', label: '山脈之後', text: '字面意思「山脈背後」，是葡萄牙最偏遠、最極端大陸型氣候的產區' },
      { icon: '🌡️', label: '極端溫差', text: '夏季可超過 40°C，冬季可降至 -10°C，是葡萄牙最極端的大陸氣候' },
      { icon: '🍇', label: '古老品種', text: '保存了許多葡萄牙中南部罕見的古老本土品種' },
    ],
  },
  {
    type: 'map',
    title: 'Trás-os-Montes DOC 產區地圖',
    description: '「山的另一邊」——葡萄牙最偏遠的東北山區，與西班牙接壤，Douro 河上游，大陸型極端氣候',
    mapRegion: 'Trás-os-Montes',
  },,

  {
    type: 'content',
    icon: '🗺️',
    title: 'Trás-os-Montes 的地理與氣候',
    html: `
      <p><strong>Trás-os-Montes</strong>（字意：山脈之後）位於葡萄牙東北角，毗鄰西班牙，被 Marão 和 Alvão 山脈與沿海隔絕。</p>
      <h4>🌡️ 極端大陸型氣候</h4>
      <ul>
        <li>葡萄牙<strong>最極端的大陸型氣候</strong>：「九個月冬天，三個月地獄」</li>
        <li>夏季高溫達 <strong>40°C 以上</strong>，冬季可達 <strong>-10°C</strong></li>
        <li>年雨量低（400–700mm），主要集中在冬季</li>
        <li>日夜溫差可達 <strong>20–25°C</strong>，有利保留葡萄酸度</li>
      </ul>
      <h4>🪨 土壤</h4>
      <ul>
        <li>花崗岩（北部）與片岩（南部及 Valpaços 地區）為主</li>
        <li>土壤貧瘠，葡萄藤產量低但果實集中</li>
      </ul>
      <h4>🗺️ 三個子產區</h4>
      <ul>
        <li><strong>Chaves</strong>：最北，接近西班牙，略受大西洋影響</li>
        <li><strong>Valpaços</strong>：中央，最典型的大陸型氣候</li>
        <li><strong>Planalto Mirandês</strong>：最東，高原地帶，葡萄-橄欖-杏仁的農業組合</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: 'Trás-os-Montes 三個 DOC 子產區',
    items: [
      { icon: '🏔️', label: 'Chaves DOC', desc: '最北，最靠近西班牙 Galicia，白酒（Gouveio）較清爽，紅酒多果香', color: '#795548' },
      { icon: '🌋', label: 'Valpaços DOC', desc: '中部高原，最典型大陸型。Touriga Nacional 和 Tinta Amarela 表現出色', color: '#5d4037' },
      { icon: '🌾', label: 'Planalto Mirandês DOC', desc: '東部高原，接近西班牙。Fernão Pires 和 Trincadeira 混種，是葡萄牙最偏遠的 DOC', color: '#4e342e' },
    ],
  },
  {
    type: 'quiz',
    question: '「Trás-os-Montes」的葡萄牙語字面意思是什麼？',
    options: ['綠色山谷', '山脈之後', '河谷梯田', '古老大地'],
    answer: 1,
    explanation: 'Trás-os-Montes 在葡萄牙語中意為「山脈之後」，因為這個產區被 Marão 和 Alvão 山脈與西部沿海地區隔絕。正是這種地理隔絕造就了葡萄牙最極端的大陸型氣候——夏熱冬寒，年溫差極大。',
  },
  {
    type: 'quiz',
    question: 'Trás-os-Montes 的氣候特色是？',
    options: ['大西洋型，涼爽潮濕', '地中海型，乾熱夏季', '極端大陸型，夏熱冬寒，溫差大', '高山型，全年涼爽'],
    answer: 2,
    explanation: 'Trás-os-Montes 是葡萄牙氣候最極端的大陸型產區，夏季可超過 40°C，冬季可降至 -10°C，被形容為「九個月冬天，三個月地獄」。這種極端溫差使葡萄可以達到充分成熟，同時保留較高的天然酸度。',
  },
  {
    type: 'summary',
    message: '恭喜完成 Trás-os-Montes 課程！',
    keyPoints: [
      '字意「山脈之後」，被山脈隔絕，葡萄牙最偏遠的產區',
      '極端大陸型氣候：夏季 40°C，冬季 -10°C，全國溫差最大',
      '三個子產區：Chaves・Valpaços・Planalto Mirandês，各有特色',
      '保存了珍貴的古老葡萄牙本土品種，是葡萄酒探索者的隱藏寶地',
    ],
  },
]

// P2M2L1 — Dão：花崗岩土壤與優雅 Touriga Nacional
const P2M2L1_slides = [
  {
    type: 'map',
    title: 'Trás-os-Montes DOC 產區地圖',
    description: '葡萄牙東北邊境山區——與西班牙交界的偏遠高地，大陸型極端氣候造就濃厚個性',
    mapRegion: 'Trás-os-Montes',
  },,

  {
    type: 'cover',
    icon: '⛰️',
    gradient: 'linear-gradient(135deg, #546e7a, #2c3e50)',
    title: 'Dão：花崗岩高地的優雅紅酒',
    subtitle: 'Level 2 · 中部山地產區',
    points: [
      { icon: '🪨', label: '花崗岩高原', text: '海拔 400–600m 的花崗岩高原，三面被山脈保護，形成獨特微氣候' },
      { icon: '🏆', label: 'Touriga Nacional 原鄉', text: 'Touriga Nacional 的原產地即 Dão，在此展現最細膩優雅的一面' },
      { icon: '🍾', label: 'Encruzado 白酒明星', text: 'Encruzado 是 Dão 的旗艦白品種，複雜度堪比布根地白酒' },
    ],
  },
  {
    type: 'content',
    icon: '🗺️',
    title: 'Dão 的地理、氣候與土壤',
    html: `
      <p>Dão DOC 位於葡萄牙中部山地，三面被 Serra da Estrela（埃斯特雷拉山脈）、Serra do Caramulo 和 Serra da Açor 包圍。</p>
      <h4>🌡️ 受保護的微氣候</h4>
      <ul>
        <li>山脈阻擋了大西洋的潮濕氣流和西班牙的乾熱氣流</li>
        <li>夏季比海岸溫暖，但比 Douro 涼爽，年均溫 12–14°C</li>
        <li>年雨量 800–1,000mm，相對充沛，有助葡萄緩慢成熟</li>
        <li>「溫和的大陸型氣候」：夏乾燥但不酷熱，冬涼爽</li>
      </ul>
      <h4>🪨 花崗岩土壤</h4>
      <ul>
        <li>主要為<strong>花崗岩和沙質土</strong>，排水性極佳</li>
        <li>貧瘠土壤使葡萄低產，但賦予礦物質感和細膩口感</li>
        <li>酸性土壤（pH 4.5–5.5）有助維持葡萄的天然酸度</li>
      </ul>
      <h4>📊 基本數字</h4>
      <ul>
        <li>DOC 面積：約 <strong>20,000 公頃</strong>葡萄藤（已種植）</li>
        <li>海拔：<strong>400–800m</strong>，部分頂級葡萄園超過 700m</li>
        <li>Dão 歷史上曾受私人酒廠壟斷（1950–90年代），1990 後獨立酒莊崛起</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🍇',
    title: 'Dão 的核心品種：Touriga Nacional 與 Encruzado',
    html: `
      <h4>🔴 紅品種：以 Touriga Nacional 為王</h4>
      <ul>
        <li><strong>Touriga Nacional</strong>：Dão 是其<strong>原產地</strong>。在此展現最<em>優雅細膩</em>的一面（比 Douro 版本更輕盈，紫羅蘭花香更突出）</li>
        <li><strong>Tinta Roriz（Tempranillo）</strong>：常與 Touriga Nacional 混調，增加果香</li>
        <li><strong>Alfrocheiro</strong>：Dão 特有紅品種，帶黑莓和香料感，結構均衡</li>
        <li><strong>Jaen（= Mencía）</strong>：西班牙 Mencía 的葡萄牙名稱，酒體輕盈，果香清新</li>
      </ul>
      <h4>⚪ 白品種：Encruzado 的璀璨星光</h4>
      <ul>
        <li><strong>Encruzado</strong>：Dão 的旗艦白品種，被譽為「葡萄牙的 Chardonnay」</li>
        <li>花崗岩土壤賦予清爽礦物質感，加上優雅的桃子、橙花香氣</li>
        <li>經橡木桶陳年後：奶油、燧石、蜂蜜，複雜度顯著提升</li>
        <li>陳年潛力強：頂級款可達 10–15 年</li>
      </ul>
      <h4>🏆 代表酒莊</h4>
      <ul>
        <li><strong>Quinta dos Roques</strong>：Encruzado 白酒標竿，也生產頂級 Touriga Nacional 紅酒</li>
        <li><strong>Quinta da Pellada</strong>：自然農法，優雅風格</li>
        <li><strong>Alvaro Castro（Quinta da Pellada）</strong>：Dão 復興的重要推手</li>
      </ul>
    `,
  },
  {
    type: 'map',
    title: 'Dão DOC 產區地圖',
    description: '花崗岩高地環繞的葡萄酒孤島——Serra da Estrela 阻擋大西洋濕氣，造就優雅高酸的 Touriga Nacional',
    mapRegion: 'Dão',
  },,

  {
    type: 'compare',
    title: 'Dão vs. Douro：兩大葡萄牙紅酒的對比',
    items: [
      { icon: '⛰️', label: 'Dão（優雅派）', desc: '花崗岩，海拔 400–800m，涼爽緩慢成熟。Touriga Nacional 展現細膩紫羅蘭花香，酒體中等，尾韻絲滑', color: '#546e7a' },
      { icon: '🌋', label: 'Douro（力量派）', desc: '片岩，極端大陸型，炎熱成熟。Touriga Nacional 展現深紫色果香，酒體飽滿，單寧更強健，可陳年 20+ 年', color: '#8B0000' },
      { icon: '🍾', label: 'Dão 白酒（Encruzado）', desc: '礦物清爽 → 橡木桶後奶油複雜，可媲美布根地。葡萄牙最可陳年的干型白酒之一', color: '#7a8c3a' },
      { icon: '🌊', label: 'Douro 白酒', desc: '以 Rabigato・Gouveio 等品種為主，礦物清爽，但比 Encruzado 結構輕盈，陳年潛力略低', color: '#c9b45c' },
    ],
  },
  {
    type: 'quiz',
    question: 'Dão 最重要的旗艦白葡萄品種是什麼，常被比喻為「葡萄牙的 Chardonnay」？',
    options: ['Arinto', 'Alvarinho', 'Encruzado', 'Fernão Pires'],
    answer: 2,
    explanation: 'Encruzado 是 Dão DOC 的旗艦白品種，在花崗岩土壤和涼爽氣候下展現礦物清爽感，經橡木桶陳年後發展奶油、燧石複雜度，陳年潛力強，被譽為「葡萄牙的 Chardonnay」。',
  },
  {
    type: 'quiz',
    question: 'Touriga Nacional 的原產地是哪個葡萄牙產區？',
    options: ['Douro', 'Dão', 'Alentejo', 'Bairrada'],
    answer: 1,
    explanation: 'Touriga Nacional 原產於 Dão 產區，後來擴植到 Douro、Alentejo 等地。在 Dão 的花崗岩高地和涼爽氣候下，Touriga Nacional 展現最細膩優雅的一面，與 Douro 的飽滿強健風格形成鮮明對比。',
  },
  {
    type: 'summary',
    message: '恭喜完成 Dão 課程！',
    keyPoints: [
      'Dão 是花崗岩高原（400–800m），三面山脈保護，溫和大陸型氣候',
      'Touriga Nacional 的原產地，在此展現最優雅細膩的紫羅蘭花香',
      'Encruzado 是旗艦白品種，媲美布根地，陳年潛力強',
      '1990 年後獨立酒莊崛起，Dão 紅白酒品質大幅提升',
    ],
  },
]

// P2M2L2 — Bairrada：高酸 Baga 紅酒與葡萄牙氣泡酒
const P2M2L2_slides = [
  {
    type: 'cover',
    icon: '🫧',
    gradient: 'linear-gradient(135deg, #1565c0, #283593)',
    title: 'Bairrada：Baga 紅酒與葡萄牙氣泡酒',
    subtitle: 'Level 2 · 中部山地產區',
    points: [
      { icon: '🍒', label: 'Baga 的王國', text: '高酸高單寧的 Baga 品種是 Bairrada 的靈魂，陳年後展現傳奇複雜度' },
      { icon: '🫧', label: '葡萄牙最佳氣泡酒', text: 'Bairrada 的 Espumante 是葡萄牙頂級氣泡酒，以傳統法釀造' },
      { icon: '🌊', label: '大西洋影響', text: '受大西洋影響，黏土石灰岩土壤，保留了 Baga 的天然高酸' },
    ],
  },
  {
    type: 'map',
    title: 'Bairrada DOC 產區地圖',
    description: 'Bairrada 位於大西洋沿岸，Porto 以南，以厚皮高單寧的 Baga 紅酒與傳統法氣泡酒 Espumante 聞名',
    mapRegion: 'Bairrada',
  },,

  {
    type: 'content',
    icon: '🍒',
    title: 'Baga：葡萄牙最挑戰性的品種',
    html: `
      <p><strong>Baga</strong> 是 Bairrada DOC 的代表品種，也是葡萄牙酸度和單寧最高的品種之一。</p>
      <h4>🔬 品種特性</h4>
      <ul>
        <li><strong>極高酸度</strong>：可媲美 Sangiovese 或 Nebbiolo，pH 值通常低於 3.2</li>
        <li><strong>高澀感單寧</strong>：果皮厚，單寧豐富但年輕時粗澀</li>
        <li><strong>中等酒精</strong>：12–13%（因高酸度顯得均衡）</li>
        <li><strong>晚熟品種</strong>：需要到 10 月下旬才能達到最佳成熟度，雨季風險高</li>
      </ul>
      <h4>🍷 陳年演化（Baga 的真正魅力）</h4>
      <ul>
        <li><strong>年輕時（0–5 年）</strong>：緊澀難喝，高酸高單寧，紅漿果香但未展開</li>
        <li><strong>中期（5–15 年）</strong>：單寧軟化，展現玫瑰乾花、皮革、泥土香</li>
        <li><strong>成熟期（15–30 年）</strong>：絲滑複雜，菌菇、焦油、茶葉，頂級老年份可媲美 Barolo</li>
      </ul>
      <h4>🌿 現代釀酒趨勢</h4>
      <ul>
        <li>傳統派：長時間浸皮，重單寧，需陳年 10+ 年</li>
        <li>現代派（Luis Pato 等）：更短浸皮，更早採收，軟化單寧，適合早飲</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🫧',
    title: 'Bairrada Espumante：葡萄牙的香檳！',
    html: `
      <p>Bairrada 不只有 Baga 紅酒，它也是葡萄牙<strong>最著名的氣泡酒（Espumante）</strong>產地。</p>
      <h4>🥂 為什麼 Bairrada 適合氣泡酒？</h4>
      <ul>
        <li><strong>大西洋氣候</strong>：高酸度，是優質氣泡酒的基礎</li>
        <li><strong>石灰岩黏土土壤</strong>：賦予礦物質感，類似香檳區的白堊土</li>
        <li><strong>Baga 品種</strong>：高酸，帶紅漿果的優雅氣泡紅酒</li>
        <li><strong>Bical / Maria Gomes</strong>：主要白品種，清爽礦物感，適合傳統法氣泡酒</li>
      </ul>
      <h4>📋 Bairrada Espumante 規定</h4>
      <ul>
        <li>傳統法（Método Clássico）：瓶中二次發酵，需在酒泥上陳年至少 <strong>9 個月</strong></li>
        <li>頂級款（Reserva）：酒泥陳年 <strong>18+ 個月</strong></li>
        <li>主要品種：Bical、Maria Gomes（白）；Baga（紅）</li>
      </ul>
      <h4>🏆 代表酒莊</h4>
      <ul>
        <li><strong>Luís Pato</strong>：Bairrada 最知名的現代派大師，Baga 與 Espumante 均卓越</li>
        <li><strong>Filipa Pato</strong>：Luís 之女，更現代風格，獲國際高評分</li>
        <li><strong>Sidónio de Sousa</strong>：傳統派 Baga，需陳年 10+ 年顯魅力</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: 'Baga 傳統風格 vs. 現代風格',
    items: [
      { icon: '🏺', label: '傳統 Baga（陳年派）', desc: '長浸皮，高單寧高酸，需陳年 10–20 年，展現皮革・菌菇・茶葉複雜度。代表：Sidónio de Sousa', color: '#37474f' },
      { icon: '🍒', label: '現代 Baga（早飲派）', desc: '短浸皮或全果發酵，軟化單寧，更多果香，3–8 年可飲。代表：Filipa Pato', color: '#c0392b' },
      { icon: '🫧', label: 'Baga 氣泡酒（Espumante）', desc: '傳統法，高酸紅漿果香，細緻氣泡，酒泥陳年 9–18 個月。是葡萄牙最特殊的紅色氣泡酒', color: '#8B0000' },
      { icon: '⚪', label: 'Bical 白色 Espumante', desc: '以 Bical 和 Maria Gomes 釀造的傳統法白色氣泡酒，礦物清爽，性價比極高', color: '#1565c0' },
    ],
  },
  {
    type: 'quiz',
    question: 'Baga 品種最著名的陳年特色是什麼？',
    options: ['年輕時即圓潤易飲，無需陳年', '年輕時緊澀，但陳年後展現皮革・菌菇等複雜風味', '以花香濃郁著稱，不適合陳年', '高酒精低酸，類似 Alentejo 紅酒'],
    answer: 1,
    explanation: 'Baga 是葡萄牙酸度和單寧最高的品種之一，年輕時高度緊澀難飲，但陳年 10–20 年後可展現玫瑰乾花、皮革、泥土、菌菇等複雜香氣，頂級老年份可媲美 Barolo。',
  },
  {
    type: 'quiz',
    question: 'Bairrada 氣泡酒（Espumante）使用什麼釀造方法？',
    options: ['查瑪特法（Charmat/Tank Method）', '傳統法（Método Clássico/Traditional Method）', '碳酸充氣法', '自然氣泡（Pétillant Naturel）'],
    answer: 1,
    explanation: 'Bairrada Espumante 使用傳統法（Método Clássico），即在瓶中進行二次發酵，最低需在酒泥上陳年 9 個月（頂級款 18+ 個月），類似法國香檳的製作方式。',
  },
  {
    type: 'summary',
    message: '恭喜完成 Bairrada 課程！',
    keyPoints: [
      'Baga 是葡萄牙最高酸、最高單寧的品種，年輕難飲，陳年後展現複雜度',
      'Bairrada Espumante 是葡萄牙最著名氣泡酒，傳統法，酒泥陳年 9–18 個月',
      '傳統派（長陳年）vs. 現代派（早飲）是 Bairrada 的重要風格對立',
      'Luís Pato 和 Filipa Pato 是推動 Bairrada 國際知名度的重要人物',
    ],
  },
]

// P2M2L3 — Terras da Beira / Beira Interior：山地極端氣候
const P2M2L3_slides = [
  {
    type: 'map',
    title: 'Bairrada DOC 產區地圖',
    description: '大西洋與 Serra do Buçaco 山脈之間的黏土帶——Baga 葡萄的故鄉，葡萄牙最具陳年潛力的紅酒產地',
    mapRegion: 'Bairrada',
  },,

  {
    type: 'cover',
    icon: '🏔️',
    gradient: 'linear-gradient(135deg, #4e342e, #6d4c41)',
    title: 'Beira Interior：葡萄牙的高山葡萄酒',
    subtitle: 'Level 2 · 中部山地產區',
    points: [
      { icon: '🏔️', label: '高山產區', text: '緊鄰 Serra da Estrela（葡萄牙最高峰），海拔 400–900m，是葡萄牙最高的 DOC 之一' },
      { icon: '🇪🇸', label: '西班牙邊界', text: '毗鄰西班牙，受大陸型氣候影響，夏熱冬寒，溫差極大' },
      { icon: '🍇', label: '本土品種保存', text: 'Rufete・Marufo 等罕見本土品種在此保存，是葡萄牙品種多樣性的活化石' },
    ],
  },
  {
    type: 'content',
    icon: '🗺️',
    title: 'Beira Interior：三個子 DOC',
    html: `
      <p><strong>Beira Interior DOC</strong> 是葡萄牙中部山地的主要產區，緊鄰 Serra da Estrela（2,000m 以上）和西班牙邊界。</p>
      <h4>🗺️ 三個子產區 DOC</h4>
      <ul>
        <li><strong>Castelo Rodrigo</strong>：最北端，接近西班牙 Castilla。大陸型氣候最極端，以 Touriga Nacional 和 Marufo 為主，酒色深、濃郁</li>
        <li><strong>Pinhel</strong>：中部，花崗岩土壤，較涼爽，白酒（Fonte Cal、Siria）清爽突出</li>
        <li><strong>Cova da Beira</strong>：最南端，谷地地形，受 Serra da Estrela 保護，是最大子產區，紅白酒均有生產</li>
      </ul>
      <h4>🌡️ 氣候特色</h4>
      <ul>
        <li>大陸型氣候主導：夏季高溫 35–38°C，冬季可至 -5°C</li>
        <li>年雨量 500–700mm，比 Dão 乾燥</li>
        <li>強烈溫差有利保留葡萄的天然酸度</li>
      </ul>
      <h4>🍇 主要品種</h4>
      <ul>
        <li>紅：<strong>Touriga Nacional・Rufete・Marufo・Tinta Amarela</strong></li>
        <li>白：<strong>Siria（= Roupeiro）・Fonte Cal・Arinto</strong></li>
      </ul>
    `,
  },
  {
    type: 'quiz',
    question: 'Beira Interior DOC 包含哪三個子產區？',
    options: ['Dão・Bairrada・Chaves', 'Castelo Rodrigo・Pinhel・Cova da Beira', 'Valpaços・Planalto Mirandês・Chaves', 'Borba・Redondo・Reguengos'],
    answer: 1,
    explanation: 'Beira Interior DOC 包含三個子產區：Castelo Rodrigo（最北，最極端大陸型）、Pinhel（中部，花崗岩，白酒優秀）、Cova da Beira（最南，谷地，最大）。三者都緊鄰 Serra da Estrela 和西班牙邊界。',
  },
  {
    type: 'quiz',
    question: '在 Beira Interior，哪個品種是罕見的本土紅品種，在其他產區幾乎看不到？',
    options: ['Touriga Nacional', 'Aragonez', 'Rufete', 'Trincadeira'],
    answer: 2,
    explanation: 'Rufete 是 Beira Interior（特別是 Castelo Rodrigo）特有的本土紅品種，酒體中等，帶紅漿果和香料感，在其他葡萄牙產區極為罕見。它是葡萄牙品種多樣性的珍貴遺產。',
  },
  {
    type: 'summary',
    message: '恭喜完成 Beira Interior 課程！',
    keyPoints: [
      'Beira Interior 緊鄰 Serra da Estrela 和西班牙，是葡萄牙最高海拔產區之一',
      '三個子 DOC：Castelo Rodrigo（紅酒）・Pinhel（白酒）・Cova da Beira（混合）',
      '大陸型氣候，夏熱冬寒，溫差大，有助保留酸度',
      'Rufete・Marufo 等稀有本土品種在此保存，是葡萄牙的品種活化石',
    ],
  },
]

// P2M2L4 — Terras de Cister：Távora-Varosa 高海拔氣泡酒
const P2M2L4_slides = [
  {
    type: 'cover',
    icon: '🏰',
    gradient: 'linear-gradient(135deg, #37474f, #546e7a)',
    title: 'Távora-Varosa：葡萄牙最高海拔氣泡酒',
    subtitle: 'Level 2 · Terras de Cister',
    points: [
      { icon: '🏔️', label: '葡萄牙最高海拔 DOC', text: '海拔 500–900m，是全葡萄牙海拔最高的葡萄酒產區' },
      { icon: '🫧', label: '氣泡酒傳統', text: '1989 年成為葡萄牙第一個官方認可的氣泡酒 DOC（Espumante Bruto）' },
      { icon: '⛪', label: '西多會修道院', text: 'Terras de Cister（西多之地），葡萄酒文化源自西多會 Salzedas 修道院' },
    ],
  },
  {
    type: 'map',
    title: 'Távora-Varosa DOC 產區地圖',
    description: '葡萄牙海拔最高的 DOC（500–700 公尺），Douro 河上游南岸，涼爽氣候出產最精緻的傳統法氣泡酒',
    mapRegion: 'Távora-Varosa',
  },,

  {
    type: 'content',
    icon: '🗺️',
    title: 'Távora-Varosa DOC 的特色',
    html: `
      <p><strong>Távora-Varosa DOC</strong> 位於葡萄牙中北部，是全葡萄牙海拔最高的葡萄酒產區，也是第一個法定氣泡酒 DOC。</p>
      <h4>🏔️ 地理與氣候</h4>
      <ul>
        <li>位於 <strong>Douro 以南，Dão 以北</strong>的山地，海拔 500–900m</li>
        <li>大陸型氣候，夏涼冬寒，日夜溫差大</li>
        <li>土壤：花崗岩和片岩，貧瘠排水良好</li>
        <li>高海拔確保了葡萄緩慢成熟，保留高酸度——是釀造優質氣泡酒的理想條件</li>
      </ul>
      <h4>🫧 氣泡酒 DOC 的誕生</h4>
      <ul>
        <li>1989 年，Távora-Varosa 成為葡萄牙<strong>第一個官方氣泡酒 DOC</strong></li>
        <li>傳統法（Método Clássico），瓶中二次發酵</li>
        <li>酒泥陳年最少 <strong>18 個月</strong>（比 Bairrada 標準更高）</li>
        <li>主要品種：<strong>Malvasia Fina・Gouveio（Verdelho）・Cerceal・Arinto</strong></li>
      </ul>
      <h4>🍾 代表酒莊</h4>
      <ul>
        <li><strong>Murganheira</strong>：葡萄牙最大的傳統法氣泡酒生產商，Távora-Varosa 的標竿</li>
        <li><strong>Caves Aliança</strong>：大型酒商，重要的 Espumante 生產商</li>
      </ul>
    `,
  },
  {
    type: 'quiz',
    question: 'Távora-Varosa DOC 在葡萄牙氣泡酒歷史上的特殊地位是？',
    options: ['葡萄牙產量最大的氣泡酒產區', '葡萄牙第一個官方認可的氣泡酒 DOC（1989 年）', '葡萄牙海拔最低的氣泡酒產區', '使用查瑪特法的代表性氣泡酒產區'],
    answer: 1,
    explanation: '1989 年，Távora-Varosa 成為葡萄牙第一個官方認可的氣泡酒（Espumante）DOC。高海拔（500–900m）和大陸型氣候確保了高酸度，使用傳統法（Método Clássico），酒泥陳年最少 18 個月。',
  },
  {
    type: 'summary',
    message: '恭喜完成 Terras de Cister / Távora-Varosa 課程！',
    keyPoints: [
      'Távora-Varosa 是葡萄牙最高海拔 DOC（500–900m），也是最涼爽的產區之一',
      '1989 年成為葡萄牙第一個官方氣泡酒 DOC，使用傳統法',
      '酒泥陳年最少 18 個月，品質標準高於 Bairrada',
      '西多會修道院（Terras de Cister）是此地葡萄酒文化的歷史根源',
    ],
  },
]

// P2M3L1 — Lisboa：九大子產區的多元風格
const P2M3L1_slides = [
  {
    type: 'map',
    title: 'Beira Interior DOC 產區地圖',
    description: '葡萄牙最高海拔產區——Serra da Estrela 山麓，Pinhel、Castelo Rodrigo、Cova da Beira 三個子 DOC',
    mapRegion: 'Beira Interior',
  },,

  {
    type: 'cover',
    icon: '🏙️',
    gradient: 'linear-gradient(135deg, #1976d2, #0288d1)',
    title: 'Lisboa：里斯本周邊的多元葡萄酒',
    subtitle: 'Level 2 · 里斯本周邊產區',
    points: [
      { icon: '🗺️', label: '九大子產區', text: '涵蓋里斯本北方至塔古斯河口，地形多樣，各子產區風格迥異' },
      { icon: '🌊', label: '大西洋影響', text: '受大西洋影響，比 Alentejo 更涼爽，土壤從沙土到石灰岩多樣' },
      { icon: '🍾', label: '多樣性代名詞', text: '從極輕盈的 Colares 砂丘白酒到飽滿的 Torres Vedras 紅酒，葡萄牙縮影' },
    ],
  },
  {
    type: 'content',
    icon: '🗺️',
    title: 'Lisboa：九個子 DOC 產區',
    html: `
      <p><strong>Lisboa</strong>（里斯本）葡萄酒產區是葡萄牙最多樣的大區，包含九個子 DOC，延伸自里斯本北部到塔古斯河下游。</p>
      <h4>🗺️ 九個子 DOC</h4>
      <table style="width:100%;border-collapse:collapse;font-size:0.85em">
        <tr style="background:#1976d2;color:white">
          <th style="padding:6px;text-align:left">子 DOC</th>
          <th style="padding:6px;text-align:left">特色</th>
          <th style="padding:6px;text-align:left">主要品種</th>
        </tr>
        <tr style="background:#f5f5f5">
          <td style="padding:5px"><strong>Arruda</strong></td>
          <td style="padding:5px">石灰岩丘陵，海洋性氣候</td>
          <td style="padding:5px">Fernão Pires、Aragonez</td>
        </tr>
        <tr>
          <td style="padding:5px"><strong>Alenquer</strong></td>
          <td style="padding:5px">里斯本北部，多樣土壤，近代品質飛升</td>
          <td style="padding:5px">Castelão、Touriga Nacional</td>
        </tr>
        <tr style="background:#f5f5f5">
          <td style="padding:5px"><strong>Torres Vedras</strong></td>
          <td style="padding:5px">傳統大量生產區，正在轉型精品</td>
          <td style="padding:5px">Touriga Nacional、Vital</td>
        </tr>
        <tr>
          <td style="padding:5px"><strong>Óbidos</strong></td>
          <td style="padding:5px">石灰岩，大西洋影響，芳香白酒</td>
          <td style="padding:5px">Arinto、Fernão Pires</td>
        </tr>
        <tr style="background:#f5f5f5">
          <td style="padding:5px"><strong>Lourinhã</strong></td>
          <td style="padding:5px">以白蘭地（Aguardente）著名</td>
          <td style="padding:5px">Malvasia Rei（白蘭地品種）</td>
        </tr>
        <tr>
          <td style="padding:5px"><strong>Encostas d'Aire</strong></td>
          <td style="padding:5px">石灰岩，海拔較高，清爽白酒</td>
          <td style="padding:5px">Fernão Pires、Arinto</td>
        </tr>
        <tr style="background:#f5f5f5">
          <td style="padding:5px"><strong>Bucelas</strong> ⭐</td>
          <td style="padding:5px">Arinto 高酸白酒的聖地，歷史名區</td>
          <td style="padding:5px">Arinto（至少 75%）</td>
        </tr>
        <tr>
          <td style="padding:5px"><strong>Colares</strong> ⭐</td>
          <td style="padding:5px">沙丘砂土，未嫁接 Ramisco，世界罕見</td>
          <td style="padding:5px">Ramisco（紅）、Malvasia（白）</td>
        </tr>
        <tr style="background:#f5f5f5">
          <td style="padding:5px"><strong>Carcavelos</strong></td>
          <td style="padding:5px">幾乎滅絕的半甜加烈酒 DOC</td>
          <td style="padding:5px">Galego Dourado 等稀有品種</td>
        </tr>
      </table>
    `,
  },
  {
    type: 'compare',
    title: 'Lisboa 大區：海岸 vs. 內陸風格對比',
    items: [
      { icon: '🌊', label: '海岸產區（Colares / Bucelas）', desc: '大西洋冷風直吹，砂土或石灰岩，清爽高酸，輕盈礦物，Arinto 和 Ramisco 的精華地帶', color: '#1976d2' },
      { icon: '🏔️', label: '內陸丘陵（Alenquer / Arruda）', desc: '距海較遠，夏季較溫暖，石灰岩紅土，出產更豐滿的紅酒，Touriga Nacional 和 Castelão 為主', color: '#37474f' },
      { icon: '🏭', label: '傳統大量產區（Torres Vedras）', desc: '歷史上以大量廉價酒為主，近年轉型精品，引入 Touriga Nacional，品質開始提升', color: '#795548' },
      { icon: '🍾', label: '特殊風格（Carcavelos/Lourinhã）', desc: '加烈甜酒（Carcavelos）和白蘭地（Lourinhã），是 Lisboa 中的獨特珍品', color: '#8e44ad' },
    ],
  },
  {
    type: 'quiz',
    question: 'Lisboa 大區共有幾個子 DOC 產區？',
    options: ['5 個', '7 個', '9 個', '12 個'],
    answer: 2,
    explanation: 'Lisboa 大區共有九個子 DOC 產區：Arruda・Alenquer・Torres Vedras・Óbidos・Lourinhã・Encostas d\'Aire・Bucelas・Colares・Carcavelos，各有不同的土壤、氣候和主要品種。',
  },
  {
    type: 'quiz',
    question: '以下哪個 Lisboa 子 DOC 以「砂丘土壤上的未嫁接老藤 Ramisco」著名，是世界葡萄酒界的活化石？',
    options: ['Bucelas', 'Alenquer', 'Torres Vedras', 'Colares'],
    answer: 3,
    explanation: 'Colares 是世界上最罕見的葡萄酒產區之一，其葡萄藤種植在大西洋沿岸的沙丘上，根系直接扎入深層沙土。因為砂土防禦了根瘤蚜（Phylloxera），Colares 的 Ramisco 葡萄藤從未需要嫁接，是全球少數仍有大量未嫁接老藤的產區。',
  },
  {
    type: 'summary',
    message: '恭喜完成 Lisboa 大區課程！',
    keyPoints: [
      'Lisboa 有九個子 DOC，是葡萄牙最多樣的大區',
      '海岸產區（Colares/Bucelas）：清爽高酸，礦物感突出',
      '內陸丘陵（Alenquer/Arruda）：豐滿紅酒，Touriga Nacional 為主',
      'Colares 的未嫁接老藤 Ramisco 是世界級珍品',
    ],
  },
]

// P2M3L2 — Bucelas・Colares・Carcavelos：里斯本三寶
const P2M3L2_slides = [
  {
    type: 'cover',
    icon: '🏛️',
    gradient: 'linear-gradient(135deg, #4a148c, #6a1b9a)',
    title: 'Bucelas・Colares・Carcavelos：里斯本三寶',
    subtitle: 'Level 2 · 里斯本三個歷史 DOC',
    points: [
      { icon: '🍋', label: 'Bucelas', text: 'Arinto 高酸白酒，拿破崙時代即享有盛名的歷史名區' },
      { icon: '🌊', label: 'Colares', text: '砂丘老藤 Ramisco，世界最稀有的葡萄酒之一，幾乎從地球上消失' },
      { icon: '🥃', label: 'Carcavelos', text: '半甜加烈酒，曾以出口英國聞名，現僅剩一個酒莊生產' },
    ],
  },
  {
    type: 'map',
    title: '里斯本三寶 DOC 產區地圖',
    description: 'Bucelas（石灰岩高地 Arinto）、Colares（砂丘老藤 Ramisco）、Carcavelos（稀有加烈甜白）——里斯本外圍三個珍稀歷史 DOC',
    mapRegions: ['Bucelas', 'Colares', 'Carcavelos'],
  },,

  {
    type: 'content',
    icon: '🍋',
    title: 'Bucelas：Arinto 高酸白酒的守護者',
    html: `
      <p><strong>Bucelas DOC</strong> 是葡萄牙最重要的白酒歷史 DOC 之一，以 Arinto 品種的高酸白酒著名。</p>
      <h4>📜 歷史</h4>
      <ul>
        <li>1911 年成為法定產區（葡萄牙最早的 DOC 之一）</li>
        <li>17–19 世紀是英國市場的寵兒，被 Wellington 公爵帶到歐洲</li>
        <li>位於里斯本北方約 30 公里，石灰岩土壤</li>
      </ul>
      <h4>🍋 Arinto 的魅力</h4>
      <ul>
        <li><strong>法規</strong>：Bucelas DOC 白酒必須使用至少 <strong>75% Arinto</strong></li>
        <li>石灰岩土壤賦予礦物質感和結構骨架</li>
        <li>高酸度（pH 3.0–3.2），可陳年 5–15 年</li>
        <li>風格：清爽的青檸、白葡萄柚、礦物質，帶輕微苦澀收尾</li>
      </ul>
      <h4>🏆 代表酒莊</h4>
      <ul>
        <li><strong>Quinta da Murta</strong>：Bucelas 的代表，Arinto 純粹主義者</li>
        <li><strong>Quinta de Sant'Ana</strong>：有機農法，單一葡萄園 Arinto</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🌊',
    title: 'Colares：瀕危的砂丘活化石',
    html: `
      <p><strong>Colares DOC</strong> 是葡萄牙——甚至全球——最瀕危的葡萄酒產區之一，卻同時擁有世界上最獨特的風土。</p>
      <h4>🪨 砂丘與未嫁接老藤</h4>
      <ul>
        <li>葡萄藤種植在<strong>大西洋海岸砂丘</strong>（沙漠般的砂土）上</li>
        <li>根瘤蚜無法在砂土中生存 → Colares 的葡萄藤<strong>從未嫁接過</strong></li>
        <li>樹齡達 100–200 年的真正老藤，部分超過 300 年</li>
        <li>每株葡萄藤的產量極低（不超過 1–2 瓶酒）</li>
      </ul>
      <h4>🍷 Ramisco 品種</h4>
      <ul>
        <li>Colares 紅酒使用 Ramisco，一個只在此地存在的本土品種</li>
        <li>高酸、高單寧，帶海洋鹽風和鐵鏽礦物感，年輕時粗澀</li>
        <li>陳年後（10–30 年）展現獨一無二的鹽海風、皮革和泥土</li>
      </ul>
      <h4>⚠️ 瀕危現狀</h4>
      <ul>
        <li>20 世紀後半葉，海邊度假村大量建設，葡萄園面積從 4,000 公頃縮小至不足 <strong>20 公頃</strong></li>
        <li>目前只有<strong>少數生產商</strong>繼續生產 Colares DOC（最著名：Viúva Gomes 合作社、António Bernardino）</li>
        <li>這些葡萄酒是真正的世界瀕危品——每年產量可能不到幾千瓶</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: '里斯本三寶：Bucelas / Colares / Carcavelos 對比',
    items: [
      { icon: '🍋', label: 'Bucelas', desc: 'Arinto 高酸白酒，石灰岩，礦物清爽，可陳年 15 年。葡萄牙最重要的歷史白酒 DOC', color: '#7a8c3a' },
      { icon: '🌊', label: 'Colares', desc: '砂丘未嫁接老藤 Ramisco，鹽海礦物感，世界最稀有，產量極少，已成功收藏珍品', color: '#1565c0' },
      { icon: '🥃', label: 'Carcavelos', desc: '半甜加烈酒（類似 Sherry），曾出口英國，現幾乎滅絕，僅 Quinta dos Pesos 仍生產', color: '#8B4513' },
    ],
  },
  {
    type: 'quiz',
    question: 'Colares 葡萄藤為何從未需要嫁接（仍使用原根葡萄藤）？',
    options: ['法規禁止嫁接', '砂丘砂土環境中根瘤蚜（Phylloxera）無法生存', '使用特殊抗根瘤蚜砧木', '氣候過於涼爽，根瘤蚜無法繁殖'],
    answer: 1,
    explanation: 'Colares 的葡萄藤種植在大西洋海岸的深層砂土（沙丘）中，根瘤蚜（Phylloxera）無法在鬆散砂土中生存和傳播，因此 Colares 的葡萄藤從未受到 19 世紀根瘤蚜病害的影響，得以保留原根未嫁接老藤。',
  },
  {
    type: 'quiz',
    question: 'Bucelas DOC 的主要葡萄品種及最低比例規定是？',
    options: ['Alvarinho，60%', 'Encruzado，70%', 'Arinto，75%', 'Loureiro，50%'],
    answer: 2,
    explanation: 'Bucelas DOC 規定白酒必須使用至少 75% 的 Arinto 品種。Arinto 在 Bucelas 的石灰岩土壤中表現出色，展現清爽高酸和礦物質感，是葡萄牙最重要的白酒歷史 DOC 之一。',
  },
  {
    type: 'summary',
    message: '恭喜完成里斯本三寶課程！',
    keyPoints: [
      'Bucelas：Arinto 高酸白酒，石灰岩，75% Arinto 法規要求，可陳年 15 年',
      'Colares：砂丘未嫁接老藤 Ramisco，世界最稀有，根瘤蚜無法在砂土生存',
      'Carcavelos：半甜加烈酒，現幾乎滅絕，僅剩一家生產商',
      '三者都是里斯本郊區的歷史名區，代表葡萄牙葡萄酒的活化石',
    ],
  },
]

// P2M3L3 — Tejo：泰加斯河谷的豐沛葡萄園
const P2M3L3_slides = [
  {
    type: 'map',
    title: 'Lisboa IGP 產區地圖',
    description: '里斯本大都會圈的九個子 DOC——從辛特拉海岸（Colares）到 Torres Vedras，歷史與現代並存',
    mapRegions: ['Lisboa', 'Bucelas', 'Colares', 'Carcavelos', 'Alenquer', 'Arruda', 'Torres Vedras', 'Lourinhã', 'Óbidos', 'Encostas d'Aire'],
    geojsonUrl: '/portugal/igp_regions.geojson',
  },,

  {
    type: 'cover',
    icon: '🌊',
    gradient: 'linear-gradient(135deg, #2e7d32, #388e3c)',
    title: 'Tejo：泰加斯河谷的葡萄酒',
    subtitle: 'Level 2 · 泰加斯河谷',
    points: [
      { icon: '🌊', label: '泰加斯河灌溉', text: '葡萄牙最長的河流（也流經西班牙），肥沃沖積平原與内陸高地並存' },
      { icon: '🍇', label: '豐沛高產', text: '歷史上是葡萄牙最重要的大量生產 DOC，以豐沛的紅酒供應里斯本市場' },
      { icon: '🔄', label: '現代轉型', text: '1990 年代後引入國際品種（Cabernet Sauvignon、Syrah），開始精品化' },
    ],
  },
  {
    type: 'content',
    icon: '🗺️',
    title: 'Tejo DOC：里斯本的糧倉',
    html: `
      <p><strong>Tejo DOC</strong>（舊稱 Ribatejo）沿著泰加斯河（Tejo）兩岸延伸，從西班牙邊界一直到里斯本以東的入海口。</p>
      <h4>🗺️ 地理分區</h4>
      <ul>
        <li><strong>河谷地帶（Campo do Tejo）</strong>：沖積平原，土壤肥沃，高產，傳統大量生產區</li>
        <li><strong>丘陵地帶（Charneca）</strong>：砂岩、黏土，較乾旱，品質更高，近代精品酒莊集中此區</li>
        <li><strong>北部山地</strong>：靠近 Serra de São Mamede，海拔較高，保留酸度</li>
      </ul>
      <h4>🌡️ 氣候</h4>
      <ul>
        <li>地中海型和大陸型混合，夏季熱（30–35°C），冬季溫和</li>
        <li>比 Alentejo 略涼爽，但比 Lisboa 更乾燥</li>
        <li>泰加斯河調節了局部氣候，帶來夜間涼爽</li>
      </ul>
      <h4>🍇 主要品種</h4>
      <ul>
        <li>紅：<strong>Castelão（= Fernão Pires 的紅酒版）・Trincadeira・Aragonez・Touriga Nacional</strong></li>
        <li>白：<strong>Fernão Pires（最廣泛）・Arinto・Sauvignon Blanc</strong></li>
        <li>國際品種：Cabernet Sauvignon、Syrah、Merlot（IGP 標示）</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: 'Tejo 河谷 vs. 丘陵：兩種葡萄酒風格',
    items: [
      { icon: '🌾', label: 'Campo（河谷平原）', desc: '沖積土，肥沃，高產。Castelão 芳香紅酒，Fernão Pires 易飲白酒。大量生產，性價比型', color: '#8B6914' },
      { icon: '🏔️', label: 'Charneca（丘陵高地）', desc: '砂岩黏土，較貧瘠，低產。Touriga Nacional 和 Syrah 展現更多結構，是 Tejo 精品的核心', color: '#4e342e' },
      { icon: '🍾', label: '現代精品（IGP Tejo）', desc: 'Cabernet Sauvignon、Syrah 等國際品種在此表現出色，以 IGP 標示靈活釀造', color: '#2e7d32' },
      { icon: '🌿', label: '有機農法新浪潮', desc: '越來越多的 Tejo 酒莊轉向有機認證，利用河谷的自然資源，生產更可持續的葡萄酒', color: '#388e3c' },
    ],
  },
  {
    type: 'quiz',
    question: 'Tejo DOC 的舊名稱是什麼？',
    options: ['Ribatejo', 'Estremadura', 'Centro', 'Minho'],
    answer: 0,
    explanation: 'Tejo DOC 的舊名稱是 Ribatejo，意為「塔古斯河旁」。2009 年更名為 Tejo，更清楚地反映了這個產區的地理核心——沿泰加斯河（Tejo）的葡萄酒生產區。',
  },
  {
    type: 'quiz',
    question: 'Tejo 最廣泛種植的白葡萄品種是什麼？',
    options: ['Arinto', 'Alvarinho', 'Fernão Pires', 'Loureiro'],
    answer: 2,
    explanation: 'Fernão Pires 是 Tejo（和整個 Lisboa 大區）最廣泛種植的白葡萄品種，芳香易飲，帶茴香和柑橘花香，是 Tejo 日常白酒的骨幹。它在葡萄牙全國的種植面積也名列前茅。',
  },
  {
    type: 'summary',
    message: '恭喜完成 Tejo 課程！',
    keyPoints: [
      'Tejo 舊稱 Ribatejo，沿泰加斯河兩岸，2009 年更名',
      '河谷平原（高產）vs. 丘陵高地（精品）是 Tejo 的兩種截然不同風格',
      'Fernão Pires 是最廣泛種植的白品種，Castelão 和 Touriga Nacional 是主要紅品種',
      '1990 年代後引入國際品種，Tejo 的 IGP 等級允許更靈活的混調',
    ],
  },
]

// P2M4L1 — Alentejo 深度：八大子產區與土壤多樣性
const P2M4L1_slides = [
  {
    type: 'map',
    title: 'Tejo DOC 產區地圖',
    description: '泰加斯河（Tejo）貫穿的農業大平原——里斯本東側的葡萄酒穀倉，現代風格正逐漸取代大量生產',
    mapRegion: 'DoTejo',
  },,

  {
    type: 'cover',
    icon: '☀️',
    gradient: 'linear-gradient(135deg, #e65100, #bf360c)',
    title: 'Alentejo 深度：八大子產區',
    subtitle: 'Level 2 · 南部產區',
    points: [
      { icon: '🗺️', label: '八大子產區', text: 'Portalegre・Borba・Redondo・Reguengos・Vidigueira・Évora・Granja-Amareleja・Moura' },
      { icon: '🪨', label: '土壤多樣性', text: '從北部 Portalegre 的花崗岩到南部 Vidigueira 的片岩，土壤類型豐富' },
      { icon: '🚀', label: '崛起之路', text: '1990 年後葡萄牙最快速發展的產區，現為葡萄牙出口量最大的 DOC' },
    ],
  },
  {
    type: 'content',
    icon: '🗺️',
    title: 'Alentejo 八大子產區詳解',
    html: `
      <p>Alentejo DOC 覆蓋葡萄牙南部 1/3 的土地，共有八個子產區，各有不同的土壤和微氣候。</p>
      <table style="width:100%;border-collapse:collapse;font-size:0.85em">
        <tr style="background:#e65100;color:white">
          <th style="padding:6px;text-align:left">子產區</th>
          <th style="padding:6px;text-align:left">位置</th>
          <th style="padding:6px;text-align:left">土壤</th>
          <th style="padding:6px;text-align:left">特色</th>
        </tr>
        <tr style="background:#fff3e0">
          <td style="padding:5px"><strong>Portalegre</strong></td>
          <td style="padding:5px">最北（500–800m）</td>
          <td style="padding:5px">花崗岩</td>
          <td style="padding:5px">最涼爽，優雅白酒，近年轉型明星</td>
        </tr>
        <tr>
          <td style="padding:5px"><strong>Borba</strong></td>
          <td style="padding:5px">中北部</td>
          <td style="padding:5px">大理石・石灰岩</td>
          <td style="padding:5px">大型酒廠重鎮（Borba 合作社），圓潤紅酒</td>
        </tr>
        <tr style="background:#fff3e0">
          <td style="padding:5px"><strong>Redondo</strong></td>
          <td style="padding:5px">中部</td>
          <td style="padding:5px">花崗岩・頁岩</td>
          <td style="padding:5px">海拔較高，比平均更涼爽，精緻風格</td>
        </tr>
        <tr>
          <td style="padding:5px"><strong>Reguengos</strong></td>
          <td style="padding:5px">中南部</td>
          <td style="padding:5px">花崗岩・黏土</td>
          <td style="padding:5px">Reguengos 合作社（最大），Esporão 酒莊</td>
        </tr>
        <tr style="background:#fff3e0">
          <td style="padding:5px"><strong>Évora</strong></td>
          <td style="padding:5px">中部（省會）</td>
          <td style="padding:5px">多樣</td>
          <td style="padding:5px">Alentejo 省會，UNESCO 世界遺產城市</td>
        </tr>
        <tr>
          <td style="padding:5px"><strong>Vidigueira</strong></td>
          <td style="padding:5px">南部</td>
          <td style="padding:5px">片岩・石灰岩</td>
          <td style="padding:5px">白酒最著名（Antão Vaz），Soares da Silva</td>
        </tr>
        <tr style="background:#fff3e0">
          <td style="padding:5px"><strong>Granja-Amareleja</strong></td>
          <td style="padding:5px">最東南</td>
          <td style="padding:5px">砂岩・石灰岩</td>
          <td style="padding:5px">最乾熱，接近西班牙，烈日加烈型風格</td>
        </tr>
        <tr>
          <td style="padding:5px"><strong>Moura</strong></td>
          <td style="padding:5px">最南端</td>
          <td style="padding:5px">片岩・砂土</td>
          <td style="padding:5px">最接近 Algarve，熱帶水果風格</td>
        </tr>
      </table>
    `,
  },
  {
    type: 'content',
    icon: '🚀',
    title: 'Alentejo 的酒莊革命：1990 年代後的崛起',
    html: `
      <p>1990 年代前，Alentejo 的葡萄酒主要由合作社生產，品質粗糙。1990 年代後，一場革命開始了。</p>
      <h4>🔑 崛起的三個關鍵因素</h4>
      <ol>
        <li><strong>私人酒莊投資</strong>：大量資金投入，引進不鏽鋼發酵桶和法國橡木桶，現代化釀造設備</li>
        <li><strong>溫控技術</strong>：大西洋夏季高溫曾是最大障礙，溫控發酵讓白酒保持清爽</li>
        <li><strong>Alicante Bouschet 的重新發現</strong>：這個來自法國的染色品種在 Alentejo 展現了超預期的品質</li>
      </ol>
      <h4>🏆 代表性酒莊</h4>
      <ul>
        <li><strong>Esporão</strong>：Reguengos 子區，葡萄牙出口量最大的酒莊，有機農法先鋒</li>
        <li><strong>Herdade do Mouchão</strong>：古典風格，Alicante Bouschet 標竿，需陳年 10+ 年</li>
        <li><strong>Cartuxa（Fundação Eugénio de Almeida）</strong>：Évora 的歷史品牌，旗艦 Pera Manca 是 Alentejo 的 Pétrus</li>
        <li><strong>Cortes de Cima</strong>：丹麥移民酒莊，Syrah 先驅，接近 Vidigueira</li>
      </ul>
    `,
  },
  {
    type: 'quiz',
    question: '以下哪個 Alentejo 子產區以海拔最高（500–800m）和最涼爽的氣候著稱，近年轉型為精品白酒新星？',
    options: ['Reguengos', 'Portalegre', 'Granja-Amareleja', 'Moura'],
    answer: 1,
    explanation: 'Portalegre 是 Alentejo 最北、海拔最高（500–800m）的子產區，氣候比其他子產區涼爽。這裡的花崗岩土壤和較低溫度使白酒保留更多清爽酸度和礦物感，近年成為 Alentejo 精品白酒的新星。',
  },
  {
    type: 'quiz',
    question: 'Alentejo 最知名的旗艦酒款「Pera Manca」由哪個酒莊生產，被稱為 Alentejo 的「Pétrus」？',
    options: ['Esporão', 'Herdade do Mouchão', 'Cartuxa（Fundação Eugénio de Almeida）', 'Cortes de Cima'],
    answer: 2,
    explanation: 'Pera Manca 由位於 Évora 的 Cartuxa（Fundação Eugénio de Almeida）生產，是 Alentejo 最具傳奇性的旗艦酒款，被稱為「Alentejo 的 Pétrus」。只在最優秀的年份發布，同時有紅酒和白酒版本。',
  },
  {
    type: 'summary',
    message: '恭喜完成 Alentejo 深度課程！',
    keyPoints: [
      '八大子產區：從最涼的 Portalegre（花崗岩，北）到最熱的 Granja-Amareleja（最東南）',
      'Vidigueira：白酒明星，Antão Vaz 品種表現最佳',
      'Reguengos：最大子產區，Esporão 酒莊在此',
      '1990 年代的酒莊革命讓 Alentejo 成為葡萄牙出口量最大的 DOC',
    ],
  },
]

// P2M4L2 — Península de Setúbal：Moscatel 甜酒傳奇
const P2M4L2_slides = [
  {
    type: 'cover',
    icon: '🍯',
    gradient: 'linear-gradient(135deg, #f57f17, #e65100)',
    title: 'Península de Setúbal：Moscatel 傳奇',
    subtitle: 'Level 2 · 南部半島產區',
    points: [
      { icon: '🍯', label: 'Moscatel de Setúbal', text: '世界最著名的 Moscatel 加烈甜酒之一，可陳年逾百年' },
      { icon: '🍇', label: 'Palmela DOC', text: '同半島上的紅酒 DOC，以 Castelão 品種著名' },
      { icon: '🌊', label: '大西洋半島', text: '夾在泰加斯河口和大西洋之間，氣候受大西洋影響，比 Alentejo 涼爽' },
    ],
  },
  {
    type: 'map',
    title: 'Setúbal & Palmela DOC 產區地圖',
    description: 'Tejo 河口南岸的 Península de Setúbal：Palmela（Castelão 紅酒）與 Setúbal（全球最著名 Moscatel 產地之一）',
    mapRegions: ['Setúbal', 'Palmela'],
  },,

  {
    type: 'content',
    icon: '🍯',
    title: 'Moscatel de Setúbal DOC：液態蜂蜜',
    html: `
      <p><strong>Moscatel de Setúbal</strong> 是葡萄牙最偉大的甜酒之一，以半島北部的石灰岩土壤和獨特的工藝釀造。</p>
      <h4>🔬 釀造工藝</h4>
      <ul>
        <li>使用 Muscat 品種（葡萄牙稱 Moscatel）：主要是 Moscatel de Setúbal（= Muscat of Alexandria）和 Moscatel Roxo（紫色品種）</li>
        <li><strong>加烈時機</strong>：發酵中途加入葡萄烈酒，保留殘糖，最終酒精 17–18%</li>
        <li><strong>麝香葡萄皮浸皮</strong>：裝瓶前在葡萄酒中浸泡額外的新鮮葡萄皮 3–6 個月，增加濃郁花香和麝香氣息——這是 Moscatel de Setúbal 的獨特步驟</li>
      </ul>
      <h4>🌸 風格類型</h4>
      <ul>
        <li><strong>年輕款（5–10 年）</strong>：深金色，麝香花香、橙花、杏桃、無花果，絲滑甜潤</li>
        <li><strong>陳年款（20–40 年）</strong>：深琥珀色，太妃糖、核桃、烘烤咖啡、橙皮，極其複雜</li>
        <li><strong>Moscatel Roxo</strong>：紫色品種，更深色，帶玫瑰、覆盆子和香料的獨特香氣</li>
      </ul>
      <h4>🏰 代表酒莊</h4>
      <ul>
        <li><strong>José Maria da Fonseca</strong>：最重要的 Moscatel de Setúbal 生產商，歷史可追溯至 1834 年，有逾百年老年份的陳年 Moscatel</li>
        <li><strong>Bacalhôa Vinhos de Portugal</strong>：大型集團，JP（José Pinto）的 Azeitão 莊園也產優質 Moscatel</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: 'Moscatel de Setúbal vs. 其他葡萄牙甜酒',
    items: [
      { icon: '🍯', label: 'Moscatel de Setúbal', desc: '最獨特：帶新鮮葡萄皮浸皮工藝，麝香花香最突出。可陳年 50–100 年。來自 Setúbal 石灰岩半島', color: '#f57f17' },
      { icon: '🥃', label: 'Vintage Port（甜）', desc: '深紫黑色，黑莓、巧克力、菸草，高單寧結構。杜羅河片岩梯田的加烈甜酒，陳年 20–50 年', color: '#8B0000' },
      { icon: '🏝️', label: 'Malvasia（Madeira）', desc: '氧化加烈，焦糖蜂蜜熱帶水果，獨特的 Estufagem 加熱工藝。最甜的 Madeira 風格', color: '#8e44ad' },
      { icon: '🔮', label: 'Moscatel Roxo', desc: 'Setúbal 特有紫色 Muscatel 品種，玫瑰覆盆子香，是葡萄牙最珍稀的甜酒之一，產量極少', color: '#c0392b' },
    ],
  },
  {
    type: 'quiz',
    question: 'Moscatel de Setúbal 在釀造過程中有一個獨特的步驟，是其他葡萄牙加烈甜酒沒有的，是什麼？',
    options: ['加入焦糖增甜', '在不鏽鋼桶中加熱至 50°C', '裝瓶前浸泡額外的新鮮葡萄皮 3–6 個月', '二次發酵產生氣泡'],
    answer: 2,
    explanation: 'Moscatel de Setúbal 的獨特步驟是在加烈後、裝瓶前，將新鮮的 Moscatel 葡萄皮加入酒中浸泡 3–6 個月。這個額外的皮接觸工藝大幅提升了麝香花香的濃郁度，是其他葡萄牙加烈甜酒（如波特酒、Madeira）所沒有的。',
  },
  {
    type: 'quiz',
    question: '哪家酒莊是 Moscatel de Setúbal 最重要的生產商，歷史可追溯至 1834 年，並保存有逾百年的老年份陳年 Moscatel？',
    options: ['Quinta do Crasto', 'José Maria da Fonseca', 'Esporão', 'Niepoort'],
    answer: 1,
    explanation: 'José Maria da Fonseca 創立於 1834 年，是 Moscatel de Setúbal 最重要的歷史生產商，保存了多個逾百年的陳年老 Moscatel，是葡萄牙酒業最珍貴的活歷史之一。',
  },
  {
    type: 'summary',
    message: '恭喜完成 Setúbal 半島課程！',
    keyPoints: [
      'Moscatel de Setúbal：獨特的新鮮葡萄皮浸皮工藝，麝香花香最突出',
      '可陳年 50–100 年，José Maria da Fonseca 保有逾百年老年份',
      'Moscatel Roxo 是紫色品種，玫瑰覆盆子香，稀少珍貴',
      'Palmela DOC 位於同半島，以 Castelão 紅酒著名',
    ],
  },
]

// P2M4L3 — Algarve：葡萄牙最南端四大 DOC
const P2M4L3_slides = [
  {
    type: 'map',
    title: 'Setúbal & Palmela 產區地圖',
    description: '里斯本南側半島——Setúbal DOC 以 Moscatel 甜酒聞名，Palmela DOC 以 Castelão 紅酒稱霸',
    mapRegions: ['Setúbal', 'Palmela'],
  },,

  {
    type: 'cover',
    icon: '🏖️',
    gradient: 'linear-gradient(135deg, #0288d1, #0097a7)',
    title: 'Algarve：葡萄牙最南端的葡萄酒',
    subtitle: 'Level 2 · 南部產區',
    points: [
      { icon: '🏖️', label: '旅遊勝地', text: '全葡萄牙最南端，地中海型氣候，以觀光聞名，葡萄酒產業正在快速提升' },
      { icon: '🗺️', label: '四個 DOC', text: 'Lagos・Portimão・Lagoa・Tavira，沿海岸線由西向東分布' },
      { icon: '🌞', label: '最長日照', text: '葡萄牙最南端，年日照超過 3,000 小時，出產豐腴圓潤的紅酒' },
    ],
  },
  {
    type: 'content',
    icon: '🗺️',
    title: 'Algarve 四個 DOC 產區',
    html: `
      <p><strong>Algarve</strong> 是葡萄牙最南端的葡萄酒大區，共有四個 DOC 產區，沿 Atlantic 海岸線由西向東分布。</p>
      <h4>🗺️ 四個 DOC</h4>
      <table style="width:100%;border-collapse:collapse;font-size:0.88em">
        <tr style="background:#0288d1;color:white">
          <th style="padding:6px;text-align:left">DOC</th>
          <th style="padding:6px;text-align:left">位置</th>
          <th style="padding:6px;text-align:left">特色</th>
        </tr>
        <tr style="background:#e1f5fe">
          <td style="padding:5px"><strong>Lagos</strong></td>
          <td style="padding:5px">最西端，大西洋沿岸</td>
          <td style="padding:5px">紅岩海岸，砂岩石灰岩，傳統釀造，最接近大西洋</td>
        </tr>
        <tr>
          <td style="padding:5px"><strong>Portimão</strong></td>
          <td style="padding:5px">中西部</td>
          <td style="padding:5px">現代設施，國際旅遊業帶動品質提升</td>
        </tr>
        <tr style="background:#e1f5fe">
          <td style="padding:5px"><strong>Lagoa</strong></td>
          <td style="padding:5px">中部</td>
          <td style="padding:5px">歷史最古老的 Algarve 葡萄酒中心，石灰岩高地，Lagoa 合作社</td>
        </tr>
        <tr>
          <td style="padding:5px"><strong>Tavira</strong></td>
          <td style="padding:5px">最東端，靠近西班牙</td>
          <td style="padding:5px">最乾熱，接近 Andalucía 風土，Negra Mole 和 Periquita 為主</td>
        </tr>
      </table>
      <h4>🍇 主要品種</h4>
      <ul>
        <li>紅：<strong>Negra Mole・Castelão（= Periquita）・Touriga Nacional・Syrah</strong></li>
        <li>白：<strong>Síria（Roupeiro）・Arinto・Crato Branco</strong></li>
        <li>近年也種植 Viognier、Grenache 等國際品種（以 IGP Algarve 標示）</li>
      </ul>
    `,
  },
  {
    type: 'map',
    title: 'Algarve 產區地圖',
    description: '葡萄牙最南端四個 DOC——Lagos、Portimão、Lagoa、Tavira，地中海氣候，觀光與精品酒並進',
    mapRegions: ['Lagos', 'Portimão', 'Lagoa', 'Tavira'],
  },,

  {
    type: 'compare',
    title: 'Algarve vs. Alentejo：兩個南方大區的差異',
    items: [
      { icon: '🏖️', label: 'Algarve（最南）', desc: '海岸線沿線，大西洋和地中海雙重影響，日照最強，旅遊業帶動發展，以清爽紅酒為主', color: '#0288d1' },
      { icon: '☀️', label: 'Alentejo（南部大地）', desc: '廣大內陸平原，純地中海型，更乾熱。八大子產區，多元土壤，是葡萄牙出口量最大的 DOC', color: '#e65100' },
      { icon: '🌿', label: '共同點', desc: '都是地中海型氣候，年日照超過 3,000 小時，出產圓潤豐腴的紅酒，主要品種有重疊', color: '#2e7d32' },
      { icon: '⬆️', label: '發展趨勢', desc: 'Algarve 受氣候變遷威脅（夏季更熱），釀酒師開始探索高海拔內陸（Serra de Monchique）', color: '#795548' },
    ],
  },
  {
    type: 'quiz',
    question: 'Algarve 最獨特的本土紅葡萄品種是？',
    options: ['Touriga Nacional', 'Aragonez', 'Negra Mole', 'Trincadeira'],
    answer: 2,
    explanation: 'Negra Mole 是 Algarve 最獨特的本土品種，幾乎只在葡萄牙南部生長。名字意為「柔軟的黑色」，釀造的紅酒酒色深，帶紅漿果和香料，口感柔順，是 Algarve 的標誌性品種。',
  },
  {
    type: 'quiz',
    question: 'Algarve 共有幾個 DOC？由西向東它們分別是？',
    options: ['三個：Lagos・Lagoa・Tavira', '四個：Lagos・Portimão・Lagoa・Tavira', '五個：Lagos・Portimão・Silves・Lagoa・Tavira', '兩個：Lagoa・Tavira'],
    answer: 1,
    explanation: 'Algarve 共有四個 DOC 產區，由西向東分別是：Lagos（最西）・Portimão・Lagoa（歷史最古老）・Tavira（最東，靠近西班牙）。四個 DOC 沿 Algarve 海岸線分布。',
  },
  {
    type: 'summary',
    message: '恭喜完成 Algarve 課程！',
    keyPoints: [
      'Algarve 是葡萄牙最南端，四個 DOC：Lagos・Portimão・Lagoa・Tavira',
      '地中海型氣候，年日照超 3,000 小時，出產豐腴圓潤紅酒',
      'Negra Mole 是最獨特的本土品種，幾乎只在 Algarve 生長',
      '旅遊業推動品質提升，釀酒師也開始探索內陸高海拔（Serra de Monchique）以應對氣候變遷',
    ],
  },
]

// P2FinalExam — Level 2 綜合評量
const P2FinalExam_slides = [
  {
    type: 'cover',
    icon: '📝',
    gradient: 'linear-gradient(135deg, #8B0000, #4a1010)',
    title: 'Level 2 綜合評量',
    subtitle: '測試您的葡萄牙重點產區知識',
    points: [
      { icon: '📝', label: '10 道綜合題目', text: '涵蓋 Douro・Porto・Vinho Verde・Dão・Bairrada・Lisboa・Tejo・Alentejo・Setúbal・Algarve' },
      { icon: '🍷', label: 'Level 2 精華', text: '從波特酒類型到各大產區的品種與工藝' },
    ],
  },
  {
    type: 'quiz',
    question: 'Douro 三大子產區中，哪一個是「頂級 Vintage Port 的核心產地」？',
    options: ['Baixo Corgo', 'Cima Corgo', 'Douro Superior', '三個子產區同等重要'],
    answer: 1,
    explanation: 'Cima Corgo 是 Douro 的精華核心，著名的 Quinta do Crasto・Quinta do Vale Meão・Niepoort 等頂級酒莊集中在此，也是 Vintage Port 最高品質的主要來源。',
  },
  {
    type: 'quiz',
    question: 'Tawny Port 的「20 Years」標示代表什麼？',
    options: ['混調中最年輕的酒液至少 20 年', '所有酒液都是 20 年份的單一年份', '混調酒液的平均陳年年數約 20 年', '最少裝瓶後需再陳年 20 年'],
    answer: 2,
    explanation: 'Tawny Port 的年份標示（10/20/30/40 年）代表調配中葡萄酒的平均陳年年數，而非某一特定年份。實際混調可能包含 5–40 年不同酒液，由酒師確保成品符合對應「類型年齡」的風格。',
  },
  {
    type: 'quiz',
    question: 'Vinho Verde DOC 中最頂級的 Alvarinho 子產區是？',
    options: ['Lima', 'Sousa', 'Monção / Melgaço', 'Baião'],
    answer: 2,
    explanation: 'Monção 和 Melgaço 是 Vinho Verde DOC 最頂級的子產區，Alvarinho 在此受山脈保護、夏季較溫暖，可充分成熟，展現最濃郁的桃子杏桃芳香，是整個 Vinho Verde DOC 中最具陳年潛力的白酒。',
  },
  {
    type: 'quiz',
    question: 'Dão DOC 的旗艦白葡萄品種 Encruzado，常被比喻為哪個法國著名白葡萄品種？',
    options: ['Sauvignon Blanc', 'Riesling', 'Chenin Blanc', 'Chardonnay'],
    answer: 3,
    explanation: 'Encruzado 是 Dão 的旗艦白品種，在花崗岩土壤和涼爽氣候下展現礦物感，經橡木桶陳年後發展奶油、燧石複雜度，陳年潛力強，與布根地的 Chardonnay 風格最相近，被稱為「葡萄牙的 Chardonnay」。',
  },
  {
    type: 'quiz',
    question: 'Bairrada DOC 以 Baga 品種著名，Baga 最顯著的特徵是？',
    options: ['低酸、豐腴、早飲型', '高酸、高單寧，年輕難飲但陳年後複雜', '芳香花香，適合年輕飲用', '淺色、輕盈、低單寧'],
    answer: 1,
    explanation: 'Baga 是葡萄牙酸度和單寧最高的品種，年輕時緊澀難喝，但陳年 10–20 年後可展現玫瑰乾花、皮革、菌菇等複雜香氣，頂級老年份可媲美 Barolo。這是 Baga 最重要的特徵。',
  },
  {
    type: 'quiz',
    question: 'Colares DOC 的葡萄藤為何從未需要嫁接，仍使用原根生長？',
    options: ['使用特殊防根瘤蚜砧木', '大西洋海風殺死了根瘤蚜', '砂丘砂土環境讓根瘤蚜（Phylloxera）無法生存', '法規禁止嫁接'],
    answer: 2,
    explanation: 'Colares 的葡萄藤種植在大西洋沿岸的深層砂丘中，根瘤蚜（Phylloxera）無法在鬆散砂土中生存，因此 Colares 從未受到 19 世紀根瘤蚜病害侵害，保留了珍貴的原根未嫁接老藤。',
  },
  {
    type: 'quiz',
    question: 'Alentejo DOC 八大子產區中，哪一個以「最涼爽、最高海拔（500–800m）、白酒精品」著稱？',
    options: ['Reguengos', 'Vidigueira', 'Portalegre', 'Granja-Amareleja'],
    answer: 2,
    explanation: 'Portalegre 是 Alentejo 最北、海拔最高（500–800m）的子產區，受山脈影響氣候較涼爽，花崗岩土壤賦予礦物感，近年成為 Alentejo 精品白酒的新星，與其他炎熱子產區形成鮮明對比。',
  },
  {
    type: 'quiz',
    question: 'Moscatel de Setúbal 在釀造過程中，與其他葡萄牙加烈酒最不同的獨特步驟是？',
    options: ['在陽光下曬乾葡萄再發酵', '裝瓶前浸泡新鮮葡萄皮 3–6 個月增加麝香花香', '加熱氧化工藝（類似 Madeira）', '冷泡法提取香氣'],
    answer: 1,
    explanation: 'Moscatel de Setúbal 的獨特工藝是在加烈後、裝瓶前，將新鮮 Moscatel 葡萄皮加入酒中浸泡 3–6 個月，大幅提升麝香花香濃郁度。這是其他葡萄牙加烈甜酒（波特酒、Madeira）所沒有的步驟。',
  },
  {
    type: 'quiz',
    question: 'Madeira 馬德拉酒「Canteiro」工藝和「Estufagem」工藝的根本差異是？',
    options: ['Canteiro 使用外加葡萄糖增甜，Estufagem 不加', 'Canteiro 是在酒莊頂樓自然加熱陳年（頂級），Estufagem 是工業不鏽鋼桶加熱（45–50°C）', 'Canteiro 比 Estufagem 更快完成', 'Canteiro 只用於 Sercial，Estufagem 只用於 Malvasia'],
    answer: 1,
    explanation: 'Canteiro 是頂級 Madeira 的自然加熱方式，將酒桶存放在酒莊頂樓，利用大西洋氣候自然熟化，過程可達數十年，品質更複雜細膩。Estufagem 是工業加熱法，在不鏽鋼桶中加熱至 45–50°C 維持至少 3 個月，用於大量生產款。',
  },
  {
    type: 'quiz',
    question: 'Algarve 共有幾個 DOC 產區，最東邊的 DOC 是？',
    options: ['三個，Lagoa 最東', '四個，Tavira 最東', '五個，Faro 最東', '兩個，Portimão 最東'],
    answer: 1,
    explanation: 'Algarve 共有四個 DOC 產區，由西向東分別是：Lagos・Portimão・Lagoa・Tavira。Tavira 是最東端的 DOC，位置靠近西班牙，也是最乾熱的子產區，以 Negra Mole 和 Castelão（Periquita）著名。',
  },
  {
    type: 'summary',
    message: '🎉 恭喜完成 Level 2 所有課程與評量！您已掌握葡萄牙重點產區的深度知識。',
    keyPoints: [
      '北部：Douro（片岩梯田波特酒）・Vinho Verde（Alvarinho/Loureiro 清爽白酒）・Trás-os-Montes（極端大陸型）',
      '中部山地：Dão（花崗岩，Touriga Nacional + Encruzado）・Bairrada（Baga 高酸 + Espumante）',
      '里斯本周邊：Lisboa 九子產區・Bucelas（Arinto）・Colares（砂丘老藤）・Tejo（泰加斯河谷）',
      '南部：Alentejo 八子產區・Setúbal（Moscatel 甜酒）・Algarve 四 DOC',
      '島嶼：Madeira（Estufagem/Canteiro 工藝）・Açores（玄武岩石牆）',
    ],
  },
]

// ───────────────────────────────────────────────────────────────
//  Level 4 投影片 — 大師品鑑與垂直年份
// ───────────────────────────────────────────────────────────────

// P4M1L1 — Barca Velha・Quinta do Crasto・Niepoort 頂級酒莊
const P4M1L1_slides = [
  {
    type: 'cover',
    icon: '👑',
    gradient: 'linear-gradient(135deg, #B8860B, #DAA520)',
    title: '葡萄牙頂級酒莊解析',
    subtitle: 'Level 4 · 第一章 · 第一課',
    points: [
      { icon: '🏰', label: 'Barca Velha', text: '葡萄牙最著名的頂級紅酒，Ferreira 酒莊的旗艦作品' },
      { icon: '🍷', label: 'Quinta do Crasto', text: 'Douro 老藤葡萄酒的代表，年份力量與優雅並存' },
      { icon: '🌿', label: 'Niepoort', text: '荷裔家族釀酒師 Dirk Niepoort，自然酒先驅' },
    ],
  },
  {
    type: 'content',
    icon: '🏰',
    title: 'Barca Velha — 葡萄牙的 Pétrus',
    html: `
      <p><strong>Barca Velha</strong> 是葡萄牙最具代表性的頂級紅酒，由 Ferreira 酒莊於 1952 年由 Fernando Nicolau de Almeida 創制。它常被稱為「葡萄牙的 Pétrus」，每次發布都引發市場轟動。</p>
      <h4>🍇 品種與產區</h4>
      <ul>
        <li><strong>產區</strong>：Douro Superior（杜羅河上游，靠近西班牙邊界）</li>
        <li><strong>主要品種</strong>：Touriga Nacional、Touriga Franca、Tinta Roriz（Tempranillo）</li>
        <li><strong>橡木桶</strong>：法國與美國橡木桶混合陳年，約 24 個月</li>
      </ul>
      <h4>📊 極罕見的發布規律</h4>
      <ul>
        <li>並非每年都生產：只在最優年份才發布，部分年份降格為 <em>Reserva Especial</em></li>
        <li>自 1952 年至今，共發布 26 個年份（截至 2023 年）</li>
        <li>著名年份：1964、1982、1985、1991、2004、2011</li>
        <li>市場價格：頂級年份每瓶可達數百至逾千歐元</li>
      </ul>
      <h4>🎯 品飲特點</h4>
      <p>深紫紅色，香氣複雜：黑莓、紫羅蘭、甘草、雪松、菸草。入口豐滿但絲滑，單寧細緻，酸度支撐，尾韻長達分鐘級別。可陳年 30+ 年。</p>
    `,
  },
  {
    type: 'compare',
    title: '三大頂級酒莊比較',
    items: [
      {
        icon: '🏰',
        label: 'Barca Velha（Ferreira）',
        desc: '最具傳奇性，只在頂級年份發布。Douro Superior。偉大陳年潛力，葡萄牙最貴紅酒之一',
        color: '#8B0000',
      },
      {
        icon: '🗻',
        label: 'Quinta do Crasto',
        desc: '家族獨立酒莊，位於 Douro 河岸峭壁。老藤 Reserva 是招牌，展現 Douro 的力量與優雅平衡',
        color: '#6B3A2A',
      },
      {
        icon: '🌿',
        label: 'Niepoort',
        desc: '荷裔第五代家族，Dirk Niepoort 是葡萄牙自然酒先驅。Charme 與 Batuta 代表精緻 Douro 風格',
        color: '#2C4A1E',
      },
    ],
  },
  {
    type: 'content',
    icon: '🌿',
    title: 'Niepoort — 現代 Douro 的革命者',
    html: `
      <p><strong>Dirk Niepoort</strong> 是葡萄牙葡萄酒界最具影響力的人物之一。荷蘭裔家族第五代，將 Niepoort 從波特酒莊轉型為精品 Douro 乾型紅酒的先驅。</p>
      <h4>🍷 旗艦酒款</h4>
      <ul>
        <li><strong>Batuta</strong>：Douro 老藤混釀，複雜優雅，每年僅生產少量。國際頂級媒體評分 95+</li>
        <li><strong>Charme</strong>：以 Touriga Nacional 為主，展現 Douro 的花香與精緻</li>
        <li><strong>Redoma</strong>：白酒旗艦，Rabigato 等本土品種，礦物感突出</li>
      </ul>
      <h4>🌱 自然農法理念</h4>
      <ul>
        <li>減少農藥與化學品使用，強調風土表達</li>
        <li>全串發酵（whole-cluster fermentation），增加複雜性</li>
        <li>最低干預釀造，讓葡萄原本個性說話</li>
      </ul>
    `,
  },
  {
    type: 'quiz',
    question: 'Barca Velha 並非每年都發布，不達標準的年份葡萄酒會以什麼名稱上市？',
    options: ['Barca Nova', 'Reserva Especial', 'Vinha Velha', 'Segunda Selecção'],
    answer: 1,
    explanation: '當年份不夠優秀無法達到 Barca Velha 的嚴格標準時，葡萄酒會以「Reserva Especial」名稱發布，仍是高品質但較易親近的酒款。',
  },
  {
    type: 'summary',
    message: '恭喜完成頂級酒莊課程！',
    keyPoints: [
      'Barca Velha：葡萄牙最傳奇紅酒，1952年創立，只在最佳年份發布',
      'Quinta do Crasto：老藤 Reserva 代表 Douro 的力量與優雅',
      'Niepoort：現代 Douro 先驅，Batuta 是自然酒運動的代表作',
      '三者均來自 Douro 產區，展現不同釀酒哲學',
    ],
  },
]

// P4M1L2 — 盲品：Touriga Nacional vs. Syrah vs. Baga
const P4M1L2_slides = [
  {
    type: 'cover',
    icon: '🔬',
    gradient: 'linear-gradient(135deg, #4A235A, #7D3C98)',
    title: '盲品葡萄牙紅酒：三大品種識別',
    subtitle: 'Level 4 · 盲品技術訓練',
    points: [
      { icon: '🍇', label: 'Touriga Nacional', text: '深紫、紫羅蘭、藍莓、高單寧、高酸、長尾韻' },
      { icon: '🌶️', label: 'Syrah（Douro）', text: '黑胡椒、煙燻、深紅果香，法國品種在葡萄牙的表現' },
      { icon: '🍒', label: 'Baga（Bairrada）', text: '高酸、高單寧、紅漿果，葡萄牙最難駕馭的品種' },
    ],
  },
  {
    type: 'content',
    icon: '🍇',
    title: 'Touriga Nacional — 葡萄牙的靈魂品種',
    html: `
      <p><strong>Touriga Nacional</strong> 是葡萄牙最重要的紅葡萄品種，被稱為葡萄牙葡萄酒的「靈魂」。原產於 Dão 產區，現已廣植於 Douro、Alentejo 等地。</p>
      <h4>🎨 視覺特徵</h4>
      <ul>
        <li>酒色：<strong>極深紫黑色</strong>，不透明，杯緣略帶寶石紅</li>
        <li>黏稠度高，掛杯明顯</li>
      </ul>
      <h4>👃 香氣特徵（盲品關鍵）</h4>
      <ul>
        <li>一類香氣：<strong>紫羅蘭花香</strong>（最重要的識別特徵！）藍莓、黑莓、黑醋栗</li>
        <li>二類香氣：無（年輕時花果香主導）</li>
        <li>三類香氣（陳年後）：雪松、菸草、甘草、巧克力</li>
      </ul>
      <h4>👅 口感特徵</h4>
      <ul>
        <li>高酸度、高單寧（但細膩），強健結構</li>
        <li>中等至高酒精，酒體飽滿</li>
        <li>尾韻極長，可達 30 秒以上（頂級年份）</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🌶️',
    title: 'Syrah in Portugal vs. Baga — 對比識別',
    html: `
      <h4>🌶️ Syrah（葡萄牙，特別是 Douro/Alentejo）</h4>
      <ul>
        <li><strong>視覺</strong>：深紫黑，比 Touriga Nacional 略淡</li>
        <li><strong>香氣</strong>：<em>黑胡椒香</em>（最強識別特徵！）煙燻、橄欖、薰衣草、黑橄欖</li>
        <li><strong>口感</strong>：柔滑單寧，中等至高酸，豐滿酒體，比法國 Syrah 更溫暖圓潤</li>
        <li><strong>陳年</strong>：雪松、皮革、培根脂肪（Rhône 典型風味）</li>
      </ul>
      <h4>🍒 Baga（Bairrada）</h4>
      <ul>
        <li><strong>視覺</strong>：中等深度紅色（比上兩者淡），帶石榴紅邊緣</li>
        <li><strong>香氣</strong>：<em>紅色漿果</em>（草莓、酸櫻桃）、玫瑰花瓣、土壤感、輕微青梗</li>
        <li><strong>口感</strong>：<em>極高酸度</em>（與 Nebbiolo/Sangiovese 相當）、<em>高澀感單寧</em>、輕盈酒體</li>
        <li><strong>誤判風險</strong>：年輕時非常緊澀，容易被誤認為缺陷。陳年後絲滑迷人</li>
      </ul>
      <h4>🧠 盲品速記口訣</h4>
      <p><strong>T</strong>ouriga = <strong>V</strong>iolet（紫羅蘭）｜<strong>S</strong>yrah = <strong>P</strong>epper（胡椒）｜<strong>B</strong>aga = <strong>A</strong>cid（高酸）</p>
    `,
  },
  {
    type: 'compare',
    title: '三大品種盲品比較表',
    items: [
      { icon: '🍇', label: 'Touriga Nacional', desc: '深紫｜紫羅蘭花香（關鍵）｜藍黑果｜高酸高單寧｜長尾韻', color: '#4A235A' },
      { icon: '🌶️', label: 'Syrah（葡萄牙）', desc: '深紫｜黑胡椒（關鍵）｜煙燻｜黑橄欖｜柔滑單寧', color: '#1C2833' },
      { icon: '🍒', label: 'Baga（Bairrada）', desc: '中深紅｜紅漿果｜高酸（關鍵）｜緊澀單寧｜需陳年才顯魅力', color: '#943126' },
    ],
  },
  {
    type: 'quiz',
    question: '在盲品中，哪個香氣特徵最能幫助識別 Touriga Nacional？',
    options: ['黑胡椒香', '紫羅蘭花香', '高酸度表現', '煙燻皮革'],
    answer: 1,
    explanation: '紫羅蘭花香是 Touriga Nacional 最獨特的識別特徵，在所有主要葡萄品種中極為罕見。這個花香加上深紫色澤和高單寧，構成識別 Touriga Nacional 的黃金三角。',
  },
  {
    type: 'quiz',
    question: 'Baga 在盲品中最常被誤判的原因是？',
    options: ['酒色太淡', '缺乏香氣', '年輕時極高酸度和澀感常被誤認為缺陷', '酒精度太低'],
    answer: 2,
    explanation: 'Baga 是世界上酸度和單寧最高的品種之一，年輕時非常緊澀收斂，沒有經驗的品酒師容易誤判為品質問題。實際上這是 Baga 需要陳年才能展現魅力的結構特質。',
  },
  {
    type: 'summary',
    message: '恭喜完成盲品技術訓練！',
    keyPoints: [
      'Touriga Nacional：紫羅蘭花香是最強識別特徵，深紫黑色，高酸高單寧',
      'Syrah（葡萄牙）：黑胡椒香是關鍵，煙燻感，比法國版本更溫暖圓潤',
      'Baga：高酸度是識別關鍵，年輕時緊澀，需陳年顯魅力',
      '速記：Touriga=Violet ｜ Syrah=Pepper ｜ Baga=Acid',
    ],
  },
]

// P4M1L3 — 頂級波特酒垂直品鑑
const P4M1L3_slides = [
  {
    type: 'cover',
    icon: '🥃',
    gradient: 'linear-gradient(135deg, #5c2a0a, #8B4513)',
    title: 'Vintage Port 垂直品鑑：年份解析',
    subtitle: 'Level 4 · 波特酒年份深度研究',
    points: [
      { icon: '📅', label: '垂直品鑑', text: '同一酒莊不同年份的比較，揭示氣候與陳年對酒的影響' },
      { icon: '🏆', label: '頂級年份', text: '2011、2007、2000、1994、1985、1977 等公認偉大年份' },
      { icon: '⏳', label: '陳年演化', text: '觀察顏色從深紫→棕邊→橙棕的演化過程' },
    ],
  },
  {
    type: 'content',
    icon: '📅',
    title: 'Vintage Port 宣布制度與頂級年份',
    html: `
      <p><strong>Vintage Port</strong> 並非每年都宣布（declared）。酒莊通常在採收後第二個春天，由 IVDP（杜羅河谷葡萄酒協會）審查後決定是否宣布。</p>
      <h4>📋 宣布流程</h4>
      <ol>
        <li>採收後 18 個月，在橡木桶中短暫陳年（通常 2 年）</li>
        <li>酒莊向 IVDP 提交樣品申請宣布</li>
        <li>通過後裝瓶，需 10-20 年瓶中陳年才達最佳狀態</li>
      </ol>
      <h4>🏆 近代公認頂級年份（Fladgate/Symington 等大莊均宣布）</h4>
      <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin-top:8px">
        <tr style="background:#5c2a0a;color:white">
          <th style="padding:8px">年份</th><th style="padding:8px">評級</th><th style="padding:8px">特徵</th><th style="padding:8px">最佳飲用</th>
        </tr>
        <tr style="background:#fdf6ec"><td style="padding:6px;text-align:center"><strong>2011</strong></td><td style="padding:6px">⭐⭐⭐⭐⭐</td><td style="padding:6px">絕世年份，平衡完美，單寧精緻</td><td style="padding:6px">2030–2060</td></tr>
        <tr><td style="padding:6px;text-align:center"><strong>2007</strong></td><td style="padding:6px">⭐⭐⭐⭐⭐</td><td style="padding:6px">豐滿濃郁，果味豐沛，結構宏偉</td><td style="padding:6px">2025–2055</td></tr>
        <tr style="background:#fdf6ec"><td style="padding:6px;text-align:center"><strong>2000</strong></td><td style="padding:6px">⭐⭐⭐⭐⭐</td><td style="padding:6px">千禧年份，芳香四溢，陳年力強</td><td style="padding:6px">2020–2050</td></tr>
        <tr><td style="padding:6px;text-align:center"><strong>1994</strong></td><td style="padding:6px">⭐⭐⭐⭐⭐</td><td style="padding:6px">30年陳年進入最佳狀態，複雜精妙</td><td style="padding:6px">現在–2040</td></tr>
        <tr style="background:#fdf6ec"><td style="padding:6px;text-align:center"><strong>1985</strong></td><td style="padding:6px">⭐⭐⭐⭐⭐</td><td style="padding:6px">最優雅年份之一，現已完全成熟</td><td style="padding:6px">現在–2030</td></tr>
        <tr><td style="padding:6px;text-align:center"><strong>1977</strong></td><td style="padding:6px">⭐⭐⭐⭐⭐</td><td style="padding:6px">傳奇年份，歷史評分最高之一</td><td style="padding:6px">現在（顛峰）</td></tr>
      </table>
    `,
  },
  {
    type: 'content',
    icon: '🔍',
    title: '垂直品鑑：如何解讀陳年變化',
    html: `
      <h4>🎨 顏色演化（視覺評估）</h4>
      <table style="width:100%;border-collapse:collapse;font-size:0.9em">
        <tr style="background:#5c2a0a;color:white">
          <th style="padding:6px">陳年階段</th><th style="padding:6px">酒色</th><th style="padding:6px">杯緣顏色</th>
        </tr>
        <tr style="background:#fdf6ec"><td style="padding:6px">0–5 年</td><td style="padding:6px">深紫黑色</td><td style="padding:6px">寶石紫紅</td></tr>
        <tr><td style="padding:6px">10–15 年</td><td style="padding:6px">深紅寶石</td><td style="padding:6px">磚紅</td></tr>
        <tr style="background:#fdf6ec"><td style="padding:6px">20–30 年</td><td style="padding:6px">石榴紅</td><td style="padding:6px">棕橙邊</td></tr>
        <tr><td style="padding:6px">40+ 年</td><td style="padding:6px">深棕琥珀</td><td style="padding:6px">橙棕明顯</td></tr>
      </table>
      <h4>👃 香氣演化</h4>
      <ul>
        <li><strong>年輕（0–10年）</strong>：黑莓、藍莓、黑醋栗、紫羅蘭，酒精感明顯</li>
        <li><strong>中年（15–25年）</strong>：乾果（無花果、棗子）、雪松、菸草、甘草，果香退去</li>
        <li><strong>成熟（30+年）</strong>：松露、咖啡、巧克力、皮革、精緻花香，複雜度達頂峰</li>
      </ul>
      <h4>📝 垂直品鑑筆記格式</h4>
      <p>外觀 → 香氣（一/二/三類）→ 口感（甜度/酸度/單寧/酒體）→ 餘韻 → 與年份評分對照</p>
    `,
  },
  {
    type: 'quiz',
    question: 'Vintage Port 通常需要在瓶中陳年多少年才達到最佳飲用狀態？',
    options: ['3–5 年', '5–8 年', '10–20 年以上', '與 Tawny 一樣，桶中陳年即可'],
    answer: 2,
    explanation: 'Vintage Port 在桶中只陳年 2 年就裝瓶，之後需要在瓶中進行長期陳年。大多數頂級 Vintage Port 需要 15–25 年才開始展現複雜度，最偉大的年份可以持續演化 50–80 年。',
  },
  {
    type: 'summary',
    message: '恭喜完成 Vintage Port 垂直品鑑課程！',
    keyPoints: [
      'Vintage Port 並非每年宣布，只在氣候條件優異的年份才 declared',
      '頂級年份：2011、2007、2000、1994、1985、1977',
      '陳年顏色演化：深紫黑 → 石榴紅 → 棕橙（視覺判斷年齡的關鍵）',
      '香氣演化：新鮮果香 → 乾果 → 松露咖啡皮革',
      '最佳飲用時間：通常 15–30 年後，偉大年份可達 50+ 年',
    ],
  },
]

// P4M2L1 — 杜羅河谷年份評分指南 2000–2023
const P4M2L1_slides = [
  {
    type: 'cover',
    icon: '📊',
    gradient: 'linear-gradient(135deg, #1a3a4a, #2980b9)',
    title: '杜羅河谷年份評分指南：2000–2023',
    subtitle: 'Level 4 · 年份深度解析',
    points: [
      { icon: '☀️', label: '年份差異的根源', text: '採收期降雨、夏季高溫、晝夜溫差決定葡萄品質' },
      { icon: '📈', label: '近 24 年詳細評分', text: '按氣候條件、波特酒、Douro 乾紅三個維度評估' },
      { icon: '🌡️', label: '氣候變遷趨勢', text: '21 世紀以來整體溫度上升，影響年份表現節奏' },
    ],
  },
  {
    type: 'map',
    title: 'Douro 年份指南地理脈絡',
    description: '年份品質取決於 Douro 河谷氣候——片岩梯田的夏季高溫與秋雨是決定 Vintage Port 宣告的關鍵地理因素',
    mapRegion: 'Douro',
  },,

  {
    type: 'content',
    icon: '📊',
    title: 'Douro 年份評分總表（2000–2023）',
    html: `
      <p>以下評分綜合 Wine Spectator、Robert Parker、IVDP 等主要評審意見，採 <strong>5 星制</strong>。</p>
      <table style="width:100%;border-collapse:collapse;font-size:0.85em">
        <tr style="background:#1a3a4a;color:white">
          <th style="padding:6px">年份</th>
          <th style="padding:6px">Douro 乾紅</th>
          <th style="padding:6px">Vintage Port</th>
          <th style="padding:6px">特徵摘要</th>
        </tr>
        <tr style="background:#eaf6ff"><td style="padding:5px;text-align:center"><strong>2023</strong></td><td style="padding:5px;text-align:center">⭐⭐⭐⭐</td><td style="padding:5px;text-align:center">待定</td><td style="padding:5px">涼爽採收期，高酸清爽</td></tr>
        <tr><td style="padding:5px;text-align:center"><strong>2022</strong></td><td style="padding:5px;text-align:center">⭐⭐⭐⭐½</td><td style="padding:5px;text-align:center">⭐⭐⭐⭐½</td><td style="padding:5px">乾熱夏季，濃郁豐滿</td></tr>
        <tr style="background:#eaf6ff"><td style="padding:5px;text-align:center"><strong>2021</strong></td><td style="padding:5px;text-align:center">⭐⭐⭐½</td><td style="padding:5px;text-align:center">⭐⭐⭐</td><td style="padding:5px">不均勻，部分區塊優秀</td></tr>
        <tr><td style="padding:5px;text-align:center"><strong>2020</strong></td><td style="padding:5px;text-align:center">⭐⭐⭐⭐⭐</td><td style="padding:5px;text-align:center">⭐⭐⭐⭐⭐</td><td style="padding:5px">世紀年份候選，集中深邃</td></tr>
        <tr style="background:#eaf6ff"><td style="padding:5px;text-align:center"><strong>2019</strong></td><td style="padding:5px;text-align:center">⭐⭐⭐⭐</td><td style="padding:5px;text-align:center">⭐⭐⭐⭐</td><td style="padding:5px">均衡年份，優雅芬芳</td></tr>
        <tr><td style="padding:5px;text-align:center"><strong>2017</strong></td><td style="padding:5px;text-align:center">⭐⭐⭐⭐⭐</td><td style="padding:5px;text-align:center">⭐⭐⭐⭐⭐</td><td style="padding:5px">極佳年份，結構宏偉</td></tr>
        <tr style="background:#eaf6ff"><td style="padding:5px;text-align:center"><strong>2016</strong></td><td style="padding:5px;text-align:center">⭐⭐⭐⭐½</td><td style="padding:5px;text-align:center">⭐⭐⭐⭐½</td><td style="padding:5px">細膩優雅，適合中期陳年</td></tr>
        <tr><td style="padding:5px;text-align:center"><strong>2015</strong></td><td style="padding:5px;text-align:center">⭐⭐⭐⭐½</td><td style="padding:5px;text-align:center">⭐⭐⭐⭐½</td><td style="padding:5px">溫暖豐熟，Alentejo 特別佳</td></tr>
        <tr style="background:#eaf6ff"><td style="padding:5px;text-align:center"><strong>2013</strong></td><td style="padding:5px;text-align:center">⭐⭐⭐⭐</td><td style="padding:5px;text-align:center">⭐⭐⭐⭐</td><td style="padding:5px">涼爽精緻，Bairrada 表現佳</td></tr>
        <tr><td style="padding:5px;text-align:center"><strong>2011</strong></td><td style="padding:5px;text-align:center">⭐⭐⭐⭐⭐</td><td style="padding:5px;text-align:center">⭐⭐⭐⭐⭐</td><td style="padding:5px">21 世紀最佳年份之一，均衡完美</td></tr>
        <tr style="background:#eaf6ff"><td style="padding:5px;text-align:center"><strong>2009</strong></td><td style="padding:5px;text-align:center">⭐⭐⭐⭐</td><td style="padding:5px;text-align:center">⭐⭐⭐⭐</td><td style="padding:5px">溫暖豐滿，早熟型</td></tr>
        <tr><td style="padding:5px;text-align:center"><strong>2007</strong></td><td style="padding:5px;text-align:center">⭐⭐⭐⭐⭐</td><td style="padding:5px;text-align:center">⭐⭐⭐⭐⭐</td><td style="padding:5px">色深香濃，波特酒特別傑出</td></tr>
        <tr style="background:#eaf6ff"><td style="padding:5px;text-align:center"><strong>2004</strong></td><td style="padding:5px;text-align:center">⭐⭐⭐⭐⭐</td><td style="padding:5px;text-align:center">⭐⭐⭐⭐⭐</td><td style="padding:5px">Barca Velha 宣布，Douro 乾紅頂峰</td></tr>
        <tr><td style="padding:5px;text-align:center"><strong>2003</strong></td><td style="padding:5px;text-align:center">⭐⭐⭐</td><td style="padding:5px;text-align:center">⭐⭐⭐</td><td style="padding:5px">歐洲熱浪年，過熟，酒精偏高</td></tr>
        <tr style="background:#eaf6ff"><td style="padding:5px;text-align:center"><strong>2000</strong></td><td style="padding:5px;text-align:center">⭐⭐⭐⭐⭐</td><td style="padding:5px;text-align:center">⭐⭐⭐⭐⭐</td><td style="padding:5px">千禧年份，深邃均衡，陳年力強</td></tr>
      </table>
    `,
  },
  {
    type: 'content',
    icon: '🌡️',
    title: '影響年份的四大氣候因素',
    html: `
      <h4>1. 🌸 冬春降雨（土壤蓄水）</h4>
      <p>Douro 產區年均雨量 700-900mm，大部分集中在秋冬。春季適量降雨確保土壤水分儲備，是夏季旱期的關鍵。<strong>冬季過於乾燥</strong>（如 2012 年）會導致夏季水分壓力過大。</p>
      <h4>2. ☀️ 夏季溫度與日照</h4>
      <p>Douro 夏季平均氣溫 25–35°C，7-8 月高溫可達 40°C+。<strong>適度高溫</strong>促進成熟，但<strong>極端熱浪</strong>（如 2003 年）導致過熟、糖分激增、酸度喪失。</p>
      <h4>3. 🌙 晝夜溫差</h4>
      <p>Douro 的海拔差異（50–900m）創造顯著晝夜溫差，夜晚涼爽有助保留酸度與芳香化合物。高海拔葡萄園（如 Douro Superior 的部分地塊）在暖年仍可保持清爽酸度。</p>
      <h4>4. 🌧️ 採收期（9–10 月）降雨</h4>
      <p><strong>最關鍵因素</strong>：採收前 2–3 週的降雨會導致：</p>
      <ul>
        <li>葡萄吸水膨脹，稀釋風味</li>
        <li>灰葡萄黴菌病（Botrytis）爆發</li>
        <li>不均勻成熟，必須快速採收</li>
      </ul>
      <p>反之，乾燥涼爽的採收期（如 2011、2004、2000 年）是頂級年份的共同特徵。</p>
    `,
  },
  {
    type: 'quiz',
    question: '以下哪個年份被公認為 21 世紀 Douro 河谷最佳年份之一，且 Barca Velha 也宣布了該年份？',
    options: ['2003 年', '2004 年', '2009 年', '2013 年'],
    answer: 1,
    explanation: '2004 年是 Douro 乾紅酒的頂峰年份，Barca Velha 宣布了該年份（這是非常罕見的事件），同時也是頂級 Vintage Port 年份。採收前天氣乾燥，葡萄完全成熟且保留了良好酸度。',
  },
  {
    type: 'summary',
    message: '恭喜完成 Douro 年份評分課程！',
    keyPoints: [
      '21世紀頂級年份：2020、2017、2011、2007、2004、2000',
      '年份品質的決定因素：採收期降雨最關鍵，其次是夏季溫度和晝夜溫差',
      '2003年熱浪年是反面教材：過熟、高酒精、低酸度',
      '氣候變遷導致採收日期提前，挑戰傳統年份評估方式',
    ],
  },
]

// P4M2L2 — 氣候變遷對葡萄牙葡萄酒的影響
const P4M2L2_slides = [
  {
    type: 'cover',
    icon: '🌍',
    gradient: 'linear-gradient(135deg, #1a5c2a, #2ecc71)',
    title: '氣候變遷與葡萄牙葡萄酒的未來',
    subtitle: 'Level 4 · 環境挑戰與應對策略',
    points: [
      { icon: '🌡️', label: '1.5°C 升溫現實', text: '葡萄牙南部 Alentejo 已是全歐洲升溫最快的區域之一' },
      { icon: '🔄', label: '品種遷移', text: '耐熱品種需求上升，北方產區（Minho、Vinho Verde）受益' },
      { icon: '🌊', label: '海拔與緯度', text: '高海拔葡萄園、西部大西洋海岸成為未來的避風港' },
    ],
  },
  {
    type: 'content',
    icon: '🌡️',
    title: '葡萄牙面臨的氣候挑戰',
    html: `
      <h4>📈 已觀察到的變化（1990–2024）</h4>
      <ul>
        <li><strong>平均氣溫上升 1.2–1.8°C</strong>：南部 Alentejo 升幅最大，導致採收日期提前 2–3 週</li>
        <li><strong>乾旱頻率增加</strong>：2004–2023 年間，葡萄牙南部發生 5 次嚴重乾旱</li>
        <li><strong>極端熱浪</strong>：2003、2017、2022 年的熱浪造成不均勻過熟</li>
        <li><strong>降雨不規律</strong>：總量未必減少，但分布更集中在秋冬，夏季更乾</li>
      </ul>
      <h4>🍷 對葡萄酒的具體影響</h4>
      <ul>
        <li>酒精度上升（12.5% → 13.5–14.5%）：葡萄糖分累積更快</li>
        <li>酸度下降：影響陳年潛力和清爽感</li>
        <li>風味偏向更成熟、果醬感，傳統花香和礦物感減少</li>
        <li>採收時間壓縮：需要更快速決策</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: '各產區的氣候變遷衝擊與因應',
    items: [
      { icon: '☀️', label: 'Alentejo（高衝擊）', desc: '最脆弱。夏季高溫+乾旱組合。對策：夜間採收、灌溉、尋找高海拔地塊、耐熱品種', color: '#C0392B' },
      { icon: '🌊', label: 'Vinho Verde（受益）', desc: '涼爽大西洋氣候使其成為暖化的避風港。Alvarinho 在升溫後仍保持清爽，需求增加', color: '#27AE60' },
      { icon: '⛰️', label: 'Douro（中衝擊）', desc: '高海拔葡萄園緩衝衝擊。挑戰：Douro Superior 過熱。機會：Douro 高海拔地塊品質提升', color: '#E67E22' },
      { icon: '🏝️', label: 'Madeira（特殊）', desc: '島嶼氣候相對穩定，但熱帶化趨勢使白品種（Sercial）更難保持酸度', color: '#8E44AD' },
    ],
  },
  {
    type: 'content',
    icon: '🌱',
    title: '葡萄牙酒莊的氣候適應策略',
    html: `
      <h4>🌿 農業技術層面</h4>
      <ul>
        <li><strong>提高葡萄樹高度</strong>（高 Lyre 或 Vertical Shoot Positioning），增加葉幕遮蔭，降低果串溫度</li>
        <li><strong>延遲修剪</strong>：推遲萌芽，讓採收往後延，避開最熱時期</li>
        <li><strong>精準灌溉</strong>：Alentejo 已廣泛採用滴灌，Douro 傳統上無灌溉，但法規逐漸放寬</li>
        <li><strong>覆草</strong>（cover crop）：減少土壤蒸發，調節根部溫度</li>
      </ul>
      <h4>🍇 品種多樣化策略</h4>
      <ul>
        <li>重新發現耐熱耐旱的原生老品種：Alicante Bouschet、Moreto、Manteúdo</li>
        <li>Alvarinho 北移：由 Minho 南延至更多產區</li>
        <li>種植時間調整：選擇較涼爽朝向（北坡）和海拔較高地塊</li>
      </ul>
      <h4>🏔️ 地理遷移</h4>
      <p>Serra da Estrela 山區、Beira Interior 內陸高地，以及 Vinho Verde 最北端的 Monção e Melgaço 子產區，正成為氣候避難所，投資湧入。</p>
    `,
  },
  {
    type: 'quiz',
    question: '面對氣候變遷，哪個葡萄牙產區被認為是「受益者」，因為其涼爽大西洋氣候使其成為避風港？',
    options: ['Alentejo', 'Douro Superior', 'Vinho Verde（Minho）', 'Algarve'],
    answer: 2,
    explanation: 'Vinho Verde 位於葡萄牙西北部，受大西洋影響最深，氣溫相對涼爽。隨著全球暖化，其他南部產區日益炎熱，Vinho Verde 的清爽特性反而更受市場青睞，尤其是 Alvarinho 白酒。',
  },
  {
    type: 'summary',
    message: '恭喜完成氣候變遷課程！',
    keyPoints: [
      '葡萄牙南部 Alentejo 是歐洲暖化最快的區域之一，已上升 1.2–1.8°C',
      'Vinho Verde 是受益者，涼爽大西洋氣候使其成為暖化避風港',
      '應對策略：調整農業技術（高架式、延遲修剪）、品種多樣化、地理遷移',
      '氣候變遷正在重塑葡萄牙葡萄酒的版圖，高海拔與北部地區潛力上升',
    ],
  },
]

// P4M2L3 — 有機、生物動力與自然酒
const P4M2L3_slides = [
  {
    type: 'cover',
    icon: '🌿',
    gradient: 'linear-gradient(135deg, #155724, #28a745)',
    title: '有機・生物動力・自然酒：葡萄牙的自然酒革命',
    subtitle: 'Level 4 · 永續農業與釀造哲學',
    points: [
      { icon: '🌱', label: '有機農法', text: '禁用合成農藥和化肥，歐盟認證，葡萄牙有 3,500+ 公頃有機葡萄園' },
      { icon: '🌕', label: '生物動力農法', text: '根據月相和宇宙節奏作業，Demeter 認證，哲學層面更深' },
      { icon: '🍶', label: '自然酒', text: '最低干預釀造，不過濾不澄清，無新增 SO₂，風格多元極端' },
    ],
  },
  {
    type: 'content',
    icon: '🌱',
    title: '三種農法的核心差異',
    html: `
      <table style="width:100%;border-collapse:collapse;font-size:0.9em">
        <tr style="background:#155724;color:white">
          <th style="padding:8px">項目</th>
          <th style="padding:8px">有機農法</th>
          <th style="padding:8px">生物動力農法</th>
          <th style="padding:8px">自然酒</th>
        </tr>
        <tr style="background:#f0fff4">
          <td style="padding:6px"><strong>認證機構</strong></td>
          <td style="padding:6px">EU Organic / Ecocert</td>
          <td style="padding:6px">Demeter / Biodyvin</td>
          <td style="padding:6px">無官方認證（AVN 等協會）</td>
        </tr>
        <tr>
          <td style="padding:6px"><strong>農藥</strong></td>
          <td style="padding:6px">禁合成農藥，可用銅硫</td>
          <td style="padding:6px">同有機，+ 生物動力製劑</td>
          <td style="padding:6px">通常有機或生物動力基礎</td>
        </tr>
        <tr style="background:#f0fff4">
          <td style="padding:6px"><strong>釀造干預</strong></td>
          <td style="padding:6px">無特別限制</td>
          <td style="padding:6px">傾向最低干預</td>
          <td style="padding:6px">最嚴格：無添加酵母、SO₂ 極低</td>
        </tr>
        <tr>
          <td style="padding:6px"><strong>月相/宇宙</strong></td>
          <td style="padding:6px">不要求</td>
          <td style="padding:6px">核心理念</td>
          <td style="padding:6px">部分實踐者參考</td>
        </tr>
        <tr style="background:#f0fff4">
          <td style="padding:6px"><strong>風格穩定性</strong></td>
          <td style="padding:6px">高</td>
          <td style="padding:6px">中高</td>
          <td style="padding:6px">低（每年變化大）</td>
        </tr>
      </table>
    `,
  },
  {
    type: 'compare',
    title: '葡萄牙自然酒先驅酒莊',
    items: [
      { icon: '🌿', label: 'Niepoort（Douro）', desc: 'Dirk Niepoort：全串發酵、最低 SO₂，Batuta 和 Charme 是自然酒界的標竿作品', color: '#155724' },
      { icon: '🏔️', label: 'Quinta da Pellada（Dão）', desc: '生物動力農法，Álvaro Castro 的老藤 Touriga Nacional，純淨礦物感', color: '#1a3a6e' },
      { icon: '🌊', label: 'João Pato（Bairrada）', desc: '有機農法，Baga 的現代詮釋，濃郁但精緻，突破 Bairrada 的傳統高澀印象', color: '#8B4513' },
      { icon: '🏝️', label: 'Barbeito（Madeira）', desc: '有機農法，極小批次的單一品種馬德拉，展現風土細節', color: '#8E44AD' },
    ],
  },
  {
    type: 'quiz',
    question: '關於自然酒（Natural Wine），以下哪個描述最準確？',
    options: [
      '有歐盟官方認證，等同有機認證',
      '必須使用生物動力農法種植',
      '無統一官方認證，核心理念是最低干預釀造，極低或不添加 SO₂',
      '必須是起泡酒風格（Pétillant Naturel）',
    ],
    answer: 2,
    explanation: '自然酒目前沒有全球統一的官方認證標準，由各地協會（如法國 AVN、義大利 VinNatur）自行制定。其核心理念是田間有機/生物動力農法 + 酒窖最低干預，通常不添加或極少添加二氧化硫（SO₂）。',
  },
  {
    type: 'summary',
    message: '恭喜完成自然酒課程！',
    keyPoints: [
      '有機農法：禁合成農藥，EU 認證，葡萄牙有 3,500+ 公頃',
      '生物動力農法：有機基礎 + 月相作業 + Demeter 認證',
      '自然酒：無官方認證，最低干預，低 SO₂，風格多變',
      '葡萄牙先驅：Niepoort（Douro）、Quinta da Pellada（Dão）',
    ],
  },
]

// P4M3L1 — 葡萄牙菜與葡萄酒餐酒搭配
const P4M3L1_slides = [
  {
    type: 'cover',
    icon: '🍽️',
    gradient: 'linear-gradient(135deg, #8B0000, #c0392b)',
    title: '葡萄牙美食與葡萄酒的完美搭配',
    subtitle: 'Level 4 · 餐酒搭配大師課',
    points: [
      { icon: '🐟', label: 'Bacalhau（鹽漬鱈魚）', text: '葡萄牙國菜，超過 365 種烹調方式，白酒最佳搭檔' },
      { icon: '🐷', label: '烤乳豬（Leitão）', text: 'Bairrada 的代表菜，Baga 紅酒是天作之合' },
      { icon: '🥧', label: '蛋撻（Pastéis de Nata）', text: '全球知名甜點，Moscatel de Setúbal 是理想搭配' },
    ],
  },
  {
    type: 'compare',
    title: '五大葡萄牙料理 × 葡萄酒搭配指南',
    items: [
      {
        icon: '🐟',
        label: 'Bacalhau à Brás（蛋炒鱈魚）',
        desc: '搭配：Vinho Verde Alvarinho 或 Bucelas Arinto。酸爽清冽的白酒切穿鹽漬魚的鹹感，檸檬酸度與魚鮮互補',
        color: '#2980b9',
      },
      {
        icon: '🐷',
        label: '烤乳豬 Leitão da Bairrada',
        desc: '搭配：Bairrada Baga 紅酒。高酸高單寧的 Baga 完美分解豬皮油脂，地域搭配的經典示範',
        color: '#8B4513',
      },
      {
        icon: '🥩',
        label: 'Douro 風格燉牛肉',
        desc: '搭配：Douro Touriga Nacional。強健的 Touriga Nacional 與慢燉牛肉的深邃風味相呼應，單寧與蛋白質完美平衡',
        color: '#8B0000',
      },
      {
        icon: '🧀',
        label: 'Queijo da Serra（Serra da Estrela 軟起司）',
        desc: '搭配：20 年 Tawny Port 或 Colheita。氧化的堅果蜂蜜風味與半液態起司的奶油感，絕配中的絕配',
        color: '#B8860B',
      },
      {
        icon: '🥧',
        label: '蛋撻 Pastéis de Nata',
        desc: '搭配：Moscatel de Setúbal 或 10 年 Tawny。蛋撻的焦糖肉桂香與甜酒的氧化蜜糖感形成優雅的甜點搭配',
        color: '#DAA520',
      },
    ],
  },
  {
    type: 'content',
    icon: '🍷',
    title: '波特酒與起司：終極搭配藝術',
    html: `
      <p>葡萄牙波特酒與起司的搭配是世界最著名的餐酒組合之一，尤其在英國有幾百年的傳統。</p>
      <h4>🧀 起司類型 × 波特酒對應</h4>
      <table style="width:100%;border-collapse:collapse;font-size:0.9em;margin-top:8px">
        <tr style="background:#5c2a0a;color:white">
          <th style="padding:8px">起司類型</th>
          <th style="padding:8px">波特酒推薦</th>
          <th style="padding:8px">搭配原因</th>
        </tr>
        <tr style="background:#fdf6ec">
          <td style="padding:6px">Stilton（英式藍起司）</td>
          <td style="padding:6px"><strong>Vintage Port</strong></td>
          <td style="padding:6px">經典英國傳統，藍起司的鹹味與 Vintage 的果甜形成對比</td>
        </tr>
        <tr>
          <td style="padding:6px">Queijo da Serra（葡式軟起司）</td>
          <td style="padding:6px"><strong>20 年 Tawny</strong></td>
          <td style="padding:6px">氧化的堅果蜂蜜風味與奶油起司完美融合</td>
        </tr>
        <tr style="background:#fdf6ec">
          <td style="padding:6px">Manchego（硬質羊奶酪）</td>
          <td style="padding:6px"><strong>LBV Port</strong></td>
          <td style="padding:6px">中等甜度的 LBV 平衡了硬質起司的鹹脆感</td>
        </tr>
        <tr>
          <td style="padding:6px">新鮮山羊奶酪</td>
          <td style="padding:6px"><strong>White Port（白波特）</strong></td>
          <td style="padding:6px">白波特的清爽杏仁感不壓制新鮮起司的細膩</td>
        </tr>
      </table>
      <h4>🌰 黃金法則</h4>
      <ul>
        <li><strong>甜配鹹</strong>：起司的鹹感讓甜酒更顯精緻</li>
        <li><strong>質地搭配</strong>：半液態起司配 Tawny，硬質起司配 Vintage</li>
        <li><strong>產地搭配</strong>：葡式起司 × 葡式波特，是「風土統一性」的最佳示範</li>
      </ul>
    `,
  },
  {
    type: 'quiz',
    question: 'Bairrada 烤乳豬（Leitão）最理想的搭配葡萄酒是？',
    options: ['Vinho Verde Alvarinho 白酒', 'Alentejo Aragonez 紅酒', 'Bairrada Baga 紅酒', '20 年 Tawny Port'],
    answer: 2,
    explanation: 'Bairrada 烤乳豬搭配當地 Baga 紅酒是葡萄牙最著名的地域搭配示範。Baga 的極高酸度和單寧能有效分解豬皮的豐富油脂，同時紅漿果香氣與烤豬的肉香相輔相成——這是「什麼地方的食物搭什麼地方的酒」的完美例子。',
  },
  {
    type: 'summary',
    message: '恭喜完成葡萄牙餐酒搭配課程！',
    keyPoints: [
      'Bacalhau + Vinho Verde Alvarinho：鹽漬魚 × 高酸清爽白酒',
      '烤乳豬 Leitão + Bairrada Baga：地域搭配的完美示範',
      'Queijo da Serra + 20年 Tawny：半液態起司 × 氧化堅果甜酒',
      '蛋撻 + Moscatel de Setúbal：甜點 × 氧化蜜糖甜酒',
      '原則：甜配鹹、質地搭配、產地搭配',
    ],
  },
]

// P4M3L2 — 葡萄牙葡萄酒的全球市場
const P4M3L2_slides = [
  {
    type: 'cover',
    icon: '🌐',
    gradient: 'linear-gradient(135deg, #1a3a6e, #2980b9)',
    title: '葡萄牙葡萄酒的全球市場與出口趨勢',
    subtitle: 'Level 4 · 市場分析',
    points: [
      { icon: '📦', label: '全球前 10 出口國', text: '年出口量逾 3 億公升，出口值超過 10 億歐元' },
      { icon: '🇺🇸', label: '最大市場：美國', text: '美國是葡萄牙酒最重要的成長市場，尤其 Vinho Verde' },
      { icon: '📈', label: '高端化趨勢', text: '每瓶均價持續上升，頂級 Douro 和 Madeira 受國際收藏家追捧' },
    ],
  },
  {
    type: 'content',
    icon: '📊',
    title: '葡萄牙葡萄酒出口市場概覽',
    html: `
      <h4>🌍 主要出口目的地（依出口值，2022年數據）</h4>
      <table style="width:100%;border-collapse:collapse;font-size:0.9em">
        <tr style="background:#1a3a6e;color:white">
          <th style="padding:8px">排名</th><th style="padding:8px">市場</th><th style="padding:8px">特徵</th>
        </tr>
        <tr style="background:#eef4ff"><td style="padding:6px;text-align:center">1</td><td style="padding:6px"><strong>🇫🇷 法國</strong></td><td style="padding:6px">大量進口葡萄牙散裝酒（調配用），歷史傳統</td></tr>
        <tr><td style="padding:6px;text-align:center">2</td><td style="padding:6px"><strong>🇺🇸 美國</strong></td><td style="padding:6px">成長最快市場，Vinho Verde 最受歡迎，高端 Douro 日增</td></tr>
        <tr style="background:#eef4ff"><td style="padding:6px;text-align:center">3</td><td style="padding:6px"><strong>🇬🇧 英國</strong></td><td style="padding:6px">傳統 Porto 最大市場，Vintage Port 收藏文化深厚</td></tr>
        <tr><td style="padding:6px;text-align:center">4</td><td style="padding:6px"><strong>🇩🇪 德國</strong></td><td style="padding:6px">日常餐酒市場，對性價比要求高</td></tr>
        <tr style="background:#eef4ff"><td style="padding:6px;text-align:center">5</td><td style="padding:6px"><strong>🇧🇷 巴西</strong></td><td style="padding:6px">葡語文化連結，高端 Douro 和 Alentejo 受歡迎</td></tr>
        <tr><td style="padding:6px;text-align:center">6</td><td style="padding:6px"><strong>🇨🇦 加拿大</strong></td><td style="padding:6px">成長中市場，Vinho Verde 和 Alentejo 紅酒需求上升</td></tr>
      </table>
      <h4>📈 近年趨勢</h4>
      <ul>
        <li>台灣、日本等亞洲市場對高端 Douro 和 Vintage Port 興趣增加</li>
        <li>出口均價：2010–2022 年上漲 40%，反映品質升級和品牌提升</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🍷',
    title: 'Vinho Verde 的全球爆發',
    html: `
      <p><strong>Vinho Verde</strong> 是目前葡萄牙出口成長最快的品類之一，尤其在美國市場的增速令人矚目。</p>
      <h4>🚀 成功因素分析</h4>
      <ul>
        <li><strong>低酒精（8–11.5%）</strong>：健康意識上升，低酒精酒需求暴增</li>
        <li><strong>清爽微氣泡感</strong>：夏季飲用、派對場合的首選</li>
        <li><strong>極佳性價比</strong>：入門款只需 8–15 美元，品質卻遠超同價位競品</li>
        <li><strong>Alvarinho 品牌化</strong>：高端 Alvarinho（20–60 美元）建立精品形象</li>
        <li><strong>餐廳推動</strong>：美國和加拿大餐廳大量採用作為開胃酒</li>
      </ul>
      <h4>📊 關鍵數字</h4>
      <ul>
        <li>美國 Vinho Verde 進口量 2015–2022 年增長 <strong>180%</strong></li>
        <li>在美國進口葡萄牙酒中，Vinho Verde 佔比超過 <strong>45%</strong></li>
        <li>Monção e Melgaço 子產區的頂級 Alvarinho 已建立收藏家市場</li>
      </ul>
    `,
  },
  {
    type: 'quiz',
    question: '哪個是目前葡萄牙葡萄酒出口成長最快的品類，特別是在美國市場？',
    options: ['Vintage Port', 'Alentejo Reserva 紅酒', 'Vinho Verde', 'Madeira'],
    answer: 2,
    explanation: 'Vinho Verde 是目前葡萄牙成長最快的出口品類，2015–2022 年在美國的進口量增長約 180%。其低酒精、清爽微氣泡、高性價比的特點完全符合當代飲酒趨勢。',
  },
  {
    type: 'summary',
    message: '恭喜完成全球市場課程！',
    keyPoints: [
      '葡萄牙全球前10出口國，年出口超10億歐元',
      '最大市場：法國（散裝）、美國（成長最快）、英國（Porto 傳統市場）',
      'Vinho Verde 是成長引擎，美國市場7年增長180%',
      '高端化趨勢：出口均價2010-2022年上漲40%',
      '台灣、日本等亞洲市場對頂級 Douro 和 Vintage Port 興趣增加',
    ],
  },
]

// P4M3L3 — 收藏與投資：波特酒與馬德拉的陳年潛力
const P4M3L3_slides = [
  {
    type: 'cover',
    icon: '💰',
    gradient: 'linear-gradient(135deg, #B8860B, #FFD700)',
    title: '波特酒與馬德拉：收藏與投資指南',
    subtitle: 'Level 4 · 陳年潛力與市場價值',
    points: [
      { icon: '📈', label: '資產增值', text: 'Vintage Port 頂級年份年均增值 8–12%，超越多數傳統投資' },
      { icon: '🏺', label: '馬德拉的永恆性', text: '19 世紀馬德拉至今仍可飲用，是世界上最長壽的葡萄酒' },
      { icon: '🔍', label: '真偽鑑定', text: '學習如何識別真正的頂級老酒，避免市場上的假酒陷阱' },
    ],
  },
  {
    type: 'content',
    icon: '📈',
    title: 'Vintage Port 作為收藏投資',
    html: `
      <p>Vintage Port 因其稀少性、陳年潛力和明確的品質評分，成為葡萄酒投資市場中不可忽視的品類。</p>
      <h4>💎 頂級 Vintage Port 市場價格（2024年參考）</h4>
      <table style="width:100%;border-collapse:collapse;font-size:0.9em">
        <tr style="background:#5c2a0a;color:white">
          <th style="padding:8px">年份/酒莊</th><th style="padding:8px">市場均價（每瓶）</th><th style="padding:8px">陳年潛力</th>
        </tr>
        <tr style="background:#fdf6ec"><td style="padding:6px">Graham's 1977</td><td style="padding:6px">€800–1,200</td><td style="padding:6px">現在–2030</td></tr>
        <tr><td style="padding:6px">Fonseca 1985</td><td style="padding:6px">€400–600</td><td style="padding:6px">現在–2035</td></tr>
        <tr style="background:#fdf6ec"><td style="padding:6px">Taylor's 2000</td><td style="padding:6px">€200–350</td><td style="padding:6px">2025–2050</td></tr>
        <tr><td style="padding:6px">Quinta do Noval Nacional 2011</td><td style="padding:6px">€1,500–2,500</td><td style="padding:6px">2035–2080</td></tr>
        <tr style="background:#fdf6ec"><td style="padding:6px">Graham's 2011</td><td style="padding:6px">€150–220</td><td style="padding:6px">2030–2070</td></tr>
      </table>
      <h4>⚠️ 投資注意事項</h4>
      <ul>
        <li><strong>儲存條件</strong>：需要 13–15°C 穩定溫度，高濕度地窖，直立置放會導致木塞乾裂</li>
        <li><strong>來源追蹤</strong>：Provenance（酒的來源歷史）是決定價值的關鍵，拍賣行必提供</li>
        <li><strong>流動性</strong>：拍賣行（Christie's、Acker、Hart Davis Hart）是主要退出管道</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🏺',
    title: '馬德拉：世界最長壽的葡萄酒',
    html: `
      <p><strong>Madeira</strong> 因其獨特的 Estufagem 氧化加熱工藝，成為葡萄酒世界中最不可思議的存在——一些 18–19 世紀的馬德拉至今仍然充滿活力，可以飲用。</p>
      <h4>🔬 為什麼馬德拉能陳年數百年？</h4>
      <ul>
        <li><strong>高酒精</strong>（17–22%）：抑制微生物活動，防止氧化腐敗</li>
        <li><strong>高酸度</strong>：保持新鮮感和結構（即使陳年後仍充滿活力）</li>
        <li><strong>已氧化</strong>：Estufagem 工藝已將酒氧化，裝瓶後不會再進一步氧化</li>
        <li><strong>高糖分</strong>（甜型）：額外的保存作用</li>
      </ul>
      <h4>💎 馬德拉收藏市場</h4>
      <ul>
        <li>19 世紀馬德拉（1850–1900 年）：每瓶可達 €1,000–5,000+</li>
        <li>「Frasqueira」（單一年份馬德拉，桶陳至少 20 年）是收藏家首選</li>
        <li>最著名收藏家：Barbeito 酒莊保有 19 世紀罐裝馬德拉作為歷史館藏</li>
      </ul>
      <h4>📅 值得關注的馬德拉收藏年份</h4>
      <p>1900、1908、1920、1934、1954、1965、1988、2000、2005 等均是各大酒莊宣布的優秀 Frasqueira 年份。</p>
    `,
  },
  {
    type: 'compare',
    title: '波特酒 vs 馬德拉：收藏投資比較',
    items: [
      { icon: '🥃', label: 'Vintage Port（投資型）', desc: '明確評分體系、全球拍賣市場成熟、頂級年份年均增值 8–12%，但需嚴格儲存條件', color: '#5c2a0a' },
      { icon: '🏺', label: 'Madeira Frasqueira（收藏型）', desc: '陳年潛力無限（數百年），儲存相對容易（對溫度變化更寬容），但市場流動性較低', color: '#8E44AD' },
    ],
  },
  {
    type: 'quiz',
    question: 'Madeira 能夠陳年數百年的最主要原因是？',
    options: [
      '酒中含有特殊的天然防腐劑',
      'Estufagem 工藝已將酒充分氧化，加上高酒精和高酸度的共同保護',
      '馬德拉島特殊的火山水源',
      '全程在不銹鋼桶中保存',
    ],
    answer: 1,
    explanation: 'Madeira 的超長壽祕密在於：Estufagem 加熱氧化工藝已使酒充分氧化（不會再進一步氧化），再加上高酒精（17–22%）抑制微生物、高酸度維持結構。這三個因素共同創造了葡萄酒界獨一無二的永恆飲品。',
  },
  {
    type: 'summary',
    message: '恭喜完成收藏投資課程！',
    keyPoints: [
      'Vintage Port 頂級年份（2011 Quinta do Noval Nacional 等）每瓶可達數千歐元',
      '投資要點：Provenance（來源）、儲存條件、選擇有拍賣紀錄的年份',
      'Madeira 是世界最長壽的葡萄酒，19世紀老酒至今仍可飲用',
      'Madeira 的不老神話：已氧化 + 高酒精 + 高酸度的三重保護',
    ],
  },
]

// P4FinalExam — Level 4 大師評量
const P4FinalExam_slides = [
  {
    type: 'cover',
    icon: '👑',
    gradient: 'linear-gradient(135deg, #B8860B, #DAA520)',
    title: 'Level 4 大師評量',
    subtitle: '葡萄牙葡萄酒大師認證測驗',
    points: [
      { icon: '🎯', label: '考試範圍', text: '涵蓋頂級酒莊、盲品技術、年份分析、市場與投資' },
      { icon: '📊', label: '題目數量', text: '10 題精選題，每題包含詳細解析' },
      { icon: '🏆', label: '通過標準', text: '全部完成即視為通過，展現大師級葡萄牙葡萄酒知識' },
    ],
  },
  {
    type: 'quiz',
    question: '「葡萄牙的 Pétrus」指的是哪一支酒？',
    options: ['Quinta do Crasto Reserva', 'Barca Velha', 'Niepoort Batuta', 'Ramos Pinto Duas Quintas'],
    answer: 1,
    explanation: 'Barca Velha 由 Ferreira 酒莊於 1952 年創制，因其稀罕、頂級品質和高昂價格，常被稱為「葡萄牙的 Pétrus」。它只在最優秀的年份才發布，至今共發布約 26 個年份。',
  },
  {
    type: 'quiz',
    question: '在盲品中，哪個香氣是識別 Touriga Nacional 最強的線索？',
    options: ['黑胡椒香', '煙燻皮革', '紫羅蘭花香', '草莓果醬'],
    answer: 2,
    explanation: '紫羅蘭花香（Violet）是 Touriga Nacional 最獨特的識別特徵，在其他品種中極為罕見。加上深紫黑色澤和高單寧，構成識別 Touriga Nacional 的黃金組合。',
  },
  {
    type: 'quiz',
    question: 'Vintage Port 在橡木桶中陳年幾年後裝瓶？',
    options: ['1 年', '2 年', '7 年', '15 年'],
    answer: 1,
    explanation: 'Vintage Port 只在橡木桶中短暫陳年 2 年，然後裝瓶。其複雜度主要來自裝瓶後的長期瓶中陳年（通常需要 15–25 年）。這與 LBV（4–6年桶陳）和 Tawny（多年桶陳）完全不同。',
  },
  {
    type: 'quiz',
    question: '2003 年 Douro 年份品質不佳的主要原因是？',
    options: ['採收期大量降雨', '歐洲熱浪導致過熟、酒精偏高、酸度不足', '葡萄病害嚴重', '霜害損害大量葡萄'],
    answer: 1,
    explanation: '2003 年歐洲經歷了歷史性熱浪，葡萄牙也受到嚴重衝擊。極端高溫導致葡萄快速過熟，糖分急速累積（高酒精）而酸度喪失。這是近代氣候變遷對葡萄酒品質衝擊的典型案例。',
  },
  {
    type: 'quiz',
    question: 'Vinho Verde 在美國市場成功的最主要原因是？',
    options: ['高酒精度，適合美國口味', '低酒精、清爽微氣泡、高性價比符合現代飲酒趨勢', '是美國最便宜的進口酒', '有特殊的藥用價值'],
    answer: 1,
    explanation: 'Vinho Verde 在美國市場的成功源於多重因素：低酒精（8–11.5%）符合健康意識、天然微氣泡感清爽討喜、性價比極高（8–15 美元入門款品質遠超同價位）。這些特點完全契合現代消費者趨勢。',
  },
  {
    type: 'quiz',
    question: 'Madeira 能陳年數百年的核心原因組合是？',
    options: [
      '特殊的火山玄武岩土壤影響',
      'Estufagem 氧化 + 高酒精 + 高酸度',
      '島嶼氣候的獨特保存效果',
      '不鏽鋼桶密封保存',
    ],
    answer: 1,
    explanation: 'Madeira 的超長壽祕密在於三重保護：Estufagem 工藝已使酒充分氧化（不會再進一步演化腐敗）、高酒精（17–22%）抑制微生物、高酸度維持結構活力。這三個因素共同造就了獨一無二的永恆葡萄酒。',
  },
  {
    type: 'quiz',
    question: '關於 Baga 品種，以下哪個描述最準確？',
    options: [
      '以紫羅蘭花香著稱，口感柔順',
      '主要種植於 Douro，是波特酒的核心品種',
      '高酸度和高單寧，年輕時緊澀，需陳年才展現魅力',
      '是葡萄牙最廣泛種植的品種',
    ],
    answer: 2,
    explanation: 'Baga 是 Bairrada 產區的代表品種，以世界頂級的高酸度和高澀感單寧著稱。年輕時非常緊澀難喝，但陳年後可以發展出令人驚艷的細膩和複雜度。其識別特徵是「酸」——是盲品葡萄牙品種時的重要線索。',
  },
  {
    type: 'quiz',
    question: 'Colheita 與一般 Tawny Port 最主要的區別是？',
    options: [
      'Colheita 只用 Touriga Nacional 釀造',
      'Colheita 是單一年份的 Tawny，桶陳至少 7 年，標示實際收成年份',
      'Colheita 比 Vintage Port 更昂貴',
      'Colheita 必須在酒莊裝瓶（Estate Bottled）',
    ],
    answer: 1,
    explanation: 'Colheita 是 Tawny Port 的特殊形式，關鍵在於：①單一年份（不是多年調配）、②在橡木桶中陳年至少 7 年、③酒標上標示實際收成年份。這使 Colheita 兼具 Tawny 的氧化風格和 Vintage Port 的年份特徵。',
  },
  {
    type: 'quiz',
    question: '哪個葡萄牙產區在面對氣候變遷時被認為是「受益者」？',
    options: ['Alentejo', 'Douro Superior', 'Vinho Verde（Minho）', 'Algarve'],
    answer: 2,
    explanation: 'Vinho Verde 位於葡萄牙西北部，受大西洋影響最深，氣溫相對涼爽。隨著全球暖化使南部產區日益炎熱，Vinho Verde 的清爽特性反而更受市場青睞，尤其是頂級 Alvarinho 白酒的需求持續上升。',
  },
  {
    type: 'quiz',
    question: '在波特酒收藏中，「Provenance」（來源）的重要性在於？',
    options: [
      '決定波特酒的品種組成',
      '是評估酒的真實性、儲存歷史和市場價值的關鍵依據',
      '記錄波特酒的釀造工藝',
      '標示採收年份',
    ],
    answer: 1,
    explanation: 'Provenance（來源/出處）在波特酒收藏和投資中至關重要。它記錄了一瓶酒的完整歷史：從何處購買、如何儲存、是否來自知名的地窖或拍賣行。完整 Provenance 的老年份波特酒價值遠高於來源不明的同款，這也是防止偽造老酒的重要機制。',
  },
  {
    type: 'summary',
    icon: '👑',
    message: '🎉 恭喜您完成葡萄牙葡萄酒 Level 4 大師課程！',
    keyPoints: [
      '✅ 頂級酒莊：Barca Velha、Quinta do Crasto、Niepoort 的風格與哲學',
      '✅ 盲品技術：Touriga（紫羅蘭）、Syrah（胡椒）、Baga（高酸）的識別策略',
      '✅ 年份解析：Douro 2000–2023 年份評分與氣候影響因子',
      '✅ 氣候變遷：葡萄牙各產區的衝擊與應對策略',
      '✅ 自然酒：有機・生物動力・自然酒的核心差異',
      '✅ 餐酒搭配：Bacalhau/烤乳豬/蛋撻的最佳酒款',
      '✅ 全球市場：Vinho Verde 在美國的成功故事',
      '✅ 收藏投資：Vintage Port 和 Madeira 的陳年潛力與市場價值',
    ],
  },
]

// ───────────────────────────────────────────────────────────────
//  Level 3 投影片 — 加強酒與特殊風格深探
// ───────────────────────────────────────────────────────────────

// P3M1L1 — 波特酒釀造工藝：加烈時機與 Lagar 踩皮
const P3M1L1_slides = [
  {
    type: 'cover',
    icon: '🏺',
    gradient: 'linear-gradient(135deg, #5c2a0a, #8B4513)',
    title: '波特酒釀造工藝：加烈時機與 Lagar 踩皮',
    subtitle: 'Level 3 · 波特酒深度解析',
    points: [
      { icon: '⏱️', label: '加烈時機是關鍵', text: '在發酵至酒精 7–8% 時加入烈酒，中止發酵，保留甜分' },
      { icon: '🦶', label: 'Lagar 傳統踩皮', text: '石槽中人力踩皮，歷史逾千年，仍是頂級 Vintage Port 的首選工藝' },
      { icon: '🔬', label: '現代機械化', text: 'Autovinificators 和 Robotic Lagares 讓大量生產與頂級品質兼顧' },
    ],
  },
  {
    type: 'map',
    title: 'Douro DOC 產區地圖',
    description: '波特酒的誕生地——杜羅河谷片岩梯田，從 Baixo Corgo（西，多雨）到 Douro Superior（東，炎熱）三個子產區各有特色',
    mapRegion: 'Douro',
  },,

  {
    type: 'content',
    icon: '⏱️',
    title: '加烈時機：殘糖與酒精的精密平衡',
    html: `
      <p>波特酒的獨特甜度來自<strong>加烈時機的精確控制</strong>。釀酒師必須在正確時機加入葡萄烈酒，中止發酵。</p>
      <h4>🔬 發酵監控流程</h4>
      <ul>
        <li>葡萄採收後，在 Lagar 或發酵桶中開始發酵</li>
        <li>每 2–4 小時測量一次<strong>糖度（Baumé）</strong>和<strong>酒精度</strong></li>
        <li>當自然酒精達到 <strong>6–8%</strong>（殘糖約 80–120 g/L）時，加入 77% 中性葡萄烈酒</li>
        <li>烈酒殺死酵母，發酵立即停止，最終酒精 <strong>19–22%</strong></li>
      </ul>
      <h4>🎯 加烈比例</h4>
      <ul>
        <li>通常每 4 份葡萄汁（must）加入 <strong>1 份烈酒</strong>（1:4 比例）</li>
        <li>最終混合物酒精達到 19–22%，抑制所有微生物活動</li>
      </ul>
      <h4>⚖️ 甜度控制</h4>
      <ul>
        <li><strong>較早加烈</strong>（低酒精 6%）→ 殘糖更高，更甜（適合 Vintage Port）</li>
        <li><strong>較晚加烈</strong>（酒精 8%）→ 殘糖較低，相對較干（適合 Tawny）</li>
        <li>釀酒師依預期風格精確決定加烈時機</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🦶',
    title: 'Lagar：傳統石槽踩皮的藝術',
    html: `
      <p><strong>Lagar</strong>（拉格爾）是 Douro 傳統的低矮花崗岩石槽，人力踩皮是波特酒歷史上最重要的工藝之一。</p>
      <h4>🏺 Lagar 的結構與尺寸</h4>
      <ul>
        <li>低矮花崗岩石槽，深約 <strong>60–90 cm</strong>，寬約 3–5 m</li>
        <li>低高度設計讓工人可以輕鬆站立踩踏，不傷及葡萄籽</li>
        <li>每個 Lagar 容量約 <strong>5,000–15,000 升</strong></li>
      </ul>
      <h4>🦶 踩皮程序</h4>
      <ul>
        <li><strong>第一階段（2 小時切割）</strong>：工人並排，有節奏地踩踏，充分破皮</li>
        <li><strong>第二階段（靜置階段）</strong>：讓葡萄皮自由上浮，定期踩壓保持皮帽濕潤</li>
        <li>整個過程持續 <strong>2–3 天</strong>直到加烈</li>
      </ul>
      <h4>💎 Lagar 的品質優勢</h4>
      <ul>
        <li><strong>最溫和的提取</strong>：人腳的重量和柔軟性不會壓碎種籽（種籽含粗澀單寧）</li>
        <li><strong>高效色素提取</strong>：在短發酵期（2–3 天）內最大化花青素提取</li>
        <li><strong>精細單寧</strong>：頂級 Vintage Port 的細膩口感有賴 Lagar 踩皮</li>
        <li>Symington 集團（Graham's・Dow's・Warre's）旗下的頂級 Quinta 仍堅持 Lagar</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: '傳統 Lagar 踩皮 vs. 現代機械踩皮',
    items: [
      { icon: '🦶', label: '傳統 Lagar（人力）', desc: '最溫和提取，不壓碎種籽，精細單寧，色素豐富。頂級 Vintage Port 必選。成本高，只適合小批量', color: '#5c2a0a' },
      { icon: '🤖', label: 'Robotic Lagar（機械腳）', desc: '以矽膠機械腳模擬人腳踩踏，2000 年代由 Niepoort 和 Churchill 率先引入，品質接近傳統 Lagar，可大批量生產', color: '#8B4513' },
      { icon: '⚙️', label: 'Autovinificator（自動泵循環）', desc: '傳統大量生產設備：發酵產生的 CO₂ 壓力將酒液泵送到皮帽頂部，循環浸漬。效率高但提取力不及踩皮', color: '#795548' },
      { icon: '🌀', label: 'Piston System（活塞壓皮）', desc: '液壓活塞定時下壓葡萄皮帽，較 Autovinificator 更溫柔，是中等品質波特酒的常見選擇', color: '#6d4c41' },
    ],
  },
  {
    type: 'quiz',
    question: '波特酒在釀造過程中，加入葡萄烈酒（加烈）的時機通常是何時？',
    options: ['葡萄發酵完全結束後', '葡萄剛採摘壓榨後立即加入', '發酵進行到自然酒精約 7–8% 時', '裝瓶前才加入'],
    answer: 2,
    explanation: '波特酒的加烈時機是在葡萄發酵進行到自然酒精達到 7–8% 時（約發酵 2–3 天）。此時加入 77% 的葡萄烈酒，殺死酵母，中止發酵，保留大量殘糖（約 80–120 g/L），形成波特酒獨特的甜型加烈風格。',
  },
  {
    type: 'quiz',
    question: 'Lagar 傳統踩皮相比現代機械發酵，最主要的品質優勢是什麼？',
    options: ['踩皮速度更快', '人腳踩踏最溫和，不壓碎種籽，提取精細單寧和豐富色素', '可以提取更多酒精', '完全無氧環境'],
    answer: 1,
    explanation: 'Lagar 的核心優勢在於：人腳的重量和柔軟性恰好適合破皮但不壓碎葡萄種籽。種籽含有粗澀的青澀單寧，一旦壓碎會降低波特酒品質。因此 Lagar 踩皮能在短發酵期（2–3 天）內最大化色素提取，同時保持單寧細膩，是頂級 Vintage Port 的必選工藝。',
  },
  {
    type: 'summary',
    message: '恭喜完成波特酒釀造工藝課程！',
    keyPoints: [
      '加烈時機：發酵至自然酒精 7–8% 時，加入 77% 烈酒（1:4 比例），中止發酵保留甜分',
      '加烈越早 → 更甜（Vintage）；加烈越晚 → 較干（Tawny）',
      'Lagar 踩皮：傳統花崗岩石槽，人腳最溫和，不壓碎種籽，頂級 Vintage Port 必選',
      '現代 Robotic Lagar 以矽膠機械腳模擬，可大批量生產，品質接近傳統',
    ],
  },
]

// P3M1L2 — Ruby 系列：Ruby・LBV・Vintage・Single Quinta
const P3M1L2_slides = [
  {
    type: 'cover',
    icon: '🔴',
    gradient: 'linear-gradient(135deg, #8B0000, #c0392b)',
    title: 'Ruby 系列深度解析',
    subtitle: 'Level 3 · Ruby・LBV・Vintage・Single Quinta',
    points: [
      { icon: '🍓', label: 'Ruby 家族', text: '以果香主導、瓶中還原陳年為共同特色，從基礎款到頂級 Vintage 跨越巨大' },
      { icon: '🔍', label: 'LBV 的分類陷阱', text: '有過濾 LBV（可即飲）vs. 無過濾 LBV（需換瓶）：同名不同品質' },
      { icon: '🏆', label: 'Single Quinta Vintage', text: '單一酒莊 Vintage：非宣布年份的精品，常常超越官方 Vintage 的性價比' },
    ],
  },
  {
    type: 'content',
    icon: '🍓',
    title: 'Ruby 家族：從基礎到頂級',
    html: `
      <h4>🍓 Ruby（基礎款）</h4>
      <ul>
        <li>在大型橡木桶中陳年 <strong>2–3 年</strong>，保持深紅寶石色和鮮果香</li>
        <li>黑莓、藍莓、黑醋栗果香，甜度明顯，酒精 19–20%</li>
        <li>立即可飲，不需陳年，一般無年份</li>
      </ul>
      <h4>🏅 Ruby Reserve（Reserva）</h4>
      <ul>
        <li>品質高於基礎 Ruby：嚴選葡萄，更長桶陳（通常 3–4 年）</li>
        <li>各大酒莊有自家品牌名稱：如 Graham's <em>Six Grapes</em>、Dow's <em>Trademark</em>、Ramos Pinto <em>Adriano</em></li>
        <li>複雜度更高，帶巧克力、香料和黑色水果</li>
      </ul>
      <h4>🍷 Crusted Port</h4>
      <ul>
        <li>未過濾的混年份紅波特，在瓶中陳年至少 <strong>3 年</strong>，形成沉澱（crust）</li>
        <li>需要換瓶（decant），介於 LBV 和 Vintage 之間，性價比高</li>
        <li>現代不常見，主要由 Churchill's 等酒莊維持傳統</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🏆',
    title: 'LBV vs. Single Quinta vs. Vintage：頂級 Ruby 系列',
    html: `
      <h4>🍷 LBV（Late Bottled Vintage）— 兩種版本！</h4>
      <ul>
        <li><strong>過濾 LBV（Filtered）</strong>：桶陳 4–6 年後過濾裝瓶，可立即飲用，無沉澱，價格較低。大量生產，品質均一</li>
        <li><strong>未過濾 LBV（Unfiltered）</strong>：⭐ 桶陳 4–6 年後不過濾裝瓶，需換瓶，保留更多沉澱物，複雜度更高。代表：Graham's・Ramos Pinto・Niepoort 的 LBV</li>
      </ul>
      <h4>🌟 Single Quinta Vintage（單一酒莊年份）</h4>
      <ul>
        <li>在<strong>未宣布年份</strong>的次佳年份，來自單一最優秀的 Quinta 生產</li>
        <li>桶陳 2 年後裝瓶，需瓶中長期陳年（10–20 年）</li>
        <li>常常性價比超越官方 Vintage Port：同等品質但價格更低</li>
        <li>範例：Quinta do Vesúvio（Symington）、Quinta do Crasto、Quinta do Vale Meão</li>
      </ul>
      <h4>🥇 Vintage Port（頂級）</h4>
      <ul>
        <li>只在官方宣布的最佳年份生產（約每 3–4 年一次）</li>
        <li>桶陳 <strong>2 年</strong>後裝瓶，之後在瓶中陳年 <strong>20–50 年</strong></li>
        <li>最高品質，最高價格，最長陳年潛力</li>
        <li>頂級年份：2011・2007・2000・1994・1985・1977</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: 'Ruby 系列由低至高：完整比較',
    items: [
      { icon: '🍓', label: 'Ruby / Ruby Reserve', desc: '無年份，大桶陳年 2–4 年，深紅果香，立即可飲，最基礎的波特酒', color: '#c0392b' },
      { icon: '🍷', label: 'LBV（過濾）', desc: '單一年份，桶陳 4–6 年，立即可飲，大量生產，高性價比的年份波特酒', color: '#922B21' },
      { icon: '💎', label: 'LBV（未過濾）', desc: '單一年份，桶陳 4–6 年，需換瓶，複雜度明顯提升，是真正的品飲體驗', color: '#7B241C' },
      { icon: '🏆', label: 'Vintage / Single Quinta', desc: '最頂級，桶陳 2 年 + 瓶中陳年 20–50 年，每瓶都是獨特的時間旅行', color: '#5c2a0a' },
    ],
  },
  {
    type: 'quiz',
    question: 'LBV（Late Bottled Vintage）「未過濾版本」和「過濾版本」最主要的差異是什麼？',
    options: [
      '未過濾版陳年更短，過濾版陳年更長',
      '未過濾版保留沉澱複雜度更高需換瓶，過濾版立即可飲無沉澱',
      '未過濾版只用 Touriga Nacional，過濾版用混調品種',
      '未過濾版只在頂級年份生產'
    ],
    answer: 1,
    explanation: '這是 LBV 最容易混淆的知識點：過濾版 LBV 裝瓶前過濾清澈，可立即飲用，無沉澱，大量生產；未過濾版 LBV 保留天然沉澱，需要換瓶（decant），複雜度更高，通常來自知名酒莊，是真正值得收藏的 LBV。',
  },
  {
    type: 'quiz',
    question: 'Single Quinta Vintage Port 通常在哪種情況下生產？',
    options: [
      '每年都生產，來自最好的單一酒莊',
      '在未宣布為官方 Vintage 的次佳年份，來自單一最優秀的 Quinta',
      '只在最頂級年份，與官方 Vintage 同時生產',
      '由多個酒莊聯合生產的特殊款式'
    ],
    answer: 1,
    explanation: 'Single Quinta Vintage 通常在未宣布為官方 Vintage Port 的「次佳年份」生產，來自單一最優秀的 Quinta（酒莊）。這類酒常常性價比超越官方 Vintage：同等品質但價格更低，是行家的首選。',
  },
  {
    type: 'summary',
    message: '恭喜完成 Ruby 系列深度課程！',
    keyPoints: [
      'Ruby → Ruby Reserve → Crusted → LBV → Single Quinta → Vintage：品質遞進',
      'LBV 分兩種：過濾版（立即可飲）vs. 未過濾版（需換瓶，複雜度更高）',
      'Single Quinta Vintage：次佳年份 + 單一酒莊，常超越官方 Vintage 性價比',
      'Vintage Port：桶陳 2 年 + 瓶中陳年 20–50 年，只在最佳年份宣布',
    ],
  },
]

// P3M1L3 — Tawny 系列：10/20/30/40 年與 Colheita
const P3M1L3_slides = [
  {
    type: 'cover',
    icon: '🟤',
    gradient: 'linear-gradient(135deg, #8B4513, #A0522D)',
    title: 'Tawny 系列深度解析',
    subtitle: 'Level 3 · 10/20/30/40 年 Tawny 與 Colheita',
    points: [
      { icon: '🪣', label: 'Pipe 桶的魔法', text: '在 550L 的 Pipe 小桶中長期氧化陳年，是 Tawny 從紅轉金棕的秘密' },
      { icon: '🔢', label: '年份標示的意義', text: '10/20/30/40 年代表平均陳年風格，非特定年份——這是最重要的知識點' },
      { icon: '📅', label: 'Colheita 的獨特性', text: '單一年份 Tawny，桶陳至少 7 年，兼具氧化複雜度與年份個性' },
    ],
  },
  {
    type: 'content',
    icon: '🪣',
    title: 'Tawny 的氧化陳年科學：Pipe 桶裡的轉化',
    html: `
      <p>Tawny Port 的一切魅力來自在<strong>Pipe 桶</strong>中長期氧化陳年的化學轉化。</p>
      <h4>🪣 Pipe 桶的規格</h4>
      <ul>
        <li>傳統<strong>Pipe</strong>：容量約 <strong>550–630 升</strong>（小型橡木桶）</li>
        <li>小型桶增加酒液與橡木的接觸面積，加速氧化</li>
        <li>桶材主要用葡萄牙當地橡木或美國橡木</li>
      </ul>
      <h4>🔄 氧化陳年的化學轉化</h4>
      <ul>
        <li><strong>顏色轉化</strong>：花青素（深紅）→ 氧化分解 → 琥珀棕橙，失去紅色</li>
        <li><strong>香氣演化</strong>：新鮮紅果 → 乾果（葡萄乾、無花果）→ 堅果（杏仁、核桃）→ 焦糖太妃糖 → 咖啡巧克力（極老年份）</li>
        <li><strong>揮發</strong>：每年約蒸發 <strong>2–3%</strong> 的酒液（Angels' Share），進一步濃縮風味</li>
        <li><strong>糖分轉化</strong>：部分糖分在長期桶陳中進一步發酵，甜度略降</li>
      </ul>
      <h4>🌡️ Gaia 城的熟化環境</h4>
      <ul>
        <li>大多數 Tawny 在波爾圖對岸的 <strong>Vila Nova de Gaia</strong> 陳年</li>
        <li>濕潤海洋環境減緩揮發，有利緩慢氧化</li>
        <li>與 Douro 河谷的自然陳年相比，Gaia 城溫度更穩定</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🔢',
    title: '10 / 20 / 30 / 40 年 Tawny：實際內容解密',
    html: `
      <p>Tawny Port 的年份標示是葡萄牙葡萄酒中最容易誤解的概念之一。</p>
      <h4>📋 年份標示 ≠ 特定採收年份</h4>
      <ul>
        <li>「20 Years Tawny」<strong>並非</strong>指 2004 年（往回推 20 年）採收的葡萄</li>
        <li>而是指：調配中多個不同年份酒液的<strong>「風格類型年齡」約 20 年</strong></li>
        <li>酒師（Blender）混調 5–60 年不等的多年份 Tawny，確保成品呈現「類型 20 年」的風格</li>
      </ul>
      <table style="width:100%;border-collapse:collapse;font-size:0.87em;margin-top:8px">
        <tr style="background:#8B4513;color:white">
          <th style="padding:7px">標示</th><th style="padding:7px">典型混調年齡</th><th style="padding:7px">顏色</th><th style="padding:7px">主要香氣</th><th style="padding:7px">最佳搭配</th>
        </tr>
        <tr style="background:#fff3e0">
          <td style="padding:6px;font-weight:700">10 年</td><td style="padding:6px">7–15 年混調</td><td style="padding:6px">深橙棕</td><td style="padding:6px">橙皮・杏仁・乾果</td><td style="padding:6px">輕起司・果乾</td>
        </tr>
        <tr>
          <td style="padding:6px;font-weight:700">20 年</td><td style="padding:6px">15–30 年混調</td><td style="padding:6px">金棕色</td><td style="padding:6px">太妃糖・核桃・焦糖</td><td style="padding:6px">藍紋起司・核桃蛋糕</td>
        </tr>
        <tr style="background:#fff3e0">
          <td style="padding:6px;font-weight:700">30 年</td><td style="padding:6px">25–45 年混調</td><td style="padding:6px">淡琥珀金</td><td style="padding:6px">咖啡・陳年橙皮・蘭姆酒</td><td style="padding:6px">巧克力甜點・雪茄</td>
        </tr>
        <tr>
          <td style="padding:6px;font-weight:700">40 年</td><td style="padding:6px">35–60+ 年混調</td><td style="padding:6px">極淡黃金</td><td style="padding:6px">黑巧克力・菸草・木香・乾玫瑰</td><td style="padding:6px">頂級巧克力・濃縮咖啡</td>
        </tr>
      </table>
      <p style="margin-top:8px;font-size:0.88em;color:#6b7280">⭐ <strong>Colheita</strong>：單一年份的 Tawny，桶陳至少 <strong>7 年</strong>，標示實際採收年份。是 Tawny 家族中最精緻的類型。</p>
    `,
  },
  {
    type: 'quiz',
    question: '一瓶標示「30 Years Tawny」的波特酒，代表什麼意思？',
    options: [
      '所有酒液都是 30 年份（1994 年）採收',
      '混調中最年輕的酒液至少 30 年',
      '混調多個年份酒液，整體呈現「風格類型年齡約 30 年」的複雜度',
      '在瓶中額外陳年 30 年後才出售'
    ],
    answer: 2,
    explanation: 'Tawny Port 的年份標示（10/20/30/40 年）代表混調酒液整體呈現的「風格類型年齡」，而非特定採收年份。酒師混調多個不同年份（可能 15–45 年）的 Tawny，確保成品在顏色、香氣和甜度上符合「30 Years」的風格特徵。',
  },
  {
    type: 'quiz',
    question: 'Colheita 與一般「20 Years Tawny」最主要的差異是什麼？',
    options: [
      'Colheita 是多年份調配，20 Years Tawny 是單一年份',
      'Colheita 是單一年份的 Tawny（桶陳至少 7 年，標示採收年份），20 Years Tawny 是多年份調配',
      'Colheita 酒精度更高',
      'Colheita 只用白葡萄品種釀造'
    ],
    answer: 1,
    explanation: 'Colheita 是 Tawny 家族的精品：單一採收年份，在木桶中陳年至少 7 年（通常更長），酒標標示實際採收年份。這使 Colheita 兼具 Tawny 的氧化複雜度和 Vintage Port 的年份個性，是最精緻的 Tawny 類型。',
  },
  {
    type: 'summary',
    message: '恭喜完成 Tawny 系列深度課程！',
    keyPoints: [
      'Pipe 桶（550L）中長期氧化：顏色從深紅 → 金棕，香氣從果香 → 堅果太妃糖 → 咖啡巧克力',
      '年份標示（10/20/30/40 年）= 風格類型年齡，非特定採收年份，是多年份調配',
      'Colheita = 單一年份 Tawny，桶陳至少 7 年，標示採收年份，是 Tawny 的精品',
      'Angels\' Share：每年蒸發 2–3%，進一步濃縮風味',
    ],
  },
]

// P3M1L4 — 波特酒與佳餚：甜點・起司・巧克力配對
const P3M1L4_slides = [
  {
    type: 'cover',
    icon: '🍽️',
    gradient: 'linear-gradient(135deg, #4a148c, #6a1b9a)',
    title: '波特酒與佳餚：完美配對指南',
    subtitle: 'Level 3 · 甜點・起司・巧克力',
    points: [
      { icon: '🧀', label: '藍紋起司 × Tawny', text: '甜配鹹的傳統組合，Stilton × 20 Year Tawny 是英國傳統聖誕配對' },
      { icon: '🍫', label: '巧克力 × Ruby', text: '甜度越高的巧克力，需要更甜更濃的波特酒來匹配' },
      { icon: '🍮', label: '甜點配對原則', text: '酒的甜度必須 ≥ 食物甜度，否則酒顯苦澀失衡' },
    ],
  },
  {
    type: 'content',
    icon: '🧀',
    title: '起司配對：波特酒最完美的搭檔',
    html: `
      <p>起司是波特酒最重要的配對食物，不同類型的波特酒對應不同的起司風格。</p>
      <h4>🧀 藍紋起司 × Tawny（甜配鹹的黃金法則）</h4>
      <ul>
        <li><strong>Stilton × 20 Year Tawny</strong>：英國最傳統的聖誕配對。藍紋起司的鹹鮮強度正好需要 Tawny 的太妃糖甜度來平衡</li>
        <li><strong>Roquefort × 30 Year Tawny</strong>：法國藍紋的辛辣感與咖啡巧克力香完美共鳴</li>
        <li><strong>Gorgonzola × LBV</strong>：義大利藍紋較溫和，LBV 的果香甜度足夠匹配</li>
      </ul>
      <h4>🧀 硬質陳年起司 × Ruby Reserve</h4>
      <ul>
        <li>陳年 Manchego、Parmigiano Reggiano：油脂感被 Ruby 的高酸度和黑果香切穿</li>
        <li>葡萄牙 Serra da Estrela（羊奶軟質起司）× 10 Year Tawny：葡萄牙傳統組合</li>
      </ul>
      <h4>🧀 起司配對禁忌</h4>
      <ul>
        <li><strong>新鮮軟質起司（Mozzarella/Ricotta）</strong>：太清淡，被波特酒掩蓋</li>
        <li><strong>洗浸起司（Époisses）</strong>：發酵氣味太強，與波特酒競爭</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: '波特酒 × 食物配對全攻略',
    items: [
      { icon: '🧀', label: '藍紋起司 × Tawny', desc: 'Stilton/Roquefort × 20–30 Year Tawny：甜配鹹，堅果太妃糖香與鹹鮮黴香完美平衡。全球公認最佳配對之一', color: '#8B4513' },
      { icon: '🍫', label: '黑巧克力（70%+）× Vintage', desc: '高可可黑巧克力 × Vintage Port：苦甜中和，果乾香草與黑莓濃郁共鳴。需要酒的甜度 ≥ 巧克力甜度', color: '#8B0000' },
      { icon: '🍮', label: '葡式蛋撻（Pastel de nata）× LBV', desc: '奶油蛋撻的甜香 × LBV 的黑果甜度，既有葡萄牙靈魂又有完美甜度匹配', color: '#D4820A' },
      { icon: '🌰', label: '堅果甜點 × 30–40 Year Tawny', desc: '核桃派、杏仁脆餅 × 30–40 Year Tawny：酒本身就有濃郁堅果香，與堅果甜點形成共鳴而非對抗', color: '#5d4037' },
    ],
  },
  {
    type: 'quiz',
    question: '波特酒配對甜點的最重要原則是什麼？',
    options: [
      '酒的甜度必須低於食物，形成對比',
      '只能配無糖甜點',
      '酒的甜度必須大於或等於食物甜度，否則酒顯苦澀失衡',
      '只有 Vintage Port 能配甜點'
    ],
    answer: 2,
    explanation: '「酒甜 ≥ 食甜」是甜酒配對的黃金法則：如果食物比酒更甜，酒的殘糖會顯得不足，反而凸顯了酒的苦澀和酸度，造成難喝的失衡感。因此甜蜜的巧克力蛋糕需要更甜的 Vintage 或 30 Year Tawny 來匹配。',
  },
  {
    type: 'quiz',
    question: '英國最著名的聖誕傳統波特酒配對是？',
    options: ['Ruby Port × 黑巧克力', '20 Year Tawny × Stilton 藍紋起司', 'Vintage Port × Brie 布里起司', 'LBV × 草莓蛋糕'],
    answer: 1,
    explanation: 'Stilton 藍紋起司 × 20 Year Tawny 是英國最傳統的聖誕配對，兩者的甜配鹹相輔相成：Stilton 的強烈鹹鮮藍紋風味正好需要 Tawny 的太妃糖甜度來平衡，共同展現出無與倫比的和諧感。',
  },
  {
    type: 'summary',
    message: '恭喜完成波特酒配對課程！',
    keyPoints: [
      '黃金法則：酒的甜度 ≥ 食物甜度，否則酒顯苦澀',
      '藍紋起司 × Tawny：Stilton × 20 Year Tawny 是英國傳統聖誕配對',
      '黑巧克力（70%+）× Vintage Port：苦甜平衡的完美配對',
      '葡式蛋撻 × LBV：葡萄牙靈魂組合',
    ],
  },
]

// P3M2L1 — 馬德拉的 Estufagem 加熱氧化工藝
const P3M2L1_slides = [
  {
    type: 'cover',
    icon: '🌡️',
    gradient: 'linear-gradient(135deg, #8e44ad, #6c3483)',
    title: 'Madeira 的加熱氧化工藝深度解析',
    subtitle: 'Level 3 · Estufagem vs. Canteiro',
    points: [
      { icon: '🌡️', label: 'Estufagem 工業法', text: '不鏽鋼桶中加熱至 45–50°C，至少 90 天——大量生產的標準工藝' },
      { icon: '🏠', label: 'Canteiro 自然法', text: '酒莊頂樓自然熟化，可達數十年——頂級馬德拉的唯一選擇' },
      { icon: '♾️', label: '馬德拉化的本質', text: '充分氧化後的酒不再怕氧、怕熱——這就是馬德拉可陳年百年的科學秘密' },
    ],
  },
  {
    type: 'content',
    icon: '🌡️',
    title: 'Estufagem：工業加熱氧化的科學',
    html: `
      <p><strong>Estufagem</strong>（加熱工藝）是 Madeira 酒獨特的加速氧化工藝，也是 Madeira 能陳年百年的核心秘密。</p>
      <h4>🏭 工業 Estufagem（大量生產款）</h4>
      <ul>
        <li>將加烈後的 Madeira 酒置於<strong>不鏽鋼槽（Estufas）</strong>中</li>
        <li>緩慢加熱至 <strong>45–50°C</strong>，維持至少 <strong>90 天（3 個月）</strong></li>
        <li>此過程加速了「馬德拉化（Maderization）」——正常需要數十年的氧化在 3 個月內完成</li>
        <li>產生的特徵香氣：焦糖・烘烤・燉煮水果・咖啡</li>
        <li>冷卻後靜置至少 <strong>90 天</strong>，讓沉澱穩定，再過濾裝瓶</li>
      </ul>
      <h4>🔬 馬德拉化的化學反應</h4>
      <ul>
        <li><strong>梅納反應（Maillard Reaction）</strong>：糖+氨基酸在高溫下產生焦糖、烘烤香氣</li>
        <li><strong>氧化反應</strong>：酒液接觸微量氧氣，多酚氧化形成複雜化合物</li>
        <li><strong>酯化反應</strong>：酸與醇反應生成酯，增加芳香複雜度</li>
        <li>這些反應使酒液完全穩定，之後再接觸熱或氧氣也不會進一步腐壞</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🏠',
    title: 'Canteiro：自然頂樓熟化的藝術',
    html: `
      <p><strong>Canteiro</strong> 是頂級 Madeira 酒的自然熟化方式，以木架（Canteiro）支撐酒桶存放在酒莊最高樓層。</p>
      <h4>🏠 Canteiro 的工藝細節</h4>
      <ul>
        <li>加烈後的酒置於 <strong>600L 橡木桶（Pipes）</strong>中，存放在酒莊頂樓閣樓</li>
        <li>利用 Madeira 島的<strong>自然氣候</strong>：全年溫暖（20–25°C），大西洋海風帶來適當濕度</li>
        <li>桶頂留有小縫（微氧接觸），讓酒緩慢與氧氣接觸，同時蒸發水分濃縮風味</li>
        <li>最少陳年 <strong>2 年</strong>，頂級款可達 <strong>20–100 年</strong>以上</li>
      </ul>
      <h4>💎 Canteiro 的品質優勢</h4>
      <ul>
        <li><strong>更複雜的層次</strong>：緩慢自然熟化，風味比 Estufagem 更精緻立體</li>
        <li><strong>更長陳年潛力</strong>：真正的百年 Madeira 都是 Canteiro 工藝</li>
        <li><strong>更細膩的酸度平衡</strong>：不像 Estufagem 那樣急劇的焦糖化</li>
      </ul>
      <h4>🏆 頂級 Canteiro 馬德拉</h4>
      <ul>
        <li><strong>Blandy's</strong>、<strong>Henriques & Henriques</strong>、<strong>Barbeito</strong>：三大頂級 Canteiro 生產商</li>
        <li>Blandy's 的百年老 Madeira（1900、1920 年份）仍在市場流通，是世界最長壽葡萄酒</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: 'Estufagem vs. Canteiro：兩種工藝全面對比',
    items: [
      { icon: '🏭', label: 'Estufagem（工業）', desc: '不鏽鋼桶，45–50°C 加熱 90 天。快速馬德拉化，焦糖烘烤香突出。大量生產，3–5 年陳年後裝瓶', color: '#5d4037' },
      { icon: '🏠', label: 'Canteiro（自然）⭐', desc: '閣樓木桶，自然溫度（20–25°C），陳年 2–100 年。緩慢熟化，層次精緻，可陳年百年。頂級 Madeira 唯一方式', color: '#8e44ad' },
      { icon: '⏱️', label: '時間成本差異', desc: 'Estufagem = 90 天；Canteiro = 2–100 年。兩者品質差距與時間成本差距相對應', color: '#37474f' },
      { icon: '💰', label: '價格差異', desc: '5 年 Estufagem ≈ €10–20；10 年 Canteiro ≈ €50–100；50 年 Canteiro ≈ €500+；百年老 Madeira ≈ 數千歐元', color: '#1565c0' },
    ],
  },
  {
    type: 'quiz',
    question: 'Canteiro 和 Estufagem 最根本的工藝差異是什麼？',
    options: [
      'Canteiro 使用不鏽鋼桶，Estufagem 使用橡木桶',
      'Canteiro 是在酒莊頂樓自然溫度緩慢熟化（年至數十年），Estufagem 是不鏽鋼桶工業加熱至 45–50°C（90 天）',
      'Canteiro 只用於干型 Madeira，Estufagem 只用於甜型',
      'Canteiro 在西班牙進行，Estufagem 在葡萄牙進行'
    ],
    answer: 1,
    explanation: 'Canteiro（自然法）是頂級 Madeira 的工藝：酒置於酒莊閣樓橡木桶中，利用島嶼自然氣候（20–25°C）緩慢熟化，可達 2–100 年以上。Estufagem（工業法）是大量生產方式：在不鏽鋼桶中加熱至 45–50°C 維持 90 天，快速完成馬德拉化。',
  },
  {
    type: 'quiz',
    question: 'Madeira 的「馬德拉化（Maderization）」過程中，哪個化學反應產生了焦糖和烘烤香氣？',
    options: ['酒精發酵', '梅納反應（糖 + 氨基酸在高溫下）', '蘋果乳酸發酵', '酒石酸沉澱'],
    answer: 1,
    explanation: '梅納反應（Maillard Reaction）是 Madeira 加熱工藝中最重要的化學反應：糖分與氨基酸在高溫下發生非酶促褐變反應，產生大量焦糖、烘烤、咖啡、堅果等特徵香氣，這是 Madeira 獨特風味的核心。',
  },
  {
    type: 'summary',
    message: '恭喜完成 Madeira 工藝深度課程！',
    keyPoints: [
      'Estufagem（工業）：不鏽鋼桶 45–50°C × 90 天，大量生產，快速馬德拉化',
      'Canteiro（自然）⭐：閣樓自然熟化 2–100 年，頂級 Madeira 唯一方式',
      '馬德拉化 = 梅納反應 + 氧化 + 酯化，使酒完全穩定，不再怕熱怕氧',
      '百年 Madeira 只可能是 Canteiro，Blandy\'s 等頂級酒莊保有 1900 年份仍在銷售',
    ],
  },
]

// P3M2L2 — 四大品種風格：Sercial（極干）→ Malvasia（極甜）
const P3M2L2_slides = [
  {
    type: 'cover',
    icon: '🍋',
    gradient: 'linear-gradient(135deg, #0288d1, #8B2252)',
    title: 'Madeira 四大品種：甜度光譜全解析',
    subtitle: 'Level 3 · Sercial → Verdelho → Bual → Malvasia',
    points: [
      { icon: '🍋', label: 'Sercial（極干）', text: '最高酸度、最低甜度的馬德拉，礦物鹹鮮感，作餐前酒最佳' },
      { icon: '🌿', label: 'Verdelho（中干）', text: '煙燻香草，中等甜度，可搭配湯品和海鮮' },
      { icon: '🟤', label: 'Bual（中甜）', desc: '深色焦糖無花果，明顯甜度，搭配起司最佳' },
      { icon: '🍯', label: 'Malvasia（極甜）', text: '最濃郁最甜，蜂蜜杏桃熱帶水果，最受市場歡迎的餐後甜酒' },
    ],
  },
  {
    type: 'content',
    icon: '🍋',
    title: 'Sercial 與 Verdelho：干型馬德拉',
    html: `
      <h4>🍋 Sercial（極干）</h4>
      <ul>
        <li>種植在 Madeira 島<strong>最高海拔（700–900m）</strong>的葡萄園，是島上最涼爽的地帶</li>
        <li>晚熟，採收時仍帶極高酸度，殘糖低</li>
        <li><strong>風格</strong>：極干（殘糖 18–65 g/L），最高酸度，清爽礦物，帶杏仁・鹽水・碘・煙熏香氣</li>
        <li><strong>最佳飲用方式</strong>：冰涼（8–10°C）作餐前酒，搭配橄欖・堅果・海鮮濃湯</li>
        <li>陳年潛力：10–50 年的 Sercial 可展現驚人複雜度</li>
      </ul>
      <h4>🌿 Verdelho（中干）</h4>
      <ul>
        <li>種植在中海拔（400–700m）地帶，成熟度略高於 Sercial</li>
        <li><strong>風格</strong>：中干（殘糖 65–85 g/L），微甜酸度高，帶獨特的<strong>煙燻・香草・金黃蘋果</strong>香氣</li>
        <li><strong>最佳飲用方式</strong>：微冰（10–12°C），可搭配清燉海鮮・蔬菜湯品</li>
        <li>歷史上曾是最受英國市場喜愛的馬德拉風格</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🍯',
    title: 'Bual 與 Malvasia：甜型馬德拉',
    html: `
      <h4>🟤 Bual（= Boal）（中甜）</h4>
      <ul>
        <li>種植在中低海拔（200–400m），溫暖地帶，更早成熟</li>
        <li><strong>風格</strong>：中甜（殘糖 85–130 g/L），深金棕色，帶<strong>無花果・太妃糖・焦糖・可可</strong>複雜風味</li>
        <li>酸度仍足夠支撐甜度，不顯膩重</li>
        <li><strong>最佳飲用方式</strong>：室溫（16–18°C），搭配藍紋起司・核桃甜點・巧克力</li>
      </ul>
      <h4>🍯 Malvasia（= Malmsey）（極甜）</h4>
      <ul>
        <li>種植在<strong>最低海拔（0–200m）</strong>的沿海地帶，最溫暖，糖分最高</li>
        <li><strong>風格</strong>：極甜（殘糖 130–200 g/L），深琥珀色，帶<strong>蜂蜜・杏桃・熱帶水果・柳橙果醬</strong></li>
        <li>儘管極甜，馬德拉的高酸度讓它不覺膩口，而是絲滑甜潤</li>
        <li><strong>最佳飲用方式</strong>：微溫（16°C），作餐後甜酒，搭配蛋撻・甜蜜糕點・鵝肝</li>
        <li>是市場最受歡迎的馬德拉風格，也是入門首選</li>
      </ul>
      <h4>📋 非品種標示的 Madeira</h4>
      <ul>
        <li>大多數平價 Madeira 不標示品種，使用 Tinta Negra Mole 混調（本島最廣泛種植的品種）</li>
        <li>可標示甜度：Seco（極干）・Medium Dry・Medium Rich・Rich（極甜）</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: 'Madeira 四大品種甜度光譜',
    items: [
      { icon: '🍋', label: 'Sercial（極干）', desc: '殘糖 18–65 g/L，最高酸，礦物鹽水，餐前酒，8–10°C', color: '#c9b45c' },
      { icon: '🌿', label: 'Verdelho（中干）', desc: '殘糖 65–85 g/L，煙燻香草，搭配湯品，10–12°C', color: '#7a8c3a' },
      { icon: '🟤', label: 'Bual（中甜）', desc: '殘糖 85–130 g/L，無花果太妃糖，起司甜點，室溫', color: '#8B4513' },
      { icon: '🍯', label: 'Malvasia（極甜）', desc: '殘糖 130–200 g/L，蜂蜜杏桃，餐後甜酒，16°C，市場最受歡迎', color: '#B8860B' },
    ],
  },
  {
    type: 'quiz',
    question: 'Madeira 四大品種中，種植在最高海拔（700–900m）、酸度最高、甜度最低的是哪個品種？',
    options: ['Malvasia', 'Bual', 'Verdelho', 'Sercial'],
    answer: 3,
    explanation: 'Sercial 種植在 Madeira 島最高海拔（700–900m）的葡萄園，是最涼爽、最晚熟的品種。因此酸度最高、甜度最低，呈現極干風格，帶礦物鹽水杏仁香氣，是最適合作餐前酒的馬德拉風格。',
  },
  {
    type: 'quiz',
    question: 'Malvasia（Malmsey）在 Madeira 四大品種中甜度最高，但為什麼不覺得膩口？',
    options: [
      '因為酒精度低（11%），比較清爽',
      '因為 Madeira 的馬德拉化工藝降低了糖分',
      '因為 Madeira 的天然高酸度（即使在最甜款中）平衡了甜度，使其不顯膩口',
      '因為 Malvasia 葡萄本身含苦味物質'
    ],
    answer: 2,
    explanation: 'Madeira 以極高的天然酸度著稱，即使是最甜的 Malvasia（殘糖 130–200 g/L）也因為馬德拉化工藝保留了豐富的酸度，使甜味有足夠的酸度骨架支撐，口感絲滑甜潤而不膩口，這是 Madeira 甜型款與其他甜酒最大的差異。',
  },
  {
    type: 'summary',
    message: '恭喜完成 Madeira 四大品種課程！',
    keyPoints: [
      'Sercial（極干）：最高海拔，礦物鹽水，餐前酒首選',
      'Verdelho（中干）：煙燻香草，英國市場歷史最愛',
      'Bual（中甜）：無花果太妃糖，搭配起司和巧克力',
      'Malvasia（極甜）：蜂蜜熱帶水果，市場最受歡迎，高酸平衡甜度不膩口',
    ],
  },
]

// P3M2L3 — 馬德拉陳年：百年老酒的秘密
const P3M2L3_slides = [
  {
    type: 'cover',
    icon: '⏳',
    gradient: 'linear-gradient(135deg, #4a148c, #311b92)',
    title: 'Madeira 陳年：百年老酒的秘密',
    subtitle: 'Level 3 · 五個陳年等級與永恆馬德拉',
    points: [
      { icon: '⏳', label: '五個陳年等級', text: 'Finest（3年）→ Reserva（5年）→ Special Reserve（10年）→ Extra Reserve（15年）→ Frasqueira（20年+）' },
      { icon: '♾️', label: '為何可陳年百年？', text: '三重保護：充分氧化 + 高酒精（17–22%）+ 高酸度，是世界最穩定的葡萄酒' },
      { icon: '📅', label: '百年老酒', text: 'Blandy\'s 等酒莊保有 1920、1900 年份仍可購買，是有確實記錄的最長壽葡萄酒' },
    ],
  },
  {
    type: 'content',
    icon: '📊',
    title: 'Madeira 五個官方陳年等級',
    html: `
      <p>葡萄牙 IVBAM（Madeira、Banyuls 及 Pico 葡萄酒研究院）制定了 Madeira 的官方陳年分級。</p>
      <table style="width:100%;border-collapse:collapse;font-size:0.87em">
        <tr style="background:#4a148c;color:white">
          <th style="padding:7px">等級</th><th style="padding:7px">最低陳年</th><th style="padding:7px">方式</th><th style="padding:7px">特色</th>
        </tr>
        <tr style="background:#f3e5f5">
          <td style="padding:6px"><strong>Finest（Selecionado）</strong></td>
          <td style="padding:6px">3 年</td>
          <td style="padding:6px">Estufagem</td>
          <td style="padding:6px">基礎款，烹飪用途或入門飲用</td>
        </tr>
        <tr>
          <td style="padding:6px"><strong>Reserva（Reserve）</strong></td>
          <td style="padding:6px">5 年</td>
          <td style="padding:6px">Estufagem / Canteiro</td>
          <td style="padding:6px">日常飲用，性價比高</td>
        </tr>
        <tr style="background:#f3e5f5">
          <td style="padding:6px"><strong>Special Reserve</strong></td>
          <td style="padding:6px">10 年</td>
          <td style="padding:6px">Canteiro 為主</td>
          <td style="padding:6px">複雜度明顯，品種特色開始展現</td>
        </tr>
        <tr>
          <td style="padding:6px"><strong>Extra Reserve</strong></td>
          <td style="padding:6px">15 年</td>
          <td style="padding:6px">Canteiro</td>
          <td style="padding:6px">精緻深邃，收藏入門</td>
        </tr>
        <tr style="background:#f3e5f5">
          <td style="padding:6px"><strong>Frasqueira（Vintage）⭐</strong></td>
          <td style="padding:6px">20 年以上</td>
          <td style="padding:6px">Canteiro 唯一</td>
          <td style="padding:6px">單一年份，最頂級，陳年潛力無限</td>
        </tr>
      </table>
      <p style="margin-top:8px;font-size:0.88em"><strong>Frasqueira</strong> 是葡萄牙語中「玻璃瓶」的意思，也是頂級 Madeira 的代名詞。需至少 Canteiro 陳年 20 年以上，品質最頂，可繼續陳年 50–100 年。</p>
    `,
  },
  {
    type: 'content',
    icon: '♾️',
    title: '為何 Madeira 可陳年百年？三重保護機制',
    html: `
      <p>Madeira 是世界上最長壽的葡萄酒，這得益於三個相互加強的保護機制：</p>
      <h4>1️⃣ 充分氧化（已穩定）</h4>
      <ul>
        <li>Estufagem / Canteiro 工藝使酒充分氧化，所有容易腐敗的化合物已轉化</li>
        <li>「已氧化完畢」的酒不會再因接觸氧氣而進一步劣化</li>
        <li>類比：鐵完全生鏽後不會再生更多銹</li>
      </ul>
      <h4>2️⃣ 高酒精（17–22%）</h4>
      <ul>
        <li>高酒精抑制所有微生物（醋酸菌、乳酸菌、野生酵母）活動</li>
        <li>在 18% 以上，任何微生物都無法生存</li>
      </ul>
      <h4>3️⃣ 高酸度</h4>
      <ul>
        <li>Madeira 的天然酸度極高（pH 3.0–3.2），抑制細菌</li>
        <li>同時提供支撐骨架，使酒在百年陳年後仍有活力不顯老態</li>
      </ul>
      <h4>🏆 有記錄的百年老 Madeira</h4>
      <ul>
        <li>Blandy's <strong>1900 Vintage Malmsey</strong>：1900 年採收，仍可購買飲用，狀態驚人</li>
        <li>D'Oliveiras <strong>1850 Verdelho</strong>：最老之一，極少量仍在市場流通</li>
        <li>拿破崙時代（1815 年前）的 Madeira 被發現於美國白宮地窖，品飲後仍令人驚嘆</li>
      </ul>
    `,
  },
  {
    type: 'quiz',
    question: 'Madeira 最高等級「Frasqueira（Vintage）」的最低陳年要求是？',
    options: ['桶陳至少 5 年', '桶陳至少 10 年', '以 Canteiro 自然法陳年至少 20 年', '以 Estufagem 加熱至少 2 年'],
    answer: 2,
    explanation: 'Frasqueira（Vintage Madeira）是最頂級的 Madeira 等級，必須使用 Canteiro 自然法（不可用 Estufagem 工業法），在橡木桶中陳年至少 20 年，並為單一年份。裝瓶後還可繼續陳年 50–100 年以上。',
  },
  {
    type: 'quiz',
    question: 'Madeira 能陳年百年的三重保護機制包括哪些？',
    options: [
      '低酒精 + 低糖 + 低溫',
      '充分氧化（已穩定）+ 高酒精（17–22%）+ 高酸度',
      '加入防腐劑 + 真空密封 + 冷藏',
      '低產量 + 特殊品種 + 手工採收'
    ],
    answer: 1,
    explanation: 'Madeira 的百年陳年秘密在於三重保護：①充分氧化（Estufagem/Canteiro 工藝使酒完全穩定，不再因氧氣劣化）②高酒精（17–22%，抑制所有微生物）③高酸度（pH 3.0–3.2，抑制細菌並維持結構活力），三者共同造就了世界最長壽的葡萄酒。',
  },
  {
    type: 'summary',
    message: '恭喜完成 Madeira 陳年課程！',
    keyPoints: [
      '五個等級：Finest（3年）→ Reserva（5年）→ Special Reserve（10年）→ Extra Reserve（15年）→ Frasqueira（20年+）',
      'Frasqueira 是頂級，Canteiro 唯一，單一年份，陳年潛力無限',
      '三重保護：充分氧化 + 高酒精（17–22%）+ 高酸度',
      'Blandy\'s 的 1900 Vintage 仍在銷售，是世界最長壽葡萄酒的活證明',
    ],
  },
]

// P3M3L1 — Espumante：Bairrada・Vinho Verde 氣泡酒
const P3M3L1_slides = [
  {
    type: 'cover',
    icon: '🫧',
    gradient: 'linear-gradient(135deg, #1565c0, #0288d1)',
    title: 'Espumante：葡萄牙氣泡酒全解析',
    subtitle: 'Level 3 · Bairrada・Vinho Verde・Távora-Varosa',
    points: [
      { icon: '🫧', label: 'Espumante 三大產地', text: 'Bairrada（傳統法紅白）・Vinho Verde（自然微氣泡）・Távora-Varosa（最高海拔）' },
      { icon: '🥂', label: '傳統法 vs. 自然氣泡', text: '傳統法（瓶中二次發酵）vs. Vinho Verde 的天然 CO₂ 殘留——兩種截然不同的氣泡酒哲學' },
      { icon: '🏆', label: '葡萄牙氣泡酒的地位', text: '近年在世界大賽屢獲大獎，Bairrada Espumante 已進入世界頂級氣泡酒的行列' },
    ],
  },
  {
    type: 'content',
    icon: '🫧',
    title: 'Bairrada Espumante：葡萄牙最偉大的氣泡酒',
    html: `
      <p><strong>Bairrada DOC</strong> 是葡萄牙最重要的傳統法氣泡酒（Espumante Bruto Natural）產地。</p>
      <h4>🥂 釀造規範</h4>
      <ul>
        <li>使用<strong>傳統法（Método Clássico）</strong>：在瓶中進行二次發酵</li>
        <li>白色 Espumante 主要品種：<strong>Bical・Maria Gomes・Arinto・Cerceal</strong></li>
        <li>紅色/粉紅 Espumante：<strong>Baga</strong>（葡萄牙最特殊的紅色氣泡酒）</li>
        <li>酒泥陳年：標準款 <strong>9 個月</strong>，Reserva 款 <strong>18 個月</strong>，Extra Brut 頂級款 <strong>36+ 個月</strong></li>
      </ul>
      <h4>💎 Baga 紅色 Espumante 的獨特性</h4>
      <ul>
        <li>Baga 天然高酸正好適合傳統法氣泡酒（高酸是氣泡酒的基礎）</li>
        <li>帶紅漿果、野玫瑰香氣，細緻氣泡，是全世界最特殊的紅色傳統法氣泡酒之一</li>
        <li>Luís Pato・Filipa Pato・Sidral Mundet 等酒莊的紅色 Espumante 獲國際大獎</li>
      </ul>
      <h4>🏆 代表酒莊</h4>
      <ul>
        <li><strong>Luís Pato</strong>：Bairrada 傳奇，白色和紅色 Espumante 均屬標竿</li>
        <li><strong>Filipa Pato</strong>：現代精品，荷蘭市場特別受歡迎</li>
        <li><strong>Caves Aliança / Caves São João</strong>：大型傳統酒莊，性價比</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: '葡萄牙三大氣泡酒風格對比',
    items: [
      { icon: '🏅', label: 'Bairrada Espumante（傳統法）', desc: '瓶中二次發酵，酒泥陳年 9–36 個月，細緻持久氣泡，礦物感強。有白色（Bical）和獨特紅色（Baga）', color: '#1565c0' },
      { icon: '🌿', label: 'Vinho Verde 微氣泡（天然殘留）', desc: '在不鏽鋼桶中保留天然 CO₂，輕微氣泡（1–2 bar vs. 傳統法 6 bar），清爽怡人，適合海鮮', color: '#006600' },
      { icon: '🏔️', label: 'Távora-Varosa Espumante（傳統法）', desc: '葡萄牙第一個氣泡酒 DOC（1989），最高海拔（500–900m），酒泥陳年 18+ 個月，以 Malvasia Fina 為主', color: '#37474f' },
    ],
  },
  {
    type: 'quiz',
    question: 'Bairrada Espumante 使用哪種釀造方法？最短酒泥陳年時間是多久？',
    options: ['查瑪特法，3 個月', '傳統法（Método Clássico），9 個月', '自然碳酸充氣法，無需陳年', '傳統法，3 個月'],
    answer: 1,
    explanation: 'Bairrada Espumante 使用傳統法（Método Clássico）——在瓶中進行二次發酵，與法國香檳相同的方式。標準款最少在酒泥上陳年 9 個月，Reserva 款 18 個月，Extra Brut 頂級款可達 36 個月以上。',
  },
  {
    type: 'quiz',
    question: 'Vinho Verde 的「微氣泡」與 Bairrada Espumante 的氣泡最主要的差異是什麼？',
    options: [
      '兩者完全相同，都是傳統法製造',
      'Vinho Verde 是在桶中保留天然 CO₂（約 1–2 bar），Bairrada 是瓶中二次發酵（約 6 bar），後者氣泡更持久精緻',
      'Vinho Verde 比 Bairrada 的氣泡更多',
      'Vinho Verde 不含氣泡，只有 Bairrada 有'
    ],
    answer: 1,
    explanation: 'Vinho Verde 的微氣泡來自在不鏽鋼桶中保留的天然 CO₂（發酵副產物），壓力約 1–2 bar，氣泡細緻短暫。Bairrada Espumante 是瓶中二次發酵（傳統法），壓力約 5–6 bar（與香檳相同），氣泡更持久精緻，兩者是截然不同的工藝。',
  },
  {
    type: 'summary',
    message: '恭喜完成葡萄牙氣泡酒課程！',
    keyPoints: [
      'Bairrada：最重要的傳統法氣泡酒，酒泥陳年 9–36 個月，有白色（Bical）和獨特紅色（Baga）',
      'Vinho Verde：在桶中保留天然 CO₂，輕微氣泡（1–2 bar），清爽適合海鮮',
      'Távora-Varosa：葡萄牙第一個氣泡酒 DOC（1989），最高海拔，酒泥陳年 18+ 個月',
      'Baga 紅色傳統法氣泡酒是世界最獨特的氣泡酒之一',
    ],
  },
]

// P3M3L2 — Moscatel de Setúbal 與葡萄牙甜酒世界
const P3M3L2_slides = [
  {
    type: 'cover',
    icon: '🍯',
    gradient: 'linear-gradient(135deg, #e65100, #bf360c)',
    title: '葡萄牙甜酒世界全景',
    subtitle: 'Level 3 · Moscatel・Carcavelos・Abafado',
    points: [
      { icon: '🍯', label: 'Moscatel de Setúbal', text: '新鮮葡萄皮浸皮工藝，麝香花香極致，可陳年 50–100 年' },
      { icon: '🥃', label: 'Carcavelos', text: '接近滅絕的里斯本半甜加烈酒 DOC，僅存一家生產商' },
      { icon: '🍇', label: 'Abafado', text: '葡萄牙傳統釀酒技術：加入烈酒中止發酵，比 Porto 更古老的加烈工藝' },
    ],
  },
  {
    type: 'content',
    icon: '🍯',
    title: 'Moscatel de Setúbal 深度：Roxo 與陳年版本',
    html: `
      <p><strong>Moscatel de Setúbal DOC</strong> 是葡萄牙最著名的甜酒之一，因其獨特的皮接觸工藝而聞名。</p>
      <h4>🌸 兩大品種版本</h4>
      <ul>
        <li><strong>Moscatel de Setúbal（黃色）</strong>：使用 Muscat of Alexandria（= Moscatel Graúdo），更常見，帶橙花・杏桃・蜂蜜</li>
        <li><strong>Moscatel Roxo（紫色）⭐</strong>：使用稀有紫色品種，帶玫瑰・覆盆子・紫羅蘭，數量極稀少，是葡萄牙最珍稀的甜酒</li>
      </ul>
      <h4>⏳ 陳年演化</h4>
      <ul>
        <li><strong>5–10 年</strong>：深金黃，麝香花香濃郁，橙花杏桃，絲滑甜潤</li>
        <li><strong>20–30 年</strong>：深琥珀，太妃糖橙皮堅果，甜度依然豐盈但更複雜</li>
        <li><strong>50+ 年</strong>：José Maria da Fonseca 的頂級老年份，顏色極深，咖啡焦糖稠密，甜度依舊，令人震撼</li>
      </ul>
      <h4>🔬 獨特的皮浸泡工藝</h4>
      <ul>
        <li>加烈後，將新鮮的 Moscatel 葡萄皮加入酒中浸泡 <strong>3–6 個月</strong>（其他加烈酒無此步驟）</li>
        <li>這步驟大幅增加麝香花香的濃郁度和口感的絲滑感</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: '葡萄牙甜酒類型全景比較',
    items: [
      { icon: '🍯', label: 'Moscatel de Setúbal', desc: '麝香葡萄加烈 + 皮浸泡，花香極致，可陳年 50–100 年，設圖巴爾半島', color: '#e65100' },
      { icon: '🥃', label: 'Porto（Ruby/Tawny）', desc: '多品種混調加烈，果香或氧化型，20–50 年陳年，杜羅河谷', color: '#8B0000' },
      { icon: '🏝️', label: 'Madeira（Bual/Malvasia）', desc: '加熱氧化工藝，最長壽，百年陳年，馬德拉島', color: '#8e44ad' },
      { icon: '🏰', label: 'Carcavelos', desc: '半甜加烈酒，里斯本郊區，幾乎滅絕，僅 Quinta dos Pesos 生產，帶堅果太妃糖', color: '#5d4037' },
    ],
  },
  {
    type: 'quiz',
    question: 'Moscatel de Setúbal 釀造中「浸泡新鮮葡萄皮」的步驟有什麼作用？',
    options: [
      '增加酒的顏色使其更深',
      '增加酒精濃度',
      '大幅提升麝香花香的濃郁度，是 Moscatel de Setúbal 與其他加烈甜酒最大的區別',
      '降低酸度，使口感更圓潤'
    ],
    answer: 2,
    explanation: 'Moscatel de Setúbal 在加烈後額外進行 3–6 個月的新鮮葡萄皮浸泡，這個獨特步驟（其他加烈酒沒有）讓 Moscatel 的天然芳香物質（萜烯類）大量溶入酒中，使麝香橙花香氣極致濃郁，是 Moscatel de Setúbal 最核心的風格特徵。',
  },
  {
    type: 'quiz',
    question: '「Moscatel Roxo」是葡萄牙哪個產區最稀有的甜酒，使用什麼顏色的葡萄品種？',
    options: [
      'Douro 產區，白色品種',
      'Setúbal 半島，紫色 Moscatel 品種，帶玫瑰覆盆子香',
      'Alentejo 產區，紅色品種',
      'Madeira 島，橙色葡萄'
    ],
    answer: 1,
    explanation: 'Moscatel Roxo（紫色 Moscatel）是 Setúbal 半島 DOC 中最稀有的甜酒，使用一種極稀少的紫色果皮 Muscatel 品種，釀成的酒帶有玫瑰・覆盆子・紫羅蘭的獨特香氣，與一般金色 Moscatel de Setúbal 完全不同，數量極少，是葡萄牙最珍稀的甜酒之一。',
  },
  {
    type: 'summary',
    message: '恭喜完成葡萄牙甜酒世界課程！',
    keyPoints: [
      'Moscatel de Setúbal：皮浸泡工藝，麝香花香極致，可陳年 50–100 年',
      'Moscatel Roxo：紫色品種，玫瑰覆盆子香，葡萄牙最稀有甜酒',
      '四大甜酒：Moscatel（花香型）・Porto（果香/氧化型）・Madeira（加熱氧化型）・Carcavelos（幾乎滅絕）',
      'José Maria da Fonseca 的老年份 Moscatel 是葡萄牙甜酒的極致代表',
    ],
  },
]

// P3M3L3 — Vinho Verde 中的微氣泡：Pétillant 風格
const P3M3L3_slides = [
  {
    type: 'cover',
    icon: '💧',
    gradient: 'linear-gradient(135deg, #2e7d32, #00695c)',
    title: 'Vinho Verde 的微氣泡與 Pétillant 風格',
    subtitle: 'Level 3 · 天然微氣泡與現代自然酒運動',
    points: [
      { icon: '💧', label: 'CO₂ 的傳統', text: '葡萄牙釀酒師數百年來習慣在不鏽鋼桶中保留天然 CO₂，微氣泡是 Vinho Verde 的 DNA' },
      { icon: '🌿', label: 'Pét-Nat 現代運動', text: 'Pétillant Naturel（自然起泡）：只進行一次發酵，裝瓶後利用殘糖完成氣泡，無添加，自然酒先鋒' },
      { icon: '🌍', label: '從傳統到全球潮流', text: '葡萄牙 Vinho Verde 的微氣泡傳統，正在通過 Pét-Nat 形式引領全球自然氣泡酒潮流' },
    ],
  },
  {
    type: 'content',
    icon: '💧',
    title: 'Vinho Verde 微氣泡的傳統與科學',
    html: `
      <p>Vinho Verde 的微氣泡（<em>Pétillant</em>）不是刻意添加的，而是傳統釀造的自然結果。</p>
      <h4>🔬 微氣泡的來源</h4>
      <ul>
        <li>傳統 Vinho Verde 在不鏽鋼桶中完成發酵，<strong>不進行蘋果乳酸發酵（MLF）</strong></li>
        <li>保留部分 CO₂（蘋果酸轉化為乳酸的副產品）在酒液中</li>
        <li>壓力通常僅 <strong>1–2 bar</strong>（傳統法香檳約 6 bar），氣泡細緻短暫</li>
        <li>開瓶後氣泡很快消散，留下一種「刺激感」而非明顯氣泡</li>
      </ul>
      <h4>📅 歷史背景</h4>
      <ul>
        <li>葡萄牙西北部葡萄酒歷史上因<strong>高酸度</strong>被認為「太粗澀」</li>
        <li>農民喝年輕的 Vinho Verde 時，酒中天然保留的 CO₂ 使口感更清爽可口</li>
        <li>這個「缺陷」逐漸成為 Vinho Verde 的標誌性特色</li>
      </ul>
      <h4>🌿 現代趨勢：Alvarinho 無氣泡化</h4>
      <ul>
        <li>頂級 Monção/Melgaço 的 Alvarinho 生產商（如 Soalheiro）越來越多地釀造<strong>無氣泡版本</strong></li>
        <li>希望讓品飲者專注於 Alvarinho 的品種特色，而非被微氣泡影響感知</li>
        <li>這反映了市場對 Alvarinho 作為嚴肅精品白酒的認可</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🌿',
    title: 'Pétillant Naturel（Pét-Nat）：自然酒的氣泡革命',
    html: `
      <p><strong>Pétillant Naturel</strong>（法語：天然微氣泡）簡稱 <strong>Pét-Nat</strong>，是全球自然酒運動中最受矚目的氣泡酒風格。</p>
      <h4>🔬 Pét-Nat 的釀造原理</h4>
      <ul>
        <li>葡萄汁在<strong>發酵尚未完全結束時裝瓶</strong>（Méthode Ancestrale/古法）</li>
        <li>瓶中殘餘酵母繼續消耗殘糖，產生 CO₂ 形成氣泡</li>
        <li>只有<strong>一次發酵</strong>（傳統法有兩次），是最古老的氣泡酒製作方式</li>
        <li>不需添加糖（liqueur de tirage）、不需去泥（無 dégorgement），直接裝瓶</li>
      </ul>
      <h4>🌿 Pét-Nat 的特色</h4>
      <ul>
        <li>通常<strong>帶少量沉澱（酵母菌体）</strong>，外觀微濁</li>
        <li>氣泡不規則，比傳統法更活潑輕盈</li>
        <li>風味：帶麵包酵母感，新鮮果香，自然活潑，常帶輕微甜感（若發酵未完全）</li>
        <li>酒精通常較低（10–12%），適合日常飲用</li>
      </ul>
      <h4>🇵🇹 葡萄牙 Pét-Nat 代表</h4>
      <ul>
        <li><strong>Anselmo Mendes（Vinho Verde）</strong>：頂級 Alvarinho Pét-Nat 先驅</li>
        <li><strong>Niepoort Nat Cool</strong>：自然酒大師 Dirk Niepoort 的 Pét-Nat，以 Douro 白品種釀造</li>
        <li><strong>Aphros（Vinho Verde）</strong>：生物動力法 Pét-Nat，精品自然酒市場新星</li>
      </ul>
    `,
  },
  {
    type: 'quiz',
    question: 'Vinho Verde 傳統的微氣泡（Pétillant）主要來自哪個過程？',
    options: [
      '釀酒師在裝瓶前人工充入 CO₂',
      '傳統法瓶中二次發酵',
      '不鏽鋼桶中保留天然 CO₂（未進行蘋果乳酸發酵的副產品）',
      '使用特殊的起泡葡萄品種'
    ],
    answer: 2,
    explanation: 'Vinho Verde 的微氣泡是傳統釀造的自然結果：酒在不鏽鋼桶中完成發酵，不進行蘋果乳酸發酵（MLF），保留了 CO₂ 在酒液中，壓力約 1–2 bar。這不是刻意製造的氣泡，而是延續數百年的傳統「缺陷」，後來成為 Vinho Verde 的標誌特色。',
  },
  {
    type: 'quiz',
    question: 'Pétillant Naturel（Pét-Nat）與傳統法（Método Clássico）最根本的釀造差異是什麼？',
    options: [
      'Pét-Nat 使用更貴的葡萄品種',
      'Pét-Nat 只有一次發酵（在瓶中完成），傳統法有兩次發酵（額外添加糖和酵母進行二次發酵）',
      'Pét-Nat 需要更長的酒泥陳年',
      'Pét-Nat 必須去除酒泥，傳統法可以保留'
    ],
    answer: 1,
    explanation: 'Pét-Nat 使用古法（Méthode Ancestrale）：在發酵未完全結束時裝瓶，瓶中殘餘酵母繼續產生 CO₂，全程只有一次發酵。傳統法有兩次發酵（第一次完成後添加「tirage liqueur」進行瓶中二次發酵），並需要最後去泥（dégorgement）。Pét-Nat 更自然，更古老。',
  },
  {
    type: 'summary',
    message: '恭喜完成 Vinho Verde 微氣泡課程！',
    keyPoints: [
      'Vinho Verde 微氣泡：不鏽鋼桶保留天然 CO₂，壓力僅 1–2 bar，是傳統結果',
      '頂級 Alvarinho 趨向無氣泡，以展現品種純粹特色',
      'Pét-Nat：發酵未完成時裝瓶，只有一次發酵，最古老的氣泡酒方式',
      'Pét-Nat 特色：微濁、活潑、帶酵母感，是自然酒運動的代表款式',
    ],
  },
]

// P3M4L1 — 花崗岩 vs. 片岩 vs. 石灰岩：風土影響分析
const P3M4L1_slides = [
  {
    type: 'cover',
    icon: '🪨',
    gradient: 'linear-gradient(135deg, #37474f, #546e7a)',
    title: '葡萄牙三大土壤：風土影響深度分析',
    subtitle: 'Level 3 · 花崗岩・片岩・石灰岩',
    points: [
      { icon: '⚪', label: '花崗岩', text: 'Minho・Dão：清爽礦物感，賦予 Alvarinho 和 Encruzado 細膩結構' },
      { icon: '⚫', label: '片岩（Xisto）', text: 'Douro：保熱強、逼深根、礦物煙燻感，是波特酒的靈魂' },
      { icon: '🟡', label: '石灰岩', text: 'Bairrada・Bucelas・Lisboa：高酸結構，賦予 Baga 和 Arinto 紮實骨架' },
    ],
  },
  {
    type: 'content',
    icon: '⚪',
    title: '花崗岩：礦物清爽的精緻土壤',
    html: `
      <p><strong>花崗岩（Granito）</strong>是葡萄牙北部和中部山地最重要的土壤，廣布於 Minho・Dão・Trás-os-Montes。</p>
      <h4>🔬 花崗岩的物理化學特性</h4>
      <ul>
        <li><strong>礦物組成</strong>：石英 + 長石 + 雲母，酸性土（pH 4.5–5.5）</li>
        <li><strong>排水性極佳</strong>：花崗岩風化後形成粗砂質土，水分快速滲透，葡萄藤需深根尋水</li>
        <li><strong>貧瘠低產</strong>：低肥沃度使葡萄自然低產，但果實集中度高</li>
        <li><strong>保熱性低</strong>：白色反光，比片岩涼爽，有利保留葡萄天然酸度</li>
      </ul>
      <h4>🍾 對葡萄酒的影響</h4>
      <ul>
        <li><strong>礦物質感</strong>：燧石、白堊、礦泉水的清爽礦物感</li>
        <li><strong>高酸度保留</strong>：涼爽排水土壤讓葡萄緩慢成熟，保留天然酸度</li>
        <li><strong>輕盈精緻</strong>：花崗岩上的葡萄酒通常酒體更輕，口感更細膩</li>
        <li><strong>代表案例</strong>：Monção Alvarinho（花崗岩礦物白）、Dão Encruzado（花崗岩複雜白）、Dão Touriga Nacional（優雅細膩）</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: '三大土壤 × 產區 × 酒款風格對照表',
    items: [
      { icon: '⚪', label: '花崗岩（Granito）', desc: 'Minho・Dão：涼爽礦物，清爽高酸，精緻輕盈。Alvarinho 礦物白酒、Encruzado 複雜白酒、Touriga Nacional 優雅紅酒', color: '#78909c' },
      { icon: '⚫', label: '片岩（Xisto/Schist）', desc: 'Douro：深色保熱，葡萄根深扎，礦物煙燻、深色果香。波特酒、頂級 Douro 紅酒（Barca Velha・Quinta do Crasto）', color: '#424242' },
      { icon: '🟡', label: '黏土石灰岩', desc: 'Bairrada・Bucelas：保水性佳，高酸結構骨架，Baga 的高單寧酸度、Arinto 的礦物清爽白酒', color: '#8D6E63' },
      { icon: '🟠', label: '花崗岩・片麻岩（Alentejo）', desc: 'Alentejo（特別是 Portalegre）：介於花崗岩精緻和炎熱之間，出產結構均衡、有礦物感的南方紅酒', color: '#6D4C41' },
    ],
  },
  {
    type: 'quiz',
    question: '為什麼 Douro 的片岩（Xisto）土壤讓葡萄根能長達 20 公尺？',
    options: [
      '片岩含有特殊的植物生長激素',
      '片岩有垂直裂縫，葡萄根可沿裂縫向下穿透尋找深層地下水',
      '片岩土壤特別鬆散，根系容易生長',
      '片岩中的礦物成分吸引葡萄根生長'
    ],
    answer: 1,
    explanation: 'Douro 的片岩（Schist）以垂直層狀裂縫著稱，葡萄根可沿這些自然裂縫向下穿透，深達 10–20 公尺尋找深層地下水。這種強迫性的深根使葡萄藤在夏季乾旱中仍能獲得充足水分，同時增加了礦物質的吸收，是波特酒複雜礦物感的根源。',
  },
  {
    type: 'quiz',
    question: '在葡萄牙三大主要土壤中，哪種土壤的保熱性最強，對葡萄成熟度貢獻最大？',
    options: ['花崗岩', '石灰岩', '片岩（Xisto）', '砂土'],
    answer: 2,
    explanation: '片岩（Xisto/Schist）是深灰黑色的薄層變質岩，顏色深吸熱強，白天大量吸收太陽輻射，夜間緩慢釋放，形成獨特的「地熱效應」。這種極強的保熱性使 Douro 夏季即使高溫下葡萄也能充分成熟，是波特酒高糖分和濃郁果香的重要因素。',
  },
  {
    type: 'summary',
    message: '恭喜完成葡萄牙土壤風土課程！',
    keyPoints: [
      '花崗岩（Minho/Dão）：涼爽礦物，清爽高酸，精緻輕盈，Alvarinho 和 Encruzado 的靈魂',
      '片岩（Douro）：深色保熱，逼深根，礦物煙燻，波特酒和頂級 Douro 紅酒的基礎',
      '石灰岩（Bairrada/Bucelas）：保水高酸，紮實骨架，Baga 和 Arinto 的結構來源',
      '土壤決定了風格方向，但氣候和品種同樣重要——三者共同構成「風土（Terroir）」',
    ],
  },
]

// P3M4L2 — 葡萄牙橡木桶：Balseiro 大桶傳統與法國桶現代派
const P3M4L2_slides = [
  {
    type: 'cover',
    icon: '🛢️',
    gradient: 'linear-gradient(135deg, #4e342e, #6d4c41)',
    title: '葡萄牙橡木桶：傳統 vs. 現代',
    subtitle: 'Level 3 · Balseiro 大桶 vs. 法國 Barrique',
    points: [
      { icon: '🏺', label: 'Balseiro 大桶傳統', text: '1,000–5,000L 的大型舊桶，讓葡萄酒緩慢微氧化，同時保留品種和風土特色' },
      { icon: '🛢️', label: '法國 Barrique 現代派', text: '225L 小桶，給予明顯的橡木香草和煙燻香，是 1990 年代國際化浪潮的工具' },
      { icon: '🔄', label: '當今趨勢', text: '越來越多的葡萄牙酒莊回歸大桶傳統，強調品種純粹性，減少橡木遮蓋' },
    ],
  },
  {
    type: 'content',
    icon: '🏺',
    title: 'Balseiro：葡萄牙橡木桶的傳統',
    html: `
      <p><strong>Balseiro</strong> 是葡萄牙傳統的大型舊橡木桶（也稱 Tonel），是葡萄牙陳年傳統的核心。</p>
      <h4>🏺 Balseiro 的規格</h4>
      <ul>
        <li>容量：<strong>1,000–10,000 升</strong>（相比之下，法國 barrique 僅 225L）</li>
        <li>通常已使用多年，橡木新桶味（new oak）已消失</li>
        <li>主要材質：葡萄牙橡木（Quercus faginea）或法國橡木舊桶</li>
      </ul>
      <h4>🍷 Balseiro 對葡萄酒的影響</h4>
      <ul>
        <li><strong>微氧化（Micro-oxygenation）</strong>：透過桶板的微細孔隙，極緩慢地接觸少量氧氣</li>
        <li>軟化單寧，讓葡萄酒更柔順，但<strong>不添加橡木香草/煙燻風味</strong></li>
        <li><strong>保留品種特色</strong>：Touriga Nacional 的紫羅蘭花香和 Encruzado 的礦物感不被木桶掩蓋</li>
        <li>傳統 Douro・Dão・Bairrada 酒莊使用 Balseiro 陳年 12–36 個月</li>
      </ul>
      <h4>🇵🇹 葡萄牙傳統橡木品種</h4>
      <ul>
        <li><strong>Quercus faginea</strong>（葡萄牙橡木）：孔隙更大，微氧化速度更快，但賦予的單寧較粗</li>
        <li>現代酒莊多改用法國或美國舊橡木桶（Balseiro 形式）</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: 'Balseiro 大桶 vs. 法國 Barrique 小桶',
    items: [
      { icon: '🏺', label: 'Balseiro（舊大桶）傳統', desc: '1,000–5,000L，多年使用無木味，緩慢微氧化，保留品種純粹性。代表：傳統 Dão/Douro 酒莊', color: '#4e342e' },
      { icon: '🛢️', label: 'Barrique（新小桶）現代', desc: '225L 法國新橡木桶，強烈木香（香草、煙燻、焦糖），6–18 個月陳年，影響力大。代表：Alentejo 1990 年代新浪潮', color: '#8B4513' },
      { icon: '🪣', label: '中型舊桶（500L）折衷', desc: '500L 舊桶或兩三次使用桶，輕微木香但不遮蓋品種。近年最流行的選擇，平衡傳統與現代', color: '#6d4c41' },
      { icon: '🌀', label: '不鏽鋼桶（無木影響）', desc: '完全無橡木影響，保留最純粹的品種和果香。用於 Vinho Verde・年輕 Alvarinho 和高端白酒初始發酵', color: '#37474f' },
    ],
  },
  {
    type: 'quiz',
    question: 'Balseiro 大型舊橡木桶（1,000–5,000L）相比法國新小桶（225L Barrique），最主要的葡萄酒釀造差異是什麼？',
    options: [
      'Balseiro 讓酒陳年更快，barrique 需要更長時間',
      'Balseiro 的微氧化更緩和，不添加木香，保留品種風土特色；Barrique 給予明顯橡木香草煙燻風味',
      'Balseiro 只能用於紅酒，barrique 可用於白酒',
      'Balseiro 比 Barrique 更貴'
    ],
    answer: 1,
    explanation: 'Balseiro 的關鍵優勢：大容量 + 多年使用（無新木味），讓葡萄酒透過桶板微孔隙緩慢微氧化，軟化單寧，但不添加任何橡木香氣。相比之下，225L 法國新桶（Barrique）因接觸面積大且桶材新鮮，賦予明顯的香草・煙燻・椰子木桶風味，容易掩蓋品種特色。',
  },
  {
    type: 'quiz',
    question: '葡萄牙 1990 年代引進法國小桶（Barrique）的主要目的是什麼？',
    options: [
      '降低釀酒成本',
      '配合國際市場口味，使葡萄牙酒更符合當時流行的橡木風格，提升出口競爭力',
      '為了保護葡萄牙傳統葡萄酒風格',
      '因為葡萄牙橡木資源枯竭'
    ],
    answer: 1,
    explanation: '1990 年代葡萄牙（特別是 Alentejo）大量引進法國 Barrique 小桶，是為了迎合當時國際市場（特別是美國英國市場）偏愛的重橡木、高濃縮風格（Parker 式評分導向）。這提升了葡萄牙酒的出口競爭力，但也使部分傳統風土特色被橡木遮蓋。',
  },
  {
    type: 'summary',
    message: '恭喜完成葡萄牙橡木桶課程！',
    keyPoints: [
      'Balseiro（舊大桶）：葡萄牙傳統，緩慢微氧化不添加木香，保留品種純粹性',
      '法國 Barrique（新小桶）：1990 年代引進，強烈木香，迎合國際口味',
      '當今趨勢：回歸大桶或 500L 中型舊桶，減少橡木影響，強調風土表達',
      '葡萄牙橡木（Quercus faginea）孔隙較大，微氧化更快，但單寧較粗',
    ],
  },
]

// P3M4L3 — 老藤葡萄酒：Colares Ramisco 與 Douro 百年老藤
const P3M4L3_slides = [
  {
    type: 'cover',
    icon: '🌿',
    gradient: 'linear-gradient(135deg, #1b5e20, #2e7d32)',
    title: '老藤葡萄酒：百年植株的珍稀風味',
    subtitle: 'Level 3 · Colares・Douro・Vinho Verde 的老藤傳奇',
    points: [
      { icon: '🌳', label: '老藤的定義', text: '通常指 30 年以上的葡萄藤，各國標準不同，有些「老藤（Vieilles Vignes）」已超過 100 年' },
      { icon: '🏖️', label: 'Colares 未嫁接老藤', text: '砂丘保護，從未受根瘤蚜侵害，部分藤株超過 200–300 年，是世界葡萄酒界最珍貴的活遺產' },
      { icon: '⛰️', label: 'Douro 老藤', text: '片岩梯田上的百年老藤 Touriga Nacional，是 Barca Velha 和頂級 Vintage Port 的靈魂' },
    ],
  },
  {
    type: 'content',
    icon: '🌳',
    title: '老藤的科學：為什麼老藤釀出更好的葡萄酒？',
    html: `
      <p>「老藤（Old Vines / Vieilles Vignes / Velhas Vinhas）」並非法定術語，但業界普遍認為老藤能帶來更高的品質。</p>
      <h4>🔬 老藤 vs. 年輕藤的差異</h4>
      <ul>
        <li><strong>深根系統</strong>：30+ 年的老藤根系可達 15–30 公尺深（特別在片岩和花崗岩中），吸取深層地下水和礦物質</li>
        <li><strong>自然低產</strong>：老藤自動降低產量，每株葡萄藤的果實量極少，但<strong>集中度和複雜度</strong>顯著更高</li>
        <li><strong>根系記憶</strong>：深根使葡萄藤受地表氣候影響更小，年份差異更穩定</li>
        <li><strong>更豐富的礦物質</strong>：深層礦物質通過根系吸收，反映在酒的礦物感上</li>
      </ul>
      <h4>📅 葡萄牙老藤的分級（非官方）</h4>
      <ul>
        <li><strong>老藤（Vinha Velha）</strong>：30–60 年，自然低產，品質提升</li>
        <li><strong>超老藤</strong>：60–100 年，稀有，果實複雜度大幅提升</li>
        <li><strong>百年老藤（Centenária）</strong>：100+ 年，極稀有，代表頂級釀酒葡萄</li>
        <li><strong>未嫁接老藤（Ramisco de Colares）</strong>：200–300+ 年，世界最珍稀</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: '葡萄牙最重要的老藤產地',
    items: [
      { icon: '🏖️', label: 'Colares（砂丘老藤）', desc: 'Ramisco 未嫁接老藤 200–300+ 年，砂丘保護，根系直入砂層深處。世界最稀有，每年產量可能不超過幾千瓶', color: '#1565c0' },
      { icon: '⛰️', label: 'Douro 老藤（片岩梯田）', desc: 'Touriga Nacional・Touriga Franca 百年老藤，根深片岩 20 公尺，濃縮礦物感。Barca Velha・Quinta do Crasto 老藤版是最頂級 Douro 紅酒', color: '#8B0000' },
      { icon: '🌿', label: 'Vinho Verde 老藤 Alvarinho', desc: 'Monção/Melgaço 花崗岩上 50–80 年老藤，礦物感更深，酸度更復雜。產量極低但品質極優', color: '#2e7d32' },
      { icon: '🍒', label: 'Bairrada 老藤 Baga', desc: 'Bairrada 黏土石灰岩上 50–100 年 Baga 老藤，高酸單寧的集中版，需陳年 20+ 年，是世界最被低估的老藤紅酒之一', color: '#1b5e20' },
    ],
  },
  {
    type: 'quiz',
    question: 'Colares 的老藤 Ramisco 為何能保存 200–300 年，成為世界最古老的未嫁接老藤之一？',
    options: [
      '因為 Colares 氣候特別寒冷，葡萄生長緩慢',
      '因為當地法律規定不得嫁接',
      '因為葡萄藤種植在大西洋沿岸砂丘中，根瘤蚜無法在砂土中生存，從未受 19 世紀根瘤蚜病害影響',
      '因為使用了特殊的基因改造品種'
    ],
    answer: 2,
    explanation: 'Colares 的 Ramisco 老藤能保存數百年，關鍵在於砂丘土壤：根瘤蚜（Phylloxera）無法在鬆散砂土中生存，因此 19 世紀摧毀歐洲葡萄酒業的根瘤蚜災害沒有影響 Colares。藤株無需嫁接到抗根瘤蚜砧木，得以保留原根生長，部分植株已存活 200–300 年以上。',
  },
  {
    type: 'quiz',
    question: '老藤（30 年以上）相比年輕藤最主要的品質優勢是什麼？',
    options: [
      '老藤能生產更多果實',
      '老藤葡萄酒可以立即飲用，不需陳年',
      '老藤根系更深，自然低產，果實集中度和複雜度更高，吸取更多深層礦物質',
      '老藤葡萄酒酒精度更低'
    ],
    answer: 2,
    explanation: '老藤的核心優勢：①深根（可達 15–30 公尺）吸取深層礦物質，②自然低產（老藤自動減少產量），每串葡萄集中了更多精華，③深根使藤株受氣候影響更穩定，年份差異更小。這些因素共同造就了老藤葡萄酒更高的集中度、複雜度和礦物感。',
  },
  {
    type: 'summary',
    message: '恭喜完成老藤葡萄酒課程！',
    keyPoints: [
      '老藤的優勢：深根（15–30m）+ 自然低產 + 礦物質吸收 + 年份穩定性',
      'Colares 砂丘未嫁接老藤（200–300+ 年）：世界最珍稀，根瘤蚜從未觸及',
      'Douro 百年老藤 Touriga Nacional：Barca Velha 和頂級 Vintage Port 的靈魂',
      'Vinho Verde 老藤 Alvarinho・Bairrada 老藤 Baga：被低估的老藤寶藏',
    ],
  },
]

// P3FinalExam — Level 3 綜合評量
const P3FinalExam_slides = [
  {
    type: 'cover',
    icon: '🏆',
    gradient: 'linear-gradient(135deg, #1a6b9b, #2980b9)',
    title: 'Level 3 綜合評量',
    subtitle: '測試您的加強酒、特殊工藝與風土深度知識',
    points: [
      { icon: '📝', label: '12 道進階題目', text: '涵蓋波特酒工藝・Madeira 技術・氣泡酒・風土橡木桶・老藤' },
      { icon: '🏆', label: 'Level 3 專業挑戰', text: '這些知識讓您能與世界頂級侍酒師對話' },
    ],
  },
  {
    type: 'quiz',
    question: '波特酒釀造中，加烈（加入葡萄烈酒）的最佳時機是？',
    options: ['完全發酵結束後', '葡萄壓榨後立即', '自然酒精達 7–8% 時（發酵進行約 2–3 天）', '裝瓶前一天'],
    answer: 2,
    explanation: '波特酒在葡萄發酵進行到自然酒精約 7–8% 時加入 77% 葡萄烈酒，中止發酵，保留殘糖 80–120 g/L，最終酒精 19–22%。加烈越早甜度越高（Vintage），越晚則較干（某些 Tawny）。',
  },
  {
    type: 'quiz',
    question: 'Lagar 傳統踩皮相比現代 Autovinificator 機械，最大的優勢是什麼？',
    options: ['踩皮更快完成', '人腳重量適中，不壓碎種籽，提取精細單寧和豐富色素', '可以大批量生產', '完全無氧'],
    answer: 1,
    explanation: 'Lagar 的核心優勢：人腳重量恰好破皮但不壓碎種籽（種籽含粗澀青澀單寧）。在只有 2–3 天的短發酵期內，Lagar 踩皮能最大化色素（花青素）提取，同時保持單寧細膩，是頂級 Vintage Port 的必選工藝。',
  },
  {
    type: 'quiz',
    question: '「未過濾 LBV」和「Vintage Port」最主要的差異是什麼？',
    options: [
      '完全相同，只是名稱不同',
      'LBV 桶陳 4–6 年後裝瓶（較早）；Vintage Port 桶陳 2 年後裝瓶（較短），但只在官方宣布的頂級年份生產',
      'LBV 只用 Touriga Nacional，Vintage 用多品種',
      'Vintage Port 是非過濾的，LBV 一定要過濾'
    ],
    answer: 1,
    explanation: 'LBV（Late Bottled Vintage）：單一年份，桶陳 4–6 年後裝瓶，非官方年份也可生產。Vintage Port：只在官方宣布的最佳年份（約每 3–4 年一次）生產，桶陳僅 2 年後裝瓶，之後在瓶中陳年 20–50 年才達最佳狀態。',
  },
  {
    type: 'quiz',
    question: '「30 Years Tawny」標示代表什麼？',
    options: [
      '酒莊在 1994 年（30 年前）採收的葡萄',
      '混調中最老的酒液已 30 年',
      '混調多個年份酒液，整體呈現「風格類型年齡約 30 年」的氧化複雜度',
      '在瓶中額外陳年 30 年'
    ],
    answer: 2,
    explanation: 'Tawny Port 的年份標示（10/20/30/40 年）代表混調酒液呈現的「風格類型年齡」，而非特定採收年份。酒師混調 15–45 年不等的多年份 Tawny，使成品在顏色、香氣（咖啡・陳年橙皮・蘭姆酒）和口感上符合「30 Years」的風格特徵。',
  },
  {
    type: 'quiz',
    question: 'Madeira 的 Canteiro 工藝最少需要在橡木桶中陳年多久才能標示為 Frasqueira（頂級 Vintage Madeira）？',
    options: ['5 年', '10 年', '20 年', '50 年'],
    answer: 2,
    explanation: 'Frasqueira（Vintage Madeira）是 Madeira 最高等級，必須使用 Canteiro 自然法（不可用 Estufagem），在橡木桶中陳年至少 20 年，並為單一年份。這是官方 IVBAM 規定。裝瓶後可繼續陳年 50–100 年。',
  },
  {
    type: 'quiz',
    question: 'Madeira 的四大品種中，種植在最低海拔（0–200m）、甜度最高的是哪個品種？',
    options: ['Sercial', 'Verdelho', 'Bual', 'Malvasia（Malmsey）'],
    answer: 3,
    explanation: 'Malvasia（Malmsey）種植在 Madeira 島最低海拔（0–200m）的溫暖沿海地帶，是糖分最高的品種，釀造極甜風格（殘糖 130–200 g/L）。儘管甜度極高，Madeira 天然高酸使其不顯膩口，帶蜂蜜・杏桃・熱帶水果香，是市場最受歡迎的 Madeira 風格。',
  },
  {
    type: 'quiz',
    question: 'Bairrada Espumante 和 Vinho Verde 微氣泡最根本的製作方式差異是什麼？',
    options: [
      '兩者都使用傳統法，差異在品種',
      'Bairrada 使用傳統法（瓶中二次發酵），Vinho Verde 是在桶中保留天然 CO₂',
      'Vinho Verde 使用查瑪特法，Bairrada 保留天然氣泡',
      '兩者完全相同'
    ],
    answer: 1,
    explanation: 'Bairrada Espumante 使用傳統法（Método Clássico），在瓶中進行二次發酵，壓力約 6 bar，酒泥陳年 9–36 個月。Vinho Verde 的微氣泡是在不鏽鋼桶中保留天然 CO₂（蘋果乳酸發酵的副產品），壓力約 1–2 bar，是完全不同的工藝。',
  },
  {
    type: 'quiz',
    question: '葡萄牙老藤 Ramisco（Colares）為何從未受根瘤蚜侵害，至今仍有 200–300 年未嫁接老藤？',
    options: [
      '使用了抗根瘤蚜砧木',
      '葡萄牙法律禁止根瘤蚜進入',
      '砂丘砂土讓根瘤蚜無法在其中生存，從未蔓延至 Colares',
      '大西洋海風阻止了根瘤蚜擴散'
    ],
    answer: 2,
    explanation: 'Colares 的 Ramisco 葡萄藤種植在大西洋沿岸砂丘的深層砂土中，根瘤蚜無法在鬆散砂土中生存，因此 19 世紀摧毀歐洲葡萄酒業的根瘤蚜從未影響 Colares。藤株保留原根，部分已超過 200–300 年，是世界最珍貴的葡萄酒活化石。',
  },
  {
    type: 'quiz',
    question: 'Balseiro（傳統大型舊橡木桶）相比 225L 法國新桶（Barrique），最主要的葡萄酒釀造優勢是？',
    options: [
      '成本更低廉',
      '緩慢微氧化，軟化單寧，但不添加橡木香草煙燻風味，保留品種風土純粹性',
      '使酒陳年速度更快',
      '適合所有葡萄品種'
    ],
    answer: 1,
    explanation: 'Balseiro（大型舊桶）透過桶板微孔隙讓酒緩慢微氧化，單寧軟化，口感更柔順，但不添加任何橡木香氣（桶材已多次使用，木香消耗殆盡）。這使 Touriga Nacional 的紫羅蘭花香和 Encruzado 的礦物感完整保留，是葡萄牙傳統風土表達的關鍵工具。',
  },
  {
    type: 'quiz',
    question: '葡萄牙 Douro 片岩（Xisto）土壤中，葡萄根可深達 10–20 公尺，原因是？',
    options: [
      '片岩非常鬆軟，根容易穿透',
      '片岩含有特殊的根系生長激素',
      '片岩具有垂直層狀裂縫，葡萄根沿裂縫向下穿透尋找深層地下水',
      '片岩土壤特別濕潤，根不需要向下尋水'
    ],
    answer: 2,
    explanation: 'Douro 片岩（Schist）最重要的物理特性是其垂直層狀裂縫。葡萄根沿這些自然裂縫向下穿透，深達 10–20 公尺尋找深層地下水，在夏季乾旱中保持水分供應，同時吸取深層礦物質，這是 Douro 葡萄酒礦物感和複雜度的根源。',
  },
  {
    type: 'quiz',
    question: 'Moscatel de Setúbal 在加烈後進行的「新鮮葡萄皮浸泡 3–6 個月」，主要增加了葡萄酒的哪個特性？',
    options: [
      '酒精度',
      '深色酒色',
      '麝香花香（萜烯類芳香物質）的濃郁度',
      '單寧結構'
    ],
    answer: 2,
    explanation: 'Moscatel de Setúbal 獨特的新鮮葡萄皮浸泡工藝（其他加烈酒沒有此步驟）讓葡萄皮中的天然萜烯類芳香物質大量溶入酒中，大幅提升麝香橙花香氣的濃郁度，是 Moscatel de Setúbal 香氣最突出、與其他甜酒最不同的核心特徵。',
  },
  {
    type: 'quiz',
    question: 'Pétillant Naturel（Pét-Nat）與傳統法氣泡酒（Bairrada Espumante）最根本的差異是？',
    options: [
      'Pét-Nat 使用更昂貴的品種',
      'Pét-Nat 只有一次發酵（裝瓶時發酵未完成），傳統法有兩次發酵（額外二次發酵）',
      'Pét-Nat 氣泡更多更持久',
      'Pét-Nat 必須去泥（dégorgement），傳統法不需要'
    ],
    answer: 1,
    explanation: 'Pét-Nat（Pétillant Naturel）使用古法（Méthode Ancestrale）：在第一次發酵尚未完成時裝瓶，瓶中殘餘酵母消耗殘糖產生 CO₂，全程只有一次發酵，通常帶輕微酵母沉澱。傳統法（Bairrada Espumante）有兩次發酵：第一次完整發酵後，添加 tirage liqueur 進行瓶中二次發酵，最後去泥（dégorgement）。',
  },
  {
    type: 'summary',
    message: '🎉 恭喜完成葡萄牙葡萄酒 Level 3 所有課程！您已掌握頂級加強酒與特殊工藝的深度知識。',
    keyPoints: [
      '✅ 波特酒工藝：加烈時機（7–8% 酒精）・Lagar 踩皮・Ruby vs. Tawny 系列',
      '✅ 馬德拉技術：Estufagem（工業）vs. Canteiro（自然）・四大品種甜度光譜・五個陳年等級',
      '✅ 葡萄牙氣泡酒：Bairrada 傳統法・Vinho Verde 天然 CO₂・Pét-Nat 自然酒',
      '✅ 風土深度：花崗岩・片岩・石灰岩的土壤影響分析',
      '✅ 橡木桶哲學：Balseiro 大桶傳統（保留風土）vs. 法國 Barrique（添加木香）',
      '✅ 老藤珍寶：Colares 未嫁接 200–300 年老藤・Douro 百年老藤 Touriga Nacional',
    ],
  },
]

// ───────────────────────────────────────────────────────────────
//  投影片對照表（Slide Map）
// ───────────────────────────────────────────────────────────────

const SLIDE_MAP = {
  // Level 1
  P1M1L1: P1M1L1_slides,
  P1M1L2: P1M1L2_slides,
  P1M1L3: P1M1L3_slides,
  P1M1L4: P1M1L4_slides,
  P1M2L1: P1M2L1_slides,
  P1M2L2: P1M2L2_slides,
  P1M3L1: P1M3L1_slides,
  P1M3L2: P1M3L2_slides,
  P1M3L3: P1M3L3_slides,
  P1M4L1: P1M4L1_slides,
  P1M4L2: P1M4L2_slides,
  P1M4L3: P1M4L3_slides,
  P1FinalExam: P1FinalExam_slides,
  // Level 2
  P2M1L1: P2M1L1_slides,
  P2M1L2: P2M1L2_slides,
  P2M1L3: P2M1L3_slides,
  P2M1L4: P2M1L4_slides,
  P2M2L1: P2M2L1_slides,
  P2M2L2: P2M2L2_slides,
  P2M2L3: P2M2L3_slides,
  P2M2L4: P2M2L4_slides,
  P2M3L1: P2M3L1_slides,
  P2M3L2: P2M3L2_slides,
  P2M3L3: P2M3L3_slides,
  P2M4L1: P2M4L1_slides,
  P2M4L2: P2M4L2_slides,
  P2M4L3: P2M4L3_slides,
  P2FinalExam: P2FinalExam_slides,
  P2M5L1: P2M5L1_slides,
  P2M5L2: P2M5L2_slides,
  // Level 3 — 加強酒與特殊風格深探
  P3M1L1: P3M1L1_slides,
  P3M1L2: P3M1L2_slides,
  P3M1L3: P3M1L3_slides,
  P3M1L4: P3M1L4_slides,
  P3M2L1: P3M2L1_slides,
  P3M2L2: P3M2L2_slides,
  P3M2L3: P3M2L3_slides,
  P3M3L1: P3M3L1_slides,
  P3M3L2: P3M3L2_slides,
  P3M3L3: P3M3L3_slides,
  P3M4L1: P3M4L1_slides,
  P3M4L2: P3M4L2_slides,
  P3M4L3: P3M4L3_slides,
  P3FinalExam: P3FinalExam_slides,
  // Level 4 — 大師品鑑與垂直年份
  P4M1L1: P4M1L1_slides,
  P4M1L2: P4M1L2_slides,
  P4M1L3: P4M1L3_slides,
  P4M2L1: P4M2L1_slides,
  P4M2L2: P4M2L2_slides,
  P4M2L3: P4M2L3_slides,
  P4M3L1: P4M3L1_slides,
  P4M3L2: P4M3L2_slides,
  P4M3L3: P4M3L3_slides,
  P4FinalExam: P4FinalExam_slides,
}

export function getPortugalLessonSlides(lessonId) {
  if (SLIDE_MAP[lessonId]) return SLIDE_MAP[lessonId]

  // 佔位投影片
  return [
    {
      type: 'cover',
      icon: '🏗️',
      gradient: 'linear-gradient(135deg, #95a5a6, #7f8c8d)',
      title: '課程內容製作中',
      subtitle: lessonId,
      points: [
        { icon: '✍️', label: '即將完成', text: '本課程正在由專業講師精心製作' },
        { icon: '🎓', label: '完整課程', text: '完整的葡萄牙葡萄酒課程即將全面上線' },
      ],
    },
    {
      type: 'summary',
      message: '感謝您的耐心等候！',
      keyPoints: [
        '本課程內容正在製作中',
        '我們的講師團隊正在準備詳盡的葡萄牙葡萄酒學習內容',
        '敬請期待完整課程上線',
      ],
    },
  ]
}
