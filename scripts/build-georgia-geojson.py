#!/usr/bin/env python3
"""
喬治亞 PDO 近似邊界（OpenStreetMap / Nominatim，ODbL）

官方 PDO 規格（英國政府公布的喬治亞產品規格）以「村莊清單」或「市鎮」界定微型區，並無公開的 GIS 邊界。
因此本檔只做兩件事，且在屬性中誠實標示精度：
  - precision = municipality：規格明寫以市鎮為範圍者（Kakheti 八市鎮、Kindzmarauli 的 Kvareli 市鎮）→ 取 OSM 行政區多邊形
  - precision = village：規格列出的村莊 → 取 OSM 該村莊的位置點（或多邊形的中心）；不自行把村莊連成假邊界

用法：python3 scripts/build-georgia-geojson.py [--out public/georgia/georgia_pdo_areas.geojson]
Nominatim 使用政策：每秒最多 1 次、需識別用 User-Agent。快取放 /tmp 以免重複請求。
"""
import json, sys, time, os, urllib.parse, urllib.request, hashlib

OUT = 'public/georgia/georgia_pdo_areas.geojson'
if '--out' in sys.argv: OUT = sys.argv[sys.argv.index('--out') + 1]
UA = 'wineacademy-boundary-research/1.0 (education; contact via repository owner)'
CACHE = '/tmp/ge-nominatim-cache'; os.makedirs(CACHE, exist_ok=True)

# 規格來源：英國政府公布的喬治亞 PDO 產品規格（Tsinandali、Mukuzani、Kindzmarauli、Khvanchkara、Kakheti、Sviri、Teliani、Atenuri、Tvishi）
VB = {  # viewbox: left,top,right,bottom
  'kakheti': (45.0, 42.3, 46.6, 41.0), 'kartli': (43.6, 42.2, 44.8, 41.6),
  'imereti': (42.2, 42.5, 43.3, 41.9), 'racha': (42.6, 42.8, 43.7, 42.3)
}
MUNICIPALITIES = [  # (pdo, region, query, 規格依據)
  ('kakheti', 'kakheti', 'Akhmeta Municipality', 'Kakheti 規格列出的八個市鎮'),
  ('kakheti', 'kakheti', 'Telavi Municipality', 'Kakheti 規格列出的八個市鎮'),
  ('kakheti', 'kakheti', 'Gurjaani Municipality', 'Kakheti 規格列出的八個市鎮'),
  ('kakheti', 'kakheti', 'Signagi Municipality', 'Kakheti 規格列出的八個市鎮（規格拼 Sighnaghi，OSM 拼 Signagi）'),
  ('kakheti', 'kakheti', 'Dedoplistsqaro Municipality', 'Kakheti 規格列出的八個市鎮（規格拼 Dedoplistskaro，OSM 拼 Dedoplistsqaro）'),
  ('kakheti', 'kakheti', 'Kvareli Municipality', 'Kakheti 規格列出的八個市鎮；同時是 Kindzmarauli 的範圍'),
  ('kakheti', 'kakheti', 'Lagodekhi Municipality', 'Kakheti 規格列出的八個市鎮'),
  ('kakheti', 'kakheti', 'Sagarejo Municipality', 'Kakheti 規格列出的八個市鎮'),
]
VILLAGES = {  # pdo -> (region, [村名])
  'tsinandali': ('kakheti', ['Akura', 'Vanta', 'Busheti', 'Kvemo Khodasheni', 'Tsinandali', 'Kisiskhevi', 'Kondoli', 'Nasamkhrali', 'Shalaura', 'Kurdghelauri', 'Vardisubani', 'Ruispiri', 'Karajala', 'Gulgula', 'Ikalto']),
  'mukuzani': ('kakheti', ['Chumlaki', 'Akhasheni', 'Zegaani', 'Mukuzani', 'Velistsikhe', 'Vazisubani', 'Shashiani', 'Kalaura', 'Vachnadziani', 'Kakhipari']),
  'atenuri': ('kartli', ['Jebiri', 'Gardateni', 'Patara Ateni', 'Degeula', 'Chechelaantubani', 'Didi Ateni', 'Pukhaantubani']),
  'sviri': ('imereti', ['Pirveli Sviri', 'Meore Sviri', 'Rodinauli']),
  'tvishi': ('racha', ['Tvishi', 'Alpana']),
  'khvanchkara': ('racha', ['Khvanchkara', 'Tsesi', 'Kvatskhuti', 'Sadmeli', 'Bugeuli', 'Gori', 'Alpana', 'Orbeli']),
}

def fetch(q, region, polygon):
    key = hashlib.md5(f'{q}|{region}|{polygon}'.encode()).hexdigest()
    cp = f'{CACHE}/{key}.json'
    if os.path.exists(cp): return json.load(open(cp))
    l, t, r, b = VB[region]
    params = {'q': q, 'format': 'json', 'limit': 5, 'countrycodes': 'ge', 'viewbox': f'{l},{t},{r},{b}', 'bounded': 1,
              'polygon_geojson': 1 if polygon else 0, 'polygon_threshold': 0.002, 'accept-language': 'en'}
    req = urllib.request.Request('https://nominatim.openstreetmap.org/search?' + urllib.parse.urlencode(params), headers={'User-Agent': UA})
    for attempt in range(6):
        try:
            data = json.load(urllib.request.urlopen(req, timeout=40))
            break
        except urllib.error.HTTPError as e:
            if e.code not in (429, 503) or attempt == 5: raise
            wait = 15 * (attempt + 1); print(f'  {e.code}，等待 {wait} 秒後重試：{q}', file=sys.stderr); time.sleep(wait)
    json.dump(data, open(cp, 'w')); time.sleep(2.0)
    return data

feats, misses = [], []
for pdo, region, q, basis in MUNICIPALITIES:
    def big(r):  # 排除只匹配到「市鎮中心城鎮」的小範圍結果：要求外接框夠大
        bb = [float(x) for x in r['boundingbox']]
        return (bb[1] - bb[0]) > 0.15 and (bb[3] - bb[2]) > 0.15
    res = [r for r in fetch(q, region, True) if r['geojson']['type'] in ('Polygon', 'MultiPolygon') and r['display_name'].startswith(q.split()[0]) and big(r)]
    if not res: misses.append(q); continue
    r = res[0]
    feats.append({'type': 'Feature', 'geometry': r['geojson'], 'properties': {
        'pdo': pdo, 'region': region, 'name': q.replace(' Municipality', ''), 'precision': 'municipality', 'basis': basis, 'osm': r['display_name'][:90]}})
# 同名村莊很常見（如 Vardisubani、Karajala 在 Lagodekhi 也有），所以依規格所述市鎮過濾結果；找不到就列為 miss，不亂猜
EXPECT = {'tsinandali': ['Telavi Municipality'], 'mukuzani': ['Gurjaani Municipality'], 'atenuri': ['Gori Municipality'],
          'sviri': ['Zestaponi Municipality'], 'tvishi': ['Tsageri Municipality'], 'khvanchkara': ['Ambrolauri Municipality', 'Tsageri Municipality']}
for pdo, (region, names) in VILLAGES.items():
    for n in names:
        res = [r for r in fetch(f'{n}', region, False) if any(m in r['display_name'] for m in EXPECT[pdo])]
        if not res: misses.append(f'{pdo}:{n}'); continue
        r = res[0]
        feats.append({'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': [round(float(r['lon']), 5), round(float(r['lat']), 5)]}, 'properties': {
            'pdo': pdo, 'region': region, 'name': n, 'precision': 'village', 'basis': '產品規格列出的村莊', 'osm': r['display_name'][:90]}})
# Kindzmarauli：規格寫「微型區在 Kvareli 市鎮行政邊界內」→ 以 Kvareli 市鎮多邊形近似（實際微型區較小）
for f in [f for f in feats if f['properties']['name'] == 'Kvareli' and f['properties']['pdo'] == 'kakheti']:
    feats.append({'type': 'Feature', 'geometry': f['geometry'], 'properties': {**f['properties'], 'pdo': 'kindzmarauli',
        'basis': 'Kindzmarauli 規格：微型區在 Kvareli 市鎮行政邊界內（實際微型區較小，位於南坡海拔 250–550 m）'}})
os.makedirs(os.path.dirname(OUT), exist_ok=True)
json.dump({'type': 'FeatureCollection', 'features': feats, 'properties': {
    'attribution': '© OpenStreetMap contributors (ODbL)', 'note': '非法定邊界；municipality=OSM 行政區多邊形，village=OSM 村莊位置點',
    'misses': misses}}, open(OUT, 'w'), ensure_ascii=False, separators=(',', ':'))
print(f'features={len(feats)} municipalities={sum(1 for f in feats if f["properties"]["precision"]=="municipality")} villages={sum(1 for f in feats if f["properties"]["precision"]=="village")} misses={misses}')
print(f'size={os.path.getsize(OUT)/1024:.0f}KB')
