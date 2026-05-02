import json

path = r"c:\Users\Chungshu\Desktop\教學網站製作20260220\Bordeaux Wine Learning\src\locales\en\lessons\bordeaux\l3-13-part1.json"

with open(path, encoding="utf-8") as f:
    data = json.load(f)

def tr(val, pairs):
    val = val.replace("[ZH] ", "").replace("[ZH]", "")
    for zh, en in pairs:
        val = val.replace(zh, en)
    return val

# ── slides.21.content ─────────────────────────────────────────────────────────
r21 = [
    ("🔗 技術整合的核心價值", "🔗 Core Values of Technology Integration"),
    ("🎯 精準管理", "🎯 Precision Management"),
    ("通過精準農業技術實現精細化管理，提升資源利用效率和產品品質",
     "Achieving fine-grained management through precision agriculture technologies, improving resource utilisation efficiency and product quality"),
    ("📊 數據驅動", "📊 Data-Driven"),
    ("基於大數據分析的科學決策，減少經驗依賴，提高決策準確性",
     "Scientific decision-making based on big data analytics, reducing reliance on intuition and improving decision accuracy"),
    ("🤖 智能優化", "🤖 Intelligent Optimisation"),
    ("AI技術在釀造工藝中的應用，實現傳統工藝與現代科技的完美融合",
     "AI technology applied in winemaking processes, achieving perfect integration of traditional craftsmanship and modern technology"),
    ("🔄 持續創新", "🔄 Continuous Innovation"),
    ("保持技術創新活力，在變化中尋找新的發展機遇和競爭優勢",
     "Maintaining technological innovation vitality, seeking new development opportunities and competitive advantages amid change"),
    ("🔮 技術發展的前景展望", "🔮 Future Outlook for Technology Development"),
    ("第一部分課程展示了科技創新在波爾多葡萄酒業中的巨大潛力。從精準農業的遙感監測，到大數據分析的智能決策，再到人工智能的釀造優化，每一項技術都在推動產業向更高效、更智能、更可持續的方向發展。這些技術不是要取代傳統，而是要讓傳統更加精確、更加科學。在第二部分中，我們將進一步探討消費者趨勢、氣候變遷應對技術，以及波爾多葡萄酒業的未來發展方向。",
     "Part One of this course has demonstrated the enormous potential of technological innovation in the Bordeaux wine industry. From remote sensing in precision agriculture, to intelligent decision-making powered by big data analytics, to AI-driven winemaking optimisation, each technology is propelling the industry towards greater efficiency, intelligence, and sustainability. These technologies are not meant to replace tradition, but to make tradition more precise and scientific. In Part Two, we will explore consumer trends, climate change response technologies, and the future direction of the Bordeaux wine industry."),
]
data["slides.21.content"] = tr(data["slides.21.content"], r21)

with open(path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Saved l3-13-part1.json (slides.21 updated)")
