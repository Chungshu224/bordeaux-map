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
    type: 'quiz',
    question: '以下哪個自治區以大西洋氣候為主，是 Albariño 白酒的故鄉？',
    options: ['安達盧西亞（Andalucía）', '加利西亞（Galicia）', '拉里奧哈（La Rioja）', '巴倫西亞（Valencia）'],
    answer: 1,
    explanation: '加利西亞位於西班牙西北角，受大西洋影響，氣候涼爽多雨，是 Albariño 葡萄的故鄉。',
  },
  {
    type: 'map',
    title: '西班牙葡萄酒產區全覽',
    mapRegion: 'all',
    description: '衛星地圖呈現西班牙六大葡萄酒地理區，探索從加利西亞到安達盧西亞的多元風土。',
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
    type: 'quiz',
    question: '目前西班牙擁有 DOCa（最高等級）認證的產區只有兩個，它們是？',
    options: ['Ribera del Duero 和 Rías Baixas', 'Rioja 和 Priorat', 'Penedès 和 Navarra', 'Sherry 和 Cava'],
    answer: 1,
    explanation: 'Rioja 於 1991 年率先取得 DOCa 認證，Priorat（加泰羅尼亞稱 DOQ）則於 2009 年取得，至今仍是西班牙僅有的兩個 DOCa 產區。',
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
    type: 'quiz',
    question: 'Rioja 的 Gran Reserva 紅酒，最短需要多少年的總陳年時間（橡木桶 + 瓶中）？',
    options: ['2 年', '3 年', '5 年', '7 年'],
    answer: 2,
    explanation: 'Gran Reserva 紅酒至少需要 5 年總陳年時間，其中在橡木桶中至少 18 個月，其餘在瓶中熟成。',
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
    type: 'quiz',
    question: 'Tempranillo 在 Ribera del Duero 被稱為什麼名字？',
    options: ['Garnacha', 'Tinto Fino（或 Tinta del País）', 'Cencibel', 'Ojo de Liebre'],
    answer: 1,
    explanation: 'Tempranillo 在西班牙各產區有不同名稱：在 Ribera del Duero 稱 "Tinto Fino" 或 "Tinta del País"，在 Castilla-La Mancha 稱 "Cencibel"，在 Catalonia 稱 "Ull de Llebre"。',
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
    title: 'Rioja — 西班牙靈魂產區',
    subtitle: 'Level 1 · 入門產區',
    points: [
      { icon: '📍', label: '三個子產區', text: 'Rioja Alta · Rioja Alavesa · Rioja Oriental' },
      { icon: '🪵', label: '橡木桶傳統', text: '美國橡木賦予的香草椰子風味是 Rioja 標誌' },
      { icon: '🏅', label: 'DOCa 最高等級', text: '1991 年成為西班牙第一個也是最長時間的 DOCa' },
    ],
  },
  {
    type: 'content',
    icon: '🗺️',
    title: 'Rioja 三個子產區',
    html: `
      <p>Rioja 產區沿埃布羅河（Ebro）兩岸延伸，依地形和氣候分為三個子產區：</p>
      <div style="display:flex;flex-direction:column;gap:12px;margin-top:12px">
        <div style="border-left:4px solid #c0392b;padding:12px 16px;background:#fff9f9;border-radius:0 10px 10px 0">
          <strong>🌊 Rioja Alta（西部）</strong><br/>
          位於埃布羅河上游西側，海拔 400-700 公尺。大西洋與地中海氣候交匯，氣溫涼爽。以黏土石灰岩土壤為主。<br/>
          <em style="color:#c0392b">以精緻優雅的傳統 Rioja 著稱，是最知名的子產區。</em>
        </div>
        <div style="border-left:4px solid #8e44ad;padding:12px 16px;background:#f9f0ff;border-radius:0 10px 10px 0">
          <strong>🏔️ Rioja Alavesa（巴斯克段）</strong><br/>
          位於埃布羅河北岸，巴斯克自治區範圍內。海拔較高，土壤多為白堊土石灰岩。氣候更涼爽，風格更精緻。<br/>
          <em style="color:#8e44ad">精品小酒莊集中，現代風格 Rioja 的發源地之一。</em>
        </div>
        <div style="border-left:4px solid #e67e22;padding:12px 16px;background:#fff8f0;border-radius:0 10px 10px 0">
          <strong>☀️ Rioja Oriental（東部，舊稱 Baja）</strong><br/>
          氣候更乾燥炎熱，地中海影響更強。土壤含鐵，顏色發紅。主要以 Garnacha 和 Mazuelo（Carignan）為主。<br/>
          <em style="color:#e67e22">酒體豐滿、酒精度較高，常用於調配。</em>
        </div>
      </div>
    `,
  },
  {
    type: 'quiz',
    question: 'Rioja 的哪個子產區位於巴斯克自治區境內，以白堊土石灰岩著稱？',
    options: ['Rioja Alta', 'Rioja Oriental', 'Rioja Alavesa', 'Rioja Baja'],
    answer: 2,
    explanation: 'Rioja Alavesa 位於埃布羅河北岸的巴斯克自治區，以白堊土石灰岩土壤和精緻現代風格聞名。',
  },
  {
    type: 'map',
    title: 'Rioja 產區地理位置',
    mapRegion: 'rioja',
    description: 'Rioja DOCa 橫跨拉里奧哈自治區與巴斯克地區，沿埃布羅河谷延伸。',
  },

  {
    type: 'summary',
    message: 'Rioja 入門學習完成！',
    keyPoints: [
      'Rioja 是西班牙 1991 年第一個 DOCa 認證產區',
      '三個子產區：Alta（精緻）、Alavesa（現代）、Oriental（豐滿）',
      'Tempranillo 是主要紅品種，傳統以美國橡木桶陳年',
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
    icon: '⚔️',
    gradient: 'linear-gradient(135deg, #922b21, #c0392b)',
    title: 'Rioja 風格：傳統派 vs 現代派',
    subtitle: 'Level 1 · 第十二課',
    points: [
      { icon: '🪵', label: '傳統派', text: '長時間美國橡木桶陳年，香草椰子磚紅熟成感' },
      { icon: '🍒', label: '現代派', text: '法國橡木短陳年，濃縮果味、深色系現代感' },
      { icon: '🤝', label: '折衷派', text: '結合兩者，美國＋法國混用，均衡複雜' },
    ],
  },
  {
    type: 'compare',
    title: '傳統派 vs 現代派 Rioja',
    items: [
      {
        icon: '🪵',
        label: '傳統派（Traditional Style）',
        desc: '長時間美國橡木桶陳年（2–4 年）。香草、椰子、奶油糖果、磚紅色澤、優雅單寧。酒莊代表：López de Heredia、CVNE、Marqués de Murrieta',
        color: '#e67e22',
      },
      {
        icon: '🍒',
        label: '現代派（Modern Style）',
        desc: '法國橡木短桶陳年（12–18 個月）。深寶石紅、黑莓黑李、巧克力、更濃郁飽滿。酒莊代表：Artadi、Remírez de Ganuza、Ysios',
        color: '#8e44ad',
      },
      {
        icon: '🤝',
        label: '折衷派（Contemporary Style）',
        desc: '美國橡木 + 法國橡木混用，有時加入小型新桶（225L）。平衡傳統香草風味與現代果味濃縮感。如：Muga、Roda',
        color: '#27ae60',
      },
    ],
  },
  {
    type: 'content',
    icon: '🪵',
    title: '橡木桶對 Rioja 風格的影響',
    html: `
      <h4>🇺🇸 美國橡木桶（American Oak / Roble Americano）</h4>
      <ul>
        <li>木紋較寬，透氧速度較快</li>
        <li>賦予<strong>香草、椰子、奶油糖果、甘草</strong>的香氣</li>
        <li>長時間陳年 → 酒色趨向磚紅/橙紅，單寧更柔化</li>
        <li>是 <strong>Rioja 傳統風格</strong>的精髓，已有百年歷史</li>
      </ul>
      <h4>🇫🇷 法國橡木桶（French Oak / Roble Francés）</h4>
      <ul>
        <li>木紋較細，透氧速度較慢，陳年更精緻</li>
        <li>賦予<strong>雪松、煙燻、烘烤咖啡、香料</strong>的複雜感</li>
        <li>保留更多果味，酒色保持深寶石紅</li>
        <li>1990 年代引入 Rioja，帶動現代風格革命</li>
      </ul>
      <h4 style="margin-top:12px">🍷 如何從酒標辨識風格？</h4>
      <p>「Gran Reserva」幾乎都是傳統風格，「Crianza」和「Reserva」則可能是傳統或現代。看酒莊哲學比等級更重要。</p>
    `,
  },
  {
    type: 'quiz',
    question: 'Rioja 傳統派的標誌性橡木桶使用，以下哪個描述最準確？',
    options: [
      '使用法國橡木桶，陳年 6 個月',
      '使用美國橡木桶，長時間陳年（2-4 年以上），帶來香草椰子風味',
      '完全不使用橡木桶，強調果味純粹',
      '使用匈牙利橡木桶，帶來蜂蜜辛香風味',
    ],
    answer: 1,
    explanation: 'Rioja 傳統派的標誌是長時間美國橡木桶陳年，賦予酒款香草、椰子、奶油糖果的特殊香氣，搭配磚紅色澤和柔化的單寧，與現代派的濃郁黑果系截然不同。',
  },
  {
    type: 'map',
    title: 'Rioja 三大子產區地形',
    mapRegion: 'rioja',
    description: 'Alta（西）・Alavesa（北）・Oriental（東）各有不同海拔與土壤特性。',
  },

  {
    type: 'summary',
    message: 'Rioja 風格學習完成！',
    keyPoints: [
      '傳統派：美國橡木桶長陳年 → 香草椰子磚紅熟成感（López de Heredia、Marqués de Murrieta）',
      '現代派：法國橡木桶短陳年 → 深色果味濃縮現代感（Artadi、Ysios）',
      '折衷派：兩種橡木混用，均衡複雜（Muga、Roda）',
      '美國橡木 = 香草椰子；法國橡木 = 雪松煙燻',
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
    type: 'content',
    icon: '⛰️',
    title: 'Ribera del Duero：高原上的紅酒王國',
    html: `
      <p>Ribera del Duero 沿杜羅河（Duero）兩岸延伸，從卡斯提亞-萊昂穿越至索里亞省。<strong>海拔 700-1000 公尺</strong>的高原位置，使這裡的氣候極為獨特：</p>
      <ul>
        <li><strong>日溫差大</strong>：夏日白天可超過 40°C，夜間卻只有 15°C — 大溫差有助於保留葡萄的天然酸度和香氣</li>
        <li><strong>冬季嚴寒</strong>：甚至可能有霜害，但夏季日照強烈充足</li>
        <li><strong>土壤</strong>：混合石灰岩、石礫與砂土，排水良好</li>
      </ul>
      <h4>🍷 主要品種：Tinto Fino</h4>
      <p>即 Tempranillo 的當地變體，在高海拔低溫環境下發展出<strong>更深的色澤、更高的酸度、更豐富的黑色水果風味</strong>（黑莓、黑李）。比 Rioja 的 Tempranillo 更濃郁、更酒體飽滿。</p>
      <h4>🏆 傳奇酒莊</h4>
      <ul>
        <li><strong>Vega Sicilia</strong>（貝加西西里亞）：西班牙最具傳奇色彩的酒莊，Único 是最頂級的款式</li>
        <li><strong>Pingus</strong>：丹麥人 Peter Sisseck 在 1995 年創立，迅速躍升為西班牙膜拜酒</li>
      </ul>
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
    type: 'map',
    title: 'Ribera del Duero 高原地理',
    mapRegion: 'castilla-leon',
    description: '海拔 700–1000 公尺的杜羅河谷，西班牙最大產酒自治區，日夜溫差賦予葡萄卓越酸度。',
  },

  {
    type: 'summary',
    message: 'Ribera del Duero 學習完成！',
    keyPoints: [
      '海拔 700-1000 公尺，大陸型極端氣候',
      'Tinto Fino（Tempranillo）是主要品種，風格比 Rioja 更濃郁',
      'Vega Sicilia 和 Pingus 是世界級頂級酒莊',
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
    type: 'content',
    icon: '🗺️',
    title: 'Rueda DO：地理與氣候',
    html: `
      <p>Rueda 位於卡斯提亞-萊昂自治區，沿杜羅河（Duero）支流 Adaja 河谷延伸，距 Ribera del Duero 約 100 公里。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#e8f5e9;border-left:4px solid #27ae60;padding:12px;border-radius:0 10px 10px 0">
          <strong>⛰️ 地理</strong><br/>
          海拔 700-900 公尺的梅塞塔高原，地形平坦。土壤以砂質壤土和礫石為主，排水良好，根瘤蚜（Phylloxera）難以存活，因此保存了許多老藤（60-100年）。
        </div>
        <div style="background:#fff3e0;border-left:4px solid #e67e22;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌡️ 氣候</strong><br/>
          典型大陸型氣候：夏季炎熱乾燥，冬季寒冷。<strong>日夜溫差大</strong>有助保留 Verdejo 的天然香氣和酸度。年雨量僅 400 毫米，葡萄樹壓力適中。
        </div>
        <div style="background:#e3f2fd;border-left:4px solid #2196f3;padding:12px;border-radius:0 10px 10px 0">
          <strong>📜 DO Rueda 規定</strong><br/>
          <ul style="margin:4px 0 0;padding-left:18px">
            <li>Rueda Verdejo：Verdejo ≥ 85%</li>
            <li>Rueda（一般）：Verdejo ≥ 50%</li>
            <li>Rueda Espumoso（氣泡）：Verdejo ≥ 85%，傳統法</li>
          </ul>
        </div>
      </div>
      <h4 style="margin-top:14px">🌿 Verdejo 的風味特徵</h4>
      <p>清新<strong>草本（青草、茴香、接骨木花）</strong>、白桃、柑橘、<strong>苦杏仁尾韻</strong>。酸度中高，酒體輕盈至中等。老藤 Verdejo 則帶有更紮實的礦石感和結構。</p>
    `,
  },
  {
    type: 'quiz',
    question: 'DO Rueda 對標示「Rueda Verdejo」的葡萄酒，規定 Verdejo 含量至少需達到多少百分比？',
    options: ['50%', '70%', '85%', '100%'],
    answer: 2,
    explanation: '標示「Rueda Verdejo」的葡萄酒，Verdejo 含量必須達到 85% 以上。若只標示「Rueda」，則 Verdejo 至少 50% 即可。',
  },
  {
    type: 'map',
    title: 'Rueda DO 產區位置',
    mapRegion: 'castilla-leon',
    description: '位於卡斯提亞-萊昂西南部，Verdejo 白酒的核心產地，海拔高原賦予清爽酸度。',
  },

  {
    type: 'summary',
    message: 'Rueda 學習完成！',
    keyPoints: [
      '位於卡斯提亞-萊昂，海拔 700-900 公尺高原，大陸型氣候',
      '砂質壤土＋礫石土壤，根瘤蚜難以存活，保存大量老藤',
      'Verdejo：草本、白桃、苦杏仁尾韻，是西班牙最受歡迎白酒品種之一',
      'Rueda Verdejo 規定 Verdejo ≥ 85%',
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
      { icon: '⬛', label: '板岩梯田', text: '陡峭花崗岩與板岩斜坡，需全程手工作業' },
      { icon: '🌿', label: 'Mencía', text: '優雅花香・紫羅蘭・鉛筆芯，結構輕盈似 Pinot Noir' },
      { icon: '🗺️', label: '地理', text: '萊昂省西部，受大西洋影響，形成特殊微氣候' },
    ],
  },
  {
    type: 'content',
    icon: '🗺️',
    title: 'Bierzo：地理與風土',
    html: `
      <p>Bierzo DO 位於卡斯提亞-萊昂省西部，地處坎塔布連山脈和加利西亞山脈的交匯處，形成一個獨特的碗形盆地。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#f5eef8;border-left:4px solid #8e44ad;padding:12px;border-radius:0 10px 10px 0">
          <strong>⛰️ 地形</strong><br/>
          被山脈環抱的碗形盆地，高度變化大（400-1000 公尺）。大西洋濕潤空氣從加利西亞流入，調節了中部大陸型氣候的乾燥極端。這樣的微氣候使 Mencía 的糖分和酸度達到優雅平衡。
        </div>
        <div style="background:#fce8e6;border-left:4px solid #c0392b;padding:12px;border-radius:0 10px 10px 0">
          <strong>⬛ 板岩土壤（Pizarra）</strong><br/>
          最頂級的單一園（Pagos）種植在陡峭板岩梯田上，單寧、骨架和礦石感極強。老藤（50+ 年）低產，但果實高度濃縮。
        </div>
        <div style="background:#e8f5e9;border-left:4px solid #27ae60;padding:12px;border-radius:0 10px 10px 0">
          <strong>🌿 Mencía 風味</strong><br/>
          <ul style="margin:4px 0 0;padding-left:18px">
            <li>花香（紫羅蘭、紅玫瑰）</li>
            <li>紅色水果（覆盆子、紅李）</li>
            <li>礦石感（板岩、鉛筆芯）</li>
            <li>高酸、中低單寧、輕盈至中等酒體</li>
            <li>老藤：更深邃的結構，接近 Burgundy Pinot Noir</li>
          </ul>
        </div>
      </div>
      <h4 style="margin-top:14px">🏆 代表酒莊</h4>
      <p><strong>Descendientes de J. Palacios</strong>（Álvaro Palacios 的侄子 Ricardo Pérez Palacios 在 Bierzo 的作品）是推動 Bierzo 國際知名度的關鍵推手，旗下 La Faraona 和 Las Lamas 是西班牙最貴的 Mencía。</p>
    `,
  },
  {
    type: 'quiz',
    question: 'Bierzo DO 最著名且種植在板岩梯田上的主要紅品種是什麼？',
    options: ['Tempranillo', 'Garnacha', 'Mencía', 'Bobal'],
    answer: 2,
    explanation: 'Bierzo DO 的明星品種是 Mencía，種植在陡峭板岩梯田上，以優雅花香、紅果、礦石感和輕盈結構著稱，常被比較為西班牙的 Pinot Noir。',
  },
  {
    type: 'map',
    title: 'Bierzo 板岩谷地',
    mapRegion: 'castilla-leon',
    description: '西班牙西北角的山谷產區，板岩土壤孕育 Mencía 老藤，地形遮擋大西洋與大陸氣候。',
  },

  {
    type: 'summary',
    message: 'Bierzo 學習完成！',
    keyPoints: [
      '位於萊昂省西部，碗形盆地受大西洋微氣候調節',
      '板岩（Pizarra）梯田是最頂級 Mencía 的風土基礎',
      'Mencía：紫羅蘭花香、紅果、鉛筆礦石感，低單寧優雅',
      'Descendientes de J. Palacios 是推動 Bierzo 國際聲譽的核心推手',
    ],
  },
]

const S2M1L4_slides = [
  {
    type: 'cover',
    icon: '🌹',
    gradient: 'linear-gradient(135deg, #e91e63, #c0392b)',
    title: 'Navarra — 玫瑰酒與 Garnacha 的故鄉',
    subtitle: 'Level 2 · 西班牙最美的粉紅酒產區',
    points: [
      { icon: '🌹', label: '粉紅酒', text: '西班牙最佳 Rosado 的主要來源，以 Garnacha 釀製' },
      { icon: '🍑', label: 'Garnacha', text: '老藤 Garnacha 是高品質紅酒基礎，風格豐滿香料感' },
      { icon: '🌍', label: '多樣性', text: '法國邊界接壤，引進 Cabernet、Merlot 等國際品種' },
    ],
  },
  {
    type: 'compare',
    title: 'Navarra DO：五個子產區',
    items: [
      { icon: '🏔️', label: 'Valdizarbe', desc: '北部高海拔，受庇里牛斯山影響，氣候最涼爽，生產清爽白酒與輕盈紅酒', color: '#3498db' },
      { icon: '🌊', label: 'Tierra Estella', desc: '受大西洋影響，香氣清新，適合白品種 Chardonnay 和 Viura', color: '#27ae60' },
      { icon: '🌹', label: 'La Ribera Alta', desc: '核心紅酒和粉紅酒地帶，Garnacha 老藤最集中，最典型的 Navarra Rosado', color: '#e91e63' },
      { icon: '☀️', label: 'La Ribera Baja', desc: '氣候最乾熱，鄰近拉里奧哈，釀造豐滿濃郁紅酒，常與 Rioja 混調', color: '#e67e22' },
      { icon: '🏜️', label: 'Baja Montaña', desc: '東北部，介於山地與平原之間，多樣化品種種植，包括 Tempranillo 和 Garnacha', color: '#9b59b6' },
    ],
  },
  {
    type: 'content',
    icon: '🌹',
    title: 'Navarra Rosado：西班牙最具代表性的粉紅酒',
    html: `
      <p>Navarra 的 <strong>Garnacha Rosado 粉紅酒</strong>被認為是西班牙最具代表性的粉紅酒風格，並在國際上享有盛名。</p>
      <h4>🍓 風味特徵</h4>
      <ul>
        <li><strong>顏色</strong>：亮麗的覆盆子粉紅至深玫瑰紅（傳統壓榨法）</li>
        <li><strong>香氣</strong>：草莓、覆盆子、西瓜、玫瑰花瓣</li>
        <li><strong>口感</strong>：清爽高酸、果味豐滿、干型為主，夏日最佳饗宴</li>
      </ul>
      <h4>🍇 Garnacha 老藤紅酒</h4>
      <p>La Ribera Alta 的 Garnacha 老藤（50+ 年）釀出的紅酒展現香料、紅莓、皮革的豐滿個性。</p>
      <h4>🌍 國際品種試驗場</h4>
      <p>1980-90 年代，Navarra 積極引進 Cabernet Sauvignon、Merlot、Chardonnay 等法國品種，成為西班牙最早進行國際品種實驗的產區之一，但近年趨勢重回本土品種。</p>
    `,
  },
  {
    type: 'quiz',
    question: 'Navarra DO 最著名的粉紅酒（Rosado）主要用哪個品種釀製？',
    options: ['Tempranillo', 'Garnacha', 'Cabernet Sauvignon', 'Viura'],
    answer: 1,
    explanation: 'Navarra 的 Garnacha 是釀造 Rosado 粉紅酒的靈魂品種。Garnacha 老藤在 La Ribera Alta 子產區有最高的密度，釀出的粉紅酒以草莓、覆盆子香氣和飽滿口感著稱。',
  },
  {
    type: 'map',
    title: 'Navarra DO 產區地理',
    mapRegion: 'navarra',
    description: '北接庇里牛斯山，南達埃布羅河，五個子產區從寒冷山地到溫暖平原。',
  },

  {
    type: 'summary',
    message: 'Navarra 學習完成！',
    keyPoints: [
      '分五個子產區：北部涼爽（庇里牛斯山影響）→ 南部乾熱',
      'Garnacha Rosado 是 Navarra 最具代表性的特色，西班牙粉紅酒標竿',
      '老藤 Garnacha 紅酒：香料、紅莓、皮革，豐滿圓潤',
      '1980-90 年代曾大量種植法國品種，現已回歸本土化',
    ],
  },
]

const S2M2L1_slides = [
  {
    type: 'cover',
    icon: '🌊',
    gradient: 'linear-gradient(135deg, #1a5276, #2980b9)',
    title: 'Rías Baixas — Albariño 白酒之都',
    subtitle: 'Level 2 · 加利西亞的大西洋明珠',
    points: [
      { icon: '🌊', label: '「沉溺的海岸」', text: '冰川侵蝕形成的深入內陸海灣（Rías），環境涼爽多濕' },
      { icon: '🍋', label: 'Albariño', text: '桃子・柑橘・杏仁・鹽漬礦石，西班牙最精緻白酒' },
      { icon: '🪨', label: '花崗岩土壤', text: '花崗岩風化土壤賦予獨特礦石與鹽感' },
    ],
  },
  {
    type: 'compare',
    title: 'Rías Baixas：五個子產區',
    items: [
      { icon: '🌊', label: 'Val do Salnés（最核心）', desc: '最大最重要的子產區，緊鄰大西洋，最典型的鹽漬礦石 Albariño，Cambados 鎮是中心', color: '#2980b9' },
      { icon: '🏔️', label: 'O Rosal', desc: '葡萄牙邊境，Minho 河南岸，氣候較溫暖，Albariño 帶有更多熱帶水果風味', color: '#27ae60' },
      { icon: '🌿', label: 'Condado do Tea', desc: '最內陸的子產區，受大陸型氣候影響，Albariño 更濃郁飽滿', color: '#e67e22' },
      { icon: '🏝️', label: 'Soutomaior', desc: '最小子產區，丘陵地形，海風影響，Albariño 風格精緻清新', color: '#9b59b6' },
      { icon: '🌿', label: 'Ribeira do Ulla', desc: '最北的子產區，Ulla 河谷，部分海拔較高，Albariño 帶有更多草本清爽感', color: '#c0392b' },
    ],
  },
  {
    type: 'content',
    icon: '🪨',
    title: '花崗岩風土與 Albariño 種植特色',
    html: `
      <p>Rías Baixas 是研究「土壤-葡萄酒礦石感」關係的最佳案例之一。</p>
      <h4>🪨 花崗岩土壤（Granitic Soils）</h4>
      <ul>
        <li>酸性土壤（pH 4.5-6.0），養分低，排水良好</li>
        <li>葡萄樹深根尋礦物質，造就獨特<strong>鹽漬礦石感</strong></li>
        <li>與 Loire 的 Muscadet（也是花崗岩）有相似的礦石特質對比</li>
      </ul>
      <h4>🌿 Albariño 的種植方式</h4>
      <ul>
        <li><strong>Pergola（棚架式）系統</strong>：高架種植，讓葡萄懸空，增加通風，減少潮濕環境的黴菌問題</li>
        <li>高棚架讓葡萄遠離積水地面，這在 Galicia 年雨量 1500mm 的環境中至關重要</li>
      </ul>
      <h4>🍋 Albariño 風味特徵</h4>
      <ul>
        <li><strong>香氣</strong>：白桃、杏仁、柑橘皮、橙花、海鹽礦石</li>
        <li><strong>口感</strong>：高酸、中等酒體、輕微苦杏仁尾韻</li>
        <li><strong>陳年</strong>：通常年輕飲用；頂級款可桶陳或瓶陳 3-5 年展現蜂蜜、油脂感</li>
      </ul>
    `,
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
    type: 'map',
    title: 'Rías Baixas 大西洋海灣',
    mapRegion: 'galicia',
    description: '加利西亞西南角的鋸齒形海岸，大西洋海風帶來涼爽潮濕氣候，是 Albariño 的故鄉。',
  },

  {
    type: 'summary',
    message: 'Rías Baixas 學習完成！',
    keyPoints: [
      '「沉溺的海岸」地形，五個子產區，Val do Salnés 是核心',
      '花崗岩酸性土壤賦予 Albariño 獨特鹽漬礦石感',
      'Pergola 棚架式種植：對付加利西亞高達 1500mm 年雨量',
      'Albariño：白桃・柑橘・杏仁・鹽礦石，高酸清爽，世界頂級白酒之一',
    ],
  },
]

const S2M2L2_slides = [
  {
    type: 'cover',
    icon: '🍃',
    gradient: 'linear-gradient(135deg, #196f3d, #1e8449)',
    title: 'Ribeiro · Valdeorras · Ribeira Sacra',
    subtitle: 'Level 2 · 加利西亞的三個寶藏產區',
    points: [
      { icon: '🍃', label: 'Ribeiro', text: '加利西亞最古老的產區，Treixadura 和 Godello 白酒複雜度驚人' },
      { icon: '🪨', label: 'Valdeorras', text: 'Godello 復興的發源地，板岩土壤帶來礦石張力' },
      { icon: '⬛', label: 'Ribeira Sacra', text: '陡峭花崗岩板岩梯田，Mencía 紅酒和 Godello 白酒並列' },
    ],
  },
  {
    type: 'compare',
    title: '加利西亞三大寶藏產區比較',
    items: [
      {
        icon: '🍃',
        label: 'Ribeiro DO',
        desc: '加利西亞最古老產區。主要品種：白酒 Treixadura（帶花香與豐腴質感）、Godello、Albariño；紅酒 Sousón、Caíño Tinto。風格豐盈多層次。',
        color: '#1e8449',
      },
      {
        icon: '🪨',
        label: 'Valdeorras DO',
        desc: '位於加利西亞東部山區，板岩土壤，海拔 400-700 公尺。Godello 白酒在此復興，展現礦石感、蜂蜜、白花和豐滿質地。Mencía 也有種植。',
        color: '#8e44ad',
      },
      {
        icon: '⬛',
        label: 'Ribeira Sacra DO',
        desc: '「神聖河岸」，陡峭梯田沿 Miño 和 Sil 河谷。板岩＋花崗岩。Mencía 展現輕盈花香；Godello 白酒同樣精彩。手工採收不可避免，成本高。',
        color: '#2c3e50',
      },
    ],
  },
  {
    type: 'content',
    icon: '🍇',
    title: 'Godello：加利西亞的白酒寶石',
    html: `
      <p>Godello 是加利西亞最複雜的白葡萄品種，在 1980 年代幾乎瀕臨絕種，但被 Valdeorras 的釀酒師 Horacio Fernández Bóveda 拯救，如今是西班牙增長最快的白酒品種之一。</p>
      <h4>🍷 Godello 風味特徵</h4>
      <ul>
        <li><strong>香氣</strong>：白桃、杏子、蜂蜜、白花（金合歡）、蜂蠟</li>
        <li><strong>口感</strong>：豐滿圓潤、中高酸、帶有油脂感和礦石骨架</li>
        <li><strong>桶陳版本</strong>：增加奶油烤麵包感，複雜度媲美頂級 Burgundy 白酒</li>
      </ul>
      <h4>🌍 全球認可</h4>
      <p>業界常將頂級 Godello 與勃根地 Chardonnay 相提並論。</p>
      <h4>💡 Treixadura（Ribeiro 的寶貝）</h4>
      <p>Ribeiro 的代表白品種，帶有玫瑰花瓣、杏桃和淡淡香草，質地圓潤。通常與 Godello、Albariño 混調，增添複雜度。</p>
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
    type: 'map',
    title: '加利西亞北部葡萄酒產區',
    mapRegion: 'galicia',
    description: 'Ribeiro・Valdeorras・Ribeira Sacra — 多樣地形與板岩土壤孕育各具特色的白酒與紅酒。',
  },

  {
    type: 'summary',
    message: '加利西亞三寶學習完成！',
    keyPoints: [
      'Ribeiro：最古老的加利西亞產區，Treixadura 和 Godello 白酒並重',
      'Valdeorras：Godello 復興發源地，板岩土壤，礦石張力出色',
      'Ribeira Sacra：陡峭梯田，Mencía 紅酒 + Godello 白酒都精彩',
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
    type: 'map',
    title: 'Ribeira Sacra 懸崖梯田',
    mapRegion: 'galicia',
    description: '沿 Miño 和 Sil 河谷的陡峭梯田，手工採收的 Mencía 老藤，加利西亞最壯觀的葡萄酒產區。',
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

const S2M3L1_slides = [
  {
    type: 'cover',
    icon: '⬛',
    gradient: 'linear-gradient(135deg, #1a1a2e, #c0392b)',
    title: 'Priorat（DOCa）— 板岩 Llicorella 的奇蹟',
    subtitle: 'Level 2 · 西班牙最偉大的紅酒之一',
    points: [
      { icon: '⬛', label: 'Llicorella', text: '黑色板岩與石英混合，全球最獨特的頂級土壤之一' },
      { icon: '🍇', label: '老藤 Garnacha + Carignan', text: '50-100 年老藤，低產驚人濃縮，礦石黑果風格' },
      { icon: '🏅', label: 'DOCa', text: '2009 年取得，西班牙僅有兩個 DOCa 之一（另一個是 Rioja）' },
    ],
  },
  {
    type: 'content',
    icon: '🗺️',
    title: 'Priorat：地理與歷史',
    html: `
      <p>Priorat 位於加泰羅尼亞塔拉戈納省，是西班牙最險峻、最難農作的產區之一。</p>
      <h4>📜 歷史：從廢棄到復興</h4>
      <ul>
        <li><strong>中世紀</strong>：Carthusian 修道院在此種葡萄，是 Priorat（Priory 先驅地）名稱的由來</li>
        <li><strong>1900 年代</strong>：根瘤蚜（Phylloxera）摧毀，加上農村人口外移，產區幾近廢棄</li>
        <li><strong>1989 年</strong>：René Barbier（法國人）夥同 Álvaro Palacios 等五位釀酒師，在此重新種植 Garnacha 和 Carignan，開啟 Priorat 的「現代復興」</li>
        <li><strong>2009 年</strong>：取得 DOCa 認證（加泰羅尼亞官方用 DOQ — Denominació d'Origen Qualificada）</li>
      </ul>
      <h4>⛰️ 地理特徵</h4>
      <p>海拔 100-700 公尺，坡度極陡（部分達 60°），無法機械化農作。地中海氣候（溫暖乾燥），年雨量僅 500-600mm。</p>
    `,
  },
  {
    type: 'compare',
    title: 'Priorat 頂級酒莊介紹',
    items: [
      { icon: '🏆', label: 'Álvaro Palacios（L\'Ermita）', desc: 'L\'Ermita 是西班牙最昂貴的酒之一，以百年老藤 Garnacha 釀製，礦石感和精緻度震撼人心', color: '#c0392b' },
      { icon: '🌟', label: 'Clos Mogador（René Barbier）', desc: '現代 Priorat 復興共同發起人之一，展現 Priorat 的宏偉架構和濃郁黑果', color: '#8e44ad' },
      { icon: '🏅', label: 'Mas Brunells / Mas La Plana', desc: 'Torres 家族在 Priorat 的投資，帶來現代酒莊管理哲學', color: '#e67e22' },
      { icon: '👑', label: 'Cims de Porrera', desc: '100% Carignan（Cariñena）老藤，展現 Priorat 最純粹的板岩礦石風格', color: '#2c3e50' },
    ],
  },
  {
    type: 'quiz',
    question: 'Priorat 的標誌性土壤「Llicorella」主要由哪些成分組成？',
    options: [
      '白堊土和石灰岩',
      '黑色板岩（片岩）和石英',
      '火山浮石和砂礫',
      '紅色黏土和砂岩',
    ],
    answer: 1,
    explanation: 'Priorat 的 Llicorella 是由黑色板岩（片岩）和石英組成的特殊土壤。排水性極好，蓄熱能力強，讓葡萄承受水分壓力而低產濃縮，是 Priorat 頂級酒礦石感和黑果濃縮特質的土壤根源。',
  },
  {
    type: 'map',
    title: 'Priorat DOCa 板岩山地',
    mapRegion: 'catalonia',
    description: '加泰羅尼亞山區，llicorella 板岩土壤覆蓋陡峭山坡，是西班牙兩個 DOCa 之一。',
  },

  {
    type: 'summary',
    message: 'Priorat 學習完成！',
    keyPoints: [
      '2009 年成為 DOCa（加泰羅尼亞稱 DOQ），西班牙第二個最高等級產區',
      'Llicorella 板岩土壤：排水好＋蓄熱強，造就低產濃縮的老藤紅酒',
      '1989 年五位釀酒師（含 Álvaro Palacios）開啟現代復興',
      '主要品種：Garnacha（黑果覆盆子）+ Carignan（礦石酸度結構）',
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
    type: 'map',
    title: 'Montsant 與周邊產區',
    mapRegion: 'catalonia',
    description: '環繞 Priorat 的產區，同樣的板岩土壤，以更實惠的價格提供類似的礦物感風格。',
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
    title: 'Penedès — 現代西班牙白酒革命',
    subtitle: 'Level 2 · Torres 家族改寫西班牙葡萄酒史',
    points: [
      { icon: '🏭', label: 'Torres 家族', text: '1979 年引入不鏽鋼桶和溫控釀造，掀起西班牙現代白酒革命' },
      { icon: '🍾', label: 'Cava 的故鄉', text: '85% 的 Cava DO 在 Penedès 生產（聖薩杜尼達諾亞鎮）' },
      { icon: '🌍', label: '品種試驗場', text: 'Chardonnay、Riesling、Gewürztraminer 等法德品種在此扎根' },
    ],
  },
  {
    type: 'content',
    icon: '🏭',
    title: 'Torres 家族與現代西班牙白酒革命',
    html: `
      <p>在 20 世紀中期，西班牙大多數白酒是<strong>氧化、厚重、缺乏清爽感</strong>的。1979 年，Miguel Torres 帶著法國釀酒知識和技術返回西班牙：</p>
      <h4>🔬 現代白酒革命的三個關鍵技術</h4>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
        <div style="background:#eaf4fb;border-left:4px solid #2980b9;padding:12px;border-radius:0 10px 10px 0">
          <strong>① 不鏽鋼桶（Stainless Steel Tanks）</strong><br/>
          取代舊式木桶，隔絕氧化，保留白酒的清爽果味和花香
        </div>
        <div style="background:#e9f7ef;border-left:4px solid #27ae60;padding:12px;border-radius:0 10px 10px 0">
          <strong>② 溫控發酵（Temperature-Controlled Fermentation）</strong><br/>
          低溫（12-16°C）慢速發酵，保留揮發性香氣物質，是現代清爽白酒的關鍵
        </div>
        <div style="background:#f5eef8;border-left:4px solid #8e44ad;padding:12px;border-radius:0 10px 10px 0">
          <strong>③ 國際品種引進</strong><br/>
          引入 Chardonnay、Riesling 等品種，拓展了西班牙白酒的風格譜系
        </div>
      </div>
      <h4 style="margin-top:14px">🍾 Cava — Penedès 的另一張王牌</h4>
      <p>聖薩杜尼達諾亞（Sant Sadurní d'Anoia）鎮是全球 Cava 的生產中心，超過 250 家酒莊在此生產，包括 Codorníu（全球最大瓶發酵氣泡酒生產商之一）和 Freixenet。</p>
    `,
  },
  {
    type: 'quiz',
    question: 'Torres 家族在 1979 年引入哪項技術，掀起了西班牙現代白酒革命？',
    options: [
      '橡木桶陳年和 Bâtonnage（攪桶）',
      '不鏽鋼桶溫控發酵，保留清爽果味',
      '採用生物動力農法（Biodynamic）',
      '引入 Flor 酵母延伸陳年',
    ],
    answer: 1,
    explanation: 'Torres 在 1979 年引入不鏽鋼桶和溫控低溫發酵技術，這取代了傳統舊木桶，大幅減少氧化，保留了白酒的清爽花果香氣，徹底改變了西班牙白酒風格。',
  },
  {
    type: 'map',
    title: 'Penedès 與加泰羅尼亞白酒產區',
    mapRegion: 'catalonia',
    description: '連接巴塞隆納與地中海，是 Cava 的發源地，現代西班牙白酒革命的中心。',
  },

  {
    type: 'summary',
    message: 'Penedès 學習完成！',
    keyPoints: [
      'Torres 家族 1979 年引入不鏽鋼桶+溫控釀造，掀起現代白酒革命',
      'Cava DO 核心：聖薩杜尼達諾亞鎮（Sant Sadurní），85% Cava 在此生產',
      '主要 Cava 品種：Macabeo + Xarel·lo + Parellada（三主力）',
      'Penedès 也是法國國際品種（Chardonnay、Riesling）在西班牙的試驗場',
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
    type: 'map',
    title: 'Jerez — Sherry 雪莉酒產區',
    mapRegion: 'andalucia',
    description: '安達盧西亞西南角，白色白堊土（Albariza）、強烈陽光與海洋微風，Sherry 的獨特風土。',
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
    type: 'map',
    title: 'Jumilla & Yecla 穆爾西亞高原',
    mapRegion: 'murcia',
    description: '內陸半乾旱高原，Monastrell 老藤在極端溫度下濃縮出結構豐厚的紅酒。',
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
    type: 'map',
    title: '巴倫西亞地中海產區',
    mapRegion: 'valencia',
    description: '地中海沿岸，從海岸到內陸山地，Bobal・Monastrell 等本土品種展現豐滿果味。',
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
    type: 'map',
    title: '加那利群島火山產區',
    mapRegion: 'canarias',
    description: '大西洋火山群島，古藤生長在黑色火山岩漿土壤，是歐洲少數未受根瘤蚜侵害的產區。',
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
    type: 'map',
    title: 'Rioja 三大子產區深度地形',
    mapRegion: 'rioja',
    description: 'Sierra Cantabria 山脈遮擋大西洋風雨，埃布羅河調節氣候，造就三個子產區的差異。',
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
    type: 'compare',
    title: '傳統 vs 現代 Rioja 詳細對比',
    items: [
      {
        icon: '🏺',
        label: '傳統風格（Tradicional）',
        desc: '代表：López de Heredia, CVNE Imperialなど 長期美國橡木桶（6-9 年）+ 後續瓶中熟成。顏色磚橙，透明。香氣：椰子、香草、皮革、煙燻。口感：輕盈優雅，酸度突出，單寧柔順絲滑',
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
    type: 'map',
    title: 'Rioja Alta 精緻核心地帶',
    mapRegion: 'rioja',
    description: '最西端、最涼爽的子產區，黏土石灰岩土壤，是 Rioja 傳統精緻陳年酒的搖籃。',
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
    type: 'map',
    title: 'Rioja Alavesa 現代精品地帶',
    mapRegion: 'rioja',
    description: '巴斯克自治區境內，白堊土石灰岩，個人酒莊（Vino de Garage）運動的發源地。',
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
    type: 'map',
    title: 'Rioja Oriental 溫暖寬廣地帶',
    mapRegion: 'rioja',
    description: '最東端、最溫暖乾燥，以 Garnacha 和 Viura 為主，果味豐滿、酒精偏高。',
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
    type: 'map',
    title: 'Cava 產區地理核心',
    mapRegion: 'catalonia',
    description: '雖遍布西班牙，但 85% 的 Cava 產自加泰羅尼亞 Penedès，Sant Sadurní d\u0027Anoia 是其心臟。',
  },

  {
    type: 'summary',
    message: '傳統法八步驟學習完成！',
    keyPoints: [
      '傳統法 = 瓶中二次發酵，密封 CO₂天然形成（6 atm 氣壓）',
      '酒泥陳年：酵母自溶 → 烤麵包、餅乾、奶油，時間越長越複雜',
      '搖瓶（Riddling）讓酒泥集中瓶口，冷凍 Disgorgement 噴出',
      'Dosage 記決定最終甜度（Brut Nature 零糖 → Demi-Sec 半甜）',
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
    type: 'map',
    title: 'Cava 葡萄品種產區分布',
    mapRegion: 'catalonia',
    description: 'Macabeo・Xarel·lo・Parellada 三大本土品種在加泰羅尼亞的地理分布。',
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
    type: 'quiz',
    question: '「Cava de Paraje Calificado」是 2017 年設立的最高等級，它的最低酒泥陳年時間是多少？',
    options: ['9 個月', '15 個月', '30 個月', '36 個月'],
    answer: 3,
    explanation: 'Cava de Paraje Calificado 是 Cava DO 體系中最嚴格的等級，要求酒泥陳年至少 36 個月，且必須是 Brut Nature（不添加任何 Dosage 糖液），來自單一認證莊園地塊，並需年份標示。',
  },
  {
    type: 'map',
    title: 'Cava DE 與精品 Cava 產區',
    mapRegion: 'catalonia',
    description: '新設立的 Cava de Paraje Calificado 單一產區和 Cava DE 等級，強調風土表達。',
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
      <p>同樣限制在 Penedès，也требует有機農法和傳統法，但標準略低於 Corpinnat。允許 Chardonnay 等品種。是官方 DO，有法規保障。</p>
      <h4>🤔 這對消費者意味著什麼？</h4>
      <p>在架上看到「Corpinnat」或「Clàssic Penedès」標籤，可以確信：這是來自 Penedès 核心、有機農法、高品質的精品氣泡酒，完全不同於量產 Cava。</p>
    `,
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
    type: 'map',
    title: 'Corpinnat & Clàssic Penedès 精品小農地帶',
    mapRegion: 'catalonia',
    description: '脫離 Cava DO 的頂級小農，在 Penedès 核心地帶釀造高品質傳統法氣泡酒。',
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
    type: 'map',
    title: 'Sherry 三角地帶',
    mapRegion: 'andalucia',
    description: 'Jerez-Xérès-Sherry、El Puerto de Santa María、Sanlúcar de Barrameda 構成的神聖三角。',
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
    type: 'map',
    title: 'Sherry 釀酒中心',
    mapRegion: 'andalucia',
    description: 'Jerez 城市周邊的酒莊區，Bodega 林立，索雷拉系統在此孕育數十年的複雜風味。',
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
    type: 'map',
    title: 'Manzanilla — Sanlúcar 海岸微氣候',
    mapRegion: 'andalucia',
    description: 'Sanlúcar de Barrameda 獨特的海洋微氣候，讓 Flor 酵母更活躍，創造最鹹鮮的 Manzanilla。',
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
    type: 'map',
    title: 'Toro & Cigales 西部產區',
    mapRegion: 'castilla-leon',
    description: '杜羅河上游，Toro 的 Tinta de Toro 和 Cigales 的粉紅酒，卡斯提亞-萊昂的另一面。',
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
    type: 'map',
    title: 'La Mancha — 世界最大 DO 高原',
    mapRegion: 'castilla-la-mancha',
    description: '綿延數百公里的卡斯提亞高原，Airén 白品種和 Cencibel（Tempranillo）的廣大疆域。',
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
    type: 'map',
    title: '阿拉貢 Garnacha 老藤產區',
    mapRegion: 'aragon',
    description: 'Campo de Borja・Cariñena・Calatayud，高海拔阿拉貢高原，世界最古老 Garnacha 老藤聚集地。',
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
      '大型 Foudre 桶中不接觸橡木，原汁鮮果韁美型',
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
    type: 'map',
    title: 'Albariza 白堊土地帶分布',
    mapRegion: 'andalucia',
    description: '反射陽光的白色白堊土（Albariza）是 Sherry 最佳風土的標誌，主要分布在三角地帶周邊。',
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
    type: 'quiz',
    question: 'Vega Sicilia Único 的旗艦紅酒混調中，除了 Tinto Fino（Tempranillo）之外，主要的輔助品種是什麼？',
    options: ['Garnacha', 'Cabernet Sauvignon', 'Monastrell', 'Mencía'],
    answer: 1,
    explanation: 'Vega Sicilia Único 以 Tinto Fino（Tempranillo 在 Ribera del Duero 的稱呼）為主（80-90%），搭配 Cabernet Sauvignon（10-20%）增添波爾多式結構和色素穩定性，這種「西班牙本土品種 + 法國品種」的哲學是 Vega Sicilia 自 1864 年以來的傳統。',
  },
  {
    type: 'map',
    title: 'Ribera del Duero 頂級名莊地帶',
    mapRegion: 'castilla-leon',
    description: 'Vega Sicilia・Pingus 的所在地，Burgos 省沿杜羅河的黃金地帶。',
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
    type: 'quiz',
    question: '1989 年在 Priorat 共同發起現代葡萄酒復興的五位先驅之一，René Barbier 最終創立了哪個著名酒莊？',
    options: ['L\'Ermita', 'Clos Erasmus', 'Clos Mogador', 'Costers del Siurana'],
    answer: 2,
    explanation: 'René Barbier（法國出生）是 1989 年 Priorat 復興的首要推動者，他最終創立了 Clos Mogador 酒莊，以宏偉架構和豐富黑果著稱。Álvaro Palacios 創立了 L\'Ermita，Daphne Glorian 創立了 Clos Erasmus，Carlos Pastrana 創立的是 Clos de l\'Obac（Costers del Siurana）。',
  },
  {
    type: 'map',
    title: 'Priorat 復興的核心地帶',
    mapRegion: 'catalonia',
    description: 'Alvaro Palacios 與 René Barbier 在 1989 年落腳的 Gratallops 村莊，Priorat 文藝復興的起點。',
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
    type: 'map',
    title: 'Rioja 名莊核心地帶',
    mapRegion: 'rioja',
    description: 'Haro（Rioja Alta）的酒莊區是世界最密集的百年酒莊聚集地，也是傳統 Rioja 的象徵。',
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
    type: 'map',
    title: '加利西亞頂級白酒名莊地帶',
    mapRegion: 'galicia',
    description: 'Rías Baixas 的 Val do Salnés 子產區，是最集中的 Albariño 精品白酒產地。',
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
  S2M1L1: S2M1L1_slides,     // Ribera del Duero
  S2M1L2: S2M1L2_slides,     // Rueda / Verdejo
  S2M1L3: S2M1L3_slides,     // Bierzo / Mencía
  S2M1L4: S2M1L4_slides,     // Navarra / Rosado
  S2M2L1: S2M2L1_slides,     // Rías Baixas / Albariño
  S2M2L2: S2M2L2_slides,     // Ribeiro / Valdeorras / Ribeira Sacra
  S2M2L3: S2M2L3_slides,     // 大西洋氣候與花崗岩土壤
  S2M3L1: S2M3L1_slides,     // Priorat DOCa
  S2M3L2: S2M3L2_slides,     // Montsant / Terra Alta / Empordà
  S2M3L3: S2M3L3_slides,     // Penedès / 白酒革命
  S2M4L1: S2M4L1_slides,     // Jerez / Sherry 入門
  S2M4L2: S2M4L2_slides,     // Jumilla & Yecla / Monastrell
  S2M4L3: S2M4L3_slides,     // Utiel-Requena / Bobal
  S2M4L4: S2M4L4_slides,     // Canarias / 火山古藤
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
