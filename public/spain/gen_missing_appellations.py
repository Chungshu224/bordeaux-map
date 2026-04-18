"""
從 spain-do.geojson 和 spain-vc.geojson 提取缺失的 appellation GeoJSON 檔案。
執行位置：public/spain/
"""
import json, os, sys
sys.stdout.reconfigure(encoding='utf-8')

BASE = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(BASE, 'geojson', 'appellations')

# (輸出檔案名稱, 來源檔案, ZON_DS_NOM 篩選值 or list)
TASKS = [
    # 來自 spain-do.geojson
    ('tierra-de-leon',           'spain-do.geojson',  'Tierra de León'),
    ('tierra-del-vino-de-zamora','spain-do.geojson',  'Tierra del Vino de Zamora'),
    ('alella',                   'spain-do.geojson',  'Alella'),
    ('catalonia',                'spain-do.geojson',  'Cataluña'),        # DO Cataluña 等級
    ('conca-de-barbera',         'spain-do.geojson',  'Conca de Barberá'),
    ('costers-del-segre',        'spain-do.geojson',  'Costers del Segre'),
    ('emporda',                  'spain-do.geojson',  'Ampurdán-Costa Brava'),
    ('pla-de-bages',             'spain-do.geojson',  'Pla de Bages'),
    ('tarragona',                'spain-do.geojson',  'Tarragona'),
    ('terra_alta',               'spain-do.geojson',  'Terra Alta'),
    ('calatayud',                'spain-do.geojson',  'Calatayud'),
    ('campo-de-borja',           'spain-do.geojson',  'Campo de Borja'),
    ('carinena',                 'spain-do.geojson',  'Cariñena'),
    ('somontano',                'spain-do.geojson',  'Somontano'),
    # 來自 spain-vc.geojson
    ('sierra-de-salamanca',      'spain-vc.geojson',  'Sierra de Salamanca'),
    ('valtiendas',               'spain-vc.geojson',  'Valtiendas'),
    ('valles-de-benavente',      'spain-vc.geojson',  'Valles de Benavente'),
]

# 預先載入兩個來源檔案
sources = {}
for src_name in ['spain-do.geojson', 'spain-vc.geojson']:
    with open(os.path.join(BASE, src_name), encoding='utf-8') as f:
        sources[src_name] = json.load(f)

created = 0
skipped = 0
errors = []

for out_name, src_file, zon_name in TASKS:
    out_path = os.path.join(OUT_DIR, out_name + '.geojson')
    if os.path.exists(out_path):
        print(f'  [skip] {out_name}.geojson already exists')
        skipped += 1
        continue

    src_data = sources[src_file]
    # 支援多個名稱 (list) 或單一字串
    target_names = zon_name if isinstance(zon_name, list) else [zon_name]
    features = [
        f for f in src_data['features']
        if f.get('properties', {}).get('ZON_DS_NOM', '') in target_names
    ]

    if not features:
        errors.append(f'  [ERROR] No features found for "{zon_name}" in {src_file}')
        continue

    geojson = {
        'type': 'FeatureCollection',
        'features': features
    }
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(geojson, f, ensure_ascii=False, separators=(',', ':'))

    print(f'  [OK] {out_name}.geojson  ({len(features)} feature(s))')
    created += 1

print()
print(f'Done: {created} created, {skipped} skipped, {len(errors)} errors')
for e in errors:
    print(e)
