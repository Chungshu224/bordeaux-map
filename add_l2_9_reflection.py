import json

d = json.load(open('src/locales/en/lessons/bordeaux/l2-9.json', encoding='utf-8'))

additions = {
    'slides.14.questions.0.question': 'Among the four star appellations of the Left Bank, which style do you prefer and why?',
    'slides.14.questions.0.prompts.0': 'Do you favour the elegance of Margaux, the power of Pauillac, the balance of Saint-Julien, or the intensity of Saint-Estèphe?',
    'slides.14.questions.0.prompts.1': 'How does this preference relate to your personal palate, food-pairing habits, or collecting goals?',
    'slides.14.questions.1.question': 'If you had to choose one wine to invest in between Pomerol and Saint-Émilion, how would you decide?',
    'slides.14.questions.1.prompts.0': 'Consider factors such as appellation size, scarcity, price trends, and style preference',
    'slides.14.questions.1.prompts.1': "Pomerol's extreme rarity vs Saint-Émilion's diverse choice — which better suits your strategy?",
}

d.update(additions)

with open('src/locales/en/lessons/bordeaux/l2-9.json', 'w', encoding='utf-8') as f:
    json.dump(d, f, ensure_ascii=False, indent=2)

print(f'Updated: +{len(additions)} keys, total: {len(d)}')
