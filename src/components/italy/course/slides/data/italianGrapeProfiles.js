// ItalianGrapeProfileSlide 的三語預設內容（課程未提供 grapes 時使用）
const META = {
  sangiovese: { emoji: '🍒', color: '#A8324A', name: 'Sangiovese', metrics: { acidity: 5, tannin: 4, body: 3, fruit: 4, ageing: 4 } },
  nebbiolo: { emoji: '🌫️', color: '#7B1F2A', name: 'Nebbiolo', metrics: { acidity: 5, tannin: 5, body: 4, fruit: 3, ageing: 5 } },
  barbera: { emoji: '🍷', color: '#5C2334', name: 'Barbera', metrics: { acidity: 5, tannin: 2, body: 3, fruit: 5, ageing: 3 } },
  aglianico: { emoji: '🌋', color: '#3E1A2E', name: 'Aglianico', metrics: { acidity: 5, tannin: 5, body: 4, fruit: 4, ageing: 5 } },
  montepulciano: { emoji: '🍇', color: '#6B2E3D', name: 'Montepulciano', metrics: { acidity: 4, tannin: 3, body: 4, fruit: 5, ageing: 3 } }
}
const REGION = { sangiovese: 'Toscana', nebbiolo: 'Piemonte', barbera: 'Piemonte', aglianico: 'Campania / Basilicata', montepulciano: 'Abruzzo' }

function build (lang) {
  return {
    ui: lang.ui,
    grapes: Object.keys(META).map(key => ({
      key, ...META[key], mainRegion: REGION[key], ...lang.grapes[key]
    }))
  }
}

const zh = {
  ui: {
    defaultTitle: '義大利原生葡萄品種檔案',
    mainRegion: '主產區', colour: '顏色', italyRole: '📍 在義大利的角色', traits: '🌿 品種特性',
    cluster: '果串', ripening: '成熟期', soils: '適應土壤', climate: '氣候偏好',
    metricsTitle: '📊 風格指標', aromas: '👃 香氣譜系', styleTitle: '🍷 風格特徵與陳年', ageing: '陳年潛力',
    pairings: '🍽️ 經典餐酒搭配', examples: '🌟 代表 DOCG / 酒莊', sep: '：',
    metricLabels: { acidity: '酸度', tannin: '單寧', body: '酒體', fruit: '果香強度', ageing: '陳年潛力', mineral: '礦物感' }
  },
  grapes: {
    sangiovese: {
      color_type: '紅葡萄',
      tagline: '托斯卡尼之心——義大利種植最廣的紅葡萄',
      italyRole: '義大利栽植面積最大的紅葡萄（約 5–6 萬公頃），幾乎是托斯卡尼紅酒的代名詞。從入門 Chianti 到頂級 Brunello di Montalcino 都以 Sangiovese 為核心。',
      mainAreas: [
        { name: 'Chianti Classico', note: '托斯卡尼經典產區，Sangiovese 至少 80%' },
        { name: 'Brunello di Montalcino', note: '100% Sangiovese（當地稱 Brunello），最高表達' },
        { name: 'Vino Nobile di Montepulciano', note: 'Sangiovese 至少 70%（當地稱 Prugnolo Gentile）' },
        { name: 'Romagna', note: 'Romagna Sangiovese，較輕盈日常風格' }
      ],
      cluster: '中等大小、緊密', ripening: '晚熟（10 月上中旬）',
      soils: 'Galestro（片狀泥灰岩）、Alberese（石灰岩）', climate: '溫暖乾燥、需充足日照',
      aromas: ['酸櫻桃', '李子', '番茄葉', '皮革', '雪茄盒', '紫羅蘭', '香料', '泥土'],
      style: '高酸度、中至高單寧、酒體中等、酸櫻桃為核心。年輕時鮮果與草本，陳年後發展皮革、雪茄、無花果。是「餐桌之酒」的典範——其酸度完美襯托番茄基底料理。',
      ageing: 'Chianti 3–8 年；Chianti Classico Riserva 8–15 年；Brunello 15–30 年；Brunello Riserva 25 年以上',
      pairings: ['佛羅倫斯 T 骨牛排（Bistecca alla Fiorentina）', '番茄基底義大利麵（Bolognese、Puttanesca）', 'Pecorino Toscano 乳酪', '野豬燉肉（Cinghiale）', 'Crostini di fegatini（雞肝醬烤麵包）'],
      examples: [
        { name: 'Biondi-Santi', note: 'Brunello 創始者' },
        { name: 'Soldera Case Basse', note: 'Brunello 傳奇酒莊' },
        { name: 'Antinori（Tignanello）', note: 'Super Tuscan 開創者之一' },
        { name: 'Castello di Ama / Fontodi', note: 'Chianti Classico 標竿' }
      ]
    },
    nebbiolo: {
      color_type: '紅葡萄',
      tagline: '霧之葡萄——義大利的紅酒之王',
      italyRole: '皮蒙特最尊貴的品種（名稱一般認為源自義大利文 nebbia「霧」）。雖只占皮蒙特栽植面積的一小部分，卻釀造出義大利兩大頂級紅酒：Barolo 與 Barbaresco。世界上最難駕馭的紅葡萄之一。',
      mainAreas: [
        { name: 'Barolo DOCG', note: 'Langhe 11 個市鎮，最強壯結構' },
        { name: 'Barbaresco DOCG', note: '較 Barolo 優雅、陳年要求較短' },
        { name: 'Roero / Ghemme / Gattinara', note: 'Roero 在 Tanaro 河對岸；Ghemme、Gattinara 在 Piemonte 北部' },
        { name: 'Valtellina（Lombardia）', note: '北部山區，當地稱 Chiavennasca' }
      ],
      cluster: '中等、緊實', ripening: '極晚熟（10 月中下旬）',
      soils: 'Tortonian 鈣質泥灰岩（La Morra/Barolo）vs Serravallian（舊稱 Helvetian）泥灰岩與砂岩（Serralunga/Monforte）',
      climate: '需長秋季、霧氣與冷涼夜晚',
      aromas: ['紅櫻桃', '玫瑰', '焦油', '皮革', '松露', '甘草', '香料', '無花果乾'],
      style: '極高酸度 + 極高單寧 + 中等酒體 + 淺色（橘紅）= 結構之王。年輕時封閉、單寧粗糲；陳年後展現玫瑰、焦油（rose & tar）、松露、香料的複雜深度。「淺色卻有力」是 Nebbiolo 的獨特標記。',
      ageing: 'Barolo 15–40 年；Barolo Riserva 25 年以上；Barbaresco 10–30 年',
      pairings: ['Brasato al Barolo（Barolo 燉牛肉）', 'Tajarin（Piemonte 蛋黃手工麵）', '白松露料理（Alba 白松露）', 'Castelmagno、Bra 等 Piemonte 老乳酪', '燉野味（鹿、雉雞）'],
      examples: [
        { name: 'Giacomo Conterno（Monfortino）', note: 'Barolo 的傳奇表達' },
        { name: 'Bartolo Mascarello', note: '傳統派標竿' },
        { name: 'Bruno Giacosa', note: 'Barbaresco 與 Barolo 大師' },
        { name: 'Gaja', note: '現代化先驅' }
      ]
    },
    barbera: {
      color_type: '紅葡萄',
      tagline: '皮蒙特的日常英雄——高酸低單寧的萬能餐酒',
      italyRole: '皮蒙特栽植面積最大的紅葡萄，是當地人日常餐桌的主力。比 Nebbiolo 更易栽培、產量更穩定。Barbera d\'Asti 與 Barbera d\'Alba 為兩大主舞台。',
      mainAreas: [
        { name: 'Barbera d\'Asti DOCG', note: '酒體較豐潤、果香奔放' },
        { name: 'Barbera d\'Alba DOC', note: '較緊實、可陳年' },
        { name: 'Nizza DOCG', note: '2014 年獨立的頂級 Barbera 產區' },
        { name: 'Oltrepò Pavese（Lombardia）', note: '北部多用於日常紅酒' }
      ],
      cluster: '中等、產量高', ripening: '中等（9 月底至 10 月初）',
      soils: '黏土石灰、砂質土皆可', climate: '適應力強、忌過熱',
      aromas: ['黑櫻桃', '黑莓', '李子', '紫羅蘭', '香料', '可可（陳年）'],
      style: '極高酸度 + 低單寧 + 飽滿果香，是「酸度撐起的紅酒」。年輕時鮮果奔放、易飲性極高；頂級單一園版本（Nizza、橡木桶陳年）可發展香料、巧克力深度。',
      ageing: '基礎款 2–4 年；Superiore / Nizza 5–15 年；頂級可達 20 年',
      pairings: ['番茄醬料理', '皮蒙特 Bagna Càuda（蒜味鯷魚熱沾醬）', '披薩、義大利麵', 'Salumi（義式醃肉）', '中等熟成乳酪'],
      examples: [
        { name: 'Vietti（Scarrone）', note: '單一園 Barbera 標竿' },
        { name: 'Braida（Bricco dell\'Uccellone）', note: '現代風格代表（Giacomo Bologna 創）' },
        { name: 'Coppo（Pomorosso）', note: 'Barbera d\'Asti / Nizza 經典' },
        { name: 'Michele Chiarlo（La Court）', note: 'Nizza 代表酒莊' }
      ]
    },
    aglianico: {
      color_type: '紅葡萄',
      tagline: '南義的 Barolo——火山土壤上的鋼鐵單寧',
      italyRole: '義大利南方最高貴的紅葡萄品種，常被稱為「南義的 Barolo」。主要種植於 Campania（Taurasi DOCG）與 Basilicata（Aglianico del Vulture）的火山土壤。極高單寧 + 極高酸度，需長期陳年。',
      mainAreas: [
        { name: 'Taurasi DOCG（Campania）', note: '火山影響的丘陵、海拔 400-700m，最知名' },
        { name: 'Aglianico del Vulture（Basilicata）', note: '死火山 Monte Vulture 山坡；Superiore 為 DOCG' },
        { name: 'Cilento DOC', note: 'Campania 海岸版本，較柔軟' },
        { name: 'Irpinia DOC', note: 'Campania 內陸日常款' }
      ],
      cluster: '緊實、厚皮', ripening: '極晚熟（10 月底至 11 月）',
      soils: '火山岩、火山灰、凝灰岩', climate: '溫暖但海拔帶來夜間降溫',
      aromas: ['黑櫻桃', '黑李', '皮革', '煙燻', '甘草', '黑胡椒', '雪茄', '可可'],
      style: '深色集中、極厚單寧、極高酸度、酒體飽滿。年輕時粗獷封閉、單寧緊咬；需 8-10 年才開始展現皮革、煙燻、甘草、雪茄複雜度。是少數可與 Barolo、Brunello 並列的「南義鋼鐵紅酒」。',
      ageing: 'Taurasi 10–25 年；Riserva 20 年以上；頂級酒款 30+ 年',
      pairings: ['烤羊肉（Agnello al forno）', '拿坡里 Genovese 洋蔥燉肉醬', 'Caciocavallo Podolico 老乳酪', '燒烤野味、慢燉牛肉', '濃郁番茄燉肉醬'],
      examples: [
        { name: 'Mastroberardino（Radici）', note: 'Taurasi 復興者，1878 年立業' },
        { name: 'Feudi di San Gregorio', note: '現代 Campania 標竿' },
        { name: 'Paternoster（Don Anselmo）', note: 'Aglianico del Vulture 經典' },
        { name: 'Elena Fucci（Titolo）', note: 'Vulture 新世代釀酒師' }
      ]
    },
    montepulciano: {
      color_type: '紅葡萄',
      tagline: '中義之力——別跟 Vino Nobile 混淆！',
      italyRole: '義大利栽植最廣的紅葡萄之一（約 3 萬公頃），主要種植於 Abruzzo（Montepulciano d\'Abruzzo DOC，產量極大）。注意：「Montepulciano d\'Abruzzo」的 Montepulciano 是品種，而托斯卡尼「Vino Nobile di Montepulciano」的 Montepulciano 是地名（以 Sangiovese 釀造）！',
      mainAreas: [
        { name: 'Montepulciano d\'Abruzzo DOC', note: '主舞台，日常紅酒主力' },
        { name: 'Colline Teramane DOCG', note: 'Abruzzo 北部高品質產區' },
        { name: 'Conero DOCG（Marche）', note: 'Marche 海岸頂級表達' },
        { name: 'Offida Rosso DOCG', note: 'Marche 南部' }
      ],
      cluster: '中等大小、產量高', ripening: '晚熟（10 月）',
      soils: '黏土、石灰岩', climate: '溫暖、Abruzzo 山區夜涼',
      aromas: ['黑莓', '李子', '黑櫻桃', '甘草', '黑胡椒', '皮革'],
      style: '深色、果香奔放、單寧中等、酸度中高、酒體飽滿。基礎款適合日常飲用（Cerasuolo d\'Abruzzo 為其粉紅版本）；頂級 Conero / Colline Teramane 可陳年 10-20 年並發展皮革、香料深度。',
      ageing: '基礎款 2–5 年；Riserva 8–15 年；Conero 10–20 年',
      pairings: ['羊肉串（Arrosticini，Abruzzo 招牌）', '番茄燉肉醬料理', 'Spaghetti alla chitarra（Abruzzo 手工麵）', 'Pecorino di Farindola', '中等熟成義式臘腸'],
      examples: [
        { name: 'Emidio Pepe', note: '自然派先驅、極具陳年力' },
        { name: 'Valentini', note: 'Abruzzo 傳奇酒莊' },
        { name: 'Masciarelli', note: '現代化主力' },
        { name: 'Umani Ronchi（Cùmaro Conero）', note: 'Marche Conero 標竿' }
      ]
    }
  }
}

const en = {
  ui: {
    defaultTitle: 'Profiles of Italian Native Grapes',
    mainRegion: 'Main region', colour: 'Colour', italyRole: '📍 Role in Italy', traits: '🌿 Viticultural traits',
    cluster: 'Bunch', ripening: 'Ripening', soils: 'Soils', climate: 'Climate',
    metricsTitle: '📊 Style indicators', aromas: '👃 Aroma spectrum', styleTitle: '🍷 Style and ageing', ageing: 'Ageing potential',
    pairings: '🍽️ Classic food pairings', examples: '🌟 Key DOCGs / producers', sep: ': ',
    metricLabels: { acidity: 'Acidity', tannin: 'Tannin', body: 'Body', fruit: 'Fruit intensity', ageing: 'Ageing potential', mineral: 'Minerality' }
  },
  grapes: {
    sangiovese: {
      color_type: 'Red grape',
      tagline: 'The heart of Tuscany — Italy\'s most widely planted red grape',
      italyRole: 'Italy\'s most widely planted red grape (about 50,000–60,000 ha), almost synonymous with Tuscan red wine. From entry-level Chianti to top Brunello di Montalcino, Sangiovese is at the core.',
      mainAreas: [
        { name: 'Chianti Classico', note: 'Tuscany\'s classic zone, at least 80% Sangiovese' },
        { name: 'Brunello di Montalcino', note: '100% Sangiovese (locally called Brunello), its highest expression' },
        { name: 'Vino Nobile di Montepulciano', note: 'At least 70% Sangiovese (locally Prugnolo Gentile)' },
        { name: 'Romagna', note: 'Romagna Sangiovese, a lighter everyday style' }
      ],
      cluster: 'Medium-sized, compact', ripening: 'Late (early to mid-October)',
      soils: 'Galestro (flaky marl), alberese (limestone)', climate: 'Warm and dry, needs plenty of sun',
      aromas: ['Sour cherry', 'Plum', 'Tomato leaf', 'Leather', 'Cigar box', 'Violet', 'Spice', 'Earth'],
      style: 'High acidity, medium to high tannin, medium body, with sour cherry at the core. Fresh fruit and herbs when young; leather, cigar and fig with age. The model "food wine" — its acidity is perfect with tomato-based dishes.',
      ageing: 'Chianti 3–8 years; Chianti Classico Riserva 8–15 years; Brunello 15–30 years; Brunello Riserva 25+ years',
      pairings: ['Florentine T-bone steak (bistecca alla fiorentina)', 'Tomato-based pasta (Bolognese, puttanesca)', 'Pecorino Toscano', 'Wild boar stew (cinghiale)', 'Crostini di fegatini (chicken-liver toasts)'],
      examples: [
        { name: 'Biondi-Santi', note: 'Founder of Brunello' },
        { name: 'Soldera Case Basse', note: 'A legendary Brunello estate' },
        { name: 'Antinori (Tignanello)', note: 'One of the Super Tuscan pioneers' },
        { name: 'Castello di Ama / Fontodi', note: 'Chianti Classico benchmarks' }
      ]
    },
    nebbiolo: {
      color_type: 'Red grape',
      tagline: 'The grape of the fog — Italy\'s king of red wines',
      italyRole: 'Piemonte\'s noblest grape (its name is usually traced to the Italian nebbia, "fog"). Though only a small share of Piemonte\'s vineyards, it makes Italy\'s two great reds: Barolo and Barbaresco. One of the hardest red grapes in the world to master.',
      mainAreas: [
        { name: 'Barolo DOCG', note: '11 communes of the Langhe, the most powerful structure' },
        { name: 'Barbaresco DOCG', note: 'More elegant than Barolo, shorter ageing requirement' },
        { name: 'Roero / Ghemme / Gattinara', note: 'Roero lies across the Tanaro; Ghemme and Gattinara in northern Piemonte' },
        { name: 'Valtellina (Lombardia)', note: 'Northern mountains, locally called Chiavennasca' }
      ],
      cluster: 'Medium, compact', ripening: 'Very late (mid to late October)',
      soils: 'Tortonian calcareous marl (La Morra/Barolo) vs Serravallian (formerly Helvetian) marl and sandstone (Serralunga/Monforte)',
      climate: 'Needs a long autumn, fog and cool nights',
      aromas: ['Red cherry', 'Rose', 'Tar', 'Leather', 'Truffle', 'Liquorice', 'Spice', 'Dried fig'],
      style: 'Very high acidity + very high tannin + medium body + pale (orange-red) colour = the king of structure. Closed with rough tannins when young; with age it reveals the complex depth of rose, tar ("rose & tar"), truffle and spice. "Pale yet powerful" is Nebbiolo\'s signature.',
      ageing: 'Barolo 15–40 years; Barolo Riserva 25+ years; Barbaresco 10–30 years',
      pairings: ['Brasato al Barolo (beef braised in Barolo)', 'Tajarin (Piemontese egg-yolk pasta)', 'White truffle dishes (Alba white truffle)', 'Aged Piemontese cheeses such as Castelmagno and Bra', 'Braised game (venison, pheasant)'],
      examples: [
        { name: 'Giacomo Conterno (Monfortino)', note: 'Barolo\'s legendary expression' },
        { name: 'Bartolo Mascarello', note: 'Traditionalist benchmark' },
        { name: 'Bruno Giacosa', note: 'Master of Barbaresco and Barolo' },
        { name: 'Gaja', note: 'Pioneer of modernisation' }
      ]
    },
    barbera: {
      color_type: 'Red grape',
      tagline: 'Piemonte\'s everyday hero — a versatile, high-acid, low-tannin food wine',
      italyRole: 'Piemonte\'s most widely planted red grape and the mainstay of the local table. Easier to grow than Nebbiolo with steadier yields. Barbera d\'Asti and Barbera d\'Alba are its two main stages.',
      mainAreas: [
        { name: 'Barbera d\'Asti DOCG', note: 'Fuller-bodied, exuberant fruit' },
        { name: 'Barbera d\'Alba DOC', note: 'Firmer, age-worthy' },
        { name: 'Nizza DOCG', note: 'A top Barbera area, independent since 2014' },
        { name: 'Oltrepò Pavese (Lombardia)', note: 'Mostly everyday reds in the north' }
      ],
      cluster: 'Medium, high-yielding', ripening: 'Medium (late September to early October)',
      soils: 'Clay-limestone and sandy soils alike', climate: 'Adaptable, dislikes excessive heat',
      aromas: ['Black cherry', 'Blackberry', 'Plum', 'Violet', 'Spice', 'Cocoa (with age)'],
      style: 'Very high acidity + low tannin + generous fruit — "a red held up by its acidity". Exuberant and very drinkable when young; top single-vineyard versions (Nizza, oak-aged) develop spice and chocolate depth.',
      ageing: 'Basic wines 2–4 years; Superiore / Nizza 5–15 years; the best up to 20 years',
      pairings: ['Tomato-sauce dishes', 'Piemontese bagna càuda (warm garlic and anchovy dip)', 'Pizza, pasta', 'Salumi (cured meats)', 'Medium-aged cheese'],
      examples: [
        { name: 'Vietti (Scarrone)', note: 'Single-vineyard Barbera benchmark' },
        { name: 'Braida (Bricco dell\'Uccellone)', note: 'Modern-style icon (created by Giacomo Bologna)' },
        { name: 'Coppo (Pomorosso)', note: 'Barbera d\'Asti / Nizza classic' },
        { name: 'Michele Chiarlo (La Court)', note: 'Leading Nizza estate' }
      ]
    },
    aglianico: {
      color_type: 'Red grape',
      tagline: 'The Barolo of the South — steely tannins on volcanic soils',
      italyRole: 'Southern Italy\'s noblest red grape, often called "the Barolo of the South". Grown mainly on the volcanic soils of Campania (Taurasi DOCG) and Basilicata (Aglianico del Vulture). Very high tannin + very high acidity, needing long ageing.',
      mainAreas: [
        { name: 'Taurasi DOCG (Campania)', note: 'Volcanic-influenced hills at 400-700 m, the best known' },
        { name: 'Aglianico del Vulture (Basilicata)', note: 'Slopes of the extinct Monte Vulture; the Superiore is DOCG' },
        { name: 'Cilento DOC', note: 'A softer coastal version from Campania' },
        { name: 'Irpinia DOC', note: 'Everyday wines from inland Campania' }
      ],
      cluster: 'Compact, thick-skinned', ripening: 'Very late (late October to November)',
      soils: 'Volcanic rock, volcanic ash, tuff', climate: 'Warm, but altitude brings cool nights',
      aromas: ['Black cherry', 'Black plum', 'Leather', 'Smoke', 'Liquorice', 'Black pepper', 'Cigar', 'Cocoa'],
      style: 'Deep and concentrated, with very firm tannin, very high acidity and a full body. Rugged and closed with gripping tannins when young; needs 8-10 years to reveal leather, smoke, liquorice and cigar complexity. One of the few "steely southern reds" that can stand beside Barolo and Brunello.',
      ageing: 'Taurasi 10–25 years; Riserva 20+ years; the top wines 30+ years',
      pairings: ['Roast lamb (agnello al forno)', 'Neapolitan Genovese (onion and meat ragù)', 'Aged Caciocavallo Podolico', 'Grilled game, slow-braised beef', 'Rich tomato and meat ragù'],
      examples: [
        { name: 'Mastroberardino (Radici)', note: 'Reviver of Taurasi, founded 1878' },
        { name: 'Feudi di San Gregorio', note: 'Benchmark of modern Campania' },
        { name: 'Paternoster (Don Anselmo)', note: 'Aglianico del Vulture classic' },
        { name: 'Elena Fucci (Titolo)', note: 'New-generation Vulture winemaker' }
      ]
    },
    montepulciano: {
      color_type: 'Red grape',
      tagline: 'The strength of central Italy — don\'t confuse it with Vino Nobile!',
      italyRole: 'One of Italy\'s most widely planted red grapes (about 30,000 ha), grown mainly in Abruzzo (Montepulciano d\'Abruzzo DOC, with huge output). Note: in "Montepulciano d\'Abruzzo", Montepulciano is the grape, whereas in Tuscany\'s "Vino Nobile di Montepulciano" it is a town (and the wine is made from Sangiovese)!',
      mainAreas: [
        { name: 'Montepulciano d\'Abruzzo DOC', note: 'The main stage, mainstay of everyday reds' },
        { name: 'Colline Teramane DOCG', note: 'High-quality zone in northern Abruzzo' },
        { name: 'Conero DOCG (Marche)', note: 'Top expression on the Marche coast' },
        { name: 'Offida Rosso DOCG', note: 'Southern Marche' }
      ],
      cluster: 'Medium-sized, high-yielding', ripening: 'Late (October)',
      soils: 'Clay, limestone', climate: 'Warm, with cool nights in the Abruzzo mountains',
      aromas: ['Blackberry', 'Plum', 'Black cherry', 'Liquorice', 'Black pepper', 'Leather'],
      style: 'Deep in colour, with exuberant fruit, medium tannin, medium-high acidity and a full body. Basic wines suit everyday drinking (Cerasuolo d\'Abruzzo is its rosé); top Conero / Colline Teramane can age 10-20 years, developing leather and spice.',
      ageing: 'Basic wines 2–5 years; Riserva 8–15 years; Conero 10–20 years',
      pairings: ['Mutton skewers (arrosticini, Abruzzo\'s signature)', 'Tomato and meat ragù dishes', 'Spaghetti alla chitarra (Abruzzo\'s hand-made pasta)', 'Pecorino di Farindola', 'Medium-aged Italian salami'],
      examples: [
        { name: 'Emidio Pepe', note: 'Natural-wine pioneer with great ageing power' },
        { name: 'Valentini', note: 'Abruzzo\'s legendary estate' },
        { name: 'Masciarelli', note: 'Driving force of modernisation' },
        { name: 'Umani Ronchi (Cùmaro Conero)', note: 'Marche Conero benchmark' }
      ]
    }
  }
}

const ja = {
  ui: {
    defaultTitle: 'イタリア土着ブドウ品種のプロフィール',
    mainRegion: '主な産地', colour: '色', italyRole: '📍 イタリアでの役割', traits: '🌿 品種の特性',
    cluster: '房', ripening: '成熟期', soils: '適した土壌', climate: '好む気候',
    metricsTitle: '📊 スタイルの指標', aromas: '👃 香りのスペクトル', styleTitle: '🍷 スタイルと熟成', ageing: '熟成ポテンシャル',
    pairings: '🍽️ 古典的なペアリング', examples: '🌟 代表的なDOCG／生産者', sep: '：',
    metricLabels: { acidity: '酸', tannin: 'タンニン', body: 'ボディ', fruit: '果実味の強さ', ageing: '熟成ポテンシャル', mineral: 'ミネラル感' }
  },
  grapes: {
    sangiovese: {
      color_type: '黒ブドウ',
      tagline: 'トスカーナの心――イタリアで最も広く栽培される黒ブドウ',
      italyRole: 'イタリアで最も栽培面積の大きい黒ブドウ（約5〜6万ヘクタール）で、トスカーナの赤ワインの代名詞といえる。入門のキャンティからトップのブルネッロ・ディ・モンタルチーノまで、サンジョヴェーゼが中心。',
      mainAreas: [
        { name: 'Chianti Classico', note: 'トスカーナの古典的な地区、サンジョヴェーゼ80%以上' },
        { name: 'Brunello di Montalcino', note: 'サンジョヴェーゼ100%（地元ではブルネッロ）、最高の表現' },
        { name: 'Vino Nobile di Montepulciano', note: 'サンジョヴェーゼ70%以上（地元ではプルニョーロ・ジェンティーレ）' },
        { name: 'Romagna', note: 'ロマーニャ・サンジョヴェーゼ、軽やかな日常のスタイル' }
      ],
      cluster: '中くらいの大きさ、密着', ripening: '晩熟（10月上旬〜中旬）',
      soils: 'ガレストロ（片状の泥灰土）、アルベレーゼ（石灰岩）', climate: '温暖で乾燥、十分な日照が必要',
      aromas: ['サワーチェリー', 'プラム', 'トマトの葉', 'なめし革', 'シガーボックス', 'スミレ', 'スパイス', '土'],
      style: '高い酸、中〜多めのタンニン、ミディアムボディで、サワーチェリーが中核。若いうちはフレッシュな果実とハーブ、熟成するとなめし革、シガー、イチジク。「食卓のワイン」の手本で、その酸はトマトベースの料理を見事に引き立てる。',
      ageing: 'キャンティ3〜8年、キャンティ・クラシコ・リゼルヴァ8〜15年、ブルネッロ15〜30年、ブルネッロ・リゼルヴァ25年以上',
      pairings: ['フィレンツェ風Tボーンステーキ（ビステッカ・アッラ・フィオレンティーナ）', 'トマトベースのパスタ（ボロネーゼ、プッタネスカ）', 'ペコリーノ・トスカーノ', 'イノシシの煮込み（チンギアーレ）', 'クロスティーニ・ディ・フェガティーニ（鶏レバーのトースト）'],
      examples: [
        { name: 'Biondi-Santi', note: 'ブルネッロの創始者' },
        { name: 'Soldera Case Basse', note: 'ブルネッロの伝説的なワイナリー' },
        { name: 'Antinori（Tignanello）', note: 'スーパータスカンの先駆者のひとつ' },
        { name: 'Castello di Ama / Fontodi', note: 'キャンティ・クラシコの基準' }
      ]
    },
    nebbiolo: {
      color_type: '黒ブドウ',
      tagline: '霧のブドウ――イタリアの赤ワインの王',
      italyRole: 'ピエモンテで最も高貴な品種（名前は一般にイタリア語のnebbia「霧」に由来するとされる）。ピエモンテの栽培面積のごく一部にすぎないが、イタリアの2大トップ赤ワイン、バローロとバルバレスコを生む。世界で最も扱いの難しい黒ブドウのひとつ。',
      mainAreas: [
        { name: 'Barolo DOCG', note: 'ランゲの11のコムーネ、最も力強い骨格' },
        { name: 'Barbaresco DOCG', note: 'バローロよりエレガント、熟成規定は短め' },
        { name: 'Roero / Ghemme / Gattinara', note: 'ロエロはタナロ川の対岸、ゲンメとガッティナーラはピエモンテ北部' },
        { name: 'Valtellina（Lombardia）', note: '北部の山岳地帯、地元ではキアヴェンナスカ' }
      ],
      cluster: '中くらい、締まっている', ripening: '非常に晩熟（10月中旬〜下旬）',
      soils: 'トルトニアン期の石灰質泥灰土（ラ・モッラ／バローロ）vs セッラヴァッリアーノ期（旧称ヘルヴェティアン）の泥灰土と砂岩（セッラルンガ／モンフォルテ）',
      climate: '長い秋、霧、涼しい夜が必要',
      aromas: ['赤いサクランボ', 'バラ', 'タール', 'なめし革', 'トリュフ', '甘草', 'スパイス', '干しイチジク'],
      style: '非常に高い酸＋非常に多いタンニン＋ミディアムボディ＋淡い色（オレンジがかった赤）＝骨格の王。若いうちは閉じてタンニンが粗く、熟成するとバラ、タール（rose & tar）、トリュフ、スパイスの複雑な奥行きを見せる。「淡いのに力強い」がネッビオーロの独自の印。',
      ageing: 'バローロ15〜40年、バローロ・リゼルヴァ25年以上、バルバレスコ10〜30年',
      pairings: ['ブラザート・アル・バローロ（バローロで煮込んだ牛肉）', 'タヤリン（ピエモンテの卵黄の手打ちパスタ）', '白トリュフ料理（アルバの白トリュフ）', 'カステルマーニョ、ブラなどピエモンテの熟成チーズ', 'ジビエの煮込み（鹿、キジ）'],
      examples: [
        { name: 'Giacomo Conterno（Monfortino）', note: 'バローロの伝説的な表現' },
        { name: 'Bartolo Mascarello', note: '伝統派の基準' },
        { name: 'Bruno Giacosa', note: 'バルバレスコとバローロの巨匠' },
        { name: 'Gaja', note: '近代化の先駆者' }
      ]
    },
    barbera: {
      color_type: '黒ブドウ',
      tagline: 'ピエモンテの日常のヒーロー――酸が高くタンニンの少ない万能の食中酒',
      italyRole: 'ピエモンテで最も栽培面積の大きい黒ブドウで、地元の人々の日常の食卓の主力。ネッビオーロより栽培しやすく、収量も安定している。バルベーラ・ダスティとバルベーラ・ダルバが2大舞台。',
      mainAreas: [
        { name: 'Barbera d\'Asti DOCG', note: 'ボディが豊かで果実香が奔放' },
        { name: 'Barbera d\'Alba DOC', note: 'より引き締まり、熟成可能' },
        { name: 'Nizza DOCG', note: '2014年に独立したトップクラスのバルベーラの産地' },
        { name: 'Oltrepò Pavese（Lombardia）', note: '北部では主に日常の赤ワイン' }
      ],
      cluster: '中くらい、収量が多い', ripening: '中程度（9月下旬〜10月上旬）',
      soils: '粘土石灰質、砂質のどちらにも適応', climate: '適応力が高く、暑すぎるのは苦手',
      aromas: ['ブラックチェリー', 'ブラックベリー', 'プラム', 'スミレ', 'スパイス', 'カカオ（熟成後）'],
      style: '非常に高い酸＋少ないタンニン＋豊かな果実味で、「酸に支えられた赤ワイン」。若いうちは果実が奔放で非常に飲みやすい。トップの単一畑（ニッツァ、樽熟成）はスパイスやチョコレートの奥行きを帯びる。',
      ageing: 'ベーシック2〜4年、スペリオーレ／ニッツァ5〜15年、トップは20年まで',
      pairings: ['トマトソースの料理', 'ピエモンテのバーニャ・カウダ（ニンニクとアンチョビの温かいソース）', 'ピッツァ、パスタ', 'サルーミ（イタリアの加工肉）', '中程度に熟成したチーズ'],
      examples: [
        { name: 'Vietti（Scarrone）', note: '単一畑バルベーラの基準' },
        { name: 'Braida（Bricco dell\'Uccellone）', note: 'モダンスタイルの代表（ジャコモ・ボローニャが創出）' },
        { name: 'Coppo（Pomorosso）', note: 'バルベーラ・ダスティ／ニッツァの古典' },
        { name: 'Michele Chiarlo（La Court）', note: 'ニッツァの代表的なワイナリー' }
      ]
    },
    aglianico: {
      color_type: '黒ブドウ',
      tagline: '南のバローロ――火山性土壌に育つ鋼のタンニン',
      italyRole: '南イタリアで最も高貴な黒ブドウで、よく「南のバローロ」と呼ばれる。主にカンパーニア（Taurasi DOCG）とバジリカータ（Aglianico del Vulture）の火山性土壌で栽培される。非常に多いタンニン＋非常に高い酸で、長期熟成が必要。',
      mainAreas: [
        { name: 'Taurasi DOCG（Campania）', note: '火山の影響を受けた丘陵、標高400〜700m、最も有名' },
        { name: 'Aglianico del Vulture（Basilicata）', note: '死火山ヴルトゥレ山の斜面。スペリオーレはDOCG' },
        { name: 'Cilento DOC', note: 'カンパーニア沿岸の版、より柔らかい' },
        { name: 'Irpinia DOC', note: 'カンパーニア内陸の日常のワイン' }
      ],
      cluster: '締まっている、果皮が厚い', ripening: '非常に晩熟（10月下旬〜11月）',
      soils: '火山岩、火山灰、凝灰岩', climate: '温暖だが標高が夜の冷え込みをもたらす',
      aromas: ['ブラックチェリー', '黒いプラム', 'なめし革', 'スモーク', '甘草', '黒胡椒', 'シガー', 'カカオ'],
      style: '色が濃く凝縮し、非常に力強いタンニン、非常に高い酸、フルボディ。若いうちは荒々しく閉じてタンニンが強くかみつく。なめし革、スモーク、甘草、シガーの複雑さが現れるまで8〜10年かかる。バローロやブルネッロと並び立つ数少ない「南の鋼の赤」。',
      ageing: 'タウラージ10〜25年、リゼルヴァ20年以上、トップワインは30年以上',
      pairings: ['仔羊のロースト（アニェッロ・アル・フォルノ）', 'ナポリのジェノヴェーゼ（玉ねぎと肉の煮込みソース）', '熟成したカチョカヴァッロ・ポドリコ', 'ジビエのグリル、牛肉の煮込み', '濃厚なトマトと肉のラグー'],
      examples: [
        { name: 'Mastroberardino（Radici）', note: 'タウラージの復興者、1878年創業' },
        { name: 'Feudi di San Gregorio', note: '現代のカンパーニアの基準' },
        { name: 'Paternoster（Don Anselmo）', note: 'アリアニコ・デル・ヴルトゥレの古典' },
        { name: 'Elena Fucci（Titolo）', note: 'ヴルトゥレの新世代の醸造家' }
      ]
    },
    montepulciano: {
      color_type: '黒ブドウ',
      tagline: '中部イタリアの力――ヴィーノ・ノビレと混同しないで！',
      italyRole: 'イタリアで最も広く栽培される黒ブドウのひとつ（約3万ヘクタール）で、主にアブルッツォ（Montepulciano d\'Abruzzo DOC、生産量が非常に多い）で栽培される。注意：「モンテプルチアーノ・ダブルッツォ」のモンテプルチアーノは品種名だが、トスカーナの「ヴィーノ・ノビレ・ディ・モンテプルチアーノ」のモンテプルチアーノは町の名前（サンジョヴェーゼで造る）！',
      mainAreas: [
        { name: 'Montepulciano d\'Abruzzo DOC', note: '主な舞台、日常の赤ワインの主力' },
        { name: 'Colline Teramane DOCG', note: 'アブルッツォ北部の高品質な産地' },
        { name: 'Conero DOCG（Marche）', note: 'マルケ沿岸のトップクラスの表現' },
        { name: 'Offida Rosso DOCG', note: 'マルケ南部' }
      ],
      cluster: '中くらいの大きさ、収量が多い', ripening: '晩熟（10月）',
      soils: '粘土、石灰岩', climate: '温暖、アブルッツォの山間部は夜が涼しい',
      aromas: ['ブラックベリー', 'プラム', 'ブラックチェリー', '甘草', '黒胡椒', 'なめし革'],
      style: '色が濃く、果実香が奔放で、タンニンは中程度、酸は中〜高め、フルボディ。ベーシックなものは日常向き（チェラスオーロ・ダブルッツォはそのロゼ版）。トップのコーネロ／コッリーネ・テラマーネは10〜20年熟成し、なめし革やスパイスの奥行きを帯びる。',
      ageing: 'ベーシック2〜5年、リゼルヴァ8〜15年、コーネロ10〜20年',
      pairings: ['羊肉の串焼き（アロスティチーニ、アブルッツォの名物）', 'トマトと肉のラグーの料理', 'スパゲッティ・アッラ・キタッラ（アブルッツォの手打ちパスタ）', 'ペコリーノ・ディ・ファリンドラ', '中程度に熟成したサラミ'],
      examples: [
        { name: 'Emidio Pepe', note: '自然派の先駆者、高い熟成力' },
        { name: 'Valentini', note: 'アブルッツォの伝説的なワイナリー' },
        { name: 'Masciarelli', note: '近代化の主力' },
        { name: 'Umani Ronchi（Cùmaro Conero）', note: 'マルケのコーネロの基準' }
      ]
    }
  }
}

export const GRAPE_PROFILE_CONTENT = { 'zh-TW': build(zh), en: build(en), ja: build(ja) }
