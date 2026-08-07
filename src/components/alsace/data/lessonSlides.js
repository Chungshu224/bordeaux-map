/**
 * 阿爾薩斯葡萄酒課程 — 投影片資料
 * 每個 lessonId 對應一組投影片陣列
 * 尚未製作的課程自動返回佔位投影片
 *
 * 資料來源：CIVA（Conseil Interprofessionnel des Vins d'Alsace）官方課程講義、
 * Alsace 葡萄酒課程筆記整理版（法文原文轉錄）
 */

// ───────────────────────────────────────────────────────────────
//  Level 1 投影片
// ───────────────────────────────────────────────────────────────

const AL1M1L1_slides = [
  {
    type: 'cover',
    icon: '🍇',
    gradient: 'linear-gradient(135deg, #2d6a4f, #52b788)',
    title: '為什麼學阿爾薩斯葡萄酒？產區概覽與特色',
    subtitle: 'Level 1 · 第一課',
    points: [
      { icon: '📍', label: '法國最小的大區', text: '8,280 平方公里，僅比科西嘉島略小' },
      { icon: '🏷️', label: '以品種命名', text: '全法國唯一傳統上以葡萄品種而非產地命名的 AOC' },
      { icon: '🥂', label: '幾乎全是白酒', text: '乾型、高酸、香氣奔放，是法國最獨特的白酒產區' },
    ],
  },
  {
    type: 'content',
    icon: '🗺️',
    title: '法國最小卻最獨特的葡萄酒大區',
    html: `
      <p>阿爾薩斯（Alsace）面積僅 <strong>8,280 平方公里</strong>（190 公里長、50 公里寬，佔法國本土面積 1.5%），是法國本土最小的行政區，比科西嘉島（8,680 平方公里）還小一些。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#eaf5ef;border-left:4px solid #2d6a4f;border-radius:0 10px 10px 0;padding:12px">
          <strong>📍 緯度位置</strong>：北緯 47°50′ 至 49°，幾乎位於葡萄栽培可行的最北界線。
        </div>
        <div style="background:#fefae0;border-left:4px solid #c9a227;border-radius:0 10px 10px 0;padding:12px">
          <strong>🌡️ 緩慢成熟的優勢</strong>：正因為地處偏北、生長季偏冷，葡萄成熟速度緩慢，得以完整保留天然香氣物質，賦予阿爾薩斯白酒細緻與清爽的雙重特質。
        </div>
      </div>
      <p style="margin-top:10px">地理上，阿爾薩斯位於法國東北角，東側與北側緊鄰德國邊境；葡萄園分布在孚日山脈（Massif Vosgien）東側與南側山麓，一路延伸至萊茵河沖積平原的邊緣。</p>
    `,
  },
  {
    type: 'compare',
    title: '阿爾薩斯的六大獨特之處',
    items: [
      { icon: '🏷️', label: '以品種命名', desc: '法國絕大多數 AOC 以產地命名，阿爾薩斯卻傳統上以葡萄品種命名酒款——這是全法國的特例', color: '#2d6a4f' },
      { icon: '🥂', label: '幾乎全是白酒', desc: '除 Pinot Noir 外幾乎不產紅酒；Pinot Noir 傳統上也多釀成粉紅酒，只有極佳年份才產優質紅酒', color: '#c9a227' },
      { icon: '🍾', label: 'Vin du Rhin 瓶型', desc: '法規強制規定使用細長的「萊茵酒瓶」（flûte），是全法國唯一有此強制瓶型規定的產區之一', color: '#1b4332' },
      { icon: '🏔️', label: '三層 AOC 架構', desc: 'Alsace → Alsace + 地理標示 → Alsace Grand Cru，層層遞進的分級邏輯', color: '#40241a' },
      { icon: '🇩🇪', label: '法德文化交融', desc: '歷史上多次在法國與德國之間易主，品種與釀酒傳統深受德國萊茵地區影響', color: '#7c4a2d' },
      { icon: '🌱', label: '10 個品種、13 種風土', desc: '一片小小的產區裡，容納了驚人的品種與地質多樣性', color: '#52b788' },
    ],
  },
  {
    type: 'content',
    icon: '📊',
    title: '2009 年產量結構一覽',
    html: `
      <p>以 2009 年的官方統計數據為例，能清楚看出阿爾薩斯的產業結構：</p>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:10px;text-align:center">
        <div style="background:#eaf5ef;border-radius:10px;padding:14px">
          <div style="font-size:1.4rem;font-weight:800;color:#2d6a4f">74.4%</div>
          <div style="font-size:0.85rem;color:#333">Alsace AOC<br/>868,330 hl</div>
        </div>
        <div style="background:#fefae0;border-radius:10px;padding:14px">
          <div style="font-size:1.4rem;font-weight:800;color:#c9a227">21.4%</div>
          <div style="font-size:0.85rem;color:#333">Crémant d'Alsace<br/>250,275 hl</div>
        </div>
        <div style="background:#f0e9e3;border-radius:10px;padding:14px">
          <div style="font-size:1.4rem;font-weight:800;color:#40241a">4.1%</div>
          <div style="font-size:0.85rem;color:#333">Alsace Grand Cru<br/>48,295 hl</div>
        </div>
      </div>
      <p style="margin-top:10px">總種植面積約 15,570 公頃（2009 年），由約 4,700 位葡萄農經營，其中 1,820 位（種植面積 2 公頃以上）就佔了全產區 90% 的種植面積——顯示阿爾薩斯以中小型家族酒莊為主的產業結構。</p>
    `,
  },
  {
    type: 'quiz',
    question: '阿爾薩斯的葡萄園雖然地處偏北、氣候偏冷，這對葡萄酒風格帶來什麼好處？',
    options: [
      '葡萄無法成熟，只能釀造氣泡酒',
      '成熟速度緩慢，讓葡萄得以完整保留天然香氣物質，賦予酒款細緻與清爽',
      '偏冷氣候讓葡萄糖度特別高',
      '沒有明顯好處，純粹是歷史因素造成',
    ],
    answer: 1,
    explanation: '阿爾薩斯緯度（47°50′–49°N）幾乎位於葡萄栽培的最北界線，正因如此，葡萄成熟速度緩慢，能完整保留天然香氣物質，造就阿爾薩斯白酒細緻香氣與清爽酸度並存的招牌風格。',
  },
  {
    type: 'summary',
    icon: '🍇',
    message: '阿爾薩斯產區概覽學習完成！你已經掌握了這個法國最獨特白酒產區的核心印象。',
    keyPoints: [
      '阿爾薩斯是法國本土面積最小的大區（8,280 平方公里），緯度接近葡萄栽培北界',
      '緩慢成熟賦予酒款細緻香氣與清爽酸度——這是阿爾薩斯風格的根本邏輯',
      '傳統上以品種命名酒款，是全法國 AOC 體系中的特例',
      '2009 年產量結構：Alsace AOC 74.4%、Crémant 21.4%、Grand Cru 4.1%',
      '以中小型家族酒莊為主：約 4,700 位葡萄農，90% 種植面積集中在 1,820 位 2 公頃以上的農戶手中',
    ],
  },
]

const AL1M1L2_slides = [
  {
    type: 'cover',
    icon: '🗺️',
    gradient: 'linear-gradient(135deg, #2d6a4f, #1b4332)',
    title: '地理位置與行政區劃：Bas-Rhin 與 Haut-Rhin',
    subtitle: 'Level 1 · 第二課',
    points: [
      { icon: '🏛️', label: '兩個省', text: 'Bas-Rhin（北，首府 Strasbourg）與 Haut-Rhin（南，首府 Colmar）' },
      { icon: '🌊', label: '萊茵河與 Ill 河', text: '產區地名 Alsace 就來自 Ill 河的古語意涵' },
      { icon: '📏', label: '狹長葡萄園帶', text: '南北延伸約 100 公里，加上一塊孤立飛地' },
    ],
  },
  {
    type: 'content',
    icon: '🏛️',
    title: '兩個省，南北分治',
    html: `
      <p>阿爾薩斯這個「大區」（Région）由兩個「省」（Département）組成，習慣上以地理位置區分：</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#eaf5ef;border-left:4px solid #2d6a4f;border-radius:0 10px 10px 0;padding:12px">
          <strong>🔵 Bas-Rhin（下萊茵省，67 號省）——北部</strong><br/>
          人口約 91.5 萬；首府 <strong>Strasbourg（史特拉斯堡）</strong>；主要城鎮包括 Haguenau、Molsheim、Saverne、Sélestat-Erstein、Wissembourg 等。
        </div>
        <div style="background:#fefae0;border-left:4px solid #c9a227;border-radius:0 10px 10px 0;padding:12px">
          <strong>🟡 Haut-Rhin（上萊茵省，68 號省）——南部</strong><br/>
          人口約 65 萬；首府 <strong>Colmar（科爾馬）</strong>；主要城鎮包括 Mulhouse、Altkirch、Guebwiller、Ribeauvillé、Thann 等。
        </div>
      </div>
      <p style="margin-top:10px">💡 記憶小訣竅：「Bas」（下）在北方、「Haut」（上）在南方，是因為兩省名稱源自萊茵河的「上游／下游」相對位置，而非地理方位上的高低——初學者常常搞混，需要特別留意。</p>
    `,
  },
  {
    type: 'content',
    icon: '🧭',
    title: '邊界與地形架構',
    html: `
      <ul style="padding-left:20px;line-height:1.8">
        <li><strong>東側與北側</strong>：以萊茵河（Rhin）與 Lauter 河為界，緊鄰德國——北接德國 Palatinat（普法爾茲），東隔萊茵河與德國 Bade-Wurtemberg（巴登－符騰堡）相望</li>
        <li><strong>南側</strong>：與 Franche-Comté（法蘭琪－康堤）接壤</li>
        <li><strong>西側</strong>：與 Lorraine（洛林）接壤</li>
        <li><strong>葡萄園分布</strong>：沿孚日山脈（Massif Vosgien）東側與南側山麓、萊茵沖積平原邊緣，呈狹長帶狀分布，海拔約 200–400 公尺，方位大致呈東北—西南走向</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: '兩條關鍵河流',
    items: [
      { icon: '🌊', label: 'Le Rhin（萊茵河）', desc: '全長約 1,320 公里，發源於瑞士阿爾卑斯山，最終注入北海；構成阿爾薩斯的東側天然邊界', color: '#2d6a4f' },
      { icon: '💧', label: "L'Ill（伊爾河）", desc: '萊茵河最重要的支流，全長 208 公里，發源自阿爾薩斯侏羅山區，流經 Altkirch、Mulhouse、Sélestat、Strasbourg——「Alsace」（Elsass）這個地名，語源就來自古語「Ill 河流經之地」', color: '#c9a227' },
    ],
  },
  {
    type: 'content',
    icon: '📐',
    title: '狹長葡萄園帶與孤立飛地',
    html: `
      <p>阿爾薩斯葡萄園整體呈南北狹長帶狀，從南端的 <strong>Thann</strong> 一路延伸到北端的 <strong>Marlenheim</strong> 與 <strong>Nordheim</strong>，全長約 100 公里。</p>
      <p style="margin-top:8px">此外，在 Bas-Rhin 最北端、緊鄰德國邊境的 <strong>Wissembourg</strong> 一帶，還有一塊寬約 2 公里的孤立飛地——這就是 <strong>Cléebourg 產區</strong>，與阿爾薩斯主要葡萄園帶相距約 90 公里，是全阿爾薩斯地理上最特殊的角落（將在 Level 2 深入介紹）。</p>
    `,
  },
  {
    type: 'quiz',
    question: '「Alsace」這個地名的語源，最直接和以下哪一項有關？',
    options: [
      '古代凱爾特部落的名稱',
      'Ill 河——古語意為「Ill 河流經之地」',
      '萊茵河的德語發音轉譯',
      '中世紀某位領主的姓氏',
    ],
    answer: 1,
    explanation: 'Alsace 源自古語 Elsass：El- 來自阿勒曼尼語 Ell，指的是縱貫阿爾薩斯南北、最終注入萊茵河的 Ill 河；-sass 則來自古語動詞「坐落、位於」。合起來 Elsass 字面意義就是「Ill 河流經之地」（Pays de l\'Ill）。',
  },
  {
    type: 'summary',
    message: '地理位置與行政區劃學習完成！',
    keyPoints: [
      '阿爾薩斯由兩省組成：Bas-Rhin（北，首府 Strasbourg）與 Haut-Rhin（南，首府 Colmar）',
      '「Bas」在北、「Haut」在南——源自萊茵河上下游相對位置，不是地理高低',
      '東側與北側緊鄰德國（隔萊茵河與 Lauter 河），南接 Franche-Comté，西接 Lorraine',
      'Alsace 地名語源：來自 Ill 河（萊茵河最重要支流）——「Ill 河流經之地」',
      '葡萄園呈南北狹長帶狀（Thann 至 Marlenheim，約 100 公里），另有 Cléebourg 孤立飛地',
    ],
  },
]

const AL1M1L3_slides = [
  {
    type: 'cover',
    icon: '📜',
    gradient: 'linear-gradient(135deg, #40241a, #7c4a2d)',
    title: '歷史：從羅馬時代到 1945 年的現代化之路',
    subtitle: 'Level 1 · 第三課',
    points: [
      { icon: '🏛️', label: '古老起源', text: '種植歷史可追溯至羅馬時期，中世紀因教會而興盛' },
      { icon: '⚔️', label: '反覆易主', text: '1871、1918、1940、1945——四次國籍變動深刻形塑了阿爾薩斯' },
      { icon: '🎓', label: '現代化建制', text: '1945 年後，一連串法規逐步建立起今日的品質架構' },
    ],
  },
  {
    type: 'content',
    icon: '🏛️',
    title: '從羅馬到中世紀的興盛',
    html: `
      <ul style="padding-left:20px;line-height:1.8">
        <li>阿爾薩斯葡萄種植的起源已不可考，但可追溯至<strong>羅馬征服時期</strong>——當時的栽培技術可能源自納博訥地區（Narbonnaise）</li>
        <li>5 世紀日耳曼民族入侵一度造成葡萄園衰退，但隨後在<strong>主教區、修道院與教會</strong>的推動下迅速復興</li>
        <li><strong>962–1648 年</strong>：阿爾薩斯屬於神聖羅馬帝國，葡萄種植持續擴張，於 15–16 世紀達到高峰——今日許多葡萄園村莊仍保留著見證當年繁榮的文藝復興風格建築</li>
        <li><strong>1481 年</strong>：出口量超過 60 萬公升，阿爾薩斯酒行銷整個北歐</li>
        <li><strong>三十年戰爭（1618–1648）</strong>：戰亂、掠奪、飢荒與瘟疫，對葡萄園與整體經濟造成毀滅性打擊</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '⚔️',
    title: '1871–1945：反覆易主的動盪年代',
    html: `
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
        <div style="background:#f0e9e3;border-radius:8px;padding:10px 14px"><strong>1871 年</strong>：普法戰爭後阿爾薩斯併入德國。德國當局為避免阿爾薩斯酒與萊茵河對岸的德國酒競爭，反而<strong>鼓勵過度加糖（gallisation）與加水（最高可達 20%）</strong>的低品質量產做法。</div>
        <div style="background:#f0e9e3;border-radius:8px;padding:10px 14px"><strong>1871–1918 年</strong>：生產過剩、啤酒消費增加導致出口市場流失、南方葡萄酒隨鐵路大量輸入競爭、根瘤蚜與真菌病害蔓延——多重打擊接踵而至。</div>
        <div style="background:#f0e9e3;border-radius:8px;padding:10px 14px"><strong>1918 年</strong>：第一次世界大戰結束，阿爾薩斯重返法國，但葡萄園已幾近荒廢——1901 至 1908 年間平均產量僅約 6 hl/ha；1942 年時雜交品種仍佔種植面積 33%。</div>
        <div style="background:#f0e9e3;border-radius:8px;padding:10px 14px"><strong>1940–1945 年</strong>：二戰期間再度被納粹德國併吞，1945 年解放、重返法國。</div>
      </div>
      <p style="margin-top:10px">💡 正是戰後葡萄農們「選擇成為優質白酒生產者」的集體意志，才讓今日的阿爾薩斯脫胎換骨，成為法國最重要的白酒產區之一。</p>
    `,
  },
  {
    type: 'content',
    icon: '📋',
    title: '1945 年後：現代品質架構的建立',
    html: `
      <p>戰後短短數十年間，一連串法規陸續建立起今日阿爾薩斯的品質體系：</p>
      <div style="display:flex;flex-direction:column;gap:6px;margin-top:8px">
        <div style="background:#eaf5ef;border-radius:8px;padding:8px 14px"><strong>1945 年</strong> — 頒布關於阿爾薩斯葡萄酒的臨時法令</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:8px 14px"><strong>1962 年</strong> — 正式取得 AOC 認證地位</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:8px 14px"><strong>1963 年</strong> — 成立 CIVA（阿爾薩斯葡萄酒跨業公會）</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:8px 14px"><strong>1972 年</strong> — 規定所有阿爾薩斯酒必須在原產地裝瓶</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:8px 14px"><strong>1975 年</strong> — 頒布法令，正式創設 Alsace Grand Cru 分級</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:8px 14px"><strong>1983 年</strong> — 首批 25 個 Grand Cru 地塊劃定</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:8px 14px"><strong>1984 年</strong> — VT（Vendanges Tardives）與 SGN（Sélection de Grains Nobles）貴腐甜酒等級正式命名</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:8px 14px"><strong>1992 年</strong> — 再劃定 25 個 Grand Cru，累計達 50 個</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:8px 14px"><strong>2007 年</strong> — 第 51 個 Grand Cru「Kaefferkopf」劃定，也是唯一一個從一開始就允許混釀的 Grand Cru</div>
      </div>
    `,
  },
  {
    type: 'quiz',
    question: '1871 年德國統治阿爾薩斯期間，為什麼鼓勵當地酒莊採用過度加糖與加水的量產做法？',
    options: [
      '因為當時葡萄糖分普遍不足，不得不加糖',
      '為了避免阿爾薩斯酒的品質與萊茵河對岸的德國酒競爭',
      '這是法國政府留下的舊規定',
      '因為戰爭導致葡萄欠收，需要增量',
    ],
    answer: 1,
    explanation: '1871 年後阿爾薩斯併入德國，德國當局刻意鼓勵過度加糖（gallisation）與加水（最高 20%）的量產做法，目的是讓阿爾薩斯酒維持低品質、大量生產，以避免與萊茵河對岸的德國酒形成直接的品質競爭。',
  },
  {
    type: 'summary',
    message: '阿爾薩斯歷史學習完成！',
    keyPoints: [
      '葡萄種植可追溯至羅馬時期，中世紀因教會（主教區、修道院）推動而興盛',
      '1871–1945 年間歷經德國統治、一戰後重返法國、二戰再度被併吞、1945 解放——四度易主深刻形塑產區性格',
      '戰後葡萄農的集體意志，讓阿爾薩斯從荒廢走向優質白酒產區',
      '關鍵年份：1962 AOC、1963 CIVA 成立、1975 Grand Cru 法令、1984 VT/SGN 命名、1983+1992 共 50 個 Grand Cru、2007 第 51 個（Kaefferkopf）',
    ],
  },
]

const AL1M1L4_slides = [
  {
    type: 'cover',
    icon: '🌡️',
    gradient: 'linear-gradient(135deg, #2d6a4f, #74c69d)',
    title: '氣候：10 個氣候帶與逆溫層現象',
    subtitle: 'Level 1 · 第四課',
    points: [
      { icon: '🏔️', label: '孚日山屏障', text: '阻擋大西洋西風，讓阿爾薩斯成為法國最乾燥的產區之一' },
      { icon: '🌫️', label: '逆溫層現象', text: '山坡比平原更溫暖——這是阿爾薩斯獨有的地形氣候特徵' },
      { icon: '☀️', label: '半大陸型氣候', text: '晝夜溫差大，有利於保留香氣與酸度' },
    ],
  },
  {
    type: 'content',
    icon: '🗺️',
    title: '10 個氣候帶，南北各異',
    html: `
      <p>阿爾薩斯葡萄園南北狹長，官方將其細分為 <strong>10 個地理氣候帶</strong>（由北至南編號 1 至 10），反映出即使在這片小小的產區內，微氣候差異也十分顯著——這也是理解各產區風格差異的基礎。</p>
    `,
  },
  {
    type: 'content',
    icon: '🌡️',
    title: '兩大熱力學特徵',
    html: `
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:6px">
        <div style="background:#fefae0;border-left:4px solid #c9a227;border-radius:0 10px 10px 0;padding:12px">
          <strong>① 溫度劇烈變化</strong><br/>
          日夜溫差可達 <strong>15°C</strong>，有助於葡萄同時累積糖分與保留天然酸度。
        </div>
        <div style="background:#eaf5ef;border-left:4px solid #2d6a4f;border-radius:0 10px 10px 0;padding:12px">
          <strong>② 逆溫層現象（Inversion des températures）</strong><br/>
          當冷空氣、霧氣與雲層滯留在萊茵平原時，孚日山麓的丘陵地帶反而享有<strong>晴朗溫暖</strong>的天氣。丘陵中段到山腰處會形成一條「暖帶」，氣溫比上下兩側高出 <strong>1–1.5°C</strong>，夜間降溫幅度也較平原和緩——這條暖帶通常出現在坡度最陡的地段，正是許多頂級 Grand Cru 選址的關鍵原因之一。
        </div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '💧',
    title: '孚日山的雨影效應：全法國最乾燥的產區之一',
    html: `
      <p>阿爾薩斯並非不受大西洋氣候影響（盛行西風），但<strong>孚日山脈（Vosges）大幅削弱了這股濕潤氣流</strong>，加上北風與焚風（Foehn）效應，造就了阿爾薩斯獨特的半大陸型氣候。</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px;text-align:center">
        <div style="background:#eaf5ef;border-radius:10px;padding:14px">
          <div style="font-size:1.3rem;font-weight:800;color:#2d6a4f">600–700 mm</div>
          <div style="font-size:0.85rem;color:#333">阿爾薩斯平均年雨量</div>
        </div>
        <div style="background:#fefae0;border-radius:10px;padding:14px">
          <div style="font-size:1.3rem;font-weight:800;color:#c9a227">約 500 mm</div>
          <div style="font-size:0.85rem;color:#333">Colmar 一帶（與法國南部 Montpellier 相當）</div>
        </div>
      </div>
      <p style="margin-top:10px">降雨主要集中於溫暖季節——春季與夏季雷暴，且需留意冰雹風險。這種乾燥、日照充足的氣候條件，正是阿爾薩斯得以孕育出濃郁香氣與貴腐甜酒（VT／SGN）的重要基礎。</p>
    `,
  },
  {
    type: 'quiz',
    question: 'Colmar 一帶年雨量僅約 500mm，與法國哪個著名的乾燥地區相當？這是什麼原因造成的？',
    options: [
      '與地中海沿岸的 Montpellier 相當，因為孚日山脈阻擋了大西洋西風的雨影效應',
      '與 Rioja 相當，因為地處內陸盆地',
      '與 Champagne 相當，因為白堊土壤排水良好',
      '這是氣候變遷造成的近年異常現象',
    ],
    answer: 0,
    explanation: 'Colmar 一帶年雨量僅約 500mm，與地中海沿岸的 Montpellier 相當——這並非因為氣候溫暖乾燥，而是因為孚日山脈（Vosges）阻擋了大西洋盛行西風帶來的水氣，形成顯著的雨影效應（rain shadow），造就阿爾薩斯成為法國最乾燥的產區之一。',
  },
  {
    type: 'summary',
    message: '阿爾薩斯氣候學習完成！',
    keyPoints: [
      '產區細分為 10 個氣候帶（北至南編號 1–10），反映顯著的微氣候差異',
      '兩大熱力特徵：日夜溫差可達 15°C；逆溫層現象讓丘陵坡地比平原更溫暖（暖帶效應 +1–1.5°C）',
      '孚日山脈阻擋大西洋西風，是阿爾薩斯成為法國最乾燥產區之一的關鍵（Colmar 一帶僅約 500mm，堪比 Montpellier）',
      '乾燥、日照充足的秋季氣候，是孕育 VT／SGN 貴腐甜酒的重要基礎',
    ],
  },
]

const AL1M2L1_slides = [
  {
    type: 'cover',
    icon: '⛰️',
    gradient: 'linear-gradient(135deg, #1b4332, #52b788)',
    title: '三大地形：孚日山麓・丘陵・萊茵平原',
    subtitle: 'Level 1 · 第五課',
    points: [
      { icon: '🏔️', label: '孚日山與黑森林曾是一體', text: '五千萬年前地殼斷陷，才形成今日的萊茵裂谷地形' },
      { icon: '🗻', label: '斷層造就地質多樣性', text: '孚日斷層與萊茵斷層是理解阿爾薩斯風土的鑰匙' },
      { icon: '📊', label: '三大地形帶', text: '山麓・丘陵・平原——各有截然不同的土壤與微氣候' },
    ],
  },
  {
    type: 'content',
    icon: '🌋',
    title: '五千萬年前的地質劇變',
    html: `
      <p>五千萬年前，孚日山脈（Vosges）與德國的黑森林（Forêt Noire）原本是同一塊完整的山體。從第三紀開始，這塊山體的中段逐漸陷落，經過漫長的地質年代，才形成了今日的萊茵平原（裂谷）。</p>
      <p style="margin-top:8px">這場地殼運動的結果，是幾乎所有不同地質年代堆積的岩層，都在斷裂帶邊緣重新裸露出來——<strong>而阿爾薩斯的葡萄園，正好就座落在這條斷裂帶上</strong>。這正是阿爾薩斯多數葡萄酒村莊，往往同時擁有 4、5 種截然不同地層組成的根本原因。</p>
      <p style="margin-top:8px">兩條主要斷層線構成了這片土地的骨架：<strong>孚日斷層</strong>（結晶岩山體的邊界）與<strong>萊茵斷層</strong>（其外側即為萊茵河沖積層）。</p>
    `,
  },
  {
    type: 'compare',
    title: '三大地形結構比較',
    items: [
      {
        icon: '🏔️',
        label: 'A. 山麓地帶（Rebord de la montagne）',
        desc: '以矽質岩石為主，排水與日照是關鍵。海拔 250–360m，坡度可達 65%（因而發展出梯田），土層薄（約 30cm，除坡底沖積處外）。南段以結晶岩與早期沉積為主，北段（Saverne 一帶）則是砂岩地質。',
        color: '#2d6a4f',
      },
      {
        icon: '🏞️',
        label: 'B. 孚日下丘陵（Collines sous-vosgiennes）',
        desc: '以石灰岩為主，是氣候條件的「最佳平衡點」（optimum climatique）。海拔 200–360m，坡度約 25%，土層較厚（0.5–2m）。主要集中在 Dambach 到 Marlenheim 之間的帶狀區域，是阿爾薩斯多數頂級葡萄園的所在地。',
        color: '#c9a227',
      },
      {
        icon: '🌾',
        label: 'C. 萊茵沖積平原（Plaine alluviale du Rhin）',
        desc: '土壤水分保持能力是關鍵指標——因為地層較年輕、發育程度較淺。海拔 170–220m，坡度平緩，土層深厚均勻，得益於逕流沖積帶來的良好水分特性，加上日照時數較長。',
        color: '#40241a',
      },
    ],
  },
  {
    type: 'quiz',
    question: '阿爾薩斯許多葡萄酒村莊，為何常常同時擁有 4、5 種截然不同的地層組成？',
    options: [
      '因為人工填土造成的結果',
      '五千萬年前孚日山與黑森林一體斷陷，讓不同地質年代的岩層在斷裂帶邊緣同時裸露出來，而葡萄園正好座落在這條斷裂帶上',
      '因為萊茵河多次改道帶來不同泥沙',
      '這只是少數幾個特例村莊的現象',
    ],
    answer: 1,
    explanation: '五千萬年前孚日山與黑森林原本一體，第三紀開始中段陷落形成萊茵平原。這場地殼運動讓不同地質年代累積的岩層在斷裂帶邊緣重新裸露，而阿爾薩斯的葡萄園正好座落在這條斷裂帶上，因此多數葡萄酒村莊會同時擁有多種不同地層組成——這是理解阿爾薩斯風土多樣性的根本起點。',
  },
  {
    type: 'summary',
    message: '三大地形學習完成！',
    keyPoints: [
      '孚日山與黑森林原為一體，第三紀地殼陷落形成今日的萊茵平原（裂谷）',
      '孚日斷層與萊茵斷層是理解阿爾薩斯地質的兩條關鍵線索',
      '三大地形帶：山麓（矽質岩、陡坡梯田）、孚日下丘陵（石灰岩、氣候最佳平衡點）、萊茵沖積平原（水分保持力關鍵）',
      '孚日下丘陵是阿爾薩斯多數頂級葡萄園的所在地，主要集中於 Dambach 至 Marlenheim 之間',
    ],
    nextLesson: '下一課：土壤大觀',
  },
]

const AL1M2L2_slides = [
  {
    type: 'cover',
    icon: '🪨',
    gradient: 'linear-gradient(135deg, #7c4a2d, #c9a227)',
    title: '土壤大觀：石灰岩・板岩・花崗岩・黏土',
    subtitle: 'Level 1 · 第六課',
    points: [
      { icon: '🧱', label: '土壤多樣性', text: '阿爾薩斯最鮮明的產區特徵，來自驚人的土壤多樣性' },
      { icon: '🍇', label: '土壤 × 品種', text: '特定土壤能讓特定品種展現最佳風格' },
      { icon: '🏆', label: '十大地質族群', text: '51 個 Grand Cru 依地質可分為十大族群（Level 2 深入介紹）' },
    ],
  },
  {
    type: 'content',
    icon: '🏔️',
    title: '山麓地帶的土壤類型',
    html: `
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
        <div style="background:#f5f5f5;border-radius:8px;padding:10px 14px"><strong>花崗岩／片麻岩terroir</strong> → 沖積坡積土、酸性至淋溶棕色土（arènes granitiques 肥沃砂質風化層）</div>
        <div style="background:#f5f5f5;border-radius:8px;padding:10px 14px"><strong>片岩 terroir</strong> → 棕色、多石、黏質土</div>
        <div style="background:#f5f5f5;border-radius:8px;padding:10px 14px"><strong>火山沉積 terroir</strong> → 富含肥沃元素的多樣化棕化土</div>
        <div style="background:#f5f5f5;border-radius:8px;padding:10px 14px"><strong>砂岩 terroir</strong> → 淋溶棕色土至灰化土（podzol），砂質、輕薄、貧瘠</div>
      </div>
      <p style="margin-top:10px">💡 <strong>Podzol（灰化土）</strong>是一種特徵鮮明的貧瘠土壤：表層為腐植質層，其下為灰白色富矽層，再下方則是黑色（腐植質）與鐵鏽色（鐵質）交錯的堆積層。</p>
    `,
  },
  {
    type: 'content',
    icon: '🏞️',
    title: '孚日下丘陵的土壤類型',
    html: `
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
        <div style="background:#eaf5ef;border-radius:8px;padding:10px 14px"><strong>石灰岩 terroir</strong> → 棕化的黑色石灰性殘積土（rendzine）</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:10px 14px"><strong>灰砂岩 terroir</strong> → 棕色、多石而乾燥的土壤</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:10px 14px"><strong>黏質泥灰岩 terroir</strong> → 厚重、排水不良但肥沃度佳</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:10px 14px"><strong>泥灰石灰岩 terroir</strong> → 紅棕化 rendzine，對葡萄種植極為有利</div>
      </div>
      <p style="margin-top:10px">這類土壤中有一種特殊的「灰砂岩」（calcaro-gréseux）較為罕見，礦物質含量適中偏低——正是這種相對貧瘠的特性，能讓 <strong>Sylvaner 展現優雅緊實的骨架</strong>，也能讓 <strong>Gewurztraminer 發展出漂亮的結構感</strong>，成酒往往帶有討喜的熱帶水果調性。</p>
    `,
  },
  {
    type: 'content',
    icon: '🌾',
    title: '萊茵平原的土壤：Loess 與 Lehm',
    html: `
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
        <div style="background:#fefae0;border-radius:8px;padding:10px 14px"><strong>Loess（黃土）</strong>：風力堆積的碎屑沉積物，顆粒極細（小於 62 微米），由砂、黏土與石灰質組成，肥沃度極高。</div>
        <div style="background:#fefae0;border-radius:8px;padding:10px 14px"><strong>Lehm</strong>：脫鈣後呈棕色的黃土層（位於黃土層上部），形成棕色石灰質土壤與擬石灰性殘積土（pararendzine）。</div>
        <div style="background:#fefae0;border-radius:8px;padding:10px 14px"><strong>沖積土 terroir</strong>：黏質砂土、多礫石、發育程度較淺；部分地區呈現偽潛育化（pseudogley）——因地下水長期滯留形成的酸性棕色土。</div>
      </div>
    `,
  },
  {
    type: 'quiz',
    question: '相對貧瘠的灰砂岩（calcaro-gréseux）土壤，特別能讓哪兩個品種展現出色的風格？',
    options: [
      'Riesling 與 Pinot Noir',
      'Sylvaner（優雅緊實骨架）與 Gewurztraminer（漂亮結構感）',
      'Chardonnay 與 Pinot Blanc',
      'Muscat 與 Auxerrois',
    ],
    answer: 1,
    explanation: '灰砂岩土壤礦物質含量適中偏低，屬於相對貧瘠的類型，這樣的特性能讓 Sylvaner 發展出優雅緊實的骨架、讓 Gewurztraminer 展現漂亮的結構感，成酒往往還會帶有討喜的熱帶水果調性。',
  },
  {
    type: 'summary',
    message: '土壤大觀學習完成！',
    keyPoints: [
      '山麓地帶：花崗岩／片麻岩、片岩、火山沉積、砂岩（貧瘠的 podzol 灰化土）',
      '孚日下丘陵：石灰岩、灰砂岩（利於 Sylvaner／Gewurztraminer）、黏質泥灰岩、泥灰石灰岩',
      '萊茵平原：Loess 黃土（極肥沃）、Lehm、沖積土（偶有偽潛育化現象）',
      '51 個 Grand Cru 依地質可歸納為十大族群，是 Level 2 深入探索的核心主題',
    ],
    nextLesson: '下一課：為什麼阿爾薩斯幾乎只產白酒？',
  },
]

const AL1M2L3_slides = [
  {
    type: 'cover',
    icon: '🥂',
    gradient: 'linear-gradient(135deg, #2d6a4f, #c9a227)',
    title: '為什麼阿爾薩斯幾乎只產白酒？',
    subtitle: 'Level 1 · 第七課',
    points: [
      { icon: '🌡️', label: '偏冷氣候', text: '有利白葡萄保留香氣與酸度，紅葡萄難以完全成熟' },
      { icon: '🍾', label: '強制瓶型規定', text: '法規要求使用「Vin du Rhin」萊茵酒瓶——全法特例' },
      { icon: '🏷️', label: '以品種命名的傳統', text: '不同於法國多數以產地命名的 AOC 邏輯' },
    ],
  },
  {
    type: 'content',
    icon: '🌡️',
    title: '氣候決定了品種的命運',
    html: `
      <p>阿爾薩斯偏北、偏冷的半大陸型氣候，天生就對<strong>白葡萄品種</strong>更為友善——白葡萄不需要如黑葡萄般高的糖分與單寧成熟度，反而受益於緩慢成熟帶來的高酸度與精緻香氣。</p>
      <p style="margin-top:8px">阿爾薩斯種植約十個 <em>Vitis vinifera</em> 品種，不論品種本身是白、紅或粉紅，<strong>絕大多數都被釀成白酒</strong>——唯一的例外是 <strong>Pinot Noir</strong>，傳統上多半被釀成粉紅酒，只有極少數特別優異的年份，才能釀出真正優質的紅酒。</p>
    `,
  },
  {
    type: 'content',
    icon: '🍾',
    title: '強制瓶型：Vin du Rhin',
    html: `
      <p>阿爾薩斯法規明文規定，所有阿爾薩斯葡萄酒<strong>必須使用「Vin du Rhin」型細長酒瓶（flûte）</strong>裝瓶，不得使用其他瓶型——這在全法國 AOC 體系中相當罕見。</p>
      <p style="margin-top:8px">值得注意的細節：容量 100cl 的萊茵型長瓶，只能用於「不標示品種」的酒款，或是專門標示為 <strong>Chasselas（Gutedel）、Sylvaner、Pinot（Klevner）、Riesling</strong> 其中之一的酒款。</p>
    `,
  },
  {
    type: 'content',
    icon: '🏷️',
    title: '以品種為名：阿爾薩斯的酒標哲學',
    html: `
      <p>法國絕大多數 AOC 體系，酒標上標示的是產地或村莊名稱（如 Chablis、Margaux），品種反而經常隱而不顯。<strong>阿爾薩斯正好相反</strong>——傳統上，酒瓶上標示的是釀造這瓶酒的葡萄品種名稱，而非地名。</p>
      <p style="margin-top:8px">不過，隨著風土（terroir）觀念日益受到重視，這個傳統也正在演變：當一瓶酒屬於劃定的 <strong>Alsace Grand Cru</strong> 產區時，酒標上就會同時標示該特定地塊（lieu-dit）的名稱——這正是阿爾薩斯「品種傳統」與「風土精神」逐漸融合的縮影。</p>
    `,
  },
  {
    type: 'quiz',
    question: '阿爾薩斯的酒標傳統，和法國絕大多數 AOC 體系相比，最主要的差異是什麼？',
    options: [
      '阿爾薩斯酒標上完全不能出現地名',
      '阿爾薩斯傳統上以葡萄品種命名酒款，而非產地或村莊名稱；法國多數 AOC 則以產地命名',
      '阿爾薩斯是唯一允許混釀的法國產區',
      '阿爾薩斯酒標不需要標示年份',
    ],
    answer: 1,
    explanation: '法國絕大多數 AOC 以產地或村莊名稱命名酒款（如 Chablis、Margaux），品種常隱而不顯；阿爾薩斯傳統上恰恰相反，酒標上標示的是葡萄品種名稱。隨著風土觀念抬頭，Alsace Grand Cru 產區的酒款則會額外標示特定地塊（lieu-dit）名稱，呈現品種傳統與風土精神的融合。',
  },
  {
    type: 'summary',
    message: '本課學習完成！',
    keyPoints: [
      '偏冷氣候讓阿爾薩斯天生對白葡萄品種更友善，紅葡萄（Pinot Noir）多半只能釀成粉紅酒',
      '法規強制規定使用「Vin du Rhin」萊茵酒瓶，是全法國 AOC 體系中的特例',
      '阿爾薩斯傳統上以品種命名酒款，與法國多數以產地命名的邏輯相反',
      'Grand Cru 產區的酒款會額外標示地塊名稱，呈現「品種傳統」與「風土精神」的融合',
    ],
    nextLesson: '下一課：Riesling — 阿爾薩斯之王',
  },
]

const AL1M3L1_slides = [
  {
    type: 'cover',
    icon: '👑',
    gradient: 'linear-gradient(135deg, #2d6a4f, #74c69d)',
    title: 'Riesling — 阿爾薩斯之王',
    subtitle: 'Level 1 · 第八課',
    points: [
      { icon: '📈', label: '種植面積第一', text: '佔阿爾薩斯總種植面積 21.68%，是最重要的品種' },
      { icon: '🍋', label: '風格', text: '乾型、高酸、礦石感——「阿爾薩斯酒中之王」' },
      { icon: '🐟', label: '陳年潛力', text: '頂級 Riesling 有極佳的陳年能力' },
    ],
  },
  {
    type: 'content',
    icon: '📜',
    title: '不是德國 Riesling 的親戚',
    html: `
      <p>阿爾薩斯的 Riesling 於 <strong>15 世紀</strong>引入，據信源自法國奧爾良地區（Orléanais）——這一點值得特別留意：<strong>儘管同名，阿爾薩斯 Riesling 與德國萊茵地區的 Riesling 並無直接血緣關係</strong>，兩者風格也頗有差異。</p>
      <p style="margin-top:8px">Riesling 是阿爾薩斯萊茵河岸最具代表性的品種，被公認為<strong>整個阿爾薩斯產區最高貴、最精緻的品種</strong>——目前佔全產區種植面積 <strong>21.68%</strong>，是種植最廣的品種。</p>
    `,
  },
  {
    type: 'content',
    icon: '🍇',
    title: '晚熟且獨特的成熟模式',
    html: `
      <ul style="padding-left:20px;line-height:1.8">
        <li><strong>成熟期</strong>：屬於晚熟品種（2e époque tardive），產量不穩定（46–78 hl/ha），一般條件下天然酒精度約 10.7°–12.1°</li>
        <li><strong>獨特特性</strong>：即使在相對低溫的環境下，Riesling 仍能持續成熟——這使它特別適合阿爾薩斯偏冷的氣候條件</li>
        <li><strong>果串與果粒</strong>：小型圓柱錐狀、緊密的果串；果粒小而圓，呈淺綠至金黃色，風味細緻而芬芳</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🍷',
    title: '酒款風格與餐酒搭配',
    html: `
      <p><strong>風格</strong>：乾型、酸度活潑、風骨清晰高貴——阿爾薩斯人稱之為「roi des vins d'Alsace」（阿爾薩斯酒中之王）。優質 Riesling 講求酸度與果香之間的和諧平衡，並依產地展現或多或少的礦石調性；頂級 Riesling 具備出色的陳年潛力。</p>
      <p style="margin-top:8px"><strong>餐酒搭配</strong>：香煎或醬汁魚類（Ill 河燉魚、藍鱒魚、奶油醬汁梭鱸、南特奶油醬煎魟魚翅）、甲殼類、生蠔、干貝、貝類海鮮拼盤、煙燻鮭魚，以及經典的阿爾薩斯酸菜（choucroute alsacienne）。</p>
    `,
  },
  {
    type: 'quiz',
    question: '阿爾薩斯的 Riesling 有什麼獨特的成熟特性，讓它特別適應偏冷的產區氣候？',
    options: [
      '它需要極高溫才能成熟，因此只能種在向陽坡地',
      '即使在相對低溫的環境下仍能持續成熟',
      '它是所有品種中最早熟的，能避開秋季低溫',
      '它完全不受氣溫影響，任何條件下都能成熟',
    ],
    answer: 1,
    explanation: '阿爾薩斯 Riesling 屬於晚熟品種，且有一項獨特特性：即使在相對低溫的環境下，仍能持續進行成熟——這項特性讓它特別適應阿爾薩斯偏冷的半大陸型氣候，也是它能佔全產區種植面積 21.68%、成為「阿爾薩斯酒中之王」的重要原因。',
  },
  {
    type: 'summary',
    message: 'Riesling 學習完成！',
    keyPoints: [
      '15 世紀引入自法國奧爾良地區，與德國 Riesling 並無直接血緣關係',
      '佔阿爾薩斯總種植面積 21.68%，是種植最廣的品種，被稱為「阿爾薩斯酒中之王」',
      '晚熟品種，獨特之處在於低溫下仍能持續成熟',
      '風格：乾型、高酸、礦石感、陳年潛力佳；經典搭配為魚類料理與阿爾薩斯酸菜',
    ],
    nextLesson: '下一課：Gewurztraminer — 玫瑰荔枝的華麗',
  },
]

const AL1M3L2_slides = [
  {
    type: 'cover',
    icon: '🌹',
    gradient: 'linear-gradient(135deg, #c9a227, #e07a5f)',
    title: 'Gewurztraminer — 玫瑰荔枝的華麗',
    subtitle: 'Level 1 · 第九課',
    points: [
      { icon: '🌸', label: '風味標誌', text: '玫瑰、荔枝、辛香調性，全球辨識度最高的品種之一' },
      { icon: '📜', label: '悠久歷史', text: '1551 年即有文獻記載' },
      { icon: '🍯', label: '常帶微甜', text: '即使標示為 sec，也常保留些許殘糖以平衡風味' },
    ],
  },
  {
    type: 'content',
    icon: '📜',
    title: 'Savagnin 家族的芳香玫瑰紅變種',
    html: `
      <p>Gewurztraminer 是 <strong>Savagnin Blanc 的芳香型玫瑰色變種</strong>，起源眾說紛紜，但普遍認為是帶有麝香特徵的 Traminer 選種而來。阿爾薩斯早在 <strong>1551 年</strong>就有文獻記載此品種（植物學家 Bock 的《Kreuterbuch》一書）。</p>
      <p style="margin-top:8px">此品種還有一個<strong>非芳香型</strong>的變種——在阿爾薩斯稱為「Heiligensteiner Klevener」，即今日的 <strong>Klevener de Heiligenstein</strong>，是僅限單一村莊的獨立 AOC（Level 2 深入介紹）。</p>
    `,
  },
  {
    type: 'content',
    icon: '🍇',
    title: '果實特徵與栽培特性',
    html: `
      <ul style="padding-left:20px;line-height:1.8">
        <li><strong>果串</strong>：小型、圓錐形、較鬆散</li>
        <li><strong>果粒</strong>：小型卵圓形，粉紅至淺紅色，果皮厚，風味濃郁帶淡淡麝香</li>
        <li><strong>成熟期</strong>：中早熟（2e époque hâtive），中等產量（46–56 hl/ha）</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🍷',
    title: '酒款風格與餐酒搭配',
    html: `
      <p><strong>風格</strong>：高貴大氣、結構飽滿，帶有極具辨識度的濃郁香氣——細緻、強烈而優雅。即使在優質年份多半呈乾型，阿爾薩斯釀酒師也習慣保留些許殘糖，讓香氣與口感風味更加協調平衡；陳年潛力佳，能長期保留花香特質。</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
        <div style="background:#fdf1ea;border-radius:8px;padding:8px 14px"><strong>年輕清爽款</strong>：煙燻鮭魚、水波蛋比目魚、佐番茄庫利的小牛肉排</div>
        <div style="background:#fdf1ea;border-radius:8px;padding:8px 14px"><strong>年輕款</strong>：餐前酒，或搭配 VT 版本</div>
        <div style="background:#fdf1ea;border-radius:8px;padding:8px 14px"><strong>飽滿款</strong>：異國料理、咖哩；是搭配 Munster 與 Roquefort 等重口味起司的理想選擇</div>
        <div style="background:#fdf1ea;border-radius:8px;padding:8px 14px"><strong>陳年款／VT</strong>：新鮮或香煎鵝肝、熱酥皮派、阿爾薩斯鹹派</div>
        <div style="background:#fdf1ea;border-radius:8px;padding:8px 14px"><strong>SGN</strong>：適合為一餐畫下完美句點</div>
      </div>
    `,
  },
  {
    type: 'quiz',
    question: '為什麼阿爾薩斯的 Gewurztraminer，即使釀成乾型，也常常保留些許殘糖？',
    options: [
      '因為天然發酵無法將糖分完全轉化',
      '因為釀酒師發現保留些許殘糖能讓香氣與口感風味更加協調平衡',
      '因為法規強制規定最低殘糖量',
      '為了降低成本，減少發酵時間',
    ],
    answer: 1,
    explanation: 'Gewurztraminer 通常在優質年份呈乾型，但阿爾薩斯釀酒師習慣有意保留些許殘糖——這麼做並非技術限制，而是因為適量的殘糖能讓 Gewurztraminer 濃郁的香氣與口感風味展現得更協調平衡，這是阿爾薩斯釀酒傳統中的重要美學選擇。',
  },
  {
    type: 'summary',
    message: 'Gewurztraminer 學習完成！',
    keyPoints: [
      'Savagnin Blanc 的芳香玫瑰色變種，阿爾薩斯早在 1551 年就有文獻記載',
      '非芳香型變種即今日的 Klevener de Heiligenstein，是限定單一村莊的獨立 AOC',
      '風格高貴飽滿，即使乾型也常保留些許殘糖以平衡香氣與口感',
      '是搭配重口味起司（Munster、Roquefort）與異國辛香料理的理想選擇',
    ],
    nextLesson: '下一課：Pinot Gris 與 Muscat',
  },
]

const AL1M3L3_slides = [
  {
    type: 'cover',
    icon: '🍈',
    gradient: 'linear-gradient(135deg, #7c4a2d, #c9a227)',
    title: 'Pinot Gris 與 Muscat：豐腴與奔放',
    subtitle: 'Level 1 · 第十課',
    points: [
      { icon: '🍯', label: 'Pinot Gris', text: '曾稱「Tokay d\'Alsace」，是最豐腴飽滿的阿爾薩斯白酒' },
      { icon: '🍇', label: 'Muscat', text: '兩個品種、最乾型、最奔放的葡萄香氣' },
      { icon: '⚖️', label: '2006 年更名', text: 'Tokay 之名因與匈牙利協議而正式走入歷史' },
    ],
  },
  {
    type: 'content',
    icon: '🍈',
    title: 'Pinot Gris：從 Tokay d\'Alsace 到今日之名',
    html: `
      <p>Pinot Gris 曾長期被稱為「<strong>Tokay d'Alsace</strong>」或「Tokay-Pinot Gris」，是 Pinot Noir 的灰色變種（因果皮顏色得名）。這個「Tokay」之名容易讓人誤以為與匈牙利 Tokaji 甜酒有關，實則毫無關聯。</p>
      <p style="margin-top:8px">1984 年歐盟法規曾正式允許使用「Tokay Pinot Gris」這個名稱，但根據阿爾薩斯與匈牙利、歐盟於 1993 年達成的協議，<strong>自 2006 年 11 月 22 日起，Tokay 之名正式走入歷史</strong>，品種名稱統一為 Pinot Gris。</p>
      <p style="margin-top:8px">早熟品種，產量不穩定；果粒呈灰藍至藍灰色。可用於釀造 Grand Cru、VT 與 SGN。目前佔種植面積 <strong>14%</strong>。</p>
    `,
  },
  {
    type: 'content',
    icon: '🍷',
    title: 'Pinot Gris 的酒款風格',
    html: `
      <p><strong>風格</strong>：豐腴飽滿、圓潤而濃郁，是阿爾薩斯白酒中<strong>酒體最為飽滿厚重</strong>（最 capiteux）的品種，但仍保有討喜的酸度平衡；香氣新鮮豐富，比帶有萜烯調性（如 Muscat）的阿爾薩斯酒款更為內斂含蓄。優質年份的 Pinot Gris 陳年潛力極佳。</p>
      <p style="margin-top:8px">由於能搭配的料理範圍極廣——從生食海鮮到松露料理、從貴腐甜點到禽肉料理——Pinot Gris 在阿爾薩斯（以及世界各地）的酒單上都佔有重要一席之地。</p>
    `,
  },
  {
    type: 'content',
    icon: '🍇',
    title: 'Muscat：最乾型、最奔放的芳香品種',
    html: `
      <p>阿爾薩斯自 1510 年即有 Muscat 種植紀錄，源自東方，目前栽培兩個品種：</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
        <div style="background:#eaf5ef;border-radius:8px;padding:10px 14px"><strong>Muscat「dit d'Alsace」</strong>（小果粒白／粉紅麝香葡萄）：與法國南部 Muscat 品種相同，在萊茵河氣候中屬偏晚熟，逐漸被表現力更細緻、帶野生芳香特質的 Muscat Ottonel 取代。</div>
        <div style="background:#fefae0;border-radius:8px;padding:10px 14px"><strong>Muscat Ottonel</strong>：起源不明（1852 年起在法國上市），推測親本之一為 Chasselas，成熟較早，果皮細緻，麝香風味精巧。</div>
      </div>
      <p style="margin-top:8px">兩者皆可用於釀造 Grand Cru、VT 與 SGN。目前僅佔種植面積 <strong>2.25%</strong>，是「四大貴族白酒品種」中最稀少的一支。</p>
    `,
  },
  {
    type: 'content',
    icon: '🥂',
    title: 'Muscat 的酒款風格',
    html: `
      <p><strong>風格</strong>：清爽輕盈，是阿爾薩斯高階酒款中<strong>最乾型、酒體最輕巧</strong>的一支，卻擁有奔放濃郁的葡萄香氣——彷彿把葡萄本身的滋味直接封存進了酒液中，因此格外適合作為輕盈的餐前酒。</p>
      <p style="margin-top:8px">經典搭配包括蘆筍、清淡辛香料理，甚至可以大膽嘗試鵝肝、異國料理（中式、墨西哥式、巴基斯坦式），辛香料能襯托其奔放香氣。建議趁年輕新鮮飲用，以充分感受那份細緻的果香活力。</p>
    `,
  },
  {
    type: 'quiz',
    question: '阿爾薩斯的 Muscat，在「四大貴族白酒品種」（Riesling／Gewurztraminer／Pinot Gris／Muscat）中有什麼獨特之處？',
    options: [
      '是唯一允許加糖的品種',
      '是最乾型、酒體最輕盈，卻擁有最奔放濃郁葡萄香氣的品種，適合作餐前酒',
      '是唯一不能用於 VT／SGN 的品種',
      '是種植面積最大的品種',
    ],
    answer: 1,
    explanation: 'Muscat 是阿爾薩斯「四大貴族白酒品種」中最乾型、酒體最輕盈的一支，卻擁有格外奔放濃郁的葡萄香氣——彷彿直接把葡萄本身的風味封存在酒液中，因此特別適合作為輕盈的餐前酒。它目前僅佔種植面積 2.25%，是四者中最稀少的品種。',
  },
  {
    type: 'summary',
    message: 'Pinot Gris 與 Muscat 學習完成！',
    keyPoints: [
      'Pinot Gris 曾稱 Tokay d\'Alsace，2006 年起正式棄用 Tokay 之名；風格豐腴飽滿，是阿爾薩斯白酒中最厚重的品種',
      'Muscat 有兩個品種：Muscat「dit d\'Alsace」與 Muscat Ottonel，皆源自東方，1510 年即有種植紀錄',
      'Muscat 是四大貴族品種中最乾型、酒體最輕的一支，奔放的葡萄香氣是其招牌特徵',
      '兩者皆可用於 Grand Cru、VT、SGN——但 Muscat 種植面積僅 2.25%，是最稀少的一支',
    ],
    nextLesson: '下一課：Pinot Blanc・Sylvaner・Pinot Noir 與其他品種',
  },
]

const AL1M3L4_slides = [
  {
    type: 'cover',
    icon: '🍷',
    gradient: 'linear-gradient(135deg, #2d6a4f, #40241a)',
    title: 'Pinot Blanc・Sylvaner・Pinot Noir 與其他品種',
    subtitle: 'Level 1 · 第十一課',
    points: [
      { icon: '🥂', label: 'Pinot Blanc', text: '種植面積 21.21%，與 Riesling 幾乎並列第一' },
      { icon: '🍋', label: 'Sylvaner', text: '11% 種植面積，經典的日常餐酒品種' },
      { icon: '🍒', label: 'Pinot Noir', text: '唯一的紅葡萄品種，9% 種植面積' },
    ],
  },
  {
    type: 'content',
    icon: '🥂',
    title: 'Pinot Blanc（Klevner／Weissclevner）與 Auxerrois',
    html: `
      <p>Pinot Blanc 據信起源於義大利北部，17 世紀才首次見於文獻記載，是 Pinot Noir 的白色變種。產量頗豐（50–70 hl/ha），天然酒精度可達 9.8°–13.8°，常用於釀造 Crémant 基酒，也經常與 <strong>Auxerrois</strong> 混釀或並列標示。</p>
      <p style="margin-top:8px"><strong>Auxerrois</strong> 常與 Pinot Blanc 統計並列（種植區域高度重疊）：酸度略低，酒精度略高，因此成酒通常更圓潤、更易飲，但精緻度可能略遜於 Pinot Blanc 本身。</p>
      <p style="margin-top:8px"><strong>風格</strong>：常優於 Sylvaner 的表現，乾型、順口，帶宜人的酸度支撐——一款「無需多想、輕鬆好喝」的日常酒款；適合搭配冷盤（豬肉／鴨肉／兔肉凍、火腿蘆筍捲）與熱食（火腿酥皮捲、白醬燉肉、酥皮小牛胸腺、家禽燉菜）。種植面積 <strong>21.21%</strong>，與 Riesling 幾乎並列第一。</p>
    `,
  },
  {
    type: 'content',
    icon: '🍋',
    title: 'Sylvaner：親切好飲的日常之選',
    html: `
      <p>18 世紀晚期引入，據信源自奧地利或外西凡尼亞地區，尤其盛行於 Bas-Rhin。高產（100–200 hl/ha），植株活力較弱。</p>
      <p style="margin-top:8px"><strong>風格</strong>：清爽果香，酒體依產地不同或輕盈或稍具份量；本質上是一款平易近人、容易入口的「萬用酒」，若出身良好風土，也能展現接近 Riesling 的細緻度（但少了 Riesling 那份活潑的酸度張力）——是絕佳的「吧台酒」（vin de comptoir）。</p>
      <p style="margin-top:8px"><strong>經典搭配</strong>：洋蔥塔、海鮮、炸魚、酸菜、開胃小點、醃漬鯡魚、火腿香腸拼盤、輕醃鮭魚。種植面積 <strong>11%</strong>。</p>
    `,
  },
  {
    type: 'content',
    icon: '🍒',
    title: 'Pinot Noir：唯一的紅葡萄品種',
    html: `
      <p>Pinot Noir 很可能是阿爾薩斯最早從布根地（Bourgogne）引入的品種（地理位置相近），中世紀時已佔重要地位，此後一度式微，僅在少數村莊（Ottrott、Marlenheim、Rodern）延續種植。傳統上多釀成粉紅酒，近年則有<strong>「重返紅酒」</strong>的趨勢。</p>
      <p style="margin-top:8px">早熟品種，果串小而緊密，果粒偏小、略呈卵形，黑紫色。最適合生長在<strong>略帶黏質壤土的石灰岩坡地</strong>，坡地中段往往能取得酒體與細緻度的最佳平衡。</p>
      <p style="margin-top:8px"><strong>風格</strong>：粉紅酒或紅酒皆帶宜人果香，廣受消費者喜愛；優異年份的紅酒可以相當出色。粉紅酒質地柔順易飲，偶帶微氣泡感（perlant），適合冰鎮飲用。搭配：家禽燒烤、香煎野味、Pinot Noir 燉牛肩肉；粉紅酒可搭配鄉村肉派、火腿香腸、扁豆培根沙拉、烤兔背肉，甚至烤魚。種植面積 <strong>9%</strong>。</p>
    `,
  },
  {
    type: 'content',
    icon: '🍇',
    title: '其他品種：Chasselas 與 Chardonnay',
    html: `
      <ul style="padding-left:20px;line-height:1.8">
        <li><strong>Chasselas（Gutedel）</strong>：18 世紀晚期引入，風味清爽中性，適合年輕早飲，如今種植面積持續萎縮（僅約 1%），市面已相當少見，主要用於調配 Edelzwicker。</li>
        <li><strong>Chardonnay</strong>：<strong>僅限用於 Crémant d'Alsace</strong>，不得用於一般靜態阿爾薩斯酒；能為 Crémant 帶來細緻度、清爽感與延長陳年潛力。</li>
        <li><strong>已禁用品種</strong>：Knipperlé、Goldriesling、Müller-Thurgau、Meunier 自 1980 年起已不再被允許用於阿爾薩斯葡萄酒。</li>
      </ul>
    `,
  },
  {
    type: 'quiz',
    question: 'Pinot Noir 是阿爾薩斯唯一的紅葡萄品種，傳統上主要被釀成什麼？',
    options: [
      '氣泡酒（Crémant 基酒）',
      '粉紅酒——只有極少數優異年份才會釀成優質紅酒',
      '貴腐甜酒（VT／SGN）',
      '蒸餾酒（Marc d\'Alsace）',
    ],
    answer: 1,
    explanation: 'Pinot Noir 是阿爾薩斯唯一種植的黑葡萄品種，傳統上多半被釀成粉紅酒（rosé）——因為阿爾薩斯偏冷的氣候讓黑葡萄要達到釀造優質紅酒所需的成熟度並不容易，只有極少數特別優異的年份才能產出真正優質的紅酒，不過近年也出現「重返紅酒」的趨勢。',
  },
  {
    type: 'summary',
    message: '品種課程學習完成！你已經掌握阿爾薩斯的核心品種光譜。',
    keyPoints: [
      'Pinot Blanc（21.21%）與 Auxerrois 統計上高度重疊，是輕鬆好飲的日常酒款，也是 Crémant 常用基酒',
      'Sylvaner（11%）平易近人、風土優異時可接近 Riesling 的細緻度，是絕佳吧台酒',
      'Pinot Noir（9%）是唯一黑葡萄品種，傳統多釀成粉紅酒，近年有重返紅酒的趨勢',
      'Chasselas 種植面積持續萎縮，主要用於 Edelzwicker；Chardonnay 僅限用於 Crémant',
      '至此，Riesling（21.68%）／Pinot Blanc（21.21%）／Gewurztraminer（18%）／Pinot Gris（14%）／Sylvaner（11%）／Pinot Noir（9%）／Muscat（2.25%）構成了阿爾薩斯品種版圖的核心',
    ],
    nextLesson: '下一課：AOC 三層架構',
  },
]

const AL1M4L1_slides = [
  {
    type: 'cover',
    icon: '🏛️',
    gradient: 'linear-gradient(135deg, #40241a, #c9a227)',
    title: 'AOC 三層架構：Alsace／地理標示／Grand Cru',
    subtitle: 'Level 1 · 第十二課',
    points: [
      { icon: '1️⃣', label: '第一層 Alsace', text: '基礎 AOC，約佔全產區產量 25%' },
      { icon: '2️⃣', label: '第二層 +地理標示', text: '11 個經認定的地理名稱，各自限定品種' },
      { icon: '3️⃣', label: '第三層 Grand Cru', text: '單一地塊命名，僅佔全產區產量約 4%' },
    ],
  },
  {
    type: 'content',
    icon: '🏛️',
    title: '三層架構總覽',
    html: `
      <p>阿爾薩斯的 AOC 體系呈現清楚的三層遞進架構——命名越具體，規範越嚴格，產量門檻也越低：</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#eaf5ef;border-left:4px solid #2d6a4f;border-radius:0 10px 10px 0;padding:12px">
          <strong>① Alsace（Vin d'Alsace）——基礎層</strong><br/>
          涵蓋整個劃定產區範圍，約佔阿爾薩斯總產量 25%。酒渣陳放需超過 12 個月，基礎產量上限 100 hl/ha（另有 20% 彈性上限 PLC）。可釀白酒與粉紅酒，品種包括 Riesling、Pinot Blanc、Pinot Noir、Pinot Gris、Auxerrois 與 Chardonnay（僅限 Crémant）；粉紅酒僅能由 Pinot Noir 釀造。
        </div>
        <div style="background:#fefae0;border-left:4px solid #c9a227;border-radius:0 10px 10px 0;padding:12px">
          <strong>② Alsace + 地理標示（Dénomination géographique）——中間層</strong><br/>
          在「Alsace」名稱後，可加註 <strong>11 個</strong>經正式認定的地理名稱：Blienschwiller、Côtes de Barr、Côte de Rouffach、Klevener de Heiligenstein、Ottrott、Rodern、Saint-Hippolyte、Scherwiller、Vallée Noble、Val Saint-Grégoire、Wolxheim——每個地理標示都限定於特定村莊範圍，並各自搭配專屬的授權品種。
        </div>
        <div style="background:#f0e9e3;border-left:4px solid #40241a;border-radius:0 10px 10px 0;padding:12px">
          <strong>③ Alsace Grand Cru——頂層</strong><br/>
          以單一劃定地塊（lieu-dit）命名，僅佔全產區產量約 <strong>4%</strong>。原則上須來自單一貴族品種（Riesling、Gewurztraminer、Pinot Gris、Muscat 之一），且須人工採收。基礎產量僅 55 hl/ha（PLC 上限至 66 hl/ha）——比基礎 Alsace 層低了近一半。
        </div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '🍇',
    title: '地理標示與授權品種的對應範例',
    html: `
      <p>每個地理標示都有各自限定的授權品種——這正是它們「更具體、更嚴格」的體現：</p>
      <table style="width:100%;border-collapse:collapse;margin-top:8px;font-size:0.85rem">
        <tr style="background:#eaf5ef"><th style="padding:6px 10px;text-align:left;border:1px solid #ddd">地理標示</th><th style="padding:6px 10px;text-align:left;border:1px solid #ddd">授權品種</th></tr>
        <tr><td style="padding:6px 10px;border:1px solid #ddd">Scherwiller、Wolxheim</td><td style="padding:6px 10px;border:1px solid #ddd">Riesling</td></tr>
        <tr><td style="padding:6px 10px;border:1px solid #ddd">Blienschwiller、Côtes de Barr</td><td style="padding:6px 10px;border:1px solid #ddd">Sylvaner</td></tr>
        <tr><td style="padding:6px 10px;border:1px solid #ddd">Ottrott、Rodern、Saint-Hippolyte</td><td style="padding:6px 10px;border:1px solid #ddd">Pinot Noir（紅酒）</td></tr>
        <tr><td style="padding:6px 10px;border:1px solid #ddd">Klevener de Heiligenstein</td><td style="padding:6px 10px;border:1px solid #ddd">Savagnin rose（非芳香型 Gewurztraminer 變種）</td></tr>
        <tr><td style="padding:6px 10px;border:1px solid #ddd">Côte de Rouffach、Vallée Noble</td><td style="padding:6px 10px;border:1px solid #ddd">Gewurztraminer、Pinot Gris、Riesling</td></tr>
      </table>
    `,
  },
  {
    type: 'content',
    icon: '🌟',
    title: '混釀的兩個特例',
    html: `
      <p>Alsace Grand Cru 原則上只能來自<strong>單一貴族品種</strong>，但有兩個歷史悠久的例外允許混釀：</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
        <div style="background:#fdf1ea;border-radius:8px;padding:10px 14px"><strong>Altenberg de Bergheim</strong>：可用 Riesling 佔 50–70%、Pinot Gris 佔 10–25%、Gewurztraminer 佔 10–25% 混釀而成</div>
        <div style="background:#fdf1ea;border-radius:8px;padding:10px 14px"><strong>Kaefferkopf</strong>（Ammerschwihr）：可用 Gewurztraminer 佔 60–80%、Riesling 佔 10–40%、Pinot Gris 最多 30% 混釀而成</div>
      </div>
      <p style="margin-top:8px">這兩個 Grand Cru 也是唯二在酒標上不需要（也通常不會）標示單一品種名稱的 Grand Cru。</p>
    `,
  },
  {
    type: 'quiz',
    question: '以下對阿爾薩斯 AOC 三層架構的描述，哪一項正確？',
    options: [
      'Alsace Grand Cru 產量佔比最高，約佔全產區 74%',
      '三層架構由下而上依序為 Alsace（基礎層）→ Alsace + 地理標示（中間層）→ Alsace Grand Cru（頂層），命名越具體、規範越嚴格、產量上限越低',
      '地理標示層級沒有品種限制，任何品種都能使用',
      'Grand Cru 允許所有品種混釀，沒有任何限制',
    ],
    answer: 1,
    explanation: '阿爾薩斯 AOC 三層架構由下而上分別是：Alsace（基礎層，約佔產量 25%，基礎產量 100hl/ha）、Alsace + 地理標示（11 個經認定名稱，各自限定授權品種）、Alsace Grand Cru（頂層，僅佔產量約 4%，基礎產量僅 55hl/ha）。命名越具體，規範越嚴格，允許的最高產量也越低——這正是分級邏輯的核心。',
  },
  {
    type: 'summary',
    message: 'AOC 三層架構學習完成！',
    keyPoints: [
      '三層架構：Alsace（基礎，25% 產量）→ +地理標示（11 個）→ Alsace Grand Cru（頂層，僅 4% 產量）',
      '每個地理標示都限定特定授權品種——如 Scherwiller/Wolxheim 限 Riesling，Blienschwiller/Côtes de Barr 限 Sylvaner',
      'Grand Cru 原則上單一品種，須人工採收，基礎產量僅 55hl/ha（約為基礎層的一半多一點）',
      '兩個混釀特例：Altenberg de Bergheim（Riesling+Pinot Gris+Gewurztraminer）與 Kaefferkopf（Gewurztraminer+Riesling+Pinot Gris）',
    ],
    nextLesson: '下一課：酒標規則與品種標示',
  },
]

const AL1M4L2_slides = [
  {
    type: 'cover',
    icon: '🏷️',
    gradient: 'linear-gradient(135deg, #1b4332, #c9a227)',
    title: '酒標規則與品種標示：85% 規則詳解',
    subtitle: 'Level 1 · 第十三課',
    points: [
      { icon: '📦', label: '強制規定', text: '所有阿爾薩斯酒都必須在原產地裝瓶' },
      { icon: '🤔', label: '「Pinot」的秘密', text: '同一個標示名稱，背後可能是四種不同的品種！' },
      { icon: '🍾', label: 'Edelzwicker vs Gentil', text: '兩種調配酒哲學，標籤規則截然不同' },
    ],
  },
  {
    type: 'content',
    icon: '📦',
    title: '基本標示原則',
    html: `
      <ul style="padding-left:20px;line-height:1.8">
        <li>與所有阿爾薩斯酒相同，<strong>原產地裝瓶為強制規定</strong>——即使是最高階的 Grand Cru 也不例外</li>
        <li>基礎 Alsace AOC 層級，酒標上是否標示品種名稱屬於<strong>選擇性</strong>（非強制）</li>
        <li>Grand Cru 層級除了兩個混釀特例（Altenberg de Bergheim、Kaefferkopf）外，酒標上<strong>通常會</strong>標示品種名稱</li>
        <li>Grand Cru 酒標必須同時標示<strong>年份</strong>與<strong>地塊名稱（lieu-dit）</strong>，兩者缺一不可</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🤔',
    title: '「Pinot」與「Klevner」：一個標示、四種可能',
    html: `
      <p>這是阿爾薩斯酒標規則中最容易讓人意外的細節：當酒標標示為「<strong>Pinot</strong>」或「<strong>Klevner</strong>」時，背後可能是以下任何一種，或它們的混合：</p>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-top:8px">
        <div style="background:#eaf5ef;border-radius:8px;padding:8px 12px;text-align:center">Auxerrois B</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:8px 12px;text-align:center">Pinot Blanc B</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:8px 12px;text-align:center">Pinot Noir N（釀成白酒）</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:8px 12px;text-align:center">Pinot Gris G</div>
      </div>
      <p style="margin-top:10px">換句話說，看到酒標寫著「Alsace Pinot」，你其實無法單從標示本身確知它是哪一個（或哪幾個）Pinot 家族品種釀成的——這也是為什麼許多優質酒莊會在酒標上額外註明「Pinot Blanc」等更精確的品種名稱。</p>
    `,
  },
  {
    type: 'compare',
    title: 'Edelzwicker vs Gentil：兩種調配酒哲學',
    items: [
      {
        icon: '🍇',
        label: 'Edelzwicker',
        desc: '任意混合阿爾薩斯白葡萄品種而成，比例不拘、不需公開，品種可分開或一起釀造。酒標上不會（也不能）列出品種名稱。是日常餐酒的代表：清爽好飲、無陳年需求。',
        color: '#2d6a4f',
      },
      {
        icon: '🏅',
        label: 'Gentil',
        desc: '受業界章程（Charte Interprofessionnelle）規範的「優質調配酒」：須至少 50% 由 Riesling、Muscat、Pinot Gris、Gewurztraminer（貴族品種）組成，其餘可用 Sylvaner、Chasselas、Pinot Blanc 補足。每個品種須先各自獲得 AOC Alsace 認證後才能調配，且須通過裝瓶後的品評認證才能上市。',
        color: '#c9a227',
      },
    ],
  },
  {
    type: 'quiz',
    question: '阿爾薩斯酒標上如果寫著「Alsace Pinot」，這代表什麼？',
    options: [
      '一定是 100% Pinot Noir 釀成的紅酒',
      '可能是 Auxerrois、Pinot Blanc、Pinot Noir（釀成白酒）或 Pinot Gris 其中之一，或它們的混合——無法單從標示確知確切品種',
      '一定是 Pinot Blanc 與 Pinot Gris 各半混釀',
      '這是不合法的標示方式',
    ],
    answer: 1,
    explanation: '阿爾薩斯法規允許「Pinot」或「Klevner」作為 Auxerrois B、Pinot Blanc B、Pinot Noir N（釀成白酒）、Pinot Gris G 這四個品種其中之一，或它們混合的統稱標示。這是阿爾薩斯酒標規則中最容易讓消費者誤解的細節之一——看到「Pinot」不代表就是 Pinot Blanc。',
  },
  {
    type: 'summary',
    message: '酒標規則學習完成！',
    keyPoints: [
      '所有阿爾薩斯酒（含 Grand Cru）皆須在原產地裝瓶——強制規定',
      '「Pinot」／「Klevner」標示可代表 Auxerrois、Pinot Blanc、Pinot Noir（白釀）或 Pinot Gris，或其混合',
      'Grand Cru 除兩個混釀特例外，通常會標示品種名稱，且必須同時標示年份與地塊名稱',
      'Edelzwicker：任意調配，不標品種；Gentil：受業界章程規範，≥50% 貴族品種，需分開釀造、認證後調配',
    ],
    nextLesson: '下一課：產量與釀造規定',
  },
]

const AL1M4L3_slides = [
  {
    type: 'cover',
    icon: '📊',
    gradient: 'linear-gradient(135deg, #40241a, #7c4a2d)',
    title: '產量與釀造規定',
    subtitle: 'Level 1 · 第十四課',
    points: [
      { icon: '📉', label: '越具體越嚴格', text: '從基礎 Alsace 到 Grand Cru，產量上限逐層遞減' },
      { icon: '✋', label: '人工採收', text: 'Grand Cru 特定品種與 VT／SGN 皆須人工採收' },
      { icon: '🍇', label: '品種產量差異', text: '「貴族」品種的允許產量普遍低於量產品種' },
    ],
  },
  {
    type: 'content',
    icon: '📉',
    title: '產量隨命名具體程度遞減',
    html: `
      <p>阿爾薩斯的產量規定，清楚體現「命名越具體、規範越嚴格」的邏輯：</p>
      <table style="width:100%;border-collapse:collapse;margin-top:8px;font-size:0.88rem">
        <tr style="background:#eaf5ef"><th style="padding:8px 10px;text-align:left;border:1px solid #ddd">層級</th><th style="padding:8px 10px;text-align:left;border:1px solid #ddd">白酒</th><th style="padding:8px 10px;text-align:left;border:1px solid #ddd">紅酒</th></tr>
        <tr><td style="padding:8px 10px;border:1px solid #ddd">Alsace（基礎，含粉紅酒 75hl/ha）</td><td style="padding:8px 10px;border:1px solid #ddd">80 hl/ha</td><td style="padding:8px 10px;border:1px solid #ddd">60 hl/ha</td></tr>
        <tr><td style="padding:8px 10px;border:1px solid #ddd">Alsace + 地理標示</td><td style="padding:8px 10px;border:1px solid #ddd">72 hl/ha</td><td style="padding:8px 10px;border:1px solid #ddd">60 hl/ha</td></tr>
        <tr><td style="padding:8px 10px;border:1px solid #ddd">Alsace + 地塊名稱（lieu-dit）</td><td style="padding:8px 10px;border:1px solid #ddd">68 hl/ha</td><td style="padding:8px 10px;border:1px solid #ddd">60 hl/ha</td></tr>
        <tr><td style="padding:8px 10px;border:1px solid #ddd"><strong>Alsace Grand Cru</strong></td><td style="padding:8px 10px;border:1px solid #ddd" colspan="2"><strong>基礎 55 hl/ha（PLC 至多 +20%，上限 66 hl/ha）</strong></td></tr>
      </table>
    `,
  },
  {
    type: 'content',
    icon: '🍇',
    title: '各品種的產量上限（Alsace 基礎層級）',
    html: `
      <p>即使在同一個 Alsace 基礎層級內，不同品種的最高允許產量也不一樣——反映出「越是精緻的品種，越需要低產來換取濃縮度」：</p>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:8px;text-align:center;font-size:0.85rem">
        <div style="background:#f0e9e3;border-radius:8px;padding:10px"><strong>100 hl/ha</strong><br/>Auxerrois・Chasselas・Pinot Blanc・Pinot(Klevner)・Sylvaner</div>
        <div style="background:#fefae0;border-radius:8px;padding:10px"><strong>90 hl/ha</strong><br/>Muscat・Muscat Ottonel・Riesling</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:10px"><strong>80 hl/ha</strong><br/>Gewurztraminer・Pinot Gris</div>
      </div>
    `,
  },
  {
    type: 'content',
    icon: '✋',
    title: '人工採收的強制規定',
    html: `
      <p>以下情況<strong>必須人工採收</strong>，不得使用機械採收：</p>
      <ul style="padding-left:20px;line-height:1.8">
        <li>標示<strong>地塊名稱（lieu-dit）</strong>、品種為 Pinot Gris 或 Pinot Noir 的酒款</li>
        <li>所有 <strong>Alsace Grand Cru</strong> 酒款</li>
        <li>所有標示 <strong>VT（Vendanges Tardives）</strong>或 <strong>SGN（Sélection de Grains Nobles）</strong>的酒款</li>
      </ul>
      <p style="margin-top:10px">此外，兩個混釀 Grand Cru（Altenberg de Bergheim、Kaefferkopf）還規定了最低種植密度：<strong>每公頃須超過 5,500 株</strong>——高密度種植有助於加劇植株間競爭，進一步限制天然產量。</p>
    `,
  },
  {
    type: 'quiz',
    question: '為什麼 Grand Cru 的基礎產量上限（55 hl/ha）明顯低於基礎 Alsace 層級（80 hl/ha）？',
    options: [
      '因為 Grand Cru 土地面積比較小，種不了那麼多葡萄',
      '低產量有助於葡萄樹將養分集中在有限果串上，提升果實濃縮度與品質，符合 Grand Cru 對頂級品質的要求',
      '這只是歷史留下的舊規定，與品質無關',
      '因為 Grand Cru 葡萄樹通常種植年份較短，天然產量較低',
    ],
    answer: 1,
    explanation: 'Grand Cru 作為阿爾薩斯分級體系的頂層，透過更低的產量上限（55hl/ha，僅為基礎 Alsace 層級 80hl/ha 的約七成）來確保品質：低產量讓葡萄樹將養分集中在較少的果串上，提升果實濃縮度與風味複雜度，這正是分級制度「越具體、越嚴格、也越優質」邏輯的具體體現。',
  },
  {
    type: 'summary',
    message: '產量與釀造規定學習完成！',
    keyPoints: [
      '產量上限隨命名具體程度遞減：基礎 Alsace 80hl/ha → +地理標示 72hl/ha → +地塊名稱 68hl/ha → Grand Cru 55hl/ha',
      '同一層級內，「貴族」品種（Gewurztraminer、Pinot Gris 80hl/ha）產量上限低於量產品種（Sylvaner 等 100hl/ha）',
      '地塊命名的 Pinot Gris／Pinot Noir、所有 Grand Cru、所有 VT／SGN，皆須人工採收',
      '兩個混釀 Grand Cru 額外規定種植密度須超過 5,500 株／公頃',
    ],
    nextLesson: '下一課：VT 與 SGN 貴腐甜酒入門',
  },
]

const AL1M4L4_slides = [
  {
    type: 'cover',
    icon: '🍯',
    gradient: 'linear-gradient(135deg, #c9a227, #7c4a2d)',
    title: 'VT 與 SGN 貴腐甜酒入門',
    subtitle: 'Level 1 · 第十五課',
    points: [
      { icon: '🍇', label: '僅限 4 個品種', text: 'Gewurztraminer・Pinot Gris・Riesling・Muscat' },
      { icon: '📅', label: '1984 年正式命名', text: '是全法國 AOC 中門檻最嚴格的甜酒等級之一' },
      { icon: '☀️', label: '氣候基礎', text: '乾燥少雨的秋季，是孕育貴腐與晚摘的關鍵' },
    ],
  },
  {
    type: 'content',
    icon: '🍯',
    title: 'VT 與 SGN：兩種概念、兩種風格',
    html: `
      <p>VT（Vendanges Tardives，晚摘）與 SGN（Sélection de Grains Nobles，貴腐精選）是可以附加在 Alsace 或 Alsace Grand Cru 酒標上的兩個特殊標示，代表阿爾薩斯規範最嚴格的頂級甜酒——其含糖量門檻，在全法國 AOC 體系中僅次於侏羅（Jura）的稻草酒（vin de paille）。</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
        <div style="background:#fefae0;border-left:4px solid #c9a227;border-radius:0 10px 10px 0;padding:12px">
          <strong>🍇 Vendanges Tardives（VT）</strong><br/>
          晚摘葡萄，通常在正常採收後數週才進行，讓葡萄達到過熟（surmaturité）狀態。酒款保留品種本身的辨識度與香氣特徵，並疊加濃縮效應與部分貴腐風味帶來的力度。
        </div>
        <div style="background:#f0e9e3;border-left:4px solid #7c4a2d;border-radius:0 10px 10px 0;padding:12px">
          <strong>🍄 Sélection de Grains Nobles（SGN）</strong><br/>
          透過多次選果（tries successives），僅挑選已感染貴腐黴（Botrytis cinerea）的果粒。此時品種辨識度較為隱晦，取而代之的是濃縮效應與貴腐特徵主導的風味——濃郁香氣、極強勁的結構、圓潤黏稠的口感，以及悠長的餘韻。
        </div>
      </div>
      <p style="margin-top:10px">這兩個標示由 1984 年 3 月 1 日的部長法令正式承認命名。</p>
    `,
  },
  {
    type: 'content',
    icon: '🍇',
    title: '僅限四個「貴族」品種',
    html: `
      <p>VT 與 SGN <strong>只能</strong>來自以下四個品種：</p>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:8px">
        <div style="background:#eaf5ef;border-radius:8px;padding:10px;text-align:center;font-weight:700">Gewurztraminer</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:10px;text-align:center;font-weight:700">Pinot Gris</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:10px;text-align:center;font-weight:700">Riesling</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:10px;text-align:center;font-weight:700">Muscat</div>
      </div>
      <p style="margin-top:10px">⚠️ <strong>特殊例外</strong>：即使符合條件，Kaefferkopf 地塊出產的 Pinot Gris，法規明文<strong>禁止</strong>使用 VT 或 SGN 標示——這是阿爾薩斯法規中一個相當獨特的例外規定。</p>
    `,
  },
  {
    type: 'content',
    icon: '📋',
    title: '嚴格的生產條件',
    html: `
      <ul style="padding-left:20px;line-height:1.8">
        <li>須<strong>人工採收</strong></li>
        <li>須來自<strong>單一品種</strong>，且以該品種名稱申報與銷售</li>
        <li>必須標示<strong>年份</strong></li>
        <li><strong>禁止任何加糖（chaptalisation）</strong>或其他形式的濃縮處理</li>
        <li>採收前須向 INAO 地方單位<strong>預先申報</strong></li>
        <li>須通過分析與感官品評雙重認證</li>
      </ul>
      <p style="margin-top:10px">氣候基礎：阿爾薩斯半大陸型氣候，秋季降雨稀少、日照充足，正是造就葡萄「passerillage」（風乾濃縮）與貴腐黴發展的理想條件，讓遠遲於正常採收期的晚摘與貴腐選果成為可能。</p>
    `,
  },
  {
    type: 'quiz',
    question: 'VT 與 SGN 貴腐甜酒標示，只能來自以下哪四個品種？',
    options: [
      'Riesling、Sylvaner、Pinot Blanc、Auxerrois',
      'Gewurztraminer、Pinot Gris、Riesling、Muscat',
      'Pinot Noir、Chardonnay、Chasselas、Klevener',
      '任何品種皆可，只要糖度達標即可',
    ],
    answer: 1,
    explanation: 'VT（Vendanges Tardives）與 SGN（Sélection de Grains Nobles）法規明訂僅限四個「貴族」品種：Gewurztraminer、Pinot Gris、Riesling、Muscat。這四個品種也正是唯一被允許用於 Alsace Grand Cru 的品種——顯示阿爾薩斯將最高規範保留給這四個核心貴族品種的一致邏輯。',
  },
  {
    type: 'summary',
    message: 'VT 與 SGN 入門學習完成！Level 1 即將完成，準備好迎接期末測驗了嗎？',
    keyPoints: [
      'VT（晚摘）：過熟葡萄，保留品種辨識度並疊加濃縮效應；SGN（貴腐精選）：多次選果只取貴腐果粒，風味由濃縮與貴腐特徵主導',
      '1984 年 3 月 1 日部長法令正式命名，是全法國 AOC 中糖度門檻數一數二嚴格的甜酒等級',
      '僅限 Gewurztraminer、Pinot Gris、Riesling、Muscat 四個品種——與 Grand Cru 授權品種完全一致',
      '嚴格條件：人工採收、單一品種、禁止加糖、須標示年份、須經 INAO 預先申報與雙重認證',
      '特殊例外：Kaefferkopf 的 Pinot Gris 即使達標，法規仍禁止使用 VT／SGN 標示',
    ],
    nextLesson: '下一課：Level 1 綜合評量',
  },
]

const AL1FinalExam_slides = [
  {
    type: 'cover',
    icon: '🎓',
    gradient: 'linear-gradient(135deg, #2d6a4f, #c9a227)',
    title: 'Level 1 綜合評量',
    subtitle: '阿爾薩斯葡萄酒入門 · 最終測驗',
    points: [
      { icon: '📋', label: '12 題綜合測驗', text: '涵蓋地理、歷史、氣候、土壤、品種、AOC 分級' },
      { icon: '✅', label: '通過標準', text: '答對 8 題以上即完成 Level 1' },
      { icon: '🏆', label: '完成後解鎖', text: 'Level 2：Grand Cru 深度探索' },
    ],
  },
  {
    type: 'quiz',
    question: '【地理】阿爾薩斯由哪兩個省組成？',
    options: [
      'Moselle 與 Meurthe',
      'Bas-Rhin（北，Strasbourg）與 Haut-Rhin（南，Colmar）',
      'Vosges 與 Meuse',
      'Haut-Rhin（北）與 Bas-Rhin（南）',
    ],
    answer: 1,
    explanation: '阿爾薩斯由 Bas-Rhin（下萊茵省，北部，首府 Strasbourg）與 Haut-Rhin（上萊茵省，南部，首府 Colmar）組成。「Bas」在北、「Haut」在南，源自萊茵河上下游相對位置，而非地理高低。',
  },
  {
    type: 'quiz',
    question: '【歷史】阿爾薩斯何時正式取得 AOC 認證地位？',
    options: ['1945 年', '1962 年', '1975 年', '1984 年'],
    answer: 1,
    explanation: '阿爾薩斯於 1945 年頒布臨時法令，1962 年正式取得 AOC 認證地位，1963 年成立 CIVA，1975 年頒布 Grand Cru 專屬法令，1984 年正式命名 VT／SGN。',
  },
  {
    type: 'quiz',
    question: '【氣候】阿爾薩斯 Colmar 一帶年雨量僅約 500mm 的主因是什麼？',
    options: [
      '地中海氣候直接影響',
      '孚日山脈阻擋大西洋西風，形成顯著雨影效應',
      '因為位處內陸盆地，完全不受海洋氣候影響',
      '純屬近年氣候變遷的異常現象',
    ],
    answer: 1,
    explanation: '孚日山脈大幅削弱了大西洋盛行西風帶來的水氣，形成顯著雨影效應，讓阿爾薩斯（尤其 Colmar 一帶）成為法國最乾燥的產區之一，年雨量堪比地中海沿岸的 Montpellier。',
  },
  {
    type: 'quiz',
    question: '【地質】阿爾薩斯的葡萄園為何多數座落在複雜多變的斷裂帶上？',
    options: [
      '因為地震頻繁，土壤持續變動',
      '五千萬年前孚日山與黑森林一體斷陷形成萊茵平原，不同地質年代的岩層在斷裂帶邊緣重新裸露',
      '因為人為開墾方式導致地層混亂',
      '這只是少數幾個特例地塊的現象',
    ],
    answer: 1,
    explanation: '五千萬年前孚日山與黑森林原為一體，第三紀地殼陷落形成萊茵平原，不同地質年代累積的岩層因而在斷裂帶邊緣重新裸露，阿爾薩斯葡萄園正好座落於此，因此許多村莊同時擁有多種不同地層。',
  },
  {
    type: 'quiz',
    question: '【品種】阿爾薩斯種植面積最大的品種是哪一個？',
    options: ['Gewurztraminer', 'Riesling（21.68%）', 'Sylvaner', 'Pinot Gris'],
    answer: 1,
    explanation: 'Riesling 佔阿爾薩斯總種植面積 21.68%，是種植最廣的品種，被稱為「阿爾薩斯酒中之王」；Pinot Blanc（21.21%）緊追在後。',
  },
  {
    type: 'quiz',
    question: '【品種】阿爾薩斯的 Pinot Gris 曾經有什麼別名？何時正式棄用？',
    options: [
      '「Riesling Gris」，2000 年棄用',
      '「Tokay d\'Alsace」，2006 年 11 月起正式棄用',
      '「Muscat Gris」，1993 年棄用',
      '從未有過別名',
    ],
    answer: 1,
    explanation: 'Pinot Gris 曾稱「Tokay d\'Alsace」或「Tokay-Pinot Gris」。根據阿爾薩斯與匈牙利、歐盟於 1993 年達成的協議，自 2006 年 11 月 22 日起正式棄用 Tokay 之名，因為容易讓人誤以為與匈牙利 Tokaji 甜酒有關。',
  },
  {
    type: 'quiz',
    question: '【品種】阿爾薩斯唯一種植的黑葡萄品種是？傳統上主要釀成什麼？',
    options: [
      'Merlot，主要釀成紅酒',
      'Pinot Noir，傳統上多釀成粉紅酒',
      'Cabernet Franc，主要用於混釀',
      'Gamay，主要用於 Crémant',
    ],
    answer: 1,
    explanation: 'Pinot Noir 是阿爾薩斯唯一種植的黑葡萄品種，傳統上多半釀成粉紅酒，只有極少數特別優異的年份才能產出優質紅酒——不過近年出現「重返紅酒」的趨勢。',
  },
  {
    type: 'quiz',
    question: '【AOC 分級】Alsace Grand Cru 大約佔全阿爾薩斯總產量的多少比例？',
    options: ['約 25%', '約 15%', '約 4%', '約 50%'],
    answer: 2,
    explanation: 'Alsace Grand Cru 僅佔全產區產量約 4%（2009 年數據：48,295 hl，佔 4.13%），是金字塔頂端最稀少的一層；基礎 Alsace AOC 則佔了約 74%。',
  },
  {
    type: 'quiz',
    question: '【酒標】阿爾薩斯酒標上標示「Pinot」，可能代表以下哪些品種？',
    options: [
      '只可能是 Pinot Blanc',
      '只可能是 Pinot Noir',
      'Auxerrois、Pinot Blanc、Pinot Noir（白釀）或 Pinot Gris 之一，或其混合',
      '只可能是 Pinot Gris',
    ],
    answer: 2,
    explanation: '「Pinot」或「Klevner」標示可代表 Auxerrois B、Pinot Blanc B、Pinot Noir N（釀成白酒）、Pinot Gris G 這四個品種其中之一，或它們的混合——這是阿爾薩斯酒標規則中容易讓人誤解的細節。',
  },
  {
    type: 'quiz',
    question: '【Grand Cru】以下哪兩個 Grand Cru 允許混釀多個品種？',
    options: [
      'Schoenenbourg 與 Rangen',
      'Altenberg de Bergheim 與 Kaefferkopf',
      'Zotzenberg 與 Kastelberg',
      'Rosacker 與 Brand',
    ],
    answer: 1,
    explanation: 'Altenberg de Bergheim（Riesling 50–70% + Pinot Gris 10–25% + Gewurztraminer 10–25%）與 Kaefferkopf（Gewurztraminer 60–80% + Riesling 10–40% + Pinot Gris ≤30%）是僅有的兩個允許混釀的 Alsace Grand Cru。',
  },
  {
    type: 'quiz',
    question: '【VT／SGN】VT 與 SGN 貴腐甜酒標示，僅限用於以下哪四個品種？',
    options: [
      'Riesling、Sylvaner、Pinot Blanc、Chasselas',
      'Gewurztraminer、Pinot Gris、Riesling、Muscat',
      '任何品種皆可',
      'Pinot Noir、Chardonnay、Auxerrois、Klevener',
    ],
    answer: 1,
    explanation: 'VT／SGN 僅限 Gewurztraminer、Pinot Gris、Riesling、Muscat 四個「貴族」品種——與 Alsace Grand Cru 的授權品種完全一致，展現阿爾薩斯法規對這四個核心品種的一貫規範邏輯。',
  },
  {
    type: 'quiz',
    question: '【產量】Alsace Grand Cru 的基礎產量上限是多少？相較基礎 Alsace 層級（80hl/ha）低了多少？',
    options: [
      '90 hl/ha，比基礎層級略高',
      '55 hl/ha，約為基礎層級的七成',
      '20 hl/ha，僅為基礎層級的四分之一',
      '兩者產量規定完全相同',
    ],
    answer: 1,
    explanation: 'Alsace Grand Cru 基礎產量上限僅 55hl/ha（PLC 至多加至 66hl/ha），明顯低於基礎 Alsace 層級的 80hl/ha——低產量有助於葡萄樹將養分集中在有限果串上，提升果實濃縮度，符合 Grand Cru 對頂級品質的要求。',
  },
  {
    type: 'summary',
    icon: '🏆',
    message: '🎉 恭喜完成 Level 1 綜合評量！你已成功建立阿爾薩斯葡萄酒的入門基礎！',
    keyPoints: [
      '✅ 地理：Bas-Rhin（北，Strasbourg）與 Haut-Rhin（南，Colmar）兩省組成',
      '✅ 歷史：1962 AOC、1975 Grand Cru 法令、1984 VT/SGN 命名、2007 第 51 個 Grand Cru（Kaefferkopf）',
      '✅ 氣候與地質：孚日山雨影效應、逆溫層現象、斷裂帶造就的風土多樣性',
      '✅ 品種光譜：Riesling（21.68%）為首，Gewurztraminer／Pinot Gris／Muscat 構成四大貴族品種',
      '✅ AOC 三層架構：Alsace → +地理標示 → Grand Cru，命名越具體、規範越嚴格、產量越低',
      '✅ VT／SGN：僅限四大貴族品種，是全法國門檻最嚴格的甜酒等級之一',
    ],
    nextLesson: '準備好了嗎？Level 2：Grand Cru 深度探索，即將帶你走入 51 個特級園的地質世界！',
  },
]

// ───────────────────────────────────────────────────────────────
//  Level 2 投影片 — Grand Cru 深度探索
//  資料來源：CIVA《Les Grands Crus d'Alsace》官方 51 個地塊專刊
// ───────────────────────────────────────────────────────────────

const AL2M1L1_slides = [
  {
    type: 'cover',
    icon: '🏛️',
    gradient: 'linear-gradient(135deg, #1b4332, #2d6a4f)',
    title: 'Grand Cru 分級簡史（1975–2007）與規範總則',
    subtitle: 'Level 2 · 第一課',
    points: [
      { icon: '📜', label: '1975 年法令', text: 'Alsace Grand Cru 分級正式創設' },
      { icon: '📅', label: '三波劃定', text: '1983 年 25 個、1992 年再 25 個、2007 年第 51 個' },
      { icon: '✋', label: '嚴格規範', text: '單一貴族品種、人工採收、低產量' },
    ],
  },
  {
    type: 'content',
    icon: '📅',
    title: 'Grand Cru 分級的誕生與擴張',
    html: `
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
        <div style="background:#eaf5ef;border-radius:8px;padding:10px 14px"><strong>1975 年 11 月 20 日</strong> — 法令正式創設 Alsace Grand Cru 分級</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:10px 14px"><strong>1983 年 11 月 23 日</strong> — 首批 <strong>25 個</strong> Grand Cru 地塊劃定</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:10px 14px"><strong>1992 年</strong> — 再劃定 <strong>25 個</strong>，累計達 50 個</div>
        <div style="background:#eaf5ef;border-radius:8px;padding:10px 14px"><strong>2007 年</strong> — 第 <strong>51 個</strong> Grand Cru「Kaefferkopf」（Ammerschwihr）正式劃定——也是唯一從創立之初就允許混釀的 Grand Cru</div>
      </div>
      <p style="margin-top:10px">Grand Cru 僅佔阿爾薩斯總產量約 <strong>4%</strong>，是金字塔頂端最稀少的一層，51 個地塊分散在 Bas-Rhin（14 個）與 Haut-Rhin（37 個）兩省的丘陵地帶。</p>
    `,
  },
  {
    type: 'content',
    icon: '📋',
    title: 'Grand Cru 的核心規範',
    html: `
      <ul style="padding-left:20px;line-height:1.8">
        <li><strong>品種限制</strong>：原則上只能來自單一貴族品種——Riesling、Gewurztraminer、Pinot Gris、Muscat 之一</li>
        <li><strong>兩個混釀特例</strong>：Altenberg de Bergheim（Riesling+Pinot Gris+Gewurztraminer）與 Kaefferkopf（Gewurztraminer+Riesling+Pinot Gris）</li>
        <li><strong>人工採收</strong>：全部 51 個 Grand Cru 皆為強制規定</li>
        <li><strong>產量上限</strong>：基礎 55 hl/ha，PLC 可增至最多 20%，上限 66 hl/ha</li>
        <li><strong>酒標必須同時標示</strong>：地塊名稱（lieu-dit）＋年份——兩者缺一不可</li>
        <li><strong>原產地裝瓶</strong>：與所有阿爾薩斯酒一樣是強制規定</li>
      </ul>
      <p style="margin-top:10px">💡 每個 Grand Cru 地塊面積差異極大——最小的 <strong>Kanzlerberg 僅 3.23 公頃</strong>，最大的 <strong>Schlossberg 達 80.28 公頃</strong>，反映出各地塊風土條件的天然邊界，而非人為的整齊劃分。</p>
    `,
  },
  {
    type: 'quiz',
    question: '阿爾薩斯 Grand Cru 分級從 1975 年創設到 2007 年最終達到 51 個地塊，經歷了幾波劃定？',
    options: [
      '一次劃定 51 個，之後未再調整',
      '三波：1983 年 25 個、1992 年再 25 個、2007 年第 51 個（Kaefferkopf）',
      '每年新增 1-2 個，持續至今',
      '兩波：1975 年 30 個、1992 年再 21 個',
    ],
    answer: 1,
    explanation: 'Grand Cru 分級歷經三波劃定：1983 年 11 月 23 日首批 25 個，1992 年再劃定 25 個（累計 50 個），2007 年第 51 個 Kaefferkopf 劃定——也是唯一從創立之初就允許混釀的 Grand Cru。',
  },
  {
    type: 'summary',
    message: 'Grand Cru 分級簡史學習完成！',
    keyPoints: [
      '1975 年法令創設 Grand Cru 分級，1983/1992/2007 三波劃定達 51 個地塊',
      'Grand Cru 僅佔總產量約 4%，分布於 Bas-Rhin（14 個）與 Haut-Rhin（37 個）',
      '原則上單一貴族品種，僅 Altenberg de Bergheim 與 Kaefferkopf 兩個特例允許混釀',
      '全部強制人工採收、產量上限 55–66hl/ha、酒標須同時標示地塊名與年份',
      '地塊面積差異極大：最小 Kanzlerberg（3.23ha）到最大 Schlossberg（80.28ha）',
    ],
    nextLesson: '下一課：Claude Sittler 地質分類——十大地質族群',
  },
]

const AL2M1L2_slides = [
  {
    type: 'cover',
    icon: '🪨',
    gradient: 'linear-gradient(135deg, #7c4a2d, #40241a)',
    title: 'Claude Sittler 地質分類：十大地質族群',
    subtitle: 'Level 2 · 第二課',
    points: [
      { icon: '🔬', label: '地質學家的分類法', text: '依岩石與土壤成因，而非行政區劃分組' },
      { icon: '🔟', label: '十大族群', text: '從片岩、火山岩到黏土泥灰岩，橫跨數億年地質史' },
      { icon: '🗺️', label: '本課程的骨幹', text: '後續所有 Grand Cru 課程都依此分類展開' },
    ],
  },
  {
    type: 'content',
    icon: '🔬',
    title: '為什麼要用地質分類，而非產區地圖？',
    html: `
      <p>阿爾薩斯地質學家 <strong>Claude Sittler</strong> 提出了一套以岩石與土壤成因為核心的分類架構，將 51 個 Grand Cru 依地質特徵歸納為<strong>十大族群</strong>。這個分類法之所以重要，是因為它能真正解釋「為什麼」某個地塊適合某個品種、造就某種風格——而不只是記憶地名。</p>
      <p style="margin-top:8px">例如：花崗岩地塊天生適合 Riesling 展現礦石感與骨架；泥灰石灰岩則傾向孕育結構飽滿的 Gewurztraminer。這正是本課程 Level 2 接下來所有課程的組織邏輯。</p>
    `,
  },
  {
    type: 'compare',
    title: '十大地質族群一覽（Grand Cru 數量）',
    items: [
      { icon: '⬛', label: '片岩（1 個）', desc: 'Kastelberg——志留紀 Steige 片岩，被 Andlau 花崗岩變質，堅硬深色岩石', color: '#2d3436' },
      { icon: '🌋', label: '火山沉積岩（2 個）', desc: 'Muenchberg、Rangen——二疊紀火山碎屑岩與真正的火山岩，全阿爾薩斯僅有的火山地質', color: '#c0392b' },
      { icon: '🏔️', label: '花崗岩（8 個）', desc: 'Schlossberg、Brand、Sommerberg 等——孚日山兩雲母花崗岩風化砂質土', color: '#95a5a6' },
      { icon: '🟫', label: '砂岩／孚日砂岩（3 個）', desc: 'Wiebelsberg、Kessler、Kitterlé——石英砂粒膠結而成，排水佳、升溫快', color: '#d35400' },
      { icon: '⬜', label: '石灰岩（4 個）', desc: 'Bruderthal、Rosacker、Steinert、Steinklotz——Muschelkalk／Dogger 石灰質基岩', color: '#bdc3c7' },
      { icon: '🟨', label: '灰砂岩（3 個）', desc: 'Geisberg、Pfingstberg、Zinnkoepflé——三疊紀灰質砂岩，Zinnkoepflé 更是「阿爾薩斯葡萄園屋頂」', color: '#f39c12' },
      { icon: '🟧', label: '泥灰砂岩（7 個）', desc: 'Furstentum、Pfersigberg、Vorbourg 等——本課程中數量最多的次族群之一', color: '#e67e22' },
      { icon: '🟥', label: '泥灰石灰砂岩（4 個）', desc: 'Altenberg de Bergheim、Engelberg、Osterberg、Zotzenberg——兩個混釀 GC 之一即在此', color: '#e74c3c' },
      { icon: '🟪', label: '泥灰石灰岩（13 個，最大族群）', desc: 'Eichberg、Hengst、Mambourg 等——超過四分之一的 Grand Cru 皆屬此類', color: '#8e44ad' },
      { icon: '🟦', label: '黏土泥灰岩（5 個）', desc: 'Schoenenbourg、Kanzlerberg、Sporen 等——厚重保水土壤，孕育強勁貴腐甜酒', color: '#2980b9' },
    ],
  },
  {
    type: 'quiz',
    question: '依 Claude Sittler 的地質分類，51 個 Grand Cru 中數量最多的地質族群是？',
    options: [
      '花崗岩（8 個）',
      '泥灰石灰岩（13 個）——超過四分之一的 Grand Cru 皆屬此類',
      '石灰岩（4 個）',
      '片岩（1 個）',
    ],
    answer: 1,
    explanation: '泥灰石灰岩（marno-calcaires）族群共有 13 個 Grand Cru，是十大族群中數量最多的一支，包括 Eichberg、Florimont、Goldert、Hatschbourg、Hengst、Kirchberg de Barr、Mambourg、Mandelberg、Marckrain、Moenchberg、Sonnenglanz、Steingrubler、Altenberg de Wolxheim 等知名地塊。',
  },
  {
    type: 'summary',
    message: 'Sittler 地質分類學習完成！接下來將依此架構逐一探索 51 個 Grand Cru。',
    keyPoints: [
      'Claude Sittler 依岩石與土壤成因，將 51 個 Grand Cru 歸納為十大地質族群',
      '族群大小懸殊：片岩僅 1 個（Kastelberg），泥灰石灰岩多達 13 個',
      '地質分類能解釋「為什麼」而非只是「記憶地名」——這是理解風土的關鍵方法',
      '本課程 Level 2 後續所有課程，都依此十大族群架構展開',
    ],
    nextLesson: '下一課：Kastelberg — 片岩上的 Riesling',
  },
]

const AL2M2L1_slides = [
  {
    type: 'cover',
    icon: '⬛',
    gradient: 'linear-gradient(135deg, #2d3436, #636e72)',
    title: 'Kastelberg — 片岩上的 Riesling',
    subtitle: 'Level 2 · 第三課 · 片岩族群',
    points: [
      { icon: '🏘️', label: 'Andlau 村', text: '全阿爾薩斯唯一的片岩 Grand Cru' },
      { icon: '📏', label: '5.82 公頃', text: '面積不大，卻是阿爾薩斯最古老的葡萄園之一' },
      { icon: '👑', label: 'Riesling 專屬', text: '志留紀片岩造就極致的礦石感與骨架' },
    ],
  },
  {
    type: 'content',
    icon: '🪨',
    title: '志留紀片岩：全阿爾薩斯獨一無二的地質',
    html: `
      <p>Kastelberg 位於 Andlau 村北側，是一座陡峭的小山丘，朝向東南，海拔 240–300 公尺，面積僅 <strong>5.82 公頃</strong>。</p>
      <p style="margin-top:8px">其地質基礎是<strong>志留紀（Silurian）Steige 片岩</strong>——這是全阿爾薩斯獨一無二的地質類型，被鄰近的 <strong>Andlau 花崗岩</strong>（位於地塊上方）變質作用改造，形成質地極為堅硬、色澤深沉的岩石，主要由石英、雲母與綠泥石組成，造就了排水極佳、多石的土壤。</p>
    `,
  },
  {
    type: 'content',
    icon: '📜',
    title: '羅馬時代的古老葡萄園',
    html: `
      <p>Kastelberg 是阿爾薩斯歷史最悠久的葡萄園之一——早在<strong>羅馬占領時期</strong>就已種植葡萄。1064 年的文獻已記載此地出產「偉大的酒」（grands vins）。</p>
      <p style="margin-top:8px">Andlau 的葡萄農早在 <strong>1850 年</strong>就開始以「Riesling Kastelberg」之名獨立商業化銷售——比 1975 年 Grand Cru 法令的正式承認早了超過一世紀。</p>
    `,
  },
  {
    type: 'content',
    icon: '🍷',
    title: 'Kastelberg 的 Riesling 風格',
    html: `
      <p>Kastelberg 僅授權種植 <strong>Riesling</strong> 一個品種。片岩土壤賦予酒款鮮明的<strong>品種特性（race）、剛健有力（virilité）</strong>，以及<strong>細緻內斂的香氣</strong>——繼承了這片獨特風土所賦予的一切特質，是絕佳的陳年酒款。</p>
    `,
  },
  {
    type: 'quiz',
    question: 'Kastelberg 的地質基礎有什麼獨特之處？',
    options: [
      '是阿爾薩斯唯一的火山岩地塊',
      '是全阿爾薩斯唯一的片岩地塊——志留紀 Steige 片岩，被鄰近花崗岩變質為堅硬深色岩石',
      '是阿爾薩斯面積最大的 Grand Cru',
      '是唯一允許混釀的 Grand Cru',
    ],
    answer: 1,
    explanation: 'Kastelberg 的地質基礎是志留紀（Silurian）Steige 片岩，這是全阿爾薩斯獨一無二的地質類型，被鄰近的 Andlau 花崗岩變質作用改造成堅硬深色的岩石（石英、雲母、綠泥石），因此在 Claude Sittler 的十大地質族群分類中自成一格，是唯一的「片岩」族群成員。',
  },
  {
    type: 'summary',
    message: 'Kastelberg 學習完成！',
    keyPoints: [
      'Kastelberg（Andlau，5.82ha）是全阿爾薩斯唯一的片岩 Grand Cru',
      '志留紀 Steige 片岩被 Andlau 花崗岩變質，形成堅硬深色的石英雲母綠泥石岩',
      '羅馬時代即已種植，1064 年文獻記載，1850 年即以自己名稱商業化銷售',
      '僅授權 Riesling，風格剛健有力、礦石感強烈、陳年潛力極佳',
    ],
    nextLesson: '下一課：Rangen 與 Muenchberg — 火山沉積岩兩傑',
  },
]

const AL2M2L2_slides = [
  {
    type: 'cover',
    icon: '🌋',
    gradient: 'linear-gradient(135deg, #c0392b, #8e44ad)',
    title: 'Rangen 與 Muenchberg — 火山沉積岩兩傑',
    subtitle: 'Level 2 · 第四課 · 火山沉積岩族群',
    points: [
      { icon: '🌋', label: 'Rangen', text: '全阿爾薩斯唯一的真正火山岩地塊，最南端 Grand Cru' },
      { icon: '🏔️', label: 'Muenchberg', text: '二疊紀火山碎屑岩，Ungersberg 屏障下的獨特微氣候' },
      { icon: '🌡️', label: '共同點', text: '深色岩石蓄熱佳，賦予酒款濃縮而獨特的風味' },
    ],
  },
  {
    type: 'compare',
    title: 'Rangen vs Muenchberg：兩種火山地質的對比',
    items: [
      {
        icon: '🌋',
        label: 'Rangen（Thann & Vieux-Thann）',
        desc: '全阿爾薩斯最南端、唯一真正的火山岩地塊：矽質岩與玄武質熔岩，深色多石，蓄熱極佳。Thur 河流經山腳，抵禦春霜。22.13ha，Riesling／Pinot Gris／Gewurztraminer。Thann 是全阿爾薩斯唯一「整個轄區葡萄園都被列為 Grand Cru」的市鎮。',
        color: '#c0392b',
      },
      {
        icon: '🏔️',
        label: 'Muenchberg（Nothalten）',
        desc: '海拔 901m 的 Ungersberg 砂岩孤丘屏障，阻擋西風降雨。地質為二疊紀（2.5 億年前）火山碎屑堆積岩（含火山灰與凝灰岩），多石貧瘠但排水極佳、升溫快。17.70ha，以 Riesling 為主。12 世紀熙篤會修士已在此耕作。',
        color: '#8e44ad',
      },
    ],
  },
  {
    type: 'content',
    icon: '📜',
    title: 'Rangen：熔岩上的傳奇',
    html: `
      <p>13 世紀起，前往 Thann 聖蒂博教堂朝聖的修士就已盛讚 Rangen；16 世紀作家 Fischart、Brand，乃至<strong>蒙田（Michel de Montaigne）</strong>1580 年遊記都曾記述此地「最美、耕作最精良」的葡萄園景象。</p>
      <p style="margin-top:8px">風格上：Riesling 展現優雅細緻的果香，Pinot Gris 與 Gewurztraminer 則以力量與品種特性見長——是阿爾薩斯最獨特的「火山系」風味。</p>
    `,
  },
  {
    type: 'quiz',
    question: 'Rangen 這個地塊有什麼獨一無二的特徵？',
    options: [
      '是阿爾薩斯面積最大的 Grand Cru',
      '是全阿爾薩斯唯一真正的火山岩地塊，且 Thann 是唯一整個轄區都列為 Grand Cru 的市鎮',
      '是唯一允許種植 Chardonnay 的 Grand Cru',
      '是海拔最高的 Grand Cru',
    ],
    answer: 1,
    explanation: 'Rangen 是全阿爾薩斯唯一由真正火山岩（矽質岩與玄武質熔岩）構成的 Grand Cru，也是全產區最南端的 Grand Cru。此外，Thann 是阿爾薩斯唯一「整個市鎮轄區的葡萄園都被列為 Grand Cru」的特殊案例。',
  },
  {
    type: 'summary',
    message: '火山沉積岩兩傑學習完成！',
    keyPoints: [
      'Rangen（Thann，22.13ha）：全阿爾薩斯唯一真正火山岩地塊，最南端 GC，Thann 全轄區皆為 GC',
      'Muenchberg（Nothalten，17.70ha）：二疊紀火山碎屑岩，Ungersberg 屏障降雨，以 Riesling 著稱',
      '深色火山系岩石共同特點：蓄熱佳、排水好，造就濃縮而獨特的風味印記',
    ],
    nextLesson: '下一課：Wiebelsberg・Kessler・Kitterlé — 孚日砂岩三傑',
  },
]

const AL2M2L3_slides = [
  {
    type: 'cover',
    icon: '🟫',
    gradient: 'linear-gradient(135deg, #d35400, #e67e22)',
    title: 'Wiebelsberg・Kessler・Kitterlé — 孚日砂岩三傑',
    subtitle: 'Level 2 · 第五課 · 砂岩族群',
    points: [
      { icon: '🏖️', label: '孚日砂岩', text: '石英砂粒膠結而成，排水佳、升溫快' },
      { icon: '🍷', label: '風格光譜', text: '從 Wiebelsberg 的優雅到 Kitterlé 的濃縮，展現砂岩的多樣可能' },
      { icon: '🏛️', label: '獨立商標傳統', text: 'Kessler 與 Kitterlé 早在 1830 年就以自己名稱銷售' },
    ],
  },
  {
    type: 'content',
    icon: '🏖️',
    title: '孚日砂岩：排水快、升溫快的輕盈風土',
    html: `
      <p>孚日砂岩（grès vosgien）由<strong>石英砂粒經矽質或鐵質基質膠結</strong>而成，部分夾雜黏土層。這類土壤<strong>砂質、排水極佳、升溫迅速</strong>——陡坡地形更能充分利用岩石釋放的熱能，造就出理想的微氣候。</p>
    `,
  },
  {
    type: 'compare',
    title: '砂岩三傑：各具特色的孚日砂岩地塊',
    items: [
      {
        icon: '🌸',
        label: 'Wiebelsberg（Andlau，12.52ha）',
        desc: '孚日砂岩上覆第四紀溶蝕堆積物，砂質排水佳、快速升溫。1852 年 Stoltz 的著名 Grand Cru 分級著作中已列名。授權 Riesling，風格細緻花香、風骨高貴，陳年潛力極佳。',
        color: '#d35400',
      },
      {
        icon: '🌸',
        label: 'Kessler（Guebwiller，28.53ha）',
        desc: 'Buntsandstein 孚日砂岩，底部有 Muschelkalk 石灰岩露頭。1394 年即有文獻記載，1830 年起獨立商業化銷售。以 Gewurztraminer 為主，花香濃郁，複雜持久但從不粗暴。',
        color: '#e67e22',
      },
      {
        icon: '⛰️',
        label: 'Kitterlé（Guebwiller，25.79ha）',
        desc: '陡坡多面朝向（南、東南、西南），石牆梯田獨樹一格，是阿爾薩斯絕無僅有的地形。1699 年即有記載，1830 年起獨立商標銷售。Riesling／Gewurztraminer／Pinot Gris 三者皆優異，低產量帶來極致濃縮與長壽潛力。',
        color: '#c0392b',
      },
    ],
  },
  {
    type: 'quiz',
    question: 'Kessler 與 Kitterlé 這兩個 Guebwiller 的 Grand Cru，有什麼共同的歷史特色？',
    options: [
      '兩者都是阿爾薩斯最新劃定的 Grand Cru（2007 年）',
      '兩者都早在 1830 年就開始以自己的地塊名稱獨立商業化銷售',
      '兩者都只能種植 Muscat',
      '兩者都位於 Bas-Rhin 省',
    ],
    answer: 1,
    explanation: 'Kessler 與 Kitterlé 皆位於 Guebwiller，兩者都擁有悠久的獨立商標傳統——早在 1830 年，這兩個地塊就已經以自己的名稱獨立進行商業化銷售，遠早於 1975 年 Grand Cru 法定分級的建立，顯示這兩處風土在阿爾薩斯歷史上長期享有卓越聲譽。',
  },
  {
    type: 'summary',
    message: '砂岩三傑學習完成！',
    keyPoints: [
      '孚日砂岩：石英砂粒膠結而成，排水佳、升溫快，適合陡坡地形',
      'Wiebelsberg（Andlau）：1852 年即列名經典分級，Riesling 專屬，花香細緻',
      'Kessler（Guebwiller）：1394 年文獻記載，Gewurztraminer 為主，1830 年起獨立商標',
      'Kitterlé（Guebwiller）：多面朝向的陡坡梯田，阿爾薩斯地形絕無僅有，三品種皆優異',
    ],
    nextLesson: '下一課：花崗岩產區導論',
  },
]

const AL2M3L1_slides = [
  {
    type: 'cover',
    icon: '🏔️',
    gradient: 'linear-gradient(135deg, #636e72, #2d3436)',
    title: '花崗岩產區導論：Schlossberg・Sommerberg・Wineck-Schlossberg',
    subtitle: 'Level 2 · 第六課 · 花崗岩族群（上）',
    points: [
      { icon: '🏔️', label: '花崗岩族群', text: '八個 Grand Cru 中最大的地質族群之一，集中於 Kaysersberg 谷地周邊' },
      { icon: '💎', label: '礦物豐富', text: '鉀、鎂、氟、磷等礦物賦予酒款細緻多元的香氣' },
      { icon: '👑', label: 'Riesling 之鄉', text: '花崗岩砂質土壤是 Riesling 展現骨架與礦石感的理想舞台' },
    ],
  },
  {
    type: 'content',
    icon: '💎',
    title: '花崗岩：孚日山最古老的岩石',
    html: `
      <p>花崗岩（granite）是孚日山脈最古老的結晶岩基盤，風化後形成的<strong>「花崗岩砂」（arène granitique）</strong>質地砂質、排水極佳，富含<strong>鉀、鎂、氟、磷</strong>等多元礦物質——這正是花崗岩地塊的酒款經常展現細緻多層次香氣的關鍵。</p>
      <p style="margin-top:8px">阿爾薩斯共有 <strong>8 個花崗岩 Grand Cru</strong>，多集中於 Kaysersberg 谷地周邊（Kientzheim、Katzenthal、Ammerschwihr、Niedermorschwihr、Turckheim）與北側的 Dambach-la-Ville、Blienschwiller、Kintzheim、Rodern 一帶。</p>
    `,
  },
  {
    type: 'compare',
    title: '花崗岩三大代表：Kaysersberg 谷地群',
    items: [
      {
        icon: '👑',
        label: 'Schlossberg（Kientzheim，80.28ha）',
        desc: '阿爾薩斯面積最大的 Grand Cru！migmatite + Thannenkirch 侵入花崗岩，礦物豐富多元。陡坡需梯田耕作。Riesling 為主，1928 年起 Kaysersberg／Kientzheim 農民即以書面公約規範產區條件，後於 1975/1992 法令中確立。',
        color: '#2d3436',
      },
      {
        icon: '⛰️',
        label: 'Sommerberg（Niedermorschwihr & Katzenthal，28.36ha）',
        desc: 'Turckheim 兩雲母花崗岩，坡度高達 45°！全阿爾薩斯數一數二陡峭的葡萄園。1214 年即有種植紀錄，17 世紀已劃定「Sommerberg」邊界。以 Riesling 著稱，1–3 年陳年後完整展現風格。',
        color: '#7f8c8d',
      },
      {
        icon: '🏰',
        label: 'Wineck-Schlossberg（Katzenthal & Ammerschwihr，27.40ha）',
        desc: '同樣是 Turckheim 兩雲母花崗岩，山谷三面環抱形成獨特微氣候。因 Wineck 城堡（阿爾薩斯唯一完全被葡萄園環繞的城堡）而得名。Riesling 之鄉，Gewurztraminer 表現亦佳。',
        color: '#636e72',
      },
    ],
  },
  {
    type: 'quiz',
    question: 'Schlossberg（Kientzheim）在 51 個 Grand Cru 中有什麼特殊地位？',
    options: [
      '是面積最小的 Grand Cru',
      '是面積最大的 Grand Cru（80.28 公頃）',
      '是唯一的火山岩地塊',
      '是唯一允許混釀的 Grand Cru',
    ],
    answer: 1,
    explanation: 'Schlossberg 面積達 80.28 公頃，是 51 個 Alsace Grand Cru 中面積最大的一個，也是最早（1975/1992 法令前，1928 年起）就由 Kaysersberg 與 Kientzheim 農民以書面公約自主規範生產條件的花崗岩經典地塊。',
  },
  {
    type: 'summary',
    message: '花崗岩產區導論學習完成！',
    keyPoints: [
      '花崗岩風化砂土排水佳、礦物豐富（鉀鎂氟磷），是 Riesling 展現骨架的理想舞台',
      'Schlossberg（Kientzheim，80.28ha）：阿爾薩斯面積最大的 Grand Cru',
      'Sommerberg（Niedermorschwihr）：坡度達 45°，全產區數一數二陡峭',
      'Wineck-Schlossberg（Katzenthal）：因阿爾薩斯唯一完全被葡萄園環繞的城堡得名',
    ],
    nextLesson: '下一課：Frankstein・Brand・Winzenberg 及其他花崗岩 Cru',
  },
]

const AL2M3L2_slides = [
  {
    type: 'cover',
    icon: '🐉',
    gradient: 'linear-gradient(135deg, #7c4a2d, #636e72)',
    title: 'Frankstein・Brand・Winzenberg 及其他花崗岩 Cru',
    subtitle: 'Level 2 · 第七課 · 花崗岩族群（下）',
    points: [
      { icon: '🐉', label: 'Brand「火之地」', text: 'Turckheim 傳說中屠龍之地，花崗岩族群面積第二大' },
      { icon: '🏰', label: 'Praelatenberg', text: '守望 Haut-Kœnigsbourg 城堡的變質岩地塊' },
      { icon: '🗺️', label: '北境代表', text: 'Frankstein 與 Winzenberg 守護阿爾薩斯北段花崗岩帶' },
    ],
  },
  {
    type: 'compare',
    title: '花崗岩族群剩餘五傑',
    items: [
      {
        icon: '🐉',
        label: 'Brand（Turckheim，57.95ha）',
        desc: '傳說「太陽與惡龍搏鬥之地」，中世紀起聲名遠播。Turckheim 兩雲母花崗岩風化砂土。Riesling／Pinot Gris／Gewurztraminer 三者皆優異，酒款細緻精巧、均衡感如帝王般高雅。',
        color: '#c0392b',
      },
      {
        icon: '🌿',
        label: 'Frankstein（Dambach-la-Ville，56.20ha）',
        desc: '兩雲母花崗岩風化砂，坡向東與東南，日照極早。中世紀聲譽遠播，Colmar Unterlinden 修道院與 Strasbourg 主教座堂均曾擁有此地葡萄園（1320年）。Riesling 與 Gewurztraminer 適配，數年瓶陳後展現最佳狀態。',
        color: '#27ae60',
      },
      {
        icon: '🍇',
        label: 'Winzenberg（Blienschwiller，19.20ha）',
        desc: '兩雲母花崗岩，陡坡南南東向，日照時數極長。Riesling／Gewurztraminer／Pinot Gris 皆宜，酒款展現細緻優雅的花香特質，陳年潛力優異。',
        color: '#16a085',
      },
      {
        icon: '🏰',
        label: 'Praelatenberg（Kintzheim，18.70ha）',
        desc: '受 Haut-Kœnigsbourg 城堡俯瞰。變質岩片麻岩（gneiss）為基礎，重矽質土含大量鐵質礫石，排水佳、升溫快。823 年即有文獻記載。Riesling／Gewurztraminer／Muscat／Pinot Gris 皆優，陳年後展現細緻優雅。',
        color: '#95a5a6',
      },
      {
        icon: '🔔',
        label: 'Gloeckelberg（Rodern & Saint-Hippolyte，23.40ha）',
        desc: '花崗岩基盤，酸性砂質棕色土，局部因接觸石炭紀片岩／砂岩而偏黏質。以 Pinot Gris 與 Gewurztraminer 為主，中世紀起即為修道院所有，酒款細緻輕盈、優雅且香氣持久。',
        color: '#8d6e63',
      },
    ],
  },
  {
    type: 'quiz',
    question: 'Brand（Turckheim）這個地塊名稱在阿爾薩斯語中的傳說由來是什麼？',
    options: [
      '得名於當地一位知名釀酒師',
      '傳說中太陽與惡龍搏鬥之地，被稱為「火之地」',
      '因盛產某種特殊香料而得名',
      '得名於附近的一座橋梁',
    ],
    answer: 1,
    explanation: 'Brand 意為「火」，傳說這裡曾是太陽與惡龍搏鬥之地——傳說中惡龍最終被迫退居陰暗洞穴，而 Brand 的葡萄酒則自中世紀起就在阿爾薩斯 Grand Cru 的星空中閃耀至今，是花崗岩族群面積第二大的地塊（57.95ha）。',
  },
  {
    type: 'summary',
    message: '花崗岩族群學習完成！至此已認識全部 8 個花崗岩 Grand Cru。',
    keyPoints: [
      'Brand（Turckheim，57.95ha）：傳說屠龍之地，三大貴族品種皆優異',
      'Frankstein（Dambach-la-Ville）與 Winzenberg（Blienschwiller）：守護阿爾薩斯北段花崗岩帶',
      'Praelatenberg（Kintzheim）：片麻岩變質岩基礎，受 Haut-Kœnigsbourg 城堡俯瞰',
      'Gloeckelberg（Rodern）：花崗岩基礎但質地偏黏，Pinot Gris／Gewurztraminer 為主',
      '八個花崗岩 Grand Cru 共同特質：礦物豐富的風化砂土，是 Riesling 骨架與細緻香氣的理想搖籃',
    ],
    nextLesson: '下一課：石灰岩四傑',
  },
]

const AL2M4L1_slides = [
  {
    type: 'cover',
    icon: '⬜',
    gradient: 'linear-gradient(135deg, #bdc3c7, #7f8c8d)',
    title: '石灰岩四傑：Bruderthal・Rosacker・Steinert・Steinklotz',
    subtitle: 'Level 2 · 第八課 · 石灰岩族群',
    points: [
      { icon: '⬜', label: '石灰岩族群', text: '四個地塊，Muschelkalk／Dogger 石灰質基岩' },
      { icon: '🍇', label: 'Riesling 傾向', text: '排水與保水平衡，是 Riesling 的重要風土之一' },
      { icon: '🌿', label: '孚日下丘陵優勢區', text: 'Sittler 分類中「氣候最佳平衡點」的具體體現' },
    ],
  },
  {
    type: 'content',
    icon: '⬜',
    title: '石灰岩：孚日下丘陵的核心地質',
    html: `
      <p>石灰岩族群的四個 Grand Cru 都座落於「孚日下丘陵」（Collines sous-vosgiennes）——正是 Level 1 課程提到的「氣候最佳平衡點」地帶。地質基礎為 <strong>Muschelkalk（貝殼石灰岩）或 Dogger（侏羅紀中期）石灰岩</strong>，排水與保水達到絕佳平衡。</p>
    `,
  },
  {
    type: 'compare',
    title: '石灰岩四傑',
    items: [
      {
        icon: '🌸',
        label: 'Bruderthal（Molsheim，18.40ha）',
        desc: 'Muschelkalk 上部＋Lettenkohle 石灰岩／白雲岩，均質泥灰石灰土。1316 年即有文獻記載（熙篤會修士命名）。Riesling／Gewurztraminer 為主，Gewurztraminer 帶洋槐花與玫瑰香氣，Riesling 持久礦石感突出。',
        color: '#95a5a6',
      },
      {
        icon: '🌹',
        label: 'Rosacker（Hunawihr，26.18ha）',
        desc: 'Muschelkalk 上部＋Lettenkohle 白雲岩化石灰岩，鈣鎂質土壤。1483 年文獻記載。Riesling（50%）＋Gewurztraminer（30%）。年輕 Riesling 帶胡椒調性，陳年後展現礦石感；Gewurztraminer 則有玫瑰紫羅蘭香氣。',
        color: '#e91e8c',
      },
      {
        icon: '🍑',
        label: 'Steinert（Pfaffenheim & Westhalten，38.90ha）',
        desc: 'Dogger 鮞狀石灰岩，乾燥且滲透性極佳，需高抗石灰性砧木。1150 年本篤會、巴賽爾主教與史特拉斯堡主教皆擁有此地葡萄園。Gewurztraminer／Pinot Gris／Riesling 為主，陳年後香氣尤其發展完全。',
        color: '#bdc3c7',
      },
      {
        icon: '🧱',
        label: 'Steinklotz（Marlenheim，40.60ha）',
        desc: '「石塊」之意——Muschelkalk 與白雲岩化 Keuper「石灰岩塊」，表土僅約 20cm。589 年即有阿爾薩斯最早的葡萄酒文字記載（Grégoire de Tours）！Pinot Gris／Riesling／Gewurztraminer，酒款高貴且陳年潛力極佳，展現石灰岩土壤特有的細緻果香與辛香調性。',
        color: '#7f8c8d',
      },
    ],
  },
  {
    type: 'quiz',
    question: 'Steinklotz（Marlenheim）在阿爾薩斯葡萄酒歷史上有什麼特殊地位？',
    options: [
      '是唯一的火山岩 Grand Cru',
      '589 年墨洛溫王朝相關的文獻記載，是阿爾薩斯已知最早的葡萄酒文字紀錄',
      '是面積最小的 Grand Cru',
      '是唯一允許種植 Chardonnay 的 Grand Cru',
    ],
    answer: 1,
    explanation: '根據 Grégoire de Tours 的記載，589 年墨洛溫王朝國王 Childebert II 在 Marlenheim 擁有葡萄園——這是阿爾薩斯已知最早的葡萄酒文字紀錄，而 Marlenheim 正是 Steinklotz 這個石灰岩 Grand Cru 的所在地，賦予它在阿爾薩斯葡萄酒史上獨特的開創地位。',
  },
  {
    type: 'summary',
    message: '石灰岩四傑學習完成！',
    keyPoints: [
      '石灰岩族群四地塊皆座落孚日下丘陵，是「氣候最佳平衡點」的具體展現',
      'Bruderthal（Molsheim）：1316 年熙篤會修士命名，Riesling／Gewurztraminer 均衡',
      'Rosacker（Hunawihr）：Riesling(50%)+Gewurztraminer(30%)，年輕帶胡椒、陳年展礦石感',
      'Steinert（Pfaffenheim）：鮞狀石灰岩極乾燥，需特殊抗鹼砧木',
      'Steinklotz（Marlenheim）：589 年阿爾薩斯已知最早的葡萄酒文字紀錄發生地',
    ],
    nextLesson: '下一課：灰砂岩三傑',
  },
]

const AL2M4L2_slides = [
  {
    type: 'cover',
    icon: '🟨',
    gradient: 'linear-gradient(135deg, #f39c12, #d35400)',
    title: '灰砂岩三傑：Geisberg・Pfingstberg・Zinnkoepflé',
    subtitle: 'Level 2 · 第九課 · 灰砂岩族群',
    points: [
      { icon: '👑', label: 'Zinnkoepflé', text: '「阿爾薩斯葡萄園的屋頂」，海拔可達 420m' },
      { icon: '🍷', label: 'Gewurztraminer 帝王', text: '灰砂岩土壤是 Gewurztraminer 展現力量的舞台' },
      { icon: '☀️', label: '極端乾燥微氣候', text: '三地塊都以低降雨量與強烈日照著稱' },
    ],
  },
  {
    type: 'content',
    icon: '🟨',
    title: '灰砂岩：三疊紀的乾燥慷慨',
    html: `
      <p>灰砂岩（calcaro-gréseux）族群由<strong>三疊紀（Trias）灰質砂岩</strong>構成，相對貧瘠但排水極佳。這三個地塊共同特徵是<strong>異常乾燥的微氣候</strong>——是阿爾薩斯貴腐甜酒與晚摘酒的絕佳搖籃。</p>
    `,
  },
  {
    type: 'compare',
    title: '灰砂岩三傑',
    items: [
      {
        icon: '🐐',
        label: 'Geisberg（Ribeauvillé，8.53ha）',
        desc: 'Muschelkalk 下部白雲岩／白雲質泥灰岩，陡坡需梯田耕作。1308 年即有文獻記載。Riesling 的「terre d\'élection」（天選之地）——發展出著名的強烈礦石感，是 Riesling 愛好者朝聖的地塊之一。',
        color: '#f39c12',
      },
      {
        icon: '🕊️',
        label: 'Pfingstberg（Orschwihr，28.15ha）',
        desc: '上部灰質砂岩＋雲母質砂岩（Muschelkalk 底部、Buntsandstein 頂部），下部偏黏質砂岩，因此又細分 Pfingstberg 與 Lippelsberg 兩個小地名。1299 年文獻記載。Gewurztraminer／Riesling／Pinot Gris／Muscat，花香濃郁，Riesling 需 1-2 年瓶陳方能完全展現。',
        color: '#e67e22',
      },
      {
        icon: '☀️',
        label: 'Zinnkoepflé（Soultzmatt & Westhalten，71.03ha）',
        desc: '「阿爾薩斯葡萄園的屋頂」——海拔高達 420m，三疊紀灰砂岩，古稱「Vallis Prænobilis」（尊貴之谷）。因 Petit/Grand Ballon 屏障，是全阿爾薩斯最乾燥地帶之一。「阿爾薩斯酒中帝王」Gewurztraminer 在此展現極致力量，Riesling 則意外地展現細緻與和諧。',
        color: '#d35400',
      },
    ],
  },
  {
    type: 'quiz',
    question: '哪個地塊被稱為「阿爾薩斯葡萄園的屋頂」，也是 Gewurztraminer 展現極致力量的代表地塊？',
    options: [
      'Geisberg', 'Pfingstberg', 'Zinnkoepflé——海拔可達 420m，因群山屏障成為全阿爾薩斯最乾燥地帶之一', 'Schlossberg',
    ],
    answer: 2,
    explanation: 'Zinnkoepflé（Soultzmatt & Westhalten）海拔可達 420m，被稱為「阿爾薩斯葡萄園的屋頂」，因 Petit Ballon 與 Grand Ballon 山峰屏障形成極度乾燥炎熱的微氣候，是「阿爾薩斯酒中帝王」Gewurztraminer 展現力量與辛香的代表地塊，Riesling 在此則意外地展現細緻與和諧。',
  },
  {
    type: 'summary',
    message: '灰砂岩三傑學習完成！',
    keyPoints: [
      '灰砂岩族群由三疊紀灰質砂岩構成，共同特徵是異常乾燥的微氣候',
      'Geisberg（Ribeauvillé）：Riesling 的「天選之地」，強烈礦石感著稱',
      'Pfingstberg（Orschwihr）：細分為 Pfingstberg 與 Lippelsberg 兩個小地名',
      'Zinnkoepflé（71.03ha）：「阿爾薩斯葡萄園屋頂」，Gewurztraminer 帝王級表現',
    ],
    nextLesson: '下一課：泥灰砂岩七傑',
  },
]

const AL2M5L1_slides = [
  {
    type: 'cover',
    icon: '🟧',
    gradient: 'linear-gradient(135deg, #e67e22, #d35400)',
    title: '泥灰砂岩七傑：Furstentum・Kirchberg de Ribeauvillé 等',
    subtitle: 'Level 2 · 第十課 · 泥灰砂岩族群',
    points: [
      { icon: '7️⃣', label: '七個地塊', text: '十大族群中數量僅次於泥灰石灰岩的次大族群' },
      { icon: '🍑', label: '貴腐傾向', text: 'Vorbourg 等地塊經常自然發展出貴腐果實' },
      { icon: '🌍', label: '地理分布廣', text: '從 Kientzheim 到 Rouffach，橫跨阿爾薩斯中南段' },
    ],
  },
  {
    type: 'content',
    icon: '🟧',
    title: '泥灰砂岩：混合質地的多樣風土',
    html: `
      <p>泥灰砂岩（marno-gréseux）族群由<strong>白堊紀 Dogger 砂質泥灰岩，或第三紀砂岩／石灰岩礫石堆積</strong>組成，質地介於純石灰岩與純砂岩之間，共 <strong>7 個 Grand Cru</strong>，是阿爾薩斯地理分布最廣的地質族群之一。</p>
    `,
  },
  {
    type: 'compare',
    title: '泥灰砂岩七傑（上）',
    items: [
      {
        icon: '👑',
        label: 'Furstentum（Kientzheim & Sigolsheim，30.50ha）',
        desc: 'Dogger 下部泥灰石灰砂岩，坡度達 37%，地中海式植被的「石灰質島嶼」。1330 年巴賽爾修道院文獻記載。Riesling／Gewurztraminer／Pinot Gris，力量與細緻兼具。',
        color: '#e67e22',
      },
      {
        icon: '⛰️',
        label: 'Kirchberg de Ribeauvillé（Ribeauvillé，11.40ha）',
        desc: '下部 Muschelkalk 白雲質泥灰岩＋上部灰質泥灰岩，黏質多石土。1328 年文獻記載。Riesling／Muscat 為主，Gewurztraminer／Pinot Gris 表現亦佳，泥灰石灰岩特有的優雅香氣隨時間展現。',
        color: '#f39c12',
      },
      {
        icon: '🏰',
        label: 'Ollwiller（Wuenheim，35.86ha）',
        desc: '第三紀砂質黏質沉積，全法國最乾燥地區之一（年均僅 450mm）。12 世紀城堡見證悠久歷史。Riesling／Gewurztraminer 為主，2-3 年陳年後風味全開。',
        color: '#c0392b',
      },
      {
        icon: '🍑',
        label: 'Pfersigberg（Eguisheim & Wettolsheim，74.55ha）',
        desc: '礫石灰岩基礎（Muschelkalk 灰色堅硬礫石 or 侏羅紀黃色礫石），鹼性 rendzine 土（pH7.7–8）。16 世紀文獻，1927 年 Colmar 首屆酒展重新發揚。Gewurztraminer 天選之地，Pinot Gris／Riesling／Muscat 亦優異。',
        color: '#e74c3c',
      },
    ],
  },
  {
    type: 'compare',
    title: '泥灰砂岩七傑（下）',
    items: [
      {
        icon: '🪞',
        label: 'Saering（Guebwiller，26.75ha）',
        desc: '漸新世 latdorfien 期礫岩＋夾層泥灰岩，重質泥灰砂土。1250 年文獻記載，1830 年起獨立商標銷售。以 Riesling 為優先，花香典型，乾爽且風骨清晰。',
        color: '#16a085',
      },
      {
        icon: '🪞',
        label: 'Spiegel（Bergholtz & Guebwiller，18.26ha）',
        desc: '漸新世礫岩（砂岩礫石為主）＋夾層泥灰岩，砂黏質土保水性佳。50 年以上聲譽。Gewurztraminer／Pinot Gris 為主，南向坡地亦有優異 Riesling／Muscat，Pinot Gris 尤其飽滿圓潤。',
        color: '#2980b9',
      },
      {
        icon: '🍇',
        label: 'Vorbourg（Rouffach & Westhalten，73.61ha）',
        desc: '砂岩與鮞狀石灰岩礫石泥灰土，表層覆黃土。極早熟、常自然發展貴腐。762 年主教 Heddo 捐贈古老葡萄園紀錄。Riesling／Gewurztraminer／Pinot Gris／Muscat 皆宜，陳年展現水蜜桃、杏桃、榛果香氣。',
        color: '#27ae60',
      },
    ],
  },
  {
    type: 'quiz',
    question: 'Ollwiller（Wuenheim）這個地塊的氣候有什麼突出特色？',
    options: [
      '是阿爾薩斯降雨量最高的地塊',
      '年均降雨量僅約 450mm，是全法國最乾燥地區之一',
      '受海洋性氣候影響最強',
      '是唯一有霜害風險的地塊',
    ],
    answer: 1,
    explanation: 'Ollwiller 因 Freundstein 與 Vieil-Armand 山峰形成的谷地屏障，阻擋了盛行風向，年均降雨量僅約 450mm，是全法國最乾燥的地區之一——這也是它與同族群的 Vorbourg（自然發展貴腐果實）形成有趣對照的原因之一。',
  },
  {
    type: 'summary',
    message: '泥灰砂岩七傑學習完成！',
    keyPoints: [
      '泥灰砂岩族群共 7 個地塊，地理分布最廣，質地介於石灰岩與砂岩之間',
      'Furstentum：坡度 37%，地中海式植被「石灰質島嶼」',
      'Pfersigberg（74.55ha）：Gewurztraminer 天選之地，鹼性 rendzine 土',
      'Ollwiller：年僅 450mm 降雨，全法國最乾燥地區之一',
      'Vorbourg（73.61ha）：極早熟，常自然發展貴腐果實',
    ],
    nextLesson: '下一課：泥灰石灰砂岩——Altenberg de Bergheim 混釀特例',
  },
]

const AL2M5L2_slides = [
  {
    type: 'cover',
    icon: '🟥',
    gradient: 'linear-gradient(135deg, #e74c3c, #c0392b)',
    title: '泥灰石灰砂岩：Altenberg de Bergheim 混釀特例',
    subtitle: 'Level 2 · 第十一課 · 泥灰石灰砂岩族群',
    points: [
      { icon: '🍷', label: '混釀特例', text: 'Altenberg de Bergheim 是全阿爾薩斯僅二的混釀 Grand Cru 之一' },
      { icon: '📅', label: '古老聲譽', text: '四個地塊皆有 8-14 世紀的悠久文獻記載' },
      { icon: '🌿', label: 'Zotzenberg', text: '唯一歷史上允許 Sylvaner 的 Grand Cru' },
    ],
  },
  {
    type: 'content',
    icon: '🍷',
    title: 'Altenberg de Bergheim：全阿爾薩斯混釀典範',
    html: `
      <p>Altenberg de Bergheim（Bergheim，35.06ha）位於 <strong>Ribeauvillé 斷層帶</strong>，紅色泥灰石灰岩土壤，多石且富含化石。地塊朝正南，氣候溫和穩定。12 世紀起即以優質葡萄酒聞名。</p>
      <p style="margin-top:8px">它是<strong>全阿爾薩斯僅二的混釀 Grand Cru 之一</strong>（另一個是 Kaefferkopf，Level 3 深入介紹）：可用 <strong>Riesling 50–70% + Pinot Gris 10–25% + Gewurztraminer 10–25%</strong> 混釀而成，是阿爾薩斯調配酒藝術的巔峰展現，也以其優質的天然混釀酒款聞名。</p>
    `,
  },
  {
    type: 'compare',
    title: '泥灰石灰砂岩其他三傑',
    items: [
      {
        icon: '🌸',
        label: 'Engelberg（Dahlenheim & Scharrachbergheim，14.80ha）',
        desc: '均質多石泥灰石灰岩，富含化石，Muschelkalk 佔優勢。884 年即有文獻記載「高貴的酒」，1135 年史特拉斯堡主教座堂亦擁有此地葡萄園。Gewurztraminer／Riesling 為主，需數年瓶陳方能完全展現優雅風味。',
        color: '#e74c3c',
      },
      {
        icon: '⛰️',
        label: 'Osterberg（Ribeauvillé，24.60ha）',
        desc: 'Muschelkalk 中部泥灰岩＋東側 Lettenkohle 白雲質石灰岩，黏質多石。中世紀文獻記載，Ribeaupierre 領主曾擁有此地葡萄園。Riesling／Gewurztraminer／Pinot Gris 皆優，展現強勁礦石感與長壽潛力。',
        color: '#d35400',
      },
      {
        icon: '🌾',
        label: 'Zotzenberg（Mittelbergheim，36.45ha）',
        desc: '侏羅紀泥灰石灰岩＋漸新世石灰質礫岩，保水抗旱。1364 年首度以「Zoczenberg」記載。歷史上是唯一的 <strong>Sylvaner 專屬 Grand Cru</strong>（獨家授權），20 世紀初即以自己名稱商業化銷售；Gewurztraminer／Riesling／Pinot Gris 表現亦優異。',
        color: '#f39c12',
      },
    ],
  },
  {
    type: 'quiz',
    question: 'Zotzenberg（Mittelbergheim）在 51 個 Grand Cru 中有什麼獨特之處？',
    options: [
      '是唯一的火山岩地塊',
      '歷史上是唯一授權種植 Sylvaner 的 Grand Cru',
      '是面積最大的 Grand Cru',
      '是唯一位於萊茵平原的 Grand Cru',
    ],
    answer: 1,
    explanation: 'Zotzenberg 歷史上以 Sylvaner 聞名，是阿爾薩斯特別授權 Sylvaner 可用於 Grand Cru 等級的地塊——這在整個「僅限四大貴族品種」的 Grand Cru 體系中是獨一無二的特例，展現出此地泥灰石灰岩風土對 Sylvaner 品種的獨特加持。',
  },
  {
    type: 'summary',
    message: '泥灰石灰砂岩族群學習完成！',
    keyPoints: [
      'Altenberg de Bergheim（35.06ha）：全阿爾薩斯僅二的混釀 Grand Cru（Riesling+Pinot Gris+Gewurztraminer）',
      'Engelberg（Dahlenheim）：884 年文獻記載「高貴的酒」，阿爾薩斯最早的產區紀錄之一',
      'Osterberg（Ribeauvillé）：Ribeaupierre 領主的歷史葡萄園',
      'Zotzenberg（Mittelbergheim）：歷史上唯一授權 Sylvaner 的 Grand Cru',
    ],
    nextLesson: '下一課：泥灰石灰岩群（上）',
  },
]

const AL2M5L3_slides = [
  {
    type: 'cover',
    icon: '🟪',
    gradient: 'linear-gradient(135deg, #8e44ad, #6c3483)',
    title: '泥灰石灰岩群（上）：Eichberg・Goldert・Hengst',
    subtitle: 'Level 2 · 第十二課 · 泥灰石灰岩族群（最大族群，上）',
    points: [
      { icon: '🟪', label: '最大族群', text: '13 個 Grand Cru，超過四分之一集中於此' },
      { icon: '🐴', label: 'Hengst「種馬」', text: '以陳年潛力聞名，10-20 年以上輕鬆勝任' },
      { icon: '🏆', label: 'Eguisheim 核心區', text: 'Eichberg、Pfersigberg 所在的著名酒村' },
    ],
  },
  {
    type: 'content',
    icon: '🟪',
    title: '泥灰石灰岩：阿爾薩斯最大的地質族群',
    html: `
      <p>泥灰石灰岩（marno-calcaires）是十大族群中<strong>數量最多的一支，共 13 個 Grand Cru</strong>——由漸新世礫岩與泥灰岩交互堆積而成，質地略比純石灰岩豐富，兼具保水與排水的雙重優勢，是 Gewurztraminer 展現結構與力量的重要舞台。本課先介紹其中 7 個地塊。</p>
    `,
  },
  {
    type: 'compare',
    title: '泥灰石灰岩群（上，一）',
    items: [
      {
        icon: '🏡',
        label: 'Altenberg de Wolxheim（Wolxheim，31.20ha）',
        desc: 'Lias＋Dogger 泥灰石灰岩，多石。史特拉斯堡主教（1003年）、Hohenbourg 修道院（1188年）等中世紀教會皆有記載。拿破崙一世曾讚賞其 Riesling。Riesling(18ha)+Gewurztraminer(8ha)，強勁和諧、風味細緻。',
        color: '#8e44ad',
      },
      {
        icon: '🌰',
        label: 'Eichberg（Eguisheim，57.62ha）',
        desc: '漸新世礫岩泥灰岩，Colmar 一帶降雨量最低區域。11 世紀 Marbach 修道院即有課稅紀錄。Riesling／Gewurztraminer／Pinot Gris，酒款極為豐腴，風味細緻果香突出，陳年潛力優異。',
        color: '#9b59b6',
      },
      {
        icon: '🌾',
        label: 'Florimont（Ingersheim & Katzenthal，21ha）',
        desc: 'Bathonien/Bajocien 石灰岩＋漸新世礫岩泥灰岩，位於「Colmar 橢圓區」年降雨僅約 550mm。Gewurztraminer 為首要品種，也有優異 Riesling。酒款飽滿均衡、極具陳年潛力。',
        color: '#7d3c98',
      },
      {
        icon: '🌇',
        label: 'Goldert（Gueberschwihr，45.35ha）',
        desc: 'Dogger 鮞狀石灰岩＋第四紀溶蝕堆積物。750 年即為知名酒村。1728 年琉森市議會特許此地酒款在市場優先販售位置銷售。Gewurztraminer 首選，展現金黃色澤與絕佳和諧感，得名自「金色」（Gold）。',
        color: '#a569bd',
      },
    ],
  },
  {
    type: 'compare',
    title: '泥灰石灰岩群（上，二）',
    items: [
      {
        icon: '🍑',
        label: 'Hatschbourg（Hattstatt & Vœgtlinshoffen，47.36ha）',
        desc: '泥灰石灰岩＋黃土沉積，厚實排水良好。中世紀文獻記載，16-17 世紀售價高昂。Gewurztraminer／Pinot Gris／Riesling 為主，Muscat 展現細膩風味。酒款典型性突出、香氣發展完整，陳年實力堅強。',
        color: '#8e44ad',
      },
      {
        icon: '🐴',
        label: 'Hengst（Wintzenheim，75.78ha）',
        desc: '漸新世礫岩＋石灰質泥灰岩，「Hengst」意為「種馬」。9 世紀 Murbach 修道院捐贈文獻記載。Gewurztraminer 為主，年輕時展現「野性」，10-20 年甚至更長瓶陳後馴化為優雅細緻的「純種馬」。',
        color: '#6c3483',
      },
      {
        icon: '⛪',
        label: 'Kirchberg de Barr（Barr，40.63ha）',
        desc: '石灰岩至泥灰石灰岩，富含侏羅紀中期石灰岩塊礫石＋第三紀礫岩覆蓋。因山頂 Saint-Martin 禮拜堂得名，1760 年即受推崇。Gewurztraminer／Riesling／Pinot Gris 皆優，成熟較晚但陳年後展現驚人的結構與香料調性。',
        color: '#5b2c6f',
      },
    ],
  },
  {
    type: 'quiz',
    question: 'Hengst（Wintzenheim）這個地塊名稱「種馬」的由來，反映了它酒款怎樣的風格演變？',
    options: [
      '年輕時就非常溫順優雅，完全沒有變化',
      '年輕時展現「野性」風格，經過 10-20 年甚至更長的瓶陳後才馴化為優雅細緻的「純種馬」',
      '只在特定年份才會展現風格',
      '完全不適合陳年，須盡早飲用',
    ],
    answer: 1,
    explanation: 'Hengst 意為「種馬」，這個名稱恰如其分地描述了此地 Gewurztraminer 的風格演變：年輕時展現粗獷的「野性」特質，需要經過長時間（10-20 年甚至更長）的瓶中陳年才能被馴化、變得柔和精緻，最終展現出令人驚豔的優雅——正如馴服一匹純種馬需要時間與耐心。',
  },
  {
    type: 'summary',
    message: '泥灰石灰岩群（上）學習完成！',
    keyPoints: [
      '泥灰石灰岩是十大族群中最大的一支，共 13 個 Grand Cru，本課介紹前 7 個',
      'Eichberg（57.62ha）：Colmar 一帶降雨最低區，Gewurztraminer 極為豐腴',
      'Goldert：「金色」得名，1728 年琉森市議會特許優先販售',
      'Hengst（75.78ha）：「種馬」之名，年輕野性、長陳後展現優雅',
      'Kirchberg de Barr：因山頂 Saint-Martin 禮拜堂得名，1760 年即受推崇',
    ],
    nextLesson: '下一課：泥灰石灰岩群（下）與黏土泥灰岩',
  },
]

const AL2M5L4_slides = [
  {
    type: 'cover',
    icon: '💎',
    gradient: 'linear-gradient(135deg, #2980b9, #8e44ad)',
    title: '泥灰石灰岩群（下）與黏土泥灰岩：Schoenenbourg・Kanzlerberg',
    subtitle: 'Level 2 · 第十三課 · 泥灰石灰岩（下）與黏土泥灰岩族群',
    points: [
      { icon: '👑', label: 'Schoenenbourg', text: '伏爾泰曾擁有此地葡萄園，是 VT／SGN 貴腐甜酒的理想搖籃' },
      { icon: '🔬', label: 'Kanzlerberg', text: '全阿爾薩斯最小的 Grand Cru，僅 3.23 公頃' },
      { icon: '🟦', label: '黏土泥灰岩', text: '厚重保水土壤，是本課後半部的地質主題' },
    ],
  },
  {
    type: 'compare',
    title: '泥灰石灰岩群（下）',
    items: [
      {
        icon: '🌰',
        label: 'Mambourg（Sigolsheim，61.85ha）',
        desc: '正南朝向、日照時數最長的地塊之一，鈣鎂質土壤，第三紀礫岩泥灰岩覆蓋層。783 年即有聲譽記載。低產量、Gewurztraminer 為主，風味典雅、極具陳年潛力。',
        color: '#8e44ad',
      },
      {
        icon: '🌸',
        label: 'Mandelberg（Mittelwihr & Beblenheim，22ha）',
        desc: '「杏仁坡」——第三紀萊茵地塹邊緣礫岩泥灰石灰岩。羅馬高盧時期即耕作，1925 年起以自己名稱標示酒標。Gewurztraminer(40%)+Riesling(30%)，果香突出、細緻優雅，陳年實力佳。',
        color: '#9b59b6',
      },
      {
        icon: '🛣️',
        label: 'Marckrain（Bennwihr & Sigolsheim，53.35ha）',
        desc: '漸新世濱海礫岩，鮞狀石灰岩礫石為主的泥灰石灰岩。777 年即有文獻記載。Gewurztraminer 為王，體質強勁、香氣複雜；Pinot Gris 表現細緻含蓄且帶濃郁香氣。',
        color: '#a569bd',
      },
      {
        icon: '🧙',
        label: 'Moenchberg（Andlau & Eichhoffen，11.83ha）',
        desc: '「僧侶之山」——第四紀溶蝕堆積物，細質黏土壤。羅馬占領時期已種植，1097 年 Altdorf 本篤會修道院擁有。Riesling 為主，優雅品種特性搭配紮實酒體與宜人活力。',
        color: '#7d3c98',
      },
      {
        icon: '☀️',
        label: 'Sonnenglanz（Beblenheim，32.80ha）',
        desc: '「陽光燦爛」——第三紀礫岩泥灰岩，年雨量低於 500mm。Pinot Gris／Gewurztraminer 為主，金黃酒色、成熟濃郁香氣，口感溫暖均衡且餘韻悠長。',
        color: '#6c3483',
      },
      {
        icon: '🪨',
        label: 'Steingrubler（Wettolsheim，22.95ha）',
        desc: '泥灰石灰岩至黏砂質，上部砂質適合 Riesling、下部富含石灰質更適合 Gewurztraminer。13 世紀採石場遺跡記載。酒款陳年潛力強，香氣豐富、體質堅實。',
        color: '#5b2c6f',
      },
    ],
  },
  {
    type: 'content',
    icon: '🟦',
    title: '黏土泥灰岩：厚重保水的貴腐搖籃',
    html: `
      <p>黏土泥灰岩（argilo-marneux）族群共 <strong>5 個 Grand Cru</strong>，土壤厚重、保水力強，是阿爾薩斯 <strong>VT 與 SGN 貴腐甜酒</strong>最重要的風土基礎之一。</p>
    `,
  },
  {
    type: 'compare',
    title: '黏土泥灰岩五傑',
    items: [
      {
        icon: '🏆',
        label: 'Schoenenbourg（Riquewihr & Zellenberg，53.40ha）',
        desc: 'Keuper 泥灰岩／白雲岩／石膏質，富含肥沃元素、保水力強。16 世紀起聞名全歐，1663 年瑞士地圖學家 Merian 譽為「本地最高貴的酒」，<strong>伏爾泰</strong>曾擁有此地數畝葡萄園！Riesling 為王，微氣候特別適合 VT／SGN 貴腐甜酒。',
        color: '#2980b9',
      },
      {
        icon: '💎',
        label: 'Kanzlerberg（Bergheim，3.23ha）',
        desc: '<strong>全阿爾薩斯面積最小的 Grand Cru！</strong>厚重黏質石灰岩，灰／黑色石膏質 Keuper 泥灰岩＋底部 Muschelkalk 石灰岩。1312 年馬爾他騎士團文獻記載（已進行單獨釀造）。Riesling 尤其出色，Pinot Gris／Gewurztraminer 亦優，需長時間陳年才能展現其厚重風土賦予的力量與寬廣度。',
        color: '#34495e',
      },
      {
        icon: '🌾',
        label: 'Sporen（Riquewihr，23.70ha）',
        desc: 'Lias 黏土泥灰岩表層脫鈣，磷酸含量異常豐富——早熟與優質的標誌。1432 年符騰堡公爵檔案記載，1580 年 Fischart 譽為「阿爾薩斯眾酒之首」。Gewurztraminer／Pinot Gris 為主，細緻且氣質高貴，兼具豐富與優雅。',
        color: '#1a5276',
      },
      {
        icon: '🌸',
        label: 'Froehn（Zellenberg，14.60ha）',
        desc: 'Lias 黏土泥灰岩，深灰色頁岩質泥灰岩夾細白石灰岩層。Gewurztraminer／Pinot Gris／Muscat，果香豐沛、體態飽滿，優異的陳年潛力。',
        color: '#2471a3',
      },
      {
        icon: '💧',
        label: 'Altenberg de Bergbieten（Bergbieten，29.07ha）',
        desc: '石膏質 Keuper 黏土泥灰岩＋白雲岩礫石。1050 年教宗 Léon IX 相關檔案已提及。Riesling／Gewurztraminer 主導，花香細膩溫柔，數年陳年後展現黏土泥灰岩特有的醇厚芳香。',
        color: '#154360',
      },
    ],
  },
  {
    type: 'quiz',
    question: 'Kanzlerberg（Bergheim）在 51 個 Grand Cru 中有什麼特別之處？',
    options: [
      '是面積最大的 Grand Cru',
      '是全阿爾薩斯面積最小的 Grand Cru，僅 3.23 公頃',
      '是唯一位於 Haut-Rhin 的黏土泥灰岩地塊',
      '是最晚劃定的 Grand Cru',
    ],
    answer: 1,
    explanation: 'Kanzlerberg 面積僅 3.23 公頃，是全阿爾薩斯 51 個 Grand Cru 中面積最小的一個。早在 1312 年，馬爾他騎士團的文獻就已記載此地葡萄園進行「單獨釀造」（vinification séparée），證明其卓越品質自中世紀就已受到肯定。',
  },
  {
    type: 'summary',
    message: '泥灰石灰岩群（下）與黏土泥灰岩學習完成！至此你已認識全部 51 個 Grand Cru 地塊！',
    keyPoints: [
      'Mambourg、Mandelberg、Marckrain、Moenchberg、Sonnenglanz、Steingrubler 補完 13 個泥灰石灰岩地塊',
      '黏土泥灰岩族群（5 個）土壤厚重保水，是 VT／SGN 貴腐甜酒的重要風土基礎',
      'Schoenenbourg（53.40ha）：伏爾泰曾擁有葡萄園，Riesling 之王，VT／SGN 理想產地',
      'Kanzlerberg（3.23ha）：全阿爾薩斯面積最小的 Grand Cru，1312 年即有單獨釀造紀錄',
      'Sporen：1580 年被譽為「阿爾薩斯眾酒之首」',
    ],
    nextLesson: '下一課：Cléebourg 飛地與 Klevener de Heiligenstein',
  },
]

const AL2M6L1_slides = [
  {
    type: 'cover',
    icon: '🏝️',
    gradient: 'linear-gradient(135deg, #2d6a4f, #74c69d)',
    title: 'Cléebourg 飛地與 Klevener de Heiligenstein',
    subtitle: 'Level 2 · 第十四課 · 特殊產區',
    points: [
      { icon: '📍', label: 'Cléebourg 飛地', text: '與主要葡萄園帶相距 90 公里的孤立產區' },
      { icon: '🌹', label: 'Klevener AOC', text: '全阿爾薩斯唯一限定單一村莊的品種 AOC' },
      { icon: '🤝', label: '共同精神', text: '兩者都展現阿爾薩斯風土多樣性中最特殊的角落' },
    ],
  },
  {
    type: 'content',
    icon: '🏝️',
    title: 'Cléebourg：孤立 90 公里的北境飛地',
    html: `
      <p>Cléebourg 位於 Bas-Rhin 最北端，靠近 Wissembourg，屬於孚日山自然公園範圍。這片葡萄園歷史上曾是<strong>從阿爾薩斯南部一路延伸到德國 Palatinat 的連續葡萄種植帶</strong>的一部分，直到 20 世紀上半葉，這條連續帶被切斷，讓 Cléebourg 與阿爾薩斯主要葡萄園帶相距約 <strong>90 公里</strong>，形成一塊孤立飛地。</p>
      <p style="margin-top:8px">二戰後，<strong>1946 年</strong>，村民成立了合作社酒莊（cave coopérative），以戰爭賠償金作為股本，齊心重建葡萄園。今日 Cléebourg 是一塊約 <strong>200 公頃</strong>的獨立產區，氣候比南部鄰居更涼爽，春霜影響較低，適合釀造酸度優雅、清新細緻的白酒——尤其是 Riesling，經 2-3 年陳年後展現絕佳品質。</p>
      <p style="margin-top:8px">自 <strong>1988 年</strong>起，當地葡萄農特別標示出 <strong>10 個「lieux-dits」</strong>高潛力地塊（如 Keimberg、Hannesacker、Kammerberg 等），並給予格外用心的照料，逐步發展出自己的「準 Grand Cru」精神。全區品種以 <strong>Pinot Blanc Auxerrois</strong>（早熟、適應當地氣候）與 <strong>Pinot Gris</strong> 為主，兩者合計佔全區種植面積 <strong>54%</strong>。</p>
    `,
  },
  {
    type: 'content',
    icon: '🌹',
    title: 'Klevener de Heiligenstein：獨一無二的單一村莊 AOC',
    html: `
      <p>還記得 Level 1 提到的 <strong>Klevener de Heiligenstein</strong> 嗎？它是 Gewurztraminer 的<strong>非芳香型變種</strong>——在阿爾薩斯稱為「Heiligensteiner Klevner」，是 <strong>Savagnin rose（非麝香型）</strong>。</p>
      <p style="margin-top:8px">這個品種於 <strong>1742 年</strong>引入 Heiligenstein（Bas-Rhin），是全阿爾薩斯唯一<strong>限定在單一村莊種植授權</strong>的品種型 AOC——僅限 Bourgheim、Gertwiller、Goxwiller、Heiligenstein、Obernai 這幾個緊鄰的村莊。</p>
      <p style="margin-top:8px">風格上：不甜的白酒，內斂含蓄，帶有<strong>乳香與辛香、花香</strong>調性，透露出與 Gewurztraminer 的血緣關係，卻更顯精緻與細膩平衡——兼具 Riesling 的活力與 Pinot Gris 的豐腴，是絕佳的全餐搭配酒款，也適合搭配部分亞洲料理。</p>
    `,
  },
  {
    type: 'quiz',
    question: 'Cléebourg 產區為什麼會與阿爾薩斯主要葡萄園帶相距約 90 公里，形成一塊孤立飛地？',
    options: [
      '因為法規刻意將其劃分開來',
      '歷史上原本是連續葡萄種植帶的一部分，20 世紀上半葉這條連續帶被切斷，才讓 Cléebourg 孤立於北境',
      '因為當地氣候完全不適合葡萄種植',
      '因為 Cléebourg 是後來才新開發的產區',
    ],
    answer: 1,
    explanation: 'Cléebourg 歷史上原本是從阿爾薩斯南部一路延伸至德國 Palatinat 的連續葡萄種植帶的一部分。20 世紀上半葉，這條連續帶因故被切斷，才讓 Cléebourg 與阿爾薩斯主要葡萄園帶相距約 90 公里，成為一塊地理上孤立的飛地——但村民仍在戰後（1946 年成立合作社）努力重建並延續了這裡的釀酒傳統。',
  },
  {
    type: 'summary',
    message: 'Cléebourg 與 Klevener de Heiligenstein 學習完成！',
    keyPoints: [
      'Cléebourg：與主要葡萄園帶相距 90 公里的孤立飛地，1946 年合作社成立，重建葡萄園',
      '約 200 公頃，氣候較涼，Pinot Blanc Auxerrois 與 Pinot Gris 合計佔 54%',
      '1988 年起標示 10 個高潛力 lieux-dits，展現「準 Grand Cru」精神',
      'Klevener de Heiligenstein：Gewurztraminer 的非芳香型變種（Savagnin rose），1742 年引入',
      '是全阿爾薩斯唯一限定單一村莊種植授權的品種型 AOC，僅限 Heiligenstein 周邊幾個村莊',
    ],
    nextLesson: '下一課：阿爾薩斯知名 Clos 巡禮',
  },
]

const AL2M6L2_slides = [
  {
    type: 'cover',
    icon: '🧱',
    gradient: 'linear-gradient(135deg, #40241a, #7c4a2d)',
    title: '阿爾薩斯知名 Clos 巡禮',
    subtitle: 'Level 2 · 第十五課 · 特殊產區',
    points: [
      { icon: '🧱', label: '什麼是 Clos？', text: '獨立、常有牆圍的單一地塊，介於一般 Alsace 與 Grand Cru 之間的另一種身分' },
      { icon: '🍷', label: '單一品種或混釀', text: 'Clos 可以是單一品種，也可以是多品種一起採收釀造（不同於調配酒）' },
      { icon: '👑', label: '傳奇代表', text: 'Clos Sainte Hune、Clos Windsbuhl 等享譽國際的頂級酒款' },
    ],
  },
  {
    type: 'content',
    icon: '🧱',
    title: '什麼是 Clos？與 Grand Cru 的關鍵差異',
    html: `
      <p>「Clos」在阿爾薩斯指的是一塊<strong>獨立、界線清楚（常有牆圍）的單一地塊</strong>，由單一酒莊獨家擁有或掌控。Clos 不是官方 AOC 分級的一環——它可能位於 Grand Cru 範圍內（如 Clos Saint-Urbain 位於 Rangen 內），也可能完全獨立於 Grand Cru 體系之外。</p>
      <p style="margin-top:8px">Clos 的獨特之處在於：某些 Clos 會將<strong>多個品種一起採收、一起壓榨釀造</strong>——這與 Edelzwicker（成品混調）或 Gentil（分開釀造後調配）都不同，是一種更接近「field blend」的傳統做法，也是 Clos 風格獨樹一格的原因。</p>
    `,
  },
  {
    type: 'compare',
    title: '阿爾薩斯知名 Clos 巡禮（上）',
    items: [
      {
        icon: '👑',
        label: 'Clos Sainte Hune（Hunawihr，1.25ha）',
        desc: '100% Riesling，F.E. Trimbach 酒莊獨家擁有，是阿爾薩斯乃至全球最受推崇的 Riesling 之一，被視為阿爾薩斯 Riesling 的巔峰代表。',
        color: '#2980b9',
      },
      {
        icon: '⛰️',
        label: 'Clos Windsbuhl（Hunawihr）',
        desc: 'Zind-Humbrecht 酒莊租賃經營，火山岩風土，坡度高達 <strong>68%</strong>——可能是全阿爾薩斯坡度最陡的葡萄園！展現極致濃縮與礦石感。',
        color: '#c0392b',
      },
      {
        icon: '🌋',
        label: 'Clos Saint-Urbain（Thann，Rangen 內）',
        desc: 'Zind-Humbrecht 酒莊擁有，位於 Rangen Grand Cru 內部的獨立地塊，Gewurztraminer／Riesling／Pinot Gris，展現火山岩地質的獨特印記。',
        color: '#8e44ad',
      },
      {
        icon: '🍇',
        label: 'Clos du Zahnacker（Ribeauvillé）',
        desc: 'Ribeauvillé 合作社擁有，三品種各占 1/3：Gewurztraminer、Pinot Gris、Riesling——三品種一起採收壓榨釀造，與 Edelzwicker（成品調配）截然不同。',
        color: '#16a085',
      },
    ],
  },
  {
    type: 'compare',
    title: '阿爾薩斯知名 Clos 巡禮（下）',
    items: [
      {
        icon: '🌸',
        label: 'Clos des Capucins（Kientzheim）',
        desc: 'Domaine Weinbach（Théo-Faller 家族）獨家擁有，多款 Pinot Gris、Gewurztraminer、Riesling，是阿爾薩斯最富盛名的家族酒莊招牌地塊之一。',
        color: '#e91e8c',
      },
      {
        icon: '🍋',
        label: 'Clos Saint Landelin（Rouffach）',
        desc: 'René Muré 酒莊擁有，Muscat／Pinot Gris／Riesling／Gewurztraminer 多品種種植，是 Vorbourg Grand Cru 範圍內的知名獨立地塊。',
        color: '#f39c12',
      },
      {
        icon: '📏',
        label: 'Clos de Meywihr（Ammerschwihr）',
        desc: 'Roger Klein 擁有，位於 Kaefferkopf 範圍內，僅 10 公畝 60 公厘——是<strong>全阿爾薩斯最小的 Clos</strong>！',
        color: '#7f8c8d',
      },
      {
        icon: '🌹',
        label: 'Clos Rebgarten（Andlau）',
        desc: 'Domaine F. Gresser／Marc Kreydenweiss 擁有，100% Muscat——罕見的單一品種 Muscat Clos，展現這個稀有品種的精緻表現。',
        color: '#9b59b6',
      },
    ],
  },
  {
    type: 'quiz',
    question: 'Clos du Zahnacker 這類「多品種一起採收壓榨」的做法，與 Edelzwicker 調配酒有什麼根本不同？',
    options: [
      '兩者完全相同，只是名稱不同',
      'Zahnacker 是多品種一起採收、一起壓榨釀造（類似 field blend）；Edelzwicker 則多半是成品混調（各品種分別釀造後再混合）',
      'Edelzwicker 只能用單一品種',
      'Zahnacker 只能用於 Grand Cru 地塊',
    ],
    answer: 1,
    explanation: 'Clos du Zahnacker 的三個品種（Gewurztraminer、Pinot Gris、Riesling）是一起採收、一起壓榨、一起發酵釀造的，這是一種更接近「field blend」的傳統手法；而 Edelzwicker 多半是將各品種的成品酒（或分別發酵的酒液）混合調配而成，兩者在釀造邏輯上有根本差異，也因此帶來不同的風味複雜度。',
  },
  {
    type: 'summary',
    message: '知名 Clos 巡禮學習完成！Level 2 即將完成，準備好迎接期末測驗了嗎？',
    keyPoints: [
      'Clos = 獨立、常有牆圍的單一地塊，由單一酒莊獨家擁有，可能位於 Grand Cru 內或完全獨立',
      '部分 Clos 採「多品種一起採收壓榨」的傳統做法，與 Edelzwicker／Gentil 的調配邏輯不同',
      'Clos Sainte Hune（Trimbach）：阿爾薩斯 Riesling 的巔峰代表',
      'Clos Windsbuhl：坡度達 68%，可能是全阿爾薩斯最陡的葡萄園',
      'Clos de Meywihr：僅 10 公畝 60 公厘，全阿爾薩斯最小的 Clos',
    ],
    nextLesson: '下一課：Level 2 綜合評量',
  },
]

const AL2FinalExam_slides = [
  {
    type: 'cover',
    icon: '🎓',
    gradient: 'linear-gradient(135deg, #1b4332, #c9a227)',
    title: 'Level 2 綜合評量',
    subtitle: 'Grand Cru 深度探索 · 最終測驗',
    points: [
      { icon: '📋', label: '12 題綜合測驗', text: '涵蓋 Grand Cru 制度、十大地質族群與代表地塊' },
      { icon: '✅', label: '通過標準', text: '答對 8 題以上即完成 Level 2' },
      { icon: '🏆', label: '完成後解鎖', text: 'Level 3：釀造工藝與特殊酒款' },
    ],
  },
  {
    type: 'quiz',
    question: '【制度】Alsace Grand Cru 分級最終在哪一年達到 51 個地塊？最後劃定的地塊名稱是？',
    options: ['1992 年，Rangen', '2007 年，Kaefferkopf', '1983 年，Kastelberg', '1975 年，Schlossberg'],
    answer: 1,
    explanation: '1983 年首批 25 個、1992 年再劃定 25 個（累計 50 個），2007 年第 51 個 Grand Cru「Kaefferkopf」（Ammerschwihr）正式劃定，也是唯一從創立之初就允許混釀的 Grand Cru。',
  },
  {
    type: 'quiz',
    question: '【地質】Claude Sittler 的地質分類中，哪個族群僅有 Kastelberg 一個成員？',
    options: ['花崗岩', '片岩', '石灰岩', '黏土泥灰岩'],
    answer: 1,
    explanation: 'Kastelberg（Andlau）是全阿爾薩斯唯一的片岩 Grand Cru——志留紀 Steige 片岩被鄰近花崗岩變質為堅硬深色岩石，在十大地質族群分類中自成一格。',
  },
  {
    type: 'quiz',
    question: '【地質】哪個 Grand Cru 是全阿爾薩斯唯一由真正火山岩構成的地塊？',
    options: ['Muenchberg', 'Rangen', 'Zinnkoepflé', 'Kessler'],
    answer: 1,
    explanation: 'Rangen（Thann & Vieux-Thann）是全阿爾薩斯唯一真正的火山岩地塊（矽質岩與玄武質熔岩），也是最南端的 Grand Cru；Thann 更是唯一整個轄區都被列為 Grand Cru 的市鎮。',
  },
  {
    type: 'quiz',
    question: '【面積】以下哪個 Grand Cru 面積最大？',
    options: ['Kanzlerberg（3.23ha）', 'Kastelberg（5.82ha）', 'Schlossberg（80.28ha）', 'Moenchberg（11.83ha）'],
    answer: 2,
    explanation: 'Schlossberg（Kientzheim）面積達 80.28 公頃，是 51 個 Grand Cru 中面積最大的一個；相對地，Kanzlerberg（Bergheim）僅 3.23 公頃，是面積最小的 Grand Cru。',
  },
  {
    type: 'quiz',
    question: '【混釀特例】以下哪兩個 Grand Cru 允許混釀多個品種？',
    options: [
      'Schoenenbourg 與 Rangen',
      'Altenberg de Bergheim 與 Kaefferkopf',
      'Zotzenberg 與 Kastelberg',
      'Hengst 與 Brand',
    ],
    answer: 1,
    explanation: 'Altenberg de Bergheim（Riesling 50–70%+Pinot Gris 10–25%+Gewurztraminer 10–25%）與 Kaefferkopf（Gewurztraminer 60–80%+Riesling 10–40%+Pinot Gris≤30%）是僅有的兩個允許混釀的 Alsace Grand Cru。',
  },
  {
    type: 'quiz',
    question: '【品種特例】哪個 Grand Cru 歷史上是唯一授權種植 Sylvaner 的地塊？',
    options: ['Zotzenberg', 'Steinklotz', 'Bruderthal', 'Goldert'],
    answer: 0,
    explanation: 'Zotzenberg（Mittelbergheim）歷史上以 Sylvaner 聞名，是特別授權 Sylvaner 可用於 Grand Cru 等級的地塊——在整個「僅限四大貴族品種」的 Grand Cru 體系中獨一無二。',
  },
  {
    type: 'quiz',
    question: '【歷史】阿爾薩斯已知最早的葡萄酒文字紀錄（589 年，墨洛溫王朝）發生在哪個 Grand Cru 所在地？',
    options: ['Steinklotz（Marlenheim）', 'Kastelberg（Andlau）', 'Rangen（Thann）', 'Schlossberg（Kientzheim）'],
    answer: 0,
    explanation: '根據 Grégoire de Tours 的記載，589 年墨洛溫王朝國王 Childebert II 在 Marlenheim 擁有葡萄園——這是阿爾薩斯已知最早的葡萄酒文字紀錄，而 Marlenheim 正是石灰岩 Grand Cru「Steinklotz」的所在地。',
  },
  {
    type: 'quiz',
    question: '【品種傾向】被稱為「阿爾薩斯葡萄園屋頂」、Gewurztraminer 展現極致力量的地塊是？',
    options: ['Geisberg', 'Pfingstberg', 'Zinnkoepflé', 'Vorbourg'],
    answer: 2,
    explanation: 'Zinnkoepflé（Soultzmatt & Westhalten）海拔可達 420m，因群山屏障成為全阿爾薩斯最乾燥地帶之一，是「阿爾薩斯酒中帝王」Gewurztraminer 展現力量與辛香的代表地塊。',
  },
  {
    type: 'quiz',
    question: '【特殊產區】Cléebourg 產區與阿爾薩斯主要葡萄園帶相距多遠，形成一塊孤立飛地？',
    options: ['約 20 公里', '約 50 公里', '約 90 公里', '約 150 公里'],
    answer: 2,
    explanation: 'Cléebourg 歷史上原本是連續葡萄種植帶的一部分，20 世紀上半葉這條連續帶被切斷，讓 Cléebourg 與阿爾薩斯主要葡萄園帶相距約 90 公里，成為北境的孤立飛地。',
  },
  {
    type: 'quiz',
    question: '【特殊 AOC】Klevener de Heiligenstein 是哪個品種的非芳香型變種？授權範圍有何特色？',
    options: [
      'Riesling 的變種，全阿爾薩斯皆可種植',
      'Gewurztraminer（Savagnin rose）的非芳香型變種，僅限 Heiligenstein 周邊幾個村莊種植',
      'Pinot Gris 的變種，僅限 Andlau 種植',
      'Muscat 的變種，僅限 Ribeauvillé 種植',
    ],
    answer: 1,
    explanation: 'Klevener de Heiligenstein 是 Gewurztraminer（Savagnin rose）的非芳香型變種，1742 年引入 Heiligenstein，是全阿爾薩斯唯一限定單一村莊種植授權的品種型 AOC，僅限 Bourgheim、Gertwiller、Goxwiller、Heiligenstein、Obernai 幾個緊鄰村莊。',
  },
  {
    type: 'quiz',
    question: '【Clos】Clos Sainte Hune 由哪家酒莊獨家擁有？以哪個品種聞名？',
    options: [
      'Domaine Weinbach，Pinot Gris',
      'F.E. Trimbach，100% Riesling',
      'Zind-Humbrecht，Gewurztraminer',
      'René Muré，Muscat',
    ],
    answer: 1,
    explanation: 'Clos Sainte Hune（Hunawihr，1.25ha）由 F.E. Trimbach 酒莊獨家擁有，100% Riesling，是阿爾薩斯乃至全球最受推崇的 Riesling 之一，被視為阿爾薩斯 Riesling 的巔峰代表。',
  },
  {
    type: 'summary',
    icon: '🏆',
    message: '🎉 恭喜完成 Level 2 綜合評量！你已經走遍 51 個 Grand Cru 與阿爾薩斯最獨特的角落！',
    keyPoints: [
      '✅ Grand Cru 分級：1975 年創設，1983/1992/2007 三波劃定達 51 個地塊',
      '✅ 十大地質族群：從片岩（1）到泥灰石灰岩（13），橫跨數億年地質史',
      '✅ 兩個混釀特例：Altenberg de Bergheim 與 Kaefferkopf',
      '✅ 特殊產區：Cléebourg 飛地、Klevener de Heiligenstein 單一村莊 AOC',
      '✅ 知名 Clos：Sainte Hune、Windsbuhl、Zahnacker 等傳奇地塊',
    ],
    nextLesson: '準備好了嗎？Level 3：釀造工藝與特殊酒款，即將帶你深入 Crémant、貴腐甜酒與蒸餾酒的世界！',
  },
]

// ───────────────────────────────────────────────────────────────
//  Level 3 投影片 — 釀造工藝與特殊酒款
//  資料來源：CIVA 官方栽培作業講義、Crémant d'Alsace AOC 介紹、
//  VT/SGN 貴腐甜酒等級說明、Edelzwicker／Gentil 調配酒介紹、
//  Marc d'Alsace／Mirabelle de Lorraine 蒸餾酒官方資料
// ───────────────────────────────────────────────────────────────

const AL3M1L1_slides = [
  {
    type: 'cover',
    icon: '📅',
    gradient: 'linear-gradient(135deg, #2d6a4f, #74c69d)',
    title: '年度栽培週期與 Guyot 修剪',
    subtitle: 'Level 3 · 第一課',
    points: [
      { icon: '✂️', label: 'Guyot 雙拱形修剪', text: '阿爾薩斯最主要的修剪方式' },
      { icon: '📆', label: '十二個月的節奏', text: '從落葉到採收，環環相扣的年度作業曆' },
      { icon: '🌱', label: '自然草生管理', text: '兼顧土壤健康與水土保持的現代趨勢' },
    ],
  },
  {
    type: 'content',
    icon: '📆',
    title: '葡萄農的年度作業曆',
    html: `
      <table style="width:100%;border-collapse:collapse;margin-top:6px;font-size:0.82rem">
        <tr style="background:#eaf5ef"><th style="padding:6px 8px;border:1px solid #ddd">月份</th><th style="padding:6px 8px;border:1px solid #ddd">主要作業</th></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">11 月</td><td style="padding:6px 8px;border:1px solid #ddd">落葉（chute des feuilles）</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">12 月–3 月</td><td style="padding:6px 8px;border:1px solid #ddd">修剪（taille）</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">2 月中</td><td style="padding:6px 8px;border:1px solid #ddd">綁蔓與拱形整枝（liage et arcure）</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">4 月</td><td style="padding:6px 8px;border:1px solid #ddd">土壤管理／犁地（labour – entretien du sol）</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">4–5 月</td><td style="padding:6px 8px;border:1px solid #ddd">立架整枝（palissage）</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">5–6 月</td><td style="padding:6px 8px;border:1px solid #ddd">病蟲害防治（traitement des vignes）</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">7–8 月</td><td style="padding:6px 8px;border:1px solid #ddd">摘心整枝（rognage）</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">9–10 月</td><td style="padding:6px 8px;border:1px solid #ddd">採收（vendanges）</td></tr>
      </table>
      <p style="margin-top:10px">💡 儘管工具歷經數世紀演進，但這套作業節奏自羅馬時代以來大致未曾改變——葡萄樹的生長週期本身，才是真正主宰農事曆的關鍵。</p>
    `,
  },
  {
    type: 'content',
    icon: '✂️',
    title: 'Guyot 雙拱形修剪：阿爾薩斯的主流技法',
    html: `
      <p>阿爾薩斯最主要採用的修剪方式是 <strong>Guyot 雙拱形修剪（taille Guyot double arcure）</strong>：在冬季休眠期（12 月至隔年 3 月），葡萄農在每株葡萄樹上保留 <strong>一至兩根結果母枝（sarment）</strong>，修剪完成後於 2 月中旬將枝條彎曲固定成拱形（arcure），並綁縛在鐵絲上（liage）——這個動作有助於讓養分均勻分配到整根枝條上的每個芽眼，而非只集中在頂端。</p>
      <p style="margin-top:8px">修剪下來的枝條（sarments）會由拖拉機碾碎回歸土壤，成為天然的有機質來源。</p>
    `,
  },
  {
    type: 'content',
    icon: '🌱',
    title: '土壤管理：從全面犁地到自然草生栽培',
    html: `
      <p>4 月的土壤管理傳統上以<strong>犁地（labour）</strong>翻鬆表土為主，但近年趨勢逐漸轉向<strong>「自然草生管理」（Enherbement Naturel Maîtrisé, ENM）</strong>——讓土壤自然植被生長，待高度達約 20 公分時，再以碾壓或局部除草方式控制。</p>
      <p style="margin-top:8px">這項技術能兼顧草生栽培的多重好處：發展多樣化的地表覆蓋植群，有效保持土壤與水分，並減少秋冬季節硝酸鹽流失——是兼顧環境永續與葡萄品質的現代做法。</p>
    `,
  },
  {
    type: 'quiz',
    question: '阿爾薩斯最主要採用的葡萄樹修剪方式是什麼？',
    options: [
      'Cordon de Royat 科爾登式修剪',
      'Guyot 雙拱形修剪——冬季保留一至兩根結果母枝，2 月中旬彎曲固定成拱形',
      'Gobelet 扇形修剪',
      '不進行任何修剪，任其自然生長',
    ],
    answer: 1,
    explanation: '阿爾薩斯最主要採用 Guyot 雙拱形修剪（taille Guyot double arcure）：冬季休眠期在每株葡萄樹上保留一至兩根結果母枝，並於 2 月中旬將枝條彎曲固定成拱形、綁縛在鐵絲上，讓養分均勻分配到整根枝條的每個芽眼。',
  },
  {
    type: 'summary',
    message: '年度栽培週期與 Guyot 修剪學習完成！',
    keyPoints: [
      '年度作業曆：11 月落葉 → 12-3 月修剪 → 2 月綁蔓拱形 → 4 月土壤管理／立架 → 5-6 月防治 → 7-8 月摘心 → 9-10 月採收',
      'Guyot 雙拱形修剪是阿爾薩斯主流技法：每株保留 1-2 根結果母枝，彎曲固定分配養分',
      '「自然草生管理」（ENM）是兼顧永續與品質的現代土壤管理趨勢，取代全面犁地',
    ],
    nextLesson: '下一課：病蟲害防治與永續栽培',
  },
]

const AL3M1L2_slides = [
  {
    type: 'cover',
    icon: '🐛',
    gradient: 'linear-gradient(135deg, #1b4332, #52b788)',
    title: '病蟲害防治與永續栽培',
    subtitle: 'Level 3 · 第二課',
    points: [
      { icon: '🍄', label: '三大真菌病害', text: '白粉病、露菌病、灰黴病' },
      { icon: '🦋', label: '性費洛蒙混淆法', text: '減少一半灰黴病風險的生態防治技術' },
      { icon: '🧺', label: '人工採收的代價', text: '每公頃約需 250 工時，30 人一天才能採收完畢' },
    ],
  },
  {
    type: 'content',
    icon: '🍄',
    title: '三大真菌病害',
    html: `
      <ul style="padding-left:20px;line-height:1.8">
        <li><strong>白粉病（oïdium）</strong>：枝條與果粒表面出現白化現象，果粒隨著長大而逐漸爆裂</li>
        <li><strong>露菌病（mildiou）</strong>：對果串造成嚴重損害，使其完全乾枯；葉片受害則會降低光合作用效率</li>
        <li><strong>灰黴病（pourriture grise）</strong>：果粒表面覆蓋一層灰色粉狀物；蛀食果皮的葡萄蛀蟲幼蟲，會加速灰黴病的擴散</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🦋',
    title: '性費洛蒙混淆法：生態防治的典範',
    html: `
      <p>對抗這些病蟲害的生態方法日益增加，其中最具代表性的是<strong>「性費洛蒙混淆法」（confusion sexuelle）</strong>：在葡萄園中懸掛釋放雌性蛾類費洛蒙的膠囊，誘使雄蛾迷失方向、找不到真正的交配對象。</p>
      <p style="margin-top:8px">結果是：<strong>交配大幅受限，灰黴病風險降低達一半</strong>——大幅減少了殺蟲劑的使用需求，是阿爾薩斯永續栽培的重要一環。</p>
    `,
  },
  {
    type: 'content',
    icon: '🧺',
    title: '成熟監測與採收',
    html: `
      <p>成熟期始於<strong>八月中旬（轉色期 véraison）</strong>，果皮開始呈現最終色澤，這個過程持續約 <strong>45 天</strong>——期間果實糖度持續上升，酸度則逐漸下降。九月中旬會移除果串周圍殘留的葉片，讓陽光直接照射果串，降低灰黴病風險。</p>
      <p style="margin-top:8px">採收通常在<strong>花期滿 100 天後</strong>開始，正式開放日期由「阿爾薩斯葡萄酒專家委員會」統一公告。至今<strong>絕大多數採收仍以人工進行</strong>——每公頃約需 <strong>250 個工時</strong>，換算下來，一天要採收完一公頃，需要超過 <strong>30 位</strong>採收工人同時作業。</p>
    `,
  },
  {
    type: 'quiz',
    question: '「性費洛蒙混淆法」（confusion sexuelle）這項生態防治技術，如何降低灰黴病的風險？',
    options: [
      '直接殺死葡萄蛀蟲的幼蟲',
      '釋放雌性蛾類費洛蒙誘使雄蛾迷失方向、無法順利交配，進而減少蛀蟲幼蟲數量，降低灰黴病風險達一半',
      '在葡萄園周圍種植驅蟲植物',
      '使用強效殺菌劑直接噴灑',
    ],
    answer: 1,
    explanation: '性費洛蒙混淆法透過在葡萄園中懸掛釋放雌性蛾類費洛蒙的膠囊，誘使雄蛾迷失方向、找不到真正的交配對象，大幅限制交配成功率——由於蛀食果皮的葡萄蛀蟲幼蟲會加速灰黴病擴散，減少幼蟲數量因此能將灰黴病風險降低達一半，同時大幅減少殺蟲劑使用。',
  },
  {
    type: 'summary',
    message: '病蟲害防治與永續栽培學習完成！',
    keyPoints: [
      '三大真菌病害：白粉病（白化爆裂）、露菌病（乾枯）、灰黴病（灰色粉狀物，蛀蟲加速擴散）',
      '性費洛蒙混淆法：釋放費洛蒙迷惑雄蛾，減少交配、降低灰黴病風險達一半',
      '轉色期（8 月中旬）開始約 45 天的成熟期，糖度上升、酸度下降',
      '採收於花期滿 100 天後開始，絕大多數人工進行，每公頃約需 250 工時（30 人／天）',
    ],
    nextLesson: '下一課：Crémant d\'Alsace 傳統法氣泡酒工藝',
  },
]

const AL3M2L1_slides = [
  {
    type: 'cover',
    icon: '🥂',
    gradient: 'linear-gradient(135deg, #c9a227, #f1c40f)',
    title: '傳統法氣泡酒工藝',
    subtitle: 'Level 3 · 第三課',
    points: [
      { icon: '📜', label: '1976 年 AOC', text: 'Crémant d\'Alsace 正式獲得法定產區認證' },
      { icon: '🍇', label: '強制整串壓榨', text: '全法國少數強制「vendange entière」的 AOC 之一' },
      { icon: '⏳', label: '9 個月酒渣陳年', text: '瓶中二次發酵的最低陳年要求' },
    ],
  },
  {
    type: 'content',
    icon: '📜',
    title: '從香檳法傳統到獨立 AOC',
    html: `
      <p>20 世紀初，數家阿爾薩斯酒莊便已依循<strong>香檳法（méthode champenoise）</strong>釀造氣泡酒，這項傳統在二戰前半葉一度式微，直到 <strong>1976 年 8 月 24 日</strong>法令正式承認 <strong>AOC Crémant d'Alsace</strong>，賦予阿爾薩斯酒商一套與香檳同業相近規範的優質氣泡酒生產架構。</p>
      <p style="margin-top:8px">今日已有超過 <strong>500 家</strong>生產者加入「阿爾薩斯 Crémant 生產者公會」（Syndicat des Producteurs de Crémant d'Alsace）。</p>
    `,
  },
  {
    type: 'content',
    icon: '🍇',
    title: '嚴格的整串壓榨規範',
    html: `
      <ul style="padding-left:20px;line-height:1.8">
        <li><strong>整串壓榨（vendange entière）為強制規定</strong>——葡萄必須整串直接倒入壓榨機，不得先破皮（foulage）。這與一般靜態酒可先破皮取汁的做法不同，是為了最大程度保護果汁的純淨與細緻度</li>
        <li><strong>人工採收</strong>：使用容量低於 100 公斤的容器盛裝，且必須整串完好送入壓榨機</li>
        <li><strong>壓榨比例</strong>：每 150 公斤葡萄僅能榨取 100 公升果汁，比例遠低於一般釀酒；「second/rebêche」尾榨汁須獨立分離，且至少須佔有權宣稱產量的 2%</li>
        <li><strong>設備規範</strong>：壓榨設備不得使用阿基米德螺旋或鏈條式機構，以避免過度破壞果實結構</li>
        <li><strong>採收期較早</strong>：Crémant 專用的採收日期由「阿爾薩斯葡萄酒專家委員會」訂定，通常比一般靜態酒早開放數天</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '⏳',
    title: '瓶中二次發酵與陳年規範',
    html: `
      <p>Crémant d'Alsace 必須在阿爾薩斯境內、以<strong>瓶中二次發酵</strong>方式釀造，裝瓶起始（tirage）不得早於採收隔年的 <strong>1 月 1 日</strong>。酒渣陳年期間不得少於 <strong>9 個月</strong>。</p>
      <p style="margin-top:8px">產量上限方面，2007 年的規定為基礎產量 <strong>80 hl/ha</strong>，PLC 彈性上限可再增加 <strong>2.5%</strong>；葡萄成熟度須達最低天然酒精度 <strong>8.5°</strong>。所有 Crémant d'Alsace 酒款皆須通過法定的分析與感官品評雙重認證。</p>
    `,
  },
  {
    type: 'quiz',
    question: 'Crémant d\'Alsace 在葡萄壓榨方式上，有什麼獨特且強制性的規定？',
    options: [
      '必須先破皮才能壓榨',
      '整串壓榨（vendange entière）為強制規定，葡萄須整串直接倒入壓榨機，不得先破皮',
      '沒有特別規定，與一般靜態酒相同',
      '只能使用阿基米德螺旋壓榨機',
    ],
    answer: 1,
    explanation: 'Crémant d\'Alsace 法規強制要求「整串壓榨」（vendange entière）：葡萄必須整串直接倒入壓榨機，不得事先破皮（foulage）。這項規定能最大程度保護果汁的純淨與細緻度，也是 Crémant d\'Alsace 工藝規範中最鮮明的技術特徵之一，法規同時也明文禁止使用阿基米德螺旋或鏈條式壓榨設備。',
  },
  {
    type: 'summary',
    message: '傳統法氣泡酒工藝學習完成！',
    keyPoints: [
      '1976 年 8 月 24 日法令正式承認 AOC Crémant d\'Alsace，今日超過 500 家生產者加入公會',
      '整串壓榨（vendange entière）為強制規定，禁止先破皮、禁止阿基米德螺旋壓榨設備',
      '每 150kg 葡萄僅榨取 100L 果汁，尾榨汁須獨立分離且佔比至少 2%',
      '瓶中二次發酵須在阿爾薩斯境內完成，酒渣陳年不得少於 9 個月',
    ],
    nextLesson: '下一課：Crémant 品種特性與市場地位',
  },
]

const AL3M2L2_slides = [
  {
    type: 'cover',
    icon: '📊',
    gradient: 'linear-gradient(135deg, #f1c40f, #e67e22)',
    title: 'Crémant 品種特性與市場地位',
    subtitle: 'Level 3 · 第四課',
    points: [
      { icon: '🍇', label: '五個授權品種', text: 'Pinot Blanc 為主力，各品種賦予不同個性' },
      { icon: '🏆', label: '全法第一', text: '法國國內銷量第一的 AOC 氣泡酒' },
      { icon: '📈', label: '25 年成長 13 倍', text: '從 1982 年的 220 萬瓶到 2007 年的 2,800 萬瓶' },
    ],
  },
  {
    type: 'compare',
    title: '五個授權品種各自的貢獻',
    items: [
      { icon: '🥂', label: 'Pinot Blanc（主力品種）', desc: '多數「blancs de blancs」Crémant 的基礎，賦予細膩與柔順感', color: '#c9a227' },
      { icon: '🍋', label: 'Riesling', desc: '帶來活潑鮮明的果香調性，充滿優雅與高貴氣質', color: '#2d6a4f' },
      { icon: '🍈', label: 'Pinot Gris', desc: '為 Crémant 增添豐富度與結構骨架', color: '#7c4a2d' },
      { icon: '✨', label: 'Chardonnay（僅限 Crémant）', desc: '賦予氣質與輕盈感，是唯一僅限用於 Crémant 的品種', color: '#f1c40f' },
      { icon: '🌹', label: 'Pinot Noir', desc: '唯一能釀造粉紅 Crémant 的品種，少數情況也可做成 blanc de noirs，兼具魅力與細緻', color: '#c0392b' },
    ],
  },
  {
    type: 'content',
    icon: '🏆',
    title: '法國國內銷量第一的 AOC 氣泡酒',
    html: `
      <p>憑藉獨特的個性與無可挑剔的品質，Crémant d'Alsace 如今已是<strong>法國國內在家消費銷量第一的 AOC 氣泡酒</strong>，海外市場也表現亮眼。目前年均產量約 <strong>2,900 萬瓶</strong>，佔阿爾薩斯總產量約 <strong>19%</strong>。</p>
      <p style="margin-top:8px">在法國國內市場，Crémant d'Alsace 以 <strong>36.9%</strong> 的市佔率，穩居所有 AOC 氣泡酒之首——遠遠領先第二名 Clairette de Die（15.5%）、Saumur（10%）與 Blanquette de Limoux（4.8%）。</p>
    `,
  },
  {
    type: 'content',
    icon: '📈',
    title: '25 年成長 13 倍的爆發式增長',
    html: `
      <p>直到 1979 年，Crémant d'Alsace 的產量還不到 <strong>100 萬瓶</strong>。此後市場需求持續攀升，銷量在 <strong>25 年間成長了 13 倍</strong>：從 1982 年的 220 萬瓶，暴增至 2007 年的 2,800 萬瓶。</p>
      <p style="margin-top:8px">消費分布上，主要集中在<strong>大東部地區（34%）</strong>，其次是北部（23%）、西部（18%）與巴黎大區（10%）。雖然本土市場仍佔絕大多數（83%），但出口至歐洲與美國的市場也持續成長中。這股爆發性成長，某種程度上也緩解了阿爾薩斯酒業近年面臨的經濟壓力。</p>
    `,
  },
  {
    type: 'quiz',
    question: 'Crémant d\'Alsace 在法國國內 AOC 氣泡酒市場的地位如何？',
    options: [
      '市佔率不到 5%，屬於小眾產品',
      '以 36.9% 市佔率穩居法國國內在家消費銷量第一的 AOC 氣泡酒，遠超 Clairette de Die 與 Saumur',
      '僅在阿爾薩斯當地銷售，未在法國其他地區流通',
      '市佔率與香檳相當',
    ],
    answer: 1,
    explanation: 'Crémant d\'Alsace 以 36.9% 的市佔率，是法國國內在家消費銷量第一的 AOC 氣泡酒，遠遠領先第二名 Clairette de Die（15.5%）、Saumur（10%）與 Blanquette de Limoux（4.8%）。25 年間銷量成長了 13 倍（1982 年 220 萬瓶 → 2007 年 2,800 萬瓶），是阿爾薩斯酒業近年最亮眼的成長故事之一。',
  },
  {
    type: 'summary',
    message: 'Crémant 品種特性與市場地位學習完成！',
    keyPoints: [
      '五個授權品種：Pinot Blanc（主力）、Riesling、Pinot Gris、Chardonnay（僅限 Crémant）、Pinot Noir（唯一可做粉紅）',
      '法國國內銷量第一的 AOC 氣泡酒，市佔率 36.9%，年產約 2,900 萬瓶（佔阿爾薩斯總產量 19%）',
      '25 年間成長 13 倍：1982 年 220 萬瓶 → 2007 年 2,800 萬瓶',
      '消費集中大東部地區（34%），本土市場佔 83%，歐美出口持續成長',
    ],
    nextLesson: '下一課：貴腐與晚摘——VT 與 SGN 的嚴格規範',
  },
]

const AL3M3L1_slides = [
  {
    type: 'cover',
    icon: '🍯',
    gradient: 'linear-gradient(135deg, #c9a227, #7c4a2d)',
    title: '貴腐與晚摘：VT 與 SGN 的嚴格規範',
    subtitle: 'Level 3 · 第五課',
    points: [
      { icon: '📊', label: '精確的糖度門檻', text: '4 品種 × 2 等級，每個都有明確的最低天然糖度與酒精度要求' },
      { icon: '☀️', label: '半大陸型氣候的禮物', text: '乾燥少雨的秋季，是造就貴腐與晚摘的關鍵基礎' },
      { icon: '📋', label: '七項強制條件', text: '從人工採收到 INAO 雙重認證，缺一不可' },
    ],
  },
  {
    type: 'content',
    icon: '📊',
    title: '精確的糖度與酒精度門檻',
    html: `
      <p>Level 1 已經認識過 VT 與 SGN 的基本規範，這裡我們深入官方精確數據——以 <strong>2007 年採收年</strong>實際採用的門檻為例（法規最低值＋逐年上修後的實際執行值）：</p>
      <table style="width:100%;border-collapse:collapse;margin-top:8px;font-size:0.8rem">
        <tr style="background:#fefae0"><th style="padding:5px" rowspan="2">品種</th><th colspan="2" style="padding:5px">Vendanges Tardives</th><th colspan="2" style="padding:5px">Sélection de Grains Nobles</th></tr>
        <tr style="background:#fefae0"><th style="padding:5px">含糖量(g/L)</th><th style="padding:5px">最低酒精度</th><th style="padding:5px">含糖量(g/L)</th><th style="padding:5px">最低酒精度</th></tr>
        <tr><td style="padding:5px;border:1px solid #eee">Gewurztraminer</td><td style="padding:5px;border:1px solid #eee">257</td><td style="padding:5px;border:1px solid #eee">15.3°</td><td style="padding:5px;border:1px solid #eee">306</td><td style="padding:5px;border:1px solid #eee">18.2°</td></tr>
        <tr><td style="padding:5px;border:1px solid #eee">Pinot Gris</td><td style="padding:5px;border:1px solid #eee">257</td><td style="padding:5px;border:1px solid #eee">15.3°</td><td style="padding:5px;border:1px solid #eee">306</td><td style="padding:5px;border:1px solid #eee">18.2°</td></tr>
        <tr><td style="padding:5px;border:1px solid #eee">Riesling</td><td style="padding:5px;border:1px solid #eee">235</td><td style="padding:5px;border:1px solid #eee">14.0°</td><td style="padding:5px;border:1px solid #eee">276</td><td style="padding:5px;border:1px solid #eee">16.4°</td></tr>
        <tr><td style="padding:5px;border:1px solid #eee">Muscat</td><td style="padding:5px;border:1px solid #eee">235</td><td style="padding:5px;border:1px solid #eee">14.0°</td><td style="padding:5px;border:1px solid #eee">276</td><td style="padding:5px;border:1px solid #eee">16.4°</td></tr>
      </table>
      <p style="margin-top:8px">💡 這些糖度門檻，加上侏羅（Jura）稻草酒（vin de paille），是<strong>全法國 AOC 體系中數一數二嚴格</strong>的甜酒標準。</p>
    `,
  },
  {
    type: 'content',
    icon: '📋',
    title: '七項強制生產條件',
    html: `
      <ol style="padding-left:20px;line-height:1.8">
        <li>須<strong>人工採收</strong></li>
        <li>須來自<strong>單一品種</strong>，並以該品種名稱申報銷售</li>
        <li>須達到表格中規定的<strong>最低天然糖度</strong></li>
        <li><strong>禁止任何加糖（enrichissement）</strong></li>
        <li>須達到與糖度對應的<strong>最低總酒精度</strong></li>
        <li>採收前須向<strong>當地 INAO 單位預先申報</strong></li>
        <li>須通過<strong>分析與感官品評雙重認證</strong>，方可使用 VT／SGN 特殊標示</li>
      </ol>
    `,
  },
  {
    type: 'content',
    icon: '☀️',
    title: '氣候基礎：半大陸型氣候的禮物',
    html: `
      <p>阿爾薩斯半大陸型氣候，<strong>降雨量極低</strong>，加上秋季<strong>日照格外充足</strong>——這樣的氣候組合，在優質年份特別有利於葡萄進行<strong>「passerillage」（風乾濃縮）</strong>以及<strong>貴腐黴（pourriture noble）</strong>的發展，讓遠遲於正常採收期的晚摘與貴腐選果成為可能，也讓 Gewurztraminer、Pinot Gris、Riesling、Muscat 這四個品種得以在完全成熟後，展現最豐盛飽滿的一面。</p>
    `,
  },
  {
    type: 'quiz',
    question: 'VT 與 SGN 貴腐甜酒最嚴格的生產條件之一是什麼？',
    options: [
      '允許適度加糖以達到目標甜度',
      '禁止任何形式的加糖（enrichissement），糖度須完全來自葡萄本身的天然濃縮',
      '可以使用機械採收以提高效率',
      '不需要向任何官方單位申報',
    ],
    answer: 1,
    explanation: 'VT 與 SGN 的核心精神是「純粹來自天然濃縮」——法規明文禁止任何形式的加糖（enrichissement）。所有甜度都必須透過晚摘（passerillage 風乾濃縮）或貴腐黴（pourriture noble）的自然作用達成，這也是為什麼阿爾薩斯乾燥少雨、日照充足的秋季氣候條件如此關鍵。',
  },
  {
    type: 'summary',
    message: 'VT 與 SGN 嚴格規範學習完成！',
    keyPoints: [
      '2007 年門檻：Gewurztraminer／Pinot Gris VT 257g/L（15.3°）、SGN 306g/L（18.2°）；Riesling／Muscat VT 235g/L（14.0°）、SGN 276g/L（16.4°）',
      '七項強制條件：人工採收、單一品種、達最低糖度、禁止加糖、達對應酒精度、INAO 預先申報、雙重認證',
      '半大陸型氣候（低降雨＋秋季充足日照）是貴腐與晚摘得以發生的氣候基礎',
      '與侏羅稻草酒並列全法國 AOC 體系中數一數二嚴格的甜酒標準',
    ],
    nextLesson: '下一課：四大品種的貴腐甜酒風格',
  },
]

const AL3M3L2_slides = [
  {
    type: 'cover',
    icon: '🍇',
    gradient: 'linear-gradient(135deg, #7c4a2d, #c9a227)',
    title: '四大品種的貴腐甜酒風格',
    subtitle: 'Level 3 · 第六課',
    points: [
      { icon: '🌸', label: 'Gewurztraminer', text: '最濃郁奔放，貴腐版本層次最為華麗' },
      { icon: '🍯', label: 'Pinot Gris', text: '最豐腴厚重，VT 版本常見於頂級料理搭配' },
      { icon: '⚖️', label: '晚摘 vs 貴腐精選', text: '同一品種，兩種截然不同的甜蜜表現' },
    ],
  },
  {
    type: 'compare',
    title: 'VT（晚摘）vs SGN（貴腐精選）：風味邏輯的根本差異',
    items: [
      {
        icon: '🍇',
        label: 'Vendanges Tardives（晚摘）',
        desc: '葡萄在正常採收後數週才進行採收，達到「過熟」（surmaturité）狀態——風乾濃縮效應為主。品種本身的辨識度與香氣特徵依然清晰可辨，只是疊加了更高的濃縮度與力量。',
        color: '#c9a227',
      },
      {
        icon: '🍄',
        label: 'Sélection de Grains Nobles（貴腐精選）',
        desc: '透過多次選果（tries successives），只挑選已感染貴腐黴（Botrytis cinerea）的果粒——貴腐風味主導，品種辨識度相對隱晦。呈現濃郁蜂蜜香氣、極強勁的結構、圓潤黏稠的口感與悠長餘韻。',
        color: '#7c4a2d',
      },
    ],
  },
  {
    type: 'content',
    icon: '🌸',
    title: 'Gewurztraminer 與 Pinot Gris：兩大貴腐主力',
    html: `
      <p><strong>Gewurztraminer</strong>：即使一般年份也常帶微甜殘糖，VT 版本香氣更為奔放馥郁——玫瑰、荔枝、辛香料層層堆疊；SGN 版本則近乎液態花蜜，適合搭配藍紋乳酪或作為餐後獨立品飲的珍藏酒款。</p>
      <p style="margin-top:8px"><strong>Pinot Gris</strong>：本身即是阿爾薩斯白酒中酒體最飽滿的品種，VT 版本更顯濃郁豐腴，帶蜂蜜與烤堅果調性；優質年份的 VT 常搭配鵝肝、松露等奢華料理，SGN 版本則發展出蜜漬水果與焦糖般的深邃層次。</p>
    `,
  },
  {
    type: 'content',
    icon: '🍋',
    title: 'Riesling 與 Muscat：門檻最嚴但風格迥異的兩支',
    html: `
      <p><strong>Riesling</strong> 的 VT／SGN 糖度門檻雖低於 Gewurztraminer／Pinot Gris，但因其天生高酸的品種特質，即使高糖度也能維持驚人的清新感——酸甜平衡是 Riesling 貴腐甜酒最迷人之處，陳年潛力尤其出色。</p>
      <p style="margin-top:8px"><strong>Muscat</strong> 的 VT／SGN 版本相對罕見（產量最小的品種），但格外珍貴——奔放的葡萄香氣在貴腐甜酒的濃縮效應下更顯馥郁迷人，是四個品種中最具異國情調的貴腐甜酒風格。</p>
    `,
  },
  {
    type: 'quiz',
    question: 'VT（晚摘）與 SGN（貴腐精選）在風味邏輯上最根本的差異是什麼？',
    options: [
      'VT 只能用白葡萄，SGN 只能用黑葡萄',
      'VT 保留品種辨識度、疊加濃縮效應；SGN 則以貴腐黴風味主導，品種辨識度相對隱晦',
      'VT 一定比 SGN 甜',
      '兩者的釀造方式完全相同，只是名稱不同',
    ],
    answer: 1,
    explanation: 'VT（晚摘）葡萄僅是達到「過熟」狀態，品種本身的香氣特徵依然清晰可辨，只是疊加了濃縮效應；而 SGN（貴腐精選）透過多次選果只挑貴腐感染的果粒，風味由貴腐黴（Botrytis cinerea）主導，品種辨識度相對隱晦，取而代之的是蜂蜜、蜜漬水果般的濃郁複雜香氣。',
  },
  {
    type: 'summary',
    message: '四大品種的貴腐甜酒風格學習完成！',
    keyPoints: [
      'VT：疊加濃縮效應，品種辨識度清晰；SGN：貴腐風味主導，濃郁複雜、蜂蜜與蜜漬水果調性',
      'Gewurztraminer：貴腐版本最為奔放華麗，SGN 近乎液態花蜜',
      'Pinot Gris：最飽滿厚重，VT 常搭配鵝肝、松露等奢華料理',
      'Riesling：高酸品種特質讓貴腐甜酒維持清新平衡，陳年潛力最佳',
      'Muscat：產量最小、最罕見，貴腐版本異國情調最濃',
    ],
    nextLesson: '下一課：Edelzwicker vs Gentil——兩種調配哲學',
  },
]

const AL3M4L1_slides = [
  {
    type: 'cover',
    icon: '🍾',
    gradient: 'linear-gradient(135deg, #2d6a4f, #c9a227)',
    title: 'Edelzwicker vs Gentil：兩種調配哲學',
    subtitle: 'Level 3 · 第七課',
    points: [
      { icon: '🔤', label: '字源', text: 'Zwicker（調配）＋ Edel（貴族）＝ Edelzwicker' },
      { icon: '📜', label: 'Gentil 的復興', text: '1920 年代古老傳統，近年由業界章程重新規範振興' },
      { icon: '🎓', label: '品評認證', text: 'Gentil 須通過裝瓶後的品評認證才能上市' },
    ],
  },
  {
    type: 'content',
    icon: '🔤',
    title: 'Edelzwicker：從「Zwicker」到「貴族調配」',
    html: `
      <p>「Zwicker」在阿爾薩斯方言中意指<strong>「調配、混合」</strong>。歷史上，這些不同品種原本就種植在<strong>同一塊田地</strong>裡，農民習慣將它們一起採收、一起釀造。後來為了強調品質，農民在「Zwicker」前加上「<strong>Edel</strong>」（意為「貴族、高貴」），標誌著<strong>特別挑選過的優質品種</strong>取代了單純的高產量品種——這就是「Edelzwicker」名稱的由來。</p>
      <p style="margin-top:8px">今日的 Edelzwicker 泛指任何以<strong>阿爾薩斯白葡萄品種調配</strong>而成的酒款，比例不拘、不需公開，品種可分開或一起釀造，年份標示為選擇性。<strong>酒標上不會（也不能）列出品種名稱</strong>——這是與 Gentil 最直接的區別之一。</p>
    `,
  },
  {
    type: 'content',
    icon: '📜',
    title: 'Gentil：1920 年代傳統的現代復興',
    html: `
      <p>「Gentil」的概念可追溯至 <strong>1920 年代</strong>：當時許多地塊本來就混種著不同品種，農民習慣將它們一起採收、一起釀造——這其實與今日部分阿爾薩斯 Clos（如 Zahnacker）保留的做法一脈相承。</p>
      <p style="margin-top:8px">近年來，Gentil 這個古老稱謂被<strong>業界章程（Charte Interprofessionnelle）</strong>重新定義規範，成為代表<strong>「優質調配酒」</strong>的專屬稱謂。規範要求：</p>
      <ul style="padding-left:20px;line-height:1.8;margin-top:6px">
        <li>調配比例中，<strong>至少 50%</strong> 須來自 Riesling、Muscat、Pinot Gris、Gewurztraminer 四大貴族品種</li>
        <li>其餘比例可用 Sylvaner、Chasselas 或 Pinot Blanc 補足</li>
        <li>每個品種<strong>須先各自單獨釀造</strong>，並取得 AOC Alsace 認證後，才能進行最終調配</li>
        <li>調配完成裝瓶後，還須通過<strong>品評認證（dégustation d'agrément）</strong>才能正式上市銷售</li>
      </ul>
    `,
  },
  {
    type: 'compare',
    title: 'Edelzwicker vs Gentil 一覽',
    items: [
      {
        icon: '🍇',
        label: 'Edelzwicker',
        desc: '任意阿爾薩斯白葡萄品種調配，比例不拘不公開，酒標不列品種名稱，是日常餐酒代表——清爽好飲、無陳年需求，適合搭配沙拉、輕食冷盤。',
        color: '#2d6a4f',
      },
      {
        icon: '🏅',
        label: 'Gentil',
        desc: '受業界章程規範的「優質調配酒」：≥50% 貴族品種＋補足品種，各自單獨釀造取得認證後調配，須通過裝瓶品評認證才能上市——是能搭配整餐料理的更高階版本。',
        color: '#c9a227',
      },
    ],
  },
  {
    type: 'quiz',
    question: 'Gentil 這款調配酒，在釀造流程上與 Edelzwicker 最主要的差異是什麼？',
    options: [
      'Gentil 只能用單一品種釀造',
      'Gentil 要求各品種先各自單獨釀造並取得 AOC Alsace 認證，才能進行最終調配，且裝瓶後還須通過品評認證才能上市',
      'Edelzwicker 需要陳年 10 年以上',
      '兩者的釀造流程完全相同',
    ],
    answer: 1,
    explanation: 'Gentil 受業界章程規範：每個品種必須先各自單獨釀造，取得 AOC Alsace 認證後才能進行最終調配，且調配裝瓶完成後還須通過品評認證（dégustation d\'agrément）才能正式上市——這一整套嚴謹流程，正是 Gentil 作為「優質調配酒」的品質保證，也是它與可以任意混調、不需認證的 Edelzwicker 最根本的差異。',
  },
  {
    type: 'summary',
    message: 'Edelzwicker vs Gentil 學習完成！',
    keyPoints: [
      'Edelzwicker：源自方言「Zwicker」（調配）＋「Edel」（貴族），任意混調，酒標不列品種',
      'Gentil：可追溯至 1920 年代傳統，近年由業界章程重新規範復興',
      'Gentil 要求 ≥50% 貴族品種、各自單獨釀造取得認證、裝瓶後須通過品評認證',
      '兩者代表阿爾薩斯調配酒的「日常款」與「優質款」兩種不同定位',
    ],
    nextLesson: '下一課：Altenberg de Bergheim 與 Kaefferkopf 混釀 Grand Cru',
  },
]

const AL3M4L2_slides = [
  {
    type: 'cover',
    icon: '👑',
    gradient: 'linear-gradient(135deg, #e74c3c, #c9a227)',
    title: 'Altenberg de Bergheim 與 Kaefferkopf 混釀 Grand Cru',
    subtitle: 'Level 3 · 第八課',
    points: [
      { icon: '⚖️', label: '唯二特例', text: '51 個 Grand Cru 中唯二允許混釀的地塊' },
      { icon: '📜', label: 'Kaefferkopf 的先見之明', text: '1932 年就已受司法保護，早於 AOC 概念誕生' },
      { icon: '🍇', label: '精確比例規範', text: '兩地塊都有嚴格的品種比例上下限' },
    ],
  },
  {
    type: 'content',
    icon: '🔴',
    title: 'Altenberg de Bergheim：紅色泥灰岩上的混釀典範',
    html: `
      <p>Altenberg de Bergheim（Bergheim，35.06 公頃）位於 Ribeauvillé 斷層帶，紅色泥灰石灰岩、多石富含化石。這裡的混釀規範採<strong>「二選一」架構</strong>：</p>
      <ul style="padding-left:20px;line-height:1.8;margin-top:6px">
        <li><strong>選項一</strong>：Riesling、Pinot Gris 或 Gewurztraminer <strong>單一品種</strong>純釀</li>
        <li><strong>選項二（混釀）</strong>：Riesling 佔 <strong>50–70%</strong>、Pinot Gris 佔 <strong>10–25%</strong>、Gewurztraminer 佔 <strong>10–25%</strong>，其餘 Pinot Blanc、Pinot Noir、Muscat Ottonel、Muscat à petit grain、Chasselas 合計須<strong>低於 10%</strong>（僅限 2005 年 3 月 26 日前已種植者）</li>
      </ul>
      <p style="margin-top:8px">混釀版本的葡萄是<strong>一起壓榨（pressés ensemble）</strong>——這與部分酒莊「分開釀造再調配」的做法不同，是更接近傳統 field blend 的做法，也是這款酒獨特風味的關鍵來源。</p>
    `,
  },
  {
    type: 'content',
    icon: '🏰',
    title: 'Kaefferkopf：早於 AOC 概念的先見之明',
    html: `
      <p>Kaefferkopf（Ammerschwihr，71.65 公頃）花崗岩、鮞狀石灰岩與砂岩混合的複雜地質，早在 <strong>1932 年</strong>——遠早於「法定產區」（Appellation d'Origine Contrôlée）概念正式誕生之前——就已受到司法保護，是阿爾薩斯葡萄酒界最古老聲譽的地塊之一。</p>
      <p style="margin-top:8px">混釀規範：</p>
      <ul style="padding-left:20px;line-height:1.8;margin-top:6px">
        <li>可用 Riesling、Pinot Gris、Gewurztraminer 任一<strong>單一品種</strong>純釀（並標示品種名）</li>
        <li>或依<strong>混釀比例</strong>：Gewurztraminer 佔 <strong>60–80%</strong>、Riesling 佔 <strong>10–40%</strong>、Pinot Gris 最高 <strong>30%</strong></li>
      </ul>
      <p style="margin-top:8px">混釀是 Kaefferkopf 這個 Grand Cru 的<strong>特色招牌</strong>，兼具優雅與濃郁香氣力量——2007 年正式成為第 51 個 Grand Cru 時，就是唯一從創立之初就明文允許混釀的地塊。</p>
    `,
  },
  {
    type: 'compare',
    title: '兩個混釀 Grand Cru 比例對照',
    items: [
      {
        icon: '🔴',
        label: 'Altenberg de Bergheim',
        desc: 'Riesling 50-70% + Pinot Gris 10-25% + Gewurztraminer 10-25%，Riesling 為骨幹主導',
        color: '#e74c3c',
      },
      {
        icon: '🏰',
        label: 'Kaefferkopf',
        desc: 'Gewurztraminer 60-80% + Riesling 10-40% + Pinot Gris ≤30%，Gewurztraminer 為骨幹主導',
        color: '#c9a227',
      },
    ],
  },
  {
    type: 'quiz',
    question: 'Kaefferkopf 這個地塊在阿爾薩斯葡萄酒法規史上有什麼特殊意義？',
    options: [
      '是第一個劃定的 Grand Cru（1975年）',
      '早在 1932 年就已受到司法保護，遠早於「法定產區」（AOC）概念正式誕生之前',
      '是唯一位於 Bas-Rhin 的混釀 Grand Cru',
      '是面積最小的混釀 Grand Cru',
    ],
    answer: 1,
    explanation: 'Kaefferkopf 早在 1932 年就已受到司法保護，這個時間點遠早於「法定產區」（Appellation d\'Origine Contrôlée）概念正式誕生之前，顯示這個地塊的卓越聲譽在法規制度成形之前就已備受肯定——這也是它 2007 年成為第 51 個、也是唯一從創立之初就明文允許混釀的 Grand Cru 的歷史淵源。',
  },
  {
    type: 'summary',
    message: '兩個混釀 Grand Cru 學習完成！',
    keyPoints: [
      'Altenberg de Bergheim：Riesling 50-70%+Pinot Gris 10-25%+Gewurztraminer 10-25%，一起壓榨釀造',
      'Kaefferkopf：Gewurztraminer 60-80%+Riesling 10-40%+Pinot Gris≤30%，1932 年即受司法保護',
      '兩者都可選擇單一品種純釀或依比例混釀，混釀是各自的招牌特色',
      '51 個 Grand Cru 中僅此兩例允許混釀，展現阿爾薩斯調配酒藝術在最高分級層次的體現',
    ],
    nextLesson: '下一課：Marc d\'Alsace Gewurztraminer',
  },
]

const AL3M5L1_slides = [
  {
    type: 'cover',
    icon: '🥃',
    gradient: 'linear-gradient(135deg, #7c4a2d, #40241a)',
    title: 'Marc d\'Alsace Gewurztraminer',
    subtitle: 'Level 3 · 第九課',
    points: [
      { icon: '📜', label: '2010 年 AOP', text: '從葡萄酒渣中提煉的珍貴蒸餾酒' },
      { icon: '🍇', label: '原料來源', text: '僅限 Gewurztraminer 葡萄渣，須完整去梗' },
      { icon: '🔥', label: '雙次蒸餾', text: '傳統壺式蒸餾器，禁止使用精餾塔' },
    ],
  },
  {
    type: 'content',
    icon: '📜',
    title: '從葡萄渣到珍貴蒸餾酒',
    html: `
      <p>Marc d'Alsace Gewurztraminer 是阿爾薩斯的特色蒸餾酒，於 <strong>2010 年</strong>正式取得受保護的原產地名稱（Appellation d'Origine Protégée）。</p>
      <p style="margin-top:8px">原料規定極為嚴格：必須採用在 <strong>AOP Alsace 產區範圍內採收的 Gewurztraminer 葡萄渣（marc）</strong>，並在 Haut-Rhin 與 Bas-Rhin 兩省境內完成蒸餾。這些葡萄渣必須<strong>健康且完整去梗</strong>，每 100 公斤申報原料，須能萃取出至少 <strong>4.5 公升純酒精</strong>。</p>
    `,
  },
  {
    type: 'content',
    icon: '🔥',
    title: '嚴謹的蒸餾規範',
    html: `
      <ul style="padding-left:20px;line-height:1.8">
        <li><strong>蒸餾方式</strong>：採<strong>兩階段蒸餾</strong>，使用傳統的<strong>壺式蒸餾器（alambic à repasse）</strong>——明文<strong>禁止使用精餾塔（colonnes de rectification）</strong>，以保留葡萄渣本身粗獷而濃郁的香氣特質</li>
        <li><strong>蒸餾出的酒精度</strong>：出爐時須低於 68° GL</li>
        <li><strong>銷售酒精度</strong>：裝瓶銷售時須達 45° GL 以上</li>
        <li><strong>非酒精物質含量</strong>：須超過每公升 400 公克（這些物質正是賦予 Marc 濃郁香氣與個性的來源）</li>
      </ul>
      <p style="margin-top:10px">💡 由於原料正是 Gewurztraminer 果皮與種籽（榨汁後的固形物），Marc d'Alsace Gewurztraminer 往往能濃縮展現這個品種最奔放的<strong>玫瑰、荔枝與辛香</strong>特質——是阿爾薩斯餐後酒文化中極具代表性的一支。</p>
    `,
  },
  {
    type: 'quiz',
    question: 'Marc d\'Alsace Gewurztraminer 的蒸餾方式有什麼明文禁止的規定？',
    options: [
      '禁止使用傳統壺式蒸餾器',
      '禁止使用精餾塔（colonnes de rectification），以保留葡萄渣本身濃郁的香氣特質',
      '禁止進行兩階段蒸餾',
      '禁止在 Haut-Rhin 進行蒸餾',
    ],
    answer: 1,
    explanation: 'Marc d\'Alsace Gewurztraminer 的法規明文禁止使用精餾塔（colonnes de rectification），只能採用傳統的壺式蒸餾器（alambic à repasse）進行兩階段蒸餾——這樣的規範是為了保留葡萄渣本身粗獷而濃郁的香氣特質，避免精餾塔過度純化而流失個性。',
  },
  {
    type: 'summary',
    message: 'Marc d\'Alsace Gewurztraminer 學習完成！',
    keyPoints: [
      '2010 年正式取得 AOP 保護，原料僅限 AOP Alsace 產區的 Gewurztraminer 葡萄渣',
      '每 100kg 原料須能萃取至少 4.5 公升純酒精',
      '傳統壺式蒸餾器兩階段蒸餾，明文禁止使用精餾塔',
      '出爐酒精度須低於 68° GL，銷售須達 45° GL 以上，非酒精物質須超過 400g/L',
    ],
    nextLesson: '下一課：Mirabelle de Lorraine 洛林蜜李白蘭地',
  },
]

const AL3M5L2_slides = [
  {
    type: 'cover',
    icon: '🍑',
    gradient: 'linear-gradient(135deg, #f39c12, #e67e22)',
    title: 'Mirabelle de Lorraine 洛林蜜李白蘭地',
    subtitle: 'Level 3 · 第十課',
    points: [
      { icon: '🍑', label: '兩個品種', text: 'Mirabelle de Metz 與 Mirabelle de Nancy' },
      { icon: '📜', label: '1953 年 AOC', text: '全法國歷史最悠久的水果蒸餾酒認證之一' },
      { icon: '🌳', label: '40 萬棵蜜李樹', text: '洛林地區蜜李產業的驚人規模' },
    ],
  },
  {
    type: 'content',
    icon: '🍑',
    title: '兩個經典蜜李品種',
    html: `
      <p>雖然嚴格來說 Mirabelle 屬於鄰近的<strong>洛林（Lorraine）</strong>特產，但因阿爾薩斯與洛林地理相鄰、飲食文化緊密交融，Mirabelle de Lorraine 也是阿爾薩斯餐桌上不可或缺的蒸餾酒夥伴。當地栽培兩個主要品種：</p>
      <ul style="padding-left:20px;line-height:1.8;margin-top:6px">
        <li><strong>Mirabelle de Metz</strong>：果皮細緻，黃底帶紅色斑點，八月即成熟</li>
        <li><strong>Mirabelle de Nancy</strong>：果實較 Metz 品種更大，果皮呈均勻黃色，八月中旬成熟</li>
      </ul>
      <p style="margin-top:8px">兩者皆受<strong>地理標示保護（IGP）</strong>，統一以「Mirabelle de Lorraine」名稱認證。</p>
    `,
  },
  {
    type: 'content',
    icon: '📊',
    title: '驚人的產業規模',
    html: `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:6px;text-align:center">
        <div style="background:#fdf1ea;border-radius:10px;padding:12px"><div style="font-size:1.3rem;font-weight:800;color:#e67e22">15,000 噸</div><div style="font-size:0.8rem">平均年收成量</div></div>
        <div style="background:#fdf1ea;border-radius:10px;padding:12px"><div style="font-size:1.3rem;font-weight:800;color:#f39c12">350 位</div><div style="font-size:0.8rem">蜜李生產者</div></div>
        <div style="background:#fdf1ea;border-radius:10px;padding:12px"><div style="font-size:1.3rem;font-weight:800;color:#e67e22">1,000 個</div><div style="font-size:0.8rem">季節性工作機會</div></div>
        <div style="background:#fdf1ea;border-radius:10px;padding:12px"><div style="font-size:1.3rem;font-weight:800;color:#f39c12">40 萬棵</div><div style="font-size:0.8rem">蜜李樹</div></div>
      </div>
      <p style="margin-top:10px">一棵蜜李樹需要種植滿<strong>八年</strong>才開始結果，成熟樹每年可產出高達 <strong>100 公斤</strong>蜜李（約 1 萬顆果實）——這片約 <strong>2,000 公頃</strong>的果園，構成了洛林地區重要的農業經濟支柱。</p>
    `,
  },
  {
    type: 'content',
    icon: '🥃',
    title: '嚴謹的認證與蒸餾規範',
    html: `
      <p>Mirabelle de Lorraine 的 Eau-de-vie（蒸餾酒）認證早在 <strong>1953 年 11 月 30 日</strong>就已規範化，範圍涵蓋 Meurthe-et-Moselle、Moselle、Meuse、Vosges 四個省份。</p>
      <ul style="padding-left:20px;line-height:1.8;margin-top:6px">
        <li><strong>發酵規定</strong>：果實發酵須以<strong>自然方式</strong>進行，不得加熱、不得添加任何化學物質，且發酵期須<strong>至少 15 天</strong></li>
        <li><strong>蒸餾器</strong>：可用<strong>壺式蒸餾器（à repasse）</strong>，或使用明火／蒸氣加熱的<strong>單次蒸餾（premier jet discontinu）</strong>設備</li>
        <li><strong>蒸餾出的酒精度</strong>：最高不超過 <strong>70% vol.</strong></li>
        <li><strong>銷售酒精度</strong>：最低須達 <strong>45% vol.</strong></li>
        <li><strong>非酒精物質含量</strong>：每公升純酒精中須低於 400 公克，其中<strong>酯類物質至少須達 200 公克</strong>——這是賦予 Mirabelle 白蘭地特有果香酯類調性的關鍵</li>
      </ul>
    `,
  },
  {
    type: 'quiz',
    question: 'Mirabelle de Lorraine 蒸餾酒的發酵過程有什麼嚴格規定？',
    options: [
      '可以任意添加酵母加速發酵',
      '須以自然方式發酵，不得加熱、不得添加任何化學物質，且發酵期須至少 15 天',
      '發酵時間沒有限制，越快越好',
      '必須使用商業酵母菌株',
    ],
    answer: 1,
    explanation: 'Mirabelle de Lorraine 的法規明文規定：果實發酵必須以自然方式進行，不得加熱、不得添加任何化學物質，且發酵期須至少 15 天——這項規定確保了蒸餾酒能真實反映蜜李本身的天然風味，是這款傳統水果蒸餾酒品質保證的核心。',
  },
  {
    type: 'summary',
    message: 'Mirabelle de Lorraine 學習完成！Level 3 即將完成，準備好迎接期末測驗了嗎？',
    keyPoints: [
      '兩個品種：Mirabelle de Metz（早熟、斑點）與 Mirabelle de Nancy（較大、均勻黃色）',
      '產業規模：年產 15,000 噸、350 位生產者、40 萬棵蜜李樹、約 2,000 公頃果園',
      '1953 年 11 月 30 日 AOC 認證，涵蓋洛林四省',
      '嚴格規範：自然發酵至少 15 天、蒸餾不超過 70%vol、銷售須達 45%vol、酯類物質須達 200g/L',
    ],
    nextLesson: '下一課：Level 3 綜合評量',
  },
]

const AL3FinalExam_slides = [
  {
    type: 'cover',
    icon: '🎓',
    gradient: 'linear-gradient(135deg, #c9a227, #7c4a2d)',
    title: 'Level 3 綜合評量',
    subtitle: '釀造工藝與特殊酒款 · 最終測驗',
    points: [
      { icon: '📋', label: '10 題綜合測驗', text: '涵蓋栽培實務、Crémant、貴腐甜酒、調配酒與蒸餾酒' },
      { icon: '✅', label: '通過標準', text: '答對 7 題以上即完成 Level 3' },
      { icon: '🏆', label: '完成後解鎖', text: 'Level 4：大師品鑑' },
    ],
  },
  {
    type: 'quiz',
    question: '【栽培】阿爾薩斯最主要採用的葡萄樹修剪方式是？',
    options: ['Cordon de Royat', 'Guyot 雙拱形修剪', 'Gobelet 扇形修剪', 'Cordon de Guyot 單枝修剪'],
    answer: 1,
    explanation: '阿爾薩斯最主要採用 Guyot 雙拱形修剪：冬季在每株葡萄樹上保留一至兩根結果母枝，2 月中旬彎曲固定成拱形，讓養分均勻分配到整根枝條的每個芽眼。',
  },
  {
    type: 'quiz',
    question: '【栽培】「性費洛蒙混淆法」（confusion sexuelle）主要用來對抗什麼問題？',
    options: [
      '直接殺死露菌病病原菌',
      '誘使雄蛾迷失方向，減少交配，進而降低灰黴病風險達一半',
      '增加葡萄產量',
      '防止霜害',
    ],
    answer: 1,
    explanation: '性費洛蒙混淆法透過釋放雌性蛾類費洛蒙誘使雄蛾迷失方向，大幅限制交配成功率，減少蛀蟲幼蟲數量，進而將灰黴病風險降低達一半，是重要的生態防治技術。',
  },
  {
    type: 'quiz',
    question: '【Crémant】Crémant d\'Alsace 在葡萄壓榨方式上有什麼強制性規定？',
    options: ['先破皮再壓榨', '整串壓榨（vendange entière），禁止先破皮', '只能使用機械採收', '不限壓榨方式'],
    answer: 1,
    explanation: 'Crémant d\'Alsace 強制要求整串壓榨（vendange entière），葡萄須整串直接倒入壓榨機，不得事先破皮，並明文禁止使用阿基米德螺旋或鏈條式壓榨設備，以保護果汁純淨度。',
  },
  {
    type: 'quiz',
    question: '【Crémant】Crémant d\'Alsace 目前在法國國內 AOC 氣泡酒市場的地位是？',
    options: [
      '市佔率不到 10%',
      '以 36.9% 市佔率，是法國國內銷量第一的 AOC 氣泡酒',
      '僅在阿爾薩斯地區銷售',
      '與香檳市佔率相當',
    ],
    answer: 1,
    explanation: 'Crémant d\'Alsace 以 36.9% 市佔率穩居法國國內在家消費銷量第一的 AOC 氣泡酒，25 年間銷量成長 13 倍（1982 年 220 萬瓶 → 2007 年 2,800 萬瓶）。',
  },
  {
    type: 'quiz',
    question: '【VT/SGN】VT 與 SGN 貴腐甜酒最核心的禁止事項是什麼？',
    options: [
      '禁止使用橡木桶陳年',
      '禁止任何形式的加糖（enrichissement），糖度須完全來自天然濃縮',
      '禁止標示年份',
      '禁止使用不鏽鋼槽發酵',
    ],
    answer: 1,
    explanation: 'VT 與 SGN 的核心精神是純粹的天然濃縮——法規明文禁止任何形式的加糖，所有甜度都必須透過晚摘或貴腐黴的自然作用達成。',
  },
  {
    type: 'quiz',
    question: '【VT/SGN】VT（晚摘）與 SGN（貴腐精選）風味邏輯的根本差異是？',
    options: [
      'VT 保留品種辨識度並疊加濃縮；SGN 則以貴腐黴風味主導，品種辨識度較隱晦',
      'VT 只能用紅葡萄；SGN 只能用白葡萄',
      '兩者完全相同',
      'VT 一定比 SGN 更甜',
    ],
    answer: 0,
    explanation: 'VT 葡萄僅是過熟濃縮，品種辨識度依然清晰；SGN 只挑選貴腐感染果粒，風味由貴腐黴主導，品種辨識度相對隱晦，取而代之的是濃郁的蜂蜜與蜜漬水果調性。',
  },
  {
    type: 'quiz',
    question: '【調配酒】Gentil 與 Edelzwicker 最根本的釀造流程差異是？',
    options: [
      'Gentil 只能用單一品種',
      'Gentil 要求各品種先各自單獨釀造取得認證，再調配後通過品評認證才能上市；Edelzwicker 則無此規範',
      'Edelzwicker 需要陳年 10 年以上',
      '兩者完全相同',
    ],
    answer: 1,
    explanation: 'Gentil 受業界章程規範：≥50% 貴族品種、各自單獨釀造取得 AOC Alsace 認證、裝瓶後須通過品評認證才能上市；Edelzwicker 則可任意調配，不需這套嚴謹流程，酒標也不列品種名稱。',
  },
  {
    type: 'quiz',
    question: '【混釀 Grand Cru】Altenberg de Bergheim 的混釀比例中，哪個品種佔比最高？',
    options: ['Gewurztraminer（60-80%）', 'Riesling（50-70%）', 'Pinot Gris（30-50%）', '三者比例相同'],
    answer: 1,
    explanation: 'Altenberg de Bergheim 混釀比例：Riesling 50-70%、Pinot Gris 10-25%、Gewurztraminer 10-25%，以 Riesling 為骨幹主導；相對地 Kaefferkopf 則以 Gewurztraminer（60-80%）為骨幹主導。',
  },
  {
    type: 'quiz',
    question: '【蒸餾酒】Marc d\'Alsace Gewurztraminer 的蒸餾規範中，明文禁止使用什麼設備？',
    options: ['壺式蒸餾器', '精餾塔（colonnes de rectification）', '銅製蒸餾釜', '木製發酵桶'],
    answer: 1,
    explanation: 'Marc d\'Alsace Gewurztraminer 法規明文禁止使用精餾塔，只能採用傳統壺式蒸餾器進行兩階段蒸餾，以保留葡萄渣本身粗獷濃郁的香氣特質。',
  },
  {
    type: 'quiz',
    question: '【蒸餾酒】Mirabelle de Lorraine 的發酵規定是什麼？',
    options: [
      '可任意添加酵母與化學物質加速發酵',
      '須以自然方式發酵，不得加熱、不得添加化學物質，發酵期須至少 15 天',
      '發酵時間不得超過 3 天',
      '必須低溫發酵 30 天以上',
    ],
    answer: 1,
    explanation: 'Mirabelle de Lorraine 法規規定：果實發酵須以自然方式進行，不得加熱、不得添加任何化學物質，且發酵期須至少 15 天，確保蒸餾酒真實反映蜜李本身的天然風味。',
  },
  {
    type: 'summary',
    icon: '🏆',
    message: '🎉 恭喜完成 Level 3 綜合評量！你已經掌握阿爾薩斯從葡萄園到酒杯的完整工藝！',
    keyPoints: [
      '✅ 栽培實務：Guyot 雙拱形修剪、年度作業曆、性費洛蒙生態防治',
      '✅ Crémant d\'Alsace：整串壓榨強制規定、法國銷量第一的 AOC 氣泡酒',
      '✅ VT／SGN：精確糖度門檻、七項強制條件、四大品種各自的貴腐風格',
      '✅ 調配酒：Edelzwicker（日常）vs Gentil（優質，需雙重認證）',
      '✅ 混釀 Grand Cru：Altenberg de Bergheim（Riesling 主導）與 Kaefferkopf（Gewurztraminer 主導）',
      '✅ 蒸餾酒：Marc d\'Alsace Gewurztraminer 與 Mirabelle de Lorraine',
    ],
    nextLesson: '準備好了嗎？Level 4：大師品鑑，即將帶你進入年份指南、比較品飲與系統化盲飲的世界！',
  },
]

// ───────────────────────────────────────────────────────────────
//  Level 4 投影片 — 大師品鑑
//  資料來源：Jessica Chang AIWS《Alsace／Germany 品飲課程講義》、
//  CIVA 餐酒搭配指南與搭配表、Alsace 葡萄酒之路官方地圖、
//  WSET SAT 系統化品飲架構
// ───────────────────────────────────────────────────────────────

const AL4M2L1_slides = [
  {
    type: 'cover',
    icon: '🇩🇪',
    gradient: 'linear-gradient(135deg, #40241a, #2d6a4f)',
    title: 'Alsace vs 德國萊茵／摩塞爾比較品飲',
    subtitle: 'Level 4 · 第一課',
    points: [
      { icon: '🏔️', label: '同源異境', text: '共享萊茵地塹地質起源，卻走上截然不同的風格道路' },
      { icon: '☀️', label: '氣候分水嶺', text: '孚日山脈雨影 vs 摩塞爾河谷大陸性氣候' },
      { icon: '📜', label: '分級邏輯不同', text: '固定產區分級 vs 採收時甜度分級' },
    ],
  },
  {
    type: 'content',
    icon: '🏔️',
    title: '共同的地質起源，不同的氣候命運',
    html: `
      <p>阿爾薩斯與德國萊茵／摩塞爾產區，都座落在數百萬年前<strong>萊茵地塹（Rhine Rift Valley）</strong>形成過程中誕生的破碎地質帶上——這也是為什麼兩地土壤都呈現極高的多樣性。但兩地的氣候命運卻截然不同：</p>
      <ul style="padding-left:20px;line-height:1.8;margin-top:6px">
        <li><strong>阿爾薩斯（Colmar）</strong>：孚日山脈（Vosges）阻擋了由西而來的雨雲，年降雨量不到 500mm，是<strong>全法國第二乾燥的城鎮</strong>（僅次於南部的 Perpignan）；年日照約 <strong>1,800 小時</strong>，年均溫 10-11°C，4-9 月生長季均溫超過 16°C</li>
        <li><strong>德國摩澤爾／萊茵高</strong>：屬<strong>大陸性氣候</strong>，雨量中等，秋季漫長——這對 Riesling 等晚熟品種格外重要，也是 BA、TBA、Eiswein 等極甜酒款得以形成的氣候基礎</li>
      </ul>
      <p style="margin-top:8px">💡 阿爾薩斯的乾燥少雨造就了葡萄更容易達到完全成熟；德國的漫長冷涼秋季則讓葡萄得以在樹上緩慢累積糖分與香氣，同時保留高酸度。</p>
    `,
  },
  {
    type: 'compare',
    title: '土壤地形對照',
    items: [
      { icon: '🍇', label: '阿爾薩斯', desc: '孚日山麓緩坡，土壤類型極度多元（花崗岩、石灰岩、泥灰岩、火山岩、砂岩等），依地質分區種植對應品種', color: '#2d6a4f' },
      { icon: '🪨', label: '摩塞爾-薩爾-魯爾', desc: '陡峭的板岩山坡（steep slate slopes），板岩儲熱反射陽光，賦予 Riesling 標誌性的燧石／礦物調性', color: '#40241a' },
    ],
  },
  {
    type: 'content',
    icon: '📜',
    title: '分級邏輯的根本差異',
    html: `
      <p>兩地的分級系統反映了截然不同的品質哲學：</p>
      <ul style="padding-left:20px;line-height:1.8;margin-top:6px">
        <li><strong>阿爾薩斯（法國體系）</strong>：以<strong>固定產區位階</strong>為核心——AOC Alsace → 51 個法定 Grand Cru 地塊 → VT／SGN（依採收時的最低天然糖度，以 g/L 表示，且禁止加糖）</li>
        <li><strong>德國體系</strong>：以<strong>採收時果實的成熟糖度（Oechsle 度）</strong>為核心，與地塊位階無關——QmP 由低到高依序為 Kabinett → Spätlese → Auslese → Beerenauslese (BA) → Eiswein → Trockenbeerenauslese (TBA)；德國另有独立於官方分級之外的產區公會分級 <strong>VDP（Die Prädikatsweingüter）</strong>，以葡萄園品質劃分 Erste Lage／Grosse Lage 等級</li>
      </ul>
      <p style="margin-top:8px">簡言之：阿爾薩斯先問「這是哪塊地？」，德國則先問「採收時葡萄有多熟？」——這也是兩地品飲時最重要的心法差異。</p>
    `,
  },
  {
    type: 'content',
    icon: '🍷',
    title: '風格對照：以 Riesling 為例',
    html: `
      <table style="width:100%;border-collapse:collapse;margin-top:6px;font-size:0.82rem">
        <tr style="background:#eaf5ef"><th style="padding:6px 8px;border:1px solid #ddd">特徵</th><th style="padding:6px 8px;border:1px solid #ddd">阿爾薩斯 Riesling</th><th style="padding:6px 8px;border:1px solid #ddd">德國 Riesling（Mosel／Rheingau）</th></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">甜度傾向</td><td style="padding:6px 8px;border:1px solid #ddd">絕大多數為乾型（sec）</td><td style="padding:6px 8px;border:1px solid #ddd">從極乾（trocken）到極甜（TBA/Eiswein）皆有，光譜寬廣</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">酒精度</td><td style="padding:6px 8px;border:1px solid #ddd">通常較高（12.5-13.5%）</td><td style="padding:6px 8px;border:1px solid #ddd">通常較低（7.5-11%），尤其甜型酒款</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">酒體</td><td style="padding:6px 8px;border:1px solid #ddd">中至飽滿，果香濃郁直接</td><td style="padding:6px 8px;border:1px solid #ddd">輕盈細緻，礦物調性突出</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">主導香氣</td><td style="padding:6px 8px;border:1px solid #ddd">萊姆、蜂蜜、板岩（成熟果香主導）</td><td style="padding:6px 8px;border:1px solid #ddd">青蘋果、白花、燧石礦物、汽油調性隨陳年浮現</td></tr>
      </table>
    `,
  },
  {
    type: 'quiz',
    question: '阿爾薩斯與德國葡萄酒分級系統，最根本的邏輯差異是什麼？',
    options: [
      '阿爾薩斯沒有任何分級制度',
      '阿爾薩斯以固定產區位階（AOC→Grand Cru→VT/SGN）為核心；德國則以採收時果實的成熟糖度（Oechsle 度）為核心，與地塊位階無關',
      '兩者的分級邏輯完全相同',
      '德國只有一種分級：QbA',
    ],
    answer: 1,
    explanation: '阿爾薩斯先問「這是哪塊地？」——以固定的產區與 Grand Cru 位階為核心；德國則先問「採收時葡萄有多熟？」——以 Oechsle 度數決定 Kabinett 到 TBA 的位階，與葡萄園位置無關（VDP 是另一套獨立於官方分級之外的產區公會分級）。',
  },
  {
    type: 'summary',
    message: 'Alsace vs 德國比較品飲學習完成！',
    keyPoints: [
      '兩地共享萊茵地塹地質起源，但氣候命運不同：阿爾薩斯乾燥少雨（孚日山脈雨影）、德國大陸性氣候秋季漫長',
      '土壤地形：阿爾薩斯多元地質緩坡 vs 摩塞爾陡峭板岩山坡',
      '分級邏輯：阿爾薩斯看產區位階（AOC→Grand Cru→VT/SGN）；德國看採收糖度（Kabinett→TBA）',
      'Riesling 風格對照：阿爾薩斯多乾型、酒精度較高、果香濃郁；德國光譜寬廣、酒精度較低、礦物調性突出',
    ],
    nextLesson: '下一課：傳統 vs 現代風格——乾型化浪潮',
  },
]

const AL4M2L2_slides = [
  {
    type: 'cover',
    icon: '🌊',
    gradient: 'linear-gradient(135deg, #7c4a2d, #2d6a4f)',
    title: '傳統 vs 現代風格：乾型化浪潮',
    subtitle: 'Level 4 · 第二課',
    points: [
      { icon: '❓', label: '甜度標示的長年爭議', text: '「乾型」酒標下，殘糖含量卻可能天差地遠' },
      { icon: '📋', label: '2020 年甜度分級新制', text: 'sec／demi-sec／moelleux／liquoreux 四級標示上路' },
      { icon: '⚖️', label: '兩種釀酒哲學並存', text: '傳統飽滿殘糖派 vs 現代極致乾爽派' },
    ],
  },
  {
    type: 'content',
    icon: '❓',
    title: '「隱藏的甜度」：消費者長年的困惑',
    html: `
      <p>阿爾薩斯葡萄酒有個長年為人詬病的特色：即使酒標上沒有標示任何甜度資訊，許多 <strong>Pinot Gris</strong> 與 <strong>Gewurztraminer</strong>（尤其是來自晚摘葡萄或溫暖年份）實際上帶有<strong>明顯可感知的殘糖</strong>，卻仍以「一般 AOC Alsace」的身分上市——這與消費者對「白酒＝乾型」的直覺期待產生落差，也是阿爾薩斯葡萄酒在國際市場上長期背負「到底甜不甜？」困惑的根源。</p>
      <p style="margin-top:8px">這個問題並非偶然：阿爾薩斯法規（不同於德國）<strong>並未要求在採收時申報糖度等級對應特定甜度上限</strong>，除了 VT／SGN 有明確門檻外，一般 AOC Alsace 的甜度完全取決於酒莊的釀造哲學與市場定位。</p>
    `,
  },
  {
    type: 'content',
    icon: '📋',
    title: '2020 年甜度分級新制：四級標示上路',
    html: `
      <p>為了回應這項長年爭議，阿爾薩斯酒業公會於 <strong>2020 年</strong>推動重大改革：自 2021 年份起，<strong>AOC Alsace 與 AOC Alsace Grand Cru</strong> 的酒標上須強制標示官方甜度分級（Indication de la Teneur en Sucre）：</p>
      <table style="width:100%;border-collapse:collapse;margin-top:6px;font-size:0.82rem">
        <tr style="background:#f3f0ea"><th style="padding:6px 8px;border:1px solid #ddd">分級</th><th style="padding:6px 8px;border:1px solid #ddd">中文</th><th style="padding:6px 8px;border:1px solid #ddd">風格</th></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">Sec</td><td style="padding:6px 8px;border:1px solid #ddd">乾型</td><td style="padding:6px 8px;border:1px solid #ddd">殘糖最低，口感俐落</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">Demi-sec</td><td style="padding:6px 8px;border:1px solid #ddd">半乾型</td><td style="padding:6px 8px;border:1px solid #ddd">略帶柔和甘甜感</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">Moelleux</td><td style="padding:6px 8px;border:1px solid #ddd">半甜型</td><td style="padding:6px 8px;border:1px solid #ddd">明顯甜潤口感</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">Liquoreux</td><td style="padding:6px 8px;border:1px solid #ddd">甜型</td><td style="padding:6px 8px;border:1px solid #ddd">濃郁蜜甜，含 VT／SGN</td></tr>
      </table>
      <p style="margin-top:8px">這項改革讓消費者終於能在選購時就掌握酒款的甜度定位，而不必仰賴品種刻板印象或酒莊聲譽來猜測。</p>
    `,
  },
  {
    type: 'compare',
    title: '兩種釀酒哲學：傳統飽滿派 vs 現代乾爽派',
    items: [
      {
        icon: '🍯',
        label: '傳統飽滿殘糖派',
        desc: '認為 Pinot Gris、Gewurztraminer 這類豐厚品種的天然特質，本就適合保留一定殘糖以平衡其濃郁酒體與偏低酸度——強調「風土完全成熟的自然表現」，不刻意追求發酵到底',
        color: '#7c4a2d',
      },
      {
        icon: '⚡',
        label: '現代極致乾爽派',
        desc: '主張全面發酵至乾型，讓品種與地塊特色透過純淨的酸度骨架呈現，更貼近國際市場對「餐搭友善白酒」的期待——這股風潮自 1990 年代末逐漸興起，尤以年輕世代酒莊與出口導向生產者為代表',
        color: '#2d6a4f',
      },
    ],
  },
  {
    type: 'content',
    icon: '⚖️',
    title: '兩派並存：多元性正是阿爾薩斯的魅力',
    html: `
      <p>如今這兩種哲學在阿爾薩斯並行不悖：部分歷史悠久的老牌酒莊仍堅持保留品種天然的飽滿感與微甜尾韻，視其為「風土誠實表現」的一部分；而許多新生代酒莊與追求國際市場認可的出口導向酒莊，則傾向將酒液發酵到底、追求乾爽俐落的現代風格。</p>
      <p style="margin-top:8px">2020 年甜度分級新制的最大意義，不在於「消滅」哪一派風格，而是讓兩種哲學都能<strong>誠實透明地標示自己的定位</strong>——品飲阿爾薩斯白酒時，養成先看甜度標示、再判斷品飲脈絡的習慣，是理解這個產區複雜性的關鍵一步。</p>
    `,
  },
  {
    type: 'quiz',
    question: '阿爾薩斯酒業公會於 2020 年推動的甜度分級新制，主要解決了什麼問題？',
    options: [
      '解決了葡萄園分級不明確的問題',
      '解決了酒標上長年未標示甜度資訊，導致消費者難以判斷「乾型」酒款實際殘糖高低的困惑',
      '取消了 VT 與 SGN 的甜度門檻',
      '規定所有阿爾薩斯白酒都必須是乾型',
    ],
    answer: 1,
    explanation: '阿爾薩斯長年存在「隱藏甜度」的爭議：許多 Pinot Gris、Gewurztraminer 即使未標示甜度也可能帶有明顯殘糖，讓消費者難以判斷。2020 年新制自 2021 年份起強制要求 AOC Alsace 與 AOC Alsace Grand Cru 標示 sec／demi-sec／moelleux／liquoreux 四級甜度資訊，讓兩種釀酒哲學都能誠實透明地標示定位。',
  },
  {
    type: 'summary',
    message: '傳統 vs 現代風格學習完成！',
    keyPoints: [
      '阿爾薩斯長年存在「隱藏甜度」爭議：一般 AOC Alsace 甜度無強制門檻，Pinot Gris／Gewurztraminer 常帶隱藏殘糖',
      '2020 年新制：2021 年份起 AOC Alsace 與 Grand Cru 強制標示 sec/demi-sec/moelleux/liquoreux 四級甜度',
      '傳統飽滿派：保留殘糖平衡濃郁酒體，視為風土自然表現',
      '現代乾爽派：全面發酵至乾，追求純淨酸度骨架與國際市場餐搭友善度',
      '兩派並存正是阿爾薩斯的魅力所在，品飲時應先留意甜度標示',
    ],
    nextLesson: '下一課：阿爾薩斯美食與餐酒搭配全圖',
  },
]

const AL4M3L1_slides = [
  {
    type: 'cover',
    icon: '🍽️',
    gradient: 'linear-gradient(135deg, #c9a227, #7c4a2d)',
    title: '阿爾薩斯美食與餐酒搭配全圖',
    subtitle: 'Level 4 · 第三課',
    points: [
      { icon: '🥂', label: '一場宴席，全酒種登場', text: '從開胃酒到餐後甜點，阿爾薩斯品種各司其職' },
      { icon: '🌡️', label: '精準的侍酒溫度', text: 'AOC Alsace 8-10°C，Crémant 5-7°C' },
      { icon: '🍶', label: '獨門搭配', text: 'Choucroute、鵝肝、Munster 乳酪的經典組合' },
    ],
  },
  {
    type: 'content',
    icon: '🥂',
    title: '從開胃到餐後：全酒種的宴席邏輯',
    html: `
      <p>阿爾薩斯品種豐富多元的特質，讓它得以在一場完整宴席中<strong>從頭到尾陪伴每一道菜</strong>——這是法國「最佳侍酒師」（Meilleur Sommelier du Monde 1989）<strong>Serge Dubs</strong> 特別推崇的阿爾薩斯特質：</p>
      <ul style="padding-left:20px;line-height:1.8;margin-top:6px">
        <li><strong>開胃酒（Apéritif）</strong>：Crémant d'Alsace、Muscat d'Alsace、Gewurztraminer</li>
        <li><strong>冷前菜</strong>：沙拉／冷肉／生蠔海鮮／生魚片壽司 → Sylvaner、Pinot Blanc、Riesling；辛香沙拉（墨西哥／摩洛哥／印度風味）→ Gewurztraminer；鵝肝 → Pinot Gris 或 Gewurztraminer（尤以 VT 版本最經典）</li>
        <li><strong>熱前菜</strong>：法式鹹派、餡餅、舒芙蕾 → Sylvaner、Pinot Blanc；蝸牛 → Sylvaner；蘆筍 → Muscat d'Alsace、Pinot Blanc</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🐟',
    title: '主餐搭配：魚鮮、白肉、紅肉與野味',
    html: `
      <ul style="padding-left:20px;line-height:1.8">
        <li><strong>魚類</strong>：香煎／燒烤 → Riesling；奶油白醬料理 → Riesling、Riesling VT、Pinot Gris；重口味／辛香料理 → Pinot Gris、Gewurztraminer</li>
        <li><strong>白肉與家禽</strong>：烤禽肉 → Riesling、Pinot Blanc、Pinot Noir；醬燒禽肉 → Riesling、Pinot Gris；豬肉／小牛肉烤肉 → Pinot Blanc、Pinot Gris；鴨肉 → Pinot Gris；異國風味料理（甜鹹交織、重香料）→ Gewurztraminer</li>
        <li><strong>紅肉</strong>：以紅釀 Pinot Noir 為主</li>
        <li><strong>野味</strong>：依料理手法選擇 Pinot Gris 或 Pinot Noir</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🧀',
    title: 'Choucroute、乳酪與甜點：阿爾薩斯的招牌收尾',
    html: `
      <p><strong>Choucroute（阿爾薩斯酸菜燉肉）</strong>是這個產區最具代表性的家常菜——以發酵酸菜燉煮香腸、燻肉，經典搭配是 <strong>Riesling</strong> 的清新高酸，或 <strong>Crémant d'Alsace</strong> 的氣泡帶來的清爽感。</p>
      <p style="margin-top:8px"><strong>乳酪</strong>：清爽年輕乳酪與山羊乳酪 → Pinot Blanc、Riesling；軟質洗浸乳酪（<strong>Munster</strong>、Pont l'Évêque、藍紋乳酪）→ Gewurztraminer 的濃郁香氣正好平衡強烈氣味；其餘乳酪也適合搭配紅釀 Pinot Noir。</p>
      <p style="margin-top:8px"><strong>甜點</strong>：糕點、塔類、奶油醬、慕斯 → Gewurztraminer（含 VT 版本）；<strong>為整餐畫下完美句點</strong>則首推 VT 或 SGN；社交場合或非正餐時刻，Crémant、Muscat、Gewurztraminer、VT、SGN 皆宜。</p>
    `,
  },
  {
    type: 'content',
    icon: '🌡️',
    title: '侍酒溫度與陳年須知',
    html: `
      <ul style="padding-left:20px;line-height:1.8">
        <li><strong>侍酒溫度</strong>：AOC Alsace 與 Alsace Grand Cru 建議 <strong>8-10°C</strong>；Crémant d'Alsace 建議 <strong>5-7°C</strong>——冰涼但不冰鎮，酒液過冷會掩蓋香氣層次</li>
        <li><strong>杯型</strong>：阿爾薩斯靜態酒適合<strong>長腳鬱金香型酒杯</strong>；Crémant d'Alsace 則適合細長水晶笛型杯，且杯中酒液不宜倒滿，以利香氣充分釋放</li>
        <li><strong>適飲期</strong>：一般阿爾薩斯酒款無需長年陳放，<strong>六個月至五年</strong>即可展現其豐富風味；但頂級年份、Grand Cru、VT、SGN 則值得更長期陳放，須存放於不過乾也不過濕的酒窖</li>
        <li><strong>儲存姿勢</strong>：一律<strong>平放</strong>，環境溫度介於 <strong>10-15°C</strong>；瓶底偶見的酒石結晶是天然現象，往往是酒質細緻的象徵</li>
      </ul>
    `,
  },
  {
    type: 'quiz',
    question: '阿爾薩斯經典家常菜 Choucroute（酸菜燉肉）最經典的搭配酒款是什麼？',
    options: [
      'Pinot Noir 紅酒',
      'Riesling 的清新高酸，或 Crémant d\'Alsace 氣泡帶來的清爽感',
      'Vendanges Tardives 貴腐甜酒',
      'Marc d\'Alsace 蒸餾酒',
    ],
    answer: 1,
    explanation: 'Choucroute（阿爾薩斯酸菜燉肉）以發酵酸菜燉煮香腸、燻肉為主，這種帶酸鹹口感的料理，最適合以 Riesling 的清新高酸來平衡，或以 Crémant d\'Alsace 的氣泡感帶來清爽的對比，是阿爾薩斯餐酒搭配中最經典的組合之一。',
  },
  {
    type: 'summary',
    message: '阿爾薩斯美食與餐酒搭配全圖學習完成！',
    keyPoints: [
      '開胃酒：Crémant、Muscat、Gewurztraminer；鵝肝：Pinot Gris 或 Gewurztraminer（VT 尤佳）',
      '魚鮮首選 Riesling；家禽 Riesling/Pinot Blanc/Pinot Noir；異國辛香料理 Gewurztraminer',
      'Choucroute 經典搭配 Riesling 或 Crémant；Munster 等重味乳酪搭 Gewurztraminer',
      '侍酒溫度：AOC Alsace/Grand Cru 8-10°C，Crémant 5-7°C；一般酒款適飲期 6 個月至 5 年，平放保存於 10-15°C',
    ],
    nextLesson: '下一課：觀光路線與葡萄酒文化',
  },
]

const AL4M3L2_slides = [
  {
    type: 'cover',
    icon: '🗺️',
    gradient: 'linear-gradient(135deg, #2d6a4f, #c9a227)',
    title: '觀光路線與葡萄酒文化',
    subtitle: 'Level 4 · 第四課',
    points: [
      { icon: '🛣️', label: 'Route des Vins d\'Alsace', text: '從 Marlenheim 到 Thann，貫穿整個產區的葡萄酒之路' },
      { icon: '🏘️', label: '半木造童話村莊', text: 'Riquewihr、Eguisheim、Kaysersberg 等經典酒鄉' },
      { icon: '🍇', label: '兩省分野', text: 'Bas-Rhin（北）與 Haut-Rhin（南）以 Colmar 為界' },
    ],
  },
  {
    type: 'content',
    icon: '🛣️',
    title: 'Route des Vins d\'Alsace：貫穿產區的葡萄酒之路',
    html: `
      <p>阿爾薩斯葡萄酒之路（Route des Vins d'Alsace）沿著孚日山脈東麓的葡萄園緩坡蜿蜒而行，<strong>北起 Marlenheim（Strasbourg 西側），南至 Thann（Mulhouse 西北側）</strong>，貫穿整個阿爾薩斯葡萄酒產區的狹長地帶，沿途串聯起上百個葡萄酒村莊。</p>
      <p style="margin-top:8px">整條路線大致依循葡萄園分布的地理邏輯，途經 <strong>Molsheim → Obernai → Barr → Ribeauvillé → Riquewihr → Colmar → Eguisheim → Guebwiller → Thann</strong> 等核心酒鄉，是全法國歷史最悠久、也最富盛名的葡萄酒觀光路線之一。</p>
    `,
  },
  {
    type: 'content',
    icon: '🗾',
    title: 'Bas-Rhin 與 Haut-Rhin：以 Colmar 為界的兩個世界',
    html: `
      <p>阿爾薩斯葡萄酒產區行政上橫跨兩個省份，以 <strong>Colmar</strong> 為分界點：</p>
      <ul style="padding-left:20px;line-height:1.8;margin-top:6px">
        <li><strong>Bas-Rhin（下萊茵省，北段）</strong>：涵蓋 Strasbourg、Molsheim、Obernai、Barr 一帶——孚日山脈在此段相對較低矮，給予葡萄園的雨影保護較弱，氣候略涼</li>
        <li><strong>Haut-Rhin（上萊茵省，南段）</strong>：涵蓋 Ribeauvillé、Riquewihr、Colmar、Eguisheim、Guebwiller 一帶——孚日山脈在此段最為高聳，雨影效應最強，是阿爾薩斯最核心精華的葡萄酒產區，51 個 Grand Cru 中絕大多數都座落於此</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🏘️',
    title: '半木造童話村莊：不只是產酒，更是活的文化資產',
    html: `
      <p>沿著葡萄酒之路，一系列保存完好的<strong>半木造建築（colombage）</strong>村莊構成了阿爾薩斯獨一無二的視覺印象——色彩繽紛的木構屋舍、鵝卵石街道、教堂尖塔，讓這些村莊本身就是活的文化資產：</p>
      <ul style="padding-left:20px;line-height:1.8;margin-top:6px">
        <li><strong>Riquewihr</strong>：被譽為「法國最美村莊」之一，城牆與木構老街幾乎完整保存自中世紀</li>
        <li><strong>Eguisheim</strong>：以同心圓狀街道聞名，是傳說中教皇 Léon IX 的出生地</li>
        <li><strong>Kaysersberg</strong>：史懷哲（Albert Schweitzer）的出生地，2017 年獲選「法國人最愛的村莊」</li>
        <li><strong>Ribeauvillé、Colmar</strong>：分別是葡萄酒之路南段的重要城鎮，Colmar 更有「小威尼斯」（Petite Venise）運河區美譽</li>
      </ul>
      <p style="margin-top:8px">許多村莊在耶誕季節會化身為知名的<strong>耶誕市集（Marché de Noël）</strong>，Colmar、Ribeauvillé、Riquewihr 都是阿爾薩斯耶誕市集文化的代表城鎮，讓葡萄酒觀光與節慶文化緊密交織。</p>
    `,
  },
  {
    type: 'quiz',
    question: 'Route des Vins d\'Alsace（阿爾薩斯葡萄酒之路）的地理範圍是？',
    options: [
      '僅限於 Colmar 市區周邊',
      '北起 Marlenheim，南至 Thann，貫穿整個阿爾薩斯狹長產區',
      '只涵蓋 Haut-Rhin 省份',
      '從德國邊境延伸至瑞士邊境',
    ],
    answer: 1,
    explanation: '阿爾薩斯葡萄酒之路北起 Strasbourg 西側的 Marlenheim，南至 Mulhouse 西北側的 Thann，沿著孚日山脈東麓蜿蜒而行，貫穿整個阿爾薩斯葡萄酒產區的狹長地帶，途經上百個葡萄酒村莊，是全法國歷史最悠久的葡萄酒觀光路線之一。',
  },
  {
    type: 'summary',
    message: '觀光路線與葡萄酒文化學習完成！',
    keyPoints: [
      'Route des Vins d\'Alsace：北起 Marlenheim，南至 Thann，貫穿整個產區',
      'Bas-Rhin（北，孚日山較低矮）與 Haut-Rhin（南，孚日山最高聳、Grand Cru 精華區）以 Colmar 為界',
      '半木造童話村莊：Riquewihr（法國最美村莊之一）、Eguisheim（教皇出生地）、Kaysersberg（史懷哲出生地）',
      '葡萄酒觀光與耶誕市集文化緊密交織，是阿爾薩斯重要的文化資產',
    ],
    nextLesson: '下一課：WSET SAT 架構品飲阿爾薩斯白酒',
  },
]

const AL4M4L1_slides = [
  {
    type: 'cover',
    icon: '🔬',
    gradient: 'linear-gradient(135deg, #40241a, #c9a227)',
    title: 'WSET SAT 架構品飲阿爾薩斯白酒',
    subtitle: 'Level 4 · 第五課',
    points: [
      { icon: '👁️', label: 'See 觀其色', text: '澄清度、濃淡度、顏色——傾斜 45 度角觀察' },
      { icon: '👃', label: 'Sniff 聞其香', text: '鮮純度、酒齡、香氣濃度與特質' },
      { icon: '👅', label: 'Sip 品其味', text: '甜度、酸度、酒體、餘味——系統化拆解每個維度' },
    ],
  },
  {
    type: 'content',
    icon: '👁️',
    title: 'See：觀其色——系統化外觀分析',
    html: `
      <p>將酒杯朝白色背景（如桌面、白紙）傾斜約 <strong>45 度角</strong>，從酒液中心（core）延伸到與玻璃交接的邊緣（rim）觀察，依序分析三個維度：</p>
      <ul style="padding-left:20px;line-height:1.8;margin-top:6px">
        <li><strong>清澄度（Clarity）</strong>：澄澈透亮，或帶混濁——混濁通常是釀造缺陷的警訊</li>
        <li><strong>濃淡度（Intensity）</strong>：淺、中等或深——需觀察邊緣的漸層變化幅度</li>
        <li><strong>顏色（Color）</strong>：阿爾薩斯白酒常見淺檸檬綠（年輕 Riesling）到金黃帶銅色調（成熟 Gewurztraminer、Pinot Gris）</li>
      </ul>
      <p style="margin-top:8px">⚠️ 重要心法：<strong>葡萄酒顏色的深淺，與其品質高低無直接關聯</strong>——顏色只是判斷品種、成熟度與陳年潛力的線索之一。</p>
    `,
  },
  {
    type: 'content',
    icon: '👃',
    title: 'Sniff：聞其香——喚醒嗅覺記憶庫',
    html: `
      <p>先輕輕搖晃杯中酒液，讓酒液與空氣充分接觸以釋放香氣分子；接著將杯口靠近鼻端，用鼻子深吸一口氣，再以嘴巴輕輕吐氣，重複一兩次以捕捉完整的香氣輪廓。系統化分析三個維度：</p>
      <ul style="padding-left:20px;line-height:1.8;margin-top:6px">
        <li><strong>鮮純度（Condition）</strong>：確認酒液無瑕疵（如軟木塞污染、氧化異味）</li>
        <li><strong>酒齡（Development）</strong>：年輕（一級果香主導）、成熟中，或完全發展（三級陳年香氣主導）</li>
        <li><strong>香氣濃度與特質（Intensity & Aroma Characteristics）</strong>：果香濃度高低，以及具體香氣類型——Riesling 常見萊姆、蜂蜜、板岩礦物；Gewurztraminer 強烈荔枝、玫瑰；Pinot Gris 清淡花香與檸檬柑橘</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '👅',
    title: 'Sip：品其味——七大結構維度全面拆解',
    html: `
      <p>讓少量酒液在口腔中停留數秒並輕輕咀嚼，同時用嘴輕吸空氣以放大風味感知，再由鼻腔吐氣、感受回香，最後可選擇吞下或吐入吐酒盂。系統化拆解以下維度：</p>
      <table style="width:100%;border-collapse:collapse;margin-top:6px;font-size:0.82rem">
        <tr style="background:#f3f0ea"><th style="padding:6px 8px;border:1px solid #ddd">維度</th><th style="padding:6px 8px;border:1px solid #ddd">阿爾薩斯白酒常見表現</th></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">甜度 Sweetness</td><td style="padding:6px 8px;border:1px solid #ddd">乾型為主流，Pinot Gris／Gewurztraminer 常見隱約殘糖</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">酸度 Acidity</td><td style="padding:6px 8px;border:1px solid #ddd">Riesling 高酸；Gewurztraminer／Pinot Gris 中等偏低</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">酒體 Body</td><td style="padding:6px 8px;border:1px solid #ddd">Sylvaner／Pinot Blanc 輕盈；Gewurztraminer／Pinot Gris 飽滿厚重</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">滋味濃度 Fruit Intensity</td><td style="padding:6px 8px;border:1px solid #ddd">依品種與產區位階（Grand Cru 通常更濃縮）而異</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">酒精濃度 Alcohol</td><td style="padding:6px 8px;border:1px solid #ddd">通常 12.5-14%，VT／SGN 更高</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">餘味 Length</td><td style="padding:6px 8px;border:1px solid #ddd">Grand Cru 與貴腐甜酒餘韻通常悠長</td></tr>
      </table>
      <p style="margin-top:8px">💡 氣泡酒（Crémant d'Alsace）額外評估：氣泡的<strong>細緻度</strong>與<strong>持續度</strong>——這兩項是判斷傳統法氣泡酒工藝水準的關鍵線索。</p>
    `,
  },
  {
    type: 'quiz',
    question: '系統化品飲中，觀察葡萄酒外觀顏色時最重要的心法是什麼？',
    options: [
      '顏色越深代表品質越好',
      '葡萄酒顏色的深淺，與其品質高低無直接關聯，只是判斷品種、成熟度與陳年潛力的線索之一',
      '顏色越淺代表品質越好',
      '顏色與品質完全無關，不需要觀察',
    ],
    answer: 1,
    explanation: '系統化品飲的重要心法之一：葡萄酒顏色的深淺與其品質高低沒有直接關聯——顏色只是幫助判斷品種特性、成熟度與陳年階段的線索，不能單憑顏色深淺論斷品質優劣，這是初學者最常見的品飲誤區。',
  },
  {
    type: 'summary',
    message: 'WSET SAT 架構品飲學習完成！',
    keyPoints: [
      'See：45 度角觀察 Clarity（清澄度）、Intensity（濃淡度）、Color（顏色）——顏色深淺與品質無關',
      'Sniff：Condition（鮮純度）、Development（酒齡）、Intensity & Aroma（香氣濃度與特質）',
      'Sip：七大結構維度——甜度、酸度、酒體、滋味濃度、酒精濃度、餘味，氣泡酒另評估氣泡細緻度與持續度',
      '系統化品飲能將主觀的「好喝／不好喝」轉化為可溝通、可比較的客觀描述語言',
    ],
    nextLesson: '下一課：盲飲判讀——品種與產區線索',
  },
]

const AL4M4L2_slides = [
  {
    type: 'cover',
    icon: '🎭',
    gradient: 'linear-gradient(135deg, #c9a227, #40241a)',
    title: '盲飲判讀：品種與產區線索',
    subtitle: 'Level 4 · 第六課',
    points: [
      { icon: '🔑', label: '香氣是第一把鑰匙', text: '四大貴族品種各有難以混淆的招牌香氣' },
      { icon: '⚗️', label: '結構是第二層驗證', text: '酸度、酒體、酒精度交叉比對縮小範圍' },
      { icon: '🗺️', label: '產區定位是最後一步', text: '綜合線索判斷是否為阿爾薩斯，以及可能的位階' },
    ],
  },
  {
    type: 'content',
    icon: '🔑',
    title: '第一步：用招牌香氣鎖定品種',
    html: `
      <p>阿爾薩斯四大貴族品種各有極具辨識度的香氣特徵，是盲飲判斷品種的第一把鑰匙：</p>
      <ul style="padding-left:20px;line-height:1.8;margin-top:6px">
        <li><strong>Gewurztraminer</strong>：強烈荔枝、玫瑰與香料調性，酒體飽滿帶油潤質地——是所有品種中最容易辨識、最不易混淆的一支</li>
        <li><strong>Riesling</strong>：萊姆、青蘋果、白花，成熟或陳年後浮現蜂蜜與板岩／燧石礦物調性，高酸是關鍵佐證</li>
        <li><strong>Pinot Gris</strong>：清淡花香與檸檬柑橘調性，酒體飽滿油潤但香氣相對內斂——若香氣不夠張揚卻酒體厚實，是重要線索</li>
        <li><strong>Muscat</strong>：奔放的葡萄本身香氣（新鮮麝香葡萄、荔枝），是唯一「聞起來像葡萄本身」的品種——若酒液乾型卻有濃郁葡萄香，幾乎可直接鎖定 Muscat</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '⚗️',
    title: '第二步：用結構線索交叉驗證',
    html: `
      <p>香氣判斷之後，須用結構線索（酸度、酒體、酒精度）交叉驗證，避免誤判：</p>
      <ul style="padding-left:20px;line-height:1.8;margin-top:6px">
        <li><strong>高酸＋中等酒體＋礦物調性</strong> → 高度指向 Riesling</li>
        <li><strong>中低酸＋飽滿油潤酒體＋強烈辛香</strong> → 高度指向 Gewurztraminer</li>
        <li><strong>中低酸＋飽滿酒體＋內斂花果香</strong> → 高度指向 Pinot Gris</li>
        <li><strong>低單寧（幾乎無單寧，因白酒不經浸皮）＋清爽輕盈酒體＋高酸</strong> → 指向 Sylvaner 或 Pinot Blanc（兩者需再依香氣濃淡與質地細緻度區分：Pinot Blanc 較圓潤，Sylvaner 較清瘦爽脆）</li>
      </ul>
    `,
  },
  {
    type: 'content',
    icon: '🗺️',
    title: '第三步：判斷是否為阿爾薩斯 vs 德國 Riesling',
    html: `
      <p>若香氣結構鎖定為 Riesling，盲飲的下一個關鍵問題往往是：<strong>這是阿爾薩斯，還是德國摩塞爾／萊茵高？</strong></p>
      <table style="width:100%;border-collapse:collapse;margin-top:6px;font-size:0.82rem">
        <tr style="background:#f3f0ea"><th style="padding:6px 8px;border:1px solid #ddd">線索</th><th style="padding:6px 8px;border:1px solid #ddd">傾向阿爾薩斯</th><th style="padding:6px 8px;border:1px solid #ddd">傾向德國</th></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">甜度</td><td style="padding:6px 8px;border:1px solid #ddd">乾型為主</td><td style="padding:6px 8px;border:1px solid #ddd">從乾到極甜皆常見</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">酒精度</td><td style="padding:6px 8px;border:1px solid #ddd">較高（12.5%+）</td><td style="padding:6px 8px;border:1px solid #ddd">較低（7.5-11%，尤其甜型）</td></tr>
        <tr><td style="padding:6px 8px;border:1px solid #ddd">酒體與果香</td><td style="padding:6px 8px;border:1px solid #ddd">較飽滿，成熟果香直接</td><td style="padding:6px 8px;border:1px solid #ddd">較輕盈，青綠果香與礦物感更突出</td></tr>
      </table>
      <p style="margin-top:8px">綜合香氣、結構與產區線索，逐步縮小範圍——這正是系統化品飲訓練的終極目標：<strong>把直覺轉化為可驗證、可溝通的邏輯推理過程</strong>。</p>
    `,
  },
  {
    type: 'quiz',
    question: '盲飲時，若一支酒呈乾型、卻帶有濃郁的新鮮麝香葡萄般香氣，最可能是哪個品種？',
    options: [
      'Riesling',
      'Muscat——是唯一「聞起來像葡萄本身」的品種，若酒液乾型卻有濃郁葡萄香，幾乎可直接鎖定',
      'Gewurztraminer',
      'Sylvaner',
    ],
    answer: 1,
    explanation: 'Muscat 是所有葡萄品種中極少數「聞起來就像新鮮葡萄本身」的品種，其奔放的麝香葡萄香氣極具辨識度。若盲飲中嚐到乾型酒款卻散發濃郁葡萄香氣，幾乎可以直接鎖定為 Muscat——這與 Gewurztraminer 的荔枝玫瑰調性、Riesling 的萊姆礦物調性都有明顯區別。',
  },
  {
    type: 'summary',
    icon: '🏆',
    message: '盲飲判讀學習完成！Level 4 即將完成，準備好迎接大師評量了嗎？',
    keyPoints: [
      '第一步：用招牌香氣鎖定品種——Gewurztraminer 荔枝玫瑰、Riesling 萊姆礦物、Pinot Gris 內斂花果、Muscat 葡萄本香',
      '第二步：用結構線索交叉驗證——酸度、酒體、單寧感受',
      '第三步：判斷阿爾薩斯 vs 德國 Riesling——甜度、酒精度、果香成熟度是關鍵區分點',
      '系統化品飲的終極目標：把直覺轉化為可驗證、可溝通的邏輯推理過程',
    ],
    nextLesson: '下一課：Level 4 大師評量',
  },
]

const AL4FinalExam_slides = [
  {
    type: 'cover',
    icon: '👑',
    gradient: 'linear-gradient(135deg, #40241a, #c9a227)',
    title: 'Level 4 大師評量',
    subtitle: '大師品鑑 · 最終測驗',
    points: [
      { icon: '📋', label: '10 題綜合測驗', text: '涵蓋比較品飲、餐酒搭配、文化路線與系統化品飲' },
      { icon: '✅', label: '通過標準', text: '答對 7 題以上即完成 Level 4，恭喜取得阿爾薩斯課程結業！' },
      { icon: '🎓', label: '全課程完結', text: '完成後即代表阿爾薩斯完整課程全部結業' },
    ],
  },
  {
    type: 'quiz',
    question: '【比較品飲】阿爾薩斯與德國葡萄酒分級系統，最根本的邏輯差異是？',
    options: [
      '阿爾薩斯以固定產區位階為核心；德國以採收時果實成熟糖度（Oechsle 度）為核心',
      '兩者的分級邏輯完全相同',
      '德國沒有任何分級制度',
      '阿爾薩斯只依酒精度分級',
    ],
    answer: 0,
    explanation: '阿爾薩斯以固定的產區位階（AOC→Grand Cru→VT/SGN）為核心；德國則以採收時果實的成熟糖度（Oechsle 度）決定 Kabinett 到 TBA 的位階，與葡萄園位置無直接關聯。',
  },
  {
    type: 'quiz',
    question: '【比較品飲】阿爾薩斯 Colmar 為何是全法國第二乾燥的城鎮？',
    options: [
      '因為地勢過低導致降雨稀少',
      '孚日山脈阻擋了由西而來的雨雲，形成雨影效應',
      '因為靠近地中海',
      '因為缺乏河流灌溉',
    ],
    answer: 1,
    explanation: '孚日山脈（Vosges）阻擋了由西而來的雨雲，形成顯著的雨影效應，使 Colmar 年降雨量不到 500mm，是全法國第二乾燥的城鎮，僅次於南部的 Perpignan。',
  },
  {
    type: 'quiz',
    question: '【風格演變】2020 年阿爾薩斯甜度分級新制，強制要求哪些酒款標示甜度？',
    options: [
      '僅 Crémant d\'Alsace',
      'AOC Alsace 與 AOC Alsace Grand Cru（自 2021 年份起）',
      '僅 VT 與 SGN',
      '所有阿爾薩斯酒款皆不強制標示',
    ],
    answer: 1,
    explanation: '自 2021 年份起，AOC Alsace 與 AOC Alsace Grand Cru 的酒標須強制標示官方甜度分級（sec/demi-sec/moelleux/liquoreux），解決了長年「隱藏甜度」造成消費者困惑的問題。',
  },
  {
    type: 'quiz',
    question: '【餐酒搭配】阿爾薩斯經典酸菜燉肉 Choucroute 最經典的搭配酒款是？',
    options: ['Gewurztraminer VT', 'Riesling 或 Crémant d\'Alsace', 'Pinot Noir', 'Marc d\'Alsace'],
    answer: 1,
    explanation: 'Choucroute 以發酵酸菜燉煮香腸、燻肉為主，最適合搭配 Riesling 的清新高酸，或 Crémant d\'Alsace 氣泡帶來的清爽感，是阿爾薩斯餐酒搭配中最經典的組合之一。',
  },
  {
    type: 'quiz',
    question: '【餐酒搭配】Munster 等軟質洗浸重味乳酪，最適合搭配哪個品種？',
    options: ['Sylvaner', 'Gewurztraminer', 'Pinot Blanc', 'Muscat'],
    answer: 1,
    explanation: 'Munster、Pont l\'Évêque、藍紋乳酪等軟質洗浸或風味強烈的乳酪，最適合搭配 Gewurztraminer 的濃郁香氣，其飽滿的辛香與花果調性能與乳酪的強烈氣味形成平衡。',
  },
  {
    type: 'quiz',
    question: '【侍酒須知】AOC Alsace 與 Alsace Grand Cru 的建議侍酒溫度是？',
    options: ['5-7°C', '8-10°C', '12-14°C', '室溫即可'],
    answer: 1,
    explanation: 'AOC Alsace 與 Alsace Grand Cru 建議侍酒溫度為 8-10°C；Crémant d\'Alsace 則建議 5-7°C。冰涼但不冰鎮，過冷會掩蓋香氣層次。',
  },
  {
    type: 'quiz',
    question: '【文化路線】Route des Vins d\'Alsace（阿爾薩斯葡萄酒之路）的地理範圍是？',
    options: [
      '僅涵蓋 Colmar 市區',
      '北起 Marlenheim，南至 Thann，貫穿整個阿爾薩斯狹長產區',
      '只涵蓋 Bas-Rhin 省份',
      '從史特拉斯堡延伸至巴黎',
    ],
    answer: 1,
    explanation: '阿爾薩斯葡萄酒之路北起 Marlenheim，南至 Thann，沿著孚日山脈東麓蜿蜒而行，貫穿整個阿爾薩斯葡萄酒產區的狹長地帶，是全法國歷史最悠久的葡萄酒觀光路線之一。',
  },
  {
    type: 'quiz',
    question: '【系統化品飲】觀察葡萄酒外觀顏色時最重要的心法是？',
    options: [
      '顏色越深代表品質越好',
      '顏色深淺與品質高低無直接關聯，只是判斷品種、成熟度與陳年潛力的線索',
      '顏色越淺代表品質越好',
      '顏色與品飲判斷完全無關',
    ],
    answer: 1,
    explanation: '葡萄酒顏色的深淺與其品質高低沒有直接關聯，只是幫助判斷品種特性、成熟度與陳年階段的線索之一，不能單憑顏色深淺論斷品質優劣。',
  },
  {
    type: 'quiz',
    question: '【盲飲判讀】若一支酒呈乾型、卻帶有濃郁新鮮麝香葡萄香氣，最可能是哪個品種？',
    options: ['Riesling', 'Muscat', 'Gewurztraminer', 'Pinot Blanc'],
    answer: 1,
    explanation: 'Muscat 是唯一「聞起來像葡萄本身」的品種，其奔放的麝香葡萄香氣極具辨識度，若乾型酒款卻散發濃郁葡萄香，幾乎可直接鎖定為 Muscat。',
  },
  {
    type: 'quiz',
    question: '【盲飲判讀】盲飲判斷阿爾薩斯 vs 德國 Riesling 時，哪個線索最具參考價值？',
    options: [
      '瓶身顏色',
      '甜度傾向（阿爾薩斯多乾型）與酒精度（阿爾薩斯通常較高）',
      '軟木塞材質',
      '瓶子重量',
    ],
    answer: 1,
    explanation: '阿爾薩斯 Riesling 多為乾型且酒精度較高（12.5%+）、果香較成熟飽滿；德國 Riesling 甜度光譜寬廣、酒精度通常較低（尤其甜型酒款）、青綠果香與礦物感更突出——這些是盲飲時區分兩地 Riesling 最實用的線索。',
  },
  {
    type: 'summary',
    icon: '🏆',
    message: '🎉🎉 恭喜完成 Level 4 大師評量！你已經走完阿爾薩斯葡萄酒的完整學習旅程——從基礎風土、51 個 Grand Cru 地質分類、釀造工藝與特殊酒款，到大師級的比較品飲與系統化盲飲！',
    keyPoints: [
      '✅ 比較品飲：Alsace vs 德國萊茵／摩塞爾——氣候、土壤、分級邏輯、風格全面對照',
      '✅ 風格演變：傳統飽滿殘糖派 vs 現代乾爽派，2020 年甜度分級新制',
      '✅ 餐酒搭配：從開胃酒到餐後甜點的完整宴席邏輯，Choucroute、鵝肝、Munster 經典組合',
      '✅ 文化路線：Route des Vins d\'Alsace、半木造童話村莊、Bas-Rhin/Haut-Rhin 兩省分野',
      '✅ 系統化品飲：WSET SAT See-Sniff-Sip 架構，七大結構維度全面拆解',
      '✅ 盲飲判讀：香氣鎖定品種、結構交叉驗證、產區線索綜合判斷',
    ],
    nextLesson: '阿爾薩斯課程全部完成！感謝你的學習旅程，期待未來為你補上探索地圖與 Grand Cru geojson 互動功能！',
  },
]

// ───────────────────────────────────────────────────────────────
//  Slide Map
// ───────────────────────────────────────────────────────────────

const SLIDE_MAP = {
  // ── Level 1（完整 16 課）────────────────────────────────────────
  // 第一章：阿爾薩斯產區概覽（4 課）
  AL1M1L1: AL1M1L1_slides,   // 概覽與特色
  AL1M1L2: AL1M1L2_slides,   // 地理位置與行政區劃
  AL1M1L3: AL1M1L3_slides,   // 歷史
  AL1M1L4: AL1M1L4_slides,   // 氣候
  // 第二章：風土基礎（3 課）
  AL1M2L1: AL1M2L1_slides,   // 三大地形
  AL1M2L2: AL1M2L2_slides,   // 土壤大觀
  AL1M2L3: AL1M2L3_slides,   // 為什麼幾乎只產白酒
  // 第三章：核心葡萄品種（4 課）
  AL1M3L1: AL1M3L1_slides,   // Riesling
  AL1M3L2: AL1M3L2_slides,   // Gewurztraminer
  AL1M3L3: AL1M3L3_slides,   // Pinot Gris 與 Muscat
  AL1M3L4: AL1M3L4_slides,   // Pinot Blanc・Sylvaner・Pinot Noir 與其他
  // 第四章：AOC 分級制度（4 課）
  AL1M4L1: AL1M4L1_slides,   // AOC 三層架構
  AL1M4L2: AL1M4L2_slides,   // 酒標規則
  AL1M4L3: AL1M4L3_slides,   // 產量與釀造規定
  AL1M4L4: AL1M4L4_slides,   // VT 與 SGN 入門
  // 第五章：綜合評量
  AL1FinalExam: AL1FinalExam_slides,

  // ── Level 2（完整 16 課）：Grand Cru 深度探索 ──────────────────
  // 第一章：Grand Cru 制度總論（2 課）
  AL2M1L1: AL2M1L1_slides,   // 分級簡史與規範總則
  AL2M1L2: AL2M1L2_slides,   // Sittler 地質分類：十大地質族群
  // 第二章：片岩・火山岩與砂岩（3 課）
  AL2M2L1: AL2M2L1_slides,   // Kastelberg
  AL2M2L2: AL2M2L2_slides,   // Rangen 與 Muenchberg
  AL2M2L3: AL2M2L3_slides,   // Wiebelsberg・Kessler・Kitterlé
  // 第三章：花崗岩產區（2 課）
  AL2M3L1: AL2M3L1_slides,   // Schlossberg・Sommerberg・Wineck-Schlossberg
  AL2M3L2: AL2M3L2_slides,   // Frankstein・Brand・Winzenberg 等
  // 第四章：石灰岩與灰砂岩（2 課）
  AL2M4L1: AL2M4L1_slides,   // 石灰岩四傑
  AL2M4L2: AL2M4L2_slides,   // 灰砂岩三傑
  // 第五章：泥灰岩系（4 課）
  AL2M5L1: AL2M5L1_slides,   // 泥灰砂岩七傑
  AL2M5L2: AL2M5L2_slides,   // 泥灰石灰砂岩：Altenberg de Bergheim
  AL2M5L3: AL2M5L3_slides,   // 泥灰石灰岩群（上）
  AL2M5L4: AL2M5L4_slides,   // 泥灰石灰岩群（下）與黏土泥灰岩
  // 第六章：特殊產區與知名 Clos（2 課）
  AL2M6L1: AL2M6L1_slides,   // Cléebourg 與 Klevener de Heiligenstein
  AL2M6L2: AL2M6L2_slides,   // 知名 Clos 巡禮
  // 第七章：綜合評量
  AL2FinalExam: AL2FinalExam_slides,

  // ─── Level 3：釀造工藝與特殊酒款 ───
  // 第一章：葡萄園栽培實務（2 課）
  AL3M1L1: AL3M1L1_slides,   // 年度栽培週期與 Guyot 修剪
  AL3M1L2: AL3M1L2_slides,   // 病蟲害防治與永續栽培
  // 第二章：Crémant d'Alsace（2 課）
  AL3M2L1: AL3M2L1_slides,   // 傳統法氣泡酒工藝
  AL3M2L2: AL3M2L2_slides,   // Crémant 品種特性與市場地位
  // 第三章：VT 與 SGN 貴腐甜酒（2 課）
  AL3M3L1: AL3M3L1_slides,   // 貴腐與晚摘：VT 與 SGN 的嚴格規範
  AL3M3L2: AL3M3L2_slides,   // 四大品種的貴腐甜酒風格
  // 第四章：調配酒藝術（2 課）
  AL3M4L1: AL3M4L1_slides,   // Edelzwicker vs Gentil：兩種調配哲學
  AL3M4L2: AL3M4L2_slides,   // Altenberg de Bergheim 與 Kaefferkopf 混釀 Grand Cru
  // 第五章：蒸餾酒與其他特產（2 課）
  AL3M5L1: AL3M5L1_slides,   // Marc d'Alsace Gewurztraminer
  AL3M5L2: AL3M5L2_slides,   // Mirabelle de Lorraine 洛林蜜李白蘭地
  // 第六章：綜合評量
  AL3FinalExam: AL3FinalExam_slides,

  // ─── Level 4：大師品鑑 ───
  // 第一章：比較品飲（2 課）
  AL4M2L1: AL4M2L1_slides,   // Alsace vs 德國萊茵／摩塞爾比較品飲
  AL4M2L2: AL4M2L2_slides,   // 傳統 vs 現代風格：乾型化浪潮
  // 第二章：餐酒搭配與文化（2 課）
  AL4M3L1: AL4M3L1_slides,   // 阿爾薩斯美食與餐酒搭配全圖
  AL4M3L2: AL4M3L2_slides,   // 觀光路線與葡萄酒文化
  // 第三章：系統化品飲（2 課）
  AL4M4L1: AL4M4L1_slides,   // WSET SAT 架構品飲阿爾薩斯白酒
  AL4M4L2: AL4M4L2_slides,   // 盲飲判讀：品種與產區線索
  // 第四章：綜合評量
  AL4FinalExam: AL4FinalExam_slides,
}

// ───────────────────────────────────────────────────────────────
//  佔位投影片（尚未製作的課程）
// ───────────────────────────────────────────────────────────────

function placeholderSlides(lessonId) {
  return [
    {
      type: 'cover',
      icon: '🚧',
      gradient: 'linear-gradient(135deg, #6b7280, #9ca3af)',
      title: '課程內容製作中',
      subtitle: lessonId,
      points: [
        { icon: '📝', label: '敬請期待', text: '這堂課的內容正在製作中' },
      ],
    },
    {
      type: 'summary',
      message: '這堂課的內容即將推出，感謝耐心等候！',
      keyPoints: [],
    },
  ]
}

export function getAlsaceLessonSlides(lessonId) {
  return SLIDE_MAP[lessonId] || placeholderSlides(lessonId)
}
