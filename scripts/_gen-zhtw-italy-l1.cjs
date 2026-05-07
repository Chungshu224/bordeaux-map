// Generate zh-TW locale overlay for Italy L1 (all 12 lesson files)
// Source files are already in zh-TW; extract to flat key format

const fs = require('fs');
const path = require('path');

const BASE = 'c:/Users/Chungshu/Desktop/教學網站製作20260220/Bordeaux Wine Learning';
const SRC_DIR = `${BASE}/public/italy/courses/level1`;
const OUT_DIR = `${BASE}/src/locales/zh-TW/lessons/italy`;

fs.mkdirSync(OUT_DIR, { recursive: true });

const l1files = fs.readdirSync(SRC_DIR).filter(f => f.startsWith('L1') && f.endsWith('.json') && !f.includes('quiz-bank'));

l1files.forEach(filename => {
  const src = JSON.parse(fs.readFileSync(`${SRC_DIR}/${filename}`));
  const flat = {};

  if (src.title) flat['title'] = src.title;

  if (Array.isArray(src.slides)) {
    src.slides.forEach((slide, j) => {
      if (slide.title) flat[`slides.${j}.title`] = slide.title;
      if (slide.subtitle) flat[`slides.${j}.subtitle`] = slide.subtitle;
      if (slide.description) flat[`slides.${j}.description`] = slide.description;
      if (slide.content) flat[`slides.${j}.content`] = slide.content;
      if (slide.intro) flat[`slides.${j}.intro`] = slide.intro;
      if (Array.isArray(slide.points)) slide.points.forEach((p, k) => { flat[`slides.${j}.points.${k}`] = p; });
      if (Array.isArray(slide.stats)) slide.stats.forEach((s, k) => {
        if (s.label) flat[`slides.${j}.stats.${k}.label`] = s.label;
        if (s.value) flat[`slides.${j}.stats.${k}.value`] = s.value;
      });
      if (Array.isArray(slide.questions)) slide.questions.forEach((q, k) => {
        if (q.question) flat[`slides.${j}.questions.${k}.question`] = q.question;
        if (Array.isArray(q.options)) q.options.forEach((o, l) => { flat[`slides.${j}.questions.${k}.options.${l}`] = o; });
        if (q.explanation) flat[`slides.${j}.questions.${k}.explanation`] = q.explanation;
      });
    });
  }

  if (Array.isArray(src.quiz)) {
    src.quiz.forEach((q, k) => {
      if (q.question) flat[`quiz.${k}.question`] = q.question;
      if (Array.isArray(q.options)) q.options.forEach((o, l) => { flat[`quiz.${k}.options.${l}`] = o; });
      if (q.explanation) flat[`quiz.${k}.explanation`] = q.explanation;
    });
  }

  fs.writeFileSync(`${OUT_DIR}/${filename}`, JSON.stringify(flat, null, 2));
  console.log(`Created zh-TW/${filename} - keys:`, Object.keys(flat).length);
});
