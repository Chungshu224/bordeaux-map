// 全球氣泡酒專論 Level 1 課文（階段 B）
// 區塊格式沿用 SlideBlocks：info / misconception / compare(headers, rows) / steps / expand。
// 數字與年代依 SPARKLING_FACT_CHECK.md：已證實者直接寫；僅有二手來源者標「（二手）」；未證實者標 ⚠，不進入測驗。

const info = (title, content) => ({ type: 'info', title, content })
const mis = (content) => ({ type: 'info', title: '常見誤解', content })
const compare = (headers, rows) => ({ type: 'compare', props: { headers, rows } })
// 標題為純數字的步驟只顯示內文（避免出現「1：」）
const steps = (title, list) => ({ type: 'steps', title, steps: list.map(s => (/^\d+$/.test(s.title || '') ? { text: s.text } : s)) })
const expand = (label, content) => ({ type: 'expand', label, content })

export const LEVEL1_CONTENT = {
  // ───────────────────────── sp-l1-1 ─────────────────────────
  'sp-l1-1': {
    blocks: [
      info('一句話', '氣泡酒就是含有溶解二氧化碳（CO₂）、開瓶時會冒泡的酒。<b>氣泡在哪裡、怎麼產生</b>，決定了釀法；釀法又大致決定成本與價位帶。'),
      compare(
        ['釀法', '氣泡怎麼來', '成本與價位傾向', '代表例子'],
        [
          ['傳統法', '基酒裝瓶後在<b>同一支瓶內</b>二次發酵，再陳放酒渣', '最費時費工，價位傾向較高', 'Champagne、Cava、Crémant、Franciacorta'],
          ['槽式法', '在<b>密閉槽</b>內二次發酵，再裝瓶', '省時、可大量生產，價位傾向較低', 'Prosecco、多數 Lambrusco'],
          ['轉移法', '瓶內發酵，之後<b>倒入槽內過濾</b>再裝瓶', '介於兩者之間', '少數產區與酒廠使用'],
          ['Asti 法', '槽內<b>單次發酵</b>，中途降溫中止，保留甜味', '價位傾向較低', 'Asti、Moscato d\'Asti'],
          ['祖傳法', '<b>單次發酵</b>在瓶中完成，常不除渣', '不一定', 'Pét-Nat、Clairette de Die（Méthode Dioise Ancestrale）'],
          ['氣體注入', '直接把 CO₂ 打進靜態酒', '最低', '平價款']
        ]
      ),
      info('價位只是傾向', '釀法對應價位是「趨勢」而不是規則：槽式法的 Prosecco Superiore Cartizze 可以很貴，傳統法的平價 Cava 也很便宜。考試要會用成本（時間、人工、設備）去解釋價位，而不是死背「某法一定貴」。'),
      mis('「Dom Pérignon 發明了香檳／氣泡酒。」這是流傳很廣的神話。氣泡酒的二次發酵在他之前就有人觀察與釀造，他在調配等技術上的貢獻比較可信。'),
      expand('歷史時間軸（⚠ 年代逐項待查）', '以下年代尚未取得可靠來源，<b>不要背、也不進測驗</b>：<br>• 英國人 Christopher Merret 1662 年的二次發酵紀錄（⚠）<br>• Limoux 修道院 1531 年的傳說（⚠）<br>• Veuve Clicquot 發展轉瓶（remuage）的年代（⚠）<br>• 19 世紀的工業化與大量生產（概念正確、細節待查）'),
      info('到地圖上看看', '回到課程首頁開啟「氣泡酒地圖」，用上方的釀法色塊篩選，感受一種釀法在全球的分布。')
    ],
    terms: [
      { term: '二次發酵 (secondary fermentation)', def: '基酒加糖與酵母後再次發酵，產生酒精與 CO₂，CO₂ 在密閉容器中溶入酒內。' },
      { term: '傳統法 (traditional method)', def: '瓶內二次發酵並經酒渣陳年；標籤用語因產區而異，如 Méthode Traditionnelle、Metodo Classico、Método Tradicional、Cap Classique。' },
      { term: '槽式法 (tank / Charmat / Martinotti)', def: '在密閉耐壓槽內做二次發酵。' }
    ],
    quiz: [
      { q: '決定氣泡酒「釀法」分類的最關鍵問題是什麼？', options: ['使用什麼葡萄品種', '氣泡在哪裡、用什麼方式產生', '酒標上有沒有年份', '產區的緯度'], answer: 1, explain: '釀法的分類看氣泡的來源：瓶內二次發酵、槽內二次發酵、單次發酵、或直接打氣。' },
      { q: '下列哪一種做法的成本通常最低？', options: ['傳統法', '轉移法', '氣體注入', '祖傳法'], answer: 2, explain: '氣體注入是把 CO₂ 直接灌進靜態酒，不需要二次發酵與陳年，成本最低；氣泡也通常較粗、消散較快。' }
    ]
  },

  // ───────────────────────── sp-l1-2 ─────────────────────────
  'sp-l1-2': {
    blocks: [
      steps('二次發酵：氣泡怎麼來', [
        { title: '1', text: '準備一支<b>基酒</b>（靜態、高酸、酒精偏低），加入糖與酵母。' },
        { title: '2', text: '在<b>密閉</b>容器（瓶或槽）中發酵：糖 → 酒精 ＋ CO₂（＋酵母沉澱）。' },
        { title: '3', text: 'CO₂ 無處可去，<b>溶入酒中</b>；糖越多、CO₂ 越多、壓力越高。' },
        { title: '4', text: '開瓶時壓力下降，CO₂ 釋出成氣泡。' }
      ]),
      info('酒精也會上升', '二次發酵會讓酒精度再增加一點（一般說法約 1% 多，⚠ 數值待查），所以基酒需要刻意偏低酒精。'),
      info('糖量與壓力', '教科書常見的近似是每約 4 g/L 的糖產生約 1 atm 的壓力（⚠ 近似值，非法規數字），因此傳統法要產生約 5–6 atm 需要幾十 g/L 的糖。'),
      compare(
        ['類型', '瓶內壓力', '來源'],
        [
          ['傳統法氣泡酒', '一般約 5–6 atm', 'Franciacorta 官方說法；其他產區 ⚠ 未逐一核對'],
          ['Prosecco Spumante', '高於 3 atm', '二手資料'],
          ['Prosecco Frizzante', '約 1–2.5 atm', '二手資料'],
          ['Moscato d\'Asti', '不高於 2.5 bar', '二手資料（引自 disciplinare）']
        ]
      ),
      info('氣泡細緻度 (mousse)', '品飲時的氣泡質感：WSET 的品飲描述用語為 delicate（細緻）、creamy（綿密）、aggressive（粗猛）。一般認為，低溫緩慢發酵、與酒渣接觸時間長，氣泡傾向更細緻綿密；氣體注入的氣泡傾向粗而短命。'),
      compare(
        ['甜度級別（EU 用語）', '殘糖 (g/L)', '說明'],
        [
          ['Brut Nature / Pas dosé', '低於約 3', '⚠ 邊界未取得官方來源，勿背'],
          ['Extra Brut', '約 0–6', '⚠ 同上'],
          ['Brut', '低於 12', '⚠ 同上（但 Extra Dry 的下限 12 已證實）'],
          ['Extra Dry', '12–17', '✅ 英國保留版 EU 2019/33 附件 III A'],
          ['Dry（法文 Sec）', '17–32', '✅ 同上'],
          ['Medium Dry（法文 Demi-sec）', '32–50', '✅ 同上'],
          ['Sweet（法文 Doux）', '高於 50', '✅ 同上']
        ]
      ),
      mis('「Extra Dry 比 Dry（Sec）更甜。」剛好相反：Extra Dry（12–17 g/L）<b>比 Dry/Sec（17–32 g/L）更乾</b>。氣泡酒的甜度用語和一般直覺是反的，也是常見的陷阱題。'),
      info('甜度的感受', '高酸度會讓同樣的殘糖喝起來更乾；dosage 也常用來平衡酸度。同樣是 Brut，酸度高的酒喝起來比酸度低的更緊。')
    ],
    terms: [
      { term: '殘糖 (residual sugar)', def: '發酵後或加 dosage 後留在酒中的糖，單位 g/L。' },
      { term: 'mousse', def: '氣泡的質感與持久度。' },
      { term: 'Brut Nature / Pas dosé / Dosage zéro', def: '不加 dosage 或幾乎不加糖的最乾風格。' }
    ],
    quiz: [
      { q: '在其他條件相同下，二次發酵時加入的糖越多，會發生什麼事？', options: ['瓶內壓力越高', '壓力越低', '酒精度下降', '完全沒有影響'], answer: 0, explain: '糖被酵母轉成酒精與 CO₂，CO₂ 在密閉容器中溶入酒內，糖越多壓力越高。' },
      { q: '依 EU 用語，下列哪一項說法正確？', options: ['Extra Dry 比 Dry（Sec）更甜', 'Extra Dry（12–17 g/L）比 Dry（17–32 g/L）更乾', 'Extra Dry 與 Brut Nature 同義', 'Dry 的殘糖高於 Sweet'], answer: 1, explain: 'Extra Dry 的殘糖範圍低於 Dry/Sec，所以更乾；這是氣泡酒甜度用語最常見的陷阱。' }
    ]
  },

  // ───────────────────────── sp-l1-3 ─────────────────────────
  'sp-l1-3': {
    blocks: [
      info('基酒要什麼', '氣泡酒的基酒（base wine）單獨喝起來通常很瘦、很酸、香氣不張揚，這是<b>刻意的</b>。理想基酒：<br>• <b>高酸度</b>：二次發酵與 dosage 之後仍保持清爽<br>• <b>酒精偏低</b>（常見說法約 10–11%，⚠ 數值待查）：二次發酵還會加一點酒精<br>• <b>風味細緻、不張揚</b>：留空間給酒渣風味或果香本身'),
      info('為什麼偏好冷涼氣候', '涼爽氣候讓葡萄慢熟，糖分累積慢、酸度保留得多，酒精自然偏低，剛好符合基酒需求。香檳、英國、塔斯馬尼亞、Trentodoc 的高海拔都是這個邏輯。'),
      mis('「基酒越好喝，氣泡酒越好。」基酒單喝很酸、很瘦才是正常；好喝的靜態酒不一定是好的基酒。'),
      compare(
        ['產區', '主要品種', '備註'],
        [
          ['Champagne', 'Chardonnay、Pinot Noir、Meunier', '另有四種稀有品種，合計約 0.3%（二手）'],
          ['Prosecco', 'Glera', '至少 85%（Prosecco DOC）'],
          ['Cava', 'Macabeo、Xarel·lo、Parellada', '另可用 Chardonnay、Subirat Parent 與紅品種（二手）'],
          ['Franciacorta', 'Chardonnay、Pinot Nero', 'Pinot Bianco 至多 50%；Erbamat 至多 10%，Satèn 不可用'],
          ['Asti', 'Moscato Bianco', '至少 97%（非 100%）'],
          ['Limoux', 'Mauzac、Chardonnay、Chenin Blanc', '各 appellation 比例不同（二手）'],
          ['英國', 'Chardonnay、Pinot Noir、Meunier', '氣泡 PDO 限六個品種（二手）'],
          ['南非 Cap Classique', '無法定品種限制', '多用 Chardonnay、Pinot Noir、Meunier；1971 年 Simonsig 首支以 Chenin 為基酒']
        ]
      ),
      steps('採收與壓榨的取捨', [
        { title: '採收時機', text: '為了保留酸度會<b>偏早採收</b>，代價是香氣與成熟度較低。' },
        { title: '手採或機採', text: '傳統法常用整串壓榨，需要完整果串，因此偏好手採（細節依法規，⚠ 各產區待查）。' },
        { title: '整串壓榨', text: '輕柔壓榨可從紅皮品種（如 Pinot Noir）榨出幾乎無色的汁，用來做白中白／黑中白風格。' },
        { title: '產量', text: '產量過高會稀釋風味；是否限制產量依產區法規而定（香檳逐年訂定，⚠ 數字見 Level 2）。' }
      ]),
      info('氣候變遷', '近年許多產區的趨勢是更早採收、糖度升高、酸度下降，這讓冷涼產區（如英國）受惠，也讓傳統產區要調整栽培與調配策略。這部分是趨勢說明，具體數據進入 Level 3 再談。')
    ],
    terms: [
      { term: '基酒 (base wine / vin clair)', def: '尚未二次發酵的靜態酒，高酸、低酒精。' },
      { term: '黑中白 (blanc de noirs)', def: '用紅皮品種釀成的白色氣泡酒。' },
      { term: '白中白 (blanc de blancs)', def: '只用白葡萄品種（如 Chardonnay）釀成。' }
    ],
    quiz: [
      { q: '氣泡酒為什麼偏好冷涼氣候的葡萄？', options: ['因為涼爽氣候葡萄糖度最高', '涼爽氣候保留較高酸度與較低酒精', '因為涼爽氣候不需要二次發酵', '因為只有涼爽氣候才能種白葡萄'], answer: 1, explain: '涼爽氣候讓葡萄慢熟，酸度保留、糖度與酒精較低，符合基酒的需求。' },
      { q: 'Prosecco DOC 的主要品種及比例規定是？', options: ['Chardonnay 至少 85%', 'Glera 至少 85%', 'Moscato Bianco 至少 97%', 'Macabeo 至少 85%'], answer: 1, explain: 'Prosecco DOC 的主要品種是 Glera，至少 85%。' }
    ]
  },

  // ───────────────────────── sp-l1-4 ─────────────────────────
  'sp-l1-4': {
    blocks: [
      steps('傳統法流程', [
        { title: '壓榨', text: '輕柔壓榨取汁，避免苦澀與色素。' },
        { title: '一次發酵', text: '先做出靜態基酒（可用不鏽鋼槽或橡木桶）。' },
        { title: '調配 (assemblage)', text: '混合不同品種、地塊、年份（NV 常含儲備酒），追求風格一致。' },
        { title: '裝瓶 (tirage)', text: '基酒加入含糖與酵母的 <b>liqueur de tirage</b>，裝入瓶內並以皇冠蓋封住。' },
        { title: '二次發酵', text: '酵母在瓶內發酵，產生酒精、CO₂ 與酒渣。' },
        { title: '酒渣陳年', text: '瓶子橫放，酒與死亡的酵母（酒渣）接觸，發生<b>自溶 (autolysis)</b>。' },
        { title: '轉瓶 (remuage)', text: '逐漸把瓶子倒置、轉動，使酒渣集中在瓶頸；現代常用機械轉瓶。' },
        { title: '除渣 (dégorgement)', text: '冷凍瓶頸，打開瓶蓋讓酒渣帶著冰塞噴出。' },
        { title: '加糖液 (dosage)', text: '補回損失的酒，並加入 <b>liqueur d\'expédition</b>（酒＋糖）決定最終甜度。' },
        { title: '封瓶', text: '裝上軟木塞與鐵絲籠 (muselet)，再靜置一段時間。' }
      ]),
      info('自溶風味', '死亡的酵母細胞分解後，釋出胺基酸與甘露糖蛋白，帶來<b>麵包、餅乾、烤吐司、奶油</b>等風味，並讓氣泡更綿密。酒渣陳年越久，這類風味傾向越明顯。'),
      compare(
        ['步驟', '對風格的影響'],
        [
          ['調配', '決定一致性、複雜度與酸度結構'],
          ['裝瓶糖量', '決定壓力與氣泡'],
          ['酒渣陳年時間', '決定自溶風味的強弱與氣泡細緻度'],
          ['除渣與 dosage', '決定甜度與最終風格；不加糖即 Brut Nature'],
          ['除渣後靜置', '讓 dosage 與酒融合']
        ]
      ),
      info('最低陳年的例子', '香檳 NV 至少 15 個月、Vintage 至少 36 個月（Comité Champagne 官方說明）。其他產區陳年規定見 Level 2；歐盟層級最低陳年（常見說法 9 個月）僅有二手來源，⚠ 暫不進測驗。'),
      mis('「酒渣陳年越久一定越好。」時間越久，自溶風味傾向越濃，但不等於品質越高；果香、酸度與平衡一樣重要，過度陳年反而可能蓋過果味。'),
      info('標籤用語', '看到 Méthode Traditionnelle、Metodo Classico、Método Tradicional、Traditional Method，通常表示傳統法；南非有法定名稱 Cap Classique。<b>Méthode Champenoise</b> 在 EU 內只留給香檳，其他產區改用上述用語。'),
      info('硬數字的處理', '裝瓶糖量、轉瓶天數等細節各家差異大，本課只講趨勢，不當考點。')
    ],
    terms: [
      { term: 'tirage', def: '裝瓶並加入糖與酵母，開始二次發酵。' },
      { term: '自溶 (autolysis)', def: '死亡酵母分解，釋出風味物質的過程。' },
      { term: '除渣 (dégorgement)', def: '移除瓶頸酒渣。' },
      { term: 'dosage', def: '除渣後補入的酒與糖液，決定甜度。' }
    ],
    quiz: [
      { q: '傳統法中，最終甜度主要由哪一步決定？', options: ['壓榨', '裝瓶 (tirage)', '除渣後的 dosage', '轉瓶'], answer: 2, explain: 'dosage 在除渣後補入 liqueur d\'expédition，決定最終的殘糖與甜度。' },
      { q: '酒渣陳年時，死亡酵母分解帶來的風味最像下列何者？', options: ['青草與柑橘皮', '麵包、餅乾、烤吐司', '黑醋栗與雪松', '蜂蜜與杏桃乾'], answer: 1, explain: '自溶 (autolysis) 帶來麵包、餅乾、烤吐司、奶油等風味。' }
    ]
  },

  // ───────────────────────── sp-l1-5 ─────────────────────────
  'sp-l1-5': {
    blocks: [
      info('為什麼要有不同釀法', '傳統法風味複雜、成本高；市場也需要更便宜、更果香、更年輕的氣泡酒，於是有了槽式法等做法。選釀法其實是在<b>風格、成本、產量</b>之間取捨。'),
      steps('槽式法 (Charmat / Martinotti)', [
        { title: '1', text: '基酒、糖與酵母放進<b>密閉耐壓槽</b>二次發酵。' },
        { title: '2', text: '達到目標壓力後<b>降溫</b>，並在壓力下過濾去除酵母。' },
        { title: '3', text: '加 dosage（需要時）後在壓力下<b>裝瓶</b>。' },
        { title: '特色', text: '時間短、量大、成本低，保留品種的新鮮果香與花香；沒有自溶風味。' }
      ]),
      steps('轉移法 (transfer method)', [
        { title: '1', text: '和傳統法一樣在<b>瓶內</b>二次發酵並陳年酒渣。' },
        { title: '2', text: '之後把整批酒<b>倒入槽內</b>，在壓力下過濾去除酒渣。' },
        { title: '3', text: '再裝入新瓶。省去轉瓶與逐瓶除渣，方便裝大瓶或小瓶。' },
        { title: '標籤', text: '常見標示是 bottle fermented 之類，而非 traditional method。' }
      ]),
      steps('祖傳法與 Pétillant Naturel', [
        { title: '1', text: '基酒在<b>尚未發酵完</b>時裝瓶，由瓶內<b>單次發酵</b>完成。' },
        { title: '2', text: '常不除渣，因此可能混濁；用皇冠蓋封瓶。' },
        { title: '例子', text: 'Pét-Nat 風格；Clairette de Die 的 Méthode Dioise Ancestrale（Muscat à petits grains 至少 75%，殘糖至少 35 g/L，二手）。Prosecco 的 Col Fondo 地位 ⚠ 待查。' }
      ]),
      steps('Asti 法', [
        { title: '1', text: '甜的 Moscato 汁在槽內<b>單次發酵</b>。' },
        { title: '2', text: '達到目標壓力與酒精後<b>降溫中止</b>，保留殘糖。' },
        { title: '3', text: '過濾後裝瓶：低酒精、甜、香氣鮮明。' }
      ]),
      steps('氣體注入 (carbonation)', [
        { title: '1', text: '把 CO₂ 直接灌入靜態酒。' },
        { title: '2', text: '氣泡通常較粗、消散較快，價位最低。' }
      ]),
      compare(
        ['釀法', '風味傾向', '成本', '標籤用語（例）'],
        [
          ['傳統法', '自溶、複雜、綿密', '高', 'Méthode Traditionnelle / Metodo Classico'],
          ['槽式法', '新鮮果香、花香', '低', 'Charmat / Martinotti / Metodo Italiano'],
          ['轉移法', '介於前兩者', '中', 'Transfer method / bottle fermented'],
          ['Asti 法', '甜、芳香、低酒精', '低', '產區名即暗示（Asti、Moscato d\'Asti）'],
          ['祖傳法', '果味、酵母感、可能混濁', '不一', 'Méthode Ancestrale / Pét-Nat'],
          ['氣體注入', '粗氣泡、簡單', '最低', 'Carbonated']
        ]
      ),
      mis('「槽式法 = 品質差。」槽式法能保留品種香氣，Prosecco Superiore 與不少高品質 Lambrusco 都是槽式法。釀法只是風格與成本的選擇，不單獨決定品質。'),
      info('用成本解釋價位', '傳統法需要較長的瓶內陳年、轉瓶與逐瓶除渣，佔用資金與人力；槽式法在槽內快速完成、可大量生產。這就是 Prosecco 與傳統法氣泡酒價位傾向不同的主要原因。')
    ],
    terms: [
      { term: '槽式法 (Charmat)', def: '密閉耐壓槽內二次發酵。' },
      { term: '轉移法 (transfer method)', def: '瓶內發酵後倒入槽中過濾，再裝新瓶。' },
      { term: '祖傳法 (méthode ancestrale)', def: '單次發酵在瓶中完成。' },
      { term: 'Pét-Nat (pétillant naturel)', def: '祖傳法做出的、常不除渣的自然氣泡酒。' }
    ],
    quiz: [
      { q: '轉移法與傳統法最大的差別在哪？', options: ['轉移法不做二次發酵', '轉移法在酒渣陳年後把酒倒入槽內過濾，再裝新瓶', '轉移法只能用紅葡萄', '轉移法一定比傳統法貴'], answer: 1, explain: '轉移法省去轉瓶與逐瓶除渣，改為倒入槽內過濾後再裝瓶。' },
      { q: '單次發酵在瓶中完成、常不除渣的氣泡酒，通常屬於哪種做法？', options: ['槽式法', '祖傳法 / Pét-Nat', '氣體注入', '傳統法'], answer: 1, explain: '祖傳法（Pét-Nat）是基酒在發酵尚未完成時裝瓶，由瓶內單次發酵完成。' }
    ]
  },

  // ───────────────────────── sp-l1-6 ─────────────────────────
  'sp-l1-6': {
    blocks: [
      info('評量說明', '共 8 題，答對 5 題以上（60 分以上）即通過 Level 1。題目避開了查證有出入的數字。'),
      info('複習清單', '釀法分類與成本邏輯 → 糖量與壓力 → 甜度用語陷阱 → 基酒條件 → 傳統法流程與自溶 → 槽式、轉移、祖傳、Asti、氣體注入的差別。')
    ],
    terms: [],
    quiz: [
      { q: '氣泡酒的氣泡主要來源是？', options: ['葡萄皮釋出的氣體', '發酵產生的 CO₂ 溶入酒中（或另行注入）', '橡木桶的氣體', '裝瓶時的空氣'], answer: 1, explain: '二次發酵（或單次發酵未完成）產生的 CO₂ 在密閉容器內溶入酒中；氣體注入則是另行打入。' },
      { q: '「在同一支瓶內二次發酵，並經酒渣陳年」是哪一種釀法？', options: ['傳統法', '槽式法', 'Asti 法', '氣體注入'], answer: 0, explain: '傳統法的二次發酵與酒渣陳年都在同一支瓶內完成。' },
      { q: '下列哪一項最能解釋 Prosecco 價位傾向低於傳統法氣泡酒？', options: ['Glera 品種價格低', '槽式法省時省工、可大量生產', 'Prosecco 不含酒精', 'Prosecco 沒有 dosage'], answer: 1, explain: '槽式法在槽內快速完成，不需長期酒渣陳年與逐瓶除渣，成本傾向較低。' },
      { q: '下列哪一個甜度級別比 Brut 更甜？', options: ['Brut Nature', 'Extra Brut', 'Extra Dry', '三者都一樣乾'], answer: 2, explain: 'Extra Dry（12–17 g/L）高於 Brut 的範圍，所以比 Brut 更甜。' },
      { q: '理想的氣泡酒基酒條件是？', options: ['高酒精、低酸度、風味濃厚', '高酸度、酒精偏低、風味細緻', '低酸度、高糖', '強烈橡木風味'], answer: 1, explain: '基酒需要高酸、偏低酒精、風味不張揚，才能經得起二次發酵與 dosage。' },
      { q: 'Asti 法的特徵是？', options: ['瓶內二次發酵加長期酒渣陳年', '槽內單次發酵，中途中止並保留殘糖', '把 CO₂ 打進靜態酒', '一定不過濾'], answer: 1, explain: 'Asti 法是甜的 Moscato 汁在槽內單次發酵，降溫中止以保留殘糖與低酒精。' },
      { q: '自溶 (autolysis) 主要為氣泡酒帶來什麼？', options: ['麵包、餅乾、烤吐司風味與更綿密的氣泡', '更高的酸度', '更多單寧', '顏色變深'], answer: 0, explain: '死亡酵母分解釋出胺基酸與甘露糖蛋白，帶來烘焙風味並讓質地更綿密。' },
      { q: '「Dom Pérignon 發明了氣泡酒」這句話最合適的評價是？', options: ['完全正確', '是流傳的神話，氣泡酒在他之前就有', '只對槽式法成立', '只對 Asti 成立'], answer: 1, explain: '這是常見的歷史神話；他在調配等技術上的貢獻較可信，但並非發明者。' }
    ],
    passScore: 60
  }
}

export const LEVEL1_GLOSSARY = Object.values(LEVEL1_CONTENT).flatMap(c => c.terms || [])
