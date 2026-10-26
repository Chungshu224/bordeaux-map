#!/usr/bin/env python3
"""
scripts/build-rhone-geojson.py
由 Bianchi et al. (2022) 歐盟葡萄酒 PDO 資料集（Figshare，CC0）產生隆河互動地圖用的 public/rhone/rhone_pdo.geojson。

資料來源（下載後以參數傳入，不放進倉庫）：
  - EU_PDO.gpkg    https://ndownloader.figshare.com/files/35955185  （Wine PDO map，EPSG:3035，PDOid 欄位）
  - PDO_EU_id.csv  https://ndownloader.figshare.com/files/35191360  （規範彙整，取名稱與登記日期核對用）
  論文：Scientific Data 9, 2022, doi:10.1038/s41597-022-01513-0；資料集 collection doi:10.6084/m9.figshare.c.5877659

處理：EPSG:3035（等面積）→ 在原座標系簡化 40 m → 轉 WGS84，座標取 5 位小數；範圍面積（km²）在等面積座標系計算。
屬性（name／tier／zone／year／styles／grapes／notes）為教學用，數字與 Level 1–2 課程一致（見 RHONE_COURSE_FRAMEWORK.md 第 11 節）。
用法：python3 -I scripts/build-rhone-geojson.py <EU_PDO.gpkg> <PDO_EU_id.csv> [輸出路徑]
需要：pip install shapely pyproj
"""
import csv, json, sqlite3, sys
from shapely import wkb
from shapely.ops import transform  # 舊 API，shapely 2.x 仍可用（僅有棄用警告）
from shapely.geometry import mapping
from pyproj import Transformer

gpkg, idcsv = sys.argv[1], sys.argv[2]
out = sys.argv[3] if len(sys.argv) > 3 else 'public/rhone/rhone_pdo.geojson'
TOL_M = 40

# tier: cru / villages / cdr / other；zone: north / south / both / outer
# year 為 AOC 認定年份（字串，依 Level 2 課程已對照 INAO 的結果；未核對者為 None）
AOC = [
  # ── 北隆河 8 cru ──
  ('PDO-FR-A0199', 'Côte-Rôtie', 'cru', 'north', '1940', ['紅酒'],
   ['Syrah（至少 80%）', 'Viognier（至多占 Syrah 地塊葡萄樹的 20%）'],
   'Rhône 省的 Ampuis、Saint-Cyr-sur-le-Rhône、Tupin-et-Semons；極陡的梯田，Côte Blonde（片麻岩）與 Côte Brune（雲母片岩）兩個坡面。'),
  ('PDO-FR-A0685', 'Condrieu', 'cru', 'north', '1940', ['白酒'],
   ['Viognier（100%）'],
   '7 個村莊橫跨 Rhône、Ardèche、Loire 三省；花崗岩梯田，以乾型為主，少量甜酒。'),
  ('PDO-FR-A0587', 'Château-Grillet', 'cru', 'north', '1936', ['白酒'],
   ['Viognier（100%）'],
   '單一莊園（monopole）AOC，被 Condrieu 的範圍環繞；Inter Rhône 2025 年約 4 公頃，是法國最小的 AOC 之一。'),
  ('PDO-FR-A0200', 'Saint-Joseph', 'cru', 'north', '1956', ['紅酒', '白酒'],
   ['Syrah（紅酒，酒莊種植至少 90%）', 'Marsanne、Roussanne（白酒）'],
   'Rhône 右岸長條形，26 個村莊（Ardèche 23、Loire 3）；1994 年起重新劃界，可種植面積自約 6,800 公頃砍半至約 3,400 公頃。'),
  ('PDO-FR-A1002', 'Hermitage', 'cru', 'north', '1937', ['紅酒', '白酒', '稻草酒（vin de paille）'],
   ['Syrah（紅酒，酒莊種植至少 85%）', 'Marsanne、Roussanne（白酒）'],
   'Drôme 省 Tain-l\'Hermitage 後方的名丘，面積很小但分量極重；vin de paille 葡萄須乾燥至少 45 天。'),
  ('PDO-FR-A0389', 'Crozes-Hermitage', 'cru', 'north', '1937', ['紅酒', '白酒'],
   ['Syrah（紅酒，酒莊種植至少 85%）', 'Marsanne、Roussanne（白酒）'],
   'Drôme 省 11 個村莊，環繞 Hermitage；北隆河最大的 cru。'),
  ('PDO-FR-A0697', 'Cornas', 'cru', 'north', '1938', ['紅酒'],
   ['Syrah（100%）'],
   'Ardèche 省單一村莊，花崗岩土壤、向陽的圓形劇場式坡地（一般說法）；北隆河以 Syrah 單一品種釀造的 cru。'),
  ('PDO-FR-A0398', 'Saint-Péray', 'cru', 'north', '1936', ['白酒', '氣泡酒'],
   ['Marsanne', 'Roussanne'],
   'Ardèche 省、Valence 對岸，以 Crussol 石灰岩山塊為地標；只有白酒，含靜態與氣泡。'),
  # ── 南隆河 cru（Laudun 無獨立邊界，另以示意點呈現）──
  ('PDO-FR-A0144', 'Châteauneuf-du-Pape', 'cru', 'south', '1936', ['紅酒', '白酒'],
   ['Grenache 為主', '18 個條目（一般稱 13 個品種）'],
   'Vaucluse 省 5 個村莊；強制手工採收與分選，單產 35 hl/ha，最低天然酒精度 12.5%；Marsanne 與 Viognier 不在許可清單。'),
  ('PDO-FR-A0143', 'Gigondas', 'cru', 'south', '1971', ['紅酒', '粉紅酒', '白酒'],
   ['Grenache（至少 50%）', 'Cinsault＋Mourvèdre＋Syrah（合計至少 15%）'],
   'Dentelles de Montmirail 山腳；白酒自 2023 年份起（INAO 2022 年核准，Clairette 至少 70%）。'),
  ('PDO-FR-A0151', 'Vacqueyras', 'cru', 'south', '1990', ['紅酒', '粉紅酒', '白酒'],
   ['Grenache（至少 50%）', 'Syrah＋Mourvèdre（合計至少 20%）'],
   'Sarrians 與 Vacqueyras 兩個村莊，Dentelles de Montmirail 西南側。'),
  ('PDO-FR-A0690', 'Vinsobres', 'cru', 'south', '2006', ['紅酒'],
   ['Grenache（至少 50%）', 'Syrah＋Mourvèdre（合計至少 25%）'],
   '南隆河唯一位於 Drôme 省的 cru；白酒已列入現行修訂草案。'),
  ('PDO-FR-A0724', 'Beaumes-de-Venise', 'cru', 'south', '2005', ['紅酒'],
   ['Grenache（至少 50%）', 'Syrah（至少 20%）'],
   '乾紅酒於 2005 年升格為 cru；4 個村莊。Muscat 天然甜酒（VDN）是另一個 AOC。'),
  ('PDO-FR-A0720', 'Rasteau', 'cru', 'south', '2010（乾紅）；VDN 1944', ['紅酒', '天然甜酒（VDN）'],
   ['Grenache（乾紅至少 50%）'],
   '先以 1944 年 VDN 認定，乾紅酒於 2010 年升格為 cru；VDN 以 5–10% 中性酒精加烈。'),
  ('PDO-FR-02175', 'Cairanne', 'cru', 'south', '2016', ['紅酒', '白酒'],
   ['Grenache', 'Syrah', 'Mourvèdre'],
   '2016 年升格（追溯適用 2015 年採收）；品種比例的規格修訂草案尚在程序中，本站不列比例。'),
  ('PDO-FR-A0331', 'Lirac', 'cru', 'south', '1947', ['紅酒', '粉紅酒', '白酒'],
   ['Grenache（紅、粉紅至少 40%）', 'Syrah＋Mourvèdre（合計至少 25%）'],
   'Gard 省右岸，4 個村莊，隔河與 Châteauneuf-du-Pape 相望。'),
  ('PDO-FR-A0328', 'Tavel', 'cru', 'south', '1936', ['粉紅酒'],
   ['Grenache（黑、白、灰合計須大於 30%、小於 60%，且須含 Grenache noir）'],
   '隆河唯一只產粉紅酒的 cru，只允許靜態粉紅酒；Gard 省右岸。'),
  # ── 分級金字塔其他層 ──
  ('PDO-FR-A0664', 'Côtes du Rhône Villages', 'villages', 'south', '1966', ['紅酒', '粉紅酒', '白酒'],
   ['Grenache（至少 40%）', 'Syrah＋Mourvèdre（合計至少 25%）'],
   '僅限南部四個省（Ardèche、Drôme、Gard、Vaucluse）；21 個村莊可加註地名；邊界取自歐盟資料集，各村地名範圍未另繪。'),
  ('PDO-FR-A0325', 'Côtes du Rhône', 'cdr', 'both', '1937', ['紅酒', '粉紅酒', '白酒'],
   ['Grenache（至少 30%）', 'Syrah＋Mourvèdre（合計至少 20%）'],
   '河谷的基礎名稱，涵蓋北、南兩部；比例以酒莊整體種植計算（Montélimar 緯線以北的酒莊 Grenache 下限例外）。'),
  # ── 其他 AOC（不計入 18 個 cru）──
  ('PDO-FR-A0716', 'Muscat de Beaumes-de-Venise', 'other', 'outer', '1945', ['天然甜酒（VDN）'],
   ['Muscat à petits grains'],
   '天然甜酒（VDN）AOC，範圍為 Aubignan 與 Beaumes-de-Venise；以 5–10% 中性酒精加烈。'),
  ('PDO-FR-A0399', 'Ventoux', 'other', 'outer', '1973', ['紅酒', '粉紅酒', '白酒'],
   [],
   '1973 年以 Côtes du Ventoux 認定，2009 年改名；Vaucluse 省；不計入 18 個 cru。'),
  ('PDO-FR-A0920', 'Luberon', 'other', 'outer', '1988', ['紅酒', '粉紅酒', '白酒'],
   [],
   '1988 年以 Côtes du Luberon 認定，2009 年改名；粉紅酒占比高；不計入 18 個 cru。'),
  ('PDO-FR-A0929', 'Grignan-les-Adhémar', 'other', 'outer', None, ['紅酒', '粉紅酒', '白酒'],
   [],
   '前身為 Coteaux du Tricastin（舊名使用至 2010 年，單一來源）；不計入 18 個 cru。'),
  ('PDO-FR-A0161', 'Costières de Nîmes', 'other', 'outer', None, ['紅酒', '粉紅酒', '白酒'],
   [],
   '地理上在 Gard 省、鄰近 Languedoc，行政上自 2004 年起歸 Rhône 委員會；本課程僅作簡介，不計入 cru。'),
  ('PDO-FR-A0301', 'Clairette de Die', 'other', 'outer', '1942', ['氣泡酒'],
   ['Muscat à petits grains（ancestrale 白酒版至少 75%）', 'Clairette（第二次瓶內發酵版）'],
   'Drôme 山區 Diois 的氣泡酒：ancestrale（單次瓶內發酵）與二次瓶內發酵兩種釀法。'),
  ('PDO-FR-A0487', 'Crémant de Die', 'other', 'outer', '1993', ['氣泡酒'],
   [],
   'Diois 的 Crémant，1993 年法令界定；不計入 18 個 cru。'),
]
by_id = {a[0]: a for a in AOC}

names = {r['PDOid']: r for r in csv.DictReader(open(idcsv, encoding='utf-8-sig')) if r['Country'] == 'FR'}
to_ll = Transformer.from_crs(3035, 4326, always_xy=True).transform

def rnd(c):
    return [rnd(x) for x in c] if isinstance(c[0], (list, tuple)) else [round(c[0], 5), round(c[1], 5)]

con = sqlite3.connect(gpkg)
feats = []
for pid, in con.execute("select PDOid from EU_PDO where PDOid like 'PDO-FR-%'"):
    if pid not in by_id: continue
    blob = con.execute("select Shape from EU_PDO where PDOid=?", (pid,)).fetchone()[0]
    env = (blob[3] >> 1) & 7
    off = 8 + {0: 0, 1: 32, 2: 48, 3: 48, 4: 64}[env]
    g = wkb.loads(bytes(blob[off:]))
    area = g.area / 1e6
    g = g.simplify(TOL_M, preserve_topology=True)
    g = transform(to_ll, g)
    a = by_id[pid]
    geo = mapping(g)
    geo = {'type': geo['type'], 'coordinates': rnd(geo['coordinates'])}
    feats.append({'type': 'Feature', 'properties': {
        'id': pid, 'name': a[1], 'official': names.get(pid, {}).get('PDOnam', ''),
        'tier': a[2], 'zone': a[3], 'year': a[4], 'area_km2': round(area, 1),
        'styles': a[5], 'grapes': a[6], 'notes': a[7]}, 'geometry': geo})
order = {'cdr': 0, 'villages': 1, 'other': 2, 'cru': 3}   # 大範圍先畫、cru 最後（疊在上面）
feats.sort(key=lambda f: (order[f['properties']['tier']], -f['properties']['area_km2']))
missing = [k for k in by_id if k not in {f['properties']['id'] for f in feats}]
if missing: print('缺少的 PDO：', missing, file=sys.stderr)
json.dump({'type': 'FeatureCollection', 'name': 'rhone_pdo',
           'features': feats}, open(out, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
print(len(feats), 'features →', out)
