// Update EN locale files for m3-m15 with proper English lesson titles and key slide titles

const fs = require('fs');

const BASE = 'c:/Users/Chungshu/Desktop/教學網站製作20260220/Bordeaux Wine Learning';

const lessonTitles = {
  3: [
    "The Science of Vintage Assessment",
    "Classic Great Vintages (1945–2000)",
    "21st Century Vintages (2000–2024)",
    "Predicting Drinking Windows",
    "Vintage Buying and Investment Strategy"
  ],
  4: [
    "Jurassic Geological Period Analysis",
    "Chablis and the Kimmeridgian Miracle",
    "Côte de Nuits vs Côte de Beaune Soil Differences",
    "Trace Elements and Flavour Expression",
    "Soil Analysis and Parcel Selection"
  ],
  5: [
    "The Art and Science of Whole-Cluster Fermentation",
    "The Science of Oak Ageing",
    "Lees Ageing and Bâtonnage Technique",
    "Malolactic Fermentation and Acidity Management",
    "Maceration and Extraction Techniques",
    "Filtration, Fining and Bottling"
  ],
  6: [
    "Clos de Vougeot: 50 Hectares of Diversity",
    "The Chambertin Family: Eight Brothers",
    "Corton: The Dual Red-and-White Grand Cru",
    "The Montrachet Family: Five Brothers",
    "Musigny vs Bonnes-Mares",
    "Grand Cru Investment Value Comparison"
  ],
  7: [
    "The Burgundy Fine Wine Market Overview",
    "Auction Market Price Analysis",
    "Portfolio Strategy",
    "En Primeur Market and Allocation Systems",
    "Risk Management and Exit Strategy"
  ],
  8: [
    "Professional Cellar Design Principles",
    "Storage Conditions and Bottle Condition Management",
    "Provenance Authentication and Fake Wine Detection",
    "Collection Insurance and Risk Management"
  ],
  9: [
    "Systematic Blind Tasting Methodology",
    "Village Character Identification",
    "Vintage Identification Techniques",
    "Producer Style Recognition",
    "Assessing Stage of Evolution",
    "Writing Professional Tasting Notes"
  ],
  10: [
    "The Science of Food and Wine Pairing",
    "Burgundy and Classical French Pairings",
    "Innovative Pairings with Asian Cuisine",
    "Michelin Restaurant Case Studies"
  ],
  11: [
    "Biodynamic Philosophy: Foundations",
    "Biodynamic Preparations and Practice",
    "Lunar Cycles and Cosmic Rhythms",
    "DRC and Leroy: In-Depth Case Studies",
    "Scientific Debate and Empirical Research"
  ],
  12: [
    "Burgundy Climate Change Data Analysis",
    "Earlier Harvests and Ripeness Challenges",
    "Domaine Adaptation Strategies and Innovation",
    "Parcel Value Reassessment and New Opportunities",
    "Burgundy in 2050: Projections"
  ],
  13: [
    "International Auction Houses",
    "Auction Process and Rules",
    "Price Valuation and Market Analysis",
    "Bidding Strategy and Risk Management"
  ],
  14: [
    "Professional Tasting Vocabulary",
    "Comparing Scoring Systems",
    "Tasting Note Structure",
    "Practical Application"
  ],
  15: [
    "Case Study 1: Planning a Domaine Visit",
    "Case Study 2: Building a Collection Portfolio",
    "Case Study 3: Designing a Restaurant Wine List",
    "Level 3 Comprehensive Review",
    "Certification Exam Preparation"
  ]
};

for (let m = 3; m <= 15; m++) {
  const filePath = `${BASE}/src/locales/en/lessons/bourgogne/advanced-m${m}.json`;
  const data = JSON.parse(fs.readFileSync(filePath));
  const titles = lessonTitles[m];
  
  titles.forEach((title, i) => {
    data[`lessons.${i}.title`] = title;
    // Also update the first slide title (which is usually same as lesson title)
    const slideKey = `lessons.${i}.slides.0.title`;
    if (data[slideKey]) data[slideKey] = title;
  });
  
  // Update subtitle format 
  for (const [k, v] of Object.entries(data)) {
    if (k.endsWith('.subtitle') && typeof v === 'string') {
      data[k] = v.replace(/(\d+)分鐘/, '$1 minutes');
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Updated EN advanced-m${m}.json lesson titles`);
}
