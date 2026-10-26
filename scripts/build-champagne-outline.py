#!/usr/bin/env python3
"""
scripts/build-champagne-outline.py
簡易版地圖資料（村莊邊界取不到時的退路）：Bianchi et al. (2022, CC0) 的 PDO-FR-A1359 Champagne 多邊形（簡化）＋ 17 個 Grand Cru 的示意點。
輸出：public/champagne/champagne_pdo_outline.geojson（明確標示非官方邊界；點為各 Grand Cru 行政區的代表點，僅示意）
用法：python3 -I scripts/build-champagne-outline.py <EU_PDO.gpkg 路徑>    （EU_PDO.gpkg：https://api.figshare.com/v2/articles/19312094 → files[0]）
需先執行 build-champagne-crus.py 產生 champagne_crus.geojson。
"""
import json, os, sys
import geopandas as gpd
from shapely.geometry import shape, mapping

root = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
g = gpd.read_file(sys.argv[1])
geom = g[g.PDOid == 'PDO-FR-A1359'].to_crs(4326).geometry.iloc[0].simplify(0.003, preserve_topology=True)
d = json.load(open(os.path.join(root, 'public/champagne/champagne_crus.geojson')))
pts = []
for f in d['features']:
    p = f['properties']
    for m in p['members']:
        if m['grade'] == 'grand_cru':
            c = shape(f['geometry']).representative_point()
            pts.append({'type': 'Feature', 'properties': {'kind': 'point', 'name': m['name'], 'grade': 'grand_cru', 'sub': p['sub']},
                        'geometry': {'type': 'Point', 'coordinates': [round(c.x, 4), round(c.y, 4)]}})


def rnd(c):
    return [round(c[0], 4), round(c[1], 4)] if isinstance(c[0], (int, float)) else [rnd(x) for x in c]


gj = mapping(geom)
out = {'type': 'FeatureCollection',
       'meta': {'source': 'Bianchi et al. 2022 (CC0) PDO-FR-A1359 Champagne polygon (simplified); points are schematic',
                'note': 'Not an official boundary; points are indicative positions of Grand Cru villages.'},
       'features': [{'type': 'Feature', 'properties': {'kind': 'pdo', 'name': 'Champagne AOC'},
                     'geometry': {'type': gj['type'], 'coordinates': rnd(gj['coordinates'])}}] + pts}
open(os.path.join(root, 'public/champagne/champagne_pdo_outline.geojson'), 'w', encoding='utf-8').write(json.dumps(out, ensure_ascii=False, separators=(',', ':')))
print('points', len(pts))
