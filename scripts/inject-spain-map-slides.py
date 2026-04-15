"""
inject-spain-map-slides.py
在 lessonSlides.js 的指定課程 summary 前插入 map slide
"""
import re, sys, pathlib

FILE = pathlib.Path(__file__).parent.parent / "src/components/spain/data/lessonSlides.js"

# 每個課程 -> { mapRegion, title, description }
# mapRegion 需與 SpainRegionMapSlide.vue 中的 REGION_CONFIG key 對應
LESSON_MAP = {
    # Level 1
    "S1M1L2": {
        "mapRegion": "all",
        "title": "西班牙葡萄酒產區全覽",
        "description": "衛星地圖呈現西班牙六大葡萄酒地理區，探索從加利西亞到安達盧西亞的多元風土。",
    },
    "S1M4L1": {
        "mapRegion": "rioja",
        "title": "Rioja 產區地理位置",
        "description": "Rioja DOCa 橫跨拉里奧哈自治區與巴斯克地區，沿埃布羅河谷延伸。",
    },
    "S1M4L2": {
        "mapRegion": "rioja",
        "title": "Rioja 三大子產區地形",
        "description": "Alta（西）・Alavesa（北）・Oriental（東）各有不同海拔與土壤特性。",
    },
    # Level 2 — Module 1 (卡斯提亞-萊昂)
    "S2M1L1": {
        "mapRegion": "castilla-leon",
        "title": "Ribera del Duero 高原地理",
        "description": "海拔 700–1000 公尺的杜羅河谷，西班牙最大產酒自治區，日夜溫差賦予葡萄卓越酸度。",
    },
    "S2M1L2": {
        "mapRegion": "castilla-leon",
        "title": "Rueda DO 產區位置",
        "description": "位於卡斯提亞-萊昂西南部，Verdejo 白酒的核心產地，海拔高原賦予清爽酸度。",
    },
    "S2M1L3": {
        "mapRegion": "castilla-leon",
        "title": "Bierzo 板岩谷地",
        "description": "西班牙西北角的山谷產區，板岩土壤孕育 Mencía 老藤，地形遮擋大西洋與大陸氣候。",
    },
    "S2M1L4": {
        "mapRegion": "navarra",
        "title": "Navarra DO 產區地理",
        "description": "北接庇里牛斯山，南達埃布羅河，五個子產區從寒冷山地到溫暖平原。",
    },
    # Level 2 — Module 2 (加利西亞)
    "S2M2L1": {
        "mapRegion": "galicia",
        "title": "Rías Baixas 大西洋海灣",
        "description": "加利西亞西南角的鋸齒形海岸，大西洋海風帶來涼爽潮濕氣候，是 Albariño 的故鄉。",
    },
    "S2M2L2": {
        "mapRegion": "galicia",
        "title": "加利西亞北部葡萄酒產區",
        "description": "Ribeiro・Valdeorras・Ribeira Sacra — 多樣地形與板岩土壤孕育各具特色的白酒與紅酒。",
    },
    "S2M2L3": {
        "mapRegion": "galicia",
        "title": "Ribeira Sacra 懸崖梯田",
        "description": "沿 Miño 和 Sil 河谷的陡峭梯田，手工採收的 Mencía 老藤，加利西亞最壯觀的葡萄酒產區。",
    },
    # Level 2 — Module 3 (加泰羅尼亞)
    "S2M3L1": {
        "mapRegion": "catalonia",
        "title": "Priorat DOCa 板岩山地",
        "description": "加泰羅尼亞山區，llicorella 板岩土壤覆蓋陡峭山坡，是西班牙兩個 DOCa 之一。",
    },
    "S2M3L2": {
        "mapRegion": "catalonia",
        "title": "Montsant 與周邊產區",
        "description": "環繞 Priorat 的產區，同樣的板岩土壤，以更實惠的價格提供類似的礦物感風格。",
    },
    "S2M3L3": {
        "mapRegion": "catalonia",
        "title": "Penedès 與加泰羅尼亞白酒產區",
        "description": "連接巴塞隆納與地中海，是 Cava 的發源地，現代西班牙白酒革命的中心。",
    },
    # Level 2 — Module 4 (南部/其他)
    "S2M4L1": {
        "mapRegion": "andalucia",
        "title": "Jerez — Sherry 雪莉酒產區",
        "description": "安達盧西亞西南角，白色白堊土（Albariza）、強烈陽光與海洋微風，Sherry 的獨特風土。",
    },
    "S2M4L2": {
        "mapRegion": "murcia",
        "title": "Jumilla & Yecla 穆爾西亞高原",
        "description": "內陸半乾旱高原，Monastrell 老藤在極端溫度下濃縮出結構豐厚的紅酒。",
    },
    "S2M4L3": {
        "mapRegion": "valencia",
        "title": "巴倫西亞地中海產區",
        "description": "地中海沿岸，從海岸到內陸山地，Bobal・Monastrell 等本土品種展現豐滿果味。",
    },
    "S2M4L4": {
        "mapRegion": "canarias",
        "title": "加那利群島火山產區",
        "description": "大西洋火山群島，古藤生長在黑色火山岩漿土壤，是歐洲少數未受根瘤蚜侵害的產區。",
    },
    # Level 3 — Rioja 深度
    "S3M1L1": {
        "mapRegion": "rioja",
        "title": "Rioja 三大子產區深度地形",
        "description": "Sierra Cantabria 山脈遮擋大西洋風雨，埃布羅河調節氣候，造就三個子產區的差異。",
    },
    "S3M1L2": {
        "mapRegion": "rioja",
        "title": "Rioja Alta 精緻核心地帶",
        "description": "最西端、最涼爽的子產區，黏土石灰岩土壤，是 Rioja 傳統精緻陳年酒的搖籃。",
    },
    "S3M1L3": {
        "mapRegion": "rioja",
        "title": "Rioja Alavesa 現代精品地帶",
        "description": "巴斯克自治區境內，白堊土石灰岩，個人酒莊（Vino de Garage）運動的發源地。",
    },
    "S3M1L4": {
        "mapRegion": "rioja",
        "title": "Rioja Oriental 溫暖寬廣地帶",
        "description": "最東端、最溫暖乾燥，以 Garnacha 和 Viura 為主，果味豐滿、酒精偏高。",
    },
    # Level 3 — Cava/Penedès
    "S3M2L1": {
        "mapRegion": "catalonia",
        "title": "Cava 產區地理核心",
        "description": "雖遍布西班牙，但 85% 的 Cava 產自加泰羅尼亞 Penedès，Sant Sadurní d'Anoia 是其心臟。",
    },
    "S3M2L2": {
        "mapRegion": "catalonia",
        "title": "Cava 葡萄品種產區分布",
        "description": "Macabeo・Xarel·lo・Parellada 三大本土品種在加泰羅尼亞的地理分布。",
    },
    "S3M2L3": {
        "mapRegion": "catalonia",
        "title": "Cava DE 與精品 Cava 產區",
        "description": "新設立的 Cava de Paraje Calificado 單一產區和 Cava DE 等級，強調風土表達。",
    },
    "S3M2L4": {
        "mapRegion": "catalonia",
        "title": "Corpinnat & Clàssic Penedès 精品小農地帶",
        "description": "脫離 Cava DO 的頂級小農，在 Penedès 核心地帶釀造高品質傳統法氣泡酒。",
    },
    # Level 3 — Sherry
    "S3M3L1": {
        "mapRegion": "andalucia",
        "title": "Sherry 三角地帶",
        "description": "Jerez-Xérès-Sherry、El Puerto de Santa María、Sanlúcar de Barrameda 構成的神聖三角。",
    },
    "S3M3L2": {
        "mapRegion": "andalucia",
        "title": "Albariza 白堊土地帶分布",
        "description": "反射陽光的白色白堊土（Albariza）是 Sherry 最佳風土的標誌，主要分布在三角地帶周邊。",
    },
    "S3M3L3": {
        "mapRegion": "andalucia",
        "title": "Sherry 釀酒中心",
        "description": "Jerez 城市周邊的酒莊區，Bodega 林立，索雷拉系統在此孕育數十年的複雜風味。",
    },
    "S3M3L4": {
        "mapRegion": "andalucia",
        "title": "Manzanilla — Sanlúcar 海岸微氣候",
        "description": "Sanlúcar de Barrameda 獨特的海洋微氣候，讓 Flor 酵母更活躍，創造最鹹鮮的 Manzanilla。",
    },
    # Level 3 — Module 4
    "S3M4L1": {
        "mapRegion": "castilla-leon",
        "title": "Toro & Cigales 西部產區",
        "description": "杜羅河上游，Toro 的 Tinta de Toro 和 Cigales 的粉紅酒，卡斯提亞-萊昂的另一面。",
    },
    "S3M4L2": {
        "mapRegion": "castilla-la-mancha",
        "title": "La Mancha — 世界最大 DO 高原",
        "description": "綿延數百公里的卡斯提亞高原，Airén 白品種和 Cencibel（Tempranillo）的廣大疆域。",
    },
    "S3M4L3": {
        "mapRegion": "aragon",
        "title": "阿拉貢 Garnacha 老藤產區",
        "description": "Campo de Borja・Cariñena・Calatayud，高海拔阿拉貢高原，世界最古老 Garnacha 老藤聚集地。",
    },
    # Level 4 — Key regions
    "S4M3L1": {
        "mapRegion": "castilla-leon",
        "title": "Ribera del Duero 頂級名莊地帶",
        "description": "Vega Sicilia・Pingus 的所在地，Burgos 省沿杜羅河的黃金地帶。",
    },
    "S4M3L2": {
        "mapRegion": "catalonia",
        "title": "Priorat 復興的核心地帶",
        "description": "Alvaro Palacios 與 René Barbier 在 1989 年落腳的 Gratallops 村莊，Priorat 文藝復興的起點。",
    },
    "S4M3L3": {
        "mapRegion": "rioja",
        "title": "Rioja 名莊核心地帶",
        "description": "Haro（Rioja Alta）的酒莊區是世界最密集的百年酒莊聚集地，也是傳統 Rioja 的象徵。",
    },
    "S4M3L4": {
        "mapRegion": "galicia",
        "title": "加利西亞頂級白酒名莊地帶",
        "description": "Rías Baixas 的 Val do Salnés 子產區，是最集中的 Albariño 精品白酒產地。",
    },
}

MAP_SLIDE_TEMPLATE = """\
  {{
    type: 'map',
    title: '{title}',
    mapRegion: '{mapRegion}',
    description: '{description}',
  }},"""

def make_map_slide(cfg):
    return MAP_SLIDE_TEMPLATE.format(**cfg)

def inject(content, lesson_key, cfg):
    """在 const {lesson_key}_slides 陣列的 summary slide 前插入 map slide"""
    # 找到該課程的開頭
    lesson_pattern = rf"const {lesson_key}_slides\s*=\s*\["
    m = re.search(lesson_pattern, content)
    if not m:
        print(f"  ❌ 找不到 {lesson_key}_slides")
        return content

    # 從課程開頭往後找第一個 type: 'summary'
    start_pos = m.start()
    # 找這個陣列的結束 ']'
    # 找 summary 的位置（在 start_pos 後）
    summary_pattern = r"  \{\s*\n\s*type: 'summary'"
    sm = re.search(summary_pattern, content[start_pos:])
    if not sm:
        print(f"  ⚠️  {lesson_key}: 找不到 summary slide，跳過")
        return content

    insert_pos = start_pos + sm.start()

    # 檢查前面是否已經有 map slide（避免重複注入）
    preceding_text = content[max(0, insert_pos-200):insert_pos]
    if "type: 'map'" in preceding_text:
        print(f"  ⏭️  {lesson_key}: 已有 map slide，跳過")
        return content

    map_slide = make_map_slide(cfg) + "\n"
    new_content = content[:insert_pos] + map_slide + "\n" + content[insert_pos:]
    print(f"  ✅ {lesson_key}: 已注入 map slide ({cfg['mapRegion']})")
    return new_content

def main():
    content = FILE.read_text(encoding="utf-8")
    original_len = len(content)

    for lesson_key, cfg in LESSON_MAP.items():
        content = inject(content, lesson_key, cfg)

    FILE.write_text(content, encoding="utf-8")
    print(f"\n完成！{FILE.name}：{original_len} → {len(content)} 字元（+{len(content)-original_len}）")

if __name__ == "__main__":
    main()
