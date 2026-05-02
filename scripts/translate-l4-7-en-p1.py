import json, pathlib

f = pathlib.Path("src/locales/en/lessons/bordeaux/l4-7.json")
data = json.loads(f.read_text(encoding="utf-8"))

updates = {
    "slides.0.title": "Learning Objectives",
    "slides.1.title": "Chapter 1",
    "slides.1.subtitle": "Risk Framework",
    "slides.2.title": "Chapter 1: Risk Identification and Assessment Framework",
    "slides.2.highlights.0.title": "Risk Landscape",
    "slides.2.highlights.0.content": "Climate, market and operational risk categories and subcategories.",
    "slides.2.highlights.1.title": "Assessment Matrix",
    "slides.2.highlights.1.content": "Probability × Impact, priority classification.",
    "slides.2.highlights.2.title": "Quantification Methods",
    "slides.2.highlights.2.content": "EL, VaR, scenario analysis and stress testing.",
    "slides.3.title": "Chapter 2",
    "slides.3.subtitle": "Insurance Strategy",
    "slides.4.title": "Chapter 2: Insurance Strategy and Product Selection",
    "slides.4.highlights.0.title": "Product Landscape",
    "slides.4.highlights.0.content": "Coverage and cost of eight insurance types.",
    "slides.4.highlights.1.title": "Portfolio Design",
    "slides.4.highlights.1.content": "Basic / standard / comprehensive tiers for different scale operations.",
    "slides.4.highlights.2.title": "Best Practices",
    "slides.4.highlights.2.content": "Comparison shopping, deductibles, multi-year contracts, risk-improvement discounts.",
    "slides.5.title": "Chapter 3",
    "slides.5.subtitle": "Climate Mitigation",
    "slides.6.title": "Chapter 3: Climate Risk Mitigation Strategies",
    "slides.6.highlights.0.title": "Frost Protection",
    "slides.6.highlights.0.content": "Cost-effectiveness and effective temperature range of five techniques.",
    "slides.6.highlights.1.title": "Water Resource Strategy",
    "slides.6.highlights.1.content": "Rain-fed vs drip irrigation vs reservoir: investment and yield stability.",
    "slides.6.highlights.2.title": "Heat Wave Adaptation",
    "slides.6.highlights.2.content": "Shade netting, harvest timing and smoke taint detection.",
    "slides.7.title": "Chapter 4",
    "slides.7.subtitle": "Crisis Response",
    "slides.8.title": "Chapter 4: Crisis Response and Business Continuity",
    "slides.8.highlights.0.title": "BCM Framework",
    "slides.8.highlights.0.content": "Five phases: risk assessment → BIA → planning → drills → improvement.",
    "slides.8.highlights.1.title": "RTO / RPO",
    "slides.8.highlights.1.content": "Recovery time and data loss tolerance targets for critical processes.",
    "slides.8.highlights.2.title": "Crisis Playbooks",
    "slides.8.highlights.2.content": "Phased SOPs for frost, fire and cyberattack scenarios.",
    "slides.9.title": "Chapter 5",
    "slides.9.subtitle": "ESG Resilience",
    "slides.10.title": "Chapter 5: ESG Integration and Resilience Building",
    "slides.10.highlights.0.title": "ESG Integration",
    "slides.10.highlights.0.content": "Environmental, social and governance risks incorporated into the overall framework.",
    "slides.10.highlights.1.title": "TCFD Framework",
    "slides.10.highlights.1.content": "Four pillars: governance, strategy, risk management, metrics.",
    "slides.10.highlights.2.title": "Future Outlook",
    "slides.10.highlights.2.content": "Emerging risks: carbon tax, water quotas and growing sustainability demands.",
    "slides.11.title": "Course Summary",
    "slides.12.title": "Post-Lesson Quiz",
}

data.update(updates)
f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Done. Updated {len(updates)} short text keys.")
