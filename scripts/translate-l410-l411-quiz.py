import json
from pathlib import Path

BASE = Path(__file__).parent.parent


def sort_key(k):
    parts = k.split('.')
    result = []
    for p in parts:
        try:
            result.append((0, int(p)))
        except ValueError:
            result.append((1, p))
    return result


l410_data = {
    'slides.12.title': 'Post-Course Quiz',
    'slides.12.questions.0.question': 'A winery deploys a demand forecasting system using XGBoost with promotional variables; MAPE improves from 18.5% to 8.7%. Which feature most likely contributes the highest importance?',
    'slides.12.questions.0.options.0.text': 'Monthly seasonality',
    'slides.12.questions.0.options.0.explanation': 'Month is important but typically ranks below promotions and recent sales (18% in this case).',
    'slides.12.questions.0.options.1.text': 'Promotional discount percentage',
    'slides.12.questions.0.options.1.explanation': 'Correct! Promotional discount directly drives demand; in this case it contributes 35% feature importance — the key driver.',
    'slides.12.questions.0.options.2.text': 'Competitor pricing',
    'slides.12.questions.0.options.2.explanation': 'Competitor price has some influence but typically ranks below own promotional strategy.',
    'slides.12.questions.0.options.3.text': 'Weather temperature',
    'slides.12.questions.0.options.3.explanation': 'Weather affects certain products (e.g., sparkling wine) but has lower overall importance than promotions.',
    'slides.12.questions.1.question': 'A fermentation monitoring system uses LSTM Autoencoder to detect stuck fermentation. Normal batch: MSE = 0.05, σ = 0.01; new batch: MSE = 0.09. How should this be interpreted?',
    'slides.12.questions.1.options.0.text': 'Normal — MSE < 0.1',
    'slides.12.questions.1.options.0.explanation': 'Absolute thresholds are unscientific; assessment should be based on statistical distribution (μ + 3σ).',
    'slides.12.questions.1.options.1.text': 'Anomaly — MSE > μ + 3σ (0.08)',
    'slides.12.questions.1.options.1.explanation': 'Correct! 0.09 > 0.05 + 3×0.01 = 0.08, exceeding 3 standard deviations. Trigger an anomaly alert and intervene early.',
    'slides.12.questions.1.options.2.text': 'More data required before judging',
    'slides.12.questions.1.options.2.explanation': 'Sufficient statistical baseline (μ and σ) is available for immediate determination.',
    'slides.12.questions.1.options.3.text': 'Normal — only 80% higher',
    'slides.12.questions.1.options.3.explanation': 'Relative increase is insufficient for assessment; statistical significance (Z-score) should be applied.',
    'slides.12.questions.2.question': 'A winery evaluates a computer vision grape sorting system: investment €150K, annual labour savings €80K, quality premium €120K/year, annual maintenance €23K. What is the first-year ROI and payback period?',
    'slides.12.questions.2.options.0.text': 'ROI = 18%, payback 10 months',
    'slides.12.questions.2.options.0.explanation': 'Correct! Net benefit = (€80K + €120K − €23K) = €177K; ROI = (€177K − €150K) / €150K = 18%; Payback = €150K / (€177K/12) ≈ 10 months.',
    'slides.12.questions.2.options.1.text': 'ROI = 33%, payback 18 months',
    'slides.12.questions.2.options.1.explanation': 'Calculation error: maintenance cost omitted or benefit and net benefit confused.',
    'slides.12.questions.2.options.2.text': 'ROI = −2%, not viable',
    'slides.12.questions.2.options.2.explanation': 'Serious error: quality premium (€120K) completely ignored.',
    'slides.12.questions.2.options.3.text': 'ROI = 133%, payback 3 months',
    'slides.12.questions.2.options.3.explanation': 'Overly optimistic: annual benefit confused with first-year ROI.',
}

l411_data = {
    'slides.12.title': 'Post-Course Quiz',
    'slides.12.questions.0.question': 'An investor buys Chateau Margaux 2023 en primeur at Tranche 1 (€360/bottle, sold out in 3 days). Tranche 2 is released at €420 (+17%). Acquiring at Tranche 2, what is the opportunity cost vs Tranche 1?',
    'slides.12.questions.0.options.0.text': '€60/bottle (+17%)',
    'slides.12.questions.0.options.0.explanation': 'Correct! Tranche 2 (€420) minus Tranche 1 (€360) = €60/bottle, equivalent to paying 17% more — the price of missing the Tranche 1 window.',
    'slides.12.questions.0.options.1.text': '€360/bottle (base price)',
    'slides.12.questions.0.options.1.explanation': 'This is the Tranche 1 price, not the opportunity cost.',
    'slides.12.questions.0.options.2.text': '€780/bottle (sum of both)',
    'slides.12.questions.0.options.2.explanation': 'Opportunity cost is the difference, not the total.',
    'slides.12.questions.0.options.3.text': 'No opportunity cost; price adjustment is reasonable',
    'slides.12.questions.0.options.3.explanation': 'There is a clear opportunity cost of €60/bottle from missing Tranche 1.',
    'slides.12.questions.1.question': 'Using a multi-factor pricing model for Chateau Lynch-Bages 2023 (Parker 96, vintage 4 stars, 130,000 bottles, non-first-growth): Price = −620 + 6.8×Score + 45×Vintage + 280×FirstGrowth − 25×log(Production). What is the predicted price?',
    'slides.12.questions.1.options.0.text': '€144/bottle',
    'slides.12.questions.1.options.0.explanation': 'Calculation error: formula not correctly applied.',
    'slides.12.questions.1.options.1.text': '€211.5/bottle',
    'slides.12.questions.1.options.1.explanation': 'Calculation error: FirstGrowth possibly set to 1.',
    'slides.12.questions.1.options.2.text': '€−68.5/bottle (negative — unreasonable)',
    'slides.12.questions.1.options.2.explanation': 'Correct! Result = −81.7. Negative output shows this linear model is unsuited to second-growths. Practical comparable: €/point ≈ €1.50 → 96 × €1.50 = €144/bottle.',
    'slides.12.questions.1.options.3.text': '€420/bottle (reference: Margaux)',
    'slides.12.questions.1.options.3.explanation': 'Lynch-Bages is a second-growth; Margaux pricing is not an appropriate benchmark.',
    'slides.12.questions.2.question': "An investor sells 6 bottles of Petrus 2015 via Liv-ex at €3,600/bottle (commission 2.75% each side). If sold through Christie's instead (buyer premium 22%, seller commission 12%), what is the difference in seller net proceeds?",
    'slides.12.questions.2.options.0.text': 'Liv-ex nets ~€1,998 more',
    'slides.12.questions.2.options.0.explanation': "Correct! Liv-ex net: €21,600 − €594 = €21,006. Auction net: €21,600 − €2,592 = €19,008. Difference ≈ €1,998. Christie's buyer premium further compresses realised value, making the gap larger in practice.",
    'slides.12.questions.2.options.1.text': 'Auction nets €5,400 more',
    'slides.12.questions.2.options.1.explanation': 'Calculation error: auction commissions are far higher than Liv-ex.',
    'slides.12.questions.2.options.2.text': 'Both yield the same result',
    'slides.12.questions.2.options.2.explanation': 'Incorrect: Liv-ex commission (2.75%) is substantially lower than auction seller commission (12%).',
    'slides.12.questions.2.options.3.text': 'Liv-ex nets €594 more',
    'slides.12.questions.2.options.3.explanation': '€594 is only the Liv-ex seller commission, not the channel difference. Correct difference accounts for auction commission of €2,592.',
}

for lid, new_keys in [('l4-10', l410_data), ('l4-11', l411_data)]:
    path = BASE / 'src' / 'locales' / 'en' / 'lessons' / 'bordeaux' / f'{lid}.json'
    data = json.loads(path.read_text(encoding='utf-8'))
    data.update(new_keys)
    sorted_data = {k: data[k] for k in sorted(data.keys(), key=sort_key)}
    path.write_text(json.dumps(sorted_data, ensure_ascii=False, indent=2), encoding='utf-8')
    quiz_q = [k for k in sorted_data if 'slides.12.questions' in k and k.endswith('.question')]
    print(f'{lid} en: {len(sorted_data)} keys, {len(quiz_q)} quiz questions translated')

print('Done.')
