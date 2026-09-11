const fs = require('fs');
const dir = 'src/locales/en/lessons/bordeaux';
const imgRe = /\/images\/[^\\"']+\.svg/g;
const zhRe = /[\u4e00-\u9fff]/;
const seen = new Set();
fs.readdirSync(dir).filter(f => f.endsWith('.json')).forEach(f => {
  const text = fs.readFileSync(dir + '/' + f, 'utf8');
  const matches = [...text.matchAll(imgRe)];
  matches.forEach(m => {
    const raw = m[0];
    const decoded = decodeURIComponent(raw);
    if (zhRe.test(decoded) && !seen.has(raw)) {
      seen.add(raw);
      console.log(raw);
    }
  });
});
