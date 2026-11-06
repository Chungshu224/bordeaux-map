#!/usr/bin/env python3
"""把普羅旺斯的 KML（INAO 地塊劃界）依 AOC 合併，缺的部分用歐盟 PDO 資料集補上，輸出探索地圖用的 GeoJSON。

用法：python scripts/build-provence-aoc-geojson.py "<Provence 資料夾>" <EU_PDO.gpkg> <PDO_EU_id.csv>
需要 shapely、pyproj。歐盟資料集（Bianchi et al. 2022，CC0）的下載位置見 scripts/build-rhone-geojson.py。
Pierrevert 不在這個資料夾，取自隆河的輸出 public/rhone/geojson/aoc/pierrevert.geojson。
輸出：
  public/provence/geojson/<slug>.geojson   每個範圍一個檔
  public/provence/provence_aoc.geojson     地圖載入的合併檔

KML 沒有科西嘉、Cassis、Bellet，這些用歐盟資料集的村莊層級範圍。
Côtes de Provence 的 KML 有 80／84 個村莊（缺 Cavalaire-sur-Mer、Ceyreste、La Valette-du-Var、Sanary-sur-Mer），
地塊仍輸出成獨立檔（partial: true），地圖改用歐盟資料集的完整範圍。
「Cote de provence <地名>.kml」的資料都標成 Côtes de Provence，村莊數與各補充地理名稱相符，
應是依村莊篩出的 Côtes de Provence 地塊，所以另外標 source: 'dgc'，不當成該名稱自己的劃界。
來源 KML 的重音字已損毀（U+FFFD），所以名稱一律用下面的對照表，不讀檔內文字。
"""
import csv
import json
import math
import re
import sqlite3
import sys
import unicodedata
import xml.etree.ElementTree as ET
from collections import defaultdict
from pathlib import Path

from pyproj import Transformer
from shapely import wkb
from shapely.geometry import MultiPolygon, Polygon, mapping, shape
from shapely.ops import transform, unary_union

NS = '{http://www.opengis.net/kml/2.2}'
SIMPLIFY_DEGREES = 0.0003  # 約 30 公尺
MIN_PART_KM2 = 0.005  # 0.5 公頃
EU_TOLERANCE_M = 40
ROOT = Path(__file__).resolve().parent.parent / 'public'
OUT = ROOT / 'provence'

# 「Provence Corse.kml」的 id_app → (地圖 id, 名稱, 產區群)
AOCS = {
    '292': ('BANDOL', 'Bandol', 'west'),
    '295': ('AIX', "Coteaux d'Aix-en-Provence", 'west'),
    '301': ('BAUX', 'Les Baux-de-Provence', 'west'),
    '298': ('PALETTE', 'Palette', 'west'),
    '297': ('COTES', 'Côtes de Provence', 'east'),
    '582': ('VAROIS', 'Coteaux Varois en Provence', 'east'),
}
# 檔名 → Côtes de Provence 的補充地理名稱
DGC = {
    'Cote de provence Sainte-Victoire.kml': ('SAINTEVICTOIRE', 'Sainte-Victoire'),
    'Cote de provence Fréjus.kml': ('FREJUS', 'Fréjus'),
    'Cote de provence La Londe.kml': ('LALONDE', 'La Londe'),
    'Cote de provence Pierrefeu.kml': ('PIERREFEU', 'Pierrefeu'),
    'Cote de provence Notre-Dame des Anges.kml': ('NDANGES', 'Notre-Dame des Anges'),
}
# KML 沒有的 AOC：歐盟 PDOid → (地圖 id, 名稱, 產區群)
PARTIAL = {'297': 'PDO-FR-A0392'}
EU_ONLY = {
    'PDO-FR-A0396': ('CASSIS', 'Cassis', 'west'),
    'PDO-FR-A0663': ('BELLET', 'Bellet', 'east'),
    'PDO-FR-A0157': ('PATRIMONIO', 'Patrimonio', 'corsica'),
    'PDO-FR-A0156': ('AJACCIO', 'Ajaccio', 'corsica'),
    'PDO-FR-A0145': ('VINDECORSE', 'Vin de Corse', 'corsica'),
    'PDO-FR-A0722': ('MUSCATCAP', 'Muscat du Cap Corse', 'corsica'),
}


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


def read_kml(path):
    """回傳 id_app → (多邊形清單, 村莊集合)。"""
    polys = defaultdict(list)
    communes = defaultdict(set)
    for _, el in ET.iterparse(path, events=('end',)):
        if el.tag != NS + 'Placemark':
            continue
        data = {s.get('name'): s.text or '' for s in el.iter(NS + 'SimpleData')}
        app = data['id_app'].split('.')[0]
        polys[app].extend(read_placemark(el))
        communes[app].add(data['new_nomcom'])
        el.clear()
    return polys, communes


def km2(geom, lat):
    return geom.area * 111.32 * 111.32 * math.cos(math.radians(lat))


def clean(geom, lat):
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


def feature_of(key, name, zone, geom, area, communes, source):
    rep = geom.representative_point()
    w, s, e, n = geom.bounds
    return {
        'type': 'Feature',
        'properties': {
            'id': f'PV-PT-{key}', 'name': name, 'zone': zone, 'communes': communes, 'source': source,
            'areaKm2': round(area, 2 if area < 10 else 1),
            'center': [round(rep.x, 4), round(rep.y, 4)],
            'bbox': [round(w, 4), round(s, 4), round(e, 4), round(n, 4)],
        },
        'geometry': rounded(geom),
    }


def from_parcels(key, name, zone, polys, communes, source):
    merged = unary_union(polys)
    lat = merged.centroid.y
    return feature_of(key, name, zone, clean(merged, lat), km2(merged, lat), communes, source)


def main(folder, gpkg, idcsv):
    folder = Path(folder)
    features = []
    polys, communes = read_kml(folder / 'Provence Corse.kml')
    if set(polys) != set(AOCS):
        raise SystemExit(f'id_app 不符：{set(polys) ^ set(AOCS)}')
    partial_files = []
    for app, (key, name, zone) in AOCS.items():
        f = from_parcels(key, name, zone, polys[app], len(communes[app]), 'inao')
        if app in PARTIAL:
            partial_files.append((f, PARTIAL[app]))
        else:
            features.append(f)

    for fname, (key, name) in DGC.items():
        matches = [p for p in folder.glob('*.kml') if unicodedata.normalize('NFC', p.name) == unicodedata.normalize('NFC', fname)]
        path = matches[0] if matches else next(p for p in folder.glob(f'*{name[:5]}*.kml'))
        p, c = read_kml(path)
        features.append(from_parcels(key, name, 'east', p['297'], len(c['297']), 'dgc'))

    pierrevert = json.loads((ROOT / 'rhone' / 'geojson' / 'aoc' / 'pierrevert.geojson').read_text(encoding='utf-8'))['features'][0]
    g = shape(pierrevert['geometry'])
    features.append(feature_of('PIERREVERT', 'Pierrevert', 'east', g, pierrevert['properties']['area_km2'], pierrevert['properties']['communes'], 'inao'))

    csv.field_size_limit(10 ** 8)
    munis = {}
    for r in csv.DictReader(open(idcsv, encoding='utf-8-sig')):
        munis[r['PDOid']] = len({m.strip() for m in re.split(r'[/;]', r['Municip_nam']) if m.strip()})
    con = sqlite3.connect(gpkg)
    to_ll = Transformer.from_crs('EPSG:3035', 'EPSG:4326', always_xy=True).transform
    eu = dict(EU_ONLY)
    for f, pid in partial_files:
        eu[pid] = (f['properties']['id'].replace('PV-PT-', ''), f['properties']['name'], f['properties']['zone'])
    for pid, (key, name, zone) in eu.items():
        blob = con.execute('select Shape from EU_PDO where PDOid=?', (pid,)).fetchone()[0]
        env = (blob[3] >> 1) & 7
        off = 8 + {0: 0, 1: 32, 2: 48, 3: 48, 4: 64}[env]
        g = wkb.loads(bytes(blob[off:]))
        area = g.area / 1e6
        g = transform(to_ll, g.simplify(EU_TOLERANCE_M, preserve_topology=True))
        features.append(feature_of(key, name, zone, g, area, munis[pid], 'eu'))

    for f in features:
        write(OUT / 'geojson' / f"{slug(f['properties']['name'])}.geojson", {'type': 'FeatureCollection', 'features': [f]})
    for f, pid in partial_files:
        f['properties'].update(partial=True, expectedCommunes=munis[pid])
        write(OUT / 'geojson' / f"{slug(f['properties']['name'])}.geojson", {'type': 'FeatureCollection', 'features': [f]})
    # 大範圍先畫，小範圍疊在上面才點得到
    features.sort(key=lambda f: -f['properties']['areaKm2'])
    out = OUT / 'provence_aoc.geojson'
    write(out, {'type': 'FeatureCollection', 'features': features})
    print(f'{len(features)} 個範圍，合併檔 {out.stat().st_size / 1024:.0f} KB')
    for f in features:
        p = f['properties']
        print(f"{p['name']:30} {p['zone']:8} {p['source']:4} 村莊 {p['communes']:3} {p['areaKm2']:8.1f} km² {len(json.dumps(f['geometry'])) // 1024:5} KB  {p['center']}")


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2], sys.argv[3])
