// Extract lesson titles from L4 modules
const fs = require('fs');
const dir = 'public/bourgogne/data/courses/level4';
for (let i = 1; i <= 8; i++) {
  const data = JSON.parse(fs.readFileSync(`${dir}/master-m${i}.json`, 'utf-8'));
  console.log(`\n=== master-m${i}: ${data.title} ===`);
  data.lessons.forEach((l, idx) => console.log(`  ${idx+1}. [${l.duration}] ${l.title}`));
}
