/**
 * 西南產區地圖的地點清單。30 個 AOC 另有 INAO 地塊劃界範圍（public/southwest/southwest_aoc.geojson），
 * 這裡的座標是該範圍內的一點，用來放標籤；由 scripts/build-southwest-aoc-geojson.py 算出。
 * Armagnac 子區與 Côtes de Gascogne IGP 沒有範圍資料，仍是概略的示意點。
 *
 * 說明文字皆取自課程 Level 1–3 已查證的項目（見 SOUTHWEST_COURSE_FRAMEWORK.md）；
 * 來源有出入的數字（產區總面積、AOC 數量、Bergerac／Monbazillac／Armagnac 面積、Fronton 的 Négrette 比例、
 * Tursan 村鎮數、Côtes de Gascogne 白酒比例、Vin de Pays 立法年）不列入。
 *  - zone：產區群（dordogne／valleys／gascony／pyrenees）
 *  - kind：aoc（AOC／AOP）／sub（子區、IGP、烈酒產區）；依課程用語
 */
export const POINT_NOTES = '示意點，非官方邊界；位置為概略（以主要城鎮或村莊為準），僅供認識名稱與相對位置。'

const P = (id, name, kind, zone, lngLat, extra) => ({ id: `SW-PT-${id}`, name, kind, zone, tier: kind, lngLat, ...extra })

export const POINT_REF = [
  // ── Dordogne（Bergerac 一帶）──
  P('BERGERAC', 'Bergerac', 'aoc', 'dordogne', [0.3985, 44.796], {
    parent: 'Dordogne', styles: ['紅酒', '白酒', '粉紅酒'], grapes: ['Merlot', 'Cabernet Sauvignon', 'Cabernet Franc', 'Sémillon', 'Sauvignon Blanc'],
    notes: 'Bergerac AOC 1936 年、Côtes de Bergerac 1995 年；紅酒以 Cabernet Sauvignon、Merlot、Cabernet Franc 混調，白酒用 Sauvignon Blanc、Sémillon、Muscadelle（Dordogne 旅遊局、Cellar Tours）。面積說法不一，不列入。', sameAs: 'Côtes de Bergerac' }),
  P('PECHARMANT', 'Pécharmant', 'aoc', 'dordogne', [0.5784, 44.8659], {
    parent: 'Bergerac', styles: ['紅酒'], grapes: ['Merlot', 'Cabernet Sauvignon', 'Cabernet Franc', 'Malbec'],
    notes: 'AOC 1946 年；約 450 公頃、約 45 位生產者；強勁耐存的紅酒（Dordogne 旅遊局）。' }),
  P('MONBAZILLAC', 'Monbazillac', 'aoc', 'dordogne', [0.4998, 44.7997], {
    parent: 'Bergerac', styles: ['甜酒'], grapes: ['Sémillon', 'Sauvignon Blanc', 'Muscadelle'],
    notes: 'AOC 1936 年；Sémillon 占逾 70%；所有果實都須受貴腐菌影響、禁止機械採收；殘糖至少 45 g/L，Sélection de Grains Nobles 至少 85 g/L（Wine With Seth）。面積說法不一，不列入。' }),
  P('SAUSSIGNAC', 'Saussignac', 'aoc', 'dordogne', [0.3212, 44.7872], {
    parent: 'Bergerac', styles: ['甜酒'], grapes: ['Sémillon', 'Sauvignon Blanc', 'Muscadelle', 'Chenin Blanc'],
    notes: 'AOC 2005 年；約 20 公頃；蜂蜜與蜜漬杏桃香，約 12 個月培養（Dordogne 旅遊局）。' }),
  P('MONTRAVEL', 'Montravel', 'aoc', 'dordogne', [0.1918, 44.8772], {
    parent: 'Bergerac', styles: ['白酒', '紅酒', '甜酒'],
    notes: 'Haut-Montravel、Montravel 乾白、Côtes de Montravel 於 1937 年認定，紅酒 Montravel Rouge 到 2001 年；高原土壤為 boulbène、燧石與鐵質硬磐（Dordogne 旅遊局）。' }),
  P('ROSETTE', 'Rosette', 'aoc', 'dordogne', [0.3923, 44.8821], {
    parent: 'Bergerac', styles: ['白酒'],
    notes: 'AOC 1946 年；約 40 公頃；半甜白酒，在根瘤蚜後被遺忘、1960 年代復興（Dordogne 旅遊局）。' }),
  P('DURAS', 'Côtes de Duras', 'aoc', 'dordogne', [0.2533, 44.7064], {
    parent: 'Lot-et-Garonne', styles: ['白酒', '紅酒', '甜酒'],
    notes: 'AOC 1937 年；約 1,250 公頃；位於 Lot-et-Garonne，在波爾多與 Bergerac 交界；可用 Chenin 與 Mauzac 做甜白（Dordogne 旅遊局）。' }),
  P('COTESBERGERAC', 'Côtes de Bergerac', 'aoc', 'dordogne', [0.3985, 44.796], {
    notes: 'Bergerac AOC 1936 年、Côtes de Bergerac 1995 年；後者規定較嚴，酒體較有結構（Dordogne 旅遊局）。', sameAs: 'Bergerac' }),
  P('COTESMONTRAVEL', 'Côtes de Montravel', 'aoc', 'dordogne', [0.1918, 44.8772], {
    notes: 'Haut-Montravel、Montravel 乾白、Côtes de Montravel 於 1937 年認定（Dordogne 旅遊局）。', sameAs: 'Haut-Montravel' }),
  P('HAUTMONTRAVEL', 'Haut-Montravel', 'aoc', 'dordogne', [0.1918, 44.8772], {
    notes: 'Haut-Montravel、Montravel 乾白、Côtes de Montravel 於 1937 年認定（Dordogne 旅遊局）。', sameAs: 'Côtes de Montravel' }),
  // ── Lot・Garonne・Tarn 河谷 ──
  P('CAHORS', 'Cahors', 'aoc', 'valleys', [1.3636, 44.4579], {
    parent: 'Lot', styles: ['紅酒'], grapes: ['Malbec', 'Merlot', 'Tannat'],
    notes: '1971 年取得 AOC；只產紅酒，Malbec 至少 70%，Merlot 與 Tannat 各可至 30%；每公頃至少 4,000 株；約 4,200 公頃；1956 年 2 月霜害使幾乎所有葡萄園需要重植（Wine With Seth、Wikipedia）。' }),
  P('MARCILLAC', 'Marcillac', 'aoc', 'valleys', [2.4598, 44.5245], {
    parent: 'Aveyron', styles: ['紅酒', '粉紅酒'], grapes: ['Fer Servadou'],
    notes: '1965 年為 VDQS、1990 年升為 AOC；約 200 公頃、其中 161 公頃種植；紅色黏土 rougiers；主要品種 Mansois（Fer Servadou 的當地名稱）約占九成（Wikipedia）。' }),
  P('BUZET', 'Buzet', 'aoc', 'valleys', [0.2539, 44.1985], {
    parent: 'Lot-et-Garonne', styles: ['紅酒', '白酒'], grapes: ['Cabernet Franc', 'Cabernet Sauvignon', 'Merlot', 'Malbec'],
    notes: '1953 年為 VDQS（Côtes de Buzet）、1973 年成為 AOC、1986 年改稱 Buzet；約 1,800 公頃、27 個村鎮（Wikipedia）。' }),
  P('MARMANDAIS', 'Côtes du Marmandais', 'aoc', 'valleys', [0.023, 44.469], {
    parent: 'Lot-et-Garonne', styles: ['紅酒', '白酒'], grapes: ['Abouriou', 'Fer Servadou'],
    notes: '1990 年自 VDQS 升為 AOC；位於 Entre-Deux-Mers 東南、Garonne 沿岸；品種多達 12 種，含 Abouriou 與 Fer（Wikipedia）。' }),
  P('GAILLAC', 'Gaillac', 'aoc', 'valleys', [2.0367, 43.99], {
    parent: 'Tarn', styles: ['白酒', '紅酒', '氣泡酒', '甜酒'], grapes: ['Mauzac', 'Len de l\'El', 'Duras', 'Fer Servadou', 'Syrah'],
    notes: '白酒 1938 年 3 月 21 日、紅酒 1970 年 10 月 23 日取得 AOC；Méthode Gaillacoise 僅用 Mauzac，單次發酵在瓶中完成；Gaillac Doux 殘糖至少 70 g/L；Primeur 為純 Gamay（Wine With Seth）。' }),
  P('FRONTON', 'Fronton', 'aoc', 'valleys', [1.4308, 43.7932], {
    parent: 'Haute-Garonne／Tarn-et-Garonne', styles: ['紅酒', '粉紅酒'], grapes: ['Négrette'],
    notes: '位於 Toulouse 以北約 35 公里；紅酒約占 85%、粉紅約 15%；Négrette 酸度與單寧低但色深，帶紫羅蘭、覆盆子與甘草香（Wikipedia）。Négrette 比例各來源不一，不列入。' }),
  P('GAILLACPC', 'Gaillac premières côtes', 'aoc', 'valleys', [1.8986, 43.9597], {
    notes: '本課程未另外介紹這個 AOC。' }),
  P('BRULHOIS', 'Brulhois', 'aoc', 'valleys', [0.8391, 44.0914], {
    notes: '本課程未另外介紹這個 AOC。' }),
  P('QUERCY', 'Coteaux du Quercy', 'aoc', 'valleys', [1.5096, 44.2192], {
    notes: '本課程未另外介紹這個 AOC。' }),
  P('MILLAU', 'Côtes de Millau', 'aoc', 'valleys', [3.1206, 44.1909], {
    notes: '本課程未另外介紹這個 AOC。' }),
  P('ENTRAYGUES', 'Entraygues - Le Fel', 'aoc', 'valleys', [2.4266, 44.6455], {
    notes: '本課程未另外介紹這個 AOC。' }),
  P('ESTAING', 'Estaing', 'aoc', 'valleys', [2.6447, 44.5254], {
    notes: '本課程未另外介紹這個 AOC。' }),
  P('SAINTSARDOS', 'Saint-Sardos', 'aoc', 'valleys', [1.0969, 43.9666], {
    notes: '本課程未另外介紹這個 AOC。' }),
  // ── Gascogne（Adour 流域）──
  P('MADIRAN', 'Madiran', 'aoc', 'gascony', [-0.049, 43.5593], {
    parent: 'Gers／Hautes-Pyrénées／Pyrénées-Atlantiques', styles: ['紅酒'], grapes: ['Tannat', 'Cabernet Franc', 'Cabernet Sauvignon', 'Fer Servadou'],
    notes: '1948 年 7 月 10 日法令認定；37 個村鎮；約 1,300 公頃；只產紅酒，Tannat 至少占每個酒莊葡萄園的 60%；必須去梗；微氧化由 Patrick Ducournau 於 1991 年發明（Wine With Seth、Wikipedia）。', sameAs: 'Pacherenc du Vic-Bilh' }),
  P('PACHERENC', 'Pacherenc du Vic-Bilh', 'sub', 'gascony', [-0.049, 43.5593], {
    parent: 'Madiran', styles: ['白酒', '甜酒'], grapes: ['Petit Manseng', 'Gros Manseng', 'Courbu'],
    notes: '與 Madiran 同區的白酒 AOC；乾白 Courbu 與 Petit Manseng 合計至少 60%、殘糖最多 3 g/L；甜白手工採收、殘糖至少 35 g/L（Wikipedia）。', sameAs: 'Madiran' }),
  P('SAINTMONT', 'Saint-Mont', 'aoc', 'gascony', [0.2234, 43.6432], {
    parent: 'Gers', styles: ['紅酒', '白酒', '粉紅酒'], grapes: ['Tannat'],
    notes: '2011 年升為 AOC；約 1,200 公頃，在 Gers；11 世紀本篤會修道院；Plaimont 合作社生產其 98%（Decanter，資料較舊）；土壤為多色的黏土與卵石（Wine With Seth）。' }),
  P('TURSAN', 'Tursan', 'aoc', 'gascony', [-0.4174, 43.721], {
    parent: 'Landes', styles: ['紅酒', '白酒', '粉紅酒'], grapes: ['Tannat', 'Baroque'],
    notes: 'VDQS 1958 年、AOC 2011 年；約 450 公頃；白酒 Baroque 占 30–90%；紅酒 Tannat 最多 40%；Adour 河為北界，東鄰 Madiran（Wine With Seth、Wikipedia）。村鎮數各來源不一，不列入。' }),
  P('GASCOGNE', 'Côtes de Gascogne IGP', 'sub', 'gascony', [0.35, 43.75], {
    parent: 'Gers', styles: ['白酒', '紅酒', '粉紅酒'], grapes: ['Colombard', 'Ugni Blanc', 'Gros Manseng'],
    notes: '以 Gers 為核心的 IGP，2005 年擴大後總面積約 15,000 公頃；生產潛力逾 1 億瓶、約 75% 出口（Wikipedia）。白酒比例各來源不一，不列入。' }),
  P('BASARMAGNAC', 'Bas-Armagnac', 'sub', 'gascony', [0.1, 43.86], {
    parent: 'Armagnac', styles: ['烈酒'], grapes: ['Ugni Blanc', 'Baco'],
    notes: '貧瘠酸性黏壤土，產出輕盈果香的蒸餾酒（armagnac.fr）。Armagnac 單次連續蒸餾，出蒸餾器時 52–63%，用 400–420 公升橡木桶培養，裝瓶降至 40%（wein.plus）。' }),
  P('TENAREZE', 'Ténarèze', 'sub', 'gascony', [0.37, 43.96], {
    parent: 'Armagnac', styles: ['烈酒'], grapes: ['Ugni Blanc'],
    notes: '重黏土石灰岩，蒸餾酒較豐厚、需長期培養（armagnac.fr）。' }),
  P('HAUTARMAGNAC', 'Haut-Armagnac', 'sub', 'gascony', [0.58, 43.65], {
    parent: 'Armagnac', styles: ['烈酒'],
    notes: 'Armagnac 三個地區中位於南與東的一區；另兩區為 Bas-Armagnac（西）與 Ténarèze（中）（armagnac.fr）。' }),
  // ── 比利牛斯山麓 ──
  P('JURANCON', 'Jurançon', 'aoc', 'pyrenees', [-0.5728, 43.2715], {
    parent: 'Pyrénées-Atlantiques', styles: ['甜酒', '白酒'], grapes: ['Petit Manseng', 'Gros Manseng'],
    notes: '甜酒 1936 年取得 AOC，Jurançon Sec 1975 年；Gros 與 Petit Manseng 合計至少 50%；甜酒靠葡萄在藤上風乾（passerillage）、不靠貴腐；Sec 殘糖最多 4 g/L、甜酒至少 40 g/L、Vendanges Tardives 至少 55 g/L（Wine With Seth）。' }),
  P('BEARN', 'Béarn', 'aoc', 'pyrenees', [-0.0924, 43.4757], {
    parent: 'Pyrénées-Atlantiques', styles: ['紅酒', '粉紅酒', '白酒'], grapes: ['Tannat', 'Cabernet Franc', 'Fer'],
    notes: '1951 年為 VDQS，1975 年成為 AOC；Béarn-Bellocq 於 1991 年成立；約 259 公頃；紅葡萄有 Cabernet Franc、Cabernet Sauvignon、Tannat、Fer、Manseng Noir、Courbu Noir（Wikipedia）。' }),
  P('IROULEGUY', 'Irouléguy', 'aoc', 'pyrenees', [-1.2181, 43.181], {
    parent: 'Pyrénées-Atlantiques', styles: ['紅酒', '粉紅酒', '白酒'], grapes: ['Tannat', 'Cabernet Franc'],
    notes: 'AOC 為 1970 年 10 月；梯田葡萄園位於海拔 100–400 公尺、部分坡度達 60°，土壤呈深紅色；現約 210 公頃，酒款約 70% 紅、20% 粉紅、10% 白（Wikipedia）。11 世紀 Roncesvalles 修道院的修士為聖雅各之路朝聖者種下大片葡萄園。' })
]
