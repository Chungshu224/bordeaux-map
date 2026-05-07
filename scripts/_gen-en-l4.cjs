// Generate EN locale overlay for L4 master-m1 through m8

const fs = require('fs');
const path = require('path');

const BASE = 'c:/Users/Chungshu/Desktop/教學網站製作20260220/Bordeaux Wine Learning';

const moduleMeta = {
  1: {
    title: "Burgundy History and Cultural Heritage",
    description: "A scholarly exploration of Burgundy's history — from Roman viticulture and monastic stewardship through the Valois dukes, the French Revolution's redistribution of vineyard ownership, and the formation of the modern AOC system",
    lessons: [
      "Roman Civilisation to Medieval Wine Culture",
      "The Valois Dukes of Burgundy and the Golden Age",
      "The French Revolution and the Redistribution of Vineyard Ownership",
      "The Phylloxera Crisis and Reconstruction",
      "The Establishment of the AOC System and Appellation Definitions",
      "Modern Burgundy's Cultural Influence"
    ]
  },
  2: {
    title: "Global Pinot Noir Comparative Study",
    description: "A master-level comparative study of Pinot Noir across the world's key regions — understanding how climate, soil and cultural context shape expression, and developing the analytical skill to identify regional provenance blind",
    lessons: [
      "Pinot Noir's Global Adaptability",
      "Burgundy: Pinot Noir's Homeland and the Global Benchmark",
      "New Zealand Central Otago: The New World Star",
      "Oregon's Willamette Valley: Carrying the Burgundian Spirit",
      "German Spätburgunder: Underestimated Elegance",
      "Sonoma Coast, California: Balancing Power and Elegance",
      "Blind Tasting: Identifying Global Pinot Noir"
    ]
  },
  3: {
    title: "Professional Sommelier Skills Training",
    description: "Comprehensive sommelier training covering service technique, wine list construction, food and wine pairing, cellar management and professional certification pathways",
    lessons: [
      "Professional Wine Service Techniques",
      "Burgundy Wine and Food Pairing",
      "Wine List Construction Strategy",
      "Professional Tasting Vocabulary and Description",
      "Cellar Management Practice",
      "Sommelier Certification Systems",
      "Client Communication and Sales Technique",
      "Handling Special Situations and Complaints"
    ]
  },
  4: {
    title: "Wine Education and Training Methods",
    description: "The pedagogy and practice of wine education — designing effective courses, leading tastings, preparing for professional certification exams and building a personal teaching brand",
    lessons: [
      "Pedagogy Design for Wine Education",
      "Tasting Event Design and Facilitation",
      "Certification Exam Preparation Strategy",
      "Online Wine Education",
      "Corporate Wine Training",
      "Building a Personal Teaching Brand"
    ]
  },
  5: {
    title: "Business Cases and Market Strategy",
    description: "Professional business analysis applied to the Burgundy wine trade — market dynamics, merchant business models, brand strategy, pricing psychology and digital marketing",
    lessons: [
      "Burgundy Wine Market Analysis",
      "Wine Merchant Business Model Analysis",
      "Brand Strategy and Positioning",
      "Pricing Strategy and Psychology",
      "Consumer Behaviour Analysis",
      "Digital Marketing and Social Media",
      "Business Case Studies"
    ]
  },
  6: {
    title: "International Trade and Import/Export Practice",
    description: "Practical guide to international wine trade — import procedures, customs and tax planning, logistics and cold-chain management, trade fair strategy and en primeur trading",
    lessons: [
      "Wine Import Process: A Complete Guide",
      "Customs Duties and Tax Planning",
      "Logistics and Cold-Chain Management",
      "International Wine Fair Strategy",
      "En Primeur Trading"
    ]
  },
  7: {
    title: "Domaine Management and Entrepreneurship",
    description: "Business fundamentals for wine estate management and entrepreneurship — business models, financial planning, brand building, sustainable farming certification, HR management and risk management",
    lessons: [
      "Wine Estate Business Model Analysis",
      "Estate Financial Planning",
      "Brand Building and Marketing",
      "Sustainable Farming and Organic Certification",
      "Human Resources Management",
      "Risk Management and Insurance"
    ]
  },
  8: {
    title: "Master Thesis and Comprehensive Assessment",
    description: "Final preparation for master-level qualification — thesis writing, comprehensive blind tasting, oral examination simulation, case study analysis and building a professional network",
    lessons: [
      "Professional Thesis Writing Guide",
      "Comprehensive Blind Tasting Test Training",
      "Oral Examination Simulation and Technique",
      "Case Study Analysis",
      "Continuing Professional Development Plan",
      "Master-Level Tasting Note Writing",
      "Building a Professional Network",
      "Final Comprehensive Assessment Preparation"
    ]
  }
};

for (let m = 1; m <= 8; m++) {
  const src = JSON.parse(fs.readFileSync(`${BASE}/public/bourgogne/data/courses/level4/master-m${m}.json`));
  const meta = moduleMeta[m];
  const flat = { title: meta.title, description: meta.description };

  src.lessons.forEach((lesson, i) => {
    flat[`lessons.${i}.title`] = meta.lessons[i] || lesson.title;
    lesson.slides.forEach((slide, j) => {
      // First slide title = lesson title
      if (j === 0 && slide.title) flat[`lessons.${i}.slides.${j}.title`] = meta.lessons[i] || slide.title;
      else if (slide.title) flat[`lessons.${i}.slides.${j}.title`] = slide.title;
      if (slide.subtitle) flat[`lessons.${i}.slides.${j}.subtitle`] = slide.subtitle.replace(/(\d+)分鐘/, '$1 minutes').replace(/Lesson (\d+) - /, 'Lesson $1 - ');
      if (slide.description) flat[`lessons.${i}.slides.${j}.description`] = slide.description;
      if (slide.content) flat[`lessons.${i}.slides.${j}.content`] = slide.content;
      if (slide.leftTitle) flat[`lessons.${i}.slides.${j}.leftTitle`] = slide.leftTitle;
      if (slide.rightTitle) flat[`lessons.${i}.slides.${j}.rightTitle`] = slide.rightTitle;
      if (Array.isArray(slide.points)) slide.points.forEach((p, k) => { flat[`lessons.${i}.slides.${j}.points.${k}`] = p; });
      if (Array.isArray(slide.leftPoints)) slide.leftPoints.forEach((p, k) => { flat[`lessons.${i}.slides.${j}.leftPoints.${k}`] = p; });
      if (Array.isArray(slide.rightPoints)) slide.rightPoints.forEach((p, k) => { flat[`lessons.${i}.slides.${j}.rightPoints.${k}`] = p; });
      if (Array.isArray(slide.keyPoints)) slide.keyPoints.forEach((p, k) => { flat[`lessons.${i}.slides.${j}.keyPoints.${k}`] = p; });
      if (Array.isArray(slide.events)) slide.events.forEach((e, k) => {
        if (e.year) flat[`lessons.${i}.slides.${j}.events.${k}.year`] = e.year;
        if (e.title) flat[`lessons.${i}.slides.${j}.events.${k}.title`] = e.title;
        if (e.description) flat[`lessons.${i}.slides.${j}.events.${k}.description`] = e.description;
      });
      if (Array.isArray(slide.questions)) slide.questions.forEach((q, k) => {
        if (q.question) flat[`lessons.${i}.slides.${j}.questions.${k}.question`] = q.question;
        if (Array.isArray(q.options)) q.options.forEach((o, l) => { flat[`lessons.${i}.slides.${j}.questions.${k}.options.${l}`] = o; });
        if (q.explanation) flat[`lessons.${i}.slides.${j}.questions.${k}.explanation`] = q.explanation;
      });
      if (Array.isArray(slide.steps)) slide.steps.forEach((s, k) => {
        if (typeof s === 'string') flat[`lessons.${i}.slides.${j}.steps.${k}`] = s;
        else {
          if (s.title) flat[`lessons.${i}.slides.${j}.steps.${k}.title`] = s.title;
          if (s.description) flat[`lessons.${i}.slides.${j}.steps.${k}.description`] = s.description;
        }
      });
      if (Array.isArray(slide.items)) slide.items.forEach((it, k) => {
        if (typeof it === 'string') flat[`lessons.${i}.slides.${j}.items.${k}`] = it;
        else {
          Object.entries(it).forEach(([ek, ev]) => {
            if (typeof ev === 'string') flat[`lessons.${i}.slides.${j}.items.${k}.${ek}`] = ev;
          });
        }
      });
    });
  });

  const outPath = `${BASE}/src/locales/en/lessons/bourgogne/master-m${m}.json`;
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(flat, null, 2));
  console.log(`Created EN master-m${m}.json - keys:`, Object.keys(flat).length);
}
