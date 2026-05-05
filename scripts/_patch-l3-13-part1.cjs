const fs = require('fs');
const en = JSON.parse(fs.readFileSync('src/locales/en/lessons/bordeaux/l3-13-part1.json', 'utf8'));
const ja = JSON.parse(fs.readFileSync('src/locales/ja/lessons/bordeaux/l3-13-part1.json', 'utf8'));

// Use EN HTML content as base (HTML stays the same, key labels are translatable via CSS/data)
// These are complex HTML slides - keep EN content for now as a base
ja['slides.18.content'] = en['slides.18.content'];
ja['slides.19.content'] = en['slides.19.content'];
ja['slides.21.content'] = en['slides.21.content'];

fs.writeFileSync('src/locales/ja/lessons/bordeaux/l3-13-part1.json', JSON.stringify(ja, null, 2), 'utf8');
console.log('Keys:', Object.keys(ja).length);
