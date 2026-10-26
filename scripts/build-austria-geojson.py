#!/usr/bin/env python3
"""
scripts/build-austria-geojson.py
由 Bianchi et al. (2022) 歐盟葡萄酒 PDO 資料集（Figshare，CC0）產生奧地利互動地圖用的 public/austria/austria_pdo.geojson。

資料來源（下載後以參數傳入，不放進倉庫）：
  - EU_PDO.gpkg    https://ndownloader.figshare.com/files/35955185  （Wine PDO map，EPSG:3035，PDOid 欄位）
  - PDO_EU_id.csv  https://ndownloader.figshare.com/files/35191360  （規範彙整，取名稱核對用）
  論文：Scientific Data 9, 2022, doi:10.1038/s41597-022-01513-0；資料集 collection doi:10.6084/m9.figshare.c.5877659

處理：EPSG:3035（等面積）→ 在原座標系簡化 40 m → 轉 WGS84，座標取 5 位小數；範圍面積（km²）在等面積座標系計算。
⚠ 資料集為 2021 年前版本：不含 Rosalia、Ruster Ausbruch（地圖以示意點呈現，見 src/data/austria/pointRef.js）；
  Vulkanland Steiermark 在資料集中的前身為 Süd-Oststeiermark（PDO-AT-A0226）；Neusiedlersee、Thermenregion 等範圍為資料集當時版本。
  Wien 範圍用於 Wiener Gemischter Satz DAC。
屬性（name／official／tier／zone／year／styles／grapes／notes）為教學用，數字與 Level 1–3 課程一致（見 AUSTRIA_COURSE_FRAMEWORK.md）。
用法：python3 -I scripts/build-austria-geojson.py <EU_PDO.gpkg> <PDO_EU_id.csv> [輸出路徑]
需要：pip install shapely pyproj
"""
import csv, json, sqlite3, sys
from shapely import wkb
from shapely.ops import transform
from shapely.geometry import mapping
from pyproj import Transformer

gpkg, idcsv = sys.argv[1], sys.argv[2]
out = sys.argv[3] if len(sys.argv) > 3 else 'public/austria/austria_pdo.geojson'
TOL_M = 40

W = ['白酒']
GV_R = ['Grüner Veltliner', 'Riesling']
# id: (顯示名, 邦 zone, DAC 年份字串或 None, 酒款, 品種, 教學註記)
AOC = {
  'PDO-AT-A0205': ('Wachau', 'noe', '2020', W, GV_R,
    '多瑙河的狹窄河谷與陡峭梯田；Vinea Wachau 三級（Steinfeder／Federspiel／Smaragd）與 DAC 三層（Gebietswein、Ortswein、Riedenwein；Riedenwein 僅限 Grüner Veltliner 與 Riesling）並行。DAC 自 2020 年份起強制實施。'),
  'PDO-AT-A0208': ('Kremstal', 'noe', None, W, GV_R,
    '以 Krems 與 Stein 周邊為中心，僅限 Grüner Veltliner 與 Riesling；Klassik 最低 12%、Reserve 最低 13%。DAC 年份各來源有出入（2006 或 2007），本課程不列。'),
  'PDO-AT-A0209': ('Kamptal', 'noe', '2008', W, GV_R,
    '僅限 Grüner Veltliner 與 Riesling；Klassik 最低 12%、Reserve 最低 13%。'),
  'PDO-AT-A0210': ('Traisental', 'noe', '2006', W, GV_R,
    '位於多瑙河以南的 Traisen 河谷，僅限 Grüner Veltliner 與 Riesling；Klassik 最低 12%、Reserve 最低 13%。'),
  'PDO-AT-A0206': ('Weinviertel', 'noe', '2002', W, ['Grüner Veltliner'],
    '第一個 DAC（2002 年份，2003 年核准），僅限 Grüner Veltliner；Klassik 最低 12%、Reserve 最低 13%（Reserve 自 2009 年份起）。'),
  'PDO-AT-A0233': ('Wagram', 'noe', '2021', W, ['Grüner Veltliner'],
    '2021 年成為 DAC，以黃土地形聞名，與 Grüner Veltliner 關係密切。'),
  'PDO-AT-A0217': ('Carnuntum', 'noe', '2019', ['紅酒', '白酒'], ['Blaufränkisch', 'Zweigelt', 'Weissburgunder', 'Chardonnay', 'Grüner Veltliner'],
    '2019 年成為 DAC：紅酒為 Blaufränkisch 與 Zweigelt（最低 12.0% abv），白酒為 Pinot Blanc、Chardonnay、Grüner Veltliner；混釀酒至少三分之二來自指定品種。'),
  'PDO-AT-A0229': ('Thermenregion', 'noe', '2023', ['紅酒', '白酒'], [],
    '2023 年成為 DAC，位於 Wien 南方；Gebietswein 與 Ortswein 最低 12%、Riedenwein 最低 12.5%。'),
  'PDO-AT-A0235': ('Wien（Wiener Gemischter Satz）', 'wien', '2013', W, ['Gemischter Satz（混植混釀）'],
    '首都的城市葡萄園；Wiener Gemischter Satz DAC（2013 年）為混植混釀：至少三個白品種，最大宗不超過 50%，第三品種至少 10%。'),
  'PDO-AT-A0219': ('Neusiedlersee', 'bgld', '2010／2011', ['紅酒', '甜酒'], ['Zweigelt'],
    'Neusiedler See 東岸；Reserve（2010 年）至少 60% Zweigelt、Klassik（2011 年）至少 85% Zweigelt，甜型自 2020 年起（殘糖至少 45 g/L）。'),
  'PDO-AT-A0216': ('Leithaberg', 'bgld', '2008／2009', ['紅酒', '白酒'], ['Blaufränkisch', 'Weissburgunder', 'Chardonnay', 'Neuburger', 'Grüner Veltliner'],
    '紅酒（2008 年份）至少 85% Blaufränkisch；白酒（2009 年份）為 Pinot Blanc、Chardonnay、Neuburger、Grüner Veltliner。'),
  'PDO-AT-A0214': ('Mittelburgenland', 'bgld', '2005', ['紅酒'], ['Blaufränkisch'],
    '僅限 Blaufränkisch；Klassik 12.5–13%，Reserve 最低 13%（大木桶或小橡木桶）。'),
  'PDO-AT-A0215': ('Eisenberg', 'bgld', None, ['紅酒'], ['Blaufränkisch'],
    '位於 Burgenland 最南部，以 Blaufränkisch 為核心；Klassik 12.5–13%，Reserve 最低 13%。DAC 年份本課程未查到，不列。'),
  'PDO-AT-A0228': ('Südsteiermark', 'stmk', '2018', W, ['Sauvignon Blanc', 'Welschriesling', 'Chardonnay（Morillon）', 'Gelber Muskateller'],
    '2018 年成為 DAC（Gebietswein、Ortswein、Riedenwein 三層）；以 Sauvignon Blanc、Welschriesling、Morillon 等白酒聞名。'),
  'PDO-AT-A0226': ('Vulkanland Steiermark', 'stmk', '2018', W, [],
    '2018 年成為 DAC，名稱來自火山地形。地圖範圍採歐盟資料集中的前身名稱 Süd-Oststeiermark，與現行 DAC 範圍可能略有出入。'),
  'PDO-AT-A0234': ('Weststeiermark', 'stmk', '2018', ['粉紅酒', '白酒'], ['Blauer Wildbacher'],
    '2018 年成為 DAC，額外納入 Blauer Wildbacher，釀成高酸的 Schilcher 粉紅酒。'),
}
OFFICIAL = {'PDO-AT-A0226': 'Süd-Oststeiermark（歐盟資料集的前身名稱）'}

rows = {r['PDOid']: r for r in csv.DictReader(open(idcsv, encoding='utf-8-sig')) if r['Country'] == 'AT'}
tr = Transformer.from_crs(3035, 4326, always_xy=True).transform
c = sqlite3.connect(gpkg)
feats = []
for oid, g, pid in c.execute("select OBJECTID,Shape,PDOid from EU_PDO where PDOid like 'PDO-AT%'"):
    if pid not in AOC: continue
    g = bytes(g); env = {0: 0, 1: 32, 2: 48, 3: 48, 4: 64}[(g[3] >> 1) & 7]
    geo = wkb.loads(g[8 + env:])
    area = geo.area / 1e6
    geo = geo.simplify(TOL_M, preserve_topology=True)
    geo = transform(tr, geo)
    name, zone, year, styles, grapes, notes = AOC[pid]
    feats.append({'type': 'Feature', 'properties': {
        'id': pid, 'name': name, 'official': OFFICIAL.get(pid, rows[pid]['PDOnam'].strip() if not name.startswith(rows[pid]['PDOnam'].strip()) else ''),
        'tier': 'dac', 'zone': zone, 'year': year, 'area_km2': round(area, 1), 'styles': styles, 'grapes': grapes, 'notes': notes},
        'geometry': json.loads(json.dumps(mapping(geo), separators=(',', ':')))})
assert len(feats) == len(AOC), (len(feats), len(AOC))
def rnd(x): return round(x, 5) if isinstance(x, float) else ([rnd(i) for i in x] if isinstance(x, (list, tuple)) else x)
for f in feats: f['geometry']['coordinates'] = rnd(f['geometry']['coordinates'])
feats.sort(key=lambda f: -f['properties']['area_km2'])  # 大的先畫，小的疊在上面
json.dump({'type': 'FeatureCollection', 'name': 'austria_pdo', 'features': feats}, open(out, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
print('wrote', out, len(feats), 'features')
