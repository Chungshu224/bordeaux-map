import json

# l3-2 slide 37: 5 takeaways
l3_2_additions = {
    "slides.37.takeaways.0.point": "Three Dimensions of Soil",
    "slides.37.takeaways.0.detail": "Physical (texture, structure, drainage), chemical (pH, minerals, fertility), and biological (microbes, mycorrhizae) properties together influence vine growth.",
    "slides.37.takeaways.1.point": "Five Key Soil Types of Bordeaux",
    "slides.37.takeaways.1.detail": "Gravel (well-drained, CS), clay (water-retentive, Merlot), limestone (elegant, CF), sand (early-ripening), mixed (balanced) — each with its character.",
    "slides.37.takeaways.2.point": "Five Pathways: Soil to Wine",
    "slides.37.takeaways.2.detail": "Water stress, mineral uptake, root depth, microbial community, and temperature regulation — the science from soil to glass.",
    "slides.37.takeaways.3.point": "Soil Diversity Is the Core of Terroir",
    "slides.37.takeaways.3.detail": "The complexity of estates like Château Cheval Blanc comes from meticulous management of diverse soil parcels and their blending.",
    "slides.37.takeaways.4.point": "Soil Challenges Under Climate Change",
    "slides.37.takeaways.4.detail": "Increased drought highlights the importance of water retention. Clay-soil appellations may gain an advantage in the future."
}

# l3-3 slide 13: 7 takeaways
l3_3_additions = {
    "slides.13.title": "Key Points Summary",
    "slides.13.takeaways.0.point": "Lessons from Historic Extreme Vintages",
    "slides.13.takeaways.0.detail": "1956 changed varietal structure; 1991 advanced frost technology; 2003 redefined ripeness; 2017 proved warming does not eliminate spring frost risks. Each extreme event drives industry evolution.",
    "slides.13.takeaways.1.point": "Six Major Climate Risk Characteristics",
    "slides.13.takeaways.1.detail": "Spring frost (most frequent and destructive — warming increases vulnerability), hail (locally devastating but unpredictable), drought/heatwave (rapidly increasing), excess rain (disease breeding ground), disease outbreaks (climate-sensitive), strong wind (localised impact).",
    "slides.13.takeaways.2.point": "Cascading and Systemic Risk",
    "slides.13.takeaways.2.detail": "One risk often triggers another: frost → low yield → disease spread; drought → heatwave → overripeness; rain → disease outbreak. Systemic thinking and integrated responses are required.",
    "slides.13.takeaways.3.point": "Five Dimensions of Risk Management",
    "slides.13.takeaways.3.detail": "Prevention (site selection, varieties, infrastructure), monitoring (technology support), response (immediate action), adaptation (long-term adjustments), economic hedging (insurance and diversification). Strategies differ by estate scale.",
    "slides.13.takeaways.4.point": "The Critical Role of Soil and Vine Age",
    "slides.13.takeaways.4.detail": "Clay soils and old vines are a major advantage in drought years (deep roots, water retention); gravel and young vines excel in wet years (good drainage). 2022 proved this point.",
    "slides.13.takeaways.5.point": "Climate Change Amplifies Risk Frequency",
    "slides.13.takeaways.5.detail": "Extreme events are shifting from 'once a century' to 'every few years' (2017/2021 consecutive spring frosts; 2003/2019/2022 heatwaves). The industry must move from 'emergency response' to 'systematic adaptation'.",
    "slides.13.takeaways.6.point": "Difficult Vintages Highlight the Human Factor",
    "slides.13.takeaways.6.detail": "2013 demonstrated that in extreme conditions, the skill, resources, and decision-making of top estates are revealed — the best embodiment of the human element in terroir."
}

# l3-4 slide 16: 6 takeaways
l3_4_additions = {
    "slides.16.takeaways.0.point": "The Full Annual Cycle of Vineyard Management",
    "slides.16.takeaways.0.detail": "Every month has key tasks: winter pruning (setting yield), spring frost protection (survival), summer green harvest (quality management), autumn harvest decisions (style definition). Each decision point profoundly shapes the final wine.",
    "slides.16.takeaways.1.point": "Principles and Challenges of Organic Viticulture",
    "slides.16.takeaways.1.detail": "Prohibits synthetic chemicals; relies on natural methods. Advantages: environmentally friendly, market premium. Challenges: difficult disease control (copper limits), high cost, climate dependency (very difficult in wet years).",
    "slides.16.takeaways.2.point": "The Unique Philosophy of Biodynamic Viticulture",
    "slides.16.takeaways.2.detail": "Adds preparations 500/501 and a cosmic calendar on top of organic principles. Blends science and mysticism — controversial yet with devoted followers. Represents the most extreme terroir philosophy.",
    "slides.16.takeaways.3.point": "The Pragmatic Balance of Sustainable Viticulture",
    "slides.16.takeaways.3.detail": "IPM (Integrated Pest Management), precision agriculture, and carbon management. Allows chemical tools when necessary; pursues environmental-economic-social triple balance. HVE certification is the most widespread in Bordeaux (60%+).",
    "slides.16.takeaways.4.point": "No 'Best' — Only 'Most Suitable'",
    "slides.16.takeaways.4.detail": "Choice depends on: climate (rainy vs. dry), scale (large vs. boutique estate), economics (cost tolerance), philosophy (beliefs), and market (target customers).",
    "slides.16.takeaways.5.point": "New Challenges Under Climate Change",
    "slides.16.takeaways.5.detail": "Increased drought favours organics (lower disease pressure), but increasing extreme rainfall events hinder organics (downy mildew outbreaks). New varieties, rootstocks, and techniques are needed."
}

updates = [
    ('src/locales/en/lessons/bordeaux/l3-2.json', l3_2_additions),
    ('src/locales/en/lessons/bordeaux/l3-3.json', l3_3_additions),
    ('src/locales/en/lessons/bordeaux/l3-4.json', l3_4_additions),
]

for path, additions in updates:
    with open(path, encoding='utf-8') as f:
        data = json.load(f)
    data.update(additions)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f'Updated {path}: +{len(additions)} keys')
