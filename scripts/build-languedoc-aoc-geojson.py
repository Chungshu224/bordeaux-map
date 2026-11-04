#!/usr/bin/env python3
"""把朗格多克—魯西永 KML（INAO 地塊劃界）依 AOC 合併，缺的部分用歐盟 PDO 資料集補上，輸出探索地圖用的 GeoJSON。

用法：python scripts/build-languedoc-aoc-geojson.py "<LR region.kml>" <EU_PDO.gpkg> <PDO_EU_id.csv>
需要 shapely、pyproj。歐盟資料集（Bianchi et al. 2022，CC0）的下載位置見 scripts/build-rhone-geojson.py。
輸出：
  public/languedoc/geojson/<slug>.geojson                每個 AOC 一個檔
  public/languedoc/geojson/denominations/<slug>.geojson  AOC 內的地名（僅獨立檔，不上地圖）
  public/languedoc/languedoc_aoc.geojson                 地圖載入的合併檔

KML 是 2018 年的地塊資料。依歐盟資料集的村莊清單比對：Corbières、Languedoc、Grand Roussillon 缺村莊
（見 PARTIAL），這些的地塊仍輸出成獨立檔（partial: true），地圖改用歐盟資料集的完整範圍。
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
from shapely.geometry import MultiPolygon, Polygon, mapping
from shapely.ops import transform, unary_union

NS = '{http://www.opengis.net/kml/2.2}'
SIMPLIFY_DEGREES = 0.0003  # 約 30 公尺
MIN_PART_KM2 = 0.005  # 0.5 公頃
EU_TOLERANCE_M = 40
OUT = Path(__file__).resolve().parent.parent / 'public' / 'languedoc'

# id_app → (地圖 id, 名稱, 產區群)
AOCS = {
    '264': ('CABARDES', 'Cabardès', 'west'),
    '1098': ('BOUTENAC', 'Corbières-Boutenac', 'west'),
    '250': ('CREMANTLIMOUX', 'Crémant de Limoux', 'west'),
    '251': ('LIMOUX', 'Limoux', 'west'),
    '608': ('MALEPERE', 'Malepère', 'west'),
    '262': ('MINERVOIS', 'Minervois', 'west'),
    '265': ('LIVINIERE', 'Minervois-La Livinière', 'west'),
    '253': ('CLAIRETTE', 'Clairette du Languedoc', 'east'),
    '260': ('FAUGERES', 'Faugères', 'east'),
    '831': ('LACLAPE', 'La Clape', 'east'),
    '304': ('FRONTIGNAN', 'Muscat de Frontignan', 'east'),
    '309': ('LUNEL', 'Muscat de Lunel', 'east'),
    '310': ('MIREVAL', 'Muscat de Mireval', 'east'),
    '311': ('STJEAN', 'Muscat de Saint-Jean-de-Minervois', 'east'),
    '833': ('PICSTLOUP', 'Pic Saint-Loup', 'east'),
    '733': ('PICPOUL', 'Picpoul de Pinet', 'east'),
    '263': ('STCHINIAN', 'Saint-Chinian', 'east'),
    '1042': ('LARZAC', 'Terrasses du Larzac', 'east'),
    '258': ('COTESROUSS', 'Côtes du Roussillon', 'roussillon'),
    '259': ('VILLAGES', 'Côtes du Roussillon-Villages', 'roussillon'),
}
# id_app → KML 缺村莊的 AOC：(地圖 id, 名稱, 產區群, 歐盟 PDOid)
PARTIAL = {
    '255': ('CORBIERES', 'Corbières', 'west', 'PDO-FR-A0671'),
    '257': ('LANGUEDOC', 'Languedoc', 'east', 'PDO-FR-A0922'),
    '305': ('GRANDROUSSILLON', 'Grand Roussillon', 'vdn', 'PDO-FR-A0721'),
}
# KML 沒有的 AOC：歐盟 PDOid → (地圖 id, 名稱, 產區群)
EU_ONLY = {
    'PDO-FR-A0195': ('FITOU', 'Fitou', 'west'),
    'PDO-FR-A1049': ('COLLIOURE', 'Collioure', 'roussillon'),
    'PDO-FR-A0672': ('BANYULS', 'Banyuls', 'vdn'),
    'PDO-FR-A0673': ('BANYULSGC', 'Banyuls Grand Cru', 'vdn'),
    'PDO-FR-A0719': ('MAURY', 'Maury', 'vdn'),
    'PDO-FR-A0623': ('RIVESALTES', 'Rivesaltes', 'vdn'),
    'PDO-FR-A1102': ('MUSCATRIVESALTES', 'Muscat de Rivesaltes', 'vdn'),
}
ASPRES_DENOM = '1691'
# id_denom → AOC 內的地名
DENOMINATIONS = {
    '1319': "Languedoc Saint-Georges-d'Orques", '2322': 'Languedoc La Méjanelle', '1320': 'Languedoc Saint-Saturnin',
    '1313': 'Languedoc Montpeyroux', '1316': 'Languedoc Quatourze', '2323': 'Languedoc Saint-Christol',
    '1310': 'Languedoc Cabrières', '1318': 'Languedoc Saint-Drézéry', '1332': 'Saint-Chinian Berlou',
    '1700': 'Saint-Chinian Roquebrun', '1327': 'Côtes du Roussillon Villages Lesquerde',
    '1325': 'Côtes du Roussillon Villages Caramany', '1328': 'Côtes du Roussillon Villages Tautavel',
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


def collection(feature):
    return {'type': 'FeatureCollection', 'features': [feature]}


def feature_of(key, name, zone, geom, area, communes, source):
    rep = geom.representative_point()
    w, s, e, n = geom.bounds
    return {
        'type': 'Feature',
        'properties': {
            'id': f'LG-PT-{key}', 'name': name, 'zone': zone, 'communes': communes, 'source': source,
            'areaKm2': round(area, 2 if area < 10 else 1),
            'center': [round(rep.x, 4), round(rep.y, 4)],
            'bbox': [round(w, 4), round(s, 4), round(e, 4), round(n, 4)],
        },
        'geometry': rounded(geom),
    }


def main(kml, gpkg, idcsv):
    by_app = defaultdict(list)
    by_denom = defaultdict(list)
    communes_app = defaultdict(set)
    communes_denom = defaultdict(set)
    for _, el in ET.iterparse(kml, events=('end',)):
        if el.tag != NS + 'Placemark':
            continue
        data = {s.get('name'): s.text or '' for s in el.iter(NS + 'SimpleData')}
        app = data['id_app'].split('.')[0]
        denom = data['id_denom'].split('.')[0]
        if app not in AOCS and app not in PARTIAL:
            raise SystemExit(f'未知的 id_app：{app} {data["appellatio"]!r}')
        polys = read_placemark(el)
        by_app[app].extend(polys)
        communes_app[app].add(data['new_nomcom'])
        if denom == ASPRES_DENOM or denom in DENOMINATIONS:
            by_denom[denom].extend(polys)
            communes_denom[denom].add(data['new_nomcom'])
        el.clear()

    features = []

    def from_parcels(key, name, zone, polys, communes):
        merged = unary_union(polys)
        lat = merged.centroid.y
        return feature_of(key, name, zone, clean(merged, lat), km2(merged, lat), communes, 'inao')

    for app, (key, name, zone) in AOCS.items():
        f = from_parcels(key, name, zone, by_app[app], len(communes_app[app]))
        features.append(f)
        write(OUT / 'geojson' / f'{slug(name)}.geojson', collection(f))
    aspres = from_parcels('ASPRES', 'Côtes du Roussillon Les Aspres', 'roussillon', by_denom[ASPRES_DENOM], len(communes_denom[ASPRES_DENOM]))
    features.append(aspres)
    write(OUT / 'geojson' / 'cotes-du-roussillon-les-aspres.geojson', collection(aspres))
    for denom, name in DENOMINATIONS.items():
        f = from_parcels(f'DENOM-{slug(name).upper()}', name, '', by_denom[denom], len(communes_denom[denom]))
        write(OUT / 'geojson' / 'denominations' / f'{slug(name)}.geojson', collection(f))

    # 歐盟資料集：KML 缺村莊或沒有的 AOC
    csv.field_size_limit(10 ** 8)
    munis = {}
    for r in csv.DictReader(open(idcsv, encoding='utf-8-sig')):
        munis[r['PDOid']] = len({m.strip() for m in re.split(r'[/;]', r['Municip_nam']) if m.strip()})
    con = sqlite3.connect(gpkg)
    to_ll = Transformer.from_crs('EPSG:3035', 'EPSG:4326', always_xy=True).transform

    def from_eu(pid, key, name, zone):
        blob = con.execute('select Shape from EU_PDO where PDOid=?', (pid,)).fetchone()[0]
        env = (blob[3] >> 1) & 7
        off = 8 + {0: 0, 1: 32, 2: 48, 3: 48, 4: 64}[env]
        g = wkb.loads(bytes(blob[off:]))
        area = g.area / 1e6
        g = transform(to_ll, g.simplify(EU_TOLERANCE_M, preserve_topology=True))
        return feature_of(key, name, zone, g, area, munis[pid], 'eu')

    for app, (key, name, zone, pid) in PARTIAL.items():
        features.append(from_eu(pid, key, name, zone))
        parcels = from_parcels(key, name, zone, by_app[app], len(communes_app[app]))
        parcels['properties'].update(partial=True, expectedCommunes=munis[pid])
        write(OUT / 'geojson' / f'{slug(name)}.geojson', collection(parcels))
    for pid, (key, name, zone) in EU_ONLY.items():
        f = from_eu(pid, key, name, zone)
        features.append(f)
        write(OUT / 'geojson' / f'{slug(name)}.geojson', collection(f))

    # 大範圍先畫，小範圍疊在上面才點得到
    features.sort(key=lambda f: -f['properties']['areaKm2'])
    out = OUT / 'languedoc_aoc.geojson'
    write(out, {'type': 'FeatureCollection', 'features': features})
    print(f'{len(features)} 個 AOC，合併檔 {out.stat().st_size / 1024:.0f} KB')
    for f in features:
        p = f['properties']
        print(f"{p['name']:36} {p['zone']:10} {p['source']:4} 村莊 {p['communes']:3} {p['areaKm2']:8.1f} km² {len(json.dumps(f['geometry'])) // 1024:5} KB  {p['center']}")


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2], sys.argv[3])
