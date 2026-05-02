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

patch_file('l3-12.json', {
    # --- Slide 0 ---
    'slides.0.title': 'Course Introduction',

    # --- Section 1: Science of Vintage Assessment ---
    'slides.1.title': 'The Science of Vintage Assessment',
    'slides.1.subtitle': 'How Climate Determines Quality',
    'slides.2.title': 'Why Are Vintages So Important?',
    'slides.3.title': 'Key Growing Periods and Climate Indicators',
    'slides.4.title': 'Vintage Differences: Left Bank vs. Right Bank',
    'slides.5.title': 'Special Vintage Requirements for Sweet White Wines',
    'slides.6.title': 'Knowledge Check: The Science of Vintage Assessment',

    # --- Section 2: Great Vintages in Modern Times ---
    'slides.7.title': 'Great Vintages in Modern Times',
    'slides.7.subtitle': 'Classic Vintages from 2000 to the Present',
    'slides.8.title': 'The Golden Decade of the 21st Century (2000\u20132010)',
    'slides.9.title': 'Outstanding Vintages of the 2010s',
    'slides.10.title': 'A New Chapter in the 2020s',
    'slides.11.title': 'Knowledge Check: Great Vintages in Modern Times',

    # --- Section 3: Science and Art of Aging ---
    'slides.12.title': 'The Science and Art of Aging',
    'slides.12.subtitle': 'How Time Transforms Wine',
    'slides.13.title': 'Chemical Changes During Aging',
    'slides.14.title': 'Aging Potential Across Different Classification Levels',
    'slides.15.title': 'How to Determine the Drinking Window',
    'slides.16.title': 'Knowledge Check: The Science and Art of Aging',

    # --- Section 4: Science of Wine Storage ---
    'slides.17.title': 'The Science of Wine Storage',
    'slides.17.subtitle': 'Protecting Your Investment',
    'slides.18.title': 'Ideal Storage Conditions',
    'slides.19.title': 'Home Storage Solutions',
    'slides.20.title': 'Common Storage Mistakes',
    'slides.21.title': 'Knowledge Check: The Science of Wine Storage',

    # --- Section 5: Wine Investment Strategies ---
    'slides.22.title': 'Wine Investment Strategies',
    'slides.22.subtitle': 'A Rational Approach to Wine Collection',
    'slides.23.title': 'Fundamentals of Wine Investment',
    'slides.24.title': 'Investment Strategies and Case Studies',
    'slides.25.title': 'Market Dynamics and Risk',
    'slides.26.title': 'Knowledge Check: Wine Investment Strategies',

    # --- Section 6: The Art and Wisdom of Time ---
    'slides.27.title': 'The Art and Wisdom of Time',
    'slides.27.subtitle': 'A Complete Perspective from Vintage to Aging',
    'slides.28.title': 'Core Takeaways Review',
    'slides.29.title': 'Knowledge Check: The Art and Wisdom of Time',

    # --- Slide 30: Course Complete ---
    'slides.30.title': 'Course Complete',
    'slides.30.description': (
        'Congratulations on mastering the professional knowledge of Bordeaux wine vintage analysis and aging potential! '
        'From climate indicators to great vintage analysis, from the chemistry of aging to storage techniques, and investment strategies — '
        'you are now fully equipped to assess the long-term value of wine.'
    ),
    'slides.30.reflection.title': 'Course Reflection',
})

print('Done.')
