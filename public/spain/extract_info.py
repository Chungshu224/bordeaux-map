import json, os

for fname in ['spain-do.geojson','spain-dop.geojson','spain-vc.geojson','spain-vp.geojson']:
    with open(fname,'r',encoding='utf-8') as f:
        d = json.load(f)
    feats = d.get('features',[])
    props_keys = list(feats[0]['properties'].keys()) if feats else []
    print('FILE:', fname, 'features:', len(feats), 'keys:', props_keys[:8])
    names = sorted(set(str(feat.get('properties',{}).get('TPR_NM','')) for feat in feats))
    for n in names:
        print(' ', n)
    print()
