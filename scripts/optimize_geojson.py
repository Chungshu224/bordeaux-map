import json, os

path = r'public/australia/australia-wine-regions.geojson'

with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

def round_coords(coords, precision=4):
    if isinstance(coords[0], list):
        return [round_coords(c, precision) for c in coords]
    else:
        return [round(coords[0], precision), round(coords[1], precision)]

for feature in data['features']:
    geom = feature['geometry']
    if geom['type'] == 'Polygon':
        geom['coordinates'] = [round_coords(ring) for ring in geom['coordinates']]
    elif geom['type'] == 'MultiPolygon':
        geom['coordinates'] = [[round_coords(ring) for ring in poly] for poly in geom['coordinates']]

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, separators=(',', ':'), ensure_ascii=False)

size = os.path.getsize(path) / 1024 / 1024
print(f'New size: {size:.1f} MB')
