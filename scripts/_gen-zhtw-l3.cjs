const fs = require('fs');
const path = require('path');

for (let m = 2; m <= 15; m++) {
  const src = JSON.parse(fs.readFileSync(`public/bourgogne/data/courses/level3/advanced-m${m}.json`));
  const flat = { title: src.title, description: src.description };
  src.lessons.forEach((l, i) => {
    flat[`lessons.${i}.title`] = l.title;
    l.slides.forEach((s, j) => {
      if (s.title) flat[`lessons.${i}.slides.${j}.title`] = s.title;
      if (s.subtitle) flat[`lessons.${i}.slides.${j}.subtitle`] = s.subtitle;
      if (s.description) flat[`lessons.${i}.slides.${j}.description`] = s.description;
      if (s.content) flat[`lessons.${i}.slides.${j}.content`] = s.content;
      if (s.leftTitle) flat[`lessons.${i}.slides.${j}.leftTitle`] = s.leftTitle;
      if (s.rightTitle) flat[`lessons.${i}.slides.${j}.rightTitle`] = s.rightTitle;
      if (Array.isArray(s.points)) s.points.forEach((p, k) => { flat[`lessons.${i}.slides.${j}.points.${k}`] = p; });
      if (Array.isArray(s.leftPoints)) s.leftPoints.forEach((p, k) => { flat[`lessons.${i}.slides.${j}.leftPoints.${k}`] = p; });
      if (Array.isArray(s.rightPoints)) s.rightPoints.forEach((p, k) => { flat[`lessons.${i}.slides.${j}.rightPoints.${k}`] = p; });
      if (Array.isArray(s.keyPoints)) s.keyPoints.forEach((p, k) => { flat[`lessons.${i}.slides.${j}.keyPoints.${k}`] = p; });
      if (Array.isArray(s.events)) s.events.forEach((e, k) => {
        if (e.year) flat[`lessons.${i}.slides.${j}.events.${k}.year`] = e.year;
        if (e.title) flat[`lessons.${i}.slides.${j}.events.${k}.title`] = e.title;
        if (e.description) flat[`lessons.${i}.slides.${j}.events.${k}.description`] = e.description;
      });
      if (Array.isArray(s.questions)) s.questions.forEach((q, k) => {
        if (q.question) flat[`lessons.${i}.slides.${j}.questions.${k}.question`] = q.question;
        if (Array.isArray(q.options)) q.options.forEach((o, l2) => { flat[`lessons.${i}.slides.${j}.questions.${k}.options.${l2}`] = o; });
        if (q.explanation) flat[`lessons.${i}.slides.${j}.questions.${k}.explanation`] = q.explanation;
      });
    });
  });
  const outPath = `src/locales/zh-TW/lessons/bourgogne/advanced-m${m}.json`;
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(flat, null, 2));
  console.log('Created', outPath, '- keys:', Object.keys(flat).length);
}
