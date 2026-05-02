import json, os
BASE = os.path.join(os.path.dirname(__file__), '..', 'src', 'locales', 'en', 'lessons', 'bordeaux')

def patch_file(filename, patches):
    path = os.path.join(BASE, filename)
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    count = 0
    for k, v in patches.items():
        if k in data:
            data[k] = v
            count += 1
        else:
            print(f'  WARNING: key not found: {k}')
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f'Saved {filename}  ({count} keys updated)')

patch_file('l3-11.json', {
    # ── slide 0 ──────────────────────────────────────────────────────────────
    'slides.0.title': 'Course Introduction',

    # ── slide 1 ──────────────────────────────────────────────────────────────
    'slides.1.title': 'Chapter One',
    'slides.1.subtitle': 'Ancient Origins and Medieval Development',

    # ── slide 2 ──────────────────────────────────────────────────────────────
    'slides.2.title': 'Chapter One: Ancient Origins and Medieval Development',
    'slides.2.subtitle': 'From Roman Conquest to the Age of the Monasteries',
    'slides.2.highlights.0.title': 'Roman Foundations',
    'slides.2.highlights.0.content': 'The Roman conquest laid the technical and commercial foundations of the Bordeaux wine industry, establishing an industrial framework that persists to this day',
    'slides.2.highlights.1.title': 'Monastic Innovation',
    'slides.2.highlights.1.content': 'The medieval monasteries not only preserved winemaking techniques but also drove crucial advances in variety improvement and quality enhancement',

    # ── slide 3 ──────────────────────────────────────────────────────────────
    'slides.3.title': 'Knowledge Check: Ancient Origins and Medieval Development',

    # ── slide 4 ──────────────────────────────────────────────────────────────
    'slides.4.title': 'Chapter Two',
    'slides.4.subtitle': 'The Golden Age Under English Rule',

    # ── slide 5 ──────────────────────────────────────────────────────────────
    'slides.5.title': 'Chapter Two: The Golden Age Under English Rule',
    'slides.5.subtitle': 'Trade Prosperity Unlocked by an Anglo-French Alliance',
    'slides.5.highlights.0.title': 'The Royal Marriage',
    'slides.5.highlights.0.content': 'The 1152 marriage opened 300 years of English rule over Bordeaux, establishing a durable trade relationship',
    'slides.5.highlights.1.title': 'Trade Prosperity',
    'slides.5.highlights.1.content': 'The Anglo-Bordeaux wine trade created one of the most successful international commercial models of the Middle Ages',
    'slides.5.highlights.2.title': 'Wartime Turning Point',
    'slides.5.highlights.2.content': 'Although the Hundred Years\' War ended English rule, it prompted Bordeaux to develop a diversified market strategy',

    # ── slide 6 ──────────────────────────────────────────────────────────────
    'slides.6.title': 'Knowledge Check: The Golden Age Under English Rule',

    # ── slide 7 ──────────────────────────────────────────────────────────────
    'slides.7.title': 'Chapter Three',
    'slides.7.subtitle': 'The Birth of the 1855 Classification',

    # ── slide 8 ──────────────────────────────────────────────────────────────
    'slides.8.title': 'Chapter Three: The Birth of the 1855 Classification',
    'slides.8.subtitle': 'A Historic Selection That Changed Bordeaux\'s Destiny',
    'slides.8.highlights.0.title': 'The Exposition Opportunity',
    'slides.8.highlights.0.content': 'The 1855 Paris Universal Exposition provided the historic opportunity for Bordeaux\'s classification system to be established',
    'slides.8.highlights.1.title': 'A Scientific Selection',
    'slides.8.highlights.1.content': 'The selection criteria — market price, historical reputation, and quality consistency — remain a valuable reference to this day',
    'slides.8.highlights.2.title': 'Far-Reaching Impact',
    'slides.8.highlights.2.content': 'The classification system not only transformed Bordeaux, but influenced the world\'s entire wine assessment framework',

    # ── slide 9 ──────────────────────────────────────────────────────────────
    'slides.9.title': 'Knowledge Check: The Birth of the 1855 Classification',

    # ── slide 10 ─────────────────────────────────────────────────────────────
    'slides.10.title': 'Chapter Four',
    'slides.10.subtitle': 'The Core Values of French Wine Culture',

    # ── slide 11 ─────────────────────────────────────────────────────────────
    'slides.11.title': 'Chapter Four: The Core Values of French Wine Culture',
    'slides.11.subtitle': 'Understanding the Essence of the French Art of Living',
    'slides.11.highlights.0.title': 'The Art of Living',
    'slides.11.highlights.0.content': 'Bordeaux wine embodies the essence of the French art of living (Art de Vivre), blending gastronomy, culture, and philosophical thought',
    'slides.11.highlights.1.title': 'Terroir Philosophy',
    'slides.11.highlights.1.content': 'The concept of terroir expresses deep cultural values — the harmony between humanity and nature, and the importance of time and patience',
    'slides.11.highlights.2.title': 'Cultural Soft Power',
    'slides.11.highlights.2.content': 'Bordeaux wine is a vital symbol of French cultural soft power and a vehicle for France\'s international influence',

    # ── slide 12 ─────────────────────────────────────────────────────────────
    'slides.12.title': 'Knowledge Check: The Core Values of French Wine Culture',

    # ── slide 13 ─────────────────────────────────────────────────────────────
    'slides.13.title': 'Chapter Five',
    'slides.13.subtitle': 'Bordeaux\'s Modern Cultural Status',

    # ── slide 14 ─────────────────────────────────────────────────────────────
    'slides.14.title': 'Chapter Five: Bordeaux\'s Modern Cultural Status',
    'slides.14.subtitle': 'Cultural Positioning and Influence in the Era of Globalisation',
    'slides.14.highlights.0.title': 'Global Leadership',
    'slides.14.highlights.0.content': 'Bordeaux leads the global wine culture in quality standards, educational systems, and beyond',
    'slides.14.highlights.1.title': 'Innovative Balance',
    'slides.14.highlights.1.content': 'While preserving its traditional culture, Bordeaux actively embraces the innovative concepts of digitalisation and sustainable development',
    'slides.14.highlights.2.title': 'International Reputation',
    'slides.14.highlights.2.content': 'Through cultural diplomacy and international cooperation, Bordeaux has built an exceptional global reputation and influence',

    # ── slide 15 ─────────────────────────────────────────────────────────────
    'slides.15.title': 'Knowledge Check: Bordeaux\'s Modern Cultural Status',

    # ── slide 16 ─────────────────────────────────────────────────────────────
    'slides.16.title': 'Chapter Six',
    'slides.16.subtitle': 'Modernisation Challenges and Cultural Heritage',

    # ── slide 17 ─────────────────────────────────────────────────────────────
    'slides.17.title': 'Chapter Six: Modernisation Challenges and Cultural Heritage',
    'slides.17.subtitle': 'Preserving Cultural Essence Through Change',
    'slides.17.highlights.0.title': 'Modern Impact',
    'slides.17.highlights.0.content': 'Technological progress and generational differences present unprecedented challenges for traditional wine culture',
    'slides.17.highlights.1.title': 'Creative Preservation',
    'slides.17.highlights.1.content': 'Through digital preservation and cultural innovation, the cultural essence is protected even in the midst of transformation',
    'slides.17.highlights.2.title': 'A Dual Framework',
    'slides.17.highlights.2.content': 'A dual mechanism of core-value protection and dynamic balance management ensures cultural continuity',

    # ── slide 18 ─────────────────────────────────────────────────────────────
    'slides.18.title': 'Knowledge Check: Modernisation Challenges and Cultural Heritage',

    # ── slide 19 ─────────────────────────────────────────────────────────────
    'slides.19.title': 'Course Summary: The History and Culture of Bordeaux',
    'slides.19.highlights.0.title': 'Historical Cornerstones',
    'slides.19.highlights.0.content': 'Technical heritage, international cooperation, standardisation, and adaptability are the four historical pillars of Bordeaux\'s success',
    'slides.19.highlights.1.title': 'Cultural Transmission',
    'slides.19.highlights.1.content': 'Guarding the flame, fostering innovation, broadening influence, and cultivating successors are the four missions of sustainable cultural heritage',

    # ── slide 20 ─────────────────────────────────────────────────────────────
    'slides.20.title': 'Comprehensive Quiz: History and Culture of the Bordeaux Wine Industry (All Six Chapters)',
})

print('Done.')
