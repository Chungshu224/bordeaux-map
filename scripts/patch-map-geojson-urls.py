"""
為 lessonSlides.js 中對應特定 DO 的 map slide
加入 geojsonUrl，覆蓋自治區層級 mapRegion 的 GeoJSON。
"""
import re, sys

# 依 slide title 找到 mapRegion 後面插入 geojsonUrl
# (title, geojsonUrl)
PATCHES = [
    # Castilla y León
    ("Ribera del Duero 高原地理",    "/spain/geojson/appellations/ribera-del-duero.geojson"),
    ("Rueda DO 產區位置",            "/spain/geojson/appellations/rueda.geojson"),
    ("Bierzo 板岩谷地",              "/spain/geojson/appellations/bierzo.geojson"),
    ("Toro & Cigales 西部產區",      "/spain/geojson/appellations/toro-cigales.geojson"),
    ("Ribera del Duero 頂級名莊地帶", "/spain/geojson/appellations/ribera-del-duero.geojson"),
    # Galicia
    ("Rías Baixas 大西洋海灣",       "/spain/geojson/appellations/rias-baixas.geojson"),
    ("加利西亞北部葡萄酒產區",        "/spain/geojson/appellations/galicia-interior-dos.geojson"),
    ("Ribeira Sacra 懸崖梯田",       "/spain/geojson/appellations/ribeira-sacra.geojson"),
    # Catalunya
    ("Priorat DOCa 板岩山地",        "/spain/geojson/appellations/priorat.geojson"),
    ("Montsant 與周邊產區",          "/spain/geojson/appellations/priorat-montsant.geojson"),
    ("Penedès 與加泰羅尼亞白酒產區", "/spain/geojson/appellations/penedes.geojson"),
    ("Cava 產區地理核心",            "/spain/geojson/appellations/cava.geojson"),
    ("Cava 葡萄品種產區分布",        "/spain/geojson/appellations/cava.geojson"),
    ("Cava DE 與精品 Cava 產區",     "/spain/geojson/appellations/cava.geojson"),
    ("Corpinnat & Clàssic Penedès 精品小農地帶", "/spain/geojson/appellations/penedes.geojson"),
    ("Priorat 復興的核心地帶",        "/spain/geojson/appellations/priorat.geojson"),
    # Andalucía
    ("Jerez — Sherry 雪莉酒產區",    "/spain/geojson/appellations/jerez.geojson"),
    ("Sherry 三角地帶",              "/spain/geojson/appellations/jerez.geojson"),
    ("Sherry 釀酒中心",              "/spain/geojson/appellations/jerez.geojson"),
    ("Manzanilla — Sanlúcar 海岸微氣候", "/spain/geojson/appellations/jerez-manzanilla.geojson"),
    ("Albariza 白堊土地帶分布",      "/spain/geojson/appellations/jerez.geojson"),
    # Murcia
    ("Jumilla & Yecla 穆爾西亞高原", "/spain/geojson/appellations/jumilla-yecla.geojson"),
    # Castilla-La Mancha
    ("La Mancha — 世界最大 DO 高原", "/spain/geojson/appellations/la-mancha.geojson"),
]

src = "src/components/spain/data/lessonSlides.js"
with open(src, encoding="utf-8") as f:
    text = f.read()

original = text
changed_count = 0

for title, url in PATCHES:
    # 找到 title: '…(title)…' 所在的 slide 物件區塊，
    # 然後在其第一個 mapRegion: '...' 後一行插入 geojsonUrl
    # Pattern: 先找 title 字串，再往後找 mapRegion 行
    title_escaped = re.escape(title)
    # 匹配 title，然後非貪婪到 mapRegion 行（限制在同一 slide 區塊內，最多 20 行）
    pattern = (
        r"(title:\s*['\"]" + title_escaped + r"['\"]"
        r".*?"
        r"(mapRegion:\s*['\"][^'\"]+['\"],))"
    )
    def make_replacement(url=url):
        def replacer(m):
            full = m.group(0)
            # 確認還沒有 geojsonUrl
            if 'geojsonUrl' in full:
                return full
            mapregion_match = m.group(2)
            # 取得縮排（與 mapRegion 相同）
            indent_match = re.search(r'\n(\s+)' + re.escape(mapregion_match.strip()), full)
            indent = indent_match.group(1) if indent_match else '        '
            insert = f"\n{indent}geojsonUrl: '{url}',"
            pos = full.rfind(mapregion_match) + len(mapregion_match)
            return full[:pos] + insert + full[pos:]
        return replacer

    new_text = re.sub(pattern, make_replacement(url), text, count=1, flags=re.DOTALL)
    if new_text != text:
        changed_count += 1
        text = new_text
    else:
        print(f"[WARNING] no change for title: {title!r}")

if text != original:
    with open(src, "w", encoding="utf-8") as f:
        f.write(text)
    print(f"Done. {changed_count}/{len(PATCHES)} patches applied → {src}")
else:
    print("No changes made.")
    sys.exit(1)
