"""
Extract individual DO/appellation GeoJSON files from spain-wine-regions.geojson.
Creates public/spain/geojson/appellations/ with one file per DO (or combined for multi-DO lessons).
"""
import json, os, math

SRC = 'public/spain/spain-wine-regions.geojson'
OUT_DIR = 'public/spain/geojson/appellations'
os.makedirs(OUT_DIR, exist_ok=True)

with open(SRC, encoding='utf-8') as f:
    gj = json.load(f)

features = gj['features']

def by_name(*names):
    return [f for f in features if f['properties'].get('ZON_DS_NOM','') in names]

def bbox(feats):
    """Return (minLon, minLat, maxLon, maxLat) for a list of features."""
    coords = []
    def collect(geom):
        t = geom['type']
        if t == 'Point':
            coords.append(geom['coordinates'])
        elif t in ('MultiPoint', 'LineString'):
            coords.extend(geom['coordinates'])
        elif t in ('MultiLineString', 'Polygon'):
            for ring in geom['coordinates']:
                coords.extend(ring)
        elif t == 'MultiPolygon':
            for poly in geom['coordinates']:
                for ring in poly:
                    coords.extend(ring)
        elif t == 'GeometryCollection':
            for g in geom['geometries']:
                collect(g)
    for feat in feats:
        collect(feat['geometry'])
    lons = [c[0] for c in coords]
    lats = [c[1] for c in coords]
    return min(lons), min(lats), max(lons), max(lats)

def center_zoom(feats, zoom_hint=None):
    minLon, minLat, maxLon, maxLat = bbox(feats)
    cx = (minLon + maxLon) / 2
    cy = (minLat + maxLat) / 2
    # Estimate zoom from bounding box span
    span = max(maxLon - minLon, (maxLat - minLat) * 1.5)
    if zoom_hint:
        z = zoom_hint
    elif span > 6:
        z = 7
    elif span > 3:
        z = 8
    elif span > 1.5:
        z = 9
    elif span > 0.8:
        z = 10
    else:
        z = 11
    return round(cx, 4), round(cy, 4), z

def write(fname, feats, label, zoom_override=None):
    if not feats:
        print(f'WARNING: no features for {fname}')
        return
    cx, cy, z = center_zoom(feats, zoom_override)
    fc = {'type': 'FeatureCollection', 'features': feats}
    path = os.path.join(OUT_DIR, fname)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(fc, f, ensure_ascii=False)
    print(f'  {fname}: {len(feats)} feature(s), center=[{cx},{cy}], zoom={z}')
    return cx, cy, z

print('Extracting per-DO GeoJSON files...')
print()

results = {}

# Ribera del Duero
feats = by_name('Ribera del Duero')
results['ribera-del-duero'] = write('ribera-del-duero.geojson', feats, 'Ribera del Duero', 9)

# Rueda
feats = by_name('Rueda')
results['rueda'] = write('rueda.geojson', feats, 'Rueda', 10)

# Bierzo
feats = by_name('Bierzo')
results['bierzo'] = write('bierzo.geojson', feats, 'Bierzo', 10)

# Rías Baixas
feats = by_name('Rías Baixas')
results['rias-baixas'] = write('rias-baixas.geojson', feats, 'Rías Baixas', 9)

# Ribeira Sacra
feats = by_name('Ribeira Sacra')
results['ribeira-sacra'] = write('ribeira-sacra.geojson', feats, 'Ribeira Sacra', 10)

# Galicia NW combined: Ribeiro + Valdeorras + Ribeira Sacra (for S2M2L2 multi-DO lesson)
feats = by_name('Ribeiro', 'Valdeorras', 'Ribeira Sacra')
results['galicia-interior-dos'] = write('galicia-interior-dos.geojson', feats, 'Galicia Interior DOs', 9)

# Priorat
feats = by_name('Priorato, Comunidad de Cataluña')
results['priorat'] = write('priorat.geojson', feats, 'Priorat', 10)

# Montsant (standalone, neighbours Priorat)
feats = by_name('Montsant')
results['montsant'] = write('montsant.geojson', feats, 'Montsant', 10)

# Montsant + Priorat (for S2M3L2 lesson about Montsant surrounding Priorat)
feats = by_name('Montsant', 'Priorato, Comunidad de Cataluña')
results['priorat-montsant'] = write('priorat-montsant.geojson', feats, 'Priorat & Montsant', 10)

# Penedès
feats = by_name('Penedés, Comunidad de Cataluña')
results['penedes'] = write('penedes.geojson', feats, 'Penedès', 10)

# Cava (7 features spread across Spain)
feats = by_name('Cava')
results['cava'] = write('cava.geojson', feats, 'Cava', 8)

# Jerez (Sherry)
feats = by_name('Jerez-Xeres-Sherry')
results['jerez'] = write('jerez.geojson', feats, 'Jerez / Sherry', 10)

# Jerez + Manzanilla combined (for sub-zone lessons)
feats = by_name('Jerez-Xeres-Sherry', 'Manzanilla Sanlúcar de Barrameda')
results['jerez-manzanilla'] = write('jerez-manzanilla.geojson', feats, 'Jerez & Manzanilla', 10)

# Jumilla
feats = by_name('Jumilla')
results['jumilla'] = write('jumilla.geojson', feats, 'Jumilla', 10)

# Yecla
feats = by_name('Yecla')
results['yecla'] = write('yecla.geojson', feats, 'Yecla', 11)

# Jumilla + Yecla (for S2M4L2 lesson)
feats = by_name('Jumilla', 'Yecla')
results['jumilla-yecla'] = write('jumilla-yecla.geojson', feats, 'Jumilla & Yecla', 9)

# Toro
feats = by_name('Toro')
results['toro'] = write('toro.geojson', feats, 'Toro', 10)

# Cigales
feats = by_name('Cigales')
results['cigales'] = write('cigales.geojson', feats, 'Cigales', 10)

# Toro + Cigales (for S3M4L1)
feats = by_name('Toro', 'Cigales')
results['toro-cigales'] = write('toro-cigales.geojson', feats, 'Toro & Cigales', 9)

# La Mancha
feats = by_name('La Mancha')
results['la-mancha'] = write('la-mancha.geojson', feats, 'La Mancha', 8)

print()
print('Done. Files written to:', OUT_DIR)
print()

# Print REGION_CONFIG entries for copy-paste into Vue component
print('--- REGION_CONFIG entries to add to SpainRegionMapSlide.vue ---')
entries = {
    'ribera-del-duero': ((-3.8, 41.7, 9), 'Ribera del Duero'),
    'rueda':            ((-4.95, 41.4, 10), 'Rueda'),
    'bierzo':           ((-6.7, 42.6, 10), 'Bierzo'),
    'rias-baixas':      ((-8.6, 42.45, 9), 'Rías Baixas'),
    'ribeira-sacra':    ((-7.5, 42.55, 10), 'Ribeira Sacra'),
    'galicia-interior-dos': ((-7.5, 42.4, 9), 'Ribeiro, Valdeorras & Ribeira Sacra'),
    'priorat':          ((0.75, 41.17, 11), 'Priorat DOCa'),
    'montsant':         ((0.85, 41.22, 11), 'Montsant'),
    'priorat-montsant': ((0.8, 41.2, 10), 'Priorat & Montsant'),
    'penedes':          ((1.65, 41.35, 10), 'Penedès'),
    'cava':             ((1.9, 41.5, 8), 'Cava'),
    'jerez':            ((-6.0, 36.65, 11), 'Jerez / Sherry triangle'),
    'jerez-manzanilla': ((-6.15, 36.7, 10), 'Jerez & Manzanilla'),
    'jumilla':          ((-1.35, 38.45, 10), 'Jumilla'),
    'yecla':            ((-1.1, 38.6, 11), 'Yecla'),
    'jumilla-yecla':    ((-1.25, 38.5, 10), 'Jumilla & Yecla'),
    'toro':             ((-5.4, 41.5, 10), 'Toro'),
    'cigales':          ((-4.7, 41.75, 10), 'Cigales'),
    'toro-cigales':     ((-5.1, 41.6, 9), 'Toro & Cigales'),
    'la-mancha':        ((-3.0, 39.2, 8), 'La Mancha'),
}
for key, ((lon, lat, zoom), label) in entries.items():
    print(f"  '{key}': {{ file: '/spain/geojson/appellations/{key}.geojson', center: [{lon}, {lat}], zoom: {zoom}, label: '{label}' }},")
