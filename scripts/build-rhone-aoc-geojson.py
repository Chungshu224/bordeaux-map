#!/usr/bin/env python3
"""把隆河 KML（INAO 地塊劃界，每列一個「村莊 × AOC × 名稱」）依 AOC 合併，輸出探索地圖用的 GeoJSON。

用法：python scripts/build-rhone-aoc-geojson.py "<Rhone region.kml>"
需要 shapely。屬性（年份、品種、說明）沿用 public/rhone/rhone_pdo.geojson；KML 沒有的 4 個 AOC
（Gigondas、Ventoux、Luberon、Muscat de Beaumes-de-Venise）的範圍也沿用該檔（歐盟資料集，CC0）。

KML 是 2018 年的地塊資料，有些 AOC 缺村莊（見 PARTIAL）。這些 AOC 的地塊仍輸出成獨立檔（partial: true），
但地圖改用歐盟資料集的完整範圍，避免把缺少的村莊畫成不在產區內。

輸出：
  public/rhone/geojson/aoc/<slug>.geojson       每個 AOC 一個檔
  public/rhone/geojson/villages/<slug>.geojson  Villages 可加註的地名（僅獨立檔，不上地圖，部分村莊不完整）
  public/rhone/rhone_aoc.geojson                地圖載入的合併檔

來源 KML 的重音字已損毀（U+FFFD），所以名稱一律用下面的對照表，不讀檔內文字。
"""
import json
import math
import re
import sys
import unicodedata
import xml.etree.ElementTree as ET
from collections import defaultdict
from pathlib import Path

from shapely.geometry import MultiPolygon, Polygon, mapping, shape
from shapely.ops import unary_union

NS = '{http://www.opengis.net/kml/2.2}'
SIMPLIFY_DEGREES = float(sys.argv[2]) if len(sys.argv) > 2 else 0.0003  # 約 30 公尺
MIN_PART_KM2 = float(sys.argv[3]) if len(sys.argv) > 3 else 0.005  # 0.5 公頃
ROOT = Path(__file__).resolve().parent.parent / 'public' / 'rhone'

# id_app → 地圖現有 id（沿用 rhone_pdo.geojson 的屬性）
EXISTING = {
    '1097': 'PDO-FR-A0724', '819': 'PDO-FR-02175', '266': 'PDO-FR-A0587', '267': 'PDO-FR-A0144',
    '269': 'PDO-FR-A0301', '270': 'PDO-FR-A0685', '271': 'PDO-FR-A0697', '256': 'PDO-FR-A0161',
    '280': 'PDO-FR-A0389', '279': 'PDO-FR-A0487', '272': 'PDO-FR-A0199', '275': 'PDO-FR-A0325',
    '276': 'PDO-FR-A0664', '1013': 'PDO-FR-A0929', '282': 'PDO-FR-A1002', '283': 'PDO-FR-A0331',
    '313': 'PDO-FR-A0720', '284': 'PDO-FR-A0200', '285': 'PDO-FR-A0398', '287': 'PDO-FR-A0328',
    '288': 'PDO-FR-A0151', '1130': 'PDO-FR-A0690',
}
# id_app → 應有的村莊數（課程內容與歐盟資料集的村莊清單）；KML 少於這個數字，代表地塊資料不完整
PARTIAL = {'267': 5, '288': 2, '1097': 4, '270': 7, '266': 2, '284': 26, '275': 172, '276': 95}
NOT_COVERED = '本課程未另外介紹這個 AOC。'
# id_app → KML 才有的 AOC
NEW_AOC = {
    '268': ('RH-AOC-CHATILLON', 'Châtillon-en-Diois'),
    '252': ('RH-AOC-BELLEGARDE', 'Clairette de Bellegarde'),
    '273': ('RH-AOC-COTEAUXDIE', 'Coteaux de Die'),
    '289': ('RH-AOC-VIVARAIS', 'Côtes du Vivarais'),
    '290': ('RH-AOC-PIERREVERT', 'Pierrevert'),
}
# id_denom → Villages 可加註的地名（Laudun 已升格為 cru，另外處理）
NAMED = {
    '1348': 'Chusclan', '1708': "Massif d'Uchaux", '1709': 'Plan de Dieu', '1710': 'Puyméras',
    '1351': 'Roaix', '1353': 'Rousset-les-Vignes', '1354': 'Sablet', '1355': 'Saint-Gervais',
    '1357': 'Saint-Pantaléon-les-Vignes', '2826': 'Sainte-Cécile', '1711': 'Signargues',
    '2827': 'Suze-la-Rousse', '1358': 'Séguret', '1359': 'Valréas',
}
LAUDUN_DENOM = '1349'
LAUDUN = {
    'id': 'RH-PT-LAUDUN', 'name': 'Laudun', 'official': 'Côtes du Rhône Villages Laudun', 'tier': 'cru', 'zone': 'south',
    'year': '2024', 'styles': ['紅酒', '白酒'], 'grapes': ['Grenache（紅酒至少 50%）', 'Syrah（紅酒至少 25%）'],
    'notes': "2024 年 9 月 11 日由 INAO 全國委員會通過，自 Côtes du Rhône Villages Laudun 升格為第 18 個 cru；Gard 省三個村莊：Laudun-l'Ardoise、Saint-Victor-la-Coste、Tresques。歐盟 PDO 資料集尚無獨立邊界，地圖僅以村鎮位置示意。",
}
NAMED_NOTE = 'Côtes du Rhône Villages 可在標籤加註的地名之一，仍屬 Villages AOC。'


def slug(text):
    s = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode().lower()
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')


def ring(el):
    pts = []
    for token in (el.text or '').split():
        lng, lat, *_ = token.split(',')
        pts.append((float(lng), float(lat)))
    return pts


def read_placemark(el):
    polys = []
    for p in el.iter(NS + 'Polygon'):
        outer = p.find(f'{NS}outerBoundaryIs/{NS}LinearRing/{NS}coordinates')
        holes = [ring(c) for c in p.findall(f'{NS}innerBoundaryIs/{NS}LinearRing/{NS}coordinates')]
        poly = Polygon(ring(outer), holes)
        polys.append(poly if poly.is_valid else poly.buffer(0))
    return polys


def km2(geom, lat):
    return geom.area * 111.32 * 111.32 * math.cos(math.radians(lat))


def clean(geom, lat):
    """簡化邊界並移除併合後留下的細小碎片；小產區保留至少最大的那一塊。"""
    simple = geom.simplify(SIMPLIFY_DEGREES, preserve_topology=True)
    if not simple.is_valid:
        simple = simple.buffer(0)
    parts = list(simple.geoms) if isinstance(simple, MultiPolygon) else [simple]
    kept = []
    for part in parts:
        if km2(part, lat) < MIN_PART_KM2:
            continue
        holes = [h for h in part.interiors if km2(Polygon(h), lat) >= MIN_PART_KM2]
        kept.append(Polygon(part.exterior, holes))
    if not kept:
        kept = [max(parts, key=lambda p: p.area)]
    return MultiPolygon(kept) if len(kept) > 1 else kept[0]


def rounded(geom):
    def coords(c):
        if isinstance(c[0], (int, float)):
            return [round(c[0], 5), round(c[1], 5)]
        return [coords(x) for x in c]
    m = mapping(geom)
    return {'type': m['type'], 'coordinates': coords(m['coordinates'])}


def write(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, separators=(',', ':')), encoding='utf-8')


def main(kml):
    old = {f['properties']['id']: f for f in json.loads((ROOT / 'rhone_pdo.geojson').read_text(encoding='utf-8'))['features']}
    by_app = defaultdict(list)
    by_denom = defaultdict(list)
    communes_app = defaultdict(set)  # 同一村莊可能有多列（不同地名），要算不重複的村莊
    communes_denom = defaultdict(set)
    for _, el in ET.iterparse(kml, events=('end',)):
        if el.tag != NS + 'Placemark':
            continue
        data = {s.get('name'): s.text or '' for s in el.iter(NS + 'SimpleData')}
        app = data['id_app'].split('.')[0]
        denom = data['id_denom'].split('.')[0]
        if app not in EXISTING and app not in NEW_AOC:
            raise SystemExit(f'未知的 id_app：{app} {data["appellatio"]!r}')
        polys = read_placemark(el)
        by_app[app].extend(polys)
        communes_app[app].add(data['new_nomcom'])
        if app == '276' and denom != '1345':
            if denom != LAUDUN_DENOM and denom not in NAMED:
                raise SystemExit(f'未知的 id_denom：{denom} {data["denominati"]!r}')
            by_denom[denom].extend(polys)
            communes_denom[denom].add(data['new_nomcom'])
        el.clear()

    features = []

    def add(props, polys, communes, folder, expected=None, on_map=True):
        merged = unary_union(polys)
        lat = merged.centroid.y
        geom = clean(merged, lat)
        feature = {
            'type': 'Feature',
            'properties': {**props, 'area_km2': round(km2(merged, lat), 2 if km2(merged, lat) < 10 else 1), 'communes': communes, 'source': 'inao'},
            'geometry': rounded(geom),
        }
        if expected:
            feature['properties'].update(partial=True, expectedCommunes=expected)
        if on_map:
            features.append(feature)
        write(ROOT / 'geojson' / folder / f"{slug(props['name'])}.geojson", {'type': 'FeatureCollection', 'features': [feature]})

    for app, fid in EXISTING.items():
        expected = PARTIAL.get(app)
        if expected and len(communes_app[app]) >= expected:
            raise SystemExit(f'{fid} 已有 {len(communes_app[app])} 個村莊，請從 PARTIAL 移除')
        add(old[fid]['properties'], by_app[app], len(communes_app[app]), 'aoc', expected, on_map=not expected)
    for app, (fid, name) in NEW_AOC.items():
        props = {'id': fid, 'name': name, 'official': name, 'tier': 'other', 'zone': 'outer', 'year': None,
                 'styles': [], 'grapes': [], 'notes': NOT_COVERED}
        add(props, by_app[app], len(communes_app[app]), 'aoc')
    add(LAUDUN, by_denom[LAUDUN_DENOM], len(communes_denom[LAUDUN_DENOM]), 'aoc')
    for denom, name in NAMED.items():
        props = {'id': f'RH-VIL-{slug(name).upper()}', 'name': name, 'official': f'Côtes du Rhône Villages {name}',
                 'tier': 'named', 'zone': 'south', 'year': None, 'styles': [], 'grapes': [], 'notes': NAMED_NOTE}
        add(props, by_denom[denom], len(communes_denom[denom]), 'villages', on_map=False)

    # KML 沒有的 AOC 沿用歐盟資料集的範圍
    done = {f['properties']['id'] for f in features}
    for fid, f in old.items():
        if fid not in done:
            kept = {'type': 'Feature', 'properties': {**f['properties'], 'source': 'eu'}, 'geometry': f['geometry']}
            features.append(kept)
            path = ROOT / 'geojson' / 'aoc' / f"{slug(f['properties']['name'])}.geojson"
            if not path.exists():  # 有地塊的 AOC 保留地塊檔；只有 KML 沒有的 AOC 才寫入歐盟範圍
                write(path, {'type': 'FeatureCollection', 'features': [kept]})

    features.sort(key=lambda f: -f['properties']['area_km2'])
    out = ROOT / 'rhone_aoc.geojson'
    write(out, {'type': 'FeatureCollection', 'features': features})
    print(f'{len(features)} 個範圍，合併檔 {out.stat().st_size / 1024:.0f} KB')
    for f in features:
        p = f['properties']
        verts = len(json.dumps(f['geometry'])) // 1024
        print(f"{p['name']:30} {p['tier']:8} {p['source']:4} 村莊 {p.get('communes', '-'):>3} {p['area_km2']:8.1f} km² {verts:5} KB")


if __name__ == '__main__':
    main(sys.argv[1])
