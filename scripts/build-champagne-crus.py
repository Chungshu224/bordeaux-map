#!/usr/bin/env python3
"""
scripts/build-champagne-crus.py
產生 public/champagne/champagne_crus.geojson（香檳村莊地圖）。

資料來源（皆為開放授權）：
  1. 村莊名單：Bianchi et al. (2022) 資料集（Figshare，CC0）PDO_EU_id.csv 中 PDO-FR-A1359 "Champagne" 的 Municip_nam（312 個 commune，2021 年前的快照）
       https://api.figshare.com/v2/articles/19312100   (file: PDO_EU_id.csv)
  2. 村莊邊界：gregoiredavid/france-geojson（依 IGN Admin Express 簡化，Licence Ouverte）
       https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/<dept>/communes-<dept>.geojson
       （02-aisne、10-aube、51-marne、52-haute-marne、77-seine-et-marne），以名稱對 INSEE 代碼
  3. 分級：data/champagne/crus.json（INAO《Champagne》AOC 產品規格 2024-01-25 令，17 個 Grand Cru＋42 個僅 Premier Cru）

用法：python3 -I scripts/build-champagne-crus.py <工作目錄>
  工作目錄需有：ids.csv（上列 PDO_EU_id.csv）、c-02-aisne.geojson、c-10-aube.geojson、c-51-marne.geojson、
                c-52-haute-marne.geojson、c-77-seine-et-marne.geojson
  依賴：shapely、pyproj

限制（也寫在設計稿）：
  - 資料集的 312 個 commune 與 Comité Champagne 官方的「319 個 cru」不同（年代與合併造成），INAO 並未公布其餘村莊的 Échelle 百分比，
    所以只有 59 個 Grand／Premier Cru 有分級，其餘標為「未分級 cru」，不顯示百分比。
  - 子產區（sub）是「以最近的 Grand Cru 村莊歸類，距離超過 12 公里歸為外圍」的近似分法，僅供地圖篩選，非 AOC 的法定分區；
    奧布省（Aube）全部歸為巴爾丘（Côte des Bar，以省界為準，Montgueux 等外圍小產區也會被歸入，已知限制）。
"""
import csv, json, sys, unicodedata, re, os
from shapely.geometry import shape, mapping
from shapely.ops import transform
from pyproj import Transformer

work = sys.argv[1]
root = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')


def norm(s):
    s = unicodedata.normalize('NFD', s.lower())
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return re.sub(r'[^a-z0-9]+', ' ', s.replace('œ', 'oe')).strip()


rows = list(csv.DictReader(open(os.path.join(work, 'ids.csv'), encoding='utf-8-sig')))
names = [r for r in rows if r['PDOid'] == 'PDO-FR-A1359'][0]['Municip_nam'].split('/')

feats = []
for d in ['02-aisne', '10-aube', '51-marne', '52-haute-marne', '77-seine-et-marne']:
    for f in json.load(open(os.path.join(work, f'c-{d}.geojson')))['features']:
        feats.append(f)
by_norm = {}
for f in feats:
    by_norm.setdefault(norm(f['properties']['nom']), []).append(f)

# 名稱對不上的（Admin Express 沒有冠詞或名稱不同）：人工對照
MANUAL = {
    'Breuil-Sur-Vesle': '51085',   # 於下方再以座標確認
    'Le Breuil': '51086',
    'La Celle-Sous-Chantemerle': '51103',
    'La Neuville-Aux-Larris': '51398',
    'Le Mesnil-Sur-Oger': '51367',
    'Les Mesneux': '51365',
    'Les Riceys': '10317',
}
by_code = {f['properties']['code']: f for f in feats}

crus = json.load(open(os.path.join(root, 'data/champagne/crus.json')))
graded = {}   # insee -> [cru entries]（合併新鎮可含多個分級村莊）
# 2016–2018 年合併的新鎮（commune nouvelle）：INAO 規格仍用舊村名，這裡對到現行行政區（INSEE 現行區劃）
MERGED = {
    '51030': ['Aÿ', 'Bisseuil', 'Mareuil-sur-Ay'],      # Aÿ-Champagne
    '51564': ['Louvois', 'Tauxières'],                   # Val de Livre
    '51612': ['Oger', 'Vertus', 'Voipreux'],             # Blancs-Coteaux（郵遞區號 51130／51190，含 Vertus）
    '51158': ['Coligny (Val-des-Marais)'],               # Val-des-Marais
}
MERGED_BY_NAME = {norm(n): code for code, ns in MERGED.items() for n in ns}
ALIAS = {  # INAO 規格寫法 → 行政區名稱（正規化後）
    'ay': 'ay champagne', 'coligny val des marais': 'coligny', 'tauxieres': 'tauxieres mutry',
    'vaudemanges': 'vaudemange', 'villedommange': 'ville dommange', 'ecueil': 'ecueil',
    'chigny les roses': 'chigny les roses', 'etrechy': 'etrechy',
}

# 先把 312 名單對到 feature
chosen = {}
for n in names:
    k = norm(n)
    cands = by_norm.get(k, [])
    if n in MANUAL:
        cands = [by_code[MANUAL[n]]]
    chosen[n] = cands

# 同名跨省：選與 Champagne 區域較近者（Marne 優先；Aisne／Aube 同名者以重心距 Marne 葡萄園中心較近者為準）
tr = Transformer.from_crs(4326, 2154, always_xy=True)
proj = lambda g: transform(tr.transform, g)
CENTER = proj(shape({'type': 'Point', 'coordinates': [3.95, 49.05]}))
final = {}
for n, c in chosen.items():
    if not c:
        print('NO MATCH', n); continue
    if len(c) > 1:
        c = sorted(c, key=lambda f: proj(shape(f['geometry'])).centroid.distance(CENTER))
        print('AMBIGUOUS', n, [x['properties']['code'] for x in c], '->', c[0]['properties']['code'])
    final[c[0]['properties']['code']] = (n, c[0])

# Breuil 兩個：以緯度確認 Breuil-sur-Vesle 較北
b1, b2 = by_code['51085'], by_code['51086']
la = lambda f: shape(f['geometry']).centroid.y
if la(b1) < la(b2):
    print('NOTE: swap Breuil mapping (51085 is southern)')
    final['51085'] = ('Le Breuil', b1); final['51086'] = ('Breuil-Sur-Vesle', b2)
    # 上面兩列已對調名稱，僅影響顯示名；兩者皆為 Champagne 名單成員

# 分級（Grand／Premier Cru）：以正規化名稱對 INSEE
name_to_code = {norm(f['properties']['nom']): code for code, (n, f) in final.items()}
name_to_code.update({norm(n): code for code, (n, f) in final.items()})
unmatched = []
for c in crus['communes']:
    k = norm(c['name'])
    code = MERGED_BY_NAME.get(k) or name_to_code.get(k) or name_to_code.get(ALIAS.get(k, ''))
    if not code:
        # 開頭相符（例：Aÿ → Aÿ-Champagne、Tauxières → Tauxières-Mutry、Coligny → Coligny）
        hits = [cd for kk, cd in name_to_code.items() if kk.startswith(k + ' ') or k.startswith(kk + ' ')]
        code = hits[0] if len(set(hits)) == 1 else None
    if not code:
        unmatched.append(c['name']); continue
    graded.setdefault(code, []).append(c)
print('graded matched', len(graded), 'unmatched', unmatched)

# 17 個 Grand Cru 作為子產區的錨點
GC_ANCHOR = {}
for code, c in graded.items():
    if any(x['grade'] == 'grand_cru' for x in c):
        c = [x for x in c if x['grade'] == 'grand_cru'][0]
        GC_ANCHOR[code] = (proj(shape(final[code][1]['geometry'])).centroid, c['sub_region'])
SUB_KEY = {'Montagne de Reims': 'montagne', 'Vallée de la Marne': 'vallee', 'Côte des Blancs': 'blancs'}
SUB_BY_KEY = {  # 地圖顯示用（中文原文，gt() 翻譯）
    'montagne': 'Montagne de Reims', 'vallee': 'Vallée de la Marne', 'blancs': 'Côte des Blancs',
    'bar': 'Côte des Bar', 'other': 'other'
}
GRAPE_BY_SUB = {
    'montagne': ['Pinot Noir'], 'vallee': ['Meunier'], 'blancs': ['Chardonnay'], 'bar': ['Pinot Noir'], 'other': []
}
THRESH = 6000  # 公尺（未分級村莊：離最近的 Grand Cru 村莊超過此距離一律歸「其他／外圍」）
# Premier Cru 42 村的子產區：依通行分法人工指定（距離法在 Cumières、Jouy 等處會誤判）。Pierry 屬 Épernay 南岸，歸 Côte des Blancs 為近似。
PC_SUB = {
    'montagne': ['Bezannes', 'Billy-le-Grand', 'Chamery', 'Chigny-les-Roses', 'Cormontreuil', 'Coulommes-la-Montagne', 'Ecueil', 'Jouy-les-Reims',
                 'Ludes', 'Les Mesneux', 'Montbre', 'Pargny-les-Reims', 'Rilly-la-Montagne', 'Sacy', 'Sermiers', 'Taissy', 'Tauxieres',
                 'Trepail', 'Trois-Puits', 'Vaudemanges', 'Villedommange', 'Villers-Allerand', 'Villers-aux-Noeuds', 'Villers-Marmery', 'Vrigny'],
    'vallee': ['Avenay-Val-d\'Or', 'Bisseuil', 'Champillon', 'Cumieres', 'Dizy', 'Hautvillers', 'Mareuil-sur-Ay', 'Mutigny'],
    'blancs': ['Bergeres-les-Vertus', 'Coligny (Val-des-Marais)', 'Cuis', 'Etrechy', 'Grauves', 'Pierry', 'Vertus', 'Villeneuve-Renneville', 'Voipreux'],
}
PC_SUB_BY_NAME = {norm(n): k for k, ns in PC_SUB.items() for n in ns}


def sub_of(code, f):
    if code.startswith('10'):
        return 'bar'
    cen = proj(shape(f['geometry'])).centroid
    best = min(GC_ANCHOR.values(), key=lambda a: a[0].distance(cen))
    d = best[0].distance(cen)
    return SUB_KEY[best[1]] if d <= THRESH else 'other'


out = []
for code, (n, f) in sorted(final.items()):
    members = graded.get(code, [])
    g = ([m for m in members if m['grade'] == 'grand_cru'] or members or [None])[0]
    sub = sub_of(code, f)
    if g and g['grade'] == 'grand_cru':
        sub = SUB_KEY[g['sub_region']]
    elif g and g['grade'] == 'premier_cru':
        sub = PC_SUB_BY_NAME[norm(g['name'])]
    geom = shape(f['geometry']).simplify(0.0004, preserve_topology=True)
    area = proj(shape(f['geometry'])).area / 1e6
    p = {
        'id': code, 'insee': code,
        'name': f['properties']['nom'],
        'dept': {'02': 'Aisne', '10': 'Aube', '51': 'Marne', '52': 'Haute-Marne', '77': 'Seine-et-Marne'}[code[:2]],
        'sub': sub,
        'grade': g['grade'] if g else 'ungraded',
        'echelle': 100 if g and g['grade'] == 'grand_cru' else None,
        'members': [{'name': m['name'], 'grade': m['grade']} for m in members],
        'grapes': GRAPE_BY_SUB[sub],
        'area_km2': round(area, 1),
    }
    out.append({'type': 'Feature', 'properties': p, 'geometry': json.loads(json.dumps(mapping(geom)))})

# 小數位數縮短以縮小檔案
def rnd(c):
    return [round(c[0], 4), round(c[1], 4)] if isinstance(c[0], (int, float)) else [rnd(x) for x in c]
for f in out:
    f['geometry']['coordinates'] = rnd(f['geometry']['coordinates'])

os.makedirs(os.path.join(root, 'public/champagne'), exist_ok=True)
fc = {'type': 'FeatureCollection',
      'name': 'champagne_crus',
      'meta': {
          'source': 'Bianchi et al. 2022 (CC0) PDO-FR-A1359 commune list; boundaries gregoiredavid/france-geojson (IGN Admin Express derived); grading INAO CDC 2024-01-25',
          'note': 'Sub-regions are approximate (nearest Grand Cru village, 12 km cap; Aube = Côte des Bar). Ungraded villages have no published Échelle %.'},
      'features': out}
open(os.path.join(root, 'public/champagne/champagne_crus.geojson'), 'w', encoding='utf-8').write(json.dumps(fc, ensure_ascii=False, separators=(',', ':')))

# 回寫 INSEE 到 crus.json
for code, cs in graded.items():
    for c in cs:
        c['insee'] = code
crus['meta']['insee_status'] = 'filled for graded villages by name match (Admin Express via france-geojson); see scripts/build-champagne-crus.py'
json.dump(crus, open(os.path.join(root, 'data/champagne/crus.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
print('features', len(out))
from collections import Counter
print(Counter(f['properties']['grade'] for f in out), Counter(f['properties']['sub'] for f in out))
print('PC by sub', Counter(f['properties']['sub'] for f in out if f['properties']['grade'] == 'premier_cru'))
