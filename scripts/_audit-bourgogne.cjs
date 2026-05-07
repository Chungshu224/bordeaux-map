const fs = require('fs');
for (const [lv, prefix] of [['level1','beginner-m'], ['level2','intermediate-m'], ['level3','advanced-m']]) {
  const mods = JSON.parse(fs.readFileSync('public/bourgogne/data/courses/' + lv + '/modules.json','utf-8')).modules;
  console.log('\n=== ' + lv + ' ===');
  mods.forEach(m => console.log('  ' + m.id + ': ' + m.title + ' [' + m.duration + '] ' + m.lessons + 'L'));
  // Also list lessons per module
  mods.forEach(m => {
    const data = JSON.parse(fs.readFileSync('public/bourgogne/data/courses/' + lv + '/' + m.id + '.json','utf-8'));
    data.lessons.forEach((l,i) => console.log('    ' + (i+1) + '. ' + l.title + ' ' + l.duration));
  });
}
