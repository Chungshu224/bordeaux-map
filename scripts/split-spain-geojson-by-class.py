"""
split-spain-geojson-by-class.py
將 spain-wine-regions.geojson 依分類拆成獨立 GeoJSON 檔案：
  DOCa  → spain-doca.geojson   (Denominación de Origen Calificada)
  DO    → spain-do.geojson     (Denominación de Origen)
  DOP   → spain-dop.geojson    (Denominación de Origen Protegida)
  VC    → spain-vc.geojson     (Vino de Calidad)
  VP    → spain-vp.geojson     (Vino de Pago)

同時更新 spain-appellations.json，為每個產區加上 "classification" 欄位。
"""
import json, pathlib, re

BASE = pathlib.Path(__file__).parent.parent / "public/spain"
SRC  = BASE / "spain-wine-regions.geojson"
APP  = BASE / "spain-appellations.json"

# 分類對應表
CLASS_MAP = {
    "Denominación de Origen Calificada": "DOCa",
    "Denominación de Origen":            "DO",
    "Denominación de Origen Protegida":  "DOP",
    "Vino de Calidad":                   "VC",
    "Vino de Pago":                      "VP",
}

OUTPUT_FILES = {
    "DOCa": BASE / "spain-doca.geojson",
    "DO":   BASE / "spain-do.geojson",
    "DOP":  BASE / "spain-dop.geojson",
    "VC":   BASE / "spain-vc.geojson",
    "VP":   BASE / "spain-vp.geojson",
}

def normalize_name(name):
    """把 '  D.O.Ca.Vino de Rioja' → 'Vino de Rioja'  等去掉前綴"""
    name = name.strip()
    name = re.sub(r'^D\.O\.Ca\.\s*', '', name)
    name = re.sub(r'^D\.O\.P\.\s*', '', name)
    name = re.sub(r'^D\.O\.\s*',    '', name)
    name = re.sub(r'^V\.P\.\s*',    '', name)
    name = re.sub(r'^V\.C\.\s*',    '', name)
    return name.strip()

def split_geojson():
    with open(SRC, encoding="utf-8") as f:
        gj = json.load(f)

    buckets = {k: {"type": "FeatureCollection", "features": []} for k in OUTPUT_FILES}

    for feat in gj["features"]:
        tpr = feat["properties"].get("TPR_DS_DES", "")
        cls = CLASS_MAP.get(tpr)
        if cls and cls in buckets:
            # 在 properties 加上 classification 欄位
            feat["properties"]["classification"] = cls
            feat["properties"]["normalizedName"] = normalize_name(
                feat["properties"].get("CAL_DS_NOM", "")
            )
            buckets[cls]["features"].append(feat)
        else:
            print(f"  ⚠ 未知分類 '{tpr}': {feat['properties'].get('CAL_DS_NOM')}")

    for cls, path in OUTPUT_FILES.items():
        count = len(buckets[cls]["features"])
        with open(path, "w", encoding="utf-8") as f:
            json.dump(buckets[cls], f, ensure_ascii=False, separators=(",", ":"))
        print(f"  ✅ {path.name}: {count} 個產區")

def update_appellations():
    """在 spain-appellations.json 每個條目加上 classification 欄位"""
    with open(SRC, encoding="utf-8") as f:
        gj = json.load(f)
    with open(APP, encoding="utf-8") as f:
        apps = json.load(f)

    # 建立 zonName → classification 的對照表（從 GeoJSON 名稱比對）
    name_to_cls = {}
    for feat in gj["features"]:
        tpr = feat["properties"].get("TPR_DS_DES", "")
        cls = CLASS_MAP.get(tpr)
        if cls:
            zone_name = feat["properties"].get("ZON_DS_NOM", "").strip()
            cal_name  = feat["properties"].get("CAL_DS_NOM", "").strip()
            name_to_cls[zone_name] = cls
            name_to_cls[cal_name]  = cls
            name_to_cls[normalize_name(cal_name)] = cls

    updated = 0
    for app in apps:
        if "classification" in app:
            continue
        # 嘗試比對
        zn = app.get("zonName", "")
        cls = name_to_cls.get(zn)
        if not cls:
            # 模糊比對：去掉 D.O., D.O.Ca. 前綴後比對
            normalized_zn = normalize_name(zn)
            cls = name_to_cls.get(normalized_zn)
        if cls:
            app["classification"] = cls
            updated += 1
        else:
            # 預設為 DO（大多數未收錄的產區）
            app["classification"] = "DO"
            updated += 1

    with open(APP, "w", encoding="utf-8") as f:
        json.dump(apps, f, ensure_ascii=False, indent=2)
    print(f"\n  ✅ spain-appellations.json: 更新 {updated} 個產區的 classification 欄位")

if __name__ == "__main__":
    print("── 分拆 Spain GeoJSON ──────────────────────────────")
    split_geojson()
    print("\n── 更新 spain-appellations.json ──────────────────")
    update_appellations()
    print("\n完成！")
