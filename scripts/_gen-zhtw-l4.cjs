// Generate zh-TW locale overlay for L4 master-m1 through m8

const fs = require('fs');
const path = require('path');

const BASE = 'c:/Users/Chungshu/Desktop/教學網站製作20260220/Bordeaux Wine Learning';

for (let m = 1; m <= 8; m++) {
  const src = JSON.parse(fs.readFileSync(`${BASE}/public/bourgogne/data/courses/level4/master-m${m}.json`));
  const flat = { title: src.title, description: src.description };

  src.lessons.forEach((lesson, i) => {
    flat[`lessons.${i}.title`] = lesson.title;
    lesson.slides.forEach((slide, j) => {
      if (slide.title) flat[`lessons.${i}.slides.${j}.title`] = slide.title;
      if (slide.subtitle) flat[`lessons.${i}.slides.${j}.subtitle`] = slide.subtitle;
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
      // Handle steps/items arrays if present
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

  const outPath = `${BASE}/src/locales/zh-TW/lessons/bourgogne/master-m${m}.json`;
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(flat, null, 2));
  console.log(`Created zh-TW master-m${m}.json - keys:`, Object.keys(flat).length);
}
