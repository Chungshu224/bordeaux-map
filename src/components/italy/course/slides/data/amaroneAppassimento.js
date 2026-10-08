// AmaroneAppassimentoSlide 的三語靜態內容（依目前語系選用）
const COLORS = [
  ['#3498db', '#5dade2'],
  ['#e67e22', '#f39c12'],
  ['#8e44ad', '#9b59b6'],
  ['#c0392b', '#e74c3c']
]
const PROCESS_META = [
  { weightLoss: 18, color: '#16a085', colorEnd: '#1abc9c' },
  { weightLoss: 25, color: '#f39c12', colorEnd: '#f5b041' },
  { weightLoss: 33, color: '#e67e22', colorEnd: '#eb984e' },
  { weightLoss: 38, color: '#c0392b', colorEnd: '#e74c3c' }
]
const NAMES = [
  ['①', 'Valpolicella Classico DOC'],
  ['②', 'Valpolicella Ripasso DOC'],
  ['③', 'Amarone della Valpolicella DOCG'],
  ['④', 'Recioto della Valpolicella DOCG']
]
const ABV = ['11–12.5%', '13–14%', '15–17%', '12–14%']

function build (lang) {
  return {
    ...lang,
    tiers: lang.tiers.map((t, i) => ({
      rank: NAMES[i][0], name: NAMES[i][1], abv: ABV[i],
      color: COLORS[i][0], colorEnd: COLORS[i][1], ...t
    })),
    process: lang.process.map((p, i) => ({ ...PROCESS_META[i], ...p }))
  }
}

const zh = {
  sep: '：',
  defaultTitle: '🌬️ Amarone 與 Appassimento 工藝深度',
  defaultDesc: '同樣的 Corvina 葡萄，因為「風乾」與「殘糖」的組合排列，在 Valpolicella 衍生出 4 種完全不同的酒款風格。',
  tierHeading: '🏔️ Valpolicella 四大酒款階梯',
  labels: { grapeState: '葡萄狀態', abv: '酒精度', sweetness: '殘糖', aging: '法定陳年', cellar: '陳年潛力', process: '🔬 釀造關鍵：', pairing: '🍽️ 配餐：' },
  processHeading: '🌬️ Appassimento 風乾流程（約 3-4 個月）',
  weightLoss: '失水',
  philHeading: '⚖️ 傳統派 vs 現代派釀造哲學',
  traditional: {
    header: '🔥 傳統派（極致濃郁）',
    items: [
      ['風乾期', '4-5 個月（失水 40% 左右）'],
      ['橡木桶', '大型 Botte（數千公升），長時間陳年'],
      ['風格', '極致濃縮、乾果、甘草、巧克力、酒精 16-17%'],
      ['代表', 'Quintarelli、Bertani、Masi']
    ]
  },
  modern: {
    header: '✨ 現代派（果香與新橡木）',
    items: [
      ['風乾期', '約 3 個月（失水 30-35%）'],
      ['橡木桶', '法國 Barrique（225L）等小型橡木桶'],
      ['風格', '果香飽滿、圓潤、橡木香氣明顯、酒精 15-16%'],
      ['代表', 'Allegrini、Zenato、Dal Forno Romano']
    ]
  },
  insightHeading: '💡 關鍵洞察',
  insight: 'Recioto 才是<strong>始祖</strong>（歷史悠久的甜紅酒）；相傳 Amarone 源於一桶「<em>發酵沒有停下來</em>」的 Recioto——殘糖完全轉化為高酒精的乾型酒，1950 年代起才以 Amarone 之名上市。Ripasso 技法則由 Masi 於 1964 年以 Campofiorin 推廣：將 Valpolicella 倒入剛榨完的 Amarone 酒渣上二次發酵，零浪費地獲得濃縮度，被稱為「<strong>Baby Amarone</strong>」。',
  tiers: [
    { tagline: '輕盈日常款', grapeState: '新鮮葡萄直接釀造', sweetness: '乾型', aging: '無強制要求', cellar: '2–5 年', process: '採收後破皮、發酵，以不鏽鋼槽短期陳年，保留 Corvina 的櫻桃酸度與紫羅蘭花香。', pairing: '披薩、義大利麵、輕燉肉、Pecorino 起司' },
    { tagline: 'Baby Amarone', grapeState: '新鮮葡萄釀成的酒 + 倒入剛榨完的 Amarone 酒渣', sweetness: '乾型', aging: '採收次年 1 月 1 日後上市；Superiore 須陳年 1 年', cellar: '5–10 年', process: '完成發酵的 Valpolicella 倒入 Amarone 剛壓榨完的酒渣上，啟動短暫的二次發酵，萃取殘留糖分、單寧與風味。', pairing: '肉醬義大利麵、烤豬肉、Parmigiano（30-36 個月）' },
    { tagline: '風乾乾型旗艦', grapeState: '葡萄風乾約 3-4 個月（失水 30-40%）', sweetness: '乾型（但圓潤感強）', aging: '至少 2 年（Riserva 4 年）', cellar: '10–30 年', process: '採收後挑選最健康果串置於 Fruttaio 風乾室，自然失水約 3-4 個月。緩慢低溫長時間發酵，糖分幾乎完全轉化為高酒精乾型酒。', pairing: '燉牛肉（Brasato all\'Amarone）、野味、陳年 Parmigiano、黑松露' },
    { tagline: '甜紅酒始祖', grapeState: '葡萄風乾約 3-4 個月（與 Amarone 相同）', sweetness: '甜型（殘糖明顯）', aging: '至少 1 年', cellar: '15–30 年', process: '與 Amarone 同樣風乾，但在糖分轉化完成「之前」中止發酵（降溫或加 SO₂），保留大量殘糖。', pairing: '黑巧克力甜點、藍紋起司（Gorgonzola Piccante）、堅果塔、Pandoro' }
  ],
  process: [
    { month: '第 1 個月', title: '初期蒸散', detail: '果皮起皺、表面水分蒸發、糖度開始上升' },
    { month: '第 2 個月', title: '緩慢濃縮', detail: '糖分 / 多酚 / 甘油濃縮，定期巡視防止灰黴病' },
    { month: '第 3 個月', title: '化學變化', detail: '產生新風味化合物（乾果、香料、可可），酸度保持' },
    { month: '第 4 個月', title: '達到目標', detail: '失水 30-40%，糖度大幅濃縮，準備破皮發酵' }
  ]
}

const en = {
  sep: ': ',
  defaultTitle: '🌬️ Amarone and the Art of Appassimento',
  defaultDesc: 'The same Corvina grapes, combined in different ways through "drying" and "residual sugar", give rise to four completely different wine styles in Valpolicella.',
  tierHeading: '🏔️ The Four-Step Ladder of Valpolicella Wines',
  labels: { grapeState: 'Grapes', abv: 'Alcohol', sweetness: 'Residual sugar', aging: 'Legal ageing', cellar: 'Ageing potential', process: '🔬 Winemaking key: ', pairing: '🍽️ Pairing: ' },
  processHeading: '🌬️ The Appassimento Drying Process (about 3-4 months)',
  weightLoss: 'Weight loss',
  philHeading: '⚖️ Traditional vs Modern Winemaking Philosophies',
  traditional: {
    header: '🔥 Traditional (maximum concentration)',
    items: [
      ['Drying', '4-5 months (around 40% weight loss)'],
      ['Casks', 'Large botti (thousands of litres), long ageing'],
      ['Style', 'Highly concentrated, dried fruit, liquorice, chocolate, 16-17% alcohol'],
      ['Producers', 'Quintarelli, Bertani, Masi']
    ]
  },
  modern: {
    header: '✨ Modern (fruit and new oak)',
    items: [
      ['Drying', 'About 3 months (30-35% weight loss)'],
      ['Casks', 'French barriques (225 L) and other small oak'],
      ['Style', 'Generous fruit, round, noticeable oak, 15-16% alcohol'],
      ['Producers', 'Allegrini, Zenato, Dal Forno Romano']
    ]
  },
  insightHeading: '💡 Key Insight',
  insight: 'Recioto is the <strong>original</strong> (a sweet red with a long history); legend has it that Amarone came from a cask of Recioto that "<em>kept on fermenting</em>" — all the sugar turned into a high-alcohol dry wine — and it has been sold under the Amarone name since the 1950s. The ripasso technique was popularised by Masi in 1964 with Campofiorin: Valpolicella is poured over freshly pressed Amarone pomace for a second fermentation, gaining concentration with zero waste — hence the nickname "<strong>Baby Amarone</strong>".',
  tiers: [
    { tagline: 'Light everyday wine', grapeState: 'Made from fresh grapes', sweetness: 'Dry', aging: 'No minimum requirement', cellar: '2–5 years', process: 'Crushed and fermented after harvest, with a short stay in stainless steel, keeping Corvina\'s cherry acidity and violet aromas.', pairing: 'Pizza, pasta, light braises, Pecorino' },
    { tagline: 'Baby Amarone', grapeState: 'Wine from fresh grapes + freshly pressed Amarone pomace', sweetness: 'Dry', aging: 'Released after 1 January of the year after harvest; Superiore aged 1 year', cellar: '5–10 years', process: 'Fully fermented Valpolicella is poured over freshly pressed Amarone pomace, triggering a short second fermentation that extracts remaining sugar, tannin and flavour.', pairing: 'Pasta with meat sauce, roast pork, Parmigiano (30-36 months)' },
    { tagline: 'Dried-grape dry flagship', grapeState: 'Grapes dried for about 3-4 months (30-40% weight loss)', sweetness: 'Dry (but round)', aging: 'At least 2 years (Riserva 4 years)', cellar: '10–30 years', process: 'The healthiest bunches are dried in the fruttaio for about 3-4 months; a long, slow, cool fermentation turns almost all the sugar into a high-alcohol dry wine.', pairing: 'Braised beef (brasato all\'Amarone), game, aged Parmigiano, black truffle' },
    { tagline: 'The original sweet red', grapeState: 'Grapes dried for about 3-4 months (as for Amarone)', sweetness: 'Sweet (clearly residual sugar)', aging: 'At least 1 year', cellar: '15–30 years', process: 'Dried like Amarone, but fermentation is stopped "before" all the sugar is converted (by chilling or adding SO₂), keeping plenty of residual sugar.', pairing: 'Dark chocolate desserts, blue cheese (Gorgonzola Piccante), nut tarts, Pandoro' }
  ],
  process: [
    { month: 'Month 1', title: 'Initial evaporation', detail: 'Skins wrinkle, surface water evaporates, sugar starts to rise' },
    { month: 'Month 2', title: 'Slow concentration', detail: 'Sugar / polyphenols / glycerol concentrate; regular checks against grey rot' },
    { month: 'Month 3', title: 'Chemical change', detail: 'New flavour compounds form (dried fruit, spice, cocoa) while acidity is kept' },
    { month: 'Month 4', title: 'Target reached', detail: '30-40% weight loss, sugar highly concentrated, ready for crushing and fermentation' }
  ]
}

const ja = {
  sep: '：',
  defaultTitle: '🌬️ アマローネとアパッシメントの技を深く知る',
  defaultDesc: '同じコルヴィーナのブドウでも、「陰干し」と「残糖」の組み合わせ方によって、ヴァルポリチェッラでは4つのまったく異なるスタイルのワインが生まれます。',
  tierHeading: '🏔️ ヴァルポリチェッラの4つのワインの階段',
  labels: { grapeState: 'ブドウの状態', abv: 'アルコール度数', sweetness: '残糖', aging: '法定熟成', cellar: '熟成ポテンシャル', process: '🔬 醸造のポイント：', pairing: '🍽️ ペアリング：' },
  processHeading: '🌬️ アパッシメント（陰干し）の流れ（約3〜4か月）',
  weightLoss: '水分減少',
  philHeading: '⚖️ 伝統派 vs モダン派の醸造哲学',
  traditional: {
    header: '🔥 伝統派（究極の凝縮）',
    items: [
      ['陰干し期間', '4〜5か月（水分減少40%前後）'],
      ['樽', '大樽ボッテ（数千リットル）で長期熟成'],
      ['スタイル', '極めて凝縮、ドライフルーツ、甘草、チョコレート、アルコール16〜17%'],
      ['代表', 'Quintarelli、Bertani、Masi']
    ]
  },
  modern: {
    header: '✨ モダン派（果実味と新樽）',
    items: [
      ['陰干し期間', '約3か月（水分減少30〜35%）'],
      ['樽', 'フレンチ・バリック（225L）などの小樽'],
      ['スタイル', '豊かな果実味、丸み、はっきりした樽香、アルコール15〜16%'],
      ['代表', 'Allegrini、Zenato、Dal Forno Romano']
    ]
  },
  insightHeading: '💡 重要なポイント',
  insight: 'レチョートこそが<strong>元祖</strong>（長い歴史を持つ甘口の赤）です。アマローネは「<em>発酵が止まらなかった</em>」レチョートの樽から生まれたと伝えられ――糖分がすべて高アルコールの辛口ワインに変わり――1950年代からアマローネの名で販売されるようになりました。リパッソの技法はマァジが1964年にカンポフィオリンで広めたもので、ヴァルポリチェッラを搾りたてのアマローネの搾りかすに注いで二次発酵させ、無駄なく凝縮度を得るため「<strong>ベビー・アマローネ</strong>」と呼ばれます。',
  tiers: [
    { tagline: '軽やかな日常のワイン', grapeState: '新鮮なブドウをそのまま醸造', sweetness: '辛口', aging: '義務なし', cellar: '2〜5年', process: '収穫後に破砕・発酵し、ステンレスタンクで短期間熟成。コルヴィーナのサクランボの酸とスミレの香りを保つ。', pairing: 'ピッツァ、パスタ、軽い煮込み、ペコリーノ' },
    { tagline: 'ベビー・アマローネ', grapeState: '新鮮なブドウのワイン＋搾りたてのアマローネの搾りかす', sweetness: '辛口', aging: '収穫翌年の1月1日以降に出荷。スペリオーレは1年熟成', cellar: '5〜10年', process: '発酵を終えたヴァルポリチェッラを、アマローネを搾ったばかりの搾りかすに注いで短い二次発酵を起こし、残った糖分、タンニン、風味を抽出する。', pairing: 'ミートソースのパスタ、ローストポーク、パルミジャーノ（30〜36か月）' },
    { tagline: '陰干しの辛口の旗艦', grapeState: 'ブドウを約3〜4か月陰干し（水分減少30〜40%）', sweetness: '辛口（ただし丸みが強い）', aging: '最低2年（リゼルヴァ4年）', cellar: '10〜30年', process: '収穫後に最も健全な房を選んでフルッタイオ（陰干し小屋）で約3〜4か月自然に水分を減らす。低温でゆっくり長期間発酵させ、糖分をほぼすべて高アルコールの辛口ワインに変える。', pairing: '牛肉の煮込み（ブラザート・アッラマローネ）、ジビエ、熟成パルミジャーノ、黒トリュフ' },
    { tagline: '甘口の赤の元祖', grapeState: 'ブドウを約3〜4か月陰干し（アマローネと同じ）', sweetness: '甘口（はっきりした残糖）', aging: '最低1年', cellar: '15〜30年', process: 'アマローネと同じく陰干しするが、糖分が変わりきる「前」に発酵を止め（冷却またはSO₂添加）、多くの残糖を残す。', pairing: 'ダークチョコレートのデザート、青カビチーズ（ゴルゴンゾーラ・ピカンテ）、ナッツのタルト、パンドーロ' }
  ],
  process: [
    { month: '1か月目', title: '初期の蒸散', detail: '果皮にしわが寄り、表面の水分が蒸発し、糖度が上がり始める' },
    { month: '2か月目', title: 'ゆっくりとした凝縮', detail: '糖分／ポリフェノール／グリセリンが凝縮。灰色カビ病を防ぐため定期的に見回る' },
    { month: '3か月目', title: '化学的な変化', detail: '新たな風味成分（ドライフルーツ、スパイス、カカオ）が生まれ、酸は保たれる' },
    { month: '4か月目', title: '目標に到達', detail: '水分減少30〜40%、糖分が大きく凝縮し、破砕・発酵の準備が整う' }
  ]
}

export const AMARONE_CONTENT = { 'zh-TW': build(zh), en: build(en), ja: build(ja) }
