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

patch_file('l3-13-part1.json', {
    # ── slide 0 ──────────────────────────────────────────────────────────────
    'slides.0.title': 'Course Introduction — Part One',

    # ── slide 1 ──────────────────────────────────────────────────────────────
    'slides.1.title': 'The Precision Agriculture Revolution',
    'slides.1.subtitle': 'Technology Reshaping Vineyard Management',

    # ── slide 2 ──────────────────────────────────────────────────────────────
    'slides.2.title': 'Satellite Remote Sensing (I): Multispectral Imagery Analysis',
    'slides.2.highlights.0.title': 'NDVI Early Warning',
    'slides.2.highlights.0.content': 'Detected water stress 2–3 weeks early, rescued €42,320 in yield, ROI 44:1',
    'slides.2.highlights.1.title': 'Thermal Infrared Precision Irrigation',
    'slides.2.highlights.1.content': 'Saved 36% water, improved quality score by 3 points, generated €200,000 in additional revenue',

    # ── slide 3 ──────────────────────────────────────────────────────────────
    'slides.3.title': 'Satellite Remote Sensing (II): High-Resolution Monitoring and Change Detection',
    'slides.3.highlights.0.title': 'Individual Vine Identification',
    'slides.3.highlights.0.content': '0.5 m resolution identifies 12,850 vines at 96% accuracy, saving 83% in labour',
    'slides.3.highlights.1.title': 'Early Disease Warning',
    'slides.3.highlights.1.content': 'Detected downy mildew 3–5 days early, avoided €60,000 in losses, ROI 12×',

    # ── slide 4 ──────────────────────────────────────────────────────────────
    'slides.4.title': 'Drone Precision Operations System',
    'slides.4.highlights.0.title': 'Emergency Damage Assessment',
    'slides.4.highlights.0.content': 'Assessed 45 ha hail damage in 2.5 hours, expedited €185,000 insurance claim, ROI 185×',
    'slides.4.highlights.1.title': 'Precision Variable-Rate Spraying',
    'slides.4.highlights.1.content': 'Reduced agrochemical use by 16%, improved control efficacy by 12%, protected €195,000 in yield',

    # ── slide 5 ──────────────────────────────────────────────────────────────
    'slides.5.title': 'IoT Sensor Network (I): Environmental and Soil Monitoring',
    'slides.5.highlights.0.title': 'Precision Frost Warning',
    'slides.5.highlights.0.content': '5 weather stations with real-time monitoring, 12-hour advance warning, zero frost damage, ROI 37×',
    'slides.5.highlights.1.title': 'Precision Soil Management',
    'slides.5.highlights.1.content': '72 sensors monitoring 24/7, saved 36% water, increased yield 6.3%, payback period 1.3 months',

    # ── slide 6 ──────────────────────────────────────────────────────────────
    'slides.6.title': 'IoT Sensor Network (II): Data Integration and Intelligent Decision-Making',
    'slides.6.highlights.0.title': 'Edge Intelligence Decision-Making',
    'slides.6.highlights.0.content': 'Autonomous irrigation response in 15 seconds, zero impact across 3 network outages, 100% reliability',
    'slides.6.highlights.1.title': '7-Day Disease Forecast',
    'slides.6.highlights.1.content': 'Predicted downy mildew 7 days in advance at 75% accuracy, avoided €567,000 in losses, ROI 16×',

    # ── slide 7 ──────────────────────────────────────────────────────────────
    'slides.7.title': 'IoT Sensor Network (II): Data Integration and Intelligent Decision-Making',
    'slides.7.highlights.0.title': 'Edge Intelligence',
    'slides.7.highlights.0.content': 'Millisecond-level response, saved 12.4% water, avoided €25,000 in over-irrigation losses',
    'slides.7.highlights.1.title': '7-Day Disease Forecast',
    'slides.7.highlights.1.content': 'Predicted downy mildew 7 days in advance at 75% accuracy, avoided €567,000 in losses, ROI 37×',

    # ── slide 8 ──────────────────────────────────────────────────────────────
    'slides.8.title': 'Chapter 1 Knowledge Check: The Precision Agriculture Revolution',

    # ── slide 9 ──────────────────────────────────────────────────────────────
    'slides.9.title': 'Big Data Analytics and Machine Learning',
    'slides.9.subtitle': 'Data-Driven Intelligent Decision-Making',

    # ── slide 10 ─────────────────────────────────────────────────────────────
    'slides.10.title': 'Multi-Source Data Integration (I): Multi-Dimensional Data Collection',
    'slides.10.highlights.0.title': 'Internal Data',
    'slides.10.highlights.0.content': 'Integrates comprehensive production data covering vineyard management and winemaking processes',
    'slides.10.highlights.1.title': 'External Data',
    'slides.10.highlights.1.content': 'Combines external environmental data such as weather and market trends for holistic analysis',

    # ── slide 11 ─────────────────────────────────────────────────────────────
    'slides.11.title': 'Multi-Source Data Integration (II): Data Processing and Cleansing',
    'slides.11.highlights.0.title': 'Data Pre-processing',
    'slides.11.highlights.0.content': 'Cleans, transforms, and optimises raw data to ensure data quality',
    'slides.11.highlights.1.title': 'Exploratory Analysis',
    'slides.11.highlights.1.content': 'Deep-dives into data patterns to uncover hidden regularities and correlations',

    # ── slide 12 ─────────────────────────────────────────────────────────────
    'slides.12.title': 'Machine Learning Applications (I): Predictive Modelling Systems',
    'slides.12.highlights.0.title': 'Yield Prediction',
    'slides.12.highlights.0.content': 'Multi-stage prediction model for accurately forecasting grape yield and harvest timing',
    'slides.12.highlights.1.title': 'Disease Early Warning',
    'slides.12.highlights.1.content': 'AI image recognition and deep learning enable early disease detection and alerts',

    # ── slide 13 ─────────────────────────────────────────────────────────────
    'slides.13.title': 'Machine Learning Applications (II): Optimisation Decision Systems',
    'slides.13.highlights.0.title': 'Resource Optimisation',
    'slides.13.highlights.0.content': 'Intelligent optimisation of irrigation and fertilisation to improve resource utilisation efficiency',
    'slides.13.highlights.1.title': 'Process Optimisation',
    'slides.13.highlights.1.content': 'AI optimises fermentation parameters and ageing strategies to enhance wine quality consistency',

    # ── slide 14 ─────────────────────────────────────────────────────────────
    'slides.14.title': 'Chapter 2 Knowledge Check: Big Data Analytics and Machine Learning',

    # ── slide 15 ─────────────────────────────────────────────────────────────
    'slides.15.title': 'AI Applications in Winemaking',
    'slides.15.subtitle': 'The Intelligent Winemaking Process Revolution',

    # ── slide 16 ─────────────────────────────────────────────────────────────
    'slides.16.title': 'AI Fermentation Management (I): Intelligent Temperature Control',
    'slides.16.highlights.0.title': 'Precision Temperature Control',
    'slides.16.highlights.0.content': 'AI achieves ultra-precise ±0.2 °C temperature control, protecting aromatics and quality',
    'slides.16.highlights.1.title': 'Intelligent Scheduling',
    'slides.16.highlights.1.content': 'Coordinated control of 32 fermentation tanks, reducing energy consumption by 32% and improving quality consistency by 45%',

    # ── slide 17 ─────────────────────────────────────────────────────────────
    'slides.17.title': 'AI Fermentation Management (II): Fermentation Process Monitoring',
    'slides.17.highlights.0.title': 'Real-Time Monitoring',
    'slides.17.highlights.0.content': '3,456 data acquisitions every 5 minutes, anomaly detection reduced from 6 hours to 5 minutes',
    'slides.17.highlights.1.title': 'Intelligent Alert',
    'slides.17.highlights.1.content': 'Predicts fermentation arrest 2.5 days in advance with 100% success rate, avoiding €95,000 in losses',

    # ── slide 18 ─────────────────────────────────────────────────────────────
    'slides.18.title': 'AI Quality Control System: Spectral Analysis and Sensory Analysis',
    'slides.18.highlights.0.title': 'Spectral Revolution',
    'slides.18.highlights.0.content': 'NIR detects 22 parameters in 30 seconds, 180× efficiency gain, 98% accuracy',
    'slides.18.highlights.1.title': 'Electronic Sensory',
    'slides.18.highlights.1.content': 'Electronic nose detects TCA contamination in 3 seconds at 97.8% accuracy, avoiding €277,000 in losses',

    # ── slide 19 ─────────────────────────────────────────────────────────────
    'slides.19.title': 'AI-Assisted Blending System: Intelligent Algorithms and Virtual Laboratory',
    'slides.19.highlights.0.title': 'Intelligent Optimisation',
    'slides.19.highlights.0.content': 'Calculates 5 million blending options in 45 minutes, 98% prediction accuracy, €588,000 in additional revenue',
    'slides.19.highlights.1.title': 'Virtual Experimentation',
    'slides.19.highlights.1.content': 'Predicts 50-year ageing quality in 2 minutes, avoids €120,000 in losses, zero-risk blending',

    # ── slide 20 ─────────────────────────────────────────────────────────────
    'slides.20.title': 'Chapter 3 Knowledge Check: AI Applications in Winemaking',

    # ── slide 21 ─────────────────────────────────────────────────────────────
    'slides.21.title': 'Course Summary: The Intelligent Fusion of Technological Innovation',
    'slides.21.highlights.0.title': 'Technology Integration',
    'slides.21.highlights.0.content': 'Precision management, data-driven insights, intelligent optimisation, and continuous innovation are the four core values of technology application',
    'slides.21.highlights.1.title': 'Future Outlook',
    'slides.21.highlights.1.content': 'Technological innovation will drive the Bordeaux wine industry toward greater efficiency, intelligence, and sustainability',

    # ── slide 22 ─────────────────────────────────────────────────────────────
    'slides.22.title': 'Part One Quiz: Precision Agriculture and Intelligent Winemaking',
})

print('Done.')
