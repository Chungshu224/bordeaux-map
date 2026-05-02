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

patch_file('l3-6.json', {
    # slide titles / subtitles / descriptions
    'slides.0.title': 'Course Introduction',
    'slides.1.title': 'Fundamentals of Blending',
    'slides.1.subtitle': 'From Single Variety to Perfect Harmony',
    'slides.2.title': 'Why Blend?',
    'slides.3.title': 'The Three Pillars of Bordeaux Blending',
    'slides.4.title': 'Knowledge Check: Blending Fundamentals',
    'slides.5.title': 'Left Bank vs. Right Bank Blending Philosophy',
    'slides.5.subtitle': 'Two Distinctly Different Aesthetic Pursuits',
    'slides.6.title': 'Left Bank vs. Right Bank Blending Styles',
    'slides.7.title': 'Variety Roles Explained in Detail',
    'slides.8.title': 'Knowledge Check: Left Bank and Right Bank Blending',
    'slides.9.title': 'Classic Blending Ratio Analysis',
    'slides.9.subtitle': "The Formula Secrets of Top Châteaux",
    'slides.10.title': 'Decoding the Blending Ratios of the Five First Growths',
    'slides.11.title': 'The Evolution of Blending Ratios',
    'slides.12.title': 'Knowledge Check: Classic Blending Ratios',
    'slides.13.title': "The Winemaker's Decision Process",
    'slides.13.subtitle': 'The Art from Tasting to Blending',
    'slides.14.title': 'The Complete Blending Decision Timeline',
    'slides.15.title': 'Master Interview: Michel Rolland on the Art of Blending',
    'slides.16.title': 'Knowledge Check: Winemaker Decision Process',
    'slides.17.title': 'Practical Blending Techniques',
    'slides.17.subtitle': 'Professional Tasting and Blending Methods',
    'slides.18.title': 'The Professional Blending Process',
    'slides.19.title': 'Virtual Blending Laboratory',
    'slides.20.title': 'Knowledge Check: Practical Blending Techniques',
    'slides.21.title': 'Vintage Variation and Blending Strategy',
    'slides.21.subtitle': 'Adapting to Nature, Creating Consistency',
    'slides.22.title': 'How Vintage Characteristics Influence Blending',
    'slides.23.title': 'Case Study: 2010 vs. 2013 Vintage Blending Strategies',
    'slides.24.title': 'Modern Technology and Blending Innovation',
    'slides.24.subtitle': 'Technology Empowering Traditional Artistry',
    'slides.25.title': 'Modern Blending Technology Innovations',
    'slides.26.title': 'Innovative Blending Tools Used by Top Châteaux',
    'slides.27.title': 'Knowledge Check: Modern Technology and Blending Innovation',
    'slides.28.title': 'New World vs. Old World Blending Philosophy',
    'slides.28.subtitle': 'A Dialogue Between Tradition and Innovation',
    'slides.29.title': 'The Three Global Schools of Blending Philosophy',
    'slides.30.title': 'The Evolution of Blending Philosophy',
    'slides.31.title': 'Knowledge Check: New World vs. Old World Blending Philosophy',
    'slides.32.title': 'Blending Tasting Practice',
    'slides.32.subtitle': 'Developing Professional Blending Perception',
    'slides.33.title': 'Professional Blending Tasting Techniques',
    'slides.34.title': 'Three Key Exercises for Blending Tasting',
    'slides.35.title': 'Course Summary and Advanced Learning',
    'slides.35.subtitle': 'Continued Exploration of the Art of Blending',
    'slides.36.title': 'Core Key Points Summary of the Art of Blending',
    'slides.37.title': 'Advanced Learning Pathways and Recommendations',
    'slides.38.title': 'Knowledge Check: Blending Tasting Practice',
    'slides.39.title': 'Comprehensive Competency Assessment',
    'slides.39.description': 'Test your overall understanding of the art of blending',
    'slides.40.title': 'Course Completion Certificate',
    'slides.40.description': 'Congratulations on completing your in-depth study of the art of blending! You have now mastered the core principles, practical techniques, and professional judgement skills of Bordeaux blending.',
})

print('Done.')
