#!/usr/bin/env python3
"""把西南產區 KML（INAO 地塊劃界，每列一個「村莊 × AOC」）依 AOC 合併，輸出探索地圖用的 GeoJSON。

用法：python scripts/build-southwest-aoc-geojson.py "<Sudouest region.kml>" <EU_PDO.gpkg> <PDO_EU_id.csv>
需要 shapely、pyproj。歐盟資料集（Bianchi et al. 2022，CC0）的下載位置見 scripts/build-rhone-geojson.py。

KML 是 2018 年的地塊資料。依歐盟資料集的村莊清單比對，PARTIAL 列出的 AOC 缺村莊：它們的地塊仍輸出成
獨立檔（partial: true），地圖改用歐盟資料集的完整範圍（村莊層級）。

輸出：
  public/southwest/geojson/<slug>.geojson   每個 AOC 一個檔
  public/southwest/southwest_aoc.geojson    全部合併，地圖載入這個檔

幾何是地塊層級的劃界（共約 2 萬個多邊形），不是整個村莊。來源 KML 的重音字已損毀（U+FFFD），
所以名稱一律用下面的對照表，不讀檔內文字。
"""
import json
import csv
import math
import re
import sqlite3
import sys
import xml.etree.ElementTree as ET
from collections import defaultdict
from pathlib import Path

from pyproj import Transformer
from shapely import wkb
from shapely.geometry import MultiPolygon, Polygon, mapping
from shapely.ops import transform, unary_union

NS = '{http://www.opengis.net/kml/2.2}'
SIMPLIFY_DEGREES = 0.0003  # 約 30 公尺
MIN_PART_KM2 = 0.005  # 0.5 公頃；這組參數保留約 98.5% 面積，合併檔約 4.4 MB
EU_TOLERANCE_M = 40
OUT = Path(__file__).resolve().parent.parent / 'public' / 'southwest'

# id_app → KML 缺村莊的 AOC 的歐盟 PDOid（KML 村莊數／歐盟清單：Béarn 64／82、Gaillac 68／71、
# Gaillac premières côtes 10／11、Côtes de Montravel 13／15）
PARTIAL = {'9': 'PDO-FR-A0597', '34': 'PDO-FR-A0502', '36': 'PDO-FR-A0326', '28': 'PDO-FR-A0188'}

# id_app → (地圖 id, 正確名稱, 產區群)
AOCS = {
    '10': ('BERGERAC', 'Bergerac', 'dordogne'),
    '12': ('COTESBERGERAC', 'Côtes de Bergerac', 'dordogne'),
    '60': ('PECHARMANT', 'Pécharmant', 'dordogne'),
    '54': ('MONBAZILLAC', 'Monbazillac', 'dordogne'),
    '74': ('SAUSSIGNAC', 'Saussignac', 'dordogne'),
    '56': ('MONTRAVEL', 'Montravel', 'dordogne'),
    '28': ('COTESMONTRAVEL', 'Côtes de Montravel', 'dordogne'),
    '40': ('HAUTMONTRAVEL', 'Haut-Montravel', 'dordogne'),
    '66': ('ROSETTE', 'Rosette', 'dordogne'),
    '27': ('DURAS', 'Côtes de Duras', 'dordogne'),
    '21': ('CAHORS', 'Cahors', 'valleys'),
    '51': ('MARCILLAC', 'Marcillac', 'valleys'),
    '19': ('BUZET', 'Buzet', 'valleys'),
    '30': ('MARMANDAIS', 'Côtes du Marmandais', 'valleys'),
    '34': ('GAILLAC', 'Gaillac', 'valleys'),
    '36': ('GAILLACPC', 'Gaillac premières côtes', 'valleys'),
    '29': ('FRONTON', 'Fronton', 'valleys'),
    '1019': ('BRULHOIS', 'Brulhois', 'valleys'),
    '688': ('QUERCY', 'Coteaux du Quercy', 'valleys'),
    '731': ('MILLAU', 'Côtes de Millau', 'valleys'),
    '1016': ('ENTRAYGUES', 'Entraygues - Le Fel', 'valleys'),
    '1017': ('ESTAING', 'Estaing', 'valleys'),
    '686': ('SAINTSARDOS', 'Saint-Sardos', 'valleys'),
    '48': ('MADIRAN', 'Madiran', 'gascony'),
    '49': ('PACHERENC', 'Pacherenc du Vic-Bilh', 'gascony'),
    '741': ('SAINTMONT', 'Saint-Mont', 'gascony'),
    '1020': ('TURSAN', 'Tursan', 'gascony'),
    '42': ('JURANCON', 'Jurançon', 'pyrenees'),
    '9': ('BEARN', 'Béarn', 'pyrenees'),
    '41': ('IROULEGUY', 'Irouléguy', 'pyrenees'),
}


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
    """簡化邊界並移除併合後留下的細小碎片。"""
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
    return MultiPolygon(kept) if len(kept) > 1 else kept[0]


def rounded(geom):
    def coords(c):
        if isinstance(c[0], (int, float)):
            return [round(c[0], 5), round(c[1], 5)]
        return [coords(x) for x in c]
    m = mapping(geom)
    return {'type': m['type'], 'coordinates': coords(m['coordinates'])}


def main(kml, gpkg, idcsv):
    groups = defaultdict(list)
    communes = defaultdict(int)
    for _, el in ET.iterparse(kml, events=('end',)):
        if el.tag != NS + 'Placemark':
            continue
        data = {s.get('name'): s.text or '' for s in el.iter(NS + 'SimpleData')}
        app = data['id_app'].split('.')[0]
        if app not in AOCS:
            raise SystemExit(f'未知的 id_app：{app} {data["appellatio"]!r}')
        groups[app].extend(read_placemark(el))
        communes[app] += 1
        el.clear()
    if set(groups) != set(AOCS):
        raise SystemExit(f'KML 缺少：{set(AOCS) - set(groups)}')

    csv.field_size_limit(10 ** 8)
    munis = {}
    for r in csv.DictReader(open(idcsv, encoding='utf-8-sig')):
        munis[r['PDOid']] = len({m.strip() for m in re.split(r'[/;]', r['Municip_nam']) if m.strip()})
    con = sqlite3.connect(gpkg)
    to_ll = Transformer.from_crs('EPSG:3035', 'EPSG:4326', always_xy=True).transform

    def eu_feature(pid, key, name, zone):
        blob = con.execute('select Shape from EU_PDO where PDOid=?', (pid,)).fetchone()[0]
        env = (blob[3] >> 1) & 7
        off = 8 + {0: 0, 1: 32, 2: 48, 3: 48, 4: 64}[env]
        g = wkb.loads(bytes(blob[off:]))
        area = g.area / 1e6
        g = transform(to_ll, g.simplify(EU_TOLERANCE_M, preserve_topology=True))
        rep = g.representative_point()
        w, s, e, n = g.bounds
        return {
            'type': 'Feature',
            'properties': {
                'id': f'SW-PT-{key}', 'name': name, 'zone': zone, 'communes': munis[pid], 'source': 'eu',
                'areaKm2': round(area, 1), 'center': [round(rep.x, 4), round(rep.y, 4)],
                'bbox': [round(w, 4), round(s, 4), round(e, 4), round(n, 4)],
            },
            'geometry': rounded(g),
        }

    (OUT / 'geojson').mkdir(parents=True, exist_ok=True)
    features = []
    for app, (key, name, zone) in AOCS.items():
        merged = unary_union(groups[app])
        lat = merged.centroid.y
        geom = clean(merged, lat)
        rep = geom.representative_point()
        w, s, e, n = geom.bounds
        feature = {
            'type': 'Feature',
            'properties': {
                'id': f'SW-PT-{key}', 'name': name, 'zone': zone, 'communes': communes[app], 'source': 'inao',
                'areaKm2': round(km2(merged, lat), 1),
                'center': [round(rep.x, 4), round(rep.y, 4)],
                'bbox': [round(w, 4), round(s, 4), round(e, 4), round(n, 4)],
            },
            'geometry': rounded(geom),
        }
        if app in PARTIAL:
            feature['properties'].update(partial=True, expectedCommunes=munis[PARTIAL[app]])
            features.append(eu_feature(PARTIAL[app], key, name, zone))
        else:
            features.append(feature)
        path = OUT / 'geojson' / f'{key.lower()}.geojson'
        path.write_text(json.dumps({'type': 'FeatureCollection', 'features': [feature]}, ensure_ascii=False, separators=(',', ':')), encoding='utf-8')

    # 大範圍先畫，小範圍疊在上面才點得到
    features.sort(key=lambda f: -f['properties']['areaKm2'])
    out = OUT / 'southwest_aoc.geojson'
    out.write_text(json.dumps({'type': 'FeatureCollection', 'features': features}, ensure_ascii=False, separators=(',', ':')), encoding='utf-8')
    print(f'{len(features)} AOC，合併檔 {out.stat().st_size / 1024:.0f} KB')
    for f in features:
        p = f['properties']
        print(f"{p['name']:28} {p['zone']:9} 村莊 {p['communes']:3}  {p['areaKm2']:8.1f} km²  center {p['center']}")


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2], sys.argv[3])
