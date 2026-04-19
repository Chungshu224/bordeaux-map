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
    type: 'quiz',
    question: '以下哪個是葡萄牙最大的 DOC（面積最大的法定產區）？',
    options: ['Douro', 'Alentejo', 'Vinho Verde', 'Dão'],
    answer: 2,
    explanation: 'Vinho Verde 位於葡萄牙西北部的 Minho 大區，是葡萄牙面積最大的 DOC，覆蓋約 34,000 公頃。',
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
    type: 'quiz',
    question: '「Touriga Nacional」主要種植在哪個產區，是波特酒的核心品種？',
    options: ['Alentejo', 'Douro / Porto', 'Vinho Verde', 'Lisboa'],
    answer: 1,
    explanation: 'Touriga Nacional 是葡萄牙最尊貴的品種，主要種植在 Douro 河谷，是波特酒（Porto）最重要的品種之一，也是頂級 Douro DOC 紅酒的靈魂。',
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
    type: 'quiz',
    question: 'Porto 波特酒的酒精濃度通常在哪個範圍？',
    options: ['10–12%', '14–16%', '19–22%', '30–35%'],
    answer: 2,
    explanation: '波特酒通過加烈工藝（加入葡萄烈酒）達到 19–22% 的酒精濃度，同時保留了大量殘糖，形成獨特的甜型加烈酒。',
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
    type: 'summary',
    message: '恭喜完成第十一課！您已了解 Vinho Verde 的特色。',
    keyPoints: [
      'Vinho Verde 是葡萄牙最大的 DOC，「Verde」= 年輕新鮮，不是顏色',
      '位於西北部 Minho 大區，大西洋氣候，年雨量 1,500mm',
      'Alvarinho（Monção/Melgaço）是最頂級的子產區品種',
      '有 9 個子產區，各有特色',
    ],
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
  // Level 2 - 已製作課程
  P2M1L1: P2M1L1_slides,
  P2M1L2: P2M1L2_slides,
  P2M5L1: P2M5L1_slides,
  P2M5L2: P2M5L2_slides,
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
