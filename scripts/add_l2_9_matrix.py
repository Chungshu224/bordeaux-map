import json

d = json.load(open('src/locales/en/lessons/bordeaux/l2-9.json', encoding='utf-8'))

# Slide 3: comparison-matrix (4 categories × 6 items each)
# Original: label = Chinese, value = Chinese
slide3_additions = {
    # Margaux (category 0)
    "slides.3.categories.0.items.0.label": "Style",
    "slides.3.categories.0.items.0.value": "Elegant and refined, silky smooth",
    "slides.3.categories.0.items.1.label": "Soil",
    "slides.3.categories.0.items.1.value": "Fine gravel dominant, excellent drainage",
    "slides.3.categories.0.items.2.label": "Grape",
    "slides.3.categories.0.items.2.value": "Cabernet Sauvignon (elegant style)",
    "slides.3.categories.0.items.3.label": "Aromas",
    "slides.3.categories.0.items.3.value": "Violet, rose, red berries",
    "slides.3.categories.0.items.4.label": "Ageing",
    "slides.3.categories.0.items.4.value": "20–40 years",
    "slides.3.categories.0.items.5.label": "Key Estate",
    "slides.3.categories.0.items.5.value": "Château Margaux (1st Growth)",
    # Pauillac (category 1)
    "slides.3.categories.1.items.0.label": "Style",
    "slides.3.categories.1.items.0.value": "Powerful and structured",
    "slides.3.categories.1.items.1.label": "Soil",
    "slides.3.categories.1.items.1.value": "Deep gravel, high quartz content",
    "slides.3.categories.1.items.2.label": "Grape",
    "slides.3.categories.1.items.2.value": "Cabernet Sauvignon (powerful style)",
    "slides.3.categories.1.items.3.label": "Aromas",
    "slides.3.categories.1.items.3.value": "Blackcurrant, cedar, pencil shavings, smoke",
    "slides.3.categories.1.items.4.label": "Ageing",
    "slides.3.categories.1.items.4.value": "25–50 years+",
    "slides.3.categories.1.items.5.label": "Key Estate",
    "slides.3.categories.1.items.5.value": "Lafite, Latour, Mouton (three 1st Growths)",
    # Saint-Julien (category 2)
    "slides.3.categories.2.items.0.label": "Style",
    "slides.3.categories.2.items.0.value": "Perfectly balanced, elegance meets power",
    "slides.3.categories.2.items.1.label": "Soil",
    "slides.3.categories.2.items.1.value": "Ideal combination of gravel and clay",
    "slides.3.categories.2.items.2.label": "Grape",
    "slides.3.categories.2.items.2.value": "Cabernet Sauvignon + Merlot balance",
    "slides.3.categories.2.items.3.label": "Aromas",
    "slides.3.categories.2.items.3.value": "Blackcurrant, black cherry, spice, leather",
    "slides.3.categories.2.items.4.label": "Ageing",
    "slides.3.categories.2.items.4.value": "20–35 years",
    "slides.3.categories.2.items.5.label": "Key Estate",
    "slides.3.categories.2.items.5.value": "Léoville series, Ducru-Beaucaillou",
    # Saint-Estèphe (category 3)
    "slides.3.categories.3.items.0.label": "Style",
    "slides.3.categories.3.items.0.value": "Powerful and rich, firm tannins",
    "slides.3.categories.3.items.1.label": "Soil",
    "slides.3.categories.3.items.1.value": "Higher clay content, strong water retention",
    "slides.3.categories.3.items.2.label": "Grape",
    "slides.3.categories.3.items.2.value": "Higher Merlot proportion (softening tannins)",
    "slides.3.categories.3.items.3.label": "Aromas",
    "slides.3.categories.3.items.3.value": "Dark berries, earth, smoke, mineral",
    "slides.3.categories.3.items.4.label": "Ageing",
    "slides.3.categories.3.items.4.value": "20–40 years",
    "slides.3.categories.3.items.5.label": "Key Estate",
    "slides.3.categories.3.items.5.value": "Cos d'Estournel, Montrose",
}

# Slide 8: comparison-table (headers + rows)
slide8_additions = {
    "slides.8.headers.0": "Dimension",
    "slides.8.headers.1": "Pomerol",
    "slides.8.headers.2": "Saint-Émilion",
    "slides.8.rows.0.0": "Appellation size",
    "slides.8.rows.0.1": "~800 ha (smallest)",
    "slides.8.rows.0.2": "~5,400 ha (largest on the Right Bank)",
    "slides.8.rows.1.0": "Main soils",
    "slides.8.rows.1.1": "Blue clay + gravel",
    "slides.8.rows.1.2": "Limestone, clay, gravel (diverse)",
    "slides.8.rows.2.0": "Dominant variety",
    "slides.8.rows.2.1": "Merlot (80–100%)",
    "slides.8.rows.2.2": "Merlot (60%) + Cab Franc (30%)",
    "slides.8.rows.3.0": "Style",
    "slides.8.rows.3.1": "Full-bodied, velvety, supremely supple",
    "slides.8.rows.3.2": "Elegant, balanced, complex and layered",
    "slides.8.rows.4.0": "Classification",
    "slides.8.rows.4.1": "No official classification",
    "slides.8.rows.4.2": "Premier Grand Cru Classé (dynamic)",
    "slides.8.rows.5.0": "Key châteaux",
    "slides.8.rows.5.1": "Pétrus, Le Pin, Lafleur",
    "slides.8.rows.5.2": "Ausone, Cheval Blanc, Angélus",
    "slides.8.rows.6.0": "Price positioning",
    "slides.8.rows.6.1": "Extremely high (scarcity)",
    "slides.8.rows.6.2": "High, but more diverse",
    "slides.8.rows.7.0": "Aromatic profile",
    "slides.8.rows.7.1": "Black plum, truffle, chocolate",
    "slides.8.rows.7.2": "Red berries, violet, minerality",
}

d.update(slide3_additions)
d.update(slide8_additions)

with open('src/locales/en/lessons/bordeaux/l2-9.json', 'w', encoding='utf-8') as f:
    json.dump(d, f, ensure_ascii=False, indent=2)

print(f'Updated l2-9.json: +{len(slide3_additions) + len(slide8_additions)} keys')
print(f'Total keys: {len(d)}')
