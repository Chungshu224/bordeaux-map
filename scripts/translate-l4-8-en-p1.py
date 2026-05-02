from pathlib import Path
import json

f = Path("src/locales/en/lessons/bordeaux/l4-8.json")
data = json.loads(f.read_text(encoding="utf-8"))

updates = {
    "slides.0.title": "Learning Objectives",
    "slides.1.title": "Chapter 1",
    "slides.1.subtitle": "Sustainability Framework",
    "slides.2.title": "Chapter 1: Sustainability Framework & ESG Integration",
    "slides.2.highlights.0.title": "Triple Bottom Line",
    "slides.2.highlights.0.content": "Balancing economic, environmental, and social performance to create long-term value.",
    "slides.2.highlights.1.title": "Four Key Drivers",
    "slides.2.highlights.1.content": "Regulation, market demand, risk, and brand value drive sustainability investment.",
    "slides.2.highlights.2.title": "Maturity Model",
    "slides.2.highlights.2.content": "A five-stage progression from compliance to industry leadership.",
    "slides.3.title": "Chapter 2",
    "slides.3.subtitle": "GHG Inventory",
    "slides.4.title": "Chapter 2: Greenhouse Gas Inventory Methodology",
    "slides.4.highlights.0.title": "Three-Scope Breakdown",
    "slides.4.highlights.0.content": "Typical distribution: Scope 1 (15%), Scope 2 (10%), Scope 3 (75%).",
    "slides.4.highlights.1.title": "ISO Process",
    "slides.4.highlights.1.content": "Six-step process: boundary → identification → quantification → verification → continuous improvement.",
    "slides.4.highlights.2.title": "2 kg CO₂e/bottle",
    "slides.4.highlights.2.content": "Typical carbon footprint for mid-sized wineries, with glass bottles accounting for 55%.",
    "slides.5.title": "Chapter 3",
    "slides.5.subtitle": "Decarbonization Pathways",
    "slides.6.title": "Chapter 3: Decarbonization Pathways & Technology Options",
    "slides.6.highlights.0.title": "SBTi Targets",
    "slides.6.highlights.0.content": "4.2% annual reduction for Scopes 1 & 2 under the 1.5°C scenario.",
    "slides.6.highlights.1.title": "Quick Wins",
    "slides.6.highlights.1.content": "Green electricity + lightweight bottles achieve 17.5% reduction within 12 months at low cost.",
    "slides.6.highlights.2.title": "Carbon Removal",
    "slides.6.highlights.2.content": "The final 10% of emissions must be offset via carbon sinks or DAC.",
    "slides.7.title": "Chapter 4",
    "slides.7.subtitle": "Certification Systems",
    "slides.8.title": "Chapter 4: Comparing Sustainability Certification Systems",
    "slides.8.highlights.0.title": "Six Major Certifications",
    "slides.8.highlights.0.content": "Comparison of Organic, Biodynamic, HVE, B Corp, and Carbon Neutral certifications.",
    "slides.8.highlights.1.title": "Three Pathways",
    "slides.8.highlights.1.content": "Phased strategies for farming practice, climate focus, and comprehensive ESG.",
    "slides.8.highlights.2.title": "Preventing Greenwashing",
    "slides.8.highlights.2.content": "Third-party verification, transparent disclosure, and full lifecycle assessment.",
    "slides.9.title": "Chapter 5",
    "slides.9.subtitle": "ESG Reporting",
    "slides.10.title": "Chapter 5: ESG Reporting & Stakeholder Communication",
    "slides.10.highlights.0.title": "Four Key Frameworks",
    "slides.10.highlights.0.content": "GRI, CSRD, TCFD, and SASB each have distinct emphases.",
    "slides.10.highlights.1.title": "Materiality Assessment",
    "slides.10.highlights.1.content": "A dual-axis matrix identifies priority disclosure topics.",
    "slides.10.highlights.2.title": "Stakeholders",
    "slides.10.highlights.2.content": "Key concerns and communication frequency for seven categories of stakeholders.",
    "slides.11.title": "Course Summary",
    "slides.12.title": "Post-Lesson Quiz",
}

for key, value in updates.items():
    data[key] = value

f.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
print("p1 done")
