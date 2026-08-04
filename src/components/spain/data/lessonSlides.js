/**
 * 西班牙葡萄酒課程 — 投影片資料
 * 每個 lessonId 對應一組投影片陣列
 * 尚未製作的課程自動返回佔位投影片
 */

// ───────────────────────────────────────────────────────────────
//  Level 1 投影片
// ───────────────────────────────────────────────────────────────

const S1M1L1_slides = [
  {
    type: 'cover',
    icon: '🇪🇸',
    gradient: 'linear-gradient(135deg, #c0392b, #e74c3c)',
    title: '為什麼學西班牙葡萄酒？',
    subtitle: 'Level 1 · 第一課',
    points: [
      { icon: '🌍', label: '全球最大種植面積', text: '超過 96 萬公頃，全球第一' },
      { icon: '🍷', label: '超過百個 DO 產區', text: '從乾熱的安達盧西亞到清涼的加利西亞' },
      { icon: '📜', label: '獨特陳年制度', text: 'Crianza · Reserva · Gran Reserva 嚴格規範' },
    ],
  },
  {
    type: 'content',
    icon: '🌍',
    title: '西班牙葡萄酒的世界地位',
    html: `
      <p>西班牙是世界上<strong>葡萄種植面積最大</strong>的國家（約 96 萬公頃），但產量卻不是最高——這是因為許多產區土壤貧瘠乾燥，葡萄樹需要大間距種植來爭奪水分，形成低產但濃縮的果實。</p>
      <h4>🏅 三大全球之最</h4>
      <ul>
        <li><strong>種植面積</strong>：全球第 1（約 96 萬公頃）</li>
        <li><strong>葡萄酒出口量</strong>：全球第 1（以體積計）</li>
        <li><strong>DO 法定產區數量</strong>：超過 96 個，居全球前列</li>
      </ul>
      <h4>🌡️ 多元氣候造就豐富風格</h4>
      <p>從西北角加利西亞的大西洋涼爽氣候，到中部梅塞塔高原的大陸型極端氣候，再到南部安達盧西亞的地中海炎熱乾燥，西班牙幾乎涵蓋了所有葡萄酒風格。</p>
    `,
  },
  {
    type: 'compare',
    title: '西班牙葡萄酒：五個關鍵特色',
    items: [
      { icon: '🌿', label: '本土品種豐富', desc: 'Tempranillo、Garnacha、Albariño 等數百個本土品種', color: '#27ae60' },
      { icon: '🪵', label: '橡木桶陳年', desc: '美國橡木賦予香草椰子風味，是 Rioja 的標誌性特色', color: '#e67e22' },
      { icon: '🌊', label: '海洋白酒', desc: 'Rías Baixas 的 Albariño 是全球最精緻的白酒之一', color: '#3498db' },
      { icon: '🍾', label: 'Cava 氣泡酒', desc: '傳統法製作，加泰羅尼亞的 Cava 是 Champagne 的平價精選替代', color: '#9b59b6' },
      { icon: '🥃', label: 'Sherry 加強酒', desc: 'Jerez 的索雷拉系統，創造出 Fino 到 PX 的豐富風格譜系', color: '#c0392b' },
    ],
  },
  {
    type: 'quiz',
    question: '西班牙在全球葡萄酒版圖中，以下哪項排名全球第一？',
    options: ['葡萄酒產量', '葡萄種植面積', '葡萄酒消費量', '酒莊數量'],
    answer: 1,
    explanation: '西班牙葡萄種植面積約 96 萬公頃，居全球第一，但因低產種植，產量並非第一。',
  },
  {
    type: 'summary',
    message: '恭喜完成第一課！您已了解西班牙葡萄酒的全球地位與五大核心特色。',
    keyPoints: [
      '西班牙葡萄種植面積全球第一（約 96 萬公頃）',
      '超過 96 個 DO 法定產區，覆蓋多種氣候類型',
      '核心特色：Tempranillo 紅酒、Albariño 白酒、Cava 氣泡酒、Sherry 加強酒',
    ],
  },
]

const S1M1L2_slides = [
  {
    type: 'cover',
    icon: '🗺️',
    gradient: 'linear-gradient(135deg, #c0392b, #8e44ad)',
    title: '17 個自治區地理分布',
    subtitle: 'Level 1 · 西班牙地理概覽',
    points: [
      { icon: '🗺️', label: '17 個自治區', text: '各有獨特地理、氣候與葡萄酒特色' },
      { icon: '🍷', label: '96+ DO 產區', text: '跨越 15 個自治區（加那利 + 巴利亞利含括其中）' },
      { icon: '⛰️', label: '多樣地形', text: '山脈、高原、海岸、火山島，地形極度多樣' },
    ],
  },
  {
    type: 'map',
    title: '西班牙葡萄酒產區全覽',
    mapRegion: 'all',
    description: '衛星地圖呈現西班牙六大葡萄酒地理區，探索從加利西亞到安達盧西亞的多元風土。',
  },
  {
    type: 'content',
    icon: '🗺️',
    title: '西班牙六大葡萄酒地理區',
    html: `
      <p>西班牙通常按地理位置分為六大葡萄酒區域：</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px;">
        <div style="background:#fce8e6;border-radius:10px;padding:12px">
          <strong>🌊 西北部（綠色西班牙）</strong><br/>
          加利西亞、阿斯圖里亞斯、坎塔布里亞<br/>
          <em style="color:#666;font-size:0.85rem">大西洋氣候・清爽白酒・Albariño</em>
        </div>
        <div style="background:#e8f5e9;border-radius:10px;padding:12px">
          <strong>🍷 北部（主力紅酒帶）</strong><br/>
          拉里奧哈、納瓦拉、巴斯克、阿拉貢<br/>
          <em style="color:#666;font-size:0.85rem">Tempranillo · Garnacha · Rioja</em>
        </div>
        <div style="background:#e8eaf6;border-radius:10px;padding:12px">
          <strong>🏔️ 中部高原（梅塞塔）</strong><br/>
          卡斯提亞-萊昂、卡斯提亞-拉曼恰、馬德里<br/>
          <em style="color:#666;font-size:0.85rem">大陸型氣候・Ribera del Duero</em>
        </div>
        <div style="background:#fff3e0;border-radius:10px;padding:12px">
          <strong>🌹 東部（地中海沿岸）</strong><br/>
          加泰羅尼亞、巴倫西亞、穆爾西亞<br/>
          <em style="color:#666;font-size:0.85rem">Priorat · Cava · Monastrell</em>
        </div>
        <div style="background:#fce4ec;border-radius:10px;padding:12px">
          <strong>☀️ 南部（安達盧西亞）</strong><br/>
          安達盧西亞、埃斯特雷馬杜拉<br/>
          <em style="color:#666;font-size:0.85rem">Jerez Sherry · 炎熱乾燥</em>
        </div>
        <div style="background:#e0f7fa;border-radius:10px;padding:12px">
          <strong>🌋 外島（群島）</strong><br/>
          加那利群島、巴利亞利群島<br/>
          <em style="color:#666;font-size:0.85rem">火山土壤・古藤・獨特微氣候</em>
        </div>
      </div>
    `,
  },
  {
    type: 'spain-regions-overview',
    title: '🌍 西班牙 17 個自治區互動探索',
    description: '點選任一自治區查看詳細資訊：DO/DOCa 數量、主要品種、氣候、代表酒莊。可依「西北綠色」「北部紅酒帶」「中部高原」「東部地中海」「南部」「外島」6 大區域篩選。'
  },
  {
    type: 'quiz',
    question: '以下哪個自治區以大西洋氣候為主，是 Albariño 白酒的故鄉？',
    options: ['安達盧西亞（Andalucía）', '加利西亞（Galicia）', '拉里奧哈（La Rioja）', '巴倫西亞（Valencia）'],
    answer: 1,
    explanation: '加利西亞位於西班牙西北角，受大西洋影響，氣候涼爽多雨，是 Albariño 葡萄的故鄉。',
  },
  {
    type: 'quiz',
    question: '在「spain-regions-overview」互動探索中，西班牙葡萄園面積最大、橫跨中部高原的自治區是？',
    options: ['加利西亞（Galicia）', '拉里奥哈（La Rioja）', '卡斯提亞-拉曼恰（Castilla-La Mancha）', '巴斯克（País Vasco）'],
    answer: 2,
    explanation: 'Castilla-La Mancha（卡斯提亞-拉曼恰）位於中部高原，是西班牙面積最大的單一葡萄酒自治區，葡萄園面積佔全國近一半，亦是全球單一最大產區。',
  },

  {
    type: 'summary',
    message: '您已掌握西班牙的地理分區！',
    keyPoints: [
      'Spain 分為 17 個自治區，葡萄酒產區跨越其中 15 個',
      '六大葡萄酒地理區：西北（大西洋）、北部、中部高原、東部（地中海）、南部、外島',
      '地形多樣：海拔、水系、土壤各具特色，造就不同風土',
    ],
  },
]

const S1M2L1_slides = [
  {
    type: 'cover',
    icon: '📜',
    gradient: 'linear-gradient(135deg, #8e44ad, #9b59b6)',
    title: 'DO / DOCa / VP / VC — 分級架構',
    subtitle: 'Level 1 · 分級制度',
    points: [
      { icon: '📜', label: 'DO', text: '西班牙最普遍的法定產區認證' },
      { icon: '🏅', label: 'DOCa', text: '最高等級，目前只有 Rioja 與 Priorat' },
      { icon: '🏡', label: 'VP (Vino de Pago)', text: '單一酒莊等級，西班牙最精緻的頂級酒' },
    ],
  },
  {
    type: 'compare',
    title: '西班牙葡萄酒分級制度',
    items: [
      { icon: '🏅', label: 'DOCa', desc: '西班牙最高等級。目前只有 Rioja（1991）和 Priorat（2009）', color: '#c0392b' },
      { icon: '📜', label: 'DO', desc: '法定產區，西班牙最普遍的品質認證，有明確的地理範圍和規定', color: '#e67e22' },
      { icon: '🏡', label: 'VP (Vino de Pago)', desc: '頂級單一酒莊認證，必須有獨特的風土和長期卓越的品質記錄', color: '#8e44ad' },
      { icon: '✅', label: 'VC (Vino de Calidad)', desc: '優質葡萄酒認證，是部分產區升級為 DO 前的過渡等級', color: '#27ae60' },
      { icon: '🗺️', label: 'IGP (Vino de la Tierra)', desc: '地區餐酒，類似法國 IGP，地理指示但規定比 DO 寬鬆', color: '#3498db' },
      { icon: '🍷', label: 'Vino de Mesa', desc: '普通餐酒，無地理或品種限制，最基本的級別', color: '#95a5a6' },
    ],
  },
  {
    type: 'spain-classification',
    title: '🏛️ 西班牙分級金字塔互動詳解',
    description: '點選金字塔任一階查看詳細規範：DOCa 僅有 Rioja 與 Priorat、DO 有 96+ 個、VP 是單一酒莊頂級認證、VC/IGP/Vino de Mesa 等級順序。含每級代表產區、限制條件與價格範圍。'
  },
  {
    type: 'quiz',
    question: '目前西班牙擁有 DOCa（最高等級）認證的產區只有兩個，它們是？',
    options: ['Ribera del Duero 和 Rías Baixas', 'Rioja 和 Priorat', 'Penedès 和 Navarra', 'Sherry 和 Cava'],
    answer: 1,
    explanation: 'Rioja 於 1991 年率先取得 DOCa 認證，Priorat（加泰羅尼亞稱 DOQ）則於 2009 年取得，至今仍是西班牙僅有的兩個 DOCa 產區。',
  },
  {
    type: 'quiz',
    question: '在「spain-classification」金字塔中，VP（Vino de Pago）代表的是？',
    options: ['街區葡萄酒', '單一酒莊頂級酒（Single Estate）', '桌酒等級', '長期陳年酒款'],
    answer: 1,
    explanation: 'Vino de Pago（VP）是針對「單一酒莊頂級葡萄園」的認證，重視圓區裡的特定地塊品質，代表酒莊如 Dominio de Valdepusa、Pago de Arínzano。與 DO/DOCa「整體產區」認證不同，VP 是「點狀頂級」認證。',
  },
  {
    type: 'summary',
    message: '西班牙分級制度學習完成！',
    keyPoints: [
      'DOCa 是西班牙最高等級，僅有 Rioja 和 Priorat 兩個產區',
      'DO 是最普遍的法定產區認證，超過 96 個',
      'Vino de Pago（VP）是頂級單一酒莊認證',
      '由高到低：DOCa → DO → VC → IGP → Vino de Mesa',
    ],
  },
]

const S1M2L2_slides = [
  {
    type: 'cover',
    icon: '🪵',
    gradient: 'linear-gradient(135deg, #d35400, #e67e22)',
    title: '陳年制度：Joven · Crianza · Reserva · Gran Reserva',
    subtitle: 'Level 1 · 陳年規定',
    points: [
      { icon: '🪵', label: 'Crianza 以上', text: '橡木桶 + 瓶中陳年，嚴格規範最短時間' },
      { icon: '🔴', label: '紅酒規定最嚴格', text: 'Gran Reserva 紅酒需陳年至少 5 年' },
      { icon: '🥂', label: '白酒 / 粉紅酒不同', text: '規定時間比紅酒短' },
    ],
  },
  {
    type: 'compare',
    title: '西班牙陳年等級（以 Rioja 紅酒為例）',
    items: [
      { icon: '🍇', label: 'Joven（新酒）', desc: '當年或次年上市，無橡木桶或極短桶陳，強調果味鮮活', color: '#27ae60' },
      { icon: '🪵', label: 'Crianza', desc: '紅酒：最少 2 年（含 6 個月橡木桶）；白/粉：1 年', color: '#e67e22' },
      { icon: '⭐', label: 'Reserva', desc: '紅酒：最少 3 年（含 1 年橡木桶）；白/粉：2 年', color: '#c0392b' },
      { icon: '👑', label: 'Gran Reserva', desc: '紅酒：最少 5 年（含 18 個月橡木桶）；白/粉：4 年', color: '#8e44ad' },
    ],
  },
  {
    type: 'content',
    icon: '🪵',
    title: '陳年制度的實際意義',
    html: `
      <p>西班牙的陳年制度不僅規範時間，更反映了釀酒師的哲學——<strong>橡木桶的使用是否與果味達到平衡</strong>。</p>
      <h4>美國橡木 vs 法國橡木</h4>
      <ul>
        <li><strong>美國橡木（American Oak）</strong>：傳統 Rioja 使用。帶來香草、椰子、奶油糖果風味，更明顯的氧化特性</li>
        <li><strong>法國橡木（French Oak）</strong>：現代派 Rioja 偏好。更精緻，雪松、煙燻、烘烤風味，更緊緻的結構</li>
      </ul>
      <h4>如何在酒標上辨認？</h4>
      <p>直接尋找「Crianza」「Reserva」「Gran Reserva」字樣。若無標示，通常是 Joven 等級。</p>
    `,
  },
  {
    type: 'rioja-aging',
    title: '🪵 Rioja 陳年制度互動詳解',
    description: '點選 Joven / Crianza / Reserva / Gran Reserva 查看完整陳年規範（紅/白/粉紅葡萄酒桶月數 + 瓶中月數）、典型風味變化、建議酒款及「美國橡木 vs 法國橡木」的關鍵差異。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Joven（新酒）',
    image: '/spain/images/labels/rioja/puelles-joven.jpg',
    caption: 'Puelles Rioja Joven——酒標直接標示「Joven」，無陳年時間規定，強調新鮮果味，是最年輕、最平易近人的等級。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Gran Reserva（最高等級）',
    image: '/spain/images/labels/rioja/rioja-bordon-gran-reserva-1999.jpg',
    caption: 'Rioja Bordón Gran Reserva 1999（Bodegas Franco-Españolas，1890 年創立）——紅酒需陳年至少 5 年（含 18 個月橡木桶），是陳年最久、最傳統的等級。',
  },
  {
    type: 'quiz',
    question: 'Rioja 的 Gran Reserva 紅酒，最短需要多少年的總陳年時間（橡木桶 + 瓶中）？',
    options: ['2 年', '3 年', '5 年', '7 年'],
    answer: 2,
    explanation: 'Gran Reserva 紅酒至少需要 5 年總陳年時間，其中在橡木桶中至少 18 個月，其餘在瓶中熟成。',
  },
  {
    type: 'quiz',
    question: '在「rioja-aging」互動詳解中，Rioja「Crianza」紅酒最短需要在橡木桶中陳年多久？',
    options: ['6 個月', '12 個月', '18 個月', '24 個月'],
    answer: 1,
    explanation: 'Crianza 紅酒規定：總陳年 ≥2 年，其中橡木桶（225L）陳年 ≥12 個月。與 Reserva（12 月桶陳、總 3 年）、Gran Reserva（18 月桶陳、總 5 年）完整區隔。這是你在超市選酒時最實用的「多長時間關鍵」。',
  },
  {
    type: 'summary',
    message: '陳年制度學習完成！',
    keyPoints: [
      'Joven：新鮮果味，無（或極少）橡木桶陳年',
      'Crianza：最少 2 年（紅酒），含 6 個月橡木桶',
      'Reserva：最少 3 年（紅酒），含 12 個月橡木桶',
      'Gran Reserva：最少 5 年（紅酒），含 18 個月橡木桶',
      '美國橡木 = 香草椰子風；法國橡木 = 雪松烟燻風',
    ],
  },
]

const S1M3L1_slides = [
  {
    type: 'cover',
    icon: '🍇',
    gradient: 'linear-gradient(135deg, #c0392b, #e74c3c)',
    title: '五大紅葡萄品種',
    subtitle: 'Level 1 · 核心品種認識',
    points: [
      { icon: '🔴', label: 'Tempranillo', text: '西班牙的靈魂品種，Rioja 和 Ribera del Duero 的主角' },
      { icon: '🍑', label: 'Garnacha', text: '全球種植最多的品種之一，老藤濃郁' },
      { icon: '🌑', label: 'Monastrell', text: '南部炎熱氣候的代表，高酒精濃郁' },
    ],
  },
  {
    type: 'compare',
    title: '西班牙五大紅葡萄品種',
    items: [
      { icon: '🍒', label: 'Tempranillo', desc: 'Rioja・Ribera del Duero。西班牙最重要的紅品種。草莓、皮革、香草風味', color: '#c0392b' },
      { icon: '🍑', label: 'Garnacha', desc: '阿拉貢・Priorat。老藤表現優異。紅色水果、香料、酒精偏高', color: '#e74c3c' },
      { icon: '🫐', label: 'Monastrell', desc: 'Jumilla・Yecla。耐熱耐旱。藍莓、黑莓、濃郁厚重', color: '#8e44ad' },
      { icon: '🌿', label: 'Mencía', desc: 'Bierzo・Ribeira Sacra。板岩土壤。優雅花香、鉛筆芯、輕盈結構', color: '#27ae60' },
      { icon: '🍇', label: 'Bobal', desc: 'Utiel-Requena。高原本地品種。深色水果、高酸，老藤品質卓越', color: '#7d3c98' },
    ],
  },
  {
    type: 'spain-grape-profile',
    title: '🍇 西班牙五大紅葡萄品種互動檔案',
    description: '點選 Tempranillo / Garnacha / Monastrell / Mencía / Bobal 查看詳細品種檔案：同義名稱、主要產區、品飲特徵、釀造風格、餐酒搭配、代表酒款與價格區間。'
  },
  {
    type: 'quiz',
    question: 'Tempranillo 在 Ribera del Duero 被稱為什麼名字？',
    options: ['Garnacha', 'Tinto Fino（或 Tinta del País）', 'Cencibel', 'Ojo de Liebre'],
    answer: 1,
    explanation: 'Tempranillo 在西班牙各產區有不同名稱：在 Ribera del Duero 稱 "Tinto Fino" 或 "Tinta del País"，在 Castilla-La Mancha 稱 "Cencibel"，在 Catalonia 稱 "Ull de Llebre"。',
  },
  {
    type: 'quiz',
    question: '在「spain-grape-profile」品種檔案中，Mencía 主要種植在哪個產區並成為該區類似 Pinot Noir 風格的代表品種？',
    options: ['Ribera del Duero', 'Bierzo 與 Ribeira Sacra', 'Jumilla', 'Penedès'],
    answer: 1,
    explanation: 'Mencía 主要種植於 Bierzo（萊昂省）和 Ribeira Sacra（加利西亞），這些產區以板岩（Schist）梯田為典型風土，賦予 Mencía 獨特的礦石與鉛筆芯風味，以及優雅輕盈的結構，被譽為「西班牙的 Pinot Noir」。',
  },
  {
    type: 'summary',
    message: '五大紅品種記熟了嗎？',
    keyPoints: [
      'Tempranillo：西班牙靈魂品種，Rioja 的主角',
      'Garnacha：全球種植最多的紅品種之一，老藤濃郁',
      'Monastrell：南部炎熱氣候代表，法文名 Mourvèdre',
      'Mencía：加利西亞與萊昂的優雅品種，板岩風土',
      'Bobal：Utiel-Requena 高原本地老藤品種',
    ],
  },
]

const S1M4L1_slides = [
  {
    type: 'cover',
    icon: '🍷',
    gradient: 'linear-gradient(135deg, #c0392b, #922b21)',
    title: "DOCa Rioja — 西班牙最著名優質產區",
    subtitle: "Level 1 · DOCa 最高等級 · Spain's most famous fine wine region",
    points: [
      { icon: '🏅', label: '西班牙最古老 DOCa', text: '1925 年成立 DO，1991 年晉升 DOCa——西班牙第一個最高等級產區' },
      { icon: '📍', label: '三個子產區', text: 'Rioja Alta · Rioja Alavesa · Rioja Oriental，橫跨 66,000+ 公頃，144 個市鎮' },
      { icon: '🍇', label: '14 個法定品種', text: '5 紅 + 9 白，Tempranillo 為品種之王，覆蓋超過 75% 種植面積' },
    ],
  },
  {
    type: 'map',
    title: 'DOCa Rioja 產區地理位置',
    mapRegion: 'rioja',
    description: 'Rioja DOCa 橫跨拉里奧哈自治區與巴斯克地區（Álava 省），沿埃布羅河谷延伸約 100 公里。三個子產區各有獨特風土，共超過 66,000 公頃葡萄園，為西班牙核心優質紅酒發源地。',
  },
  {
    type: 'content',
    icon: '📜',
    title: 'Rioja 百年歷史里程碑',
    html: `
      <p>Rioja 是西班牙最古老的 DO 產區，從羅馬時代便已種植葡萄，擁有超過 2000 年葡萄栽培史。</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">
        <div style="background:#fce8e6;border-left:4px solid #c0392b;padding:10px;border-radius:0 10px 10px 0">
          <strong>1560</strong> — 酒莊業者首次協議在酒款上標示共同來源標籤，Rioja 品牌概念初現
        </div>
        <div style="background:#fce8e6;border-left:4px solid #c0392b;padding:10px;border-radius:0 10px 10px 0">
          <strong>1787</strong> — 成立「Real Junta de Cosecheros（皇家採收者委員會）」，推廣葡萄栽培與北部市場商業化
        </div>
        <div style="background:#fdf6e3;border-left:4px solid #e67e22;padding:10px;border-radius:0 10px 10px 0">
          <strong>1924</strong> — 一批業者申請「原產地保證封條（Precinto de Garantía）」，以區別 Rioja 酒款
        </div>
        <div style="background:#fdf6e3;border-left:4px solid #e67e22;padding:10px;border-radius:0 10px 10px 0">
          <strong>1925</strong> — 正式成立 DO Rioja，劃定產區邊界並頒布第一部法規。1926 年 Consejo Regulador 運作
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #27ae60;padding:10px;border-radius:0 10px 10px 0">
          <strong>1974</strong> — 率先推出「Crianza 陳年保證標章」，成為全球第一個官方認證陳年酒款的產區
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #27ae60;padding:10px;border-radius:0 10px 10px 0">
          <strong>1991</strong> — 晉升為西班牙第一個 DOCa（Denominación de Origen Calificada），實施原產地裝瓶制度
        </div>
        <div style="background:#e3f2fd;border-left:4px solid #1565c0;padding:10px;border-radius:0 10px 10px 0">
          <strong>2017</strong> — 引入 Viñedo Singular（單一葡萄園）、Vino de Municipio（村莊酒）、Vino de Zona（子區酒）三級地理分類
        </div>
        <div style="background:#ede7f6;border-left:4px solid #7b1fa2;padding:10px;border-radius:0 10px 10px 0">
          <strong>2025</strong> — 慶祝 DOCa Rioja 成立 100 週年（Centennial Celebration），舉辦全球矚目酒展
        </div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '🌊',
    title: 'Rioja 的地理框架：河流、山脈與風土',
    html: `
      <p>「Rioja」命名源自小支流 <strong>Río Oja</strong>，但全區最重要的河流是 <strong>埃布羅河（Ebro River）</strong>。埃布羅河及其支流在數個世紀的沖刷下，雕琢出三種截然不同的土壤——石灰質黏土、含鐵黏土與沖積土。</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px">
        <div style="background:#fce8e6;border-left:4px solid #c0392b;padding:12px;border-radius:0 10px 10px 0">
          <strong>⛰️ Sierra Cantabria（北側）</strong><br/>
          攔截大西洋冷濕氣流，為 Rioja Alavesa 提供天然保護屏障。Foehn 效應造就溫暖南向葡萄園。
        </div>
        <div style="background:#fce8e6;border-left:4px solid #922b21;padding:12px;border-radius:0 10px 10px 0">
          <strong>⛰️ Sierra Demanda（南側）</strong><br/>
          與埃布羅河共同塑造 Rioja Alta 微氣候。海拔 400–700m，延長成熟期。
        </div>
        <div style="background:#e3f2fd;border-left:4px solid #1565c0;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌊 Ebro 河谷氣候過渡帶</strong><br/>
          西部偏大西洋（涼爽多雨），東部趨地中海（乾熱）。同一產區卻孕育截然不同風格。
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>📊 產區規模</strong><br/>
          逾 66,000 公頃葡萄園・144 個市鎮・近 600 家酒莊・橫跨 3 個行政自治區
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: 'Rioja 三個子產區深度比較',
    items: [
      {
        icon: '🌲',
        label: 'Rioja Alta（上里奧哈）西部',
        desc: '77 個市鎮・27,871 公頃。大西洋氣候為主，海拔 400–700m，年雨量 200–400L，夏溫 15–22°C。土壤：石灰質黏土（Tempranillo 最佳）＋含鐵黏土＋沖積土。風格：優雅高酸、精緻複雜、極佳陳年潛力。代表酒莊：La Rioja Alta SA、López de Heredia、Muga、CVNE',
        color: '#c0392b',
      },
      {
        icon: '🏔️',
        label: 'Rioja Alavesa（阿拉維沙）北部',
        desc: '18 個市鎮・13,178 公頃。巴斯克自治區（Álava 省）。95% 石灰質黏土，Sierra Cantabria 山脈屏障，Foehn 效應。大西洋氣候更濕涼，葡萄園多在梯田小地塊。風格：輕盈精緻、細膩香氣、礦石感鮮明。代表酒莊：Artadi、Bodegas Ysios、Marqués de Riscal',
        color: '#8e44ad',
      },
      {
        icon: '☀️',
        label: 'Rioja Oriental（東里奧哈）東部',
        desc: '49 個市鎮・14,571+ 公頃。原名 Rioja Baja，2018 年更名。地中海氣候，最炎熱乾燥，年雨量 200–400L，夏溫可達 25°C。含鐵黏土與沖積土。Garnacha 在此最精彩。風格：酒體飽滿、高酒精、深色果味、結構強勁。代表品種：Garnacha Tinta、Viura',
        color: '#e67e22',
      },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Rioja Alta 傳統派',
    image: '/spain/images/labels/rioja/lopez-de-heredia-tondonia-reserva-2004.jpg',
    caption: 'R. López de Heredia「Viña Tondonia」Reserva 2004（Haro，創立於 1877 年）——Rioja Alta 最具代表性的傳統酒莊，堅持大橡木桶長期陳年的古典風格。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Rioja Alavesa 現代派',
    image: '/spain/images/labels/rioja/ysios-reserva-2007.jpg',
    caption: 'Bodegas Ysios Reserva 2007（Rioja Alavesa，Santiago Calatrava 設計酒莊建築）——代表 Rioja Alavesa 現代化、國際化的一面，與 Rioja Alta 的傳統風格形成鮮明對比。',
  },
  {
    type: 'content',
    icon: '🍇',
    title: 'DOCa Rioja 14 個法定葡萄品種',
    html: `
      <p>Rioja 共認可 <strong>14 個品種</strong>（5 紅 + 9 白），由業者世代篩選出最適合當地風土的品種。</p>
      <h4 style="color:#c0392b;margin-top:12px">🔴 5 大紅葡萄品種</h4>
      <div style="display:flex;flex-direction:column;gap:6px;margin-top:6px">
        <div style="background:#fce8e6;border-radius:8px;padding:10px">
          <strong>01. Tempranillo</strong> — 西班牙靈魂品種，Rioja 最主要品種（佔 70%+）。草莓、皮革、香草、陳年後呈現雪茄盒複雜感
        </div>
        <div style="background:#fce8e6;border-radius:8px;padding:10px">
          <strong>02. Garnacha Tinta（Grenache）</strong> — Rioja Oriental 主力，果味奔放、酒精飽滿、適應炎熱乾旱，藍莓、薰衣草、甘草
        </div>
        <div style="background:#fce8e6;border-radius:8px;padding:10px">
          <strong>03. Graciano</strong> — 低產珍稀品種，深色花香（紫羅蘭、玫瑰）＋高酸度＋高單寧，與 Tempranillo 混釀提升複雜度與陳年力
        </div>
        <div style="background:#fce8e6;border-radius:8px;padding:10px">
          <strong>04. Mazuelo（Carignan / Cariñena）</strong> — 提供高酸度、深色素、豐富單寧，是 Reserva 和 Gran Reserva 的骨幹輔助品種
        </div>
        <div style="background:#fce8e6;border-radius:8px;padding:10px">
          <strong>05. Maturana Tinta</strong> — 2007 年正式納入，Rioja 最古老原生品種之一，全球無其他種植地點
        </div>
      </div>
      <h4 style="color:#2e7d32;margin-top:12px">⚪ 9 大白葡萄品種</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:6px">
        <div style="background:#e8f5e9;border-radius:8px;padding:8px;font-size:0.9rem">
          <strong>Viura（Macabeo）</strong><br/>主力白品種，1970 年代起大規模種植，清爽柑橘青蘋果風格
        </div>
        <div style="background:#e8f5e9;border-radius:8px;padding:8px;font-size:0.9rem">
          <strong>Garnacha Blanca</strong><br/>豐滿圓潤，熱帶果味，低酸
        </div>
        <div style="background:#e8f5e9;border-radius:8px;padding:8px;font-size:0.9rem">
          <strong>Malvasía</strong><br/>花香濃郁，鏈橘皮，傳統白 Rioja 陳年款常見
        </div>
        <div style="background:#e8f5e9;border-radius:8px;padding:8px;font-size:0.9rem">
          <strong>Tempranillo Blanco</strong><br/>2008 年引入，Tempranillo 的白色突變種，清爽花香
        </div>
        <div style="background:#e8f5e9;border-radius:8px;padding:8px;font-size:0.9rem">
          <strong>Maturana Blanca</strong><br/>古老原生白品種，2008 年重新納入
        </div>
        <div style="background:#e8f5e9;border-radius:8px;padding:8px;font-size:0.9rem">
          <strong>Turruntés</strong><br/>2009 年引入的本地白品種，花香特色
        </div>
        <div style="background:#dceefb;border-radius:8px;padding:8px;font-size:0.9rem">
          <strong>Chardonnay</strong><br/>國際品種，2008 年引入，奶油感，現代白 Rioja 常見
        </div>
        <div style="background:#dceefb;border-radius:8px;padding:8px;font-size:0.9rem">
          <strong>Sauvignon Blanc</strong><br/>國際品種，2008 年引入，清新草本柑橘
        </div>
        <div style="background:#dceefb;border-radius:8px;padding:8px;font-size:0.9rem">
          <strong>Verdejo</strong><br/>Rueda 明星品種，活潑草本，為 Rioja 白酒帶來清爽骨幹
        </div>
      </div>
    `,
  },
  {
    type: 'quiz',
    question: '關於 DOCa Rioja，下列哪項最為準確？',
    options: [
      '1925 年成立 DOCa，2008 年才引入 Crianza 等陳年標章制度',
      '命名來自支流 Río Oja；1925 年成立 DO，1991 年晉升 DOCa；共 14 個法定品種（5 紅 9 白）',
      'Rioja Alavesa 氣候最炎熱，為 Garnacha 的最主要子產區',
      '屬於 DO 等級，與 Priorat 同為 DOCa，並於 2005 年同步獲認',
    ],
    answer: 1,
    explanation: 'Rioja 命名來自支流 Río Oja；1925 年成立 DO，1991 年升格為西班牙第一個 DOCa。全產區共 14 個法定品種（5 紅：Tempranillo、Garnacha、Graciano、Mazuelo、Maturana Tinta；9 白：Viura、Garnacha Blanca、Malvasía 等）。Rioja Oriental 才是最炎熱乾燥的子產區。',
  },
  {
    type: 'summary',
    message: 'DOCa Rioja 地理入門學習完成！',
    keyPoints: [
      '1925 年成立 DO，1991 年升格 DOCa（西班牙最早）；2025 年慶祝百週年',
      '14 個法定品種：5 紅（Tempranillo、Garnacha、Graciano、Mazuelo、Maturana Tinta）+ 9 白（Viura、Chardonnay 等）',
      'Rioja Alta（77 市鎮・27,871ha）：大西洋風格，優雅高酸，石灰質黏土',
      'Rioja Alavesa（18 市鎮・13,178ha）：95% 石灰質黏土，Sierra Cantabria 屏障，輕盈精緻',
      'Rioja Oriental（49 市鎮・14,571+ha）：地中海風格，Garnacha 最精彩，酒體飽滿',
      '兩大山脈（Sierra Cantabria + Sierra Demanda）＋埃布羅河共同塑造多元地理風土',
    ],
  },
]

const S1M1L3_slides = [
  {
    type: 'cover',
    icon: '🌤️',
    gradient: 'linear-gradient(135deg, #2980b9, #27ae60)',
    title: '三大氣候帶：大西洋・地中海・內陸大陸',
    subtitle: 'Level 1 · 第三課',
    points: [
      { icon: '🌊', label: '大西洋氣候', text: '西北部涼爽多雨，適合清爽白酒' },
      { icon: '☀️', label: '地中海氣候', text: '東南部溫暖乾燥，果味豐滿濃郁' },
      { icon: '❄️', label: '大陸型氣候', text: '中部高原寒暑劇烈，複雜紅酒的搖籃' },
    ],
  },
  {
    type: 'compare',
    title: '西班牙三大氣候帶特徵',
    items: [
      {
        icon: '🌊',
        label: '大西洋氣候（Atlantic）',
        desc: '加利西亞・阿斯圖里亞斯・坎塔布里亞・巴斯克。受大西洋調節，涼爽多雨。代表產區：Rías Baixas（Albariño）',
        color: '#2980b9',
      },
      {
        icon: '❄️☀️',
        label: '大陸型氣候（Continental）',
        desc: '梅塞塔高原：卡斯提亞-萊昂、卡斯提亞-拉曼恰、拉里奧哈內陸。冬寒夏熱、日夜溫差大。代表產區：Rioja、Ribera del Duero',
        color: '#8e44ad',
      },
      {
        icon: '☀️',
        label: '地中海氣候（Mediterranean）',
        desc: '加泰羅尼亞、巴倫西亞、穆爾西亞、安達盧西亞沿岸。溫暖炎熱、乾燥少雨。代表產區：Priorat、Jumilla、Sherry',
        color: '#e67e22',
      },
      {
        icon: '🌋',
        label: '半乾旱／火山微氣候',
        desc: '加那利群島（Tenerife、Lanzarote）。火山土壤、恆夏溫和、強風。獨一無二的古藤風土，無需嫁接',
        color: '#c0392b',
      },
    ],
  },
  {
    type: 'content',
    icon: '🌡️',
    title: '氣候如何影響葡萄酒風格？',
    html: `
      <h4>🌊 大西洋氣候 → 清爽型白酒</h4>
      <p>海洋調節使夏天不過熱，葡萄慢慢成熟，<strong>保留天然高酸度與清爽果味</strong>。Rías Baixas 的 Albariño 因此有著桃子、杏仁、鹽漬礦石的鮮活特質。</p>
      <h4>❄️☀️ 大陸型氣候 → 結構型紅酒</h4>
      <p>高原日夜溫差可達 20°C 以上：<strong>白天高溫促進糖分成熟，夜間低溫鎖住酸度與香氣</strong>。Ribera del Duero 的 Tinto Fino 因此兼具深邃果味與鮮活酸度。</p>
      <h4>☀️ 地中海氣候 → 濃郁型紅酒</h4>
      <p>充足日照與乾燥條件讓葡萄高度成熟，酒精偏高、單寧豐厚。Jumilla 的 Monastrell 因此呈現藍莓、黑巧克力、甘草的富饒口感。</p>
      <h4>🌋 火山微氣候 → 獨特礦石風</h4>
      <p>加那利群島的葡萄藤多為百年以上古藤，生長在火山浮石上，從不嫁接。釀出的酒帶有獨特的<strong>火山礦石、煙燻、海鹽清新感</strong>。</p>
    `,
  },
  {
    type: 'quiz',
    question: '拉里奧哈（La Rioja）主要屬於哪種氣候類型？',
    options: ['大西洋氣候', '大陸型氣候（有部分大西洋影響）', '純地中海氣候', '半乾旱火山氣候'],
    answer: 1,
    explanation: 'Rioja 位於埃布羅河谷，主要受大陸型氣候影響（冬冷夏熱），但埃布羅河谷特殊地形讓部分地區也受大西洋氣候調節，形成獨特的過渡帶微氣候。',
  },
  {
    type: 'summary',
    message: '三大氣候帶認識完成！',
    keyPoints: [
      '大西洋氣候（加利西亞、巴斯克）：涼爽多雨 → 清爽高酸白酒',
      '大陸型氣候（Rioja、Ribera del Duero）：冬寒夏熱、日夜溫差大 → 結構豐富紅酒',
      '地中海氣候（Priorat、Jumilla、Sherry）：溫暖乾燥 → 濃郁紅酒',
      '加那利群島火山微氣候：古藤、礦石鹽感，獨一無二',
    ],
  },
]

const S1M1L4_slides = [
  {
    type: 'cover',
    icon: '🪨',
    gradient: 'linear-gradient(135deg, #795548, #a1887f)',
    title: '土壤類型：石灰岩・板岩・砂土・紅土',
    subtitle: 'Level 1 · 第四課',
    points: [
      { icon: '🪨', label: '石灰岩', text: 'Rioja、Ribera del Duero 的主力，保水排水均衡' },
      { icon: '⬛', label: '板岩（Llicorella）', text: 'Priorat 的靈魂土壤，高溫蓄熱，低產濃縮' },
      { icon: '🏜️', label: '砂土', text: '根瘤蚜不易侵入，保存古藤的天然屏障' },
    ],
  },
  {
    type: 'compare',
    title: '西班牙主要土壤類型與產區',
    items: [
      {
        icon: '🪨',
        label: '石灰岩 / 白堊土（Limestone / Chalk）',
        desc: 'Rioja Alta、Rioja Alavesa、Ribera del Duero。保水力佳，排水良好，給葡萄適度的水分壓力，釀出結構優雅的酒',
        color: '#f0e6b2',
      },
      {
        icon: '⬛',
        label: '板岩（Llicorella / Schist）',
        desc: 'Priorat DOCa。由黑色片岩與石英組成，日間蓄熱，夜間放熱，排水極佳。造就低產、濃縮、礦石感強的紅酒',
        color: '#555',
      },
      {
        icon: '🏖️',
        label: '砂土（Sandy Soil）',
        desc: '「綠色西班牙」部分地區及沿海地帶。根瘤蚜（Phylloxera）無法在砂土存活，讓老藤葡萄樹得以自根生長',
        color: '#f4a460',
      },
      {
        icon: '🟤',
        label: '紅土 / 黏土（Red Clay / Arcillas）',
        desc: 'Rioja Oriental、La Mancha、Jumilla。富含鐵，保水性強，適合耐熱品種如 Garnacha 和 Monastrell',
        color: '#c0392b',
      },
      {
        icon: '🌋',
        label: '火山土（Volcanic / Picon）',
        desc: '加那利群島（Lanzarote 的 Picon 火山砂礫）。極度貧瘠，葡萄樹低矮匍匐生長於火山坑洞中，避風保濕',
        color: '#7d3c98',
      },
    ],
  },
  {
    type: 'content',
    icon: '🔬',
    title: '土壤如何影響葡萄酒風味？',
    html: `
      <p>土壤主要透過三個機制影響葡萄酒：<strong>排水性、養分供給、熱能管理</strong>。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#fefae0;border-left:4px solid #f1c40f;border-radius:0 10px 10px 0;padding:12px">
          <strong>💧 排水性：決定葡萄樹的壓力</strong><br/>
          排水良好的土壤（板岩、礫石）→ 葡萄樹必須深扎根、減少產量 → 果實更濃縮。<br/>
          保水力強（黏土）→ 葡萄更成熟飽滿，適合豐厚風格。
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #27ae60;border-radius:0 10px 10px 0;padding:12px">
          <strong>🌡️ 熱能管理：白天吸熱、夜間散熱</strong><br/>
          深色石頭（板岩）白天吸收熱能，夜間緩慢釋放 → 延長葡萄在低溫中熟成的時間，有助芳香物質保留。
        </div>
        <div style="background:#fce8e6;border-left:4px solid #e74c3c;border-radius:0 10px 10px 0;padding:12px">
          <strong>🧪 礦物質：土壤 vs 葡萄酒的「礦石感」</strong><br/>
          雖然直接從土壤礦物質轉化到酒中的機制仍有爭議，但特定土壤確實造就「礦石感」風味（鹽味、燧石、粉筆）。如 Albariño 的海鹽礦石感、Priorat 的板岩鉛筆芯味。
        </div>
      </div>
    `,
  },
  {
    type: 'quiz',
    question: '為什麼 Priorat 的板岩土壤（Llicorella）能釀出如此濃縮的葡萄酒？',
    options: [
      '板岩富含大量礦物質，直接提供葡萄養分',
      '板岩排水極佳，讓葡萄樹承受水分壓力，低產出濃縮果實',
      '板岩保水性強，葡萄可持續生長',
      '板岩是鹼性土壤，直接提升酒的酸度',
    ],
    answer: 1,
    explanation: 'Priorat 的板岩（Llicorella）排水性極佳，讓葡萄樹不得不深根尋水。在水分壓力下，樹體自然降低產量，將能量集中在有限的果串上，形成高度濃縮的果實風味。',
  },
  {
    type: 'summary',
    message: '土壤類型學習完成！',
    keyPoints: [
      '石灰岩：Rioja、Ribera del Duero，保水排水均衡 → 優雅結構',
      '板岩（Llicorella）：Priorat，蓄熱排水好 → 濃縮礦石感',
      '砂土：根瘤蚜無法存活，是古藤自根生長的天然保護',
      '紅土/黏土：Rioja Oriental、Jumilla，保水力強 → 豐滿酒體',
      '火山土（Picon）：加那利群島，古藤低產、礦石火山風味',
    ],
  },
]

const S1M2L3_slides = [
  {
    type: 'cover',
    icon: '🏷️',
    gradient: 'linear-gradient(135deg, #16a085, #27ae60)',
    title: '酒標解讀：如何看懂一瓶西班牙酒',
    subtitle: 'Level 1 · 第七課',
    points: [
      { icon: '📍', label: '產區名稱', text: 'DO / DOCa 名稱是辨認產地的關鍵' },
      { icon: '🪵', label: '陳年等級', text: 'Crianza / Reserva / Gran Reserva 一眼辨識品質' },
      { icon: '🍇', label: '品種資訊', text: '部分西班牙酒標記主要葡萄品種' },
    ],
  },
  {
    type: 'content',
    icon: '📋',
    title: '西班牙酒標的必看元素',
    html: `
      <p>掌握這六個關鍵資訊，就能讀懂大多數西班牙葡萄酒標：</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#eaf4fb;border-left:4px solid #2980b9;padding:12px;border-radius:0 10px 10px 0">
          <strong>① 生產者/酒莊名稱（Bodega / Producer）</strong><br/>
          <em>例：Bodegas Muga、Álvaro Palacios</em><br/>
          通常是最顯眼的大字，有助於辨認品牌信譽。
        </div>
        <div style="background:#fdf2e9;border-left:4px solid #e67e22;padding:12px;border-radius:0 10px 10px 0">
          <strong>② 年份（Vintage / Cosecha）</strong><br/>
          <em>例：Cosecha 2019</em><br/>
          西班牙語中「Cosecha」意為「收成」，即葡萄採收年份。Joven 通常標示年份，Gran Reserva 上市時常已過 5-6 年。
        </div>
        <div style="background:#e9f7ef;border-left:4px solid #27ae60;padding:12px;border-radius:0 10px 10px 0">
          <strong>③ 產區（Denominación de Origen）</strong><br/>
          <em>例：Denominación de Origen Calificada Rioja</em><br/>
          通常有官方認證封條貼在瓶口，是品質的重要保證。
        </div>
        <div style="background:#fce8e6;border-left:4px solid #c0392b;padding:12px;border-radius:0 10px 10px 0">
          <strong>④ 陳年等級（Crianza / Reserva / Gran Reserva）</strong><br/>
          若無標示，通常是 Joven 等級。<strong>Gran Reserva</strong> 代表最長時間陳年，是品質與價值的指標。
        </div>
        <div style="background:#f5eef8;border-left:4px solid #8e44ad;padding:12px;border-radius:0 10px 10px 0">
          <strong>⑤ 酒精度（Alcohol Content）</strong><br/>
          <em>例：14% vol</em><br/>
          南部產區（Sherry 地區、Jumilla）酒精度常達 14-18%；北部涼爽產區（Rías Baixas）常為 11.5-13%。
        </div>
        <div style="background:#fdfefe;border-left:4px solid #95a5a6;padding:12px;border-radius:0 10px 10px 0">
          <strong>⑥ 裝瓶地點（Embotellado por）</strong><br/>
          「Embotellado en la propiedad」= 酒莊裝瓶（Property Bottled），品質較有保障。
        </div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '🔍',
    title: '特殊標示與容易混淆的詞彙',
    html: `
      <h4>常見西班牙文酒標詞彙</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
        <div style="background:#f8f9fa;padding:10px;border-radius:8px"><strong>Tinto</strong> = 紅葡萄酒</div>
        <div style="background:#f8f9fa;padding:10px;border-radius:8px"><strong>Blanco</strong> = 白葡萄酒</div>
        <div style="background:#f8f9fa;padding:10px;border-radius:8px"><strong>Rosado</strong> = 粉紅葡萄酒</div>
        <div style="background:#f8f9fa;padding:10px;border-radius:8px"><strong>Espumoso</strong> = 氣泡酒</div>
        <div style="background:#f8f9fa;padding:10px;border-radius:8px"><strong>Seco</strong> = 干型（不甜）</div>
        <div style="background:#f8f9fa;padding:10px;border-radius:8px"><strong>Dulce</strong> = 甜型</div>
        <div style="background:#f8f9fa;padding:10px;border-radius:8px"><strong>Viejo</strong> = 老酒（8+ 年陳年）</div>
        <div style="background:#f8f9fa;padding:10px;border-radius:8px"><strong>Vendimia</strong> = 葡萄採收</div>
      </div>
      <h4 style="margin-top:16px">⚠️ 容易混淆的標示</h4>
      <ul>
        <li><strong>「Rioja」＋「Gran Reserva」</strong>：並非所有 Gran Reserva 都是好酒，看生產者同樣重要</li>
        <li><strong>「Cava」</strong>：這是氣泡酒的分級名稱，不是產區名（主要在 Penedès 生產）</li>
        <li><strong>「Vino de la Tierra」</strong>：類似法國 IGP，地理指示餐酒，有時品質超過 DO 等級</li>
      </ul>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：完整標示範例',
    image: '/spain/images/labels/ribera-del-duero/pagos-de-valcerracin-crianza-2015.jpg',
    caption: 'Pagos de Valcerracín「Crianza」2015，Ribera del Duero D.O.——一次看齊本文六大關鍵資訊：酒莊名稱、年份、產區（Ribera del Duero Denominación de Origen）、陳年等級（Crianza）與「Producto de España」產地標示。',
  },
  {
    type: 'image',
    title: '🏅 酒標實例：DOCa 最高等級 + 官方認證封條',
    image: '/spain/images/labels/rioja/burgo-viejo-crianza-2009.jpg',
    caption: 'Burgo Viejo「Crianza」2009，Rioja Denominación de Origen Calificada（DOCa）——西班牙僅 Rioja 與 Priorat 兩產區獲此最高等級認證。酒標下方可見 Consejo Regulador（產區管制委員會）官方背標編號「R.E. 7242-LO」，是辨識正牌 DOCa 酒款的關鍵防偽標示。',
  },
  {
    type: 'quiz',
    question: '看到一瓶西班牙紅酒標上寫著「Cosecha 2018」，這代表什麼？',
    options: [
      '這是 2018 年裝瓶的酒',
      '這是 2018 年葡萄採收年份',
      '這是陳年了 2018 個月的酒',
      '這是第 2018 號限量版',
    ],
    answer: 1,
    explanation: '「Cosecha」在西班牙語中意為「收成、採收」，因此「Cosecha 2018」即代表 2018 年的葡萄採收年份（Vintage）。',
  },
  {
    type: 'summary',
    message: '酒標解讀學習完成！',
    keyPoints: [
      '六大關鍵：生產者、年份（Cosecha）、產區（DO/DOCa）、陳年等級、酒精度、裝瓶地',
      'Tinto/Blanco/Rosado = 紅/白/粉紅酒；Seco = 干型；Dulce = 甜型',
      '「Embotellado en la propiedad」= 酒莊裝瓶，品質保障較高',
      '注意：Cava 是氣泡酒分級，非地名；Gran Reserva 需搭配好生產者才有意義',
    ],
  },
]

const S1M3L2_slides = [
  {
    type: 'cover',
    icon: '🥂',
    gradient: 'linear-gradient(135deg, #f1c40f, #e67e22)',
    title: '五大白葡萄品種',
    subtitle: 'Level 1 · 第九課',
    points: [
      { icon: '🌊', label: 'Albariño', text: '加利西亞的大西洋明珠，全球最精緻白酒之一' },
      { icon: '🍋', label: 'Verdejo', text: 'Rueda 的靈魂，草本清爽，國際知名度高' },
      { icon: '🍾', label: 'Xarel·lo + Macabeo', text: 'Cava 的主力品種，傳統起泡酒支柱' },
    ],
  },
  {
    type: 'compare',
    title: '西班牙五大白葡萄品種',
    items: [
      {
        icon: '🌊',
        label: 'Albariño',
        desc: 'Rías Baixas（加利西亞）。大西洋涼爽氣候。桃子、杏仁、柑橘、蜂蜜花香、鹽漬礦石。高酸、中等酒體，葡萄牙稱 Alvarinho',
        color: '#27ae60',
      },
      {
        icon: '🌿',
        label: 'Verdejo',
        desc: 'Rueda（卡斯提亞-萊昂）。海拔高、大陸型氣候。清新草本、白桃、接骨木花、苦杏仁尾韻。輕盈爽脆',
        color: '#f1c40f',
      },
      {
        icon: '🍾',
        label: 'Macabeo（Viura）',
        desc: '廣泛種植，是 Cava 和 Rioja 白酒的主要品種。中性清爽，適合起泡酒基酒。在 Rioja 稱 Viura',
        color: '#e8e8e8',
      },
      {
        icon: '🍋',
        label: 'Xarel·lo',
        desc: '加泰羅尼亞原生品種，Cava 關鍵品種之一。提供結構與酸度，帶有蘋果、梨子、輕微草本風味',
        color: '#a9cce3',
      },
      {
        icon: '🥃',
        label: 'Palomino',
        desc: '安達盧西亞 Jerez 地區。本身風味中性，是 Sherry（Fino、Manzanilla、Amontillado 等）的唯一基酒品種',
        color: '#f0b27a',
      },
    ],
  },
  {
    type: 'spain-grape-profile',
    title: '🥂 西班牙五大白葡萄品種互動檔案',
    description: '點選 Albariño / Verdejo / Macabeo / Xarel·lo / Palomino 查看詳細品種檔案：主要產區、品種特性、酸度礦物指標、典型香氣、釀造風格與代表酒款。',
    grapes: [
      {
        key: 'albarino',
        name: 'Albariño',
        emoji: '🌊',
        color: '#1A7A6B',
        colorType: '白葡萄',
        mainRegion: 'Galicia / Rías Baixas',
        tagline: '大西洋的禮物——西班牙最頂級白葡萄',
        spainRole: '加利西亞西北角 Rías Baixas DO 的招牌白葡萄。受大西洋強烈影響，產出酸度極高、礦物張力強、果香明亮的清新白酒。被視為西班牙最頂級的白葡萄品種。在葡萄牙稱 Alvarinho（Vinho Verde 主要品種）。',
        mainAreas: [
          { name: 'Rías Baixas DO（Galicia）', note: '主舞台，分 5 個子區，Val do Salnés 最古老' },
          { name: 'Ribeiro DO', note: '內陸版本，較花香細緻' },
          { name: 'Monterrei DO', note: '南部山谷，較飽滿' }
        ],
        cluster: '小而緊密、厚皮（適應潮濕氣候）',
        ripening: '中等（9 月底至 10 月初）',
        soils: '花崗岩、片岩、海岸沙質',
        climate: '海洋性、雨量多（年雨量 1500-2000mm）、涼爽多霧',
        metrics: { acidity: 5, mineral: 4, body: 3, fruit: 5, ageing: 3 },
        aromas: ['桃子', '杏桃', '青蘋果', '檸檬皮', '柚子', '白花', '海風礦物', '杏仁'],
        style: '極高酸度、清新明亮、桃杏果香、海風鹹味與礦物張力。年輕時奔放果香適合即飲；近年頂級酒莊嘗試橡木桶陳年或皮渣浸漬，產出可陳年 5-10 年的複雜版本。',
        ageing: '一般款 1–3 年；橡木桶陳年款 5–15 年',
        pairings: [
          '章魚 Pulpo a la Gallega（加利西亞招牌）',
          '生蠔、扇貝、貽貝',
          '烤海鱸、清蒸鱈魚',
          '加利西亞海鮮拼盤',
          '壽司與日式清蒸料理'
        ],
        examples: [
          { name: 'Pazo de Señoráns', note: 'Rías Baixas 最具代表性的傳統酒莊' },
          { name: 'Do Ferreiro Cepas Vellas', note: '80+ 年老藤，頂級深度' },
          { name: 'Forjas del Salnés（Leirana）', note: '新派橡木桶陳年版本' },
          { name: 'Bodegas Zárate（El Palomar）', note: 'Val do Salnés 單一園標竿' }
        ]
      },
      {
        key: 'verdejo',
        name: 'Verdejo',
        emoji: '🌿',
        color: '#7DAF30',
        colorType: '白葡萄',
        mainRegion: 'Castilla y León / Rueda',
        tagline: '草本清新——Rueda 高原的靈魂白葡萄',
        spainRole: '中北部 Rueda DO 招牌品種，11 世紀已記載於當地。曾幾乎滅絕，1970 年代復興後成為西班牙最受歡迎的白酒品種之一。苦杏仁尾韻是獨特品種特徵，風格介於 Sauvignon Blanc 的草本與 Albariño 的果香之間。',
        mainAreas: [
          { name: 'Rueda DO（Valladolid）', note: '主舞台，2008 年起 Rueda Verdejo 須含 ≥85% Verdejo' },
          { name: 'Rueda Superior DO', note: '≥85% Verdejo，較高品質標準' }
        ],
        cluster: '中等大小',
        ripening: '中等（9 月），常夜採以保留香氣',
        soils: '砂質礫石、石灰岩',
        climate: '大陸型、極大日夜溫差（白日 35°C、夜間 15°C）、乾燥',
        metrics: { acidity: 4, mineral: 3, body: 3, fruit: 4, ageing: 2 },
        aromas: ['草本（茴香）', '青蘋果', '葡萄柚', '接骨木花', '燧石', '苦杏仁尾韻'],
        style: '中等酒體、酸度偏高、明顯草本與柑橘香，苦杏仁尾韻是品種標誌。多數不鏽鋼槽釀造保留新鮮度。部分頂級酒莊以橡木桶陳年產出可陳年複雜版本（Jose Pariente、Belondrade）。',
        ageing: '一般款 1–3 年；橡木桶陳年款 5–10 年',
        pairings: [
          '海鮮 Tapas、Croquetas',
          'Boquerones（醃漬鯷魚）',
          '烤蔬菜料理',
          '清淡白肉（烤雞）',
          '年輕 Manchego 乳酪'
        ],
        examples: [
          { name: 'José Pariente（單一園橡木桶版）', note: 'Rueda Verdejo 標竿' },
          { name: 'Bodegas Naia（Las Brisas）', note: '老藤頂級，礦物感深邃' },
          { name: 'Belondrade y Lurton', note: '橡木桶陳年代表' },
          { name: 'Marqués de Riscal（Rueda）', note: '商業廣度最大、性價比佳' }
        ]
      },
      {
        key: 'macabeo',
        name: 'Macabeo（Viura）',
        emoji: '🍾',
        color: '#8E9AA0',
        colorType: '白葡萄',
        mainRegion: 'Cataluña（Cava）/ Rioja（Viura）',
        tagline: 'Cava 的脊梁——西班牙種植最廣白葡萄',
        spainRole: '西班牙種植最廣的白葡萄（約 60,000 公頃）。加泰羅尼亞稱 Macabeo，Rioja 稱 Viura。Cava 三大基礎品種之首，也是 Rioja 白酒的主力。風格中性清爽，適合作起泡酒基酒；但老藤或特定風土版本（Terra Alta）展現令人意外的複雜深度。',
        mainAreas: [
          { name: 'Cava DO（Cataluña）', note: 'Cava 三大基礎品種第一位，比例最高' },
          { name: 'Rioja DOCa（白酒 Viura）', note: '傳統 Rioja 白酒主體，陳年款堪稱傳奇' },
          { name: 'Terra Alta DO', note: '老藤版本，發展意外深度' }
        ],
        cluster: '大而鬆散、厚皮',
        ripening: '中熟（9 月中旬）',
        soils: '石灰岩黏土、砂質，適應力強',
        climate: '地中海至大陸型氣候均可',
        metrics: { acidity: 3, mineral: 2, body: 2, fruit: 3, ageing: 2 },
        aromas: ['蘋果', '梨子', '白花', '柑橘皮', '草本', '蜂蠟（老藤）', '堅果（陳年）'],
        style: '中等酸度、輕至中等酒體、風味偏中性——正是 Cava 需要的特性。老藤或特殊土壤版本發展蜂蠟、礦物深度。Rioja 老式陳年 Viura（López de Heredia）更是白酒中的傳奇，可陳年 20-30 年，展現獨特氧化堅果複雜度。',
        ageing: '一般款 1–2 年；Rioja Viura 老式陳年款 10–30 年',
        pairings: [
          '海鮮 Tapas、生蠔（作 Cava）',
          '清爽義大利麵',
          '白肉料理',
          '年輕乳酪',
          '傳統西班牙烤乳豬'
        ],
        examples: [
          { name: 'López de Heredia Viña Tondonia Blanco', note: 'Rioja Viura 的傳奇，陳年 20-30 年' },
          { name: 'CVNE Monopole', note: 'Rioja 白酒現代化代表' },
          { name: 'Gramona（Cava）', note: 'Macabeo 為主的頂級 Cava' },
          { name: 'Celler de Capçanes', note: 'Terra Alta 老藤深度版本' }
        ]
      },
      {
        key: 'xarello',
        name: 'Xarel·lo',
        emoji: '🌾',
        color: '#4A7C2F',
        colorType: '白葡萄',
        mainRegion: 'Cataluña（Penedès / Cava）',
        tagline: 'Cava 的骨架——加泰羅尼亞最具個性本土白葡萄',
        spainRole: '加泰羅尼亞最具地方個性的本土白葡萄，Cava 三大基礎品種中負責提供結構、酸度與酒體。近年精品酒莊以 100% Xarel·lo 釀造靜態白酒，徹底顛覆「Cava 基酒」的刻板印象，展現鮮明礦物感與令人驚艷的陳年潛力。',
        mainAreas: [
          { name: 'Cava DO（Penedès）', note: 'Cava 三大基礎品種，提供結構與陳年潛力' },
          { name: 'Penedès DO', note: '單一品種靜態白酒，近年精品化浪潮' },
          { name: 'Corpinnat', note: '精品 Cava 的核心品種，最高品質版本' }
        ],
        cluster: '中等大小、緊密',
        ripening: '晚熟（10 月初），保留酸度',
        soils: '石灰岩黏土（Penedès）',
        climate: '地中海氣候，涼爽夜晚保留酸度',
        metrics: { acidity: 4, mineral: 4, body: 3, fruit: 3, ageing: 4 },
        aromas: ['蘋果', '梨子', '橙皮', '草本', '燧石礦物', '白花', '蜂蠟（陳年）', '堅果（陳年）'],
        style: '中高酸度、明顯礦物感與草本清新。在 Cava 中提供骨架與陳年結構；單一品種靜態白酒（Blanc de Xarel·lo）備受國際矚目，可陳年 5-10 年，發展蜂蠟、燧石礦物複雜度。',
        ageing: 'Cava 中貢獻陳年潛力；靜態白酒 3–10 年',
        pairings: [
          '加泰羅尼亞傳統 Xató 沙拉',
          '鱈魚 Esqueixada 沙拉',
          '海鮮與白肉',
          '山羊乳酪',
          '蔬菜 Tapas'
        ],
        examples: [
          { name: 'Gramona（III Lustros Reserva）', note: 'Corpinnat 旗艦，Xarel·lo 比例高' },
          { name: 'Recaredo（Terrers）', note: '老藤 Xarel·lo 精品 Cava' },
          { name: 'Can Feixes（Blanc Selecció）', note: '靜態 Xarel·lo 先驅' },
          { name: 'Albet i Noya', note: '有機農法，Xarel·lo 單一品種' }
        ]
      },
      {
        key: 'palomino',
        name: 'Palomino',
        emoji: '🥃',
        color: '#B5860A',
        colorType: '白葡萄',
        mainRegion: 'Andalucía（Jerez）',
        tagline: 'Sherry 的靈魂基酒——本身中性，靠工藝蛻變成傳奇',
        spainRole: 'Jerez（雪莉酒）唯一核心基酒品種，佔 Jerez 葡萄園 85% 以上。Palomino 本身風味中性、低酸，作靜態白酒平淡無奇——但透過 Solera 索雷拉系統的生物熟成（Fino、Manzanilla）或氧化熟成（Oloroso），蛻變為世界最複雜的加強型葡萄酒。',
        mainAreas: [
          { name: 'Jerez-Xérès-Sherry DO', note: '主舞台，Albariza 白堊土，分 Fino/Oloroso 兩大風格' },
          { name: 'Manzanilla-Sanlúcar de Barrameda DO', note: '涼爽海洋微氣候，Flor 最旺盛，Manzanilla 更清爽鹹鮮' }
        ],
        cluster: '大而鬆散',
        ripening: '早熟（8 月底至 9 月初）',
        soils: 'Albariza（白堊質石灰岩）—— Sherry 最關鍵土壤，保水並反射陽光',
        climate: '炎熱地中海、Poniente 海風調節（Manzanilla 關鍵因子）',
        metrics: { acidity: 2, mineral: 3, body: 2, fruit: 2, ageing: 5 },
        aromas: ['杏仁', '麵包皮', '酵母', '鹽漬礦物', '堅果（Oloroso）', '蜂蠟', '太妃糖（Oloroso）'],
        style: '靜態白酒：低酸、中性。但作為 Sherry 基酒展現截然不同的兩種面貌：Fino/Manzanilla（Flor 酵母保護）：杏仁、麵包皮、鹹鮮礦物、極乾清爽；Oloroso（氧化熟成）：堅果、焦糖、太妃糖、深棕色、濃郁複雜。Solera 系統賦予超凡深度。',
        ageing: 'Fino/Manzanilla Solera 3-7 年；Amontillado 8-20 年；Oloroso 10-30 年；VORS 30 年+',
        pairings: [
          'Fino → 生蠔、鮮蝦、Jamón Ibérico',
          'Manzanilla → 炸海鮮、鯷魚',
          'Amontillado → 蘑菇湯、堅果',
          'Oloroso → 燉牛尾、陳年 Manchego',
          'PX（甜型）→ 巧克力、冰淇淋、藍紋乳酪'
        ],
        examples: [
          { name: 'González Byass Tío Pepe', note: 'Fino 全球標竿，150+ 年歷史' },
          { name: 'La Gitana（Hidalgo）', note: 'Manzanilla 最具代表性' },
          { name: 'Lustau（Almacenista）', note: '精品小批次系列，品種風格全覆蓋' },
          { name: 'Williams & Humbert（Dry Sack）', note: '經典陳年 Oloroso' }
        ]
      }
    ]
  },
  {
    type: 'quiz',
    question: 'Rías Baixas 最著名的白葡萄品種是哪個？它在葡萄牙有什麼不同名稱？',
    options: [
      'Verdejo，在葡萄牙稱 Loureiro',
      'Albariño，在葡萄牙稱 Alvarinho',
      'Macabeo，在葡萄牙稱 Siria',
      'Xarel·lo，在葡萄牙無種植',
    ],
    answer: 1,
    explanation: 'Rías Baixas（加利西亞）最著名的品種是 Albariño，在葡萄牙被稱為 Alvarinho，是 Vinho Verde 的重要品種之一。兩地均以清爽高酸、桃子橘皮風味著稱。',
  },
  {
    type: 'summary',
    message: '五大白品種記熟了嗎？',
    keyPoints: [
      'Albariño：Rías Baixas 大西洋白酒，桃子鹽漬礦石，全球頂級',
      'Verdejo：Rueda 草本清爽白酒，苦杏仁尾韻',
      'Macabeo（Viura）：Cava 和 Rioja 白酒的主力品種',
      'Xarel·lo：加泰羅尼亞本地品種，Cava 的結構支撐',
      'Palomino：Sherry 的唯一基酒品種，本身中性，靠釀造工藝出彩',
    ],
  },
]

const S1M3L3_slides = [
  {
    type: 'cover',
    icon: '🗺️',
    gradient: 'linear-gradient(135deg, #c0392b, #8e44ad)',
    title: '品種 × 產區對應地圖',
    subtitle: 'Level 1 · 第十課',
    points: [
      { icon: '🔴', label: '紅品種分布', text: 'Tempranillo 北部稱王，Monastrell 南部主場' },
      { icon: '⚪', label: '白品種分布', text: 'Albariño 西北角，Verdejo 中部高原' },
      { icon: '🍾', label: '氣泡 + 加強', text: 'Cava 東北，Sherry 西南，各據一方' },
    ],
  },
  {
    type: 'content',
    icon: '🔴',
    title: '紅品種分布：從北到南',
    html: `
      <div style="display:flex;flex-direction:column;gap:10px">
        <div style="background:#fce8e6;padding:12px;border-radius:10px;border-left:4px solid #c0392b">
          <strong>🍒 Tempranillo — 北部與中部高原稱霸</strong><br/>
          <em>La Rioja、Ribera del Duero、Navarra、Valdepeñas</em><br/>
          各地名稱：Rioja = <strong>Tempranillo</strong>；Ribera del Duero = <strong>Tinto Fino</strong>；La Mancha = <strong>Cencibel</strong>；Catalonia = <strong>Ull de Llebre</strong>
        </div>
        <div style="background:#fff3e0;padding:12px;border-radius:10px;border-left:4px solid #e67e22">
          <strong>🍑 Garnacha（Grenache）— 東北與中部</strong><br/>
          <em>Aragón、Campo de Borja、Priorat（Garnacha Peluda）、Rioja Oriental</em><br/>
          老藤 Garnacha 是 Priorat 頂級酒的關鍵，達 50-100 年以上樹齡
        </div>
        <div style="background:#f5eef8;padding:12px;border-radius:10px;border-left:4px solid #8e44ad">
          <strong>🫐 Monastrell — 東南部主場</strong><br/>
          <em>Jumilla、Yecla、Alicante、Bullas</em><br/>
          法文名 Mourvèdre，耐熱耐旱，在陽光充足的穆爾西亞和巴倫西亞省大放異彩
        </div>
        <div style="background:#e8f5e9;padding:12px;border-radius:10px;border-left:4px solid #27ae60">
          <strong>🌿 Mencía — 西北板岩地帶</strong><br/>
          <em>Bierzo、Ribeira Sacra（加利西亞）、Valdeorras</em><br/>
          板岩梯田上的優雅品種，鉛筆芯、紫羅蘭、輕盈結構（受 Pinot Noir 愛好者青睞）
        </div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '⚪',
    title: '白品種分布：依氣候帶劃分',
    html: `
      <div style="display:flex;flex-direction:column;gap:10px">
        <div style="background:#e8f8f5;padding:12px;border-radius:10px;border-left:4px solid #1abc9c">
          <strong>🌊 Albariño — 西北角（大西洋涼爽帶）</strong><br/>
          <em>Rías Baixas（加利西亞）</em><br/>
          「大西洋白酒」的代名詞，亦延伸至葡萄牙 Vinho Verde 產區（稱 Alvarinho）
        </div>
        <div style="background:#fefce8;padding:12px;border-radius:10px;border-left:4px solid #f1c40f">
          <strong>🌿 Verdejo — 中部高原</strong><br/>
          <em>Rueda（卡斯提亞-萊昂）</em><br/>
          Rueda DO 規定 Verdejo 含量至少 50%，現代清爽風格已成全球暢銷品
        </div>
        <div style="background:#eaf4fb;padding:12px;border-radius:10px;border-left:4px solid #3498db">
          <strong>🍾 Macabeo + Xarel·lo + Parellada — 加泰羅尼亞</strong><br/>
          <em>Penedès、Cava DO</em><br/>
          Cava 傳統三大品種：Macabeo 提供清爽，Xarel·lo 提供結構，Parellada 提供花香
        </div>
        <div style="background:#fdf2e9;padding:12px;border-radius:10px;border-left:4px solid #e67e22">
          <strong>🥃 Palomino + Pedro Ximénez — 南部安達盧西亞</strong><br/>
          <em>Jerez（Sherry）、Montilla-Moriles</em><br/>
          Palomino：Fino/Manzanilla/Amontillado/Oloroso 的主要基酒<br/>
          Pedro Ximénez（PX）：特甜 Sherry，葡萄乾曬乾後壓榨，如棗蜜漿
        </div>
      </div>
    `,
  },
  {
    type: 'quiz',
    question: 'Mencía 品種主要種植在哪個地區？那裡的土壤最典型的特徵是？',
    options: [
      'La Mancha，以石灰岩高原著稱',
      'Bierzo / Ribeira Sacra，以板岩梯田著稱',
      'Jerez，以白堊土 Albariza 著稱',
      'Rioja Alta，以白堊土石灰岩著稱',
    ],
    answer: 1,
    explanation: 'Mencía 主要種植於 Bierzo（萊昂省）和 Ribeira Sacra（加利西亞），這些產區以板岩（Schist）梯田為典型風土，板岩賦予 Mencía 獨特的礦石鉛筆芯風味和優雅輕盈的結構。',
  },
  {
    type: 'summary',
    message: '品種 × 產區地圖學習完成！',
    keyPoints: [
      'Tempranillo：北部（Rioja / Navarra）＋ 中部高原（Ribera del Duero）',
      'Garnacha：東北（Aragón）＋ Priorat 老藤',
      'Monastrell：東南（Jumilla / Yecla）',
      'Mencía：西北板岩地帶（Bierzo / Ribeira Sacra）',
      'Albariño：西北角（Rías Baixas）',
      'Verdejo：中部高原（Rueda）',
      'Cava 三品種：加泰羅尼亞（Penedès）',
      'Palomino + PX：南部安達盧西亞（Jerez）',
    ],
  },
]

const S1M4L2_slides = [
  {
    type: 'cover',
    icon: '🏷️',
    gradient: 'linear-gradient(135deg, #922b21, #c0392b)',
    title: 'Rioja 分類系統：產地 × 陳年 × 風格',
    subtitle: 'Level 1 · 第十三課 · 西班牙最完整的酒款分類制度',
    points: [
      { icon: '🗺️', label: '地理分類', text: 'DOCa → Vino de Zona → Vino de Pueblo → Viñedo Singular 四層地理溯源系統' },
      { icon: '🪵', label: '陳年分類', text: 'Genérico / Crianza / Reserva / Gran Reserva，嚴格規定桶陳與瓶陳時間' },
      { icon: '⚔️', label: '風格之爭', text: '傳統美國橡木派 vs 現代法國橡木派，造就千面 Rioja' },
    ],
  },
  {
    type: 'map',
    title: 'Rioja 三大子產區與地理分類',
    mapRegion: 'rioja',
    description: 'Alta（西）・Alavesa（北）・Oriental（東）是三個 Vino de Zona。下一層級是 Vino de Pueblo（144 個市鎮），最精細的是 Viñedo Singular（單一葡萄園，2017 年引入）。',
  },
  {
    type: 'content',
    icon: '🗺️',
    title: 'Rioja 地理分類四層系統（2017 年起）',
    html: `
      <p>Rioja 於 2017 年建立四層地理分類，讓消費者更清楚了解每款酒的來源精細程度：</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:12px">
        <div style="background:#fce8e6;border-left:5px solid #c0392b;padding:14px;border-radius:0 10px 10px 0">
          <strong>01. DOCa Rioja（最廣）</strong><br/>
          所有 Rioja 酒款的基礎標示，涵蓋全產區 66,000+ 公頃。由 14 個法定品種釀造，可混合三個子產區的果實。
        </div>
        <div style="background:#fde8cc;border-left:5px solid #e67e22;padding:14px;border-radius:0 10px 10px 0">
          <strong>02. Vino de Zona（子區酒）</strong><br/>
          標示三個子產區之一的來源：<strong>Rioja Alta</strong>・<strong>Rioja Alavesa</strong>・<strong>Rioja Oriental</strong>。反映子區風土特色，讓消費者識別大西洋型或地中海型風格。
        </div>
        <div style="background:#e8f5e9;border-left:5px solid #2e7d32;padding:14px;border-radius:0 10px 10px 0">
          <strong>03. Vino de Pueblo（村莊酒）</strong><br/>
          標示 144 個市鎮中的特定村莊。代表酒款中的葡萄 100% 來自該村。比 Zona 更精細，展現村莊級風土個性。如：來自 Haro、Laguardia、Alfaro 等歷史名村的酒款。
        </div>
        <div style="background:#e3f2fd;border-left:5px solid #1565c0;padding:14px;border-radius:0 10px 10px 0">
          <strong>04. Vino de Viñedo Singular（單一葡萄園）</strong><br/>
          2017 年引入，代表 Rioja 最高地理精度的標示。單一地塊，反映最具代表性的獨特風土。條件嚴格：葡萄樹樹齡、種植密度、手工採收等均有規範。類比布根地 Premier Cru 概念。
        </div>
      </div>
      <p style="margin-top:12px;color:#666;font-size:0.9rem">💡 地理分類與陳年分類可組合使用，如：一款酒可同時標示「Rioja Alta」（Zona）＋「Reserva」（陳年等級）。</p>
    `,
  },
  {
    type: 'content',
    icon: '🪵',
    title: 'Rioja 陳年分類：具體時間要求',
    html: `
      <p>Rioja 是全球<strong>最早實施陳年時間保證制度</strong>的產區（1974 年），並規定所有酒款必須在產區裝瓶（embotellado en origen）。</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">
        <div style="background:#f8f9fa;border-radius:10px;padding:12px;border:1px solid #dee2e6">
          <strong>🍷 Genérico（通常稱 Joven / 新鮮年輕型）</strong><br/>
          <span style="color:#666">無最短陳年要求，保留一次香氣（新鮮果味），通常在採收後第一或第二年上市。也可能包含不符合 Crianza 以上等級要求的酒款。</span>
        </div>
        <div style="background:#fff3cd;border-radius:10px;padding:12px;border:1px solid #ffc107">
          <strong>🪵 Crianza（陳年）</strong><br/>
          紅酒：總陳年 <strong>≥ 2 年</strong>，其中橡木桶（225L）<strong>≥ 12 個月</strong><br/>
          白酒／粉紅：橡木桶 <strong>≥ 6 個月</strong><br/>
          <span style="color:#666;font-size:0.9rem">兼具果味一次香（果香）與橡木桶二次香（香草、烘烤），平衡感佳。</span>
        </div>
        <div style="background:#ffe0cc;border-radius:10px;padding:12px;border:1px solid #e67e22">
          <strong>🏆 Reserva（珍藏）</strong><br/>
          紅酒：總陳年 <strong>≥ 3 年</strong>，橡木桶 <strong>≥ 12 個月</strong>＋瓶中 <strong>≥ 6 個月</strong><br/>
          白酒／粉紅：總陳年 2 年，橡木桶 <strong>≥ 6 個月</strong><br/>
          <span style="color:#666;font-size:0.9rem">三層香氣全齊：果香（一次）＋橡木（二次）＋陳年（三次：皮革、煙草、松露）。</span>
        </div>
        <div style="background:#fce8e6;border-radius:10px;padding:12px;border:1px solid #c0392b">
          <strong>🎖️ Gran Reserva（特級珍藏）</strong><br/>
          紅酒：總陳年 <strong>≥ 5 年</strong>，橡木桶 <strong>≥ 24 個月</strong>＋瓶中 <strong>≥ 24 個月</strong><br/>
          白酒／粉紅：總陳年 4 年，橡木桶 <strong>≥ 6 個月</strong><br/>
          <span style="color:#666;font-size:0.9rem">僅在頂級年份釀制，高度複雜、精緻優雅、極佳陳年潛力。</span>
        </div>
        <div style="background:#e8f5e9;border-radius:10px;padding:12px;border:1px solid #27ae60">
          <strong>🥂 氣泡酒（Espumoso）</strong><br/>
          Genérico：瓶中二次發酵 <strong>≥ 15 個月</strong>（傳統法）<br/>
          Reserva：<strong>≥ 24 個月</strong>（手工採收）<br/>
          Gran Añada：<strong>≥ 36 個月</strong>（手工採收，頂級年份）
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: '傳統派 vs 現代派 Rioja 風格對決',
    items: [
      {
        icon: '🏺',
        label: '傳統派（Clásico / Traditional）',
        desc: '美國橡木桶長期陳年（2–9 年+）。酒色磚紅偏橙，透明感強。香草、椰子、奶油糖果、皮革。口感輕盈絲滑、酸度突出。代表：López de Heredia、CVNE Imperial、Marqués de Murrieta Castillo Ygay',
        color: '#a04000',
      },
      {
        icon: '🍷',
        label: '現代派（Moderno / Contemporary）',
        desc: '法國橡木新桶短期陳年（12–18 個月）。酒色深濃寶石紫黑。黑莓、黑李、咖啡、可可、深烤土司。口感豐滿飽滿，高酒精，果味第一。代表：Artadi（Rioja Alavesa）、Roda、Palacios Remondo',
        color: '#2c3e50',
      },
      {
        icon: '🌹',
        label: '現代傳統主義（Neo-Tradicional）',
        desc: '傳統長期熟成哲學 + 法國橡木的優雅。保留 Rioja 的骨架，但避免美國桶帶來的過度椰子感。被許多評家視為「Rioja 的未來」。代表：Muga Prado Enea、La Rioja Alta Gran Reserva \'904\'',
        color: '#1a8f5a',
      },
      {
        icon: '⚗️',
        label: '車庫酒（Garage Wine / Vino de Autor）',
        desc: '源自 Rioja Alavesa，1990 年代末興起。小量頂級釀造，強調單一葡萄園或老藤。高度個人化，不受傳統混釀框架限制。代表：Artadi Viña El Pisón、Contino Viña del Olivo',
        color: '#7b1fa2',
      },
    ],
  },
  {
    type: 'content',
    icon: '🏰',
    title: 'Rioja 代表酒莊與推薦入門款',
    html: `
      <p>Rioja 擁有近 600 家酒莊，以下是各風格的代表：</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">
        <div style="background:#fce8e6;border-radius:10px;padding:12px">
          <strong style="color:#c0392b">🏺 傳統風格代表</strong>
          <ul style="margin:8px 0 0;padding-left:16px;font-size:0.9rem">
            <li><strong>López de Heredia</strong> — Viña Tondonia，Rioja Alta 傳統家族酒莊，白酒陳年舉世知名</li>
            <li><strong>Marqués de Murrieta</strong> — 1852 年創立，Castillo Ygay Gran Reserva 是傳奇</li>
            <li><strong>CVNE</strong> — 哈洛（Haro）歷史名莊，Imperial 系列是傳統精品</li>
          </ul>
        </div>
        <div style="background:#e3f2fd;border-radius:10px;padding:12px">
          <strong style="color:#1565c0">🍷 現代風格代表</strong>
          <ul style="margin:8px 0 0;padding-left:16px;font-size:0.9rem">
            <li><strong>Artadi</strong> — Rioja Alavesa 現代革命先驅，後轉成獨立 DO Arabako Errioxa</li>
            <li><strong>Bodegas Roda</strong> — Haro 現代精品，法國桶 Roda I 是現代 Rioja 的標杆</li>
            <li><strong>Ysios（Bodegas Ysios）</strong> — 建築師 Santiago Calatrava 設計，現代精品形象</li>
          </ul>
        </div>
        <div style="background:#e8f5e9;border-radius:10px;padding:12px">
          <strong style="color:#2e7d32">🌹 折衷/新傳統代表</strong>
          <ul style="margin:8px 0 0;padding-left:16px;font-size:0.9rem">
            <li><strong>Muga</strong> — Prado Enea 是折衷精品典範，家族傳統結合優雅現代感</li>
            <li><strong>La Rioja Alta SA</strong> — Gran Reserva 904 & 890 均衡優雅，口碑極佳</li>
          </ul>
        </div>
        <div style="background:#ede7f6;border-radius:10px;padding:12px">
          <strong style="color:#7b1fa2">🏛️ 著名旅遊酒莊</strong>
          <ul style="margin:8px 0 0;padding-left:16px;font-size:0.9rem">
            <li><strong>Marqués de Riscal</strong> — Elciego，Frank Gehry 設計的「波浪酒莊」，酒莊旅遊地標</li>
            <li><strong>Bodegas Ysios</strong> — Laguardia，Santiago Calatrava 建築設計</li>
          </ul>
        </div>
      </div>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：CVNE Imperial（傳統派）',
    image: '/spain/images/labels/rioja/cvne-imperial-reserva-2009.jpg',
    caption: 'CVNE「Imperial」Reserva 2009——Haro 歷史名莊 CVNE 的傳統精品系列，代表美國橡木長陳的古典 Rioja 風格。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Marqués de Murrieta（傳統派）',
    image: '/spain/images/labels/rioja/marques-de-murrieta-ygay-gran-reserva-1998.jpg',
    caption: 'Marqués de Murrieta「Ygay」Gran Reserva 1998——1852 年創立，是 Rioja 傳統派最具代表性的家族酒莊之一。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Contino（車庫酒／單一葡萄園）',
    image: '/spain/images/labels/rioja/contino-reserva-2006.jpg',
    caption: 'Contino Reserva 2006（Single Vineyard，Laguardia-Laserna）——強調單一葡萄園的車庫酒代表，酒標明確標示「Single Vineyard」與裝瓶編號。',
  },
  {
    type: 'quiz',
    question: '關於 DOCa Rioja 的陳年分類，下列哪項最正確？',
    options: [
      'Reserva 紅酒總陳年需 5 年，其中橡木桶 2 年；Gran Reserva 需 7 年',
      'Crianza 紅酒總陳年需 2 年，橡木桶至少 12 個月；Reserva 需 3 年，桶陳 12 個月+瓶陳 6 個月',
      'Gran Reserva 白酒需在橡木桶中熟成至少 2 年',
      'Genérico 等級必須在橡木桶中熟成至少 6 個月才能上市',
    ],
    answer: 1,
    explanation: 'Crianza 紅酒：總陳年 ≥2 年，橡木桶（225L）≥12 個月。Reserva 紅酒：總陳年 ≥3 年，橡木桶 ≥12 個月，瓶中 ≥6 個月。Gran Reserva：總陳年 ≥5 年，橡木桶 ≥24 個月，瓶中 ≥24 個月。Genérico 無最低陳年要求。Gran Reserva 白酒是總陳年 4 年，桶陳 ≥6 個月。',
  },
  {
    type: 'summary',
    message: 'Rioja 分類系統與風格學習完成！',
    keyPoints: [
      '四層地理分類：DOCa → Vino de Zona（3 子區）→ Vino de Pueblo（144 市鎮）→ Viñedo Singular（單一葡萄園，2017）',
      'Crianza（2年/桶12月）→ Reserva（3年/桶12月+瓶6月）→ Gran Reserva（5年/桶24月+瓶24月）',
      '傳統派：美國橡木長陳年 → 香草椰子磚紅（López de Heredia、Murrieta）',
      '現代派：法國橡木短陳年 → 深紫濃縮黑果（Artadi、Roda）',
      '1974 年率先推出陳年保證標章；DOCa 規定必須在產區裝瓶（embotellado en origen）',
      'Rioja Alta 精緻優雅 · Rioja Alavesa 輕盈礦石 · Rioja Oriental 飽滿地中海',
    ],
  },
]

const S1FinalExam_slides = [
  {
    type: 'cover',
    icon: '🎓',
    gradient: 'linear-gradient(135deg, #c0392b, #8e44ad)',
    title: 'Level 1 綜合評量',
    subtitle: '西班牙葡萄酒入門 · 最終測驗',
    points: [
      { icon: '📋', label: '10 題綜合測驗', text: '涵蓋地理、分級、品種、陳年、Rioja' },
      { icon: '✅', label: '通過標準', text: '答對 7 題以上即完成 Level 1' },
      { icon: '🏆', label: '完成後解鎖', text: 'Level 2：重點產區深度探索' },
    ],
  },
  {
    type: 'quiz',
    question: '【地理】西班牙葡萄種植面積居全球第幾位？',
    options: ['第 3 位', '第 2 位', '第 1 位', '第 4 位'],
    answer: 2,
    explanation: '西班牙葡萄種植面積約 96 萬公頃，長期居全球第一（超越法國和義大利）。',
  },
  {
    type: 'quiz',
    question: '【分級】下列哪兩個是西班牙目前僅有的 DOCa（最高等級）產區？',
    options: ['Rueda 和 Rías Baixas', 'Ribera del Duero 和 Navarra', 'Rioja 和 Priorat', 'Sherry 和 Cava'],
    answer: 2,
    explanation: 'Rioja 於 1991 年取得 DOCa 認證，Priorat（加泰羅尼亞語稱 DOQ）於 2009 年取得，為西班牙僅有的兩個 DOCa。',
  },
  {
    type: 'quiz',
    question: '【陳年】Rioja Reserva 紅酒，最少需要多少年的總陳年時間？其中在橡木桶中至少多久？',
    options: ['總共 2 年，桶陳 6 個月', '總共 3 年，桶陳 12 個月', '總共 5 年，桶陳 18 個月', '總共 4 年，桶陳 24 個月'],
    answer: 1,
    explanation: 'Reserva 紅酒：總陳年至少 3 年，其中橡木桶陳年至少 12 個月（1年），其餘在瓶中熟成。Gran Reserva 才是 5 年（桶陳18月）。',
  },
  {
    type: 'quiz',
    question: '【品種】Tempranillo 在 Ribera del Duero 的當地名稱是什麼？',
    options: ['Cencibel', 'Ull de Llebre', 'Tinto Fino（Tinta del País）', 'Aragones'],
    answer: 2,
    explanation: 'Tempranillo 在各地有不同名稱：Ribera del Duero = Tinto Fino，La Mancha = Cencibel，Catalonia = Ull de Llebre，葡萄牙 = Aragonez/Tinta Roriz。',
  },
  {
    type: 'quiz',
    question: '【白品種】以下哪個品種是 Rías Baixas 的代表品種，以桃子鹽漬礦石風味著稱？',
    options: ['Verdejo', 'Albariño', 'Macabeo', 'Palomino'],
    answer: 1,
    explanation: 'Albariño 是 Rías Baixas（加利西亞）的代表品種，在大西洋涼爽氣候下展現桃子、杏仁、鹽漬礦石的清爽特質，是全球最受推崇的白葡萄酒之一。',
  },
  {
    type: 'quiz',
    question: '【土壤】Priorat 的標誌性土壤「Llicorella」是什麼類型的土壤？它對葡萄酒有什麼影響？',
    options: [
      '白堊土，保水力強，釀出輕盈白酒',
      '板岩（黑色片岩），排水好，蓄熱強，造就濃縮礦石感紅酒',
      '火山浮石，賦予獨特煙燻礦石感',
      '紅粘土，保水力強，釀出豐滿圓潤紅酒',
    ],
    answer: 1,
    explanation: 'Priorat 的 Llicorella 由黑色板岩和石英組成，排水性極佳讓葡萄低產濃縮，日間吸熱夜間緩慢釋放讓葡萄緩慢成熟，是 Priorat 高濃縮礦石感的關鍵。',
  },
  {
    type: 'quiz',
    question: '【氣候】加利西亞（Galicia）主要受哪種氣候影響？這造就了什麼樣的葡萄酒風格？',
    options: [
      '地中海氣候，濃郁豐滿的紅酒',
      '大陸型氣候，高酸高結構的紅酒',
      '大西洋氣候，清爽高酸的白酒（Albariño）',
      '半乾旱氣候，加強型甜酒',
    ],
    answer: 2,
    explanation: '加利西亞位於西班牙西北角，受大西洋海洋性氣候影響，涼爽多雨，特別適合白葡萄品種生長。Rías Baixas 的 Albariño 因此清爽高酸，是大西洋白酒的代表。',
  },
  {
    type: 'quiz',
    question: '【酒標】看到西班牙酒標上寫著「Embotellado en la propiedad」，這意味著什麼？',
    options: [
      '這是在酒莊自行裝瓶的葡萄酒',
      '這是限量版編號酒款',
      '這是有機農法認證的葡萄酒',
      '這是由合作社（Cooperativa）生產的葡萄酒',
    ],
    answer: 0,
    explanation: '「Embotellado en la propiedad」直譯為「在自有酒莊裝瓶」（Estate Bottled），表示葡萄種植、釀酒、裝瓶均在同一酒莊完成，品質控管較嚴格。',
  },
  {
    type: 'quiz',
    question: '【Rioja】哪種橡木桶是 Rioja 傳統風格的標誌，賦予香草和椰子香氣？',
    options: ['匈牙利橡木（Hungarian Oak）', '法國橡木（French Oak）', '美國橡木（American Oak）', '斯洛維尼亞橡木（Slovenian Oak）'],
    answer: 2,
    explanation: '美國橡木桶是 Rioja 傳統風格的靈魂，其木紋較寬、透氧快，賦予香草、椰子、奶油糖果的特殊香氣，與法國橡木的雪松煙燻風截然不同。',
  },
  {
    type: 'summary',
    icon: '🏆',
    message: '🎉 恭喜完成 Level 1 綜合評量！您已成功建立西班牙葡萄酒的入門基礎！',
    keyPoints: [
      '✅ 西班牙葡萄種植面積全球第一（约 96 萬公頃）',
      '✅ DOCa 僅兩個：Rioja（1991）和 Priorat（2009）',
      '✅ 陳年等級：Joven → Crianza（2年）→ Reserva（3年）→ Gran Reserva（5年）',
      '✅ Tempranillo 是靈魂品種，各地名稱不同',
      '✅ 三大氣候：大西洋（西北）/ 大陸型（高原）/ 地中海（東南）',
      '✅ 現在可以解鎖 Level 2：重點產區深度探索 🚀',
    ],
  },
]

// ───────────────────────────────────────────────────────────────
//  Level 2 — 示範投影片（Ribera del Duero）
// ───────────────────────────────────────────────────────────────

const S2M1L1_slides = [
  {
    type: 'cover',
    icon: '🏰',
    gradient: 'linear-gradient(135deg, #8e44ad, #9b59b6)',
    title: 'Ribera del Duero',
    subtitle: 'Level 2 · 梅塞塔高原的王者',
    points: [
      { icon: '⛰️', label: '高海拔產區', text: '海拔 700-1000 公尺，大陸型極端氣候' },
      { icon: '🍒', label: 'Tinto Fino', text: 'Tempranillo 的當地名稱，純品種釀造為主' },
      { icon: '🏆', label: 'Vega Sicilia', text: '西班牙最傳奇的頂級酒莊，Único 是國寶' },
    ],
  },
  {
    type: 'map',
    title: 'Ribera del Duero 高原地理',
    mapRegion: 'castilla-leon',
    geojsonUrl: '/spain/geojson/appellations/ribera-del-duero.geojson',
    description: '海拔 700–1000 公尺的杜羅河谷，西班牙最大產酒自治區，日夜溫差賦予葡萄卓越酸度。',
  },
  {
    type: 'content',
    icon: '⛰️',
    title: 'Ribera del Duero：高原上的紅酒王國',
    html: `
      <p>Ribera del Duero（意為「杜羅河兩岸」）沿杜羅河延伸，<strong>1982 年建立 DO</strong>，葡萄園面積約 <strong>22,040 公頃</strong>。<strong>海拔 750–1000 公尺</strong>的高原位置，使氣候極為獨特：</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin:10px 0">
        <div style="background:#f3e5f5;border-left:4px solid #8e44ad;padding:10px;border-radius:0 8px 8px 0">
          <strong>🌡️ 極端大陸型氣候</strong><br/>夏季最高可達 <strong>42°C</strong>，冬季最低降至 <strong>−20°C</strong>；日夜溫差極大，減緩熟成過程，賦予果香豐富、酸度鮮活的葡萄。
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #27ae60;padding:10px;border-radius:0 8px 8px 0">
          <strong>🪨 32 種土壤類型</strong><br/>主要由第三紀沉積物組成——砂質、黏土、石灰岩與泥灰岩的交替層。多樣土壤賦予各地塊葡萄獨特複雜度。
        </div>
      </div>
      <h4>🍷 法定葡萄品種</h4>
      <ul>
        <li><strong>Tinto Fino（Tempranillo）</strong>：靈魂品種，又稱 Tinta del País。高海拔低溫下發展出深邃色澤、優異酸度、豐富黑色水果（黑莓、黑李），並形成獨特的<em>粉塵感結構（dusty structure）</em></li>
        <li><strong>紅葡萄輔助品種</strong>：Cabernet Sauvignon、Malbec、Merlot、Garnacha</li>
        <li><strong>白葡萄</strong>：Albillo 是唯一獲准種植的白品種</li>
      </ul>
      <h4>🏆 傳奇酒莊</h4>
      <ul>
        <li><strong>Vega Sicilia</strong>（貝加西西里亞）：西班牙最具傳奇色彩的酒莊，旗艦款 Único 即西班牙國寶級佳釀，陳年潛力數十年</li>
        <li><strong>Pingus</strong>：丹麥人 Peter Sisseck 於 1995 年創立，迅速躍升為西班牙最受追捧的膜拜酒</li>
        <li><strong>Pesquera</strong>：由 Alejandro Fernández 創立，是 1980 年代以來讓 Ribera del Duero 名揚國際的先驅酒莊</li>
      </ul>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Vega Sicilia Único',
    image: '/spain/images/labels/ribera-del-duero/vega-sicilia-unico-2009.jpg',
    caption: 'Vega Sicilia「Único」2009——西班牙最傳奇的頂級酒莊旗艦款，只在最佳年份出廠，是 Ribera del Duero 陳年潛力的最高象徵。',
  },
  {
    type: 'content',
    icon: '🏛️',
    title: 'Ribera del Duero：產業現況與葡萄酒旅遊',
    html: `
      <p>自 1982 年建區以來，Ribera del Duero 各類酒莊（從小型家族經營到大型合作社）皆投入大量資金於現代釀酒技術研發，在全球市場取得顯著成功。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#e8eaf6;border-left:4px solid #3f51b5;padding:12px;border-radius:0 10px 10px 0">
          <strong>📊 產業規模</strong><br/>
          葡萄園總面積約 <strong>22,040 公頃</strong>，分布於布爾戈斯（Burgos）、巴利亞多利德（Valladolid）、塞哥維亞（Segovia）、索里亞（Soria）四省。自大型合作社至精品小酒莊，風格多元。
        </div>
        <div style="background:#fff8e1;border-left:4px solid #f9a825;padding:12px;border-radius:0 10px 10px 0">
          <strong>🏰 Peñafiel 城堡葡萄酒博物館</strong><br/>
          位於 Peñafiel 古城堡內（建於 10 世紀），館內展示 Ribera del Duero 的釀酒歷史、土壤地質與酒莊故事，是產區地標性的文化設施。
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #43a047;padding:12px;border-radius:0 10px 10px 0">
          <strong>🍷 Aranda del Duero 葡萄酒詮釋中心</strong><br/>
          位於主要城市 Aranda del Duero，是認識 Ribera del Duero 風土、品種與陳年工藝的最佳起點，並設有品酒廳與互動展覽。
        </div>
        <div style="background:#fce8e6;border-left:4px solid #c0392b;padding:12px;border-radius:0 10px 10px 0">
          <strong>🚀 現代化投資</strong><br/>
          1982 年建區後，酒莊持續引進溫控發酵、法國橡木桶、低產老藤管理等現代技術，挑戰並超越 Rioja，部分頂級款已獲國際酒評 95–100 分。
        </div>
      </div>
    `,
  },
  {
    type: 'quiz',
    question: 'Ribera del Duero 的海拔大約在哪個範圍，造就其大陸型極端氣候？',
    options: ['200-400 公尺', '400-600 公尺', '700-1000 公尺', '1200-1500 公尺'],
    answer: 2,
    explanation: 'Ribera del Duero 海拔約 700-1000 公尺，屬於高原產區。高海拔帶來大日夜溫差，有助保留酸度和香氣，釀出結構豐富的 Tinto Fino 紅酒。',
  },

  {
    type: 'quiz',
    question: 'Ribera del Duero 唯一獲准種植的白葡萄品種是？',
    options: ['Verdejo', 'Albariño', 'Albillo', 'Macabeo'],
    answer: 2,
    explanation: 'Albillo（Albillo Mayor）是 Ribera del Duero 唯一法定白葡萄品種，雖然產量極少，但近年有酒莊嘗試以其釀造高品質白酒。',
  },
  {
    type: 'summary',
    message: 'Ribera del Duero 學習完成！',
    keyPoints: [
      '1982 年建立 DO，名稱意為「杜羅河兩岸」，面積約 22,040 公頃',
      '海拔 750–1000 公尺，極端大陸型氣候：夏季 42°C、冬季 −20°C',
      '32 種土壤類型，主要為第三紀沉積（砂質、黏土、石灰岩、泥灰岩）',
      'Tinto Fino（Tempranillo）釀出獨特粉塵感結構（dusty structure）',
      '傳奇酒莊三強：Vega Sicilia、Pingus、Pesquera',
      '白葡萄唯一法定品種：Albillo',
    ],
  },
]

// ───────────────────────────────────────────────────────────────
//  Level 2 — 完整投影片
// ───────────────────────────────────────────────────────────────

const S2M1L2_slides = [
  {
    type: 'cover',
    icon: '🌿',
    gradient: 'linear-gradient(135deg, #1a8f5a, #27ae60)',
    title: 'Rueda — 卡斯提亞清爽白酒',
    subtitle: 'Level 2 · Verdejo 的故鄉',
    points: [
      { icon: '⛰️', label: '高原產區', text: '海拔 700-900 公尺，大陸型氣候，日夜溫差大' },
      { icon: '🌿', label: 'Verdejo', text: '草本清爽・白桃・苦杏仁，是西班牙最受歡迎的白酒品種之一' },
      { icon: '📜', label: 'DO Rueda', text: 'Verdejo 含量至少 50%，酒標必須標示品種' },
    ],
  },
  {
    type: 'map',
    title: 'Rueda DO 產區位置',
    mapRegion: 'castilla-leon',
    geojsonUrl: '/spain/geojson/appellations/rueda.geojson',
    description: '位於卡斯提亞-萊昂西南部，Verdejo 白酒的核心產地，海拔高原賦予清爽酸度。',
  },
  {
    type: 'content',
    icon: '🗺️',
    title: 'Rueda DO：地理、氣候與 Cascajosos 土壤',
    html: `
      <p>Rueda 位於杜羅河谷（Duero River Valley）產區內，卡斯提亞-萊昂自治區，距 Ribera del Duero 約 100 公里。主要城鎮包括 La Seca、Rueda、Serrada、Medina del Campo。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#e8f5e9;border-left:4px solid #27ae60;padding:12px;border-radius:0 10px 10px 0">
          <strong>⛰️ 地理</strong><br/>
          葡萄園位於海拔 <strong>700–800 公尺</strong>的高原上，產區面積中 <strong>95% 為白葡萄</strong>。雖緯度上屬地中海氣候區，但因高海拔影響而呈現大陸型氣候特徵。
        </div>
        <div style="background:#fff3e0;border-left:4px solid #e67e22;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌡️ 氣候數據</strong><br/>
          漫長寒冷的冬季、帶有晚霜的短暫春季、乾燥炎熱的夏季。
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>夏季平均最高溫：<strong>23°C</strong>；冬季平均最低溫：<strong>−3°C</strong></li>
            <li>年均降雨量：<strong>318 毫米</strong>（極為乾燥）</li>
            <li>年日照時數：<strong>2,600 小時</strong>（充裕陽光）</li>
          </ul>
        </div>
        <div style="background:#f3e5f5;border-left:4px solid #8e44ad;padding:12px;border-radius:0 10px 10px 0">
          <strong>🪨 Cascajosos 礫石地（標誌性土壤）</strong><br/>
          暗灰褐色土壤，<strong>富含鈣與鎂</strong>、有機質含量低、通風與排水性極佳。根瘤蚜（Phylloxera）無法在礫石中存活，因此保存了大量自根老藤（60–100 年）。
        </div>
        <div style="background:#e3f2fd;border-left:4px solid #2196f3;padding:12px;border-radius:0 10px 10px 0">
          <strong>📜 DO Rueda 規定</strong><br/>
          <ul style="margin:4px 0 0;padding-left:18px">
            <li><strong>Rueda Verdejo</strong>：Verdejo ≥ 85%</li>
            <li><strong>Rueda</strong>（一般）：Verdejo ≥ 50%</li>
            <li><strong>Rueda Espumoso</strong>（氣泡）：Verdejo ≥ 85%，傳統法</li>
          </ul>
        </div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '🌿',
    title: 'Verdejo：品種歷史、風味與品飲指南',
    html: `
      <p>Verdejo 在魯埃達種植已超過<strong>數個世紀</strong>，起源可追溯至 11 世紀阿方索六世時期，據信由<strong>摩爾人自北非引入西班牙</strong>，並在梅塞塔高原長期適應演化。</p>
      <h4>🍋 主要風味輪廓</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
        <div style="background:#f1f8e9;border-radius:8px;padding:10px;font-size:0.9rem">🍋 青檸</div>
        <div style="background:#f1f8e9;border-radius:8px;padding:10px;font-size:0.9rem">🍈 哈密瓜</div>
        <div style="background:#f1f8e9;border-radius:8px;padding:10px;font-size:0.9rem">🍊 葡萄柚皮</div>
        <div style="background:#f1f8e9;border-radius:8px;padding:10px;font-size:0.9rem">🌿 茴香（靈魂草本氣息）</div>
        <div style="background:#f1f8e9;border-radius:8px;padding:10px;font-size:0.9rem">🍑 白桃</div>
        <div style="background:#fce4ec;border-radius:8px;padding:10px;font-size:0.9rem">✨ 尾韻微苦感（bitter touch）</div>
      </div>
      <h4 style="margin-top:14px">🍷 口感結構</h4>
      <ul>
        <li>酒體<strong>輕盈、無單寧</strong>，酸度中高</li>
        <li>酒精濃度：<strong>11.5–13.5%</strong></li>
        <li>口中的<strong>體積感</strong>與尾韻<strong>特有微苦感</strong>是衡量高品質魯埃達的關鍵指標</li>
      </ul>
      <h4>🥂 品飲建議</h4>
      <ul>
        <li><strong>飲用溫度</strong>：<strong>3–7°C</strong>（極冰冷）</li>
        <li><strong>醒酒</strong>：無需醒酒，使用白葡萄酒杯</li>
        <li><strong>適飲期</strong>：通常 3–5 年（老藤款可更長）</li>
      </ul>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Rueda Verdejo',
    image: '/spain/images/labels/rueda/basa-blanco-2011.jpg',
    caption: 'Telmo Rodríguez「Basa」Blanco Rueda 2011——當代西班牙釀酒師 Telmo Rodríguez 詮釋的老藤 Verdejo，展現產區草本、白桃與微苦尾韻的典型風格。',
  },
  {
    type: 'quiz',
    question: 'DO Rueda 的標誌性土壤「Cascajosos」，哪項最準確描述其特性？',
    options: [
      '白堊土、保水力極佳，適合老藤蓄根',
      '礫石地、富含鈣鎂、排水通風極佳，根瘤蚜難以存活',
      '第三紀紅壤，保水力強，適合 Garnacha',
      '第三紀熔岩石，日間蓄熱夜間散熱，適合濃縮紅酒',
    ],
    answer: 1,
    explanation: 'Cascajosos 是魯埃達暗灰褐色礫石土，富含鈣鎂、有機質低、排水通風極佳，根瘤蚜無法在礫石中存活因此保存了大量自根老藤 Verdejo。',
  },

  {
    type: 'summary',
    message: 'Rueda 學習完成！',
    keyPoints: [
      '杜羅河谷白酒精品，海拔 700–800 公尺，95% 白葡萄',
      '大陸型氣候：夏季 23°C / 冬季 −3°C，年雨 318mm，日照 2,600 小時',
      'Cascajosos 礫石地：鈣鎂佳、排水優，根瘤蚜難存，老藤得以保存',
      'Verdejo 起源自 11 世紀，摩爾人自北非引入；酸度中高，尾韻微苦感是品質標誌',
      'Rueda Verdejo 規定 Verdejo ≥ 85%；飲用溫度 3–7°C，適飲 3–5 年',
    ],
  },
]

const S2M1L3_slides = [
  {
    type: 'cover',
    icon: '⬛',
    gradient: 'linear-gradient(135deg, #2c3e50, #566573)',
    title: 'Bierzo — 板岩上的 Mencía 老藤',
    subtitle: 'Level 2 · 萊昂省最優雅的紅酒',
    points: [
      { icon: '⬛', label: '板岩梯田', text: '海拔 450–1,000m，高低海拔土壤各異，全程手工作業' },
      { icon: '🌿', label: 'Mencía 之地', text: '官方口號「Bierzo, the land of Mencía」，佔產量約 75%；酸櫻桃・石榴・碎石礦物感' },
      { icon: '🌡️', label: '半濕潤氣候', text: '夏均 20.8°C、冬均 5.7°C、年雨 652mm，大西洋氣流調節大陸型極端' },
    ],
  },
  {
    type: 'map',
    title: 'Bierzo 板岩谷地',
    mapRegion: 'castilla-leon',
    geojsonUrl: '/spain/geojson/appellations/bierzo.geojson',
    description: '西班牙西北角的山谷產區，板岩土壤孕育 Mencía 老藤，地形遮擋大西洋與大陸氣候。',
  },
  {
    type: 'content',
    icon: '🗺️',
    title: 'Bierzo：地理與風土',
    html: `
      <p>Bierzo DO 位於卡斯提亞-萊昂省<strong>萊昂省西北部</strong>，北鄰阿斯圖里亞斯，西接加利西亞（奧倫塞、盧戈省），地處坎塔布連與加利西亞山脈交匯的碗形盆地。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#f5eef8;border-left:4px solid #8e44ad;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌡️ 氣候（Cacabelos 數據）</strong><br/>
          半濕潤氣候，夏均 <strong>20.8°C</strong>、冬均 <strong>5.7°C</strong>、年雨量 <strong>652mm</strong>。大西洋濕潤氣流從加利西亞流入，調節大陸型極端，使 Mencía 糖酸達到優雅平衡。
        </div>
        <div style="background:#eaf4fb;border-left:4px solid #2980b9;padding:12px;border-radius:0 10px 10px 0">
          <strong>⛰️ 海拔與土壤（依高度分層）</strong><br/>
          葡萄園總面積 <strong>2,982 公頃</strong>，海拔 <strong>450–1,000m</strong>，分布於河流梯田、山坡與斜坡。<br/>
          ・<strong>高海拔</strong>：石英岩、板岩、花崗岩、石灰岩——礦石骨架強，頂級 Mencía 發源地<br/>
          ・<strong>低海拔</strong>：黏土、卵石、沖積物——出酒量較大，風格較圓潤
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #27ae60;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌿 Mencía 核心風味</strong><br/>
          <ul style="margin:4px 0 0;padding-left:18px">
            <li>酸櫻桃、石榴、黑莓、甘草</li>
            <li>碎石礦物感（板岩鉛筆芯）</li>
            <li>乾型、中至飽滿酒體、中高酸、中等單寧</li>
            <li>老藤深邃結構，接近 Burgundy Pinot Noir</li>
          </ul>
        </div>
      </div>
      <h4 style="margin-top:14px">🏆 代表酒莊</h4>
      <p><strong>Descendientes de J. Palacios</strong>（Ricardo Pérez Palacios）是 Bierzo 國際聲譽的關鍵推手，旗下 La Faraona 和 Las Lamas 是西班牙最貴的 Mencía。</p>
    `,
  },
  {
    type: 'content',
    icon: '🍇',
    title: 'Bierzo 葡萄品種與品飲建議',
    html: `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
        <div style="background:#fce8e6;border-radius:8px;padding:10px">
          <strong>🟥 紅葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Mencía</strong>（主導，約 75%）</li>
            <li>Garnacha Tintorera</li>
          </ul>
        </div>
        <div style="background:#e8f5e9;border-radius:8px;padding:10px">
          <strong>⬜ 白葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Godello</strong>（最具潛力）</li>
            <li>Doña Blanca、Palomino、Malvasía</li>
          </ul>
        </div>
      </div>
      <h4>🍷 Mencía 品飲建議</h4>
      <ul>
        <li><strong>風味</strong>：酸櫻桃、石榴、甘草、黑莓 + 破碎碎石礦物感</li>
        <li><strong>酒款</strong>：乾型、中至飽滿酒體、中高酸度與單寧</li>
        <li><strong>飲用溫度</strong>：<strong>13–16°C</strong></li>
        <li><strong>醒酒</strong>：建議醒酒約 1 小時；優質款陳年 <strong>10 年以上</strong>依然出色</li>
      </ul>
      <h4>🍋 Godello 品飲建議</h4>
      <ul>
        <li><strong>風味</strong>：柚子、檸檬皮、榲桲、煙燻礦石</li>
        <li><strong>飲用溫度</strong>：<strong>7–13°C</strong>（冷飲）</li>
        <li><strong>醒酒</strong>：無需醒酒；陳年潛力 <strong>3–5 年</strong></li>
      </ul>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Bierzo Mencía',
    image: '/spain/images/labels/bierzo/enedina-villafranca.jpg',
    caption: 'Raúl Pérez「Enedina」Viñedos Viejos del Bierzo（Villafranca del Bierzo）——Raúl Pérez 是繼 Descendientes de J. Palacios 之後另一位帶動 Bierzo 老藤復興的關鍵釀酒師。',
  },
  {
    type: 'quiz',
    question: 'Bierzo DO 最著名且種植在板岩梯田上的主要紅品種是什麼？',
    options: ['Tempranillo', 'Garnacha', 'Mencía', 'Bobal'],
    answer: 2,
    explanation: 'Bierzo DO 的明星品種是 Mencía，種植在陡峭板岩梯田上，以優雅花香、紅果、礦石感和輕盈結構著稱，常被比較為西班牙的 Pinot Noir。',
  },

  {
    type: 'summary',
    message: 'Bierzo 學習完成！',
    keyPoints: [
      '萊昂省西北部碗形盆地，北鄰阿斯圖里亞斯，西接加利西亞；半濕潤氣候，夏 20.8°C、年雨 652mm',
      '葡萄園 2,982 公頃，海拔 450–1,000m；高海拔板岩梯田孕育頂級 Mencía',
      '官方口號「Bierzo, the land of Mencía」——酸櫻桃・石榴・碎石礦物感，13–16°C，醒酒 1h，陳年 10 年+',
      'Godello 白酒：柚子・煙燻礦石，7–13°C，陳年 3–5 年；Descendientes de J. Palacios 是旗艦推手',
    ],
  },
]

const S2M1L4_slides = [
  {
    type: 'cover',
    icon: '🌹',
    gradient: 'linear-gradient(135deg, #e91e63, #c0392b)',
    title: 'Navarra — 復甦等級・山地到平原',
    subtitle: 'Level 2 · 庇里牛斯山麓 → 埃布羅河谷 · DO 三大氣候交匯',
    points: [
      { icon: '🌹', label: '粉紅酒典範', text: '西班牙最具代表性 Garnacha Rosado，草莓・覆盆子香氣，1980 年代前即以粉紅酒調名' },
      { icon: '🌡️', label: '三大氣候交匯', text: '大西洋・大陸性・地中海三路交匯，年日照 2,700h，多樣化酒款讓 Navarra 成為頂級紅白粉紅酒產區' },
      { icon: '💜', label: 'Viura 白酒', text: '最主要白葡萄品種，帶有哈密瓜・青檸皮・檸檬馬鞭草，極乾高熟成度，可陳年 10 年以上' },
    ],
  },
  {
    type: 'map',
    title: 'Navarra DO 產區地理',
    mapRegion: 'navarra',
    description: '北接庇里牛斯山，南達埃布羅河，五個子產區從寒冷高山到溫暖平原。平均海拔 400m，年均降雨 400–550mm，年日照約 2,700 小時。',
  },
  {
    type: 'compare',
    title: 'Navarra DO：五個子產區',
    items: [
      { icon: '🏔️', label: 'Valdizarbe', desc: '北部高海拔，受庇里牛斯山影響，氣候最涼爽，生產清爽白酒與輕盈紅酒', color: '#3498db' },
      { icon: '🌊', label: 'Tierra Estella', desc: '受大西洋影響，香氣清新，適合 Chardonnay 與 Viura 白葡萄 — EVENA 研發展示區，構成複雜白酒', color: '#27ae60' },
      { icon: '🌹', label: 'La Ribera Alta', desc: '核心紅酒和粉紅酒地帶，Garnacha 老藤最集中，最典型的 Navarra Rosado', color: '#e91e63' },
      { icon: '☀️', label: 'La Ribera Baja', desc: '氣候最乾熱，石灰質下的砂質壤，釀造豐滿濃郁紅酒，鄰近拉里奧哈，亦種植 Moscatel 甜酒', color: '#e67e22' },
      { icon: '🏠', label: 'Baja Montaña', desc: '東北部，介於山地與平原，石灰質與礫石壤，Tempranillo 與 Garnacha 多樣化種植', color: '#9b59b6' },
    ],
  },
  {
    type: 'content',
    icon: '🌡️',
    title: '氣候・風土・EVENA 研發中心',
    html: `
      <h4>🌦️ 產區氣候數據</h4>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#eaf4fb;border-left:4px solid #2980b9;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌡️ 溫度與降雨</strong><br/>
          夏季最高均溫 <strong>34°C</strong>，冬季最低均溫 <strong>-4°C</strong>，日夜溫差顯著<br/>
          年均降雨 <strong>400–550mm</strong>，年日照 <strong>2,700 小時</strong>（遠高於波爾多）
        </div>
        <div style="background:#e9f7ef;border-left:4px solid #27ae60;padding:12px;border-radius:0 10px 10px 0">
          <strong>⛰️ 海拔與土壤</strong><br/>
          葡萄園均海拔 <strong>400m</strong>，主要為石灰質與礫石壤<br/>
          南部 Ribera Baja 為<strong>砂質土</strong>，保水性低，適合 Moscatel 甜酒
        </div>
        <div style="background:#fef9e7;border-left:4px solid #e67e22;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌍 三大氣候交匯帶</strong><br/>
          北緣大西洋濕潤氣流 × 內陸大陸性乾熱 × 南緣地中海陽光 — 彼此交匯出<strong>多樣化風格</strong>的葡萄酒
        </div>
      </div>
      <h4 style="margin-top:16px">🏢 EVENA 研發中心的貢獻</h4>
      <p>位於 <strong>Olite 奧利特</strong>的納瓦拉葡萄栽培與釀酒研究站（<strong>EVENA</strong>）由當地政府成立，是 1980 年代 Navarra 轉型的技術推手——對國際品種適應性研究、優選克隆、釀酒訓練，發表大量學術成果，幫助 Navarra 發展為西班牙釀酒技術最先進的產區之一。</p>
    `,
  },
  {
    type: 'content',
    icon: '💜',
    title: 'Viura 白酒與葡萄品種全景',
    html: `
      <h4>💜 Viura（維奧娜）— Navarra 最主要白葡萄</h4>
      <ul>
        <li><strong>香氣</strong>：哈密瓜、青檸皮、檸檬馬鞭草（Tarragon）、榛果</li>
        <li><strong>口感</strong>：極乾（Bone-Dry）・中至輕盈酒體・中等酸度</li>
        <li><strong>侍酒溫度</strong>：<strong>7–13°C</strong>——無需醒酒，準備即飲</li>
        <li><strong>陳年潛力</strong>：<strong>10 年以上</strong>，緩慢轉化為蘑菇、油脂、蜂蠟風味</li>
      </ul>
      <h4>🍷 紅、白、粉紅全產區品種</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
        <div style="background:#fce8e6;border-radius:8px;padding:10px">
          <strong>🟥 紅葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Garnacha</strong>（核心粉紅酒/紅酒）</li>
            <li>Tempranillo</li>
            <li>Merlot、Cabernet Sauvignon</li>
            <li>Syrah、Pinot Noir</li>
            <li>Graciano、Mazuelo</li>
          </ul>
        </div>
        <div style="background:#e8f5e9;border-radius:8px;padding:10px">
          <strong>⬜ 白葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Viura</strong>（最主要）</li>
            <li>Chardonnay、Sauvignon Blanc</li>
            <li>Malvasía、Garnacha Blanca</li>
            <li><strong>Moscatel de Grano Menudo</strong>（甜酒）</li>
          </ul>
        </div>
      </div>
      <p style="margin-top:10px;color:#666;font-size:0.9em">📐 總種植面積約 <strong>11,025 公頃</strong></p>
    `,
  },
  {
    type: 'content',
    icon: '🌹',
    title: 'Navarra Rosado：粉紅酒與產業演進',
    html: `
      <p>Navarra 的 <strong>Garnacha Rosado 粉紅酒</strong>被認為是西班牙最具代表性的粉紅酒風格，並在國際上享有盛名。</p>
      <h4>🍓 風味特徵</h4>
      <ul>
        <li><strong>顏色</strong>：亮麗的覆盆子粉紅至深玫瑰紅（傳統壓榨法）</li>
        <li><strong>香氣</strong>：草莓、覆盆子、西瓜、玫瑰花瓣</li>
        <li><strong>口感</strong>：清爽高酸、果味豐滿、乾型為主，夏日最佳饗宴</li>
      </ul>
      <h4>📅 三個時代的產業演變</h4>
      <ul>
        <li><strong>1980 年代前</strong>：幾乎專屬粉紅酒產區，以 Garnacha Rosado 享名</li>
        <li><strong>1980–1990 年代</strong>：EVENA 導入法國國際品種實驗（Cabernet Sauvignon、Merlot、Chardonnay），建立技術優勢</li>
        <li><strong>現代</strong>：回歸本土品種，Viura 白酒、Garnacha 紅酒與 Rosado 三足鼎立，多元化定位穩固</li>
      </ul>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Navarra 國際品種紅酒',
    image: '/spain/images/labels/navarra/magana-dignus-2007.jpg',
    caption: 'Bodega Viña Magaña「Dignus」Navarra 2007——以 Cabernet Sauvignon/Merlot 為主的波爾多式混釀，正是 1980 年代 EVENA 推動國際品種實驗以來的成果代表。',
  },
  {
    type: 'quiz',
    question: '關於 Navarra DO 下列何者正確？',
    options: [
      'Navarra 年日照僅 1,200 小時，是西班牙最陰濕的產區之一',
      'Viura 是 Navarra 最主要白葡萄品種，帶有哈密瓜・青檸皮・榛果，可陳年 10 年以上',
      'Navarra 完全不受大西洋氣候影響，屬純粹地中海型產區',
      'EVENA 研發中心對 Navarra 產業轉型沒有幫助',
    ],
    answer: 1,
    explanation: 'Viura 是 Navarra 最主要白葡萄品種，帶有哈密瓜・青檸皮・榛果・檸檬馬鞭草香氣，極乾・可陳年 10 年以上。Navarra 年日照高達 2,700h；三大氣候交匯；EVENA（位於 Olite）是 1980 年代產業轉型的關鍵推手。',
  },
  {
    type: 'summary',
    message: 'Navarra 學習完成！',
    keyPoints: [
      '五個子產區：庇里牛斯山涼爽北部 → 乾熱平原南部，平均海拔 400m，年日照 2,700h',
      '氣候三大交匯：大西洋・大陸性・地中海，年均降雨 400–550mm',
      'Garnacha Rosado 是 Navarra 最具象徵性特色，草莓・覆盆子・風味飽滿',
      'Viura 白酒：極乾・中等酸度・品飲 7–13°C，陳年潛力超 10 年',
      'EVENA（Olite）研發中心主導了 1980 年代的產業轉型與多品種定位',
    ],
  },
]

// ─── S2M1L5 — Arlanza DO ────────────────────────────────────────────────────
const S2M1L5_slides = [
  {
    type: 'cover',
    icon: '🏔️',
    gradient: 'linear-gradient(135deg, #6c3483, #a569bd)',
    title: 'Arlanza DO — 河谷高海拔古老產區',
    subtitle: 'Level 2 · 卡斯提亞-萊昂 · Burgos & Palencia · 12 世紀修道院釀酒傳統',
    points: [
      { icon: '⛰️', label: '高海拔極端氣候', text: '葡萄園位於 800–1,200m，夏季 38°C / 冬季 -11°C，年日照僅 1,200h，大陸性氣候典型' },
      { icon: '🪨', label: '多樣土壤', text: '花崗岩砂質土壤釀出優雅細膩酒款；頁岩黏土賦予礦物質感與結構' },
      { icon: '💜', label: 'Albillo 白酒', text: '西班牙本土稀有白品種，蘋果、忍冬、橙花、甘菊香氣，酒體類似夏多內但帶西班牙果香' },
    ],
  },
  {
    type: 'map',
    title: 'Arlanza DO 位置',
    mapRegion: 'castilla-leon',
    description: '位於卡斯提亞-萊昂自治區 Burgos 與 Palencia 省，得名於流經產區的阿蘭扎河（River Arlanza）。葡萄園海拔 800–1,200m，年均降雨 477mm，年日照 1,200 小時。',
  },
  {
    type: 'compare',
    title: 'Arlanza：兩大土壤類型',
    items: [
      {
        icon: '🪨',
        label: '花崗岩砂質土壤',
        desc: '表層鬆散砂質，底土含深層黏土，酸性偏高。釀出的酒款優雅、細膩，餘韻悠長，礦石感明顯',
        color: '#8d6e63',
      },
      {
        icon: '⛏️',
        label: '頁岩黏土（中心地帶）',
        desc: '源自頁岩的黏土土壤，鹼性（Basic pH），賦予葡萄酒更多礦物質感、骨架與結構感，是 Tempranillo 紅酒的核心產區',
        color: '#546e7a',
      },
      {
        icon: '🌡️',
        label: '極端大陸性氣候',
        desc: '夏季最高 38°C，冬季最低 -11°C，溫差達 49°C。年降雨 477mm，年日照 1,200h。極端環境讓果實緩慢成熟，風味濃縮',
        color: '#e53935',
      },
      {
        icon: '📏',
        label: '高海拔小型產區',
        desc: '葡萄園位於 800–1,200m 高海拔，總種植面積僅約 350 公頃，是卡斯提亞-萊昂最小型的 DO 之一',
        color: '#1565c0',
      },
    ],
  },
  {
    type: 'content',
    icon: '⛪',
    title: '歷史淵源・氣候・風土',
    html: `
      <h4>⛪ 12 世紀修道院釀酒傳統</h4>
      <p>Arlanza 的釀酒紀錄最早可追溯至 <strong>12 世紀</strong>。位於 Juarros 的 <strong>聖瑪麗亞布赫多修道院</strong>（Monastery of Santa María de Bujedo de Juarros）在阿蘭扎河與杜羅河岸購買葡萄園，開啟了當地的葡萄酒歷史，直至 2008 年正式升格為 DO。</p>
      <h4>🌡️ 極端大陸性氣候數據</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">
        <div style="background:#fce8e6;border-left:4px solid #e53935;padding:10px;border-radius:0 8px 8px 0">
          <strong>🌞 夏季最高</strong><br/><strong style="font-size:1.3em">38°C</strong>
        </div>
        <div style="background:#e3f2fd;border-left:4px solid #1565c0;padding:10px;border-radius:0 8px 8px 0">
          <strong>❄️ 冬季最低</strong><br/><strong style="font-size:1.3em">-11°C</strong>
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:10px;border-radius:0 8px 8px 0">
          <strong>🌧️ 年均降雨</strong><br/><strong style="font-size:1.3em">477mm</strong>
        </div>
        <div style="background:#fff8e1;border-left:4px solid #e65100;padding:10px;border-radius:0 8px 8px 0">
          <strong>☀️ 年均日照</strong><br/><strong style="font-size:1.3em">1,200h</strong>
        </div>
      </div>
      <h4 style="margin-top:14px">📐 產區規模</h4>
      <p>總種植面積約 <strong>350 公頃</strong>，分布於 Burgos 與 Palencia 兩省。土壤表層多為鬆散砂質與礫石，深層含黏土，整體呈<strong>鹼性（Basic pH）</strong>。</p>
    `,
  },
  {
    type: 'content',
    icon: '💜',
    title: 'Albillo — 西班牙稀有白葡萄亮點',
    html: `
      <p><strong>Albillo</strong> 是 Arlanza 最具特色的白葡萄品種，在美國幾乎見不到，卻在西班牙日益受到關注。</p>
      <h4>🍎 香氣與風味</h4>
      <ul>
        <li><strong>初級香氣</strong>：蘋果、忍冬（Honeysuckle）、橙花</li>
        <li><strong>特殊香氣</strong>：蠟嘴（Wax Lips）、甘菊</li>
        <li><strong>口感風格</strong>：酒體類似 Chardonnay，但帶有明顯的<strong>西班牙果香</strong>與本土地域感</li>
      </ul>
      <h4>🍷 釀造特性</h4>
      <ul>
        <li><strong>酒精濃度</strong>：中等偏高，帶有細微甜感（非甜酒類）</li>
        <li><strong>橡木桶陳年</strong>：經橡木桶處理後產生豐富的<strong>乳脂感</strong>，口感更圓潤厚實</li>
        <li><strong>低酸款式</strong>：某些酒款酸度較低，適合<strong>單獨品飲</strong>，無需搭配食物</li>
      </ul>
      <h4>🍇 主要葡萄品種</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
        <div style="background:#fce8e6;border-radius:8px;padding:10px">
          <strong>🟥 紅葡萄</strong>
          <ul style="margin:6px 0 0"><li><strong>Tempranillo</strong>（主力）</li></ul>
        </div>
        <div style="background:#e8f5e9;border-radius:8px;padding:10px">
          <strong>⬜ 白葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Albillo</strong>（特色品種）</li>
            <li>Viura</li>
          </ul>
        </div>
      </div>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Dominio de Manciles Crianza',
    image: '/spain/images/labels/arlanza/dominio-de-manciles-crianza.jpg',
    caption: 'Dominio de Manciles「Crianza」，Bodegas Arlanza（Villalmanzo，Burgos）——酒標清楚標示「ARLANZA Denominación de Origen」，是這個小型 DO 少數在市場上可見的酒款之一。',
  },
  {
    type: 'quiz',
    question: '關於 Arlanza DO 的 Albillo 白葡萄，下列何者正確？',
    options: [
      'Albillo 香氣以黑醋栗和香草為主，適合長時間橡木桶熟成',
      'Albillo 帶有蘋果・忍冬・甘菊香氣，酒體類似 Chardonnay，橡木桶陳年後產生乳脂感',
      'Albillo 是 Ribera del Duero 最主要品種，產量佔全西班牙 60%',
      'Albillo 屬高酸品種，必須搭配食物才能品飲，不適合單獨享用',
    ],
    answer: 1,
    explanation: 'Albillo 帶有蘋果、忍冬、橙花、蠟嘴、甘菊的香氣，酒體與 Chardonnay 相似但帶有西班牙果香。經橡木桶陳年後產生豐富乳脂感；部分酸度較低的款式適合單獨品飲。在美國較罕見，但在西班牙日益受到關注。',
  },
  {
    type: 'summary',
    message: 'Arlanza DO 學習完成！',
    keyPoints: [
      '位於卡斯提亞-萊昂 Burgos & Palencia 省，得名於阿蘭扎河，2008 年升格 DO',
      '12 世紀修道院（聖瑪麗亞布赫多）開啟釀酒歷史——西班牙最古老產區之一',
      '極端大陸性氣候：38°C/-11°C，年降雨 477mm，年日照 1,200h，海拔 800–1,200m',
      '雙土壤格局：花崗岩砂質（優雅細膩）vs 頁岩黏土（礦物質感・結構）',
      'Albillo 白酒：蘋果・忍冬・甘菊，橡木桶後乳脂感豐富，是西班牙稀有特色品種',
    ],
  },
]

// ─── S2M1L6 — Arribes DO ────────────────────────────────────────────────────
const S2M1L6_slides = [
  {
    type: 'cover',
    icon: '🏞️',
    gradient: 'linear-gradient(135deg, #1b5e20, #388e3c)',
    title: 'Arribes DO — 杜羅河深峽谷原生品種聖地',
    subtitle: 'Level 2 · 卡斯提亞-萊昂 · Zamora & Salamanca · 2007 DO · 鄰葡萄牙邊境',
    points: [
      { icon: '🏞️', label: '峭壁梯田地形', text: '葡萄園分布在杜羅河及支流的陡峭山谷與梯田，海拔約 700m，337 公頃，跨越 47 個城鎮' },
      { icon: '🍇', label: 'Juan García 原生品種', text: 'Arribes 最核心品種，灌木藤蔓種植於 Fermoselle 附近，鮮艷紫紅色澤，豐富果香，輕至中等酒體' },
      { icon: '🌡️', label: '三氣候交匯微氣候', text: '大陸性為主，受大西洋調節，杜羅河坡地呈地中海特點；夏季 40°C，年日照 2,800h' },
    ],
  },
  {
    type: 'map',
    title: 'Arribes DO 位置',
    mapRegion: 'castilla-leon',
    description: '位於卡斯提亞-萊昂 Zamora 與 Salamanca 省西部，杜羅河谷與葡萄牙交界。葡萄園海拔約 700m，花崗岩與板岩砂質土壤，酸性土，年日照 2,800 小時。',
  },
  {
    type: 'compare',
    title: 'Arribes：風土核心特徵',
    items: [
      {
        icon: '🏔️',
        label: '花崗岩・板岩砂質土',
        desc: '土壤由花崗岩與板岩組成，含石英石與露出岩層，呈酸性（Acid pH）。土層淺，有機質含量低，葡萄根系深扎以獲取水分',
        color: '#78909c',
      },
      {
        icon: '🌊',
        label: '杜羅河峽谷微氣候',
        desc: '深峽谷形成天然屏障，坡地呈地中海特點：夏季高溫 40°C，冬季最低 -9.5°C，年降雨 561mm，年日照高達 2,800h',
        color: '#1565c0',
      },
      {
        icon: '🍇',
        label: 'Juan García 灌木老藤',
        desc: '最核心原生品種，主要在 Fermoselle 附近以灌木藤蔓（Bush Vines）種植，不需搭架，老藤自然低產，釀出的酒深具地方個性',
        color: '#6a1b9a',
      },
      {
        icon: '🌿',
        label: 'Rufete（Tinta Pinheira）',
        desc: '晚熟深色品種，與 Juan García 混釀，增添結構感。在葡萄牙鄰近 Vinho Verde 也有種植，是邊境共有品種',
        color: '#2e7d32',
      },
    ],
  },
  {
    type: 'content',
    icon: '🍇',
    title: 'Juan García 與原生品種圖景',
    html: `
      <h4>🍇 Juan García — Arribes 最核心原生品種</h4>
      <ul>
        <li><strong>主要產地</strong>：Fermoselle 附近，以灌木藤蔓（Bush Vines）種植</li>
        <li><strong>外觀</strong>：鮮艷紫紅色，年輕時色深光澤</li>
        <li><strong>香氣</strong>：豐富紅色與黑色果香，帶有草本與花香元素</li>
        <li><strong>酒體</strong>：輕至中等濃郁，清新易飲，單寧柔順</li>
      </ul>
      <h4>🍷 完整品種列表</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
        <div style="background:#fce8e6;border-radius:8px;padding:10px">
          <strong>🟥 紅葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Juan García</strong>（核心原生）</li>
            <li>Tempranillo</li>
            <li>Bruñal</li>
            <li><strong>Rufete</strong>（Tinta Pinheira，晚熟）</li>
          </ul>
        </div>
        <div style="background:#e8f5e9;border-radius:8px;padding:10px">
          <strong>⬜ 白葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Malvasía Castellana</strong></li>
            <li>（亦稱 Doña Blanca）</li>
          </ul>
        </div>
      </div>
      <p style="margin-top:10px;color:#555;font-size:0.9em">📐 總種植面積約 <strong>337 公頃</strong>，跨越 <strong>47 個城鎮</strong>，2007 年 7 月 27 日升格 DO</p>
    `,
  },
  {
    type: 'content',
    icon: '🍽️',
    title: '氣候數據與餐酒搭配',
    html: `
      <h4>🌡️ 氣候數據</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">
        <div style="background:#fce8e6;border-left:4px solid #e53935;padding:10px;border-radius:0 8px 8px 0">
          <strong>🌞 夏季最高</strong><br/><strong style="font-size:1.3em">40°C</strong>
        </div>
        <div style="background:#e3f2fd;border-left:4px solid #1565c0;padding:10px;border-radius:0 8px 8px 0">
          <strong>❄️ 冬季最低</strong><br/><strong style="font-size:1.3em">-9.5°C</strong>
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:10px;border-radius:0 8px 8px 0">
          <strong>🌧️ 年均降雨</strong><br/><strong style="font-size:1.3em">561mm</strong>
        </div>
        <div style="background:#fff8e1;border-left:4px solid #e65100;padding:10px;border-radius:0 8px 8px 0">
          <strong>☀️ 年均日照</strong><br/><strong style="font-size:1.3em">2,800h</strong>
        </div>
      </div>
      <h4 style="margin-top:14px">🍽️ Juan García 餐酒搭配推薦</h4>
      <ul>
        <li>🫘 <strong>鷹嘴豆配菠菜</strong>（西班牙傳統燉菜）</li>
        <li>🥩 <strong>碎牛肉（Milanesa）</strong>——輕盈果香與牛肉鮮味相輔</li>
        <li>🧆 <strong>羊肉肉丸（Koftas）佐葡萄乾與紅洋蔥沙拉</strong>——柔順單寧搭配香料羊肉</li>
      </ul>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Cotexa（El Hato y el Garabato）',
    image: '/spain/images/labels/arribes/cotexa-2020.jpg',
    caption: 'Cotexa 2020，El Hato y el Garabato（Formariz，Zamora）——酒標標示「Viñedo Viejo de Arribes」（Arribes 老藤），是本文提到的 Juan García 灌木老藤風格代表。',
  },
  {
    type: 'quiz',
    question: '關於 Arribes DO 的 Juan García 葡萄，下列何者正確？',
    options: [
      'Juan García 是國際品種，廣泛種植於法國和義大利',
      'Juan García 主要在 Fermoselle 附近以灌木藤蔓種植，酒色鮮艷紫紅，風格輕至中等濃郁',
      'Juan García 是高酸高單寧品種，需陳年 20 年以上才適合飲用',
      'Juan García 只能釀製甜酒，不適合釀製乾型紅酒',
    ],
    answer: 1,
    explanation: 'Juan García 是 Arribes DO 最核心的本土原生品種，主要在 Fermoselle 附近以灌木藤蔓（Bush Vines）種植。酒色鮮艷紫紅，帶有豐富果香，風格介於輕盈至中等濃郁之間，適合搭配鷹嘴豆菠菜、碎牛肉等食物。',
  },
  {
    type: 'summary',
    message: 'Arribes DO 學習完成！',
    keyPoints: [
      '位於卡斯提亞-萊昂 Zamora & Salamanca 省，杜羅河谷葡萄牙邊境，2007 年升格 DO',
      '地形特色：陡峭峽谷梯田，海拔約 700m，337 公頃，47 個城鎮',
      '氣候：大陸性 + 大西洋 + 地中海三重交匯，40°C/-9.5°C，年日照 2,800h',
      '土壤：花崗岩・板岩砂質，酸性 pH，土層淺——保留稀有原生品種的理想環境',
      'Juan García 是核心原生品種（灌木老藤・Fermoselle），Rufete 為混釀補充，Malvasía Castellana 為主力白品種',
    ],
  },
]

// ─── S2M1L7 — Cigales DO ────────────────────────────────────────────────────
const S2M1L7_slides = [
  {
    type: 'cover',
    icon: '🌹',
    gradient: 'linear-gradient(135deg, #880e4f, #c2185b)',
    title: 'Cigales DO — 梅塞塔粉紅酒傳統與紅酒崛起',
    subtitle: 'Level 2 · 卡斯提亞-萊昂 · Valladolid & Palencia · 杜羅河谷核心地帶',
    points: [
      { icon: '🌹', label: '粉紅酒傳統', text: '長期以香氣濃郁的乾型粉紅酒（Clarete）聞名，是卡斯提亞-萊昂最傳統的產區之一' },
      { icon: '🍷', label: 'Tempranillo 紅酒崛起', text: '受杜羅河谷鄰近產區影響，當地生產者正以 Tinta del País（Tempranillo）展示優質紅酒雄心' },
      { icon: '🪨', label: 'Garnacha Gris 稀有品種', text: '紅加納希的粉灰色變種，帶有杏桃・核果香氣，口感油質飽滿，風格類似 Viognier' },
    ],
  },
  {
    type: 'map',
    title: 'Cigales DO 位置',
    mapRegion: 'castilla-leon',
    description: '位於卡斯提亞-萊昂 Valladolid 與 Palencia 省，杜羅河谷中心地帶。葡萄園海拔 700–800m，沉積土壤，年均降雨 425mm，年日照 2,616 小時。',
  },
  {
    type: 'compare',
    title: 'Cigales：產區核心特徵',
    items: [
      {
        icon: '🌡️',
        label: '大陸性氣候',
        desc: '夏季最高 39°C，冬季最低 -6°C，年降雨 425mm，年日照 2,616h。高海拔（700–800m）帶來顯著日夜溫差，利於芳香物質積累',
        color: '#e53935',
      },
      {
        icon: '🪨',
        label: '第三/四紀沉積土壤',
        desc: '表層砂質與石灰岩，底層黏土。結構多樣，保水性佳，適合 Tempranillo 紅酒與 Albillo 白酒的雙重釀造需求',
        color: '#78909c',
      },
      {
        icon: '🌹',
        label: '粉紅酒（Clarete）傳統',
        desc: '香氣濃郁的乾型粉紅酒是 Cigales 長期招牌，以 Tempranillo（Tinta del País）與 Garnacha 為基礎，草莓・覆盆子・花香',
        color: '#c2185b',
      },
      {
        icon: '🏘️',
        label: '家族 majuelos 村莊園',
        desc: '酒莊向家庭式村莊葡萄園（majuelos）收購葡萄，全年耕作與採收多由家庭成員親自完成，保留最傳統的卡斯提亞農業文化',
        color: '#5d4037',
      },
    ],
  },
  {
    type: 'content',
    icon: '🍇',
    title: '葡萄品種・Garnacha Gris 稀有亮點',
    html: `
      <h4>🍇 主要葡萄品種</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
        <div style="background:#fce8e6;border-radius:8px;padding:10px">
          <strong>🟥 紅葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Tempranillo</strong>（當地稱 Tinta del País）</li>
            <li><strong>Garnacha</strong></li>
            <li><strong>Garnacha Gris</strong>（稀有粉灰色變種）</li>
          </ul>
        </div>
        <div style="background:#e8f5e9;border-radius:8px;padding:10px">
          <strong>⬜ 白葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Albillo</strong></li>
            <li><strong>Verdejo</strong></li>
          </ul>
        </div>
      </div>
      <h4 style="margin-top:14px">💜 Garnacha Gris — 粉灰色稀有變種</h4>
      <ul>
        <li><strong>外觀</strong>：Garnacha 的粉灰色突變品種，果皮色澤介於粉與灰之間</li>
        <li><strong>特性</strong>：生命力強、耐旱，偏好溫暖乾燥環境，Cigales 仍有少量種植</li>
        <li><strong>香氣</strong>：杏桃、核果（Peach/Apricot）</li>
        <li><strong>口感</strong>：飽滿、帶有<strong>油質感</strong>，風格類似 Viognier</li>
        <li><strong>用途</strong>：多用於混釀，單一品種酒款極為罕見</li>
      </ul>
      <p style="margin-top:10px;color:#555;font-size:0.9em">📐 總種植面積約 <strong>2,000 公頃</strong></p>
    `,
  },
  {
    type: 'content',
    icon: '🔄',
    title: '產業轉型：傳統家族到現代紅酒',
    html: `
      <h4>🏘️ 家族 majuelos 傳統</h4>
      <p>Cigales 是卡斯提亞-萊昂<strong>最傳統的產區之一</strong>。當地酒莊（Bodegas）向家庭式村莊葡萄園（稱為 <strong>majuelos</strong>）收購葡萄，全年的耕作與採收多由家庭成員親自完成，保留了深厚的農業文化傳統。</p>
      <h4 style="margin-top:14px">🍷 紅酒崛起</h4>
      <p>受 Ribera del Duero 等鄰近頂尖產區影響，Cigales 生產者正以當地 <strong>Tempranillo（Tinta del País）</strong>展現釀造優質紅酒的雄心，酒款品質逐年提升。</p>
      <h4 style="margin-top:14px">📜 法規更新計畫</h4>
      <ul>
        <li>產區監管委員會起草新法規，計畫納入 <strong>Cabernet Sauvignon 與 Merlot</strong> 用於紅酒</li>
        <li>新增 <strong>Sauvignon Blanc</strong> 用於粉紅酒，提升酒款多樣性</li>
        <li>已開始吸引<strong>公共與私營部門新投資</strong>，加速現代化轉型</li>
      </ul>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Museum Reserva',
    image: '/spain/images/labels/cigales/museum-reserva-2019.jpg',
    caption: 'Museum「Reserva」2019，Bodegas Frutos Villar（Cigales D.O.）——酒標清楚標示「CIGALES Denominación de Origen」，Museum 是 Cigales 產區從粉紅酒傳統轉向陳年紅酒的代表酒莊之一。',
  },
  {
    type: 'quiz',
    question: '關於 Cigales DO 的 Garnacha Gris，下列何者正確？',
    options: [
      'Garnacha Gris 是黑加納希的深色突變，帶有黑醋栗與黑莓香氣，風格類似 Cabernet Sauvignon',
      'Garnacha Gris 是紅加納希的粉灰色變種，帶有杏桃・核果香氣，口感油質飽滿，風格類似 Viognier',
      'Garnacha Gris 是 Cigales 最普遍的白葡萄品種，佔全產區種植面積 60%',
      'Garnacha Gris 需要在冷涼氣候下種植，不適合 Cigales 的乾熱環境',
    ],
    answer: 1,
    explanation: 'Garnacha Gris 是紅加納希（Garnacha）的粉灰色突變變種，生命力強、耐旱，偏好 Cigales 的溫暖乾燥環境。風味以杏桃、核果為主，口感飽滿帶油質感，風格與 Viognier 相似。目前在 Cigales 仍有少量種植，多用於混釀。',
  },
  {
    type: 'summary',
    message: 'Cigales DO 學習完成！',
    keyPoints: [
      '位於卡斯提亞-萊昂 Valladolid & Palencia 省，杜羅河谷核心地帶，2,000 公頃',
      '大陸性氣候：39°C/-6°C，年降雨 425mm，年日照 2,616h，海拔 700–800m',
      '傳統以乾型粉紅酒（Clarete）聞名，家族 majuelos 村莊園保留最純粹農業傳統',
      'Garnacha Gris 是稀有粉灰色變種：杏桃・核果・油質感，風格類似 Viognier',
      '正積極轉型：Tempranillo 紅酒、法規擬納入 Cab.Sauv./Merlot，吸引外部投資',
    ],
  },
]

// ─── S2M1L8 — Tierra de León DO ─────────────────────────────────────────────
const S2M1L8_slides = [
  {
    type: 'cover',
    icon: '🦁',
    gradient: 'linear-gradient(135deg, #6d4c41, #bf360c)',
    title: 'Tierra de León — 古羅馬傳承的原生品種聖地',
    subtitle: 'Level 2 · 卡斯提亞-萊昂 · León & Valladolid · 2007 DO',
    points: [
      { icon: '🍇', label: 'Prieto Picudo', text: '西班牙以外極罕見的原生紅品種「深色緊造」，深邃紅醋栗・黑莓・甘草・礦物感' },
      { icon: '🌊', label: '埃斯拉河谷風土', text: '受 Esla 與 Cea 兩河沿岸影響，海拔 750–800 公尺，礫石沉積日照 2,700 小時' },
      { icon: '🏛️', label: '古羅馬釀酒史', text: '釀酒歷史可追溯至古羅馬時代，2007 年正式建立 DO' },
    ],
  },
  {
    type: 'map',
    title: 'Tierra de León DO 位置',
    mapRegion: 'castilla-leon',
    geojsonUrl: '/spain/geojson/appellations/tierra-de-leon.geojson',
    description: '位於雷昂省（León）南部與巴利亞多利德省（Valladolid）北部，Esla 與 Cea 兩河沿岸，葡萄園 1,413 公頃，海拔 750–800 公尺。',
  },
  {
    type: 'content',
    icon: '🌍',
    title: 'Tierra de León：地理、氣候與風土',
    html: `
      <p>Tierra de León DO 位於西班牙西北部，釀酒歷史可追溯至<strong>古羅馬時代</strong>，2007 年正式獲得 DO 地位。產區受 <strong>Esla 與 Cea 兩條河流</strong>沿岸地區的影響，形成獨特風土。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#fff3e0;border-left:4px solid #e65100;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌡️ 氣候數據</strong><br/>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>夏季最高溫：<strong>30–35°C</strong>；冬季最低溫：<strong>−10°C</strong></li>
            <li>年均降雨量：<strong>500 毫米</strong></li>
            <li>年均日照時數：<strong>2,700 小時</strong>（西班牙日照最充裕的產區之一）</li>
          </ul>
          漫長寒冷的冬季、乾燥炎熱的夏季，大陸型氣候賦予葡萄高酸度與豐富果味。
        </div>
        <div style="background:#efebe9;border-left:4px solid #6d4c41;padding:12px;border-radius:0 10px 10px 0">
          <strong>🪨 土壤特性</strong><br/>
          沖積階地上的<strong>褐色岩石沉積物與軟質石灰岩</strong>，排水性與通風性極佳，礦物質與有機質含量較低，迫使葡萄樹深根尋求養分，釀出風味集中的酒款。
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>📐 產區規模</strong><br/>
          葡萄園總面積約 <strong>1,413 公頃</strong>，分布於雷昂省南部與巴利亞多利德省北部，跨越兩個省份。
        </div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '🍇',
    title: 'Prieto Picudo — 極罕見的原生靈魂品種',
    html: `
      <p><strong>Prieto Picudo</strong> 是 Tierra de León 最具代表性的原生紅葡萄品種，在西班牙以外地區<strong>極為罕見</strong>，是整個產區國際知名度的關鍵支柱。</p>
      <h4>📖 名稱含義</h4>
      <ul>
        <li><strong>Prieto</strong>：意為「深色皮膚」或「被擠壓 / 緊湊的」，形容其<strong>緊密的果串</strong></li>
        <li><strong>Picudo</strong>：意為「尖銳的」，描述其<strong>形狀如尖峰或松子</strong></li>
      </ul>
      <h4>🌱 生長特性</h4>
      <ul>
        <li>偏好<strong>艱難地形與乾熱環境</strong>，具備極高耐旱性</li>
        <li>適應 Tierra de León 大陸型極端氣候</li>
      </ul>
      <h4>🍷 紅酒風格</h4>
      <ul>
        <li><strong>顏色</strong>：深邃，接近不透明</li>
        <li><strong>結構</strong>：單寧充足、酸度良好</li>
        <li><strong>風味</strong>：紅醋栗、黑莓、甘草、礦物感</li>
        <li><strong>橡木桶結合</strong>：能與橡木桶完美整合，賦予更複雜的層次</li>
      </ul>
      <h4>🌹 粉紅酒風格</h4>
      <ul>
        <li><strong>風格</strong>：輕盈，香氣豐富</li>
        <li><strong>風味</strong>：草莓、覆盆子、桃子、柑橘與花香</li>
        <li><strong>搭餐</strong>：適合搭配 Fideuá（西班牙式海鮮麵）</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: 'Tierra de León 法定品種全覽',
    items: [
      {
        icon: '🟥',
        label: 'Prieto Picudo（靈魂品種）',
        desc: '產區最具代表性的原生紅品種，深色緊湊果串。紅酒深邃高單寧；粉紅酒輕盈多花香',
        color: '#b71c1c',
      },
      {
        icon: '🍒',
        label: 'Mencía / Tempranillo / Garnacha',
        desc: '其他法定紅品種。Mencía 帶礦石感；Tempranillo 提供結構；Garnacha 增添圓潤果味',
        color: '#c62828',
      },
      {
        icon: '⬜',
        label: 'Albarín（特色白品種）',
        desc: '產區特有本土白品種，風味獨特，帶有草本、花香與清新礦石感，在西班牙其他地區罕見',
        color: '#f9a825',
      },
      {
        icon: '🌿',
        label: 'Verdejo / Godello / Malvasía / Palomino',
        desc: '其他法定白品種。Godello 表現優雅；Verdejo 清爽草本；Malvasía 具花香；Palomino 中性',
        color: '#2e7d32',
      },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Pricum「Prieto Picudo」',
    image: '/spain/images/labels/tierra-de-leon/pricum-prieto-picudo.jpg',
    caption: 'Pricum「Prieto Picudo」，Tierra de León D.O.——酒標直接以本文提到的招牌原生品種「Prieto Picudo」命名，是產區最具代表性的單一品種裝瓶之一。',
  },
  {
    type: 'quiz',
    question: 'Prieto Picudo 名稱中「Picudo」的含義是什麼？此品種最主要的生長特性為何？',
    options: [
      '「Picudo」意為「圓潤的」，品種喜好濕潤涼爽的大西洋氣候',
      '「Picudo」意為「尖銳的」，描述形狀如尖峰或松子；品種偏好艱難地形與乾熱環境，耐旱性極高',
      '「Picudo」意為「芳香的」，指其獨特的玫瑰花香氣特徵',
      '「Picudo」意為「深色的」，與「Prieto」一樣都是描述深色特徵',
    ],
    answer: 1,
    explanation: 'Prieto Picudo 的名稱中，「Prieto」意為「深色/緊湊」，描述緊密的果串；「Picudo」意為「尖銳的」，描述形狀如尖峰或松子。品種偏好艱難地形與乾熱環境，耐旱性極高，非常適應 Tierra de León 的大陸型極端氣候。',
  },
  {
    type: 'summary',
    message: 'Tierra de León 學習完成！',
    keyPoints: [
      '2007 年建立 DO，但釀酒史可追溯至古羅馬時代，位於雷昂省南部與巴利亞多利德省北部',
      '受 Esla 與 Cea 兩河影響，海拔 750–800 公尺，1,413 公頃',
      '大陸型氣候：夏季 30–35°C / 冬季 −10°C，年雨 500mm，日照 2,700 小時',
      '土壤：沖積階地褐色岩石沉積物＋軟質石灰岩，排水通風極佳',
      'Prieto Picudo：「深色尖造」原生紅品種，西班牙以外極罕見；紅酒深邃高單寧，粉紅輕盈芬芳',
      'Albarín 是產區特有本土白品種；法定紅品種另含 Mencía、Tempranillo、Garnacha',
    ],
  },
]

// ─── S2M1L9 — Tierra del Vino de Zamora DO ──────────────────────────────────
const S2M1L9_slides = [
  {
    type: 'cover',
    icon: '🍶',
    gradient: 'linear-gradient(135deg, #4e342e, #bf360c)',
    title: 'Tierra del Vino de Zamora — 葡萄酒之地',
    subtitle: 'Level 2 · 卡斯提亞-萊昂 · Zamora & Salamanca · 2007 DO',
    points: [
      { icon: '🌾', label: '極端乾性大陸型氣候', text: '年雨不足 400mm、日照超 2,800 小時，夏乾熱冬極寒，深厚沖積土鑄就卓越陳年潛力' },
      { icon: '🍑', label: 'Malvasía Fina 明星白酒', text: '白桃・野花・綠杏仁・羅勒・海貝殼，酒精 13.5–15%，陳年潛力超 10 年' },
      { icon: '🍷', label: 'Tempranillo 比 Toro 稍輕', text: '同樣來自杜羅河谷，但沙質沖積土釀出風格更優雅的紅酒' },
    ],
  },
  {
    type: 'map',
    title: 'Tierra del Vino de Zamora DO 位置',
    mapRegion: 'castilla-leon',
    geojsonUrl: '/spain/geojson/appellations/tierra-del-vino-de-zamora.geojson',
    description: '位於薩莫拉省東南部，橫跨杜羅河兩岸，涵蓋 56 個市鎮（46 在薩莫拉省、10 在薩拉曼卡省）。總區域面積 1,799 平方公里，葡萄園 633 公頃。',
  },
  {
    type: 'content',
    icon: '🌍',
    title: '地理、氣候與風土',
    html: `
      <p>Tierra del Vino de Zamora 名稱在當地語中即意為<strong>「葡萄酒之地」</strong>。產區位於薩莫拉省東南部，橫跨杜羅河兩岸，多條支流（Valderaduey、Guareña、Valparaíso、Ribera de Campeán）流經其中，塑造了多樣的土壤結構。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#fff3e0;border-left:4px solid #e65100;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌡️ 氣候數據（極端乾性大陸型）</strong><br/>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>夏季平均最高溫：<strong>23°C</strong>；冬季最低溫：<strong>−11°C</strong></li>
            <li>年均降雨量：<strong>不足 400 毫米</strong>（西班牙最乾燥產區之一）</li>
            <li>年均日照時數：<strong>超過 2,800 小時</strong></li>
          </ul>
          冬季極度寒冷、夏季乾旱炎熱，極大的年溫差造就葡萄的高酸度與豐富果味。
        </div>
        <div style="background:#efebe9;border-left:4px solid #6d4c41;padding:12px;border-radius:0 10px 10px 0">
          <strong>⛰️ 地理與規模</strong><br/>
          海拔 <strong>700–900 公尺</strong>（平均約 750 公尺），總區域面積 <strong>1,799 平方公里</strong>，葡萄園 <strong>633 公頃</strong>，涵蓋 56 個市鎮。
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>🪨 土壤層次</strong><br/>
          主要為<strong>沖積土</strong>：表土深厚、滲透性佳、持水力強，但有機質含量低。<br/>
          ・底層富含<strong>黏土</strong>（保水儲礦）<br/>
          ・平原地區多<strong>砂質</strong>（根瘤蚜保護）<br/>
          ・山坡與山頂多<strong>礫石、卵石</strong>（排水、蓄熱）
        </div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '🍑',
    title: 'Malvasía Fina — 明星白葡萄品種',
    html: `
      <p><strong>Malvasía Fina</strong> 是 Tierra del Vino de Zamora 最引人注目的白葡萄品種，是提升產區白酒聲譽的關鍵。</p>
      <h4>🌸 獨特香氣輪廓</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
        <div style="background:#fff8e1;border-radius:8px;padding:10px;font-size:0.9rem">🍑 白桃</div>
        <div style="background:#fff8e1;border-radius:8px;padding:10px;font-size:0.9rem">🌸 野花</div>
        <div style="background:#fff8e1;border-radius:8px;padding:10px;font-size:0.9rem">🌿 綠杏仁</div>
        <div style="background:#fff8e1;border-radius:8px;padding:10px;font-size:0.9rem">🌿 羅勒</div>
        <div style="background:#e0f7fa;border-radius:8px;padding:10px;font-size:0.9rem">🐚 海貝殼（礦石鹽感）</div>
        <div style="background:#fce4ec;border-radius:8px;padding:10px;font-size:0.9rem">✨ 甜感尾韻</div>
      </div>
      <h4 style="margin-top:14px">🍷 口感特質</h4>
      <ul>
        <li><strong>甜感</strong>（Sweet）：酒款呈現明顯甜潤口感</li>
        <li><strong>酒體</strong>：中等至輕盈</li>
        <li><strong>酸度</strong>：中低</li>
        <li><strong>酒精濃度</strong>：<strong>13.5–15%</strong>（相對偏高）</li>
      </ul>
      <h4>🥂 侍酒與陳年建議</h4>
      <ul>
        <li><strong>飲用溫度</strong>：<strong>7–13°C</strong></li>
        <li><strong>酒杯</strong>：白葡萄酒杯，無需醒酒</li>
        <li><strong>陳年潛力</strong>：<strong>10 年以上</strong>卓越陳年能力</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: 'Tierra del Vino de Zamora 葡萄品種',
    items: [
      {
        icon: '🍷',
        label: 'Tempranillo（主導紅品種）',
        desc: '與鄰近 Toro DO 同樣以 Tempranillo 為核心，但因沙質沖積土壤風格比 Toro 稍輕盈、更優雅，適合喜愛中等酒體的飲者',
        color: '#b71c1c',
      },
      {
        icon: '🍑',
        label: 'Malvasía Fina（明星白品種）',
        desc: '白桃・野花・綠杏仁・羅勒・海貝殼。中低酸度・甜感・酒精 13.5–15%，陳年超 10 年，是產區白酒聲望的支柱',
        color: '#f9a825',
      },
      {
        icon: '🍊',
        label: 'Moscatel de Grano Menudo',
        desc: '小粒麝香葡萄，帶有濃郁玫瑰花水、橙花、荔枝香氣，可釀造芳香白酒或甜型酒款',
        color: '#e65100',
      },
      {
        icon: '🌿',
        label: 'Verdejo',
        desc: '草本清爽白品種，為產區白酒提供酸度骨架與青檸、茴香清新感，與 Malvasía 風格互補',
        color: '#2e7d32',
      },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Fariña「Tinto Zamora」',
    image: '/spain/images/labels/tierra-del-vino-de-zamora/farina-tinto-zamora-1999.jpg',
    caption: 'Bodegas Fariña「Tinto Zamora」1999，Vino de la Tierra de Zamora（Casaseca de las Chanas，Zamora）——Fariña 是薩莫拉葡萄酒之地一帶歷史悠久的家族酒莊，酒標描繪薩莫拉河岸城景，是產區傳統紅酒風貌的代表。',
  },
  {
    type: 'quiz',
    question: 'Tierra del Vino de Zamora 的 Malvasía Fina，以下哪項最準確描述其特點？',
    options: [
      '高酸乾型白酒，帶有青草與礦石感，適飲期 1–2 年',
      '帶有白桃、野花、綠杏仁、羅勒與海貝殼香氣；中低酸度、甜感；酒精 13.5–15%；陳年潛力超 10 年',
      '濃郁板岩礦石感紅酒，與 Prieto Picudo 風格相近',
      '氣泡酒品種，採傳統法釀造，帶有麵包與柑橘香氣',
    ],
    answer: 1,
    explanation: 'Malvasía Fina 是 Tierra del Vino de Zamora 的明星白品種，以白桃、野花、綠杏仁、羅勒與海貝殼的獨特香氣著稱，酒款帶有甜感、酒精濃度 13.5–15%、中低酸度，具備超過 10 年的卓越陳年潛力，建議 7–13°C 侍酒。',
  },
  {
    type: 'summary',
    message: 'Tierra del Vino de Zamora 學習完成！',
    keyPoints: [
      '名稱意為「葡萄酒之地」，2007 年升格 DO；56 個市鎮，633 公頃葡萄園',
      '極端乾性大陸型氣候：夏 23°C / 冬 −11°C，年雨 <400mm，日照 >2,800 小時',
      '深厚沖積土：底層黏土＋平原砂質＋山坡礫石，賦予卓越陳年潛力',
      'Tempranillo 為核心紅品種，比鄰近 Toro 風格稍輕優雅',
      'Malvasía Fina：白桃・野花・綠杏仁・羅勒・海貝殼；甜感・酒精 13.5–15%；陳年超 10 年',
    ],
  },
]

// ─── S2M1L10 — Toro DO ───────────────────────────────────────────────────────
const S2M1L10_slides = [
  {
    type: 'cover',
    icon: '🐂',
    gradient: 'linear-gradient(135deg, #6d1f00, #c0392b)',
    title: 'Toro DO — 杜羅河谷的豪邁巨人',
    subtitle: 'Level 2 · 卡斯提亞-萊昂 · Zamora & Valladolid',
    points: [
      { icon: '🌵', label: '極端乾燥高海拔風土', text: '年雨 300–400mm、日照 2,600–3,000 小時，夏季高達 40°C，650–825 公尺沙質貧瘠土壤' },
      { icon: '🍒', label: 'Tinta de Toro 核心靈魂', text: 'Tempranillo 的本地變種，帶有櫻桃、無花果乾、雪松、菸草與蒔蘿香氣，酒精 13.5–15%' },
      { icon: '🏆', label: '卓越陳年實力', text: '特級珍藏（Gran Reserva）陳年潛力達 20 年，是西班牙最具收藏價值的紅酒之一' },
    ],
  },
  {
    type: 'map',
    title: 'Toro DO 位置',
    mapRegion: 'castilla-leon',
    geojsonUrl: '/spain/geojson/appellations/toro.geojson',
    description: '位於薩莫拉省東部與瓦亞多利德省西部交界，沿杜羅河延伸。葡萄園面積 5,550 公頃，海拔 650–825 公尺。',
  },
  {
    type: 'content',
    icon: '🌍',
    title: '地理、氣候與土壤',
    html: `
      <p>Toro 的聲譽可追溯至<strong>中世紀</strong>，近二十年藉由新一代釀酒師引進現代化設備（不鏽鋼發酵槽等）而重新在國際舞台嶄露頭角。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#fbe9e7;border-left:4px solid #bf360c;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌡️ 氣候數據（極端乾燥大陸型）</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>夏季最高溫：<strong>40°C</strong>；冬季最低溫：<strong>−10°C</strong></li>
            <li>年均降雨量：<strong>300–400 毫米</strong>（全西班牙最乾燥產區之一）</li>
            <li>年均日照：<strong>2,600–3,000 小時</strong></li>
          </ul>
          極大的日夜溫差與乾燥環境使葡萄皮厚、糖分集中，造就酒款的深郁顏色與豐沛果香。
        </div>
        <div style="background:#efebe9;border-left:4px solid #6d4c41;padding:12px;border-radius:0 10px 10px 0">
          <strong>⛰️ 地理規模</strong><br/>
          海拔 <strong>650–825 公尺</strong>，葡萄園總面積 <strong>5,550 公頃</strong>，橫跨薩莫拉省東部與瓦亞多利德省西部。
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>🪨 土壤特性</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li><strong>南部</strong>：沖積土或黏土上的<strong>砂質土</strong>——天然抵禦根瘤蚜（Phylloxera），部分老藤無需嫁接</li>
            <li><strong>東北部</strong>：含有<strong>石灰岩</strong>——提升礦石感與酸度骨架</li>
          </ul>
        </div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '🍒',
    title: 'Tinta de Toro — 核心靈魂品種',
    html: `
      <p><strong>Tinta de Toro</strong> 是 Tempranillo 在當地千百年馴化後形成的<strong>本地變種</strong>，皮更厚、糖分更高，能抵抗 Toro 的極端乾旱與高熱，釀出比一般 Tempranillo 更為強勁的酒款。</p>
      <h4>🌸 香氣輪廓</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
        <div style="background:#fce4ec;border-radius:8px;padding:10px;font-size:0.9rem">🍒 成熟櫻桃</div>
        <div style="background:#fce4ec;border-radius:8px;padding:10px;font-size:0.9rem">🌿 無花果乾</div>
        <div style="background:#e8eaf6;border-radius:8px;padding:10px;font-size:0.9rem">🪵 雪松</div>
        <div style="background:#e8eaf6;border-radius:8px;padding:10px;font-size:0.9rem">🚬 菸草</div>
        <div style="background:#f3e5f5;border-radius:8px;padding:10px;font-size:0.9rem;grid-column:span 2">🌿 蒔蘿（Dill）——Toro 標誌性香料辛香</div>
      </div>
      <h4 style="margin-top:14px">🍷 口感剖面</h4>
      <ul>
        <li><strong>酒型</strong>：乾型（Dry）</li>
        <li><strong>酒體</strong>：中等至飽滿</li>
        <li><strong>單寧与酸度</strong>：中高</li>
        <li><strong>酒精濃度</strong>：<strong>13.5–15%</strong></li>
      </ul>
      <h4>🏆 陳年分級指南</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        <div style="background:#fff3e0;border-radius:8px;padding:10px;font-size:0.85rem"><strong>Young（年輕）</strong><br/>適飲峰值：約 <strong>2 年</strong></div>
        <div style="background:#fff3e0;border-radius:8px;padding:10px;font-size:0.85rem"><strong>Crianza（陳年）</strong><br/>適飲峰值：<strong>5–9 年</strong></div>
        <div style="background:#fbe9e7;border-radius:8px;padding:10px;font-size:0.85rem"><strong>Reserva（珍藏）</strong><br/>適飲峰值：約 <strong>13 年</strong></div>
        <div style="background:#fbe9e7;border-radius:8px;padding:10px;font-size:0.85rem"><strong>Gran Reserva（特級珍藏）</strong><br/>適飲峰值：約 <strong>20 年</strong></div>
      </div>
    `,
  },
  {
    type: 'image',
    title: '🏷️ 酒標實例：Numanthia「Termes」',
    image: '/spain/images/labels/toro/numanthia-termes.png',
    caption: 'Numanthia 酒莊入門款「Termes」，100% Tinta de Toro——Numanthia 由 LVMH 集團持有，是 Toro DO 現代化復興的代表酒莊之一。',
  },
  {
    type: 'image',
    title: '🏷️ 酒標實例：Pintia（Vega Sicilia 旗下）',
    image: '/spain/images/labels/toro/pintia.png',
    caption: 'Pintia，Bodegas y Viñedos Pintia, S.A.——由傳奇酒莊 Vega Sicilia（Tempos Vega Sicilia）於 Toro DO 投資設立，酒標清楚標示「Denominación de Origen TORO」。',
  },
  {
    type: 'image',
    title: '🏷️ 酒標實例：Maurodos「Prima」',
    image: '/spain/images/labels/toro/maurodos-prima-2013.png',
    caption: 'Maurodos「Prima」2013，Bodegas y Viñedos Maurodos——由 Mariano García（前 Vega Sicilia 首席釀酒師、Bodegas Mauro 創辦人）在 Toro DO 打造的紅酒，酒標明確標示「TORO Denominación de Origen」。',
  },
  {
    type: 'quiz',
    question: '關於 Toro DO 的 Tinta de Toro，以下哪項描述最準確？',
    options: [
      '是 Garnacha 的本地別名，以花香清爽著稱，酒精 11–12%',
      'Tempranillo 的本地變種，帶有成熟櫻桃、無花果乾與蒔蘿香氣；中高單寧、酒精 13.5–15%；Gran Reserva 陳年達 20 年',
      '與 Ribera del Duero 完全相同的品種，風格上無差異',
      '主要用來釀造氣泡酒，不適合長期陳年',
    ],
    answer: 1,
    explanation: 'Tinta de Toro 是 Tempranillo 在薩莫拉省的本地變種，皮更厚、糖分更高，釀出酒體強勁的乾型紅酒，帶有成熟櫻桃、無花果乾、雪松、菸草與蒔蘿的標誌性香氣，酒精 13.5–15%，中高單寧與酸度。Gran Reserva 等級陳年潛力達 20 年。',
  },
  {
    type: 'summary',
    message: 'Toro DO 學習完成！',
    keyPoints: [
      '中世紀歷史產區，近年藉現代化設備復興，以豐沛、成熟、強勁紅酒重返國際舞台',
      '極端乾燥大陸型氣候：40°C/−10°C，年雨 300–400mm，日照 2,600–3,000 小時',
      '5,550 公頃葡萄園，海拔 650–825 公尺；南部砂質土（根瘡蚜天然保護）、東北部石灰岩',
      'Tinta de Toro（Tempranillo 本地變種）：成熟櫻桃・無花果乾・雪松・菸草・蒔蘿；酒精 13.5–15%',
      '四級陳年指南：Young 2yr → Crianza 5–9yr → Reserva 13yr → Gran Reserva 20yr',
      '侍酒：16–20°C，醒酒 1 小時，Universal 酒杯，優質酒款陳年潛力 10 年以上',
    ],
  },
]

// ─── S2M1L11 — Sierra de Salamanca VC ───────────────────────────────────────
const S2M1L11_slides = [
  {
    type: 'cover',
    icon: '🏔️',
    gradient: 'linear-gradient(135deg, #1b5e20, #388e3c)',
    title: 'Sierra de Salamanca — UNESCO 生物圈保護區的梯田葡萄園',
    subtitle: 'Level 2 · Vino de Calidad · 卡斯提亞-萊昂 · 2010 年受保護',
    points: [
      { icon: '🌿', label: 'UNESCO 生物圈保護區', text: '全境 2006 年獲 UNESCO 列為生物圈保護區，部分區域位於 Las Batuecas–Sierra de Francia 自然公園內' },
      { icon: '🍑', label: 'Rufete 原生靈魂品種', text: '又稱 Tinta Pinheira，釀出李子・鹹鮮大地的飽滿紅酒，單寧豐厚、具卓越陳年潛力' },
      { icon: '🌧️', label: '年雨 1,400mm — 反常豐沛', text: '杜羅河谷產區中降雨最豐沛者，Alagón 河梯田海拔 400–1,000 公尺，天然酸度突出' },
    ],
  },
  {
    type: 'map',
    title: 'Sierra de Salamanca VC 位置',
    mapRegion: 'castilla-leon',
    geojsonUrl: '/spain/geojson/appellations/sierra-de-salamanca.geojson',
    description: '薩拉曼卡省南部，Alagón 河上方梯田地帶，涵蓋 Cepeda、Miranda del Castañar、Mogarraz 等市鎮。葡萄園面積僅 90.33 公頃，由六家酒莊共同守護。',
  },
  {
    type: 'content',
    icon: '🌍',
    title: '地理、氣候與獨特風土',
    html: `
      <p>Sierra de Salamanca 是西班牙杜羅河谷最與眾不同的產區之一——不是因為強勁，而是因為<strong>清涼、多雨與梯田</strong>的反差風土。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌧️ 氣候數據（大西洋影響型）</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>夏季均溫：<strong>24°C</strong>；冬季均溫：<strong>0°C</strong></li>
            <li>年均降雨量：<strong>1,400 毫米</strong>——比 Ribera del Duero 高出 4–5 倍，為杜羅河谷區最豐沛</li>
          </ul>
          豐沛雨水加上高海拔（400–1,000公尺），賦予葡萄<strong>天然高酸度</strong>，這是與周邊乾燥產區最大的差異。
        </div>
        <div style="background:#f3e5f5;border-left:4px solid #6a1b9a;padding:12px;border-radius:0 10px 10px 0">
          <strong>🏔️ 地理與生態地位</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>梯田葡萄園位於 <strong>Alagón 河</strong>上方，海拔 400–1,000 公尺</li>
            <li>部分區域位於 <strong>Las Batuecas–Sierra de Francia 自然公園</strong></li>
            <li><strong>2006 年</strong>全境被 UNESCO 列為<strong>生物圈保護區</strong></li>
            <li>面積僅 <strong>90.33 公頃</strong>，由 <strong>6 家</strong>堅守原生品種的酒莊共同維護</li>
          </ul>
        </div>
        <div style="background:#efebe9;border-left:4px solid #6d4c41;padding:12px;border-radius:0 10px 10px 0">
          <strong>🪨 土壤</strong>：<strong>花崗岩與板岩</strong>（Granite-Slate）——低有機質、排水良好，為葡萄提供礦石感骨架
        </div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '🍇',
    title: 'Rufete（Tinta Pinheira）— 靈魂原生品種',
    html: `
      <p><strong>Rufete</strong>（葡語又稱 <strong>Tinta Pinheira</strong>）是 Sierra de Salamanca 成功的關鍵，六家酒莊共同堅信這個原生品種的潛力。</p>
      <h4>🌸 品種特性</h4>
      <ul>
        <li><strong>深色皮膚、晚熟品種</strong>——需要足夠的生長季才能完全發揮實力</li>
        <li>充足的<strong>單寧</strong>與良好的<strong>酸度</strong>，確保長期陳年潛力</li>
        <li>若果實未完全成熟，酒中會出現<strong>薄荷</strong>的清涼香氣（此為品種特徵而非缺陷）</li>
      </ul>
      <h4>🍷 風味輪廓</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
        <div style="background:#fce4ec;border-radius:8px;padding:10px;font-size:0.9rem">🍑 豐富李子</div>
        <div style="background:#e8f5e9;border-radius:8px;padding:10px;font-size:0.9rem">🌿 薄荷（未熟時）</div>
        <div style="background:#efebe9;border-radius:8px;padding:10px;font-size:0.9rem;grid-column:span 2">🌍 鹹鮮大地色調（Umami-Earthy）</div>
      </div>
      <p style="margin-top:10px">酒體<strong>飽滿</strong>，口感複雜、具地方特色，是西班牙最值得關注的稀有原生品種之一。</p>
      <h4>🍽️ 餐酒搭配</h4>
      <ul>
        <li>🐷 <strong>乳豬</strong>（Leitao a faia）</li>
        <li>🫀 <strong>歐芹醬烤羊心</strong></li>
        <li>🥩 <strong>俄羅斯酸奶牛肉</strong>（Beef Stroganoff）</li>
      </ul>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Lidia「100% Rufete」',
    image: '/spain/images/labels/sierra-de-salamanca/lidia-rufete.jpg',
    caption: 'Lidia，100% Rufete，D.O.P Sierra de Salamanca——酒標直接標示品種比例，是本文提到的核心原生品種 Rufete 單一品種裝瓶的代表。',
  },
  {
    type: 'quiz',
    question: '以下哪項最準確描述 Sierra de Salamanca VC 的 Rufete 品種特點？',
    options: [
      '清爽白葡萄品種，帶有草本與柑橘香氣，不適合陳年',
      '深色皮晚熟紅品種，帶有李子・鹹鮮大地香氣；未熟時出現薄荷；單寧充足，具長年陳年潛力',
      '與 Tempranillo 完全相同，僅為方言別名，釀造風格無差異',
      '以氣泡酒聞名，採傳統法釀造，帶有烤麵包與蜂蜜香',
    ],
    answer: 1,
    explanation: 'Rufete（Tinta Pinheira）是 Sierra de Salamanca 的核心原生紅品種，深色皮、晚熟，釀出酒體飽滿、帶有李子與鹹鮮大地香氣的複雜紅酒。其充足單寧與良好酸度賦予卓越陳年能力；若果實未完全成熟，則會出現薄荷清涼香氣。',
  },
  {
    type: 'summary',
    message: 'Sierra de Salamanca 學習完成！',
    keyPoints: [
      '薩拉曼卡省南部 Vino de Calidad（2010年受保護），全境為 2006 年 UNESCO 生物圈保護區',
      '梯田葡萄園位於 Alagón 河上方，海拔 400–1,000 公尺；花崗岩與板岩土壤',
      '年均降雨 1,400mm——杜羅河谷最豐沛，賦予天然高酸度（與鄰近乾燥產區截然不同）',
      '核心品種 Rufete（Tinta Pinheira）：李子・鹹鮮大地・薄荷（未熟時）；飽滿酒體・長年陳年潛力',
      '面積僅 90.33 公頃，由 6 家堅守原生品種的酒莊共同維護，是西班牙最珍稀的精品產區之一',
    ],
  },
]

// ─── S2M1L12 — Valles de Benavente VC ───────────────────────────────────────
const S2M1L12_slides = [
  {
    type: 'cover',
    icon: '🏔️',
    gradient: 'linear-gradient(135deg, #37474f, #78909c)',
    title: 'Valles de Benavente — 薩莫拉省北部高原葡萄酒之地',
    subtitle: 'Level 2 · Vino de Calidad · 卡斯提亞-萊昂 · 薩莫拉省',
    points: [
      { icon: '🌵', label: '極端大陸型氣候', text: '夏季高達 40°C、冬季低至 -15°C，年雨僅 350–500mm，日照 2,800 小時' },
      { icon: '🏜️', label: '砂質排水土壤', text: '低肥沃度砂質土，排水與通風極佳，葡萄藤在逆境中凝聚風味' },
      { icon: '🍷', label: '原生品種多元', text: 'Tempranillo、Prieto Picudo、Mencía 紅酒；Verdejo、Malvasía 白酒' },
    ],
  },
  {
    type: 'map',
    title: 'Valles de Benavente VC 位置',
    mapRegion: 'castilla-leon',
    geojsonUrl: '/spain/geojson/appellations/valles-de-benavente.geojson',
    description: '位於薩莫拉省北部，葡萄園面積 361 公頃，分布於高原砂質地帶。分級為 Vino de Calidad（VC），地位僅次於 DO。',
  },
  {
    type: 'content',
    icon: '🌍',
    title: '風土、氣候與產區定位',
    html: `
      <p>Valles de Benavente 是薩莫拉省北部的 <strong>Vino de Calidad（VC）</strong>產區，在西班牙葡萄酒分級制度中地位<strong>僅次於法定產區（DO）</strong>，代表具備地理標示的優質葡萄酒。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#eceff1;border-left:4px solid #546e7a;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌡️ 氣候數據（極端乾燥大陸型）</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>夏季最高溫：<strong>40°C</strong>；冬季最低溫：<strong>−15°C</strong>（溫差高達 55°C）</li>
            <li>年均降雨量：<strong>350–500 毫米</strong></li>
            <li>年均日照：<strong>2,800 小時</strong></li>
          </ul>
          極大的年溫差造就葡萄高酸度與集中果香；充足日照確保充分成熟。
        </div>
        <div style="background:#efebe9;border-left:4px solid #6d4c41;padding:12px;border-radius:0 10px 10px 0">
          <strong>🪨 土壤特性</strong><br/>
          以<strong>砂質土壤</strong>為主——肥沃度低，但<strong>排水與通風極佳</strong>，迫使葡萄根系深扎求水，凝聚風味複雜度。砂質土同時提供對根瘡蚜（Phylloxera）的天然保護。
        </div>
        <div style="background:#e3f2fd;border-left:4px solid #1565c0;padding:12px;border-radius:0 10px 10px 0">
          <strong>📋 產區規模與定位</strong><br/>
          葡萄園面積：<strong>361 公頃</strong><br/>
          分級：<strong>Vino de Calidad（VC）</strong>——西班牙葡萄酒分級中僅次於 DO 的優質等級，代表具有明確地理標示的高品質葡萄酒
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: 'Valles de Benavente 葡萄品種',
    items: [
      {
        icon: '🍷',
        label: 'Tempranillo（核心紅品種）',
        desc: '西班牙最重要的紅品種，在高原砂質土壤與極端溫差下釀造出結構扎實、果味豐沛的紅酒，具良好陳年潛力',
        color: '#b71c1c',
      },
      {
        icon: '🫐',
        label: 'Prieto Picudo（核心紅品種）',
        desc: '卡斯提亞-萊昂原生品種，意為「尖銳黑皮」，耐乾熱，釀出深色濃郁、帶黑莓與紫羅蘭氣息的個性紅酒',
        color: '#4a148c',
      },
      {
        icon: '🍒',
        label: 'Mencía',
        desc: '源自西北部（Bierzo/加利西亞），在此呈現稍不同的風格——花香與紅果並存，單寧細緻，增加產區多樣性',
        color: '#880e4f',
      },
      {
        icon: '🌿',
        label: 'Verdejo（核心白品種）',
        desc: '卡斯提亞-萊昂白酒代表品種，草本清爽、柑橘與茴香香氣，帶苦杏仁尾韻，為產區提供出色白酒選擇',
        color: '#2e7d32',
      },
      {
        icon: '🌸',
        label: 'Malvasía（白品種）',
        desc: '芳香型白品種，花香、桃子與杏仁香氣，口感圓潤，與 Verdejo 的清爽風格形成對比',
        color: '#f57f17',
      },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Valzuquino Rosado',
    image: '/spain/images/labels/valles-de-benavente/valzuquino-rosado-2020.png',
    caption: 'Valzuquino「Rosado」2020，Prieto Picudo，Bodegas y Viñedos Andrea Gutiérrez——D.O.P Valles de Benavente，以本文提到的核心品種 Prieto Picudo 釀成的粉紅酒。',
  },
  {
    type: 'quiz',
    question: 'Valles de Benavente VC 的「VC」分級，在西班牙葡萄酒法規中代表什麼？',
    options: [
      '法定產區（DO），與 Ribera del Duero 同等地位',
      '特優法定產區（DOCa），西班牙最高等級',
      '具備地理標示的優質葡萄酒（Vino de Calidad），地位僅次於 DO',
      '地區餐酒（Vino de la Tierra），屬於最基礎的地理標示等級',
    ],
    answer: 2,
    explanation: 'VC（Vino de Calidad con Indicación Geográfica）是西班牙葡萄酒分級中地位僅次於 DO（法定產區）的優質等級，代表具備明確地理標示的高品質葡萄酒，但尚未達到完整 DO 的所有認證要求。',
  },
  {
    type: 'summary',
    message: 'Valles de Benavente 學習完成！',
    keyPoints: [
      '薩莫拉省北部 Vino de Calidad（VC），地位僅次於 DO，葡萄園 361 公頃',
      '極端大陸型氣候：40°C/−15°C，年雨 350–500mm，日照 2,800 小時',
      '砂質土壤：低肥沃度、排水通風佳，並提供對根瘡蚜的天然保護',
      '紅品種：Tempranillo＋Prieto Picudo（核心）＋Mencía；白品種：Verdejo＋Malvasía',
      '與薩莫拉省南部鄰近 Toro、Tierra del Vino de Zamora 同屬杜羅河谷體系，但位於省境最北端',
    ],
  },
]

// ─── S2M1L13 — Valtiendas VC ────────────────────────────────────────────────
const S2M1L13_slides = [
  {
    type: 'cover',
    icon: '🪨',
    gradient: 'linear-gradient(135deg, #795548, #bcaaa4)',
    title: 'Valtiendas VC — 杜拉通河畔的白堊高原紅酒',
    subtitle: 'Level 2 · Vino de Calidad · 塞哥維亞省 · 2004 年成立',
    points: [
      { icon: '⛰️', label: '海拔 920 公尺', text: '比杜羅河谷平均高出 170 公尺，低溫緩熟，葡萄複雜度更高、產量更低' },
      { icon: '🪨', label: '鈣質白堊土＋地表滾石', text: '高濃度白堊鈣質土賦予礦石感，滾石反射日照、調節夜間溫度' },
      { icon: '🌞', label: '年日照 3,000 小時', text: '充足日照確保熟成，Tempranillo 為核心；Albillo 為唯一法定白品種' },
    ],
  },
  {
    type: 'map',
    title: 'Valtiendas VC 位置',
    mapRegion: 'castilla-leon',
    geojsonUrl: '/spain/geojson/appellations/valtiendas.geojson',
    description: '完全位於塞哥維亞省北部，沿杜拉通河（Duratón River）荒野延伸。葡萄園 170 公頃，海拔約 920 公尺。',
  },
  {
    type: 'content',
    icon: '🌍',
    title: '地理、氣候與白堊土風土',
    html: `
      <p>Valtiendas 成立於 <strong>2004 年</strong>，是杜羅河谷體系中海拔最高的 Vino de Calidad 產區，環繞著 <strong>杜拉通河（Duratón River）</strong> 峽谷的荒野景觀。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#efebe9;border-left:4px solid #6d4c41;padding:12px;border-radius:0 10px 10px 0">
          <strong>⛰️ 地理條件</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>海拔：<strong>約 920 公尺</strong>（比杜羅河谷平均 750 公尺高出 170 公尺）</li>
            <li>葡萄園面積：<strong>170 公頃</strong></li>
            <li>位置：塞哥維亞省北部，沿杜拉通河荒野</li>
          </ul>
        </div>
        <div style="background:#fff8e1;border-left:4px solid #f57f17;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌡️ 氣候數據（極端乾燥大陸型）</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>夏季最高溫：<strong>超過 35°C</strong>；冬季最低溫：<strong>−15°C</strong></li>
            <li>年均日照：<strong>3,000 小時</strong>（杜羅河谷數一數二）</li>
            <li>年均降雨：<strong>462 毫米</strong></li>
          </ul>
          <strong>高海拔＋極端溫差</strong>使葡萄<strong>熟成緩慢、產量低</strong>，是結構複雜、層次細膩的根本原因。
        </div>
        <div style="background:#e8eaf6;border-left:4px solid #3949ab;padding:12px;border-radius:0 10px 10px 0">
          <strong>🪨 土壤：鈣質白堊土＋地表滾石</strong><br/>
          ・高濃度<strong>白堊（Chalk）</strong>：強化礦石感，調控水分保留<br/>
          ・地表<strong>滾石（Rolling stones）</strong>：白天蓄熱、夜晚緩慢釋放熱能，擴大晝夜溫差，有助酸度保留
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: 'Valtiendas VC 葡萄品種',
    items: [
      {
        icon: '🍷',
        label: 'Tempranillo（核心紅品種）',
        desc: '在 920 公尺高海拔緩慢熟成，比平地 Tempranillo 結構更扎實、顏色更深，帶有更多礦石感與酸度骨架',
        color: '#b71c1c',
      },
      {
        icon: '🍇',
        label: 'Cabernet Sauvignon',
        desc: '高海拔涼爽條件造就細膩而非過熟的 Cab，帶有黑醋栗、雪松與煙草，提供豐厚單寧結構',
        color: '#4a148c',
      },
      {
        icon: '🍒',
        label: 'Merlot / Syrah / Garnacha',
        desc: '補充混釀品種：Merlot 增添柔順感，Syrah 帶入胡椒香料，Garnacha 提供成熟果香與圓潤酒體',
        color: '#880e4f',
      },
      {
        icon: '🌿',
        label: 'Albillo（唯一法定白品種）',
        desc: '在杜羅河谷極為罕見的法定白品種（Ribera del Duero 亦有種植），帶有花香與蜂蜜調性，在鈣質土上展現獨特礦石尾韻',
        color: '#f9a825',
      },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Lirón Careto',
    image: '/spain/images/labels/valtiendas/liron-careto-2016.jpg',
    caption: 'Lirón Careto 2016，D.O.P Valtiendas——酒標以當地睡鼠（lirón careto）為意象，是這個僅 170 公頃小產區少數可見的裝瓶之一。',
  },
  {
    type: 'quiz',
    question: 'Valtiendas VC 的風土特色，以下哪項組合最為準確？',
    options: [
      '低海拔砂質土，年雨 1,400mm，以 Rufete 原生品種著稱',
      '海拔 920 公尺，鈣質白堊土＋地表滾石，年日照 3,000 小時，Tempranillo 核心、Albillo 唯一白品種',
      '海拔 400 公尺，花崗岩板岩梯田，UNESCO 生物圈保護區',
      '薩莫拉省北部砂質沖積土，以 Verdejo 白葡萄為核心',
    ],
    answer: 1,
    explanation: 'Valtiendas VC 位於塞哥維亞省北部，海拔約 920 公尺，是杜羅河谷體系中海拔最高的產區之一。鈣質白堊土加地表滾石、年日照 3,000 小時、年雨 462mm，造就緩慢熟成、結構細膩的高品質紅酒。Tempranillo 為核心紅品種，Albillo 為唯一法定白品種。',
  },
  {
    type: 'summary',
    message: 'Valtiendas VC 學習完成！',
    keyPoints: [
      '塞哥維亞省北部 Vino de Calidad（2004 年成立），沿杜拉通河峽谷荒野，170 公頃葡萄園',
      '海拔 920 公尺——比杜羅河谷平均高出 170 公尺，緩慢熟成、低產量、高複雜度',
      '鈣質白堊土＋地表滾石：強化礦石感；年日照 3,000 小時、年雨 462mm',
      '核心紅品種 Tempranillo；補充混釀 Cabernet Sauvignon、Merlot、Syrah、Garnacha',
      'Albillo 為產區唯一法定白品種，在鈣質土上展現花香與礦石尾韻',
    ],
  },
]

const S2M2L1_slides = [
  {
    type: 'cover',
    icon: '🌊',
    gradient: 'linear-gradient(135deg, #1a5276, #2980b9)',
    title: 'Rías Baixas — Albariño 白酒之都',
    subtitle: 'Level 2 · 1988 DO · 名稱意為「下海灣」',
    points: [
      { icon: '🌊', label: '「下海灣」海岸地形', text: '鋸齒形大西洋海灣，年雨量 1,691mm，涼爽多霧，五個子產區' },
      { icon: '🍋', label: 'Albariño 骨乾白酒', text: '檸檬皮・葡萄柚・哈密瓜・油桃・鹽鮮，11.5–13.5% 酒精，3–7°C 享用' },
      { icon: '🪨', label: '花崗岩砂質土壤', text: '海拔 0–300m，酸性花崗岩賦予獨特礦石鹽感，美國為第一出口市場' },
    ],
  },
  {
    type: 'map',
    title: 'Rías Baixas 大西洋海灣',
    mapRegion: 'galicia',
    geojsonUrl: '/spain/geojson/appellations/rias-baixas.geojson',
    description: '加利西亞西南角的鋸齒形海岸，大西洋海風帶來涼爽潮濕氣候，是 Albariño 的故鄉。',
  },
  {
    type: 'compare',
    title: 'Rías Baixas：五個子產區',
    items: [
      { icon: '🌊', label: 'Val do Salnés（最核心）', desc: '最大最重要的子產區，緊鄰大西洋，最典型的鹽漬礦石 Albariño，Cambados 鎮是中心', color: '#2980b9' },
      { icon: '🏔️', label: 'O Rosal', desc: '葡萄牙邊境，Minho 河南岸，氣候較溫暖，Albariño 帶有更多熱帶水果風味', color: '#27ae60' },
      { icon: '🌿', label: 'Condado do Tea', desc: '最內陸的子產區，受大陸型氣候影響，Albariño 更濃郁飽滿', color: '#e67e22' },
      { icon: '🏝️', label: 'Soutomaior', desc: '最小子產區，丘陵地形，海風影響，Albariño 風格精緻清新', color: '#9b59b6' },
      { icon: '🌿', label: 'Ribeiro do Ulla', desc: '最北的子產區，Ulla 河谷，部分海拔較高，Albariño 帶有更多草本清爽感', color: '#c0392b' },
    ],
  },
  {
    type: 'content',
    icon: '🪨',
    title: '氣候・風土・Albariño 種植特色',
    html: `
      <h4>🌧️ 大西洋氣候數據</h4>
      <ul>
        <li><strong>年均降雨量</strong>：1,691mm（綠色西班牙中雨量最豐沛的區域）</li>
        <li><strong>夏季最高均溫</strong>：25.6°C；<strong>冬季最低均溫</strong>：6°C</li>
        <li><strong>海拔</strong>：0–300m；土壤：<strong>花崗岩砂質土壤</strong>（酸性，pH 4.5–6.0）</li>
      </ul>
      <h4>🪨 花崗岩土壤的礦石感來源</h4>
      <ul>
        <li>養分低、排水良好，葡萄樹深根尋礦物質，造就獨特<strong>鹽漬礦石感</strong></li>
        <li>與 Loire Muscadet 同為花崗岩，但 Rías Baixas 雨量更豐、礦物更鹹鮮</li>
      </ul>
      <h4>🌿 Pergola 棚架式種植</h4>
      <ul>
        <li>高架種植讓葡萄懸空，<strong>在 1,691mm 年雨量下增加通風、防黴菌</strong></li>
        <li>遠離積水地面，是加利西亞潮濕環境的因地制宜智慧</li>
      </ul>
      <h4>🍋 Albariño 風味與品飲指南</h4>
      <ul>
        <li><strong>香氣</strong>：檸檬皮、葡萄柚、哈密瓜、油桃、杏仁、橙花、鹽鮮礦石</li>
        <li><strong>口感</strong>：骨乾（Bone-Dry）・高酸・輕盈，酒精 <strong>11.5–13.5%</strong></li>
        <li><strong>建議侍酒溫度</strong>：<strong>3–7°C（極冰）</strong></li>
        <li><strong>陳年潛力</strong>：3–5 年；頂級款桶陳後展現蜂蜜、油脂層次</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🌍',
    title: '其他葡萄品種與市場概況',
    html: `
      <h4>🍇 法定葡萄品種</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
        <div style="background:#e8f5e9;border-radius:8px;padding:10px">
          <strong>⬜ 白葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Albariño</strong>（絕對主導）</li>
            <li>Loureira Blanca</li>
            <li>Treixadura</li>
            <li>Caiño Blanca</li>
          </ul>
        </div>
        <div style="background:#fce8e6;border-radius:8px;padding:10px">
          <strong>🟥 紅葡萄</strong>
          <ul style="margin:6px 0 0">
            <li>Caiño Tinto</li>
            <li>Espadeiro</li>
            <li>Loureira Tinta</li>
            <li>Sousón</li>
          </ul>
        </div>
      </div>
      <h4>🌍 市場與產業現況</h4>
      <ul>
        <li><strong>美國</strong>是 Rías Baixas 的<strong>第一大出口市場</strong>，Albariño 在北美頂級餐廳深受歡迎</li>
        <li>生產者規模多元：大型現代化合作社到小型手工釀酒廠（當地稱 <strong>Adegas</strong>）並存</li>
        <li>近年釀酒師運用現代科技，釀造具備驚人複雜度的「<strong>簽名款</strong>」桶陳 Albariño</li>
      </ul>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Paco & Lola Albariño',
    image: '/spain/images/labels/rias-baixas/paco-lola-no12.jpg',
    caption: 'Paco & Lola「Nº12」Albariño Rías Baixas D.O.——以波爾卡圓點酒標聞名國際，是 Val do Salnés 最具辨識度的主流品牌之一。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Zárate（老藤精品）',
    image: '/spain/images/labels/rias-baixas/zarate-albarino.jpg',
    caption: 'Zárate Albariño（Val do Salnés）——Eulogio Pomares 主理的老藤精品酒莊，展現 Albariño 更具深度與陳年潛力的一面。',
  },
  {
    type: 'quiz',
    question: 'Rías Baixas 的 Albariño 使用「Pergola（棚架式）」種植系統的主要原因是什麼？',
    options: [
      '棚架可增加葡萄的日照時間，提高糖分',
      '棚架讓葡萄懸空，在多雨潮濕環境中增加通風、減少黴菌',
      '棚架可降低葡萄樹的產量，提升果實濃度',
      '棚架是加利西亞文化傳統，純粹因歷史原因保存',
    ],
    answer: 1,
    explanation: '加利西亞年雨量高達 1500mm，非常潮濕。Pergola 棚架式將葡萄懸吊高空，增加通風、防止積水，大幅降低黴菌（如灰黴病 Botrytis）的感染風險。',
  },

  {
    type: 'summary',
    message: 'Rías Baixas 學習完成！',
    keyPoints: [
      '1988 年獲 DO；名稱意為「下海灣」，五個子產區以 Val do Salnés 為核心',
      '年雨量 1,691mm，夏均最高 25.6°C；海拔 0–300m，花崗岩砂質土壤',
      'Albariño：檸檬皮・葡萄柚・哈密瓜・油桃・鹽鮮，骨乾高酸 11.5–13.5%，3–7°C 享用',
      'Pergola 棚架式應對高雨量環境；美國為第一出口市場；小酒莊稱 Adegas',
    ],
  },
]

const S2M2L2_slides = [
  {
    type: 'cover',
    icon: '🍃',
    gradient: 'linear-gradient(135deg, #196f3d, #1e8449)',
    title: 'Ribeiro · Valdeorras · Ribeira Sacra · Monterrei',
    subtitle: 'Level 2 · 加利西亞的四個寶藏產區',
    points: [
      { icon: '🍃', label: 'Ribeiro（1932 DO）', text: '加利西亞最古老 DO，Treixadura 旗艦品種，colleteiros 傳統小農；花崗岩砂質土壤，夏 40°C/冬 -3°C' },
      { icon: '🪨', label: 'Valdeorras「黃金之谷」', text: 'Godello 復興發源地，夏達 40°C、冬低 -8°C，年日照 2,200h；Castas Nobles 等級' },
      { icon: '⬛', label: 'Ribeira Sacra', text: 'Miño/Sil 河谷陡峭梯田，海拔 400–500m，Mencía 紅酒、Godello 白酒，古羅馬釀酒史' },
      { icon: '🏰', label: 'Monterrei（國王之山）', text: '1996 DO，加利西亞最南端，鄰近葡萄牙；清新白酒 Doña Blanca/Godello；Monterrei Superior 標籤' },
    ],
  },
  {
    type: 'map',
    title: '加利西亞北部葡萄酒產區',
    mapRegion: 'galicia',
    geojsonUrl: '/spain/geojson/appellations/galicia-interior-dos.geojson',
    description: 'Ribeiro・Valdeorras・Ribeira Sacra・Monterrei — 多樣地形與花崗岩/板岩土壤孕育各具特色的白酒與紅酒。',
  },
  {
    type: 'compare',
    title: '加利西亞四大寶藏產區比較',
    items: [
      {
        icon: '🍃',
        label: 'Ribeiro DO（1932 年）',
        desc: '加利西亞最古老 DO，位於 Ribadavia，2,350 公頃，海拔 100–350m。花崗岩砂質土（70%）；夏最高 40°C、冬最低 -3°C、年雨 900mm、年日照 2,250h。白：<strong>Treixadura</strong>（旗艦，優雅花香、果香與香脂）+ Albariño、Godello、Torrontés、Loureira；紅：Caiño Longo、Caiño Tinto、Caiño Bravo、Sousón、Brancellao、Mencía 等。大多以 Treixadura 為主體混釀，酒精 12–13.5%。<em>colleteiros</em> 小型獨立生產者延續傳統釀造文化；近年積極現代化復興。',
        color: '#1e8449',
      },
      {
        icon: '🪨',
        label: 'Valdeorras DO「黃金之谷」',
        desc: '加利西亞東部 Sil 河谷，海拔 300–700m。氣候極端：夏最高 40°C、冬最低 -8°C、年雨 850–1,000mm、年日照 2,200h。六種土壤（板岩、花崗岩、片岩等）。白：Godello 為核心（豐滿複雜），另有 Doña Blanca、Loureira、Lado 等 7 種；紅：Mencía 為主，另有 8 種。特設 <strong>Castas Nobles 等級</strong>（≥85% 推薦品種）。近 30 年原生品種復育成果顯著。',
        color: '#8e44ad',
      },
      {
        icon: '⬛',
        label: 'Ribeira Sacra DO',
        desc: '「神聖河岸」，梯田沿 Miño（均溫 14°C、雨量 900mm）與 Sil（均溫 13°C、雨量 700mm）河谷分布。海拔 400–500m，土壤混合花崗岩、板岩、石灰岩。五子產區以 Amandi 最知名（古羅馬曾供應皇帝餐桌）。Mencía 展現覆盆子、花香、鉛筆芯礦石感；Godello 白酒精彩並存。手工採收成本高。',
        color: '#2c3e50',
      },
      {
        icon: '🏰',
        label: 'Monterrei DO（1996 年）',
        desc: '加利西亞最南端，緊鄰葡萄牙邊境；位於 Verín，海拔 400–500m，491 公頃。氣候偏大陸性：夏最高 37°C、冬最低 -5°C、年雨 700mm（加利西亞最乾）、年日照 2,200h。土壤：花崗岩、板岩、黏土。白：<strong>Doña Blanca</strong>（主）、Godello、Treixadura；紅：Mencía、Bastardo。設有 <strong>Monterrei Superior 標籤</strong>（≥85% 推薦原生品種）。原生品種復甦中，新投資進入小型家族酒莊；潛力巨大但仍有大量散裝銷售。',
        color: '#c0392b',
      },
    ],
  },
  {
    type: 'content',
    icon: '🍃',
    title: 'Ribeiro：加利西亞最古老 DO 的傳統復興',
    html: `
      <h4>🏛️ 歷史與地理背景</h4>
      <ul>
        <li><strong>1932 年</strong>正式確立 DO，是加利西亞歷史最悠久的命名產區</li>
        <li>位於奧倫塞省 <strong>Ribadavia</strong>，葡萄園約 <strong>2,350 公頃</strong>，海拔 100–350m</li>
        <li>目前正歷經復興：憑藉原生品種在國際市場重新嶄露頭角</li>
      </ul>
      <h4>🌤️ 氣候與土壤</h4>
      <ul>
        <li><strong>氣候</strong>：夏最高 40°C、冬最低 -3°C，年雨 900mm，年日照 <strong>2,250 小時</strong></li>
        <li><strong>土壤</strong>：花崗岩砂質土（70%）、片岩（20%）、沉積土（10%）</li>
      </ul>
      <h4>🍇 明星品種：Treixadura</h4>
      <ul>
        <li>被譽為「<strong>萊貝羅葡萄園的瑰寶</strong>」，發芽與成熟較慢，對海拔敏感</li>
        <li><strong>風味</strong>：精緻花香（玫瑰、白花）、桃子、杏桃、淡淡香脂（balsamic）氣息，質地滑順圓潤</li>
        <li>多以 Treixadura 為主體，混釀 Albariño、Godello、Torrontés、Loureira，酒精 <strong>12–13.5%</strong></li>
      </ul>
      <h4>🍷 完整品種列表</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
        <div style="background:#e8f5e9;border-radius:8px;padding:10px">
          <strong>⬜ 白葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Treixadura</strong>（旗艦）</li>
            <li>Albariño、Godello</li>
            <li>Torrontés、Loureira</li>
          </ul>
        </div>
        <div style="background:#fce8e6;border-radius:8px;padding:10px">
          <strong>🟥 紅葡萄</strong>
          <ul style="margin:6px 0 0">
            <li>Caiño Longo、Caiño Tinto</li>
            <li>Caiño Bravo、Ferrón</li>
            <li>Sousón、Brancellao、Mencía</li>
          </ul>
        </div>
      </div>
      <h4>👨‍🌾 產業特色</h4>
      <ul>
        <li><strong>colleteiros</strong>：眾多小型獨立生產者，堅持以自家種植葡萄進行傳統釀造</li>
        <li>大型合作社與精品酒莊並存，均大量投入現代化與品質提升</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '⬛',
    title: 'Ribeira Sacra：陡峭梯田、古羅馬與 Mencía',
    html: `
      <h4>🌄 壯觀地形與風土</h4>
      <ul>
        <li>葡萄園沿 <strong>Miño 與 Sil 河谷的陡峭山谷與峽谷</strong>生長，景色如畫，被譽為西班牙最美葡萄園</li>
        <li>海拔 <strong>400–500m</strong>，土壤混合花崗岩、板岩與石灰岩</li>
        <li>兩大氣候微區：<strong>Miño 河谷</strong>（均溫 14°C、年雨量 900mm，較溫潤）；<strong>Sil 河谷</strong>（均溫 13°C、年雨量 700mm，較乾燥）</li>
      </ul>
      <h4>🏛️ 古羅馬歷史與 Amandi</h4>
      <ul>
        <li>釀酒史可追溯至<strong>古羅馬時期</strong>；傳說 Amandi 子產區的加料葡萄酒（Spiced Wines）加七鰓鰻曾專供皇帝餐桌</li>
        <li>五個子產區：<strong>Amandi</strong>（最知名）、Chantada、Ribeiras do Miño、Ribeiras do Sil、Quiroga-Bibei</li>
      </ul>
      <h4>🍇 葡萄品種</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
        <div style="background:#fce8e6;border-radius:8px;padding:10px">
          <strong>🟥 紅葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Mencía</strong>（主導）</li>
            <li>Brancellao、Merenzao</li>
            <li>Caiño、Sousón、Tempranillo</li>
          </ul>
        </div>
        <div style="background:#e8f5e9;border-radius:8px;padding:10px">
          <strong>⬜ 白葡萄</strong>
          <ul style="margin:6px 0 0">
            <li>Godello、Treixadura</li>
            <li>Albariño、Doña Blanca</li>
            <li>Loureira、Torrontés</li>
          </ul>
        </div>
      </div>
      <p style="margin-top:10px">Mencía 輕盈細膩，帶覆盆子、紫羅蘭花香與鉛筆芯礦石感，被譽為「<strong>西北版 Pinot Noir</strong>」；陡峭地形全靠手工採收。</p>
    `,
  },
  {
    type: 'content',
    icon: '🍇',
    title: 'Godello：加利西亞的白酒寶石',
    html: `
      <p>Godello 是加利西亞最複雜的白葡萄品種，在 1980 年代幾乎瀕臨絕種，但被 Valdeorras 的釀酒師 <strong>Horacio Fernández Bóveda</strong> 拯救，如今是西班牙增長最快的白酒品種之一。</p>
      <h4>🪨 Valdeorras 的獨特風土</h4>
      <ul>
        <li><strong>「黃金之谷」</strong>：名稱源自古羅馬人 2,000 年前對此地的濃厚興趣（可能與黃金採礦有關）</li>
        <li><strong>極端氣候</strong>：夏最高 40°C、冬最低 -8°C，年雨 850–1,000mm，年日照 <strong>2,200 小時</strong></li>
        <li><strong>海拔 300–700m</strong>，六種土壤：板岩、花崗岩、黏土、含鐵土、石英岩、片岩</li>
        <li><strong>Castas Nobles 等級</strong>：新設標準，要求至少 85% 推薦品種，代表產區最高品質承諾</li>
      </ul>
      <h4>🍷 Godello 風味特徵</h4>
      <ul>
        <li><strong>香氣</strong>：白桃、杏子、蜂蜜、白花（金合歡）、蜂蠟</li>
        <li><strong>口感</strong>：豐滿圓潤、中高酸、帶有油脂感和礦石骨架</li>
        <li><strong>桶陳版本</strong>：增加奶油烤麵包感，複雜度媲美頂級 Burgundy 白酒</li>
      </ul>
      <h4>💡 Treixadura（Ribeiro 的旗艦品種）</h4>
      <p>Ribeiro 的代表白品種，被譽為「萊貝羅葡萄園的瑰寶」。精緻花香、桃子、杏桃與淡淡香脂（balsamic）氣息，質地圓潤滑順。通常以 Treixadura 為主體，混釀 Albariño、Godello、Loureira，增添複雜度與平衡感（酒精 12–13.5%）。</p>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Valdeorras Godello',
    image: '/spain/images/labels/valdeorras/gaba-do-xil-godello-2011.jpg',
    caption: 'Telmo Rodríguez「Gaba do Xil」Godello 2011（Valdeorras）——當代西班牙釀酒師詮釋下的 Godello，展現白桃、蜂蠟與礦石骨架的產區典型風格。',
  },
  {
    type: 'content',
    icon: '🏰',
    title: 'Monterrei：加利西亞最南端的「國王之山」',
    html: `
      <h4>🏰 地理與歷史</h4>
      <ul>
        <li>名稱意為「<strong>國王之山（King's Mountain）</strong>」，山頂屹立著俯瞰葡萄園的古老堡壘</li>
        <li>位於加利西亞南端 <strong>Verín</strong>（奧倫塞省），<strong>緊鄰葡萄牙邊境</strong></li>
        <li>1970 年代曾有臨時 DO 地位，<strong>1996 年正式確立 DO</strong></li>
        <li>葡萄園面積 <strong>491 公頃</strong>，海拔 400–500m</li>
      </ul>
      <h4>🌤️ 氣候與土壤</h4>
      <ul>
        <li>氣候偏<strong>大陸性</strong>（與加利西亞其他大西洋型產區不同）：夏最高 37°C、冬最低 -5°C</li>
        <li>年雨 <strong>700mm</strong>（加利西亞最乾燥），年日照 <strong>2,200 小時</strong></li>
        <li>土壤：<strong>花崗岩、板岩、黏土</strong></li>
      </ul>
      <h4>🍇 品種與酒款</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
        <div style="background:#e8f5e9;border-radius:8px;padding:10px">
          <strong>⬜ 白葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Doña Blanca</strong>（主導；豐腴清新）</li>
            <li>Godello、Treixadura</li>
          </ul>
        </div>
        <div style="background:#fce8e6;border-radius:8px;padding:10px">
          <strong>🟥 紅葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Mencía</strong>（主導；年輕果味）</li>
            <li>Bastardo</li>
          </ul>
        </div>
      </div>
      <h4>🏆 Monterrei Superior</h4>
      <p>DO 設立 <strong>Monterrei Superior 標籤</strong>，要求至少 <strong>85% 推薦原生品種</strong>，代表產區最高品質標準。傾向生產清新白酒與年輕 Mencía 紅酒；新資金正流入小型家族酒莊，但原生品種開發仍處早期，部分酒款仍以散裝形式銷售。</p>
    `,
  },
  {
    type: 'quiz',
    question: 'Godello 白葡萄品種主要在哪個加利西亞產區「復興」，並以板岩土壤帶來的礦石感著稱？',
    options: ['Rías Baixas', 'Ribeiro', 'Valdeorras', 'Ribeira Sacra'],
    answer: 2,
    explanation: 'Godello 在 1980 年代幾乎瀕絕，被 Valdeorras 的釀酒師拯救。Valdeorras 的板岩土壤賦予 Godello 獨特的礦石骨架和張力，如今是西班牙最受追捧的白葡萄品種之一。',
  },

  {
    type: 'summary',
    message: '加利西亞四大產區學習完成！',
    keyPoints: [
      'Ribeiro（1932 DO）：加利西亞最古老命名產區；Treixadura 旗艦白品種（花香、香脂、混釀為主），colleteiros 傳統小農；花崗岩砂質土（70%），年日照 2,250h',
      'Valdeorras「黃金之谷」：Godello 復興發源地，夏 40°C/冬 -8°C/年日照 2,200h；Castas Nobles 等級（≥85% 推薦品種）',
      'Ribeira Sacra：Miño/Sil 河谷梯田，400–500m，古羅馬釀酒史；Amandi 最知名；Mencía（紅）+ Godello（白）',
      'Monterrei（1996 DO）：加利西亞最南端「國王之山」，緊鄰葡萄牙；偏大陸性氣候年雨 700mm；Doña Blanca（白）/ Mencía（紅）；Monterrei Superior 標籤（≥85%）',
      'Godello：加利西亞白酒寶石，豐滿礦石，媲美頂級 Burgundy Chardonnay',
    ],
  },
]

const S2M2L3_slides = [
  {
    type: 'cover',
    icon: '🌧️',
    gradient: 'linear-gradient(135deg, #1a5276, #27ae60)',
    title: '大西洋氣候與花崗岩土壤的味道',
    subtitle: 'Level 2 · 為什麼加利西亞的酒如此獨特',
    points: [
      { icon: '🌧️', label: '年雨量 1500mm', text: '西班牙最潮濕的地區，涼爽多雨造就高酸清爽白酒' },
      { icon: '🪨', label: '花崗岩老土', text: '酸性、低養分、礦物豐富，是礦石感的科學基礎' },
      { icon: '🌊', label: '大西洋微氣候', text: '海洋調節溫差，讓葡萄緩慢成熟，香氣複雜' },
    ],
  },
  {
    type: 'map',
    title: 'Ribeira Sacra 懸崖梯田',
    mapRegion: 'galicia',
    geojsonUrl: '/spain/geojson/appellations/ribeira-sacra.geojson',
    description: '沿 Miño 和 Sil 河谷的陡峭梯田，手工採收的 Mencía 老藤，加利西亞最壯觀的葡萄酒產區。',
  },
  {
    type: 'content',
    icon: '🌧️',
    title: '大西洋氣候對葡萄酒的影響',
    html: `
      <p>加利西亞位於西班牙西北角，是全國最受大西洋影響的地區，這造就了截然不同於其他西班牙產區的葡萄酒風格。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#eaf4fb;border-left:4px solid #2980b9;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌡️ 涼爽溫度 → 高酸清爽</strong><br/>
          夏季均溫 18-22°C，絕不過熱。葡萄有足夠時間<strong>緩慢成熟</strong>，天然酸度得以保留。這是 Albariño 自然高酸的氣候根源。
        </div>
        <div style="background:#e9f7ef;border-left:4px solid #27ae60;padding:12px;border-radius:0 10px 10px 0">
          <strong>☁️ 雲覆遮蔭 → 香氣複雜</strong><br/>
          多雲天氣減少直接日曬，延長葡萄在低溫下的芳香物質累積期。這是<strong>花香型白酒</strong>（橙花、茉莉）的氣候成因。
        </div>
        <div style="background:#fce8e6;border-left:4px solid #c0392b;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌧️ 高雨量 → 種植挑戰</strong><br/>
          年雨量達 800-1500mm，是波爾多的 3 倍。潮濕 → 黴菌壓力大 → 必須採用 Pergola 棚架通風。也是為何加利西亞沒有頂級紅酒的主因（紅品種成熟需要更多陽光）。
        </div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '🪨',
    title: '花崗岩土壤的科學解析',
    html: `
      <h4>🔬 花崗岩的化學特性</h4>
      <ul>
        <li><strong>酸性</strong>（pH 4.5–6.0）：比石灰岩產區（pH 7–8）低得多</li>
        <li><strong>低養分</strong>：氮磷鉀含量低，葡萄樹生長緩慢、低產，果實濃縮</li>
        <li><strong>礦物質豐富</strong>：含有矽、鐵、鉀、鎂等多種微量礦物</li>
        <li><strong>排水良好</strong>：沙粒狀結構，不過分保水</li>
      </ul>
      <h4>🧂 「礦石感」的來源爭論</h4>
      <p>科學界對「土壤礦物質是否直接轉化為酒中礦石感」仍有爭議，但普遍認為：</p>
      <ul>
        <li>酸性土壤 + 低養分 → 葡萄樹壓力 → <strong>特定有機酸和硫化物</strong>的形成 → 礦石/海鹽風味感知</li>
        <li>花崗岩砂粒土入酒的鹹鮮感，在全球對比研究中也見於 Loire Muscadet（花崗岩）vs Chablis（石灰岩）</li>
      </ul>
      <h4>🌊 「海洋感」的另一成因</h4>
      <p>Rías（潮汐海灣）帶來的海洋氣息、海鹽直接沉積在葡萄皮表面，在釀造過程中部分融入酒中，是 Albariño 鹽漬感的另一個科學解釋。</p>
    `,
  },
  {
    type: 'quiz',
    question: '與西班牙其他產區相比，加利西亞的大西洋氣候對 Albariño 白酒最主要的貢獻是？',
    options: [
      '帶來極高的糖分，讓 Albariño 有高酒精度',
      '涼爽多雲天氣讓葡萄緩慢成熟，保留高酸度和豐富花果香氣',
      '強烈的日照讓 Albariño 產生深金色並帶有氧化陳年感',
      '乾燥的大西洋風讓葡萄高度集中，釀成濃縮甜酒',
    ],
    answer: 1,
    explanation: '加利西亞涼爽多雲的大西洋氣候使葡萄緩慢成熟，天然高酸度被完整保留，同時長時間低溫積累大量花果香氣物質（橙花、桃子）。這是 Albariño 高酸清爽特質的核心原因。',
  },

  {
    type: 'summary',
    message: '大西洋氣候與花崗岩風土學習完成！',
    keyPoints: [
      '大西洋氣候：涼爽（18-22°C）+ 多雲 → 高酸、花果香氣豐富',
      '年雨量 800-1500mm → 棚架種植、無頂級紅酒（成熟度不足）',
      '花崗岩：酸性低養分 → 低產濃縮 + 礦石/海鹽風味感知',
      '海洋 Rías 海灣：鹽分沉積是 Albariño 鹽漬感的另一科學來源',
    ],
  },
]

// ── S2M2L4：Txakoli — 巴斯克查科麗三大産區 ───────────────────
const S2M2L4_slides = [
  {
    type: 'cover',
    icon: '🫧',
    gradient: 'linear-gradient(135deg, #1e5631, #27ae60)',
    title: 'Txakoli — 巴斯克微氣泡白酒',
    subtitle: 'Level 2 · Chacolí · 三大 DO · Hondarrabi Zuri',
    points: [
      { icon: '🫧', label: '骨乾微氣泡白酒', text: '極乾（Bone Dry）、天然微氣泡，酒精僅 9–11%，大西洋涼爽海岸的清爽代表' },
      { icon: '🍋', label: 'Hondarrabi Zuri 主角', text: '巴斯克原生白品種，帶有萊姆・青草莓・牡丹・細緻鹽鮮礦石感' },
      { icon: '📜', label: '三大 DO 從海岸到內陸', text: 'Getaria（1989）· Bizkaia（1994）· Álava（2001），氣候差異顯著' },
    ],
  },
  {
    type: 'map',
    title: '巴斯克地區 — Txakoli 三大 DO',
    mapRegion: 'pais-vasco',
    description: '巴斯克自治區緊臨比斯開灣（Bay of Biscay），三個 Txakoli DO 從沿海（Getaria・Bizkaia）延伸到內陸省份（Álava），大西洋影響由強至弱，風格各有千秋。',
  },
  {
    type: 'compare',
    title: 'Txakoli 三大 DO 比較',
    items: [
      {
        icon: '⛵',
        label: 'Getariako Txakolina（吉普斯夸）',
        desc: '最早獲認證（1989）；2007 年擴展至整個 Gipuzkoa 省。90% 葡萄園臨海，海拔 10–100m，年雨量 1,600mm、日照 1,800h，砂質表土，最具海洋鮮鹹特質',
        color: '#1a6fa8',
      },
      {
        icon: '🌊',
        label: 'Bizkaiko Txakolina（比斯開）',
        desc: '1994 年取得認證，比斯開省海岸，年雨量 1,200mm，海拔 400m 以下，石灰岩與泥灰岩上的粘壤土（略酸性、表土淺），氣候溫和，風格清爽',
        color: '#16a085',
      },
      {
        icon: '🏔️',
        label: 'Arabako Txakolina（阿拉瓦）',
        desc: '2001 年取得認證，三大中最小、最內陸，夏季高達 38°C，年雨量僅 899mm，活性石灰岩土壤（pH 7.5–8），大陸性氣候讓酒體稍豐滿複雜',
        color: '#a0792b',
      },
    ],
  },
  {
    type: 'content',
    icon: '🌡️',
    title: '氣候・風土・葡萄品種',
    html: `
      <h4>🌦️ 三大產區氣候對比</h4>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#eaf4fb;border-left:4px solid #1a6fa8;padding:12px;border-radius:0 10px 10px 0">
          <strong>⛵ Getaria（沿海，最大西洋）</strong><br/>
          年雨量 <strong>1,600mm</strong>（三大最高）・年日照 1,800h・海拔 10–100m<br/>
          砂質表土 + 沖積粘土底土；海洋氣候，溫差小，高酸清雅
        </div>
        <div style="background:#e9f7ef;border-left:4px solid #16a085;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌊 Bizkaia（沿海，最普遍）</strong><br/>
          年雨量 <strong>1,200mm</strong>・海拔 400m 以下<br/>
          石灰岩與泥灰岩上的粘壤土，略酸性，土層淺薄；氣候溫和，果香較圓潤
        </div>
        <div style="background:#fef9e7;border-left:4px solid #a0792b;padding:12px;border-radius:0 10px 10px 0">
          <strong>🏔️ Álava（內陸，大陸性）</strong><br/>
          年雨量 <strong>899mm</strong>（三大最低）・夏季最高 38°C，冬季 -2°C<br/>
          活性石灰岩土壤（pH 7.5–8）；日夜溫差大，酒體比沿海款更豐滿複雜
        </div>
      </div>
      <h4 style="margin-top:16px">🍇 法定葡萄品種</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
        <div style="background:#e8f5e9;border-radius:8px;padding:10px">
          <strong>⬜ 白葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Hondarrabi Zuri</strong>（絕對主導）</li>
            <li>Petit Manseng（Álava 允許）</li>
            <li>Gros Manseng（Álava 允許）</li>
            <li>Petit Corbu（Álava 允許）</li>
          </ul>
        </div>
        <div style="background:#fce8e6;border-radius:8px;padding:10px">
          <strong>🟥 紅葡萄</strong>
          <ul style="margin:6px 0 0">
            <li><strong>Hondarrabi Beltza</strong>（少量）</li>
            <li>用於釀製粉紅酒或混釀</li>
          </ul>
        </div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '🫧',
    title: 'Txakoli 文化傳統與風味輪廓',
    html: `
      <h4>🥂 傳統倒酒儀式「Escanciar」</h4>
      <p>巴斯克傳統習慣是將酒液從約 <strong>25–30 公分高處</strong>倒入<strong>平底直杯（Tumbler）</strong>，利用落差使天然微氣泡充分釋放、活化香氣，這個倒酒動作稱為 <em>escanciar</em>，是巴斯克餐飲文化的重要儀式。</p>
      <h4>🍷 Txakoli 風味輪廓</h4>
      <ul>
        <li><strong>核心香氣</strong>：萊姆皮、青草莓、牡丹花香、柑橘花、細緻鹽鮮礦石</li>
        <li><strong>口感</strong>：骨乾（Bone Dry）、高酸、輕盈，天然微氣泡（Pétillant）</li>
        <li><strong>酒精度</strong>：<strong>9–11%</strong>（西班牙酒精度最低的白酒之一）</li>
        <li><strong>侍酒溫度</strong>：<strong>4–7°C（極冰）</strong></li>
      </ul>
      <h4>🍽️ 餐酒搭配 — Pintxos 的最佳拍檔</h4>
      <p>Txakoli 是配搭巴斯克 <em>Pintxos</em>（麵包串小點）的傳統選擇，特別適合：</p>
      <ul>
        <li>生蠔、炸鱈魚（Bacalao al pil-pil）、醃漬鯷魚（Anchovies）</li>
        <li>烤章魚、蛤蜊湯、龍蝦</li>
        <li>海鮮飯（Arroz con mariscos）</li>
      </ul>
    `,
  },
  {
    type: 'image',
    title: '🏷️ 酒標實例：Txomin Etxaniz（Getariako Txakolina）',
    image: '/spain/images/labels/getariako-txakolina/txomin-etxaniz-2017.jpg',
    caption: 'Txomin Etxaniz 2017——Getaria 最具歷史、規模最大的 Txakoli 生產者，酒標明確標示「Txakoli elaborado con uvas hondarribi de nuestros viñedos de Getaria」與「Getariako Txakolina Denominación de Origen」。',
  },
  {
    type: 'image',
    title: '🏷️ 酒標實例：Talai Berri（Getariako Txakolina）',
    image: '/spain/images/labels/getariako-txakolina/talai-berri-hondarrabi-zuri-2018.png',
    caption: 'Talai Berri 2018，Getariako Txakolina D.O.——酒標直接標示品種「Hondarrabi Zuri」，是巴斯克 Txakoli 主力白葡萄品種最直觀的辨識範例。',
  },
  {
    type: 'quiz',
    question: '關於 Txakoli（查科麗）下列敘述何者正確？',
    options: [
      '以 Tempranillo 為主要品種，是巴斯克最著名的紅酒',
      '主要品種為 Hondarrabi Zuri，風格骨乾、微氣泡、高酸低酒精，產自巴斯克地區',
      '三大產區均為 DOCa 最高等級，與 Rioja 並列',
      '氣泡是利用傳統法（Méthode Traditionnelle）瓶中二次發酵製成',
    ],
    answer: 1,
    explanation: 'Txakoli 以巴斯克原生品種 Hondarrabi Zuri 釀造，風格骨乾（Bone Dry）、具天然微氣泡（非傳統法）、高酸、酒精約 9–11%。三大產區 Getaria、Bizkaia、Álava 均為 DO 等級，不是 DOCa。',
  },
  {
    type: 'summary',
    message: 'Txakoli 巴斯克查科麗學習完成！',
    keyPoints: [
      '三大 DO：Getaria（1989·最海岸·雨量最高 1,600mm）· Bizkaia（1994）· Álava（2001·最內陸）',
      '主品種 Hondarrabi Zuri；風格骨乾・天然微氣泡・高酸・低酒精（9–11%）',
      '香氣：萊姆・青草莓・牡丹・鹽鮮礦石；傳統高位倒酒儀式（escanciar）',
      '綠色西班牙・大西洋氣候・Pintxos 最佳搭檔，展現巴斯克海岸鮮活個性',
    ],
  },
]

const S2M3L1_slides = [
  {
    type: 'cover',
    icon: '⬛',
    gradient: 'linear-gradient(135deg, #1a1a2e, #c0392b)',
    title: 'Priorat DOCa — 加泰隆尼亞唯一最高等級',
    subtitle: 'Level 2 · 強勁深邃紅酒 · 淺層板岩土壤 · 遠山地中海海風',
    points: [
      { icon: '🏅', label: '加泰隆尼亞唯一 DOCa', text: '2009 年取得，是加泰隆尼亞唯一的 DOCa 認證，西班牙僅 Rioja 與 Priorat 並列最高等級' },
      { icon: '⬛', label: 'Llicorella 淺層板岩', text: '淺薄的板岩土壤（通常只有單一層次），葡萄藤必須深鑽地底汲取養分與水分' },
      { icon: '🌊', label: '偏遠山區仍有海風', text: '雖位於偏遠多山地帶，仍暴露在地中海溫暖海風中；海拔高度是決定酒款風格的關鍵' },
    ],
  },
  {
    type: 'map',
    title: 'Priorat DOCa 板岩山地',
    mapRegion: 'catalonia',
    geojsonUrl: '/spain/geojson/appellations/priorat.geojson',
    description: '加泰羅尼亞偏遠山區，llicorella 板岩土壤覆蓋陡峭山坡。加泰隆尼亞唯一的 DOCa（加泰語稱 DOQ），生產強勁深邃的紅酒。',
  },
  {
    type: 'content',
    icon: '🗺️',
    title: 'Priorat：地理、歷史與土壤',
    html: `
      <p>Priorat 位於加泰羅尼亞塔拉戈納省，是西班牙最險峻、最難農作的產區之一。與 Alella 等靠近海岸的產區不同，Priorat 屬於<strong>偏遠且多山（remote and mountainous）</strong>的地帶。</p>
      <h4>📜 歷史：從廢棄到復興</h4>
      <ul>
        <li><strong>中世紀</strong>：Carthusian 修道院在此種葡萄，是 Priorat（Priory 先驅地）名稱的由來</li>
        <li><strong>1900 年代</strong>：根瘤蚜（Phylloxera）摧毀，加上農村人口外移，產區幾近廢棄</li>
        <li><strong>1989 年</strong>：René Barbier 夥同 Álvaro Palacios 等五位釀酒師，開啟現代復興</li>
        <li><strong>2009 年</strong>：取得 DOCa 認證（加泰語 DOQ），成為加泰隆尼亞<strong>唯一</strong>的最高等級產區</li>
      </ul>
      <h4>⛰️ 地理氣候</h4>
      <p>海拔 100–700 公尺，坡度極陡（部分達 60°），無法機械化農作。雖遠離海岸，仍<strong>暴露在地中海溫暖海風</strong>中；<strong>海拔高度</strong>是決定酒款風格與釀造方式的關鍵因素。</p>
      <h4>🪨 獨特的淺層土壤</h4>
      <div style="background:#1a1a2e;color:#fff;border-left:4px solid #c0392b;padding:12px;border-radius:0 10px 10px 0;margin-top:6px">
        <strong>Llicorella 板岩</strong>：黑色板岩（片岩）+ 石英混合，<strong>土壤極淺（通常只有單一層次）</strong>。<br/>
        因此葡萄藤必須<strong>鑽入地底深處</strong>，才能獲取養分與水分——這種壓力造就了極低產量與高度濃縮的果實。
      </div>
    `,
  },
  {
    type: 'compare',
    title: 'Priorat DOCa 葡萄品種',
    items: [
      {
        icon: '🍷',
        label: '紅品種：本地核心',
        desc: 'Garnacha Tinta（老藤黑果主力）、Garnacha Peluda（毛茸茸 Garnacha，老藤變種）、Mazuelo（即 Carignan，高酸礦石結構）、Tempranillo、Picapoll Negre（本地稀有紅品種）',
        color: '#c0392b',
      },
      {
        icon: '🌍',
        label: '紅品種：國際品種',
        desc: 'Cabernet Sauvignon、Merlot、Syrah 等多種國際葡萄品種，通常用於與本地品種調配，增添複雜度與結構',
        color: '#8e44ad',
      },
      {
        icon: '🌸',
        label: '白品種',
        desc: 'Garnacha Blanca（核心）：釀出口感豐富且具質感（generous and textured）的白酒，與 Empordà、Montsant 並列加泰隆尼亞 Garnacha Blanca 三角；Macabeo：清爽柑橘骨幹；Pedro Ximénez：在此地罕見，帶豐腴甜美感',
        color: '#f9a825',
      },
      {
        icon: '🏆',
        label: '頂級酒莊',
        desc: 'Álvaro Palacios（L\'Ermita）：西班牙最昂貴酒款之一；Clos Mogador（René Barbier）：現代復興共同發起人；Cims de Porrera：100% Carignan 老藤；Torres 家族亦有投資',
        color: '#2c3e50',
      },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Cims de Porrera（老藤 Carignan）',
    image: '/spain/images/labels/priorat/cims-de-porrera-classic-2000.jpg',
    caption: 'Cims de Porrera「Clàssic」2000——由 Porrera 村農業合作社百年老藤釀成的 100% Carignan（Mazuelo），正是本文提到的頂級酒莊之一。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Priorat DOQ 一般款',
    image: '/spain/images/labels/priorat/costers-del-prior-2010.jpg',
    caption: 'Costers del Prior Priorat DOQ 2010——酒標標示「Denominació d\'Origen Qualificada」加泰語，對應本文提到的 DOCa／DOQ 最高等級認證。',
  },
  {
    type: 'quiz',
    question: '關於 Priorat 的土壤特性，以下哪項描述最為準確？',
    options: [
      '深厚肥沃的紅色黏土，保水性強，葡萄藤不需深根',
      '淺薄的板岩土壤（通常只有單一層次），葡萄藤必須深鑽地底才能獲取養分與水分',
      '白堊石灰岩土壤，排水極好，賦予葡萄酒礦物鹹鮮感',
      '火山浮石與砂礫混合，類似加那利群島的火山風土',
    ],
    answer: 1,
    explanation: 'Priorat 的土壤極淺（通常只有單一層次），主要由黑色板岩（片岩）和石英組成的 Llicorella。土壤淺薄意味著葡萄藤必須鑽入地底深處尋找養分與水分，這種生存壓力造就了驚人的低產量和極度濃縮的果實品質，是 Priorat 強勁深邃紅酒的根源。',
  },
  {
    type: 'quiz',
    question: 'Priorat 在加泰隆尼亞的分級地位是什麼？',
    options: [
      '是加泰隆尼亞 10 個 DO 之一，與其他產區平等',
      '是加泰隆尼亞唯一的 DOCa（加泰語：DOQ），西班牙最高品質認證，全國僅 Rioja 與 Priorat 擁有',
      '是加泰隆尼亞兩個 DOCa 之一，另一個是 Penedès',
      '不屬於 Catalunya DO，是完全獨立的自治產區',
    ],
    answer: 1,
    explanation: 'Priorat 是加泰隆尼亞唯一的 DOCa（Denominación de Origen Calificada），加泰隆尼亞語稱 DOQ（Denominació d\'Origen Qualificada），於 2009 年取得。西班牙僅有 Rioja 和 Priorat 兩個 DOCa，是全國最高的葡萄酒品質認證等級。',
  },
  {
    type: 'summary',
    message: 'Priorat DOCa 學習完成！',
    keyPoints: [
      '加泰隆尼亞唯一 DOCa（DOQ），2009 年取得；西班牙僅 Rioja 與 Priorat 並列最高等級',
      '偏遠多山，遠離海岸；但仍受地中海海風影響，海拔高度是風格的決定性因素',
      'Llicorella 淺層板岩（單一層次）：葡萄藤深鑽汲取水分 → 低產 → 強勁深邃紅酒',
      '紅品種：Garnacha Tinta + Mazuelo（Carignan）為核心，加 Garnacha Peluda、Tempranillo 等；白品種：Garnacha Blanca 釀出豐富具質感白酒',
    ],
  },
]

const S2M3L2_slides = [
  {
    type: 'cover',
    icon: '🌊',
    gradient: 'linear-gradient(135deg, #c0392b, #e67e22)',
    title: 'Montsant · Terra Alta · Empordà',
    subtitle: 'Level 2 · 加泰羅尼亞的其他寶石',
    points: [
      { icon: '🔴', label: 'Montsant', desc: '環抱 Priorat 的「親兄弟」產區，品質優異但價格更親民' },
      { icon: '💨', label: 'Terra Alta', desc: '高原強風中的 Garnacha Blanca 白酒和 Garnacha 老藤紅酒' },
      { icon: '🌊', label: 'Empordà', desc: '比利牛斯山腳的地中海產區，Tramontana 強風特色' },
    ],
  },
  {
    type: 'map',
    title: 'Montsant 與周邊產區',
    mapRegion: 'catalonia',
    geojsonUrl: '/spain/geojson/appellations/priorat-montsant.geojson',
    description: '環繞 Priorat 的產區，同樣的板岩土壤，以更實惠的價格提供類似的礦物感風格。',
  },
  {
    type: 'compare',
    title: '加泰羅尼亞三寶產區比較',
    items: [
      {
        icon: '🔴',
        label: 'Montsant DO',
        desc: '環繞 Priorat 周圍，也有 Llicorella 板岩土壤局部分布。品種同為 Garnacha 和 Carignan（Cariñena）。被稱為「Priorat 的親民版」，品質卻不輸于人。',
        color: '#c0392b',
      },
      {
        icon: '💨',
        label: 'Terra Alta DO',
        desc: '位於加泰羅尼亞最南部內陸高原，海拔 400-600 公尺。強風造就果粒緊實。以 Garnacha Blanca（白 Garnacha）白酒聞名，也有老藤 Garnacha 紅酒。',
        color: '#e67e22',
      },
      {
        icon: '🌊',
        label: 'Empordà DO（Costa Brava）',
        desc: '庇里牛斯山腳，地中海沿岸。Tramontana（強烈北風）是其標誌。品種多元，包括 Garnacha、Carignan、Cabernet 等。以粉紅酒和輕盈紅酒著稱。',
        color: '#3498db',
      },
    ],
  },
  {
    type: 'quiz',
    question: '以下哪個加泰羅尼亞產區以「Garnacha Blanca（白 Garnacha）」白酒著稱，位於強風吹拂的高原上？',
    options: ['Montsant', 'Terra Alta', 'Empordà', 'Penedès'],
    answer: 1,
    explanation: 'Terra Alta 位於加泰羅尼亞最南部的內陸高原，以頻繁的強風和 Garnacha Blanca（白 Garnacha）白酒著稱，釀出的酒帶有豐滿口感、蜂蜜和白花特質。',
  },

  {
    type: 'summary',
    message: '加泰羅尼亞三寶學習完成！',
    keyPoints: [
      'Montsant：環繞 Priorat，類似風土但更親民，Garnacha + Carignan',
      'Terra Alta：強風高原，Garnacha Blanca 白酒是亮點，老藤紅酒也出色',
      'Empordà：庇里牛斯山腳地中海區，Tramontana 強風特色，粉紅酒和輕盈紅酒',
    ],
  },
]

const S2M3L3_slides = [
  {
    type: 'cover',
    icon: '🍾',
    gradient: 'linear-gradient(135deg, #2c3e50, #2980b9)',
    title: 'Penedès — 西班牙最早現代化的產區',
    subtitle: 'Level 2 · 不鏽鋼革命 · 95% Cava 故鄉 · Classic Penedès',
    points: [
      { icon: '🏭', label: '西班牙第一', text: '首個採用不鏽鋼發酵槽與低溫發酵，也是第一個嘗試原生與法國品種混釀的產區' },
      { icon: '🍾', label: 'Cava 核心', text: '全西班牙 95% 的 Cava 產自 Penedès，三大核心品種 Parellada・Macabeo・Xarel·lo' },
      { icon: '🌿', label: 'Classic Penedès', text: '100% 有機・傳統/祖傳法・15 個月以上陳年，最嚴格的高品質氣泡酒類別' },
    ],
  },
  {
    type: 'map',
    title: 'Penedès 與加泰羅尼亞白酒產區',
    mapRegion: 'catalonia',
    geojsonUrl: '/spain/geojson/appellations/penedes.geojson',
    description: '連接巴塞隆納與地中海，是 Cava 的發源地，現代西班牙白酒革命的中心。多元微氣候支持廣泛的品種試驗。',
  },
  {
    type: 'content',
    icon: '🏭',
    title: '西班牙最早現代化的先驅',
    html: `
      <p>Penedès 是<strong>西班牙最早走向現代化的葡萄酒產區</strong>，在兩大領域創下西班牙第一：</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
        <div style="background:#eaf4fb;border-left:4px solid #2980b9;padding:12px;border-radius:0 10px 10px 0">
          <strong>① 不鏽鋼發酵槽 + 低溫發酵（西班牙第一）</strong><br/>
          取代舊式氧化性木桶，低溫（12–16°C）慢速發酵保留揮發性香氣，徹底改變西班牙白酒面貌。Torres 家族是這場革命的推手。
        </div>
        <div style="background:#e9f7ef;border-left:4px solid #27ae60;padding:12px;border-radius:0 10px 10px 0">
          <strong>② 原生品種 × 法國國際品種混釀（西班牙第一）</strong><br/>
          Penedès 是第一個嘗試將 Parellada、Xarel·lo 等本地品種與 Chardonnay、Riesling 等法國品種進行混釀的地區，開啟了西班牙現代混釀風潮。
        </div>
        <div style="background:#fff3e0;border-left:4px solid #e65100;padding:12px;border-radius:0 10px 10px 0">
          <strong>③ 多元微氣候 × 有機永續</strong><br/>
          產區受益於多樣化的微氣候，使酒莊可嘗試被遺忘的原生品種或引入試驗新品種。有機種植與創新耕作在此蓬勃發展。
        </div>
      </div>
      <h4 style="margin-top:14px">🍾 Cava — Penedès 的另一張王牌</h4>
      <p>全西班牙 <strong>95% 的 Cava</strong> 產自 Penedès，核心生產地為聖薩杜尼達諾亞（Sant Sadurní d'Anoia）鎮，超過 250 家酒莊在此生產，包括 Codorníu 和 Freixenet。三大核心品種為 <strong>Parellada・Macabeo（Viura）・Xarel·lo（Pansa Blanca）</strong>。</p>
    `,
  },
  {
    type: 'content',
    icon: '🌿',
    title: 'Classic Penedès — 最嚴格的高品質氣泡酒類別',
    html: `
      <p>Penedès 推行名為 <strong>「Classic Penedès」</strong> 的頂級氣泡酒類別，要求標準極為嚴格，代表著產區對品質的最高承諾：</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>🍇 100% 來源保證</strong><br/>
          所有葡萄必須 <strong>100% 來自 Penedès 產區</strong>，確保完整的地方風土表達
        </div>
        <div style="background:#e3f2fd;border-left:4px solid #1565c0;padding:12px;border-radius:0 10px 10px 0">
          <strong>🍾 傳統法或祖傳法釀造</strong><br/>
          必須使用 <strong>傳統法（Traditional method）</strong> 或 <strong>祖傳法（Ancestral method）</strong> 進行二次瓶中發酵，確保最高工藝水準
        </div>
        <div style="background:#f1f8e9;border-left:4px solid #558b2f;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌿 100% 有機種植</strong><br/>
          全部葡萄園必須達到 <strong>100% 有機認證</strong>，體現 Penedès 永續農業的核心理念
        </div>
        <div style="background:#fff8e1;border-left:4px solid #f9a825;padding:12px;border-radius:0 10px 10px 0">
          <strong>⏳ 最少 15 個月陳年 → 全屬 Reserva 等級</strong><br/>
          必須在瓶中陳年至少 <strong>15 個月</strong>，因此所有 Classic Penedès 皆達到 <strong>Reserva</strong> 等級，代表更豐富的酵母自溶風味與細緻氣泡
        </div>
      </div>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Jean León（現代化先驅酒莊）',
    image: '/spain/images/labels/penedes/jean-leon-vinya-palau.jpg',
    caption: 'Jean León「Vinya Palau」（Torrelavit，Penedès DO）——與 Torres 家族齊名的另一位現代化先驅，1963 年率先在西班牙種植 Cabernet Sauvignon，是 Penedès 品種試驗精神的代表酒莊。',
  },
  {
    type: 'quiz',
    question: '關於「Classic Penedès」氣泡酒類別，以下哪項描述最為準確？',
    options: [
      '允許使用來自全加泰羅尼亞的葡萄，採用查馬法（Charmat method），無有機要求',
      '100% Penedès 葡萄、傳統/祖傳法釀造、100% 有機種植、至少 15 個月陳年（全為 Reserva）',
      '專門針對靜態紅酒的頂級分級，要求板岩土壤老藤',
      '與一般 Cava DO 完全相同的標準，只是更換了標籤名稱',
    ],
    answer: 1,
    explanation: 'Classic Penedès 是 Penedès 推行的頂級氣泡酒類別，四大嚴格條件：①100% Penedès 產區葡萄，②必須用傳統法或祖傳法釀造，③100% 有機種植認證，④至少 15 個月瓶中陳年（因此全屬 Reserva 等級）。這是 Penedès 與一般 Cava DO 的重要區別。',
  },
  {
    type: 'quiz',
    question: 'Penedès 在西班牙葡萄酒史上有哪兩項「第一」？',
    options: [
      '第一個使用 Flor 酵母，以及第一個採用索雷拉動態陳年系統',
      '第一個使用不鏽鋼發酵槽與低溫發酵；第一個嘗試原生品種與法國國際品種混釀',
      '第一個取得 DOCa 認證，以及第一個種植 Tempranillo 的產區',
      '第一個採用生物動力農法，以及第一個生產氣泡酒的西班牙產區',
    ],
    answer: 1,
    explanation: 'Penedès 是西班牙最早現代化的產區，創下兩項第一：①西班牙第一個採用不鏽鋼發酵槽與低溫發酵技術的產區（Torres 家族引領），②西班牙第一個嘗試將原生品種（Parellada、Xarel·lo 等）與法國國際品種（Chardonnay、Riesling 等）進行混釀的地區。',
  },
  {
    type: 'summary',
    message: 'Penedès 學習完成！',
    keyPoints: [
      '西班牙最早現代化：第一個用不鏽鋼+低溫發酵，第一個嘗試原生×法國品種混釀',
      '全西班牙 95% Cava 產自 Penedès，三大核心品種：Parellada・Macabeo・Xarel·lo',
      '多元微氣候支持廣泛品種試驗，有機耕作與創新農法蓬勃發展',
      'Classic Penedès：100% 有機 + 傳統/祖傳法 + 100% 當地葡萄 + 15 個月陳年（全為 Reserva）',
    ],
  },
]

// ─── S2M3L4 — Alella DO ──────────────────────────────────────────────────────
const S2M3L4_slides = [
  {
    type: 'cover',
    icon: '🌸',
    gradient: 'linear-gradient(135deg, #0277bd, #26c6da)',
    title: 'Alella DO — 巴塞隆那海岸的芳香白酒',
    subtitle: 'Level 2 · 加泰羅尼亞 · 花崗岩土壤精品產區',
    points: [
      { icon: '🌊', label: '地中海海岸', text: '緊鄰海岸，溫暖海風調節氣候，與都市巴塞隆那比鄰而居' },
      { icon: '🪨', label: '花崗岩土壤', text: '花崗岩（granite）為主，低肥力、排水良好，海拔高度定義酒款風格' },
      { icon: '🌸', label: 'Pansà Blanca 為核心', text: '即 Cava 的 Xarel·lo，在 Alella 釀出芳香有表現力、帶花香且口感清脆的白酒' },
    ],
  },
  {
    type: 'map',
    title: 'Alella DO 位置',
    mapRegion: 'catalonia',
    geojsonUrl: '/spain/geojson/appellations/alella.geojson',
    description: '位於巴塞隆那省北側海岸，面積極小，都市化壓力持續壓縮葡萄園空間。地中海溫暖海風與花崗岩山丘共同定義產區特色。',
  },
  {
    type: 'content',
    icon: '🌍',
    title: '風土條件：海岸 × 花崗岩 × 海拔',
    html: `
      <p>Alella 是加泰羅尼亞最小的 DO 之一，卻以<strong>獨特的花崗岩風土</strong>和<strong>芳香型白酒</strong>在市場上極具辨識度。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#e1f5fe;border-left:4px solid #0277bd;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌊 氣候：地中海溫和海岸型</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>緊鄰海岸，地中海<strong>溫暖海風</strong>調節，氣候相對溫和（moderate）</li>
            <li>夏季不過於炎熱，有助保留葡萄天然酸度與細緻花香</li>
          </ul>
        </div>
        <div style="background:#efebe9;border-left:4px solid #6d4c41;padding:12px;border-radius:0 10px 10px 0">
          <strong>🪨 土壤：花崗岩（Granite）</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>主要由<strong>花崗岩</strong>組成，低肥力、排水良好</li>
            <li>賦予葡萄酒礦石感與清爽的骨幹結構</li>
          </ul>
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>⛰️ 海拔是關鍵因素</strong><br/>
          產區內<strong>海拔高度</strong>是定義葡萄酒風格的關鍵——較高海拔的葡萄園日夜溫差更大，有助保留細膩香氣與清脆酸度，是精品白酒的來源地
        </div>
        <div style="background:#fff3e0;border-left:4px solid #e65100;padding:12px;border-radius:0 10px 10px 0">
          <strong>🏙️ 都市化壓力</strong><br/>
          緊鄰巴塞隆那，城市擴張使產區面積持續縮小，但倖存的小農酒莊以精品高品質路線維持市場地位
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: 'Alella DO 葡萄品種',
    items: [
      {
        icon: '🌸',
        label: 'Pansà Blanca（核心白品種）',
        desc: '即 Cava 產區的 Xarel·lo，在 Alella 有其專屬地方名稱。花崗岩土壤賦予其獨特的礦石感與清脆骨幹，釀出芳香、有表現力、帶花香且口感清脆的白酒',
        color: '#0277bd',
      },
      {
        icon: '🍋',
        label: 'Chardonnay',
        desc: '國際白品種，在 Alella 涼爽海岸微氣候下展現清爽果香與優雅質地，常用於釀造現代風格白酒',
        color: '#f9a825',
      },
      {
        icon: '🍷',
        label: 'Garnacha / Ull de Llebre（Tempranillo）/ Merlot',
        desc: '紅品種相對次要，產量有限。Ull de Llebre 是 Tempranillo 的加泰羅尼亞語名稱（意為「野兔眼」），Garnacha 在地中海氣候下有適度表現',
        color: '#b71c1c',
      },
      {
        icon: '🫐',
        label: 'Monastrell',
        desc: '較少為人知的紅酒選項，在 Alella 產量極小。相較於著名的芳香白酒，Monastrell 紅酒是產區的另一面——酒體厚實、深色漿果風味',
        color: '#4a148c',
      },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Cau d\'en Genís（Alta Alella）',
    image: '/spain/images/labels/alella/cau-den-genis-2022.png',
    caption: 'Alta Alella「Cau d\'en Genís」2022，Família Pujol-Busquets——酒標明確標示「Pansa Blanca (Xarel·lo)」與「Granitic Soil」，是本文提到核心白品種與花崗岩風土的最佳示範，並採有機認證釀造。',
  },
  {
    type: 'quiz',
    question: '關於 Alella DO，以下哪項描述最為準確？',
    options: [
      '以板岩土壤著稱，Garnacha 老藤為核心，產區橫跨多省',
      '緊鄰巴塞隆那海岸，花崗岩土壤，Pansà Blanca（即 Xarel·lo）為核心白品種；白酒以芳香、有表現力、帶花香且清脆著稱',
      '以 Monastrell 紅酒聞名，也生產部分 Cava 氣泡酒',
      '屬於 DOCa 等級，是加泰羅尼亞繼 Priorat 之後的第二個 DOCa',
    ],
    answer: 1,
    explanation: 'Alella DO 緊鄰巴塞隆那海岸，以花崗岩土壤和 Pansà Blanca（在 Cava 稱 Xarel·lo）白酒著稱。地中海溫暖海風提供溫和氣候，海拔高度是定義酒款風格的關鍵因素。白酒以芳香、有表現力、帶花香且口感清脆的風格在市場上極具特色。',
  },
  {
    type: 'summary',
    message: 'Alella DO 學習完成！',
    keyPoints: [
      '加泰羅尼亞精緻小型 DO，緊鄰巴塞隆那海岸；都市化壓力持續縮小產區面積',
      'Pansà Blanca（即 Cava 的 Xarel·lo）是核心白品種，花崗岩土壤賦予礦石感骨幹',
      '地中海溫暖海風調節氣候溫和，海拔高度是定義風格的關鍵因素',
      '白酒以芳香（aromatic）、有表現力（expressive）、帶花香且清脆（flowery crispy）著稱',
      '也生產少量 Garnacha、Ull de Llebre（Tempranillo）、Monastrell 紅酒',
    ],
  },
]

// ─── S2M3L5 — Catalunya DO ───────────────────────────────────────────────────
const S2M3L5_slides = [
  {
    type: 'cover',
    icon: '🌊',
    gradient: 'linear-gradient(135deg, #c0392b, #f39c12)',
    title: 'Catalunya DO — 加泰羅尼亞廣域覆蓋產區',
    subtitle: 'Level 2 · 地中海海風 · 海拔與海距是核心',
    points: [
      { icon: '🗺️', label: '巨型廣域 DO', text: '涵蓋加泰羅尼亞大部分土地，包羅眾多頂尖葡萄生產次產區' },
      { icon: '🌊', label: '地中海海風', text: '全區葡萄園，無論距海遠近，皆共享地中海溫暖海風的洗禮' },
      { icon: '⛰️', label: '海拔 × 海距', text: '海拔高度與距海遠近是理解加泰羅尼亞葡萄酒風格與釀造方式的核心要素' },
    ],
  },
  {
    type: 'map',
    title: 'Catalunya DO 廣域範圍',
    mapRegion: 'catalonia',
    geojsonUrl: '/spain/geojson/appellations/catalonia.geojson',
    description: '以加泰隆尼亞（Cataluña）命名的廣域 DO，覆蓋現今加泰羅尼亞大部分地區，同時包含 10 個 DO 及 1 個 DOCa（Priorat）。',
  },
  {
    type: 'content',
    icon: '🗺️',
    title: 'Catalunya DO：廣域架構與產區地位',
    html: `
      <p>Catalunya DO 是一個<strong>「巨型區域」（massive area）</strong>，以加泰隆尼亞自治區命名，其涵蓋範圍幾乎覆蓋了整個加泰羅尼亞。</p>
      <h4>🏛️ 產區架構</h4>
      <ul>
        <li>Catalunya DO 本身是一個<strong>廣域覆蓋型 DO</strong>，允許酒莊在更廣泛的範圍內調配葡萄</li>
        <li>在其版圖之內，同時並存著另外 <strong>10 個 DO</strong>（如 Penedès、Empordà、Alella、Montsant、Terra Alta 等）</li>
        <li>還有 <strong>1 個 DOCa</strong>（Priorat，加泰羅尼亞語稱 DOQ），是西班牙最高品質認證等級之一</li>
      </ul>
      <h4>🌊 氣候的共同特徵</h4>
      <p>儘管加泰羅尼亞幅員廣大，但全區葡萄園有一個共同點：<strong>暴露在地中海的溫暖海風之中</strong>。無論距離海岸遠近，這股來自地中海的影響力滲透到整個產區。</p>
      <h4>🌡️ 風土的多樣性</h4>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
        <div style="background:#e1f5fe;border-left:4px solid #0277bd;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌊 溫和海岸型</strong>（如 Alella）<br/>
          緊鄰海岸，氣候溫和，地中海海風直接調節，葡萄保有天然清爽酸度
        </div>
        <div style="background:#fce4ec;border-left:4px solid #c62828;padding:12px;border-radius:0 10px 10px 0">
          <strong>⛰️ 偏遠山區型</strong>（如 Priorat）<br/>
          深入內陸山區，海拔高，日夜溫差大，地中海影響較間接；但仍受其調節，造就濃縮有力的酒款
        </div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '⛰️',
    title: '海拔 × 距海：加泰羅尼亞風格的兩大關鍵',
    html: `
      <p>在加泰羅尼亞，<strong>海拔高度（elevation）</strong>與<strong>與海洋的距離（proximity to the sea）</strong>是理解當地葡萄酒風味特質及釀造方式的<strong>核心要素</strong>。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>⛰️ 海拔高度的影響</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>海拔越高 → 日夜溫差越大 → 保留更高天然酸度</li>
            <li>高海拔葡萄園通常生長期較長，葡萄有更多時間發展複雜風味</li>
            <li>如 Priorat（100–700 公尺）：濃縮力強、礦石感突出</li>
          </ul>
        </div>
        <div style="background:#fff3e0;border-left:4px solid #e65100;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌊 與海洋距離的影響</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>距海越近 → 氣候越溫和，日夜溫差較小，風格清爽精緻</li>
            <li>如 Alella：緊鄰海岸，花崗岩土壤加上溫和海風，芳香白酒見長</li>
            <li>距海越遠 → 大陸性氣候特征增強，酒體更厚實，熟果風格更濃郁</li>
          </ul>
        </div>
        <div style="background:#f3e5f5;border-left:4px solid #7b1fa2;padding:12px;border-radius:0 10px 10px 0">
          <strong>📊 組合效應：風格矩陣</strong><br/>
          海拔高 × 近海 → 清爽優雅（精品型）<br/>
          海拔高 × 遠海 → 濃縮有力（如 Priorat）<br/>
          海拔低 × 近海 → 輕盈芳香（如 Alella）<br/>
          海拔低 × 遠海 → 豐滿厚實（大量產型）
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: '加泰羅尼亞分級體系一覽',
    items: [
      {
        icon: '🏅',
        label: 'DOCa / DOQ — Priorat',
        desc: '西班牙最高品質認證之一；在加泰羅尼亞以加泰隆尼亞語稱「DOQ」（Denominació d\'Origen Qualificada），全國僅 Rioja 與 Priorat 擁有此等級',
        color: '#c0392b',
      },
      {
        icon: '🍷',
        label: '10 個子 DO',
        desc: '包括 Penedès、Montsant、Terra Alta、Empordà、Alella、Conca de Barberà、Costers del Segre、Pla de Bages、Tarragona、Cava（跨區）等，各具地方特色',
        color: '#8e44ad',
      },
      {
        icon: '🗺️',
        label: 'Catalunya DO（廣域）',
        desc: '涵蓋加泰羅尼亞大部分土地的廣域產區認證，允許跨越各子 DO 邊界調配，常見於中階定位酒款；反映整個加泰羅尼亞的地中海海風共同性格',
        color: '#e67e22',
      },
    ],
  },
  {
    type: 'quiz',
    question: '在加泰羅尼亞，以下哪兩個因素被認為是理解當地葡萄酒風格及釀造方式的「核心要素」？',
    options: [
      '土壤類型（板岩 vs 花崗岩）與年降雨量',
      '海拔高度（elevation）與距海遠近（proximity to the sea）',
      '橡木桶種類（美國 vs 法國）與陳年時間',
      '葡萄品種選擇（紅 vs 白）與採收時間',
    ],
    answer: 1,
    explanation: '在加泰羅尼亞，海拔高度（elevation）與和海洋的距離（proximity to the sea）是理解該地葡萄酒風格特質及釀造方式的核心要素。海拔決定溫差與酸度保留，距海遠近決定氣候溫和程度。兩者組合構成了從清爽精緻（近海低海拔 Alella）到濃縮有力（遠海高海拔 Priorat）的廣大風格譜系。',
  },
  {
    type: 'summary',
    message: 'Catalunya DO 學習完成！',
    keyPoints: [
      'Catalunya DO 是涵蓋加泰羅尼亞大部分的廣域 DO，包羅許多頂尖葡萄次產區',
      '全區共同特徵：暴露在地中海溫暖海風之中，無論距海遠近皆受其影響',
      '區內並存 10 個 DO（如 Penedès、Alella、Montsant）及 1 個 DOCa（Priorat）',
      '核心要素：海拔高度 × 距海遠近，決定了從清爽（Alella）到濃縮（Priorat）的多元風格',
    ],
  },
]

// ─── S2M3L6 — Conca de Barberá DO ───────────────────────────────────────────
const S2M3L6_slides = [
  {
    type: 'cover',
    icon: '🏔️',
    gradient: 'linear-gradient(135deg, #1a6b3a, #f39c12)',
    title: 'Conca de Barberá DO — 山脈庇護下的白酒王國',
    subtitle: 'Level 2 · 加泰羅尼亞 · Cava 基酒的重要基石',
    points: [
      { icon: '🏔️', label: '山脈屏障', text: '山脈遮蔽隔絕海洋影響，形成獨特的內陸氣候，有別於沿海同屬加泰羅尼亞的其他 DO' },
      { icon: '🥂', label: 'Cava 基石', text: '大比例產量作為 Cava 氣泡酒基酒，以 Macabeo 和 Parellada 白品種為核心' },
      { icon: '🍷', label: 'Trepat 原生種', text: '本地特色紅品種 Trepat，以清爽淡雅風格聞名，是產區的個性標誌' },
    ],
  },
  {
    type: 'map',
    title: 'Conca de Barberá DO 位置',
    mapRegion: 'catalonia',
    geojsonUrl: '/spain/geojson/appellations/conca-de-barbera.geojson',
    description: '位於加泰羅尼亞內陸，受山脈屏障與海洋隔絕，以白葡萄酒及 Cava 基酒生產聞名，是加泰羅尼亞 10 個 DO 之一。',
  },
  {
    type: 'content',
    icon: '🏔️',
    title: '地理特徵：山脈庇護的內陸盆地',
    html: `
      <p>Conca de Barberá（意為「Barberá 盆地」）坐落於加泰羅尼亞內陸，其最重要的地理特色是<strong>被山脈所遮蔽，與海洋隔絕</strong>。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>🏔️ 山脈屏障效應</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>周圍山脈有效隔斷了直接來自地中海的暖濕海風</li>
            <li>相較於沿海 DO（如 Alella），氣候更偏大陸性，晝夜溫差更顯著</li>
            <li>較涼爽的夜間溫度有助葡萄保留天然酸度，對白品種和 Cava 基酒至關重要</li>
          </ul>
        </div>
        <div style="background:#fff3e0;border-left:4px solid #e65100;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌡️ 氣候特性</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>受山脈保護，夏季較乾燥，冬季較寒冷</li>
            <li>日夜溫差大，有助維持葡萄的清新香氣與骨幹酸度</li>
            <li>整體氣候有別於直接受地中海影響的沿海產區</li>
          </ul>
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: 'Conca de Barberá DO 葡萄品種',
    items: [
      {
        icon: '🍋',
        label: 'Macabeo（白）',
        desc: 'Cava 三大核心品種之一，在 Conca de Barberá 提供清爽果味與酸度骨幹；也用於釀造靜態白酒，風格輕盈柑橘調',
        color: '#f9a825',
      },
      {
        icon: '🌸',
        label: 'Parellada（白）',
        desc: 'Cava 三大品種中最芬芳的一個，主要種植於較高海拔區域，賦予 Cava 和靜態白酒清新花香與精緻酸度，Conca de Barberá 是其重要產地',
        color: '#0277bd',
      },
      {
        icon: '🔴',
        label: 'Trepat（紅，本地原生種）',
        desc: '加泰羅尼亞本地特色紅品種，幾乎僅見於 Conca de Barberá。以淡寶石紅色、清爽高酸、低單寧、紅莓果香著稱；常釀成粉紅酒或輕盈紅酒，是產區的個性標誌',
        color: '#c0392b',
      },
      {
        icon: '🍇',
        label: 'Cabernet Sauvignon & Ull de Llebre（Tempranillo）',
        desc: 'Cabernet Sauvignon 提供結構與黑醋栗風味；Ull de Llebre 是 Tempranillo 的加泰羅尼亞語名，帶來豐潤紅果與圓潤單寧。兩者在產區共同豐富了紅酒陣容',
        color: '#6d4c41',
      },
    ],
  },
  {
    type: 'content',
    icon: '🥂',
    title: 'Cava 產業的幕後推手',
    html: `
      <p>Conca de Barberá DO 在加泰羅尼亞，乃至整個 Cava 產業中，扮演著不可或缺的<strong>基酒供應者</strong>角色。</p>
      <h4>🥂 為何 Conca de Barberá 是 Cava 的關鍵？</h4>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
        <div style="background:#e1f5fe;border-left:4px solid #0277bd;padding:12px;border-radius:0 10px 10px 0">
          <strong>① 理想的基酒條件</strong><br/>
          山脈屏障帶來的較涼爽氣候，使葡萄保留高酸度——這正是 Cava 傳統法二次發酵後需要的骨幹基礎
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>② 核心品種配合</strong><br/>
          Macabeo 和 Parellada 恰好是 Cava 法定三大品種中的兩種（加上 Xarel·lo），Conca de Barberá 大量種植兩者，天然符合 Cava 生產規範
        </div>
        <div style="background:#fff8e1;border-left:4px solid #f9a825;padding:12px;border-radius:0 10px 10px 0">
          <strong>③ 大比例供應基酒</strong><br/>
          產區相當大比例的年產量直接以基酒型態輸往 Penedès 聖薩杜尼達諾亞鎮（Cava 的主要生產中心），由大型 Cava 酒莊（如 Codorníu、Freixenet）接收後進行二次瓶中發酵
        </div>
      </div>
      <h4 style="margin-top:14px">🍾 靜態白酒的傳統聲譽</h4>
      <p>除 Cava 基酒外，Conca de Barberá 也以釀造靜態白葡萄酒見長，Parellada 的花香清新與 Macabeo 的柑橘清爽共同構成產區白酒的基本風格輪廓。</p>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Mont-Blanc 362',
    image: '/spain/images/labels/conca-de-barbera/montblanc-362.png',
    caption: 'Mont-Blanc「362」，Conca de Barberà D.O.——酒標標示混釀品種「Parellada, Macabeo, Sauvignon Blanc」，正是本文提到的 Cava 基酒兩大核心白品種在此地的靜態白酒表現。',
  },
  {
    type: 'quiz',
    question: '關於 Conca de Barberá DO，以下哪一項描述最為準確？',
    options: [
      '位於地中海沿岸，以 Garnacha 老藤紅酒著稱，板岩土壤是風土核心',
      '受山脈遮蔽與海洋隔絕，以白葡萄酒聞名，大比例產量供應 Cava 基酒；本地原生紅品種 Trepat 是個性標誌',
      '是西班牙僅有兩個 DOCa 之一，以 Llicorella 板岩土壤和百年老藤聞名',
      '以 Albariño 白酒聞名，受大西洋影響，屬於加利西亞風格',
    ],
    answer: 1,
    explanation: 'Conca de Barberá 受山脈屏障與海洋隔絕，形成偏大陸性氣候，以白葡萄酒長期聞名，並以大比例產量作為 Cava 基酒（以 Macabeo 和 Parellada 為主）。本地原生紅品種 Trepat 風格清爽淡雅，是產區不可或缺的個性標誌。',
  },
  {
    type: 'summary',
    message: 'Conca de Barberá DO 學習完成！',
    keyPoints: [
      '加泰羅尼亞 10 個 DO 之一，受山脈遮蔽，氣候有別於沿海產區，日夜溫差保留酸度',
      '主要白品種：Macabeo + Parellada（均為 Cava 核心品種），大比例產量作 Cava 基酒',
      '本地特色紅品種 Trepat：清爽高酸、淡色、紅莓果香，幾乎僅見於此產區',
      '也種植 Cabernet Sauvignon 和 Ull de Llebre（Tempranillo）豐富紅酒陣容',
    ],
  },
]

// ─── S2M3L7 — Costers del Segre DO ────────────────────────────────────
const S2M3L7_slides = [
  {
    type: 'cover',
    icon: '🌊',
    gradient: 'linear-gradient(135deg, #1565c0, #43a047)',
    title: 'Costers del Segre DO — 塞格雷河兩岸的混釀先驅',
    subtitle: 'Level 2 · 加泰羅尼亞 · 本地 × 法國品種創新之路',
    points: [
      { icon: '🌊', label: '塞格雷河兩岸', text: '沿 River Segre 延伸，河川調節氣候，形成特殊的內陸產區風土環境' },
      { icon: '🍾', label: '本地 × 國際混釀', text: '將當地品種（如 Garnacha、Ull de Llebre）與法國品種（如 Cabernet Sauvignon、Chardonnay）混釀，是產區標誌哲學' },
      { icon: '🌱', label: '多元品種庫', text: '白葡萄同時容納本地與國際品種，紅葡萄涵蓋 Garnacha、Tempranillo、Pinot Noir 等多達 9 個品種' },
    ],
  },
  {
    type: 'map',
    title: 'Costers del Segre DO 位置',
    mapRegion: 'catalonia',
    geojsonUrl: '/spain/geojson/appellations/costers-del-segre.geojson',
    description: '沿塞格雷河（River Segre）兩岸延伸，位於加泰羅尼亞內陸西部，以本地與法國品種混釀聞名的加泰羅尼亞 DO。',
  },
  {
    type: 'content',
    icon: '🌊',
    title: '地理特徵：塞格雷河兩岸的產區風土',
    html: `
      <p>Costers del Segre 意為「塞格雷河的山坡」，產區沿著加泰羅尼亞內陸的<strong>塞格雷河（River Segre）兩岸</strong>延伸。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#e3f2fd;border-left:4px solid #1565c0;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌊 河流微氣候</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>塞格雷河帶來濕潤的河流微氣候，調節周邊區域的溫度波動</li>
            <li>內陸區位於加泰羅尼亞西部，遠離海岸影響，大陸性氣候特徵更顯著</li>
            <li>日夜溫差顯著，有助保留天然酸度與細緻香氣</li>
          </ul>
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>🏗️ 產區的分散小區結構</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>Costers del Segre DO 內部有幾個分散的小區塊，分布於河流上下游</li>
            <li>小區塊之間氣候與地形各有差異，提供多樣的風土選擇</li>
          </ul>
        </div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '🍾',
    title: '釀造哲學：本地 × 法國品種混釀',
    html: `
      <p>Costers del Segre 最標誌性的特色，在於將<strong>本地原生品種</strong>與<strong>法國引進品種</strong>進行混釀。</p>
      <h4>🍾 混釀哲學的邏輯</h4>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
        <div style="background:#fff3e0;border-left:4px solid #e65100;padding:12px;border-radius:0 10px 10px 0">
          <strong>本地品種的貢獻</strong><br/>
          Garnacha 和 Ull de Llebre（Tempranillo）提供熟果豐潤與加泰羅尼亞地中海的風土屬性；Trepat 彰顯產區原生識別度
        </div>
        <div style="background:#e3f2fd;border-left:4px solid #1565c0;padding:12px;border-radius:0 10px 10px 0">
          <strong>法國品種的貢獻</strong><br/>
          Cabernet Sauvignon 和 Merlot 引入結構度與黑醋栗複雜層次；Chardonnay 和 Sauvignon Blanc 強化白酒的國際風格與市場吸引力；Pinot Noir 為紅酒加入紅莓果的精緻感
        </div>
        <div style="background:#f3e5f5;border-left:4px solid #7b1fa2;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌟 新舊世界的對話</strong><br/>
          這種混釀哲學在 1980 年代引進國際品種時引發爭議，如今卻成為產區的利器——同時吸引追求順口易飲的一般消費者，以及尋求風土深度的進階買家
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: 'Costers del Segre DO 葡萄品種庫',
    items: [
      {
        icon: '🍋',
        label: '白品種：本地系',
        desc: 'Macabeo、Parellada、Xarel·lo（加泰羅尼亞經典三大白品種）、Garnacha Blanca、Albariño（加利西亞白品種，在此為創新試驗）',
        color: '#f9a825',
      },
      {
        icon: '🍷',
        label: '白品種：國際系',
        desc: 'Chardonnay、Riesling、Sauvignon Blanc——三大國際白葡萄品種，賦予產區白酒更廣的風格譜系與國際市場競爭力',
        color: '#0277bd',
      },
      {
        icon: '🔴',
        label: '紅品種：本地系',
        desc: 'Garnacha Tinta、Ull de Llebre（Tempranillo）、Monastrell、Trepat、Samsó（Carignan）——這五個本地品種為產區紅酒提供地中海風格與結構',
        color: '#c0392b',
      },
      {
        icon: '🍇',
        label: '紅品種：國際系',
        desc: 'Cabernet Sauvignon、Merlot、Pinot Noir、Syrah——法國四大紅葡萄品種悉數入駐，各自貢獻結構、單寧、橡木層次與辛香特色',
        color: '#4a148c',
      },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Llebre（Tomàs Cusiné）',
    image: '/spain/images/labels/costers-del-segre/llebre-2016.jpg',
    caption: 'Tomàs Cusiné「Llebre」2016（El Vilosell，Costers del Segre）——酒名「Llebre」在加泰語意為「野兔」，呼應本地品種 Ull de Llebre（字面意為「兔子的眼睛」，即 Tempranillo 在加泰羅尼亞的名稱）。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Celistia（Costers del Sió）',
    image: '/spain/images/labels/costers-del-segre/celistia-tierra.jpg',
    caption: 'Celistia Tierra Costers del Sió（Lleida/Catalunya，D.O. Costers del Segre）——展現產區內部各分散小區塊的風土多樣性。',
  },
  {
    type: 'quiz',
    question: 'Costers del Segre DO 最標誌性的釀造哲學是什麼？',
    options: [
      '全面採用自然派釀造，只使用本地原生品種，拒絕引進外來品種',
      '將本地葡萄品種與法國葡萄品種進行混釀，融合傳統與創新',
      '專門生產 Cava 氣泡酒基酒，葡萄品種限定 Macabeo、Xarel·lo、Parellada 三種',
      '僅生產加強酒與甜酒，風格小眾精實，僅供當地消費',
    ],
    answer: 1,
    explanation: 'Costers del Segre DO 最大的特色是將本地葡萄品種（如 Garnacha、Ull de Llebre、Trepat）與法國引進品種（如 Cabernet Sauvignon、Chardonnay、Pinot Noir）進行混釀，展現傳統與創新的對話。產區沿塞格雷河兩岸延伸，內陸大陸性氣候加上日夜溫差，為多樣風格的葡萄產區提供良好生長基礎。',
  },
  {
    type: 'summary',
    message: 'Costers del Segre DO 學習完成！',
    keyPoints: [
      '沿塞格雷河（River Segre）兩岸延伸，內陸大陸性氣候，日夜溫差保留酸度與香氣',
      '標誌哲學：本地品種（Garnacha、Ull de Llebre、Trepat）與法國品種（Cabernet、Chardonnay）混釀',
      '白品種：Macabeo、Parellada、Xarel·lo、Chardonnay、Garnacha Blanca、Riesling、Sauvignon Blanc、Albariño',
      '紅品種：Garnacha Tinta、Ull de Llebre、Cabernet Sauvignon、Merlot、Monastrell、Trepat、Samsó、Pinot Noir、Syrah',
    ],
  },
]

// ─── S2M3L8 — Empordà DO ─────────────────────────────────────────────
const S2M3L8_slides = [
  {
    type: 'cover',
    icon: '🌊',
    gradient: 'linear-gradient(135deg, #0d47a1, #e53935)',
    title: 'Empordà DO — 地中海海風上的現代轉型',
    subtitle: 'Level 2 · 加泰羅尼亞 · 甜酒轉紅酒 · Garnacha Blanca 白酒亮點',
    points: [
      { icon: '🌊', label: '地中海沙質海岸', text: '沿海丘陵地帶，沙質土壤為主，暴露於地中海溫暖海風之中' },
      { icon: '🔄', label: '甜酒轉紅酒', text: '傳統上以加烈甜酒聞名，現已轉向釀造現代風格紅葡萄酒，是產區正在經歷的重要轉型' },
      { icon: '🍷', label: 'Garnacha Blanca 白酒', text: '生產口感豐潤、具質感的 Garnacha Blanca 白酒，風格均衡，是產區白酒中特別亮眼的存在' },
    ],
  },
  {
    type: 'map',
    title: 'Empordà DO 位置',
    mapRegion: 'catalonia',
    geojsonUrl: '/spain/geojson/appellations/emporda.geojson',
    description: '位於加泰羅尼亞最北端，庇里牛斯山腳地中海沿岸，鄰近法國邊境。地中海海風與沙質土壤是產區的兩大風土標誌。',
  },
  {
    type: 'content',
    icon: '🌡️',
    title: '風土檢驗：沙質土壤 × 地中海海風',
    html: `
      <p>Empordà 位於加泰羅尼亞最北端，地中海沿岸地帶，風土由<strong>沙質土壤</strong>與<strong>地中海潮濕海風</strong>共同塑造。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#e3f2fd;border-left:4px solid #0d47a1;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌊 地中海海風影響</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>如同加泰羅尼亞其他海岸產區，葡萄園暴露於<strong>地中海潮濕海風</strong>之中</li>
            <li>海風調節氣溫，避免夏季過熱，保留葡萄酸度與香氣新鮮度</li>
            <li>海拔高度與距海遠近是理解加泰羅尼亞產區風格的核心要素</li>
          </ul>
        </div>
        <div style="background:#fff8e1;border-left:4px solid #f9a825;padding:12px;border-radius:0 10px 10px 0">
          <strong>🪫 沙質土壤的魔力</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>產區主要土壤為<strong>沙質土壤</strong>，排水良好</li>
            <li>沙質土壤肥力低，葡萄自然低產，有助提升果實濃縮度與品種表達</li>
            <li>與南部板岩產區（如 Priorat）風格迥異，呈現更清爽活潑的果味</li>
          </ul>
        </div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '🔄',
    title: '產區轉變：甜酒 → 現代紅酒',
    html: `
      <p>Empordà DO 正在經歷一場引人注目的<strong>風格轉型</strong>：從傳統加烈甜酒產區蛻變為現代紅葡萄酒產區。</p>
      <h4>🍰 過去：甜酒的天下</h4>
      <p>單寧豐潤的加烈甜酒曾是 Empordà 的主角，尤其是以 Garnacha 與 Cariñena 釀造的傳統陳年型甜酒（Garnatxa d'Empordà），大有名氣。</p>
      <h4>🔥 現在：現代紅酒的崛起</h4>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
        <div style="background:#fce4ec;border-left:4px solid #c62828;padding:12px;border-radius:0 10px 10px 0">
          <strong>產區新一代釀酒師</strong>展示了新的釀造哲學：減少增度、清爽果味導向、更精準地表現風土特色。
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>Garnacha Tinta 與 Cariñena</strong>是現代 Empordà 紅酒的骨幹：地中海潮濕氣候下的熟果豐潤，加上 Cariñena 的酸度與香料骨幹，性格鮮明。
        </div>
        <div style="background:#f3e5f5;border-left:4px solid #7b1fa2;padding:12px;border-radius:0 10px 10px 0">
          <strong>產區也以粉紅酒（rosé）能力聞名</strong>，果味豐潤又不失清爽，是夏日的理想選擇。
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: 'Empordà DO 葡萄品種',
    items: [
      {
        icon: '🍋',
        label: 'Garnacha Blanca · Garnacha Roja（白）',
        desc: 'Garnacha Blanca 釀造出口感豐潤、具質感的白酒，是產區白酒亮點；Garnacha Roja（又稱 Garnacha Gris）提供芳香花香與豐潤感',
        color: '#f9a825',
      },
      {
        icon: '🌸',
        label: 'Macabeo · Moscatel de Alejandría（白）',
        desc: 'Macabeo 清爽果味，常用於白酒與 Cava 基酒；Moscatel de Alejandría 帶有強烈的花香與麝香葡萄氣息，用於芳香型白酒或甜酒',
        color: '#0277bd',
      },
      {
        icon: '🔴',
        label: 'Garnacha Tinta（紅）',
        desc: '現代 Empordà 紅酒的主力品種，地中海氣候下的熟果豐潤，紅色漿果特色鮮明，可即飲也可短期橡木桶陳年，是產區轉型的最佳代表',
        color: '#c0392b',
      },
      {
        icon: '🟣',
        label: 'Cariñena（紅）',
        desc: '即 Carignan，在 Empordà 呈現高酸、深色、豐潤香料的特性。與 Garnacha 混釀提供結構與高酸骨幹，提升紅酒複雜度和陳年潛力',
        color: '#4a148c',
      },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Mas Llunes「Maragda」',
    image: '/spain/images/labels/emporda/mas-llunes-maragda-2024.png',
    caption: 'Mas Llunes「Maragda」2024，Empordà D.O.——加泰羅尼亞最北端產區的現代酒標設計，是本文提到產區轉型現代風格的代表酒莊之一。',
  },
  {
    type: 'quiz',
    question: '關於 Empordà DO，以下哪一項描述最為準確？',
    options: [
      '可釀造 Cava 氣泡酒，以 Llicorella 板岩土壤百年老藤聞名，屬 DOCa 等級',
      '傳統上以加烈甜酒聞名，目前已轉向現代紅葡萄酒；沙質土壤，暴露於地中海海風；Garnacha Blanca 白酒豐潤具質',
      '受山脈屏障與海洋隔絕，主要生產 Cava 基酒，Trepat 是獨特原生種',
      '屬於 Costers del Segre 的小區塊，沿塞格雷河延伸，本地與法國品種混釀',
    ],
    answer: 1,
    explanation: 'Empordà DO 傳統上以加烈甜酒（如 Garnatxa d\'Empordà）聞名，現已轉型專注現代紅葡萄酒。產區土壤主要為沙質土壤，暴露於地中海海風。白酒方面以 Garnacha Blanca 釀造的口感豐潤、具質感的白酒最有特色。海拔高度與距海遠近是理解加泰羅尼亞各產區風格的核心要素。',
  },
  {
    type: 'summary',
    message: 'Empordà DO 學習完成！',
    keyPoints: [
      '加泰羅尼亞最北端 DO，地中海沿岸，沙質土壤，暴露於地中海潮濕海風',
      '風格轉型：傳統加烈甜酒 → 現代紅酒（Garnacha Tinta + Cariñena 為主力）',
      'Garnacha Blanca 白酒豐潤具質，是產區白酒中最特別的一面',
      '白品種：Garnacha Blanca、Garnacha Roja、Macabeo、Moscatel de Alejandría；紅品種：Cariñena、Garnacha Tinta',
    ],
  },
]

// ─── S2M3L9 — Montsant DO ────────────────────────────────────────────────────
const S2M3L9_slides = [
  {
    type: 'cover',
    icon: '🏔️',
    gradient: 'linear-gradient(135deg, #b71c1c, #e65100)',
    title: 'Montsant DO — 2002 年新秀・地中海濃郁風格',
    subtitle: 'Level 2 · 加泰羅尼亞 · Priorat 親民兄弟產區',
    points: [
      { icon: '📅', label: '2002 年 DO', text: '從 Tarragona DO 分離獨立，是加泰羅尼亞較新的 DO 之一，卻已展現強烈地中海個性' },
      { icon: '🍷', label: 'Garnacha 主導', text: 'Garnacha Tinta 為紅酒核心，加上 Carignan 的結構，釀出濃郁、果味豐沛的地中海風格' },
      { icon: '🌊', label: 'Garnacha Blanca 白酒', text: '如同鄰近的 Empordà 與 Priorat，Montsant 亦釀造口感豐富且具質感的 Garnacha Blanca 白酒' },
    ],
  },
  {
    type: 'map',
    title: 'Montsant DO 位置',
    mapRegion: 'catalonia',
    geojsonUrl: '/spain/geojson/appellations/montsant.geojson',
    description: '環繞 Priorat DOCa 周圍的馬蹄形產區，2002 年自 Tarragona DO 分離獨立，擁有與 Priorat 相近的風土條件。',
  },
  {
    type: 'content',
    icon: '📅',
    title: '產區背景：從 Tarragona 獨立到 2002 年 DO',
    html: `
      <p>Montsant DO 是加泰羅尼亞較新的法定產區，<strong>於 2002 年正式脫離 Tarragona DO 獨立</strong>，以周邊的 Montsant 山脈命名。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#fce4ec;border-left:4px solid #b71c1c;padding:12px;border-radius:0 10px 10px 0">
          <strong>🏔️ 地理位置：環抱 Priorat 的馬蹄形</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>Montsant 產區如同一個<strong>馬蹄形</strong>，環繞在 Priorat DOCa 的外圍</li>
            <li>與 Priorat 共享部分相似的板岩與砂岩地形，但整體風土條件較為多元</li>
            <li>海拔介於 200–700 公尺，地中海氣候，年降雨量 400–550mm</li>
          </ul>
        </div>
        <div style="background:#fff3e0;border-left:4px solid #e65100;padding:12px;border-radius:0 10px 10px 0">
          <strong>💡 「親民版 Priorat」的定位</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>與 Priorat 相比，Montsant 的葡萄酒<strong>價格更親民</strong>，但品質同樣出色</li>
            <li>相近的品種（Garnacha + Carignan）與氣候，卻因土壤差異呈現不同個性</li>
            <li>吸引許多追求高性價比的愛好者關注</li>
          </ul>
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌊 加泰羅尼亞核心要素</strong><br/>
          在加泰羅尼亞，<strong>海拔高度與距海遠近</strong>是理解產區風格的關鍵。Montsant 位於中高海拔內陸，地中海影響適中，造就介於沿海清爽與山區濃郁之間的平衡風格
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: 'Montsant DO 葡萄品種',
    items: [
      {
        icon: '🍋',
        label: '白品種：Garnacha Blanca・Macabeo',
        desc: 'Garnacha Blanca 釀出口感豐富、具質感的白酒，是加泰羅尼亞三大產區（Montsant、Empordà、Priorat）共同的白酒亮點；Macabeo 提供清爽果味與酸度骨幹',
        color: '#f9a825',
      },
      {
        icon: '🌼',
        label: '白品種：Chardonnay・Moscatel',
        desc: 'Chardonnay 提供國際風格與豐潤口感；Moscatel 帶來強烈花香與葡萄甜香，可用於釀造芳香型白酒或甜酒',
        color: '#0277bd',
      },
      {
        icon: '🔴',
        label: '紅品種：Garnacha Tinta・Garnacha Peluda',
        desc: 'Garnacha Tinta 是 Montsant 紅酒的靈魂，地中海熟果豐沛，紅莓石榴特色；Garnacha Peluda（「毛茸茸的 Garnacha」）是老藤變種，酒體更結實',
        color: '#c0392b',
      },
      {
        icon: '🟣',
        label: '紅品種：Carignan・Cabernet Sauvignon・Merlot・Monastrell',
        desc: 'Carignan（Cariñena）賦予高酸結構與黑色水果；Cabernet Sauvignon 與 Merlot 引入法式單寧與複雜度；Monastrell 增添地中海深沉濃郁',
        color: '#4a148c',
      },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Dosterras「Vermell」',
    image: '/spain/images/labels/montsant/dosterras-vermell.jpg',
    caption: 'Dosterras「Vermell」，Montsant D.O.——酒標直接標示產區四大土壤類型「Granit・Argila・Licorella・Calcari」（花崗岩・黏土・板岩・石灰岩），呼應本文提到的多元風土條件。',
  },
  {
    type: 'quiz',
    question: '關於 Montsant DO，以下哪一項描述最為準確？',
    options: [
      '2009 年取得 DOCa 認證，以 Llicorella 板岩土壤和百年老藤 Garnacha 聞名',
      '2002 年從 Tarragona DO 獨立，環繞 Priorat 周圍，以 Garnacha 主導的地中海風格著稱；也釀造豐富具質感的 Garnacha Blanca 白酒',
      '以山脈遮蔽隔絕海洋，大比例產量供應 Cava 基酒，本地特色品種為 Trepat',
      '沿塞格雷河兩岸延伸，以本地品種與法國品種混釀著稱，含 Pinot Noir 和 Syrah',
    ],
    answer: 1,
    explanation: 'Montsant DO 於 2002 年從 Tarragona DO 獨立，以馬蹄形環繞 Priorat。Garnacha Tinta 為紅酒主幹，加上 Carignan 的結構，釀出濃郁地中海風格。白酒方面，Garnacha Blanca 同樣釀出豐富具質感的白酒，與 Empordà、Priorat 形成加泰羅尼亞 Garnacha Blanca 白酒三角。',
  },
  {
    type: 'summary',
    message: 'Montsant DO 學習完成！',
    keyPoints: [
      '2002 年自 Tarragona DO 獨立，環繞 Priorat DOCa 的馬蹄形新秀產區',
      '紅酒核心：Garnacha Tinta + Carignan，地中海濃郁熟果、高性價比「親民版 Priorat」',
      'Garnacha Blanca 白酒豐富具質感，與 Empordà、Priorat 並列加泰羅尼亞 Garnacha Blanca 三角',
      '白品種：Chardonnay、Garnacha Blanca、Macabeo、Moscatel；紅品種：Cabernet Sauvignon、Carignan、Garnacha Tinta、Garnacha Peluda、Merlot、Monastrell',
    ],
  },
]

// ─── S2M3L10 — Pla de Bages DO ────────────────────────────────────────────
const S2M3L10_slides = [
  {
    type: 'cover',
    icon: '🌿',
    gradient: 'linear-gradient(135deg, #2e7d32, #0277bd)',
    title: 'Pla de Bages DO — 地中海海風中的本地與法國融合',
    subtitle: 'Level 2 · 加泰羅尼亞 · Picapoll 原生白品種 · 多元法國豪華',
    points: [
      { icon: '🌿', label: 'Picapoll 特色', text: '加泰羅尼亞本地白品種 Picapoll 是產區的個性標誌，與 Macabeo、Parellada 共同構成白酒基高' },
      { icon: '🇳🇱', label: '法國引進品種', text: 'Chardonnay、Gewurztraminer（白）、Merlot、Cabernet Sauvignon、Cabernet Franc、Syrah（紅）幾乎涵蓋所有法國主要品種' },
      { icon: '🌊', label: '地中海海風', text: '暴露於地中海潮濕海風，海拔高度與距海遠近決定風格，是理解加泰羅尼亞產區的核心要素' },
    ],
  },
  {
    type: 'map',
    title: 'Pla de Bages DO 位置',
    mapRegion: 'catalonia',
    geojsonUrl: '/spain/geojson/appellations/pla-de-bages.geojson',
    description: '位於加泰羅尼亞中部內陸，巴帾河流域高平原上，暴露於地中海海風，本地與法國品種并存的加泰羅尼亞 DO。',
  },
  {
    type: 'content',
    icon: '🌡️',
    title: '風土檢驗：地中海海風 × 海拔與距海',
    html: `
      <p>Pla de Bages DO 坐落於加泰羅尼亞中部內陸，如同加泰羅尼亞其他產區，葡萄園同樣<strong>暴露於地中海潮濕海風</strong>之中。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#e3f2fd;border-left:4px solid #1565c0;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌊 地中海海風影響</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>不論距海遠近，加泰羅尼亞全區葡萄園均共享地中海潮濕海風的滋潤</li>
            <li>海風調節氣溫，避免夏季過熱，提升葡萄酸度和香氣保存</li>
          </ul>
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>⛰️ 海拔與距海：加泰羅尼亞的核心公式</strong><br/>
          在加泰羅尼亞，<strong>海拔高度</strong>與<strong>距海遠近</strong>是理解產區風格與釀造方式的核心要素。Pla de Bages 位於內陸，距海較遠，大陸性氣候特徵更明顯，日夜溫差較大，不同於沿海產區
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: 'Pla de Bages DO 葡萄品種',
    items: [
      {
        icon: '🍋',
        label: '白品種：本地系',
        desc: 'Macabeo 和 Parellada 是 Cava 的經典白品種，提供清爽果味與酸度骨幹；<strong>Picapoll</strong> 是加泰羅尼亞本地白品種，是 Pla de Bages 的個性標誌',
        color: '#f9a825',
      },
      {
        icon: '🌸',
        label: '白品種：法國系',
        desc: 'Chardonnay 賦予豐潤口感與柑橘特色；<strong>Gewürztraminer</strong> 帶來強烈的荔枝、玫瑰花與淡淡煙燻氣息，在 Pla de Bages 的內陸氣候下呈現獨特表現力',
        color: '#0277bd',
      },
      {
        icon: '🔴',
        label: '紅品種：本地系',
        desc: '<strong>Garnacha</strong> 提供地中海熟果豐潤；<strong>Tempranillo</strong>（Ull de Llebre）賦予櫻桃與紅果；<strong>Sumoll</strong> 是加泰羅尼亞古老原生紅品種，色淡、酸度高，正在被重新發掘',
        color: '#c0392b',
      },
      {
        icon: '🟣',
        label: '紅品種：法國系',
        desc: 'Merlot 賦予柔潤單寧；Cabernet Sauvignon 帶來黑醋栗與香料骨幹；Cabernet Franc 呈現清新草本與紫羅蘭氣息；Syrah 加入黑胡椒與成熟複雜度，法國主要紅品種幾乎全數到位',
        color: '#4a148c',
      },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Abadal「Matís」',
    image: '/spain/images/labels/pla-de-bages/abadal-matis-crianza.png',
    caption: 'Abadal「Matís」Crianza，Pla de Bages Denominació d\'Origen——Abadal 是產區歷史最悠久的家族酒莊之一，兼種本地與法國品種，是本文提到融合哲學的代表。',
  },
  {
    type: 'quiz',
    question: '關於 Pla de Bages DO，以下哪一項描述最為準確？',
    options: [
      '以 Llicorella 板岩土壤著稱，不釀造法國品種，大比例供應 Cava 基酒',
      '暴露於地中海海風，本地品種（包括 Picapoll、Sumoll）與法國品種（Chardonnay、Gewurztraminer 白；Merlot、Cabernet 等 4 種紅）并存',
      '屬於 Costers del Segre 的小區塊，沿塞格雷河延伸，只種植本地品種',
      '2002 年從 Tarragona DO 獨立，以 Garnacha Blanca 白酒與 Carignan 紅酒聞名',
    ],
    answer: 1,
    explanation: 'Pla de Bages DO 所有葡萄園均暴露於地中海潮濕海風中。本地白品種有 Macabeo、Parellada 和具加泰羅尼亞特色的 Picapoll；紅品種有 Garnacha、Tempranillo 和古老原生種 Sumoll。法國品種方面，白酒有 Chardonnay 與 Gewürztraminer，紅酒有 Merlot、Cabernet Sauvignon、Cabernet Franc、Syrah，海拔高度與距海遠近是產區風格的決定要素。',
  },
  {
    type: 'summary',
    message: 'Pla de Bages DO 學習完成！',
    keyPoints: [
      '加泰羅尼亞內陸 DO，暴露於地中海海風，海拔高度與距海遠近決定風格與釀造',
      '本地白品種：Macabeo、Parellada、Picapoll（加泰羅尼亞特色原生種）；法國白：Chardonnay、Gewürztraminer',
      '本地紅品種：Garnacha、Tempranillo、Sumoll（古老原生種，色淡酸度高）；法國紅：Merlot、Cabernet Sauvignon、Cabernet Franc、Syrah',
      '產區狀態：本地與法國品種並存，多元風格與舒適的地中海氣候特色',
    ],
  },
]

// ─── S2M3L11 — Tarragona DO ─────────────────────────────────────────────────
const S2M3L11_slides = [
  {
    type: 'cover',
    icon: '🏛️',
    gradient: 'linear-gradient(135deg, #b71c1c, #1565c0)',
    title: 'Tarragona DO — 加泰羅尼亞最大 DO',
    subtitle: 'Level 2 · 加泰羅尼亞 · 本地與國際品種並陳 · 地中海海風影響',
    points: [
      { icon: '🏛️', label: '加泰羅尼亞最大 DO', text: 'Tarragona 是加泰羅尼亞所有 DO 當中面積最大的法定產區，涵蓋海岸山地至內陸平原' },
      { icon: '🌊', label: '地中海海風共同性', text: '葡萄園暴露於地中海溼潤海風之中，海拔與距海遠近是理解產區的核心要素' },
      { icon: '🌱', label: '多元品種庫', text: '包含 5 種白品種與 6 種紅品種，本地經典品種與法國引進品種並存' },
    ],
  },
  {
    type: 'map',
    title: 'Tarragona DO 位置',
    mapRegion: 'catalonia',
    geojsonUrl: '/spain/geojson/appellations/tarragona.geojson',
    description: 'Tarragona DO 是加泰羅尼亞最大的 DO，延伸至地中海海岸與內陸平原，包含 Montsant、Priorat 周鄰地帶。',
  },
  {
    type: 'content',
    icon: '🏛️',
    title: '產區特色：最大的 DO 與多元小氣候',
    html: `
      <p>Tarragona 是<strong>加泰羅尼亞面積最大的葡萄酒 DO 產區</strong>，產區延伸至地中海岸邊山地至內陸高平原。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#e3f2fd;border-left:4px solid #1565c0;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌊 地中海海風的共同活躍</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>全區葡萄園暴露於<strong>地中海溼潤海風</strong>，海風調節氣溫</li>
            <li>海拔高度與距海遠近是理解各區塊風格的關鍵</li>
          </ul>
        </div>
        <div style="background:#fce4ec;border-left:4px solid #b71c1c;padding:12px;border-radius:0 10px 10px 0">
          <strong>📌 產區歷史背景</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>Tarragona 有悠久的釀酒歷史，古羅馬時期就是重要的酒產地</li>
            <li><strong>Montsant DO 於 2002 年從 Tarragona DO 分離獨立</strong>，是產區發展歷史的重要節點</li>
          </ul>
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: 'Tarragona DO 葡萄品種',
    items: [
      {
        icon: '🍋',
        label: '白品種：本地系',
        desc: '<strong>Macabeo</strong>：清爽柑橘，是 Cava 三大品種之一；<strong>Parellada</strong>：芳香清新，高海拔種植；<strong>Xarel·lo</strong>：豐潤質感',
        color: '#f9a825',
      },
      {
        icon: '🌸',
        label: '白品種：國際系',
        desc: '<strong>Chardonnay</strong>：豐潤口感，常用於木桶發酵或橡木桶熟成；<strong>Moscatel</strong>：強烈芳香、葡萄甜香',
        color: '#0277bd',
      },
      {
        icon: '🔴',
        label: '紅品種：本地系',
        desc: '<strong>Ull de Llebre</strong>（Tempranillo）：柳橙紅果與柔潤酸度；<strong>Cariñena</strong>（Carignan）：高酸結構；<strong>Garnatxa Negra</strong>：Garnacha Tinta 的加泰羅尼亞語名，熟果豐沛',
        color: '#c0392b',
      },
      {
        icon: '🟣',
        label: '紅品種：國際系',
        desc: '<strong>Cabernet Sauvignon</strong>：黑醋栗與香料骨幹；<strong>Merlot</strong>：柔潤單寧；<strong>Syrah</strong>：黑胡椒與辛香，常與本地品種混釀',
        color: '#4a148c',
      },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：De Muller「Syrah」',
    image: '/spain/images/labels/tarragona/de-muller-syrah.jpg',
    caption: 'De Muller「Syrah」，DO Tarragona——「Casa Fundada 1851」，De Muller 是塔拉戈納歷史最悠久的酒莊之一，展現本文提到本地與國際品種並陳的產區特色。',
  },
  {
    type: 'quiz',
    question: 'Tarragona DO 在加泰羅尼亞的特殊地位是什麼？',
    options: [
      '是加泰羅尼亞唯一的 DOCa 產區，等級高於一般 DO',
      '是加泰羅尼亞面積最大的葡萄酒 DO，本地與國際品種並存',
      '專門生產 Cava 氣泡酒，限定三種本地白品種',
      '無本地品種，全面使用法國引進品種釀造',
    ],
    answer: 1,
    explanation: 'Tarragona 是加泰羅尼亞面積最大的 DO 產區，包含白品種 Macabeo、Parellada、Xarel·lo、Chardonnay、Moscatel 與紅品種 Ull de Llebre、Cariñena、Garnatxa Negra、Cabernet Sauvignon、Merlot、Syrah。Montsant DO 於 2002 年從此分離獨立。',
  },
  {
    type: 'summary',
    message: 'Tarragona DO 學習完成！',
    keyPoints: [
      '加泰羅尼亞面積最大的 DO，延伸至地中海海岸至內陸平原',
      '全區暴露於地中海海風，海拔高度與距海遠近是理解產區風格的核心要素',
      '白品種：Macabeo、Parellada、Xarel·lo、Chardonnay、Moscatel；紅品種：Ull de Llebre、Cariñena、Garnatxa Negra、Cabernet Sauvignon、Merlot、Syrah',
      'Montsant DO 於 2002 年從 Tarragona DO 分離獨立，是產區發展歷史的重要節點',
    ],
  },
]

// ─── S2M3L12 — Terra Alta DO ─────────────────────────────────────────────────
const S2M3L12_slides = [
  {
    type: 'cover',
    icon: '⛰️',
    gradient: 'linear-gradient(135deg, #880e4f, #e65100)',
    title: 'Terra Alta DO — 地中海風中的山區紅酒與質感白酒',
    subtitle: 'Level 2 · 加泰羅尼亞 · Garnacha Blanca 質感白酒 · 地中海風格紅酒',
    points: [
      { icon: '🍏', label: 'Garnacha Blanca 白酒', text: '與 Montsant 與 Priorat 產區相似，Terra Alta 利用白格納希釀造口感豐富且具質感的白葡萄酒' },
      { icon: '🔴', label: '地中海風格紅酒', text: '以釀造地中海式紅葡萄酒而聞名，酒款豐沛與具結構感' },
      { icon: '🌊', label: '地中海海風', text: '葡萄園暴露於地中海溼潤海風，海拔與距海遠近是理解產區的核心要素' },
    ],
  },
  {
    type: 'map',
    title: 'Terra Alta DO 位置',
    mapRegion: 'catalonia',
    geojsonUrl: '/spain/geojson/appellations/terra_alta.geojson',
    description: 'Terra Alta DO 位於加泰羅尼亞西南部，被幾座山脈環抑，地中海海風自遠處影響葡萄園氣候，產區內大小酒莊林立。',
  },
  {
    type: 'content',
    icon: '🍏',
    title: 'Garnacha Blanca 白酒：豐潤質感的加泰羅尼亞三角',
    html: `
      <p>Terra Alta 與 Priorat、Montsant 共同構成<strong>加泰羅尼亞三大產區的 Garnacha Blanca 質感白酒圈</strong>。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#fce4ec;border-left:4px solid #880e4f;padding:12px;border-radius:0 10px 10px 0">
          <strong>🍏 Garnacha Blanca 的特色</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>口感<strong>豐潤且具質感（rich and textured）</strong>，是造就 Terra Alta 白酒特色的核心品種</li>
            <li>與 Montsant、Priorat 的 Garnacha Blanca 風格相呼應，均表現出豐厚的地中海白酒個性</li>
          </ul>
        </div>
        <div style="background:#e3f2fd;border-left:4px solid #0277bd;padding:12px;border-radius:0 10px 10px 0">
          <strong>🔴 地中海風格紅酒</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>以<strong>地中海式紅葡萄酒（Mediterranean-style red wine）</strong>而聞名</li>
            <li>Garnacha Tinta 與 Garnacha Peluda 打造山區溫暖、成熟的紅酒風格</li>
          </ul>
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌊 地中海海風與海拔距海雙軸</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>地中海溼潤海風調節氣溫，維持釀葡準備期的酸度與果香</li>
            <li><strong>海拔高度</strong>與<strong>距海遠近</strong>是理解產區風格的關鍵要素</li>
            <li>產區內大小酒莊林立，展現多元釀酒活力</li>
          </ul>
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: 'Terra Alta DO 葡萄品種',
    items: [
      {
        icon: '🍏',
        label: '白品種',
        desc: '<strong>Garnacha Blanca</strong>：豐潤質感的白酒核心，與 Priorat、Montsant 並稱加泰羅尼亞 Garnacha Blanca 三角；<strong>Macabeo</strong>：清爽柑橘；<strong>Parellada</strong>：芳香清新，高海拔種植',
        color: '#f9a825',
      },
      {
        icon: '🔴',
        label: '紅品種',
        desc: '<strong>Garnacha Tinta</strong>：地中海紅酒主幹，熟果豐沛；<strong>Garnacha Peluda</strong>：特有單寧與莓莓香氣；<strong>Samsó</strong>：即 Carignan/Cariñena，高酸高渲定結構',
        color: '#c0392b',
      },
    ],
  },
  {
    type: 'quiz',
    question: 'Terra Alta DO 與加泰羅尼亞哪兩個產區共同釀造豐潤質感的 Garnacha Blanca 白酒？',
    options: [
      'Penedès 與 Alella',
      'Priorat 與 Montsant',
      'Catalunya 與 Empordà',
      'Conca de Barberá 與 Costers del Segre',
    ],
    answer: 1,
    explanation: 'Terra Alta、Priorat、Montsant 三個產區均利用 Garnacha Blanca 釀造豐潤且具質感的白葡萄酒，構成加泰羅尼亞 Garnacha Blanca 白酒三角。Terra Alta 紅酒則以地中海式紅葡萄酒而聞名。',
  },
  {
    type: 'summary',
    message: 'Terra Alta DO 學習完成！',
    keyPoints: [
      '白品種：Garnacha Blanca（豐潤質感白酒）、Macabeo、Parellada；紅品種：Garnacha Tinta、Garnacha Peluda、Samsó（Carignan）',
      '地中海式紅葡萄酒而聞名，並與 Priorat、Montsant 共同構成 Garnacha Blanca 質感白酒三角',
      '地中海溼潤海風調節氣候，海拔高度與距海遠近是理解產區風格的關鍵',
      '產區內大小酒莊林立，展現多元釀酒活力',
    ],
  },
]

const S2M4L1_slides = [
  {
    type: 'cover',
    icon: '🥃',
    gradient: 'linear-gradient(135deg, #d4ac0d, #c0392b)',
    title: 'Jerez — Sherry 雪莉酒入門',
    subtitle: 'Level 2 · 世界上最複雜的加強酒',
    points: [
      { icon: '🥃', label: '六大 Sherry 風格', text: '從輕盈 Fino 到甜潤 Pedro Ximénez，風格跨度最廣的葡萄酒之一' },
      { icon: '🍄', label: 'Flor 酵母', text: '漂浮在酒面的酵母菌膜，保護 Fino 不被氧化，賦予鹹杏仁特色' },
      { icon: '🌾', label: 'Albariza 土壤', text: '白堊白土壤，保水性極強，是 Palomino 在乾燥安達盧西亞生長的關鍵' },
    ],
  },
  {
    type: 'map',
    title: 'Jerez — Sherry 雪莉酒產區',
    mapRegion: 'andalucia',
    geojsonUrl: '/spain/geojson/appellations/jerez.geojson',
    description: '安達盧西亞西南角，白色白堊土（Albariza）、強烈陽光與海洋微風，Sherry 的獨特風土。',
  },
  {
    type: 'compare',
    title: '六大 Sherry 風格速覽',
    items: [
      { icon: '🥂', label: 'Fino', desc: '最輕盈。Flor 酵母保護下生物熟成。15% 酒精。乾型。杏仁、青蘋果、咸鮮礦石。需冷藏飲用', color: '#f1c40f' },
      { icon: '🌊', label: 'Manzanilla', desc: '同 Fino，但只能在 Sanlúcar de Barrameda 生產。更多海洋鹽漬感。極輕盈清脆', color: '#3498db' },
      { icon: '🍯', label: 'Amontillado', desc: 'Flor 死去後繼續氧化熟成。15-22% 酒精。榛子、太妃糖、蜂蜜、煙燻。介於 Fino 和 Oloroso 之間', color: '#e67e22' },
      { icon: '🪵', label: 'Oloroso', desc: '沒有 Flor 保護，純氧化熟成。18-20% 酒精。核桃、皮革、乾果、香料。干型到中甜', color: '#784212' },
      { icon: '🍇', label: 'Pedro Ximénez（PX）', desc: '用日曬濃縮的 PX 葡萄乾釀製。極甜（> 200g/L 殘糖）。棗蜜漿、無花果乾、巧克力。可淋在冰淇淋上', color: '#1a1a1a' },
      { icon: '✨', label: 'Cream', desc: 'Oloroso 加入 PX 甜化調配。甜潤圓滑，是全球最暢銷的 Sherry 風格（如 Harvey\'s Bristol Cream）', color: '#c39bd3' },
    ],
  },
  {
    type: 'content',
    icon: '🍄',
    title: 'Flor 酵母：Sherry 的靈魂',
    html: `
      <p>Flor 是一種在 Sherry 酒液表面自然形成的<strong>酵母菌膜（Saccharomyces cerevisiae）</strong>，是 Fino 和 Manzanilla 最獨特的特徵。</p>
      <h4>🔬 Flor 如何形成？</h4>
      <ol>
        <li>Palomino 基酒釀成後，酒精加到 <strong>15%</strong>（Fino）或 <strong>17%+</strong>（Oloroso，此濃度會殺死 Flor）</li>
        <li>在 15% 酒精環境中，Flor 酵母在酒面形成一層白色「毯子」</li>
        <li>Flor 消耗殘留的甘油和氧氣，<strong>保護酒液不被氧化</strong></li>
        <li>Flor 代謝產生的化合物賦予 Fino 獨特的<strong>酵母鹹杏仁、青蘋果</strong>特質</li>
      </ol>
      <h4>🌊 Manzanilla 的特殊性</h4>
      <p>Sanlúcar de Barrameda 鎮位於 Guadalquivir 河口，海洋影響更直接，Flor 生長更旺盛。釀出的 Manzanilla 有著更多<strong>海鹽礦石鮮鹹感</strong>，是 Fino 家族中最精緻輕盈的。</p>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Fino（Equipo Navazos）',
    image: '/spain/images/labels/jerez/la-bota-de-fino-35.jpg',
    caption: '「La Bota de Fino」No. 35（Equipo Navazos，Jerez，2012 年 Saca）——當代最受評論家推崇的 Sherry 精選裝瓶系列，每批（Saca）皆有編號，是 Fino 愛好者的收藏標的。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Manzanilla',
    image: '/spain/images/labels/jerez/el-gallo-azul-manzanilla.jpg',
    caption: 'El Gallo Azul Manzanilla（D.O. Manzanilla-Sanlúcar de Barrameda）——只能在 Sanlúcar de Barrameda 鎮生產的 Fino 家族成員，海洋鹽漬感是其招牌特徵。',
  },
  {
    type: 'quiz',
    question: '在 Sherry 釀造中，為什麼 Fino 的基酒酒精只加到 15%，而 Oloroso 要加到 17% 以上？',
    options: [
      '15% 酒精可促進更快的氧化熟成，17% 才能保護酒液',
      '15% 環境允許 Flor 酵母存活，17% 會殺死 Flor，讓 Oloroso 走氧化路線',
      '15% 是法規規定的 Fino 酒精下限，17% 是 Oloroso 的法規上限',
      '酒精濃度高低只影響甜度，與 Flor 無關',
    ],
    answer: 1,
    explanation: 'Flor 酵母在 15-15.5% 酒精中可以存活並保護酒液。一旦酒精超過 17%，Flor 就會死亡。因此 Fino 保持 15% 讓 Flor 活著（生物熟成），Oloroso 加到 17%+ 殺死 Flor 後走氧化熟成之路，兩種完全不同的風格由此誕生。',
  },

  {
    type: 'summary',
    message: 'Sherry 入門學習完成！',
    keyPoints: [
      '六大風格：Fino（鮮活）、Manzanilla（海鹽）、Amontillado（榛子）、Oloroso（核桃）、PX（棗蜜漿）、Cream（甜潤）',
      'Flor 酵母：15% 酒精存活，保護 Fino 不氧化，賦予鹹杏仁特質',
      'Oloroso：17%+ 酒精殺死 Flor，純氧化熟成，核桃皮革風味',
      'Albariza 白堊土壤 + 索雷拉系統 = Sherry 的兩大風土關鍵',
    ],
  },
]

const S2M4L2_slides = [
  {
    type: 'cover',
    icon: '🫐',
    gradient: 'linear-gradient(135deg, #6c3483, #8e44ad)',
    title: 'Jumilla & Yecla — Monastrell 老藤',
    subtitle: 'Level 2 · 東南部炎熱大地的濃郁之酒',
    points: [
      { icon: '🫐', label: 'Monastrell（Mourvèdre）', text: '耐熱耐旱的驚人品種，老藤在乾旱地帶以低產換取濃縮' },
      { icon: '☀️', label: '極乾熱氣候', text: '年雨量僅 300mm，夏季可達 45°C，是西班牙最乾燥的產區' },
      { icon: '🏔️', label: '高原位置', text: '海拔 400-900 公尺，高原的夜間涼爽保留了酸度' },
    ],
  },
  {
    type: 'map',
    title: 'Jumilla & Yecla 穆爾西亞高原',
    mapRegion: 'murcia',
    geojsonUrl: '/spain/geojson/appellations/jumilla-yecla.geojson',
    description: '內陸半乾旱高原，Monastrell 老藤在極端溫度下濃縮出結構豐厚的紅酒。',
  },
  {
    type: 'content',
    icon: '🗺️',
    title: 'Jumilla 與 Yecla：地理與差異',
    html: `
      <div style="display:flex;flex-direction:column;gap:12px">
        <div style="background:#f5eef8;border-left:4px solid #8e44ad;padding:14px;border-radius:0 10px 10px 0">
          <strong>🫐 Jumilla DO（穆爾西亞省＋卡斯提亞-拉曼恰省）</strong><br/>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>海拔 400-800 公尺，年雨量僅 300mm，是西班牙最乾旱的 DO 之一</li>
            <li>Monastrell 佔種植面積 80%，許多為 50-100 年以上老藤，部分<strong>自根生長</strong>（根瘤蚜未入侵過砂質土壤）</li>
            <li>風格：深寶石黑紫色、黑莓、藍莓、黑巧克力、墨汁、甘草，酒精 14-15.5%</li>
          </ul>
        </div>
        <div style="background:#e8eaf6;border-left:4px solid #3949ab;padding:14px;border-radius:0 10px 10px 0">
          <strong>🍇 Yecla DO（穆爾西亞省）</strong><br/>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>Jumilla 的近鄰，氣候略微溫和（海拔稍高），風格稍輕盈</li>
            <li>同樣以 Monastrell 為主，但也有 Tempranillo 和 Garnacha 的種植</li>
            <li>面積較小（約 5,000 公頃），知名度不如 Jumilla，但品質不輸</li>
          </ul>
        </div>
      </div>
      <h4 style="margin-top:14px">🌍 Monastrell = Mourvèdre = Mataró</h4>
      <p>Monastrell 在法國南部（Rhône、Bandol）稱 Mourvèdre，在澳洲和美國稱 Mataro。不同名稱對應不同風格：法國 Mourvèdre 通常更結構精緻，西班牙 Monastrell 更為豐滿直接。</p>
    `,
  },
  {
    type: 'image',
    title: '🏷️ 酒標實例：Jumilla DO 老藤 Monastrell',
    image: '/spain/images/labels/jumilla/alceno-monastrell-cepas-viejas.png',
    caption: 'Alceño「1.2」，Desde 1870——酒標清楚標示「Monastrell」「Jumilla Denominación de Origen Protegida」與「Cepas Viejas」（老藤），對應本課老藤自根生長的核心主題。',
  },
  {
    type: 'image',
    title: '🏷️ 酒標實例：Yecla DO Monastrell',
    image: '/spain/images/labels/yecla/gran-pasas-monastrell-2017.jpg',
    caption: '「Gran Pasas」2017，Monastrell，Yecla / Spain——展現 Jumilla 近鄰 Yecla DO 同樣以 Monastrell 為核心品種，風格上略為輕盈的對照範例。',
  },
  {
    type: 'quiz',
    question: 'Jumilla 的 Monastrell 老藤為何能以「自根生長」存活（即未嫁接到抗根瘤蚜砧木上）？',
    options: [
      'Monastrell 天生對根瘤蚜有抵抗力',
      '砂質土壤讓根瘤蚜難以移動和存活',
      'Jumilla 海拔太高，根瘤蚜無法生存',
      '酒農定期使用農藥進行土壤消毒',
    ],
    answer: 1,
    explanation: '根瘤蚜（Phylloxera）難以在結構鬆散的砂質土壤中移動，因為砂粒填滿縫隙阻止了蟲卵遷移。Jumilla 部分產區的砂質土壤因此保存了百年以上自根葡萄樹，這些老藤是最珍貴的釀酒資源。',
  },

  {
    type: 'summary',
    message: 'Jumilla & Yecla 學習完成！',
    keyPoints: [
      'Jumilla：西班牙最乾旱的 DO 之一，年雨量 300mm，Monastrell 佔 80%',
      'Yecla：鄰近 Jumilla，風格稍輕，面積較小',
      'Monastrell 老藤在砂質土壤中自根生長（法文名 Mourvèdre）',
      '風格：深邃黑果（黑莓、巧克力）、高酒精（14-15.5%）、濃郁甘草',
    ],
  },
]

const S2M4L3_slides = [
  {
    type: 'cover',
    icon: '🍇',
    gradient: 'linear-gradient(135deg, #7d3c98, #c0392b)',
    title: 'Utiel-Requena — Bobal 的崛起',
    subtitle: 'Level 2 · 巴倫西亞高原的本土英雄',
    points: [
      { icon: '🍇', label: 'Bobal', text: '西班牙種植面積第三大品種，但長期被低估，近年老藤品質驚艷業界' },
      { icon: '🏔️', label: '內陸高原', text: '海拔 700-900 公尺，遠離地中海，大陸型氣候，日夜溫差大' },
      { icon: '🌿', label: '高酸老藤', text: 'Bobal 天然高酸，100 年以上老藤釀出的酒兼具果味與結構' },
    ],
  },
  {
    type: 'map',
    title: '巴倫西亞地中海產區',
    mapRegion: 'valencia',
    description: '地中海沿岸，從海岸到內陸山地，Bobal・Monastrell 等本土品種展現豐滿果味。',
  },
  {
    type: 'content',
    icon: '🗺️',
    title: 'Utiel-Requena：從散裝酒到精品酒的蛻變',
    html: `
      <p>Utiel-Requena DO 位於巴倫西亞自治區西部，是西班牙面積最大的內陸高原產區之一（30,000 公頃）。</p>
      <h4>📜 歷史：散裝酒轉型</h4>
      <p>20 世紀大多數時間，Utiel-Requena 的 Bobal 以<strong>高酸、深色、高酒精</strong>的特性，主要作為調色調味的散裝酒賣給法國和義大利。直到 1990-2000 年代，部分敢於冒險的釀酒師開始認真對待老藤 Bobal，才逐漸建立精品化形象。</p>
      <h4>🌡️ 氣候特點</h4>
      <ul>
        <li>海拔 700-900 公尺，夏天不像地中海沿岸那麼炎熱</li>
        <li><strong>日夜溫差可達 20°C</strong>，完美保留 Bobal 的天然高酸度</li>
        <li>年雨量約 400-500mm</li>
      </ul>
      <h4>🍇 Bobal 風味特徵</h4>
      <ul>
        <li><strong>顏色</strong>：極深的寶石黑紫</li>
        <li><strong>香氣</strong>：黑莓、黑李、香料、紫羅蘭、大地感</li>
        <li><strong>酸度</strong>：天然高酸（是 Bobal 的最大優勢）</li>
        <li><strong>老藤特色</strong>：更精緻的結構、更清晰的礦石感</li>
        <li><strong>粉紅酒</strong>：Bobal Rosado 是近年大熱門，酸爽感人</li>
      </ul>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：老藤 Bobal',
    image: '/spain/images/labels/utiel-requena/senorio-de-iniesta-bobal.jpg',
    caption: 'Señorío de Iniesta「Bobal」（Unión Campesina Iniestense 合作社，Iniesta-Cuenca）——酒標標示「60 年以上老藤特選」，來自 Bobal 產區鄰近的 Vino de la Tierra de Castilla，印證老藤精品化浪潮已擴及周邊地區。',
  },
  {
    type: 'quiz',
    question: 'Bobal 是西班牙種植面積第幾大的品種？它長期被低估的主要原因是什麼？',
    options: [
      '第 1 大；品種名稱不夠響亮',
      '第 2 大；過去多種植在品質較差的平地',
      '第 3 大；長期被用作散裝調配酒，未被認真對待',
      '第 5 大；主要用於製作白蘭地',
    ],
    answer: 2,
    explanation: 'Bobal 是西班牙種植面積第 3 大的紅品種（僅次於 Tempranillo 和 Garnacha）。長期以來，它的高酸深色特性被用作散裝酒出口調配，未被認真釀造。直到近年老藤精品化潮流，才讓 Bobal 重獲應有的重視。',
  },

  {
    type: 'summary',
    message: 'Utiel-Requena 學習完成！',
    keyPoints: [
      '海拔 700-900 公尺高原，日夜溫差 20°C，保留 Bobal 天然高酸',
      'Bobal 是西班牙種植面積第三大品種，長期作散裝酒調配用',
      '近年老藤精品化革命，展現黑莓、高酸、深邃結構的真實面目',
      'Bobal Rosado 粉紅酒是新興熱門，酸爽清新',
    ],
  },
]

const S2M4L4_slides = [
  {
    type: 'cover',
    icon: '🌋',
    gradient: 'linear-gradient(135deg, #1a1a2e, #c0392b)',
    title: 'Canarias — 火山島古藤葡萄酒',
    subtitle: 'Level 2 · 大西洋上最獨特的葡萄酒風土',
    points: [
      { icon: '🌋', label: '火山土壤 Picon', text: '黑色火山浮石砂礫，極度貧瘠，賦予葡萄酒獨特礦石煙燻感' },
      { icon: '🌿', label: '百年古藤自根生長', text: '根瘤蚜從未入侵，島上保存全歐洲比例最高的自根老藤' },
      { icon: '🌬️', label: '常年強風', text: '葡萄樹以特殊「酒杯坑」種植方式，抵抗 Alisios 信風的侵襲' },
    ],
  },
  {
    type: 'map',
    title: '加那利群島火山產區',
    mapRegion: 'canarias',
    description: '大西洋火山群島，古藤生長在黑色火山岩漿土壤，是歐洲少數未受根瘤蚜侵害的產區。',
  },
  {
    type: 'compare',
    title: '加那利群島主要產酒島嶼',
    items: [
      {
        icon: '🌋',
        label: 'Lanzarote（蘭薩羅特）',
        desc: '最具代表性的火山酒島。葡萄種植在 Zoco（坑洞）中，用黑色火山砂礫（Picon）覆土護根。主要品種：Malvasía（甜白）、Listán Negro（紅）',
        color: '#c0392b',
      },
      {
        icon: '🏔️',
        label: 'Tenerife（特內里費）',
        desc: '加那利第一大島，有 5 個 DO（Abona、Tacoronte-Acentejo 等）。海拔多樣，從海邊到 2000 公尺均有種植。Listán Negro 是主要紅品種',
        color: '#e67e22',
      },
      {
        icon: '🌊',
        label: 'Gran Canaria（大加那利）',
        desc: '以 DO Gran Canaria 生產傳統品種 Listán Blanco（白）和 Tintilla（紅），清爽大西洋風格',
        color: '#3498db',
      },
      {
        icon: '🌿',
        label: 'La Palma（拉帕爾馬）',
        desc: '「美麗島」，有 DO La Palma。以甜型的 Malvasía Aromática 著稱，歷史上在大航海時代曾是全歐洲最昂貴的葡萄酒之一',
        color: '#27ae60',
      },
    ],
  },
  {
    type: 'content',
    icon: '🌿',
    title: '加那利古藤：歐洲最珍貴的葡萄樹遺產',
    html: `
      <h4>🔬 為什麼加那利群島沒有根瘤蚜？</h4>
      <p>1800 年代末，根瘤蚜（Phylloxera）從北美傳入歐洲，摧毀了 2/3 的歐洲葡萄園。但<strong>孤立於大西洋中的加那利群島，從未遭到入侵</strong>。原因：</p>
      <ul>
        <li>海洋隔離：病蟲害難以自然傳播到孤立島嶼</li>
        <li>火山砂礫（Picon）：鬆散砂礫讓根瘤蚜難以在地下挖掘傳播</li>
      </ul>
      <p>結果：島上保存了大量<strong>200-400 年樹齡的自根老藤</strong>，是全球最珍貴的葡萄酒基因庫之一。</p>
      <h4>🏺 Zoco（坑洞）種植法 — 對抗強風的智慧</h4>
      <p>在 Lanzarote，每棵葡萄樹種在一個半圓形石牆圍成的坑洞中，石牆阻擋 Alisios 信風，坑洞底部的黑色 Picon 火山砂礫白天吸熱夜間緩慢釋放，並收集海洋露水補充水分。這是在年雨量僅 150mm 的乾旱環境中種植葡萄的奇蹟。</p>
      <h4>🍷 火山葡萄酒的風味</h4>
      <ul>
        <li><strong>礦石感（Volcanic Minerality）</strong>：煙燻、火藥、鹹鮮的礦石張力</li>
        <li><strong>Malvasía（Malvasia）</strong>：甜型版帶有杏桃蜂蜜；干型版輕盈花香</li>
        <li><strong>Listán Negro</strong>：輕盈紅果、香料、低單寧</li>
      </ul>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Tenerife 火山老藤',
    image: '/spain/images/labels/canarias/7-fuentes-2018.jpg',
    caption: '「7 Fuentes」2018（Valle de la Orotava DO，Tenerife）——由知名自然酒團隊 Envínate 釀造，展現特內里費火山土壤古藤葡萄的獨特風味。',
  },
  {
    type: 'quiz',
    question: '加那利群島的 Lanzarote 島使用「Zoco 坑洞種植法」，主要是為了解決什麼問題？',
    options: [
      '防止土壤侵蝕，保護表土不被雨水沖走',
      '阻擋強烈的 Alisios 信風，並在乾旱環境中幫助收集露水',
      '讓葡萄更靠近地表，吸收地熱能量',
      '防止過多陽光直射，保留葡萄的天然酸度',
    ],
    answer: 1,
    explanation: 'Lanzarote 飽受強勁的 Alisios 信風侵襲，每棵葡萄樹種在半圓形石牆保護的坑洞中。坑洞阻擋風沙，黑色 Picon 火山砂礫收集海洋露水，解決了年雨量僅 150mm 的嚴重乾旱問題。',
  },

  {
    type: 'summary',
    message: '加那利火山古藤學習完成！',
    keyPoints: [
      '海洋隔離 + 火山砂礫土壤 → 根瘤蚜從未入侵 → 保存 200-400 年自根老藤',
      'Lanzarote 的 Zoco 坑洞種植：石牆擋風 + Picon 砂礫收露水（年雨 150mm！）',
      '火山礦石感是加那利葡萄酒的標誌：煙燻、鹹鮮、礦石張力',
      '重要品種：Malvasía（甜白/干白）、Listán Negro（輕盈紅）',
    ],
  },
]

// ─── S2M4L5 — Calatayud DO ───────────────────────────────────────────────────
const S2M4L5_slides = [
  {
    type: 'cover',
    icon: '🍇',
    gradient: 'linear-gradient(135deg, #880e4f, #c62828)',
    title: 'Calatayud DO — 阿拉貢 Garnacha 老藤的王者',
    subtitle: 'Level 2 · 1990 DO · 阿拉貢 · 埃布羅河谷',
    points: [
      { icon: '🍇', label: 'Garnacha 佔 75%', text: '產區靈魂品種，釀造酒體宏大、風味大膽的紅酒，是阿拉貢第二大 DO' },
      { icon: '🪨', label: 'Calatayud Superior', text: '藤齡 ≥ 50 年 Garnacha 老藤，產量 ≤ 3,500 kg/ha，市場極受歡迎' },
      { icon: '⛰️', label: '高海拔低產量', text: 'Sierra de la Virgen 山脈南向坡，最高 800 公尺，石灰岩、灰紅米板岩多樣土壤' },
    ],
  },
  {
    type: 'map',
    title: 'Calatayud DO 位置',
    mapRegion: 'aragon',
    geojsonUrl: '/spain/geojson/appellations/calatayud.geojson',
    description: '阿拉貢直轄市薩拉戈薩省，埃布羅河谷內。阿拉貢北部，葡萄園 3,500 公頃，是阿拉貢僅次於 Cariñena 的第二大優質產區。',
  },
  {
    type: 'content',
    icon: '🌍',
    title: '風土、氣候與產區發展',
    html: `
      <p>Calatayud 於 <strong>1990 年獲得 DO 認證</strong>，近年大量投資新技術與釀酒系統革新，產區潛力正逐漸展現。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#fce4ec;border-left:4px solid #c62828;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌡️ 氣候數據（大陸型）</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>平均氣溫：<strong>13.5°C</strong></li>
            <li>年均降雨：<strong>350 mm</strong></li>
            <li>年均日照：<strong>2,700 小時</strong></li>
          </ul>
          夏季極熱乾燥，冬季極寒，<strong>霜害威脅長達半年以上</strong>——嚴峻的乾旱環境造就 Garnacha 的濃縮、豐滿莓味。
        </div>
        <div style="background:#efebe9;border-left:4px solid #6d4c41;padding:12px;border-radius:0 10px 10px 0">
          <strong>⛰️ 地形與土壤</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>葡萄園多位於 <strong>Sierra de la Virgen 山脈南向坡</strong>，最高海拔 <strong>800 公尺</strong></li>
            <li>高海拔有助於葡萄在殘糖與潛在酒精度之間取得更好的平衡</li>
            <li>土壤多樣：<strong>石灰岩、灰紅米板岩、黏土、壤土、石膏與鵝卵石</strong>；鬆散、多石、排水良好</li>
          </ul>
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>📊 產量數據</strong><br/>
          3,500 公頃葡萄園；紅葡萄限產 7,000 kg/ha，白葡萄限產 8,000 kg/ha，老藤限產 4,500 kg/ha<br/>
          嚴苛低產量限制讓葡萄酒品質進一步提升。
        </div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '🪨',
    title: 'Calatayud Superior — 50 年老藤的極致',
    html: `
      <p><strong>Calatayud Superior</strong> 是產區內最高等級的特殊分類，應對當地最珍稀的老藤資源。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#fce4ec;border-left:4px solid #880e4f;padding:12px;border-radius:0 10px 10px 0">
          <strong>📜 資格條件</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>品種：必須由 <strong>Garnacha</strong> 葡萄釀造</li>
            <li>藤齡：葡萄藤必須至少有 <strong>50 年以上的藤齡</strong></li>
            <li>產量限制：每公頃產量不得超過 <strong>3,500 公斤</strong></li>
          </ul>
        </div>
        <div style="background:#fff8e1;border-left:4px solid #f57f17;padding:12px;border-radius:0 10px 10px 0">
          <strong>🍷 風格與市場</strong><br/>
          50+ 年老藤的濃縮果味與歲月積累的墨汁複雜度，展現香料層次、豐厚醇厚體與長考陳年能力。產量稀少但市場上非常受歡迎，是埃布羅河谷最具收藏價值的紅酒之一。
        </div>
      </div>
      <h4 style="margin-top:12px">🍇 Garnacha 是 Calatayud 的靈魂</h4>
      <p>Garnacha 佔種植面積 <strong>75% 以上</strong>，對當地極端乾燥、寒熱交替的環境具備獨到的適應力，釀出的紅酒帶有滿滿的草莓、紫羅蘭、白胡椒香料，酒精度常在 <strong>14–16%</strong>。</p>
    `,
  },
  {
    type: 'image',
    title: '🏷️ 酒標實例：Calatayud DO Garnacha',
    image: '/spain/images/labels/calatayud/nietro-garnacha-rosado-2017.jpg',
    caption: 'Nietro de Sommos「Rosado Garnacha viñas viejas」2017——雖為粉紅酒款，但酒標清楚標示「Garnacha viñas viejas」（老藤格納希）與「CALATAYUD Denominación de Origen」，是辨識產區與品種標示的實用範例。',
  },
  {
    type: 'quiz',
    question: 'Calatayud Superior 需要符合哪些資格條件？',
    options: [
      '必須由 Tempranillo 釀造，藤齡需有 30 年以上',
      '可用任意紅品種釀造，之限產量限制為 5,000 kg/ha',
      '必須由 Garnacha 釀造，藤齡 ≥ 50 年，產量 ≤ 3,500 kg/ha',
      '僅限白葡萄品種，必須經過 24 個月橡木桶陳年',
    ],
    answer: 2,
    explanation: 'Calatayud Superior 是產區最高等級：必須由 Garnacha 葡萄釀造，葡萄藤至少 50 年以上藤齡，每公頃產量不超過 3,500 公斤。這三項資格條件共同確保酒款的稀罕性與收藏價值。',
  },
  {
    type: 'summary',
    message: 'Calatayud DO 學習完成！',
    keyPoints: [
      '1990 年 DO，阿拉貢內第二大優質產區；3,500 公頃葡萄園',
      'Sierra de la Virgen 山脈南向坡，最高 800 公尺；石灰岩、灰紅米板岩、石膏多樣土壤',
      '大陸型氣候：平均 13.5°C，年雨 350mm，日照 2,700 小時；夏熱冬寒，霜害威脅達半年',
      'Garnacha 佔種植面積 75%，釀造酒體宏大、果味大膽紅酒；酒精度常在 14–16%',
      'Calatayud Superior：Garnacha 至少 50 年老藤，產量 ≤ 3,500 kg/ha，最具收藏價值',
    ],
  },
]

// ─── S2M4L6 — Campo de Borja DO ─────────────────────────────────────────────
const S2M4L6_slides = [
  {
    type: 'cover',
    icon: '👑',
    gradient: 'linear-gradient(135deg, #4a0080, #880e4f)',
    title: 'Campo de Borja DO — 格納希帝國',
    subtitle: 'Level 2 · 1980 DO · 阿拉貢 · 埃布羅河谷',
    points: [
      { icon: '👑', label: '格納希帝國', text: '西班牙 Garnacha 種植面積佔比最高的 DO 之一，逾 2,000 公頃為 30–50 年老藤' },
      { icon: '🌬️', label: 'Cierzo 北風調節', text: '強冷北風帶走濕氣，夏季乾燥熱烈，成就 Garnacha 高酒精度飽滿果味' },
      { icon: '🏆', label: 'Borsao 酒莊領頭', text: '旗艦酒莊 Borsao 詮釋大陸型 Garnacha 的精品路線，國際聲譽卓著' },
    ],
  },
  {
    type: 'map',
    title: 'Campo de Borja DO 位置',
    mapRegion: 'aragon',
    geojsonUrl: '/spain/geojson/appellations/campo-de-borja.geojson',
    description: '埃布羅河谷左岸，薩拉戈薩省西北部，Borja 鎮周邊丘陵。7,600 公頃葡萄園，大陸型氣候，老藤 Garnacha 主導。',
  },
  {
    type: 'content',
    icon: '🌍',
    title: '風土條件與 Garnacha 優勢',
    html: `
      <p>Campo de Borja DO 於 <strong>1980 年</strong>獲得 DO 認定，全區葡萄園 <strong>7,600 公頃</strong>，Garnacha 種植比例居阿拉貢之冠。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#f3e5f5;border-left:4px solid #7b1fa2;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌡️ 氣候</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>大陸型：夏季炎熱乾燥，冬季寒冷</li>
            <li><strong>Cierzo 強冷北風</strong>：減少病蟲害、維持乾燥環境，保存葡萄天然酸度</li>
            <li>年均降雨：350–400 mm</li>
          </ul>
        </div>
        <div style="background:#ede7f6;border-left:4px solid #512da8;padding:12px;border-radius:0 10px 10px 0">
          <strong>🪨 土壤</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>砂質土、石灰岩及黏土混合，部分區塊含卵石</li>
            <li>海拔 250–700 公尺，坡地葡萄園排水良好</li>
          </ul>
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #388e3c;padding:12px;border-radius:0 10px 10px 0">
          <strong>🍇 老藤 Garnacha 指標</strong><br/>
          超過 2,000 公頃為 30–50 年老藤；Crianza/Reserva 級紅酒需 Garnacha ≥ 50%，單寧成熟、果味濃郁
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: 'Campo de Borja 主要品種',
    items: [
      {
        icon: '🍷',
        label: 'Garnacha Tinta（核心）',
        desc: '佔全區種植面積 80% 以上，高糖份、低酸度，大陸型氣候下可達 15% 酒精度，老藤展現複雜礦物感',
        color: '#880e4f',
      },
      {
        icon: '🌿',
        label: 'Tempranillo',
        desc: '混釀夥伴，補充酸度與結構，與 Garnacha 形成互補，增加陳年潛力',
        color: '#b71c1c',
      },
      {
        icon: '🫐',
        label: 'Cabernet Sauvignon / Merlot',
        desc: '國際品種少量混入，增加深色漿果香氣與細緻單寧，強化品質指標酒款',
        color: '#311b92',
      },
      {
        icon: '🌸',
        label: 'Macabeo（白葡萄）',
        desc: '少量白酒與粉紅酒，清爽果香，Rosado 展現 Garnacha 典型草莓漿果調性',
        color: '#f9a825',
      },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Campo de Borja Garnacha 混釀',
    image: '/spain/images/labels/campo-de-borja/grunon-garnacha-shiraz-2017.jpg',
    caption: '「Gruñón」Garnacha & Shiraz 2017（Locos por el Vino，Campo de Borja D.O.）——以老藤 Garnacha 為基底，混入國際品種 Shiraz，酒精度達 15.5%，展現大陸型氣候下的濃郁飽滿風格。',
  },
  {
    type: 'quiz',
    question: '關於 Campo de Borja DO，以下哪項最為準確？',
    options: [
      '位於納瓦拉，以 Tempranillo 為主，1965 年獲 DO 認定',
      '1980 年獲 DO 認定，Garnacha 主導，超過 2,000 公頃為老藤；Cierzo 北風是主要氣候特徵',
      '薩拉戈薩省最古老 DO，以 Cariñena 品種命名，海拔達 800 公尺',
      '與 Penedès 同屬加泰羅尼亞，以白葡萄 Macabeo 為主要品種',
    ],
    answer: 1,
    explanation: 'Campo de Borja DO 於 1980 年認定，位於薩拉戈薩省西北部。Garnacha 老藤（30–50 年）是產區靈魂，Cierzo 強冷北風調節氣候。Borsao 等酒莊將其打造為阿拉貢精品 Garnacha 標竿。',
  },
  {
    type: 'summary',
    message: 'Campo de Borja DO 學習完成！',
    keyPoints: [
      '1980 年 DO，位於薩拉戈薩省西北部，7,600 公頃；「格納希帝國」美譽',
      'Garnacha 佔種植面積逾 80%，2,000+ 公頃為 30–50 年老藤，展現複雜礦物感',
      'Cierzo 強冷北風：減少病蟲害、乾燥環境、保存天然酸度',
      '大陸型氣候：夏熱冬冷，年雨 350–400mm，海拔 250–700 公尺',
      'Borsao 酒莊領頭，Crianza/Reserva Garnacha ≥ 50%，國際聲譽卓著',
    ],
  },
]

// ─── S2M4L7 — Cariñena DO ───────────────────────────────────────────────────
const S2M4L7_slides = [
  {
    type: 'cover',
    icon: '🪨',
    gradient: 'linear-gradient(135deg, #4a0000, #b71c1c)',
    title: 'Cariñena DO — 岩石之酒的誕生地',
    subtitle: 'Level 2 · 1932 DO · 阿拉貢最古老最大產區',
    points: [
      { icon: '🪨', label: 'el vino de las piedras', text: '埃布羅河南岩石鵝卵石平原，被稱為「來自岩石的葡萄酒」，1932 年劃定 DO' },
      { icon: '🍇', label: 'Cariñena 品種命名地', text: '紅色 Carignan 在法國極度著名的品種，即以此鎮命名，但目前 Garnacha 已取代其主導地位' },
      { icon: '🌬️', label: 'Cierzo 北風保障', text: '強冷北風自然調節夏季高溫與保持低濕度，降低葡萄園病菌風害' },
    ],
  },
  {
    type: 'map',
    title: 'Cariñena DO 位置',
    mapRegion: 'aragon',
    geojsonUrl: '/spain/geojson/appellations/carinena.geojson',
    description: '埃布羅河以南，加拉太尤特東北方，薩拉戈薩省。葡萄園 14,459 公頃，是阿拉貢最大且最古老的 DO 產區。',
  },
  {
    type: 'content',
    icon: '🌍',
    title: '風土、氣候與產區發展',
    html: `
      <p>Cariñena 於 <strong>1932 年</strong>正式劃定 DO，是阿拉貢最古老也是面積最大的 DO 產區。岩石與鵝卵石遂布平原讓當地葡萄酒獲得<strong>「el vino de las piedras」（來自岩石的葡萄酒）</strong>的美譽。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#ffebee;border-left:4px solid #b71c1c;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌡️ 氣候數據（大陸型）</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>夏季最高溫：<strong>40°C</strong>；冬季最低溫：<strong>−6°C</strong></li>
            <li>年均降雨：<strong>380–450 mm</strong></li>
            <li><strong>Cierzo 強冷北風</strong>：調節高溫、維持低濕度，減少病蟲害</li>
          </ul>
        </div>
        <div style="background:#efebe9;border-left:4px solid #6d4c41;padding:12px;border-radius:0 10px 10px 0">
          <strong>🪨 地形與土壤</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>海拔：<strong>400–800 公尺</strong></li>
            <li>主要為<strong>紅褐色石灰岩</strong>，底土多石（沖積土與頁岩）</li>
            <li>遍布岩石與鵝卵石——賦予葡萄酒礦物與石質尾韻</li>
          </ul>
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>📊 產區規模</strong><br/>
          14,459 公頃葡萄園；紅葡萄限產 8,500 kg/ha，白葡萄限產 9,000 kg/ha；2015 年產量達 1.09 億公斤
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: 'Cariñena DO 葡萄品種',
    items: [
      {
        icon: '🍇',
        label: 'Garnacha Tinta（目前主導）',
        desc: '對當地高溫乾燥環境適應力最強，釀造濃醇、酒精度高（常超過 14%）的紅酒，已取代 Cariñena 成為產區主導品種',
        color: '#b71c1c',
      },
      {
        icon: '🫐',
        label: 'Cariñena（Mazuelo / Carignan）',
        desc: '產區同名品種，即法國的 Carignan。具備高酸度、高單寧，適合混釀增加骨幹，在南法產區（如 Corbières 科比耶）提升複雜度',
        color: '#4a148c',
      },
      {
        icon: '🍊',
        label: 'Juan Ibáñez（地方原生品種）',
        desc: '阿拉貢特有原生紅品種，色澤深、單寧結實，在少數酒莊中用作少量混釀成分，增加風味多樣性',
        color: '#880e4f',
      },
      {
        icon: '🌿',
        label: 'Macabeo（Viura）／ Moscatel de Alejandría',
        desc: 'Macabeo 釀造乾白酒，清爽果香；Moscatel 用於甜型 Moscatels 和 mistelas，花香濃郁。面積內亦符合 Cava DO 氣泡酒標準。',
        color: '#f9a825',
      },
    ],
  },
  {
    type: 'image',
    title: '🏷️ 酒標實例：Cariñena DO Garnacha',
    image: '/spain/images/labels/carinena/marques-de-somera-garnacha-rose-2009.jpg',
    caption: 'Marques de Somera「Garnacha」2009 Rosé——酒標清楚標示「CARIÑENA Denominación de Origen」，印證 Garnacha 已取代 Cariñena（Carignan）成為產區主導品種，同時也生產優質粉紅酒款。',
  },
  {
    type: 'quiz',
    question: '關於 Cariñena DO，以下哪項最為準確？',
    options: [
      '是阿拉貢第二大產區，1980 年獲得 DO；主要甜型 Moscatel 甜酒',
      '1932 年劃定 DO，阿拉貢最古老也是面積最大的 DO；Cariñena 葡萄品種即源自此鎮，但目前 Garnacha 是主導品種',
      '被稱為「格納希帝國」，老藤藤齡超過 50 年為主要特色',
      '僅產紅酒和粉紅酒，不適合釀造白酒或氣泡酒',
    ],
    answer: 1,
    explanation: 'Cariñena DO 於 1932 年劃定，是阿拉貢最古老也是面積最大的 DO（超過 14,000 公頃）。Cariñena 葡萄品種即源自此鎮（即法國 Carignan），但目前 Garnacha 已取代成為主導品種。Cierzo 強冷北風調節氣候。產區也可生產符合 Cava DO 標準的氣泡酒。',
  },
  {
    type: 'summary',
    message: 'Cariñena DO 學習完成！',
    keyPoints: [
      '1932 年 DO，阿拉貢最古老也是面積最大產區（14,459 公頃）；被稱「el vino de las piedras」',
      'Cariñena 葡萄品種命名產區（即法國 Carignan），但目前 Garnacha 已取代成為主導品種',
      '大陸型：暑季 40°C／冬季 −6°C，年雨 380–450mm；Cierzo 北風降低病蟲害、調節溫度',
      '紅褐色石灰岩＋岩石鵝卵石土壤，海拔 400–800 公尺',
      '多樣酒型：橡木桶陳年紅酒（招牌）、乾白、Rosado、甜型 Moscatel，以及符合 Cava DO 的氣泡酒',
    ],
  },
]

// ─── S2M4L8 — Somontano DO ──────────────────────────────────────────────────
const S2M4L8_slides = [
  {
    type: 'cover',
    icon: '🏔️',
    gradient: 'linear-gradient(135deg, #1a237e, #0d47a1)',
    title: 'Somontano DO — 庇里牛斯山麓的歐陸融合',
    subtitle: 'Level 2 · 1984 DO · 阿拉貢 · 韋斯卡省',
    points: [
      { icon: '🏔️', label: '山麓多元風土', text: '葡萄園海拔 350–1,000 公尺，庇里牛斯山腳下，年均日照 2,700 小時，年雨 500 mm' },
      { icon: '🌍', label: '15 種品種共存', text: '同時種植 15 種本地與國際品種，是西班牙最具多樣性的 DO 之一' },
      { icon: '✨', label: '優雅與結構並重', text: '酒款以清新輕盈、細膩感著稱，在西班牙酒界以創新與高品質聞名' },
    ],
  },
  {
    type: 'map',
    title: 'Somontano DO 位置',
    mapRegion: 'aragon',
    geojsonUrl: '/spain/geojson/appellations/somontano.geojson',
    description: '阿拉貢自治區北部，韋斯卡省，埃布羅河谷北側。「Somontano」在阿拉貢語意為「山麓」（sotto il monte），葡萄園約 4,040 公頃。',
  },
  {
    type: 'content',
    icon: '🌍',
    title: '風土條件與產區特色',
    html: `
      <p>Somontano DO 於 <strong>1984 年</strong>獲得認定，位於阿拉貢庇里牛斯山脈（Aragonese Pyrenees）山腳下，海拔 <strong>350–1,000 公尺</strong>，融合山地涼爽與河谷溫暖，釀造出優雅且結構感強的葡萄酒。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#e3f2fd;border-left:4px solid #1565c0;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌡️ 氣候數據</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>年均降雨：<strong>500 mm</strong>（高於阿拉貢南部，葡萄園自然缺水壓力適中）</li>
            <li>年均日照：<strong>2,700 小時</strong>（充沛光照確保果實成熟）</li>
            <li>夏季極端最高溫：<strong>約 26.63°C</strong>；冬季極端最低溫：<strong>約 −0.85°C</strong></li>
            <li>山地影響帶來較大日夜溫差，有利保留葡萄天然酸度與細緻香氣</li>
          </ul>
        </div>
        <div style="background:#e8eaf6;border-left:4px solid #3949ab;padding:12px;border-radius:0 10px 10px 0">
          <strong>🪨 土壤特性</strong>
          <ul style="margin:6px 0 0;padding-left:18px">
            <li>主要為<strong>覆蓋在柔軟物質上的褐色石灰岩土</strong></li>
            <li>低肥力、含適量石灰質、透水性佳，衛生條件良好</li>
            <li>有利生產高品質、高複雜度葡萄酒</li>
          </ul>
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>📊 產區規模</strong><br/>
          種植面積：<strong>4,040 公頃</strong>；紅葡萄限產 8,000 kg/ha，白葡萄 9,000 kg/ha；2015 年總產量約 124,831 hl
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: 'Somontano DO 15 種葡萄品種',
    items: [
      {
        icon: '🍷',
        label: '國際紅品種',
        desc: 'Cabernet Sauvignon、Merlot、Syrah、Pinot Noir——少見 Pinot Noir 在西班牙成功落地，Somontano 涼爽山地氣候使其成為優勢',
        color: '#b71c1c',
      },
      {
        icon: '🫐',
        label: '本地紅品種',
        desc: 'Tempranillo、Garnacha——西班牙本土支柱；Moristel（Juan Ibáñez）與 Parraleta——阿拉貢原生珍稀品種，賦予酒款地方特色',
        color: '#4a148c',
      },
      {
        icon: '🌿',
        label: '國際白品種',
        desc: 'Chardonnay（最受歡迎）、Gewürztraminer（Somontano 招牌，花香濃郁）、Sauvignon Blanc、Riesling——高緯度白品種在山地氣候中表現出色',
        color: '#1a237e',
      },
      {
        icon: '🌾',
        label: '本地白品種',
        desc: 'Macabeo（Viura）——西班牙傳統白品種；Garnacha Blanca、Alcañón（阿拉貢原生珍稀白品種，幾乎只在 Somontano 種植）',
        color: '#f57f17',
      },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Enate Tempranillo',
    image: '/spain/images/labels/somontano/enate-tempranillo-2019.jpg',
    caption: 'Enate Tempranillo 2019（Somontano DO）——Enate 是 Somontano 最具國際知名度的酒莊之一，酒標以當代藝術家作品聞名（此款出自畫家 Pepe Cerdá 之手）。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：國際品種混釀',
    image: '/spain/images/labels/somontano/iberis-sevil-2007.jpg',
    caption: 'Íberis「Sevil」2007（Somontano DO）——Merlot 與 Cabernet Sauvignon 混釀，法國橡木桶陳年 18 個月，展現本文提到的國際品種在此地的優異表現。',
  },
  {
    type: 'quiz',
    question: '關於 Somontano DO，以下哪項描述最為準確？',
    options: [
      '位於薩拉戈薩省，海拔極低，以 Garnacha 老藤為主，1932 年獲 DO 認定',
      '1984 年獲 DO 認定，位於韋斯卡省庇里牛斯山麓；同時種植約 15 種品種，包含 Gewürztraminer 與 Alcañón 等珍稀品種',
      '與 Campo de Borja 同屬薩拉戈薩省，以 Cariñena 及 Garnacha 為主要品種',
      '主要以 Tempranillo 單一品種釀造，風格類似 Rioja Crianza',
    ],
    answer: 1,
    explanation: 'Somontano DO 於 1984 年獲得認定，位於韋斯卡省，阿拉貢庇里牛斯山脈山腳下，海拔 350–1,000 公尺。產區特色是同時種植約 15 種本地與國際品種（罕見的 Gewürztraminer、Alcañón、Parraleta），以清新輕盈、細膩度著稱，是西班牙創新精神的代表性 DO。',
  },
  {
    type: 'summary',
    message: 'Somontano DO 學習完成！',
    keyPoints: [
      '1984 年 DO，位於韋斯卡省庇里牛斯山麓，4,040 公頃；「Somontano」意為「山麓」',
      '氣候溫和：年雨 500mm、日照 2,700 小時，夏季最高 26.63°C，山地日夜溫差保留細膩香氣',
      '褐色石灰岩土，低肥力透水佳，有利高品質釀造',
      '15 種品種共存：Gewürztraminer、Alcañón、Parraleta 等珍稀品種為產區獨有特色',
      '酒款以清新輕盈、優雅細膩著稱；當地果農與酒莊共同努力，國內外市場均獲高度評價',
    ],
  },
]

const S2FinalExam_slides = [
  {
    type: 'cover',
    icon: '🎓',
    gradient: 'linear-gradient(135deg, #8e44ad, #2980b9)',
    title: 'Level 2 綜合評量',
    subtitle: '重點產區深度探索 · 最終測驗',
    points: [
      { icon: '📋', label: '10 題綜合測驗', text: '涵蓋北部、加利西亞、加泰羅尼亞、南部四大區域' },
      { icon: '✅', label: '通過標準', text: '答對 7 題以上即完成 Level 2' },
      { icon: '🏆', label: '完成後解鎖', text: 'Level 3：釀造工藝與特殊酒款（橡木桶・Cava・Sherry）' },
    ],
  },
  {
    type: 'quiz',
    question: '【Rueda】DO Rueda 規定「Rueda Verdejo」酒款中 Verdejo 的最低含量為多少？',
    options: ['50%', '70%', '85%', '100%'],
    answer: 2,
    explanation: '標示「Rueda Verdejo」需 Verdejo ≥ 85%。一般「Rueda」則只需 50%。',
  },
  {
    type: 'quiz',
    question: '【Bierzo】Bierzo 的頂級紅酒種植在什麼土壤上？風格常被比較為西班牙的哪個法國產區？',
    options: [
      '石灰岩土壤，比較為 Bordeaux 左岸風格',
      '板岩（Pizarra）梯田，比較為 Burgundy Pinot Noir',
      '砂質土壤，比較為 Barossa Valley Shiraz',
      '白堊土，比較為 Champagne Chardonnay',
    ],
    answer: 1,
    explanation: 'Bierzo 的頂級 Mencía 種植在板岩（Pizarra）梯田上，其優雅花香、紅果、礦石感和輕盈結構常被比較為西班牙的 Burgundy Pinot Noir。',
  },
  {
    type: 'quiz',
    question: '【Rías Baixas】加利西亞的 Albariño 使用「Pergola 棚架式」種植的主要原因是？',
    options: [
      '提高日照量，增加葡萄糖分',
      '在多雨環境中增加通風，防止黴菌',
      '讓機械採收更方便、降低人工成本',
      '傳統農業文化，無實際功能原因',
    ],
    answer: 1,
    explanation: '加利西亞年雨量達 1500mm，高棚架讓葡萄懸空，大幅增加通風，減少黴菌（灰黴病）的風險，是應對潮濕大西洋氣候的必要農業技術。',
  },
  {
    type: 'quiz',
    question: '【Valdeorras】在加利西亞，哪個白葡萄品種在 1980 年代幾乎滅絕，後被 Valdeorras 的釀酒師拯救，如今被比較為頂級 Burgundy 白酒？',
    options: ['Albariño', 'Treixadura', 'Godello', 'Palomino'],
    answer: 2,
    explanation: 'Godello 在 1980 年代幾乎瀕絕，被 Valdeorras 的釀酒師 Horacio Fernández Bóveda 拯救。其豐滿礦石感的頂級款常與 Burgundy Chardonnay 相提並論。',
  },
  {
    type: 'quiz',
    question: '【Priorat】Priorat 在 2009 年取得 DOCa 認證，其標誌性土壤「Llicorella」主要由什麼組成？',
    options: [
      '白堊土和石灰岩',
      '黑色板岩（片岩）和石英',
      '紅色黏土和砂礫',
      '火山浮石和玄武岩',
    ],
    answer: 1,
    explanation: 'Priorat 的 Llicorella 由黑色板岩（片岩）和石英組成，排水極好、蓄熱強，讓老藤 Garnacha 和 Carignan 低產濃縮，是 Priorat 礦石黑果風格的根源。',
  },
  {
    type: 'quiz',
    question: '【Penedès】Torres 家族在 Penedès 引入的哪項技術，掀起了西班牙現代白酒革命？',
    options: [
      '索雷拉（Solera）動態熟成系統',
      '不鏽鋼桶和低溫溫控發酵',
      '傳統法（Méthode Traditionnelle）氣泡酒技術',
      '法國品種（Garnacha/Carignan）的大規模引進',
    ],
    answer: 1,
    explanation: '1979 年，Torres 引入不鏽鋼桶和低溫溫控發酵，取代傳統舊木桶，大幅減少氧化，保留白酒的清爽花果香氣，徹底革新了西班牙白酒的釀造方式。',
  },
  {
    type: 'quiz',
    question: '【Sherry】Fino 和 Oloroso 的根本差異在於什麼？',
    options: [
      'Fino 是甜型，Oloroso 是干型',
      'Fino 有 Flor 保護（生物熟成），Oloroso 無 Flor（純氧化熟成）',
      'Fino 只在 Sanlúcar 生產，Oloroso 只在 Jerez 生產',
      'Fino 使用 Pedro Ximénez 品種，Oloroso 使用 Palomino',
    ],
    answer: 1,
    explanation: 'Fino 加酒精至 15%，Flor 酵母在酒面存活，保護酒液不氧化（生物熟成）。Oloroso 加酒精至 17%+，殺死 Flor，酒液直接與氧氣接觸（純氧化熟成）。這是兩者風格如此不同的根本原因。',
  },
  {
    type: 'quiz',
    question: '【Jumilla】Jumilla 的 Monastrell 老藤為何能以「自根生長」存活，未嫁接到抗根瘤蚜砧木上？',
    options: [
      'Monastrell 天生對根瘤蚜免疫',
      '砂質土壤讓根瘤蚜難以移動和存活',
      'Jumilla 地處偏遠，根瘤蚜從未傳播到那裡',
      '酒農定期噴灑農藥保護葡萄樹',
    ],
    answer: 1,
    explanation: '根瘤蚜在結構鬆散的砂質土壤中難以移動，砂粒阻礙了蟲卵遷移途徑。Jumilla 部分砂質土壤保存了百年以上自根老藤，是最珍貴的釀酒資源。',
  },
  {
    type: 'quiz',
    question: '【Canarias】加那利群島的 Lanzarote 使用「Zoco 坑洞種植法」，主要解決的是什麼問題？',
    options: [
      '防止土壤侵蝕和表土流失',
      '阻擋強烈 Alisios 信風，並在乾旱環境中收集露水',
      '防止過多陽光曝曬，保留葡萄酸度',
      '隔離根瘤蚜，保護自根老藤',
    ],
    answer: 1,
    explanation: 'Lanzarote 飽受 Alisios 信風侵襲，年雨量僅 150mm。Zoco 坑洞用半圓形石牆擋風，黑色 Picon 火山砂礫收集海洋露水，完美解決了強風和乾旱兩大種植難題。',
  },
  {
    type: 'summary',
    icon: '🏆',
    message: '🎉 恭喜完成 Level 2 綜合評量！您已深度掌握西班牙四大葡萄酒區域！',
    keyPoints: [
      '✅ 北部：Ribera del Duero（高原濃縮）、Rueda（Verdejo 清爽）、Bierzo（板岩 Mencía）、Navarra（Garnacha 粉紅）',
      '✅ 加利西亞：Rías Baixas（Albariño 大西洋）、Valdeorras（Godello 礦石）、Ribeira Sacra（梯田）',
      '✅ 加泰羅尼亞：Priorat（DOCa 板岩）、Penedès（白酒革命）、Montsant / Terra Alta',
      '✅ 南部：Jerez（Sherry 六大風格）、Jumilla（Monastrell 老藤）、Canarias（火山古藤）',
      '✅ 現在可以解鎖 Level 3：釀造工藝與特殊酒款 🚀',
    ],
  },
]

// ───────────────────────────────────────────────────────────────
//  Level 3 — 完整投影片
// ───────────────────────────────────────────────────────────────

// ── S3M1：橡木桶與釀造工藝 ────────────────────────────────────

const S3M1L1_slides = [
  {
    type: 'cover',
    icon: '🪵',
    gradient: 'linear-gradient(135deg, #6e2f1a, #a04000)',
    title: '美國橡木 vs 法國橡木',
    subtitle: 'Level 3 · 橡木桶的風味科學',
    points: [
      { icon: '🇺🇸', label: '美國橡木（Quercus alba）', text: '椰子、香草、甜香料，木質紋理較粗，氧化速度快' },
      { icon: '🇫🇷', label: '法國橡木（Quercus robur/petraea）', text: '烤麵包、雪松、細緻單寧，紋理細緻，氧化溫和' },
      { icon: '⚗️', label: '科學差異', text: '木質素和揮發性化合物比例不同，造就截然不同的風味萃取' },
    ],
  },
  {
    type: 'map',
    title: 'Rioja 三大子產區深度地形',
    mapRegion: 'rioja',
    description: 'Sierra Cantabria 山脈遮擋大西洋風雨，埃布羅河調節氣候，造就三個子產區的差異。',
  },
  {
    type: 'compare',
    title: '美國橡木 vs 法國橡木：全面比較',
    items: [
      { icon: '🇺🇸', label: '美國橡木（Quercus alba）', desc: '產地：美國（密蘇里、俄亥俄等州）。紋理較粗，木漿較鬆，需少量桶板。主要化合物：乳内酯（椰子）、香草醛（vanilla）。風格強烈甜美，是傳統 Rioja 的象徵', color: '#3498db' },
      { icon: '🇫🇷', label: '法國橡木（Quercus petraea）', desc: '產地：Allier、Nièvre、Vosges 等森林。紋理細密，木材貴 3-4 倍。主要化合物：丁香酚（辛香料）、鞣酸（精緻單寧）。給予烤麵包、雪松、礦石，影響優雅', color: '#e67e22' },
      { icon: '🌿', label: '混合桶策略', desc: '現代釀酒師常混用兩者，用美國桶給予圓潤口感，法國桶添加精緻度。比例因風格而定，沒有對錯之分', color: '#27ae60' },
      { icon: '🪣', label: '桶的大小也很重要', desc: '標準桶（225L Barrique）> 228L Burgundy 桶 > 500L Demi-Muid > 3000L+ 大桶（Foudre）。桶越小，接觸面積越大，影響越強', color: '#8e44ad' },
    ],
  },
  {
    type: 'content',
    icon: '⚗️',
    title: '橡木桶的風味化學：五大主要化合物',
    html: `
      <div style="display:flex;flex-direction:column;gap:9px;margin-top:6px">
        <div style="background:#fef9e7;border-left:4px solid #f1c40f;padding:11px;border-radius:0 10px 10px 0">
          <strong>① 香草醛（Vanillin）</strong> — 香草甜香<br/>
          美國橡木含量更高。經桶壁加熱（烘烤）後大量釋出。干型陳年紅酒中最常見的甜美背景香氣。
        </div>
        <div style="background:#fde8d8;border-left:4px solid #e67e22;padding:11px;border-radius:0 10px 10px 0">
          <strong>② 乳內酯（Oak Lactones）</strong> — 椰子・橡木香<br/>
          美國橡木含量是法國桶的 3-5 倍。提供椰子、奶油、橡木甜香。傳統 Rioja 的標誌性香氣成分。
        </div>
        <div style="background:#e9f7ef;border-left:4px solid #27ae60;padding:11px;border-radius:0 10px 10px 0">
          <strong>③ 丁香酚（Eugenol）</strong> — 丁香・辛香料<br/>
          法國橡木含量較高。增添辛香料（丁香、肉桂）香氣和複雜度，是精品 Rioja 的典型特徵。
        </div>
        <div style="background:#eaf4fb;border-left:4px solid #2980b9;padding:11px;border-radius:0 10px 10px 0">
          <strong>④ 糠醛（Furfural）</strong> — 烤麵包・焦糖<br/>
          高溫烘烤桶（Heavy Toast）含量高。提供烤麵包、焦糖、太妃糖香氣。
        </div>
        <div style="background:#f5eef8;border-left:4px solid #8e44ad;padding:11px;border-radius:0 10px 10px 0">
          <strong>⑤ 鞣酸（Ellagitannins）</strong> — 單寧結構<br/>
          法國橡木含量更高。增加單寧架構和骨感，是頂級陳年紅酒的結構基礎。
        </div>
      </div>
    `,
  },
  {
    type: 'quiz',
    question: '傳統 Rioja 的標誌性「椰子香草」香氣，主要來自哪種橡木桶中的哪個化合物？',
    options: [
      '法國橡木中的丁香酚（Eugenol）',
      '美國橡木中的乳內酯（Oak Lactones）和香草醛（Vanillin）',
      '法國橡木中的糠醛（Furfural）',
      '美國橡木中的鞣酸（Ellagitannins）',
    ],
    answer: 1,
    explanation: '傳統 Rioja 使用美國橡木（Quercus alba），其乳內酯（椰子香）含量是法國橡木的 3-5 倍，搭配豐富的香草醛，創造出傳統 Rioja 最具代表性的「椰子香草甜美」香氣。',
  },

  {
    type: 'summary',
    message: '橡木桶風味科學學習完成！',
    keyPoints: [
      '美國橡木（Quercus alba）：椰子、香草、甜甜圈，是傳統 Rioja 的標誌',
      '法國橡木（Quercus petraea/robur）：烤麵包、丁香、精緻單寧，價格貴 3-4 倍',
      '五大化合物：香草醛、乳內酯、丁香酚、糠醛、鞣酸',
      '桶越小影響越強；混用兩種橡木是現代常見策略',
    ],
  },
]

const S3M1L2_slides = [
  {
    type: 'cover',
    icon: '⚔️',
    gradient: 'linear-gradient(135deg, #922b21, #2c3e50)',
    title: '傳統 Rioja vs 現代 Rioja 的論戰',
    subtitle: 'Level 3 · 西班牙最激烈的風格之爭',
    points: [
      { icon: '🏺', label: '傳統派', text: '長期美國橡木桶陳年，氧化熟成，淡薄磚紅色澤，椰子香草' },
      { icon: '🍷', label: '現代派', text: '法國新桶短期陳年，保留深紫濃縮果味，豐滿現代感' },
      { icon: '🤝', label: '第三條路', text: '「現代傳統主義」，以法國橡木做長期陳年，兼顧優雅與深度' },
    ],
  },
  {
    type: 'map',
    title: 'Rioja Alta 精緻核心地帶',
    mapRegion: 'rioja',
    description: '最西端、最涼爽的子產區，黏土石灰岩土壤，是 Rioja 傳統精緻陳年酒的搖籃。',
  },
  {
    type: 'compare',
    title: '傳統 vs 現代 Rioja 詳細對比',
    items: [
      {
        icon: '🏺',
        label: '傳統風格（Tradicional）',
        desc: '代表：López de Heredia、CVNE Imperial 等。長期美國橡木桶（6-9 年）+ 後續瓶中熟成。顏色磚橙，透明。香氣：椰子、香草、皮革、煙燻。口感：輕盈優雅，酸度突出，單寧柔順絲滑',
        color: '#a04000',
      },
      {
        icon: '🍷',
        label: '現代風格（Moderno）',
        desc: '代表：Artadi, Roda, Palacios Remondo 法國新橡木桶（12-18 個月）。顏色深濃紫黑。香氣：黑莓果醬、咖啡、深烤土司。口感：豐滿飽滿，高酒精，果味第一，受國際市場青睞',
        color: '#2c3e50',
      },
      {
        icon: '🌹',
        label: '現代傳統主義（Neo-Tradicional）',
        desc: '代表：Muga Prado Enea, La Rioja Alta Gran Reserva \'904\' 傳統長期熟成哲學 + 法國橡木的優雅。保留 Rioja 的骨架，但避免重美國桶帶來的椰子過度感。被許多評家視為 Rioja 的未來方向',
        color: '#1a8f5a',
      },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：傳統派 López de Heredia',
    image: '/spain/images/labels/rioja/lopez-de-heredia-tondonia-reserva-2004.jpg',
    caption: 'R. López de Heredia「Viña Tondonia」Reserva 2004——酒標本身即是傳統派的活教材，設計自 1877 年創廠以來幾乎未變。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：現代派 Ysios',
    image: '/spain/images/labels/rioja/ysios-reserva-2007.jpg',
    caption: 'Bodegas Ysios Reserva 2007——建築師 Santiago Calatrava 設計酒莊，酒標的現代金屬感設計與 López de Heredia 的古典風格形成強烈視覺對比。',
  },
  {
    type: 'quiz',
    question: '以下哪個描述正確反映「傳統 Rioja」風格的特徵？',
    options: [
      '以法國新橡木桶短期陳年，保留深濃紫黑果味，高酒精豐滿',
      '以美國橡木長期陳年（6-9年），顏色磚橙，椰子香草，輕盈絲滑',
      '以大型 French Foudre 桶釀造，不接觸橡木，最大化保留鮮果風格',
      '完全不使用橡木，以直接壓榨工藝釀造清爽早飲型紅酒',
    ],
    answer: 1,
    explanation: '傳統 Rioja 使用美國橡木桶長期陳年，時間可長達 6-9 年（Gran Reserva 等級更長）。氧化熟成讓酒色變磚橙、香氣演化出椰子、香草、皮革，口感輕盈絲絨。這是 López de Heredia 等傳統酒莊的核心哲學。',
  },

  {
    type: 'summary',
    message: 'Rioja 風格論戰學習完成！',
    keyPoints: [
      '傳統派：美國桶長期陳年 → 磚橙色、椰子香草、輕盈絲滑（López de Heredia）',
      '現代派：法國新桶短期陳年 → 深紫濃縮、咖啡烤土司、豐滿強勁（Artadi、Roda）',
      '「現代傳統主義」：法國桶+長期熟成，兼顧優雅與國際接受度',
      '論戰背後是 Rioja 的「身份認同」：傳統個性 vs 全球市場期待',
    ],
  },
]

const S3M1L3_slides = [
  {
    type: 'cover',
    icon: '⚗️',
    gradient: 'linear-gradient(135deg, #1a5276, #2980b9)',
    title: '微氧化（MOX）技術與現代釀造',
    subtitle: 'Level 3 · 加速熟成的科學工藝',
    points: [
      { icon: '💨', label: '微氧化（Micro-Oxygenation）', text: '模擬橡木桶緩慢透氧，在不鏽鋼桶中「複製」桶陳效果' },
      { icon: '🎯', label: '目標', text: '柔化單寧、穩定顏色、融合香氣，縮短陳年時間' },
      { icon: '🔬', label: '西班牙應用', text: '2000年代後在 Ribera del Duero 和 La Mancha 廣泛採用' },
    ],
  },
  {
    type: 'map',
    title: 'Rioja Alavesa 現代精品地帶',
    mapRegion: 'rioja',
    description: '巴斯克自治區境內，白堊土石灰岩，個人酒莊（Vino de Garage）運動的發源地。',
  },
  {
    type: 'content',
    icon: '💨',
    title: '微氧化技術：原理與效果',
    html: `
      <p>微氧化（Micro-Oxygenation / MOX）由法國 Patrick Ducournau 於 1990 年代在 Madiran（坦寧極高）產區發明，隨後傳播至全球。</p>
      <h4>🔬 科學原理</h4>
      <ul>
        <li>以微型氣泡形式，<strong>精確控制</strong>微量氧氣（mg/L/月）溶入酒液</li>
        <li>模擬橡木桶壁的自然透氧量（一般桶每年透氧約 20-30mg/L）</li>
        <li>氧氣與花青素、單寧發生聚合反應 → 顏色穩定、單寧柔化</li>
      </ul>
      <h4>✅ 主要效果</h4>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
        <div style="background:#e9f7ef;border-left:4px solid #27ae60;padding:10px;border-radius:0 10px 10px 0">
          <strong>① 顏色穩定</strong>：花青素與單寧聚合，避免顏色在瓶中快速褪去
        </div>
        <div style="background:#eaf4fb;border-left:4px solid #2980b9;padding:10px;border-radius:0 10px 10px 0">
          <strong>② 單寧柔化</strong>：縮合單寧聚合度增加，澀感降低，更圓潤
        </div>
        <div style="background:#fef9e7;border-left:4px solid #f1c40f;padding:10px;border-radius:0 10px 10px 0">
          <strong>③ 降低還原味</strong>：消除硫磺、橡膠等不良還原感氣味
        </div>
        <div style="background:#fde8d8;border-left:4px solid #e67e22;padding:10px;border-radius:0 10px 10px 0">
          <strong>④ 縮短陳年周期</strong>：原需 18 個月桶陳，MOX 可在 8-12 個月達到類似效果
        </div>
      </div>
      <h4 style="margin-top:12px">⚠️ 爭議</h4>
      <p>傳統主義者認為 MOX 是「工業化捷徑」，可能讓酒缺乏個性。過度氧化會使酒過快進入氧化狀態，導致失去新鮮果味。需非常精確的技術控制。</p>
    `,
  },
  {
    type: 'quiz',
    question: '微氧化（MOX）技術的主要目的是什麼？',
    options: [
      '增加白酒的甜度，讓殘糖更豐富',
      '在不鏽鋼桶中模擬橡木桶的緩慢透氧，柔化單寧並穩定顏色',
      '加速酒精發酵，縮短釀造周期',
      '增加酒中二氧化硫含量，延長保存壽命',
    ],
    answer: 1,
    explanation: '微氧化（MOX）以精確控制的微量氧氣溶入酒液，模擬橡木桶的自然透氧效果，目的是柔化生澀單寧、穩定顏色（花青素-單寧聚合）、消除還原氣味，縮短達到成熟口感所需的時間。',
  },

  {
    type: 'summary',
    message: '微氧化技術學習完成！',
    keyPoints: [
      '由 Patrick Ducournau 於 1990 年代在法國 Madiran 發明，解決高單寧問題',
      '精確模擬桶壁透氧：① 穩定顏色 ② 柔化單寧 ③ 消除還原味 ④ 縮短陳年',
      '普遍應用於西班牙大型酒莊（La Mancha、Ribera del Duero）',
      '爭議：過度使用可能使酒缺乏個性，需精確技術控制',
    ],
  },
]

const S3M1L4_slides = [
  {
    type: 'cover',
    icon: '🌿',
    gradient: 'linear-gradient(135deg, #1a6e3c, #145a32)',
    title: '有機・自然農法・生物動力農法',
    subtitle: 'Level 3 · 西班牙葡萄酒的綠色革命',
    points: [
      { icon: '🌱', label: '有機農法（Organic）', text: '禁止合成農藥與化學肥料，EU 有官方認證標準' },
      { icon: '🌀', label: '生物動力農法（Biodynamic）', text: '農場視為整體生態系，依宇宙和月相周期作業，Demeter 認證' },
      { icon: '🍇', label: '自然酒（Natural Wine）', text: '無官方定義，低介入主義，少添加亞硫酸鹽，接受些微缺陷' },
    ],
  },
  {
    type: 'map',
    title: 'Rioja Oriental 溫暖寬廣地帶',
    mapRegion: 'rioja',
    description: '最東端、最溫暖乾燥，以 Garnacha 和 Viura 為主，果味豐滿、酒精偏高。',
  },
  {
    type: 'compare',
    title: '三種農法的核心差異',
    items: [
      {
        icon: '🌱',
        label: '有機農法（Organic）',
        desc: '✓ EU 官方認證（葉子標誌）\n✓ 禁合成農藥、除草劑、化學肥料\n✓ 允許銅・硫黃等天然農藥\n✓ 酒莊認證後可標示 EU Organic\n西班牙是歐洲最大有機葡萄酒生產國',
        color: '#27ae60',
      },
      {
        icon: '🌀',
        label: '生物動力農法（Biodynamic）',
        desc: '✓ Rudolf Steiner 1924 年農業哲學\n✓ 上述有機原則 + 依月相/星象時程作業\n✓ 特殊製劑（如牛糞礦物石英壓縮物）\n✓ Demeter 認證（最嚴格）\n代表：Álvaro Palacios（L\'Ermita）、Mas de Daumas Gassac',
        color: '#8e44ad',
      },
      {
        icon: '🍾',
        label: '自然酒（Natural Wine）',
        desc: '✗ 無官方定義或認證\n✓ 有機/生物動力農法葡萄\n✓ 原生酵母自然發酵（無添加人工酵母）\n✓ 少加或不加亞硫酸鹽（SO₂）\n可能有輕微濁度、揮發酸或還原味（視為個性而非缺陷）',
        color: '#e67e22',
      },
    ],
  },
  {
    type: 'quiz',
    question: '關於「生物動力農法（Biodynamic）」，以下哪個描述是正確的？',
    options: [
      '僅禁止合成農藥，允許化學肥料，重點是降低農藥殘留',
      '在有機農法基礎上，依月相星象時程作業，使用特殊製劑，Demeter 認證最嚴格',
      '等同於「自然酒」，沒有官方認證，是行銷名詞',
      '只能在法國使用，西班牙沒有生物動力法認證酒莊',
    ],
    answer: 1,
    explanation: '生物動力農法（Biodynamic）由 Rudolf Steiner 1924 年創立，在有機農法基礎上加入宇宙/月相時程作業哲學，使用特殊配方製劑（如牛角糞肥 500 號）。Demeter 是最具代表性的認證機構，認證標準比一般有機更嚴格。',
  },

  {
    type: 'summary',
    message: '西班牙綠色農法學習完成！',
    keyPoints: [
      '有機農法：EU 官方認證（葉標誌），禁合成農藥，允許自然農藥（銅/硫黃）',
      '生物動力農法（Biodynamic）：Demeter 認證，最嚴格，依月相和宇宙周期作業',
      '自然酒：無官方定義，低介入主義，少亞硫酸鹽，接受輕微風味個性',
      '西班牙是歐洲最大有機葡萄酒生產國，陽光乾燥氣候有利有機農法實踐',
    ],
  },
]

// ── S3M2：Cava 氣泡酒深度探索 ────────────────────────────────

const S3M2L1_slides = [
  {
    type: 'cover',
    icon: '🍾',
    gradient: 'linear-gradient(135deg, #1a5276, #117a65)',
    title: '傳統法（Método Tradicional）詳解',
    subtitle: 'Level 3 · Cava 的釀造靈魂',
    points: [
      { icon: '🍾', label: '瓶中二次發酵', text: '酵母在密封瓶中消耗糖分產生 CO₂，氣泡天然封存' },
      { icon: '🕐', label: '酒泥陳年', text: '瓶中與死去酵母菌體接觸，形成烤麵包、酵母、餅乾香氣' },
      { icon: '🔄', label: 'Riddling → Disgorgement', text: '搖瓶讓酒泥集中瓶口，冷凍噴出，加入 Dosage 糖液' },
    ],
  },
  {
    type: 'map',
    title: 'Cava 產區地理核心',
    mapRegion: 'catalonia',
    geojsonUrl: '/spain/geojson/appellations/cava.geojson',
    description: '雖遍布西班牙，但 85% 的 Cava 產自加泰羅尼亞 Penedès，Sant Sadurní d\u0027Anoia 是其心臟。',
  },
  {
    type: 'content',
    icon: '📋',
    title: '傳統法八步驟',
    html: `
      <ol style="padding-left:18px;line-height:1.9">
        <li><strong>基酒釀製（Cuvée）</strong>：壓榨 → 發酵出靜態基酒（Vino Base）</li>
        <li><strong>調配（Assemblage）</strong>：混合不同品種、年份（reserve wines）的基酒，確保風格一致性</li>
        <li><strong>加入 Liqueur de Tirage</strong>：在基酒中加入糖液 + 酵母，裝入厚壁 Cava 瓶</li>
        <li><strong>二次瓶中發酵</strong>：酵母消耗糖分 → CO₂ 被密封封存 → 產生 6 atm 氣壓（6 倍大氣壓）</li>
        <li><strong>酒泥陳年（Lees Aging）</strong>：瓶中與死酵母接觸，產生自溶作用，釋出氨基酸和脂肪酸 → 烤麵包、餅乾、奶油香</li>
        <li><strong>搖瓶（Riddling / Remuage）</strong>：傳統手工搖瓶架（Pupitre）或機器（Gyropalette），歷時 3-8 週，讓酒泥滑向瓶口</li>
        <li><strong>除酒泥（Disgorgement / Dégorgement）</strong>：瓶頸冷凍至 -25°C，打開瓶蓋，凍成固體的酒泥自動噴出</li>
        <li><strong>加入 Dosage（補液）</strong>：加入糖液（Liqueur d'Expédition）調整最終甜度，封上軟木塞</li>
      </ol>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Método Tradicional',
    image: '/spain/images/labels/cava/bonaval-metodo-tradicional.jpg',
    caption: 'Bodegas Bonaval「Cava」Método Tradicional——酒標直接標明「Método Tradicional」字樣，是辨識瓶中二次發酵工藝最直接的線索。',
  },
  {
    type: 'quiz',
    question: '在傳統法釀造中，「酒泥陳年（Lees Aging）」產生的主要香氣化合物是什麼？表現為哪類風味？',
    options: [
      '花青素聚合物，表現為深色水果和甜美感',
      '酵母自溶產生的氨基酸和脂肪酸，表現為烤麵包、餅乾、酵母、奶油香氣',
      '橡木乳內酯，表現為椰子、香草香氣',
      '硫化物，表現為礦石、打火石的清爽感',
    ],
    answer: 1,
    explanation: '酒泥陳年（Lees Aging）讓酒液與死去的酵母菌體（Lees）長期接觸，酵母細胞壁自溶，釋放出氨基酸、脂質、甘露糖蛋白等化合物，在氣泡酒中形成烤麵包、餅乾、奶油、酵母的獨特香氣，是 Cava 陳年款複雜度的香氣來源。',
  },

  {
    type: 'summary',
    message: '傳統法八步驟學習完成！',
    keyPoints: [
      '傳統法 = 瓶中二次發酵，密封 CO₂天然形成（6 atm 氣壓）',
      '酒泥陳年：酵母自溶 → 烤麵包、餅乾、奶油，時間越長越複雜',
      '搖瓶（Riddling）讓酒泥集中瓶口，冷凍 Disgorgement 噴出',
      'Dosage 決定最終甜度（Brut Nature 零糖 → Demi-Sec 半甜）',
    ],
  },
]

const S3M2L2_slides = [
  {
    type: 'cover',
    icon: '🍇',
    gradient: 'linear-gradient(135deg, #1a5276, #2e86c1)',
    title: 'Cava 三大基礎品種',
    subtitle: 'Level 3 · Macabeo · Xarel·lo · Parellada',
    points: [
      { icon: '⚪', label: 'Macabeo（Viura）', text: '最廣泛種植，清新蘋果梨子香，中高酸，早熟，是混調骨幹' },
      { icon: '🌿', label: 'Xarel·lo', text: '加泰羅尼亞本土品種，豐腴質地、草本辛香、天然酸度，是結構支柱' },
      { icon: '🏔️', label: 'Parellada', text: '高海拔種植，花香清雅、低酒精，為混調帶來精緻香氣和輕盈感' },
    ],
  },
  {
    type: 'map',
    title: 'Cava 葡萄品種產區分布',
    mapRegion: 'catalonia',
    geojsonUrl: '/spain/geojson/appellations/cava.geojson',
    description: 'Macabeo・Xarel·lo・Parellada 三大本土品種在加泰羅尼亞的地理分布。',
  },
  {
    type: 'compare',
    title: 'Cava 主要品種深度比較',
    items: [
      { icon: '⚪', label: 'Macabeo / Viura', desc: '加泰羅尼亞：Macabeo；Rioja 以 Viura 稱之。早熟，高產，容易種植。主要提供蘋果、梨子、白花香氣，中高酸度，是 Cava 混調中佔比最大的品種（通常 40-60%）', color: '#3498db' },
      { icon: '🌿', label: 'Xarel·lo', desc: '加泰羅尼亞獨有，風格最鮮明。黃金蘋果、茴香、蜂蠟、草本。質地豐腴，天然高酸，為 Cava 提供結構和陳年骨架。近年單一品種 Xarel·lo Cava 成為精品市場寵兒', color: '#27ae60' },
      { icon: '🏔️', label: 'Parellada', desc: '種植在 Penedès 最高海拔丘陵。低酒精（9-11%），精緻花香（茉莉、金合歡）、青草、黃桃。用於增添混調的清雅和輕盈感，通常佔 10-20%', color: '#9b59b6' },
      { icon: '🌑', label: 'Pinot Noir（Cava 紅品種）', desc: '近年允許加入以提升酒體。用於 Cava Rosado。其他允許品種：Chardonnay（白，現代精品款）、Garnacha（紫紅）、Monastrell、Trepat（紅）', color: '#c0392b' },
    ],
  },
  {
    type: 'quiz',
    question: 'Xarel·lo 在 Cava 混調中扮演什麼角色？它的原產地限於哪個自治區？',
    options: [
      'Xarel·lo 提供清新蘋果花香，原產自拉里奧哈（Rioja）',
      'Xarel·lo 提供豐腴結構和草本辛香，原產自加泰羅尼亞，是獨有品種',
      'Xarel·lo 提供高糖分和低酸度，幫助酒精發酵，廣泛種植於全西班牙',
      'Xarel·lo 僅用於甜型氣泡酒，干型 Cava 禁止使用',
    ],
    answer: 1,
    explanation: 'Xarel·lo 是加泰羅尼亞獨有的本土品種，在 Cava 混調中負責提供豐腴質地、草本辛香和天然高酸，是 Cava 結構和陳年潛力的支柱。近年也有精品酒莊釀造單一品種 Xarel·lo Cava。',
  },

  {
    type: 'summary',
    message: 'Cava 品種學習完成！',
    keyPoints: [
      'Macabeo（Viura）：最廣泛，蘋果梨子清新，是混調主體（40-60%）',
      'Xarel·lo：加泰羅尼亞獨有，豐腴草本辛香，提供結構和陳年骨架',
      'Parellada：高海拔，花香清雅低酒精，為混調添加精緻輕盈感',
      '允許品種：Chardonnay（現代白）、Pinot Noir / Garnacha（玫瑰）',
    ],
  },
]

const S3M2L3_slides = [
  {
    type: 'cover',
    icon: '🥂',
    gradient: 'linear-gradient(135deg, #1a5276, #2874a6)',
    title: 'Cava 四大等級詳解',
    subtitle: 'Level 3 · Joven · Reserva · Gran Reserva · de Paraje',
    points: [
      { icon: '🥂', label: 'Joven', text: '酒泥陳年 9 個月以上，清新果香，Brut 款最普遍' },
      { icon: '⭐', label: 'Reserva', text: '15 個月以上，香氣複雜度明顯提升，性價比之選' },
      { icon: '👑', label: 'Gran Reserva', text: '30 個月以上，必須為 Brut Nature 或 Extra Brut 干型' },
      { icon: '🗺️', label: 'de Paraje Calificado', text: '2017 年新設，最嚴格的單一酒莊精品等級' },
    ],
  },
  {
    type: 'map',
    title: 'Cava DE 與精品 Cava 產區',
    mapRegion: 'catalonia',
    geojsonUrl: '/spain/geojson/appellations/cava.geojson',
    description: '新設立的 Cava de Paraje Calificado 單一產區和 Cava DE 等級，強調風土表達。',
  },
  {
    type: 'content',
    icon: '📜',
    title: 'Cava DO 四大分類規定',
    html: `
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
        <div style="background:#eaf4fb;border-left:4px solid #2980b9;padding:12px;border-radius:0 10px 10px 0">
          <strong>🥂 Cava Joven（少年）</strong><br/>
          陳年時間：≥ 9 個月。風格：清新果香，花香突出，口感清爽。通常為非年份款。適合日常飲用的主力款型。
        </div>
        <div style="background:#e9f7ef;border-left:4px solid #27ae60;padding:12px;border-radius:0 10px 10px 0">
          <strong>⭐ Cava Reserva</strong><br/>
          陳年時間：≥ 15 個月。開始出現酒泥香氣（餅乾、烤麵包）。果味與酵母感平衡發展。通常為年份款。
        </div>
        <div style="background:#f5eef8;border-left:4px solid #8e44ad;padding:12px;border-radius:0 10px 10px 0">
          <strong>👑 Cava Gran Reserva</strong><br/>
          陳年時間：≥ 30 個月。必須為 Brut Nature 或 Extra Brut。酵母烤麵包奶油感豐富，結構複雜，陳年潛力強。Codorníu Jaume Codorníu Gran Reserva 為著名範例。
        </div>
        <div style="background:#fde8d8;border-left:4px solid #e67e22;padding:12px;border-radius:0 10px 10px 0">
          <strong>🗺️ Cava de Paraje Calificado（精選莊園）</strong><br/>
          2017 年創立，是 Cava 體系的最高等級：<ul style="margin:4px 0 0;padding-left:16px">
            <li>來自同一莊園的單一地塊</li>
            <li>陳年 ≥ 36 個月</li>
            <li>必須為 Brut Nature（零添加糖）</li>
            <li>需年份標示</li>
            <li>手工採收，酒莊申請並通過審核</li>
          </ul>
        </div>
      </div>
    `,
  },
  {
    type: 'cava-tiers',
    title: 'Cava 四大等級互動探索',
    description: '比較 Guarda / Reserva / Gran Reserva / Paraje Calificado 的酒泥陳年時間、Dosage 規定與代表酒款。',
  },
  {
    type: 'quiz',
    question: '「Cava de Paraje Calificado」是 2017 年設立的最高等級，它的最低酒泥陳年時間是多少？',
    options: ['9 個月', '15 個月', '30 個月', '36 個月'],
    answer: 3,
    explanation: 'Cava de Paraje Calificado 是 Cava DO 體系中最嚴格的等級，要求酒泥陳年至少 36 個月，且必須是 Brut Nature（不添加任何 Dosage 糖液），來自單一認證莊園地塊，並需年份標示。',
  },

  {
    type: 'summary',
    message: 'Cava 分類學習完成！',
    keyPoints: [
      'Joven：≥ 9 個月，清新果香，日常主力款',
      'Reserva：≥ 15 個月，果味+酵母平衡，性價比高',
      'Gran Reserva：≥ 30 個月，必須 Brut Nature 或 Extra Brut',
      'de Paraje Calificado（2017 年）：≥ 36 個月，單一莊園，Brut Nature，最高等級',
    ],
  },
]

const S3M2L4_slides = [
  {
    type: 'cover',
    icon: '✨',
    gradient: 'linear-gradient(135deg, #1a5276, #1a6e3c)',
    title: 'Corpinnat & Clàssic Penedès',
    subtitle: 'Level 3 · 脫離 Cava 的精品革命',
    points: [
      { icon: '✨', label: 'Corpinnat', text: '2019 年成立，由 8 家頂級酒莊自願脫離 Cava DO，強調精品莊園哲學' },
      { icon: '🌿', label: 'Clàssic Penedès DO', text: '2012 年設立，限制在 Penedès 子區域、有機農法、傳統法氣泡酒' },
      { icon: '💭', label: '脫離的原因', text: '不滿 Cava 允許西班牙各地大量生產，稀釋了 Penedès 的精品形象' },
    ],
  },
  {
    type: 'map',
    title: 'Corpinnat & Clàssic Penedès 精品小農地帶',
    mapRegion: 'catalonia',
    geojsonUrl: '/spain/geojson/appellations/penedes.geojson',
    description: '脫離 Cava DO 的頂級小農，在 Penedès 核心地帶釀造高品質傳統法氣泡酒。',
  },
  {
    type: 'content',
    icon: '📜',
    title: '為什麼頂級酒莊要脫離 Cava DO？',
    html: `
      <p>Cava DO 允許在西班牙 8 個自治區生產，造成「Penedès 頂級精品」與「La Mancha 量產廉價日常泡泡」共用同一 Cava 標籤，嚴重稀釋品牌形象。</p>
      <h4>✨ Corpinnat（2019 年成立）</h4>
      <p>Gramona、Recaredo、Mestres 等 8 家酒莊自行退出 Cava DO 成立的「自願協會」：</p>
      <ul>
        <li><strong>產地</strong>：必須在 Penedès 歷史核心區域</li>
        <li><strong>農法</strong>：100% 有機或生物動力農法（認證必須）</li>
        <li><strong>陳年</strong>：至少 18 個月；頂級款 Reserva ≥ 30 個月</li>
        <li><strong>採收</strong>：100% 手工採收</li>
        <li><strong>品種</strong>：只允許 8 個加泰羅尼亞本土品種，禁止 Chardonnay 等國際品種</li>
      </ul>
      <h4>🌿 Clàssic Penedès DO（2012 年）</h4>
      <p>同樣限制在 Penedès，也要求有機農法和傳統法，但標準略低於 Corpinnat。允許 Chardonnay 等品種。是官方 DO，有法規保障。</p>
      <h4>🤔 這對消費者意味著什麼？</h4>
      <p>在架上看到「Corpinnat」或「Clàssic Penedès」標籤，可以確信：這是來自 Penedès 核心、有機農法、高品質的精品氣泡酒，完全不同於量產 Cava。</p>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Gramona III Lustros',
    image: '/spain/images/labels/corpinnat/gramona-iii-lustros-2012.png',
    caption: 'Gramona「III Lustros」Finca Font de Jui 2012——Corpinnat 創始八家酒莊之一，「III Lustros」意為「三個五年」，指裝瓶前需經 15 年酒窖規劃陳年。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Recaredo L\'Infinit',
    image: '/spain/images/labels/corpinnat/recaredo-linfinit-brut-nature-2023.jpg',
    caption: 'Recaredo「L\'Infinit」Brut Nature 2023——另一家 Corpinnat 創始酒莊，酒標標示「Crianza con Tapón de Corcho y \'Degorjat\' Manual」，強調人工搖瓶除渣的手工工藝。',
  },
  {
    type: 'quiz',
    question: 'Corpinnat 脫離 Cava DO 的主要原因是什麼？',
    options: [
      'Cava 的法規要求過嚴，導致生產成本過高',
      '不滿 Cava 允許全西班牙量產，稀釋 Penedès 精品形象，Corpinnat 要求有機農法和本土品種',
      'Corpinnat 的年份標示規定更寬鬆，讓酒莊有更多自由',
      'Corpinnat 允許使用更多人工酵母以確保風味穩定',
    ],
    answer: 1,
    explanation: 'Cava DO 允許全西班牙各地生產，Penedès 的頂級精品酒莊認為這稀釋了它們的形象。Corpinnat 要求 100% 有機農法、只用加泰羅尼亞本土品種、手工採收，目的是建立一個真正代表 Penedès 精品氣泡酒的新品牌形象。',
  },

  {
    type: 'summary',
    message: 'Corpinnat & Clàssic Penedès 學習完成！',
    keyPoints: [
      'Corpinnat：2019 年 8 家頂級酒莊成立，100% 有機、手工採收、本土品種限定',
      'Clàssic Penedès DO：2012 年官方 DO，有機農法+傳統法，允許 Chardonnay',
      '脫離動機：Cava 全國量產形象稀釋了 Penedès 精品定位',
      '消費者指南：Corpinnat 標籤 = 保證精品有機 Penedès 氣泡酒',
    ],
  },
]

// ── S3M3：Sherry 深度解析 ─────────────────────────────────────

const S3M3L1_slides = [
  {
    type: 'cover',
    icon: '🍄',
    gradient: 'linear-gradient(135deg, #d4ac0d, #e67e22)',
    title: 'Flor 酵母：生物性熟成的奇蹟',
    subtitle: 'Level 3 · Fino & Manzanilla 的靈魂科學',
    points: [
      { icon: '🍄', label: '酵母薄膜（Flor）', text: '在 Palomino 基酒液面自然形成的白色酵母菌膜' },
      { icon: '🛡️', label: '保護機制', text: 'Flor 消耗殘留糖分和氧氣，完全保護酒液不被氧化' },
      { icon: '⚗️', label: '獨特代謝產物', text: '酵母代謝產生乙醛、乙酸乙酯等，賦予鹹杏仁、青蘋果特質' },
    ],
  },
  {
    type: 'map',
    title: 'Sherry 三角地帶',
    mapRegion: 'andalucia',
    geojsonUrl: '/spain/geojson/appellations/jerez.geojson',
    description: 'Jerez-Xérès-Sherry、El Puerto de Santa María、Sanlúcar de Barrameda 構成的神聖三角。',
  },
  {
    type: 'content',
    icon: '🔬',
    title: 'Flor 酵母的生物學與條件',
    html: `
      <h4>🦠 Flor 是什麼？</h4>
      <p>Flor 是一種<strong>Saccharomyces cerevisiae</strong>（酵母菌）的特殊菌株，在特定條件下漂浮在 Palomino 基酒表面，形成厚達 1-2 公分的白色菌膜。</p>
      <h4>✅ Flor 存活的四個必要條件</h4>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
        <div style="background:#fef9e7;border-left:4px solid #f1c40f;padding:10px;border-radius:0 10px 10px 0">
          <strong>① 酒精濃度 14.5-15.5%</strong>：低於 14% → 不穩定雜菌競爭; 超過 17% → Flor 死亡
        </div>
        <div style="background:#e9f7ef;border-left:4px solid #27ae60;padding:10px;border-radius:0 10px 10px 0">
          <strong>② 甘油含量</strong>：Flor 以殘留甘油和少量糖分為食物來源
        </div>
        <div style="background:#eaf4fb;border-left:4px solid #2980b9;padding:10px;border-radius:0 10px 10px 0">
          <strong>③ 溫度 15-25°C</strong>：Jerez 的氣候恰好符合。Sanlúcar 的 Manzanilla 因海洋涼爽，Flor 比 Jerez 生長更旺盛均勻
        </div>
        <div style="background:#fde8d8;border-left:4px solid #e67e22;padding:10px;border-radius:0 10px 10px 0">
          <strong>④ 橡木桶留有空間（⅔ 裝滿）</strong>：Bodega 保持 1/3 空間讓 Flor 有氧氣接觸，但酒液本身不被氧化
        </div>
      </div>
      <h4 style="margin-top:12px">⚗️ Flor 代謝產生的關鍵化合物</h4>
      <ul>
        <li><strong>乙醛（Acetaldehyde）</strong>：賦予 Fino 鹹杏仁、青蘋果、酵母的特徵香氣</li>
        <li><strong>消耗甘油</strong>：讓 Fino 酒體比 Oloroso 更纖細輕盈</li>
        <li><strong>降低揮發酸</strong>：保持 Fino 的清新純淨</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🌊',
    title: 'Manzanilla：Flor 的海邊奇蹟',
    html: `
      <h4>🌊 為什麼 Manzanilla 比 Fino 更特別？</h4>
      <p>Manzanilla 只能在 <strong>Sanlúcar de Barrameda</strong> 這個鎮生產，地處 Guadalquivir 河口，緊鄰大西洋。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
        <div style="background:#eaf4fb;border-left:4px solid #3498db;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌡️ 氣候差異</strong><br/>
          Sanlúcar 比 Jerez 涼爽濕潤（海洋影響強），氣溫常年穩定在 18-22°C，讓 Flor <strong>全年均勻生長</strong>，無夏季休眠期（Jerez 夏季高溫 Flor 會減少）。
        </div>
        <div style="background:#e9f7ef;border-left:4px solid #27ae60;padding:12px;border-radius:0 10px 10px 0">
          <strong>🧂 海洋影響</strong><br/>
          Sanlúcar 的海洋空氣直接進入 Bodega，Flor 的代謝受到鹽分微環境影響，產生更多海洋礦石感。Manzanilla 的「鹽漬海風」香氣，是在 Jerez 無法複製的微氣候結果。
        </div>
        <div style="background:#fde8d8;border-left:4px solid #e67e22;padding:12px;border-radius:0 10px 10px 0">
          <strong>🔍 法規保護</strong><br/>
          必須在 Sanlúcar 完整釀造並熟成（連最終裝瓶都必須在當地）。若 Manzanilla 移回 Jerez 繼續熟成，則退回 Fino 分類。
        </div>
      </div>
    `,
  },
  {
    type: 'quiz',
    question: '為什麼 Manzanilla 的「海洋鹽漬感」比 Jerez 的 Fino 更為突出？',
    options: [
      'Manzanilla 使用不同的 Palomino 克隆品種，天生香氣不同',
      'Sanlúcar de Barrameda 緊鄰大西洋，海洋涼爽空氣讓 Flor 全年旺盛生長，海鹽微環境影響代謝產物',
      'Manzanilla 的酒精比 Fino 低，讓更多鹽分化合物保留',
      'Manzanilla 陳年時間超過 10 年，長期熟成增加了礦石感',
    ],
    answer: 1,
    explanation: 'Sanlúcar de Barrameda 位於 Guadalquivir 河口旁，大西洋海洋空氣直接流入 Bodega。涼爽氣候讓 Flor 比 Jerez 生長更旺盛均勻（無夏季高溫休眠），海鹽微環境影響 Flor 的代謝產物，造就 Manzanilla 獨特的海洋鹽漬鮮鹹特質，是地理不可複製的風土表達。',
  },

  {
    type: 'summary',
    message: 'Flor 酵母科學學習完成！',
    keyPoints: [
      'Flor 是 Saccharomyces cerevisiae 特殊菌株，在 Palomino 酒面形成保護薄膜',
      '存活條件：酒精 14.5-15.5%、溫度 15-25°C、需甘油作為食物',
      '代謝產物：乙醛（鹹杏仁、青蘋果香）+ 消耗甘油 → 酒體纖細輕盈',
      'Manzanilla：Sanlúcar 海洋微氣候讓 Flor 全年更旺盛，鹽漬感獨一無二',
    ],
  },
]

const S3M3L3_slides = [
  {
    type: 'cover',
    icon: '🎭',
    gradient: 'linear-gradient(135deg, #922b21, #784212)',
    title: '六大 Sherry 風格詳解',
    subtitle: 'Level 3 · 從 Fino 到 Palo Cortado',
    points: [
      { icon: '🥂', label: '生物熟成路線', text: 'Fino · Manzanilla — Flor 保護，鮮活礦石' },
      { icon: '🥃', label: '氧化熟成路線', text: 'Oloroso — 無 Flor，核桃皮革，深沉複雜' },
      { icon: '🎭', label: '稀世神秘', text: 'Palo Cortado — 介於兩者之間的罕見意外' },
    ],
  },
  {
    type: 'map',
    title: 'Sherry 釀酒中心',
    mapRegion: 'andalucia',
    geojsonUrl: '/spain/geojson/appellations/jerez.geojson',
    description: 'Jerez 城市周邊的酒莊區，Bodega 林立，索雷拉系統在此孕育數十年的複雜風味。',
  },
  {
    type: 'compare',
    title: '六大 Sherry 風格完整對比',
    items: [
      { icon: '🥂', label: 'Fino', desc: 'Flor 保護 / 生物熟成 / 15% 酒精 / 干型。風味：鹹杏仁、乾麥草、青蘋果、酵母。最輕盈，需冷藏，開瓶後 1 週內飲完。Jerez 生產', color: '#f1c40f' },
      { icon: '🌊', label: 'Manzanilla', desc: '同 Fino，但限定 Sanlúcar de Barrameda。全年旺盛 Flor。多出海鹽礦石鮮鹹感。是六大中最清爽輕盈的風格', color: '#3498db' },
      { icon: '🍯', label: 'Amontillado', desc: 'Flor 死亡後走氧化路線（雙重熟成）/ 16-22% 酒精 / 通常干型。風味：榛子、太妃糖、香料、蜂蜜、木頭。複雜度最高之一，可陳年數十年', color: '#e67e22' },
      { icon: '🪵', label: 'Oloroso', desc: '無 Flor / 純氧化熟成 / 17-22% 酒精 / 干型到微甜。風味：核桃、皮革、乾果（無花果、棗）、辛香料。酒體最豐滿', color: '#784212' },
      { icon: '🎭', label: 'Palo Cortado', desc: '罕見意外：原本按 Fino 走 Flor 路線，但 Flor 突然消失（原因不明），酒莊決定改走氧化路線。結合 Amontillado 的香氣精緻 + Oloroso 的酒體豐滿。非常稀少珍貴', color: '#8e44ad' },
      { icon: '🫂', label: 'Pedro Ximénez（PX）', desc: 'PX 葡萄日曬 2-3 週 → 高度濃縮 → 發酵被酒精終止 → 殘糖 > 200g/L。極甜：棗蜜、無花果乾、巧克力糖漿。可淋冰淇淋，或與陳年 Manchego 起司搭配', color: '#1a1a1a' },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Fino',
    image: '/spain/images/labels/jerez/la-bota-de-fino-35.jpg',
    caption: '「La Bota de Fino」No. 35（Equipo Navazos）——標示「Saca」（裝瓶批次）與年份，是理解 Sherry 非年份、批次導向裝瓶邏輯的最佳範例。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Manzanilla',
    image: '/spain/images/labels/jerez/el-gallo-azul-manzanilla.jpg',
    caption: 'El Gallo Azul Manzanilla（D.O. Manzanilla-Sanlúcar de Barrameda）——酒標明確標示只能在 Sanlúcar 生產的產區限定規範。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Pedro Ximénez（PX）',
    image: '/spain/images/labels/montilla-moriles/toro-albala-don-px-2010.jpg',
    caption: 'Toro Albalá「Don PX」Pedro Ximénez Vino Dulce Natural 2010——酒標說明「未過濾、可能有沉澱」，正是天然甜型酒的真實風貌。',
  },
  {
    type: 'quiz',
    question: '「Palo Cortado」被稱為 Sherry 中最神秘的風格，它是怎麼形成的？',
    options: [
      '用特別品種 Palo Cortado 葡萄釀製，與 Palomino 不同',
      '原本走 Fino 路線（有 Flor），但 Flor 突然意外消失，改走氧化熟成，結合兩種方式的特徵',
      '在 PX 甜型酒中加入 Fino 調配，創造半甜中間風格',
      '在陳年 20 年以上的超老 Oloroso 中出現的自然氧化產物',
    ],
    answer: 1,
    explanation: 'Palo Cortado 是 Sherry 世界中最難複製的「意外」：原本以 Fino 路線開始培育（有 Flor 保護），但因未知原因 Flor 突然消失，釀酒師改讓它走氧化熟成路線。結果擁有 Amontillado 的精緻鼻香 + Oloroso 的豐滿口感，是極為稀少的珍品。',
  },

  {
    type: 'summary',
    message: 'Sherry 六大風格學習完成！',
    keyPoints: [
      '生物熟成（有 Flor）：Fino（輕盈杏仁）、Manzanilla（海鹽清爽）',
      '雙重熟成：Amontillado（Flor 消失後再走氧化）= 榛子太妃糖，複雜度極高',
      '純氧化熟成：Oloroso（核桃皮革）、Palo Cortado（稀世意外，Amontillado 香 + Oloroso 體）',
      '甜型：PX（殘糖 > 200g/L，棗蜜漿巧克力糖漿）',
    ],
  },
]

const S3M3L4_slides = [
  {
    type: 'cover',
    icon: '🍽️',
    gradient: 'linear-gradient(135deg, #d4ac0d, #c0392b)',
    title: 'Sherry 餐酒搭配',
    subtitle: 'Level 3 · 從 Tapas 到甜點的完整指南',
    points: [
      { icon: '🥂', label: 'Fino / Manzanilla', text: '搭配海鮮、橄欖、伊比利火腿 — 學習如何像西班牙人喝 Sherry' },
      { icon: '🍯', label: 'Amontillado / Oloroso', text: '搭配熟成起司、兔肉雉雞燉菜、蘑菇料理' },
      { icon: '🍫', label: 'PX', text: '搭配巧克力甜點、陳年起司、香草冰淇淋' },
    ],
  },
  {
    type: 'map',
    title: 'Manzanilla — Sanlúcar 海岸微氣候',
    mapRegion: 'andalucia',
    geojsonUrl: '/spain/geojson/appellations/jerez-manzanilla.geojson',
    description: 'Sanlúcar de Barrameda 獨特的海洋微氣候，讓 Flor 酵母更活躍，創造最鹹鮮的 Manzanilla。',
  },
  {
    type: 'compare',
    title: 'Sherry 六大風格餐酒搭配建議',
    items: [
      { icon: '🥂', label: 'Fino & Manzanilla', desc: '● 海鮮：炸小魚、醋漬鯷魚、生蠔、煮蛤蜊\n● 伊比利橡木伊比利火腿（Jamón Ibérico）\n● 橄欖、杏仁、醃漬蔬菜（Encurtidos）\n● 輕淡白起司（Manchego Fresco）\n溫度：8-10°C 冰涼飲用', color: '#3498db' },
      { icon: '🍯', label: 'Amontillado', desc: '● 栗子蘑菇湯\n● 照燒雞腿、鄉村兔肉燉鍋\n● 中度熟成起司（Manchego Curado、Idiazábal）\n● 堅果類（核桃、榛子）\n溫度：13-15°C，像喝白酒一樣輕度冰涼', color: '#e67e22' },
      { icon: '🪵', label: 'Oloroso', desc: '● 紅肉燉菜（Rabo de Toro 牛尾燉）\n● 陳年 Manchego 起司（Añejo）、藍起司\n● 松露蘑菇烤鴨\n● 花生、深色堅果\n溫度：16-18°C，接近室溫飲用', color: '#784212' },
      { icon: '🍫', label: 'Pedro Ximénez（PX）', desc: '● 黑巧克力甜點（> 70% 可可）\n● 香草冰淇淋（直接淋上 PX 是最簡單奢華的甜點）\n● 阿拉伯椰棗蛋糕、無花果乾\n● 陳年藍起司（Cabrales）/ Roquefort\n溫度：14-16°C，微涼', color: '#8e44ad' },
    ],
  },
  {
    type: 'quiz',
    question: '以下哪個搭配是 Fino Sherry 最經典的食物組合？',
    options: [
      '陳年 Manchego 起司（Añejo）+ 核桃 + 16°C 飲用',
      '炸小魚 + 醋漬鯷魚 + 伊比利火腿 + 8-10°C 冰涼飲用',
      '黑巧克力甜點 + 香草冰淇淋 + 淋 Fino 後享用',
      '紅肉牛尾燉 + 藍起司 + Fino 室溫飲用',
    ],
    answer: 1,
    explanation: 'Fino（及 Manzanilla）最經典西班牙搭配：炸小魚（Pescaíto Frito）、醋漬鯷魚（Boquerones en Vinagre）、伊比利火腿，再搭配橄欖和杏仁。飲用溫度 8-10°C，像飲用清爽白酒一樣冰涼，在安達盧西亞的大排檔是最日常不過的風景。',
  },

  {
    type: 'summary',
    message: 'Sherry 餐酒搭配學習完成！',
    keyPoints: [
      'Fino / Manzanilla（8-10°C）：海鮮、火腿、橄欖 — 輕食清爽搭配',
      'Amontillado（13-15°C）：蘑菇燉雞、中度熟成起司、核桃堅果',
      'Oloroso（16-18°C）：紅肉燉菜、陳年起司、藍起司',
      'PX（14-16°C）：黑巧克力、香草冰淇淋（直接淋上！）、椰棗蛋糕',
    ],
  },
]

// ── S3M4：加強酒與甜型酒 ─────────────────────────────────────

const S3M4L1_slides = [
  {
    type: 'cover',
    icon: '☀️',
    gradient: 'linear-gradient(135deg, #8e44ad, #d4ac0d)',
    title: 'Montilla-Moriles — PX 的故鄉',
    subtitle: 'Level 3 · 沒有 Jerez 名氣，但 PX 更正宗',
    points: [
      { icon: '☀️', label: 'Pedro Ximénez 的原鄉', text: '世界上最集中的 PX 白葡萄種植產區，也是最甜最濃縮的' },
      { icon: '🌡️', label: '極端酷熱', text: '夏季可達 45°C，是西班牙最熱的產區之一，葡萄天然糖分極高' },
      { icon: '🪨', label: 'Albariza 白土', text: '與 Jerez 相同的白堊土壤，保水性強，讓乾旱環境的葡萄樹存活' },
    ],
  },
  {
    type: 'map',
    title: 'Toro & Cigales 西部產區',
    mapRegion: 'castilla-leon',
    geojsonUrl: '/spain/geojson/appellations/toro-cigales.geojson',
    description: '杜羅河上游，Toro 的 Tinta de Toro 和 Cigales 的粉紅酒，卡斯提亞-萊昂的另一面。',
  },
  {
    type: 'content',
    icon: '❓',
    title: 'Montilla-Moriles 與 Jerez 的關係',
    html: `
      <h4>❓ 有什麼差異？</h4>
      <p>Montilla-Moriles 在地理上與 Jerez 完全分開，位於西班牙安達盧西亞的科爾多瓦省。但兩者有非常多的相似之處：</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
        <div style="background:#fef9e7;border-left:4px solid #f1c40f;padding:12px;border-radius:0 10px 10px 0">
          <strong>相同之處</strong><br/>
          <ul style="margin:4px 0 0;padding-left:16px">
            <li>同樣使用 Flor 酵母（生物熟成）和索雷拉（Solera）系統</li>
            <li>同樣使用 Albariza 白堊土壤</li>
            <li>同樣有 Fino 風格（Montilla Fino）、Amontillado 風格、Oloroso 風格</li>
          </ul>
        </div>
        <div style="background:#eaf4fb;border-left:4px solid #3498db;padding:12px;border-radius:0 10px 10px 0">
          <strong>關鍵差異</strong><br/>
          <ul style="margin:4px 0 0;padding-left:16px">
            <li><strong>品種</strong>：Montilla-Moriles 主要使用 PX（Pedro Ximénez），Jerez 主要使用 Palomino</li>
            <li><strong>無需加酒精！</strong>：科爾多瓦的極端酷熱讓 PX 天然糖分極高，自然發酵就能達到 15% 酒精，無需添加烈酒強化</li>
            <li><strong>名氣較低</strong>：歷史上大量 Montilla PX 以散裝方式輸出給 Jerez 调配，反而幫助了 Jerez 的名氣</li>
          </ul>
        </div>
      </div>
      <h4 style="margin-top:12px">🫂 Montilla-Moriles PX 的特別之處</h4>
      <p>日曬（Pasificación）後的 PX 葡萄含殘糖極高（> 400g/L 的葡萄汁），發酵被早期酒精終止，最終酒款殘糖通常超過 300g/L。是全球幾乎最甜的非冰酒葡萄酒。</p>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Don PX（Toro Albalá）',
    image: '/spain/images/labels/montilla-moriles/toro-albala-don-px-2010.jpg',
    caption: 'Toro Albalá「Don PX」Pedro Ximénez Vino Dulce Natural 2010（Bodegas desde 1922）——Montilla-Moriles 最具代表性的 PX 甜酒酒莊之一。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Montilla Fino（Toro Albalá）',
    image: '/spain/images/labels/montilla-moriles/toro-albala-electrico-fino.jpg',
    caption: 'Toro Albalá「Eléctrico」Fino del Lagar，D.O. Montilla-Moriles——同一酒莊的 Fino 風格款，印證本文提到「Montilla Fino」的存在。',
  },
  {
    type: 'quiz',
    question: 'Montilla-Moriles 的 Fino 風格為何「不需要添加酒精」做加強？',
    options: [
      '法規禁止 Montilla-Moriles 使用加強工藝',
      '科爾多瓦的酷熱氣候讓 PX 葡萄天然含糖極高，自然發酵就能達到 15% 酒精',
      'Montilla-Moriles 的 Flor 酵母比 Jerez 的更耐高酒精，能在 18% 下存活',
      '當地的 Albariza 土壤特殊礦物質催化了更高效率的酒精發酵',
    ],
    answer: 1,
    explanation: '科爾多瓦省的夏季極端高溫（45°C）讓 PX 葡萄在採收時含糖量極高，通常自然發酵就能達到 15% 酒精，因此 Montilla-Moriles 的 Fino 類型酒款不需要像 Jerez 一樣添加中性烈酒強化，是天然高糖造就的奇蹟。',
  },

  {
    type: 'summary',
    message: 'Montilla-Moriles 學習完成！',
    keyPoints: [
      '位於科爾多瓦省，安達盧西亞，夏季高達 45°C',
      '主要品種 PX（Pedro Ximénez），天然高糖，Fino 無需添加酒精',
      '使用相同的 Flor 酵母、索雷拉系統，但較少國際知名度',
      '歷史上大量 Montilla PX 輸出給 Jerez 調配，間接造就了 Jerez 的名氣',
    ],
  },
]

const S3M4L2_slides = [
  {
    type: 'cover',
    icon: '🍯',
    gradient: 'linear-gradient(135deg, #c0392b, #8e44ad)',
    title: 'Málaga 甜酒與 Moscatel 風格',
    subtitle: 'Level 3 · 地中海陽光下的甜蜜傳奇',
    points: [
      { icon: '🏖️', label: 'Málaga DO', text: '地中海沿岸，最古老的西班牙 DO 之一，甜型加強酒的傳統產地' },
      { icon: '🍇', label: 'Moscatel de Málaga', text: 'Muscat of Alexandria，香水玫瑰荔枝，是安達盧西亞甜白的頂點' },
      { icon: '📜', label: '歷史', text: '18-19 世紀曾是全歐最昂貴的甜酒，因根瘤蚜幾近消失，近年緩慢復興' },
    ],
  },
  {
    type: 'map',
    title: 'La Mancha — 世界最大 DO 高原',
    mapRegion: 'castilla-la-mancha',
    geojsonUrl: '/spain/geojson/appellations/la-mancha.geojson',
    description: '綿延數百公里的卡斯提亞高原，Airén 白品種和 Cencibel（Tempranillo）的廣大疆域。',
  },
  {
    type: 'content',
    icon: '🗺️',
    title: 'Málaga DO：分類與風格',
    html: `
      <h4>📜 歷史背景</h4>
      <p>Málaga 在 18-19 世紀是全歐洲最受追捧的甜酒，俄國沙皇尼古拉二世最愛的酒據說就是 Málaga 甜酒。根瘤蚜和工業化生產幾乎摧毀了這一切，但部分固執的釀酒師持續作業。</p>
      <h4>🍷 Málaga DO 的主要類型</h4>
      <ul>
        <li><strong>Málaga（加強型）</strong>：Palomino / PX / Moscatel 基酒 + 酒精加強，殘糖不同呈現不同甜度</li>
        <li><strong>Moscatel de Málaga</strong>：用 Muscat of Alexandria（本地稱 Moscatel）釀製，香水、玫瑰、荔枝、橙花蜂蜜，是亮點</li>
        <li><strong>Pasas de Málaga</strong>：日曬葡萄（pasas = 葡萄乾）釀製，濃縮棗蜜風格</li>
      </ul>
      <h4>🌊 Sierras de Málaga DO</h4>
      <p>2001 年設立，是 Málaga 的干型版本。高海拔山地（500-1000 公尺）種植，以 Moscatel 釀造干型白酒，花香清雅是其亮點。這是當代馬拉加葡萄酒的現代面貌。</p>
      <h4>🍇 Moscatel de Alejandría（Muscat of Alexandria）</h4>
      <p>本地稱 Moscatel，是 Muscat 家族中果粒最大的品種，天生極高糖分。在馬拉加海岸的強烈日照下，果實芳香物質高度濃縮，帶來最典型的玫瑰花瓣、荔枝、橙花、蜂蜜香氣。</p>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Botani「Moscatel Old Vines」',
    image: '/spain/images/labels/malaga/botani-moscatel-old-vines.jpg',
    caption: 'Botani「Moscatel Old Vines」，Sierras de Málaga D.O.——由 Jorge Ordóñez & Co. 釀造，是本文提到老藤 Moscatel de Alejandría 最具國際知名度的代表酒款之一。',
  },
  {
    type: 'quiz',
    question: 'Sierras de Málaga DO（2001 年設立）與傳統 Málaga DO 的主要差異是什麼？',
    options: [
      'Sierras de Málaga 是加強甜酒，Málaga 是干型氣泡酒',
      'Sierras de Málaga 以高海拔山地種植釀造干型葡萄酒，Málaga 主要指加強甜型酒',
      'Sierras de Málaga 只允許 Tempranillo，Málaga 只允許 Moscatel',
      '兩者完全相同，Sierras de Málaga 只是更新的名稱',
    ],
    answer: 1,
    explanation: 'Sierras de Málaga DO 是 2001 年設立的新等級，生產區域在馬拉加省高海拔山地，以 Moscatel 和其他品種釀造干型葡萄酒（白、紅、玫瑰），代表馬拉加葡萄酒的現代面貌，與傳統加強甜型的 Málaga DO 形成互補。',
  },

  {
    type: 'summary',
    message: 'Málaga 甜酒學習完成！',
    keyPoints: [
      '18-19 世紀全歐最受追捧甜酒，根瘤蚜後幾近消失，現緩慢復興',
      'Moscatel de Málaga：Muscat of Alexandria，玫瑰荔枝橙花蜂蜜是標誌',
      '三大風格：Málaga（加強甜型）、Pasas（葡萄乾濃縮）、Moscatel',
      'Sierras de Málaga DO（2001）：高海拔現代干型款，Moscatel 花香干白',
    ],
  },
]

const S3M4L3_slides = [
  {
    type: 'cover',
    icon: '🌋',
    gradient: 'linear-gradient(135deg, #1a1a2e, #d4ac0d)',
    title: '加那利群島甜酒與日曬葡萄工藝',
    subtitle: 'Level 3 · 大西洋火山島的甜蜜珍品',
    points: [
      { icon: '🌋', label: 'Malvasía Volcánica', text: '火山土壤種植的 Malvasía，是加那利甜酒的靈魂品種' },
      { icon: '☀️', label: '日曬工藝（Pasificación）', text: '葡萄在藤上自然曬乾或採後攤曬，糖分高度濃縮' },
      { icon: '📜', label: '大航海時代', text: '曾是莎士比亞作品中出現的「Malmsey」，16-17 世紀橫掃歐洲貴族宮廷' },
    ],
  },
  {
    type: 'map',
    title: '阿拉貢 Garnacha 老藤產區',
    mapRegion: 'aragon',
    description: 'Campo de Borja・Cariñena・Calatayud，高海拔阿拉貢高原，世界最古老 Garnacha 老藤聚集地。',
  },
  {
    type: 'content',
    icon: '📜',
    title: '加那利甜酒的歷史與現代',
    html: `
      <h4>📜 大航海時代的傳奇</h4>
      <p>加那利群島在 15-17 世紀是歐洲前往美洲和亞洲的重要中繼站。當時的 <strong>Malvasía（Malmsey）甜酒</strong>被運往英國、葡萄牙、荷蘭等地，出現在莎士比亞《亨利四世》等作品中，是歐洲貴族宮廷最喜愛的飲品之一。</p>
      <p>後來根瘤蚜入侵（1878-1900 年代）、農村人口外移，讓這一傳統幾乎消逝。但加那利群島因地理隔離，部分老藤存活，近年有意識地復興。</p>
      <h4>🍇 Malvasía 在加那利的兩種形式</h4>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
        <div style="background:#fef9e7;border-left:4px solid #f1c40f;padding:12px;border-radius:0 10px 10px 0">
          <strong>① Malvasía Aromática（香水 Malvasía）</strong><br/>
          香水、橙花、杏桃、蜂蜜，高度芳香型。La Palma 島和 Lanzarote 都有種植。現多用於干型清新白酒，也有甜型版本。
        </div>
        <div style="background:#fde8d8;border-left:4px solid #e67e22;padding:12px;border-radius:0 10px 10px 0">
          <strong>② Malvasía Volcánica（火山 Malvasía）</strong><br/>
          種植在 Lanzarote 火山 Picon 砂礫中。果粒大、低酸，日曬後糖分極度濃縮。甜型款帶有杏桃果醬、太妃糖、火山礦石感。是加那利最有個性的甜酒原料。
        </div>
      </div>
      <h4 style="margin-top:12px">☀️ 日曬工藝（Pasificación）的科學</h4>
      <p>葡萄採收後在<strong>草蓆或木板架上攤曬</strong>（或在藤上自然風乾），水分蒸發讓葡萄縮成葡萄乾狀態，糖分濃縮 3-4 倍。加那利島的強烈日照和 Alisios 信風聯手創造了理想的日曬條件。</p>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Yaiza Esencia「Malvasía Volcánica」',
    image: '/spain/images/labels/canarias/yaiza-esencia-malvasia-volcanica-2017.jpg',
    caption: 'Yaiza「Esencia」Malvasía Volcánica 2017，Bodegas Vega de Yuco（Lanzarote D.O.）——酒標標示「Seco」（干型），展現本文提到火山 Malvasía 品種的另一面：即便是不甜版本，同樣承載著 Picón 火山礦石感；同款葡萄亦常見於甜型裝瓶。',
  },
  {
    type: 'quiz',
    question: '加那利群島的 Malvasía（Malmsey）甜酒在哪個歷史時期最享有盛名，並出現在哪位著名作家的作品中？',
    options: [
      '20 世紀初，出現在海明威的小說中',
      '15-17 世紀大航海時代，出現在莎士比亞的作品中',
      '18 世紀工業革命，出現在狄更斯小說中',
      '古羅馬時期，出現在維吉爾的詩作中',
    ],
    answer: 1,
    explanation: '加那利 Malvasía（英文稱 Malmsey）在 15-17 世紀大航海時代是橫掃歐洲貴族宮廷的頂級甜酒。莎士比亞在《亨利四世》等作品中多次提及 Malmsey，是彼時文化地位的最好證明。加那利群島是歐洲前往新大陸的中繼站，這讓 Malvasía 得以廣泛流通。',
  },

  {
    type: 'summary',
    message: '加那利甜酒學習完成！',
    keyPoints: [
      '大航海時代 Malvasía（Malmsey）是莎士比亞時期宮廷最愛，加那利是重要產地',
      'Malvasía Aromática：香水橙花杏桃，La Palma 和 Lanzarote 都有',
      'Malvasía Volcánica：火山 Picon 砂礫，日曬後杏桃太妃糖火山礦石',
      '日曬工藝（Pasificación）：草蓆攤曬使糖分濃縮 3-4 倍',
    ],
  },
]

const S3FinalExam_slides = [
  {
    type: 'cover',
    icon: '🎓',
    gradient: 'linear-gradient(135deg, #2c3e50, #8e44ad)',
    title: 'Level 3 綜合評量',
    subtitle: '釀造工藝與特殊酒款 · 最終測驗',
    points: [
      { icon: '📋', label: '10 題綜合測驗', text: '涵蓋橡木桶、Cava、Sherry、加強甜酒四大主題' },
      { icon: '✅', label: '通過標準', text: '答對 7 題以上即完成 Level 3' },
      { icon: '🏆', label: '完成後解鎖', text: 'Level 4：大師品鑑（盲品・年份・侍酒師實務）' },
    ],
  },
  {
    type: 'quiz',
    question: '【橡木桶】傳統 Rioja 的標誌性「椰子香草」香氣，主要來自哪種橡木中的哪個化合物？',
    options: [
      '法國橡木中的丁香酚（Eugenol）',
      '美國橡木中的乳內酯（Oak Lactones）+ 香草醛（Vanillin）',
      '法國橡木中的糠醛（Furfural）',
      '美國橡木中的鞣酸（Ellagitannins）',
    ],
    answer: 1,
    explanation: '美國橡木（Quercus alba）含有大量乳內酯（椰子、奶油）和香草醛（香草），是傳統 Rioja 長期美國橡木桶陳年後最具標誌性的香氣化合物。',
  },
  {
    type: 'quiz',
    question: '【Rioja 風格】以下哪個描述符合「現代派 Rioja」的風格特徵？',
    options: [
      '美國橡木桶 6-9 年陳年，磚橙色，輕盈椰子香草絲滑口感',
      '法國新橡木桶 12-18 個月，深紫濃縮，咖啡烤土司，豐滿高酒精',
      '大型 Foudre 桶中不接觸橡木，保留原汁鮮果風格',
      '完全不用橡木，不鏽鋼桶釀造，保留 Tempranillo 原始果香',
    ],
    answer: 1,
    explanation: '現代派 Rioja（以 Artadi、Roda 為代表）使用法國新橡木桶短期（12-18 個月）陳年，保留深濃紫黑色澤，帶來咖啡、深烤土司、烏梅果醬，口感豐滿高酒精，風格受國際葡萄酒評家青睞。',
  },
  {
    type: 'quiz',
    question: '【Cava 等級】「Cava de Paraje Calificado」是 Cava DO 最高精品等級，它的最低酒泥陳年要求是多少？必須符合哪個甜度级别？',
    options: [
      '30 個月，Brut（每升含糖 < 12g）',
      '36 個月，Brut Nature（不添加任何糖液）',
      '24 個月，Extra Brut（含糖 < 6g）',
      '18 個月，自由選擇甜度等級',
    ],
    answer: 1,
    explanation: 'Cava de Paraje Calificado（2017 年設立）要求酒泥陳年 ≥ 36 個月，必須為 Brut Nature（Dosage = 0，不添加任何補糖液），來自單一認證莊園地塊，年份標示，手工採收。是 Cava 體系最嚴格的等級。',
  },
  {
    type: 'quiz',
    question: '【Cava 品種】Xarel·lo 在 Cava 混調中扮演什麼核心角色？',
    options: [
      '提供清新蘋果梨子香氣，是混調的主力品種（40-60%）',
      '提供豐腴質地和草本辛香，是 Cava 結構和陳年骨架的支柱',
      '提供精緻低酒精的花香，增添混調的輕盈感',
      '提供紅色果香，是 Cava Rosado 的主要原料',
    ],
    answer: 1,
    explanation: 'Xarel·lo 是加泰羅尼亞獨有品種，其豐腴質地和草本辛香（茴香、蜂蠟）為 Cava 提供結構骨架和陳年潛力。近年精品酒莊也釀造單一品種 Xarel·lo Cava，展現其複雜個性。（主力品種 Macabeo 才是 40-60% 的骨幹）',
  },
  {
    type: 'quiz',
    question: '【Corpinnat】Corpinnat 協會成立的主要原因是什麼？',
    options: [
      '法規限制太嚴格，Corpinnat 提供更寬鬆的產區規範',
      '不滿 Cava 全國量產稀釋形象，Corpinnat 要求有機農法、本土品種、Penedès 核心產地',
      'Corpinnat 允許添加更多 Chardonnay，迎合國際口味',
      '為了讓生產者免稅，降低精品氣泡酒的市場售價',
    ],
    answer: 1,
    explanation: '2019 年，Gramona 等 8 家頂級酒莊自願退出 Cava DO，成立 Corpinnat 協會。目的是與「全國量產 Cava」做出明確區隔，要求 100% 有機認證農法、只用加泰羅尼亞本土品種、手工採收、最低 18 個月酒泥陳年。',
  },
  {
    type: 'quiz',
    question: '【Flor 酵母】Flor 酵母在 Sherry 熟成過程中的主要作用是什麼？',
    options: [
      'Flor 消耗酒中的酒精，將 Fino 從 15% 降低到 12%',
      'Flor 在酒面形成保護薄膜，消耗氧氣和甘油，防止氧化，並代謝產生鹹杏仁青蘋果特質',
      'Flor 將干型 Palomino 轉化為甜型，增加殘糖含量',
      'Flor 是橡木桶內壁的特殊黴菌，賦予 Fino 的木質香氣',
    ],
    answer: 1,
    explanation: 'Flor 是 Saccharomyces cerevisiae 特殊菌株，在 Palomino 酒液表面形成白色薄膜，消耗殘留甘油和氧氣，完全保護酒液不被氧化（生物熟成）。其代謝產物乙醛賦予 Fino 標誌性的鹹杏仁、青蘋果香氣。',
  },
  {
    type: 'quiz',
    question: '【Sherry 風格】「Palo Cortado」是最罕見的 Sherry 類型，它是如何形成的？',
    options: [
      '用 Palo Cortado 特殊品種葡萄釀製，是計劃好的獨立工藝',
      '原本走 Fino 路線培育（有 Flor），但 Flor 突然意外消失，改走氧化熟成',
      '在 PX 和 Oloroso 之間按比例調配而成的混合風格',
      '經過超過 50 年陳年的超老 Amontillado 自然演化的最終形態',
    ],
    answer: 1,
    explanation: 'Palo Cortado 無法計劃生產，是一個「意外的奇蹟」。原本以 Fino 路線培育的酒桶，Flor 突然死去（確切原因至今不完全清楚），釀酒師決定讓它走氧化熟成。結合 Amontillado 的優雅鼻香 + Oloroso 的豐滿酒體，極為稀少珍貴。',
  },
  {
    type: 'quiz',
    question: '【Montilla-Moriles】Montilla-Moriles 的 Fino 類型酒款為何不需要添加酒精強化？',
    options: [
      '法規禁止 Montilla-Moriles 使用任何加強工藝',
      '科爾多瓦的極端酷熱讓 PX 葡萄天然含糖極高，自然發酵就能達到 15% 酒精',
      '當地 Albariza 土壤的礦物質直接催化更高效的酵母發酵',
      'Montilla-Moriles 使用比 Palomino 更耐高糖的特殊酵母品系',
    ],
    answer: 1,
    explanation: 'Montilla-Moriles 位於科爾多瓦省，夏季可達 45°C，是西班牙最熱的葡萄酒產區之一。主要品種 PX 在如此高溫下天然積累極高糖分，自然發酵即可達到 Flor 存活所需的 15% 酒精，無需添加烈酒強化。',
  },
  {
    type: 'quiz',
    question: '【Málaga 甜酒】Sierras de Málaga DO（2001 年設立）與傳統 Málaga DO 的主要差異是什麼？',
    options: [
      'Sierras de Málaga 是甜型加強酒，Málaga 是干型碳酸飲料',
      'Sierras de Málaga 在高海拔山地釀造干型葡萄酒，Málaga 主要指加強甜型酒',
      'Sierras de Málaga 只允許 Cabernet Sauvignon，Málaga 只允許 Moscatel',
      '兩者完全相同產品，只是行政區劃的名稱變更',
    ],
    answer: 1,
    explanation: 'Sierras de Málaga DO（2001）在馬拉加省高海拔山地（500-1000 公尺）生產干型白、紅、玫瑰葡萄酒，代表馬拉加葡萄酒的現代精品面向。傳統 Málaga DO 主要指加強甜型酒（PX、Moscatel 為基礎）。兩個 DO 互補，各有定位。',
  },
  {
    type: 'summary',
    icon: '🏆',
    message: '🎉 恭喜完成 Level 3 綜合評量！您已掌握西班牙葡萄酒的釀造工藝與特殊酒款！',
    keyPoints: [
      '✅ 橡木桶工藝：美國桶（椰子香草）vs 法國桶（丁香精緻），傳統 vs 現代 Rioja 論戰',
      '✅ Cava 體系：傳統法八步驟，三大品種（Macabeo/Xarel·lo/Parellada），四個等級（Paraje 最高）',
      '✅ Corpinnat / Clàssic Penedès：精品脫離 Cava，有機農法本土品種',
      '✅ Sherry 深度：Flor 科學、Solera 系統、六大風格（含稀世 Palo Cortado）、餐酒搭配',
      '✅ 加強甜酒：Montilla-Moriles（PX 無需強化）、Málaga（Moscatel 甜白）、加那利（Malvasía 火山）',
      '✅ 現在可以解鎖 Level 4：大師品鑑 👑',
    ],
  },
]

// ───────────────────────────────────────────────────────────────
//  Level 3 — 示範投影片（Sherry 深度解析）
// ───────────────────────────────────────────────────────────────

const S3M3L2_slides = [
  {
    type: 'cover',
    icon: '🥃',
    gradient: 'linear-gradient(135deg, #d4ac0d, #e67e22)',
    title: '索雷拉（Solera）熟成系統',
    subtitle: 'Level 3 · Jerez 深度解析',
    points: [
      { icon: '🪣', label: '動態熟成', text: '新舊年份不斷混合，無法標示單一年份' },
      { icon: '⏳', label: 'Criadera 階梯', text: '多層桶依年份分層，像一場永不停歇的接力' },
      { icon: '∞', label: '理論上無限年份', text: '最老的 Solera 含有百年以上的酒液' },
    ],
  },
  {
    type: 'map',
    title: 'Albariza 白堊土地帶分布',
    mapRegion: 'andalucia',
    geojsonUrl: '/spain/geojson/appellations/jerez.geojson',
    description: '反射陽光的白色白堊土（Albariza）是 Sherry 最佳風土的標誌，主要分布在三角地帶周邊。',
  },
  {
    type: 'content',
    icon: '⏳',
    title: '索雷拉系統如何運作？',
    html: `
      <p>索雷拉（Solera）系統是 Jerez 最獨特的熟成方式，創造出風格高度一致的 Sherry。</p>
      <h4>📦 基本結構</h4>
      <p>橡木桶分成多個「階段」（Criadera，意為「育嬰室」）：</p>
      <ol>
        <li><strong>Criadera 1（最新）</strong>：存放新酒，等待加入系統</li>
        <li><strong>Criadera 2、3...（漸老）</strong>：每年從上一層抽取部分酒液補充</li>
        <li><strong>Solera（最老）</strong>：最底層，最終裝瓶的酒就從這裡取出（通常不超過 1/3）</li>
      </ol>
      <h4>🔄 混合機制</h4>
      <p>每次從 Solera 取出裝瓶後，以 Criadera 1 的酒補充——如此持續循環。結果是<strong>每瓶酒都包含了歷年累積的酒液</strong>，理論上含有最初一批酒的痕跡。</p>
      <h4>✨ 為什麼重要？</h4>
      <ul>
        <li>創造極度一致的風格（每年品質無明顯差異）</li>
        <li>賦予複雜的氧化陳年風味：堅果、蜂蜜、乾果</li>
        <li>是 Amontillado、Oloroso、PX 等複雜 Sherry 的靈魂</li>
      </ul>
    `,
  },
  {
    type: 'sherry-solera',
    title: '索雷拉系統 × 六大 Sherry 風格互動探索',
    description: '從 Criadera 階梯到 Fino / Manzanilla / Amontillado / Oloroso / Palo Cortado / PX 的 Flor 狀態與風味剖析。',
  },
  {
    type: 'quiz',
    question: '關於索雷拉（Solera）系統，以下哪個描述是正確的？',
    options: [
      '每批酒都是同一年份的純釀',
      '從 Solera 裝瓶時，每次最多可取出全部存量的 1/3',
      '索雷拉系統只用於製作 Fino',
      '新酒直接加入 Solera 最底層'
    ],
    answer: 1,
    explanation: '為了保持風格一致性，每次從 Solera（最底層）抽取裝瓶的量通常不超過該層存量的 1/3，讓足夠的老酒留存以維持複雜度。',
  },

  {
    type: 'summary',
    message: '索雷拉系統學習完成！',
    keyPoints: [
      '索雷拉是多層動態熟成系統，Criadera 為各階段橡木桶組',
      '每次裝瓶不超過 Solera 層存量的 1/3',
      '混合多年酒液，理論上含有歷史最古老的酒液痕跡',
      '創造風格高度一致的 Sherry，是 Amontillado / Oloroso / PX 的靈魂',
    ],
  },
]

// ───────────────────────────────────────────────────────────────
//  Level 4 — 示範投影片（盲品）
// ───────────────────────────────────────────────────────────────

const S4M1L1_slides = [
  {
    type: 'cover',
    icon: '👑',
    gradient: 'linear-gradient(135deg, #f39c12, #e67e22)',
    title: 'WSET 系統化分析法（SAT）',
    subtitle: 'Level 4 · 盲品技術',
    points: [
      { icon: '👁️', label: '外觀（Appearance）', text: '清澈度、顏色深度、色調' },
      { icon: '👃', label: '香氣（Nose）', text: '清潔度、濃度、特性、發展階段' },
      { icon: '👅', label: '口感（Palate）', text: '甜度、酸度、單寧、酒精、酒體、香味' },
    ],
  },
  {
    type: 'content',
    icon: '👁️',
    title: '外觀分析：看穿一杯酒的秘密',
    html: `
      <h4>🔍 外觀三要素</h4>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
        <div style="background:#fce8e6;border-radius:10px;padding:12px">
          <strong>清澈度（Clarity）</strong><br/>
          清澈（Clear）或混濁（Hazy）。未過濾的自然酒可能有輕微混濁，不一定是缺陷。
        </div>
        <div style="background:#fff8e1;border-radius:10px;padding:12px">
          <strong>顏色深度（Intensity）</strong><br/>
          淡（Pale）→ 中等（Medium）→ 深（Deep）<br/>
          深色通常表示：濃縮度高、陳年時間短（紅酒）、炎熱氣候
        </div>
        <div style="background:#e8f5e9;border-radius:10px;padding:12px">
          <strong>色調（Colour）</strong><br/>
          白酒：檸檬色 → 金色 → 琥珀色（代表氧化/陳年）<br/>
          紅酒：紫色 → 寶石紅 → 磚紅色（代表陳年）<br/>
          看杯緣：磚紅/橙色邊緣 = 有陳年；紫色邊緣 = 年輕
        </div>
      </div>
      <h4 style="margin-top:16px">🇪🇸 西班牙酒的外觀線索</h4>
      <ul>
        <li>Rioja Gran Reserva：磚紅色、橙色杯緣 → 陳年明顯</li>
        <li>年輕 Tempranillo：深寶石紅、紫色邊緣</li>
        <li>Albariño：淡檸檬色、有時帶輕微綠色調</li>
        <li>Oloroso Sherry：深琥珀色 → 長期氧化陳年</li>
      </ul>
    `,
  },
  {
    type: 'quiz',
    question: '在評估一杯紅酒時，杯緣出現磚紅色或橙色調通常表示什麼？',
    options: [
      '葡萄成熟度不足',
      '酒有缺陷（酒香酸敗）',
      '酒經過一定程度的陳年',
      '這是年輕酒的正常特徵'
    ],
    answer: 2,
    explanation: '磚紅色或橙色杯緣是紅酒陳年的典型特徵。隨著時間推移，紅酒中的色素（花青素）逐漸氧化，顏色從紫紅色演變為磚紅、橙色調。',
  },
  {
    type: 'summary',
    message: '外觀分析方法學習完成！',
    keyPoints: [
      '三要素：清澈度、顏色深度、色調',
      '杯緣磚紅/橙色 = 陳年；紫色 = 年輕',
      '白酒琥珀色 = 氧化風格或高度陳年',
      'Oloroso Sherry 深琥珀色是長期氧化熟成的標誌',
    ],
  },
]

// ───────────────────────────────────────────────────────────────
//  Level 4 — 完整投影片
// ───────────────────────────────────────────────────────────────

// ── S4M1：系統性盲品技術 ──────────────────────────────────────

const S4M1L2_slides = [
  {
    type: 'cover',
    icon: '🍇',
    gradient: 'linear-gradient(135deg, #6c3483, #922b21)',
    title: '西班牙紅品種香氣圖譜',
    subtitle: 'Level 4 · 盲品識別訓練',
    points: [
      { icon: '❤️', label: 'Tempranillo', text: '皮革・煙燻・乾燥草本・紅果，是西班牙紅酒的基準線' },
      { icon: '🫐', label: 'Garnacha', text: '紅莓果醬・橘皮・白胡椒・甘草，高酒精、圓潤' },
      { icon: '⬛', label: 'Monastrell / Mencía / Bobal', text: '黑果濃縮・花香輕盈・高酸不同調，三種個性截然不同' },
    ],
  },
  {
    type: 'compare',
    title: '五大西班牙紅品種香氣對比',
    items: [
      {
        icon: '❤️',
        label: 'Tempranillo',
        desc: '顏色：中深寶石紅 / 一次香氣：紅李、乾燥玫瑰、皮革 / 二次香氣：香草、椰子（美國桶） / 三次香氣：煙燻、乾燥草本、無花果。酸度中等、單寧中等絲滑，是盲品「西班牙紅酒」最典型的起點',
        color: '#c0392b',
      },
      {
        icon: '🍓',
        label: 'Garnacha（Grenache）',
        desc: '顏色：通常較淡（低色素提取）/ 香氣：草莓果醬、覆盆子、橘皮、白胡椒、甘草、薰衣草 / 老藤：更多香料深度。低酸、高酒精（14-16%）、圓潤，杯中色澤較淡是重要線索',
        color: '#e74c3c',
      },
      {
        icon: '🫐',
        label: 'Monastrell（Mourvèdre）',
        desc: '顏色：深濃紫黑 / 香氣：黑莓、藍莓果醬、黑巧克力、墨汁、甘草、獸皮（老藤）/ 口感：高酒精（14-15.5%），豐滿飽滿。盲品線索：極深色 + 南部炎熱產區風格',
        color: '#1a237e',
      },
      {
        icon: '🌸',
        label: 'Mencía',
        desc: '顏色：中等深度寶石紅 / 香氣：紫羅蘭花香、覆盆子、紅李、鉛筆礦石感、輕微草本 / 口感：低至中等單寧、高酸、輕盈。常被比較為西班牙 Pinot Noir—花香+礦石是盲品關鍵',
        color: '#8e44ad',
      },
      {
        icon: '🍇',
        label: 'Bobal',
        desc: '顏色：極深紫黑 / 香氣：黑李、黑莓、紫羅蘭、香料、大地感 / 口感最重要線索：天然高酸度（比 Monastrell 明顯），加上深色 = Utiel-Requena 或 Manchuela',
        color: '#4a235a',
      },
    ],
  },
  {
    type: 'content',
    icon: '🔍',
    title: '盲品辨識西班牙紅品種：四大線索',
    html: `
      <h4>🎯 系統性識別流程</h4>
      <div style="display:flex;flex-direction:column;gap:9px;margin-top:8px">
        <div style="background:#fce8e6;border-left:4px solid #c0392b;padding:11px;border-radius:0 10px 10px 0">
          <strong>① 顏色深度</strong><br/>
          淡→中等：Garnacha、Mencía（低色素）<br/>
          深→極深：Monastrell、Bobal（高色素）<br/>
          中等：Tempranillo（最「中間」的品種）
        </div>
        <div style="background:#f5eef8;border-left:4px solid #8e44ad;padding:11px;border-radius:0 10px 10px 0">
          <strong>② 香氣第一印象</strong><br/>
          花香突出 → 考慮 Mencía 或年輕 Garnacha<br/>
          皮革煙燻草本 → 陳年 Tempranillo（Rioja Gran Reserva）<br/>
          黑果濃縮 → Monastrell 或老藤 Bobal<br/>
          白胡椒甘草 → Garnacha（特別是 Priorat 老藤）
        </div>
        <div style="background:#e9f7ef;border-left:4px solid #27ae60;padding:11px;border-radius:0 10px 10px 0">
          <strong>③ 酸度水準</strong><br/>
          高酸：Mencía、Bobal、Tempranillo 年輕款<br/>
          中低酸：Garnacha（高溫產區）、老藤 Monastrell
        </div>
        <div style="background:#eaf4fb;border-left:4px solid #2980b9;padding:11px;border-radius:0 10px 10px 0">
          <strong>④ 酒精感受</strong><br/>
          高酒精溫熱感 → Garnacha（14-16%）、Monastrell（14-15.5%）<br/>
          中等酒精 → Mencía（12-13.5%）、Tempranillo 高海拔款
        </div>
      </div>
    `,
  },
  {
    type: 'quiz',
    question: '盲品一杯紅酒，觀察到「顏色較淡、覆盆子草莓香氣、白胡椒甘草、高酒精（14.5%）、低酸」，最可能的品種是？',
    options: ['Tempranillo', 'Garnacha', 'Monastrell', 'Mencía'],
    answer: 1,
    explanation: 'Garnacha 的主要盲品線索：① 顏色較淡（色素低）② 草莓覆盆子 + 白胡椒甘草的特徵香氣 ③ 高酒精（14-16%）④ 低酸、圓潤口感。這四個線索組合高度指向 Garnacha，尤其是來自 Priorat、Navarra 或 Campo de Borja 的老藤款。',
  },
  {
    type: 'summary',
    message: '西班牙紅品種香氣圖譜學習完成！',
    keyPoints: [
      'Tempranillo：中深寶石紅，皮革煙燻草本，陳年後椰子香草（美國桶），是盲品西班牙的起點',
      'Garnacha：顏色較淡，草莓白胡椒甘草，高酒精低酸，圓潤',
      'Monastrell：極深紫黑，黑果巧克力墨汁，豐滿高酒精',
      'Mencía：花香（紫羅蘭）+ 鉛筆礦石，低單寧高酸，輕盈如 Pinot Noir',
      'Bobal：極深色 + 天然高酸，是與 Monastrell 的關鍵區分點',
    ],
  },
]

const S4M1L3_slides = [
  {
    type: 'cover',
    icon: '🌿',
    gradient: 'linear-gradient(135deg, #1a5276, #117a65)',
    title: '白品種與氧化風格識別',
    subtitle: 'Level 4 · 盲品西班牙白酒與 Sherry',
    points: [
      { icon: '🍋', label: 'Albariño vs Verdejo', text: '同為清爽高酸，關鍵差異：鹽漬礦石 vs 草本苦杏仁' },
      { icon: '🍯', label: 'Godello', text: '豐滿油脂感、礦石骨架，最像 Burgundy Chardonnay 的西班牙白酒' },
      { icon: '🥃', label: '氧化風格（Sherry）', text: '琥珀色澤、乳木果杏仁堅果，與清爽白酒完全不同維度' },
    ],
  },
  {
    type: 'compare',
    title: '西班牙主要白品種盲品對比',
    items: [
      {
        icon: '🌊',
        label: 'Albariño（Rías Baixas）',
        desc: '顏色：淡檸檬/輕微綠色調 / 香氣：白桃、柑橘皮、橙花、海鹽礦石、輕微杏仁 / 口感：高酸、中等酒體、鹽漬尾韻。關鍵線索：海洋礦石 + 鹽感，像是「用口感聞到大西洋」',
        color: '#3498db',
      },
      {
        icon: '🌿',
        label: 'Verdejo（Rueda）',
        desc: '顏色：淡金色 / 香氣：青草、白桃、茴香、接骨木花、苦杏仁尾韻 / 口感：中高酸、中等酒體。關鍵線索：草本（茴香）+ 苦杏仁尾韻，比 Albariño 更「陸地感」',
        color: '#27ae60',
      },
      {
        icon: '🍯',
        label: 'Godello（Valdeorras）',
        desc: '顏色：中等金色（較 Albariño 深） / 香氣：白桃、杏子、蜂蜜、白花、蜂蠟 / 口感：豐滿圓潤帶油脂感、中高酸。關鍵線索：豐厚質地 + 礦石骨架，是西班牙最接近 Meursault 的白酒',
        color: '#e67e22',
      },
      {
        icon: '⚪',
        label: 'Viura / Macabeo（Rioja Blanco 陳年）',
        desc: '陳年 Rioja Blanco（美國桶）：顏色深金色 / 香氣：烤榛子、香草、蜂蜜、蜂蠟、烘烤感 / 口感：豐滿油潤、低酸（桶陳降酸）。是最獨特的西班牙白酒風格之一',
        color: '#f1c40f',
      },
    ],
  },
  {
    type: 'content',
    icon: '🥃',
    title: '氧化風格識別：Sherry 盲品線索',
    html: `
      <p>Sherry 在盲品中是「完全不同維度」的存在，關鍵在於<strong>迅速排除一般白酒可能性</strong>。</p>
      <h4>🎯 氧化風格的感官線索</h4>
      <div style="display:flex;flex-direction:column;gap:9px;margin-top:8px">
        <div style="background:#fef9e7;border-left:4px solid #f1c40f;padding:10px;border-radius:0 10px 10px 0">
          <strong>外觀線索</strong><br/>
          顏色深金色至琥珀色（Fino/Manzanilla 例外：淡檸檬）<br/>
          Oloroso/Amontillado：深琥珀棕色，是最直接的視覺線索
        </div>
        <div style="background:#fde8d8;border-left:4px solid #e67e22;padding:10px;border-radius:0 10px 10px 0">
          <strong>香氣線索</strong><br/>
          Fino：鹹杏仁、乾麥草、青蘋果、酵母 → 生物熟成特徵<br/>
          Amontillado：榛子、太妃糖、蜂蜜、木質 → 雙重熟成<br/>
          Oloroso：核桃、皮革、無花果乾 → 純氧化<br/>
          PX：棗蜜漿、巧克力糖漿、無花果乾（可聞到「極甜」）
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #27ae60;padding:10px;border-radius:0 10px 10px 0">
          <strong>口感線索</strong><br/>
          酒精感明顯（15-22%）→ 加強型葡萄酒<br/>
          Fino：干型但有鹹感和酵母感<br/>
          PX：極甜濃稠，幾乎像糖漿
        </div>
      </div>
    `,
  },
  {
    type: 'quiz',
    question: '盲品一杯白酒，特徵如下：豐滿油脂質地、白桃杏子蜂蜜香氣、礦石骨架、中高酸不失清新。最可能的品種和產區是？',
    options: [
      'Albariño — Rías Baixas（大西洋鹽礦石）',
      'Verdejo — Rueda（草本苦杏仁）',
      'Godello — Valdeorras（豐滿礦石如 Meursault 風格）',
      'Viura（陳年 Rioja Blanco）— 烤榛子香草低酸豐潤',
    ],
    answer: 2,
    explanation: 'Godello 盲品的最大特徵是「豐滿圓潤的油脂質地」結合「礦石骨架和中高酸」，同時帶有白桃、杏子、蜂蜜白花香氣。這種豐厚而不失清爽的特質，讓人聯想到 Burgundy Meursault，是 Godello 與 Albariño（海鹽鮮）和 Verdejo（草本苦）最明顯的區分點。',
  },
  {
    type: 'summary',
    message: '白品種與氧化風格識別學習完成！',
    keyPoints: [
      'Albariño：海鹽礦石 + 鹽感，像是「口中的大西洋」',
      'Verdejo：草本茴香 + 苦杏仁尾韻，更「陸地感」',
      'Godello：豐滿油脂 + 礦石骨架，西班牙最接近 Meursault 的白酒',
      'Sherry 識別：酒精明顯 + 顏色深琥珀（Oloroso）或鹹杏仁酵母感（Fino）',
    ],
  },
]

const S4M1L4_slides = [
  {
    type: 'cover',
    icon: '🗺️',
    gradient: 'linear-gradient(135deg, #1a5276, #6c3483)',
    title: '產區識別：土壤・氣候・釀造的線索',
    subtitle: 'Level 4 · 從酒杯推斷產地',
    points: [
      { icon: '🪨', label: '土壤讀取', text: 'Llicorella 板岩帶礦石煙燻，Albariza 白堊帶鹹鮮，火山砂礫帶煙燻彈性' },
      { icon: '🌡️', label: '氣候讀取', text: '高海拔高酸、大西洋清爽花香、地中海濃縮豐滿，各有其風格語言' },
      { icon: '🪵', label: '釀造讀取', text: '美國桶椰子香草＋磚紅色 → 傳統 Rioja；法國桶深紫濃縮 → 現代派' },
    ],
  },
  {
    type: 'map',
    title: '四大產地土壤 × 地理對照',
    description: 'Rioja（石灰黏土）vs Ribera del Duero（花崗岩高原）vs Priorat（板岩）vs Rías Baixas（花崗岩海岸）——盲品地理推斷的空間基礎',
    mapRegion: 'all',
    classificationColors: true,
  },

  {
    type: 'content',
    icon: '🪨',
    title: '土壤在酒杯中的語言',
    html: `
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:6px">
        <div style="background:#ecf0f1;border-left:4px solid #2c3e50;padding:12px;border-radius:0 10px 10px 0">
          <strong>⬛ Llicorella 板岩（Priorat）</strong><br/>
          感官：煙燻、礦石、黑果濃縮、「板岩砂礫」感。酒體豐滿，尾韻帶礦石鹹感。是西班牙最易識別的土壤風格之一。
        </div>
        <div style="background:#fdfefe;border-left:4px solid #bdc3c7;padding:12px;border-radius:0 10px 10px 0">
          <strong>⬜ Albariza 白堊土（Jerez / Rías Baixas 花崗岩）</strong><br/>
          Albariza（白堊）：Fino/Sherry 的鹹鮮礦石感，保水特性讓乾燥安達盧西亞葡萄樹存活。<br/>
          花崗岩（加利西亞）：酸性低養分，Albariño 的「大西洋鹽礦石」感之來源。
        </div>
        <div style="background:#fdebd0;border-left:4px solid #e67e22;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌋 火山砂礫 Picon（Canarias）</strong><br/>
          感官：獨特煙燻、煙火、彈性礦石感（Volcanic Minerality）。顏色通常較淡（Listán Negro），但風味深邃，是最容易識別的「非傳統」西班牙風味。
        </div>
        <div style="background:#e9f7ef;border-left:4px solid #27ae60;padding:12px;border-radius:0 10px 10px 0">
          <strong>🟤 石灰岩 / 黏土（Ribera del Duero）</strong><br/>
          礫石黏土：接地氣的泥土大地感，配合梅塞塔高原低溫，讓 Tempranillo（Tinto Fino）展現更飽滿的黑果和更強的礦石結構。
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: '氣候 + 釀造在酒杯中的語言',
    items: [
      { icon: '🏔️', label: '高海拔（Ribera del Duero / Bierzo）', desc: '日夜溫差大 → 高酸 + 濃縮果味並存。線索：果味飽滿但酸度清晰，不像炎熱產區的軟塌感', color: '#3498db' },
      { icon: '🌊', label: '大西洋（加利西亞 / Navarra 北部）', desc: '涼爽多雲 → 高酸、花香突出、酒體輕盈。Albariño 的海洋感、Mencía 的花香均來自此氣候語言', color: '#2980b9' },
      { icon: '☀️', label: '地中海（Priorat / Jumilla / Jerez）', desc: '炎熱乾燥 → 高酒精、豐滿低酸、果味濃縮。Monastrell 的黑果漿、Sherry 的高酒精均是地中海高溫的表達', color: '#e67e22' },
      { icon: '🪵', label: '釀造：傳統 vs 現代（Rioja）', desc: '磚紅色 + 椰子香草皮革 + 輕盈口感 → 美國桶長期陳年（傳統）。深紫 + 黑果咖啡 + 豐滿高酒精 → 法國新桶短期（現代）', color: '#c0392b' },
    ],
  },
  {
    type: 'quiz',
    question: '盲品一杯紅酒：深寶石紅、黑果濃縮、煙燻礦石、板岩感、豐滿飽滿、高酒精，最可能來自哪個產區？',
    options: ['Rioja（傳統 Tempranillo）', 'Bierzo（Mencía 老藤）', 'Priorat（Garnacha / Carignan on Llicorella）', 'Rías Baixas（老藤 Albariño）'],
    answer: 2,
    explanation: '「黑果濃縮 + 煙燻礦石 + 板岩感 + 豐滿高酒精」是 Priorat（DOCa）的標誌性組合。Llicorella 板岩土壤賦予獨特的礦石煙燻感，老藤 Garnacha 和 Carignan 的低產濃縮提供黑果強度，地中海高溫創造豐滿高酒精。',
  },
  {
    type: 'summary',
    message: '產區識別學習完成！',
    keyPoints: [
      '板岩 Llicorella（Priorat）：礦石煙燻 + 黑果濃縮，最易識別的土壤語言',
      '大西洋氣候（加利西亞）：高酸 + 花香 + 鹽礦石，涼爽輕盈',
      '地中海高溫（Jumilla / Priorat）：高酒精 + 豐滿 + 低酸',
      '傳統 Rioja 釀造：磚紅 + 椰子香草 = 美國桶長期陳年的確定識別',
    ],
  },
]

// ── S4M2：年份評鑑指南 ───────────────────────────────────────

const S4M2L1_slides = [
  {
    type: 'cover',
    icon: '📅',
    gradient: 'linear-gradient(135deg, #1a5276, #c0392b)',
    title: '2005–2024 主要產區年份評比',
    subtitle: 'Level 4 · 大師必備的年份知識',
    points: [
      { icon: '🏆', label: '滿分年份', text: 'Rioja 2010、Ribera del Duero 2012、Priorat 2016 是近代最被稱頌的三個年份' },
      { icon: '❄️', label: '認識失敗年份', text: '了解問題年份同樣重要：2013 低溫潮濕、2017 春霜、2019 極熱' },
      { icon: '🔄', label: '年份背後的故事', text: '氣候事件（霜害、熱浪、冰雹）如何直接塑造葡萄酒風格' },
    ],
  },
  {
    type: 'map',
    title: 'Rioja & Ribera del Duero 地理對照',
    description: '兩大頂級紅酒產區的位置關係——Rioja（埃布羅河谷，東西走向）與 Ribera del Duero（杜羅河高原，海拔 850m）',
    mapRegion: 'castilla-leon',
    geojsonUrl: '/spain/geojson/appellations/ribera-del-duero.geojson',
  },

  {
    type: 'content',
    icon: '🍷',
    title: 'Rioja 近代重要年份（2005–2024）',
    html: `
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
        <div style="background:#e9f7ef;border-left:4px solid #27ae60;padding:10px;border-radius:0 10px 10px 0">
          <strong>⭐⭐⭐⭐⭐ 優秀年份</strong><br/>
          <strong>2010</strong>：普遍認為 Rioja 21 世紀最偉大年份。夏季炎熱均衡、無霜、完美成熟。Gran Reserva 仍需陳年。<br/>
          <strong>2016</strong>：優雅均衡，酸度出色，比 2010 更早適飲，受評家廣泛好評。<br/>
          <strong>2022</strong>：乾熱夏季，集中度高，是近年評分最高的年份之一。
        </div>
        <div style="background:#eaf4fb;border-left:4px solid #2980b9;padding:10px;border-radius:0 10px 10px 0">
          <strong>⭐⭐⭐⭐ 良好年份</strong><br/>
          <strong>2005</strong>：深濃豐滿，高評分，早期非常受追捧，現多已適飲。<br/>
          <strong>2012</strong>：早熟型，豐滿果味。<strong>2018</strong>：平衡優雅，性價比高。<br/>
          <strong>2020</strong>：涼爽優雅，Crianza 和 Reserva 現在非常好喝。
        </div>
        <div style="background:#fce8e6;border-left:4px solid #c0392b;padding:10px;border-radius:0 10px 10px 0">
          <strong>⭐⭐⭐ 普通或問題年份</strong><br/>
          <strong>2013</strong>：低溫潮濕，黴菌壓力大，成熟度不足，Gran Reserva 較少見。<br/>
          <strong>2017</strong>：4 月晚霜（Heladas）摧毀 30-50% 的花芽，產量極低但存活果實品質尚可。<br/>
          <strong>2019</strong>：8 月熱浪（55°C 土壤溫度），部分地區過熟，但高海拔款表現相對好。
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: 'Ribera del Duero vs Priorat 近代頂級年份',
    items: [
      {
        icon: '🏰',
        label: 'Ribera del Duero 頂級年份',
        desc: '★★★★★：2012（被稱為「完美年份」，均衡濃縮）、2016（優雅酸度）、2022（強勁集中）/ ★★★★：2005、2009、2018 / 需注意：2017 晚霜（50% 產量損失）、2019 熱浪導致部分過熟',
        color: '#c0392b',
      },
      {
        icon: '⬛',
        label: 'Priorat 頂級年份',
        desc: '★★★★★：2016（最佳平衡年份，罕見優雅）、2015（豐滿集中）/ ★★★★：2012、2017（低產但集中）、2021 / Priorat 的年份差異比 Rioja 小，因為 Llicorella 土壤的極端排水特性讓葡萄樹更耐受氣候波動',
        color: '#2c3e50',
      },
    ],
  },
  {
    type: 'quiz',
    question: '關於 Rioja 的年份，以下哪個敘述是正確的？',
    options: [
      '2013 年被认為是 Rioja 21 世紀最偉大的年份',
      '2010 年被認為是 Rioja 21 世紀最偉大年份，夏季均衡炎熱、完美成熟',
      '2017 年因熱浪使產量大增，品質也因此提升',
      '2019 年春霜摧毀 30-50% 花芽，是主要產量問題年份',
    ],
    answer: 1,
    explanation: '2010 年被普遍認為是 Rioja 在 21 世紀迄今最偉大的年份，夏季均衡炎熱、完美成熟，沒有極端事件干擾，Gran Reserva 仍有極長的陳年潛力。2017 年是「春霜」問題（不是熱浪），2019 年才是熱浪問題。',
  },
  {
    type: 'summary',
    message: '年份評比學習完成！',
    keyPoints: [
      'Rioja 21 世紀頂峰：2010（最偉大）、2016（優雅輕熟）、2022（集中強勁）',
      'Ribera del Duero 頂峰：2012（「完美年份」）、2016',
      '問題年份：2013（低溫潮濕）、2017（4 月春霜）、2019（8 月熱浪）',
      'Priorat 年份差異比 Rioja 小，Llicorella 土壤讓葡萄樹有額外耐氣候波動能力',
    ],
  },
]

const S4M2L2_slides = [
  {
    type: 'cover',
    icon: '🌡️',
    gradient: 'linear-gradient(135deg, #c0392b, #e67e22)',
    title: '氣候變遷對西班牙葡萄酒的深遠影響',
    subtitle: 'Level 4 · 葡萄酒世界正在改變',
    points: [
      { icon: '🌡️', label: '溫度上升', text: '過去 50 年西班牙年均溫升高 1.5-2°C，採收期提早 2-3 週' },
      { icon: '⏫', label: '高海拔遷移', text: '葡萄園向高海拔遷移是各大產區的現實應對策略' },
      { icon: '🍇', label: '品種重評', text: '耐熱品種（Bobal、Monastrell）重獲重視；Tempranillo 在南部受壓' },
    ],
  },
  {
    type: 'content',
    icon: '📊',
    title: '數據：氣候變遷已改變了什麼',
    html: `
      <h4>📊 可測量的變化</h4>
      <div style="display:flex;flex-direction:column;gap:9px;margin-top:8px">
        <div style="background:#fce8e6;border-left:4px solid #c0392b;padding:11px;border-radius:0 10px 10px 0">
          <strong>採收期提早 2-3 週</strong><br/>
          1970 年代 Rioja 一般在 10 月採收，現在 8 月底-9 月初已開始。更早採收意味著果實在夜間涼爽尚未完全成熟時摘下，有時導致<strong>更高糖分、更低自然酸度</strong>。
        </div>
        <div style="background:#fff3e0;border-left:4px solid #e67e22;padding:11px;border-radius:0 10px 10px 0">
          <strong>酒精度上升</strong><br/>
          1980 年代 Rioja 平均酒精 12-12.5%→ 現在通常 13.5-15%。高糖分葡萄釀出高酒精，挑戰了傳統「輕盈優雅 Rioja」的風格定義。
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #27ae60;padding:11px;border-radius:0 10px 10px 0">
          <strong>乾旱加劇</strong><br/>
          梅塞塔（Meseta）高原年雨量在部分地區已下降 20-30%。Ribera del Duero 和 La Mancha 的部分葡萄園已開始試驗灌溉（西班牙長期禁止，但氣候壓力促使法規鬆綁）。
        </div>
        <div style="background:#eaf4fb;border-left:4px solid #2980b9;padding:11px;border-radius:0 10px 10px 0">
          <strong>產區界限重塑</strong><br/>
          加利西亞（Galicia）白酒產區因氣候溫暖成為「更大贏家」；傳統南部紅酒產區（Jumilla、La Mancha 低海拔區）面臨更大挑戰。
        </div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '🔭',
    title: '應對策略：西班牙葡萄酒產業的回應',
    html: `
      <h4>🏔️ 高海拔遷移</h4>
      <p>許多酒莊已將新葡萄園向海拔更高的地區遷移，每上升 100 公尺溫度降低約 0.6°C，保留自然酸度。Rioja Alta 的部分新園已種在 700-800 公尺高度。</p>
      <h4>🌡️ 採收時間的工藝調整</h4>
      <ul>
        <li><strong>分批採收（Green Harvest）</strong>：提早疏果，降低每株產量，讓剩餘果實保留更長成熟期</li>
        <li><strong>夜間採收</strong>：避免白天高溫導致採摘後的葡萄過快氧化，保持清爽感</li>
        <li><strong>降低桶陳溫度</strong>：在地下 Bodega 控溫環境中延緩熟成</li>
      </ul>
      <h4>🍇 品種多元化策略</h4>
      <p>耐熱耐旱「原住民品種」重新受到重視：</p>
      <ul>
        <li><strong>Bobal</strong>：天然高酸耐熱，在 Utiel-Requena 高海拔表現更佳</li>
        <li><strong>Monastrell</strong>：Jumilla 的骨幹品種，已適應極端乾旱</li>
        <li><strong>Palomino / Listán Negro</strong>：加那利島的品種，耐受高溫低水分</li>
        <li>同時也有試驗引入更耐熱的混合品種（如 Cabos Sauvinhos、Touriga Nacional）</li>
      </ul>
    `,
  },
  {
    type: 'quiz',
    question: '西班牙葡萄酒產業應對氣候變遷的主要策略之一是什麼？',
    options: [
      '停止種植所有紅品種，全面轉向白品種種植',
      '向高海拔地區遷移葡萄園，並重新重視耐熱耐旱的本土品種',
      '全面採用基因改造葡萄樹抵抗高溫',
      '增加橡木桶使用量以掩蓋氣候變遷帶來的風格影響',
    ],
    answer: 1,
    explanation: '西班牙應對氣候變遷的核心策略是：① 向更高海拔遷移葡萄園（每 100 公尺降溫 0.6°C）② 重新重視本土耐熱耐旱品種（Bobal、Monastrell、Listán Negro），這些品種已在西班牙酷熱環境中適應千年，是天然的氣候緩衝。',
  },
  {
    type: 'summary',
    message: '氣候變遷影響學習完成！',
    keyPoints: [
      '採收期提早 2-3 週，酒精度從 12% 升至 13.5-15%',
      '高海拔遷移：每 100 公尺降溫 0.6°C，保留自然酸度',
      '耐熱本土品種重獲重視：Bobal、Monastrell、Listán Negro',
      '加利西亞受益（更溫暖的夏季）；南部低海拔產區承壓最大',
    ],
  },
]

const S4M2L3_slides = [
  {
    type: 'cover',
    icon: '⏰',
    gradient: 'linear-gradient(135deg, #1a5276, #8e44ad)',
    title: '最佳適飲期：何時開瓶才完美？',
    subtitle: 'Level 4 · 侍酒師與收藏家的核心決策',
    points: [
      { icon: '🍷', label: 'Rioja Gran Reserva', text: '上市即已陳年，但頂級款 2010 等大年仍建議繼續窖藏至 2030+' },
      { icon: '🥂', label: '白酒與 Cava', text: '多數西班牙白酒 2-3 年內飲用最佳；頂級 Godello 可陳年 8-12 年' },
      { icon: '🥃', label: 'Sherry', text: '開瓶後 Fino/Manzanilla 僅 1-2 週；Oloroso/PX 數月甚至更長' },
    ],
  },
  {
    type: 'compare',
    title: '各類西班牙葡萄酒最佳適飲期指南',
    items: [
      {
        icon: '❤️',
        label: 'Rioja 紅酒',
        desc: 'Joven / Crianza：上市後 2-5 年飲用 / Reserva：上市後 3-8 年 / Gran Reserva（一般年份）：上市後 5-15 年 / Gran Reserva（如 2010 大年 Marqués de Murrieta / Muga）：仍可窖藏至 2030-2040',
        color: '#c0392b',
      },
      {
        icon: '⬛',
        label: 'Ribera del Duero 頂級紅酒',
        desc: 'Vega Sicilia Único：最低陳年 10 年後開始，頂級年份 30+ 年。Pingus：8-25 年。Pesquera Reserva：5-12 年。「越頂級越需要耐心」是 Duero 的鐵則',
        color: '#2c3e50',
      },
      {
        icon: '🌊',
        label: '加利西亞白酒',
        desc: 'Albariño：1-3 年最佳，極少數頂級款可 6-8 年。Godello（Valdeorras / Ribeira Sacra 桶陳款）：4-10 年可展現更複雜礦石蜂蜜感。陳年 Godello 是次生酚類化合物的豐富演化',
        color: '#3498db',
      },
      {
        icon: '🥃',
        label: 'Sherry',
        desc: 'Fino / Manzanilla：開瓶後 1-2 週（需冷藏），買入後盡快飲用 / Amontillado / Oloroso：開瓶後數週至數月仍可飲用 / PX：幾乎無限期（高糖高酒精保存），窖藏 50+ 年 PX 仍然出色',
        color: '#e67e22',
      },
    ],
  },
  {
    type: 'quiz',
    question: '一瓶 2010 年 Rioja Gran Reserva（頂級年份），2025 年的現在距釀造已 15 年，以下哪個建議最為正確？',
    options: [
      '應立即飲用，Gran Reserva 已全面進入適飲期，再放只會退步',
      '仍可繼續窖藏，2010 是 Rioja 21 世紀最偉大年份，頂級款預計 2030-2040 年才達到完整巔峰',
      '2010 Gran Reserva 已完全過了適飲期，應該已經退步',
      'Gran Reserva 沒有陳年潛力，應在上市時立即飲用',
    ],
    answer: 1,
    explanation: '2010 Rioja 是 21 世紀最受稱頌的年份，頂級酒莊如 Muga Prado Enea、Marqués de Murrieta Castillo Ygay 等的 2010 Gran Reserva，業界普遍預測仍處於發展期，最佳適飲窗口在 2028-2045 年。窖藏良好的情況下，仍可耐心等待。',
  },
  {
    type: 'summary',
    message: '最佳適飲期學習完成！',
    keyPoints: [
      'Rioja Gran Reserva 大年（2010）：仍可窖藏至 2030-2040',
      'Vega Sicilia Único：最低 10 年後開始，頂級年份 30 年都不為過',
      'Albariño：1-3 年最佳；Godello 桶陳款：4-10 年展現複雜礦石',
      'Fino/Manzanilla：開瓶後僅 1-2 週（最脆弱的葡萄酒！）；PX：幾乎無限期',
    ],
  },
]

// ── S4M3：頂級酒莊解析 ──────────────────────────────────────

const S4M3L1_slides = [
  {
    type: 'cover',
    icon: '👑',
    gradient: 'linear-gradient(135deg, #1a1a2e, #c0392b)',
    title: 'Vega Sicilia & Pingus',
    subtitle: 'Level 4 · Ribera del Duero 的兩大傳奇',
    points: [
      { icon: '🏰', label: 'Vega Sicilia', text: '西班牙最古老的精品酒莊（1864 年），Único 是西班牙最具象徵意義的頂級紅酒' },
      { icon: '⬛', label: 'Pingus', text: '1995 年丹麥釀酒師 Peter Sisseck 創立，迅速成為全球最難買到的頂級酒之一' },
      { icon: '🏆', label: '共同點', text: '兩者均代表 Ribera del Duero 的巔峰，但哲學截然不同' },
    ],
  },
  {
    type: 'map',
    title: 'Ribera del Duero 頂級名莊地帶',
    mapRegion: 'castilla-leon',
    geojsonUrl: '/spain/geojson/appellations/ribera-del-duero.geojson',
    description: 'Vega Sicilia・Pingus 的所在地，Burgos 省沿杜羅河的黃金地帶。',
  },
  {
    type: 'compare',
    title: 'Vega Sicilia vs Pingus 哲學對比',
    items: [
      {
        icon: '🏰',
        label: 'Vega Sicilia（成立 1864 年）',
        desc: '旗艦：Único（Tinto Fino + Cabernet Sauvignon 混調），上市前陳年 10 年以上。哲學：西班牙 + 波爾多哲學的融合，傳統長期桶陳（美/法/中性橡木複雜組合）。價格：Único 每瓶約 300-500 歐元，Valbuena 5° 約 100-150 歐元',
        color: '#c0392b',
      },
      {
        icon: '⬛',
        label: 'Pingus（成立 1995 年）',
        desc: '丹麥釀酒師 Peter Sisseck，一個人一個酒莊的微型哲學。100% Tinto Fino（Tempranillo）老藤（70-100 年）。生物動力農法，低介入釀造。100% 法國新桶，風格更接近現代 DRC 哲學。價格：Pingus 每瓶 800-1500 歐元（二手市場），Flor de Pingus 入門款 50-80 歐元',
        color: '#2c3e50',
      },
    ],
  },
  {
    type: 'content',
    icon: '📜',
    title: 'Vega Sicilia Único：深入解析',
    html: `
      <h4>🍷 混調比例（因年份而異）</h4>
      <ul>
        <li>主要：<strong>Tinto Fino（Tempranillo）</strong>，通常 80-90%</li>
        <li>輔助：<strong>Cabernet Sauvignon</strong>（10-20%），增添結構和色素</li>
        <li>少量：Merlot 和 Malbec（歷史種植）</li>
      </ul>
      <h4>🪵 熟成方式（全球獨一無二）</h4>
      <p>Único 使用多種橡木桶交替熟成，總陳年時間可達 <strong>8-12 年（或更長）</strong>：</p>
      <ul>
        <li>新美國橡木小桶（225L）</li>
        <li>舊法國橡木桶</li>
        <li>中性大桶（Foudres）</li>
        <li>反覆在不同桶中轉移，讓每種橡木特性均勻整合</li>
      </ul>
      <h4>⏳ 不標示年份？</h4>
      <p>部分年份的 Único 以「Reserva Especial」方式推出，是多個年份的混合，目的是創造最接近完美的風格表達。</p>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Vega Sicilia Único（年份款）',
    image: '/spain/images/labels/ribera-del-duero/vega-sicilia-unico-1999.jpg',
    caption: 'Vega Sicilia「Único」1999——標準年份款，酒標記錄了 1927-1930 年間三次國際金牌的歷史榮譽。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Único Reserva Especial（多年份混調）',
    image: '/spain/images/labels/ribera-del-duero/vega-sicilia-unico-reserva-especial.jpg',
    caption: 'Vega Sicilia「Único」Reserva Especial——酒標明確標示混合 1991、1994、1999 三個年份的酒液，正是本文提到的「非年份混調」風格。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Alión（Vega Sicilia 的現代分支）',
    image: '/spain/images/labels/ribera-del-duero/alion-2003.jpg',
    caption: 'Bodegas y Viñedos Alión 2003——Vega Sicilia 於 1991 年創立的現代化姊妹酒莊，100% Tinto Fino，法國新桶，風格較 Único 更聚焦於果味與結構。',
  },
  {
    type: 'quiz',
    question: 'Vega Sicilia Único 的旗艦紅酒混調中，除了 Tinto Fino（Tempranillo）之外，主要的輔助品種是什麼？',
    options: ['Garnacha', 'Cabernet Sauvignon', 'Monastrell', 'Mencía'],
    answer: 1,
    explanation: 'Vega Sicilia Único 以 Tinto Fino（Tempranillo 在 Ribera del Duero 的稱呼）為主（80-90%），搭配 Cabernet Sauvignon（10-20%）增添波爾多式結構和色素穩定性，這種「西班牙本土品種 + 法國品種」的哲學是 Vega Sicilia 自 1864 年以來的傳統。',
  },

  {
    type: 'summary',
    message: 'Vega Sicilia & Pingus 學習完成！',
    keyPoints: [
      'Vega Sicilia（1864）：Único = Tinto Fino + Cabernet，上市前陳年 10+ 年，西班牙象徵',
      'Pingus（1995）：Peter Sisseck，100% 老藤 Tinto Fino，生物動力，法國新桶，DRC 哲學',
      'Vega Sicilia 哲學：傳統長期多桶複雜熟成；Pingus 哲學：低介入微型精品',
      '兩者均代表 Ribera del Duero 巔峰，但路子截然不同',
    ],
  },
]

const S4M3L2_slides = [
  {
    type: 'cover',
    icon: '⬛',
    gradient: 'linear-gradient(135deg, #1a1a2e, #c0392b)',
    title: 'Álvaro Palacios & Clos Mogador',
    subtitle: 'Level 4 · Priorat 復興的兩位靈魂人物',
    points: [
      { icon: '👑', label: 'Álvaro Palacios（L\'Ermita）', text: '西班牙最貴的酒之一，百年老藤 Garnacha，礦石優雅的極致表達' },
      { icon: '🌟', label: 'Clos Mogador（René Barbier）', text: '現代 Priorat 復興的共同發起人，宏偉架構與濃郁黑果' },
      { icon: '⬛', label: '1989 年的奇蹟', text: '五位釀酒師聯手在廢棄板岩梯田上重新種植，改寫西班牙葡萄酒史' },
    ],
  },
  {
    type: 'map',
    title: 'Priorat 復興的核心地帶',
    mapRegion: 'catalonia',
    geojsonUrl: '/spain/geojson/appellations/priorat.geojson',
    description: 'Alvaro Palacios 與 René Barbier 在 1989 年落腳的 Gratallops 村莊，Priorat 文藝復興的起點。',
  },
  {
    type: 'content',
    icon: '📜',
    title: '1989 年：Priorat 復興的起源',
    html: `
      <h4>🤝 五位先驅（Los Pioneros）</h4>
      <p>1989 年，五位來自不同背景的釀酒師，在幾乎廢棄的 Priorat 板岩梯田上聯手種植葡萄，各自創立酒莊：</p>
      <ul>
        <li><strong>René Barbier</strong>（法國人）→ Clos Mogador</li>
        <li><strong>Álvaro Palacios</strong>（西班牙，Rioja 家族出身）→ 首年在 Clos Dofí，後發展 L'Ermita</li>
        <li><strong>Carlos Pastrana</strong> → Clos de l'Obac（Costers del Siurana）</li>
        <li><strong>Marimar Torres</strong>（Torres 家族）→ 後來成立獨立酒莊</li>
        <li><strong>Daphne Glorian</strong> → Clos Erasmus</li>
      </ul>
      <p>五人在資金有限、設備簡陋的條件下，共同釀造最初幾個年份，一起裝瓶，創造了 Priorat 的「現代傳奇起源」。</p>
      <h4>🏆 Álvaro Palacios — L'Ermita</h4>
      <p>L'Ermita（意為「隱修院」）是一塊面積僅 5 公頃的小山丘地塊，種植著 1900 年前後種下的 <strong>100+ 年老藤 Garnacha</strong>。每瓶售價超過 600 歐元（好年份更高），是西班牙二手市場最受追捧的酒款之一。</p>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Clos Mogador',
    image: '/spain/images/labels/priorat/clos-mogador.png',
    caption: 'Clos Mogador（René Barbier，Gratallops）——酒標標示「Vi de Finca Qualificada」（VFQ，加泰羅尼亞最高單一莊園分級）與「Vinyes en Propietat: Isabelle i René Barbier」，正是本文提到 1989 年 Priorat 復興先驅的旗艦酒款。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：L\'Ermita',
    image: '/spain/images/labels/priorat/lermita.jpg',
    caption: 'Álvaro Palacios「L\'Ermita」（Priorat DOCa，Gran Vino de Guarda）——酒標標示「Velles Vinyes」（老藤），正是本文提到 5 公頃、1900 年前後種下的百年老藤 Garnacha 地塊，西班牙最貴的酒款之一。',
  },
  {
    type: 'quiz',
    question: '1989 年在 Priorat 共同發起現代葡萄酒復興的五位先驅之一，René Barbier 最終創立了哪個著名酒莊？',
    options: ['L\'Ermita', 'Clos Erasmus', 'Clos Mogador', 'Costers del Siurana'],
    answer: 2,
    explanation: 'René Barbier（法國出生）是 1989 年 Priorat 復興的首要推動者，他最終創立了 Clos Mogador 酒莊，以宏偉架構和豐富黑果著稱。Álvaro Palacios 創立了 L\'Ermita，Daphne Glorian 創立了 Clos Erasmus，Carlos Pastrana 創立的是 Clos de l\'Obac（Costers del Siurana）。',
  },

  {
    type: 'summary',
    message: 'Priorat 頂級酒莊學習完成！',
    keyPoints: [
      '1989 年五位先驅（Los Pioneros）聯手在廢棄板岩梯田重啟 Priorat',
      'René Barbier → Clos Mogador；Álvaro Palacios → L\'Ermita（百年老藤，西班牙最貴之一）',
      'L\'Ermita：5 公頃，1900 年前後老藤 Garnacha，600+ 歐元/瓶',
      '2009 年 Priorat 取得 DOCa 認證，是五位先驅哲學的最終認可',
    ],
  },
]

const S4M3L3_slides = [
  {
    type: 'cover',
    icon: '🏺',
    gradient: 'linear-gradient(135deg, #6e2f1a, #a04000)',
    title: 'Rioja 名莊三巨頭',
    subtitle: 'Level 4 · Muga · López de Heredia · Marqués de Murrieta',
    points: [
      { icon: '🏺', label: 'López de Heredia', text: '傳統主義的聖殿，連 Viña Tondonia 白酒都陳年 15+ 年，是 Rioja 的時光膠囊' },
      { icon: '🍷', label: 'Muga', text: '傳統哲學但有現代前瞻性，Prado Enea 是 Rioja 最偉大 Gran Reserva 之一' },
      { icon: '🌟', label: 'Marqués de Murrieta', text: '1847 年創立，最古老的 Rioja 名莊之一，Castillo Ygay 是 Rioja 最具陳年潛力的酒款之一' },
    ],
  },
  {
    type: 'map',
    title: 'Rioja 名莊核心地帶',
    mapRegion: 'rioja',
    description: 'Haro（Rioja Alta）的酒莊區是世界最密集的百年酒莊聚集地，也是傳統 Rioja 的象徵。',
  },
  {
    type: 'compare',
    title: 'Rioja 三大名莊哲學比較',
    items: [
      {
        icon: '🏺',
        label: 'López de Heredia（成立 1877 年）',
        desc: '西班牙最傳統的酒莊。所有酒款均長期美國/法國橡木桶 + 瓶陳。旗艦：Viña Tondonia Reserva（紅）and Blanco（白）。白酒陳年 10-15 年——世界上最獨特的老白酒之一。顏色：深金琥珀色，是氧化陳年的風格極致',
        color: '#a04000',
      },
      {
        icon: '🍷',
        label: 'Muga（成立 1932 年）',
        desc: '自有橡木桶廠，所有桶均自製（全球極少數酒莊之一）。旗艦：Prado Enea Gran Reserva——在業界公認為 Rioja 最精緻的 Gran Reserva 之一。Torre Muga 是現代旗艦（法國桶，媲美現代頂級 Rioja）',
        color: '#c0392b',
      },
      {
        icon: '🌟',
        label: 'Marqués de Murrieta（成立 1847 年）',
        desc: '最古老 Rioja 名莊之一，1847 年由 Luciano de Murrieta 創立，是奠定現代 Rioja 釀造風格的先驅之一。旗艦：Castillo Ygay Gran Reserva Especial（最佳年份才出廠，2009 年發布的是 1986 年份）。陳年潛力極強，2010 仍需等待。',
        color: '#e67e22',
      },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Viña Tondonia',
    image: '/spain/images/labels/rioja/lopez-de-heredia-tondonia-reserva-2004.jpg',
    caption: 'R. López de Heredia「Viña Tondonia」Reserva 2004（Haro，創立於 1877 年）——酒標仍保留 1877 年建廠時的古典設計，是傳統主義最純粹的象徵。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Viña Bosconia',
    image: '/spain/images/labels/rioja/lopez-de-heredia-bosconia-reserva-2006.jpg',
    caption: 'R. López de Heredia「Viña Bosconia」Reserva 2006——同一酒莊的另一單一葡萄園，風格比 Tondonia 更多果香與結構，展現 López de Heredia 對地塊差異的堅持。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Marqués de Murrieta Ygay',
    image: '/spain/images/labels/rioja/marques-de-murrieta-ygay-gran-reserva-1998.jpg',
    caption: 'Marqués de Murrieta「Ygay」Gran Reserva 1998——1847 年創立，是 Rioja 最古老名莊之一，Castillo Ygay 系列陳年潛力可達 30-50 年。',
  },
  {
    type: 'quiz',
    question: '以下哪個描述符合 López de Heredia 酒莊的特色？',
    options: [
      '採用 100% 法國新橡木桶短期陳年，以深濃果味著稱',
      '所有酒款長期美國/法國桶陳，白酒也陳年 10-15 年，顏色深金琥珀',
      '生物動力農法，低介入釀造，不使用任何橡木桶',
      '1990 年代創立，是引領 Rioja 現代化的新生代酒莊',
    ],
    answer: 1,
    explanation: 'López de Heredia（1877 年創立）是世界上最堅守傳統的酒莊之一，其 Viña Tondonia Blanco（白酒）在美國和法國橡木桶中陳年長達 10-15 年，呈現深金琥珀色，帶有蜂蜜、核果、香料的複雜氧化陳年特質，是 Rioja 傳統主義的最純粹象徵。',
  },

  {
    type: 'summary',
    message: 'Rioja 名莊學習完成！',
    keyPoints: [
      'López de Heredia（1877）：傳統主義聖殿，白酒陳年 10-15 年，深金琥珀，世界唯一',
      'Muga（1932）：自有橡木桶廠，Prado Enea Gran Reserva 是 Rioja 最精緻 Gran Reserva',
      'Marqués de Murrieta（1847）：最古老名莊，Castillo Ygay 陳年潛力 30-50 年',
      '三者均代表 Rioja 的不同傳統面向，是「傳統風格西班牙酒」的終極教材',
    ],
  },
]

const S4M3L4_slides = [
  {
    type: 'cover',
    icon: '🌊',
    gradient: 'linear-gradient(135deg, #1a5276, #117a65)',
    title: 'Galicia 頂級白酒名莊',
    subtitle: 'Level 4 · Pazo de Señoráns · Rectoral de Amandi',
    points: [
      { icon: '🌊', label: 'Pazo de Señoráns（Rías Baixas）', text: '加利西亞白酒的定義者，旗艦選粒款是 Albariño 的極致標竿' },
      { icon: '⬛', label: 'Rectoral de Amandi（Ribeira Sacra）', text: 'Mencía 梯田的精品代表，展現 Ribeira Sacra 陡坡板岩的極致個性' },
      { icon: '🍯', label: 'Guitián（Valdeorras Godello）', text: 'Godello 復興的旗手，讓世界認識加利西亞內陸白酒的無限潛力' },
    ],
  },
  {
    type: 'map',
    title: '加利西亞頂級白酒名莊地帶',
    mapRegion: 'galicia',
    description: 'Rías Baixas 的 Val do Salnés 子產區，是最集中的 Albariño 精品白酒產地。',
  },
  {
    type: 'compare',
    title: '加利西亞四大名莊',
    items: [
      {
        icon: '🌊',
        label: 'Pazo de Señoráns（Rías Baixas）',
        desc: '創立於 1989 年，Meis 鎮（Val do Salnés 核心）。旗艦：Pazo de Señoráns Selección de Añada（選粒年份款），只在最佳年份生產，是 Albariño 長期陳年（5-8 年）潛力的最佳證明。也曾獲評為西班牙最佳白酒之一。',
        color: '#3498db',
      },
      {
        icon: '⬛',
        label: 'Rectoral de Amandi（Ribeira Sacra）',
        desc: '陡峭板岩梯田，Mencía 老藤。旗艦 Mencía 展現優雅花香和礦石鮮酸，已成為 Ribeira Sacra 名片般的存在。名稱來自8世紀的 Amandi 修道院。',
        color: '#2c3e50',
      },
      {
        icon: '🍯',
        label: 'Guitián（Valdeorras Godello）',
        desc: 'Valdeorras 板岩 Godello 的旗手。桶陳款（Godello Sobre Lías）是讓全球葡萄酒界認識 Godello 陳年複雜度的先驅作品。豐滿礦石、蜂蜜、奶油，媲美優秀 Burgundy Chardonnay。',
        color: '#e67e22',
      },
      {
        icon: '🌹',
        label: 'Rías Baixas Lusco（Pontevedra）',
        desc: '較小眾但品質出眾的 Albariño 小農莊，其單一葡萄園款（Patio de Lusco）展現了 Val do Salnés 老藤 Albariño 的礦石深度和陳年潛力，是 Albariño 精品化的代表。',
        color: '#27ae60',
      },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Pazo Señorans Albariño',
    image: '/spain/images/labels/rias-baixas/pazo-senorans-albarino.jpg',
    caption: 'Pazo Señorans「Albariño」Vendimiado 2023（Val do Salnés，Rías Baixas D.O.）——本文提到 1989 年創立、加利西亞白酒定義者的基本款，與旗艦 Selección de Añada 為同一酒莊。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Rectoral de Amandi',
    image: '/spain/images/labels/ribeira-sacra/rectoral-de-amandi-mencia-barrica-2017.png',
    caption: 'Rectoral de Amandi「Mencía Barrica」2017，Edición Limitada（Manolo Arnoya，Ribeira Sacra）——桶陳版本展現本文提到的優雅花香與礦石鮮酸，是 Ribeira Sacra 陡坡板岩 Mencía 的名片酒款。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Guitián Godello Sobre Lías',
    image: '/spain/images/labels/valdeorras/guitian-godello-sobre-lias.jpg',
    caption: 'Guitián「Godello」Sobre Lías（Valdeorras Denominación de Origen）——本文提到讓全球認識 Godello 陳年複雜度的先驅桶陳款，正是酒標上「Sobre Lías」（酒泥陳年）字樣的由來。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Pazo de Lusco',
    image: '/spain/images/labels/rias-baixas/pazo-de-lusco-albarino.png',
    caption: 'Pazo de Lusco「Albariño」Crianza sobre Lías（Rías Baixas）——本文提到的 Lusco 酒莊（Pontevedra）入門款，與旗艦單一葡萄園 Patio de Lusco 同源，展現 Val do Salnés 老藤 Albariño 的礦石深度。',
  },
  {
    type: 'quiz',
    question: '「Guitián Godello 桶陳款（Sobre Lías）」被認為對加利西亞葡萄酒界有什麼重要意義？',
    options: [
      '它是第一個使用 Pergola 棚架種植系統的加利西亞酒莊',
      '它的桶陳 Godello 讓全球葡萄酒界認識了 Godello 的陳年複雜度潛力，是推廣 Valdeorras 的先驅',
      '它是第一個通過 EU 有機認證的加利西亞葡萄酒莊',
      '它首創了將 Mencía 和 Albariño 混釀的獨特風格',
    ],
    answer: 1,
    explanation: 'Guitián 的 Godello 桶陳款（Sobre Lías）是推動 Valdeorras 和整個加利西亞 Godello 走向精品市場的先驅作品，豐滿的礦石蜂蜜奶油風格讓業界開始認真對待 Godello 的陳年潛力，並將其與 Burgundy Chardonnay 相提並論。',
  },

  {
    type: 'summary',
    message: '加利西亞名莊學習完成！',
    keyPoints: [
      'Pazo de Señoráns：Rías Baixas 旗手，Selección de Añada 是 Albariño 陳年極致',
      'Rectoral de Amandi：Ribeira Sacra 陡坡板岩 Mencía，優雅花香礦石標竿',
      'Guitián：Valdeorras Godello 的全球推廣先驅，桶陳款媲美頂級 Burgundy 白酒',
      '加利西亞名莊共同特色：低介入、風土表達、對品種個性的尊重',
    ],
  },
]

// ── S4M4：侍酒師實務與收藏 ─────────────────────────────────

const S4M4L1_slides = [
  {
    type: 'cover',
    icon: '🍽️',
    gradient: 'linear-gradient(135deg, #1a1a2e, #2980b9)',
    title: '服務溫度・醒酒・侍酒禮儀',
    subtitle: 'Level 4 · 侍酒師的核心實務',
    points: [
      { icon: '🌡️', label: '服務溫度', text: '每種葡萄酒都有最適溫度範圍，差 5°C 就可能掩蓋風味' },
      { icon: '🍾', label: '醒酒策略', text: '年輕紅酒需要氧氣；老酒需要輕柔解包；Sherry 各有不同' },
      { icon: '📜', label: '侍酒禮儀', text: '開瓶程序、分酒次序、如何面對缺陷酒，侍酒師的專業形象' },
    ],
  },
  {
    type: 'compare',
    title: '西班牙各類型葡萄酒服務溫度指南',
    items: [
      { icon: '🌊', label: '清爽白酒 & 氣泡酒', desc: '● Albariño / Verdejo：8-10°C\n● Cava（一般款）：6-8°C\n● Cava Gran Reserva / Corpinnat：8-10°C（讓複雜香氣展開）\n● 太冰會封鎖香氣，太溫會顯得軟塌無生氣', color: '#3498db' },
      { icon: '🍷', label: '豐滿白酒', desc: '● Godello 桶陳款：12-14°C\n● 陳年 Rioja Blanco（López de Heredia）：14-16°C\n● Viura 陳年款需要更高溫才能展現豐滿質感', color: '#f1c40f' },
      { icon: '❤️', label: '輕盈/中等紅酒', desc: '● Mencía（Bierzo）：14-16°C\n● 年輕 Tempranillo Joven / Crianza：16-17°C\n● 輕盈紅酒偏涼可突顯花香和酸度清爽', color: '#e74c3c' },
      { icon: '🥃', label: '豐滿紅酒 & Sherry', desc: '● Rioja/Ribera Gran Reserva：17-18°C\n● Priorat / Monastrell：17-18°C（不可過高！）\n● Fino/Manzanilla：8-10°C（冷藏）\n● Amontillado：13-15°C；Oloroso/PX：16-18°C', color: '#8e44ad' },
    ],
  },
  {
    type: 'content',
    icon: '🍾',
    title: '醒酒策略：年份、風格決定方式',
    html: `
      <h4>🔴 需要大量醒酒（2小時以上）</h4>
      <ul>
        <li>年輕且單寧強的 Ribera del Duero（Tinto Fino 5-8 年）</li>
        <li>年輕 Priorat（Garnacha/Carignan 老藤，封閉期）</li>
        <li>Jumilla Monastrell 年輕款（黑果緊閉）</li>
      </ul>
      <h4>⚠️ 需要輕柔慢倒（老酒服務）</h4>
      <ul>
        <li>Rioja Gran Reserva 15+ 年、Vega Sicilia Único</li>
        <li>使用老酒醒酒瓶（Old Wine Decanter），避免長時間大量曝氧</li>
        <li>老酒的細緻香氣容易在太多氧氣中快速消散</li>
      </ul>
      <h4>🥂 不需要醒酒或僅短暫開瓶</h4>
      <ul>
        <li>Fino / Manzanilla Sherry：直接冰涼服務，不需醒酒</li>
        <li>清爽白酒（Albariño、Cava）：直接冰涼服務</li>
        <li>Rioja Joven / Crianza：開瓶靜置 15-30 分鐘足夠</li>
      </ul>
      <h4>❌ 發現缺陷酒（Corked Wine / TCA）如何處理</h4>
      <p>專業侍酒師的程序：<br/>
      ① 先自己試酒確認缺陷（不要讓客人先喝） → ② 告知客人今天這瓶有些問題 → ③ 迅速換一瓶，不要讓客人等待超過 5 分鐘 → ④ 向客人解釋 TCA 汙染（木塞菌）是隨機自然現象，與客人選擇無關</p>
    `,
  },
  {
    type: 'quiz',
    question: '為一桌客人服務一瓶 20 年的 Rioja Gran Reserva，以下哪個建議最正確？',
    options: [
      '至少提前 3 小時將酒放入大醒酒瓶讓其充分氧化',
      '使用老酒醒酒瓶輕柔慢倒，避免過多氧化，服務溫度 17-18°C',
      '直接從酒瓶倒出，不需要任何特殊處理',
      '放入冰桶降溫至 10°C 以保持新鮮感',
    ],
    answer: 1,
    explanation: '20 年以上的 Rioja Gran Reserva 屬於老酒，細緻的香氣在太多氧氣中會快速消散。正確做法是使用老酒醒酒瓶輕柔慢倒（過濾老沉澱），避免長時間大曝氧，服務溫度 17-18°C，讓客人在最好的狀態下享用。',
  },
  {
    type: 'summary',
    message: '侍酒師實務學習完成！',
    keyPoints: [
      '白酒 / Cava：6-10°C；豐滿白酒：12-16°C；Fino：8-10°C（冷藏！）',
      '輕盈紅酒：14-16°C；豐滿紅酒 / Gran Reserva：17-18°C',
      '年輕濃縮紅酒：大醒酒 2 小時以上；老酒：輕柔慢倒老酒瓶',
      '發現缺陷酒：先自己確認 → 告知客人 → 迅速換瓶，流程不能讓客人尷尬',
    ],
  },
]

const S4M4L2_slides = [
  {
    type: 'cover',
    icon: '📈',
    gradient: 'linear-gradient(135deg, #1a5276, #c0392b)',
    title: '西班牙酒收藏投資策略',
    subtitle: 'Level 4 · 哪些值得窖藏？',
    points: [
      { icon: '💰', label: '高性價比窖藏標的', text: 'Rioja Gran Reserva 頂級年份（性價比遠高於波爾多同品質）' },
      { icon: '🚀', label: '升值潛力最強', text: 'Pingus、L\'Ermita、Vega Sicilia Único 是西班牙葡萄酒投資最確定的標的' },
      { icon: '⚡', label: '新興投資機會', text: 'Bierzo 老藤 Mencía 和 Canarias 火山古藤酒款近年受到 Collectors 追捧' },
    ],
  },
  {
    type: 'compare',
    title: '西班牙葡萄酒收藏等級分類',
    items: [
      {
        icon: '👑',
        label: '頂級投資標的（First Growth 等級）',
        desc: 'Vega Sicilia Único（Ribera del Duero）：每年只出廠最佳年份，市場流通量極少，二手市場穩定升值。Pingus（Ribera del Duero）：年產量不足 3000 瓶，二手價 800-1500€/瓶。L\'Ermita by Álvaro Palacios（Priorat）：頂級年份 600-1000€/瓶，流動性好。',
        color: '#f1c40f',
      },
      {
        icon: '🏆',
        label: '優質性價比收藏（Rioja 頂級）',
        desc: 'Muga Prado Enea Gran Reserva（2010、2016）：40-80€，品質媲美 200€+ 的波爾多 Pauillac。Marqués de Murrieta Castillo Ygay Gran Reserva Especial：60-120€，特別是大年份。López de Heredia Viña Tondonia Gran Reserva：50-100€，是最被低估的西班牙頂級酒。',
        color: '#c0392b',
      },
      {
        icon: '✨',
        label: '新興高潛力標的',
        desc: 'Bierzo：Descendientes de J. Palacios（Las Lamas、La Faraona，100-300€）——每次 Parker 高分後立即售罄。Canarias：Envínate（Táganan 系列）——火山古藤，年產量極少，正在被國際收藏家快速發現。Galicia：Pazo de Señoráns Selección de Añada——嚴重低估的頂級 Albariño',
        color: '#27ae60',
      },
    ],
  },
  {
    type: 'quiz',
    question: '以下哪個西班牙酒款被認為是「性價比最高的頂級收藏」，其品質媲美數倍價格的波爾多名莊，卻長期被低估？',
    options: [
      'Vega Sicilia Único（市場價 300-500€）',
      'López de Heredia Viña Tondonia Gran Reserva（市場價 50-100€）',
      'Pingus（市場價 800-1500€）',
      'L\'Ermita（市場價 600-1000€）',
    ],
    answer: 1,
    explanation: 'López de Heredia Viña Tondonia Gran Reserva 在許多頂級盲品測試中媲美 3-5 倍價格的 Bordeaux 名莊，但因「西班牙」和「傳統風格」的標籤而長期在市場被低估。50-100 歐元的售價讓它成為西班牙葡萄酒收藏中最大的性價比秘密。',
  },
  {
    type: 'summary',
    message: '收藏投資策略學習完成！',
    keyPoints: [
      'Tier 1 投資：Vega Sicilia Único、Pingus、L\'Ermita——穩定升值，二手市場活躍',
      '高性價比窖藏：Muga Prado Enea、Castillo Ygay、López de Heredia Tondonia GR',
      '新興標的：Bierzo（Descendientes de J. Palacios）、Canarias（Envínate Táganan）',
      '大原則：頂級年份（2010/2012/2016） + 頂級酒莊 + 適當儲存條件 = 長期價值',
    ],
  },
]

// ── S4M5：大師評量 ───────────────────────────────────────────

const S4FinalExam_slides = [
  {
    type: 'cover',
    icon: '👑',
    gradient: 'linear-gradient(135deg, #1a1a2e, #f39c12)',
    title: 'Level 4 大師評量',
    subtitle: '盲品・年份・酒莊・侍酒師實務 · 最終挑戰',
    points: [
      { icon: '📋', label: '12 題大師測驗', text: '盲品識別、年份判斷、酒莊哲學、服務決策，全方位考核' },
      { icon: '✅', label: '通過標準', text: '答對 9 題以上即完成 Level 4，成為西班牙葡萄酒大師' },
      { icon: '🏆', label: '完成後', text: '恭喜，您已具備侍酒師級別的西班牙葡萄酒知識！' },
    ],
  },
  {
    type: 'quiz',
    question: '【盲品·紅酒】盲品特徵：顏色較淡、草莓果醬、白胡椒甘草、高酒精（14.5%）、低酸。最可能的品種是？',
    options: ['Tempranillo', 'Garnacha', 'Monastrell', 'Mencía'],
    answer: 1,
    explanation: 'Garnacha 盲品識別點：① 顏色淡（低色素）② 草莓/覆盆子 + 白胡椒 + 甘草 ③ 高酒精（14-16%）④ 低酸圓潤。這四個線索高度指向 Garnacha，特別是來自 Priorat、Navarra 或年輕 Rioja Garnacha 款。',
  },
  {
    type: 'quiz',
    question: '【盲品·白酒】盲品一杯白酒：豐滿油脂質地、白桃杏仁蜂蜜香氣、礦石骨架、中高酸、略帶蜂蠟感。最可能的品種和產區？',
    options: [
      'Albariño — Rías Baixas（大西洋鹽礦石）',
      'Verdejo — Rueda（草本苦杏仁）',
      'Godello — Valdeorras（豐滿礦石如 Burgundy Meursault）',
      'Viura — 陳年 Rioja Blanco（烤榛子蜂蠟低酸）',
    ],
    answer: 2,
    explanation: 'Godello 的核心盲品特徵：豐滿油脂質地 + 礦石骨架 + 蜂蜜杏子白花 + 中高酸，整體像 Burgundy Meursault。Albariño 是海鹽鮮感，Verdejo 是草本苦杏仁，陳年 Rioja Blanco 是深金色烤榛子低酸。',
  },
  {
    type: 'quiz',
    question: '【盲品·氧化風格】盲品一杯淡檸檬色的葡萄酒：鹹杏仁、乾麥草、青蘋果、酵母感、高酒精感（15%）、干型。最可能是什麼？',
    options: [
      '年輕 Albariño（Rías Baixas）',
      'Fino Sherry（Jerez，Flor 生物熟成）',
      'Verdejo（Rueda，草本清爽）',
      'Cava Brut（傳統法氣泡，有細緻氣泡感）',
    ],
    answer: 1,
    explanation: 'Fino Sherry 盲品線索：① 淡檸檬色（Flor 保護，不氧化）② 鹹杏仁（乙醛特徵）③ 乾麥草＋酵母感 ④ 高酒精（15%）⑤ 干型。這個組合幾乎確定是 Fino。如果顏色是深琥珀才是 Oloroso/Amontillado。',
  },
  {
    type: 'quiz',
    question: '【年份】以下哪個 Rioja 年份被業界公認為 21 世紀最偉大年份，大年份 Gran Reserva 在 2025 年仍可繼續窖藏？',
    options: ['2005 年', '2009 年', '2010 年', '2013 年'],
    answer: 2,
    explanation: '2010 Rioja 是業界公認 21 世紀迄今最偉大年份，夏季均衡炎熱、完美成熟、無極端天氣事件。頂級酒莊如 Muga Prado Enea、López de Heredia Viña Tondonia 的 2010 Gran Reserva 預測最佳適飲期在 2028-2040 年，現在仍是「值得等待」的狀態。',
  },
  {
    type: 'quiz',
    question: '【氣候變遷】西班牙葡萄酒業應對氣候變遷的哪項策略被普遍實施？',
    options: [
      '將所有葡萄園遷移至沿海地帶，利用海洋降溫',
      '向高海拔遷移葡萄園，並重新重視耐熱耐旱的本土品種（Bobal、Monastrell）',
      '大量引進澳洲和東非的抗旱葡萄品種',
      '減少葡萄酒生產，將農地轉為橄欖園',
    ],
    answer: 1,
    explanation: '西班牙的核心應對策略：① 向高海拔遷移（每 100 公尺降溫 0.6°C）② 重新重視耐熱耐旱本土品種（Bobal、Monastrell、Listán Negro）③ 採取夜間採收和分批採收等農業技術。高海拔+本土品種是最具成本效益的長期解決方案。',
  },
  {
    type: 'quiz',
    question: '【頂級酒莊】Vega Sicilia Único 的旗艦紅酒混調，除了主要的 Tinto Fino（Tempranillo）外，還使用哪個輔助品種？',
    options: ['Garnacha', 'Cabernet Sauvignon', 'Monastrell', 'Mencía'],
    answer: 1,
    explanation: 'Vega Sicilia Único 融合了「西班牙本土品種 + 法國品種」的獨特哲學，以 Tinto Fino（Tempranillo，80-90%）為主，輔以 Cabernet Sauvignon（10-20%）增添波爾多式架構和色素穩定性，是 1864 年創立以來的傳統配方。',
  },
  {
    type: 'quiz',
    question: '【頂級酒莊】López de Heredia 的 Viña Tondonia Blanco 最著名的獨特之處是什麼？',
    options: [
      '使用 100% 不鏽鋼桶釀造，是西班牙最清爽的白酒',
      '白酒在橡木桶中陳年長達 10-15 年，呈深金琥珀色，是全球最獨特的老白酒之一',
      '每年只用最冷夜間採收的葡萄釀造，香氣極為精緻',
      '使用 Palomino 品種，採用 Sherry 索雷拉系統陳年',
    ],
    answer: 1,
    explanation: 'López de Heredia 的 Viña Tondonia Blanco 是西班牙乃至全球最特別的白酒之一：在美國和法國橡木桶（加上後來的瓶陳）中總計陳年 10-15 年，深金琥珀色，帶有蜂蜜、核果、辛香料的複雜氧化陳年特質，是傳統 Rioja 白酒哲學的最純粹極致表達。',
  },
  {
    type: 'quiz',
    question: '【侍酒服務】客人點了一瓶 2010 年 Muga Prado Enea Gran Reserva，以下哪個服務決策最專業？',
    options: [
      '提前 3 小時放入大醒酒瓶讓其充分曝氧',
      '使用老酒醒酒瓶輕柔慢倒，服務溫度 17-18°C，避免長時間大量曝氧',
      '放入冰桶降至 12°C 飲用，保持清爽感',
      '直接開瓶立即倒入酒杯，不做任何醒酒處理',
    ],
    answer: 1,
    explanation: '2010 Muga Prado Enea Gran Reserva（2025 年才上市 15 年）屬於高端老酒。正確服務：① 在客人面前展示酒瓶 ② 使用老酒醒酒瓶輕柔慢倒（避免老沉澱進入酒杯）③ 服務溫度 17-18°C ④ 不要過度曝氧（老酒香氣在太多氧氣中快速消散）。',
  },
  {
    type: 'quiz',
    question: '【收藏策略】哪個西班牙酒款被認為是「性價比最被低估」的頂級窖藏標的，其品質在盲品中屢屢媲美數倍價格的波爾多名莊？',
    options: [
      'Vega Sicilia Único（300-500€/瓶）',
      'López de Heredia Viña Tondonia Gran Reserva（50-100€/瓶）',
      'Pingus（800-1500€/瓶）',
      'L\'Ermita by Álvaro Palacios（600-1000€/瓶）',
    ],
    answer: 1,
    explanation: 'López de Heredia Viña Tondonia Gran Reserva 在業界許多盲品測試中表現出媲美 3-5 倍價格的 Bordeaux 頂級名莊的複雜度和陳年潛力，但因「西班牙傳統風格」定位而長期被市場低估，50-100 歐元的價格是西班牙收藏界最大的性價比秘密。',
  },
  {
    type: 'quiz',
    question: '【Priorat 復興】1989 年 Priorat 現代復興中，「Clos Mogador」酒莊的創立者是誰？',
    options: ['Álvaro Palacios', 'René Barbier', 'Daphne Glorian', 'Peter Sisseck'],
    answer: 1,
    explanation: 'René Barbier（法國人）是 1989 年 Priorat 復興最早的推動者，他聯合其他四位釀酒師（Álvaro Palacios、Carlos Pastrana、Daphne Glorian 等）在廢棄板岩梯田上重新種植葡萄。René Barbier 最終創立了 Clos Mogador。Álvaro Palacios 創立了 L\'Ermita。',
  },
  {
    type: 'summary',
    icon: '👑',
    message: '🎓 恭喜！您已完成西班牙葡萄酒四個等級的全部課程，成為西班牙葡萄酒大師！',
    keyPoints: [
      '✅ Level 1：西班牙地理・分類制度・核心品種・Rioja 入門',
      '✅ Level 2：北部名產區・加利西亞・加泰羅尼亞・南部強勁產區',
      '✅ Level 3：橡木桶工藝・Cava・Sherry 深度・加強甜酒',
      '✅ Level 4：盲品技術・年份評鑑・頂級酒莊・侍酒師實務',
      '🏆 您現在具備了侍酒師級別的西班牙葡萄酒完整知識體系！',
      '👑 下一步：考取 WSET Level 3 或 Diploma，讓知識得到國際認證！',
    ],
  },
]

// ───────────────────────────────────────────────────────────────
//  Level 2 — 第零章：DOCa Rioja 深度探索
// ───────────────────────────────────────────────────────────────

const S2M0L1_slides = [
  {
    type: 'cover',
    icon: '🪨',
    gradient: 'linear-gradient(135deg, #7b241c, #c0392b)',
    title: 'Rioja 三子產區風土深析',
    subtitle: 'Level 2 · DOCa Rioja 深度 · 石灰岩・含鐵黏土・沖積土',
    points: [
      { icon: '🌲', label: 'Rioja Alta', text: '石灰質黏土主導，大西洋涼爽，77 市鎮・27,871 公頃，精緻陳年潛力' },
      { icon: '🏔️', label: 'Rioja Alavesa', text: '95% 石灰質黏土，Sierra Cantabria 屏障，18 市鎮・13,178 公頃，輕盈礦石' },
      { icon: '☀️', label: 'Rioja Oriental', text: '含鐵黏土+沖積土，地中海炎熱，49 市鎮・14,571 公頃，Garnacha 最精彩' },
    ],
  },
  {
    type: 'map',
    title: 'Rioja 三子產區地理分布',
    mapRegion: 'rioja',
    description: '由西向東跨越 100 公里，氣候從大西洋型逐漸轉為地中海型。北側 Sierra Cantabria 和南側 Sierra Demanda 兩大山脈，與埃布羅河共同塑造三種截然不同的風土環境。',
  },
  {
    type: 'content',
    icon: '🌲',
    title: 'Rioja Alta — 大西洋風格核心地帶',
    html: `
      <p><strong>Rioja Alta</strong> 是整個 DOCa 中面積最大、海拔最高的子產區，也是最接近大西洋氣候影響的地帶。</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">
        <div style="background:#fce8e6;border-radius:10px;padding:12px">
          <strong>📊 基礎數據</strong>
          <ul style="margin:6px 0 0;padding-left:16px;font-size:0.9rem">
            <li>77 個市鎮</li>
            <li>27,871 公頃葡萄園</li>
            <li>海拔 400–700 公尺</li>
            <li>年雨量 200–400 升</li>
            <li>夏季均溫 15–22°C</li>
          </ul>
        </div>
        <div style="background:#e8f5e9;border-radius:10px;padding:12px">
          <strong>🪨 三種土壤類型</strong>
          <ul style="margin:6px 0 0;padding-left:16px;font-size:0.9rem">
            <li><strong>石灰質黏土</strong>：Tempranillo 最佳土壤，高鈣賦予酒體骨架</li>
            <li><strong>含鐵黏土</strong>：產出酸度平衡、酒體中等的紅酒</li>
            <li><strong>沖積土</strong>：輕盈果香白酒和早飲型紅酒</li>
          </ul>
        </div>
      </div>
      <div style="background:#e3f2fd;border-left:4px solid #1565c0;padding:12px;border-radius:0 10px 10px 0;margin-top:10px">
        <strong>🍷 風格特色</strong>：大西洋與地中海氣候的過渡帶。較涼爽的高海拔地塊延遲成熟，保留天然酸度。Rioja Alta 是 Gran Reserva 陳年款最重要的來源地。代表小鎮：Haro（哈洛，Rioja 的酒之首都）、San Vicente de la Sonsierra
      </div>
      <div style="background:#fdf6e3;border-left:4px solid #f39c12;padding:12px;border-radius:0 10px 10px 0;margin-top:8px">
        <strong>🏰 世界遺產亮點</strong>：Haro 的「La Estación（車站區）」集中了 López de Heredia、CVNE、Muga、La Rioja Alta SA 等頂級傳統酒莊，是全球密度最高的百年酒莊集中地。San Millán de la Cogolla 修道院（UNESCO 世界遺產）收藏了西班牙語和巴斯克語最早的文字記錄。
      </div>
    `,
  },
  {
    type: 'content',
    icon: '🏔️',
    title: 'Rioja Alavesa — Sierra Cantabria 的庇護之地',
    html: `
      <p><strong>Rioja Alavesa</strong> 是三個子產區中面積最小的，卻因其獨特的石灰質白堊土壤和巴斯克文化色彩而最具個性。</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">
        <div style="background:#f3e8ff;border-radius:10px;padding:12px">
          <strong>📊 基礎數據</strong>
          <ul style="margin:6px 0 0;padding-left:16px;font-size:0.9rem">
            <li>18 個市鎮（最少）</li>
            <li>13,178 公頃（最小）</li>
            <li>95% 石灰質黏土</li>
            <li>年雨量 200–400 升</li>
            <li>夏季均溫 -3°C~15°C（年均）</li>
          </ul>
        </div>
        <div style="background:#e8f5e9;border-radius:10px;padding:12px">
          <strong>🏔️ 氣候特殊性</strong>
          <ul style="margin:6px 0 0;padding-left:16px;font-size:0.9rem">
            <li><strong>Foehn 效應</strong>：Sierra Cantabria 西坡截雨，東坡乾暖</li>
            <li>南向梯田葡萄園，充足日照</li>
            <li>大西洋氣候更濕涼（三者中最北）</li>
            <li>葡萄園規模小（梯田地塊）</li>
          </ul>
        </div>
      </div>
      <div style="background:#ede7f6;border-left:4px solid #7b1fa2;padding:12px;border-radius:0 10px 10px 0;margin-top:10px">
        <strong>🍷 風格特色</strong>：Alavesa 以石灰質白堊土為主（佔 95%），賦予酒款礦石感和骨架。整體風格比 Alta 更輕盈精緻，花香更細膩，適合年輕飲用。Sierra Cantabria 山脈的屏障是關鍵微氣候因素。<br/>
        <strong>主要市鎮</strong>：Laguardia（中世紀城牆保存完好的酒鎮）、Elciego（Marqués de Riscal 旗艦酒莊所在地）
      </div>
      <div style="background:#e3f2fd;border-left:4px solid #1565c0;padding:12px;border-radius:0 10px 10px 0;margin-top:8px">
        <strong>🏛️ 酒莊建築之旅</strong>：Rioja Alavesa 也是現代建築與葡萄酒文化結合的代表。Marqués de Riscal 由 Frank Gehry 設計，鈦金屬波浪屋頂標誌性外觀。Bodegas Ysios 由 Santiago Calatrava 設計，波浪形鋁制屋頂。Bodegas Darien 由 Jesús Marino Pascual 設計。
      </div>
    `,
  },
  {
    type: 'content',
    icon: '☀️',
    title: 'Rioja Oriental — 地中海型的溫暖新大陸',
    html: `
      <p><strong>Rioja Oriental</strong>（原名 Rioja Baja，2018 年正式更名）是 DOCa 中最東端、最炎熱、最具地中海特色的子產區。</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">
        <div style="background:#fff3e0;border-radius:10px;padding:12px">
          <strong>📊 基礎數據</strong>
          <ul style="margin:6px 0 0;padding-left:16px;font-size:0.9rem">
            <li>49 個市鎮</li>
            <li>14,571+ 公頃</li>
            <li>年雨量 200–400 升（較少）</li>
            <li>夏季氣溫可達 25°C 以上</li>
            <li>年均溫最高的子產區</li>
          </ul>
        </div>
        <div style="background:#fce8e6;border-radius:10px;padding:12px">
          <strong>🪨 兩大土壤類型</strong>
          <ul style="margin:6px 0 0;padding-left:16px;font-size:0.9rem">
            <li><strong>含鐵黏土</strong>：呈紅色，富含鐵質，釀出中等酒體紅酒</li>
            <li><strong>沖積土</strong>：河流沖積形成，透水性好，輕盈果香酒款</li>
          </ul>
        </div>
      </div>
      <div style="background:#fff8e1;border-left:4px solid #ff9800;padding:12px;border-radius:0 10px 10px 0;margin-top:10px">
        <strong>🍷 Garnacha 的精彩主場</strong>：Rioja Oriental 的炎熱乾燥氣候讓 Garnacha 發揮得淋漓盡致——藍莓、薰衣草、甘草、溫暖香料感，酒體飽滿，酒精偏高（14-15.5%）。山區的冷涼地塊（最涼的海拔）也孕育出多樣化的個性酒款。<br/>
        <strong>主要市鎮</strong>：Alfaro、Calahorra、Logroño（DOCa Rioja 首府）
      </div>
      <div style="background:#e8f5e9;border-left:4px solid #27ae60;padding:12px;border-radius:0 10px 10px 0;margin-top:8px">
        <strong>♻️ 2018 年更名意義</strong>：從「Rioja Baja（下里奧哈）」更名為「Rioja Oriental（東里奧哈）」，不只是地理方位的改變，更是對這個子產區潛力的重新肯定——「Oriental」更中性正面，避免「Baja（低下）」的語義偏見，反映其地中海型風格的獨特價值。
      </div>
    `,
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Muga（Haro，La Estación 車站區）',
    image: '/spain/images/labels/rioja/muga-reserva.jpg',
    caption: 'Muga Reserva（Bodegas Muga S.L.，Haro，創立於 1932 年）——本文提到聚集在 Haro「La Estación」的頂級傳統酒莊之一，酒標保留自 1932 年創廠以來的古典風格。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：La Rioja Alta S.A.',
    image: '/spain/images/labels/rioja/la-rioja-alta-vina-ardanza-2017.png',
    caption: 'La Rioja Alta S.A.「Viña Ardanza」Reserva 2017（Haro，創立於 1890 年）——同樣座落於「La Estación」車站區的傳統名莊，Viña Ardanza 是其代表性混釀酒款。',
  },
  {
    type: 'quiz',
    question: 'Rioja Alavesa 與 Rioja Alta 最關鍵的土壤差異是什麼？',
    options: [
      'Alavesa 以沖積土為主，Alta 以板岩為主',
      'Alavesa 95% 為石灰質黏土，Alta 則混合石灰質黏土、含鐵黏土與沖積土三種類型',
      'Alavesa 以含鐵紅土為主，Alta 以火山土為主',
      '兩者土壤組成完全相同，差異只在氣候',
    ],
    answer: 1,
    explanation: 'Rioja Alavesa 高達 95% 的土壤為石灰質黏土（calcareous clay），土壤組成高度統一，賦予酒款一致的礦石骨架。Rioja Alta 則同時擁有三種土壤：石灰質黏土（最優質 Tempranillo）、含鐵黏土（均衡紅酒）和沖積土（輕盈果香），形成更多元的風格。',
  },
  {
    type: 'summary',
    message: 'Rioja 三子產區風土深析完成！',
    keyPoints: [
      'Rioja Alta（77 市鎮・27,871ha）：混合三種土壤，大西洋涼爽，Gran Reserva 陳年款核心產地',
      'Rioja Alavesa（18 市鎮・13,178ha）：95% 石灰質黏土，Sierra Cantabria 屏障，Foehn 效應，輕盈礦石',
      'Rioja Oriental（49 市鎮・14,571+ha）：含鐵黏土+沖積土，地中海炎熱，Garnacha 最精彩',
      'Haro 的「La Estación 車站區」是全球最高密度百年酒莊集中地',
      'Rioja Oriental 於 2018 年由 Rioja Baja 更名，肯定其地中海風格的獨特價值',
    ],
  },
]

const S2M0L2_slides = [
  {
    type: 'cover',
    icon: '🍷',
    gradient: 'linear-gradient(135deg, #922b21, #7d3c98)',
    title: 'Rioja 紅酒：混釀藝術與陳年演化',
    subtitle: 'Level 2 · Tempranillo + Garnacha + Graciano + Mazuelo',
    points: [
      { icon: '🍒', label: 'Tempranillo', text: '靈魂品種，佔 70%+。草莓、皮革、香草，骨架輕盈但陳年複雜' },
      { icon: '🫐', label: 'Garnacha + Graciano', text: 'Garnacha 補充果味飽滿度；Graciano 提升花香複雜度與陳年力' },
      { icon: '🎭', label: 'Mazuelo', text: '高酸高單寧，是 Gran Reserva 骨幹的秘密武器' },
    ],
  },
  {
    type: 'content',
    icon: '🎨',
    title: '四大品種混釀哲學：各司其職',
    html: `
      <p>傳統 Rioja 紅酒是<strong>多品種混釀藝術</strong>。每個品種都有其不可替代的角色：</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#fce8e6;border-left:5px solid #c0392b;padding:12px;border-radius:0 10px 10px 0">
          <strong>🍒 Tempranillo — 主角與靈魂（佔比 60-85%）</strong><br/>
          西班牙最重要的品種。「Temprano（早熟）」之意，比 Garnacha 早 2-3 週採收。<br/>
          <em>年輕風格</em>：草莓、覆盆子、紅李、新鮮香草<br/>
          <em>陳年後</em>：皮革、煙草葉、雪松、松露、磚紅橙<br/>
          <strong>弱點</strong>：天然酸度偏低，顏色不夠深——需要其他品種補足
        </div>
        <div style="background:#fef0e6;border-left:5px solid #e67e22;padding:12px;border-radius:0 10px 10px 0">
          <strong>🫐 Garnacha Tinta — 果味與酒精補足者（佔比 5-20%）</strong><br/>
          主要來自 Rioja Oriental 炎熱地塊的 Garnacha，為混釀帶來：<br/>
          • 更豐滿的酒體感（高酒精 14-15%）<br/>
          • 藍莓、桑葚深色果香<br/>
          • 圓潤甘甜的中段口感<br/>
          • 白胡椒、普羅旺斯香草等香料感
        </div>
        <div style="background:#ede7f6;border-left:5px solid #7b1fa2;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌹 Graciano — 香氣與結構提升者（佔比 2-8%）</strong><br/>
          低產的珍稀品種，少量加入即能改變整體品質：<br/>
          • 深花香：紫羅蘭、玫瑰、鳶尾花<br/>
          • 天然高酸度（補足 Tempranillo 的短板）<br/>
          • 深色素（提升顏色深度）<br/>
          • 高單寧（增加陳年潛力）
        </div>
        <div style="background:#e8f5e9;border-left:5px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>🦴 Mazuelo（Carignan）— 骨幹與架構者（佔比 2-10%）</strong><br/>
          提供高度結構感，在 Gran Reserva 中不可或缺：<br/>
          • 非常高的酸度（陳年保鮮劑）<br/>
          • 深濃顏色（色素穩定劑）<br/>
          • 豐富單寧（陳年骨架支撐）<br/>
          • 黑莓、黑胡椒、礦石感
        </div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '⏳',
    title: 'Rioja 紅酒陳年演化：風味的時間旅程',
    html: `
      <p>Rioja 紅酒（特別是 Reserva 和 Gran Reserva）是世界上<strong>陳年演化最戲劇性</strong>的紅酒之一：</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#fce8e6;border-radius:10px;padding:12px">
          <strong>🌱 採收後 1-3 年（Joven/Crianza 時期）</strong><br/>
          新鮮草莓、覆盆子、紫羅蘭。美國橡木桶：初現香草、椰子甜香。
          單寧爽脆有力，酸度清新，酒色深寶石紅。適合現飲。
        </div>
        <div style="background:#ffe8cc;border-radius:10px;padding:12px">
          <strong>🍷 5-10 年（Reserva 成熟期）</strong><br/>
          果味開始乾化演變：草莓乾、蔓越莓乾、黑加侖。
          橡木特性更融合：香草、椰子不再突兀，開始出現皮革、雪松。
          單寧柔化，酒色偏向石榴紅。進入「第一個美好窗口」。
        </div>
        <div style="background:#fdf6e3;border-radius:10px;padding:12px">
          <strong>🏺 10-20 年（Gran Reserva 巔峰期）</strong><br/>
          三次香氣全面展開：皮革、菸草、蘑菇、松露、煙燻。
          美國橡木的磚紅色澤達到最佳狀態，高雅通透。
          單寧絲絨般精緻，餘韻悠長。這是 Rioja 最難忘的時刻。
        </div>
        <div style="background:#e8f5e9;border-radius:10px;padding:12px">
          <strong>🎖️ 20-40 年（傳奇年份巔峰）</strong><br/>
          僅最佳年份（如 2010、2001、1994、1982）才能達到此境界。
          López de Heredia Viña Tondonia Gran Reserva 在此階段呈現不可思議的雅致。
          氧化特性：磚橙色澤、蘑菇、核桃、花香、蜂蜜感。
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: 'Tempranillo 在不同橡木桶下的風格變化',
    items: [
      {
        icon: '🇺🇸',
        label: '美國橡木桶（American Oak）',
        desc: '傳統 Rioja 首選。木紋寬，透氧快，內酯含量高。賦予：香草、椰子、奶油糖果、甘草甜感。長期陳年→磚紅/橙紅色澤，絲絨單寧。是 López de Heredia、Murrieta 的靈魂所在',
        color: '#a04000',
      },
      {
        icon: '🇫🇷',
        label: '法國橡木桶（French Oak）',
        desc: '現代 Rioja 偏好。木紋細，透氧慢，更精緻。賦予：雪松、煙燻、烘烤咖啡、土壤感。保留更多果味，酒色深濃寶石紅。1990 年代引入，是 Artadi、Roda 的現代選擇',
        color: '#2c3e50',
      },
      {
        icon: '🎛️',
        label: '混合使用（美+法，部分酒莊）',
        desc: '兼顧傳統香草感與現代深色果味。Muga 使用約 40% 美國桶 + 60% 法國桶（Prado Enea）。平衡性好，被許多評論家視為「最成功的折衷路線」。La Rioja Alta SA 也採用此策略',
        color: '#1a8f5a',
      },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：美國橡木桶傳統風格',
    image: '/spain/images/labels/rioja/lopez-de-heredia-tondonia-reserva-2004.jpg',
    caption: 'R. López de Heredia「Viña Tondonia」Reserva 2004——美國橡木桶長期陳年的代表，本文提到的傳統派靈魂酒莊。',
  },
  {
    type: 'image',
    title: '🍷 酒標實例：法國橡木桶現代風格',
    image: '/spain/images/labels/rioja/amaren-reserva-2009.jpg',
    caption: 'Bodegas Amaren Reserva Tempranillo 2009（Samaniego，Rioja Alavesa）——現代簡約酒標設計，代表法國橡木桶陣營的當代 Rioja 風格。',
  },
  {
    type: 'quiz',
    question: '關於 Rioja 的混釀品種搭配，哪項描述最準確？',
    options: [
      'Graciano 主要負責提供高酒精和豐厚酒體，Mazuelo 負責花香',
      'Tempranillo 是主角，Graciano 補充花香與酸度，Mazuelo 提供高酸與架構，Garnacha 增加果味與酒精',
      'Garnacha 是 Rioja 的主要品種，Tempranillo 只是輔助品種',
      '現代 Rioja 已不再混釀，全部採用單一品種 Tempranillo 裝瓶',
    ],
    answer: 1,
    explanation: '傳統 Rioja 混釀中：Tempranillo 是主角（60-85%），但天然酸度偏低；Graciano 提供深花香、高酸度和高單寧（少量但影響顯著）；Mazuelo 提供高酸、深色素和豐富骨架（特別在 Gran Reserva 中重要）；Garnacha 增加果味飽滿度和酒精感。',
  },
  {
    type: 'summary',
    message: 'Rioja 紅酒混釀藝術學習完成！',
    keyPoints: [
      'Tempranillo 是主角（60-85%）：草莓皮革香草，需要其他品種補足酸度和深色',
      'Graciano：花香複雜度（紫羅蘭玫瑰）+ 高酸度 + 陳年力——Rioja 最珍貴的輔助品種',
      'Mazuelo（Carignan）：高酸 + 深色 + 骨幹——Gran Reserva 的秘密武器',
      'Garnacha：圓潤果味 + 高酒精——Rioja Oriental 的貢獻',
      '美國橡木→香草椰子磚紅；法國橡木→雪松煙燻深紫；兩者混用→均衡複雜',
    ],
  },
]

const S2M0L3_slides = [
  {
    type: 'cover',
    icon: '🥂',
    gradient: 'linear-gradient(135deg, #1a6e3c, #2e7d32)',
    title: 'Rioja 白酒文藝復興',
    subtitle: 'Level 2 · 從 Viura 傳統到 Chardonnay 現代——白 Rioja 的驚人崛起',
    points: [
      { icon: '🟡', label: 'Viura 傳統', text: '1970 年代起主導白 Rioja，清爽柑橘青蘋果，是 Rioja Blanco 的靈魂' },
      { icon: '🌹', label: '陳年白 Rioja 奇蹟', text: 'López de Heredia 白酒陳年 10-30 年，蜂蠟榛子礦石，堪稱世界奇蹟' },
      { icon: '🥂', label: '現代白 Rioja 革命', text: '2008 年引入 Chardonnay、Sauvignon Blanc、Verdejo，帶動新一代白 Rioja 浪潮' },
    ],
  },
  {
    type: 'content',
    icon: '🟡',
    title: 'Viura（Macabeo）：Rioja 白酒的傳統靈魂',
    html: `
      <p><strong>Viura</strong>（在加泰羅尼亞稱 Macabeo）自 1970 年代起成為 Rioja Blanco 的主力白品種。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:12px;border-radius:0 10px 10px 0">
          <strong>🍋 年輕型 Viura（Genérico）</strong><br/>
          • 清新柑橘：柳橙、青檸、葡萄柚<br/>
          • 青蘋果、白花（茉莉）<br/>
          • 爽脆酸度，輕盈酒體<br/>
          • 適合搭配海鮮、沙拉、清淡料理
        </div>
        <div style="background:#fdf6e3;border-left:4px solid #f39c12;padding:12px;border-radius:0 10px 10px 0">
          <strong>🪵 橡木桶陳年 Viura（Crianza/Reserva）</strong><br/>
          • 香草、奶油、烘烤榛子<br/>
          • 柑橘演化為金黃水果（芒果、桃子）<br/>
          • 豐厚酒體，圓潤質地<br/>
          • 搭配豐盛雞肉、乳酪、蘑菇燉菜絕佳
        </div>
        <div style="background:#fce8e6;border-left:4px solid #c0392b;padding:12px;border-radius:0 10px 10px 0">
          <strong>🏺 López de Heredia 傳奇老年份白酒</strong><br/>
          Viña Tondonia Blanco 和 Viña Gravonia——長達 10-30 年在橡木桶中緩慢氧化熟成。<br/>
          • 顏色深金至琥珀<br/>
          • 蜂蠟、烤榛子、梅子乾、蘑菇、海水礦石<br/>
          • 超低酸感卻異常清新<br/>
          這是全球獨一無二的白葡萄酒風格，被 The Wine Advocate 評為世界頂級白酒之一。
        </div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '🌟',
    title: '2008 年白品種革命：Rioja Blanco 的現代化',
    html: `
      <p>2008 年，DOCa Rioja 引入 5 個新白品種（包括 3 個國際品種），為 Rioja 白酒帶來嶄新面貌：</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px">
        <div style="background:#e3f2fd;border-radius:10px;padding:12px">
          <strong style="color:#1565c0">🥂 Chardonnay</strong><br/>
          法國最知名品種。在 Rioja 釀出豐滿奶油感的白酒，帶來熱帶水果（鳳梨、芒果）與香草橡木。適合搭配白醬燉雞、法式料理。
        </div>
        <div style="background:#e8f5e9;border-radius:10px;padding:12px">
          <strong style="color:#2e7d32">🌿 Sauvignon Blanc</strong><br/>
          清新草本與百香果特色。在涼爽高海拔的 Rioja Alta 發揮出最佳表現。帶來現代清爽的白 Rioja 新形象。
        </div>
        <div style="background:#fdf6e3;border-radius:10px;padding:12px">
          <strong style="color:#f39c12">✨ Verdejo</strong><br/>
          來自 Rueda 的明星品種。活潑草本（茴香、茅草）、杏仁苦感、清爽骨幹。為 Rioja 白酒增添獨特質感。
        </div>
        <div style="background:#fce8e6;border-radius:10px;padding:12px">
          <strong style="color:#c0392b">🌸 Tempranillo Blanco</strong><br/>
          Tempranillo 的白色突變種（2008 年引入）。清爽花香（白桃、茉莉）+ 爽脆酸度，是 Rioja 自有的特色白品種。
        </div>
        <div style="background:#ede7f6;border-radius:10px;padding:12px">
          <strong style="color:#7b1fa2">🏺 Malvasía</strong><br/>
          最早出現在 Rioja 的白品種之一。濃郁花香（玫瑰、橙花）、熱帶果味，是傳統陳年 Rioja Blanco 的香氣来源之一。
        </div>
        <div style="background:#e0f7fa;border-radius:10px;padding:12px">
          <strong style="color:#00695c">🌿 Garnacha Blanca</strong><br/>
          豐滿圓潤，熱帶果香（芭樂、甜瓜）、低酸。在 Rioja Oriental 的炎熱地塊表現最佳，帶來豐滿感。
        </div>
      </div>
    `,
  },
  {
    type: 'compare',
    title: 'Rioja 白酒四大風格對照',
    items: [
      {
        icon: '🍋',
        label: '年輕清爽型（Viura Joven）',
        desc: '無木桶陳年的年輕 Viura。清新柑橘、青蘋果、白花。爽脆酸度，輕盈酒體。適合搭配生蠔、醃魚、輕食沙拉。這是 Rioja 量最大的白酒風格。',
        color: '#f1c40f',
      },
      {
        icon: '🪵',
        label: '傳統橡木陳年（Crianza/Reserva Blanco）',
        desc: '美國橡木桶陳年的 Viura。蜂蜜香草、金黃水果、奶油質地。是 Rioja 白酒最具傳統特色的風格。代表：CVNE Monopole、Marqués de Murrieta Capellanía Blanco。',
        color: '#d4a017',
      },
      {
        icon: '🏺',
        label: '傳奇長期陳年白酒（López de Heredia 風格）',
        desc: '氧化熟成多年。深金琥珀色、蜂蠟榛子梅子乾蘑菇礦石。全球獨特風格，被侍酒師界奉為收藏瑰寶。Viña Tondonia Blanco、Viña Gravonia 是代表。',
        color: '#a04000',
      },
      {
        icon: '🌿',
        label: '現代新鮮派（Chardonnay/SB/Verdejo）',
        desc: '2008 年品種革命後的新風格。清新草本、熱帶果香、國際現代感。代表年輕消費者更容易接受的 Rioja 白酒面貌。部分使用法國橡木增添質感。',
        color: '#2e7d32',
      },
    ],
  },
  {
    type: 'image',
    title: '🍷 酒標實例：Plácet Valtomelloso（100% Viura）',
    image: '/spain/images/labels/rioja/placet-valtomelloso-2009.jpg',
    caption: 'Palacios Remondo「Plácet」Valtomelloso 2009（Alfaro，Rioja Oriental）——Álvaro Palacios 家族酒莊的單一葡萄園 100% Viura，展現 Viura 品種在優質風土下的細膩表現。',
  },
  {
    type: 'quiz',
    question: '關於 López de Heredia Viña Tondonia Blanco，以下哪項最能描述其獨特之處？',
    options: [
      '使用 Chardonnay 釀造，在不鏽鋼桶中保留清新果香',
      '採用 Viura（Macabeo）長期橡木桶氧化熟成（10-30 年），呈現蜂蠟榛子礦石的世界獨特風格',
      '採用 Sauvignon Blanc，以現代冷發酵技術釀造，清新草本特色',
      '為 100% Garnacha Blanca，不使用橡木，在地中海陽光下日曬熟成',
    ],
    answer: 1,
    explanation: 'López de Heredia Viña Tondonia Blanco 使用 Viura（Macabeo）為主，在老美國橡木桶中緩慢氧化熟成長達 10-30 年。成品呈深金琥珀色，散發蜂蠟、烤榛子、梅子乾、海水礦石等複雜香氣，是全球最獨特的白葡萄酒風格之一，也是 Rioja 白酒的極致代表。',
  },
  {
    type: 'summary',
    message: 'Rioja 白酒文藝復興課程完成！',
    keyPoints: [
      'Viura（Macabeo）是傳統主力白品種：年輕款清爽柑橘，陳年款蜂蜜香草',
      'López de Heredia 長期氧化陳年白酒是全球獨一無二的風格：蜂蠟榛子礦石',
      '2008 年引入 Chardonnay、Sauvignon Blanc、Verdejo 等，帶動現代白 Rioja 新浪潮',
      '其他重要本地白品種：Tempranillo Blanco、Garnacha Blanca、Malvasía、Maturana Blanca',
      'Rioja 白酒從清爽早飲到傳奇長期陳年，擁有全球最多元的白酒風格譜系之一',
    ],
  },
]

// ───────────────────────────────────────────────────────────────
//  查找表：lessonId → 投影片陣列
// ───────────────────────────────────────────────────────────────

const SLIDE_MAP = {
  // ── Level 1（完整 13 課）────────────────────────────────────────
  // 第一章：西班牙葡萄酒版圖（4 課）
  S1M1L1: S1M1L1_slides,   // 概覽與特色
  S1M1L2: S1M1L2_slides,   // 17 個自治區地理
  S1M1L3: S1M1L3_slides,   // 三大氣候帶
  S1M1L4: S1M1L4_slides,   // 土壤類型
  // 第二章：分級制度（3 課）
  S1M2L1: S1M2L1_slides,   // DO / DOCa / VP / VC
  S1M2L2: S1M2L2_slides,   // 陳年制度
  S1M2L3: S1M2L3_slides,   // 酒標解讀
  // 第三章：核心葡萄品種（3 課）
  S1M3L1: S1M3L1_slides,   // 五大紅品種
  S1M3L2: S1M3L2_slides,   // 五大白品種
  S1M3L3: S1M3L3_slides,   // 品種 × 產區地圖
  // 第四章：Rioja（2 課）
  S1M4L1: S1M4L1_slides,   // Rioja 地理
  S1M4L2: S1M4L2_slides,   // Rioja 傳統 vs 現代
  // 第五章：綜合評量
  S1FinalExam: S1FinalExam_slides,
  // ── Level 2（完整）──────────────────────────────────────────
  // 第零章：DOCa Rioja 深度探索（3 課）
  S2M0L1: S2M0L1_slides,     // Rioja 三子產區風土深析
  S2M0L2: S2M0L2_slides,     // Rioja 紅酒混釀藝術
  S2M0L3: S2M0L3_slides,     // Rioja 白酒文藝復興
  S2M1L1: S2M1L1_slides,     // Ribera del Duero
  S2M1L2: S2M1L2_slides,     // Rueda / Verdejo
  S2M1L3: S2M1L3_slides,     // Bierzo / Mencía
  S2M1L4: S2M1L4_slides,     // Navarra / Rosado
  S2M1L5: S2M1L5_slides,     // Arlanza DO / Albillo
  S2M1L6: S2M1L6_slides,     // Arribes DO / Juan García
  S2M1L7: S2M1L7_slides,     // Cigales DO / Garnacha Gris
  S2M1L8: S2M1L8_slides,     // Tierra de León DO / Prieto Picudo
  S2M1L9: S2M1L9_slides,     // Tierra del Vino de Zamora / Malvasía Fina
  S2M1L10: S2M1L10_slides,   // Toro DO / Tinta de Toro
  S2M1L11: S2M1L11_slides,   // Sierra de Salamanca VC / Rufete
  S2M1L12: S2M1L12_slides,   // Valles de Benavente VC
  S2M1L13: S2M1L13_slides,   // Valtiendas VC / Tempranillo / Albillo
  S2M2L1: S2M2L1_slides,     // Rías Baixas / Albariño
  S2M2L2: S2M2L2_slides,     // Ribeiro / Valdeorras / Ribeira Sacra
  S2M2L3: S2M2L3_slides,     // 大西洋氣候與花崗岩土壤
  S2M2L4: S2M2L4_slides,     // Txakoli / 巴斯克查科麗三大 DO
  S2M3L1: S2M3L1_slides,     // Priorat DOCa
  S2M3L2: S2M3L2_slides,     // Montsant / Terra Alta / Empordà
  S2M3L3: S2M3L3_slides,     // Penedès / 白酒革命
  S2M3L4: S2M3L4_slides,     // Alella DO / 花崗岩芳香白酒
  S2M3L5: S2M3L5_slides,     // Catalunya DO / 廣域覆蓋 / 海拔×距海
  S2M3L6: S2M3L6_slides,     // Conca de Barberá DO / 山脈屏障 / Cava 基酒
  S2M3L7: S2M3L7_slides,     // Costers del Segre DO / 塞格雷河 / 本地×法國混釀
  S2M3L8: S2M3L8_slides,     // Empordà DO / 沙質海岸 / 甜酒轉紅酒
  S2M3L9: S2M3L9_slides,     // Montsant DO / 2002年新秀 / Garnacha地中海風格
  S2M3L10: S2M3L10_slides,   // Pla de Bages DO / Picapoll / 本地×法國融合
  S2M3L11: S2M3L11_slides,   // Tarragona DO / 加泰羅尼亞最大 DO / 本地與國際品種
  S2M3L12: S2M3L12_slides,   // Terra Alta DO / Garnacha Blanca 質感白酒 / 地中海風格紅酒
  S2M4L1: S2M4L1_slides,     // Jerez / Sherry 入門
  S2M4L2: S2M4L2_slides,     // Jumilla & Yecla / Monastrell
  S2M4L3: S2M4L3_slides,     // Utiel-Requena / Bobal
  S2M4L4: S2M4L4_slides,     // Canarias / 火山古藤
  S2M4L5: S2M4L5_slides,     // Calatayud DO / Garnacha 老藤
  S2M4L6: S2M4L6_slides,     // Campo de Borja DO / 格納希帝國
  S2M4L7: S2M4L7_slides,     // Cariñena DO / 岩石之酒
  S2M4L8: S2M4L8_slides,     // Somontano DO / 庇里牛斯山麓多元風土
  S2FinalExam: S2FinalExam_slides,
  // ── Level 3（完整）──────────────────────────────────────────
  // 第一章：橡木桶與釀造工藝
  S3M1L1: S3M1L1_slides,     // 美國橡木 vs 法國橡木
  S3M1L2: S3M1L2_slides,     // 傳統 vs 現代 Rioja 論戰
  S3M1L3: S3M1L3_slides,     // 微氧化（MOX）技術
  S3M1L4: S3M1L4_slides,     // 有機・自然・生物動力農法
  // 第二章：Cava 深度
  S3M2L1: S3M2L1_slides,     // 傳統法八步驟
  S3M2L2: S3M2L2_slides,     // 三大基礎品種
  S3M2L3: S3M2L3_slides,     // Cava 四大等級
  S3M2L4: S3M2L4_slides,     // Corpinnat & Clàssic Penedès
  // 第三章：Sherry 深度
  S3M3L1: S3M3L1_slides,     // Flor 酵母生物熟成
  S3M3L2: S3M3L2_slides,     // 索雷拉 Solera 系統（原有）
  S3M3L3: S3M3L3_slides,     // 六大 Sherry 風格
  S3M3L4: S3M3L4_slides,     // Sherry 餐酒搭配
  // 第四章：加強酒與甜型酒
  S3M4L1: S3M4L1_slides,     // Montilla-Moriles / PX
  S3M4L2: S3M4L2_slides,     // Málaga 甜酒
  S3M4L3: S3M4L3_slides,     // 加那利甜酒與日曬工藝
  // 第五章：綜合評量
  S3FinalExam: S3FinalExam_slides,
  // ── Level 4（完整）────────────────────────────────────────────
  S4M1L1: S4M1L1_slides,
  S4M1L2: S4M1L2_slides,
  S4M1L3: S4M1L3_slides,
  S4M1L4: S4M1L4_slides,
  S4M2L1: S4M2L1_slides,
  S4M2L2: S4M2L2_slides,
  S4M2L3: S4M2L3_slides,
  S4M3L1: S4M3L1_slides,
  S4M3L2: S4M3L2_slides,
  S4M3L3: S4M3L3_slides,
  S4M3L4: S4M3L4_slides,
  S4M4L1: S4M4L1_slides,
  S4M4L2: S4M4L2_slides,
  S4FinalExam: S4FinalExam_slides,
}

/**
 * 取得課程投影片
 * 未製作的課程返回一組佔位投影片
 */
export function getSpainLessonSlides(lessonId) {
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
        { icon: '🎓', label: '完整課程', text: '完整的西班牙葡萄酒課程即將全面上線' },
      ],
    },
    {
      type: 'summary',
      message: '感謝您的耐心等候！',
      keyPoints: [
        '本課程內容正在製作中',
        '我們的講師團隊正在準備詳盡的學習內容',
        '敬請期待完整課程上線',
      ],
    },
  ]
}
