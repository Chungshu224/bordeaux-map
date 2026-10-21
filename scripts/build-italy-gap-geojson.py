#!/usr/bin/env python3
"""
scripts/build-italy-gap-geojson.py

補齊 public/italy/regions 缺少的產區邊界檔。
這些邊界是「市鎮範圍近似」：把法規（disciplinare）列出的市鎮邊界合併而成，
會比真實葡萄園範圍大（法規多以「部分市鎮」「丘陵地帶」描述，無法用市鎮邊界精確表達）。

資料來源：
  - 市鎮邊界：ISTAT 行政邊界，經 openpolis/geojson-italy 整理（CC-BY 4.0）
    https://github.com/openpolis/geojson-italy （geojson/limits_IT_municipalities.geojson）
  - 市鎮名單：各產區官方 disciplinare
      Colli Piacentini DOC  — Emilia-Romagna 農業局／eAmbrosia
      Rubicone IGP          — MIPAAF 2016 修訂之 disciplinare（Forlì-Cesena、Ravenna、Rimini 全省 + Bologna 省 10 個市鎮）
      Emilia IGP            — Piacenza、Parma、Reggio Emilia、Modena、Ferrara 全省 + Bologna 省 Sillaro 河左岸
                              （此處以排除 Imola 一帶東岸市鎮近似；Castel San Pietro Terme 橫跨 Sillaro，仍排除）
      Valle d'Aosta DOC 及 7 個子產區 — Valle d'Aosta DOC disciplinare 第 3 條
  - Molise IGT：範圍為整個 Molise 大區，沿用現有 Molise.geojson 的輪廓

用法：
  python3 scripts/build-italy-gap-geojson.py /path/to/limits_IT_municipalities.geojson
輸出為「裸幾何」（Polygon / MultiPolygon），與現有 geojson 檔格式一致。
"""
import json
import os
import re
import sys
import unicodedata

from shapely.geometry import shape, mapping
from shapely.ops import unary_union

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'italy', 'regions')
SIMPLIFY = 0.0004  # 約 40 m，控制檔案大小


def norm(s):
    s = unicodedata.normalize('NFKD', s)
    s = ''.join(c for c in s if not unicodedata.combining(c))
    return re.sub(r'[^a-z0-9]+', ' ', s.lower().replace('’', "'")).strip()


def load_munis(path):
    data = json.load(open(path))
    by_name, by_prov = {}, {}
    for f in data['features']:
        p = f['properties']
        g = shape(f['geometry'])
        by_name.setdefault(norm(p['name']), []).append((p['reg_name'], g))
        by_prov.setdefault(norm(p['prov_name']), []).append((p['name'], g))
    return by_name, by_prov


def union_names(by_name, names, region=None):
    geoms, missing = [], []
    for n in names:
        hits = by_name.get(norm(n))
        if region:
            hits = [h for h in (hits or []) if h[0] == region]
        if not hits:
            missing.append(n)
            continue
        geoms.extend(h[1] for h in hits)
    if missing:
        raise SystemExit(f'找不到市鎮：{missing}')
    return unary_union(geoms)


def save(rel, geom):
    geom = geom.simplify(SIMPLIFY, preserve_topology=True)
    out = mapping(geom)

    def rnd(c):
        return [round(x, 5) if isinstance(x, float) else rnd(x) for x in c]

    out = {'type': out['type'], 'coordinates': rnd(out['coordinates'])}
    path = os.path.join(ROOT, rel)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as fh:
        json.dump(out, fh, ensure_ascii=False, separators=(',', ':'))
    print(f'{rel}  {os.path.getsize(path) // 1024} KB')


def main(src):
    by_name, by_prov = load_munis(src)

    # ── Colli Piacentini DOC（Caminata、Nibbiano、Pecorara 已於 2018 年併為 Alta Val Tidone）
    colli = [
        'Alta Val Tidone', 'Pianello Val Tidone', 'Piozzano', 'Ziano Piacentino',
        'Agazzano', 'Alseno', 'Bettola', 'Bobbio', 'Borgonovo Val Tidone', 'Carpaneto Piacentino',
        "Castell'Arquato", 'Castel San Giovanni', 'Coli', 'Gazzola', 'Gropparello',
        "Lugagnano Val d'Arda", "Ponte dell'Olio", 'Rivergaro', 'San Giorgio Piacentino',
        'Travo', 'Vernasca', 'Vigolzone',
    ]
    save('emilia/geojson/DOC/Colli Piacentini DOC.geojson', union_names(by_name, colli, 'Emilia-Romagna'))

    # ── Rubicone IGP
    bo_rubicone = [
        'Borgo Tossignano', 'Casalfiumanese', 'Castel Guelfo di Bologna', 'Castel San Pietro Terme',
        'Dozza', 'Fontanelice', 'Imola', 'Medicina', 'Mordano', "Ozzano dell'Emilia",
    ]
    rub = [g for _, g in by_prov['forli cesena'] + by_prov['ravenna'] + by_prov['rimini']]
    rub.append(union_names(by_name, bo_rubicone, 'Emilia-Romagna'))
    save('emilia/geojson/IGT/Rubicone IGP.geojson', unary_union(rub))

    # ── Emilia IGP
    imola_side = {norm(n) for n in [
        'Borgo Tossignano', 'Casalfiumanese', 'Castel del Rio', 'Castel Guelfo di Bologna',
        'Castel San Pietro Terme', 'Dozza', 'Fontanelice', 'Imola', 'Medicina', 'Mordano',
    ]}
    emi = []
    for p in ['piacenza', 'parma', 'reggio nell emilia', 'modena', 'ferrara']:
        emi.extend(g for _, g in by_prov[p])
    emi.extend(g for n, g in by_prov['bologna'] if norm(n) not in imola_side)
    save('emilia/geojson/IGT/Emilia IGP.geojson', unary_union(emi))

    # ── Molise IGT：整個大區
    mol = json.load(open(os.path.join(ROOT, 'molise/geojson/Molise.geojson')))
    mol_geom = unary_union([shape(f['geometry']) for f in mol['features']])
    save('molise/geojson/IGT/Molise IGT.geojson', mol_geom)

    # ── Valle d'Aosta
    VA = "Valle d'Aosta/Vallée d'Aoste"
    right = ['Donnas', 'Hône', 'Arnad', 'Issogne', 'Champdepraz', 'Montjovet', 'Châtillon', 'Pontey',
             'Chambave', 'Fénis', 'Saint-Marcel', 'Brissogne', 'Pollein', 'Charvensod', 'Gressan',
             'Jovençan', 'Aymavilles', 'Villeneuve', 'Introd', 'Arvier', 'Avise']
    left = ['Pont-Saint-Martin', 'Donnas', 'Perloz', 'Arnad', 'Bard', 'Verrès', 'Challand-Saint-Victor',
            'Montjovet', 'Saint-Vincent', 'Châtillon', 'Saint-Denis', 'Verrayes', 'Chambave', 'Nus',
            'Quart', 'Saint-Christophe', 'Aosta', 'Sarre', 'Saint-Pierre', 'Villeneuve',
            'Saint-Nicolas', 'Arvier', 'Avise', 'La Salle', 'Morgex']
    sub = {
        'Valle-d-Aosta-DOC': right + left,
        'Arnad-Montjovet': ['Hône', 'Arnad', 'Issogne', 'Champdepraz', 'Montjovet', 'Verrès', 'Challand-Saint-Victor'],
        'Donnas': ['Donnas', 'Pont-Saint-Martin', 'Perloz', 'Bard'],
        'Chambave': ['Châtillon', 'Pontey', 'Chambave', 'Montjovet', 'Saint-Vincent', 'Saint-Denis', 'Verrayes'],
        'Nus': ['Fénis', 'Nus', 'Quart', 'Saint-Christophe', 'Aosta'],
        'Torrette': ['Charvensod', 'Gressan', 'Jovençan', 'Aymavilles', 'Villeneuve', 'Introd', 'Quart',
                     'Saint-Christophe', 'Aosta', 'Sarre', 'Saint-Pierre'],
        'Enfer-d-Arvier': ['Arvier'],
        'Blanc-de-Morgex-et-de-La-Salle': ['Morgex', 'La Salle'],
    }
    for key, names in sub.items():
        save(f"valle d'aosta/geojson/DOC/{key}.geojson", union_names(by_name, sorted(set(names)), VA))


if __name__ == '__main__':
    if len(sys.argv) != 2:
        raise SystemExit(__doc__)
    main(sys.argv[1])
