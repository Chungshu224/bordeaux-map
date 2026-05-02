"""
為 l4-3 到 l4-9 的原有 3 道測驗題目補充 EN locale 翻譯
（這些題目之前因 RECURSIVE_KEYS 未含 questions 而未被翻譯）
"""
import json
from pathlib import Path

BASE = Path(__file__).parent.parent

EXISTING_EN = {
    'l4-3': [
        {
            'q': 'To extend barrel life and reset the aroma baseline, which process is most appropriate?',
            'opts': ['Rinse with hot water and use immediately', 'In-barrel shaving combined with re-toasting', 'Raise SO₂ concentration to 50 mg/L'],
            'exp': 'Shaving followed by re-toasting removes old stave layers and reactivates woody aromas — the standard barrel rejuvenation process.',
        },
        {
            'q': 'What is the primary advantage of concrete egg vessels?',
            'opts': ['Provide the highest micro-oxygenation transfer', 'High thermal inertia that promotes natural convection', 'Completely maintenance-free and lowest cost'],
            'exp': "Concrete's high thermal mass maintains stable fermentation temperatures and generates natural convection currents, producing a fuller palate texture.",
        },
        {
            'q': 'During toasting, how should localised charring that causes bitter flavours be prevented?',
            'opts': ['Accelerate heating to 260°C', 'Use pulsed flame and monitor core stave temperature', 'Reduce toasting time to 30 seconds'],
            'exp': 'Pulsed flame combined with core stave temperature monitoring maintains even pyrolysis throughout the wood, preventing localised charring.',
        },
    ],
    'l4-4': [
        {
            'q': 'To improve the safety margin and increase EBIT simultaneously, which strategy combination is most effective?',
            'opts': ['Increase marketing spend only, maintaining ASP and costs', 'Simultaneously raise ASP and reduce variable costs', 'Defer CAPEX and hold current pricing'],
            'exp': 'Dual-directional adjustment of both price and costs simultaneously improves contribution margin and safety margin — the most impactful lever for EBIT.',
        },
        {
            'q': 'When evaluating CAPEX, which metric accounts for the time value of cash flows?',
            'opts': ['Payback period', 'Depreciation expense', 'Net Present Value (NPV)'],
            'exp': 'NPV discounts all future cash flows to present value, fully capturing the time value of money.',
        },
        {
            'q': 'In sensitivity analysis, if production volume fluctuation has minimal impact on EBIT, what does this imply?',
            'opts': ['Fixed costs are excessively high', 'Price and cost levers are more critical than volume', 'Capacity should be expanded immediately'],
            'exp': 'Low EBIT sensitivity to volume typically indicates a high fixed-cost structure, shifting management focus towards pricing and cost optimisation.',
        },
    ],
    'l4-5': [
        {
            'q': 'To expand direct-to-consumer margins while maintaining global MSRP, which strategy combination is most suitable?',
            'opts': ['Loosen distribution discounts and increase advertising', 'Build DTC member value and tourism experiences, with distribution KPIs tied to discount levels', 'Lower flagship pricing to stimulate volume sales'],
            'exp': 'Enhancing DTC experience and member value increases margins while KPI-linked discounts prevent price erosion at the distribution level.',
        },
        {
            'q': 'When communicating in a market with the greatest cultural gap (e.g., China), what should brand messaging prioritise?',
            'opts': ['Simply repurpose European media content', 'Focus on gifting, festival narratives, and scarcity storytelling paired with localised activations', 'Rely solely on digital advertising spend'],
            'exp': 'This market places high value on gifting culture and seasonal festivals; localised narrative and experiential activations are essential for effective engagement.',
        },
        {
            'q': "If a brand's LTV/CAC ratio falls to 1.8, what is the best first action?",
            'opts': ['Halt all CRM activities and focus purely on promotions', 'Review acquisition channel costs and retention strategy; strengthen nurturing and membership value', 'Reduce product quality to cut costs'],
            'exp': 'A low LTV/CAC ratio signals excessive acquisition cost or insufficient retention; the priority is to rebalance acquisition channels and strengthen the nurturing funnel.',
        },
    ],
    'l4-6': [
        {
            'q': 'What is the core distinction between PDO (AOP) and PGI (IGP)?',
            'opts': ['PDO requires all production stages within the defined area; PGI requires at least one stage', 'PDO applies only to wine; PGI applies to all agricultural products', 'PDO requires no EU registration; PGI does'],
            'exp': 'PDO requires production, processing, and preparation to take place entirely within the defined area, offering stricter protection; PGI allows partial stages outside the area.',
        },
        {
            'q': 'If counterfeit Bordeaux AOC products are found in an overseas market, what is the fastest remedy?',
            'opts': ['File a civil lawsuit for damages directly', 'Submit a GI filing with local customs and request seizure', 'Initiate criminal proceedings'],
            'exp': 'A customs GI filing enables proactive seizure of infringing goods — low cost, fast, and the best preventive option.',
        },
        {
            'q': "In response to climate change, what is INAO's current position on AOC variety lists?",
            'opts': ['Completely prohibit any adjustments', 'Allow small-scale trial plots of heat-tolerant varieties with data monitoring', 'Fully open all international varieties'],
            'exp': 'While safeguarding terroir identity, INAO permits experimental adaptation pilots to balance heritage preservation with climate resilience.',
        },
    ],
    'l4-7': [
        {
            'q': 'A winery with €2M annual production facing high frost risk: which insurance strategy is most appropriate?',
            'opts': ['Property insurance only; self-insure frost risk', 'Frost + property + product liability insurance as the standard combination', 'Comprehensive combination including Directors & Officers (D&O) insurance'],
            'exp': 'Mid-size wineries (€1M–3M) should adopt the standard combination covering core risks (frost, property, liability); D&O insurance is suited for large or publicly listed estates.',
        },
        {
            'q': 'What is the primary distinction between frost protection fans and sprinkler irrigation?',
            'opts': ['Fans are effective at extreme cold (-7°C); irrigation only at -2°C', 'Fans are low-cost but ineffective at extreme cold; irrigation is higher-cost but effective to -7°C', 'Both methods have identical effectiveness'],
            'exp': 'Fans are effective between -2 and -4°C; sprinkler irrigation utilises the latent heat of freezing to protect down to -7°C, but requires a reliable water source and higher capital investment.',
        },
        {
            'q': 'In a Business Continuity Plan (BCP), what does RTO stand for?',
            'opts': ['Probability of risk occurrence', 'Recovery Time Objective — the target time to restore operations', 'Tolerable data loss window'],
            'exp': 'RTO (Recovery Time Objective) is the target recovery time; RPO (Recovery Point Objective) refers to the tolerable data-loss window — distinct concepts.',
        },
    ],
    'l4-8': [
        {
            'q': 'A winery emits 400 tonnes of CO₂ annually, 75% of which is Scope 3. For prioritised rapid decarbonisation, what is the best strategy?',
            'opts': ['Invest in electric tractors to replace diesel (Scope 1)', 'Sign a green electricity contract + switch to lightweight glass bottles (Scope 2 & 3)', 'Wait for suppliers to voluntarily decarbonise'],
            'exp': 'Green power immediately zeroes Scope 2; lightweight bottles reduce the largest Scope 3 item (glass) by 30–40%. Both are low-cost, rapid-impact measures.',
        },
        {
            'q': 'Under the SBTi 1.5°C scenario, what is the required annual reduction rate for Scope 1 + 2 emissions?',
            'opts': ['1.5%', '4.2%', '10%'],
            'exp': 'SBTi science-based targets require 4.2% annual reduction for Scope 1+2 and 2.5% for Scope 3 to align with the 1.5°C pathway.',
        },
        {
            'q': 'If a winery claims to be "100% natural" while actually using additives, which type of greenwashing risk does this represent?',
            'opts': ['Hidden trade-offs', 'Exaggerated claims', 'No substantive action'],
            'exp': 'Exaggerated claims involve overstating product attributes beyond factual accuracy; prevention requires third-party verification and transparent disclosure.',
        },
    ],
    'l4-9': [
        {
            'q': 'Olfactory adaptation causes perceived intensity to decline by what proportion after 60 seconds of continuous exposure to the same aroma?',
            'opts': ['10–20%', '50–70%', '90–100%'],
            'exp': 'Olfactory receptors adapt rapidly; perceived intensity drops 50–70% within 60 seconds, requiring a 3–5 minute rest period to recover baseline sensitivity.',
        },
        {
            'q': 'What is the typical sensory detection threshold for TCA cork taint?',
            'opts': ['2–4 ng/L (ppt level)', '20–40 μg/L (ppb level)', '200–400 mg/L (ppm level)'],
            'exp': 'TCA threshold is extremely low at 2–4 ng/L (ppt level), with individual variation up to 10-fold; regular panel calibration is essential.',
        },
        {
            'q': 'What is the correct sequence in a blind tasting decision tree?',
            'opts': ['Aroma → Colour → Winemaking → Climate → Confidence', 'Colour → Aroma → Climate → Winemaking → Confidence', 'Climate → Colour → Aroma → Winemaking → Confidence'],
            'exp': 'Correct sequence: Colour (narrows variety range) → Aroma (family classification) → Climate signals → Winemaking technique → Confidence assessment.',
        },
    ],
}


def sort_key(k):
    parts = k.split('.')
    result = []
    for p in parts:
        try:
            result.append((0, int(p)))
        except ValueError:
            result.append((1, p))
    return result


QUIZ_SLIDE = 12

for lesson_id, questions in EXISTING_EN.items():
    en_path = BASE / 'src' / 'locales' / 'en' / 'lessons' / 'bordeaux' / f'{lesson_id}.json'
    data = json.loads(en_path.read_text(encoding='utf-8'))
    prefix = f'slides.{QUIZ_SLIDE}.questions'
    for i, q in enumerate(questions):
        data[f'{prefix}.{i}.question'] = q['q']
        for j, opt in enumerate(q['opts']):
            data[f'{prefix}.{i}.options.{j}'] = opt
        data[f'{prefix}.{i}.explanation'] = q['exp']
    sorted_data = {k: data[k] for k in sorted(data.keys(), key=sort_key)}
    en_path.write_text(json.dumps(sorted_data, ensure_ascii=False, indent=2), encoding='utf-8')
    print(f'{lesson_id} en: {len(sorted_data)} keys (Q1-Q3 EN translations added)')

print('Done.')
