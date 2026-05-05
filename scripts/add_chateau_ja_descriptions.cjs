/**
 * Adds description_ja + rank_ja to all château coordinate JSON files.
 * Run: node scripts/add_chateau_ja_descriptions.cjs
 */
const fs = require('fs'), path = require('path')
const dir = path.join(__dirname, '..', 'public', 'chateaux')

// ---- rank_en → rank_ja ----
const RANK_JA = {
  'Premier Cru Classé':                         'プルミエ・クリュ・クラッセ',
  'Deuxième Cru Classé':                        'ドゥジェム・クリュ・クラッセ',
  'Distinguished Barsac Estate':                'バルサック 優良シャトー',
  'Premier Grand Cru Classé (Graves)':          'プルミエ・グラン・クリュ・クラッセ（グラーヴ）',
  'Grand Cru Classé de Graves':                 'グラン・クリュ・クラッセ・ド・グラーヴ',
  '5th Growth (Grand Cru Classé 1855)':         '1855年 第5級格付け',
  '4th Growth (Grand Cru Classé 1855)':         '1855年 第4級格付け',
  'Cru Bourgeois Exceptionnel':                 'クリュ・ブルジョワ・エクセプショネル',
  'Cru Bourgeois':                              'クリュ・ブルジョワ',
  '1st Growth (Premier Grand Cru Classé 1855)': '1855年 第1級格付け',
  '2nd Growth (Deuxième Grand Cru Classé 1855)':'1855年 第2級格付け',
  '3rd Growth (Troisième Grand Cru Classé 1855)':'1855年 第3級格付け',
  '1855 Premier Grand Cru Classé':              '1855年 プルミエ・グラン・クリュ・クラッセ',
  '1st Growth 1855 / Classified Graves Growth': '1855年 第1級 / グラーヴ格付けシャトー',
  'Crus Classés de Graves':                     'クリュ・クラッセ・ド・グラーヴ',
  'Top Pomerol Estate':                         'ポムロール 最高峰シャトー',
  'Distinguished Pomerol Estate':               'ポムロール 優良シャトー',
  'Premier Cru Supérieur 1855':                 '1855年 プルミエ・クリュ・スュペリウール',
  'Premier Cru Classé 1855':                    '1855年 プルミエ・クリュ・クラッセ',
  'Deuxième Cru Classé 1855':                   '1855年 ドゥジェム・クリュ・クラッセ',
  'Premier Grand Cru Classé A':                 'プルミエ・グラン・クリュ・クラッセ A',
  'Premier Grand Cru Classé B':                 'プルミエ・グラン・クリュ・クラッセ B',
  'Saint-Émilion Grand Cru Classé':             'サン・テミリオン グラン・クリュ・クラッセ',
  'Distinguished Saint-Estèphe Estate':         'サン・テステフ 優良シャトー',
}

// ---- Japanese descriptions keyed by château name ----
const JA = {
  // Barsac
  'Château Coutet':         'バルサック第一特等格付けの一つ。長年にわたり高品質な貴腐甘口白ワインを生産し続ける歴史的名シャトー。',
  'Château Climens':        'バルサック第一特等格付け。繊細で上品なスタイルから「バルサックの女王」とも称される。',
  'Château Doisy-Daëne':    '純粋で洗練された貴腐甘口白ワインで名高い、長い歴史を持つ家族経営のシャトー。',
  'Château Doisy-Védrines': 'バルサック最大の第二特等格付け。豊かなボディと優れた熟成ポテンシャルが特徴。',
  'Château de Myrat':       '優雅で上品なスタイルを持つ歴史あるバルサックのシャトー。',
  'Château Nairac':         '繊細でエレガントな甘口白ワインと高い熟成力で知られる。',
  'Château Gravas':         'フレッシュで洗練されたバランスの取れた甘口ワインを生む家族経営の第二特等格付けシャトー。',
  'Château Caillou':        '伝統的な製法を守り、バルサック特有のエレガンスとフレッシュさを体現した甘口白ワイン。',
  'Château Simon':          '純粋で安定した甘口白ワインを生産する小規模家族経営シャトー。',

  // Graves
  'Château Haut-Brion':             'ボルドー五大シャトーの一つで、1855年格付けとグラーヴ格付け双方に名を連ねる唯一のシャトー。赤白ともに国際的に高い評価を得る。',
  'Château Pape Clément':           '13世紀に起源を持つ歴史的名シャトー。フルボディで熟成力に優れた赤白ワインを生産する。',
  'Château La Mission Haut-Brion':  'オー・ブリオンと並ぶ存在で、リッチで複雑な赤ワインで名高い。白ワインの生産量は極めて少ない。',
  'Château Carbonnieux':            '赤白ともに名高い格付けシャトー。白はフレッシュでエレガント、赤はしっかりとした骨格を持つ。',
  'Château Smith Haut Lafitte':     '近代的な経営により品質が飛躍的に向上。赤白ともに国際的に高い評価を受ける。',
  'Château Malartic-Lagravière':    '赤白双方が格付けされた数少ないシャトー。白はその繊細さと優雅さで特に評価が高い。',
  'Château Olivier':                '赤白ともに生産する格付けシャトー。白はとりわけ優雅なスタイルで高評価。',
  'Château Latour-Martillac':       '赤白ともに代表的な格付けシャトー。白はフローラルでミネラル感が際立つ。',
  'Château Bouscaut':               '赤白ともに格付けされ、白は丸みのある豊かなスタイル、赤はしっかりとした骨格を持つ。',

  // Haut-Médoc
  'Château Belgrave':       'オー＝メドック南部に位置し、バランスの取れた果実味豊かなワインを生産する。',
  'Château Camensac':       '滑らかなタンニンとバランスの良さで知られる、コストパフォーマンスに優れたオー＝メドック。',
  'Château La Tour Carnet': '中世の塔が残る歴史的なシャトー。リッチでしっかりとした骨格のワインを生む。',
  "Château d'Agassac":      'リュドン＝メドックの中世の城を持つ歴史的シャトー。クリュ・ブルジョワ・エクセプショネル認定。',
  'Château Arnauld':        'アルサン村の小規模シャトー。2020年にエクセプショネル最高格付けを獲得した実力派。',
  'Château Belle-Vue':      'マコー産。プティ・ヴェルドの高比率がスパイシーで複雑なキャラクターを生む。エクセプショネル認定。',
  'Château Cambon La Pelouse':'マコー産。近年目覚ましい品質向上を遂げ、フルーティで親しみやすいスタイルのエクセプショネル。',
  'Château Charmail':       'サン・セラン＝ド＝カドゥルヌに位置し、サン＝テステフに近い石灰・粘土の良質な土壌を持つ。',
  'Château de Malleret':    'ル・ピアン＝メドックの広大なシャトーで乗馬センターとしても著名。洗練されたエクセプショネル。',
  'Château du Taillan':     'ル・タイヤン＝メドック近郊の歴史的建造物指定シャトー。赤白両方を生産する稀なエクセプショネル。',

  // Listrac
  'Château Clarke':         'ロスチャイルド家が所有し、近代的な管理のもとで安定した品質を維持する。',
  'Château Fourcas Dupré':  '伝統的でしっかりとした骨格のスタイルを守る家族経営のシャトー。',
  'Château Fourcas-Hosten': 'バランスの取れたスタイルと安定した品質でコストパフォーマンスが高い。',
  'Château Lestage':        'リストラック＝メドック最高地点に位置する壮麗なナポレオン3世様式のシャトー。黒果実とペッパーの香りが豊かなミドルウェイトスタイル。',

  // Margaux
  'Château Margaux':                 'ボルドー五大シャトーの一つ、マルゴーAOCを代表する頂点的存在。最高のエレガンスと驚異的な熟成力を誇る。',
  'Château Rauzan-Ségla':            'マルゴー最高峰の第二特等格付けの一つ。繊細で洗練されたスタイルを体現する。',
  'Château Lascombes':               'リッチで果実豊かなキャラクターと構造的な深みで知られ、熟成とともに複雑な層を形成する。',
  'Château Brane-Cantenac':          '繊細なタンニンとフローラルなノートで名高いマルゴーの代表的シャトー。',
  'Château Palmer':                  '第三特等格付けながら第一特等に匹敵する品質。リッチで豊潤かつ驚異的な熟成力を持つ。',
  "Château d\u2019Issan":            'エレガンスと繊細さ、フローラルな香りで名高い歴史あるマルゴーのシャトー。',
  'Château Kirwan':                  '果実豊かでしっかりとした骨格を持ち、中〜長期熟成に最適なスタイル。',
  'Château Cantenac-Brown':          '豊かな果実感とタンニンの骨格で知られるモダンスタイルのシャトー。',
  'Château Marquis de Terme':        '果実とタンニンのバランスに優れた信頼性の高いマルゴー。',
  'Château Boyd-Cantenac':           'リッチでフルボディ、しっかりとしたタンニン。熟成により優雅な複雑さを発揮する。',
  'Château Cantemerle':              'オー＝メドック最南端に位置し、エレガントで洗練されたフルーティなスタイルが特徴。',
  'Château Durfort-Vivens':          '歴史あるマルゴーの第二特等格付けで、エレガントで洗練されたワインを生む。',
  'Château Giscours':                'フルボディでしっかりとした骨格。近代的な経営のもと品質が着実に向上している。',
  'Château Malescot Saint-Exupéry':  'フローラルなキャラクターとエレガントなタンニンでマルゴーらしさを体現する。',
  'Château Pouget':                  '豊かでタンニン感の強いワインを生産する小規模なブティックシャトー。',
  'Château Prieuré-Lichine':         '果実豊かで親しみやすく、若いうちから楽しめるスタイル。',
  'Château Rauzan-Gassies':          'ロザン＝セグラと同じ起源を持つ歴史あるマルゴーの第二特等格付け。',
  'Château Desmirail':               '復活を遂げた第三特等格付けで、繊細で洗練されたキャラクターを発揮。',
  'Château Ferrière':                '繊細でエレガントなワインを生む小規模なブティックシャトー。',
  "Château Marquis d\u2019Alesme Becker": '小規模で繊細かつエレガントな第三特等格付けシャトー。',
  'Château du Tertre':               'アルサックに位置し、テロワールの個性を体現した第五特等格付け。',
  'Château Dauzac':                  'ラバルドに拠点を置き、近年着実に品質を向上させている。',
  "Château d\u2019Arsac":            'マルゴーAOC南部に位置し、現代アートと伝統的醸造を組み合わせた稀なエクセプショネル。',
  'Château Paveil de Luze':          '家族経営のマルゴーシャトーで、シルクのように滑らかなタンニンが特徴の稀なエクセプショネル。',

  // Moulis
  'Château Chasse-Spleen': 'ムーリスのベンチマーク的シャトー。格付け並みの品質のリッチで秀逸なワインを生産する。',
  'Château Maucaillou':    '家族経営の優良シャトー。バランスの取れた果実豊かなスタイルが特徴。',
  'Château Poujeaux':      'ムーリスのトップシャトー。力強いスタイルで優れた熟成ポテンシャルを持つ。',

  // Pauillac
  'Château Lafite Rothschild':    'ボルドー五大シャトーの一つ、ポイヤックを代表する頂点的存在。最高のエレガンスと驚異的な熟成力を誇る。',
  'Château Latour':               '豊かな骨格と圧倒的な熟成力で名高い。ポイヤックで最も力強い第一特等格付けシャトー。',
  'Château Mouton Rothschild':    '1973年に第一特等格付けに昇格。芸術家デザインのラベルと豊潤なスタイルで世界的に名高い。',
  'Château Pichon Baron':         'ポイヤックを代表する第二特等格付けの一つ。リッチなボディとしっかりとした骨格を持つ。',
  'Château Pichon Lalande':       '女性的なエレガンスと繊細さで名高い、魅力あふれる第二特等格付け。',
  'Château Pontet-Canet':         'オーガニック・ビオディナミ農法の先駆者。近年品質が急上昇し、第二特等格付けに匹敵する評価を受ける。',
  'Château Lynch-Bages':          '豊かな果実感と骨格で知られ、コレクターに高く評価される。',
  'Château Grand-Puy-Lacoste':    'クラシックスタイルとコストパフォーマンスの高さで知られるポイヤック随一の第五特等格付け。',
  'Château Batailley':            'しっかりとした骨格と熟成ポテンシャルで知られる伝統的スタイルのポイヤック。',
  'Château Haut-Batailley':       'バタイエ家の分家。洗練されたエレガントなスタイルで着実に品質を向上させている。',
  'Château Clerc Milon':          'ロスチャイルド家所有。リッチなスタイルで果実豊かなワインを生産する。',
  'Château Croizet-Bages':        'しっかりとした骨格と豊富なタンニン。長期熟成向きのスタイル。',
  "Château d'Armailhac":          'ムートン・ロートシルトの隣に位置し、エレガントなスタイルとコストパフォーマンスが魅力。',
  'Château Duhart-Milon':         'ラフィット・ロートシルトの姉妹シャトー。洗練されたエレガントなスタイルを持つ。',
  'Château Grand-Puy Ducasse':    'クラシックなスタイルと良好な骨格を持つ信頼性の高い第五特等格付け。',
  'Château Haut-Bages-Libéral':   'リッチで果実豊か。近年品質が著しく向上している。',
  'Château Lynch-Moussas':        'バランスの取れた親しみやすいスタイル。コストパフォーマンスに優れたポイヤック。',
  'Château Pédesclaux':           '近代的経営のもと急速に品質が向上。リッチでフルボディなスタイルへと進化している。',

  // Pessac-Léognan
  'Domaine de Chevalier':       'グラーヴ格付けの最高峰の一つ。「ドメーヌ」の名称ながら格付けトップクラスに位置し、赤白双方が傑出している。',
  'Château Haut-Bailly':        '高台に植えられた葡萄から厳格でシュプレム・エレガントな赤ワインを生産。グラーヴ随一との評価も高い。',
  'Château de Fieuzal':         '赤はグラーヴ格付けに選ばれ実力十分。格付け外の白も同様に傑出しており、豊かで複雑なスタイル。',
  'Château La Tour Haut-Brion': 'かつての格付けシャトー。2005年にラ・ミッション・オー・ブリオンに吸収され、旧ラベルのボトルは今やコレクターズアイテム。',
  'Château Couhins':            'INRA（フランス農業研究機構）所有。卓越した白ワインでグラーヴ格付けに選ばれた。',
  'Château Couhins-Lurton':     'クーアンから分離し、アンドレ・ルルトン家が管理。100% ソーヴィニョン・ブランの格付け白ワインを生産する。',
  'Château Laville Haut-Brion': '伝説的な白ワイン（グラーヴ白ワイン格付け）で名高い。2009年よりシャトー・ラ・ミッション・オー・ブリオン・ブランに改称。',

  // Pomerol
  'Château Pétrus':            '世界で最も有名なポムロールのシャトー。100%メルロー、圧倒的なコレクタビリティと熟成ポテンシャルを誇る。',
  'Château Lafleur':           '極めて少量生産。リッチで複雑なスタイルはペトリュスに並ぶ伝説的なポムロール。',
  'Château Le Pin':            '超少量生産のマイクロシャトー。希少で高価、リッチで洗練されたスタイル。',
  'Château Trotanoy':          '骨格のしっかりとしたキャラクターと熟成ポテンシャルで知られる、ポムロールを代表するクラシックシャトー。',
  'Château La Conseillante':   '優雅で洗練されたメルロー主体のスタイル。しばしばスミレのアロマが感じられる。',
  "Château L'Évangile":        'ラフィット＝ロートシルトグループ傘下。リッチでシルキーなタンニン、熟成後は傑出した複雑さを発揮。',
  'Château Clinet':            '豊かな果実感としっかりとした骨格。近年品質が劇的に向上している。',
  'Château Gazin':             'ペトリュス隣接のシャトー。バランスの取れたスタイルはポムロールのトップシャトーとしてコスパも高い。',
  'Château Nénin':             'ドロン家が経営するモダンスタイル。表現力豊かな果実感と優れた熟成ポテンシャルを持つ。',
  'Château Petit-Village':     'プラトー中心部に位置しAXAミレジム管理。深い砂利が覆う三角形の畑から豊潤なスタイルのワインを生む。',
  'Château Certan de May':     'プラトーの核心部でラフルールとペトリュスの隣に位置する。深く伝統的なスタイルで長期熟成力を持つ。',
  'Château Hosanna':           'かつてのセルタン＝ジロー。ムエックス家がプラトー最高の土地を取得。ブレンドに古樹カベルネ・フランを使用。',
  'Château Latour à Pomerol':  '極めて多様な土壌。エレガントかつ力強く、1961年ヴィンテージは伝説的なボルドーの一本として語り継がれる。',

  // Sauternes
  "Château d'Yquem":       '世界最高の貴腐甘口白ワインシャトー。唯一のプルミエ・クリュ・スュペリウールであり、その品質と熟成力は比類なき存在。',
  'Château Suduiraut':     'ソーテルヌ第一特等格付けの一つ。リッチで蜂蜜のように甘く、複雑な重なりを持つ甘口白ワイン。',
  'Château Guiraud':       'オーガニック栽培で名高い。複雑なアロマと洗練されたパレット。',
  'Château Rieussec':      'ラフィット＝ロートシルトグループ傘下。リッチで甘口な白ワインは優れた熟成ポテンシャルを持つ。',
  'Château La Tour Blanche':'蜂蜜とアプリコットのアロマを持ち、甘みと酸のバランスが取れたリッチな甘口白ワイン。',
  'Château Filhot':        '歴史ある第二特等格付け。洗練されたエレガントな甘口白ワインを生む。',

  // St-Émilion Grand Cru
  'Château Cheval Blanc':   'サン＝テミリオン最名声高いクラスAシャトーの一つ。メルローとカベルネ・フランのブレンドから生まれる、エレガントで洗練され驚異的な熟成力を持つワイン。',
  'Château Ausone':         '極めて少量生産。リッチで複雑なスタイルはシュヴァル・ブランに並ぶ伝説的なサン＝テミリオン。',
  'Château Pavie':          '凝縮した骨格と圧倒的な熟成力で名高いモダンスタイルのクラスAシャトー。',
  'Château Angélus':        'エレガントな洗練さで知られ、クラスAに昇格。鐘のモチーフのラベルが世界的に有名。',
  'Château Figeac':         '2022年クラスAに昇格。カベルネ・フランの比率が高く、熟成力に優れたエレガントなワインを生む。',
  'Château Canon':          'サン＝テミリオン村の中心部に位置。洗練されたエレガントなスタイルで近年品質が大幅に向上。',
  'Château La Gaffelière':  '歴史あるクラスBシャトー。バランスの取れたスタイルで優れた熟成実績を持つ。',
  'Château Troplong Mondot': '高台に位置し、リッチでフルボディ。強力なタンニン構造と優れた熟成ポテンシャルを持つ。',
  'Château Valandraud':     '右岸のガレージワインの代表格。モダンスタイルで果実豊かかつ着実に品質向上中。',
  'Château Badette':        '石灰岩プラトー上のメルロー主体のシャトー。ミネラル感のある丸みを帯びた赤ワインを生産。',
  'Château Balestard La Tonnelle': '北東プラトーの古木。フルボディで果実豊か、しっかりとしたタンニン構造を持つ歴史的シャトー。',
  'Château Barde-Haut':     'サン・クリストフの丘の北斜面で日当たりが良く、メルローが優雅で丸みのある個性を発揮。近年著しく品質向上。',
  'Château Bellefont-Belcier': 'サン＝ローラン斜面の石灰岩土壌。洗練されたフローラルなキャラクターのメルロー＋カベルネ・フランブレンド。',
  'Château Bellevue':       'プラトー西部で眺望が開けた地。メルロー主体、柔らかく丸みのある早飲みスタイル。',
  'Château Berliquet':      'プラトー西斜面の粘土石灰岩土壌。繊細なタンニンと豊かな果実感。',
  'Château Boutisse':       '北東プラトーの開けた土地。高いメルロー比率で果実感豊か、滑らかなタンニンと飲みやすいスタイル。',
  'Château Cadet-Bon':      '北プラトーの石灰岩テラス。バランスの取れたメルロー＋カベルネ・フランで引き締まりフレッシュ。',
  'Château Cap de Mourlin': '北東プラトーの古木メルロー。深い色調、リッチな果実感と良好な複雑さ。',
  'Château Chauvin':        '北西の砂質粘土の丘。メルロー主体でフルーティ。ビオディナミ農法を採用。',
  'Clos de Sarpe':          '石灰岩プラトーの小規模ブティックシャトー。古木メルローからリッチで丸みのあるワインを少量生産。',
  'Château Corbin':         'ポムロール境界の砂質粘土。メルロー主体でフルボディ、早熟なスタイル。',
  'Château Corbin Michotte': 'ポムロール境界の粘土砂利。メルロー＋カベルネ・フランのやわらかな果実感。',
  'Château Côte de Baleau': '粘土石灰岩の南西向き斜面。独特のミネラル感と洗練された骨格を持ち、修道院と姉妹シャトー関係にある。',
  'Château Croix de Labrie': '北斜面の小規模ブティックシャトー。オーガニック農法でメルロー主体、エレガントでミネラル感がある。',
  'Clos Badon Thunevin':    'オーゾンヌの東斜面に隣接する粘土石灰岩の区画。豊かで丸みのあるメルロー主体。著名醸造家ジャン＝リュック・テュヌヴァン手掛けるシャトー。',
  "Clos de l'Oratoire":     '石灰岩の北東向き礼拝堂プラトー。フォン・ナイペルク家管理のメルロー＋カベルネ・フランブレンド。',
  'Clos des Jacobins':      '市街地中心部の密な石灰岩上の古い葡萄畑。メルロー主体の歴史的シャトーで洗練されたエレガンス。',
  'Château Dassault':       'プラトー中央の大規模シャトー。高いメルロー比率で現代的技術を駆使した果実豊かで丸みのあるワイン。',
  'Château de Ferrand':     '比較的平坦な砂質粘土の東フェラン。柔らかくエレガントなメルロー。',
  'Château de Pressac':     '南東ヴィニョネの丘。百年戦争終戦の和平が署名された歴史的地。近年の改革で品質が飛躍的に向上。',
  'Château Destieux':       '粘土石灰岩の南東斜面。メルロー主体でリッチで深みのある果実感と良好な熟成ポテンシャル。',
  'Château Faugères':       'カスティヨンに近い最東端の大規模シャトー。建築家ポルツァンパルクが設計したモダンワイナリーで安定した実力派。',
  'Château Fleur Cardinale': 'サン＝テティエンヌの東斜面、粘土砂利土壌。純粋なメルロー主体で近年品質が大幅に向上。',
  'Château Fombrauge':      'サン・クリストフの大規模シャトー、粘土石灰岩。メルロー主体で豊かな果実感。ベルナール・マグレ所有。',
  'Château Fonplégade':     'プラトー中心部の古い泉にちなんで命名。ビオディナミ農法、メルロー主体で洗練された深みのあるワイン。',
  'Château Fonroque':       '北西プラトーの石灰岩。メルロー主体でオーガニック農法。しっかりとした骨格とミネラル感。',
  'Château Franc Mayne':    '石灰岩の西プラトー。高いメルロー比率で丸みのある豊かなワインと繊細なタンニン。',
  'Château Grand Corbin':   'ポムロール隣接の北西砂利テラス。メルロー主体で滑らかな果実感と丸みのあるスタイル。',
  'Château Grand Corbin-Despagne': '北西の砂利地形。オーガニック農法でメルロー主体、近代的醸造により近年高評価を獲得。',
  'Château Grand Mayne':    '西プラトーの石灰岩。高いメルロー比率で古木由来の凝縮感。美しいフランス田舎の城館が印象的。',
  'Château Guadet':         '古い石灰岩の北プラトー。バランスの取れたメルロー＋カベルネ・フランで洗練されたエレガンス。新世代のブティックシャトー。',
  'Château Haut-Sarpe':     'サン＝クリストフの北東斜面、粘土石灰岩。メルロー主体で豊かな果実感。ジャヌアン家が管理。',
  'Château Jean Faure':     'シュヴァル・ブランの西隣の砂利土壌。高いカベルネ・フラン比率でエレガントかつ鮮明なフローラルノート。',
  'Château La Commanderie': '西のポムロール境界の砂質粘土。メルロー主体で柔らかく丸みのある。歴史的な騎士団の司令部があった場所。',
  'Château La Confession':  '北西の粘土砂利。ガレージワインスタイルでメルロー主体の極少量生産、強烈にリッチで凝縮。',
  'Château La Couspaude':   '東の石灰岩プラトー。メルロー主体でオベール家が管理する豊かなスタイル。品質が向上している。',
  'Château La Croizille':   '石灰岩の北東斜面。小規模ブティックシャトーでメルロー主体、鮮明な果実感を持つ新星。',
  'Château La Dominique':   'シュヴァル・ブランとペトリュスの隣接地。砂質粘土でメルロー主体の豊潤なスタイル。建築的なモダンセラーも有名。',
  'Château La Fleur Morange': '北東の砂質土壌の稀な古木メルロー。ガレージワインスタイルで豊かな果実感と独特のキャラクター。',
  'Château La Marzelle':    '粘土石灰岩のプラトー西斜面。ビオディナミ農法のメルロー主体で洗練されたエレガンス。',
  'Château La Serre':       '粘土石灰岩の北プラトー中央。バランスの取れたメルロー主体で伝統ある歴史的シャトー。',
  'Château La Tour Figeac': 'フィジャックの姉妹シャトー、砂利土壌。バランスの取れたメルロー＋カベルネ・フランで丸みのある親しみやすいスタイル。',
  'Château Laniote':        '石灰岩の北プラトー斜面。家族経営の小規模シャトーで豊かなミネラル感を持つ少量生産のメルロー主体。',
  'Château Larmande':       '北斜面の粘土石灰岩。メルロー＋カベルネ・フランのバランスが良く高い複雑さを持つ歴史的シャトー。',
  'Château Laroque':        'サン＝クリストフの大規模シャトー、高い石灰岩テラス。メルロー主体で洗練された果実感と壮観な風景。',
  'Château Laroze':         '粘土石灰岩の西プラトー。果実感とフローラルノートを兼ね備えた洗練されたメルロー主体の丸みのあるスタイル。',
  'Château Le Châtelet':    '粘土石灰岩の南斜面。メルロー主体の洗練されたキャラクターを持つ小規模ブティックシャトー。',
  'Château Le Prieuré':     '粘土石灰岩の東斜面の旧修道院。フォン・ナイペルク家管理のメルロー主体、洗練されたクラシックスタイル。',
  'Château Mangot':         '砂質粘土のサン＝テティエンヌ東部。メルロー主体で鮮明な果実感。コスパの高いブティックシャトー。',
  'Château Monbousquet':    '砂利土壌の南部低地。メルロー主体でジェラール・ペルス経営のモダンスタイル、芳香なアロマが特徴。',
  'Château Montlabert':     '粘土石灰岩の北西プラトー。メルロー主体の家族経営シャトーで豊かな果実感と親しみやすいスタイル。',
  'Château Montlisse':      '東部の砂利土壌。複数区画を統合した古木メルローのブティックシャトー。洗練されたエレガンス。',
  'Château Moulin du Cadet': '純粋な石灰岩のプラトー北斜面。精確でミネラル感の強い古木メルロー。ムエックス家管理。',
  'Château Péby Faugères':  'フォジェールの最良区画からの超プレミアムキュヴェ。メルロー主体で驚異的な熟成ポテンシャル。建築家ポルツァンパルク設計のセラーも著名。',
  'Château Petit Faurie de Soutard': '石灰岩のプラトー北側。メルロー主体で伝統的なバランスの取れたスタイル。スタールに隣接。',
  'Château Ripeau':         '砂利土壌の西プラトー。メルロー主体で軽やかな果実感。早飲みスタイル。',
  'Château Rochebelle':     '粘土石灰岩の南東斜面。メルロー主体の洗練されたブティックシャトー。',
  'Château Rol Valentin':   '北西の粘土砂利。ガレージワインスタイルでメルロー主体の凝縮した果実感。エリック・プリセット創設。',
  "Château Saint-Georges (Côte Pavie)": 'パヴィー斜面の南区画、粘土石灰岩。メルロー主体でバランスの取れた骨格と洗練されたフローラルノート。',
  'Château Sansonnet':      '北東プラトーの粘土石灰岩。メルロー主体でオーガニック農法。鮮明な果実感とミネラル感。',
  'Château Soutard':        '大規模な北プラトー石灰岩シャトー。メルロー主体で伝統的かつしっかりとした骨格と良好な熟成力。ラ・モンディアル傘下。',
  'Château Tour Baladoz':   '石灰岩の南斜面エリア。メルロー主体でフレッシュで洗練されており品質は着実に向上。',
  'Château Tour Saint Christophe': '高い石灰岩テラスの最北大規模シャトー。メルロー主体で豊かな果実感。ベルナール・ムエックス管理。',
  'Château Villemaurine':   '北プラトーの純粋な石灰岩。メルロー主体で傑出したミネラル感。ムーア人の占領時代に由来する名称で、著名な石灰岩セラーが有名。',
  'Château Yon-Figeac':     'フィジャック近くの西エリア、砂質粘土。メルロー主体で丸みのある果実感。現代的農業で品質向上中。',
  'Clos Dubreuil':          '粘土石灰岩の南東斜面のブティックシャトー。メルロー主体の極少量生産のガレージワインスタイル。高評価。',
  'Clos Saint-Julien':      '純粋な石灰岩の市街地中心の微小区画。メルロー主体でごく限られた生産量の稀な宝石。',
  'Clos Saint-Martin':      '石灰岩のプラトー中心部の古い菜園。メルロー＋カベルネ・フランのブレンド。ライフェル家管理。',
  'Couvent des Jacobins':   'ヤコビン修道院だった中世の修道院。石灰岩セラー、メルロー主体、歴史的な洗練されたエレガンス。セラー施設で著名。',
  'Lassègue':               '粘土石灰岩のサン＝ティポリット大規模シャトー。アメリカ人投資家開発のメルロー主体で豊かで丸みのある優れたコスパ。',
  'Château Beau-Séjour Bécot': '西の石灰岩テラス。豊かな果実感のメルロー＋カベルネ・フラン。ベコ家が管理。',
  'Château Beauséjour Héritiers Duffau-Lagarrosse': 'オーゾンヌに隣接する純粋な石灰岩の急斜面。メルロー主体でごく少量生産の洗練された純粋さ。サン＝テミリオン最も魂的なシャトーの一つ。',
  'Château Bélair-Monange': 'オーゾンヌに隣接する深い石灰岩の急斜面。メルロー主体で強烈なミネラル感。ムエックス家管理。',
  'Château Canon La Gaffelière': '砂質粘土の斜面の麓。特に高いカベルネ・フラン比率から芳香なフローラル、洗練されたエレガンス。フォン・ナイペルク管理。',
  'Château Larcis Ducasse': 'パヴィーに隣接する南東の石灰岩斜面。メルロー主体でビオディナミ農法、洗練された深みのあるワイン。近年評価が急上昇。',
  'Château Pavie Macquin':  '粘土石灰岩のパヴィー隣接の東テラス斜面。メルロー主体でビオディナミ農法のフルボディスタイル。',
  'Château Trottevieille':  '北東プラトーの石灰岩テラス。メルロー主体で歴史的かつ伝統的な洗練さ。近年醸造が大幅に向上。',
  'Clos Fourtet':           '西の城壁沿いの石灰岩プラトー。メルロー主体で鮮明なミネラル感。キュヴリエ家所有。',
  'La Mondotte':            'カノン・ラ・ガフリエールに隣接する極小区画（2ha）。粘土石灰岩斜面の古木メルローから超凝縮した驚異的な熟成力のワインを少量生産。',

  // St-Estèphe
  "Château Cos d'Estournel": 'オリエンタルな宮殿様式の外観で有名。リッチで力強い骨格を持つサン＝テステフを代表するアイコン的シャトー。',
  'Château Montrose':        '強固な骨格と驚異的な熟成力で名高いサン＝テステフのトップ第二特等格付け。',
  'Château Calon-Ségur':     'ハート型ラベルで有名。洗練されたエレガントさを持ち、熟成とともに魅力的な複雑さを発揮する。',
  'Château Lafon-Rochet':    '鮮やかな黄色い城館で知られ、バランスが取れコストパフォーマンスが高い。',
  'Château Meyney':          '歴史ある修道院由来のシャトー。リッチなスタイルで安定的に品質が向上している。',
  'Château Phélan Ségur':    'クリュ・ブルジョワ格付けを外れたアン・オフィシャルな「スーパーシャトー」。サン＝テステフの黄金地帯に位置し格付けシャトーに匹敵する品質と洗練された複雑さ。',
  'Château Haut-Marbuzet':   'なめらかなテクスチャーと複雑なアロマで名高い、丸みのあるスタイル。',
  'Château Le Boscq':        'ジロンド川沿いに位置し、リッチで際立ったタンニン骨格のスタイル。',
  'Château Lilian Ladouys':  'ロレンツェッティ家による買収後に品質が急上昇したサン＝テステフの新星。鮮明な果実感と丸みのあるパレット。',
  'Château Cos Labory':      'コス・デストゥルネルの隣に位置し、エレガントなスタイルとコストパフォーマンスが魅力。',
  'Château de Pez':          'サン＝テステフ最古のシャトーの一つで、権威あるルイ・ロデレール家が所有。フルボディでクリュ・ブルジョワの代表格。',
  'Château Petit Bocq':      'サン＝テステフの活気あるエクセプショネル。豊かな黒果実と洗練された骨格で高い評価を得ている。',

  // St-Julien
  'Château Léoville Las Cases': 'サン＝ジュリアンを代表する第二特等格付け。厳格な骨格と驚異的な熟成力から「スーパーセコン」と呼ばれる。',
  'Château Léoville Barton':    '伝統的な醸造法と安定した品質で知られる。クラシックでしっかりとした骨格のスタイル。',
  'Château Léoville Poyferré':  '豊かな果実感と滑らかなタンニンで名高い。近年品質が大幅に向上している。',
  'Château Ducru-Beaucaillou':  '砂利テロワールと優雅なスタイルで名高い。洗練されたテクスチャーと優れた熟成力。',
  'Château Gruaud Larose':      'リッチでフルボディ、しっかりとした骨格。長期熟成に最適なスタイル。',
  'Château Lagrange':           'バランスの取れたスタイルと安定した品質が魅力。コストパフォーマンスが高い。',
  'Château Talbot':             'サン＝ジュリアン最大規模のシャトーの一つ。丸みのある果実豊かなスタイル。',
  'Château Branaire-Ducru':     'デリケートな果実感と洗練されたスタイルで名高い。着実に品質向上中。',
  'Château Beychevelle':        '船の帆をモチーフにした有名なラベル。滑らかで親しみやすく幅広い人気を持つ。',
  'Château Langoa Barton':      'レオヴィル・バルトンの姉妹シャトーとしてバルトン家が経営。クラシックスタイルとコストパフォーマンス。',
}

const RANK_JA_MAP = {
  'Premier Cru Classé': 'プルミエ・クリュ・クラッセ',
  'Deuxième Cru Classé': 'ドゥジェム・クリュ・クラッセ',
  'Distinguished Barsac Estate': 'バルサック 優良シャトー',
  'Premier Grand Cru Classé (Graves)': 'プルミエ・グラン・クリュ・クラッセ（グラーヴ）',
  'Grand Cru Classé de Graves': 'グラン・クリュ・クラッセ・ド・グラーヴ',
  '5th Growth (Grand Cru Classé 1855)': '1855年 第5級格付け',
  '4th Growth (Grand Cru Classé 1855)': '1855年 第4級格付け',
  'Cru Bourgeois Exceptionnel': 'クリュ・ブルジョワ・エクセプショネル',
  'Cru Bourgeois': 'クリュ・ブルジョワ',
  '1st Growth (Premier Grand Cru Classé 1855)': '1855年 第1級格付け',
  '2nd Growth (Deuxième Grand Cru Classé 1855)': '1855年 第2級格付け',
  '3rd Growth (Troisième Grand Cru Classé 1855)': '1855年 第3級格付け',
  '1855 Premier Grand Cru Classé': '1855年 プルミエ・グラン・クリュ・クラッセ',
  '1st Growth 1855 / Classified Graves Growth': '1855年 第1級 / グラーヴ格付けシャトー',
  'Crus Classés de Graves': 'クリュ・クラッセ・ド・グラーヴ',
  'Top Pomerol Estate': 'ポムロール 最高峰シャトー',
  'Distinguished Pomerol Estate': 'ポムロール 優良シャトー',
  'Premier Cru Supérieur 1855': '1855年 プルミエ・クリュ・スュペリウール',
  'Premier Cru Classé 1855': '1855年 プルミエ・クリュ・クラッセ',
  'Deuxième Cru Classé 1855': '1855年 ドゥジェム・クリュ・クラッセ',
  'Premier Grand Cru Classé A': 'プルミエ・グラン・クリュ・クラッセ A',
  'Premier Grand Cru Classé B': 'プルミエ・グラン・クリュ・クラッセ B',
  'Saint-Émilion Grand Cru Classé': 'サン・テミリオン グラン・クリュ・クラッセ',
  'Distinguished Saint-Estèphe Estate': 'サン・テステフ 優良シャトー',
}

let totalUpdated = 0, totalSkipped = 0

const files = require('fs').readdirSync(dir).filter(f => f.endsWith('.json'))
files.forEach(f => {
  const filePath = require('path').join(dir, f)
  const data = JSON.parse(require('fs').readFileSync(filePath, 'utf8'))
  let fileUpdated = 0, fileSkipped = 0

  data.forEach(c => {
    // rank_ja
    if (c.rank_en && RANK_JA_MAP[c.rank_en]) {
      c.rank_ja = RANK_JA_MAP[c.rank_en]
    } else if (c.rank_en) {
      c.rank_ja = c.rank_en // fallback to English
    }
    // description_ja
    if (JA[c.name]) {
      c.description_ja = JA[c.name]
      fileUpdated++
    } else {
      fileSkipped++
      console.warn(`  ⚠ No JA desc for: "${c.name}" in ${f}`)
    }
  })

  require('fs').writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
  console.log(`✓ ${f}: ${fileUpdated} desc updated, ${fileSkipped} skipped`)
  totalUpdated += fileUpdated
  totalSkipped += fileSkipped
})

console.log(`\n✅ Done: ${totalUpdated} updated, ${totalSkipped} skipped`)
